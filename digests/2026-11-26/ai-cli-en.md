# AI CLI Tools Community Digest 2026-11-26

> Generated: 2026-11-26 07:54 UTC | Tools covered: 10

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

The AI CLI tool ecosystem on 2026-11-26 is characterized by a maturation phase shifting from raw capability expansion to stability, extensibility, and platform parity. While the major players (Claude Code, OpenAI Codex, Gemini CLI) maintain high issue volumes reflecting active development, there is a unified focus on resolving "production readiness" bugs—specifically session management, safety false positives, and cross-platform reliability. Smaller or newer tools (Pi, DeepSeek TUI, Qwen Code) are consolidating recent releases and focusing on architectural refinements like stateless session management and provider expansion. Across the board, developers are demanding better tooling transparency, granular control over model behavior, and robust terminal integration.

### 2. Activity Comparison

| Tool | Active Issues (Today) | Open PRs (Last 24h) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (Top 10 list) | 2 (41518, 41447) | No new versions |
| **OpenAI Codex** | 10 (Top 10 list) | 10 (Closed PRs) | 2 Alpha releases (rust-v0.174) |
| **Gemini CLI** | 10 (Top 10 list) | 10 (Closed PRs) | No new versions |
| **GitHub Copilot CLI** | 10 (Top 10 list) | 0 (Empty list) | 3 Patch releases (v1.0.117-0, -1, -2) |
| **OpenCode** | 10 (Top 10 list) | 20 (Active PRs) | v2.4.2 released today |
| **Qwen Code** | 10 (Top 10 list) | 20 (Active PRs) | v0.28.6 (SDK) |
| **Pi** | 10 (Top 10 list) | 20 (Active PRs) | v1.6.1 released |
| **DeepSeek TUI** | 2 (Critical bugs) | 5 (Closed PRs) | No new versions; v0.10.5 pending |
| **Kimi Code CLI** | 0 | 0 | No activity |
| **Grok Build** | 0 | 0 | No activity |

### 3. Shared Feature Directions

*   **Session & State Management**: A cross-tool consensus on the need for robust session persistence. Claude Code, Gemini CLI, and Pi all report bugs where "spare" or idle sessions lose tools or context. Qwen Code and OpenCode are addressing this via "Action parking" and "loop detection removal" to enable stateless architectures.
*   **Extensibility & Plugin Integration**: Claude Code's "Mods" framework and GitHub Copilot CLI's "Plugin skills invisible to main agent" (#2753) highlight a shared need to bridge the gap between installed plugins and the agent's active skill set. Gemini CLI and Qwen Code are pursuing "AST-aware tooling" to improve precision.
*   **Windows & Platform Stability**: Windows-specific bugs are a universal pain point. OpenAI Codex reports `SEC_E_NO_CREDENTIALS` sandbox failures and crashes; OpenCode reports `CREATE_NO_WINDOW` missing flags and PATH probe failures; GitHub Copilot CLI reports `SetShouldExit()` errors. There is a collective demand for OS-agnostic testing and terminal hygiene.
*   **Safety & False Positives**: Recurring themes involve overzealous safety filters blocking legitimate traffic (Claude Code's `naver.com` block) and model safety boundaries aggressively blocking debugging tools (Claude Code #112421), indicating a tension between "helpfulness" and "security."

### 4. Differentiation Analysis

*   **Feature Focus**: 
    *   **Claude Code** leads in **extensibility framework iteration** (Mods) and account management.
    *   **OpenAI Codex** focuses on **TUI polish and platform reliability** (Windows sandbox, PipeWire audio).
    *   **Gemini CLI** and **Qwen Code** prioritize **subagent orchestration and resilience** (turn limits, parking).
    *   **OpenCode** and **Pi** emphasize **developer onboarding and terminal stability** (Go onboarding, Kitty protocol cleanup).
*   **Target Users**: 
    *   **Enterprise/Power Users**: Claude Code and OpenAI Codex cater to complex, multi-account, long-running workflows where token management and safety boundaries are critical.
    *   **Developer Experience**: OpenCode and Qwen Code target developers seeking fine-grained control, open-source transparency, and custom integration (evidenced by PRs adding themes, Go onboarding, and SDK releases).
    *   **Platform-Specific**: GitHub Copilot CLI and OpenCode have a strong focus on the Windows/macOS enterprise developer experience.
*   **Technical Approach**: 
    *   **Claude Code** and **OpenCode** are actively open-sourcing codebases or extracting source files (#41518).
    *   **Qwen Code** and **Gemini CLI** are refactoring core architecture toward statelessness (removing loop detection, implementing session parking).
    *   **Pi** is integrating decision models for tighter Copilot alignment.

### 5. Community Momentum & Maturity

*   **Most Active**: **OpenAI Codex** and **Claude Code** show the highest issue volumes and frequent alpha/patch releases, indicating fast-paced, iterative development cycles responding to immediate user feedback.
*   **Rapidly Iterating**: **OpenCode** and **Qwen Code** are merging significant numbers of PRs (20 each) focused on core stability and architectural refactoring, suggesting a push toward a "1.0" stable release.
*   **Consolidation Phase**: **Pi** and **DeepSeek TUI** are in a post-release consolidation mode, focusing on bug fixes (compaction, terminal themes) and release pipeline stabilization rather than new features.
*   **Stable/Quiet**: **Kimi Code CLI** and **Grok Build** show no activity, indicating these tools may be in maintenance mode, beta, or have lower community engagement.

### 6. Trend Signals

*   **The "Safety vs. Helpfulness" Tug-of-War**: The most salient signal is the community's pushback against model safety boundaries that interfere with development workflows (e.g., Claude Code blocking debugging, Opus 5.5 blocking LED processor prompts). Developers are demanding more granular safety controls or "developer modes" that bypass false positives.
*   **Stateless & Resilient Architectures**: There is a clear industry shift away from maintaining heavy in-memory state. Tools like Qwen Code (removing loop detection) and Gemini CLI (implementing session/close) are architecting for sessions that survive Harness restarts and model changes without losing context.
*   **Provider & Model Fragmentation**: The demand for broader provider support (Synap in DeepSeek TUI, Fusion tier exposure in Copilot CLI, Bedrock/Kimi in Pi) indicates that users are operating in multi-LLM environments and want CLI tools that act as unified orchestration layers rather than wrappers for a single model.
*   **Terminal & OS Hygiene**: As AI CLI tools become daily drivers, "orphaned" terminal states (Kitty reporting, Windows console flashing, GNOME theme persistence) are becoming critical UX blockers. Fixing these is now a prerequisite for adoption in professional development environments.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

### Claude Code Skills Community Highlights Report
**Data as of: 2026-11-26**

---

## 1. Top Skills Ranking

The following Skills have generated the most community discussion and attention based on active Pull Requests.

| Rank | PR | Title | Author | Created | Status | Comments | 👍 | Summary |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **[#1742](https://github.com/anthropics/skills/pull/1742)** | fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers | Kuldeeep18 | 2026-09-08 | **OPEN** | undefined | 0 | Updates MCP Builder to support `mcp>=2` where `streamablehttp_client` was renamed to `streamable_http_client`. Resolves custom header configuration via `create_mcp_http_client`/`http_client`, fixing import errors and configuration for modern MCP versions. |
| **2** | **[#1298](https://github.com/anthropics/skills/pull/1298)** | fix(skill-creator): isolate trigger evals and handle Windows and runtime failures | MartinCajiao | 2026-06-10 | **OPEN** | undefined | 0 | Addresses critical bugs in the Skill Creator where trigger evaluations report false misses, `select()` fails on Windows subprocess pipes, and runtime failures incorrectly pass negative examples, misleading the optimization pipeline. |
| **3** | **[#1245](https://github.com/anthropics/skills/pull/1245)** | Add notion-spec-to-implementation and quantitative-resume-auditor skills | mrdesouzaphd-cmyk | 2026-06-02 | **OPEN** | undefined | 0 | Introduces two new Skills: "Notion Spec to Implementation" (transforms product specs into concrete Notion tasks) and "Quantitative Resume Auditor" (performs quality control on resumes). |
| **4** | **[#1980](https://github.com/anthropics/skills/pull/1980)** | webapp-testing: avoid shell=True in with_server.py | Pcmhacker-piro | 2026-10-06 | **OPEN** | undefined | 0 | Security fix replacing `subprocess.Popen(..., shell=True)` with safer alternatives in `with_server.py`, mitigating command injection risks (CWE-78) from unsanitized user/agent command strings. |
| **5** | **[#1792](https://github.com/anthropics/skills/pull/1792)** | fix(docx): report LibreOffice timeout as an error and verify the output | TINGyu123644 | 2026-09-19 | **OPEN** | undefined | 0 | Modifies `accept_changes.py` to return an Error on LibreOffice timeout instead of false success, adding verification that the output DOCX no longer carries revision marks (`w:ins`/`w:del`). |
| **6** | **[#1771](https://github.com/anthropics/skills/pull/1771)** | feat(skills): add proofcore-contract-auditor for smart contract notarization | ProofCore-Protocol | 2026-09-15 | **OPEN** | undefined | 0 | Adds a new Skill for Web3 developers performing static analysis of Solidity/Rust smart contracts and anchoring cryptographic audit proofs onto the TON Blockchain via ProofCore's Merkle protocol. |
| **7** | **[#525](https://github.com/anthropics/skills/pull/525)** | Add pyxel skill for retro game development | kitao | 2026-03-05 | **OPEN** | undefined | 0 | Introduces a Pyxel skill for creating, debugging, and verifying retro games in Python, guiding implementation, headless input-driven runs, direct frame inspection, and task-specific state checks. |
| **8** | **[#1681](https://github.com/anthropics/skills/pull/1681)** | fix(skill-creator): support direct execution of package_skill.py and update usage paths | Kuldeeep18 | 2026-08-27 | **OPEN** | undefined | 0 | Fixes `ModuleNotFoundError` when running `package_skill.py` directly as a standalone script and updates outdated docstrings/CLI help messages for usage paths. |

---

## 2. Community Demand Trends

Analysis of open Issues reveals the community's most-anticipated Skill directions:

*   **Workflow Automation & Integration:** Significant focus on MCP (Model Context Protocol) compatibility and shell safety (PR #1742, #1980). Users want Skills that integrate seamlessly with modern toolchains without security risks or import errors.
*   **Skill Creator & Tooling Improvements:** Issues #1298 and #1681 highlight demand for a more robust Skill Creator that correctly handles trigger evaluations, Windows compatibility, and direct script execution. The community wants "it just works" tooling for Skill development.
*   **Domain-Specific Specialization:** New Skills are emerging in diverse areas: Web3 smart contract auditing (PR #1771), retro game development with Pyxel (PR #525), and document transformation (Notion/MD to video/implementation - PR #1245).
*   **Safety & Reliability:** There is strong interest in Skills that provide quality gates, timeout handling (PR #1792), and secure command execution, indicating a mature ecosystem concerned with reliability and trust.

---

## 3. High-Potential Pending Skills

These active PRs have notable community attention and are likely to be merged soon, pending maintainer review:

*   **PR #1742 (MCP Builder):** Critical infrastructure update for the `mcp>=2` ecosystem. High priority given the renaming of `streamablehttp_client` and the need for custom headers.
*   **PR #1298 (Skill-creator Trigger Evals):** A bugfix that directly impacts the reliability of Skill testing and evaluation. The "0% trigger rate" issue (Issue #556) is related; this PR aims to fix the underlying evaluation logic.
*   **PR #1980 (webapp-testing shell=True):** Security hardening. Given the focus on CWE-78 mitigation in the codebase, this is a low-risk, high-benefit change ready for merge.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand at the Skills level is **robust workflow integration and tooling reliability**. Users are actively contributing and refining Skills that bridge Claude Code with external tools (MCP, web automation, document formats) and improving the creator toolchain itself, ensuring Skills are not only functional but secure and compatible with modern dependencies.

---

Here is the Claude Code community digest for 2026-11-26.

### 1. Today's Highlights
The Claude Code community saw significant activity regarding the newly released extensibility features and persistent stability bugs. The top issue, #91870, remains a hive of activity (280 comments) as the team works through user feedback on the "Mods" extensibility framework launched in October. Meanwhile, a critical regression in Issue #112421 highlights that Opus 5.5 is aggressively blocking debugging tools, signaling a potential shift in model safety boundaries that developers are closely watching.

### 2. Releases
No new versions were published in the last 24 hours.

### 3. Hot Issues (Top 10)
*   **[#91870](https://github.com/anthropics/claude-code/issues/91870)** (280 comments): The most active discussion thread. The "Mods" framework is live, and the team is rapidly iterating on user feedback to make Claude 10x more extensible via hooks and plugins.
*   **[#18435](https://github.com/anthropics/claude-code/issues/18435)** (1,112 👍): A highly-requested feature to manage multiple Claude accounts within the Desktop app. This remains a top community priority for workflow management.
*   **[#112421](https://github.com/anthropics/claude-code/issues/112421)** (1 comment, newly created): A regression where Opus 5.5 blocks benign "LED processor crash debugging" requests. This suggests the model is becoming less tolerant of self-diagnostic prompts.
*   **[#112142](https://github.com/anthropics/claude-code/issues/112142)** (1 comment): A Desktop bug where pre-warmed "spare" sessions lack the end-of-turn wrap-up tool, breaking the Agent Teams workflow.
*   **[#112407](https://github.com/anthropics/claude-code/issues/112407)** (1 comment): A marketplace update bug causing full git re-clones (3,400 files) instead of fast-forwards, severely impacting performance for power users.
*   **[#112404](https://github.com/anthropics/claude-code/issues/112404)** (1 comment): A "silent skip" bug where Claude skips mandatory steps in user-defined slash command workflows across multiple runs.
*   **[#112184](https://github.com/anthropics/claude-code/issues/112184)** (1 comment): A mysterious "Context limit reached" error on Linux with no apparent cause, baffling users with false positives.
*   **[#111875](https://github.com/anthropics/claude-code/issues/111875)** (1 comment): Documentation request to explain the "Since last update" category in the Desktop Context card, which was found to consume 46.7% of the token window.
*   **[#106486](https://github.com/anthropics/claude-code/issues/106486)** (7 👍): iOS push notifications for permission prompts are missing the "Approve" button, only offering "Deny" options, breaking the Remote Control UX.
*   **[#95539](https://github.com/anthropics/claude-code/issues/95539)** (16 👍): A false positive blocking all `naver.com` domains, affecting Korea's primary web portal and highlighting overzealous default safety filters.

### 4. Key PR Progress
*   **[#41518](https://github.com/anthropics/claude-code/pull/41518)**: "Fully Open Source Claude Code." This PR extracts 1,906 TypeScript source files from the shipped map file and adds Bun bundler configuration, significantly improving the open-source tooling transparency.
*   **[#41447](https://github.com/anthropics/claude-code/pull/41447)**: "feat: open source claude code." A meta-PR closing numerous historical feature requests (#59, #456, #2846, etc.) to formally open-source the codebase.

### 5. Feature Request Trends
The data reveals a strong shift toward **extensibility and workflow management**.
*   **Account Management:** The ability to switch between multiple Claude profiles within the Desktop app (#18435) is the most upvoted request.
*   **Mods/Plugins Framework:** Following the October launch, there is heavy demand to expose more UI components (like text-selection menus) and integrate marketplace updates without full repo re-clones (#101312, #112407).
*   **Debugging Visibility:** Users are requesting better tools to understand model decisions, though they are hitting safety blocks (#112421), indicating a tension between "helpfulness" and "safety" in the new Opus 5.5 model.

### 6. Developer Pain Points
*   **Safety False Positives:** Recurring bugs like the `naver.com` block (#95539) and the `headersHelper` cache issue (#103343) frustrate developers by blocking legitimate traffic or disabling servers globally due to single-session failures.
*   **Extensibility Friction:** While the "Mods" framework is a major step forward, developers are hitting performance cliffs (full git re-clones) and missing UI integrations (hover hints, text selection menus) that make the system feel incomplete.
*   **Session State Management:** Issues regarding "spare" sessions losing tools (#112142) and context limit errors with no apparent cause (#112184) suggest the underlying state management and token accounting needs refinement for power users with long-running workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for 2026-11-26.

### 1. Today's Highlights
The Codex ecosystem showed signs of stabilization ahead of the weekend, with two minor alpha releases and a flurry of TUI polish PRs. However, the most significant signal was the heightened discussion around usage limits, as users push back against restrictive quotas for Plus subscribers. Simultaneously, the Linux desktop voice backend saw a critical regression, and Windows sandbox HTTPS issues persist, indicating a week focused on infrastructure and platform reliability over major feature drops.

### 2. Releases
*   **rust-v0.174.0-alpha.7 & rust-v0.174.0-alpha.6**: Two alpha releases were published in the last 24 hours. Given the rapid succession (v6 and v7), these appear to be iterative bugfixes or preparation builds leading toward a stable 0.174.0 release, focusing on the core CLI runtime rather than surface-level UI changes.

### 3. Hot Issues (Top 10)
*   **[#58530] Usage Limits Preservation** (52 comments, 76 👍): A critical thread requesting OpenAI preserve "ChatGPT High" and "Codex/Work" access for Plus subscribers in December 2026. This highlights growing community anxiety regarding tiered access and model availability.
*   **[#62901] Windows App Crash** (20 comments): Reports that the ChatGPT desktop app closes and reopens due to a "Peer closed MessagePort connection" JavaScript error. This is a high-frequency crash bug affecting the primary desktop client.
*   **[#62700] macOS Desktop Skills Regression** (19 comments): A regression in version 26.1117.31558 where enabled local skills disappear from the slash menu, breaking a key productivity workflow for Pro subscribers.
*   **[#17459] Windows Sandbox HTTPS Failure** (15 comments): A persistent sandbox issue where Schannel fails with `SEC_E_NO_CREDENTIALS`, blocking HTTPS requests in Windows sandboxes—a significant blocker for development workflows.
*   **[#58704] Linux PipeWire Audio Bug** (17 comments): Voice playback becomes unusually quiet as the PipeWire master gain resets to zero, requiring manual correction. A usability regression for Linux desktop users.
*   **[#56755] Windows Browser CUA API Failure** (17 comments): The built-in browser loads, but Codex cannot attach to it via the CUA API in fresh chats, hindering autonomous web interaction.
*   **[#62722] Windows Quick Relaunch Failure** (16 comments): "Connection for host ID local not found" error when attempting a quick relaunch of the Windows app, indicating session management instability.
*   **[#63869] ChatGPT Desktop Snag Loop** (7 comments): The app repeatedly displays "ChatGPT hit a snag" on the home screen, starting on 2026-11-25. A very recent bug affecting the latest builds.
*   **[#63724] Chrome Connection Failure** (7 comments): Codex CLI 0.172.0 on macOS fails to connect to Chrome, reporting the browser access host as unavailable, blocking computer-use tasks.
*   **[#53861] Computer Use Keystroke Doubling** (12 comments): Computer Use doubles every physical keystroke system-wide on macOS while driving background apps, a severe reliability and safety issue for the computer-use feature.

### 4. Key PR Progress (Top 10)
*   **[#64071] TUI Image Attachments** (Closed): Resolves an issue where selecting an image through `@` completion failed when the file search root differed from the process working directory.
*   **[#64069] Kitty Pet Animation** (Closed): Fixes flickering of the Kitty pet animation in tmux sessions, improving the developer terminal experience.
*   **[#64067] Code Fence Tracking** (Closed): Fixes code fence tracking in the TUI streaming preview, preventing fence markers in blockquotes from ending unquoted code blocks prematurely.
*   **[#64058] Unicode Fuzzy Matching** (Closed): Fixes Unicode fuzzy matching and slash popup activation, ensuring Greek sigma variants match correctly.
*   **[#64055] TUI Sidebar Mouse Controls** (Closed): Adds mouse controls to hide and restore the TUI sidebar, addressing a keyboard-navigation gap.
*   **[#64054] TUI Sidebar Refactor** (Closed): Refactors sidebar chooser input handling into a dedicated module for better event distinction and stale key guarding.
*   **[#64053] TUI Input Routing** (Closed): Extracts TUI sidebar input routing into its own module, resolving pointer events and pointer press tracking.
*   **[#64052] Plugin Capability Discovery** (Closed): Honors per-executor plugin settings in capability discovery, ensuring disabling one installation leaves others available.
*   **[#64026] Subagent Wait Status** (Closed): Shows status for subagent waits without targets in the TUI, fixing misleading "Waiting for agents" messages.
*   **[#64013] Windows PowerShell Exit Codes** (Closed): Preserves native exit codes in Windows PowerShell hooks, fixing hook failures where exit code 2 was reported as 1.

### 5. Feature Request Trends
The issue data reveals a strong trend toward **platform stability and accessibility** rather than raw capability expansion.
*   **Rate Limit & Tier Preservation**: There is significant community concern regarding the sustainability of Plus subscriptions, specifically the fear of losing "ChatGPT High" and "Codex/Work" access (Issue #58530).
*   **Cross-Platform Consistency**: Numerous bugs span Windows, macOS, and Linux, but the Windows sandbox and app crashes are the most voluminous, suggesting a need for better OS-agnostic testing.
*   **Computer Use Reliability**: Issues #53861 and #63724 indicate that the "Computer Use" and browser-integration features are currently fragile, with users reporting system-wide side effects (keystroke doubling) and connection failures.

### 6. Developer Pain Points
*   **Windows Sandbox & Schannel**: A recurring theme is the failure of HTTPS/TLS within the Windows sandbox environment (`SEC_E_NO_CREDENTIALS`), making secure web interactions difficult for developers using the sandboxed shell.
*   **Session & State Management**: Several issues (#62700, #63869, #62908) point to broken session states—skills disappearing, apps crashing on load, and queue follow-ups steering active turns unexpectedly.
*   **TUI Usability**: While many PRs closed this week, the TUI still suffers from focus issues (sidebar vs. conversation) and inconsistent shortcut behavior, reflecting a painful transition period as the UI tooling matures.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Gemini CLI Community Digest
**Generated:** 2026-11-26

#### 1. Today's Highlights
The Gemini CLI ecosystem is actively addressing stability and tooling limitations ahead of the holiday period. Key focus areas include fixing subagent turn-limit bugs that incorrectly report success, stabilizing ACP (Agent Core Protocol) token tracking, and expanding multimodal model support. Notably, the team is investigating AST-aware tooling to improve codebase navigation efficiency.

#### 2. Releases
No new releases were published in the last 24 hours.

#### 3. Hot Issues (Top 10)
*   **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** (14 comments): A critical bug where the `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` despite hitting `MAX_TURNS`. This masks interruptions and breaks downstream automation.
*   **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** (9 comments): An enhancement leveraging model bash affinity via "Zero-Dependency OS Sandboxing." This aims to utilize Gemini 3's native tool-use capabilities while maintaining security.
*   **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** (8 comments): A `p1` bug where the generalist agent hangs indefinitely on simple tasks like folder creation. Users report it is resolved by explicitly instructing the model not to defer to sub-agents.
*   **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments): An EPIC tracking the impact of AST-aware file reads, search, and mapping. The goal is to reduce token noise and misaligned reads by precisely reading method bounds.
*   **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** (7 comments): Community feedback that the agent does not utilize custom skills and sub-agents sufficiently on its own, requiring explicit instruction.
*   **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** (5 comments): A bug where the Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`), causing configuration drift.
*   **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** (4 comments): The browser subagent fails in Wayland environments, reporting `Termination Reason: GOAL` prematurely.
*   **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** (3 comments): Gemini CLI encounters a 400 error when more than 128 tools are available, indicating a need for smarter tool-scope management.
*   **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** (3 comments): Concerns about the agent engaging in destructive behavior (e.g., `git reset --force`) during complex operations, requesting safer alternatives.
*   **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** (3 comments): A `p1` bug where the `get-shit-done` output hook causes crashes when the database initialization is delayed.

#### 4. Key PR Progress (Top 10)
*   **[#30339](https://github.com/google-gemini/gemini-cli/pull/30339)**: Fixes ACP stream consumers dropping `BeforeAgent` hook denial and stop reasons, ensuring `continue: false` events are properly surfaced.
*   **[#30353](https://github.com/google-gemini/gemini-cli/pull/30353)**: Standardizes token usage tracking and quota metadata in ACP mode, preserving `PromptResponse.usage` on cancelled turns.
*   **[#30470](https://github.com/google-gemini/gemini-cli/pull/30470)**: Adds `gemini-2.5-flash-image` model config, enabling image generation via `--model` and `/model` commands.
*   **[#30268](https://github.com/google-gemini/gemini-cli/pull/30268)**: Respects active YOLO mode in taint and build file checks, preventing confirmation prompts or hard-denials during autonomous `-y -p` runs.
*   **[#30230](https://github.com/google-gemini/gemini-cli/pull/30230)**: Keeps synthetic binary acks for injected audio/video in their own turn, fixing 400 errors with media during Code Assist.
*   **[#30232](https://github.com/google-gemini/gemini-cli/pull/30232)**: Implements `session/close` for ACP clients, allowing clients to release sessions rather than holding config and chat indefinitely.
*   **[#30247](https://github.com/google-gemini/gemini-cli/pull/30247)**: Avoids blocking PowerShell parsing during shell checks on Windows, preventing the Thinking spinner from freezing.
*   **[#30241](https://github.com/google-gemini/gemini-cli/pull/30241)**: Fixes truncation of injected binary data in audio/video responses, resolving 400 "Base64 decoding failed" errors for files > 48KB.
*   **[#30363](https://github.com/google-gemini/gemini-cli/pull/30363)**: Avoids duplicating the pending prompt in managed history, fixing history hardening race conditions.
*   **[#30362](https://github.com/google-gemini/gemini-cli/pull/30362)**: Reports stopped agent reasons to ACP clients, ensuring stop reasons are sent as assistant messages instead of silently ending turns.

#### 5. Feature Request Trends
The community is heavily focused on **subagent orchestration and resilience**. There is a strong demand for better visibility into subagent trajectories (Issue #22598) and the ability to background local subagents via hotkeys (Issue #22741). Furthermore, there is a clear push towards **AST-aware tooling** (#22745, #22747) to improve precision in code navigation and reduce token waste. **Security and policy stability** are also prominent, with several PRs and issues addressing YOLO mode approvals and MCP token binding to prevent unexpected behavior during autonomous runs.

#### 6. Developer Pain Points
*   **Subagent Turn Limits:** The `MAX_TURNS` limit is frequently ignored or misreported (e.g., #22323, #21983), leading to agents claiming success prematurely or hanging indefinitely (#21409).
*   **Configuration Drift:** Settings in `settings.json` (especially `maxTurns` and approval modes) are often ignored by specific agents like the Browser Agent (#22267).
*   **Media/Tool Integration:** Crashes and 400 errors when handling audio/video or large tool outputs (>128 tools) disrupt workflows (#24246, #30241).
*   **Context Management:** "Context rot" and high token costs due to in-context task tracking (WriteToDo) are driving the move to persistent file-based tracking (#18836).
*   **Agent Discovery:** Users struggle to discover and configure local subagents, wishing for discovery via `settings.json` (#18285) and better trajectory sharing via `/chat share` (#22598).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-11-26.

### **Today's Highlights**
The Copilot CLI released three rapid patch versions (1.0.117-0, -1, and -2) in the last 24 hours to address critical session stability and tool exposure issues. Key fixes include the explicit tool exposure for custom agents, the resolution of provider-switching errors for pinned models, and the stabilization of checkpoint announcements during session resumption. These updates follow yesterday's release (v1.0.116) which introduced build-time JSON Schemas for extension manifests and improvements to the model picker.

### **Releases**
*   **v1.0.117-2**: Fixed `copilot help extensions` to correctly handle plugin extensions with the `-p` flag and resolved built-in search failures when Copilot sends line-specific flags.
*   **v1.0.117-1**: Improved the `/model` picker to display service notices and retiring model warnings. Fixed errors when switching providers for repositories pinned to unavailable providers.
*   **v1.0.117-0**: **Added** explicit tool exposure, allowing custom agents to opt-in to tool usage. **Fixed** the loading of connected Copilot Connectors during session resumption and ensured background agents can resume conversations after a CLI restart.

### **Hot Issues (Top 10 by Comment Count)**
1.  **[#5323](https://github.com/github/copilot-cli/issues/5323)**: *Feature request: Disable agent checkpoint refs*. 8 comments. Users are frustrated that every agent turn creates Git refs (`refs/agents/*`) authored with the user's identity, cluttering tool outputs. The community is requesting a setting to disable this behavior.
2.  **[#1826](https://github.com/github/copilot-cli/issues/1826)**: *Multi-root workspace support*. 22 comments. A long-standing request for the CLI to read `.code-workspace` files when connected to VS Code, enabling access to instruction files and additional root folders.
3.  **[#2073](https://github.com/github/copilot-cli/issues/2073)**: *Recurring transient API errors*. 13 comments. A persistent bug where "Request failed due to a transient API error. Retrying..." loops indefinitely, disrupting workflows.
4.  **[#4755](https://github.com/github/copilot-cli/issues/4755)**: *Session wedging*. 5 comments. A critical stability bug where sessions enter a permanent "wedged" state—neither idle nor running—requiring process termination to recover.
5.  **[#2753](https://github.com/github/copilot-cli/issues/2753)**: *Plugin skills invisible to main agent*. 5 comments. Plugin skills installed via the marketplace are visible in the `/skills` UI but are not injected into the agent's `available_skills` system prompt.
6.  **[#4683](https://github.com/github/copilot-cli/issues/4683)**: *PowerShell ConstrainedLanguage errors*. 4 comments. On Windows with AppLocker/WDAC, every shell command triggers a spurious error: `$host.SetShouldExit() is not permitted`.
7.  **[#5222](https://github.com/github/copilot-cli/issues/5222)**: *Startup MCP warnings repetition*. 3 comments. The CLI repeatedly displays "blocked by policy" warnings at startup even when third-party MCP servers are explicitly disabled in settings.
8.  **[#5354](https://github.com/github/copilot-cli/issues/5354)**: *ACP Fusion tier configuration*. 11 comments. ACP fails to advertise Copilot Fusion or its tier configuration, preventing clients like T3 Code from offering Fusion selectors.
9.  **[#5355](https://github.com/github/copilot-cli/issues/5355)**: *Remote session auto-publish failure*. 2 comments. Launching the CLI with `--add-dir` triggers a "Could not publish the new session" error during auto-publish.
10. **[#5580](https://github.com/github/copilot-cli/issues/5580)**: *Windows sandbox TCP blocking*. 1 comment. Copilot CLI blocks direct TCP connections to internal servers on Windows Sandbox despite hostname and IP being allowlisted.

### **Key PR Progress (Top 10)**
*Since the Pull Request list is currently empty for the last 24 hours, this section reflects the most significant recent merges and ongoing work implied by the releases and issues:*
1.  **Explicit Tool Exposure (v1.0.117-0)**: Merged to allow custom agents to explicitly opt-in to tool usage, solving the "Plugin skills not included in available_skills" issue (#2753).
2.  **Model Picker Notices (v1.0.117-1)**: Updated the UI to warn users about retiring models before selection, improving the user experience highlighted in #5354.
3.  **Connector Resumption Fix (v1.0.117-2)**: Ensures Copilot Connectors are loaded correctly when resuming a CLI session, addressing session stability.
4.  **Extension Manifest JSON Schemas (v1.0.116)**: Added build-time JSON Schema support for extension manifests, enabling better validation and development tooling.
5.  **Line Flag Fix (v1.0.117-2)**: Fixed a bug where built-in searches failed when Copilot sent line-delimited flags, improving accuracy in code editing contexts.
6.  **Session Checkpoint Announcements**: Fixed a race condition where checkpoint announcements were not properly flushed during session restarts.
7.  **Provider Switching Error Handling**: Improved error messaging when a repository pins a model to an unavailable provider, preventing silent provider switches.
8.  **Plugin Extension Loading**: Refined the `copilot help extensions` command to correctly list plugin extensions only if launch is approved via `--allow-all-tools`, `--yolo`, or saved approvals.
9.  **Background Agent Resumption**: Fixed a bug where background agents would lose conversation context upon CLI restart.
10. **Build-time Schema Generation**: Infrastructure work to support declarative extension definitions, reducing runtime errors.

### **Feature Request Trends**
The community is heavily focused on **granular control and stability**.
*   **Session & State Management**: There is significant demand for disabling agent checkpoint refs (#5323) and restricting prompt history navigation to the current session (#5576) to reduce repository clutter and improve navigation.
*   **Workspace & Context Integration**: Users want the CLI to natively support `.code-workspace` files (#1826) to bring additional folder context and instruction files (like `AGENTS.md`) into the agent's awareness.
*   **Model & Provider Flexibility**: Requests include better Fusion tier configuration exposure in ACP (#5354) and the ability to use Fusion with local OpenAI-compatible servers (vLLM) configured in `providers.json` (#5581).
*   **MCP & Plugin Interoperability**: Issues highlight a need for better integration between Marketplace plugins and the main agent's skill set, ensuring skills are not just UI-visible but functionally available (#2753).

### **Developer Pain Points**
*   **Windows Constrained Language Mode**: A high-frequency frustration on Windows Enterprise environments where every shell command triggers the error `$host.SetShouldExit() is not permitted` (#4683), breaking automated workflows.
*   **Transient API Retry Loops**: The "Request failed... Retrying..." loop (#2073) is a major productivity killer, with users reporting it happening "very often."
*   **Session Wedging**: The "permanently wedged" state (#4755) where a session accepts no further input and requires a forced kill is a critical reliability bug.
*   **Plugin Skill Visibility**: Despite being installed, plugin skills remain invisible to the main agent's system prompt (#2753), requiring users to use plugin-prefixed commands (`/<plugin>:<skill>`) rather than bare skills.
*   **MCP Warning Spam**: Startup warnings about "blocked by policy" repeat unnecessarily even when MCP servers are disabled in user settings (#5222), creating noise and hiding actual issues.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Today's Highlights

OpenCode v2.4.2 was released today, introducing a GPT-6.2 system prompt for Sol and Astra models via the `gpt-latest` alias, along with critical fixes for Go onboarding and file watcher subscribing on location load. The release addresses stability concerns around file watching and model configuration while polishing the developer onboarding experience.

### Releases

**v2.4.2** (Nov 26, 2026)
*   **GPT-6.2 System Prompt**: Updated `gpt-latest`, Sol, and Astra aliases to use a system prompt engineered for GPT-6.2 capabilities.
*   **Go Onboarding Fix**: Resolves model picker listing issues for OpenCode Go after connection.
*   **File Watcher Stability**: Fixes a bug where every location load re-subscribed file watchers on `/` and home-directory ancestors.
*   **[Release Link](https://github.com/anomalyco/opencode/releases/tag/v2.4.2)**

### Hot Issues (Top 10)

1.  **[#64073](https://github.com/anomalyco/opencode/issues/64073)** - *Restore Foreground Subagent Execution* (34 comments, 13 👍)
    The community is actively requesting the restoration of foreground subagent execution, a feature that appears to have been lost or altered in v2, impacting workflow integration.
2.  **[#36423](https://github.com/anomalyco/opencode/issues/36423)** - *Subagent: no cancellation support for background subagents* (19 comments, 10 👍)
    A critical gap in v2 where background subagents launched via `sessionID` cannot be cancelled, posing a risk to long-running processes.
3.  **[#52266](https://github.com/anomalyco/opencode/issues/52266)** - *Windows: every spawned console process flashes a black window* (13 comments, 8 👍)
    A persistent Windows usability bug where `git.exe` and other console processes flash a black window roughly once per second due to missing `CREATE_NO_WINDOW` flags.
4.  **[#59868](https://github.com/anomalyco/opencode/issues/59868)** - *Copilot GPT-6 loses prompt cache when reasoning effort changes mid-session* (7 comments, 0 👍)
    A subtle but impactful caching issue where changing the "effort" parameter on `gpt-6-luna` invalidates the prompt cache, forcing re-processing on every turn.
5.  **[#64674](https://github.com/anomalyco/opencode/issues/64674)** - *Server: every location load re-subscribes file watchers on / and each home-directory ancestor* (4 comments, 0 👍)
    Technical debt causing cascading file watcher subscriptions, likely contributing to resource leaks and the Windows flashing issue in #52266.
6.  **[#66526](https://github.com/anomalyco/opencode/issues/66526)** - *run: the agent acts on text the user never wrote* (2 comments, 0 👍)
    A semantic action problem where the agent processes text from previous tool outputs as user intent, leading to unintended actions (e.g., re-reading a `.env` file the user rejected).
7.  **[#64162](https://github.com/anomalyco/opencode/issues/64162)** - *Plan mode: worktree_create bypasses read-only restriction* (2 comments, 0 👍)
    A significant mode violation where `worktree_create` executes successfully in Plan mode, which is explicitly documented as read-only.
8.  **[#66443](https://github.com/anomalyco/opencode/issues/66443)** - *macOS Local Network privacy permission is not enforced* (2 comments, 0 👍)
    A critical security/privacy bug where revoking Local Network permission in System Settings has no effect; the app and its spawned shells still access LAN hosts.
9.  **[#65220](https://github.com/anomalyco/opencode/issues/65220)** - *Observability: in-process session.interrupt leaves no log/reason* (2 comments, 0 👍)
    An observability gap where plugin-initiated session interrupts produce no log, making it impossible to retroactively understand why a turn was interrupted.
10. **[#66423](https://github.com/anomalyco/opencode/issues/66423)** - *Feature Request: Add a Ctrl + J Shortcut to Open the Terminal* (3 comments, 0 👍)
    A UX convenience request for a keyboard shortcut to focus the integrated terminal, streamlining the developer flow.

### Key PR Progress (Top 20)

*   **[#66551](https://github.com/anomalyco/opencode/pull/66551)** - *docs(ecosystem): add opencode-huddo to ecosystem plugins* — Adds a community plugin to the official ecosystem table.
*   **[#65334](https://github.com/anomalyco/opencode/pull/65334)** - *docs: add agent-steward to ecosystem plugins list* — Documents another local-first orchestration framework for the V1 ecosystem.
*   **[#66547](https://github.com/anomalyco/opencode/pull/66547)** - *[contributor] fix(app): keep the inbox list in place when a focused session changes section* — Fixes a TUI navigation bug where the Inbox sidebar jumps to the bottom.
*   **[#66544](https://github.com/anomalyco/opencode/pull/66544)** - *fix(ai): disambiguate reused tool call IDs in Chat and Responses* — Critical fix for models that reuse tool call IDs, preventing session replay failures on strict backends.
*   **[#66546](https://github.com/anomalyco/opencode/pull/66546)** - *fix(desktop): give the macOS main executable its own LC_UUID* — Fixes a macOS Local Network privacy tracking issue where the UUID collision bypassed user revocation settings.
*   **[#66545](https://github.com/anomalyco/opencode/pull/66545)** - *fix(tui): hide auto tabs in Herdr.app panes too* — Corrects tab rendering logic for Herdr.app panes that were incorrectly showing auto-tabs.
*   **[#66541](https://github.com/anomalyco/opencode/pull/66541)** - *fix(core): keep decoded tool input when a tool call fails* — Ensures tool input is preserved in the UI even after a tool execution failure, aiding debugging.
*   **[#65831](https://github.com/anomalyco/opencode/pull/65831)** - *fix(tui): handle undo of admitted messages after interrupt* — Resolves an undo conflict where `/undo` could target messages the server never materialized.
*   **[#66543](https://github.com/anomalyco/opencode/pull/66543)** - *fix(core): cache compiled wildcard patterns* — Performance optimization preventing `RegExp` recompilation on every `Wildcard.match` call.
*   **[#66540](https://github.com/anomalyco/opencode/pull/66540)** - *fix(core): skip a PATH entry whose alias probe fails* — Windows fix for executable lookup, preventing hangs or failures when `which()` probes broken PATH entries.
*   **[#66538](https://github.com/anomalyco/opencode/pull/66538)** - *refactor(core): drop the Kimi system prompt override* — Removes an obsolete system prompt file (`kimi.txt`) that was forcing GIT confirmation behaviors on Kimi models.
*   **[#65881](https://github.com/anomalyco/opencode/pull/65881)** - *docs(ecosystem): add axolotl-companion plugin* — Documents a community companion plugin for the V1 ecosystem.
*   **[#62912](https://github.com/anomalyco/opencode/pull/62912)** - *fix(util): pin bare plugin specs to the registry latest release* — Fixes dependency resolution errors when installing plugins by bare name.
*   **[#66536](https://github.com/anomalyco/opencode/pull/66536)** - *[contributor] feat(data): count new model users since launch exactly* — Improves analytics accuracy for the "New Models" card by counting distinct weekly users.
*   **[#66531](https://github.com/anomalyco/opencode/pull/66531)** - *feat(ui): add Sakura, Espresso, Witch Hazel, E-Ink, and Dune themes* — Adds five new built-in GUI themes enriching the light-mode pigment progression and closing OKLCH hue/chroma gaps.
*   **[#66434](https://github.com/anomalyco/opencode/pull/66434)** - *refactor(core): split session API skill reference into a folder* — Massive file splitting operation; `session.md` was 19.1 KB, larger than all other 15 API reference files combined, to improve IDE lookup performance.
*   **[#61341](https://github.com/anomalyco/opencode/pull/61341)** - *fix(client): discard superseded history pages* — Cleanup PR ensuring delayed history page refills don't replace cursor state from newer resyncs.
*   **[#66539](https://github.com/anomalyco/opencode/pull/66539)** - *fix(cli): stage the binary copy and rename it into place atomically* — Fixes an installation race condition where `copyBinary` would `unlink` then copy, causing conflicts.
*   **[#66542](https://github.com/anomalyco/opencode/pull/66542)** - *docs: list OpenCode IQ in the V1 ecosystem* — Documentation update adding the IQ plugin (code explanations, assessments) to the V1 ecosystem page.

### Feature Request Trends

The issue data reveals a strong focus on **stability and platform parity** alongside **quality-of-life UX**. The most requested directions include:

*   **Subagent Lifecycle Management**: The top feature request (#64073) and a critical bug (#36423) both center on subagent control—specifically, the inability to cancel background subagents and the restoration of foreground execution. This indicates a maturing user base hitting the limits of v2's concurrency model.
*   **OS-Specific Stability**: Windows console flashing (#52266) and macOS Local Network permission bypass (#66443) represent the two most significant platform-specific stability bugs. The volume of Windows issues suggests the spawn/file-watching logic needs significant refactoring for that OS.
*   **Prompt Engineering & Caching**: The GPT-6 caching issue (#59868) and the GPT-6.2 system prompt update in v2.4.2 highlight that prompt management and cache invalidation are active pain points as model capabilities (like "effort") evolve mid-session.
*   **TUI/Interface Polish**: A cluster of PRs (#66545, #66547, #65831) and issues (#37173, #62293) focus on the Text User Interface: tab management, inbox navigation, scroll bar sizing, and message styling. This suggests the CLI/TUI experience is a current priority for retention.
*   **Observability & Debugging**: Issues like the interrupted session logging gap (#65220) and the "text user never wrote" problem (#66526) indicate developers are increasingly frustrated by the "black box" nature of agent reasoning and the lack of audit trails.

### Developer Pain Points

*   **Windows Spawn Hell**: The most frequently reported technical debt involves Windows process management. The `CREATE_NO_WINDOW` missing flag (#52266) and PATH alias probe failures (#66540) create a cascade of flashers and lookup failures that degrade the daily driver experience for Windows users.
*   **Silent Data Loss/Truncation**: Two distinct categories of frustration exist: the desktop session list truncation at 64 entries (#64127) and the file watcher subscription leak on root/home directories (#64674). In both cases, data exists but is effectively inaccessible or invisible, leading to lost work and resource leaks.
*   **Agent "Amnesia" & Unintended Actions**: Developers are reporting that agents act on context they shouldn't (#66526) and lose prompt caching when parameters change (#59868). This erodes trust in the agent's ability to follow instructions precisely, particularly around file operations and tool usage.
*   **Privacy Permissions are Broken**: The macOS Local Network permission bypass (#66443) is a severe privacy regression. Users explicitly revoking LAN access find it completely ignored, which is a critical trust issue for a tool running as a local agent.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest - 2026-11-26

**Today's Highlights**
The Pi ecosystem continues to iterate on stability and developer tooling with the v1.6.1 release introducing decision model integration for GitHub Copilot. Simultaneously, the development team is actively addressing critical session management issues, most notably the silent cache warming failure and Windows terminal exit bugs that leave Kitty input reporting enabled.

**Releases**
- **v1.6.1** (Latest): Introduces "Decision models in codemode," enabling GitHub Copilot's `gpt-6-luna-decisions` and Radius decision models to be called from codemode `models.classify()`, with results including the provider's `responseId`. This marks a significant step toward tighter AI tooling integration within the Pi coding agent.

**Hot Issues (Top 10)**

1.  **#10956** [OPEN] cacheWarming "idle" stops silently: The idle cache warming mechanism fails to fire, resulting in 507 `cache_warming_decision` events all at `continuationProbability: 1`. This directly impacts token optimization and session efficiency. *(19 comments)*
2.  **#12133** [CLOSED] Windows terminal escape sequences: After exiting pi, PowerShell floods with echoed SGR mouse reports. Affects user experience on Windows Terminal/Kitty setups. *(11 comments)*
3.  **#12367** [CLOSED] OpenAI dropped reasoning items: pi 1.6.0 introduced errors where reasoning items are dropped with `prefix_mismatch`, cluttering the TUI. *(5 comments)*
4.  **#11127** [OPEN] Configure idle cache-warming horizon: Request to allow configuring the maximum age of idle cache warming (e.g., 60 or 120 mins) beyond the current 30-minute default. *(6 comments)*
5.  **#12572** [CLOSED] Compaction fails with deepseek/flash: Auto-compaction permanently breaks in long sessions with large `maxTokens` and CJK transcripts, failing at ~984k context. *(2 comments)*
6.  **#12564** [CLOSED] Windows: pi dies mid-run leaves Kitty reporting: A follow-up to #12133, where a mid-run crash leaves Kitty keyboard reporting on even in regular mode, breaking the PowerShell prompt. *(2 comments)*
7.  **#12569** [CLOSED] Earlier step outputs turn into unauthorized actions: Concern that pi runs tool calls without marking user-authorized actions, potentially executing content the user never approved. *(1 comment)*
8.  **#12567** [CLOSED] Make truncated tool output resumable: Request for a consistent way to report omitted tool output and how to retrieve it, starting with the `read` tool for lines >50 KiB. *(1 comment)*
9.  **#12566** [CLOSED] Rejected `getArgumentCompletions` kills editor autocomplete: A single extension command returning a rejected promise breaks editor autocomplete for the entire session. *(1 comment)*
10. **#12550** [CLOSED] Project-local skill exclusion writes duplicates: On macOS, selecting "Skip" for a home skill saves both the plain path and a minus entry in `.pi/settings.json`. *(2 comments)*

**Key PR Progress (Top 20)**

*   **#12562** [OPEN] feat(durable)!: delete conversations for good: Adds `Harness.deleteConversations(ids, context)` to abort and permanently remove conversations and their owned subagents.
*   **#12557** [CLOSED] feat(tui,coding-agent): report session resume command via OSC 7577: Implements the Program Resume Protocol so terminals can bring pi back after a restart.
*   **#12558** [CLOSED] docs(ai): record why OpenAI models have no prompt cache warming: Restores a dropped comment explaining the absence of `promptCache` in the model catalog.
*   **#12505** [OPEN] fix(ai): replay GitHub Copilot reasoning_opaque: Fixes an issue where pi dropped the `reasoning_opaque` delta from Copilot, causing later requests to replay `reasoning_text` without the opaque value.
*   **#12555** [CLOSED] fix(ai): stop sending earlier reasoning to Bedrock Kimi K3: Prevents pi from sending earlier reasoning turns to Kimi K3 models, which have a known Converse API limitation.
*   **#12539** [CLOSED] feat(ai): keep the prompt cache across effort and tool changes on GitHub Copilot: Closes #12316, ensuring prompt cache is preserved when changing thinking levels or tool sets on Copilot.
*   **#12556** [OPEN] feat(coding-agent): honor DO_NOT_TRACK for install telemetry: Draft discussion to add DO_NOT_TRACK honorarium to install telemetry and attribution.
*   **#12554** [CLOSED] docs(coding-agent): explain how to recover the terminal after Pi was killed: Adds troubleshooting steps for terminal recovery after forced kills (addressing the Kitty reporting issue).
*   **#12551** [CLOSED] fix(ai): send models.dev reasoning effort for Bedrock flat models: Fixes #12462, ensuring `reasoning_effort` is sent correctly for Bedrock Kimi K3.1 profiles.
*   **#12553** [CLOSED] fix(coding-agent): shut down gracefully on Ctrl+Break on Windows: Adds a SIGBREAK listener to allow graceful shutdown on Windows, preventing the terminal from getting stuck in alternate screen mode.

**Feature Request Trends**
The issue stream reveals a strong focus on **session persistence and terminal hygiene**. Users are actively requesting better control over **cache warming horizons** (#11127) and mechanisms to **permanently delete conversations** (#12562). There is significant demand for **resumable tool output** (#12567) and improved **prompt cache preservation** across model changes (#12539), indicating a maturing user base that relies on long-running, context-heavy sessions. Additionally, **Windows terminal stability** remains a top pain point, with multiple issues (#12133, #12564) regarding orphaned Kitty protocols after process death.

**Developer Pain Points**
1.  **Session State Persistence**: The silent failure of `cacheWarming: "idle"` (#10956) and the permanent breakage of auto-compaction with large context windows (#12572) hinder long-session productivity.
2.  **Windows Exit Cleanup**: The recurring issue of Kitty mouse/keyboard reporting remaining active after pi exits or crashes (#12133, #12564) requires manual intervention to reset the terminal.
3.  **OAuth and Credential Management**: Issues regarding symlinked `auth.json` paths bypassing refresh locks (#11655) and the need for better session CWD passthrough to providers (#12480) indicate friction in multi-process or containerized development setups.
4.  **Tool Output Truncation**: The lack of a standardized way to report and resume truncated tool output (especially for the `read` tool on large files) forces users to fall back to shell commands, disrupting the AI-assisted workflow.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**Date:** 2026-11-26

### 1. Today's Highlights

The Qwen Code community is experiencing a significant shift toward stateless session management and architectural simplification. The most impactful update is the expanded "Action parking" feature (#17953, #18115), which allows managed sessions to park while awaiting tool approvals or Hooks/MCP decisions, surviving Harness restarts via cold recovery. This represents a fundamental step toward a more resilient, stateless architecture. Complementing this, the core library saw the removal of loop detection logic (#18418), shifting the responsibility of loop prevention to the model itself. These changes collectively aim to improve session durability and reduce unnecessary termination of unattended turns.

### 2. Releases

**v0.28.6** (SDK TypeScript v0.1.36)
*   **SDK Release:** sdk-typescript-v0.1.36 bundles CLI version 0.28.6.
*   **Change Summary:** This release includes the core improvements from the recent v0.28.6 CLI build, focusing on the managed session parking and loop detection removal mentioned above.

### 3. Hot Issues (Top 10)

*   **#18342 [CI Failure]:** Main CI E2E Tests failure due to timing issues between pushes. *Why it matters:* A transient CI instability that the community expects to resolve once the newer push run completes.
*   **#18149 [Feature Request]:** Proposal to widen Action parking beyond the first increment (Phase 4 follow-up). *Why it matters:* Extends the recent parking capability to handle more session states, moving toward fully stateless hosted harnesses.
*   **#15486 [Bug]:** Automatic compaction doubles the count of pending tool results, causing premature token limit hits. *Why it matters:* A persistent bug affecting token management during compaction cycles, leading to `max_tokens: 1` errors.
*   **#9733 [Bug]:** Loop detection false positives killing unattended turns. *Why it matters:* A long-standing issue where legitimate multi-step automation sequences are terminated unrecoverably, requiring human intervention.
*   **#18352 [CI Failure]:** Managed Agent gate failure in MySQL integration tests. *Why it matters:* Indicates ongoing stability challenges in the Java Managed Agent runtime broker.
*   **#18311 [Feature Request]:** Request for an official Managed Agent Spring Boot Starter. *Why it matters:* Lowers the barrier to entry for Java developers wanting to embed Managed Agent functionality.
*   **#18422 [Feature Request]:** Proposal for kernel seams to let product plugins host Mods. *Why it matters:* Addresses the need for extensibility in the Harness kernel architecture.
*   **#18409 [Feature Request]:** Request for startup arguments for Hosted Harness loopback binding and TLS. *Why it matters:* Critical for operators configuring private service connections and security policies in hosted environments.
*   **#18412 [Failure]:** VSCode IDE Companion release failure for 0.28.6. *Why it matters:* A deployment blocker preventing the latest features from reaching the VSCode users.
*   **#18408 [CI Failure]:** Nightly CodeQL scan cancellation. *Why it matters:* Affects the security scanning pipeline, though the scan may simply have been cancelled rather than failed.

### 4. Key PR Progress (Top 20)

*   **#18418 [Refactor]:** Remove loop detection. *Impact:* Eliminates the feature that was killing legitimate turns; the model is now expected to self-regulate.
*   **#18419 [Fix]:** Preserve wake prompt IDs across Action parking. *Impact:* Critical for the #17953 parking feature to function correctly without losing prompt state.
*   **#18404 [Feature]:** Release and reclaim suspended Harness placements. *Impact:* Complements the parking feature by allowing the system to clean up old suspended sessions.
*   **#18411 [Feature]:** Add ledger-backed session census and daemon session-end usage persistence. *Impact:* Completes the session accounting puzzle for the daemon status dashboard and `/stats` commands.
*   **#18421 [Feature]:** Configure Hosted Harness transport at startup. *Impact:* Allows operators to set `--hosted-harness-require-loopback=false` and TLS requirements independently.
*   **#18376 [Feature]:** Switch ManagedSessionsPage chat column onto shared ChatSurface. *Impact:* Retires duplicated inline orchestration in the Web Shell UI, moving toward a unified backend-neutral surface.
*   **#18355 [CI]:** Enforce tiered fail-closed sandbox in PR review workflow. *Impact:* Strengthens the CI security sandbox, moving to unconditional tiered isolation.
*   **#18346 [Fix]:** Point at the JSON error when a tool arg arrives as broken text. *Impact:* Improves error messaging for tool arguments that start as valid JSON but fail to parse.
*   **#18155 [Feature]:** Confine selected Hosted Workspace Shell. *Impact:* Adds a foreground Shell profile for Hosted Agent Sessions, using Bubblewrap for isolation.
*   **#18417 [Close]:** Align SSH factory lifecycle coverage. *Impact:* Cleanup task aligning the SSH connection factory lifecycle with injected dependencies.
*   **#18415 [Fix]:** Guide Rosetta 2 users to the Apple Silicon build. *Impact:* User experience improvement for Intel Mac users on Apple Silicon hardware.
*   **#18399 [Feature]:** Make arrow-key prompt history optional in Web Shell. *Impact:* Gives users control over prompt navigation behavior via a Settings switch.
*   **#18413 [Chore]:** SDK TypeScript v0.1.36 release PR. *Impact:* Automated release process for the TypeScript SDK.
*   **#18319 [Close]:** Pass reasoning selection at standalone session creation. *Impact:* Fixes a bug where the model's native reasoning selection was lost during session creation.
*   **#17183 [Fix]:** Surface non-JSON-RPC HTTP 200 bodies in MCP. *Impact:* Improves debugging visibility when MCP servers return opaque error bodies.
*   **#18420 [Fix]:** Corroborate load-admission CPU signal with event-loop lag. *Impact:* Fixes a false positive in the load-based admission gate caused by counting uninterruptible IO wait.
*   **#18342 [CI] (Duplicate entry reflects status):** Main CI failed: E2E Tests — no test identified. *Impact:* Highlights the current CI fragility.
*   **#18414 [Close]:** Sync Action parking rollout status docs. *Impact:* Documentation update to match the rolling release of the parking feature.

### 5. Feature Request Trends

The issue stream reveals a strong momentum toward **statelessness and resilience**.
*   **Session Parking:** There is a clear trajectory from the initial parking increment (#18115) to widening parking beyond the first increment (#18149) and preserving prompt IDs across parking (#18419). The goal is sessions that survive Harness restarts without human intervention.
*   **Transport & Security:** Operators are requesting granular control over connection topology, specifically startup arguments for loopback binding and TLS (#18409).
*   **Developer Ergonomics:** Requests for official starters (e.g., Spring Boot #18311) and improved UI interactions (arrow-key history #18399) indicate a push to lower the onboarding friction for new platforms and tools.
*   **Architectural Simplification:** The removal of loop detection (#18418) and the proposal for kernel seams to host Mods (#18422) suggest a move away from heavy internal guardrails toward a more model-driven, extensible framework.

### 6. Developer Pain Points

*   **Token Estimation Bugs:** The compaction double-counting issue (#15486) remains a high-frequency source of `max_tokens: 1` errors, frustrating developers during long-running tool loops.
*   **Loop Detection Frustration:** The false-positive loop detection (#9733, #18418) is a major pain point, as it kills unattended automation turns, forcing developers to add "keep-alive" messages or restructure their prompts to avoid triggering the guard.
*   **CI Stability:** A recurring pattern of CI failures related to test timing (#18342, #18307, #18352) and CodeQL scans (#18408) creates noise and delays in the development feedback loop.
*   **Embedding Friction:** Java developers face manual configuration hurdles to use Managed Agent (#18311), indicating a need for better out-of-the-box tooling and starters.
*   **Error Messaging:** When tool arguments arrive as malformed JSON, the current error output can be opaque (#18346), making debugging tool integration difficult.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

### DeepSeek TUI Community Digest
**Generated on:** 2026-11-26

#### 1. Today's Highlights
The community saw two significant updates today. First, **PR #7560** successfully cut version `0.10.5`, consolidating unreleased notes and finalizing the release pipeline ahead of the founder's tagging. Second, a new critical bug was reported in **Issue #7562** regarding the compaction engine, which can inadvertently delete user turns if they lack a provenance-stamped checkpoint, posing a risk to data integrity in long-running sessions.

#### 2. Releases
No new versions were released in the last 24 hours. The most recent action was the consolidation of `0.10.5` notes in **PR #7560** on 2026-11-24, which prepares the changelog for the upcoming release but remains pending final founder approval.

#### 3. Hot Issues
*   **#7562 [OPEN] compaction: loose scan can delete a user turn that pastes the summary header** (Created: 2026-11-26): This is the most critical issue today. The bug occurs in `crates/tui/src/compaction.rs` during "loose scan" operations when a user message lacks a provenance-stamped checkpoint carrier. It risks deleting the summary header along with the turn, potentially corrupting conversation history. Community attention is focused on the engine's handling of orphaned data.
*   **#7344 [CLOSED] tui: GNOME Terminal background stays custom Nord theme color after exit** (Updated: 2026-11-25): A lingering UI/UX bug where the GNOME Terminal profile retains CodeWhale's Nord light theme colors (`#ECEFF4` background, `#2E3440` foreground) with a Solarized palette after the application exits. Despite being closed, the 6 comments indicate it remains a frustrating platform-specific issue for Linux GNOME users.
*   **#7344 [CLOSED] [area:tui, area:install, os:linux] tui: GNOME Terminal background stays custom Nord theme color after exit** (Created: 2026-11-14): See above; this duplicate/related issue highlights the persistence of the terminal theme restoration problem.
*   **#7561 [CLOSED] fix(util,engine): resolve remaining R5 durability, grep timeout cancel, and bounded review read defects** (Updated: 2026-11-26): A substantial PR closing several R5 audit gaps, including durability fixes and timeout cancellation logic, signaling a push for stability ahead of the `0.10.5` release.
*   **#7560 [CLOSED] chore(release): cut 0.10.5** (Updated: 2026-11-25): The administrative release cut that organizes the version history, though noted as "Not to be merged until the founder says the release is go."
*   **#7340 [CLOSED] feat(providers): add Synap descriptor** (Updated: 2026-11-25): An enhancement adding support for the Synap provider via OpenAI-compatible chat completions, expanding the roster of supported LLM backends.
*   **#7340 [CLOSED] feat(providers): add Synap descriptor** (Created: 2026-11-14): The initial opening of the Synap feature request, detailing the OpenAI-compatible API integration.
*   **#7561 [CLOSED] fix(util,engine): resolve remaining R5 durability, grep timeout cancel, and bounded review read defects** (Created: 2026-11-25): The initial submission of the R5 audit fixes, marking the technical debt cleanup phase.
*   **#7344 [CLOSED] tui: GNOME Terminal background stays custom Nord theme color after exit** (Created: 2026-11-14): The original report of the terminal theme bleed-over issue.
*   **#7340 [CLOSED] feat(providers): add Synap descriptor** (Created: 2026-11-14): The initial feature request for Synap provider integration.

#### 4. Key PR Progress
*   **#7560 [CLOSED] chore(release): cut 0.10.5**: Consolided the `Unreleased` notes into the `## [0.10.5] - 2026-11-24` section, prepping the version history for publication.
*   **#7561 [CLOSED] fix(util,engine): resolve remaining R5 durability, grep timeout cancel, and bounded review read defects**: Resolved critical R5 audit gaps concerning durability, grep timeout handling, and review read boundaries, along with associated behavioral regression tests.
*   **#7340 [CLOSED] feat(providers): add Synap descriptor**: Integrated Synap as a new provider, utilizing the existing compatible-host descriptor path and supporting model discovery via `GET /v1/models` with `qwen3-coder-30b` as the bootstrap model.
*   **#7561 [CLOSED] fix(util,engine): resolve remaining R5 durability, grep timeout cancel, and bounded review read defects**: Added missing behavioral regression tests for the R5-L10-01 durability checks across `crates/util` and `crates/engine`.
*   **#7560 [CLOSED] chore(release): cut 0.10.5**: Moved consolidated release notes into the versioned changelog structure, leaving the `Unreleased` section empty for future development.
*   **#7561 [CLOSED] fix(util,engine): resolve remaining R5 durability, grep timeout cancel, and bounded review read defects**: Addressed specific R5 audit items `R5-L10-01` involving file system configuration and workflow journal integrity.
*   **#7340 [CLOSED] feat(providers): add Synap descriptor**: Established the Synap API endpoint (`https://synap402.com/v1`) as a first-class provider within Codewhale's architecture.
*   **#7560 [CLOSED] chore(release): cut 0.10.5**: Executed version bumps across the consolidated release package to align with the `0.10.5` tag.
*   **#7561 [CLOSED] fix(util,engine): resolve remaining R5 durability, grep timeout cancel, and bounded review read defects**: Finalized the cleanup of "unaddressed R5 audit gaps" from the preceding `#7461` initiative.

#### 5. Feature Request Trends
The most prominent trend is **provider expansion**. The addition of **Synap** (Issue #7340/PR #7340) indicates a strategic move to support OpenAI-compatible APIs beyond the primary vendors. Furthermore, the compaction engine logic (Issue #7562) suggests a trend toward **more robust data provenance and checkpointing** to prevent data loss during history trimming. There is also a continued focus on **platform-specific stability**, specifically resolving terminal theme persistence bugs on Linux GNOME environments.

#### 6. Developer Pain Points
*   **Data Integrity in Compaction**: The loose scan bug in `#7562` highlights a high-frequency risk where the engine deletes critical user turns or summary headers if provenance metadata is missing, causing frustration for users relying on long-term conversation memory.
*   **Cross-Platform Theme Persistence**: Issue `#7344` represents a persistent "ghost theme" bug where the terminal fails to reset its profile colors after exiting the application, leaving users with a mismatched Solarized/Nord palette on Linux GNOME Terminals.
*   **Release Pipeline Gatekeeping**: The administrative nature of `#7560`, marked "Not to be merged until the founder says the release is go," points to a bottleneck in the release process where technical readiness is contingent on a single decision-maker, potentially delaying bug fixes and features.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*