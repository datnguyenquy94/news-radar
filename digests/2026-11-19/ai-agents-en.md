# OpenClaw Ecosystem Digest 2026-11-19

> Issues: 172 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-19 06:59 UTC

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

**OpenClaw (github.com/openclaw/openclaw) Project Digest**
**Date:** 2026-11-19

### 1. Today's Overview
OpenClaw remains in an intense active development phase ahead of its 2026.11.5 release cycle. The project processed 500 PRs and 172 issue updates in the last 24 hours, indicating extremely high maintainer velocity but also significant operational turbulence. While no new releases were tagged today, the volume of merged fixes and the closing of long-standing bugs suggest a push toward stabilization. However, a cluster of runtime-verification and Gateway startup failures (particularly on PostgreSQL and Windows) threatens the candidate admission pipeline, requiring immediate maintainer focus.

### 2. Releases
**No new releases were published today.** The candidate verification pipeline is currently strained, with multiple issues (#196987, #201058, #201561) reporting that `openclaw update` candidates fail runtime verification or leave Gateways in a stopped state post-doctor. The latest stable candidate remains effectively 2026.11.5-beta.2, pending resolution of these admission blocker bugs.

### 3. Project Progress
**500 PRs** were updated in the last 24 hours, with 201 merged/closed and 299 still open.
*   **Core Infrastructure & Performance:** Significant PRs landed to reduce PostgreSQL data overhead in SQLite workers (#201681) and improve update baseline capture efficiency (#200497, #201690). PR #201624 optimizes session history paging by preventing redundant reader closures.
*   **CLI & UI Polish:** Fixes landed for macOS port inspection (#201553), Windows login-item Gateway stop persistence (#197233), and Control UI text size rendering for code blocks (#201686). The update notice UI was improved to handle stale tabs (#201683).
*   **Plugin & Provider Ecosystem:** Added JZSTOKEN OpenAI-compatible provider setup docs (#201649) and integrated StepFun `step-5-preview` as the default model (#153525).

### 4. Community Hot Topics
The most active discussions today center on **Gateway stability during updates** and **session transcript integrity**.

*   **#119720** [P1, 29 comments]: The top issue by engagement details a critical bug where "Synchronous agent persistence and transcript maintenance block the Gateway event loop at scale." Despite partial repairs (#140231, #138984), the event loop bottleneck persists, representing a core performance blocker for high-scale deployments.
*   **#198218** [P1, 10 comments]: A recent livelock where `doctor --fix` and `update repair` enter unbounded loops in the update-run admission reader when the Gateway is stopped. This directly blocks operators attempting to recover from failed upgrades.
*   **#201058** [P1, 3 comments]: Cold Gateway startup on PostgreSQL fails during secrets plugin metadata preparation, suggesting synchronous initialization on the main thread is a regression from previous versions.
*   **PR #199379** [P1]: Merged today to fix Talk voice consults failing when the model runs on Claude CLI or a locked native harness, resolving a significant user friction point.

### 5. Bugs & Stability
The bug landscape is dominated by **update/runtime verification failures** and **session state corruption**.

*   **Critical Blockers:**
    *   **#196987:** Update 2026.9.9 → 2026.11.3 fails with `runtime-verification-failed`, auto-rolling back. This is a recurring theme in the 24h data.
    *   **#201561:** Windows npm upgrade leaves Gateway stopped; `update repair` times out in `pre-plugin doctor`.
    *   **#198218:** Doctor/update maintenance livelocks when Gateway is stopped.
*   **Session/Transcript Crashes:**
    *   **#201540:** Main session actor permanently rejects turns via `session-rebound`, blocking heartbeat and memory dreaming.
    *   **#199155:** Transcript row committed by CLI `message send` is invisible to the Gateway, causing UNIQUE constraint failures.
    *   **#157712:** CLI state reads leak 162 MB snapshots, accumulating to 23 GB in 25 minutes.
*   **Fixes in Flight:** Several PRs target these (#200497 targets the transcript loading bottleneck from #119720; #201661 addresses snapshot disk space leaks).

### 6. Feature Requests & Roadmap Signals
Feature activity is balanced between UI enhancements and provider expansions.
*   **Agent Grouping:** PR #197247 proposes grouping agents into named, collapsible teams in the Control UI, derived from existing team wiring—an UX improvement for power users.
*   **Model Support:** The integration of `step-5-preview` (#153525) and the new JZSTOKEN provider guide (#201649) signal continued expansion of multi-provider compatibility.
*   **Read-Only DB Optimization:** The volume of PRs addressing snapshot reduction (#201681, #201690) indicates a roadmap focus on reducing storage overhead and improving cold-start performance.

### 7. User Feedback Summary
User sentiment in the last 24 hours reflects **anxiety around upgrade stability** and **friction in multi-provider setups**.
*   **Upgrade Friction:** A significant subset of issues (#200289, #200224, #201561) describe updates taking hours, failing with SQLite locks, or leaving Gateways inoperable. The "data at risk" and "livelock" states are major pain points.
*   **Provider Gaps:** The addition of JZSTOKEN and StepFun models suggests users are actively seeking broader LLM compatibility beyond the default providers.
*   **UI Usability:** Comments on #200781 (Sessions sidebar rendering only headers) and #183048 (Outbound queue `unknown_after_send` opacity) indicate the Control UI is becoming cluttered and unintuitive as feature sets expand.

### 8. Backlog Watch
These long-unanswered or maintainer-blocked items require urgent attention to unblock the 2026.11.5 release:

*   **#119720** (29 comments): The "event loop bottleneck" issue is the most critical backlog item. Despite linked PRs, the core persistence problem remains open and impacts scale.
*   **#198218** (10 comments): The livelock in update-run admission is blocking recovery for users stuck between versions.
*   **#201058** (3 comments): PostgreSQL startup failure blocks the new PostgreSQL state migration path.
*   **#196987** (3 comments): The `runtime-verification-failed` rollback loop is the most frequently encountered update blocker in the issue tracker.
*   **PR #201661** (0 comments): A small but critical fix for SQLite snapshot disk space leaks that has been open since today and requires a maintainer merge.

---

## Cross-Ecosystem Comparison

### 1. Ecosystem Overview

The 2026-11-19 snapshot reveals a personal AI agent and assistant ecosystem in a state of high-velocity refinement. Rather than pioneering fundamental Large Language Model (LLM) capabilities, the landscape is characterized by fierce competition in **integration stability, cross-platform compatibility, and workflow orchestration**. The dominant trend is the migration of core features into plugin ecosystems (e.g., CoPaw, ZeroClaw) to achieve modularity, while infrastructure projects like OpenClaw grapple with the operational turbulence of high-scale deployments. Security hardening, particularly around protocol handlers and resource access, is a universal concern across mature projects.

### 2. Activity Comparison

The following table summarizes the key metrics from the 24-hour digest for each active project.

| Project | Issues Updated | PRs Merged/Closed | Release Status | Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 172 | 201 | Strained candidate pipeline (2026.11.5-beta.2) | **Critical** (Blockers: update/runtime failures, PostgreSQL startup) |
| **NanoBot** | 6 | 29 | No new release; active development | **High** (Stable focus: WebUI, session handling) |
| **Hermes Agent** | 18 | 50 | v0.23.2+canary released Nov 18 | **High** (Stability push for 0.23.2) |
| **PicoClaw** | 1 | 4 | No new release; upstream sync | **Moderate** (Maintenance/Refactoring) |
| **NanoClaw** | 6 | 25 | v2026.11.0-rc.2 published | **High** (Release Candidate stabilization) |
| **LobsterAI** | 1 | 11 | No new release | **Moderate** (Security regressions addressed) |
| **CoPaw** | 18 | 26 | v2.3.0.post1 released Nov 18 | **Moderate** (Plugin SDK migration, stability) |
| **ZeroClaw** | 5 | 50 | No new release; v0.9.1 prep | **Moderate-High** (Provider infra focus) |
| **NanoClaw** (qwibitai) | 6 | 25 | v2026.11.0-rc.2 published | **High** (Rapid release cycle) |
| **Others** (IronClaw, Moltis, ZeptoClaw, NullClaw) | 0 | 0 | N/A | **Stable/Idle** |

*\*Health Score is a qualitative assessment based on issue severity, release stability, and PR activity volume.*

### 3. OpenClaw's Position

OpenClaw occupies the **highest tier of technical complexity and operational risk** within the ecosystem. Its primary advantage is a massive, active codebase and maintainer velocity, processing 500 PRs in 24 hours, which dwarfs peers like NanoBot (29) and PicoClaw (4). However, this scale is a double-edged sword: OpenClaw suffers from "release turbulence," with critical runtime-verification and Gateway startup failures (PostgreSQL/Windows) blocking the admission pipeline. Technically, it differentiates itself through deep infrastructure focus (PostgreSQL workers, session history paging) and a sprawling plugin/provider ecosystem (StepFun, JZSTOKEN). Community size is the largest, but sentiment is currently dominated by anxiety over upgrade stability rather than feature adoption.

### 4. Shared Technical Focus Areas

Several critical infrastructure needs are emerging across the ecosystem, indicating industry convergence:

*   **Provider Integration & Routing:** ZeroClaw (#11296), CoPaw (MCP/Local models), and OpenClaw (StepFun/JZSTOKEN) are all actively resolving URI/URL routing bugs and expanding multi-provider compatibility.
*   **Update & Migration Stability:** OpenClaw (#196987, #201058), NanoClaw (#4454, #4451), and Hermes Agent (#157677) share a common pain point: failed updates, typechecking failures on hosts without Bun, and installer logic loops that leave systems inoperable.
*   **Security Hardening:** LobsterAI (#2590, #3096) and OpenClaw focus on protocol handler security (localfile://) and SSH/Network boundary validation to prevent injection or data exfiltration.
*   **Session & State Management:** NanoBot (#6717), Hermes Agent (silent prompt loss), and CoPaw (#8811, #8812) are heavily focused on preserving transcript integrity, preventing draft loss, and managing state across chat switches and reloads.

### 5. Differentiation Analysis

The projects diverge significantly in their target user and architectural philosophy:

*   **Infrastructure Giants vs. Polish-Focused UX:** **OpenClaw** and **ZeroClaw** are heavyweight infrastructure projects targeting power users and enterprise deployments, prioritizing deep integration (PostgreSQL, binary size capping, registry reflection) over ease of use. In contrast, **NanoBot**, **PicoClaw**, and **LobsterAI** prioritize rapid UI/UX refinements, Web ergonomics, and "first-time user" experience (hover menus, CSV link previews).
*   **Plugin-First vs. Monolithic Core:** **CoPaw** and **ZeroClaw** are actively extracting features (MCP, Whisper, Local Models) into plugin SDKs to create a leaner core. **OpenClaw** maintains a more monolithic core with a vast external provider map, while **NanoClaw** and **Hermes Agent** balance core functionality with targeted desktop integrations.
*   **Platform Parity:** **Hermes Agent** and **LobsterAI** exhibit strong focus on cross-platform parity (Windows pipe naming, macOS port inspection, GBK CSV encoding), reflecting a user base that spans diverse operating systems, whereas some smaller projects may target specific environments.

### 6. Community Momentum & Maturity

The ecosystem segments clearly into three activity tiers:

*   **Rapidly Iterating (High Velocity):** **ZeroClaw** (50 PRs) and **Hermes Agent** (50 PRs) are in aggressive "merge sprint" modes, prioritizing code health and bug fixes ahead of release candidates. **OpenClaw** is similarly active but burdened by the turbulence of scale.
*   **Stabilizing & Polishing:** **NanoClaw** (rc.2), **CoPaw** (v2.3.0.post1), and **NanoBot** are in post-release stabilization phases, focusing on resolving feedback from recent stable tags and refining existing features rather than adding radical new capabilities.
*   **Maintenance & Idle:** **PicoClaw**, **IronClaw**, **Moltis**, **ZeptoClaw**, and **NullClaw** show low or zero activity, indicating mature, stable projects in "maintenance mode" or awaiting upstream synchronization.

### 7. Trend Signals

For AI agent developers, several industry trends are evident from the community feedback:

*   **The "Update Friction" Crisis:** A pervasive trend across OpenClaw, NanoClaw, and Hermes Agent is the difficulty of upgrading. Users report hours-long update processes, SQLite locks, and Gateways left inoperable. This signals a market need for "zero-downtime" migration strategies and better backward compatibility layers.
*   **Provider Fragmentation & Standardization:** The proliferation of custom providers (JZSTOKEN, StepFun, Parallel, Bedrock, Ollama) is creating "routing" bugs (#11296 in ZeroClaw, URI issues in CoPaw). Developers are signaling a need for standardized API abstractions or "universal" model wrappers to reduce integration overhead.
*   **Security as a Prerequisite for Adoption:** The focus on protocol handler security (LobsterAI `localfile://`) and OAuth standardization (#12449 in ZeroClaw) indicates that security hardening is no longer optional—it is a prerequisite for user trust and production deployment, particularly for desktop companions and gateway services.
*   **Plugin Ecosystem as the Path to Scalability:** The migration of features like MCP, Whisper, and Local Models into plugins (CoPaw, ZeroClaw) suggests that the industry is moving toward a "core harness + plugin" architecture. This allows the core to remain lightweight while enabling rapid feature expansion without destabilizing the main release cycle.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the structured project digest for the NanoBot project for 2026-11-19.

### 1. Today's Overview
NanoBot shows a flurry of activity typical of a project nearing a release cycle, with 29 Pull Requests merged or closed in the last 24 hours compared to only 6 issue updates. The project is currently in a "merge sprint" mode, focusing on stabilizing the WebUI, refining session handling, and improving security sanitization. Despite the high PR throughput, the issue queue remains relatively static, suggesting that maintainers are prioritizing code health and user-facing polish over new feature discovery at this moment.

### 2. Releases
No new releases were published today. The latest release history remains unchanged from previous sessions. Users are advised to track the main branch for the latest bug fixes and performance improvements, as the project appears to be in active development leading towards a future stable tag.

### 3. Project Progress
Significant progress was made in WebUI ergonomics and session management. Key merged PRs include:
*   **PR #6717**: Fixed a critical regression where assistant replies in `message()` notifications were being stripped from history, causing drafts to disappear on repeat requests.
*   **PR #6708**: Improved WebUI startup performance by batching recovery and authenticating before the React renderer loads, making conversations usable faster upon launch.
*   **PR #6712**: Restored the standard startup flow while retaining the performance improvements from the previous recovery batching attempt.
*   **PR #6720**: Fixed a session replay bug ensuring user-attached images are preserved and available for follow-up model requests, preventing "path marker" failures in new agent processes.

### 4. Community Hot Topics
The most discussed items today are a mix of bug fixes and UI refinements.
*   **PR #6723** (Open, 0 comments): Proposes skipping the confirmation prompt for undoable topic deletions in the WebUI to streamline the mobile workflow, where the "Undo" toast is the primary safety net.
*   **PR #6719** (Open, 0 comments): Requests a visual indicator (dashed edge) to show when queued messages have been delivered but not yet "picked up" by the agent, addressing user confusion about message state.
*   **Issue #6718** (Open): A critical compatibility bug where WebUI topic title generation fails for Kimi K3.1 Pro due to a 96-token budget exhaustion, leaving titles stuck as "Untitled".
*   **Issue #6704** (Closed): A recent bug where drafted notification messages vanished from the conversation context, now resolved via PR #6717.

### 5. Bugs & Stability
Stability improvements dominated the day's activity. The most severe regression addressed was the **`message()` notification draft loss** (Issue #6704 / PR #6717), where the assistant's text was incorrectly treated as a tool call and purged from history. Other stability fixes included **PR #6716**, which adds hostname validation to reject control characters and whitespace before DNS resolution, preventing potential SSRF or malformed request exploits. The **SSRF hardening** issue (#6690) remains open, highlighting that blocked network ranges still lack coverage for multicast and reserved IP blocks.

### 6. Feature Requests & Roadmap Signals
Feature requests today centered on WebUI workflow intelligence. **PR #6721** proposes identifying "response inputs" at the start of a model request, allowing queue indicators to accurately reflect which user inputs are being processed. **PR #6714** focuses on "channel continuity," enabling users to continue sessions started in Telegram or other channels directly from the WebUI sidebar without losing context. These signals suggest a roadmap shift toward cross-platform interoperability and smarter session state management.

### 7. User Feedback Summary
User feedback today reflects a tension between **power and usability**. Power users are frustrated by the Kimi K3.1 Pro token budget limit preventing title generation (#6718), while general users benefit from the "Undo" streamlining (#6723) and image replay fixes (#6720). There is a clear demand for better "quietus" features—ways to see if the agent is actually listening to queued messages (#6719)—indicating that users want more transparency in the agent's decision-making process rather than just raw capability.

### 8. Backlog Watch
Several important items require maintainer triage:
*   **Issue #6690 (SSRF Hardening)**: Open since Nov 17. The `_BLOCKED_NETWORKS` list is missing critical ranges (`224.0.0.0/4`, `240.0.0.0/4`, `198.18.0.0/15`). This is a security debt item that could expose users to network attacks if not addressed.
*   **Issue #6649 (Dream Context Truncation)**: Closed on Nov 18, but the underlying bug (Dream only seeing the first 1000 chars of checkpoints) was reported Nov 13. While closed, it highlights a persistent architectural issue with cumulative checkpoint management that may resurface with larger context windows.
*   **PR #6686 (Gateway Refactor)**: Open since Nov 17. A conflict resolution PR aimed at consolidating gateway startup logic. It is blocking or conflicting with other merge efforts and needs maintainer review to unify the codebase.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for Hermes Agent as of 2026-11-19.

### 1. Today's Overview
The Hermes Agent project exhibited high velocity on 2026-11-19, with 18 issues and 50 PRs updated within the last 24 hours. The community is actively addressing a influx of bugs related to the desktop experience, gateway control, and model management. The merge of critical stability fixes, specifically those addressing installer logic and terminal secrets, indicates a push toward hardening the 0.23.2 release cycle before the year's end.

### 2. Releases
**v0.23.2+canary.20261118T064620Z** was released on November 18, 2026. This canary build serves as the immediate precursor to the next stable milestone. While the release notes are minimal in the provided data, the high volume of subsequent PRs merging on November 19th suggests this release is the foundation for the current bug-fixing sprint. No breaking changes are documented in the immediate release metadata, but the volume of "P2" bug fixes suggests a focus on stability over new features for this cycle.

### 3. Project Progress
A significant portion of today's 50 PR activity focused on bug fixes and stability improvements. Key advancements include:
*   **Terminal & Security:** PR #157669 successfully resolved an issue where terminal secrets were persisting in on-disk session snapshots, improving both security and command performance (~2x faster).
*   **Installer Logic:** PR #157689 and #157697 addressed the gateway service installation flow, ensuring that declining the service in `install.sh` now properly prevents installation, resolving a previous logic loop.
*   **A2A Protocol:** PR #157695 and #157693 stabilized A2A task rendering and updated plugin catalog assets, ensuring task IDs and status timestamps remain consistent across reads.

### 4. Community Hot Topics
The most discussed items today reflect a focus on the Desktop gateway and model switching:
*   **Desktop Session Switching (Issue #151269):** A critical bug where switching chats immediately after submitting a prompt causes the prompt to be silently dropped. This has 3 comments and is marked as high impact ("3–4 lost submissions today").
*   **Model Picker Glitch (Issue #108462):** A persistent UI bug where the `/model` picker hides active provider models when a custom provider reuses the same IDs. This has 6 comments and remains a significant UX friction point.
*   **Windows Gateway Pipe (Issue #157685):** A platform-specific bug where a `\\?\`-prefixed `HERMES_HOME` results in a different control pipe name, breaking gateway functionality for Windows users.

### 5. Bugs & Stability
Today saw a surge of "P2" severity bugs, primarily affecting the desktop and gateway layers:
*   **Critical:** Issue #157677 (Installer ignores decline) and #157697 (Windows pipe naming) were not only reported but had corresponding fix PRs merged today (#157689 and #157697 respectively), indicating rapid triage.
*   **High Severity:** Issue #151269 (silent prompt loss on chat switch) remains open with no merge yet, posing a risk to daily usability.
*   **Moderate:** Issue #157667 (Large paste 404 on remote gateways) was fixed via PR #157687, resolving the attachment naming issue for remote connections.
*   **Ongoing Instability:** Issue #157699 describes a gateway loop stall on macOS under heavy load (10+ sessions), which may require architectural changes to the credential pool management.

### 6. Feature Requests & Roadmap Signals
Feature development was active but secondary to stability:
*   **TUI Enhancements:** PR #147317 requests "ghost-text suggestions" for the next prompt in the TUI, aligning Hermes with Claude Code's workflow.
*   **Profile Management:** PR #157694 adds a "profile-chip" to the plugin catalog, indicating work toward better multi-profile desktop isolation.
*   **A2A Compliance:** The updates to `build_agent_card` (Issue/PR #157683/ #157695) suggest a roadmap alignment with the A2A protocol spec, specifically regarding versioning.

### 7. User Feedback Summary
User feedback today highlights a tension between feature richness and stability. The most vocal pain points center on **session management** and **platform parity**. Users report frustration with lost inputs during rapid chat switching and inconsistencies in model selection. Meanwhile, the Windows user base faces specific hurdles with environment variable path handling (`HERMES_HOME`), suggesting a need for more robust cross-platform path normalization. The success of the terminal secrets fix (#157669) is likely a positive signal for user satisfaction regarding security and performance.

### 8. Backlog Watch
Several important items require maintainer triage:
*   **#157692 (Gmail Connector Missing):** A blocker for users relying on Nous Portal integration; currently open with 0 comments.
*   **#157690 (Sandbox Browser Stale Lock):** A critical infrastructure bug where a stale `SingletonLock` prevents the browser from starting after a sandbox recreation, potentially halting automation workflows.
*   **#157684 (Version Label Mismatch):** A cosmetic but confusing bug where `hermes --version` shows the remote commit instead of the local one when behind `origin/main`.
*   **#67693 (Plugin SDK File Preview):** A long-standing feature request (since July 2026) to allow custom file preview handlers in the Desktop Files sidebar, which remains open and may need a maintainer decision on the API design.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest**
**Generated on:** 2026-11-19
**Source:** sipeed/picoclaw (GitHub)

### 1. Today's Overview
The PicoClaw project shows low but focused activity for 2026-11-19. A single issue was closed in the last 24 hours, while four PRs were merged, indicating a period of maintenance and upstream synchronization rather than new feature development. The project is currently in a stable state with no open pull requests blocking merges, and the recent closure of a security-related stale issue suggests good hygiene. Overall, the project health appears robust, driven by recent large-scale upstream merges and infrastructure fixes.

### 2. Releases
No new releases were published today. The latest release cycle appears to have been superseded by the massive upstream sync in PR #2810. Users are advised to pull the latest commit from the `main` branch or wait for the next tagged release following the completion of forward-porting customizations.

### 3. Project Progress
Four PRs were merged and closed today, representing significant consolidation work:
*   **PR #2810:** A massive sync with upstream `main` (1095 commits) and the forward-porting of 6 customizations, including agent loop restructuring and tool reorganization. This is the primary driver of recent progress.
*   **PR #2363:** Fix for WebSocket authentication and header casing standardization.
*   **PR #1546 & #1558:** Merges of multiple smaller fix PRs (#1344, #1342, #1341, #1331, #1480, #1479, #1478, #1473, #1467).

### 4. Community Hot Topics
The most significant community topic is **Issue #3456**, updated on 2026-11-18. It addresses a security risk where a failed approval-hook re-initialization during gateway reload leaves the service serving with ungated tools. With 2 comments and 0 likes, it highlights a critical stability/security concern for users relying on the approval hook mechanism. The related PR activity suggests this is an active area of development.

### 5. Bugs & Stability
The merged PRs indicate a focus on stability:
*   **PR #2363** fixes WebSocket authentication bugs and standardizes header casing, resolving issue #2354.
*   **Issue #3456** represents a latent stability/security bug related to hook re-initialization during reloads. A fix PR likely exists or is in progress given the recent update date.

### 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap signals were generated today. The activity is heavily weighted towards maintenance, bug fixes, and upstream synchronization (PR #2810). The roadmap appears to be aligned with the upstream `sipeed/picoclaw` main branch, with customizations being forward-ported rather than new ideas being proposed.

### 7. User Feedback Summary
User feedback, as reflected in the merged PRs and closed issues, paints a picture of a project undergoing significant internal refactoring. The community is dealing with the teething problems of a restructured codebase (agent loops split, tools reorganized) and authentication standardization. The closed Issue #3456 suggests users rely heavily on the approval hook security feature and need assurances that gateway reloads won't compromise tool gating.

### 8. Backlog Watch
*   **Issue #3456:** Despite being marked [CLOSED] and [stale], it was updated on 2026-11-18. Analysts should verify if this "stale" label is accurate or if the underlying security fix was merged without closing the issue formally, or if it requires re-opening.
*   **PR #2810:** While merged, the "forward-port magicform customizations" aspect warrants watching to ensure the customizations integrate cleanly with the new upstream layout and don't introduce regressions in the agent loop or tool paths.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-11-19
**Source:** [nanocoai/nanoclaw GitHub](https://github.com/qwibitai/nanoclaw)

## 1. Today's Overview
NanoClaw continues its rapid release cycle with the second release candidate for the November 2026 build, `v2026.11.0-rc.2`, now published. The project shows high velocity with 25 PRs and 6 issues closed in the last 24 hours. While issue activity is low in count, the merged PR volume indicates active development focus on bug fixes, provider integrations, and infrastructure hardening. The community appears concentrated on stabilizing the upcoming release rather than debating new features.

## 2. Releases
A new release candidate has been published:
- **v2026.11.0-rc.2**: The second release candidate for the 2026.11.0 stable release. This build represents the expected stable ship unless testing reveals issues, replacing the never-released 2026.10.1. This release candidate includes 9 merged PRs since the previous rc.1, focusing on provider fixes and setup stability.

## 3. Project Progress
**Merged/Closed Activity (Last 24h):**
*   **PR #4466**: Release PR for `v2026.11.0-rc.2`, consolidating 9 changes since rc.1.
*   **PR #4465**: Fixes the Codex AGENTS.md cap issue, restoring full `ncl` and canvas sections for default Slack installs (addressing the 39KB AGENTS.md overflow).
*   **PR #4461**: Critical fix for `/update-nanoclaw` to typecheck agent-runner source on hosts without Bun, preventing live code from going untypechecked.
*   **PR #4456**: Resolves Slack agent welcome messages, ensuring suggested prompts and thread titles now display correctly.
*   **PR #4453**: Improves setup UX by showing provider image rebuild progress within the progress window instead of flooding with raw Docker output.
*   **PR #4467**: Hardening improvement draining host sweeps before shutdown to prevent in-flight work loss.

**Features Advanced:** Fixes for Slack onboarding, Codex image generation behind OneCLI, and update tooling stability.

## 4. Community Hot Topics
The most active discussions center on the imminent release and critical bug fixes:
*   **PR #4466** (Release PR): Highest engagement, detailing the rc.2 cut.
*   **Issue #4454** & **#4451**: Both closed recently, concerning `/update-nanoclaw` typechecking failures and Codex image generation failures with OneCLI. These highlight the community's reliance on OneCLI and the friction when tooling breaks on hosts lacking specific runtimes like Bun.
*   **PR #4465**: Significant for Slack + Codex users, fixing the AGENTS.md size cap that was breaking agent functionality.

## 5. Bugs & Stability
Six bugs were closed in the last 24h, all marked [triage/unresolved] but resolved:
*   **#4454**: `/update-nanoclaw` failing to typecheck on hosts without Bun. **Fix:** PR #4461 merged.
*   **#4451**: Codex agents behind OneCLI unable to generate images. **Fix:** PR #4164 (earlier) / context established.
*   **#4464**: Codex agents losing `ncl` and canvas instructions due to AGENTS.md cap. **Fix:** PR #4465 merged.
*   **#4447**: Setup flooding screen with Docker build output. **Fix:** PR #4453 merged.
*   **#4428**: Setup printing `pkttyagent` errors on hosts without polkit. **Fix:** PR #3798 (historical, likely re-verified).
*   **#4452**: Slack welcome points to prompts that never appear. **Fix:** PR #4456 merged.

**Stability Assessment:** Stability improvements are the dominant theme today, particularly around the update workflow and provider integration stability.

## 6. Feature Requests & Roadmap Signals
While no new feature requests dominated the 24h snapshot, several roadmap signals are evident:
*   **Update Channel Selection:** PR #4084 (opened Oct 13, updated Nov 19) allows new installs to choose their update channel. This is a significant infrastructure feature likely targeted for the 2026.11.0 stable release to manage the `main` vs `stable` channel drift.
*   **Skill Additions:** PR #4468 adds `add-imessage-summaries`, and PR #3322 adds You.com MCP tools, indicating ongoing expansion of the skill ecosystem.
*   **Container Controls:** PR #4469 addresses mounting point writeability, a technical but likely high-user-impact fix for containerized workflows.

## 7. User Feedback Summary
User pain points from the closed issues reveal a focus on **setup friction** and **provider-specific limitations**:
*   **Setup UX:** Users are frustrated by Docker output flooding the screen (#4447) and cryptic polkit errors (#4428) when polkit is absent. The trend is toward hiding technical implementation details from the end-user during setup.
*   **OneCLI Integration:** A recurring theme is the friction between NanoClaw and OneCLI. Issues #4451 and #4454, along with PR #4164, show that image generation and typechecking are broken or degraded when users rely on OneCLI for ChatGPT access rather than a local Codex CLI.
*   **Slack Onboarding:** The Slack bridge continues to be a source of minor but annoying bugs (#4452, #4465), specifically around onboarding prompts not rendering correctly.

## 8. Backlog Watch
*   **Issue #4428** (`pkttyagent` error): Though closed today, this remains a persistent pain point for Linux hosts without polkit. Maintenance should ensure the fix in PR #3798 is robust across systemd versions.
*   **PR #4084** (Update Channel Selection): This PR has been open since October 13 and was updated today. It is a critical backlog item; if not merged into the rc.2 branch promptly, it will delay the channel-selection feature until the next release cycle.
*   **Issue #4464** (AGENTS.md cap): While fixed in PR #4465, the underlying problem of large AGENTS.md compositions is a structural issue the project may need to address long-term (e.g., lazy loading or section splitting) to prevent future caps.

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

**LobsterAI Project Digest**
**Date:** 2026-11-19

### 1. Today's Overview
The LobsterAI project shows moderate daily activity with 11 PRs merged or closed and a single issue updated in the last 24 hours. The project continues its rapid iteration cycle, focusing on stabilizing the desktop companion experience and refining the OpenClaw workflow integration. A notable security regression regarding the `localfile://` protocol handler was addressed and closed, though the underlying path traversal risk remains a long-term concern. Overall, the repository is in a healthy state with active maintenance and a steady flow of bug fixes and feature refinements.

### 2. Releases
No new releases were published today. The latest release history remains unchanged from the previous cycle.

### 3. Project Progress
Eleven PRs were merged or closed today, representing significant advancements across multiple subsystems:
*   **Desktop Companion UX:** PR #3116 fixed the hover menu visibility on first use and in full-screen mode, improving the initial user interaction flow.
*   **Workflow & Configuration:** PR #3117 ensures that installed "Pet Vlog" preset defaults are refreshed upon listing or summoning, preventing stale workflows after catalog updates. PR #3090 and #3114 addressed a critical configuration bug where `executionMode` was being hardcoded to 'local', breaking `auto` and `sandbox` modes upon reload.
*   **Model & Renderer Enhancements:** PR #3115 localized custom tags in the model selector, improving internationalization. PR #3109 added support for CSV encodings (GBK/UTF-8) and in-app Windows link previews for artifact files.
*   **OpenClaw & Artifacts:** PR #3113 compacted skill catalogs and honored deliverable paths, while PR #2790 grouped model choices to improve conversation loading performance.

### 4. Community Hot Topics
*   **#3117** ([Closed]) – Fix for refreshing Pet Vlog preset defaults. High demand for persistent, up-to-date workflow presets.
*   **#3116** ([Closed]) – Fix for desktop companion hover menu visibility. Directly addresses user friction in discovering companion features.
*   **#3115** ([Closed]) – Localization of custom tags in model selector. Reflects the project's growing international user base.
*   **#2590** ([Open]) – Security hardening of MCP stdio commands and external URL boundaries. This is the most critical open issue, attracting zero "thumbs up" but requiring immediate maintainer attention due to its severity.
*   **#3096** ([Closed]) – Localfile protocol handler security. Despite being closed, it remains the most discussed topic regarding platform security.

### 5. Bugs & Stability
*   **Critical:** Issue #3096 was closed today. It reported that the `localfile://` protocol handler serves any absolute path without a root allowlist, posing a significant security risk. The fix likely mitigated the immediate vector, but the lack of a root allowlist suggests the issue may require re-evaluation or a more robust redesign.
*   **Medium:** PR #3114 closed a stability bug where `executionMode` was not being read from SQLite storage, causing `auto` and `sandbox` modes to reset to 'local' after a reload, disrupting workflow continuity.
*   **Low:** PR #3109 fixed a Windows-specific regression where GBK encoded CSV files displayed as garbled text (mojibake) and file paths triggered system open actions instead of in-app previews.

### 6. Feature Requests & Roadmap Signals
*   **Persistent Execution Modes:** The fix in #3090/#3114 signals a roadmap focus on reliable multi-mode execution (local, auto, sandbox), a core feature for power users.
*   **Internationalization:** The tag localization in #3115 suggests ongoing effort to make the model selector accessible to non-English speakers.
*   **Artifact Reliability:** The CSV encoding and link handling fixes in #3109 indicate a push toward making the artifact system more robust for Windows users dealing with local files.

### 7. User Feedback Summary
Users are actively reporting practical, usability-focused bugs. The most prominent feedback revolves around the "first-time" experience—specifically, the visibility of the desktop companion menu (#3116) and the correct loading of preset workflows (#3117). There is also a clear demand for better security defaults around file protocol handling (#3096) and improved stability for non-English language interfaces. The community appears satisfied with the frequency of fixes but remains vigilant about security boundaries.

### 8. Backlog Watch
*   **#2590 (Open since 2026-09-01):** This open issue regarding MCP stdio command validation and URL boundary hardening is the most critical item in the backlog. Despite being updated recently (2026-11-18), it has zero "thumbs up" and requires immediate maintainer review to prevent potential command injection or arbitrary file execution risks.
*   **#3096 (Closed 2026-11-18):** While closed, the maintenance team should verify that the fix for the `localfile://` path traversal is comprehensive and that no similar vectors exist in other protocol handlers.
*   **#3113 (Closed 2026-11-18):** Worth monitoring to ensure the "compact skill catalogs" change does not break existing user workflows or budget constraints in future updates.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

### CoPaw Project Digest
**Date:** 2026-11-19
**Project:** QwenPaw (agentscope-ai/QwenPaw)
**Analysis Period:** Last 24 Hours

---

#### 1. Today's Overview
The CoPaw project (QwenPaw) shows **high activity** with 18 issues and 26 PRs updated in the last 24 hours. The community is actively engaged in bug fixes, plugin SDK expansion, and console UX refinements following the v2.3.0.post1 release. A notable trend is the migration of core features (MCP, local Whisper, local models) into the plugin SDK, signaling a strategic shift toward a leaner, more extensible core. The volume of issues indicates ongoing stability challenges with long-running deployments and channel management, while the PR count suggests a push toward polishing and stabilizing the new plugin architecture.

#### 2. Releases
*   **New Release:** `v2.3.0.post1` (Published 2026-11-18)
*   **Changes:** This post-release primarily addresses feedback from the main v2.3.0 release. Key changes include extracting third-party agents into plugins, quoting response selections in follow-up drafts, and restoring Safari browser support.
*   **Breaking Changes/Migration:** No explicit breaking changes noted for this `.post1` tag, but users upgrading from `v2.3.0-beta.2` reported a regression regarding QQ channel `enabled` flags being silently reset to `false` (Issue #8475), requiring manual config re-enablement.

#### 3. Project Progress
*   **Merged/Closed PRs:** 6 PRs were merged or closed today.
*   **Key Advances:**
    *   **Security:** PR #8810 enforces approval for shell-based email sends, HTTP writes, and uploads in AUTO/SMART modes.
    *   **Loop Stability:** PR #8701 fixed the `DoomLoopGate` to record tool calls appended to a single reply message, addressing the repeated execution loops described in Issue #8712.
    *   **Media Handling:** PR #8785 enforces inline image budgets and rescales after refusals.
    *   **Infrastructure:** PR #8707 persists cron/heartbeat token usage to turn records.
    *   **Cleanup:** PR #8809 bumped the version to `2.3.1b1` (chore).

#### 4. Community Hot Topics
*   **Most Active Issue: #8811 (Bug: Narrow screen message truncation)** - 3 comments. Users report that on narrow screens (mobile/Chrome 1903px), message text and wide content (tables/code blocks) are裁切 (trimmed) without horizontal scroll support. This is a regression reported immediately after the v2.3.0 upgrade.
*   **Most Active Issue: #8812 (Question: Startup diagnostic WARNING flood)** - 2 comments. Users report that `startup_diagnostic` floods the console with WARNING lines, and Channels (DingTalk, Feishu) are unavailable by default until manually updated.
*   **Most Active PR: #8784 (Fix: Keep rollback backups)** - Under review. Fixes a multi-workspace skill rollback race condition that could abandon remaining workspaces.
*   **Trending Discussion: #8808 (Feature: Making QwenPaw Lighter)** - The author announces the start of turning non-core features into plugins, aiming for a "leaner core harness." This aligns with the recent extraction of MCP and local models into plugins (PRs #8469, #8431, #8499).

#### 5. Bugs & Stability
*   **Critical/High Severity:**
    *   **Issue #8814 (RESPONSE_SCOPE_LIMIT):** A hard limit of 128 active response routes causes channels (specifically WeChat) to silently die after prolonged use. No user-visible error, only `-32603 internal error` in logs. **(No fix PR yet)**.
    *   **Issue #8475 (QQ Channel Flag Reset):** The `enabled` flag in `config.json` is silently reset to `false` after config reload/restart, breaking QQ message reception with no warning logs. **(Fix PR not immediately visible in top 26, but highly voted/active)**.
    *   **Issue #8815 (Scheduled Task Visibility):** Background scheduled agent tasks show no messages or progress in the Web Console until execution completes.
*   **Regression:** Issue #8811 describes a UI regression (message truncation) introduced in v2.3.0.post1.

#### 6. Feature Requests & Roadmap Signals
*   **Plugin Ecosystem:** The consistent extraction of MCP (PR #8469), Local Whisper (PR #8431), and Local Models (PR #8499) into plugins indicates a roadmap focus on modularity. Users are requesting a "unified cleanup page" (Issue #6593, closed but still referenced) to manage the accumulated data from these various write paths.
*   **Chat Lifecycle:** Issue #8816 proposes "recoverable deletion, scoped retention, and visibility" for chat storage, suggesting users want better governance over the `sessions/*.json` and `mem_session/dialog/*.jsonl` data paths.
*   **Console UX:** Refinements around CJK emphasis (PR #8133) and theme extensions (Issue #8071) show active polishing of the user interface.

#### 7. User Feedback Summary
*   **Pain Points:**
    *   **UI Responsiveness:** Message content being裁切 (trimmed) on narrow screens is a frequent complaint post-v2.3.0.
    *   **Channel Reliability:** Long-running deployments experience silent channel failures (WeChat) due to scope limits.
    *   **Config Stability:** Silent resets of channel configurations (QQ) cause unexpected downtime.
    *   **Diagnostic Noise:** Verbose WARNING logs at startup obscure actual issues.
*   **Use Cases:** Heavy use of scheduled tasks, multi-agent setups, and long-duration executions. Users are increasingly relying on the plugin SDK to offload heavy computation (Whisper, local models) and browser automation (MCP).

#### 8. Backlog Watch
*   **Issue #8071 (Plugin-facing theme extension):** Open since 2026-10-01 with 21 comments. Requests deeper theme customization for plugins beyond the single `colorPrimary` knob. This is a long-standing request aligning with the current plugin SDK expansion push.
*   **PR #8764 (Expand plugin SDK 1.1):** Open since 2026-11-16. A large (`XXXL`) PR to expand the public plugin SDK. Requires maintainer review to merge the SDK foundation needed for the other extracted features.
*   **Issue #8814 (Response Scope Limit):** Open since 2026-11-19. The most recent bug causing silent channel death. Requires immediate maintainer attention to prevent production outages.

---
*Data sourced from GitHub API snapshot for agentscope-ai/QwenPaw on 2026-11-19.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

### ZeroClaw Project Digest - 2026-11-19

#### 1. Today's Overview
The ZeroClaw project shows healthy activity for November 19, 2026, with 6 issues and 50 PRs updated in the last 24 hours. The issue queue is balanced, featuring 5 open/active bugs and features alongside 1 closed item, while the PR pipeline remains robust with 46 open proposals and 4 merges. Activity is concentrated in provider integration, web interface polish, and runtime configuration. The project appears to be in an active development cycle preparing for the `v0.9.1` release, though no new releases were published today.

#### 2. Releases
No new releases were tagged today. Development focus remains on the upcoming `v0.9.1` release branch, with several high-priority tasks and bug fixes targeting this version (e.g., #11580 regarding binary size capping and #12500 addressing cost enforcement logic). Maintainers are actively stabilizing the release gate and preparing migration paths for configuration changes.

#### 3. Project Progress
Four PRs were merged or closed today, representing significant architectural shifts:
*   **PR #12417**: Closed an architectural proposal (ADR-016) regarding plugin wake dispatch exceptions in the runtime.
*   **PR #11660**: Closed a web UI fix ensuring chat input focus persistence across turns.
*   **PR #12269**: Merged features for paired-device voice settings and chat controls in the web interface.
*   **PR #11661**: Merged a fix returning focus to the chat message box when a turn ends.

The most substantial contribution is **PR #12457**, which prepares nested registry reflection and input normalization—a foundational change enabling canonical registry editing and prerequisite for future provider configuration features.

#### 4. Community Hot Topics
The most discussed issue is **#11296** (7 comments), a high-priority bug where `llama.cpp` and custom providers use incorrect URIs/URLs for model routing from a router. This indicates a critical integration point between the gateway and local model providers.

The most active PR is **#12457** (dependencies, config, memory, provider, runtime, skills, tests, scripts), which focuses on preparing nested registry reflection and input normalization. With multiple dependencies tagged, this PR is a bottleneck for many downstream features.

Other high-engagement items include **#12500** (fix runtime cost enforcement) and **#12449** (generic OAuth 2.1 authorization for remote MCP servers), both reflecting the project's move toward secure, standardized integrations.

#### 5. Bugs & Stability
Two bugs were reported with **S3 - minor** severity today:
*   **#12568**: Dashboard Cost Overview bars are incorrectly scaled, making the Monthly bar always appear full regardless of actual usage.
*   **#11296**: `llama.cpp` and custom providers use wrong URLs for models (High severity/risk).

No critical crashes or regressions blocking the project were reported today. A fix PR exists for the runtime cost enforcement logic (**#12500**), which addresses a related logic bug where budget limits behaved as `block` instead of `warn`.

#### 6. Feature Requests & Roadmap Signals
Feature development is heavily concentrated on provider and registry infrastructure. The top signal is **#9345**, an enhancement to recalculate PR risk and size labels automatically on every update, aiming to reduce maintenance overhead.

User-requested features visible in the PR queue include:
*   **#12269**: Paired-device voice settings and chat controls.
*   **#12406**: Adding Parallel as an opt-in web search provider.
*   **#12449**: OAuth 2.1 authorization for remote MCP servers.

These suggest a roadmap shifting toward UI polish, provider diversification (Parallel, Bedrock, Ollama), and standardized authentication.

#### 7. User Feedback Summary
Users are actively configuring complex provider setups (Ollama, OpenRouter, Bedrock, Azure OpenAI) and encountering URI/routing bugs (#11296). The dashboard cost visualization (**#12568**) is a source of confusion, with users finding the bar scaling unintuitive. There is consistent demand for better health monitoring of channels (see **#11955** regarding Signal listener health) and improved focus management in the web chat interface.

#### 8. Backlog Watch
Several long-standing or critical items require maintainer attention:
*   **#11580** (Created Oct 6): A `p1` task deciding how the release size gate handles the binary size cap. This has been open for over a month and blocks the `v0.9.1` release process.
*   **#9345** (Created Jul 24): An enhancement to recalculate PR labels, open for over 4 months with 7 comments, indicating a need for maintainer prioritization on repository hygiene.
*   **#11296** (Created Sep 30): The model URI bug report remains open and active, directly affecting the core model loading functionality for a significant user base.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*