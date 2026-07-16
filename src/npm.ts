/**
 * Closed-source AI coding tools tracked via the npm registry.
 *
 * These tools have no public GitHub repo, but ship a CLI on npm. The registry
 * exposes clean version + publish-time data, which is the highest-signal way to
 * detect that a closed tool shipped a new release. Each tool maps to a
 * mainstream model vendor — it is that lab's productization arm.
 */

import type { Lang } from "./i18n.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** Display metadata shared by every closed-source tool, regardless of source. */
export interface ClosedTool {
  id: string;
  name: string;
  vendor: Record<Lang, string>;
  model: string; // flagship model the tool is a productization arm of
}

/** A closed tool whose releases are tracked via the npm registry. */
interface NpmTool extends ClosedTool {
  npmPkg: string;
}

export interface ClosedToolRelease {
  tool: ClosedTool;
  latestVersion: string | null;
  latestPublishedAt: string | null; // ISO timestamp of the latest version
  isNew: boolean; // latest version was published within the digest window
  fetchSuccess: boolean;
}

export interface NpmData {
  releases: ClosedToolRelease[];
}

// ---------------------------------------------------------------------------
// Tracked tools — closed-source coding tools that ship a CLI on npm.
// Do NOT add open-source CLIs here (they belong in CLI_REPOS); e.g.
// @qwen-code/qwen-code is the open-source Qwen Code, not the closed Qoder IDE.
// ---------------------------------------------------------------------------

export const CLOSED_TOOLS: NpmTool[] = [
  {
    id: "minimax-code",
    name: "MiniMax Code",
    vendor: { zh: "MiniMax", en: "MiniMax" },
    model: "MiniMax M1",
    npmPkg: "mmx-cli",
  },
  {
    id: "codebuddy",
    name: "CodeBuddy",
    vendor: { zh: "腾讯", en: "Tencent" },
    model: "Hunyuan 混元",
    npmPkg: "@tencent-ai/codebuddy-code",
  },
];

// ---------------------------------------------------------------------------
// Fetch
// ---------------------------------------------------------------------------

const REGISTRY = "https://registry.npmjs.org";

/** Full registry doc — the abbreviated `install-v1` format omits `time`. */
interface NpmRegistryDoc {
  "dist-tags"?: { latest?: string };
  time?: Record<string, string>;
}

async function fetchOne(tool: NpmTool, since: Date): Promise<ClosedToolRelease> {
  try {
    const resp = await fetch(`${REGISTRY}/${encodeURIComponent(tool.npmPkg)}`);
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    const data = (await resp.json()) as NpmRegistryDoc;

    const latestVersion = data["dist-tags"]?.latest ?? null;
    const time = data.time ?? {};
    const latestPublishedAt = latestVersion ? (time[latestVersion] ?? null) : null;

    // Flag "new" off the published dist-tag `latest` only — matching the
    // Published column exactly. Counting all `time` entries would let a daily
    // prerelease churn (e.g. Augment's -prerelease.N) mark every tool new while
    // the shown stable version is weeks old.
    const isNew = latestPublishedAt !== null && new Date(latestPublishedAt).getTime() >= since.getTime();

    console.log(`  [npm/${tool.id}] latest: ${latestVersion ?? "?"}, new: ${isNew}`);
    return { tool, latestVersion, latestPublishedAt, isNew, fetchSuccess: true };
  } catch (err) {
    console.error(`  [npm/${tool.id}] fetch failed: ${err}`);
    return { tool, latestVersion: null, latestPublishedAt: null, isNew: false, fetchSuccess: false };
  }
}

export async function fetchNpmData(since: Date): Promise<NpmData> {
  const releases = await Promise.all(CLOSED_TOOLS.map((t) => fetchOne(t, since)));
  return { releases };
}
