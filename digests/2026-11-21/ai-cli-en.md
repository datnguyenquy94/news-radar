# AI CLI Tools Community Digest 2026-11-21

> Generated: 2026-11-21 06:46 UTC | Tools covered: 10

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

**Cross-Tool AI CLI Community Digest**
*Generated 2026-11-21*

### 1. Ecosystem Overview
The AI CLI tools ecosystem in late 2026 is characterized by a split between mature, feature-rich platforms and specialized, security-focused toolkits. Major players like Claude Code, OpenAI Codex, and Gemini CLI dominate the general-purpose agentic coding space, while tools like DeepSeek-TUI and Qwen Code prioritize execution security and TUI stability. A significant industry trend is the battle between "stealth" auto-updates and user workflow stability, alongside a push for finer-grained model control (cache TTLs, reasoning effort) and platform parity (Linux TUI, Wayland browser support). Security and sandboxing remain the deepest pain points across the landscape, driven by the tension between agent autonomy and developer control.

### 2. Activity Comparison

| Tool | Issues (Top 10) | PRs Merged/Closed | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 | 3 (Closed) | v2.1.330 released (Bug fixes & "easel" mod) |
| **OpenAI Codex** | 10 | 12 (Closed) | 3 Alpha releases (v0.173.x); infrastructure hardening |
| **Gemini CLI** | 10 | 9 (Open/Closed) | v0.71.0-nightly (Windows path & session fixes) |
| **Qwen Code** | 10 | 9 (Active/Fixes) | v0.28.0-nightly (E2E testing & UI polish) |
| **OpenCode** | 10 | 9 (Merged) | No new version; PR #64784 merged (Gemini 4 Neon) |
| **Pi** | 10 | 7 (Merged) | v1.6.0 released (GPT-6.2 support) |
| **Copilot CLI** | 10 | 0 (Pre-release fixes) | v1.0.115-5 released (Session resume & disk opt.) |
| **DeepSeek-TUI** | 10 | 8 (Merged) | No release; security patches merged |
| **Claude Code (Org)** | N/A | N/A | Enterprise auth v2.1.330 |
| **Kimi Code** | 0 | 0 | No activity |

### 3. Shared Feature Directions
*   **Session & Context Management:** A universal demand for persistence and isolation. OpenAI Codex and OpenCode users request workspace-scoped chats to prevent context bleed; Claude Code and Gemini CLI users battle auto-update relaunches that drop Remote Control sessions; Qwen Code and Pi users deal with SSE listener exhaustion and context estimation bugs.
*   **Model Control & Tuning:** Fine-grained control is a cross-tool priority. Pi, Claude Code, and OpenAI Codex users seek adjustments to `reasoning.effort`/`thinking` settings and prompt cache TTLs. OpenCode highlights cache efficiency discrepancies between Opus 5.5 and native Code.
*   **Security & Sandboxing:** The most critical shared concern. DeepSeek-TUI, Copilot CLI, and Qwen Code report silent command execution risks, truncation bugs, and proxy-aware credential failures. There is a universal need for better execpolicy modeling and permission UX to prevent agent-induced data loss.
*   **Cross-Platform Stability:** Windows path resolution (#30376, #78146), macOS OAuth failures (#93014), and Linux TUI bugs (OpenCode Shift+P, DeepSeek focus flash) indicate the ecosystem is still maturing across diverse OS environments.

### 4. Differentiation Analysis
*   **Focus:** Claude Code and OpenAI Codex are general-purpose agentic frameworks focused on rapid development and model integration. Gemini CLI and Qwen Code lean into "agent orchestration" and "managed-agent scheduling," emphasizing stability and diagnostics for production deployments. DeepSeek-TUI and Copilot CLI are distinct in their security-first approach, targeting execution sandboxing and permission governance for sensitive environments.
*   **Target Users:** Claude Code and OpenAI Codex cater to broad developer audiences seeking code generation and automation. OpenCode and Qwen Code have stronger ties to research and infrastructure tooling. Pi and Grok Build position themselves as primary interfaces for the newest "frontier" reasoning models (GPT-6, Grok).
*   **Technical Approach:** OpenAI Codex is aggressively refactoring its Rust-based CLI engine and MCP protocol. Claude Code focuses on Enterprise Admin Console integration. Qwen Code and DeepSeek-TUI invest heavily in low-level TUI/terminal compatibility and execpolicy rule enforcement. OpenCode acts as a meta-layer, integrating multiple providers (Gemini, Claude) and focusing on UI polish and subscription management.

### 5. Community Momentum & Maturity
*   **Most Active:** OpenAI Codex and Claude Code show the highest issue volumes and PR activity, indicating rapid feature development and bugfix cycles. Qwen Code and DeepSeek-TUI have highly focused, technical communities driving significant stability improvements (SSE diagnostics, execpolicy hardening) in response to production bugs.
*   **Rapid Iterators:** Pi (v1.6.0 with GPT-6.2) and the Alpha stream of OpenAI Codex are iterating fastest on model support. Anthropic's Claude Code releases frequent stability patches (v2.1.330), suggesting a mature product managing technical debt.
*   **Stabilization Phase:** OpenCode and Gemini CLI appear to be in a stabilization phase, merging PRs for UI/UX and compatibility while issue counts remain high but focused on polish rather than foundational rewrites.

### 6. Trend Signals for Developers
*   **The "Silent Failure" Era:** The dominant pain point shifting from "agents don't work" to "agents fail silently." Truncation bugs (64 KiB paste limits, 8KB Git Bash limits), proxy hangs (Bedrock/HTTPS_PROXY), and context bleed are the new blockers. Developers should prioritize tools with active execpolicy or sandbox monitoring.
*   **Update Friction is a UX Killer:** The "stealth auto-update" anti-pattern (Claude Code #95364, OpenCode) is causing real productivity loss. Decision-makers should evaluate tools with explicit update controls or rollback capabilities.
*   **Model Configurability is King:** The ability to tune `reasoning.effort`, cache TTLs, and `settings.json` overrides without fighting the tool is becoming a key differentiator. Tools like Pi and OpenAI Codex are gaining traction by exposing these levers.
*   **Security Sandboxing is Maturing:** The intersection of AI agents and enterprise security tools (Cortex XDR, GNOME Terminal themes) is a rich source of bugs. Tools that model execution launchers precisely (DeepSeek-TUI) or offer granular permission UX (Copilot CLI #5539) are solving the hardest adoption hurdles for corporate users.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of:** 2026-11-21

---

## 1. Top Skills Ranking

The following 8 Skills have garnered the most community attention (PR comments), reflecting active development and discussion:

| # | PR | Author | Created | Comments 👍 | Status | Summary |
|---|----|--------|---------|-------------|--------|---------|
| **1** | **[#1742](https://github.com/anthropics/skills/pull/1742)** | Kuldeeep18 | 2026-09-08 | — | **Open** | Fixes MCP Builder for `mcp>=2.0.0`. Renames `streamablehttp_client` to `streamable_http_client` and migrates custom header configuration to `create_mcp_http_client` / `http_client`. Addresses breaking changes in the latest MCP specification. |
| **2** | **[#1298](https://github.com/anthropics/skills/pull/1298)** | MartinCajiao | 2026-06-10 | — | **Open** | Isolates trigger evals, handles Windows subprocess pipes, and prevents runtime failures from corrupting skill trigger scores. Critical for cross-platform skill reliability. |
| **3** | **[#1245](https://github.com/anthropics/skills/pull/1245)** | mrdesouzaphd-cmyk | 2026-06-02 | — | **Open** | Introduces `notion-spec-to-implementation` and `quantitative-resume-auditor` skills. The former transforms product/tech specs into concrete Notion tasks; the latter audits resume quantitative claims. |
| **4** | **[#1980](https://github.com/anthropics/skills/pull/1980)** | Pcmhacker-piro | 2026-10-06 | — | **Open** | Removes `shell=True` from `with_server.py` in webapp-testing to mitigate command-injection risks (CWE-78). Sanitizes server command spawning. |
| **5** | **[#1792](https://github.com/anthropics/skills/pull/1792)** | TINGyu123644 | 2026-09-19 | — | **Open** | Updates docx `accept_changes.py` to report LibreOffice timeouts as errors and verify output DOCX lacks revision marks before claiming success. |
| **6** | **[#1771](https://github.com/anthropics/skills/pull/1771)** | ProofCore-Protocol | 2026-09-15 | — | **Open** | Adds `proofcore-contract-auditor` skill for Web3 developers. Performs static analysis of Solidity/Rust smart contracts and anchors audit proofs onto the TON Blockchain via ProofCore's Merkle protocol. |
| **7** | **[#525](https://github.com/anthropics/skills/pull/525)** | kitao | 2026-03-05 | — | **Open** | Adds `pyxel` skill for retro game development in Python. Guides implementation, headless input-driven runs, frame inspection, and task-specific state checks. |
| **8** | **[#2019](https://github.com/anthropics/skills/pull/2019)** | reginaldalfret | 2026-10-14 | — | **Open** | Fixes xlsx `recalc.py` to resolve worksheet-scoped defined names and aliases in `external_links_at_risk`, preventing false negatives in external link detection. |

*Notes: Comment counts (`👍`) are currently 0 for all listed PRs. "Open" status indicates active development; merged/draft status not shown as no PRs in the top-20 list reflect merged outcomes.*

---

## 2. Community Demand Trends

Analysis of the 13 most-commented Issues reveals the following high-demand Skill directions:

| Trend | Representative Issue | Key Insight |
|-------|----------------------|-------------|
| **Security & Trust** | **[#492](https://github.com/anthropics/skills/issues/492)** (46 comments) | Community skills distributed under the `anthropic/` namespace risk impersonating official skills, creating trust boundary vulnerabilities. Users demand namespace isolation or signed attestations. |
| **Organizational Sharing** | **[#228](https://github.com/anthropics/skills/issues/228)** (17 comments, 👍:8) | Org-wide skill sharing is missing. Users want a shared library or direct sharing link within Claude.ai to avoid manual .skill file transfers via Slack/Teams. |
| **Eval/Trigger Reliability** | **[#556](https://github.com/anthropics/skills/issues/556)** (13 comments, 👍:7) | `run_eval.py` consistently reports 0% trigger rates across all queries when using `claude -p`. Parallel workers (`--num-workers > 1`) cause cross-match UUID failures, producing systematic false negatives. |
| **Cross-Platform Fixes** | **[#1298](https://github.com/anthropics/skills/issues/1298)** (linked from PR) | Windows subprocess pipe `select()` failures and competing worker probes undermine trigger evaluation accuracy. |
| **Documentation Hygiene** | **[#1950](https://github.com/anthropics/skills/issues/1950)** (7 comments) | Python `pause_turn` runner guidance is outdated; SDK 1.1.0 now supports automatic resumption, rendering prior restart-counter workarounds unnecessary. |
| **Skill Discovery & Duplication** | **[#189](https://github.com/anthropics/skills/issues/189)** (6 comments, 👍:9) | `document-skills` and `example-skills` plugins install identical content, causing duplicates in Claude Code's context window. Users want clearer partitioning. |
| **Eval Parallelism** | **[#1352](https://github.com/anthropics/skills/issues/1352)** (6 comments, 👍:3) | Parallel workers in `run_eval.py` cross-match skill UUIDs, producing near-zero trigger rates—a silent bug affecting optimization pipelines. |

*Emerging directions:* Web app testing automation (removing `shell=True`), smart contract auditing (ProofCore), and typographic quality control for AI-generated documents.

---

## 3. High-Potential Pending Skills

These active-comment PRs are not yet merged but show strong community momentum:

| PR | Author | Created | Comments | Focus | Likely Landing Window |
|----|--------|---------|----------|-------|----------------------|
| **[#1742](https://github.com/anthropics/skills/pull/1742)** | Kuldeeep18 | 2026-09-08 | — | MCP Builder `mcp>=2` compatibility | Q4 2026 (active, recent) |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | MartinCajiao | 2026-06-10 | — | Trigger eval isolation & Windows fixes | Q1 2027 (long-standing, needs review) |
| **[#1997](https://github.com/anthropics/skills/pull/1997)** | BichengWang | 2026-10-10 | — | YAML frontmatter scalar parsing in skill-creator | Very recent; may land quickly |
| **[#1977](https://github.com/anthropics/skills/pull/1977)** | gerardrecinto | 2026-10-06 | — | `algorithmical-art` wrapAround() modulo fix | Very recent; low-risk merge |
| **[#1950](https://github.com/anthropics/skills/pull/1950)** | dhairyajangir | 2026-10-02 | — | `claude-api` Python pause_turn guidance update | Aligns with SDK 1.1.0; easy win |

*Notes: All pending PRs remain "Open." Merge timing depends on maintainer review cycles.*

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable, cross-platform skill execution and trust-aware distribution.**  
> Issues dominate conversation around eval-trigger reliability (0% false-negative rates), Windows compatibility, and namespace security—indicating that developers prioritize *stable orchestration* and *safe skill consumption* over novel functionality. Simultaneously, demand for org-wide sharing and documented pause_turn resumption highlights a need for *collaborative workflows* and *SDK parity*. In short: the ecosystem is shifting from skill *creation* to skill *reliability and sharing*.

---

*Report generated from `anthropics/skills` repository data as of 2026-11-21. All links point to `github.com/anthropics/skills`.*

---

---

**Claude Code Community Digest**
*Generated on: 2026-11-21*
*Source: github.com/anthropics/claude-code*

### 1. Today's Highlights
The Claude Code team released **v2.1.330**, introducing organization-wide authentication management for Enterprise Admin Console users and the "easel" mod for automated chart generation. However, the release cycle was dominated by urgent bug fixes, most notably a Windows bash tool crash caused by runaway environment file growth and a macOS desktop auto-update loop that disrupts Remote Control sessions.

### 2. Releases
*   **v2.1.330 (Released):** Key changes include sign-in integration for organizations managed in Anthropic's Enterprise Admin Console, ensuring `claude auth login` applies organizational settings and utilizes the configured cloud provider or gateway. Additionally, the "easel" mod was added to automatically draw charts when requested and under MCP metrics.

### 3. Hot Issues (Top 10)
These issues represent the most discussed and urgent community concerns over the last 24 hours:

1.  **[#111488] Desktop (Windows): Workspace trust prompt on every new link** - Even trusted folders trigger the prompt for `claude://code/new?folder=` links, hindering workflow efficiency on Windows.
2.  **[#111474] Desktop model picker ignores settings.json** - New Code sessions ignore the default model specified in `settings.json`, defaulting to `claude-opus-4-6` instead of the user's preferred `claude-opus-5-5`.
3.  **[#111476] Remote Control drops after silent auto-update** - The desktop app drops Remote Control connections after a silent relaunch, requiring a manual message from the Mac to reconnect.
4.  **[#111484] GitHub integration permission bug** - A newly opened issue reporting a GitHub integration permission error, accompanied by screenshots.
5.  **[#111470] Model reports unfinished work as done** - Credits are spent on rework as the model repeatedly claims completion prematurely; the support bot is reportedly not escalating the issue.
6.  **[#111239] Activity panel unpins with split pane** - A regression where the Activity panel (Session Rail) no longer stays pinned when a split pane is open in the Desktop app.
7.  **[#109110] Feature request: Browser password typing** - An opt-in setting request to allow Claude to type passwords in the browser pane/Chrome, balancing convenience with security.
8.  **[#98381] Sonnet5 verification failures** - Repeated failures to verify work before claiming completion, noted as a persistent issue across multiple sessions.
9.  **[#95364] Desktop auto-update quits and relaunches** - "Stealth updates" quit and relaunch the app while the user is away, dropping every Remote Control session, a critical stability issue.
10. **[#28300] Multi-agent collaboration feature request** - A long-standing enhancement request for Agent-to-Agent protocol enabling multi-agent collaboration across machines, currently with 60 comments.

### 4. Key PR Progress (Top 3)
*   **[#111198] Don't run @claude mentions on pull requests from forks** (Closed): A necessary security and attribution fix preventing `@claude` mentions from triggering on pull requests originating from forks.
*   **[#41447] Open source claude code** (Open): A meta-PR consolidating numerous open source contribution closures (#59, #456, #2846, #22002, #41434), signaling ongoing community integration efforts.
*   **[#1] Create SECURITY.md** (Closed): The foundational security documentation file for the repository.

### 5. Feature Request Trends
Analysis of the issue queue reveals a strong momentum in three areas:
*   **Cross-Platform Stability:** Significant focus on fixing the auto-update relaunch behavior (Issue #95364) and Windows-specific bash environment crashes (Issue #78146) that break long-running sessions.
*   **Desktop Experience:** High demand for better session persistence and UI consistency, specifically regarding the Activity panel pinning (Issue #111239) and model picker respect for `settings.json` (Issue #111474).
*   **Security & Privacy:** Growing interest in "secrets lockers" (Issue #88165) to prevent models from seeing credential values, and requests for opt-in browser password handling (Issue #109110).

### 6. Developer Pain Points
*   **Environment File Growth:** On Windows, the Bash tool permanently wedges because the `CLAUDE_ENV_FILE` hook environment variable grows unboundedly with every compact, resulting in "line 182: e: command not found" errors for every command (Issue #78146).
*   **OAuth Session Latching:** macOS desktop users experience force-logouts because the OAuth `session_stale_relogin` flow fails with `invalid_grant`, and subsequent fresh authorization attempts are rejected by the server (Issue #93014).
*   **Update Interruptions:** The "stealth auto-update" mechanism actively disrupts user workflows by quitting and relaunching the app mid-task, dropping Remote Control sessions and losing context (Issue #95364).

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

### 1. Today's Highlights
The Codex repository saw significant infrastructure and quality improvements today, driven by a batch of 24 closed Pull Requests focused on model catalogs, TUI rendering, and session management. Notably, reasoning summaries are now default in the TUI, and MCP (Model Context Protocol) server discovery has been hardened for HTTP environments. Meanwhile, the VS Code extension community is actively debating workspace-scoped chat isolation (Issue #25319), which garnered 64 comments and 140 upvotes, signaling a strong demand for context boundary controls.

### 2. Releases
Three pre-release alpha versions of the Rust-based Codex CLI were published in the last 24 hours (v0.173.0-alpha.2 through alpha.4). These are development snapshots and do not include user-facing feature changes in the stable release cycle but indicate active work on the next major iteration of the CLI engine.

### 3. Hot Issues
**1. #25319 [OPEN]** Scope Codex VS Code chats to the current workspace/project
*   **Why it matters:** Users request the ability to isolate chat history and context to the active VS Code workspace, preventing cross-project contamination of context and AGENTS.md files.
*   **Reaction:** High engagement (64 comments, 140 👍). Community members are discussing implementation feasibility and potential impacts on existing multi-project workflows.
*   [Link](https://github.com/openai/codex/issues/25319)

**2. #62906 [CLOSED]** Report HTTP MCP startup problems clearly in codex exec
*   **Why it matters:** Improves developer experience by surfacing low-level transport errors and credential URLs clearly during `codex exec`, rather than burying them in stderr.
*   **Reaction:** Closed by copyberry[bot] with no comments, indicating a straightforward bug fix.
*   [Link](https://github.com/openai/codex/pull/62906)

**3. #62905 [CLOSED]** Add a reasoning summary picker to `/config`
*   **Why it matters:** Introduces a UI picker in the config command to set `model_reasoning_summary` (Auto, Concise, Detailed, None), saving preferences across sessions.
*   **Reaction:** Closed as part of the day's batch of config/UX improvements.
*   [Link](https://github.com/openai/codex/pull/62905)

**4. #62904 [CLOSED]** Use automatic reasoning summaries by default in the TUI
*   **Why it matters:** Ensures the TUI automatically captures and displays reasoning summaries on turn submission, resolving previous inconsistencies where the summary setting was ignored.
*   **Reaction:** Technical closure reflecting the stabilization of the `concurrent_reasoning_summaries` feature.
*   [Link](https://github.com/openai/codex/pull/62904)

**5. #62898 [CLOSED]** Distinguish conversation item IDs from Responses IDs in traces
*   **Why it matters:** A backend fix preventing ID collision between conversation items and OpenAI Responses items in tracing/logs, crucial for debugging agent flows.
*   [Link](https://github.com/openai/codex/pull/62898)

**6. #62896 [CLOSED]** Allow model catalogs to set initial collaboration guidance
*   **Why it matters:** Adds `collaboration_modes.initial` guidance, allowing model catalogs to define default Plan/Default behaviors from the very first turn, improving out-of-the-box agent alignment.
*   [Link](https://github.com/openai/codex/pull/62896)

**7. #62894 [CLOSED]** Add an opt-in indexed web search default
*   **Why it matters:** Introduces `features.web_search_indexed_default`, allowing restricted-turn models to use `indexed` search by default instead of `cached`, balancing performance and freshness.
*   [Link](https://github.com/openai/codex/pull/62894)

**8. #62888 [CLOSED]** Use a shared `ToolCallId` for dispatched tool invocations
*   **Why it matters:** Unifies `ToolCallId` management across dispatched invocations, model-visible Responses calls, and Code Mode cells, reducing identity confusion in the execution pipeline.
*   [Link](https://github.com/openai/codex/pull/62888)

**9. #62884 [CLOSED]** Track explicit web search modes and expose indexed in the SDK
*   **Why it matters:** SDK-level tracking of explicit vs. implicit web search modes, enabling developers to diagnose why a model is hitting live vs. cached search.
*   [Link](https://github.com/openai/codex/pull/62884)

**10. #62909 [OPEN]** work can't use
*   **Why it matters:** A recent bug report where the "Work" mode in the Codex App becomes unresponsive; the send button grays out, though web-based chat remains functional.
*   **Reaction:** Reported today (2026-11-21); currently under investigation.
*   [Link](https://github.com/openai/codex/issues/62909)

### 4. Key PR Progress
*   **PR #62903:** Enabled `concurrent_reasoning_summaries` by default, stabilizing the feature for all new chats.
*   **PR #62893:** Broadened legacy MCP discovery fallback over HTTP, fixing compatibility issues with older MCP servers.
*   **PR #62882:** Fixed domain rule composition across network config layers, resolving conflicts between `[permissions.network]` and `[network_proxy]` settings.
*   **PR #62879:** Added opt-out capability for new threads via `experimentalApi` and `daybreakProgramPropagation`.
*   **PR #62876:** Implemented MCP server prewarming during cloud catalog refresh to reduce startup latency.
*   **PR #62871:** Exposed `image_metadata` from app-server image generation items, preserving backend-supplied metadata.
*   **PR #62870:** Updated TUI WebRTC calls to use runtime agent authentication, improving security and credential management.
*   **PR #62867:** Enabled configuration server OAuth during app-server startup, allowing settings validation prior to full launch.
*   **PR #62865:** Deferred Windows sandbox owner restoration until user sign-in, preventing boot failures when stored sessions are invalid.
*   **PR #62864:** Ensured agent concurrency guidance persists even when native tools are disabled, maintaining operational limits.

### 5. Feature Request Trends
The issue data reveals a clear split in user priorities. **Workspace Context & Session Management** dominates the enhancement space, with requests for scoped chats (#25319), persistent context across forks (#21986), and the ability to hide tool calls (#18396, #21252) to reduce TUI noise. **TUI Ergonomics** is the second major trend, focusing on paste handling (#28167, #30309), keyboard remapping (#30309), and color rendering in tmux (#22761). Finally, **Cross-Platform Consistency** issues, particularly around Windows TUI sequences (#35395) and Administrator launch crashes (#60136), indicate a need for OS-specific polishing.

### 6. Developer Pain Points
*   **Context Bleed:** The most recurrent frustration is the persistence of context when forking chats or switching projects, leading to the model referencing unrelated `AGENTS.md` files or wrong working directories (#24855, #21986).
*   **TUI Rendering & Input:** A significant volume of bugs relates to the Text User Interface, specifically bracketed-paste state not exiting (#28167), keyboard modifier conflicts on macOS (#30309), and screen redraw artifacts (#11458).
*   **Web Search Control:** Developers are seeking finer-grained control over web search behavior, specifically the ability to default to `indexed` search for restricted turns or opt-out of indexed searches entirely (#62894, #62884).
*   **MCP Reliability:** Issues regarding HTTP MCP discovery failures and credential leaking in transport errors suggest a need for more robust error handling and session management in the Model Context Protocol layer.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-11-21.

### **Today's Highlights**
The Gemini CLI v0.71.0-nightly release focused on stability and platform compatibility, specifically fixing Windows path resolution and session management. Concurrently, the issue queue remains active with significant attention on subagent reliability and AST-aware tooling, indicating a push toward more robust and efficient agent workflows.

### **Releases**
*   **v0.71.0-nightly.20261121.geecccfcd5**: This nightly build includes two critical fixes: expanding Windows home-relative paths using tildes and backslashes, and resuming the most recently active session rather than the most recently started one. [Release v0.71.0-nightly](https://github.com/google-gemini/gemini-cli/releases/tag/v0.71.0-nightly.20261121.geecccfcd5)

### **Hot Issues** (Top 10)
1.  **[#22323] Subagent recovery after MAX_TURNS** (14 comments): A critical bug where the `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` despite hitting its turn limit, potentially misleading users about task completion.
2.  **[#19873] Leverage model's bash affinity via Zero-Dependency OS Sandboxing** (9 comments): An enhancement proposal to utilize the model's native bash capabilities within a secure, zero-dependency sandbox to improve code exploration efficiency.
3.  **[#21409] Generalist agent hangs** (8 comments): A p1 bug where the generalist agent hangs indefinitely on simple tasks like folder creation, forcing users to disable sub-agent delegation.
4.  **[#22745] Assess the impact of AST-aware file reads** (7 comments): An EPIC tracking the value of AST-aware tools for precise code reading and navigation, aiming to reduce token noise and misaligned reads.
5.  **[#21968] Gemini does not use skills and sub-agents enough** (7 comments): Community feedback noting that the model rarely invokes custom skills or sub-agents autonomously unless explicitly instructed.
6.  **[#22267] Browser Agent ignores settings.json overrides** (5 comments): A bug where the Browser Agent ignores `maxTurns` and other overrides defined in `settings.json`, despite the `AgentRegistry` correctly merging them.
7.  **[#21983] Browser subagent fails in Wayland** (4 comments): Reports of the browser subagent failing specifically in Wayland environments, resulting in premature "GOAL" termination.
8.  **[#24246] 400 error with > 128 tools** (3 comments): Reports of the CLI encountering 400 errors when too many tools are available, suggesting a need for smarter tool-scope limiting.
9.  **[#23571] Model frequently creates tmp scripts in random spots** (3 comments): A frustration regarding the model generating multiple temporary scripts across various directories when shell execution is restricted.
10. **[#22672] Agent should stop/discourage destructive behavior** (3 comments): Concerns about the model using `git reset` or `--force` in complex operations, requesting safer alternatives.

### **Key PR Progress** (Top 10)
1.  **[#30279] Preserve trimmed function-call name in history** (Open): Fixes a `400 INVALID_ARGUMENT` error caused by function call names containing leading/trailing whitespace being incorrectly trimmed in history.
2.  **[#30277] Improve permission denial detection and unsupported environment handling** (Open): Addresses sandbox compatibility issues and permission error handling in restricted execution environments.
3.  **[#30273] Unify exit codes mapping and fatal error hierarchy** (Open): Centralizes CLI process exit codes, previously hardcoded as raw literals, to improve error reporting consistency.
4.  **[#30267] Detect local git clone installation from CLI path** (Open): Fixes a path-resolution bug where running CLI from a source checkout outside the clone directory triggered unintended background `npm install -g`.
5.  **[#30281] Honor configured fetch timeouts on Node 26** (Open): Upgrades core Undici to v7.30.2 to ensure configured global dispatchers are published under the Node 26 built-in fetch symbol.
6.  **[#30268] Respect active YOLO mode in taint and build file checks** (Open): Ensures `--approval-mode=yolo` is respected in shell taint/build-file risk checks, preventing unnecessary confirmation prompts during autonomous runs.
7.  **[#30278] Explain Gemini API fetch failures** (Open): Adds network troubleshooting guidance to distinguish transport failures from HTTP responses (e.g., 503 errors) when API requests fail.
8.  **[#30272] Fixes #30209 Detect source checkout from CLI path** (Open): Resolves the source checkout detection logic to use the CLI executable path instead of the working directory.
9.  **[#30175] Apply local subagents' generateContentConfig for every model** (Closed): Ensures local subagents send their declared generation settings (temperature, topP, etc.) for all model values, not just `auto`.
10. **[#30171] Flag recursive and forced rm regardless of flag position** (Closed): Fixes `isDangerousCommand` to recognize equivalent forms of `rm -f`/`-rf` regardless of flag order.

### **Feature Request Trends**
The community is heavily focused on **subagent intelligence and reliability**. Key directions include:
*   **Autonomous Tool Navigation**: Moving beyond simple shell commands toward **AST-aware file reads and searches** (Issues #22745, #22747) to enable precise code navigation and reduce token bloat.
*   **Enhanced Subagent Orchestration**: Requests for better **trajectory visibility** (#22598), **discovery via settings.json** (#18285), and **parallel collaboration** (#18287) to manage complex multi-agent workflows.
*   **Security & Stability**: A strong emphasis on **sandboxing** (#19873), **permission handling** (#30277), and preventing **destructive commands** (#22672) to enable safer autonomous operation.

### **Developer Pain Points**
*   **Agent "Hallucination" of Success**: The most frustrating bug involves subagents reporting `status: "success"` after hitting `MAX_TURNS` (#22323), leaving users unaware that the task was incomplete.
*   **Context Management**: Models frequently generating **tmp scripts in random directories** (#23571) or "firehosing" context with large file reads, creating significant cleanup overhead.
*   **Platform Inconsistencies**: Windows path resolution (#30376) and **Wayland browser failures** (#21983) highlight ongoing compatibility challenges across different operating systems.
*   **Configuration Blind Spots**: The Browser Agent ignoring `settings.json` overrides (#22267) and the generalist agent hanging when deferring to sub-agents (#21409) represent recurring configuration friction points.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-11-21.

### **Today's Highlights**
The latest release (`v1.0.115-5`) focuses on reliability, specifically reducing disk usage for long-running local sessions and accelerating resume times. Critically, this update fixes a race condition that previously blocked new sessions or caused existing ones to fail to resume. On the security front, the Windows sandbox configuration has been enhanced with broader default queries and finer-grained Mach service lookups, addressing platform compatibility concerns.

### **Releases**
*   **v1.0.115-5**: Improves session efficiency and fixes a model-switching race condition.
*   **v1.0.115-4**: Adds structured clarification questions for ACP editors and resolves a plugin initialization race.
*   **v1.0.115-3**: Fixes a picker visibility issue to ensure keyboard shortcuts (Ctrl+Y, Tab) function correctly after search.
*   **v1.0.115-2**: Enables Windows sandbox package queries by default and adds Mach service lookups for macOS.

### **Hot Issues (10 Noteworthy)**
1.  **[#5478](https://github.com/github/copilot-cli/issues/5478)** "[area:platform-windows] Cortex XDR kills the launching shell": A critical stability bug where Copilot CLI spawning `git` triggers Cortex XDR's "parent_process_spoofing" protection, crashing the shell. Community sentiment is urgent, as this renders the tool unusable in secured corporate environments.
2.  **[#5541](https://github.com/github/copilot-cli/issues/5541)** "[triage:needs-human] Agent ran `rsync -a --delete <dir>/ /` in WSL": A severe incident where an AI agent, confused by PowerShell quoting, executed a wipe command on a user's drive. This has sparked major discussions on AI safety and sandboxing.
3.  **[#5468](https://github.com/github/copilot-cli/issues/5468)** "[area:sessions] Remote control fails on GitHub Mobile": Users are unable to control local sessions via GitHub Mobile or the web, receiving a "sealed value must bind this connection's challenge" error, breaking the primary mobile workflow.
4.  **[#5220](https://github.com/github/copilot-cli/issues/5220)** "[area:models] Option for 1-hour prompt cache TTL for Claude models": Users report the default 5-minute Anthropic cache TTL expires too quickly during interactive use, forcing full conversation re-sends and increasing costs/latency.
5.  **[#5440](https://github.com/github/copilot-cli/issues/5440)** "[area:context-memory, area:plugins] Agent Plugins `.instructions.md` silently ignored": The new Agent Plugins 1.0 format is not loading `.instructions.md` files or `applyTo` frontmatter, effectively breaking the plugin skill system for many users.
6.  **[#5539](https://github.com/github/copilot-cli/issues/5539)** "[area:permissions] Permission UX: persistent user-level read access": Users are frustrated by the complexity of configuring permanent file access rules, requesting a simpler "always allow" policy for home directories without per-repository duplication.
7.  **[#5071](https://github.com/github/copilot-cli/issues/5071)** "[area:platform-windows, area:installation] /upgrade on winget replaces aliases": A Windows-specific bug where the CLI updater overwrites the `WinGet\Links` alias, leaving the system on the old version and breaking the package manager integration.
8.  **[#5539](https://github.com/github/copilot-cli/issues/5539)** "[area:permissions] Permission UX: persistent user-level read access": Users are frustrated by the complexity of configuring permanent file access rules, requesting a simpler "always allow" policy for home directories without per-repository duplication.
9.  **[#5538](https://github.com/github/copilot-cli/issues/5538)** "[area:permissions, area:agents] Browser extension approval for Chromium without toolbar": A feature request to support extensions in browsers like Vivaldi that lack the native toolbar required for the current approval flow.
10. **[#5537](https://github.com/github/copilot-cli/issues/5537)** "[area:sessions] Show AI credits used in the session list": A usability request to add an AIC-used column to the session listing, allowing users to compare session consumption at a glance.

### **Key PR Progress (10 Important)**
*Note: The data source shows 0 merged PRs in the last 24h. The "Latest Releases" section lists fixes and features currently being rolled out in v1.0.115.x pre-releases.*

1.  **Session Resume Reliability**: Fixes a race condition preventing new sessions or causing existing ones to fail to resume.
2.  **Windows Sandbox Enhancements**: Default enablement of package queries and configurable Mach service lookups for sandboxed commands.
3.  **ACP Clarification Questions**: Implementation of structured clarification questions in ACP editors supporting forms.
4.  **Model Switching Acknowledgment**: Fix ensuring the CLI acknowledges requested routing profiles when switching from a specific model to Copilot Fusion.
5.  **Picker Visibility Fix**: Updates to the @mention picker to remain visible until an empty search finishes, preserving normal keyboard actions.
6.  **Plugin Initialization Stability**: Fixes blocking new sessions or causing failures during plugin initialization.
7.  **Child Process Cleanup (Windows)**: Improvements to clean up child processes from Git commands, hooks, and language server checks on Windows.
8.  **macOS Sandbox Mach Lookups**: Addition of `sandbox.userPolicy.seatbelt.extraMachLookups` to allow specific service lookups without enabling Keychain access.
9.  **Ctrl+X then A in /model**: A keyboard shortcut addition to facilitate model selection workflows.
10. **Long-session Disk Optimization**: Reducing disk space footprint for long-running local sessions and improving resume speed.

### **Feature Request Trends**
The issue data reveals a strong preoccupation with **permission governance** and **platform stability**.
*   **Permission Simplification**: A recurring theme is the desire for simpler, persistent user-level access rules (e.g., `#5539`, `#5536`). Users want to define "always allow" directories without complex per-repository policies or duplicated configurations.
*   **AI Safety & Control**: There is significant concern over agent actions, specifically regarding quoting failures and command execution in WSL (#5541) and the need for better sandboxing or confirmation flows before destructive operations.
*   **Model Usability**: Requests for finer control over AI behavior are prominent, most notably the push for a longer prompt cache TTL for Claude models (#5220) to accommodate natural interactive thinking patterns.

### **Developer Pain Points**
*   **Windows Sandbox & Security Software**: A significant pain point involves the interaction between Copilot CLI and security tools. Issues #5478 (Cortex XDR crashing shells) and #5071 (winget alias corruption) highlight that the CLI's execution of common commands (like `git`) or its installation process frequently conflicts with enterprise security policies or package managers, breaking the developer workflow.
*   **Agent Reliability & Safety**: Developers are reporting erratic AI behavior, particularly quoting and variable handling in cross-shell contexts (PowerShell -> WSL), leading to data loss or unintended command execution. This suggests a need for better input validation and sandboxing of agent-generated commands.
*   **Plugin & Configuration Debugging**: The introduction of Agent Plugins 1.0 has introduced a "silent failure" mode where `.instructions.md` files and frontmatter are ignored (#5440), leaving developers unable to debug why their custom skills or agents aren't loading, resulting in significant friction during onboarding and configuration.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for 2026-11-21.

### **Today's Highlights**
A wave of user-reported bugs and feature requests flooded the repository on 2026-11-21, including a Linux TUI keyboard shortcut regression (Shift+P becoming lowercase) and issues with the Claude Agent's cache efficiency. Critically, the "Free tier issues" thread (#59387) reached 400 comments, underscoring ongoing user friction with usage limits and subscription models. Meanwhile, development activity surged with 20+ PRs merged or updated today, spanning bug fixes, font bundling (OpenMono), and infrastructure updates.

### **Releases**
No new versions were published in the last 24 hours. The most significant recent change was PR #64784, which promoted the `dev` branch to production, integrating Gemini 4 Neon support and Console docs for the Tidepool Alpha Free tier.

### **Hot Issues** (Top 10)
1.  **[#59387](https://github.com/anomalyco/opencode/issues/59387)** – *Free tier issues*: The primary support hub for pricing complaints. With 400 comments, it highlights significant user dissatisfaction with "Free usage exceeded" errors and reset failures.
2.  **[#65277](https://github.com/anomalyco/opencode/issues/65277)** – *Gemini subagent hallucination*: A critical bug where parent Gemini sessions hallucinate `<subagent>` XML blocks during background child agent execution.
3.  **[#65315](https://github.com/anomalyco/opencode/issues/65315)** – *OpenAI-compatible error streaming*: A schema error causing session abortion when providers stream error strings instead of objects.
4.  **[#65345](https://github.com/anomalyco/opencode/issues/65345)** – *Shift+P lowercase in Lazygit*: A platform-specific TUI bug where Shift+P is received as lowercase 'p', breaking Lazygit shortcuts on Linux.
5.  **[#65331](https://github.com/anomalyco/opencode/issues/65331)** – *Thinking timeline silencing*: Hiding the thinking category also removes the "Working" status indicator, leaving users blind to agent state.
6.  **[#65338](https://github.com/anomalyco/opencode/issues/65338)** – *TUI plugin API for suggestions*: Request for a plugin API to display inline prompt suggestions within the mini TUI.
7.  **[#65297](https://github.com/anomalyco/opencode/issues/65329)** – *Project-only discoverable in Settings*: A usability request to make projects discoverable within the Settings page when using the "projects-first" sidebar layout.
8.  **[#65342](https://github.com/anomalyco/opencode/issues/65342)** – *Custom titlebar on Linux*: Request for native window controls and a custom titlebar in the Linux desktop app to match platform conventions.
9.  **[#65343](https://github.com/anomalyco/opencode/issues/65343)** – *Mini TUI live activity*: Users report no visible progress indicators in the mini TUI during thinking or tool use, creating uncertainty about agent state.
10. **[#61282](https://github.com/anomalyco/opencode/issues/61282)** – *Claude Opus 5.5 cache efficiency*: Data shows Opus 5.5 through Claude Agent has 3.9x lower cache reuse than native Claude Code, raising cost concerns.

### **Key PR Progress** (Top 10)
1.  **[#65335](https://github.com/anomalyco/opencode/pull/65335)** – *Fix string-valued streaming errors*: Direct fix for issue #65315, accepting string-valued errors in OpenAI-compatible chat streaming to prevent SchemaErrors.
2.  **[#65314](https://github.com/anomalyco/opencode/pull/65314)** – *Handle prompt delivery during undo*: Fixes a race condition where undo operations could race with prompt delivery, ensuring stale queues are cleared if delivery already occurred.
3.  **[#65311](https://github.com/anomalyco/opencode/pull/65311)** – *Retry session reads after reconnect*: Prevents the TUI from jumping to the start screen after sleep or service restarts by re-reading the current session state.
4.  **[#65340](https://github.com/anomalyco/opencode/pull/65340)** – *Machine commands accept --server*: Adds `--server` flag to `machine add|list|remove` commands, enabling local server users to manage machines previously only available via the managed service.
5.  **[#65341](https://github.com/anomalyco/opencode/pull/65341)** – *Machine links over iroh*: Allows machines on other networks to reach a home node with no public address via Iroh (QUIC) in addition to WebSocket.
6.  **[#64797](https://github.com/anomalyco/opencode/pull/64797)** – *Bundle OpenMono as default mono font*: Bundles the OpenMono font as the new default for code and terminal, replacing IBM Plex Mono.
7.  **[#64798](https://github.com/anomalyco/opencode/pull/64798)** – *Use OpenMono as mono typeface*: Updates the data site, Open Graph cards, and shared nav menus to use OpenMono as the typeface.
8.  **[#64796](https://github.com/anomalyco/opencode/pull/64796)** – *Website uses OpenMono*: Applies OpenMono mono text across the website and documentation sites.
9.  **[#63477](https://github.com/anomalyco/opencode/pull/63477)** – *CLI port to native*: Porting the CLI to a native implementation (referencing simonklee/opencode-native-preview), likely improving performance and startup times.
10. **[#61620](https://github.com/anomalyco/opencode/pull/61620)** – *Report missing Claude session directories*: Checks for existing session directories before starting the Claude Agent SDK, suggesting `/cd` if a worktree has been deleted.

### **Feature Request Trends**
The issue stream reveals a strong focus on **platform parity and UI polish**. There is a clear demand for **Linux desktop improvements**, specifically custom titlebars with native controls (#65342) and better TUI activity indicators (#65343). **Developer experience** is another hot theme, with requests for better execution sandboxing (#48411) and a TUI plugin API for inline suggestions (#65338). Finally, **payment and pricing flexibility** remains a persistent request, notably the desire to pay for "Go" tiers with cryptocurrency (#23153).

### **Developer Pain Points**
*   **Linux TUI Usability:** The `Shift+P` bug in Lazygit (#65345) exemplifies a broader frustration with keyboard handling in embedded terminals on Linux.
*   **Thinking State Visibility:** The coupling between hiding the thinking timeline and silencing the working status (#65331) leaves users unable to distinguish between an agent "thinking" and simply "working," a confusing UX gap.
*   **Streaming Error Handling:** The recurring schema errors when providers stream plain string errors (#65315) indicate a fragility in the integration layer with non-standard OpenAI-compatible APIs.
*   **Free Tier Friction:** The massive thread volume on #59387 suggests that current free tier limits and reset mechanisms are a primary source of user frustration and support burden.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

Here is the Pi community digest for 2026-11-21.

### **Today's Highlights**
The Pi ecosystem continues its rapid iteration toward version 1.6.0 stability, marked by significant improvements to the OpenAI-codex integration and critical bug fixes around model routing and resource management. Most notably, the release of v1.6.0 introduced native support for the new GPT-6.2 family, positioning Pi as a primary interface for the latest reasoning-capable models, while a suite of PRs addressed long-standing developer pain points regarding session management and proxy configurations.

### **Releases**
*   **v1.6.0**: The latest stable release. Key updates include the availability of **GPT-6.2 Astra and GPT-6.2 Sol** on `openai`, `azure`, and `openai-codex` providers, with GPT-6.2 Sol now set as the default model. This release also features critical fixes for the Bedrock SSO credential proxy issue and improvements to the coding-agent's context estimation.

### **Hot Issues** *(Top 10 by impact and activity)*

1.  **#12361** `[prio:p0]` **openai-codex 1.6.0: `--thinking high/xhigh` on GPT-6 models gets less reasoning**: A critical regression where setting `reasoning.effort` to "high" or "xhigh" on GPT-6 models forces the system to "medium," significantly degrading performance. The community is actively discussing the `compat.supportsMidConvoEffort` flag.
2.  **#12340** **[bug, inprogress]** **Windows Git Bash silently truncates long RPC bash commands**: A severe silent truncation bug where commands exceeding 8,186 characters are silently cut, causing silent failures in automation scripts on Windows.
3.  **#12367** `[bug, prio:p0]` **OpenAI drops reasoning items (prefix_mismatch)**: Reports of reasoning "thought" items being dropped during sessions, leading to incomplete agent outputs and session errors.
4.  **#12318** `[inprogress, prio:p0]` **Anthropic `/login` fails on Claude Team/Enterprise seats**: OAuth scope errors preventing Team/Enterprise users from authenticating, blocking access to paid features.
5.  **#12321** **[bug, inprogress]** **[Gemini model detection]** Request to recognize Gemini model IDs that do not start with "gemini-", ensuring consistent strict tool use compatibility across all Google model variants.
6.  **#12238** **[OPEN]** **`pi -p` (headless) does not exit when a stdio MCP server stays connected**: A process hanging issue where headless mode fails to terminate if an MCP server remains connected, requiring manual killing.
7.  **#12308** **[inprogress, prio:p0]** **OpenAI service tier pricing: ultrafast bills at 1x**: A pricing discrepancy where the "ultrafast" service tier is incorrectly billed at standard 1x rates instead of the premium multiplier.
8.  **#12353** **[bug]** **Bedrock requests hang with HTTPS_PROXY set**: AWS credential chain ignores the `HTTPS_PROXY` environment variable, causing Bedrock calls to hang indefinitely when a proxy is configured.
9.  **#12156** `[bug]` **codemode: `schemaToType` ignores limits for array items**: A rendering bug where array item limits are ignored, leading to malformed type definitions in code mode.
10. **#12279** **[bug]** **Navigating the session tree adds the branch's prompts to Up-arrow history again**: A UX frustration where session tree navigation repeatedly populates the up-history stack with duplicate prompts.

### **Key PR Progress** *(Top 10 merged/active fixes)*

1.  **#12378** **fix(coding-agent): keep usage-backed estimate past post-usage context edits**: Fixes a context estimation bug where usage estimates were discarded upon any context edit, preventing accurate token budgeting.
2.  **#12369** **fix(coding-agent): pass Windows bash commands in an environment variable**: Closes #12340 by passing long bash commands via environment variables to bypass the 8,186 character truncation limit in Git Bash.
3.  **#12371** **fix(ai): Gemini 3+ detection for prefixed Google model IDs**: Adds support for Gemini models served under prefixed IDs (e.g., `randomprefix-gemini-4-argon`), enabling strict tool use for previously unsupported models.
4.  **#12365** **fix(ai): resolve Bedrock SSO credentials through HTTPS_PROXY**: Fixes the hanging Bedrock issue (#12353) by ensuring the proxy-aware HTTP handler is used for SSO credential resolution.
5.  **#12280** **fix(coding-agent): tree navigation no longer re-adds prompts to history**: Resolves the duplicate history issue (#12279) by modifying how tree navigation populates the chat history.
6.  **#12366** **fix(ai): merge createProvider model catalog once per publish, not per read**: A performance optimization that prevents quadratic catalog merging during model lookups, significantly speeding up `getModels()` calls.
7.  **#12363** **fix(durable): list only reachable code-mode namespaces**: Fixes a "verbose prompt" bug where disabled tool namespaces were still listed in code mode prompts, confusing the model.
8.  **#12360** **fix(coding-agent): load sessions with very many entries after the last compaction**: Fixes a crash when loading sessions with >120k entries post-compaction by fixing a function argument spread limit.
9.  **#12358** **fix(ai): report OpenAI Decisions cache read and write tokens**: Ensures that `cached_tokens` and `cache_write_tokens` from the Decisions API are correctly reported in usage metrics.
10. **#12356** **fix(coding-agent): exit nonzero in JSON mode when the final response fails**: Ensures `pi --mode json` exits with code 1 on errors, aligning behavior with text print mode.

### **Feature Request Trends**
The issue queue reveals a strong focus on **model provider parity and debugging**. There is significant demand for better **Gemini model detection** (handling prefixed IDs) and **Anthropic Team/Enterprise login support**. Additionally, developers are actively requesting more granular **cache warming configuration** (Issue #11127) and better **thinking/effort control** for advanced models like GPT-6, indicating a shift toward managing complex reasoning budgets rather than just raw intelligence.

### **Developer Pain Points**
Recurring frustrations center on **silent failures and configuration gaps**. The "silent truncation" of long bash commands on Windows Git Bash (#12340) and the "hang" when using `HTTPS_PROXY` with Bedrock (#12353) are critical infrastructure blockers. Furthermore, the mismatch between advertised model capabilities (e.g., `xhigh` thinking for Gemini/Anthropic) and actual API behavior forces developers into workarounds, while the lack of proxy-aware credential chains in Bedrock creates operational friction for secured environments.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest
**2026-11-21**

### **Today's Highlights**
The Qwen Code ecosystem shifted focus toward platform stability and incremental tooling this week. A critical production bug (#17479) was identified where SSE listener exhaustion in `qwen serve` could lock down the `/health` endpoint on long-running deployments, prompting a suite of follow-up fixes (#18004, #18008) focused on diagnostics and retention. Simultaneously, the team landed significant UI polish (#17541) and a new Arabic i18n support (#17437), while the nightly build `v0.28.0-nightly.20261120.19b31401f5` incorporated full-stack E2E testing for managed-agent scheduling loops.

### **Releases**
*   **v0.28.3**: A minor patch released in the last 24h. Full change list is pending release notes generation.
*   **v0.28.1-preview.1**: A preview release tag present in the history, but no detailed change list provided in the snapshot.
*   **v0.28.0-nightly.20261120.19b31401f5**: The most recent nightly build, featuring an E2E test observing a real scheduled `/loop` fire in the full-stack managed-agent environment.

### **Hot Issues** (Top 10)
1.  **[#17479](https://github.com/QwenLM/qwen-code/issues/17479)** [P1] **SSE listener exhaustion lockout**: The most critical issue this week. Two compounding defects in `qwen serve` cause a daemon to become "alive but unreachable" as SSE streams exhaust the HTTP listener pool, locking out health checks. High severity for production users.
2.  **[#18004](https://github.com/QwenLM/qwen-code/issues/18004)** [P2] **Listener occupancy diagnostics**: A direct follow-up to #17479, proposing an offline method to read listener-slot occupancy without consuming a connection slot from the exhausted pool.
3.  **[#17985](https://github.com/QwenLM/qwen-code/issues/17985)** [P2] **Shared peer endpoint cleanup race**: A timing bug where a second close caller returns prematurely while the first caller still removes its socket, risking session corruption during shutdown.
4.  **[#18003](https://github.com/QwenLM/qwen-code/issues/18003)** [P2] **UI revocation delivery bug**: An exception during context reads erases the confirmed disabled state, preventing later observers from receiving revocation events.
5.  **[#18002](https://github.com/QwenLM/qwen-code/issues/18002)** [P2] **Input pipe persistence**: The TypeScript SDK closes `stdin` after the first turn, preventing later turns from receiving permission or embedded-tool replies.
6.  **[#18001](https://github.com/QwenLM/qwen-code/issues/18001)** [P2] **Native REST post-disposal**: Several public methods bypass the selected transport after client disposal, creating network requests and daemon mutations post-close.
7.  **[#18000](https://github.com/QwenLM/qwen-code/issues/18000)** [P2] **Unicode transcript truncation**: Text limits cutting between UTF-16 code units of emojis/supplementary characters result in replacement characters being displayed/retention.
8.  **[#17989](https://github.com/QwenLM/qwen-code/issues/17989)** [P2] **Prompt retention during bridge idle**: Cleanup timers abort streams after 30 minutes of inactivity even if the prompt is still active, reproducing against main commit `f545386d2fb26cc699093c6b`.
9.  **[#17987](https://github.com/QwenLM/qwen-code/issues/17987)** [P2] **Bound transcript notification traversal**: Iterating a live subscriber Set freezes the event loop when a callback removes and re-adds itself during transcript output.
10. **[#17085](https://github.com/QwenLM/qwen-code/issues/17085)** [type/bug] **ECS runner fleet staleness**: The ECS update action failed, leaving at least one pool running `0.27.3` while the target was a newer release.

### **Key PR Progress** (Top 10)
1.  **[#18008](https://github.com/QwenLM/qwen-code/pull/18008)** `fix(acp)`: Handles `authRequired`, subscription/qoder auth methods, and model catalog projection fixes.
2.  **[#18009](https://github.com/QwenLM/qwen-code/pull/18009)** `feat(cli)`: Implements count-based retention for held chats and owner-scoped worktree reconstruction across workspace reopens.
3.  **[#18007](https://github.com/QwenLM/qwen-code/pull/18007)** `feat(auth)`: Adds personal Google OAuth support for Gemini Code Assist, featuring an isolated credential store with refresh handling.
4.  **[#18006](https://github.com/QwenLM/qwen-code/pull/18006)** `fix(acp)`: Fixes `authRequired` and subscription auth method handling to prevent model catalog projection failures.
5.  **[#17970](https://github.com/QwenLM/qwen-code/pull/17970)** `feat(web-shell)`: Introduces compact automatic-trigger cards for repetitive `/loop` continuations, reducing bubble size for cron and self-paced loops.
6.  **[#17964](https://github.com/QwenLM/qwen-code/pull/17964)** `fix(managed-agent)`: Creates the ephemeral Runtime state directory at spawn time (not provider creation), completing the lazy state-directory fix.
7.  **[#17952](https://github.com/QwenLM/qwen-code/pull/17952)** `feat(web-shell)`: Lands the contract-driven `ChatSurface` chat column renderer, unifying the transcript, active tool approval, active question, and composer from the session view model.
8.  **[#17910](https://github.com/QwenLM/qwen-code/pull/17910)** `fix(core)`: Retains oversized transcript indexes in a bounded cache class (256 MiB, LRU eviction) instead of refusing admission on every request.
9.  **[#17541](https://github.com/QwenLM/qwen-code/pull/17541)** `feat(cli)`: Polishes terminal layout, centers bounded dialogs over the transcript, and places approval mode beside its cycling shortcut on the input border.
10. **[#17437](https://github.com/QwenLM/qwen-code/pull/17437)** `feat(i18n)`: Adds complete Arabic language support for CLI and Web Shell, including RTL layout support in Web Shell and HTML transcripts.

### **Feature Request Trends**
Analysis of the 18 open issues reveals a strong momentum toward **daemon stability and observability**. The most discussed theme is the management of HTTP listener resources (`#17479`, `#18004`, `#18008`), specifically preventing exhaustion during long-running `serve` sessions. There is also a clear focus on **session and state lifecycle management** (`#17985`, `#18003`, `#18001`, `#18002`), ensuring that cleanup, revocation, and input pipe handling do not leak resources or break across disposal boundaries. Finally, **i18n expansion** is active, with Arabic support recently landed (#17437), suggesting a push for global CLI accessibility.

### **Developer Pain Points**
*   **SSE Resource Leaks**: The `qwen serve` command's failure to manage SSE listener slots is the top frustration, capable of completely locking down a production daemon's health endpoint without crashing the process.
*   **Post-Disposal Ghost Calls**: Developers are encountering bugs where client methods (REST, upload, streaming) execute network requests *after* the client has been disposed/closed, violating the expected lifecycle and risking mutations.
*   **Unicode Transcript Corruption**: Terminal rendering breaks when text limits intersect with emojis or supplementary Unicode characters, introducing replacement characters that corrupt the transcript display.
*   **Input Pipe Closure**: The TypeScript SDK's habit of closing `stdin` after the first turn result prevents subsequent turns from interacting with the agent, breaking multi-turn workflows.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek-TUI Community Digest
**2026-11-21**

## 1. Today's Highlights
The Codewhale project continues its focused push on execution security and TUI stability. The team closed a significant batch of execpolicy vulnerabilities (issues #7408-#7416), refining dynamic flag scanning and tmux verb modeling, while simultaneously addressing long-standing TUI bugs like silent paste truncation (#7403) and focus-induced screen flashes (#7343). A notable maintenance protocol proposal (#7433) was also introduced to gate agent work and enforce regression testing.

## 2. Releases
No new releases were published in the last 24 hours.

## 3. Hot Issues (Top 10)

*   **#7403 [bug] Paste Burst Truncation**: The `PASTE_BURST_MAX_BYTES` limit of 64 KiB silently drops the tail of raw pastes larger than this, particularly affecting CJK characters which consume bytes faster than ASCII. This was exacerbated after PR #7398 routed non-ASCII chars through the burst buffer. [Link](https://github.com/codewhale-hq/Codewhale/issues/7403)
*   **#7343 [area:tui, os:linux] Focus Flash**: Entering a terminal window triggers a full-screen erase (`CSI 2J`) and repaint wrapped in DEC 2026 markers. On terminals without DEC 2026 support (like gnome-terminal/VTE < 0.76), this causes a visible flicker/flash. [Link](https://github.com/codewhale-hq/Codewhale/issues/7343)
*   **#7344 [area:tui, area:install] GNOME Terminal Theme Persistence**: After exiting CodeWhale, GNOME Terminal retains CodeWhale's Nord theme colors (`#ECEFF4` background, `#2E3440` foreground) instead of restoring the previous profile, though the palette remains Solarized. [Link](https://github.com/codewhale-hq/Codewhale/issues/7344)
*   **#7412 [area:sandbox] `find -delete` Recognition**: The execpolicy scanner does not treat `find -delete` as a destructive payload, meaning deny rules for `rm` do not cover equivalent file deletion via `find`. [Link](https://github.com/codewhale-hq/Codewhale/issues/7412)
*   **#7354 [area:tui, area:state] Session Admission Blocking**: Forking a conversation via `/undo` with a `turn_id` holds the manager-wide session admission guard across the entire fork preparation, blocking unrelated threads from accessing the session. [Link](https://github.com/codewhale-hq/Codewhale/issues/7354)
*   **#7401 [bug] Flag-word Substitution Hides Payload**: Using `nix develop -c$(echo rm) x` or `--command=$(echo rm) x` renders the flag as static, causing the runtime-resolved payload to escape deny rules under `AskForApproval::Never`. [Link](https://github.com/codewhale-hq/Codewhale/issues/7401)
*   **#7411 [area:sandbox] Unmodeled Execution Launchers**: Deny rules only apply to modeled launchers. Common tools like `oc rsh`, `vagrant ssh`, `op`, `opam`, and `helm` can execute deny-listed commands without the scanner emitting a deny target. [Link](https://github.com/codewhale-hq/Codewhale/issues/7411)
*   **#7415 [execpolicy] tmux Verb Coverage**: The tmux `VerbLauncher` models standard verbs but misses executing commands within tmux verbs like `display-popup 'rm x'` or `confirm-before 'rm x'`, which run commands immediately in popups. [Link](https://github.com/codewhale-hq/Codewhale/issues/7415)
*   **#7407 [area:core, area:state] Read-only Tool Classification**: `get_tool_category()` lacks arms for ~16 registered `ToolCapability::ReadOnly` tools, forcing them into `ToolCategory::Unknown` and triggering `AskUser` prompts in Auto-Review. [Link](https://github.com/codewhale-hq/Codewhale/issues/7407)
*   **#7433 [enhancement] Maintainer Gate Protocol**: A proposal to implement a "startability is a grant" model where the Agent task form no longer self-applies `agent-ready`, requiring explicit maintainer approval before work begins, followed by a regression stage. [Link](https://github.com/codewhale-hq/Codewhale/issues/7433)
*   **#7435 [area:tui, area:core] PR Review Task Contradiction**: The per-pass task text for PR review states "omitted callers are not inspected," contradicting the tools the review model actually receives, causing confusion during code review. [Link](https://github.com/codewhale-hq/Codewhale/issues/7435)

## 4. Key PR Progress (Top 10)

*   **#7444 [test] Paste-Burst Guard**: Guards all four paste-burst chunk-flush sites in the TUI test suite, ensuring that a single chunk check does not disappear and that oversized raw/bracketed pastes preserve every character and newline. [Link](https://github.com/codewhale-hq/Codewhale/pull/7444)
*   **#7427 [bug] Whole-word Dynamic Flag Scanning**: Tightens scanning to fail closed when a word whose entire flag or verb text is runtime-resolved (e.g., `su $(echo -c) 'rm x'`). Previously, these parsed as empty or non-prefixed words with `dynamic = true`, bypassing scanners. [Link](https://github.com/codewhale-hq/Codewhale/pull/7427)
*   **#7429 [bug] stdin_piped Propagation**: Addresses six findings from #7416, specifically refining how `|` vs `||` and `<` redirections propagate the `stdin_piped` flag in `shell_expand.rs`. [Link](https://github.com/codewhale-hq/Codewhale/pull/7429)
*   **#7430 [bug] Static awk/sed Scanning**: Scans static `awk 'BEGIN{system("rm x")}'` and `sed 's/a/rm x/e'` program payloads that were previously treated as opaque by the execpolicy scanner. [Link](https://github.com/codewhale-hq/Codewhale/pull/7430)
*   **#7431 [fix] Read-only Tool Classification**: Classifies local read-only deferred tools as `Safe` in `get_tool_category()`, resolving the issue where they fell through to `Unknown` and triggered unnecessary `AskUser` prompts. [Link](https://github.com/codewhale-hq/Codewhale/pull/7431)
*   **#7428 [bug] Additional tmux Verbs**: Extends execpolicy to model remaining command-executing tmux verbs (`display-popup`, `popup`, etc.) with their per-option and operand-consumption rules to prevent deny-rule bypass. [Link](https://github.com/codewhale-hq/Codewhale/pull/7428)
*   **#7426 [bug] Repeated `--` Expansion**: Fixes `Expander::record` in `shell_expand.rs` from invoking `record_extra_deny` for every unquoted `--` slice using a fresh child Expander, which re-scanned remaining `--` in its own suffix. [Link](https://github.com/codewhale-hq/Codewhale/pull/7426)
*   **#7445 [enhancement] CI Maintainer Gate**: Implements the protocol from #7433: a maintainer gate before agent work (where startability is a grant, not self-applied) and a regression stage after. [Link](https://github.com/codewhale-hq/Codewhale/pull/7445)
*   **#7446 [perf] Item Index Caching**: Caches the item index across processes so the first thread opening a process doesn't pay the cost of scanning the entire items directory to determine turn ownership. [Link](https://github.com/codewhale-hq/Codewhale/pull/7446)
*   **#7447 [cleanup] Models.dev Seed Refresh**: Refreshes the Models.dev offline seed, publishing new model rows on the public `/models` page marked `unreviewed` until manually verified. [Link](https://github.com/codewhale-hq/Codewhale/pull/7447)

## 5. Feature Request Trends
The issue stream reveals a strong focus on **execution security hardening** and **TUI reliability**. There is significant demand for comprehensive modeling of execution launchers (issues #7411, #7415, #7412) to close deny-rule bypasses. Simultaneously, developers are grappling with **paste handling edge cases** (#7403) and **terminal compatibility** (#7343, #7344), specifically around CJK character byte limits and DEC 2026 synchronization. The introduction of a **maintainer gate** (#7433) indicates a community shift toward more structured, permission-gated agent workflows to prevent regressions.

## 6. Developer Pain Points
*   **Silent Data Loss**: The 64 KiB paste burst limit (#7403) causes raw pastes—especially those containing CJK characters—to silently truncate, degrading the user experience for non-Latin scripts.
*   **Terminal Flicker on Focus**: The DEC 2026-dependent full-screen erase on focus (#7343) creates a jarring visual flash on mainstream terminals like gnome-terminal, which do not support the marker.
*   **Theme Pollution**: Exiting the TUI leaves behind custom theme colors in GNOME Terminal (#7344), requiring users to manually reset their profile settings.
*   **Execpolicy Blind Spots**: The scanner frequently fails to recognize destructive payloads when they are obfuscated via shell substitution (#7401, #7412), shell built-ins like `find -delete` (#7412), or inside static program text like `awk`/`sed` (#7413, #7430).
*   **Workflow Friction**: The lack of a maintainer gate (#7433) and the contradiction in PR review task text (#7435) create friction in the development workflow, particularly for sub-agent management and code review automation.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*