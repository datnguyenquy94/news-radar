/**
 * Shared HTTP client for every outbound request in the pipeline.
 *
 * Before this module each fetcher hand-rolled the same four things — a User-Agent
 * header, an AbortController timeout, a `Referer`/`Origin` pair for the
 * undocumented Vietnamese endpoints, and an `if (!resp.ok) throw` line. Six
 * copies had drifted apart (different timeouts, different error wording, one
 * that made auth optional and one that did not).
 *
 * The helpers here are deliberately **policy-free**: they throw `HttpError` on a
 * non-2xx and do nothing else. Whether a failure degrades to an empty result,
 * skips one item of a batch, or aborts the whole fetch stays the caller's
 * decision — that policy belongs with the data source, not with the transport.
 *
 * Headers are opt-in for the same reason. Only `User-Agent` is sent by default,
 * so a request built here is byte-identical to the hand-rolled one it replaced;
 * `Accept` in particular is never inferred (arXiv serves Atom, FRED serves CSV).
 */

import { Agent, request } from "undici";

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

/** Identifies the pipeline to well-behaved public APIs. */
export const DEFAULT_UA = "agents-radar/1.0";

/**
 * Vietnamese government and broker sites reject or blank out non-browser
 * clients, so every request to those presents a desktop Chrome UA.
 */
export const BROWSER_UA =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

/** `Accept` for the undocumented JSON endpoints that check it. */
export const JSON_ACCEPT = "application/json, text/plain, */*";

/** `Accept` for document fetches (HTML articles and PDF bulletins). */
export const DOC_ACCEPT = "text/html,application/xhtml+xml,application/json,application/pdf,*/*";

export const DEFAULT_TIMEOUT_MS = 30_000;

/** Cap on how much of an error response body is carried in the thrown message. */
const MAX_ERROR_BODY = 1_000;

// ---------------------------------------------------------------------------
// Errors
// ---------------------------------------------------------------------------

/**
 * A non-2xx response. `body` is kept separately because some callers match on
 * the upstream payload — `tryCreateGitHubIssue` distinguishes "Issues are
 * disabled" from "token cannot see this repo" only by the 404's JSON body.
 */
export class HttpError extends Error {
  constructor(
    readonly status: number,
    readonly url: string,
    readonly body = "",
  ) {
    super(`HTTP ${status} (${url})${body ? `: ${body}` : ""}`);
    this.name = "HttpError";
  }
}

// ---------------------------------------------------------------------------
// Core request
// ---------------------------------------------------------------------------

export interface HttpOptions {
  method?: string;
  /** Appended as query parameters. Omit to send `url` verbatim — GitHub's search
   *  syntax uses raw `+` and `>`, which `URLSearchParams` would re-encode. */
  params?: Record<string, string>;
  headers?: Record<string, string>;
  body?: string;
  /** Serialized as the JSON request body; sets `Content-Type` automatically. */
  json?: unknown;
  /** `User-Agent`; defaults to `DEFAULT_UA`. Pass `BROWSER_UA` for sites that screen it. */
  ua?: string;
  /** Sent only when set — never inferred from the expected response type. */
  accept?: string;
  acceptLanguage?: string;
  /** Sets both `Referer` and its `Origin`, which the SSI/Entrade/VCB endpoints require. */
  referer?: string;
  timeoutMs?: number;
  /** Set false to receive the `Response` on a non-2xx instead of a thrown
   *  `HttpError` — for callers that treat some failure statuses as success
   *  (a 422 from GitHub's labels endpoint means "already exists"). */
  throwOnError?: boolean;
}

function buildUrl(url: string, params?: Record<string, string>): string {
  if (!params || Object.keys(params).length === 0) return url;
  const u = new URL(url);
  for (const [k, v] of Object.entries(params)) u.searchParams.set(k, v);
  return u.toString();
}

function buildHeaders(opts: HttpOptions): Record<string, string> {
  return {
    "User-Agent": opts.ua ?? DEFAULT_UA,
    ...(opts.accept ? { Accept: opts.accept } : {}),
    ...(opts.acceptLanguage ? { "Accept-Language": opts.acceptLanguage } : {}),
    ...(opts.referer ? { Referer: opts.referer, Origin: new URL(opts.referer).origin } : {}),
    ...(opts.json !== undefined ? { "Content-Type": "application/json" } : {}),
    ...opts.headers,
  };
}

/**
 * GET (or `opts.method`) with a hard timeout. Throws `HttpError` on a non-2xx,
 * with the response body attached.
 */
export async function httpRequest(url: string, opts: HttpOptions = {}): Promise<Response> {
  const target = buildUrl(url, opts.params);
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), opts.timeoutMs ?? DEFAULT_TIMEOUT_MS);
  try {
    const resp = await fetch(target, {
      ...(opts.method ? { method: opts.method } : {}),
      headers: buildHeaders(opts),
      ...(opts.json !== undefined ? { body: JSON.stringify(opts.json) } : {}),
      ...(opts.body !== undefined ? { body: opts.body } : {}),
      signal: controller.signal,
    });
    if (!resp.ok && opts.throwOnError !== false) {
      throw new HttpError(resp.status, target, (await resp.text().catch(() => "")).slice(0, MAX_ERROR_BODY));
    }
    return resp;
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchText(url: string, opts: HttpOptions = {}): Promise<string> {
  return (await httpRequest(url, opts)).text();
}

export async function fetchJson<T>(url: string, opts: HttpOptions = {}): Promise<T> {
  return (await httpRequest(url, opts)).json() as Promise<T>;
}

/**
 * Browser-flavoured JSON GET.
 *
 * The undocumented endpoints — SSI, Entrade, Vietcombank, Yahoo, World Bank —
 * screen the User-Agent, and several also require a `Referer`/`Origin` pair
 * matching their own site; a bare fetch gets 403 or an empty body.
 */
export function fetchJsonAsBrowser<T>(
  url: string,
  referer?: string,
  timeoutMs = DEFAULT_TIMEOUT_MS,
): Promise<T> {
  return fetchJson<T>(url, {
    ua: BROWSER_UA,
    accept: JSON_ACCEPT,
    timeoutMs,
    ...(referer ? { referer } : {}),
  });
}

/**
 * Browser-flavoured document GET: Chrome UA plus the `Accept` headers the
 * Vietnamese document sources expect. Returns the raw `Response` so the caller
 * can choose `.text()` (HTML) or `.arrayBuffer()` (PDF).
 */
export function fetchWithTimeout(
  url: string,
  { timeoutMs = DEFAULT_TIMEOUT_MS, referer }: { timeoutMs?: number; referer?: string } = {},
): Promise<Response> {
  return httpRequest(url, {
    ua: BROWSER_UA,
    accept: DOC_ACCEPT,
    acceptLanguage: "en-US,en;q=0.9,vi;q=0.8",
    timeoutMs,
    ...(referer ? { referer } : {}),
  });
}

// ---------------------------------------------------------------------------
// Browser-TLS transport (SJC only)
// ---------------------------------------------------------------------------

/**
 * Chrome's TLS cipher list, in Chrome's order.
 *
 * SJC sits behind a WAF that fingerprints the TLS ClientHello rather than the
 * HTTP headers: curl gets 200 while Node gets 403 over both HTTP/1.1 and
 * HTTP/2, with identical headers and even with no headers at all. Presenting
 * Chrome's cipher suite is what gets Node through. Only SJC needs this — every
 * other endpoint in the pipeline answers a plain `fetch`.
 */
const CHROME_CIPHERS = [
  "TLS_AES_128_GCM_SHA256",
  "TLS_AES_256_GCM_SHA384",
  "TLS_CHACHA20_POLY1305_SHA256",
  "ECDHE-ECDSA-AES128-GCM-SHA256",
  "ECDHE-RSA-AES128-GCM-SHA256",
  "ECDHE-ECDSA-AES256-GCM-SHA384",
  "ECDHE-RSA-AES256-GCM-SHA384",
  "ECDHE-ECDSA-CHACHA20-POLY1305",
  "ECDHE-RSA-CHACHA20-POLY1305",
  "ECDHE-RSA-AES128-SHA",
  "ECDHE-RSA-AES256-SHA",
  "AES128-GCM-SHA256",
  "AES256-GCM-SHA384",
  "AES128-SHA",
  "AES256-SHA",
].join(":");

let browserTlsAgent: Agent | undefined;

/** GET JSON through a browser-like TLS handshake. See `CHROME_CIPHERS`. */
export async function fetchJsonBrowserTls<T>(
  url: string,
  { referer, timeoutMs = DEFAULT_TIMEOUT_MS }: { referer?: string; timeoutMs?: number } = {},
): Promise<T> {
  browserTlsAgent ??= new Agent({
    connect: { ciphers: CHROME_CIPHERS, minVersion: "TLSv1.2" },
  });
  const resp = await request(url, {
    dispatcher: browserTlsAgent,
    headersTimeout: timeoutMs,
    bodyTimeout: timeoutMs,
    headers: {
      "user-agent": BROWSER_UA,
      accept: JSON_ACCEPT,
      ...(referer ? { referer } : {}),
    },
  });
  if (resp.statusCode < 200 || resp.statusCode >= 300) {
    // Drain so the connection is released back to the pool.
    await resp.body.dump();
    throw new HttpError(resp.statusCode, url);
  }
  return (await resp.body.json()) as T;
}
