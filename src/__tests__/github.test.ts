import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { tryCreateGitHubIssue } from "../platform/publish/github-issues.ts";

// ---------------------------------------------------------------------------
// tryCreateGitHubIssue — a GitHub-side failure must never propagate. The
// reports are already on disk when this runs, and a thrown error exits the
// process non-zero, which skips the workflow's commit step and discards the
// whole day's digest.
// ---------------------------------------------------------------------------

const ISSUES_DISABLED_404 = JSON.stringify({
  message: "Not Found",
  documentation_url: "https://docs.github.com/rest/issues/labels#create-a-label",
  status: "404",
});

describe("tryCreateGitHubIssue", () => {
  const originalRepo = process.env["DIGEST_REPO"];

  beforeEach(() => {
    process.env["DIGEST_REPO"] = "owner/news-radar";
    vi.spyOn(console, "error").mockImplementation(() => {});
  });

  afterEach(() => {
    if (originalRepo !== undefined) process.env["DIGEST_REPO"] = originalRepo;
    else delete process.env["DIGEST_REPO"];
    vi.restoreAllMocks();
  });

  it("returns the issue URL on success", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string) =>
        url.endsWith("/labels")
          ? new Response("{}", { status: 201 })
          : new Response(JSON.stringify({ html_url: "https://github.com/owner/news-radar/issues/1" }), {
              status: 201,
            }),
      ),
    );

    await expect(tryCreateGitHubIssue("Title", "body", "trending-en")).resolves.toBe(
      "https://github.com/owner/news-radar/issues/1",
    );
  });

  it("returns null instead of throwing when label creation 404s", async () => {
    // Exactly what a fork with Issues disabled returns.
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(ISSUES_DISABLED_404, { status: 404 })),
    );

    await expect(tryCreateGitHubIssue("Title", "body", "trending-en")).resolves.toBeNull();
  });

  it("explains the likely cause of a 404", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(ISSUES_DISABLED_404, { status: 404 })),
    );

    await tryCreateGitHubIssue("Title", "body", "trending-en");

    const logged = vi.mocked(console.error).mock.calls.flat().join("\n");
    expect(logged).toContain("owner/news-radar");
    expect(logged).toContain("Issues are disabled");
  });

  it("returns null when issue creation itself fails", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string) =>
        url.endsWith("/labels")
          ? new Response("{}", { status: 201 })
          : new Response("Bad credentials", { status: 401 }),
      ),
    );

    await expect(tryCreateGitHubIssue("Title", "body", "trending-en")).resolves.toBeNull();
  });

  it("tolerates an already-existing label (422)", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (url: string) =>
        url.endsWith("/labels")
          ? new Response("already_exists", { status: 422 })
          : new Response(JSON.stringify({ html_url: "https://github.com/owner/news-radar/issues/2" }), {
              status: 201,
            }),
      ),
    );

    await expect(tryCreateGitHubIssue("Title", "body", "trending-en")).resolves.toBe(
      "https://github.com/owner/news-radar/issues/2",
    );
  });
});
