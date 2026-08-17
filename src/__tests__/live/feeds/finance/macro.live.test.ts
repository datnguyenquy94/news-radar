/**
 * Live feed contract — `feeds/finance/macro.ts` (`fin-macro`).
 *
 * FRED carries the dashboard; FINRA is supplementary, which is why the feed's
 * `fetchSuccess` mirrors FRED alone. Both are asserted here regardless — a
 * silently missing margin-debt table is still a hole in the report.
 */

import { describe, expect, it } from "vitest";

import { fetchFinraMargin, fetchFredData } from "../../../../feeds/finance/macro.ts";
import { LIVE_OPTS, expectIsoDate, expectNonEmpty, expectPopulated } from "../../contract.ts";
import { probe } from "../../status.ts";

describe("live feed: fred (macro dashboard)", () => {
  it("returns every catalogued series with a value and an as-of date", LIVE_OPTS, async () => {
    await probe("feeds/finance/macro.ts", "fetchFredData()", async () => {
      const data = await fetchFredData();

      expect(data.fetchSuccess, "fred reported fetchSuccess: false").toBe(true);
      expectNonEmpty(data.metrics, "fred.metrics");

      // A retired or renamed series id returns 200 with no observations, which
      // the transform turns into latest: null. Name the offenders rather than
      // failing on a bare count.
      const empty = data.metrics.filter((m) => m.latest === null).map((m) => m.series);
      expect(empty, `fred: series returned no observations — check these ids: ${empty.join(", ")}`).toEqual(
        [],
      );

      expectPopulated(
        data.metrics,
        { id: "string", series: "string", latest: "number", asOf: "string" },
        "fred.metrics",
      );
      expectIsoDate(data.metrics[0]!.asOf, "fred.metrics[0].asOf");

      return `${data.metrics.length} series · all populated · asOf ${data.metrics[0]!.asOf}`;
    });
  });
});

describe("live feed: finra (margin debt)", () => {
  it("scrapes the margin-debt table", LIVE_OPTS, async () => {
    await probe("feeds/finance/macro.ts", "fetchFinraMargin()", async () => {
      const data = await fetchFinraMargin();

      // An HTML scrape with no official API — the most likely of all our
      // sources to break silently on a site redesign.
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

      return `latest ${data.latest!.period} · ${data.latest!.debitMillions} $M`;
    });
  });
});
