import { runWeeklyRollup } from "../platform/reports/rollup.ts";
import { createLogger } from "../core/logger.ts";

const log = createLogger("weekly");

runWeeklyRollup().catch((err: unknown) => {
  log.fatal({ err }, "weekly rollup failed");
  process.exit(1);
});
