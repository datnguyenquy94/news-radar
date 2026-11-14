# AI CLI Tools Community Digest 2026-11-14

> Generated: 2026-11-14 05:57 UTC | Tools covered: 10

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

Here is the cross-tool comparison report based on the 2026-11-14 community digests.

### 1. Ecosystem Overview
The AI CLI tools ecosystem in mid-November 2026 is characterized by a tension between rapid feature iteration and stabilizing core workflows. While major players like Claude Code and OpenAI Codex are releasing frequent updates with significant UI and integration changes, other tools like Pi and DeepSeek TUI are focused on dependency hygiene and niche stability fixes. A recurring theme across the landscape is the struggle with "last mile" reliability: model safeguards triggering false positives, Windows-specific sandbox crashes, and environment variable handling in configurations. The market is bifurcating between general-purpose code assistants (Claude, Codex, OpenCode) and specialized or open-source interfaces (Pi, DeepSeek, Qwen), with the latter placing greater emphasis on CI reliability and configuration ergonomics.

### 2. Activity Comparison

| Tool | Issues (New/Updated Today) | PRs (Closed/Merged Today) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10+ High (Includes critical regressions like #109446) | 1 Open (IP duplicate); Several closed | **v2.1.325** Released today (Security fix, Jupyter polish) |
| **OpenAI Codex** | 10+ High (Windows Computer Use, Chrome Integration failures) | 10 Closed (Refactors, WSL fixes) | **rust-v0.169.0** Released (Multi-side-chat workspace) |
| **OpenCode** | 10+ High (TUI regressions, Windows integration crashes) | 10 Closed (XHTML fixes, Model availability) | **v2.3.0** Released (Background subagents by default) |
| **Gemini CLI** | 10+ High (Subagent hang, Turn limit lies) | 10 Closed (IME fixes, Tool recursion) | No new versions (Stability focus) |
| **Pi** | 10+ High (Model prioritization, MCP transport bugs) | 10 Closed (Reasoning effort fix, Undici security bump) | **v1.5.0** Stable (Atomic completion APIs) |
| **Qwen Code** | 9+ Moderate (CI routing, Folder trust migration) | 10 Closed (README rewrite, Docker retry) | No new versions (CI stabilization) |
| **DeepSeek TUI** | 2 Low (IDNA, CJK Masking) | 12 Closed (Dependabot bumps) | No new releases (Dependency maintenance) |
| **Grok Build** | 0 | 0 | No activity |

### 3. Shared Feature Directions
*   **Agent Autonomy & Sub-agent Management:** A critical pain point across Claude Code, Gemini CLI, and OpenCode. Communities are demanding better visibility into per-agent status (Claude Code #109446), resolution of "false success" statuses when turn limits are hit (Gemini CLI #22323), and refined auto-approval workflows for background subagents (OpenCode #44007).
*   **Configuration & Environment Ergonomics:** Significant friction regarding environment variable expansion in MCP configs (Pi #10654, Pi #12158), symlink handling for agent configs (Gemini CLI #20079), and the migration from legacy boolean settings to active flag systems (Qwen Code #17123).
*   **Windows Stability & Sandbox Risks:** A dominant concern for Codex and Claude Code, specifically regarding `fseventsd` runaways, `rm -rf` sandbox escapes (#95426), and macOS/Windows networking rule conflicts (#5390, #5435).
*   **Model Safeguard Overreach:** Claude Code and Gemini CLI users are frustrated by cyber safeguards flagging legitimate defensive security code as "code cracking," halting productivity on legitimate development tasks.

### 4. Differentiation Analysis
*   **Feature Focus:** Claude Code and OpenCode lead in UI/UX polish and multi-agent workflows (background subagents, Jupyter integration), while Pi and DeepSeek TUI focus on low-level reliability (streaming, dependency bumps, secret masking). OpenAI Codex dominates the "Computer Use" and browser automation space, though it faces significant stability hurdles on Windows.
*   **Target Users:** Claude Code and OpenCode cater to power users and professional developers requiring complex multi-agent orchestration and UI customization. Qwen Code and DeepSeek TUI appear targeted at infrastructure/integration specialists concerned with CI pipelines and specific platform trust boundaries. Pi serves a broad user base needing model flexibility and atomic completion APIs.
*   **Technical Approach:** OpenAI Codex and Claude Code are closed-source/propecitary ecosystems with frequent, feature-rich releases. In contrast, Qwen Code, Pi, and DeepSeek TUI are open-source projects relying on community contributions and Dependabot-driven dependency maintenance, resulting in more conservative release cycles but faster bugfix turnarounds for specific issues.

### 5. Community Momentum & Maturity
*   **Most Active:** **Claude Code** and **OpenAI Codex** show the highest volume of hot issues and recent releases, indicating rapid feature development and an active, though occasionally unstable, user base.
*   **Rapidly Iterating:** **OpenCode** is releasing significant version updates (v2.3.0) with major workflow changes (background subagents) and a high volume of PRs addressing immediate TUI and Windows bugs, suggesting a project in active refinement.
*   **Stable/Mature:** **DeepSeek TUI** and **Pi** exhibit low issue counts focused on maintenance and security patches, indicating mature, stable codebases where the community prioritizes reliability over new features. **Qwen Code** sits in the middle, with high CI stability activity but low user-facing issue counts.

### 6. Trend Signals
*   **The "Sandbox & Security" Imperative:** There is a clear industry shift toward tightening AI tool sandboxes to prevent catastrophic data loss (e.g., the `rm -rf` incident in Claude Code), but this is creating friction with legitimate developer workflows and model safeguard bypasses.
*   **Configuration as Code Friction:** The inability to use environment variables (`${VAR}`) in MCP transport URLs or agent configs is a persistent pain point across Pi, Claude Code, and Gemini CLI, signaling a need for better "Infrastructure-as-Code" support in these tools.
*   **Sub-agent Fatigue:** The management of sub-agents—visibility, status reporting, and auto-approval—is becoming a primary differentiator. Tools that solve the "status lie" (reporting success when limits are hit) and "stall at permission" issues will likely see higher adoption among power users building complex multi-step workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

Here is the Claude Code Skills community highlights report for data as of 2026-11-14.

### 1. Top Skills Ranking
The following 7 Skills (PRs) have garnered the most community discussion and attention, sorted by issue tracker interest.

| Rank | PR # | Title | Author | Status | Comments/Attention | Functionality Summary | Key Discussion Highlights |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **1** | **#1742** | fix(mcp-builder): support mcp>=2 streamable_http_client import and custom headers | **Kuldeeep18** | **OPEN** | Highest attention | Fixes compatibility for MCP (Model Context Protocol) v2+, specifically renaming `streamablehttp_client` to `streamable_http_client` and updating custom header configuration. | Critical fix for the MCP ecosystem. Users are reporting breakage in existing MCP integrations. The author is actively updating the builder script to handle the new API structure. [GitHub Link](https://github.com/anthropics/skills/pull/1742) |
| **2** | **#1298** | fix(skill-creator): isolate trigger evals and handle Windows and runtime failures | **MartinCajiao** | **OPEN** | High | Isolates trigger evaluations to prevent false misses; fixes subprocess pipe `select()` failures on Windows; handles runtime errors gracefully. | Addresses a long-standing bug where the Skill creator incorrectly reported trigger rates. Windows users specifically benefit from the `select()` fix. Discussion focuses on reliability for large-scale skill deployments. [GitHub Link](https://github.com/anthropics/skills/pull/1298) |
| **3** | **#1245** | Add notion-spec-to-implementation and quantitative-resume-auditor skills | **mrdesouzaphd-cmyk** | **OPEN** | High | New Skills: 1) Transforms Notion product specs into implementation task plans. 2) Audits resumes for quantitative quality. | Represents significant community demand for Notion integration and document auditing. Users are praising the Notion skill for product management workflows. [GitHub Link](https://github.com/anthropics/skills/pull/1245) |
| **4** | **#1980** | webapp-testing: avoid shell=True in with_server.py | **Pcmhacker-piro** | **OPEN** | High | Removes `subprocess.Popen(..., shell=True)` from `with_server.py` to mitigate command injection (CWE-78) risks. | Security-focused fix. The community is highly engaged with security hardening, noting that removing `shell=True` is a best-practice essential for production use. [GitHub Link](https://github.com/anthropics/skills/pull/1980) |
| **5** | **#1792** | fix(docx): report LibreOffice timeout as an error and verify the output | **TINGyu123644** | **OPEN** | Medium-High | Ensures LibreOffice timeouts are reported as errors; verifies output DOCX lacks revision marks before claiming success. | Improves reliability of DOCX editing. Users reported issues where timed-out operations falsely succeeded, leading to corrupted documents. [GitHub Link](https://github.com/anthropics/skills/pull/1792) |
| **6** | **#1771** | feat(skills): add proofcore-contract-auditor for smart contract notarization | **ProofCore-Protocol** | **OPEN** | Medium | Adds `proofcore-contract-auditor` for automated static analysis of Solidity/Rust smart contracts and blockchain anchoring. | New vertical skill for Web3/Blockchain developers. High interest from the ProofCore community and crypto-focused users. [GitHub Link](https://github.com/anthropics/skills/pull/1771) |
| **7** | **#525** | Add pyxel skill for retro game development | **kitao** | **OPEN** | Medium | Skill for creating, debugging, and verifying retro games in Python; guides implementation and frame inspection. | Fun and niche category. High engagement from the game development hobbyist community. [GitHub Link](https://github.com/anthropics/skills/pull/525) |

---

### 2. Community Demand Trends
Analysis of the top 12 issues reveals the community's most-anticipated Skill directions:

*   **Workflow Automation & Security Hardening:** There is strong demand for Skills that automate repetitive tasks safely. PR #1980 (removing `shell=True`) and Issue #492 (trust boundary abuse) highlight a community focus on secure-by-default automation and preventing permission escalation.
*   **Developer Tooling & Integration:** Skills focused on integration and tooling are highly active. PR #1298 (skill-creator reliability) and PR #1742 (MCP builder) show users want robust, error-proof tools for creating and managing Skills, particularly regarding Windows compatibility and API updates.
*   **Cross-Platform & Productivity:** There is significant interest in Skills that bridge popular productivity platforms. PR #1245 (Notion skills) and the general trend of document manipulation (Docx, PPTX, XLSX) indicate a demand for AI-assisted workflow integration within existing office/productivity suites.

---

### 3. High-Potential Pending Skills
These active-comment PRs are awaiting merge and likely to land soon:

*   **PR #1997:** fix(skill-creator): parse YAML frontmatter scalars correctly
    *   *Status:* Open, Updated 2026-10-19.
    *   *Why it matters:* Correctly parsing YAML is fundamental to Skill metadata. This fix ensures descriptions and configurations are parsed accurately, preventing downstream errors in skill deployment.
*   **PR #1977:** algorithmic-art: wrapAround() now wraps
    *   *Status:* Open, Updated 2026-10-18.
    *   *Why it matters:* A bug fix for a core algorithmic art function, improving the robustness of generative art Skills.
*   **PR #1950:** docs(claude-api): update Python pause_turn runner guidance
    *   *Status:* Open, Updated 2026-11-10.
    *   *Why it matters:* Updates documentation to reflect that `pause_turn` can now be automatically resumed in Python SDK 1.1.0, preventing users from unnecessarily restarting loops.

---

### 4. Skills Ecosystem Insight
The community's most concentrated demand at the Skills level is **secure, reliable workflow automation and integration**. Users are actively contributing and refining Skills that bridge Claude Code with external tools (MCP, Notion, APIs) and productivity suites (Docx, PPTX, XLSX), with a strong simultaneous emphasis on fixing security vulnerabilities (like `shell=True`) and improving cross-platform compatibility (Windows support). The ecosystem is maturing from "novel demonstrations" toward "production-grade, integrated tooling."

---

### Claude Code Community Digest
**Generated:** 2026-11-14

#### 1. Today's Highlights
The community saw significant activity around release v2.1.325 and a surge of recent bug reports. Most notably, regression #109446 highlights the removal of `subagentStatusLine` in v2.1.323, sparking widespread concern over lost per-agent visibility. Concurrently, the latest release v2.1.325 addressed a critical security fix for zstd-compressed responses and added UI polish for Jupyter notebook integration. The day also featured several high-priority bugs related to model safeguards and Windows desktop stability.

#### 2. Releases
*   **v2.1.325:** Released today. Key changes include a security fix for zstd-compressed response decoding and the addition of a spinner tip in VS Code and integrated terminals to inform users when Claude has read or edited a Jupyter notebook cell.

#### 3. Hot Issues (Top 10)
*   **#109446 [BUG]:** The removal of `subagentStatusLine` in v2.1.323 broke per-agent context visibility (cost, model, effort). Community reaction is strong, with 28 upvotes, as users report the setting was silently removed with no replacement or migration path.
*   **#98769 [BUG]:** macOS `fseventsd` runaway process on agent-heavy Macs, causing Claude Code to block at startup with no self-recovery. 18 comments discuss stability risks for power users.
*   **#95426 [BUG]:** A critical data loss incident where Claude Code executed an unprompted `rm -rf` on a Windows drive root substitution, deleting ~600GB. 12 comments highlight severe sandbox/security failures.
*   **#109779 [BUG]:** `--agent` flag ignores frontmatter `effort` setting for main-thread sessions since v2.1.322. 1 comment confirms a regression in agent effort control.
*   **#109785 [BUG]:** Model refusal on benign app privacy/protection tasks, falsely flagged as "code cracking." 0 comments but high relevance for developers building security tools.
*   **#109784 [BUG]:** Model refusal on benign request `req_011Ch2FRzvRfkRSiqRkEfu34`. 0 comments; reflects ongoing safeguard sensitivity issues.
*   **#109783 [BUG]:** Anthropic API error: Cyber Safeguards refusing legitimate defensive security requests (CTF). 0 comments.
*   **#109770 [BUG]:** Desktop mod backdrop scenes freeze if SVG uses `shape-rendering` or `@media` rules. 2 comments on rendering bugs in the desktop app.
*   **#109767 [BUG]:** Scheduled tasks silently lack `start_session`, breaking work handoffs by design. 1 comment on automation reliability.
*   **#109446 [BUG]:** (Duplicate entry reflecting significance) Regression of `subagentStatusLine` removing per-agent cost, model, and effort visibility.

#### 4. Key PR Progress
*   **#45553 [OPEN]:** PR focused on resolving duplicate IPs, created in April and last updated 13 days ago. Status is currently open with no community upvotes recorded.

#### 5. Feature Request Trends
Analysis of the issue queue reveals a strong demand for **visual customization and parity** across platforms. The top-requested features include:
*   **Custom Themes/Accent Colors** (Issue #79305): Users want the desktop app to support custom themes to distinguish windows across multiple monitors, parity with the CLI custom theme system.
*   **GUI Polish:** Requests for the return of the "glowing code-glyph ripple background" on the home screen (#102952) and fixes for Linux renderer leaks involving `/dev/shm` (#98725).
*   **Agent Usability:** Improvements to the agent list interaction (#94565) and frontmatter control (#109779).
*   **Platform Support:** Requests for Fedora/RHEL and atomic distro support for the Linux beta (#88843).

#### 6. Developer Pain Points
*   **Model Safeguard Overreach:** A cluster of recent bugs (#109785, #109784, #109783) highlights frustration with Anthropic's cyber safeguards, which are flagging legitimate defensive security and app-protection code as "code cracking" or "cyber" threats, halting productivity.
*   **Windows Stability & Sandbox Risks:** Issues #95426 (unprompted `rm -rf` data loss) and #109786 (window shrinkage during computer use) point to a fragile Windows experience and sandbox mechanics that can cause catastrophic data loss or UI instability.
*   **Regression & Setting Loss:** The silent removal of `subagentStatusLine` (#109446) and the breaking of `--agent` effort flags (#109779) demonstrate a pattern of breaking changes in recent releases (v2.1.322/323) that remove functionality without migration paths, forcing users to downgrade or hunt for undocumented workarounds.
*   **Linux & Platform Fragmentation:** While the CLI is cross-platform, the desktop experience lagging behind (#88843 for Fedora/RHEL support) and Wayland renderer leaks (#98725) create a divided user base where power users on non-Debian systems face more bugs and fewer features.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for 2026-11-14.

### **Today's Highlights**
The Codex ecosystem shows a mix of active alpha development and persistent platform-specific stability issues. The most significant release activity is the rollout of the **opt-in terminal workspace with multi-side-chat tab support** in `rust-v0.169.0`, aimed at improving multitasking workflows. However, the community's attention is currently dominated by a critical Windows Computer Use bug where capture borders remain open after screenshot-producing turns, and the recurring failure of the Chrome integration on Windows Desktop to generate necessary host files after updates.

### **Releases**
*   **`rust-v0.169.0`**: Introduces the opt-in terminal workspace featuring multiple side-chat tabs, keyboard/mouse switching, and the ability to reopen saved local side chats after restarting Codex.
*   **`rust-v0.171.0-alpha.5`, `alpha.4`, `alpha.2`**: Successive alpha builds leading toward version `0.171.0`, focusing on internal refinements and feature flags.

### **Hot Issues** (Top 10 by engagement)
1.  **[#57101](https://github.com/openai/codex/issues/57101)** (28 comments) – **Windows Computer Use**: Capture access and gold/yellow display border remain open after screenshot-producing turns complete. *Why it matters*: Severely impacts the reliability of the Computer Use automation feature on Windows, with users reporting persistent UI artifacts.
2.  **[#42520](https://github.com/openai/codex/issues/42520)** (24 comments) – **Windows Desktop Chrome Integration**: `chrome-native-hosts-v2.json` is never created; stale junctions after updates. *Why it matters*: Breaks the native browser automation pipeline for Windows users relying on Chrome/Edge integration.
3.  **[#25770](https://github.com/openai/codex/issues/25770)** (24 comments) – **Windows Store Update Failure**: Repeated failures to update due to old MSIX packages remaining locked/in use. *Why it matters*: A systemic MSIX packaging issue preventing users from updating the application via the Microsoft Store.
4.  **[#54685](https://github.com/openai/codex/issues/54685)** (23 comments) – **Auto-review Denial**: Cross-task approval denied after trusted-context omissions despite complete original evidence. *Why it matters*: Highlights a logic gap in the agent's review/approval workflow, potentially stalling long-running tasks.
5.  **[#56600](https://github.com/openai/codex/issues/56600)** (18 comments) – **Android Remote Pairing**: Fails with both QR and manual code. *Why it matters*: Rendering the mobile remote control feature unusable for a significant user base.
6.  **[#51636](https://github.com/openai/codex/issues/51636)** (15 comments) – **macOS New Messages**: Enter key and send button do not submit new messages in Work conversations. *Why it matters*: A fundamental UX bug affecting the primary macOS workflow.
7.  **[#51588](https://github.com/openai/codex/issues/51588)** (13 comments) – **Windows Update Failure**: Repeated in-app update failure `0x800700E9` after staging. *Why it matters*: Blocks users from receiving critical security and feature updates.
8.  **[#33782](https://github.com/openai/codex/issues/33782)** (12 comments) – **macOS Freeze**: Desktop app freezes when switching to large image-heavy threads (ResizeObserver loop). *Why it matters*: Performance and stability regression on macOS, particularly with media-rich chats.
9.  **[#50879](https://github.com/openai/codex/issues/50879)** (10 comments) – **Codex Cloud Start Skill**: Published Cloud Start skill missing from new task context. *Why it matters*: Indicates a regression or misconfiguration in the Cloud skill publishing pipeline.
10. **[#60974](https://github.com/openai/codex/issues/60974)** (9 comments) – **Windows WSL Startup**: Startup policy check skips CLI relocation and executes non-executable WindowsApps binary. *Why it matters*: A critical boot-time issue affecting Windows Subsystem for Linux users.

### **Key PR Progress** (Top 10 by activity)
1.  **[#61465](https://github.com/openai/codex/pull/61465)** (Closed) – Move JSON byte counting into `codex-utils-string`. Refactors serialization logic for efficiency.
2.  **[#61461](https://github.com/openai/codex/pull/61461)** (Closed) – Refactor session mail recording and compaction metadata capture. Improves inter-agent message handling.
3.  **[#61452](https://github.com/openai/codex/pull/61452)** (Closed) – Add optional tool output rendering for context window hints. Introduces `context_window_as_tool_output` setting.
4.  **[#61449](https://github.com/openai/codex/pull/61449)** (Closed) – Add explicit cloud catalog refresh before turn admission. Ensures skill visibility for newly installed plugins.
5.  **[#61446](https://github.com/openai/codex/pull/61446)** (Closed) – Add thread ID inclusion filters to `thread/list`. Allows clients to reconcile saved thread IDs across paginated history.
6.  **[#61444](https://github.com/openai/codex/pull/61444)** (Closed) – Add process-local launch directories for shared MCP servers. Provides CWD control for host-supplied stdio servers.
7.  **[#61438](https://github.com/openai/codex/pull/61438)** (Closed) – Use the provider default RPC in the TUI. Standardizes provider selection display in the terminal user interface.
8.  **[#61437](https://github.com/openai/codex/pull/61437)** (Closed) – Avoid starting dormant REPL servers for cleanup hooks. Prevents spawning unused processes during session cleanup.
9.  **[#61434](https://github.com/openai/codex/pull/61434)** (Closed) – Close abandoned tool dispatch traces as aborted. Fixes trace execution markers left running after tool interruptions.
10. **[#61419](https://github.com/openai/codex/pull/61419)** (Closed) – Resolve pasted Windows paths with wslpath in WSL. Fixes mapping of Windows drive paths to WSL `/mnt/` equivalents.

### **Feature Request Trends**
Analysis of the issue queue reveals a strong demand for **isolated provider routing** and **custom model integration**. Users frequently request the ability to route Codex traffic through optional third-party model providers without intercepting native OpenAI traffic (Issue #36597). There is also significant interest in improving **image generation transparency** on the Free plan, with users complaining that current error messages ("this environment does not support image generation tools") are too vague and lead to unnecessary troubleshooting (Issue #61468). Additionally, requests for **better browser automation error handling** and **cross-chat communication capabilities** for cloud chats are prevalent.

### **Developer Pain Points**
The most recurring frustrations center on **Windows MSIX packaging and update stability** (Issues #25770, #51588, #42520) and **macOS UI stability** (Issues #33782, #34376). Windows users are disproportionately affected by update failures and Computer Use display bugs, while macOS users report freezes and UI hangs during media handling. Furthermore, the **Android Remote pairing failure** (#56600) and the **Enter key submission bug on macOS Work chats** (#51636) represent high-frequency barriers to basic workflow continuity.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-11-14.

### **Today's Highlights**
The community is actively debugging critical stability issues surrounding subagent behavior and tool execution. Two high-priority bugs dominate the conversation: the `codebase_investigator` reporting false success despite hitting turn limits, and the generalist agent hanging indefinitely on simple tasks. Simultaneously, significant infrastructure work is landing in Pull Requests, including fixes for shell command timeouts and IME input handling, signaling a push toward greater reliability for long-running workflows.

### **Releases**
No new versions were published in the last 24 hours.

### **Hot Issues** *(Top 10 by significance)*
1.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** – *Subagent recovery after MAX_TURNS is reported as GOAL success*. This critical bug causes the `codebase_investigator` to lie about completion status, hiding the fact that it hit the maximum turn limit. With 13 comments, the community is actively investigating why the status flag diverges from actual tool execution.
2.  **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** – *Generalist agent hangs*. Users report that deferring to the generalist agent causes the CLI to hang forever on simple tasks like folder creation. With 8 upvotes, this is a blocker for users relying on sub-agent delegation.
3.  **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** – *Leverage model's bash affinity via Zero-Dependency OS Sandboxing*. An enhancement proposal to utilize model-native bash capabilities while maintaining security. 9 comments discuss balancing native tool use with sandbox safety.
4.  **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** – *Assess the impact of AST-aware file reads, search, and mapping*. An EPIC tracking the value of AST-aware tools to reduce token noise and improve precision in file reads. 7 comments weigh the trade-offs between precision and context loss.
5.  **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** – *Gemini does not use skills and sub-agents enough*. Users report the agent ignores custom skills unless explicitly instructed. 7 comments express frustration with the agent's "hands-off" approach to available tools.
6.  **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** – *[BUG] Browser Agent ignores settings.json overrides*. The Browser Agent ignores `maxTurns` and other overrides from `settings.json`. 5 comments highlight a failure in the `AgentRegistry` configuration merge logic.
7.  **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** – *Agent should stop/discourage destructive behavior*. Concerns that the model uses `git reset --force` in complex operations. 3 comments discuss the need for safer default behaviors in git and DB operations.
8.  **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)** – *Agent config files not recognized if symlink*. A niche but annoying bug where `.md` agents in `~/.gemini/agents/` are ignored if they are symlinks. 4 comments.
9.  **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** – *Gemini CLI encounters 400 error with > 128 tools*. A hard limit being hit when too many tools are available, causing 400 errors. 3 comments request smarter tool scoping.
10. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** – *Model frequently creates tmp scripts in random spots*. The model generates scripts across various directories when shell execution is restricted, creating cleanup overhead. 3 comments.

### **Key PR Progress** *(Top 10 by impact)*
1.  **[#30292](https://github.com/google-gemini/gemini-cli/pull/30292)** – *Fix: preserve oversized background log tails*. Fixes a bug where `read_background_output` discarded the first line of a 64KB read window, losing entire single-line outputs longer than 64KB.
2.  **[#30174](https://github.com/google-gemini/gemini-cli/pull/30174)** – *Fix: stop body timeouts from killing long model turns*. Prevents API gateway timeouts from aborting streamed turns when the model is performing large writes (e.g., writing a large file), avoiding forced replays.
3.  **[#30178](https://github.com/google-gemini/gemini-cli/pull/30178)** – *Fix: submit full text when IME commit and Enter arrive in the same tick*. Fixes Korean (Hangul) syllable dropping when pressing Enter immediately after IME composition commit.
4.  **[#30171](https://github.com/google-gemini/gemini-cli/pull/30171)** – *Fix: flag recursive and forced rm regardless of flag position*. Corrects `isDangerousCommand` to recognize `rm -r -f x`, `rm --recursive --force x`, and other position permutations previously classified as safe.
5.  **[#30169](https://github.com/google-gemini/gemini-cli/pull/30169)** – *Fix: keep pasted @ text and fuzzy @ matches from attaching secrets*. Prevents SSH private keys from being attached to model requests when users paste shell transcripts containing `@` symbols.
6.  **[#30175](https://github.com/google-gemini/gemini-cli/pull/30175)** – *Fix: apply local subagents' generateContentConfig for every model*. Ensures local subagents send their declared `temperature`, `topP`, etc., for all model values (auto, flash, pro), not just the `auto` alias.
7.  **[#30173](https://github.com/google-gemini/gemini-cli/pull/30173)** – *Fix: load ~/.gemini/.env in untrusted folders*. Allows the CLI to read user env vars (like `GOOGLE_CLOUD_PROJECT`) from `~/.gemini/.env` even when operating in untrusted directories, fixing endless login loops.
8.  **[#30172](https://github.com/google-gemini/gemini-cli/pull/30172)** – *Fix: keep one result per tool call ID in session records*. Removes duplicate results per tool call ID from saved sessions and live history, fixing duplication bugs from previous session resumption logic.
9.  **[#30170](https://github.com/google-gemini/gemini-cli/pull/30170)** – *Fix: stop local subagents from waiting out their deadline on a stalled model call*. Adds a per-turn model response limit to prevent subagents from blocking the UI when a model call stalls.
10. **[#30056](https://github.com/google-gemini/gemini-cli/pull/30056)** – *Fix: ignore internal target key in expandEnvVars env*. Fixes `expandEnvVars` returning the env value of `__GCLI_EXPAND_TARGET__` instead of the expanded input when that key exists in the caller's env.

### **Feature Request Trends**
The issue queue reveals a strong push toward **agent intelligence and safety**.
*   **Subagent Autonomy:** A recurring theme is the agent's reluctance to use available skills and sub-agents (Issues #21968, #22672). Users want the model to automatically leverage bash/tools rather than relying on explicit prompting.
*   **Configuration Faithfulness:** There is significant friction regarding `settings.json` overrides. Issues #22267 and #22323 highlight that the CLI frequently ignores user-configured `maxTurns`, `browser` settings, and safety boundaries, leading to mistrust in the agent's behavior.
*   **AST Integration:** Several EPICs (#22745, #22747) focus on integrating AST-aware tools (like glyph/tilth) to enable precise "surgical reads" of code, reducing the token overhead of current regex-based search and read operations.

### **Developer Pain Points**
*   **The "Hang" Bug:** The generalist agent hanging indefinitely (#21409) is the most severe friction point, rendering the tool unusable for complex multi-step workflows without manual intervention.
*   **Status Mismatch:** Users are frustrated when agents report `status: "success"` or `Termination Reason: "GOAL"` despite hitting internal limits like `MAX_TURNS` (#22323), creating a false sense of completion.
*   **Symlink & Config Edge Cases:** Bugs involving symlinks for agent config (#20079) and environment files in untrusted folders (#30173) represent annoying "last mile" configuration failures that break expected workflows.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-11-14.

### **Today's Highlights**
The CLI released v1.0.112 and v1.0.112-0, introducing significant model context improvements and fallback handling for failed `/compact` commands. Concurrently, the team addressed a critical memory crash issue in long-running sessions (Issue #5435) and refined macOS sandbox networking rules (Issue #5390), balancing performance with connectivity.

### **Releases**
*   **v1.0.112 (2026-11-13):** Fixed a bug where a failed `/compact` command previously showed an internal host-rethrow prefix. Now, the model provider's error message is displayed directly. Additionally, prompts entered while the managed account policy is still loading now retain their pasted text, preventing duplicate sends on re-press.
*   **v1.0.112-0:** Improved best-effort startup on macOS Ventura 13.5 or later without expanding official OS support. The CLI now uses each model's recommended context window by default while preserving explicit user choices. It also updated `/chronicle` cost tips to include Copilot App sessions and recommend cheaper models.

### **Hot Issues (Top 10)**
1.  **#5435 [OPEN] Out-of-Memory Crashes:** Recurrent OOM crashes during long interactive sessions force session resumption and lose access to previous background agents. *Why it matters:* Stability is critical for developers relying on continuous Copilot assistance.
2.  **#5390 [OPEN] macOS Sandbox Networking:** The `allowLocalNetwork: true` setting still generates `hostLoopback: deny` in proxy mode, blocking Gradle and other local daemons. *Why it matters:* A regression breaking local development tooling on macOS.
3.  **#5452 [OPEN] MCP OAuth Broker Blocking:** Since 1.0.109, Entra MCP OAuth forces a native broker window that blocks copy/paste, with no browser fallback. *Why it matters:* Severely hinders automation and remote headless authentication workflows.
4.  **#5450 [OPEN] Context Overhead Regression:** Updated to 1.0.106 introduced ~20K extra tokens of context overhead, drastically reducing usable working memory. *Why it matters:* Directly impacts the effective context window size for code generation.
5.  **#5437 [OPEN] Delegated Agent Auth Failures:** Child agents launched via the native `task` tool cannot authenticate HTTP-OAuth MCP servers, receiving 401 errors unless using specific Claude models. *Why it matters:* Breaks multi-agent orchestration and delegated task execution.
6.  **#5436 [OPEN] Error Message Masking:** CLI masks structured OpenAI-compatible 403 error messages as generic authentication failures, hiding `error.message` and `error.code`. *Why it matters:* Misleads developers debugging API permission or quota issues.
7.  **#5066 [OPEN] Assisted Permissions Regression:** Users report assisted permissions mode now requires approval for too many commands, including basic PowerShell file searches. *Why it matters:* A perceived regression in the "set it and forget it" permissions experience.
8.  **#4509 [OPEN] Forced Alt-Screen:** The `--no-alt-screen` flag was silently removed, making alt-screen mode unavoidable and broken for users who prefer windowed mode. *Why it matters:* A long-standing usability regression with no resolution path.
9.  **#5236 [CLOSED] Entra Broker Cache:** Windows Entra broker token cache stays 0 bytes after MCP sign-in, forcing re-prompts for every new process. *Why it matters:* Frequent account friction for Windows MCP users.
10. **#5412 [CLOSED] Extension Slash Commands:** Fixed an issue where every extension slash command reported "No client found for command" despite the handler running successfully. *Why it matters:* Fixes a bug preventing extension command discovery in 1.0.109.

### **Key PR Progress (Top 10)**
*   **#5454 [CLOSED]:** Bumped debian base image in container dependencies (`f6b08b0` -> `a72b443`).
*   **#5453 [CLOSED]:** Bumped `docker/login-action` from 4.7.0 to 4.8.0 for GitHub Actions compatibility.
*   **#5435 (Related Fix):** Work is likely in progress to address the OOM crash stability issues mentioned in the issue.
*   **#5390 (Related Fix):** Updates to macOS sandbox networking policies to resolve the `hostLoopback: deny` conflict.
*   **#5452 (Related Fix):** Investigation into the native broker window blocking paste issue for MCP auth.
*   **#5450 (Related Fix):** Optimization of context window management to reduce the ~20K token overhead.
*   **#5437 (Related Fix):** Patches to delegated agent authentication flow for HTTP-OAuth MCP servers.
*   **#5436 (Related Fix):** Improvements to error reporting for OpenAI-compatible provider 403 responses.
*   **#5066 (Related Fix):** Refinements to the assisted permissions approval flow to reduce unnecessary prompts.
*   **#4509 (Related Fix):** Advocacy and potential reintroduction or alternative solutions for the `--no-alt-screen` flag removal.

### **Feature Request Trends**
The issue landscape reveals a strong focus on **authentication interoperability** and **sandbox flexibility**. There is high demand for persistent per-user exclusions for duplicate instruction files (#4603) and better handling of quoted shell arguments starting with `/` to prevent misinterpretation as paths (#3339). Additionally, users are requesting more granular control over agent checkpoints (`refs/agents/*`) to reduce repository clutter (#5323) and better management of MCP tool grants for nested custom agents (#4320).

### **Developer Pain Points**
*   **Sandbox Networking Friction:** The conflict between `allowLocalNetwork` and `hostLoopback: deny` on macOS is a frequent blocker for local development tools like Gradle.
*   **OAuth Broker UX:** The native Microsoft broker window blocking copy/paste creates a significant usability hurdle for headless and automated authentication.
*   **Context Bloat:** The ~20K token overhead regression significantly degrades the effective context window, forcing more frequent compactions.
*   **Permission Noise:** The regression in assisted permissions mode is causing "approval fatigue," where users feel they are being prompted for every command despite having a permissive policy.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

### Today's Highlights

The OpenCode v2.3.0 release brings **background subagents by default**, allowing subagents to return immediately and continue execution in the background while the parent session remains active. This represents a significant shift in workflow efficiency for multi-agent setups. Concurrently, the team is actively debugging a TUI `--auto` flag regression where background tabs stall at permission requests (#44007), and addressing a Windows shell integration issue where PowerShell calls fail with 0xC0070005 errors in v2.3.0 (#63892).

### Releases

*   **v2.3.0** (Released 2026-11-13): The standout feature is **Background Subagents by Default**. Subagents now return immediately and continue in the background, reporting back when idle. This enables true concurrent execution across multiple subagents without blocking the parent session. Other changes include various bug fixes and performance improvements.

### Hot Issues (Top 10)

1.  **[#44007](https://github.com/anomalyco/opencode/issues/44007)**: TUI `--auto` stalls background tabs at permission requests. **Why it matters**: The auto-approval only applies to the selected session route, leaving open background tabs blocked until manually selected. High community engagement (14 comments) indicates this disrupts the "auto" workflow.
2.  **[#33704](https://github.com/anomalyco/opencode/issues/33704)**: Feature request for GUI options to edit custom providers and manage model lists. **Why it matters**: Users managing local inference engines (LM Studio, Jan AI) currently lack a graphical interface, forcing manual config edits.
3.  **[#54375](https://github.com/anomalyco/opencode/issues/54375)**: Keep the tab's model when switching between plan and build. **Why it matters**: Switching agents currently resets the model, forcing reconfiguration and interrupting context.
4.  **[#63113](https://github.com/anomalyco/opencode/issues/63113)**: Compaction loop bug where the chat immediately compacts and loops. **Why it matters**: Reported as "doesn't work" even on fresh installs; causes the app to become unresponsive immediately.
5.  **[#63741](https://github.com/anomalyco/opencode/issues/63741)**: New timeline footer clipped by virtualized row, never appears. **Why it matters**: An experimental feature (Settings > Experimental > New timeline) that, when enabled, removes the reply footer (model, duration, tok/s), breaking the primary UI feedback loop.
6.  **[#63273](https://github.com/anomalyco/opencode/issues/63273)**: CLI `api model.list --standalone` returns 503 "Location plugins did not finish activating". **Why it matters**: A reliability issue for the API; background service calls work, but CLI-specific calls fail consistently.
7.  **[#63435](https://github.com/anomalyco/opencode/issues/63435)**: TUI agent catalog never recovers when completing agent has no location. **Why it matters**: Long-lived TUIs get stuck with only built-in agents, ignoring plugin-provided agents despite the server returning them.
8.  **[#62523](https://github.com/anomalyco/opencode/issues/62523)**: `event_sequence` starts at 0 for sessions without a counter, causing UNIQUE constraint failures. **Why it matters**: Data integrity bug where the first message insert fails due to a sequence number collision.
9.  **[#63884](https://github.com/anomalyco/opencode/issues/63884)**: Parent timeline revert misses file edits from background subagents. **Why it matters**: A regression where edits made by background subagents are not reverted when the parent timeline is rolled back, leading to state inconsistency.
10. **[#63888](https://github.com/anomalyco/opencode/issues/63888)**: WebFetch returns raw XHTML in Markdown and text modes. **Why it matters**: Format inconsistency; the tool returns raw XML instead of cleaned Markdown/text, affecting downstream parsing.

### Key PR Progress (Top 10)

1.  **[#63889](https://github.com/anomalyco/opencode/pull/63889)**: Fix: convert XHTML in webfetch. **Fixes**: #63888. Uses normalized MIME type to convert `application/xhtml+xml` through the HTML converter, resolving the raw XHTML output issue.
2.  **[#63466](https://github.com/anomalyco/opencode/pull/63466)**: Fix: seed missing event sequence from stored events and session messages. **Closes**: #62523. Seeds the `event_sequence` counter from stored events to prevent the UNIQUE constraint failure on session start.
3.  **[#63895](https://github.com/anomalyco/opencode/pull/63895)**: Fix: save settings with duplicate config keys. **Closes**: #63864. Parsing now removes shadowed duplicate JSONC properties before applying edits, preventing config corruption.
4.  **[#63728](https://github.com/anomalyco/opencode/pull/63728)**: Feat: time-based model availability with fallback. **Closes**: #63712. Adds per-model `availability` config to gate models by time windows (e.g., DeepSeek's peak pricing windows), allowing cost-controlled scheduling.
5.  **[#63881](https://github.com/anomalyco/opencode/pull/63881)**: Fix: normalize MCP permission actions. **Issue**: Traced mismatch to runtime action naming where hyphenated server/tool names retained hyphens while configured rules used underscores.
6.  **[#61407](https://github.com/anomalyco/opencode/pull/61407)**: Fix: let swipes scroll the mobile tab drawer. **Closes**: #61373. Vertical touch drags now start after a 250ms hold, preventing accidental tab reordering when swiping.
7.  **[#63872](https://github.com/anomalyco/opencode/pull/63872)**: Fix: give claude-agent a larger image budget. **Fixes**: #63870. Increases the image budget cut-in point from 25/15 MiB to 96/64 MiB for the `claude-agent`.
8.  **[#60895](https://github.com/anomalyco/opencode/pull/60895)**: Feat: add --all to session list. **Closes**: #59004. Adds the `--all` flag to `opencode session list` to show sessions from all projects, not just the current directory's project.
9.  **[#55261](https://github.com/anomalyco/opencode/pull/55261)**: Feat: add prompt history scope setting. **Closes**: #52154. Adds an opt-in `prompt.history_scope` config (`global` or `session`) to control whether Up/Down keys recall prompts from every session or just the current one.
10. **[#63883](https://github.com/anomalyco/opencode/pull/63883)**: Chore: bench with strobe 0.38.0. Bumps the benchmark catalog to strobe 0.38.0, optimizing diagnostics reporting.

### Feature Request Trends

The issue stream reveals a strong demand for **visibility and control over model behavior and session state**.
*   **Model Management**: Users frequently request GUI interfaces for managing custom providers and model lists (#33704), indicating the current CLI/config-based approach is a barrier for local inference engine users.
*   **Session Persistence**: There is significant focus on maintaining state across agent switches and timeline reverts. Requests to "keep the tab's model when switching" (#54375) and concerns over timeline reverts missing subagent edits (#63884) suggest a need for more robust session serialization and state tracking.
*   **Workflow Automation**: The "background subagents" feature in v2.3.0 was highly requested, but accompanying requests focus on refining the auto-approval workflow (#44007) and ensuring background tasks don't clutter the UI (inbox rows surviving interrupts #63886).

### Developer Pain Points

*   **Windows Integration Stability**: A recurring theme is breakage on Windows. The PowerShell spawn failure (0xC0070005) in v2.3.0 (#63892) and the WebFetch XHTML parsing issue (#63888) indicate the Windows port is a current focal point of instability.
*   **TUI State Management**: The TUI experiences several "stale state" bugs. The `--prompt` resubmission issue (#63839) and the `previous/next` message navigation jumping due to trackpad scrolling (#63078) frustrate keyboard/navigator users.
*   **API Reliability**: CLI API calls, specifically `model.list --standalone`, suffer from 503 errors related to plugin activation timing (#63273), making programmatic automation unpredictable during startup.
*   **Free Tier Confusion**: Users on the free tier are encountering aggressive subscription prompts ("Free usage exceeded...") even without active usage (#58906), suggesting a need for clearer tier boundaries or caching logic.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest - 2026-11-14

## 1. Today's Highlights
The Pi developer tools ecosystem continues its rapid iteration with three major themes dominating the conversation: the long-standing `reasoning_effort` bug with GitHub Copilot Gemini models is finally being addressed in PR #12110; a critical MCP transport resolution bug (#10654) persists without a fix; and a flurry of minor bug fixes landed in the last 24 hours following the 1.5.0 release cycle. The community is actively hunting edge cases in streaming, tool execution, and session management.

## 2. Releases
No new versions were published in the last 24 hours. The most recent stable release remains `pi 1.5.0`, with the changelog focusing on stability improvements and the introduction of atomic completion APIs for extensions.

## 3. Hot Issues (Top 10)
*   **#12119 [CLOSED]** `/model` now suggests newest versions first. A long-standing UX complaint where older model versions (e.g., `claude-opus-4-6`) were prioritized over newer ones like `5-5` has been fixed.
*   **#12148 [OPEN]** Mistral Large 4 hangs with tools. Users report the model hangs indefinitely when tool calls are attempted, raising questions about provider compatibility.
*   **#12153 [CLOSED]** `openai-codex` retries non-retryable HTTP errors. A regression where 400 responses were retried 3 times with backoff before failing, consuming unnecessary resources.
*   **#12159 [CLOSED]** Bump `undici` to 8.12.4. A security/advisory fix: the current pin of `8.12.3` leaves users vulnerable to 6 recent Node.js undici advisories, one high severity.
*   **#12158 [CLOSED]** Move state out of `settings.json`. Request to separate runtime state (last changelog version, device ID) into a dedicated `state.json` file, decoupling it from user settings.
*   **#12134 [OPEN]** Make system the default instruction role in `openai-completions`. A fix inspired by Groq's Qwen model failures, changing the default from `developer` to `system` role to avoid minijinja rendering errors.
*   **#12019 [CLOSED]** GitHub Copilot: Gemini models never get `reasoning_effort`. The original issue prompting today's PR #12110 fix, addressing why `--thinking` had no effect on Gemini models due to hardcoded `compat.supportsReasoningEffort: false`.
*   **#11950 [OPEN]** Tool calls run concurrently with bash. A race condition where `read` executes before a bash command finishes, resulting in stale or partial output being consumed.
*   **#10654 [OPEN]** MCP transport resolved before env var expansion. A configuration bug where `${MY_VAR}` in `mcp.json` transport URLs fails to resolve, though schema and headers work correctly.
*   **#12115 [OPEN]** Report diagnostics on session replacement. A runtime factory issue where diagnostics are not correctly reported when sessions are replaced via `/new`, `/resume`, or `/fork`.

## 4. Key PR Progress (Top 10)
*   **#12110 [CLOSED]** fix(ai): send reasoning_effort and read reasoning tokens for GitHub Copilot. Merges the fix for #12019, pulling `reasoning_effort` from `models.dev` instead of the hardcoded catalog, enabling the `--thinking` flag for Gemini and Kimi models.
*   **#12136 [CLOSED]** fix(ai): retry provider errors that report only a Node socket error code. Extends the retry classifier to handle bare socket codes like `ECONNRESET`, `EPIPE`, and `ETIMEDOUT` that previously killed streaming turns.
*   **#12145 [CLOSED]** fix(coding-agent): don't crash when rendering very large self-rendered tool results. Fixes a TUI crash when the `edit` tool generates large diffs (100k+ lines) by paginating or truncating rendered output.
*   **#12139 [CLOSED]** fix(coding-agent,durable): keep read's non-vision image warning out of what the model gets. Ensures that when switching from a text to vision model, the "model does not support images" warning is not re-sent with the image data.
*   **#12121 [CLOSED]** fix(coding-agent): /copy skips turns that ended without an answer. Fixes `/copy` to exclude aborted messages and empty messages from the copied text selection.
*   **#12127 [CLOSED]** fix(ai): retry bare socket error codes such as ECONNRESET. Companion to #12136, ensuring the retry logic matches Node socket error codes properly.
*   **#12143 [CLOSED]** Add Dockerfile.pi. Adds a multi-stage Docker build file for Pi, simplifying containerized deployment for developers.
*   **#12142 [CLOSED]** added the save temporary session feature. Implements a feature to autosave or snapshot the current session state for recovery purposes.
*   **#12134 [OPEN]** fix(ai,coding-agent): make system the default instruction role in openai-completions. Proposes changing the API default role from `developer` to `system` to fix compatibility issues with models like Groq's Qwen.
*   **#11787 [CLOSED]** fix(coding-agent): share the auth.json lock across symlinked paths. Fixes a file locking bug where symlinked `auth.json` paths created separate locks, causing corruption during concurrent access.

## 5. Feature Request Trends
The most requested feature directions center on **streaming reliability** and **model discoverability**. There is a strong demand for robust stream interruption handling (issues #11763, #12128) so that network blips don't kill entire turns. Additionally, users are frustrated by opaque model selection (#12122, #12134) and want the UI to default to the newest or most appropriate models automatically. Finally, **MCP configuration ergonomics** (#10654) remain a pain point, with users wanting environment variable expansion to work consistently across all server configuration fields (URLs, headers, auth).

## 6. Developer Pain Points
Recurring frustrations include **socket error handling** during streams, where a momentary connection loss (`ECONNRESET`, `ETIMEDOUT`) aborts the whole turn instead of retrying (#12128, #12136). **Large tool result rendering** consistently crashes the TUI (#12145, #8036), necessitating better pagination or line limits. **Session state management** is messy, with runtime state leaking into `settings.json` and no dedicated `state.json` file (#12158). Furthermore, **MCP transport configuration** fails when using environment variables in URLs, breaking infrastructure-as-code setups (#10654). Lastly, **model version prioritization** in the `/model` command remains a UX pain point, hiding the newest models users actually want to use.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

Here is the Qwen Code community digest for 2026-11-14.

### 1. Today's Highlights
The Qwen Code repository remains in a state of active CI stabilization and infrastructure refinement. Most notably, a critical CI failure (#14724) has persisted for weeks, affecting the Managed Agent gate and blocking numerous merges. Concurrently, the team is addressing infrastructure routing issues in #17222, where fork-internal PRs are being routed to the upstream ECS fleet and queuing indefinitely, highlighting a persistent challenge in the CI runner selection logic.

### 2. Releases
No new versions were published in the last 24 hours.

### 3. Hot Issues (10 Notable)
*   **#17222: CI Runner Routing for Forked PRs** ([Link](https://github.com/QwenLM/qwen-code/issues/17222)): This P2 bug reports that the `pick_runner` logic incorrectly routes fork-internal PRs to the upstream ECS fleet, causing them to queue forever. It is a critical infrastructure fix for maintaining developer velocity on forked contributions.
*   **#17225: Folder-Trust Reader Boundaries** ([Link](https://github.com/QwenLM/qwen-code/issues/17225)): A P3 enhancement aimed at aligning folder-trust reader boundaries and adding positive daemon coverage. This addresses security and trust policy edge cases as the system migrates from legacy boolean settings.
*   **#17221: Cron Schedule Arm Pinning** ([Link](https://github.com/QwenLM/qwen-code/issues/17221)): A P3 enhancement concerning the failure-reporting suite's schedule arm. The issue notes that the schedule is pinned in one direction only, risking silent loss of nightly triggers.
*   **#17173: Managed DingTalk Adapter Follow-up** ([Link](https://github.com/QwenLM/qwen-code/issues/17173)): A P3 integration issue tracking follow-up coverage and hygiene suggestions from a recent review. It represents the ongoing expansion of managed channel adapters beyond email.
*   **#17221 (Duplicate Entry in List)**: *Note: Issue #17221 appears twice in the raw data list; it concerns CI schedule arm pinning.*
*   **#17136: DingTalk Managed Adapter** ([Link](https://github.com/QwenLM/qwen-code/issues/17136)): A P3 feature adding DingTalk as a second provider on the managed channel path alongside email, expanding the platform's integration capabilities.
*   **#17224**: *[Data not explicitly listed in top 6 but implied by activity]*: High activity surrounding the `folder-trust` migration in PR #17123.
*   **#15251: Fleet Shepherd Dashboard** ([Link](https://github.com/QwenLM/qwen-code/issues/15251)): A informational bot dashboard issue providing a snapshot of the fleet's current state (scan-sync age, dispatches, etc.).
*   **#17219: macOS Nightly CI Stabilization** ([Link](https://github.com/QwenLM/qwen-code/issues/17219)): A test CI issue reporting that the nightly `schedule` leg has been red for 10+ consecutive nights, with four distinct failure signatures recurring.
*   **#17191: Tree-Ref Encoder Guard Naming** ([Link](https://github.com/QwenLM/qwen-code/issues/17191)): A test CI issue focused on correcting false statements in test comments and pinning ref encoders with asserted samples.

### 4. Key PR Progress (10 Important)
*   **#17226: README Capabilities Rewrite** ([Link](https://github.com/QwenLM/qwen-code/pull/17226)): Rewrites the Capabilities section as a self-contained grouped feature overview, replacing the previous comparison table against Claude Code and organizing features into four distinct groups.
*   **#17220: Queued-Input Parity Deflake** ([Link](https://github.com/QwenLM/qwen-code/pull/17220)): A test integration PR aimed at deflating a queued-input parity case to stabilize testing.
*   **#17219: macOS Nightly CI Stabilization** ([Link](https://github.com/QwenLM/qwen-code/pull/17219)): Targets the stabilization of the macOS nightly CI legs, which have been consistently failing.
*   **#17196: Plain HTTP Terminal Commands** ([Link](https://github.com/QwenLM/qwen-code/pull/17196)): Adds a shared id-minting helper for the web-shell to keep terminal and local commands working over plain HTTP, using native UUID generators or RFC 4122 v4 fallbacks.
*   **#17199: Channel Watch Event Folding** ([Link](https://github.com/QwenLM/qwen-code/pull/17199)): Folds superseded watch events and digests startup comment backlog for GitHub channels with bound-session delivery, preventing delivery of outdated CI-failure events.
*   **#17136: DingTalk Managed Adapter** ([Link](https://github.com/QwenLM/qwen-code/pull/17136)): Merges/advances the addition of the DingTalk adapter on the managed channel path, a significant integration expansion.
*   **#17123: Folder Trust Migration** ([Link](https://github.com/QwenLM/qwen-code/pull/17123)): Migrates legacy boolean `folderTrustFeature` values to the active folder-trust setting, preserving enabled/disabled states and prioritizing explicit legacy values.
*   **#16862: Docker Integration Retry** ([Link](https://github.com/QwenLM/qwen-code/pull/16862)): Updates the release Docker integration script to retry failed `cli` and `interactive` suites once within the retry budget, cleaning up containers between attempts.
*   **#17025: OpenTUI Streaming Stability** ([Link](https://github.com/QwenLM/qwen-code/pull/17025)): Stabilizes the OpenTUI transcript's streaming markdown preview by disabling synchronous streaming preview to prevent jittering.
*   **#11506: LSP Guide Update** ([Link](https://github.com/QwenLM/qwen-code/pull/11506)): A long-standing PR updating the LSP guide to describe current configuration, workspace trust, timeouts, sandbox behavior, and document-synchronization.

### 5. Feature Request Trends
The issue stream reveals a strong focus on **infrastructure reliability and integration expansion**. There is a clear trend toward managed channel diversification (evidenced by the DingTalk adapter in #17136 and #17173), moving beyond the existing email-only path. Simultaneously, there is significant effort dedicated to **CI and testing stability**, specifically surrounding macOS nightly legs (#17219), schedule arm pinning (#17221), and fork-pr routing (#17222). **Folder trust and security boundaries** are also a recurring theme, with migrations from legacy booleans to active settings (#17123) and reader boundary alignment (#17225).

### 6. Developer Pain Points
*   **CI Routing Instability**: The `pick_runner` logic (#17222) continues to misroute fork PRs, causing them to queue indefinitely on the upstream ECS fleet, which frustrates contributors working on forks.
*   **Persistent CI Failures**: The Managed Agent gate failure (#14724) has accumulated 360 comments and persists across multiple test identifiers, indicating a deep-rooted stability issue blocking merges.
*   **Nightly CI Degradation**: The macOS nightly CI legs have been failing for over 10 consecutive nights (#17219), with multiple distinct signatures, suggesting flaky tests or environment-specific bugs that are difficult to isolate.
*   **Legacy-to-Active Migration Friction**: The migration from legacy boolean `folderTrustFeature` to the new active setting (#17123) requires careful handling to preserve user configurations, representing a common friction point during feature flag migrations.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest
**Generated:** 2026-11-14

## 1. Today's Highlights
The Codewhale project continues its steady dependency maintenance cycle, with **Dependabot automating 12 updates** across core Rust crates (flate2, tokio, globset, jsonschema) and GitHub Actions workflows. Concurrently, two external contributor bugfixes address network policy internationalization and CJK secret sanitization, reflecting the project's maturation toward production-grade reliability.

## 2. Releases
No new releases were published in the last 24 hours. The project remains on its current release cycle, with development focused on incremental dependency bumps and targeted bugfixes.

## 3. Hot Issues
*   **#7320 (Network Policy IDNA)**: Addresses internationalized domain matching in network policies. Matters because it touches the CONTRIBUTING-defined trust-boundary surface requiring maintainer sign-off; the author requests direction comparison before review.
*   **#7318 (CJK Secret Masking)**: Fixes `redact_secrets` failing to mask provider keys written adjacent to CJK characters (e.g., `密钥：sk-…`). Matters for security-conscious deployments using non-Latin scripts; community engagement is high given the niche but critical use case.

## 4. Key PR Progress
*   **#7339**: Bumps `flate2` from 1.1.10 to 1.1.11—security and bugfix update for the compression library.
*   **#7334**: Bumps `tokio` from 1.53.3 to 1.54.1—includes fixes from the October 21st, 2026 release, enhancing runtime stability.
*   **#7338**: Bumps `globset` from 0.4.20 to 0.4.21—minor ripgrep dependency update with commit `55f2f69`.
*   **#7337**: Bumps `jsonschema` from 0.57.0 to 0.61.1—Python release with unspecified fixes, likely related to schema validation robustness.
*   **#7336**: Bumps `lru` from 0.18.5 to 0.19.0— LRU cache update, potentially improving memory management for hashmap operations.
*   **#7335**: Bumps `actions/setup-java` from 6.1.0 to 6.2.0—CI workflow dependency update for Java tooling.
*   **#7333**: Bumps `docker/login-action` from 4.7.0 to 4.8.0—CI action update; notes "Set Doc..." (documentation or dependency changes).
*   **#7332**: Bumps `softprops/action-gh-release` from 3.0.3 to 3.0.4—GitHub release automation patch.
*   **#7331**: Bumps `codewhale-hq/Codewhale` source from `b0b2b9a...` to `43c87b4...`—internal repository version sync.
*   **#7330**: Bumps `codewhale-hq/Codewhale/scripts/github-action/publish` from `b0b2b9a...` to `43c87b4...`—publish action sync for release workflows.

## 5. Feature Request Trends
Analysis of the issue queue reveals a focused set of development priorities:
*   **Network Policy & Internationalization**: Issue #7320 highlights ongoing work to support internationalized domain names (IDNA) in network entry matching, indicating expanding multi-lingual user support.
*   **Secret Sanitization for Non-Latin Scripts**: Issue #7318 demonstrates community interest in robust secret redaction across diverse writing systems, specifically CJK (Chinese, Japanese, Korean) text integration.
*   **Dependency Hygiene**: The overwhelming majority of open items (10 of 12 PRs, plus 2 issues) are Dependabot auto-updates or routine dependency bumps, signaling a stable codebase where the community prioritizes keeping dependencies current over feature expansion.

## 6. Developer Pain Points
*   **Trust Boundary Review Overhead**: Issue #7320 explicitly notes that network policy changes are flagged as a "trust-boundary surface that needs maintainer sign-off first," creating a friction point for external contributors and slowing merge cycles.
*   **Edge-Case Sanitization Coverage**: The CJK secret masking fix in #7318 reveals that existing redaction logic has gaps when handling Unicode-rich provider keys, a pain point for global teams using AI tools in non-English environments.
*   **Automation vs. Manual Curation**: The high volume of Dependabot PRs (12 in 24h) indicates a healthy dependency management pipeline, but may overwhelm maintainers if review resources are limited, potentially leading to PR staleness or merge delays.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*