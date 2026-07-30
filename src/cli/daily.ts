/**
 * agents-radar: daily digest for AI CLI tools and OpenClaw.
 *
 * Env vars:
 *   LLM_PROVIDER        - "anthropic" | "openai" | "github-copilot" | "openrouter" (default: anthropic)
 *   GH_TOKEN            - GitHub token for API access and issue creation
 *   DIGEST_REPO         - owner/repo where digest issues are posted (optional)
 *
 * Provider-specific env vars — see src/platform/llm/providers/ for full list.
 */

// Load .env before any other import so module-level env reads see it — notably
// report.ts selects the LLM provider from process.env at import time. In CI
// there is no .env file, and dotenv never overrides variables already set in
// the environment, so GitHub Actions `env:` values always win.
import "dotenv/config";

import fs from "node:fs";
import path from "node:path";
import {
  type GitHubItem,
  type RepoFetch,
  fetchRecentItems,
  fetchRecentReleases,
  fetchSkillsData,
  tryCreateGitHubIssue,
} from "../domains/github/github.ts";
import {
  type RepoDigest,
  buildCliPrompt,
  buildPeerPrompt,
  buildComparisonPrompt,
  buildPeersComparisonPrompt,
  buildSkillsPrompt,
  buildTrendingPrompt,
  buildHighlightsPrompt,
  type ReportHighlights,
} from "../platform/prompts/index.ts";
import { callLlm, parseLlmJson, LLM_TOKENS_TRENDING } from "../platform/llm/client.ts";
import { saveFile, autoGenFooter } from "../platform/reports/files.ts";
import {
  buildCliReportContent,
  buildOpenclawReportContent,
  saveWebReport,
  saveTrendingReport,
  saveHnReport,
  savePhReport,
  saveArxivReport,
  saveHfReport,
  saveCommunityReport,
  saveMacroReport,
  saveVnMacroReport,
} from "../platform/reports/index.ts";
import {
  loadWebState,
  saveWebState,
  fetchSiteContent,
  type WebFetchResult,
  type WebState,
} from "../domains/ai/web.ts";
import { fetchTrendingData, type TrendingData } from "../domains/ai/trending.ts";
import { fetchHnData, type HnData } from "../domains/ai/hn.ts";
import { fetchPhData, type PhData } from "../domains/ai/ph.ts";
import { fetchArxivData, type ArxivData } from "../domains/ai/arxiv.ts";
import { fetchHfData, type HfData } from "../domains/ai/hf.ts";
import { fetchDevtoData, type DevtoData } from "../domains/ai/devto.ts";
import { fetchLobstersData, type LobstersData } from "../domains/ai/lobsters.ts";
import { fetchFredData, type FredData } from "../domains/finance/fred.ts";
import { fetchFinraMargin, type FinraData } from "../domains/finance/finra.ts";
import { fetchVnMarketData, type VnMarketData } from "../domains/vietnam/vnmarket.ts";
import { fetchVnMacroData, type VnMacroData } from "../domains/vietnam/vnmacro.ts";
import { fetchVnDocsData, type VnDocsData } from "../domains/vietnam/vndocs.ts";
import { loadConfig } from "../core/config.ts";
import { toCstDateStr, toUtcStr } from "../core/date.ts";
import {
  type Lang,
  getLangs,
  MSG,
  ISSUE_LABELS,
  CLI_ISSUE_TITLE,
  OPENCLAW_ISSUE_TITLE,
} from "../core/i18n/index.ts";

// ---------------------------------------------------------------------------
// Repo config — loaded from config.yml, falls back to built-in defaults
// ---------------------------------------------------------------------------

const {
  cliRepos: CLI_REPOS,
  skillsRepo: CLAUDE_SKILLS_REPO,
  openclaw: OPENCLAW,
  openclawPeers: OPENCLAW_PEERS,
} = loadConfig();

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required environment variable: ${name}`);
  return value;
}

// ---------------------------------------------------------------------------
// Phase 1: Fetch
// ---------------------------------------------------------------------------

async function fetchAllData(
  since: Date,
  webState: WebState,
): Promise<{
  fetched: RepoFetch[];
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] };
  webResults: WebFetchResult[];
  trendingData: TrendingData;
  hnData: HnData;
  phData: PhData;
  arxivData: ArxivData;
  hfData: HfData;
  devtoData: DevtoData;
  lobstersData: LobstersData;
  fredData: FredData;
  finraData: FinraData;
  vnMarketData: VnMarketData;
  vnMacroData: VnMacroData;
  vnDocsData: VnDocsData;
}> {
  const allConfigs = [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS];
  console.log(
    `  Tracking: ${allConfigs.map((r) => r.id).join(", ")}, claude-code-skills, web, hn, ph, arxiv, hf, devto, lobsters, fred, finra, vn-market, vn-macro, vn-docs`,
  );

  const [
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
    fredData,
    finraData,
    vnMarketData,
    vnMacroData,
    vnDocsData,
  ] = await Promise.all([
    Promise.all(
      allConfigs.map(async (cfg) => {
        try {
          const [issuesRaw, prs, releases] = await Promise.all([
            fetchRecentItems(cfg, "issues", since),
            fetchRecentItems(cfg, "pulls", since),
            fetchRecentReleases(cfg.repo, since),
          ]);
          const issues = issuesRaw.filter((i) => !i.pull_request);
          console.log(
            `  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`,
          );
          return { cfg, issues, prs, releases };
        } catch (err) {
          console.error(`  [${cfg.id}] fetch failed: ${err}`);
          return { cfg, issues: [], prs: [], releases: [] };
        }
      }),
    ),
    fetchSkillsData(CLAUDE_SKILLS_REPO)
      .then((d) => {
        console.log(`  [claude-code-skills] prs: ${d.prs.length}, issues: ${d.issues.length}`);
        return d;
      })
      .catch((err) => {
        console.error(`  [claude-code-skills] fetch failed: ${err}`);
        return { prs: [] as GitHubItem[], issues: [] as GitHubItem[] };
      }),
    Promise.all([
      fetchSiteContent("anthropic", webState).catch((err): WebFetchResult => {
        console.error(`  [web/anthropic] fetch failed: ${err}`);
        return {
          site: "anthropic",
          siteName: "Anthropic (Claude)",
          isFirstRun: false,
          newItems: [],
          totalDiscovered: 0,
        };
      }),
      fetchSiteContent("openai", webState).catch((err): WebFetchResult => {
        console.error(`  [web/openai] fetch failed: ${err}`);
        return { site: "openai", siteName: "OpenAI", isFirstRun: false, newItems: [], totalDiscovered: 0 };
      }),
    ]),
    fetchTrendingData().catch(
      (): TrendingData => ({
        trendingRepos: [],
        searchRepos: [],
        trendingFetchSuccess: false,
      }),
    ),
    fetchHnData().catch((): HnData => ({ stories: [], fetchSuccess: false })),
    fetchPhData().catch((): PhData => ({ products: [], fetchSuccess: false })),
    fetchArxivData().catch((): ArxivData => ({ papers: [], fetchSuccess: false })),
    fetchHfData().catch((): HfData => ({ models: [], fetchSuccess: false })),
    fetchDevtoData().catch((): DevtoData => ({ articles: [], fetchSuccess: false })),
    fetchLobstersData().catch((): LobstersData => ({ stories: [], fetchSuccess: false })),
    fetchFredData().catch((): FredData => ({ metrics: [], fetchSuccess: false })),
    fetchFinraMargin().catch(
      (): FinraData => ({ latest: null, prior: null, changePct: null, fetchSuccess: false }),
    ),
    fetchVnMarketData().catch(
      (): VnMarketData => ({
        indices: [],
        breadth: null,
        turnoverVndBn: null,
        foreign: null,
        futuresBasis: null,
        tradingDate: "",
        fetchSuccess: false,
      }),
    ),
    fetchVnMacroData().catch(
      (): VnMacroData => ({ fx: null, global: [], annual: [], gold: null, fetchSuccess: false }),
    ),
    fetchVnDocsData().catch((): VnDocsData => ({ docs: [], fetchSuccess: false })),
  ]);

  return {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
    fredData,
    finraData,
    vnMarketData,
    vnMacroData,
    vnDocsData,
  };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries
// ---------------------------------------------------------------------------

/** Call LLM with logging and error fallback. */
async function summarize(id: string, prompt: string, failMsg: string, maxTokens?: number): Promise<string> {
  console.log(`  [${id}] Calling LLM for summary...`);
  try {
    return await callLlm(prompt, maxTokens);
  } catch (err) {
    console.error(`  [${id}] LLM call failed: ${err}`);
    return failMsg;
  }
}

/** Summarize a repo's activity, returning a RepoDigest. Skips LLM if no data. */
async function summarizeRepo(
  { cfg, issues, prs, releases }: RepoFetch,
  prompt: string,
  noActivityMsg: string,
  failMsg: string,
): Promise<RepoDigest> {
  if (!issues.length && !prs.length && !releases.length) {
    console.log(`  [${cfg.id}] No activity, skipping LLM call`);
    return { config: cfg, issues, prs, releases, summary: noActivityMsg };
  }
  const summary = await summarize(cfg.id, prompt, failMsg);
  return { config: cfg, issues, prs, releases, summary };
}

async function generateSummaries(
  fetchedCli: RepoFetch[],
  fetchedOpenclaw: RepoFetch,
  skillsData: { prs: GitHubItem[]; issues: GitHubItem[] },
  fetchedPeers: RepoFetch[],
  trendingData: TrendingData,
  dateStr: string,
  lang: Lang = "zh",
): Promise<{
  cliDigests: RepoDigest[];
  openclawSummary: string;
  skillsSummary: string;
  peerDigests: RepoDigest[];
  trendingSummary: string;
}> {
  const noActivity = MSG.noActivity[lang];
  const fail = MSG.summaryFailed[lang];

  const [cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary] = await Promise.all([
    Promise.all(
      fetchedCli.map((f) =>
        summarizeRepo(f, buildCliPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, lang), noActivity, fail),
      ),
    ),
    summarizeRepo(
      fetchedOpenclaw,
      buildPeerPrompt(
        fetchedOpenclaw.cfg,
        fetchedOpenclaw.issues,
        fetchedOpenclaw.prs,
        fetchedOpenclaw.releases,
        dateStr,
        50,
        30,
        lang,
      ),
      noActivity,
      fail,
    ).then((d) => d.summary),
    summarize(
      "claude-code-skills",
      buildSkillsPrompt(skillsData.prs, skillsData.issues, dateStr, lang),
      MSG.skillsFailed[lang],
    ),
    Promise.all(
      fetchedPeers.map((f) =>
        summarizeRepo(
          f,
          buildPeerPrompt(f.cfg, f.issues, f.prs, f.releases, dateStr, undefined, undefined, lang),
          noActivity,
          fail,
        ),
      ),
    ),
    (async () => {
      const hasData = trendingData.trendingRepos.length > 0 || trendingData.searchRepos.length > 0;
      if (!hasData) {
        return MSG.trendingNoData[lang];
      }
      return summarize(
        "trending",
        buildTrendingPrompt(trendingData, dateStr, lang),
        MSG.trendingFailed[lang],
        LLM_TOKENS_TRENDING,
      );
    })(),
  ]);

  return { cliDigests, openclawSummary, skillsSummary, peerDigests, trendingSummary };
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(): Promise<void> {
  requireEnv("GH_TOKEN");

  const now = new Date();
  const since = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const dateStr = toCstDateStr(now);
  const utcStr = toUtcStr(now);
  const digestRepo = process.env["DIGEST_REPO"] ?? "";

  const providerName = process.env["LLM_PROVIDER"] ?? "anthropic";
  console.log(`[${now.toISOString()}] Starting digest | provider: ${providerName}`);

  // 1. Fetch all data in parallel
  const webState = loadWebState();
  const {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    devtoData,
    lobstersData,
    fredData,
    finraData,
    vnMarketData,
    vnMacroData,
    vnDocsData,
  } = await fetchAllData(since, webState);

  const peerIds = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const fetchedCli = fetched.filter((f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id));
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers = fetched.filter((f) => peerIds.has(f.cfg.id));

  const langs = getLangs();
  console.log(`  Languages: ${langs.join(", ")}`);

  // 2. Generate per-repo LLM summaries in parallel (all configured languages)
  console.log(`  Generating summaries (${langs.join(" + ")}) in parallel...`);
  type Summaries = Awaited<ReturnType<typeof generateSummaries>>;
  const summariesByLang = {} as Record<Lang, Summaries>;
  const summaryResults = await Promise.all(
    langs.map((lang) =>
      generateSummaries(fetchedCli, fetchedOpenclaw, skillsData, fetchedPeers, trendingData, dateStr, lang),
    ),
  );
  langs.forEach((lang, i) => (summariesByLang[lang] = summaryResults[i]!));

  // 3. Generate cross-repo comparisons in parallel (all configured languages)
  console.log("  Calling LLM for comparative analyses...");
  const makeOpenclawDigest = (lang: Lang): RepoDigest => ({
    config: OPENCLAW,
    issues: fetchedOpenclaw.issues,
    prs: fetchedOpenclaw.prs,
    releases: fetchedOpenclaw.releases,
    summary: summariesByLang[lang].openclawSummary,
  });

  const comparisonByLang = {} as Record<Lang, string>;
  const peersComparisonByLang = {} as Record<Lang, string>;
  await Promise.all(
    langs.map(async (lang) => {
      const s = summariesByLang[lang];
      const [comparison, peersComparison] = await Promise.all([
        callLlm(buildComparisonPrompt(s.cliDigests, dateStr, lang)),
        callLlm(buildPeersComparisonPrompt(makeOpenclawDigest(lang), s.peerDigests, dateStr, lang)),
      ]);
      comparisonByLang[lang] = comparison;
      peersComparisonByLang[lang] = peersComparison;
    }),
  );

  // 4. Build + save all reports (zh + en)
  const cliContent: Record<Lang, string> = {} as Record<Lang, string>;
  const openclawContent: Record<Lang, string> = {} as Record<Lang, string>;

  for (const lang of langs) {
    const s = summariesByLang[lang];
    const ft = autoGenFooter(lang);
    const suffix = lang === "en" ? "-en" : "";

    cliContent[lang] = buildCliReportContent(
      s.cliDigests,
      s.skillsSummary,
      comparisonByLang[lang],
      utcStr,
      dateStr,
      ft,
      CLAUDE_SKILLS_REPO,
      lang,
    );
    openclawContent[lang] = buildOpenclawReportContent(
      fetchedOpenclaw,
      s.peerDigests,
      s.openclawSummary,
      peersComparisonByLang[lang],
      utcStr,
      dateStr,
      ft,
      OPENCLAW,
      OPENCLAW_PEERS,
      lang,
    );

    console.log(`  Saved ${saveFile(cliContent[lang], dateStr, `ai-cli${suffix}.md`)}`);
    console.log(`  Saved ${saveFile(openclawContent[lang], dateStr, `ai-agents${suffix}.md`)}`);
  }

  // Web report — generated per language; web-state is persisted once below,
  // independent of which languages run (the state is language-agnostic).
  for (const lang of langs) {
    await saveWebReport(webResults, utcStr, dateStr, digestRepo, autoGenFooter(lang), lang);
  }
  saveWebState(webState);
  console.log("  [web] State saved.");

  await Promise.all(
    langs.flatMap((lang) => {
      const ft = autoGenFooter(lang);
      return [
        saveTrendingReport(
          trendingData,
          summariesByLang[lang].trendingSummary,
          utcStr,
          dateStr,
          digestRepo,
          ft,
          lang,
        ),
        saveHnReport(hnData, utcStr, dateStr, digestRepo, ft, lang),
        savePhReport(phData, utcStr, dateStr, digestRepo, ft, lang),
        saveArxivReport(arxivData, utcStr, dateStr, digestRepo, ft, lang),
        saveHfReport(hfData, utcStr, dateStr, digestRepo, ft, lang),
        saveCommunityReport(devtoData, lobstersData, utcStr, dateStr, digestRepo, ft, lang),
        saveMacroReport(fredData, finraData, utcStr, dateStr, digestRepo, ft, lang),
        saveVnMacroReport(vnMarketData, vnMacroData, vnDocsData, utcStr, dateStr, digestRepo, ft, lang),
      ];
    }),
  );

  // 5. Generate highlights for Telegram notification
  const readReport = (name: string): string | undefined => {
    const p = path.join("digests", dateStr, name);
    return fs.existsSync(p) ? fs.readFileSync(p, "utf-8") : undefined;
  };

  const EXTRA_REPORT_IDS = [
    "ai-trending",
    "ai-web",
    "ai-hn",
    "ai-ph",
    "ai-arxiv",
    "ai-hf",
    "ai-community",
    "fin-macro",
    "fin-vnmacro",
  ];
  const reportsByLang = {} as Record<Lang, Record<string, string>>;
  for (const lang of langs) {
    const suffix = lang === "en" ? "-en" : "";
    const reports: Record<string, string> = {
      "ai-cli": cliContent[lang],
      "ai-agents": openclawContent[lang],
    };
    for (const id of EXTRA_REPORT_IDS) {
      const content = readReport(`${id}${suffix}.md`);
      if (content) reports[id] = content;
    }
    reportsByLang[lang] = reports;
  }

  console.log("  Generating highlights for Telegram...");
  // Generate + parse one language, retrying once. The LLM occasionally emits
  // slightly malformed JSON that repairJson can't fix (seen 2026-07-13: zh
  // failed with "Expected ',' or ']' after array element"); a fresh generation
  // usually returns valid JSON. Each language runs independently so a failure
  // in one never wipes the other.
  const genHighlights = async (reports: Record<string, string>, lang: Lang): Promise<ReportHighlights> => {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        return parseLlmJson<ReportHighlights>(await callLlm(buildHighlightsPrompt(reports, lang), 2048));
      } catch (err) {
        const tag = attempt < 2 ? "retrying" : "giving up";
        console.error(`  [highlights] ${lang} attempt ${attempt} failed (${tag}): ${err}`);
      }
    }
    return {};
  };
  const highlights = {} as Record<Lang, ReportHighlights>;
  const highlightResults = await Promise.all(langs.map((lang) => genHighlights(reportsByLang[lang], lang)));
  langs.forEach((lang, i) => (highlights[lang] = highlightResults[i]!));

  // If a language failed (generation or parse) but another succeeded, backfill
  // the empty one so notifications never render with zero highlights. Seen
  // 2026-07-13: zh failed intermittently while en was fine, leaving
  // Telegram/Feishu with only section headers and no bullets.
  const nonEmptyLang = langs.find((l) => Object.keys(highlights[l]).length > 0);
  if (nonEmptyLang) {
    for (const lang of langs) {
      if (Object.keys(highlights[lang]).length === 0) {
        console.warn(`  [highlights] ${lang} empty — backfilling from ${nonEmptyLang}`);
        highlights[lang] = highlights[nonEmptyLang];
      }
    }
  }

  const highlightsPath = saveFile(JSON.stringify(highlights, null, 2), dateStr, "highlights.json");
  console.log(`  Saved ${highlightsPath}`);

  // 6. Create GitHub issues for CLI + OpenClaw (all configured languages)
  if (digestRepo) {
    for (const lang of langs) {
      const cliUrl = await tryCreateGitHubIssue(
        CLI_ISSUE_TITLE(dateStr, lang),
        cliContent[lang],
        ISSUE_LABELS.cli[lang],
      );
      if (cliUrl) console.log(`  Created CLI issue (${lang}): ${cliUrl}`);

      const ocUrl = await tryCreateGitHubIssue(
        OPENCLAW_ISSUE_TITLE(dateStr, lang),
        openclawContent[lang],
        ISSUE_LABELS.openclaw[lang],
      );
      if (ocUrl) console.log(`  Created OpenClaw issue (${lang}): ${ocUrl}`);
    }
  }

  console.log("Done!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
