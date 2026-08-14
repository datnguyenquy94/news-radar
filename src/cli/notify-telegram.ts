/**
 * Telegram notification — reads manifest.json and sends a message
 * with links to the latest reports. Skips silently if secrets are not set.
 *
 * Required env vars:
 *   TELEGRAM_BOT_TOKEN  — bot token from @BotFather
 *   TELEGRAM_CHAT_ID    — channel/group/user chat ID
 * Optional:
 *   PAGES_URL           — GitHub Pages base URL (defaults to the public deployment)
 */

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";
import { buildMessage, sendTelegram, type Highlights } from "../platform/notify/telegram.ts";
import { createLogger } from "../core/logger.ts";

const log = createLogger("notify");

async function main(): Promise<void> {
  const BOT_TOKEN = process.env["TELEGRAM_BOT_TOKEN"] ?? "";
  if (!BOT_TOKEN) {
    log.info("TELEGRAM_BOT_TOKEN not set — skipping.");
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

  // Load highlights if available
  let highlights: Highlights | null = null;
  const highlightsPath = path.join("digests", date, "highlights.json");
  if (fs.existsSync(highlightsPath)) {
    try {
      highlights = JSON.parse(fs.readFileSync(highlightsPath, "utf-8")) as Highlights;
    } catch {
      log.info("Failed to parse highlights.json — sending without highlights.");
    }
  }

  const text = buildMessage(date, reports, undefined, highlights);

  log.info(`Sending Telegram message for ${date} (${reports.length} reports)…`);
  await sendTelegram(text);
  log.info("Done!");
}

// Only auto-send when run directly (`tsx src/cli/notify-telegram.ts`). Guard prevents an
// accidental send when another module imports `buildMessage` from here.
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((e: unknown) => {
    log.error(`Failed: ${e instanceof Error ? e.message : e}`);
    process.exit(1);
  });
}
