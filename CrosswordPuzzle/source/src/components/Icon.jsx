import React from 'react';
const paths={
  left:'m14 6-6 6 6 6',right:'m10 6 6 6-6 6',down:'m6 9 6 6 6-6',
  sun:'M12 3v2m0 14v2M3 12h2m14 0h2M5.6 5.6 7 7m10 10 1.4 1.4M5.6 18.4 7 17M17 7l1.4-1.4',
  moon:'M20.5 13a8.5 8.5 0 0 1-9.5-9.5A8.5 8.5 0 1 0 20.5 13Z',
  pause:'M9 5v14m6-14v14',play:'m9 5 10 7-10 7Z',
  more:'M5 12h.01M12 12h.01M19 12h.01',close:'m6 6 12 12M6 18 18 6',
  check:'m5 12 4 4L19 6',keyboard:'M4 5h16v14H4zM7 9h.01M10 9h.01M13 9h.01M16 9h.01M7 12h.01M10 12h.01M13 12h.01M16 12h.01M8 16h8',
  backspace:'m9 5-7 7 7 7h12V5Zm3 4 6 6m-6 0 6-6',
  pencil:'m14 5 5 5M4 20l5-1L21 7l-5-5L4 14Z',
  calendar:'M5 4h14v17H5ZM8 2v4m8-4v4M5 9h14M8 12h.01M12 12h.01M16 12h.01M8 16h.01M12 16h.01M16 16h.01',
  share:'M12 16V3m-5 5 5-5 5 5M5 13v8h14v-8',
  chart:'M5 20V10m7 10V4m7 16v-7',undo:'M8 5 3 10l5 5M3 10h11a6 6 0 0 1 0 12',
};
export default function Icon({name,size=18,...props}){return <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={name==='pause'?3:1.6} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>{name==='sun'&&<circle cx="12" cy="12" r="4"/>}<path d={paths[name]??paths.check}/></svg>;}
