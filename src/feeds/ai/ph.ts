/**
 * Product Hunt AI products — payload for the `ai-ph` report.
 *
 * Yesterday's products rather than today's: they have had a full day to
 * accumulate votes, so the ordering is meaningful.
 */

import { fetchPosts, type PhProduct } from "../../providers/producthunt.ts";

export type { PhProduct };

export interface PhData {
  products: PhProduct[];
  fetchSuccess: boolean;
}

const TOP_PRODUCTS = 30;

/** Products carrying any of these topic slugs are kept. */
const AI_TOPIC_SLUGS = new Set([
  "artificial-intelligence",
  "machine-learning",
  "ai",
  "chatgpt",
  "llm",
  "developer-tools",
  "open-source",
  "natural-language-processing",
  "chatbots",
  "generative-ai",
]);

export async function fetchPhData(now = new Date()): Promise<PhData> {
  const token = process.env["PRODUCTHUNT_TOKEN"] ?? "";
  if (!token) {
    console.log("  [ph] PRODUCTHUNT_TOKEN not set — skipping.");
    return { products: [], fetchSuccess: false };
  }

  const yesterday = new Date(now.getTime() - 24 * 60 * 60 * 1000);
  const twoDaysAgo = new Date(now.getTime() - 48 * 60 * 60 * 1000);

  try {
    const { products: all, totalReturned } = await fetchPosts(token, twoDaysAgo, yesterday);

    const products = all
      .filter((p) => p.topicSlugs.some((slug) => AI_TOPIC_SLUGS.has(slug)))
      .sort((a, b) => b.votesCount - a.votesCount)
      .slice(0, TOP_PRODUCTS)
      .map(({ topicSlugs: _topicSlugs, ...product }) => product);

    console.log(`  [ph] ${products.length} AI products (from ${totalReturned} total)`);
    return { products, fetchSuccess: products.length > 0 };
  } catch (err) {
    console.error(`  [ph] fetch failed: ${err}`);
    return { products: [], fetchSuccess: false };
  }
}
