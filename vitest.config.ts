import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["src/__tests__/**/*.test.ts"],
    // Truncates the provider-probe log before the run and prints the status
    // table after it; a no-op when no live provider test was selected.
    globalSetup: ["src/__tests__/live/global-status.ts"],
    coverage: {
      provider: "v8",
      include: ["src/**/*.ts"],
      exclude: ["src/__tests__/**", "src/cli/weekly.ts", "src/cli/monthly.ts"],
    },
  },
});
