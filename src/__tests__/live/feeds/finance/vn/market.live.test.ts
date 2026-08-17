/**
 * Live feed contract — `feeds/finance/vn/market.ts` (market half of
 * `fin-vnmacro`).
 *
 * The dashboard's `fetchSuccess` mirrors this half: documents and macro series
 * alone are a statistics recap with no market read in them.
 */

import { describe, expect, it } from "vitest";

import { fetchVnMarketData } from "../../../../../feeds/finance/vn/index.ts";
import {
  LIVE_OPTS,
  expectIsoDate,
  expectNonEmpty,
  expectPopulated,
  expectSomePopulated,
} from "../../../contract.ts";
import { probe } from "../../../status.ts";

describe("live feed: vietnam market (SSI board + Entrade bars)", () => {
  it("returns index levels, breadth, turnover and foreign flow", LIVE_OPTS, async () => {
    await probe("feeds/finance/vn/market.ts", "fetchVnMarketData()", async () => {
      const data = await fetchVnMarketData();

      expect(data.fetchSuccess, "vnmarket reported fetchSuccess: false").toBe(true);
      expectIsoDate(data.tradingDate, "vnmarket.tradingDate");

      // Entrade — index bars
      expectNonEmpty(data.indices, "vnmarket.indices");
      expectPopulated(
        data.indices,
        { symbol: "string", close: "number", asOf: "string" },
        "vnmarket.indices",
      );
      const vnindex = data.indices.find((q) => q.symbol === "VNINDEX");
      expect(vnindex, "vnmarket: VNINDEX missing from indices").toBeDefined();
      expect(vnindex!.close, "VNINDEX close is not a plausible index level").toBeGreaterThan(100);
      expectSomePopulated(data.indices, (q) => q.changePct1d, "vnmarket.indices[].changePct1d");

      // Entrade — derivative leg. Null here means the VN30F1M symbol changed.
      expect(data.futuresBasis, "vnmarket.futuresBasis is null — VN30F1M lookup failed").not.toBeNull();
      expectPopulated(
        [data.futuresBasis!],
        { futures: "number", spot: "number", basis: "number", basisPct: "number" },
        "vnmarket.futuresBasis",
      );

      // SSI board. NOTE: between ~08:45 and the 09:00 ICT open the board can be
      // reset for the new session, in which case fetchBoard drops these blocks
      // by design. A failure here outside that window is real drift.
      expect(data.breadth, "vnmarket.breadth is null — SSI board returned no traded rows").not.toBeNull();
      const breadth = data.breadth!;
      expect(
        breadth.advancers + breadth.decliners + breadth.unchanged,
        "vnmarket.breadth: no traded names counted",
      ).toBeGreaterThan(0);

      expect(data.turnoverVndBn, "vnmarket.turnoverVndBn is null").not.toBeNull();
      expect(data.turnoverVndBn!, "vnmarket.turnoverVndBn is zero").toBeGreaterThan(0);

      expect(data.foreign, "vnmarket.foreign is null").not.toBeNull();
      const foreign = data.foreign!;
      expectPopulated(
        [foreign],
        { buyVndBn: "number", sellVndBn: "number", netVndBn: "number", zeroRoomCount: "number" },
        "vnmarket.foreign",
      );
      expectNonEmpty(foreign.topBuys, "vnmarket.foreign.topBuys");
      expectPopulated(foreign.topBuys, { symbol: "string", name: "string", netVndBn: "number" }, "topBuys");
      // roomVndBn is null per row when `remainForeignQtty` is absent; all-null
      // across a live board means SSI renamed the field.
      expectSomePopulated(
        [...foreign.topBuys, ...foreign.topSells],
        (t) => t.roomVndBn,
        "vnmarket.foreign topBuys/topSells roomVndBn",
      );

      return `${data.tradingDate} · VNINDEX ${vnindex!.close} · turnover ${Math.round(data.turnoverVndBn!)} bn`;
    });
  });
});
