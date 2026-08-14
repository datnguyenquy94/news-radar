/**
 * The single logger for the whole pipeline (pino).
 *
 * Everything goes to **stderr**, always. stdout is a data channel here —
 * `pnpm inspect <target> --json` pipes its result into `jq` — so a diagnostic
 * must never land there. Writes are synchronous and there is no transport
 * worker thread, because the entrypoints call `process.exit()` on failure and
 * an async transport can lose the last lines on the way out.
 *
 * Output format: JSON by default (what GitHub Actions and log collectors want),
 * human-readable when stderr is a TTY and `CI` is unset. Override either way
 * with `LOG_PRETTY=1` / `LOG_PRETTY=0`. Verbosity comes from `LOG_LEVEL`
 * (default `info`).
 *
 * Modules never import `logger` directly — they take a named child:
 *
 *   const log = createLogger("vnmarket");
 *   log.info("Fetching SSI board + Entrade bars...");
 *   log.error(`${ex} board failed: ${err}`);
 *
 * The name replaces the `[tag]` prefixes these messages used to carry by hand.
 */

import { pino, destination as pinoDestination, type Logger } from "pino";
import pretty from "pino-pretty";

/** stderr. Results go to stdout; logs never do. */
const STDERR_FD = 2;

const LOG_LEVEL = process.env["LOG_LEVEL"] ?? "info";

/** Pretty when a human is watching, JSON when a machine is. `LOG_PRETTY` wins. */
function wantsPretty(): boolean {
  const raw = process.env["LOG_PRETTY"];
  if (raw !== undefined && raw !== "") return raw !== "0" && raw !== "false";
  return Boolean(process.stderr.isTTY) && !process.env["CI"];
}

const destination = wantsPretty()
  ? pretty({
      destination: STDERR_FD,
      sync: true,
      colorize: true,
      translateTime: "HH:MM:ss",
      ignore: "pid,hostname",
      // One record, one line. Without this pino-pretty breaks the merge object
      // out into an indented block under the message, so a call that logs
      // `{ call, ms, attempts }` costs four lines instead of one.
      singleLine: true,
    })
  : pinoDestination({ dest: STDERR_FD, sync: true });

/** Root logger. Prefer `createLogger(name)` — a bare root line has no origin. */
export const logger = pino(
  {
    level: LOG_LEVEL,
    // No pid/hostname: this is a single-process batch job, both are noise.
    base: null,
  },
  destination,
);

/**
 * A child logger tagged with the module it speaks for — `vnmarket`, `fred`,
 * `llm`, … The name is what the old `[tag]` message prefixes encoded.
 */
export function createLogger(name: string): Logger {
  return logger.child({ name });
}
