/**
 * Language type, the configured-language resolver, and the bilingual-string helper.
 */

export type Lang = "zh" | "en";

/** All supported languages, in canonical order. */
export const ALL_LANGS: readonly Lang[] = ["zh", "en"];

/**
 * Languages to generate, read from the `DIGEST_LANGS` env var (comma-separated,
 * e.g. `"en"` or `"zh,en"`). Order and duplicates in the env var are respected /
 * de-duplicated. Unrecognized entries are ignored; if nothing valid remains
 * (or the var is unset), all languages are generated.
 *
 *   DIGEST_LANGS unset      → ["zh", "en"]  (default: both)
 *   DIGEST_LANGS="en"       → ["en"]        (English only)
 *   DIGEST_LANGS="zh"       → ["zh"]        (Chinese only)
 */
export function getLangs(): Lang[] {
  const raw = process.env["DIGEST_LANGS"];
  if (!raw) return [...ALL_LANGS];
  const seen = new Set<Lang>();
  for (const part of raw.split(",")) {
    const v = part.trim().toLowerCase();
    if ((ALL_LANGS as readonly string[]).includes(v)) seen.add(v as Lang);
  }
  return seen.size > 0 ? [...seen] : [...ALL_LANGS];
}

/** Get a bilingual string by language key. */
export function t(zh: string, en: string): Record<Lang, string> {
  return { zh, en };
}
