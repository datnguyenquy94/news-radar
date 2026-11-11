/**
 * Anthropic provider — wraps the @anthropic-ai/sdk.
 *
 * Env vars:
 *   ANTHROPIC_API_KEY   - API key (read automatically by the SDK)
 *   ANTHROPIC_BASE_URL  - endpoint override (read automatically by the SDK)
 *   ANTHROPIC_MODEL     - model name (default: claude-sonnet-4-6)
 */

import Anthropic from "@anthropic-ai/sdk";
import type { LlmProvider } from "./types.ts";
import { CLIENT_OPTIONS } from "./client-options.ts";

const THINKING_ENABLED = process.env["LLM_THINKING"]?.toLowerCase() === "true";
const THINKING_BUDGET_TOKENS = 1024;

export class AnthropicProvider implements LlmProvider {
  readonly name = "anthropic";
  private readonly client: Anthropic;
  private readonly model: string;

  constructor(model?: string) {
    this.model = model ?? process.env["ANTHROPIC_MODEL"] ?? "claude-sonnet-4-6";
    this.client = new Anthropic({ ...CLIENT_OPTIONS });
  }

  async call(prompt: string, maxTokens: number): Promise<string> {
    const message = await this.client.messages.create({
      model: this.model,
      max_tokens: THINKING_ENABLED ? Math.max(maxTokens, THINKING_BUDGET_TOKENS + 1) : maxTokens,
      ...(THINKING_ENABLED
        ? { thinking: { type: "enabled" as const, budget_tokens: THINKING_BUDGET_TOKENS } }
        : {}),
      messages: [{ role: "user", content: prompt }],
    });
    const block = message.content.find((b) => b.type === "text");
    if (!block) throw new Error("Unexpected response type from Anthropic");
    return block.text;
  }
}
