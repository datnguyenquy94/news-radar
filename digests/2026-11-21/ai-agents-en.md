# OpenClaw Ecosystem Digest 2026-11-21

> Issues: 141 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-21 06:46 UTC

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
**Generated on:** 2026-11-21
**Source:** [openclaw/openclaw GitHub](https://github.com/openclaw/openclaw)

### 1. Today's Overview
OpenClaw remains in an active development cycle with high throughput. Today saw **141 issues updated** and **500 PRs updated**, indicating intense maintenance activity. The project is currently tracking 141 open/active issues and has 327 open PRs awaiting review/merge. Despite the high volume of updates, no new releases were published today. The community is heavily engaged in stabilizing the 2026.11.5/11.6 release cycle, with significant focus on migration bugs, plugin stability, and Gateway performance under load.

### 2. Releases
**No new releases** were published today. The latest activity centers on the 2026.11.5 and 2026.11.6 candidate/beta phases. Users are advised that the 2026.11.5 beta introduced several migration and stability issues (see Bugs & Stability section); those on stable releases should verify compatibility before upgrading.

### 3. Project Progress
**Merged/Closed PRs Today:** 173 PRs were merged or closed in the last 24 hours.
*   **Gateway & Admission:** PR #202513 ("refactor(gateway): admit saved requesters once when work starts") and #194376 ("feat(gateway): admit sessions_send wake starts") were merged, improving session admission logic and reducing duplicate processing.
*   **CI & Tooling:** PRs #202955 (appcast update for 2026.11.6), #202972 (iOS build guard), and #202969 (publish sync fix) were closed, refining the release pipeline.
*   **Agent & UI:** PR #201783 fixed Control UI session answer routing, and #202764 retained conversation data across presentation config writes.
*   **Overall:** The merged PRs focus on stabilizing the Gateway admission flow, refining CI/CD for multi-platform builds, and polishing the Control UI session experience.

### 4. Community Hot Topics
The most discussed issues and PRs today reflect concerns around the recent 2026.11.5 update and Gateway stability:

*   **#200606** ([P1] Doctor blocks update with plugin migration conflict): 19 comments. Highlights a critical migration blocker where candidate Doctor fails with `changed=[]` during npm updates from 2026.11.3 to 11.5. **Link:** [Issue #200606](https://github.com/openclaw/openclaw/issues/200606)
*   **#160959** ([P0] Gateway blocks for minutes capturing large plugins): 84 comments. The top-rated issue describes Gateway event loop blocking during plugin capture, a regression from 2026.9.6. **Link:** [Issue #160959](https://github.com/openclaw/openclaw/issues/160959)
*   **PR #202962** ("refactor(agents): drop OpenClaw exec approvals for Claude's own tools"): Addresses a duplicated permission layer for Claude CLI tool execution, reducing overhead and race conditions. **Link:** [PR #202962](https://github.com/openclaw/openclaw/pull/202962)
*   **PR #202880** ("feat: let WhatsApp users schedule OpenClaw tasks from a DM"): Merged today, extending scheduler access to non-owner WhatsApp contacts. **Link:** [PR #202880](https://github.com/openclaw/openclaw/pull/202880)

### 5. Bugs & Stability
A significant number of high-severity bugs were updated today, many relating to the 2026.11.5 migration and Gateway performance:

*   **P0 / Crash-Loop:** 
    *   **#202518** ([P0] claude-cli run never closes after sessions_spawn + sessions_yield): 5 comments. Claude CLI sessions stall and reuse dead live sessions after yield. **Link:** [Issue #202518](https://github.com/openclaw/openclaw/issues/202518)
    *   **#201085** ([P1] failed auto-update leaves Gateway stopped): 5 comments. Managed handoff runtime cannot read migrated state (schema 36 vs 22). **Link:** [Issue #201085](https://github.com/openclaw/openclaw/issues/201085)
    *   **#202925** ([P0] macOS update repair refuses executor ownership): 4 comments. Update fails with `update-executor-settlement-failed` after SQLite lock. **Link:** [Issue #202925](https://github.com/openclaw/openclaw/issues/202925)
*   **P1 / UX-Friction / Message Loss:**
    *   **#200606** (Doctor migration conflict): See above.
    *   **#201012** (Slack Socket Mode input stuck): 4 comments. Input processing stalls after 59/60 retries on idempotency key conflicts. **Link:** [Issue #201012](https://github.com/openclaw/openclaw/issues/201012)
    *   **#202741** (Telemetry message.send with attachment): 4 comments. Native Telegram send fails to reach recipient despite GUI rendering. **Link:** [Issue #202741](https://github.com/openclaw/openclaw/issues/202741)
*   **Fix PRs:** PR #202513 and #194376 (admission fixes) may mitigate some session-state issues. No dedicated bugfix PRs were merged for the top crash-loop issues today.

### 6. Feature Requests & Roadmap Signals
Feature activity today was dominated by maintenance and stability, but several signals for upcoming work emerged:
*   **Per-user secret vault** (#197297, 9 comments): Requests a personal vault of secrets for multi-user Gateway users, proposed as a core capability.
*   **Control UI model picker** (#188469, 4 comments): Fixes the "All models (1)" UX issue when only one model remains.
*   **Contextual reaction feedback** (#191203, 6 comments): RFC for agents to interpret reactions as conversational feedback without emoji commands.
*   **Incremental memory reindex** (#192040, 4 comments): Requests Gateway-owned memory reindex without stopping service.
*   **Prediction:** The high comment counts on migration and plugin stability issues suggest the immediate roadmap will focus on 2026.11.6 stability patches rather than large new features.

### 7. User Feedback Summary
Real user pain points concentrated on the **2026.11.5 update migration**:
*   **Migration Failures:** Users report `Doctor` blocking updates with `changed=[]`, schema mismatches (36 vs 22), and executor ownership conflicts on macOS. The update path is currently fragile, especially for users with large plugin trees or compressed session archives.
*   **Gateway Performance:** The Gateway event loop blocking (Issue #160959) and long drain times (Issue #153899) are critical for users with many external plugins or large dependency trees.
*   **Session & Plugin Stability:** Issues with Claude CLI session yielding, Slack idempotency, and Telegram attachment delivery indicate a push-pull dynamic between new plugin/runtime features and core stability.
*   **Satisfaction:** The community is highly active in reproducing and debugging issues, but frustration is rising regarding the "managed update" flow and plugin migration reliability.

### 8. Backlog Watch
These long-unanswered or maintainer-attention-needed items remain critical:

*   **#160959** (Gateway blocks for minutes): 84 comments, updated today. The root cause of event loop blocking during large plugin capture is still being investigated; a fix PR is not yet visible.
*   **#200606** (Doctor migration conflict): 19 comments, updated today. A blocking issue for anyone updating from 11.3 to 11.5; maintainer review is needed.
*   **#202250** (update migration-plan refuses digest): 5 comments, updated today. The `update migration-plan` command cannot supply the required candidate artifact digest, halting migration workflows.
*   **#202213** (2026.11.6 refuses compressed archives): 3 comments, updated today. Reading `*.jsonl.zst` archives fails when the plain transcript exceeds compressed size + 1 MiB; fix PRs #192743 and #193548 are known but not yet in a stable release.
*   **#202146** (Default Proactive check stalls): 3 comments, updated today. Runs a full model turn every 30 minutes when no owner route exists, causing unnecessary load.

**Project Health Assessment:** OpenClaw is in a high-velocity stabilization phase. The sheer volume of PRs and issues indicates a team actively addressing technical debt and preparing the 2026.11.6 release. However, the concentration of P0/P1 bugs around migration and Gateway plugin stability suggests that the "managed update" experience is the current bottleneck. Users are advised to hold off on non-critical updates until the migration workflow stabilizes, and maintainers are heavily focused on admission logic and plugin runtime integrity.

---

## Cross-Ecosystem Comparison

### 1. Ecosystem Overview

The 2026-11-21 snapshot reveals a mature, multi-polar open-source ecosystem for personal AI assistants and agents. Rather than a single dominant framework, the landscape consists of specialized projects catering to distinct deployment needs—from embedded systems (PicoClaw, NanoBot) and desktop companions (LobsterAI, Hermes Agent) to gateway/orchestration platforms (OpenClaw, ZeroClaw, Moltis). Activity is characterized by a tension between rapid feature development and the critical need for migration stability, with several projects currently in active stabilization phases following major version updates.

### 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 141 | 500 | Stabilization (2026.11.5/11.6 candidates) | 6/10 |
| **Hermes Agent** | 16 | 50 | Canary (v0.23.3+canary) | 5/10 |
| **LobsterAI** | 0 | 17 | Stable (v2026.11.20) | 7/10 |
| **CoPaw** | 7 | 10 | In-development (no release) | 7/10 |
| **NanoBot** | 2 | 11 | Stable (previous cycle) | 6/10 |
| **NanoClaw** | 26 | 19 | Stable (v2026.11.0) | 7/10 |
| **Moltis** | 1 | 2 | Current (no release) | 6/10 |
| **PicoClaw** | 3 | 7 | Maintenance Mode | 4/10 |
| **ZeroClaw** | 7 | 8 | Stable (v0.8.4) | 6/10 |
| **Picoclaw** (fork context) | N/A | 7 (dep bumps) | Fork active | N/A |

### 3. OpenClaw's Position

**Advantages vs Peers:** OpenClaw stands out as the ecosystem's volume leader, handling intense maintenance throughput (500 PRs) and serving as the "core reference" for the community. Its active Gateway and plugin stability work addresses the highest-severity operational risks faced by self-hosted AI operators. The project's structured release cycles (2026.11.5/11.6) provide a clear, if fragile, upgrade path compared to the "maintenance mode" state of PicoClaw or the canary-state of Hermes Agent.

**Technical Approach Differences:** OpenClaw distinguishes itself through a heavy focus on **Gateway admission logic** and **plugin runtime integrity**. While projects like NanoBot and CoPaw prioritize WebUI polish and local model infrastructure, OpenClaw invests heavily in the "plumbing"—session admission, executor ownership, and migration schema management. This makes it technically deeper for orchestration but currently more brittle during updates than the more polished, UI-centric peers.

**Community Size Comparison:** OpenClaw has the largest active community by a significant margin, evidenced by the 19-comment debates on migration blockers and 84-comment threads on Gateway stability. This contrasts sharply with the quieter environments of Moltis (1 issue, 2 PRs) or PicoClaw (dependency bumps only), indicating OpenClaw is the primary integration point for developers building complex agent systems.

### 4. Shared Technical Focus Areas

Several cross-project requirements emerge, indicating industry-wide priorities:

*   **Migration & Update Reliability:** A dominant theme across OpenClaw, Hermes Agent, and NanoClaw. Issues #200606 (OpenClaw), #156311 (Hermes), and the "update migration-plan" command highlight a widespread fragility in the "managed update" flow. Users consistently report schema mismatches and executor conflicts during version bumps.
*   **Credential & Config Safety:** Browser autofill clashes (NanoBot #6732), password manager overwrites (CoPaw #8843), and OAuth scope management (ZeroClaw #12497) are universal pain points. The ecosystem is converging on the need for explicit `autocomplete="new-password"` attributes and stricter config modal guards.
*   **Media & Rich Content Stability:** Image generation restoration (LobsterAI #3125), Discord card rejection (NanoClaw #4511), and Telegram rendering bugs (#4340) show that rich media handling remains a critical, unstable component across nearly all platforms.
*   **Session & Context Preservation:** WhatsApp quoted reply context loss (NanoClaw #4501) and Claude CLI session stalling (OpenClaw #202518) indicate that maintaining conversation context across platform boundaries and yield/yield cycles is a shared engineering challenge.

### 5. Differentiation Analysis

*   **Feature Focus:** The ecosystem splits cleanly between **Orchestration/Gateway** (OpenClaw, ZeroClaw, Hermes) and **Client/Interface** (LobsterAI, CoPaw, NanoBot). Orchestration projects deal with plugin stability, session state, and infrastructure; client projects focus on UI polish, accessibility, and platform-specific integrations (WhatsApp, Discord, Telegram).
*   **Target Users:** OpenClaw and ZeroClaw target "power users" and developers capable of self-hosting and managing complex plugin trees. In contrast, LobsterAI and CoPaw aim for broader "end-user" appeal, emphasizing guided wizards (PPT covers), desktop companions, and accessible UX. NanoBot and PicoClaw occupy the embedded/edge niche.
*   **Technical Architecture:** 
    *   **OpenClaw/Hermes:** Python-heavy, venv/staged runtime management, heavy CLI focus.
    *   **LobsterAI/Electron-based:** Desktop-native (Electron), GUI-centric, zoom/rendering focus.
    *   **CoPaw/Node/TypeScript:** Web-console architecture, plugin provider extraction, runtime base-path deployment.
    *   **ZeroClaw/Rust:** Native performance, task brokers, credential catalog management.

### 6. Community Momentum & Maturity

*   **Rapidly Iterating:** **OpenClaw** and **Hermes Agent** are in high-velocity phases. OpenClaw's 500 PRs and Hermes' 50 updates in 24 hours demonstrate aggressive maintenance cycles. **CoPaw** also shows strong momentum with 38 updates and frequent merges of local model infrastructure.
*   **Stabilizing:** **LobsterAI** (post-v2026.11.20 release sprint) and **NanoClaw** (v2026.11.0 stable) are shifting focus from new features to bug fixing and restoration of legacy workflows. **Moltis** and **PicoClaw** are effectively in maintenance or quiet mode, with activity limited to dependency updates or critical bug fixes.

### 7. Trend Signals

*   **The "Migration Friction" Tax:** A clear industry trend is the rising cost of upgrading. As projects add plugin systems and stateful runtimes, the "managed update" experience is becoming the primary bottleneck. Value for developers: significant engineering effort is now required not just on features, but on migration safety, schema versioning, and backward compatibility.
*   **Credential Governance Rising:** The frequency of issues regarding browser autofill, OAuth scopes, and per-run cost caps (#1325 in Moltis, #12497 in ZeroClaw) signals a maturing market moving from "does it work?" to "can I trust it with my API keys and budget?" Developers need granular, runtime-enforced controls.
*   **Media as the Final Frontier:** While text-based agent workflows are relatively stable, rich media (images, video, PPT generation) remains a vector for regression. The high volume of "restore media" PRs in LobsterAI and the Discord/Telemetry bugs across the ecosystem suggest that robust media pipelines are the next critical milestone for user satisfaction.
*   **Convergence on Plugin Models:** Whether through OpenClaw's gateway plugins, CoPaw's provider architecture, or ZeroClaw's credential catalog, there is a universal shift toward modular, extensible plugin systems. The "core vs. plugin" boundary is becoming the primary architectural decision for new projects.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest**
**Date:** 2026-11-21
**Source:** [GitHub HKUDS/nanobot](https://github.com/HKUDS/nanobot)

### 1. Today's Overview
NanoBot maintains a steady development pace with 11 PRs merged or closed and 2 issues updated in the last 24 hours. The project continues its focus on WebUI refinements and channel stability, with no new releases published today. Activity is balanced between bug fixes (6 items) and UI/UX enhancements (5 items), indicating a mature codebase shifting toward polish and reliability rather than foundational features. The open issue regarding agent fleet compliance suggests growing pains in multi-agent orchestration.

### 2. Releases
No new releases were published today. The project remains on its previous release cycle with 0 new versions tagged in the last 24 hours.

### 3. Project Progress
Eleven PRs were merged or closed today, representing significant WebUI polish:
*   **Focus Polish:** PR #6737 redesigned the "Goal Island" into a floating vibrancy platter, while #6738 refined composer palettes (slash, skill, mention) into a dedicated module.
*   **Usability Fixes:** #6735 restored keyboard focus after pointer use; #6733 prevented sign-in autofill in channel credentials; #6736 preserved routing for side-channel command replies.
*   **Accessibility:** #6734 gated focus indicators on keyboard navigation modality to prevent visual artifacts during pointer interactions.
*   **User Flow:** #6731 replaced blocking modals with persistent confirmation toasts for linked automation deletions.

### 4. Community Hot Topics
*   **#6742 (OPEN):** The most discussed issue today concerns **agent fleet compliance** for Screwtape.ai integrations. It highlights a market need for seller risk screening and exportable spend audits for multi-agent operators, suggesting NanoBot is being evaluated for enterprise fleet management scenarios.
*   **#6732 (CLOSED):** A critical UX bug where browser autofill overwrites WebUI channel credentials with the access password. The rapid closure of this issue (and the corresponding PR #6733) indicates the maintainers actively prioritize credential safety.
*   **#6741 (CLOSED):** A minor UI alignment fix for the settings sidebar, reflecting the project's attention to desktop polish.

### 5. Bugs & Stability
The most significant stability issue resolved today was **#6732**, where browser password managers were silently overwriting channel secret fields with the WebUI access password, potentially destroying real credentials. A fix was implemented in PR #6733 by marking secret inputs with `autocomplete="new-password"`. Other stability improvements focused on focus management (#6734, #6735) and preventing command stream interruptions (#6736).

### 6. Feature Requests & Roadmap Signals
While no new feature requests were opened today, the merged PRs reveal roadmap signals:
*   **Composable UIs:** The refactoring of composer palettes (#6738) and the Goal Island redesign (#6737) suggest a focus on modular, "vibrancy"-based UI components.
*   **Session Management:** The focus restoration (#6735) and linked automation deletion (#6731) features improve session durability and workflow continuity.
*   **Multi-Agent Growth:** The open issue #6742 on agent fleet compliance indicates a potential future direction for agent orchestration and economic governance features.

### 7. User Feedback Summary
Users are experiencing two primary pain points:
1.  **Credential Management:** Browser autofill interfering with channel passwords/tokens, leading to broken configurations (exemplified by #6732).
2.  **Workflow Interruptions:** Focus loss during pointer use and blocking modals during deletion tasks, which degrade the fluidity of the chat experience.

Satisfaction appears high regarding the platform's polish and stability, with the community actively contributing to UI/UX refinements.

### 8. Backlog Watch
*   **#6742 (OPEN):** This issue, created today, requires immediate maintainer attention. It addresses a complex compliance need for agent fleets and currently has 0 comments, suggesting it may need triage and clarification regarding the "Screwtape.ai" integration.
*   **#6323 (OPEN):** A PR from October 20 regarding "edit and resend messages in the same session" remains open with performance caveats noted ("9.27 ms slower"). This requires a maintainer decision on whether the feature is ready for merge despite the performance overhead.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-11-21

## 1. Today's Overview
Hermes Agent exhibits a day characterized by high-volume maintenance and regression fixing. With 16 issues and 50 PRs updated in the last 24 hours, the project is in a state of active stabilization rather than major feature development. The volume of bug reports, particularly in the CLI and gateway sectors, suggests a push toward the v0.23.3 canary release (Nov 20) to iron out kinks in the staged runtime venv and update mechanics. Community engagement remains robust, with multiple contributors tackling platform-specific issues (macOS, Windows) and plugin compatibility.

## 2. Releases
*   **v0.23.3+canary.20261120T064609Z (Released Nov 20, 2026):** This canary build represents the immediate post-release development state. It includes the staged runtime venv transition (Python 3.14) and associated update mechanics. No explicit migration guide is provided beyond the standard update command, though the "install out of sync" warnings in Issue #156311 hint at the friction points of this transition.

## 3. Project Progress
Today saw significant progress in bug fixing and infrastructure cleanup.
*   **Merged/Closed PRs:** 6 PRs were merged/closed, focusing on core stability.
    *   **#155644:** A critical fix for gateway restart logic, ensuring that "owed-restart" obligations clear even when gateway PIDs are reused.
    *   **#151994 & #151198:** Fixes regarding dependency management (`pm gc`) and tool output preservation, preventing data loss and ensuring error lines are visible in command previews.
    *   **#157087:** A vital fix for provider plugin stability, resolving the "vanishing provider" issue that occurred when multiple chats opened simultaneously after a restart.
*   **Feature Advancement:** PR #156725 merged, introducing "profiles" capabilities that allow plugins to run profiles in sandboxes rather than exclusively on the host, improving isolation and resource management.

## 4. Community Hot Topics
The most discussed issues today reflect user frustration with update stability and platform-specific bugs.
*   **#158472 (Dirty source checkout):** 2 comments. This is the most critical performance issue, reporting that any plugin-set change triggers a full source-update tail (15-25 minutes), effectively fencing the gateway. This highlights a need for incremental update logic.
*   **#158488 (Windows worker silence):** 1 comment. A "Kanban managed worker" on Windows spawns and binds but never issues the first model call, remaining silently idle.
*   **#158491 (Provider-key scrub):** 0 comments but high visibility. A security/bug report revealing that the credential scrubber fails to recognize numbered credentials (e.g., `NVIDIA_API_KEY_2`), leaking keys to subprocesses.
*   **PR #158469:** Adding the "babelii-diofis" plugin to the catalog, indicating active community contribution.

## 5. Bugs & Stability
Stability is the dominant theme, with several P2 (high severity) bugs reported today:
*   **Critical Workflow Blockers:**
    *   **#158472:** Dirty checkout forced full rebuilds. *(No fix PR yet)*
    *   **#158249:** `PORT_IN_USE` sentinel hard-kills (`os._exit(75)`) pytest batches when a real service holds the port, causing test suite failures.
    *   **#158248:** Signal/tests SIGTERM the entire pytest process group, resulting in exit code 143 and no summary.
*   **Platform Specific:**
    *   **#158382:** macOS in-app self-update creates duplicate bundles for LaunchServices, confusing the system.
    *   **#158488:** Windows worker non-execution (first model call never issued).
*   **Fixes Exist:** PR #155644 addresses a related restart obligation bug; PR #157087 fixes provider vanishing.

## 6. Feature Requests & Roadmap Signals
Feature requests are taking a backseat to stability, but notable signals exist:
*   **Profiles & Plugin Isolation:** PR #156725 ("never run a profile on the host while a plugin runs it elsewhere") is now merged, signaling a roadmap move toward sandboxed plugin execution.
*   **Plugin Catalog Expansion:** Multiple PRs today (#158469, #158490) add new community plugins, indicating an open and growing ecosystem.
*   **Telegram Stability:** PR #153037 and #153032 fix Telegram drafts and handler timing, suggesting ongoing refinement of platform-specific tools.

## 7. User Feedback Summary
User sentiment today is polarized between appreciation for the plugin system and frustration with the update/dx experience.
*   **Satisfaction:** The plugin catalog is expanding, and specific tool fixes (Telegram, TTS codec) are resolving long-standing platform headaches.
*   **Dissatisfaction:** The "staged runtime venv" transition (mentioned in #134469 and #156311) is causing friction. Users report `hermes update` rebuilds the venv without plugin dependencies, breaking native plugins like `mnemosyne`. The "install out of sync" warning on Docker images (#156311) is recurring and confusing, as `pnpm` is absent in the sealed runtime.
*   **Pain Point:** The "owed-restart" obligation (#147873 and #158472) is a persistent annoyance, where users are constantly nagged to restart after updates that may or may not actually require it.

## 8. Backlog Watch
These items require maintainer attention to prevent regression:
*   **#158472 (Dirty checkout rebuilds):** Open since today. High severity; impacts daily driver usability for source-install users.
*   **#158248 (SIGTERM pytest kill):** Open since today. Causes CI failures; a deterministic crash point at 24% suite run.
*   **#158249 (PORT_IN_USE hard-kill):** Open since today. Kills test batches if any real service is running.
*   **#158488 (Windows worker silence):** Open since today. Agent initializes but fails to request a model.
*   **#156311 (Docker install sync warning):** Open since Nov 16. Recurring stderr noise for Docker users; the root cause involves `pnpm` absence and venv stamp ignoring plugin members.
*   **#134469 (Update rebuilds venv):** Open since Oct 7. 9 comments. The core issue of plugin dependency loss during `hermes update`.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Generated on:** 2026-11-21
**Repository:** [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

## 1. Today's Overview
PicoClaw has entered a transitional phase following the abandonment of upstream maintenance. In the last 24 hours, the repository saw 3 issue updates and 7 merged pull requests, predominantly automated dependency bumps. The most significant activity stems from Issue #3417, where a community member (afjcjsbx) announced an active fork to ensure project continuity. This signals a healthy community response to maintainer inactivity, though it fragments the user base. The core project (sipeed/picoclaw) remains largely in maintenance mode, relying on automated dependency updates and sporadic bug fixes.

## 2. Releases
No new releases were published today. The project has not had a new version tag since the last digest period. Users are advised to monitor the newly forked repository at [afjcjsbx/picoclaw](https://github.com/afjcjsbx/picoclaw) for continued development, as the upstream repository appears to be in a "maintenance mode" state with no planned feature releases.

## 3. Project Progress
Seven pull requests were merged/closed in the last 24 hours, all of which were automated dependency updates managed by dependabot. Notably:
*   **PR #3459-3460:** Updates to `line-bot-sdk-go`, `modernc.org/sqlite`, `azure-sdk-for-go`, and `golang.org/x/time`.
*   **PR #1555, #1559, #1560:** Merged fixes from March 2026, closing a backlog of merge requests.
No new features were merged today; progress was limited to dependency maintenance and repository hygiene.

## 4. Community Hot Topics
The most discussed issue is **[#3417](https://github.com/sipeed/picoclaw/issues/3417)** ("Active Fork & Continued Maintenance: afjcjsbx/picoclaw"), updated on 2026-11-20. With 5 comments, it serves as the primary coordination point for the community fork. The second hot topic is **[#3454](https://github.com/sipeed/picoclaw/issues/3454)** regarding "Model identifier validation suggests lowercasing unknown provider prefixes." This issue highlights a user experience friction where case-sensitive upstream model IDs (e.g., `ACME/gpt-4o-mini`) are incorrectly flagged and auto-corrected, breaking integrations. Users are frustrated by the "Fix" button rewriting their input without warning.

## 5. Bugs & Stability
Two stability-related issues were active today:
*   **[#3461](https://github.com/sipeed/picoclaw/issues/3461)** (Closed): A bug report stating the "start gateway" function is unavailable via the web UI when using "no-api-key" providers. The user confirmed functionality via the console but reported the UI pathway is broken. This was closed on 2026-11-20 after 2 comments, likely resolved by the dependency updates or a minor config fix.
*   **[#3454](https://github.com/sipeed/picoclaw/issues/3454)** (Open): While technically a "feature/validation" bug, it impacts stability for users relying on case-sensitive model providers. No fix PR exists yet in the upstream repository.

## 6. Feature Requests & Roadmap Signals
No new feature requests were identified in the 24-hour window. However, the discussion in **#3454** suggests a roadmap signal: the need for improved model identifier handling. The project may need to implement a toggle or smarter detection logic that distinguishes between local provider prefixes and upstream API namespaces to avoid breaking user configurations.

## 7. User Feedback Summary
User feedback over the last two days reveals a divide between automation and control. Several users rely on PicoClaw for its ability to interface with diverse APIs. The case-sensitivity issue in #3454 represents a "power user" pain point where the tool's helpful auto-formatting actively harms workflows. Conversely, the community fork announcement in #3417 indicates high satisfaction with the project's core functionality, prompting users to take maintenance into their own hands when the official channel goes quiet.

## 8. Backlog Watch
**#3454** ([Link](https://github.com/sipeed/picoclaw/issues/3454)): Open since 2026-10-28. Despite 4 comments, it has not been triaged or assigned a milestone. It requires a maintainer decision on whether the validator should be strict (upstream compliance) or permissive (user input preservation).

**#3461** ([Link](https://github.com/sipeed/picoclaw/issues/3461)): Recently closed, but represents a UI/UX gap regarding gateway initialization for key-less providers. If the project sees increased activity from the fork, this UI pathway should be validated for the main branch as well.

**#3417** ([Link](https://github.com/sipeed/picoclaw/issues/3417)): The de facto "issue of the week." Maintainers should monitor this thread to decide if/when to redirect users or merge compatible fixes from the fork.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### NanoClaw Project Digest
**Date:** 2026-11-21

#### 1. Today's Overview
NanoClaw remains in an active development cycle, with 26 issues and 19 PRs updated in the last 24 hours. The project has released `v2026.11.0` as the new stable version, but the volume of recent activity—particularly 4 new issues and 4 new PRs today—indicates a rapid pace of bug-fixing and feature integration ahead of the holiday period. The community is highly active, with maintainers addressing critical infrastructure and security updates.

#### 2. Releases
*   **New Stable Release:** `v2026.11.0` is now available on the stable channel via `/update-nanoclaw`.
*   **Key Changes:** This release consolidates updates since `v2026.10.0`. A notable user-visible change is that "Each agent gets only the keys you give it," implying a tightening of agent permissions or context isolation.
*   **Migration Path:** The release was thoroughly tested on the `beta` channel through nine pre-releases, suggesting a stable upgrade path for users on previous versions.

#### 3. Project Progress
*   **Merged/Closed PRs:** 9 PRs were merged or closed in the last 24 hours.
*   **Feature Advancement:** Significant progress was made on channel adapters and provider skills. Merged PRs include the `/add-antigravity` skill (integrating Google Antigravity CLI and Gemini models) and the AgentMail email channel adapter, expanding NanoClaw's integration capabilities.
*   **Infrastructure & Security:** Critical maintenance was performed, including bumping `Bun` from `1.4.4` to `1.4.5` (due to an upstream use-after-free advisory) and `Iron Proxy` to `v0.59.0`, and updating `actions/checkout` to `7.0.1`.

#### 4. Community Hot Topics
*   **WhatsApp Quoted Replies (#4501):** Open issue reporting that quoted/replied messages in WhatsApp reach agents without the context of the original message. This is a high-priority blocker for conversational AI flow on WhatsApp.
*   **Discord Link-Button Cards (#4511):** An open bug where `send_card` with only link-button actions is rejected by Discord with a `BASE_TYPE_REQUIRED` error, resulting in empty embed descriptions.
*   **Telegram Heading Rendering (#4340):** An ongoing issue where lines starting with `#<digits>` (e.g., `#467 is closed`) are incorrectly rendered as large heading blocks in Telegram, breaking normal message text.
*   **Slack Suspension Lag (#4502):** A recent open issue noting that messages sent while the host is suspended are never processed upon reconnection, leading to a backlog of unhandled messages.

#### 5. Bugs & Stability
*   **Critical/High Severity:**
    *   **WhatsApp Quoted Replies (#4501):** High severity due to loss of conversation context.
    *   **Discord Card Rejection (#4511):** High severity as it breaks the primary method of rich messaging to Discord users.
    *   **Telegram Heading Rendering (#4340):** Medium severity, causing UI breakage and readability issues.
*   **Fixed/PR-Ready:** Several long-standing issues were addressed today. PR #3287 successfully fixed the "agent-group suffix not stripped from inbound platform message id" bug (originally #3153), which was causing `add_reaction` and `edit_message` failures. PR #4514 fixes the `verify-agent-image` size check crash when old images are deleted from the registry.

#### 6. Feature Requests & Roadmap Signals
*   **Local Model Support:** PR #4210 merged `llmman` as a local-model option, signaling a trend toward supporting diverse local inference backends alongside existing providers.
*   **New Channel Adaptations:** The community is actively requesting and building adapters for new platforms. The recent PRs for AgentMail and Antigravity suggest a roadmap focused on expanding beyond traditional chat platforms (Slack, Discord, Telegram) into email and CLI-based workflows.

#### 7. User Feedback Summary
*   **Pain Points:** Users are reporting significant stability issues regarding long uptime. Issue #3075 details "silent log loss and inbound message duplicate-insert errors after long uptime," a critical reliability concern for production deployments.
*   **Setup Friction:** The setup process remains a pain point; Issue #2514 describes the setup getting stuck on a `needrestart` whiptail dialog, and Issue #4507 highlights misleading prompts in the image-source setup flow regarding data recording.
*   **Satisfaction:** The `v2026.11.0` release notes ("Each agent gets only the keys you give it") suggest users are gaining more granular control, which is generally viewed as a positive security and stability improvement.

#### 8. Backlog Watch
*   **Issue #2312 (Closed/Reopened):** Though listed as closed in the summary, this issue regarding the unconditional deletion of `groups/global/CLAUDE.md` on startup was addressed by PR #2823. It serves as a watch item for ensuring configuration persistence across restarts.
*   **PR #4515 (Agent Image Refresh):** This PR promotes the hardened `v2026.11.0-20261120T1959` image. Maintainers should ensure the associated security patches (Bun/Iron Proxy updates in PRs #4495/4499) are fully propagated to all users.
*   **Issue #4504 (Slack A2A Rooms):** A feature request to port Slack agent-to-agent rooms to Mattermost. This is a "triage/unresolved" item that requires maintainer design discussion to implement cross-platform agent collaboration.

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

### **LobsterAI Project Digest – 2026-11-21**

#### **1. Today's Overview**
LobsterAI is currently in an intense release sprint cycle. Following the November 20th tag **v2026.11.20**, the project has maintained extremely high velocity, merging 14 pull requests and closing 3 additional PRs within the last 24 hours. The majority of activity is focused on stabilizing the Desktop Session Handler (dsh) migration and restoring media generation features (images, video, and PPT covers) that were likely broken or refactored during previous updates. While no new issues were opened in the last day, the PR backlog is actively being cleared, indicating a push toward a stable milestone.

#### **2. Releases**
*   **New Release:** **LobsterAI 2026.11.20** (Released 2026-11-20)
    *   **Highlights:** This release introduces a **Guided PPT Cover Creation wizard** (#3072, #3129) and **Session Navigation** features allowing users to move backward and forward through session history (#3107).
    *   **Breaking Changes/Migration:** Users migrating to this version should be aware of the significant backend refactoring regarding the Desktop Session Handler (dsh). Several PRs merged today (#3132, #3131, #3130) are specifically dedicated to restoring legacy workflows (expert personas, cowork question answers, and skin creation) that may have been lost or broken during the dsh transition.

#### **3. Project Progress**
*   **Merged/Closed PRs (17 total in last 24h):** The development focus this period has been the "Restoration Suite."
    *   **Media Restoration:** PR #3127 restores video generation and legacy playback; PR #3125 restores image generation and artwork within dsh sessions.
    *   **Interface Polish:** PR #3124 fixes the desktop companion orb docking behavior across multiple displays and Windows DPI scaling.
    *   **Core Stability:** PR #3126 fixes a critical Electron zoom regression (`webFrame.setZoomFactor`) that was causing windows to fail to render correctly after the update.
    *   **User Experience:** PR #3129 polishes the "Home Quick Actions" and the new PPT wizard navigation, improving the onboarding experience.

#### **4. Community Hot Topics**
*   **Most Active PR:** **[#3135](https://github.com/netease-youdao/LobsterAI/pull/3135)** – "Fix(dsh): fork conversations at the selected message" (Closed). This is the most recent merged PR, indicating active work on conversation threading and session management.
*   **Most Active Issue:** **[#3036](https://github.com/netease-youdao/LobsterAI/issues/3036)** & **[#3037](https://github.com/netease-youdao/LobsterAI/issues/3037)** – Dependency bumps for `fast-xml-parser` and `electron`. While routine, these are the only open items currently tracked, suggesting the issue floodgate has temporarily closed as the team focuses on the v2026.11.20 release.

#### **5. Bugs & Stability**
*   **Critical Regression Fixed:** PR #3126 addresses a bug where setting the zoom factor unconditionally at the app start caused Electron 40.x–43.x windows to fail to paint, resulting in blank or dropped frames.
*   **Media Stability:** Several PRs (#3125, #3127) focus on restoring image and video generation. The underlying issue appears to be the integration of these media tools with the new dsh engine; the fixes ensure that model selection, billing, and artifact delivery are preserved across turns.
*   **Docking Stability:** PR #3124 resolves orb docking issues on Windows, preventing the desktop companion from drifting or using incorrect coordinates after display changes.

#### **6. Feature Requests & Roadmap Signals**
*   **Guided Onboarding:** The **PPT Cover Wizard** (#3072, #3129) signals a push toward lowering the barrier to entry for new users, moving away from raw prompt engineering toward "step-by-step" creation tools.
*   **Session UX:** The **Session Navigation** (#3107) and **Fork Conversation** (#3135) features indicate a roadmap focused on power-user workflows, allowing for better comparison of AI responses and branching off into new topics without losing context.
*   **Prediction:** Given the volume of "restore" PRs merged today, the next version (likely early December) will likely focus on polishing these restored features and refining the dsh stability rather than introducing large new AI capabilities.

#### **7. User Feedback Summary**
*   **Pain Points:** The most prevalent theme in the last 24 hours is **"Where did my stuff go?"** Users migrating to the new dsh architecture are experiencing missing expert personas, lost skin customizations, and broken media generation. The high volume of restoration PRs (#3132, #3131, #3130) suggests the community is frustrated by the loss of legacy functionality during the migration.
*   **Satisfaction:** The new **Quick Action Chips** and **PPT Wizard** (PR #3129) are receiving positive attention as they represent tangible UI improvements that enhance the "out-of-the-box" experience.

#### **8. Backlog Watch**
*   **#3128 (Open):** "[Fix(browser): restore in-app browsing with the dsh engine](https://github.com/netease-youdao/LobsterAI/pull/3128)" – This PR remains open and is critical for users who rely on the integrated browser for research. It is blocking a seamless workflow between web search and AI conversation.
*   **#3036 & #3037 (Open):** The dependency bumps. While low-risk, these are standard CI tasks that should ideally be merged and released quickly to keep the Electron version current and secure.
*   **Maintainer Attention:** The team is currently operating in "crisis mode" to restore features lost during the dsh migration. Maintainers should monitor the open browser PR (#3128) and ensure the restoration of all media tools is complete before the next release cycle to avoid further user churn.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-11-21

## 1. Today's Overview
Moltis shows low but focused activity for 2026-11-21. The project has **1 open issue** and **2 total PRs** in the update window (1 open, 1 merged). No new releases were published. The singular issue update concerns a documentation/semantic mismatch in the exec tool, while the PR activity centers on cost management and a legacy Codex integration. Overall, project health appears stable with maintainers addressing specific technical debt rather than broad feature expansion.

## 2. Releases
No new releases were published today. The project maintains its current version set with no breaking changes or migration notes to report.

## 3. Project Progress
**1 PR merged/closed today:**
- **#1005 [CLOSED] feat(openai-codex): add reasoning effort support** (Created: 2026-05-16, Updated/Closed: 2026-11-20)
  - Merged by PeterDaveHello
  - Advances the OpenAI Codex provider integration by carrying `reasoning_effort` through cloned provider instances and serializing configured GPT-5 Codex effort in Responses API requests.
  - Ensures `reasoning.encrypted_content` is preserved in follow-up turns when no explicit effort is set, maintaining compatibility with existing Codex workflows.

**1 PR still open:**
- **#1325 [OPEN] agents: add tools.agent_max_cost_usd per-run USD cap** (Created/Updated: 2026-11-21)
  - Author: Mattbusel
  - Proposes adding a per-run USD cost cap (`tools.agent_max_cost_usd`) to complement the existing `tools.agent_max_iterations` bound.
  - Addresses the limitation where iteration caps don't predict actual costs—25 iterations on a frontier model can cost significantly more than 25 on a small model.

## 4. Community Hot Topics
The most active discussion today centers on **PR #1325**, which has 0 comments but represents a key community need for cost transparency in agent runs. The issue- **#1324** regarding the exec tool's `command` parameter description—remains open with 0 comments. 

**Analysis:**
- **#1325** signals users are moving beyond iteration limits to seek financial governance for agent runs, indicating Moltis is being used for production workflows where cost predictability matters.
- **#1324** reflects a documentation gap where the exec tool's `command` field is labeled as a "shell command" but the paired-node implementation doesn't actually use a shell. This suggests a need for either implementation alignment or clearer API contracts.

Both items point to users pushing Moltis toward more robust, production-grade capabilities—cost monitoring and accurate tool semantics.

## 5. Bugs & Stability
**1 bug reported today:**
- **#1324 [Bug]: exec tool `command` parameter says "shell command" but paired-node exec doesn't use a shell** (Created/Updated: 2026-11-20)
  - **Severity:** Low-Medium (documentation/semantic mismatch)
  - **Location:** `crates/tools/src/exec.rs:427`
  - **Status:** Open, awaiting maintainer response
  - **Fix PR:** None currently identified

The bug is purely descriptive—the `command` parameter's schema description needs updating to reflect the actual non-shell execution model, or the execution logic needs to be adjusted to match the documentation. No crash or regression is reported, but the mismatch could confuse users integrating with the exec tool.

## 6. Feature Requests & Roadmap Signals
**Feature signals from today's activity:**
- **Cost capping per-run** (#1325): The proposal for `tools.agent_max_cost_usd` suggests users need financial boundaries for agent operations, likely preceding broader budgeting or accounting features.
- **Reasoning effort serialization** (#1005): The merged Codex effort support indicates ongoing alignment with OpenAI's latest model capabilities, particularly GPT-5 Responses API features.

**Predictions:** Given the cost-cap proposal, expect Moltis to introduce more granular economic controls in future releases. The Codex reasoning effort work suggests maintainers are tracking OpenAI API updates closely.

## 7. User Feedback Summary
**Real user pain points observed:**
- **Cost unpredictability:** The #1325 PR author explicitly notes that iteration caps fail to predict actual provider costs, indicating Moltis users are running expensive models and need budget guards.
- **Tool API confusion:** Issue #1324 highlights a disconnect between the exec tool's documented interface and its actual behavior, which could frustrate developers building custom integrations.
- **Provider feature parity:** The successful merge of reasoning effort support shows users value staying current with provider API changes, particularly for advanced models like GPT-5.

**Satisfaction indicators:** The quick merge of #1005 (within hours of the last update) suggests maintainers are responsive to provider-integration requests. The open but low-activity issues indicate a healthy, if quiet, community.

## 8. Backlog Watch
**Items needing maintainer attention:**
- **#1324** (opened 2026-11-20): The exec tool description bug is the most time-sensitive backlog item—it's fresh, affects a core tool, and has attracted 0 comments despite being reported yesterday. A maintainer should triage whether this requires a documentation update or a code change.
- **#1325** (opened 2026-11-21): The cost-cap proposal is open on the same day as this digest. While it has 0 comments, the author's detailed summary suggests it's well-scoped. Maintainers may want to quickly determine if this is a config change or requires new infrastructure.
- **#1005** (closed): Successfully merged, but worth monitoring if any follow-up issues arise from the reasoning effort serialization change.

**Long-term backlog:** No other issues or PRs from the update window appeared in the data, suggesting the project's recent activity is properly scoped and manageable.

---
*Digest generated from GitHub data for moltis-org/moltis on 2026-11-21. All links point to the respective GitHub issue/PR pages.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest

**Date:** 2026-11-21

## 1. Today's Overview

The CoPaw project (agentscope-ai/QwenPaw) shows healthy development activity with 38 total updates across Issues and Pull Requests in the last 24 hours. The project merged 10 PRs and addressed 7 Issues, demonstrating steady progress. New development is focused on runtime stability, console enhancements, and local model infrastructure, while community attention is drawn to UI polish and configuration reliability. The absence of new releases suggests the team is in an active development cycle rather than a release phase.

## 2. Releases

No new releases were published today. The latest version referenced in issue comments is v2.3.0.post1. The development team appears to be actively merging features and fixes into the main branch without a formal release tag, indicating ongoing work toward the next stable version.

## 3. Project Progress

**Merged/Closed Activity (Top 5):**
- #8784: Fixed skill rollback failures across multi-workspace installations
- #8770: Prevented chat submission during runtime background startup
- #8785: Enforced inline image budget and improved rescaling after refusals
- #8512: Enhanced `extract_status_code()` to read gateway-reported status from error text
- #8499: Extracted local model management into a plugin provider architecture

Key advancements include runtime startup protection (#8770), improved error handling for external gateways (#8512), and significant refactoring of local model infrastructure (#8499, #8647-8649 trilogy). The console now supports runtime base-path deployment (#8719), enabling deployment behind reverse proxies.

## 4. Community Hot Topics

**Most Active Issues (by comments/reactions):**
- **[#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844)** (1 comment): Console message list not keyboard-focusable—arrow/PageUp/PageDown never scroll conversation. Critical accessibility bug making chat unusable without mouse.
- **[#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845)** (1 comment): Markdown tables overflow message bubbles with no horizontal scroll. Usability issue for technical discussions.
- **[#8840](https://github.com/agentscope-ai/QwenPaw/issues/8840)** (2 comments): Typo in LICENSE—extra "the" in "Contribution" definition. Minor but noticeable legal text inconsistency.
- **[#8839](https://github.com/agentscope-ai/QwenPaw/issues/8839)** (2 comments): On Android Pad, lower button group flows out of screen in Chrome. UI layout regression.
- **[#8843](https://github.com/agentscope-ai/QwenPaw/issues/8843)** (2 comments): Config docs list only GET/PUT/DELETE /envs, but PUT deletes all other env vars. Documentation vs. implementation mismatch.

**Most Active PRs (by comment count):**
- **[#8719](https://github.com/agentscope-ai/QwenPaw/pull/8719)**: feat(console): support runtime base-path deployment. Enables sub-path serving behind reverse proxies.
- **[#8649](https://github.com/agentscope-ai/QwenPaw/pull/8649)**: feat(local-models): add llama.cpp GPU controls and runtime auto-update. Part of the local model infrastructure trilogy.
- **[#8785](https://github.com/agentscope-ai/QwenPaw/pull/8785)**: fix(media): enforce inline budget, rescale after refusal, report omissions. Critical for image token management.

## 5. Bugs & Stability

**Critical Bugs Reported Today:**
- **[#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844)**: Console message list not keyboard-focusable. Arrow keys, PageUp/PageDown, and Home/End do nothing. Makes chat unusable on machines without a mouse. *Severity: High*—blocks keyboard navigation entirely.
- **[#8839](https://github.com/agentscope-ai/QwenPaw/issues/8839)**: On Android Pad in Chrome, lower button group flows out of screen, making "send" button hard to touch. *Severity: Medium*—UI overflow on tablet form factors.
- **[#8845](https://github.com/agentscope-ai/QwenPaw/issues/8845)**: Markdown tables overflow message bubbles with no horizontal scroll. Overflowing columns are effectively invisible. *Severity: Medium*—usability degradation for technical content.

**Fix PRs Identified:**
- #8835: Fixes Windows agent.json save retries and installer child process exit waiting. Addresses transient file lock issues.
- #8842: Fixes web_search config modal from saving untouched values on open. Prevents unnecessary config writes.
- #8841: Fixes llama-server from outliving a crashed backend. Critical process lifecycle management.

**Stability Signals:** The WeChat channel inbound polling death issue (#8757, created Nov 15, updated Nov 20) remains open with no logging or recovery mechanism—a silent error-ret loop where the cursor never resets. This is a significant reliability concern for WeChat users.

## 6. Feature Requests & Roadmap Signals

**Active Feature Development:**
- **Local Model Infrastructure:** The #8647-8649 trilogy (managed MLX, llama.cpp GPU, Console controls) plus #8499 (provider extraction) represents a major refactoring of local model management into plugins. This will likely appear in the next major version.
- **Runtime Base-Path Deployment:** #8719 adds `QWENPAW_BASE_PATH` configuration for serving Console and API below a reverse-proxy prefix. Essential for enterprise deployments.
- **Media Budget Enforcement:** #8785 enforces inline image budgets and reports omissions after refusals. Part of ongoing media quality improvements.

**Predicted Next Version Features:** Based on merged PRs, the upcoming release will likely include improved local model management (llama.cpp GPU, MLX integration), runtime deployment flexibility, and enhanced media handling. The provider plugin architecture (#8499) suggests a more modular plugin system.

## 7. User Feedback Summary

**Satisfaction Drivers:**
- Active development pace with frequent merges (10 PRs in 24h)
- Addressing critical bugs like keyboard navigation and Windows file operations
- Expanding local model support through plugin architecture

**Key Pain Points:**
- **Keyboard navigation:** Console not focusable (#8844) blocks accessibility
- **Cross-platform UI:** Android Pad button overflow (#8839) and tablet layout issues
- **Error handling:** OpenAI-compatible gateway errors not properly classified (#8505, #8512)
- **Configuration reliability:** Config modal saving untouched values (#8842), env var mismatches (#8843)
- **WeChat reliability:** Silent inbound polling death with no recovery (#8757)

**Use Cases:** The project serves both desktop AI assistant usage (WeChat integration, console chat) and development/ deployment scenarios (runtime base-path, local models, plugin management). The split between UI polish and infrastructure work indicates a mature project balancing user experience with technical capabilities.

## 8. Backlog Watch

**Long-Unanswered Issues Requiring Maintainer Attention:**
- **[#8757](https://github.com/agentscope-ai/QwenPaw/issues/8757)**: WeChat channel: silent inbound polling death - error-ret loop has no logging or recovery, cursor never resets. *Age: 6 days (created Nov 15, updated Nov 20)*. Critical reliability bug with no apparent fix progress. No comments indicating owner action.
- **[#8844](https://github.com/agentscope-ai/QwenPaw/issues/8844)**: Console: message list is not keyboard-focusable. *Age: 1 day*. High-severity accessibility blocker with no assigned owner or PR.
- **[#8833](https://github.com/agentscope-ai/QwenPaw/issues/8833)**: Referenced in #8837 PR description. Likely related to the deprecated mission command removal.

**PRs Needing Maintainer Review:**
- **[#8837](https://github.com/agentscope-ai/QwenPaw/pull/8837)**: fix(cli): remove deprecated mission command. Ready for merge, follows maintainer feedback.
- **[#8841](https://github.com/agentscope-ai/QwenPaw/pull/8841)**: fix(plugins): keep llama-server from outliving a crashed backend. Critical stability fix, no comments blocking merge.
- **[#8842](https://github.com/agentscope-ai/QwenPaw/pull/8842)**: fix(console): stop the web_search config modal from saving untouched values. Quick win, ready for merge.

**Health Score: 7/10**—Active development velocity, good PR merge rate, but several high-severity UI/accessibility bugs open with no apparent resolution path. The WeChat reliability issue (#8757) is the most concerning long-term item.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest - 2026-11-21

## 1. Today's Overview
ZeroClaw exhibits robust contemporary development activity with 57 total touchpoints across Issues and Pull Requests in the last 24 hours. The project maintains a healthy merge velocity of 8 PRs closed while managing 7 open Issues. Activity is concentrated in infrastructure and security enhancements, with no new releases published today. The developer community appears focused on cleaning technical debt, expanding credential management capabilities, and stabilizing runtime environments, suggesting a maturing project transitioning from feature expansion toward operational reliability.

## 2. Releases
No new releases were published today. The project most recently released v0.8.4, which introduced the memory status rendering that is currently the subject of an active bug report (Issue #9896).

## 3. Project Progress
Eight Pull Requests were merged or closed today, representing significant infrastructure and security work:
- **PR #12530** fixes the exact bug reported in Issue #9896, correcting memory backend reporting to properly display SQLite when active
- **PR #12600** resolves a CI risk report failure related to file deletion tracking
- **PR #12323** fixes HTTP client runtime binding to prevent cross-runtime reuse issues
- **PR #12499** addresses gateway trace pollution from per-connection task records

Additional merged work includes security-hardening PRs #12459 (browser voice for OIDC) and #12497 (configurable OAuth scopes), along with cleanup PR #12622 retiring the Raspberry Pi deploy script.

## 4. Community Hot Topics
The most discussed Issue is **#12619** (gateway session state persistence), which reports that failed session-state writes leave connections in a `running` state until restart, preventing the Stop function from clearing them. This has garnered attention for its impact on agent reliability.

The most active PR is **#12438** (native Rust task broker for SSH), which implements a task-owned OpenSSH transport as a native Rust executable. With 14 open PRs focused on web credential management (#12408, #12481, #12482, #12490), the community is heavily invested in ZeroClaw's credential and authentication infrastructure.

## 5. Bugs & Stability
Two critical stability bugs were addressed today:
- **Issue #9896** ([Bug]: status/startup banner can report `Memory: none` when effective backend is sqlite) - marked as medium risk, with PR #12530 providing the fix. This affects both startup/status output and the `zeroclaw status` command.
- **Issue #12145** ([Bug]: plugin store memory limiter miscalculates Wasm limits) - severity S2 (degraded behavior), affecting plugin memory budget enforcement. The limiter caps memory at `max_memory_mb` but retains Wasm defaults of 10,000 memories and 10,000 tables per store.

## 6. Feature Requests & Roadmap Signals
Several feature PRs signal upcoming capabilities:
- **PR #12596** implements scoped browser grants for username/password and TOTP access independently
- **PR #12497** makes OAuth scopes configurable per OIDC provider
- **PR #12408** introduces operator-managed HTTP credential catalog (Basic, Bearer, X-API-Key)
- **PR #12496** proposes daemon-held OIDC refresh grants in ADR-017

The retirement of legacy components (#12611 local LLM response cache, #12621 Raspberry Pi deploy script) indicates a roadmap focus on simplifying the architecture and removing deprecated functionality.

## 7. User Feedback Summary
Users report two primary pain points:
1. **Misleading memory status** - The banner displaying `Memory: none` even when SQLite backend is actively used, causing confusion about data persistence
2. **Plugin memory limits** - Wasm plugin stores exceeding configured memory budgets due to default Wasm limits not being respected

The community appears satisfied with ZeroClaw's expanding credential management capabilities but expresses frustration with the memory status display issue, which directly impacts trust in the system's persistence layer.

## 8. Backlog Watch
Several important Items require maintainer attention:
- **Issue #12613** (Tracker: Deslop pass) - Open since Nov 20, coordinating cleanup of dead code, inert features, and comment slop
- **Issue #12614** (browser tool file-upload action) - Open since Nov 20, blocking form submissions requiring file attachments
- **Issue #12611** (Retire local LLM response cache) - Open since Nov 20, removing unused response_cache.db and four config keys
- **Issue #12619** (gateway session state) - Open since today, critical for agent lifecycle management

Three PRs need author action:
- **PR #12459** (web: enable browser voice for OIDC sessions) - status:blocked
- **PR #12408** (web: manage scoped HTTP credentials) - needs-author-action
- **PR #12490** (http: support scoped Authorization Token credentials) - no labels blocking, but large XL size

The backlog contains several "tracker" and "retire" items indicating the project is actively pruning technical debt alongside feature development, with maintainers appear to be balancing new capability delivery against reducing accumulated complexity.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*