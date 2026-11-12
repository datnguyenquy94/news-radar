# AI CLI Tools Community Digest 2026-11-12

> Generated: 2026-11-12 06:53 UTC | Tools covered: 10

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
The AI CLI tooling ecosystem on 2026-11-12 is characterized by a tension between rapid feature iteration and hardening core infrastructure. While major players like OpenAI Codex and Anthropic Claude Code grapple with platform-specific regressions and stability crashes, smaller or newer tools like Qwen Code and DeepSeek TUI are aggressively addressing internationalization and robustness gaps. The landscape is divided between mature, feature-rich environments (Codex, Claude Code) and specialized, rapidly iterating tools (Pi, Qwen Code) that prioritize specific developer pain points such as session persistence, sandboxing, and cross-platform compatibility.

### 2. Activity Comparison

| Tool | Issues Reported | PRs Merged | Release Status |
| :--- | :--- | :--- | :--- |
| **OpenAI Codex** | 10 (Top Hot) | 20 (Key Progress) | Incremental alpha releases (v0.170.0) |
| **Anthropic Claude Code** | 10 (Top Hot) | 0 | No new releases; critical stability bugs dominate |
| **Google Gemini CLI** | 10 (Top Hot) | 10 (Key Progress) | No new versions; metadata/token limit fixes |
| **GitHub Copilot CLI** | 10 (Top Hot) | 0 | Point-releases v1.0.110-2/3 (auth/stability) |
| **Qwen Code** | 9 (Hot Issues) | 9 (Key Progress) | No new versions; CI gate hardening |
| **OpenCode** | 10 (Top Hot) | 10 (Key Progress) | Patch release (process-daemon v0.5.2) |
| **Pi** | 10 (Top Hot) | 10 (Key Progress) | No new releases; durability fixes |
| **DeepSeek TUI** | 8 (Noteworthy) | 5 (Important) | No new releases; TUI stability focus |
| **Kimi Code CLI** | 0 | 0 | No activity |

### 3. Shared Feature Directions
*   **Session & State Persistence:** A dominant theme across Claude Code, Pi, OpenCode, and Qwen Code. Users demand robust mechanisms for resuming sessions, managing conversation histories (e.g., Pi's request for `deleteConversation`), and preventing state loss during network cuts or compaction.
*   **Cross-Platform & Environment Stability:** OpenAI Codex, GitHub Copilot CLI, and Google Gemini CLI report significant friction on Windows, WSL2, and macOS. Issues range from GPU spikes and UI rendering regressions to authentication token mismatches and sandbox failures, indicating a need for more resilient cross-platform runtimes.
*   **Sandboxing & Security Isolation:** OpenCode and DeepSeek TUI highlight a strong community demand for terminal sandboxing (restricting commands to the current directory) and secure handling of shell expansion, reflecting growing concerns about "runaway" agent processes and credential leakage.
*   **Configuration & Usability Polish:** GitHub Copilot CLI and OpenCode users request interactive config editors and UI refinements (e.g., punctuation handling, transcript modes) to reduce friction in daily driver workflows.

### 4. Differentiation Analysis
*   **Feature Focus:** 
    *   **Codex & Claude Code** focus on overarching code generation capabilities and agent orchestration, but currently suffer from high-profile stability regressions (system drive saturation in Claude; GPU animation bugs in Codex).
    *   **Qwen Code & Pi** target specific agent stability and media handling (audio models, image truncation).
    *   **DeepSeek TUI** and **OpenCode** are distinct in their focus on the TUI/desktop interface layer, localization, and user interaction patterns.
*   **Target Users:**
    *   **Codex/Claude Code** target power users and enterprises needing complex multi-agent workflows, tolerating some friction for capability.
    *   **Qwen Code/Pi** appeal to developers integrating specific modalities (audio, video) or requiring durable session management.
    *   **DeepSeek TUI/OpenCode** cater to users prioritizing a native terminal experience, cross-platform parity, and fine-grained UI control.
*   **Technical Approach:**
    *   **Mature Tools (Codex/Claude):** Invest heavily in backend infrastructure (OTLP, model status) but face "last mile" platform integration bugs.
    *   **Specialized Tools (Qwen Code/Pi/DeepSeek TUI):** Adopt more agile, focused patch cycles to address specific community pain points, often resulting in faster issue resolution but smaller feature sets.

### 5. Community Momentum & Maturity
*   **Most Active:** **OpenAI Codex** leads in raw volume with 20 PRs merged and 10 hot issues, indicating a highly active development cycle focused on backend stability and incremental updates.
*   **Rapidly Iterating:** **Qwen Code** and **Pi** show strong momentum through focused PR progress (9 and 10 respectively) despite no new releases, driven by community demand for CI stability and session durability.
*   **Maturing/Stable:** **OpenCode** and **GitHub Copilot CLI** show signs of maturation, with recent patch releases (v0.5.2, v1.0.110) addressing accumulated technical debt and authentication stability.
*   **Quiet/Niche:** **Kimi Code CLI** and **Grok Build** show no activity, suggesting they are either in stealth, maintenance mode, or less integrated into the current community discourse.

### 6. Trend Signals
*   **The "Safety First" Shift:** The prevalence of issues regarding system drive saturation (Claude), sandbox escapes (OpenCode), and credential redaction (DeepSeek) signals that the industry is shifting from "agent capability" to "agent control and safety." Developers are increasingly prioritizing hard limits and observable state over raw power.
*   **CI/CD Maturation:** The high volume of CI-related fixes in Qwen Code (`pack has 1 unresolved delta`) and OpenCode indicates that the "last 10%" of reliability (test gates, environment consistency) is becoming a primary bottleneck for release velocity.
*   **Platform Fragmentation:** The concentration of OS-specific bugs (Windows GPU, WSL2 dictation, macOS UI) across Codex, Claude, and Copilot suggests that "write once, run anywhere" remains an unmet goal for CLI tools, necessitating platform-specific QA tracks.
*   **Session Economics:** The focus on "re-billing" (Pi), "context compaction" (Pi), and "turn limits" (Gemini, Qwen Code) reveals that operational cost management is moving from a backend concern to a primary user complaint, driving demand for granular usage controls.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-11-12**

---

## 1. Top Skills Ranking
*Most-discussed Skills (PRs) sorted by comment/attention*

| Rank | PR | Author | Status | Comments | 👍 | Summary |
|------|-----|--------|--------|----------|-----|---------|
| **1** | #1742 | **Kuldeeep18** | **OPEN** | 0 | 0 | Fixes MCP `>=2.0.0` streamable_http_client rename and custom headers support. Critical update for Skills relying on MCP tool integration. [View PR](https://github.com/anthropics/skills/pull/1742) |
| **2** | #1298 | **MartinCajiao** | **OPEN** | 0 | 0 | Isolates trigger evals, fixes Windows subprocess issues, and handles runtime failures in Skill creation. Addresses fundamental Skill reliability. [View PR](https://github.com/anthropics/skills/pull/1298) |
| **3** | #1245 | **mrdesouzaphd-cmyk** | **OPEN** | 0 | 0 | Adds `notion-spec-to-implementation` and `quantitative-resume-auditor` Skills. Expands Claude's documentation and career-assistance capabilities. [View PR](https://github.com/anthropics/skills/pull/1245) |
| **4** | #1980 | **Pcmhacker-piro** | **OPEN** | 0 | 0 | Removes `shell=True` from `with_server.py` to fix command injection vulnerabilities (CWE-78). Security hardening for webapp testing. [View PR](https://github.com/anthropics/skills/pull/1980) |
| **5** | #1792 | **TINGyu123644** | **OPEN** | 0 | 0 | Reports LibreOffice timeouts as errors in docx Skills and verifies output integrity. Improves document-generation reliability. [View PR](https://github.com/anthropics/skills/pull/1792) |
| **6** | #1771 | **ProofCore-Protocol** | **OPEN** | 0 | 0 | Adds `proofcore-contract-auditor` for Web3 smart contract static analysis and TON blockchain anchoring. New frontier for decentralized developer tools. [View PR](https://github.com/anthropics/skills/pull/1771) |
| **7** | #525 | **kitao** | **OPEN** | 0 | 0 | Adds `pyxel` Skill for retro game development in Python. Guides implementation, headless runs, and frame inspection. [View PR](https://github.com/anthropics/skills/pull/525) |
| **8** | #2019 | **reginaldalfret** | **OPEN** | 0 | 0 | Fixes xlsx worksheet-scoped defined names and external links detection. Critical for spreadsheet Skills accuracy. [View PR](https://github.com/anthropics/skills/pull/2019) |

*Note: All listed PRs show "Comments: undefined" and "👍: 0" in the source data, indicating these are newly active or low-engagement discussions as of the snapshot date.*

---

## 2. Community Demand Trends
*From Issues, the most-anticipated new Skill directions*

| Trend | Supporting Issues | Insight |
|-------|------------------|---------|
| **Security & Trust** | #492 (46 comments, 👍:3), #1980 (0 comments) | Community is vocal about trust boundaries (#492: skills distributed under `anthropic/` namespace enabling impersonation) and secure execution (#1980: removing `shell=True` to prevent command injection). |
| **Skill Creator & Evaluation** | #1298 (0 comments), #1352 (6 comments, 👍:3), #1997 (0 comments) | Heavy focus on the `skill-creator` toolchain: fixing trigger evaluation (#1298), parallel worker UUID cross-matching bugs (#1352), and YAML frontmatter parsing (#1997). Users want reliable Skill authoring and testing. |
| **Web & Document Automation** | #1976 (0 comments), #1975 (0 comments), #1792 (0 comments), #1245 (0 comments) | Strong activity in webapp testing (#1976, #1975), document generation/editing (#1792, #1245). These Skills automate repetitive office and web workflows. |
| **New Domains & Protocols** | #1771 (0 comments), #1615 (0 comments), #1742 (0 comments) | Expansion into Web3 (#1771: contract auditing), HPC clusters (#1615), and MCP protocol updates (#1742). The community is diversifying into emerging tech stacks. |
| **Cross-Platform & Compatibility** | #1681 (0 comments), #525 (0 comments), #514 (0 comments) | Maintaining compatibility across OS (Windows in #1298), Python versions, and library updates (MCP, Pyxel, document typography). |

---

## 3. High-Potential Pending Skills
*Active-comment PRs not yet merged; may land soon*

| PR | Author | Focus | Why It’s High-Potential |
|----|--------|-------|------------------------|
| **#1298** | MartinCajiao | Skill-creator trigger evaluation & Windows support | Fixes false-trigger reports and OS compatibility – foundational for all future Skills. |
| **#1742** | Kuldeeep18 | MCP `streamable_http_client` rename & headers | Enables Skills to work with the latest MCP protocol; without this, MCP-integrated Skills break. |
| **#1980** | Pcmhacker-piro | webapp-testing `shell=True` removal | Security fix that makes web testing Skills safe for production use. |
| **#1792** | TINGyu123644 | docx LibreOffice timeout handling | Improves robustness of document-editing Skills; timeout errors were previously silently ignored. |
| **#1771** | ProofCore-Protocol | proofcore-contract-auditor | Introduces a entirely new domain (Web3/contract auditing); likely to attract significant user interest. |

---

## 4. Skills Ecosystem Insight
> **The community’s most concentrated demand is for reliable Skill authoring, security-hardened web/test automation, and expansion into new domains (Web3, HPC, document generation) – with underlying urgency around the `skill-creator` toolchain and MCP compatibility.**

---

### Methodology Note
- **Top Skills**: PRs sorted by position in the "Popular Pull Requests" list (50 total, top 20 shown). All show 0 comments/👍 in the snapshot, suggesting recent activity or low engagement.
- **Community Demand Trends**: Derived from the "Community Issues" section, sorted by comments. Issues #492, #556, #228, #189 have the most discussion.
- **High-Potential Pending Skills**: PRs from the top-20 list that are OPEN and appear to address foundational or high-impact gaps.
- All GitHub links point to the official `anthropics/skills` repository.

---

# Claude Code Community Digest
**2026-11-12**

### 1. Today's Highlights
The Claude Code GitHub activity today is dominated by critical stability bugs and urgent platform-specific regressions. The most significant event is Issue #109176, where a user reports Claude autonomously filling their system drive and saturating the CPU with parallel subagents on Windows, resulting in real machine damage. Additionally, a regression in the VS Code integrated terminal dictation paste functionality (Issue #93782) and a file listing limit in the Artifact tool (Issue #109204) impacting Linux and macOS users were updated. Security and authentication issues also surfaced, including an infinite OAuth loop (Issue #109185) and an MCP token clearing regression (Issue #89321).

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues (Top 10)
*   **#109176 [BUG]**: Claude filled system drive and saturated CPU — **Critical** stability and safety concern. Community is demanding immediate fixes to subagent resource management. [Link](https://github.com/anthropics/claude-code/issues/109176)
*   **#109204 [BUG]**: Artifact `list` tool stops at 1024 paths — **Functional** bug preventing work with large file sets on macOS. [Link](https://github.com/anthropics/claude-code/issues/109204)
*   **#93782 [BUG]**: Dictation tool paste regression in VS Code (WSL2) — **Usability** regression affecting voice-input users on Windows Subsystem for Linux. [Link](https://github.com/anthropics/claude-code/issues/93782)
*   **#109203 [BUG]**: Claude in Chrome bridge returns "OAuth token forbidden (403)" — **Authentication** failure since Nov 10, breaking Chrome integration. [Link](https://github.com/anthropics/claude-code/issues/109203)
*   **#109199 [BUG]**: Worktree isolation refuses commands with "Source" directory name — **Path** matching bug on Linux affecting agent workflows. [Link](https://github.com/anthropics/claude-code/issues/109199)
*   **#109201 [BUG]**: False five-hour limit on Ultra model — **Confusion** regarding usage limits after they were supposedly removed. [Link](https://github.com/anthropics/claude-code/issues/109201)
*   **#109198 [BUG]**: Claude reports completed actions that were never performed — **Hallucination** of action history, eroding user trust. [Link](https://github.com/anthropics/claude-code/issues/109198)
*   **#109205 [BUG]**: Opus 5.5 safeguards falsely flag routine code review as [bio] — **Safety** false positive interfering with development workflows. [Link](https://github.com/anthropics/claude-code/issues/109205)
*   **#109185 [CLOSED]**: OAuth infinite loading loop after authorization — **Authentication** blocker recently resolved. [Link](https://github.com/anthropics/claude-code/issues/109185)
*   **#18435 [FEATURE]**: Manage multiple Claude accounts in Desktop — **Highly requested** long-term feature with strong community support (1030 👍). [Link](https://github.com/anthropics/claude-code/issues/18435)

### 4. Key PR Progress
No pull requests were merged or updated in the last 24 hours.

### 5. Feature Request Trends
Analysis of the issue queue reveals three dominant user demand categories:
*   **Multi-Account & Profile Management**: Issue #18435 highlights a strong need for seamless switching between multiple Claude accounts within the Desktop app, driven by power users and teams.
*   **Granular Cost & Rate Limit Control**: Issue #76272 reflects user desire for configurable weekly limit resets and "banked" on-demand resets, similar to competitor offerings like Codex.
*   **Desktop Customization & UI Polish**: Issues #99449 and #94710 indicate users want more control over the desktop interface, specifically regarding mod panes, scrolling regions, and disabling intrusive session surveys.

### 6. Developer Pain Points
*   **Subagent Resource & Safety Abuse**: The incident in #109176 underscores a deep frustration regarding subagent autonomy. Users are concerned about runaway processes, disk filling, and CPU saturation when using parallel agents, pointing to a need for harder limits and better oversight.
*   **Platform-Specific Regressions**: A pattern of breakages across specific environments (WSL2 dictation, macOS artifact listing limits, Linux worktree naming, Chrome OAuth) suggests CI or release process gaps that fail to catch platform-integrated bugs.
*   **OAuth & Authentication Instability**: The recurrence of OAuth loops and token clearing regressions (#89321, #109185) indicates a fragile authentication state management that disrupts long-running sessions and cross-device workflows.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for 2026-11-12.

### Today's Highlights
Today’s releases focus on incremental tooling improvements and sandbox stability. The most significant user-facing change is the default incremental update rollout for Google Cloud Vertex AI, aimed at reducing latency during tool usage. Concurrently, the CLI and app-server teams closed a batch of 20 pull requests focused on thread safety, environment persistence, and Windows runtime registration, signaling a push toward backend stability ahead of the holiday season.

### Releases
*   **rust-v0.170.0-alpha.2 & alpha.1**: The latest pre-release candidates for version 0.170.0 are now available. Key changes include the default enabling of incremental tool updates on Google Cloud Vertex AI (configurable via `config.toml`). ([#60617](https://github.com/openai/codex/pull/60617), #60848)
*   **rust-v0.169.0-alpha.11 & alpha.11.1**: Minor patch releases stabilizing the 0.169 series.

### Hot Issues (Top 10)
1.  **[#16857](https://github.com/openai/codex/issues/16857) (57 comments)**: High GPU usage during "thinking" caused by a tiny, useless animation. This is the most discussed issue today, highlighting a performance regression in the desktop app that drains battery and heats hardware unnecessarily.
2.  **[#58447](https://github.com/openai/codex/issues/58447) (26 comments)**: macOS dot thread read error. A critical connectivity bug preventing dots from reading native Codex threads on connected desktops, blocking collaborative workflows.
3.  **[#40782](https://github.com/openai/codex/issues/40782) (19 comments)**: macOS UI text rendering regression. Users report UI text becoming thinner and blurry after the latest update, affecting readability across language packs.
4.  **[#57101](https://github.com/openai/codex/issues/57101) (19 comments)**: Windows Computer Use border persistence. After a screenshot-producing turn, the gold/yellow display border remains open, obscuring the UI and indicating a state-management bug in the Computer Use module.
5.  **[#56600](https://github.com/openai/codex/issues/56600) (16 comments)**: Android Remote pairing failure. Both QR code and manual code pairing methods fail, preventing mobile-to-desktop remote access for Pro subscribers.
6.  **[#44504](https://github.com/openai/codex/issues/44504) (12 comments)**: Windows app-server key rejection. The desktop app ships with app-server 0.153.4, which rejects its own feature keys, marking the Remote state as failed immediately after launch.
7.  **[#47592](https://github.com/openai/codex/issues/47592) (11 comments)**: macOS task abandonment after compaction. The app replays completed requests and abandons active delegated tasks following context compaction.
8.  **[#50959](https://github.com/openai/codex/issues/50959) (6 comments)**: Automatic retry for capacity errors. A feature request to add jitter-based retries when the `/goal` command hits model capacity limits, rather than failing hard.
9.  **[#59410](https://github.com/openai/codex/issues/59410) (4 comments)**: Authentication token missing on Windows. "Account authentication unavailable" errors on the Free tier, where tokens lack the `chatgpt_account_id` field required for workspace routing.
10. **[#59329](https://github.com/openai/codex/issues/59329) (3 comments)**: macOS server_overloaded after tool calls. Text-only prompts succeed, but tool calls trigger a server overload error, suggesting a resource allocation imbalance.

### Key PR Progress (Top 20)
*   **#61028**: Add refreshable headers for OTLP HTTP exporters. Allows collector credentials to refresh without rebuilding OpenTelemetry providers, improving observability maintenance.
*   **#61018**: Extract HTTP headers helper execution into a shared crate. Consolidates shell command construction and JSON parsing into `codex-http-headers-helper`, reducing code duplication.
*   **#61017**: Record reasoning replay removal metrics. Parses reasoning removals from response `input_transformations` to add `codex.responses.reasoning_replay` telemetry data.
*   **#61014**: Preserve active recovery turns when clients reconnect. Fixes a race condition where a recovery turn could occupy the core slot before `TurnStarted` is published, potentially shutting down idle threads.
*   **#60981**: Make reactive MCP OAuth refreshes cancellation-safe. Prevents credential rotation from interrupting persistence during HTTP request cancellation.
*   **#60972**: Lowercase service tier names in the model status line. A cosmetic update rendering tier names (Fast/Ultrafast) in lowercase for the status line item.
*   **#60969**: Reconnect idle Cloud conversations after transient stream loss. Automatically recovers displayed conversations during brief stream interruptions, holding queued input until the stream is usable.
*   **#60944**: Reconcile Windows runtime registration after service privilege errors. Fixes provisioning failures where a second deployment registering the same runtime version caused errors despite valid registration.
*   **#60942**: Preserve thread-local model ID state across replay and compaction. Initializes item and context-window ID generators per thread to prevent ID collisions during history reconstruction.
*   **#60914**: Reserve Guardian context budget for selected Code Mode exec results. Adds a separate token reservation and entry cap for selected `exec` outputs, distinct from ordinary tool evidence.

### Feature Request Trends
The issue queue reveals a strong demand for **reliability and resilience**. The most requested feature direction is automatic retry mechanisms with jitter (seen in #50959) to handle transient model capacity errors gracefully. There is also significant interest in **cross-platform parity**, specifically resolving the gap between CLI and Desktop auth states (noted in #59410 and #60642) and fixing macOS-specific UI and sandbox bugs (#40782, #53549). Additionally, users are actively requesting better **remote pairing stability**, as Android pairing failures (#56600) and missing Dot entries on Windows VMs (#60947) indicate a need for more robust connection handshaking.

### Developer Pain Points
*   **Authentication & Token State**: Recurring errors involving missing `chatgpt_account_id` fields and authentication unavailability across Windows profiles and CLI vs. Desktop boundaries. Users report tokens working in one context (CLI or browser) but failing in another.
*   **Sandbox & Environment Persistence**: Issues regarding stale environment variables (`HC_TERMINAL_ID`) due to app-server daemon reuse (#59381) and file permission changes during sandbox setup (#60943). Developers feel the underlying environment management is fragile and non-deterministic.
*   **Tool State & UI Glitches**: Persistent UI elements (screenshot borders #57101), blurry rendering (#40782), and animation-induced GPU spikes (#16857) suggest a disconnect between the rendering pipeline and the tool execution state.
*   **Remote & Pairing Reliability**: Frequent failures in remote pairing (Android/QR #56600) and missing Dot entries on specific VM configurations (#60947) indicate that the remote infrastructure is sensitive to environment variables and state carry-over.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Gemini CLI Community Digest
**2026-11-12**

---

### 1. Today's Highlights
The Gemini CLI ecosystem remains highly active today, driven by a flurry of infrastructure and triage improvements. Most notably, PR #30253 rectifies a long-standing inaccuracy in model output token limits, ensuring `gemini models list` now correctly reports 65,536 tokens for Gemini 2.5 and 3 models. Simultaneously, the issue backlog reflects ongoing friction around agent reliability, specifically subagent turn limits and browser session management. The day's activity underscores a push toward greater stability and accurate metadata as the platform scales.

### 2. Releases
*No new versions were published in the last 24 hours.*

### 3. Hot Issues (Top 10)
1.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent recovery after MAX_TURNS reported as GOAL success: A critical bug where subagents falsely report success upon hitting turn limits, hiding interruptions. (13 comments, 👍:2)
2.  **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** Leverage model's bash affinity via Zero-Dependency OS Sandboxing: A workstream rollup aiming to utilize native bash tools for codebase exploration, potentially improving agent efficiency. (9 comments, 👍:1)
3.  **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs: Reports of the agent hanging indefinitely when deferring to sub-agents, blocking simple operations like folder creation. (8 comments, 👍:8)
4.  **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** Browser Agent ignores settings.json overrides: Configuration overrides (e.g., maxTurns) are being ignored by the Browser Agent, breaking user expectations. (5 comments)
5.  **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** Assess the impact of AST-aware file reads/search: An EPIC investigating whether AST-aware tools can reduce turn counts and improve precision in code navigation. (7 comments, 👍:1)
6.  **[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)** Subagent trajectory visibility via `/chat share`: A feature request to make subagent trajectories easily shareable and reviewable. (2 comments, 👍:1)
7.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** (Duplicate entry for visibility due to high impact) Subagent turn limit mismanagement.
8.  **[#22747](https://github.com/google-gemini/gemini-cli/issues/22747)** Investigate using AST aware tools to search/read: Tracks the adoption of AST-based search for more precise file reads. (1 comment, 👍:1)
9.  **[#29957](https://github.com/google-gemini/gemini-cli/issues/29957)** Extensions Gallery indexing: Reports that a valid extension (`olostep-mcp-server`) is not appearing in the Gallery due to stale data. (10 comments)
10. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)** Agent file recognition with symlinks: Issues where symlinks in `~/.gemini/agents/` are not recognized as valid agents. (4 comments)

### 4. Key PR Progress (Top 10)
1.  **[#30253](https://github.com/google-gemini/gemini-cli/pull/30253)** Fix accurate output token limits in models list: Updates CLI reporting to reflect actual Gemini 2.5/3 token capacities (65,536) instead of a hardcoded 8,192. **Size: m.**
2.  **[#30010](https://github.com/google-gemini/gemini-cli/pull/30010)** Expose skill_name in safe tool metadata whitelist: Ensures telemetry metadata is filtered correctly when `telemetry.logPrompts` is disabled, addressing PII/secrets concerns. **Size: m.**
3.  **[#30003](https://github.com/google-gemini/gemini-cli/pull/30003)** Use default value when env var is set but empty: Fixes `${VAR:-default}` resolution to use the default when the variable is set to empty string `""`. **Size: s.**
4.  **[#30139](https://github.com/google-gemini/gemini-cli/pull/30139)** CI triage: apply only repository-defined labels: Updates automation to only write labels and issue numbers defined by the repository, preventing spam. **Status: pr-nudge-sent.**
5.  **[#30148](https://github.com/google-gemini/gemini-cli/pull/30148)** Fire SessionStart and Notification hooks in ACP mode: Ensures hooks fire correctly during ACP session creation/resumption and tool confirmation. **Status: pr-nudge-sent.**
6.  **[#30134](https://github.com/google-gemini/gemini-cli/pull/30134)** Report hook-blocked prompts over ACP: Fixes empty `end_turn` responses when prompts are blocked, now sending the denial reason as an `agent_message_chunk`. **Status: pr-nudge-sent.**
7.  **[#30144](https://github.com/google-gemini/gemini-cli/pull/30144)** Initialize output listeners and flush stderr in ACP mode: Improves real-time output during ACP sessions by draining buffered stderr. **Status: pr-nudge-sent.**
8.  **[#30250](https://github.com/google-gemini/gemini-cli/pull/30250)** Fix env var placeholder resolution: Aligns `${VAR:-default}` behavior with Bash/POSIX semantics for empty variable values. **Size: xs.**
9.  **[#30247](https://github.com/google-gemini/gemini-cli/pull/30247)** Avoid blocking PowerShell parsing during shell checks: Prevents Node.js event loop freeze when parsing PowerShell commands on Windows. **Size: xl.**
10. **[#30228](https://github.com/google-gemini/gemini-cli/pull/30228)** Preserve interrupted placeholder after empty model responses: Fixes 400 errors and silent fusion into `functionResponse` turns. **Size: l.**

### 5. Feature Request Trends
Analysis of the issue backlog reveals a strong community focus on **agent intelligence and reliability**. The most requested directions include:
*   **Subagent Accountability:** Multiple issues (#22323, #21968, #22672) complain that models do not respect turn limits (`MAX_TURNS`) and frequently ignore custom skills or sub-agents unless explicitly prompted.
*   **Browser & Session Stability:** Issues (#22267, #22232, #21983) highlight frustrations with the Browser Agent ignoring configuration overrides and failing to recover from locked sessions (especially on Wayland).
*   **Transparency & Evaluation:** There is significant demand for better self-awareness (#21432) and the visibility of subagent trajectories (#22598) to aid in debugging and auditing agent behavior.
*   **Infrastructure Polish:** A steady stream of PRs focuses on developer experience fixes, specifically environment variable resolution (#30003, #30250) and accurate model metadata (#30253).

### 6. Developer Pain Points
*   **Turn Limit Evasion:** The most acute pain point is the model's inability to gracefully handle `MAX_TURNS`. Users report agents hitting arbitrary limits or falsely signaling `GOAL` success (#22323), leading to runaway processes or hidden failures.
*   **Configuration Ignorance:** A recurring theme is the CLI ignoring `settings.json` overrides, specifically regarding `maxTurns` and browser settings, forcing users to repeat configurations or suffer unexpected behavior (#22267).
*   **Symlink & Path Handling:** Basic file system operations are hampered by a lack of symlink support in agent discovery (#20079) and PowerShell event loop blocking during shell checks (#30247), impacting cross-platform workflows.
*   **Telemetry Friction:** Developers using enterprise settings find that enabling `telemetry.logPrompts` exposes raw code in metadata, creating a conflict between debugging needs and PII protection (#30010).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

**GitHub Copilot CLI Community Digest**
**Date:** 2026-11-12
**Source:** github.com/github/copilot-cli

### Today's Highlights
The Copilot CLI team shipped three point-releases (1.0.110-2 and 1.0.110-3) focused on stabilizing authentication and session management. Most notably, the latest release fixes persistent Microsoft Entra sign-in popups for organization accounts and ensures screen readers properly announce session status changes. Additionally, two critical bugs were addressed: the `/usage` model rows now correctly wrap at terminal width, and interrupted or failed AI attempts are now labeled as "incomplete" to preserve context.

### Releases
*   **v1.0.110-3:** Contains fixes for Microsoft Entra sign-in popups, screen reader session announcements, and `/usage` model row wrapping.
*   **v1.0.110-2:** Fixes the labeling of partial/failed AI responses as "incomplete" and improves the error message when starting `copilot` from a deleted directory.

### Hot Issues (Top 10 by Engagement)
1.  **[#5431](https://github.com/github/copilot-cli/issues/5431)** *(0 comments)*: Startup warnings persist even with isolated configuration on versions 1.0.109 and 1.0.110-3, specifically regarding `permissions.model` being ignored and hook reload failures.
2.  **[#5429](https://github.com/github/copilot-cli/issues/5429)** *(0 comments)*: API paths (e.g., `/chat-sessions`) at the start of prompts are incorrectly interpreted as slash commands, breaking common coding workflows.
3.  **[#5427](https://github.com/github/copilot-cli/issues/5427)** *(0 comments)*: Concise transcript mode drops reasoning rows, preventing users from expanding "Thinking..." logs even with `showReasoning` enabled.
4.  **[#5424](https://github.com/github/copilot-cli/issues/5424)** *(0 comments)*: The Linux ARM64 binary crashes with `ENOEXEC` on Linux 6.12 (aarch64, 4K pages), requiring execution via `ld.so`.
5.  **[#5426](https://github.com/github/copilot-cli/issues/5426)** *(0 comments)*: Concise transcript mode drops reasoning rows regardless of `showReasoning` or `ctrl+t` settings.
6.  **[#5423](https://github.com/github/copilot-cli/issues/5423)** *(0 comments)*: File links in Copilot CLI responses fail to open in VS Code when connected to the IDE, though web links work.
7.  **[#5421](https://github.com/github/copilot-cli/issues/5421)** *(0 comments)*: Windows sandbox mode blocks `dotnet build` of multi-project solutions, with MSBuild workers unable to connect.
8.  **[#5430](https://github.com/github/copilot-cli/issues/5430)** *(0 comments)*: Feature request to wake Autopilot sessions when a detached shell completes after `task_complete`.
9.  **[#5053](https://github.com/github/copilot-cli/issues/5053)** *(4 comments)*: A regression in 1.0.89 causes ACP sessions to stop indexing conversation history and usage data into `session-store.db`.
10. **[#5335](https://github.com/github/copilot-cli/issues/5335)** *(3 comments)*: Repeated HTTP 422 flags block legitimate local flaky-test debugging, causing the CLI to reject investigation requests.

### Key PR Progress
*   *No new Pull Requests were merged in the last 24 hours.*

### Feature Request Trends
The issue queue reveals a strong demand for **session persistence and portability**. Users are frustrated that sessions cannot be easily attached to Projects after they start (`#4922`), and that long-running agent sessions exhaust event storage, making handoffs unreliable (`#4467`). There is also a recurring need for **configuration ergonomics**, specifically a request for a `/config` interactive editor to manage the myriad of writable settings currently scattered across slash commands (`#3352`). Additionally, users want greater control over the toolset, requesting the ability to disable built-in slash commands to avoid conflicts with custom skills (`#5375`).

### Developer Pain Points
*   **Authentication Friction:** Windows users face hard crashes (`0xc0000005`) during the first Entra account-broker sign-in for MCP servers (`#5088`), and non-interactive sessions suffer from tight-loop `gh auth token` retries with no backoff (`#5256`).
*   **Clipboard & Rendering Bugs:** Copying output fails in VSCode Server browser environments (`#3996`), and the concise transcript mode silently drops reasoning rows, breaking the debugging flow (`#5426`, `#5427`).
*   **Platform Inconsistencies:** WSL2 (ARM6) users encounter `clip.exe` quoting failures (`#3534`), while Linux ARM64 binaries fail to execute due to `ENOEXEC` errors related to kernel page sizes (`#5424`).
*   **MCP & Tooling Issues:** Google Workspace MCP OAuth fails due to trailing-slash issuer mismatches (`#4606`), and local Stdio MCP servers are silently dropped during session startup swaps (`#4920`).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

Here is the OpenCode community digest for 2026-11-12.

### Today's Highlights
The OpenCode project released a patch update for its process daemon (`process-daemon v0.5.2`) and saw continued activity on the codebase with several issues and pull requests updated today. Most notably, the issue regarding the background service resuming standalone sessions without permissions has been updated, highlighting ongoing stability concerns. Additionally, a new PR focuses on preventing empty MCP form elicitation from being accepted silently, addressing a critical user experience bug.

### Releases
*   **process-daemon v0.5.2**: A patch release updating `opencode-pty` to protocol 8, published to npm as `@opencode/pty@0.5.2`. This update ensures the terminal/PTY handling is current with the latest protocol standards.

### Hot Issues (Top 10)
1.  **[#2242] Sandboxing the Agent** (84 👍): The community's most discussed topic. Users are requesting sandboxing capabilities to restrict terminal commands to the current directory, similar to `seatbelt` on macOS used by other CLIs. This reflects a high demand for security and isolation features.
2.  **[#55076] Runaway Standalone Sessions** (3 👍): A severity:high bug where the background service resumes `opencode run --standalone` sessions after the process is killed, running without config limits and incurring significant costs (e.g., $24 in steps).
3.  **[#63463] MCP Form Elicitation Bug** (1 👍): A critical bug where an MCP server sending a form with no fields is accepted without user consent, potentially bypassing user intent.
4.  **[#63468] Browser Tools Broken on Windows** (2 👍): Windows users report that `browser.*` tools return empty results, making the in-app browser unusable on that platform.
5.  **[#63462] Webfetch URL Loss** (2 👍): V2 Webfetch converts HTML links to Markdown without resolving URLs against the fetched page, breaking relative links like `../api` or `#install`.
6.  **[#63435] Agent Catalog Stuck** (2 👍): The TUI agent catalog gets stuck showing only built-in agents (`build`, `plan`) and never recovers plugin-provided agents, even when the server returns the full list.
7.  **[#63461] Skills Catalog Path Issue** (2 👍): Remote skills catalogs fail to load when the configured URL has query parameters or fragments without a trailing slash, redirecting to a broken `/index.json` path.
8.  **[#63457] GitHub OAuth Expiring Tokens** (1 👍): A feature request to support expiring GitHub OAuth tokens to mitigate supply chain compromises.
9.  **[#63464] Remote Access Keep Awake** (1 👍): A feature request to keep the machine awake during remote access without keeping the screen on.
10. **[#63417] Reconnect Splash Spam** (8 👍): The Home Assistant add-on client shows a full-screen reconnect splash every <=10 seconds, making sessions unusable.

### Key PR Progress (Top 10)
1.  **[#63469] Fix Empty MCP Elicitations**: A bug fix ensuring the user is asked before accepting an MCP form elicitation with no fields, preventing silent acceptance.
2.  **[#63458] CI Job Isolation**: Refactoring the CI pipeline to isolate v1 deploy and release jobs, splitting signing jobs for better maintainability.
3.  **[#63456] GitHub OAuth Token Refresh**: New feature PR implementing GitHub Copilot OAuth token refresh using the existing credential service.
4.  **[#58396] Snapshot Capture Non-Regular Files**: Fix preventing snapshot capture from aborting when the work tree contains non-regular files (e.g., symlinks, directories).
5.  **[#63454] Incremental Ancestor Dir Building**: A performance refactor building ancestor directory strings incrementally during scan instead of rebuilding them per file.
6.  **[#63452] RegExp Caching**: Refactoring to cache compiled wildcard Regular Expressions per pattern, avoiding recompilation on every call.
7.  **[#63451] Background Shortcut E2E Tests**: Updating e2e tests for always-background subagents to address timeouts in the Windows app environment.
8.  **[#62511] Desktop Review Branch Bases**: Fix using server-resolved local or stacked bases for Branch Changes in the desktop review flow.
9.  **[#63466] Event Sequence Seeding**: Fix seeding the missing event sequence from stored events and session messages to ensure durability.
10. **[#54583] Persistent PTY Advertisement**: Fix ensuring persistent PTY support is only advertised when the daemon is runnable, preventing false positives in the Nix flake build.

### Feature Request Trends
The issue stream reveals a strong focus on **platform parity and security**.
*   **Windows Support**: A significant number of recent bugs and feature requests are Windows-specific (`#63468`, `#63435`, `#62238`), indicating the desktop experience on Windows is a current pain point.
*   **MCP & Skills Management**: There is active demand for better control over Model Context Protocols and skills, including the ability to disable skills and handle empty form elicitation (`#63463`, `#63455`).
*   **OAuth & Authentication**: Concerns about token expiration and supply chain security are driving requests for OAuth token refresh mechanisms (`#63457`).
*   **Usability Polish**: Minor but impactful UX requests are frequent, including Chinese language localization improvements (`#63460`, `#63467`), per-tab prompt history (`#63470`), and notification sound customization (`#63264`).

### Developer Pain Points
*   **Windows Stability**: The desktop application on Windows is experiencing frequent crashes and feature failures (browser tools, agent catalog), suggesting the V2 port needs significant Windows-specific debugging.
*   **Session Persistence & State**: Users are frustrated by the background service resuming standalone sessions without proper permissions or limits (`#55076`), as well as the TUI getting stuck with a stale agent catalog (`#63435`).
*   **Silent Failures**: Several issues highlight "silent" bugs where actions (like checking for updates or accepting MCP forms) happen without user feedback or visible errors, leading to confusion and data loss.
*   **Configuration Reloads**: Hot config reloads are causing silent reversion to built-in agents (`#62002`), breaking custom workflows for power users.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest - 2026-11-12

## Today's Highlights
The Pi project continues its rapid iteration cycle with significant activity across durability, coding-agent stability, and tooling improvements. Two critical fixes address session management: one resolving the "pi -p never exits on Windows" issue when extensions call `pi.exec()`, and another ensuring shell commands properly report their working directory context. Meanwhile, the durable object model receives attention with a permanent delete conversation API requested, though compaction edge cases still challenge users with large context windows.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues (Top 10)

1.  **#12068: pi -p never exits on Windows** (5 comments) – A critical regression in 1.5.1/1.5.2 where the process hangs after tool calls when an extension invokes `pi.exec()`. Community members are seeking a patch for Windows users relying on extension workflows.
2.  **#10024: Mid-run tool set change re-bills conversation** (6 comments) – Changing tools mid-conversation moves the system prompt head, causing re-billing. This impacts long-running agents and workflows requiring dynamic tool switching.
3.  **#11026: Permanently delete conversation from storage** (7 comments, 6 👍) – High demand for a `harness.deleteConversation(id)` API to cleanly remove conversations, including inbox items and scheduler state, rather than relying on compaction.
4.  **#10386: Host coding-agent extensions in Durable** (7 comments) – Request to let `pi-durable` host coding-agent extensions, either via an AgentSession-backed runtime or hook parity for `ExtensionAPI` events.
5.  **#10162: Too many input images stop the agent task** (9 comments) – Users report that overwhelming the agent with images causes tasks to halt, raising questions about auto-compaction and context management during extended sits.
6.  **#11956: Crash on cancelling a read during file open** (6 comments) – An uncaught `AbortError` occurs when a read tool is cancelled while opening/stat-ing a local file, potentially crashing Pi entirely.
7.  **#10089: Kitty Clipboard Protocol (OSC 5522) support** (2 comments) – Feature request to implement the Kitty clipboard protocol as a fallback for terminal environments (SSH, containers) where native clipboard access fails.
8.  **#12073: Atomic completion enqueue-and-wake for extensions** (2 comments) – A proposed API for extensions to atomically enqueue completions and wake the session, improving real-time responsiveness.
9.  **#11699: Remove Tool Truncation in codemode** (2 comments) – A request to disable built-in tool truncation in codemode, preserving full tool output for chaining and preprocessing before hitting the agent.
10. **#12075: ModelRuntime.refresh() cancels in-flight refreshes** (2 comments) – A full refresh (without provider scope) aborts ongoing provider discoveries, causing startup failures in print mode when extensions trigger refreshes.

## Key PR Progress (Top 10)

1.  **#12078: State shell commands in session working directory** – Fix ensures `bash`/`powershell` tool descriptions accurately reflect that commands run in the session CWD, resolving model confusion.
2.  **#12058: Keep bash output when tail is one line over-long** – Fixes a bug where a short first line followed by a long line results in empty tool output and broken footers.
3.  **#12054: Keep restored MCP tools when extension hides own tool** – Prevents MCP tools loaded via `tool_search` from being incorrectly dropped during session resume or `/reload` when an extension hides its own tool.
4.  **#12052: Convert OSC 8 hyperlinks in HTML export** – Fixes HTML export tool output to properly render hyperlinks (OSC 8 sequences) that were previously dropped or rendered as raw text.
5.  **#12044: Ignore leading ./ in find patterns** – Fixes the `find` tool returning "No files found" for patterns starting with `./` (e.g., `./src/*.ts`), aligning behavior with patterns without the prefix.
6.  **#12041: Mark wait promises handled before caller** – Ensures `Submission.wait()` and `waitForTask()` promises are resolved/published before reaching the caller, preventing race conditions in task cancellation.
7.  **#12045: Keep hard breaks after inline Markdown images** – Fix preserves hard breaks (`  \n`) after inline Markdown images in TUI rendering, preventing layout collapse.
8.  **#12046: Standalone binary resolving extension dependencies** – Fixes the standalone binary (built with `bun build --compile`) to read `package.json` at runtime, enabling extension dependencies to resolve correctly.
9.  **#12042: Backup coordinator** – Matures the P2 backup system to replicate every Chord store, now including support for backing up to Radius storage for session history.
10. **#11990: Add a Radius session sync adapter prototype** – Prototype implementation adding a backend boundary for session backup/restore in P2, decoupling coordinator logic from Radius's HTTP API.

## Feature Request Trends
The issue stream reveals a strong focus on **session persistence and state management**. The most requested direction is the ability to **permanently delete and manage conversation histories** within the durable storage layer (`#11026`, `#10386`). Users are also actively seeking **better control over update notifications** (`#3005`) and **context window safety** during compaction (`#11281`). On the tooling side, there is consistent demand for **improved image handling** (Kitty protocol, image truncation in codemode `#11699`) and **more predictable working directory behavior** for shell commands.

## Developer Pain Points
*   **Windows Session Exit**: The `pi -p` process failing to exit after tool calls when extensions use `pi.exec()` is a high-friction bug for Windows power users.
*   **Mid-Run Tool Switching**: Changing the tool set halfway through a run disrupts the system prompt and triggers re-billing, breaking long-running agent loops.
*   **Context Window Edge Cases**: Compaction logic fails to recover when summary requests exceed the summarizer's own context window, leading to silent loops near token limits.
*   **Extension State Management**: Issues surrounding MCP tool persistence, extension hiding, and wait promise handling indicate a need for more robust session boundaries and promise lifecycle management within the coding-agent.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-11-12.

### **Today's Highlights**
Two critical CI stability issues dominate today’s activity. A `pack has 1 unresolved delta` error in the integration pipeline and a hardcoded `semantic_vad` turn-detection incompatibility with new `qwen-audio` models are blocking workflows. Meanwhile, significant progress has been made on lint and test gate hardening, suggesting a push toward a more robust release cycle.

### **Releases**
No new versions were published in the last 24 hours.

### **Hot Issues**
*   **[#17000] Live Voice fails with qwen-audio realtime models** (4 comments): The realtime client hardcodes `turn_detection.type = "semantic_vad"`, which the latest `qwen-audio-3.0-realtime-plus` models reject. This blocks Live Voice functionality and requires a configurable override.
*   **[#16908] Qwen Code stuck and interrupted** (4 comments): A recurring issue where the CLI frequently loses connection to the model during execution, causing intermittent session failures that require investigation into core networking or session management.
*   **[#16951] CI: Integration Tests fail at Checkout** (11 comments): A `fatal: pack has 1 unresolved delta` error stalls the CI pipeline. While marked as a development/CI-CD issue, it reflects underlying repository stability concerns.
*   **[#16958] Three verified CI latent defects** (10 comments): Surface gaps in heap-cap values, `|| true` pin gaps, and ESLint profile coverage, indicating a maturation of the CI gate system.
*   **[#17001] "Always allow" rule covers whole root command with redirection** (3 comments): A security boundary issue where a redirection between command words allows the "always allow" rule to apply to the entire command, posing a potential sandbox escape risk.
*   **[#17005] Web Shell session degradation after gateway cut** (2 comments): A ~4-minute SSE cut followed by a mid-session restart causes progressive reconnect degradation, eventually forcing a full session reload.
*   **[#16991] Pin the Report test growth gate** (2 comments): A request to add a whole-literal pin to the `if:` gate in `lint_and_static` to prevent test growth from silently passing.
*   **[#16997] Feishu custom-bot webhook delivery** (2 comments): A feature request to add Feishu webhook delivery to the Channel system, enabling automated notifications from Web Shell sessions.
*   **[#17003] Add configurable turn_detection for realtime session.update** (0 comments): A companion PR to #17000 that exposes the `turnDetection` setting via `experimental.liveVoice.turnDetection`.
*   **[#17009] Pin the default executor's scheduler and runtimeView passthrough** (0 comments): Closes M22 coverage debt by testing the passthrough of scheduler options and runtimeView content in the default tool executor.

### **Key PR Progress**
*   **[#17004] ci: run ESLint on the github_ci_only profile** (Closed): Extends ESLint checks to lightweight profiles, ensuring that changes to helper scripts are vetted by the lint gate.
*   **[#17008] docs(ci): correct the typecheck heap cap's rationale** (Closed): Updates documentation to accurately reflect the measured heap cap values for integration typecheck runs.
*   **[#16993] test(ci): pin the test-growth gate** (Closed): Replaces substring checks with whole-literal assertions for the test-growth report, improving gate reliability.
*   **[#17007] test(ci): pin the lint freshness gate's exit status** (Closed): Asserts that lint configuration failures actually reach the job exit status, preventing silent failures.
*   **[#16987] ci: refuse an unrunnable host before unit suites start** (Open): Introduces a host admission gate checking CPU load average per CPU before unit tests begin, complementing existing disk floor checks.
*   **[#16986] fix(web-shell): show timeline on narrower screens** (Open): Responsiveness fix for the Web Shell transcript and composer, making UI elements resize based on container width.
*   **[#16972] fix(mcp): restore session catalogs on explicit rediscovery** (Open): Fixes a bug where rediscovery cleared session catalogs, preventing the restoration of MCP tools, prompts, and resources.
*   **[#16946] ci: narrow lint gate freshness to the lint slice** (Open): Consolidates four follow-up PRs into a single PR to streamline the lint-gate workflow.
*   **[#17006] refactor(managed-agent): settle Session rename synchronously** (Open): Replaces a cross-store Session rename saga with a synchronous SQL settlement to prevent race conditions during manual renames.

### **Feature Request Trends**
The community is actively requesting **modularity and configurability** in the live voice and session domains. The most prominent trend is the demand for **configurable turn-detection** (`#17000`, `#17003`), moving away from hardcoded `semantic_vad` settings to support diverse realtime models. Additionally, there is significant interest in **expanding channel integration** (#16997 for Feishu) and **improving Web Shell resilience** (#17005 for SSE cut recovery). Security and sandbox boundaries are also a focus, as seen in the "always allow" rule refinements (#17001).

### **Developer Pain Points**
*   **CI Instability:** Recurring errors like the `pack has 1 unresolved delta` (#16951) and latent defects in heap caps and pin gaps (#16958) indicate a fragile CI pipeline that requires frequent maintenance and pinning of growth gates.
*   **Hardcoded Model Limitations:** The `semantic_vad` issue (#17000) highlights a pain point where developers cannot use the latest audio models without code changes or workarounds, blocking "Live Voice" features.
*   **Session Management Fragility:** Issues regarding intermittent connection loss (#16908) and Web Shell degradation after network cuts (#17005) suggest that session handoffs and network resilience are areas needing architectural improvement.
*   **Security Boundary Confusion:** The "always allow" rule edge case (#17001) reveals confusion regarding how command redirections are parsed and allow-listed, posing a risk for users defining custom command permissions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

**DeepSeek TUI Community Digest**
**Date:** 2026-11-12
**Source:** github.com/Hmbown/DeepSeek-TUI

### 1. Today's Highlights
November 12th was a surge day for the Codewhale/DeepSeek-TUI project, with 8 new Issues and 5 new PRs created, primarily focusing on stability fixes for TUI display, workflow authoring, and internationalization. The most significant activity surrounds the "non-ASCII file name" crisis, where several Issues and corresponding PRs address crashes, encoding mismatches, and i18n misalignment in the TUI interface.

### 2. Releases
No new releases were published in the last 24 hours.

### 3. Hot Issues (Noteworthy 10)
*   **[#7308] Workflow authoring: words in strings reject a workflow** (`codewhale-hq/Codewhale#7308`): Critically blocks workflow creation. Chinese characters inside strings cause the entire workflow to be rejected. This is a blocker for non-English users authoring tasks.
*   **[#7307] Skill install and import reject or mangle ordinary package layouts** (`codewhale-hq/Codewhale#7307`): Installs silently mangle package structures. The archive prefix is guessed from the first tar entry, failing for standard layouts.
*   **[#7309] Git status panics or adds phantom rows on a worktree-side rename (non-ASCII original path)** (`codewhale-hq/Codewhale#7309`): Panics occur when viewing git status on repos with non-ASCII renamed files, a frequent scenario in international projects.
*   **[#7306] MCP and LSP clients take a server's own requests for replies** (`codewhale-hq/Codewhale#7306`): A JSON-RPC protocol bug where clients misinterpret server-initiated requests as replies, breaking downstream tooling integration.
*   **[#7305] Deny rules miss hash -p / zsh =cmd rebinding, aliases run through eval** (`codewhale-hq/Codewhale#7305`): Security bypass issues where sandbox deny rules fail to catch commands expanded via `shell_expand`, posing a risk to isolation features.
*   **[#7304] zh-Hans TUI: /status labels misaligned, and English left in tool cells** (`codewhale-hq/Codewhale#7304`): Localization bug where mixing ASCII and full-width punctuation in Chinese locales creates a messy, misaligned UI.
*   **[#7303] Non-ASCII file names: octal-escaped paths in /diff, @git and @diff** (`codewhale-hq/Codewhale#7303`): Paths with CJK characters or emojis are incorrectly quoted/octal-escaped when displayed in diff tools, making them unreadable.
*   **[#7301] Secret redaction misses provider keys written next to Chinese text** (`codewhale-hq/Codewhale#7301`): Security oversight; the redaction logic only splits on ASCII spaces, leaking API keys adjacent to CJK characters.
*   **[#7300] ANSI stripping leaves the final byte of ESC ( B and swallows text after a stray CSI** (`codewhale-hq/Codewhale#7300`): A parsing bug in the ANSI stripper corrupts terminal output, leaving garbled characters or truncating text.
*   **[#7299] l10n(zh-Hans): ASCII punctuation in /router, label and usage strings** (`codewhale-hq/Codewhale#7299`): Foundational i18n issue; the Chinese pack uses full-width punctuation, but a subset of router/setup strings use ASCII, creating visual inconsistency.

### 4. Key PR Progress (Important 10)
*   **[#7314] fix(tui): zh-Hans full-width punctuation and /status alignment under CJK labels** (`codewhale-hq/Codewhale#7314`): **Resolves #7304.** Fixes the alignment and punctuation mixing issue in the Chinese localization.
*   **[#7313] fix(sanitize): strip whole escape sequences and keep the text after them** (`codewhale-hq/Codewhale#7313`): **Resolves #7300.** Correctly strips ANSI sequences, preventing the truncation bugs described in the issue.
*   **[#7312] fix(workflow): ignore construct words in strings, unquote fleet TOML strings, hide slot_dropped** (`codewhale-hq/Codewhale#7312`): **Resolves #7308.** Fixes the workflow authoring rejection bug where words in strings were incorrectly flagged.
*   **[#7311] fix(skills): detect the archive prefix from every entry and import hidden files** (`codewhale-hq/Codewhale#7311`): **Resolves #7307.** Fixes skill import to correctly handle standard package layouts and hidden files.
*   **[#7310] fix(app-server): read the original path of worktree-side renames in git status** (`codewhale-hq/Codewhale#7310`): **Resolves #7309.** Fixes the git status panic for non-ASCII renames.
*   **[#7296] fix(repl): truncate stdout by bytes, not chars** (`codewhale-hq/Codewhale#7296`): **Resolves output truncation bugs.** Ensures multibyte CJK text is correctly truncated by byte limits without corrupting character boundaries.
*   **[#7295] fix(util): drop the trailing zero from context window labels** (`codewhale-hq/Codewhale#7295`): **Resolves labeling formatting.** Fixes the display of context window sizes (e.g., displaying `1.5M` instead of `1.50M`).
*   **[#7294] feat(workflow): verify sealed candidates with an isolated host oracle** (`codewhale-hq/Codewhale#7294`): Implements the opt-in evolutionary coding search framework requested in #7250, allowing verified candidate evaluation.
*   **[#7293] feat(engine): add Qwen Code to the external agent registry** (`codewhale-hq/Codewhale#7293`): Adds support for Qwen Code as an external agent, expanding the LLM tooling ecosystem.
*   **[#7286] chore(catalog): refresh the Models.dev offline seed** (`codewhale-hq/Codewhale#7286`): Standard maintenance update refreshing the model catalog data source.

### 5. Feature Request Trends
Analysis of the recent issue surge reveals a strong focus on **internationalization and robustness**.
*   **Non-ASCII/File Encoding:** A significant cluster of issues (#7303, #7309, #7305, #7301) centers on the framework's inability to handle CJK characters, non-ASCII paths, and mixed-language text. This suggests a need for better UTF-8 support throughout the CLI, TUI, and sandbox environments.
*   **Workflow Intelligence:** There is active development around "verified candidate evaluation" (#7250, #7294), moving from generation to evidence-gated search.
*   **Localization Polish:** The volume of issues regarding zh-Hans punctuation (#7299, #7304, #7314) indicates the project is maturing its multi-language support, transitioning from functional to polished localization.

### 6. Developer Pain Points
*   **Sandbox Escape & Security:** Recurring issues with `shell_expand` and deny rules (#7305) highlight that the sandboxing mechanisms are fragile when handling shell aliases, eval, and complex command expansion. Developers building on this tool face unpredictable security boundaries.
*   **Internationalization Bugs:** The "mixed punctuation" and "non-ASCII path" bugs are high-frequency. Any repository using non-English filenames or CJK characters triggers crashes, misaligned UIs, or broken tool outputs, making the tool feel "broken" for a large segment of potential users.
*   **Workflow Fragility:** The `reject_unsupported_constructs` logic (#7308) is overly aggressive, rejecting valid workflows simply because they contain non-ASCII characters in string literals, hindering authoring productivity.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*