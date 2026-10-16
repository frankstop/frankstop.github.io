const PREFIX='daily-cross:v1:';
export function readStorage(key,fallback){try{return JSON.parse(localStorage.getItem(PREFIX+key))??fallback;}catch{return fallback;}}
export function writeStorage(key,value){try{localStorage.setItem(PREFIX+key,JSON.stringify(value));return true;}catch{return false;}}
export function loadGame(puzzle){
  const data=readStorage(puzzle.date,null);
  if(!data||data.signature!==puzzle.signature)return {letters:{},pencil:{},revealed:[],seconds:0,started:false,completed:false,assisted:false,completedAt:null,selected:puzzle.entries[0].cells[0],direction:puzzle.entries[0].direction};
  const letters={};for(const [k,v] of Object.entries(data.letters??{}))if(puzzle.cells[k]?.letter&&/^[A-Z]$/.test(v))letters[k]=v;
  return {...data,letters,seconds:Math.max(0,Number(data.seconds)||0),revealed:Array.isArray(data.revealed)?data.revealed:[],pencil:data.pencil??{}};
}
export function saveGame(puzzle,game){return writeStorage(puzzle.date,{...game,signature:puzzle.signature});}
export function allResults(){
  const results=[];
  try{for(let i=0;i<localStorage.length;i++){const key=localStorage.key(i);if(/^daily-cross:v1:\d{4}-\d{2}-\d{2}$/.test(key)){const date=key.slice(PREFIX.length);const game=readStorage(date,null);if(game)results.push({date,...game});}}}catch{/* Private browsing can block storage. */}
  return results;
}
export function formatTime(total){const s=Math.max(0,Math.floor(total));return `${String(Math.floor(s/60)).padStart(2,'0')}:${String(s%60).padStart(2,'0')}`;}
