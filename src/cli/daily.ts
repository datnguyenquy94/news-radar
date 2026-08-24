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
  type RepoFetch,
  type SkillsData,
  fetchAllRepoActivity,
  fetchSkills,
} from "../feeds/ai/repo-activity.ts";
import { tryCreateGitHubIssue } from "../platform/publish/github-issues.ts";
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
  saveVnRatesReport,
} from "../platform/reports/index.ts";
import { fetchSiteContent, type WebFetchResult, type WebState } from "../feeds/ai/web.ts";
import { loadWebState, saveWebState } from "../platform/state/web-state.ts";
import {
  loadTrendingState,
  recordTrendingReported,
  saveTrendingState,
} from "../platform/state/trending-state.ts";
import { fetchTrendingData, type TrendingData, type TrendingState } from "../feeds/ai/trending.ts";
import { fetchHnData, type HnData } from "../feeds/ai/hn.ts";
import { fetchPhData, type PhData } from "../feeds/ai/ph.ts";
import { fetchArxivData, type ArxivData } from "../feeds/ai/arxiv.ts";
import { fetchHfData, type HfData } from "../feeds/ai/hf.ts";
import { fetchCommunityData, type CommunityData } from "../feeds/ai/community.ts";
import { fetchMacroData, type MacroData } from "../feeds/finance/macro.ts";
import { fetchVnFeed, type VnFeedData } from "../feeds/finance/vn/index.ts";
import { fetchVnRatesData, type VnRatesData } from "../feeds/finance/vnrates.ts";
import { loadConfig } from "../core/config.ts";
import { createLogger } from "../core/logger.ts";
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

const log = createLogger("daily");

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

/**
 * Every network call for the run, in parallel.
 *
 * Each entry is one feed, and each feed owns its own degrade policy — a source
 * that fails returns a well-formed empty payload with `fetchSuccess: false`
 * rather than throwing, so one outage never aborts the digest.
 */
async function fetchAllData(
  since: Date,
  webState: WebState,
  trendingState: TrendingState,
): Promise<{
  fetched: RepoFetch[];
  skillsData: SkillsData;
  webResults: WebFetchResult[];
  trendingData: TrendingData;
  hnData: HnData;
  phData: PhData;
  arxivData: ArxivData;
  hfData: HfData;
  communityData: CommunityData;
  macroData: MacroData;
  vnData: VnFeedData;
  vnRatesData: VnRatesData;
}> {
  const allConfigs = [...CLI_REPOS, OPENCLAW, ...OPENCLAW_PEERS];
  log.info(
    `Tracking: ${allConfigs.map((r) => r.id).join(", ")}, claude-code-skills, web, trending, hn, ph, arxiv, hf, community, macro, vn, vnrates`,
  );

  const emptyWebResult = (site: "anthropic" | "openai", siteName: string) => (err: unknown) => {
    log.error({ site }, `web fetch failed: ${err}`);
    return { site, siteName, isFirstRun: false, newItems: [], totalDiscovered: 0 } as WebFetchResult;
  };

  const [
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    communityData,
    macroData,
    vnData,
    vnRatesData,
  ] = await Promise.all([
    fetchAllRepoActivity(allConfigs, since),
    fetchSkills(CLAUDE_SKILLS_REPO),
    Promise.all([
      fetchSiteContent("anthropic", webState).catch(emptyWebResult("anthropic", "Anthropic (Claude)")),
      fetchSiteContent("openai", webState).catch(emptyWebResult("openai", "OpenAI")),
    ]),
    fetchTrendingData(trendingState),
    fetchHnData(),
    fetchPhData(),
    fetchArxivData(),
    fetchHfData(),
    fetchCommunityData(),
    fetchMacroData(),
    fetchVnFeed(),
    fetchVnRatesData(),
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
    communityData,
    macroData,
    vnData,
    vnRatesData,
  };
}

// ---------------------------------------------------------------------------
// Phase 2: LLM summaries
// ---------------------------------------------------------------------------

/** Call LLM with logging and error fallback. */
async function summarize(id: string, prompt: string, failMsg: string, maxTokens?: number): Promise<string> {
  log.info({ report: id }, `[${id}] Calling LLM for summary...`);
  try {
    return await callLlm(prompt, maxTokens);
  } catch (err) {
    log.error({ report: id }, `[${id}] LLM call failed: ${err}`);
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
    log.info({ report: cfg.id }, `[${cfg.id}] No activity, skipping LLM call`);
    return { config: cfg, issues, prs, releases, summary: noActivityMsg };
  }
  const summary = await summarize(cfg.id, prompt, failMsg);
  return { config: cfg, issues, prs, releases, summary };
}

async function generateSummaries(
  fetchedCli: RepoFetch[],
  fetchedOpenclaw: RepoFetch,
  skillsData: SkillsData,
  fetchedPeers: RepoFetch[],
  trendingData: TrendingData,
  dateStr: string,
  lang: Lang = "vi",
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
        // Distinguish "the fetch died" from "the already-reported filter held
        // everything back" — the second is a quiet day, not an outage.
        const fetched = trendingData.suppressed.trending + trendingData.suppressed.search > 0;
        return fetched ? MSG.trendingNothingNew[lang] : MSG.trendingNoData[lang];
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
  log.info({ provider: providerName }, `Starting digest | provider: ${providerName}`);

  // 1. Fetch all data in parallel
  const webState = loadWebState();
  const trendingState = loadTrendingState();
  const {
    fetched,
    skillsData,
    webResults,
    trendingData,
    hnData,
    phData,
    arxivData,
    hfData,
    communityData,
    macroData,
    vnData,
    vnRatesData,
  } = await fetchAllData(since, webState, trendingState);

  const peerIds = new Set(OPENCLAW_PEERS.map((p) => p.id));
  const fetchedCli = fetched.filter((f) => f.cfg.id !== OPENCLAW.id && !peerIds.has(f.cfg.id));
  const fetchedOpenclaw = fetched.find((f) => f.cfg.id === OPENCLAW.id)!;
  const fetchedPeers = fetched.filter((f) => peerIds.has(f.cfg.id));

  const langs = getLangs();
  log.info(`Languages: ${langs.join(", ")}`);

  // 2. Generate per-repo LLM summaries in parallel (all configured languages)
  log.info(`Generating summaries (${langs.join(" + ")}) in parallel...`);
  type Summaries = Awaited<ReturnType<typeof generateSummaries>>;
  const summariesByLang = {} as Record<Lang, Summaries>;
  const summaryResults = await Promise.all(
    langs.map((lang) =>
      generateSummaries(fetchedCli, fetchedOpenclaw, skillsData, fetchedPeers, trendingData, dateStr, lang),
    ),
  );
  langs.forEach((lang, i) => (summariesByLang[lang] = summaryResults[i]!));

  // 3. Generate cross-repo comparisons in parallel (all configured languages)
  log.info("Calling LLM for comparative analyses...");
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

  // 4. Build + save all reports (vi + en)
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

    log.info(`Saved ${saveFile(cliContent[lang], dateStr, `ai-cli${suffix}.md`)}`);
    log.info(`Saved ${saveFile(openclawContent[lang], dateStr, `ai-agents${suffix}.md`)}`);
  }

  // Web report — generated per language; web-state is persisted once below,
  // independent of which languages run (the state is language-agnostic).
  for (const lang of langs) {
    await saveWebReport(webResults, utcStr, dateStr, digestRepo, autoGenFooter(lang), lang);
  }
  saveWebState(webState);
  log.info("[web] State saved.");

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
        saveCommunityReport(communityData, utcStr, dateStr, digestRepo, ft, lang),
        saveMacroReport(macroData, utcStr, dateStr, digestRepo, ft, lang),
        saveVnMacroReport(vnData, utcStr, dateStr, digestRepo, ft, lang),
        saveVnRatesReport(vnRatesData, utcStr, dateStr, digestRepo, ft, lang),
      ];
    }),
  );

  // Trending state — persisted only after the report is on disk, because the
  // recorded star count means "as of the run that last reported this repo".
  // Language-agnostic: every language reports the same repos, so record once.
  //
  // A failed LLM call still writes a report carrying the failure message, and
  // recording those repos would suppress them tomorrow — the content would be
  // lost for good. So advance the baseline only if some language actually
  // produced a summary.
  const trendingSummarised = langs.some(
    (lang) => summariesByLang[lang].trendingSummary !== MSG.trendingFailed[lang],
  );
  if (trendingData.reported.length === 0) {
    log.info("[trending] Nothing reported — state left unchanged.");
  } else if (!trendingSummarised) {
    log.warn("[trending] Summary failed in every language — state left unchanged so repos resurface.");
  } else {
    recordTrendingReported(trendingState, trendingData.reported, dateStr);
    saveTrendingState(trendingState);
    log.info(`[trending] State updated for ${trendingData.reported.length} repos.`);
  }

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
    "fin-vnrates",
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

  log.info("Generating highlights for Telegram...");
  // Generate + parse one language, retrying once. The LLM occasionally emits
  // slightly malformed JSON that repairJson can't fix (seen 2026-07-13: vi
  // failed with "Expected ',' or ']' after array element"); a fresh generation
  // usually returns valid JSON. Each language runs independently so a failure
  // in one never wipes the other.
  const genHighlights = async (reports: Record<string, string>, lang: Lang): Promise<ReportHighlights> => {
    for (let attempt = 1; attempt <= 2; attempt++) {
      try {
        return parseLlmJson<ReportHighlights>(await callLlm(buildHighlightsPrompt(reports, lang), 2048));
      } catch (err) {
        const tag = attempt < 2 ? "retrying" : "giving up";
        log.error({ lang, attempt }, `[highlights] ${lang} attempt ${attempt} failed (${tag}): ${err}`);
      }
    }
    return {};
  };
  const highlights = {} as Record<Lang, ReportHighlights>;
  const highlightResults = await Promise.all(langs.map((lang) => genHighlights(reportsByLang[lang], lang)));
  langs.forEach((lang, i) => (highlights[lang] = highlightResults[i]!));

  // If a language failed (generation or parse) but another succeeded, backfill
  // the empty one so notifications never render with zero highlights. Seen
  // 2026-07-13: vi failed intermittently while en was fine, leaving
  // Telegram/Feishu with only section headers and no bullets.
  const nonEmptyLang = langs.find((l) => Object.keys(highlights[l]).length > 0);
  if (nonEmptyLang) {
    for (const lang of langs) {
      if (Object.keys(highlights[lang]).length === 0) {
        log.warn({ lang }, `[highlights] ${lang} empty — backfilling from ${nonEmptyLang}`);
        highlights[lang] = highlights[nonEmptyLang];
      }
    }
  }

  const highlightsPath = saveFile(JSON.stringify(highlights, null, 2), dateStr, "highlights.json");
  log.info(`Saved ${highlightsPath}`);

  // 6. Create GitHub issues for CLI + OpenClaw (all configured languages)
  if (digestRepo) {
    for (const lang of langs) {
      const cliUrl = await tryCreateGitHubIssue(
        CLI_ISSUE_TITLE(dateStr, lang),
        cliContent[lang],
        ISSUE_LABELS.cli[lang],
      );
      if (cliUrl) log.info({ lang }, `Created CLI issue (${lang}): ${cliUrl}`);

      const ocUrl = await tryCreateGitHubIssue(
        OPENCLAW_ISSUE_TITLE(dateStr, lang),
        openclawContent[lang],
        ISSUE_LABELS.openclaw[lang],
      );
      if (ocUrl) log.info({ lang }, `Created OpenClaw issue (${lang}): ${ocUrl}`);
    }
  }

  log.info("Done!");
}

main().catch((err: unknown) => {
  log.fatal(`Digest run failed: ${err}`);
  process.exit(1);
});
