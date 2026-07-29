# CLAUDE.md

## Project overview

agents-radar is a daily digest generator for the AI open-source ecosystem. A GitHub Actions cron job runs at 00:00 UTC (08:00 CST) and produces bilingual (Chinese + English) reports across many data sources (AI CLI tools, the OpenClaw agent ecosystem, official AI company sites, GitHub Trending, Hacker News, Product Hunt, ArXiv, Hugging Face, dev communities, a macro-financial dashboard from FRED + FINRA, and a Vietnam macro-market dashboard). Reports are published as GitHub Issues, committed as Markdown files, surfaced through a static Web UI + RSS feed, and pushed to Telegram/Feishu. Two additional cron jobs generate weekly and monthly rollups.

## Commands

```bash
pnpm start          # run the full daily digest locally
pnpm weekly         # generate the weekly rollup (reads existing daily digests)
pnpm monthly        # generate the monthly rollup
pnpm manifest       # regenerate manifest.json + feed.xml from digests/
pnpm notify         # send Telegram notification for the latest manifest entry
pnpm notify:feishu  # send Feishu (Lark) notification
pnpm close-stale    # close digest GitHub Issues older than 7 days
pnpm xiaohongshu    # generate a Xiaohongshu post from the latest digest (local)
pnpm wechat         # generate a WeChat weekly article (last 7 days)
pnpm wechat:monthly # generate a WeChat monthly article (last 30 days)

pnpm test           # vitest (unit tests, src/__tests__/)
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

Env vars for local runs. `src/cli/daily.ts` and `src/cli/social.ts` load `dotenv/config` as their **first** import (before anything that reads `process.env` at module scope, notably the provider selection in `platform/llm/client.ts`), so a local `.env` — see `.env.example`, git-ignored — works for `pnpm start` and the social generators. dotenv never overrides variables already set in the environment, so GitHub Actions `env:` values always win. Other entrypoints (`cli/weekly.ts`, `cli/monthly.ts`, `cli/notify-telegram.ts`, `cli/notify-feishu.ts`, `scripts/`) do **not** load dotenv — export the vars in the shell for those.

```bash
export GH_TOKEN=ghp_xxxxx        # GitHub token (named GH_TOKEN, not GITHUB_TOKEN — GH Actions reserves the GITHUB_ prefix)
export DIGEST_REPO=owner/repo   # omit to skip GitHub issue creation

# Languages to generate (default: both). "en" = English only, "zh" = Chinese only.
export DIGEST_LANGS=zh,en       # zh,en | en | zh

# Max concurrent in-flight LLM requests (positive integer; default: 5)
export LLM_CONCURRENCY=5

# Per-request LLM timeout in ms (positive integer; default: 600000 = 10 min)
export LLM_TIMEOUT_MS=600000

# LLM provider (code default: anthropic; production GHA uses deepseek)
export LLM_PROVIDER=anthropic   # anthropic | openai | github-copilot | openrouter | deepseek

# Anthropic (code default) — ANTHROPIC_MODEL default: claude-sonnet-4-6
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

The daily pipeline runs in sequential phases, each a named async function in `src/cli/daily.ts`. ZH and EN reports are generated **simultaneously** (both languages run in parallel at every phase).

1. **`fetchAllData`** — all network I/O in parallel: GitHub API (issues/PRs/releases) for the 22 tracked repos (10 CLI + OpenClaw + 11 peers), Claude Code Skills, Anthropic/OpenAI sitemaps, GitHub Trending HTML + Search API, Hacker News, Product Hunt, ArXiv, Hugging Face, Dev.to, Lobste.rs, FRED macro series, FINRA margin statistics, the Vietnam market board/bars, Vietnam macro series, and the Vietnam document sources. Every source has a `.catch()` fallback so one failure never aborts the run.
2. **`generateSummaries`** — per-repo LLM calls, all in parallel, rate-limited to 5 concurrent requests by a queue in `src/platform/llm/client.ts`. Runs once per language.
3. **Comparisons** — cross-tool CLI comparison and OpenClaw cross-ecosystem comparison (2 LLM calls per language).
4. **Save phase** — `buildCliReportContent` / `buildOpenclawReportContent` (in `src/platform/reports/builders/`) assemble Markdown strings; the `saveXxxReport` functions in `src/platform/reports/savers/` call the LLM + write the file + create the GitHub Issue for web, trending, hn, ph, arxiv, hf, and community reports.
5. **Highlights** — one LLM call per language produces `highlights.json` (a few bullet points per report) for the Telegram/Feishu notifications. `parseLlmJson` repairs common malformed-JSON defects; each language runs independently and backfills from the other if one fails.
6. **GitHub Issues** — CLI + OpenClaw issues are created (zh + en) when `DIGEST_REPO` is set.

Weekly/monthly rollups (`src/platform/reports/rollup.ts`, entrypoints `src/cli/weekly.ts` / `src/cli/monthly.ts`) are separate: they read already-committed daily digest files — **no GitHub API fetching** — and produce `ai-weekly.md` / `ai-monthly.md`, merging into the existing `highlights.json`.

## Source files

`src/` is grouped into four layers: `cli/` (entrypoints), `domains/` (data sources), `platform/` (LLM, prompts, reports, notifications) and `core/` (config, dates, i18n, document extraction).

### `src/cli/` — entrypoints (one per `package.json` script)

| File | Responsibility |
|------|---------------|
| `src/cli/daily.ts` | Daily-pipeline orchestration: phase functions, `main()` (`pnpm start`) |
| `src/cli/weekly.ts` / `src/cli/monthly.ts` | Thin entrypoints for the rollup functions |
| `src/cli/generate-manifest.ts` | Direct-run guard around `main()` from `platform/reports/manifest.ts` |
| `src/cli/notify-telegram.ts` | Reads `manifest.json` + `highlights.json`, then calls `buildMessage` / `sendTelegram` |
| `src/cli/notify-feishu.ts` | Reads `manifest.json` + `highlights.json`, then calls `buildFeishuMessage` / `sendFeishu` |
| `src/cli/close-stale-issues.ts` | Closes digest GitHub Issues older than `STALE_DAYS` (7) |
| `src/cli/social.ts` | Xiaohongshu / WeChat article generator (local-only, writes to `social/`) |

### `src/core/` — cross-cutting utilities

| File | Responsibility |
|------|---------------|
| `src/core/config.ts` | `loadConfig()` — loads tracked-repo config from `config.yml`, falls back to built-in defaults |
| `src/core/date.ts` | Date/timing utilities: `toCstDateStr`, `toUtcStr`, `sleep` |
| `src/core/doc-extract.ts` | Document extraction shared by the Vietnam doc sources: HTML → linkedom + Mozilla Readability (`extractArticle`, tag-strip fallback), PDF → per-page text (`extractPdfPages`), plus `rankPages` / `relevantExcerpt` keyword narrowing and `fetchWithTimeout` / `BROWSER_UA` |
| `src/core/i18n/index.ts` | Barrel — import bilingual strings from here (equivalent to the former `src/i18n.ts`) |
| `src/core/i18n/lang.ts` | `Lang` type, `ALL_LANGS`, `getLangs()`, the `t(zh, en)` helper |
| `src/core/i18n/reports.ts` | Report titles/headers (`CLI_REPORT` … `MONTHLY_REPORT`), `ISSUE_LABELS`, `CLI_ISSUE_TITLE`, `OPENCLAW_ISSUE_TITLE` |
| `src/core/i18n/labels.ts` | `REPORT_LABELS` (manifest/RSS) and `NOTIFY_LABELS` (notifications) |
| `src/core/i18n/messages.ts` | `MSG` status/error strings and `FOOTER` |

### `src/domains/` — data sources

| File | Responsibility |
|------|---------------|
| `src/domains/github/github.ts` | GitHub API helpers: `fetchRecentItems`, `fetchRecentReleases`, `fetchSkillsData`, `createGitHubIssue`, `ensureLabel`, `closeStaleIssues`; `RepoConfig` / `RepoFetch` types; `LABEL_COLORS` |
| `src/domains/ai/web.ts` | Sitemap-based web content fetching (anthropic.com + openai.com); state persisted to `digests/web-state.json` |
| `src/domains/ai/trending.ts` | GitHub Trending HTML scraper + Search API AI-topic queries |
| `src/domains/ai/hn.ts` | Hacker News top AI stories via the official Firebase API (scans topstories, filters AI keywords, top 30) |
| `src/domains/ai/ph.ts` | Product Hunt AI products via the GraphQL API (requires `PRODUCTHUNT_TOKEN`) |
| `src/domains/ai/arxiv.ts` | ArXiv papers via the Atom-feed API (cs.AI, cs.CL, cs.LG, last 48h) |
| `src/domains/ai/hf.ts` | Hugging Face trending models via the HF Hub API (sorted by weekly likes) |
| `src/domains/ai/devto.ts` | Dev.to AI articles via the Forem API |
| `src/domains/ai/lobsters.ts` | Lobste.rs AI stories via tag-based JSON endpoints |
| `src/domains/finance/fred.ts` | Macro indicators from FRED (Federal Reserve Economic Data): 16 series (rates, balance sheet, VIX, yields, credit spread, oil, jobs, inflation, sentiment). JSON API when `FRED_API_KEY` is set, keyless CSV fallback otherwise |
| `src/domains/finance/finra.ts` | FINRA margin statistics (retail leverage) — defensive HTML scrape; `fetchSuccess:false` on any parse miss |
| `src/domains/vietnam/vnmarket.ts` | Vietnam equity-market internals: SSI iBoard HOSE+HNX board (breadth, turnover, foreign flow) + DNSE Entrade bars (VN-Index/VN30 levels, VN30F1M basis) |
| `src/domains/vietnam/vnmacro.ts` | Vietnam macro indicators: Vietcombank USD/VND board, Yahoo Finance global drivers (DXY, US 10Y, gold, Brent, HRC, VNM ETF), World Bank annual series |
| `src/domains/vietnam/vndocs.ts` | Vietnam document sources via `doc-extract`: NSO CPI + monthly socio-economic articles (HTML) and the VBMA weekly bond bulletin (PDF) |

### `src/platform/llm/` — LLM invocation

| File | Responsibility |
|------|---------------|
| `src/platform/llm/client.ts` | `callLlm` (concurrency limiter + 429/timeout/overload retry), `parseLlmJson`, LLM token budget constants |
| `src/platform/llm/providers/types.ts` | `LlmProvider` interface, `ProviderFactory` type |
| `src/platform/llm/providers/index.ts` | `createProvider` factory + `PROVIDERS` registry + `VALID_PROVIDER_NAMES`; barrel re-exports |
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
| `src/platform/prompts/rollup.ts` | `buildWeeklyPrompt`, `buildMonthlyPrompt` |
| `src/platform/prompts/highlights.ts` | `buildHighlightsPrompt`; `ReportHighlights` type |

### `src/platform/reports/` — report assembly and output

| File | Responsibility |
|------|---------------|
| `src/platform/reports/index.ts` | Barrel — re-exports the builders and savers below |
| `src/platform/reports/files.ts` | `saveFile`, `autoGenFooter` |
| `src/platform/reports/builders/cli.ts` | `buildCliReportContent` — assembles the CLI Markdown |
| `src/platform/reports/builders/openclaw.ts` | `buildOpenclawReportContent` — assembles the OpenClaw Markdown |
| `src/platform/reports/savers/*.ts` | `saveWebReport`, `saveTrendingReport`, `saveHnReport`, `savePhReport`, `saveArxivReport`, `saveHfReport`, `saveCommunityReport`, `saveMacroReport`, `saveVnMacroReport` — LLM call + file save + optional GitHub issue, one file per report |
| `src/platform/reports/rollup.ts` | `runWeeklyRollup`, `runMonthlyRollup`, `toWeekStr` — rollup generators (read daily digests, no API calls) |
| `src/platform/reports/manifest.ts` | Generates `manifest.json` (Web UI sidebar) and `feed.xml` (RSS 2.0); `REPORT_FILES` lists all report IDs |

### `src/platform/notify/` — notification transports

| File | Responsibility |
|------|---------------|
| `src/platform/notify/telegram.ts` | Telegram message building + delivery; exports `buildMessage`, `sendTelegram`, `Highlights` |
| `src/platform/notify/feishu.ts` | Feishu (Lark) card message building + delivery; exports `buildFeishuMessage`, `sendFeishu`, `getWebhookUrls` |

Vitest unit tests live in `src/__tests__/`.

Outside `src/`:

| Path | Responsibility |
|------|---------------|
| `mcp/` | Standalone Cloudflare Worker MCP server (own `package.json` / `pnpm-lock.yaml` / `wrangler.toml`). Not part of the daily pipeline and not built by the root package — see **MCP server** below |
| `scripts/regen-highlights.ts` | One-off recovery script: re-runs the highlights LLM call against digests already on disk (optionally `--notify` to resend Telegram). Imports from `src/`, so it is typechecked but not linted as pipeline code |
| `index.html` | Single-file static Web UI (no build step) |
| `config.yml` | Tracked-repo configuration consumed by `src/core/config.ts` |
| `.agent/`, `.agile/`, `social/` | **Git-ignored** local working directories (agent orchestration prompts/specs, agile docs, generated social posts). Anything referenced there — e.g. `.agent/specs/financial_data_sources.md` — exists only on the author's machine; do not assume a checkout has it |

`@mozilla/readability`, `linkedom`, and `pdfjs-dist` are declared in `package.json` but not yet imported anywhere in `src/` — they were installed for planned article/PDF content extraction. Don't treat them as dead deps to prune without checking with the author.

## MCP server

`mcp/` is a self-contained Cloudflare Worker that serves the published digests over MCP (deployed at `agents-radar-mcp.duanyytop.workers.dev`; setup instructions live in `README.md`). It has its own dependencies and is deployed separately with `cd mcp && pnpm install && wrangler deploy` (invoke `wrangler` directly — `pnpm deploy` is a reserved pnpm builtin and will not run the script); the root `pnpm test` / `pnpm typecheck` / `ci.yml` do **not** cover it — run `pnpm typecheck` inside `mcp/`.

- It reads published artifacts over HTTP from `PAGES_URL` (`manifest.json` + `digests/**.md`) with Cloudflare edge caching — it never touches the GitHub API or shares code with `src/`.
- Tools: `list_reports`, `get_report`, `get_latest`, `search`. Transport is hand-rolled JSON-RPC (`initialize` / `tools/list` / `tools/call`) — no MCP SDK dependency.
- It keeps its **own copy** of `REPORT_LABELS`. That copy is currently stale (missing `ai-ph`, `ai-arxiv`, `ai-hf`, `ai-community`, `fin-macro` and their `-en` variants); unknown IDs fall back to the raw report ID, so reports still resolve — only the human label is missing.

## Report outputs

Daily files written to `digests/YYYY-MM-DD/` (each also has a `-en` variant, e.g. `ai-cli-en.md`):

| File | Label | Notes |
|------|-------|-------|
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
| `fin-vnmacro.md` | `vnmacro` | Vietnam macro market dashboard (SSI + Entrade + Vietcombank + Yahoo + World Bank + NSO + VBMA); skipped if Vietnam market data fails. Documents and macro series are supplementary |
| `highlights.json` | — | Bullet-point highlights per report (zh + en), consumed by notifications |

Rollup files (separate cron jobs): `ai-weekly.md` (label `weekly`) and `ai-monthly.md` (label `monthly`), plus `-en` variants.

## Tracked sources

Tracked repos are configured in `config.yml` (loaded by `src/core/config.ts`, which falls back to built-in defaults if the file/section is missing).

- **cli_repos** (10): claude-code, codex, gemini-cli, copilot-cli, kimi-cli, opencode, pi, qwen-code, deepseek-tui, grok-build
- **openclaw** + **openclaw_peers** (12 total): openclaw/openclaw + 11 peer projects
- **skills_repo**: anthropics/skills — no date filter, sorted by popularity
- **Web**: anthropic.com + openai.com via sitemap, state in `digests/web-state.json`
- **Trending**: github.com/trending (HTML) + GitHub Search API AI-topic queries
- **HN**: Hacker News Firebase API — scans topstories, filters for AI keywords, keeps top 30
- **Product Hunt**: GraphQL API — yesterday's top products, filtered to AI topics (requires `PRODUCTHUNT_TOKEN`)
- **ArXiv**: Atom-feed API — cs.AI + cs.CL + cs.LG, newest first, last 48h
- **Hugging Face**: HF Hub API — trending models by weekly likes
- **Community**: Dev.to (Forem API) + Lobste.rs (tag JSON endpoints)
- **FRED** (macro): Federal Reserve Economic Data — 16 series (`DFF`, `WALCL`, `VIXCLS`, `DGS10`, `T10Y2Y`, `BAMLH0A0HYM2`, `DCOILWTICO`, `DCOILBRENTEU`, `UNRATE`, `ICSA`, `PAYEMS`, `CPIAUCSL`, `CPILFESL`, `PCEPILFE`, `PPIFIS`, `UMCSENT`). Official + free; JSON API needs `FRED_API_KEY`, else keyless CSV. Series catalog + design notes in `.agent/specs/financial_data_sources.md` (git-ignored, local-only)
- **FINRA** (retail leverage): monthly margin-debt statistics, scraped from finra.org (no official API)
- **Vietnam market** (`domains/vietnam/vnmarket.ts`): SSI iBoard `stock/exchange/{hose,hnx}` price board + DNSE Entrade `chart-api/v2/ohlcs/{index,derivative}` for VNINDEX / VN30 / VN30F1M. Both are undocumented internal endpoints and need a browser User-Agent
- **Vietnam macro** (`domains/vietnam/vnmacro.ts`): Vietcombank `/api/exchangerates?date=` (USD/VND), Yahoo Finance chart API (`DX-Y.NYB`, `^TNX`, `GC=F`, `BZ=F`, `HRC=F`, `VNM`), World Bank (`FP.CPI.TOTL.ZG`, `NY.GDP.MKTP.KD.ZG`, `BX.KLT.DINV.CD.WD`, `FI.RES.TOTL.CD`)
- **Vietnam documents** (`domains/vietnam/vndocs.ts`): NSO CPI + monthly socio-economic report (HTML), VBMA weekly bond bulletin (PDF). Source catalogue and endpoint survey in `.agent/specs/vn_financial_data_sources.md`

## Key conventions

- All bilingual strings (titles, labels, footers, messages) are centralized in `src/core/i18n/` (import from the `src/core/i18n/index.ts` barrel). Use the `Lang` type (`"zh" | "en"`) and the `t(zh, en)` / `Record<Lang, string>` maps. Do not add inline bilingual ternaries elsewhere.
- Which languages are generated is controlled centrally by `getLangs()` in `src/core/i18n/lang.ts`, driven by the `DIGEST_LANGS` env var (comma-separated; default = all). `main()` in `src/cli/daily.ts` and the rollups in `src/platform/reports/rollup.ts` loop over `getLangs()` — do not hard-code `["zh", "en"]`. Production workflows set `DIGEST_LANGS: en`. The weekly/monthly GitHub issue title and label are Chinese-only, so the issue body prefers zh content and falls back to the first configured language. `notify/telegram.ts` / `notify/feishu.ts` derive report IDs by stripping the `-en` suffix, so notifications render correctly with any language subset.
- LLM prompt builders live in `src/platform/prompts/`, one module per report type (`repos.ts` for the repo-level builders, `trending.ts` / `hn.ts` / `macro.ts` / … for the data sources, `rollup.ts` and `highlights.ts` for the rest). Import them through the `src/platform/prompts/index.ts` barrel. Each report type has its own builder function.
- `callLlm(prompt, maxTokens?)` defaults to 4096 tokens. Web uses 8192, trending uses 6144, rollups use 8192, the table-formatted listing reports (HN, PH, ArXiv, HF, Community) use `LLM_TOKENS_LISTING` = 6144, and the Vietnam dashboard uses `LLM_TOKENS_VNMACRO` = 8192 (it truncates at 6144). Token constants live in `src/platform/llm/client.ts`.
- Data-source listing reports (Trending, HN, PH, ArXiv, HF, Community) render item lists as **Markdown tables** (not bullet lists). Numeric columns are copied verbatim from the fetched data; the summary column is 2 sentences. Tables have CSS in `index.html` and render natively in GitHub Issues.
- On transient errors — 429 rate limits (`is429`), request timeouts / dropped connections (`isTimeout`), and server-side overload (`isOverloaded`: 502/503/529 plus `ResourceExhausted` / "request limit reached" / "overloaded" wording, since gateways often report saturation as a 5xx rather than a 429) — `callLlm` retries up to 3 times. Every wait is floored at `RETRY_MIN_MS` = 60 s and grows exponentially from it (60 s / 120 s / 240 s), honours a longer `Retry-After` header, and is capped at 5 min. The concurrency slot is released during the wait. Sub-minute backoffs just burn an attempt on a per-minute quota that has not refilled.
- The SDK clients are built with `maxRetries: 0` and an explicit `timeout` (`CLIENT_OPTIONS` in `src/platform/llm/providers/client-options.ts`, `LLM_TIMEOUT_MS` env var, default 10 min). The SDKs' own sub-10 s retry loops are disabled on purpose so `callLlm` is the single retry policy — do not re-enable them per provider.
- The concurrency limiter (`LLM_CONCURRENCY`, default 5, overridable via the `LLM_CONCURRENCY` env var) prevents 429s when many parallel LLM calls fire. Do not bypass it by calling SDK clients directly.
- LLM provider is selected via `LLM_PROVIDER` (code default: `anthropic`; production workflows set `deepseek`). Add providers only in the `PROVIDERS` registry in `src/platform/llm/providers/index.ts`; `ProviderName` and `VALID_PROVIDER_NAMES` are derived from it. The factory logs only the provider *name* — never API keys or endpoint URLs.
- LLM JSON output (e.g. `highlights.json`) must be parsed with `parseLlmJson` from `src/platform/llm/client.ts` — it strips code fences, replaces raw control chars, and repairs trailing commas / prose wrappers.
- GitHub issue label colors are defined in `LABEL_COLORS` in `src/domains/github/github.ts`. Add new labels there.
- Issue creation always goes through `tryCreateGitHubIssue` (`src/domains/github/github.ts`), which logs and returns `null` on failure. Never call `createGitHubIssue` directly from the pipeline: the reports are already on disk by then, and a throw exits non-zero, which skips the workflow's "Commit digest files" step and discards the whole day's digest. A 404 from the labels/issues endpoints means Issues are disabled on the repo (the default for forks) or the token lacks Issues write access.
- `sampleNote(total, sampled, lang)` in `src/platform/prompts/shared.ts` formats the "(共 N 条，展示前 M 条)" note. Reuse it — do not inline the string format.
- Document sources (Vietnam NSO/VBMA) go through `src/core/doc-extract.ts`, never a bespoke parser. HTML uses linkedom + Mozilla Readability — linkedom, not jsdom, because this is a batch job that parses a few pages per run. `extractArticle` strips nav/header/footer/aside **before** parsing (Readability otherwise scores NSO's mega-menu above the article body) and falls back to a tag-strip when the result is missing or under `MIN_ARTICLE_CHARS` (200). PDFs are extracted per page so `rankPages` can keep only the pages that score on macro keywords — a 13-page VBMA bulletin reduces to 4. Never send a whole document to the LLM; narrow it with `relevantExcerpt` / `rankPages` first.
- Vietnam endpoints are undocumented internal APIs and need `BROWSER_UA` (a desktop Chrome User-Agent) plus a `Referer`; a bare fetch gets 403 or an empty body. TCBS (`apipubaws.tcbs.com.vn`) is behind a Cloudflare challenge and VNDirect (`finfo-api.vndirect.com.vn`) times out, so **aggregate VN-Index P/E and market-wide margin debt have no source** — `buildVnMacroPrompt` instructs the model to mark the signals that depend on them ❔ insufficient data rather than guess.
- SSI board turnover (`nmTotalTradedValue`) is order-matched only, while `buyForeignValue` / `sellForeignValue` include put-through (block) deals. One ticker's foreign flow can therefore exceed its matched turnover. Both definitions are stated in the prompt; don't "fix" the discrepancy.
- Web state (`digests/web-state.json`) is committed to git on every run and is the source of truth for which URLs have been seen. It is saved by the `zh` pass only in `saveWebReport`.

## Notifications & social

- `cli/notify-telegram.ts` and `cli/notify-feishu.ts` both read the latest `manifest.json` entry plus that day's `highlights.json`, then hand off to `platform/notify/telegram.ts` / `platform/notify/feishu.ts`, which build a bilingual link list with highlight sub-bullets. Both entrypoints skip silently if their secrets are unset and guard against sending when imported (only send when run directly); `buildMessage`/`buildFeishuMessage` stay exported for testing.
- Notification/report labels live in `NOTIFY_LABELS` (`src/core/i18n/labels.ts`), keyed by report ID.
- `cli/social.ts` is a **local-only** tool that turns recent digests into platform-specific articles (Xiaohongshu / WeChat) written to `social/`; it is not part of the automated pipeline.

## GitHub Actions workflows

- `.github/workflows/daily-digest.yml` — cron `0 0 * * *`: `pnpm start` → commit `digests/` → `pnpm manifest` → commit `manifest.json`+`feed.xml` → Telegram → Feishu → `pnpm close-stale`. Uses `LLM_PROVIDER: deepseek`.
- `.github/workflows/weekly-digest.yml` — cron `0 1 * * 1`: `pnpm weekly` → commit → manifest → Telegram.
- `.github/workflows/monthly-digest.yml` — cron `0 2 1 * *`: `pnpm monthly` → commit → manifest → Telegram.
- `.github/workflows/ci.yml` — on push/PR: lint, format check, typecheck, test.

## Web UI & RSS Feed

- Web UI: `index.html` reads `manifest.json` to build the sidebar, then fetches `digests/YYYY-MM-DD/<report>.md` on demand.
- RSS Feed: `feed.xml` at the repo root, generated by `src/platform/reports/manifest.ts` in the `pnpm manifest` step. Contains the latest 30 items (newest first) across all report types. Item links use hash routing: `https://duanyytop.github.io/agents-radar/#YYYY-MM-DD/<report>`.
- Both `manifest.json` and `feed.xml` are committed together in the "Commit manifest and feed" GHA step.
- The `REPORT_LABELS` map in `src/core/i18n/labels.ts` and `REPORT_FILES` in `src/platform/reports/manifest.ts` must be kept in sync with the `LABELS` object in `index.html` — and with the separate `REPORT_LABELS` copy in `mcp/src/index.ts` — when adding new report types. Four maps, four files; `REPORT_FILES` is the one that actually gates whether a report reaches `manifest.json` and `feed.xml`.

## Adding a new report type

1. Create a data fetcher (or add to an existing one) that returns `{ ...items, fetchSuccess }`.
2. Add a `buildXxxPrompt` module under `src/platform/prompts/` (one file per report) and re-export it from `src/platform/prompts/index.ts`.
3. Add bilingual strings (title, `ISSUE_LABELS` entry, issue-title function) to `src/core/i18n/reports.ts`.
4. Add a `saveXxxReport` module under `src/platform/reports/savers/` and re-export it from `src/platform/reports/index.ts`.
5. Wire into `fetchAllData`, `generateSummaries`, and the save phase in `src/cli/daily.ts`.
6. Add a label color entry in `LABEL_COLORS` in `src/domains/github/github.ts`.
7. Add the report ID/label to `REPORT_LABELS` and `NOTIFY_LABELS` in `src/core/i18n/labels.ts` and `LABELS` in `index.html`.
8. Add the report file name (and `-en` variant) to `REPORT_FILES` in `src/platform/reports/manifest.ts`.
9. Add the report ID to `REPORT_LABELS` in `mcp/src/index.ts` so MCP clients see a human label.
10. Update both README files and this file.
