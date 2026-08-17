/**
 * Shared helpers for the live source-contract tests.
 *
 * These tests call the real endpoints. Their job is not to check our parsing
 * logic — the mocked unit tests alongside them do that — but to fail when an
 * upstream source changes its response and our module silently starts
 * producing empty strings, zeros or nulls where it used to produce data.
 *
 * That is why the assertions below are deliberately strict about *emptiness*.
 * Every fetcher in `domains/` maps a missing upstream field to `""`, `0` or
 * `null` rather than throwing, so a renamed field never surfaces as an error —
 * it surfaces as a well-formed object full of blanks. `expectPopulated` is what
 * turns that silent degradation into a red test naming the exact field.
 *
 * Assertions are written to survive normal variation in live data: never assert
 * an exact count, a specific item, or a value that moves with the market. Assert
 * that the *shape* is intact and the fields we depend on carry real values.
 */

// Secrets live in .env for local runs, exactly as the pipeline entrypoints
// read them. Without this, the GH_TOKEN / PRODUCTHUNT_TOKEN tests would skip
// even when the developer has the credentials configured.
import "dotenv/config";

import { expect } from "vitest";

/**
 * Network calls to Vietnamese broker endpoints, sitemap crawls and a 1 MB PDF
 * download all run well past vitest's 5 s default.
 */
export const LIVE_TIMEOUT = 90_000;

/**
 * Standard options for a live test: generous timeout plus bounded retries.
 *
 * Retries exist for transient failure only — Yahoo in particular rate-limits
 * when several symbols are requested at once, and a throttled response is
 * indistinguishable from drift on a single attempt. The assertions stay strict:
 * a genuine format change fails all three attempts, while a blip passes on the
 * second. Without this the suite cries wolf often enough to be ignored, which
 * would defeat the point of running it in `pnpm test`.
 */
export const LIVE_OPTS = { timeout: LIVE_TIMEOUT, retry: 2 } as const;

/** Sources that need a secret; without it the suite skips rather than fails. */
export const hasEnv = (name: string): boolean => Boolean(process.env[name]);

const DAY_MS = 24 * 60 * 60 * 1000;

/** A `Date` `days` before now — most probes ask for a recent window. */
export const daysAgo = (days: number): Date => new Date(Date.now() - days * DAY_MS);

/** `YYYY-MM-DD`, the form every date-filtered endpoint here expects. */
export const isoDate = (d: Date): string => d.toISOString().slice(0, 10);

/**
 * Assert a collection came back with something in it.
 *
 * An empty array is the single most common symptom of upstream drift: the
 * request still returns 200, but the field we iterate has been renamed, so the
 * map produces nothing.
 */
export function expectNonEmpty<T>(items: T[], what: string): void {
  expect(Array.isArray(items), `${what} should be an array`).toBe(true);
  expect(items.length, `${what} came back empty — the source shape likely changed`).toBeGreaterThan(0);
}

type FieldSpec = "string" | "number" | "string[]" | "number?" | "string?";

/**
 * Assert every sampled row carries the fields the report depends on, with real
 * values — a present-but-empty string or a NaN counts as a failure.
 *
 * `number?` / `string?` allow null for fields that are legitimately absent on
 * some rows, while still rejecting a wrong type.
 */
export function expectPopulated<T extends object>(
  rows: T[],
  spec: Partial<Record<keyof T, FieldSpec>>,
  what: string,
  sampleSize = 3,
): void {
  const sample = rows.slice(0, sampleSize);
  expect(sample.length, `${what}: nothing to sample`).toBeGreaterThan(0);

  for (const [i, row] of sample.entries()) {
    for (const [field, kind] of Object.entries(spec) as [keyof T, FieldSpec][]) {
      const value = row[field];
      const where = `${what}[${i}].${String(field)}`;

      if (kind === "number?" || kind === "string?") {
        if (value === null || value === undefined) continue;
      } else {
        expect(value, `${where} is missing — upstream may have renamed it`).not.toBeUndefined();
        expect(value, `${where} is null — upstream may have renamed it`).not.toBeNull();
      }

      if (kind === "string" || kind === "string?") {
        expect(typeof value, `${where} should be a string`).toBe("string");
        expect((value as string).trim().length, `${where} is an empty string`).toBeGreaterThan(0);
      } else if (kind === "number" || kind === "number?") {
        expect(typeof value, `${where} should be a number`).toBe("number");
        expect(Number.isFinite(value as number), `${where} is not a finite number`).toBe(true);
      } else {
        expect(Array.isArray(value), `${where} should be an array`).toBe(true);
      }
    }
  }
}

/**
 * Assert at least one row in the whole set carries a non-null value.
 *
 * For fields our parsers null out per row when the upstream field is absent
 * (foreign room, a PDF page list). Every row being null across a live response
 * means the field is gone, not that today's data happens to lack it.
 */
export function expectSomePopulated<T>(rows: T[], pick: (row: T) => unknown, what: string): void {
  const populated = rows.filter((r) => {
    const v = pick(r);
    return v !== null && v !== undefined && v !== "";
  });
  expect(
    populated.length,
    `${what}: every row was null/empty — the source field likely vanished`,
  ).toBeGreaterThan(0);
}

/** Assert a value looks like an absolute http(s) URL. */
export function expectUrl(value: string, what: string): void {
  expect(value, `${what} should be an absolute URL`).toMatch(/^https?:\/\/\S+$/);
}

/** Assert a value parses as a date — catches a timestamp format change. */
export function expectDateLike(value: string, what: string): void {
  expect(value.trim().length, `${what} is empty`).toBeGreaterThan(0);
  expect(Number.isNaN(Date.parse(value)), `${what} is not a parseable date: ${JSON.stringify(value)}`).toBe(
    false,
  );
}

/** Assert an ISO calendar date, `YYYY-MM-DD`. */
export function expectIsoDate(value: string, what: string): void {
  expect(value, `${what} should be YYYY-MM-DD`).toMatch(/^\d{4}-\d{2}-\d{2}$/);
}
