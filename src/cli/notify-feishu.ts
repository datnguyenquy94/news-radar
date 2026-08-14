/**
 * Feishu (Lark) notification — reads manifest.json and sends a card message
 * with links to the latest reports. Skips silently if secrets are not set.
 *
 * Required env vars:
 *   FEISHU_WEBHOOK_URLS — comma-separated list of custom bot webhook URLs
 *                         (also accepts legacy FEISHU_WEBHOOK_URL for one URL)
 * Optional:
 *   PAGES_URL           — GitHub Pages base URL (defaults to the public deployment)
 */

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { buildFeishuMessage, getWebhookUrls, sendFeishu } from "../platform/notify/feishu.ts";
import type { Highlights } from "../platform/notify/telegram.ts";
import { createLogger } from "../core/logger.ts";

const log = createLogger("feishu");

async function main(): Promise<void> {
  const urls = getWebhookUrls();
  if (!urls.length) {
    log.info("FEISHU_WEBHOOK_URLS not set — skipping.");
    return;
  }

  if (!fs.existsSync("manifest.json")) {
    log.info("manifest.json not found — skipping.");
    return;
  }

  const { dates } = JSON.parse(fs.readFileSync("manifest.json", "utf-8")) as {
    dates: { date: string; reports: string[] }[];
  };

  const latest = dates?.[0];
  if (!latest) {
    log.info("manifest is empty — skipping.");
    return;
  }
  const { date, reports } = latest;

  let highlights: Highlights | null = null;
  const highlightsPath = path.join("digests", date, "highlights.json");
  if (fs.existsSync(highlightsPath)) {
    try {
      highlights = JSON.parse(fs.readFileSync(highlightsPath, "utf-8")) as Highlights;
    } catch {
      log.info("Failed to parse highlights.json — sending without highlights.");
    }
  }

  const isMonthly = reports.some((r) => r === "ai-monthly");
  const isWeekly = reports.some((r) => r === "ai-weekly");
  const icon = isMonthly ? "📆" : isWeekly ? "📅" : "📡";
  const suffix = isMonthly ? " báo cáo tháng" : isWeekly ? " báo cáo tuần" : "";
  const title = `${icon} agents-radar${suffix} · ${date}`;

  const content = buildFeishuMessage(date, reports, undefined, highlights);

  log.info(`Sending to ${urls.length} webhook(s) for ${date} (${reports.length} reports)…`);
  await sendFeishu(title, content);
  log.info("Done!");
}

// Only auto-send when run directly (`tsx src/cli/notify-feishu.ts`). Guard prevents an
// accidental send when another module imports from here.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((e: unknown) => {
    log.error(`Failed: ${e instanceof Error ? e.message : e}`);
    process.exit(1);
  });
}
