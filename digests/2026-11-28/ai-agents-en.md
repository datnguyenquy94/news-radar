# OpenClaw Ecosystem Digest 2026-11-28

> Issues: 80 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-28 07:25 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

**OpenClaw Project Digest**
**Date:** 2026-11-28

### 1. Today's Overview
OpenClaw exhibits extreme daily activity with 80 issues and 500 PRs updated in the last 24 hours, indicating a high-velocity development cycle nearing a major release. The project is currently in a "release candidate" state with `v2026.12.1-beta.1` recently published. A significant portion of activity focuses on stabilizing update paths and fixing memory/state-corruption bugs identified during recent schema migrations. The sheer volume of PRs (236 merged/closed vs 264 open) suggests the team is actively cleaning up technical debt and preparing for the next stable tag, likely `2026.12.1`.

### 2. Releases
*   **New Release:** `v2026.12.1-beta.1` published.
*   **Highlights:**
    *   **Git/Launches:** Git installations now use prepared releases and a resident launcher; package updates prepare without stopping the serving Gateway.
    *   **Prompt Caching:** Compaction now reuses the warm prompt cache across routes (read-only).
*   **Migration Note:** This beta precedes the stable `2026.12.1` release. Users on older versions should anticipate update path changes regarding state management and gateway startup.

### 3. Project Progress
*   **PR Activity:** 236 PRs were merged or closed today. A large subset of these were size-XS/XL bug fixes and test refinements across the gateway, agents, and CLI.
*   **Key Merges:**
    *   **`#207315`:** Fix for cron automation notices to keep agents silent after posted alerts.
    *   **`#207322`:** Fix for SQLite heartbeat test writer lock timing.
    *   **`#207313`:** UI fix to show conversation titles in the Outbox.
    *   **`#207178`:** Fix for native Claude sign-in from the chat account picker.
*   **Technical Debt:** Several PRs focused on simplifying plugin metadata fixtures and trimming unused lifecycle data, indicating a push toward codebase hygiene ahead of the release.

### 4. Community Hot Topics
*   **Most Commented Issue:** `#204775` (58 comments) – Designing the "prepared-release" update path to prevent file collisions during updates. This is the central design doc for the current update infrastructure.
*   **High-Engagement Bug:** `#197083` (41 comments) – A post-install Doctor WAL verification bug blocking 11.3 updates, leaving gateways partially finalized.
*   **Active PRs:** `#207318` (Worktrees tab ownership names) and `#207324` (Chat names in message search) are highly active, focusing on UI/UX polish in the Control UI.

### 5. Bugs & Stability
**Critical/High Severity:**
*   **`#207162` (P0):** `WAL sidecar inode replaced under live Gateway` on Linux ext4 → B-tree corruption and SIGKILL. Reported today; no fix PR yet.
*   **`#205202` (P2):** Update blocked from `2026.11.9→2026.11.10` due to legacy-session store migration errors.
*   **`#195497` (P1):** Memory growth to ~3GB in the gateway process over 17 hours (v2026.11.1).
*   **`#178359` (P1):** `doctor --fix` idling for 15+ minutes without repairing the agent DB.

**Fix PRs Noted:**
*   `#207322` closes the SQLite heartbeat contention race condition.
*   `#207320` fixes a native Talk test timeout issue that was hiding subsequent test users.

### 6. Feature Requests & Roadmap Signals
*   **Identity Proxy:** Issue `#136686` (Closed) requested identity-aware proxy sign-in, which appears to be in progress or recently addressed given the focus on "native" sign-in flows in recent PRs like `#207178`.
*   **Configurability:** PR `#167177` (Closed) requested making the CLI live-session capacity configurable, reflecting a trend toward granular control.
*   **Agent Control:** Issue `#207190` highlights a UX blocker where agents inside a Gateway cannot stop the Gateway, suggesting a need for better lifecycle ownership boundaries.

### 7. User Feedback Summary
Users are reporting significant friction during the update process. The transition from `2026.11.9` to `2026.11.10` (and now to `2026.12.1-beta`) is plagued by "package-swap" failures, legacy migration errors, and memory bloat. There is palpable dissatisfaction with the stability of the gateway process on constrained devices (ARM64/Linux) and the complexity of the update CLI (`openclaw update`). Conversely, there is active appreciation for UI refinements (Worktrees, Outbox titles) and the new prompt caching mechanism.

### 8. Backlog Watch
*   **`#204775`** – The design issue for prepared-release updates. With 58 comments, this is the "single point of failure" for all current updates. Maintainer attention is required to finalize ownership and the implementation plan.
*   **`#197083`** – The post-install Doctor verification bug. It remains open and blocking for users upgrading from `.1` to `.3` versions.
*   **`#207082`** – Android onboarding with named operator roles is failing (QR stalls, token rejection). This is a high-severity onboarding blocker for mobile users.
*   **`#207311`** – PR to refactor redundant gateway test journeys. While a cleanup task, its size (XL) and merge-risk (🚨 compatibility) warrant maintainer review before merging to avoid regressions.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: Personal AI Agent & Assistant Open-Source Landscape (as of 2026-11-28)

## 1. Ecosystem Overview
The personal AI assistant and agent open-source ecosystem in late-November 2026 is characterized by a bifurcated maturity landscape. A core group of high-velocity projects—led by OpenClaw and ZeroClaw—exhibit aggressive release cycles, heavy refactoring, and active feature delivery, reflecting a "beta-to-stable" transition phase. Conversely, several mature projects (Hermes Agent, LobsterAI, PicoClaw) have stabilized around specific version tags, focusing on bug fixing, platform compatibility (Windows, Docker, proxy), and migration stabilization rather than core architecture shifts. The landscape is currently undergoing a significant architectural migration, most notably LobsterAI's move from OpenClaw to DeepSeek Harness, which signals a industry-wide shift toward specialized agent harnesses over general-purpose frameworks. Across all projects, the dominant technical focus remains on provider integration reliability, tool-result serialization, and runtime stability in constrained or proxy-heavy environments.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 80 | 500 | RC (`v2026.12.1-beta.1`) | ⭐⭐⭐⭐⭐ (High velocity, stabilizing) |
| **ZeroClaw** | 10 | 41 | Dev (`v0.9.0`) | ⭐⭐⭐⭐ (Aggressive feature pace) |
| **NanoBot** | 6 | 10 | Pending | ⭐⭐⭐ (Provider compatibility focus) |
| **Hermes Agent** | 11 | 50 | Stable (`v0.23.5`) | ⭐⭐⭐⭐⭐ (Mature, cross-platform) |
| **NanoClaw** | 5 | 9 | RC (`v2026.11.0`) | ⭐⭐⭐⭐ (Session/credential hardening) |
| **PicoClaw** | 2 | 6 | Stable (`0.3.1`) | ⭐⭐⭐ (UI/Network bug fixing) |
| **LobsterAI** | 0 | 17 | New (`2026.11.27`) | ⭐⭐⭐⭐ (Migration stabilization) |
| **NanoBot** | 6 | 10 | Pending | ⭐⭐⭐ |
| **IronClaw** | 0 | 0 | N/A | ⭐ (Inactive) |
| **Moltis/CoPaw/ZeptoClaw/ZeroClaw** | 0 | 0 | N/A | ⭐ (Inactive) |

*\*Health Score is a qualitative assessment of development velocity, stability, and release maturity based on digest analysis.*

## 3. OpenClaw's Position
OpenClaw occupies the "engine room" of the ecosystem, distinguished by extreme daily activity (80 issues, 500 PRs) and a current "release candidate" state (`v2026.12.1-beta.1`). 

*   **Advantages vs. Peers:** Its sheer velocity dwarfs competitors; it serves as the primary migration target for others (e.g., LobsterAI). It possesses the deepest feature set, covering complex update paths, state management, and gateway orchestration.
*   **Technical Approach:** OpenClaw employs a sophisticated "prepared-release" update infrastructure designed to prevent file collisions—currently the central design challenge (#204775). It manages a complex plugin ecosystem and stateful gateways, differing from NanoBot’s lighter provider-integration focus or PicoClaw’s niche web-chat optimization.
*   **Community Size:** It commands the largest active community by volume, evidenced by high-engagement bugs (#197083 with 41 comments) and the substantial backlog of open PRs requiring maintainer triage.

## 4. Shared Technical Focus Areas
Several critical requirements emerge across the ecosystem, binding disparate projects:

*   **Provider Integration Reliability:** Bugs in OpenAI-compatible paths are rampant. NanoBot reports critical failures in Gemini/ Claude/Kimi paths; ZeroClaw tracks image-drop bugs in OpenAI/OpenRouter; Hermes Agent works on model-vision scope overrides. This indicates a universal need for robust adaptation layers between the agent framework and diverse LLM providers.
*   **Tool-Result Serialization:** A cross-project sore point is the loss or corruption of tool-result data (particularly images). ZeroClaw (#12104, #12774) and OpenClaw both report issues where tool results fail to serialize correctly, breaking multimodal workflows.
*   **Cross-Platform & Proxy Stability:** Issues regarding proxy bypass (#3477 in PicoClaw), rootless Docker configurations (#4583 in NanoClaw), and Windows-specific Electron bugs (#161023 in Hermes Agent) are pervasive. The community is actively solving for deployment in constrained, network-restricted, or sandboxed environments.
*   **Session & Credential Management:** A critical architectural gap exists in remote/Kubernetes deployments. NanoClaw (#4584) and Hermes Agent (#159710) both grapple with credential injection and mailbox access when traditional host-path mounting is impossible, signaling a need for remote-compatible secret and session handling.

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | NanoBot | Hermes Agent | LobsterAI |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | Gateway orchestration, state management, update infrastructure | Provider integration, tool delivery, runtime stability | Lightweight agent, WebUI, skills discovery | Desktop composer, plugin ecosystem, cross-platform | Agent engine migration, DSH integration, IM routing |
| **Target User** | Power users, sysadmins, those needing stable updates | Developers building multimodal pipelines, MCP users | Researchers/hobbyists, quick prototypers | Power users, desktop AI assistants | Teams/organizations migrating engines |
| **Architectural Maturity** | High-velocity refactoring phase (RC) | Active refactoring towards v1.0 | Early-stage feature development | Mature, stable patch releases | Post-major architectural migration |
| **Key Differentiator** | "Prepared-release" update system; extreme velocity | MCP stability & OpenRouter image delivery | BM25 tool catalog discovery; skill folders | Windows/Electron stability; systemd integration | DSH engine switch; IM channel unification |

## 6. Community Momentum & Maturity
The ecosystem splits into distinct activity tiers:

*   **Rapidly Iterating (High Velocity):** OpenClaw and ZeroClaw are in aggressive development phases. OpenClaw's 500 PRs/day and ZeroClaw's 41 new PRs indicate a "feature sprint" mode, likely preparing for major version bumps (v1.0 or v2026.12.1). These projects attract contributors willing to handle breaking changes and technical debt.
*   **Stabilizing (Mature):** Hermes Agent and PicoClaw have recently released stable patches (v0.23.5, 0.3.1) and focus on fixing the "last mile" bugs (Windows clipboard, typing lag, proxy settings). Their communities are smaller but more focused on usability and platform compatibility.
*   **Migration & Transition:** LobsterAI is currently in a unique "post-migration" phase following its DSH engine switch, actively stabilizing the new architecture. NanoBot sits in an intermediate phase, adding features (BM25 skills, Google Ultra) while wrestling with provider compatibility bugs.

## 7. Trend Signals for AI Agent Developers
Analysis of the community feedback reveals several industry trends with direct value for developers:

*   **The "Update Friction" Problem:** OpenClaw users report significant friction during version upgrades ("package-swap failures," "legacy migration errors"). This signals a market need for more robust, automated update orchestration that preserves state and handles legacy data migrations gracefully—likely the next major innovation area beyond the framework itself.
*   **Multimodal Tool Reliability is Critical:** The recurring reports of image attachment drops (OpenAI, OpenRouter) and tool-result serialization failures across multiple projects indicate that reliable multimodal tool execution is not yet a solved problem. Frameworks that solve the "last mile" of tool-result formatting and provider adaptation will see high adoption.
*   **Remote & Sandboxed Deployment is the Next Frontier:** The concentration of issues around rootless Docker, Kubernetes runner environments, and HashiCorp Vault integration (NanoClaw, Hermes Agent) suggests that the next wave of growth in open-source AI agents will come from users deploying agents in constrained, cloud-native, or privacy-focused environments. Architectures that natively support remote credential injection and session management without host mounting will have a significant competitive advantage.
*   **Provider Adaptation Layers are the New Norm:** The fragility of OpenAI-compatible paths across NanoBot, ZeroClaw, and Hermes Agent underscores that "LLM-agnostic" frameworks require substantial, ongoing investment in provider-specific adaptation code. Developers should budget for maintaining these layers or contributing to shared adaptation libraries.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest**
**Date:** 2026-11-28
**Source:** [GitHub - HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

### 1. Today's Overview
NanoBot maintains a healthy level of activity for a weekend date, with 6 issues and 10 PRs updated in the last 24 hours. The project continues its rapid development cycle, primarily focused on provider compatibility, tool management, and WebUI enhancements. The volume of merged PRs (3) versus open issues (5) suggests active maintenance, though the appearance of critical bugs in major provider paths (Gemini, Claude, Kimi) indicates a need for stabilization alongside feature shipping.

### 2. Releases
No new releases were published today. The latest release cycle remains pending, with development focus shifting toward provider integrations and tool discovery rather than version bumps.

### 3. Project Progress
Three PRs were merged/closed today, representing significant architectural advances:
*   **PR #6824**: Introduces BM25-based on-demand tool catalog discovery. This addresses the scalability bottleneck of loading hundreds of plugin or MCP tool schemas on every model call, defaulting the schema token budget to 8,192 estimated tokens while enabling local search for large catalogs.
*   **PR #6323**: Implements edit and resend functionality within the WebUI, allowing users to modify messages in a session without losing context, utilizing SQLite commit recovery.
*   **PR #6821**: Extends skill discovery to project-local and user-level `~/.agents/skills/` directories, allowing agents to utilize skills without mandatory installation or copying.

### 4. Community Hot Topics
The most discussed issue is **#6718** (3 comments), detailing a bug where WebUI title generation fails with Kimi K3.1 Pro due to a 96-token budget exhaustion. The summary generation hits the token limit before completion. Closely following is **#6817** (1 comment), a bug on the OpenAI-compatible Claude path where `cache_control` markers are dropped after textless tool calls, breaking history caching. These topics highlight the community's focus on cross-provider compatibility and reliable UI state management.

### 5. Bugs & Stability
Four new or active bugs were reported today, ranked by severity:
1.  **#6825 (Critical)**: Gemini OpenAI-compatible tool-call failures. Streaming parallel `tool_calls` are merged into slot 0 when `index` is omitted, and post-compaction 400 errors occur on leading tool calls. *No fix PR exists yet.*
2.  **#6817 (High)**: Claude OpenAI-compatible path drops `cache_control` markers after textless tool calls, risking context window inefficiency and broken tool loops.
3.  **#6718 (High)**: Kimi K3.1 Pro WebUI title generation exhausts the 96-token budget, leaving topics as "Untitled."
4.  **#6598 (Medium)**: Custom image-generation provider silently ignores `reference_images`, returning unrelated fresh images instead of edits.

### 6. Feature Requests & Roadmap Signals
Several roadmap signals emerged from today's PR activity:
*   **Large Tool Catalogs**: PR #6824 signals a move toward BM25 search to solve schema bloat, suggesting future versions will handle expansive plugin ecosystems more gracefully.
*   **Google AI Ultra Integration**: PR #6823 adds opt-in Google AI Ultra subscription OAuth, targeting power users who wish to utilize their quota natively without API keys.
*   **File Management**: Issue #6822 requests a built-in file manager (upload/download) for Docker deployments, mirroring Hermes Agent capabilities, indicating a push for self-hosted usability.

### 7. User Feedback Summary
User feedback today centers on **provider reliability** and **usability**. The prevalence of bugs in OpenAI-compatible paths (Gemini, Claude, Kimi) suggests that while NanoBot supports many models, the adaptation layer is fragile. Conversely, the activity on PRs like #6821 and #6824 shows users are eager for deeper customization (skills, tools) and are tolerant of rough edges if the core assistant logic improves. The request for a file manager (#6822) indicates a desire for a more complete "local AI assistant" experience rather than just a chat interface.

### 8. Backlog Watch
Several items require maintainer triage:
*   **#6825**: Newly opened today; the Gemini tool-call bug is technically complex and needs immediate attention to prevent agent breakage for Gemini users.
*   **#6822**: Open enhancement for a file manager; maintainers should evaluate UI integration priorities.
*   **#6718**: The Kimi title-generation bug has persisted for 9 days; a quick fix to increase the budget or adjust the tokenizer is likely.
*   **#5666**: Open since September, aiming to add aimlapi.com as a gateway provider. This is a high-value partnership PR that has languished; maintainer approval would expand NanoBot's model access significantly.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Generated:** 2026-11-28

### 1. Today's Overview
Hermes Agent is experiencing a surge in activity with 11 open issues and 50 merged/closed PRs updated in the last 24 hours. A stable patch release (v0.23.5) was published on November 27, consolidating ~338 changes since the prior tag. The project demonstrates robust development momentum, with the team actively addressing cross-platform compatibility, plugin management, and core agent functionality ahead of the anticipated v0.24.0 release.

### 2. Releases
*   **v0.23.5 (Released: 2026-11-27):** A patch release rolling up approximately 338 merged PRs since v0.23.4. This release provides stable CLI installers, Microsoft Store, and Docker images. No breaking changes are noted in the brief release notes, though the curated changelog for the development window ships with v0.24.0.

### 3. Project Progress
Today saw significant progress in plugin and gateway stabilization. Key merged PRs include:
*   **Plugin Catalog Updates:** Addition of the **ClawCall** voice calling plugin (#160168) and updates to **LoreConvo** (#161035) and **Talaria WebUI** (#161028).
*   **Gateway Fixes:** PR #161031 addresses a systemd timeout issue where the gateway incorrectly queried `--user` scope for system-level units. PR #161036 fixes a cron delivery failure caused by malformed platform extras in `config.yaml`.
*   **Agent & Vision:** PR #161025 scopes `model.supports_vision` to the configured default runtime, preventing images from being sent to text-only models. PR #161037 optimizes image resizing for vision tasks.

### 4. Community Hot Topics
The most discussed issues reflect concerns around stability, cross-platform behavior, and developer experience:
*   **Systemd Timing Bug (#85117):** A critical bug where `check_systemd_timing_alignment()` queries `--user` scope unconditionally, generating false "stale unit" warnings for system-level installs. This has 13 comments and is a top priority for users running systemd services.
*   **Windows Clipboard Bug (#161023):** A newly reported P2 bug affecting all Ctrl key shortcuts (Copy, Paste, Cut) in the Windows Electron desktop app chat input, reported today with 2 comments.
*   **Plugin Provenance Drift (#159710):** An ongoing P2 issue where Git installs with subdirectory fragments (`#subdir`) are permanently flagged as "provenance drift," creating an infinite reinstall loop. This has 2 comments and impacts plugin maintenance workflows.

### 5. Bugs & Stability
Today brought several critical stability and compatibility bugs:
*   **Windows Clipboard (P2):** #161023 – Ctrl+C/V not working in the chat input box on Windows Electron app.
*   **Plugin Secret Leakage (P3):** #161034 – Plugin secret-source bootstrap tokens are not stripped from spawned children due to timing of environment variable consumption.
*   **Cron Script Resolution (P2):** #161032 – On Windows hosts with WSL, `.sh`/`.bash` scripts fail because `shutil.which()` resolves bash via a System32 stub rather than finding the Git-for-Windows binary.
*   **Model Vision Override (P2):** #161016 – `model.supports_vision` applies to the default model rather than the currently active/model-switched model, causing images to reach text-only models.

Notably, several of these bugs have corresponding fix PRs merged today (e.g., #161031 for systemd, #161025 for vision scope), indicating a high velocity of bug resolution.

### 6. Feature Requests & Roadmap Signals
Analysis of recent PRs and Issues reveals several active development signals:
*   **Plugin Ecosystem Expansion:** The addition of **ClawCall** and updates to **LoreConvo** and **Fish-Audio** suggest a focus on enriching the plugin catalog's communication and audio capabilities.
*   **Cross-Provider Model Routing:** Issues #161017 and #161016 highlight work needed to fix model provider switching and vision capabilities when users change models in the desktop composer.
*   **Multi-Profile Skill Management:** Feature request #147340 asks for a formal skill lifecycle model to handle scope, ownership, and name collisions across multi-profile installs, indicating this is a known pain point for power users.

### 7. User Feedback Summary
User feedback today paints a picture of a project that is feature-rich but experiencing growing pains with platform-specific stability:
*   **Satisfaction:** The rapid release cycle (v0.23.5 just dropped) and the addition of practical plugins like ClawCall are positively received.
*   **Dissatisfaction:** Windows users are facing significant UI bugs (clipboard failure) that hinder daily driver usage. System administrators report frustrations with misleading systemd warnings and cron script failures on WSL setups. The "provenance drift" issue creates workflow friction for developers managing git-based plugins.

### 8. Backlog Watch
These long-standing or recently critical items require maintainer attention:
*   **#85117 (Systemd Timing):** 13 comments, updated today. High priority due to its impact on system-level gateway stability and the false warnings it generates.
*   **#153097 (Schema Sanitizer):** 4 comments. A bug where free-form object parameters are forced to have empty `properties: {}`, breaking tools that accept dynamic dict inputs.
*   **#159710 (Plugin Provenance Drift):** 2 comments, updated today. A loop-breaking bug that requires a fix to the reinstall logic or provenance tracking.
*   **#161023 (Windows Clipboard):** Newly reported today; needs immediate reproduction and a platform-specific fix given the severity (P2) and frequency of Electron apps.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest**
**Date:** 2026-11-28
**Source:** sipeed/picoclaw GitHub

### 1. Today's Overview
The PicoClaw project shows moderate activity for 2026-11-28. Two new issues were opened in the last 24 hours, both related to user-facing bugs in the chat/web interface. Pull request activity slowed slightly, with 6 updates (4 merges, 2 opens). No new releases were published. The project health appears stable, with maintainers actively merging fixes, though user-reported stability issues regarding typing lag and proxy settings require attention.

**Links:** [GitHub Repository](https://github.com/sipeed/picoclaw)

### 2. Releases
No new releases were published today. The latest version remains 0.3.1 (released prior to this digest period). There are no breaking changes or migration notes to report for this date.

**Links:** [Releases Page](https://github.com/sipeed/picoclaw/releases)

### 3. Project Progress
Six pull requests were updated today, primarily consisting of merges consolidating prior fixes. The most notable merge is **#1546**, which consolidates fixes from PRs #1480, #1479, #1478, #1473, and #1467. Additionally, **#238** was merged, resolving a "400 Bad Request" error for Claude/Anthropic API requests by fixing tool name handling. Two new PRs were opened: **#3476** addresses web chat typing lag by isolating draft state from message rendering, and **#3471** adds LLMTR as an OpenAI-compatible provider.

**Links:** 
- [PR #1546](https://github.com/sipeed/picoclaw/pull/1546)
- [PR #238](https://github.com/sipeed/picoclaw/pull/238)
- [PR #3476](https://github.com/sipeed/picoclaw/pull/3476)
- [PR #3471](https://github.com/sipeed/picoclaw/pull/3471)

### 4. Community Hot Topics
The most discussed items today are the two newly opened issues and the two new PRs.
- **Issue #3477** (1 comment, 0 👍): Reports that Telegram channel attachment downloads bypass `settings.proxy`, connecting directly instead of through the configured proxy. This is a critical network routing bug for users on restricted networks.
- **Issue #3475** (1 comment, 0 👍): Details significant lag/stuttering when typing in web-based chat interfaces, specifically when reasoning and tool output are visible.
- **PR #3476** (undefined comments): Proposes a fix for the typing lag issue by moving draft state into `ChatComposer` to prevent historical message re-rendering.
- **PR #3471** (undefined comments): Proposes adding LLMTR as a named OpenAI-compatible provider, expanding provider compatibility.

**Links:** 
- [Issue #3477](https://github.com/sipeed/picoclaw/issues/3477)
- [Issue #3475](https://github.com/sipeed/picoclaw/issues/3475)
- [PR #3476](https://github.com/sipeed/picoclaw/pull/3476)
- [PR #3471](https://github.com/sipeed/picoclaw/pull/3471)

### 5. Bugs & Stability
Two stability bugs were reported in the last 24 hours, both marked as [OPEN] and affecting the web/chat experience.
- **#3477** (Proxy bypass): Rated high severity for network-dependent users. The Telegram `getFile` operation succeeds via the Bot API proxy but fails on actual attachment downloads, leaving files inaccessible on proxy-only networks.
- **#3475** (Typing lag): Rated medium severity. Causes a stuttering experience during typing in Chrome on web interfaces, likely due to excessive re-rendering of chat history on every draft edit.

Notably, **PR #3476** exists as a direct fix for the lag issue in #3475, indicating the maintainers are already tracking and addressing this regression. No crash reports or core stability failures were recorded today.

**Links:** 
- [Issue #3477](https://github.com/sipeed/picoclaw/issues/3477)
- [Issue #3475](https://github.com/sipeed/picoclaw/issues/3475)
- [PR #3476](https://github.com/sipeed/picoclaw/pull/3476)

### 6. Feature Requests & Roadmap Signals
Two feature-oriented items signal near-term roadmap direction.
- **PR #3471** explicitly adds LLMTR as an OpenAI-compatible provider, suggesting the project is expanding its catalog of supported LLM services beyond the major providers. This is a low-risk, high-usability addition for users of alternative API services.
- **Issue #3477**’s proxy mishandling may trigger a future fix focused on unified proxy configuration across all download channels, not just the Bot API layer.

**Links:** 
- [PR #3471](https://github.com/sipeed/picoclaw/pull/3471)

### 7. User Feedback Summary
User feedback today centers on two pain points: **network reliability** and **web interface performance**.
- **Network reliability:** Users on networks with proxies for `api.telegram.org` find that while Bot API calls work, attachment downloads silently fail or hang, breaking the expected workflow. This indicates a gap in proxy configuration transparency or application-level proxy support.
- **Web interface performance:** The typing lag is reported as disruptive, particularly in long chat sessions with tool outputs enabled. Users appear frustrated by the repeated Markdown parsing and syntax highlighting overhead.
- **Overall satisfaction:** The merge of PR #238 ("fix: resolve empty tool name in Claude API requests") likely improved reliability for Anthropic users, as no new Claude-specific complaints appear in the hot topics. The project maintains a baseline of functional usability, but these two issues represent the most active dissatisfaction vectors.

**Links:** 
- [Issue #3477](https://github.com/sipeed/picoclaw/issues/3477)
- [Issue #3475](https://github.com/sipeed/picoclaw/issues/3475)

### 8. Backlog Watch
Several items merit maintainer attention in the coming days:
- **#3477** and **#3475** are both from 2026-11-27 and have only 1 comment each, suggesting they are newly discovered or low-priority pending maintainer triage. Given the proxy and lag issues, these should be prioritized for assignment.
- **#3476** (the fix for #3475) is open but has no comments or 👍 reactions; it may need a maintainer review or label update to signal it is a valid fix ready for merge.
- **#3471** (LLMTR provider) is from 2026-11-14 and has been updated recently (2026-11-28) but has no comments. It may be awaiting catalog model documentation or user testing.
- **Stale PRs:** While not in the last 24h, the repository has a history of large merge PRs (e.g., #1546 consolidating 5 others). Maintainers should verify the backlog of open PRs does not create a merge bottleneck.

**Links:** 
- [Issue #3477](https://github.com/sipeed/picoclaw/issues/3477)
- [Issue #3475](https://github.com/sipeed/picoclaw/issues/3475)
- [PR #3476](https://github.com/sipeed/picoclaw/pull/3476)
- [PR #3471](https://github.com/sipeed/picoclaw/pull/3471)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-11-28

## 1. Today's Overview
NanoClaw continues its active development cycle with 5 issues and 9 PRs updated in the last 24 hours. The project shows strong momentum, particularly in the areas of session management and credential handling. The volume of open issues (5) alongside a healthy merge rate (4 PRs closed) indicates steady progress toward stabilizing the v2026.11.0 release while addressing operational limitations for diverse deployment environments.

## 2. Releases
No new releases were published today. The latest version remains v2026.11.0. However, PR #4579 reflects a hardened agent image update (`v2026.11.0-20261127T0412`) pushing to the ECR registry, suggesting the release tag is being reinforced with recent bug fixes and security hardening prior to a potential stable tagging.

## 3. Project Progress
Four PRs were merged/closed today, representing tangible advancements:
*   **PR #4210:** Added `llmman` as a local-model support option, expanding local AI provider choices.
*   **PR #1402:** Fixed per-group trigger pattern matching, improving intent recognition precision.
*   **PR #4289:** Fixed an agent-runner bug where context was incorrectly started alongside pending commands.
*   **PR #4308:** A dependency update bumping `actions/checkout` from 4.4.0 to 7.0.1, likely improving CI reliability.

## 4. Community Hot Topics
The most significant discussion surrounds **Issue #4584** and **PR #4581**, both centering on the "mailbox" and credential accessibility problem.
*   **Issue #4584** ([link](https://github.com/qwibitai/nanoclaw/issues/4584)): Reports that personal assistants like "Tanx" fail when credentials reside in HashiCorp Vault because the credential gateway only injects secrets registered locally, not those from the source of truth.
*   **PR #4581** ([link](https://github.com/qwibitai/nanoclaw/pull/4581)): Proposes the `/add-remote-mailbox` feature to enable session mailbox access over HTTP, removing the requirement for a host-mounted session directory.
*   **Underlying Need:** These items highlight a critical architectural shift needed to support remote, sandboxed, or Kubernetes-based runner environments where traditional host-path mounting is impossible.

## 5. Bugs & Stability
Three bugs were reported today that impact immediate usability:
*   **Issue #4580** ([link](https://github.com/qwibitai/nanoclaw/issues/4580)): A **high severity** bug where stored messages containing `/clear` or `/upload-trace` execute as commands on the next turn, posing a risk of unintended data loss or trace exposure.
*   **Issue #4583** ([link](https://github.com/qwibitai/nanoclaw/issues/4583)): A **medium severity** rootless Docker configuration issue where the systemd unit file is written without the user's Docker endpoint, forcing users to manually run `setfacl` on the system socket.
*   **Issue #4582** ([link](https://github.com/qwibitai/nanoclaw/issues/4582)): A **medium severity** firewall bypass risk where the gateway webhook server binds to a random loopback port, potentially conflicting with host firewall rules limiting loopback traffic.

Notably, **PR #4289** directly addresses the `/clear` and `/upload-trace` command mishandling found in #4580, suggesting a fix is already in the pipeline.

## 6. Feature Requests & Roadmap Signals
Several feature requests signal the project's roadmap direction:
*   **Issue #4543** ([link](https://github.com/qwibitai/nanoclaw/issues/4543)): Requests a "Network mailbox" capability so session runners do not need a shared session directory, targeting remote and sandbox runtimes.
*   **PR #4581** ([link](https://github.com/qwibitai/nanoclaw/pull/4581)): Implements the remote mailbox feature over HTTP.
*   **Feature Expansion:** PR #4210's addition of `llmman` local-model support indicates an ongoing effort to diversify local AI options beyond the standard providers.

## 7. User Feedback Summary
User feedback today reveals two primary pain points:
1.  **Environment Portability:** Users running rootless Docker or sandboxed environments (OpenShell, Kubernetes) are hindered by the requirement for host-mounted session directories. Issues #4543, #4583, and #4582 all stem from this architectural dependency.
2.  **Secrets Management:** Issue #4584 exposes friction in integrating HashiCorp Vault as the central secrets store, clashing with the current credential gateway implementation.

## 8. Backlog Watch
Several items require maintainer triage and attention:
*   **#4584** (Created/Updated today): New issue on Vault credential integration; needs maintainer evaluation of the gateway's registration model.
*   **#4583** (Created yesterday): Rootless Docker setup bug; requires a fix to the `setup/service.ts` logic rather than a workaround.
*   **#4582** (Created yesterday): Firewall configuration edge case; needs a review of the webhook server binding logic to ensure it respects host network policies.
*   **#4210** (Closed today): Successfully merged, resolving the llmman provider addition.
*   **#4579** (Closed yesterday): Agent image refresh completed, hardening the runtime environment.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Date:** 2026-11-28

## 1. Today's Overview
LobsterAI concluded a massive architectural migration on 2026-11-27, moving its agent engine from OpenClaw to DeepSeek Harness (DSH). This transition involved 106 PRs and represents the largest structural change in the project's history. Today's activity focuses on stabilizing the migration, with 17 PRs merged that address plugin compatibility, session synchronization, and UI refinements. The issue queue remains quiet (0 new issues), indicating the community is currently in a testing and adaptation phase following the engine switch.

## 2. Releases
**LobsterAI 2026.11.27** (Released 2026-11-27)
*   **Core Change:** Migration of the agent engine from OpenClaw to **DeepSeek Harness (DSH)** `@deepseek-ai/dsh@0.2.2-rc.5`.
*   **Scope:** This release consolidated the migration across all major subsystems, including desktop integration, IM channels (Telegram, Discord, QQ), data backup/migration, the plugin ecosystem, and the user interface.
*   **Breaking Changes/Migration Notes:** Users upgrading should expect changes in how agent skills are bundled and mounted (streamlined to 9 core skills), how group tasks are routed and identified (now using channel/group/robot identification), and a redesigned settings save model with explicit save/discard flows. The default `dmPolicy` for Telegram and Discord has been changed from `open` to `allowlist`.

## 3. Project Progress
**17 Pull Requests merged/closed today.**
The merged PRs can be grouped into three key areas of stabilization:
*   **Agent Engine & Runtime (PR #3239, #3240, #3242):** Finalizing the DSH engine integration, preserving imported skin skills, and implementing the new plugin ecosystem compatibility layer.
*   **Instant Messaging & Routing (PR #3231, #3232, #3234, #3230):** Critical fixes for group chat routing. PR #3231 addresses the issue of multiple robots from the same Agent creating duplicate tasks in shared groups. PR #3232 fixes QQ group OpenID routing and Telegram/Discord @-mention handling. PR #3230 resolves a timing issue where legacy 60s timers were racing against DSH approvals.
*   **UI/UX Polish (PR #3238, #3237, #3229):** Improvements to the home credits popover scrollability, settings section embeds, and side-chat rename/delete/promote UI functionality.

## 4. Community Hot Topics
The most significant discussion today centers on the **DSH migration and group routing stability**.
*   **PR #3231 & #3232 (Links):** These are the most discussed items, focusing on fixing "cross-robot" and "cross-group" messaging issues. The underlying need is ensuring that when multiple instances of the same AI Agent join a group chat, they do not create duplicate tasks or interfere with each other's conversation history.
*   **PR #3242 (Link):** Represents the new plugin compatibility layer, signaling a need for third-party plugin developers to adapt to the new DSH protocol boundary.

## 5. Bugs & Stability
*   **Telegram/Discord Access Control (PR #3241):** A "fail-closed" security fix was merged, changing default DM policies from `open` to `allowlist` for Telegram and Discord channels. This addresses a security hardening requirement for direct messages.
*   **Approval Timeout (PR #3230):** A bug where IM approval prompts were timing out at 60s despite a displayed 300s timeout has been fixed.
*   **Current Status:** No open crashes or critical regressions were reported in the last 24h. The migration-related fixes (#3231, #3232) are the primary stability focus.

## 6. Feature Requests & Roadmap Signals
While no new feature requests were opened today, the merged PR #3236 ("Streamline bundled skills") reveals the roadmap direction. The project is moving towards **9 always-enabled core skills** (currently including `web-search`, `docx`, `xlsx`, `pptx`) with a read-only mount model and marketplace migration. This suggests a focus on stability and core functionality over experimental features in the immediate aftermath of the DSH migration.

## 7. User Feedback Summary
User feedback, as reflected in the merged PRs, paints a picture of a **transition-period user base**.
*   **Pain Points:** Users migrating from OpenClaw are experiencing growing pains with **group task identification** (who is speaking in a POPQ/Feishu group) and **robot routing** (ensuring the right bot replies).
*   **Satisfaction:** The migration to DSH is generally viewed as a necessary architectural step ("largest architectural migration in history"), but the community is actively providing feedback on edge cases regarding session sync and plugin compatibility.

## 8. Backlog Watch
*   **#3242 & #3241:** These are the newest PRs (just created/updated today) and require immediate maintainer review for final merge and release tagging.
*   **Migration Checklist:** Given the scale of the DSH migration (106 PRs), maintainers should monitor issues related to **plugin ecosystem compatibility** and **external session synchronization**, as the thin host protocol boundary implemented in #3242 is a new frontier for the project.
*   **Long-term:** Keep an eye on issues regarding the new "settings save model" (#3233) to ensure the discard/unsaved changes confirmation dialogs function correctly across all platforms (Windows/macOS).

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

### ZeroClaw Project Digest
**Date:** 2026-11-28

#### 1. Today's Overview
ZeroClaw exhibits extremely high daily activity, with 10 new issues and 41 new PRs opened in the last 24 hours, indicating an aggressive development pace. The project appears to be in a state of active refactoring and feature delivery, with a significant focus on provider integration, tool delivery, and runtime stability. The volume of changes suggests preparation for a major release (likely v0.9.1 or v1.0), though no new releases were tagged today. The repository is highly responsive, with maintainers and contributors merging fixes at a rapid rate.

#### 2. Releases
No new releases were published today. The latest development activity is centered on the `master` branch (v0.9.0 development), with several PRs marked for release `v0.9.1` (e.g., #12061, #12315). Migration notes are minimal today, but the frequent updates to provider logic suggest evolving API contracts.

#### 3. Project Progress
Forty-one PRs were opened in the last day, with significant momentum in tool and provider fixes.
*   **Tool Fixes:** PR #12061 ("fix(mcp): evict poisoned connections instead of reusing them") is a high-risk fix addressing connection stability. PR #12781 ("fix(providers): pair damaged tool results with the remaining call") and #12780 ("fix(providers): deliver declared OpenRouter tool-result images") address critical tool-result serialization issues.
*   **Provider & Channel:** PR #12776 adds a feature-flagged macOS `computer_use` tool and OpenRouter image delivery. PR #12762 adds `thread_mode` to Discord mentions. PR #12654 wires ACP startup cutover for the webchat dashboard.
*   **Runtime & Config:** PR #12062 proposes bounded RPC denial reason exceptions. PR #12779 fixes gateway on-disk config validation.

#### 4. Community Hot Topics
The most discussed issues and PRs reflect a focus on reliability and multimodal capabilities.
*   **OpenAI Tool Results (#12104):** [2 comments] A bug where OpenAI Responses drops tool-result image attachments, serializing them as text-only. This is a high-priority S2 bug affecting the primary LLM provider.
*   **OpenRouter Tool Results (#12774):** [0 comments] A bug where OpenRouter drops declared tool-result image attachments. PR #12780 is already open to fix this.
*   **MCP Stability (#12767, #12766):** [1 comment each] Two related bugs regarding transient MCP failures at channel startup. #12767 describes agents losing MCP tools until restart while /health stays green; #12766 describes the gateway /health endpoint failing to respond during startup, triggering liveness probe restarts.
*   **Discord Thread Mode (#12762, #12771):** Active PRs adding `thread_mode` configuration and offering built-in chat commands as slash commands, indicating community demand for better Discord threading integration.

#### 5. Bugs & Stability
The bug landscape is currently dominated by provider-specific tool-result delivery failures and MCP connectivity issues.
*   **S1 - Workflow Blocked:** #12774 (OpenRouter image drops), #12773 (Lark/Feishu quickstart invalid config), #12766 (/health failure during MCP outage).
*   **S2 - Degraded Behavior:** #12104 (OpenAI image drops), #12767 (MCP transient failure recovery).
*   **S0 - Data Loss/Security:** #12772 (request to exclude individual MCP tools inside bundles).
*   **Fix Status:** Several critical bugs have corresponding fix PRs opened the same day (#12780 for OpenRouter, #12781 for provider pairing, #12061 for MCP poisoning), suggesting a "fix-forward" workflow.

#### 6. Feature Requests & Roadmap Signals
Feature requests are tightly coupled to provider support and integration expansion.
*   **New Integrations:** #12765 (Add Buzz channel), #12773 (Lark/Feishu credentials), #12772 (MCP tool exclusion).
*   **AI Capability:** #12776 (macOS computer_use tool), #12669 (Gemini provider modernization due to Google OAuth retirement), #12774/#12780 (Tool-result image delivery for OpenRouter/OpenAI).
*   **Predictions:** Given the volume of provider fix PRs, expect the next release (v0.9.1) to focus on stabilizing tool-result delivery across OpenAI, OpenRouter, and Groq, along with the MCP connection stability fixes.

#### 7. User Feedback Summary
Users are experiencing significant friction with multimodal tool results. The recurring theme is the loss of image attachments when tool results are passed to providers (OpenAI, OpenRouter). There is also frustration regarding MCP server reliability, specifically transient connection failures that degrade agent capability without clear health signals. On the configuration side, onboarding for niche channels like Lark/Feishu is described as broken or incomplete.

#### 8. Backlog Watch
*   **#11005:** A significant enhancement task regarding stable RPC denial reasons and localized selectors, opened in September 2026 and still "in-progress." This is a foundational runtime stability feature.
*   **#12669:** The Gemini provider modernization tracker, created November 23, coordinating the retirement of retired Google OAuth paths. This is a pending migration task for Google-dependent users.
*   **#12772:** A request to support excluding individual MCP tools inside `mcp_bundles`, marked S0 (data loss/security risk) but with no comments or activity beyond creation, suggesting it may be overlooked.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*