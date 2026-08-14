import { closeStaleIssues } from "../platform/publish/github-issues.ts";
import { createLogger } from "../core/logger.ts";

const log = createLogger("close-stale");

const STALE_DAYS = 7;

async function main(): Promise<void> {
  const closed = await closeStaleIssues(STALE_DAYS);
  log.info(`Closed ${closed} issue(s) older than ${STALE_DAYS} days.`);
}

main().catch((e: unknown) => {
  log.error(`Failed: ${e instanceof Error ? e.message : e}`);
  process.exit(1);
});
