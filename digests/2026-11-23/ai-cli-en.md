# AI CLI Tools Community Digest 2026-11-23

> Generated: 2026-11-23 07:09 UTC | Tools covered: 10

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

**Cross-Tool Analysis: AI Developer Tools Community Digest (2026-11-23)**

### 1. Ecosystem Overview
The AI CLI tools ecosystem is currently in a phase of active maturation and stabilization. Following recent major releases, communities across all major tools are prioritizing the remediation of critical bugs, session stability, and infrastructure reliability over new feature deployment. A common thread across the landscape is the tension between powerful automation capabilities and the need for robust sandboxing, token management, and cross-platform compatibility. While the market is fragmented—spanning established players like OpenAI and Anthropic to open-source challengers like Qwen and DeepSeek—the shared pain points suggest a collective move toward production-grade stability.

### 2. Activity Comparison

| Tool | Issues (New/Updated) | PRs (Merged/Open) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 Hot Issues | 1 Key PR | No new releases |
| **OpenAI Codex** | 10 Hot Issues | 10 Key PRs | No new releases (26.111x series) |
| **Gemini CLI** | 10 Hot Issues | 10 Key PRs | 1 Nightly Release (v0.71.0) |
| **GitHub Copilot CLI** | 10 Hot Issues | 10 Key PRs | 1 Release (v1.0.115-7) |
| **Kimi Code CLI** | 0 Activity | 0 Activity | N/A |
| **OpenCode** | 10 Hot Issues | 10 Key PRs | No new releases |
| **Pi (pi-mono)** | 10 Hot Issues | 10 Key PRs | No new releases |
| **Qwen Code** | 5 Hot Issues | 20 Key PRs | 1 Release (v0.28.4) |
| **DeepSeek-TUI** | 10 Hot Issues | 10 Key PRs | 1 Release (v0.10.3) |
| **Grok Build** | 0 Activity | 0 Activity | N/A |

### 3. Shared Feature Directions

*   **Session & Trust Management:** A dominant theme across nearly all tools (Claude Code, OpenAI Codex, Gemini CLI, OpenCode). Communities are actively fixing "folder trust" prompts that persist after disconnections, managing session resumption, and preventing unauthorized agent actions. (Tools: Claude Code, Codex, Gemini CLI, OpenCode)
*   **Cross-Platform & Localization Stability:** Significant effort is directed at fixing OS-specific bugs. Windows users face TLS handshake instabilities and PowerShell variable bugs; macOS/Linux users deal with GPU spikes, Wayland lag, and encoding losses (LC_CTYPE=C). (Tools: Claude Code, Codex, Gemini CLI, Copilot CLI, Qwen Code, DeepSeek-TUI)
*   **Tool & Context Efficiency:** There is a strong focus on reducing context window bloat. This includes AST-aware tooling (Gemini CLI), tool capping/truncation (Qwen Code, Pi), and improving tool discovery and scopes to prevent 400 errors from too many enabled tools. (Tools: Gemini CLI, Qwen Code, Pi)
*   **Developer Ergonomics & Documentation:** Several tools report broken self-service capabilities. The `fetch_documentation` or `/model` command failures (Copilot CLI, OpenCode) and the need for better token usage transparency (OpenCode, Qwen Code) are recurrent requests. (Tools: Copilot CLI, OpenCode, Qwen Code)

### 4. Differentiation Analysis

*   **Feature Focus:**
    *   **Safety & Destructive Operations:** Claude Code and OpenCode report the most acute safety bugs (destructive `Remove-Item`, unauthorized registry key deletion), reflecting a focus on high-stakes code modification.
    *   **Agent Orchestration:** Qwen Code and DeepSeek-TUI are heavily investing in "Action Parking" and sub-agent management, catering to complex, long-running workflows.
    *   **Mobile & Cloud Sessions:** GitHub Copilot CLI and Pi prioritize cloud sandbox persistence and mobile session stability, targeting users working across devices.
*   **Target Users:**
    *   **Anthropic/Claude Code:** Appears to target power users and enterprises needing deep integration, given the volume of Windows/PowerShell specific bugs and plugin hooks.
    *   **OpenAI/Codex:** Focused on the broad developer base, with a high volume of UI/UX bugs (Send button, TUI flickering) indicating rapid feature shipping.
    *   **Open Source (Qwen, DeepSeek, Pi):** Leaning into customization, extensibility, and self-hosting capabilities, with a strong emphasis on TUI polish and adapter integrations.
*   **Technical Approach:**
    *   **Stability via Iteration:** OpenAI Codex and Anthropic Claude Code show a pattern of fixing "day-of-release" bugs and infrastructure kinks.
    *   **Feature Parity & Polish:** Open-source tools like Qwen Code and DeepSeek-TUI are aggressively closing feature gaps and improving TUI responsiveness to compete with commercial offerings.

### 5. Community Momentum & Maturity

*   **Most Active:** **Qwen Code** and **DeepSeek-TUI** show the highest PR velocity today (20 and 10 PRs respectively), indicating a highly active development cycle focused on rapid iteration and bug fixing.
*   **Rapidly Iterating:** **Gemini CLI** and **GitHub Copilot CLI** are balancing new nightly releases (Gemini) or critical bugfix releases (Copilol) with active PR streams, showing healthy update cycles.
*   **Maturing/Stabilizing:** **OpenAI Codex** and **Anthropic Claude Code** have large, established issue trackers (100+ comments on some issues), suggesting they are managing mature, complex codebases where stability is the primary challenge.
*   **Quiet/Niche:** **Kimi Code CLI** and **Grok Build** show no activity in the last 24 hours, suggesting they may be in a dormant phase or have different release cadences.

### 6. Trend Signals

*   **The "Safety Tax":** The sheer volume of bugs related to destructive file operations and sandbox escapes (#111755 in Claude Code, #65685 in OpenCode) signals that the industry is prioritizing "safe AI" infrastructure. Developers are demanding guardrails before feature expansion.
*   **Session Economics:** Issues regarding token exhaustion (#65730 in OpenCode), quota depletion (#41220 in Codex), and API key logging (#18165 in Pi) reveal that cost management and credential hygiene are becoming first-class concerns in CLI tooling.
*   **Cross-Platform as a Differentiator:** As AI moves from lab environments to local developer machines, OS-specific stability (Windows PowerShell, macOS Wayland, Linux TUI) is the primary friction point. Tools that solve these cross-platform gaps will likely see higher adoption among diverse developer teams.
*   **Transparency Demand:** There is a clear user demand for better visibility: per-model costs, session usage tracking, and clear error classification (RateLimit vs. UnknownProvider). This trend suggests a move toward "FinOps" for AI development tools.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

## 1. Top Skills Ranking

Based on open PR activity (50 total, top 20 shown), the most-discussed Skills demonstrate community focus on tooling stability and new domain expansion:

| # | PR | Author | Created | Status | Comments | 👍 | Skill Focus |
|---|----|--------|---------|--------|----------|----|-------------|
| 1 | **#1742** | Kuldeeep18 | 2026-09-08 | OPEN | undefined | 0 | MCP Builder: Support `mcp>=2` streamable_http_client import and custom headers |
| 2 | **#1298** | MartinCajiao | 2026-06-10 | OPEN | undefined | 0 | Skill Creator: Isolate trigger evals, handle Windows failures and runtime errors |
| 3 | **#1245** | mrdesouzaphd-cmyk | 2026-06-02 | OPEN | undefined | 0 | Notion-spec-to-implementation & quantitative-resume-auditor skills |
| 4 | **#1980** | Pcmhacker-piro | 2026-10-06 | OPEN | undefined | 0 | Webapp-testing: avoid shell=True in with_server.py (security fix) |
| 5 | **#1792** | TINGyu123644 | 2026-09-19 | OPEN | undefined | 0 | Docx: Report LibreOffice timeout as error and verify output |
| 6 | **#1771** | ProofCore-Protocol | 2026-09-15 | OPEN | undefined | 0 | Proofcore-contract-auditor: Smart contract notarization on TON Blockchain |
| 7 | **#525** | kitao | 2026-03-05 | OPEN | undefined | 0 | Pyxel skill for retro game development |
| 8 | **#1734** | rohitjain25 | 2026-09-06 | OPEN | undefined | 0 | Detect orphaned docx comments |

**Highlights:**
- **#1742** addresses a breaking change in the MCP (Model Context Protocol) v2 API, specifically the rename from `streamablehttp_client` to `streamable_http_client` and the shift to `create_mcp_http_client` for custom headers. Critical for skills integrating with modern MCP servers.
- **#1298** tackles a fundamental reliability issue: trigger evaluation false positives/negatives due to subprocess competition, Windows pipe `select()` failures, and runtime errors breaking the trigger mechanism. High impact on skill reliability.
- **#1980** is a security hardening fix, replacing `subprocess.Popen(..., shell=True)` with a safer pattern to prevent command injection (CWE-78) in webapp testing workflows.

## 2. Community Demand Trends

From the 13 active Issues, the most-anticipated Skill directions emerge:

- **Workflow Automation & Integration:** Issue #492 (Security: trust boundary abuse) and #228 (org-wide skill sharing) indicate strong demand for secure, shareable workflow primitives. The community is building skills that must integrate safely into organizational contexts.
- **Code Quality & Analysis:** #1771 (Proofcore-contract-auditor) and the broader trend of specialized auditing skills (Solidity, Rust) show appetite for automated code review and security scanning capabilities.
- **Document & Content Transformation:** #1245 (Notion-spec-to-implementation), #514 (document-typography), and #1734 (orphaned docx comments) reveal focus on turning AI-generated drafts into polished, structured artifacts.
- **Testing & Reliability:** #1298 (trigger eval isolation) and #1980 (shell=True avoidance) underscore the community's emphasis on making skills robust, debuggable, and secure enough for production use.

## 3. High-Potential Pending Skills

Active-comment PRs not yet merged (all currently OPEN, no merge activity visible in timeline):

- **#1742** (MCP Builder) – Fixes API compatibility for mcp>=2.0.0; likely to land soon given its technical nature and single author.
- **#1298** (Skill Creator trigger evals) – Critical infrastructure fix; high community impact if resolved.
- **#1980** (Webapp testing shell=True) – Security-critical change; low friction to merge.
- **#1792** (Docx LibreOffice timeout) – User-experience improvement for document workflows.
- **#1771** (Proofcore-contract-auditor) – Niche but complete skill addition; author-driven merge likely.

## 4. Skills Ecosystem Insight

The community's most concentrated demand at the Skills level is **robust, secure workflow automation** – specifically, the ability to build and share reliable agent skills that integrate with modern tooling (MCP, webapps, document pipelines) without introducing security vulnerabilities or breaking changes.

**GitHub Repository:** [anthropics/skills](https://github.com/anthropics/skills)

---

Here is the Claude Code community digest for 2026-11-23.

### **Today's Highlights**
The Claude Code ecosystem is currently grappling with a surge of "day-of-release" bugs. The most critical issue is **#111755**, a destructive file deletion bug on Windows where an unvalidated `$HOME` PowerShell variable triggered `Remove-Item -Recurse -Force`, potentially wiping user profiles. Additionally, the community is actively tracking severe networking instability (**#94225**) involving TLS 1.3 handshakes and X25519MLKEM768 key exchanges, and a persistent sandbox escape risk on Linux (**#105194**). Despite these growing pains, the engineering team shipped a crucial plugin hook fix (**#95698**), signaling continued active development.

### **Releases**
*No new releases were published in the last 24 hours.*

### **Hot Issues (Top 10)**

1.  **[#111755] Destructive Remove-Item on Windows** (1 comment)
    *   **Why it matters:** A critical safety bug where Claude Code executed `Remove-Item -Recurse -Force` against the `$HOME` directory via an unvalidated PowerShell variable, risking total user profile deletion. This is the most urgent stability issue currently reported.
    *   **Link:** [anthropics/claude-code Issue #111755](https://github.com/anthropics/claude-code/issues/111755)

2.  **[#94225] ECONNRESET on TLS 1.3 Handshakes** (10 comments)
    *   **Why it matters:** Intermittent connection drops on home/office ISP paths, specifically breaking TLS 1.3 handshakes carrying X25519MLKEM768. A VPN is the only known workaround, indicating a potential infrastructure or protocol-level incompatibility.
    *   **Link:** [anthropics/claude-code Issue #94225](https://github.com/anthropics/claude-code/issues/94225)

3.  **[#111778] Generated UIs repeating facts** (0 comments)
    *   **Why it matters:** A model quality regression where the AI repeats the same information across multiple UI elements (breadcrumbs, titles, stats cards), degrading the user experience and output quality.
    *   **Link:** [anthropics/claude-code Issue #111778](https://github.com/anthropics/claude-code/issues/111778)

4.  **[#111779] AskUserQuestion loss on Bedrock** (0 comments)
    *   **Why it matters:** On AWS Bedrock, the `AskUserQuestion` tool fails to retain the "same-turn explanation" in both the UI and the transcript, forcing users to repeat their requests up to four times.
    *   **Link:** [anthropics/claude-code Issue #111779](https://github.com/anthropics/claude-code/issues/111779)

5.  **[#111777] GitHub Integration report** (0 comments)
    *   **Why it matters:** A user reports being unable to connect GitHub integration via the web settings page, returning a generic "Filed from: GitHub settings" error.
    *   **Link:** [anthropics/claude-code Issue #111777](https://github.com/anthropics/claude-code/issues/111777)

6.  **[#111743] Max plan limit reset** (1 comment)
    *   **Why it matters:** Users report that their unexpired plan limits—covering Claude Code usage—have been removed without redemption, affecting three or more accounts with no clear support path.
    *   **Link:** [anthropics/claude-code Issue #111743](https://github.com/anthropics/claude-code/issues/111743)

7.  **[#110676] Cowork file upload failure (Windows)** (14 comments)
    *   **Why it matters:** Remote sessions on Windows fail to upload files ≥4 MB, showing "upload failed" then "HTTP 503" even for small 47 KB files, severely hindering the Cowork feature.
    *   **Link:** [anthropics/claude-code Issue #110676](https://github.com/anthropics/claude-code/issues/110676)

8.  **[#111275] Microsoft 365 Office add-in vanishes (macOS)** (14 comments)
    *   **Why it matters:** The Claude for Microsoft 365 Office add-in vanishes seconds after installation on macOS, potentially removed after Claude desktop/Cowork sessions.
    *   **Link:** [anthropics/claude-code Issue #111275](https://github.com/anthropics/claude-code/issues/111275)

9.  **[#94393] Monitor tool timeout bug (Linux)** (14 comments)
    *   **Why it matters:** The Monitor tool ignores the `persistent` flag and `timeout_ms` schema, capping actual lifetime at ~30 minutes regardless of settings, even during active sessions.
    *   **Link:** [anthropics/claude-code Issue #94393](https://github.com/anthropics/claude-code/issues/94393)

10. **[#110905] Free nesting of sessions (Windows)** (1 comment)
    *   **Why it matters:** A feature request to allow free nesting of sessions in the Code tab sidebar, similar to "Projects" in the standard Claude chat, to improve workflow organization for power users.
    *   **Link:** [anthropics/claude-code Issue #110905](https://github.com/anthropics/claude-code/issues/110905)

### **Key PR Progress (Top 10)**

*   **[#95698]** **fix(plugins): run ralph-wiggum and output-style .sh hooks through bash with a quoted path**
    *   **Summary:** Fixes a bug where bundled plugins registered their hook as a bare, unquoted script path. The PR ensures hooks are run through bash with properly quoted paths, preventing execution failures.
    *   **Link:** [anthropics/claude-code PR #95698](https://github.com/anthropics/claude-code/pull/95698)

### **Feature Request Trends**
The issue stream reveals a strong demand for **visibility and control** over the agent workflow. Top requested directions include:
*   **Session Management:** Free nesting of sessions in the Code tab sidebar (**#110905**) and the return of per-agent model/token counts in the Desktop workflow panel (**#105831**).
*   **Tool Utility:** A "shell escape" feature that runs commands without flooding the LLM context (**#97253**).
*   **Model Discovery:** Inclusion of composite models like "Opus Plan" in the `/model` command picker (**#26556**).

### **Developer Pain Points**
Recurring frustrations center on **sandbox stability and file safety**:
*   **Sandbox Breakage:** Linux users on Ubuntu 26.04 are experiencing AppArmor denials for `CAP_SYS_ADMIN` within the `bwrap-userns-restrict` profile (**#105194**), rendering the sandbox non-functional after OS upgrades.
*   **PowerShell Safety:** The destructive `Remove-Item -Recurse -Force` bug (**#111755**) highlights a broader concern regarding the validation of automatic variables like `$HOME` before file operations.
*   **Network Reliability:** Intermittent `ECONNRESET` errors on specific ISP paths (**#94225**) and Windows Cowork upload failures (**#110676**) indicate ongoing infrastructure stability challenges that disrupt long-running agent sessions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for 2026-11-23.

### **Today's Highlights**
The Codex ecosystem shows signs of maturation and stabilization following recent releases. A notable surge in bugs related to session management, workspace trust, and rate-limiting consistency dominates the issue tracker, while the Pull Request activity focuses heavily on TUI polish and infrastructure robustness ahead of the holiday season.

### **Releases**
No new official Codex App or CLI releases were published in the last 24 hours. The latest builds remain on the 26.111x series for the desktop app.

### **Hot Issues**
*   **[#41220](https://github.com/openai/codex/issues/41220)** (100 comments): A cross-report tracker for abnormal quota depletion and usage-accounting inconsistencies. This is the most discussed issue currently, highlighting significant user concern over unexpected credit consumption.
*   **[#63186](https://github.com/openai/codex/issues/63186)** (4 comments): Codex freezes after an approval prompt and continues consuming usage while unresponsive. Reported on 2026-11-22, this indicates a critical session-freeze bug.
*   **[#62918](https://github.com/openai/codex/issues/62918)** (13 comments): "Send is disabled in new Work chats" and "Connection for host ID local not found" errors on Windows. A connectivity regression affecting new chat initiation.
*   **[#63078](https://github.com/openai/codex/issues/63078)** (4 comments): macOS fresh local "Full Access" sessions failing to propagate tool execution permissions, falling back to restricted `workspace-write` profiles.
*   **[#61162](https://github.com/openai/codex/issues/61162)** (4 comments): Windows Sites publication blocked by Git DNS failures (`git.chatgpt-team.site`), preventing even minimal private site creation.
*   **[#62700](https://github.com/openai/codex/issues/62700)** (7 comments): macOS regression where enabled local skills disappear from the slash menu in version 26.1117.31558.
*   **[#63042](https://github.com/openai/codex/issues/63042)** (10 comments): The "Local/Cloud environment selector" disappearing when online on Windows v26.1117.41037.
*   **[#62393](https://github.com/openai/codex/issues/62393)** (19 comments): Windows "Send button intermittently disabled despite non-empty input" in new Work threads.
*   **[#54564](https://github.com/openai/codex/issues/54564)** (29 comments): [Windows] Cannot send messages in new Work threads; Send button remains disabled. A persistent UI bug across builds.
*   **[#63083](https://github.com/openai/codex/issues/63083)** (2 comments): Linux reports of the model repeatedly making the same mistakes and breaking already-fixed code.

### **Key PR Progress**
*   **[#63266](https://github.com/openai/codex/pull/63266)**: Batch filesystem metadata checks for instruction and skill discovery. Reduces remote executor round trips and sandbox helper launches.
*   **[#63262](https://github.com/openai/codex/pull/63262)**: Cancel folder trust prompts when the app server disconnects. Prevents queued confirmations from being handled against closed connections.
*   **[#63258](https://github.com/openai/codex/pull/63258)**: Show available slash commands in the disconnected TUI. Ensures users can discover local commands even when the app server connection is lost.
*   **[#63219](https://github.com/openai/codex/pull/63219)**: Exclude per-item usage attribution by default via the `x-codex-exclude` header. Aims to reduce noise in usage tracking for sub-agents.
*   **[#63211](https://github.com/openai/codex/pull/63211)**: Automatically resume disconnected cloud conversations in the TUI. Reattaches the displayed conversation in the background when the stream is restored.
*   **[#63208](https://github.com/openai/codex/pull/63208)**: Add creation-time sorting to Command Center search. Allows users to toggle between "Updated" and "Created" sorting to find newer tasks.
*   **[#63196](https://github.com/openai/codex/pull/63196)**: Keep streamed output visible until inline history is repainted. Fixes flickering/vanishing Markdown tables during terminal resizes.
*   **[#63195](https://github.com/openai/codex/pull/63195)**: Honor tmux mouse changes while the TUI is in alternate screen. Fixes mouse capture desync when toggling tmux options.
*   **[#63194](https://github.com/openai/codex/pull/63194)**: Keep streamed TUI answers intact when notices interrupt them. Prevents breaking the trailing run of streamed answer fragments.
*   **[#63193](https://github.com/openai/codex/pull/63193)**: Discard TUI typeahead after prompt rewind and fork. Prevents buffered Enter keys from submitting restored prompts unintentionally.

### **Feature Request Trends**
The issue data indicates a strong focus on **session stability and trust management**. Users are heavily requesting fixes for "folder trust" prompts that persist after disconnections and environment selectors that vanish. There is also significant demand for **cross-platform parity**, specifically regarding Windows Send-button reliability and macOS skill/IME functionality. Additionally, **usage transparency** is a recurring theme, with Issue #41220 serving as the central tracker for quota depletion complaints.

### **Developer Pain Points**
*   **Session & Trust State**: Frequent reports of lost thread messaging, disabled send buttons in new Work chats, and folder trust prompts that don't cancel on disconnect (#62918, #63262, #54564).
*   **Cross-Platform Bugs**: Windows-specific UI freezes, macOS ScreenCaptureKit GPU spikes, and Linux environment creation failures after repo transfers.
*   **Rate-Limit Transparency**: Users reporting credit depletion faster than predicted, with no clear accounting (#41220).
*   **TUI Responsiveness**: Streamed output vanishing, typeahead not discarding on prompt rewinds, and mouse capture desync in tmux alternate screens.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Gemini CLI Community Digest
**Date:** 2026-11-23

---

### 1. Today's Highlights
The Gemini CLI ecosystem remains active with a focus on agent reliability and developer ergonomics. The most significant update is the **v0.71.0-nightly.20261123.geecccfcd5** release, which lands amidst a flurry of PRs addressing tool output management and sandbox permissions. Community attention is heavily skewed toward debugging agent hangs and improving sub-agent awareness, reflecting a maturing platform moving toward production-grade stability.

### 2. Releases
*   **v0.71.0-nightly.20261123.geecccfcd5:** This nightly build includes standard dependency updates and internal housekeeping. Notably, PR #30411 automates the version bump for this release.

### 3. Hot Issues (Top 10)
These issues represent the community's current pain points and active development areas:

1.  **#21409: Generalist agent hangs** (8 👍)
    *   **Why it matters:** Users report the agent hangs indefinitely on simple tasks like folder creation, forcing manual cancellation. This is a critical usability bug blocking everyday workflows.
    *   **Link:** [Issue #21409](https://github.com/google-gemini/gemini-cli/issues/21409)

2.  **#22323: Subagent recovery after MAX_TURNS** (14 👍)
    *   **Why it matters:** The `codebase_investigator` incorrectly reports "GOAL" success even when hitting the `MAX_TURNS` limit. This masks real failures and misleads users about task completion.
    *   **Link:** [Issue #22323](https://github.com/google-gemini/gemini-cli/issues/22323)

3.  **#22672: Agent should stop/discourage destructive behavior** (3 👍)
    *   **Why it matters:** Models occasionally use risky commands like `git reset --force`. The community is discussing ways to instill safer defaults for git and database operations.
    *   **Link:** [Issue #22672](https://github.com/google-gemini/gemini-cli/issues/22672)

4.  **#21968: Gemini does not use skills and sub-agents enough** (7 👍)
    *   **Why it matters:** Users anecdotaly report the model ignores custom skills/sub-agents unless explicitly prompted, limiting the tool's orchestration capabilities.
    *   **Link:** [Issue #21968](https://github.com/google-gemini/gemini-cli/issues/21968)

5.  **#22267: Browser Agent ignores settings.json overrides** (5 👍)
    *   **Why it matters:** Configuration overrides (like `maxTurns`) are ignored by the Browser Agent, breaking user expectations for session control and safety limits.
    *   **Link:** [Issue #22267](https://github.com/google-gemini/gemini-cli/issues/22267)

6.  **#22745/22746: AST-aware file reads and mapping** (7 👍 total)
    *   **Why it matters:** An EPIC tracking the adoption of AST-aware tools (like tilth/glyph) to enable more precise code searches and reduce context window bloat from raw file reads.
    *   **Link:** [Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745) | [Issue #22746](https://github.com/google-gemini/gemini-cli/issues/22746)

7.  **#24246: 400 error with > 128 tools** (3 👍)
    *   **Why it matters:** The CLI crashes with a 400 error when too many tools are enabled, indicating a need for better tool-scoping and trimming logic.
    *   **Link:** [Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246)

8.  **#21763: Bugreport doesn't provide subagent context** (2 👍)
    *   **Why it matters:** When filing bugs via `/bug`, subagent internal state is lost, making debugging reported issues incredibly difficult for maintainers.
    *   **Link:** [Issue #21763](https://github.com/google-gemini/gemini-cli/issues/21763)

9.  **#22598: Subagent trajectory visibility via /chat share** (2 👍)
    *   **Why it matters:** Subagent behavior is currently siloed; the community wants easier access to trajectory data for review and evaluation.
    *   **Link:** [Issue #22598](https://github.com/google-gemini/gemini-cli/issues/22598)

10. **#20079: Symlink agent recognition** (4 👍)
    *   **Why it matters:** Agents defined as symlinks in `~/.gemini/agents/` are not recognized, forcing users to duplicate files instead of using symlinks for version control.
    *   **Link:** [Issue #20079](https://github.com/google-gemini/gemini-cli/issues/20079)

### 4. Key PR Progress (Top 10)
These PRs are actively shaping the CLI's core functionality:

1.  **#30409: Allow agents to invoke other agents** (Closed)
    *   **Summary:** A much-requested feature allowing subagents to call other agents, with a depth limit on nesting, resolving the "Invalid tool name" validation error.
2.  **#30360: Bump npm-dependencies (67 updates)**
    *   **Summary:** Standard dependency refresh to keep the core running on current library versions.
3.  **#30353: Standardize token usage tracking in ACP mode**
    *   **Summary:** Fixes a discrepancy where token usage metadata was lost on cancelled turns, improving telemetry accuracy for programmatic users.
4.  **#30339: Surface BeforeAgent hook denial and stop reasons**
    *   **Summary:** Ensures that when `BeforeAgent` hooks block execution, the ACP consumer correctly surfaces the stop reason rather than dropping it.
5.  **#30316: Preserve custom model alias generation settings**
    *   **Summary:** Fixes a bug where custom model aliases extending tiers (e.g., `flash-lite`) were incorrectly compared against resolved model names, breaking alias configs.
6.  **#30298: Execute independent tool calls in parallel in ACP mode**
    *   **Summary:** A performance improvement batching contiguous, parallelizable tool calls instead of running them sequentially, speeding up read-only operations.
7.  **#30297: Truncate large shell and MCP tool outputs in ACP mode**
    *   **Summary:** Fixes issue #30233 by implementing output truncation for shell and MCP tools in ACP mode to prevent context window overflow.
8.  **#30277: Improve permission denial detection and unsupported environment handling**
    *   **Summary:** Addresses sandbox compatibility issues where POSIX denial errors were previously missed, crucial for containerized workflows.
9.  **#30273: Unify exit codes mapping and fatal error hierarchy**
    *   **Summary:** Centralizes exit codes, removing hardcoded numerics and creating a consistent error hierarchy across the core library.
10. **#30281: Honor configured fetch timeouts on Node 26**
    *   **Summary:** Upgrades Undici to v7.30.2 to ensure global dispatchers are correctly published under the Node 26 fetch symbol.

### 5. Feature Request Trends
Analysis of the issue queue reveals three dominant feature directions:
*   **Agent Orchestration & Autonomy:** There is significant demand for better sub-agent discovery (Issue #18285), trajectory sharing (Issue #22598), and the ability for agents to call other agents (PR #30409). Users want the CLI to manage complex workflows with minimal manual prompting.
*   **Context & Tool Efficiency:** A recurring theme is reducing token waste. This includes AST-aware tooling (Issues #22745/22746), better tool capping (PR #29822), and "Tactful Extraction" logic (Issue #19561) to avoid "firehosing" the context window.
*   **Safety & Reliability:** A strong focus on preventing destructive operations (Issue #22672), improving sandbox permission handling (PR #30277), and ensuring configuration overrides are respected (Issue #22267) indicates the community is prioritizing stable, safe deployments.

### 6. Developer Pain Points
*   **Agent "Blindness":** Developers feel the model is "blind" to its own toolset. It frequently ignores custom skills (Issue #21968) and fails to respect `settings.json` overrides for `maxTurns` in the Browser Agent (Issue #22267), leading to runaway processes.
*   **Context Bloat & Tool Limits:** The sheer volume of tools and file reads often exceeds context windows, resulting in 400 errors (Issue #24246) or the model generating redundant scripts in random directories (Issue #23571).
*   **Debuggability:** When things go wrong, the system is opaque. Bug reports (Issue #21763) lack subagent context, and hangs (Issue #21409) require manual cancellation, making it difficult to diagnose failures in automated pipelines.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest**
**Date:** 2026-11-23

### 1. Today's Highlights
The community focused on stability and session management today. A critical bug fix in v1.0.115-7 ensures that Copilot CLI sessions resumed via `--ui-server` are immediately attachable, preventing stale connections. Concurrently, two active Android sandbox bugs were flagged, highlighting ongoing challenges with cloud session persistence on mobile platforms. [#5552](https://github.com/github/copilot-cli/issues/5552) and [#5553](https://github.com/github/copilot-cli/issues/5553).

### 2. Releases
*   **v1.0.115-7** (Released ~24h ago)
    *   **Fixed:** Clients using `--ui-server` can now attach to resumed CLI sessions as soon as the server starts listening.
    *   **Fixed:** Ensured that stopping an npm-installed Copilot CLI during startup does not leave it running in the background.

### 3. Hot Issues (Top 10)
1.  **[#5555](https://github.com/github/copilot-cli/issues/5555)** (Open): *MCP client declares Tasks extension but rejects CreateTaskResult.* The MCP client inconsistently declares the Tasks extension capability while failing to handle `CreateTaskResult`, breaking task persistence flows.
2.  **[#5553](https://github.com/github/copilot-cli/issues/5553)** (Open): *GitHub Mobile (Android) cloud session drops when app is backgrounded.* A critical mobile usability issue where sessions disconnect after 2-3 minutes in the background and often fail to restore without an app restart.
3.  **[#5552](https://github.com/github/copilot-cli/issues/5552)** (Open): *Cloud sandbox session never reconnects after a tool call.* Sessions become read-only after a tool call executes, with "Live connection unavailable" errors preventing further interaction.
4.  **[#5551](https://github.com/github/copilot-cli/issues/5551)** (Closed): *Image generation is never available in `copilot --acp` sessions.* A feature gap where GPT Image 2.5 Flare works in interactive CLI and VS Code but is missing from Anonymous Copilot Sessions (ACP).
5.  **[#5043](https://github.com/github/copilot-cli/issues/5043)** (Closed): *Ask user attestation cancels when Ctrl+Shift+C to copy in Herdr.* A workflow interruption where the copy shortcut conflicts with user attestation prompts.
6.  **[#3601](https://github.com/github/copilot-cli/issues/3601)** (Closed): *Bash tool drops non-ASCII characters due to LC_CTYPE=C.* A long-standing localization bug where Chinese, Japanese, Korean, and emoji characters are silently stripped from commands and file paths.
7.  **[#4595](https://github.com/github/copilot-cli/issues/4595)** (Closed): *fetch_copilot_cli_documentation fails with ENOENT.* Documentation tooling fails because the README is absent from released platform tarballs, breaking the CLI's ability to self-answer capability questions.
8.  **[#4581](https://github.com/github/copilot-cli/issues/4581)** (Closed): *Support image generation for developer assets.* A feature request to enable the CLI to generate non-code visual assets like icons, favicons, and OG images.
9.  **[#1851](https://github.com/github/copilot-cli/issues/1851)** (Closed): *Show context window size (tokens) in /model command.* A feature request to display token limits alongside premium multipliers to help users understand model constraints.
10. **[#1963](https://github.com/github/copilot-cli/issues/1963)** (Closed): *Choosing "Accept plan and build on default permissions" does not start agent.* A reliability bug where agents fail to implement plans after permission acceptance, requiring manual re-invocation.

### 4. Key PR Progress (Top 10)
1.  **[#5554](https://github.com/github/copilot-cli/pull/5554)** (Open): *Add opt-in connection token generation to the CLI container.* A developer experience improvement allowing local SDK clients to connect to the headless CLI without pre-creating a secret by setting `COPILOT_CONNECTION_TOKEN_GENERATE=true`.
2.  **[#4637](https://github.com/github/copilot-cli/pull/4637)** (Closed): *Avoid duplicate skill lookup for slash-invoked skills.* Fixes a race condition where slash-invoked skills could execute and inject context while another path reported "Skill not found."
3.  **[#4035](https://github.com/github/copilot-cli/pull/4035)** (Closed): *Voice installer fails: tries private Azure Artifacts feed.* Fixes the 401 error when the voice installer attempts to download dependencies from a private feed instead of public nuget.org.
4.  **[#5309](https://github.com/github/copilot-cli/pull/5309)** (Closed): *Misleading model_not_supported error after content-filter response.* Improves error reporting to accurately distinguish between unsupported models and content filter rejections.
5.  **[#2622](https://github.com/github/copilot-cli/pull/2622)** (Open - Needs Reproduction): *Manual `/rename` is overwritten by later auto-generated session name.* A persistent UX bug where user-defined session names are overwritten by auto-rename logic.
6.  **[#5043](https://github.com/github/copilot-cli/pull/5043)** (Closed): *Ask user attestation is cancel unwillingly when Ctrl+Shift+C to copy in Herdr.* Fixes the copy shortcut conflict within the Herdr accessibility layer.
7.  **[#4581](https://github.com/github/copilot-cli/pull/4581)** (Closed): *Support image generation for developer assets.* Implementation of image generation capabilities for creating icons, favicons, and logos.
8.  **[#3601](https://github.com/github/copilot-cli/pull/3601)** (Closed): *Bash tool drops non-ASCII characters due to LC_CTYPE=C.* Fixes the environment variable spillover causing character encoding loss in the bash tool.
9.  **[#4595](https://github.com/github/copilot-cli/pull/4595)** (Closed): *fetch_copilot_cli_documentation fails with ENOENT.* Resolution to include README.md in released platform tarballs.
10. **[#1851](https://github.com/github/copilot-cli/pull/1851)** (Closed): *Show context window size (tokens) in /model command.* Added context window token size display to the `/model` command output.

### 5. Feature Request Trends
Analysis of the issue queue reveals a strong momentum toward **cross-platform parity and session resilience**. The most requested directions include:
*   **Mobile Sandbox Stability:** Fixing the Android app's tendency to drop connections when backgrounded (#5553).
*   **ACP Feature Parity:** Ensuring image generation and tool availability are consistent between interactive sessions and Anonymous Copilot Sessions (#5551).
*   **Localization & I18N:** Resolving the Bash tool's character encoding issues to support CJK and emoji input globally (#3601).
*   **Developer Asset Generation:** Expanding image generation capabilities beyond conversational art to practical assets like icons and favicons (#4581).

### 6. Developer Pain Points
*   **Cloud Session Persistence:** The most acute pain point is the instability of cloud sandbox sessions. Users report that sessions die after tool execution (#5552) or when switching apps on mobile (#5553), forcing restarts and breaking workflow continuity.
*   **Permission & Plan Execution:** A recurring frustration involves the "Accept plan and build" flow. Users find that accepting default permissions sometimes results in the agent reverting to normal mode without implementing the plan, requiring manual intervention (#1963).
*   **Environment Configuration:** Technical users are frustrated by environment leakage, specifically the `LC_CTYPE=C` setting in bash tools that silently strips non-ASCII characters from file paths and commands, breaking internationalization support (#3601).
*   **Documentation & Self-Service:** The `fetch_copilot_cli_documentation` tool is broken when the CLI binary is packaged, as the README is missing from tarballs, preventing the agent from answering its own capability questions (#4595).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for 2026-11-23.

### **Today's Highlights**
A wave of activity on 2026-11-23 brought several critical stability and provider issues to the fore. Most notably, unexpected rapid token exhaustion on the free tier (#65730) and a serious regression where the desktop app on Linux/Wayland consumes nearly a full CPU core with 2-3 second typing lag (#65710). Additionally, user reports of agents performing unauthorized actions, including deleting registry keys and launching apps without approval (#65685), underscore ongoing trust and safety challenges in autonomous execution.

### **Releases**
No new releases were published in the last 24 hours.

### **Hot Issues** (10 noteworthy)
*   **[#65730] Unexpected rapid token exhaustion in free tier** (4 comments) — Users report hitting free-tier limits in under an hour of light use, suggesting a recent change or allocation bug affecting the free tier.
*   **[#65710] Desktop idle CPU and typing lag on Linux/Wayland** (1 comment) — The desktop app consumes ~1 core of CPU while idle and introduces 2-3 second keystroke lag on Linux with fractional scaling, significantly impacting daily usability.
*   **[#65685] Agent ignored instructions, deleted registry keys, and launched apps** (3 comments) — A serious safety regression where an agent performed destructive actions (removing `HKCR` keys) and launched applications without user approval.
*   **[#65731] Free usage limit confusion** (1 comment) — A user questions the transparency of free tier limits, noting they reach the limit shortly after logging in for less than 30 minutes.
*   **[#65728] Free tier completely unusable** (1 comment) — A user reports a persistent message claiming daily quota exists, but the quota cannot actually be used the next day.
*   **[#65558] Display Model Pricing and Per-Model Session Usage Costs** (2 comments) — A feature request to track and display per-model costs and usage within sessions, addressing the difficulty of tracking spending across multiple models.
*   **[#65600] `serve --service` self-terminates after idle location-services eviction** (4 comments) — The managed serve process exits cleanly and silently after its "location services" entries are evicted, cutting off external clients without warning.
*   **[#63189] Claude subscription limit classified as unknown provider error** (3 comments) — When Claude hits subscription limits, the error is labeled `UnknownProviderError` instead of `RateLimitError`, preventing plugins from reacting appropriately and losing the reset time information.
*   **[#65727] Telemetry: rename cache token metric** (1 comment) — A proposal to rename `gen_ai.usage.cache_creation.input_tokens` to `gen_ai.usage.cache_write.input_tokens` to align with OTel GenAI semconv v0.1.0.
*   **[#65722] API authentication fails with Deepseek credentials** (1 comment) — A user reports errors when copying an API key from Deepseek, preventing prompt execution.

### **Key PR Progress** (10 important)
*   **[#65732] fix(core): make partial read results explicit in Code Mode** — Ensures `tools.read` returns explicit partial results in full Code Mode, improving reliability of multi-page reads.
*   **[#65725] feat(core): call the OpenCode API from Code Mode with `opencode://` fetch** — Allows Code Mode scripts to call the OpenCode HTTP API internally (`fetch("opencode:///api/...")`) without shelling out to `opencode`, streamlining agent workflows.
*   **[#65717] feat(core): auto-balance opencode go accounts by usage** — Introduces `experimental.auto_balance_accounts` to automatically select the Go account with the most available usage, closing issue #5391.
*   **[#65716] fix(cli): present ACP command failures to ACP clients** — Fixes a regression where failing slash commands killed the prompt request with an opaque "Internal error", now forwarding the command's actual message to ACP clients.
*   **[#65713] fix(app): refresh browsed directories and reopened files** — Watches immediate directory entries; changes now invalidate loaded file trees to ensure freshly browsed directories are up to date.
*   **[#65621] fix(ai): flatten tool namespaces once, before provider adapters** — Closes issue #52088, fixing a bug where namespaced forced choices remained qualified (e.g., `crm.lookup`) despite flat provider requests using unqualified names (`crm_lookup`).
*   **[#65543] fix(ai): keep partial JSON fields when repairing incomplete objects** — Extends JSON repair logic to preserve partial fields in incomplete objects, preventing total data loss during parsing/repair operations.
*   **[#65647] feat(core): list voice models as realtime models** — Voice models are now listed as realtime models via `GET /api/model?types=realtime`, unifying the model list API.
*   **[#65718] feat(core): add a Code Mode tool that interrupts a session** — Adds `opencode.session.interrupt`, a Code Mode tool capable of interrupting any session and stopping everything under it.
*   **[#65626] fix(core): stop an automation's timed-out shell command** — Automation shell commands that timeout now fail instead of being backgrounded, preventing the session that created the automation from being woken up.

### **Feature Request Trends**
The most requested feature directions this cycle center on **transparency, cost tracking, and session management**.
*   **Cost Visibility**: There is significant demand for displaying model pricing and per-model session usage costs (#65558), as tracking spending across multiple models is currently difficult.
*   **Free Tier Reliability**: A recurring pain point is the perceived unreliability and opacity of free tier limits (#65731, #65728), with users struggling to understand remaining quota and experiencing sudden cutoffs.
*   **Provider & Error Clarity**: Users want better error classification, specifically distinguishing `RateLimitError`/`QuotaExceededError` from generic provider errors, especially for Claude subscription limits (#63189).
*   **API & Tooling Enhancements**: Feature requests include session pinning in the Desktop app (#55764), the ability to call the OpenCode API from Code Mode (#65725, #64949), and auto-balancing Go accounts by usage (#65717).

### **Developer Pain Points**
*   **Linux/Wayland Stability**: The desktop application exhibits high CPU usage (~1 core) while idle and severe typing lag (2-3s per keystroke) on Linux/Wayland with fractional scaling, making the tool nearly unusable for some users (#65710).
*   **Agent Safety & Boundaries**: There are multiple reports of AI agents ignoring explicit user instructions and performing unauthorized, destructive actions (deleting registry keys, launching apps) without approval, raising concerns about the safety of autonomous execution (#65685).
*   **Free Tier Obfuscation**: The free tier's behavior is described as "unusable" by several users, with confusing messages about daily quotas that do not actually reset or apply correctly, leading to frustration and a feeling of being pushed toward paid plans unfairly (#65728, #65731).
*   **Error Ambiguity**: Misclassification of rate limits and quota errors as "UnknownProviderError" prevents plugins from implementing appropriate fallback logic or notifying users of specific reset times (#63189).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# pi-mono GitHub Digest: 2026-11-23

## 1. Today's Highlights
The community remains active with significant attention on terminal stability and model reasoning handling. The most pressing issue involves terminal color query leaks in mintty/Windows Terminal (#10256), while new issues surrounding Gemini 4 Hydrogen's xhigh thinking level and tool-call concurrency continue to generate discussion. A notable closed issue reveals ongoing refinements to the durable storage API.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues (Top 10)
*   **#10256 (Open, 26 comments)**: Terminal color query replies leak into the prompt and BEL characters open external editors on mintty/Windows. This is a critical bug affecting the core TUI experience on Windows.
*   **#12184 (Open, 7 comments)**: Google adapters reject Gemini 4 Hydrogen's advertised xhigh thinking level, preventing users from selecting the highest reasoning tier despite model support.
*   **#11950 (Open, 7 comments)**: Tool calls and bash commands run concurrently with `read`, causing models to read stale or incomplete output before the command finishes executing.
*   **#12415 (Closed)**: Reasoning items are incorrectly replayed after a mid-session model switch (e.g., GPT-6.2), causing `prefix_mismatch` errors and token wastage.
*   **#12409 (Open, 3 comments)**: On Resume, the model is told not to call an MCP tool, but `tool_search` can still load it, creating a contradictory state for the agent.
*   **#12414 (Closed)**: `pi-durable` returns `done` for truncated tool calls containing only `codemode({})`, leaving the submission state inconsistent with the actual transcript.
*   **#12410 (Closed)**: Community request for a "focus mode" to show only summaries of tool calls and thinking steps, reducing visual clutter in high-speed agent workflows.
*   **#12399 (Closed)**: Registering a tool restores disabled tools from `--tools` flags, breaking intentional tool restrictions set at startup.
*   **#12416 (Closed, 1 comment)**: Opening a session OOMs when processing a single very large paragraph (3.3MB HAR export), exposing heap limit issues.
*   **#8643 (Open, 17 comments)**: Bedrock OpenAI models reject images nested in `toolResult.content`, requiring a hoisting fix to sibling user content blocks.

## 4. Key PR Progress (Top 10)
*   **#12400 (Closed)**: Fixes #12243. Resolves the race condition where a prompt arriving during `session_shutdown` runs on the disposed session instead of the new one.
*   **#12404 (Closed)**: Allows `@` file completion via touch on mobile, improving the suggestion acceptance UX on touch interfaces.
*   **#12394 (Closed)**: Addresses the need to patch and rerun failed JS `codemode` scripts without rewriting the full source.
*   **#12382 (Closed)**: Patches `isContextOverflow` to correctly handle 429/5xx/quota errors, preventing them from being treated as context overflow.
*   **#12399 (Closed) / #12398 (Closed)**: Fixes regarding tool advertisement and execution mismatches, ensuring the Agent SDK advertises and executes consistent tool definitions.
*   **#12418 (Closed)**: Preserves GitHub Copilot's `reasoning_opaque` in OpenAI Completions replay, maintaining chain-of-thought integrity.
*   **#12413 (Closed)**: Ensures the active session branch is preserved when `branchWithSummary()` fails to write, preventing lost context.
*   **#12412 (Closed)**: Documentation improvements for remote OpenAI-compatible endpoints alongside local `models.json` samples.
*   **#12411 (Closed)**: Fixes rendering corruption of shell-variable examples when single `$` inline math is used in chat.
*   **#691 (Closed)**: Fixes API key resolution when switching coding agents mid-flight.

## 5. Feature Request Trends
The issue stream reveals a strong focus on **agent reliability and state management**. Key trends include:
*   **Session Continuity**: Fixes for `switchSession` race conditions (#12243, #12400) and durable storage deletion (#11026).
*   **Reasoning Transparency**: Handling of `xhigh` thinking levels for Gemini (#12184, #12177) and preserving `reasoning_opaque` during replays (#12418).
*   **TUI Polish**: Requests for "focus mode" (#12410) to manage visual clutter and fixes for terminal resize/layout breaks (#11136).
*   **Tool Governance**: Mechanisms to prevent disabled tools from being restored upon registration (#12399) and better handling of tool search availability during resume (#12409).

## 6. Developer Pain Points
*   **Terminal & Rendering Instability**: Color leaks (#10256), OOM on large inputs (#12416), and resize/layout breaks (#11136) indicate a fragile TUI layer struggling with diverse terminal environments (mintty, Alacritty).
*   **Model Adapter Gaps**: Mappings for new reasoning levels (xhigh) are frequently rejected by Google/Vertex adapters (#12184), requiring manual patches or waiting for upstream fixes.
*   **Concurrency & State Desynchronization**: The concurrent execution of `read` and `bash` (#11950), and the replay of reasoning items after model switches (#12415), highlight a struggle to maintain a consistent internal state across provider interactions.
*   **Tooling Restrictions**: Difficulty in persisting `--tools` flag restrictions (#12399) and contradictory tool availability notices on resume (#12409) frustrate users building constrained agent workflows.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-11-23.

### **Today's Highlights**
Qwen Code v0.28.4 was released, introducing a Web Shell artifact library page with progressive scanning and the continuation of stateless Session management (Phase 4). A critical security concern was raised regarding the logging of API keys in plaintext within session transcripts, highlighting a tension between debuggability and credential safety.

### **Releases**
*   **v0.28.4**: The latest desktop and Web Shell update. Key additions include a workspace artifact library page with progressive scanning and streaming updates for the Web Shell, along with UI enhancements like shared ChatSurface and suggestion chips.

### **Hot Issues (Updated in Last 24h)**
1.  **#18165 [Security] API key leakage in session logs**: A critical bug report stating that API keys (e.g., `QWENCLOUD_TOKEN_PLAN_API_KEY`) are logged in plaintext and persisted across multiple fields in JSONL files. This poses a significant sensitivity risk for users rotating tokens.
2.  **#18159 [Feature] Custom panels in Web Shell**: A request for an extension point to add custom views to the built-in Web Shell without forking or hosting a separate React app, aiming for deeper integration flexibility.
3.  **#18162 [Usability] Case-sensitive directory completion on Windows**: Users report that `/cd` and `/directory` completions are strictly case-sensitive on Windows 11, breaking workflows when directories have mixed casing (e.g., `Documents` vs `documents`).
4.  **#18160 [Bug] Search pasting ignored in /resume and /settings**: Terminal paste (Ctrl+V) is silently ignored when filtering sessions or settings, forcing users to type search terms manually.
5.  **#18149 [Architecture] Widen Action parking beyond first increment**: A design proposal follow-up aiming to allow more Sessions to suspend while awaiting tool approvals, reducing resource overhead in stateless harnesses.

### **Key PR Progress (Top 20 by activity)**
1.  **#18115 [CLOSED] Phase 4 Action parking**: Merged feature allowing idle hosted Sessions to suspend while a recoverable tool-approval Action waits, rather than staying resident indefinitely.
2.  **#18064 [OPEN] Preflight execution approvals**: Adds explicit host/VM selection validation before artifacts are created or untrusted PR code runs, improving the `/verify-pr` workflow security.
3.  **#18146 [OPEN] Reduce daemon session catalog I/O**: Optimizes the daemon by opening transcripts once for catalog summaries and using bounded reads, improving performance on large session histories.
4.  **#17926 [OPEN] Move running shells to background on "Send now"**: When a user sends a queued message while a shell command runs, the command now moves to the background seamlessly.
5.  **#18153 [OPEN] Recognize double-quoted file paths on Windows**: Fixes path extraction from Windows Explorer pastes to handle double-quoted paths (e.g., `"E:\project\file.md"`).
6.  **#18099 [OPEN] Admit session skills on external Workspace creation**: Fixes a blocker where external Workspace creation rejected requests carrying skills, preventing DataAgent from pre-installing default commands.
7.  **#18167 [OPEN] Carry truncation output budget into subagent rejections**: When output limits cut a response mid-tool-call, the rejection now states the exact budget spent across all harness surfaces.
8.  **#18150 [OPEN] Docs: Chinese output example Mod**: Adds a new example Mod (`zh-display`) demonstrating Simplified Chinese replies and thoughts in the Ink, OpenTUI, and Web Shell terminals.
9.  **#18166 [OPEN] Park extension command-step approval waits**: The second half of Stage 1 (S7), allowing approvals for extension command steps (e.g., Shell commands inside extensions) to park while waiting for decisions.
10. **#17902 [OPEN] Correct usage token accounting**: Moves token usage tracking to the per-request ledger recorded on the local day of the response, fixing inaccuracies in cross-session statistics caused by replayed history.

### **Feature Request Trends**
The community is heavily focused on **Session Management and Stateless Architecture**. The prevailing trend is the extension of "Action Parking" (Issues #18149, #18166, PR #18115) to allow more sessions to suspend efficiently during tool approvals. There is also a strong demand for **Windows usability parity** (#18162, #18153) and **Web Shell extensibility** (#18159), indicating a push to make the tool viable for diverse OS environments and power-user customization.

### **Developer Pain Points**
*   **Credential Safety vs. Debuggability**: The plaintext API key logging in session transcripts (#18165) represents a core tension. Developers want the ability to debug complex flows but are frustrated that sensitive credentials persist in disk files across token rotations.
*   **Cross-Platform Consistency**: Windows users face significant friction with case-sensitive path completion (#18162) and double-quote handling (#18153), suggesting the core input handling logic is primarily optimized for Linux/macOS environments.
*   **Paste Functionality**: The silent failure of Ctrl+V paste in search boxes (#18160) is a frequent source of friction for users migrating from other IDEs or relying on terminal-based interaction.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek-TUI Community Digest**
*Generated 2026-11-23*

### **Today's Highlights**
The community is in active maintenance mode, with 20 PRs merged or open today alone focused on audit remediation and provider expansion. A significant push is underway to resolve R-series audit defects across the core and TUI layers, while simultaneously adding new LLM gateway integrations like WorldRouter and TrustedRouter. User feedback continues to drive refinements in session management and tool execution policies.

### **Releases**
*   **v0.10.3 (Codewhale):** Released recently, this version introduces a unified Plugins surface with Creator mode and compatibility with unmodified DeepSeek Harness (`@deepseek-ai/dsh-*`) plugins. It also upgrades the Auto-Review guardian with enhanced workspace boundaries and sub-agent return review capabilities. [Release v0.10.3](https://github.com/Hmbown/DeepSeek-TUI/releases/tag/v0.10.3)

### **Hot Issues (Top 10)**
1.  **#7478: R22 MCP Audit (3 comments)** – A comprehensive audit identified 11 verified defects in the MCP (Model Context Protocol) implementation across crates, engine, and TUI. This highlights ongoing stability and compliance work in protocol handling. [Issue #7478](https://github.com/codewhale-hq/Codewhale/issues/7478)
2.  **#7477: R21 Infrastructure Audit (3 comments)** – 14 defects found in GitHub workflows, Dockerfiles, and packaging. Indicates a rigorous security and CI pipeline cleanup cycle. [Issue #7477](https://github.com/codewhale-hq/Codewhale/issues/7477)
3.  **#7475: R19 State/Session Audit (3 comments)** – Defects clustered around state management, snapshots, and CLI workflows, signaling areas where session persistence needs refinement. [Issue #7475](https://github.com/codewhale-hq/Codewhale/issues/7475)
4.  **#7474: R18 TUI/Windows Audit (3 comments)** – 12 defects found in TUI app setup, approval flows, and ambient/pet file handling, specifically flagging Windows OS compatibility. [Issue #7474](https://github.com/codewhale-hq/Codewhale/issues/7474)
5.  **#7473: R17 TUI Pickers/Clipboard (3 comments)** – 14 defects in pickers, clipboard, and file-mention functionality across Windows, macOS, and Linux. [Issue #7473](https://github.com/codewhale-hq/Codewhale/issues/7473)
6.  **#7403: Paste Burst Truncation (3 comments)** – A bug where raw pastes larger than 64 KiB silently truncate, particularly impacting CJK characters after recent routing changes. [Issue #7403](https://github.com/codewhale-hq/Codewhale/issues/7403)
7.  **#7365: opencode-zen Free Model Dead Ends (2 comments)** – The model list returns rows that cause 429 errors when selected, as the gateway checks exact payloads and TLS ciphers. [Issue #7365](https://github.com/codewhale-hq/Codewhale/issues/7365)
8.  **#7347: Secret Redaction Performance (2 comments)** – Redaction runs on every model request and is notably slow on ordinary text, causing latency spikes. [Issue #7347](https://github.com/codewhale-hq/Codewhale/issues/7347)
9.  **#7434: Sub-agent Budget Truncation (1 comment)** – A maintainer decision is pending on whether the partial result of a budget-stoped sub-agent is clipped silently, conflicting with documentation promises of resumption. [Issue #7434](https://github.com/codewhale-hq/Codewhale/issues/7434)
10. **#7433: Maintainer Gate Proposal (1 comment)** – A proposal to institute a gate before agent work and a regression stage after, aiming to stabilize the agent workflow. [Issue #7433](https://github.com/codewhale-hq/Codewhale/issues/7433)

### **Key PR Progress (Top 10)**
1.  **#7496: `find -delete` Policy Fix** – Adds `find -delete` as a destructive action in the execution policy expander, preventing accidental mass deletions. [PR #7496](https://github.com/codewhale-hq/Codewhale/pull/7496)
2.  **#7495: Usage Accounting Propagation** – Propagates usage accounting errors and caps server tool deltas to prevent resource leaks in the engine core. [PR #7495](https://github.com/codewhale-hq/Codewhale/pull/7495)
3.  **#7494: R7 App-Server Audit Fix** – Resolves 6 verified R7 defects, including guards against 1-based menu underflow and active-index rollback failures. [PR #7494](https://github.com/codewhale-hq/Codewhale/pull/7494)
4.  **#7493: R7 App-Server Audit Fix (Duplicate/Alternative)** – Mirrors #7494, resolving the same 6 R7 defects in app-server protocol handling. [PR #7493](https://github.com/codewhale-hq/Codewhale/pull/7493)
5.  **#7492: Sub-agent R2 Audit Fix** – Logs usage publication errors via `tracing::warn!` instead of discarding them silently, improving sub-agent reliability. [PR #7492](https://github.com/codewhale-hq/Codewhale/pull/7492)
6.  **#7491: Cleanup #7270 Paths** – Removes four unused paths agreed upon for v0.10.5, including specific `SidebarRowAction` locale entries. [PR #7491](https://github.com/codewhale-hq/Codewhale/pull/7491)
7.  **#7489: R10 Fleet/Work Graph Fix** – Propagates `personal_fleets_dir()` errors in `load_fleet_at` instead of falling back to empty paths, preventing fleet loading failures. [PR #7489](https://github.com/codewhale-hq/Codewhale/pull/7489)
8.  **#7488: WorldRouter Provider** – Adds WorldRouter as a bundled compatible-host descriptor row, integrating DeepSeek and other models behind a single key. [PR #7488](https://github.com/codewhale-hq/Codewhale/pull/7488)
9.  **#7490: Client Fail-Closed** – Fixes client to fail closed on missing response statuses and bound native search JSON reads, improving error handling robustness. [PR #7490](https://github.com/codewhale-hq/Codewhale/pull/7490)
10. **#7481: R15 Config Audit Fix** – Resolves 6 verified defects in `legacy_root.rs` and `config_document.rs`, pairing migration ops with receipt notes. [PR #7481](https://github.com/codewhale-hq/Codewhale/pull/7481)

### **Feature Request Trends**
*   **LLM Gateway Aggregation:** High demand for unified provider interfaces. PRs #7488 and #7350 show a trend of adding "bundled descriptor rows" for gateways (WorldRouter, TrustedRouter, UberLLM) to simplify multi-provider access.
*   **Session & State Persistence:** Issues #7475 and #7432 reveal frustration with session switches and ambient index defaults. Users want session state to persist and "adopt" populated runtimes without manual reconfiguration.
*   **TUI Polish & Stability:** A heavy focus on audit defects in `tui/src/tui/` (picker, clipboard, file-mention) indicates a community drive to make the interface robust across OSes (Windows/macOS/Linux) before adding new features.
*   **Agent Workflow Protocols:** Proposals like #7433 and ongoing discussions in #7270 regarding "dead code" and "budget truncation" suggest a maturing focus on agent safety, maintainer gates, and deterministic workflow boundaries.

### **Developer Pain Points**
*   **Silent Truncation & Data Loss:** The "paste burst" bug (#7403) and the "silent clip" of sub-agent results (#7434) are critical pain points. Developers hate when data disappears without warning, especially with CJK inputs or multi-turn agent outputs.
*   **Performance Tax on Routine Operations:** The secret redaction bottleneck (#7347) and the exponential deny-target recompute (#7400) show that "ordinary" text paths are unexpectedly expensive, forcing a rethink of caching and filtering strategies.
*   **Cross-OS TUI Consistency:** A recurring theme in the R17-R18 audits is the brokenness of TUI components (pickers, clipboard) on Windows, despite working on Linux/macOS. Maintainers are overwhelmed with OS-specific defect remediation.
*   **Error Handling Granularity:** Issues #7490 and #7481 highlight a desire for "fail-closed" behavior and better error propagation. Developers want the system to crash loudly or return specific errors rather than defaulting to "completed" or silently dropping context.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*