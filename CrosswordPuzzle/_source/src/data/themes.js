import { collections } from './collections.js';
import { random, shuffle } from '../lib/random.js';
import { parseDate } from '../lib/calendar.js';
const authored = collections.flatMap(c => c.themes.map(t => ({...t,category:c.category,words:c.words,focus:[...new Set(t.focus)]})));
const ordered = shuffle(authored, random('daily-cross-theme-calendar-v1'));
const slots = [];
for(let m=0;m<12;m++)for(let d=1;d<=new Date(Date.UTC(2000,m+1,0)).getUTCDate();d++)slots.push(`${String(m+1).padStart(2,'0')}-${String(d).padStart(2,'0')}`);
// Month/day is the identity. February 29 never offsets dates in other years.
const assignments = {
  '01-01':"Here's to a new year", '02-14':'Love letters', '02-29':'One extra day',
  '03-20':'Spring bulbs', '06-21':'Beside the seaside', '10-15':'Into the woods',
  '10-16':'Leaves are turning','10-31':'A haunting evening','12-25':'A Christmas story',
};
for(const [key,title] of Object.entries(assignments)){
  const a=slots.indexOf(key),b=ordered.findIndex(t=>t.title===title);
  [ordered[a],ordered[b]]=[ordered[b],ordered[a]];
}
export const THEMES = slots.map((key,i)=>({...ordered[i],key,id:`theme-${key}`}));
const byKey = new Map(THEMES.map(t=>[t.key,t]));
export function themeForDate(date) {
  if(!parseDate(date))throw new Error(`Invalid puzzle date: ${date}`);
  return byKey.get(date.slice(5));
}
export function themeDescription(theme) {
  if(theme.title==='Into the woods')return 'Follow the trail through today’s woodland wordplay.';
  if(theme.title==='Leaves are turning')return 'A little autumn color, one answer at a time.';
  return `A fresh perspective on ${theme.category.toLowerCase()}, one answer at a time.`;
}
