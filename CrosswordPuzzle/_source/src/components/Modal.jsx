import React,{useEffect,useRef} from 'react';
import Icon from './Icon';
export default function Modal({title,children,onClose,wide=false}){
 const ref=useRef(null);
 useEffect(()=>{const el=ref.current;el.showModal();return()=>{el.close();};},[]);
 return <dialog ref={ref} className={`modal ${wide?'modal-wide':''}`} onCancel={onClose} onClick={e=>{if(e.target===e.currentTarget){const r=e.currentTarget.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)onClose();}}} aria-labelledby="modal-title">
  <header className="modal-heading"><h2 id="modal-title">{title}</h2><button className="icon-button" onClick={onClose} aria-label="Close dialog"><Icon name="close"/></button></header>
  {children}
 </dialog>;
}
