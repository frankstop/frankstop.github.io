import React,{memo} from 'react';
import Icon from './Icon';
function Clues({puzzle,game,active,onSelect}){
 return <section className="clue-panel" aria-label="Crossword clues"><div className="clue-columns">{['across','down'].map(direction=><section className="clue-column" key={direction} aria-label={`${direction} clues`}><h3>{direction}</h3><ol>{puzzle.entries.filter(w=>w.direction===direction).map(w=>{
 const filled=w.cells.every(i=>game.letters[i]);
 return <li key={w.id}><button className={`clue ${active.id===w.id?'active':''} ${filled?'filled':''}`} aria-current={active.id===w.id?'true':undefined} onClick={()=>onSelect(w)} data-clue={w.id}><span className="clue-number">{w.number}</span><span>{w.clue} <span className="answer-length">({w.answer.length})</span></span>{filled&&<span className="filled-dot" title="All squares filled"/>}</button></li>;
 })}</ol></section>)}</div><div className="tomorrow"><span className="small-rule"/><h3>A new chapter tomorrow.</h3><p>Same time. A whole new world of words.</p><button className="text-button" onClick={()=>window.dispatchEvent(new Event('open-themes'))}>Explore the theme calendar <Icon name="right" size={15}/></button></div></section>;
}
export default memo(Clues);
