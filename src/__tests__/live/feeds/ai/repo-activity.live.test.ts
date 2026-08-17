/**
 * Live feed contract — `feeds/ai/repo-activity.ts` (`ai-cli` + `ai-agents`).
 *
 * The one feed serving two reports. It never throws: a failed repo is logged
 * and returned as empty arrays, so a broken token or a renamed endpoint shows
 * up as a digest full of "no activity" rather than as an error. That is exactly
 * what these assertions catch.
 */

import { describe, expect, it } from "vitest";

import { loadConfig } from "../../../../core/config.ts";
import { fetchAllRepoActivity, fetchSkills } from "../../../../feeds/ai/repo-activity.ts";
import { LIVE_OPTS, daysAgo, expectNonEmpty, expectPopulated, hasEnv } from "../../contract.ts";
import { probe, recordSkip } from "../../status.ts";

const MODULE = "feeds/ai/repo-activity.ts";

describe("live feed: repo activity (ai-cli / ai-agents)", () => {
  it("returns issues, PRs and releases for the tracked repos", LIVE_OPTS, async (ctx) => {
    if (!hasEnv("GH_TOKEN")) {
      recordSkip(MODULE, "fetchAllRepoActivity()", "GH_TOKEN is unset");
      ctx.skip();
      return;
    }

    await probe(MODULE, "fetchAllRepoActivity()", async () => {
      // The first few CLI repos rather than all 22: three GitHub calls each,
      // and the contract is the shape, not the coverage.
      const configs = loadConfig().cliRepos.slice(0, 3);
      const fetched = await fetchAllRepoActivity(configs, daysAgo(7));

      expect(fetched.length, "repo-activity: one result per config").toBe(configs.length);
      expectPopulated(
        fetched.map((f) => f.cfg),
        { id: "string", repo: "string", name: "string" },
        "repo-activity cfg",
      );

      // A whole week with nothing on any of the busiest CLI repos means the
      // fetch failed and was swallowed, not that the ecosystem went quiet.
      const items = fetched.flatMap((f) => [...f.issues, ...f.prs]);
      expectNonEmpty(items, "repo-activity issues+prs across 3 repos (7d)");
      expectPopulated(
        items,
        { number: "number", title: "string", state: "string", updated_at: "string", html_url: "string" },
        "repo-activity items",
      );
      // The /issues endpoint returns PRs too; the feed filters them out.
      expect(
        fetched.flatMap((f) => f.issues).some((i) => i.pull_request),
        "repo-activity: a pull request leaked into issues",
      ).toBe(false);

      const summary = fetched.map((f) => `${f.cfg.id} ${f.issues.length}i/${f.prs.length}p`).join(" · ");
      return `${summary} · ${fetched.flatMap((f) => f.releases).length} releases`;
    });
  });

  it("returns popular items from the skills repo", LIVE_OPTS, async (ctx) => {
    if (!hasEnv("GH_TOKEN")) {
      recordSkip(MODULE, "fetchSkills()", "GH_TOKEN is unset");
      ctx.skip();
      return;
    }

    await probe(MODULE, "fetchSkills()", async () => {
      const { prs, issues } = await fetchSkills(loadConfig().skillsRepo);

      // No date filter — these are all-time popular items, so both halves
      // carry content regardless of the week.
      expectNonEmpty(prs, "skills prs");
      expectNonEmpty(issues, "skills issues");
      expectPopulated(prs, { number: "number", title: "string", html_url: "string" }, "skills prs");

      return `${prs.length} prs · ${issues.length} issues`;
    });
  });
});
