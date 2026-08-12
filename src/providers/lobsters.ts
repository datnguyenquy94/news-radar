/**
 * Lobste.rs tag-based JSON endpoints — the site publishes these natively, so no
 * scraping is involved.
 */

import { fetchJson } from "../core/http.ts";

export interface LobstersStory {
  title: string;
  url: string;
  commentsUrl: string;
  score: number;
  commentCount: number;
  author: string;
  publishedAt: string;
  tags: string[];
}

interface LobstersApiStory {
  short_id: string;
  title: string;
  url: string;
  comments_url: string;
  score: number;
  comment_count: number;
  /**
   * A bare username string. It was an object with a `username` field in an
   * older revision of the API, and both shapes are handled so the author line
   * survives a revert.
   */
  submitter_user: string | { username?: string };
  created_at: string;
  tags: string[];
}

/** Tag endpoints carrying AI/ML content. */
export const TAG_URLS = ["https://lobste.rs/t/ai.json", "https://lobste.rs/t/ml.json"];

/** Read the submitter name from either shape the API has used. */
function submitterName(submitter: LobstersApiStory["submitter_user"]): string {
  if (typeof submitter === "string") return submitter;
  return submitter?.username ?? "";
}

/** Stories for one tag endpoint, keyed by the site's `short_id`. Throws on failure. */
export async function fetchTagStories(tagUrl: string): Promise<Array<{ id: string } & LobstersStory>> {
  const raw = await fetchJson<LobstersApiStory[]>(tagUrl);
  return raw.map((s) => ({
    id: s.short_id,
    title: s.title,
    url: s.url || s.comments_url,
    commentsUrl: s.comments_url,
    score: s.score,
    commentCount: s.comment_count,
    author: submitterName(s.submitter_user),
    publishedAt: s.created_at,
    tags: s.tags,
  }));
}
