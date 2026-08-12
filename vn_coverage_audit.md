# Vietnam Data Source Coverage Audit

**Audited:** 2026-08-07 · **Scope:** [`src/domains/vietnam/`](../src/domains/vietnam/) vs. `vn_metrics_http_endpoints.md`, `vn_metrics_addendum_fixes.md`, `macro_and_micro_metrics_vn.md`

**Method:** every implemented source was exercised through `pnpm inspect {vnmarket,vnmacro,vndocs} --json`; every unimplemented source was probed directly with `curl` using the spec's browser-UA baseline. Statuses below are observed, not inferred. Reproduction commands are in §5.

---

## 1. Summary

**13 of 40 catalogued sources are implemented.** The implemented set covers market internals, FX and global drivers completely and is healthy — all three probes returned real data on the audit run.

The absence is concentrated in a single dependency. **TCBS (`apipubaws.tcbs.com.vn`) carried aggregate valuation, bank asset quality and the margin-debt reconstruction, and it now returns `HTTP 404 Service not found`** — not the Cloudflare challenge the code comments describe. That one host failing is why three of the five buy triggers and both quantitative sell triggers have no data source.

Playbook coverage as it stands:

| Signal | Requires | Status |
|:--|:--|:--|
| Buy Trigger 1 | VN-Index aggregate P/E ≤ 11x | ❌ unsourced (A6 dead; §1.1 untried) |
| Buy Trigger 2 | SBV stance + USD/VND stable | ⚠️ half — USD/VND ✅, SBV policy rates ❌ |
| Buy Trigger 3 | Margin debt wash-out | ❌ unsourced (A7 dead) |
| Buy Trigger 4 | Foreign net flow reversal | ✅ sourced — ⚠️ but unflagged for index events (§4) |
| Buy Trigger 5 | Leading-sector earnings + support | ❌ no per-ticker fundamentals (A6/A7 dead) |
| Sell Trigger 1 | SBV hawkish pivot / FX crisis | ⚠️ FX ✅, SBV ❌ |
| Sell Trigger 2 | P/E > 17–18x + record margin | ❌ both inputs unsourced |
| Sell Trigger 3 | Systemic credit stress | ⚠️ VBMA prose only, no structured series |

The pipeline is honest about this — [`src/platform/prompts/vnmacro.ts:262`](../src/platform/prompts/vnmacro.ts#L262) instructs the model to mark the affected conditions ❔ rather than guess. That line is also now **partly out of date**: it states no free source exists for aggregate P/E, which addendum §1.1 explicitly reversed.

---

## 2. Implemented

| # | Data source | Endpoint | Code location | Live status |
|:--|:--|:--|:--|:--|
| A9 | Vietcombank USD/VND (by-date JSON) | `vietcombank.com.vn/api/exchangerates?date=` | [vnmacro.ts:182](../src/domains/vietnam/vnmacro.ts#L182) const · [292-305](../src/domains/vietnam/vnmacro.ts#L292-L305) `parseVcbUsd` · [308-322](../src/domains/vietnam/vnmacro.ts#L308-L322) `fetchVcbBoard` (6-day walk-back) · [324-348](../src/domains/vietnam/vnmacro.ts#L324-L348) `fetchFx` (1m + YTD change) | ✅ 26,430 as of 2026-08-07 |
| A8 | Vietcombank XML board | `ExchangeRates/ExrateXML.aspx` | **Deliberately not used** — [vnmacro.ts:22-27](../src/domains/vietnam/vnmacro.ts#L22-L27) records that it 302s to a 404. Code is ahead of the spec here | n/a |
| A10 | World Bank annual macro | `api.worldbank.org/v2/country/VNM/indicator` | [vnmacro.ts:188](../src/domains/vietnam/vnmacro.ts#L188) · [144-169](../src/domains/vietnam/vnmacro.ts#L144-L169) `ANNUAL_SERIES` (CPI, GDP, FDI, reserves) · [531-567](../src/domains/vietnam/vnmacro.ts#L531-L567) `fetchAnnualMetric` | ✅ CPI 3.31% (2025), GDP 8.02%, FDI $20.17B |
| A11 | SSI iBoard price board | `iboard-query.ssi.com.vn/stock/exchange/{hose,hnx}` | [vnmarket.ts:101-102](../src/domains/vietnam/vnmarket.ts#L101-L102) · [177-250](../src/domains/vietnam/vnmarket.ts#L177-L250) `aggregateBoard` · [252-288](../src/domains/vietnam/vnmarket.ts#L252-L288) `fetchBoard` | ✅ 408 HOSE + 299 HNX rows |
| A12 | DNSE Entrade bars | `services.entrade.com.vn/chart-api/v2/ohlcs/{index,derivative}` | [vnmarket.ts:103](../src/domains/vietnam/vnmarket.ts#L103) · [299-315](../src/domains/vietnam/vnmarket.ts#L299-L315) `fetchBars` · [321-339](../src/domains/vietnam/vnmarket.ts#L321-L339) `quoteFromBars` | ✅ VN-Index 1764.78, VN30 1902.79 |
| §2 | Yahoo chart — DXY, gold, Brent, VNM, HRC | `query1.finance.yahoo.com/v8/finance/chart` | [vnmacro.ts:187](../src/domains/vietnam/vnmacro.ts#L187) · [100-142](../src/domains/vietnam/vnmacro.ts#L100-L142) `GLOBAL_SERIES` · [364-409](../src/domains/vietnam/vnmacro.ts#L364-L409) `fetchGlobalMetric` | ⚠️ 5/6 then 6/6 — `GC=F` flaky under concurrent load, see B1 |
| §2.1 | FRED US 10Y (Yahoo `^TNX` fallback) | `api.stlouisfed.org` via `fetchFredSeries` | [vnmacro.ts:175-180](../src/domains/vietnam/vnmacro.ts#L175-L180) · [421-461](../src/domains/vietnam/vnmacro.ts#L421-L461) `fetchUs10y` | ✅ DGS10 4.63% |
| §3.2 | SJC domestic gold + world premium | `sjc.com.vn/GoldPrice/Services/PriceService.ashx` | [vnmacro.ts:183](../src/domains/vietnam/vnmacro.ts#L183) · [226-267](../src/domains/vietnam/vnmacro.ts#L226-L267) `CHROME_CIPHERS` / `getJsonBrowserTls` (TLS-fingerprint WAF bypass) · [478-491](../src/domains/vietnam/vnmacro.ts#L478-L491) `parseSjcGold` · [493-523](../src/domains/vietnam/vnmacro.ts#L493-L523) `fetchGold` | ✅ 142.2M VND/tael → $4,462/oz, premium 2.6% |
| Tier C | NSO CPI article | `nso.gov.vn/en/cpi/` | [vndocs.ts:53](../src/domains/vietnam/vndocs.ts#L53) · [136-166](../src/domains/vietnam/vndocs.ts#L136-L166) `fetchNsoDoc` | ✅ July 2026 CPI, 1,071 chars |
| Tier C | NSO monthly socio-economic | `nso.gov.vn/en/monthly-report/` | [vndocs.ts:54](../src/domains/vietnam/vndocs.ts#L54) · [75-90](../src/domains/vietnam/vndocs.ts#L75-L90) `MONTHLY_KEYWORDS` (FDI, PMI, credit, public investment) | ✅ 3,478 chars |
| Tier C | VBMA weekly bond bulletin (PDF) | `vbma.org.vn/en/reports/weekly` | [vndocs.ts:55-56](../src/domains/vietnam/vndocs.ts#L55-L56) · [180-216](../src/domains/vietnam/vndocs.ts#L180-L216) `fetchVbmaDoc` · [92-108](../src/domains/vietnam/vndocs.ts#L92-L108) `BOND_KEYWORDS` | ✅ kept pages 1,2,3,5 of 14 |
| §3.4 | Foreign ownership room (*room ngoại*) | derived from SSI `remainForeignQtty` | [vnmarket.ts:49-60](../src/domains/vietnam/vnmarket.ts#L49-L60) `VnForeignTicker.roomVndBn` · [209-221](../src/domains/vietnam/vnmarket.ts#L209-L221) valuation + `zeroRoomCount` | ✅ 14 zero-room names |
| §3.5 | VN30 futures basis | Entrade `derivative/VN30F1M` | [vnmarket.ts:79-85](../src/domains/vietnam/vnmarket.ts#L79-L85) · [366-375](../src/domains/vietnam/vnmarket.ts#L366-L375) | ✅ basis −6.79 (−0.4%) |

**Note:** §3.4 and §3.5 are addendum additions the spec listed as *absent from the framework*. The code implements both — it is ahead of the docs in three places (these two plus the A8→A9 switch).

---

## 3. Not implemented

| # | Data source / metric | Specified in | Endpoint | Why not | Impact |
|:--|:--|:--|:--|:--|:--|
| A1 | VNDirect daily OHLCV | Endpoints §1 Tier A | `finfo-api.vndirect.com.vn/v4/stock_prices` | **Tested: HTTP 000**, connection never established | No fallback OHLCV source. Spec §7 requires two wired at all times; Entrade is a single point of failure |
| A2 | VNDirect company master list | §1 Tier A | `.../v4/stocks` | Same host, same failure | No ticker universe |
| A3/A4 | TCBS bars (daily + intraday) | §1 Tier A | `apipubaws.tcbs.com.vn/stock-insight/...` | **Tested: HTTP 404 `Service not found`** — endpoint family removed | Second OHLCV source also gone |
| A5 | TCBS ticker overview (sector, shares out) | §1 Tier A | `.../tcanalysis/v1/ticker/{sym}/overview` | HTTP 404 | No shares-outstanding → nothing can be cap-weighted |
| A6 | **TCBS financial ratios (P/E, P/B, EV/EBITDA)** | §1 Tier A — "your micro-valuation feed" | `.../finance/{sym}/financialratio` | HTTP 404 | **Buy Trigger 1 + Sell Trigger 2 unsourced** |
| A7 | **TCBS statements (BS / IS / CF)** | §1 Tier A | `.../finance/{sym}/balancesheet` etc. | HTTP 404 | Kills NIM, NPL, Group-2 loans, net debt/equity — **and the margin-debt reconstruction**. Banks are ~35% of VN-Index |
| A13 | CafeF price history | §1 "lower confidence" | `s.cafef.vn/Ajax/.../PriceHistory.ashx` | Never attempted; not tested | Untried third OHLCV option |
| B1 | SSI FastConnect Data | §2 Tier B | official REST + bearer token | Needs one-time registration + key pair | The only *sanctioned* feed — would fix A1/A3 permanently |
| B2 | VNAppMob open API | §2 Tier B | `vapi.vnappmob.com` | Needs a free token | Would supply the 12M deposit rates that have no other source |
| C1 | SBV policy rates (refinancing, discount) | §3 Tier C; Buy Trigger 2 | `sbv.gov.vn` monetary-policy section | Not attempted | Buy Trigger 2 half-sourced: USD/VND ✅, SBV stance ❌ |
| C2 | SBV central USD/VND rate | §3 Tier C | `sbv.gov.vn/en/w/exchange-rate` | **Tested: HTTP 404** — path moved | Official vs. commercial rate spread unavailable |
| C3 | SBV interbank average FX / rates by tenor | §3 Tier C | `sbv.gov.vn/en/w/inter-bank-average-exchange-rate` | **Tested: HTTP 200, 376 KB, genuine page — not the F5 rejection the spec warns about.** But the rate table is JS-rendered; no numbers in static HTML | Interbank O/N (>5–6% = tight liquidity) exists only as prose in the VBMA PDF |
| C4 | Corporate bond raw disclosures | §3 Tier C | `cbonds.hnx.vn` | Not attempted | Maturity wall only as VBMA prose |
| C5 | S&P Global VN Manufacturing PMI | §3 Tier C | `pmi.spglobal.com` | **Tested: HTTP 200, body = `*** Cannot find lite report`** — catalogued path wrong | PMI (the export-health barometer) appears only if NSO prose mentions it |
| C6 | 12M deposit rates | §3 Tier C; VN framework §2.3 | 6 bank pages or an aggregator | Not attempted | The framework's *stated retail opportunity cost* is entirely absent |
| C7 | Free-market USD/VND | §3 Tier C | `webgia.com/ty-gia/` | **Tested: HTTP 200, 94 KB — works today.** Simply never built | Official-vs-parallel spread (a direct VND-confidence read) missing |
| C8 | Aggregate forward P/E | §3 Tier C | broker PDFs (SHS, SSI, VNDirect) | No free endpoint — spec concedes this | Forward basis unavailable; fallback is trailing, see §1.1 |
| C9 | Market-wide margin debt | §3 Tier C; Buy Trigger 3 | reconstruct from A7, or FiinTrade press | Depends on A7 → dead | **Buy Trigger 3 unsourced** |
| §1.1 | **HOSE/HNX trailing P/E and P/B** | Addendum §1.1 — *explicitly supersedes* the "❌ PDF only" verdict | `hsx.vn` market statistics | **Tested: 1.9 KB SPA shell** — needs the inner API, not a scrape. Never attempted; [prompts/vnmacro.ts:262](../src/platform/prompts/vnmacro.ts#L262) still asserts no free source exists | Highest-value gap: the addendum says Trigger 1 *is* obtainable, and the pipeline runs on the superseded assumption |
| §1.2 | Free float / HOSE index reviews | Addendum §1.2 | HOSE index review announcements | Not attempted | Margin ÷ free-float-cap uncomputable (moot while C9 is dead) |
| §1.3 | Credit growth vs SBV quota | Addendum §1.3 | SBV monetary statistics + NSO | Partial — `credit` is in `MONTHLY_KEYWORDS` ([vndocs.ts:87](../src/domains/vietnam/vndocs.ts#L87)) so it may surface in NSO prose; no SBV source, no quota figure | Easing signals ungated: rate cuts don't transmit if banks have no quota headroom |
| §2.2 | **ETF creation/redemption** | Addendum §2.2 | VanEck VNM shares-outstanding CSV; FUEVFVND, E1VFVN30 | Not attempted. Code has VNM **price** only ([vnmacro.ts:128-134](../src/domains/vietnam/vnmacro.ts#L128-L134)) | The addendum's point is that price = secondary churn; creations/redemptions are the actual foreign money, and the only way to strip passive flow out of Trigger 4 |
| §2.3 | Coking coal | Addendum §2.3 | none free | **Spec says accept the gap** | HPG input-cost spread half-sourced (HRC ✅, coal ❌). Matches spec intent |
| §3.3 | Public investment disbursement | Addendum §3.3 | NSO / Ministry of Finance | Partial — `public investment` in `MONTHLY_KEYWORDS`; no MoF source | State capex (construction/steel/cement demand driver) not tracked as a series |
| §3.6 | Group 2 + restructured loans | Addendum §3.6 | A7 note-level | Depends on A7 → dead | Headline NPL can look benign straight through credit deterioration |
| §4 | **Index-event calendar** | Addendum §4 | manual seed from FTSE Russell FAQ | Not built. No `index_event_window` / `event_type` field on foreign-flow records | **Deadline-bound: FTSE reclassification effective 21 Sep 2026.** Trigger 4 will read mandated passive rebalancing as sentiment |
| §5.1 | Corporate-action adjustment | Addendum §5.1 | — | Not applicable: no per-ticker price or EPS series exists to misalign | No current exposure; becomes mandatory the moment A6/A7 are restored |
| §5.2 | Trading-calendar `missing` marker | Addendum §5.2 | HOSE holiday schedule | Partial — [vnmarket.ts:279-282](../src/domains/vietnam/vnmarket.ts#L279-L282) drops flow when `traded === 0`; VCB walks back 6 days ([vnmacro.ts:308-322](../src/domains/vietnam/vnmacro.ts#L308-L322)). No holiday calendar, no explicit `missing` marker | Low — the existing guards cover the realistic failure |
| §5.3 | Revision vintages `(metric, period, value, retrieved_at)` | Addendum §5.3 | — | Architectural: the pipeline writes a daily Markdown digest, not a time-series store | NSO revises figures; no vintage is preserved, so no backtest is possible |
| §Storage | Two-stage raw-body storage (`raw/{date}/{source}.{ext}`) | Endpoints §Stage 1/2 + §Storage | — | Architectural: [vnmacro.ts](../src/domains/vietnam/vnmacro.ts) / [vndocs.ts](../src/domains/vietnam/vndocs.ts) parse in-process | When a parser breaks, the day's bytes are gone — the exact failure the spec's design prevents |

---

## 4. Defects in implemented code

| # | Issue | Location | Detail |
|:--|:--|:--|:--|
| B1 | **Gold premium degrades silently** | [vnmacro.ts:364-409](../src/domains/vietnam/vnmacro.ts#L364-L409), [493-523](../src/domains/vietnam/vnmacro.ts#L493-L523) | Yahoo throttles the 5 concurrent symbol calls. Run 1 of the audit: `GC=F` → `TypeError: fetch failed`, `5/6 global series`. Run 2: 6/6. Direct curl: HTTP 200. When it drops, `worldUsdPerOz` and `premiumPct` go `null` and the domestic-vs-world premium disappears — but `fetchGold` still logs `gold ok` and `fetchSuccess` stays true. **Fix:** serialize or retry the Yahoo calls, and warn when `premiumPct` is null while SJC succeeded |
| B2 | **Stale diagnosis in comments and prompt** | [vnmarket.ts:19-22](../src/domains/vietnam/vnmarket.ts#L19-L22), [prompts/vnmacro.ts:262](../src/platform/prompts/vnmacro.ts#L262), `CLAUDE.md` | All three say TCBS is "behind a Cloudflare challenge". It now returns `HTTP 404 Service not found` — removed, not challenged. Misleads anyone who tries to unblock it with better headers. The prompt line additionally predates addendum §1.1 |

---

## 5. Reproducing the probes

```bash
# Implemented sources — exercised end to end, no side effects
pnpm -s inspect vnmarket --json | jq
pnpm -s inspect vnmacro  --json | jq
pnpm -s inspect vndocs   --json | jq

UA='Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0 Safari/537.36'

# A6 / A7 / A3 — TCBS: expect HTTP 404 "Service not found"
curl -sS -A "$UA" -H 'Referer: https://tcinvest.tcbs.com.vn/' \
  'https://apipubaws.tcbs.com.vn/tcanalysis/v1/finance/VCB/financialratio?yearly=0&isAll=true'

# A1 — VNDirect: expect connection failure (HTTP 000)
curl -sS -A "$UA" -H 'Referer: https://dchart.vndirect.com.vn/' \
  'https://finfo-api.vndirect.com.vn/v4/stock_prices?sort=-date&q=code:VCB&size=3&page=1'

# §1.1 — HOSE: expect ~1.9 KB SPA shell, not a data page
curl -sSL -A "$UA" -o /tmp/hsx.html -w '%{http_code} %{size_download}\n' 'https://www.hsx.vn'

# C3 — SBV interbank: expect HTTP 200 + ~376 KB real page (JS-rendered table)
curl -sSL -A "$UA" -o /tmp/sbv.html -w '%{http_code} %{size_download}\n' \
  'https://sbv.gov.vn/en/w/inter-bank-average-exchange-rate'

# C7 — webgia free-market USD: expect HTTP 200 + ~94 KB
curl -sSL -A "$UA" -o /tmp/webgia.html -w '%{http_code} %{size_download}\n' 'https://webgia.com/ty-gia/'

# C5 — S&P PMI: expect "*** Cannot find lite report"
curl -sSL -A "$UA" 'https://www.pmi.spglobal.com/Public/Home/PressRelease'
```

---

## 6. Suggested work order

Four gaps are omissions rather than blockages — nothing upstream prevents them.

- [ ] **§4 — Index-event calendar.** No endpoint needed, and it has a deadline. Seed 21 Sep 2026 (FTSE effective), the Sep 2026 Frontier annual review, and the GEIS tranches through 2027 from FTSE Russell's implementation FAQ. Add `index_event_window` + `event_type` to the foreign-flow record in [vnmarket.ts:69-77](../src/domains/vietnam/vnmarket.ts#L69-L77) and have the prompt suppress Trigger 4 when set.
- [ ] **§1.1 — HOSE/HNX trailing P/E.** Find the API behind the `hsx.vn` SPA (DevTools → Network on the market-statistics page). This unblocks Buy Trigger 1 and Sell Trigger 2, the two highest-value gaps. Then correct [prompts/vnmacro.ts:262](../src/platform/prompts/vnmacro.ts#L262), which still encodes the pre-addendum "no free source" position, and note explicitly that the figure is **trailing** while the 11x / 17–18x gates were framed on **forward** — addendum §1.1 warns the two differ by 2–3 turns.
- [ ] **B1 — Fix the silent gold-premium drop.** Smallest change on this list; prevents a metric vanishing without a signal.
- [ ] **C7 — webgia free-market USD/VND.** Confirmed live. One fetch + parse, reuses the existing `doc-extract` HTML path.
- [ ] **B2 — Correct the TCBS diagnosis** in [vnmarket.ts:19-22](../src/domains/vietnam/vnmarket.ts#L19-L22), the prompt, and `CLAUDE.md`.
- [ ] **B1 (Tier B) — Register for SSI FastConnect.** The only sanctioned feed in the catalogue. Restores A1/A3-class OHLCV permanently and gives the pipeline the second source spec §7 requires.
- [ ] **§2.2 — VanEck VNM shares-outstanding CSV.** Turns the VNM ETF from a price line into an actual foreign-flow signal, and is the free approximation of passive-stripped flow that §4 needs.
- [ ] **C1/C3 — SBV policy + interbank rates.** The page is reachable; the table is JS-rendered, so this needs either an inner API or accepting the VBMA PDF as the source of record. Completes Buy Trigger 2.
- [ ] **C6 — 12M deposit rates** via VNAppMob (B2) or a 6-bank panel. The framework's stated retail opportunity cost.

Deferred until an upstream source returns: A5/A6/A7 and everything downstream of them (§1.2 free float, §3.6 Group-2 loans, C9 margin debt, §5.1 corporate-action adjustment).
