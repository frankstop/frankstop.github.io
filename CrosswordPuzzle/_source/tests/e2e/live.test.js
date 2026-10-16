import test from 'node:test';
import assert from 'node:assert/strict';
import {mkdir} from 'node:fs/promises';
import {join} from 'node:path';
import {chromium,webkit} from 'playwright';
import {generatePuzzle} from '../../src/lib/generator.js';
const URL='https://frankiejvaldez.com/CrosswordPuzzle/?date=2026-10-15';
async function open(browserType,viewport){
 const browser=await browserType.launch();
 const context=await browser.newContext({viewport,hasTouch:viewport.width<1100,isMobile:viewport.width<700});
 const page=await context.newPage(),errors=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text());});
 const response=await page.goto(URL,{waitUntil:'networkidle'});assert.equal(response.status(),200);
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
