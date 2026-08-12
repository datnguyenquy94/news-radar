/**
 * GitHub repository activity — issues, pull requests and releases.
 *
 * Provider layer: this knows GitHub's REST shapes and nothing about our reports
 * or our `config.yml`. It takes a plain `owner/repo` slug and throws `HttpError`
 * on failure; deciding what an outage means for a digest is the feed's job.
 */

import { GITHUB_API, githubGet } from "./client.ts";

// ---------------------------------------------------------------------------
// API response types
// ---------------------------------------------------------------------------

export interface GitHubUser {
  login: string;
}

export interface GitHubLabel {
  name: string;
}

export interface GitHubReactions {
  "+1": number;
}

export interface GitHubItem {
  number: number;
  title: string;
  state: string;
  user: GitHubUser;
  labels: GitHubLabel[];
  created_at: string;
  updated_at: string;
  comments: number;
  reactions?: GitHubReactions;
  body?: string | null;
  html_url: string;
  pull_request?: unknown;
}

export interface GitHubRelease {
  tag_name: string;
  name: string;
  body?: string | null;
  published_at: string;
}

// ---------------------------------------------------------------------------
// Internals
// ---------------------------------------------------------------------------

/** Maximum pages to fetch for paginated repos (100 items/page). */
const MAX_PAGES = 5;

async function fetchItemPage(
  repo: string,
  itemType: "issues" | "pulls",
  since: Date,
  page: number,
): Promise<GitHubItem[]> {
  const params: Record<string, string> = {
    state: "all",
    sort: "updated",
    direction: "desc",
    per_page: "100",
    page: String(page),
  };
  // /pulls does not support `since`; filter client-side instead
  if (itemType === "issues") params["since"] = since.toISOString();

  const items = await githubGet<GitHubItem[]>(`${GITHUB_API}/repos/${repo}/${itemType}`, params);
  return itemType === "pulls" ? items.filter((i) => new Date(i.updated_at) >= since) : items;
}

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

/**
 * Fetch items updated since `since`.
 * `paginated`: keeps fetching until a page ends before `since` or MAX_PAGES reached.
 * Otherwise: a single page of 50.
 */
export async function fetchRecentItems(
  repo: string,
  itemType: "issues" | "pulls",
  since: Date,
  paginated = false,
): Promise<GitHubItem[]> {
  if (!paginated) {
    const params: Record<string, string> = {
      state: "all",
      sort: "updated",
      direction: "desc",
      per_page: "50",
    };
    if (itemType === "issues") params["since"] = since.toISOString();
    const items = await githubGet<GitHubItem[]>(`${GITHUB_API}/repos/${repo}/${itemType}`, params);
    return itemType === "pulls" ? items.filter((i) => new Date(i.updated_at) >= since) : items;
  }

  const all: GitHubItem[] = [];
  for (let page = 1; page <= MAX_PAGES; page++) {
    const items = await fetchItemPage(repo, itemType, since, page);
    if (items.length === 0) break;
    all.push(...items);
    const last = items[items.length - 1];
    if (last && new Date(last.updated_at) < since) break;
    if (items.length < 100) break;
  }
  return all;
}

export async function fetchRecentReleases(repo: string, since: Date): Promise<GitHubRelease[]> {
  const releases = await githubGet<GitHubRelease[]>(`${GITHUB_API}/repos/${repo}/releases`, {
    per_page: "10",
  });
  return releases.filter((r) => new Date(r.published_at) >= since);
}

/**
 * Fetch trending skills data from a skills repo (e.g. anthropics/skills).
 * PRs sorted by popularity (comment count); issues sorted by comments.
 * No `since` filter — we want all-time hot items, not just the last 24 h.
 */
export async function fetchSkillsData(repo: string): Promise<{ prs: GitHubItem[]; issues: GitHubItem[] }> {
  const [prs, issuesRaw] = await Promise.all([
    githubGet<GitHubItem[]>(`${GITHUB_API}/repos/${repo}/pulls`, {
      state: "open",
      sort: "popularity",
      direction: "desc",
      per_page: "50",
    }),
    githubGet<GitHubItem[]>(`${GITHUB_API}/repos/${repo}/issues`, {
      state: "all",
      sort: "comments",
      direction: "desc",
      per_page: "50",
    }),
  ]);
  return { prs, issues: issuesRaw.filter((i) => !i.pull_request) };
}
