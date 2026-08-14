import { main } from "../platform/reports/manifest.ts";
import { createLogger } from "../core/logger.ts";

const log = createLogger("manifest");

// Run only when executed directly (not imported for testing)
const isDirectRun =
  process.argv[1] &&
  (process.argv[1].endsWith("generate-manifest.ts") || process.argv[1].endsWith("generate-manifest.js"));
if (isDirectRun) {
  main().catch((err: unknown) => {
    log.fatal({ err }, "manifest generation failed");
    process.exit(1);
  });
}
