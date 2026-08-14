/**
 * Hacker News AI stories — payload for the `ai-hn` report.
 *
 * The API has no search, so this walks `topstories` in batches and keyword-filters
 * as it goes, stopping as soon as it has `TOP_STORIES` matches rather than
 * fetching all 500 items.
 */

import { fetchItems, fetchTopStoryIds, toHnStory, type HnStory } from "../../providers/hackernews.ts";
import { createLogger } from "../../core/logger.ts";

const log = createLogger("hn");

export type { HnStory };

export interface HnData {
  stories: HnStory[];
  fetchSuccess: boolean;
}

const TOP_STORIES = 30;
const STORIES_TO_SCAN = 500;
const BATCH_SIZE = 50;

const AI_KEYWORD_PATTERNS = [
  /\bai\b/i,
  /\ba\.i\./i,
  /\bllm(s)?\b/i,
  /\bml\b/i,
  /machine learning/i,
  /deep learning/i,
  /neural/i,
  /transformer/i,
  /language model(s)?\b/i,
  /foundation model(s)?\b/i,
  /\brag\b/i,
  /agent(s)?\b/i,
  /openai/i,
  /anthropic/i,
  /claude/i,
  /chatgpt/i,
  /gemini/i,
  /copilot/i,
];

function isAiRelated(title: string | undefined, url: string | undefined): boolean {
  const text = `${title ?? ""} ${url ?? ""}`;
  return AI_KEYWORD_PATTERNS.some((pattern) => pattern.test(text));
}

export async function fetchHnData(): Promise<HnData> {
  try {
    const topIds = (await fetchTopStoryIds()).slice(0, STORIES_TO_SCAN);
    const stories: HnStory[] = [];

    for (let i = 0; i < topIds.length && stories.length < TOP_STORIES; i += BATCH_SIZE) {
      const items = await fetchItems(topIds.slice(i, i + BATCH_SIZE));

      for (let j = 0; j < items.length && stories.length < TOP_STORIES; j += 1) {
        const item = items[j];
        if (!item || item.deleted || item.dead || item.type !== "story" || !item.title) continue;
        // Rank is the item's position in topstories, not its position here.
        if (isAiRelated(item.title, item.url)) stories.push(toHnStory(item, i + j + 1));
      }
    }

    log.info(`${stories.length} AI stories (scanned ${topIds.length} topstories)`);
    return { stories, fetchSuccess: stories.length > 0 };
  } catch (err) {
    log.error(`fetch failed: ${err}`);
    return { stories: [], fetchSuccess: false };
  }
}
