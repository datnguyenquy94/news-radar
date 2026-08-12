/**
 * Persistence for the web crawler's seen-URL state.
 *
 * `digests/web-state.json` is committed to git on every run and is the source of
 * truth for which sitemap URLs have already been reported. The file lives here
 * rather than beside the fetcher because reading and writing the repo is an
 * output concern: `feeds/ai/web.ts` takes the state as an argument and mutates
 * it in memory, and never touches the filesystem.
 *
 * `main()` in `cli/daily.ts` saves once, after every language's `saveWebReport`
 * has run — the state is language-agnostic.
 */

import fs from "node:fs";
import path from "node:path";

import type { WebState } from "../../feeds/ai/web.ts";

const STATE_FILE = path.join("digests", "web-state.json");

export function emptyState(): WebState {
  return {
    anthropic: { lastChecked: "", seenUrls: {} },
    openai: { lastChecked: "", seenUrls: {} },
  };
}

export function loadWebState(): WebState {
  try {
    return JSON.parse(fs.readFileSync(STATE_FILE, "utf-8")) as WebState;
  } catch {
    return emptyState();
  }
}

export function saveWebState(state: WebState): void {
  fs.mkdirSync(path.dirname(STATE_FILE), { recursive: true });
  fs.writeFileSync(STATE_FILE, JSON.stringify(state, null, 2), "utf-8");
}
