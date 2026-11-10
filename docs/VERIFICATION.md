Current public release results: [Release verification](RELEASE_VERIFICATION.md). The detailed Stage A record below is historical.

# Stage A — implementation and verification

Local preview: `http://127.0.0.1:5187/vintra/`. This is a loopback review address, not a public deployment.

## Delivered

Six working sections: Home, Activity, Spending, Investments, Plan and Ask Vintra. One canonical fictional dataset drives balances, category/merchant spending, budgets, goals, holdings, interactive history and projections. Controls edit actual in-memory records; there are no disconnected animation-only updates.

The approved V-with-swoosh, serif wordmark/italic tagline, ivory surfaces, forest navigation and restrained waves are retained. System Georgia/Arial substitute for unbundled branded fonts. All major pages have screenshots in `screenshots/`.

## Automated results

Executed `node --test tests/*.test.mjs`: **38 passed, 0 failed** — 32 financial/state tests and 6 privacy/deployment-boundary tests. Syntax validation and `node scripts/build.mjs` also passed. No package installation or paid API call was needed.

| Independent expectation | Observed |
|---|---|
| Assets $189,126.40 − liabilities $430.00 | Net worth $188,696.40 |
| Cash accounts summed | $41,149.40 |
| Holdings $140,519.00 + investment cash $7,458.00 | Portfolio $147,977.00 |
| Holdings less basis $125,900.00 | Unrealized gain $14,619.00, 11.61% |
| September salary $6,200.00 less net spending $3,876.90 | Surplus $2,323.10, savings rate 37.47% |
| Monthly category limits summed | Budget $3,730.00; overspend $146.90 |
| Add $100 to a card purchase | Spending +$100; net worth −$100; cash income unchanged |
| Repay card / move money internally | No additional consumption or salary; net worth unchanged |
| 1.23456789 × $123.456789 | $152.42 after exact cent rounding |
| Combined same-fund quantities | 570 ITOT shares; original account rows preserved |
| Assign existing money to goals | No new assets; over-assignment rejected |
| Zero-return one-year forecast | Starting net worth + 12 monthly surpluses exactly |
| $1,000 one-time purchase | Projected wealth lower by exactly $1,000 at zero return |
| $200 monthly income or expense change | One-year effect ±$2,400 at zero return |
| Reallocate existing surplus to investments at 0% | No new wealth from the transfer itself |
| Save $250/month by spending less, 0% return, one year | $3,000 additional wealth, unchanged actual ledger |
| 6% nominal return / 12, monthly contributions | Separate annuity oracle agrees within 12 cents of monthly rounding |
| Inflation assumption change | Same nominal result, different purchasing-power result |
| Retire sooner | Salary stops earlier; projected assets lower |
| Scenario and question execution | Original accounts and transactions unchanged |
| New demo factory / Reset | Fresh independent source objects and starting values |

Corrections made during verification included negative-zero presentation, card-credit classification, atomic transaction validation, responsive chart scaling and reliable scenario field updates. These are demo-only changes; the private product was not altered.

## Actual browser journeys

- **Desktop:** 1280-pixel layout, populated Home, account drilldown, optional tour, date/merchant search, transaction amount edit, budget edit, goal monthly-plan edit, purchase simulation, holdings sorting/combining, scenario input updates and all 12 guided questions.
- **Connected updates:** a Sweetgreen purchase changed from $47.68 to $147.68 produced $3,976.90 spending, $188,596.40 net worth and the same $3,976.90 Ask answer. Changing the category budget to $700 showed a −$4 variance without changing actual net worth.
- **Simulator:** a new $25 fictional purchase reduced net worth to $188,671.40. Reset restored $188,696.40 and all original records/assumptions.
- **Planning:** +$250/month income changed the ten-year projection from $620,009.43 to $650,009.43, a $30,000 difference. The actual balance sheet was unchanged. The “save more” question separately models a spending cut plus investment of the freed cash: $250/month at the default assumptions produced $41,174.67 additional ten-year projected wealth.
- **Questions:** all 12 selected through actual category/question controls. Net worth $188,696.40; gains $14,619.00; savings 37.47%; largest-two position weight 70.71%; 2 of 3 goals on track. August spending was $3,322.20 versus September $3,876.90; change $554.70.
- **Charts:** 1M changed the history to two month-end points; keyboard focus displayed an exact dated value. Chart points also support pointer/touch selection. Axis ticks use rounded intervals and compact currency labels; exact figures appear in tooltips.
- **Mobile viewport:** all six routes measured 403 pixels wide with document width 403. Detailed holdings scroll inside their table instead of expanding the page. Mobile chart viewBox adapts to preserve readable axes. No physical iPhone or Safari install test was performed.
- **Session isolation:** two browser tabs held different states simultaneously. The untouched tab retained the seed total while the edited tab reflected the new expense.
- **Asset/error checks:** observed page script/style/icon references were local; no application console warnings/errors were reported in the tested final journeys. Full network packet tracing was not available; the privacy report explains the independent code/policy checks.

## Scope and known limitations

- Real institution, merchant and security names are used with independently invented records, prices and historical points. No live market or account integration exists.
- Portfolio history is account value including flows, not investment total return. No sales/realized-gain history, tax-lot election, benchmark, fund look-through or stochastic simulation is claimed.
- Forecasts use one blended investment-return assumption, fixed nominal income/expenses, zero cash growth and constant debt. Credit receivables remain restricted; major purchases consume cash and do not create home equity. Tax, benefit and pension effects are omitted.
- Goal plans describe assignments of existing money; they are not additional assets or automatic transfers. Review competing cash goals when increasing investments.
- Paired transfers/repayments and dividend seed records are read-only. Purchases, refunds, salary, budgets, goals and scenario assumptions are editable.
- Data is tab-local only. Refresh deliberately resets it. No cross-device persistence or document import is offered.
- Modern ES modules, BigInt and native dialog support are required. Exhaustive screen-reader/physical-device certification is not claimed.
- GitHub Pages publication, public-domain asset loading and deployed mobile testing are intentionally pending Stage B approval.

**Review readiness:** functional local demonstration ready for approval. **Stage A status:** at that checkpoint no commit, push, configuration or deployment had occurred. Final publication is now explicitly approved.

## Product realism refinement — current review

Real security identities: ITOT, IXUS, AGG, USRT and Visa (V). Names were checked against issuer/investor pages; no live or historical quotes were imported. Reference prices, all quantities, cost basis, dividend amounts and historical values remain independently generated sample data. Purchase records are itemized across recognizable merchants instead of one category-sized expense. The only default disclosure is a compact “Sample data” button with full details available on demand.

New chapter fund now specifies relocation, rental deposit and furnishing. Learning sabbatical specifies an eight-week study break with tuition and living costs. Emergency reserve is fully assigned to its actual sample account balance and displays Funded; the completion calculation returns zero remaining months when already funded. Broad-market ETF size is no longer presented as an unsupported single-company risk warning.

Current browser rerun: all six desktop routes, account grouping, combined holdings and sorting, a $100 purchase edit propagated to Spending and Ask, reset restored defaults, all 12 guided questions, and all six 403px layouts passed. No document overflow or console warnings/errors observed. Screenshots refreshed. Prior extended journeys above remain historical evidence; no physical iPhone testing or packet capture is claimed.

Scope is a curated static product demonstration, not a full copy of the private application. Import processing, live prices, cloud synchronization, tax lots, stochastic simulations and persistent scenario storage are not offered or claimed. No public upload was performed.

Transaction-copy refinement: removed the last “Fictional” prefix from dividend details. Runtime source scan found no remaining fictional/fictitious wording. Rebuilt; all 38 tests passed; verified the dividend dialog in the browser.
