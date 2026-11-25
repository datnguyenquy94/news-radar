# OpenClaw Ecosystem Digest 2026-11-25

> Issues: 116 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-25 08:03 UTC

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

### OpenClaw Project Digest
**Date:** 2026-11-25

#### 1. Today's Overview
OpenClaw maintained a high velocity of development today, processing 500 new Pull Requests and updating 116 Issues. The project continues its rapid iteration cycle, with 2026.11.10 having shipped recently while mainline development pushes toward 2026.11.11+. The volume of activity indicates an active development cycle, though the high number of open issues (82 active) suggests the team is balancing feature delivery with stabilizing a complex, multi-component architecture.

#### 2. Releases
**v2026.11.10** was released on 2026-11-10. This release is a stable candidate following the 2026.11.9 and 2026.11.8 lines. No breaking changes or migration notes are specified in the release metadata for this specific tag, but the subsequent 2026.11.11 development appears focused on resolving critical rollback failures and session state corruption identified in the latest release cycle.

#### 3. Project Progress
Today saw 500 PRs updated, with 250 merged/closed and 250 remaining open. Key merges include:
*   **PR #205169:** Fixes Gateway restart after update rollback, addressing a critical stability issue where the Gateway could not start following a SQLite migration rollback.
*   **PR #205203:** Prunes npm bundled docs to resolve a macOS QuickLook crash triggered by auto-update (#205153).
*   **PR #205199:** Fixes voice relay session latching issues when close admission fails.
*   **PR #205026:** Fixes session archiving logic so inactive chats remain eligible for cold storage.
*   **PR #204956:** Allows rollback across compatible database changes, closing issue #204880.

#### 4. Community Hot Topics
*   **Most Active Issue:** #164294 ("Gateway state DB WAL auto-checkpoint never completes") leads with 44 comments. It highlights a persistent WAL blocking issue in the Gateway's state database, likely related to the high transaction volume seen in other reports.
*   **Most Active PR:** #205168 ("chore(release): close out 2026.11.10 on main") is the operational closure for the recent release.
*   **Needs Attention:** Issue #197083 ("Post-install Doctor WAL publication verification leaves 11.3 update partially finalized") has 39 comments and deals with a sticky migration state from the previous version.

#### 5. Bugs & Stability
Several critical stability bugs were reported or addressed today:
*   **Critical:** Issue #205153 reports a macOS auto-update triggering a "QuickLook thumbnail storm" (~90 HTML files spawning WebContent processes), causing load averages of 200 on 8 cores. PR #205203 was created specifically to fix this.
*   **Critical:** Issue #203134 describes sessions wedging on "SQLite session entry changed before lifecycle upsert," requiring a Gateway restart to clear.
*   **Moderate:** Issue #181432 reports excessive baseline RSS memory (~1.9 GB) and SQLite transaction timeouts following the 2026.10.5 update on Linux ARM64.
*   **Fixes exist:** PR #205169 and #204956 directly address rollback and database compatibility stability issues.

#### 6. Feature Requests & Roadmap Signals
*   **Plugin Management:** PR #204956 ("feat: allow rollback across compatible database changes") and related issues (#192009) focus on explicit cross-provider cron fallback authorization and database rollback capabilities.
*   **Memory & Session State:** Issue #153426 ("Curated memory roots... silently and permanently excluded from bootstrap injection") explores the provenance ratchet mechanism governing memory file injection, a complex area of session state management.
*   **UI/UX:** PR #205132/#205171 focuses on Control UI simplification, removing redundant composer control dimensions.

#### 7. User Feedback Summary
Users are reporting significant growing pains with the 2026.10.x to 2026.11.x transition:
*   **Memory bloat** is a recurring theme, with reports of RSS growing from ~300MB to ~1.9GB after updates (Issue #181432).
*   **Update reliability** is a major concern; multiple issues (#204816, #204880, #205169) highlight failures during the Doctor validation and rollback phases, leaving Gateways unable to start or stuck in degraded states.
*   **Compatibility friction** exists around plugin retirement dates and fallback configurations (#190536, #192009).

#### 8. Backlog Watch
*   **#164294** (WAL checkpoint blocked): 44 comments, created Oct 3. No fix PR identified yet; this low-level DB issue likely affects overall Gateway stability.
*   **#197083** (Post-install Doctor verification): 39 comments, created Nov 11. A migration leftover issue that blocks clean updates from 2026.11.1 to 2026.11.3.
*   **#204816** (Rollback failure 2026.11.4→2026.11.8): 7 comments, created Nov 24. A recent bug where a stable rollback failed with "Invalid config" after passing earlier checks.
*   **#205153** (macOS QuickLook storm): 2 comments, created Nov 25. High severity crash-loop risk due to auto-update.

**Project Health Indicators:**
*   **Activity Level:** Very High (500 PRs/116 Issues in 24h).
*   **Release Cadence:** Fast (3 releases in recent history, latest Nov 10).
*   **Risk Level:** Moderate-High. The convergence of WAL/database issues, memory bloat, and update rollback failures suggests a period of architectural refactoring to stabilize the core session and state management layer.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem
*Data synthesized from project digests dated 2026-11-25*

## 1. Ecosystem Overview
The personal AI agent and assistant open-source ecosystem in late-November 2026 is characterized by a dichotomy between rapid, feature-driven innovation and infrastructure stabilization. The landscape is dominated by projects focused on session state management, provider integration, and desktop integration, with significant variance in architectural maturity. While some projects like OpenClaw and ZeroClaw exhibit high-volume, fast-paced development cycles approaching production stability, others like LobsterAI and NanoBot are laser-focused on refining specific subsystems (DSH, WebUI) following recent feature bursts. A common thread across the ecosystem is the critical importance of dependency management, update reliability, and cross-platform compatibility, particularly for Windows and Docker environments. The community is actively wrestling with the trade-offs between rapid iteration and the operational stability required for production-grade AI assistants.

## 2. Activity Comparison

| Project | Issues Updated | PRs Merged/Closed | Release Status | Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 116 | 500 | v2026.11.10 (Stable); 2026.11.11 in dev | **High** (Very High Activity, Moderate-High Risk) |
| **ZeroClaw** | 7 | 8 | v0.9.0 (Nov 12); v0.9.1 in prep | **High** (Active Merge Cycle) |
| **NanoBot** | 3 | 16 | No new releases; Main branch active | **Medium-High** (Stabilization Focus) |
| **NanoClaw** | 5 | 25 | v2026.10.0; RC/RC releases active | **High** (Strong Fix Velocity) |
| **CoPaw** | 16 | 40 | v2.3.1-beta.1 (Nov 23) | **Medium** (Beta, Active Bug Fix) |
| **LobsterAI** | 0 | 16 | No release; Stabilization phase | **Medium** (No New Issues) |
| **PicoClaw** | 1 | 5 | No release; Latest tagged version | **Low-Medium** (Regression Recovery) |
| **Hermes Agent** | 13 | 8 | v0.23.4 (Nov 25); Canary active | **High** (Recent Stable Release) |
| **Moltis** | 0 | 0 | N/A | **Inactive** |
| **IronClaw** | 0 | 0 | N/A | **Inactive** |

*\*Health Score is a qualitative assessment based on activity volume, release stability, and risk indicators from project digests.*

## 3. OpenClaw's Position
OpenClaw occupies the position of the **high-velocity core reference** in the ecosystem. Its primary advantage over peers is the sheer scale of its development pipeline; processing 500 PRs in a single day far exceeds the activity of any other project, indicating a maturing, complex architecture under active refinement. Technically, OpenClaw distinguishes itself through a multi-component architecture focused on Gateway stability, SQLite session management, and sophisticated rollback capabilities (e.g., PR #204956 allowing rollback across compatible database changes). While projects like NanoBot and PicoClaw focus on narrower integrations or specific provider fixes, OpenClaw acts as a broad platform, managing session archiving, voice relay, and multi-database compatibility. Community size appears largest here, evidenced by the 82 active issues and the high comment counts on critical bugs like #164294 (WAL checkpoint), suggesting a substantial user base navigating the growing pains of a 2026.10.x to 2026.11.x transition.

## 4. Shared Technical Focus Areas
Across the ecosystem, several technical needs emerge repeatedly:
*   **Dependency & Update Stability:** This is the most pervasive concern. PicoClaw (#3472) battles `resty` version mismatches; NanoClaw (#4566) deals with GPG signing failures during updates; ZeroClaw (#11760, #12703) reports email clients failing to mark messages as seen after updates; and OpenClaw (#181432, #204816) documents severe memory bloat and rollback failures. The "update pipeline" is a critical pain point across virtually all active projects.
*   **Provider Integration & Context Management:** Managing third-party AI providers is a constant theme. NanoBot (#6785) struggles with Anthropic Haiku 5.x `reasoningEffort`; CoPaw (#8891, #8890) reports missing context table entries for `glm-5.3`/`glm-5.4`; ZeroClaw adds `bf16.ai` and DeepSeek providers. There is a clear industry-wide need for dynamic, model-aware context sizing and robust provider fallbacks.
*   **Cross-Platform & Environment Friction:** Windows TUI stability is a specific pain point for NanoBot (#6784, #6791) due to antivirus locks, while OpenClaw and Hermes Agent report Linux desktop crashes (#132670) and Docker restart loops (#159960). Hardware compatibility and environment isolation are significant barriers to seamless operation.

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | NanoBot | LobsterAI |
| :--- | :--- | :--- | :--- | :--- |
| **Feature Focus** | Broad platform: Gateways, sessions, rollback, voice relay. | OIDC stack, model providers, email/channel routing. | WebUI polish, Anthropic provider, TUI stability. | Desktop Session Handling (DSH), Artifacts, WeChat integration. |
| **Target User** | Power users/self-hosters seeking a comprehensive AI OS. | Developers building OIDC-integrated AI services. | Users seeking a customizable local AI assistant UI. | Productivity users wanting a chat-to-workspace hybrid. |
| **Architectural Approach** | Multi-component, database-centric (SQLite/WAL), rapid iteration. | Protocol-focused (OIDC), modular provider registries. | Lightweight runtime, WebUI-first, provider-agnostic leanings. | Electron-based DSH, artifact-centric UI/UX. |
| **Maturity Signal** | High activity = rapid feature delivery, but moderate-high risk due to complexity. | Release-driven (v0.9.0 shipped), infrastructure-focused. | Beta/stabilization phase, fixing WebUI/Provider bugs. | Recent feature burst, now in stabilization/bug fix mode. |

## 6. Community Momentum & Maturity
The ecosystem segments clearly into **Rapid Iterators** and **Stabilizers**.
*   **Rapid Iterators:** OpenClaw and ZeroClaw are in high-velocity cycles, pushing frequent releases (OpenClaw: 3 releases in recent history; ZeroClaw: v0.9.0 Nov 12) and accepting higher operational risk for the sake of new features and bug fixes. OpenClaw's "Very High" activity level (500 PRs/24h) places it in a different category than the others.
*   **Stabilizers:** Projects like NanoBot, PicoClaw, and LobsterAI show signs of maturing or winding down feature sets to address technical debt. NanoBot is actively fixing WebUI and Provider bugs; PicoClaw is recovering from a QQ channel regression; LobsterAI has merged 16 PRs and is at zero open issues, indicating a successful backlog clearance and current stabilization phase.
*   **Inactive/Mature:** Moltis and IronClaw show no activity, suggesting they are either mature, deprecated, or on long-term hiatus.

## 7. Trend Signals
Several strong industry trends emerge from the community feedback:
*   **The "Update Reliability" Crisis:** There is a systemic issue across the ecosystem where updating an AI agent is higher risk than expected. From Docker restart loops (Hermes Agent, ZeroClaw) to macOS QuickLook storms (OpenClaw) and GPG signing failures (NanoClaw), the "update" operation is a frequent source of user frustration and service disruption. This signals a maturity gap where feature development outpaces operational robustness.
*   **Provider Parity & Model Explosion:** The sheer variety of providers (Anthropic Haiku, glm models, bf16.ai, DeepSeek) is outpacing the ability of open-source projects to maintain dynamic context windows and integration compatibility. Projects are struggling to keep "model-aware" configurations current, suggesting a need for standardized model metadata or proxy layers.
*   **Session & State Persistence as Differentiator:** How a project handles session state, rollbacks, and database migrations (SQLite WAL issues in OpenClaw, compaction failures in NanoBot) is becoming a key differentiator of reliability. The ability to gracefully handle migration failures and maintain session integrity across updates is transitioning from a "nice-to-have" to a critical feature for production deployments.
*   **Desktop vs. WebUI Struggle:** There is a clear split in focus. Projects like OpenClaw and Hermes Agent deal with complex backend/Gateway infrastructure, while NanoBot, PicoClaw, and LobsterAI wrestle with the User Interface layer (TUI, WebUI polish, artifact management). The "last mile" of user experience—particularly on Windows and during migration—remains a significant hurdle for adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for 2026-11-25.

### 1. Today's Overview
NanoBot exhibits a day of high velocity with 16 Pull Requests merged or closed and 3 new Issues opened. The project demonstrates strong maintenance activity, with a clear focus on stabilizing the WebUI and refining the core runtime. However, significant stability risks remain in the Anthropic provider integration and the Windows native TUI, where environmental constraints (like antivirus scanners) are causing critical failures.

### 2. Releases
No new releases were published today. The project remains on the current main branch, with development focused on incremental bug fixes and refactors rather than major version milestones.

### 3. Project Progress
Sixteen PRs were processed today, with 11 merged/closed and 5 remaining open. Key advancements include:
*   **Windows TUI Stability:** PR #6791 merged a fix for verifying downloaded Bun at its final cache path, directly addressing the antivirus interference issue in #6784.
*   **Memory & Compaction Hygiene:** PR #6797 merged a fix to keep empty compaction markers out of replay and the journal, preventing broken sessions in long-running conversations.
*   **Provider Recovery:** PR #6792 merged a fix for recovering compacted thinking sessions and honoring Haiku 5.5 reasoning efforts.
*   **WebUI Polish:** Several usability fixes landed, including loading rings for pending messages (#6794), improved inline diff handling (#6790), and subagent action confinement (#6783).

### 4. Community Hot Topics
The most active discussions center on Anthropic model compatibility and WebUI ergonomics.

*   **#6785 [OPEN]** (0 comments/👍): *"Anthropic Haiku 5.x fails with reasoningEffort: manual thinking budget is rejected."* Users are unable to use `reasoningEffort` values other than `adaptive` or `none` with Haiku 5.5, receiving a `thinking.type.enabled` error. This is a blocking issue for users relying on Haiku's cost-efficiency.
*   **#6792 [OPEN]** (0 comments/👍): *"fix(anthropic): recover compacted thinking sessions and honor Haiku 5.5 effort."* This PR provides the fix for the issue above, signaling that the maintainers are actively addressing the Anthropic provider's thinking block handling.
*   **#6761 [OPEN]** (0 comments/👍): *"feat(webui): redesign session management with Mission Control..."* A major frontend redesign proposal aiming to replace the sidebar with a "Workspace Top Bar" and "Live Pulse bar" to support multi-project, concurrent-agent runtimes.

### 5. Bugs & Stability
The bug landscape is currently split between critical runtime crashes and WebUI quality-of-life issues.

*   **Critical:** **#6784 [CLOSED]** was addressed today by #6791. The Windows native TUI fails to install Bun if a virus scanner locks `bun.exe` (WinError 32). The fix involves atomic relocation of the verified executable.
*   **Critical:** **#6786 [OPEN]** *"Anthropic thinking: resumed session fails with 'Invalid signature in thinking block' after compaction."* This issue renders long runs unusable after context compaction. While #6792 addresses recovery, #6786 remains open and highlights a race condition in session state management.
*   **Moderate:** **#6785 [OPEN]** details the `reasoningEffort` rejection on Haiku 5.5, preventing users from manually tuning the thinking budget.

### 6. Feature Requests & Roadmap Signals
The community is actively requesting deeper integration and redesign features.
*   **Session Redesign (#6761):** This is the most significant feature request, proposing a complete overhaul of the WebUI session management. If implemented, it would signal a shift toward a more "Mission Control"-style interface capable of handling multiple concurrent agents and projects.
*   **Edit & Resend (#6323):** An older but still open feature (created Oct 20) allowing users to edit and resend messages within a session. Its current status is blocked by a conflict, indicating it is a high-priority but technically challenging feature.

### 7. User Feedback Summary
User feedback today reveals two distinct pain points:
*   **Environmental Friction (Windows Users):** The primary dissatisfaction stems from the Windows TUI. Users with active antivirus software are effectively blocked from using the native interface, forcing a `--no-tui` workaround. The recent PR #6791 is a direct response to this friction.
*   **Anthropic Model Limitations:** Power users running Haiku 5.5 are frustrated by the inability to customize `reasoningEffort`. The "manual" thinking budget is rejected entirely, limiting control over token usage and cost for advanced users.

### 8. Backlog Watch
*   **#6786 [OPEN]:** Despite the merge of #6792, this issue remains open and requires maintainer verification that the "Invalid signature in thinking block" error is fully resolved for resumed sessions.
*   **#6323 [OPEN]:** Created on 2026-10-20, this feature request has been open for over a month with no merge. It sits at the intersection of WebUI and core functionality and requires maintainer attention to unblock the conflict.
*   **#6761 [OPEN]:** The proposed WebUI redesign is a major undertaking. Its open status suggests the maintainers are weighing this significant UI shift against the current roadmap.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for Hermes Agent as of 2026-11-25.

### 1. Today's Overview
The Hermes Agent project is in an active release cycle, having just published three canary and stable builds on November 25, 2026. The issue queue remains highly active with 13 open issues updated today, indicating ongoing development momentum. A significant portion of the day's activity was driven by 50 PR updates, including 8 merges and the publication of the v0.23.4 stable release. The project is currently balancing feature expansion (plugins, providers) with critical infrastructure stability (Docker, Linux compatibility).

### 2. Releases
**v0.23.4 (Stable) & canary.20261125T064800Z-v0.23.4 (Canary)**
*   **Release Date:** November 25, 2026.
*   **v0.23.4:** This is a patch release rolling up approximately 229 PRs since v0.23.3. It encompasses CLI installers, the Microsoft Store app, Docker images, and Hermes Cloud. The release notes indicate that full curated notes for this development window will ship with the upcoming v0.24.0 release.
*   **Canary:** The canary build `canary.20261125T064800Z-v0.23.4` was published alongside the stable release, offering the latest bleeding-edge changes.

### 3. Project Progress
Today saw significant merging activity, with 8 PRs merged/closed. Key advancements include:
*   **Plugin Ecosystem:** Merged PR #157770 added token-usage configuration for plugins, and #158296 added the `asinccontext` plugin for background context compression.
*   **Provider Integration:** PR #107755 integrated mittwald AI Hosting as a first-class provider (EU/German data centers).
*   **Infrastructure & Bugfixes:** PR #159955 resolved a deployment issue where the docs site and plugin catalog required manual re-runs to go live; #159081 fixed a worker wedge issue on Windows; and #155545 implemented password redaction in DB URL query strings.
*   **Voice & Gateway:** PR #136326 added explicit Codex subscription auth for native GPT-Live, and #159957 fixed bot turn author handling in the gateway silence verdict.

### 4. Community Hot Topics
The most discussed issues today reflect user concerns around stability, Docker operations, and feature gaps:
*   **Docker Stability Crisis:** Issue #159960 is the most critical operational bug, reporting a restart loop after image upgrades due to a permission clash between root-owned `install.lock` and uid 10000. This has caused 382 restarts in 3.6 hours.
*   **Linux Desktop Crash:** Issue #132670 reports a SIGTRAP crash on Linux when `hermes update` rewrites files under the running process.
*   **Feature Gaps:** Several feature proposals were created today, including #159958 (Feishu native thinking process) and #159950 (Plugin terminal/chrome status bar support), highlighting the need for better multi-platform and plugin integration.
*   **Billing/Quota Handling:** Issues #159948 and #159947 reveal classification bugs where rate-limits and fallback models are misclassified as billing errors, leading to skipped retries and unexpected charges.

### 5. Bugs & Stability
*   **Critical:** Issue #159960 ([Docker] Restart loop after image upgrade) is the highest severity bug reported today, causing service unavailability.
*   **High:** Issue #132670 (Linux SIGTRAP crash during update) and Issue #159942 (Desktop isolated backend losing store ownership) represent significant stability regressions affecting the desktop experience.
*   **Fixed:** PRs #159081 (Windows worker wedge) and #155545 (DB URL redaction) were merged today, resolving specific but important stability and security edge cases.

### 6. Feature Requests & Roadmap Signals
The volume of feature PRs and issues today suggests a push toward **modularity and multi-provider support**.
*   **Plugin Maturity:** The addition of token-usage analytics (#157770) and background compression (#158296) indicates a focus on making the plugin system more robust and observable.
*   **Provider Expansion:** The integration of mittwald AI Hosting and the request for Feishu integration (#159958) show an effort to diversify supported platforms beyond the major US-hosted APIs.
*   **Telepresence:** The "hand a $<profile> message to that profile's session" PR (#159794) signals work on multiplexed gateway profiles, likely paving the way for specialized AI personas (e.g., the smart glasses use case mentioned in #159959).

### 7. User Feedback Summary
Users are experiencing a mix of frustration and anticipation.
*   **Docker Users:** Report severe instability and "breakage" during routine updates (#159960), suggesting a need for safer file-replacement strategies or better process handling in the updater.
*   **Linux Desktop Users:** Face frequent crashes (#132670) and UI bugs during edit-and-resend workflows (#130629), indicating Electron/main process synchronization issues.
*   **Plugin Developers:** Face limitations in terminal visibility and profile multiplexing (#159950, #159959), wanting more control over how their tools are presented to the user.

### 8. Backlog Watch
*   **#143379 (RFC: Doc-Chain Substrate's Network):** An important architectural RFC with 53 comments. It proposes a durable record/provenance system for agent memory. Despite being open since October 23, it has not seen a definitive "merge" or closure, suggesting it is a major design decision requiring maintainer consensus.
*   **#159955 (Docs/Plugin Catalog Auto-deploy):** While merged today, this was a "blocker" PR that prevented other features from being visible to the community. Its resolution is a positive sign for the project's CI/CD health.
*   **#159942 (Desktop Backend Store Ownership):** A critical bug where new sessions lack "frozen-policy receipts," rendering them unable to resume properly. This requires maintainer attention to resolve the store contention logic.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Generated on:** 2026-11-25
**Repository:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

## 1. Today's Overview
PicoClaw shows moderate activity with a focus on configuration stability and incremental feature additions. The project merged 5 pull requests today, primarily addressing configuration defaults and provider integration bugs. However, a critical regression in the QQ channel authentication was identified in the last 24 hours, indicating ongoing dependency management challenges. The overall health appears stable, with maintenance activity outweighing new feature development.

## 2. Releases
No new releases were published today. The latest release history remains at the most recent tagged version. Users are advised to monitor the repository for the next release candidate, which is likely to include the configuration fixes merged in today's PR cycle.

## 3. Project Progress
Today’s merged PRs (#957, #1546, #423, #3466, #3463) collectively advanced the project in three key areas:
*   **Configuration Stability:** PR #957 resolved a critical bug where omitting `api_base` in user configurations caused 401 authentication errors by preventing default values from overriding user intent.
*   **Provider Integration:** PR #3466 and #3463 improved the Perplexity search provider and skill installation robustness, respectively.
*   **Multi-Agent Architecture:** PR #423 continues the work on a base multi-agent collaboration framework, building on previous protocol refactors.

## 4. Community Hot Topics
The most significant community issue is **#3472**, opened on 2026-11-23 and updated yesterday. It reports a "QQ channel error 11241" caused by a dependency regression where `botgo v0.2.1` expects `resty v2.6.0`, but the current setup uses `resty v2.17.1`. With 3 comments, this is the most discussed item, highlighting a compatibility headache between pinned dependencies and upstream library updates. The most active PR is **#957**, merged today, which directly addressed a user configuration pain point regarding `api_base`.

## 5. Bugs & Stability
*   **Critical Regression:** Issue #3472 represents a regression in the QQ channel functionality. The error "Authorization header format error" stems from a version mismatch in the `resty` HTTP client library. A fix PR is not yet open, but the issue is actively discussed.
*   **Resolved Stability Issue:** PR #957 merged today directly fixes a stability bug related to token expiry and `api_base` configuration, preventing unauthorized errors for users with partial configs.

## 6. Feature Requests & Roadmap Signals
The merged PR #423 signals an ongoing effort to build a "base multi-agent collaboration framework." This includes a shared "Blackboard" context pool and agent handoff tools. This suggests the roadmap is shifting toward orchestrating multiple agents rather than just adding individual provider integrations. Users requesting more complex workflow automation will find this the most relevant development direction.

## 7. User Feedback Summary
User feedback, as evidenced by PR #957, centers on configuration transparency. Users with partial configurations (providing only `model_name` and `api_key`) were previously frustrated by opaque 401 errors caused by automatic `api_base` inheritance. The merge of #957 indicates the maintainers are prioritizing "sensible defaults" that respect user intent, aiming to reduce the "it just works" friction for new adoptees.

## 8. Backlog Watch
*   **#3472 (QQ Channel Regression):** Requires immediate maintainer attention to either pin the `resty` version or update `botgo` compatibility.
*   **#423 (Multi-Agent Framework):** This WIP PR has been open since February 2026. While merged partially today, the "base" nature suggests the core collaboration features are still in early development and may need maintainer guidance to move from "WIP" to a stable alpha/beta.
*   **#680 (Reference for #957):** Though closed, the underlying issue regarding `api_base` inheritance remains a frequent source of user confusion, warranting documentation updates alongside the code fix.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-11-25

## 1. Today's Overview
Nanoclaw continues its active development cycle with robust community engagement, reporting **25 PR merges/closures** and **5 new bug reports** in the last 24 hours. The project shows strong maintenance velocity, driven primarily by automated dependency bots and targeted fixes from core contributors like glifocat. While no new releases were published today, the volume of PR activity indicates a focused effort on stabilizing the platform ahead of the upcoming v2026.11.0 release cycle.

## 2. Releases
No new releases were published today. The latest tagged version remains **v2026.10.0** (commit 7203e00d). Development activity is currently centered on the `main` branch and release candidates, with image hardening updates (v2026.11.0-*) being the primary delivery mechanism for new features and fixes.

## 3. Project Progress
A significant **25 PRs** were processed in the last day, reflecting a highly active merge pipeline. Key advancements include:
*   **Dependency Bumps:** `@clack/core` and `@clack/prompts` were updated to 1.6.0/1.9.0 (PR #4557), alongside `@anthropic-ai/sdk` and `@anthropic-ai/claude-agent-sdk` updates.
*   **Infrastructure & Images:** Agent images were refreshed to hardened versions (`v2026.11.0-20261124T1354` and `T1731`), ensuring the latest security postures are deployed.
*   **Bug Fixes:** Critical fixes landed for GPG signing issues during updates (PR #4567) and for accepting numeric signal codes from `@types/bun` 1.4 (PR #4562).

## 4. Community Hot Topics
The most discussed items center on **dependency compatibility** and **interoperability**:
*   **@types/bun 1.4.4 Breakage (Issue #4563 & PR #4562):** The container typecheck fails with the latest `@types/bun`. PR #4562 is the direct fix, accepting the numeric `signalCode` type change.
*   **Channel Package Drift (Issue #4552):** A persistent concern where the `channels` `package.json` can drift from the versions pinned by skills, with no automated check catching the discrepancy. PR #4559 aims to add a CI check for this, though it depends on the pending fix in PR #4560.
*   **Teams Threading (PR #4565):** A feature to make the Teams bot reply in threads during 1:1 chats, addressing a specific platform quirk.

## 5. Bugs & Stability
Five new bugs were reported in the last 24 hours, all classified as `[kind/bug]`:
1.  **Silent Chat Turns (Issue #4564):** A chat turn ending with no answer results in silence (no reply/nudge). PR #4568 addresses this by ensuring a nudge is sent when an empty result is detected.
2.  **GPG Signing Failure (Issue #4566):** Update fails at prepare when `tag.gpgsign` is enabled. PR #4567 provides the fix by disabling GPG signing for the backup tag.
3.  **Idle Container Responsiveness (Issue #4558):** Messages sent right after the 30-minute idle limit receive no reply and are marked completed.
4.  **TypeScript/Types Failures:** Issues #4563 and #4562 relate to the `@types/bun` 1.4.4 update blocking container type checks.

## 6. Feature Requests & Roadmap Signals
Feature development is intertwined with bug fixing. Notable signals include:
*   **Pi Agent Provider (PR #4129):** A feature request to add a "pi agent provider" (/add-pi payload skill), indicating interest in integrating new AI personas or providers.
*   **Resend/Pino Pinning (PR #4560):** While a bug fix for version alignment, it signals the roadmap's focus on ensuring channel adapters remain compatible with skill definitions.

## 7. User Feedback Summary
User feedback today highlights two primary pain points:
*   **Reliability during Idle Periods:** Users report that agents become unresponsive or "silent" after periods of container idleness (Issue #4558), requiring a nudge or message retry to continue.
*   **Update Pipeline Fragility:** The GPG signing issue (Issue #4566) creates blockers for maintaining updated installations on Linux systems with strict git configurations, disrupting the update workflow.

## 8. Backlog Watch
Several important items require maintainer triage or merge decisions:
*   **PR #4559 (CI hardening for channels pins):** Open since today; this is a critical infrastructure check that must be merged after PR #4560 lands to prevent skills and channels from falling out of version sync.
*   **Issue #4552 (Channels package drift):** Open since yesterday; the lack of a validation check means skills and channels can silently diverge in dependency versions.
*   **PR #4129 (Pi Agent Provider):** Open since October 19th; this feature has been in the backlog for over a month without a merge, suggesting it may need a maintainer review or re-prioritization.

**Project Health:** High activity, strong fix velocity, and active dependency management. The main risk area is the synchronization between the `channels` branch and `main` skill pins, which the team is actively addressing via PR #4559/4560.

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
**Date:** 2026-11-25
**Project:** LobsterAI (github.com/netease-youdao/LobsterAI)

## 1. Today's Overview
LobsterAI experienced a highly active development day on 2026-11-25, with 16 merged/closed pull requests and zero open issues or new releases. The project momentum is strongly focused on desktop session handling (DSH), artifact management, and user interface polish. No new issues were reported in the last 24 hours, indicating the team is actively processing the backlog of merged changes. The absence of new releases suggests the project is in a stabilization phase following a burst of feature development.

## 2. Releases
No new releases were published today. The latest activity consists entirely of internal merges and bug fixes. Users should expect the current build to incorporate all changes from the 16 merged PRs listed below.

## 3. Project Progress
A significant wave of 16 PRs was merged today, spanning core DSH stability, artifact features, and UI refinements. Key areas of advancement include:
*   **DSH Collaboration & Migration:** PRs #3187, #3182, and #3177 focus on preserving agent collaboration allowlists across downgrades, WeChat authorization, and fixing desktop migration regressions.
*   **Artifact Ecosystem:** PRs #3186, #3185, #3181, and #3173 enhance the artifact system with isolated word panels, data privacy tab splits, new-tab office documents, and linked artifact recovery.
*   **UI/UX Polish:** PRs #3184, #3180, #3179, and #3175 refine the update card, skin designer, task management, and home showcase hub.
*   **Authentication & Credits:** PR #3176 adds a home credits badge and lightweight refresh mechanism.

## 4. Community Hot Topics
The most significant activity today is reflected in the merged PRs, as there were no open issues or comments. The "hot topics" are the features recently merged to address user pain points:
*   **Agent Collaboration Stability (#3187):** High demand for preserving settings across app updates/downgrades.
*   **WeChat Integration Persistence (#3182):** Critical for users relying on bound bots, preventing the need to re-scan QR codes after upgrades.
*   **Artifact Usability (#3181, #3186):** Adding blank office docs, inline rename, and isolated word panels indicates a push to make artifacts a first-class workspace.

## 5. Bugs & Stability
Bug fixes dominated today's merges, with several addressing desktop migration and session state issues:
*   **Critical:** PR #3182 fixes the loss of WeChat bot credentials during OpenClaw-to-DSH upgrades, a regression that broke bot functionality.
*   **Moderate:** PR #3177 disables manual backup/import controls to prevent user error during migration and restores sent message editing.
*   **Low/Visual:** PRs #3184 and #3174 focus on styling updates and log forwarding, improving debuggability and visual consistency rather than fixing crashes.
*   *Note:* No new bugs were reported today; all addressed issues were pre-existing or regression-related from recent development.

## 6. Feature Requests & Roadmap Signals
While no feature requests were opened today, the merged PRs reveal the current roadmap direction:
*   **Workspace & Productivity:** The concentration on "Artifacts" (#3186, #3181, #3180) suggests a roadmap focus on turning LobsterAI into a collaborative document/workspace editor, competing with tools like Claude Artifacts or ChatGPT.
*   **DSH as a Platform:** The addition of host tools like `lobsterai_render_html_to_image` (#3183) and diagnostic forwarding (#3174) indicates LobsterAI is positioning DSH (Desktop Session Handler) as a extensible platform for agents, not just a chat UI.
*   **AI Skin Customization:** PR #3180's "direct image reuse" feature hints at a roadmap for deeper AI-driven design customization.

## 7. User Feedback Summary
User feedback, as evidenced by the merged PRs, centers on **reliability during updates** and **workspace productivity**.
*   **Reliability:** The high priority given to PRs #3182 and #3177 shows users are frustrated by losing configurations (WeChat logins, message history, backup controls) when the app updates or migrates.
*   **Productivity:** The shift toward artifact and office document features (#3181, #3186) indicates users want LobsterAI for actual content creation and file management, not just conversation.
*   **Satisfaction:** The lack of new issues suggests the current user base is relatively satisfied or has gone silent; the merged PRs represent the team's response to known pain points.

## 8. Backlog Watch
Given that all 16 PRs were merged and closed today with zero open issues, there are no long-unanswered items currently flagged in the tracker. However, maintainers should watch for:
*   **Post-Migration Stability:** While #3177 and #3182 address migration, the team should monitor for new regressions as users update to the version containing these fixes.
*   **DSH Tool Ecosystem:** The new tools in #3183 and #3174 may generate new usage patterns; maintainers should ensure documentation keeps pace with these "hidden" features.

---
**Data Source:** GitHub API analysis of `netease-youdao/LobsterAI` on 2026-11-25.
**Total Merged PRs Today:** 16
**Total Open Issues:** 0

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (QwenPaw) for 2026-11-25.

### 1. Today's Overview
CoPaw continues its rapid development cycle with **21 issues and 40 PRs** updated in the last 24 hours, indicating high maintainer activity. The project is currently in a beta phase (v2.3.1-beta.1), with a focus on stabilizing the console UI, fixing provider discovery edge cases, and enhancing the Creator/Tool use experience. Despite the high volume of changes, the closed-to-open issue ratio (5:16) suggests a backlog of bug fixes is being actively addressed alongside new feature development.

### 2. Releases
**No new stable releases were published today.** The most recent release is the beta v2.3.1-beta.1 (published 2026-11-23). This beta focuses on review recovery and media fixes for the Creator module. No breaking changes or migration notes are required for existing users beyond upgrading to the latest beta for the latest bug fixes.

### 3. Project Progress
**40 PRs** were updated today, reflecting aggressive development velocity. Key merged/closed advancements include:
*   **Creator Stability:** PR #8886 released v2.0.7, implementing rejection recovery and media fixes.
*   **Infrastructure:** PR #8586 unified session configuration for ACP and native execution, resolving configuration drift.
*   **Frontend Polish:** Several UI/UX PRs closed, including #8896 (skill pool auto-sync tests) and #8897 (Windows path prefix fixes in storage migration).
*   **Tooling:** PR #8100 resolved media capability mismatches at runtime, improving reliability for tool-use agents.

### 4. Community Hot Topics
*   **#8891 & #8890 (Open, 3 & 2 comments):** Two critical provider discovery bugs. #8891 reports that the static context table lacks entries for `glm-5.3`/`glm-5.4`, forcing these recent models to fall back to a 128k default context window. #8890 mirrors this for custom OpenAI-compatible providers. These issues highlight a need for dynamic, model-aware context sizing.
*   **#6274 (Open, 4 comments):** The most discussed feature request, proposing a new `ask_user_question` tool for Human-in-the-Loop (HITL) scenarios. This indicates strong user demand for safer agent orchestration when handling high-risk or ambiguous requests.
*   **#8892 (Open, 2 comments):** Request for an "AI Prompt Polishing" button to refine user inputs, reflecting a desire for lower-barrier prompt engineering assistance within the console.

### 5. Bugs & Stability
Today saw a surge in bug reports (16 open, 5 closed), primarily focused on **Console rendering** and **Provider integration**:
*   **Critical Rendering Bugs:** #8888 ( transcript jumping on content shrink), #8887 (media data blocks causing 400 errors on non-multimodal models), and #8856 (table/long line overflow cutting off without scrollbar) all impact the core user experience of the Web Console. #8856 specifically notes the missing `overflow-x-auto` CSS class.
*   **Provider/Stream Errors:** #8877 describes a status-less model overload issue where an SSE error bypasses retry mechanisms, and #8890/#8891 address model discovery context window inaccuracies.
*   **Fixes exist:** PR #8886 and #8487 address some of the media and scrolling issues, respectively.

### 6. Feature Requests & Roadmap Signals
The feature request pipeline is active and diverse:
*   **HITL & Safety:** #6274 (ask_user_question tool) is the top signal. If implemented, it would be a major step toward responsible AI deployment in CoPaw.
*   **Prompt Optimization:** #8892 (AI Prompt Polishing) suggests a focus on "usability" features that reduce the friction of prompt writing.
*   **Provider Parity:** The numerous issues regarding `glm` models and context tables (#8891, #8890) suggest the roadmap needs to prioritize keeping the model catalog synchronized with the latest LLM releases.

### 7. User Feedback Summary
Users are experiencing a mix of **high functionality but rough edges**:
*   **Satisfaction:** The introduction of the "Creation Assistant" and new tooling features (like MCP integration) is valued.
*   **Dissatisfaction:** The most prominent pain points are **Console UI glitches** (overflow, transcript jumping) and **model configuration gaps** (missing glm support, import map bugs in #8851). The "Creator" mode lag issue (#8706) from earlier in the month still appears in the recent update stream, indicating persistent frontend performance regressions as conversation history grows.

### 8. Backlog Watch
*   **#8851 (Open):** The "import map remaps entry chunk" bug is critical for plugin developers. It causes plugins to fail to register routes, effectively breaking custom console extensions. This requires immediate maintainer attention.
*   **#8881 & #8882 (Open):** These "Design" issues address memory isolation and archival. They are high-level architectural debts; if not resolved, they could lead to memory leaks or data isolation failures in multi-tenant or long-running deployments.
*   **#8875 (Open):** The MCP streamable_http client masking 4xx errors as "not connected" is a reliability risk for users integrating external tools, warranting a fix in a future service patch.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

### ZeroClaw Project Digest - 2026-11-25

#### 1. Today's Overview
ZeroClaw exhibits high development velocity with 50 PRs updated in the last 24 hours, indicating an active merge cycle. The project is currently in a release cycle leading toward v0.9.1, with the core OIDC stack recently shipped in v0.9.0. A significant portion of today’s activity focuses on infrastructure stabilization, provider integrations, and preparatory work for the upcoming release, suggesting a mature and well-organized development pipeline.

#### 2. Releases
No new releases were published today. The most recent version remains **v0.9.0**, released on 2026-11-12. This release marked the merger of the core OIDC stack and dashboard sign-in. The project is now tracking close-out items for v0.9.1, focusing on OIDC milestones and domain-specific security enhancements.

#### 3. Project Progress
Today saw a massive merge surge of 8 PRs, spanning critical infrastructure and feature implementation. Highlights include the standardization of `nextest` installation across CI workflows (#12688), the addition of the `bf16.ai` model provider (#12696), and the integration of DeepSeek as a web search provider (#12692). Furthermore, PRs #12701 and #11762 address long-standing channel and email routing issues, specifically ensuring API keys are retained during model selection and that live email is properly marked as seen in active mode.

#### 4. Community Hot Topics
The most discussed issues today are primarily new tracker items added on 2026-11-25. Issue #12707 ([Tracker]: Daemon-held OIDC refresh grants for device sessions) and #12709 ([Feature]: Add native local Turso as an opt-in memory backend) have been freshly created and already attract significant architectural interest. On the PR side, #12596 (browser grant scoping) and #12453 (web canonical registry editing) remain highly active, reflecting community demand for fine-grained access control and model management.

#### 5. Bugs & Stability
Seven open issues were updated today, with several focusing on stability and degraded behavior. A critical bug (#12055) reports that the MCP HTTP client lacks pool/keep-alive control, leading to stale sockets and "outcome-unknown" tool call failures. Two email channel bugs (#11760 and #12703) are linked, both concerning the `\Seen` flag not being set on processed messages, causing the backlog to be re-answered on every restart. Additionally, #12710 highlights a CI failure in the `Containerfile` `check` stage. Severity ranges from S2 (degraded behavior) to high-risk OIDC trackers.

#### 6. Feature Requests & Roadmap Signals
Feature activity is dominated by provider and tool expansions. The addition of `bf16.ai` and DeepSeek search providers (#12696, #12692) signals an ongoing effort to diversify LLM and search capabilities. PR #12316 introduces **SimpleX** messaging, voice notes, and encrypted calls, representing a major new communication channel. The removal of the `gemini_cli` coding tool (#12678) due to Google's policy change is also a notable roadmap adjustment. The push toward a canonical V5 registry (#12450, #12457) indicates a roadmap shift toward modular, nested model bindings.

#### 7. User Feedback Summary
User feedback today centers on reliability and integration stability. The most prominent pain point is the email channel's failure to mark messages as seen (#11760, #12703), which disrupts active-mode workflows and causes email duplication. Infrastructure developers are focused on the MCP HTTP client's connection pooling issues (#12055) to prevent tool call failures. There is also a clear demand for better model routing and API key management, as evidenced by the numerous PRs addressing provider registries and browser grants.

#### 8. Backlog Watch
Several important items require maintainer attention. Issue #8289, the OIDC milestone tracker, remains open despite the v0.9.0 merge, serving as a close-out tracker for canonical principals. Issue #12710, regarding the `Containerfile` `check` stage failing in the StageX image, is a blocking CI blocker that needs resolution. Furthermore, PR #12453 (web canonical registry editing) and #12596 (browser grant scoping) are stacked dependencies that are blocking other merges and require reviewer action to unblock the feature pipeline.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*