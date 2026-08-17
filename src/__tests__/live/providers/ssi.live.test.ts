/**
 * Live source contract — `providers/ssi.ts` (iBoard price board).
 *
 * An undocumented internal endpoint: it needs a browser User-Agent plus a
 * Referer, and every field on a row is optional on the wire.
 */

import { describe, it } from "vitest";

import { fetchExchangeBoard } from "../../../providers/ssi.ts";
import { LIVE_OPTS, expectNonEmpty, expectSomePopulated } from "../contract.ts";
import { probe } from "../status.ts";

describe("live provider: ssi", () => {
  it("fetchExchangeBoard returns the HOSE board", LIVE_OPTS, async () => {
    await probe("providers/ssi.ts", 'fetchExchangeBoard("hose")', async () => {
      const rows = await fetchExchangeBoard("hose");

      expectNonEmpty(rows, "ssi hose rows");
      // Board fields are optional per row, so assert across the set: every row
      // missing one of these means SSI renamed it.
      expectSomePopulated(rows, (r) => r.stockSymbol, "ssi rows[].stockSymbol");
      expectSomePopulated(rows, (r) => r.matchedPrice, "ssi rows[].matchedPrice");
      expectSomePopulated(rows, (r) => r.refPrice, "ssi rows[].refPrice");
      // Turnover is order-matched only; the foreign values include put-through.
      expectSomePopulated(rows, (r) => r.nmTotalTradedValue, "ssi rows[].nmTotalTradedValue");
      expectSomePopulated(rows, (r) => r.buyForeignValue, "ssi rows[].buyForeignValue");
      // Foreign room — what `zeroRoomCount` counts on.
      expectSomePopulated(rows, (r) => r.remainForeignQtty, "ssi rows[].remainForeignQtty");
      expectSomePopulated(rows, (r) => r.tradingDate, "ssi rows[].tradingDate");

      const traded = rows.filter((r) => (r.matchedPrice ?? 0) > 0).length;
      const date = rows.find((r) => r.tradingDate)?.tradingDate;
      return `${rows.length} rows · ${traded} traded · date ${date}`;
    });
  });
});
