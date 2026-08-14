/**
 * Publishing digests as GitHub Issues.
 *
 * This is an output transport, not a data source — it writes to `DIGEST_REPO`,
 * the repo that hosts the digests, and never reads from the tracked projects.
 * It shares only the HTTP client with the readers, via
 * `providers/github/client.ts`, so there is exactly one place that knows how to
 * authenticate against GitHub.
 *
 * `DIGEST_REPO` is read at call time; when it is unset the pipeline skips these
 * calls entirely rather than this module short-circuiting.
 */

import { GITHUB_API, githubFetch, githubGet } from "../../providers/github/client.ts";
import { createLogger } from "../../core/logger.ts";

const log = createLogger("github");

const GITHUB_ISSUE_BODY_LIMIT = 65536;
const TRUNCATION_NOTICE =
  "\n\n---\n> ⚠️ Nội dung vượt quá giới hạn của GitHub Issue, xem báo cáo đầy đủ trong file Markdown đã commit.";

/** GitHub label colors by label name. Default: "0075ca". */
const LABEL_COLORS: Record<string, string> = {
  openclaw: "e11d48",
  trending: "f9a825",
  hn: "ff6600",
  ph: "da552f",
  weekly: "7c3aed",
  monthly: "0d9488",
  "digest-en": "1d76db",
  "openclaw-en": "f472b6",
  "web-en": "6366f1",
  "trending-en": "fbbf24",
  "hn-en": "fb923c",
  "ph-en": "e8854a",
  arxiv: "b31b1b",
  "arxiv-en": "d44a4a",
  hf: "ff9d00",
  "hf-en": "ffb84d",
  community: "2563eb",
  "community-en": "60a5fa",
  macro: "16a34a",
  "macro-en": "4ade80",
  vnmacro: "da2c38",
  "vnmacro-en": "f0616b",
};

function digestRepo(): string {
  return process.env["DIGEST_REPO"] ?? "";
}

export async function ensureLabel(name: string, color: string): Promise<void> {
  const resp = await githubFetch(`${GITHUB_API}/repos/${digestRepo()}/labels`, {
    method: "POST",
    json: { name, color },
  });
  if (!resp.ok && resp.status !== 422) {
    throw new Error(`Failed to create label "${name}": ${await resp.text()}`);
  }
}

/**
 * Break GitHub URLs in issue body to prevent cross-repository references.
 * Inserts a zero-width space in "github.com" so GitHub's auto-linker
 * won't create "mentioned this issue" notifications on external repos.
 */
function neutralizeGitHubRefs(text: string): string {
  return (
    text
      // Prevent "mentioned this issue" cross-references
      .replace(/https:\/\/github\.com\//g, "https://github\u200B.com/")
      // Prevent @mention notifications — insert zero-width space after @
      .replace(/@([a-zA-Z\d](?:[a-zA-Z\d]|-(?=[a-zA-Z\d])){0,38})/g, "@\u200B$1")
  );
}

/**
 * Close open issues created more than `days` days ago.
 * Uses pagination to handle large backlogs. Returns the number of issues closed.
 */
export async function closeStaleIssues(days: number): Promise<number> {
  const repo = digestRepo();
  if (!repo) return 0;
  const cutoff = new Date(Date.now() - days * 86_400_000);
  let closed = 0;

  // Always re-fetch page 1: closing issues shifts pagination, so incrementing
  // pages would skip items.
  while (true) {
    const issues = await githubGet<{ number: number; created_at: string }[]>(
      `${GITHUB_API}/repos/${repo}/issues`,
      { state: "open", sort: "created", direction: "asc", per_page: "100" },
    );
    if (issues.length === 0) break;

    const stale = issues.filter((i) => new Date(i.created_at) < cutoff);
    if (stale.length === 0) break;

    await Promise.all(
      stale.map(async (i) => {
        const resp = await githubFetch(`${GITHUB_API}/repos/${repo}/issues/${i.number}`, {
          method: "PATCH",
          json: { state: "closed" },
        });
        if (!resp.ok) log.error(`Failed to close #${i.number}: ${resp.status}`);
      }),
    );
    closed += stale.length;
  }
  return closed;
}

/**
 * Create a digest issue, downgrading any GitHub-side failure to a warning.
 *
 * By the time this runs the reports are already written to disk, so an issue
 * failure must never abort `main()` — a non-zero exit skips the workflow's
 * "Commit digest files" step and throws away the whole day's digest over a
 * problem that has nothing to do with the reports themselves.
 *
 * Returns the issue URL, or null when the issue could not be created.
 */
export async function tryCreateGitHubIssue(
  title: string,
  body: string,
  label: string,
): Promise<string | null> {
  try {
    return await createGitHubIssue(title, body, label);
  } catch (err) {
    log.error(`[issue] Skipped "${title}": ${err instanceof Error ? err.message : String(err)}`);
    // A 404 on the labels/issues endpoints is GitHub's answer for both "Issues
    // are turned off here" and "your token cannot see this repo" — it never
    // says which, and forks have Issues disabled by default.
    if (String(err).includes('"status":"404"') || String(err).includes("Not Found")) {
      log.error(
        `[issue] A 404 here usually means Issues are disabled on ${digestRepo()} ` +
          `(Settings → General → Features → Issues), or GH_TOKEN lacks Issues write access to it.`,
      );
    }
    return null;
  }
}

export async function createGitHubIssue(title: string, body: string, label: string): Promise<string> {
  body = neutralizeGitHubRefs(body);
  if (body.length > GITHUB_ISSUE_BODY_LIMIT) {
    body = body.slice(0, GITHUB_ISSUE_BODY_LIMIT - TRUNCATION_NOTICE.length) + TRUNCATION_NOTICE;
  }
  await ensureLabel(label, LABEL_COLORS[label] ?? "0075ca");
  const resp = await githubFetch(`${GITHUB_API}/repos/${digestRepo()}/issues`, {
    method: "POST",
    json: { title, body, labels: [label] },
  });
  if (!resp.ok) throw new Error(`Failed to create issue: ${await resp.text()}`);
  const data = (await resp.json()) as { html_url: string };
  return data.html_url;
}
