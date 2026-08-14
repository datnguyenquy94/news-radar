/**
 * Official AI-company content — payload for the "ai-web" report.
 *
 * Strategy:
 *   - Discover article URLs via sitemaps (no date filter needed — lastmod is reliable)
 *   - Compare with stored state to find new/updated URLs
 *   - Fetch content only for new URLs; on first run, cap at MAX_CONTENT_FETCH_FIRST_RUN per site
 *   - After every run, mark ALL discovered URLs as seen so future runs stay incremental
 *
 * The state object is passed in and mutated in place; persisting it is
 * "platform/state/web-state.ts"'s job, not this module's.
 */

import { sleep } from "../../core/date.ts";
import {
  extractText,
  extractTitle,
  httpGet,
  isSitemapIndex,
  parseSitemapUrls,
  titleFromUrl,
  urlCategory,
  type SitemapEntry,
} from "../../providers/sitemap.ts";
import { createLogger } from "../../core/logger.ts";

const log = createLogger("web");

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface WebPageItem {
  url: string;
  title: string;
  lastmod: string;
  content: string;
  site: "anthropic" | "openai";
  category: string;
}

interface SiteState {
  lastChecked: string;
  /** url → lastmod string (or "seen" if no lastmod available) */
  seenUrls: Record<string, string>;
}

export interface WebState {
  anthropic: SiteState;
  openai: SiteState;
}

export interface WebFetchResult {
  site: "anthropic" | "openai";
  siteName: string;
  isFirstRun: boolean;
  newItems: WebPageItem[];
  /** Total URLs discovered in sitemap (for context in the report) */
  totalDiscovered: number;
}

// ---------------------------------------------------------------------------
// Site config
// ---------------------------------------------------------------------------

interface SiteConfig {
  name: string;
  /** For single sitemaps: URL to fetch */
  sitemapUrl: string;
  /** For single sitemaps: only keep URLs starting with these path prefixes */
  prefixes?: string[];
  /** For sitemap indexes: named sub-sitemaps to fetch */
  subSitemapNames?: string[];
  /** URL template for sub-sitemaps; {name} is replaced with each sub-sitemap name */
  subSitemapTemplate?: string;
  /** Skip fetching article pages; derive title from URL slug instead. Use when the
   *  site blocks bot requests (e.g. Cloudflare WAF on datacenter IPs). */
  metadataOnly?: boolean;
}

const SITE_CONFIGS: Record<"anthropic" | "openai", SiteConfig> = {
  anthropic: {
    name: "Anthropic (Claude)",
    sitemapUrl: "https://www.anthropic.com/sitemap.xml",
    prefixes: ["/news/", "/research/", "/engineering/", "/learn/"],
  },
  openai: {
    name: "OpenAI",
    sitemapUrl: "https://openai.com/sitemap.xml",
    // Fetch only content-focused sub-sitemaps; skip app-category and i18n sitemaps
    subSitemapNames: [
      "research",
      "publication",
      "release",
      "company",
      "engineering",
      "milestone",
      "learn-guides",
      "safety",
      "product",
    ],
    subSitemapTemplate: "https://openai.com/sitemap.xml/{name}/",
    // Article pages return 403 from datacenter IPs (Cloudflare WAF);
    // sitemaps are accessible, so use metadata-only mode.
    metadataOnly: true,
  },
};

/** Max articles to fetch full content for on the very first run (per site). */
const MAX_CONTENT_FETCH_FIRST_RUN = 25;
/** Polite delay between individual page GETs (ms). */
const FETCH_DELAY_MS = 300;

// ---------------------------------------------------------------------------
// URL discovery
// ---------------------------------------------------------------------------

async function discoverUrls(site: "anthropic" | "openai"): Promise<SitemapEntry[]> {
  const cfg = SITE_CONFIGS[site];
  const results: SitemapEntry[] = [];

  if (cfg.subSitemapNames && cfg.subSitemapTemplate) {
    // Sitemap index: fetch each named sub-sitemap
    for (const name of cfg.subSitemapNames) {
      const subUrl = cfg.subSitemapTemplate.replace("{name}", name);
      try {
        const xml = await httpGet(subUrl);
        results.push(...parseSitemapUrls(xml));
        await sleep(100);
      } catch (err) {
        log.error({ site }, `sub-sitemap "${name}" failed: ${err}`);
      }
    }
  } else {
    // Single sitemap
    const xml = await httpGet(cfg.sitemapUrl);
    const all = isSitemapIndex(xml)
      ? [] // unexpected; skip rather than recurse
      : parseSitemapUrls(xml);

    const prefixes = cfg.prefixes ?? [];
    results.push(
      ...all.filter(({ loc }) => {
        try {
          return prefixes.some((p) => new URL(loc).pathname.startsWith(p));
        } catch {
          return false;
        }
      }),
    );
  }

  return results;
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------

export async function fetchSiteContent(
  site: "anthropic" | "openai",
  state: WebState,
): Promise<WebFetchResult> {
  const cfg = SITE_CONFIGS[site];
  const siteState = state[site];
  const isFirstRun = Object.keys(siteState.seenUrls).length === 0;

  log.info({ site }, "Discovering URLs from sitemap...");
  const allDiscovered = await discoverUrls(site);
  log.info({ site }, `Discovered ${allDiscovered.length} URLs`);

  // Newest first
  allDiscovered.sort((a, b) => {
    if (!a.lastmod && !b.lastmod) return 0;
    if (!a.lastmod) return 1;
    if (!b.lastmod) return -1;
    return b.lastmod.localeCompare(a.lastmod);
  });

  // New = not seen before, OR (for non-metadataOnly sites) lastmod is newer.
  // For metadataOnly sites (e.g. OpenAI), lastmod reflects sitemap generation
  // time rather than content publication — ignore lastmod changes to avoid
  // flagging hundreds of unchanged URLs as "new" on every run.
  const newUrls = allDiscovered.filter(({ loc, lastmod }) => {
    const prev = siteState.seenUrls[loc];
    if (!prev) return true;
    if (!cfg.metadataOnly && lastmod && lastmod > prev) return true;
    return false;
  });

  // Cap content fetches on first run to avoid excessive runtime
  const toFetch = isFirstRun ? newUrls.slice(0, MAX_CONTENT_FETCH_FIRST_RUN) : newUrls;

  log.info(
    { site },
    `${isFirstRun ? "First run" : "Incremental"}: ` +
      `${newUrls.length} new URLs, fetching content for ${toFetch.length}`,
  );

  // Build items — either from full page fetches or from sitemap metadata only
  const items: WebPageItem[] = [];
  if (cfg.metadataOnly) {
    for (const { loc, lastmod } of toFetch) {
      items.push({
        url: loc,
        title: titleFromUrl(loc),
        lastmod: lastmod ?? "",
        content: "",
        site,
        category: urlCategory(loc),
      });
    }
  } else {
    // Fetch page content sequentially with a polite delay
    for (const { loc, lastmod } of toFetch) {
      try {
        const html = await httpGet(loc);
        items.push({
          url: loc,
          title: extractTitle(html),
          lastmod: lastmod ?? "",
          content: extractText(html),
          site,
          category: urlCategory(loc),
        });
      } catch (err) {
        log.error({ site }, `Failed to fetch ${loc}: ${err}`);
      }
      await sleep(FETCH_DELAY_MS);
    }
  }

  // Mark ALL discovered URLs as seen (not just fetched ones)
  // This ensures future runs are truly incremental
  for (const { loc, lastmod } of allDiscovered) {
    siteState.seenUrls[loc] = lastmod ?? "seen";
  }
  siteState.lastChecked = new Date().toISOString();

  return {
    site,
    siteName: cfg.name,
    isFirstRun,
    newItems: items,
    totalDiscovered: allDiscovered.length,
  };
}
