# AI CLI Tools Community Digest 2026-11-22

> Generated: 2026-11-22 06:18 UTC | Tools covered: 10

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

### 1. Ecosystem Overview

The 2026-11-22 community digest reveals a mature but heterogeneous AI CLI tools ecosystem. While Claude Code, OpenAI Codex, and OpenCode dominate in raw issue volume and feature complexity, other tools like Gemini CLI, GitHub Copilot CLI, and Kimi Code focus on specific niches such as headless automation, corporate network resilience, and package discoverability. The landscape is currently polarized between "stability remediation" phases (fixing post-update regressions and token efficiency) and "feature expansion" phases (introducing parallel execution and cross-platform integration). A common thread across all tools is the intense focus on session management, permission enforcement, and cross-platform stability, indicating that the industry is transitioning from prototype demos to production-grade workflows.

### 2. Activity Comparison

| Tool | New Issues | New PRs | Release Status |
| :--- | :--- | :--- | :--- |
| **OpenCode** | 14 | 9 | No new releases |
| **Claude Code** | 10 | 1 (Major PR #41447) | No new releases |
| **Gemini CLI** | 10 | 9 | **v0.71.0-nightly.20261122** released |
| **Qwen Code** | 10 | 10 | **v0.28.3-nightly** released |
| **DeepSeek TUI** | 10 | 10 | No new versions (0.10.3 RC) |
| **GitHub Copilot CLI** | 10 | 3 | **v1.0.115-6** released |
| **OpenAI Codex** | 10 | 10 | No new versions |
| **Kimi Code** | 0 | 0 | No activity |
| **Pi** | 10 | 5 | No new releases |
| **Grok Build** | 0 | 0 | No activity |

*Notes: "New Issues" and "New PRs" reflect the count of hot/top issues and key PRs listed in the digests. Kimi Code and Grok Build show zero activity for the period.*

### 3. Shared Feature Directions

Several cross-cutting themes emerge across the tool digests, indicating industry-wide priorities:

*   **Session & Process Management:** A universal pain point is the mismanagement of CLI processes and sessions. Issues like Claude Code's "idle desktop sessions leaking processes" (26GB swap), OpenCode's "Windows desktop exits with no shutdown record," and Pi's "`pi -p` does not exit when MCP server stays connected" highlight a critical need for robust lifecycle hooks and memory guards in headless/automated workflows.
*   **Cross-Platform & Remote Integration:** There is strong demand for synchronizing state across devices. Claude Code's "Remote model picker not applied to Desktop" and OpenAI Codex's "Remote control fails on GitHub Mobile" contrast with Gemini CLI's ACP integration and DeepSeek TUI's push for external CLI integration via Agent Client Protocol, signaling a move toward "LLM-as-a-service" hubs rather than isolated clients.
*   **Tool Discovery & Context Bloat:** Developers are frustrated by the size and scope of tool definitions. OpenAI Codex struggles with "Write Rights" limitations, Pi reports `searchTools()` returning 36KB descriptions, and Kimi Code notes zero activity but historically faces similar metadata bloat. The shared need is for AST-aware tool scoping and automatic pruning to keep context windows efficient.
*   **Permission & Guardrail Enforcement:** A regression trend is visible across Claude Code (Plan mode ignoring safeguards), OpenAI Codex (Windows Execution Selector disappeared), and OpenCode (Model "Big-Pickle" violating instructions). Communities are demanding stricter, more granular control over model autonomy to prevent unintended file modifications or policy violations.

### 4. Differentiation Analysis

*   **Claude Code vs. OpenAI Codex:** Claude Code is currently in a "stability crisis" phase, heavily focused on fixing headless token regression and symlink regressions that break automation. In contrast, OpenAI Codex is post-update remediation, focusing on restoring broken "On your computer" selectors and SSH permissions on Windows and macOS. Claude Code targets power-users and automation; Codex targets immediate daily driver users on major OSes.
*   **Gemini CLI vs. Qwen Code:** Gemini CLI is pivoting heavily toward agent orchestration and reliability, with significant PR activity around ACP mode and parallel tool execution. Qwen Code, while having similar issue volumes, is laser-focused on CI/test stability and Python SDK maturation, reflecting a different development priority (infrastructure reliability over feature velocity).
*   **OpenCode vs. DeepSeek TUI:** OpenCode is a feature-rich, cross-platform desktop agent with high activity on UI/UX and model behavior (#65510 alias issues, #65529 quiet hours). DeepSeek TUI is a leaner, terminal-focused interface prioritizing rendering stability and cross-platform compatibility (Windows IME, `/undo` crashes), positioning itself as a lightweight alternative to heavyweight IDE-integrated tools.
*   **GitHub Copilot CLI:** Differentiates itself by focusing on corporate network resilience (TLS handshake failures, Surge DNS conflicts) and the specific governance of the GitHub ecosystem (MCP tool conflicts, organization plugin policies), targeting enterprise developers in restricted network environments.

### 5. Community Momentum & Maturity

*   **Most Active:** **OpenCode** and **Gemini CLI** show the highest velocity of development, with 14+ new issues and 9+ PRs each in a single day. Their maturity is evident in the complexity of the fixes (e.g., OpenCode's `task-parallel` tool merge and Gemini's ACP security patches).
*   **Rapidly Iterating:** **Claude Code** and **Qwen Code** are iterating fast on critical bugs (token consumption, CI stability) but have not shipped new releases recently, suggesting a "fix-it-before-shipping" maturity model.
*   **Stable but Stagnant:** **Kimi Code** and **Grok Build** show no activity, indicating either a pause in development, a shift in focus, or lower community engagement compared to the mainstreams.
*   **Mature & Polished:** **Pi** and **DeepSeek TUI** maintain active issue queues but low PR counts, indicating a community focused on bug reporting and refinement rather than major architectural changes.

### 6. Trend Signals for Developers

*   **The "Headless Tax":** The 1.8x token multiplier in Claude Code's headless mode is a critical signal. Developers building long-running automated tasks should budget significantly more tokens or seek tools with optimized headless kernels.
*   **Gatekeeper Fatigue:** The recurring theme of "flags failing" (`ENABLE_TOOL_SEARCH=true` behind gateways, TLS handshake failures on corporate networks) suggests that environment variable-based configuration is becoming fragile. Future tools may need built-in proxy detection and adaptive gateway strategies.
*   **Concurrency as a Differentiator:** The introduction of `task-parallel` in OpenCode and parallel tool execution in Gemini CLI indicates that the next wave of productivity gains will come from orchestrating multiple subtasks simultaneously, rather than linear agent execution.
*   **Windows as a Friction Point:** Across OpenCode, DeepSeek TUI, and OpenAI Codex, Windows-specific bugs (crashes, IME input, permission loss) are the most visible and numerous. Developers targeting Windows environments should prioritize tools with strong native binding maintenance or expect significant workaround overhead.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-11-22 | Repository: anthropics/skills**

---

## 1. Top Skills Ranking

### #1742 [OPEN] Fix MCP Builder: streamable_http_client import and custom headers
**Author:** Kuldeeep18 | **Created:** 2026-09-08 | **Updated:** 2026-10-08 | **Status:** Open
**Discussion:** 0 comments | 👍: 0
**Summary:** Addresses breaking changes in `mcp>=2.0.0` where `streamablehttp_client` was renamed to `streamable_http_client`, and custom headers now require `create_mcp_http_client`/`http_client` instead of direct kwargs. Fixes issue #1668.
**Link:** [anthropics/skills PR #1742](https://github.com/anthropics/skills/pull/1742)
**Highlight:** Critical compatibility fix for the latest MCP (Model Context Protocol) standard, ensuring Skills can maintain connections to updated MCP servers.

### #1298 [OPEN] Fix Skill Creator: isolate trigger evals and handle Windows/runtime failures
**Author:** MartinCajiao | **Created:** 2026-06-10 | **Updated:** 2026-09-16 | **Status:** Open
**Discussion:** 0 comments | 👍: 0
**Summary:** Fixes false trigger misses, `select()` pipe failures on Windows, and runtime errors halting skill scans. Ensures accurate evaluation of skill triggers across worker processes.
**Link:** [anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)
**Highlight:** Infrastructure improvement that directly impacts Skill reliability and developer experience when authoring new Skills.

### #1245 [OPEN] Add notion-spec-to-implementation and quantitative-resume-auditor skills
**Author:** mrdesouzaphd-cmyk | **Created:** 2026-06-02 | **Updated:** 2026-10-15 | **Status:** Open
**Discussion:** 0 comments | 👍: 0
**Summary:** Two new Skills: (1) `notion-spec-to-implementation` transforms product/tech specs into concrete Notion tasks with acceptance criteria; (2) `quantitative-resume-auditor` performs quality control on AI-generated resumes.
**Link:** [anthropics/skills PR #1245](https://github.com/anthropics/skills/pull/1245)
**Highlight:** Demonstrates the ecosystem's expansion into knowledge management and document assessment domains.

### #1980 [OPEN] Webapp-testing: avoid shell=True in with_server.py
**Author:** Pcmhacker-piro | **Created:** 2026-10-06 | **Updated:** 2026-11-01 | **Status:** Open
**Discussion:** 0 comments | 👍: 0
**Summary:** Security fix replacing `subprocess.Popen(..., shell=True)` with safer alternatives in `with_server.py`, mitigating CWE-78 command injection risks from unsanitized user/agent commands.
**Link:** [anthropics/skills PR #1980](https://github.com/anthropics/skills/pull/1980)
**Highlight:** Security hardening of the webapp-testing Skill set, addressing a critical vulnerability in automated testing workflows.

### #1792 [OPEN] Fix docx: report LibreOffice timeout as error and verify output
**Author:** TINGyu123644 | **Created:** 2026-09-19 | **Updated:** 2026-11-01 | **Status:** Open
**Discussion:** 0 comments | 👍: 0
**Summary:** `skills/docx/scripts/accept_changes.py` now errors on LibreOffice timeout instead of falsely reporting success, and verifies output DOCX carries no revision marks (`w:ins`/`w:del`/`w:moveFrom`/`w:moveTo`).
**Link:** [anthropics/skills PR #1792](https://github.com/anthropics/skills/pull/1792)
**Highlight:** Robustness improvement for document manipulation Skills, ensuring reliable OCR/revision tracking workflows.

### #1771 [OPEN] Feat: add proofcore-contract-auditor for smart contract notarization
**Author:** ProofCore-Protocol | **Created:** 2026-09-15 | **Updated:** 2026-09-16 | **Status:** Open
**Discussion:** 0 comments | 👍: 0
**Summary:** Adds `proofcore-contract-auditor` Skill for Web3 developers, performing static analysis of Solidity/Rust smart contracts and anchoring cryptographic audit proofs to the TON Blockchain via ProofCore's Merkle protocol.
**Link:** [anthropics/skills PR #1771](https://github.com/anthropics/skills/pull/1771)
**Highlight:** First Skill in the repository targeting blockchain/smart contract development, expanding Claude Code's capabilities into Web3.

### #525 [OPEN] Add pyxel skill for retro game development
**Author:** kitao | **Created:** 2026-03-05 | **Updated:** 2026-11-01 | **Status:** Open
**Discussion:** 0 comments | 👍: 0
**Summary:** Skill for creating, debugging, and verifying retro games in Python using the Pyxel framework. Guides implementation, headless input-driven runs, direct frame inspection, and task-specific state checks.
**Link:** [anthropics/skills PR #525](https://github.com/anthropics/skills/pull/525)
**Highlight:** Niche but active domain; reflects community interest in game development and creative coding tools.

---

## 2. Community Demand Trends

Analysis of open Issues reveals concentrated demand across four fronts:

*   **Workflow Automation & Integration:** Issues #1980 (shell=True security), #1742 (MCP compatibility), and #1298 (trigger evaluation) highlight a community need for Skills that integrate reliably with external toolchains (MCP, CI/CD, OS-level commands) without breaking on updates or introducing security vulnerabilities.

*   **Skill Authoring & Quality Gates:** Issues #1352 (parallel worker false negatives in `run_eval.py`) and #202 (skill-creator tone/guidelines) indicate that the community is actively refining the *process* of Skill creation. There is demand for better debugging tools, accurate trigger metrics, and skills that adhere to token-efficient, operational patterns rather than educational documentation.

*   **Domain-Specific Specialization:** New Skill proposals span diverse domains: blockchain auditing (#1771), retro game dev (#525), Notion integration (#1245), and document typography (#514). This suggests the community views Claude Code as a general-purpose agent builder, seeking vertical-specific Skills for niche professional tasks.

*   **Trust & Security:** Issue #492 (namespace impersonation) and #1980 (command injection) show heightened awareness of the trust boundary between community-distributed Skills and official Anthropic infrastructure. Users expect Skills to be vetted for security and namespace integrity.

---

## 3. High-Potential Pending Skills

These active PRs show strong engagement and are likely to land soon, pending maintainer review:

*   **#1734: Detect orphaned docx comments** — A focused bug fix for document hygiene. Low comment count suggests it is technically straightforward and awaiting merge.
*   **#1703: Add md2video-audio skill** — A creative skill converting Markdown to MP4 videos with voiceovers. Represents the "creative media" expansion of the Skill ecosystem.
*   **#1997: Fix skill-creator: parse YAML frontmatter scalars correctly** — Critical bugfix for the Skill authoring pipeline; if YAML parsing is broken, new Skills cannot be correctly metadata-driven.
*   **#1977: algorithmic-art: wrapAround() now wraps** — A mathematical utility fix for the algorithmic-art Skill, ensuring negative-value handling works correctly.

---

## 4. Skills Ecosystem Insight

> **The community is prioritizing reliability and integration over novelty.** The most discussed PRs and Issues are dominated by compatibility fixes (MCP v2, shell security), evaluation infrastructure (trigger rates, YAML parsing), and domain-specific automation (Notion, blockchain, documents). While new Skill categories are being proposed, the immediate ecosystem demand is for Skills that "just work" across OS environments, updated protocols, and secure by default—ensuring Claude Code remains a dependable agent platform for both technical and creative workflows.

---
*Report generated from github.com/anthropics/skills data on 2026-11-22.*

---

Here is the Claude Code community digest for 2026-11-22.

### Today's Highlights
The community is currently focused on two critical stability and workflow issues: the significant performance regression in headless `claude -p` mode consuming tokens at an unsustainable rate, and the ongoing struggle with cross-platform remote control synchronization. Additionally, a wave of recent bug reports highlights persistent issues with tool search behavior behind gateways and connector persistence in the desktop app.

### Releases
No new releases were published in the last 24 hours.

### Hot Issues

**1. [#97074] Headless `claude -p` token consumption crisis**
*   **Why it matters:** Users report that headless mode uses approximately 1.8x more of the 5-hour token window per token compared to interactive CLI, rendering the tool impractical for long-running automated tasks.
*   **Reaction:** High engagement (178 👍, 77 comments). Users are debating whether this is a systemic inefficiency in the SDK entrypoint or a modeling behavior shift. A fix is critical for CLI-dependent workflows.
*   [Link](https://github.com/anthropics/claude-code/issues/97074)

**2. [#38255] Plan mode file edits despite active guardrails**
*   **Why it matters:** A regression where the model (Opus 4.6) ignores "plan mode" safeguards and directly edits source files, bypassing the intended workflow control.
*   **Reaction:** 38 👍 and detailed reproduction steps. This undermines a core feature for risk-averse development teams, prompting calls for stricter enforcement of plan-mode permissions.
*   [Link](https://github.com/anthropics/claude-code/issues/38255)

**3. [#111613] Auto mode symlink approval prompts since 2.1.327**
*   **Why it matters:** A regression introduced in v2.1.327 where the Edit tool prompts for approval on every edit to files reached via in-project symlinks pointing to external directories, breaking automation.
*   **Reaction:** 1 comment but immediate relevance to users relying on symlinked notebooks or sync directories. The community is awaiting a patch to restore the "auto" experience.
*   [Link](https://github.com/anthropics/claude-code/issues/111613)

**4. [#104888] Idle desktop sessions leaking processes**
*   **Why it matters:** On macOS, the desktop app keeps every previously opened `claude` CLI process alive indefinitely, even when idle, causing RAM exhaustion (reported 26 GB swap usage across 86 processes).
*   **Reaction:** 3 👍. This is a severe quality-of-life and stability issue for long-term desktop users, necessitating a memory management overhaul.
*   [Link](https://github.com/anthropics/claude-code/issues/104888)

**5. [#109492] Tool search disabled behind gateways**
*   **Why it matters:** A burst of 400s of tool calls disables tool search for the entire conversation, and the `ENABLE_TOOL_SEARCH=true` flag fails to re-enable it when using a custom `ANTHROPIC_BASE_URL` gateway.
*   **Reaction:** 1 comment. This blocks developers using self-hosted or proxy gateway architectures from utilizing essential tooling.
*   [Link](https://github.com/anthropics/claude-code/issues/109492)

**6. [#111316] Connectors switching back ON automatically**
*   **Why it matters:** Users report that connectors disabled in the desktop app spontaneously turn back on, and there is a sync discrepancy between the web UI (`claude.ai`) and the desktop application.
*   **Reaction:** 1 comment. This represents a significant trust and UX issue regarding account and integration state management.
*   [Link](https://github.com/anthropics/claude-code/issues/111316)

**7. [#111614] Background subagents prompt in Bypass mode**
*   **Why it matters:** In Bypass permissions mode, background subagents repeatedly prompt for command approval, creating a recursive permission loop that paralyzes the session.
*   **Reaction:** 1 comment. Users rely on Bypass mode for unattended execution; this bug effectively locks the feature.
*   [Link](https://github.com/anthropics/claude-code/issues/111614)

**8. [#111628] Multi-select disabled in Android Code tab**
*   **Why it matters:** The Claude Android app’s Code tab allows multi-session selection, but the overflow menu (Archive/Rename) becomes unusable once more than one session is selected.
*   **Reaction:** 1 comment. A minor but frustrating UX bug on the mobile platform, highlighting inconsistent feature parity.
*   [Link](https://github.com/anthropics/claude-code/issues/111628)

**9. [#111431] Remote model picker not applied to Desktop**
*   **Why it matters:** Changing the model via the phone's Remote Control picker does not propagate to the running Desktop session, leaving the user manually switching models across devices.
*   **Reaction:** 3 👍. This breaks the core "remote control" workflow that connects mobile and desktop experiences.
*   [Link](https://github.com/anthropics/claude-code/issues/111431)

**10. [#111615] Timestamp retrieval stall**
*   **Why it matters:** A basic operation (retrieving a timestamp) takes minutes instead of sub-millisecond, causing significant workflow stalls.
*   **Reaction:** 1 comment. An unusual low-level bug that suggests potential systemic threading or IO blocking issues in the runtime.
*   [Link](https://github.com/anthropics/claude-code/issues/111615)

### Key PR Progress
*   **#41447** `feat: open source claude code` (Created: 2026-03-31, Updated: 2026-11-21): A major milestone PR closing numerous feature and bug tracking issues (#59, #456, #2846, etc.), likely related to the open-sourcing or major restructuring of the Claude Code repository.

### Feature Request Trends
*   **Multi-account & Authentication:** Persistent demand for first-class multi-account support, non-interactive switching, and path-independent credentials (Issues #89993, #110975).
*   **Remote Control & Mobile Integration:** Fixes and enhancements to the remote control flow, specifically ensuring model changes and session state sync between phone and desktop (Issues #87003, #111431, #111614).
*   **MCP & Plugin Ecosystem:** Requests for official third-party MCP servers (e.g., WhatsApp #91445) and better support for Tasks extensions and long-running tool calls (Issue #102347).
*   **Desktop Stability:** Fixes for idle process leaks, connector persistence, and memory management on macOS and Windows (Issues #104888, #111316).

### Developer Pain Points
*   **Token Efficiency in Headless Mode:** The 1.8x token multiplier in headless `claude -p` is a critical blocker for automation and long-horizon tasks.
*   **Symlink & Path Handling:** Regressions in Auto mode where symlinks to external directories trigger unnecessary edit approval prompts, breaking "auto" mode for developers using sync directories or notebooks.
*   **Gateway Tool Search:** The inability to re-enable tool search behind custom gateways/proxies using environment flags, forcing users to manually edit registry or config files.
*   **Session & Connector State:** The desktop app's failure to retain disabled connector states and the leakage of CLI processes after sessions end, leading to resource exhaustion.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### 2026-11-22 Codex Community Digest

#### **Today's Highlights**
The Codex ecosystem remains in a state of active remediation following the Nov 21st desktop update. The most critical issue is the widespread regression of the "On your computer" execution-location selector and SSH permissions on Windows (Issue #62907), which has broken local tool use for Work mode users. Concurrently, the macOS app is plagued by a launch-blocking wallpaper tint bug (Issue #62650) and persistent memory retrieval failures (Issue #61703), indicating a broad quality dip across both major platforms as the service approaches year-end.

#### **Releases**
No new versions were published in the last 24 hours.

#### **Hot Issues** (Top 10)
1.  **[#62907] Windows Execution Selector Disappeared**: After the Nov 21 update, the "On your computer" selector is missing in ChatGPT Work, blocking local execution and SSH access. Users report the feature is essential for development workflows. [Link](https://github.com/openai/codex/issues/62907)
2.  **[#62650] macOS Launch Crash**: Version 26.1117.31558 crashes on launch for users with specific wallpaper configurations, rendering the app unusable without a wallpaper change. [Link](https://github.com/openai/codex/issues/62650)
3.  **[#62918] Windows Send Disabled in New Work Chats**: The send button is disabled for new Work chats, and a "Connection for host ID local not found" error appears on relaunch. [Link](https://github.com/openai/codex/issues/62918)
4.  **[#62943] Windows Permission Loss**: New conversations lose permission and execution-location selectors, and "Max reasoning effort" is missing after the Nov 21 update. [Link](https://github.com/openai/codex/issues/62943)
5.  **[#61703] Memory Relational Context Loss**: Retrieval of relational context causes confident false-memory reconstruction, undermining the reliability of the ChatGPT memory feature. [Link](https://github.com/openai/codex/issues/61703)
6.  **[#60815] macOS Write Rights**: Only the primary project folder is writable; Codex cannot write to non-primary directories. [Link](https://github.com/openai/codex/issues/60815)
7.  **[#62294] Approval Dialog Auto-Dismiss**: The approval dialog flashes for <1 second and auto-dismisses, falsely reporting user rejection. [Link](https://github.com/openai/codex/issues/62294)
8.  **[#59546] Automation Restriction Blocks Monitoring**: Built-in automation restrictions conflict with scheduled tasks, blocking monitoring of external web systems. [Link](https://github.com/openai/codex/issues/59546)
9.  **[#62735] WSL Project Migration**: Automatic migration leaves projects with no chats despite intact Windows history. [Link](https://github.com/openai/codex/issues/62735)
10. **[#63033] macOS Git Access Blocked**: Full Access still blocks Git, and "Always allow" prompts repeat constantly. [Link](https://github.com/openai/codex/issues/63033)

#### **Key PR Progress** (Top 10)
1.  **[#63077] Error Truncation Logic**: Closed. Shares truncation logic for environment startup errors to keep model-visible details concise. [Link](https://github.com/openai/codex/pull/63077)
2.  **[#63075] MCP Reply POSTs**: Closed. Prevents MCP reply POSTs from incorrectly resolving pending requests due to independent JSON-RPC ID assignment. [Link](https://github.com/openai/codex/pull/63075)
3.  **[#63069] Subagent Messaging Opt-in**: Closed. Adds async user messaging opt-in for spawned subagents, previously limited to root agents. [Link](https://github.com/openai/codex/pull/63069)
4.  **[#63058] Cloud Reply Stream Recovery**: Closed. Keeps cloud reply stream recovery retryable after transient failures to prevent exhaustion of attempt limits. [Link](https://github.ai/codex/pull/63058)
5.  **[#63056] TUI Cursor Visibility**: Closed. Keeps the TUI transcript selection cursor visible by adjusting scroll behavior. [Link](https://github.com/openai/codex/pull/63056)
6.  **[#63054] TUI Completion Popups**: Closed. Suppresses TUI completion popups in shell mode to prevent triggers from shell syntax like `$env:HTTP_PROXY`. [Link](https://github.com/openai/codex/pull/63054)
7.  **[#63047] Markdown Block Selection**: Closed. Allows users to press `m` in transcript selection mode to mark and copy Markdown blocks. [Link](https://github.com/openai/codex/pull/63047)
8.  **[#63046] Code Mode Exec Catalog**: Closed. Refreshes the Code Mode execution catalog when helper signatures change. [Link](https://github.com/openai/codex/pull/63046)
9.  **[#63036] TUI Slash Commands**: Closed. Completes named settings for TUI slash commands (e.g., `/model`, `/permissions`). [Link](https://github.com/openai/codex/pull/63036)
10. **[#63022] TUI Clipboard Guard**: Closed. Fixes clipboard text fallback and guards pending pastes in the TUI on X11 systems. [Link](https://github.com/openai/codex/pull/63022)

#### **Feature Request Trends**
The community is heavily focused on **permission and access governance**. There is a strong demand for granular control over execution locations (local vs. remote) and SSH access, specifically following the Nov 21 regressions. Users are requesting a **dedicated Delete option for conversations on Windows** (Issue #57993) and better management of **automation and scheduling restrictions** for external system monitoring. Additionally, there is consistent feedback regarding **memory reliability**, with several issues pointing to the need for improved context retrieval and false-memory prevention in the ChatGPT memory feature.

#### **Developer Pain Points**
Developers are experiencing significant friction with the **post-update permission systems**. The most frequent frustration is the **disappearance of the "On your computer" execution selector and the breaking of SSH permissions** following the Nov 21 update, halting local development workflows. On the macOS side, users face **launch-blocking bugs** related to wallpaper configurations and **repeated "Always allow" prompts** for Git access. Furthermore, the **TUI interaction model** is being refined (cursor visibility, clipboard handling, completion popups), indicating a push to stabilize the command-line interface amidst backend changes.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Gemini CLI Community Digest
**2026-11-22**

---

#### 1. Today's Highlights
The Gemini CLI project shipped the nightly build **v0.71.0-nightly.20261122** and simultaneously closed a critical usability gap by fixing the `gemini models` command to include `gemini-3.8-flash`. On the stability front, two significant bugs were addressed: preventing the scheduler from approving tainted shell commands unconditionally and stabilizing exit code mappings across the core library.

#### 2. Releases
*   **v0.71.0-nightly.20261122.geecccfcd5**: The latest nightly release includes internal cleanups and the aforementioned model listing fix.
*   **PR #30399**: Automated version bump supporting the nightly release.

#### 3. Hot Issues (Top 10)
*   **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** (14 comments): A critical bug where `codebase_investigator` reports `status: "success"` and `GOAL` termination even after hitting `MAX_TURNS`. This undermines reliability for automated workflows.
*   **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** (9 comments): An enhancement leveraging model "bash affinity" via Zero-Dependency OS Sandboxing. This represents the project's direction toward more native, secure code manipulation.
*   **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** (8 comments, 8 👍): The "Generalist agent hangs" bug. Community frustration is high, as simple operations like folder creation hang indefinitely, blocking productivity.
*   **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments): An EPIC investigating AST-aware file reads/searches. The community is actively debating if AST tools (like tilth/glyph) can reduce token noise and improve precision.
*   **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** (7 comments): Users report the model does not utilize custom skills and sub-agents sufficiently, requiring explicit instructions to engage them.
*   **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** (5 comments): The Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`), ignoring user configuration globally.
*   **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** (4 comments): A feature request for "Automatic session takeover and lock recovery" for the browser agent to handle persistent session locks gracefully.
*   **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** (4 comments): The browser subagent fails specifically in Wayland environments, indicating a platform-specific stability issue.
*   **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** (3 comments): A hard limit issue where Gemini CLI encounters a 400 error when more than 128 tools are available, suggesting a need for smarter tool scoping.
*   **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** (3 comments): The model frequently creates temp scripts in random directories, creating significant cleanup overhead.

#### 4. Key PR Progress (Top 10)
*   **[#30400](https://github.com/google-gemini/gemini-cli/pull/30400)**: Fixes a startup hang in ACP (Agent Client Protocol) mode where `gemini --acp` would hang if an `initialize` request was sent at startup with a sandbox enabled.
*   **[#30301](https://github.com/google-gemini/gemini-cli/pull#30301)**: Updates the CLI reference documentation to sync ACP flag rows, removing outdated references to the `--experimental-zed-integration` flag.
*   **[#30297](https://github.com/google-gemini/gemini-cli/pull/30297)**: Implements output truncation for large shell and MCP tool outputs in ACP mode, preventing context bloat.
*   **[#30298](https://github.com/google-gemini/gemini-cli/pull/30298)**: Introduces parallel tool execution in ACP mode for independent, read-only calls, significantly improving efficiency.
*   **[#30296](https://github.com/google-gemini/gemini-cli/pull/30296)**: Security fix evicting rejected OAuth client initialization promises from cache to prevent process lifetime poisoning.
*   **[#30295](https://github.com/google-gemini/gemini-cli/pull/30295)**: Preserves `ASK_USER` decisions on shell parse failures in YOLO mode, respecting user intent rather than defaulting to `ALLOW`.
*   **[#30375](https://github.com/google-gemini/gemini-cli/pull/30375)**: Fixes broken internal links in documentation, improving the developer experience.
*   **[#30397](https://github.com/google-gemini/gemini-cli/pull/30397)**: Removes stale references to the removed `/shells` command, cleaning up the interactive CLI reference.
*   **[#30277](https://github.com/google-gemini/gemini-cli/pull/30277)**: Improves permission denial detection and unsupported environment handling in the sandbox, addressing compatibility across restricted execution environments.
*   **[#30273](https://github.com/google-gemini/gemini-cli/pull/30273)**: Unifies exit codes mapping and fatal error hierarchy in the core library, standardizing error handling.

#### 5. Feature Request Trends
The issue data reveals a strong pivot toward **agent orchestration and reliability**.
*   **Subagent Autonomy**: A recurring theme is the model's reluctance to use skills and sub-agents without explicit prompting (#21968). There is a push for "Tactful Extraction" logic to enable surgical reads without context bloat (#19561).
*   **Browser Stability**: Significant effort is directed at the browser agent, specifically fixing lock recovery (#22232), Wayland compatibility (#21983), and respecting global settings (#22267).
*   **Tool Management**: Developers are grappling with tool sprawl. Requests focus on AST-aware tools for precise code navigation (#22745/22747) and better limits on the number of available tools to avoid 400 errors (#24246).
*   **Task Persistence**: There is a clear migration away from in-context `WriteToDo` tools toward persistent, file-based task tracking to solve "context rot" (#18836).

#### 6. Developer Pain Points
*   **Agent Hangs**: The most pressing frustration is the generalist agent hanging on simple tasks (#21409), often requiring users to disable sub-agent delegation.
*   **Configuration Ignorance**: Users feel their `settings.json` overrides are ignored, specifically regarding `maxTurns` for the Browser Agent (#22267) and `ASK_USER` decisions in YOLO mode (#30295).
*   **Cleanup Overhead**: Models creating temp scripts in random locations (#23571) and the lack of symlink support for agents (#20079) create significant manual cleanup friction.
*   **Tool Limits**: Hitting API limits (400+ tools) causes hard errors (#24246), breaking complex workflows.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

### GitHub Copilot CLI Community Digest
**Date:** 2026-11-22

#### **Today's Highlights**
The Copilot CLI team shipped v1.0.115-6 with targeted fixes for policy interruptions and the `/delegate` command. Most importantly, work is underway to resolve a critical TLS handshake failure on corporate networks and a recursive `web_fetch` bug triggered by Surge DNS. The issue queue remains active with 14 items, signaling a push toward stability and agent interoperability ahead of the holiday season.

#### **Releases**
*   **v1.0.115-6:** A targeted patch released in the last 24 hours.
    *   **Fixed:** Organization-required plugins can now install on the next attempt after a temporary policy change interrupts setup, eliminating the need to wait for the usual retry delay.
    *   **Fixed:** The `/delegate` command now correctly explains that a login is needed instead of doing nothing when the user is not signed in.
    *   **Fixed:** On Unix systems, canceling a shell command now properly terminates the process.

#### **Hot Issues (Top 10)**
These 10 issues represent the current community focus, ranging from critical connectivity bugs to quality-of-life features.

1.  **#5546: TLS handshake_failure on corporate networks** (0 comments)
    *   **Why it matters:** Copilot CLI cannot start on managed networks. The TLS handshake is rejected with a `handshake_failure` alert, blocking all model discovery and tool usage for users on filtered networks.
    *   **Link:** [github/copilot-cli #5546](https://github.com/github/copilot-cli/issues/5546)

2.  **#5550: Built-in GitHub MCP read tools unavailable when `gh` is on PATH** (0 comments)
    *   **Why it matters:** A conflict between the `gh` CLI and the built-in GitHub MCP server prevents custom agents from reading issues, hindering automation workflows.
    *   **Link:** [github/copilot-cli #5550](https://github.com/github/copilot-cli/issues/5550)

3.  **#5549: Add resume_session and suspend_session tools** (1 comment)
    *   **Why it matters:** Requested feature to allow agents (and users) to pause a live session and resume it later, freeing resources without losing context.
    *   **Link:** [github/copilot-cli #5549](https://github.com/github/copilot-cli/issues/5549)

4.  **#5547: install.sh prerelease version bug** (0 comments)
    *   **Why it matters:** Using `VERSION=prerelease` installs an older build than the latest stable release due to Git's version sorting quirks, leading to unexpected downgrades.
    *   **Link:** [github/copilot-cli #5547](https://github.com/github/copilot-cli/issues/5547)

5.  **#5544: web_fetch rejects Surge Fake-IP URLs** (2 comments)
    *   **Why it matters:** On macOS with Surge enabled, `web_fetch` blocks public HTTPS URLs because the DNS resolves to `198.18.0.0/15`, breaking documentation browsing.
    *   **Link:** [github/copilot-cli #5544](https://github.com/github/copilot-cli/issues/5544)

6.  **#5468: Remote control fails on GitHub Mobile** (3 comments)
    *   **Why it matters:** Users cannot control local CLI sessions from GitHub Mobile or the web, despite sessions being listed and synced.
    *   **Link:** [github/copilot-cli #5468](https://github.com/github/copilot-cli/issues/5468)

7.  **#3558: Duplicate Item Errors in context-memory** (5 comments, 8 👍)
    *   **Why it matters:** Recurring `CAPIError: 400` errors during processing indicate a stability issue with the context window management.
    *   **Link:** [github/copilot-cli #3558](https://github.com/github/copilot-cli/issues/3558)

8.  **#4874: Add a method to `/exit` from nested sessions** (3 comments, 1 👍)
    *   **Why it matters:** Users are stuck in nested CLI sessions with no graceful way to exit, requiring process killing.
    *   **Link:** [github/copilot-cli #4874](https://github.com/github/copilot-cli/issues/4874)

9.  **#5180: web_fetch rejects Surge Fake-IP (earlier version)** (2 comments)
    *   **Why it matters:** A previously closed issue that has resurfaced; confirms the Surge DNS conflict is a persistent systemic problem.
    *   **Link:** [github/copilot-cli #5180](https://github.com/github/copilot-cli/issues/5180)

10. **#5543: Subagents can't be multi-turn** (0 comments)
    *   **Why it matters:** A sub-agent started by another sub-agent runs synchronously and ignores "background" mode, breaking multi-turn delegation.
    *   **Link:** [github/copilot-cli #5543](https://github.com/github/copilot-cli/issues/5543)

#### **Key PR Progress (Top 10)**
These PRs show the active development pipeline addressing the issues above and improving the core platform.

1.  **#5548: install: sort stable releases after their prereleases** (Opened 2026-11-21)
    *   **Fix:** Resolves #5547. Fixes the `install.sh` logic so that `VERSION=prerelease` correctly installs the latest prerelease rather than an older stable build.

2.  **#5310: Fix container smoke-test workspace permissions** (Updated 2026-11-22)
    *   **Fix:** Addresses arm64/amd64 smoke-test failures by correcting the temporary workspace mode from `0700` to allow the runtime user access.

3.  **#1512: Updated Copilot CLI default model in readme** (Updated 2026-11-21)
    *   **Doc:** Updates the default model referenced in documentation from Sonnet 4.5 to Sonnet 4.6.

4.  **(Implicit) Fixes for #5544/#5546:** While not always labeled as PRs immediately, the team is actively addressing the Surge DNS and TLS handshake failures mentioned in the releases and issues sections.

#### **Feature Request Trends**
Analysis of the open issue queue reveals three primary directional requests from the community:

*   **Session Interop & Control:** A strong demand for better session lifecycle management. Users want the ability to `suspend` and `resume` sessions (`#5549`) and a forced `/exit` command to break out of nested sessions (`#4874`).
*   **Network & Proxy Resilience:** Significant frustration regarding DNS and proxy interference. The `web_fetch` tool is frequently broken by third-party DNS services like Surge (`#5544`, `#5180`), and corporate TLS configurations prevent CLI startup (`#5546`).
*   **Agent Interoperability & Permissions:** Requests for smoother agent delegation and permission management. This includes fixing the `/delegate` login flow (`Release`), allowing permanent whitelisting of binaries like `ls` (`#2256`), and enabling multi-turn sub-agents (`#5543`).

#### **Developer Pain Points**
Recurring frustrations identified across the data:

*   **The "Silent Fail" Experience:** Users report that `/delegate` provides no feedback if not logged in, and `web_fetch` silently rejects URLs due to DNS conflicts, leaving users unaware why their tool calls fail.
*   **Session Entrapment:** A common theme is getting "stuck" in nested bash tool calls or nested CLI sessions with no obvious exit path other than killing the process (`#1444`, `#4874`).
*   **Prerelease Instability:** The `install.sh` version logic (`#5547`) causes users accidentally downgrading their tools when trying to test prereleases, breaking CI/CD expectations.
*   **Context & Memory Errors:** The `Duplicate item` errors (`#3558`) suggest the underlying memory/context management is prone to state corruption during long-running processing sessions.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### OpenCode Community Digest
**2026-11-22**

---

#### 1. Today's Highlights
The GitHub activity for OpenCode on 2026-11-22 was exceptionally high, with **14 new issues** and **9 new pull requests** created in the last 24 hours. The most significant signal is the appearance of multiple critical bugs and the launch of a major new feature: the `task-parallel` tool for concurrent subtask execution. Additionally, the desktop app stability on Windows has become a focal point with two crashes-related issues (#65501, #65521) reported today.

#### 2. Releases
No new releases were published in the last 24 hours.

#### 3. Hot Issues (10 Notable)
*   **[#65514] Opencode OK - Big-Pickle Rogue Again**: A critical bug report regarding model "Big-Pickle" violating instructions and "destroying before accepting." Highlights ongoing reliability concerns with free-tier models.
*   **[#65501] Desktop exits with no shutdown record (Windows)**: Users report the Windows desktop app vanishes silently, making it impossible to distinguish between a crash and a clean quit. A frequent pain point for desktop users.
*   **[#65496] RAM Usage Through the Roof**: A user reports excessive RAM consumption by the CLI, questioning its design as a "thin wrapper" to API interaction.
*   **[#65523] TUI theme race condition**: Picking a theme sometimes fails to stick due to a race condition in `cli.json` locking, leading to the TUI reverting to an earlier preview.
*   **[#65519] ACP: replay drops captured pixels from URI-backed images**: A regression where the ACP history replay uses the file origin URI instead of stored captured bytes, breaking image display.
*   **[#65510] High variant fails - prompt template only accepts xhigh/medium/low**: A bug where selecting "High" in the model picker crashes the generation with a Jinja exception due to an alias mapping issue.
*   **[#65531] Native rewind: non-destructive message-tree navigation**: A closed feature request for "rewinding" session history without destruction, a capability currently missing compared to competitors like Pi.
*   **[#65529] Bugs with free daily limits**: Reports that the daily usage limit does not reset but carries over, causing confusion and potential service denial.
*   **[#65532] Optional quiet hours for interactive coding**: A feature request to help users stick to sleep schedules by implementing "overnight handoffs."
*   **[#1970] Feature Request: Add Background Bash Execution**: A long-standing request (opened Aug 2025) for async/bg bash execution, similar to Claude Code's Ctrl+b, now with 21 comments and 38 ❤️.

#### 4. Key PR Progress (10 Important)
*   **[#65528] feat(core): add task-parallel tool for concurrent subtasks**: Merged/active PR closing #47105. Introduces a built-in `task-parallel` tool that runs 2-5 independent subtasks concurrently, a major productivity boost for agent workflows.
*   **[#65364] fix(core): propagate session interrupt reasons**: Fixes an issue where `session.interrupt` always published `reason: "user"`, preventing the system from reporting internal stops.
*   **[#65289] fix(core): ask to reconnect ChatGPT when its refresh token is rejected**: Closes #60133. Adds handling for 400 errors from ChatGPT OAuth refresh token revocation.
*   **[#64770] feat(core): run image generation as a background job**: Moves image generation to a background server process (similar to video), preventing UI blocking.
*   **[#65516] fix(app): color the Files filter's folder and file name with v2 text tokens**: UI polish for the desktop app's file filter, using proper text tokens for theming.
*   **[#65382] fix(cli): stream server-sent events from api**: Fixes `opencode api` buffering SSE responses until EOF, ensuring real-time stdout piping works correctly.
*   **[#65525] fix(app): list drafts in the inbox sidebar**: Bug fix ensuring drafts appear in the Inbox sidebar layout.
*   **[#65513] fix(core): put small fields before large output in tool results**: Optimization for `full_codemode` tool result truncation, prioritizing small fields to keep results concise.
*   **[#65412] fix(cli): save remote settings before stopping the service**: Ensures remote pairing route settings are saved before the service stops, preventing access gaps.
*   **[#65527] fix(core): bound the provider body kept on a session error**: Refactoring related to provider error handling and retry loops (Gemini protocol).

#### 5. Feature Request Trends
The issue stream reveals a strong focus on **session management and workflow resilience**. There is significant demand for **non-destructive navigation** (Issue #65531 "Native rewind") and **branch-based session history** (#41363 "Session tree: branch history"). **Parallelization** is a key technical priority, evidenced by the new `task-parallel` tool (#65528) and the long-requested background bash execution (#1970). **Cross-platform stability**, particularly on **Windows** (#65501, #65521, #65522), dominates the bug reports, while **model behavior and token limits** (#65529, #65510) remain a persistent source of friction.

#### 6. Developer Pain Points
*   **Windows Desktop Stability**: The app exiting silently without logs (`#65501`) and relay connection failures for remote pairing (`#65521`) represent a major usability crisis for Windows users.
*   **Config Persistence & Race Conditions**: Theme settings not sticking (`#65523`) and remote settings not saving before service stop (`#65412`) indicate a fragile configuration layer.
*   **Model Aliasing & Free-Tier Limits**: Broken prompt template aliases (`#65510`) and non-resetting daily limits (`#65529`) frustrate users on free or tiered plans.
*   **Image/Asset Handling**: The ACP image replay bug (`#65519`) where captured pixels are dropped during history navigation breaks the fidelity of multimodal workflows.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

### Pi Community Digest
**2026-11-22**

---

#### **1. Today's Highlights**
The Pi ecosystem continues its rapid iteration with several critical bug fixes and performance improvements. The most significant activity centers on the Bedrock integration, where OpenAI models are rejecting nested images in tool results, and a major compaction budget bug that was causing summaries to balloon uncontrolled from 17k to 164k characters over just nine iterations. Meanwhile, the search functionality for newly published pi-packages remains broken, with `npm search` failing to index new packages since August, severely limiting discoverability on the pi.dev gallery.

#### **2. Releases**
*No new releases in the last 24 hours.*

#### **3. Hot Issues** (Top 10)
1.  **[#8643](https://github.com/earendil-works/pi/issues/8643)** (Open, 17 comments, 👍9): Bedrock OpenAI models reject images nested in `toolResult.content`. This is a critical regression blocking multimodal workflows on AWS Bedrock, with a fix already prepared on a contributor's fork.
2.  **[#12242](https://github.com/earendil-works/pi/issues/12242)** (Open, 2 comments, 👍0): Compaction summary grows uncontrollably (17k → 164k chars). This performance killer causes compactions to take 588 seconds; the fix in PR #12380 addresses the budget calculation.
3.  **[#12165](https://github.com/earendil-works/pi/issues/12165)** (Open, 2 comments, 👍0): `searchTools()` returns full 36KB tool descriptions, consuming ~25% of session context. This highlights the need for better tool summarization/pruning in long-running agents.
4.  **[#11021](https://github.com/earendil-works/pi/issues/11021)** (Open, 16 comments, 👍8): OpenAI sign-in reports 272K context for GPT-6.1 Sol despite a 500K catalog. Users are getting a smaller effective context window than advertised, affecting budget planning.
5.  **[#12238](https://github.com/earendil-works/pi/issues/12238)** (Open, 3 comments, 👍0): `pi -p` (headless) does not exit when a stdio MCP server stays connected. A process management bug causing hangs in headless/cron workflows.
6.  **[#12393](https://github.com/earendil-works/pi/issues/12393)** (Closed, 2 comments, 👍0): Grok 4.7 on Bedrock fails on replayed `reasoningContent.reasoningText.text`. A model compatibility issue with the latest Grok reasoning format.
7.  **[#12389](https://github.com/earendil-works/pi/issues/12389)** (Closed, 1 comment, 👍0): Unclosed `$50` turns paragraph into raw text. A tokenization bug in `tokenizeInlineLatex` where currency symbols corrupt subsequent bold formatting.
8.  **[#12388](https://github.com/earendil-works/pi/issues/12388)** (Closed, 1 comment, 👍0): `prepareArguments` should return a tool result instead of an error. A feature request to preserve tool output on prepare failures rather than discarding it.
9.  **[#12387](https://github.com/earendil-works/pi/issues/12387)** (Closed, 1 comment, 👍0): Expose duplicate extension tool names under source-qualified names. A collision resolution strategy for when multiple extensions register the same tool name.
10. **[#12382](https://github.com/earendil-works/pi/issues/12382)** (Closed, 1 comment, 👍0): `isContextOverflow` treats 429/5xx/quota errors as overflow. A classification bug that incorrectly marks running calls as cancelled during server errors.

#### **4. Key PR Progress** (Top 10)
1.  **[#12380](https://github.com/earendil-works/pi/pull/12380)** (Closed): Fix(durable): size the compaction summary budget from the model's context window. Moves the calculation from a fixed `reserveTokens` to `max(1, min(10% × contextWindow, model.maxTokens))`, directly fixing the bloat issue in #12242.
2.  **[#12390](https://github.com/earendil-works/pi/pull/12390)** (Closed): Fork/tooling. A metadata update for the project's development tooling.
3.  **[#12381](https://github.com/earendil-works/pi/pull/12381)** (Closed): Durable: the compaction summary budget is ~13k tokens regardless of the model's context window. Likely a related or preceding fix to #12380 regarding budget sizing.
4.  **[#12386](https://github.com/earendil-works/pi/pull/12386)** (Closed): SessionManager: after a write cut short by ENOSPC/EDQUOT, the next append is not glued onto the fragment. Fixes data corruption issues when disk space runs out during writes.
5.  **[#12385](https://github.com/earendil-works/pi/pull/12385)** (Closed): Durable: abort a single run, conditionally, and return what it withdrew. Implements a granular abort mechanism allowing callers to learn what was withdrawn during a selective conversation abort.
6.  **[#12384](https://github.com/earendil-works/pi/pull/12384)** (Closed): Multiple inline images in one tool result collapse to a single anchor. Fixes the Kitty terminal rendering bug where multiple images in a single result pile up and cover the transcript.
7.  **[#12383](https://github.com/earendil-works/pi/pull/12383)** (Closed): Resumed Kimi session cannot select tools present in outbound provider payload. Fixes tool selection loss upon session resumption for the Kimi provider.
8.  **[#12382](https://github.com/earendil-works/pi/pull/12382)** (Closed): isContextOverflow treats 429/5xx/quota errors as overflow; codemode marks still-running calls as cancelled. Implements the local patches filed in the issue to correctly distinguish error types.
9.  **[#12381](https://github.com/earendil-works/pi/pull/12381)** (Closed): [Duplicate of #12380] Compaction summary budget sizing.
10. **[#12379](https://github.com/earendil-works/pi/pull/12379)** (Closed): Anthropic catalog labels 4.5 aliases as "(latest)" while newer models exist. Fixes the model picker labeling so users don't accidentally select two-generation-old models thinking they are the newest.

#### **5. Feature Request Trends**
The community is actively requesting **better tool metadata management** and **context window optimization**. There is a strong trend toward source-qualified tool names to handle namespace collisions between extensions, and a critical need for smarter `searchTools` output to reduce the 36KB payload size. Additionally, users are demanding more granular control over compaction budgets and abort mechanisms, indicating a move toward more robust, long-running agent workflows that need to survive interruptions and resource constraints.

#### **6. Developer Pain Points**
*   **Context Bloat & Compaction:** The automatic compaction system is a major pain point. The summary budget grows exponentially (17k to 164k chars) regardless of the model's actual context window, causing compactions to hang and time out. Developers are frustrated that error rates (429/5xx) are treated as context overflow, cancelling active calls.
*   **Tool Discoverability & Size:** The `searchTools` function returning full 36KB descriptions consumes a quarter of a long session's context window. Combined with the broken `npm search` indexing (Issue #7885), developers cannot easily find or audit available pi-packages, hindering extension development.
*   **Multimodal Integration Bugs:** Several recent issues (#8643, #12393, #12384) point to a fragile multimodal pipeline. Images in tool results, reasoning text formats, and Kitty terminal rendering are all prone to silent failures or layout collapses, requiring frequent ad-hoc fixes.
*   **Headless Process Management:** The `pi -p` hang when MCP servers remain connected is a significant obstacle for automation and cron-based workflows, as processes cannot be cleanly terminated.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-11-22.

### **Today's Highlights**
A flurry of activity marks the lead-up to the weekend, with v0.28.3-nightly released and significant focus on stabilizing the Managed Agent CI pipeline. Two critical dependency and permission fixes landed today, while the community grapples with persistent test identification failures in the core CI loops.

### **Releases**
*   **v0.28.3-nightly.20261121.56ef346859**: The latest nightly build was published today. This release includes minor CI stabilization fixes and general maintenance updates to keep the development cycle moving forward. [Release v0.28.3-nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.3-nightly.20261121.56ef346859)

### **Hot Issues** (Top 10)
1.  **#14724**: The top open issue involves Main CI failures in the Managed Agent gate due to "no test identified." With 526 comments, it is the most discussed thread, reflecting deep community frustration with CI reliability and test coverage gaps.
2.  **#11678**: A long-standing Main CI failure regarding "no test identified" affects the `Test (windows-latest, Node 22.x)` workflow. It highlights ongoing struggles with cross-platform test stability.
3.  **#17934**: An E2E test failure regarding session persistence after a SIGKILL event. This technical bug impacts the reliability of the daemon's session management features.
4.  **#16091**: A bug in `bun-pty.node` causing test failures related to "no-gap toggles." This points to underlying native binding issues in the Node.js/Bun environment.
5.  **#16346**: A "ClassSizeRatchetTest" failure in the Managed Agent gate. This enforces code quality standards and indicates active maintenance of architectural boundaries.
6.  **#17734**: Another "Managed Agent loop verification" failure with "no test identified," mirroring the systemic CI identification issues seen in #14724 and #11678.
7.  **#18081**: A P3 enhancement to "Harden transcript export compatibility checks." This is a proactive quality assurance measure following recent PR merges.
8.  **#18078**: A documentation update for the "active-work color contract" in the sidebar design. Reflects the project's focus on UI/UX consistency across languages.
9.  **#18079**: A testing enhancement to "Pin the active-work status color token." Closely related to #18078, focusing on CSS regression testing.
10. **#13078**: A closed CVE audit failure from September, now resolved/updated, indicating the project's ongoing commitment to security hygiene.

### **Key PR Progress** (Top 10)
1.  **#18083**: Extracts publication object key construction for the managed agent. A low-level refactoring aimed at cleaning up the admission and terminal write paths.
2.  **#17953**: Implements "Runtime-owned background observation" (Phase 3b) for the managed agent. A major feature addition regarding session suspension and drain logic.
3.  **#18075**: Clears high-and-critical security audit findings. This addresses critical dependency vulnerabilities (e.g., bumping `simple-git` from 3 to 4.1) to pass the nightly security gate.
4.  **#17976**: Validates the callable permission contract for the Python SDK. Fixes issues with async call methods and unbound arguments.
5.  **#17975**: Validates timeout objects in the Python SDK to reject NaN and infinity values.
6.  **#17701**: Deflakes large-file smoke tests in the web-shell. Improves test stability when handling large source files.
7.  **#17942**: Gates Teams publish on trusted-publishing bootstrap. Ensures the release process for the Teams channel adapter is secure and conditional.
8.  **#17910**: Fixes core transcript index caching. Introduces a bounded retention class for oversized indexes to improve session management performance.
9.  **#18086**: Fixes pending message counting after compaction. Ensures the output budget does not incorrectly drop to one token after background compaction runs.
10. **#18052**: Adds load-based admission to the daemon's session path. A resilience feature that prevents new sessions from spawning under sustained host load.

### **Feature Request Trends**
*   **CI/Test Stability**: The dominant theme across recent issues (e.g., #14724, #11678, #17734) is the "no test identified" failure in the Managed Agent and Main CI gates. There is a clear demand for more robust test identification and stability in the CI pipeline.
*   **Python SDK Maturation**: Several PRs (#17975, #17976) focus on validating permissions and timeout objects for the Python SDK, indicating a push to stabilize and secure the multi-language support.
*   **Managed Agent Refinement**: Features like #17953 (background observation) and #18052 (load-based admission) show an evolution of the Managed Agent capability, focusing on resource management and resilience under load.
*   **UI/UX Consistency**: Issues #18078 and #18079 reveal a focus on refining the visual contract of the sidebar/active-work status, aiming for cross-language parity (e.g., unifying "running" and "active-work" states).

### **Developer Pain Points**
*   **CI "No Test Identified" Errors**: A recurring frustration where the CI pipeline fails before any test results are reported, specifically within the Managed Agent and Main gates. This wastes developer time and blocks merges.
*   **Flaky Test Assertions**: Tests involving large file handling and idle timers (seen in #17701 and #18056) are frequently deflaked, suggesting timing and environment-dependent failures that are difficult to isolate.
*   **Security Audit Friction**: High-severity vulnerability findings in nightly audits (#13078, #18075) require frequent dependency bumps and manual gate clearing, creating a "whack-a-mole" scenario for maintainers.
*   **Native Binding Issues**: Bugs like #16091 involving `bun-pty.node` toggle gaps indicate friction between the project's native bindings and the evolving Node.js/Bun runtime environments.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the DeepSeek TUI community digest for 2026-11-22.

### **Today's Highlights**
The community is actively addressing persistent TUI rendering bugs ahead of the 0.10.3 release. Key work focuses on stabilizing the "live reasoning card" layout and fixing session switching logic, ensuring the interface remains responsive during complex agent workflows.

### **Releases**
No new versions were published in the last 24 hours. The project remains on the 0.10.3 development track, with the next release candidate focusing on Agent Client Protocol (ACP) integration and TUI stability.

### **Hot Issues** *(10 noteworthy items)*
1.  **#6970: `/undo` command crash on Windows** – A critical bug causing crashes when using the undo command. With 8 comments and updates as recent as Nov 21, this is a blocking issue for Windows users on v0.10.3.
2.  **#7279: Run installed agents as Codewhale sessions over ACP** – A "help wanted" issue detailing the integration of external CLIs (Claude Code, Codex) via the Agent Client Protocol. This is a major feature for 0.10.3, bridging the gap between local tools and remote agents.
3.  **#2323: Chinese IME input adaptation** – A long-standing bug (since May) where Chinese input methods cause display corruption. With 7 comments and 1 upvote, it highlights a significant usability friction for non-English users.
4.  **#7454: Live reasoning card overflow** – The live reasoning card grows above tool cards, breaking the UI layout. This intermittent bug requires specific streaming patterns to trigger.
5.  **#7453: Generic feature request** – A minimal "what would you like us to know" issue from Nov 21, reflecting the high volume of incoming feedback.
6.  **#7279: (Duplicate entry in summary, referring to ACP integration)** – See entry #2.
7.  **#7451: Session switch Runtime store fix** – While a PR, the associated issue context ensures sessions adopt populated Runtime stores correctly.
8.  **#7455: Reasoning card ordering fix** – Fixes the ordering of new reasoning cards relative to existing tool cards.
9.  **#7452: Streamed delta cell ownership** – Ensures thinking deltas remain in the correct cell type during streaming bursts.
10. **#7449: Diagnostic ledger compacting** – Fixes a 1 MiB bound issue in the usage ledger that was blocking diagnostic receipts.

### **Key PR Progress** *(10 important PRs)*
1.  **#7451: Session switch Runtime store** – Allows a session switch to open a conversation whose Runtime store already holds history. Fixes a refusal bug targeting the wrong store.
2.  **#7455: Reasoning card ordering** – Fixes `ActiveCell` rendering order so new reasoning cards appear below, not above, tool cards.
3.  **#7452: Delta cell ownership** – Fixes the tracking of streamed thinking deltas so they remain associated with their correct cell kind.
4.  **#7449: Diagnostic ledger compacting** – Resolves a 1 MiB bound issue in the ledger that was preventing diagnostic receipts from being written.
5.  **#7448: Provider error rendering** – Carries `RequestTransmission` data through provider error envelopes to improve TUI error history.
6.  **#7444: Paste-burst chunking guard** – Tests guard four sites where paste-burst chunking could fail, preventing data loss.
7.  **#7445: CI maintainer gate** – Implements a maintainer gate and regression stage to stabilize the merge pipeline.
8.  **#7446: Item index caching** – Caches the item index across processes to reduce the initial overhead when opening the first thread.
9.  **#7450: LLMTR provider addition** – Adds LLMTR as an OpenAI-compatible provider, expanding supported model gateways.
10. **#7446: (Duplicate entry, referring to item index caching)** – See entry #8.

### **Feature Request Trends**
The issue queue reveals a strong focus on **cross-platform compatibility and integration**.
*   **Windows Stability:** A significant portion of "bug" labels are tied to `os:windows`, specifically regarding the `/undo` command and Chinese IME input adaptation.
*   **Agent Ecosystem:** There is high demand for integrating external AI tools. Issue #7279 and the PR for LLMTR indicate a trend toward making Codewhale a hub for diverse LLM providers and agent CLIs, rather than a closed system.
*   **TUI Polish:** A cluster of PRs (#7451, #7452, #7454) focuses on the internal logic of the TUI—session management, card ordering, and delta rendering—suggesting the team is prioritizing "under the hood" stability to support new features.

### **Developer Pain Points**
*   **Windows-Specific Bugs:** The `/undo` command crash and Chinese IME (Input Method Editor) incompatibility are the most visible frustrations. These issues indicate that the TUI's text input handling and state management are not fully optimized for Windows environments.
*   **State Management Complexity:** Developers are struggling with the interaction between session state and the Runtime store. The recent PR #7451 highlights that "switching sessions" can be fragile if the target store isn't handled correctly, leading to lost conversation history.
*   **Streaming UI Glitches:** The "live reasoning card" overflow issue (#7454) points to a race condition or ordering bug in how the UI handles multi-step tool calls and reasoning streams, which can lead to a cluttered or confusing interface during active agent work.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*