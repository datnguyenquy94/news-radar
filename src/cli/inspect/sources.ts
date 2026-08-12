/**
 * Probes for the feeds in `src/feeds/` — one per report payload.
 *
 * Each one runs the real fetcher against the live endpoint and prints counts, a
 * few sample rows and `fetchSuccess`. That last flag is the pipeline's own
 * degrade signal — when it is false the daily run silently drops the report, so
 * these probes exit 1 on it rather than printing an empty table and exiting 0.
 *
 * Every fetcher is imported dynamically: `--list` must not pay for loading a
 * dozen domain modules, and none of them should run at import time.
 */

import { ProbeError, kv, oneLine, requireEnv, sample, type ProbeResult, type Target } from "./kit.ts";

/** Wrap a `fetchSuccess`-carrying result in the standard probe shape. */
function withFetchStatus(ok: boolean, json: unknown, lines: string[], what: string): ProbeResult {
  return { json, lines, ...(ok ? {} : { failure: `${what} reported fetchSuccess: false` }) };
}

// ---------------------------------------------------------------------------
// AI ecosystem sources
// ---------------------------------------------------------------------------

export const arxivTarget: Target = {
  name: "arxiv",
  summary: "fetchArxivData() — cs.AI / cs.CL / cs.LG papers from the last 48h via the Atom API",
  options: [{ name: "top", arg: "n", desc: "sample rows to print (default 5)" }],
  async run(args) {
    const { fetchArxivData } = await import("../../feeds/ai/arxiv.ts");
    const data = await fetchArxivData();
    return withFetchStatus(
      data.fetchSuccess,
      data,
      [
        kv("fetchSuccess", data.fetchSuccess),
        kv("papers", data.papers.length),
        "sample:",
        ...sample(
          data.papers,
          args.num("top", 5),
          (p) => `${oneLine(p.title, 80)} [${p.categories.join(",")}] ${p.url}`,
        ),
      ],
      "arxiv",
    );
  },
};

export const devtoTarget: Target = {
  name: "devto",
  summary: "fetchCommunityData().devto — AI-tagged Dev.to articles via the Forem API",
  options: [{ name: "top", arg: "n", desc: "sample rows to print (default 5)" }],
  async run(args) {
    const { fetchCommunityData } = await import("../../feeds/ai/community.ts");
    const data = (await fetchCommunityData()).devto;
    return withFetchStatus(
      data.fetchSuccess,
      data,
      [
        kv("fetchSuccess", data.fetchSuccess),
        kv("articles", data.articles.length),
        "sample:",
        ...sample(
          data.articles,
          args.num("top", 5),
          (a) =>
            `${oneLine(a.title, 70)} — ${a.positiveReactionsCount} reactions, ${a.commentsCount} comments`,
        ),
      ],
      "devto",
    );
  },
};

export const hfTarget: Target = {
  name: "hf",
  summary: "fetchHfData() — Hugging Face trending models by weekly likes",
  options: [{ name: "top", arg: "n", desc: "sample rows to print (default 5)" }],
  async run(args) {
    const { fetchHfData } = await import("../../feeds/ai/hf.ts");
    const data = await fetchHfData();
    return withFetchStatus(
      data.fetchSuccess,
      data,
      [
        kv("fetchSuccess", data.fetchSuccess),
        kv("models", data.models.length),
        "sample:",
        ...sample(
          data.models,
          args.num("top", 5),
          (m) => `${m.id} — ${m.likes} likes, ${m.downloads} downloads (${m.pipelineTag || "n/a"})`,
        ),
      ],
      "hf",
    );
  },
};

export const hnTarget: Target = {
  name: "hn",
  summary: "fetchHnData() — AI-filtered Hacker News top stories via the Firebase API",
  options: [{ name: "top", arg: "n", desc: "sample rows to print (default 5)" }],
  async run(args) {
    const { fetchHnData } = await import("../../feeds/ai/hn.ts");
    const data = await fetchHnData();
    return withFetchStatus(
      data.fetchSuccess,
      data,
      [
        kv("fetchSuccess", data.fetchSuccess),
        kv("stories", data.stories.length),
        "sample:",
        ...sample(
          data.stories,
          args.num("top", 5),
          (s) => `#${s.hnRank ?? "?"} ${oneLine(s.title, 70)} — ${s.points} pts, ${s.comments} comments`,
        ),
      ],
      "hn",
    );
  },
};

export const lobstersTarget: Target = {
  name: "lobsters",
  summary: "fetchCommunityData().lobsters — Lobste.rs ai/ml tag stories",
  options: [{ name: "top", arg: "n", desc: "sample rows to print (default 5)" }],
  async run(args) {
    const { fetchCommunityData } = await import("../../feeds/ai/community.ts");
    const data = (await fetchCommunityData()).lobsters;
    return withFetchStatus(
      data.fetchSuccess,
      data,
      [
        kv("fetchSuccess", data.fetchSuccess),
        kv("stories", data.stories.length),
        "sample:",
        ...sample(
          data.stories,
          args.num("top", 5),
          (s) => `${oneLine(s.title, 70)} — ${s.score} pts [${s.tags.join(",")}]`,
        ),
      ],
      "lobsters",
    );
  },
};

export const phTarget: Target = {
  name: "ph",
  summary: "fetchPhData() — yesterday's AI products from the Product Hunt GraphQL API",
  options: [{ name: "top", arg: "n", desc: "sample rows to print (default 5)" }],
  env: ["PRODUCTHUNT_TOKEN"],
  async run(args) {
    requireEnv("PRODUCTHUNT_TOKEN");
    const { fetchPhData } = await import("../../feeds/ai/ph.ts");
    const data = await fetchPhData();
    return withFetchStatus(
      data.fetchSuccess,
      data,
      [
        kv("fetchSuccess", data.fetchSuccess),
        kv("products", data.products.length),
        "sample:",
        ...sample(
          data.products,
          args.num("top", 5),
          (p) => `${p.name} — ${p.votesCount} votes [${p.topics.join(",")}]`,
        ),
      ],
      "ph",
    );
  },
};

export const trendingTarget: Target = {
  name: "trending",
  summary: "fetchTrendingData() — github.com/trending HTML scrape + Search API AI-topic queries",
  options: [{ name: "top", arg: "n", desc: "sample rows to print (default 5)" }],
  async run(args) {
    const { fetchTrendingData } = await import("../../feeds/ai/trending.ts");
    const data = await fetchTrendingData();
    const top = args.num("top", 5);
    // The Search half has no success flag of its own; an empty array is the
    // only signal that the query set came back with nothing.
    const ok = data.trendingFetchSuccess || data.searchRepos.length > 0;
    return withFetchStatus(
      ok,
      data,
      [
        kv("trendingFetchSuccess", data.trendingFetchSuccess),
        kv("trendingRepos", data.trendingRepos.length),
        kv("searchRepos", data.searchRepos.length),
        "trending sample:",
        ...sample(
          data.trendingRepos,
          top,
          (r) => `${r.fullName} +${r.todayStars} today, ${r.totalStars} total (${r.language || "n/a"})`,
        ),
        "search sample:",
        ...sample(data.searchRepos, top, (r) => `${r.fullName} ${r.stargazersCount}★ [${r.searchQuery}]`),
      ],
      "trending (both HTML scrape and Search API)",
    );
  },
};

const SITES = ["anthropic", "openai"] as const;
type Site = (typeof SITES)[number];
const isSite = (s: string): s is Site => (SITES as readonly string[]).includes(s);

export const webTarget: Target = {
  name: "web",
  summary: "fetchSiteContent() for anthropic.com / openai.com sitemaps — READ-ONLY, never saves web-state",
  options: [
    { name: "site", arg: "anthropic|openai", desc: "probe one site only (default: both)" },
    { name: "top", arg: "n", desc: "sample rows to print (default 5)" },
  ],
  async run(args) {
    const { fetchSiteContent } = await import("../../feeds/ai/web.ts");
    const { loadWebState } = await import("../../platform/state/web-state.ts");

    let sites: Site[] = [...SITES];
    const requested = args.str("site");
    if (requested !== undefined) {
      if (!isSite(requested))
        throw new ProbeError(`--site must be one of ${SITES.join("|")}, got "${requested}"`);
      sites = [requested];
    }

    // `fetchSiteContent` mutates the state object it is handed but never writes
    // it; `saveWebState` is the only writer and is deliberately not called here,
    // so digests/web-state.json is untouched by this probe.
    const state = loadWebState();
    const results = [];
    for (const s of sites) results.push(await fetchSiteContent(s, state));

    const top = args.num("top", 5);
    const lines = [kv("statePersisted", false)];
    for (const r of results) {
      lines.push(
        `${r.site}: discovered ${r.totalDiscovered}, new ${r.newItems.length}, firstRun ${r.isFirstRun}`,
        ...sample(r.newItems, top, (i) => `${oneLine(i.title, 70)} [${i.category}] ${i.url}`),
      );
    }
    return {
      json: { statePersisted: false, results },
      lines,
      ...(results.every((r) => r.totalDiscovered === 0)
        ? { failure: "no URLs discovered from any sitemap" }
        : {}),
    };
  },
};

// ---------------------------------------------------------------------------
// Finance sources
// ---------------------------------------------------------------------------

export const fredTarget: Target = {
  name: "fred",
  summary: "fetchFredData() — 16 macro series; JSON API with FRED_API_KEY, keyless CSV without",
  options: [{ name: "top", arg: "n", desc: "metric rows to print (default: all)" }],
  env: ["FRED_API_KEY (optional — unset falls back to the keyless CSV endpoint)"],
  async run(args) {
    const path = process.env["FRED_API_KEY"] ? "JSON API (FRED_API_KEY set)" : "keyless CSV fallback";
    const { fetchFredData } = await import("../../feeds/finance/macro.ts");
    const data = await fetchFredData();
    const withValue = data.metrics.filter((m) => m.latest !== null);
    return withFetchStatus(
      data.fetchSuccess,
      { path, ...data },
      [
        kv("path", path),
        kv("fetchSuccess", data.fetchSuccess),
        kv("metrics", `${withValue.length}/${data.metrics.length} with a latest value`),
        "metrics:",
        ...sample(
          data.metrics,
          args.num("top", data.metrics.length),
          (m) =>
            `${m.series.padEnd(12)} ${m.label.en}: ${m.latest ?? "null"}${m.unit} (prior ${m.prior ?? "null"}, as of ${m.asOf || "n/a"})`,
        ),
      ],
      "fred",
    );
  },
};

export const finraTarget: Target = {
  name: "finra",
  summary: "fetchFinraMargin() — margin-debt statistics scraped from finra.org",
  async run() {
    const { fetchFinraMargin } = await import("../../feeds/finance/macro.ts");
    const data = await fetchFinraMargin();
    return withFetchStatus(
      data.fetchSuccess,
      data,
      [
        kv("fetchSuccess", data.fetchSuccess),
        kv("latest", data.latest ? `${data.latest.period}: $${data.latest.debitMillions}M` : "null"),
        kv("prior", data.prior ? `${data.prior.period}: $${data.prior.debitMillions}M` : "null"),
        kv("changePct", data.changePct ?? "null"),
      ],
      "finra",
    );
  },
};

// ---------------------------------------------------------------------------
// Vietnam sources
// ---------------------------------------------------------------------------

export const vnmarketTarget: Target = {
  name: "vnmarket",
  summary: "fetchVnMarketData() — SSI iBoard breadth/turnover/foreign flow + Entrade index bars",
  async run() {
    const { fetchVnMarketData } = await import("../../feeds/finance/vn/index.ts");
    const data = await fetchVnMarketData();
    const lines = [
      kv("fetchSuccess", data.fetchSuccess),
      kv("tradingDate", data.tradingDate || "(none)"),
      kv("turnoverVndBn", data.turnoverVndBn ?? "null"),
      kv(
        "breadth",
        data.breadth
          ? `${data.breadth.advancers} up / ${data.breadth.decliners} down / ${data.breadth.unchanged} flat`
          : "null",
      ),
      kv(
        "foreign",
        data.foreign
          ? `net ${data.foreign.netVndBn}bn (buy ${data.foreign.buyVndBn} / sell ${data.foreign.sellVndBn})`
          : "null",
      ),
      kv(
        "futuresBasis",
        data.futuresBasis ? `${data.futuresBasis.basis} pts (${data.futuresBasis.basisPct}%)` : "null",
      ),
      "indices:",
      ...sample(
        data.indices,
        10,
        (i) =>
          `${i.label}: ${i.close} (1d ${i.changePct1d ?? "n/a"}%, 20d ${i.changePct20d ?? "n/a"}%) as of ${i.asOf}`,
      ),
    ];
    return withFetchStatus(data.fetchSuccess, data, lines, "vnmarket");
  },
};

export const vnmacroTarget: Target = {
  name: "vnmacro",
  summary: "fetchVnMacroData() — Vietcombank USD/VND + Yahoo global drivers + World Bank annuals",
  async run() {
    const { fetchVnMacroData } = await import("../../feeds/finance/vn/index.ts");
    const data = await fetchVnMacroData();
    return withFetchStatus(
      data.fetchSuccess,
      data,
      [
        kv("fetchSuccess", data.fetchSuccess),
        kv(
          "fx",
          data.fx
            ? `sell ${data.fx.sell} / transfer ${data.fx.transfer} as of ${data.fx.asOf} (1m ${data.fx.changePct1m ?? "n/a"}%)`
            : "null",
        ),
        kv(
          "global",
          `${data.global.filter((m) => m.latest !== null).length}/${data.global.length} with a value`,
        ),
        ...data.global.map(
          (m) =>
            `  ${m.symbol.padEnd(10)} ${m.label.en}: ${m.latest ?? "null"}${m.unit} (1d ${m.changePct1d ?? "n/a"}%)`,
        ),
        kv("annual", data.annual.length),
        ...data.annual.map(
          (m) => `  ${m.indicator.padEnd(20)} ${m.label.en}: ${m.latest ?? "null"} (${m.year})`,
        ),
      ],
      "vnmacro",
    );
  },
};

export const vndocsTarget: Target = {
  name: "vndocs",
  summary: "fetchVnDocsData() — NSO CPI + monthly articles (HTML) and the VBMA weekly bulletin (PDF)",
  options: [{ name: "chars", arg: "n", desc: "excerpt head to print per document (default 200)" }],
  async run(args) {
    const { fetchVnDocsData } = await import("../../feeds/finance/vn/index.ts");
    const data = await fetchVnDocsData();
    const head = args.num("chars", 200);
    const lines = [kv("fetchSuccess", data.fetchSuccess), kv("docs", `${data.docs.length}/3`)];
    for (const d of data.docs) {
      lines.push(
        `${d.id} (${d.kind}${d.pages ? `, pages ${d.pages.join(",")}` : ""}): ${oneLine(d.title, 80)}`,
        `  url: ${d.url}`,
        `  excerpt[${d.excerpt.length}]: ${oneLine(d.excerpt, head)}`,
      );
    }
    return withFetchStatus(data.fetchSuccess, data, lines, "vndocs");
  },
};

// ---------------------------------------------------------------------------
// GitHub
// ---------------------------------------------------------------------------

export const githubTarget: Target = {
  name: "github",
  summary: "fetchRecentItems/fetchRecentReleases for one tracked repo — read-only, never creates issues",
  options: [
    {
      name: "repo",
      arg: "id|owner/name",
      desc: "tracked repo id or a raw owner/name (default: first cli repo)",
    },
    { name: "days", arg: "n", desc: "look-back window in days (default 1)" },
    { name: "top", arg: "n", desc: "sample rows to print (default 5)" },
  ],
  env: ["GH_TOKEN"],
  async run(args) {
    requireEnv("GH_TOKEN");
    const [{ loadConfig }, github] = await Promise.all([
      import("../../core/config.ts"),
      import("../../providers/github/repos.ts"),
    ]);

    const cfgAll = loadConfig();
    const known = [cfgAll.openclaw, ...cfgAll.cliRepos, ...cfgAll.openclawPeers];
    const wanted = args.str("repo") ?? known[0]!.repo;
    const cfg =
      known.find((r) => r.id === wanted || r.repo === wanted) ??
      ({ id: wanted, repo: wanted, name: wanted } as (typeof known)[number]);

    const days = args.num("days", 1);
    const since = new Date(Date.now() - days * 24 * 60 * 60 * 1000);

    const [issues, prs, releases] = await Promise.all([
      github.fetchRecentItems(cfg.repo, "issues", since, cfg.paginated),
      github.fetchRecentItems(cfg.repo, "pulls", since, cfg.paginated),
      github.fetchRecentReleases(cfg.repo, since),
    ]);

    const top = args.num("top", 5);
    return {
      json: {
        repo: cfg.repo,
        since: since.toISOString(),
        counts: { issues: issues.length, prs: prs.length, releases: releases.length },
        issues,
        prs,
        releases,
      },
      lines: [
        kv("repo", cfg.repo),
        kv("since", since.toISOString()),
        kv("issues", issues.length),
        kv("prs", prs.length),
        kv("releases", releases.length),
        "issues sample:",
        ...sample(issues, top, (i) => `#${i.number} ${oneLine(i.title, 70)} (${i.state})`),
        "prs sample:",
        ...sample(prs, top, (p) => `#${p.number} ${oneLine(p.title, 70)} (${p.state})`),
        "releases sample:",
        ...sample(releases, top, (r) => `${r.tag_name} — ${oneLine(r.name, 60)}`),
      ],
    };
  },
};
