/**
 * SSI iBoard — the full HOSE/HNX price board, one call per exchange.
 *
 * Carries per-ticker turnover, foreign buy/sell value and remaining foreign
 * room, which is everything needed for breadth, foreign flow and FOL headroom.
 *
 * Note `nmTotalTradedValue` is order-matched value only, while
 * `buyForeignValue` / `sellForeignValue` include put-through (block) deals —
 * SSI publishes no put-through total. One ticker's foreign flow can therefore
 * exceed its matched turnover; that is the source's definition, not a bug.
 */

import { fetchJsonAsBrowser } from "../core/http.ts";

const SSI_BOARD = "https://iboard-query.ssi.com.vn/stock/exchange";
const SSI_REFERER = "https://iboard.ssi.com.vn/";

export const EXCHANGES = ["hose", "hnx"] as const;
export type Exchange = (typeof EXCHANGES)[number];

export interface SsiRow {
  stockSymbol?: string;
  companyNameEn?: string;
  companyNameVi?: string;
  stockType?: string;
  matchedPrice?: number;
  refPrice?: number;
  ceiling?: number;
  floor?: number;
  priceChangePercent?: number;
  nmTotalTradedValue?: number;
  buyForeignValue?: number;
  sellForeignValue?: number;
  remainForeignQtty?: number;
  tradingDate?: string; // YYYYMMDD
}

/** One exchange's board rows. Throws `HttpError` on failure. */
export async function fetchExchangeBoard(exchange: Exchange): Promise<SsiRow[]> {
  const json = await fetchJsonAsBrowser<{ data?: SsiRow[] }>(`${SSI_BOARD}/${exchange}`, SSI_REFERER);
  return json.data ?? [];
}
