/**
 * Live source contracts — US macro sources (FRED, FINRA) and the GitHub API.
 */

import { describe, expect, it } from "vitest";

import { fetchFinraMargin } from "../../feeds/finance/macro.ts";
import { fetchFredData } from "../../feeds/finance/macro.ts";
import { fetchFredSeries } from "../../providers/fred.ts";
import { fetchRecentItems, fetchRecentReleases } from "../../providers/github/repos.ts";
import { LIVE_OPTS, expectIsoDate, expectNonEmpty, expectPopulated, hasEnv } from "./contract.ts";

describe("live: fred", () => {
  it("returns every catalogued series with a value and an as-of date", LIVE_OPTS, async () => {
    const data = await fetchFredData();

    expect(data.fetchSuccess, "fred reported fetchSuccess: false").toBe(true);
    expectNonEmpty(data.metrics, "fred.metrics");

    // A retired or renamed series id returns 200 with no observations, which
    // our transform turns into latest: null. Name the offenders rather than
    // failing on a bare count.
    const empty = data.metrics.filter((m) => m.latest === null).map((m) => m.series);
    expect(empty, `fred: series returned no observations — check these ids: ${empty.join(", ")}`).toEqual([]);

    expectPopulated(
      data.metrics,
      { id: "string", series: "string", latest: "number", asOf: "string" },
      "fred.metrics",
    );
    expectIsoDate(data.metrics[0]!.asOf, "fred.metrics[0].asOf");
  });

  it("returns a descending observation window for a single series", LIVE_OPTS, async () => {
    // The accessor the Vietnam dashboard uses for the US 10Y.
    const obs = await fetchFredSeries("DGS10", 30);

    expectNonEmpty(obs, "fetchFredSeries(DGS10)");
    expectPopulated(obs, { date: "string", value: "number" }, "fetchFredSeries(DGS10)");
    expectIsoDate(obs[0]!.date, "fetchFredSeries(DGS10)[0].date");
    expect(
      Date.parse(obs[0]!.date),
      "fetchFredSeries: observations are not newest-first",
    ).toBeGreaterThanOrEqual(Date.parse(obs[1]!.date));
  });
});

describe("live: finra", () => {
  it("scrapes the margin-debt table", LIVE_OPTS, async () => {
    const data = await fetchFinraMargin();

    // This is an HTML scrape with no official API — the most likely of all
    // our sources to break silently on a site redesign.
    expect(data.fetchSuccess, "finra reported fetchSuccess: false — the margin table layout changed").toBe(
      true,
    );
    expect(data.latest, "finra.latest is null").not.toBeNull();
    expectPopulated([data.latest!], { period: "string", debitMillions: "number" }, "finra.latest");
    // Margin debt runs to hundreds of billions; a small number means the
    // parser latched onto the wrong column.
    expect(
      data.latest!.debitMillions,
      "finra.latest.debitMillions looks too small — wrong column?",
    ).toBeGreaterThan(100_000);
    expect(data.prior, "finra.prior is null — only one row parsed").not.toBeNull();
  });
});

describe("live: github api", () => {
  const REPO = "anthropics/claude-code";

  it.skipIf(!hasEnv("GH_TOKEN"))("returns recent issues and pull requests", LIVE_OPTS, async () => {
    const since = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
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
    // `pulls` can legitimately be empty on a quiet week; only the shape matters.
    if (pulls.length > 0) {
      expectPopulated(pulls, { number: "number", title: "string" }, "github pulls");
    }
  });

  it.skipIf(!hasEnv("GH_TOKEN"))("returns releases in the expected shape", LIVE_OPTS, async () => {
    // A year-wide window so the assertion does not depend on release cadence.
    const releases = await fetchRecentReleases(REPO, new Date(Date.now() - 365 * 24 * 60 * 60 * 1000));

    expectNonEmpty(releases, "github releases");
    expectPopulated(releases, { name: "string", published_at: "string" }, "github releases");
  });
});
