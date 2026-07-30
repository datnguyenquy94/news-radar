/**
 * Probe for `callLlm` in `src/platform/llm/client.ts`.
 *
 * One real request through the configured provider — the fastest way to check a
 * provider swap, a base-URL change or a model name without running a report.
 * It goes through `callLlm` rather than an SDK client so the concurrency
 * limiter and the retry policy are the ones actually exercised.
 *
 * `LlmProvider.call` returns only the response text, so token usage and finish
 * reason are not observable from here; they are reported as null rather than
 * guessed. Surfacing them would mean widening the provider interface, which is
 * out of scope for a probe.
 */

import fs from "node:fs";
import { ProbeError, kv, requireProviderKey, type Target } from "./kit.ts";

export const llmTarget: Target = {
  name: "llm",
  summary: "callLlm() — one real request through the configured provider; prints the response and timing",
  options: [
    { name: "prompt", arg: "text", desc: "prompt text" },
    { name: "file", arg: "path", desc: "read the prompt from a file instead" },
    { name: "max-tokens", arg: "n", desc: "max response tokens (default 256 — probes stay cheap)" },
  ],
  env: ["LLM_PROVIDER", "the selected provider's key", "LLM_TIMEOUT_MS", "LLM_CONCURRENCY"],
  async run(args) {
    const { provider: providerName } = requireProviderKey();

    const file = args.str("file");
    const inline = args.str("prompt");
    if (file && inline) throw new ProbeError("pass either --prompt or --file, not both");
    if (file && !fs.existsSync(file)) throw new ProbeError(`no such file: ${file}`);
    const prompt = file ? fs.readFileSync(file, "utf-8") : inline;
    if (!prompt) throw new ProbeError("one of --prompt <text> or --file <path> is required");

    const maxTokens = args.num("max-tokens", 256);
    const { callLlm } = await import("../../platform/llm/client.ts");

    const started = Date.now();
    const response = await callLlm(prompt, maxTokens);
    const elapsedMs = Date.now() - started;

    return {
      json: {
        provider: providerName,
        model: process.env[`${providerName.toUpperCase().replace(/-/g, "_")}_MODEL`] ?? "(provider default)",
        promptChars: prompt.length,
        maxTokens,
        elapsedMs,
        responseChars: response.length,
        // Not exposed by LlmProvider.call — reported, not invented.
        usage: null,
        finishReason: null,
        response,
      },
      lines: [
        kv("provider", providerName),
        kv("promptChars", prompt.length),
        kv("maxTokens", maxTokens),
        kv("elapsedMs", elapsedMs),
        kv("responseChars", response.length),
        kv("usage", "null (LlmProvider.call returns text only)"),
        kv("finishReason", "null (LlmProvider.call returns text only)"),
        "response:",
        ...response.split("\n").map((l) => `  ${l}`),
      ],
      ...(response.trim().length === 0 ? { failure: "provider returned an empty response" } : {}),
    };
  },
};
