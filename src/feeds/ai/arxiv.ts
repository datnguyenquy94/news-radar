/**
 * ArXiv AI papers — payload for the `ai-arxiv` report.
 *
 * Filtered to the last 48h rather than 24h: ArXiv has a ~1-day publishing
 * delay, so a 24h window misses today's batch entirely.
 */

import { AI_CATEGORIES, REQUEST_DELAY_MS, fetchCategory, type ArxivPaper } from "../../providers/arxiv.ts";
import { sleep } from "../../core/date.ts";
import { createLogger } from "../../core/logger.ts";

const log = createLogger("arxiv");

export type { ArxivPaper };

export interface ArxivData {
  papers: ArxivPaper[];
  fetchSuccess: boolean;
}

const MAX_RESULTS = 50;
const WINDOW_MS = 48 * 60 * 60 * 1000;

export async function fetchArxivData(): Promise<ArxivData> {
  const seen = new Map<string, ArxivPaper>();

  // Sequential with a delay: ArXiv asks clients not to fire concurrent queries.
  for (let i = 0; i < AI_CATEGORIES.length; i++) {
    const cat = AI_CATEGORIES[i]!;
    if (i > 0) await sleep(REQUEST_DELAY_MS);

    try {
      const papers = await fetchCategory(cat, MAX_RESULTS);
      for (const paper of papers) {
        if (!seen.has(paper.id)) seen.set(paper.id, paper);
      }
      log.info(`${cat}: ${papers.length} papers`);
    } catch (err) {
      // One category failing still leaves the other two worth reporting.
      log.error(`${cat}: ${err}`);
    }
  }

  const cutoff = Date.now() - WINDOW_MS;
  const papers = [...seen.values()]
    .filter((p) => new Date(p.published).getTime() > cutoff)
    .sort((a, b) => new Date(b.published).getTime() - new Date(a.published).getTime())
    .slice(0, MAX_RESULTS);

  log.info(`${papers.length} papers (from ${seen.size} unique)`);
  return { papers, fetchSuccess: papers.length > 0 };
}
