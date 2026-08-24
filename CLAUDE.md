# CLAUDE.md

## Project overview

agents-radar is a daily digest generator for the AI open-source ecosystem. A GitHub Actions cron job runs at 00:00 UTC (08:00 UTC+8) and produces bilingual (Vietnamese + English) reports across many data sources (AI CLI tools, the OpenClaw agent ecosystem, official AI company sites, GitHub Trending, Hacker News, Product Hunt, ArXiv, Hugging Face, dev communities, a macro-financial dashboard from FRED + FINRA, a Vietnam macro-market dashboard, and a Vietnam interest-rate dashboard from the State Bank of Vietnam). Reports are published as GitHub Issues, committed as Markdown files, surfaced through a static Web UI + RSS feed, and pushed to Telegram/Feishu. Two additional cron jobs generate weekly and monthly rollups.

## Commands

```bash
pnpm start          # run the full daily digest locally
pnpm weekly         # generate the weekly rollup (reads existing daily digests)
pnpm monthly        # generate the monthly rollup
pnpm manifest       # regenerate manifest.json + feed.xml from digests/
pnpm notify         # send Telegram notification for the latest manifest entry
pnpm notify:feishu  # send Feishu (Lark) notification
pnpm close-stale    # close digest GitHub Issues older than 7 days

pnpm inspect --list           # list every per-module probe target
pnpm inspect <target> --help  # that target's options
pnpm -s inspect <target> --json | jq   # raw JSON (-s silences pnpm's stdout banner)

pnpm test           # vitest — LIVE tests only: feed contracts + per-provider probes (hits the network, ~60s)
pnpm test:live      # same as `pnpm test`, spelled explicitly
pnpm test:providers # provider probes only — one file per src/providers module
pnpm test:feeds     # feed contracts only — one file per src/feeds module
pnpm test:watch     # vitest watch mode
pnpm test:coverage  # vitest with v8 coverage
pnpm typecheck      # tsc --noEmit
pnpm lint           # ESLint
pnpm lint:fix       # ESLint --fix
pnpm format         # Prettier --write src
pnpm format:check   # Prettier --check src

npx tsx scripts/regen-highlights.ts [YYYY-MM-DD] [--notify]   # rebuild highlights.json from digests already on disk
```

A husky `pre-commit` hook (`.husky/pre-commit`) runs `pnpm lint`, `pnpm format:check`, and `pnpm typecheck` — the same checks as `ci.yml` minus the tests.

TypeScript is run directly through `tsx` (no build step). `tsconfig.json` sets `strict`, `noUncheckedIndexedAccess` and `allowImportingTsExtensions`, so **every relative import carries an explicit `.ts` extension** — match that when adding files.

Env vars for local runs. `src/cli/daily.ts` loads `dotenv/config` as its **first** import (before anything that reads `process.env` at module scope, notably the provider selection in `platform/llm/client.ts`), so a local `.env` — see `.env.example`, git-ignored — works for `pnpm start`. `src/cli/inspect.ts` and the live tests (`src/__tests__/live/contract.ts`) also load dotenv. dotenv never overrides variables already set in the environment, so GitHub Actions `env:` values always win. The other entrypoints (`cli/weekly.ts`, `cli/monthly.ts`, `cli/notify-telegram.ts`, `cli/notify-feishu.ts`, `scripts/`) do **not** load dotenv — export the vars in the shell for those.

```bash
export GH_TOKEN=ghp_xxxxx       # GitHub token (named GH_TOKEN, not GITHUB_TOKEN — GH Actions reserves the GITHUB_ prefix)
export DIGEST_REPO=owner/repo   # omit to skip GitHub issue creation

# Languages to generate (default: both). "en" = English only, "vi" = Vietnamese only.
export DIGEST_LANGS=vi,en       # vi,en | en | vi

# Max concurrent in-flight LLM requests (positive integer; default: 5)
export LLM_CONCURRENCY=5

# Per-request LLM timeout in ms (positive integer; default: 600000 = 10 min)
export LLM_TIMEOUT_MS=600000

# Logging (pino). Always written to stderr — stdout is a data channel.
export LOG_LEVEL=info    # trace | debug | info (default) | warn | error | fatal | silent
export LOG_PRETTY=1      # 1 = human-readable, 0 = JSON; unset = pretty on a TTY, JSON in CI

# LLM provider (default: anthropic; production GHA reads it from the LLM_PROVIDER secret)
export LLM_PROVIDER=anthropic   # anthropic | openai | github-copilot | openrouter | deepseek

# Anthropic (default) — ANTHROPIC_MODEL default: claude-sonnet-4-6; ANTHROPIC_BASE_URL honoured by the SDK
export ANTHROPIC_API_KEY=sk-ant-xxxxx

# OpenAI          — OPENAI_API_KEY,  optional OPENAI_BASE_URL / OPENAI_MODEL
# GitHub Copilot  — uses GH_TOKEN, optional GITHUB_COPILOT_MODEL
# OpenRouter      — OPENROUTER_API_KEY, optional OPENROUTER_MODEL
# DeepSeek        — DEEPSEEK_API_KEY, optional DEEPSEEK_MODEL (default: deepseek-chat)

# Optional integrations
# export FRED_API_KEY=xxxxx                # macro dashboard; free key. Unset = keyless CSV fallback (FINRA needs no key)
# export PRODUCTHUNT_TOKEN=xxxxx           # enables the Product Hunt data source
# export TELEGRAM_BOT_TOKEN=xxxxx          # Telegram notifications (also TELEGRAM_CHAT_ID)
# export FEISHU_WEBHOOK_URLS=url1,url2     # Feishu notifications (comma-separated)
# export PAGES_URL=https://...             # base URL used in notification links
```

## Architecture

The daily pipeline runs in sequential phases, each a named async function in `src/cli/daily.ts`. VI and EN reports are generated **simultaneously** (both languages run in parallel at every phase).

1. **`fetchAllData`** — all network I/O in parallel, one entry per feed: repo activity for the 22 tracked repos (10 CLI + OpenClaw + 11 peers), Claude Code Skills, the Anthropic/OpenAI sitemaps, trending, HN, Product Hunt, ArXiv, Hugging Face, community (Dev.to + Lobste.rs), macro (FRED + FINRA), the Vietnam dashboard (8 hosts) and Vietnam interest rates (SBV + FRED + Vietcombank). Each feed owns its own degrade policy and returns a well-formed empty payload with `fetchSuccess: false` rather than throwing, so one outage never aborts the run.
2. **`generateSummaries`** — per-repo LLM calls, all in parallel, rate-limited to `LLM_CONCURRENCY` (default 5) concurrent requests by a queue in `src/platform/llm/client.ts`. Runs once per language. Repos with zero activity skip the LLM call entirely.
3. **Comparisons** — cross-tool CLI comparison and OpenClaw cross-ecosystem comparison (2 LLM calls per language).
4. **Save phase** — `buildCliReportContent` / `buildOpenclawReportContent` (in `src/platform/reports/builders/`) assemble Markdown strings; the `saveXxxReport` functions in `src/platform/reports/savers/` call the LLM + write the file + create the GitHub Issue for web, trending, hn, ph, arxiv, hf, community, macro and vnmacro. `saveWebReport` runs first because `saveWebState` must follow it.
5. **Highlights** — one LLM call per language produces `highlights.json` (a few bullet points per report) for the Telegram/Feishu notifications. `parseLlmJson` repairs common malformed-JSON defects, the call is retried once on a parse failure, and each language runs independently and backfills from the other if one still ends up empty.
6. **GitHub Issues** — CLI + OpenClaw issues are created (one per configured language) when `DIGEST_REPO` is set.

Weekly/monthly rollups (`src/platform/reports/rollup.ts`, entrypoints `src/cli/weekly.ts` / `src/cli/monthly.ts`) are separate: they read already-committed daily digest files — **no GitHub API fetching** — and produce `ai-weekly.md` / `ai-monthly.md`, merging into the existing `highlights.json` rather than overwriting it. Only five report types feed the rollups (`ROLLUP_SOURCES`: `ai-cli`, `ai-agents`, `ai-trending`, `ai-hn`, `ai-web`), each truncated to `MAX_CHARS_PER_REPORT` = 2500.

## Source files

`src/` is grouped into five layers: `cli/` (entrypoints), `providers/` (one client per upstream host), `feeds/` (one payload per report), `platform/` (LLM, prompts, reports, publishing, notifications) and `core/` (config, HTTP, dates, i18n, document extraction).

The split that matters: **a provider knows one host and no report; a feed knows no HTTP and maps 1:1 to a report.** Providers throw; feeds own the degrade policy and are the only place `fetchSuccess` is set. Nothing under `providers/` or `feeds/` touches the filesystem or GitHub Issues.

### `src/cli/` — entrypoints (one per `package.json` script)

| File | Responsibility |
|------|---------------|
| `src/cli/daily.ts` | Daily-pipeline orchestration: phase functions, `main()` (`pnpm start`) |
| `src/cli/weekly.ts` / `src/cli/monthly.ts` | Thin entrypoints for the rollup functions |
| `src/cli/generate-manifest.ts` | Direct-run guard around `main()` from `platform/reports/manifest.ts` |
| `src/cli/notify-telegram.ts` | Reads `manifest.json` + `highlights.json`, then calls `buildMessage` / `sendTelegram` |
| `src/cli/notify-feishu.ts` | Reads `manifest.json` + `highlights.json`, then calls `buildFeishuMessage` / `sendFeishu` |
| `src/cli/close-stale-issues.ts` | Closes digest GitHub Issues older than `STALE_DAYS` (7) |
| `src/cli/inspect.ts` | Per-module probe dispatcher (`pnpm inspect`): arg parsing, target registry lookup, output routing, exit codes. See **Module probes** below |
| `src/cli/inspect/` | Probe implementations, one module per group (`sources.ts`, `doc-extract.ts`, `vnmarket.ts`, `prompts.ts`, `llm.ts`, `reports.ts`, `notify.ts`), plus `kit.ts` (shared types/errors/arg parser), `registry.ts` (the flat target list) and `fixtures/` (committed sample payloads) |

### `src/core/` — cross-cutting utilities

| File | Responsibility |
|------|---------------|
| `src/core/config.ts` | `loadConfig()` — loads tracked-repo config from `config.yml`, falls back to built-in defaults; `RadarConfig` type |
| `src/core/date.ts` | Date/timing utilities: `toCstDateStr` (UTC+8 date string), `toUtcStr`, `sleep` |
| `src/core/logger.ts` | The single logger (pino): `logger` + `createLogger(name)`. Writes to **stderr** only, synchronously, with no transport worker — stdout belongs to `pnpm inspect --json`, and the entrypoints `process.exit()` on failure. `LOG_LEVEL` sets verbosity; `LOG_PRETTY` picks human-readable vs JSON (default: pretty on a TTY, JSON in CI) |
| `src/core/cookies.ts` | Persistent cookie jar keyed by host, stored in `session.json` (git-ignored): `loadCookies` / `saveCookies` / `mergeSetCookie` / `cookieHeader`. Used by `providers/sbv.ts` alone — the one upstream whose WAF requires a homepage handshake. It sits in `core/` rather than `platform/state/` because it is transport state that nothing downstream consumes; see the module header |
| `src/core/http.ts` | The single outbound HTTP client: `httpRequest` / `fetchText` / `fetchJson`, `fetchWithTimeout` (browser-flavoured document GET), `fetchJsonBrowserTls` (Chrome TLS ciphers, SJC only), `HttpError`, and the `DEFAULT_UA` / `BROWSER_UA` / `JSON_ACCEPT` / `DOC_ACCEPT` constants |
| `src/core/doc-extract.ts` | Document extraction shared by the Vietnam doc sources: HTML → linkedom + Mozilla Readability (`extractArticle` / `fetchArticle`, tag-strip fallback), PDF → per-page text (`extractPdfPages` / `fetchPdfPages`), plus `scoreText` / `rankPages` / `relevantExcerpt` keyword narrowing and `MIN_ARTICLE_CHARS`. Fetching is `core/http.ts`'s job |
| `src/core/i18n/index.ts` | Barrel — import bilingual strings from here |
| `src/core/i18n/lang.ts` | `Lang` type, `ALL_LANGS`, `getLangs()`, the `t(vi, en)` helper |
| `src/core/i18n/reports.ts` | Report titles/headers (`CLI_REPORT` … `MONTHLY_REPORT`), `ISSUE_LABELS`, `CLI_ISSUE_TITLE`, `OPENCLAW_ISSUE_TITLE` |
| `src/core/i18n/labels.ts` | `REPORT_LABELS` (manifest/RSS) and `NOTIFY_LABELS` (notifications) |
| `src/core/i18n/messages.ts` | `MSG` status/error strings and `FOOTER` |

### `src/providers/` — upstream clients, one module per host

A provider knows exactly one host and nothing about any report. It throws
`HttpError` on failure and never sets `fetchSuccess` — the degrade policy is the
feed's call. Files are named for the host, not the topic.

| File | Responsibility |
|------|---------------|
| `src/providers/github/client.ts` | GitHub API transport shared by every GitHub caller: `GITHUB_API`, `githubHeaders`, `githubGet` (throws `HttpError`), `githubFetch` (raw `Response`). Omits `Authorization` when `GH_TOKEN` is unset rather than sending an empty bearer |
| `src/providers/github/repos.ts` | Repo activity: `fetchRecentItems(repo, type, since, paginated)`, `fetchRecentReleases`, `fetchSkillsData`; `GitHubItem` / `GitHubRelease` types |
| `src/providers/github/search.ts` | Search API by topic: `searchAiRepos(pushedSince)`, `AI_TOPIC_QUERIES` (6 `topic:` queries) |
| `src/providers/github/trending-html.ts` | github.com/trending scraper — no API exists for it; `parseTrendingHtml` is exported for offline probing |
| `src/providers/hackernews.ts` | HN Firebase API: `fetchTopStoryIds`, `fetchItems` (per-item miss degrades to `null`), `toHnStory` |
| `src/providers/huggingface.ts` | HF Hub API: `fetchTrendingModels(limit)`, sorted by weekly likes |
| `src/providers/arxiv.ts` | ArXiv Atom API: `fetchCategory`, `parseFeed`, `AI_CATEGORIES`, `REQUEST_DELAY_MS` (ArXiv asks for 3s between requests) |
| `src/providers/producthunt.ts` | Product Hunt GraphQL: `fetchPosts(token, after, before)`. The token is a parameter, so a missing `PRODUCTHUNT_TOKEN` can be a skip rather than a crash |
| `src/providers/devto.ts` | Dev.to via the Forem API: `fetchTagArticles(tag)`, `AI_TAGS` |
| `src/providers/lobsters.ts` | Lobste.rs tag JSON: `fetchTagStories(tagUrl)`, `TAG_URLS` |
| `src/providers/sitemap.ts` | Sitemap discovery + article extraction shared by anthropic.com and openai.com: `httpGet`, `parseSitemapUrls`, `isSitemapIndex`, `extractTitle`, `extractText`, `urlCategory`, `titleFromUrl`. The one module named for a protocol rather than a host — the two sites differ only by config |
| `src/providers/fred.ts` | FRED observations: `fetchObservations(series, apiKey, limit)` (JSON API with a key, keyless CSV without) and `fetchFredSeries(series, limit)`, the shared single-series accessor |
| `src/providers/finra.ts` | FINRA margin statistics — defensive HTML scrape; `parseMarginTable` returns `null` on any structural miss |
| `src/providers/yahoo.ts` | Yahoo Finance chart API: `fetchDailySeries(symbol, range)`, nulls dropped so "20 bars back" means 20 sessions |
| `src/providers/worldbank.ts` | World Bank indicator API: `fetchIndicator(country, indicator)`, newest first |
| `src/providers/ssi.ts` | SSI iBoard HOSE/HNX price board: `fetchExchangeBoard(exchange)`, `EXCHANGES`, `SsiRow` |
| `src/providers/entrade.ts` | DNSE Entrade daily bars: `fetchBars(kind, symbol)` for indices and derivatives |
| `src/providers/vietcombank.ts` | Vietcombank USD/VND board: `fetchUsdBoard(isoDate)`, `parseVcbUsd`, `VCB_MAX_LOOKBACK_DAYS` |
| `src/providers/sjc.ts` | SJC domestic gold: `fetchGoldBoard`, `parseSjcGold`, `OZ_PER_TAEL`. Goes through `fetchJsonBrowserTls` — its WAF fingerprints the TLS ClientHello |
| `src/providers/nso.ts` | NSO listings and articles: `findLatestArticleUrl`, `fetchNsoArticle`, plus the `fetchListing` / `firstLink` helpers VBMA reuses |
| `src/providers/sbv.ts` | State Bank of Vietnam via Liferay headless-delivery: `fetchPolicyBoard`, `fetchInterbankDays`, `parsePolicyBoard` / `parseInterbankDays` / `parseVnNumber` (exported for offline probing), `SBV_*_STRUCTURE_ID`. Runs the homepage cookie handshake through `core/cookies.ts` — without it the API answers **HTTP 200** with an HTML rejection page. Every read passes `sort=dateCreated:desc`; the parser re-sorts on `ngayApDung` |
| `src/providers/vbma.ts` | VBMA weekly bond bulletin (PDF): `fetchLatestBulletin` resolves the latest link and extracts per-page text |

### `src/feeds/` — one module per report payload

A feed makes no HTTP call of its own. It composes providers, applies the degrade
policy, and is the only place `fetchSuccess` is set. One feed per report ID.

| File | Report | Responsibility |
|------|--------|---------------|
| `src/feeds/ai/repo-activity.ts` | `ai-cli`, `ai-agents` | `fetchAllRepoActivity(configs, since)` + `fetchSkills(repo)`; `RepoFetch` / `SkillsData`. The one feed serving two reports — same shape, different `config.yml` slice, split by id in `cli/daily.ts` |
| `src/feeds/ai/trending.ts` | `ai-trending` | GitHub trending scrape + topic search. `trendingFetchSuccess` tracks the scrape alone: 0 parsed repos means the markup moved, never "nothing trended" |
| `src/feeds/ai/web.ts` | `ai-web` | Sitemap discovery, diff against the seen-URL state, first-run cap. Mutates the state in memory; persisting it is `platform/state/web-state.ts`'s job |
| `src/feeds/ai/hn.ts` | `ai-hn` | Walks topstories in batches, AI keyword filter, stops at 30 matches |
| `src/feeds/ai/ph.ts` | `ai-ph` | Yesterday's products filtered to AI topic slugs (needs `PRODUCTHUNT_TOKEN`) |
| `src/feeds/ai/arxiv.ts` | `ai-arxiv` | cs.AI + cs.CL + cs.LG, deduped, last 48h |
| `src/feeds/ai/hf.ts` | `ai-hf` | Trending models by weekly likes |
| `src/feeds/ai/community.ts` | `ai-community` | Dev.to **+** Lobste.rs in one feed. Each half keeps its own `fetchSuccess`; the feed's is true when either returned |
| `src/feeds/finance/macro.ts` | `fin-macro` | FRED **+** FINRA, plus the 16-series catalog and the per-series transform (level / YoY % / MoM change) — which indicators the dashboard tracks is a property of the report, not of FRED. `fetchSuccess` mirrors FRED alone; FINRA is supplementary |
| `src/feeds/finance/vnrates.ts` | `fin-vnrates` | SBV policy board **+** interbank curve, plus FRED `DFF` and the Vietcombank USD/VND board. Owns the 1 / 20 / 30-*session* lookbacks, the tenor order and the derived spreads (policy gap, curve slope, VND-USD). `fetchSuccess` mirrors the interbank board alone — the policy board is a constant unchanged since June 2023 |
| `src/feeds/finance/vn/{market,macro,docs}.ts` | — | The three halves of the Vietnam dashboard: market internals (SSI + Entrade), macro indicators (Vietcombank + Yahoo + FRED + SJC + World Bank), official documents (NSO + VBMA) |
| `src/feeds/finance/vn/index.ts` | `fin-vnmacro` | `fetchVnFeed()` composes the three above into `VnFeedData`. `fetchSuccess` mirrors the market half — documents alone are a statistics recap with no market read in them |

### `src/platform/llm/` — LLM invocation

| File | Responsibility |
|------|---------------|
| `src/platform/llm/client.ts` | `callLlm` (concurrency limiter + 429/timeout/overload retry), `parseLlmJson`, the retry predicates (`is429`, `isTimeout`, `isOverloaded`, `isRetryable`), LLM token budget constants |
| `src/platform/llm/providers/types.ts` | `LlmProvider` interface, `ProviderFactory` type |
| `src/platform/llm/providers/index.ts` | `createProvider` factory + `PROVIDERS` registry + `VALID_PROVIDER_NAMES` / `ProviderName`; barrel re-exports |
| `src/platform/llm/providers/client-options.ts` | `CLIENT_OPTIONS` / `LLM_TIMEOUT_MS` — shared SDK client timeout; disables the SDKs' built-in retry loops so `callLlm` owns retry policy |
| `src/platform/llm/providers/openai-compatible.ts` | `OpenAICompatibleProvider` — shared base for OpenAI-compatible providers |
| `src/platform/llm/providers/anthropic.ts` | `AnthropicProvider` — Anthropic SDK wrapper |
| `src/platform/llm/providers/{openai,github-copilot,openrouter,deepseek}.ts` | Providers extending `OpenAICompatibleProvider` |

### `src/platform/prompts/` — one builder module per report

| File | Responsibility |
|------|---------------|
| `src/platform/prompts/index.ts` | Barrel — re-exports every prompt builder; import from here |
| `src/platform/prompts/shared.ts` | Helpers shared by builders: `formatItem`, `topN`, `sampleNote`, `fmtNum`, `fmtPct` |
| `src/platform/prompts/repos.ts` | Repo-level builders: `buildCliPrompt`, `buildPeerPrompt`, `buildComparisonPrompt`, `buildPeersComparisonPrompt`, `buildSkillsPrompt`; `RepoDigest` type |
| `src/platform/prompts/{trending,web,hn,ph,arxiv,hf,community}.ts` | `buildTrendingPrompt`, `buildWebReportPrompt`, `buildHnPrompt`, `buildPhPrompt`, `buildArxivPrompt`, `buildHfPrompt`, `buildCommunityPrompt` |
| `src/platform/prompts/macro.ts` | `buildMacroPrompt` + its `MACRO_GROUP_LABEL` / `macroMetricLine` helpers |
| `src/platform/prompts/vnmacro.ts` | `buildVnMacroPrompt` + its `vn*` section helpers |
| `src/platform/prompts/vnrates.ts` | `buildVnRatesPrompt` + its policy/interbank/spread section helpers |
| `src/platform/prompts/rollup.ts` | `buildWeeklyPrompt`, `buildMonthlyPrompt` |
| `src/platform/prompts/highlights.ts` | `buildHighlightsPrompt(reports, lang, itemsPerReport?)`; `ReportHighlights` type |

### `src/platform/reports/` — report assembly and output

| File | Responsibility |
|------|---------------|
| `src/platform/reports/index.ts` | Barrel — re-exports the builders and savers below |
| `src/platform/reports/files.ts` | `saveFile`, `autoGenFooter` |
| `src/platform/reports/builders/cli.ts` | `buildCliReportContent` — assembles the CLI Markdown |
| `src/platform/reports/builders/openclaw.ts` | `buildOpenclawReportContent` — assembles the OpenClaw Markdown |
| `src/platform/reports/savers/*.ts` | `saveWebReport`, `saveTrendingReport`, `saveHnReport`, `savePhReport`, `saveArxivReport`, `saveHfReport`, `saveCommunityReport`, `saveMacroReport`, `saveVnMacroReport`, `saveVnRatesReport` — LLM call + file save + optional GitHub issue, one file per report. Every saver swallows its own errors so a single failing report never aborts the run |
| `src/platform/reports/rollup.ts` | `runWeeklyRollup`, `runMonthlyRollup`, `toWeekStr` — rollup generators (read daily digests, no API calls) |
| `src/platform/reports/manifest.ts` | Generates `manifest.json` (Web UI sidebar) and `feed.xml` (RSS 2.0, latest 30 items); `REPORT_FILES` lists all report IDs; `toRfc822` / `escapeXml` helpers |

### `src/platform/publish/` — output transports

| File | Responsibility |
|------|---------------|
| `src/platform/publish/github-issues.ts` | Publishing digests as GitHub Issues: `tryCreateGitHubIssue`, `createGitHubIssue`, `ensureLabel`, `closeStaleIssues`, `LABEL_COLORS`, and the URL/mention-neutralizing step. Writes to `DIGEST_REPO`; shares the GitHub transport with the fetchers via `providers/github/client.ts` |

### `src/platform/state/` — persisted run state

| File | Responsibility |
|------|---------------|
| `src/platform/state/web-state.ts` | `loadWebState` / `saveWebState` / `emptyState` for `digests/web-state.json` |

### `src/platform/notify/` — notification transports

| File | Responsibility |
|------|---------------|
| `src/platform/notify/telegram.ts` | Telegram message building + delivery; exports `buildMessage`, `sendTelegram`, `Highlights` |
| `src/platform/notify/feishu.ts` | Feishu (Lark) card message building + delivery; exports `buildFeishuMessage`, `sendFeishu`, `getWebhookUrls` |

### `src/__tests__/` — two live test layers

The suite is **live only**. There is no mocked layer: the stubbed-`fetch` unit tests that used to sit in `src/__tests__/*.test.ts` were deleted deliberately, because a passing test against a recorded response says nothing about whether the source still answers that way today. Everything under `src/__tests__/` calls a real endpoint.

**The test tree mirrors `src/`**: one test file per source module, at the same path. `src/providers/github/repos.ts` is tested by `src/__tests__/live/providers/github/repos.live.test.ts`, `src/feeds/ai/hn.ts` by `src/__tests__/live/feeds/ai/hn.live.test.ts`. Nothing groups several sources into one file — a red file names the module, and one host's outage cannot mask another's.

```
src/__tests__/live/
├── contract.ts        assertions (expectPopulated, expectNonEmpty, …), LIVE_OPTS, hasEnv, daysAgo, isoDate
├── status.ts          probe() / recordSkip() + the status table
├── global-status.ts   vitest globalSetup: reset before the run, print after it
├── providers/         22 files, mirroring src/providers/ (incl. providers/github/)
└── feeds/             12 files, mirroring src/feeds/ (ai/, finance/, finance/vn/)
```

- **Live provider probes** (`live/providers/**`) — call one provider directly, so a broken host is attributed to the module that talks to it. `pnpm test:providers`.
- **Live feed contracts** (`live/feeds/**`) — call one feed and assert the fields the reports depend on are still populated. `pnpm test:feeds`. Every feed maps a missing upstream field to `""`, `0` or `null` instead of throwing, so a renamed field never surfaces as an error — it surfaces as a well-formed object full of blanks. `expectPopulated` is what turns that silent degradation into a red test naming the exact field.

Both layers are worth keeping because they fail differently: a feed applies the degrade policy and can stay green while half a composite source is dark, while a provider probe cannot. Read them together — a green `providers/yahoo.ts` row beside a red `feeds/finance/vn/macro.ts` row says the transport is fine and the feed's composition or filtering is what broke.

Every test wraps its call in `probe(module, target, run)` from `live/status.ts`, where `run` asserts and returns a one-line summary of what came back. Outcomes are appended to a JSONL file (one module per file means one worker per module, so nothing in memory is shared) and printed as a single status table — ✔ OK / ✘ FAIL / – SKIP with timing and that summary — from the `teardown` of the `globalSetup` module `live/global-status.ts`, wired in `vitest.config.ts`. The table is a no-op when the selection contains no probes, and it goes to **stderr** like every other diagnostic in this repo.

Live-test conventions:
- Assert *shape and populatedness*, never an exact count, a specific item, or a value that moves with the market.
- Use `LIVE_OPTS` (90 s timeout, `retry: 2`). Retries cover transient throttling — Yahoo rate-limits when several symbols are requested at once — while a real format change still fails all three attempts.
- A source needing a secret calls `recordSkip(...)` then `ctx.skip()` rather than `it.skipIf`, so the skipped source still gets a row in the status table. `contract.ts` loads `dotenv`, so local `.env` credentials are picked up.
- A source with intentionally empty output must be asserted on what it *does* produce: `web`'s OpenAI half is `metadataOnly` (its article pages 403 from datacenter IPs), so asserting non-empty `content` there would fail permanently and train everyone to ignore the suite.
- Some red rows are calendar, not drift: `feeds/ai/arxiv.ts` keeps a 48 h window and arXiv does not publish at weekends, so a Monday run legitimately reports `fetchSuccess: false` and the report is skipped. The provider probe's row is how you tell that apart from a real outage.

**`pnpm test` therefore requires network access and takes ~60 s.** This is deliberate — the point is to learn when a source changes format. CI runs it too, so a third-party outage will turn the build red.

What this trades away, so nobody rediscovers it as a surprise: nothing offline covers the prompt builders, the report/rollup Markdown assembly, `manifest.json` / `feed.xml` generation, `src/core/i18n/`, or the Telegram/Feishu message builders. A regression in those layers surfaces in a digest run, not in `pnpm test`. `pnpm inspect` is the tool for them — `prompt:*`, `report:*`, `notify:*` and `manifest` all run against real or fixture input without writing anything.

### Outside `src/`

| Path | Responsibility |
|------|---------------|
| `mcp/` | Standalone Cloudflare Worker MCP server (own `package.json` / `pnpm-lock.yaml` / `wrangler.toml`). Not part of the daily pipeline and not built by the root package — see **MCP server** below |
| `scripts/regen-highlights.ts` | One-off recovery script: re-runs the highlights LLM call against digests already on disk (optionally `--notify` to resend Telegram). Imports from `src/`, so it is typechecked but not linted as pipeline code |
| `index.html` | Single-file static Web UI (no build step) |
| `config.yml` | Tracked-repo configuration consumed by `src/core/config.ts` |
| `assets/` | Static images used by the README / Web UI |
| `.agent/`, `.agile/`, `.claude/` | **Git-ignored or untracked** local working directories (agent orchestration prompts/specs, agile docs). Anything referenced there — e.g. `.agent/specs/financial_data_sources.md` — exists only on the author's machine; do not assume a checkout has it |

## MCP server

`mcp/` is a self-contained Cloudflare Worker that serves the published digests over MCP (deployed at `agents-radar-mcp.duanyytop.workers.dev`; setup instructions live in `README.md`). It has its own dependencies and is deployed separately with `cd mcp && pnpm install && wrangler deploy` (invoke `wrangler` directly — `pnpm deploy` is a reserved pnpm builtin and will not run the script); the root `pnpm test` / `pnpm typecheck` / `ci.yml` do **not** cover it — run `pnpm typecheck` inside `mcp/`.

- It reads published artifacts over HTTP from `PAGES_URL` (`manifest.json` + `digests/**.md`) with Cloudflare edge caching — it never touches the GitHub API or shares code with `src/`.
- Tools: `list_reports`, `get_report`, `get_latest`, `search`. Transport is hand-rolled JSON-RPC (`initialize` / `tools/list` / `tools/call`) — no MCP SDK dependency.
- It keeps its **own copy** of `REPORT_LABELS`, now covering every report ID. Unknown IDs fall back to the raw report ID, so a report added without updating this copy still resolves — only the human label is missing.

## Report outputs

Daily files written to `digests/YYYY-MM-DD/` (each also has a `-en` variant, e.g. `ai-cli-en.md`):

| File | Issue label | Notes |
|------|-------------|-------|
| `ai-cli.md` | `digest` | Always generated |
| `ai-agents.md` | `openclaw` | Always generated |
| `ai-web.md` | `web` | Skipped if no new sitemap content |
| `ai-trending.md` | `trending` | Skipped if both trending data sources fail |
| `ai-hn.md` | `hn` | Skipped if the HN fetch fails |
| `ai-ph.md` | `ph` | Skipped if the Product Hunt fetch fails (needs `PRODUCTHUNT_TOKEN`) |
| `ai-arxiv.md` | `arxiv` | Skipped if the ArXiv fetch fails |
| `ai-hf.md` | `hf` | Skipped if the Hugging Face fetch fails |
| `ai-community.md` | `community` | Dev.to + Lobste.rs; skipped if both fail |
| `fin-macro.md` | `macro` | Macro market dashboard (FRED + FINRA); skipped if FRED fails. FINRA is supplementary. Uses the `fin-` prefix — a parallel financial section |
| `fin-vnmacro.md` | `vnmacro` | Vietnam macro market dashboard (SSI + Entrade + Vietcombank + Yahoo + FRED + SJC + World Bank + NSO + VBMA); skipped if Vietnam market data fails. Documents and macro series are supplementary |
| `fin-vnrates.md` | `vnrates` | Vietnam interest rate dashboard (SBV + FRED + Vietcombank); skipped if the SBV interbank board fails. The policy board and USD/VND are supplementary |
| `highlights.json` | — | Bullet-point highlights per report (vi + en), consumed by notifications |

Rollup files (separate cron jobs): `ai-weekly.md` (label `weekly`) and `ai-monthly.md` (label `monthly`), plus `-en` variants.

## Tracked sources

Tracked repos are configured in `config.yml` (loaded by `src/core/config.ts`, which falls back to built-in defaults if the file/section is missing). Each entry is `{ id, repo, name, paginated? }`; `paginated: true` opts a high-volume repo into multi-page fetching.

- **cli_repos** (10): claude-code, codex, gemini-cli, copilot-cli, kimi-cli, opencode, pi, qwen-code, deepseek-tui, grok-build
- **openclaw** + **openclaw_peers** (12 total): openclaw/openclaw + 11 peer projects
- **skills_repo**: anthropics/skills — no date filter, sorted by popularity
- **Web**: anthropic.com + openai.com via sitemap, state in `digests/web-state.json`
- **Trending**: github.com/trending (HTML) + GitHub Search API AI-topic queries (`llm`, `ai-agent`, `rag`, `vector-database`, `large-language-model`, `machine-learning`)
- **HN**: Hacker News Firebase API — scans topstories, filters for AI keywords, keeps top 30
- **Product Hunt**: GraphQL API — yesterday's top products, filtered to AI topics (requires `PRODUCTHUNT_TOKEN`)
- **ArXiv**: Atom-feed API — cs.AI + cs.CL + cs.LG, newest first, last 48h
- **Hugging Face**: HF Hub API — trending models by weekly likes
- **Community**: Dev.to (Forem API) + Lobste.rs (tag JSON endpoints)
- **FRED** (macro): Federal Reserve Economic Data — 16 series (`DFF`, `WALCL`, `VIXCLS`, `DGS10`, `T10Y2Y`, `BAMLH0A0HYM2`, `DCOILWTICO`, `DCOILBRENTEU`, `UNRATE`, `ICSA`, `PAYEMS`, `CPIAUCSL`, `CPILFESL`, `PCEPILFE`, `PPIFIS`, `UMCSENT`). Official + free; JSON API needs `FRED_API_KEY`, else keyless CSV. Series catalog + design notes in `.agent/specs/financial_data_sources.md` (git-ignored, local-only)
- **FINRA** (retail leverage): monthly margin-debt statistics, scraped from finra.org (no official API)
- **Vietnam market** (`providers/ssi.ts` + `providers/entrade.ts` → `feeds/finance/vn/market.ts`): SSI iBoard `iboard-query.ssi.com.vn/stock/exchange/{hose,hnx}` price board + DNSE Entrade `services.entrade.com.vn/chart-api/v2/ohlcs/{index,derivative}` for VNINDEX / VN30 / VN30F1M. Both are undocumented internal endpoints and need a browser User-Agent plus a `Referer`
- **Vietnam macro** (`providers/{vietcombank,yahoo,fred,sjc,worldbank}.ts` → `feeds/finance/vn/macro.ts`): Vietcombank `/api/exchangerates?date=` (USD/VND), Yahoo Finance chart API (`DX-Y.NYB`, `GC=F`, `BZ=F`, `HRC=F`, `VNM`), FRED `DGS10` for the US 10Y (Yahoo `^TNX` is the fallback only), SJC `GoldPrice/Services/PriceService.ashx` for domestic gold, World Bank (`FP.CPI.TOTL.ZG`, `NY.GDP.MKTP.KD.ZG`, `BX.KLT.DINV.CD.WD`, `FI.RES.TOTL.CD`)
- **Vietnam interest rates** (`providers/sbv.ts` + `providers/fred.ts` + `providers/vietcombank.ts` → `feeds/finance/vnrates.ts`): SBV Liferay headless-delivery, content structures `3450482` (policy rates — one standing record) and `3450260` (interbank market — one record per session, ~3100 published). Plus FRED `DFF` for the VND-USD overnight spread and the Vietcombank USD/VND board. Analysis framework in `fin_data/sbv_data_analyze.md` and `fin_data/sbv_data_analyze_rules_2.md` (git-ignored, local-only)
- **Vietnam documents** (`providers/nso.ts` + `providers/vbma.ts` → `feeds/finance/vn/docs.ts`): NSO CPI + monthly socio-economic report (HTML), VBMA weekly bond bulletin (PDF). Source catalogue and endpoint survey in `.agent/specs/vn_financial_data_sources.md`

## Key conventions

- **Never call `console.*`.** Every module takes a named child logger — `const log = createLogger("vnmarket")` — from `src/core/logger.ts` and calls `log.info` / `log.warn` / `log.error`. The name replaces the `[tag]` prefix these messages used to carry by hand; keep a bracketed prefix in the message only when it names a *sub*-entity the logger name does not (e.g. `[fred]` / `[finra]` under `macro`, `[weekly]` / `[monthly]` under `rollup`). Per-item context that a reader might want to filter on — `lang`, `site`, `call` — goes in the merge object (`log.info({ lang }, "…")`), not only in the message text. The one exception is `src/cli/inspect.ts`, whose `SKIPPED:` / `FAILED:` / `ERROR:` lines and usage text are the command's contract and are written raw to stderr by `err()`.
- `callLlm` logs a `LLM call started` / `LLM call finished` pair around every request, carrying a per-call `call` id (up to `LLM_CONCURRENCY` are in flight at once, so the id is what pairs them), plus `promptChars` / `maxTokens` / `inFlight` / `queued` on the way in and `ms` / `attempts` / `responseChars` on the way out. Retries log at `warn`, a final give-up at `error`.
- All bilingual strings (titles, labels, footers, messages) are centralized in `src/core/i18n/` (import from the `src/core/i18n/index.ts` barrel). Use the `Lang` type (`"vi" | "en"`) and the `t(vi, en)` / `Record<Lang, string>` maps. Do not add inline bilingual ternaries elsewhere.
- Which languages are generated is controlled centrally by `getLangs()` in `src/core/i18n/lang.ts`, driven by the `DIGEST_LANGS` env var (comma-separated; default = all). `main()` in `src/cli/daily.ts` and the rollups in `src/platform/reports/rollup.ts` loop over `getLangs()` — do not hard-code `["vi", "en"]`. Production workflows set `DIGEST_LANGS: en`. The weekly/monthly GitHub issue title and label are Vietnamese-only, so the issue body prefers vi content and falls back to the first configured language. `notify/telegram.ts` / `notify/feishu.ts` derive report IDs by stripping the `-en` suffix, so notifications render correctly with any language subset.
- LLM prompt builders live in `src/platform/prompts/`, one module per report type (`repos.ts` for the repo-level builders, `trending.ts` / `hn.ts` / `macro.ts` / … for the data sources, `rollup.ts` and `highlights.ts` for the rest). Import them through the `src/platform/prompts/index.ts` barrel. Each report type has its own builder function.
- `callLlm(prompt, maxTokens?)` defaults to `LLM_TOKENS_DEFAULT` = 4096. Trending, web, the rollups and the Vietnam dashboard use 8192 (`LLM_TOKENS_TRENDING`, `LLM_TOKENS_WEB`, `LLM_TOKENS_ROLLUP`, `LLM_TOKENS_VNMACRO`); the table-formatted listing reports (HN, PH, ArXiv, HF, Community, Macro) use `LLM_TOKENS_LISTING` = 6144; highlights use 2048 (daily) / 1024 (rollup). Token constants live in `src/platform/llm/client.ts` — when a report starts truncating, raise the constant there rather than passing a magic number at the call site.
- Data-source listing reports (Trending, HN, PH, ArXiv, HF, Community) render item lists as **Markdown tables** (not bullet lists). Numeric columns are copied verbatim from the fetched data; the summary column is 2 sentences. Tables have CSS in `index.html` and render natively in GitHub Issues.
- On transient errors — 429 rate limits (`is429`), request timeouts / dropped connections (`isTimeout`), and server-side overload (`isOverloaded`: 502/503/529 plus `ResourceExhausted` / "request limit reached" / "overloaded" wording, since gateways often report saturation as a 5xx rather than a 429) — `callLlm` retries up to `MAX_RETRIES` = 3 times. Every wait is floored at `RETRY_MIN_MS` = 60 s and grows exponentially from it (60 s / 120 s / 240 s), honours a longer `Retry-After` header, and is capped at 5 min. The concurrency slot is released during the wait. Sub-minute backoffs just burn an attempt on a per-minute quota that has not refilled.
- The SDK clients are built with `maxRetries: 0` and an explicit `timeout` (`CLIENT_OPTIONS` in `src/platform/llm/providers/client-options.ts`, `LLM_TIMEOUT_MS` env var, default 10 min). The SDKs' own sub-10 s retry loops are disabled on purpose so `callLlm` is the single retry policy — do not re-enable them per provider.
- The concurrency limiter (`LLM_CONCURRENCY`, default 5) prevents 429s when many parallel LLM calls fire. Do not bypass it by calling SDK clients directly.
- LLM provider is selected via `LLM_PROVIDER` (code default: `anthropic`; the production workflows pass it through from the `LLM_PROVIDER` repo secret). Add providers only in the `PROVIDERS` registry in `src/platform/llm/providers/index.ts`; `ProviderName` and `VALID_PROVIDER_NAMES` are derived from it. The factory logs only the provider *name* — never API keys or endpoint URLs.
- LLM JSON output (e.g. `highlights.json`) must be parsed with `parseLlmJson` from `src/platform/llm/client.ts` — it strips code fences, replaces raw control chars, and repairs trailing commas / prose wrappers.
- GitHub issue label colors are defined in `LABEL_COLORS` in `src/platform/publish/github-issues.ts`. Add new labels there; `ensureLabel` falls back to `0075ca` for anything missing.
- Issue creation always goes through `tryCreateGitHubIssue` (`src/platform/publish/github-issues.ts`), which logs and returns `null` on failure. Never call `createGitHubIssue` directly from the pipeline: the reports are already on disk by then, and a throw exits non-zero, which skips the workflow's "Commit digest files" step and discards the whole day's digest. A 404 from the labels/issues endpoints means Issues are disabled on the repo (the default for forks) or the token lacks Issues write access.
- Issue bodies pass through a URL-breaking step that inserts a zero-width space into `github.com` links, so posting a digest never fires "mentioned this issue" notifications on the tracked repos. `formatItem` in `prompts/shared.ts` does the same for prompts by rendering references as `owner/repo Issue #123` instead of a full URL.
- `sampleNote(total, sampled, lang, by?)` in `src/platform/prompts/shared.ts` formats the "(Tổng cộng N mục, hiển thị M mục có …)" note. Reuse it — do not inline the string format. The optional `by` argument names the sort criterion; pass it whenever the caller sorts by something other than comment count (e.g. `buildTrendingPrompt` sorts its search results by stars), so the prompt never misdescribes its own sampling.
- Document sources (Vietnam NSO/VBMA) go through `src/core/doc-extract.ts`, never a bespoke parser. Fetching is `providers/nso.ts` / `providers/vbma.ts`; the keyword narrowing is `feeds/finance/vn/docs.ts`. HTML uses linkedom + Mozilla Readability — linkedom, not jsdom, because this is a batch job that parses a few pages per run. `extractArticle` strips nav/header/footer/aside **before** parsing (Readability otherwise scores NSO's mega-menu above the article body) and falls back to a tag-strip when the result is missing or under `MIN_ARTICLE_CHARS` (200). PDFs are extracted per page so `rankPages` can keep only the pages that score on macro keywords — a 13-page VBMA bulletin reduces to 4. Never send a whole document to the LLM; narrow it with `relevantExcerpt` / `rankPages` first.
- Vietnam endpoints are undocumented internal APIs and need `BROWSER_UA` (a desktop Chrome User-Agent) plus a `Referer`; a bare fetch gets 403 or an empty body. TCBS (`apipubaws.tcbs.com.vn`) is behind a Cloudflare challenge and VNDirect (`finfo-api.vndirect.com.vn`) times out, so **aggregate VN-Index P/E and market-wide margin debt have no source** — `buildVnMacroPrompt` instructs the model to mark the signals that depend on them ❔ insufficient data rather than guess.
- Prefer a documented API over an undocumented one wherever both carry a series: the US 10Y comes from FRED `DGS10`, not Yahoo `^TNX`, and Yahoo is wired only as the fallback. `fetchFredSeries(series, limit)` in `providers/fred.ts` is the shared accessor.
- SJC's gold board is behind a WAF that fingerprints the **TLS ClientHello**, not the headers — Node's `fetch` gets 403 with any headers (or none) while curl gets 200. `getJsonBrowserTls` in `vnmacro.ts` presents Chrome's cipher list via an undici `Agent`. Its public HTML page renders the board in JavaScript, so extraction there yields an empty shell; do not conclude a source is unavailable from the rendered page alone.
- SBV's headless-delivery API rejects a cookie-less request with **HTTP 200** and an HTML "Request Rejected" body, not a 403 — `providers/sbv.ts` therefore checks the body, not the status, and retries once behind a fresh handshake. A refresh always starts from an *empty* jar: the homepage does not reissue every cookie, so merging onto the rejected jar carries the poisoned one straight back. `session.json` is git-ignored; a cold jar just costs one extra homepage GET, so CI never needs it.
- SBV quotes Vietnamese-style: `,` is the decimal separator and `.` groups thousands. "3,000%" is three percent. Parse it with `parseVnNumber` from `providers/sbv.ts` — reading it the American way misprices every policy rate by a factor of a thousand.
- Rate moves in `fin-vnrates` are carried as **percentage points** (`changePp*`) *and* as relative percent (`changePct*`), and the prompt says which to use where. A 3.01% overnight rate that was 4.02% is −1.01pp and −25%; only the first is comparable with the policy corridor. Lookbacks are in *published sessions*, not calendar days.
- `fin-vnrates` has no source for OMO / T-bill (tín phiếu) operations or the credit-growth quota, so `buildVnRatesPrompt` instructs the model to mark those blocks ❔ insufficient data — the same convention `buildVnMacroPrompt` uses for VN-Index P/E and margin debt.
- SSI board turnover (`nmTotalTradedValue`) is order-matched only, while `buyForeignValue` / `sellForeignValue` include put-through (block) deals. One ticker's foreign flow can therefore exceed its matched turnover. Both definitions are stated in the prompt; don't "fix" the discrepancy.
- Every outbound request goes through `src/core/http.ts` — never a bare `fetch`. Providers call it; feeds never do. The helpers throw `HttpError` on a non-2xx and impose no degrade policy: whether a failure empties the result, skips one item of a batch, or aborts the fetch stays with the data source. Headers are opt-in (only `User-Agent` is sent by default) so `Accept` is never inferred — arXiv serves Atom and FRED serves CSV. The two exceptions are `platform/notify/telegram.ts` and `feishu.ts`, which stay on raw `fetch` because the request URL *is* the credential there and `HttpError` puts the URL in its message.
- GitHub has exactly one client: `src/providers/github/client.ts`. The repo fetchers, the topic search, the trending scraper and the issue publisher all use it. Do not hand-roll `Authorization` / `X-GitHub-Api-Version` headers at a call site — that is how the trending search once swallowed rate limits that aborted every other GitHub path.
- **One feed per report ID.** A feed may serve two reports when the shape is identical (`repo-activity` serves `ai-cli` and `ai-agents`), but a report never assembles several feeds in `cli/daily.ts` — that is how `ai-community`, `fin-macro` and `fin-vnmacro` previously ended up spread across two, two and three modules with their degrade rules in the orchestrator.
- Report-shaped configuration — which FRED series the dashboard tracks, which Product Hunt topics count as AI, which keywords narrow an NSO article — lives in the **feed**, not the provider. The provider only knows how to talk to the host.
- Web state (`digests/web-state.json`) is committed to git on every run and is the source of truth for which URLs have been seen. It is saved once by `main()` in `daily.ts` after every language's `saveWebReport` has run — the state is language-agnostic.

## Notifications

- `cli/notify-telegram.ts` and `cli/notify-feishu.ts` both read the latest `manifest.json` entry plus that day's `highlights.json`, then hand off to `platform/notify/telegram.ts` / `platform/notify/feishu.ts`, which build a bilingual link list with highlight sub-bullets. Both entrypoints skip silently if their secrets are unset and guard against sending when imported (only send when run directly); `buildMessage`/`buildFeishuMessage` stay exported for testing.
- Notification/report labels live in `NOTIFY_LABELS` (`src/core/i18n/labels.ts`), keyed by report ID.

## Module probes (`pnpm inspect`)

`pnpm start` and `pnpm test` are the only other ways to run this code — one runs everything, the other runs mocks. `pnpm inspect <target>` runs **one module** against real input and prints what it returned.

- Dispatcher: `src/cli/inspect.ts` (registry lookup + arg parsing + exit codes). Implementations: `src/cli/inspect/*.ts`, one module per group; the flat target list lives in `src/cli/inspect/registry.ts`.
- Source targets probe **feeds**, since that is what the pipeline consumes; `devto` and `lobsters` probe the two halves of the community feed, and `github` probes `providers/github/repos.ts` directly.
- Target groups: data sources (`arxiv`, `devto`, `hf`, `hn`, `lobsters`, `ph`, `trending`, `web`, `fred`, `finra`, `vnmarket`, `vnmacro`, `vnrates`, `vndocs`, `github`), pure transforms (`doc-extract:html`, `doc-extract:pdf`, `doc-extract:excerpt`, `vnmarket:aggregate`), prompt builders (`prompt:hn`, `prompt:trending`, `prompt:ph`, `prompt:arxiv`, `prompt:hf`, `prompt:community`, `prompt:web`, `prompt:macro`, `prompt:vnmacro`, `prompt:vnrates`, `prompt:highlights`), `llm`, and dry runs (`report:macro`, `report:vnmacro`, `report:vnrates`, `notify:telegram`, `notify:feishu`, `manifest`).
- **Exit codes are the contract**: `0` = ran and produced output, `1` = ran and failed (network/parse/unexpected shape, or a source reporting `fetchSuccess: false`), `2` = skipped because a required env var is unset (`SKIPPED: <target> requires <ENV_VAR>` on stderr). `SkipError` / `ProbeError` in `kit.ts` are how a probe signals which.
- Results go to **stdout** (`--json` for the raw result); every diagnostic goes to **stderr**. The probed modules log through `core/logger.ts`, which is stderr-only already; the dispatcher's console routing is only a net for a dependency that writes to stdout. pnpm prints its run banner to stdout, so pipe with `pnpm -s inspect … --json | jq`.
- **No side effects.** Probes never write into `digests/`, never modify `manifest.json` / `feed.xml` / `digests/web-state.json`, never create GitHub issues and cannot send notifications. `report:*` and `manifest` reach the real writers by `process.chdir`-ing into a temp dir first (both write relative to cwd), and pass an empty `digestRepo` so issue creation is skipped; the notify targets import only the message builders, never `sendTelegram` / `sendFeishu`.
- Probe modules import domain code with `await import(...)` inside `run`, not at the top level: `platform/llm/client.ts` constructs a provider at module scope and the SDK throws on a missing key, which must surface as exit 2 rather than a crash. `platform/prompts/index.ts` is pure and is imported statically.
- Offline modes: every prompt builder takes `--fixture <path>`, and the fixture format is exactly the `--json` output of the matching source probe (`pnpm -s inspect hn --json > hn.json`). Committed samples are in `src/cli/inspect/fixtures/` — keep each under ~50 KB, and give saved HTML a `.txt` suffix so `prettier --check src` skips it (Prettier cannot parse real-world pages).
- This is additive tooling: probes never change the modules they probe. If something cannot be probed without a signature change, leave it unprobed and say so.

## GitHub Actions workflows

All three digest workflows run on Node 22 + pnpm, have `contents: write` + `issues: write`, and support `workflow_dispatch`. They set `DIGEST_LANGS: en` and pass `LLM_PROVIDER` / provider credentials through from repo secrets.

- `.github/workflows/daily-digest.yml` — cron `0 0 * * *`, 60 min timeout: `pnpm start` → commit `digests/` → `pnpm manifest` → commit `manifest.json`+`feed.xml` → Telegram → Feishu → `pnpm close-stale`.
- `.github/workflows/weekly-digest.yml` — cron `0 1 * * 1`, 30 min timeout: `pnpm weekly` → commit → manifest → Telegram.
- `.github/workflows/monthly-digest.yml` — cron `0 2 1 * *`, 30 min timeout: `pnpm monthly` → commit → manifest → Telegram.
- `.github/workflows/ci.yml` — on push to `master` / PR: lint, format check, typecheck, test.

## Web UI & RSS Feed

- Web UI: `index.html` reads `manifest.json` to build the sidebar, then fetches `digests/YYYY-MM-DD/<report>.md` on demand. No build step — it is plain HTML/CSS/JS with a VI/EN toggle per report and a light/dark theme.
- RSS Feed: `feed.xml` at the repo root, generated by `src/platform/reports/manifest.ts` in the `pnpm manifest` step. Contains the latest 30 items (newest first) across all report types, each with a plain-text `description` and full HTML in `content:encoded` (CDATA, with `]]>` escaped). Item links use hash routing: `https://duanyytop.github.io/agents-radar/#YYYY-MM-DD/<report>`.
- Both `manifest.json` and `feed.xml` are committed together in the "Commit manifest and feed" GHA step.
- The `REPORT_LABELS` map in `src/core/i18n/labels.ts` and `REPORT_FILES` in `src/platform/reports/manifest.ts` must be kept in sync with the `LABELS` object in `index.html` — and with the separate `REPORT_LABELS` copy in `mcp/src/index.ts` — when adding new report types. Four maps, four files; `REPORT_FILES` is the one that actually gates whether a report reaches `manifest.json` and `feed.xml`.

## Adding a new report type

1. Add a provider under `src/providers/<host>.ts` if the upstream host is new — it throws on failure and knows nothing about the report.
2. Add a feed under `src/feeds/<area>/<report>.ts` returning `{ ...items, fetchSuccess }`, never throwing on a missing upstream field. This is where the degrade policy and any report-shaped config live.
3. Add a `buildXxxPrompt` module under `src/platform/prompts/` (one file per report) and re-export it from `src/platform/prompts/index.ts`.
4. Add bilingual strings (title, `ISSUE_LABELS` entry, issue-title function) to `src/core/i18n/reports.ts`.
5. Add a `saveXxxReport` module under `src/platform/reports/savers/` and re-export it from `src/platform/reports/index.ts`.
6. Wire into `fetchAllData`, `generateSummaries` (if it needs a summary pass) and the save phase in `src/cli/daily.ts`, plus `EXTRA_REPORT_IDS` there so it reaches `highlights.json`.
7. Add a label color entry in `LABEL_COLORS` in `src/platform/publish/github-issues.ts`.
8. Add the report ID/label to `REPORT_LABELS` and `NOTIFY_LABELS` in `src/core/i18n/labels.ts` and `LABELS` in `index.html`.
9. Add the report file name (and `-en` variant) to `REPORT_FILES` in `src/platform/reports/manifest.ts`.
10. Add the report ID to `REPORT_LABELS` in `mcp/src/index.ts` so MCP clients see a human label.
11. Add a feed probe to `src/cli/inspect/sources.ts` (and a `prompt:` target to `prompts.ts`) plus its entry in `registry.ts`.
12. Add a live feed contract at `src/__tests__/live/feeds/<area>/<report>.live.test.ts` and — for a new host — a live provider probe at `src/__tests__/live/providers/<host>.live.test.ts`. Both mirror the source path exactly.
13. Update both README files and this file.
