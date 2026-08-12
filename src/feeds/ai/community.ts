/**
 * Tech-community AI posts — payload for the `ai-community` report.
 *
 * Two publishers feed one report, so they are fetched together here rather than
 * assembled in the orchestrator: Dev.to (Forem API) and Lobste.rs. Either side
 * failing leaves the other worth reporting, so `fetchSuccess` is per-source and
 * the saver decides what an empty half means.
 */

import { AI_TAGS, fetchTagArticles, type DevtoArticle } from "../../providers/devto.ts";
import { TAG_URLS, fetchTagStories, type LobstersStory } from "../../providers/lobsters.ts";

export type { DevtoArticle, LobstersStory };

export interface DevtoData {
  articles: DevtoArticle[];
  fetchSuccess: boolean;
}

export interface LobstersData {
  stories: LobstersStory[];
  fetchSuccess: boolean;
}

export interface CommunityData {
  devto: DevtoData;
  lobsters: LobstersData;
  /** True when either publisher returned something. */
  fetchSuccess: boolean;
}

const DEVTO_TOP = 30;
const LOBSTERS_TOP = 20;

/** Lobste.rs AI/ML tag volume is low, so a 7-day window is what fills a report. */
const LOBSTERS_WINDOW_MS = 7 * 24 * 60 * 60 * 1000;

async function fetchDevto(): Promise<DevtoData> {
  const seen = new Map<number, DevtoArticle>();

  // Tags overlap heavily; one failing barely dents coverage.
  await Promise.all(
    AI_TAGS.map(async (tag) => {
      try {
        for (const article of await fetchTagArticles(tag)) {
          if (!seen.has(article.id)) seen.set(article.id, article);
        }
      } catch (err) {
        console.error(`  [devto] "${tag}": ${err}`);
      }
    }),
  );

  const articles = [...seen.values()]
    .sort((a, b) => b.positiveReactionsCount - a.positiveReactionsCount)
    .slice(0, DEVTO_TOP);

  console.log(`  [devto] ${articles.length} articles (from ${seen.size} unique)`);
  return { articles, fetchSuccess: articles.length > 0 };
}

async function fetchLobsters(): Promise<LobstersData> {
  const seen = new Map<string, LobstersStory>();

  await Promise.all(
    TAG_URLS.map(async (tagUrl) => {
      try {
        for (const { id, ...story } of await fetchTagStories(tagUrl)) {
          if (!seen.has(id)) seen.set(id, story);
        }
      } catch (err) {
        console.error(`  [lobsters] ${tagUrl}: ${err}`);
      }
    }),
  );

  const cutoff = Date.now() - LOBSTERS_WINDOW_MS;
  const stories = [...seen.values()]
    .filter((s) => new Date(s.publishedAt).getTime() > cutoff)
    .sort((a, b) => b.score - a.score)
    .slice(0, LOBSTERS_TOP);

  console.log(`  [lobsters] ${stories.length} stories (from ${seen.size} unique)`);
  return { stories, fetchSuccess: stories.length > 0 };
}

export async function fetchCommunityData(): Promise<CommunityData> {
  const [devto, lobsters] = await Promise.all([
    fetchDevto().catch((err): DevtoData => {
      console.error(`  [devto] fetch failed: ${err}`);
      return { articles: [], fetchSuccess: false };
    }),
    fetchLobsters().catch((err): LobstersData => {
      console.error(`  [lobsters] fetch failed: ${err}`);
      return { stories: [], fetchSuccess: false };
    }),
  ]);

  return { devto, lobsters, fetchSuccess: devto.fetchSuccess || lobsters.fetchSuccess };
}
