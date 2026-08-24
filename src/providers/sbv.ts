/**
 * State Bank of Vietnam (sbv.gov.vn) — policy rates and the interbank market.
 *
 * Two traps here.
 *
 * 1. **The WAF.** Every `/o/headless-delivery/...` call needs the session
 *    cookies the public homepage sets. Without them the endpoint answers
 *    **HTTP 200** with an HTML "Request Rejected" page, so a status check sees
 *    success and a JSON parse sees garbage. `ensureSession` runs the handshake
 *    — GET `https://sbv.gov.vn/vi/trang-chu`, keep its `Set-Cookie` — and the
 *    jar is cached in `session.json` (see `core/cookies.ts`) so a local run
 *    pays for it once rather than once per call.
 *
 * 2. **The envelope.** SBV publishes through Liferay's headless-delivery API,
 *    which wraps the DDM (XML) structure behind each article in a deeply
 *    nested JSON envelope: the repeatable field set that holds one tenor's rate
 *    arrives as its own `contentFields` entry with the tenor, the rate and the
 *    turnover as sibling `nestedContentFields`. 50 interbank days is ~700 KB of
 *    that, carrying ~350 numbers. `parseInterbankDays` reduces it before
 *    anything else sees it.
 *
 * Ordering matters too: the collection's default order is neither
 * chronological nor stable, so every read passes `sort=dateCreated:desc` and
 * the parser re-sorts on the *effective* date (`ngayApDung`) anyway — SBV
 * occasionally publishes two sessions out of order after a holiday.
 */

import { BROWSER_UA, DOC_ACCEPT, JSON_ACCEPT, httpRequest } from "../core/http.ts";
import { cookieHeader, loadCookies, mergeSetCookie, saveCookies, type CookieJar } from "../core/cookies.ts";
import { createLogger } from "../core/logger.ts";

const log = createLogger("sbv");

// ---------------------------------------------------------------------------
// Endpoints
// ---------------------------------------------------------------------------

const SBV_HOST = "sbv.gov.vn";
const SBV_HOME = "https://sbv.gov.vn/vi/trang-chu";
const SBV_API = "https://sbv.gov.vn/o/headless-delivery/v1.0/content-structures";
const SBV_TIMEOUT_MS = 45_000;

/** "Các mức lãi suất do Ngân hàng Nhà nước quy định" — the standing policy rates. */
export const SBV_POLICY_STRUCTURE_ID = "3450482";

/** "Lãi suất thị trường liên ngân hàng" — one record per trading session. */
export const SBV_INTERBANK_STRUCTURE_ID = "3450260";

/**
 * Records per request. The feed needs 31 sessions (latest plus a 30-session
 * lookback) and SBV skips weekends and holidays, so 50 leaves headroom for a
 * Tet-length gap without a second page.
 */
export const SBV_DEFAULT_LIMIT = 50;

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

/** One row of "Các mức lãi suất do Ngân hàng Nhà nước quy định". */
export interface SbvPolicyRate {
  /** Vietnamese rate name, e.g. "Lãi suất tái cấp vốn". */
  name: string;
  /** Parsed percent, or null when SBV publishes a non-numeric value. */
  ratePct: number | null;
  /** The published string, kept verbatim — SBV quotes "4,500%", not "4.5%". */
  raw: string;
  /** The decision that set it, e.g. "1123/QĐ-NHNN ngày 16/06/2023". */
  decision: string;
}

export interface SbvPolicyBoard {
  /** `ngayApDung` — the date the rates took effect (ISO, `YYYY-MM-DD`). */
  effectiveDate: string;
  rates: SbvPolicyRate[];
}

/** One tenor's row in a session's interbank table. */
export interface SbvInterbankRow {
  /** Vietnamese tenor label, e.g. "Qua đêm", "1 Tuần". */
  tenor: string;
  ratePct: number | null;
  /** "Doanh số (Tỷ đồng)" — turnover in VND billions. */
  volumeVndBn: number | null;
}

/** One published trading session. */
export interface SbvInterbankDay {
  /** `ngayApDung` (ISO, `YYYY-MM-DD`) — the session the rates describe. */
  date: string;
  rows: SbvInterbankRow[];
}

// ---------------------------------------------------------------------------
// Session handshake
// ---------------------------------------------------------------------------

let jar: CookieJar | null = null;

/**
 * The handshake in flight, if any. The feed fetches the policy board and the
 * interbank board concurrently, so a cold jar would otherwise send two
 * homepage GETs and have the second overwrite the first's stored session.
 */
let handshakeInFlight: Promise<CookieJar> | null = null;

/** The WAF's rejection page — served with HTTP 200, so only the body reveals it. */
function isRejection(body: string): boolean {
  return /Request Rejected|support ID/i.test(body.slice(0, 600));
}

/** GET the homepage purely for its `Set-Cookie`, and persist the result. */
async function handshake(): Promise<CookieJar> {
  log.info("refreshing sbv.gov.vn session cookies");
  const resp = await httpRequest(SBV_HOME, {
    ua: BROWSER_UA,
    accept: DOC_ACCEPT,
    acceptLanguage: "vi-VN,vi;q=0.9,en;q=0.8",
    timeoutMs: SBV_TIMEOUT_MS,
  });
  // Drain: the cookies are in the headers, but an unread body holds the socket.
  await resp.text();
  // From an *empty* jar, not the stored one. A refresh happens precisely
  // because the stored jar was rejected, and the homepage does not reissue
  // every cookie — merging onto it would carry the poisoned one straight back.
  const fresh = mergeSetCookie({}, resp);
  if (Object.keys(fresh).length === 0) {
    throw new Error("sbv homepage set no cookies — the anti-bot handshake changed");
  }
  saveCookies(SBV_HOST, fresh);
  return fresh;
}

/** The cached jar, running the handshake when it is cold or `force` is set. */
async function ensureSession(force = false): Promise<CookieJar> {
  if (!force) {
    jar ??= loadCookies(SBV_HOST);
    if (Object.keys(jar).length > 0) return jar;
    // A concurrent caller may already be handshaking; join it rather than
    // starting a second one.
    if (handshakeInFlight) return handshakeInFlight;
  }
  handshakeInFlight = handshake().finally(() => (handshakeInFlight = null));
  jar = await handshakeInFlight;
  return jar;
}

/**
 * GET one headless-delivery page as JSON.
 *
 * A stored jar goes stale silently, so a rejected or unparseable body is
 * retried exactly once behind a fresh handshake. Anything that fails twice is
 * a real outage or a shape change, and throws.
 */
async function sbvGetJson<T>(url: string, params: Record<string, string>): Promise<T> {
  for (let attempt = 1; attempt <= 2; attempt++) {
    const cookies = await ensureSession(attempt > 1);
    const resp = await httpRequest(url, {
      params,
      ua: BROWSER_UA,
      accept: JSON_ACCEPT,
      acceptLanguage: "vi-VN,vi;q=0.9,en;q=0.8",
      referer: SBV_HOME,
      headers: { Cookie: cookieHeader(cookies) },
      timeoutMs: SBV_TIMEOUT_MS,
    });
    // Cookies rotate on nearly every response; keep the jar current.
    jar = mergeSetCookie(cookies, resp);
    saveCookies(SBV_HOST, jar);

    const body = await resp.text();
    if (!isRejection(body)) {
      try {
        return JSON.parse(body) as T;
      } catch (err) {
        if (attempt === 2) throw new Error(`sbv returned unparseable JSON: ${err}`);
      }
    }
    if (attempt === 2) throw new Error(`sbv rejected the request after a fresh handshake (${url})`);
    log.warn("sbv rejected the request — retrying behind a fresh handshake");
  }
  // Unreachable: both attempts either return or throw.
  throw new Error("sbv request failed");
}

// ---------------------------------------------------------------------------
// Liferay envelope
// ---------------------------------------------------------------------------

interface LiferayField {
  name?: string;
  contentFieldValue?: { data?: string; value?: string };
  nestedContentFields?: LiferayField[];
}

interface LiferayItem {
  title?: string;
  dateCreated?: string;
  contentFields?: LiferayField[];
}

interface LiferayPage {
  items?: LiferayItem[];
  totalCount?: number;
}

/** Scalar value of the first field named `name`, or "". */
function fieldText(fields: LiferayField[], name: string): string {
  return fields.find((f) => f.name === name)?.contentFieldValue?.data?.trim() ?? "";
}

/** Every repeat of the field set named `name` (Liferay flattens them as siblings). */
function fieldSets(fields: LiferayField[], name: string): LiferayField[][] {
  return fields.filter((f) => f.name === name).map((f) => f.nestedContentFields ?? []);
}

/**
 * SBV quotes Vietnamese-style: "," is the decimal separator, "." groups
 * thousands, and rates carry a trailing "%". "3,000%" is three percent, not
 * three thousand — reading it the American way would misprice every policy rate
 * by a factor of a thousand.
 */
export function parseVnNumber(raw: string): number | null {
  const cleaned = raw
    // `\s` already covers NBSP; zero-width joiners are not whitespace and SBV
    // does emit them (its own article titles carry a trailing U+200B).
    .replace(/[%\s\u200B-\u200D]/g, "")
    .replace(/\./g, "")
    .replace(/,/g, ".");
  if (cleaned === "") return null;
  const value = Number(cleaned);
  return Number.isFinite(value) ? value : null;
}

/** `2026-08-19T17:00:00Z` → `2026-08-19`; "" when absent or unparseable. */
function isoDay(raw: string): string {
  return /^\d{4}-\d{2}-\d{2}/.test(raw) ? raw.slice(0, 10) : "";
}

// ---------------------------------------------------------------------------
// Parsers — exported so the shape can be probed offline
// ---------------------------------------------------------------------------

/** The standing policy board. Returns null when the collection is empty. */
export function parsePolicyBoard(json: unknown): SbvPolicyBoard | null {
  const item = (json as LiferayPage).items?.[0];
  if (!item) return null;
  const fields = item.contentFields ?? [];

  const rates: SbvPolicyRate[] = [];
  for (const set of fieldSets(fields, "banglaiSuats")) {
    const name = fieldText(set, "loaiLaiSuat");
    const raw = fieldText(set, "giaTri");
    if (!name && !raw) continue;
    rates.push({ name, ratePct: parseVnNumber(raw), raw, decision: fieldText(set, "vanBanQuyetDinh") });
  }
  if (rates.length === 0) return null;

  return { effectiveDate: isoDay(fieldText(fields, "ngayApDung")), rates };
}

/** Published sessions, newest first. Rows keep SBV's own tenor order. */
export function parseInterbankDays(json: unknown): SbvInterbankDay[] {
  const days: SbvInterbankDay[] = [];

  for (const item of (json as LiferayPage).items ?? []) {
    const fields = item.contentFields ?? [];
    const date = isoDay(fieldText(fields, "ngayApDung"));
    if (!date) continue;

    const rows: SbvInterbankRow[] = [];
    for (const set of fieldSets(fields, "laiSuatThiTruongNganHangs")) {
      const tenor = fieldText(set, "thoihan");
      if (!tenor) continue;
      rows.push({
        tenor,
        ratePct: parseVnNumber(fieldText(set, "laiSuatBQLienNganHang")),
        volumeVndBn: parseVnNumber(fieldText(set, "doanhSo")),
      });
    }
    if (rows.length > 0) days.push({ date, rows });
  }

  // SBV backfills late sessions, so publication order is not session order —
  // and it occasionally publishes the same session twice ("… (Sao chép)").
  // Keep the first copy of each date, then order by the session itself.
  const seen = new Set<string>();
  const unique: SbvInterbankDay[] = [];
  for (const day of days) {
    if (seen.has(day.date)) continue;
    seen.add(day.date);
    unique.push(day);
  }
  return unique.sort((a, b) => b.date.localeCompare(a.date));
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/** Throws `HttpError` on transport failure; returns null when SBV publishes no board. */
export async function fetchPolicyBoard(): Promise<SbvPolicyBoard | null> {
  const json = await sbvGetJson<unknown>(`${SBV_API}/${SBV_POLICY_STRUCTURE_ID}/structured-contents`, {
    sort: "dateCreated:desc",
    pageSize: "5",
  });
  return parsePolicyBoard(json);
}

/** The most recent `limit` published sessions, newest first. Throws `HttpError`. */
export async function fetchInterbankDays(limit = SBV_DEFAULT_LIMIT): Promise<SbvInterbankDay[]> {
  const json = await sbvGetJson<unknown>(`${SBV_API}/${SBV_INTERBANK_STRUCTURE_ID}/structured-contents`, {
    sort: "dateCreated:desc",
    pageSize: String(limit),
  });
  return parseInterbankDays(json);
}
