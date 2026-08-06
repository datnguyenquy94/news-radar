/**
 * Macro-economic indicators from FRED (Federal Reserve Economic Data,
 * Federal Reserve Bank of St. Louis) — https://fred.stlouisfed.org.
 *
 * A single official, free source covers almost every macro metric we track
 * (policy rate, balance sheet, VIX, yields, credit spread, oil, jobs,
 * inflation, sentiment). Two access paths:
 *
 *   1. JSON API (preferred) — needs a free key in FRED_API_KEY.
 *   2. Keyless CSV fallback — https://fred.stlouisfed.org/graph/fredgraph.csv,
 *      used automatically when FRED_API_KEY is unset.
 *
 * Both paths are normalized to a descending array of { date, value } and share
 * the same per-series transform (level / YoY % / month-over-month change).
 */

import type { Lang } from "../../core/i18n/index.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export type FredGroup = "liquidity" | "yields_credit" | "econ_inflation";

/** How to derive the headline number from a series' raw observations. */
type FredTransform = "level" | "yoy" | "mom_change";

interface FredSeriesSpec {
  id: string; // our slug (used as a stable key)
  series: string; // FRED series id
  group: FredGroup;
  label: Record<Lang, string>;
  unit: string; // display unit, appended after the number
  transform: FredTransform;
  decimals: number;
  scale?: number; // multiply raw value before display (e.g. millions -> trillions)
}

export interface FredMetric {
  id: string;
  series: string;
  group: FredGroup;
  label: Record<Lang, string>;
  unit: string;
  decimals: number; // display precision
  latest: number | null;
  prior: number | null;
  change: number | null; // latest - prior, in display units
  asOf: string; // ISO date of the latest observation, or "" if unavailable
}

export interface FredData {
  metrics: FredMetric[];
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Series catalog — mirrors .agent/specs/financial_data_sources.md
// ---------------------------------------------------------------------------

const FRED_SERIES: FredSeriesSpec[] = [
  // ── Central bank & liquidity ──
  {
    id: "fed-funds",
    series: "DFF",
    group: "liquidity",
    label: { vi: "Lãi suất Fed Funds", en: "Fed Funds Rate" },
    unit: "%",
    transform: "level",
    decimals: 2,
  },
  {
    id: "fed-balance-sheet",
    series: "WALCL",
    group: "liquidity",
    label: { vi: "Bảng cân đối kế toán Fed", en: "Fed Balance Sheet" },
    unit: "$T",
    transform: "level",
    decimals: 2,
    scale: 1e-6,
  },
  {
    id: "vix",
    series: "VIXCLS",
    group: "liquidity",
    label: { vi: "Chỉ số biến động VIX", en: "VIX Volatility Index" },
    unit: "",
    transform: "level",
    decimals: 2,
  },
  // ── Yields & credit ──
  {
    id: "treasury-10y",
    series: "DGS10",
    group: "yields_credit",
    label: { vi: "Lợi suất trái phiếu Mỹ 10 năm", en: "10Y Treasury Yield" },
    unit: "%",
    transform: "level",
    decimals: 2,
  },
  {
    id: "yield-spread-10y-2y",
    series: "T10Y2Y",
    group: "yields_credit",
    label: { vi: "Chênh lệch lợi suất 10Y-2Y", en: "10Y-2Y Spread" },
    unit: "%",
    transform: "level",
    decimals: 2,
  },
  {
    id: "hy-credit-spread",
    series: "BAMLH0A0HYM2",
    group: "yields_credit",
    label: { vi: "Chênh lệch tín dụng trái phiếu lợi suất cao (OAS)", en: "High-Yield Credit Spread (OAS)" },
    unit: "%",
    transform: "level",
    decimals: 2,
  },
  {
    id: "oil-wti",
    series: "DCOILWTICO",
    group: "yields_credit",
    label: { vi: "Dầu thô WTI", en: "WTI Crude Oil" },
    unit: "$/bbl",
    transform: "level",
    decimals: 2,
  },
  {
    id: "oil-brent",
    series: "DCOILBRENTEU",
    group: "yields_credit",
    label: { vi: "Dầu thô Brent", en: "Brent Crude Oil" },
    unit: "$/bbl",
    transform: "level",
    decimals: 2,
  },
  // ── Economic health & inflation ──
  {
    id: "unemployment",
    series: "UNRATE",
    group: "econ_inflation",
    label: { vi: "Tỷ lệ thất nghiệp", en: "Unemployment Rate" },
    unit: "%",
    transform: "level",
    decimals: 1,
  },
  {
    id: "jobless-claims",
    series: "ICSA",
    group: "econ_inflation",
    label: { vi: "Đơn xin trợ cấp thất nghiệp lần đầu", en: "Initial Jobless Claims" },
    unit: "",
    transform: "level",
    decimals: 0,
  },
  {
    id: "nonfarm-payrolls",
    series: "PAYEMS",
    group: "econ_inflation",
    label: {
      vi: "Bảng lương phi nông nghiệp (thay đổi so với tháng trước)",
      en: "Nonfarm Payrolls (MoM chg)",
    },
    unit: "K",
    transform: "mom_change",
    decimals: 0,
  },
  {
    id: "cpi",
    series: "CPIAUCSL",
    group: "econ_inflation",
    label: { vi: "CPI", en: "CPI" },
    unit: "% YoY",
    transform: "yoy",
    decimals: 1,
  },
  {
    id: "core-cpi",
    series: "CPILFESL",
    group: "econ_inflation",
    label: { vi: "CPI lõi", en: "Core CPI" },
    unit: "% YoY",
    transform: "yoy",
    decimals: 1,
  },
  {
    id: "core-pce",
    series: "PCEPILFE",
    group: "econ_inflation",
    label: { vi: "PCE lõi", en: "Core PCE" },
    unit: "% YoY",
    transform: "yoy",
    decimals: 1,
  },
  {
    id: "ppi",
    series: "PPIFIS",
    group: "econ_inflation",
    label: { vi: "PPI (nhu cầu cuối cùng)", en: "PPI (Final Demand)" },
    unit: "% YoY",
    transform: "yoy",
    decimals: 1,
  },
  {
    id: "consumer-sentiment",
    series: "UMCSENT",
    group: "econ_inflation",
    label: {
      vi: "Niềm tin người tiêu dùng Michigan (chỉ số đại diện)",
      en: "UMich Consumer Sentiment (proxy)",
    },
    unit: "",
    transform: "level",
    decimals: 1,
  },
];

// ---------------------------------------------------------------------------
// Fetch helpers
// ---------------------------------------------------------------------------

export interface Observation {
  date: string;
  value: number;
}

const UA = { "User-Agent": "agents-radar/1.0" };
const FRED_API = "https://api.stlouisfed.org/fred/series/observations";
const FRED_CSV = "https://fred.stlouisfed.org/graph/fredgraph.csv";

/** Default observation window — enough for the dashboard's YoY transform. */
const DEFAULT_LIMIT = 14;

/** Descending window of observations (newest first), missing values dropped. */
async function fetchObservations(
  series: string,
  apiKey: string | undefined,
  limit = DEFAULT_LIMIT,
): Promise<Observation[]> {
  if (apiKey) {
    const url =
      `${FRED_API}?series_id=${series}&api_key=${apiKey}` + `&file_type=json&sort_order=desc&limit=${limit}`;
    const resp = await fetch(url, { headers: UA });
    if (!resp.ok) throw new Error(`FRED ${series}: HTTP ${resp.status}`);
    const json = (await resp.json()) as { observations?: { date: string; value: string }[] };
    return (json.observations ?? [])
      .filter((o) => o.value !== "." && o.value !== "")
      .map((o) => ({ date: o.date, value: Number(o.value) }))
      .filter((o) => Number.isFinite(o.value));
  }

  // Keyless CSV fallback. Bound the window (~2.2 years back) so YoY has enough
  // monthly points without pulling decades of daily history.
  const cosd = new Date(Date.now() - 800 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10);
  const resp = await fetch(`${FRED_CSV}?id=${series}&cosd=${cosd}`, { headers: UA });
  if (!resp.ok) throw new Error(`FRED CSV ${series}: HTTP ${resp.status}`);
  const csv = await resp.text();
  const rows = csv.trim().split("\n").slice(1); // drop header
  const parsed: Observation[] = [];
  for (const row of rows) {
    const [date, raw] = row.split(",");
    if (!date || raw === undefined || raw === "." || raw.trim() === "") continue;
    const value = Number(raw);
    if (Number.isFinite(value)) parsed.push({ date, value });
  }
  return parsed.reverse(); // CSV is ascending; normalize to descending
}

// ---------------------------------------------------------------------------
// Transforms
// ---------------------------------------------------------------------------

function round(n: number, decimals: number): number {
  const f = 10 ** decimals;
  return Math.round(n * f) / f;
}

/** Reduce a descending observation window to a headline metric. */
function computeMetric(spec: FredSeriesSpec, obs: Observation[]): FredMetric {
  const base: FredMetric = {
    id: spec.id,
    series: spec.series,
    group: spec.group,
    label: spec.label,
    unit: spec.unit,
    decimals: spec.decimals,
    latest: null,
    prior: null,
    change: null,
    asOf: "",
  };
  if (obs.length === 0) return base;

  const scale = spec.scale ?? 1;
  const asOf = obs[0]!.date;

  if (spec.transform === "level") {
    const latest = round(obs[0]!.value * scale, spec.decimals);
    const prior = obs[1] ? round(obs[1].value * scale, spec.decimals) : null;
    return {
      ...base,
      latest,
      prior,
      change: prior === null ? null : round(latest - prior, spec.decimals),
      asOf,
    };
  }

  if (spec.transform === "mom_change") {
    if (obs.length < 2) return { ...base, asOf };
    const latest = round((obs[0]!.value - obs[1]!.value) * scale, spec.decimals);
    const prior = obs[2] ? round((obs[1]!.value - obs[2].value) * scale, spec.decimals) : null;
    return {
      ...base,
      latest,
      prior,
      change: prior === null ? null : round(latest - prior, spec.decimals),
      asOf,
    };
  }

  // yoy — compare against the observation ~12 periods back (monthly series)
  const yoy = (nowIdx: number): number | null => {
    const now = obs[nowIdx];
    const yearAgo = obs[nowIdx + 12];
    if (!now || !yearAgo || yearAgo.value === 0) return null;
    return round(((now.value - yearAgo.value) / yearAgo.value) * 100, spec.decimals);
  };
  const latest = yoy(0);
  const prior = yoy(1);
  return {
    ...base,
    latest,
    prior,
    change: latest === null || prior === null ? null : round(latest - prior, spec.decimals),
    asOf,
  };
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * One FRED series, newest first — for callers outside the macro dashboard.
 *
 * FRED is a documented public product with an SLA, so it is preferred over
 * scraping an undocumented quote endpoint wherever both carry the series (the
 * Vietnam dashboard sources the US 10Y through here rather than from Yahoo).
 * Uses the JSON API when `FRED_API_KEY` is set, the keyless CSV otherwise.
 */
export async function fetchFredSeries(series: string, limit = 30): Promise<Observation[]> {
  return fetchObservations(series, process.env["FRED_API_KEY"], limit);
}

export async function fetchFredData(): Promise<FredData> {
  const apiKey = process.env["FRED_API_KEY"];
  console.log(`  [fred] Fetching ${FRED_SERIES.length} series via ${apiKey ? "JSON API" : "keyless CSV"}...`);

  const metrics = await Promise.all(
    FRED_SERIES.map(async (spec) => {
      try {
        const obs = await fetchObservations(spec.series, apiKey);
        return computeMetric(spec, obs);
      } catch (err) {
        console.error(`  [fred] ${spec.series} failed: ${err}`);
        return computeMetric(spec, []);
      }
    }),
  );

  const withData = metrics.filter((m) => m.latest !== null).length;
  console.log(`  [fred] ${withData}/${FRED_SERIES.length} series returned data`);
  return { metrics, fetchSuccess: withData > 0 };
}
