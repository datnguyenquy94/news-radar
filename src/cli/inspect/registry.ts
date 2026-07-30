/**
 * Target registry for `pnpm inspect`.
 *
 * One flat list, assembled from the per-group probe modules. Adding a probe
 * means adding it to its group module and to this array — nothing else.
 */

import type { Target } from "./kit.ts";
import { docExtractExcerptTarget, docExtractHtmlTarget, docExtractPdfTarget } from "./doc-extract.ts";
import { vnmarketAggregateTarget } from "./vnmarket.ts";
import { PROMPT_TARGETS } from "./prompts.ts";
import { llmTarget } from "./llm.ts";
import { manifestTarget, reportMacroTarget, reportVnMacroTarget } from "./reports.ts";
import { notifyFeishuTarget, notifyTelegramTarget } from "./notify.ts";
import {
  arxivTarget,
  devtoTarget,
  finraTarget,
  fredTarget,
  githubTarget,
  hfTarget,
  hnTarget,
  lobstersTarget,
  phTarget,
  trendingTarget,
  vndocsTarget,
  vnmacroTarget,
  vnmarketTarget,
  webTarget,
} from "./sources.ts";

export const TARGETS: Target[] = [
  // Data sources — live network
  arxivTarget,
  devtoTarget,
  hfTarget,
  hnTarget,
  lobstersTarget,
  phTarget,
  trendingTarget,
  webTarget,
  fredTarget,
  finraTarget,
  vnmarketTarget,
  vnmacroTarget,
  vndocsTarget,
  githubTarget,

  // Prompt builders — print the prompt, never call the LLM
  ...PROMPT_TARGETS,

  // Pure transforms — offline, deterministic
  docExtractHtmlTarget,
  docExtractPdfTarget,
  docExtractExcerptTarget,
  vnmarketAggregateTarget,

  // LLM
  llmTarget,

  // Reports and notifications — dry-run only, temp dir output
  reportMacroTarget,
  reportVnMacroTarget,
  notifyTelegramTarget,
  notifyFeishuTarget,
  manifestTarget,
];
