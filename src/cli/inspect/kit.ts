/**
 * Shared kit for the `pnpm inspect` probes.
 *
 * Every probe is a `Target`: a name, a one-line summary, its option spec, and a
 * `run` that returns a `ProbeResult`. The dispatcher in `src/cli/inspect.ts`
 * owns argument parsing, output routing and the exit-code contract, so probe
 * modules never touch `process.exit` or `process.stdout` themselves.
 *
 * Exit-code contract (asserted by callers):
 *   0 — ran, produced output
 *   1 — ran, failed (network error, parse failure, unexpected shape)
 *   2 — skipped because a required secret/env var is absent
 *
 * Probe modules must not import heavy or side-effecting modules at the top
 * level — `src/platform/llm/client.ts` builds a provider at module scope, which
 * throws when the provider's key is unset. Import types statically and values
 * with `await import(...)` inside `run`, so `--list` stays cheap and a missing
 * key becomes an exit 2 rather than a crash.
 */

// ---------------------------------------------------------------------------
// Errors — mapped to exit codes by the dispatcher
// ---------------------------------------------------------------------------

/** Thrown when a required secret is absent. Dispatcher exits 2. */
export class SkipError extends Error {
  constructor(public readonly envVar: string) {
    super(`requires ${envVar}`);
    this.name = "SkipError";
  }
}

/** Thrown on bad input or a failed probe. Dispatcher exits 1. */
export class ProbeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = "ProbeError";
  }
}

/** Throw a SkipError when `envVar` is unset or empty. */
export function requireEnv(envVar: string): string {
  const value = process.env[envVar] ?? "";
  if (!value) throw new SkipError(envVar);
  return value;
}

/**
 * Env var each provider needs, mirroring the `PROVIDERS` registry in
 * `src/platform/llm/providers/index.ts`.
 */
const PROVIDER_KEYS: Record<string, string> = {
  anthropic: "ANTHROPIC_API_KEY",
  openai: "OPENAI_API_KEY",
  "github-copilot": "GH_TOKEN",
  openrouter: "OPENROUTER_API_KEY",
  deepseek: "DEEPSEEK_API_KEY",
};

/**
 * Guard for every target that makes a real LLM call.
 *
 * Must run *before* `src/platform/llm/client.ts` is imported: it builds a
 * provider at module scope and the SDK throws on a missing key, which would
 * surface as a crash (exit 1) instead of a clean skip (exit 2). Calling it
 * before the data fetch also makes the skip instant and free of network I/O.
 */
export function requireProviderKey(): { provider: string; envVar: string } {
  const provider = process.env["LLM_PROVIDER"] ?? "anthropic";
  const envVar = PROVIDER_KEYS[provider];
  if (!envVar) {
    throw new ProbeError(`LLM_PROVIDER="${provider}" is not one of ${Object.keys(PROVIDER_KEYS).join(", ")}`);
  }
  requireEnv(envVar);
  return { provider, envVar };
}

/**
 * Readable one-line rendering of a thrown value, following `cause` chains.
 * Node's `fetch` rejects with a bare `TypeError: fetch failed` whose only
 * useful detail (ENOTFOUND, ECONNREFUSED, …) hides in `cause`.
 */
export function describeError(err: unknown): string {
  const parts: string[] = [];
  let current: unknown = err;
  for (let depth = 0; current && depth < 4; depth++) {
    const e = current as { message?: string; code?: string; name?: string; cause?: unknown };
    const label = e.message ?? String(current);
    parts.push(e.code ? `${label} (${e.code})` : label);
    current = e.cause;
  }
  return parts.join(" — ");
}

// ---------------------------------------------------------------------------
// Target shape
// ---------------------------------------------------------------------------

export interface OptionSpec {
  /** Long option name without the leading dashes. */
  name: string;
  /** Placeholder for the option's value; omit for boolean flags. */
  arg?: string;
  desc: string;
}

export interface ProbeResult {
  /** Raw result — printed verbatim by `--json`. */
  json: unknown;
  /** Compact human-readable summary, one entry per stdout line. */
  lines: string[];
  /**
   * Set when the probe itself ran fine but the thing it probed is broken
   * (e.g. `fetchSuccess: false`). Output is still printed; exit code is 1.
   */
  failure?: string;
}

export interface Target {
  name: string;
  summary: string;
  options?: OptionSpec[];
  /** Env vars this target reads; listed by `--help`. */
  env?: string[];
  run(args: Args): Promise<ProbeResult>;
}

// ---------------------------------------------------------------------------
// Argument parsing
// ---------------------------------------------------------------------------

/** Options every target accepts. */
export const UNIVERSAL_OPTIONS: OptionSpec[] = [
  { name: "json", desc: "print the raw result as JSON instead of a summary" },
  { name: "help", desc: "print this target's options and exit" },
];

export class Args {
  constructor(
    private readonly opts: Map<string, string | true>,
    readonly positional: string[],
  ) {}

  has(name: string): boolean {
    return this.opts.has(name);
  }

  /** Value of `--name <value>`; undefined when absent or given as a bare flag. */
  str(name: string): string | undefined {
    const v = this.opts.get(name);
    return typeof v === "string" ? v : undefined;
  }

  requireStr(name: string): string {
    const v = this.str(name);
    if (v === undefined) throw new ProbeError(`--${name} <value> is required`);
    return v;
  }

  num(name: string, fallback: number): number {
    const raw = this.str(name);
    if (raw === undefined) return fallback;
    const n = Number(raw);
    if (!Number.isFinite(n)) throw new ProbeError(`--${name} must be a number, got "${raw}"`);
    return n;
  }

  /** Comma-separated list, trimmed and de-blanked. */
  list(name: string): string[] | undefined {
    const raw = this.str(name);
    if (raw === undefined) return undefined;
    return raw
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  /** Names of every option supplied — used to reject typos. */
  keys(): string[] {
    return [...this.opts.keys()];
  }
}

/**
 * Parse `--name value`, `--name=value` and bare `--flag`. A `--name` whose next
 * token starts with `--` (or is missing) is a boolean flag.
 */
export function parseArgs(argv: string[]): Args {
  const opts = new Map<string, string | true>();
  const positional: string[] = [];

  for (let i = 0; i < argv.length; i++) {
    const token = argv[i]!;
    if (!token.startsWith("--")) {
      positional.push(token);
      continue;
    }
    const body = token.slice(2);
    const eq = body.indexOf("=");
    if (eq >= 0) {
      opts.set(body.slice(0, eq), body.slice(eq + 1));
      continue;
    }
    const next = argv[i + 1];
    if (next === undefined || next.startsWith("--")) {
      opts.set(body, true);
    } else {
      opts.set(body, next);
      i++;
    }
  }

  return new Args(opts, positional);
}

/** Reject options the target does not declare, so typos fail loudly. */
export function rejectUnknownOptions(target: Target, args: Args): void {
  const allowed = new Set([
    ...UNIVERSAL_OPTIONS.map((o) => o.name),
    ...(target.options ?? []).map((o) => o.name),
  ]);
  const unknown = args.keys().filter((k) => !allowed.has(k));
  if (unknown.length > 0) {
    throw new ProbeError(
      `unknown option(s) for "${target.name}": ${unknown.map((u) => `--${u}`).join(", ")}. ` +
        `Run \`pnpm inspect ${target.name} --help\`.`,
    );
  }
}

// ---------------------------------------------------------------------------
// Summary formatting helpers
// ---------------------------------------------------------------------------

/** Single-line, length-capped rendering of an arbitrary string. */
export function oneLine(s: string, max = 100): string {
  const flat = s.replace(/\s+/g, " ").trim();
  return flat.length > max ? `${flat.slice(0, max - 1)}…` : flat;
}

/** `key: value` line with a two-space indent for nested detail. */
export function kv(key: string, value: unknown): string {
  return `${key}: ${String(value)}`;
}

/** Numbered sample list, indented under its heading. */
export function sample<T>(
  items: readonly T[],
  limit: number,
  render: (item: T, i: number) => string,
): string[] {
  return items.slice(0, limit).map((item, i) => `  ${i + 1}. ${render(item, i)}`);
}

/** Read a JSON fixture, failing with a message that names the path. */
export async function readJsonFile<T>(filePath: string): Promise<T> {
  const fs = await import("node:fs");
  let raw: string;
  try {
    raw = fs.readFileSync(filePath, "utf-8");
  } catch (err) {
    throw new ProbeError(`cannot read ${filePath}: ${err instanceof Error ? err.message : String(err)}`);
  }
  try {
    return JSON.parse(raw) as T;
  } catch (err) {
    throw new ProbeError(
      `${filePath} is not valid JSON: ${err instanceof Error ? err.message : String(err)}`,
    );
  }
}
