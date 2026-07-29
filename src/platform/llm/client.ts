/**
 * LLM invocation helpers.
 */

import { sleep } from "../../core/date.ts";

// ---------------------------------------------------------------------------
// LLM token budget constants
// ---------------------------------------------------------------------------

export const LLM_TOKENS_DEFAULT = 4096;
export const LLM_TOKENS_TRENDING = 6144;
/** Table-formatted listing reports (HN, PH, ArXiv, HF, Community) need extra
 *  headroom for the multi-row tables plus 2-sentence summaries. */
export const LLM_TOKENS_LISTING = 6144;
export const LLM_TOKENS_WEB = 8192;
export const LLM_TOKENS_ROLLUP = 8192;
/** The Vietnam dashboard carries three tables plus two prose sections and a
 *  per-condition playbook — it truncates at the listing budget. */
export const LLM_TOKENS_VNMACRO = 8192;
import { type LlmProvider, createProvider } from "./providers/index.ts";

const provider: LlmProvider = createProvider();

// ---------------------------------------------------------------------------
// Concurrency limiter — prevents rate-limit (429) errors when many LLM calls
// are fired in parallel. At most LLM_CONCURRENCY requests are in-flight at
// any given time; the rest queue and run as slots free up.
// ---------------------------------------------------------------------------

// Max in-flight LLM requests. Configurable via LLM_CONCURRENCY (positive
// integer); falls back to 5 when unset, non-numeric, or < 1.
function parseConcurrency(raw: string | undefined): number {
  const n = Number(raw);
  return Number.isInteger(n) && n >= 1 ? n : 5;
}

const LLM_CONCURRENCY = parseConcurrency(process.env["LLM_CONCURRENCY"]);
let llmSlots = LLM_CONCURRENCY;
const llmQueue: Array<() => void> = [];

function acquireSlot(): Promise<void> {
  if (llmSlots > 0) {
    llmSlots--;
    return Promise.resolve();
  }
  return new Promise((resolve) => llmQueue.push(resolve));
}

function releaseSlot(): void {
  const next = llmQueue.shift();
  if (next) {
    next();
  } else {
    llmSlots++;
  }
}

// ---------------------------------------------------------------------------
// LLM
// ---------------------------------------------------------------------------

const MAX_RETRIES = 3;
/** Floor for every retry wait. Providers rate-limit on a per-minute window and
 *  their own request timeout has already burned time, so anything shorter just
 *  spends another attempt on a bucket that has not refilled yet. */
export const RETRY_MIN_MS = 60_000;
/** Backoff grows from the floor: 60 s / 120 s / 240 s. */
const RETRY_BASE_MS = RETRY_MIN_MS;
/** Upper bound so a `Retry-After` of hours cannot stall the whole run. */
const RETRY_MAX_MS = 300_000; // 5 min

export function is429(err: unknown): boolean {
  return (err as { status?: number })?.status === 429 || String(err).includes("429");
}

/** Error codes emitted by undici/Node when a socket or request times out. */
const TIMEOUT_CODES = new Set([
  "ETIMEDOUT",
  "ESOCKETTIMEDOUT",
  "ECONNRESET",
  "ECONNABORTED",
  "EAI_AGAIN",
  "UND_ERR_CONNECT_TIMEOUT",
  "UND_ERR_HEADERS_TIMEOUT",
  "UND_ERR_BODY_TIMEOUT",
]);

type ErrLike = { name?: string; code?: string; status?: number; message?: string; cause?: unknown };

/**
 * Detects request timeouts / dropped connections across providers: the SDK
 * timeout classes (`APIConnectionTimeoutError`, `AbortError`), Node socket
 * codes (possibly nested under `cause`), gateway statuses, and a message match
 * for providers that only surface a string.
 */
export function isTimeout(err: unknown): boolean {
  const e = err as ErrLike | null | undefined;
  if (!e) return false;
  if (e.name === "APIConnectionTimeoutError" || e.name === "TimeoutError" || e.name === "AbortError")
    return true;
  if (e.status === 408 || e.status === 504) return true;
  if (typeof e.code === "string" && TIMEOUT_CODES.has(e.code)) return true;
  const causeCode = (e.cause as ErrLike | undefined)?.code;
  if (typeof causeCode === "string" && TIMEOUT_CODES.has(causeCode)) return true;
  return /timed?\s*-?\s*out|timeout/i.test(String(e.message ?? err));
}

/**
 * Server-side capacity exhaustion. Gateways and OpenAI-compatible proxies often
 * express "too much load right now" as a 5xx rather than a 429 — e.g. the
 * `503 ResourceExhausted: Worker local total request limit reached (44/32)`
 * emitted when the upstream worker pool is saturated. These are transient and
 * clear on their own, so they get the same backoff as a rate limit.
 */
export function isOverloaded(err: unknown): boolean {
  const e = err as ErrLike | null | undefined;
  if (!e) return false;
  // 502/503 = bad gateway / unavailable, 529 = Anthropic `overloaded_error`.
  if (e.status === 502 || e.status === 503 || e.status === 529) return true;
  return /resource[\s_-]*exhausted|overloaded|capacity|request limit reached|service unavailable|temporarily unavailable|try again later|\b(?:502|503|529)\b/i.test(
    String(e.message ?? err),
  );
}

/** Transient failures worth another attempt: rate limits, timeouts, overload. */
export function isRetryable(err: unknown): boolean {
  return is429(err) || isTimeout(err) || isOverloaded(err);
}

/** Short label for the retry log line. */
function retryKind(err: unknown): string {
  if (is429(err)) return "429";
  if (isTimeout(err)) return "timeout";
  return "overloaded";
}

/**
 * `Retry-After` from the provider, in ms. Supports both the plain-object and
 * `Headers` shapes the SDKs expose, and both the seconds and HTTP-date forms.
 * Returns 0 when absent or unparseable.
 */
function retryAfterMs(err: unknown): number {
  const headers = (err as { headers?: Headers | Record<string, string> })?.headers;
  if (!headers) return 0;
  const raw =
    typeof (headers as Headers).get === "function"
      ? (headers as Headers).get("retry-after")
      : (headers as Record<string, string>)["retry-after"];
  if (!raw) return 0;
  const seconds = Number(raw);
  if (Number.isFinite(seconds)) return Math.max(0, seconds * 1000);
  const at = Date.parse(raw);
  return Number.isNaN(at) ? 0 : Math.max(0, at - Date.now());
}

export async function callLlm(prompt: string, maxTokens = LLM_TOKENS_DEFAULT): Promise<string> {
  for (let attempt = 0; ; attempt++) {
    await acquireSlot();
    let released = false;
    try {
      return await provider.call(prompt, maxTokens);
    } catch (err) {
      if (attempt < MAX_RETRIES && isRetryable(err)) {
        releaseSlot();
        released = true;
        const wait = Math.min(
          RETRY_MAX_MS,
          Math.max(RETRY_MIN_MS, retryAfterMs(err), RETRY_BASE_MS * 2 ** attempt),
        );
        console.error(`[llm] ${retryKind(err)} — retry ${attempt + 1}/${MAX_RETRIES} in ${wait / 1000}s...`);
        await sleep(wait);
        continue;
      }
      throw err;
    } finally {
      if (!released) releaseSlot();
    }
  }
}

// Matches ASCII control characters U+0000–U+001F. Built from a string so no
// literal control character appears in the source (keeps it readable + lint-clean).
// eslint-disable-next-line no-control-regex
const CONTROL_CHARS = new RegExp("[\\u0000-\\u001F]", "g");

/**
 * Parse JSON returned by an LLM. Strips markdown code fences and replaces raw
 * control characters with spaces before parsing. The model occasionally emits
 * an unescaped control character (e.g. a bare newline) inside a string literal,
 * which is illegal in JSON and makes `JSON.parse` throw "Bad control character
 * in string literal". Control chars outside strings are only insignificant
 * whitespace, so replacing them is safe either way.
 *
 * If the strict parse still fails, the payload is repaired once (drop any prose
 * wrapper around the JSON, strip trailing commas) and retried — a single stray
 * character (e.g. a trailing comma before `}`) used to wipe an entire language's
 * highlights.json.
 */
export function parseLlmJson<T = unknown>(raw: string): T {
  const cleaned = raw
    .replace(/```json?\n?/g, "")
    .replace(/```/g, "")
    .replace(CONTROL_CHARS, " ")
    .trim();
  try {
    return JSON.parse(cleaned) as T;
  } catch (err) {
    const repaired = repairJson(cleaned);
    if (repaired !== cleaned) return JSON.parse(repaired) as T;
    throw err;
  }
}

/**
 * Best-effort repair of common LLM JSON defects: narrow to the outermost
 * object/array (dropping surrounding prose) and remove trailing commas before a
 * closing brace or bracket. Returns the input unchanged when nothing applies.
 */
function repairJson(s: string): string {
  const first = s.search(/[{[]/);
  const lastBrace = s.lastIndexOf("}");
  const lastBracket = s.lastIndexOf("]");
  const last = Math.max(lastBrace, lastBracket);
  const narrowed = first >= 0 && last > first ? s.slice(first, last + 1) : s;
  return narrowed.replace(/,(\s*[}\]])/g, "$1");
}
