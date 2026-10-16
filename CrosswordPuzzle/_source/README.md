# The Daily Cross

A daily themed crossword for https://frankiejvaldez.com/CrosswordPuzzle/.

## Run and build

Node 22.12+ or 24 recommended.

```sh
npm ci
npm run dev
npm test
npm run validate
npm run build
```

`dist/` is the complete static website. Publish its contents into the portfolio repository's `CrosswordPuzzle/` directory. All asset paths are relative. No server, subscription, API key, or scheduled job is required. The date and puzzle are computed when someone opens the page.

## Content and generation

- `src/data/collections.js`: 61 curated collections, original answer/clue pairs, and six individually named focus themes per collection: 366 themes in total.
- `src/data/themes.js`: a fixed month/day theme calendar, including a dedicated February 29 theme. Leap years do not offset other days. A handful of seasonal dates are explicitly assigned.
- Each puzzle contains all six focus answers plus six supporting answers selected from its collection. Supporting answers can share the broader collection rather than the narrower daily focus.
- `src/lib/generator.js`: deterministic candidate selection, bounded crossword construction with backtracking, and independent structural validation. Every visible letter run has a clue; every answer joins the connected grid; crossing letters agree. All twelve selected words must be placed, or the app shows a clear error instead of serving an incomplete grid.
- The year indexes a combination of supporting answers. Consecutive years change actual answer selections. A finite word bank cannot promise infinitely many unique answer sets: the smallest bank has over 3,000 possible supporting combinations. A date-based seeded layout adds further variation.
- Everyone receives the same puzzle for a date. The daily boundary is midnight in `America/New_York`, handled with `Intl` including daylight saving time.
- These are casual, connected criss-cross crosswords with some unchecked letters. They do not claim rotational symmetry or fully checked American newspaper construction.

## UX

Responsive phone/tablet/desktop layout, touch keyboard, roving grid focus, clue selection, arrow/Tab/Space navigation, tentative pencil entries, pausing, checks, reveal confirmations, saved progress per date, archive, searchable theme calendar, completion/sharing, print, dark mode, and local statistics. Check and Reveal mark a result as assisted. Progress is saved only to the current browser. Browser storage restrictions produce a notice rather than crashing the game.

The running puzzle stays in place at midnight; Today takes the reader to the new edition. The archive is available from January 1, 2026. Future puzzles remain locked in the UI. Solutions are available to the client because this is a static casual game, not an anti-cheat service.

## Verification

`npm test` checks calendar completeness, curated vocabulary, deterministic construction, leap dates, New York midnight, annual answer changes, and corrupt-grid detection. `npm run validate` constructs and independently validates every date across 2026–2029 (1,461 puzzles), rejects exact duplicate grids, checks all focus words, and reports grid sizes. Pass additional years to `node scripts/validate-calendar.js 2030 2031` to expand the sweep.

Production browser tests use the published GitHub Pages URL, with desktop, phone, and tablet viewports.

## Deployment

The portfolio's existing Pages workflow publishes committed static files. The `CrosswordPuzzle/_source/` directory retains this source and its lockfile beside the deployable build. To update, build from that source and replace only the app's emitted files. Do not replace the portfolio root or its domain configuration.
