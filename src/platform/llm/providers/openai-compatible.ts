/**
 * Base class for OpenAI-compatible providers.
 *
 * Shared by OpenAI, GitHub Copilot, and OpenRouter providers.
 */

import OpenAI from "openai";
import type { LlmProvider } from "./types.ts";
import { CLIENT_OPTIONS } from "./client-options.ts";

const THINKING_ENABLED = process.env["LLM_THINKING"]?.toLowerCase() === "true";

export abstract class OpenAICompatibleProvider implements LlmProvider {
  abstract readonly name: string;
  protected readonly client: OpenAI;
  protected readonly model: string;

  constructor(opts: { apiKey?: string; baseURL?: string; model: string }) {
    this.model = opts.model;
    this.client = new OpenAI({
      apiKey: opts.apiKey,
      baseURL: opts.baseURL,
      ...CLIENT_OPTIONS,
    });
  }

  async call(prompt: string, maxTokens: number): Promise<string> {
    const request = {
      model: this.model,
      max_completion_tokens: maxTokens,
      ...(this.name === "openrouter"
        ? { reasoning: THINKING_ENABLED ? { effort: "medium" } : { max_tokens: 0 } }
        : { reasoning_effort: THINKING_ENABLED ? "medium" : "none" }),
      messages: [{ role: "user", content: prompt }],
      stream: false,
    };
    const response = await this.client.chat.completions.create(
      request as OpenAI.Chat.Completions.ChatCompletionCreateParamsNonStreaming,
    );
    const text = response.choices[0]?.message?.content;
    if (!text) throw new Error(`Unexpected empty response from ${this.name}`);
    return text;
  }
}
