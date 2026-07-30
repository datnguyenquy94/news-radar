/**
 * Dry-run probes for the report savers and the manifest generator.
 *
 * Both write files, and both write them to paths relative to the process's
 * working directory (`saveFile` joins onto "digests", `manifest.ts` onto
 * "manifest.json"). The probes exploit exactly that: they chdir into a temp
 * directory first, so the real code runs unmodified and every byte it writes
 * lands somewhere disposable. The repo's `digests/`, `manifest.json` and
 * `feed.xml` are never touched.
 *
 * GitHub issue creation is disabled the same way the pipeline disables it — by
 * passing an empty `digestRepo` — and no flag can turn it back on.
 */

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { Args, ProbeError, kv, readJsonFile, requireProviderKey, type Target } from "./kit.ts";
import type { Lang } from "../../core/i18n/index.ts";
import type { FinraData } from "../../domains/finance/finra.ts";
import type { FredData } from "../../domains/finance/fred.ts";
import type { VnDocsData } from "../../domains/vietnam/vndocs.ts";
import type { VnMacroData } from "../../domains/vietnam/vnmacro.ts";
import type { VnMarketData } from "../../domains/vietnam/vnmarket.ts";

// ---------------------------------------------------------------------------
// Temp-dir plumbing
// ---------------------------------------------------------------------------

/** Resolve `--out` (created if needed) or make a fresh temp directory. */
function resolveOutDir(args: Args, prefix: string): string {
  const requested = args.str("out");
  if (requested) {
    const abs = path.resolve(requested);
    fs.mkdirSync(abs, { recursive: true });
    return abs;
  }
  return fs.mkdtempSync(path.join(os.tmpdir(), prefix));
}

/** Run `fn` with the process cwd moved to `dir`, always restoring it after. */
async function inDir<T>(dir: string, fn: () => Promise<T>): Promise<T> {
  const original = process.cwd();
  process.chdir(dir);
  try {
    return await fn();
  } finally {
    process.chdir(original);
  }
}

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

const REPORT_OPTIONS = [
  { name: "out", arg: "dir", desc: "write into this directory (default: a fresh mkdtemp dir)" },
  { name: "lang", arg: "zh|en", desc: "report language (default en)" },
  { name: "date", arg: "YYYY-MM-DD", desc: "date used in the report (default: today, CST)" },
  { name: "head", arg: "n", desc: "lines of the generated file to print (default 20)" },
];

/** Shared tail: read the file the saver was expected to write and summarise it. */
function reportResult(
  outDir: string,
  fileName: string,
  dateStr: string,
  lang: Lang,
  source: string,
  headLines: number,
) {
  const filePath = path.join(outDir, "digests", dateStr, fileName);
  if (!fs.existsSync(filePath)) {
    return {
      json: { outDir, expected: filePath, written: false, lang, dateStr, source },
      lines: [kv("outDir", outDir), kv("expected", filePath), kv("written", false)],
      failure: "the saver wrote no file — see the [report] log above for the reason",
    };
  }
  const content = fs.readFileSync(filePath, "utf-8");
  return {
    json: { outDir, file: filePath, written: true, lang, dateStr, source, chars: content.length, content },
    lines: [
      kv("outDir", outDir),
      kv("file", filePath),
      kv("lang", lang),
      kv("dateStr", dateStr),
      kv("source", source),
      kv("chars", content.length),
      kv("issueCreated", "no (digestRepo forced empty)"),
      `head[${headLines}]:`,
      ...content
        .split("\n")
        .slice(0, headLines)
        .map((l) => `  ${l}`),
    ],
  };
}

// ---------------------------------------------------------------------------
// report:macro
// ---------------------------------------------------------------------------

interface MacroPayload {
  fred: FredData;
  finra: FinraData;
}

export const reportMacroTarget: Target = {
  name: "report:macro",
  summary:
    "saveMacroReport() end to end (fetch -> prompt -> LLM -> file) into a temp dir; no issue, no digests/",
  options: [
    ...REPORT_OPTIONS,
    { name: "fixture", arg: "path", desc: '{"fred":FredData,"finra":FinraData}; fixtures/macro.json' },
  ],
  env: ["the LLM provider's key", "LLM_PROVIDER"],
  async run(args) {
    // First, before any fetch: this target makes a real LLM call, so a missing
    // provider key is a skip (exit 2), not a failed run.
    requireProviderKey();
    const lang = langOf(args);
    const dateStr = await dateOf(args);
    const outDir = resolveOutDir(args, "inspect-macro-");
    const fixture = args.str("fixture");

    const payload: MacroPayload = fixture
      ? await readJsonFile<MacroPayload>(fixture)
      : await (async () => {
          const [fred, finra] = await Promise.all([
            import("../../domains/finance/fred.ts").then((m) => m.fetchFredData()),
            import("../../domains/finance/finra.ts").then((m) => m.fetchFinraMargin()),
          ]);
          return { fred, finra };
        })();

    const [{ saveMacroReport }, { autoGenFooter }, { toUtcStr }] = await Promise.all([
      import("../../platform/reports/savers/macro.ts"),
      import("../../platform/reports/files.ts"),
      import("../../core/date.ts"),
    ]);

    await inDir(outDir, () =>
      // digestRepo "" — the saver's own guard against creating a GitHub issue.
      saveMacroReport(
        payload.fred,
        payload.finra,
        toUtcStr(new Date()),
        dateStr,
        "",
        autoGenFooter(lang),
        lang,
      ),
    );

    const fileName = lang === "en" ? "fin-macro-en.md" : "fin-macro.md";
    return reportResult(outDir, fileName, dateStr, lang, fixture ?? "live", args.num("head", 20));
  },
};

// ---------------------------------------------------------------------------
// report:vnmacro
// ---------------------------------------------------------------------------

interface VnMacroPayload {
  market: VnMarketData;
  macro: VnMacroData;
  docs: VnDocsData;
}

export const reportVnMacroTarget: Target = {
  name: "report:vnmacro",
  summary:
    "saveVnMacroReport() end to end (fetch -> prompt -> LLM -> file) into a temp dir; no issue, no digests/",
  options: [
    ...REPORT_OPTIONS,
    {
      name: "fixture",
      arg: "path",
      desc: '{"market":VnMarketData,"macro":VnMacroData,"docs":VnDocsData}; fixtures/vnmacro.json',
    },
  ],
  env: ["the LLM provider's key", "LLM_PROVIDER"],
  async run(args) {
    // See report:macro — key check precedes the fetch so the skip is instant.
    requireProviderKey();
    const lang = langOf(args);
    const dateStr = await dateOf(args);
    const outDir = resolveOutDir(args, "inspect-vnmacro-");
    const fixture = args.str("fixture");

    const payload: VnMacroPayload = fixture
      ? await readJsonFile<VnMacroPayload>(fixture)
      : await (async () => {
          const [market, macro, docs] = await Promise.all([
            import("../../domains/vietnam/vnmarket.ts").then((m) => m.fetchVnMarketData()),
            import("../../domains/vietnam/vnmacro.ts").then((m) => m.fetchVnMacroData()),
            import("../../domains/vietnam/vndocs.ts").then((m) => m.fetchVnDocsData()),
          ]);
          return { market, macro, docs };
        })();

    const [{ saveVnMacroReport }, { autoGenFooter }, { toUtcStr }] = await Promise.all([
      import("../../platform/reports/savers/vnmacro.ts"),
      import("../../platform/reports/files.ts"),
      import("../../core/date.ts"),
    ]);

    await inDir(outDir, () =>
      saveVnMacroReport(
        payload.market,
        payload.macro,
        payload.docs,
        toUtcStr(new Date()),
        dateStr,
        "", // digestRepo — no GitHub issue
        autoGenFooter(lang),
        lang,
      ),
    );

    const fileName = lang === "en" ? "fin-vnmacro-en.md" : "fin-vnmacro.md";
    return reportResult(outDir, fileName, dateStr, lang, fixture ?? "live", args.num("head", 20));
  },
};

// ---------------------------------------------------------------------------
// manifest
// ---------------------------------------------------------------------------

interface Manifest {
  generated: string;
  dates: Array<{ date: string; reports: string[] }>;
}

/** Per-date report differences between the current and the regenerated manifest. */
function diffDates(current: Manifest | null, next: Manifest) {
  const currentByDate = new Map((current?.dates ?? []).map((d) => [d.date, d.reports]));
  const nextByDate = new Map(next.dates.map((d) => [d.date, d.reports]));

  const addedDates = [...nextByDate.keys()].filter((d) => !currentByDate.has(d));
  const removedDates = [...currentByDate.keys()].filter((d) => !nextByDate.has(d));
  const changed: Array<{ date: string; added: string[]; removed: string[] }> = [];

  for (const [date, reports] of nextByDate) {
    const before = currentByDate.get(date);
    if (!before) continue;
    const added = reports.filter((r) => !before.includes(r));
    const removed = before.filter((r) => !reports.includes(r));
    if (added.length || removed.length) changed.push({ date, added, removed });
  }
  return { addedDates, removedDates, changed };
}

export const manifestTarget: Target = {
  name: "manifest",
  summary:
    "manifest.ts main() in a temp dir — what manifest.json / feed.xml would change to, nothing written",
  options: [
    { name: "dry-run", desc: "no-op: this target can only dry-run" },
    { name: "out", arg: "dir", desc: "temp workspace to build into (default: a fresh mkdtemp dir)" },
  ],
  async run(args) {
    const repoRoot = process.cwd();
    const digestsDir = path.join(repoRoot, "digests");
    if (!fs.existsSync(digestsDir)) throw new ProbeError("no digests/ directory in the working directory");

    const workspace = resolveOutDir(args, "inspect-manifest-");
    // A symlink, so the generator reads the real digests without any chance of
    // writing into them — it only ever writes ./manifest.json and ./feed.xml.
    const linked = path.join(workspace, "digests");
    if (!fs.existsSync(linked)) fs.symlinkSync(digestsDir, linked, "dir");

    const { main } = await import("../../platform/reports/manifest.ts");
    await inDir(workspace, main);

    const nextManifest = JSON.parse(
      fs.readFileSync(path.join(workspace, "manifest.json"), "utf-8"),
    ) as Manifest;
    const nextFeed = fs.readFileSync(path.join(workspace, "feed.xml"), "utf-8");

    const currentManifestPath = path.join(repoRoot, "manifest.json");
    const currentFeedPath = path.join(repoRoot, "feed.xml");
    const currentManifest = fs.existsSync(currentManifestPath)
      ? (JSON.parse(fs.readFileSync(currentManifestPath, "utf-8")) as Manifest)
      : null;
    const currentFeed = fs.existsSync(currentFeedPath) ? fs.readFileSync(currentFeedPath, "utf-8") : "";

    const diff = diffDates(currentManifest, nextManifest);
    // `generated` and `lastBuildDate` are timestamps, so they always differ;
    // compare everything else.
    const manifestBodyChanged =
      JSON.stringify(currentManifest?.dates ?? null) !== JSON.stringify(nextManifest.dates);
    const stripBuildDate = (xml: string): string => xml.replace(/<lastBuildDate>.*?<\/lastBuildDate>/, "");
    const feedChanged = stripBuildDate(currentFeed) !== stripBuildDate(nextFeed);

    return {
      json: {
        dryRun: true,
        workspace,
        currentDates: currentManifest?.dates.length ?? 0,
        nextDates: nextManifest.dates.length,
        manifestBodyChanged,
        feedChanged,
        feedItems: (nextFeed.match(/<item>/g) ?? []).length,
        ...diff,
      },
      lines: [
        kv("dryRun", true),
        kv("workspace", workspace),
        kv("currentDates", currentManifest?.dates.length ?? 0),
        kv("nextDates", nextManifest.dates.length),
        kv("manifestBodyChanged", manifestBodyChanged),
        kv("feedChanged", feedChanged),
        kv("feedItems", (nextFeed.match(/<item>/g) ?? []).length),
        kv("addedDates", diff.addedDates.join(",") || "(none)"),
        kv("removedDates", diff.removedDates.join(",") || "(none)"),
        "changedDates:",
        ...diff.changed.map(
          (c) => `  ${c.date}: +[${c.added.join(",") || "-"}] -[${c.removed.join(",") || "-"}]`,
        ),
      ],
    };
  },
};
