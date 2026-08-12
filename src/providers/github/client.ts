/**
 * GitHub API transport — auth, versioning and error policy in one place.
 *
 * Both halves of the pipeline talk to GitHub: the fetchers in `repos.ts` and
 * `search.ts` read from it, and `platform/publish/github-issues.ts` writes
 * to it. Before this module the read paths had two different clients — one that
 * always sent `Authorization` and threw on a non-2xx, one that made auth
 * optional and swallowed errors — so a rate-limit aborted one path and silently
 * emptied the other.
 *
 * `GH_TOKEN` is read at call time, never at import: `cli/inspect` loads these
 * modules to probe them and must be able to report a missing token as a skip.
 */

import { fetchJson, httpRequest, type HttpOptions } from "../../core/http.ts";

export const GITHUB_API = "https://api.github.com";

/**
 * Authorization is omitted rather than sent empty when no token is set. GitHub
 * answers an empty bearer with 401, but serves the public read endpoints
 * unauthenticated at a lower rate limit — which is what a token-less
 * `pnpm inspect trending` wants.
 */
export function githubHeaders(): Record<string, string> {
  const token = process.env["GH_TOKEN"] ?? "";
  return {
    ...(token ? { Authorization: `Bearer ${token}` } : {}),
    Accept: "application/vnd.github+json",
    "X-GitHub-Api-Version": "2022-11-28",
  };
}

/**
 * GET and parse JSON; throws `HttpError` (with the response body attached) on a
 * non-2xx.
 *
 * `params` is optional on purpose: GitHub's search syntax uses raw `+` and `>`
 * separators that `URLSearchParams` would re-encode, so those callers hand over
 * a fully-built URL instead.
 */
export function githubGet<T>(url: string, params: Record<string, string> = {}): Promise<T> {
  return fetchJson<T>(url, { headers: githubHeaders(), params });
}

/**
 * Raw request with GitHub's headers applied, returning the `Response` without
 * throwing on a non-2xx. Used by the writers, which need to inspect the status
 * themselves — a 422 from the labels endpoint means "already exists", not a
 * failure.
 */
export function githubFetch(url: string, opts: HttpOptions = {}): Promise<Response> {
  return httpRequest(url, {
    ...opts,
    headers: { ...githubHeaders(), ...opts.headers },
    throwOnError: false,
  });
}
