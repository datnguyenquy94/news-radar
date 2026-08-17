/**
 * Live source contract — `providers/github/client.ts`.
 *
 * Every GitHub caller shares this transport, so probing it separately tells a
 * repo/search/trending failure apart from a credential or header problem.
 */

import { describe, expect, it } from "vitest";

import { GITHUB_API, githubGet } from "../../../../providers/github/client.ts";
import { LIVE_OPTS } from "../../contract.ts";
import { probe } from "../../status.ts";

describe("live provider: github client", () => {
  it("githubGet reaches the API with the configured headers", LIVE_OPTS, async () => {
    await probe("providers/github/client.ts", "githubGet(/rate_limit)", async () => {
      // The cheapest endpoint that works with or without a token: it proves
      // transport, headers and — when GH_TOKEN is set — the credential.
      const json = await githubGet<{ rate?: { limit?: number; remaining?: number } }>(
        `${GITHUB_API}/rate_limit`,
      );

      expect(json.rate, "github /rate_limit has no `rate` object").toBeDefined();
      expect(typeof json.rate!.limit, "github rate.limit is not a number").toBe("number");

      // 60/hour is the anonymous quota; anything above it means the token was
      // accepted, which is what the other GitHub probes depend on.
      const authed = (json.rate!.limit ?? 0) > 60;
      return `${authed ? "authenticated" : "anonymous"} · ${json.rate!.remaining}/${json.rate!.limit} left`;
    });
  });
});
