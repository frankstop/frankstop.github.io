import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
import {join} from 'node:path';
import {chromium,webkit} from 'playwright';
import {generatePuzzle} from '../../src/lib/generator.js';
const BASE='https://frankiejvaldez.com/CrosswordPuzzle/';
async function open(browserType,viewport,{date='2026-10-15',time}={}){
 const browser=await browserType.launch();
 const context=await browser.newContext({viewport,hasTouch:viewport.width<1200,isMobile:viewport.width<700});
 const page=await context.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 if(time)await page.clock.setFixedTime(new Date(time));
 const target=BASE+(date?'?date='+date:'');
 const response=await page.goto(target,{waitUntil:'networkidle'});assert.equal(response.status(),200);
 await page.locator('.crossword-grid').waitFor();return {browser,page,errors};
}
for(const [name,type,viewport] of [
 ['phone Chromium',chromium,{width:390,height:844}],
 ['small phone Chromium',chromium,{width:320,height:740}],
 ['tablet portrait Chromium',chromium,{width:768,height:1024}],
 ['tablet landscape Chromium',chromium,{width:1180,height:820}],
 ['desktop Chromium',chromium,{width:1536,height:1024}],
 ['phone WebKit',webkit,{width:390,height:844}],
 ['tablet WebKit',webkit,{width:820,height:1180}],
])test(`${name}: live grid, clues, input, pause, storage, archive, themes`,{timeout:60000},async()=>{
 const {browser,page,errors}=await open(type,viewport);
 try{
  assert.match(await page.title(),/The Daily Cross/);
  assert.equal(await page.locator('.clue').count(),12);
  if(process.env.EVIDENCE_DIR){await mkdir(process.env.EVIDENCE_DIR,{recursive:true});await page.screenshot({path:join(process.env.EVIDENCE_DIR,name.replaceAll(' ','-')+'.png'),fullPage:true});}
  const metrics=await page.evaluate(()=>({viewport:innerWidth,width:document.documentElement.scrollWidth,grid:document.querySelector('.crossword-grid').getBoundingClientRect().toJSON()}));
  assert.ok(metrics.width<=metrics.viewport,`Horizontal overflow: ${metrics.width}/${metrics.viewport}`);
  assert.ok(metrics.grid.width<=metrics.viewport);
  if(viewport.width<700)assert.ok(await page.locator('.brand strong').evaluate(el=>el.getBoundingClientRect().height)<32,'Phone wordmark must stay on one line');
  if(viewport.width<1200)assert.ok(await page.getByRole('region',{name:'On-screen keyboard'}).isVisible());
  const first=generatePuzzle('2026-10-15').entries[0],index=first.cells[0];
  await page.locator(`[data-clue="${first.id}"]`).click();
  if(viewport.width<1200)await page.getByRole('button',{name:`Type ${first.answer[0]}`,exact:true}).click();
  else await page.locator(`[data-cell="${index}"]`).press(first.answer[0]);
  assert.equal(await page.locator(`[data-cell="${index}"] .cell-letter`).innerText(),first.answer[0]);
  await page.reload({waitUntil:'networkidle'});
  await page.locator('.crossword-grid').waitFor();
  assert.equal(await page.locator(`[data-cell="${index}"] .cell-letter`).innerText(),first.answer[0]);
  await page.locator(`[data-cell="${index}"]`).press('Escape');
  assert.ok(await page.locator('.toolbar-button').first().evaluate(el=>el===document.activeElement),'Escape must leave the grid');
  if(viewport.width<1200){await page.getByRole('button',{name:'Hide keyboard',exact:true}).click();assert.equal(await page.getByRole('region',{name:'On-screen keyboard'}).isVisible(),false);await page.getByRole('button',{name:'Keyboard',exact:true}).click();}
  await page.getByRole('button',{name:'Pause puzzle',exact:true}).click();
  assert.ok(await page.getByRole('button',{name:'Resume puzzle',exact:true}).last().isVisible());
  await page.getByRole('button',{name:'Resume puzzle',exact:true}).last().click();
  await page.getByRole('button',{name:'Archive',exact:true}).click();
  assert.ok(await page.getByRole('dialog').isVisible());
  await page.getByRole('button',{name:'366 themes',exact:true}).click();
  await page.getByLabel('Find a theme').fill('woods');
  assert.ok(await page.getByRole('button',{name:/Into the woods/}).isVisible());
  await page.getByRole('button',{name:'Close dialog'}).click();
  assert.deepEqual(errors,[]);
 }finally{await browser.close();}
});
test('a full manual solve completes, persists, and records an unassisted result',{timeout:60000},async()=>{
 const {browser,page,errors}=await open(chromium,{width:1280,height:1000});
 try{
  const puzzle=generatePuzzle('2026-10-15');
  // Visit each white square exactly once. Completing the last one opens the
  // result dialog, so no later test action is blocked behind that dialog.
  const white=puzzle.cells.filter(c=>c.letter),last=white.at(-1);
  for(const cell of white){
   await page.locator(`[data-cell="${cell.index}"]`).click();
   await page.locator(`[data-cell="${cell.index}"]`).press(cell===last?(cell.letter==='Z'?'X':'Z'):cell.letter);
  }
  assert.match(await page.getByRole('status').innerText(),/A few letters need another look/);
  await page.locator(`[data-cell="${last.index}"]`).press(last.letter);
  await page.getByRole('dialog',{name:'Beautifully done.'}).waitFor();
  assert.ok(await page.getByText('Solved without help',{exact:true}).isVisible());
  await page.getByRole('button',{name:'Close dialog'}).click();
  await page.reload({waitUntil:'networkidle'});
  await page.locator('.completed-label').waitFor();
  assert.equal(await page.locator('.cell-letter').allTextContents().then(x=>x.filter(Boolean).length),puzzle.cells.filter(c=>c.letter).length);
  assert.deepEqual(errors,[]);
 }finally{await browser.close();}
});
for(const [name,viewport] of [['phone',{width:390,height:844}],['tablet',{width:820,height:1180}]]){
 test(`${name}: New York midnight moves December to January without losing the old puzzle`,{timeout:60000},async()=>{
  const {browser,page,errors}=await open(chromium,viewport,{date:null,time:'2027-01-01T04:59:00Z'});
  try{
   const old=generatePuzzle('2026-12-31');
   assert.match(await page.locator('.date-button').innerText(),/December 31, 2026/);
   await page.getByRole('button',{name:'Type Q',exact:true}).click();
   await page.clock.setFixedTime(new Date('2027-01-01T05:01:00Z'));
   // Exercise the real fifteen-second date watcher; no application state injection.
   await page.locator('.new-day-note').waitFor({timeout:20000});
   assert.match(await page.locator('.date-button').innerText(),/December 31, 2026/);
   await page.getByRole('button',{name:'Today',exact:true}).click();
   await page.getByRole('heading',{name:"Here's to a new year",exact:true}).waitFor();
   assert.match(await page.locator('.date-button').innerText(),/January 1, 2027/);
   assert.equal(await page.getByRole('progressbar',{name:'Squares filled'}).getAttribute('aria-valuenow'),'0');
   await page.getByRole('button',{name:'Archive',exact:true}).click();
   assert.equal(await page.getByLabel('Archive year').inputValue(),'2027');
   assert.equal(await page.getByLabel('Archive month').inputValue(),'1');
   assert.equal(await page.locator('.calendar-days > span').count(),5,'January 2027 begins on Friday');
   await page.getByRole('button',{name:'Previous month',exact:true}).click();
   assert.equal(await page.getByLabel('Archive year').inputValue(),'2026');
   assert.equal(await page.getByLabel('Archive month').inputValue(),'12');
   await page.getByRole('button',{name:'Next month',exact:true}).click();
   assert.equal(await page.getByLabel('Archive year').inputValue(),'2027');
   assert.equal(await page.getByLabel('Archive month').inputValue(),'1');
   assert.ok(await page.locator('.calendar-days button').nth(1).isDisabled(),'January 2 remains locked');
   await page.getByRole('button',{name:'Close dialog',exact:true}).click();
   await page.getByRole('button',{name:'Previous day',exact:true}).click();
   await page.locator('.crossword-grid').waitFor();
   assert.match(await page.locator('.date-button').innerText(),/December 31, 2026/);
   assert.equal(await page.locator(`[data-cell="${old.entries[0].cells[0]}"] .cell-letter`).innerText(),'Q');
   assert.deepEqual(errors,[]);
  }finally{await browser.close();}
 });
 test(`${name}: leap-year archive shows February 29 and normal years show February 28`,{timeout:60000},async()=>{
  const {browser,page,errors}=await open(webkit,viewport,{date:'2032-02-29',time:'2032-03-01T01:00:00Z'});
  try{
   assert.equal(await page.locator('#theme-title').innerText(),'One extra day');
   await page.getByRole('button',{name:'Archive',exact:true}).click();
   assert.equal(await page.getByLabel('Archive year').inputValue(),'2032');
   assert.equal(await page.locator('.calendar-days button').count(),29);
   await page.getByLabel('Archive year').selectOption('2031');
   assert.equal(await page.locator('.calendar-days button').count(),28);
   await page.getByLabel('Archive year').selectOption('2032');
   assert.equal(await page.locator('.calendar-days button').count(),29);
   await page.locator('.calendar-days button').last().click();
   assert.match(await page.locator('.date-button').innerText(),/February 29, 2032/);
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
   assert.deepEqual(errors,[]);
  }finally{await browser.close();}
 });
 for(const [date,label] of [['2027-05-14','long theme title'],['2027-10-17','larger grid']])test(`${name}: ${label} stays inside the viewport in a later year`,{timeout:60000},async()=>{
  const {browser,page,errors}=await open(chromium,viewport,{date,time:'2028-01-01T17:00:00Z'});
  try{
   assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth),false);
   if(label==='larger grid')assert.equal(await page.locator('.crossword-grid').getAttribute('aria-rowcount'),'17');
   const title=await page.locator('#theme-title').boundingBox();assert.ok(title.x>=0&&title.x+title.width<=viewport.width);
   await page.getByRole('button',{name:'Type Q',exact:true}).click();
   const letter=await page.locator('.cell-letter').filter({hasText:'Q'}).first().boundingBox();
   const cell=await page.locator('.cell').filter({has:page.locator('.cell-letter').filter({hasText:'Q'})}).first().boundingBox();
   assert.ok(letter.height<=cell.height,`${label}: letter fits its square`);
   if(process.env.EVIDENCE_DIR){await mkdir(process.env.EVIDENCE_DIR,{recursive:true});await page.screenshot({path:join(process.env.EVIDENCE_DIR,`${name}-${label.replaceAll(' ','-')}.png`),fullPage:true});}
   assert.deepEqual(errors,[]);
  }finally{await browser.close();}
 });
}
