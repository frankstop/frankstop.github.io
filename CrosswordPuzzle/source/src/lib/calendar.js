export const TIME_ZONE = 'America/New_York';
export const FIRST_DATE = '2026-01-01';
export function todayKey(now = new Date()) {
  const p = new Intl.DateTimeFormat('en-US', { timeZone: TIME_ZONE, year:'numeric', month:'2-digit', day:'2-digit' }).formatToParts(now);
  const get = type => p.find(x => x.type === type).value;
  return `${get('year')}-${get('month')}-${get('day')}`;
}
export function parseDate(key) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(key)) return null;
  const d = new Date(`${key}T12:00:00Z`);
  return !isNaN(d) && d.toISOString().slice(0,10) === key ? d : null;
}
export function shiftDate(key, days) {
  const d = parseDate(key);
  if (!d) throw new Error('Invalid date');
  d.setUTCDate(d.getUTCDate()+days);
  return d.toISOString().slice(0,10);
}
export function formatDate(key, options = {weekday:'long',month:'long',day:'numeric',year:'numeric'}) {
  return new Intl.DateTimeFormat('en-US', {...options, timeZone:'UTC'}).format(parseDate(key));
}
export function monthDates(year, month) {
  return Array.from({length:new Date(Date.UTC(year,month,0)).getUTCDate()},(_,i)=>`${year}-${String(month).padStart(2,'0')}-${String(i+1).padStart(2,'0')}`);
}
