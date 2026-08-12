/**
 * Dev.to via the Forem API.
 */

import { fetchJson } from "../core/http.ts";

export interface DevtoArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  publishedAt: string;
  positiveReactionsCount: number;
  commentsCount: number;
  readingTimeMinutes: number;
  tags: string[];
  user: string;
}

interface DevtoApiArticle {
  id: number;
  title: string;
  description: string;
  url: string;
  published_at: string;
  positive_reactions_count: number;
  comments_count: number;
  reading_time_minutes: number;
  tag_list: string[];
  user: { name: string };
}

const API_URL = "https://dev.to/api/articles";
const PER_PAGE = 30;

/** Tags to query — the caller runs these in parallel and dedups by id. */
export const AI_TAGS = ["ai", "llm", "machinelearning", "openai", "langchain"];

/** Top articles for one tag over the past day. Throws `HttpError` on failure. */
export async function fetchTagArticles(tag: string, perPage = PER_PAGE): Promise<DevtoArticle[]> {
  const params = new URLSearchParams({
    tag,
    per_page: String(perPage),
    top: "1", // top articles from the past 1 day
  });

  const raw = await fetchJson<DevtoApiArticle[]>(`${API_URL}?${params}`);

  return raw.map((a) => ({
    id: a.id,
    title: a.title,
    description: a.description,
    url: a.url,
    publishedAt: a.published_at,
    positiveReactionsCount: a.positive_reactions_count,
    commentsCount: a.comments_count,
    readingTimeMinutes: a.reading_time_minutes,
    tags: a.tag_list,
    user: a.user.name,
  }));
}
