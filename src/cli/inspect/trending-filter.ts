/**
 * Pure-transform probe for the `ai-trending` already-reported filter.
 *
 * `freshness()` is what decides whether a repo still has something to say, and
 * it is the one piece of the trending pipeline with no network in it — so it is
 * probed offline against a real (or supplied) state file rather than covered by
 * a live test. Feed it a repo and a star count and it prints the verdict and the
 * thresholds that produced it.
 */

import fs from "node:fs";

import { ProbeError, kv, type Target } from "./kit.ts";
import type { TrendingState } from "../../feeds/ai/trending.ts";

/** Read a state file given explicitly with `--state`. */
function readStateFile(file: string): TrendingState {
  if (!fs.existsSync(file)) throw new ProbeError(`no such file: ${file}`);
  const parsed = JSON.parse(fs.readFileSync(file, "utf-8")) as Partial<TrendingState>;
  if (!parsed.repos || typeof parsed.repos !== "object") {
    throw new ProbeError(`${file} has no "repos" object — not a trending state file`);
  }
  return { repos: parsed.repos };
}

export const trendingFilterTarget: Target = {
  name: "trending:filter",
  summary: "freshness() — the already-reported filter verdict for one repo, no network",
  options: [
    { name: "repo", arg: "owner/name", desc: "repo to test (required)" },
    { name: "stars", arg: "n", desc: "the repo's current star count (required)" },
    {
      name: "state",
      arg: "path",
      desc: "state file to read (default: digests/trending-state.json)",
    },
  ],
  async run(args) {
    const repo = args.requireStr("repo");
    const stars = args.num("stars", Number.NaN);
    if (!Number.isFinite(stars)) throw new ProbeError("--stars <n> is required");

    const { freshness, RESURFACE_MIN_STARS, RESURFACE_MIN_PCT } = await import("../../feeds/ai/trending.ts");
    const file = args.str("state");
    const state = file
      ? readStateFile(file)
      : (await import("../../platform/state/trending-state.ts")).loadTrendingState();
    const origin = file ?? "digests/trending-state.json";

    const prev = state.repos[repo];
    const verdict = freshness(repo, stars, state);
    const gained = prev && stars > 0 ? stars - prev.stars : null;
    const pct = prev && prev.stars > 0 && gained !== null ? (gained / prev.stars) * 100 : null;

    return {
      json: {
        repo,
        stars,
        state: origin,
        previous: prev ?? null,
        gained,
        pctGained: pct,
        thresholds: { minStars: RESURFACE_MIN_STARS, minPct: RESURFACE_MIN_PCT },
        verdict,
        reported: verdict !== null,
      },
      lines: [
        kv("state", `${origin} (${Object.keys(state.repos).length} repos)`),
        kv("repo", repo),
        kv("stars", stars),
        kv("previous", prev ? `${prev.stars}★ on ${prev.lastReported}` : "(never reported)"),
        kv("gained", gained === null ? "n/a" : `${gained} (${pct === null ? "n/a" : `${pct.toFixed(1)}%`})`),
        kv("thresholds", `>= ${RESURFACE_MIN_STARS}★ or >= ${RESURFACE_MIN_PCT}%`),
        kv(
          "verdict",
          verdict === null
            ? "SUPPRESSED — already reported and flat since"
            : verdict.isNew
              ? "REPORT — 🆕 first appearance"
              : verdict.starsGained === null
                ? "REPORT — star count unparsed, failing open"
                : `REPORT — 📈 +${verdict.starsGained} since ${verdict.lastReported}`,
        ),
      ],
    };
  },
};
