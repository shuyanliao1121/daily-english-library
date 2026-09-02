# Phase 2 regression results

Status: 10/10 deterministic script-level tests PASS.

Method: load the actual external scripts in HTML order with Node's JavaScript VM and a minimal DOM/localStorage model. Persistence checks recreate the page runtime while retaining the same storage map. Data equality uses the previous single-file v6 as the baseline. These are script-level checks, not a browser engine simulation.

| Check | Result |
| --- | --- |
| External data separation | PASS: no inline data or script bodies; CSS and all five scripts referenced externally |
| Frozen UI | PASS: stylesheet and runtime match previous v6 byte-for-byte; page changes are limited to external asset references |
| Source data unchanged | PASS: all six original arrays/objects match the previous v6 |
| 36 visible archive cards | PASS in DOM model: archive navigation exposes the section and renders 36 cards |
| Historical article bodies | PASS: all 35 available bodies (#2–#36) render exactly; #1 missing-text notice preserved |
| Chinese summaries | PASS: all 35 available summaries render exactly |
| Words count | PASS: homepage and rendered cards both match 107 source entries |
| Speaking count | PASS: homepage and rendered cards both match 36 source entries |
| Article search | PASS: matching, empty-result and reset cases |
| Random Review | PASS: article-idea and Speaking-question branches |
| Article save persistence | PASS: saved and unsaved states retained across runtime reload; unrelated saved entry retained |
| Word mastery | PASS: new → fuzzy → known → new, including reload persistence |
| Word favorites | PASS: favorite persistence, Saved filter and removal |
| Word search/category filters | PASS: search, Vocabulary, Academic, Proper Nouns, All, Saved |
| Speaking reveal | PASS: reveal/hide state and button labels |
| Speaking categories | PASS: Finance, Psychology, All; rendered counts match filtered data |
| Auto / Light / Dark | PASS at script level: correct attribute, active choice and persistence; original system-dark CSS rules preserved |
| Reading Lamp B | PASS: B selected; fixed alpha .12 and blur 38px, original CSS unchanged |
| #37 incremental test | PASS: only articles.js, words.js and speaking.js changed |
| #37 homepage/archive | PASS: 37 / 108 / 37; archive contains #37; totals show 36 bodies and 36 summaries |
| #37 content | PASS: searchable article, body, Chinese summary, dummy word and Speaking Card render |
| #37 template untouched | PASS: index.html, css/app.css, js/app.js and expressions.js are byte-identical |
| Existing content during increment | PASS: original arrays and historical body/summary values unchanged |

## Browser verification limit

A supervised preview was started, but browser navigation was rejected by the browser URL security policy. No browser workaround was used. Real-browser asset loading, layout, actual localStorage behavior and OS-driven Auto theme rendering have not been verified in this run. They must not be inferred from the script tests. An additional direct HTTP probe also could not reach the preview from the command environment; no HTTP delivery pass is claimed.

## Delivery state

The shipped data remains the 36-article baseline. Dummy #37 lives only in reproducible test tooling. No Actions workflow or automatic publishing is included or started.
