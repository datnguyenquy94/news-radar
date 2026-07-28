/**
 * Vietnam equity-market internals — the metrics the Vietnam framework puts in
 * place of the US ones: foreign net flow and index valuation stand in for VIX,
 * and the VN30 futures basis is the closest thing to a domestic fear gauge.
 *
 * Two undocumented-but-public endpoints, both verified to answer a plain GET
 * with a browser User-Agent:
 *
 *   1. SSI iBoard  — full HOSE/HNX price board, one call per exchange. Carries
 *      per-ticker turnover, foreign buy/sell value and remaining foreign room,
 *      which is everything needed for breadth + foreign flow + FOL headroom.
 *   2. DNSE Entrade — daily OHLCV for indices and index futures. Used for the
 *      VN-Index/VN30 levels and the VN30F1M basis.
 *
 * Both are internal APIs rather than published products (see
 * `.agent/specs/vn_financial_data_sources.md`), so every call is wrapped: any
 * failure degrades that block to null and the report is written without it.
 *
 * TCBS and VNDirect — the usual sources for per-ticker P/E and P/B — sit behind
 * a Cloudflare challenge and a connection timeout respectively, so aggregate
 * market valuation is not available to this pipeline. The prompt is told to
 * mark valuation-dependent signals as insufficient data rather than guess.
 */

import { BROWSER_UA } from "./doc-extract.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface VnIndexQuote {
  symbol: string;
  label: string;
  close: number;
  changePct1d: number | null;
  changePct5d: number | null;
  changePct20d: number | null;
  asOf: string; // ISO date of the latest bar
}

export interface VnBreadth {
  advancers: number;
  decliners: number;
  unchanged: number;
  ceiling: number; // locked limit-up
  floor: number; // locked limit-down
}

export interface VnForeignTicker {
  symbol: string;
  name: string;
  netVndBn: number;
}

/**
 * Foreign buy/sell values from the board include put-through (block) deals,
 * while `VnMarketData.turnoverVndBn` counts order-matched value only — SSI
 * publishes no put-through total. A single block can therefore make one
 * ticker's foreign flow exceed its matched turnover, which is not a bug. The
 * prompt states both definitions so the two are never compared as like figures.
 */
export interface VnForeignFlow {
  buyVndBn: number;
  sellVndBn: number;
  netVndBn: number;
  topBuys: VnForeignTicker[];
  topSells: VnForeignTicker[];
}

export interface VnFuturesBasis {
  futures: number; // VN30F1M close
  spot: number; // VN30 close
  basis: number; // futures - spot, index points
  basisPct: number;
  asOf: string;
}

export interface VnMarketData {
  indices: VnIndexQuote[];
  breadth: VnBreadth | null;
  turnoverVndBn: number | null; // HOSE + HNX matched value
  foreign: VnForeignFlow | null;
  futuresBasis: VnFuturesBasis | null;
  tradingDate: string; // YYYY-MM-DD from the board, or "" if unavailable
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const SSI_BOARD = "https://iboard-query.ssi.com.vn/stock/exchange";
const SSI_REFERER = "https://iboard.ssi.com.vn/";
const ENTRADE_CHART = "https://services.entrade.com.vn/chart-api/v2/ohlcs";

const EXCHANGES = ["hose", "hnx"] as const;

const INDEX_SPECS = [
  { symbol: "VNINDEX", label: "VN-Index", kind: "index" },
  { symbol: "VN30", label: "VN30", kind: "index" },
] as const;

const FETCH_TIMEOUT_MS = 30_000;
const TOP_FOREIGN = 5;

/** Daily bars going ~4 months back — enough for a 20-session change. */
const BAR_WINDOW_SEC = 120 * 24 * 60 * 60;

// ---------------------------------------------------------------------------
// Fetch helpers
// ---------------------------------------------------------------------------

async function getJson<T>(url: string, referer?: string): Promise<T> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const resp = await fetch(url, {
      headers: {
        "User-Agent": BROWSER_UA,
        Accept: "application/json, text/plain, */*",
        ...(referer ? { Referer: referer, Origin: new URL(referer).origin } : {}),
      },
      signal: controller.signal,
    });
    if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
    return (await resp.json()) as T;
  } finally {
    clearTimeout(timer);
  }
}

// ---------------------------------------------------------------------------
// SSI price board — breadth, turnover, foreign flow
// ---------------------------------------------------------------------------

interface SsiRow {
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
  tradingDate?: string; // YYYYMMDD
}

const toVndBn = (v: number): number => Math.round((v / 1e9) * 10) / 10;

/** "20260728" → "2026-07-28"; anything else → "". */
function formatTradingDate(raw: string | undefined): string {
  if (!raw || !/^\d{8}$/.test(raw)) return "";
  return `${raw.slice(0, 4)}-${raw.slice(4, 6)}-${raw.slice(6, 8)}`;
}

/**
 * Fold the raw board rows into breadth / turnover / foreign flow.
 *
 * Only rows that actually traded are counted: an untraded ticker has no
 * direction, and counting it as "unchanged" would inflate that bucket by the
 * ~30 illiquid names that never print on a given day.
 */
export function aggregateBoard(rows: SsiRow[]): {
  breadth: VnBreadth;
  turnoverVndBn: number;
  foreign: VnForeignFlow;
  tradingDate: string;
  traded: number;
} {
  const breadth: VnBreadth = { advancers: 0, decliners: 0, unchanged: 0, ceiling: 0, floor: 0 };
  let turnover = 0;
  let foreignBuy = 0;
  let foreignSell = 0;
  const perTicker: VnForeignTicker[] = [];
  let tradingDate = "";
  let traded = 0;

  for (const row of rows) {
    // Skip warrants and bonds — only ordinary shares ("s") belong in breadth.
    if (row.stockType && row.stockType !== "s") continue;
    if (!tradingDate) tradingDate = formatTradingDate(row.tradingDate);

    const value = row.nmTotalTradedValue ?? 0;
    turnover += value;

    const buy = row.buyForeignValue ?? 0;
    const sell = row.sellForeignValue ?? 0;
    foreignBuy += buy;
    foreignSell += sell;
    const net = buy - sell;
    if (net !== 0 && row.stockSymbol) {
      perTicker.push({
        symbol: row.stockSymbol,
        name: row.companyNameEn || row.companyNameVi || row.stockSymbol,
        netVndBn: toVndBn(net),
      });
    }

    if (value <= 0) continue;
    traded++;
    const chg = row.priceChangePercent ?? 0;
    if (chg > 0) breadth.advancers++;
    else if (chg < 0) breadth.decliners++;
    else breadth.unchanged++;

    const matched = row.matchedPrice ?? 0;
    if (matched > 0 && row.ceiling && matched >= row.ceiling) breadth.ceiling++;
    if (matched > 0 && row.floor && matched <= row.floor) breadth.floor++;
  }

  const byNetDesc = [...perTicker].sort((a, b) => b.netVndBn - a.netVndBn);
  return {
    breadth,
    turnoverVndBn: toVndBn(turnover),
    foreign: {
      buyVndBn: toVndBn(foreignBuy),
      sellVndBn: toVndBn(foreignSell),
      netVndBn: toVndBn(foreignBuy - foreignSell),
      topBuys: byNetDesc.filter((t) => t.netVndBn > 0).slice(0, TOP_FOREIGN),
      topSells: byNetDesc
        .filter((t) => t.netVndBn < 0)
        .slice(-TOP_FOREIGN)
        .reverse(),
    },
    tradingDate,
    traded,
  };
}

async function fetchBoard(): Promise<{
  breadth: VnBreadth;
  turnoverVndBn: number;
  foreign: VnForeignFlow;
  tradingDate: string;
} | null> {
  const results = await Promise.all(
    EXCHANGES.map(async (ex) => {
      try {
        const json = await getJson<{ data?: SsiRow[] }>(`${SSI_BOARD}/${ex}`, SSI_REFERER);
        const rows = json.data ?? [];
        console.log(`  [vnmarket] ${ex} board: ${rows.length} rows`);
        return rows;
      } catch (err) {
        console.error(`  [vnmarket] ${ex} board failed: ${err}`);
        return [] as SsiRow[];
      }
    }),
  );

  const rows = results.flat();
  if (rows.length === 0) return null;

  const agg = aggregateBoard(rows);
  // The pipeline runs at 07:00 ICT, before the open. The board should still be
  // showing the previous session's completed figures; if it has already reset,
  // nothing has traded and the flow numbers are meaningless rather than zero.
  if (agg.traded === 0) {
    console.error("  [vnmarket] board has no traded rows — session not settled, dropping flow data");
    return null;
  }
  console.log(
    `  [vnmarket] ${agg.tradingDate || "?"}: turnover ${agg.turnoverVndBn}bn, ` +
      `foreign net ${agg.foreign.netVndBn}bn, breadth ${agg.breadth.advancers}/${agg.breadth.decliners}`,
  );
  return agg;
}

// ---------------------------------------------------------------------------
// Entrade bars — index levels and futures basis
// ---------------------------------------------------------------------------

interface EntradeBars {
  t?: number[];
  c?: number[];
}

async function fetchBars(
  kind: "index" | "derivative" | "stock",
  symbol: string,
): Promise<EntradeBars | null> {
  const to = Math.floor(Date.now() / 1000);
  const from = to - BAR_WINDOW_SEC;
  try {
    const json = await getJson<EntradeBars>(
      `${ENTRADE_CHART}/${kind}?from=${from}&to=${to}&symbol=${symbol}&resolution=1D`,
    );
    if (!json.c?.length || !json.t?.length) throw new Error("empty series");
    return json;
  } catch (err) {
    console.error(`  [vnmarket] bars ${symbol} failed: ${err}`);
    return null;
  }
}

const pctChange = (now: number, then: number | undefined): number | null =>
  then === undefined || then === 0 ? null : Math.round(((now - then) / then) * 1000) / 10;

/** Latest close plus 1/5/20-session changes. Bars arrive oldest-first. */
export function quoteFromBars(symbol: string, label: string, bars: EntradeBars): VnIndexQuote | null {
  const closes = bars.c ?? [];
  const times = bars.t ?? [];
  const last = closes.length - 1;
  const close = closes[last];
  if (close === undefined) return null;

  const at = (back: number): number | undefined => closes[last - back];
  const ts = times[last];
  return {
    symbol,
    label,
    close: Math.round(close * 100) / 100,
    changePct1d: pctChange(close, at(1)),
    changePct5d: pctChange(close, at(5)),
    changePct20d: pctChange(close, at(20)),
    asOf: ts === undefined ? "" : new Date(ts * 1000).toISOString().slice(0, 10),
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function fetchVnMarketData(): Promise<VnMarketData> {
  console.log("  [vnmarket] Fetching SSI board + Entrade bars...");

  const [board, indexBars, futuresBars] = await Promise.all([
    fetchBoard().catch((err) => {
      console.error(`  [vnmarket] board failed: ${err}`);
      return null;
    }),
    Promise.all(INDEX_SPECS.map((s) => fetchBars(s.kind, s.symbol))),
    fetchBars("derivative", "VN30F1M"),
  ]);

  const indices: VnIndexQuote[] = [];
  INDEX_SPECS.forEach((spec, i) => {
    const bars = indexBars[i];
    const quote = bars ? quoteFromBars(spec.symbol, spec.label, bars) : null;
    if (quote) indices.push(quote);
  });

  const vn30 = indices.find((q) => q.symbol === "VN30");
  const futuresQuote = futuresBars ? quoteFromBars("VN30F1M", "VN30F1M", futuresBars) : null;
  const futuresBasis: VnFuturesBasis | null =
    vn30 && futuresQuote && vn30.close !== 0
      ? {
          futures: futuresQuote.close,
          spot: vn30.close,
          basis: Math.round((futuresQuote.close - vn30.close) * 100) / 100,
          basisPct: Math.round(((futuresQuote.close - vn30.close) / vn30.close) * 1000) / 10,
          asOf: futuresQuote.asOf,
        }
      : null;

  const fetchSuccess = indices.length > 0 || board !== null;
  if (!fetchSuccess) console.error("  [vnmarket] no market data available this run");

  return {
    indices,
    breadth: board?.breadth ?? null,
    turnoverVndBn: board?.turnoverVndBn ?? null,
    foreign: board?.foreign ?? null,
    futuresBasis,
    tradingDate: board?.tradingDate || (indices[0]?.asOf ?? ""),
    fetchSuccess,
  };
}
