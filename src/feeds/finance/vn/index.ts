/**
 * Vietnam macro dashboard — the single feed behind the `fin-vnmacro` report.
 *
 * Eight upstream hosts across three halves: market internals (SSI, Entrade),
 * macro indicators (Vietcombank, Yahoo, FRED, SJC, World Bank) and official
 * documents (NSO, VBMA). They are composed here rather than in `cli/daily.ts`
 * so the report has one entry point and one degrade rule.
 *
 * Market internals are the spine: the document excerpts alone would produce a
 * monthly-statistics recap with no market read in it, so `fetchSuccess` tracks
 * the market half. Macro series and documents are supplementary.
 */

import { fetchVnMarketData, type VnMarketData } from "./market.ts";
import { fetchVnMacroData, type VnMacroData } from "./macro.ts";
import { fetchVnDocsData, type VnDocsData } from "./docs.ts";
import { createLogger } from "../../../core/logger.ts";

const log = createLogger("vnfeed");

export * from "./market.ts";
export * from "./macro.ts";
export * from "./docs.ts";

export interface VnFeedData {
  market: VnMarketData;
  macro: VnMacroData;
  docs: VnDocsData;
  /** Mirrors the market half alone — see the module header. */
  fetchSuccess: boolean;
}

const EMPTY_MARKET: VnMarketData = {
  indices: [],
  breadth: null,
  turnoverVndBn: null,
  foreign: null,
  futuresBasis: null,
  tradingDate: "",
  fetchSuccess: false,
};

const EMPTY_MACRO: VnMacroData = { fx: null, global: [], annual: [], gold: null, fetchSuccess: false };

const EMPTY_DOCS: VnDocsData = { docs: [], fetchSuccess: false };

export async function fetchVnFeed(now = new Date()): Promise<VnFeedData> {
  const [market, macro, docs] = await Promise.all([
    fetchVnMarketData().catch((err): VnMarketData => {
      log.error(`[vnmarket] fetch failed: ${err}`);
      return EMPTY_MARKET;
    }),
    fetchVnMacroData(now).catch((err): VnMacroData => {
      log.error(`[vnmacro] fetch failed: ${err}`);
      return EMPTY_MACRO;
    }),
    fetchVnDocsData().catch((err): VnDocsData => {
      log.error(`[vndocs] fetch failed: ${err}`);
      return EMPTY_DOCS;
    }),
  ]);

  return { market, macro, docs, fetchSuccess: market.fetchSuccess };
}
