import { runMonthlyRollup } from "../platform/reports/rollup.ts";

runMonthlyRollup().catch((err) => {
  console.error(err);
  process.exit(1);
});
