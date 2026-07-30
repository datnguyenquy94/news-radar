/**
 * Per-module CLI probes — run one module and see what it actually returns.
 *
 *   pnpm inspect --list                 every target, one line each
 *   pnpm inspect <target> [options]     run one target
 *   pnpm inspect <target> --help        that target's options
 *
 * The pipeline entrypoints (`pnpm start`, `pnpm weekly`, …) exercise everything
 * at once; this exercises one thing at a time, with real input, and prints the
 * result. Probe implementations live in `src/cli/inspect/`, one module per
 * domain group; this file is only the registry, the arg parser and the
 * exit-code contract:
 *
 *   0 — ran, produced output
 *   1 — ran, failed (network error, parse failure, unexpected shape)
 *   2 — skipped because a required secret/env var is absent
 *
 * Output routing: results go to stdout (`--json` for raw JSON), everything else
 * — including the `console.log` diagnostics the probed modules emit — is routed
 * to stderr, so `pnpm -s inspect vnmarket --json | jq` works. (`-s` silences
 * pnpm's own run banner, which pnpm prints to stdout.)
 *
 * Probes never write outside a temp dir, never create GitHub issues and never
 * send notifications.
 */

import "dotenv/config";
import { pathToFileURL } from "node:url";
import {
  ProbeError,
  SkipError,
  UNIVERSAL_OPTIONS,
  parseArgs,
  rejectUnknownOptions,
  type Target,
} from "./inspect/kit.ts";

// ---------------------------------------------------------------------------
// Output routing
// ---------------------------------------------------------------------------

/** Results only. Never used for diagnostics. */
function out(text: string): void {
  process.stdout.write(`${text}\n`);
}

/**
 * Route every console channel to stderr for the rest of the process. The probed
 * modules log progress with `console.log`; that must not land in the JSON a
 * caller is piping into `jq`.
 */
function routeConsoleToStderr(): void {
  const toStderr = (...parts: unknown[]): void => {
    console.error(...parts);
  };
  console.log = toStderr;
  console.info = toStderr;
  console.debug = toStderr;
  console.warn = toStderr;
}

// ---------------------------------------------------------------------------
// Help
// ---------------------------------------------------------------------------

function usage(targets: Target[]): string[] {
  return [
    "usage: pnpm inspect <target> [options]",
    "       pnpm inspect --list",
    "       pnpm inspect <target> --help",
    "",
    "exit codes: 0 = ok, 1 = failed, 2 = skipped (missing env var)",
    "",
    "pipe JSON with `pnpm -s inspect <target> --json | jq` — pnpm prints its run",
    "banner to stdout, and -s silences it.",
    "",
    `${targets.length} targets — run \`pnpm inspect --list\` for the full list.`,
  ];
}

function listTargets(targets: Target[]): string[] {
  const width = Math.max(...targets.map((t) => t.name.length));
  return targets.map((t) => `${t.name.padEnd(width)}  ${t.summary}`);
}

function targetHelp(target: Target): string[] {
  const lines = [`pnpm inspect ${target.name} [options]`, "", target.summary, "", "options:"];
  const opts = [...(target.options ?? []), ...UNIVERSAL_OPTIONS];
  const rendered = opts.map((o) => ({ flag: `--${o.name}${o.arg ? ` <${o.arg}>` : ""}`, desc: o.desc }));
  const width = Math.max(...rendered.map((r) => r.flag.length));
  for (const r of rendered) lines.push(`  ${r.flag.padEnd(width)}  ${r.desc}`);
  if (target.env?.length) {
    lines.push("", `env: ${target.env.join(", ")}`);
  }
  return lines;
}

// ---------------------------------------------------------------------------
// Main
// ---------------------------------------------------------------------------

async function main(argv: string[]): Promise<number> {
  const args = parseArgs(argv);

  // Imported lazily so the console routing above is installed before any probed
  // module's top-level code (e.g. the LLM provider factory) can log.
  const { TARGETS } = await import("./inspect/registry.ts");
  const targets = [...TARGETS].sort((a, b) => a.name.localeCompare(b.name));

  if (args.has("list")) {
    for (const line of listTargets(targets)) out(line);
    return 0;
  }

  const name = args.positional[0];
  if (!name) {
    // Usage is a diagnostic, not a result — stderr, like every other message
    // that is not the output of a target.
    for (const line of usage(targets)) console.error(line);
    return args.has("help") ? 0 : 1;
  }

  const target = targets.find((t) => t.name === name);
  if (!target) {
    console.error(`unknown target: ${name}`);
    console.error(`Run \`pnpm inspect --list\` to see the ${targets.length} available targets.`);
    return 1;
  }

  if (args.has("help")) {
    for (const line of targetHelp(target)) out(line);
    return 0;
  }

  try {
    rejectUnknownOptions(target, args);
    const started = Date.now();
    const result = await target.run(args);
    console.error(`[inspect] ${target.name} finished in ${((Date.now() - started) / 1000).toFixed(1)}s`);

    if (args.has("json")) {
      out(JSON.stringify(result.json, null, 2));
    } else {
      for (const line of result.lines) out(line);
    }

    if (result.failure) {
      console.error(`FAILED: ${target.name} — ${result.failure}`);
      return 1;
    }
    return 0;
  } catch (err) {
    if (err instanceof SkipError) {
      console.error(`SKIPPED: ${target.name} requires ${err.envVar}`);
      return 2;
    }
    if (err instanceof ProbeError) {
      console.error(`ERROR: ${target.name} — ${err.message}`);
      return 1;
    }
    console.error(`ERROR: ${target.name} —`, err);
    return 1;
  }
}

/** Exported for reuse; the guard below is what makes this file the entrypoint. */
export async function runInspect(argv: string[]): Promise<number> {
  routeConsoleToStderr();
  return main(argv);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  runInspect(process.argv.slice(2))
    .then((code) => {
      process.exitCode = code;
    })
    .catch((err: unknown) => {
      console.error("[inspect]", err);
      process.exitCode = 1;
    });
}
