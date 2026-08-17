/**
 * Live source contract — `providers/finra.ts`.
 *
 * A defensive HTML scrape with no official API behind it: `parseMarginTable`
 * returns `null` on any structural miss rather than throwing, so `null` here is
 * the drift signal, not an error.
 */

import { describe, expect, it } from "vitest";

import { fetchMarginObservations } from "../../../providers/finra.ts";
import { LIVE_OPTS, expectNonEmpty, expectPopulated } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: finra", () => {
  it("fetchMarginObservations scrapes the margin-debt table", LIVE_OPTS, async () => {
    await probe("providers/finra.ts", "fetchMarginObservations()", async () => {
      const rows = await fetchMarginObservations();

      expect(rows, "finra returned null — the margin table layout changed").not.toBeNull();
      expectNonEmpty(rows!, "finra observations");
      expectPopulated(rows!, { period: "string", debitMillions: "number" }, "finra observations");
      // Margin debt runs to hundreds of billions; a small number means the
      // parser latched onto the wrong column.
      expect(rows![0]!.debitMillions, "finra debitMillions looks too small — wrong column?").toBeGreaterThan(
        100_000,
      );

      return `${rows!.length} months · latest ${rows![0]!.period}`;
    });
  });
});
