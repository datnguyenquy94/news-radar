/**
 * Repo-level LLM prompt builders.
 */

import type { RepoConfig } from "../../core/config.ts";
import type { GitHubItem, GitHubRelease } from "../../providers/github/repos.ts";
import type { Lang } from "../../core/i18n/index.ts";
import { formatItem, topN, sampleNote } from "./shared.ts";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface RepoDigest {
  config: RepoConfig;
  issues: GitHubItem[];
  prs: GitHubItem[];
  releases: GitHubRelease[];
  summary: string;
}

const CLI_ISSUE_LIMIT = 30;
const CLI_PR_LIMIT = 20;

// ---------------------------------------------------------------------------
// Prompts
// ---------------------------------------------------------------------------

export function buildCliPrompt(
  cfg: RepoConfig,
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
  lang: Lang = "vi",
): string {
  const sampledIssues = topN(issues, CLI_ISSUE_LIMIT);
  const sampledPrs = topN(prs, CLI_PR_LIMIT);

  const issuesText =
    sampledIssues.map((i) => formatItem(i, lang)).join("\n") || (lang === "en" ? "None" : "Không có");
  const prsText =
    sampledPrs.map((p) => formatItem(p, lang)).join("\n") || (lang === "en" ? "None" : "Không có");
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : lang === "en"
      ? "None"
      : "Không có";

  const issueNote = sampleNote(issues.length, sampledIssues.length, lang);
  const prNote = sampleNote(prs.length, sampledPrs.length, lang);

  if (lang === "en") {
    return `You are a technical analyst focused on AI developer tools. Based on the following GitHub data, generate the ${cfg.name} community digest for ${dateStr}.

# Data source: github.com/${cfg.repo}

## Latest Releases (last 24h)
${releasesText}

## Latest Issues (updated in last 24h)${issueNote}
${issuesText}

## Latest Pull Requests (updated in last 24h)${prNote}
${prsText}

---

Generate a structured English digest with the following sections:

1. **Today's Highlights** - 2-3 sentences summarizing the most important updates
2. **Releases** - If new versions exist, summarize changes; omit if none
3. **Hot Issues** - Pick 10 noteworthy Issues, explain why they matter and community reaction
4. **Key PR Progress** - Pick 10 important PRs, describe features or fixes
5. **Feature Request Trends** - Distill the most-requested feature directions from all Issues
6. **Developer Pain Points** - Summarize recurring developer frustrations or high-frequency requests

Style: concise and professional, suited for technical developers. Include GitHub links for each item.
`;
  }

  return `Bạn là một nhà phân tích kỹ thuật chuyên về công cụ phát triển AI. Dựa trên dữ liệu GitHub sau đây, hãy tạo bản tin cộng đồng ${cfg.name} cho ngày ${dateStr}.

# Nguồn dữ liệu: github.com/${cfg.repo}

## Releases mới nhất (24 giờ qua)
${releasesText}

## Issues mới nhất (cập nhật trong 24 giờ qua) ${issueNote}
${issuesText}

## Pull Requests mới nhất (cập nhật trong 24 giờ qua) ${prNote}
${prsText}

---

Hãy tạo một bản tin tiếng Việt có cấu trúc rõ ràng, gồm các phần sau:

1. **Điểm nhanh hôm nay** - Tóm tắt trong 2-3 câu những diễn biến quan trọng nhất hôm nay
2. **Phát hành phiên bản** - Nếu có phiên bản mới, tóm tắt nội dung cập nhật; nếu không có thì bỏ qua
3. **Issues nổi bật trong cộng đồng** - Chọn 10 Issue đáng chú ý nhất, giải thích lý do quan trọng và phản ứng của cộng đồng
4. **Tiến độ PR quan trọng** - Chọn 10 PR quan trọng, mô tả tính năng hoặc bản sửa lỗi
5. **Xu hướng nhu cầu tính năng** - Rút ra từ tất cả các Issues hướng tính năng được cộng đồng quan tâm nhất (ví dụ: tích hợp IDE, hiệu năng, hỗ trợ mô hình mới, v.v.)
6. **Điểm quan tâm của nhà phát triển** - Tóm tắt các điểm khó chịu hoặc nhu cầu tần suất cao trong phản hồi của nhà phát triển

Yêu cầu: ngắn gọn, chuyên nghiệp, phù hợp với nhà phát triển kỹ thuật. Mỗi mục kèm theo liên kết GitHub.
`;
}

const PEER_ISSUE_LIMIT = 30;
const PEER_PR_LIMIT = 20;

export function buildPeerPrompt(
  cfg: RepoConfig,
  issues: GitHubItem[],
  prs: GitHubItem[],
  releases: GitHubRelease[],
  dateStr: string,
  issueLimit = PEER_ISSUE_LIMIT,
  prLimit = PEER_PR_LIMIT,
  lang: Lang = "vi",
): string {
  const totalIssues = issues.length;
  const totalPrs = prs.length;

  const sampledIssues = topN(issues, issueLimit);
  const sampledPrs = topN(prs, prLimit);

  const noneStr = lang === "en" ? "None" : "Không có";
  const issuesText = sampledIssues.map((i) => formatItem(i, lang)).join("\n") || noneStr;
  const prsText = sampledPrs.map((p) => formatItem(p, lang)).join("\n") || noneStr;
  const releasesText = releases.length
    ? releases.map((r) => `- ${r.tag_name}: ${r.name}\n  ${(r.body ?? "").slice(0, 300)}`).join("\n")
    : noneStr;

  const openIssues = issues.filter((i) => i.state === "open").length;
  const closedIssues = issues.filter((i) => i.state === "closed").length;
  const openPrs = prs.filter((p) => p.state === "open").length;
  const mergedPrs = prs.filter((p) => p.state === "closed").length;

  const issueSampleNote = sampleNote(totalIssues, sampledIssues.length, lang);
  const prSampleNote = sampleNote(totalPrs, sampledPrs.length, lang);

  if (lang === "en") {
    return `You are an analyst of AI agent and personal AI assistant open-source projects. Based on the following GitHub data from ${cfg.name} (github.com/${cfg.repo}), generate a project digest for ${dateStr}.

# Data Overview
- Issues updated in last 24h: ${totalIssues} (open/active: ${openIssues}, closed: ${closedIssues})
- PRs updated in last 24h: ${totalPrs} (open: ${openPrs}, merged/closed: ${mergedPrs})
- New releases: ${releases.length}

## Latest Releases
${releasesText}

## Latest Issues ${issueSampleNote}
${issuesText}

## Latest Pull Requests ${prSampleNote}
${prsText}

---

Generate a structured English ${cfg.name} project digest with the following sections:

1. **Today's Overview** - 3-5 sentences summarizing project status, including activity assessment
2. **Releases** - If new versions exist, detail changes, breaking changes, migration notes; omit if none
3. **Project Progress** - Merged/closed PRs today, what features advanced or were fixed
4. **Community Hot Topics** - Most active Issues/PRs with most comments/reactions (with links), analyze underlying needs
5. **Bugs & Stability** - Bugs, crashes, regressions reported today, ranked by severity, note if fix PRs exist
6. **Feature Requests & Roadmap Signals** - User-requested features, predict which might be in next version
7. **User Feedback Summary** - Real user pain points, use cases, satisfaction/dissatisfaction
8. **Backlog Watch** - Long-unanswered important Issues or PRs needing maintainer attention

Style: objective, data-driven, highlighting project health. Include GitHub links for each item.
`;
  }

  return `Bạn là một nhà phân tích dự án mã nguồn mở trong lĩnh vực AI agent và trợ lý AI cá nhân. Dựa trên dữ liệu GitHub sau đây từ ${cfg.name} (github.com/${cfg.repo}), hãy tạo bản tin dự án cho ngày ${dateStr}.

# Tổng quan dữ liệu
- Issues cập nhật trong 24 giờ qua: ${totalIssues} (mở/hoạt động: ${openIssues}, đã đóng: ${closedIssues})
- PR cập nhật trong 24 giờ qua: ${totalPrs} (chờ merge: ${openPrs}, đã merge/đóng: ${mergedPrs})
- Phiên bản mới phát hành: ${releases.length}

## Releases mới nhất
${releasesText}

## Issues mới nhất ${issueSampleNote}
${issuesText}

## Pull Requests mới nhất ${prSampleNote}
${prsText}

---

Hãy tạo một bản tin dự án ${cfg.name} có cấu trúc rõ ràng, gồm các phần sau:

1. **Điểm nhanh hôm nay** - Tóm tắt trong 3-5 câu tình trạng tổng thể của dự án hôm nay, bao gồm đánh giá mức độ hoạt động
2. **Phát hành phiên bản** - Nếu có phiên bản mới, mô tả chi tiết nội dung cập nhật, thay đổi phá vỡ tương thích, lưu ý khi nâng cấp; nếu không có thì bỏ qua
3. **Tiến độ dự án** - PR quan trọng đã merge/đóng hôm nay, mô tả các tính năng hoặc bản sửa lỗi được đẩy tới, dự án đã tiến triển đến đâu
4. **Điểm nóng cộng đồng** - Issues/PR được thảo luận sôi nổi nhất, nhiều bình luận và phản ứng nhất hôm nay (kèm liên kết), phân tích nhu cầu đằng sau
5. **Bug và độ ổn định** - Bug, sự cố crash, lỗi hồi quy được báo cáo hôm nay, xếp theo mức độ nghiêm trọng, ghi chú đã có PR sửa hay chưa
6. **Yêu cầu tính năng và tín hiệu lộ trình** - Các yêu cầu tính năng mới từ người dùng, kết hợp với PR hiện có để dự đoán tính năng nào có thể được đưa vào phiên bản tiếp theo
7. **Tóm tắt phản hồi người dùng** - Rút ra từ bình luận Issues những điểm khó chịu thực tế, tình huống sử dụng, mức độ hài lòng/không hài lòng
8. **Tồn đọng cần xử lý** - Issue hoặc PR quan trọng lâu chưa được phản hồi, nhắc nhở người bảo trì chú ý

Yêu cầu: khách quan, chuyên nghiệp, dựa trên dữ liệu, làm nổi bật mức độ lành mạnh của dự án. Mỗi mục kèm theo liên kết GitHub.
`;
}

export function buildPeersComparisonPrompt(
  openclawDigest: RepoDigest,
  peerDigests: RepoDigest[],
  dateStr: string,
  lang: Lang = "vi",
): string {
  const noActivityStr =
    lang === "en" ? "No activity in the last 24 hours." : "Không có hoạt động trong 24 giờ qua.";

  const openclawSection =
    lang === "en"
      ? `## OpenClaw (core reference, github.com/${openclawDigest.config.repo})\n${openclawDigest.summary}`
      : `## OpenClaw (tham chiếu cốt lõi, github.com/${openclawDigest.config.repo})\n${openclawDigest.summary}`;

  const peerSections = peerDigests
    .map((d) => {
      const hasData = d.issues.length || d.prs.length || d.releases.length;
      if (!hasData) return `## ${d.config.name} (github.com/${d.config.repo})\n${noActivityStr}`;
      return `## ${d.config.name} (github.com/${d.config.repo})\n${d.summary}`;
    })
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a senior analyst of the AI agent and personal AI assistant open-source ecosystem. The following are ${dateStr} community digest summaries for each project.

${openclawSection}

---

${peerSections}

---

Generate a cross-project comparison report in English with these sections:

1. **Ecosystem Overview** - 3-5 sentences on the overall personal AI assistant / agent open-source landscape
2. **Activity Comparison** - Table comparing Issues count, PR count, Release status, and health score for each project
3. **OpenClaw's Position** - Advantages vs peers, technical approach differences, community size comparison
4. **Shared Technical Focus Areas** - Requirements emerging across multiple projects (note which projects, specific needs)
5. **Differentiation Analysis** - Key differences in feature focus, target users, technical architecture
6. **Community Momentum & Maturity** - Activity tiers, which are rapidly iterating, which are stabilizing
7. **Trend Signals** - Industry trends extracted from community feedback, value for AI agent developers

Style: concise and professional, data-backed, suited for technical decision-makers and developers.
`;
  }

  return `Bạn là một nhà phân tích kỹ thuật cấp cao chuyên về hệ sinh thái mã nguồn mở AI agent và trợ lý AI cá nhân. Dưới đây là tóm tắt bản tin cộng đồng ngày ${dateStr} của từng dự án.

${openclawSection}

---

${peerSections}

---

Dựa trên diễn biến của các dự án trên, hãy tạo một báo cáo so sánh chéo, gồm các phần sau:

1. **Toàn cảnh hệ sinh thái** - Tóm tắt trong 3-5 câu tình hình chung của hệ sinh thái mã nguồn mở trợ lý AI cá nhân/agent tự chủ
2. **So sánh mức độ hoạt động các dự án** - Tổng hợp dạng bảng số Issues, số PR, tình trạng Release và đánh giá độ lành mạnh của từng dự án hôm nay
3. **Vị thế của OpenClaw trong hệ sinh thái** - Ưu điểm so với các dự án cùng lĩnh vực, khác biệt về hướng kỹ thuật, so sánh quy mô cộng đồng
4. **Hướng kỹ thuật được quan tâm chung** - Nhu cầu xuất hiện chung ở nhiều dự án (ghi rõ liên quan dự án nào, nhu cầu cụ thể)
5. **Phân tích định vị khác biệt** - Khác biệt then chốt về trọng tâm tính năng, đối tượng người dùng, kiến trúc kỹ thuật
6. **Sức hút và độ trưởng thành của cộng đồng** - Phân tầng mức độ hoạt động, dự án nào đang lặp nhanh, dự án nào đang củng cố chất lượng
7. **Tín hiệu xu hướng đáng chú ý** - Rút ra xu hướng ngành từ phản hồi cộng đồng, giá trị tham khảo cho nhà phát triển AI agent

Yêu cầu: ngắn gọn, chuyên nghiệp, có dữ liệu hỗ trợ, phù hợp với người ra quyết định kỹ thuật và nhà phát triển.
`;
}

export function buildSkillsPrompt(
  prs: GitHubItem[],
  issues: GitHubItem[],
  dateStr: string,
  lang: Lang = "vi",
): string {
  const topPrs = topN(prs, 20);
  const topIssues = topN(issues, 15);

  const noneStr = lang === "en" ? "None" : "Không có";
  const prsText = topPrs.map((p) => formatItem(p, lang)).join("\n") || noneStr;
  const issuesText = topIssues.map((i) => formatItem(i, lang)).join("\n") || noneStr;

  if (lang === "en") {
    return `You are a technical analyst focused on the Claude Code ecosystem. The following data is from github.com/anthropics/skills (official Claude Code Skills repository). Analyze the community's most-watched Skills activity (data as of ${dateStr}).

## Repository Context
anthropics/skills is the official Claude Code Skills collection. Each PR typically represents a new or improved Skill. The community proposes new Skills and reports issues via Issues; PRs represent actual Skill submissions.

## Popular Pull Requests (sorted by comments, ${prs.length} total, showing top ${topPrs.length})
${prsText}

## Community Issues (sorted by comments, ${issues.length} total, showing top ${topIssues.length})
${issuesText}

---

Generate a Claude Code Skills community highlights report in English with these sections:

1. **Top Skills Ranking** - List the 5-8 most-discussed Skills (PRs) by comments/attention, describe each Skill's functionality, discussion highlights, and current status (open/merged/draft)
2. **Community Demand Trends** - From Issues, distill the most-anticipated new Skill directions (e.g. workflow automation, code review, test generation, documentation)
3. **High-Potential Pending Skills** - Active-comment PRs not yet merged; these Skills may land soon
4. **Skills Ecosystem Insight** - One-sentence summary: what is the community's most concentrated demand at the Skills level?

Style: concise and professional, include GitHub links for each item.
`;
  }

  return `Bạn là một nhà phân tích kỹ thuật chuyên về hệ sinh thái Claude Code. Dưới đây là dữ liệu từ github.com/anthropics/skills (kho lưu trữ Claude Code Skills chính thức), hãy phân tích diễn biến Skills được cộng đồng quan tâm nhất (dữ liệu tính đến ${dateStr}).

## Bối cảnh kho lưu trữ
anthropics/skills là kho tập hợp Skills chính thức của Claude Code, mỗi PR thường tương ứng với một Skill mới hoặc được cải tiến. Cộng đồng đề xuất Skill mới hoặc phản hồi vấn đề qua Issues; PR đại diện cho Skill thực sự được gửi lên.

## Pull Requests nổi bật (sắp xếp theo số bình luận, tổng ${prs.length}, hiển thị ${topPrs.length} mục đầu)
${prsText}

## Issues cộng đồng (sắp xếp theo số bình luận, tổng ${issues.length}, hiển thị ${topIssues.length} mục đầu)
${issuesText}

---

Hãy tạo một báo cáo điểm nổi bật cộng đồng Claude Code Skills, gồm các phần sau:

1. **Bảng xếp hạng Skills nổi bật** - Liệt kê 5-8 Skills (PR) có bình luận/mức độ quan tâm cao nhất, mô tả chức năng của từng Skill, điểm nóng thảo luận và trạng thái hiện tại (open/merged/draft)
2. **Xu hướng nhu cầu cộng đồng** - Rút ra từ Issues các hướng Skill mới được cộng đồng mong đợi nhất (ví dụ: tự động hóa workflow, review code, sinh test, tài liệu, v.v.)
3. **Skills tiềm năng cao chưa merge** - PR có bình luận sôi nổi nhưng chưa được merge, các Skill này có thể sớm ra mắt
4. **Nhận định về hệ sinh thái Skills** - Tóm tắt một câu: nhu cầu tập trung nhất của cộng đồng ở cấp độ Skills hiện nay là gì

Yêu cầu: ngắn gọn, chuyên nghiệp, mỗi mục kèm theo liên kết GitHub.
`;
}

export function buildComparisonPrompt(digests: RepoDigest[], dateStr: string, lang: Lang = "vi"): string {
  const noActivityStr =
    lang === "en" ? "No activity in the last 24 hours." : "Không có hoạt động trong 24 giờ qua.";

  const sections = digests
    .map((d) => {
      const hasData = d.issues.length || d.prs.length || d.releases.length;
      if (!hasData) return `## ${d.config.name} (github.com/${d.config.repo})\n${noActivityStr}`;
      return `## ${d.config.name} (github.com/${d.config.repo})\n${d.summary}`;
    })
    .join("\n\n---\n\n");

  if (lang === "en") {
    return `You are a senior technical analyst of the AI developer tools ecosystem. The following are ${dateStr} community digest summaries for each major AI CLI tool:

${sections}

---

Generate a cross-tool comparison report in English with these sections:

1. **Ecosystem Overview** - 3-5 sentences on the overall AI CLI tools development landscape
2. **Activity Comparison** - Table comparing Issues count, PR count, Release status for each tool today
3. **Shared Feature Directions** - Requirements appearing across multiple tool communities (note which tools, specific needs)
4. **Differentiation Analysis** - Differences in feature focus, target users, and technical approach
5. **Community Momentum & Maturity** - Which tools have more active communities, which are rapidly iterating
6. **Trend Signals** - Industry trends from community feedback, reference value for developers

Style: concise and professional, data-backed, suited for technical decision-makers and developers.
`;
  }

  return `Bạn là một nhà phân tích kỹ thuật cấp cao chuyên về hệ sinh thái công cụ phát triển AI. Dưới đây là tóm tắt bản tin cộng đồng ngày ${dateStr} của các công cụ AI CLI chính:

${sections}

---

Dựa trên diễn biến của các công cụ trên, hãy tạo một báo cáo so sánh chéo, gồm các phần sau:

1. **Toàn cảnh hệ sinh thái** - Tóm tắt trong 3-5 câu tình hình phát triển chung hiện nay của các công cụ AI CLI
2. **So sánh mức độ hoạt động các công cụ** - Tổng hợp dạng bảng số Issues, số PR, tình trạng Release của từng công cụ hôm nay
3. **Hướng tính năng được quan tâm chung** - Nhu cầu mà nhiều cộng đồng công cụ cùng quan tâm (nêu rõ công cụ nào, nhu cầu cụ thể)
4. **Phân tích định vị khác biệt** - Khác biệt về trọng tâm tính năng, đối tượng người dùng, hướng kỹ thuật của từng công cụ
5. **Sức hút và độ trưởng thành của cộng đồng** - Cộng đồng công cụ nào hoạt động sôi nổi hơn, công cụ nào đang lặp nhanh
6. **Tín hiệu xu hướng đáng chú ý** - Rút ra xu hướng ngành từ phản hồi cộng đồng, giá trị tham khảo cho nhà phát triển

Yêu cầu: ngắn gọn, chuyên nghiệp, có dữ liệu hỗ trợ, phù hợp với người ra quyết định kỹ thuật và nhà phát triển.
`;
}
