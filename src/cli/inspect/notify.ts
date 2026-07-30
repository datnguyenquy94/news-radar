/**
 * Dry-run probes for the notification transports.
 *
 * These build the exact payload that `sendTelegram` / `sendFeishu` would POST
 * and print it. Sending is impossible from here by construction: neither
 * sender is imported, and there is no flag that could reach one. `--dry-run` is
 * accepted for symmetry with the spec but is the only mode there is.
 *
 * Inputs are the same ones the real entrypoints read — the latest `manifest.json`
 * entry plus that day's `digests/<date>/highlights.json` — both read-only.
 */

import fs from "node:fs";
import path from "node:path";
import { ProbeError, kv, type Args, type Target } from "./kit.ts";
import type { Highlights } from "../../platform/notify/telegram.ts";

const DRY_RUN_OPTION = { name: "dry-run", desc: "no-op: these targets can only dry-run" };
const DATE_OPTION = { name: "date", arg: "YYYY-MM-DD", desc: "manifest entry to render (default: latest)" };
const PAGES_URL_OPTION = { name: "pages-url", arg: "url", desc: "override PAGES_URL in the links" };

interface ManifestEntry {
  date: string;
  reports: string[];
}

/** The manifest entry the real notifier would use, plus that day's highlights. */
function loadNotifyInput(args: Args): { entry: ManifestEntry; highlights: Highlights | null } {
  if (!fs.existsSync("manifest.json")) {
    throw new ProbeError("manifest.json not found — run `pnpm manifest` first");
  }
  const { dates } = JSON.parse(fs.readFileSync("manifest.json", "utf-8")) as { dates?: ManifestEntry[] };
  if (!dates?.length) throw new ProbeError("manifest.json has no dates");

  const wanted = args.str("date");
  const entry = wanted ? dates.find((d) => d.date === wanted) : dates[0];
  if (!entry) throw new ProbeError(`manifest.json has no entry for ${wanted}`);

  let highlights: Highlights | null = null;
  const highlightsPath = path.join("digests", entry.date, "highlights.json");
  if (fs.existsSync(highlightsPath)) {
    try {
      highlights = JSON.parse(fs.readFileSync(highlightsPath, "utf-8")) as Highlights;
    } catch (err) {
      throw new ProbeError(
        `${highlightsPath} is not valid JSON: ${err instanceof Error ? err.message : err}`,
      );
    }
  }
  return { entry, highlights };
}

export const notifyTelegramTarget: Target = {
  name: "notify:telegram",
  summary: "buildMessage() — prints the Telegram payload that would be sent; sending is not possible",
  options: [DRY_RUN_OPTION, DATE_OPTION, PAGES_URL_OPTION],
  env: ["TELEGRAM_CHAT_ID (only echoed into the payload)", "PAGES_URL"],
  async run(args) {
    const { entry, highlights } = loadNotifyInput(args);
    // Only the builder is imported — `sendTelegram` is never pulled in here.
    const { buildMessage } = await import("../../platform/notify/telegram.ts");
    const text = buildMessage(entry.date, entry.reports, args.str("pages-url"), highlights);

    // Mirrors the request body in sendTelegram().
    const payload = {
      chat_id: process.env["TELEGRAM_CHAT_ID"] || "@agents_radar",
      text,
      parse_mode: "HTML",
      disable_web_page_preview: true,
    };

    return {
      json: {
        dryRun: true,
        date: entry.date,
        reports: entry.reports,
        hasHighlights: highlights !== null,
        payload,
      },
      lines: [
        kv("dryRun", true),
        kv("date", entry.date),
        kv("reports", entry.reports.length),
        kv("hasHighlights", highlights !== null),
        kv("chat_id", payload.chat_id),
        kv("textChars", text.length),
        "text:",
        ...text.split("\n").map((l) => `  ${l}`),
      ],
    };
  },
};

export const notifyFeishuTarget: Target = {
  name: "notify:feishu",
  summary: "buildFeishuMessage() — prints the Feishu card that would be sent; sending is not possible",
  options: [DRY_RUN_OPTION, DATE_OPTION, PAGES_URL_OPTION],
  env: ["FEISHU_WEBHOOK_URLS (only counted, never called)", "PAGES_URL"],
  async run(args) {
    const { entry, highlights } = loadNotifyInput(args);
    // `sendFeishu` is deliberately not imported; `getWebhookUrls` only reads env.
    const { buildFeishuMessage, getWebhookUrls } = await import("../../platform/notify/feishu.ts");
    const content = buildFeishuMessage(entry.date, entry.reports, args.str("pages-url"), highlights);

    // Mirrors cli/notify-feishu.ts's title and sendToOneWebhook()'s card body.
    const ids = [...new Set(entry.reports.map((r) => r.replace(/-en$/, "")))];
    const isMonthly = ids.includes("ai-monthly");
    const isWeekly = ids.includes("ai-weekly");
    const icon = isMonthly ? "📆" : isWeekly ? "📅" : "📡";
    const suffix = isMonthly ? " 月报" : isWeekly ? " 周报" : "";
    const title = `${icon} agents-radar${suffix} · ${entry.date}`;

    const payload = {
      msg_type: "interactive",
      card: {
        header: { title: { tag: "plain_text", content: title }, template: "blue" },
        elements: [{ tag: "markdown", content }],
      },
    };

    return {
      json: {
        dryRun: true,
        date: entry.date,
        reports: entry.reports,
        hasHighlights: highlights !== null,
        webhooksConfigured: getWebhookUrls().length,
        payload,
      },
      lines: [
        kv("dryRun", true),
        kv("date", entry.date),
        kv("reports", entry.reports.length),
        kv("hasHighlights", highlights !== null),
        kv("webhooksConfigured", getWebhookUrls().length),
        kv("title", title),
        kv("contentChars", content.length),
        "content:",
        ...content.split("\n").map((l) => `  ${l}`),
      ],
    };
  },
};
