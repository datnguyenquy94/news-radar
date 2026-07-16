/**
 * Zhipu (Z.ai) ZCode — closed-source AI coding IDE tracked via its public HTML
 * changelog (no npm package). The changelog is server-rendered, so the latest
 * version + release date can be scraped from the initial HTML. This is more
 * fragile than the npm registry: a page-structure change breaks parsing, in
 * which case the tool is reported with `fetchSuccess: false` (marked "fetch
 * failed" in the table) without affecting the npm-tracked rows.
 */

import type { ClosedTool, ClosedToolRelease } from "./npm.ts";

const ZCODE_CHANGELOG_URL = "https://zcode.z.ai/en/changelog";

export const ZCODE_TOOL: ClosedTool = {
  id: "zcode",
  name: "ZCode",
  vendor: { zh: "智谱", en: "Zhipu" },
  model: "GLM",
};

const MONTHS: Record<string, number> = {
  Jan: 0,
  Feb: 1,
  Mar: 2,
  Apr: 3,
  May: 4,
  Jun: 5,
  Jul: 6,
  Aug: 7,
  Sep: 8,
  Oct: 9,
  Nov: 10,
  Dec: 11,
};

/**
 * Extract the latest version + release date from the ZCode changelog HTML.
 * Entries render as `<span>3.3.6</span><span>Released Jul 15, 2026</span>`, so
 * after stripping tags the first `<x.y.z> Released <Mon D, YYYY>` wins.
 * Returns null if the structure changed and nothing matched.
 */
export function parseZcodeChangelog(html: string): { version: string; publishedAt: string } | null {
  const text = html
    .replace(/<(script|style)[^>]*>[\s\S]*?<\/\1>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ");
  const m = text.match(/(\d+\.\d+\.\d+)\s+Released\s+([A-Z][a-z]{2})\s+(\d{1,2}),\s+(\d{4})/);
  if (!m) return null;

  const [, version, mon, day, year] = m;
  const month = mon ? MONTHS[mon] : undefined;
  if (!version || !day || !year || month === undefined) return null;

  const publishedAt = new Date(Date.UTC(Number(year), month, Number(day))).toISOString();
  return { version, publishedAt };
}

export async function fetchZcodeRelease(since: Date): Promise<ClosedToolRelease> {
  try {
    const resp = await fetch(ZCODE_CHANGELOG_URL, {
      headers: { "User-Agent": "Mozilla/5.0 (agents-radar)" },
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const parsed = parseZcodeChangelog(await resp.text());
    if (!parsed) throw new Error("changelog structure not recognized");

    const isNew = new Date(parsed.publishedAt).getTime() >= since.getTime();
    console.log(`  [zcode] latest: ${parsed.version}, new: ${isNew}`);
    return {
      tool: ZCODE_TOOL,
      latestVersion: parsed.version,
      latestPublishedAt: parsed.publishedAt,
      isNew,
      fetchSuccess: true,
    };
  } catch (err) {
    console.error(`  [zcode] fetch failed: ${err}`);
    return {
      tool: ZCODE_TOOL,
      latestVersion: null,
      latestPublishedAt: null,
      isNew: false,
      fetchSuccess: false,
    };
  }
}
