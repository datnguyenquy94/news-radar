/**
 * Formatting and sampling helpers shared by the prompt builders.
 */

import type { GitHubItem } from "../../domains/github/github.ts";
import type { Lang } from "../../core/i18n/index.ts";
import { t } from "../../core/i18n/index.ts";

// ---------------------------------------------------------------------------
// Formatting
// ---------------------------------------------------------------------------

export function formatItem(item: GitHubItem, lang: Lang = "vi"): string {
  const labels = item.labels.map((l) => l.name).join(", ");
  const labelStr = labels ? ` [${labels}]` : "";
  const body = (item.body ?? "").replace(/\n/g, " ").trim().slice(0, 300);
  const ellipsis = (item.body ?? "").length > 300 ? "..." : "";
  const t =
    lang === "en"
      ? {
          author: "Author",
          created: "Created",
          updated: "Updated",
          comments: "Comments",
          url: "URL",
          summary: "Summary",
        }
      : {
          author: "Tác giả",
          created: "Tạo",
          updated: "Cập nhật",
          comments: "Bình luận",
          url: "Liên kết",
          summary: "Tóm tắt",
        };
  // Extract "owner/repo" from html_url to avoid full GitHub URLs that trigger cross-references
  const repoSlug = item.html_url.replace(/^https:\/\/github\.com\//, "").replace(/\/(issues|pull)\/\d+$/, "");
  const itemKind = item.html_url.includes("/pull/") ? "PR" : "Issue";
  const refStr = `${repoSlug} ${itemKind} #${item.number}`;
  return [
    `#${item.number} [${item.state.toUpperCase()}]${labelStr} ${item.title}`,
    `  ${t.author}: ${item.user.login} | ${t.created}: ${item.created_at.slice(0, 10)} | ${t.updated}: ${item.updated_at.slice(0, 10)} | ${t.comments}: ${item.comments} | 👍: ${item.reactions?.["+1"] ?? 0}`,
    `  ${t.url}: ${refStr}`,
    `  ${t.summary}: ${body}${ellipsis}`,
  ].join("\n");
}

// ---------------------------------------------------------------------------
// Sampling helpers (shared)
// ---------------------------------------------------------------------------

/** Sort by comment count desc, take top N. */
export function topN(items: GitHubItem[], n: number): GitHubItem[] {
  return [...items].sort((a, b) => b.comments - a.comments).slice(0, n);
}

/** Default sort criterion: comment count (the sort `topN` applies). */
const DEFAULT_SAMPLE_BY: Record<Lang, string> = t("nhiều bình luận nhất", "by comment count");

/**
 * Format the "(Total: N items; showing top M ...)" note. `by` names the sort
 * criterion actually used to pick the top M — pass it explicitly whenever a
 * caller sorts by something other than comment count, so the prompt never
 * misdescribes its own sampling.
 */
export function sampleNote(
  total: number,
  sampled: number,
  lang: Lang = "vi",
  by: Record<Lang, string> = DEFAULT_SAMPLE_BY,
): string {
  if (lang === "en") {
    return total > sampled
      ? `(Total: ${total} items; showing top ${sampled} ${by.en})`
      : `(Total: ${total} items)`;
  }
  return total > sampled
    ? `(Tổng cộng ${total} mục, hiển thị ${sampled} mục có ${by.vi})`
    : `(Tổng cộng ${total} mục)`;
}

// ---------------------------------------------------------------------------
// Numeric formatting (shared by the macro dashboards)
// ---------------------------------------------------------------------------

/** Format a number with fixed decimals and thousands separators, or a dash. */
export function fmtNum(value: number | null, decimals: number, unit: string): string {
  if (value === null) return "N/A";
  const sign = value > 0 && (unit === "K" || unit === "% YoY") ? "+" : "";
  const body = value.toLocaleString("en-US", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
  return `${sign}${body}${unit ? ` ${unit}` : ""}`;
}

/** Signed percentage, e.g. "+1.2%" / "-0.4%" / "N/A". */
export function fmtPct(value: number | null, decimals = 1): string {
  if (value === null) return "N/A";
  return `${value > 0 ? "+" : ""}${value.toFixed(decimals)}%`;
}
