# Vintra public release verification

Verified November 10, 2026.

- Live: https://vincent-ton.github.io/vintra/
- Repository: https://github.com/vincent-ton/vintra
- Application release commit: `5d35be83dd4e7a78f69c4bb6725a177befe5fe6e`
- Successful deployment run: https://github.com/vincent-ton/vintra/actions/runs/42790483744
- Deployment job completed successfully in 52 seconds, including test/build and temporary-artifact deletion.

## Privacy

The published runtime matches the approved local application byte for byte. All nine public static files returned HTTP 200 without authentication and matched the reviewed build. Source, bundled data, SVG assets, build files, tests, configuration, reports and screenshot bytes passed an external private-data denylist scan with zero findings. No financial documents, database files, environment files, secrets or private URLs are tracked. All 13 screenshot files were checked for embedded textual/EXIF metadata; none was found.

Financial records, account ownership, balances, transactions, quantities, costs, prices, dividends and history were generated independently. Real institution, merchant and security names are used as approved product context; they are not actual user accounts or market observations. GitHub ownership and existing contributor metadata remain normal public repository attribution, not in-app identity.

The application has no network client, backend, account connection, analytics, external runtime assets, model inference, browser persistence or private-system connection. Its Content Security Policy blocks connections, workers, plugins and form transmission. Observed app script/style/icon URLs were all local to the public site. No console warnings/errors were observed during tested journeys. Full packet capture was unavailable; this is not a HAR/network-certification claim.

The private application's source diff and staging area remained unchanged. No private database or financial service was invoked.

## Executed checks

38 automated tests passed: 32 financial/state tests and six privacy/build-boundary tests. The same build-and-test command passed in GitHub Actions before public deployment.

| Public browser check | Expected | Observed |
| --- | --- | --- |
| Public landing | Populated Home, no login | Passed |
| Balance sheet | Assets less liabilities | $189,126.40 − $430.00 = $188,696.40 |
| Portfolio | Holdings plus investment cash | $140,519.00 + $7,458.00 = $147,977.00 |
| Unrealized gain | Holdings less remaining basis | $14,619.00, 11.61% |
| Monthly cash flow | Income less purchases/refunds | $6,200.00 − $3,876.90 = $2,323.10; 37.47% |
| Purchase edit | Raise Sweetgreen $47.68 to $147.68 | Spending $3,976.90; surplus $2,223.10; Ask net worth $188,596.40 |
| Budget edit | Dining limit $700 after purchase edit | Actual $696, variance −$4, −0.57%; balances unchanged |
| Reset workspace | Restore starting data/assumptions | Net worth $188,696.40 and original budgets/goals restored |
| Scenario | Add $250 monthly income, 10 years | $620,009.43 → $650,009.43; difference $30,000; actual ledger unchanged |
| Goal | Learning sabbatical monthly plan $200 → $300 | Contribution gap → On track; completion 27 → 18 months |
| Holdings | Combine accounts and sort security | Five positions; ITOT 570 shares; account/basis/value sums preserved |
| Ask Vintra | All 12 guided questions | All executed with calculated answer/evidence |
| Ask parameters | Five-year save-more; increase $250 to $300 using numeric control | Added wealth $17,529.72 → $21,035.66 |
| Chart | Select 1M; keyboard-focus a point | Two month-end points and exact dated tooltip |
| Phone layouts | Six routes at 403px | All document widths 403px; no page overflow |
| Asset loading | Same approved nine static files | HTTP 200, byte-identical |

No redesign or financial engine rewrite was performed for publication. The release workflow and repository documentation are the only deployment-specific additions.

## Cost and operational boundaries

GitHub Pages on a public repository and a standard public-repository Ubuntu Actions runner are used. No paid provider, upgraded runner, API, database, model inference, custom domain purchase or billing setup was enabled. No dependency installation or build cache is used. The Pages artifact was 28.3 KB, limited to one-day retention and deleted successfully immediately after deployment. The build rejects static output above 2 MB.

Official pricing/limits checked:
- https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- https://docs.github.com/en/billing/concepts/product-billing/github-actions

This configuration requires no additional paid service within published free limits. It is not a guarantee of unlimited future GitHub capacity or of unrelated account-wide usage. If limits become a concern, suspend/review instead of upgrading.

## Remaining limitations

- Physical iPhone/Safari device testing was not available; phone-sized browser testing was performed.
- Data is tab-local and resets on refresh. No cloud synchronization or real account import is included.
- Prices/history are illustrative, not live quotes or actual investment returns.
- No tax-lot sales, realized-return reporting, fund look-through, stochastic simulations or production banking integrations are claimed.
- Projections use disclosed simplified assumptions; taxes/benefits, property equity and market guarantees are omitted.
- Third-party GitHub Actions emitted a nonfatal Node `punycode` deprecation notice; the workflow succeeded. This did not occur in the application console.

**Decision: GO for the approved static recruiter demonstration. No blocking issues observed in tested workflows.**
