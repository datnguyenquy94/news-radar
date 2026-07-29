/**
 * Telegram notification — message building and delivery.
 *
 * Required env vars:
 *   TELEGRAM_BOT_TOKEN  — bot token from @BotFather
 *   TELEGRAM_CHAT_ID    — channel/group/user chat ID
 * Optional:
 *   PAGES_URL           — GitHub Pages base URL (defaults to the public deployment)
 */

import { NOTIFY_LABELS } from "../../core/i18n/index.ts";
import type { ReportHighlights } from "../prompts/index.ts";

export interface Highlights {
  zh: ReportHighlights;
  en: ReportHighlights;
}

const PAGES_URL_DEFAULT = "https://duanyytop.github.io/agents-radar";

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function sendTelegram(text: string): Promise<void> {
  const BOT_TOKEN = process.env["TELEGRAM_BOT_TOKEN"] ?? "";
  const CHAT_ID = process.env["TELEGRAM_CHAT_ID"] || "@agents_radar";
  const url = `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`;
  const res = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: CHAT_ID,
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`Telegram API ${res.status}: ${body}`);
  }
}

export function buildMessage(
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
  const lines: string[] = [`${icon} <b>agents-radar${suffix} · ${date}</b>`];

  // Daily reports first, then rollups
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
      links.push(`<a href="${PAGES_URL}/#${date}/${r}">${zhLabel}</a>`);
    }
    if (reports.includes(enKey)) {
      const enLabel = NOTIFY_LABELS[r]?.en ?? "EN";
      links.push(`<a href="${PAGES_URL}/#${date}/${enKey}">${enLabel}</a>`);
    }
    if (links.length === 0) continue;

    lines.push(""); // blank line before each report section
    lines.push(`• ${links.join("  ·  ")}`);

    // Add highlights as indented sub-items. Fall back to en when a report's zh
    // highlights are missing so a single-language failure never blanks the message.
    const items = zhHighlights[r] ?? enHighlights[r];
    if (items?.length) {
      for (const h of items) {
        lines.push(`  ◦ ${escapeHtml(h)}`);
      }
    }
  }

  lines.push(`\n<a href="${PAGES_URL}">🌐 Web UI</a>  ·  <a href="${PAGES_URL}/feed.xml">⊕ RSS</a>`);
  return lines.join("\n");
}
