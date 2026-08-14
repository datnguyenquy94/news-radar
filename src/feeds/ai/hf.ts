/**
 * Hugging Face trending models — payload for the `ai-hf` report.
 */

import { fetchTrendingModels, type HfModel } from "../../providers/huggingface.ts";
import { createLogger } from "../../core/logger.ts";

const log = createLogger("hf");

export type { HfModel };

export interface HfData {
  models: HfModel[];
  fetchSuccess: boolean;
}

export async function fetchHfData(): Promise<HfData> {
  try {
    const models = await fetchTrendingModels();
    log.info(`${models.length} trending models`);
    return { models, fetchSuccess: models.length > 0 };
  } catch (err) {
    log.error(`fetch failed: ${err}`);
    return { models: [], fetchSuccess: false };
  }
}
