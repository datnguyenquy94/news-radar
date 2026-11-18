# OpenClaw Ecosystem Digest 2026-11-18

> Issues: 138 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-18 06:59 UTC

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
**Date:** 2026-11-18

## 1. Today's Overview
OpenClaw maintains a high-velocity development cycle with 138 issues and 500 PRs updated in the last 24 hours. The project is currently in an active state with 101 open/active issues and 246 merged/closed PRs. Two new releases were published today (2026.10.33 and 2026.11.5), indicating a fast-paced release schedule focused on stability improvements and new model support. The volume of activity suggests a healthy, responsive community, though the high number of open bugs (particularly those affecting stability and macOS operations) warrants attention from maintainers.

## 2. Releases
**v2026.10.33** (extended-stable/LTS equivalent): A gateway-only release containing critical security updates, reliability and performance fixes, and new model support from the end of October 2026.
**v2026.11.5**: The latest stable release featuring two major highlights:
*   **Restart-safe conversations:** Queued messages, send permissions, and final chat writes are now retained across Gateway restarts ([#196923](https://github.com/openclaw/openclaw/issues/196923), #196540, #196493).
*   **Safer updates:** Failed Doctor or Gateway startup now rolls back an act to prevent partial state migration ([#196923](https://github.com/openclaw/openclaw/issues/196923)).

## 3. Project Progress
In the last 24 hours, 246 PRs were merged or closed. Key advancements include:
*   **CLI and Gateway fixes:** Improvements to `openclaw logs` clamping, candidate-doctor validation, and release tooling for Kova waivers.
*   **Agent and Plugin fixes:** Fixes for claude-cli final answer preservation ([#200470](https://github.com/openclaw/openclaw/pull/200470)), clearing stale plugin exports, and honoring Azure Sandbox memory limits.
*   **Infrastructure:** Fixes for Git checkout repair logic and keyring recovery inspect fixtures.

## 4. Community Hot Topics
The most active discussions today center on stability and platform compatibility:
*   **macOS Gateway Crash (#181120):** 11 comments. A crash loop where the main thread blocks closing a worker MessagePort, rendering the Gateway unresponsive on macOS.
*   **Windows Update Failures (#200610, #200573):** 5+ comments each. Issues with the candidate-doctor rejecting bundled typebox and retained updater runtimes exceeding MAX_PATH, making `openclaw update` unusable on Windows.
*   **Gateway Startup Exit Code (#200671):** 4 comments. A fresh 2026.11.5 install starts but exits 0 on failure under systemd, causing restart-loops on low-resource devices like the 1GB Raspberry Pi.
*   **PR Activity:** PR #200966 (reduce completion churn) and #200923 (warn on small-context manual picks) were recently closed/opened, reflecting ongoing optimization of model catalog loading and setup flows.

## 5. Bugs & Stability
Critical stability bugs reported and active today:
*   **P1 Crash Loop (macOS):** #181120 - Gateway stops responding; main thread blocked on worker MessagePort close.
*   **P0 Update Failure:** #200540 - Repairing version 2026.9.4 fails.
*   **P1 Gateway Startup (Raspberry Pi):** #200671 - Exits 0 on failure, causing restart-loops.
*   **P2 macOS Stop Failure:** #191944 - `gateway stop` fails with "Process ancestry could not be fully inspected."
*   **Pattern:** A recurring theme is macOS-specific crashes and Windows update/package management failures. Several bugs (#198218, #200606) involve "Doctor/update maintenance livelocks," suggesting the update/admission machinery needs refinement.

## 6. Feature Requests & Roadmap Signals
Feature requests shaping the roadmap include:
*   **Control UI Sidebar Management:** #155039 requests manual team-sidebar agent section order via synced display preferences.
*   **Accessibility:** #154524 requests exposing chat messages as headings for screen reader navigation.
*   **Model Pin Inheritance:** #151980 requests session model pins to inherit the agent's fallback chain.
*   **A2A Dispatch:** #200344 requests one-way A2A dispatch that suppresses failure receipts.
*   **Memory Indexing:** #196505 highlights a "worker task capacity reached" abort issue for large corpora, indicating scaling limits being hit.

## 7. User Feedback Summary
Users are experiencing significant friction with update processes and cross-platform stability:
*   **Update Reliability:** Multiple reports of `Doctor` and `update repair` entering unbounded loops (especially when the Gateway is stopped), making maintenance commands risky.
*   **Cross-Platform Pain:** Windows users face `MAX_PATH` issues and typebox rejection; macOS users deal with gateway stop failures and crash loops. Raspberry Pi users report gateways failing to start but reporting success.
*   **Positive Note:** The v2026.11.5 release notes ("Restart-safe conversations") are already being reported as resolving specific user issues (e.g., macOS Settings slowness), indicating the release is having a stabilizing effect.

## 8. Backlog Watch
Items needing maintainer attention:
*   **#198218:** Doctor/update maintenance livelocks when Gateway is stopped. A serious blocker for system maintenance.
*   **#200671:** Gateway startup failure exits 0 under systemd on Raspberry Pi, causing silent restart-loops.
*   **#191944:** macOS `gateway stop`/`--force` failure due to process inspection limits.
*   **#161158:** `gateway restart` hardcoded 60s readiness budget, failing on real cold starts.
*   **#196505:** Memory index aborts with "worker task capacity reached" for large corpora, lacking retry logic.

**Data Sources:** GitHub OpenClaw API, issue/PR metadata as of 2026-11-18.

---

## Cross-Ecosystem Comparison

**Cross-Project Analysis: AI Agent & Personal Assistant Open-Source Ecosystem**
**Snapshot Date:** 2026-11-18

### 1. Ecosystem Overview
The personal AI assistant and agent open-source ecosystem is characterized by a dichotomy between high-velocity core frameworks and specialized, lightweight tooling. Core infrastructure projects like OpenClaw and CoPaw exhibit intense, "startup-like" development cycles with hundreds of PRs and active issue triage, focusing on stability, cross-platform compatibility, and plugin architecture. In contrast, specialized agents (IronClaw, PicoClaw, NanoClaw) prioritize dependency hygiene, security hardening, and specific provider compatibility. The landscape is currently in a maturation phase, where major releases (OpenClaw v2026.11.5, CoPaw v2.3.0, NanoClaw RC) are stabilizing core features while addressing accumulated technical debt in update mechanisms and cross-platform stability.

### 2. Activity Comparison

| Project | Issues (Open/Active) | PRs (Merged/Closed 24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 101 / 500 (24h) | 246 | 2 releases (v2026.10.33, v2026.11.5) | **Extreme** (High velocity, active bugs) |
| **CoPaw** | 13 / ~38 (24h) | 15 | v2.3.0 stable | **High** (Active refactoring, memory fixes) |
| **NanoClaw** | 12 / 43 (24h) | 24 | v2026.11.0-rc.1 | **High** (RC phase, setup stabilization) |
| **Hermes Agent** | ~16 / 50 (24h) | 7 | v0.23.2+canary | **Active** (Unified Gateway rollout) |
| **NanoBot** | 18 / 10 (24h) | 6 | Stable (no new) | **Concerning** (Security backlog, 8+ month bugs) |
| **PicoClaw** | N/A / 5 (24h) | 5 | Unreleased | **Stable** (Maintenance mode) |
| **IronClaw** | 0 / 10 (24h) | 0 | No tagged releases | **Mature** (Dependency hygiene) |
| **LobsterAI** | 1 / 4 (24h) | 4 | Stable | **Maintenance** (Windows/UX fixes) |
| **ZeroClaw** | 11 / 50 (24h) | 6 | Master branch | **High** (Feature-dense sprint) |

*Health Score reflects activity velocity, release stability, and critical bug density.*

### 3. OpenClaw's Position
OpenClaw dominates the ecosystem as the primary reference platform, distinguished by its extraordinary issue throughput (500 PRs/24h) and a dual-release strategy (LTS and Current). Its technical approach is broad and systems-oriented, targeting "Gateway" orchestration, agent plugin ecosystems, and cross-platform reliability (macOS, Windows, Raspberry Pi). Compared to peers, OpenClaw has the largest community presence but faces the most acute "update reliability" friction, with reported livelocks and macOS crash loops. Its advantage lies in breadth—supporting the widest array of models and deployment targets—but this correlates with higher surface-area bugs. Community size is implied by volume, though the high bug count suggests a maintainer bottleneck in triage.

### 4. Shared Technical Focus Areas
Across the ecosystem, several critical requirements emerge:
*   **Update/Admission Machinery Stability:** OpenClaw, ZeroClaw, and NanoClaw all report critical bugs involving `Doctor`/`update` livelocks, failed rollbacks, and typechecking gaps (e.g., NanoClaw's `/update-nanoclaw` without Bun). This indicates a cross-project need for robust, non-blocking update pipelines.
*   **Cross-Platform Stability:** macOS Gateway crashes (OpenClaw, Hermes), Windows `MAX_PATH` and typebox failures (OpenClaw, ZeroClaw), and Linux/Docker memory arena issues (CoPaw, NanoClaw) are recurring themes. The "worker task capacity reached" abort in OpenClaw and the FIFO wedging in NanoClaw further highlight OS/containers interaction risks.
*   **Security & Supply Chain:** NanoBot flags 32 npm advisories and CLI registry risks; IronClaw updates `rustls`/`wasmtime`; ZeroClaw addresses SOP integrity and SHA256 verification. The "supply chain" and "unsigned code install" vector is a universal concern.

### 5. Differentiation Analysis
*   **Feature Focus:** OpenClaw and CoPaw lead in "Agentic" features—MCP extraction, plugin catalogs, and multi-agent orchestration. PicoClaw and IronClaw focus on provider compatibility (OpenAI tags, WASM runtimes). NanoBot and LobsterAI emphasize UI/UX polish and specific OS stability (Windows CSV encoding, macOS gateways).
*   **Target Users:** OpenClaw targets power users and sysadmins managing complex agent fleets across platforms. CoPaw targets developers building extensible AI workflows. ZeroClaw appeals to those needing fine-grained SOP and scheduling control. IronClaw serves as a low-level runtime/dependency sandbox. NanoBot and PicoClaw cater to niche or learning use cases.
*   **Technical Architecture:** OpenClaw employs a Gateway-centric architecture with restart-safe conversation states. CoPaw utilizes a plugin framework extracting MCP/local models. IronClaw is a dependency-focused runtime. NanoClaw combines container orchestration with local model support (`llmman`). The architectural divergence reflects different optimization goals: OpenClaw prioritizes orchestration resilience; CoPaw prioritizes modularity; IronClaw prioritizes ecosystem hygiene.

### 6. Community Momentum & Maturity
*   **Rapidly Iterating:** OpenClaw (v2026.11.5 + LTS same day), ZeroClaw (sprint-dense PR merges), and CoPaw (heavy refactoring cycle) are in fast-paced development, pushing frequent updates and actively soliciting/fixing community feedback.
*   **Stabilizing:** IronClaw has stabilized into a dependency hygiene phase (0 new issues, automated bumps). PicoClaw is in maintenance mode. NanoClaw is transitioning to stability via its Release Candidate (`v2026.11.0-rc.1`).
*   **Backlog Risks:** NanoBot and LobsterAI show signs of technical debt accumulation. NanoBot has critical bugs open since July 2026 (4798, 4796) with no merges. LobsterAI has a PR open since April 2026 (#1181) hiding internal sessions.

### 7. Trend Signals
*   **The "Update Gap" Crisis:** A dominant trend is the unreliability of maintenance commands. Across OpenClaw, ZeroClaw, and NanoClaw, users report `Doctor` and `update` commands entering loops or failing silently. This suggests the industry is hitting a complexity ceiling where "easy updates" for sophisticated agent stacks are currently broken, posing a risk to production adoption.
*   **Cross-Platform as a First-Class Concern:** Unlike early AI tooling focused on Linux/ macOS, the 2026 landscape is defined by cross-platform friction (macOS crash loops, Windows `MAX_PATH`, Raspberry Pi exit codes). Projects that solve OS-agnostic Gateway stability (like OpenClaw's "Restart-safe conversations") gain immediate user traction.
*   **Modularity as Survival Strategy:** The shift toward plugin architectures (CoPaw extracting MCP, PicoClaw provider fixes) indicates that monolithic agent frameworks are unsustainable. The future lies in composable, swappable components (model providers, tool interfaces) to limit blast radius of bugs and simplify updates.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest

## Today's Overview

NanoBot shows moderate development activity for 2026-11-18, with 18 open issues and 10 active pull requests tracked. The project maintains a steady release rhythm with zero new versions published today. Development focus remains heavily concentrated on security hardening, with multiple critical vulnerabilities identified across filesystem tools, message routing, and shell execution paths. The community appears engaged, evidenced by 3 merged/closed PRs and 6 newly opened items in the last 24 hours, though the open issue count slightly increased from the previous day's snapshot.

## Releases

No new releases were published today. The project remains on its current version, with the most recent activity focused on bug fixes and security patches rather than feature releases. Users should expect the current stable build to contain the latest security mitigations merged in recent PRs.

## Project Progress

Six pull requests were merged or closed today, representing significant backend refinements:
- **#6699**: Refactored agent session execution ownership to resolve shutdown races that could leave automation submissions waiting or admit work outside proper snapshots
- **#6683**: Fixed WebUI lifecycle accounting bug preventing completion fencing from settling across reconnection paths
- **#6689**: Refined reasoning shell activity copy across all 10 locales, making tool-call labels more concise and UI-structured
- **#6687**: Separated CLI Apps from Agent plugins in the WebUI catalog while preserving ready aggregate and search functionality
- **#6680**: Isolated MCP server startup and retries from chat operations, preventing unresponsive servers from blocking tool availability
- **#6688**: Added goal blocking after terminal execution failures, preventing sustained goals from remaining active after output limits or failures

## Community Hot Topics

The most discussed issue is **#6690** (SSRF hardening: missing network ranges) with zero comments but flagging critical gaps in `_BLOCKED_NETWORKS`. **#6697** reports 32 npm advisories including 4 critical vulnerabilities in the webUI dev dependencies (happy-dom VM escape, vitest RCE). **#6695** flags a dependency conflict where sigstore 4.5.0 resolves pyasn1 0.6.4 with 4 known CVEs. On the PR side, **#6700** (unify Apps catalog) and **#6702** (action feedback visibility) are the most recently updated, both created today. The security issue **#4885** (CLI app registry supply chain) continues to attract attention as an unsigned code-install vector.

## Bugs & Stability

Critical stability bugs dominate the issue queue:
- **#4798**: Concurrent file writes from different sessions not serialized, risking workspace file corruption
- **#4796**: `restrict_to_workspace` defaults to False, exposing the full filesystem by default
- **#4780**: Unbounded asyncio.Queue in MessageBus with no backpressure, causing memory exhaustion
- **#4797**: No resource limits on shell subprocesses, enabling fork bombs and resource exhaustion
- **#4072**: ExecTool workspace bypass via relative symlinks (created 2026-05-29, still open)
- **#4790**: Symlink TOCTOU race in filesystem tools between resolve and access operations

No fix PRs exist for these long-standing issues; they represent the project's most pressing reliability concerns.

## Feature Requests & Roadmap Signals

User-driven feature development continues through PR activity:
- **#4477**: Progressive wiki and dream history drain for memory system
- **#6441**: Session-scoped reasoning effort tracking in webUI
- **#6700**: Unified Apps catalog consolidating tools, skills, and chat platforms
- **#6699**: Session execution ownership centralization
- **#6688**: Goal terminal failure blocking

The roadmap signals indicate a maturation phase focused on memory management, session orchestration, and catalog organization rather than core capability expansion.

## User Feedback Summary

Community feedback reveals two distinct pain clusters: security-conscious users flagging filesystem exposure, unbounded queues, and symlink bypasses as critical concerns; while developers report dependency vulnerability fatigue (32 npm advisories) and UI polish issues around action feedback and locale consistency. The pairing code logging issue (**#6694**) represents a concrete privacy leak where plaintext codes persist in log files. Users appear satisfied with the project's active security posture but dissatisfied with the accumulation of technical debt in foundational components.

## Backlog Watch

Several important issues and PRs require maintainer attention:
- **#4798**, **#4796**, **#4780**, **#4797**: Four interrelated security/stability bugs created July 6, 2026, with no merges yet (8+ months old)
- **#4072**: Symlink workspace bypass from May 2026, the oldest open issue at ~18 months
- **#4885**: Supply chain security issue from July 2026
- **#6699**: PR from Nov 18 addressing session execution ownership (newly opened today)
- **#6700**, **#6702**: Feature PRs from Nov 18 requiring triage

The volume of unaddressed security bugs from mid-2026 suggests a backlog backlog that may need prioritization ahead of new feature development.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

### Hermes Agent Project Digest
**Date:** 2026-11-18

#### 1. Today's Overview
Hermes Agent is currently in a state of active refactoring and stabilization following a major architectural shift. Over the last 24 hours, the project saw intense activity with 16 issues and 50 PRs updated. The most significant driver is the continued rollout of the "Unified Gateway" (PR #106742), which has consolidated local conversations into a single gateway process. While this improves coherence, it has introduced several session-state and stability bugs. The community is highly active, with 13 new PRs and 3 new issues created today alone, indicating a push toward the v0.24 release cycle.

#### 2. Releases
*   **New Release:** `v0.23.2+canary.20261117T064624Z` (Released November 17, 2026)
    *   This canary build represents the latest development state, likely incorporating fixes for the gateway multiplexing issues and provider plugin stability seen in the current issue tracker.

#### 3. Project Progress
*   **PR Merges:** 7 PRs were merged/closed in the last 24 hours. Key merges include `#157265` (fixing kanban respawn guards), `#157261` (preventing workspace shadowing in cron), and `#156367` (capping pre-exec guard waits).
*   **Feature Advancement:** Significant progress was made on the plugin catalog, with new additions like "Hermes Personal Task Manager," "Palate," and "Meeting.ai" (#157264, #157263, #157262). Additionally, PR `#157258` introduced native configuration for room member capacity in the gateway.

#### 4. Community Hot Topics
*   **#143547 (1 Comments, 1 👍):** The "Unified Gateway" issue remains the most discussed topic. With 80 comments, users are reporting "post-merge problems on main," specifically regarding the migration of local conversations into a single process. This is the central pain point driving current development.
*   **#156922 (1 Comments):** A critical dashboard auth bug where child processes inherit `BASIC_AUTH_USERNAME` without the password, causing false warnings across the system.
*   **#157248 (1 Comments):** A severe stability bug where `malloc_trim` housekeeping on swap-heavy hosts blocks the gateway for 37–88 seconds, dropping connected kanban workers.

#### 5. Bugs & Stability
*   **Critical:** Issue `#157248` describes a `malloc_trim` block that freezes the gateway process for nearly a minute on swap-heavy Linux hosts, causing immediate disconnects for kanban workers. This is currently open with no fix PR visible in the top 20 list.
*   **High:** Issue `#150207` reports that multiplexed gateway startup MCP discovery runs one profile at a time, making boot time proportional to the sum of all profile connection times.
*   **Medium:** Issue `#153494` details a "compression-exhaustion auto-reset" bug that loses all session context, forcing the agent to run context-free.
*   **Fixes exist:** PR `#157087` addresses a provider vanishing issue when multiple chats open simultaneously, and `#156367` caps the pre-exec guard wait time.

#### 6. Feature Requests & Roadmap Signals
*   **#157245:** A request to add a "games" category to the plugin catalog, signaling an expansion of supported hobby and entertainment tooling.
*   **#89720:** An older but persistent feature request to allow a custom `@handle` for the default profile in Bot Mode, indicating a desire for more granular identity control.
*   **#157258:** The addition of `hosted_rooms.discussion.max_members` configuration suggests a roadmap focus on scalability and moderation for group chat features.

#### 7. User Feedback Summary
Users are experiencing a mix of growing pains and functional improvements. The transition to the unified gateway (#106742) is the primary source of frustration, causing session conflicts and profile management issues (e.g., #141049 where switching profiles clears the "All profiles" sidebar). Conversely, the expansion of the plugin catalog is well-received, with users integrating new tools like Meeting.ai and Palate. There is a clear demand for better stability regarding memory management (`malloc_trim`) and session persistence across restarts.

#### 8. Backlog Watch
*   **#143547:** Despite being open since October 23, this issue has surged to 80 comments, indicating a critical mass of user frustration that requires maintainer prioritization.
*   **#157248:** Reported today, this is a high-severity stability bug that needs immediate attention to prevent gateway stalls.
*   **#157266:** A recently opened bug where reasoning-only picks are lost upon session reload, affecting users utilizing high reasoning effort settings.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**Project Digest: PicoClaw (github.com/sipeed/picoclaw)**
**Generated on:** 2026-11-18

### 1. Today's Overview
The PicoClaw project shows minimal activity over the last 24 hours, with no new issues or releases reported. The low churn suggests a stable state, although the project is currently in a "maintenance mode" phase. A total of 5 Pull Requests were merged or closed in the last day, primarily focusing on routine maintenance and dependency updates rather than groundbreaking features. The open French localization PR (#3467) represents the most visible recent community contribution. Overall, the project health appears steady, with maintainers actively cleaning up the backlog.

### 2. Releases
No new releases were published in the last 24 hours. The project has no tagged releases listed in the latest data. Users are advised to track the `main` branch or the most recent merged PRs for the latest stable build, as there are no formal versioned releases to reference at this time.

### 3. Project Progress
Five Pull Requests were merged or closed today, representing significant backend cleanup and feature integration:
*   **PR #1555**: A meta-PR merging fixes from four previous open PRs (#1390, #1389, #1383, #1381). This consolidates various bug fixes and improvements into the main codebase.
*   **PR #1546**: Another merge operation integrating fixes from PRs #1480, #1479, #1478, #1473, and #1467. This indicates a pattern of batching related fixes to reduce merge conflicts and streamline the development workflow.
*   **PR #1450**: This closed PR addressed a critical UX issue by stripping "thinking tags" from OpenAI-compatible provider responses. This prevents internal reasoning text from leaking to end-users, directly addressing community concerns about privacy and output cleanliness.

### 4. Community Hot Topics
The most active discussion thread currently is **PR #3467** [OPEN], which proposes adding a French UI locale to the web launcher. Created on 2026-11-10, this PR has garnered attention for completing the translation set and updating the language menus. This highlights the project's growing international user base and the maintainers' commitment to accessibility. Additionally, **Issue #1235** (linked within PR #1450) remains the underlying driver for the thinking tag fix, indicating a historical user need for cleaner AI outputs.

### 5. Bugs & Stability
The most notable stability improvement today is the resolution of the "thinking tag" leak (PR #1450). This bug affected the OpenAI-compatible provider domain, where internal "reasoning" tags were inadvertently exposed to users. With the fix now merged, stability is improved for users integrating PicoClaw with OpenAI-compatible APIs. No new crashes or regressions were reported in the last 24 hours. The closed PRs #3455 (Nvidia model ID fix for Termux shell) also contribute to platform stability on specific edge-case environments.

### 6. Feature Requests & Roadmap Signals
The open French locale PR (#3467) serves as a strong signal that the roadmap includes internationalization (i18n) support. Beyond localization, the project's focus on provider compatibility (evidenced by the OpenAI tag fix) suggests a roadmap focused on compatibility and user experience polish rather than core architectural changes. Users should watch for future PRs targeting other language locales or provider-specific optimizations.

### 7. User Feedback Summary
User feedback, as reflected in the recent PR activity, centers on two main themes: **output cleanliness** and **localization**. The merge of PR #1450 indicates that users are frustrated by "leaked" internal AI reasoning appearing in their UI, prioritizing a clean, professional presentation. Simultaneously, the demand for a French locale (#3467) suggests a demographic shift or a growing Francophone user base seeking a localized experience. The overall satisfaction trend appears positive, with maintainers effectively addressing long-standing open issues.

### 8. Backlog Watch
Several items require maintainer attention in the backlog:
*   **PR #3467 (French Locale)**: While open and ready for merge, this PR has been open since Nov 10. It requires a maintainer review to approve the translation integration.
*   **Issue #1235**: Although fixed in PR #1450, this issue was the original catalyst for the thinking tag cleanup and should be verified as resolved for all provider types.
*   **Open PRs**: Users should monitor the status of open PRs like #3455 and the various merged bundles (#1555, #1546) to ensure they are fully deployed and not blocking other merges.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest**
**Date:** 2026-11-18
**Source:** [GitHub Repository](https://github.com/qwibitai/nanoclaw)

### 1. Today's Overview
NanoClaw remains in active development with 12 issues and 43 pull requests updated in the last 24 hours. The project is currently in a Release Candidate phase for version 2026.11.0, with the first RC (`v2026.11.0-rc.1`) published recently. Development velocity is high, driven by a mix of bug fixes for the latest release candidates and new feature additions. The team is actively addressing setup instabilities and image rebuild logic ahead of a stable release.

### 2. Releases
A new release was published today: **`v2026.11.0-rc.1`**.
*   **Changes:** This is the first release candidate of the November 2026 release. It replaces the previous `2026.10.1` cycle and serves as the final test build before stable shipping. No breaking changes are noted in the release description, but it marks the transition from beta to the first release candidate for the new month's feature set.
*   **Migration Notes:** Users are encouraged to test this RC. As it is a release candidate, it is functionally equivalent to the planned stable release unless testing identifies issues requiring further patches.

### 3. Project Progress
**Merged/Closed PRs:** 24 PRs were merged or closed in the last 24 hours, indicating a significant push toward stabilizing the 2026.11.0 release.
*   **Key Merges:**
    *   **PR #4431:** Fixed a critical bug where groups with installed packages kept the old agent image after updates. The fix ensures that groups using `install_packages` now move to the new agent image automatically.
    *   **PR #4444:** Chore release PR for `v2026.11.0-rc.1`, merging 15 other PRs from `main` into the release candidate branch.
    *   **PR #4446:** Pinned Codex version 0.169.0 to allow ChatGPT logins to use GPT-6.2 models, resolving model-not-found errors.
    *   **PR #4440:** Hardened host file access by using `O_NONBLOCK` to prevent container start wedging from named pipes (FIFOs).
    *   **PR #4377:** Fixed setup to verify `systemd linger` without triggering interactive polkit prompts.

### 4. Community Hot Topics
The most discussed items today reflect the community's focus on developer experience and platform-specific bugs.

*   **Slack Onboarding (PR #4456):** The top PR by activity aims to fix Slack agent DMs so that suggested prompts and thread titles actually appear. This highlights a common friction point where AI agents fail to guide new users effectively on Slack.
*   **Image Generation with Codex (PR #4164):** A long-standing issue where Codex agents behind OneCLI could not generate images. The fix has been open for weeks but was recently updated, indicating progress in aligning OneCLI permissions with Codex's tooling.
*   **Mount Security (PR #4377):** Addressed a security hardening issue where extra mounts of NanoClaw-protected paths would silently break agent startup. This reflects the project's focus on container security and isolation.

### 5. Bugs & Stability
The issue queue shows a mix of recent regressions and long-standing frustrations.

*   **High Severity:**
    *   **Issue #4454:** `/update-nanoclaw` fails to typecheck agent-runner source on hosts without Bun. This is a regression risk for the new RC, as updates can go live untypechecked.
    *   **Issue #4458:** `/add-rtk` mount path is rejected by container security. This is a blocking bug for users wanting to add runtime tools to their agents.
    *   **Issue #4451:** Codex agents behind OneCLI cannot generate images. This impacts the core "AI creativity" use case for many users.
*   **Setup & Installer Issues:** A cluster of bugs (#4447, #4448, #4449, #4450) revolve around setup failures. Users report that when setup fails (especially with Cursor or Codex), there is insufficient debugging output or the process floods the screen with Docker build logs without clear feedback.

### 6. Feature Requests & Roadmap Signals
Several new skills and providers are being actively added, signaling the project's expansion direction.

*   **New Skill: `/add-antigravity` (PR #4442):** A new feature allowing agent groups to run on Google's Antigravity CLI (`agy`) and Gemini models. This indicates NanoClaw is diversifying beyond Anthropic/OpenAI providers.
*   **llmman Local Model Support (PR #4210):** Merged recently, adding `llmman` as a local-model option. This signals a roadmap focus on offline/local AI capabilities, catering to users who prefer running models on their own hardware.
*   **Slack Thread Improvements (PR #4422):** Merged feature to give agents tagged in threads the lines they never saw, improving context awareness in channel-based workflows.

### 7. User Feedback Summary
User sentiment from the issue tracker paints a picture of a powerful but "rough around the edges" tool.
*   **Satisfaction:** Users appreciate the active development pace and the recent focus on "hardened" images and security (preventing FIFO wedging).
*   **Dissatisfaction:** A recurring pain point is the **setup experience**. Multiple issues (#4447, #4448, #4450) complain about opaque error messages, missing debug helpers, and Docker output flooding when provider installs fail. There is also frustration regarding the `/update-nanoclaw` workflow breaking typechecking for users without Bun installed.

### 8. Backlog Watch
These items require maintainer attention to unblock progress:

*   **Issue #4453 (OPEN):** A bug fix PR to show the provider image rebuild in the progress window during setup. This is a UX improvement that would significantly reduce user confusion during installs.
*   **Issue #4451 (OPEN):** Codex image generation behind OneCLI. Despite a related PR (#4164) existing, the issue persists, suggesting the fix may be incomplete or platform-specific.
*   **Issue #4454 (OPEN):** The `/update-nanoclaw` typechecking gap. With the new RC live, this needs urgent resolution to prevent unstable updates from reaching users on minimal Bun-less hosts.
*   **PR #4455 (OPEN):** A fix for Codex sign-in to work outside `/tmp` without requiring a local Codex CLI install. This is critical for users on root-owned npm prefixes or restricted environments.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-11-18
**Source:** [GitHub - nearai/ironclaw](https://github.com/nearai/ironclaw)

## 1. Today's Overview
The IronClaw project exhibits a state of steady, automated maintenance with minimal human-driven development activity. In the last 24 hours, no new issues were opened or closed, and the issue backlog remains static at zero active items. However, the repository experienced a surge of 10 Pull Requests updated recently, all of which are automated dependency bumps. This suggests the project is currently in a "dependency hygiene" phase rather than a feature development phase. The overall activity level is low in terms of community discourse but high in terms of mechanical updates, indicating a stable, well-maintained codebase focused on keeping dependencies current.

## 2. Releases
No new releases were published in the observed period. The project has no tagged releases listed for this timeframe, indicating that the current development state is likely tied to the `main` branch or upcoming versioning cycles rather than stable tagged snapshots.

## 3. Project Progress
Progress today is defined by the merging or closing of Pull Requests. While 10 PRs were updated in the last 24 hours, none show a "merged/closed" status in the provided data; they remain in the `[OPEN]` state. Consequently, no features were merged into the codebase today. The activity consists entirely of automated dependency updates across the stack, including Rust crates (rustls, wasmtime), JavaScript packages (zod, storybook, vite), and GitHub Actions workflows. These updates are critical for security, performance, and compatibility but do not constitute new user-facing features.

## 4. Community Hot Topics
The most significant activity centers on the 10 open Pull Requests, all generated by the Dependabot bot. The most prevalent updates target the Rust runtime and WebAssembly environments:
*   **Rustls Upgrades:** PRs #8165 and #8166 focus on bumping `rustls` from 0.23.43 to 0.23.46. These updates include a critical commit (`f04804f`) regarding "Delay saving KX hint until handshake confirmation," likely addressing a handshake or security edge case in the TLS implementation.
*   **Wasmtime Upgrade:** PR #8162 updates the `wasmtime` WebAssembly runtime from 47.0.3 to 48.0.7, incorporating the latest Wasm spec compliance and performance improvements.
*   **JavaScript Ecosystem:** A cluster of updates exists for the web UI frontend (`crates/product/ironclaw_webui/frontend`), bumping `vite`, `storybook`, `@storybook/addon-vitest`, and `dompurify`. These suggest an ongoing effort to modernize the web interface and its development tooling.

## 5. Bugs & Stability
There are currently no reported bugs, crashes, or regressions in the issue tracker (0 open issues). The dependency updates themselves are primarily preventative maintenance. For instance, the `rustls` update includes a fix for a handshake hint timing issue, which proactively improves stability. No active bug reports or crash logs were identified in the 24-hour window.

## 6. Feature Requests & Roadmap Signals
No feature requests or roadmap signals were generated from issues today, as the issue count remains at zero. However, the volume of dependency updates across the `wasmtime` and `rustls` crates, as well as the web UI tooling, suggests the project is aligning itself with the latest standards of the Bytecode Alliance and the React/Vite ecosystem. This indicates a roadmap focused on compatibility and performance optimization rather than new functional features.

## 7. User Feedback Summary
User feedback is currently invisible in the issue tracker. The absence of user-reported issues combined with the presence of automated dependency bumps implies that the user base is either satisfied with the current stability or is not filing feedback regarding the dependency updates. The updates to `dompurify` (a security-focused HTML sanitizer) and `rustls` suggest a priority on security and web safety, which typically aligns with positive user sentiment regarding reliability.

## 8. Backlog Watch
The backlog is clean, with no long-unanswered issues or PRs requiring immediate maintainer attention beyond the standard Dependabot review cycle. However, maintainers should monitor the 10 open Dependabot PRs. While these are routine updates, the concentration of Rust and WebAssembly updates (#8162, #8165, #8166) warrants standard testing to ensure the updated `wasmtime` and `rustls` versions do not introduce runtime regressions in the IronClaw execution environment.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest**
**Date:** 2026-11-18
**Repository:** netease-youdao/LobsterAI

### 1. Today's Overview
LobsterAI, the personal AI assistant and agent platform from NetEase Youdao, shows moderate activity for 2026-11-18. The project saw four Pull Requests merged or closed, indicating steady development progress on the renderer and core functionality fronts. However, community engagement remains low, with only a single issue updated in the last 24 hours. The standout event is a user-reported account access issue (403 error) that highlights ongoing stability and licensing concerns for power users. Overall, the project is in a maintenance and incremental improvement phase, with the core architecture being refined rather than dramatically overhauled.

### 2. Releases
No new releases were published today. The repository remains on its latest stable release cycle. Users are advised to monitor the GitHub Releases page for future updates, which typically bundle renderer improvements and bug fixes.

### 3. Project Progress
Four PRs were merged or closed today, representing significant polish across the renderer and artifact handling:
*   **PR #3111:** Added a "More" entry to the personal account menu with server-configured HTTPS links and grouped submenus. This improves navigation and link management for self-hosted deployments.
*   **PR #3110:** Enables the display of server-configured custom tags in the model selector, complete with optional icons and colors. This enhances model discovery and transparency.
*   **PR #3109:** A critical Windows stability fix. It resolves GBK CSV Chinese character encoding corruption in the Artifacts viewer and fixes incorrect system link invocation for file paths within CSV/TSV content. This directly addresses user-reported usability pain points on Windows.

### 4. Community Hot Topics
The most significant community interaction is **Issue #3112** (1 comment, 0 👍), an open appeal regarding a disabled account.
*   **Link:** [Issue #3112](https://github.com/netease-youdao/LobsterAI/issues/3112)
*   **Analysis:** The user reports an HTTP 403 error (`code=40302`, `accountAccess.state=DISABLED`) when calling the internal model interface for daily signing. The error message states the account "has stopped providing service." The user clarifies their use case is benign—automated local signing via a script, lacking malicious intent or quota sharing. This issue underscores a tension between the platform's anti-abuse mechanisms and power users who automate legitimate, local workflows. It signals a need for more nuanced access control or whitelisting for local automation.

### 5. Bugs & Stability
*   **Major Fix:** **PR #3109** resolves a critical Windows stability and usability bug. Users on Windows 11 experienced Chinese character corruption (garbled text) when previewing GBK-encoded CSV files in Artifacts. Additionally, file paths like `C:/.../products.csv` were incorrectly triggering system open dialogues instead of opening within the app's internal preview.
*   **Severity:** Medium-High. This fix directly impacts the "Artifacts" feature, a core component for data analysis and file handling.
*   **Status:** Fix merged; no open critical bugs reported in the last 24 hours aside from the account blockade issue.

### 6. Feature Requests & Roadmap Signals
While no new feature requests appeared today, two merged PRs signal the roadmap direction:
*   **Model Customization:** **PR #3110**'s addition of custom tags/icons in the model selector suggests a focus on helping users distinguish between different deployed models or pricing tiers.
*   **Navigation/UX:** **PR #3111**'s "More" menu addition indicates a push towards better configurability and link management for self-hosted server instances.
*   **Prediction:** The next version is likely to focus on refining the user configuration layer (menus, tags) and stabilizing the artifact rendering pipeline, rather than introducing novel AI capabilities.

### 7. User Feedback Summary
User feedback today is dominated by the **account accessibility crisis** in Issue #3112. The core pain point is the lack of transparency regarding account flags. Users performing local, non-commercial automation (like daily signing) are being blocked with generic "stopped providing service" messages. There is a clear demand for better diagnostic information and a more permissive stance toward local, single-user automation. Conversely, the Windows CSV fix in PR #3109 was likely met with relief by the user base, resolving a long-standing friction point with file imports on the dominant desktop OS.

### 8. Backlog Watch
*   **Issue #3112:** Open since today. **Action needed:** Maintainers need to determine if the account disablement is a false positive triggered by script-based signing or a legitimate security flag. A response clarifying the "why" and potential "how-to" for legitimate local users is overdue.
*   **PR #1181:** Open since 2026-04-01. **Action needed:** This PR aims to hide internal "OpenClaw" agent sessions from the user-facing Cowork session list to prevent confusion. It has been open for over seven months with no merge action. This is a backlog candidate requiring maintainer triage to clean up the UI/UX.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Generated:** 2026-11-18 | **Source:** GitHub [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

## 1. Today's Overview
CoPaw (QwenPaw) shows **moderate development velocity** with 13 issues and 38 PRs updated in the last 24 hours. The project is in an active release cycle (v2.3.0), with maintainers merging significant architectural refactors—most notably the extraction of MCP and local model management into plugin frameworks. However, a performance regression was introduced in the base Docker image: `#8805` reveals the main app now pins 1.78 GB in 29 glibc arenas due to missing `MALLOC_ARENA_MAX` capping, contrasting with a recent fix in the Creator entrypoint. The issue count remains stable, but 6 open issues have recent activity, indicating ongoing triage.

## 2. Releases
No new releases were published today. The latest stable version remains **v2.3.0** (Docker: `agentscope/qwenpaw:v2.3.0`). Maintenance patches continue to land on `main`, including `#8801` (Docker build fix) and `#8800` (plugin publishing support), but these are bugfixes rather than feature updates.

## 3. Project Progress
**15 PRs merged/closed today**, reflecting heavy refactoring activity:
- **Infrastructure & Performance:** `#8804` defers Anthropic/Gemini SDK imports to reduce startup latency; `#8805` addresses arena memory bloat (mitigation pending).
- **Plugin Architecture:** `#8469` and `#8499` extract MCP and local model management into standalone plugins, signaling a strategic shift toward a modular plugin ecosystem.
- **Bug Fixes:** `#8754` prevents erroneous "Reply completion" notifications across agent boundaries; `#8799` and `#8792` refine skill pool interactions and batch task validation.
- **User Experience:** `#8730` disables SSE proxy buffering for chat and tool-call streams; `#8133` fixes CJK markdown emphasis rendering.

## 4. Community Hot Topics
- **#8071** ([OPEN, 20 comments]): The most discussed issue requests a **plugin-facing theme extension point** for semantic token overrides. Plugins currently only expose `colorPrimary`; authors need deeper customization of `bg`, `surface`, `text`, and other roles. This aligns with PR `#8787` (created today) which exposes semantic color roles to plugin themes—likely the beginning of a solution.
- **#8805** ([OPEN, 1 comment]): A critical production-time memory leak in the Docker base image. The Creator entrypoint was fixed in `#8654`, but the base `deploy/entrypoint.sh` lacks the `MALLOC_ARENA_MAX=4` cap, causing RSS to spiral on multi-core hosts.
- **#8787** ([OPEN, created today]): Directly addresses #8071’s ask, exposing the six color roles (`bg`, `surface`, `surface-raised`, `border`, `text`, `text-secondary`) to plugin themes.

## 5. Bugs & Stability
| Priority | Issue | Status | Notes |
|----------|-------|--------|-------|
| **High** | #8805 | OPEN | Base image memory leak; 29 glibc arenas consuming 1.78 GB RSS. Fix exists in Creator but not base image. |
| **High** | #8802 | OPEN | Same-user MCP tool-call overflow in a single turn (context length exceeded). Related to #8312. |
| **Medium** | #8798 | CLOSED | Model quota exceeded—upstream API limit, not a code bug, but impacts usability. |
| **Medium** | #8709 | CLOSED | WeChat channel `ACCOUNT_IN_USE` error on start; sends reported as `PLATFORM_RESULT_UNKNOWN`. |
| **Low** | #8736 | CLOSED | Subagent completions triggering "Reply completion" desktop notifications. Fixed in `#8754`. |

**Fix PRs in flight:** `#8754` resolves the notification bug; `#8268` bounds the task tracker run completion callback to prevent perpetual "running" states.

## 6. Feature Requests & Roadmap Signals
- **Plugin Theme Customization (#8071/#8787):** The community is actively shaping the theming API. If the extension point lands in v2.3.x, we may see plugin-specific dark/light modes or brand-color overrides.
- **save_draft for qwenpawmail (#8780):** A lightweight tool to write to Drafts without SMTP send—useful for multi-step agent workflows. No merge timeline yet.
- **Local Model Plugin (#8499):** Extracting llama.cpp management into a plugin could significantly lower the barrier for self-hosted users. This is a sizeable `#XXXL` refactor, suggesting it may target v2.4.0.

## 7. User Feedback Summary
- **Positive:** The plugin extraction pattern (#8469, #8499) is well-received; users appreciate the move toward a extensible architecture where core features can be swapped or augmented.
- **Pain Points:** 
  - **Memory management:** The base Docker image’s arena count is a recurring complaint from users on high-core hosts.
  - **MCP tool fatigue:** #8802 highlights that consecutive MCP calls in one turn can still blow past context limits, despite prior fixes.
  - **Channel compatibility:** WeChat and Anthropic/MiniMax presets continue to generate integration bugs (#8709, #8718), though many are marked closed with “works as expected” or upstream changes.
- **Satisfaction:** The rapid merge rate (38 PRs in 24h) suggests a focused sprint cycle, but users may feel changes are “under the hood” rather than surface-level UX improvements.

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **#8071** | 48 days | OPEN, 20 comments | Foundational theming API for plugins. No merge PR yet; blocking deeper customization. |
| **#8805** | < 24h | OPEN, 1 comment | Production-blocking memory leak on multi-core Docker deployments. Maintainer attention needed to cherry-pick the fix from `#8654`. |
| **#6952** | 98 days | OPEN, 2 comments | Prefix cache instability from unsorted tool schemas. Low comment count but may affect long-running agent loops. |
| **#8780** | < 24h | OPEN, 1 comment | `save_draft` tool for mail plugins. Nice-to-have; low urgency. |

**Maintainer action items:** 
- Resolve the arena cap discrepancy between Creator and base image (`#8805` vs `#8654`).
- Close the loop on `#8071`’s theme extension point to unlock plugin theming.
- Review `#6952`’s cache logic if tool-schema-heavy workloads are common.

---
*Data snapshot: 2026-11-18. All links point to `github.com/agentscope-ai/CoPaw`. Next digest will track release candidates and merge activity.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Generated:** 2026-11-18

## 1. Today's Overview
ZeroClaw remains in active development with significant momentum heading into mid-November 2026. The project logged 13 issue updates and 50 PR updates in the last 24 hours, indicating a highly active development cycle. Of the open issues, 11 remain active with 2 recently closed. The merge queue shows robust activity with 44 open PRs and 6 merged/closed, reflecting a healthy contribution pipeline. No new releases were published today, but the volume of merged PRs suggests imminent release readiness.

## 2. Releases
No new releases were published on 2026-11-18. Development remains on the `master` branch, with activity focused on stabilizing and shipping accumulated changes rather than tagging new versions. The lack of a new release today follows the pattern of incremental, feature-dense merging rather than formal version bumps.

## 3. Project Progress
Fifty PRs were active in the last 24 hours, with 6 merged/closed. The merged contributions span critical infrastructure and security fixes: **PR #12532** addresses SOP terminal run integrity in SQLite, **PR #12541** flags cached tokens lacking fallback input rates, and **PR #12543** preserves completed steps during cancellation races. **PR #12547** is particularly significant, resolving a runtime risk by retaining workspace roots for nested Docker coding CLI calls—a direct response to the high-risk issue #9914. Other merged PRs improve CLI localization, Windows error code handling, and provider retry-after semantics.

## 4. Community Hot Topics
The most discussed issue today is **#9770** (3 comments), a p1 priority task addressing the `cron update` command silently discarding changes to declarative jobs across six columns (`command`, `name`, `expression`/`schedule`, `session_target`, `allowed_tools`, `uses_memory`). This bug impacts core scheduling functionality and is currently in-progress/accepted status.

In the PR landscape, **#12534** (OIDC certificate actor) and **#12533** (web session sign-out) lead recent activity, both created and updated today. The pattern of multiple PRs created and updated on 2026-11-18 (including #12532, #12541, #12543, #12547, #12540, #12546, #12539, #12538, #12524, #12526, #12529, #12527) indicates a focused push toward the end of the sprint cycle, with maintainers merging a cluster of interrelated fixes.

## 5. Bugs & Stability
Six bugs were updated today, ranging from SOP integrity to security sandboxing. **#12169** (closed) reports that `send_message_to_peer` starts the recipient's turn outside the tool scope of the calling headless SOP step—a security concern rated as the recipient's turn running in a detached task. **#12122** (closed) highlights that Windows prebuilt installers skip SHA256SUMS verification performed by `install.sh` and `zeroclaw update`, a distribution integrity issue. Active bugs include **#11823** (shell scanner skipping heredoc bodies), **#11824** (cmd.exe parenthesized blocks hiding commands from risk classification), and **#10723** (cached-input zero fallback suppressing pricing warnings). Several of these have corresponding fix PRs in the merge queue, notably #12547 for Docker workspace retention and #12541 for cached token pricing.

## 6. Feature Requests & Roadmap Signals
Feature development is heavily represented in today's 13 issue updates. **#11768** tracks honoring the HTTP Retry-After response header for provider 429s, with a follow-up PR #12542 merged today implementing the nonstreaming chat fix. **#12331** pins the OIDC `client_id`/`azp` conflict refusal with failing tests. **#12092** aims to resolve Agent route selections through the capability source, a routing enhancement. **#12513** adds regression testing for switch guards on ignored decision answers. The convergence of #11768, #12542, and #12331 suggests the roadmap is moving toward more robust provider reliability, authentication hardening, and intelligent agent routing.

## 7. User Feedback Summary
User pain points today center on three themes: scheduling reliability (issue #9770's cron update discard), Docker workspace continuity (#9914/#12547), and authentication/authorization integrity (OIDC client_id/azp conflicts in #12331, Retry-After handling in #11768/#12542). The volume of closed bugs related to Windows installers (#12122) and SOP step scopes (#12169) indicates ongoing maturity efforts. The high number of PRs merged and updated today suggests the project is actively addressing accumulated technical debt and user-reported edge cases.

## 8. Backlog Watch
Several important items warrant maintainer attention. **#11945** has persisted for weeks, tasking the addition of focused tests for stale-copy branches from #11861 that currently fail no tests. **#12513**, created on 2026-11-17, tasks a routing regression test for switch guards on ignored decision answers—fresh but already active. **#12331** (created 2026-11-09) seeks to pin the OIDC client_id/azp conflict refusal with failing tests. On the PR side, **#11322** (feat(gateway): forward plugin webhooks to the core over RPC), opened 2026-10-01, remains open after extensively depending on #11319, #11339, and #12244, representing a significant integration that may need maintainer triage.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*