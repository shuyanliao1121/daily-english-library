# Daily English Library v6 — Phase 2

True data separation with the existing UI frozen. No build step and no framework dependencies.

## Run

Extract the entire ZIP into one folder. Open `index.html` with `css`, `js`, and `data` next to it, or serve the folder with a static HTTP server. Do not move `index.html` by itself: it now depends on the external files.

The application consists of exactly these seven runtime files:

- `index.html` — unchanged page markup, linked CSS and ordered deferred scripts
- `css/app.css` — original v6 stylesheet, unchanged
- `js/app.js` — original v6 rendering and interaction logic, unchanged
- `data/articles.js` — articles, archivedArticles, archivedSummaries
- `data/words.js` — words
- `data/speaking.js` — speakingCards
- `data/expressions.js` — expressions

Classic scripts load in that order before `js/app.js`. All paths are relative. Content is loaded directly from the data files at page load: there is no fetch, bundling, reinjection into HTML, or generated embedded-data fallback.

## Normal dataset

36 article indexes, 35 historical bodies and 35 Chinese summaries (#2–#36), 107 word entries, 36 Speaking Cards, and 11 reusable expressions. The original missing-body notice for #1 remains unchanged. Homepage counters and archive totals are still computed from the loaded arrays and objects.

Reading Lamp B remains selected with `--glow-alpha: .12` and `--glow-blur: 38px`. Navigation and homepage design are unchanged. Existing localStorage names are unchanged. Storage remains specific to the same browser and origin; this work does not introduce cross-device or cross-domain migration.

## Regression check

Node.js 22 or newer; no dependency installation:

```sh
node --test tests/regression.test.mjs
```

Ten tests passed. See `REGRESSION.md` for the checks and verification limits.

## Reproduce the data-only #37 test

```sh
node tests/incremental.mjs ../daily-english-test-37
```

The destination must not exist and must be outside this project. This copies the seven runtime files and appends test content to only:

- `data/articles.js`: dummy article #37, dummy body, dummy Chinese summary
- `data/words.js`: one dummy word
- `data/speaking.js`: one dummy Speaking Card

The test copy shows 37 articles, 108 words, 37 Speaking Cards, 36 bodies and 36 summaries. `index.html`, CSS, app.js, and expressions.js are identical to the normal copy. The normal dataset is not modified. The automated regression creates this same copy temporarily, verifies it and removes the temporary directory.

Test content is explicitly marked TEST ONLY. It is not the user's real #37 lesson.

## Publishing

No GitHub Actions files are included, and no automatic publishing has been started in Phase 2. This package supersedes the earlier build-and-embed source package for this phase.
