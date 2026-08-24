/**
 * Vietnam interest rates — the single feed behind the `fin-vnrates` report.
 *
 * The report's whole thesis is the *gap* between what the SBV announces and
 * what banks actually pay each other, so the feed pairs the two SBV boards and
 * then adds the two outside numbers that gap cannot be read without:
 *
 *   1. SBV policy board — the refinancing rate is the ceiling of the corridor
 *      and the discount rate its floor. It is a step function: one standing
 *      record, unchanged since June 2023, so the useful derived figure is how
 *      long it has stood, not a percent change.
 *   2. SBV interbank board — one record per session, seven tenors each. This is
 *      the live signal, and the only half with history.
 *   3. FRED `DFF` — the effective fed funds rate. An overnight VND rate below
 *      USD overnight is what turns a rate cut into a carry trade out of the
 *      dong, so the VND-USD spread is the binding constraint on SBV easing.
 *   4. Vietcombank USD/VND — whether that constraint is currently biting.
 *
 * Rate moves are carried as **percentage points** (`changePp*`) *and* as
 * relative percent (`changePct*`). A 3.01% overnight rate that was 4.02%
 * yesterday is −1.01pp and −25%; quoting only one of those is how a report ends
 * up describing a one-point move as a quarter-scale collapse, or vice versa.
 *
 * Degrade policy: `fetchSuccess` mirrors the interbank board alone. Without it
 * there is no market read — the policy board on its own is a three-year-old
 * constant, and the FRED/VCB legs are context.
 */

import {
  SBV_DEFAULT_LIMIT,
  fetchInterbankDays,
  fetchPolicyBoard,
  type SbvInterbankDay,
  type SbvPolicyRate,
} from "../../providers/sbv.ts";
import { fetchFredSeries } from "../../providers/fred.ts";
import { fetchUsdBoardNear } from "../../providers/vietcombank.ts";
import { createLogger } from "../../core/logger.ts";

const log = createLogger("vnrates");

// ---------------------------------------------------------------------------
// Report-shaped configuration
// ---------------------------------------------------------------------------

/**
 * Lookbacks, in *published sessions* rather than calendar days. SBV publishes
 * on business days only, so 20 sessions is roughly a month and 30 roughly six
 * weeks — the same basis the rest of the pipeline's daily series use.
 */
const LOOKBACKS = [1, 20, 30] as const;

/** SBV's own tenor order, shortest first. Anything unlisted is appended as-is. */
const TENOR_ORDER = ["Qua đêm", "1 Tuần", "2 Tuần", "1 Tháng", "3 Tháng", "6 Tháng", "9 Tháng", "1 Năm"];

/** The two tenors that carry essentially all interbank turnover. */
const SHORT_END = ["Qua đêm", "1 Tuần"];

/** Which policy rows anchor the corridor. Matched on SBV's Vietnamese labels. */
const REFINANCING = "tái cấp vốn";
const DISCOUNT = "tái chiết khấu";

/** Sessions kept in the compact history series handed to the prompt. */
const HISTORY_POINTS = 30;

/** How far back the fed-funds and FX comparisons reach. */
const FRED_OBSERVATIONS = 40;
const FX_LOOKBACK_DAYS = 30;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface VnPolicyRate extends SbvPolicyRate {
  /** True for the row that sets the corridor ceiling (lãi suất tái cấp vốn). */
  isRefinancing: boolean;
}

export interface VnPolicyBoard {
  effectiveDate: string;
  /** Calendar days the board has stood unchanged — the only "change" it has. */
  daysSinceEffective: number | null;
  rates: VnPolicyRate[];
}

/** One tenor, latest reading plus its 1 / 20 / 30-session moves. */
export interface VnInterbankTenor {
  tenor: string;
  ratePct: number | null;
  /** Percentage-point move — the unit rate moves are actually quoted in. */
  changePp1d: number | null;
  changePp20d: number | null;
  changePp30d: number | null;
  /** The same moves relative to the earlier level. */
  changePct1d: number | null;
  changePct20d: number | null;
  changePct30d: number | null;
  /** Turnover in VND billions ("Doanh số (Tỷ đồng)"). */
  volumeVndBn: number | null;
  volumeChangePct1d: number | null;
  volumeChangePct20d: number | null;
  volumeChangePct30d: number | null;
}

export interface VnInterbankBoard {
  /** Session the latest reading describes. */
  asOf: string;
  /** The session dates each lookback resolved to, so the report can name them. */
  comparedWith: { d1: string; d20: string; d30: string };
  /** Sessions available in this fetch — under 31 means a lookback is null. */
  sessions: number;
  tenors: VnInterbankTenor[];
  totalVolumeVndBn: number | null;
  /** Overnight + 1-week share of turnover; a high share means short-dated stress. */
  shortEndSharePct: number | null;
}

/**
 * The derived reads the analysis framework turns on. Every field is a
 * difference in percentage points, so a null means one of its two legs is
 * missing rather than that the spread is zero.
 */
export interface VnRateSpreads {
  refinancingPct: number | null;
  discountPct: number | null;
  overnightPct: number | null;
  oneWeekPct: number | null;
  threeMonthPct: number | null;
  /** Overnight minus the refinancing rate. Positive = policy is not transmitting. */
  policyGapOvernightPp: number | null;
  /** 1-week minus the refinancing rate — the framework's "effectiveness score". */
  policyGapOneWeekPp: number | null;
  /** 3-month minus overnight. Negative = an inverted, crunch-pricing curve. */
  curveSlopePp: number | null;
  fedFundsPct: number | null;
  fedFundsAsOf: string;
  /** Overnight VND minus effective fed funds. Negative = carry-trade pressure. */
  vndUsdSpreadPp: number | null;
}

export interface VnRatesFx {
  sell: number;
  transfer: number;
  asOf: string;
  changePct1m: number | null;
}

/** One session of the compact trend series (newest first). */
export interface VnRatesHistoryPoint {
  date: string;
  overnightPct: number | null;
  oneWeekPct: number | null;
  totalVolumeVndBn: number | null;
}

export interface VnRatesData {
  policy: VnPolicyBoard | null;
  interbank: VnInterbankBoard | null;
  spreads: VnRateSpreads | null;
  fx: VnRatesFx | null;
  history: VnRatesHistoryPoint[];
  /** Mirrors the interbank board alone — see the module header. */
  fetchSuccess: boolean;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const round = (value: number, decimals: number): number => {
  const f = 10 ** decimals;
  return Math.round(value * f) / f;
};

/** Percentage-point difference, null when either leg is missing. */
const diffPp = (latest: number | null, prior: number | null | undefined): number | null =>
  latest == null || prior == null ? null : round(latest - prior, 2);

/** Relative change, null when either leg is missing or the base is zero. */
const diffPct = (latest: number | null, prior: number | null | undefined): number | null =>
  latest == null || prior == null || prior === 0 ? null : round(((latest - prior) / prior) * 100, 2);

/** Whole days between two ISO dates, or null when either is unparseable. */
function daysBetween(from: string, to: Date): number | null {
  const at = Date.parse(from);
  if (!Number.isFinite(at)) return null;
  return Math.floor((to.getTime() - at) / (24 * 60 * 60 * 1000));
}

/** One tenor's row in the session `index` sessions back. */
function rowAt(days: SbvInterbankDay[], index: number, tenor: string) {
  return days[index]?.rows.find((r) => r.tenor === tenor);
}

/** Session turnover across every tenor; null when the session carries no numbers. */
function totalVolume(day: SbvInterbankDay | undefined): number | null {
  if (!day) return null;
  const values = day.rows.map((r) => r.volumeVndBn).filter((v): v is number => v != null);
  return values.length === 0 ? null : values.reduce((sum, v) => sum + v, 0);
}

// ---------------------------------------------------------------------------
// Assembly
// ---------------------------------------------------------------------------

function buildPolicyBoard(
  board: { effectiveDate: string; rates: SbvPolicyRate[] } | null,
  now: Date,
): VnPolicyBoard | null {
  if (!board) return null;
  return {
    effectiveDate: board.effectiveDate,
    daysSinceEffective: board.effectiveDate ? daysBetween(board.effectiveDate, now) : null,
    rates: board.rates.map((r) => ({ ...r, isRefinancing: r.name.toLowerCase().includes(REFINANCING) })),
  };
}

function buildInterbankBoard(days: SbvInterbankDay[]): VnInterbankBoard | null {
  const latest = days[0];
  if (!latest) return null;

  // Every tenor SBV has published across the window, not just today's — a tenor
  // that stopped trading should still appear, with a null latest reading.
  const tenors = [...new Set(days.flatMap((d) => d.rows.map((r) => r.tenor)))].sort((a, b) => {
    const ia = TENOR_ORDER.indexOf(a);
    const ib = TENOR_ORDER.indexOf(b);
    return (ia === -1 ? TENOR_ORDER.length : ia) - (ib === -1 ? TENOR_ORDER.length : ib);
  });

  const rows: VnInterbankTenor[] = tenors.map((tenor) => {
    const now = rowAt(days, 0, tenor);
    const [d1, d20, d30] = LOOKBACKS.map((n) => rowAt(days, n, tenor));
    const rate = now?.ratePct ?? null;
    const volume = now?.volumeVndBn ?? null;
    return {
      tenor,
      ratePct: rate,
      changePp1d: diffPp(rate, d1?.ratePct),
      changePp20d: diffPp(rate, d20?.ratePct),
      changePp30d: diffPp(rate, d30?.ratePct),
      changePct1d: diffPct(rate, d1?.ratePct),
      changePct20d: diffPct(rate, d20?.ratePct),
      changePct30d: diffPct(rate, d30?.ratePct),
      volumeVndBn: volume,
      volumeChangePct1d: diffPct(volume, d1?.volumeVndBn),
      volumeChangePct20d: diffPct(volume, d20?.volumeVndBn),
      volumeChangePct30d: diffPct(volume, d30?.volumeVndBn),
    };
  });

  const total = totalVolume(latest);
  const shortEnd = rows
    .filter((r) => SHORT_END.includes(r.tenor))
    .map((r) => r.volumeVndBn)
    .filter((v): v is number => v != null)
    .reduce((sum, v) => sum + v, 0);

  const [i1, i20, i30] = LOOKBACKS;
  return {
    asOf: latest.date,
    comparedWith: {
      d1: days[i1]?.date ?? "",
      d20: days[i20]?.date ?? "",
      d30: days[i30]?.date ?? "",
    },
    sessions: days.length,
    tenors: rows,
    totalVolumeVndBn: total == null ? null : round(total, 0),
    shortEndSharePct: total != null && total > 0 ? round((shortEnd / total) * 100, 1) : null,
  };
}

function buildSpreads(
  policy: VnPolicyBoard | null,
  interbank: VnInterbankBoard | null,
  fedFunds: { value: number; date: string } | null,
): VnRateSpreads | null {
  if (!interbank) return null;

  const policyRate = (needle: string): number | null =>
    policy?.rates.find((r) => r.name.toLowerCase().includes(needle))?.ratePct ?? null;
  const tenorRate = (tenor: string): number | null =>
    interbank.tenors.find((t) => t.tenor === tenor)?.ratePct ?? null;

  const refinancing = policyRate(REFINANCING);
  const overnight = tenorRate("Qua đêm");
  const oneWeek = tenorRate("1 Tuần");
  const threeMonth = tenorRate("3 Tháng");

  return {
    refinancingPct: refinancing,
    discountPct: policyRate(DISCOUNT),
    overnightPct: overnight,
    oneWeekPct: oneWeek,
    threeMonthPct: threeMonth,
    policyGapOvernightPp: diffPp(overnight, refinancing),
    policyGapOneWeekPp: diffPp(oneWeek, refinancing),
    curveSlopePp: diffPp(threeMonth, overnight),
    fedFundsPct: fedFunds?.value ?? null,
    fedFundsAsOf: fedFunds?.date ?? "",
    vndUsdSpreadPp: diffPp(overnight, fedFunds?.value ?? null),
  };
}

// ---------------------------------------------------------------------------
// Upstream legs
// ---------------------------------------------------------------------------

/** Effective fed funds, newest observation. Null on any failure — it is context. */
async function fetchFedFunds(): Promise<{ value: number; date: string } | null> {
  try {
    const obs = await fetchFredSeries("DFF", FRED_OBSERVATIONS);
    const latest = obs[0];
    if (!latest) throw new Error("no observations");
    return { value: round(latest.value, 2), date: latest.date };
  } catch (err) {
    log.error(`[fred] DFF failed: ${err}`);
    return null;
  }
}

async function fetchFx(now: Date): Promise<VnRatesFx | null> {
  try {
    const [latest, monthAgo] = await Promise.all([
      fetchUsdBoardNear(now),
      fetchUsdBoardNear(new Date(now.getTime() - FX_LOOKBACK_DAYS * 24 * 60 * 60 * 1000)),
    ]);
    if (!latest) throw new Error("no VCB board in the lookback window");
    return {
      sell: latest.sell,
      transfer: latest.transfer,
      asOf: latest.asOf,
      changePct1m: diffPct(latest.sell, monthAgo?.sell ?? null),
    };
  } catch (err) {
    log.error(`[vcb] USD/VND failed: ${err}`);
    return null;
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export async function fetchVnRatesData(now = new Date()): Promise<VnRatesData> {
  log.info("Fetching SBV policy + interbank rates, fed funds and USD/VND...");

  const [policyRaw, days, fedFunds, fx] = await Promise.all([
    // The policy board is a standing record: losing it costs the report its
    // corridor anchor, not its market read, so it degrades to null.
    fetchPolicyBoard().catch((err) => {
      log.error(`[sbv] policy board failed: ${err}`);
      return null;
    }),
    fetchInterbankDays(SBV_DEFAULT_LIMIT).catch((err) => {
      log.error(`[sbv] interbank board failed: ${err}`);
      return [] as SbvInterbankDay[];
    }),
    fetchFedFunds(),
    fetchFx(now),
  ]);

  const policy = buildPolicyBoard(policyRaw, now);
  const interbank = buildInterbankBoard(days);
  const spreads = buildSpreads(policy, interbank, fedFunds);

  const history: VnRatesHistoryPoint[] = days.slice(0, HISTORY_POINTS).map((d) => ({
    date: d.date,
    overnightPct: d.rows.find((r) => r.tenor === "Qua đêm")?.ratePct ?? null,
    oneWeekPct: d.rows.find((r) => r.tenor === "1 Tuần")?.ratePct ?? null,
    totalVolumeVndBn: totalVolume(d),
  }));

  if (interbank) {
    log.info(
      `interbank ${interbank.asOf}: ${interbank.tenors.length} tenors over ${interbank.sessions} sessions, ` +
        `overnight ${spreads?.overnightPct ?? "n/a"}% vs refinancing ${spreads?.refinancingPct ?? "n/a"}%`,
    );
  } else {
    log.error("no interbank sessions parsed — the report will be skipped");
  }

  return { policy, interbank, spreads, fx, history, fetchSuccess: interbank !== null };
}
