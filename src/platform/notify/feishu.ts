/**
 * Feishu (Lark) notification — card-message building and delivery.
 *
 * Required env vars:
 *   FEISHU_WEBHOOK_URLS — comma-separated list of custom bot webhook URLs
 *                         (also accepts legacy FEISHU_WEBHOOK_URL for one URL)
 * Optional:
 *   PAGES_URL           — GitHub Pages base URL (defaults to the public deployment)
 */

import { NOTIFY_LABELS } from "../../core/i18n/index.ts";
import type { Highlights } from "./telegram.ts";

const PAGES_URL_DEFAULT = "https://duanyytop.github.io/agents-radar";

export function getWebhookUrls(): string[] {
  const raw = process.env["FEISHU_WEBHOOK_URLS"] ?? process.env["FEISHU_WEBHOOK_URL"] ?? "";
  return raw
    .split(",")
    .map((u) => u.trim())
    .filter(Boolean);
}

async function sendToOneWebhook(webhookUrl: string, title: string, content: string): Promise<void> {
  const res = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      msg_type: "interactive",
      card: {
        header: {
          title: { tag: "plain_text", content: title },
          template: "blue",
        },
        elements: [{ tag: "markdown", content }],
      },
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Feishu API ${res.status}: ${body}`);
  }
}

export async function sendFeishu(title: string, content: string): Promise<void> {
  const urls = getWebhookUrls();
  const results = await Promise.allSettled(urls.map((url) => sendToOneWebhook(url, title, content)));
  const failures = results.filter((r) => r.status === "rejected");
  if (failures.length) {
    const msgs = failures.map((r) => (r as PromiseRejectedResult).reason);
    console.error(`[feishu] ${failures.length}/${urls.length} webhook(s) failed:`, msgs);
    if (failures.length === urls.length) throw new Error("All Feishu webhooks failed");
  }
}

export function buildFeishuMessage(
  date: string,
  reports: string[],
  pagesUrl?: string,
  highlights?: Highlights | null,
): string {
  const PAGES_URL = (pagesUrl ?? process.env["PAGES_URL"] ?? PAGES_URL_DEFAULT).replace(/\/$/, "");
  // Report IDs regardless of language variant (strip the -en suffix, de-dupe),
  // so the message renders even when only the English variants exist.
  const reportIds = [...new Set(reports.map((r) => r.replace(/-en$/, "")))];
  const isWeekly = reportIds.includes("ai-weekly");
  const isMonthly = reportIds.includes("ai-monthly");

  const icon = isMonthly ? "📆" : isWeekly ? "📅" : "📡";
  const suffix = isMonthly ? " 月报" : isWeekly ? " 周报" : "";
  const lines: string[] = [`${icon} **agents-radar${suffix} · ${date}**`];

  const ordered = [
    ...reportIds.filter((r) => !r.includes("weekly") && !r.includes("monthly")),
    ...reportIds.filter((r) => r.includes("weekly") || r.includes("monthly")),
  ];

  const zhHighlights = highlights?.zh ?? {};
  const enHighlights = highlights?.en ?? {};

  for (const r of ordered) {
    const enKey = `${r}-en`;
    const links: string[] = [];
    if (reports.includes(r)) {
      const zhLabel = NOTIFY_LABELS[r]?.zh ?? r;
      links.push(`[${zhLabel}](${PAGES_URL}/#${date}/${r})`);
    }
    if (reports.includes(enKey)) {
      const enLabel = NOTIFY_LABELS[r]?.en ?? "EN";
      links.push(`[${enLabel}](${PAGES_URL}/#${date}/${enKey})`);
    }
    if (links.length === 0) continue;

    lines.push("");
    lines.push(`• ${links.join("  ·  ")}`);

    // Fall back to en when a report's zh highlights are missing so a
    // single-language failure never blanks the message.
    const items = zhHighlights[r] ?? enHighlights[r];
    if (items?.length) {
      for (const h of items) {
        lines.push(`  ◦ ${h}`);
      }
    }
  }

  lines.push(`\n[🌐 Web UI](${PAGES_URL})  ·  [⊕ RSS](${PAGES_URL}/feed.xml)`);
  return lines.join("\n");
}
