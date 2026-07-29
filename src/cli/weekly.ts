import { runWeeklyRollup } from "../platform/reports/rollup.ts";

runWeeklyRollup().catch((err) => {
  console.error(err);
  process.exit(1);
});
