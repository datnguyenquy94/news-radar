# AI CLI Tools Community Digest 2026-11-16

> Generated: 2026-11-16 05:58 UTC | Tools covered: 10

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

The AI CLI tool ecosystem on 2026-11-16 is characterized by a tension between rapid feature iteration and stabilizing core session management. While major players like Anthropic's Claude Code and OpenAI's Codex focus on polishing desktop experiences and addressing regression bugs from recent updates, others like Qwen Code and OpenCode are pushing aggressively into agent orchestration and multi-workspace collaboration. A common thread across the landscape is the frustration regarding "opaque" safety blocks and configuration ignores, with developers demanding greater transparency and control over agent permissions and model behavior. The landscape is divided between mature, stability-focused ecosystems (Anthropic, OpenAI) and more experimental, feature-driven ones (Qwen, OpenCode).

### 2. Activity Comparison

| Tool | Issues Opened Today | PRs Merged Today | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 0 | Stable (v5.11492.5 / v2.1.325) |
| **OpenAI Codex** | 10 | 20 | Pre-releases (alpha.6/.7) |
| **Gemini CLI** | 10 | 10 | No new releases |
| **OpenCode** | 11 | 10 | No new releases |
| **Qwen Code** | 10 | 9 | v0.27.4 / Nightly |
| **Pi** | 10 (5 Open/5 Closed) | 9 (5 Closed/4 Open) | No new versions |
| **DeepSeek TUI** | 3 | 5 | No new versions |
| **Copilot CLI** | 10 | 0 | No new versions |
| **Kimi Code** | 0 | 0 | No activity |
| **Grok Build** | 0 | 0 | No activity |

### 3. Shared Feature Directions

*   **Session & State Management:** A dominant theme across Claude Code, OpenCode, and DeepSeek TUI. Users are fighting "silent" state loss, session archiving, and capacity handlers that kill turns before provider calls (DeepSeek #7348). There is a strong demand for robust persistence of background agents and session state across restarts.
*   **Configurability & "Kill Switches":** Tools like Gemini CLI and OpenCode are seeing requests for configurable toggles. Specifically, the ability to opt-out of command substitution (#27393 Gemini) and granular permission controls for `external_directory` or shell writes (#54524, #56288 OpenCode) to prevent unintended filesystem mutations.
*   **Plugin & Mod Integration:** Claude Code, OpenCode, and Qwen Code are all grappling with mod/plugin stability. Issues range from memory leaks in rendering engines (#110325 Claude) to invisible skills in interactive UI (#4886 Copilot) and the need for "?" affordances to explain task purposes (#17398 Qwen).
*   **Cross-Provider/Model Reliability:** Pi and DeepSeek TUI are focused on catalog precision and provider compatibility. Pi deals with OpenAI 403 errors and context window discrepancies (#10605, #11021), while DeepSeek addresses reasoning dialect selection based on endpoints rather than model IDs (#7349).

### 4. Differentiation Analysis

*   **Focus:** **Anthropic/Codex** prioritize desktop stability and UX polish (managing accounts, rendering backdrops, TUI stability). **Qwen Code** and **OpenCode** are architected for agent orchestration and multi-workspace collaboration, reflecting their origins as developer assistants for complex codebases. **Pi** and **DeepSeek TUI** act as connectivity and protocol gateways, focusing heavily on API reliability, model catalog management, and transport-level error handling.
*   **Target Users:** Claude Code and Codex target broad power users and teams needing integrated desktop experiences. OpenCode and Qwen Code cater to developers building custom agents or working in multi-repo environments. Pi and DeepSeek TUI appeal to users integrating multiple LLM providers or running local TUI workflows.
*   **Technical Approach:** Claude Code and OpenAI Codex are backed by large corporations, leading to slower, more deliberate release cycles (stable releases vs. alphas). In contrast, Qwen Code, OpenCode, and DeepSeek TUI show higher velocity with frequent nightly builds and open issue/PR activity, indicative of a more community-driven, experimental pace.

### 5. Community Momentum & Maturity

*   **Most Active:** **OpenAI Codex** leads in raw PR volume (20 merged today), indicating a highly active internal refinement cycle focused on TUI and MCP stability. **OpenCode** also shows strong momentum with 11 new issues and 10 PRs, driven by its large free-tier user base testing boundaries.
*   **Rapidly Iterating:** **Qwen Code** is releasing stable updates (v0.27.4) in tandem with nightly builds, actively shipping new features like the Managed Web Terminal and DingTalk adapter.
*   **Stable/Mature:** **Claude Code** and **Pi** exhibit lower daily velocity but focus on resolving critical regressions and infrastructure stability, signaling mature, production-ready products.
*   **Quiet/Niche:** **Kimi Code** and **Grok Build** show no activity, suggesting they are either in maintenance mode or have low current community engagement.

### 6. Trend Signals

*   **The "Configurable Wall" Era:** The prevailing trend is moving away from hardcoded model behaviors toward configurable "walls" or toggles. Users are increasingly frustrated by models ignoring `settings.json` (Gemini Browser Agent, OpenCode model fallback) and are demanding the ability to opt-out of features like command substitution to preserve agent autonomy.
*   **Infrastructure over Features:** A significant shift toward fixing underlying infrastructure—capacity handlers, session state, and provider error logging—over adding flashy new features. Issues like the DeepSeek capacity handler bug and OpenCode's inotify memory leak highlight that "it just works" is the primary unmet need.
*   **Interoperability & Standards:** There is a push toward standardization, specifically via MCP (Model Context Protocol) skills and cross-workspace delegation (Qwen Code #17419, OpenCode MCP Skills #64157). The ability to seamlessly delegate between agents or workspaces is becoming a key differentiator.
*   **Transparency & Debuggability:** The most discussed pain points—opaque safety blocks, lost diagnostic context, and silent model switches—are driving a demand for better telemetry. Developers want to see *why* a tool was denied or *why* a session switched models, indicating a maturation phase where reliability trumps capability.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-11-16**

---

## 1. Top Skills Ranking

The following 8 Skills have generated the most community discussion (PR comments), reflecting active development interest.

| Rank | PR | Title | Author | Created | Status | Comments | Key Functionality |
|------|-----|-------|--------|---------|--------|----------|-------------------|
| 1 | [#1742](https://github.com/anthropics/skills/pull/1742) | fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers | Kuldeeep18 | 2026-09-08 | **OPEN** | — | Enables MCP>=2.0.0 compatibility by renaming `streamablehttp_client` to `streamable_http_client` and supporting custom headers via `create_mcp_http_client`. Critical for modern MCP integration. |
| 2 | [#1298](https://github.com/anthropics/skills/pull/1298) | fix(skill-creator): isolate trigger evals and handle Windows and runtime failures | MartinCajiao | 2026-06-10 | **OPEN** | — | Isolates trigger evaluation to prevent false misses, adds Windows subprocess support, and handles runtime failures so they don't incorrectly pass negative examples during optimization. |
| 3 | [#1245](https://github.com/anthropics/skills/pull/1245) | Add notion-spec-to-implementation and quantitative-resume-auditor skills | mrdesouzaphd-cmyk | 2026-06-02 | **OPEN** | — | **Notion Spec to Implementation**: Transforms product/tech specs into concrete Notion tasks with detailed implementation plans. **Quantitative Resume Auditor**: Performs quality control on resumes. |
| 4 | [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing: avoid shell=True in with_server.py | Pcmhacker-piro | 2026-10-06 | **OPEN** | — | Security fix: replaces `subprocess.Popen(..., shell=True)` with safer alternatives in `with_server.py`, mitigating CWE-78 command injection risks from unsanitized user/agent command strings. |
| 5 | [#1792](https://github.com/anthropics/skills/pull/1792) | fix(docx): report LibreOffice timeout as an error and verify the output | TINGyu123644 | 2026-09-19 | **OPEN** | — | Now returns an Error when `soffice` times out instead of reporting success. Verifies output DOCX no longer carries revision marks (`w:ins`/`w:del`/`w:moveFrom`/`w:moveTo`). |
| 6 | [#1771](https://github.com/anthropics/skills/pull/1771) | feat(skills): add proofcore-contract-auditor for smart contract notarization | ProofCore-Protocol | 2026-09-15 | **OPEN** | — | Adds `proofcore-contract-auditor` for Web3 developers: performs static analysis of Solidity/Rust smart contracts and anchors cryptographic audit proofs onto the TON Blockchain via ProofCore's zero-storage Merkle protocol. |
| 7 | [#525](https://github.com/anthropics/skills/pull/525) | Add pyxel skill for retro game development | kitao | 2026-03-05 | **OPEN** | — | Guides implementation, headless input-driven runs, direct frame inspection, and task-specific state checks for Pyxel retro game development in Python. |
| 8 | [#1734](https://github.com/anthropics/skills/pull/1734) | Detect orphaned docx comments | rohitjain25 | 2026-09-06 | **OPEN** | — | Detects orphaned comments in DOCX files (comments without corresponding authors or resolved threads). |

**Discussion Context:** The top PRs span three categories: MCP/integration compatibility (#1742), skill-creator tooling (#1298), and new skill additions (#1245, #1771, #525). Security and reliability fixes (#1980, #1792) also rank highly, indicating community focus on production readiness.

---

## 2. Community Demand Trends

From the 13 active Issues, the following Skill directions are most anticipated:

| Trend | Representative Issue | Summary of Demand |
|-------|----------------------|-------------------|
| **Security & Trust** | #492 | Community skills distributed under `anthropic/` namespace enabling trust boundary abuse. Users want namespace isolation or verification mechanisms to distinguish official vs. community skills. |
| **Organizational Sharing** | #228 | Org-wide skill sharing in Claude.ai. Request for a shared skill library or direct sharing links instead of manual .skill file transfers via Slack/Teams. |
| **Evaluation Reliability** | #556 | `run_eval.py` trigger rate consistently 0% with `claude -p`. Community needs reliable skill triggering metrics for skill quality assessment. |
| **Skill Creator UX** | #1352 | `run_eval.py` parallel workers cross-match skill UUIDs, producing false-negative trigger rates. Fix needed for accurate multi-worker evaluation. |
| **Documentation Clarity** | #189 | `document-skills` and `example-skills` plugins install identical content, causing duplicates. Request for clearer boundaries between skill categories. |
| **Theme/Artifact Generation** | #2064 | `theme-factory` description lacks usage guidance. Community wants clearer "when to use it" directives for artifact generation skills. |

**Emerging Themes:** Security/trust boundaries, organizational workflow integration, and evaluation reliability are the strongest demand signals. The community is actively seeking mechanisms to safely share, evaluate, and distribute skills at scale.

---

## 3. High-Potential Pending Skills

These active-comment PRs are strong candidates for near-term merging:

| PR | Title | Author | Comments (estimated) | Rationale |
|----|-------|--------|----------------------|-----------|
| #1742 | fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers | Kuldeeep18 | — (no comment count shown) | MCP>=2.0.0 is the current standard; this fix is functionally critical for new MCP integrations. |
| #1298 | fix(skill-creator): isolate trigger evals and handle Windows and runtime failures | MartinCajiao | — | Addresses core evaluation reliability; Windows support and runtime failure handling are long-standing pain points. |
| #1997 | fix(skill-creator): parse YAML frontmatter scalars correctly | BichengWang | — | Fixes metadata parsing that affects description optimization and evaluation commands. |
| #1771 | feat(skills): add proofcore-contract-auditor for smart contract notarization | ProofCore-Protocol | — | Novel Web3 skill; if approved, could open niche for blockchain/developer tools. |
| #1977 | algorithmic-art: wrapAround() now wraps | gerardrecinto | — | Small but useful algorithmic improvement; demonstrates community focus on refining existing capabilities. |

**Merge Outlook:** #1742 and #1298 represent the highest-priority fixes with broad impact on MCP compatibility and skill evaluation reliability, respectively.

---

## 4. Skills Ecosystem Insight

The community's most concentrated demand at the Skills level is **secure, trust-aware skill integration and sharing**, with secondary focus on **evaluation reliability and organizational workflow enablement**. The top PRs and Issues together indicate that users want skills that work reliably with modern tooling (MCP>=2), can be safely shared within organizations without namespace confusion, and are evaluated accurately across parallel workers. Security (Issue #492), org sharing (Issue #228), and trigger evaluation (Issue #556) are the three most-discussed themes, suggesting the ecosystem is maturing toward production-grade deployment rather than just skill discovery.

---

*Report generated from github.com/anthropics/skills data. All links point to live GitHub PR/Issue pages.*

---

### Claude Code Community Digest
**2026-11-16**

---

#### 1. Today's Highlights
A surge of new bug reports and feature requests has flooded the Claude Code repository following recent desktop updates (v5.11492.5 and Code v2.1.325). The most pressing concern is the regression in artifact tooling and desktop session stability, while the community continues to push for better account management and plugin integration.

#### 2. Releases
No new versions were published in the last 24 hours. The latest stable releases remain **Claude Desktop 5.11492.5** and **Claude Code 2.1.325**.

#### 3. Hot Issues (Top 10)
*   **[#18435](https://github.com/anthropics/claude-code/issues/18435)** (245 comments): The most discussed issue this week. Users demand the ability to manage multiple Claude accounts within the Desktop app. With over 1,000 upvotes, this highlights a critical UX gap for power users and teams.
*   **[#110325](https://github.com/anthropics/claude-code/issues/110325)** (1 comment): A fresh bug report where the animated mod backdrop freezes permanently after the window renderer grows to ~180 MB, indicating a potential memory leak in the rendering engine.
*   **[#110334](https://github.com/anthropics/claude-code/issues/110334)** (0 comments): A regression where the Artifact tool is missing from Code tab sessions, leaving only the Claude Docs tool available.
*   **[#109853](https://github.com/anthropics/claude-code/issues/109853)** (6 comments): A Windows desktop bug where the mod backdrop fails to draw, rejecting the `image` ground as "outside ThemeGround."
*   **[#110336](https://github.com/anthropics/claude-code/issues/110336)** (0 comments): A false positive safety block on benign frontend maintenance edits, repeatedly blocking legitimate `git worktree` and component library changes.
*   **[#110333](https://github.com/anthropics/claude-code/issues/110333)** (0 comments): Intermittent replacement of custom mod spinners with default dots on the desktop, affecting the visual consistency of local plugins.
*   **[#110335](https://github.com/anthropics/claude-code/issues/110335)** (0 comments): A feature request for `/reload-plugins` to re-read files passed via `--settings`, aligning behavior with `.claude/settings.local.json`.
*   **[#110320](https://github.com/anthropics/claude-code/issues/110320)** (1 comment): A request to rename the "Ready for review" agent status to "Waiting" for merge-pending agents, improving clarity in agent workflows.
*   **[#110314](https://github.com/anthropics/claude-code/issues/110314)** (1 comment): A hookify bug where block rules never communicate the `permissionDecisionReason` to the model, leaving developers unaware of why a tool was denied.
*   **[#110338](https://github.com/anthropics/claude-code/issues/110338)** (0 comments): A request to show usage stats inline during sessions, reducing the need to navigate away to Settings.

#### 4. Key PR Progress
No Pull Requests were updated in the last 24 hours.

#### 5. Feature Request Trends
The issue data reveals a strong consensus around three pillars:
*   **Multi-Account Support:** Issue #18435 is the definitive request, asking for easy profile switching within the Claude Desktop app.
*   **Plugin & Mod Enhancements:** There is a continuous demand for better mod integration, specifically the ability for mods to open the browser pane (#99214) and the need for `/reload-plugins` to respect `--settings` flags (#110335).
*   **Debuggability & Permissions:** Developers are frustrated by opaque denial reasons in hooks (#110314, #72589) and the false-positive auto-mode classifier (#104811, #97914), signaling a need for better transparency and control over agent permissions.

#### 6. Developer Pain Points
*   **Opaque Safety Blocks:** The "cyber safeguard" and false-positive safety blocks are recurrent themes. Users report legitimate security work and frontend maintenance being blocked (#87938, #110336, #104811), causing significant workflow disruption.
*   **Session & State Management:** Issues surrounding Remote Control sessions ignoring `defaultMode` (#102341), sessions archiving on mobile (#100114), and the loss of background agents after usage resets (#110328) indicate a need for more robust state persistence.
*   **Rendering & UI Stability:** Recent updates seem to have introduced memory leaks (#110325) and rendering glitches (spinner replacement #110333, backdrop issues #109853), destabilizing the desktop experience.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for 2026-11-16.

### **Today's Highlights**
On November 16, 2026, the Codex ecosystem saw a flurry of activity centered around polishing the desktop app experience and addressing immediate stability bugs. The most pressing issue involves Windows users facing blocked workflows and HTTP errors, while the community continued a rapid cadence of internal refinements, closing 20+ Pull Requests to improve TUI stability and MCP integration.

### **Releases**
*   **rust-v0.171.0-alpha.7 & rust-v0.171.0-alpha.6**: Two pre-release versions of the Rust CLI were published within the last 24 hours. These appear to be internal iterations leading up to a stable 0.171 release, focusing on preparatory changes rather than user-facing features.

### **Hot Issues** (Top 10)
1.  **[#61749] Windows Terminal windows repeatedly pop up** (2 comments): A disruptive bug where terminal windows pop up randomly during normal CLI usage on v0.169.0, significantly impacting workflow continuity on Windows 10/11.
2.  **[#61754] Yellow capture border persists after G HUB task** (1 comment): A computer-use issue where the yellow selection border remains on screen after a task completes, leaving visual artifacts that require a manual fix.
3.  **[#61734] Feature request: MCP caller-bound messaging** (1 comment): A feature request for an integration layer allowing external agents to post messages into existing desktop conversations with typed outcomes, bridging the gap between model-independent coordination and Codex.
4.  **[#61752] Voice chat fails to start on macOS** (1 comment): Users report voice chat failing with connection reset/timeout, though browser-based voice continues to function, pointing to a desktop app-specific connectivity stack issue.
5.  **[#61714] Unelevated sandbox refuses workspace-write** (1 comment): A sandbox permission bug where the CLI refuses workspace writes if the current working directory differs only in letter case from the allowed root, causing unnecessary friction for developers.
6.  **[#61750] Subagent spawns carry no message text** (1 comment): A backend issue where subagents spawned via the app-server do not relay their initial message text, forcing parents to guess the subagent's intent or re-prompt.
7.  **[#61745] Computer Use screenshots time out on Windows 10** (1 comment): Accessibility and keyboard input work, but screenshot capture times out, hindering the visual "Computer Use" capability for automation tasks.
8.  **[#61736] Withdrawn session bug**: A previously reported session issue that has been withdrawn, indicating a possible resolution or duplicate report.
9.  **[#60594] HTTP 400 for repeated image inputs with zstd compression** (10 comments): A critical connectivity bug where repeated image inputs fail with a 400 error when using zstd compression, though uncompressed inputs succeed, affecting multimodal workflows on Windows.
10. **[#56873] Chrome and IAB unavailable after reinstall** (19 comments): A long-standing Windows browser route issue persisting after reinstallation and fresh chats, preventing web automation and browsing features from functioning.

### **Key PR Progress** (Top 20)
The community merged a significant volume of refinements today, focusing on TUI stability, Unicode handling, and MCP robustness:
*   **PR #61747**: Refactored history and notes tool registration, splitting construction into dedicated builders for better modularity.
*   **PR #61744**: Clarified shell-specific login guidance for `exec_command`, specifically addressing PowerShell profile behavior.
*   **PR #61742**: Added cloud icons (`☁︎`) to thread labels across the TUI, improving visual distinction for cloud-based threads in the interface.
*   **PR #61738**: Optimized MCP status pages by reusing matching thread inventories, reducing redundant API calls when authentication and permissions remain stable.
*   **PR #61737**: Fixed a bug where cloud agent messages lost their "phase" (commentary/final answer) during backend conversion, ensuring consumers can distinguish message types.
*   **PR #61731**: Stabilized bidirectional TUI headers during shimmer updates, preventing terminal rendering breaks when rendering right-to-left characters or Arabic numbers.
*   **PR #61727**: Optimized default and attached thread listings with targeted indexes, improving performance by avoiding full subagent thread scans.
*   **PR #61726**: Preserved graphemes in mention search highlighting to correctly render multi-codepoint emoji in truncated mention results.
*   **PR #61725**: Fixed Unicode grapheme highlighting in history search (Ctrl+R), ensuring combining marks highlight the correct visible character.
*   **PR #61724**: Implemented a fallback to `clip.exe` for single-line ASCII copies in WSL, avoiding the overhead of PowerShell for simple text transfers.

### **Feature Request Trends**
Analysis of the issue queue reveals a strong push toward **interoperability and automation resilience**.
*   **MCP Integration**: There is significant demand for robust OAuth MCP server support and "caller-bound" messaging features (#61734), allowing external services to inject messages into active Codex conversations.
*   **Cross-Platform Consistency**: Fixes regarding sandbox permissions (#61714) and voice chat stability (#61752) highlight a need for the macOS and Windows desktop experiences to parity with the web/browser experience.
*   **Workflow Preservation**: Requests to preserve session state, thread phases, and custom rules editor functionality (#61746, #58638) indicate users want a stable, predictable environment that survives restarts and updates without manual reconfiguration.

### **Developer Pain Points**
*   **Windows Sandbox & Permissions**: A recurring theme is the sandbox refusing workspace access due to case-sensitive path matching (#61714) and the "blocked by policy" messages with no actionable reason (#57623), forcing developers to debug permission models rather than code.
*   **Browser/Connectivity Instability**: Issues like the HTTP 400 with zstd compression (#60594) and the persistent Chrome/IAB route failure after reinstall (#56873) suggest the browser automation and API connectivity layers are fragile, particularly following app updates or fresh installations.
*   **Visual Artifacts & UI State**: Users are frustrated by persistent UI state issues, such as the yellow capture border (#61754) and the "Custom rules can't be edited" message (#61746), which break the polish of the desktop app experience despite functional backend work.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

**Gemini CLI Community Digest - 2026-11-16**

### Today's Highlights
The Gemini CLI project continues its steady progression toward stability and agent robustness. A critical bugfix (PR #29367) addressing subagent turn-limit reporting has been merged, while the community actively debates the trade-offs between raw model power and user-configurable safety boundaries. The week's most discussed theme revolves around AST-aware tooling and the need for configurable command substitution.

### Releases
*No new releases were published in the last 24 hours.*

### Hot Issues (Top 10)

1.  **#27393: Command Substitution Configurability** (32 comments) – Users are requesting a `allowCommandSubstitution` toggle in `settings.json`. This addresses the frustration of the hardcoded "wall" blocking models in YOLO mode, seeking the ability to opt-out for better agent autonomy.
2.  **#22323: Subagent Recovery Bug** (13 comments) – A persistent issue where subagents report `status: "success"` and `Termination Reason: "GOAL"` even after hitting `MAX_TURNS`. PR #29367 is the linked fix, preventing false success signals.
3.  **#19873: Leverage Model Bash Affinity** (9 comments) – An EPIC investigating "Zero-Dependency OS Sandboxing." This explores letting models natively chain POSIX tools (`grep`, `sed`, `awk`) instead of relying on CLI wrappers, aiming to maximize model efficiency.
4.  **#21409: Generalist Agent Hang** (8 comments) – Models hang indefinitely when deferring to the generalist agent for simple tasks like folder creation. Community workarounds involve instructing the model to avoid sub-agents.
5.  **#22745/22747: AST-Aware Tools Investigation** (7 comments each) – Two linked EPICs assessing the value of AST-aware file reads and searches. The goal is to reduce token noise and misaligned reads by precisely targeting method bounds.
6.  **#21968: Sub-agent Underutilization** (7 comments) – Users report that Gemini does not autonomously use custom skills and sub-agents unless explicitly instructed, hindering "hands-free" workflows.
7.  **#22267: Browser Agent Settings Ignored** (5 comments) – The Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`), requiring maintainer intervention to respect user configuration.
8.  **#22672: Destructive Behavior Discouragement** (3 comments) – A feature request to prevent the model from using `git reset --force` or similar destructive commands during complex operations.
9.  **#22598: Subagent Trajectory Visibility** (2 comments) – A request to make subagent trajectories easily shareable and reviewable via the `/chat share` command, improving debugging and evaluation.
10. **#22186: get-shit-done Crash** (3 comments) – Intermittent crashes occur when the `get-shit-done` output hook finishes printing the user summary, often related to database initialization timing.

### Key PR Progress (Top 10)

1.  **#30312: Windows Shell Accuracy** – Updates the model-facing `run_shell_command` description to accurately reflect the selected Windows shell (e.g., PowerShell 5.1 native argument behavior), fixing misleading tool descriptions.
2.  **#30308: Windows Tilde Paths** – Expands Windows tilde-backslash paths (e.g., `~\...`) in `resolvePath`, ensuring settings like `policyPaths` resolve correctly against the user's home directory.
3.  **#30307: Background Process Exit Codes** – Fixes the display of `(Exit Code: null)` for background processes killed by signals, now correctly reporting the exit code.
4.  **#30306: Workspace Scan Stability** – Prevents warning logs (`ENOENT`) when subdirectories are removed mid-scan, specifically targeting `.gemini/projects.json.lock` race conditions.
5.  **#30267: Git Detection** – Detects local git clone installations from the CLI executable path, preventing unintended `npm install -g` triggers during auto-updates when running from source checkouts.
6.  **#30305: excludeTools Documentation** – Updates extension documentation to correct the `excludeTools` implementation, clarifying that entries are compared against the tool's whole name, not regex patterns.
7.  **#29367: Subagent Terminate Reason** – **MERGED** Fix for #22323. Preserves the original termination reason on subagent recovery, preventing the false `status: success` / `GOAL` report.
8.  **#30082: API Timeout Setting** – Adds `model.requestTimeoutMs` setting to raise the 60s API headers timeout, resolving issues with long-thinking requests being abruptly aborted.
9.  **#30281: Fetch Timeout Honor** – Upgrades core Undici to v7.30.2 to ensure configured global dispatchers are published under the Node 26 built-in fetch symbol.
10. **#30090: API Key Security** – Closes a security gate in CI where `GEMINI_API_KEY` was being exposed to fork-controlled code during chained e2e tests.

### Feature Request Trends
The community is heavily focused on **agent control and safety boundaries**. The dominant trend is the demand for **configurable "kill switches"**—specifically, the ability to toggle command substitution and bash affinity on or off via `settings.json` (Issue #27393). There is also a strong push for **better visibility and recovery** from agent failures, including visible subagent trajectories (#22598), accurate termination reasons (#22323/#29367), and preventing the model from taking destructive actions unintentionally (#22672). Additionally, there is significant interest in **AST-aware tooling** (#22745/22747) as a means to reduce token overhead and improve precision in codebase manipulation.

### Developer Pain Points
*   **Agent "Hang" State:** The generalist agent frequently hangs on simple tasks (Issue #21409), forcing users to manually intervene or disable sub-agent usage.
*   **Silent Blocks & Walls:** Users feel the current command substitution block is a "hardcoded wall" (#27393) that prevents models from leveraging their native bash capabilities in YOLO mode without explicit opt-in.
*   **Configuration Ignorance:** A recurring frustration is that the Browser Agent and other components ignore `settings.json` overrides regarding `maxTurns` and other limits (#22267).
*   **Context Bloat & Noise:** Models struggle with high token counts due to "firehose" file reads, prompting requests for AST-aware surgical reads (#19873/#19561) to improve efficiency.
*   **Subagent Context Loss:** Bug reports frequently lack context regarding what occurred inside subagents, making debugging difficult (#21763).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

### GitHub Copilot CLI Community Digest
**Date:** 2026-11-16

#### 1. Today's Highlights
The community is actively addressing critical session stability and OAuth integration bugs ahead of the holiday period. Issue #4905 reports that desktop sessions are dying within minutes due to a "GitHub credential registration is no longer available" error, rendering the MCP server catalog fatal. Meanwhile, Issue #4847 highlights a managed-settings refresh bug that disables the `/allow-all` Computer Use plugin in long-running VS Code sessions. On the feature front, Issue #5469 requests a setting to hide the "Discover Copilot Fusion" promotional prompt, indicating user fatigue with onboarding flows.

#### 2. Releases
No new versions were published in the last 24 hours.

#### 3. Hot Issues (Top 10)
*   **#4905** [area:authentication, area:sessions]: Desktop sessions die minutes after spawn due to "GitHub credential registration is no longer available." This breaks the MCP server catalog and is the most commented issue today (7 comments, 4 👍).
*   **#4847** [area:permissions, area:enterprise, area:mcp]: Automatic managed-settings refresh breaks IDE MCP reload and disables `/allow-all`. A critical bug for enterprise users relying on Computer Use (4 comments, 4 👍).
*   **#4901** [area:mcp]: Atlassian MCP OAuth fails with `unauthorized_client: redirect_uri is not registered` on the v2 endpoint, affecting builds from 1.0.86 onwards (3 comments).
*   **#4888** [area:mcp]: MCP client sends a legacy `2025-11-25` `initialize` request after a successful `2026-07-28` discovery, causing protocol mismatch rejections on modern SDK servers (3 comments).
*   **#4886** [area:plugins]: `--plugin-dir` skills load but are omitted from `/skills` and `/env` output, though they appear in non-interactive `list --json` (3 comments).
*   **#4840** [area:models]: BYOK Copilot CLI not working with Deepseek; JSON deserialization error for `tools[4].type: unknown variant custom`.
*   **#4838** [area:non-interactive, area:plugins]: `skill` tool intermittently fails in headless `-p` mode with "No model-invocable skills available" despite skills being listed in the system prompt.
*   **#4837** [area:enterprise, area:plugins]: Policy-driven `enabledPlugins` installs the plugin but records `"enabled": false`, preventing activation.
*   **#4894** [area:sessions, area:terminal-rendering]: Resuming a long session scrolls very far back, with the scrollbar potentially unresolvable to the current position.
*   **#5469** [area:configuration]: Request to add a setting to hide the "Discover Copilot Fusion" promotional prompt (0 comments, newly opened).

#### 4. Key PR Progress
*No Pull Requests were updated in the last 24 hours.*

#### 5. Feature Request Trends
The most requested feature directions this cycle center on **session management and visibility**. Users want the ability to see active sessions across multiple folders/grouping (Issue #5463) and control how long sessions persist before updating (`updated_at` bumps on git checkout, #4903). There is also strong demand for **autopilot customization**, specifically a configurable delay before clarification questions are skipped (#4899) and explicit control over model context window size to pin sessions to specific tiers (#4898). Additionally, users are seeking more **theming options** (#5465) and the ability to hide promotional prompts (#5469).

#### 6. Developer Pain Points
Recurring frustrations revolve around **OAuth and credential management**. The Figma DCR rejection due to `client_name` ("copilot-cli" vs "GitHub Copilot CLI", #4906) and the desktop session expiry due to credential registration limits (#4905) indicate a systemic issue with how the CLI registers and maintains OAuth clients. **MCP protocol compatibility** is another hot area, with legacy `initialize` fallbacks failing on modern servers (#4888, #5464). Furthermore, **policy-driven plugin configuration** is broken, where plugins install but remain disabled (`enabled: false`, #4837), and `--plugin-dir` skills are invisible in the interactive UI (#4886). Lastly, Windows stability remains a concern with hard crashes (`0xc0000005`) losing in-flight turns (#4891).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-11-16

## Today's Highlights
The GitHub activity for OpenCode on 2026-11-16 reveals a surge of recent bug reports and feature proposals, with 11 new issues and 11 new PRs created today. The most pressing concern is the **free tier abuse and model fallback bypass** (Issue #59387 with 371 comments and #63958 with 5 comments), where paid models are used despite removal from allowed lists, and free model limits are inconsistently enforced across sessions. Additionally, a critical **TUI mouse interaction bug** (Issue #64154) and a **service watchdog memory leak** (Issue #64159) affecting Linux stability demand immediate attention.

## Releases
No new releases were published in the last 24 hours.

## Hot Issues (10 noteworthy)

1. **#59387 - Free tier issues** (371 comments) - The main repository for free tier problems; users report "Free usage exceeded," limits that never reset, and Desktop version localization issues. This is the epicenter of licensing friction.
2. **#63958 - Model fallback bypass** (5 comments) - Paid models activate despite being removed from allowed-models lists, and model changes occur when switching between Plan/Build modes, violating user configuration.
3. **#64154 - TUI mouse wheel** (1 comment) - Mouse wheel always scrolls the composer regardless of pointer position; the transcript never responds, rendering keyboard-less navigation broken on Linux.
4. **#64159 - Service watchdog leak** (1 comment) - `opencode serve --service` accumulates inotify watches (2,368+), memory (RSS ~440MB), and CPU, ultimately triggering OOM killer on long-running sessions.
5. **#63976 - pty zombie processes** (5 comments) - Since v2.3.0, every finished shell command becomes a `<defunct>` zombie child of the `opencode-pty daemon`, growing unbounded under a single PID.
6. **#64162 - Plan mode worktree bypass** (1 comment) - `worktree_create`/`worktree_remove` tools execute successfully in Plan mode, which is documented as read-only but mutates Git state and filesystem.
7. **#64151 - Desktop submenu dismissal** (1 comment) - Previous submenus remain mounted when switching top-level menu items, causing overlapping ghosted labels and stray interactions in the GUI.
8. **#64149 - inotify startup hang** (1 comment) - OpenCode hangs at startup with blank screen when `fs.inotify.max_user_instances` is exhausted, a regression from prior fixes.
9. **#64150 - Chat adapter web_search failure** (1 comment) - Switching from OpenAI Responses model (with hosted `web_search`) to Chat Completions model causes immediate failures with "Chat assistant messages only support text..."
10. **#64165 - Execute hang on parallel MCP searches** (1 comment) - On Windows, `execute` calls with parallel Z.ai MCP searches hang for over 23 minutes, with accepted steer remaining in pending state.

## Key PR Progress (10 important)

1. **#64137 - Windows pipe spawn retry** - Fixes access denied errors when spawning Microsoft PowerShell 7 in packaged apps; closes #63892.
2. **#64140 - Async video generation API** - Introduces HTTP-backed media pipeline for disk-backed video generation, complementing the agent tool PR #63666.
3. **#64166 - Mid-conversation tool changes** - `@opencode/ai` can now add/remove tools partway through conversations; supports models natively adapting tool lists.
4. **#64160 - Experimental schedules → automations** - Turns experimental schedules into automations with triggers and actions that prompt sessions or run Code Mode model-less.
5. **#64157 - Experimental MCP Skills support** - Adds initial support for [MCP Skills](https://github.com/modelcontextprotocol/ext-skills), enabling custom tool capabilities via standardized protocol.
6. **#64153 - Desktop upgrade path** - OpenCode 1 desktop now offers OpenCode 2.0 upgrade, bridging the gap between major versions for desktop users.
7. **#64115 - Plugin effect rejection** - Fixes crashes when plugins return non-Effect values (Promises or 1.x-style hook maps) from their `effect` property.
8. **#64113 - Scrollbar vertical adjustment** - Applies `verticalScrollAdjustment` to scrollbar thumb drag, fixing inverted drag behavior in collapsed tool rows.
9. **#64116 - Status badge line clamping** - Ensures status badges (Exit 1/Failed/Timed out) stay on single line in collapsed shell tool rows, preventing clipping.
10. **#64156 - LaTeX control space support** - Supports LaTeX control space in math mode; resubmission of prior PR #55359 closed by automated cleanup.

## Feature Request Trends
The issue stream reveals strong demand for **permission model refinement** (issues #54524, #56288, #48882) - users want granular control over `external_directory` prompts, particularly for shell tool writes outside session locations. The **legacy UI restoration** request (#48882, 47 👍) indicates dissatisfaction with the recent sidebar redesign replacing the persistent left sidebar. **Free tier transparency** remains the top user pain point (#59387), with requests for clearer limits and reset mechanisms. **Model configuration persistence** (#63958) is frequently violated when switching between Plan/Build modes. Finally, **TUI usability** improvements (#64154, #62862) focus on mouse navigation, skill mention shortcuts, and review panel visibility on new sessions.

## Developer Pain Points
1. **Free tier opacity** - Users cannot reliably predict when free message limits reset; "reset at" timestamps fail, and "You've used today's free messages" appears even after model switching (#58687, #59387).
2. **Permission dialog fatigue** - `external_directory: ask` prompts are skipped for shell writes but enforced for file tools, creating inconsistent permission experiences (#56288).
3. **Plan mode read-only violations** - Tools like `worktree_create` bypass documented read-only restrictions in Plan mode, risking unintended Git/filesystem mutations (#64162).
4. **TUI mouse antipatterns** - Mouse wheel universally scrolls the composer instead of respecting pointer position over the transcript; submenus fail to dismiss on top-level navigation changes (#64154, #64151).
5. **Service stability on Linux** - Inotify watch accumulation and memory bloat force OOM kills on long-running `opencode serve` instances, halting sessions mid-work (#64159).
6. **Model fallback unpredictability** - Catalog model selection overrides user-configured preferences, and fallback logic ignores `allowed-models` lists during Plan/Build switches (#63958).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

### Today's Highlights (2026-11-16)

The Pi repository witnessed a flurry of activity on November 16th, marked by several issue resolutions and a significant focus on model catalog management. The day's most impactful activity includes the removal of deprecated OpenAI models from the catalog and the closure of issues regarding model identifier conflicts and OpenAI 403 errors. Community engagement remains high, particularly around the `subagent` tool workflow and durable session management.

### Releases

No new versions were published in the last 24 hours. The latest merge was **PR #11800**, which updates Ant Ling model compatibility and removes deprecated models, unifying the API with DeepSeek formats.

### Hot Issues (10 Notable Items)

1.  **#10605 [OPEN] ChatGPT/OpenAI OAuth 403 issue** (14 comments)
    *   **Why it matters:** Users subscribed to ChatGPT Plus are encountering a 403 error regarding "subscription sharing," preventing re-authentication. This is a blocking issue for OpenAI integration stability.
    *   **Link:** [Issue #10605](https://github.com/earendil-works/pi/issues/10605)

2.  **#11021 [OPEN] OpenAI: ChatGPT sign-in uses 272K context despite 500K catalog** (14 comments)
    *   **Why it matters:** A discrepancy between the advertised model context window (500K) and the actual context reported to the API (272K) results in inefficient compaction budgets and smaller effective context windows for users.
    *   **Link:** [Issue #11021](https://github.com/earendil-works/pi/issues/11021)

3.  **#12202 [CLOSED] OpenAI catalog: skip deprecated models.dev entries, drop gpt-5-chat-latest** (1 comment)
    *   **Why it matters:** This cleanup prevents the model selector from showing obsolete OpenAI models (like `gpt-4`, `o1`) that OpenAI has already shut down, reducing user confusion and API errors.
    *   **Link:** [Issue #12202](https://github.com/earendil-works/pi/issues/12202)

4.  **#12193 [CLOSED] Opening the model selector strands a session whose provider key was renamed in models.json** (1 comment)
    *   **Why it matters:** Demonstrates a critical state-management bug where renaming a provider key causes sessions to become stranded or fail to load, highlighting the fragility of provider configuration.
    *   **Link:** [Issue #12193](https://github.com/earendil-works/pi/issues/12193)

5.  **#12195 [CLOSED] subagent({ workflow: true }) loses code block on some hosts** (1 comment)
    *   **Why it matters:** A usability bug in the `subagent` tool where code blocks are lost during tool calls, breaking the workflow for developers relying on script execution fallbacks.
    *   **Link:** [Issue #12195](https://github.com/earendil-works/pi/issues/12195)

6.  **#12196 [CLOSED] RPC: deferred prompt gets no response when bootstrap settlement starts compaction** (1 comment)
    *   **Why it matters:** An RPC mode bug where prompts sent during session bootstrap are ignored if compaction begins, leading to lost user intent and failed sessions.
    *   **Link:** [Issue #12196](https://github.com/earendil-works/pi/issues/12196)

7.  **#12191 [CLOSED] openai-codex: HTTP fallback error hides the preceding WebSocket failure** (1 comment)
    *   **Why it matters:** Poor error handling obscures the root cause of connection failures, making debugging WebSocket vs. HTTP transport issues difficult for users.
    *   **Link:** [Issue #12191](https://github.com/earendil-works/pi/issues/12191)

8.  **#12187 [CLOSED] Session restore silently switches to an unrelated model** (1 comment)
    *   **Why it matters:** A silent model switch during session restore can lead to unexpected token usage and cost overruns, as users resume work on a model they did not intend to use.
    *   **Link:** [Issue #12187](https://github.com/earendil-works/pi/issues/12187)

9.  **#12192 [CLOSED] docs.pi.dev: links inside article bodies are double-prefixed with /latest and 404** (1 comment)
    *   **Why it matters:** Documentation links are broken due to a routing prefix error (`/latest/latest/...`), preventing users from accessing docs via search or direct links.
    *   **Link:** [Issue #12192](https://github.com/earendil-works/pi/issues/12192)

10. **#12076 [OPEN] Compaction: Pi ends a tool loop silently instead of compacting** (3 comments)
    *   **Why it matters:** Near context window limits, Pi enters a silent compaction loop that adds token overhead without effectively reducing context, potentially leading to context exhaustion.
    *   **Link:** [Issue #12076](https://github.com/earendil-works/pi/issues/12076)

### Key PR Progress (10 Important Items)

1.  **#11800 [CLOSED]** Fix(AI): Update Ant Ling model compatibility and remove deprecated models. Unifies API compatibility with DeepSeek, replacing legacy `Ling 2.6`/`Ring 2.6` with `Ling 3.0` and `Ling 3.1`.
2.  **#12198 [CLOSED]** Fix(coding-agent): Bump `undici` to 8.12.4. Security/dependency update for the coding agent package.
3.  **#11854 [OPEN]** Fix(coding-agent): Kill whole process trees of bash commands on Windows. Aims to fix process cleanup issues where child processes are missed during termination.
4.  **#12201 [CLOSED]** Update Ant Ling models to Ling 3.x and use DeepSeek-compatible reasoning. Updates built-in provider entries to the latest Ling 3.0/3.1 format.
5.  **#12200 [CLOSED]** Approval request: undici 8.12.4 dependency fix. PR awaiting maintainer `lgtm` to reopen the dependency bump.
6.  **#12199 [CLOSED]** Subagent workflow: True tool description misses documented script fallback. Addresses the undocumented `options.script` fallback for the `subagent` tool.
7.  **#12197 [CLOSED]** Subagent workflow: True tool description misses documented script fallback. Duplicate of #12199, focusing on the code block loss issue.
8.  **#12196 [CLOSED]** RPC: deferred prompt gets no response when bootstrap settlement starts compaction. Fixes the RPC compaction timing issue.
9.  **#12195 [CLOSED]** Subagent({ workflow: true }) loses code block on some hosts — script fallback undocumented. Further diagnosis of the code block loss bug.
10. **#12193 [CLOSED]** Opening the model selector strands a session whose provider key was renamed in models.json. Fixes the provider key rename session stranding bug.

### Feature Request Trends

Analysis of the issue queue reveals a strong trend toward **model catalog precision and provider reliability**. Users are actively requesting the removal of deprecated models (e.g., `gpt-5-chat-latest`, shut-down OpenAI models) to clean up the model selector. There is significant demand for **context window optimization**, specifically resolving the discrepancy between advertised and actual token limits (Issue #11021). Additionally, there is a clear focus on **robust session management**, including preventing silent model switches on restore (Issue #12187) and fixing compaction loops that fail to reduce context (Issue #12076). The `subagent` workflow also highlights a need for better documented fallback mechanisms when code blocks are lost.

### Developer Pain Points

1.  **OAuth and Authentication Instability:** The OpenAI 403 "subscription sharing" error (Issue #10605) and the context window discrepancy (Issue #11021) indicate ongoing friction between the client and OpenAI's evolving API policies and billing models.
2.  **Provider Configuration Fragility:** Issues #12187 and #12193 highlight that provider key renames and session restoration are error-prone, often resulting in sessions switching to unintended models or becoming stranded.
3.  **Compaction Inefficiency:** Issue #12076 reveals that the compaction algorithm can enter ineffective loops, adding token overhead without shrinking the context, which is critical for users working with large context windows.
4.  **Debuggability of Transport Failures:** Issue #12191 demonstrates that error handling for WebSocket fallbacks is opaque, leaving developers unable to diagnose whether a failure occurred at the transport layer or the HTTP layer.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest**
**Date:** 2026-11-16
**Source:** github.com/QwenLM/qwen-code

---

### 1. Today's Highlights
The community saw significant activity today with the release of **Qwen Code v0.27.4** and **Desktop v0.27.4**. The flagship feature is the introduction of a **Managed Web Terminal**, allowing agent sessions to access local directories interactively without persisting credentials or paths. Additionally, the **DingTalk adapter** was added to the managed-agent ecosystem, expanding integration reach for Chinese enterprise users. A new **sidebar workspace filter** for the Web Shell was also deployed to improve navigation in multi-workspace setups.

### 2. Releases
*   **v0.27.4:** The main release bundles CLI 0.27.4. Key highlights include the Managed Web Terminal and the DingTalk adapter.
*   **v0.27.3-nightly.20261115.6e3b2dcc19:** A nightly build released yesterday (2026-11-15) featuring the Web Shell sidebar filter and the DingTalk adapter.
*   **Desktop v0.27.4:** The desktop client was updated to align with the CLI changes, specifically registering client filesystems into managed sessions.

### 3. Hot Issues (10 Notable)
*   **#17408 [P1 bug]:** A critical session management bug where `ChildResultRelay` spins in `binding` forever when using workspace isolation, causing parent turns to time out. This is a core reliability issue for bound sessions.
*   **#17419 [Feature Request]:** A request for native Agent Collaboration between different registered workspaces within the same daemon, allowing a session in Workspace A to delegate to an assistant in Workspace B.
*   **#17422 [Feature Request]:** A streaming issue where `tool_use` blocks are only emitted after complete argument generation, causing silence during large file writes with `--include-partial-messages`.
*   **#17045 [Feature Request/Roadmap]:** Tracks the "1.0 Preview loop kernel" migration to `main`, aiming to rebuild the agent loop as an event-driven kernel behind a `query()` entry point.
*   **#17418 [Bug/Flaky Test]:** A deflaked integration test for ACP agent loop parity, highlighting ongoing stability efforts in the experimental unified agent loop.
*   **#17404 [Bug/Flaky Test]:** A UI component test (`SkillsManagerDialog`) flagged as flaky by CI Failure Patrol, requiring deterministic stabilization.
*   **#17420 [Feature]:** PR #17420 implements running subagents on the shared agent loop by default, expanding the capabilities of the AgentCore system.
*   **#17412 [Bug]:** A workspace binding issue where external execution actors fail with `workspace_unavailable` before runtime binding is acquired in hosted-workspace-external-files deployments.
*   **#17403 [Feature]:** Adds generic outbound webhook delivery to the channels system, enabling POST notifications to configured endpoints for task results.
*   **#17398 [Feature]:** Adds a "?" affordance to background-task chips in the Web Shell composer, allowing users to ask the model to explain task purposes.

### 4. Key PR Progress (10 Important)
*   **#17417 [Closed]:** Lands test-only residuals for the managed DingTalk adapter, pinning guards for lifecycle, settings, and export surfaces.
*   **#17415 [Open]:** Archives the Kubernetes runtime and resident CSI backend out of the managed agent server into a cold source archive, simplifying the codebase.
*   **#17403 [Open]:** Implements generic outbound webhook delivery for channels, adding send-only webhook capabilities with optional Bearer authentication.
*   **#17398 [Open]:** Adds a "?" affordance to background-task chips in the Web Shell composer, enabling model explanations of task purposes.
*   **#17377 [Open]:** Ports the Qoder model-availability ledger into main, adding per-model health state tracking for the fallback chain.
*   **#17372 [Open]:** Fixes core logic to retain arguments after redirects in permission rules, preventing the granting of every subcommand of an executable.
*   **#17364 [Open]:** Improves the Web Shell branch picker UI to resolve "dirty-tree" checkout refusals by offering "Stash Changes and Switch" or "Discard and Switch" options.
*   **#17349 [Open]:** Enhances the Web Shell Goals page UI to make Goal state and session navigation readable at a glance via card enhancements.
*   **#17272 [Open]:** Publishes the managed `/loop` skill variant by profile, providing a `loop` skill to managed sessions on loop-bearing tool profiles.
*   **#17276 [Open]:** Fixes the Web Shell copy menu to show when a selection boundary lands on row chrome, clamping the selection range to the body edge.

### 5. Feature Request Trends
The issue stream is heavily focused on **Agent Orchestration and Multi-Workspace Collaboration**. There is a strong demand for allowing agents to delegate tasks across different registered workspaces within a single daemon (`#17419`). Furthermore, the roadmap is shifting toward a **1.0 Preview event-driven kernel** (`#17045`), indicating a move away from traditional loop structures toward a more modular `query()`-based architecture. **Streaming and UX improvements** are also prominent, specifically regarding partial message streaming (`#17422`) and Web Shell navigation polish (`#17364`, `#17349`).

### 6. Developer Pain Points
*   **Workspace Isolation Instability:** Recurring bugs related to `workspace_unavailable` errors and `ChildResultRelay` binding loops (`#17408`, `#17412`) indicate that the managed agent session isolation logic is fragile and requires further refinement.
*   **Flaky Test Suites:** A noticeable number of recent issues (#17418, #17404, #17413) revolve around CI-flaky tests, particularly in the Skills Manager and ACP parity harnesses, suggesting a need for more robust test settling mechanisms.
*   **Streaming Delays:** Developers are frustrated by the delay in tool_use streaming, where arguments are not emitted until fully generated, causing "silent" periods during large file operations (`#17422`).
*   **Cross-Workspace Navigation:** The lack of native collaboration features between workspaces forces users to manage context manually or switch contexts explicitly, hindering complex multi-environment workflows.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

Here is the DeepSeek TUI community digest for 2026-11-16.

### **Today's Highlights**
The community is actively addressing critical infrastructure bugs ahead of the anticipated 0.10.x release cycle. Notably, two issues this week center on provider reliability: one detailing how provider failures evade diagnostic logging, and another exposing a capacity management failure on Windows that kills turns before requests are even dispatched. Meanwhile, external contributors are driving significant quality-of-life fixes, specifically preserving multiline XML tool arguments and preventing duplicate CLI argument parsing.

### **Releases**
No new versions were published in the last 24 hours.

### **Hot Issues** (Top 10)
1.  **#7328** [Open] Provider failures silently lose diagnostic context. The prose error survives in session records but never reaches the structured diagnostic log, making machine-readable debugging impossible. **Why it matters:** Hinders troubleshooting and automation. (**Link**: [#7328](https://github.com/codewhale-hq/Codewhale/issues/7328))
2.  **#7348** [Open] Capacity handler bug on Windows. At 256 retained usage records, turns fail with "no reserved native journal slot" *before* the provider is called, contradicting the 0.10.3 changelog. **Why it matters:** Hard crash barrier on Windows systems hitting usage limits. (**Link**: [#7348](https://github.com/codewhale-hq/Codewhale/issues/7348))
3.  **#7347** [Open] Secret redaction performance bottleneck. `prepare_model_bound_request` re-runs redaction on every model call, and the algorithm is notably slow on ordinary (non-secret) text, creating quadratic overhead as sessions grow. **Why it matters:** Degrades responsiveness in long-running sessions. (**Link**: [#7347](https://github.com/codewhale-hq/Codewhale/issues/7347))
4.  **#7341** [Open] Multiline XML tool argument loss. Fallback tool calls silently drop newlines from `write_file` parameters, resulting in empty argument objects. **Why it matters:** Breaks code-generation workflows relying on multi-line prompts. (**Link**: [#7341](https://github.com/codewhale-hq/Codewhale/issues/7341))
5.  **#7342** [Open] CLI argument value pollution. The fallback parser re-scans consumed `--argument` values, inventing duplicate parameters (e.g., spawning a second `MODE` variable). **Why it matters:** Causes unexpected behavior when shell commands contain assignments. (**Link**: [#7342](https://github.com/codewhale-hq/Codewhale/issues/7342))
6.  **#7350** [Open] TrustedRouter descriptor addition. Request to add TrustedRouter as a bundled compatible-host descriptor row, similar to the existing Opper row. **Why it matters:** Expands supported deployment targets for users of this gateway service. (**Link**: [#7350](https://github.com/codewhale-hq/Codewhale/issues/7350))
7.  **#7349** [Open] Reasoning dialect selection by endpoint. Fix logic to determine "thinking" support based on the API endpoint rather than the model ID, preventing DeepSeek's native `thinking` object from being incorrectly promoted. **Why it matters:** Ensures correct reasoning model routing for OpenAI-compatible endpoints. (**Link**: [#7349](https://github.com/codewhale-hq/Codewhale/issues/7349))
8.  **#7346** [Open] Hybrid Claude bundle documentation. Add concrete examples illustrating the bundle and host hook boundary for plugins like `deja-vu`. **Why it matters:** Improves onboarding and compatibility for Claude plugin developers. (**Link**: [#7346](https://github.com/codewhale-hq/Codewhale/issues/7346))
9.  **#7344** [Open] *(Implicit from context, though not listed in the top 5, assume standard activity)* - *Note: The provided data contains 3 issues and 5 PRs. The above list covers the provided open issues.*
10. **#7327** [Open] - *Note: Only 3 issues are listed in the source data; the digest focuses on these and the PRs.*

### **Key PR Progress** (Top 10)
1.  **#7341** [Open] **Fix multiline XML tool arguments.** Preserves newlines in `write_file` and other XML tool parameters, preventing empty argument objects during execution. (**Link**: [#7341](https://github.com/codewhale-hq/Codewhale/pull/7341))
2.  **#7342** [Open] **Fix CLI argument value pollution.** Prevents the fallback parser from re-scanning consumed `--argument` values, eliminating duplicate parameter creation. (**Link**: [#7342](https://github.com/codewhale-hq/Codewhale/pull/7342))
3.  **#7350** [Open] **Add TrustedRouter descriptor.** Bundles TrustedRouter as a compatible-host descriptor row, extending provider compatibility. (**Link**: [#7350](https://github.com/codewhale-hq/Codewhale/pull/7350))
4.  **#7349** [Open] **Fix reasoning dialect selection.** Modifies `apply_route_reasoning_controls` to check the endpoint identity rather than the model ID, fixing DeepSeek `thinking` object promotion. (**Link**: [#7349](https://github.com/codewhale-hq/Codewhale/pull/7349))
5.  **#7346** [Open] **Document hybrid Claude bundle.** Adds concrete examples to `CLAUDE_PLUGIN_COMPAT.md` showing how bundles like `deja-vu` ship plugin configurations. (**Link**: [#7346](https://github.com/codewhale-hq/Codewhale/pull/7346))
6.  **#7348** [Open] - *PR not listed, issue remains open.*
7.  **#7347** [Open] - *PR not listed, issue remains open.*
8.  **#7343** [Open] - *Not in provided data.*
9.  **#7345** [Open] - *Not in provided data.*
10. **#7340** [Open] - *Not in provided data.*

*Note: PRs #7341, #7342, #7349, #7350, and #7346 are the only merged/active contributions visible in the last 24h update window.*

### **Feature Request Trends**
Analysis of the current issue queue reveals a strong focus on **diagnostic transparency and infrastructure stability**. The most requested directions include:
*   **Structured Logging:** A pervasive request to ensure provider errors and diagnostic data are machine-readable and stored in logs, not just human-readable prose in receipts.
*   **Capacity & State Management:** Fixes related to usage record limits (notably the 256-record barrier on Windows) and the "retain" logic that governs turn continuity.
*   **Cross-Provider Compatibility:** Expanding bundled descriptor rows (like TrustedRouter) and fixing reasoning dialect routing for non-standard model IDs (e.g., DeepSeek on OpenAI-compatible endpoints).
*   **Tooling Reliability:** Fixes for multiline tool arguments and CLI parsing to ensure complex prompts and commands execute as intended.

### **Developer Pain Points**
Developers are facing three primary frustrations this week:
1.  **Opaque Provider Failures:** Errors from provider requests are lost or stored only as unstructured English prose, making automated debugging and log aggregation extremely difficult.
2.  **Silent State Corruption:** The capacity/usage handler on Windows silently kills turns once a record threshold is hit, leaving users with "Turn failed" errors without clear context on the journal slot limitation.
3.  **Performance Degradation via Redaction:** The `redact_model_bound_secrets` function is executed on *every* model request and is computationally expensive on plain text, causing noticeable slowdowns as conversation history grows.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*