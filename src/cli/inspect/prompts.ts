/**
 * Probes for the prompt builders in `src/platform/prompts/`.
 *
 * Each target prints the exact string that would be handed to `callLlm` —
 * nothing is sent. That is what makes a prompt change reviewable: the diff of
 * two runs against the same fixture is the diff the model would see.
 *
 * Source data comes from a live fetch by default, or from `--fixture <path>`.
 * The fixture format for every single-source builder is exactly the `--json`
 * output of the matching data-source probe, so a payload is captured with:
 *
 *   pnpm -s inspect hn --json > /tmp/hn.json
 *   pnpm -s inspect prompt:hn --fixture /tmp/hn.json
 *
 * Committed fixtures live in `src/cli/inspect/fixtures/`.
 */

import fs from "node:fs";
import path from "node:path";
import { Args, ProbeError, readJsonFile, requireEnv, type Target } from "./kit.ts";
// The prompt barrel is pure — no module-scope side effects — so unlike the
// fetchers it can be imported statically.
import * as builders from "../../platform/prompts/index.ts";
import type { Lang } from "../../core/i18n/index.ts";
import type { ArxivData } from "../../domains/ai/arxiv.ts";
import type { DevtoData } from "../../domains/ai/devto.ts";
import type { FinraData } from "../../domains/finance/finra.ts";
import type { FredData } from "../../domains/finance/fred.ts";
import type { HfData } from "../../domains/ai/hf.ts";
import type { HnData } from "../../domains/ai/hn.ts";
import type { LobstersData } from "../../domains/ai/lobsters.ts";
import type { PhData } from "../../domains/ai/ph.ts";
import type { TrendingData } from "../../domains/ai/trending.ts";
import type { WebFetchResult } from "../../domains/ai/web.ts";
import type { VnDocsData } from "../../domains/vietnam/vndocs.ts";
import type { VnMacroData } from "../../domains/vietnam/vnmacro.ts";
import type { VnMarketData } from "../../domains/vietnam/vnmarket.ts";

// ---------------------------------------------------------------------------
// Shared plumbing
// ---------------------------------------------------------------------------

const LANGS = ["zh", "en"] as const;
const isLang = (s: string): s is Lang => (LANGS as readonly string[]).includes(s);

function langOf(args: Args): Lang {
  const raw = args.str("lang") ?? "en";
  if (!isLang(raw)) throw new ProbeError(`--lang must be one of ${LANGS.join("|")}, got "${raw}"`);
  return raw;
}

async function dateOf(args: Args): Promise<string> {
  const raw = args.str("date");
  if (raw === undefined) {
    const { toCstDateStr } = await import("../../core/date.ts");
    return toCstDateStr(new Date());
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(raw)) throw new ProbeError(`--date must be YYYY-MM-DD, got "${raw}"`);
  return raw;
}

interface PromptSpec<P> {
  /** Target name without the `prompt:` prefix. */
  id: string;
  summary: string;
  /** What a `--fixture` file must contain. */
  fixture: string;
  env?: string[];
  /** Fetch the payload live. */
  live(): Promise<P>;
  build(payload: P, dateStr: string, lang: Lang): string;
}

const COMMON_OPTIONS = [
  { name: "lang", arg: "zh|en", desc: "prompt language (default en)" },
  { name: "date", arg: "YYYY-MM-DD", desc: "date string embedded in the prompt (default: today, CST)" },
];

function promptTarget<P>(spec: PromptSpec<P>): Target {
  return {
    name: `prompt:${spec.id}`,
    summary: spec.summary,
    options: [...COMMON_OPTIONS, { name: "fixture", arg: "path", desc: spec.fixture }],
    ...(spec.env ? { env: spec.env } : {}),
    async run(args) {
      const lang = langOf(args);
      const dateStr = await dateOf(args);
      const fixture = args.str("fixture");
      const payload = fixture ? await readJsonFile<P>(fixture) : await spec.live();
      const prompt = spec.build(payload, dateStr, lang);

      return {
        json: {
          target: `prompt:${spec.id}`,
          lang,
          dateStr,
          source: fixture ?? "live",
          chars: prompt.length,
          prompt,
        },
        lines: [
          `# prompt:${spec.id} lang=${lang} date=${dateStr} source=${fixture ?? "live"} chars=${prompt.length}`,
          "",
          prompt,
        ],
        ...(prompt.length === 0 ? { failure: "builder produced an empty prompt" } : {}),
      };
    },
  };
}

// ---------------------------------------------------------------------------
// Single-source builders
// ---------------------------------------------------------------------------

export const promptHnTarget = promptTarget<HnData>({
  id: "hn",
  summary: "buildHnPrompt() — the Hacker News prompt, printed not sent",
  fixture: "HnData JSON (`pnpm -s inspect hn --json`); fixtures/hn.json",
  live: async () => (await import("../../domains/ai/hn.ts")).fetchHnData(),
  build: (d, date, lang) => builders.buildHnPrompt(d, date, lang),
});

export const promptTrendingTarget = promptTarget<TrendingData>({
  id: "trending",
  summary: "buildTrendingPrompt() — the GitHub Trending prompt, printed not sent",
  fixture: "TrendingData JSON (`pnpm -s inspect trending --json`); fixtures/trending.json",
  live: async () => (await import("../../domains/ai/trending.ts")).fetchTrendingData(),
  build: (d, date, lang) => builders.buildTrendingPrompt(d, date, lang),
});

export const promptArxivTarget = promptTarget<ArxivData>({
  id: "arxiv",
  summary: "buildArxivPrompt() — the ArXiv prompt, printed not sent",
  fixture: "ArxivData JSON (`pnpm -s inspect arxiv --json`); fixtures/arxiv.json",
  live: async () => (await import("../../domains/ai/arxiv.ts")).fetchArxivData(),
  build: (d, date, lang) => builders.buildArxivPrompt(d, date, lang),
});

export const promptHfTarget = promptTarget<HfData>({
  id: "hf",
  summary: "buildHfPrompt() — the Hugging Face prompt, printed not sent",
  fixture: "HfData JSON (`pnpm -s inspect hf --json`); fixtures/hf.json",
  live: async () => (await import("../../domains/ai/hf.ts")).fetchHfData(),
  build: (d, date, lang) => builders.buildHfPrompt(d, date, lang),
});

export const promptPhTarget = promptTarget<PhData>({
  id: "ph",
  summary: "buildPhPrompt() — the Product Hunt prompt, printed not sent",
  fixture: "PhData JSON (`pnpm -s inspect ph --json`); fixtures/ph.json",
  env: ["PRODUCTHUNT_TOKEN (live mode only — --fixture needs no token)"],
  live: async () => {
    requireEnv("PRODUCTHUNT_TOKEN");
    return (await import("../../domains/ai/ph.ts")).fetchPhData();
  },
  build: (d, date, lang) => builders.buildPhPrompt(d, date, lang),
});

export const promptWebTarget = promptTarget<WebFetchResult[]>({
  id: "web",
  summary: "buildWebReportPrompt() — the anthropic/openai sitemap prompt (read-only fetch)",
  fixture: "WebFetchResult[] JSON (the `results` array of `pnpm -s inspect web --json`); fixtures/web.json",
  live: async () => {
    const { fetchSiteContent, loadWebState } = await import("../../domains/ai/web.ts");
    const state = loadWebState(); // never saved back — probes do not persist web-state
    return [await fetchSiteContent("anthropic", state), await fetchSiteContent("openai", state)];
  },
  build: (d, date, lang) => builders.buildWebReportPrompt(d, date, lang),
});

// ---------------------------------------------------------------------------
// Multi-source builders
// ---------------------------------------------------------------------------

interface CommunityPayload {
  devto: DevtoData;
  lobsters: LobstersData;
}

export const promptCommunityTarget = promptTarget<CommunityPayload>({
  id: "community",
  summary: "buildCommunityPrompt() — the Dev.to + Lobste.rs prompt, printed not sent",
  fixture: '{"devto":DevtoData,"lobsters":LobstersData}; fixtures/community.json',
  live: async () => {
    const [devto, lobsters] = await Promise.all([
      import("../../domains/ai/devto.ts").then((m) => m.fetchDevtoData()),
      import("../../domains/ai/lobsters.ts").then((m) => m.fetchLobstersData()),
    ]);
    return { devto, lobsters };
  },
  build: (p, date, lang) => builders.buildCommunityPrompt(p.devto, p.lobsters, date, lang),
});

interface MacroPayload {
  fred: FredData;
  finra: FinraData;
}

export const promptMacroTarget = promptTarget<MacroPayload>({
  id: "macro",
  summary: "buildMacroPrompt() — the FRED + FINRA dashboard prompt, printed not sent",
  fixture: '{"fred":FredData,"finra":FinraData}; fixtures/macro.json',
  live: async () => {
    const [fred, finra] = await Promise.all([
      import("../../domains/finance/fred.ts").then((m) => m.fetchFredData()),
      import("../../domains/finance/finra.ts").then((m) => m.fetchFinraMargin()),
    ]);
    return { fred, finra };
  },
  build: (p, date, lang) => builders.buildMacroPrompt(p.fred, p.finra, date, lang),
});

interface VnMacroPayload {
  market: VnMarketData;
  macro: VnMacroData;
  docs: VnDocsData;
}

export const promptVnMacroTarget = promptTarget<VnMacroPayload>({
  id: "vnmacro",
  summary: "buildVnMacroPrompt() — the Vietnam dashboard prompt, printed not sent",
  fixture: '{"market":VnMarketData,"macro":VnMacroData,"docs":VnDocsData}; fixtures/vnmacro.json',
  live: async () => {
    const [market, macro, docs] = await Promise.all([
      import("../../domains/vietnam/vnmarket.ts").then((m) => m.fetchVnMarketData()),
      import("../../domains/vietnam/vnmacro.ts").then((m) => m.fetchVnMacroData()),
      import("../../domains/vietnam/vndocs.ts").then((m) => m.fetchVnDocsData()),
    ]);
    return { market, macro, docs };
  },
  build: (p, date, lang) => builders.buildVnMacroPrompt(p.market, p.macro, p.docs, date, lang),
});

// ---------------------------------------------------------------------------
// Highlights — sourced from finished reports rather than a fetcher
// ---------------------------------------------------------------------------

/** Report markdown for one digest day, keyed by report ID. */
function readDigestDay(dateStr: string): Record<string, string> {
  const dir = path.join("digests", dateStr);
  if (!fs.existsSync(dir)) throw new ProbeError(`no digest directory at ${dir} — pass --date or --fixture`);
  const contents: Record<string, string> = {};
  for (const name of fs.readdirSync(dir).sort()) {
    if (!name.endsWith(".md")) continue;
    contents[name.replace(/\.md$/, "")] = fs.readFileSync(path.join(dir, name), "utf-8");
  }
  if (Object.keys(contents).length === 0) throw new ProbeError(`no .md reports in ${dir}`);
  return contents;
}

/** Most recent `digests/YYYY-MM-DD` directory that holds at least one report. */
function latestDigestDate(): string {
  const dates = fs
    .readdirSync("digests")
    .filter((n) => /^\d{4}-\d{2}-\d{2}$/.test(n))
    .sort()
    .reverse();
  for (const d of dates) {
    if (fs.readdirSync(path.join("digests", d)).some((f) => f.endsWith(".md"))) return d;
  }
  throw new ProbeError("no digest day with .md reports found under digests/");
}

export const promptHighlightsTarget: Target = {
  name: "prompt:highlights",
  summary: "buildHighlightsPrompt() — built from digests already on disk, printed not sent",
  options: [
    { name: "lang", arg: "zh|en", desc: "prompt language (default en)" },
    { name: "date", arg: "YYYY-MM-DD", desc: "digest day to read (default: latest day under digests/)" },
    { name: "items", arg: "n", desc: "highlights requested per report (default 6)" },
    { name: "fixture", arg: "path", desc: 'JSON map {"report-id": "markdown"}; fixtures/highlights.json' },
  ],
  async run(args) {
    const lang = langOf(args);
    const items = args.num("items", 6);
    const fixture = args.str("fixture");
    const explicitDate = args.str("date");
    if (explicitDate !== undefined && !/^\d{4}-\d{2}-\d{2}$/.test(explicitDate)) {
      throw new ProbeError(`--date must be YYYY-MM-DD, got "${explicitDate}"`);
    }
    const dateStr = explicitDate ?? (fixture ? "" : latestDigestDate());
    const contents = fixture ? await readJsonFile<Record<string, string>>(fixture) : readDigestDay(dateStr);

    const prompt = builders.buildHighlightsPrompt(contents, lang, items);

    return {
      json: {
        target: "prompt:highlights",
        lang,
        source: fixture ?? `digests/${dateStr}`,
        reports: Object.keys(contents),
        chars: prompt.length,
        prompt,
      },
      lines: [
        `# prompt:highlights lang=${lang} source=${fixture ?? `digests/${dateStr}`} ` +
          `reports=${Object.keys(contents).length} chars=${prompt.length}`,
        "",
        prompt,
      ],
    };
  },
};

export const PROMPT_TARGETS: Target[] = [
  promptVnMacroTarget,
  promptMacroTarget,
  promptTrendingTarget,
  promptHnTarget,
  promptPhTarget,
  promptArxivTarget,
  promptHfTarget,
  promptCommunityTarget,
  promptWebTarget,
  promptHighlightsTarget,
];
