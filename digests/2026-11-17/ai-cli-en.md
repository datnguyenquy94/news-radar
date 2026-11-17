# AI CLI Tools Community Digest 2026-11-17

> Generated: 2026-11-17 07:36 UTC | Tools covered: 10

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

# Cross-Tool AI CLI Ecosystem Analysis
## 2026-11-17 Community Digest

### 1. Ecosystem Overview
The AI CLI developer tools ecosystem on 2026-11-17 exhibits a maturation phase characterized by shifting focus from raw capability expansion to reliability, cost management, and platform parity. While all major tools released updates in the past 24 hours, the nature of activity varies significantly: Claude Code and OpenCode dominate issue volumes with chronic stability problems, OpenAI Codex and Pi prioritize infrastructure fixes, and Qwen Code leads in architectural unification. A consistent thread across the landscape is the community's frustration with "invisible" state—orphaned worktrees, un-tracked quotas, and session persistence failures—that undermines long-running AI-assisted development workflows.

### 2. Activity Comparison

| Tool | Active Issues (Today) | Merged PRs (Today) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (Top Hot Issues) | 1 (Policy fix) | v2.1.326 released |
| **OpenAI Codex** | 10 (Top Hot Issues) | 10 (Statusline/Quota fixes) | Alpha variants only (v0.171.0) |
| **Gemini CLI** | 10 (Top Hot Issues) | 10 (Stability/security fixes) | No new release |
| **GitHub Copilot CLI** | 10 (Top Hot Issues) | 0 | v1.0.113-1 released |
| **OpenCode** | 10 (Top Hot Issues) | 20+ (Upgrade/MCP fixes) | v1.19.6 released |
| **Pi** | 10 (Top Hot Issues) | 10 (Session/MCP fixes) | No new release |
| **Qwen Code** | 7 (Top Issues) | 10 (Adapter/Contract fixes) | Nightly released |
| **DeepSeek TUI** | 10 (Top Issues) | 10 (Freeze/Undo fixes) | v0.10.3 development |
| **Kimi Code** | 0 | 0 | No activity |
| **Grok Build** | 0 | 0 | No activity |

### 3. Shared Feature Directions
*   **Session & State Persistence** (Claude Code, Pi, Qwen Code, OpenCode): Dominant concern across the ecosystem. Users demand automatic garbage collection for stale worktrees (#26725 Claude, #12242 Pi), session compaction/reset mechanisms (#110597 Claude), and visible quota remaining indicators (#64334 OpenCode, #5220 Copilot CLI).
*   **TUI Rendering & Polish** (DeepSeek TUI, OpenCode, Claude Code): Recurring bugs involving CR character mishandling (#110565 Claude), panel collapse, and freeze-on-turn-transition (#7357 DeepSeek). A common need for robust terminal rendering independent of model output format.
*   **Cross-Platform & Sandbox Inconsistencies** (Copilot CLI, Gemini CLI, OpenAI Codex): Windows sandbox hangs (#49718 Codex, #5478 Copilot CLI), macOS update breakage (#4998 Copilot CLI), and Linux TUI shortcut changes (#48139 Codex) indicate the CLI layer is a primary friction point for diverse development environments.
*   **MCP & Plugin Management** (Gemini CLI, Qwen Code, OpenCode): Issues around tool-count limits (#24246 Gemini), inability to delete custom plugins (#54626 Codex), and skill catalog discovery (#17526 Qwen Code) reflect the growing complexity of Model Context Protocol integrations.

### 4. Differentiation Analysis
*   **Feature Focus**: Claude Code and OpenCode lead in UI/UX refinements and free-tier quota management, while OpenAI Codex and Qwen Code focus on backend architecture (unified chat contracts, AST-aware tooling). Pi and DeepSeek TUI concentrate on low-level transport stability and session lifecycle.
*   **Target Users**: Claude Code and OpenAI Codex cater to high-volume professional developers dealing with parallel execution and agent teams. OpenCode and Qwen Code attract users seeking granular control and enterprise integration (DingTalk, GitHub adapters). Copilot CLI and GitHub Copilot CLI are positioned for organizational/administrative control within the GitHub ecosystem.
*   **Technical Approach**: OpenAI Codex and Qwen Code exhibit rapid, unstable pre-release pipelines (alpha variants, nightly builds) driving fast iteration but higher risk. Claude Code and OpenCode prioritize stable releases with incremental feature drops. Pi and DeepSeek TUI emphasize conservative bugfix stabilization of established v1/v0.10 releases.

### 5. Community Momentum & Maturity
*   **Most Active**: **Claude Code** generates the highest issue volume (10 top issues with >100+ comments on the primary bug thread), indicating a large, active user base struggling with chronic quality drops. **OpenCode** follows with a massive free-tier issue thread (#59387, 386 comments) highlighting a critical UX breakdown in the pricing model.
*   **Rapidly Iterating**: **Qwen Code** and **DeepSeek TUI** show the most active development cycles, with 10+ PRs merged daily focusing on specific bugfixes and dependency updates, suggesting agile maintenance cycles.
*   **Maturing/Stabilizing**: **OpenAI Codex** and **Gemini CLI** show signs of maturity, with activity shifting from new features to infrastructure stabilization, quota management, and security fixes. **Kimi Code** and **Grok Build** show negligible recent activity, potentially indicating stagnation or integration into other pipelines.

### 6. Trend Signals
*   **Cost-Aware Development**: The recurrence of "overnight allowance consumption" (#110418 Claude) and "rate-limit lockout" (#48369 Codex) signals that AI usage costs are becoming a primary operational concern for developers, driving demand for cost-aware execution and throttling features.
*   **Stability Over Features**: Across nearly all tools, the most discussed issues are bugs, crashes, and stability regressions rather than new capabilities. The industry is shifting from "AI acceleration" to "AI reliability."
*   **Platform Parity Crisis**: The high volume of OS-specific bugs (macOS, Windows, Linux, Wayland) suggests the CLI interface is the weakest link in the AI toolchain, requiring greater investment in cross-platform compatibility layers before model capabilities can be fully utilized.
*   **The "Invisible State" Problem**: A unifying theme is the mishandling of persistent state—orphaned directories, un-emitted session events, un-tracked quotas, and un-cleaned worktrees. Developers are increasingly reliant on AI for long-running tasks, making robust state management not just a quality issue, but a prerequisite for production AI-assisted workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report

*Generated November 17, 2026 | Data sourced from anthropics/skills repository*

## 1. Top Skills Ranking

The following Skills are generating the most community discussion, sorted by PR comment activity (top 8 of 50 total PRs analyzed):

### #1980: webapp-testing: avoid shell=True in with_server.py
- **Author**: Pcmhacker-piro | **Created**: 2026-10-06 | **Status**: Open
- **Functionality**: Fixes a command injection vulnerability (CWE-78) in webapp testing by replacing `subprocess.Popen(..., shell=True)` with safer alternatives in `with_server.py`.
- **Discussion Highlights**: Community consensus on security hardening; no merged alternative yet.
- **GitHub**: [anthropics/skills PR #1980](https://github.com/anthropics/skills/pull/1980)

### #1792: fix(docx): report LibreOffice timeout as an error and verify the output
- **Author**: TINGyu123644 | **Created**: 2026-09-19 | **Status**: Open
- **Functionality**: Ensures LibreOffice timeouts are properly reported as errors in docx processing, with output verification to confirm successful conversion.
- **Discussion Highlights**: Reliability improvements for document automation workflows.
- **GitHub**: [anthropics/skills PR #1792](https://github.com/anthropics/skills/pull/1792)

### #1771: feat(skills): add proofcore-contract-auditor for smart contract notarization
- **Author**: ProofCore-Protocol | **Created**: 2026-09-15 | **Status**: Open
- **Functionality**: Adds automated static analysis for Solidity/Rust smart contracts with cryptographic audit proof anchoring on the TON Blockchain.
- **Discussion Highlights**: First Web3-focused skill in the collection; expanding Claude Code's capabilities into blockchain development.
- **GitHub**: [anthropics/skills PR #1771](https://github.com/anthropics/skills/pull/1771)

### #1742: fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers
- **Author**: Kuldeeep18 | **Created**: 2026-09-08 | **Status**: Open
- **Functionality**: Updates MCP builder to support `mcp>=2.0.0` where `streamablehttp_client` was renamed to `streamable_http_client`, with proper custom header configuration.
- **Discussion Highlights**: Dependency modernization critical for MCP v2 compatibility.
- **GitHub**: [anthropics/skills PR #1742](https://github.com/anthropics/skills/pull/1742)

### #1997: fix(skill-creator): parse YAML frontmatter scalars correctly
- **Author**: BichengWang | **Created**: 2026-10-10 | **Status**: Open
- **Functionality**: Fixes YAML parsing in skill-creator to correctly handle frontmatter scalars, ensuring metadata consistency between `SKILL.md` and evaluation commands.
- **Discussion Highlights**: Critical infrastructure fix for skill creation pipeline reliability.
- **GitHub**: [anthropics/skills PR #1997](https://github.com/anthropics/skills/pull/1997)

### #1734: Detect orphaned docx comments
- **Author**: rohitjain25 | **Created**: 2026-09-06 | **Status**: Open
- **Functionality**: Skill to identify and flag orphaned comments in DOCX files (comments without corresponding resolutions).
- **Discussion Highlights**: Document cleanup utility for collaborative workflows.
- **GitHub**: [anthropics/skills PR #1734](https://github.com/anthropics/skills/pull/1734)

### #1298: fix(skill-creator): isolate trigger evals and handle Windows and runtime failures
- **Author**: MartinCajiao | **Created**: 2026-06-10 | **Status**: Open
- **Functionality**: Addresses trigger evaluation false positives, Windows subprocess pipe failures (`select()`), and runtime errors stopping skill scans.
- **Discussion Highlights**: Long-standing reliability issue in skill evaluation; fixes false trigger rates.
- **GitHub**: [anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)

### #525: Add pyxel skill for retro game development
- **Author**: kitao | **Created**: 2026-03-05 | **Status**: Open
- **Functionality**: Guides implementation, headless input-driven runs, direct frame inspection, and task-specific state checks for Pyxel retro games.
- **Discussion Highlights**: Niche but active community interest in retro game development tools.
- **GitHub**: [anthropics/skills PR #525](https://github.com/anthropics/skills/pull/525)

## 2. Community Demand Trends

Analysis of 13 active Issues reveals the following emerging Skill directions:

- **Workflow Automation & Integration**: Issue #1980 (shell=True security) and #1742 (MCP v2 compatibility) indicate strong demand for robust, secure automation pipelines that integrate with external tools and services.

- **Document & Format Mastery**: Multiple PRs (#1792, #1734) and Issue #189 (duplicate skills) highlight community focus on reliable document format handling (DOCX, PDF, PPTX) and deduplication—critical for enterprise Claude Code adoption.

- **Web & Testing Capabilities**: The webapp-testing family (#1980, #1976, #1975) suggests growing need for Claude Code to interact with and validate web applications, particularly around form handling and element discovery.

- **Blockchain & Specialized Domains**: The proofcore-contract-auditor skill (#1771) represents expanding interest into specialized technical domains beyond traditional software development.

- **Skill Creator Reliability**: Issues #1352 and #1997 point to community investment in making skill creation and evaluation more reliable, particularly for parallel workflows and YAML parsing.

## 3. High-Potential Pending Skills

These active-comment PRs are closest to merging and may land soon:

| PR | Author | Created | Key Focus |
|----|--------|---------|-----------|
| **[#1980](https://github.com/anthropics/skills/pull/1980)** | Pcmhacker-piro | 2026-10-06 | webapp-testing security fix |
| **[#1792](https://github.com/anthropics/skills/pull/1792)** | TINGyu123644 | 2026-09-19 | docx LibreOffice timeout handling |
| **[#1771](https://github.com/anthropics/skills/pull/1771)** | ProofCore-Protocol | 2026-09-15 | smart contract auditor |
| **[#1742](https://github.com/anthropics/skills/pull/1742)** | Kuldeeep18 | 2026-09-08 | MCP v2 client compatibility |
| **[#1997](https://github.com/anthropics/skills/pull/1997)** | BichengWang | 2026-10-10 | skill-creator YAML parsing |

## 4. Skills Ecosystem Insight

**The community's most concentrated demand is for reliable, secure workflow automation and document format handling that integrates Claude Code with external tools and enterprise systems.** While new skill categories (e.g., blockchain, retro games) generate excitement, the highest activity centers on fixing infrastructure gaps—particularly command security, dependency compatibility, and document processing reliability—that enable Claude Code to function as a dependable automation platform in professional development environments.

---

### Claude Code Community Digest: 2026-11-17

**Today's Highlights**
A significant release (v2.1.326) landed today featuring a highly requested Code Mode toggle for agent teams and a startup validation guard for malformed tool configurations. However, the community is currently focused on a recurring authentication instability issue and critical worktree management bugs affecting parallel execution workflows.

**Releases**
*   **v2.1.326**: Key updates include the ability to enable Code Mode while agent teams are active and a startup warning for invalid `--allowedTools`, `--disallowedTools`, or `--tools` entries. A known issue persists where stale worktrees are never cleaned up, leaving orphaned directories under `~/.claude-worktrees/`.

**Hot Issues (Top 10)**

1.  **#69044** [bug, model] Recurring errors from daily use [139 comments]
    *   **Why it matters**: A structured, months-long feedback document from a daily user detailing systemic failures. It serves as a high-priority radar for the team to address chronic quality drops.
    *   **Link**: [anthropics/claude-code Issue #69044](https://github.com/anthropics/claude-code/issues/69044)

2.  **#26725** [bug] Stale worktrees never cleaned up [16 comments, 34 👍]
    *   **Why it matters**: Parallel task execution creates worktrees under `~/.claude-worktrees/`, but there is no garbage collection. This leads to disk bloat and session clutter over time.
    *   **Link**: [anthropics/claude-code Issue #26725](https://github.com/anthropics/claude-code/issues/26725)

3.  **#50884** [enhancement] Remove stale Remote Control environments [15 comments, 48 👍]
    *   **Why it matters**: Users want a manual way to purge "dead" Remote Control environments from the claude.ai/code environment list, preventing confusion and resource leaks.
    *   **Link**: [anthropics/claude-code Issue #50884](https://github.com/anthropics/claude-code/issues/50884)

4.  **#75900** [bug] Assistant text between tool calls lost [9 comments, 10 👍]
    *   **Why it matters**: Text emitted by the assistant between tool calls is not rendered, not saved to session files, and not visible in `ctrl-o`. This degrades the audit trail and debugging capability.
    *   **Link**: [anthropics/claude-code Issue #75900](https://github.com/anthropics/claude-code/issues/75900)

5.  **#83756** [bug] Large MCP ToolSearch batches break conversation cache [7 comments, 3 👍]
    *   **Why it matters**: Contradicts the documented "tool-search guarantee." Large batches invalidate the whole conversation cache, potentially causing the model to lose critical context.
    *   **Link**: [anthropics/claude-code Issue #83756](https://github.com/anthropics/claude-code/issues/83756)

6.  **#109516** [bug] Mid-session 403 Cloudflare auth error burns tokens [5 comments, 1 👍]
    *   **Why it matters**: A 403 "Attention Required" error from Cloudflare during a session causes token burn and forces re-authentication, disrupting long-running pipelines.
    *   **Link**: [anthropics/claude-code Issue #109516](https://github.com/anthropics/claude-code/issues/109516)

7.  **#110418** [bug/overnight usage] Parallel sessions consumed 67% weekly allowance [3 comments]
    *   **Why it matters**: A pipeline running concurrent builder/reviewer sessions overnight consumed a massive portion of the weekly allowance, suggesting a potential cost leak or runaway process.
    *   **Link**: [anthropics/claude-code Issue #110418](https://github.com/anthropics/claude-code/issues/110418)

8.  **#102766** [bug] MCP elicitation message truncated in TUI [3 comments, 2 👍]
    *   **Why it matters**: Model-elicitation messages are truncated to 3 lines with no expansion mechanism, forcing users to miss critical tool options or context.
    *   **Link**: [anthropics/claude-code Issue #102766](https://github.com/anthropics/claude-code/issues/102766)

9.  **#110565** [bug] Literal CR collapses question panel [2 comments]
    *   **Why it matters**: A literal Carriage Return (U+000D) in model-emitted question strings collapses the UI panel to just 2-3 characters per line, rendering the interface unusable on macOS.
    *   **Link**: [anthropics/claude-code Issue #110565](https://github.com/anthropics/claude-code/issues/110565)

10. **#10589** [bug] OSC 7501 covers long-running background servers [1 comment]
    *   **Why it matters**: Since v2.1.326, an OSC 7501 child record is sent for *every* background task, including long-running servers like `vite dev`, potentially flooding the terminal output.
    *   **Link**: [anthropics/claude-code Issue #110589](https://github.com/claude-code/issues/110589)

**Key PR Progress (Top 10)**

*   **#78049** [CLOSED] Fix mdm policy path for 32-bit PowerShell [0 comments]
    *   **Fix**: `Set-ClaudeCodePolicy.ps1` now correctly handles the destination path when run in a 32-bit PowerShell host (Intune default), preventing writes to `Program Files (x86)` when 64-bit is intended.

**Feature Request Trends**

Analysis of the issue queue reveals three dominant directions:
1.  **Session & State Persistence**: Users are frustrated by the lack of cleanup for stale worktrees (Issue #26725) and the inability to detach secondary working directories (Issue #101989). There is also a strong demand for `/clear` to compact and reset the current session rather than abandoning it (Issue #110597).
2.  **Remote Control & Environment Management**: A recurring theme is the need to manage "dead" Remote Control environments (#50884) and keep connections alive across idle auto-update relaunches (Issue #110598).
3.  **TUI & UI Polish**: Several bugs focus on the Text User Interface, specifically truncated elicitation messages (#102766) and carriage return crashes in the question panel (#110565), indicating a need for improved terminal rendering robustness.

**Developer Pain Points**

*   **Orphaned Resources**: The most persistent pain point is the lack of garbage collection. Stale git worktrees (#26725) and "dead" Remote Control environments (#50884) accumulate silently, consuming disk space and confusing the UI.
*   **Cost Leakage**: Users report overnight consumption of significant weekly allowances during parallel sessions (#110418), suggesting a need for better background task throttling or cost-aware execution.
*   **Authentication Instability**: Mid-session 403 Cloudflare errors (#109516) disrupt workflows and burn resources, representing a critical integration stability issue between the CLI and Cloudflare's security policies.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex Community Digest for 2026-11-17.

### **Today's Highlights**
A flurry of UI and infrastructure merges dominated today's activity, with 20 closed Pull Requests improving TUI stability, quota management, and SSH reliability. Simultaneously, the Windows sandbox and authentication pipelines remain the primary pain points, highlighted by issues regarding rate-limit lockouts and recursive update loops. The community also flagged a concerning slowdown in model performance following the October 28 update.

### **Releases**
No stable releases were published in the last 24 hours. The feed is currently dominated by alpha variants of version 0.171.0 (e.g., `rust-v0.171.0-alpha.11`, `rust-v0.171.0-alpha.10`), indicating an active but unstable pre-release pipeline.

### **Hot Issues** (Top 10 by Community Impact)

1.  **#57101: Windows Computer Use display bug** (44 comments) – The "capture access" and gold/yellow border persist on screen after a screenshot turn completes, obstructing the UI. This is the most commented issue of the day, indicating a persistent UI regression in the Windows app.
2.  **#48369: Rate-limit lockout** (20 comments) – Once OpenAI usage is exhausted, the Send button becomes permanently disabled globally, blocking all further interaction until the next billing cycle.
3.  **#54626: MCP Plugin deletion** (16 comments) – Users cannot delete Custom Model Context (MCP) plugins installed via a custom server address, suggesting a management gap in the skills framework.
4.  **#48139: CLI TUI shortcuts** (15 comments) – A Debian Linux user reports that copy/paste shortcuts in the TUI changed unexpectedly, breaking established muscle memory.
5.  **#49718: Windows splash screen hang** (12 comments) – The app gets stuck on the logo splash at startup, with the sandbox failing due to "only managed permission profiles can be enforced."
6.  **#57764: Performance regression** (5 comments) – Users report Codex became 3–4 times slower after the October 28 update, with tasks frequently getting stuck in thinking loops.
7.  **#60799: iOS Remote project list** (11 comments) – After a cold start, the project and task lists are empty, seemingly omitting the `experimentalApi` during initialization.
8.  **#61773: Thread wake-up API** (5 comments) – An enhancement request for an authenticated exact-thread wake-up API to support multi-agent relays like Synloq, allowing messages to reach idle threads.
9.  **#61957: Usage attribution** (2 comments) – Work usage exhausts immediately after a banked reset, with attribution missing or mismatched.
10. **#61983: Image moderation** (1 comment) – Unexplained moderation blocks with category "other" returned from image generation on November 17, 2026.

### **Key PR Progress** (Top 10 Merged/Updated)

1.  **#61986: Statusline provider preservation** – Ensures TUI statusline selections persist across thread startups, avoiding redundant global catalog lookups.
2.  **#61985: Status line refresh** – Refreshes provider state on config and connection changes so feature-gate updates take effect immediately.
3.  **#61981: MCP statusline polling** – Reads MCP statusline providers with fresh state and bounded reads to prevent stale footers when thread state changes.
4.  **#61979: MCP statusline in TUI footer** – Renders selected MCP statusline providers in the TUI footer when the extension is enabled.
5.  **#61978: Billing plan for TUI usage** – Fixes quota state carrying over from a previous provider, ensuring `/status` displays costs using the correct current billing model.
6.  **#61977: Quota scoping** – Keeps TUI quota state scoped to the active provider, preventing carryover of usage and banners when switching chats.
7.  **#61976: TUI mouse scroll speed** – Adds a config panel input for fullscreen transcript mouse-wheel speed with presets (0.5x to 3x).
8.  **#61975: SSH tunneling simplification** – Replaces the loopback listener with an SSH stdio helper and adds `--token-file` for one-use credentials.
9.  **#61974: Cloud environment picker** – Adds a `Ctrl+X E` picker to select saved environments or default project checkouts when starting new Cloud threads.
10. **#61958: Turn-scoped exhaustion** – Introduces `UsageAccountingDecision::ExhaustedForTurn` to allow hosts to fail the current response with `SessionBudgetExceeded` while keeping later turns eligible.

### **Feature Request Trends**
The most requested feature directions this cycle revolve around **TUI ergonomics and state management**. There is a strong demand for persistent composer state (undo/redo history scoping), improved environment management (saved environments for Cloud threads), and better quota visibility. Additionally, users are increasingly requesting **context-aware prompt suggestions** (#42587) to reduce repetitive follow-up interactions, and enhancements to the **Computer Use** plugin to stabilize window interactions and browser control persistence.

### **Developer Pain Points**
*   **Windows Sandbox & Auth Loop:** A recurring theme is the Windows MSIX app getting stuck in update loops (#38843) or failing to authenticate/launch due to sandbox permission profile mismatches (#49718, #60633).
*   **Rate-Limit & Quota Obfuscation:** Users frequently encounter "Send button disabled" states (#48369) or usage attribution errors after resets (#61957), leading to confusion over remaining credits.
*   **Cross-Platform Inconsistencies:** TUI shortcuts changing unexpectedly on Linux (#48139) and iOS project lists failing to sync after relaunch (#60799) indicate a need for tighter cross-platform parity testing.
*   **MCP Management:** The inability to delete custom plugins (#54626) and the large growth of daemon release caches (~2.8GB, #52067) suggest the Model Context Protocol tooling is outpacing the UI management tools.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest
**Generated:** 2026-11-17

---

## 1. Today's Highlights

The Gemini CLI ecosystem shows continued activity with **11 new Pull Requests merged or updated** in the last 24 hours, focusing on core stability, cancellation handling, and dependency updates. On the issue front, **50 active discussions** persist, with critical bugs around subagent turn limits, browser agent resilience, and tool-count limitations dominating conversation. A notable trend is the community's push for AST-aware tooling and improved subagent visibility.

---

## 2. Releases

No new releases were published in the last 24 hours.

---

## 3. Hot Issues (Top 10 by Impact)

| Issue | Why It Matters | Community Reaction |
| :--- | :--- | :--- |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports success upon hitting turn limits, masking critical interruptions. | 13 comments; users report agents lying about completion status, causing workflow failures. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely on simple operations. | 8👍; "hangs forever" is a recurring frustration, blocking basic CLI usage. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | EPIC to assess AST-aware file reads/searches for quality gains. | 7 comments; community debates if AST tools reduce token noise vs. implementation cost. |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Model uses destructive commands (`git reset --force`) in complex ops. | 3 comments; safety overrides for dangerous git/branch operations are a priority. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` `maxTurns` overrides. | 5 comments; configuration drift breaks user expectations for agent boundaries. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Model does not autonomously use skills/sub-agents. | 7 comments; users want automatic skill invocation without explicit prompting. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) (Duplicate entry for emphasis) | Subagent turn-limit reporting bug. | High severity for multi-turn workflows. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails in Wayland display servers. | 4 comments; platform-specific stability issue for Linux users. |
| [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) | Subagent trajectories not shareable via `/chat share`. | 2 comments; usability friction for auditing/debugging agent behavior. |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error when >128 tools are enabled. | 3 comments; tool-count limits need smarter scoping or batching. |

---

## 4. Key PR Progress (Top 10)

| PR | Change | Impact |
| :--- | :--- | :--- |
| [#30292](https://github.com/google-gemini/gemini-cli/pull/30292) | Fixes background log tail preservation; prevents dropping first line of single-line logs >64KB. | Improves reliability of `read_background_output` for long-running processes. |
| [#30207](https://github.com/google-gemini/gemini-cli/pull/#30207) | Fixes nightly publish failures caused by stale JS chunks bloating tarball size. | Restores automated release pipeline stability. |
| [#30210](https://github.com/google-gemini/gemini-cli/pull/30210) | Stops WebFetch fallback work after cancellation. | Prevents unnecessary processing during cancellation, improving responsiveness. |
| [#30206](https://github.com/google-gemini/gemini-cli/pull/30206) | Blocks project Git environment injection via `.env` files. | Critical security fix preventing workspace-supplied Git vars from overriding internal operations. |
| [#30316](https://github.com/google-gemini/gemini-cli/pull/30316) | Preserves custom model alias generation settings across model tiers. | Fixes model resolution edge cases when using aliases like `flash-lite`. |
| [#30283](https://github.com/google-gemini/gemini-cli/pull/30283) | Enforces ownership/permission checks on local MCP server commands. | Hardens supply-chain security for system-wide MCP configurations. |
| [#30325](https://github.com/google-gemini/gemini-cli/pull/30325) | Fixes `read_background_output` header truncation misleading model. | Corrects reply metadata so models accurately assess log completeness. |
| [#30095](https://github.com/google-gemini/gemini-cli/pull/30095) | Fixes Windows Git diff permission bypass. | Platform-specific safety guard for Windows Git integrations. |
| [#30102](https://github.com/google-gemini/gemini-cli/pull/30102) | Logs IDE connections with correct event name (`ide_connection` vs `start_session`). | Reduces inflated session metrics for IDE users. |
| [#30096](https://github.com/google-gemini/gemini-cli/pull/30096) | Fixes empty env var resolution (`${VAR:-default}`). | Resolves a subtle configuration bug affecting settings inheritance. |

---

## 5. Feature Request Trends

- **AST-Aware Tooling:** Two EPIC issues (#22745, #22747) track integrating AST-aware CLIs (e.g., tilth, glyph) for precise method-boundary reads. The community is actively weighing the token-efficiency gains against implementation complexity.
- **Subagent Transparency:** Requests for visible trajectories (#22598) and better subagent context in bug reports (#21763) indicate a desire for auditability and debugging capability in multi-agent workflows.
- **Autonomous Skill Usage:** A recurring theme (#21968, #22672) is the model's failure to proactively invoke custom skills or avoid destructive operations. Users want the system to "just work" without explicit prompting for every tool use.
- **Persistent Task Tracking:** Issue #18836 (and related sprint issues) continues to drive discussion on replacing in-context `WriteToDo` with persistent, file-based task tracking to survive session restarts.

---

## 6. Developer Pain Points

- **Turn-Limit Obfuscation:** Multiple bugs (#22323, #21409) center on agents misreporting status or hanging when approaching `MAX_TURNS`, leaving users unaware of stuck sessions.
- **Configuration Ignorance:** The Browser Agent ignoring `settings.json` overrides (#22267) and the `get-shit-done` hook crash (#22186) erode trust in the configuration layer.
- **Tool-Scale Limits:** Hitting 400+ tools triggers 400 errors (#24246), suggesting the current tool-scope logic is not adaptive to large codebases.
- **Platform Fragmentation:** Wayland browser failures (#21983) and Windows Git bypasses (#30095) highlight inconsistent cross-platform stability.

---

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI Community Digest for 2026-11-17.

### **Today's Highlights**
The release of **v1.0.113-1** introduces critical managed settings for administrators, allowing the disabling of the `Browser Use` feature at an organizational level. This update addresses enterprise governance needs directly within the CLI. Concurrently, the issue landscape remains active, with a notable spike in platform-specific stability bugs and session management edge cases following recent macOS and Windows updates.

### **Releases**
*   **v1.0.113-1**: Administrators can now disable the built-in Browser Use feature via the managed setting `features.browserUse`, including the ability to disable it in running sessions.
*   **v1.0.113-0**: Minor fixes and changes accompanying the above release.

### **Hot Issues (Top 10)**
1.  **[#4998](https://github.com/github/copilot-cli/issues/4998)** (Closed): **macOS Unusability After Update.** A stale `.mcp-writer.binding` device ID persists across reboots, breaking all sessions after a macOS security update. High community engagement (12 comments) highlights the friction of OS updates on developer tools.
2.  **[#5145](https://github.com/github/copilot-cli/issues/5145)** (Open): **400 Error in Thinking Mode.** Triggered by runtime-synthesized assistant turns after a background shell exits when using custom OpenAI-compatible providers (e.g., DeepSeek). Critical for users integrating non-OpenAI models.
3.  **[#4041](https://github.com/github/copilot-cli/issues/4041)** (Closed): **web_fetch Tool Failure.** A `TypeError: fetch failed` affects all URLs in IPv4-only sandbox environments, rendering a core tool unusable for network-dependent agents.
4.  **[#5220](https://github.com/github/copilot-cli/issues/5220)** (Open): **1-Hour Prompt Cache TTL for Claude.** Users request a longer default TTL (currently 5 minutes) to accommodate normal interactive workflows where gaps between prompts exceed the current limit.
5.  **[#4805](https://github.com/github/copilot-cli/issues/4805)** (Open): **Sessions Become Unrevivable.** A stale `inuse.<pid>.lock` from a crashed host prevents session resumption, even when event data is intact, causing data loss fears for long-running projects.
6.  **[#5478](https://github.com/github/copilot-cli/issues/5478)** (Open): **Cortex XDR Interference.** Cortex XDR's "parent_process_spoofing" flag kills the shell when Copilot CLI spawns `git`, causing immediate crashes in git-enabled directories on Windows.
7.  **[#5483](https://github.com/github/copilot-cli/issues/5483)** (Open): **Message Merging Bug.** Two `mode: "immediate"` messages arrive during a tool run and are merged into a single string without separation, causing the model to read "nodrop phase 7" instead of separate intents.
8.  **[#4822](https://github.com/github/copilot-cli/issues/4822)** (Open): **AGENTS.md Path Discovery.** Discovery follows resolved symlinks and walks every ancestor directory, inadvertently importing `AGENTS.md` from unrelated repos (e.g., dotfiles in `~/.copilot`).
9.  **[#5033](https://github.com/github/copilot-cli/issues/5033)** (Open): **"Task Complete" Summaries.** In `/autopilot` mode, a "Task complete" summary is generated after every answer, and users request a toggle to disable this feature.
10. **[#5207](https://github.com/github/copilot-cli/issues/5207)** (Open): **Sandbox Directory Listing Failure.** On Windows, sandboxed shell commands cannot list or stat directories on non-system drives (e.g., `D:\`), breaking basic file navigation workflows.

### **Key PR Progress**
*Total PRs updated in last 24h: 0. No new pull requests were merged or updated during this period.*

### **Feature Request Trends**
The issue queue reveals a strong demand for **granular control and configurability**.
*   **Sandbox Tool Whitelisting:** Multiple requests (e.g., #4298) seek a `settings.json` configuration to selectively enable or whitelist tools within the sandbox, moving away from the all-or-nothing approach.
*   **Model & Caching Flexibility:** Users are increasingly vocal about model-specific settings, specifically requesting longer prompt cache TTLs for Claude (#5220) and better deferment of organization-managed GPT models (#5481).
*   **Session & State Management:** There is significant focus on the lifecycle of sessions, including the inability to restore archived chats (#5482) and the failure of remote session auto-publish when using `--add-dir` (#5355).

### **Developer Pain Points**
1.  **Cross-Platform Sandbox Inconsistencies:** Windows users face directory listing failures within sandboxes on non-system drives (#5207), while macOS users suffer session breakage after OS updates due to stale binding files (#4998). The sandbox feature, while secure, creates fragmented user experiences across OS types.
2.  **Enterprise Governance Friction:** Admins struggle with the inability to disable specific features (like Browser Use) at the organizational level without disabling the entire CLI (#5479, v1.0.113-1 release), and organization-managed models ignore tool deferment settings (#5481).
3.  **Tooling "Gotchas":** Developers report unexplained behavior regarding Python venv preservation (#5480) and the merging of immediate-mode messages (#5483), which breaks the expected sequential logic of tool calls and assistant responses.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**OpenCode Community Digest | 2026-11-17**

### Today's Highlights
OpenCode released v1.19.6, introducing the first OpenCode 2.0 upgrade path that downloads in the background while preserving user sessions and settings. The desktop app now prompts users to upgrade with options to "Restart to upgrade," "Upgrade on quit," or "Later." Concurrently, activity remains high on the free-tier quota model, with two critical bugs—issue #64334 and #64389—highlighting the gap between quota exhaustion visibility and session stability.

### Releases
*   **v1.19.6 (Desktop)**: The standout release, adding the OpenCode 2.0 in-place upgrade mechanism. Users can now transition from v1 to v2 seamlessly, with plugins for v1 requiring updates for compatibility.

### Hot Issues (Top 10)
1.  **[#59387](https://github.com/anomalyco/opencode/issues/59387)**: The main thread for free tier issues. With 386 comments, it's the nexus for "Free usage exceeded" and "reset never happens" errors, signaling a critical UX breakdown in the free tier model.
2.  **[#64334](https://github.com/anomalyco/opencode/issues/64334)**: New issue exposing that free quota exhaustion is invisible until a new session fails with a 429 error. This highlights the lack of a remaining-quota indicator in the UI.
3.  **[#64389](https://github.com/anomalyco/opencode/issues/64389)**: A panic in `opencode-native` (Rust client) triggered by multibyte characters in session IDs, crashing the TUI at `crates/tui/src/features/session_links.rs:241`.
4.  **[#64383](https://github.com/anomalyco/opencode/issues/64383)**: Users report that permission decisions made via the UI card are not recorded in tool results or session records, leaving agents unable to distinguish user-approved actions from system defaults.
5.  **[#64384](https://github.com/anomalyco/opencode/issues/64384)**: HTML file previews fail to load images/videos referenced by relative paths (e.g., `<video src="clips/a.mp4">`), breaking preview functionality for web content.
6.  **[#64374](https://github.com/anomalyco/opencode/issues/64374)**: Feature request to enable/disable individual skills directly from the TUI `/skills` picker, addressing the current lack of persistent skill management.
7.  **[#64369](https://github.com/anomalyco/opencode/issues/64369)**: Bug report that browser tools remain listed in the system prompt even after a global "browser" deny permission is set in `opencode.jsonc`.
8.  **[#63944](https://github.com/anomalyco/opencode/issues/63944)**: Desktop renderer crash on Windows (`Error: effect/match/Match/exhaustive: absurd` in `renderRow`) during generation, affecting v2.3.0 users.
9.  **[#64376](https://github.com/anomalyco/opencode/issues/64376)**: Desktop TUI issue where finished `ctx_*` tool call bodies cannot be expanded, unlike mobile, hindering code review workflows.
10. **[#37216](https://github.com/anomalyco/opencode/issues/37216)**: Long-standing feature request for i18n support in the TUI. Despite the app having 17+ locales, the TUI package remains entirely hardcoded in English, blocking accessibility for non-English users.

### Key PR Progress (Top 20 Highlights)
*   **[#64390](https://github.com/anomalyco/opencode/pull/64390)**: Bug fix keeping session-mention prefix checks on char boundaries in the CLI-RS package, closing the panic reported in #64389.
*   **[#64385](https://github.com/anomalyco/opencode/pull/64385)**: Fix for loading relative images, audio, and video in HTML file previews, resolving #64384 by sandboxing the preview blob correctly.
*   **[#64381](https://github.com/anomalyco/opencode/pull/64381)**: New feature to send mid-conversation tool changes in place, ensuring model context stays synchronized when MCP servers or plugin tools appear/disappear.
*   **[#64379](https://github.com/anomalyco/opencode/pull/64379)**: Feature enabling host functions to write into byte arrays they are given, extending `Extension.writesBytes` capabilities for Code Mode.
*   **[#64368](https://github.com/anomalyco/opencode/pull/64368)**: Enabling the `read` tool in full Code Mode, complementing the previous inclusion of `shell`.
*   **[#64345](https://github.com/anomalyco/opencode/pull/64345)**: Maintenance update updating Nix node module hashes for build reproducibility.
*   **[#64380](https://github.com/anomalyco/opencode/pull/64380)**: Rendering LaTeX and math code fences as display math in the Desktop app, aligning TUI and Desktop rendering.
*   **[#62769](https://github.com/anomalyco/opencode/pull/62769)**: Opt-in SQLite FTS5 index of session history, adding a full-text search capability off by default via `OPENCODE_FLAGS=sqlite_fts`.
*   **[#64377](https://github.com/anomalyco/opencode/pull/64377)**: Documentation update removing MiMo-V2.6-Flash as a privacy exception after a ZDR agreement was established.
*   **[#64328](https://github.com/anomalyco/opencode/pull/64328)**: Adding the "Epic Visual Git" community plugin to the Ecosystem plugins list.

### Feature Request Trends
The issue stream reveals a strong focus on **Quota Transparency and Stability**. Users are clamoring for visible remaining-quota indicators (#64334) and proactive warnings before free-tier exhaustion (#42765), rather than silent 429 errors. There is also a clear demand for **TUI Localization** (#37216), bridging the gap between the app's 17+ locales and the English-only terminal interface. Finally, **Session & Permission Persistence** is rising as a pain point, with requests for permission decisions to be observable in tool results (#64383) and session IDs to not cause panics with multibyte characters (#64389).

### Developer Pain Points
*   **Free Tier UX**: The transition from free to paid is marked by confusing errors ("Free usage exceeded") and a lack of reset indicators, causing frustration and surprise charges or blocked workflows.
*   **Cross-Platform Inconsistencies**: Bugs like the `ctx_*` expansion failure on desktop vs. mobile (#64376) and the Linux menu stacking issue (#64388) indicate a fragmented UX across operating systems.
*   **Rust/TUI Stability**: The panic on multibyte session IDs (#64389) and the matcher absurd error on Windows (#63944) point to underlying Rust/Electric issues in the TUI rendering pipeline that need architectural fixes.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

### pi-mono Community Digest - 2026-11-17

**Today's Highlights**
A wave of session management and MCP provider fixes landed in the last 24 hours, including the closure of the critical #10470 duplicate `session_start` issue and a fix for the Codex websocket 60-minute limit. Concurrently, the notorious fullscreen re-render performance bottleneck (#9549) saw significant progress via PR #11968, though the issue remains open. The community also said farewell to several long-standing bugs as Pi 1.5.2 continues to stabilize.

**Releases**
No new releases were published in the last 24 hours.

**Hot Issues (Top 10)**
1.  **[#9549](https://github.com/earendil-works/pi/issues/9549)** [OPEN] Large transcripts re-render every frame; fullscreen resize re-emits the whole transcript. *18 comments.* This remains the top performance bug, causing core saturation on large sessions. Recent PR #11968 attempted a fix for scroll frames, but the core re-render issue persists.
2.  **[#12242](https://github.com/earendil-works/pi/issues/12242)** [CLOSED] Compaction summary grows exponentially (17k to 164k chars). *1 comment.* Highlights a memory/performance leak in the compaction feature where summaries balloon in size over time, making the ninth compaction take 588 seconds.
3.  **[#12248](https://github.com/earendil-works/pi/issues/12248)** [CLOSED] `pi update --models` skips providers registered by built-in extensions. *3 comments.* A catalog refresh bug where the tool ignores model providers defined by extensions, potentially leaving models out-of-date.
4.  **[#12225](https://github.com/earendil-works/pi/issues/12225)** [CLOSED] Anthropic and Pi SSE readers release lock without cancelling response body. *3 comments.* A resource leak risk where SSE readers hold locks after stopping, potentially blocking other operations.
5.  **[#12241](https://github.com/earendil-works/pi/issues/12241)** [CLOSED] `pi -p` (headless) hangs whenever extensions are loaded. *2 comments.* A regression in 1.5.2 where the headless mode fails to exit if any extensions are active, even with empty MCP configs.
6.  **[#12224](https://github.com/earendil-works/pi/issues/12224)** [CLOSED] MCP SSE repeatedly concatenates and rescans incomplete large events. *3 comments.* A transport-level bug where large events are buffered naively, causing repeated processing of partial data chunks.
7.  **[#12239](https://github.com/earendil-works/pi/issues/12239)** [CLOSED] Image with mismatched MIME type breaks later turns. *1 comment.* A data corruption bug where an image's MIME type is preserved incorrectly, breaking subsequent turns in a session.
8.  **[#12184](https://github.com/earendil-works/pi/issues/12184)** [CLOSED] Google adapters reject Gemini 4 Hydrogen's advertised xhigh level. *3 comments.* Resolves compatibility issues for users wanting the highest thinking level on Gemini models.
9.  **[#12251](https://github.com/earendil-works/pi/issues/12251)** [CLOSED] `AgentSession.abort()` leaves steering/followUp queues intact. *2 comments.* A session hygiene issue where aborting a session does not clear pending queues, causing "leaked" messages into the next run.
10. **[#12222](https://github.com/earendil-works/pi/issues/12222)** [CLOSED] Contribution proposal: preserve macOS argv for Zellij session restoration. *3 comments.* A niche but important fix for macOS users of Zellij, ensuring session restoration works correctly by preserving command-line arguments.

**Key PR Progress (Top 10)**
1.  **[#12249](https://github.com/earendil-works/pi/pull/12249)** [CLOSED] Record ttftMs and ttfaMs on streamed assistant messages. *Author: Xizicl.* Adds time-to-first-token and time-to-first-action metrics to `AssistantMessageEventStream`, providing crucial observability for streaming performance.
2.  **[#12230](https://github.com/earendil-works/pi/pull/12230)** [CLOSED] Emit session_start once on RPC session replacement. *Author: petrroll.* Closes #10470. Fixes the double emission of `session_start` during `new_session`, `switch_session`, `fork`, and `clone` operations in RPC mode.
3.  **[#12229](https://github.com/earendil-works/pi/pull/12229)** [CLOSED] Recover from the Codex websocket 60-minute connection limit. *Author: petrroll.* Closes #12124. Implements automatic reconnection logic when the Codex Responses WebSocket hits its 60-minute timeout.
4.  **[#12236](https://github.com/earendil-works/pi/pull/12236)** [CLOSED] Capture git and npm output while the interactive TUI runs. *Author: petrroll.* Fixes a race condition where git/npm output was not captured correctly during interactive installs, resolving issue #11264.
5.  **[#12235](https://github.com/earendil-works/pi/pull/12235)** [CLOSED] Device- and platform-aware gesture and key hints. *Author: petrroll.* Updates p2 web UI hints to distinguish between "tap/click" and "long press", and "Cmd/Ctrl" based on the operating system.
6.  **[#12234](https://github.com/earendil-works/pi/pull/12234)** [CLOSED] Report model fallback after /resume and in every mode. *Author: petrroll.* Ensures `modelFallbackMessage` is correctly emitted when a resumed session's model is unavailable, improving reliability of session restoration.
7.  **[#12233](https://github.com/earendil-works/pi/pull/12233)** [CLOSED] Report pi.events handler errors like other extension errors. *Author: petrroll.* Standardizes error reporting for extension event handlers, ensuring they are caught and displayed consistently.
8.  **[#12231](https://github.com/earendil-works/pi/pull/12231)** [CLOSED] Emit session_start on reload after bindExtensions({}). *Author: petrroll.* Fixes a gap where `AgentSession.reload()` would not emit `session_start` to new extensions if the host provided minimal UI context.
9.  **[#12232](https://github.com/earendil-works/pi/pull/12232)** [CLOSED] Stream session_start events in JSON print mode. *Author: petrroll.* Ensures `session_start` events are captured in `--mode j` output, fixing a logging gap.
10. **[#12228](https://github.com/earendil-works/pi/pull/12228)** [CLOSED] Hosted gateway worked example and pitfalls in models.md. *Author: teapotrouter.* Adds a practical worked example and pitfall section to the documentation for hosted API gateways.

**Feature Request Trends**
The issue stream this period reveals a strong focus on **session lifecycle reliability** and **performance at scale**. There is significant demand for robust session management, specifically fixes for `session_start` duplication (#10470), `AgentSession.abort()` queue leaks (#12251), and headless mode hangs (#12241). Additionally, users are actively requesting better **thinking level support** for Google Gemini models (xhigh in #12184/12177) and **structured failure metadata** for providers (#11071). On the performance front, the large transcript re-render bug (#9549) continues to drive requests for optimized rendering and cursor management.

**Developer Pain Points**
Developers are reporting high frustration with **MCP transport stability** and **extension initialization ordering**. The repeated appearance of SSE concatenation bugs (#12224, #12225) indicates a fragile event streaming pipeline. The "compaction summary growth" (#12242) issue reveals a architectural debt in long-context session handling. Furthermore, the persistence of `pi -p` hangs when extensions load (#12241) and the inconsistent handling of MIME types for images (#12239) represent critical quality-of-life failures that break basic workflows.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest**
*Generated: 2026-11-17*

### 1. Today's Highlights
The community is currently balancing two major shifts: a critical security remediation effort and the expansion of multi-agent capabilities. A widespread npm security scan (Issue #17099) has triggered urgent dependency upgrades across the web-shell and SDK, while PR #17520 introduced the foundational backend-neutral chat contract, signaling a move toward unified cross-platform messaging. Additionally, the newly introduced DingTalk adapter (mentioned in PR #17136 follow-ups) marks Qwen Code's continued expansion into enterprise communication channels.

### 2. Releases
*   **v0.27.4-nightly.20261116.eb3a599ef3**: Released recently, this nightly build includes the web-shell sidebar workspace filter and the initial DingTalk adapter integration for managed agents.

### 3. Hot Issues (10 Notable)
*   **[#17099] Security Dependency Upgrades** (15 comments): A critical Snyk scan identified 29 findings across 43 dependency paths. This issue is the primary blocker for stability, tracking the remediation of npm packages introduced in recent web-shell and SDK versions.
*   **[#17419] Cross-Workspace Agent Collaboration** (3 comments): A feature request to allow agents in different registered workspaces under the same daemon to collaborate via `@` mentions, a key step toward distributed AI workforces.
*   **[#17526] Managed Skill Catalog SPI** (2 comments): Focuses on the "Skill catalog/defaults SPI" for MAS-driven discovery, allowing the system to resolve and install immutable packages dynamically into sessions.
*   **[#17523] Workspace Refusal Budget** (2 comments): A bug report concerning the "post-preparation" budget logic, where workspace refusals still rely on the ordinary pre-admission budget instead of the new preparation-phase rules.
*   **[#17524] E2E Test Failure** (0 comments): A provisional CI failure in `keeps basic tools and Shell todos across a packaged session reload`, indicating instability in the session persistence mechanics.
*   **[#17173] DingTalk Adapter Hygiene** (6 comments): Follow-up on the managed DingTalk adapter, tracking critical fixes and hygiene suggestions from a recent review cycle.
*   **[#15251] Fleet Shepherd Dashboard** (0 comments): An automated maintenance notice revealing a wedged autofix run, highlighting ongoing repository health management.
*   **[#17528] Vision Capabilities in Modalities** (0 comments): A technical fix ensuring `capabilities.vision` is honored during session-level resolution, preventing model modality mismatches.
*   **[#17527] Idle Session Suspension Design** (0 comments): A design proposal for a stateless Hosted Harness, aiming to improve resource efficiency by suspending idle sessions.
*   **[#17097] (Implicit from context)***: While not listed in the top 7 updated issues, the high volume of PRs merging today suggests rapid iteration on the core engine.

### 4. Key PR Progress (10 Important)
*   **[#17520] Unified Chat Surface Contract** (0 comments): Lands the first slice of the merged unified-chat-surface design, introducing a backend-neutral chat contract and compile-time capability guards. This is a major architectural step toward unifying web-shell, CLI, and managed agent interfaces.
*   **[#17513] qwen4-max Model Support** (0 comments): Adds first-class support for the `qwen4-max` flagship model across all subscription channels (Standard, Token Plan, QwenCloud, Subscription), expanding the available high-capacity models.
*   **[#17525] Rate-Limit Patch** (0 comments): Patches `express-rate-limit` to version 8.7.2, addressing security vulnerabilities in the workspace installers and mobile MCP/CUA agent examples.
*   **[#17529] DingTalk Segment Ceiling** (0 comments): Adds an aggregate time ceiling for DingTalk webhook sends, preventing ledger segment overflow during high-volume messaging.
*   **[#17447] Activity Date Session Grouping** (Closed): Closed PR adding a "Group by activity date" submenu to the Web Shell sidebar, merging sessions into rolling time ranges (Today, Yesterday, Past 7 days, Older).
*   **[#17477] Async Hook Output Delivery** (0 comments): Fixes a critical L11 defect where background (async) hook output was failing to reach the model, ensuring context accumulation from async processes is preserved.
*   **[#17522] Generated UI Card State** (0 comments): Allows Generated UI cards to save view state across page reloads and conversation forks, improving the resilience of custom UI components.
*   **[#17511] GitHub Managed Channel Adapter** (0 comments): Adds GitHub as the third managed channel adapter (after Email and DingTalk), enabling the polling of GitHub notifications and admission of @mention comments into control-plane sessions.
*   **[#17378] Session Change Overview** (Closed): Closed PR adding a "Change overview" tab to the Web Shell right panel, summarizing session file changes (`+/-` scale) segmented by delivery method.
*   **[#17372] Argument Retention after Redirects** (0 comments): Fixes permission rules to retain shell command arguments after redirections (e.g., `git > /dev/null push origin main`), preventing unintended permission grants.

### 5. Feature Request Trends
The current request landscape is heavily focused on **interoperability and enterprise integration**.
*   **Multi-Agent Coordination**: There is a strong demand for native collaboration between agents across different workspaces (Issue #17419) and the introduction of Skill catalogs for MAS-driven discovery (Issue #17526).
*   **Channel Expansion**: The adapter ecosystem is rapidly growing, with GitHub joining DingTalk and Email as managed channels (PR #17511), alongside specific segment controls for DingTalk (PR #17529).
*   **UI/UX Polish**: Features like workspace filtering in pickers (PR #17151, #17244) and activity-based session grouping (PR #17447) indicate a focus on reducing "cognitive load" for users managing multiple concurrent sessions.

### 6. Developer Pain Points
*   **Security Debt**: The sheer volume of npm security findings (Issue #17099) represents a significant operational burden, requiring constant dependency management across multiple lockfiles and installers.
*   **Session State Persistence**: Issues #17524 and #17522 highlight friction points where the system fails to retain basic tool configurations or UI state across session reloads, forcing users to reconfigure environments frequently.
*   **Modality Configuration**: The technical debt around `capabilities.vision` resolution (PR #17528) suggests developers are struggling with consistent vision/agent capabilities across different model providers and session configurations.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

### 2026-11-17 DeepSeek TUI Community Digest

#### 1. Today's Highlights
The community is laser-focused on stabilizing the v0.10.3 release and addressing critical TUI freezes. Two issues from today (Nov 16-17) highlight a severe freeze bug triggered by rapid turn transitions and a named-undo performance regression. Meanwhile, two external PRs landed today that immediately address these exact TUI bottlenecks, suggesting a rapid response cycle.

#### 2. Releases
No new versions were published in the last 24 hours. Development remains concentrated on the v0.10.3 milestone, with several dependency bumps (e.g., `tokio` to 1.54.1) and CI chore updates landing via Dependabot.

#### 3. Hot Issues (Top 10)
*   **[#7357] TUI Freeze on Turn Transition** (Created: Nov 16): The TUI freezes entirely for the duration of a new turn (up to 209s) if a save-snapshot is requested at the start. **Why it matters:** Rendering blocks completely, forcing terminal kills. **Reaction:** High impact; marked as a serious usability blocker.
*   **[#7356] Session Persistence Failure** (Created: Nov 16): Sessions with a late-usage ledger >1 MiB fail to save, stopping transcript persistence. **Why it matters:** Data loss risk for long-running sessions. **Reaction:** Critical for power users; compaction logic is the root cause.
*   **[#7355] Named-Turn Undo Performance** (Created: Nov 16): `/undo` with a `turn_id` loads the entire turn store twice, causing O(2n) file reads. **Why it matters:** Makes named undo sluggish compared to depth-based fork. **Reaction:** A targeted perf fix is eagerly awaited.
*   **[#7354] Session Admission Blocking** (Created: Nov 16): Forking a conversation holds manager-wide session admission, blocking unrelated threads. **Why it matters:** Concurrency bottleneck; other conversations stall during a fork. **Reaction:** Highlights a fundamental architecture lock in the state manager.
*   **[#7279] 0.10.3: Run Installed Agents via ACP** (Created: Nov 10): Enables running installed agent CLIs (Claude Code, Codex) as Codewhale sessions over ACP. **Why it matters:** Core feature of the v0.10.3 release; bridges local tools and AI agents. **Reaction:** "Help wanted" tag active; progress is a priority for the milestone.
*   **[#7282] Terminals and Jobs Belong to Conversations** (Created: Nov 10): Terminal sessions and background jobs are now owned by their conversation, ending when the conversation ends. **Why it matters:** Prevents orphaned background processes; improves resource cleanup. **Reaction:** Landed on main; considered a significant stability improvement.
*   **[#7274] Robustness: Panics, Hangs, and Wrong Text** (Created: Nov 10): Tracks crashes (retry config panic), hangs, and wrong engine outputs. **Why it matters:** A "kitchen sink" issue for pre-release hardening of v0.10.3. **Reaction:** Community is working through individual sub-items.
*   **[#7174] Prompt Conformance Fixtures Fail** (Created: Oct 31): Fails on hosts with optional host-probed tools; golden pin file missing. **Why it matters:** Test stability depends on this conformance suite. **Reaction:** Long-standing fixture gap; blocking automated testing.
*   **[#7352] Fix Named Provider in Web Picker** (Created: Nov 16): Fixes web client inability to use named custom providers (e.g., `seer`) when creating new threads. **Why it matters:** UX regression for users with multiple custom provider configs. **Reaction:** External contributor fix closed quickly.
*   **[#7301] Secret Redaction Misses Provider Keys** (Created: Nov 12): Redaction logic only splits on ASCII spaces, missing keys next to Chinese/full-width punctuation. **Why it matters:** Security/privacy leak if API keys are embedded non-standardly. **Reaction:** Closed, but highlights a localization blind spot.

#### 4. Key PR Progress (Top 10)
*   **[#7359] Inherit Session Reviewed Memory in Child Prompts** (Closed Nov 17): Sub-agents now carry the session's reviewed native-memory packet and `Memory Hygiene` guidance. **Why it matters:** Ensures context consistency across agent spawning.
*   **[#7361] Bound Completed-Turn Session Snapshot Waits** (Open Nov 17): Binds the completed-turn snapshot request to the existing two-second Engine snapshot wait, preventing TUI freezes. **Why it directly addresses #7357:** This PR is the proposed fix for the freeze bug.
*   **[#7360] Bound Terminal Snapshot Wait** (Open Nov 17): Binds terminal session snapshots to the Engine wait, returning to the event loop if busy. **Why it matters:** Prevents TUI freeze when engine is busy with a new turn.
*   **[#7335] Bump actions/setup-java to v6.2.0** (Updated Nov 13): Standard CI dependency update.
*   **[#7333] Bump docker/login-action to v4.8.0** (Updated Nov 13): Standard CI dependency update.
*   **[#7349] Decide Reasoning Dialect by Endpoint** (Closed Nov 16): Fixes provider routing for OpenAI-compatible endpoints with DeepSeek models, preventing incorrect `thinking` object promotion.
*   **[#7353] Log Safe Provider Failure Diagnostics** (Closed Nov 16): Emits structured warnings for provider timeouts/transport failures in the default log.
*   **[#7337] Bump jsonschema to v0.61.2** (Updated Nov 13): Dependency update for JSON schema validation.
*   **[#7336] Bump lru to v0.19.0** (Updated Nov 13): Dependency update for LRU cache implementation.
*   **[#7294] Verify Sealed Candidates with Isolated Host Oracle** (Open Nov 11): Maintainer-requested opt-in evaluator slice for workflow verification.

#### 5. Feature Request Trends
The issue landscape reveals a strong focus on **TUI stability and concurrency** during the v0.10.3 rollout. There is a clear demand for **named-undo optimization** (avoiding double-loads) and **session-scoped resource management** (terminals/jobs tied to conversations). Additionally, **Internationalization (i18n) robustness** is emerging, specifically in secret redaction and network deny rules for IDN/Chinese characters, indicating a need for non-ASCII global support.

#### 6. Developer Pain Points
*   **TUI Freezes:** The most acute pain point. Rapid turn transitions combined with snapshot requests cause complete UI lockups, requiring terminal termination. PRs #7360 and #7361 are direct responses to this.
*   **Session Persistence Limits:** The 1 MiB ledger bound in #7356 causes hard failures, stopping all saves. Users report data loss risks.
*   **Redaction Localization Gaps:** #7301 highlights that secret scanning is brittle against CJK text, a recurring theme in international deployments.
*   **Fork Contention:** #7354 shows that fork preparation blocks the entire manager, preventing concurrent thread activity, which frustrates users with multi-conversation workflows.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*