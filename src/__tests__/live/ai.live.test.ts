/**
 * Live source contracts — AI ecosystem sources.
 *
 * Each test calls the real endpoint and asserts the module still returns
 * populated, correctly-shaped data. A failure here means the source changed,
 * not that our code did: read the named field in the failure message, compare
 * it against the module's mapping, and update the module.
 */

import { describe, expect, it } from "vitest";

import { fetchArxivData } from "../../domains/ai/arxiv.ts";
import { fetchDevtoData } from "../../domains/ai/devto.ts";
import { fetchHfData } from "../../domains/ai/hf.ts";
import { fetchHnData } from "../../domains/ai/hn.ts";
import { fetchLobstersData } from "../../domains/ai/lobsters.ts";
import { fetchPhData } from "../../domains/ai/ph.ts";
import { fetchTrendingData } from "../../domains/ai/trending.ts";
import { emptyState, fetchSiteContent } from "../../domains/ai/web.ts";
import { LIVE_OPTS, expectDateLike, expectNonEmpty, expectPopulated, expectUrl, hasEnv } from "./contract.ts";

describe("live: arxiv", () => {
  it("returns papers with titles, authors and links", LIVE_OPTS, async () => {
    const data = await fetchArxivData();

    expect(data.fetchSuccess, "arxiv reported fetchSuccess: false").toBe(true);
    expectNonEmpty(data.papers, "arxiv.papers");
    expectPopulated(
      data.papers,
      {
        id: "string",
        title: "string",
        summary: "string",
        authors: "string[]",
        published: "string",
        url: "string",
        pdfUrl: "string",
      },
      "arxiv.papers",
    );

    const first = data.papers[0]!;
    expectUrl(first.url, "arxiv.papers[0].url");
    expectDateLike(first.published, "arxiv.papers[0].published");
    // Authors and categories come from repeated Atom elements — an empty
    // array means the element name changed, not that a paper has no author.
    expect(first.authors.length, "arxiv.papers[0].authors is empty").toBeGreaterThan(0);
    expect(first.categories.length, "arxiv.papers[0].categories is empty").toBeGreaterThan(0);
  });
});

describe("live: dev.to", () => {
  it("returns articles with engagement counts", LIVE_OPTS, async () => {
    const data = await fetchDevtoData();

    expect(data.fetchSuccess, "devto reported fetchSuccess: false").toBe(true);
    expectNonEmpty(data.articles, "devto.articles");
    expectPopulated(
      data.articles,
      {
        id: "number",
        title: "string",
        url: "string",
        publishedAt: "string",
        positiveReactionsCount: "number",
        commentsCount: "number",
        readingTimeMinutes: "number",
        tags: "string[]",
        user: "string",
      },
      "devto.articles",
    );

    expectUrl(data.articles[0]!.url, "devto.articles[0].url");
    expectDateLike(data.articles[0]!.publishedAt, "devto.articles[0].publishedAt");
  });
});

describe("live: hugging face", () => {
  it("returns trending models with likes and downloads", LIVE_OPTS, async () => {
    const data = await fetchHfData();

    expect(data.fetchSuccess, "hf reported fetchSuccess: false").toBe(true);
    expectNonEmpty(data.models, "hf.models");
    expectPopulated(
      data.models,
      {
        id: "string",
        author: "string",
        likes: "number",
        downloads: "number",
        tags: "string[]",
        lastModified: "string",
        url: "string",
      },
      "hf.models",
    );

    expectUrl(data.models[0]!.url, "hf.models[0].url");
    expectDateLike(data.models[0]!.lastModified, "hf.models[0].lastModified");
    // The report sorts on this; all-zero likes means the sort field moved.
    expect(
      data.models.some((m) => m.likes > 0),
      "hf.models: every model has 0 likes — the likes field likely changed",
    ).toBe(true);
  });
});

describe("live: hacker news", () => {
  it("returns AI stories with points, comments and an author", LIVE_OPTS, async () => {
    const data = await fetchHnData();

    expect(data.fetchSuccess, "hn reported fetchSuccess: false").toBe(true);
    expectNonEmpty(data.stories, "hn.stories");
    expectPopulated(
      data.stories,
      {
        id: "string",
        title: "string",
        url: "string",
        hnUrl: "string",
        points: "number",
        comments: "number",
        author: "string",
        createdAt: "string",
      },
      "hn.stories",
    );

    expectUrl(data.stories[0]!.hnUrl, "hn.stories[0].hnUrl");
    expectDateLike(data.stories[0]!.createdAt, "hn.stories[0].createdAt");
  });
});

describe("live: lobste.rs", () => {
  it("returns AI-tagged stories with scores and an author", LIVE_OPTS, async () => {
    const data = await fetchLobstersData();

    expect(data.fetchSuccess, "lobsters reported fetchSuccess: false").toBe(true);
    expectNonEmpty(data.stories, "lobsters.stories");
    expectPopulated(
      data.stories,
      {
        title: "string",
        url: "string",
        commentsUrl: "string",
        score: "number",
        commentCount: "number",
        publishedAt: "string",
        tags: "string[]",
      },
      "lobsters.stories",
    );

    expectDateLike(data.stories[0]!.publishedAt, "lobsters.stories[0].publishedAt");
    // Regression guard: `submitter_user` is a bare string in the current API.
    // Reading `.username` off it silently yielded undefined, so every
    // community report rendered "Author: undefined" until this was caught.
    expectPopulated(data.stories, { author: "string" }, "lobsters.stories");
  });
});

describe("live: product hunt", () => {
  it.skipIf(!hasEnv("PRODUCTHUNT_TOKEN"))("returns AI products with vote counts", LIVE_OPTS, async () => {
    const data = await fetchPhData();

    expect(data.fetchSuccess, "ph reported fetchSuccess: false").toBe(true);
    expectNonEmpty(data.products, "ph.products");
    expectPopulated(
      data.products,
      {
        id: "string",
        name: "string",
        tagline: "string",
        url: "string",
        votesCount: "number",
        commentsCount: "number",
        createdAt: "string",
        topics: "string[]",
      },
      "ph.products",
    );

    expectUrl(data.products[0]!.url, "ph.products[0].url");
  });
});

describe("live: github trending", () => {
  it("returns scraped trending repos and search-API repos", LIVE_OPTS, async () => {
    const data = await fetchTrendingData();

    expect(data.trendingFetchSuccess, "trending reported trendingFetchSuccess: false").toBe(true);
    // The HTML scrape is the fragile half — GitHub redesigns this page.
    expectNonEmpty(data.trendingRepos, "trending.trendingRepos (HTML scrape)");
    expectPopulated(
      data.trendingRepos,
      { fullName: "string", todayStars: "number", totalStars: "number", forks: "number", url: "string" },
      "trending.trendingRepos",
    );
    expect(
      data.trendingRepos[0]!.fullName,
      "trending.trendingRepos[0].fullName should be owner/repo",
    ).toMatch(/^[\w.-]+\/[\w.-]+$/);

    expectNonEmpty(data.searchRepos, "trending.searchRepos (Search API)");
    expectPopulated(
      data.searchRepos,
      { fullName: "string", stargazersCount: "number", pushedAt: "string", url: "string" },
      "trending.searchRepos",
    );
  });
});

describe("live: anthropic + openai sitemaps", () => {
  // A fresh in-memory state keeps this read-only: nothing is persisted, and a
  // first run reports every URL it discovers.
  it.each(["anthropic", "openai"] as const)("discovers %s sitemap URLs", LIVE_OPTS, async (site) => {
    const result = await fetchSiteContent(site, emptyState());

    expect(result.site, "web.site").toBe(site);
    expect(
      result.totalDiscovered,
      `web/${site}: sitemap yielded no URLs — the sitemap layout likely changed`,
    ).toBeGreaterThan(0);
    expectNonEmpty(result.newItems, `web/${site}.newItems (first run)`);
    expectPopulated(
      result.newItems,
      { url: "string", title: "string", category: "string" },
      `web/${site}.newItems`,
    );
    expectUrl(result.newItems[0]!.url, `web/${site}.newItems[0].url`);
  });

  // Anthropic is the only site whose article pages we actually fetch. OpenAI is
  // configured `metadataOnly` because its pages return 403 from datacenter IPs,
  // so an empty `content` there is intended behaviour, not drift — asserting on
  // it would fail permanently and teach everyone to ignore this suite.
  it("still extracts anthropic page content, not just sitemap metadata", LIVE_OPTS, async () => {
    const result = await fetchSiteContent("anthropic", emptyState());

    expectNonEmpty(result.newItems, "web/anthropic.newItems");
    expectPopulated(result.newItems, { content: "string" }, "web/anthropic.newItems");
    // Real article bodies, not a WAF interstitial that happens to have text.
    expect(
      result.newItems[0]!.content.length,
      "web/anthropic: page content is suspiciously short — fetches may be blocked",
    ).toBeGreaterThan(200);
  });
});
