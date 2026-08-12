/**
 * SJC domestic gold board.
 *
 * Two traps here. SJC's public page renders the board in JavaScript, so
 * extracting it yields an empty shell and the source *looks* unavailable — the
 * JSON endpoint behind it is what carries the data. That endpoint then sits
 * behind a WAF that fingerprints the TLS ClientHello rather than the headers:
 * curl gets 200 while Node's `fetch` gets 403 with any headers or none at all.
 * `fetchJsonBrowserTls` presents Chrome's cipher list to get through.
 *
 * SJC quotes in VND per *lượng* (tael), not per ounce.
 */

import { fetchJsonBrowserTls } from "../core/http.ts";

const SJC_TIMEOUT_MS = 30_000;
const SJC_API = "https://sjc.com.vn/GoldPrice/Services/PriceService.ashx";
const SJC_REFERER = "https://sjc.com.vn/";

/** 1 lượng (tael) = 37.5 g; 1 troy ounce = 31.1034768 g. */
export const OZ_PER_TAEL = 37.5 / 31.1034768;

export interface SjcBoard {
  buy: number;
  sell: number;
  asOf: string;
}

interface SjcResponse {
  success?: boolean;
  latestDate?: string;
  data?: { TypeName?: string; BranchName?: string; BuyValue?: number; SellValue?: number }[];
}

/**
 * Pick the benchmark SJC bar (1L/10L/1KG) — the quote every Vietnamese press
 * report means by "giá vàng SJC". Other rows are smaller denominations that
 * trade at their own spreads. Exported for tests.
 */
export function parseSjcGold(json: SjcResponse): SjcBoard | null {
  const rows = json.data ?? [];
  const bar =
    rows.find((r) => /SJC\s*1L/i.test(r.TypeName ?? "")) ?? rows.find((r) => /SJC/i.test(r.TypeName ?? ""));
  if (!bar) return null;
  const buy = Number(bar.BuyValue);
  const sell = Number(bar.SellValue);
  if (!Number.isFinite(sell) || sell <= 0) return null;
  return {
    buy: Number.isFinite(buy) && buy > 0 ? buy : sell,
    sell,
    asOf: (json.latestDate ?? "").trim(),
  };
}

/** Throws `HttpError` on failure; returns null when no SJC bar row is present. */
export async function fetchGoldBoard(): Promise<SjcBoard | null> {
  return parseSjcGold(
    await fetchJsonBrowserTls<SjcResponse>(SJC_API, { referer: SJC_REFERER, timeoutMs: SJC_TIMEOUT_MS }),
  );
}
