import { main } from "../platform/reports/manifest.ts";

// Run only when executed directly (not imported for testing)
const isDirectRun =
  process.argv[1] &&
  (process.argv[1].endsWith("generate-manifest.ts") || process.argv[1].endsWith("generate-manifest.js"));
if (isDirectRun) {
  main().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
