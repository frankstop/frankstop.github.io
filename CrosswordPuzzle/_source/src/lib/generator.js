import { themeForDate } from '../data/themes.js';
import { hash, random, shuffle } from './random.js';
export const GENERATOR_VERSION = 1;
function choose(n,k){let r=1;for(let i=1;i<=k;i++)r=r*(n-i+1)/i;return Math.round(r);}
// Combination unranking gives each successive year a different non-focus word
// selection, rather than merely rearranging the same twelve answers.
function combination(items,k,rank){
  const total=choose(items.length,k);rank=((rank%total)+total)%total;
  const result=[];let start=0;
  for(let left=k;left>0;left--){for(let i=start;i<=items.length-left;i++){
    const count=choose(items.length-i-1,left-1);
    if(rank<count){result.push(items[i]);start=i+1;break;}rank-=count;
  }}
  return result;
}
export function wordsForDate(date){
  const theme=themeForDate(date),focus=new Set(theme.focus);
  const rest=shuffle(theme.words.filter(w=>!focus.has(w.answer)),random(theme.id));
  const extras=combination(rest,12-focus.size,Number(date.slice(0,4))-2026);
  return [...theme.words.filter(w=>focus.has(w.answer)),...extras].map(w=>({...w,themed:focus.has(w.answer)}));
}
function construct(words,size,rng){
  const board=Array.from({length:size},()=>Array(size).fill(null));
  const placed=[];
  let minR=size,minC=size,maxR=0,maxC=0;
  const at=(r,c)=>r>=0&&r<size&&c>=0&&c<size?board[r][c]:null;
  function valid(word,r,c,dir){
    const dr=dir==='down'?1:0,dc=1-dr,endR=r+dr*(word.length-1),endC=c+dc*(word.length-1);
    if(r<0||c<0||endR>=size||endC>=size||at(r-dr,c-dc)||at(endR+dr,endC+dc))return 0;
    let crosses=0;
    for(let i=0;i<word.length;i++){
      const rr=r+dr*i,cc=c+dc*i,cell=at(rr,cc);
      if(cell){if(cell.letter!==word[i]||cell[dir])return 0;crosses++;}
      else if(at(rr-dc,cc-dr)||at(rr+dc,cc+dr))return 0;
    }
    return crosses;
  }
  function put(w,r,c,dir){
    const id=placed.length,dr=dir==='down'?1:0,dc=1-dr;
    for(let i=0;i<w.answer.length;i++){
      const rr=r+dr*i,cc=c+dc*i;
      if(!board[rr][cc])board[rr][cc]={letter:w.answer[i]};
      board[rr][cc][dir]=id+1;
      minR=Math.min(minR,rr);maxR=Math.max(maxR,rr);minC=Math.min(minC,cc);maxC=Math.max(maxC,cc);
    }
    placed.push({...w,row:r,col:c,direction:dir});
  }
  const sorted=shuffle(words,rng).map(w=>({w,weight:w.answer.length+rng()*5})).sort((a,b)=>b.weight-a.weight).map(x=>x.w);
  const [root]=sorted.splice(Math.floor(rng()*sorted.length),1),dir=rng()<.5?'across':'down';
  put(root,dir==='down'?Math.floor((size-root.answer.length)/2):Math.floor(size/2),dir==='across'?Math.floor((size-root.answer.length)/2):Math.floor(size/2),dir);
  let nodes=0;
  function search(pending){
    if(!pending.length)return true;
    if(++nodes>1800)return false;
    const options=[];
    for(let wi=0;wi<pending.length;wi++){
      const w=pending[wi],candidates=[];
      for(let r=minR;r<=maxR;r++)for(let c=minC;c<=maxC;c++){
        const cell=board[r][c];if(!cell)continue;
        for(let i=0;i<w.answer.length;i++)if(w.answer[i]===cell.letter){
          for(const d of ['across','down']){
            if(cell[d])continue;
            const dr=d==='down'?1:0,dc=1-dr,rr=r-dr*i,cc=c-dc*i;
            const crossings=valid(w.answer,rr,cc,d);if(!crossings)continue;
            const height=Math.max(maxR,rr+dr*(w.answer.length-1))-Math.min(minR,rr)+1;
            const width=Math.max(maxC,cc+dc*(w.answer.length-1))-Math.min(minC,cc)+1;
            const score=crossings*12-height*width*.09-Math.abs(width-height)*.5+rng()*5;
            candidates.push({r:rr,c:cc,dir:d,score});
          }
        }
      }
      if(candidates.length)options.push({wi,candidates:candidates.sort((a,b)=>b.score-a.score)});
    }
    if(!options.length)return false;
    // Place the most constrained currently connectable answer first. A word
    // without a placement can become available after another word is added.
    options.sort((a,b)=>a.candidates.length-b.candidates.length);
    for(const {wi,candidates} of options.slice(0,4)){
    const w=pending[wi],remaining=pending.filter((_,i)=>i!==wi);
    for(const candidate of candidates.slice(0,18)){
      const bounds=[minR,minC,maxR,maxC],changes=[];
      for(let i=0;i<w.answer.length;i++){
        const r=candidate.r+(candidate.dir==='down'?i:0),c=candidate.c+(candidate.dir==='across'?i:0);
        changes.push([r,c,board[r][c]?{...board[r][c]}:null]);
      }
      put(w,candidate.r,candidate.c,candidate.dir);
      if(search(remaining))return true;
      placed.pop();for(const [r,c,value] of changes)board[r][c]=value;
      [minR,minC,maxR,maxC]=bounds;
      if(nodes>1800)return false;
    }
    }
    return false;
  }
  search(sorted);
  const usedHeight=maxR-minR+1,usedWidth=maxC-minC+1;
  // Square frames are easier to read on touchscreens. Keep at least 13 cells.
  const dimension=Math.max(13,usedHeight,usedWidth),offR=Math.floor((dimension-usedHeight)/2),offC=Math.floor((dimension-usedWidth)/2);
  const entries=placed.map(w=>({...w,row:w.row-minR+offR,col:w.col-minC+offC}));
  return {entries,size:dimension,area:usedHeight*usedWidth};
}
function finalize(layout,date){
  const {size}=layout;
  const entries=layout.entries.sort((a,b)=>a.row-b.row||a.col-b.col||a.direction.localeCompare(b.direction));
  const starts=new Map();let number=0;
  for(const w of entries){const start=`${w.row},${w.col}`;if(!starts.has(start))starts.set(start,++number);w.number=starts.get(start);w.id=`${w.number}-${w.direction}`;w.cells=Array.from({length:w.answer.length},(_,i)=>(w.row+(w.direction==='down'?i:0))*size+w.col+(w.direction==='across'?i:0));}
  const cells=Array.from({length:size*size},(_,index)=>({index,letter:null,number:null,across:null,down:null}));
  for(const w of entries)for(let i=0;i<w.cells.length;i++){const c=cells[w.cells[i]];c.letter=w.answer[i];c[w.direction]=w.id;if(i===0)c.number=w.number;}
  const signature=String(hash(entries.map(w=>`${w.answer}:${w.row}:${w.col}:${w.direction}`).join('|')));
  const puzzle={date,version:GENERATOR_VERSION,theme:themeForDate(date),size,entries,cells,signature};
  const errors=validatePuzzle(puzzle);if(errors.length)throw new Error(errors.join('; '));
  return puzzle;
}
export function generatePuzzle(date){
  const words=wordsForDate(date),rng=random(`daily-cross-v${GENERATOR_VERSION}/${date}`);
  let best=null;
  for(const size of [13,15,17,19,21]){
    for(let attempt=0;attempt<6;attempt++){
      const layout=construct(words,size,rng);
      if(!best||layout.entries.length>best.entries.length||(layout.entries.length===best.entries.length&&layout.area<best.area))best=layout;
      if(layout.entries.length===words.length)return finalize(layout,date);
    }
  }
  throw new Error(`Unable to construct complete crossword for ${date}; ${best?.entries.length}/${words.length} placed`);
}
// Independent structural checks: every visible run must have exactly one clue,
// no orphan cells, matching crossing letters, unique numbering, one component.
export function validatePuzzle(p){
  const errors=[],seen=new Set(),byId=new Map(p.entries.map(w=>[w.id,w]));
  if(p.entries.length!==12)errors.push('Expected 12 clued words');
  for(const w of p.entries){
    if(seen.has(w.answer))errors.push('Repeated answer');seen.add(w.answer);
    if(!w.clue||w.answer.length<3||!/^[A-Z]+$/.test(w.answer))errors.push('Invalid entry');
    for(let i=0;i<w.cells.length;i++)if(p.cells[w.cells[i]]?.letter!==w.answer[i])errors.push('Crossing conflict');
    for(const index of w.cells)if(!byId.has(p.cells[index]?.[w.direction]))errors.push('Missing cell ownership');
  }
  for(let r=0;r<p.size;r++)for(let c=0;c<p.size;c++){
    const i=r*p.size+c,cell=p.cells[i];if(!cell.letter)continue;
    if(!cell.across&&!cell.down)errors.push('Orphan letter');
    for(const [dir,delta,starts] of [['across',1,c===0||!p.cells[i-1]?.letter],['down',p.size,r===0||!p.cells[i-p.size]?.letter]]){
      if(!starts)continue;
      let run='';for(let j=i;j<p.cells.length&&(dir==='down'||Math.floor(j/p.size)===r)&&p.cells[j].letter;j+=delta)run+=p.cells[j].letter;
      if(run.length>1&&!p.entries.some(w=>w.cells[0]===i&&w.direction===dir&&w.answer===run))errors.push('Unclued letter run');
    }
  }
  const visited=new Set(),queue=[p.entries[0]?.id];
  while(queue.length){const id=queue.pop();if(!id||visited.has(id))continue;visited.add(id);if(!byId.has(id)){errors.push('Missing clue ownership');continue;}for(const i of byId.get(id).cells){queue.push(p.cells[i].across,p.cells[i].down);}}
  if(visited.size!==p.entries.length)errors.push('Disconnected grid');
  return [...new Set(errors)];
}
