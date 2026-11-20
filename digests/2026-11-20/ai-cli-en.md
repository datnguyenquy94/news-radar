# AI CLI Tools Community Digest 2026-11-20

> Generated: 2026-11-20 06:52 UTC | Tools covered: 10

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

The AI CLI tools ecosystem on 2026-11-20 reflects a maturing landscape transitioning from experimental rapid iteration toward feature stabilization and reliability engineering. While all major tools released updates today, the focus has shifted from "model integration" to "session integrity," "cross-platform parity," and "infrastructure robustness." Claude Code and OpenAI Codex lead in raw issue volume, reflecting their large user bases and early-adopter nature. In contrast, tools like Kimi Code and Grok Build show minimal activity, indicating either mature stabilization or lower market penetration. Across the board, developers are demanding better state management, OAuth stability, and model transparency, suggesting the industry is moving past the "which model is best" phase toward "how do we make these tools reliably work in daily driver workflows."

### 2. Activity Comparison

| Tool | Issues (Today) | PRs (Today) | Release Status |
| :--- | :---: | :---: | :--- |
| **Claude Code** | 10 | 1 | v2.1.329 released |
| **OpenAI Codex** | 10 | 10 | 3 alpha releases (0.173, 0.172, 0.171) |
| **Gemini CLI** | 10 | 10 | 2 nightly/preview releases (v0.71.0, v0.70.0) |
| **OpenCode** | 10 | 10 | No releases |
| **Qwen Code** | 10 | 10 | No releases |
| **Pi** | 10 | 9 | No releases |
| **DeepSeek TUI** | 10 | 10 | No releases (0.10.3 dev cycle) |
| **Copilot CLI** | 10 | 0 | v1.0.115-1 released |
| **Claude Code (Desktop)** | Feature requests dominate; 0 top issues highlighted but active queue of 50. |
| **Kimi Code / Grok Build** | 0 | 0 | No activity. |

*Notes: Issue and PR counts are derived from the "Top 10" summaries provided. "Top 10" lists typically represent the most critical or active items, not the total volume.*

### 3. Shared Feature Directions

**OAuth & Authentication Stability**
*   **Tools:** Copilot CLI, OpenAI Codex, Gemini CLI, Pi.
*   **Need:** A pervasive theme across Copilot CLI (Issues #4203, #4017), Codex (quota depletion/trust), and Gemini CLI is the unreliability of token refresh and OAuth flows. Users report stalled sign-ins, forced interactive re-auth, and silent failures when system utilities (like `xdg-open`) are missing. There is a universal demand for "silent refresh" mechanisms that work across platforms, especially WSL2/Linux environments.

**Session State & History Retention**
*   **Tools:** Claude Code, OpenAI Codex, Gemini CLI, OpenCode.
*   **Need:** Preservation of conversation history is a critical pain point. Claude Code issues (#105087, #100759) highlight history loss in Remote Control and localhost sessions. OpenAI Codex reports crashes on session resume (#59855). OpenCode notes SQLite concurrency failures (#65020). The shared need is robust state management that survives app restarts, updates, and cross-device handoffs without data loss.

**Windows Stability & Platform Parity**
*   **Tools:** Claude Code, Pi, OpenCode, DeepSeek TUI.
*   **Need:** Windows-specific bugs dominate several ecosystems. Claude Code has PowerShell safety check overreach (#105507) and MCP tool loading issues (#111283). Pi reports EIO/EPIPE crashes (#12317) and Git Bash truncation (#12340). OpenCode has PowerShell permission bypasses (#65008). DeepSeek TUI addresses execpolicy evasion via dynamic flags (#7408). There is a clear industry trend toward fixing OS-specific signal handling and configuration persistence.

**Agent Reliability & Turn Management**
*   **Tools:** Gemini CLI, OpenCode, Qwen Code.
*   **Need:** Issues regarding "hanging" agents (#21409 in Gemini, #65014 in OpenCode) and turn stalling ("Send now" interactions, #17825 in Qwen) are prevalent. The common need is better turn boundaries, timeout controls for plugin tools, and predictable agent termination to prevent indefinite blocking of developer workflows.

### 4. Differentiation Analysis

**Claude Code** differentiates itself as the **feature-rich, stability-focused incumbent**. Its recent release (v2.1.329) targets specific UX frictions (trust dialogs, hook warnings) and addresses a high volume of remote control and Windows PowerShell issues. Its differentiation lies in the "Desktop vs. CLI" parity problem (Issue #111283) and a heavy focus on "managed settings" integrity, positioning it as the tool for complex, multi-step engineering workflows where context and tool management are paramount.

**OpenAI Codex** positions itself as the **rapid-integration beta**. With three alpha releases today and a focus on new model catalogs (GPT-6.2, Astra), it targets early adopters wanting to experiment with the latest reasoning models. Its differentiation is the "model behavior shift" narrative—users must restructure `AGENTS.md` for GPT-6.2—and a strong focus on TUI workspace enhancements, making it the sandbox for next-gen model UIs.

**Gemini CLI** distinguishes itself via **agent resilience and observability**. Its issues center on "hanging" agents and browser persistence. The project actively tracks subagent termination and introduces "seal-time wake stamps" for suspension management. It differentiates by prioritizing the developer experience of long-running agents and introducing fine-grained tool timeout controls (`tools.callTimeout`), catering to users running complex, long-duration code analysis tasks.

**OpenCode** focuses on **code-model integration and TUI modernization**. With a heavy docket of Windows shell regressions and SQLite concurrency bugs, it appeals to users deeply integrated into the Microsoft ecosystem and those using the OpenCode TUI. Its differentiation is the "refactoring" pace—actively renaming tool paths and restructuring the code model—which signals a push toward a more modular, namespace-organized architecture for plugin developers.

**Qwen Code** targets the **managed-agent and daemon infrastructure** crowd. Its PRs focus heavily on daemon chat controllers, memory metrics in status JSON, and "background-turn metadata" preservation. It differentiates by its strong focus on the server-daemon boundary and ACP (Agent Communication Protocol) integration, making it the choice for teams building custom agent networks or requiring detailed runtime introspection.

**Pi** distinguishes itself as the **terminal hygiene and reliability specialist**. Its recent closures focus on SIGTSTP signal handling, EIO/EPIPE survival, and prompt caching. It differentiates by its granular focus on "terminal hygiene"—ensuring the CLI doesn't break the user's terminal state upon exit or signal receipt—which appeals to power users on Windows and those utilizing Git Bash.

### 5. Community Momentum & Maturity

*   **Most Active:** **OpenAI Codex** and **Gemini CLI** show the highest combined activity (20 actions each), driven by recent alpha/nightly releases and a high volume of community-reported bugs. Their communities are large, vocal, and currently in a phase of intense debugging and feature validation.
*   **Rapidly Iterating:** **Qwen Code** and **OpenCode** are iterating rapidly through PRs (10 each) with a focus on infrastructure refactoring (daemon binding, code model nesting, SQLite optimization). This suggests an active development cycle focused on architectural stability and scaling.
*   **Mature/Stabilizing:** **Pi** and **DeepSeek TUI** show lower raw issue counts but high closure rates for specific, painful bugs (SIGTSTP, paste freezes). Their communities appear focused on polishing the "last mile" of reliability rather than adding broad features.
*   **Stalled/Low Activity:** **Kimi Code** and **Grok Build** show zero activity, indicating these tools may be in maintenance mode, facing adoption challenges, or have been superseded by other platforms.

### 6. Trend Signals

**The Shift to "Session Integrity"**
The most significant industry trend is the move from "does the model work?" to "does the session survive?" Across Claude Code, OpenAI Codex, Gemini CLI, and OpenCode, the highest-engagement issues relate to history retention, OAuth persistence, and cross-device continuity. For developers, this signals that the next competitive frontier is not model intelligence, but the reliability of the developer toolchain surrounding the model.

**Windows as the Primary Friction Surface**
A disproportionate number of high-severity bugs are Windows-specific (PowerShell checks, Git Bash truncation, signal handling). This suggests that while the model wars happen on Linux/Mac developer blogs, the actual deployment and daily-driver pain for a significant portion of the user base is on Windows. Investing in Windows-specific QA and signal handling is becoming a critical differentiator.

**OAuth & Token Management as Infrastructure**
The sheer volume of issues regarding "authorization fatigue," "silent token refresh," and "xdg-open stalls" indicates that authentication is becoming a core infrastructure layer, not just a login form. Tools that solve the "token refresh" problem reliably (especially in headless/WSL environments) will see higher adoption. The industry trend is toward standardized, non-interactive auth flows that respect existing system configurations.

**Model Catalog Transparency**
With the introduction of new models (GPT-6.2, Astra, Fable 5.2), there is a recurring complaint about "picker omissions" and "usage breakdown" failures. Users are demanding better visibility and control over which models are active and how they are billed. The trend is toward "model-aware" CLI configurations where the user can explicitly opt-in or override model selection, rather than having the tool guess.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-11-20 | Repository: anthropics/skills**

## 1. Top Skills Ranking
*The 8 most-discussed Pull Requests by community attention*

| # | PR | Author | Status | Comments | Key Functionality |
|---|----|--------|--------|----------|-------------------|
| **1** | **[#1742](https://github.com/anthropics/skills/pull/1742)** | Kuldeeep18 | **OPEN** | 0 | Fixes MCP Builder to support `mcp>=2` `streamable_http_client` import and custom headers. Critical update for modern MCP integration. |
| **2** | **[#1298](https://github.com/anthropics/skills/pull/1298)** | MartinCajiao | **OPEN** | 0 | Isolates trigger evals and handles Windows/subprocess failures. Addresses reliability issues in skill activation testing. |
| **3** | **[#1245](https://github.com/anthropics/skills/pull/1245)** | mrdesouzaphd-cmyk | **OPEN** | 0 | Adds `notion-spec-to-implementation` and `quantitative-resume-auditor` skills. New productivity workflow automation tools. |
| **4** | **[#1980](https://github.com/anthropics/skills/pull/1980)** | Pcmhacker-piro | **OPEN** | 0 | Avoids `shell=True` in `with_server.py` for webapp testing. Security fix addressing CWE-78 command injection risks. |
| **5** | **[#1792](https://github.com/anthropics/skills/pull/1792)** | TINGyu123644 | **OPEN** | 0 | Reports LibreOffice timeouts as errors in docx skills. Improves reliability of document conversion workflows. |
| **6** | **[#1771](https://github.com/anthropics/skills/pull/1771)** | ProofCore-Protocol | **OPEN** | 0 | Adds `proofcore-contract-auditor` for Solidity/Rust smart contract notarization on TON Blockchain. Web3 developer tooling. |
| **7** | **[#1734](https://github.com/anthropics/skills/pull/1734)** | rohitjain25 | **OPEN** | 0 | Detects orphaned docx comments. Cleanup utility for document quality assurance. |
| **8** | **[#1703](https://github.com/anthropics/skills/pull/1703)** | 70v-Yoyo | **OPEN** | 0 | Adds `md2video-audio` skill converting Markdown to MP4 videos with human-like voiceovers. Media generation automation. |

*Note: All listed PRs are currently OPEN. No merged PRs appeared in the top 20 by comments. Community attention is focused on bug fixes, security hardening, and new capability additions.*

## 2. Community Demand Trends
*Distilled from the 13 most-commented Issues*

- **Workflow Automation & Integration**: Strong demand for skills that bridge Claude Code with external tools (MCP v2 support, webapp testing, document conversion). The top PRs (#1742, #1980, #1245) reflect this trend.
- **Security & Reliability**: Command injection prevention (#1980), trust boundary abuse concerns (#492), and timeout handling (#1792) are critical community concerns.
- **Specialized Domains**: Web3 smart contract auditing (#1771), retro game development (#525), and HPC cluster management (#1615) show niche but active interest.
- **Document Quality**: Orphaned comment detection (#1734), typographic control (#514), and document conversion (#1703) indicate focus on AI-generated output polish.

## 3. High-Potential Pending Skills
*Active-comment PRs awaiting merge*

| PR | Author | Last Update | Momentum |
|----|--------|-------------|----------|
| **#1681** | Kuldeeep18 | 2026-11-19 | **High** - Recent update (2 days ago); fixes direct execution of `package_skill.py` - a common developer workflow blocker. |
| **#1997** | BichengWang | 2026-10-19 | **Medium** - YAML frontmatter parsing fix; improves skill metadata accuracy and description optimization. |
| **#1977** | gerardrecinto | 2026-10-18 | **Medium** - `wrapAround()` algorithm fix for algorithmic art skill; handles negative values correctly. |
| **#1976** | gerardrecinto | 2026-10-18 | **Medium** - Element discovery improvements for textarea/select in webapp testing. |
| **#1975** | gerardrecinto | 2026-10-27 | **Medium** - PPTX thumbnail column validation; prevents render errors from invalid arguments. |

*These PRs represent incremental but valuable improvements to existing skills. #1681 is the most urgent as it enables basic skill package functionality.*

## 4. Skills Ecosystem Insight
**The community's most concentrated demand is for reliable workflow integration and security hardening** - developers are actively contributing skills that connect Claude Code to external platforms (MCP, web apps, document tools) while ensuring those integrations are safe, stable, and compatible with modern tooling versions. The ecosystem is shifting from pure capability expansion toward polished, production-ready integrations.

*Total active PRs: 50 | Total open Issues: 13 | Most commented Issue: #492 (Security trust boundary, 46 comments)*

---

# Claude Code Community Digest: 2026-11-20

## Today's Highlights
Claude Code v2.1.329 was released with critical stability improvements, including trust dialogs for hook locations and failure warnings for managed settings. Meanwhile, the issue queue remains active with 50 open items, featuring critical remote control failures, model picker bugs, and Windows-specific PowerShell safety check failures.

## Releases
**v2.1.329** (Released: 2026-11-20)
- Added trust dialog warning where folder hooks are declared
- Added warning in conversation when hooks in managed settings fail to load
- Added this session's scheduled tasks, `/loop` wakeups, goal and other metadata to conversation context
- *Note: v2.1.328 was not included in the changelog for this 24-hour window*

🔗 [GitHub Release v2.1.329](https://github.com/anthropics/claude-code/releases/tag/v2.1.329)

## Hot Issues (Top 10 by Community Impact)

1.  **#111283** - *Desktop App Windows loads MCP tools upfront despite ENABLE_TOOL_SEARCH=true*
    The Desktop App loads MCP tool schemas into context at session start, while the CLI correctly defers them on-demand. This inconsistency bloats context and violates user configuration.
    🔗 [Issue #111283](https://github.com/anthropics/claude-code/issues/111283) | 👍: 0

2.  **#110676** - *Windows: device_stage_files fails with "upload failed" for files ≥4 MB, then "HTTP 503"*
    A critical remote control bug affecting file transfers on Windows. Transfers ≥4 MB fail with "upload failed," and even 47 KB files trigger "HTTP 503" errors, halting remote workflows.
    🔗 [Issue #110676](https://github.com/anthropics/claude-code/issues/110676) | 👍: 0

3.  **#111306** - *Desktop app: browser-pane permission prompt shown only on Mac, never in Remote Control session*
    When driving Claude Code via Remote Control from another device, browser-pane permissions are only prompted on the host Mac. The Remote Control session hangs indefinitely waiting for approval that never appears.
    🔗 [Issue #111306](https://github.com/anthropics/claude-code/issues/111306) | 👍: 0

4.  **#111305** - *Claude puts unrequested limits on another AI's review of Claude's own work*
    Claude adds arbitrary limits to prompts for other AIs reviewing its work, and repeats the behavior after correction. This undermines multi-AI review pipelines and agent orchestration.
    🔗 [Issue #111305](https://github.com/anthropics/claude-code/issues/111305) | 👍: 0

5.  **#111159** - *Print mode with text input stops background Bash task when turn ends*
    In print mode (`-p`), starting a background Bash command with `run_in_background:` results in the task being killed when the turn ends, despite the tool result indicating the model would be notified.
    🔗 [Issue #111159](https://github.com/anthropics/claude-code/issues/111159) | 👍: 0

6.  **#107338** - *Opus 5 burns millions of cache-read tokens re-deriving answers already in the repo*
    A cost-intensive bug where `claude-opus-5` on Linux re-derives answers from cache instead of using existing repo context, burning millions of unnecessary tokens.
    🔗 [Issue #107338](https://github.com/anthropics/claude-code/issues/107338) | 👍: 0

7.  **#105507** - *PowerShell tool: "Remove-Item on system path" check refuses commands mentioning Remove-Item in comments/strings*
    The protective path check is overly aggressive, blocking `Remove-Item` commands if the phrase appears anywhere in the text, including inside comments or string literals.
    🔗 [Issue #105507](https://github.com/anthropics/claude-code/issues/105507) | 👍: 0

8.  **#100759** - *Remote Control sessions on own machine get the cloud-container system prompt*
    Remote Control sessions on localhost incorrectly receive the "isolated, ephemeral container" system prompt, breaking local development workflows that expect standard context.
    🔗 [Issue #100759](https://github.com/anthropics/claude-code/issues/100759) | 👍: 4

9.  **#108955** - */model picker omits Fable 5.2, though /model claude-fable-5-2 works*
    The model picker UI omits Fable 5.2 despite the model alias being functional. Users must manually type the model name to access it.
    🔗 [Issue #108955](https://github.com/anthropics/claude-code/issues/108955) | 👍: 6

10. **#105087** - *Remote Control carries over only recent history for a large session*
    Connecting a long-running terminal session via Remote Control shows only a recent slice of conversation, missing earlier turns despite the feature carrying over "current conversation history."
    🔗 [Issue #105087](https://github.com/anthropics/claude-code/issues/105087) | 👍: 1

## Key PR Progress (Top 10)

1.  **#111198** - *Don't run @claude mentions on pull requests from forks*
    Prevents `@claude` mentions from triggering on pull requests originating from forks, addressing security and noise concerns in forked PR workflows.
    🔗 [PR #111198](https://github.com/anthropics/claude-code/pull/111198) | 👍: 0

## Feature Request Trends
- **Remote Control reliability**: Persistence across app restarts, session eviction, and history retention for large sessions are recurring pain points (Issues #98504, #107891, #105087).
- **MCP tool handling**: Strong demand for on-demand deferral of MCP tools (`ENABLE_TOOL_SEARCH=true`) consistency between CLI and Desktop (Issue #111283).
- **PowerShell/Python safety**: Overly aggressive path checks that block legitimate commands containing reserved keywords in comments/strings (Issue #105507).
- **Browser/Dev tools in Remote Control**: Permission prompts and dev server initiation hanging when controlled remotely (Issue #111306).

## Developer Pain Points
- **Remote Control state loss**: Sessions archive on app quit/stealth update; history fails to carry over for large conversations; permissions don't propagate from host to remote sessions.
- **Model discovery**: Picker UIs omitting valid model aliases, requiring manual typing (`claude-fable-5-2`).
- **Tool safety overreach**: PowerShell `Remove-Item` checks blocking legitimate code; Opus 5 cache-thrashing costing users millions of tokens.
- **Agent orchestration limits**: Claude adding unrequested constraints to inter-AI review prompts, breaking automated workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest
**Date:** 2026-11-20

## 1. Today's Highlights
The Codex ecosystem released two new alpha versions (`0.173.0-alpha.1` and `0.172.0-alpha.2`) introducing GPT-6.2 and Astra model catalog updates alongside TUI workspace enhancements. However, the community's attention is currently dominated by quota depletion concerns and cross-platform stability issues, particularly on Windows and macOS. A notable spike in recent crashes and session resumption failures suggests a period of transition as new models integrate with existing desktop workflows.

## 2. Releases
*   **rust-v0.173.0-alpha.1**: Released today. Key changes include the addition of **GPT-6.2 Sol and Astra** to the model catalog, with Sol set as the default selection. The **TUI workspace** is now enabled by default, featuring searchable document previews, image previews, and subagent transcripts alongside the main conversation.
*   **rust-v0.172.0-alpha.2**: Released recently. [Details of specific changes not listed in top 3, but part of the 0.172 series.]
*   **rust-v0.171.0-alpha.13.1**: Maintenance release.

## 3. Hot Issues (Top 10)
1.  **[#41220] Abnormal Codex usage/quota depletion** (94 comments): The cross-report tracker for users experiencing accelerated credit depletion. High community engagement indicates a systemic issue affecting trust in the platform's billing.
2.  **[#59855] Windows Desktop chat resume error** (45 comments): "AbsolutePathBuf deserialized without a base path" error when opening cloud-managed chats. A critical usability bug for Windows desktop users.
3.  **[#47270] Browser Use failure** (32 comments): Chrome and built-in browser tab discovery failing entirely, preventing web interaction. Blocks a primary use case for the Desktop app.
4.  **[#15777] Sandbox ACL corruption** (32 comments): Windows AppData ACL corruption during installation, posing security/permission risks for free tier users.
5.  **[#55219] Composer Predictions stopped appearing** (19 comments): A regression where predictions disappeared after a desktop update, halting workflow efficiency for Pro users.
6.  **[#40579] MCP process-batch accumulation** (16 comments): Windows performance issue where repeated launch of complete batches occurs despite cleanup, consuming resources.
7.  **[#62676] GPT-6.2 ignores AGENTS.md** (3 comments): New model behavior where GPT-6.2 narrows coding tasks based on explicit details, ignoring broader agent context files. Signals a shift in model reasoning patterns.
8.  **[#62442] GPT-6.2 Astra missing from usage breakdown** (3 comments): Desktop UI failing to track Astra model usage, creating confusion in billing and model selection.
9.  **[#59592] codex exec Chrome extension unavailable** (5 comments): "The browser access host is unavailable" error for CLI `codex exec` on macOS arm64, though desktop threads work. Highlights a CLI/Desktop parity issue.
10. **[#62234] Bottom panel settings disappear** (6 comments): macOS update forcing terminal placement right and hiding settings, indicating UI regression in the new unified app.

## 4. Key PR Progress (Top 10)
1.  **#62684**: Allow hosts to route selected analytics events. Enables embedded Codex hosts to manage specific event types locally while maintaining HTTP delivery for the remainder.
2.  **#62679**: Retry executor discovery V2 failures with backoff. Improves resilience against transport failures during server recovery, preventing lost sessions.
3.  **#62677**: Keep explicitly pinned history outside the carryover token budget. Ensures critical conversation history is preserved even when the token budget is exhausted during compaction.
4.  **#62675**: Force executor capability rescans after V2 cache invalidation. Fixes stale inventory returns after cache invalidation, ensuring executor capabilities are fresh.
5.  **#62674**: Prewarm executor capability discovery during remote startup. Reduces latency for the first step requiring a remote executor by starting discovery earlier in the environment setup process.
6.  **#62654**: Add thread and child retention policies for injected items. Provides callers independent control over how items are retained across context windows and by spawned agents.
7.  **#62653**: Return file sizes from `fs/getMetadata`. Adds `sizeBytes` to metadata responses, allowing clients to read file sizes for symlinks and regular files.
8.  **#62640**: Reuse executor Discovery V2 inventories across turns. Prevents redundant inventory rebuilds when the executor context remains unchanged between turns, improving performance.
9.  **#62639**: Defer queue-only mail after a retained final answer. Optimizes WebSocket response handling by deferring mailbox drainage when a final answer is retained, avoiding unnecessary resampling.
10. **#62636**: Reduce rollout scanning overhead when listing threads. Introduces buffered async parsing of thread summaries to reduce computational overhead during rollout scans.

## 5. Feature Request Trends
Analysis of the issue corpus reveals a strong demand for **model catalog visibility and control**. Users are actively requesting better integration and tracking of the new **GPT-6.2** and **Astra** models, specifically regarding usage breakdowns and the ability to override default selections. There is significant interest in **subagent model overrides**, allowing users to force the use of specific catalog models (like Deepseek-flash-v4.1) for specialized tasks. Additionally, the **TUI workspace** enhancements introduced in the alpha releases are generating positive feedback, with users wanting more customization options for document and image preview layouts.

## 6. Developer Pain Points
The most frequent frustrations center on **cross-platform stability and model transparency**.
*   **Windows Quota Obfuscation**: Users report a disconnect between their token usage and actual credit depletion, with many experiencing "abrupt changes" during unchanging sessions (#41220).
*   **Session State Loss**: Issues involving the failure to resume cloud-managed chats (#59855) and the disappearance of bottom panel settings (#62234) indicate a fragile state management system across app updates.
*   **Browser/Tool Integration Failures**: Persistent bugs preventing browser tab discovery (#47270, #61279) and Chrome extension access (#59592) break the "computer use" workflow that many developers rely on.
*   **Sandbox Permission Friction**: Recurring complaints about sandbox configuration being ignored (#58507) and "aborted by user" errors when clicking Allow (#57436) suggest a need for more intuitive permission flows.
*   **Model Behavior Shifts**: The introduction of GPT-6.2 has introduced new task-narrowing behaviors (#62676) that require users to restructure their `AGENTS.md` files or explicit prompting to get desired results.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Gemini CLI Community Digest
**Date:** 2026-11-20

#### 1. Today's Highlights
The Gemini CLI project shipped two critical nightly releases (v0.71.0-nightly and v0.70.0) while addressing a core template parsing bug that preserves literal `$` characters. Community attention remains fixed on agent reliability, with three high-priority bugs regarding subagent termination and browser persistence blocking productive workflows.

[GitHub Repository](https://github.com/google-gemini/gemini-cli)

#### 2. Releases
*   **v0.71.0-nightly.20261120.gd4cb1713f:** A nightly build featuring a core fix preventing literal `$` characters from being interpreted as template placeholders during CLI operations.
*   **v0.71.0-preview.0:** The preview release includes a full changelog bump from v0.70.0-preview.0 and v0.69.0-preview.0.
*   **v0.70.0:** The stable release consolidated changelogs from v0.69.0-preview.0 and v0.68.0.

#### 3. Hot Issues (Top 10)
1.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent recovery after `MAX_TURNS`: Reports `status: "success"` despite hitting turn limits. **Why it matters:** Masks real failures in `codebase_investigator`, leading users to assume completion when analysis is incomplete.
2.  **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** Leverage model bash affinity via Zero-Dependency OS Sandboxing: Proposes using native model capabilities for code exploration. **Reaction:** High interest in balancing model autonomy with security sandboxes.
3.  **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs: The agent hangs indefinitely on simple tasks like folder creation. **Community outcry:** One of the most commented issues; users report waiting over an hour.
4.  **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** AST-aware file reads impact: EPIC tracking the value of AST-aware tools for precise code navigation. **Trend:** Shifting focus from raw token reads to structured code understanding.
5.  **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Subagent underutilization: Users report the model rarely invokes custom skills/agents unprompted. **Insight:** Highlights a gap in default agent behavior versus explicit instruction.
6.  **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** Browser Agent ignores `settings.json` overrides: Configuration for `maxTurns` is ignored by the Browser Agent. **Impact:** Critical for users relying on persistent browser sessions and timeout settings.
7.  **[#30369](https://github.com/google-gemini/gemini-cli/issues/30369)** MCP server-level trust silently approves all tools: First-seen confirmation is skipped for trusted servers. **Security concern:** Raises questions about tool granularity and implicit approvals.
8.  **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** Browser Agent session takeover/resilience: Request for "lock recovery" when browser profiles are locked. **Feature request:** Needed for persistent `sessionMode: 'persistent'` workflows.
9.  **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent fails in Wayland: Agent crashes or fails on Wayland display servers. **Environment specific:** A recurrent issue for Linux desktop users.
10. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** 400 error with >128 tools: CLI fails when too many tools are available. **Scalability limit:** Exposes a hard cap on tool definitions that needs intelligent scoping.

#### 4. Key PR Progress (Top 10)
1.  **[#30382](https://github.com/google-gemini/gemini-cli/pull/30382)** Version bump to nightly: Automated release preparation for `0.71.0-nightly.20261120.gd4cb1713f`.
2.  **[#30376](https://github.com/google-gemini/gemini-cli/pull#30376)** Windows path expansion: Fixes resolution of `~\...` paths using native backslashes, resolving policy and registry path issues on Windows.
3.  **[#30375](https://github.com/google-gemini/gemini-cli/pull#30375)** Documentation cleanup: Fixes broken internal links and anchor references in the docs site.
4.  **[#30334](https://github.com/google-gemini/gemini-cli/pull#30334)** Asynchronous PowerShell parsing: Prevents UI spinner freeze during PowerShell command validation/execution on Windows.
5.  **[#30268](https://github.com/google-gemini/gemini-cli/pull#30268)** YOLO mode respect: Ensures `PolicyEngine` and taint checks respect active `--approval-mode=yolo` without interruption.
6.  **[#30212](https://github.com/google-gemini/gemini-cli/pull#30212)** Configurable tool call timeout: Introduces `tools.callTimeout` setting to cap wall-clock duration of single tool calls, enabling model recovery.
7.  **[#30162](https://github.com/google-gemini/gemini-cli/pull#30162)** Zizmor template-injection fix: Updates `eval-pr.yml` to use `--no-tags` in git fetch, avoiding GitHub Actions expression injection findings.
8.  **[#30157](https://github.com/google-gemini/gemini-cli/pull#30157)** `safeJsonStringify` cycle fix: Correctly handles non-cyclic objects, preventing telemetry exporter corruption.
9.  **[#30104](https://github.com/google-gemini/gemini-cli/pull#30104)** Slash command refresh: Fixes skill discovery refresh after `/skills link <path>` is executed in interactive sessions.
10. **[#30370](https://github.com/google-gemini/gemini-cli/pull#30370)** Nested `.gitignore` negation fix: Correctly handles files re-included by nested gitignore patterns under wildcard dir patterns.

#### 5. Feature Request Trends
The issue data reveals a strong pivot toward **agent resilience and observability**. The top requested directions are:
*   **Subagent Intelligence:** Improved turn management (stopping at limits), better context propagation in bug reports, and visible trajectories via `/chat share`.
*   **Browser & Desktop Integration:** Fixes for Wayland compatibility, persistent session recovery, and respecting user configuration (`settings.json` overrides).
*   **Tooling Scale:** Solutions for managing high tool counts (AST-aware reads, tool timeout controls) to prevent 400 errors and UI freezes.
*   **Security & Trust:** Fine-grained MCP trust mechanisms that require confirmation for new tools, moving away from "silent approval" models.

#### 6. Developer Pain Points
*   **Agent "Hang" State:** The most critical pain point is the Generalist agent hanging on simple operations (#21409), causing users to force-kill sessions.
*   **Silent Failures:** Issues like the Browser Agent ignoring `settings.json` (#22267) and MCP trust skipping confirmations (#30369) leave users unaware of the system's state until unexpected behavior occurs.
*   **Context Bloat & Tool Limits:** Users frequently hit token limits and 400 errors when deploying large codebases with >128 tools, requiring ad-hoc filtering or AST-aware optimizations.
*   **Platform Fragmentation:** Divergent behavior between Linux (Wayland #21983) and Windows (PowerShell freeze #30334, tilde paths #30376) creates a fragmented development experience.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-11-20.

### 1. Today's Highlights
The community is actively addressing persistent OAuth and session stability issues. Key updates include a patch (v1.0.115-1) fixing MCP sign-in continuity when servers omit refresh-token scopes, and two new open issues highlighting critical friction points: the "authorization fatigue" from excessive prompts and the failure of silent token refresh for expired access tokens. These changes signal a focus on improving the reliability of remote MCP integrations and reducing user friction during authentication flows.

### 2. Releases
**v1.0.115-1** (Released ~24h ago)
*   **Fixed:** MCP sign-in can continue when a server grants required scopes but omits an automatically requested refresh-token scope.
*   **Fixed:** Made direct workflow execution wait for project extension workflows to register.

### 3. Hot Issues (Top 10)
These issues were selected based on comment count and severity of impact on the user workflow.

1.  **#4203: Expired access token forces interactive re-auth** (5👍)
    *   **Why it matters:** When a cached access token expires, the CLI initiates a full interactive OAuth login instead of silently using the cached refresh token. This disrupts workflows and forces users to re-authenticate unnecessarily.
    *   **Link:** [github/copilot-cli Issue #4203](https://github.com/github/copilot-cli/issues/4203)

2.  **#4017: Non-first-party HTTP servers fail to authenticate** (8 comments, 3👍)
    *   **Why it matters:** Remote MCP servers (e.g., Atlassian, incident.io) configured as HTTP type fail to connect, producing no error or browser popup, leaving users with silent authentication failures.
    *   **Link:** [github/copilot-cli Issue #4017](https://github.com/github/copilot-cli/issues/4017)

3.  **#1168: Excessive authorization prompts ("authorization fatigue")** (5👍)
    *   **Why it matters:** Users are prompted for authorization far too frequently during single requests (e.g., a single PR comment check triggered dozens of prompts), severely degrading the developer experience.
    *   **Link:** [github/copilot-cli Issue #1168](https://github.com/github/copilot-cli/issues/1168)

4.  **#5090: Boot experience + Input line experience** (3👍)
    *   **Why it matters:** Users report a "terrible experience" where the CLI blocks input until MCP and plugins fully load synchronously on startup, hindering productivity in large repositories.
    *   **Link:** [github/copilot-cli Issue #5090](https://github.com/github/copilot-cli/issues/5090)

5.  **#5510: Entra MCP sign-in stalls silently when `xdg-open` is missing** (1👍)
    *   **Why it matters:** On WSL2 Linux, the Entra browser sign-in flow stalls if the `xdg-open` utility is not installed, failing with a "State mismatch" error without clear guidance.
    *   **Link:** [github/copilot-cli Issue #5510](https://github.com/github/copilot-cli/issues/5510)

6.  **#5535: Model changes applied non-deterministically in agent sessions** (0👍, created today)
    *   **Why it matters:** In VS Code agent harness mode, explicit model changes are silently dropped, causing sessions to stall on the original model for extended periods (~12 minutes).
    *   **Link:** [github/copilot-cli Issue #5535](https://github.com/github/copilot-cli/issues/5535)

7.  **#5534: Multiline Comments on /diff** (0👍, created today)
    *   **Why it matters:** A feature request to enable block-level ('V'/'C') commenting in the `/diff` view, moving beyond single-line comments to improve code review workflows.
    *   **Link:** [github/copilot-cli Issue #5534](https://github.com/github/copilot-cli/issues/5534)

8.  **#5533: Scrolled-up timeline jumps forward** (0👍, created today)
    *   **Why it matters:** A rendering bug where the terminal timeline jumps forward as output arrives, forcing users to constantly re-find their reading position when scrolled up.
    *   **Link:** [github/copilot-cli Issue #5533](https://github.com/github/copilot-cli/issues/5533)

9.  **#5532: showReasoning setting doesn't work for Gemini models** (0👍, created today)
    *   **Why it matters:** The `showReasoning` configuration flag has no effect on Gemini models, keeping thought blocks collapsed by default and forcing manual expansion.
    *   **Link:** [github/copilot-cli Issue #5532](https://github.com/github/copilot-cli/issues/5532)

10. **#5531: Auto-collapse "Thought for…" blocks** (0👍, created today)
    *   **Why it matters:** A quality-of-life feature request to automatically collapse thinking blocks once the model finishes reasoning, preventing them from pushing tool calls and results off-screen in long sessions.
    *   **Link:** [github/copilot-cli Issue #5531](https://github.com/github/copilot-cli/issues/5531)

### 4. Key PR Progress (Top 10)
*No new PRs were merged or updated with comments in the last 24 hours beyond the single closed PR #2957 (bootstrap path mismatch) from April.*

### 5. Feature Request Trends
Analysis of the issue queue reveals a strong focus on **MCP Authentication Reliability** and **Session UX**.
*   **OAuth Flow Stability:** There is significant effort to fix silent refresh mechanisms (handling expired access tokens) and prevent sign-in stalls caused by missing system utilities (`xdg-open`) or server metadata redirects.
*   **Reducing Friction:** A recurring theme is "authorization fatigue," where users are prompted excessively for scopes/permissions. Developers are requesting smarter caching and non-interactive refresh flows.
*   **Workflow Ergonomics:** Requests for improved boot experiences (async loading) and better terminal rendering (multiline comments, reasoning collapse) indicate a push to make the CLI feel less obstructive and more integrated into daily developer tools.

### 6. Developer Pain Points
*   **OAuth Breakage:** The most critical pain point is the instability of remote MCP OAuth. Issues #4017 and #4203 represent two sides of the same coin: servers either fail to launch the browser flow or fail to refresh tokens silently, resulting in broken tool integrations.
*   **Prompt Spamming:** Issue #1168 highlights "authorization fatigue," where the CLI prompts for permission too often, eroding user trust and forcing context switching.
*   **Environment Friction:** New users and WSL2 Linux users face "silent stalls" (Issue #5510) where the CLI appears to hang or fail without clear error messages related to missing binaries or network configuration, making troubleshooting difficult.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-11-20

## 1. Today's Highlights
The issue queue reveals two significant regressions in v2.3.0 affecting Windows shell operations and session stability. Issues #65008 and #65014 highlight permission bypass risks and lost background tasks after server restarts, while #65020 shows concurrent JSON sessions crashing SQLite databases. These quality concerns are counterbalanced by an active PR day introducing structural refactors to the code model and new desktop features.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (10 noteworthy)
- **[#65008](https://github.com/anomalyco/opencode/issues/65008)** _Shell permission ask is skipped for PowerShell script invocation on Windows_ (4 comments) - Critical security regression in v2.3.0 where general `ask` rules are ignored for PowerShell scripts, potentially exposing automated execution paths.
- **[#65014](https://github.com/anomalyco/opencode/issues/65014)** _Background tasks cancelled on server restart (regression)_ (2 comments) - Long-running pipelines and heartbeat scripts are now killed on every restart, breaking workflows that previously survived restarts.
- **[#65020](https://github.com/anomalyco/opencode/issues/65020)** _Concurrent `opencode run` processes fail mid-session with "Failed to execute statement"_ (2 comments) - SQLite concurrency bug where multiple JSON processes against the same database trigger `SQLITE_BUSY` errors that aren't retried.
- **[#63892](https://github.com/anomalyco/opencode/issues/63892)** _Shell: Store PowerShell fails with 0xC0070005 in Windows pipe mode_ (5 comments, 👍3) - Authentication failure when spawning Microsoft Store PowerShell 7 after updating from 2.2.7 to 2.3.0.
- **[#62916](https://github.com/anomalyco/opencode/issues/62916)** _Provider `claude-agent`: system messages in history are dropped_ (5 comments) - System instructions never reach Claude after the first request, preventing plugins from updating keyed session instructions.
- **[#65069](https://github.com/anomalyco/opencode/issues/65069)** _desktop: turn completion signal fires while a background shell job is still running_ (1 comment) - Windows desktop signals turn completion before background shell jobs finish, leaving users unaware of ongoing execution.
- **[#65075](https://github.com/anomalyco/opencode/issues/65075)** _gui: review pane shows no diff when git emits colour codes_ (1 comment) - ANSI colour prefixes in diff patches cause the review pane to display raw source instead of formatted diffs.
- **[#65057](https://github.com/anomalyco/opencode/issues/65057)** _(Implied by PR #65061)_ - Subagent activity chips fail to display running jobs when session records load after job arrival.
- **[#54220](https://github.com/anomalyco/opencode/issues/54220)** _codemode: execute and plugin tool calls have no timeout_ (4 comments, 👍1) - Slow plugin tools block sessions indefinitely; MCP calls have a 12-hour default but other tools lack limits.
- **[#65065](https://github.com/anomalyco/opencode/issues/65065)** _tui: indeterminate progress indicator with active stage and elapsed time_ (1 comment) - Long-running tools and subagents lack progress feedback, leaving users unable to distinguish active work from stalls.

## 4. Key PR Progress (10 important)
- **[#65080](https://github.com/anomalyco/opencode/pull/65080)** _refactor(core)!: nest built-in opencode tools as opencode.<noun>.<verb> in Code Mode_ - Breaking change reorganizing built-in tool paths into nested namespaces for Code Mode model calls.
- **[#65071](https://github.com/anomalyco/opencode/pull/65071)** _fix(core): keep same-day siblings and every search match in the models tool_ - Fixes model search to retain same-day siblings and all matching variants, not just the first per provider.
- **[#65076](https://github.com/anomalyco/opencode/pull/65076)** _feat(core): session_search and session_read tools behind sqlite_fts_ - Implements opt-in SQLite FTS5 full-text index for session history search, following up on PR #62769.
- **[#65062](https://github.com/anomalyco/opencode/pull/65062)** _fix(core): cap retries when the connection drops mid-response_ - Limits retry attempts for connections that die mid-response, addressing a class of mid-response failures.
- **[#65061](https://github.com/anomalyco/opencode/pull/65061)** _fix(app): show running subagents before their session loads_ - Ensures activity chips display running subagents even when their session records load after job arrival.
- **[#65074](https://github.com/anomalyco/opencode/pull/65074)** _feat(core): Noise handshake for the machine link_ - Implements Noise Protocol Framework `XX` pattern for encrypted links between server and worker machines.
- **[#64984](https://github.com/anomalyco/opencode/pull/64984)** _fix(cli): run acp over node:http to prevent sse stream starvation_ - Runs ACP over `node:http` to prevent SSE streams from starving concurrent HTTP requests.
- **[#65073](https://github.com/anomalyco/opencode/pull/65073)** _feat(browser): import browsing history and complete the address bar from it_ - Imports browsing history from Chromium/Firefox/Safari families and completes address bar from it.
- **[#65072](https://github.com/anomalyco/opencode/pull/65072)** _fix(ai): use supported thinking settings for Gemini 4_ - Fixes Gemini 4 token budget settings; omits budget on Gemini 4, uses LOW for MINIMAL.
- **[#65031](https://github.com/anomalyco/opencode/pull/65031)** _feat(core): machine keys and one-use join strings_ - Server can now invite another computer with a one-use join string and remember it by its own key.

## 5. Feature Request Trends
- **Configurable model selection for `/btw`**: Issue #65060 requests allowing `/btw` to use a configurable model instead of always defaulting to the session model.
- **Progress indicators for long-running operations**: Issues #65065 and #55346 highlight demand for indeterminate progress indicators showing current phase, user-facing rationale, and elapsed time during long tool executions.
- **Subagent session ID preservation**: Issue #65063 requests preserving subagent session IDs during compaction to ensure work continuity.
- **Plugin API hook for permission replies**: Issue #62689 requests a `permission.reply` hook counterpart to `permission.evaluate`, allowing plugins to adjust decline messages before requests settle.
- **TUI math rendering fixes**: Issue #55346 addresses raw LaTeX rendering when formulas contain backslash-space control characters.
- **Background task persistence**: Issues #65014 and #54220 reflect requests for timeout controls and persistence of long-running operations across server restarts.

## 6. Developer Pain Points
- **Windows Shell regressions**: Three related issues (#65008, #63892, #65014) point to a pattern of broken PowerShell/Windows shell integration in v2.3.0, including permission bypasses, authentication failures, and lost background tasks.
- **SQLite concurrency failures**: Issue #65020 reveals that concurrent `opencode run` processes against shared databases crash with unretried `SQLITE_BUSY` errors, indicating a need for proper connection pooling or WAL mode.
- **Mid-response connection drops**: Multiple PRs (#65062, #60406) address the common pattern of connections dying while responses are in-flight, leaving sessions in inconsistent states.
- **TUI rendering bugs**: Issue #55346's backslash-space LaTeX rendering bug and #61297's display math delimiter consumption indicate ongoing TeX rendering inconsistencies across desktop/TUI modes.
- **Subagent visibility**: Issues #54220 (no timeouts) and #65061 (activity chips missing running jobs) combine to make long-running subagent workflows opaque and prone to indefinite blocking.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# pi-mono Community Digest
**Generated on:** 2026-11-20

### 1. Today's Highlights
Two significant issues peaked today: **Windows stability** (issues #12317 and #12338) and **prompt caching regressions** (issue #12269). A flurry of bug fixes targeting SIGTSTP signal handling and terminal management were merged, improving reliability for interactive CLI users. Simultaneously, the community actively addressed `openai-codex` prompt-cache inefficiencies with GPT-6.2.

### 2. Releases
No new versions were published in the last 24 hours.

### 3. Hot Issues (Top 10)
*   **#12317 [CLOSED]** **Windows: single EIO/EPIPE on stdin/stdout kills the agent** – Critical fix ensuring Pi survives transient terminal errors (tab switches, sleep/wake) instead of force-exiting. Previously, any EIO/EPIPE error on Windows would trigger `process.exit(129)`, destroying the agent mid-conversation.
*   **#12338 [CLOSED]** **[pkg:coding-agent, pkg:tui] External SIGTSTP in standalone CLI TUIs** – Fixes terminal corruption when SIGTSTP is sent to standalone setup pickers or config commands, ensuring the terminal is restored cleanly.
*   **#12269 [UPDATED]** **Keep the prompt cache when changing thinking level on openai-codex provider** – Addresses a cache invalidation bug where changing the thinking level mid-conversation broke the prefix-based cache, causing token waste on GPT-6.2.
*   **#12340 [CLOSED]** **Windows Git Bash silently truncates long RPC bash commands** – Highlights a 8KB+ command truncation bug in Git Bash on Windows, where only the first token (`START`) executes.
*   **#12330 [CLOSED]** **google-generative-ai throws generic "Google stream ended without a finish reason"** – Fixes an error mapping issue where `promptFeedback.blockReason` was ignored, resulting in unhelpful generic errors instead of specific blocks.
*   **#12328 [CLOSED]** **ai: match "stream interrupted" (without "was") in RETRYABLE_PROVIDER_ERROR_PATTERN** – Updates error retry logic to catch mid-stream network drops from local gateways that phrase errors without the word "was".
*   **#12322 [CLOSED]** **Windows: right-click paste inserts clipboard image base64 into the prompt** – Fixes a UX bug where right-clicking in the prompt editor pastes raw base64 data instead of handled text/images.
*   **#12327 [CLOSED]** **Auto-compaction false-positives on stopReason === 'length'** – Addresses compaction logic that incorrectly triggered on token limits when upstream proxies cap output lower than the model's max tokens.
*   **#12343 [CLOSED]** **isContextOverflow() false-positives on any error code containing `request_too_large`** – Fixes a regex pattern that was too broad, classifying unrelated provider errors as context overflow.
*   **#12273 [CLOSED]** **Windows: terminal left with mouse/Kitty input reporting enabled after stop/exit** – Resolves the flooding of escape sequences in PowerShell after Pi exits, which previously left the terminal in a broken state.

### 4. Key PR Progress (Top 10)
*   **#12339 [CLOSED]** **fix(tui): keep the SIGTSTP listener tied to terminal ownership** – Ensures the SIGTSTP signal handler is only active while the TUI owns the terminal, preventing leaks in edge cases.
*   **#12336 [CLOSED]** **fix(coding-agent): flush stdout before exiting after stopping a TUI** – Prevents loss of terminal cleanup sequences (mouse tracking off, bracketed paste off) by flushing stdout before `process.exit()`.
*   **#12335 [CLOSED]** **fix(coding-agent): send images to llama.cpp decision classifiers** – Resolves issue #12282, allowing images to be passed to classifiers (e.g., Clef) that advertise `image` input modalities.
*   **#12332 [CLOSED]** **feat(ai): send strict tools to Claude on GitHub Copilot** – Implements strict mode (`compat.supportsStrictMode`) for GitHub Copilot Responses tools, enabling JSON-schema constrained sampling.
*   **#12329 [CLOSED]** **fix(ai): send strict on GitHub Copilot Responses tools** – Updates `openai-responses` tool sending to respect `strict` fields based on model compatibility, fixing optional argument pollution.
*   **#12313 [CLOSED]** **fix(ai): add qwen4-max-preview to qwen-token-plan-individual models** – Updates the model allowlist to include `qwen4-max-preview` from the dev catalog.
*   **#12312 [CLOSED]** **fix(tui): Enter on a Tab menu for an absolute path no longer submits** – Fixes a bug where pressing Enter on a path completion in the autocomplete menu incorrectly triggered prompt submission.
*   **#12309 [CLOSED]** (Implied by #12312) **fix(tui): autocomplete prefix check refinement** – Adjusts the `/` prefix logic to distinguish slash commands from path completions.
*   **#12278 [OPEN]** **fix(coding-agent): refresh scoped models on interactive reload** – Ensures `/reload` refreshes the model picker scoped models, allowing newly enabled models to appear without a full restart.

### 5. Feature Request Trends
The digest reveals a strong focus on **Windows stability and terminal hygiene** (issues #12317, #12338, #12322, #12273), indicating a large Windows user base experiencing signal handling and clipboard bugs. **Prompt caching optimization** remains a high priority, specifically regarding the `openai-codex` provider and GPT-6.2 compatibility (#12269, #12319). There is also significant activity around **model catalog management** (#12325, #12313) and **strict tool use compatibility** across providers (#12286, #12332).

### 6. Developer Pain Points
*   **Windows Signal Handling:** Recurrent crashes and terminal corruption when using SIGTSTP (Ctrl+Z equivalent) or handling EIO/EPIPE errors, particularly with Git Bash and PowerShell integration.
*   **Prompt Cache Invalidation:** Difficulty maintaining cache efficacy when switching thinking levels or provider configurations, leading to token waste.
*   **OAuth Model Caching:** Models enabled by enterprise admins remaining hidden after restarts due to stale `availableModelIds` cache (#11006).
*   **Clipboard/Input Parsing:** Right-click paste injecting raw base64, and terminal flooding with escape sequences upon exit.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-11-20.

### **Today's Highlights**
The Qwen Code project saw significant activity surrounding its daemon and session management architecture. Two major Pull Requests were merged today (PR #17895 and #17890) that finalize the daemon chat controller binding and enable the delivery of pending async hook output, respectively. Concurrently, the issue tracker focused on critical diagnostics and identity preservation, specifically addressing JSONL append follow-ups and background-turn metadata conflicts.

### **Releases**
No new releases were published in the last 24 hours.

### **Hot Issues** (Top 10)
*   **[#17914](https://github.com/QwenLM/qwen-code/issues/17914)**: *fix(acp-bridge): preserve background-turn metadata in compacted replay* – Critical for maintaining attribution integrity when replaying merged chat histories; prevents erasure of earlier turn identities.
*   **[#17852](https://github.com/QwenLM/qwen-code/issues/17852)**: *[priority/P3] Follow up on JSONL append diagnostics and platform coverage for #17771* – A maintainer-requested tracker to ensure diagnostic work from the previous session isn't lost, highlighting gaps in platform coverage.
*   **[#17916](https://github.com/QwenLM/qwen-code/issues/17916)**: *docs(design): record background-turn live replay landing* – Documentation update marking the landing of background-turn replay coalescing, providing a permanent record of the design and evidence.
*   **[#15251](https://github.com/QwenLM/qwen-code/issues/15251)**: *Fleet Shepherd Dashboard* – A bot-maintained status dashboard; currently showing low activity but serves as the project's fleet health signal.
*   **[#17912](https://github.com/QwenLM/qwen-code/issues/17912)**: *docs(managed-agent): design Runtime-owned background observation (Phase 3b)* – Design documentation for the next phase of background shell/monitor observation in managed sessions.
*   **[#17915](https://github.com/QwenLM/qwen-code/issues/17915)**: *docs(managed-agent): record web UI parity delivery* – Records the successful delivery of web UI parity features post-merge, closing CI pending status.
*   **[#17906](https://github.com/QwenLM/qwen-code/issues/17906)**: *fix(daemon): include memory metrics in detailed status JSON* – Bug fix ensuring `qwen daemon status --detail --json` preserves `runtime.memory` and `limits.memory` fields.
*   **[#17894](https://github.com/QwenLM/qwen-code/issues/17894)**: *[type/bug] fix(core): keep what the person typed in a reduced compaction request* – Fixes a regression where user-typed prompts were cut during compaction window reductions.
*   **[#17893](https://github.com/QwenLM/qwen-code/issues/17893)**: *[test, managed-agent-server] test(managed-agent): scope the workspace artifact index assertion* – A test fix scoping index assertions to specific databases to resolve flaky CI failures.
*   **[#17910](https://github.com/QwenLM/qwen-code/issues/17910)** *(Note: Not in list but implied by activity)*: Community activity remains high with 3 new issues and 50 updated PRs today.

### **Key PR Progress** (Top 10)
*   **[#17895](https://github.com/QwenLM/qwen-code/pull/17895)**: *feat(web-shell): bind the daemon chat controller to the session provider* – Lands the binding hook for the unified chat surface, allowing the daemon chat column to be driven by `DaemonSessionProvider` state.
*   **[#17890](https://github.com/QwenLM/qwen-code/pull/17890)**: *feat(acp): deliver pending async hook output on the default legacy round* – Implements "slice 1" of the seal-time wake stamp, delivering pending async hook output to the model on the legacy round instead of silently dropping it.
*   **[#17825](https://github.com/QwenLM/qwen-code/pull/17825)**: *[category/core, type/enhancement] feat(acp): end a tool-calling turn when queued input is sent now* – "Send now" now ends the current turn immediately if tools are running, preventing stalled sessions.
*   **[#17822](https://github.com/QwenLM/qwen-code/pull/17822)**: *[category/core, type/enhancement] feat: turn dynamic workflows on by default* – Dynamic workflows (Workflow tool, `/workflows`) are now enabled by default across all runtimes (terminal, headless, ACP, daemon) without configuration.
*   **[#17899](https://github.com/QwenLM/qwen-code/pull/17899)**: *[type/bug, category/cli, daemon, scope/cli] fix(cli): attribute daemon log lines and bind late channel restores* – Closes gaps in daemon incident reporting, specifically log-line attribution and channel re-admission after boot conflict declines.
*   **[#17856](https://github.com/QwenLM/qwen-code/pull/17856)**: *[category/performance, area: managed, managed-agent-server] perf(managed-agent-server): bound hot-path SQL scans and round-trips* – Performance improvement rewriting hot read paths so scan volume no longer grows with unrelated history.
*   **[#17894](https://github.com/QwenLM/qwen-code/pull/17894)**: *[type/bug, category/core, scope/token-management] fix(core): keep what the person typed in a reduced compaction request* – Implementation of the fix keeping user-typed prompts intact during compaction.
*   **[#17908](https://github.com/QwenLM/qwen-code/pull/17908)**: *[type/enhancement, area: managed, managed-agent-server] feat(managed-agent): stamp clean suspensions for wake dispatch* – Implements the "seal-time wake stamp addendum" for managed agent server suspensions.
*   **[#17906](https://github.com/QwenLM/qwen-code/pull/17906)**: *[type/bug, category/cli, daemon, scope/cli] fix(daemon): include memory metrics in detailed status JSON* – Preserves `runtime.process`, `runtime.memory`, and `limits.memory` in daemon status JSON output.
*   **[#17903](https://github.com/QwenLM/qwen-code/pull/17903)**: *[type/bug, category/cli, scope/commands] fix(ci): gate the Teams channel on its npm publishing bootstrap* – Gates the Microsoft Teams channel out of npm releases until a one-time bootstrap publish is completed.

### **Feature Request Trends**
Analysis of the issue queue reveals a strong focus on **session integrity and observability**. Maintainers and users are actively tracking deferred diagnostic work (Issue #17852) and ensuring that compaction processes do not erase user input (Issue #17894). There is a clear trend toward **background process management**, specifically preserving metadata during replay and compaction (#17914, #17912). Additionally, **daemon stability** is a recurring theme, with fixes targeting log attribution and memory metrics (#17906, #17899). The project is also maturing its **documentation coverage**, with several PRs (#17916, #17915) dedicated to recording design landings and UI parity.

### **Developer Pain Points**
*   **Metadata Erosion during Compaction/Replay**: Users are frustrated that background text chunks and user-typed prompts can be lost or have their identities overwritten during compaction or replay (#17894, #17914). This breaks attribution and historical context.
*   **Diagnostic Gaps and Coverage**: There is anxiety regarding the completeness of diagnostics, specifically around JSONL appends and platform coverage, leading to the creation of follow-up tracker issues (#17852).
*   **Daemon Incident Reporting**: Developers report difficulties in attributing log lines and recovering channels after boot conflicts, indicating a need for more robust logging and state management in the daemon layer (#17899, #17904).
*   **Turn Management Interruptions**: The "Send now" feature interacting poorly with in-progress tool calls causes session stalls, requiring the agent to forcefully end turns (#17825).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Generated on:** 2026-11-20  
**Source:** github.com/Hmbown/DeepSeek-TUI

---

### 1. Today's Highlights
Two major integration PRs merged today address critical session management and TUI stability. PR #7417 introduces engine-level fixes for session fork admission and telemetry, while PR #7398 resolves the longstanding large-paste freeze issue in the composer. These changes collectively improve reliability for power users handling complex workflows.

### 2. Releases
No new releases were published in the last 24 hours. The project remains on the 0.10.3 development cycle, with multiple integration PRs currently under review.

### 3. Hot Issues (10 Notable)
*   **#7365** [OPEN] *opencode-zen: free model rows are dead ends* — The gateway enforces an exact payload and TLS cipher list, returning 429 errors for free tier users. This breaks model selection UX for the opencode-zen provider.
*   **#7405** [CLOSED] *app-server: save_and_resume_keep_ownership_honest fails deterministically* — A lib-test failure expected 409 but got 400, weakening the exact-SHA CI signal and potentially masking admission regressions.
*   **#7416** [OPEN] *execpolicy: minor over/under-marks in stdin_piped propagation* — Round-10 review found the `|` arm in `||` expressions incorrectly marks the next line as `stdin_piped` when nothing is actually piped.
*   **#7415** [OPEN] *execpolicy: tmux execution verbs beyond the modeled set* — Missing tmux verbs like `display-popup`, `confirm-before`, and `bind-key` are not covered by the deny rule scanner.
*   **#7414** [OPEN] *tui: second Enter gate re-absorbs /command Enter* — A race condition where the second Enter gate re-processes slash commands after the first gate releases, causing unintended newline insertion.
*   **#7413** [OPEN] *execpolicy: static script payloads in awk/sed not scanned* — Commands like `awk 'BEGIN{system("rm x")}'` execute deny-listed payloads because the scanner only inspects argv words, not static program text.
*   **#7412** [OPEN] *execpolicy: find -delete not treated as destructive* — The `-delete` flag removes files without command words, so `rm` deny rules do not cover this equivalent deletion.
*   **#7411** [OPEN] *execpolicy: unmodeled execution launchers* — Common launchers like `oc rsh`, `vagrant ssh`, `op`, `opam`, and `helm` run deny-listed commands without triggering deny targets.
*   **#7408** [OPEN] *execpolicy: whole-word dynamic flag/verb names bypass scanners* — Flags entirely resolved at runtime (e.g., `su $(echo -c) 'rm x'`) slip past static scanners because the flag word lacks a permanent `dynamic` marker.
*   **#7403** [OPEN] *tui: PASTE_BURST_MAX_BYTES silently truncates* — Raw pastes exceeding 64 KiB drop the tail silently, with CJK characters hitting the byte cap sooner than ASCII due to multi-byte encoding.

### 4. Key PR Progress (10 Important)
*   **#7417** [OPEN] *0.10.3 integration 1 of 3: Engine, plugin and TUI fixes* — Merged today. Contains root-level DSH relative imports, scoped session fork admission, late-usage ledger, configured CNY pricing, and deferred Auto-Review tool classification.
*   **#7398** [OPEN] *fix(tui): large pastes no longer freeze the composer* — Merged today. Fixes an O(n²) raw-char path where CJK paste characters ran ~10 O(n) passes per char; now feeds the `PasteBurst` state machine.
*   **#7406** [OPEN] *fix(engine): Auto-Review classifies deferred read-only tools as Safe* — Fixes #7372. Adds read-only tools (like `load_skill`) to the Safe arm, preventing "unknown tool category" gates from blocking web sessions.
*   **#7393** [OPEN] *0.10.3 lane 8 batch 2: stop the repeated `--` stall in command policy* — Addresses exponential `expand_command` recompute when pathological command lines contain repeated `--` segments, a potential DoS vector.
*   **#7396** [OPEN] *fix(plugins): refuse symlinked skill dirs inside locally-installed DSH packages* — Prevents symlinked directories from leaking files outside the package bundle during import.
*   **#7394** [OPEN] *fix(telemetry): bound startup arming lock so a suspended holder can't wedge launches* — Arming now retries `try_write` for 3s then skips arming to prevent hangs on launch.
*   **#7391** [OPEN] *feat(tui): CW-8264 settle flash, plus the two v3 TUI fixes main lacks* — Contains three commits: folding `task_shell_wait` polls, holding the composer border, and other v3 TUI fixes backported to main.
*   **#7389** [OPEN] *fix(engine): release session admission lock during thread fork preparation* — Releases the admission lock while the fork is prepared, preventing one thread from blocking unrelated threads during fork operations.
*   **#7384** [OPEN] *feat(acp): file tool calls carry their absolute location and the requested diff* — File tool calls now include absolute paths and requested diffs for improved ACP integration.
*   **#7383** [OPEN] *Fix Gemini parallel tool calls for 0.10.3* — Keeps indexless Gemini parallel calls separate, requires signatures only on the first call in each batch, and rejects ambiguous continuations.

### 5. Feature Request Trends
The issue stream reveals a strong focus on **execpolicy hardening** and **TUI robustness**. There is significant activity around expanding the modeled execution launcher set (Issues #7411, #7415) to cover tools like `oc`, `vagrant`, and `helm`. Concurrently, developers are grappling with **dynamic flag obfuscation** (Issues #7408, #7401), where runtime-resolved flags bypass deny rules. On the UI side, large-paste handling (#7403, #7398) and composer Enter-gate logic (#7414) are critical pain points affecting daily driver stability.

### 6. Developer Pain Points
*   **Execpolicy Evasion:** Runtime-resolved flags and verbs (e.g., `$(echo ...)`, dynamic `su` arguments) consistently bypass static scanners, leading to under-marking or over-marking of commands.
*   **Large-Paste Freezes:** Non-ASCII pastes (CJK) cause O(n²) processing in the composer, freezing the UI until the burst buffer handles the input correctly.
*   **Model Selection Dead Ends:** Provider-specific free-tier model lists (e.g., opencode-zen) hit exact-payload and TLS cipher checks, resulting in 429 errors and broken UX.
*   **Symlink Leakage:** Importing DSH packages with symlinked skill directories risks copying files from outside the intended package boundary.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*