/**
 * Vitest `globalSetup` for the provider status table.
 *
 * `setup` runs once before any worker starts and `teardown` once after the last
 * one finishes — the only two points in a run where the per-file workers are
 * not in the way. Recording itself happens in `status.ts`.
 *
 * This is wired for every run, not just the live one: with no provider probes
 * in the selection, `printProviderStatus` finds no rows and prints nothing.
 */

import { printProviderStatus, resetProviderStatus } from "./status.ts";

export function setup(): void {
  resetProviderStatus();
}

export function teardown(): void {
  printProviderStatus();
}
