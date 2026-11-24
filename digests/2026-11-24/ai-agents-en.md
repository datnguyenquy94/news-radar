# OpenClaw Ecosystem Digest 2026-11-24

> Issues: 169 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-24 09:33 UTC

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

# OpenClaw Project Digest
**Date:** 2026-11-24

## 1. Today's Overview
OpenClaw maintains intense development velocity with **500 PRs** and **169 issues** updated in the last 24 hours. The project ships **two new beta releases** today (v2026.11.10-beta.2 and .3), focusing on recovery reliability and background work preservation. Despite high merge volume (205 PRs closed), critical bugs and session-state regressions dominate the open issue count, suggesting a period of active stabilization following recent feature expansions.

## 2. Releases
**Two new beta releases published today:**

- **v2026.11.10-beta.3:** Highlights "Update recovery" enhancements keeping interrupted package and source updates recoverable across schema changes or machine restarts. (#200273, #200366, #200460, #200866, #200994, #201600)

- **v2026.11.10-beta.2:** Focuses on "Reliable delegated work" — preserving finished background commands and ensuring OpenClaw remains runnable when package replacement is interrupted, allowing safe continuation after crashes or reboots. (#200273, #200366, #200460, #200550, #200994)

Both releases are **beta quality** with no explicit breaking-change notes, indicating incremental stabilization rather than major architectural shifts.

## 3. Project Progress
**500 PRs updated** in the last day, with **205 merged/closed**. Key merged PRs include:
- `#204534`: Revert of "fix: let finished background commands reach the agent before an active goal advances" — addressing incognito chat result loss
- `#204502`: Fix keeping Gateway available after failed PostgreSQL updates (#204363)
- `#204544`: Stopping run-end transcript reads once Gateway drains/closes
- `#201919`: Fix dropping compaction that finishes after abort
- `#201918`: Fix rejecting blank compaction summaries

The merge rate suggests active maintenance, though the high volume of open issues (169) indicates significant backlog pressure.

## 4. Community Hot Topics
**Most active issues by comment count:**
- **#143017** (19 comments): Prompt-cache persistent session prefix rewrites — production data showing 21.3M cache-write tokens measured
- **#158127** (16 comments): Multi-agent runtime publication failures and Codex startup timeouts after 2026.9.6 upgrade
- **#138366** (14 comments): Feature request for memory slot owner to drive Dreams page
- **#136271** (13 comments): msteams dynamic SharePoint site resolution for channel file uploads
- **#92473** (12 comments): Model fallback notice leaking to external user-facing channels

**Top PRs:**
- `#204534`: Revert on background command delivery to incognito chats
- `#204520`: Feature for explicitly approved fast-track releases
- `#204548`: Test coverage for update continuation after maintenance

## 5. Bugs & Stability
**Critical bugs reported today:**
- **#204421** (P1, 2 comments): Windows update rolls back at activation when Gateway restarted mid-update; process census unavailable on win32
- **#203979** (P1, 2 comments): 2026.11.6 Telegram DM lane blocked up to 24h — cancelled pending input causes idempotency key conflicts on every redelivery
- **#204387** (Closed, 2 comments): Embedded runtime image handoff failure on later turns
- **#204386** (Closed, 2 comments): Native video never reaches Gemini — `PROVIDER_CONTEXT_HANDOFF` defined twice
- **#203956** (P2, 2 comments): Session observer disables itself with Haiku model — model echoes `previousDigest.revision` rejected by strict schema

**Fix PRs identified:** `#204502` addresses PostgreSQL update crash; `#204544` handles transcript read protection during Gateway drain.

## 6. Feature Requests & Roadmap Signals
**Active feature directions:**
- **A2A protocol v1.0 conformance** (#179382, #196980, #196906, #196903, #194725): Peer task clarification, cancellation, and streaming progress
- **MCP event consumption** (#166586): Subscribing to MCP server events to start agent runs
- **Memory plugin dreaming provider** (#138366): Letting memory slot owners drive Dreams page UI
- **Teams dynamic SharePoint resolution** (#136271): Automatic team site detection for file uploads

Predicted near-term focus: A2A protocol completion and MCP integration, given the volume of channel-specific PRs.

## 7. User Feedback Summary
**Real pain points from today's data:**
- **Session state loss:** Telegram DMs blocked 24h due to idempotency key conflicts (#203979); Discord provider initialization failures after upgrade (#204283)
- **Gateway reliability:** PostgreSQL migration crashes causing full rollback (#204421, #204502); `gateway restart` false failures with hardcoded 60s budget (#161158)
- **Model/providers:** Windows cmd.exe wrapper blocking auto-review and allowlists (#157930); video/audio delivery failures to Gemini/Ollama (#204386, #178805)
- **UI/UX:** Control UI CPU lockup from `Element.getAnimations()` loop (#196820); macOS app memory false positives on first message (#200340)
- **Onboarding:** Empty agent name silently creating "main" agent (#204454); classic setup skipping unconfigured models (#204533)

Satisfaction patterns show strong activity in recovery and stability work, but significant friction in cross-platform (Windows/macOS) and channel-specific integrations.

## 8. Backlog Watch
**Long-unanswered important issues needing maintainer attention:**
- **#143017** (19 comments, Sept 9): Prompt-cache token metrics — needs live reproduction validation
- **#158127** (16 comments, Sept 25): Multi-agent publication failures — requires diagnosis on 2026.9.6+
- **#161158** (12 comments, Sept 29): Gateway restart 60s readiness budget — not configurable, causes false failures
- **#130257** (11 comments, Aug 26): Tasks ledger token/cost attribution for delegated ACP runs
- **#55792** (10 comments, Mar 27): Catching up on missed inbound messages after gateway restart

**Critical PRs needing review:**
- `#204534`: Revert on background command delivery — blocking incognito chat functionality
- `#204502`: Gateway availability after PostgreSQL updates — user-impactful data migration fix
- `#203861`: Bounded output capture refactor — shared command capture logic

*Digest generated from GitHub data snapshot at 2026-11-24. Project health assessment: High activity, active stabilization phase with significant bug surface area alongside feature development.*

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: Personal AI Agent & Assistant Open-Source Landscape (2026-11-24)

### 1. Ecosystem Overview
The personal AI agent and assistant open-source ecosystem (2026-11-24) exhibits a bimodal distribution of development velocity. A core of active, rapidly evolving projects—led by OpenClaw and Hermes Agent—drives intense feature development, protocol standardization (A2A/MCP), and infrastructure stabilization. Surrounding this core is a long tail of specialized, maintenance-focused projects (e.g., ZeptoClaw, PicoClaw, NullClaw) characterized by minimal recent activity and a reliance on automated dependency management. The landscape is currently transitioning from aggressive feature expansion toward reliability and cross-platform compatibility, with significant effort directed at resolving session-state regressions and configuration persistence bugs following recent architectural migrations (e.g., DSH in LobsterAI).

### 2. Activity Comparison

| Project | Issues (Open/Updated) | PRs (Open/Merged) | Release Status | Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 169 / 500 (24h) | 102 / 205 (24h) | 2 Beta (v2026.11.10-beta.x) | ⭐⭐⭐⭐⭐ (High Activity) |
| **Hermes Agent** | 6 / 50 (24h) | 0 / 50 (24h) | 2 (v0.23.4 Stable, Canary) | ⭐⭐⭐⭐ (High Velocity, Instability) |
| **LobsterAI** | 1 / 14 (24h) | 14 / 0 (24h) | None (Current Cycle) | ⭐⭐⭐⭐ (Rapid Migration) |
| **ZeroClaw** | 5 / 50 (24h) | 0 / 7 (24h) | None (Current V4) | ⭐⭐⭐ (Active Refactoring) |
| **NanoBot** | 3 / 52 (24h) | 1 / 43 (24h) | None (Current Build) | ⭐⭐⭐ (UI Polish) |
| **NullClaw** | 0 / 0 (24h) | 0 / 2 (24h) | None | ⭐⭐ (Maintenance) |
| **PicoClaw** | 0 / 5 (24h) | 0 / 5 (24h) | None | ⭐⭐ (Consolidation) |
| **ZeptoClaw** | 0 / 0 (24h) | 0 / 2 (24h) | None | ⭐⭐ (Dependency Maint.) |
| **ZeRO/Claw** (etc.) | N/A | N/A | N/A | N/A |

*Health Score is a qualitative assessment based on merge velocity, issue resolution rate, and release stability.

### 3. OpenClaw's Position
OpenClaw serves as the **core reference** and de facto platform anchor for the ecosystem. Its advantages over peers include:
*   **Technical Approach:** A monolithic, feature-rich architecture with intense development velocity (500 PRs/24h), positioning it as a "batteries-included" framework compared to the more modular or specialized focus of NanoBot, PicoClaw, or NullClaw.
*   **Community Size:** Significantly larger contributor base and issue volume than any other project, indicating broader adoption and a more diverse user ecosystem.
*   **Strategic Role:** While projects like Hermes Agent and ZeroClaw focus on specific stability or refactoring goals, OpenClaw drives the highest volume of cross-cutting changes (A2A protocol, MCP event consumption, recovery reliability), making it the primary integration target for the wider ecosystem.

### 4. Shared Technical Focus Areas
Across the ecosystem, several critical requirements emerge, though implementation varies by project:
*   **Session State & Recovery:** OpenClaw, Hermes Agent, and ZeroClaw all prioritize recovery mechanisms. OpenClaw focuses on "background work preservation" and schema-change recovery; Hermes Agent addresses session wedging post-gateway restart; ZeroClaw implements retry logic for announcements and path polling portability.
*   **Cross-Platform Stability:** Windows-specific bugs (OpenClaw #204421) and macOS installer failures (ZeroClaw #12575) are universal pain points. LobsterAI addresses DSH migration stability, while Hermes Agent works on config persistence freezes.
*   **Protocol Standardization:** A2A protocol v1.0 conformance is a primary driver for OpenClaw and Hermes Agent. MCP (Model-Controller-Protocol) integration is a key focus for Hermes Agent and NullClaw, specifically regarding server memory management and event consumption.
*   **Provider & Tool Integration:** Managing diverse LLM providers and tool wrappers is a cross-project concern. NullClaw fixes MCP refcounting; ZeroClaw centralizes capability contracts; LobsterAI migrates to DeepSeek Harness; OpenClaw manages model fallback notices.

### 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | LobsterAI | ZeroClaw | NanoBot |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Feature Focus** | Broad protocol conformance (A2A/MCP), recovery, feature expansion. | Session stability, credential pools, TUI/CLI polish. | DSH migration, WeCom/STOMP integration, UI polish. | ACP CLI modularization, provider refactoring, Docker reliability. | WebUI ergonomics, status command accuracy, Langfuse toggles. |
| **Target Users** | Power users, platform integrators, multi-agent system builders. | CLI power users, Docker/Store distributors, plugin ecosystem users. | Enterprise/team adoption, DeepSeek Harness migrants. | Developers building ACP-backed providers, runtime consumers. | End-users and power users of lightweight AI assistants. |
| **Technical Architecture** | Monolithic core with intense internal activity; heavy focus on schema and recovery. | Modular plugin architecture (REA, TUI); focused on edge-case resilience. | Transitioning from OpenClaw to DSH; renderer/UI focus. | Microservice-oriented (crates, CLI modules, RPC); heavy Rust/C dependency. | Lightweight WebUI; frontend-centric redesign (Workspace Top Bar). |

### 6. Community Momentum & Maturity
*   **Rapidly Iterating (High Velocity):** OpenClaw and Hermes Agent are in active stabilization phases following feature rushes. OpenClaw's "500 PRs" volume and Hermes Agent's "two releases in 48 hours" indicate aggressive iteration cycles.
*   **Stabilizing (Maintenance Mode):** The tail of projects—ZeptoClaw, PicoClaw, NullClaw—exhibit minimal activity, focusing on dependency bumps and minor bug fixes, indicating maturity and feature completeness.
*   **Transitioning (Migration):** LobsterAI is in a high-velocity transition phase, actively resolving "growing pains" from its OpenClaw-to-DSH migration, making it the most dynamically changing project outside the core leaders.

### 7. Trend Signals
*   **Reliability over Features:** The dominant trend across all active projects is the remediation of "last mile" bugs: session state loss, configuration persistence freezes, and cross-platform crashes. Value is shifting from novel AI capabilities to rock-solid session continuity and platform compatibility.
*   **Protocol Consolidation:** There is a clear industry move toward standardizing agent communication. The concurrent focus on A2A v1.0 conformance (OpenClaw, Hermes) and MCP integration (Hermes, NullClaw) suggests these are becoming the essential primitives for interoperable AI agent ecosystems.
*   **Modularity & Extensibility:** Projects are increasingly investing in modular architectures (ZeroClaw's crate splitting, NanoBot's app catalog unification, Hermes Agent's plugin management) to manage complexity and allow specialized extensions without forking entire codebases.
*   **Onboarding & UX Polish:** Despite technical depth, there is significant friction in onboarding (e.g., OpenClaw's empty agent name creating "main" agent, PicoClaw's classic setup skipping models). Decision-makers should prioritize projects with active UI/UX refactoring (LobsterAI, NanoBot) if reducing time-to-value is a priority.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

### **NanoBot Project Digest - 2026-11-24**

#### **1. Today's Overview**
NanoBot shows high recent development velocity with 52 PRs processed in the last 24 hours (9 open, 43 merged/closed), indicating an active maintenance cycle. The project closed 6 issues today, primarily focused on WebUI polish, bug fixes, and compliance features. While no new releases were published, the density of merged fixes suggests the project is stabilizing ahead of an anticipated version bump. Activity is healthy, with maintainers rapidly cycling through UI/UX improvements and backend stability patches.

*GitHub Repository: [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)*

#### **2. Releases**
No new releases were published today. The latest release cycle appears to be in a quiet period following the recent flurry of WebUI and provider integrations. Users should expect the current build to incorporate the merged PRs listed below.

#### **3. Project Progress**
The most significant progress today was in WebUI refinement and bug mitigation. Key merged PRs include:
*   **PR #6779**: Fixed `/status` context panel percentage matching, resolving the cumulative input token estimation bug (Issue #6774).
*   **PR #6777 & #6776**: Aligned triggered replies with ordinary replies and kept desktop action rows on a single line, improving the chat interface consistency.
*   **PR #6780**: Fixed session preservation of timezone offsets, preventing history backfill timer corruption.
*   **PR #6517**: Added session-scoped Langfuse tracing toggles, allowing users to pause tracing without removing credentials.

Other merged work focused on CI performance (PR #6684) and App catalog restructuring (PR #6700).

#### **4. Community Hot Topics**
The most active discussion centers on WebUI ergonomics and stability:
*   **Issue #6673** ([Open, 0 comments](https://github.com/HKUDS/nanobot/issues/6673)): Reports live buffer text separation from tool calls, a visual glitch affecting the "live" assistant experience.
*   **PR #6773** ([Open, undefined comments](https://github.com/HKUDS/nanobot/pull/6773)): Aims to deliver empty final replies as structured turn failures rather than English fallback text, improving reliability for edge-case model outputs.
*   **PR #6761** ([Open](https://github.com/HKUDS/nanobot/pull/6761)): A major frontend redesign introducing "Workspace Top Bar," "Live Pulse bar," and "Active Drawer" for multi-project session management.

#### **5. Bugs & Stability**
Six issues were updated today, with one currently open and active:
*   **Issue #6774** (Closed → Fixed via PR #6779): The `/status` command was cumulatively reporting `input_tokens` across all model requests in a turn when the estimator failed, potentially showing false budget exhaustion. PR #6779 fixes this by matching the context panel percentage to recorded per-request usage.
*   **Issue #6673** (Open): Live buffer text separation from tool calls (visual regression).
*   **Issue #6764** (Closed): WebUI dropping streamed answers after attachments in the same turn.
*   **Issue #6765** (Closed): Addition of `bf16.ai` as a built-in uncensored LLM gateway provider.

#### **6. Feature Requests & Roadmap Signals**
Several user-requested features were merged or are in advanced PR stages:
*   **Mission Control Redesign (PR #6761)**: Signals a move toward more powerful multi-project workflow management.
*   **App Catalog Unification (PR #6700)**: Merged recently, this unifies Tools, Skills, and Chat Platforms into a single, searchable interface.
*   **Langfuse Tracing Toggle (PR #6517)**: Provides granular control over observability, likely responding to user feedback on noise management.
*   **bf16.ai Provider (Issue #6765)**: Reflects demand for uncensored/alternative LLM gateways beyond the mainstream APIs.

#### **7. User Feedback Summary**
User feedback over the last 24 hours highlights a focus on **interface consistency** and **accurate resource reporting**.
*   **Pain Point**: The `/status` command's inaccurate context estimation (Issue #6774) was a significant reliability concern for power users managing token budgets.
*   **Satisfaction**: The WebUI refinements (aligning reply actions, toast notifications) are generally well-received improvements to daily driver stability.
*   **Dissatisfaction**: Visual glitches like Issue #6673 (live buffer separation) indicate ongoing polish needs in the real-time streaming pipeline.

#### **8. Backlog Watch**
*   **Issue #6673**: Open since Nov 15 with no comments. This visual bug in the live buffer requires maintainer triage to determine if it is a CSS/layout issue or a deeper streaming logic problem.
*   **PR #6761**: The "Mission Control" redesign is a substantial frontend change. While open, it represents the cutting edge of the project's UX roadmap and may need maintainer review for integration stability.
*   **Issue #6742**: A closed compliance feature request for `agent_fleet_compliance`. While closed, it indicates the project is exploring multi-agent fleet management and risk screening capabilities, a potential area for future expansion.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-11-24

---

## 1. Today's Overview
Hermes Agent exhibits a day characterized by **high velocity** with 50 PRs merged or closed and 6 issues updated, yet significant instability persists. The project shipped two releases (v0.23.4 stable and a canary build) within the last 48 hours, indicating an active development cycle. However, the issue tracker reveals persistent critical bugs—most notably a session wedging flaw and gateway configuration freezes—that contrast with the volume of merges. The community is highly active, with multiple P1/P2 bugs flagged today, suggesting a push toward stability ahead of the v0.24.0 release noted in the v0.23.4 release notes.

---

## 2. Releases
**Two new releases were published in the last 24 hours:**

- **v0.23.4** (Released Nov 23, 2026): A patch release rolling up ~229 PRs since v0.23.3. It delivers stable CLI installers, Docker images, Microsoft Store, and Hermes Cloud builds. The release notes indicate full curated notes ship with v0.24.0, suggesting this is a "final polish" window before a major version increment.
- **canary.20261124T064706Z-v0.23.3** (Released Nov 24, 2026): The latest canary build, typically containing bleeding-edge changes ahead of the next stable cycle.

**Breaking Changes / Migration:** The v0.23.4 release notes do not list explicit breaking changes, focusing instead on bug fixes and stability. Users upgrading from v0.23.3 should note the canary build may include newer, potentially less-tested features.

---

## 3. Project Progress
**Merged/Closed PRs Today (50 total):**
The merged PRs span critical infrastructure, bug fixes, and polish:
- **Session & Gateway Stability:** #159582 (persistence compression chain), #159513 (chat route rebinding), #159569 (ComfyUI timeout queue), #159575 (profile symlink import).
- **Credential & Auth Management:** #159580 (credential-pool model retention), #159516 (OAuth rotation fix), #116068 (Gemini dashboard keys).
- **TUI Gateway & CLI:** #159579/159578 (tui-gateway null dispatch & plugin failures), #159175 (cli parse relaunched dashboard).
- **Platform-Specific:** #37257/37128 (WeCom WebSocket resilient sends & routing fix).

A notable trend is the focus on **edge-case resilience**—compression chains, credential rotation, and symlink handling—suggesting the project is ironing out "last mile" reliability issues.

---

## 4. Community Hot Topics
The most active discussions today center on **reliability and configuration persistence**:

| Issue/PR | Type | Comments | Summary |
|---|---|---|---|
| **#159567** [OPEN] | bug/P2 | 3 | Gateway config freeze: sandbox settings (`terminal.docker_volumes`, etc.) require full gateway restart to take effect, killing live chats. |
| **#159539** [OPEN] | feature/P3 | 0 | Request to keep the REA MCP plugin updated with upstream releases; Hermes uses `rea-agents@6.7.0`. |
| **#159571** [OPEN] | bug/P2 | 0 | Console 'cron run' no longer silently resumes paused jobs, preventing accidental reactivation. |
| **#159469** [OPEN] | feature | 0 | Publish stable macOS DMG alias and downloads page on promotion (asset routing fix). |
| **#159574** [OPEN] | security/P2 | 0 | Single-line background output truncation bug; bot DM replies now arrive whole. |

**Underlying Needs:** The community is actively hunting for **configuration persistence** (#159567) and **plugin currency** (#159539). The high volume of P1/P2 bug fixes today indicates a push to stabilize the platform before the next major release, with maintainers responding quickly to critical path issues.

---

## 5. Bugs & Stability
**Bugs reported today (6 issues updated):**

| Issue | Severity | Status | Fix PR |
|---|---|---|---|
| **#157169** [OPEN] | P2 / High | Session FIFO permanently wedged after gateway restart; `unknown_execution` loops. | None identified yet; 3 comments. |
| **#159567** [OPEN] | P2 / High | Gateway freezes most config at startup; every settings change needs full restart. | None yet; 3 comments. |
| **#159539** [OPEN] | P3 / Low | REA MCP plugin outdated; missing tools vs OpenCode. | Feature request, no fix. |
| **#159569** [OPEN] | P2 / Medium | ComfyUI no longer queues workflow twice on timeout. | **#159569** (PR merged same day—fix exists). |
| **#159574** [OPEN] | P2 / Medium | Single-line background output truncated; bot DM replies arrive whole. | **#159574** (PR merged same day—fix exists). |

**Ranking by Severity:**
1. **#157169** & **#159567** (P2): Both cause **session lockup** or **configuration freeze**, preventing normal operation without restart. These are the most critical open bugs.
2. **#159569** & **#159574**: Medium severity; usability/QoL bugs that were **already fixed** via PRs merged today.
3. **#159539**: Low; a feature gap, not a stability issue.

---

## 6. Feature Requests & Roadmap Signals
**User-requested features visible today:**
- **#159539:** Keep REA MCP plugin updated with upstream releases. Hermes currently lags at `rea-agents@6.7.0`; OpenCode exposes more tools. This aligns with the project's pattern of plugin ecosystem management.
- **#86258** (Closed but relevant): Show owning profile in flat All Profiles recents—long-standing UX request.
- **#25618** (Closed): Multi-core CPU utilization for Gateway—a feature request from May 2026 still open, indicating potential roadmap gaps for performance scaling.

**Predictions for Next Version (v0.24.0):**
Given the "curated notes ship with v0.24.0" mention in v0.23.4, and the current focus on credential pools, session persistence, and symlink handling, v0.24.0 likely will include:
- Fixes for #157169 and #159567 (session wedging & config freeze).
- Improved credential-pool rotation logic.
- Possible TUI gateway UX refinements.
- Plugin ecosystem updates (REA MCP, Seltz).

---

## 7. User Feedback Summary
**Real user pain points & use cases:**
- **Session Stability:** Users report sessions becoming "permanently wedged" after gateway restarts (#157169), requiring manual intervention. This is a critical blocker for production deployments.
- **Config Persistence:** Profile sandbox settings (`terminal.docker_volumes`, etc.) are effectively read-only at runtime (#159567), forcing full restarts and disrupting live sessions. This suggests a gap between config *write* and *apply* logic.
- **Plugin Ecosystem:** Users comparing Hermes to OpenCode note missing REA tools (#159539), highlighting Hermes' dependency on an external REA version that may lag.
- **CLI & Dashboard:** Issues with cron job resumption (#159571) and dashboard argument parsing (#159175) indicate the CLI is a frequent touchpoint for power users, and edge cases in bootstrapping cause friction.

**Satisfaction/Dissatisfaction:** The rapid release cycle (two releases in 48h) suggests maintainers are responsive, but the concentration of P2 bugs on config and sessions may frustrate users who expect "it just works" after updating. The canary build's immediate appearance after v0.23.4 may signal either aggressive iteration or insufficient testing windows.

---

## 8. Backlog Watch
**Long-unanswered important Issues/PRs needing maintainer attention:**

| Item | Age | Priority | Note |
|---|---|---|---|
| **#157169** | 6 days (opened Nov 18) | P2 / High | Session wedging after gateway restart. 3 comments, no maintainer resolution yet. Critical for session continuity. |
| **#159567** | Today (opened/updated Nov 24) | P2 / High | Config freeze; requires full restart. Just filed, but high impact; maintainers may be already addressing given today's merge pace. |
| **#159539** | Today (opened Nov 24) | P3 / Low | REA MCP plugin update request. No comments yet; low priority but indicates ecosystem awareness. |
| **#37257** | ~175 days (opened Jun 2) | P2 / Medium | WeCom WebSocket resilient sends with auto-reconnect. Closed PR #37257 merged, but the issue remains open—possibly awaiting config or docs follow-up. |
| **#25618** | ~194 days (opened May 14) | P3 / Feature | Multi-core CPU utilization for Gateway. Created May 2026, no progress visible in recent activity. A roadmap item that may need explicit decision or closure. |

**Maintainer Attention Needed:** #157169 is the most urgent backlog item—6 days old, P2, and blocking core session functionality. #25618, open since May, represents a significant unaddressed performance feature for multi-core machines. Maintainers should triage these to prevent stagnation in the backlog.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Generated on:** 2026-11-24
**Source:** github.com/sipeed/picoclaw

## 1. Today's Overview
The PicoClaw project shows **minimal activity** for 2026-11-24, with no new issues, releases, or PRs opened in the last 24 hours. The five closed pull requests from the previous day represent typical maintenance and sync work, including a significant upstream merge (#2810) that brought ~1095 commits and restructured the agent loop and tooling architecture. Overall, the project is in a stable, low-activity state, with recent focus on architectural consolidation and CI cleanup rather than new feature development.

## 2. Releases
No new releases were published today. The latest release history is currently unavailable, and no version changes or migration notes are applicable for this reporting period.

## 3. Project Progress
**Five PRs were merged/closed** in the last 24 hours:
- **#2810**: Sync with upstream/main (1095 commits) + forward-port magicform customizations. This major merge updated the project to the latest upstream main branch, restructured the agent loop into `agent_*.go`, reorganized tools into `pkg/tools/{fs,integration}/`, and moved channel config. It also forward-portled 6 customization commits from the magicform fork.
- **#2363**: Fix WebSocket authentication and standardize header casing. A bugfix (mostly AI-generated) addressing authentication and header consistency in the channel domain.
- **#1546**: Merge of fixes from PRs #1480, #1479, #1478, #1473, and #1467.
- **#423**: Closure of the WIP multi-agent collaboration framework PR, which introduced a blackboard and shared context pool.
- **#2516**: Chore to disable the scheduled sync-rebase trigger in CI, keeping the workflow available for manual runs.

## 4. Community Hot Topics
The most activity today centered on **PR #2810** (1095 commits sync) and **PR #2363** (WebSocket authentication fix). #2810 indicates a strong drive to keep the project aligned with upstream developments and refactor the architecture for better maintainability. #2363 reflects ongoing concerns about connectivity and reliability in the channel layer. Both PRs have zero comments/reactions recorded, suggesting they were merged via maintainer approval or automated processes without extensive community discussion.

*   [PR #2810](https://github.com/sipeed/picoclaw/pull/2810): Sync with upstream/main (1095 commits) + forward-port magicform customizations
*   [PR #2363](https://github.com/sipeed/picoclaw/pull/2363): Fix WebSocket authentication and standardize header casing

## 5. Bugs & Stability
No new bugs or crashes were reported in the last 24 hours. The only bugfix merged was **#2363**, which fixed WebSocket authentication and header casing. With zero open issues currently, the project appears stable regarding reported defects. The closed #423 PR also touched on stability by introducing a thread-safe shared blackboard for multi-agent contexts, though it remains a WIP feature.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap signals emerged today. The closed **#423** PR hints at an ongoing effort to build a "base multi-agent collaboration framework with shared context pool, agent handoff, and discovery tools," building on previous provider protocol refactors. This suggests a roadmap toward more sophisticated multi-agent orchestration, but no immediate user-driven requests were visible in the recent activity.

## 7. User Feedback Summary
User feedback today is characterized by **maintenance and architectural updates** rather than feature demands or bug reports. The community appears focused on keeping the project synchronized with upstream changes (#2810) and fixing underlying infrastructure issues like WebSocket handling (#2363). The disabling of the scheduled CI sync (#2516) suggests a desire for more controlled, manual governance of the codebase integration flow. Overall satisfaction seems high regarding project stability, with activity shifting toward structural improvements.

## 8. Backlog Watch
Several previously active PRs and issues have been recently closed or updated:
- **#423** (WIP: multi-agent collaboration framework): Closed on 2026-11-23 after being open since 2026-02-18. This was a long-standing WIP that may need re-evaluation or resumption if the collaboration framework is a priority.
- **#2810** (upstream sync): Merged today, resolving the significant commit backlog.
- **#2354** (referenced by #2363): The underlying issue for the WebSocket auth fix, which may warrant a check if the fix fully resolves the reported problem.

**Project Health Indicators:**
- **Activity Level:** Low (0 new items in 24h)
- **Recent Merges:** 5 PRs, focused on sync, fixes, and CI cleanup
- **Open Issues:** 0
- **Open PRs:** 0
- **Release Status:** None recent

The project is currently in a maintenance consolidation phase, with recent effort directed toward upstream alignment and architectural cleanup.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

### NullClaw Project Digest
**Date:** 2026-11-24

#### 1. Today's Overview
The NullClaw project exhibits a state of minimal activity as it approaches the end of November 2026. With zero issues updated and no new releases in the last 24 hours, the project's core development appears to be in a maintenance or stabilization phase. The most significant activity comes from two open Pull Requests merged or active in the last day, focusing on Telegram markdown rendering and MCP server memory management. The lack of new issue creation suggests the community is currently engaged with existing features rather than reporting new bugs or requesting major changes.

#### 2. Releases
No new releases were published today. The project continues on its current version without a tagged release cycle update. Given the recent PR activity, a patch release incorporating these fixes may be pending maintainer approval.

#### 3. Project Progress
Two Pull Requests were updated in the last 24 hours, representing the primary development momentum for NullClaw:
*   **PR #1094** [OPEN]: A feature enhancement for the Telegram integration. This PR addresses the rendering of Markdown tables, ensuring they are output as monospace pre blocks rather than jumbled single lines. This improves the readability of tabular data sent to Telegram users.
*   **PR #1095** [OPEN]: A bug fix concerning the Model-Controller-Protocol (MCP) server. This PR resolves a refcounting issue where `applyToolCustomizations` was incorrectly deinitializing wrappers of disabled tools, potentially freeing the shared `McpServer` prematurely while other wrappers still depended on it.

#### 4. Community Hot Topics
The two open Pull Requests listed above are the current hot topics driving community interaction.
*   **#1094 (Telegram Markdown):** Users requiring complex data formatting via Telegram bots will benefit from this fix. The underlying need is for robust Markdown-to-HTML conversion that respects the structural integrity of tables, preventing the "jumbled line" issue common in Telegram's rendering engine.
*   **#1095 (MCP Refcounting):** This addresses a critical stability risk for developers building tool wrappers around MCP servers. The need here is for correct ownership semantics and memory management to prevent resource leaks or crashes when configuring tool customizations.

#### 5. Bugs & Stability
No new bugs or crashes were reported in the last 24 hours (0 issues updated). However, PR #1095 highlights a latent stability bug regarding MCP server lifecycle management. If merged, this fix will prevent the "double-free" or "use-after-free" scenarios that can occur when disabling tools dynamically. Currently, no crash reports exist, but the PR's summary indicates a risk of server instability for users employing tool customizations.

#### 6. Feature Requests & Roadmap Signals
While no new feature requests were opened today, the merged/active PRs signal the project's immediate roadmap directions:
*   **Telegram UX:** Improving the fidelity of Markdown rendering for end-users.
*   **MCP Reliability:** Ensuring the stability of server instances when toolsets are modified.
These indicate a focus on polish and reliability for existing integrations rather than introducing entirely new AI capabilities.

#### 7. User Feedback Summary
User feedback, as evidenced by the PR activity, centers on two pain points:
*   **Telegram Formatting:** Users sending structured data (tables) via Telegram bots experience broken formatting.
*   **MCP Tool Management:** Developers customizing tool sets face potential crashes or resource leaks when disabling/reenabling tools.
Overall satisfaction appears high enough that the community is actively contributing fixes for these edge cases, rather than abandoning the project.

#### 8. Backlog Watch
**#1094** and **#1095** are the critical items requiring maintainer attention. Both were created within the last 11 days and are currently open. Given the project's low issue velocity, these PRs represent the bulk of the current "backlog." Maintainers should prioritize reviewing these to unlock the stability and usability improvements they offer. Additionally, the absence of new issues since early November suggests the project may be waiting on these merges before further development proceeds.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

### 1. Today's Overview
LobsterAI exhibits high development velocity today, with 14 merged PRs and 1 new issue, indicating an active push toward stabilizing the DeepSeek Harness (DSH) migration and refining the user interface. The project is currently in a robust state, focusing on closing the gap between the OpenClaw and DSH architectures. However, the sole open issue highlights an emerging demand for enterprise-grade OAuth integration, signaling a shift toward broader organizational adoption.

### 2. Releases
No new releases were published today. The project remains on its current release cycle, with development focus directed entirely toward the continuous stream of closed-loop PRs and internal refinements.

### 3. Project Progress
A significant cluster of 14 PRs were merged today, primarily targeting the **DeepSeek Harness (DSH) migration** and **renderer/UI polish**. Key advancements include:
*   **DSH Stability & Migration:** PRs #3168 and #3169 addressed critical startup hangs and WeCom connectivity issues, resolving severe launch delays and messaging failures post-migration.
*   **Artifact & Context Management:** PRs #3173 and #3171 focused on recovering linked artifacts and preserving context controls, ensuring that long-running sessions remain functional and performant after the DSH upgrade.
*   **IM Integration:** PR #3160 introduced native POPO channel support for DSH, adding STOMP protocol capabilities and pairing functionality to improve direct messaging reliability.

### 4. Community Hot Topics
The most discussed item is **Issue #3163**, an OAuth integration request from the Baidu Love Query team. With 1 comment and 0 upvotes, it represents a strategic interest in opening the platform to enterprise users via secure, standards-based authentication (DCR).
*   **Link:** [Issue #3163](https://github.com/netease-youdao/LobsterAI/issues/3163)
*   **Analysis:** This indicates a growing need for the platform to support external enterprise credentials, moving beyond internal tooling toward a more open ecosystem.

The most active PRs are the batch of DSH migration fixes (e.g., #3168, #3169, #3170), all closed today with no comments, reflecting the maintainers' focus on operational stability.

### 5. Bugs & Stability
Stability is the dominant theme of today’s activity. The merged PRs demonstrate a direct response to severe regression bugs observed during the DSH transition:
*   **Critical Startup Hang (Severity: High):** PR #3168 fixed a cold-boot timeout and a pre-boot synchronous legacy archival process that caused up to 38-minute launch hangs in QA.
*   **Connectivity Loss (Severity: High):** PR #3169 restored WeCom direct messaging capabilities.
*   **Current Status:** All reported stability issues from the last 24 hours appear to have been addressed by the merged PRs, significantly improving the "upgrade readiness" for existing users.

### 6. Feature Requests & Roadmap Signals
While no new feature requests were merged today beyond UI polish, the closed PRs reveal several roadmap signals:
*   **Expert Discovery:** PR #3167 added "NEW" badges to the Expert Plaza, suggesting a focus on highlighting new or featured AI capabilities.
*   **Interface Refinement:** PRs #3165 and #3166 focused on sidebar typography and surface polishing, indicating a maturation phase where the team is refining the visual fidelity and consistency of the renderer.
*   **Co-worker Permissions:** PR #3164 redesigned the home composer layout and default permission settings, suggesting a push to make multi-agent collaboration ("cowork") more intuitive for new users.

### 7. User Feedback Summary
User feedback today is heavily weighted toward **migration stability**. The community is currently navigating the transition from OpenClaw to DSH, and the primary pain point is the reliability of that shift. Issues regarding connectivity (WeCom) and launch timeouts are the primary sources of dissatisfaction or friction. Conversely, the extensive PR activity suggests the team is actively resolving these "growing pains," resulting in a general sentiment of progress, albeit with a need for patience during the transition.

### 8. Backlog Watch
**#3163 [OPEN]** - OAuth Integration Request:
*   **Status:** Open, 1 day old.
*   **Needs:** Maintainer attention regarding enterprise authentication standards.
*   **Link:** [Issue #3163](https://github.com/netease-youdao/LobsterAI/issues/3163)
*   **Note:** This is the only open issue and represents a key signal for the project's future direction toward enterprise compatibility.

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

# ZeptoClaw Project Digest
**Date:** 2026-11-24  
**Source:** [github.com/qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

## 1. Today's Overview
ZeptoClaw exhibits minimal activity as of 2026-11-24. The project has **0 issues and 0 open active issues**, indicating a stable, mature state with no current bug reports or feature requests requiring attention. Activity is limited to automated dependency maintenance; **2 Pull Requests were updated today**, both automated Dependabot bumps for the Rust programming language. No new releases or user-reported issues were recorded, suggesting the project is in a "quiet" but healthy maintenance phase.

## 2. Releases
No new releases were published today. There are no tagged versions available in the repository timeline. The project appears to follow a continuous integration workflow where changes are delivered via Pull Requests rather than discrete versioned releases.

## 3. Project Progress
Progress today was limited to dependency updates via Pull Requests:
*   **PR #679 (Closed):** Automated bump of the Rust dependency from `17d1ba8` to `bce1476`. This was a cooldown-triggered update, though the Dependabot action was initially blocked due to a missing publication date from the registry.
*   **PR #728 (Open):** Current active PR bumping Rust from `1.98-slim-trixie` to `1.99-slim-trixie`. This is a routine security and feature update to the latest Trixie (Debian testing) slim variant.

Neither PR introduces new features or bug fixes to the codebase; they are purely maintenance operations to keep the development environment current.

## 4. Community Hot Topics
The most significant activity today centers on the two Dependabot PRs mentioned above.
*   **PR #728** is the current hot topic, opened and updated simultaneously today by `dependabot[bot]`. With 0 comments, it represents the community's current focus: keeping the Rust toolchain aligned with the latest Trixie releases.
*   **PR #679** serves as a historical note from mid-September, illustrating the project's reliance on automated dependency management and the occasional configuration hurdles (missing publication dates) that Dependabot can encounter.

There are no user-reported issues or discussion topics currently active, meaning there are no "hot topics" driven by human contribution at this time.

## 5. Bugs & Stability
**No bugs, crashes, or regressions were reported today.** The issue queue is entirely empty (0 open, 0 closed). Because there are no user-reported bugs, there is no severity ranking to apply. The project's stability appears high in the short term, relying on the robustness of the underlying Rust dependencies being maintained.

## 6. Feature Requests & Roadmap Signals
There are **no feature requests** currently open or discussed in the issues. With a total issue count of 0, there are no signals regarding desired functionality or roadmap direction from the user base. The project's roadmap is likely defined by the maintainer's vision or internal needs, as no external feature demands are registered.

## 7. User Feedback Summary
User feedback is currently non-existent within the tracked metrics. The absence of issues suggests either:
*   The user base is satisfied and encountering no problems.
*   The user base is small or inactive.
*   Users are resolving problems externally without reporting them.
Given the automated nature of the recent PR activity, the project appears to be primarily used or developed by individuals comfortable with CI/CD and dependency management, rather than a broad user community providing active feedback.

## 8. Backlog Watch
The backlog is clean. There are no long-unanswered important Issues or PRs requiring maintainer attention. The only items to watch are the open Dependabot PRs:
*   **PR #728** is the primary item requiring attention. It is currently open and awaiting merge or closure by a maintainer to complete the Rust update cycle.

***

*Data refreshed at 2026-11-24. Project health assessment: **Healthy (Maintenance Mode)**. Low external activity, high automation dependency.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest - 2026-11-24

## 1. Today's Overview
The ZeroClaw project shows significant engineering activity with 50 pull requests updated in the last 24 hours, indicating an aggressive development cycle. Despite the high PR volume, only 5 issues were updated, suggesting that the team is primarily focused on implementation and refactoring rather than triaging user reports. The project maintains a healthy merge rate with 7 PRs closed today, balanced by 43 open PRs waiting for review. No new releases were published, keeping the project on its current development trajectory.

## 2. Releases
No new releases were published today. The project remains on its current version following the recent V4→V5 configuration boundary work (PR #12446 and #12448). Users should expect the existing V4 schema to remain stable until the migration steps outlined in the roadmap PRs are completed.

## 3. Project Progress
Seven PRs were merged or closed today, representing significant architectural advances:
- **PR #12673**: Successfully extracted the shared ACP CLI client from `grok_cli` into a reusable `acp_cli` module, enabling future ACP-backed provider implementations.
- **PR #12679**: Implemented safeguards against undeclared delegate arguments, strengthening the tool delegation schema with `additionalProperties: false`.
- **PR #12573**: Added retry logic for Discord release announcements and website redeploys, addressing previous HTTP 504 failures.
- **PR #12575**: Fixed macOS installer notarization and stapling failures that occasionally occurred in the final build minutes.
- **PR #12222**: Added exception tracking for plan persistence operations, improving observability of storage failures.
- **PR #11572**: Introduced typed runtime `plan_persistence` session updates to surface storage failures to RPC clients.
- **PR #12700**: Made path polling and gateway drain fixtures portable across platform sensitivities (Windows path joining, scheduler timing).

## 4. Community Hot Topics
The most discussed issue is **#9945** ([enhancement] browser tool exposes 16 of agent-browser's 100+ commands), updated today with 7 comments. This feature request highlights a critical usability gap where the `browser` tool only exposes 16 actions against a backend capable of 100+ commands, leaving iframes, dialogs, tabs, and form controls unreachable. The underlying need is clear: users require full browser automation parity.

The second most active tracker is **#12697** ([tracker] Split zeroclaw-runtime into smaller crates), created yesterday with 2 comments and 1 👍. This roadmap epic coordinates splitting the monolithic runtime crate into smaller, focused modules, indicating a long-term commitment to modular architecture and dependency optimization.

Among PRs, **#12444** (refactor providers: centralize capability contracts) and **#12445** (refactor parser: share incremental response parsing) from November 15th continue to attract attention as foundational V5 infrastructure layers, though they show no new comments today.

## 5. Bugs & Stability
Two stability issues were updated today:
- **#12558** [bug] Matrix tool-approval prompts posted to room timeline instead of the thread (created Nov 18, 1 comment). This S2-severity bug violates the `reply_in_thread = true` contract, causing approval prompts to lose conversation context.
- **#12667** [bug] `/model <id>` replies "Model switched" but requests keep the profile's configured model (created Nov 23, 0 comments). An S2-severity inconsistency where model switching announcements don't persist across requests.

Notably, **#12224** (fix channels: post Matrix approval prompts in the turn's thread) was created on Nov 4 and remains open despite appearing to address the same class of issue as #12558. This suggests either a pending discussion or an incomplete fix that requires maintainer attention.

## 6. Feature Requests & Roadmap Signals
The roadmap is heavily weighted toward V5 infrastructure:
- **Provider registry domain types** (PR #12454) and **V5 configuration freeze** (PR #12448) establish the structural foundation for the next major version.
- **Chat request builders and sampling inputs** (PR #12446) will enable more flexible tool construction.
- The **browser tool enhancement** (issue #9945) represents a user-facing feature gap that, if resolved, would significantly improve the agent experience.
- The **runtime splitting tracker** (#12697) signals an upcoming reorganization that could improve crate granularity and compile times.

## 7. User Feedback Summary
Primary pain points emerging from the data:
- **Browser automation limitations**: The 16/100+ command gap in the browser tool frustrates users needing full web interaction capabilities.
- **Model switching inconsistency**: The `/model` command reporting discrepancies erode trust in configuration persistence.
- **Matrix thread context loss**: Tool approval prompts escaping threads disrupts threaded conversation workflows.
- **Docker caching reliability**: Issue #12699 highlights CI stability concerns for fresh builder environments.

Satisfaction appears driven by the active refactoring momentum, though users dependent on browser features or threaded Matrix conversations may feel gaps in the current experience.

## 8. Backlog Watch
Several items require maintainer prioritization:
- **#12224** (fix channels: post Matrix approval prompts in the turn's thread) has been open for 20 days with no recent activity, despite addressing a clear UX regression.
- **#12697** (split zeroclaw-runtime into smaller crates) is a roadmap epic that has languished since creation yesterday without apparent progress.
- **#9945** (browser tool command exposure) remains blocked with high risk classification and 7 comments but no assigned owner or resolution path.
- **#12558** (Matrix tool-approval prompts posting to wrong location) has persisted for 6 days with a pending fix that may overlap with #12224.

Maintainers should focus on resolving the Matrix thread consistency issues and clarifying the browser tool roadmap, as these represent the most impactful blocker-to-user-experience items in the current backlog.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*