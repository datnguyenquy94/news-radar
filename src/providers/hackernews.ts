/**
 * Hacker News via the official Firebase API.
 *
 * The API has no search or filter: the only way to find AI stories is to walk
 * `topstories` and fetch each item. Callers therefore drive the scan themselves
 * (`fetchTopStoryIds` then `fetchItems`) so they can stop as soon as they have
 * enough matches instead of pulling all 500.
 */

import { fetchJson } from "../core/http.ts";
import { createLogger } from "../core/logger.ts";

const log = createLogger("hn");

export interface HnStory {
  id: string;
  hnRank?: number;
  title: string;
  url: string; // external URL, or HN discussion link if no external URL
  hnUrl: string; // always the HN discussion link
  points: number;
  comments: number;
  author: string;
  createdAt: string;
}

export interface HnFirebaseItem {
  id: number;
  deleted?: boolean;
  dead?: boolean;
  type?: string;
  by?: string;
  time?: number;
  title?: string;
  url?: string;
  score?: number;
  descendants?: number;
}

const TOPSTORIES_URL = "https://hacker-news.firebaseio.com/v0/topstories.json";
const ITEM_URL = (id: number): string => `https://hacker-news.firebaseio.com/v0/item/${id}.json`;

/** Throws `HttpError` on failure. */
export function fetchTopStoryIds(): Promise<number[]> {
  return fetchJson<number[]>(TOPSTORIES_URL);
}

/**
 * Fetch a batch of items. A dead or unreachable item degrades to `null` rather
 * than sinking the batch — one missing story is not worth losing 49 others.
 */
export function fetchItems(ids: number[]): Promise<Array<HnFirebaseItem | null>> {
  return Promise.all(
    ids.map(async (id) => {
      try {
        return await fetchJson<HnFirebaseItem>(ITEM_URL(id));
      } catch (err) {
        log.error(`item ${id}: ${err}`);
        return null;
      }
    }),
  );
}

export function toHnStory(item: HnFirebaseItem, hnRank: number): HnStory {
  const id = String(item.id);
  const hnUrl = `https://news.ycombinator.com/item?id=${id}`;

  return {
    id,
    hnRank,
    title: item.title ?? "(untitled)",
    url: item.url ?? hnUrl,
    hnUrl,
    points: item.score ?? 0,
    comments: item.descendants ?? 0,
    author: item.by ?? "unknown",
    createdAt: item.time ? new Date(item.time * 1000).toISOString() : new Date(0).toISOString(),
  };
}
