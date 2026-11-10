# Privacy verification — standalone demo

Review date: November 10, 2026. **Final release audit. Public publication explicitly approved after local review.**

## Data provenance

The seed in `src/data.mjs` was authored independently for this demonstration. It represents a generic 32-year-old professional, six fictional accounts, recognizable institution and merchant names with invented financial records, four real ETF identities and Visa held in eight sample positions, 309 ledger records, eight historical periods, three goals and editable hypothetical assumptions.

No private database was exported, read into the seed, anonymized, rescaled, renamed or transformed. No real holdings, balances, income, accounts, documents, goals, assumptions or reports were used as seed inputs. Shared generic account types and mathematical formulas do not represent a real person's account structure.

The only reused items were individually inspected generic fixed-point arithmetic and approved V-with-swoosh vector geometry. Neither contains profile data, credentials, endpoints or financial records. No original application tree, Git history, database, upload folder, authentication layer, integration adapter, cache or source map was copied.

## Isolation controls

- Browser-native static modules only; zero package dependencies or opaque runtime SDKs.
- No backend, authentication, account linking, document upload, financial API, analytics, notification delivery, model inference or market requests.
- No cookies, local/session storage, indexed database or service worker. State is ordinary tab-local memory.
- Content Security Policy: connections, workers, plugins and form transmission blocked; scripts/fonts/assets restricted to local origins. Scripts cannot execute inline or through evaluation.
- Asset/route references are local relative paths or internal hash links. The SVG standards namespace is an identifier, not a fetched asset.
- Visitor text is escaped. Transaction and goal edits validate before mutating data; internal transfer/repayment legs cannot be edited individually.
- A second browser tab retained the original seed while the first tab held an edited purchase. Reset restored the edited tab to the original totals. No server write occurs.

## Executed inspection

Reviewed source, HTML/CSS, build scripts, package declarations, vector assets, generated static files and screenshots. An independent local denylist scan checked private names, institution/employment/school references, account identifiers, known distinctive balances, private hosts/API paths, local filesystem paths and credential patterns. The denylist itself stays outside this project and is not distributed.

No private-data matches were found. No hidden environment/database/document/cache files are included. Screenshot content is the fictional application only. The application contains no creator biography, personal photo, real-name label or employment profile. Public repository ownership appears only in README/deployment metadata, as authorized.

Browser inspection showed local script/style/icon references, and no application console warnings/errors during the final tested journeys. Full packet/HAR tracing was unavailable in the browser tool, so no packet-capture claim is made. Runtime isolation is independently supported by direct source inspection, zero dependencies, static network-client tests and enforced connection/form/worker restrictions. There is no code path to a private system or external financial provider.

All source assets are original product code or owner-approved vectors. No fonts or third-party icons are redistributed: the interface uses local system Georgia/Arial fallbacks. The demo's build uses standard runtime libraries only; no installation or dependency inventory transmission was required.

## Preservation and publication boundary

The private product's application-code diff and staging area were checked: no application changes or staged files were introduced there. Its financial services/database were never invoked by this demo task. No private records were modified or deleted.

Historical Stage A: read-only repository inspection before and after the build found only the pre-existing public README. During Stage A no local commit, public push, Pages configuration, deployment, billing setting or repository-description change occurred. The standalone directory has no copied Git metadata. The review ZIP includes only this demo directory and its fictional evidence.

Result: **privacy checks passed for the reviewed build. Publication approved subject to final checks.** The deployable file hashes in `build-manifest.json` identify the reviewed runtime. Reaudit any changed files before Stage B.
