# CLAUDE.md

## Project overview

agents-radar is a daily digest generator for the AI open-source ecosystem. A GitHub Actions cron job runs at 00:00 UTC (08:00 CST) and produces bilingual (Chinese + English) reports across many data sources (AI CLI tools, the OpenClaw agent ecosystem, official AI company sites, GitHub Trending, Hacker News, Product Hunt, ArXiv, Hugging Face, dev communities, and a macro-financial dashboard from FRED + FINRA). Reports are published as GitHub Issues, committed as Markdown files, surfaced through a static Web UI + RSS feed, and pushed to Telegram/Feishu. Two additional cron jobs generate weekly and monthly rollups.

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
```

Env vars for local runs:

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

The daily pipeline runs in sequential phases, each a named async function in `src/index.ts`. ZH and EN reports are generated **simultaneously** (both languages run in parallel at every phase).

1. **`fetchAllData`** — all network I/O in parallel: GitHub API (issues/PRs/releases) for the 22 tracked repos (10 CLI + OpenClaw + 11 peers), Claude Code Skills, Anthropic/OpenAI sitemaps, GitHub Trending HTML + Search API, Hacker News, Product Hunt, ArXiv, Hugging Face, Dev.to, Lobste.rs, FRED macro series, and FINRA margin statistics. Every source has a `.catch()` fallback so one failure never aborts the run.
2. **`generateSummaries`** — per-repo LLM calls, all in parallel, rate-limited to 5 concurrent requests by a queue in `src/report.ts`. Runs once per language.
3. **Comparisons** — cross-tool CLI comparison and OpenClaw cross-ecosystem comparison (2 LLM calls per language).
4. **Save phase** — `buildCliReportContent` / `buildOpenclawReportContent` (in `src/report-builders.ts`) assemble Markdown strings; the `saveXxxReport` functions in `src/report-savers.ts` call the LLM + write the file + create the GitHub Issue for web, trending, hn, ph, arxiv, hf, and community reports.
5. **Highlights** — one LLM call per language produces `highlights.json` (a few bullet points per report) for the Telegram/Feishu notifications. `parseLlmJson` repairs common malformed-JSON defects; each language runs independently and backfills from the other if one fails.
6. **GitHub Issues** — CLI + OpenClaw issues are created (zh + en) when `DIGEST_REPO` is set.

Weekly/monthly rollups (`src/rollup.ts`, entrypoints `src/weekly.ts` / `src/monthly.ts`) are separate: they read already-committed daily digest files — **no GitHub API fetching** — and produce `ai-weekly.md` / `ai-monthly.md`, merging into the existing `highlights.json`.

## Source files

| File | Responsibility |
|------|---------------|
| `src/index.ts` | Daily-pipeline orchestration: phase functions, `main()` |
| `src/config.ts` | `loadConfig()` — loads tracked-repo config from `config.yml`, falls back to built-in defaults |
| `src/i18n.ts` | Centralized bilingual strings: `Lang` type, report titles, `ISSUE_LABELS`, `FOOTER`, `REPORT_LABELS`, `NOTIFY_LABELS`, `MSG` |
| `src/github.ts` | GitHub API helpers: `fetchRecentItems`, `fetchRecentReleases`, `fetchSkillsData`, `createGitHubIssue`, `ensureLabel`, `closeStaleIssues`; `RepoConfig` / `RepoFetch` types; `LABEL_COLORS` |
| `src/prompts.ts` | Repo-level LLM prompt builders: `buildCliPrompt`, `buildPeerPrompt`, `buildComparisonPrompt`, `buildPeersComparisonPrompt`, `buildSkillsPrompt`; helpers `formatItem`, `topN`, `sampleNote` |
| `src/prompts-data.ts` | Data-source + rollup prompt builders: `buildTrendingPrompt`, `buildWebReportPrompt`, `buildHnPrompt`, `buildPhPrompt`, `buildArxivPrompt`, `buildHfPrompt`, `buildCommunityPrompt`, `buildMacroPrompt`, `buildWeeklyPrompt`, `buildMonthlyPrompt`, `buildHighlightsPrompt`; `ReportHighlights` type |
| `src/report.ts` | `callLlm` (concurrency limiter + 429 retry), `parseLlmJson`, `saveFile`, `autoGenFooter`, LLM token budget constants |
| `src/report-builders.ts` | `buildCliReportContent`, `buildOpenclawReportContent` — assemble CLI and OpenClaw Markdown |
| `src/report-savers.ts` | `saveWebReport`, `saveTrendingReport`, `saveHnReport`, `savePhReport`, `saveArxivReport`, `saveHfReport`, `saveCommunityReport`, `saveMacroReport` — LLM call + file save + optional GitHub issue |
| `src/rollup.ts` | `runWeeklyRollup`, `runMonthlyRollup`, `toWeekStr` — rollup generators (read daily digests, no API calls) |
| `src/weekly.ts` / `src/monthly.ts` | Thin entrypoints for the rollup functions |
| `src/date.ts` | Date/timing utilities: `toCstDateStr`, `toUtcStr`, `sleep` |
| `src/web.ts` | Sitemap-based web content fetching (anthropic.com + openai.com); state persisted to `digests/web-state.json` |
| `src/trending.ts` | GitHub Trending HTML scraper + Search API AI-topic queries |
| `src/hn.ts` | Hacker News top AI stories via the official Firebase API (scans topstories, filters AI keywords, top 30) |
| `src/ph.ts` | Product Hunt AI products via the GraphQL API (requires `PRODUCTHUNT_TOKEN`) |
| `src/arxiv.ts` | ArXiv papers via the Atom-feed API (cs.AI, cs.CL, cs.LG, last 48h) |
| `src/hf.ts` | Hugging Face trending models via the HF Hub API (sorted by weekly likes) |
| `src/fred.ts` | Macro indicators from FRED (Federal Reserve Economic Data): 16 series (rates, balance sheet, VIX, yields, credit spread, oil, jobs, inflation, sentiment). JSON API when `FRED_API_KEY` is set, keyless CSV fallback otherwise |
| `src/finra.ts` | FINRA margin statistics (retail leverage) — defensive HTML scrape; `fetchSuccess:false` on any parse miss |
| `src/devto.ts` | Dev.to AI articles via the Forem API |
| `src/lobsters.ts` | Lobste.rs AI stories via tag-based JSON endpoints |
| `src/notify.ts` | Telegram notification (reads `manifest.json` + `highlights.json`); exports `buildMessage`, `Highlights` |
| `src/feishu.ts` | Feishu (Lark) card notification; exports `buildFeishuMessage` |
| `src/social.ts` | Xiaohongshu / WeChat article generator (local-only, writes to `social/`) |
| `src/close-stale-issues.ts` | Closes digest GitHub Issues older than `STALE_DAYS` (7) |
| `src/generate-manifest.ts` | Generates `manifest.json` (Web UI sidebar) and `feed.xml` (RSS 2.0); `REPORT_FILES` lists all report IDs |
| `src/providers/types.ts` | `LlmProvider` interface, `ProviderFactory` type |
| `src/providers/index.ts` | `createProvider` factory + `PROVIDERS` registry + `VALID_PROVIDER_NAMES`; barrel re-exports |
| `src/providers/client-options.ts` | `CLIENT_OPTIONS` / `LLM_TIMEOUT_MS` — shared SDK client timeout; disables the SDKs' built-in retry loops so `callLlm` owns retry policy |
| `src/providers/openai-compatible.ts` | `OpenAICompatibleProvider` — shared base for OpenAI-compatible providers |
| `src/providers/anthropic.ts` | `AnthropicProvider` — Anthropic SDK wrapper |
| `src/providers/{openai,github-copilot,openrouter,deepseek}.ts` | Providers extending `OpenAICompatibleProvider` |
| `src/__tests__/` | Vitest unit tests |

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
| `highlights.json` | — | Bullet-point highlights per report (zh + en), consumed by notifications |

Rollup files (separate cron jobs): `ai-weekly.md` (label `weekly`) and `ai-monthly.md` (label `monthly`), plus `-en` variants.

## Tracked sources

Tracked repos are configured in `config.yml` (loaded by `src/config.ts`, which falls back to built-in defaults if the file/section is missing).

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
- **FRED** (macro): Federal Reserve Economic Data — 16 series (`DFF`, `WALCL`, `VIXCLS`, `DGS10`, `T10Y2Y`, `BAMLH0A0HYM2`, `DCOILWTICO`, `DCOILBRENTEU`, `UNRATE`, `ICSA`, `PAYEMS`, `CPIAUCSL`, `CPILFESL`, `PCEPILFE`, `PPIFIS`, `UMCSENT`). Official + free; JSON API needs `FRED_API_KEY`, else keyless CSV. Series catalog + design notes in `.agent/specs/financial_data_sources.md`
- **FINRA** (retail leverage): monthly margin-debt statistics, scraped from finra.org (no official API)

## Key conventions

- All bilingual strings (titles, labels, footers, messages) are centralized in `src/i18n.ts`. Use the `Lang` type (`"zh" | "en"`) and the `t(zh, en)` / `Record<Lang, string>` maps. Do not add inline bilingual ternaries elsewhere.
- Which languages are generated is controlled centrally by `getLangs()` in `src/i18n.ts`, driven by the `DIGEST_LANGS` env var (comma-separated; default = all). `main()` in `src/index.ts` and the rollups in `src/rollup.ts` loop over `getLangs()` — do not hard-code `["zh", "en"]`. Production workflows set `DIGEST_LANGS: en`. The weekly/monthly GitHub issue title and label are Chinese-only, so the issue body prefers zh content and falls back to the first configured language. `notify.ts`/`feishu.ts` derive report IDs by stripping the `-en` suffix, so notifications render correctly with any language subset.
- LLM prompt builders are split: `src/prompts.ts` (repo-level) and `src/prompts-data.ts` (data-source + rollup + highlights). Each report type has its own builder function.
- `callLlm(prompt, maxTokens?)` defaults to 4096 tokens. Web uses 8192, trending uses 6144, rollups use 8192, and the table-formatted listing reports (HN, PH, ArXiv, HF, Community) use `LLM_TOKENS_LISTING` = 6144. Token constants live in `src/report.ts`.
- Data-source listing reports (Trending, HN, PH, ArXiv, HF, Community) render item lists as **Markdown tables** (not bullet lists). Numeric columns are copied verbatim from the fetched data; the summary column is 2 sentences. Tables have CSS in `index.html` and render natively in GitHub Issues.
- On transient errors — 429 rate limits (`is429`) **and** request timeouts / dropped connections (`isTimeout`) — `callLlm` retries up to 3 times. Every wait is floored at `RETRY_MIN_MS` = 60 s and grows exponentially from it (60 s / 120 s / 240 s), honours a longer `Retry-After` header, and is capped at 5 min. The concurrency slot is released during the wait. Sub-minute backoffs just burn an attempt on a per-minute quota that has not refilled.
- The SDK clients are built with `maxRetries: 0` and an explicit `timeout` (`CLIENT_OPTIONS` in `src/providers/client-options.ts`, `LLM_TIMEOUT_MS` env var, default 10 min). The SDKs' own sub-10 s retry loops are disabled on purpose so `callLlm` is the single retry policy — do not re-enable them per provider.
- The concurrency limiter (`LLM_CONCURRENCY`, default 5, overridable via the `LLM_CONCURRENCY` env var) prevents 429s when many parallel LLM calls fire. Do not bypass it by calling SDK clients directly.
- LLM provider is selected via `LLM_PROVIDER` (code default: `anthropic`; production workflows set `deepseek`). Add providers only in the `PROVIDERS` registry in `src/providers/index.ts`; `ProviderName` and `VALID_PROVIDER_NAMES` are derived from it. The factory logs only the provider *name* — never API keys or endpoint URLs.
- LLM JSON output (e.g. `highlights.json`) must be parsed with `parseLlmJson` from `src/report.ts` — it strips code fences, replaces raw control chars, and repairs trailing commas / prose wrappers.
- GitHub issue label colors are defined in `LABEL_COLORS` in `src/github.ts`. Add new labels there.
- `sampleNote(total, sampled, lang)` in `src/prompts.ts` formats the "(共 N 条，展示前 M 条)" note. Reuse it — do not inline the string format.
- Web state (`digests/web-state.json`) is committed to git on every run and is the source of truth for which URLs have been seen. It is saved by the `zh` pass only in `saveWebReport`.

## Notifications & social

- `notify.ts` (Telegram) and `feishu.ts` (Feishu) both read the latest `manifest.json` entry plus that day's `highlights.json`, build a bilingual link list with highlight sub-bullets, and skip silently if their secrets are unset. Both export their `buildMessage`/`buildFeishuMessage` for testing and guard against sending when imported (only send when run directly).
- Notification/report labels live in `NOTIFY_LABELS` (`src/i18n.ts`), keyed by report ID.
- `social.ts` is a **local-only** tool that turns recent digests into platform-specific articles (Xiaohongshu / WeChat) written to `social/`; it is not part of the automated pipeline.

## GitHub Actions workflows

- `.github/workflows/daily-digest.yml` — cron `0 0 * * *`: `pnpm start` → commit `digests/` → `pnpm manifest` → commit `manifest.json`+`feed.xml` → Telegram → Feishu → `pnpm close-stale`. Uses `LLM_PROVIDER: deepseek`.
- `.github/workflows/weekly-digest.yml` — cron `0 1 * * 1`: `pnpm weekly` → commit → manifest → Telegram.
- `.github/workflows/monthly-digest.yml` — cron `0 2 1 * *`: `pnpm monthly` → commit → manifest → Telegram.
- `.github/workflows/ci.yml` — on push/PR: lint, format check, typecheck, test.

## Web UI & RSS Feed

- Web UI: `index.html` reads `manifest.json` to build the sidebar, then fetches `digests/YYYY-MM-DD/<report>.md` on demand.
- RSS Feed: `feed.xml` at the repo root, generated by `src/generate-manifest.ts` in the `pnpm manifest` step. Contains the latest 30 items (newest first) across all report types. Item links use hash routing: `https://duanyytop.github.io/agents-radar/#YYYY-MM-DD/<report>`.
- Both `manifest.json` and `feed.xml` are committed together in the "Commit manifest and feed" GHA step.
- The `REPORT_LABELS` map in `src/i18n.ts` and `REPORT_FILES` in `src/generate-manifest.ts` must be kept in sync with the `LABELS` object in `index.html` when adding new report types.

## Adding a new report type

1. Create a data fetcher (or add to an existing one) that returns `{ ...items, fetchSuccess }`.
2. Add a `buildXxxPrompt` function in `src/prompts-data.ts` (data-source) or `src/prompts.ts` (repo-level).
3. Add bilingual strings (title, `ISSUE_LABELS` entry, issue-title function) to `src/i18n.ts`.
4. Add a `saveXxxReport` function in `src/report-savers.ts`.
5. Wire into `fetchAllData`, `generateSummaries`, and the save phase in `src/index.ts`.
6. Add a label color entry in `LABEL_COLORS` in `src/github.ts`.
7. Add the report ID/label to `REPORT_LABELS` and `NOTIFY_LABELS` in `src/i18n.ts` and `LABELS` in `index.html`.
8. Add the report file name (and `-en` variant) to `REPORT_FILES` in `src/generate-manifest.ts`.
9. Update both README files and this file.
