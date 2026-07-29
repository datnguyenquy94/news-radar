/**
 * Shared SDK client options for every provider.
 *
 * Both the Anthropic and OpenAI SDKs ship their own retry loop with a short
 * (sub-10 s) backoff. That loop would burn the rate-limit window well before
 * `callLlm` in `src/platform/llm/client.ts` ever sees the error, so retries are disabled
 * here and the single retry policy — min 60 s between attempts, `Retry-After`
 * honoured — lives in `callLlm`.
 *
 * Env vars:
 *   LLM_TIMEOUT_MS - per-request timeout in ms (positive integer; default 600000 = 10 min)
 */

const DEFAULT_TIMEOUT_MS = 600_000;

function parseTimeout(raw: string | undefined): number {
  const n = Number(raw);
  return Number.isFinite(n) && n > 0 ? n : DEFAULT_TIMEOUT_MS;
}

/** Per-request timeout. A request that exceeds it rejects as a timeout error,
 *  which `callLlm` treats as retryable. */
export const LLM_TIMEOUT_MS = parseTimeout(process.env["LLM_TIMEOUT_MS"]);

/** Spread into every SDK client constructor. */
export const CLIENT_OPTIONS = {
  timeout: LLM_TIMEOUT_MS,
  maxRetries: 0,
} as const;
