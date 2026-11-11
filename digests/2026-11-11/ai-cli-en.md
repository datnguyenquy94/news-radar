# AI CLI Tools Community Digest 2026-11-11

> Generated: 2026-11-11 11:23 UTC | Tools covered: 10

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Grok Build](https://github.com/xai-org/grok-build)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

Here is the cross-tool comparison report based on the community digests for November 11, 2026.

### 1. Ecosystem Overview
The AI CLI tools ecosystem on 2026-11-11 reflects a maturing landscape transitioning from rapid feature deployment to stability and reliability hardening. While major releases are frequent, the community discourse has shifted toward resolving regressions, managing subscription mapping, and improving cross-platform parity. A strong trend emerges across nearly all tools: the prioritization of "invisible" infrastructure fixes—such as session persistence, token management, and configuration stability—over flashy new capabilities. Notably, the desktop experience remains a friction point, with issues surrounding Windows stability, macOS integration, and subscription tier recognition causing the most user frustration.

### 2. Activity Comparison

The following table summarizes the raw activity metrics (issues/PRs marked "today" or with high recent activity) for each tool:

| Tool | Issues (Today) | PRs (Today) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (Top Hot) | 2 (Key PR Progress) | No new releases |
| **OpenAI Codex** | 10 (Top Hot) | 10 (Key PR Progress) | 3 releases (2 alpha, 1 minor) |
| **Gemini CLI** | 10 (Top Hot) | 10 (Key PR Progress) | 2 releases (1 stable, 1 preview) |
| **GitHub Copilot CLI** | 10 (Top Hot) | 10 (Key PR Progress) | 3 releases (incl. v1.0.110) |
| **OpenCode** | 10 (Top Hot) | 10 (Key PR Progress) | No new versions |
| **Pi** | 10 (Top Hot) | 10 (Key PR Progress) | 1 release (v1.5.2) |
| **Qwen Code** | 10 (Notable) | 10 (Important) | 1 major release (v1.0.0-preview) |
| **DeepSeek TUI** | 10 (Top) | 15 (Merged/Open) | No new releases |
| **Kimi Code** | 0 | 0 | N/A |
| **Grok Build** | 0 | 0 | N/A |

**Observation:** OpenAI Codex, Gemini CLI, and GitHub Copilot CLI show the highest volume of active PRs (10 each), indicating a high velocity of bug fixes and iterative development. Claude Code and OpenCode have lower PR counts but significant issue backlogs, suggesting mature, stable codebases where current effort is focused on clearing technical debt.

### 3. Shared Feature Directions
Despite differing codebases, several cross-cutting themes appear across the community:

*   **Session Persistence & State Management:** A ubiquitous pain point. Users report lost projects, vanished cloud chats, and orphaned background tasks across Claude Code, Codex, OpenCode, and Pi. The consensus is a need for robust "resume" functionality that survives app updates and OS restarts.
*   **Cross-Platform & Mobile Parity:** Feature requests for mobile integration (Claude Code iOS), Windows stability (Codex, OpenCode), and Linux container friction (Copilot CLI, Pi) are prevalent. Tools are striving to bridge the gap between desktop CLI power and mobile/remote accessibility.
*   **MCP (Model Context Protocol) Stability:** Integration bugs are rampant. Issues regarding HTTP 401 errors (Claude Code), credential masking failures (Copilot CLI), and tool definition mismatches (DeepSeek TUI) indicate that MCP is a critical integration point requiring stabilization.
*   **TUI Polish & Internationalization:** Across Gemini CLI, OpenCode, and DeepSeek TUI, there is significant focus on text rendering (CJK alignment), unicode handling, and console UX polish, indicating a user base that spends significant time in terminal interfaces.
*   **Model Access & Subscription Mapping:** A recurring friction point is the mismatch between actual paid tiers (e.g., Apple Max 20x) and system recognition (Claude Code), or free-tier limits (OpenCode). Users are demanding clearer granularity and control over model selection.

### 4. Differentiation Analysis
The tools differentiate based on their target user base and architectural approach:

*   **Claude Code vs. OpenAI Codex:** Claude Code focuses on the "agentic" workflow, emphasizing Computer Use and cross-platform (iOS/Web) integration. Its current pain points are mobile UX regressions and authentication mapping. In contrast, Codex is deeply integrated into the Microsoft/GitHub ecosystem, with pain points centered on Windows session persistence, local project migration, and "Computer Use" reliability on basic apps. Codex appears to target a broader Windows-centric developer base, while Claude Code targets a more cross-platform, AI-native workflow.
*   **Gemini CLI & Qwen Code:** Both Google and Qwen are pushing the "v1.0 Preview" milestone. Gemini CLI is emphasizing core stability and token tracking (`/stats` heatmap), while Qwen Code is focused on unifying agent capabilities and CLI SDK maturity. Qwen Code's immediate crisis is the `glob` tool's directory matching bug, whereas Gemini CLI focuses on authentication worktree retention.
*   **Copilot CLI & OpenCode:** Both are Microsoft-aligned tools. Copilot CLI is currently in a "stability patch" phase (v1.0.110), heavily focused on credential masking, session resumption, and Windows Entra ID bugs. OpenCode, conversely, is battling a "free-tier crisis" (#59387 with 349 comments) and Windows Desktop regressions in its 2.2.6 release, suggesting a more aggressive feature rollout that is currently straining stability.
*   **Pi & DeepSeek TUI:** These represent the "specialist/embedded" niche. Pi focuses on session forking and environment reliability for coding agents. DeepSeek TUI is in a final sprint toward v0.10.3, with a heavy focus on CJK text rendering and ACP (Agent Client Protocol) integration for running external agents.

### 5. Community Momentum & Maturity
*   **Most Active/Iterating:** **OpenAI Codex** and **GitHub Copilot CLI** show the highest raw activity, with Codex releasing multiple alpha iterations daily and Copilot CLI pushing rapid bugfixes. This suggests these are the most actively developed and rapidly evolving ecosystems.
*   **Most Mature/Stabilizing:** **Claude Code** and **Pi** exhibit signs of maturation. Claude Code has fewer new releases but critical, high-impact bugs being addressed (e.g., the iOS mid-turn bug). Pi's v1.5.2 release focuses entirely on reliability fixes (session forking, output truncation), indicating a "stabilization phase" rather than a "feature race."
*   **Critical Pain:** **OpenCode** currently faces the most severe community frustration, evidenced by issue #59387 amassing 349 comments regarding free-tier failures. This suggests a potential crisis point in user trust that the development team is actively addressing.

### 6. Trend Signals
*   **The "Invisible" Workflow Shift:** The highest-volume issues are rarely about "making code" but about "keeping the session alive." Trends point toward a future where the CLI is a reliable utility pipe rather than a novel AI demo, with users demanding rock-solid session persistence and subscription honesty.
*   **The "Glob" Crisis:** The `glob` tool's inability to match directories (reported in both Qwen Code and DeepSeek TUI contexts) is a critical technical debt item. If unaddressed, it fundamentally breaks file-discovery workflows for AI agents, signaling a need for lower-level filesystem abstraction improvements.
*   **Authentication & Authorization Friction:** The recurring theme of "subscriptions recognized as Pro" or "OAuth blocks chats" suggests that as these tools integrate deeper into enterprise stacks (GitHub Enterprise, Apple subscriptions), the plumbing of auth tokens and entitlements is becoming the primary bottleneck to usability.
*   **TUI as the New UI Battleground:** With desktop apps facing regressions, the Text User Interface is becoming the primary battleground for UX polish. Fixes regarding CJK alignment, unicode escapes, and status line alignment are not merely aesthetic—they are critical for user productivity and adoption in power-user demographics.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (Data as of 2026-11-11)

## 1. Top Skills Ranking
The following PRs have generated the most community discussion (sorted by PR count visibility):

| # | PR | Author | Created | Updated | Functionality | Status |
|---|-----|---------|---------|---------|---------------|--------|
| **1** | #1980 [OPEN] webapp-testing: avoid shell=True in with_server.py | Pcmhacker-piro | 2026-10-06 | 2026-11-01 | Fixes CWE-78 command injection vulnerability in webapp testing by removing `shell=True` from `with_server.py` server commands. | Open |
| **2** | #1245 [OPEN] Add notion-spec-to-implementation and quantitative-resume-auditor skills | mrdesouzaphd-cmyk | 2026-06-02 | 2026-10-15 | Notion Spec to Implementation: transforms tech specs into concrete Notion tasks with acceptance criteria. Quantitative Resume Auditor: audits resumes for quality metrics. | Open |
| **3** | #1771 [OPEN] feat(skills): add proofcore-contract-auditor for smart contract notarization | ProofCore-Protocol | 2026-09-15 | 2026-09-16 | Adds automated static analysis of Solidity/Rust smart contracts with cryptographic audit proof anchoring on the TON Blockchain. | Open |
| **4** | #1742 [OPEN] fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers | Kuldeeep18 | 2026-09-08 | 2026-10-08 | Fixes MCP>=2.0.0 rename: `streamablehttp_client` -> `streamable_http_client`, and updates custom header configuration via `create_mcp_http_client`. | Open |
| **5** | #1792 [OPEN] fix(docx): report LibreOffice timeout as an error and verify the output | TINGyu123644 | 2026-09-19 | 2026-11-01 | Reports LibreOffice timeout as error in docx accept_changes.py, verifies output DOCX no longer carries revision marks. | Open |
| **6** | #1997 [OPEN] fix(skill-creator): parse YAML frontmatter scalars correctly | BichengWang | 2026-10-10 | 2026-10-19 | Fixes `parse_skill_md` to correctly handle quoted and continuation YAML scalars in skill metadata. | Open |
| **7** | #525 [OPEN] Add pyxel skill for retro game development | kitao | 2026-03-05 | 2026-11-01 | Pyxel skill for creating, debugging, and verifying retro games in Python with headless input-driven runs and frame inspection. | Open |
| **8** | #1730 [OPEN] fix(claude-api): replace dead URLs in academy-guide and tool-use-concepts | GISWLH | 2026-09-06 | 2026-10-04 | Replaces 3 hard-404 documentation URLs in `academy-guide` and `tool-use-concepts` with canonical HTTP 200 URLs. | Open |

**Discussion Highlights:**
- **#1980** addresses a critical security concern (command injection) in the popular webapp-testing Skill.
- **#1245** represents the community's push toward knowledge-work automation (Notion integration) and document intelligence.
- **#1771** signals growing demand for Web3/blockchain developer tooling within the Claude ecosystem.
- **#1742** reflects the rapid evolution of the MCP (Model Context Protocol) standard and skills builders needing to keep pace.
- **#1792** improves reliability for document workflow skills involving LibreOffice automation.

## 2. Community Demand Trends (from Issues)
Analysis of open Issues reveals these strong community directions:

- **Workflow Automation & Integration:** Issue #228 ("Enable org-wide skill sharing in Claude.ai") requests organizational skill sharing capabilities, indicating demand for team collaboration features.
- **Skill Reliability & Safety:** Issue #492 ("Security: Community skills distributed under anthropic/ namespace enable trust boundary abuse") highlights concern about skill provenance and trust. Issue #1980's security fix shows the community prioritizes safe command execution.
- **Developer Tooling Expansion:** PRs #1771 (smart contract auditor), #525 (Pyxel retro games), and #1245 (Notion skills) show diversification into specialized domains beyond general code assistance.
- **Evaluation & Trigger Reliability:** Issue #556 ("run_eval.py: claude -p never triggers skills/commands (0% trigger rate)") and #1352 ("skill-creator: run_eval.py parallel workers cross-match skill UUIDs") indicate community frustration with skill evaluation mechanics and trigger rate accuracy.

## 3. High-Potential Pending Skills
Active-comment PRs with community attention not yet merged:

| PR | Author | Focus | Potential Impact |
|-----|---------|-------|-----------------|
| **#1980** | Pcmhacker-piro | webapp-testing: avoid shell=True | Security-critical fix for web testing workflows; likely to be merged soon given the security implications. |
| **#1997** | BichengWang | skill-creator: parse YAML frontmatter | Fixes skill metadata parsing; essential for skill discovery and description optimization features. |
| **#1742** | Kuldeeep18 | mcp-builder: MCP>=2 support | Keeps skills compatible with the latest MCP standard; critical for skills using Model Context Protocol. |
| **#1245** | mrdesouzaphd-cmyk | Notion skills addition | Expands the skill catalog into knowledge management and document transformation. |

## 4. Skills Ecosystem Insight
**The community's most concentrated demand is for reliable, security-aware workflow automation skills that integrate with modern toolchains (MCP, web technologies, document processors) while maintaining evaluation accuracy.**

The data shows a community actively building skills for diverse domains (Web3, retro gaming, Notion automation, document health) but converging on shared concerns: security (command injection, namespace trust), compatibility (MCP version updates), and reliable trigger mechanics. Skills that solve "last mile" integration problems—connecting Claude to existing workflows safely and reliably—are receiving the most attention.

---
*Report generated from github.com/anthropics/skills data. All PRs and Issues shown are open as of 2026-11-11. Links follow the pattern: https://github.com/anthropics/skills/pull/{number} or https://github.com/anthropics/skills/issues/{number}*

---

# Claude Code Community Digest
**November 11, 2026**

### **Today's Highlights**
The Claude Code ecosystem shows signs of maturation this week, with significant activity around authentication stability and mobile integration. A critical iOS regression (#108975) where messages sent mid-turn fail to reach Claude until the turn completes highlights the challenges of real-time synchronization across platforms. Concurrently, the Claude Docs plugin MCP failure (#104898) with HTTP 401 errors suggests ongoing refinements to the Model Context Protocol integration. These issues, both dated today, indicate a focused effort on cross-platform reliability as the tooling expands beyond the desktop.

### **Releases**
No new releases were published in the last 24 hours.

### **Hot Issues (Top 10)**
1.  **[#108975](https://github.com/anthropics/claude-code/issues/108975)** [BUG] Messages Sent from the iOS App Mid-Turn No Longer Reach Claude Until the Turn Ends
    *   **Why it matters:** A regression affecting iOS users where messages typed during an active turn are buffered and only processed after the turn ends, breaking the conversational flow.
    *   **Reaction:** 5 comments, 1 upvote. Users are reporting this as a significant UX regression for mobile workflows.
2.  **[#108679](https://github.com/anthropics/claude-code/issues/108679)** [BUG] Claude in Chrome: new Claude Code sessions get 'Browser extension is not connected'
    *   **Why it matters:** Since Nov 7, new sessions in Chrome on macOS fail to connect to the browser extension, while existing sessions remain functional. This impacts the "Computer Use" workflow directly.
    *   **Reaction:** 3 comments, 1 upvote. Community is tracking this as a recent regression introduced around Nov 7.
3.  **[#106126](https://github.com/anthropics/claude-code/issues/106126)** [BUG][REGRESSION] Projects: effort setting removed from Project settings, coordinator locked to Opus 5.5 at low effort
    *   **Why it matters:** Users lost the ability to manually select models and effort levels for Projects, now defaulted to Opus 5.5 at low effort against user preferences from the Sep 17 beta launch.
    *   **Reaction:** 4 comments, 2 upvotes. Strong community pushback regarding loss of control over model selection.
4.  **[#108984](https://github.com/anthropics/claude-code/issues/108984)** [BUG] Claude Code drops next in the middle of the scrollback when it appends text to console
    *   **Why it matters:** Text appending to the console causes the viewport to "drop" or jump, losing context of previous output in long-running sessions.
    *   **Reaction:** 3 comments, 2 upvotes. A TUI (Text User Interface) annoyance affecting daily usability.
5.  **[#98134](https://github.com/anthropics/claude-code/issues/98134)** [BUG] Active Apple Max 20x subscription still recognized as Pro
    *   **Why it matters:** Subscription tier mismatch where a Max 20x plan is incorrectly identified as Pro, likely affecting feature access and billing.
    *   **Reaction:** 28 comments, 0 upvotes. The highest comment count of the day, indicating significant user frustration and investigation activity.
6.  **[#75314](https://github.com/anthropics/claude-code/issues/75314)** [CLOSED] 10 background Agent tasks stuck running for 34+ hours, no way to cancel, burned ~1M tokens
    *   **Why it matters:** A resolved but severe bug where orphaned agent tasks consumed massive resources without a cancellation mechanism. Serves as a warning for background workflow stability.
    *   **Reaction:** 11 comments. Marked closed recently, but the token burn issue remains a concern for long-horizon tasks.
7.  **[#87741](https://github.com/anthropics/claude-code/issues/87741)** [BUG] X11 PRIMARY selection pastes twice in JetBrains terminal
    *   **Why it matters:** A Linux/X11 specific bug where middle-click paste inserts text twice specifically in the Claude Code JetBrains plugin, disrupting code editing.
    *   **Reaction:** 7 comments, 6 upvotes. High upvote count suggests this is a widespread platform-specific issue.
8.  **[#104898](https://github.com/anthropics/claude-code/issues/104898)** [BUG] Claude Docs plugin MCP fails with HTTP 401
    *   **Why it matters:** The Docs plugin MCP integration is breaking with authentication errors, blocking access to documentation via the Model Context Protocol.
    *   **Reaction:** 2 comments. Indicates ongoing work to stabilize MCP tooling.
9.  **[#103931](https://github.com/anthropics/claude-code/issues/103931)** [BUG] Idle compaction doesn't fire on a 200k+ idle terminal session with the Mac awake (2.1.300 to 2.1.305)
    *   **Why it matters:** A compaction feature intended to manage prompt caches (changelog promise) is failing on idle but awake macOS sessions, risking cache expiry issues.
    *   **Reaction:** 1 comment. A technical debt issue affecting high-token users.
10. **[#108975](https://github.com/anthropics/claude-code/issues/108975)** [BUG] Messages Sent from the iOS App Mid-Turn No Longer Reach Claude Until the Turn Ends
    *   *(Note: Listed twice due to being the most recent critical issue)*
    *   **Why it matters:** See #1 above.

### **Key PR Progress (Top 10)**
1.  **[#26230](https://github.com/anthropics/claude-code/pull/26230)** [CLOSED] Feature/path validation hooks
    *   **Summary:** Implementation of blocked relative paths from agent tool calls to enable more secure sandboxing.
    *   **Significance:** A security hardening feature designed to prevent agents from escaping designated working directories.
2.  **[#74722](https://github.com/anthropics/claude-code/pull/74722)** [CLOSED] feat(commit-commands): support Conventional Branch naming in /commit-push-pr
    *   **Summary:** Addition of an optional `conventional` argument to `/commit-push-pr` naming branches per the Conventional Branch 1.0.0 spec.
    *   **Significance:** Streamlines Git workflow integration, aligning commit practices with modern standards.

### **Feature Request Trends**
Analysis of the issue queue reveals a strong momentum toward **cross-platform parity and plugin extensibility**.
*   **Remote Control & Mobile UX:** There is a clear demand for feature parity between desktop and mobile. Feature requests like drawing `ui.render` trees on Remote Control phone clients (#103763) and allowing mods to rewrite parameter descriptions for built-in tools (#107618) indicate a push to make Claude Code a viable "on-the-go" development environment.
*   **Granular Model Control:** Users are increasingly frustrated by automatic model downgrades or locked coordinators. The recurring theme of "effort setting removed" (#106126) and "model downgrade without warning" (#92530) suggests a need for more robust model selection UI and transparency in Project settings.
*   **TUI & Console Polish:** Minor but frequent requests focus on the terminal interface, specifically visual distinctions between human and agent messages (#92537) and scrollback management during text appending (#108984), reflecting a desire for a cleaner, more readable interaction log.

### **Developer Pain Points**
1.  **Authentication & Subscription Mapping:** The mismatch between actual subscription tiers (e.g., Apple Max 20x) and system recognition (recognized as Pro) (#98134) creates confusion regarding feature access and billing, representing a critical integration gap between Apple's subscription system and Claude Code's auth state.
2.  **Background Resource Leaks & Orphaned Tasks:** The recurring issue of background agents or bash tasks running unchecked or resetting state incorrectly (#75314, #87953, #80036) leads to unpredictable token consumption and lost progress, highlighting a need for better lifecycle management and cancellation UI.
3.  **MCP Tool Accessibility for Subagents:** A persistent friction point is the inability of background subagents to access MCP resources by default (#85230), requiring explicit tool allowlisting that breaks the "inherited tool" contract documented for subagents.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for 2026-11-11.

### **Today's Highlights**
The Codex ecosystem released two minor Rust iterations (`v0.167.1` and `v0.169.0-alpha.11`) focused on backend stability, while the community remains actively engaged in debugging critical Windows session persistence issues. The most pressing concern is the recurring loss of local projects and cloud-managed chats following desktop app updates, affecting both Windows and macOS users. Additionally, the CLI has seen a suspected false positive safety block on the latest release, and Computer Use features are experiencing timeout errors on basic Windows applications.

### **Releases**
*   **rust-v0.167.1**: A minor patch release addressing backend stability and bug fixes. [View Release](https://github.com/openai/codex/compare/rust-v0.167.0...rust-v0.167.1)
*   **rust-v0.169.0-alpha.11**: The latest pre-release candidate for the 0.169 series, introducing upcoming features or refinements. [View Release](https://github.com/openai/codex/releases/tag/rust-v0.169.0-alpha.11)
*   **Other Pre-releases**: Several alpha iterations (0.169.0-alpha.9 through 0.169.0-alpha.12) were published, indicating an active development pipeline leading toward a stable release.

### **Hot Issues** (Top 10)
1.  **#59895** [Windows: local projects disappear after app update](https://github.com/openai/codex/issues/59895) (66 comments) – A critical bug where Windows projects vanish after updating the app and switching accounts, causing significant workflow disruption.
2.  **#59855** [Windows: AbsolutePathBuf error resuming cloud chats](https://github.com/openai/codex/issues/59855) (26 comments) – Errors resuming cloud-managed chats with `AbsolutePathBuf deserialized without a base path`, blocking access to conversation history.
3.  **#45369** [Windows: Auto-hidden taskbar unrevealed](https://github.com/openai/codex/issues/45369) (20 comments) – A long-standing UI glitch where the auto-hide taskbar feature fails to reappear when Codex is maximized.
4.  **#51251** [Codex Desktop: Steer/queued messages fail silently](https://github.com/openai/codex/issues/51251) (15 comments) – Messages sent to the desktop app intermittently fail without visible errors, affecting the reliability of the primary interface.
5.  **#59380** [Windows Computer Use: Browser URL detection failure](https://github.com/openai/codex/issues/59380) (13 comments) – The Windows Computer Use feature cannot detect browser URLs or take screenshots in Edge or Chrome, halting automation workflows.
6.  **#58754** [Windows: Projects disappear after migration](https://github.com/openai/codex/issues/58754) (6 comments) – Four specific local projects vanished from the sidebar following a desktop app update to version 26.1027.30824.
7.  **#59323** [Windows: Update blocks chats with different model providers](https://github.com/openai/codex/issues/59323) (6 comments) – Desktop updates prevent resuming chats configured to use non-default model providers.
8.  **#60537** [Linux: Dictation gain lowering bug](https://github.com/openai/codex/issues/60537) (5 comments) – A playback gain defect on Linux where dictation permanently lowers audio volume if a stream disappears mid-session.
9.  **#53962** [Windows: Gmail tools become unavailable](https://github.com/openai/codex/issues/53962) (4 comments) – Gmail MCP tools show as "Connected" but become read-only/unavailable despite active status.
10. **#60776** [CLI: Suspected false positive safety block](https://github.com/openai/codex/issues/60776) (3 comments) – A `misalignment_policy_violation` error on Codex CLI 0.167.1 reported as a suspected false positive by the community.

### **Key PR Progress** (Top 10)
1.  **#60784** [CLOSED] Centralize synchronous Guardian reviewer selection – Refactored reviewer lookup logic to improve assessment workflow consistency. [View PR](https://github.com/openai/codex/pull/60784)
2.  **#60773** [CLOSED] Resolve saved Daybreak choices for each subagent turn – Ensures Daybreak model choices persist and remain consistent across subagent turns. [View PR](https://github.com/openai/codex/pull/60773)
3.  **#60771** [CLOSED] Preserve model-facing ID allocations in saved history – Adds allocation metadata to `ResponseItemId` to maintain ID sequences during history restoration. [View PR](https://github.com/openai/codex/pull/60771)
4.  **#60770** [CLOSED] Derive history and notes tool schemas from typed requests – Replaces handwritten JSON schemas with typed Rust request definitions using `serde` and `schemars`. [View PR](https://github.com/openai/codex/pull/60770)
5.  **#60763** [CLOSED] Hand off approved plans through attachments – Saves approved implementation plans as app-server attachments for fresh session handoff. [View PR](https://github.com/openai/codex/pull/60763)
6.  **#60759** [CLOSED] Fix Unicode caseless matching in thread search – Implements Unicode default case folding to correctly match Greek sigma variants and other complex characters. [View PR](https://github.com/openai/codex/pull/60759)
7.  **#60757** [CLOSED] Use typed context window IDs throughout thread persistence – Moves `ContextWindowId` through session metadata instead of converting to strings, improving data integrity. [View PR](https://github.com/openai/codex/pull/60757)
8.  **#60746** [CLOSED] Add a Git credential helper for existing Codex logins – Introduces a `codex git-credential` command to expose file-backed logins via Git's `authtype` protocol. [View PR](https://github.com/openai/codex/pull/60746)
9.  **#60735** [CLOSED] Preserve file-backed audio in tool outputs – Ensures `input_audio` outputs retain their original audio URL or file ID rather than converting to text. [View PR](https://github.com/openai/codex/pull/60735)
10. **#60708** [CLOSED] Canonicalize Windows sandbox homes and migrate saved junction paths – Fixes sandbox home paths and migrates saved junction paths during restoration to prevent pathing errors. [View PR](https://github.com/openai/codex/pull/60708)

### **Feature Request Trends**
The issue queue reveals a strong demand for **account and subscription flexibility**. The most persistent request is for a **"ChatGPT Family" plan** (Issues #60780 and #60781), seeking a single billing cycle with independent private accounts. On the technical side, users are requesting **enhanced project threading and collaboration**, specifically the ability to link existing conversations into shared forum-style threads (#56801) and improve cross-device project synchronization so sessions created via CLI appear immediately in the Desktop sidebar (#56089). There is also significant interest in **refining the Computer Use and Browser Control capabilities** to reliably interact with native Windows applications and browser URLs without timing out or failing policy checks.

### **Developer Pain Points**
*   **Session Persistence & Update Risks**: The most severe frustration is the loss of local projects and cloud chats following desktop app updates. Users report projects vanishing from the sidebar or becoming inaccessible when switching accounts (#59895, #58754, #59323).
*   **Windows Computer Use Reliability**: The `Computer Use` feature is frequently reported as broken or non-functional, specifically failing to detect browser URLs or capture screenshots in Edge/Chrome and timing out on basic apps like Notepad (#59380, #60485).
*   **CLI Model Configuration**: Developers using custom models frequently encounter errors where the CLI cannot locate API keys via environment variables, raising `Missing environment variable: OPENAI_API_KEY` errors even when keys are correctly set (#52806).
*   **macOS Sidebar Synchronization**: There is a recurring lag where sessions created via the CLI do not appear in the macOS Desktop sidebar until the application is fully restarted, breaking the expected real-time sync workflow (#56089).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Date:** 2026-11-11

### 1. Today's Highlights
Two significant releases were published today: **v0.69.0-preview.0** and **v0.68.0**. The preview release focuses on core stability and tooling, fixing literal `$` character handling in templates and introducing a new `/stats` heatmap subcommand for token usage tracking. The stable v0.68.0 release completes the v0.67.0 changelog and clarifies the CLI's scope and limitations. Both releases reflect an active push toward stability ahead of the v0.70.0 nightly cycle.

### 2. Releases
*   **v0.69.0-preview.0**: Key fixes include preserving literal `$` characters during template placeholder replacement and the addition of the `/stats` heatmap subcommand for daily token usage. Other changes address core CLI behaviors.
*   **v0.68.0**: This stable release includes the completion of the v0.67.0 changelog, clarifications to the README regarding scope and limitations, and various documentation updates.

### 3. Hot Issues (Top 10)
1.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** (13 comments): Subagent recovery after `MAX_TURNS` is reported as GOAL success, hiding interruptions. Critical for reliability in long-running agent workflows.
2.  **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** (9 comments): Proposal to leverage model bash affinity via Zero-Dependency OS Sandboxing. Represents a shift toward native model capabilities for code editing.
3.  **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** (8 comments): Generalist agent hangs permanently on simple tasks like folder creation. A top-priority bug affecting core workflow stability.
4.  **[#29574](https://github.com/google-gemini/gemini-cli/issues/29574)** (7 comments): 400 Bad Request error when reading image files via the ReadFile tool. Hinders multimodal agentic sessions.
5.  **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments): EPIC tracking AST-aware file reads, search, and mapping. A major feature direction for reducing token noise.
6.  **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** (7 comments): Model does not use custom skills and sub-agents sufficiently. Highlights a gap in autonomous agent tool utilization.
7.  **[#29676](https://github.com/google-gemini/gemini-cli/issues/29676)** (5 comments): YOLO mode halted by "Untrusted Command Flags Detected" on safe git diff. Security prompt friction in auto-approval modes.
8.  **[#30078](https://github.com/google-gemini/gemini-cli/issues/30078)** (4 comments): Authentication restart forgets the worktree selected by `--worktree`. Usability issue for multi-repo workflows.
9.  **[#30193](https://github.com/google-gemini/gemini-cli/issues/30193)** (3 comments): `gemini models` omits `gemini-3.8-flash` available in `/model manage`. Model discovery inconsistency.
10. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** (5 comments): Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`). Configuration persistence issue for browser-based agents.

### 4. Key PR Progress (Top 10)
1.  **[#30228](https://github.com/google-gemini/gemini-cli/pull/30228)**: Fixes `400 Bad Request` errors and silent user-prompt fusion when models respond to tool outputs with empty parts. Critical bugfix for tool-loop stability.
2.  **[#30176](https://github.com/google-gemini/gemini-cli/pull/30176)**: Preserves the Git worktree selected by `--worktree` across authentication restarts. Directly addresses issue #30078.
3.  **[#30115](https://github.com/google-gemini/gemini-cli/pull/30115)**: Prevents `$`-pattern expansion in custom command and prompt substitutions (e.g., `$$`, `$&`). Fixes corruption of user arguments in templates.
4.  **[#30220](https://github.com/google-gemini/gemini-cli/pull/30220)**: Preserves Unicode prompts and strips ANSI fragments in session previews. Improves internationalization and UI cleanliness.
5.  **[#30107](https://github.com/google-gemini/gemini-cli/pull/30107)**: Makes auth URL clickable when terminal wraps it. Fixes broken link detection on narrow terminals during sign-in.
6.  **[#30089](https://github.com/google-gemini/gemini-cli/pull/30089)**: Chore: bumps npm-dependencies group across 1 directory with 70 updates. Keeps the dependency stack current.
7.  **[#30224](https://github.com/google-gemini/gemini-cli/pull/30224)**: Changelog for v0.68.0. Auto-generated documentation for the stable release.
8.  **[#30222](https://github.com/google-gemini/gemini-cli/pull/30222)**: Changelog for v0.69.0-preview.0. Documentation merge preparation.
9.  **[#30214](https://github.com/google-gemini/gemini-cli/pull/30214)**: Recognize TortoiseGitPlink as PuTTY-family SSH client. Ensures `-batch` flags are correctly inserted for TortoiseGit users.
10. **[#30207](https://github.com/google-gemini/gemini-cli/pull/30207)**: Fix(build): clear bundle/ before esbuild to drop stale chunks. Resolves nightly publish failures due to entity too large errors.

### 5. Feature Request Trends
The issue queue reveals a strong momentum toward **agentic resilience and tool orchestration**.
*   **AST-Aware Tools**: There is significant interest (Issues #22745, #22746) in AST-aware file reads and codebase mapping to reduce token overhead and improve precision.
*   **Sub-Agent Orchestration**: Multiple requests focus on making sub-agents more visible and usable (#21968, #22598). Users want better trajectory tracking and the ability to leverage custom skills autonomously.
*   **Security & UX in YOLO Mode**: A recurring theme is the friction between auto-approval modes (#YOLO) and security prompts (#29676, #22672). The community is seeking "Zero-Dependency OS Sandboxing" (#19873) as a solution to allow models to use bash natively without constant interruptions.
*   **Stability & State Management**: There is a high frequency of bugs related to state loss and configuration persistence, specifically worktree retention during auth restarts (#30078) and settings.json overrides being ignored (#22267).

### 6. Developer Pain Points
*   **Token Management & Context Bloat**: The model frequently "firehos" context with large file reads, and there is a push for "Tactful Extraction" logic to perform surgical reads instead.
*   **Agent Reliability**: The "Generalist agent hangs" issue (#21409) and subagent turn-limit bugs (#22323) indicate that current agent loops are fragile and prone to silent failures or infinite hangs.
*   **Configuration Drift**: Users report that `settings.json` overrides (like `maxTurns`) are frequently ignored by specific agents (Browser Agent), and worktree selections are lost during authentication restarts, forcing manual reconfiguration.
*   **Security Prompt Friction**: The "Untrusted Command Flags Detected" warning in YOLO mode (#29676) is a significant usability barrier for power users who want fully automated execution.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-11-11.

### 1. Today's Highlights
The CLI v1.0.110 series was released, featuring critical bug fixes for session resumption and status line alignment, alongside an experimental feature allowing the agent to answer password prompts for `git`, `ssh`, and `sudo` via a masked dialog. This update emphasizes stability improvements and safer credential handling for power users.

### 2. Releases
**v1.0.110-1** (Latest): Fixed a race condition where a session reopened with `copilot --resume` was immediately marked "in use," preventing multiple windows from writing to it. It also resolved custom status line indentation issues and ensured control characters are now visible.
**v1.0.110-0**: Added experimental support for answering `git`, `ssh`, and `sudo` password prompts from agent commands in a masked dialog (enable via `/experimental on`).
**v1.0.109** (2026-11-10): Added IPv4/IPv6 CIDR support for sandbox rules and added Claude Fable 5.2 to the model picker.

### 3. Hot Issues (Top 10)
*   **#5359** (Closed): Resumed sessions fail with "Tool reference '...' not found in available tools" after MCP tool changes. *Why it matters:* Breaks workflow continuity for users relying on resumed contexts.
*   **#5283** (Open): Remote environment hosting blocked on personal Free accounts. *Why it matters:* Highlights a friction point for individual developers wanting to use remote access features.
*   **#5388** (Closed): Sandbox credential masking ineffective for `GH_TOKEN` on GHE Cloud data-residency tenants. *Why it matters:* Security concern regarding token exposure in sandboxes.
*   **#5312** (Closed): Context window rollover fails despite prior closure as completed. *Why it matters:* Erodes trust in the issue tracking and fix delivery process.
*   **#5242** (Closed): Sessions stop processing when MCP config watch hits inotify limit (ENOSPC). *Why it matters:* Critical for containerized/Linux environments where watch limits are common.
*   **#5088** (Open): Windows crash (0xc0000005) on first Entra account-broker sign-in for MCP. *Why it matters:* Severe stability bug preventing MCP usage on Windows.
*   **#5171** (Open): NumLock-off numpad navigation and Delete ignored on Windows. *Why it matters:* Accessibility and usability regression for power users.
*   **#5391** (Closed): No fixed OAuth callback port for remote MCP servers. *Why it matters:* Causes port collision issues with existing local services.
*   **#5375** (Open): Feature request to disable built-in slash commands. *Why it matters:* Addresses agent confusion when custom skills conflict with built-in commands.
*   **#4920** (Open): Local stdio MCP server silently dropped during session-ID swap on startup. *Why it matters:* Causes silent failures when resuming or starting new sessions with local MCP servers.

### 4. Key PR Progress (Top 10)
*   **#4770** (Open): Documents the WebSocket responses opt-out. *Why it matters:* Provides a necessary escape hatch for models whose WebSocket transport is unstable or blocked by network policies.
*   **#5359** (Fix): Addresses the resumed session tool reference bug mentioned in Issues.
*   **#5388** (Fix): Implements credential masking fixes for GHE Cloud data-residency tenants.
*   **#5391** (Fix): Allows configuring a fixed OAuth callback port for remote MCP servers.
*   **#5375** (Feature): Implementation of the ability to disable built-in slash commands.
*   **#5242** (Fix): Adjustments to MCP config watch registration to prevent ENOSPC failures in containers.
*   **#5088** (Fix): Patches the Windows Entra account-broker crash on initial MCP sign-in.
*   **#4920** (Fix): Fixes the session-ID swap logic to ensure local stdio MCP servers are not dropped during startup/resume.
*   **#5312** (Re-open/Re-fix): Efforts to finally resolve the context window rollover checkpoint.md issue.
*   **#5171** (Fix): Patches for NumLock/numpad input handling on Windows Terminal.

### 5. Feature Request Trends
The community is actively requesting greater **control and configurability**. The most prominent trend is the desire to **disable or customize built-in slash commands** (e.g., `/review`) to prevent conflicts with custom skills. There is also significant demand for **fixed OAuth callback ports** to streamline remote MCP server deployment and **fixed credential masking** for enterprise data-residency compliance. Additionally, users are seeking **interactive configuration editors** (referencing the long-standing request for a `/config` command) to manage the growing list of settings without memorizing individual slash commands.

### 6. Developer Pain Points
*   **Session Continuity:** Resuming sessions frequently results in "Tool not found" errors or orphaned processes, particularly when MCP tool definitions change between launches.
*   **Windows Stability:** Recurrent crashes during the first Entra ID account-broker sign-in and numpad input regressions when NumLock is off create a hostile environment for Windows power users.
*   **Linux Container Friction:** MCP configuration watch limits (ENOSPC) in shared container environments cause sessions to abandon silently, halting productivity.
*   **Credential Management:** Sandbox environments on GitHub Enterprise Cloud fail to mask `GH_TOKEN`/`GH_ENTERPRISE_TOKEN`, leaking sensitive credentials into shell history or environment.
*   **MCP Reliability:** Issues regarding orphaned Docker containers, legacy `initialize` requests after discovery, and HTML stripping in tool parameters indicate a maturing but still unstable MCP integration.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### OpenCode Community Digest - 2026-11-11

---

### 1. Today's Highlights

The OpenCode ecosystem shows high activity on 2026-11-11, with a notable focus on free-tier model access and cross-provider compatibility. The most critical issue (#59387) continues to serve as the central hub for free usage problems, while several model-related bugs emerged today affecting both OpenCode Go and Desktop 2.2.6. Additionally, the desktop application faces intermittent Windows-specific regressions including session list synchronization and SSH key passphrase prompts. The community also shipped several experimental features and bug fixes across the TUI and core layers.

🔗 [View full issue activity](https://github.com/anomalyco/opencode/issues?q=updated%3A2026-11-11)

---

### 2. Releases

**No new versions released in the last 24 hours.**

---

### 3. Hot Issues (Top 10)

| Issue | Comments | Why It Matters |
|-------|----------|----------------|
| [#59387](https://github.com/anomalyco/opencode/issues/59387) | 349 | The primary free-tier troubleshooting hub; reports range from "Free usage exceeded" errors to reset failures at 2026-11-11 08:00. Critical for all non-subscribed users. |
| [#63066](https://github.com/anomalyco/opencode/issues/63066) | 7 | Windows Terminal flashes periodically on every shell tool call in 2.2.6, breaking workflow continuity. Regression from 2.2.5. |
| [#63291](https://github.com/anomalyco/opencode/issues/63291) | 2 | Windows Desktop 2.2.6+ fails to complete SSH connections when using passphrase-protected keys without ssh-agent. |
| [#63064](https://github.com/anomalyco/opencode/issues/63064) | 2 | `opencode-go/mimo-v2.6-flash` returns `[model_coming_soon]` since 2026-11-10 despite being listed as available on Go subscriptions. |
| [#52363](https://github.com/anomalyco/opencode/issues/52363) | 11 | OpenAI models disappear from the provider registry after ChatGPT OAuth login, blocking model selection in `/models`. |
| [#63284](https://github.com/anomalyco/opencode/issues/63284) | 5 | Multi-location `opencode serve` instances serve stale cross-project AGENTS.md content, causing incorrect system prompts. |
| [#63282](https://github.com/anomalyco/opencode/issues/63282) | 4 | Revert-and-resend leaves `session_v2.revert` pointing at a deleted message, permanently blocking future sends. |
| [#63229](https://github.com/anomalyco/opencode/issues/63229) | 4 | Windows Desktop missing browser tab opening functionality after upgrade; bug recurrent across updates. |
| [#63186](https://github.com/anomalyco/opencode/issues/63186) | 6 | TUI unicode escapes (`\uXXXX`) leak into question option labels, corrupting Czech diacritics and likely other non-ASCII text. |
| [#63088](https://github.com/anomalyco/opencode/issues/63088) | 4 | Nix package build fails with hash mismatch in `opencode-node_modules` fixed-output derivation on x86_64-linux. |

---

### 4. Key PR Progress (Top 10)

| PR | Type | Summary |
|----|------|---------|
| [#63295](https://github.com/anomalyco/opencode/pull/63295) | feat | Adds a "New timeline" experimental setting behind Settings → Experimental, redesigning the desktop session timeline. |
| [#63259](https://github.com/anomalyco/opencode/pull/63259) | fix | Console plugin now fetches instructions and skills only when the workspace config explicitly enables them, reducing unnecessary API calls. |
| [#60767](https://github.com/anomalyco/opencode/pull/60767) | fix | Handles stream errors without messages in OpenAI-compatible streams, preventing schema rejection events. |
| [#61083](https://github.com/anomalyco/opencode/pull/61083) | feat | Adds "Wrap long lines in code blocks" toggle to Settings > Appearance for improved readability. |
| [#63290](https://github.com/anomalyco/opencode/pull/63290) | fix | Scopes autocomplete mode to its focused editor, preventing keymap leaks to other editors. |
| [#63289](https://github.com/anomalyco/opencode/pull/63289) | fix | Prevents desktop titlebar submenus from stacking when hovering across the menu bar. |
| [#58201](https://github.com/anomalyco/opencode/pull/58201) | fix | Allows model tooltips to fit their content, truncating at screen edge rather than hard-coded `w-[180px]`. |
| [#61120](https://github.com/anomalyco/opencode/pull/61120) | fix | Avoids holding models.dev refresh lock across network timeouts, improving refresh reliability. |
| [#58705](https://github.com/anomalyco/opencode/pull/58705) | docs | Adds `opencode-sesh`, `opencode-ghost`, and `opencode-quill` to the Ecosystem plugins table. |
| [#62983](https://github.com/anomalyco/opencode/pull/62983) | fix | Delivers keyed instruction updates to Claude-agent provider, ensuring system messages reach the model. |

---

### 5. Feature Request Trends

The issue stream reveals several dominant feature directions:

- **Voice/Speech Input**: Two active requests (#33300, #35219) seek hold-spacebar push-to-talk functionality, mirroring Claude Code's UX for hands-free dictation.
- **Cross-Provider Model Access**: Issues #52363 and #63296 report difficulties connecting non-OpenAI providers (OpenRouter, DeepSeek) and models disappearing after authentication.
- **Free Tier & Subscription Stability**: #59387 and #63077 highlight ongoing friction with daily free message limits, reset timers, and model availability after version upgrades.
- **Windows Desktop Stability**: Multiple regressions in 2.2.6 (#63066, #63291, #63229) point to a push for polish before broader releases.
- **TUI Polish**: Autocomplete scoping (#63290), code block wrapping (#61083), and tooltip improvements (#58201) indicate iterative UX refinements.

---

### 6. Developer Pain Points

- **Free Tier Reliability**: Daily "free usage exceeded" messages that never reset, and model availability breaking after 2.x upgrades (#63077). The central issue #59387 has amassed 349 comments, reflecting widespread frustration.
- **Windows Regressions in 2.2.6**: Flashing Terminal windows on every shell call, SSH passphrase prompts that never complete, and missing browser tab functionality. These appear to be regression bugs introduced in the latest desktop build.
- **Model Provider Instability**: OpenAI/ChatGPT models vanishing from the registry after OAuth (#52363), `mimo-v2.6-flash` returning `[model_coming_soon]` on Go (#63064), and cross-provider model disappearance after Console connection (#63296).
- **Multi-Server Database Conflicts**: Session lists failing to update when another `opencode serve` process shares the same database (#55098).
- **Unicode/Internationalization Leaks**: TUI question option labels corrupted by unicode escape sequences (#63186), affecting non-English speakers.
- **Nix Build Failures**: Hash mismatches in fixed-output derivations blocking reproducible installs on NixOS (#63088).

🔗 [Full issue list](https://github.com/anomalyco/opencode/issues?q=updated%3A2026-11-11) | 🔗 [Full PR list](https://github.com/anomalyco/opencode/pulls?q=updated-any-order%3A2026-11-11)

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

**Pi Community Digest - 2026-11-11**

### Today's Highlights
The Pi ecosystem sees a flurry of activity today with the release of **v1.5.2**, introducing critical session fork handling for deleted folders, while the issue queue grapples with fundamental architecture challenges around virtual models and compaction. A significant portion of the day's closed issues centers on stability fixes for the coding agent and environment, suggesting a push toward 1.5.2 stabilization.

### Releases
*   **v1.5.2**: The latest stable release focuses on reliability. Key improvements include the ability to **fork sessions** whose original folders have been moved or deleted, preventing "continue" prompts from appearing on resumes. It also addresses a crash occurring when reads are cancelled during file open operations. [Release v1.5.2](https://github.com/badlogic/pi-mono/releases/tag/v1.5.2)

### Hot Issues (Top 10)
1.  **[#5886](https://github.com/earendil-works/pi/issues/5886)** (14 comments): A meta issue regarding "AgentSession settlement/continuation" bugs. It highlights recurring failures where post-run logic attempts to continue agents from stale transcripts, indicating a deep architectural challenge in state management.
2.  **[#7553](https://github.com/earendil-works/pi/issues/7553)** (13 comments): Requests a **configurable thinking level/model for compaction**. Users want auto-compaction to use a separate "thinking budget" distinct from normal turns, preventing reasoning models from exhausting their context on summarization.
3.  **[#11021](https://github.com/earendil-works/pi/issues/11021)** (11 comments): Reports a context window mismatch where OpenAI "Sign in with ChatGPT" reports a 272K context for `gpt-6.1-sol` despite a 500K catalog, breaking compaction budgets.
4.  **[#12032](https://github.com/earendil-works/pi/issues/12032)** (1 comment): An **env daemon output truncation bug** where up to 64 KiB of program output is dropped if the client reads slowly at exit. This is a frequent CI pain point currently being fixed in PR #12033.
5.  **[#12028](https://github.com/earendil-works/pi/issues/12028)** (0 comments - PR linked): Directly addresses the issue where `pi.sendMessage(triggerTurn)` starts a run during manual compaction, causing concurrent execution and context mismatches. The linked PR #12028 is the proposed fix.
6.  **[#12030](https://github.com/earendil-works/pi/issues/12030)** (1 comment): Highlights that a full `ModelRuntime.refresh()` aborts in-flight provider-scoped refreshes and falsely reports them as successful, risking stale model caches.
7.  **[#12023](https://github.com/earendil-works/pi/issues/12023)** (2 comments): A trust security gap where `.pi/agents/` is missing from `TRUST_REQUIRING_PROJECT_CONFIG_RESOURCES`, causing `resolveProjectTrusted()` to return `true` by default for repos containing only agent files.
8.  **[#12014](https://github.com/earendil-works/pi/issues/12014)** (2 comments): Reports that **lone UTF-16 surrogates in tool call arguments** break every later request, as the sender strips them from message text but not from tool arguments.
9.  **[#12012](https://github.com/earendil-works/pi/issues/12012)** (2 comments): Notes that the Pi 1.5.2 standalone binary cannot resolve an installed Shiki dependency from extensions, breaking code-preview highlighting in pi-fabric.
10. **[#11980](https://github.com/earendil-works/pi/issues/11980)** (2 comments): Identifies that message thread default keys are resolved by provider ID, silently excluding aliases of Anthropic models, which breaks thread compatibility for non-standard providers.

### Key PR Progress (Top 10)
1.  **PR #12033**: Fixes the env daemon output truncation (Issue #12032) by ensuring a reader waiting for the link is not counted as "silence" after exit.
2.  **PR #12028**: Implements the fix for Issue #10982, deferring `sendMessage triggerTurn` until compaction ends to prevent concurrent runs with uncompacted context.
3.  **PR #12025**: Fixes the crash on cancelling a read during file open (Issue #11956) by ensuring file streams have proper 'error' listeners when aborted.
4.  **PR #12016**: Adds **Microsoft Entra ID authentication** for the Azure OpenAI provider, enabling passwordless connection via the DefaultAzureCredential chain.
5.  **PR #12011**: Moves subagents and sharing to Chord stores, migrating plain SQLite tables (`shares`, `subagents`) into the server's Chord store for better persistence and sync.
6.  **PR #12002**: Moves the session catalog into the server's Chord store as host-keyed rows, replacing the external `catalog.sqlite` file to ensure exports/imports/deletes are consistent with backups.
7.  **PR #11990**: Prototypes a **Radius session sync adapter** for P2, providing a backend boundary for session backup/restore without coupling logic to Radius's HTTP API.
8.  **PR #11961**: Implements harness cleanup that releases provider resources after tasks finish, allowing the process to exit cleanly when a harness closes.
9.  **PR #11960**: Revises the `llama serve` command and options documentation to simplify setup and startup instructions.
10. **PR #12001**: Updates the llama.cpp provider default port to 9931 and updates examples to match the current server standard.

### Feature Request Trends
The issue queue reveals a strong demand for **virtual model** robustness. Several issues (#10536, #12035) focus on the inability to perform cache warming and threshold compaction when a virtual model (extension router) is selected, as the system cannot determine the context window size. There is also a clear push for **configurable compaction budgets** (#7553) and **provider-agnostic thread support** (#11980, #11987), moving away from hardcoded provider ID checks toward endpoint-based feature detection.

### Developer Pain Points
*   **Context Window Blindness**: Virtual models create a "black box" for compaction and caching. Developers cannot set thinking budgets or warm caches because `_modelForMessage()` returns `undefined` (#12035, #10536).
*   **Compaction Interleaving**: Running `sendMessage` with `triggerTurn` during active manual compaction triggers concurrent runs with uncompacted contexts (#10982, #12028), leading to confusing state.
*   **Output Truncation**: The env daemon silently drops the tail of large process outputs if the client reads slowly, a subtle bug flaking in CI (#12032).
*   **Type Safety Derailments**: Changes to `StringEnum` handling in `registerTool` break compile-time typing for tool parameters, reverting to `unknown` (#11869).
*   **Trust & Security Gaps**: Missing resource lists in the trust manager allow agent files to be treated as trusted by default, potentially bypassing security gates (#12023).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-11-11

### 1. Today's Highlights
Qwen Code 1.0 Preview was officially released, unifying the agent capabilities of Qoder and Qwen Code for enhanced code understanding, implementation, debugging, and testing. Alongside this major milestone, the team addressed critical CI stability issues and shipped SDK v0.1.32 bundling CLI v0.27.2, reinforcing the platform's foundation ahead of general availability.

### 2. Releases
**v1.0.0-preview**: The flagship release brings together agent capabilities from Qoder and Qwen Code. Interfaces, configuration options, and behaviors may change during the Preview period. It marks the convergence of two code assistant lineages into a single, unified platform.
**v0.27.2**: Bundled with SDK TypeScript v0.1.32, this release includes Web Shell enhancements for configuring WeChat, QQ, and Email channels with QR login support, alongside various CI and bug fixes.

### 3. Hot Issues (10 Notable)
*   **[#16921](https://github.com/QwenLM/qwen-code/issues/16921)**: *glob can never match a real directory*. The glob tool filters out real directories, returning "No files found" even when directories exist. This fundamentally breaks file-operations workflows and requires a logic change to include directory matches.
*   **[#16925](https://github.com/QwenLM/qwen-code/issues/16925)**: *MCP restart documentation outdated*. Documentation still instructs users to restart Qwen Code after adding an MCP server, though the feature now supports hot-reload without restart. This UX gap could confuse new server configurators.
*   **[#16899](https://github.com/QwenLM/qwen-code/issues/16899)**: *CI prettier gap for test-free PRs*. PRs skipping Prettier allow formatting-only changes to merge, causing main branch to redden post-merge. The community is debating the balance between CI strictness and developer velocity.
*   **[#16918](https://github.com/QwenLM/qwen-code/issues/16918)**: *Pin docs_only lint guard widenings*. Guard widenings added in #16900 remain unpinned, meaning reverting specific conditions leaves all test suites green. This technical debt risks accidental lint bypasses in documentation-only flows.
*   **[#16924](https://github.com/QwenLM/qwen-code/issues/16924)**: *fix(core): let glob match directories*. A complementary fix to #16921, this PR aims to make the glob tool return directories as matches, resolving the "does this exist" probe inconsistency between directories and symlinks.
*   **[#16921](https://github.com/QwenLM/qwen-code/issues/16921)** (Duplicate intent, top priority): Community frustration regarding the glob tool's directory exclusion.
*   **[#16919](https://github.com/QwenLM/qwen-code/issues/16919)**: *test(web-shell): nightly Browser Regression*. The nightly cluster failed 17 of 797 tests across six root causes, primarily related to browser stability. This highlights the fragility of cross-browser automated testing at scale.
*   **[#16670](https://github.com/QwenLM/qwen-code/issues/16670)**: *Main CI failed: Managed Agent gate*. A Java 21 SDK test failure in the ManagedAgent lifecycle gate. While marked provisional, it indicates ongoing stability challenges in the managed runtime Java integration.
*   **[#15574](https://github.com/QwenLM/qwen-code/issues/15574)**: *Main CI failed: Qwen Code CI*. A timing-related CI failure where a past head passed while the report was prepared. The community views this as a flaky CI infrastructure issue needing pipeline synchronization fixes.
*   **[#16925](https://github.com/QwenLM/qwen-code/issues/16925)** (MCP docs): Documentation vs. implementation drift regarding MCP server hot-reload capabilities.

### 4. Key PR Progress (10 Important)
*   **[#16922](https://github.com/QwenLM/qwen-code/pull/16922)**: *refactor(managed-agent): complete broker facade decomposition*. Completes the broker half of the structure review's P1 decomposition, delegating reconciliation, recovery, cancellation, dispatch, and provisioning to internal collaborators for a cleaner architecture.
*   **[#16866](https://github.com/QwenLM/qwen-code/pull/16866)**: *feat(managed-agent): add the Managed Web Terminal*. Adds an interactive web terminal to Managed Agent sessions, relaying browser WebSockets byte-for-byte to the Runtime worker's PTY, closing a significant parity gap for remote development.
*   **[#16926](https://github.com/QwenLM/qwen-code/pull/16926)**: *fix(core): publish file-history backups atomically*. Ports crash-safe backup capture from the v1.0.0-preview branch into main, using per-call unique temporary files with exclusive copies to prevent data loss during crashes.
*   **[#16865](https://github.com/QwenLM/qwen-code/pull/16865)**: *perf(managed-agent): gate the reconcile record read and batch the segment plan*. Optimizes the reconciler to skip whole delivery-record reads for claims whose ledger already lists every segment with a receipt, improving performance in high-throughput scenarios.
*   **[#16847](https://github.com/QwenLM/qwen-code/pull/16847)**: *feat(serve): record the slim listing's states and carry its keys to the watch*. Ensures the PR-state watch has a producer for "keys the slim listing returned," enabling a branch that allows closed pull requests to leave the view rotation.
*   **[#16846](https://github.com/QwenLM/qwen-code/pull/16846)**: *fix(managed-agent): map the resend identity conflict to 409*. Maps deterministic resend identity conflicts to HTTP 409 instead of 500, aligning `segment_id`/`ordinal` descriptions with first-segment semantics for better machine-readable error handling.
*   **[#16880](https://github.com/QwenLM/qwen-code/pull/16880)**: *feat(core): send AgentCore's model rounds through the shared agent loop*. With `experimental.unifiedAgentLoop` enabled, every model round of AgentCore (subagents, background/forked agents, workflow agents) funnels through the shared loop's `runModelRound` on the turn's `LlmChat`.
*   **[#16902](https://github.com/QwenLM/qwen-code/pull/16902)**: *fix(web-shell): raise build heap to 4096MB*. Raises the V8 old-space heap cap for the web-shell production build to 4096MB to fix macOS OOM errors, wrapping the build chain in `cross-env` for persistent configuration.
*   **[#16924](https://github.com/QwenLM/qwen-code/pull/16924)**: *fix(core): let glob match directories*. Implements the fix for #16921, ensuring the glob tool returns real directories as matches, not just files and symlinks.
*   **[#16920](https://github.com/QwenLM/qwen-code/pull/16920)**: *ci: run Prettier on github-ci-only PRs*. Completes the post-merge lint gap fix by making the `github_ci_only` CI profile run Prettier, preventing formatting-only merges from destabilizing the main branch.

### 5. Feature Request Trends
The community is heavily focused on **runtime parity and tooling completeness** for the new Managed Agent architecture. Key directions include:
*   **Filesystem Integration**: PR #16844 and issue #16921 highlight a strong demand for Managed Agents to seamlessly interact with local browser filesystems, bridging the gap between daemon and hosted harness capabilities.
*   **Glob/Tool Reliability**: Issues #16921 and #16924 indicate that the `glob` tool's inability to match real directories is a critical pain point, requiring immediate logic fixes to ensure file-operation reliability.
*   **CI/Lint Stability**: A recurring theme is the tension between CI strictness (Prettier checks) and PR merge velocity, with several issues (#16899, #16918, #16920) focusing on resolving "post-merge lint gaps" where skipped checks in CI cause main branch instability.
*   **Web Shell UX**: Multiple PRs (#16912, #16914, #16919) focus on refining the Web Shell interface—vertical layout, approval flows, and regression stability—suggesting a push to make the CLI-less interface production-ready for daily driver usage.

### 6. Developer Pain Points
*   **Glob Tool Limitations**: The most frequent technical frustration is the `glob` tool filtering out real directories (issues #16921, #16924). Developers report that directory-shaped patterns fail, forcing workarounds or breaking automated file-discovery scripts.
*   **CI "Post-Merge Lint Gap"**: A systemic friction point where PRs that skip Prettier (often documentation or test-free changes) merge successfully but cause the main branch to fail lint checks immediately after. This forces maintainers to either merge "red" or block valid contributions, creating a velocity bottleneck.
*   **Browser Regression Fragility**: The nightly Web Shell browser test cluster (#16919) consistently fails across multiple root causes, indicating that the Chromium/headless testing environment is prone to flakiness, frustrating developers relying on automated feedback loops.
*   **Documentation Drift**: Issue #16925 highlights a common pain point where MCP server configuration docs become outdated the moment a feature is released for hot-reload, leaving users guessing about restart requirements and creating a poor onboarding experience.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

### DeepSeek TUI Community Digest
**Date:** 2026-11-11

---

#### 1. **Today's Highlights**

The Codewhale community has entered the final sprint toward the 0.10.3 release, with 8 new issues and 15 PRs merged or opened in the last 24 hours. A critical bug-fest is underway, led by external contributor luochen211, who closed several high-impact TUI text-rendering bugs (PR #7273, #7290) to fix CJK column alignment and session naming. Simultaneously, the team is hardening the release pipeline with Windows test suite validation (PR #7281) and provider expansion (PR #7285 adding UberLLM). On the feature front, the long-requested Responses API dialect harmonization (PR #7261) finally lands, unifying provider-specific tool handling.

[GitHub Repository](https://github.com/Hmbown/DeepSeek-TUI)

---

#### 2. **Releases**

No new releases were published in the last 24 hours. The community remains focused on stabilizing the release candidate for v0.10.3, tracking 33 open issues and 27 PRs targeting this milestone. The release gate is currently Windows test-suite validation and sandbox/ACP parity.

---

#### 3. **Hot Issues** (Top 10 by impact & comments)

| Issue | Why It Matters | Community Reaction |
| :--- | :--- | :--- |
| **[#7279](https://github.com/codewhale-hq/Codewhale/issues/7279)** 0.10.3: run installed agents (Claude Code, Codex, Kimi and others) as Codewhale sessions over ACP | Defines the core ACP integration for running external agent CLIs as native Codewhale sessions, a major workflow enabler for v0.10.3. | High priority for power users wanting to consolidate multiple agent tools under one UI. |
| **[#7252](https://github.com/codewhale-hq/Codewhale/issues/7252)** Anthropic provider: 400 on tools.N.custom.name after tool_search adds web.run (name contains a dot) | A provider-specific bug causing API 400 errors when using Anthropic with tool_search and web.run, breaking common tool-use workflows. | Reported as blocking; zero thumbs-up but high visibility. |
| **[#7238](https://github.com/codewhale-hq/Codewhale/issues/7238)** Complete native DSH host parity and web plugin UI | Tracks the remaining gaps in native Deep Shell (DSH) host implementation, aiming for parity between desktop and web plugin UIs. | Linked to the broader DSH adoption strategy. |
| **[#7292](https://github.com/codewhale-hq/Codewhale/issues/7292)** 允许 [[custom_models]] 的价格声明人民币币种 | Request to allow CNY (Chinese Yuan) currency designation for custom model cost tracking, currently hardcoded to USD. | Simple i18n fix requested; zero comments but high relevance for CN users. |
| **[#7274](https://github.com/codewhale-hq/Codewhale/issues/7274)** Robustness: panics, a glob hang and wrong text in engine, tools, util and repl | A meta-issue cataloging crashes, hangs, and wrong outputs across core crates; serves as a technical debt sprint backlog. | High technical interest; community awaiting individual PR fixes. |
| **[#7233](https://github.com/codewhale-hq/Codewhale/issues/7233)** Proxy credentials can reach the log file when HTTP(S)_PROXY is malformed | Security concern: malformed proxy env vars leak passwords into logs, a potential data exposure vector. | Security-conscious users tracking this for the 0.10.3 cycle. |
| **[#7282](https://github.com/codewhale-hq/Codewhale/issues/7282)** 0.10.3: terminals and background jobs belong to their conversation | Proposes that terminal sessions and background jobs are scoped to the conversation lifecycle, ending when the conversation closes. | Fundamental UX improvement for session management. |
| **[#7283](https://github.com/codewhale-hq/Codewhale/issues/7283)** 0.10.3: one permission dial (Shift+Tab) with Accept Edits as the default | Introduces a new permission progression dial (Ask → Accept Edits → Plan → Auto-Review → Full Access) starting new installs at "Accept Edits". | Configurability improvement; community debating default risk levels. |
| **[#7142](https://github.com/codewhale-hq/Codewhale/issues/7142)** [CLOSED] tui: live message window can re-root mid-session | A release-blocker bug concerning the live message window re-rooting, previously blocking turns and lifecycle events. | Closed after fix landed; serves as a quality marker for the cycle. |
| **[#7258](https://github.com/codewhale-hq/Codewhale/issues/7258)** fix(tui): recognize an @ mention that follows Chinese or Japanese text | Fixes @-mention parsing for CJK text, ensuring file references work without spaces. | Usability win for East Asian language users. |

---

#### 4. **Key PR Progress** (Top 10 by activity)

| PR | Type | Summary |
| :--- | :--- | :--- |
| **[#7273](https://github.com/codewhale-hq/Codewhale/pull/7273)** Closed | Bug fix | Fixes TUI text padding/truncation by display width, resolving CJK column misalignment and text cutting short of available space. |
| **[#7291](https://github.com/codewhale-hq/Codewhale/pull/7291)** Open | Bug fix | Decodes HTML entities once in web fetch and web.run, preventing double-decoding of escaped entities like `&amp;lt;`. |
| **[#7290](https://github.com/codewhale-hq/Codewhale/pull/7290)** Open | Bug fix | Preserves non-ASCII letters in derived RLM session names (e.g., `docs/报告.txt`), fixing naming collisions. |
| **[#7289](https://github.com/codewhale-hq/Codewhale/pull/7289)** Open | Bug fix | Ensures timeline summaries exactly fit the character limit, preventing over-summarization with trailing `...`. |
| **[#7288](https://github.com/codewhale-hq/Codewhale/pull/7288)** Open | Bug fix | Honors `env -S` shebangs when resolving plugin interpreters, fixing scripts with complex env flags. |
| **[#7287](https://github.com/codewhale-hq/Codewhale/pull/7287)** Open | Bug fix | Reads every hunk line in patch parsing instead of stopping at twice header counts, fixing missed diff body lines. |
| **[#7286](https://github.com/codewhale-hq/Codewhale/pull/7286)** Closed | Chore | Refreshes the Models.dev offline seed, publishing new vendor models to the public /models page. |
| **[#7277](https://github.com/codewhale-hq/Codewhale/pull/7277)** Closed | Enhancement | Adds `POST /v1/threads/{id}/commands/builtin` to run read-only builtins (e.g., `/system`, `/tokens`, `/cost`) via the Runtime API. |
| **[#7275](https://github.com/codewhale-hq/Codewhale/pull/7275)** Closed | Bug fix | Rejects negative retry delays at config load instead of panicking on retry, hardening config validation. |
| **[#7261](https://github.com/codewhale-hq/Codewhale/pull/7261)** Closed | Enhancement | Drives Responses behavior from a dialect profile, unifying provider-specific tool handling (DeepSeek, Codex, etc.) behind a conformance harness. |

---

#### 5. **Feature Request Trends**

The issue stream reveals a clear migration toward **ACP (Agent Client Protocol) integration** and **provider-agnostic tooling**.

*   **Agent Interop:** Issues #7279 and #7238 highlight the community's drive to run installed agents (Claude Code, Codex, Kimi) as native Codewhale sessions over ACP, moving beyond simple CLI bridging.
*   **Responses API Harmonization:** PR #7261 and Issue #5093 reflect the move to extract the Responses dialect policy behind a language-neutral conformance harness, reducing provider-specific branching in the TUI.
*   **Currency Localization:** Issue #7292 is a targeted i18n request for CNY pricing on custom models, indicating a need for broader cost-currency configurability.
*   **TUI Text Rendering:** A suite of PRs (#7273, #7290, #7289) confirms that CJK display-width correctness is a blocking quality gate for the 0.10.3 release.
*   **Permission & Sandbox Controls:** Issue #4955 (zero-sandbox mode) and the new permission dial (#7283) show ongoing tension between developer convenience and sandbox safety, with users pushing for more granular control.

---

#### 6. **Developer Pain Points**

*   **CJK Text & Display Alignment:** A recurring theme across multiple issues and PRs. TUI surfaces measuring text in bytes/characters instead of display columns causes CJK text to drift, truncate prematurely, and misalign. This is now a primary quality focus for the release.
*   **Provider-Specific Branching:** The TUI currently branches on provider type (DeepSeek, Codex, etc.) for Responses API behavior (Issue #5093). The community is actively working to move this behind a conformance harness so new providers require minimal code changes.
*   **Sandbox & Permission Friction:** The kernel-level Seatbelt sandbox (Issue #4955) continues to break basic shell commands on macOS, driving demand for a `--no-sandbox` or "full access" bypass mode for local development workflows.
*   **Proxy & Credential Leakage:** Issue #7233 exposes a security risk where malformed proxy environment variables leak credentials into log files, a headache for users in restricted network environments.
*   **Agent Session Lifecycle:** The proposal in #7282 to bind terminal sessions and background jobs to the conversation lifecycle represents a shift in how the tool manages "stateful" vs "stateless" operations, aiming to prevent orphaned jobs.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*