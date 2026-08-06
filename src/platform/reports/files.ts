/**
 * Report file output helpers.
 */

import fs from "node:fs";
import path from "node:path";
import { type Lang, FOOTER } from "../../core/i18n/index.ts";

// ---------------------------------------------------------------------------
// File output
// ---------------------------------------------------------------------------

export function saveFile(content: string, ...segments: string[]): string {
  const filepath = path.join("digests", ...segments);
  fs.mkdirSync(path.dirname(filepath), { recursive: true });
  fs.writeFileSync(filepath, content, "utf-8");
  return filepath;
}

export function autoGenFooter(lang: Lang = "vi"): string {
  const digestRepo = process.env["DIGEST_REPO"] ?? "";
  if (!digestRepo) return "";
  return `\n\n---\n*${FOOTER.autoGen[lang]} [agents-radar](https://github.com/${digestRepo})${lang === "en" ? "." : " một cách tự động."}*`;
}
