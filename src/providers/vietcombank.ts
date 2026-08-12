/**
 * Vietcombank exchange-rate board — the USD/VND commercial rate.
 *
 * The by-date JSON endpoint is what still answers: the XML feed at
 * `ExchangeRates/ExrateXML.aspx` that older source catalogues recommend now
 * 302s to a 404 page.
 *
 * VCB publishes no board on weekends and holidays, so callers walk back day by
 * day — a single missing date is expected, not a failure.
 */

import { fetchJsonAsBrowser } from "../core/http.ts";

const VCB_API = "https://www.vietcombank.com.vn/api/exchangerates";
const VCB_REFERER = "https://www.vietcombank.com.vn/";

/** VCB publishes no board on weekends/holidays — walk back at most this far. */
export const VCB_MAX_LOOKBACK_DAYS = 6;

export interface VcbBoard {
  transfer: number;
  sell: number;
  asOf: string;
}

interface VcbResponse {
  Date?: string;
  Data?: { currencyCode?: string; cash?: string; transfer?: string; sell?: string }[];
}

/** Pull the USD row out of a VCB board response. Exported for tests. */
export function parseVcbUsd(json: VcbResponse): VcbBoard | null {
  const usd = (json.Data ?? []).find((r) => r.currencyCode?.toUpperCase() === "USD");
  if (!usd) return null;
  const transfer = Number((usd.transfer ?? "").replace(/,/g, ""));
  const sell = Number((usd.sell ?? "").replace(/,/g, ""));
  if (!Number.isFinite(sell) || sell <= 0) return null;
  return {
    // A missing `transfer` parses to 0, which is finite — guard on the value,
    // not just the type, or the board reports a zero transfer rate.
    transfer: Number.isFinite(transfer) && transfer > 0 ? transfer : sell,
    sell,
    asOf: (json.Date ?? "").slice(0, 10),
  };
}

/** The USD board for one ISO date. Throws `HttpError`; returns null if no USD row. */
export async function fetchUsdBoard(isoDate: string): Promise<VcbBoard | null> {
  return parseVcbUsd(await fetchJsonAsBrowser<VcbResponse>(`${VCB_API}?date=${isoDate}`, VCB_REFERER));
}
