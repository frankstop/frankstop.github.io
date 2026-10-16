import React,{memo} from 'react';
function Grid({puzzle,game,active,errors,paused,onSelect,onKeyDown,gridRef}){
 const highlighted=new Set(active.cells),revealed=new Set(game.revealed);
 return <div className="grid-container">
  <div ref={gridRef} className={`crossword-grid ${paused?'is-paused':''}`} style={{'--size':puzzle.size}} role="grid" aria-label={`${puzzle.size} by ${puzzle.size} crossword. ${active.number} ${active.direction}: ${active.clue}.`} aria-rowcount={puzzle.size} aria-colcount={puzzle.size} onKeyDown={onKeyDown}>
   {Array.from({length:puzzle.size},(_,r)=><div className="grid-row" role="row" key={r}>{puzzle.cells.slice(r*puzzle.size,(r+1)*puzzle.size).map(cell=>cell.letter?<button key={cell.index} role="gridcell" tabIndex={game.selected===cell.index&&!paused?0:-1} aria-rowindex={r+1} aria-colindex={cell.index%puzzle.size+1} aria-selected={game.selected===cell.index} aria-label={`Row ${r+1}, column ${cell.index%puzzle.size+1}${cell.number?`, clue ${cell.number}`:''}, ${game.letters[cell.index]||'blank'}${errors[cell.index]?', incorrect':''}${revealed.has(cell.index)?', revealed':''}`} data-cell={cell.index} className={`cell ${highlighted.has(cell.index)?'in-word':''} ${game.selected===cell.index?'selected':''} ${errors[cell.index]?'incorrect':''} ${game.pencil[cell.index]?'penciled':''} ${revealed.has(cell.index)?'revealed':''}`} onClick={()=>onSelect(cell.index)} disabled={paused}>
    {cell.number&&<span className="cell-number">{cell.number}</span>}<span className="cell-letter">{paused?'':game.letters[cell.index]||''}</span>{errors[cell.index]&&<span className="error-mark" aria-hidden="true"/>}
   </button>:<span key={cell.index} className="cell block" role="gridcell" aria-label="Block"/>)}</div>)}
  </div>
  {paused&&<div className="pause-veil" aria-hidden="true"><span>Your moment can wait.</span><small>Resume when you’re ready.</small></div>}
 </div>;
}
export default memo(Grid);
