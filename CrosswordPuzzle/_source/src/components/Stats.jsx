import React from 'react';
import {allResults,formatTime} from '../lib/storage';
import {shiftDate} from '../lib/calendar';
export default function Stats({today}){
 const results=allResults().filter(g=>g.completed),dates=new Set(results.map(g=>g.date)),unassisted=results.filter(g=>!g.assisted);
 let cursor=dates.has(today)?today:shiftDate(today,-1),streak=0;while(dates.has(cursor)){streak++;cursor=shiftDate(cursor,-1);}
 const best=unassisted.length?Math.min(...unassisted.map(g=>g.seconds)):null;
 return <><p className="muted">A little progress, one day at a time. Your results stay in this browser.</p><div className="stats-grid"><div><strong>{results.length}</strong><span>Puzzles solved</span></div><div><strong>{streak}</strong><span>Puzzle-day streak</span></div><div><strong>{unassisted.length}</strong><span>Without help</span></div><div><strong>{best===null?'—':formatTime(best)}</strong><span>Best without help</span></div></div>{results.length===0?<p className="empty-state">Your first finished crossword is the start of something good.</p>:<div className="results-list">{results.sort((a,b)=>b.date.localeCompare(a.date)).slice(0,7).map(g=><div key={g.date}><span>{g.date}</span><span>{g.assisted?'With help':'Without help'}</span><strong>{formatTime(g.seconds)}</strong></div>)}</div>}<p className="fine-print">Checks and reveals count as help. A full solution revealed from the menu is recorded with help. Clearing browser data clears these statistics.</p></>;
}
