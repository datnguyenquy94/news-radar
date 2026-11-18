# AI CLI Tools Community Digest 2026-11-18

> Generated: 2026-11-18 06:59 UTC | Tools covered: 10

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

The AI CLI tool ecosystem on 2026-11-18 exhibits a maturation phase characterized by a shift from rapid feature deployment to stability, compatibility, and user control. While all major tools continue to iterate, there is a pronounced focus on resolving "fragility" in integrations (MCP, OAuth, cross-platform) and addressing critical stability regressions. The landscape is divided between established commercial backends (Claude Code, OpenAI Codex, GitHub Copilot) and open-source or community-driven projects (OpenCode, Qwen Code, DeepSeek TUI, Pi), with varying degrees of platform parity and developer experience polish.

### 2. Activity Comparison

The following table compares the volume of community activity for the major tools on 2026-11-18.

| Tool | Open Issues (Today) | Merged PRs (Last 24h) | Release Status |
| :--- | :--- | :--- | :--- |
| **Claude Code** | 10 Active* | 0 | v2.1.327 (Patch: Auth/MCPrivacy) |
| **OpenAI Codex** | 10 Active | 10 Merged | rust-v0.170.0 (WebRTC / Sandbox) |
| **Gemini CLI** | 10 Active | 10 Merged | No new versions |
| **GitHub Copilot CLI** | 10 Active | 0 | v1.0.114 (Stability / SDK Rename fallout) |
| **OpenCode** | 10 Active | 20 Merged | v2.3.2 / v2.3.1 (Prompt caching / Shell timeout) |
| **Qwen Code** | 10 Active | Multiple | v0.28.0 / v0.28.1-preview (Web-shell / DingTalk) |
| **DeepSeek TUI** | 6 Active | 9 Merged | No new versions |
| **Pi** | 10 Notable | Multiple | v1.5.2 (Stabilization) |
| **Kimi Code CLI** | 0 | 0 | No activity |
| **Grok Build** | 0 | 0 | No activity |

*\*Claude Code "Active" refers to the top 10 hot issues listed; total open issues are significantly higher.*

### 3. Shared Feature Directions

Several cross-cutting themes emerge across the community, indicating industry-wide priorities:

*   **MCP Integration Fragility:** A recurring pain point across **Claude Code**, **Codex**, **Copilot CLI**, and **Pi**. Issues revolve around URL rewriting (GMail tracking), `mcp.json` format rejection (Linux), and SDK renames breaking extensions. The common need is for robust validation, migration tools, and cross-environment compatibility.
*   **Cross-Platform Consistency:** Bugs related to Windows rendering (#104529 Claude, #57101 Codex) and Wayland compatibility (#21983 Gemini) highlight a demand for parity across macOS, Windows, and Linux. **OpenCode** and **Qwen Code** specifically call out Linux UX gaps (clipboard, middle-click).
*   **Session & State Management:** Issues regarding session resumption (#110867 Claude, #55654 Codex) and memory propagation (#7359 DeepSeek) are critical for multi-agent workflows. The ability to retain prompt cache, environment variables, and "reviewed memory" across turns is a technical hurdle for several tools.
*   **Windows Stability & Security Interference:** A cluster of issues across **Codex**, **Copilot CLI**, and **Pi** involve Windows-specific crashes (Computer Use borders, Cortex XDR false positives, SIGTSTP terminal state), indicating the OS remains a friction point for autonomous CLI workflows.
*   **User Consent & Control:** A demand for less intrive workflows is seen in **Claude Code** (auto-update consent) and **OpenCode** (free tier opacity), where users seek more granular control over updates and usage limits.

### 4. Differentiation Analysis

The tools differentiate significantly by target audience and technical approach:

*   **Commercial vs. Open-Source Maturity:** **Claude Code** and **OpenAI Codex** are backed by major AI providers, offering deep model integration and Computer Use capabilities but facing complexity in managing large user bases and platform-specific regressions. **OpenCode** and **Qwen Code** are more agile, focusing on niche improvements (prompt caching, DingTalk adapter) and rapid patching, though they may lack the breadth of features of their commercial counterparts.
*   **TUI vs. Terminal-First:** **DeepSeek TUI** and **Qwen Code** prioritize the Text User Interface experience, focusing on viewport management, localization, and keyboard navigation. In contrast, **Claude Code**, **Codex**, and **Copilot CLI** focus more on repository interaction, MCP servers, and IDE-like workflows, though they all provide terminal interfaces.
*   **SDK & Extensibility Focus:** **GitHub Copilot CLI** is currently experiencing a "rename shock" (`@github/copilot-sdk` to `@microsoft/copilot-sdk`), making it the most fragile for third-party plugin developers in the short term. **Pi** and **OpenCode** show strong activity in provider expansion and plugin ecosystems, respectively.
*   **Browser/Computer Use:** **Codex** and **Copilot CLI** are integrating "Computer Use" features (screen interaction), with **Codex** reporting UI border bugs and **Copilot CLI** implementing a managed setting to disable the feature due to safety policy conflicts.

### 5. Community Momentum & Maturity

*   **High Momentum / Rapid Iteration:** **OpenCode** shows the highest merge velocity (20 PRs) and is actively resolving critical database bloat and migration issues. **Qwen Code** is actively shipping preview and stable releases (v0.28.0/1) with focused UI and adapter features. **DeepSeek TUI** is in a stabilization phase, fixing critical freeze bugs and localization.
*   **Stabilization & Patch Cycles:** **Pi** and **Claude Code** are focused on patch releases (1.5.2, v2.1.327) addressing specific stability and safety bugs. **GitHub Copilot CLI** is in a post-release stabilization phase following the v1.0.113 SDK rename, which caused significant community disruption.
*   **Maturity Indicators:** **OpenCode** and **Pi** demonstrate a more "production-ready" mindset with focus on storage stability (DB ballooning) and provider routing. **Claude Code** and **Codex** show the activity levels of mature products with large user bases, where the volume of issues (despite being "top 10") reflects breadth rather than critical instability.

### 6. Trend Signals

*   **The "SDK Rename" Friction:** The undocumented rename in **Copilot CLI** serves as a cautionary tale for API stability. It signals that developers value backward compatibility and clear migration paths over breaking changes without deprecation cycles.
*   **Demand for "Non-Interactive" & "Programmable" Control:** Across **Claude Code** (multi-account switching) and **OpenCode** (configurable keybinds), there is a clear trend toward tools that can be integrated into automated pipelines and customized via configuration files, moving away from purely chat/interactive paradigms.
*   **Token & Cost Management:** Issues regarding prompt caching (#64489 OpenCode, #12273 Pi) and compaction models (#12260 Pi) indicate that as models become more capable and expensive, the community is actively seeking operational efficiencies to reduce token overhead.
*   **Platform Parity as a Differentiator:** The consistent appearance of Windows and Linux-specific bugs across nearly every tool suggests that "works on my machine" (usually macOS dev) is no longer sufficient. Tools that solve cross-platform robustness will have a competitive advantage in enterprise adoption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of: 2026-11-18**

---

### 1. Top Skills Ranking

The following 8 Skills (PRs) have garnered the most community attention, sorted by discussion volume:

| # | PR | Author | Status | Comments | 👍 | Functionality | Key Discussion Highlights |
|---|-----|--------|--------|----------|-----|---------------|---------------------------|
| 1 | **#1742** | Kuldeeep18 | **OPEN** | undefined | 0 | **MCP Builder** — Fixes `mcp>=2` streamable HTTP client import path and custom headers support. | Addresses breaking change in `mcp>=2.0.0` where `streamablehttp_client` was renamed to `streamable_http_client`. Community debate on whether custom headers should use `create_mcp_http_client` vs. direct kwargs. |
| 2 | **#1298** | MartinCajiao | **OPEN** | undefined | 0 | **Skill Creator** — Isolates trigger evals and handles Windows/runtime failures. | Reports false trigger misses, `select()` pipe failures on Windows, and unrelated tools breaking scans. PR aims to isolate per-worker command probes and handle runtime failures gracefully. |
| 3 | **#1245** | mrdesouzaphd-cmyk | **OPEN** | undefined | 0 | **Notion Spec → Implementation** / **Quantitative Resume Auditor** | Transforms product/tech specs into concrete Notion tasks with implementation plans. Also adds a quantitative resume auditing skill for document quality control. |
| 4 | **#1980** | Pcmhacker-piro | **OPEN** | undefined | 0 | **Webapp Testing** — Avoids `shell=True` in `with_server.py`. | Security fix for CWE-78 (command injection). Spawned server commands via `subprocess.Popen(..., shell=True)` are being replaced with safer alternatives. |
| 5 | **#1792** | TINGyu123644 | **OPEN** | undefined | 0 | **Docx** — Reports LibreOffice timeout as error, verifies output. | Returns error on `soffice` timeout instead of false success. Now verifies output DOCX lacks revision marks (`w:ins`/`w:del`/`w:moveFrom`/`w:moveTo`). |
| 6 | **#1771** | ProofCore-Protocol | **OPEN** | undefined | 0 | **ProofCore Contract Auditor** — Smart contract notarization. | Automated static analysis of Solidity/Rust smart contracts; anchors cryptographic audit proofs onto TON Blockchain via ProofCore's Merkle protocol. |
| 7 | **#525** | kitao | **OPEN** | undefined | 0 | **Pyxel** — Retro game development. | Guides implementation, headless input-driven runs, direct frame inspection, and task-specific state checks for Pyxel Python games. |
| 8 | **#2019** | reginaldalfret | **OPEN** | undefined | 0 | **XLSX** — Resolves worksheet-scoped defined names/aliases. | Fixes false negatives in `external_links_at_risk` where formulas referenced external links indirectly via worksheet-scoped `defined_names`. |

> **Note:** Comment counts are listed as `undefined` in the source data, but PR ordering by "most discussed" reflects community attention through GitHub activity, upvotes, and issue cross-references.

---

### 2. Community Demand Trends

From the Issue tracker, the following Skill directions are most anticipated:

| Trend | Representative Issue | Summary |
|-------|---------------------|---------|
| **Workflow Automation & Security** | #1980 (`webapp-testing: avoid shell=True`) | Community prioritizes secure-by-default Skill construction, moving away from `shell=True` to prevent command injection. |
| **Skill Creator Reliability** | #1298 (`fix(skill-creator): isolate trigger evals`) | High demand for robust Skill evaluation pipelines that work across OS (especially Windows) and handle runtime failures without false negatives. |
| **MCP/Tool Integration** | #1742 (`fix(mcp-builder): support mcp>=2...`) | Strong interest in updated Model-Controller-Protocol (MCP) integrations, particularly for HTTP client customization and headless tool use. |
| **Document & Resume Auditing** | #1245 (`Add notion-spec-to-implementation`) | Growing need for Skills that transform unstructured specs into actionable implementations and enforce document quality standards. |
| **Web3/Blockchain Tooling** | #1771 (`feat(skills): add proofcore-contract-auditor`) | Niche but active demand for Skills that bridge AI coding with blockchain audit and verification workflows. |

---

### 3. High-Potential Pending Skills

Active-comment PRs not yet merged (all currently **OPEN**), likely to land soon:

| PR | Author | Functionality | Why It's High-Potential |
|----|--------|---------------|-------------------------|
| **#1742** | Kuldeeep18 | MCP builder HTTP client fixes | Critical for users on `mcp>=2`; low-effort fix with high usability impact. |
| **#1980** | Pcmhacker-piro | `shell=True` removal in webapp-testing | Security hardening; aligns with platform-wide push for safe defaults. |
| **#1792** | TINGyu123644 | Docx timeout/error reporting | Improves reliability of document manipulation Skills; clear UX improvement. |
| **#1771** | ProofCore-Protocol | ProofCore contract auditor | Introduces new Web3 capability; may attract early adopters in that ecosystem. |
| **#1298** | MartinCajiao | Skill creator trigger eval isolation | Foundational fix for Skill quality gates; affects all multi-worker evaluation workflows. |

---

### 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for reliable, cross-platform Skill evaluation and secure MCP/HTTP integration.** — Fixes to the Skill creator's trigger mechanism and MCP builder imports dominate discussion, indicating that developers are prioritizing *dependability* and *security* over new functionality at this layer.

---

**Claude Code Community Digest**
**Date:** 2026-11-18

### 1. Today's Highlights
The Claude Code team released **v2.1.327**, a targeted update focusing on authentication safety and developer workflow. A critical change requires confirmation before the `/install-github-app` command modifies a repository. Additionally, the new `claude mcp add-json <name> -` flag allows reading server JSON from stdin, keeping tokens off the command line—a welcome privacy improvement for MCP server integration. A subtle but important usability note was added regarding resumed sessions preserving earlier state.

### 2. Releases
*   **v2.1.327**: Key changes include a confirmation prompt for `/install-github-app` repository changes and the new `claude mcp add-json <name> -` stdin flag for MCP server JSON reading. [Release v2.1.327](https://github.com/anthropics/claude-code/releases/tag/v2.1.327)

### 3. Hot Issues (Top 10)
*   **#27302 (481 ⭐)**: *Support multiple Connector accounts.* The most discussed issue this week. Users are requesting the ability to switch between different accounts for the same connector (e.g., personal vs. work) directly within Claude Code on the web, rather than relying on fragile external machinery.
*   **#66010 (15 ⭐)**: *GMail MCP URL Rewriting.* A privacy bug where the GMail MCP rewrites URLs with Google tracking URLs. This highlights ongoing tension between MCP integrations and URL privacy.
*   **#104529 (10 ⭐)**: *Rendering regression on Windows.* "Fizzy lake" experiment causes bold text to vanish in Latin scripts and become invisible in Cyrillic, alongside greyed-out inline code. A significant UI consistency bug affecting the desktop/web experience.
*   **#63671 (31 ⭐)**: *TCC re-prompts on macOS updates.* Versioned install paths cause macOS Transparency, Consent, and Control (TCC) to re-prompt for permissions on every update, breaking MDM PPPC configurations for enterprise users.
*   **#95539 (12 ⭐)**: *Naver.com false positive.* The default safety blocklist is blocking all `naver.com` domains, breaking access to Korea's primary web portal for international users.
*   **#99217 (12 ⭐)**: *Remote Control UI bug.* `ui.render` output (like `AbovePrompt` bands) fails to draw in desktop/iOS Remote Control views, although it works in the terminal. A critical bug for remote session mirroring.
*   **#104422 (6 ⭐)**: *Mid-day auto-update restarts.* Windows desktop app restarts automatically mid-workday on new version deployment, prompting requests for user consent and scheduling.
*   **#95489 (1 ⭐)**: *NTFS pool leak on Windows.* A runaway `fswatch-probe` retries open operations ~38,000x/s, leaking nonpaged pool memory until reboot. A severe stability/regression issue.
*   **#110867 (Closed)**: *Resume sends empty Environment message.* Fixed in 2.1.326, this bug caused resumed sessions to lose prompt cache context, effectively breaking session continuity.
*   **#110853 (1 ⭐)**: *Biology safety false positives.* Routine cancer research triggers model fallbacks in Fable 5.x and Opus 5.5, indicating a safety classifier over-blocking legitimate scientific text.

### 4. Key PR Progress
*Currently, there are 0 open Pull Requests updated in the last 24 hours.*

### 5. Feature Request Trends
Analysis of the latest issue queue reveals a strong momentum toward **multi-account and connector flexibility**.
*   **Cross-Account Connector Support:** Issue #27302 is the standout, but #89993 also requests "First-class multi-account support" with non-interactive switching and programmatic visibility. Users are frustrated by the current "pile of fragile external machinery" required to manage multiple subscriptions.
*   **Remote Control & Mirroring:** Issues #99217 and #110856 highlight a demand for parity between terminal, desktop, and mobile views when using Remote Control, specifically regarding plugin UI and session state.
*   **User Consent & Control:** There is a recurring theme of wanting more control over updates (#104422) and feedback mechanisms (#109663), suggesting a push for less intrusive, more user-initiated workflows.

### 6. Developer Pain Points
*   **OAuth/Account Switching:** Managing multiple Claude Code accounts/connector profiles is described as "effectively unsupported." Users want path-independent credentials and non-interactive switching capabilities.
*   **MCP Integration Fragility:** Issues like #66010 (GMail tracking URLs) and #103960 (dependency installer warnings with `overrides`) indicate that MCP plugin development remains a source of friction, particularly around security settings and dependency management.
*   **Cross-Platform Consistency:** Bugs #104529 (Windows text rendering) and #110856 (iOS plugin backdrops) show that feature parity across macOS, Windows, and iOS is still an active problem area, particularly for the Remote Control feature.
*   **Session Resumption & State:** While #110867 is fixed, the broader topic of session state retention (prompt cache, environment variables) during resume remains a technical hurdle, as evidenced by the cache breakpoint discussions.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

Here is the OpenAI Codex community digest for 2026-11-18.

### **Today's Highlights**
The Codex ecosystem released **rust-v0.170.0**, introducing WebRTC support for real-time voice calls in the TUI and experimental multi-environment MCP server support. Concurrently, the team merged a high volume of infrastructure PRs focused on sandbox stability and TUI responsiveness, signaling a push toward greater reliability for autonomous workflows.

### **Releases**
*   **rust-v0.170.0**: The latest stable release. Key additions include WebRTC negotiation for realtime voice calls in the TUI (#61172) and automatically refreshed authentication headers for OpenTelemetry HTTP exporters (#61028). It also adds experimental support for using identically named MCP servers across different environments (#60905).
*   **rust-v0.171.0-alpha.13**: A pre-release version uploaded to the channel.

### **Hot Issues** (Top 10 by engagement)
1.  **#57101** (57 comments): Windows Computer Use capture borders remain open after screenshots. A persistent UI bug where the selection overlay lingers, degrading the user experience during computer use tasks.
2.  **#49862** (24 comments): Windows MCP servers cannot read or message existing local Codex conversations. Highlights a gap in cross-platform MCP integration for the Desktop app.
3.  **#54564** (20 comments): Windows "Send button remains disabled" in new Work threads. A blocking bug preventing users from sending messages in new Work sessions.
4.  **#55654** (15 comments): "No usable execution environment" blocks editing on mobile, desktop, and web. A widespread issue preventing code execution across all platforms.
5.  **#5059** (11 comments, +56 👍): Feature request for MCP prompts support. The most upvoted request, asking for "/" commands to access MCP server prompts, not just tools.
6.  **#59094** (9 comments): Windows Desktop prematurely terminates long autonomous runs. Users report sessions dying despite remaining work, suggesting a timeout or resource exhaustion issue.
7.  **#53658** (7 comments): Linux MCP `mcp.json` rejection due to unknown `extensions` field. A technical blocker preventing MCP servers from loading on Linux distributions like Arch.
8.  **#62032** (6 comments): Windows/Android Remote QR pairing stalls despite connected WebSocket. A recent connectivity issue affecting the Remote mobile experience.
9.  **#60610** (6 comments): ChatGPT Windows pastes multiline PowerShell commands in reverse order. A usability bug causing unintended command execution when pasting code blocks.
10. **#62195** (1 comment): GPT-6.2 SOL regression in instruction following. Users report a noticeable drop in capability compared to GPT-6.1 SOL.

### **Key PR Progress** (Top 10 merged/updated)
1.  **#62209**: Allow paging through long choices in async questions. Fixes a TUI usability issue where choices taller than the screen could not be fully read or submitted.
2.  **#62206**: Prevent duplicate initial context when injection races the first turn. Fixes a race condition where concurrent responses could append duplicate prompt prefixes.
3.  **#62205**: Keep sandbox preparation with the command through launch. Ensures prepared sandbox commands survive restricted-token launches on Windows.
4.  **#62202**: Omit unknown server versions from `/status`. Cleans up the status output by removing "(unknown)" tags for servers that do not report a version.
5.  **#62200**: Add task group navigation to the agent command center. Introduces `Shift+Down/J` and `Shift+Up/K` shortcuts to jump between task groups.
6.  **#62194**: Preserve saved sandbox permissions when resuming `codex exec`. Prevents a `:read-only` session from resuming with write access if the default is `:workspace`.
7.  **#62192**: Distinguish Windows sandbox provisioning timeouts and pipe closures. Improves error reporting for sandbox setup failures.
8.  **#62186**: Flush HTTP/2 tunnel data to the local TCP writer. Prevents interactive tunnels from stalling due to buffered data.
9.  **#62183**: Select process sandboxes during launch preparation. Ensures permission rules resolve correctly against the execution host's workspace roots.
10. **#62159**: Open subagent transcripts from activity links in the TUI. Allows users to click on subagent labels in transcripts to inspect their work directly.

### **Feature Request Trends**
The community is heavily focused on **MCP (Model Context Protocol) parity**. The most prominent request (#5059 with 56 upvotes) is the addition of "MCP prompts" support, enabling users to access prebuilt prompts via the "/" command, mirroring the existing tool support. Beyond MCP, there is consistent demand for **improved Windows stability** (Computer Use UI bugs, thread sending issues) and **cross-platform execution reliability** (remote connectivity, sandbox timeouts). The "no usable execution environment" error (#55654) suggests a fundamental gap in environment provisioning that spans all client platforms.

### **Developer Pain Points**
*   **Windows Sandbox & Computer Use Stability**: A cluster of issues (#57101, #54564, #59094, #60610) revolve around the Windows desktop experience. Users are experiencing UI glitches (lingering borders, disabled send buttons), premature session termination, and command pasting bugs.
*   **MCP Integration Friction**: On Linux, the `mcp.json` format is being rejected due to an unrecognized `extensions` field (#53658), while on Windows, MCP servers cannot interact with existing local conversations (#49862). This indicates a need for better format validation and cross-environment compatibility.
*   **Remote & Connectivity Failures**: The Android Remote QR pairing stall (#62032) and the macOS/iOS remote initialization timeout (#62191) point to a fragile WebSocket/handshake layer that breaks client accessibility.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

Here is the Gemini CLI community digest for 2026-11-18.

### Today's Highlights
The Gemini CLI ecosystem is active with significant infrastructure and quality improvements. Key developments include a major npm dependency overhaul binging `@modelcontextprotocol/sdk` from `1.23.0` to `1.32.2` and the resolution of a critical PowerShell parsing bug preventing UI freezes on Windows. Additionally, community attention remains focused on agent reliability, particularly concerning subagent turn limits and browser session management.

### Releases
*No new versions were published in the last 24 hours.*

### Hot Issues (Top 10)
1.  **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** (13 comments): A critical bug where the `codebase_investigator` subagent reports `status: "success"` and `Termination Reason: "GOAL"` despite hitting its `MAX_TURNS` limit. This "silent failure" hides interruptions and is a significant reliability concern for automated workflows.
2.  **[#29759](https://github.com/google-gemini/gemini-cli/issues/29759)** (9 comments): A user reports their Gemini CLI service was disabled due to "Terms of Service violation," prompting an appeal process discussion. This highlights the friction points between automated usage and platform policy enforcement.
3.  **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** (9 comments): An enhancement proposal to leverage model bash affinity via Zero-Dependency OS Sandboxing. This is a key area of development for making Gemini CLI a more native and efficient shell user.
4.  **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** (8 comments): Reports that the Generalist agent hangs indefinitely when deferring to sub-agents. With 8 upvotes, this is a high-priority stability issue affecting basic operations like folder creation.
5.  **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** (7 comments): An EPIC tracking the impact of AST-aware file reads and searches. Community interest is high regarding whether AST tools can reduce token noise and improve precision in code navigation.
6.  **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** (7 comments): Users report that Gemini does not utilize custom skills and sub-agents proactively, requiring explicit instruction to engage them. This feedback shapes the "autonomy" direction of the agent.
7.  **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** (5 comments): The Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`). This configuration bleed is a recurring pain point for users managing long-running browser sessions.
8.  **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** (4 comments): Reports of the browser subagent failing specifically on Wayland display servers, indicating platform-specific stability challenges.
9.  **[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)** (2 comments): The agent gets stuck at an interactive prompt when creating a Vite app. This tracks the need for improved non-interactive behavioral evals and prompt adjustments.
10. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** (4 comments): A feature request for "Automatic session takeover and lock recovery" for the browser agent to handle persistent session modes without failing-fast.

### Key PR Progress (Top 10)
1.  **[#30334](https://github.com/google-gemini/gemini-cli/pull/30334)**: Fixes a multi-second UI freeze on Windows when executing PowerShell commands. Resolves the "Thinking spinner" stall issue during command validation/execution.
2.  **[#30335](https://github.com/google-gemini/gemini-cli/pull/30335)**: Fixes `core.sshCommand` being overridden to an empty string, which caused Git SSH operations to fail with "No such file or directory."
3.  **[#30331](https://github.com/google-gemini/gemini-cli/pull/30331)**: Fixes MCP environment variable parsing to preserve `=` and empty values, preventing corruption of tokens like `TOKEN=abc=def==`.
4.  **[#30107](https://github.com/google-gemini/gemini-cli/pull/30107)**: Makes auth URLs clickable even when wrapped by the terminal, fixing Error 400s caused by truncated login links.
5.  **[#30219](https://github.com/google-gemini/gemini-cli/pull/30219)**: Records tool calls on the active chat instance to prevent 400 errors during compressed session reloads in ACP (Agent Context Protocol) mode.
6.  **[#30216](https://github.com/google-gemini/gemini-cli/pull/30216)**: Adds unit tests for `isApiError` and `isStructuredError` utility functions, improving core error handling robustness.
7.  **[#30342](https://github.com/google-gemini/gemini-cli/pull/30342)**: Pre-pulls the issue triage MCP server image in CI workflows and clears Docker login state, improving pipeline security and efficiency.
8.  **[#30340](https://github.com/google-gemini/gemini-cli/pull/30340)**: Scopes IDE companion discovery files to a per-user temporary directory with strict (`0700`) permissions and implements atomic port file writes.
9.  **[#30315](https://github.com/google-gemini/gemini-cli/pull/30315)**: Detects local Git clones from the CLI path instead of relying on CWD, fixing auto-update misclassification when running from subdirectories or other repos.
10. **[#30338](https://github.com/google-gemini/gemini-cli/pull/30338)**: Keeps `ASK_USER` for shell commands with unresolved expansions, upgrading to `ALLOW` only for read-only commands after bash rewrites them.

### Feature Request Trends
The issue data reveals a strong community focus on **agent autonomy and reliability**. There is significant demand for the model to utilize skills and sub-agents more naturally (Issue #21968) and a push for "Tactful Extraction" logic to manage token usage during file reads (Issue #19561). Furthermore, there is a clear trend toward **AST-aware tooling** (Issues #22745, #22747) to improve precision in code navigation and reduce context bloat. **Browser session persistence** and **configuration respect** (Issues #22267, #22232) remain persistent pain points, indicating a need for more robust state management.

### Developer Pain Points
* **Subagent Turn Limits:** Bugs like #22323 and #21409 reveal that agents frequently fail to respect `MAX_TURNS` limits, leading to hangs or false success reports.
* **Configuration Ignorance:** The Browser Agent consistently ignoring `settings.json` overrides (#22267) frustrates users who configure their workflows globally.
* **Platform Stability:** Wayland compatibility issues (#21983) and interactive prompt stalls (#22465) hinder cross-platform adoption and smooth developer onboarding.
* **Tool Flooding:** The 400 error when enabling >128 tools (#24246) and the "firehose" of context from large file reads (#19561) force developers to manage token budgets aggressively.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

Here is the GitHub Copilot CLI community digest for 2026-11-18.

### **Today's Highlights**
The Copilot CLI release cycle continues with the v1.0.114 patch addressing stability on Windows, while the issue queue reveals a critical identity crisis for plugin extensions following the `@github/copilot-sdk` to `@microsoft/copilot-sdk` rename. Administrators gained finer-grained control over the Browser Use feature via a new managed setting, but users are grappling with sandbox credential mismatches and orphaned plugin processes.

### **Releases**
*   **v1.0.114** (2026-11-18): A targeted patch focusing on stability. Most notably, administrators can now disable the built-in Browser Use feature via the managed setting `features.browserUse`, including in running sessions.
*   **v1.0.113** (2026-11-17): Released roughly 24 hours prior, this version triggered several post-deployment bugs regarding plugin stability and SDK imports (detailed in the Hot Issues section below).

### **Hot Issues** (Top 10)
1.  **[#5492](https://github.com/github/copilot-cli/issues/5492)** - *SDK Renaming Breakage*: In 1.0.113, `@github/copilot-sdk` was renamed to `@microsoft/copilot-sdk` with no alias or migration note. This causes immediate `ERR_MODULE_NOT_FOUND` errors for all existing extensions, representing a significant developer experience regression.
2.  **[#5498](https://github.com/github/copilot-cli/issues/5498)** - *Plugin Restart Loop*: In 1.0.113, running plugin extensions are repeatedly stopped and restarted seconds after an interactive session begins, causing extension startup code to execute twice and logs to duplicate.
3.  **[#5478](https://github.com/github/copilot-cli/issues/5478)** - *Cortex XDR False Positive*: On Windows, Cortex XDR’s “parent_process_spoofing” protection kills the shell when Copilot CLI spawns `git`, effectively crashing the tool when working with repositories.
4.  **[#5491](https://github.com/github/copilot-cli/issues/5491)** - *Marketplace Cloning Inefficiency*: `plugins.marketplaces.add` downloads the entire repository despite only needing `marketplace.json`, lacking progress indicators and ignoring cancellation, leaving orphaned git directories.
5.  **[#5490](https://github.com/github/copilot-cli/issues/5490)** - *Extension State Corruption*: Running `extensions_reload` in a session with active extensions leaves them in a permanent "failed" state due to tool name clashes between old and new connections.
6.  **[#5496](https://github.com/github/copilot-cli/issues/5496)** - *Windows Reparse Point Bug*: On Windows, repo instruction files (`.agent.md`, etc.) are silently skipped when the repository resides on a volume without a drive letter (e.g., folder mounts).
7.  **[#5495](https://github.com/github/copilot-cli/issues/5495)** - *Computer Use Safety Policy*: On Windows, the built-in Computer Use feature blocks all actions for the ChatGPT desktop app (`OpenAI.Codex`) under a built-in safety policy, though the Claude app is permitted.
8.  **[#5493](https://github.com/github/copilot-cli/issues/5493)** - *Fusion Cascade Judge Logic*: In Max sessions, `new_context` terminates an unfinished solver phase prematurely, causing the judge to reject an empty result and trigger an unnecessary repair cycle.
9.  **[#5497](https://github.com/github/copilot-cli/issues/5497)** - *Scoped Instruction Discovery Lag*: Nested or scoped instructions (via `applyTo`) are only discovered after a `view` command, meaning agents editing files without viewing them miss critical rules.
10. **[#5478](https://github.com/github/copilot-cli/issues/5478)** - *Custom Agent Loss on Resume* (Closed): While technically closed this cycle, this regression remains notable; resuming a session no longer restores the custom agent’s `mcp-servers` block or tool allow-list.

### **Key PR Progress**
*   **No new Pull Requests were merged in the last 24 hours.** The project appears to be in a stabilization phase following the v1.0.113 release, with maintainers likely addressing the high-volume bug reports listed above before merging new feature work.

### **Feature Request Trends**
*   **Plugin Stability & Lifecycle**: A strong trend involves plugin reliability. Developers are requesting stable turn IDs (#5487), better lifecycle management to prevent the restart loops seen in #5498, and sparse checkout for marketplace clones (#2463) to reduce disk I/O.
*   **Sandbox & Authentication Hygiene**: There is recurring friction around the local sandbox. Users want the "Authenticate gh" setting to respect the active OAuth session rather than falling back to cached PATs (#4804), and better handling of Entra ID loopback callbacks (#5040) for MCP servers.
*   **Session Portability**: Users want improved import/export functionality (#3630) to move sessions between machines or recover from crashes without losing agent configurations.

### **Developer Pain Points**
*   **The "SDK Renaming" Shock**: The most acute pain point is the undocumented rename of `@github/copilot-sdk` to `@microsoft/copilot-sdk` in v1.0.113. Extensions fail to load immediately, and the lack of a compatibility alias or release note has broken existing workflows.
*   **Windows-Specific Crashes**: The interaction between Copilot CLI and Windows security tools (like Cortex XDR) is causing shell crashes (#5478), making the tool unusable for Windows users working with git repositories.
*   **Plugin "Ghost" State**: Developers report that extensions enter permanent failure modes after reloads (#5490) or restart loops (#5498), with no clear way to reset the state without restarting the entire CLI application.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest - 2026-11-18

## Today's Highlights

OpenCode released v2.3.2 this week, introducing critical fixes for GPT-6.2 prompt caching issues where system prompts were being re-billed as uncached input on every step. The update ensures prompts are sent as leading developer messages on all Responses routes. Additionally, v2.3.1 addressed shell timeout handling, allowing long-running builds and test suites to complete gracefully instead of being abruptly killed when timers expire. These releases demonstrate OpenCode's ongoing focus on reliability and model compatibility for power users.

**Links:** [v2.3.2 Release](https://github.com/anomalyco/opencode/releases/tag/v2.3.2) | [v2.3.1 Release](https://github.com/anomalyco/opencode/releases/tag/v2.3.1)

## Releases

**v2.3.2** — GPT-6.2 Prompt Caching fix: System prompts sent in the `instructions` field of OpenAI Responses API were not being cached, causing repeated billing. OpenCode now sends them as leading developer messages on every route. Also includes the background upgrade flow for OpenCode 1 → 2.0 migration.

**v2.3.1** — Timed Shell Commands: Commands still running when their timeout expires now move to the background instead of being killed. `timeout: 0` now defaults to 120 seconds, preventing premature termination of long builds and test runs.

## Hot Issues (Top 10)

1. **[#59387](https://github.com/anomalyco/opencode/issues/59387)** — Free tier issues (390 comments). The main hub for "Free usage exceeded" and "limit reached" errors. Community is actively troubleshooting reset bugs and subscription barriers.
2. **[#64489](https://github.com/anomalyco/opencode/issues/64489)** — Model catalog cache stale (7 comments, 0 👍). Registry cache was 154.9 hours old, hiding newly released models until service restart. Highlights need for real-time cache invalidation.
3. **[#64588](https://github.com/anomalyco/opencode/issues/64588)** — DB ballooning to 12.7 GB (3 comments). `opencode.db` grew massive with 474 SQLite I/O errors in a 12-minute burst. Critical storage stability issue.
4. **[#64569](https://github.com/anomalyco/opencode/issues/64569)** — Projects lost after migration (2 comments). Post-2.3.0 database migrations caused pre-update projects to disappear from the panel despite sessions surviving.
5. **[#64591](https://github.com/anomalyco/opencode/issues/64591)** — Session tabs lost after reboot (2 comments). Cold Windows reboot results in empty session tab strip; sessions exist in sidebar but UI strip is pruned.
6. **[#64519](https://github.com/anomalyco/opencode/issues/64599)** — Web UI update check broken (2 comments). "Check for updates" button reports no update even when console app detects one; no console errors.
7. **[#64598](https://github.com/anomalyco/opencode/issues/64598)** — GPT-6.2 compaction failure (1 comment). `compaction.failed: Compaction summary did not match the required template` for `gpt-6.2-sol`; returned text lacks matching lines.
8. **[#64594](https://github.com/anomalyco/opencode/issues/64594)** — Sidebar pin action missing (1 comment). "One list" sidebar has no Pin item or Pinned section; pinning only available in Projects/Recent views.
9. **[#64529](https://github.com/anomalyco/opencode/issues/64529)** — `<leader>q` bound twice (2 comments). Default TUI keymap binds `<leader>q` to both `app.exit` and `session.queued_prompts`, causing unintended quit behavior.
10. **[#64595](https://github.com/anomalyco/opencode/issues/64595)** — Intermittent tunnel failure (3 comments). Browser fails with `ERR_TUNNEL_CONNECTION_FAILED` on specific hosts inconsistently between runs.

## Key PR Progress (Top 20)

1. **[#64600](https://github.com/anomalyco/opencode/pull/64600)** — Deprecate GLM-5.3-Flash Free. Model leaving free tier; dropped from docs, pricing lists, and `PREFERRED_FREE` to prevent signed-out clients from pre-selecting it.

2. **[#64437](https://github.com/anomalyco/opencode/pull/64437)** — Embellable Rust port for Code Mode. Adds `packages/codemode-rust` (crate `psychoscript`) as a second implementation embeddable by Rust programs without Bun/Node.

3. **[#64597](https://github.com/anomalyco/opencode/pull/64597)** — Web app base path support. Allows building the web app to run under a path prefix (e.g., `https://host/opencode/`) behind a reverse proxy.

4. **[#64400](https://github.com/anomalyco/opencode/pull/64400)** — Typed English catalog for TUI alerts/permissions. Seeds synchronous catalog in `packages/tui/src/i18n` and converts alert dialog and permission label surfaces.

5. **[#62146](https://github.com/anomalyco/opencode/pull/62146)** — Pin npm cache generations while plugins use them. Fixes `Npm.update` pruning cache after each install; keeps two newest generations plus anything younger than 7 days.

6. **[#64402](https://github.com/anomalyco/opencode/pull/64402)** — Translate mini forms and permission prompts in TUI. Converts mini forms and permission surfaces to the i18n catalog.

7. **[#64401](https://github.com/anomalyco/opencode/pull/64401)** — Translate mini footer and command palette in TUI. Moves mini footer, command palette, and prompt submissions to the catalog system.

8. **[#62817](https://github.com/anomalyco/opencode/pull/62817)** — Handle pacote a real npm for git plugins. Fixes `git dep preparation failed` for Git dependencies with `prepare`/`build` steps that run `npm install`.

9. **[#64596](https://github.com/anomalyco/opencode/pull/64596)** — Add work steps policy. Persists shared rules for when agent work opens/folds and which replies stay visible across sessions.

10. **[#64559](https://github.com/anomalyco/opencode/pull/64559)** — Thread Rust runs by program complexity. Refactors how PsychoScript runs programs based on complexity, no new APIs.

11. **[#64445](https://github.com/anomalyco/opencode/pull/64445)** — Independent work-area folding. Adds default-off "Work steps" experiment in Settings → Experiments.

12. **[#64390](https://github.com/anomalyco/opencode/pull/64390)** — Keep session-mention prefix checks on char boundaries. Fixes `mentions()` byte offset landing inside multibyte characters when no `@session:` prefix exists.

13. **[#63477](https://github.com/anomalyco/opencode/pull/63477)** — Port CLI to native. Porting CLI to simonklee's `opencode-native-preview` project.

14. **[#59290](https://github.com/anomalyco/opencode/pull/59290)** — Apply prompt agent selection at delivery boundary. Fixes `session.switchAgent` eagerly publishing `agent.selected` when submitting a prompt during a turn.

15. **[#54779](https://github.com/anomalyco/opencode/pull/54779)** — Defer queued agent and model selection until delivery. Fixes queue interaction where selecting Plan and pressing Ctrl+X+Enter no longer changes active Build tasks.

16. **[#64436](https://github.com/anomalyco/opencode/pull/64436)** — Add Hostlinku provider plugin. Built-in provider plugin for Hostlinku registered in `ProviderPlugins`.

17. **[#64586](https://github.com/anomalyco/opencode/pull/64586)** — Replace `watch_mcp_event` with `list_mcp_events`. Refactors agents to use automation with event triggers instead of `watch_mcp_event`.

18. **[#63002](https://github.com/anomalyco/opencode/pull/63002)** — Signed-in browser pane with extensions. Web links open beside conversation in one profile keeping sign-ins; bring sign-ins from own browser in one click.

19. **[#64589](https://github.com/anomalyco/opencode/pull/64589)** — Tell models about Bun's file APIs in Code Mode. With `full_codemode` on, execute tool tells model about Bun file APIs.

20. **[#64587](https://github.com/anomalyco/opencode/pull/64587)** — Say why an import can't be resolved. Code Mode's unresolved import error now specifies what actually went wrong instead of a generic message.

## Feature Request Trends

- **Model Discovery & Caching**: Multiple issues (#64489, #64594) request real-time model catalog refresh and pinning capabilities in sidebars. Users want guaranteed access to new models without service restarts and consistent pinning across all sidebar views.

- **TUI/Keyboard Conflict Resolution**: Repeated complaints about keybind collisions (#64529) and hardcoded desktop behaviors (#64601). Community demands configurable `keybinds` settings that work uniformly across CLI, TUI, and desktop interfaces.

- **Database & Storage Stability**: Large #64588 DB growth and #53879 concurrent startup failures indicate a need for better WAL management, connection pooling, and migration strategies that don't lose historical project data.

- **Cross-Platform Consistency**: Windows-specific bugs (#63892, #64591, #64569) alongside Linux/ macOS issues suggest a platform parity goal — users expect identical behavior regardless of OS, especially for session persistence and tool spawnling.

- **Code Mode Reliability**: Issues #57344 and #64587 highlight ongoing challenges with tool call serialization and import resolution. Feature requests focus on making Code Mode more deterministic and error-transparent.

## Developer Pain Points

1. **Database bloat & corruption**: `opencode.db` growing to 12+ GB with thousands of I/O errors (#64588, #53879) is the most critical technical debt. Users report app crashes, failed launches, and lost project data requiring manual SQLite intervention.

2. **Free tier opacity**: Issue #59387 with 390 comments shows the free tier status system is a major friction point. Users struggle to understand usage limits, reset timing, and subscription prompts — especially when cache staleness (#64489) or model deprecation (#64600) creates confusion.

3. **Windows-first bug pattern**: A significant cluster of recent issues (#63892, #64591, #64569, #64529) are Windows-specific, suggesting the Windows build/lifecycle may receive less testing attention than macOS/Linux paths.

4. **Migration data loss**: Post-v2.3.0 database migrations (#64569) pruned pre-update projects from the UI while keeping sessions in the sidebar. Users report "disappearing projects" requiring manual re-discovery.

5. **Keybind configuration gaps**: The desktop app hardcodes `Enter` to send prompts while ignoring `input.submit`/`input.newline` CLI settings (#64601). TUI keymap collisions (#64529) further fragment the expected workflow across interfaces.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

### Pi Developer Community Digest
**Generated:** 2026-11-18

---

### 1. Today's Highlights
The Pi developer community is experiencing a surge of activity as the 1.5.2 release cycle nears completion. Three critical stability bugs related to concurrent tool execution and session management were identified and fixed in recent Pull Requests, while user feedback highlights growing demand for improved cross-provider model routing and expanded provider integrations. The Windows integration discussion (Issue #7547) remains the most commented-upon thread, reflecting ongoing platform adoption challenges.

### 2. Releases
No new versions were published in the last 24 hours. The latest stable release remains `@earendil-works/pi-coding-agent@1.5.2`.

### 3. Hot Issues (10 Notable)
*   **#12271 & #12253: Crash on concurrent read failures** (2 comments each) – Two identical crashes in `pi-coding-agent` 1.5.2 where `AbortError` propagates unhandled when `codemode` scripts fail during parallel `tools.read()` calls. Community members are urgently seeking a fix before the 1.5.2 stabilization phase concludes.
*   **#12273: GPT-6.2 System Prompt Cache Regression** (2 comments) – GPT-6.2 Sol reports drastically lower prompt-cache reuse (3,968 vs 12,800 tokens) compared to 6.1 Sol on turn 4, suggesting a regression in how the model handles cached context across turns.
*   **#12265: Virtual Model Compaction Overrides Ignored** (2 comments) – Model routing configurations using `modelOverrides` are silently ignored when a virtual model (e.g., `hybrid/auto`) is selected, preventing per-model compaction tuning.
*   **#12258 & #12255: Sarvam AI Provider Addition** (2 comments each) – Community requests to add Sarvam AI Token Factory as a built-in provider, specifically asking for exposure of ten documented chat model IDs and support for `SARVAM_API_KEY`.
*   **#12261: Unregistered Tool Call Silent Halting** (1 comment) – A tool call naming an unregistered tool silently halts the agent's turn and leaks call framing to the TUI, breaking workflow expectations.
*   **#12272: SIGTSTP Terminal State** (1 comment) – When `pi` is stopped by an external `SIGTSTP`, the terminal is not restored, leaving mouse tracking (SGR 1006/1002) and the Kitty keyboard protocol enabled, causing escape sequences to type unexpectedly at the shell prompt.
*   **#12267: Missing 'ultra' Thinking Level** (1 comment) – Pi 1.5.2's thinking scale (`off, minimal, low, medium, high, xhigh, max`) lacks an `ultra` level, causing parsing issues when OpenAI-compatible gateways advertise it.
*   **#12260: Default Compaction Model Setting** (1 comment) – Request for an optional `compaction.model` setting to always use a pinned model for compaction, allowing cheaper models to handle summarization without manual switching.
*   **#12257: Skill Collision Warnings** (1 comment) – Pi emits collision warnings even when resource precedence already deterministically selects a winner, creating "warning storms" for intentional overrides.
*   **#7547: Windows Integration Guidance** (97 comments) – The longest-running discussion details the complexities of running Pi on Windows, focusing on conflicting methods for installation, execution, and documentation coverage.

### 4. Key PR Progress (10 Important)
*   **#12280: Tree Navigation History Pollution** – Fix ensures `/tree` selectors and `navigateTree` actions no longer re-render chat with `populateHistory: true`, preventing duplicate prompt entries in up-arrow history.
*   **#12278: Scoped Model Refresh on Reload** – `/reload` now refreshes scoped models so changes to `enabledModels` take effect without restarting Pi, respecting `--models` startup flags.
*   **#12276: Documentation Annotation** – PR closed (accidentally opened); intended to annotate Pi agent source code for learning purposes.
*   **#12275: TUI Scrollback Redraw Fix** – Stops unnecessary full-scrollback redraws when long assistant responses update after scrolling above the viewport.
*   **#12274: Input Cursor Flicker Fix** – Resolves high-speed strobe flickering of the input cursor during assistant streaming or footer updates.
*   **#12262: session_compact Emission** – Emits `session_compact` event when extensions commit compaction via boundary drafts (`turn_end` / `agent_before_settle`), fixing reliance on this event by other extensions.
*   **#12256: Skill Collision Diagnostics** – Suppresses diagnostics for intentional higher-precedence overrides while retaining warnings for genuinely ambiguous same-precedence collisions.
*   **#12028: Compaction Trigger Deferral** – Defers `sendMessage` `triggerTurn` until compaction ends, preventing runs from using uncompacted branches.
*   **#11370: New Provider Additions** – Stacked on #11369, adds DeepInfra, Nebius, Ollama Cloud, Scaleway, SiliconFlow, and StepFun providers from models.dev.
*   **#12277: (Implicit)** – Context for #12278; addresses `--models` flag precedence at startup.

### 5. Feature Request Trends
*   **Provider Expansion:** High demand for adding non-OpenAI providers (Sarvam AI, DeepInfra, Nebius, etc.) to the `/login` and `/model` interfaces, with users wanting automatic model discovery and token factory support.
*   **Windows First-Class Support:** Persistent request for better Windows integration, including clearer installation paths, environment variable guidance, and resolution of the "too many ways to run pi" fragmentation problem.
*   **Context & Cache Management:** Significant focus on system prompt caching behavior across model version changes and thinking level switches, alongside requests for configurable compaction models to optimize cost/performance.
*   **Session Stability:** Recurring themes around crash stability during concurrent tool execution, signal handling (`SIGTSTP`), and session forking when multiple processes interact with the same session file.

### 6. Developer Pain Points
*   **Concurrent Tool Crashes:** The most acute pain point is the `AbortError` crash when `codemode` scripts run parallel `tools.read()` calls and one path fails (e.g., `ENOENT`). This causes the entire Pi process to exit unexpectedly.
*   **Session State Management:** Developers report difficulties with session forking when multiple Pi instances interact with a shared session file, leading to entries being parented to stale leaves.
*   **Provider Model Routing:** Complexities in configuring `modelOverrides` and `compaction.model` for virtual/routed models, where settings are frequently ignored or not properly resolved.
*   **Cross-Platform Consistency:** The Windows experience is cited as fragmented, with users struggling to navigate multiple installation methods and lacking "out of the box" parity with macOS/Linux experiences.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

**Qwen Code Community Digest**
**Generated on: 2026-11-18**

### 1. Today's Highlights
The Qwen Code project saw a flurry of activity today with the release of **v0.28.1-preview.0** and **v0.28.0**. The preview release focuses on stability improvements for the managed agent workflow, specifically observing real scheduled loops in full-stack E2E tests. Meanwhile, the stable v0.28.0 release introduces a much-anticipated sidebar workspace filter for the web-shell and adds the DingTalk adapter for the managed agent. Bundled with these releases is SDK TypeScript v0.1.35, updating the CLI to version 0.28.0. Community engagement remains high, with two new issues filed today regarding Linux clipboard behavior and version comparisons.

### 2. Releases
*   **v0.28.1-preview.0**: A preview release focusing on observing real scheduled/loop fires in full-stack E2E tests for the managed agent. No breaking changes noted.
*   **v0.28.0**: The stable release features a new **sidebar workspace filter** for the web-shell and the addition of the **DingTalk adapter** for the managed agent. The bundled SDK TypeScript v0.1.35 accompanies CLI version 0.28.0.
    *   [v0.28.1-preview.0 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.1-preview.0)
    *   [v0.28.0 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.28.0)

### 3. Hot Issues (Top 10)
1.  **[#17683](https://github.com/QwenLM/qwen-code/issues/17683)**: Request for middle-click PRIMARY selection paste in OpenTUI on Linux. Matters as it addresses a basic desktop usability expectation on X11/Wayland.
2.  **[#17696](https://github.com/QwenLM/qwen-code/issues/17696)**: Inquiry about the difference between 1.0.0-preview and 0.xx versions. Reflects user confusion regarding the versioning strategy.
3.  **[#17694](https://github.com/QwenLM/qwen-code/issues/17694)**: CI failure regarding argv/cwd reaper fixtures colliding with real ancestor PIDs. Critical for CI stability and developer pipeline reliability.
4.  **[#17695](https://github.com/QwenLM/qwen-code/issues/17695)**: Follow-up on test coverage gaps from PR #17471 regarding managed-agent session cancellation. Highlights the importance of test completeness for core features.
5.  **[#14724](https://github.com/QwenLM/qwen-code/issues/14724)**: Persistent Main CI failure: "Managed Agent gate — no test identified." A long-running issue (since Oct 19) affecting merge capabilities.
6.  **[#4845](https://github.com/QwenLM/qwen-code/issues/4845)**: Feature request to add `/import-config` for Claude user config migration. Represents a common migration friction point for developers switching from Claude Code.
7.  **[#17691](https://github.com/QwenLM/qwen-code/issues/17691)**: (Linked from PR) Centralizing DingTalk reconnection. Related to the recent adapter addition in v0.28.0.
8.  **[#17680](https://github.com/QwenLM/qwen-code/issues/17680)**: (Linked from PR) Fix for managed-agent continuation-ready parks in epoch-less resubmission. Impacts agent reliability.
9.  **[#17676](https://github.com/QwenLM/qwen-code/issues/17676)**: Fix to make background work visible on sidebar session rows. Improves UI feedback for active sessions.
10. **[#17654](https://github.com/QwenLM/qwen-code/issues/17654)**: Fix to prevent automatic work from blocking worktree restore. Critical for maintaining local git state during agent workflows.

### 4. Key PR Progress (Top 10)
1.  **[#17684](https://github.com/QwenLM/qwen-code/pull/17684)**: Refactor to extract the shared composer status stack component in web-shell. Improves code maintainability and consistency across daemon views.
2.  **[#17690](https://github.com/QwenLM/qwen-code/pull/17690)**: Implementation of stateless Hosted Harness phase 1 idle suspension. A significant architectural step toward more efficient resource management for hosted agents.
3.  **[#17662](https://github.com/QwenLM/qwen-code/pull/17662)**: Unifying SSE admission and occupancy across all stream surfaces. Enhances stability and resource management for long-lived daemon streams.
4.  **[#17686](https://github.com/QwenLM/qwen-code/pull/17686)**: Fix to keep `/send` replies in view and drop gaps under send records. Polishes the Web Shell UX.
5.  **[#17576](https://github.com/QwenLM/qwen-code/pull/17576)**: Fix to enforce the peer frame limit before dispatch. Prevents oversized frames from disrupting the completion pipeline.
6.  **[#17691](https://github.com/QwenLM/qwen-code/pull/17691)**: Centralizing DingTalk reconnect so one drop arms one chain. Ensures robust network handling for DingTalk users.
7.  **[#17685](https://github.com/QwenLM/qwen-code/pull/17685)**: Labels shell output as "combined streams" apart from execution errors. Improves clarity of tool output for the model.
8.  **[#17680](https://github.com/QwenLM/qwen-code/pull/17680)**: Fix for managed-agent drive continuation-ready parks in the epoch-less resubmission arm. Refines the agent's recovery mechanism.
9.  **[#17003](https://github.com/QwenLM/qwen-code/pull/17003)**: Addition of configurable turn_detection for realtime sessions. Essential for live voice integration with Qwen audio models.
10. **[#17498](https://github.com/QwenLM/qwen-code/pull/17498)**: Fix to wait for process startup before closing a query in SDK Python. Prevents race conditions and resource leaks during shutdown.

### 5. Feature Request Trends
Analysis of recent issues reveals a strong focus on **cross-tool interoperability and platform parity**. The most requested direction is **migration tooling**, specifically the demand for an `/import-config` command to ease the transition from Claude Code (Issue #4845). Additionally, there is consistent demand for **Linux desktop parity**, notably middle-click paste support in OpenTUI (Issue #17683) and native macOS notifications (PR #16338). **Version clarity** is also a pain point, with users seeking clearer distinctions between 0.xx and 1.0.0-preview releases (Issue #17696). Lastly, **CI/CD stability** remains a persistent theme, with several issues concerning test identification and fixture collisions (Issues #14724, #17694).

### 6. Developer Pain Points
*   **CI Instability**: Recurring failures in the "Managed Agent gate" (#14724) and argv/cwd reaper fixture collisions (#17694) hinder developers' ability to merge changes and test locally.
*   **Migration Friction**: Switching from competing tools like Claude Code requires manual re-creation of MCP servers and configurations (#4845), creating a high barrier to entry.
*   **Linux UX Gaps**: Missing standard desktop behaviors, such as middle-click paste in the OpenTUI renderer (#17683), frustrates users on X11/Wayland systems.
*   **Version Confusion**: The proliferation of preview (1.0.0-preview) and stable (0.xx) versions leads to user uncertainty about which version to use and their feature differences (#17696).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

### DeepSeek TUI Community Digest
**Date:** 2026-11-18

---

### 1. Today's Highlights
The community is currently laser-focused on stabilizing the TUI under heavy load. A critical freeze bug (#7357) resurfaced, causing 209-second lockups during turn transitions, while a complementary PR (#7360) offers a two-second timeout fix. Simultaneously, localization efforts (#7367) and model compatibility patches (#7364, #7366) indicate a push toward multi-provider robustness and polish.

### 2. Releases
No new versions were published in the last 24 hours.

### 3. Hot Issues
| Issue | Why It Matters | Community Reaction |
| :--- | :--- | :--- |
| **[#7357](https://github.com/codewhale-hq/Codewhale/issues/7357)** | A severe freeze bug where the TUI locks entirely during turn transitions if a save-snapshot is requested, rendering the application unusable for minutes. | High severity; users report waits up to 209s. Community awaits PR #7360. |
| **[#7365](https://github.com/codewhale-hq/Codewhale/issues/7365)** | Exposes a discrepancy where `opencode-zen` lists "free" model IDs that trigger 429 FreeUsageLimitErrors due to exact payload/TLS checks. | Critical for free-tier users; highlights provider credential management issues. |
| **[#7363](https://github.com/codewhale-hq/Codewhale/issues/7363)** | Focus recovery erases the viewport on certain terminals (DEC 2026), causing a distracting flicker/blink. | Affects UI polish; fix restores margins/origin without clearing the screen. |
| **[#7359](https://github.com/codewhale-hq/Codewhale/issues/7359)** | Sub-agents lose the session's reviewed memory and "Memory Hygiene" guidance in their system prompts. | Breaks multi-agent workflows; ensures context propagation across spawning. |
| **[#7364](https://github.com/codewhale-hq/Codewhale/issues/7364)** | MCP tools with optional default parameters (e.g., `limit: int | None`) are silently dropped on Moonshot/Kimi models. | Breaks tool integration for Python servers using Pydantic v2/MCP. |
| **[#7357](https://github.com/codewhale-hq/Codewhale/issues/7357)** (Duplicate entry for emphasis) | Same as above; the freeze is the most urgent technical debt. | — |

### 4. Key PR Progress
| PR | Description |
| :--- | :--- |
| **[#7360](https://github.com/codewhale-hq/Codewhale/pull/7360)** | **Bugfix:** Binds the terminal snapshot wait to a 2s Engine snapshot delay, returning control to the event loop instead of freezing during turn transitions. |
| **[#7367](https://github.com/codewhale-hq/Codewhale/pull/7367)** | **Localization:** Moves six remaining hard-coded English strings to locale packs; all 15 packs updated, using full-width punctuation for zh-Hans. |
| **[#7363](https://github.com/codewhale-hq/Codewhale/pull/7363)** | **TUI Fix:** Separates focus recapture from explicit clear requests, restoring terminal modes/margins before repainting to avoid viewport erasure. |
| **[#7366](https://github.com/codewhale-hq/Codewhale/pull/7366)** | **Snapshot Safety:** Implements rollback of partial file-scoped restores using existing safety snapshots to prevent workspace inconsistency. |
| **[#7362](https://github.com/codewhale-hq/Codewhale/pull/7362)** | **Engine Optimization:** Avoids redundant whole-history reads during named-turn undo by reusing previously loaded records. |
| **[#7364](https://github.com/codewhale-hq/Codewhale/pull/7364)** | **Model Fix:** Retains MCP tools with null-default optional parameters on the Moonshot route, fixing silent tool omission. |
| **[#7336](https://github.com/codewhale-hq/Codewhale/pull/7336)** | **Dependency Update:** Bumps `lru` from 0.18.5 to 0.19.0, likely performance/memory improvements. |
| **[#7337](https://github.com/codewhale-hq/Codewhale/pull/7337)** | **Dependency Update:** Bumps `jsonschema` from 0.57.0 to 0.61.2, addressing Python release notes. |
| **[#7332](https://github.com/codewhale-hq/Codewhale/pull/7332)** | **CI/Build:** Bumps `softprops/action-gh-release` from 3.0.3 to 3.0.4 for release pipeline stability. |
| **[#7330](https://github.com/codewhale-hq/Codewhale/pull/7330)** | **CI/Build:** Bumps `codewhale-hq/Codewhale/scripts/github-action/publish` for artifact publishing reliability. |

### 5. Feature Request Trends
*   **Multi-Provider Model Reliability:** There is significant demand for robust handling of "free tier" model IDs and TLS/cipher negotiations (Issue #7365), suggesting users want seamless switching between providers like Opencode-Zen without hitting 429 errors.
*   **TUI Stability & Responsiveness:** The freeze bug (#7357) and focus rendering issues (#7363) highlight a trend toward making the interface resilient under load and fast focus switching, rather than just feature-addition.
*   **Sub-Agent Memory Propagation:** Issues like #7359 reveal a need for child prompts to inherit the parent session's reviewed memory state, indicating a push for sophisticated multi-agent orchestration.

### 6. Developer Pain Points
*   **TUI Freeze on Turn Transition:** The most pressing pain point is the application-wide freeze when a new turn starts concurrently with a save operation. This blocks all input and output, requiring a hard terminal kill.
*   **Silent Tool/Opt Parameter Drop:** Developers using MCP tools with `None` defaults in Python/Pydantic v2 find their tools vanish from the model's context without error, breaking integration workflows on models like Moonshot.
*   **Viewport Corruption during Focus:** On specific terminal configurations, recovering focus leaves a blank screen, forcing a repaint and disrupting the user's place in the conversation.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*