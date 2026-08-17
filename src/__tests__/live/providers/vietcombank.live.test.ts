/** Live source contract — `providers/vietcombank.ts` (USD/VND board). */

import { describe, expect, it } from "vitest";

import { VCB_MAX_LOOKBACK_DAYS, fetchUsdBoard, type VcbBoard } from "../../../providers/vietcombank.ts";
import { LIVE_OPTS, daysAgo, expectPopulated, isoDate } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: vietcombank", () => {
  it("fetchUsdBoard returns a board within the lookback window", LIVE_OPTS, async () => {
    await probe("providers/vietcombank.ts", "fetchUsdBoard()", async () => {
      // Weekends and holidays publish nothing, so walk back exactly as the
      // macro feed does. Only the exhausted loop is a failure.
      let board: VcbBoard | null = null;
      let usedDate = "";
      for (let back = 0; back <= VCB_MAX_LOOKBACK_DAYS && !board; back++) {
        usedDate = isoDate(daysAgo(back));
        board = await fetchUsdBoard(usedDate).catch(() => null);
      }

      expect(
        board,
        `vcb: no USD board in the last ${VCB_MAX_LOOKBACK_DAYS + 1} days — the API or the USD row changed`,
      ).not.toBeNull();
      expectPopulated([board!], { transfer: "number", sell: "number", asOf: "string" }, "vcb board");
      // The framework's most load-bearing number; a small value means the
      // thousands separator handling broke.
      expect(board!.sell, "vcb sell is not a plausible VND rate").toBeGreaterThan(10_000);

      return `${board!.sell} VND/USD sell · asOf ${board!.asOf || usedDate}`;
    });
  });
});
