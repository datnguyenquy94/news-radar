/**
 * Persistent cookie jar, keyed by host and backed by `session.json`.
 *
 * Exactly one upstream in this pipeline needs it. SBV (sbv.gov.vn) sits behind
 * a WAF that hands out a session cookie on the public homepage and rejects any
 * request to `/o/headless-delivery/...` that does not carry it — with HTTP 200
 * and an HTML "Request Rejected" page, not a 403, so the failure is invisible
 * to a status check. The handshake is therefore: read the jar, GET the
 * homepage if it is cold, then call the API with the cookies it set.
 *
 * That cache is the reason this module exists in `core/` rather than in
 * `platform/state/`. It is transport state, not run state: nothing downstream
 * consumes it, and threading a jar from `cli/daily.ts` through the feed and
 * into the provider — plus through every probe and live test — would push a
 * WAF detail into four layers that have no business knowing about it. It stays
 * next to `http.ts`, which is the only other module that knows what a header
 * is, and `session.json` is git-ignored because it holds a live session.
 *
 * A cold or stale jar is never an error: the provider re-runs the handshake.
 */

import fs from "node:fs";
import { createLogger } from "./logger.ts";

const log = createLogger("cookies");

/** Written to the process's working directory, like `digests/web-state.json`. */
const SESSION_PATH = "session.json";

/** Cookie name → value, for one host. */
export type CookieJar = Record<string, string>;

type SessionFile = Record<string, CookieJar>;

function readSessionFile(): SessionFile {
  try {
    if (!fs.existsSync(SESSION_PATH)) return {};
    const parsed: unknown = JSON.parse(fs.readFileSync(SESSION_PATH, "utf-8"));
    // A hand-edited or truncated file must degrade to "cold jar", never throw:
    // the only cost of losing it is one extra homepage GET.
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return {};
    return parsed as SessionFile;
  } catch (err) {
    log.warn(`could not read ${SESSION_PATH} (${err}) — starting from a cold jar`);
    return {};
  }
}

/** Cookies previously stored for `host`; `{}` when none. */
export function loadCookies(host: string): CookieJar {
  const jar = readSessionFile()[host];
  if (!jar || typeof jar !== "object") return {};
  log.debug({ host, cookies: Object.keys(jar).length }, "loaded session cookies");
  return { ...jar };
}

/** Replace this host's entry, leaving other hosts in the file untouched. */
export function saveCookies(host: string, jar: CookieJar): void {
  try {
    const session = readSessionFile();
    session[host] = jar;
    fs.writeFileSync(SESSION_PATH, `${JSON.stringify(session, null, 2)}\n`);
    log.debug({ host, cookies: Object.keys(jar).length }, `saved session cookies to ${SESSION_PATH}`);
  } catch (err) {
    // A read-only checkout still works — it just re-handshakes every run.
    log.warn(`could not write ${SESSION_PATH}: ${err}`);
  }
}

/** `Cookie` header value for a jar, or "" when it is empty. */
export function cookieHeader(jar: CookieJar): string {
  return Object.entries(jar)
    .map(([name, value]) => `${name}=${value}`)
    .join("; ");
}

/** True when a `Set-Cookie` line is the server deleting the cookie. */
function isDeletion(attributes: string[]): boolean {
  for (const attr of attributes) {
    const [rawKey = "", rawValue = ""] = attr.split("=", 2);
    const key = rawKey.trim().toLowerCase();
    if (key === "max-age" && Number(rawValue.trim()) <= 0) return true;
    if (key === "expires") {
      const at = Date.parse(rawValue.trim());
      if (Number.isFinite(at) && at <= Date.now()) return true;
    }
  }
  return false;
}

/**
 * Fold a response's `Set-Cookie` lines into `jar`, returning a new jar.
 *
 * Attributes other than deletion are ignored on purpose: this jar serves one
 * host over one path for the length of a single run, so Domain/Path/Secure
 * scoping would only ever reject cookies we are about to send back anyway.
 */
export function mergeSetCookie(jar: CookieJar, resp: Response): CookieJar {
  const merged = { ...jar };
  for (const line of resp.headers.getSetCookie()) {
    const [pair = "", ...attributes] = line.split(";");
    const eq = pair.indexOf("=");
    if (eq <= 0) continue;
    const name = pair.slice(0, eq).trim();
    const value = pair.slice(eq + 1).trim();
    if (!name) continue;
    if (isDeletion(attributes)) delete merged[name];
    else merged[name] = value;
  }
  return merged;
}
