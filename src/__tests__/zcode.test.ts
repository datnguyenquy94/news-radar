import { describe, it, expect } from "vitest";
import { parseZcodeChangelog } from "../zcode.ts";

// Mirrors the real page: <span>version</span><span>Released Mon D, YYYY</span>,
// with a script tag and an earlier prose "version" that must not be matched.
const HTML = `<!DOCTYPE html><html><head><script>var x="9.9.9 Released Jan 1, 2000"</script></head>
<body><h1>Releases &amp; Updates</h1><p>Release notes for every ZCode version.</p>
<div><span class="font-mono">3.3.6</span><span>Released Jul 15, 2026</span></div>
<div>Bug Fixes: stuff</div>
<div><span class="font-mono">3.3.5</span><span>Released Jul 13, 2026</span></div>
</body></html>`;

describe("parseZcodeChangelog", () => {
  it("extracts the first (latest) version and date, ignoring script noise", () => {
    const r = parseZcodeChangelog(HTML);
    expect(r).not.toBeNull();
    expect(r!.version).toBe("3.3.6");
    // Jul 15, 2026 → UTC midnight ISO
    expect(r!.publishedAt).toBe("2026-07-15T00:00:00.000Z");
  });

  it("returns null when no entry matches (structure changed)", () => {
    expect(parseZcodeChangelog("<html><body>No releases here</body></html>")).toBeNull();
  });
});
