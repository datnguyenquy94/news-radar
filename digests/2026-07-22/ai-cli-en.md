# AI CLI Tools Community Digest 2026-07-22

> Generated: 2026-07-22 02:26 UTC | Tools covered: 10

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

**Technical Analysis Report: AI CLI Ecosystem Digest**
**Date:** 2026-07-22
**Subject:** Cross-Tool Comparison and Ecosystem Trend Analysis

---

### 1. Ecosystem Overview
The AI CLI landscape is transitioning from simple "LLM-as-a-terminal" wrappers toward sophisticated **agentic orchestration systems**. Current development is characterized by a "stability-first" phase, where developers are grappling with OS-level resource management (kernel panics, WMI storms) and complex subagent lifecycle states. There is a clear move toward standardized protocols (MCP) and robust context management to handle the demands of massive monorepos and long-running coding sessions.

### 2. Activity Comparison
*Data reflects the community digest for 2026-07-22.*

| Tool | Issues Reported | Key PRs | Recent Release | Activity Level |
| :--- | :---: | :---: | :--- | :--- |
| **Claude Code** | 10 | 10 | v2.1.217 | High |
| **OpenAI Codex** | 10 | 10 | rust-v0.145.0 | High |
| **Gemini CLI** | 10 | 8 | v0.52.0-nightly | High |
| **GitHub Copilot CLI** | 10 | 1 | v1.0.74-0 | Moderate (Stable) |
| **Qwen Code** | 10 | 10 | v0.20.1 | High |
| **OpenCode** | 10 | 10 | N/A | High |
| **Pi** | 10 | 10 | v0.81.1 | High |
| **DeepSeek TUI** | 10 | 10 | v0.9.1 (Recent) | High |
| **Kimi Code CLI** | 5 | 1 | N/A | Moderate |
| **Grok Build** | 0 | 0 | N/A | Inactive |

### 3. Shared Feature Directions
Analysis reveals four critical requirements appearing across multiple ecosystems:
*   **Subagent Orchestration & Transparency:** A dominant trend across **Claude Code, Codex, Copilot CLI, Qwen Code, and DeepSeek TUI**. Users demand better visibility into subagent progress, "truthful" status reporting, and safer boundaries for destructive actions (e.g., `git reset`).
*   **MCP (Model Context Protocol) Integration:** High priority for **Claude Code, Copilot CLI, Kimi Code, and DeepSeek TUI**. The focus is shifting from simple tool execution to supporting full MCP resources, prompts, and subscriptions.
*   **Context Window Management:** **Claude Code, Codex, Gemini CLI, Copilot CLI, and Pi** all show significant community friction regarding `ECONNRESET` errors, auto-compaction reliability, and managing 1M+ context windows.
*   **Platform-Specific Hardening:** **Claude Code, Codex, Gemini CLI, OpenCode, and Pi** are all actively addressing OS-specific bugs (macOS kernel panics, Windows WMI/process storms, and WSL compatibility).

### 4. Differentiation Analysis
*   **Agentic vs. Infrastructure Focus:** **Claude Code** and **Qwen Code** are heavily invested in complex agent behaviors (subagents, "hookify" systems). In contrast, **Pi** and **OpenCode** are prioritizing infrastructure, such as local model management (`llama.cpp`), SaaS connectors, and build reproducibility.
*   **TUI vs. Web/Hybrid UX:** **DeepSeek TUI** and **Kimi Code** are focusing on refining the Terminal User Interface (input responsiveness, scrollable transcripts), while **Codex** and **Claude Code** are managing more complex state transitions between web interfaces and terminal sessions.
*   **Enterprise vs. Community-Driven:** **GitHub Copilot CLI** and **Gemini CLI** show a stronger focus on enterprise hurdles (OAuth, registry policies, and platform unification like Antigravity), whereas **OpenCode** and **DeepSeek TUI** are driven by high-velocity community PR contributions.

### 5. Community Momentum & Maturity
*   **High Momentum (Rapid Iteration):** **Claude Code, Codex, Qwen Code,** and **OpenCode** show the highest velocity, with nearly 1:1 Issue-to-PR ratios and heavy focus on experimental features (e.g., "thinking" controls, cross-platform skills).
*   **Mature/Stable Maintenance:** **GitHub Copilot CLI** shows a lower PR count today but represents a more mature, stable release cycle focusing on refining existing features (plan mode, MCP) rather than foundational architecture.
*   **Strategic Transition:** **Gemini CLI** is in a unique state of "migration maturity," where the community is navigating a transition to a new ecosystem (Antigravity) rather than just feature addition.

### 6. Trend Signals
*   **"Process Storms" as a Technical Blocker:** A recurring issue in the Codex and Claude ecosystems suggests that as agents become more autonomous, they risk triggering system-level failures (WMI/Kernel) due to rapid, unmanaged process spawning.
*   **Standardization of "Skills":** The move toward "skills" (Qwen) and "hooks" (Claude) indicates a shift toward a modular architecture where tool definitions are decoupled from the core agent logic.
*   **Context "Noise" Reduction:** There is a growing demand for **AST-aware** processing (Gemini) and smarter **ignore rules** to prevent the model from ingesting irrelevant data (e.g., `.venv` or large binaries), which is currently a major pain point for large-scale projects.
*   **Reliability over Novelty:** The sheer volume of issues related to "silent hangs," "input lag," and "auth refresh failures" signals that the next 6–12 months will be dominated by UX polishing and reliability engineering rather than "new" model features.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data Date:** 2026-07-22
**Source:** anthropics/skills

---

### 1. Top Skills Ranking
*Based on technical complexity, scope, and community engagement indicators.*

*   **Self-Audit (v1.3.0)** | [PR #1367](https://github.com/anthropics/skills/pull/1367)
    *   **Functionality:** A multi-dimensional reasoning quality gate that performs mechanical file verification followed by a four-dimension reasoning audit in damage-severity priority order.
    *   **Discussion Highlights:** Positioned as a universal "quality gate" for any tech stack to verify AI output before delivery.
    *   **Status:** Open
*   **Testing Patterns** | [PR #723](https://github.com/anthropics/skills/pull/723)
    *   **Functionality:** A comprehensive testing stack covering testing philosophy (Trophy model), unit testing (AAA patterns), and React component testing (Testing Library).
    *   **Discussion Highlights:** Addresses the "what to test vs. what NOT to test" dilemma for developers.
    *   **Status:** Open
*   **Document Typography** | [PR #514](https://github.com/anthropics/skills/pull/514)
    *   **Functionality:** Quality control for AI-generated documents, specifically targeting orphan words, widow paragraphs, and numbering misalignment.
    *   **Discussion Highlights:** Focuses on high-polish output that users often forget to request explicitly.
    *   **Status:** Open
*   **Color Expert** | [PR #1302](https://github.com/anthropics/skills/pull/1302)
    *   **Functionality:** A specialized domain skill for color naming systems (Munsell, RAL, etc.) and color space conversions (OKLCH, OKLAB).
    *   **Discussion Highlights:** Provides a "what to use when" reference for technical design tasks.
    *   **Status:** Open
*   **ODT (OpenDocument Text)** | [PR #486](https://github.com/anthropics/skills/pull/486)
    *   **Functionality:** Creation, filling, and conversion of .odt and .ods files, including parsing to HTML.
    *   **Discussion Highlights:** Supports open-source/ISO standard document workflows.
    *   **Status:** Open
*   **SAP-RPT-1-OSS Predictor** | [PR #181](https://github.com/anthropics/skills/pull/181)
    *   **Functionality:** Utilizes SAP’s open-source tabular foundation model for predictive analytics on business data.
    *   **Discussion Highlights:** Represents an enterprise-grade integration for predictive modeling.
    *   **Status:** Open
*   **Skill Quality/Security Analyzers** | [PR #83](https://github.com/anthropics/skills/pull/83)
    *   **Functionality:** Meta-skills designed to evaluate other skills across structure, documentation, and security dimensions.
    *   **Discussion Highlights:** Establishes a standard for the "marketplace" of skills.
    *   **Status:** Open

---

### 2. Community Demand Trends
Analysis of active issues reveals four primary pillars of demand:

*   **Governance & Safety:** High interest in "Agent Governance" (#412) and "Reasoning Quality Gates" (#1385). The community wants skills that enforce policy, detect threats, and provide audit trails for AI agents.
*   **Enterprise Scalability:** Significant demand for organizational features, specifically org-wide skill sharing (#228) and secure handling of enterprise data sources like SharePoint Online (#1175).
*   **Infrastructure & Compatibility:** A recurring theme of troubleshooting Windows-specific subprocess errors (#1061, #1099, #1050) and fixing "zero-recall" bugs in the `run_eval.py` optimization loop (#556, #1169, #1323).
*   **Architecture Evolution:** Exploration of transitioning Skills into the Model Context Protocol (MCP) framework (#16) to standardize how software APIs are signaled.

---

### 3. High-Potential Pending Skills
*The following skills are highly relevant and currently awaiting finalization/merging:*

*   **Self-Audit (#1367):** High potential as a foundational "meta-skill" for reliability.
*   **Testing Patterns (#723):** High utility for the developer demographic.
*   **Document Typography (#514):** High "wow factor" for non-technical document generation.
*   **Color Expert (#1302):** Highly niche but high-utility for design-centric workflows.

---

### 4. Skills Ecosystem Insight
The community's most concentrated demand is shifting from **task-specific execution** toward **meta-skills**—tools designed to audit, verify, and govern the quality and safety of AI-generated outputs.

---

# Claude Code Community Digest: 2026-07-22

## Today's Highlights
The community is currently navigating several high-priority stability issues, most notably a kernel panic risk caused by file descriptor storms in background sessions and reports of subagents performing destructive git operations. On the feature front, the latest release introduces a more expressive prompt experience with emoji shortcode support and improved diagnostic warnings for session failures.

## Releases
**v2.1.217**
- **Emoji Support:** Added emoji shortcode autocomplete in the prompt input (e.g., `:heart:` for ❤️). This can be toggled via the `emojiCompletionEnabled` setting.
- **Diagnostic Improvements:** New warnings for failed transcript writes (e.g., disk full) and alerts when session saving is disabled due to inheritance issues.

## Hot Issues
1. **#34255 Remote Control Reconnection Failure** ([Link](https://github.com/anthropics/claude-code/issues/34255)): A high-engagement bug where remote connections drop silently without recovery. This is a major friction point for developers working across distributed environments.
2. **#80006 Subagents Destroying Git History** ([Link](https://github.com/anthropics/claude-code/issues/80006)): A critical safety concern where subagents have been observed running `git reset` commands that orphan committed work.
3. **#79920 Background Session Kernel Panic** ([Link](https://github.com/anthropics/claude-code/issues/79920)): A severe system-level bug where a "file descriptor storm" in background sessions can trigger a `launchd SIGBUS` and kernel panic on macOS.
4. **#74544 1M-Context ECONNRESET** ([Link](https://github.com/anthropics/claude-code/issues/74544)): Users with massive context windows are facing unrecoverable connection resets, even when attempting to use the `/compact` command.
5. **#79360 Fable 5 Auth/Usage Gate** ([Link](https://github.com/anthropics/claude-code/issues/79360)): A permission-related bug where Max plan users are being gated by usage credits dialogs despite having valid `setup-token` authentication.
6. **#79992 macOS Filesystem MCP Drops** ([Link](https://github.com/anthropics/claude-code/issues/79992)): Tool calls to filesystem-class MCP servers are being silently dropped on macOS despite approval gates passing.
7. **#78460 Subagent Token Caps** ([Link](https://github.com/anthropics/claude-code/issues/78460)): Subagents are being capped at 8,000 output tokens, which can exhaust budgets on "thinking" before the agent can provide a useful response.
8. **#75037 Background Agent Crash-Loops** ([Link](https://github.com/anthropics/claude-code/issues/75037)): Reports of fast session termination and worker crash-loops when reattaching to background agents.
9. **#79325 macOS Keyboard Input Issues** ([Link](https://github.com/anthropics/claude-code/issues/79325)): Interactive choice prompts are rendering but failing to accept keyboard input in the Apple Terminal.
10. **#76231 Web Split-Pane Rendering** ([Link](https://github.com/anthropics/claude-code/issues/76231)): A regression in the web interface where the side-by-side session view stopped rendering.

## Key PR Progress
- **#79620 Accessibility TTS Hook** ([Link](https://github.com/anthropics/claude-code/pull/79620)): Implements a production-ready text-to-speech hook supporting Piper (Linux), system say (macOS), and PowerShell (Windows).
- **#79889 Hookify Path Fix** ([Link](https://github.com/anthropics/claude-code/pull/79889)): Ensures hook entrypoints are runnable without requiring `CLAUDE_PLUGIN_ROOT`.
- **#79647 Hookify Import Resolution** ([Link](https://github.com/anthropics/claude-code/pull/79647)): Fixes issues where hook entry scripts failed to resolve imports based on plugin directory names.
- **#79645 Hookify UTF-8 Encoding** ([Link](https://github.com/anthropics/claude-code/pull/79645)): Ensures rule and transcript files are read as UTF-8 to prevent crashes on Windows (cp1252) when encountering emojis or special characters.
- **#79644 Plugin Root Quoting** ([Link](https://github.com/anthropics/claude-code/pull/79644)): Fixes shell word-splitting issues on macOS when the plugin root path contains spaces.
- **#79898 AWS Gateway Assets** ([Link](https://github.com/anthropics/claude-code/pull/79898)): Adds reference deployment assets for running Claude apps gateway on AWS with Amazon Bedrock.
- **#80008 Twilight Plugin Demo** ([Link](https://github.com/anthropics/claude-code/pull/80008)): A strategy demo for pairing design, implement, and focus-stack to unlock advanced functionality.
- **#78532 GCP Infrastructure Fix** ([Link](https://github.com/anthropics/claude-code/pull/78532)): Fixes Cloud SQL creation failures on PG16 with default tiers in Terraform examples.
- **#79640 Ralph-wiggum Model Invocation** ([Link](https://github.com/anthropics/claude-code/pull/79640)): Uses `disable-model-invocation` to ensure specific commands remain user-only.
- **#79636 Hookify Prefixing** ([Link](https://github.com/anthropics/claude-code/pull/79636)): Standardizes the mandatory `hookify.` prefix for rule filenames.

## Feature Request Trends
- **UI/UX Refinement:** Significant demand for better control over auto-scroll behavior during question submission and per-message copy buttons for the VS Code extension.
- **Agent Governance:** A growing need for more granular control and safety boundaries for subagents, particularly regarding destructive file system/git actions.
- **Infrastructure & Scalability:** Continued interest in robust deployment patterns for the Claude apps gateway, specifically across AWS and GCP.

## Developer Pain Points
- **Interactive TUI Friction:** Recurring issues with keyboard and mouse input responsiveness in terminal-based interactive prompts, particularly on macOS and WSL.
- **Reliability at Scale:** Developers managing 1M+ context windows are struggling with `ECONNRESET` errors and failures in the `/compact` command.
- **Plugin Ecosystem Stability:** Frequent bugs regarding path resolution, encoding, and environment variables in the `hookify` system are slowing down the development of custom plugins.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest: 2026-07-22

## Today's Highlights
The Codex community is currently navigating a major release cycle featuring **rust-v0.145.0**, which introduces experimental paginated thread history and enhanced migration tools for users moving from Cursor and Claude Code. Simultaneously, the community is reporting a high volume of critical Windows-specific stability issues involving runaway process spawning and WMI resource exhaustion.

## Releases
**rust-v0.145.0**
- **Paginated Thread History:** Introduced experimental support for paginated thread history featuring efficient resume/search capabilities, persisted names, sub-agent support, and memory integration. ([#33364](https://github.com/openai/codex/issues/33364), [#33907](https://github.com/openai/codex/issues/33907), [#34085](https://github.com/openai/codex/issues/34085), [#34229](https://github.com/openai/codex/issues/34229), [#34386](https://github.com/openai/codex/issues/34386))
- **Migration Expansion:** The `/import` command now supports migrating settings from Cursor and Claude Code, including MCP servers, plugins, and project sessions.
- **Alpha Releases:** `rust-v0.145.0-alpha.30` and `.28` are available for early testing.

## Hot Issues
The current issue landscape is dominated by Windows OS performance and process management bugs:

1. **[#33776] WMI Storms & DWM Degradation:** `ChatGPT.exe` is spawning hundreds of `taskkill.exe` and `conhost.exe` processes, causing system-wide instability.
2. **[#17229] Orphaned Git Processes:** The Windows App repeatedly spawns `git.exe status` and leaves orphan processes.
3. **[#34025] Cold Launch Freezes:** Severe system-wide lag and freezes during cold launches of the unified app.
4. **[#34001] Agent Subsystem Runaway Loop:** A bug in the built-in Agent subsystem causes a loop of `taskkill` and `conhost.exe` executions, maxing out CPU.
5. **[#30926] Kernel Token Growth:** Reports of sustained growth of Windows kernel `Token` objects due to repeated `git.exe` creation.
6. **[#34014] WMI Provider Host Overload:** Standalone app causes 90–100% CPU usage on WMI Provider Host while the same project works in VS Code.
7. **[#20933] Parallel Git Execution:** Opening projects triggers multiple parallel `git.exe add -A` processes, causing high CPU/Disk usage.
8. **[#26887] Computer Use Tool Failures:** Action tools (`click`, `type_text`) fail due to framework session model conflicts.
9. **[#33777] MultiAgentV2 Hangs:** `spawn_agent` can hang indefinitely while evicting terminal resident threads.
10. **[#29911] Defender High CPU:** The app creates empty `.git` directories and repeatedly scans them, triggering Microsoft Defender alerts.

## Key PR Progress
The development team is focusing on infrastructure hardening and Windows process lifecycle management:

1. **[#34624] Windows Job Objects:** Implementing job objects to ensure child processes (like pipes/sandboxes) are terminated correctly with the execution session.
2. **[#34651] HTTP Client Migration:** Migrating core test support to the shared `codex-http-client` for unified request handling.
3. **[#34650] Auth Manager Routing:** Requiring auth managers to receive resolved routing configurations for better proxy handling.
4. **[#34641] Proxy Hardening:** Improving managed proxy setup for sandboxed executions, specifically for `bubblewrap` environments.
5. **[#34645] Response Item IDs:** Ensuring all client-created response items (including streamed/forked history) are assigned stable IDs.
6. **[#34644] Git Plugin SHA Checkouts:** Preventing Git from interpreting commit SHAs as branch names to ensure marketplace plugin integrity.
7. **[#34630] Policy-Aware HTTP Builder:** Introducing a builder for configuring headers and diagnostics without exposing underlying transports.
8. **[#34626] Skill Metadata Scaling:** Scaling metadata budgets based on the specific model's context window size.
9. **[#34636] TUI Persistence:** Ensuring the Terminal User Interface remains open when a turn start fails.
10. **[#34654] Foreign Path Diffs:** Rendering turn diffs correctly for remote environments with different path conventions.

## Feature Request Trends
- **Competitor Migration:** Strong interest in seamless transition paths from Cursor and Claude Code.
- **Advanced Context Management:** High demand for sophisticated thread history, specifically regarding "memories" and sub-agent persistence.
- **Tool Reliability:** Improving the stability of "Computer Use" and local tool execution to prevent runaway loops.

## Developer Pain Points
- **Windows Stability:** The primary frustration is the "process storm" where the app spawns hundreds of `git`, `taskkill`, and `conhost` processes, leading to high CPU, WMI exhaustion, and system-wide UI lag.
- **Sandbox & Proxy Conflicts:** Issues with managed proxy bridges and restricted `bubblewrap` sandboxes are creating hurdles for sandboxed executions.
- **Resource Spikes:** Developers are reporting significant I/O and CPU spikes during workspace restoration, particularly when the app eagerly runs `review-summary` snapshots.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest: 2026-07-22

## Today's Highlights
The community is currently navigating a significant transition period as the Gemini CLI moves toward the Antigravity ecosystem, sparking discussions on developer experience and legacy support. Significant technical progress is also being made on the SSR (Server-Side Rendering) Pipeline to automate issue-to-PR code generation, alongside critical security hardening against Remote Code Execution (RCE).

## Releases
*   **v0.52.0-nightly.20260722.gc776c665b**
    *   **Security Fix:** Enforced workspace trust and task isolation in the `a2a-server` to prevent Remote Code Execution (RCE) and environment poisoning in untrusted workspaces.
    *   [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260721.gacae7124b...v0.52.0-nightly.)

## Hot Issues
1.  **#27314 - Legacy Workflow Support:** High community interest in maintaining a standalone Gemini CLI or stable OAuth workflow due to friction caused by the Antigravity unification. ([Issue #27314](https://github.com/google-gemini/gemini-cli/issues/27314))
2.  **#19979 - Policy Migration to CUELang:** A major architectural shift to move from TOML to CUELang to handle complex policy requirements. ([Issue #19979](https://github.com/google-gemini/gemini-cli/issues/19979))
3.  **#20990 - MCP OAuth2.1 Failures:** Investigating issues where dynamic client registration fails for MCP servers. ([Issue #20990](https://github.com/google-gemini/gemini-cli/issues/20990))
4.  **#27265 - Antigravity Transition Concerns:** Users are expressing concern over the future maintenance and quota limitations of the Gemini CLI versus Antigravity. ([Issue #27265](https://github.com/google-gemini/gemini-cli/issues/27265))
5.  **#24353 - Robust Component Evaluations:** An initiative to build behavioral evaluation tests for agent reliability. ([Issue #24353](https://github.com/google-gemini/gemini-cli/issues/24353))
6.  **#22745 - AST-aware File Reads:** Exploring how AST-aware tools can reduce token noise and improve method-bound precision. ([Issue #22745](https://github.com/google-gemini/gemini-cli/issues/22745))
7.  **#27097 - PowerShell 5.1 Compatibility:** Issues with the agent using `&&` in older PowerShell versions. ([Issue #27097](https://github.com/google-gemini/gemini-cli/issues/27097))
8.  **#27191 - Quota Reporting Bug:** Reports of the CLI showing 100% quota usage despite no active usage. ([Issue #27191](https://github.com/google-gemini/gemini-cli/issues/27191))
9.  **#21956 - OAuth Token Refresh Hangs:** Critical bug where sessions hang indefinitely due to silent token refresh failures. ([Issue #21956](https://github.com/google-gemini/gemini-cli/issues/21956))
10. **#27205 - Aggressive `.venv` Scanning:** Frustration over the CLI mapping virtual environments into the model's context despite ignore rules. ([Issue #27205](https://github.com/google-gemini/gemini-cli/issues/27205))

## Key PR Progress
*   **#28433 & #28431:** Implementing the SSR Pipeline's orchestration layer, including Firestore locking and Cloud Run job configurations for automated code generation. ([PR #28433](https://github.com/google-gemini/gemini-cli/pull/28433), [PR #28431](https://github.com/google-gemini/gemini-cli/pull/28431))
*   **#28470:** Critical security update to prevent RCE in the `a2a-server`. ([PR #28470](https://github.com/google-gemini/gemini-cli/pull/28470))
*   **#28472:** Fixes a fatal authentication fallback regression in Gemini Code Assist Agent Mode. ([PR #28472](https://github.com/google-gemini/gemini-cli/pull/28472))
*   **#28469:** Implements session ID rotation during model fallbacks to prevent stateful API errors. ([PR #28469](https://github.com/google-gemini/gemini-cli/pull/28469))
*   **#28403:** Hardening against variable expansion bypasses (GHSA-wpqr-6v78-jr5g). ([PR #28403](https://github.com/google-gemini/gemini-cli/pull/28403))
*   **#28305 & #28169:** Enhancing evaluation tools with tool-call timeline formatting and coverage reporting. ([PR #28305](https://github.com/google-gemini/gemini-cli/pull/28305), [PR #28169](https://github.com/google-gemini/gemini-cli/pull/28169))
*   **#28411 & #28468:** New "Caretaker" triage system to provide clearer feedback before auto-closing issues. ([PR #28411](https://github.com/google-gemini/gemini-cli/pull/28411), [PR #28468](https://github.com/google-gemini/gemini-cli/pull/28468))
*   **#28435:** Foundations for the SSR pipeline, including GitHub REST API integration and environment config parsing. ([PR #28435](https://github.com/google-gemini/gemini-cli/pull/28435))

## Feature Request Trends
*   **Policy Evolution:** A strong move toward more expressive policy languages (CUELang) to replace the limitations of TOML.
*   **Agent Evaluation Infrastructure:** Increased focus on "behavioral evals," tool-call timelines, and automated coverage reports to measure agent reliability.
*   **Context Precision:** High interest in AST-aware file processing to minimize noise and improve the accuracy of LLM-driven code navigation.
*   **Automated Workflows:** Significant investment in "Issue-to-PR" pipelines using Cloud Run and Firestore for automated maintenance.

## Developer Pain Points
*   **Migration Friction:** Significant pushback regarding the forced unification into the Antigravity ecosystem and the perceived loss of a lightweight, stable CLI.
*   **Reliability of Long Sessions:** Silent authentication failures causing hangs in long-running sessions are a high-priority frustration.
*   **Context Noise:** Users are struggling with the CLI's tendency to ingest large, unnecessary directories (like `.venv`) into the model context.
*   **Platform Inconsistencies:** Specific bugs regarding shell command execution (e.g., `&&` in PowerShell) continue to impact the developer experience on Windows.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest
**Date:** 2026-07-22

## Today's Highlights
The community is currently focused on refining the Model Context Protocol (MCP) integration and addressing regressions in "plan mode" functionality. The latest release introduces more granular control over model selection during planning phases, while significant discussion persists around resource management for large-scale monorepos and complex agentic workflows.

## Releases
**v1.0.74-0**
*   **Added:** Introduced `/model plan` (or `/model --plan`) to allow users to specify a model while in plan mode. Users can pass a model ID, use `off` to clear, or omit the ID to open the model picker. The CLI will revert to the session model upon exiting plan mode.
*   **Improved:** Enhanced search functionality to match session titles even when whitespace differs.
*   [View Release](https://github.com/github/copilot-cli/releases)

## Hot Issues
1.  **#4188 Plan-mode Regression:** Users report that plan mode is now blocking shell commands, preventing the CLI from using tools like `gh` to enrich plans. [Issue #4188](https://github.com/github/copilot-cli/issues/4188)
2.  **#3976 `tgrep` OOM Kills:** The native `tgrep` indexer is causing Out-of-Memory (OOM) crashes on large monorepos due to a lack of memory caps. [Issue #3976](https://github.com/github/copilot-cli/issues/3976)
3.  **#4183 CAPI 5MB Body Limit:** Long sessions with heavy tool history are hitting a 5MB serialized request limit, even when within token capacity. [Issue #4183](https://github.com/github/copilot-cli/issues/4183)
4.  **#4206 Loading Spinner Stall:** A UI bug where the environment footer remains stuck on "Loading:" when the GitHub MCP handshake stalls under specific organization policies. [Issue #4206](https://github.com/github/copilot-cli/issues/4206)
5.  **#4211 BigInt Serialization Error:** The CLI fails to handle BigInt values returned in structured MCP responses, causing task abortions. [Issue #4211](https://github.com/github/copilot-cli/issues/4211)
6.  **#1305 Remote OAuth MCP Support:** High community interest (26 👍) in supporting Dynamic Client Registration (DCR) for remote MCP servers. [Issue #1305](https://github.com/github/copilot-cli/issues/1305)
7.  **#1518 & #3073 MCP Expansion:** Significant requests to move beyond "tools" to support MCP resources, prompts, and resource subscriptions/notifications. [Issue #1518](https://github.com/github/copilot-cli/issues/1518) | [Issue #3073](https://github.com/github/copilot-cli/issues/3073)
8.  **#4196 BYOK Reasoning Deltas:** Users with Bring Your Own Key (BYOK) configurations are seeing transient API errors when models emit `reasoning_content` in streaming deltas. [Issue #4196](https://github.com/github/copilot-cli/issues/4196)
9.  **#4205 Registry Policy Hurdles:** Enterprise users are finding that organization registries reject MCP configs that require runtime headers. [Issue #4205](https://github.com/github/copilot-cli/issues/4205)
10. **#4213 Input Focus Issues:** Problems with the CLI dropping key events when the terminal pane is unfocused, impacting users using agent multiplexers like `herdr`. [Issue #4213](https://github.com/github/copilot-cli/issues/4213)

## Key PR Progress
*Note: Only one PR was updated in the last 24 hours.*
*   **#3163 ViewSonic monitor:** Monitoring for specific issues regarding agent completion and runner initiation. [PR #3163](https://github.com/github/copilot-cli/pull/3163)

## Feature Request Trends
*   **MCP Evolution:** There is a clear push to move from simple tool execution to a full MCP implementation including **Resources** (read/list), **Prompts**, and **Subscriptions** for autonomous agent workflows.
*   **Agent Orchestration:** Users are requesting better ways to manage subagents, specifically regarding default model configuration for `/fleet` subagents, credit usage breakdowns, and inline agent chaining.
*   **Configuration Flexibility:** Frequent requests for rapid model/effort switching and configurable retry logic for Autopilot request errors.
*   **Context Persistence:** Developers want better retention of completed background agents in the CLI registry to maintain continuity.

## Developer Pain Points
*   **Environment Compatibility:** Recurring issues with terminal multiplexers (tmux/screen), WSL clipboard access, and specific hardware (Raspberry Pi) file paths.
*   **Scale Limitations:** Significant friction for developers working in massive monorepos where the current indexing or context history exceeds memory or API body limits.
*   **Auth Friction:** Frustration regarding the lack of silent refresh for remote OAuth MCP servers and "Billing Entity" errors in enterprise environments.
*   **UI/UX Regressions:** Users are frustrated by "stuck" loading states and the recent regression blocking shell commands in plan mode.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest | 2026-07-22

## Today's Highlights
The community is currently focused on resolving critical model-specific tool-calling failures, particularly with the K2.5 model, and addressing shell-handling bugs that cause process blocking. There is also an active push to improve UI stability and align MCP tool schemas with Moonshot's specific API requirements.

## Releases
*No new releases were reported in the last 24 hours.*

## Hot Issues
*   **#2531: MCP tool names & schemas rejected by Moonshot API** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2531))
    *   **Why it matters:** Developers are encountering HTTP 400 errors because the Moonshot API requires a specific "flavored" JSON schema. This creates a barrier for standard MCP tool integration.
*   **#2527: K2.5 model tool calling failure + Goal Mode infinite loop** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2527))
    *   **Why it matters:** This is a critical functional blocker where the K2.5 model fails to execute tools and enters infinite loops in Goal Mode, rendering it unusable for automated tasks.
*   **#2474: UI flickering and full conversation re-rendering** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2474))
    *   **Why it matters:** Significant UX degradation where the interface shakes and re-renders the entire history, impacting usability during long sessions.
*   **#2529: Numeric keypad input failure** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2529))
    *   **Why it matters:** A basic accessibility/UX issue where the input box fails to capture events from the right-side numeric keys.
*   **#2528: Excessive output length in shell mode** ([Link](https://github.com/MoonshotAI/kimi-cli/issues/2528))
    *   **Why it matters:** Long command outputs are overwhelming the interface, suggesting a need for better output streaming or truncation.

## Key PR Progress
*   **#2530: Fix shell blocking on detached child pipes** ([Link](https://github.com/MoonshotAI/kimi-cli/pull/2530))
    *   **Description:** This fix addresses a bug where `_run_shell_command` would hang until a timeout occurred if a detached child process held the stdout/stderr pipes. This improves the reliability of executing background commands.

## Feature Request Trends
*   **Enhanced Tooling Reliability:** Users are seeking more consistent tool-calling behavior across different model versions (specifically stabilizing K2.5).
*   **Robust Shell Handling:** There is a clear demand for more resilient shell execution, including better management of long outputs and detached processes.
*   **UI/UX Refinement:** Community feedback highlights a need for smoother rendering (reducing flickering) and more comprehensive keyboard event listeners.

## Developer Pain Points
*   **Model Inconsistency:** Developers are frustrated by the disparity in tool-calling reliability between K3 and K2.5 models.
*   **Schema Friction:** The requirement to "sanitize" client-side schemas to match Moonshot's specific JSON flavor is creating extra overhead for developers trying to use standard MCP tools.
*   **Shell Stability:** Unexpected blocking and rendering issues in shell mode are disrupting the core developer workflow.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest: 2026-07-22

## Today's Highlights
The community is currently focused on resolving significant memory stability issues through a centralized "Memory Megathread" and troubleshooting persistent authentication errors affecting the "Go" subscription tier. Development is also moving forward on enhancing model compatibility for specialized providers like MiniMax M3 and NVIDIA NIM.

## Hot Issues
*   **#20695 Memory Megathread** ([Link](https://github.com/anomalyco/opencode/issues/20695)): The most active thread currently; a central hub for reporting and collecting heap snapshots to address scattered memory leaks.
*   **#6231 Auto-discover models from OpenAI-compatible providers** ([Link](https://github.com/anomalyco/opencode/issues/6231)): Highly requested (182 👍) to eliminate manual configuration of local providers like Ollama and LM Studio.
*   **#37012 Keep legacy layout option** ([Link](https://github.com/anomalyco/opencode/issues/37012)): Significant community feedback requesting the preservation of the old UI for better workspace navigation.
*   **#38195 / #38218 Request blocked by upstream provider** ([Links](https://github.com/anomalyco/opencode/issues/38195), https://github.com/anomalyco/opencode/issues/38218): A recurring trend of users on the "Go" plan reporting 401 errors despite active subscriptions.
*   **#38219 Kimi/Qwen model access** ([Link](https://github.com/anomalyco/opencode/issues/38219)): Specific frustration regarding the inability to use specific models under the Go plan.
*   **#38201 TUI frozen with large binaries** ([Link](https://github.com/anomalyco/opencode/issues/38201)): A performance bottleneck where large project files cause the Terminal UI to hang.
*   **#38205 Screenshot tool timeouts** ([Link](https://github.com/anomalyco/opencode/issues/38205)): Issues with the `homeassistant_screenshot_url` tool relaunching unauthenticated browser profiles.
*   **#38095 Managed connectors (Google, Slack, etc.)** ([Link](https://github.com/anomalyco/opencode/issues/38095)): A high-level feature request for first-class SaaS integrations with built-in OAuth.
*   **#38220 Windows/Bun networking** ([Link](https://github.com/anomalyco/opencode/issues/38220)): A platform-specific bug where `opencode web` listens but fails to accept connections on Windows using Bun.
*   **#38212 macOS malloc crash** ([Link](https://github.com/anomalyco/opencode/issues/38212)): A critical stability bug involving CoreAudio and sound notifications on macOS.

## Key PR Progress
*   **#37054 Full session fork option** ([Link](https://github.com/anomalyco/opencode/pull/37054)): Enables users to fork entire conversations rather than just single messages.
*   **#38214 MiniMax M3 thinking controls** ([Link](https://github.com/anomalyco/opencode/pull/38214)): Routing specific "thinking" toggles for NVIDIA and Lilac MiniMax M3 models.
*   **#38188 Reject malformed patch hunks** ([Link](https://github.com/anomalyco/opencode/pull/38188)): Improves reliability by rejecting invalid add/delete/update hunk bodies.
*   **#38172 Generator functions support** ([Link](https://github.com/anomalyco/opencode/pull/38172)): Adds support for sync and async generator functions (yield/next).
*   **#38213 Clock-skew response loops** ([Link](https://github.com/anomalyco/opencode/pull/38213)): Fixes issues where mismatched client/server clocks cause incorrect responses.
*   **#38206 Cache all system messages** ([Link](https://github.com/anomalyco/opencode/pull/38206)): Ensures all system messages (including those from plugins) are cached correctly.
*   **#38204 Initial Copilot model sync** ([Link](https://github.com/anomalyco/opencode/pull/38204)): Ensures account-specific Copilot models load before the initial catalog transform.
*   **#37833 NVIDIA NIM DeepSeek compatibility** ([Link](https://github.com/anomalyco/opencode/pull/37833)): Fixes hanging issues for DeepSeek V4 models on NVIDIA NIM.
*   **#37913 Recover truncated tool-call arguments** ([Link](https://github.com/anomalyco/opencode/pull/37913)): Improves LLM robustness by recovering from truncated streams instead of failing.
*   **#38200 Solidity file type support** ([Link](https://github.com/anomalyco/opencode/pull/38200)): Adds syntax highlighting and file type support for Solidity.

## Feature Request Trends
*   **SaaS Ecosystem Expansion:** Heavy interest in first-class, managed connectors for tools like Google Calendar, Slack, and Notion with native OAuth.
*   **Dynamic Model Discovery:** Users want a "set and forget" experience for local models (Ollama/LM Studio) without manual JSON editing.
*   **UI Continuity:** A notable desire to retain "Legacy Layout" options for better workspace management and access to tools.
*   **Robustness & Recovery:** Requests for the system to handle "messy" LLM outputs (truncated calls, malformed patches) more gracefully.

## Developer Pain Points
*   **Subscription Friction:** A significant number of reports regarding "Request blocked by upstream provider" for paid Go plan users.
*   **Platform Inconsistencies:** Fragmented issues appearing on specific environments (WSL sidecar readiness, Windows/Bun network handling, and macOS-specific malloc crashes).
*   **Resource Constraints:** Performance degradation or UI freezes when interacting with large binary files or high-frequency terminal updates.
*   **Tool Reliability:** Inconsistent behavior in MCP tools, specifically regarding session persistence and authentication.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest | 2026-07-22

## Today's Highlights
The Pi project has moved toward greater build reproducibility with the release of v0.81.1, introducing verifiable source archives. Simultaneously, the community is addressing critical stability issues in v0.81.0 regarding `streamFunction` crashes and non-abortable SDK retry behaviors that can freeze the interface.

## Releases
*   **v0.81.1** ([Link](https://github.com/earendil-works/pi/releases))
    *   **Verifiable release source archives:** Included deterministic, checksummed source archives to allow developers to rebuild standalone binaries reliably.
*   **v0.81.0** ([Link](https://github.com/earendil-works/pi/releases))
    *   **Local llama.cpp model management:** Added the ability to connect to a llama.cpp router, search/download Hugging Face models, and manage model memory (load/unload) with live progress tracking.

## Hot Issues
1.  **[v0.81.0 Crashes] (#6915, #6918):** Users are reporting `streamFunction` is not a function errors after updating to 0.81.0. This is a high-priority stability blocker. [Issue #6915](https://github.com/earendil-works/pi/issues/6915) | [Issue #6918](https://github.com/earendil-works/pi/issues/6918)
2.  **[SDK Retry Blocking] (#6911):** The OpenAI/Anthropic SDKs can sleep for hours on 429 errors without respecting `AbortSignal`, effectively freezing the Pi interface. [Issue #6911](https://github.com/earendil-works/pi/issues/6911)
3.  **[Auto-compaction Failure] (#6879):** A bug where auto-compaction fails to trigger even when context exceeds 100%, leading to API rejections at the token limit. [Issue #6879](https://github.com/earendil-works/pi/issues/6879)
4.  **[Dependency Duplication] (#5653):** A "Shrinkwrap" issue where installing both `pi-ai` and `pi-coding-agent` results in duplicate module copies on disk. [Issue #5653](https://github.com/earendil-works/pi/issues/5653)
5.  **[External Editor Latency] (#6774):** Slow launch times for `Ctrl+G` when the OS temp directory is crowded; requested move to private `mkdtemp` subdirectories. [Issue #6774](https://github.com/earendil-works/pi/issues/6774)
6.  **[Tab-Complete Bug] (#5593):** Slash commands are appending a trailing space during tab-completion, breaking the subsequent argument autocomplete flow. [Issue #5593](https://github.com/earendil-works/pi/issues/5593)
7.  **[Bedrock Auth Mapping] (#6163):** Request to map Amazon Bedrock `apiKey` to `env.AWS_BEARER_TOKEN_BEDROCK` to prevent token leaking. [Issue #6163](https://github.com/earendil-works/pi/issues/6163)
8.  **[Markdown Enhancement API] (#6747):** Request for an API to mutate agent message representation (e.g., for formula rendering) without affecting the raw LLM content. [Issue #6747](https://github.com/earendil-works/pi/issues/6747)
9.  **[Windows Path Bug] (#6817):** The `find` tool fails on Windows for patterns containing path separators (e.g., `src/**/*.ts`). [Issue #6817](https://github.com/earendil-works/pi/issues/6817)
10. **[Session Housekeeping] (#6924):** The `--no-session` flag is failing to clean up temporary session directories in some environments. [Issue #6924](https://github.com/earendil-works/pi/issues/6924)

## Key PR Progress
*   **[Release Source Archives] (#6913):** Closes #6718 by providing deterministic source archives and documentation for rebuilding standalone binaries. [PR #6913](https://github.com/earendil-works/pi/pull/6913)
*   **[OpenRouter OAuth] (#6927):** Adds native OpenRouter OAuth support with PKCE S256 and ephemeral localhost callbacks. [PR #6927](https://github.com/earendil-works/pi/pull/6927)
*   **[SDK Retry Fix] (#6912):** Forces SDK `maxRetries` to 0 to prevent the UI from freezing on long `Retry-After` headers. [PR #6912](https://github.com/earendil-works/pi/pull/6912)
*   **[AgentHarness Tools] (#6916):** Introduces `AgentHarnessTool` to provide application-specific context (ExecutionEnvironment, session IDs) to agents. [PR #6916](https://github.com/earendil-works/pi/pull/6916)
*   **[Retry Policy for Compaction] (#6901):** Implements a consistent retry policy for auto/manual compaction and branch summarization. [PR #6901](https://github.com/earendil-works/pi/pull/6901)
*   **[Image Rendering] (#6572):** Adds support for rendering image blocks in interactive user messages and clipboard image attachments. [PR #6572](https://github.com/earendil-works/pi/pull/6572)
*   **[Reasoning Options] (#6928):** Integrates reasoning options from `models.dev/api.json` to support "thinking" levels. [PR #6928](https://github.com/earendil-works/pi/pull/6928)
*   **[SQLite Storage] (#6594):** Moves session storage to SQLite, improving persistence and handling of large context trees. [PR #6594](https://github.com/earendil-works/pi/pull/6594)
*   **[Archive Shortcut] (#6917):** Adds `Ctrl+A` to the session picker to quickly archive session files. [PR #6917](https://github.com/earendil-works/pi/pull/6917)
*   **[Reported Cost] (#6881):** Updates the UI to use provider-reported billed costs instead of calculated catalog rates when available. [PR #6881](https://github.com/earendil-works/pi/pull/6881)

## Feature Request Trends
*   **Local Inference & Management:** Significant interest in seamless integration with local providers (llama.cpp) and Hugging Face model management.
*   **Context Control:** High demand for more granular control over context management, specifically "Deferred/Async" compaction and the ability to "Summarize up to here" manually.
*   **Enhanced Auth Flows:** Moving toward native OAuth support for major providers like OpenRouter.
*   **Rich Media & UI:** Requests for better markdown rendering (formulas), image block support, and more descriptive "Summarize" UI options.

## Developer Pain Points
*   **Dependency Conflicts:** Issues with "Shrinkwrap" and duplicate package installation are causing confusion in environment setups.
*   **OS Inconsistencies:** Path handling and file system interactions (especially on Windows) remain a recurring point of friction.
*   **Resource Leakage:** Concerns over temp files left behind by subprocesses and non-abortable SDK sleeps blocking the main thread.
*   **Reproducibility:** A clear demand for verifiable source archives to move away from brittle, GitHub-dependent build scripts.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest | 2026-07-22

## Today's Highlights
Qwen Code has reached a new milestone with the release of version **v0.20.1**, focusing on core stability and telemetry improvements. Significant development effort is currently centered on optimizing the **Web Shell** for long-running sessions and enhancing **Subagent** visibility and orchestration logic.

## Releases
*   **v0.20.1**: The latest stable release featuring internal core updates, telemetry fixes, and documentation improvements. [Link](https://github.com/QwenLM/qwen-code/releases)
*   **v0.20.0-preview.0**: A preview release providing early access to upcoming features and architectural changes. [Link](https://github.com/QwenLM/qwen-code/releases)

## Hot Issues
1.  **#7316 - OpenAI ToolCall Compatibility**: A critical bug where certain OpenAI-compatible models return empty strings for optional parameters, breaking `subAgent` functionality. This is a high-priority issue for users relying on third-party providers. [Link](https://github.com/QwenLM/qwen-code/issues/7316)
2.  **#7306 - Tool-Output Budgeting & Observability**: A major initiative to harden how the system manages and observes tool outputs, essential for maintaining reliability in complex, multi-step agent tasks. [Link](https://github.com/QwenLM/qwen-code/issues/7306)
3.  **#7287 - Auto-Memory Write Failures**: A bug where `MEMORY.md` is loaded but not registered in the cache, causing the agent to fail when trying to update its own memory. [Link](https://github.com/QwenLM/qwen-code/issues/7287)
4.  **#7433 - Local Model SDK Reporting**: Users running local models via `llama.cpp` are seeing incorrect model reporting in the SDK, causing friction in session management. [Link](https://github.com/QwenLM/qwen-code/issues/7433)
5.  **#7452 - CronParser Deviations**: A technical discrepancy in how `*/N` steps are handled compared to standard Vixie-cron semantics, impacting scheduled task accuracy. [Link](https://github.com/QwenLM/qwen-code/issues/7452)
6.  **#7118 - Windows Installer Failures**: A recurring issue where the standalone installer fails on Windows systems unable to resolve `Get-FileHash` via PowerShell. [Link](https://github.com/QwenLM/qwen-code/issues/7118)
7.  **#7462 - mobile-mcp Release Strategy**: A community discussion regarding whether `mobile-mcp` should follow the core release cycle or maintain an independent versioning scheme. [Link](https://github.com/QwenLM/qwen-code/issues/7462)
8.  **#7457 - Daemon SSE Cursor Mis-resume**: A stability issue where the daemon can silently mis-resume sessions from dead epochs, potentially causing ghosting or data loss. [Link](https://github.com/QwenLM/qwen-code/issues/7457)
9.  **#7450 - Subagent Revival Logic**: The agent incorrectly assumes `send_message` only works for running tasks, leading to redundant subagent launches when trying to reuse completed ones. [Link](https://github.com/QwenLM/qwen-code/issues/7450)
10. **#7167 - Fleet Shepherd Dashboard**: Infrastructure-level monitoring for the "Fleet Shepherd" workflow to track syncs and dispatches across the project. [Link](https://github.com/QwenLM/qwen-code/issues/7167)

## Key PR Progress
1.  **#7466 - Web Shell Style Isolation**: Implements scoped baseline styles for the Web Shell to prevent CSS bleeding from the host page. [Link](https://github.com/QwenLM/qwen-code/pull/7466)
2.  **#7408 - Long Session Performance**: Optimizes memory stability and responsiveness for Web Shell sessions exceeding 500 UI blocks. [Link](https://github.com/QwenLM/qwen-code/pull/7408)
3.  **#7380 - Subagent Detail Panel**: Moves subagent transcripts to a dedicated detail surface to declutter the main conversation flow. [Link](https://github.com/QwenLM/qwen-code/pull/7380)
4.  **#7395 - Custom Skill Directories**: Allows users to share skills across different agent harnesses (Claude Code, Codex, Qwen Code) via custom directory paths. [Link](https://github.com/QwenLM/qwen-code/pull/7395)
5.  **#7460 - Fork Subagent Discoverability**: Improves the schema to allow "forked" subagents to coexist with named agents without constraint conflicts. [Link](https://github.com/QwenLM/qwen-code/pull/7460)
6.  **#7388 - Explicit Channel Delivery**: Adds a robust contract for daemon notifications, ensuring messages are routed only to the correct workspace workers. [Link](https://github.com/QwenLM/qwen-code/pull/7388)
7.  **#7357 - Overridable Skill States**: Introduces a `default-disabled` state for skills, allowing for soft defaults versus hard opt-ins. [Link](https://github.com/QwenLM/qwen-code/pull/7357)
8.  **#7279 - Trusted Daemon Context**: Provides a secure path for daemon-originated root prompts by reconstructing session state and authenticating private child calls. [Link](https://github.com/QwenLM/qwen-code/pull/7279)
9.  **#7302 - Session References via @**: Enables users to reference prior sessions using `@session:<id>` with deterministic transcript summaries. [Link](https://github.com/QwenLM/qwen-code/pull/7302)
10. **#7266 - Polling Adapters**: Adds GitHub, GitLab, and Gitea polling adapters to enable agents to monitor code hosting platforms for tasks. [Link](https://github.com/QwenLM/qwen-code/pull/7266)

## Feature Request Trends
*   **Cross-Platform Skill Portability**: High interest in sharing "skills" (tool definitions) across different agent environments (e.g., Claude Code compatibility).
*   **Long-Context Stability**: Significant focus on ensuring the Web Shell and agent memory remain performant during massive, multi-turn coding sessions.
*   **Subagent Orchestration**: Movement toward more sophisticated subagent management, including "forking" capabilities and better UI feedback for nested tasks.
*   **Multi-Platform Integration**: Increasing demand for native polling and monitoring adapters for major Git providers (GitHub, GitLab, Gitea).

## Developer Pain Points
*   **Model Inconsistency**: Friction caused by OpenAI-compatible models not strictly adhering to tool-call schemas (e.g., empty strings for optional fields).
*   **State Persistence Errors**: Frustration regarding the "Auto-memory" system failing to recognize its own writes, causing loop-like failures in agent reasoning.
*   **Installation Friction**: Windows users encountering environment-specific errors during the SHA-256 verification phase of the standalone installer.
*   **Daemon Connectivity**: Issues surrounding "ghost" sessions and cursor mismatches during daemon restarts or network interruptions.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest | 2026-07-22

## Today's Highlights
The community is currently undergoing a major stabilization phase centered on the **v0.9.1 release**, focusing on "truthful" state management for sub-agents and refining the TUI interaction model. Key priorities include resolving UI responsiveness issues, such as input lag and scrollable transcript handling, while consolidating the shell tool architecture into a single canonical command.

## Releases
*No new releases were recorded in the last 24 hours.*

## Hot Issues
1. **#4032 Codewhale not following the constitution** ([Link](https://github.com/Hmbown/CodeWhale/issues/4032)): A high-engagement bug report where the agent ignores user-provided scripts in favor of generating temporary scripts. It highlights a friction point in maintaining consistent agent behavior.
2. **#2889 Work Agent rows: real sub-agent details** ([Link](https://github.com/Hmbown/CodeWhale/issues/2889)): A critical UX request to provide structured, real-time activity for sub-agents in the sidebar to improve transparency.
3. **#4603/4605 UI Performance (Scrolling & Input Lag)** ([Links](https://github.com/Hmbown/CodeWhale/issues/4603, https://github.com/Hmbown/CodeWhale/issues/4605)): Significant community feedback regarding the TUI freezing for hundreds of milliseconds during message sends and the inability to scroll long outputs.
4. **#1917 Universal PreToolUse/PostToolUse hook layer** ([Link](https://github.com/Hmbown/CodeWhale/issues/1917)): A major architectural proposal to implement a unified lifecycle for Cancel/Pause/Resume across all action types.
5. **#4625 Collapse command execution into one canonical Bash tool** ([Link](https://github.com/Hmbown/CodeWhale/issues/4625)): A move to simplify the model-facing API by unifying multiple shell execution variants into a single `Bash` tool.
6. **#4632 Prefix/Privacy Invariant** ([Link](https://github.com/Hmbown/CodeWhale/issues/4632)): A security-focused issue ensuring redaction taint and private artifacts remain bound to the validated owner across async work.
7. **#4639 Provider/Model Setup Truthfulness** ([Link](https://github.com/Hmbown/CodeWhale/issues/4639)): Focuses on improving the configuration UX to ensure users see accurate routes and models without global residue.
8. **#4410 Restore xAI device-code OAuth** ([Link](https://github.com/Hmbown/CodeWhale/issues/4410)): A connectivity fix to align the authorization path with the official Grok CLI.
9. **#4641 Upstream-ready for Verifiers v0.2.1** ([Link](https://github.com/Hmbown/CodeWhale/issues/4641)): A strategic goal to make `codewhale exec` reproducible enough to be integrated as a built-in harness.
10. **#4227 Setup Workflow for Contributors** ([Link](https://github.com/Hmbown/CodeWhale/issues/4227)): A request for a dedicated skill/workflow to help contributors manage the high-velocity development environment (10+ PRs/day).

## Key PR Progress
1. **#4675 Integrate v0.9.1 runtime & release surface** ([Link](https://github.com/Hmbown/CodeWhale/pull/4675)): The primary integration PR for the v0.9.1 release, including TUI color grammar and runtime simplifications.
2. **#4654 Fix Enter key send lag** ([Link](https://github.com/Hmbown/CodeWhale/pull/4654)): Resolves a P1 performance issue where the UI would freeze during slow message sends.
3. **#4653 Lock long-output transcript scrolling** ([Link](https://github.com/Hmbown/CodeWhale/pull/4653)): Implements end-to-end `qa_pty` scenarios to ensure long outputs remain viewable and not truncated.
4. **#4658 Add provider registry + switch endpoints** ([Link](https://github.com/Hmbown/CodeWhale/pull/4658)): Adds runtime API endpoints to allow the GUI to switch providers atomically without clobbering configurations.
5. **#4673 Fix shell default no-cwd to context.workspace** ([Link](https://github.com/Hmbown/CodeWhale/pull/4673)): Ensures sub-agents in isolated worktrees run commands in the correct directory.
6. **#4656 Honor explicit limits for unknown local models** ([Link](https://github.com/Hmbown/CodeWhale/pull/4656)): Fixes the 4K compatibility fallback for self-hosted wire aliases.
7. **#4652 Public --no-project-config flag** ([Link](https://github.com/Hmbown/CodeWhale/pull/4652)): Enables reproducible headless execution by gating workspace-specific config overlays.
8. **#4657 Report progress on idle timeouts** ([Link](https://github.com/Hmbown/CodeWhale/pull/4657)): Improves telemetry for Chat Completion SSE idle timeouts to distinguish between prefill stalls and stream stalls.
9. **#4613 Sanitize Moonshot tool parameters** ([Link](https://github.com/Hmbown/CodeWhale/pull/4613)): Ensures tool parameters comply with MFJS (Moonshot Flavored JSON Schema) requirements.
10. **#4668/4661 Dependency updates** ([Links](https://github.com/Hmbown/CodeWhale/pull/4668, https://github.com/Hmbown/CodeWhale/pull/4661)): Routine maintenance for `js-yaml` and `axios`.

## Feature Request Trends
*   **TUI Polish:** High demand for smoother interaction, specifically regarding scrollable long-form transcripts and eliminating input latency.
*   **Agent Transparency:** A push for "truthful" sub-agent tracking—users want to see exactly what a sub-agent is doing and its current progress in the sidebar.
*   **Tool Consolidation:** A clear trend toward simplifying the toolset (e.g., unifying shell commands) to reduce model confusion and complexity.
*   **Configuration UX:** Requests for a more unified, "single-source-of-truth" interface for managing skills, models, and provider credentials.

## Developer Pain Points
*   **High Development Velocity:** Contributors are struggling to keep up with the pace of updates (10+ PRs/day), leading to requests for automated setup workflows.
*   **UI Responsiveness:** Frequent reports of "UI freezes" during high-frequency touch points like sending messages.
*   **Contextual Isolation:** Issues with sub-agents defaulting to parent workspaces instead of isolated worktrees, causing command execution errors.
*   **Output Truncation:** Frustration over long-form logs and diffs being cut off by the terminal viewport without a scrollable review mechanism.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>