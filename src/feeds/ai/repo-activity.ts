/**
 * Tracked-repo activity — payload for the `ai-cli` and `ai-agents` reports.
 *
 * The one feed serving two reports: both want the same shape (issues, PRs and
 * releases since a cutoff) and differ only in which slice of `config.yml` they
 * read. `cli/daily.ts` splits the result by repo id.
 *
 * A repo that fails degrades to empty rather than sinking the run — a digest
 * missing one project still ships.
 */

import {
  fetchRecentItems,
  fetchRecentReleases,
  fetchSkillsData,
  type GitHubItem,
  type GitHubRelease,
} from "../../providers/github/repos.ts";
import type { RepoConfig } from "../../core/config.ts";

export type { GitHubItem, GitHubRelease };

export interface RepoFetch {
  cfg: RepoConfig;
  issues: GitHubItem[];
  prs: GitHubItem[];
  releases: GitHubRelease[];
}

export interface SkillsData {
  prs: GitHubItem[];
  issues: GitHubItem[];
}

/** Issues, PRs and releases for one repo since `since`. Never throws. */
export async function fetchRepoActivity(cfg: RepoConfig, since: Date): Promise<RepoFetch> {
  try {
    const [issuesRaw, prs, releases] = await Promise.all([
      fetchRecentItems(cfg.repo, "issues", since, cfg.paginated),
      fetchRecentItems(cfg.repo, "pulls", since, cfg.paginated),
      fetchRecentReleases(cfg.repo, since),
    ]);
    // GitHub's /issues endpoint returns PRs too; drop them.
    const issues = issuesRaw.filter((i) => !i.pull_request);
    console.log(`  [${cfg.id}] issues: ${issues.length}, prs: ${prs.length}, releases: ${releases.length}`);
    return { cfg, issues, prs, releases };
  } catch (err) {
    console.error(`  [${cfg.id}] fetch failed: ${err}`);
    return { cfg, issues: [], prs: [], releases: [] };
  }
}

export function fetchAllRepoActivity(configs: RepoConfig[], since: Date): Promise<RepoFetch[]> {
  return Promise.all(configs.map((cfg) => fetchRepoActivity(cfg, since)));
}

/** Popular open PRs and issues on the skills repo. Never throws. */
export async function fetchSkills(repo: string): Promise<SkillsData> {
  try {
    const data = await fetchSkillsData(repo);
    console.log(`  [claude-code-skills] prs: ${data.prs.length}, issues: ${data.issues.length}`);
    return data;
  } catch (err) {
    console.error(`  [claude-code-skills] fetch failed: ${err}`);
    return { prs: [], issues: [] };
  }
}
