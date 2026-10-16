import test from 'node:test';
import assert from 'node:assert/strict';
import {THEMES,themeForDate} from '../src/data/themes.js';
import {generatePuzzle,validatePuzzle,wordsForDate} from '../src/lib/generator.js';
import {todayKey,parseDate,shiftDate,monthDates} from '../src/lib/calendar.js';
test('366 distinct authored themes with valid focus words',()=>{
 assert.equal(THEMES.length,366);assert.equal(new Set(THEMES.map(t=>t.title)).size,366);assert.equal(new Set(THEMES.map(t=>t.key)).size,366);
 for(const t of THEMES){assert.ok(t.focus.length>=6,t.title);assert.ok(t.words.length>=18);assert.equal(new Set(t.words.map(w=>w.answer)).size,t.words.length,t.title);for(const w of t.words){assert.match(w.answer,/^[A-Z]{3,13}$/);assert.ok(w.clue.length>10);}for(const f of t.focus)assert.ok(t.words.some(w=>w.answer===f),`${t.title}: ${f}`);}
});
test('calendar identities survive leap years and reject impossible dates',()=>{
 assert.equal(themeForDate('2028-03-01').id,themeForDate('2027-03-01').id);assert.equal(themeForDate('2028-02-29').title,'One extra day');assert.equal(monthDates(2028,2).length,29);assert.equal(parseDate('2027-02-29'),null);assert.equal(parseDate('2026-13-01'),null);assert.equal(shiftDate('2028-02-28',1),'2028-02-29');assert.equal(shiftDate('2027-02-28',1),'2027-03-01');assert.throws(()=>generatePuzzle('2027-02-29'));
});
test('New York midnight including DST sets the shared daily date',()=>{
 assert.equal(todayKey(new Date('2026-10-16T03:59:59Z')),'2026-10-15');assert.equal(todayKey(new Date('2026-10-16T04:00:00Z')),'2026-10-16');assert.equal(todayKey(new Date('2026-01-02T04:59:59Z')),'2026-01-01');assert.equal(todayKey(new Date('2026-01-02T05:00:00Z')),'2026-01-02');
});
test('puzzles are deterministic, fully clued and connected, with every focus word',()=>{
 const a=generatePuzzle('2026-10-15'),b=generatePuzzle('2026-10-15');assert.deepEqual(a,b);assert.equal(a.entries.length,12);assert.deepEqual(validatePuzzle(a),[]);for(const f of a.theme.focus)assert.ok(a.entries.some(w=>w.answer===f));
});
test('the next annual edition changes actual answers as well as layout',()=>{
 for(const t of THEMES){const year=t.key==='02-29'?2028:2026,next=t.key==='02-29'?2032:2027;const a=wordsForDate(`${year}-${t.key}`).map(w=>w.answer).sort().join('|'),b=wordsForDate(`${next}-${t.key}`).map(w=>w.answer).sort().join('|');assert.notEqual(a,b,t.title);}
});
test('validator rejects broken crossings and unclued adjacent runs',()=>{
 const p=generatePuzzle('2026-10-15'),c=structuredClone(p),index=c.entries[0].cells[0];c.cells[index].letter='?';assert.ok(validatePuzzle(c).includes('Crossing conflict'));
 const d=structuredClone(p);d.entries.pop();assert.ok(validatePuzzle(d).length>0);
});
