import { runMonthlyRollup } from "../platform/reports/rollup.ts";
import { createLogger } from "../core/logger.ts";

const log = createLogger("monthly");

runMonthlyRollup().catch((err: unknown) => {
  log.fatal({ err }, "monthly rollup failed");
  process.exit(1);
});
