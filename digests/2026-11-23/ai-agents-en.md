# OpenClaw Ecosystem Digest 2026-11-23

> Issues: 128 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-23 07:09 UTC

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

Here is the OpenClaw project digest for 2026-11-23.

### **Today's Overview**
OpenClaw continues its rapid development cycle, with 500 PRs and 128 issues updated in the last 24 hours. The project exhibits high velocity, particularly in the web-ui and plugin-sdk areas. A significant portion of today’s activity focused on polishing the v2026.11.7 release candidate and addressing stability regressions across Windows, macOS, and Linux platforms. The high volume of "needs-maintainer-review" items (98 open issues) suggests a bottleneck in triage capacity despite a healthy contribution rate.

### **Releases**
*   **v2026.11.7 (Latest):** The most recent release highlights **conversation recovery**, allowing interrupted replies and child results to persist across Gateway restarts without data loss. It also improves **reliable automations**. This appears to be a point-release focusing on stability and recovery mechanisms following the v2026.11.6 release.

### **Project Progress**
*   **Merged/Closed Activity:** 240 PRs were merged or closed in the last 24 hours. Key merged changes include `fix(ci): separate Z.AI Coding Plan credentials` (#203965, #203972), which addresses credential sharing issues, and `fix(update): run deferred Doctor inspections after an upgrade` (#203959), responding to user reports of skipped inspections.
*   **Feature Advancement:** Significant UI polish landed today, including fixes for the Android and Web UI command palette attachment layout (#203967), aligning sidebar loading rows (#203969), and keeping skill identities compact (#203708). The `memory-core` plugin saw improvements to search path compactness (#203681).

### **Community Hot Topics**
*   **Issue #197083** (35 comments): The most discussed issue remains a **Post-install Doctor WAL publication verification** failure. Users report that upgrading from 2026.11.1 to 2026.11.3 leaves an 11.3 update "partially finalized," blocking rollback and leaving external plugins in an inconsistent state.
*   **Issue #196199** (15 comments): A **regression since 2026.10.10** where native Codex helper completions fail to resume parent goals, effectively locking users out of their assistants.
*   **PR #203901** (XL size): A massive "preserve runtime custody, inference history, and recovery" port for 2026.11.7 forward, indicating a major effort to stabilize the update pipeline.
*   **PR #203475:** Fixes `plugin-sdk` to honor declared DeepSeek reasoning efforts in the OpenAI-compatible wrapper, improving multi-provider compatibility.

### **Bugs & Stability**
*   **Critical Crashes:** Issue #203869 reports **Tool execution failures** (gRPC code-mode session closed / BrokenPipe) on Mac mini, rated P0 and blocking tool use entirely.
*   **RSS/OOM Issues:** Issue #154812 (15 comments) details a "runaway RSS outside V8 heap" causing OOM shutdowns in Gateway 2026.9.5 on Linux, a long-standing stability concern.
*   **Windows Instability:** Issue #176067 documents 76-163s event-loop stalls on Windows 2026.10.3, causing worker timeouts and reclamation errors.
*   **Progress:** A fix PR (#203970) was merged to stop replaying Claude progress updates in active chats, addressing a UI flicker/duplication bug.

### **Feature Requests & Roadmap Signals**
*   **Provider Switching:** PR #203684 aims to "distinguish providers beside their Connect buttons" and #203973 focuses on using the configured runtime when switching model providers, indicating active work on multi-provider UX.
*   **Memory & Context:** PRs #203777 and #203681 focus on keeping subagent and memory search paths compact, suggesting a roadmap priority for reducing UI clutter in long-running sessions.
*   **Upgrade Safeguards:** The volume of update failure reports (#203913, #203200, #203946) signals a roadmap focus on making the transition from published releases to `main` more robust.

### **User Feedback Summary**
Users are heavily focused on **update reliability** and **cross-platform stability**. The most prominent pain points are:
1.  **Update Failures:** Reports of EACCES on Windows (#201634), APFS volume errors (#60398), and "half-written npm tree" crashes during live upgrades (#203897).
2.  **Session State Loss:** Issues regarding lost transcript events (#196219) and Codex helper resumption failures (#196199) are causing user frustration and "lock-out" scenarios.
3.  **Cross-Platform Consistency:** Windows users face specific credential and filesystem errors (#197437, #201634), while macOS users deal with Dashboard reconnection issues (#203974).

### **Backlog Watch**
*   **#161158:** `gateway restart` reports failure and exits 0 on successful restarts due to a hardcoded 60s readiness budget. This has been open since September and requires a configuration change to fix.
*   **#160719:** A session deletion bug where `sessions.delete` returns `ok:true` but silently keeps invalid `session_nodes` entries. This impacts data integrity and cleanup.
*   **#194345:** A beta release blocker where the sqlite-maintenance heartbeat refuses admission when `/proc/self/ns/pid` is absent (common in containerized/ Android environments).
*   **#202213:** 2026.11.6 refuses to read compressed session archives, blocking data migration for users on the bleeding edge.

---

## Cross-Ecosystem Comparison

**Ecosystem Overview**
The personal AI assistant and agent open-source ecosystem in late-November 2026 is characterized by a bifurcation between high-velocity, enterprise-grade platforms and specialized, low-maintenance tools. A few "core reference" projects like OpenClaw and NanoClaw drive the majority of activity, focusing on stability, cross-platform compatibility, and large-scale refactoring (e.g., OpenClaw’s update pipeline overhaul and NanoClaw’s DSH migration). Meanwhile, smaller projects such as PicoClaw, NullClaw, and ZeptoClaw operate in maintenance or niche-integration modes, often addressing specific provider gaps or dependency hygiene. The landscape is currently in a "stabilization phase" following architectural migrations (e.g., LobsterAI’s DSH transition and OpenClaw’s architecture shift), with a strong industry trend toward multi-provider compatibility, session resilience, and cross-platform runner support.

**Activity Comparison**

| Project | Issues Updated | PRs Updated | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 128 | 500 | v2026.11.7 (RC) | 7/10 |
| **NanoClaw** | 6 | 20 | v2026.11.0 (Milestone) | 6/10 |
| **NanoBot** | 0 | 17 | No release | 5/10 |
| **Hermes Agent** | 12 | 50 | No release | 6/10 |
| **LobsterAI** | 0 | 13 | No release | 7/10 |
| **CoPaw** | 19 | 25 | v2.3.1-beta.1 | 6/10 |
| **PicoClaw** | 2 | 1 | No release | 6/10 |
| **NullClaw** | 0 | 1 | No release | 4/10 |
| **IronClaw** | 1 | 0 | 1.4.1 (Nov 15) | 3/10 |
| **Moltis** | 1 | 0 | No release | 2/10 |
| **ZeptoClaw** | 1 | 1 | No release | 4/10 |
| **ZeroClaw** | 10 | 50 | No release | 6/10 |
| **Picoclaw** | N/A | N/A | N/A | N/A |

**OpenClaw's Position**
OpenClaw dominates the ecosystem as the primary reference point, handling a staggering volume of 500 PRs and 128 issues in a single day. Its advantages over peers include a mature, feature-complete web-ui and plugin-sdk, and a robust, if volatile, release cycle (v2026.11.7 RC). Technically, OpenClaw distinguishes itself through deep cross-platform stability work (Windows, macOS, Linux) and a focus on "reliable automations" and conversation recovery. However, its community size and issue backlog (98 "needs-maintainer-review" items) indicate a triage bottleneck, contrasting with the more focused, smaller-scale efforts of projects like NanoBot or PicoClaw. While OpenClaw is the "engine" of the ecosystem, its velocity creates higher operational friction compared to the steadier, smaller projects.

**Shared Technical Focus Areas**
Several cross-project requirements emerge, indicating industry-wide priorities:
*   **Multi-Provider Compatibility:** OpenClaw (PR #203475), NanoBot (#6758), and NullClaw (#1092) all address OpenAI-compatible wrapper integrations and provider switching, signaling a need for unified API abstraction.
*   **Session Resilience & Recovery:** OpenClaw (conversation recovery, #203973), Hermes Agent (session deletion, #159093), and CoPaw (context compaction, #8855) prioritize maintaining state across restarts and long contexts.
*   **Cross-Platform Stability:** Windows instabilities (OpenClaw #176067, IronClaw #8172), macOS crash loops (Hermes #159118), and Linux OOM concerns (OpenClaw #154812) highlight a shared pain point in diverse deployment environments.
*   **Dependency & Security Hygiene:** Dependency bumps (NanoClaw WhatsApp Baileys, ZeptoClaw audit.toml, ZeroClaw 39 Dependabot PRs) and security fixes (NanoBot #4618, PicoClaw #3472) are ubiquitous across the ecosystem.

**Differentiation Analysis**
*   **Feature Focus:** The ecosystem splits between "Platform Polish" (OpenClaw, CoPaw, LobsterAI focusing on UI/UX, console stability, and migration) and "Infrastructure/Niche" (ZeroClaw, PicoClaw, ZeptoClaw focusing on dependency management, specific provider integration like LLMTR or QQ, and audit hygiene).
*   **Target Users:** OpenClaw, Hermes Agent, and CoPaw target power-users and developers building complex, multi-protocol gateways and long-running agents. In contrast, IronClaw, Moltis, and NullClaw cater to more specific or smaller user bases, often focusing on singular protocol compatibility (MCP) or local LLM deployment configurations.
*   **Technical Architecture:** LobsterAI and OpenClaw have undergone major architecture migrations (DSH, internal refactoring), resulting in high activity but instability. Projects like IronClaw and NullClaw exhibit low velocity, suggesting mature, stable, or stalled codebases. NanoBot and NanoClaw sit in the middle, actively refactoring UI and session management while maintaining a core functionality.

**Community Momentum & Maturity**
*   **Rapidly Iterating:** OpenClaw (500 PRs/day), Hermes Agent (50 PRs/day), and LobsterAI (13 merged PRs) are in high-velocity cycles, driven by recent migrations and feature polish. CoPaw also shows high short-term activity (25 PRs) during its beta release.
*   **Stabilizing:** Projects like PicoClaw, NullClaw, IronClaw, Moltis, and ZeptoClaw exhibit low activity, indicating they are in maintenance phases, awaiting major version bumps, or experiencing maintainer hiatus. ZeroClaw is an exception, showing healthy Dependabot-driven activity (39 PRs) focused on security and dependency health.

**Trend Signals**
*   **Value for AI Agent Developers:** The dominant trend is the shift from "feature addition" to "stability and integration." The migration from OpenCLaw to DSH (LobsterAI) and the focus on "reliable automations" (OpenClaw) suggest that the industry is maturing; the "hard problems" of session persistence, cross-platform crashes, and provider compatibility are now the primary focus.
*   **Emerging Needs:** There is a clear demand for "Network mailboxes" (NanoClaw #4543) to support cloud-native/Kubernetes deployments and "Scoped operator credentials" (ZeroClaw #12422) for fine-grained access control. Furthermore, the persistence of issues like Windows event-loop stalls and macOS `nemo_relay` crash loops indicates that core infrastructure stability remains a significant barrier to wider adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest**
**Date:** 2026-11-23
**Source:** [GitHub HKUDS/nanobot](https://github.com/HKUDS/nanobot)

### 1. Today's Overview
NanoBot today exhibits the characteristics of an actively developed mid-maturity project, with a significant surge in pull request activity. A total of **17 PRs** were updated in the last 24 hours, merging 8 and leaving 9 open. The most notable trend is a concentrated focus on WebUI localization and session management refactoring. Despite the high PR volume, issue creation remains dormant, with **0 new issues** opened in the last day, suggesting the development focus is currently internal/technical rather than user-driven bug reporting.

### 2. Releases
No new releases were published today. The project remains on its current main branch snapshot, with development progressing through a series of incremental PRs rather than major version tags.

### 3. Project Progress
The most significant advancement today is the **split and merge of #6747** into six distinct feature PRs, all merged or closed. This massive refactor focuses on localizing built-in slash command results across all chat clients (Telegram, Discord, Feishu, WebUI). Key merged PRs include:
*   **#6756**: Routing localized command results through channel presentation.
*   **#6755**: Describing the regex search contract for JSON schema.
*   **#6753**: Folding the diff toggle into the file edit row (UI cleanup).
*   **#6750**: Underlining focused sidebar titles.
*   **#6751**: Showing desktop message actions in side gutters.

Additionally, **#6761** ("feat(webui): redesign session management") is a large open PR aiming to replace the static chat-history sidebar with a "Workspace Top Bar," "Live Pulse bar," and "Active Drawer" to support multi-project, concurrent-agent runtimes.

### 4. Community Hot Topics
The most discussed items today are the split PRs originating from **#6747**, which sparked the most activity. The "Localize built-in slash command results" initiative (split into #6755–#6760) addresses the need for native language support in command feedback across Telegram, Discord, and Feishu.
*   **#6760**: Localizing native Telegram, Discord, and Feishu command feedback.
*   **#6759**: Localizing slash menus and preserving command reply text.
*   **#6758**: Confirming preset switches and validating first-send selection.
Users are showing strong engagement with the localization efforts, as evidenced by the volume of split PRs aimed at decoupling command logic from English-dependent text.

### 5. Bugs & Stability
Bug fixing was a major component of today's merges. Several PRs targeted WebUI stability and alignment:
*   **#6754**: Fixed activity status icons misalignment (offset 6px right of reply text).
*   **#6750**: Fixed focused sidebar title boxing (changed to underline).
*   **#6757**: Fixed delivery of deferred receipts in order to the original session (a bug fix for command delivery).
*   **#4618** (opened July, updated today): A security fix preventing `enabledTools` name collisions in the MCP layer, critical for tool identity integrity.

### 6. Feature Requests & Roadmap Signals
The roadmap is heavily weighted towards **WebUI ergonomics and multi-agent support**. The open PR **#6761** is the strongest signal for the immediate future, redesigning session management to accommodate "concurrent-agent runtime." Other signals include the "Star History badges" addition (**#6752**) and the "edit and resend messages" feature (**#6323**), indicating a push toward making the UI more interactive and "agentic."

### 7. User Feedback Summary
User feedback, as reflected in merged PRs, centers on **linguistic accessibility** and **interface real estate**. The community is actively working to strip hardcoded English from command results and menus, moving towards a truly localized experience for non-English Discord/Telegram users. Simultaneously, there is a clear dissatisfaction with the current "cramped 272px chat-history sidebar" (**#6761**), with users seeking a more fluid, floating workspace design.

### 8. Backlog Watch
Several important items warrant maintainer attention:
*   **#6747 (Aggregate)**: While the splits are merged, the main aggregate PR remains open. It serves as the historical record; maintainers should ensure the `main` snapshot is consistent with the merged split PRs.
*   **#6323 (feat(webui): edit and resend messages)**: Open since October 20, this PR has passed all 20 CI checks but remains open. It is a highly requested feature for session persistence and should be a priority for merger if the split PRs are complete.
*   **#4618 (Security fix)**: Though opened in July, this security hardening for `enabledTools` is still open. Given its security implications, it requires a maintainer review and merge to close the identity confusion path.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest**
**Date:** 2026-11-23

### 1. Today's Overview
The Hermes Agent repository exhibits a day characterized by **high velocity fix activity**, with 50 PRs updated and 12 issues receiving activity. The project is currently in a "maintenance and polish" phase rather than a feature-release cycle, as evidenced by zero new releases but a flurry of critical bug fixes and configuration updates. The issue pipeline shows a mix of platform-specific stability bugs (Matrix, Telegram, WhatsApp) and desktop usability regressions. Overall project health appears stable, with maintainers actively addressing regressions across core components like the cron scheduler, terminal tools, and gateway session management.

### 2. Releases
No new releases were published today. The project remains on its current upstream version. Given the volume of merged bug fixes and configuration repins (catalog updates), a patch release is likely imminent to bundle these stability improvements, though no tag or version bump was triggered in the last 24 hours.

### 3. Project Progress
A significant portion of today's 50 PR updates focused on **catalog repins and dependency bumps**, ensuring plugin compatibility and resolving version drift. Key functional advances include:
*   **Session Deletion:** PR #159093 implemented per-message and per-exchange deletion in the persistence store, allowing users to remove specific messages without losing later conversation context.
*   **Gateway Typing Scopes:** PR #159094 introduced typed `chat_scope` flows (`dm`/`group`), ensuring group turns never inadvertently initialize or touch DM memory surfaces, providing physical isolation for session data.
*   **Terminal Configuration:** PR #101674 fixed the expansion of `${VAR}` references in profile config terminal keys, resolving variable projection issues under profile multiplexing.
*   **Persistence Performance:** PR #159114 optimized `replace_routing_entries` to write only changed routing rows, preventing the SQLite writer mutex from being held for 10-12 seconds on large indexes.

### 4. Community Hot Topics
The most discussed issues today reflect **platform-specific stability crises** and **gateway architectural pain points**:

*   **🔥 Critical: Gateway Crash Loop (Issue #159118)** — *0 comments, 0 likes.* This is the most urgent technical debt item. On Intel macOS, the `shared_metrics` module retries `nemo_relay` initialization on every agent turn, generating thousands of `ModuleNotFoundError` tracebacks and consuming 100%+ CPU. This effectively renders the gateway unusable on macOS until fixed.
*   **🔥 Critical: Matrix Receipt Loops (Issue #155638)** — *6 comments.* A `UnscopedSecretError` in `reconcile_pending` causes receipt recovery to loop forever on multiplexed gateways, preventing `finish_completed_run()` from executing.
*   **🔥 High: BlueBubbles Webhook Duplication (Issue #34372)** — *11 comments.* Hermes auto-registers BlueBubbles webhooks for both `new-message` and `updated-message`, causing every iMessage to trigger `handle_message` twice with different chat-id variants, doubling processing load.
*   **📈 Active PR: Session Deletion (PR #159093)** — High community interest in finally being able to cherry-pick messages from long histories without breaking the conversation chain.

### 5. Bugs & Stability
Today saw a surge in stability bugs, particularly affecting **desktop search** and **gateway crash loops**:

*   **Crash Loops & Resource Exhaustion:** Issue #159118 (macOS `nemo_relay` retry storm) and Issue #157341 (cron worker exit on WS failure) represent high-severity stability risks. The latter leaves jobs in a "paused with unverified admission" state, requiring manual intervention.
*   **Desktop Usability Regressions:** Issue #159111 reports that in-session search (Ctrl+F) only scans rendered DOM elements, reporting 0 hits in long sessions (tens of thousands of messages) until the user scrolls extensively. Issue #142154 details that Cmd/Ctrl+F in long sessions causes the entire desktop window to reload/blank out.
*   **Terminal Guard False Positives:** Issue #159105 describes a "hardline" block on macOS when running Blender, where the terminal tool rejected a combined read-only workspace and toolchain check, stopping the worker entirely without output.

Fix PRs exist for several of these, notably the terminal variable expansion (#101674) and the routing performance fix (#159114), but the macOS relay crash and the desktop search regressions require further engineering attention.

### 6. Feature Requests & Roadmap Signals
Feature requests today are heavily weighted toward **plugin interoperability** and **desktop modularity**:

*   **Plugin Inventory & Voice Scoping:** Two new feature PRs (#159112, #159110) request that Python plugins be able to read the current profile's plugin and command inventory without starting discovery, and that slash commands have scoped access to the active Discord voice connection.
*   **Sandbox Tooling:** Feature request #135411 seeks to make the `execute_code` sandbox allow-list configurable to support the "Code execution with MCP" pattern used by competitors like Claude Code and Manus.
*   **Catalog Updates:** The high volume of repin PRs (#158730, #159109, #159095) signals a roadmap focus on keeping the plugin ecosystem current and secure, specifically updating `hermes-talk`, `mock-review`, and `hermes-finance` to their latest stable builds.

### 7. User Feedback Summary
User feedback today paints a picture of a **power-user tool experiencing growing pains across platforms**:

*   **Satisfaction:** The core functionality of session management and tool integration is improving, with PRs like #159093 (deletion) and #159114 (performance) directly addressing long-standing user pain points regarding data bloat and latency.
*   **Dissatisfaction:** A recurring theme is **platform fragility**. macOS users are hit hard by the `nemo_relay` crash loop, while desktop users face usability barriers with search and find-in-page functionality in long-running chats. There is also frustration regarding the "hardline" blocks in the terminal tool that prevent workflow execution on macOS setups (Issue #159105).
*   **Use Cases:** Users are actively configuring complex multi-protocol gateways (Matrix, Telegram, WhatsApp, BlueBubbles), and the current instability in session scoping and receipt handling is disrupting these integrated workflows.

### 8. Backlog Watch
Several important items require maintainer triage and are at risk of stalling the milestone:

*   **Issue #159118 (nemo_relay crash):** Requires immediate attention as it blocks the gateway on a major OS platform (macOS).
*   **Issue #157341 (Cron exit/lock contention):** A "restart-safe" cron worker bug that leaves jobs paused; the root cause involves `state.db` lock contention and unverified admissions.
*   **Issue #155638 (Matrix receipt loops):** A chronic issue where the journal retry mechanism is broken, causing perpetual failed recovery on multiplexed setups.
*   **PR #158719 (RE2 migration S2b):** A structural refactor to remove regex matches at import time; while open, it is a critical code health step for long-term maintenance.
*   **Issue #34372 (BlueBubbles duplication):** An older but still-open bug affecting iMessage reliability, with 11 comments indicating active discussion on the correct webhook subscription strategy.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

### PicoClaw Project Digest
**Date:** 2026-11-23

#### 1. Today's Overview
The PicoClaw project shows low activity for 2026-11-23, with only two issues and one pull request updated in the last 24 hours. The issue queue is currently dominated by two distinct problems: a feature request for a new LLM provider integration and a critical dependency regression affecting the QQ chat channel. Despite the low daily volume, the project maintains a steady state with one merged PR bringing in fixes from earlier in the year, suggesting a stable but slow-moving development cycle.

#### 2. Releases
No new releases were published today. The latest release history is currently absent, indicating the project is likely on a continuous integration/deployment cycle or between major version bumps. Users should rely on the main branch or pending PRs for the latest features and fixes.

#### 3. Project Progress
The most significant activity today is the merge of **PR #1555**, which consolidates fixes from four open pull requests (#1390, #1389, #1383, #1381) dating back to March 2026. This merge suggests the project is catching up on accumulated technical debt and stabilizing the codebase ahead of potential future releases. No new features were merged today; progress is focused on maintenance and dependency hygiene.

#### 4. Community Hot Topics
The community's attention is currently split between a new integration and a regression bug.
*   **#3470 [Feature] Add LLMTR as an OpenAI-compatible provider** (2 comments): This feature request asks for the addition of `llmtr` as a built-in provider. LLMTR is an OpenAI-compatible gateway, and the user seeks a "named provider" in the model catalog to simplify configuration. The lack of existing built-in support for this gateway highlights a gap in the model catalog's extensibility.
*   **#3472 [Open] QQ channel error 11241** (0 comments): This is a critical regression reported today. It involves a dependency version conflict where `botgo v0.2.1` expects `resty v2.6.0`, but the current setup uses `resty v2.17.1`, causing an "Authorization header format error" that breaks the QQ channel. This issue requires immediate maintainer attention to restore functionality for QQ users.

#### 5. Bugs & Stability
The most pressing stability concern is **Issue #3472**. The regression stems from a dependency update in the `resty` library (used via `botgo`), which broke the authorization header format for the QQ channel. With zero comments and no associated fix PRs currently visible, this is an active blocker. The project's stability is currently compromised for QQ users until this dependency conflict is resolved.

#### 6. Feature Requests & Roadmap Signals
**#3470** serves as the primary roadmap signal. The request for an `llmtr` provider indicates users are looking to integrate third-party OpenAI-compatible APIs beyond the standard offerings. If the maintainers accept this pattern, we can expect future requests for other gateway providers. This feature would likely require updating the model catalog configuration and potentially adding API key management.

#### 7. User Feedback Summary
Users are expressing two primary needs: **integration flexibility** and **dependency stability**. The feature request reveals a desire for the tool to act as a universal hub for various LLM gateways, reducing the need for manual endpoint configuration. Conversely, the regression report highlights a frustration with "dependency drift," where updates to underlying libraries (`resty`, `botgo`) break existing functionality without clear migration paths or version pinning.

#### 8. Backlog Watch
*   **#3472 (Nov 23)**: Requires immediate maintainer action to resolve the `resty` vs. `botgo` version conflict.
*   **#3470 (Nov 14)**: Awaiting maintainer decision on adding the `llmtr` provider to the catalog.
*   **#1555 (Merged)**: Successfully resolved a cluster of older PRs, clearing the merge queue.

**Project Health Score: 6/10** – Stable codebase with recent maintenance merges, but currently experiencing a critical regression and a feature gap that, if approved, would expand the project's versatility.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the project digest for NanoClaw as of 2026-11-23.

### **Today's Overview**
NanoClaw exhibits a mixed but active development state on 2026-11-23. The project saw 20 Pull Requests updated in the last 24 hours, driven largely by automated dependency bumps, alongside 6 new Issues. A significant portion of today’s activity centers on infrastructure and platform compatibility, specifically addressing Signal attachment routing and session runner limitations. While no new releases were published, the high velocity of dependency updates and infrastructure PRs suggests a focus on stabilizing the v2026.11.0 release cycle and preparing the platform for diverse deployment environments.

### **Releases**
No new releases were published today. The latest activity consists of automated dependency bumps and image refreshes targeting the v2026.11.0 milestone. Users should expect the next release to incorporate fixes for Signal attachment handling and session runner networking, contingent on the merging of open PRs #4544 and #4543.

### **Project Progress**
A substantial portion of today’s merged and closed activity was maintenance-focused. Key closures include PR #4516, which successfully bumped the WhatsApp Baileys dependency from the vulnerable `7.0.0-rc.9` to `7.0.0-rc14`, resolving a message spoofing security advisory. Additionally, PR #4434 addressed a critical setup bug where the `add-onecli` gateway readiness check would silently exit with status 0 despite failing. On the features side, PR #4541 merged a new `/add-deja` skill, enabling agents to search past coding sessions locally via the Deja Vu memory engine.

### **Community Hot Topics**
The most critical community dialogue surrounds **Signal media accessibility** and **session networking**.
*   **Issue #2528** ([Open, 2 comments](https://github.com/qwibitai/nanoclaw/issues/2528)) reports that images and PDFs sent over Signal arrive at the host but are unreachable by the agent inside the container. This is currently blocking core multimodal capabilities for Signal users.
*   **Issue #4543** ([Open, 1 comment](https://github.com/qwibitai/nanoclaw/issues/4543)), created today, proposes a "Network mailbox" to allow session runners (remote, Kubernetes, sandbox) to operate without a shared host session directory. This addresses a fundamental architectural limitation for cloud-native deployments.
*   **PR #4544** ([Open](https://github.com/qwibitai/nanoclaw/pull/4544)), merged as a fix inline, directly addresses the attachment problem in #2528 by inlining inbound attachments so the agent container can read them.

### **Bugs & Stability**
Stability improvements were a major focus today. Aside from the WhatsApp Baileys update (#4516) and the `add-onecli` fix (#4434), two other bugs were closed:
*   **Issue #4408** ([Closed](https://github.com/qwibitai/nanoclaw/issues/4408)): A bug where `add-onecli` setup.ts exited with code 0 even when the gateway readiness check failed (STATUS: failed).
*   **Issue #3941** ([Closed](https://github.com/qwibitai/nanoclaw/issues/3941)): A long-standing pinning issue where `channels` still pinned the vulnerable `@whiskeysockets/baileys@7.0.0-rc.9`, which was finally updated via the PR merge.

### **Feature Requests & Roadmap Signals**
The roadmap is currently shifting toward **cross-platform runner compatibility** and **session persistence**.
*   **Issue #4543** signals a need for a "Network mailbox" to decouple session runners from host path mounts, enabling Kubernetes and sandbox runtimes.
*   **Issue #4538** requests "Approvals that outlive the timeout," allowing agents to act on late clicks after an approver’s initial approval window expires—a UX improvement for asynchronous approval flows.
*   **PR #4541** adds the `/add-deja` skill, indicating a roadmap focus on long-term memory integration for agent groups.

### **User Feedback Summary**
User feedback reveals two distinct pain points. First, **Signal users** are experiencing a breakage in media consumption; the inability for the agent to open attachments sent via DM renders the integration partially non-functional for visual tasks. Second, **remote/high-scale users** are frustrated by the requirement for a shared session directory, which blocks usage in Kubernetes, remote servers, and sandboxed environments. These issues suggest a divergence in user experience between local Docker users and cloud-native deployments.

### **Backlog Watch**
Several items require maintainer triage to unblock contributors:
*   **Issue #3174** ([Open, created 2026-08-01](https://github.com/qwibitai/nanoclaw/issues/3174)): A critical fix for rootless Docker support for agent containers. This issue has been open for over three months and, if unresolved, limits the project's usability for security-conscious users running Docker without root privileges.
*   **PR #4548** ([Open](https://github.com/qwibitai/nanoclaw/pull/4548)): A dependency bump for `better-sqlite3` from 13.0.3 to 13.2.0. While routine, maintaining up-to-date database drivers is essential for stability.
*   **Issue #4540** ([Open](https://github.com/qwibitai/nanoclaw/issues/4540)): A "Cold-start transcript rotation" bug where lengthy sessions are silently dropped upon hitting usage limits, forcing users to restart conversations without handover.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest
**Date:** 2026-11-23

## 1. Today's Overview
The NullClaw project shows minimal activity as of 2026-11-23. With no issues updated in the last 24 hours and a closed issue count of 0, the project appears to be in a low-velocity maintenance phase. The most significant recent event is a single PR merged/closed in the last day, suggesting focused but limited development progress. The absence of new releases and open issues indicates the project may be stabilizing or awaiting external dependencies (such as the MartLLM integration noted in the active PR).

## 2. Releases
No new releases were published today. The project has no tagged releases in the current view. Given the lack of recent release activity, users should refer to the main branch for the latest stable build, keeping in mind the recent MartLLM provider integration pending final merge.

## 3. Project Progress
The singular data point for project progress is PR #1092, which was updated on 2026-11-22 and likely merged or closed around the digest timestamp. This PR adds MartLLM as an OpenAI-compatible gateway, updating the integration from the previous UberLLM service. The change reflects a rebranding/renaming effort rather than a fundamental feature addition, maintaining backward compatibility with existing API keys while pointing to the new service endpoint at https://api.martllm.com/v1.

## 4. Community Hot Topics
The most active item in the community is PR #1092 itself, which has seen updates as recently as 2026-11-22. With zero comments logged and no 👍 reactions recorded in the data summary, community engagement on this PR appears minimal despite the update. The underlying need appears to be integration with the MartLLM service, providing users with an alternative OpenAI-compatible LLM gateway. The lack of community reaction may indicate the change is uncontroversial or that the user base has not yet noticed the update.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The open issue count of 0 and closed count of 0 suggest a stable period with no active defect reports. The primary stability concern would be the transition from UberLLM to MartLLM noted in PR #1092; however, the PR description explicitly states that "the old uberllm.dev addresses keep working," mitigating disruption risk for existing users.

## 6. Feature Requests & Roadmap Signals
No feature requests or roadmap signals are discernible from today's data, as there are no new issues or discussion PRs. The roadmap appears to be currently focused on provider integrations, as evidenced by the MartLLM addition. Future feature development will likely continue along this provider-integration trajectory, though without new issue activity, it is difficult to predict specific upcoming functionalities beyond maintaining and expanding compatible LLM gateways.

## 7. User Feedback Summary
User feedback data is sparse for this digest date. The primary observable user impact is the MartLLM gateway addition in PR #1092, which aims to streamline access to LLM services. With no reported dissatisfaction or pain points in the data, user satisfaction appears stable. The "same accounts and API keys" maintenance described in the PR suggests the development team is prioritizing a seamless transition experience, which typically correlates with positive user outcomes for existing customers.

## 8. Backlog Watch
The project backlog shows 0 open issues and 0 closed issues from the last 24 hours, indicating no backlog accumulation or resolution activity. The primary item requiring maintainer attention is PR #1092, which was last updated on 2026-11-22. Despite being in an "OPEN" state in the data snapshot, the recent update activity suggests the maintainer is actively working on this MartLLM integration. No other long-unanswered items are present, as the issue tracking system appears currently quiescent.

---
*Data source: GitHub repository github.com/nullclaw/nullclaw, analyzed 2026-11-23*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

### IronClaw Project Digest
**Date:** 2026-11-23
**Source:** [GitHub Repository](https://github.com/nearai/ironclaw)

---

#### 1. Today's Overview
IronClaw is currently in a low-activity state with no code changes merged or released in the last 24 hours. The project has only one open issue reported in the last day, suggesting a period of stabilization rather than active development. The sole active issue concerns timeout configuration for local Large Language Models, indicating the project is being used in hosted staging environments with local Ollama integrations. Overall project health appears stable, with maintainers likely focusing on issue triage rather than feature shipping at this time.

*GitHub Links: [Repository](https://github.com/nearai/ironclaw), [Issues](https://github.com/nearai/ironclaw/issues), [Pull Requests](https://github.com/nearai/ironclaw/pulls)*

---

#### 2. Releases
No new releases were published in the last 24 hours. The most recent version remains **1.4.1**, released on 2026-11-15. There are no breaking changes or migration notes to report for this digest period.

*GitHub Links: [Releases Page](https://github.com/nearai/ironclaw/releases)*

---

#### 3. Project Progress
Zero Pull Requests were merged or closed today. The project's PR pipeline is currently empty, indicating no code contributions are being reviewed or merged in this session. This aligns with the overall low velocity observed in the metrics, suggesting the maintainers may be in a code freeze, focusing on documentation, or waiting on external contributions.

*GitHub Links: [Pull Requests](https://github.com/nearai/ironclaw/pulls)*

---

#### 4. Community Hot Topics
The community hot topic is **[Issue #8172](https://github.com/nearai/ironclaw/issues/8172)**, the only issue updated in the last 24 hours. With 1 comment and 0 upvotes, it reflects a specific QA concern regarding `PRIMARY_MODEL_CALL_IDLE_TIMEOUT` configuration for slow local LLMs. The issue was created on 2026-11-15 and updated on 2026-11-22, showing sustained user interest. The underlying need is clear: users deploying local Ollama providers require configurable timeout settings to accommodate slower model inference times without triggering false idle-detection triggers.

*GitHub Links: [Issue #8172](https://github.com/nearai/ironclaw/issues/8172)*

---

#### 5. Bugs & Stability
The reported issue #8172 represents a stability concern rather than a crash or regression. It falls under the "QA Bug" category and relates to the Agent loop → model call idle watchdog mechanism in HostManagedLoopModelPort/LLM provider timeout handling. The severity is moderate: it does not cause system failure but can disrupt workflows for users running local LLMs with extended inference times. No fix PRs exist currently, as the issue is still being discussed/queued.

*GitHub Links: [Issue #8172](https://github.com/nearai/ironclaw/issues/8172)*

---

#### 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap signals are evident from today's data. The sole issue is a configuration/bug report, not a feature ask. However, the concern around `PRIMARY_MODEL_CALL_IDLE_TIMEOUT` suggests a roadmap need for more granular LLM provider timeout controls. This type of configurability often precedes support for newer model types or improved local deployment workflows. It is plausible this will be addressed in a minor 1.4.x patch rather than a major version.

*GitHub Links: [Issue #8172](https://github.com/nearai/ironclaw/issues/8172)*

---

#### 7. User Feedback Summary
User feedback, as captured through the recent issue, highlights a pain point for self-hosted and local LLM deployments. The user is running a hosted-staging "crab shack" environment with Ollama, indicating IronClaw is being used for local AI agent workflows. The dissatisfaction stems from default timeout values being too aggressive for local hardware, forcing a trade-off between responsiveness and model capability. There is no indication of broader dissatisfaction with the platform itself, but rather a need for tuning parameters that match diverse deployment environments.

*GitHub Links: [Issue #8172](https://github.com/nearai/ironclaw/issues/8172)*

---

#### 8. Backlog Watch
**Long-unanswered Issue:** None identified beyond the current 24h window. Issue #8172 was created on 2026-11-15 and updated most recently on 2026-11-22, so it does not yet qualify as "long-unanswered" in the traditional sense, but it requires maintainer attention.

**PRs needing attention:** Zero open PRs exist, so no merge-blocking items are pending.

*GitHub Links: [Issues](https://github.com/nearai/ironclaw/issues), [Pull Requests](https://github.com/nearai/ironclaw/pulls)*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest**
**Generated on:** 2026-11-23
**Source:** [netease-youdao/LobsterAI GitHub](https://github.com/netease-youdao/LobsterAI)

### 1. Today's Overview
LobsterAI, the open-source personal AI assistant built on the DeepSeek Harness (DSH) architecture, is currently in a high-velocity stabilization phase. Following a major migration series from the OpenCLaw architecture to DSH (accomplished over the last several days), the project exhibits zero open issues and 13 merged pull requests from the last 24 hours. This indicates a dedicated focus on technical debt reduction, performance optimization, and ensuring the DSH migration is rock-solid rather than adding new, untested features. The community appears to be in a "cleanup and polish" mode, prioritizing instant startup and reliability over novel experimentation.

### 2. Releases
**No new releases were published today.** The project has not tagged a new version following the recent DSH migration acceptance fixes. Given the volume of merged PRs (specifically the "6/6" fix series), a release is likely imminent to tag the stabilized DSH-enabled build.

### 3. Project Progress
Today saw the completion of a critical six-part acceptance fix series (`feat/migrate-openclaw-to-dsh`) designed to stabilize the core DSH integration. Key advancements include:
*   **Performance & Startup:** PR #3157 optimizes cold-start latency, enabling the main UI to launch instantly while DSH boots in the background.
*   **DSH Unification:** PR #3155 unifies native `web_search` routing and retires the legacy web-search server, streamlining the toolset.
*   **MCP & OAuth Hardening:** PR #3150 hardens the Model Context Protocol (MCP) sync, OAuth 2.1 bridges, and tool filters.
*   **Companion & Skills:** PR #3156 replaces proactive hints with on-demand context actions, and PR #3149 repairs the skills runtime environment and web-search sandbox.

### 4. Community Hot Topics
The most significant activity today is centered on the DSH migration. The "Latest Pull Requests" list is dominated by PRs #3157 through #3153, all authored by `fisherdaddy` and merged within hours of creation.
*   **#3157** (Instant UI Launch): Addresses the "cold-start" problem, a common pain point for desktop AI assistants.
*   **#3155** (Web Search Routing): Reflects the community's need for reliable, unified search capabilities within the new DSH framework.
*   **#3156** (On-Demand Actions): Shifts the companion interface from passive hints to active, contextual retrieval, likely responding to user feedback on noise/relevance.

### 5. Bugs & Stability
Stability is the dominant theme today. The "fix" PRs (#3146 through #3153) form a comprehensive series addressing critical regressions introduced during the DSH migration:
*   **CRITICAL:** PR #3153 fixes a `TypeError` in `lobster_enable_tools` where `output.render` was returning a raw string instead of the required `ContentBlock[]`, which would have caused the application to crash on tool usage.
*   **HIGH:** PR #3128 restores in-app browsing functionality using the DSH engine, ensuring browser activity is reflected in Cowork sessions.
*   **MEDIUM:** PR #3152 fixes scheduled task working directory binding and recovers pending prompts on reload, preventing task loss.

### 6. Feature Requests & Roadmap Signals
While no new feature requests were merged today, the migration series itself signals the roadmap. The project is currently prioritizing **parity and reliability** over innovation. Signals suggest the next version will focus on:
*   **Scheduled Task Optimization:** Fixes in #3152 indicate a push for robust background task management.
*   **Companion Polish:** The shift to on-demand context actions (#3156) suggests a roadmap intent to make the AI companion less "noisy" and more surgically helpful.

### 7. User Feedback Summary
User feedback, as reflected in the merged PRs, centers on the transition experience. The migration from OpenCLaw to DSH has been intense, with users likely experiencing friction during the switch. The current activity suggests the maintainers are actively listening to "end-user cold-start latency" and "companion hint" complaints, trading raw new features for a snappier, more reliable assistant that "just works" upon launch.

### 8. Backlog Watch
*   **#3151 (Repair model compat, office editing, etc.):** While merged today, this was the culmination of a 6-part series. Watch for any follow-up issues regarding "model compatibility" now that the migration is complete.
*   **Documentation Updates (#3154):** Though closed, the update to bilingual guides for DSH is vital for onboarding new contributors and users. Ensure the "Getting Started" docs are current if you are trying the project for the first time.
*   **OpenCLaw Deprecation:** With the DSH migration largely completed in this timeframe, watch for announcements regarding the eventual sunset of the OpenCLaw backend.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-11-23

## 1. Today's Overview
Moltis is currently in a low-activity state with minimal development momentum. The project received only a single issue update in the last 24 hours, while the pull request pipeline remains entirely dormant—zero new PRs, zero merges. The absence of new releases further confirms that development has either stalled or is proceeding on a private branch. The critical issue at hand involves a protocol version incompatibility that blocks integration with modern MCP servers, representing a significant functional regression for users relying on current server ecosystems.

## 2. Releases
No new releases were published today. The project has no tagged releases in the observed window, indicating either an early-stage development cycle or a maintainer hiatus. Without a recent release tag, users are advised to exercise caution when pulling from the default branch, as the state of the codebase may not reflect stabilized functionality.

## 3. Project Progress
No merged or closed pull requests were recorded today. The contribution graph shows a complete standstill in the merge pipeline, with the open issue remaining the sole activity point. This lack of merge activity suggests that either the issue backlog is unaddressed, or maintainers are awaiting external input (e.g., server protocol changes, contributor onboarding) before proceeding with code integration.

## 4. Community Hot Topics
The most pressing community concern is **Issue #1326**, which has garnered zero comments and zero reactions since its creation yesterday. The issue reports that the MCP client hardcodes the protocol version `2024-11-05` during the `initialize` handshake and in the `MCP-Protocol-Version` header. Modern MCP servers—exemplified by Basecamp—that have migrated to the `2025-06-18` revision automatically reject this handshake, rendering the integration non-functional despite successful OAuth authentication. The issue URL is: [moltis-org/moltis Issue #1326](https://github.com/moltis-org/moltis/issues/1326).

## 5. Bugs & Stability
The sole reported issue (#1326) is functional in nature rather than a crash or data-loss bug, but it constitutes a **high-severity regression** for interoperability. The bug prevents Moltis from connecting to any MCP server running protocol version 2025-06-18 or later, effectively locking out users from contemporary server ecosystems. No fix PR exists in the repository at this time; the issue remains entirely open and unaddressed by maintainers.

## 6. Feature Requests & Roadmap Signals
No feature requests or roadmap signals are evident in the current data feed. The absence of new PRs or discussion threads suggests that the project’s feature pipeline is either frozen or being tracked outside the public issue tracker. Without open design discussions, it is impossible to predict near-term deliverables. The roadmap appears to be dictated solely by the resolution of the protocol version compatibility issue.

## 7. User Feedback Summary
The user base currently faces a binary experience: OAuth authentication completes successfully, but the subsequent MCP handshake fails due to the hardcoded protocol version. This creates a particularly frustrating scenario where users invest time in configuring OAuth flows only to find the client unusable against modern servers. The feedback implied by Issue #1326 indicates a demand for dynamic protocol negotiation or, at minimum, an configurable version bump to align with current server standards.

## 8. Backlog Watch
**Issue #1326** is the only item in the recent backlog and carries immediate importance due to its blocking nature. Created and updated on 2026-11-22, it has yet to receive any maintainer comment or contribution. Additionally, the pull request queue is empty, suggesting no pending code reviews or contributions are in-flight. Maintainers should prioritize this issue to restore compatibility with the latest MCP protocol revisions and unblock the user community.

***

*Data source: GitHub repository moltis-org/moltis, queried 2026-11-23. Activity metrics reflect the 24-hour window preceding the digest timestamp.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

### CoPaw Project Digest
**Date:** 2026-11-23

#### 1. Today's Overview
CoPaw (agentscope-ai/QwenPaw) shows high short-term activity with 19 issues and 25 PRs updated in the last 24 hours. The project is currently in a beta release cycle (v2.3.1-beta.1), with a significant focus on console stability and frontend polishing. Activity is driven by a mix of critical bug fixes, UI/UX refinements, and modular SDK work. The volume of issues suggests a maturing platform hitting edge cases in long-context and multi-modal handling.

#### 2. Releases
*   **v2.3.1-beta.1** (Released today)
    *   **Changes:** This beta release includes a fix for proxy buffering on chat and tool-call SSE streams, a version bump, and the beginning of tool call recording logic.
    *   **Breaking Changes/Migration:** As a beta, it is part of the v2.3.x series. No explicit breaking changes are noted in the release notes, but users should expect standard beta polishing.

#### 3. Project Progress
*   **Merged/Closed PRs:** 4 PRs were merged/closed today.
    *   **#8862:** Fixed a tool configuration refresh loop where opening the Web Search config dialog triggered autosave even without user changes.
    *   **#8855:** Fixed Windows timing and encoding issues in Plugin SDK tests.
    *   **#8853:** Added a suggestion to retry failed context compaction.
    *   **#8487:** Improved scroll context management for tool results, recognizing URL-referenced media during folding.
*   **Feature Advancement:** PR #8859 focused on clarifying confirmation and approval interactions in the console, improving user workflow clarity.

#### 4. Community Hot Topics
*   **#8864 (Bug, 1 comment):** Streaming replies abort mid-output with `RemoteProtocolError` and are not retried. This is a significant reliability issue for long-running conversations.
*   **#8863 (Bug, 1 comment):** ReMe tag indexing permanently fails on Windows with an "Invalid workspace-relative tag-index path." Affects both v2.3.0 and v2.3.0.post1.
*   **#8860 (Feature, 1 comment):** Proposal to further decouple the Harness into pluggable Execution SDKs while retaining QwenPaw host capabilities.
*   **#8854 (PR, focused):** Makes conversation history keyboard focusable, directly addressing the widespread usability issue noted in #8844.
*   **#8851 (Bug, 1 comment):** Import map remaps entry chunks to `?v=…`, causing bundles to load twice and preventing plugin routes from registering.

#### 5. Bugs & Stability
*   **Critical:** #8864 (Streaming abort) and #8863 (ReMe index failure on Windows) are the most urgent stability bugs reported today. #8836 (config password component causing page refresh loops) was recently fixed by #8862.
*   **High:** #8856 reports that content exceeding container width (tables/long lines) is cut off without horizontal scroll in the Web Console. #8844 is a long-standing issue regarding the console message list not being keyboard-focusable.
*   **Medium:** #8833 and #8832 involve CLI routing bugs where `/api` prefixes are duplicated, causing 404/405 errors.

#### 6. Feature Requests & Roadmap Signals
*   **#8860** highlights a strategic direction to modularize the Execution SDK, following the recent release of `qwenpaw-harness-codex`. This suggests a roadmap toward a more decoupled, extensible architecture.
*   **#8827** requests isolating agent sessions by Telegram forum topic, indicating demand for better multi-session management in social channels.
*   The volume of UI/UX bugs (#8844, #8845, #8856) suggests the frontend console is a current focal point for polish prior to stable releases.

#### 7. User Feedback Summary
Users are reporting frustration with "silent failures" and UI unusability. Key pain points include:
*   **Console Usability:** Non-focusable message lists (mouse-only navigation) and overflowing markdown tables.
*   **Reliability:** Scheduled tasks failing on the 2nd model call (#8762) and streaming aborts (#8864).
*   **Channel Integration:** WeChat channel silently dying after long runs (#8814) and difficulties adding Copaw to WeChat groups (#2674).
*   **Configuration:** Confusing "Compact Failed" messages suggesting `/clear` risks data loss (#8848).

#### 8. Backlog Watch
*   **#8814** (Closed/Paused): The WeChat channel silent death issue. Although closed recently, the root cause (`RESPONSE_SCOPE_LIMIT`) is a structural bottleneck worth monitoring for re-emergence.
*   **#8848:** The "Compact Failed" warning that suggests `/clear`, potentially misleading users into losing context.
*   **#8830:** Windows orphaned `llama-server.exe` processes. A critical stability issue for local model users that has persisted since Nov 20 without a merged fix in the latest activity.
*   **#8861:** The release-duty verification for v2.3.1-beta.1, requiring maintainer attention to ensure the beta criteria are met before the deadline.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw Project Digest**
*Generated on: 2026-11-23*
*Source: github.com/qhkm/zeptoclaw*

### 1. Today's Overview
ZeptoClaw exhibited minimal activity on 2026-11-23, with only a single issue and a single pull request updated in the last 24 hours. The project status is currently stable but stagnant, characterized by a focus on dependency hygiene and security audit maintenance. The lone activity thread involves the removal of outdated security advisory entries, suggesting the maintainer is actively cleaning up technical debt rather than implementing new features. With no new releases and only two total engagements today, the project appears to be in a maintenance phase, relying on community contributions for progression.

### 2. Releases
No new releases were published today. The repository currently has no listed releases in the data overview. Given the nature of the updated activity (dependency management), the next release is likely to be a patch version focusing on audit tooling updates rather than a major feature drop.

### 3. Project Progress
The most significant progress today was the opening of **PR #727**, titled "chore(deps): remove 2 advisory ignore entries that no longer match Cargo.lock." This pull request is directly linked to the current issue backlog and represents the primary development activity. The PR aims to clean up the `.cargo/audit.toml` file by removing entries that no longer serve a purpose because the affected crates have either been patched or removed from the `Cargo.lock` file. No merged or closed PRs were recorded besides this new open contribution.

### 4. Community Hot Topics
The most active discussion centers on **Issue #726** "[OPEN] 2 advisory ignore entries no longer match anything in `Cargo.lock`", created and updated today by user zyl71. The issue highlights a discrepancy where `.cargo/audit.toml` still contains ignore entries for specific advisories, but the corresponding crates are absent from the current `Cargo.lock` on the default branch. This has attracted attention because it represents a "false positive" scenario for security auditing. The linked **PR #727** is the proposed solution, with the summary noting that the entries no longer suppress anything and can be safely removed. The underlying need here is maintaining an accurate and non-noisy security configuration.

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the 24-hour window. The single issue (#726) is not a bug report regarding functionality but rather a configuration hygiene issue regarding advisory ignore lists. There are no open fix PRs other than the aforementioned #727, which addresses the cleanup of the audit configuration. Stability is not compromised, but the project could benefit from a cleanup cycle to ensure audit configs remain relevant.

### 6. Feature Requests & Roadmap Signals
There are no feature requests or roadmap signals evident in today's data. The activity is purely operational/chores related to dependency management. Users looking for new features or enhancements will find little signal in the current activity stream; the project's roadmap signals are currently dominated by maintenance tasks like audit.toml management.

### 7. User Feedback Summary
User feedback today is minimal and technical in nature. The primary "pain point" identified is the accumulation of stale configuration entries in `.cargo/audit.toml`. Users running security audits may encounter misleading outputs if ignore lists are not kept in sync with the actual dependencies present in `Cargo.lock`. The satisfaction level appears tied to the project's ability to maintain a clean, functional security scanning setup. The current user base seems composed of contributors who are attentive to the `.cargo` configuration ecosystem.

### 8. Backlog Watch
**Issue #726** is the critical backlog item requiring maintainer attention. Despite being created today, it flags a state where the `.cargo/audit.toml` is out of sync with the `Cargo.lock` file. If not addressed, this could lead to audit noise or, conversely, a false sense of security if the logic is misunderstood. **PR #727** is the immediate action item to resolve this. Maintainers should review this PR to ensure the cleanup does not inadvertently remove necessary security suppressions for other crates.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Date:** 2026-11-23

## 1. Today's Overview
ZeroClaw exhibits robust maintainer activity with 50 PRs and 10 issues updated in the last 24 hours. The project is in a healthy state of dependency management and infrastructure refinement, with 3 open issues and 11 open PRs currently active. No new releases were published today, indicating a stable main branch. The volume of Dependabot updates (39 closed PRs) suggests active ecosystem maintenance, while the two security-focused open issues (#12422 and #12666) highlight ongoing attention to identity-access and runtime safety.

## 2. Releases
No new releases were published today. The project maintains its most recent tagged version from prior cycles, with development continuing against the `master` branch.

## 3. Project Progress
Fifty PRs were processed in the last day, dominated by dependency bumps and quality-of-life fixes. Key advancements include the retirement of the Raspberry Pi deploy script (#12622), the correction of OIDC certificate actor recording (#12534), and the resolution of the delegate tool time-of-day issue (#12488). These changes reflect a focus on reducing technical debt, improving developer ergonomics, and securing the credential propagation chain.

## 4. Community Hot Topics
The most discussed open issue is #12422 ([RFC: Scoped use of operator-managed service credentials](https://github.com/zeroclaw-labs/zeroclaw/issues/12422), 13 comments), which proposes a security layer allowing operators to authorize agents against services without exposing underlying credentials to the model or chat context. This signals a community demand for fine-grained, privacy-preserving authorization. The bug report #12666 ([delegate accepts unknown argument and drops it silently](https://github.com/zeroclaw-labs/zeroclaw/issues/12666), 6 comments) reveals a schema validation gap in the `delegate` tool, where unknown arguments are silently discarded—prompting immediate concern about silent data loss in agent workflows.

## 5. Bugs & Stability
Two stability concerns emerged today:
- **#12666** (S3 severity): The `delegate` tool's `additionalProperties: false` schema rejects unknown arguments but drops them without error, risking silent task failures.
- **#12681** (New, "Bug waa"): A minimal, poorly described issue flagged today requiring triage.
No crash-critical bugs were merged today, though the merged #12488 fix addressing delegated agent clock synchronization improves runtime reliability.

## 6. Feature Requests & Roadmap Signals
The RFC #12422 on scoped operator credentials represents a forward-looking roadmap signal, likely influencing future authentication and delegation models. The closed PR #12540 documenting routing behavior when decision answers are ignored suggests the SOP (State of Processing) system is being refined for edge-case robustness, potentially paving the way for more predictable agent decision-flows.

## 7. User Feedback Summary
Users are actively engaged in infrastructure and security hardening. The dominance of Dependabot-mediated PRs (39 of 50) indicates the community relies on automated dependency health. Manual contributions focus on platform-specific tooling (Raspberry Pi, CI gates) and multimodal provider reliability (JPEG version auditing). The open issues reveal a user base concerned with credential privacy (#12422) and tool integrity (#12666), suggesting a need for clearer error handling and tighter security boundaries.

## 8. Backlog Watch
- **#12422** (RFC, 13 comments, updated today): Requires maintainer decision on the scope and design of operator-managed credential delegation.
- **#12666** (Bug, 6 comments, opened today): Awaiting maintainer analysis of the `delegate` schema enforcement and error signaling strategy.
- **#12681** (Task, 0 comments, opened today): Needs immediate triage to determine validity and scope.
- **#11945** (Closed/In-progress, 1 comment, updated today): Long-running SOP stale-copy test coverage task—maintainers should verify if the associated branch cleanup from #11861 is complete.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*