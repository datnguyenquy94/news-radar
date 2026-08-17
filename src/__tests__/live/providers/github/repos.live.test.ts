/** Live source contract — `providers/github/repos.ts` (repo activity). */

import { describe, expect, it } from "vitest";

import {
  fetchRecentItems,
  fetchRecentReleases,
  fetchSkillsData,
} from "../../../../providers/github/repos.ts";
import {
  LIVE_OPTS,
  daysAgo,
  expectDateLike,
  expectNonEmpty,
  expectPopulated,
  hasEnv,
} from "../../contract.ts";
import { probe, recordSkip } from "../../status.ts";

/** The busiest tracked repo — it always has activity in a 7-day window. */
const REPO = "anthropics/claude-code";
const SKILLS_REPO = "anthropics/skills";
const MODULE = "providers/github/repos.ts";

describe("live provider: github repos", () => {
  it("fetchRecentItems returns issues and pull requests", LIVE_OPTS, async (ctx) => {
    if (!hasEnv("GH_TOKEN")) {
      recordSkip(MODULE, "fetchRecentItems()", "GH_TOKEN is unset");
      ctx.skip();
      return;
    }

    await probe(MODULE, "fetchRecentItems()", async () => {
      const since = daysAgo(7);
      const [issues, pulls] = await Promise.all([
        fetchRecentItems(REPO, "issues", since),
        fetchRecentItems(REPO, "pulls", since),
      ]);

      expectNonEmpty(issues, "github issues");
      expectPopulated(
        issues,
        { number: "number", title: "string", state: "string", created_at: "string", updated_at: "string" },
        "github issues",
      );
      expect(issues[0]!.user?.login, "github issues[0].user.login is missing").toBeTruthy();
      // `pulls` can legitimately be empty on a quiet week; only shape matters.
      if (pulls.length > 0) expectPopulated(pulls, { number: "number", title: "string" }, "github pulls");

      return `${issues.length} issues · ${pulls.length} pulls (7d, ${REPO})`;
    });
  });

  it("fetchRecentReleases returns releases in the expected shape", LIVE_OPTS, async (ctx) => {
    if (!hasEnv("GH_TOKEN")) {
      recordSkip(MODULE, "fetchRecentReleases()", "GH_TOKEN is unset");
      ctx.skip();
      return;
    }

    await probe(MODULE, "fetchRecentReleases()", async () => {
      // A year-wide window so the assertion does not depend on release cadence.
      const releases = await fetchRecentReleases(REPO, daysAgo(365));

      expectNonEmpty(releases, "github releases");
      expectPopulated(releases, { tag_name: "string", published_at: "string" }, "github releases");
      expectDateLike(releases[0]!.published_at, "github releases[0].published_at");

      return `${releases.length} releases · latest ${releases[0]!.tag_name}`;
    });
  });

  it("fetchSkillsData returns the skills repo's hot items", LIVE_OPTS, async (ctx) => {
    if (!hasEnv("GH_TOKEN")) {
      recordSkip(MODULE, "fetchSkillsData()", "GH_TOKEN is unset");
      ctx.skip();
      return;
    }

    await probe(MODULE, `fetchSkillsData("${SKILLS_REPO}")`, async () => {
      const { prs, issues } = await fetchSkillsData(SKILLS_REPO);

      // No date filter here — these are all-time popular items, so both halves
      // carry content regardless of the week.
      expectNonEmpty(prs, "skills prs");
      expectNonEmpty(issues, "skills issues");
      expectPopulated(prs, { number: "number", title: "string", html_url: "string" }, "skills prs");

      return `${prs.length} prs · ${issues.length} issues`;
    });
  });
});
