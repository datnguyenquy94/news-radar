import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import fs from "node:fs";

// ---------------------------------------------------------------------------
// Mock provider — intercepts createProvider() so the module-level `provider`
// in report.ts uses our controllable mock instead of a real SDK client.
// ---------------------------------------------------------------------------

const { mockCall } = vi.hoisted(() => ({
  mockCall: vi.fn<(prompt: string, maxTokens: number) => Promise<string>>(),
}));

vi.mock("../platform/llm/providers/index.ts", async (importOriginal) => {
  const orig = await importOriginal<typeof import("../platform/llm/providers/index.ts")>();
  return {
    ...orig,
    createProvider: () => ({ name: "mock", call: mockCall }),
  };
});

// ---------------------------------------------------------------------------
// Capture log records. The logger writes to fd 2 through sonic-boom, so a
// `process.stderr.write` spy would never see it — mock the module instead.
// ---------------------------------------------------------------------------

const { logRecords } = vi.hoisted(() => ({
  logRecords: [] as Array<{ level: string; obj: Record<string, unknown> | undefined; msg: string }>,
}));

vi.mock("../core/logger.ts", () => {
  const at =
    (level: string) =>
    (a: unknown, b?: unknown): void => {
      const isMsgOnly = typeof a === "string";
      logRecords.push({
        level,
        obj: isMsgOnly ? undefined : (a as Record<string, unknown>),
        msg: String(isMsgOnly ? a : (b ?? "")),
      });
    };
  const fake = {
    trace: at("trace"),
    debug: at("debug"),
    info: at("info"),
    warn: at("warn"),
    error: at("error"),
    fatal: at("fatal"),
    child: () => fake,
  };
  return { createLogger: () => fake, logger: fake };
});

import {
  is429,
  isTimeout,
  isOverloaded,
  isRetryable,
  RETRY_MIN_MS,
  callLlm,
  parseLlmJson,
} from "../platform/llm/client.ts";
import { saveFile, autoGenFooter } from "../platform/reports/files.ts";

// ---------------------------------------------------------------------------
// is429
// ---------------------------------------------------------------------------

describe("is429", () => {
  it("detects status 429 from error-like objects", () => {
    expect(is429({ status: 429 })).toBe(true);
  });

  it("detects 429 from string representation", () => {
    expect(is429(new Error("Request failed with 429"))).toBe(true);
  });

  it("returns false for other status codes", () => {
    expect(is429({ status: 500 })).toBe(false);
    expect(is429({ status: 200 })).toBe(false);
  });

  it("returns false for null/undefined", () => {
    expect(is429(null)).toBe(false);
    expect(is429(undefined)).toBe(false);
  });

  it("returns false for unrelated errors", () => {
    expect(is429(new Error("Something else"))).toBe(false);
  });

  it("detects OpenAI SDK RateLimitError shape (status + code)", () => {
    const openaiError = Object.assign(new Error("Rate limit reached"), {
      status: 429,
      code: "rate_limit_exceeded",
      type: "tokens",
    });
    expect(is429(openaiError)).toBe(true);
  });

  it("detects Anthropic SDK APIError shape (status + headers)", () => {
    const anthropicError = Object.assign(new Error("rate_limit_error"), {
      status: 429,
      headers: { "retry-after": "30" },
    });
    expect(is429(anthropicError)).toBe(true);
  });
});

// ---------------------------------------------------------------------------
// isTimeout / isRetryable
// ---------------------------------------------------------------------------

describe("isTimeout", () => {
  it("detects the SDK timeout error classes by name", () => {
    expect(
      isTimeout(Object.assign(new Error("Request timed out."), { name: "APIConnectionTimeoutError" })),
    ).toBe(true);
    expect(isTimeout(Object.assign(new Error("aborted"), { name: "AbortError" }))).toBe(true);
  });

  it("detects Node socket timeout codes", () => {
    expect(isTimeout(Object.assign(new Error("connect"), { code: "ETIMEDOUT" }))).toBe(true);
    expect(isTimeout(Object.assign(new Error("socket hang up"), { code: "ECONNRESET" }))).toBe(true);
  });

  it("detects a timeout code nested under cause", () => {
    const err = Object.assign(new Error("Connection error."), {
      cause: Object.assign(new Error("fetch failed"), { code: "UND_ERR_HEADERS_TIMEOUT" }),
    });
    expect(isTimeout(err)).toBe(true);
  });

  it("detects gateway/request timeout statuses", () => {
    expect(isTimeout({ status: 408 })).toBe(true);
    expect(isTimeout({ status: 504 })).toBe(true);
  });

  it("falls back to a message match", () => {
    expect(isTimeout(new Error("upstream request timeout"))).toBe(true);
    expect(isTimeout(new Error("The operation timed out"))).toBe(true);
  });

  it("returns false for unrelated errors and nullish input", () => {
    expect(isTimeout(new Error("server error"))).toBe(false);
    expect(isTimeout({ status: 500 })).toBe(false);
    expect(isTimeout(null)).toBe(false);
    expect(isTimeout(undefined)).toBe(false);
  });
});

describe("isOverloaded", () => {
  it("detects the gateway ResourceExhausted shape seen in production", () => {
    // Real error text from an OpenAI-compatible gateway under load.
    const err = new Error("503 ResourceExhausted: Worker local total request limit reached (44/32)");
    expect(isOverloaded(err)).toBe(true);
    expect(isRetryable(err)).toBe(true);
  });

  it("detects capacity statuses", () => {
    expect(isOverloaded({ status: 502 })).toBe(true);
    expect(isOverloaded({ status: 503 })).toBe(true);
    expect(isOverloaded({ status: 529 })).toBe(true); // Anthropic overloaded_error
  });

  it("detects overload wording without a status", () => {
    expect(isOverloaded(new Error("Overloaded"))).toBe(true);
    expect(isOverloaded(new Error("Service Unavailable, please try again later"))).toBe(true);
  });

  it("returns false for unrelated errors and nullish input", () => {
    expect(isOverloaded(new Error("invalid api key"))).toBe(false);
    expect(isOverloaded({ status: 400 })).toBe(false);
    expect(isOverloaded(null)).toBe(false);
    expect(isOverloaded(undefined)).toBe(false);
  });
});

describe("isRetryable", () => {
  it("covers rate limits, timeouts, and overload", () => {
    expect(isRetryable({ status: 429 })).toBe(true);
    expect(isRetryable({ status: 504 })).toBe(true);
    expect(isRetryable({ status: 503 })).toBe(true);
    expect(isRetryable({ status: 500 })).toBe(false);
    expect(isRetryable(new Error("invalid api key"))).toBe(false);
  });
});

// ---------------------------------------------------------------------------
// saveFile
// ---------------------------------------------------------------------------

describe("saveFile", () => {
  beforeEach(() => {
    vi.spyOn(fs, "mkdirSync").mockReturnValue(undefined);
    vi.spyOn(fs, "writeFileSync").mockReturnValue(undefined);
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("returns the expected file path", () => {
    const result = saveFile("content", "2026-03-09", "ai-cli.md");
    expect(result).toBe("digests/2026-03-09/ai-cli.md");
  });

  it("creates parent directories recursively", () => {
    saveFile("content", "2026-03-09", "ai-cli.md");
    expect(fs.mkdirSync).toHaveBeenCalledWith("digests/2026-03-09", { recursive: true });
  });

  it("writes content as utf-8", () => {
    saveFile("hello world", "2026-03-09", "test.md");
    expect(fs.writeFileSync).toHaveBeenCalledWith("digests/2026-03-09/test.md", "hello world", "utf-8");
  });
});

// ---------------------------------------------------------------------------
// autoGenFooter
// ---------------------------------------------------------------------------

describe("autoGenFooter", () => {
  const originalEnv = process.env["DIGEST_REPO"];

  afterEach(() => {
    if (originalEnv !== undefined) {
      process.env["DIGEST_REPO"] = originalEnv;
    } else {
      delete process.env["DIGEST_REPO"];
    }
  });

  it("returns empty string when DIGEST_REPO is not set", () => {
    delete process.env["DIGEST_REPO"];
    expect(autoGenFooter()).toBe("");
  });

  it("returns empty string when DIGEST_REPO is empty", () => {
    process.env["DIGEST_REPO"] = "";
    expect(autoGenFooter()).toBe("");
  });

  it("returns Vietnamese footer when DIGEST_REPO is set", () => {
    process.env["DIGEST_REPO"] = "user/repo";
    const result = autoGenFooter("vi");
    expect(result).toContain("agents-radar");
    expect(result).toContain("github.com/user/repo");
    expect(result).toContain("tự động");
  });

  it("returns English footer when lang is en", () => {
    process.env["DIGEST_REPO"] = "user/repo";
    const result = autoGenFooter("en");
    expect(result).toContain("auto-generated");
    expect(result).toContain("agents-radar");
  });
});

// ---------------------------------------------------------------------------
// parseLlmJson
// ---------------------------------------------------------------------------

describe("parseLlmJson", () => {
  it("parses plain JSON", () => {
    expect(parseLlmJson('{"a": 1, "b": ["x"]}')).toEqual({ a: 1, b: ["x"] });
  });

  it("strips ```json code fences", () => {
    const raw = '```json\n{"a": 1}\n```';
    expect(parseLlmJson(raw)).toEqual({ a: 1 });
  });

  it("strips bare ``` code fences", () => {
    expect(parseLlmJson('```\n{"a": 1}\n```')).toEqual({ a: 1 });
  });

  it("tolerates an unescaped newline inside a string literal", () => {
    // This is the failure that wiped highlights.json: a raw control character
    // inside a string literal makes JSON.parse throw without sanitization.
    const raw = '{"x": ["line one\nline two"]}';
    expect(() => JSON.parse(raw)).toThrow();
    expect(parseLlmJson(raw)).toEqual({ x: ["line one line two"] });
  });

  it("tolerates other raw control characters (tab) in strings", () => {
    const raw = '{"x": ["a\tb"]}';
    expect(parseLlmJson(raw)).toEqual({ x: ["a b"] });
  });

  it("tolerates a trailing comma before a closing brace", () => {
    // The exact failure that wiped vi highlights on 2026-07-07:
    // "Expected double-quoted property name in JSON" from a trailing comma.
    const raw = '{"a": [1, 2,], "b": 3,}';
    expect(() => JSON.parse(raw)).toThrow();
    expect(parseLlmJson(raw)).toEqual({ a: [1, 2], b: 3 });
  });

  it("strips prose around the JSON payload", () => {
    const raw = 'Here are the highlights:\n{"a": 1}\nHope that helps!';
    expect(parseLlmJson(raw)).toEqual({ a: 1 });
  });

  it("throws on genuinely malformed JSON", () => {
    expect(() => parseLlmJson("{not json")).toThrow();
  });
});

// ---------------------------------------------------------------------------
// callLlm
// ---------------------------------------------------------------------------

describe("callLlm", () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockCall.mockReset();
    logRecords.length = 0;
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("passes prompt and maxTokens to provider.call()", async () => {
    mockCall.mockResolvedValueOnce("response text");

    const result = await callLlm("hello", 2048);

    expect(result).toBe("response text");
    expect(mockCall).toHaveBeenCalledOnce();
    expect(mockCall).toHaveBeenCalledWith("hello", 2048);
  });

  it("uses default maxTokens of 4096", async () => {
    mockCall.mockResolvedValueOnce("ok");

    await callLlm("prompt");

    expect(mockCall).toHaveBeenCalledWith("prompt", 4096);
  });

  it("logs a start and a finish line, paired by call id", async () => {
    mockCall.mockResolvedValueOnce("response text");

    await callLlm("hello", 2048);

    const started = logRecords.find((r) => r.msg === "LLM call started");
    const finished = logRecords.find((r) => r.msg === "LLM call finished");
    expect(started?.obj).toMatchObject({ maxTokens: 2048, promptChars: 5 });
    expect(finished?.obj).toMatchObject({
      call: started?.obj?.["call"],
      attempts: 1,
      responseChars: "response text".length,
    });
    expect(typeof finished?.obj?.["ms"]).toBe("number");
  });

  it("logs the retry and counts the attempts on the finish line", async () => {
    const err429 = Object.assign(new Error("rate limited"), { status: 429 });
    mockCall.mockRejectedValueOnce(err429);
    mockCall.mockResolvedValueOnce("success after retry");

    const promise = callLlm("prompt");
    await vi.advanceTimersByTimeAsync(RETRY_MIN_MS);
    await promise;

    const retry = logRecords.find((r) => r.level === "warn");
    expect(retry?.obj).toMatchObject({ kind: "429", attempt: 1, waitMs: RETRY_MIN_MS });
    expect(logRecords.find((r) => r.msg === "LLM call finished")?.obj).toMatchObject({ attempts: 2 });
  });

  it("logs a failure line when the call gives up", async () => {
    mockCall.mockRejectedValue(new Error("boom"));

    await expect(callLlm("prompt")).rejects.toThrow("boom");

    expect(logRecords.find((r) => r.level === "error")?.msg).toContain("LLM call failed");
  });

  it("waits at least RETRY_MIN_MS before the first 429 retry", async () => {
    const err429 = Object.assign(new Error("rate limited"), { status: 429 });
    mockCall.mockRejectedValueOnce(err429);
    mockCall.mockResolvedValueOnce("success after retry");

    const promise = callLlm("prompt", 1024);

    // Anything short of the 60 s floor must not trigger the retry yet.
    await vi.advanceTimersByTimeAsync(RETRY_MIN_MS - 1);
    expect(mockCall).toHaveBeenCalledOnce();

    await vi.advanceTimersByTimeAsync(1);
    const result = await promise;
    expect(result).toBe("success after retry");
    expect(mockCall).toHaveBeenCalledTimes(2);
  });

  it("retries on timeout errors too", async () => {
    const timeoutErr = Object.assign(new Error("Request timed out."), {
      name: "APIConnectionTimeoutError",
    });
    mockCall.mockRejectedValueOnce(timeoutErr);
    mockCall.mockResolvedValueOnce("recovered");

    const promise = callLlm("prompt");
    await vi.advanceTimersByTimeAsync(RETRY_MIN_MS);

    expect(await promise).toBe("recovered");
    expect(mockCall).toHaveBeenCalledTimes(2);
  });

  it("retries a 503 ResourceExhausted from a saturated gateway", async () => {
    const err503 = Object.assign(
      new Error("503 ResourceExhausted: Worker local total request limit reached (44/32)"),
      { status: 503 },
    );
    mockCall.mockRejectedValueOnce(err503);
    mockCall.mockResolvedValueOnce("recovered");

    const promise = callLlm("prompt");
    await vi.advanceTimersByTimeAsync(RETRY_MIN_MS);

    expect(await promise).toBe("recovered");
    expect(mockCall).toHaveBeenCalledTimes(2);
  });

  it("honours a Retry-After longer than the floor", async () => {
    const err429 = Object.assign(new Error("rate limited"), {
      status: 429,
      headers: { "retry-after": "120" },
    });
    mockCall.mockRejectedValueOnce(err429);
    mockCall.mockResolvedValueOnce("ok");

    const promise = callLlm("prompt");

    await vi.advanceTimersByTimeAsync(RETRY_MIN_MS);
    expect(mockCall).toHaveBeenCalledOnce();

    await vi.advanceTimersByTimeAsync(60_000);
    expect(await promise).toBe("ok");
    expect(mockCall).toHaveBeenCalledTimes(2);
  });

  it("retries up to MAX_RETRIES times then throws", async () => {
    const err429 = Object.assign(new Error("rate limited"), { status: 429 });
    mockCall
      .mockRejectedValueOnce(err429)
      .mockRejectedValueOnce(err429)
      .mockRejectedValueOnce(err429)
      .mockRejectedValueOnce(err429);

    const promise = callLlm("prompt", 1024);
    // Attach a no-op catch immediately so Node doesn't flag unhandled rejection
    // before the expect() below gets a chance to inspect the rejection.
    promise.catch(() => {});

    // Advance through all 3 retry backoffs: 60s, 120s, 240s
    await vi.advanceTimersByTimeAsync(60_000);
    await vi.advanceTimersByTimeAsync(120_000);
    await vi.advanceTimersByTimeAsync(240_000);

    await expect(promise).rejects.toThrow("rate limited");
    // 1 initial + 3 retries = 4 total calls
    expect(mockCall).toHaveBeenCalledTimes(4);
  });

  it("throws immediately on non-retryable errors", async () => {
    mockCall.mockRejectedValueOnce(new Error("server error"));

    await expect(callLlm("prompt")).rejects.toThrow("server error");
    expect(mockCall).toHaveBeenCalledOnce();
  });

  it("does not leak concurrency slots on 429 retries", async () => {
    const err429 = Object.assign(new Error("429"), { status: 429 });
    mockCall.mockRejectedValueOnce(err429);
    mockCall.mockResolvedValueOnce("ok");

    const promise = callLlm("prompt");
    await vi.advanceTimersByTimeAsync(RETRY_MIN_MS);
    await promise;

    // If slots leaked, subsequent calls would hang. Fire LLM_CONCURRENCY (5)
    // calls to prove all slots are available.
    mockCall.mockResolvedValue("ok");
    const batch = Array.from({ length: 5 }, (_, i) => callLlm(`p${i}`));
    const results = await Promise.all(batch);
    expect(results).toEqual(["ok", "ok", "ok", "ok", "ok"]);
  });
});
