/** Live source contract — `providers/yahoo.ts` (chart API). */

import { describe, expect, it } from "vitest";

import { fetchDailySeries } from "../../../providers/yahoo.ts";
import { LIVE_OPTS, expectNonEmpty, expectPopulated, isoDate } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: yahoo", () => {
  it("fetchDailySeries returns daily closes", LIVE_OPTS, async () => {
    await probe("providers/yahoo.ts", 'fetchDailySeries("DX-Y.NYB")', async () => {
      // One symbol only: Yahoo throttles when several are requested at once,
      // which is what LIVE_OPTS' retries exist for. The contract is the shape.
      const bars = await fetchDailySeries("DX-Y.NYB");

      expectNonEmpty(bars, "yahoo bars");
      expectPopulated(bars, { t: "number", c: "number" }, "yahoo bars");
      // Oldest first — the macro feed reads the tail as "latest", and nulls are
      // dropped so "20 bars back" means 20 sessions.
      expect(bars[0]!.t, "yahoo bars are not oldest-first").toBeLessThan(bars[bars.length - 1]!.t);

      const last = bars[bars.length - 1]!;
      return `${bars.length} bars · latest ${isoDate(new Date(last.t * 1000))} = ${last.c.toFixed(2)}`;
    });
  });
});
