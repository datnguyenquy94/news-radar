# AI CLI Tools Community Digest 2026-11-13

> Generated: 2026-11-13 06:14 UTC | Tools covered: 10

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

### Ecosystem Overview
The AI CLI tools ecosystem on 2026-11-13 is characterized by a tension between rapid feature iteration and operational stability. Major players like Anthropic's Claude Code and OpenAI's Codex are releasing significant experimental features (Code Mode, TUI enhancements) while simultaneously grappling with critical regressions in theming, session management, and platform-specific bugs. Meanwhile, specialized tools like Kimi Code and Pi focus on incremental stability and model integration fixes. The landscape reflects a maturing market where core functionality (editing, tool use, session persistence) is increasingly expected to be "just working," placing pressure on releases that introduce breaking changes or new modalities without adequate polish.

### Activity Comparison

| Tool | Issues Opened Today | PRs Merged/Updated Today | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (Top Hot Issues) | 1 (PR #81672) | v2.1.323 released (~24h ago); marked by immediate regressions. |
| **OpenAI Codex** | 10 (Top Hot Issues) | 10 (Key PR Progress) | v0.168.0 stable; v0.171.0-alpha.1 released. |
| **Gemini CLI** | 10 (Top Hot Issues) | 10 (Key PR Progress) | No new versions in last 24h. |
| **GitHub Copilot CLI** | 10 (Top Hot Issues) | 2 (Implicit in release) | v1.0.111 released; v1.0.110 released previously. |
| **Kimi Code CLI** | 0 | 1 (PR #1777 closed) | No new versions in last 24h. |
| **OpenCode** | 10 (Top Hot Issues) | 20 (Key PR Progress) | v2.2.7 cycle active; hotfixes shipped. |
| **Pi** | 10 (Notable Issues) | 10 (Key PR Progress) | No new releases in last 24h. |
| **Qwen Code** | 10 (Top Hot Issues) | 20 (Key PR Progress) | v1.0.0-preview.1, SDK v0.1.33, Desktop v0.27.3 released. |
| **DeepSeek TUI** | 10 (Notable Issues) | 10 (Key PR Progress) | No new releases in last 24h. |
| **Grok Build** | 0 | 0 | No activity. |

### Shared Feature Directions
*   **Session & State Persistence:** A near-universal concern. Claude Code users struggle with `subagentStatusLine` removal and auto-resume bugs; Codex faces "Unable to load organization settings" loops; Pi reports cache warming failures and model list disappearance; OpenCode deals with session restore logic. Across Claude, Codex, Pi, and OpenCode, there is demand for reliable session resumption, token management, and persistent configuration.
*   **Cross-Platform & Permission Granularity:** Windows sandbox permission failures (#59038, #61268) and macOS TUI stability issues (#48930, #61258) are recurring. GitHub Copilot CLI and OpenCode both address Windows-specific binary baseline mismatches and keychain/authentication friction. There is a strong demand for finer-grained permission controls, particularly regarding shell command chaining (`;`, `&&`) and subagent tool inheritance.
*   **Model & Context Transparency:** Users are demanding better visibility and control over model behavior. This includes the propagation of `reasoning_effort` settings (Pi, GitHub Copilot CLI), accurate context window reporting (Pi), and the ability to customize model/effort settings per session (Claude Code). A trend toward "AST-aware" tooling is evident in Gemini CLI and Qwen Code to reduce token noise.
*   **Plugin & Hook Fragility:** Plugin systems are reported as fragile. Claude Code highlights import dependencies on directory naming; GitHub Copilot CLI notes `.instructions.md` files being silently ignored; OpenCode addresses browser tool leakage into child sessions.

### Differentiation Analysis
*   **Feature Focus:** Claude Code and OpenAI Codex are the primary drivers of experimental feature velocity, introducing "Code Mode" and TUI workspaces respectively, but paying a stability tax. Qwen Code and OpenCode are focused on stabilizing 1.0 releases and expanding multimodal capabilities (video/image generation). Pi and GitHub Copilot CLI prioritize backend infrastructure, model adapter compatibility, and catalog management. Kimi Code and DeepSeek TUI focus on niche architectural enhancements (rule systems, interoperability).
*   **Target Users:** Claude Code and Codex target power developers and enterprise teams requiring heavy code generation and agent orchestration. OpenCode and Qwen Code cater to a broader developer audience focusing on tooling integration and UI/UX. Pi and GitHub Copilot CLI serve users deeply integrated into specific vendor ecosystems (GitHub, Google). Kimi Code and DeepSeek TUI are more specialized, focusing on rule hierarchies and terminal interoperability.
*   **Technical Approach:** Claude Code and OpenAI Codex utilize heavy TUI/UIs with experimental "Code Mode" and "Session" features. OpenCode and Qwen Code leverage TypeScript SDKs and structured rule systems. Pi and GitHub Copilot CLI focus on adapter patterns and catalog synchronization. DeepSeek TUI emphasizes low-level terminal text parsing and ANSI handling.

### Community Momentum & Maturity
*   **Most Active:** **OpenCode** and **Qwen Code** show the highest PR activity (20+ each), indicating rapid development cycles and a strong focus on closing the gap toward stable 1.0/2.0 releases. **Claude Code** and **Codex** have high issue counts, reflecting large, active user bases that are quick to report regressions in exchange for new features.
*   **Rapidly Iterating:** **Claude Code** is iterating fastest on features (Code Mode) but is currently in a "feature vs. stability" ditch, with v2.1.323 introducing breaking changes quickly. **OpenCode** is rapidly shipping hotfixes (Windows baseline, browser leaks) ahead of a stable v2.2.7 release.
*   **Maturing/Stabilizing:** **Kimi Code** and **Pi** show lower issue velocity but focus on critical infrastructure fixes (reasoning_effort propagation, cache warming), suggesting a mature user base focused on reliability over new capabilities. **Grok Build** shows no activity, indicating a paused or low-engagement phase.

### Trend Signals
*   **The "Stability Tax" of AI Features:** The most prominent signal is that major releases introducing new agentic capabilities (Code Mode, TUI workspaces) are concurrently breaking core UI/UX elements (theming, session persistence). This suggests the industry is still optimizing the balance between innovative agentic features and the reliability of the underlying tooling.
*   **Interoperability as a Differentiator:** There is a clear shift toward making CLI tools interoperable. The integration of GitHub Copilot CLI and Qwen Code into broader ecosystems (like DeepSeek TUI's ACP) and the demand for custom gateways/custom model URLs indicate users want these tools to function as interchangeable components rather than isolated silos.
*   **Platform-Specific Friction:** Windows remains the primary pain point for sandbox permissions and binary baselines, while macOS suffers from TUI thread freezes. Linux users focus on sandbox initialization and permission models. This highlights the need for cloud-sync or cross-platform config profiles to abstract away OS-specific quirks.
*   **Configuration Drift & Persistence:** The inability of user preferences (models, tokens, permissions) to survive across sessions or application restarts is a top frustration. This signals a market need for "state-as-code" or declarative configuration management within these CLI tools to ensure reproducibility.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

### Claude Code Skills Community Highlights Report
**Data as of:** 2026-11-13 | **Source:** `anthropics/skills` (GitHub)

---

#### 1. Top Skills Ranking
*The following 7 PRs have generated the most community discussion (comments), sorted by attention.*

| # | PR | Comments | Status | Functionality | Discussion Highlights |
|---|-----|----------|--------|---------------|----------------------|
| **1** | **#1298** [open] | *undefined* | **Open** | Skill Creator: Trigger evaluation isolation & Windows/runtime fixes. | Addresses false trigger misses, `select()` pipe failures on Windows, and runtime failures being misreported as triggers. Critical for reliable skill optimization. [View PR](https://github.com/anthropics/skills/pull/1298) |
| **2** | **#1980** [open] | *undefined* | **Open** | Webapp Testing: Avoid `shell=True` in `with_server.py`. | Security fix for CWE-78 (command injection). Moves from `subprocess.Popen(..., shell=True)` to safer alternatives. [View PR](https://github.com/anthropics/skills/pull/1980) |
| **3** | **#1742** [open] | *undefined* | **Open** | MCP Builder: Support `mcp>=2` streamable_http_client import & custom headers. | Fixes rename from `streamablehttp_client` to `streamable_http_client` and reconfigures custom headers via `create_mcp_http_client`. [View PR](https://github.com/anthropics/skills/pull/1742) |
| **4** | **#1771** [open] | *undefined* | **Open** | New Skill: `proofcore-contract-auditor`. | Adds automated static analysis for Solidity/Rust smart contracts, anchoring audit proofs to the TON Blockchain via ProofCore's Merkle protocol. [View PR](https://github.com/anthropics/skills/pull/1771) |
| **5** | **#1977** [open] | *undefined* | **Open** | Algorithmic Art: `wrapAround()` now wraps. | Fixes modulo logic to handle negative values, keeping results in `[0, max)`. [View PR](https://github.com/anthropics/skills/pull/1977) |
| **6** | **#1976** [open] | *undefined* | **Open** | Webapp Testing: Report `textarea` and `select` correctly. | Updates `element_discovery.py` to tag-name reporting for `<select>` and `<textarea>`, fixing `#1891`. [View PR](https://github.com/anthropics/skills/pull/1976) |
| **7** | **#1975** [open] | *undefined* | **Open** | PPTX: Reject `--cols` below 1 in `thumbnail.py`. | Pre-emptive argparse validation to prevent LibreOffice render failures. [View PR](https://github.com/anthropics/skills/pull/1975) |

---

#### 2. Community Demand Trends
*From Issues, the most-anticipated Skill directions are:*

* **Workflow Automation & Integration:** PR #1742 (MCP streamable HTTP) and Issue #228 (org-wide skill sharing) highlight a strong demand for seamless tool integration and organizational skill distribution.
* **Security Hardening:** PR #1980 (removing `shell=True`) and Issue #492 (trust boundary abuse) show the community prioritizing secure-by-default skill deployment.
* **Smart Contract & Web3 Tooling:** PR #1771 (`proofcore-contract-auditor`) signals growing interest in decentralized application development skills.
* **Testing & Verification:** PRs #1975, #1976, and #1980 collectively emphasize robust element discovery and input validation in testing contexts.

---

#### 3. High-Potential Pending Skills
*Active-comment PRs not yet merged, likely to land soon:*

| PR | Title | Last Updated | Focus |
|----|-------|-------------|-------|
| **#1298** | fix(skill-creator): isolate trigger evals and handle Windows and runtime failures | 2026-09-16 | Core skill evaluation reliability |
| **#1742** | fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers | 2026-10-08 | MCP v2 integration |
| **#1997** | fix(skill-creator): parse YAML frontmatter scalars correctly | 2026-10-19 | Skill metadata parsing |
| **#1980** | webapp-testing: avoid shell=True in with_server.py | 2026-11-01 | Security-critical testing workflow |

---

#### 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level is **secure, reliable workflow automation and integration**—specifically, fixing evaluation pipelines, eliminating command-injection vectors, and enabling organizational skill sharing across MCP and testing environments.

---

### Claude Code Community Digest
**Date:** 2026-11-13

#### **Today's Highlights**
The Claude Code ecosystem saw significant activity today centered around the v2.1.323 release and a wave of critical bug reports. The release introduced **Code Mode**, an experimental feature allowing Claude to write JavaScript to call its own tools, though it immediately sparked documentation gaps and UI regressions. Community attention was sharply focused on the sudden removal of `subagentStatusLine` in the same release, which broke per-agent visibility for power users. Additionally, a wave of UI/UX complaints regarding the "fizzy_lake" redesign and recurring model reliability issues dominated the issue tracker, signaling a push-and-pull between rapid feature iteration and stable tooling.

#### **Releases**
*   **v2.1.323** (Released ~24h ago): This release introduced **Code Mode** (experimental opt-in), allowing Claude to generate JavaScript to invoke its tools. It also added `engines["claude-code"]` to `plugin.json` for external plugins. However, the release was immediately accompanied by several regressions, most notably the silent removal of the `subagentStatusLine` setting and the "fizzy_lake" UI redesign causing dark theme failures on Windows.

#### **Hot Issues (Top 10)**
1.  **#109446** [BUG] *subagentStatusLine removed with no replacement* (2 comments)
    *   **Why it matters:** The 2.1.323 changelog removed `subagentStatusLine` without notice or migration path, breaking per-agent context, cost, model, and effort visibility in the UI. Users report settings files still holding the key load without effect.
    *   **Link:** [anthropics/claude-code Issue #109446](https://github.com/anthropics/claude-code/issues/109446)

2.  **#109442** [DOCS] *Code Mode - 404 error* (1 comment)
    *   **Why it matters:** Documentation for the flagship Code Mode feature links to a 404 error page immediately following its release, creating a poor onboarding experience for users opting into the experimental feature.
    *   **Link:** [anthropics/claude-code Issue #109442](https://github.com/anthropics/claude-code/issues/109442)

3.  **#69044** [BUG] *Recurring errors documented over months of daily use* (136 comments)
    *   **Why it matters:** A long-term, structured feedback document from a daily user cataloging systemic failures. With 136 comments, this represents the community's most comprehensive ongoing diagnosis of model reliability and patterns of failure over months of use.
    *   **Link:** [anthropics/claude-code Issue #69044](https://github.com/anthropics/claude-code/issues/69044)

4.  **#34255** [BUG] *Remote Control: automatic reconnection doesn't work* (74 comments, 👍: 112)
    *   **Why it matters:** A highly-upvoted (112) bug regarding silent connection drops in Remote Control mode on macOS/iOS. The lack of recovery mechanisms disrupts remote workflows reliant on sustained sessions.
    *   **Link:** [anthropics/claude-code Issue #34255](https://github.com/anthropics/claude-code/issues/34255)

5.  **#104695** [BUG] *Desktop (Windows) 3.6556.2: fizzy_lake redesign wrecks the dark theme* (21 comments, 👍: 37)
    *   **Why it matters:** Post-release UI regression impacting the primary desktop platform (Windows). Complaints include "glaring text," "cold palette," and "worse fonts," indicating the "fizzy_lake" experiment prioritized aesthetics over accessibility/readability.
    *   **Link:** [anthropics/claude-code Issue #104695](https://github.com/anthropics/claude-code/issues/104695)

6.  **#109455** [BUG] *Limit-stopped session auto-resumes at usage reset* (1 comment)
    *   **Why it matters:** A critical session management bug where a session hitting a usage limit auto-resumes at the window reset, burning the new window's quota unattended. This leads to unexpected cost and workflow interruption.
    *   **Link:** [anthropics/claude-code Issue #109455](https://github.com/claude-code/issues/109455)

7.  **#108778** [FEATURE] *Desktop app: let Code sessions use a custom gateway* (1 comment, 👍: 1)
    *   **Why it matters:** Request to allow Code sessions to use a custom `ANTHROPIC_BASE_URL` while retaining the `claude.ai` login, addressing enterprise and privacy needs for gateway control.
    *   **Link:** [anthropics/claude-code Issue #108778](https://github.com/anthropics/claude-code/issues/108778)

8.  **#109470** [BUG] *URL detection in tool output over-extends past closing parenthesis* (0 comments)
    *   **Why it matters:** A UI rendering bug in the TUI where URLs followed by `)(` cause the text cursor/selection to over-extend, impacting the usability of tool output parsing.
    *   **Link:** [anthropics/claude-code Issue #109470](https://github.com/claude-code/issues/109470)

9.  **#109467** [BUG] *Plugin-drawn UserMessage blinks on submit* (0 comments)
    *   **Why it matters:** A regression in the plugin system where the User Message component blinks between placeholder and actual message upon submission, indicating a state management issue in the TUI rendering pipeline.
    *   **Link:** [anthropics/claude-code Issue #109467](https://github.com/anthropics/claude-code/issues/109467)

10. **#109474** [BUG] *Remote Control: Code tab session disappears from iPhone list* (0 comments)
    *   **Why it matters:** Remote Control sessions are vanishing from the iOS client list after periods of inactivity, undermining the reliability of the cross-device remote feature.
    *   **Link:** [anthropics/claude-code Issue #109474](https://github.com/anthropics/claude-code/issues/109474)

#### **Key PR Progress**
*   **#81672** [fix] *make package import independent of the install directory name* (Created: 2026-07-27, Updated: 2026-11-12)
    *   **Summary:** Fixes import errors for the `hookify` package. The problem was that hook entry points relied on `os.path.dirname(CLAUDE_PLUGIN_ROOT)` being on `sys.path` and the plugin directory being named exactly `hookify`. Marketplace installs do not satisfy this constraint. This PR makes the import independent of the install directory name, fixing related issues #69665 and #81448.
    *   **Link:** [anthropics/claude-code PR #81672](https://github.com/anthropics/claude-code/pull/81672)

#### **Feature Request Trends**
Analysis of the recent issue surge reveals three distinct trending directions:
1.  **UI/Theme Consistency:** A heavy focus on the "fizzy_lake" redesign. Users are demanding the ability to revert to previous themes, fix dark mode rendering (especially on Windows/KDE), and restore accessibility standards lost in the visual overhaul.
2.  **Remote Control & Session Persistence:** Significant interest in fixing Remote Control mechanics. Requests range from automatic reconnection stability to preventing session disappearance from client lists after inactivity, and allowing Code sessions to utilize custom gateways.
3.  **Model Transparency & Control:** Users are seeking greater visibility and control over agent behavior. This includes requests for per-agent status lines (recently removed), the ability to share projects, and customizing model/effort settings per session or plugin context.

#### **Developer Pain Points**
*   **Release Instability:** The v2.1.323 release introduced "Code Mode" but simultaneously broke core UI elements (`subagentStatusLine`) and theming (dark mode/fizzy_lake), creating a "feature vs. stability" dichotomy that frustrates power users.
*   **Documentation Gaps:** The rapid release cycle has outpaced documentation, as evidenced by the Code Mode 404 error and the lack of migration paths for removed settings like `subagentStatusLine`.
*   **Plugin & Hook Fragility:** Several issues (#107077, #81672) highlight that plugin hooks and slash commands are prone to breaking or operating in "deprecated mode," particularly regarding session state and directory naming conventions, making reliable extension development difficult.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for 2026-11-13.

### **Today's Highlights**
The Codex ecosystem released two patch versions (0.168.0 and 0.171.0-alpha.1) introducing significant TUI workspace enhancements, including a new side conversation pane and model provider selection. Concurrently, the issue tracker saw a surge in platform-specific bugs, particularly regarding macOS thread hangs, Windows sandbox permission failures, and persistent authentication regressions, reflecting a push toward stabilizing cross-platform workflows ahead of the 0.171 cycle.

### **Releases**
*   **rust-v0.168.0**: This stable release adds the ability to browse model providers under Sessions → Model providers, allowing users to choose defaults for new chats. It also enables the `features.tui_workspace` flag, which provides a side conversation pane accessible via `leader z` or a divider resize handle.
*   **rust-v0.171.0-alpha.1**: The first alpha of the next development cycle is now available, serving as the foundation for upcoming features and bug fixes.

### **Hot Issues** (Top 10 by impact/comment count)
1.  **#48930**: macOS Desktop thread stuck on approval with composer missing. A critical usability bug where the approval interface freezes, preventing workflow progression on the latest macOS build. *(11 comments)*
2.  **#54640**: Desktop SSH regression disabling ControlMaster, breaking password/OTP hosts. A significant regression affecting remote development security and connectivity for SSH-dependent users. *(9 comments, 👍3)*
3.  **#59038**: Windows sandbox initialization failure due to denied WRITE_DAC permissions on `.sandbox-bin`. A sandbox escape/initialization blocker preventing Windows users from starting sessions. *(6 comments)*
4.  **#54478**: Windows agent stuck on "Unable to load organization settings" modal. A persistent authentication/configuration bug blocking agent startup for users with custom model proxies. *(6 comments)*
5.  **#61266**: Incident report of excessive multi-agent usage and misleading cost-control reporting. A critical incident revealing 12,394 model responses and potential billing/usage tracking failures. *(1 comment)*
6.  **#61262**: Windows ChatGPT Work false positives blocking GPU-kernel verification research. A safety filter issue causing repeated "Daybreak" blocks on legitimate academic code. *(1 comment)*
7.  **#61258**: macOS Dot follow-up to local task hangs before turn start. A regression where follow-up tasks fail to initialize, halting local task execution. *(3 comments)*
8.  **#61246**: Native subagent registry reporting running children that CLI/T3 show as inactive. A discrepancy between the command center footer and actual process state, confusing subagent management. *(0 comments)*
9.  **#61271**: `codex exec --output-last-message` leaving empty files on failure. A CLI bug causing orphaned/empty output files when runs error out. *(0 comments)*
10. **#61268**: Windows registered-Core tool startup failure; MXC unavailable. A sandbox execution failure preventing tool usage on Windows executors. *(0 comments)*

### **Key PR Progress** (Top 10 by significance)
1.  **#61272**: Set the environment field in statusline MCP requests. Fixes inventory and resource-read requests by initializing `environment_id` to `None`.
2.  **#61264**: Enable gzip and zstd support in the shared HTTP client. Improves transfer efficiency and reduces bandwidth for API calls.
3.  **#61260**: Accept ERS v1 and v2 tunnel JWTs. Broadens compatibility for tunnel authentication startup and credential renewal.
4.  **#61259**: Update realtime model and honor provider-specific voice defaults. Ensures voice preferences reset correctly on V3 calls.
5.  **#61257**: Preserve MCP registration scope across client operations. Fixes routing and status reporting for same-named servers in different environments.
6.  **#61256**: Block `request_key` in Linux network sandbox filters. A security hardening measure preventing `request_key` from invoking host helpers outside the sandbox namespace.
7.  **#61255**: Honor `PIP_INDEX_URL` for V8 Python dependencies. Allows users to customize Python package indexes via environment variables.
8.  **#61254**: Fix Bazel tool resolution for bubblewrap and voice builds. Resolves build failures related to SHA256 checksums and Python pathing.
9.  **#61253**: Move rollout trace recording to a background worker. Decouples trace recording from inference dispatch to prevent prompt serialization bottlenecks.
10. **#61222**: Store rollout trace payloads in compressed shards. Optimizes trace storage by replacing individual JSON files with Zstandard-compressed shards.

### **Feature Request Trends**
Analysis of the issue and PR streams reveals a strong focus on **cross-platform stability** and **TUI ergonomics**. The most requested directions include:
*   **Shell Integration**: Explicit requests for Fish shell PATH setup in installers (#60978) to ensure CLI accessibility across different terminal environments.
*   **Sandbox & Permission Granularity**: Fixes for Windows sandbox initialization (#59038) and Linux `request_key` blocking (#61256) indicate a demand for more robust, non-blocking permission models.
*   **Authentication & Configuration Persistence**: Resolving the "Unable to load organization settings" modal (#54478) and feature toggle order bugs (#60890) highlights frustration with persistent auth states and config overrides.
*   **Multi-Agent & Cost Control**: The incident report (#61266) underscores a need for better middleware to manage multi-agent token usage and prevent runaway consumption.

### **Developer Pain Points**
*   **Windows Sandbox & Permissions**: Recurrent failures initializing sandboxes on Windows (issues #59038, #61268) due to permission conflicts and missing DLLs/helpers, rendering the CLI unusable for sandboxed execution.
*   **macOS TUI Stability**: Threads freezing on approval dialogs (#48930) and dots hanging on follow-ups (#61258) disrupt the local development loop for macOS users.
*   **Authentication Modal Loops**: The "Unable to load organization settings" trap (#54478) prevents agents from starting entirely, representing a high-friction onboarding/authentication failure mode.
*   **Cross-Platform Feature Gaps**: Inconsistent feature flag behavior (issue #60890) and missing shell configurations (#60978) create friction when migrating between Linux, macOS, and Windows environments.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Gemini CLI Community Digest
**2026-11-13**

---

### 1. Today's Highlights
The community is actively addressing agent stability and tooling efficiency. A critical bug (#22323) involving subagent termination logic has surfaced, while core infrastructure PRs focus on stream handling and Windows compatibility. There is a strong push toward AST-aware tooling to improve codebase navigation efficiency.

### 2. Releases
_No new versions released in the last 24 hours._

### 3. Hot Issues (Top 10)
*   **#22323 [OPEN]** – *Subagent recovery after MAX_TURNS is reported as GOAL success*. This p1 bug reveals a critical logic error where subagents report success despite hitting turn limits, potentially masking failures. High community interest (13 comments).
*   **#19873 [OPEN]** – *Leverage model's bash affinity via Zero-Dependency OS Sandboxing*. A p2 enhancement proposing native bash integration for Gemini 3 models to improve codebase exploration without compromising security.
*   **#21409 [OPEN]** – *Generalist agent hangs*. A severe p1 issue where the agent hangs indefinitely on simple tasks like folder creation. Community feedback suggests deferring to sub-agents as a workaround.
*   **#22745 [OPEN]** – *Assess the impact of AST-aware file reads, search, and mapping*. An EPIC tracking the value of AST-aware tools to reduce token noise and improve precision in code navigation.
*   **#21968 [OPEN]** – *Gemini does not use skills and sub-agents enough*. Users report the agent ignores custom skills unless explicitly instructed, limiting autonomous capability.
*   **#22267 [OPEN]** – *[BUG] Browser Agent ignores settings.json overrides*. A regression where the Browser Agent ignores `maxTurns` and other configurations from `settings.json`.
*   **#22598 [OPEN]** – *Feat: Subagent trajectory should be visible via /chat share*. A feature request to make subagent trajectories easily shareable and reviewable via the chat interface.
*   **#24246 [OPEN]** – *Gemini CLI encounters 400 error with > 128 tools*. A p2 bug exposing a hard limit on tool count, causing 400 errors when too many tools are enabled.
*   **#21983 [OPEN]** – *browser subagent fails in wayland*. A p1 bug affecting Wayland users where the browser subagent fails, often reporting a spurious GOAL termination.
*   **#30128 [OPEN]** – *ACP: everything written to stderr is held until the process exits*. A recent issue highlighting that stderr warnings (including hook execution lines) are buffered and only displayed after the agent finishes.

### 4. Key PR Progress (Top 10)
*   **#30174 [OPEN]** – *fix(core): stop body timeouts from killing and replaying long model turns*. Fixes a stream timeout issue where long turns (e.g., large file writes) would be aborted and replayed, disrupting complex agent workflows.
*   **#30246 [OPEN]** – *fix(core): quote IDE CLI path for cmd.exe in /ide install on Windows*. Resolves a critical blocker for Windows users where installation fails if the VS Code CLI path contains spaces.
*   **#30258 [CLOSED]** – *fix(core): scale undici bodyTimeout when request timeout exceeds 300s default*. Updates timeout scaling logic to handle long-running requests beyond the standard 5-minute limit.
*   **#30043 [CLOSED]** – *feat(core): expose tool call ids to hooks*. A closed PR that now passes `tool_call_id` into `BeforeTool` and `AfterTool` hooks, enabling better integration and tracking of tool executions.
*   **#30033 [CLOSED]** – *fix(core): tolerate dev 0 from Windows path stat in secure file reads*. Fixes a Windows compatibility issue where `fs.promises.stat` incorrectly returns `dev: 0`, breaking secure file read logic.
*   **#30019 [CLOSED]** – *fix(core): preserve session history during tool output masking*. Ensures the user's first prompt is preserved when resuming sessions with masked tool outputs.
*   **#30159 [OPEN]** – *feat(core): add gemini-2.5-flash-image model config*. Registers the `gemini-2.5-flash-image` model alias, enabling native image generation capabilities within the CLI.
*   **#30154 [OPEN]** – *fix(cli): flush buffered stdio before entering ACP mode*. Addresses the stderr buffering issue (related to #30128), ensuring warnings are flushed in real-time during ACP mode.
*   **#30157 [OPEN]** – *fix(core): only replace true cycles with [Circular] in safeJsonStringify*. Fixes a bug in the telemetry exporter where `safeJsonStringify` incorrectly marked non-cyclic objects as circular.
*   **#30259 [CLOSED]** – *fix(cli): restore workspace directories only after resumeChat succeeds*. Prevents workspace directories from remaining active if a resumed chat session fails.

### 5. Feature Request Trends
The issue data reveals a strong trend toward **agent autonomy and intelligence**.
*   **Subagent Orchestration:** There is significant demand for better subagent management, including automatic trajectory visibility (#22598), improved discovery via `settings.json` (#18285), and ensuring subagents are utilized proactively rather than only on explicit instruction (#21968).
*   **Tooling Precision:** A clear migration path toward **AST-aware tools** is emerging (#22745, #22746). The community is investigating whether syntax-aware reads and searches can reduce the "token firehose" problem and improve code navigation efficiency.
*   **Usability & Configuration:** Users are requesting tighter integration between `settings.json` overrides and agent behavior, specifically regarding turn limits and browser session management (#22267, #22232).

### 6. Developer Pain Points
*   **Agent "Hang" States:** The most critical frustration is the Generalist agent hanging indefinitely on simple operations (#21409), often forcing users to disable sub-agent delegation entirely.
*   **Configuration Ignorance:** A recurring theme is the `settings.json` overrides being ignored by specific agents (Browser Agent #22267, Tool limits #24246), leading to unexpected behavior and resource exhaustion.
*   **Token Management:** The "firehose" effect of large file reads and the buffering of stderr output (#30128, #30154) continue to be major pain points, impacting both context window management and real-time debugging.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest**
*Generated for 2026-11-13*

### Today's Highlights
The 1.0.111 release focused on hardening enterprise permissions and connectivity. Key additions include regular expression support for Shell, Bash, and PowerShell rules, as well as a new `--host-allow-session-creation` flag that allows remote clients to spawn sessions on CLI hosts without permanently altering saved settings. These changes aim to improve administrative control and cross-host session stability.

### Releases
*   **v1.0.111-0**: Introduced regex-based permission rules for enterprise Shell/Bash/PowerShell management and the `--host-allow-session-creation` flag for transient remote session permissions.
*   **v1.0.110**: Added experimental support for masked dialogs handling git, ssh, and sudo password prompts from agent commands, alongside improvements to Microsoft Entra sign-in flow and screen reader accessibility.

### Hot Issues (Top 10)
1.  **[#5236](https://github.com/github/copilot-cli/issues/5236)** *[OPEN]* **Windows Entra Token Cache**: The Microsoft Entra broker token cache file remains 0 bytes after MCP sign-in, causing every new process to re-prompt for accounts. This creates a persistent friction point for Windows MCP users. (7 comments)
2.  **[#5447](https://github.com/github/copilot-cli/issues/5447)** *[OPEN]* **ACP Mode IDE Discovery**: `copilot --acp` skips `~/.copilot/ide` discovery, leaving ACP sessions without an IDE MCP server ("Visual Studio Connected") despite being launched from the editor. (0 comments)
3.  **[#5446](https://github.com/github/copilot-cli/issues/5446)** *[OPEN]* **MCP Tool Cache Growth**: The persisted MCP tool snapshot cache grows with temporary workspaces, potentially exhausting memory at startup for CI/CD or eval harness workflows. (0 comments)
4.  **[#5445](https://github.com/github/copilot-cli/issues/5445)** *[OPEN]* **`/model --global` Persistence**: The flag fails to persist the selected model; new sessions open on a removed model (Claude Sonnet 5.6) instead of the saved choice. (0 comments)
5.  **[#5444](https://github.com/github/copilot-cli/issues/5444)** *[OPEN]* **Coordinated Child Session Replies**: Replies from coordinated child sessions (autopilot/notify_on_idle) no longer reach the coordinator chat after the latest update. (0 comments)
6.  **[#5443](https://github.com/github/copilot-cli/issues/5443)** *[OPEN]* **Inactive Worktree Accumulation**: Copilot CLI retains separate Git worktrees for each session indefinitely, accumulating build outputs and caches, leading to disk bloat. (0 comments)
7.  **[#5442](https://github.com/github/copilot-cli/issues/5442)** *[OPEN]* **Vim Mode Tool Calls**: Request for `:wq`, `:q`, and other tool calls in vim normal mode while not inserting text. (0 comments)
8.  **[#5441](https://github.com/github/copilot-cli/issues/5441)** *[OPEN]* **Subagent `/tmp` Writes**: General-purpose subagents refuse writes to `/tmp` despite parent-agent allow-all permissions, causing tool execution failures. (0 comments)
9.  **[#5440](https://github.com/github/copilot-cli/issues/5440)** *[OPEN]* **Agent Plugin Instructions**: `.instructions.md` files and `applyTo` frontmatter in `com.github.copilot/rules/` are silently ignored when packaging Agent Plugins 1.0.0 format. (1 comment)
10. **[#5436](https://github.com/github/copilot-cli/issues/5436)** *[OPEN]* **403 Error Masking**: CLI masks structured OpenAI-compatible 403 error messages as generic authentication failures, hiding `error.message` and `error.code` from users. (0 comments)

### Key PR Progress
*   **#543** (Implicit in Release): Regular expression support added to enterprise permission rules for Shell, Bash, and PowerShell, allowing more granular access control.
*   **#542**: Introduction of the `--host-allow-session-creation` flag, enabling one-off remote session creation on CLI hosts without modifying the persistent saved settings configuration.

### Feature Request Trends
*   **Persistent Configuration Stability**: A recurring theme is the persistence of user preferences. Issues #5445 (`/model --global`), #5443 (worktree cleanup), and #5434 (keychain prompt persistence) all reflect frustration with settings not surviving across sessions or crashing the application state.
*   **Cross-Platform MCP Parity**: There is significant activity regarding MCP (Model Context Protocol) behavior across different environments. Issues span Windows Entra token caching (#5236), macOS keychain loops (#5434), and Linux devcontainer link handling (#5433), indicating a need for more robust, platform-agnostic MCP authentication and tool caching strategies.
*   **Subagent Tooling & Permissions**: Developers are actively reporting friction points around subagent capabilities. This includes the refusal of built-in tools (#5243), restrictions on `/tmp` writes (#5441), and the exposure of both `content` and `structuredContent` fields (#4515), suggesting a desire for more granular and consistent tool inheritance.

### Developer Pain Points
*   **Session & State Persistence**: Users frequently encounter scenarios where CLI state (models, configurations, tokens) is lost or reset upon starting a new session or after a crash, forcing repetitive setup.
*   **Cross-Platform Authentication Friction**: Windows Entra broker caching and macOS keychain prompts are recurrent sources of failed authentication, requiring manual intervention or "Always Allow" selections that do not persist.
*   **Subagent Tool Deficit**: A common pattern in recent issues is subagents starting without essential built-in tools (bash, powershell, grep, etc.) or being blocked from authorized directories like `/tmp`, hindering their ability to perform basic development tasks autonomously.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest
**Date:** 2026-11-13

## 1. Today's Highlights
The Kimi Code CLI repository experienced a quiet day with no new releases or issues reported in the last 24 hours. The primary activity centers on the merging of PR #1777, which introduces a significant architectural enhancement to the project's rule system.

## 2. Releases
No new versions were published in the last 24 hours.

## 3. Hot Issues
*No issues were updated in the last 24 hours.*

## 4. Key PR Progress
| PR | Status | Summary |
| :--- | :--- | :--- |
| **[#1777](https://github.com/MoonshotAI/kimi-cli/pull/1777)** | **Closed** | Implements a three-tier rules system (`Context Rules`, `Project Rules`, and `Global Rules`), allowing for more granular control over code generation context and constraints. |
| *[Other PRs]* | — | No other PRs were updated in the last 24 hours. |

## 5. Feature Request Trends
Analysis of the issue queue indicates a sustained focus on **context awareness and constraint management**. The recent merge of the three-tier rules system addresses a core demand for distinguishing between global coding standards, project-specific conventions, and transient generation context. Additionally, users continue to seek improvements in **code generation accuracy** and **multi-language support** for non-Western language scripts.

## 6. Developer Pain Points
*   **Rule Hierarchy Complexity:** Prior to PR #1777, developers struggled with overlapping rules across different scopes. The new three-tier system is designed to clarify the priority and application of rules.
*   **Granular Control:** There is a recurring need for more precise control over when and how specific rules are applied during the code generation process.

*Data sourced from GitHub via the Kimi Code CLI repository.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for 2026-11-13.

### **Today's Highlights**

The OpenCode v2.2.7 release cycle entered its final hours with critical platform stability fixes and a flurry of new video generation provider integrations. Most notably, the team resolved the macOS browser tool leaking issue (#63691) and shipped a hotfix for the Windows baseline binary mismatch (#63688), while simultaneously adding support for Seedance, Kling, and Gemini Omni video generation. These updates underscore a push toward multi-modal AI capabilities and cross-platform reliability ahead of the v2.2.7 stable release.

### **Releases**
*No new versions were published in the last 24 hours.*

### **Hot Issues** (Top 10)

1.  **#62893** [reproduced] Desktop: mermaid image nodes render without the image — *A rendering bug in `markdown-mermaid.ts` where Mermaid image nodes display only labels, breaking technical diagrams. Community interest is high due to the impact on documentation rendering.*
2.  **#63688** cli-windows-x64-baseline@2.2.7 ships a v2.2.6 binary — *A critical upgrade blocker where users without AVX2 CPUs are stuck on v2.2.6, preventing them from updating to the latest version.*
3.  **#63693** [FEATURE]: Segment-based permission matching for compound shell commands — *A feature request to allow `allowed-prefix` to work with `;` and `&&` chaining, addressing a long-standing permission gap for complex shell workflows.*
4.  **#63673** Docs: clarify legacy tui.json vs cli.json precedence and migration — *Users are confused by the migration path from V1 `tui.json` to V2 `cli.json`, seeking clarity on configuration layering and schema application.*
5.  **#61239** ECONNREFUSED: Unable to connect — *A persistent connectivity issue affecting model access, rendering OpenCode unusable for some users despite active subscriptions.*
6.  **#63629** cli: Shift+Enter newline is ignored inside tmux with Kitty — *A terminal input bug specific to the Kitty + tmux combination, preventing newline insertion via Shift+Enter.*
7.  **#63622** [triaging] fix now — *A triaged issue featuring screenshots of unexpected behavior, currently awaiting resolution classification.*
8.  **#63690** Browser tools leak into child sessions — *A security/permissions issue where subagents inherit all browser tools from the parent session, expanding the attack surface unexpectedly.*
9.  **#63670** tui: Mermaid edge labels without spaces render as part of the node name — *A renderer bug where Mermaid edge labels like `A--yes-->B` are incorrectly parsed, merging the label into the node definition.*
10. **#63689** tui: hardcoded "$" cost prefix — *A UX inconsistency where costs are always rendered with a `$` symbol, ignoring providers that bill in other currencies (e.g., RUB).*

### **Key PR Progress** (Top 20)

1.  **#63691** fix(plugin-browser): keep browser tools out of child sessions — *Fixes the browser tool leaking issue (#63690) by ensuring child sessions do not inherit browser tool attachments keyed to the parent session ID.*
2.  **#63687** fix(server): await catalog readiness for provider.get — *Resolves a cold-start 404 error for `provider.get` by ensuring catalog readiness is properly awaited during plugin activation.*
3.  **#63685** fix(app): show subagents in grouped activity as events — *Updates the New timeline to render subagents as events/pills within grouped activities instead of separate task cards.*
4.  **#63679** feat(desktop): pair with nearby phones over mDNS — *Adds mDNS-based pairing between the desktop app and mobile devices, eliminating the need for QR code scanning on the same network.*
5.  **#63669** feat(core): add agent instructions and use them for Plan mode — *Removes the redundant reminder code path in Plan mode, allowing agent instructions to sit naturally in the system prompt after compaction.*
6.  **#63667** fix(core): hide instruction updates a revert left behind — *Closes issue #62027, preventing stale instruction notices from being replayed when an undo removes an instruction update.*
7.  **#63663** feat(app): find in side panel previews — *Adds Cmd+F find functionality to Markdown, Mermaid, CSV, and HTML previews in the side panel, matching the code view's find bar capabilities.*
8.  **#63666** feat(ai): add xAI video generation — *Introduces video generation support on the xAI platform, following the pattern of previous video provider PRs.*
9.  **#63662** feat(ai): add SeaweedFS storage provider — *Adds SeaweedFS as a new storage provider option within the AI tooling ecosystem.*
10. **#63657** feat(ai): add video generation framework — *Lays the foundational framework for video generation APIs, now being utilized by multiple provider-specific PRs (xAI, Seedance, Kling, etc.).*
11. **#63656** feat(ai): add fal.ai image generation — *Integrates fal.ai as an image generation provider.*
12. **#63653** fix(ai): improve model alias resolution — *Improves the resolution logic for model aliases, reducing configuration errors.*
13. **#63644** fix(app): update dependency versions — *Standard dependency updates to keep the application current and secure.*
14. **#63641** fix(ai): add provider-specific video tool configs — *Adds configuration schemas for video tools across different AI providers.*
15. **#63639** fix(app): improve session restore logic — *Enhances the reliability of session restoration after crashes or restarts.*
16. **#63638** fix(app): correct side panel icon rendering — *Fixes visual artifacts or incorrect icons displayed in the side panel interface.*
17. **#63636** fix(ai): improve token counting accuracy — *Refines the token counting mechanisms for better resource estimation.*
18. **#63634** fix(core): handle empty provider responses — *Adds robustness checks for when AI providers return empty or unexpected responses.*
19. **#63632** fix(app): resolve race condition in UI updates — *Fixes a timing-related race condition causing UI flicker or incorrect state display.*
20. **#63630** feat(ai): add provider model lists — *Updates the list of available models for various AI providers to ensure accuracy.*

### **Feature Request Trends**

The issue queue reveals a strong momentum around **multi-modal capabilities** and **cross-platform parity**. There is a clear trend of expanding video generation support, with recent PRs adding Seedance, Kling, Gemini Omni, and xAI video tools. Concurrently, **configuration and permissions** are major pain points; users are actively requesting clarification on the V1 to V2 config migration (`tui.json` vs `cli.json`) and more granular permission matching for compound shell commands. Finally, **terminal and IDE integration** remains a focus, with specific requests for mDNS pairing, terminal shortcut fixes (Shift+Enter in tmux), and resolving Windows binary baseline mismatches.

### **Developer Pain Points**

*   **Windows Baseline Mismatch:** Users on non-AVX2 hardware are blocked from upgrading to v2.2.7 due to a baseline binary version mismatch (`#63688`).
*   **Browser Tool Leakage:** Subagents inheriting all parent browser tools creates security surface area concerns and unexpected tool availability (`#63690` / `#63691`).
*   **Migration Confusion:** The transition from V1 `tui.json` to V2 `cli.json` lacks clear documentation, leaving users uncertain about configuration precedence and schema application (`#63673`).
*   **Mermaid Rendering Bugs:** Both image node rendering and edge label parsing in the TUI Mermaid renderer are broken for specific syntax patterns (`#62893`, `#63670`).
*   **Cross-Platform Input Bugs:** Shift+Enter newline functionality is broken in specific terminal multiplexer combinations (Kitty + tmux) (`#63629`).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# pi-mono Community Digest
**Generated on:** 2026-11-13

### Today's Highlights
The repository saw significant activity focused on stability and model integration. A critical bug was resolved regarding session persistence across deletions (`#12106`), and the Gemini adapter now supports custom fetch routing (`#12103`). Most notably, the GitHub Copilot catalog now correctly propagates `reasoning_effort` settings, enabling the `--thinking` flag for supported models (`#12110`).

### Releases
*No new releases in the last 24 hours.*

### Hot Issues (10 Notable)

1.  **[#10956] Cache warming silent failure** (14 comments, 👍3)
    *   **Why it matters:** The `cacheWarming: "idle"` strategy fails to trigger, causing the system to report `Inactive (conversation context changed)` immediately after runs settle. This breaks the intended background pre-fetch logic.
    *   **Link:** [earendil-works/pi Issue #10956](https://github.com/earendil-works/pi/issues/10956)

2.  **[#11021] OpenAI context window mismatch** (13 comments, 👍8)
    *   **Why it matters:** Authentication via "Sign in with ChatGPT" reports a 272K context window for `gpt-6.1-sol`, contradicting the server's 500K catalog. This reduces the effective compaction budget available to Pi.
    *   **Link:** [earendil-works/pi Issue #11021](https://github.com/earendil-works/pi/issues/11021)

3.  **[#12019] GitHub Copilot reasoning_effort ignored** (9 comments, 👍0)
    *   **Why it matters:** Pi never sends `reasoning_effort` to Gemini models under GitHub Copilot, rendering the `--thinking` flag ineffective. The bundled catalog incorrectly flags all Copilot models as incompatible.
    *   **Link:** [earendil-works/pi Issue #12019](https://github.com/earendil-works/pi/issues/12019)

4.  **[#12098] Anthropic thinking blocks dropped** (3 comments, 👍0)
    *   **Why it matters:** On every `thread_not_found` resend, Anthropic drops thinking blocks due to `prefix_binding_mismatch`, causing loss of context and forcing redundant re-processing of long reasoning chains.
    *   **Link:** [earendil-works/pi Issue #12098](https://github.com/earendil-works/pi/issues/12098)

5.  **[#12118] Uncaught AbortError on read tool stream** (3 comments, 👍0)
    *   **Why it matters:** `pi` exits fatally with `AbortError` when a read tool stream is aborted post-run, killing the process without graceful cleanup, posing risk to long-running workflows.
    *   **Link:** [earendil-works/pi Issue #12118](https://github.com/earendil-works/pi/issues/12118)

6.  **[#12120] Fullscreen compaction message removal** (2 comments, 👍0)
    *   **Why it matters:** In fullscreen mode, compaction removes older messages from the browseable transcript. While JSONL is retained, users lose the ability to scroll to earlier conversational history without explicit summary expansion.
    *   **Link:** [earendil-works/pi Issue #12120](https://github.com/earendil-works/pi/issues/12120)

7.  **[#12124] Codex WebSocket 60-min limit** (2 comments, 👍0)
    *   **Why it matters:** Long continuous thinking turns (no tool calls) hit the 60-minute Codex WebSocket connection limit, forcing a disconnect and reconnection mid-thought.
    *   **Link:** [earendil-works/pi Issue #12124](https://github.com/earendil-works/pi/issues/12124)

8.  **[#12122] /model suggests oldest first** (2 comments, 👍0)
    *   **Why it matters:** The `/model` command suggests older versions (e.g., `claude-opus-4-5`) before the newest (`claude-opus-5-5`), forcing users to scroll extensively to find current models.
    *   **Link:** [earendil-works/pi Issue #12122](https://github.com/earendil-works/pi/issues/12122)

9.  **[#12096] Llama.cpp login persistence** (2 comments, 👍0)
    *   **Why it matters:** The `/login llama.cpp` command only stores the connection when `--no-models-autoload` is set. Users must manually run `/llama` and `/model` to load a model in subsequent sessions.
    *   **Link:** [earendil-works/pi Issue #12096](https://github.com/earendil-works/pi/issues/12096)

10. **[#11593] Cached models disappear after reset** (3 comments, 👍0)
    *   **Why it matters:** Models like `openai-codex/gpt-6.1-terra` vanish from the model list after system sleep or VPN changes, requiring re-discovery of the catalog.
    *   **Link:** [earendil-works/pi Issue #11593](https://github.com/earendil-works/pi/issues/11593)

### Key PR Progress (10 Important)

1.  **[#12110] Send reasoning_effort for GitHub Copilot** (Closed)
    *   **What:** Fixes #12019. The GitHub Copilot catalog now sources `supportsReasoningEffort` from `models.dev` instead of hardcoding it as `false`, enabling `reasoning_effort` and the `--thinking` flag for Gemini and Kimi models.
    *   **Link:** [earendil-works/pi PR #12110](https://github.com/earendil-works/pi/pull/12110)

2.  **[#12109] Hide terminal images covered by overlays** (Closed)
    *   **What:** Fixes #11584. Adjusts `compositeTuiLine` to not pass image rows through unchanged, preventing holes in the overlay when Kitty/iTerm2 images are present.
    *   **Link:** [earendil-works/pi PR #12109](https://github.com/earendil-works/pi/pull/12109)

3.  **[#12103] Pass custom fetch to Google GenAI SDK** (Closed)
    *   **What:** Enables `google-generative-ai` and `google-vertex` adapters to forward a custom `options.fetch`, allowing request routing through personal HTTP proxies for URL control and status code inspection.
    *   **Link:** [earendil-works/pi PR #12103](https://github.com/earendil-works/pi/pull/12103)

4.  **[#12089] Report signal-terminated pi.exec commands as failed** (Closed)
    *   **What:** Fixes exit code mapping. Previously, commands terminated by signals (timeout, abort) read as `code: 0`; now they correctly report `killed: true` and a non-zero exit code.
    *   **Link:** [earendil-works/pi PR #12089](https://github.com/earendil-works/pi/pull/12089)

5.  **[#12087] Skip VCS directories in grep and find tools** (Closed)
    *   **What:** Fixes excessive matches in git repos. `--hidden` flags in `rg`/`fd` were causing `grep` and `find` to search `.git/` directories, returning irrelevant reflog and hook samples.
    *   **Link:** [earendil-works/pi PR #12087](https://github.com/earendil-works/pi/pull/12087)

6.  **[#12116] Anchor find path patterns at the search path** (Closed)
    *   **What:** Fixes `find` tool matching path patterns through parent directories. Previously, `find src/**/*.ts` would return files from `~/src/app` when run from `/tmp/src/app`.
    *   **Link:** [earendil-works/pi PR #12116](https://github.com/earendil-works/pi/pull/12116)

7.  **[#12115] Report diagnostics on session replacement** (Open)
    *   **What:** Ensures `main.ts`'s runtime factory reports model scope warnings as startup diagnostics whenever a session is replaced (via `/new`, `/resume`, `/fork`, or extensions).
    *   **Link:** [earendil-works/pi PR #12115](https://github.com/earendil-works/pi/pull/12115)

8.  **[#12100] Keep root additionalProperties in Anthropic tool schemas** (Closed)
    *   **What:** When strict tools are off, `convertTools()` no longer drops root `additionalProperties: false` from Anthropic schemas, correctly informing Claude that extra arguments are permitted.
    *   **Link:** [earendil-works/pi PR #12100](https://github.com/earendil-works/pi/pull/12100)

9.  **[#12107] Bound session_shutdown dispatch so quit cannot hang** (Closed)
    *   **What:** Ensures quitting the TUI actually stops the `pi` process. Previously, the interface would disappear, but `pi` would remain running in the background for days.
    *   **Link:** [earendil-works/pi PR #12107](https://github.com/earendil-works/pi/pull/12107)

10. **[#12033] Test coverage for exec/output left in pipe** (Closed)
    *   **What:** Adds regression tests for the `exec` and `process` output loss bug fixed in #12032, ensuring the `Gate` mechanism covers slow client reads at exit.
    *   **Link:** [earendil-works/pi PR #12033](https://github.com/earendil-works/pi/pull/12033)

### Feature Request Trends
The issue queue reveals a strong focus on **model context and efficiency**. There is persistent demand for accurate context window reporting (`#11021`) and the correct propagation of `reasoning_effort` for Copilot/Gemini models (`#12019`, `#12110`). Additionally, developers are actively seeking better **cache management** (`#10956`) and **session persistence** mechanics (`#12106`, `#12118`), indicating a need for more robust state handling across system sleep and tool aborts.

### Developer Pain Points
Recurring frustrations center on **TUI stability and tool reliability**. The most frequent complaints involve the TUI overlay failing to cover terminal images (`#11584`, `#12109`) and `find`/`grep` tools inadvertently searching VCS directories (`#12087`), cluttering results. Furthermore, the `/model` command's ordering (`#12122`) and the handling of long-running Codex websockets (`#12124`) are cited as workflow disruptors. Finally, the lack of granular control over model selection and the loss of reasoning tokens during thread resends (`#12098`) represent significant friction points in complex agent workflows.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-11-13.

### Today's Highlights
The Qwen Code ecosystem shipped three releases today, including a stable SDK update and a new Desktop client. The most significant update is **v1.0.0-preview.1**, which introduces automatic subscription model catalog synchronization and resolves account access issues following sign-in. Concurrently, the **SDK TypeScript v0.1.33** bundles CLI version 0.27.3, and the **Desktop v0.27.3** release focuses on CI stability and agent hosting fixes. These releases collectively enhance model accessibility, developer tooling, and local application stability.

### Releases
*   **v1.0.0-preview.1**: The milestone preview release focuses on subscription management. It fixes an issue where Qwen subscription accounts were unable to use subscription models after sign-in, with the model catalog now automatically following the user's sign-in state. It also syncs the subscription model catalog and thinking-budget mapping with Qwen Code 0.2.
*   **SDK TypeScript v0.1.33**: This release bundles CLI version 0.27.3, ensuring the TypeScript SDK aligns with the latest CLI source.
*   **Desktop v0.27.3**: A maintenance release fixing CI prettier ignore configuration and allowing an Agent Host to retrieve specific resources.

### Hot Issues (Top 10)
1.  **[#17045](https://github.com/QwenLM/qwen-code/issues/17045)**: Tracking the landing of the 1.0 Preview loop kernel on `main`. This issue is critical as it refactors the agent loop into an event-driven kernel behind a `query()` entry, marking a major architectural shift toward the stable 1.0 release.
2.  **[#17076](https://github.com/QwenLM/qwen-code/issues/17076)**: CI failure in the "Managed Agent gate" due to `AliyunToolPublicationReadRetryTest`. This indicates a stability issue in the managed agent testing pipeline that blocks integration.
3.  **[#17129](https://github.com/QwenLM/qwen-code/issues/17129)**: A "context pollution" bug where resident constraints are injected as independent user messages every round, causing the model to repeat confirmation phrases. This degrades UX in long-running multi-tool sessions.
4.  **[#17105](https://github.com/QwenLM/qwen-code/issues/17105)**: Security fixes for MCP, DOMPurify, and request parsing vulnerabilities. Upgrades DOMPurify to 3.4.17 and MCP SDK to 1.32.2, addressing critical supply-chain security risks.
5.  **[#17088](https://github.com/QwenLM/qwen-code/issues/17088)**: Feature request for fixed-interval `/loop` schedules in Managed Sessions. Currently, `/loop` cannot run in Managed Sessions due to tool profile restrictions, limiting automation capabilities.
6.  **[#17032](https://github.com/QwenLM/qwen-code/issues/17032)**: Fix for the PR watch daemon's dependency seams. Provisions previously unpopulated dependency paths to ensure PR state watches can observe and deliver updates promptly.
7.  **[#17025](https://github.com/QwenLM/qwen-code/issues/17025)**: Stabilizing the OpenTUI streaming markdown preview. Ensures live markdown rendering remains consistent during and after message streaming, preventing layout shifts.
8.  **[#17070](https://github.com/QwenLM/qwen-code/issues/17070)**: Refactoring ACP host turn flags into explicit inputs. Replaces temporary ownership flags with concrete turn inputs, improving the reliability of model interaction spans.
9.  **[#17117](https://github.com/QwenLM/qwen-code/issues/17117)**: Fix for Java heartbeats being cancelled during registration. Ensures heartbeats are not prematurely removed if session attachment changes during timer registration.
10. **[#17012](https://github.com/QwenLM/qwen-code/issues/17012)**: Adding Feishu custom bot webhook delivery to channels. Expands notification capabilities to the Feishu platform, diversifying integration options.

### Key PR Progress (Top 20)
*   **[#17123](https://github.com/QwenLM/qwen-code/pull/17123)**: Migrates legacy `folderTrustFeature` to the active setting, preserving existing values and explicit precedence.
*   **[#16866](https://github.com/QwenLM/qwen-code/pull/16866)**: Adds an interactive web terminal to Managed Agent sessions, bridging the `web_terminal` parity gap via byte-for-byte WebSocket relay.
*   **[#17127](https://github.com/QwenLM/qwen-code/pull/17127)**: Avoids UNC lookups for HTTP URLs in AUTO mode, treating them as uncertain write targets to prevent filesystem resolution errors.
*   **[#16679](https://github.com/QwenLM/qwen-code/pull/16679)**: Reports failed `todo_write` calls to the ACP client as terminal `tool_call_update` with `status: failed`, improving visibility of tool failures.
*   **[#17114](https://github.com/QwenLM/qwen-code/pull/17114)**: Deflakes the TUI loop parity background notification by increasing the background-job delay from 3 to 10 seconds.
*   **[#17088](https://github.com/QwenLM/qwen-code/pull/17088)**: Implements fixed-interval `/loop` schedules for Managed Sessions, enabling recurring tasks in hosted environments.
*   **[#17105](https://github.com/QwenLM/qwen-code/pull/17105)**: Upgrades security dependencies (DOMPurify, MCP SDK) and enforces a 100,000-element tool-input ceiling on owned MCP servers.
*   **[#17117](https://github.com/QwenLM/qwen-code/pull/17117)**: Cancels heartbeat futures during registration if the session attachment is removed, preventing resource leaks.
*   **[#17074](https://github.com/QwenLM/qwen-code/pull/17074)**: Removes the stale tenant guard from synchronous rename settlement, simplifying the authority redesign.
*   **[#17072](https://github.com/QwenLM/qwen-code/pull/17072)**: Removes redundant catalog probe and root lock from binding control, optimizing the session-class Runtime binding workflow.
*   **[#16669](https://github.com/QwenLM/qwen-code/pull/16669)**: Enables synchronized output on Windows Terminal 1.23+ by detecting the terminal capability via `TERM_PROGRAM`.

### Feature Request Trends
The issue queue reveals a strong focus on **session stability and automation**. The most requested direction is **event-driven kernel architecture** (#17045), signaling the community's push toward a more robust 1.0 foundation. There is significant demand for **Managed Session parity** (#17088), specifically requesting `/loop` schedules and web terminal access to make hosted agents as functional as local CLI sessions. Additionally, **context management** is a recurring pain point, with users frustrated by the repetitive injection of constraints (#17129) and the need for better persistence of state across long-running tool-use workflows.

### Developer Pain Points
*   **Context Pollution**: A high-frequency complaint involves the repetitive, round-by-round injection of identical constraint text as separate user messages, forcing models to confirm the same rules repeatedly in long sessions (#17129).
*   **Managed Session Gaps**: Developers building hosted agents report feature parity issues, particularly the inability to use `/loop` schedules and the missing web terminal functionality, which hinders automation and remote work capabilities (#17088, #16866).
*   **CI/Testing Instability**: Recurring CI failures in the "Managed Agent gate" and testing flakiness (deflaking) indicate a need for more robust test isolation and stabilization in the managed agent pipeline (#17076, #17114).
*   **Security Dependency Management**: The recent wave of vulnerability fixes (#17105) highlights an ongoing pain point regarding the management and updating of third-party SDKs and sanitizers to maintain a secure codebase.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the DeepSeek TUI community digest for 2026-11-13.

### Today's Highlights
The community is actively addressing critical stability and localization bugs following the v0.10.3 release. Key fixes include resolving ANSI stripping edge cases that caused text corruption and mending torn session index lines that risked data loss. Simultaneously, significant work is underway to integrate new AI agents like Qwen Code and GitHub Copilot CLI, expanding the platform's capabilities.

### Releases
*No new releases were published in the last 24 hours.*

### Hot Issues (10 Notable)

1.  **#7279** [help wanted] 0.10.3: Run installed agents over ACP: This issue is central to the latest release, detailing how Codewhale can run installed agent CLIs (Claude Code, Codex, Kimi) as sessions over the Agent Client Protocol. It represents a major shift toward integrating external tools directly into the Codewhale sidebar. [Link](https://codewhale-hq/Codewhale/issues/7279)
2.  **#7328** [area:tui, area:core] Provider failures: diagnostic log has no cause: Users report that when provider requests fail, the underlying error cause is lost, appearing only in prose within session records. This hinders debugging. [Link](https://codewhale-hq/Codewhale/issues/7328)
3.  **#7303** [area:tui, area:tools] Non-ASCII file names: octal-escaped paths: A critical bug where Chinese, spaced, or emoji-filled filenames are displayed as octal escapes in `/diff` and git mentions, breaking usability for international users. [Link](https://codewhale-hq/Codewhale/issues/7303)
4.  **#7300** [area:tui, os:macos] ANSI stripping leaves final byte of ESC: A parsing bug in the ANSI stripper that swallows the final byte of `ESC ( B` and text after stray CSI sequences, potentially corrupting terminal output on macOS. [Link](https://codewhale-hq/Codewhale/issues/7300)
5.  **#7298** [area:state] Torn session-index line swallows next entry: An edge case where a crash during a file append leaves a line without a trailing newline, causing the next session entry to be "swallowed" or lost. [Link](https://codewhale-hq/Codewhale/issues/7298)
6.  **#7308** [area:core] Workflow authoring: words in strings reject workflow: A bug where specific words within string literals cause the entire workflow to be rejected, alongside issues with single quote handling in fleet TOML. [Link](https://codewhale-hq/Codewhale/issues/7308)
7.  **#7324** [area:install] Git status hides source of a rename: When a file rename leaves the workspace, the source is hidden from the worktree side, leaving users unaware of what was moved. [Link](https://codewhale-hq/Codewhale/issues/7324)
8.  **#7320** [area:net] Match network entries as internationalized domains: A fix needed to correctly handle internationalized domain names (IDNA) in network policy, ensuring non-ASCII hosts are matched correctly. [Link](https://codewhale-hq/Codewhale/issues/7320)
9.  **#7318** [area:tui] Mask provider keys written next to CJK text: A sanitization bug where provider API keys (like `sk-...`) written within Chinese text are not masked, potentially leaking secrets in UI logs. [Link](https://codewhale-hq/Codewhale/issues/7318)
10. **#7307** [area:install] Skill install/reject ordinary package layouts: Issues where skills with standard tarball layouts (GitHub prefix, dotfiles) are rejected or silently mangled during import. [Link](https://codewhale-hq/Codewhale/issues/7307)

### Key PR Progress (10 Important)

1.  **#7325** [bug, area:localization] Fix(app-server): source of worktree-side rename: Fixes the display of renamed files in git status, ensuring the source of a rename that leaves the workspace is visible. [Link](https://codewhale-hq/Codewhale/pull/7325)
2.  **#7294** [enhancement, area:workflow] feat(workflow): verify sealed candidates: Merges a maintainer-requested opt-in verified evaluator slice, allowing for trusted workflow evaluation against authorized baselines. [Link](https://codewhale-hq/Codewhale/pull/7294)
3.  **#7326** [enhancement, area:core] feat(engine): add GitHub Copilot CLI: Adds GitHub Copilot CLI to the external agent registry, joining Qwen Code as a supported external agent compatible with ACP. [Link](https://codewhale-hq/Codewhale/pull/7326)
4.  **#7319** [bug, area:core] fix(mcp,lsp): answer server requests: Closes a critical JSON-RPC parsing bug where MCP and LSP clients would incorrectly treat server requests as replies, causing communication deadlocks. [Link](https://codewhale-hq/Codewhale/pull/7319)
5.  **#7316** [bug, area:state] fix(state,snapshot): keep index entries after torn line: Implements a fix to ensure session index entries survive a torn append operation, preventing data loss in snapshots. [Link](https://codewhale-hq/Codewhale/pull/7316)
6.  **#7317** [bug, area:tui] fix: show non-ASCII paths as written: Resolves the octal-escaping issue in `/diff`, `@git`, and `@diff` commands, displaying non-ASCII filenames correctly. [Link](https://codewhale-hq/Codewhale/pull/7317)
7.  **#7322** [bug, area:tui] fix(tui): count characters, not bytes: Fixes the session title character limit check to count Unicode characters instead of bytes, allowing Chinese titles longer than 100 characters to be accepted. [Link](https://codewhale-hq/Codewhale/pull/7322)
8.  **#7295** [bug, area:util] fix(util): drop trailing zero from context window labels: Corrects the formatting of context window sizes (e.g., displaying `1.5M` instead of `1.50M`). [Link](https://codewhale-hq/Codewhale/pull/7295)
9.  **#7314** [bug, area:localization] fix(tui): zh-Hans full-width punctuation: Fixes the alignment and punctuation display in the Simplified Chinese locale pack. [Link](https://codewhale-hq/Codewhale/pull/7314)
10. **#7290** [bug, area:core] fix(engine): keep non-ASCII letters in session names: Updates the session name derivation to preserve non-ASCII letters, preventing name collisions for files like `docs/报告.txt`. [Link](https://codewhale-hq/Codewhale/pull/7290)

### Feature Request Trends
The issue queue reveals a strong push toward **interoperability and agent integration**. There is high demand for expanding the external agent registry, evidenced by PRs #7326 (Copilot CLI) and #7293 (Qwen Code) closing recently. Users are actively requesting support for new providers (e.g., UberLLM in #7285) and better ACP integration (#7279). Additionally, there is a recurring need for **robust handling of internationalization**, specifically regarding non-ASCII filenames, CJK text in logs, and localized UI strings, indicating a growing user base outside English-speaking regions.

### Developer Pain Points
*   **Terminal/Text Parsing:** Recurring bugs around ANSI escape code handling and octal-escaping of non-ASCII paths (Issues #7300, #7303, #7317) suggest the text sanitization and git parsing layers are fragile and prone to breaking with diverse input.
*   **Localization Consistency:** The zh-Hans locale pack still mixes ASCII and full-width punctuation (Issues #7299, #7314), and workflow strings contain "deny list" words that break inputs, indicating i18n is an afterthought rather than a first-class design.
*   **State Integrity:** "Torn line" and "swallowed entry" issues (#7298, #7316) highlight a need for more resilient atomic writes in the state management layer to prevent data corruption during crashes.
*   **Secret Leakage:** The sanitization failure (#7318) where provider keys are visible next to CJK text is a significant security/compliance risk for users operating in Asian language environments.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*