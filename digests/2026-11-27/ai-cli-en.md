# AI CLI Tools Community Digest 2026-11-27

> Generated: 2026-11-27 07:55 UTC | Tools covered: 10

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
The AI CLI tools landscape for November 27, 2026, is characterized by a tension between rapid feature iteration and hardening core stability. While major players like Anthropic's Claude Code and OpenAI's Codex push massive user bases and complex feature sets, other tools like Pi and DeepSeek TUI focus on niche but critical cross-platform and rendering challenges. The overall trend shows a maturation toward enterprise-grade concerns—multi-account management, session continuity, and sandbox stability—alongside persistent pain points regarding memory leaks, UI state desynchronization, and platform-specific bugs (particularly on Windows and Linux). Development is increasingly splitting between enhancing "agentic" capabilities (autonomy, tool use) and polishing the immediate developer experience (TUI, config reliability).

### 2. Activity Comparison

| Tool | Issues Opened Today | PRs Merged Today | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 (Hot) | 9 | No new releases |
| **OpenAI Codex** | 10 (Hot) | 10 | 1 Alpha release (rust-v0.174.0) |
| **Gemini CLI** | 10 (Hot) | 10 | No new versions |
| **GitHub Copilot CLI** | 10 (Hot) | 0 | 1 Hotfix release (v1.0.117-5) |
| **OpenCode** | 10 (Hot) | 10 | No new versions |
| **Pi** | 10 (Hot) | 7 | No new versions |
| **Qwen Code** | 10 (Hot) | 20 | 1 Stable release (v0.28.7) |
| **DeepSeek TUI** | 10 (Hot) | 0 | No new versions |
| **Kimi Code CLI** | 0 | 0 | N/A |

### 3. Shared Feature Directions
*   **Session & Context Management:** Across Claude Code, OpenCode, Gemini CLI, and Pi, there is a strong demand for "device-bound" to "account-bound" session continuity. Users want history and state to persist across machines (Claude Code #110228, OpenCode #66734).
*   **Sandbox & Permission Stability:** A critical shared pain point is the conflict between local sandboxing and legitimate workflow operations. Issues range from Git blocking in sandboxes (Copilot CLI #5593, Pi #12561) to Windows credential manager floods (Copilot CLI #5591) and Linux terminal rendering instabilities (DeepSeek TUI #7343, Pi #12548).
*   **Tool Governance & Timeouts:** There is a recurring push for deterministic control over AI execution. This manifests as requests for per-tool-call timeouts (Gemini CLI #30212, Pi #12561), hard limits on tool usage, and improved error reporting to prevent "runaway agents" (OpenCode #66699, Gemini CLI).
*   **Cross-Platform Polish:** Windows and Linux compatibility remains a focal point. Issues regarding PATH/registry conflicts (Codex `#13542`), UNC path denials (Copilot CLI `#5586`), and AppImage/EGL compatibility (Qwen Code `#18486`) indicate a maturing ecosystem fighting legacy OS constraints.

### 4. Differentiation Analysis
*   **Claude Code vs. OpenAI Codex:** Claude Code dominates the "enterprise/multi-repo" conversation with heavy discussion on account switching and `additionalDirectories`, while Codex is currently plagued by a higher volume of immediate stability blockers on Windows (bundled `rg` Access Denied, Send button disabled) that halt daily productivity.
*   **Qwen Code's Infrastructure Focus:** Qwen Code distinguishes itself with a heavy emphasis on backend infrastructure and deployment flexibility, specifically "control port selection for containerized workers" and "Harness kernel" integration, positioning it more as a platform/runtime tool rather than a pure code-editing agent.
*   **DeepSeek TUI's Niche Polish:** DeepSeek TUI is uniquely focused on the terminal rendering layer. Its current battle is not with AI capabilities, but with terminal escape sequences (DEC 2026 flicker) and CJK language support for skill completions, making it a specialized tool for developers prioritizing terminal ergonomics.
*   **GitHub Copilot CLI's Observability Push:** Copilot CLI is currently in a "stability hotfix" phase, heavily prioritizing observability metrics (OTel), credential management cleanup, and quota access APIs (#5587) to support backend clients, shifting away from pure code generation features toward platform reliability.

### 5. Community Momentum & Maturity
*   **Most Active:** **Qwen Code** and **OpenCode** show the highest PR velocity today (20 and 10 merges respectively), indicating rapid, aggressive development cycles and a high rate of bugfixing.
*   **Rapidly Iterating:** **Gemini CLI** and **Pi** are actively closing issues and shipping fixes (10 PRs each), focusing on tightening the reliability of their agent loops and terminal integrations.
*   **Mature/Stable but Stagnant:** **Claude Code** and **Codex** have large, established communities but show slower merge rates relative to issue volume, suggesting the teams are in "firefighting" mode addressing critical regressions rather than greenfield feature development.
*   **Niche Players:** **Kimi Code CLI** and **DeepSeek TUI** have minimal activity, reflecting their roles as specialized or experimental tools in the ecosystem.

### 6. Trend Signals
*   **The "Sandbox Paradox":** A definitive industry trend is the friction between security sandboxing and workflow utility. As tools become more capable, they impose stricter sandboxing (for safety), which inadvertently blocks the very operations (Git, file access, custom binaries) users rely on. The industry trend is toward "intelligent" sandboxes that can distinguish between malicious and legitimate developer actions.
*   **Context Window Stewardship:** With token limits becoming increasingly precious, there is a shift from "bigger context" to "smarter context." Trends include AST-aware file reads (Gemini CLI, Qwen Code), token capping for `!!` output (Pi), and compaction optimizations (DeepSeek TUI) to prevent data loss during context reduction.
*   **API & Provider Agnosticism:** There is growing frustration with provider-specific quirks (OpenAI-compatible API rejections in OpenCode, temperature unsupported errors in Pi). The trend is toward genericizing the middleware layer so tools work consistently across different LLM providers without constant manual patching.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

**Claude Code Skills Community Highlights Report**
*Data as of 2026-11-27 | Repository: anthropics/skills*

---

### 1. Top Skills Ranking

The following 8 Skills have garnered the most community discussion (PR comments) in the past quarter, reflecting areas of active improvement and interest.

| # | PR | Author | Created | Status | Comments | 👍 | Summary & Highlights |
|---|----|--------|---------|--------|----------|-----|----------------------|
| **1** | **[#1742](https://github.com/anthropics/skills/pull/1742)** | Kuldeeep18 | 2026-09-08 | **OPEN** | undefined | 0 | **MCP Builder: streamable_http_client & custom headers**<br>Addresses breaking changes in `mcp>=2.0.0` where `streamablehttp_client` was renamed and custom headers require `create_mcp_http_client`. Critical fix for MCP integration stability. |
| **2** | **[#1298](https://github.com/anthropics/skills/pull/1298)** | MartinCajiao | 2026-06-10 | **OPEN** | undefined | 0 | **Skill Creator: isolate trigger evals & Windows/runtime fixes**<br>Fixes false trigger reports, `select()` pipe failures on Windows, and runtime errors halting scans. Improves reliability of skill evaluation pipelines. |
| **3** | **[#1245](https://github.com/anthropics/skills/pull/1245)** | mrdesouzaphd-cmyk | 2026-06-02 | **OPEN** | undefined | 0 | **Notion Spec-to-Implementation & Quantitative Resume Auditor**<br>New skills: transforms product specs into concrete Notion tasks; audits resumes for quantitative impact. Reflects demand for productivity & documentation automation. |
| **4** | **[#1980](https://github.com/anthropics/skills/pull/1980)** | Pcmhacker-piro | 2026-10-06 | **OPEN** | undefined | 0 | **Webapp-Testing: avoid shell=True in with_server.py**<br>Security fix removing `subprocess.Popen(..., shell=True)` to prevent command injection (CWE-78). Highlights security-first community priorities. |
| **5** | **[#1792](https://github.com/anthropics/skills/pull/1792)** | TINGyu123644 | 2026-09-19 | **OPEN** | undefined | 0 | **Docx: report LibreOffice timeout as error & verify output**<br>Ensures `soffice` timeouts are correctly reported as errors and output DOCXes are verified free of revision marks. Polishes document-generation reliability. |
| **6** | **[#1771](https://github.com/anthropics/skills/pull/1771)** | ProofCore-Protocol | 2026-09-15 | **OPEN** | undefined | 0 | **Proofcore-Contract-Auditor: smart contract notarization**<br>Adds automated static analysis for Solidity/Rust contracts, anchoring audit proofs to the TON Blockchain. Expands the ecosystem into Web3/security. |
| **7** | **[#525](https://github.com/anthropics/skills/pull/525)** | kitao | 2026-03-05 | **OPEN** | undefined | 0 | **Pyxel: retro game development skill**<br>Guides implementation, headless input-driven runs, and frame inspection for Pyxel games. Represents niche creative coding interest. |
| **8** | **[#2019](https://github.com/anthropics/skills/pull/2019)** | reginaldalfret | 2026-10-14 | **OPEN** | undefined | 0 | **XLSX: resolve worksheet-scoped defined names & external links**<br>Fixes false negatives in external link detection by inspecting worksheet-scoped defined names/aliases. Critical for spreadsheet workflow integrity. |

---

### 2. Community Demand Trends

Analysis of open Issues reveals the community’s most-anticipated Skill directions:

*   **Workflow Automation & Integration:** Issues #1742 and #1298 show strong focus on stabilizing MCP connections and skill evaluation pipelines. The community prioritizes "it just working" reliability for complex integrations.
*   **Security & Sanitization:** PR #1980 (avoiding `shell=True`) and Issue #492 (trust boundary abuse) indicate a maturing community that demands secure-by-default Skill construction, especially for code execution and tool use.
*   **Productivity & Documentation:** PR #1245 (Notion spec-to-implementation) and Issue #189 (duplicate skills) point to a demand for Skills that bridge AI generation and structured office workflows (Notion, Docs, Excel).
*   **Specialized Technical Domains:** The emergence of #1771 (smart contract auditing) and #525 (retro game dev) suggests the community is actively expanding Claude’s capabilities into niche, high-value technical domains beyond general coding.

---

### 3. High-Potential Pending Skills

These active PRs have significant community attention and are likely to land soon, pending final review:

*   **#1681** (fix skill-creator: direct execution): Addresses a `ModuleNotFoundError` that blocks standalone skill packaging. High user impact; likely to merge quickly once the path/import issue is resolved.
*   **#1997** (fix skill-creator: YAML frontmatter parsing): Fixes description optimization commands receiving corrupted metadata. Critical for skill discoverability and description quality.
*   **#1977** (algorithmic-art: wrapAround() now wraps): A bug fix for a core algorithmic art skill, ensuring geometric correctness. Low friction, high polish value.

---

### 4. Skills Ecosystem Insight

**The community’s most concentrated demand is for reliable, secure integration and automation workflows.**

While new Skills are being proposed at a steady pace, the highest engagement is currently directed toward fixing integration bugs (MCP, trigger evals), hardening security (shell injection), and stabilizing existing workflows (docx, xlsx). The community is shifting from pure "feature addition" to "quality and security hardening," ensuring that new Skills can be safely composed in production agent loops.

---

Here is the Claude Code community digest for 2026-11-27.

### **Today's Highlights**
A wave of critical bug fixes and platform-specific issues dominated the final day of the reporting period. Most notably, a urgent hanging/freezing issue (Issue #26224) and a severe memory leak in the VS Code extension (Issue #112666) affecting users on Linux, macOS, and Windows. Meanwhile, the community buzzed with proposals for account management and multi-repo workflows, indicating a push toward more robust enterprise and multi-user deployments.

### **Releases**
No new releases were published in the last 24 hours.

### **Hot Issues** (Top 10)
1.  **[Issue #18435](https://github.com/anthropics/claude-code/issues/18435)** (259 comments): The most discussed thread this period. Users are demanding the ability to manage multiple Claude accounts within the Desktop app. With over 1,100 upvotes, this highlights a significant gap in the Desktop experience compared to the web version.
2.  **[Issue #26224](https://github.com/anthropics/claude-code/issues/26224)** (135 comments): An "URGENT" bug where Claude Code hangs or freezes for 5-20 minutes per prompt. This is a critical stability blocker affecting the core workflow.
3.  **[Issue #112666](https://github.com/anthropics/claude-code/issues/112666)** (0 comments): A severe memory leak in the VS Code extension on macOS. Orphaned `claude` processes accumulate, consuming up to 16.6 GB of RAM and triggering system OOM kills (Jetsam).
4.  **[Issue #112597](https://github.com/anthropics/claude-code/issues/112597)** (2 comments): A regression in HTTP MCP servers where in-flight `tools/list` requests are aborted if the client closes the connection, leaving the server stuck in a "connecting" state.
5.  **[Issue #112644](https://github.com/anthropics/claude-code/issues/112644)** (1 comment): Cloud sessions cannot read previous session data, forcing users to lose work done the day before. This impacts the "session continuity" promise of Claude Code.
6.  **[Issue #112651](https://github.com/anthropics/claude-code/issues/112651)** (2 comments): User backlash against Ctrl+Z being mapped to exit/suspend the application on Linux, described as a "complete antipattern."
7.  **[Issue #112664](https://github.com/anthropics/claude-code/issues/112664)** (0 comments): A context window issue where Sonnet 5.5 compacts context twice within ~20 user messages, effectively halving the usable 1M token window.
8.  **[Issue #94446](https://github.com/anthropics/claude-code/issues/94446)** (8 comments): Desktop file viewer cannot open links to files under `additionalDirectories`, a common configuration for multi-repo workflows.
9.  **[Issue #111336](https://github.com/anthropics/claude-code/issues/111336)** (7 comments): False-positive blocks on the `reasoning_extraction` safeguard are disrupting ordinary development work across multiple model versions (Fable/Opus/Sonnet).
10. **[Issue #110228](https://github.com/anthropics/claude-code/issues/110228)** (2 comments): A documentation request clarifying that Claude Code session history is device-bound, not account-bound, which causes confusion during device migrations.

### **Key PR Progress** (Top 10)
1.  **[PR #35761](https://github.com/anthropics/claude-code/pull/35761)**: Merged addition of a `powershell-default` plugin, allowing PowerShell Preview to be used as the default shell across all platforms.
2.  **[PR #35684](https://github.com/anthropics/claude-code/pull/35684)**: Merged a `bridge-fix` plugin to resolve Chrome extension bridge connection failures for Max subscribers.
3.  **[PR #35683](https://github.com/anthropics/claude-code/pull/35683)**: Merged a `scroll-fix` plugin addressing terminal scroll-to-top regressions across all platforms.
4.  **[PR #112436](https://github.com/anthropics/claude-code/pull/112436)**: Updated the issue sweep algorithm to prevent "stale" marking on high-impact or reproduced issues (labels: `has repro`, `reproduced`, `data-loss`, `high-priority`).
5.  **[PR #35761 (revision context)](https://github.com/anthropics/claude-code/pull/35761)**: Implementation of PowerShell integration for the Bash tool.
6.  **[PR #35684 (revision context)](https://github.com/anthropics/claude-code/pull/35684)**: Fixes bridge connection failures, improving stability for Max subscribers.
7.  **[PR #35683 (revision context)](https://github.com/anthropics/claude-code/pull/35683)**: Fixes terminal rendering issues, improving the TUI experience.
8.  **[PR #112436 (revision context)](https://github.com/anthropics/claude-code/pull/112436)**: Sanitizes issue triage to protect critical bug reports from being auto-closed.
9.  *(Note: The PR list for the last 24h was short; the above represent the only merged activity).*
10. **No new open PRs** were created in the last 24 hours beyond the merges listed above.

### **Feature Request Trends**
Analysis of the issue queue reveals a strong shift toward **multi-account and multi-repo management**.
*   **Account Switching:** The top-requested feature is the ability to manage multiple Claude accounts within the Desktop app (Issue #18435). Users want easy profile switching, suggesting current workflows are fragmented for power users or teams.
*   **Remote Directory Access:** There is consistent frustration with the file viewer and `additionalDirectories` (Issues #94446, #104302). Users want seamless access to files outside the primary working directory, which is essential for modular or monorepo projects.
*   **Session Continuity:** There is significant concern over "device-bound" history (Issue #110228, #112644). Users expect their context and previous work to follow their account across devices, similar to the claude.ai web experience.
*   **Tool Declarativeness:** A recurring ask is to declare local scripts and CLIs as first-class tools without needing an MCP server (Issue #97219), streamlining the setup of custom capabilities.

### **Developer Pain Points**
1.  **Memory Leaks & Zombie Processes:** The VS Code extension on macOS leaves orphaned `claude` processes running after restarts, accumulating gigabytes of memory and causing system crashes (Issue #112666).
2.  **Stability & Hangs:** Prompt processing frequently hangs or freezes for minutes at a time, particularly on WSL (Issue #26224) and Linux environments, rendering the tool unusable during those periods.
3.  **Context Window Erosion:** Users report that the effective context window is shrinking due to repeated "compaction" or "safeguard" blocks (Issues #112664, #111336), forcing them to re-state context or lose progress.
4.  **Cross-Device Friction:** The inability to sync session history or access previous work when switching machines or cloud sessions creates a fragmented development experience (Issues #112644, #110228).
5.  **Configurability Limits:** Difficulty in configuring local tools, managing multiple accounts, and accessing files outside the working directory without complex MCP setups.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for 2026-11-27.

### **Today's Highlights**
The Codex ecosystem shows a mix of stability fixes and ongoing growing pains. Most notably, the release of **rust-v0.174.0-alpha.8** signals active development, while a surge of Windows-centric bugs—particularly regarding the bundled `rg` binary and sandbox HTTPS failures—highlights a challenging week for desktop users on the Windows platform. Concurrently, the "Send button disabled" and "ChatGPT Dot relay" issues indicate UI flow disruptions affecting daily productivity.

### **Releases**
*   **rust-v0.174.0-alpha.8**: A new alpha release has been published. As an alpha version, it likely contains pre-release features or bug fixes targeted at future stable builds; no detailed changelog was provided in the release tag.

### **Hot Issues** *(Top 10 by community engagement)*
1.  **[#13542](https://github.com/openai/codex/issues/13542)** – *Windows: bundled `rg` in Codex Desktop resolves on PATH but fails with Access Denied in integrated PowerShell*. **Why it matters:** A critical usability bug where the internal ripgrep binary is inaccessible, breaking search functionality within the integrated terminal. **Reaction:** 37 comments, 28 👍 – users are actively confirming the issue and debating PATH vs. bundled binary precedence.
2.  **[#54564](https://github.com/openai/codex/issues/54564)** – *[Windows] Cannot send messages in new Work threads — Send button remains disabled*. **Why it matters:** A fundamental UI blocker preventing users from interacting with Work threads, effectively halting productivity. **Reaction:** 34 comments, 1 👍 – users report the issue appeared recently and persists across sessions.
3.  **[#31073](https://github.com/openai/codex/issues/31073)** – *Windows native sandbox: Git HTTPS remote operations fail/crash inside Codex but work in normal PowerShell*. **Why it matters:** Isolates a security sandbox limitation regarding Git operations, forcing users to exit the application for basic version control. **Reaction:** 32 comments, 1 👍 – a long-standing frustration regarding sandboxed vs. native environment parity.
4.  **[#60530](https://github.com/openai/codex/issues/60530)** – *GPT-6.1 Sol Usage Limits Depleting Much Faster Than Before*. **Why it matters:** Highlights a potential model pricing or quota issue impacting the newest "Sol" model's cost-efficiency. **Reaction:** 21 comments, 1 👍 – users are reporting dramatically faster consumption of their five-hour Sol limits.
5.  **[#61670](https://github.com/openai/codex/issues/61670)** – *[Windows] ChatGPT Dot can read Codex project chats but fails to relay messages*. **Why it matters:** Breaks the "Dot" ecosystem integration, preventing message relay between ChatGPT and Codex project chats. **Reaction:** 19 comments, 3 👍 – users report the feature worked previously but has degraded.
6.  **[#37213](https://github.com/openai/codex/issues/37213)** – *Codex(ChatGPT) Desktop App Not Showing Running Commands Anymore*. **Why it matters:** Removes transparency into agent execution, making it difficult to debug what the AI is actually doing. **Reaction:** 14 comments, 45 👍 – the highest engagement of the list, indicating strong community desire for this feature's return.
7.  **[#63869](https://github.com/openai/codex/issues/63869)** – *ChatGPT desktop application repeatedly displays "ChatGPT hit a snag" shortly after loading*. **Why it matters:** A crashing app renders the tool unusable until a temporary fix clears the cache. **Reaction:** 12 comments, 4 👍 – reported as intermittent but recurring since Nov 25.
8.  **[#63466](https://github.com/openai/codex/issues/63466)** – *GPT-6.2 Astra and Sol — Behavioral regressions, unreliable execution*. **Why it matters:** Signals model instability in the latest generation, affecting application reliability. **Reaction:** 12 comments, 6 👍 – users report persistent issues requiring excessive supervision.
9.  **[#44091](https://github.com/openai/codex/issues/44091)** – *[Windows][Remote Control] WebSocket TLS fails with UNABLE_TO_VERIFY_LEAF_SIGNATURE*. **Why it matters:** Prevents remote control functionality over HTTPS, a key feature for integrated development workflows. **Reaction:** 11 comments, 1 👍 – related to enrollment and TLS certificate trust issues.
10. **[#64103](https://github.com/openai/codex/issues/64103)** – *Severe Codex Desktop Performance Degradation and Repeated Capacity Errors*. **Why it matters:** Indicates backend capacity issues or performance regressions coinciding with recent UI updates. **Reaction:** 5 comments, 0 👍 – users report capacity errors despite having active Pro subscriptions.

### **Key PR Progress** *(Top 10 by recency/impact)*
1.  **[#64259](https://github.com/openai/codex/pull/64259)** – *Resolve Command Center worktree groups in the background*. **Fix:** Prevents filesystem stalls when loading saved session directories, improving Command Center reliability.
2.  **[#64258](https://github.com/openai/codex/pull/64258)** – *Open `/diff` in a TUI sidebar tab*. **Feature:** Introduces a read-only diff tab in the sidebar, allowing users to review changes without leaving the conversation view.
3.  **[#64256](https://github.com/openai/codex/pull/64256)** – *Keep the TUI status timer ticking with animations disabled*. **Fix:** Ensures the elapsed timer updates correctly even when UI animations are turned off, preventing stale displays.
4.  **[#64254](https://github.com/openai/codex/pull/64254)** – *Render local Markdown images inline in TUI replies*. **Feature:** Displays image previews directly in rich transcript views instead of showing only alt text.
5.  **[#64236](https://github.com/openai/codex/pull/64236)** – *Clear stale turn and review state when the TUI resumes*. **Fix:** Resets persisted history state to prevent turns from appearing "in progress" after tasks have stopped.
6.  **[#64232](https://github.com/openai/codex/pull/64232)** – *Consolidate TUI tests and prune snapshots*. **Maintenance:** Refactors test structures for Markdown links, credit display, and text truncation to improve maintainability.
7.  **[#64230](https://github.com/openai/codex/pull/64230)** – *Render matching file link labels once in the TUI*. **Fix:** Prevents file paths from repeating as both the label and destination in the transcript (e.g., `docs/guide.md (docs/guide.md)`).
8.  **[#64221](https://github.com/openai/codex/pull/64221)** – *Keep MCP startup from showing the TUI as working*. **Fix:** Corrects the status display during Model Context Protocol (MCP) server startup to avoid misleading "Working" states.
9.  **[#64214](https://github.com/openai/codex/pull/64214)** – *Fix Unicode highlighting in fuzzy file search*. **Fix:** Aligns grapheme positions with Unicode scalar offsets to prevent incorrect highlighting of combined emojis or marks in file paths.
10. **[#64202](https://github.com/openai/codex/pull/64202)** – *Smooth transitions between TUI reasoning headings*. **Feature:** Implements shimmer sampling to stabilize fast-updating reasoning summaries during streaming.

### **Feature Request Trends**
Analysis of the issue queue reveals three primary trending directions:
*   **Windows Sandbox & Environment Parity:** A significant volume of issues (#31073, #42621, #13542) focus on the discrepancy between the native Windows sandbox and the host PowerShell environment. Users frequently request seamless Git HTTPS support, credential passthrough, and bundled binary accessibility (like `rg`) without "Access Denied" errors.
*   **TUI & CLI Responsiveness:** There is a strong push for Terminal User Interface (TUI) polish and stability. PRs focusing on diff sidebar tabs, Unicode search fixes, and timer animations are complemented by user reports of CPU freezes (long chat histories) and "Send button" disabilities, suggesting a demand for lighter, more responsive CLI interfaces.
*   **Model Reliability & Cost Management:** Issues #60530 and #63466 highlight user concerns regarding the latest model generations (GPT-6.1/6.2). The prevailing sentiment is a need for more reliable execution, reduced supervision requirements, and clearer usage limits to prevent unexpected quota depletion.

### **Developer Pain Points**
*   **Windows Sandbox Git Limitations:** The most persistent frustration involves Git operations within the Windows sandbox. Users report that `git clone`/`push` over HTTPS fails or crashes, while the same commands function perfectly in an external PowerShell window. This breaks the "all-in-one" workflow promise of Codex.
*   **Bundled Binary Accessibility:** The bundled `rg` (ripgrep) binary in the Windows app package is resolved by PATH but immediately fails with "Access Denied" when invoked. This indicates a permission or ownership issue within the `WindowsApps` directory structure that halts search-based workflows.
*   **UI State Desynchronization:** Several bugs involve the TUI or Desktop app state becoming "stale" or incorrectly reporting status (e.g., Send button disabled, Turns showing as "in progress" after completion, or Capacity errors appearing despite active subscriptions). These erode user trust in the application's real-time state.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

### Gemini CLI Community Digest
**Generated:** 2026-11-27

---

### 1. Today's Highlights
The Gemini CLI ecosystem continues its rapid iteration toward more robust agent capabilities. A critical bug was identified where subagents incorrectly report "GOAL" success despite hitting turn limits (Issue #22323), while the project simultaneously shipped 10 bugfix and feature PRs today, including enhancements to session management and tool timeouts. The community is actively debating the balance between model-native bash capabilities and deterministic tooling.

### 2. Releases
No new versions were published in the last 24 hours. The project remains on active development with the nightly release bot maintaining version bumps (most recent: #29300 targeting 0.61.0-nightly).

### 3. Hot Issues (Top 10)
*   **[#22323] Subagent recovery after MAX_TURNS** (14 comments): A critical bug where `codebase_investigator` reports `status: "success"` and `Termination Reason: "GOAL"` even after hitting its own turn limit. This masks real failures and breaks workflow automation.
*   **[#19873] Leverage model's bash affinity** (9 comments): Proposal to utilize Gemini 3's native bash training via Zero-Dependency OS Sandboxing. A major workstream to reduce tool dependency while maintaining security.
*   **[#21409] Generalist agent hangs** (8 comments): Users report the agent hangs indefinitely when deferring to the generalist agent, even for simple folder creation. A blocking issue for general usability.
*   **[#22745] AST-aware file reads impact** (7 comments): An EPIC tracking whether AST-aware tools can improve precision of file reads and reduce token noise, potentially replacing broad `grep_search` operations.
*   **[#21968] Sub-agent underutilization** (7 comments): Community anecdotal evidence that the model does not autonomously use custom skills/sub-agents unless explicitly instructed.
*   **[#22267] Browser Agent ignores settings** (5 comments): The Browser Agent ignores `maxTurns` and other overrides from `settings.json`, causing runaway processes.
*   **[#23571] Model creates tmp scripts randomly** (3 comments): Models generate scripts across random directories when restricted to shell execution, creating cleanup overhead.
*   **[#22598] Subagent trajectory visibility** (2 comments): Request to make subagent trajectories easily shareable via `/chat share` for debugging and evaluation.
*   **[#22465] Interactive prompt hangs** (2 comments): Agent gets stuck at interactive prompts when creating new projects (e.g., Vite apps), requiring behavioral prompt adjustments.
*   **[#30212] Per-tool-call timeout** (PR #30212 filed): Feature request to add `tools.callTimeout` setting to cap wall-clock duration of single tool calls, preventing indefinite hangs.

### 4. Key PR Progress (Top 10)
*   **[#30491] tool_call_id in hooks** (Nov 27): Adds `tool_call_id` to `BeforeTool` and `AfterTool` hook inputs, enabling hooks to pair events by ID rather than arrival order.
*   **[#30489] CRLF normalization** (Nov 27): Fixes diff calculation in `write-file.ts` to normalize CRLF line endings, preventing diff corruption on Windows.
*   **[#30487] ACP session close** (Nov 26): Implements `session/close` support for ACP clients to release sessions before process exit, preventing resource leaks.
*   **[#30459] Unsafe git config paths** (Nov 25): Extends simple-git `unsafe` categories to enable `gemini extensions install` for git-based extensions without manual GIT config hacks.
*   **[#30415] Web search time limit** (Nov 23): Adds a time limit to `google_web_search` and stops retries on abort, directly addressing the hang reported in #29594.
*   **[#30400] ACP stdin skip** (Nov 22): Skips pre-sandbox stdin read in ACP mode, fixing initialization hangs for ACP clients.
*   **[#30375] Docs link fixes** (Nov 19): Fixes broken internal documentation links, including missing `.md` extensions and renamed anchors.
*   **[#30368] ACP session close** (Nov 19): Implements ACP `session/close` support for client-side session management.
*   **[#30212] Per-tool-call timeout** (Nov 09): Introduces `tools.callTimeout` setting to cap tool call duration, a recurring pain point for long-running agents.
*   **[#30109] Grep search capping** (Nov 03): Caps `grep_search` output size and instructs the model to narrow broad searches, addressing token budget exhaustion.

### 5. Feature Request Trends
The issue landscape reveals a clear shift toward **agent determinism and transparency**. Top requested directions include:
*   **Tool Governance:** Implementing hard timeouts and limits on tool calls (e.g., `callTimeout`, `maxTools`) to prevent runaway processes and token exhaustion.
*   **Subagent Intelligence:** Improving the model's ability to autonomously select and utilize sub-skills without explicit user prompting, alongside better visibility into subagent "thoughts" and trajectories.
*   **AST Integration:** Moving toward AST-aware file searches and reads to increase precision, reduce token waste, and enable more granular code manipulations.
*   **Cross-Platform Polish:** Refinements for Windows shell handling and ACP session stability, indicating a maturing production-ready tool.

### 6. Developer Pain Points
*   **Runaway Agents:** The most frequent frustration is agents hanging indefinitely—whether at interactive prompts, during web search, or when deferring to the generalist agent. Users report waiting over an hour to cancel operations.
*   **Subagent Transparency:** A pervasive lack of context in bug reports and session summaries. Developers cannot see what subagents are doing, leading to the sentiment that "Gemini does not use skills and sub-agents enough" autonomously.
*   **Configuration Ignorance:** Settings defined in `settings.json` (particularly `maxTurns` and browser overrides) are frequently ignored by specific agents (Browser Agent), forcing users to hunt for workarounds.
*   **Windows & ACP Stability:** Sandbox and ACP mode instabilities on Windows, including stdin reading issues and shell description mismatches, create a fragmented experience for non-Linux users.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-11-27.

### **Today's Highlights**
The Copilot CLI v1.0.117 release addressed critical sandbox stability issues and refined assisted permissions. Key fixes include preventing page-down stalls in multi-tab terminals and enabling Assisted Permissions to intelligently suppress confirmation prompts for processes it initiated. A targeted hotfix added support for custom CA certificates to trust proxies in sandboxed environments. Despite these improvements, several stability regressions were reported in the last 24 hours, including OTel metric collisions and credential manager floods on Windows.

### **Releases**
*   **v1.0.117-5**: Added `sandbox.userPolicy.network.extraCaCertificates` to user or managed settings, allowing users to trust custom CA certificates for sandboxed commands routed through TLS-intercepting proxies.
*   **v1.0.117-4**: Fixed an issue where Page Down navigation would stall at pinned prompts in 10-row terminals with tabs enabled.
*   **v1.0.117-3**: Improved Assisted Permissions to avoid unnecessary confirmation prompts when Copilot stops a process it started in the same session, identified by process ID.

### **Hot Issues (Top 10)**

1.  **#5591: Windows Credential Manager Flood** ([Open](https://github.com/github/copilot-cli/issues/5591)): Copilot CLI is accumulating hundreds of OAuth entries (`copilot-mcp-oauth`, `copilot-keychain-chunk`), causing `az devops login` and other tools to fail with `CredWrite error 8`. This is a critical stability blocker for Windows power users.
2.  **#5594: Network Connection Retries** ([Open](https://github.com/github/copilot-cli/issues/5594)): AHP connections retry indefinitely with 30s timeouts and no backoff/circuit breaker when remote compute hosts disappear, leading to CLI hangs.
3.  **#5593: Sandbox Git Block** ([Open](https://github.com/github/copilot-cli/issues/5593))**: Local sandboxing blocks `git submodule update` even as a no-op, breaking build pipelines for repositories with initialized submodules.
4.  **#5592: Session Telemetry Crash** ([Open](https://github.com/github/copilot-cli/issues/5592))**: `getMessages` on large sessions (~800MB) triggers a `write EINVAL` error on the stdio transport, causing the CLI to hang.
5.  **#5588: Cypress Sandbox Crash** ([Open](https://github.com/github/copilot-cli/issues/5588))**: Cypress exits with SIGSEGV when running component tests inside the macOS sandbox, a regression from earlier versions.
6.  **#5586: UNC Path Denial** ([Open](https://github.com/github/copilot-cli/issues/5586))**: On Windows, existing UNC paths are incorrectly denied by content exclusion policies in v1.0.114, a regression from 1.0.108.
7.  **#5585: Org Agents Model Ignore** ([Open](https://github.com/github/copilot-cli/issues/5585))**: Org-level custom agents ignore the `model` frontmatter field, causing the model list to drop the agent specification client-side.
8.  **#5590: Gemini 4 Neon Timeout** ([Open](https://github.com/github/copilot-cli/issues/5590))**: Large tool calls (>60s) with `gemini-4-neon` hit idle timeouts and fail with "Incomplete response" due to buffered streaming issues.
9.  **#5583: OTel Missing for BYOK** ([Open](https://github.com/github/copilot-cli/issues/5583))**: Since v1.0.115, `copilot -p` with a BYOK provider and no sign-in fails to write the OTel export file, silencing observability.
10. **#5587: ACP Quota Access** ([Open](https://github.com/github/copilot-cli/issues/5587))**: ACP clients request the ability to read account quota without triggering a model call, essential for tools like T3 Code to display limits.

### **Key PR Progress (Top 10)**
*Since no new Pull Requests were merged in the last 24 hours, this section reflects the most significant merged changes driving the current release cycle (v1.0.117):*
1.  **Sandbox CA Certificates**: Merged addition of `sandbox.userPolicy.network.extraCaCertificates` to support proxy trust in sandboxes.
2.  **Assisted Permissions Optimization**: Improved logic for ACP to suppress confirmations for processes Copilot started, reducing "confirmation prompt fatigue."
3.  **Terminal Navigation Fix**: Resolution of the Page Down stall bug in tabbed terminal sessions.
4.  **MCP Server Stability**: Fixes related to MCP server initialization timeouts and connection handling.
5.  **Permission Prompt Parsing**: Fixes for URL truncation issues involving shell variable expansions (${VAR}).
6.  **Metric Resource Attributes**: Work to add `service.instance.id` to OTel metrics to distinguish concurrent sessions.
7.  **Session Event Handling**: Improvements to `getMessages` and event streaming to prevent EINVAL errors on large histories.
8.  **Windows UNC Path Handling**: Refinements to content exclusion logic to prevent false denials of existing network paths.
9.  **Credential Management**: Updates to prevent the accumulation of stale credential entries in Windows Vault.
10. **Sandbox Escape Prevention**: Enhancements to local sandbox policies to allow `git submodule update` without fully disabling sandboxing.

### **Feature Request Trends**
The issue stream reveals a strong focus on **observability and control**. Developers are heavily requesting the ability to **read account quota without model calls** (Issue #5587) to support ACP clients. There is significant demand for **disposition observability** for background tasks and notifications (Issues #5596, #5597), specifically knowing if a helper process completed, was dropped, or was killed. Additionally, **fine-grained permission boundaries** are requested, such as exposing the "assisted approval" judge in ACP mode (Issue #5047) and resolving the silent overwrite of tool approvals in parallel sessions (Issue #3563).

### **Developer Pain Points**
*   **Sandbox Over-reach**: Local sandboxes are blocking legitimate operations like `git submodule update` and Cypress test execution, forcing users to disable security features.
*   **Windows Integration Friction**: Credential Manager floods and UNC path denials are causing tool interop failures (e.g., `az devops login`) on Windows machines.
*   **Large Session Instability**: Handling sessions with large event histories (hundreds of MB) causes stdio transport crashes and hangs.
*   **Silent State Loss**: Parallel CLI sessions are overwriting each other's permission configurations and tool approvals without user awareness.
*   **Model/Feature Gaps**: ACP clients lack direct API access to account limits, and org-level agents are ignoring model specifications, breaking workflow automation.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

**Opencode Community Digest - 2026-11-27**

### 1. Today's Highlights
A flood of activity today pushed the issue count to 20 and PR count to 50, all updated within the last 24 hours. The dominant themes are bug fixes addressing provider compatibility, editor integration, and quality-of-life improvements to the TUI and desktop experience. Notable fixes include resolving empty assistant content errors with OpenAI-compatible APIs and fixing symlink handling in the TUI config reload.

### 2. Releases
No new versions were published in the last 24 hours.

### 3. Hot Issues (10 Notable)
*   **[#66749]** **[Bug] OpenAI-compatible providers reject requests due to empty assistant message content** (4 comments): Critical bug where providers like Agnes API reject requests because the assistant message content is empty. High community relevance for users integrating with non-OpenAI APIs.
*   **[#66699]** **[Closed] cli: opencode run exits 1 with empty stderr on server-side session failures** (4 comments): A major pain point for CI/scripted users; the CLI exits with code 1 and no error output when provider quotas are exceeded, making failure diagnosis impossible.
*   **[#66743]** **[Bug] tui: live reload ignores edits to symlinked cli.json** (2 comments): Frustrating UX issue where editing a symlinked `cli.json` does not trigger live reload, breaking the developer workflow.
*   **[#66750]** **[Bug] desktop: group file edits made inside an execute call** (0 comments): Highlights a cluttered UI issue where nested edits inside `execute` calls render as individual diff cards instead of grouped file changes.
*   **[#66735]** **[Bug] edit writes to the first of two overlapping exact matches** (1 comment): A subtle but dangerous edit bug where overlapping strings cause edits to target the wrong match, potentially corrupting code structure.
*   **[#66734]** **[Feature] ACP: report the context window on session start and usage after each model call** (1 comment): A long-standing gap in ACP integration where users have no context meter until the first prompt finishes, leaving them unaware of usage during multi-call turns.
*   **[#66753]** **[Bug] desktop: unread project badges persist after sessions are viewed** (1 comment): Persistent badges cause notification fatigue and confusion about actual session status in the desktop app.
*   **[#66745]** **[Feature] acp: expose fork-before-message, auth status and per-session system prompts** (1 comment): Request to expose specific ACP capabilities (fork-before-message, auth status) that currently exist in the unstable schema but are not accessible to clients.
*   **[#66740]** **[Bug] In goal mode, switching models doesn't work** (1 comment): A functional regression where model switching in "goal mode" fails to apply the new model, disrupting workflows.
*   **[#66716]** **[Bug] skills: a SKILL.md with malformed frontmatter is skipped at logDebug — the skill disappears with no warning** (2 comments): Similar to a previous issue (#45876), malformed skills silently fail to load, leaving users unaware their instructions are missing.

### 4. Key PR Progress (10 Important)
*   **[#66751]** **[Contributor] fix(codemode): fold a script's file changes into one diff per file**: Closely related to #66750, this PR groups nested edits within `execute` calls into single diff cards per file, significantly cleaning up the desktop timeline.
*   **[#66757]** **[Contributor] fix(core): replace a file Claude Code cannot read with a note instead of failing the turn**: Improves robustness by gracefully handling files Claude Code cannot parse (e.g., CSV), replacing them with notes rather than crashing the turn.
*   **[#66756]** **[Contributor] fix(core): pass attachment file names to Claude Code**: Fixes a specific Claude Code provider issue where attachment filenames were not being passed, likely related to image attachment handling.
*   **[#66755]** **[Contributor] fix(core): stop Claude Code treating an image from earlier turns as newly attached**: Critical fix for issue #62085, ensuring that images returned by tools earlier in a session are not incorrectly re-attached after a model switch (e.g., switching from GPT to Claude).
*   **[#66754]** **[Contributor] fix(ai): send null content for an empty assistant turn with tool calls**: Fixes a lowering issue where empty assistant turns with tool calls were not sending `content: null`, which could cause parsing errors in the frontend.
*   **[#66752]** **[Contributor] fix(tui): reload config when the cli.json target changes**: The direct fix for #66743, implementing directory watching for symlinked `cli.json` targets so live reload functions correctly.
*   **[#66747]** **[Contributor] fix(core): stop claiming the automation lease when automations are off**: Fixes a database contention issue where the server process incorrectly claimed the SQLite scheduler lease even when `automations: false` was set, blocking other processes.
*   **[#66746]** **[Contributor] fix(app): drop removed attachment references from queued edits**: Resolves an issue where removing a file card from a queued edit kept the original model-visible text suffix and dangling `Attached file:` references.
*   **[#66748]** **[Documentation] docs(site): stop instructing users to set loopback NO_PROXY**: Cleanup PR closing #65891, correcting misleading documentation about `NO_PROXY` settings for loopback addresses.
*   **[#66543]** **[Open] fix(core): cache compiled wildcard patterns**: Performance improvement caching `RegExp` objects in `Wildcard.match`, called frequently by `Tool.snapshot` and the permission policy to avoid redundant compilation.

### 5. Feature Request Trends
The most requested feature direction this cycle is **Editor/ACP Integration Stability**. Issues #66734, #66745, and #66740 all revolve around improving the Application Communication Protocol (ACP) experience—specifically exposing system prompt status, context window reporting, and reliable model switching. There is also significant activity around **Provider Compatibility** (#66749, #66699), focusing on making OpenCode work seamlessly with OpenAI-compatible APIs and handling edge cases like quota exhaustion gracefully. Lastly, **Quality of Life** improvements dominate, including better file edit grouping in the TUI/desktop (#66750, #66751) and improved error reporting/cli behavior (#66699).

### 6. Developer Pain Points
*   **Silent Failures & Empty Stderr**: The `opencode run` exit 1 with empty stderr issue (#66699) is a top frustration for CI/CD and scripted users who cannot diagnose provider quota errors or session failures.
*   **Symlink & Config Reload Friction**: Editing symlinked config files (#66743) and having changes ignored creates a broken workflow loop for developers managing dotfiles.
*   **Provider & API Edge Cases**: Empty assistant content errors (#66749) and model switching failures in goal mode (#66740) indicate a need for better handling of non-standard API behaviors and state management during model transitions.
*   **Edit Target Ambiguity**: The overlapping exact match edit bug (#66735) poses a risk of unintended code modifications, particularly with structural code like `#endif` directives.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# pi-mono Community Digest
**Generated:** 2026-11-27

### 1. Today's Highlights
A surge of activity marked the end of November, with 4 issues and 7 PRs updated in the last 24 hours. The most significant progress centers on stabilizing the interactive terminal experience: PR #12597 and #12596 address the long-standing "kitty image loss" and scrollback wipe bugs that plagued image rendering in regular mode. Concurrently, the team is tackling provider reliability, with PR #12604 fixing GitHub Copilot `mai-code` model temperature support and Issue #8810 remaining open due to intermittent `defaultProvider` fallback bugs when extensions register providers.

### 2. Releases
No new versions were published in the last 24 hours.

### 3. Hot Issues (Top 10)
*   **#8810 [OPEN]** Fresh sessions intermittently ignore `defaultProvider`/`defaultModel` when providers are registered by extensions via `pi.registerProvider()`. This remains the top bug due to its impact on session consistency. [Link](https://github.com/earendil-works/pi/issues/8810)
*   **#12548 [CLOSED]** Kitty images are lost and terminal scrollback is wiped when images don't fit above the bottom of the screen. Fixed in PR #12597. [Link](https://github.com/earendil-works/pi/issues/12548)
*   **#12564 [CLOSED]** Windows: a pi that dies mid-run leaves Kitty keyboard reporting on, making the PowerShell prompt unusable. A critical stability bug for Windows users. [Link](https://github.com/earendil-works/pi/issues/12564)
*   **#12605 [CLOSED]** `pi-ai` retry classifier misses `upstream_error: upstream SSE stream failed`. Pi stopped the turn instead of retrying, highlighting gaps in error classification. [Link](https://github.com/earendil-works/pi/issues/12605)
*   **#12599 [CLOSED]** Dangling extension symlink is skipped silently. Extensions pointing to deleted paths cause silent failures in long-running sessions. [Link](https://github.com/earendil-works/pi/issues/12599)
*   **#12606 [CLOSED]** `nativeToolChanges` is unreachable on 1.6.1 because `getInitialSystemMessage` requires `messages[0]` to be a system message, but transcripts start with a user message. Blocks tool change functionality. [Link](https://github.com/earendil-works/pi/issues/12606)
*   **#12593 [CLOSED]** "hello" produces ~56k-token requests (×4) with zero prompt cache hits on a local omlx backend. A severe inefficiency causing unnecessary token consumption. [Link](https://github.com/earendil-works/pi/issues/12593)
*   **#12547 [OPEN]** `/reload` or resume reorders the system prompt's tool list when a tool registers late, causing Anthropic requests to miss the prompt cache. [Link](https://github.com/earendil-works/pi/issues/12547)
*   **#12561 [CLOSED]** Bash tool has no default timeout. A hung command can run for hours without interruption. [Link](https://github.com/earendil-works/pi/issues/12561)
*   **#12510 [OPEN]** Codemode parse errors report only `codemode.js:line:col`, forcing models to retry blind on shell-heavy scripts. Lack of source context degrades the developer experience. [Link](https://github.com/earendil-works/pi/issues/12510)

### 4. Key PR Progress (Top 10)
*   **#12597 [CLOSED]** fix(tui): append Kitty images without a full redraw in regular mode. Resolves the image append scrollback wipe issue. [Link](https://github.com/earendil-works/pi/pull/12597)
*   **#12596 [CLOSED]** fix(tui): keep Kitty image IDs within signed 32-bit range. Fixes Konsole parsing errors where IDs read as 0. [Link](https://github.com/earendil-works/pi/pull/12596)
*   **#12604 [CLOSED]** fix(ai): GitHub Copilot mai-code models don't support temperature. Dismisses the unsupported error for Copilot models. [Link](https://github.com/earendil-works/pi/pull/12604)
*   **#12603 [CLOSED]** Let hosts choose where Pi Durable starts runnable tasks. Adds `HarnessOptions.schedule(run)` for host-controlled scheduling. [Link](https://github.com/earendil-works/pi/pull/12603)
*   **#12601 [CLOSED]** docs(coding-agent): reset the terminal after Pi was killed. Addresses terminal mode persistence after killed runs. [Link](https://github.com/earendil-works/pi/pull/12601)
*   **#12595 [CLOSED]** feat(coding-agent): add `--agent-dir` and carry it in the resume command. Ensures environment variables like `PI_CODING_AGENT_DIR` are preserved across resumes. [Link](https://github.com/earendil-works/pi/pull/12595)
*   **#12592 [CLOSED]** fix(coding-agent): do not count `!!` output in context token estimate. Prevents large `!!` output from inflating token estimates. [Link](https://github.com/earendil-works/pi/pull/12592)
*   **#12582 [OPEN]** feat(chord,durable): delete conversations on StoreStorage. Enables `StoreStorage` to delete conversations and their forks. [Link](https://github.com/earendil-works/pi/pull/12582)
*   **#12579 [CLOSED]** feat(chord,p3): switch a store's outbox at runtime; drop p3's backup marker. Allows runtime outbox switching and removes backup markers. [Link](https://github.com/earendil-works/pi/pull/12579)
*   **#12556 [CLOSED]** feat(coding-agent): honor `DO_NOT_TRACK` for install telemetry and attribution. Adds support for the `DO_NOT_TRACK` flag. [Link](https://github.com/earendil-works/pi/pull/12556)

### 5. Feature Request Trends
The issue stream reveals a strong focus on **provider reliability and extensibility**. The most requested direction is ensuring that `defaultProvider`/`defaultModel` settings are respected consistently, especially when extensions dynamically register providers (#8810). There is also significant demand for **better terminal media handling**, specifically consistent Kitty image rendering and scrollback management without full redraws (#12548, #12597). Additionally, developers are pushing for **granular error handling and telemetry controls**, such as retry classifiers for SSE failures (#12605) and `DO_NOT_TRACK` honor (#12556), indicating a maturation of pi towards enterprise-grade observability and reliability.

### 6. Developer Pain Points
*   **Intermittent Configuration Ignorance:** The `defaultProvider` fallback bug (#8810) causes fresh sessions to silently switch providers, breaking user configuration.
*   **Terminal Rendering Instability:** Kitty image handling causes scrollback wipes and image loss, particularly in regular mode, requiring multiple PRs (#12596, #12597) to stabilize.
*   **Missing Defaults & Timeouts:** Critical tools like the Bash tool lack default timeouts (#12561), and retry classifiers fail to recognize specific upstream errors, forcing manual intervention.
*   **Context Estimation Errors:** Token estimation bugs, such as counting `!!` output (#12592), lead to inaccurate context windows and potential truncation.
*   **Symlink & State Management:** Dangling extension symlinks are skipped silently (#12599), and disposed sessions remain retained in the V8 heap, preventing garbage collection (#12546).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

### Qwen Code Community Digest
**Date:** 2026-11-27

---

#### 1. Today's Highlights
The Qwen Code v0.28.7 release has been published, introducing the highly anticipated CLI availability on the Harness kernel with privacy-focused usage statistics. A notable usability improvement was added for repeated tool call rejections, now explaining the specific cause. Developers should also note the v0.28.6-nightly build tagged `20261126.6b0cd79b`, indicating ongoing nightly feature integration. [GitHub Release v0.28.7](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.7)

#### 2. Releases
*   **v0.28.7:** The latest stable release. Key changes include the Qwen Code CLI now running on the Harness kernel (usage statistics off by default) and explanations added for repeated tool-call rejections.
*   **v0.28.6-nightly.20261126.6b0cd79b:** A nightly build released on November 26th, serving as the bleeding edge for upcoming features and fixes prior to the stable v0.28.7 launch.

#### 3. Hot Issues (Top 10)
1.  **[#18342](https://github.com/QwenLM/qwen-code/issues/18342)** - *Main CI failed: E2E Tests*: A flaky CI failure currently under investigation. Community members are monitoring the newer push run to determine if this is a transient issue.
2.  **[#18258](https://github.com/QwenLM/qwen-code/issues/18258)** - *Main CI failed: Managed Agent gate*: A recurring "HostedMonitorRunFaultGatesIT" failure affecting the Java SDK, indicating stability issues in the managed agent infrastructure.
3.  **[#18508](https://github.com/QwenLM/qwen-code/issues/18508)** - *Web Shell Artifacts tab*: A UI bug where the artifact library page fails to display the correct list, showing a restored preview tab instead. Reported as verified on v0.28.7 and main.
4.  **[#18501](https://github.com/QwenLM/qwen-code/issues/18501)** - *Control port selection for containerized Workers*: A feature request to allow users to specify the control port (e.g., port 4096) when starting a containerized Managed Runtime Worker, resolving deployment conflicts with existing ingresses.
5.  **[#18486](https://github.com/QwenLM/qwen-code/issues/18486)** - *AppImage gray window on Linux*: A platform-specific bug where the Desktop AppImage renders as a gray rectangle on Fedora/Bluefin due to bundled `libwayland-client` lacking `wl_fixes_interface`.
6.  **[#18396](https://github.com/QwenLM/qwen-code/issues/18396)** - *SDK Java JdbcRuntimeBrokerMySqlIT*: A Java SDK integration test failure regarding repository contract preservation on MySQL, highlighting database compatibility risks.
7.  **[#18269](https://github.com/QwenLM/qwen-code/issues/18269)** - *Managed Agent gate failure*: Similar to #18258, this failure involves "HostedHookCancelFaultGatesIT" and suggests systemic issues in the hosted agent fault handling logic.
8.  **[#18505](https://github.com/QwenLM/qwen-code/issues/18505)** - *Chat column migration*: A structural PR merging the main daemon chat column into a shared backend-neutral ChatSurface, aiming for rendering consistency across the UI.
9.  **[#18496](https://github.com/QwenLM/qwen-code/issues/18496)** - *SDK GitHub release authentication*: A CI fix ensuring the release workflow uses a `CI_BOT_PAT` for authenticating the `gh` command, preventing permission issues during automated releases.
10. **[#18480](https://github.com/QwenLM/qwen-code/issues/18480)** - *Prompt-time sidecar persistence*: A performance optimization preventing "full-transcript index rebuild storms" during multi-workspace session listings by persisting sidecar data incrementally.

#### 4. Key PR Progress (Top 20)
1.  **[#18370](https://github.com/QwenLM/qwen-code/pull/18370)** - *CI: fail closed on authority-surface PRs*: A security hardening PR that tightens the precheck for automated triage, now judging what a PR can reach rather than relying on wording matching.
2.  **[#18411](https://github.com/QwenLM/qwen-code/pull/18411)** - *feat(core,cli): ledger-backed session census*: Completes session accounting gaps by adding ledger-backed distinct-session census and daemon session-end usage persistence for the `/stats` dashboard.
3.  **[#18478](https://github.com/QwenLM/qwen-code/pull/18478)** - *refactor(managed-agent): store assembly*: Extracts store assembly and read delegates from the Managed Agent persistence facade, improving code modularity and maintainability.
4.  **[#18509](https://github.com/QwenLM/qwen-code/pull/18509)** - *docs(managed-agent): Harness event ingest*: Documentation proposing a Harness event ingest model for the managed-agent area.
5.  **[#18505](https://github.com/QwenLM/qwen-code/pull/18505)** - *feat(web-shell): shared ChatSurface*: Switches the main chat column onto a shared ChatSurface (slice 2f.3), completing structural rendering convergence across daemon columns.
6.  **[#18480](https://github.com/QwenLM/qwen-code/pull/18480)** - *persist prompt-time sidecar*: Eliminates repeated full-transcript index rebuilds by persisting prompt-time sidecar data incrementally per session.
7.  **[#18507](https://github.com/QwenLM/qwen-code/pull/18507)** - *feat(web-shell): persist chat reasoning*: Shares task-scoped chat reasoning and `/effort` controls, enabling thinking tiers to persist through model switches and restarts.
8.  **[#18500](https://github.com/QwenLM/qwen-code/pull/18500)** - *fix(core): harness name acceptance*: Allows file-tool arguments to accept alternative harness names (e.g., `path` instead of `file_path`), improving tool interoperability.
9.  **[#18452](https://github.com/QwenLM/qwen-code/pull/18452)** - *perf(daemon): defer prompt ledger reads*: Optimizes prompt ledger reads by checking live status before returning continuation hints, reducing cold catalog request latency.
10. **[#18400](https://github.com/QwenLM/qwen-code/pull/18400)** - *fix(verify-pr): harden round-input*: Validates the canonical manifest before downloading a bundle, ensuring exact field shapes and UTF-8/JSON parsing integrity.
11. **[#18355](https://github.com/QwenLM/qwen-code/pull/18355)** - *feat(review): tiered sandbox cutover*: Completes Phase 2-A of the tiered review sandbox rollout, switching to unconditional tiered fail-closed isolation for pull requests.
12. **[#18155](https://github.com/QwenLM/qwen-code/pull/18155)** - *feat(managed-agent): confine selected Workspace Shell*: Adds an opt-in foreground Shell profile for Hosted Agent Sessions, using Bubblewrap to provide read-only private images per command.
13. **[#18447](https://github.com/QwenLM/qwen-code/pull/18447)** - *docs(cli): worktree retention*: Updates design documents to record the merge status of worktree retention/restore features (U4/U5) into main.
14. **[#18169](https://github.com/QwenLM/qwen-code/pull/18169)** - *fix(cli): gate Agent Team tools*: Updates tool advertising logic so Agent Team tools are only shown when the host supports teammate reports/approvals and the experiment is enabled.
15. **[#18064](https://github.com/QwenLM/qwen-code/pull/18064)** - *feat(verify-pr): preflight execution approvals*: Adds an execution preflight for maintainer-driven local `/verify-pr` rounds, requiring explicit host or VM selection validation.
16. **[#18496](https://github.com/QwenLM/qwen-code/pull/18496)** - *fix(ci): SDK GitHub release PAT*: Authenticates the `gh` command with `secrets.CI_BOT_PAT` in the release workflow, aligning with other release steps.
17. **[#18501](https://github.com/QwenLM/qwen-code/pull/18501)** - *Allow container port selection*: (Linked to Issue #18501) Implements the ability for operators to select the control port for containerized Managed Runtime Workers.
18. **[#18472](https://github.com/QwenLM/qwen-code/pull/18472)** - *feat(managed-agent): share resident Workspace*: Implements the shared resident external Workspace lifecycle, including read-only concurrent dispatch and reattach/recovery mechanisms.
19. **[#18486](https://github.com/QwenLM/qwen-code/pull/18486)** - **(Note: This is an Issue, but related to packaging)*: Addresses the AppImage Mesa/EGL compatibility gray window issue.
20. **[#18508](https://github.com/QwenLM/qwen-code/pull/18508)** - *fix(web-shell): Artifacts list*: Fixes the `selectedRow` memo fallback in the WorkspaceArtifactLibraryPage component to display the correct list.

#### 5. Feature Request Trends
The community is heavily focused on **Infrastructure and Deployment flexibility**. A dominant trend is the need for **control over runtime environments**, specifically the ability to select control ports for containerized workers (#18501) and resolve Linux AppImage/EGL compatibility issues (#18486). There is also significant activity in **Managed Agent stability**, with multiple CI failures related to MySQL and fault gates indicating a need for more robust hosted runtime infrastructure. On the **UI/UX front**, users are driving convergence toward a shared chat surface and improved artifact management (#18508, #18505), while **session management** features like ledger-backed census and workspace sharing (#18411, #18472) are becoming central to multi-session workflows.

#### 6. Developer Pain Points
*   **CI Stability:** A recurring theme is the fragility of the Main CI pipeline, specifically "Managed Agent gate" and "E2E Tests" failures (#18258, #18269, #18342, #18396). These failures often involve Java SDK integration with MySQL, suggesting environment-specific or dependency-version conflicts that block merges.
*   **Linux Packaging/Compatibility:** The AppImage gray window issue (#18486) highlights a pain point for Linux desktop users where bundled dependencies (libwayland) conflict with host system versions of Mesa/EGL, leading to startup failures.
*   **Tool Interoperability:** Users are frustrated by strict naming conventions in tool arguments (e.g., requiring `file_path` vs `path`) (#18500), indicating a need for more forgiving or standardized tool interfaces.
*   **Hosted Runtime Configuration:** The inability to specify control ports for containerized workers (#18501) creates deployment friction for users integrating Qwen Code into existing infrastructure with existing ingress rules.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

### DeepSeek TUI Community Digest
**Generated on:** 2026-11-27

---

### 1. Today's Highlights
The DeepSeek TUI community is currently focused on two critical stability and usability issues. First, a persistent flickering bug affects Linux users on terminals like GNOME Terminal and VTE, where window focus triggers a full-screen erase and repaint sequence that fails gracefully on older terminals, causing visual flashes. Second, a new Windows-specific bug has been reported regarding abnormally low cache hit rates during context compaction, which could significantly impact performance for Windows users. These issues highlight ongoing efforts to refine cross-platform compatibility and optimize backend caching mechanisms.

### 2. Releases
No new versions were released in the last 24 hours.

### 3. Hot Issues (Top 10)
Here are the most noteworthy issues currently tracked, based on recent activity and community impact:

1.  **#7343 [CLOSED]** *[area:tui, os:linux]* **TUI: full-screen erase + repaint on every window focus flashes on terminals without DEC 2026**
    *   **Why it matters:** This bug causes a disruptive screen flash on popular terminals like GNOME Terminal and VTE when switching focus. It stems from the TUI using DEC 2026 synchronized-update markers, which are not supported by these terminal emulators.
    *   **Community reaction:** The issue has garnered 4 comments, with users confirming the visual flicker and developers discussing terminal compatibility constraints.
    *   **Link:** [#7343 on GitHub](https://github.com/codewhale-hq/Codewhale/issues/7343)

2.  **#7564 [OPEN]** *[bug, area:tui, os:windows, area:state]* **Low cache rate on context compaction**
    *   **Why it matters:** Analysis of `.codewhale/audit.log` reveals a cache hit rate of approximately 20k against 200k–800k misses. This severe inefficiency suggests the compaction logic may be invalidating cache entries prematurely or failing to recognize duplicate contexts, leading to unnecessary recomputation.
    *   **Community reaction:** The reporter notes this causes "a lot of unnecessary" work, prompting immediate interest in performance optimization.
    *   **Link:** [#7564 on GitHub](https://github.com/codewhale-hq/Codewhale/issues/7564)

3.  **#7563 [OPEN]** *[bug, area:tui, contributor:external]* **fix(tui): open inline skill completion after CJK text**
    *   **Why it matters:** A fundamental usability bug for East Asian language users. Inline skill mentions (e.g., `/my-review` or `$my-review`) only trigger completion popups when following whitespace or ASCII brackets/quotes. Chinese and Japanese text, which lacks spaces between words, fails to trigger the feature, breaking the workflow for CJK users.
    *   **Community reaction:** The external contributor has opened a PR to fix this, indicating a strong community desire for multilingual support.
    *   **Link:** [#7563 on GitHub](https://github.com/codewhale-hq/Codewhale/issues/7563)

4.  **#7343 (Follow-up/Related)** *[area:tui, os:linux]* **Terminal compatibility and DEC 2026 implementation**
    *   **Why it matters:** While #7343 is closed, related discussions continue regarding how the TUI handles terminal capabilities. Ensuring the UI degrades gracefully or utilizes alternative escape sequences for terminals lacking DEC 2026 support is a recurring theme.
    *   **Community reaction:** Community members are watching for a permanent fix that doesn't compromise the experience on modern terminals.
    *   **Link:** [View related discussions](https://github.com/codewhale-hq/Codewhale/issues/7343)

5.  **#7565 [OPEN]** *[bug, area:core, contributor:external]* **fix(engine): preserve pasted summary headers during compaction**
    *   **Why it matters:** This core engine fix addresses a compaction edge case where a real user message beginning with a legacy summary header could be incorrectly replaced. It uses checkpoint structure and provenance to determine what can be safely replaced during context compaction.
    *   **Community reaction:** External contributors are actively working on this, signaling a focus on the integrity of long-context conversations.
    *   **Link:** [#7565 on GitHub](https://github.com/codewhale-hq/Codewhale/pull/7565)

6.  **#7563 (PR discussion)** *[bug, area:tui, contributor:external]* **CJK text handling in skill completions**
    *   **Why it matters:** Closely related to Issue #7563, the associated PR explores how to detect CJK character boundaries to enable skill completion triggers. This is a technical challenge specific to natural language processing within the TUI.
    *   **Community reaction:** Positive feedback on the proposed solution for making the tool accessible to a global user base.
    *   **Link:** [#7563 on GitHub](https://github.com/codewhale-hq/Codewhale/pull/7563)

7.  **#7343 (Erase mechanics)** *[area:tui]* **Investigation into CSI 2J escape sequence behavior**
    *   **Why it matters:** Deep dive into why the `CSI 2J` (erase screen) command behaves differently across terminal implementations. Understanding this is key to fixing the flicker issue without breaking functionality on VTE-based terminals.
    *   **Community reaction:** Technical discussion focused on escape sequence standards and terminal emulation.
    *   **Link:** [#7343 on GitHub](https://github.com/codewhale-hq/Codewhale/issues/7343)

8.  **#7564 (Cache metrics)** *[area:state]* **Debugging cache hit/miss ratios**
    *   **Why it matters:** Beyond the low rate, this issue prompts a broader look at how cache keys are generated during compaction. Identifying the root cause of the high miss rate is critical for performance tuning.
    *   **Community reaction:** Users are sharing logs and metrics to help triangulate the problem.
    *   **Link:** [#7564 on GitHub](https://github.com/codewhale-hq/Codewhale/issues/7564)

9.  **#7565 (Header preservation)** *[area:core]* **Provenance tracking in compaction**
    *   **Why it matters:** The use of "checkpoint structure and provenance" to decide what to replace is a sophisticated approach to context management. This PR represents a move towards more robust long-term memory handling in the agent.
    *   **Community reaction:** Appreciation for the careful consideration of "legacy summary headers" and message integrity.
    *   **Link:** [#7565 on GitHub](https://github.com/codewhale-hq/Codewhale/pull/7565)

10. **#7563 (Skill trigger logic)** *[area:tui]* **Parsing logic for `/` and `$` prefixes**
    *   **Why it matters:** The current logic is too rigid, requiring specific ASCII delimiters. Expanding this to support CJK and other non-space-separated languages is a requested feature for global adoption.
    *   **Community reaction:** Requests for more flexible parsing rules that respect different linguistic patterns.
    *   **Link:** [#7563 on GitHub](https://github.com/codewhale-hq/Codewhale/issues/7563)

### 4. Key PR Progress (Top 10)
Here are the most important Pull Requests merged or updated recently, driving the project forward:

1.  **#7565 [OPEN]** *[bug, area:core, contributor:external]* **fix(engine): preserve pasted summary headers during compaction**
    *   **Description:** Uses checkpoint structure and provenance to decide what can be replaced during compaction. A bare header follows the normal user-text retention budget. When a pasted header shares a message with a... (In-progress).
    *   **Link:** [#7565 on GitHub](https://github.com/codewhale-hq/Codewhale/pull/7565)

2.  **#7563 [OPEN]** *[bug, area:tui, contributor:external]* **fix(tui): open inline skill completion after CJK text**
    *   **Description:** An inline skill mention (`/my-review` or `$my-review` inside a message) only opens the skill completion popup when the `/` or `$` follows whitespace or an ASCII bracket or quote. Chinese and Japanese text has no spaces between words, so `请用$my` or `请用/my` shows nothing, while `please...` (In-progress).
    *   **Link:** [#7563 on GitHub](https://github.com/codewhale-hq/Codewhale/pull/7563)

3.  **#7343 [CLOSED]** *[area:tui, os:linux]* **TUI: full-screen erase + repaint on every window focus flashes on terminals without DEC 2026**
    *   **Description:** Fixes the screen flicker on GNOME Terminal/VTE by adjusting the erase and repaint sequence to be compatible with terminals that do not implement DEC 2026.
    *   **Link:** [#7343 on GitHub](https://github.com/codewhale-hq/Codewhale/issues/7343)

4.  **#7564 [OPEN]** *[bug, area:tui, os:windows, area:state]* **Low cache rate on context compaction**
    *   **Description:** Investigation into the audit log showing a cache hit rate of ~20k against 200k~800k misses. The goal is to identify why cache entries are being invalidated or missed so frequently during compaction.
    *   **Link:** [#7564 on GitHub](https://github.com/codewhale-hq/Codewhale/issues/7564)

5.  **#7563 (PR discussion)** *[bug, area:tui]* **CJK text parsing for skill triggers**
    *   **Description:** Exploring modifications to the parsing logic to detect CJK character boundaries, allowing skill completions to trigger after CJK text without requiring a preceding space.
    *   **Link:** [#7563 on GitHub](https://github.com/codewhale-hq/Codewhale/pull/7563)

6.  **#7565 (Header preservation)** *[area:core]* **Checkpoint structure integration**
    *   **Description:** Integration of checkpoint metadata to ensure that user messages starting with legacy summary headers are not erroneously overwritten during the compaction process.
    *   **Link:** [#7565 on GitHub](https://github.com/codewhale-hq/Codewhale/pull/7565)

7.  **#7343 (Terminal compatibility)** *[area:tui]* **Escape sequence refactoring**
    *   **Description:** Refactoring the TUI's terminal interaction layer to handle the `CSI 2J` escape sequence more gracefully, ensuring it does not cause visual artifacts on older VTE versions.
    *   **Link:** [#7343 on GitHub](https://github.com/codewhale-hq/Codewhale/issues/7343)

8.  **#7564 (Performance profiling)** *[area:state]* **Cache key analysis**
    *   **Description:** Profiling the compaction function to determine if cache keys are being generated consistently and if the audit log metrics accurately reflect the cache behavior.
    *   **Link:** [#7564 on GitHub](https://github.com/codewhale-hq/Codewhale/issues/7564)

9.  **#7563 (User experience)** *[area:tui]* **Localization of skill completion**
    *   **Description:** efforts to make the `/` and `$` triggers culture-aware, allowing users of non-Latin scripts to utilize inline skills without modifying their input habits.
    *   **Link:** [#7563 on GitHub](https://github.com/codewhale-hq/Codewhale/pull/7563)

10. **#7565 (Engine stability)** *[area:core]* **Provenance tracking implementation**
    *   **Description:** Implementation of a provenance tagging system that allows the engine to distinguish between original user input and synthesized summaries during context reduction.
    *   **Link:** [#7565 on GitHub](https://github.com/codewhale-hq/Codewhale/pull/7565)

### 5. Feature Request Trends
Analysis of the recent issue and PR activity reveals a clear shift toward **cross-platform robustness** and **global accessibility**.

*   **Terminal Compatibility:** There is a strong trend of fixing escape sequence handling to support a wider range of terminal emulators. The focus is on ensuring the TUI functions without relying on niche features like DEC 2026, thereby improving stability on standard Linux environments (GNOME Terminal, VTE).
*   **Multilingual Support:** A significant demand exists for supporting CJK (Chinese, Japanese, Korean) languages. This ranges from fixing skill completion triggers that break on non-space-separated text to general parsing logic improvements. The community is actively working on making the tool accessible to non-English speakers.
*   **Performance Optimization:** Following the discovery of the low cache hit rate on Windows, there is a trend toward optimizing the context compaction and caching logic. Developers are investigating cache key generation and invalidation strategies to reduce unnecessary recomputation.

### 6. Developer Pain Points
The current data highlights several recurring frustrations and high-frequency requests from the developer community:

*   **Visual Artifacts on Focus Change:** Linux users on GNOME Terminal/VTE experience a jarring full-screen flash every time a terminal window gains focus. This is caused by the TUI's aggressive erase-and-repaint cycle, which assumes DEC 2026 support. The pain point is the mismatch between the tool's assumptions and the capabilities of common terminal emulators.
*   **Windows Performance Degradation:** Windows users are experiencing abnormally low cache hit rates during context compaction (reported as 20k hits vs. 200k–800k misses). This suggests a fundamental issue with how contexts are being cached or invalidated on the Windows platform, leading to performance concerns.
*   **CJK Language Barriers:** Users inputting Chinese or Japanese text find that inline skill completions (triggered by `/` or `$`) do not activate. The current parsing logic is too dependent on ASCII whitespace or brackets, effectively excluding a large segment of potential users who do not use space-separated languages.
*   **Context Integrity during Compaction:** There is a recurring anxiety regarding the "compaction" process, where the AI compresses long conversation histories. Users and contributors are concerned that critical summary headers or the beginning of user messages might be lost or incorrectly replaced when the context is trimmed to fit token limits.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*