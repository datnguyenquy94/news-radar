/**
 * GitHub Search API — repositories by topic.
 *
 * Each query is independent: one failing topic logs and yields nothing rather
 * than sinking the others, because the six topics overlap heavily and losing one
 * barely dents coverage.
 */

import { GITHUB_API, githubGet } from "./client.ts";
import { createLogger } from "../../core/logger.ts";

const log = createLogger("trending:search");

export interface SearchRepo {
  fullName: string;
  description: string | null;
  language: string | null;
  stargazersCount: number;
  pushedAt: string;
  url: string;
  searchQuery: string;
}

interface SearchApiItem {
  full_name: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  pushed_at: string;
  html_url: string;
}

interface SearchApiResponse {
  items: SearchApiItem[];
}

export const AI_TOPIC_QUERIES = [
  { q: "topic:llm", label: "llm" },
  { q: "topic:ai-agent", label: "ai-agent" },
  { q: "topic:rag", label: "rag" },
  { q: "topic:vector-database", label: "vector-db" },
  { q: "topic:large-language-model", label: "llm-model" },
  { q: "topic:machine-learning", label: "ml" },
];

const PER_QUERY = 15;

/** Repos across `AI_TOPIC_QUERIES` pushed since `pushedSince` (YYYY-MM-DD), deduped by full name. */
export async function searchAiRepos(pushedSince: string): Promise<SearchRepo[]> {
  const seen = new Set<string>();
  const all: SearchRepo[] = [];

  await Promise.all(
    AI_TOPIC_QUERIES.map(async ({ q, label }) => {
      try {
        // Hand-built rather than passed as `params`: GitHub's search syntax uses
        // raw `+` and `>` separators that URLSearchParams would re-encode.
        const query = `${q}+pushed:>${pushedSince}&sort=stars&order=desc`;
        const data = await githubGet<SearchApiResponse>(
          `${GITHUB_API}/search/repositories?q=${query}&per_page=${PER_QUERY}`,
        );
        let added = 0;
        for (const item of data.items ?? []) {
          if (seen.has(item.full_name)) continue;
          seen.add(item.full_name);
          all.push({
            fullName: item.full_name,
            description: item.description,
            language: item.language,
            stargazersCount: item.stargazers_count,
            pushedAt: item.pushed_at,
            url: item.html_url,
            searchQuery: label,
          });
          added++;
        }
        log.info(`"${label}": ${added} new repos`);
      } catch (err) {
        log.error(`"${label}": ${err}`);
      }
    }),
  );

  return all;
}
