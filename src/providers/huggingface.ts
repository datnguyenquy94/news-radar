/**
 * Hugging Face Hub API — trending models.
 */

import { fetchJson } from "../core/http.ts";

export interface HfModel {
  id: string; // e.g. "meta-llama/Llama-3.1-8B"
  author: string;
  likes: number;
  downloads: number;
  tags: string[];
  pipelineTag: string;
  lastModified: string;
  url: string;
}

interface HfApiModel {
  _id: string;
  id: string;
  author?: string;
  likes: number;
  downloads: number;
  tags?: string[];
  pipeline_tag?: string;
  lastModified?: string;
}

const API_URL = "https://huggingface.co/api/models";
const DEFAULT_LIMIT = 30;

/** Trending models sorted by weekly likes. Throws `HttpError` on failure. */
export async function fetchTrendingModels(limit = DEFAULT_LIMIT): Promise<HfModel[]> {
  const params = new URLSearchParams({
    sort: "likes7d",
    direction: "-1",
    limit: String(limit),
    full: "false",
  });

  const raw = await fetchJson<HfApiModel[]>(`${API_URL}?${params}`);

  return raw.map((m) => ({
    id: m.id,
    author: m.author ?? m.id.split("/")[0] ?? "unknown",
    likes: m.likes,
    downloads: m.downloads,
    tags: m.tags ?? [],
    pipelineTag: m.pipeline_tag ?? "",
    lastModified: m.lastModified ?? "",
    url: `https://huggingface.co/${m.id}`,
  }));
}
