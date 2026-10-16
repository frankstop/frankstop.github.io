import {useState,useEffect,useRef,useMemo,useCallback} from 'react';
import {loadGame,saveGame} from './storage.js';
export function useGame(puzzle,notify,onComplete){
 const [game,setGame]=useState(()=>loadGame(puzzle));
 const [paused,setPaused]=useState(false),[pencil,setPencil]=useState(false),[errors,setErrors]=useState({});
 const gridRef=useRef(null),gameRef=useRef(game),completionFired=useRef(game.completed),fullNotified=useRef(false),storageWarned=useRef(false);
 gameRef.current=game;
 const entriesById=useMemo(()=>new Map(puzzle.entries.map(w=>[w.id,w])),[puzzle]);
 const selected=puzzle.cells[game.selected]??puzzle.cells[puzzle.entries[0].cells[0]];
 const active=entriesById.get(selected[game.direction])??entriesById.get(selected.across||selected.down)??puzzle.entries[0];
 const focusGrid=useCallback(index=>requestAnimationFrame(()=>gridRef.current?.querySelector(`[data-cell="${index}"]`)?.focus({preventScroll:true})),[]);
 const save=useCallback(g=>{if(!saveGame(puzzle,g)&&!storageWarned.current){storageWarned.current=true;notify('Your browser could not save progress. Keep this tab open to finish.');}},[puzzle,notify]);
 useEffect(()=>{save(game);},[game,save]);
 useEffect(()=>{
  if(paused||!game.started||game.completed)return;
  let last=performance.now();
  const interval=setInterval(()=>{const now=performance.now();const elapsed=Math.floor((now-last)/1000);if(elapsed){last+=elapsed*1000;setGame(g=>({...g,seconds:g.seconds+elapsed}));}},250);
  return()=>clearInterval(interval);
 },[paused,game.started,game.completed]);
 useEffect(()=>{
  const hide=()=>{if(document.hidden){setPaused(true);save(gameRef.current);}};
  const unload=()=>save(gameRef.current);
  document.addEventListener('visibilitychange',hide);window.addEventListener('pagehide',unload);
  return()=>{document.removeEventListener('visibilitychange',hide);window.removeEventListener('pagehide',unload);save(gameRef.current);};
 },[save]);
 useEffect(()=>{
  if(completionFired.current)return;
  const full=puzzle.cells.every(c=>!c.letter||game.letters[c.index]);
  if(!full){fullNotified.current=false;return;}
  if(!puzzle.cells.every(c=>!c.letter||game.letters[c.index]===c.letter)){
   if(!fullNotified.current)notify('Every square is filled. A few letters need another look.');
   fullNotified.current=true;return;
  }
  completionFired.current=true;
  setGame(g=>({...g,completed:true,completedAt:new Date().toISOString(),pencil:{}}));onComplete();
 },[game.letters,puzzle,onComplete,notify]);
 const selectEntry=useCallback(w=>{
  const g=gameRef.current,index=w.cells.find(i=>!g.letters[i])??w.cells[0];
  setGame(g=>({...g,selected:index,direction:w.direction}));focusGrid(index);
 },[focusGrid]);
 function selectCell(index){
  const cell=puzzle.cells[index];if(!cell?.letter||paused)return;
  let direction=game.direction;
  if(index===game.selected&&cell.across&&cell.down)direction=direction==='across'?'down':'across';
  if(!cell[direction])direction=cell.across?'across':'down';
  setGame(g=>({...g,selected:index,direction}));focusGrid(index);
 }
 function nextEntry(delta=1){
  const index=puzzle.entries.findIndex(w=>w.id===active.id),w=puzzle.entries[(index+delta+puzzle.entries.length)%puzzle.entries.length];
  selectEntry(w);
 }
 function key(key){
  if(paused||game.completed)return;
  if(key==='Tab'||key==='Enter'){nextEntry(1);return;}
  if(key===' '){const cell=puzzle.cells[game.selected];if(cell.across&&cell.down)setGame(g=>({...g,direction:g.direction==='across'?'down':'across'}));return;}
  if(key.startsWith('Arrow')){
   const d=key==='ArrowUp'||key==='ArrowDown'?'down':'across',delta=key==='ArrowUp'?-puzzle.size:key==='ArrowDown'?puzzle.size:key==='ArrowLeft'?-1:1;
   if(d!==game.direction&&selected[d]){setGame(g=>({...g,direction:d}));return;}
   let index=game.selected+delta;
   while(index>=0&&index<puzzle.cells.length&&(d==='down'||Math.floor(index/puzzle.size)===Math.floor(game.selected/puzzle.size))){
    if(puzzle.cells[index].letter){const cell=puzzle.cells[index];setGame(g=>({...g,selected:index,direction:cell[d]?d:cell.across?'across':'down'}));focusGrid(index);return;}
    index+=delta;
   }return;
  }
  if(key==='Home'||key==='End'){const index=key==='Home'?active.cells[0]:active.cells.at(-1);setGame(g=>({...g,selected:index}));focusGrid(index);return;}
  if(key==='Backspace'||key==='Delete'){
   let index=game.selected;
   if(key==='Backspace'&&!game.letters[index])index=active.cells[Math.max(0,active.cells.indexOf(index)-1)];
   setGame(g=>{const letters={...g.letters},notes={...g.pencil};delete letters[index];delete notes[index];return {...g,letters,pencil:notes,selected:index};});
   setErrors(e=>{const next={...e};delete next[index];return next;});focusGrid(index);return;
  }
  if(!/^[a-zA-Z]$/.test(key))return;
  const letter=key.toUpperCase(),index=game.selected;
  setErrors(e=>{const next={...e};delete next[index];return next;});
  const letters={...game.letters,[index]:letter},notes={...game.pencil};if(pencil)notes[index]=true;else delete notes[index];
  let nextIndex=index,direction=active.direction;
  const tail=active.cells.slice(active.cells.indexOf(index)+1);
  nextIndex=tail.find(i=>!letters[i])??tail[0]??index;
  if(nextIndex===index){const next=puzzle.entries.slice(puzzle.entries.indexOf(active)+1).concat(puzzle.entries.slice(0,puzzle.entries.indexOf(active))).find(w=>w.cells.some(i=>!letters[i]));if(next){nextIndex=next.cells.find(i=>!letters[i]);direction=next.direction;}}
  setGame(g=>({...g,letters,pencil:notes,selected:nextIndex,direction,started:true}));focusGrid(nextIndex);
 }
 function onKeyDown(e){
  if(e.ctrlKey||e.metaKey||e.altKey)return;
  if(e.key==='Tab'){e.preventDefault();nextEntry(e.shiftKey?-1:1);return;}
  if(e.key==='Escape'){e.preventDefault();gridRef.current?.closest('.play-panel')?.querySelector('.toolbar-button')?.focus();return;}
  if(e.key===' '||e.key.startsWith('Arrow')||['Enter','Home','End','Backspace','Delete'].includes(e.key)||/^[a-zA-Z]$/.test(e.key)){e.preventDefault();key(e.key);}
 }
 function check(scope){
  const indices=scope==='letter'?[game.selected]:scope==='word'?active.cells:puzzle.cells.filter(c=>c.letter).map(c=>c.index);
  let checked=0,wrong=0;const next={...errors};
  for(const i of indices)if(game.letters[i]){checked++;if(game.letters[i]!==puzzle.cells[i].letter){next[i]=true;wrong++;}else delete next[i];}
  setErrors(next);
  if(checked){setGame(g=>({...g,assisted:true}));notify(wrong?`${wrong} ${wrong===1?'square needs':'squares need'} another look. Incorrect letters are marked.`:'Every checked letter looks good.');}
  else notify('Fill in a few letters first, then check them.');
 }
 function reveal(scope){
  const indices=scope==='letter'?[game.selected]:scope==='word'?active.cells:puzzle.cells.filter(c=>c.letter).map(c=>c.index);
  setGame(g=>{const letters={...g.letters},notes={...g.pencil};for(const i of indices){letters[i]=puzzle.cells[i].letter;delete notes[i];}return {...g,letters,pencil:notes,revealed:[...new Set([...g.revealed,...indices])],assisted:true,started:true};});
  setErrors(e=>{const next={...e};indices.forEach(i=>delete next[i]);return next;});notify(scope==='puzzle'?'The solution is revealed.':`Revealed ${scope==='word'?'the selected word':'one letter'}.`);
 }
 function restart(){completionFired.current=false;setErrors({});setPaused(false);setGame({letters:{},pencil:{},revealed:[],seconds:0,started:false,completed:false,completedAt:null,assisted:false,selected:puzzle.entries[0].cells[0],direction:puzzle.entries[0].direction});}
 function togglePause(){if(game.completed)return;setGame(g=>({...g,started:true}));setPaused(v=>!v);}
 const filledCells=puzzle.cells.filter(c=>c.letter&&game.letters[c.index]).length,totalCells=puzzle.cells.filter(c=>c.letter).length;
 const filledWords=puzzle.entries.filter(w=>w.cells.every(i=>game.letters[i])).length;
 return {game,paused,pencil,setPencil,errors,active,gridRef,focusGrid,selectEntry,selectCell,nextEntry,key,onKeyDown,check,reveal,restart,togglePause,filledCells,totalCells,filledWords};
}
