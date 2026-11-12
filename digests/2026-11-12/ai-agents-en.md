# OpenClaw Ecosystem Digest 2026-11-12

> Issues: 178 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-12 06:53 UTC

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
**Date:** 2026-11-12

#### 1. Today's Overview
OpenClaw is experiencing a high-velocity development period with 178 issues and 500 PRs updated in the last 24 hours. The project is currently in a prerelease phase with `v2026.11.5-beta.2` recently published. Activity is dominated by bug fixes and stability improvements in the `clawsweeper` subsystem, alongside significant UI and platform feature expansions. The sheer volume of updates suggests a push toward stabilizing the 2026.10.x release line while preparing beta features for the next cycle.

#### 2. Releases
*   **New Release:** `v2026.11.5-beta.2` (Published recently).
    *   **Highlights:** Large conversations are now browsable with paged history in both directions, including visible history boundaries and bounded archive reads. Additionally, the macOS app now preserves saved secrets across sessions.
    *   **Migration Note:** This beta ships on `main` and is not yet in the stable `v2026.11.3` line. Users on older stable releases (e.g., `v2026.10.x`) should plan an upgrade path.

#### 3. Project Progress
*   **Merged/Closed PRs (Top 5 today):**
    *   **PR #197455:** Fixes a critical Gateway locking issue where requests and timers were synchronously reopening ownership lock files, potentially blocking the event loop.
    *   **PR #197335:** Resolves a subagent delegation bug where tools and results would fail after a parent session yielded, preventing "Plugin invocation scope is closed" errors.
    *   **PR #197579:** Improves memory churn during `Responses` continuation by optimizing object-comparison bookkeeping.
    *   **PR #196371:** Converges Gateway updates with environment-only service overrides, fixing update paths for split installations.
    *   **PR #197593:** Fixes an `E2BIG` error during isolated Git worktree hydration when handling clones with thousands of configuration entries.

#### 4. Community Hot Topics
*   **Issue #196199 (P1, 4 comments):** A regression since `2026.10.10` where native Codex helpers fail to resume the parent agent, locking users out. This is a critical session-state issue currently under investigation.
*   **Issue #181432 (P1, 13 comments):** Reports excessive baseline RSS memory (~1.9 GB) and SQLite transaction timeouts following the update to `2026.10.5` on Linux ARM64. This stability bug is a major pain point for ARM users.
*   **PR #197501 (P2):** Adds support for Google Gemini Decision models (`gemini-decision-1`), expanding the decision model ecosystem.
*   **PR #197560 (P2):** Fixes the serving of SubQ, Fastino, and Perplexity Decision models from the hosted catalog, addressing a gap in decision provider availability.

#### 5. Bugs & Stability
*   **Critical Stability:** Issue #181432 (Excessive RSS memory) and Issue #159638 (SQLite worker churn) represent significant resource overheads. #181432 is currently open and affects the `2026.10.5` update.
*   **Data Loss/Message Loss:** Issue #144809 (Claude-cli reply loss on long turns) and Issue #196199 (Codex helper resume failure) are the most commented bugs related to message loss, indicating ongoing reliability challenges in long-horizon agent runs.
*   **Fix Status:** While #197455 and #197335 were merged recently to address Gateway and subagent stability, the memory issue in #181432 and the Claude-cli reply bug in #144809 remain open with no merged fix PRs visible in the top 30 list.

#### 6. Feature Requests & Roadmap Signals
*   **Session Management:** Issue #183497 requests session lifecycle controls (session key echo, ephemeral mode, TTL) for the OpenAI-compatible API. This signals a demand for finer-grained API session control.
*   **Model Ecosystem:** PRs #197501 and #197560 highlight the addition of Gemini and other third-party Decision models, indicating an open roadmap for multi-provider decision support.
*   **Platform Features:** Feature requests for "Skill Workshop" sedimentation rates (#179328) and "Workboard" dashboard verbs (#182463) suggest a focus on workflow automation and skill reuse.

#### 7. User Feedback Summary
*   **Positive:** Users are appreciating the "Large conversations" browsing improvements in the new beta and the preservation of secrets in the macOS app.
*   **Negative/Pain Points:** The dominant dissatisfaction stems from the `2026.10.5` update causing RAM spikes (#181432), the instability of native Codex helpers (#196199), and the "empty reply" issue in Claude-cli backends (#144809). The high volume of "diamond lobster" (critical) and "silver shellfish" (moderate) rated issues indicates a maturing project hitting edge-case stability limits.
*   **Use Cases:** There is active usage of Telegram, Slack, and Discord channels, with specific bugs reported for each (e.g., Telegram follow-up queuing #184521, Discord ack delays #182604).

#### 8. Backlog Watch
*   **PR #129388:** A massive "context-pressure-aware continuation" feature (status: `needs proof`, security-sensitive). This is a long-standing, high-impact feature sitting in the backlog requiring maintainer validation.
*   **Issue #183048:** "Outbound queue: no CLI to inspect/settle unknown_after_send entries." This operational bug affects Slack delivery and has persisted since October 25th with 7 comments, needing a maintainer decision on the UI/CLI tooling.
*   **Issue #193591:** Update failure report for `2026.10.10` on `darwin/arm64`. This confirms update instability on Apple Silicon, a critical path for macOS users.

---

## Cross-Ecosystem Comparison

### Ecosystem Overview
The 2026-11-12 snapshot reveals a maturing but fragmented open-source personal AI agent ecosystem. Projects are diverging into distinct niches: some focus on core reasoning and gateway stability (OpenClaw, NanoClaw), others on specific integrations (Telegram, Slack, web UI), and a few on novel model scaling (LobsterAI's 1M token context). While activity is widespread, stability and cross-platform compatibility—particularly on Linux ARM64 and Windows—remain the dominant pain points, indicating the ecosystem is transitioning from MVP functionality toward production-grade reliability.

### Activity Comparison

| Project | Open Issues | Updated PRs (24h) | Release Status | Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 4 (Critical/Open) | 500 (Active) | `v2026.11.5-beta.2` (Prerelease) | **High Velocity** |
| **NanoClaw** | 0 | 24 (14 merged) | `v2026.10.0` (Stable) | **Stable/Hardening** |
| **CoPaw** | 5 (Critical) | 50 (Active) | `v2.3.0` (Released) | **Upgrade Crisis** |
| **LobsterAI** | 0 (New) | 17 (14 merged) | Unreleased | **Polish & UX** |
| **Moltis** | 0 | 2 (Merged) | Unreleased | **Low Activity** |
| **PicoClaw** | 1 (Security) | 0 | Unreleased | **Maintenance** |
| **NanoBot** | 4 (Critical) | 19 (12 merged) | `0.3.5` (Stable) | **Multi-room Bugs** |
| **Hermes Agent** | 3 (Critical) | 50 (Active) | `v0.22.x` (Base) | **Plugin Expansion** |
| **ZeroClaw** | 45 | 47 (3 merged) | `v0.9.0` (Released) | **Active Dev** |
| **Picoclaw** | 1 (Security) | 0 | Unreleased | **Security Focus** |

*\*Health Score is a composite of release stability, issue criticality, and PR merge velocity.*

### OpenClaw's Position
**Advantages vs. Peers:** OpenClaw leads in raw development velocity, processing 500 PRs in 24 hours, signaling a prerelease stabilization push. Its `clawsweeper` subsystem and Gateway locking fixes address critical infrastructure stability that many peers (e.g., NanoBot, ZeroClaw) are still struggling with. The project's transition to a beta release model allows for rapid feature iteration (`gemini-decision-1` support) while maintaining a stable base line.

**Technical Approach Differences:** OpenClaw distinguishes itself through a heavy focus on "isolated Git worktree hydration" and "Gateway environment-only overrides," suggesting a robust multi-tenant architecture. While competitors like PicoClaw and Moltis focus on niche security or lifecycle events, OpenClaw operates as a comprehensive core framework, integrating subagent delegation and platform features (macOS secrets preservation) at scale.

**Community Size Comparison:** OpenClaw has the highest PR throughput, but NanoClaw and ZeroClaw show more active contributor bases relative to their issue counts. CoPaw and Hermes Agent have large, active user bases evidenced by high issue counts, though their PR merge rates vary. LobsterAI and Moltis have smaller, more focused communities.

### Shared Technical Focus Areas
*   **Gateway & Routing Stability:** OpenClaw (Gateway locking), NanoBot (multi-room heartbeat leakage), ZeroClaw (sandbox policy/RFC #6996), and CoPaw (plugin migration/upgrades) all grapple with how agents route tasks and manage ownership locks across channels.
*   **Cross-Platform & Environment Parity:** Linux ARM64 memory spikes (OpenClaw #181432), Windows Store crashes (Hermes Agent #146763), and macOS notarization (LobsterAI #3056) represent a universal challenge in deploying AI agents across diverse OS substrates.
*   **Session & Memory Management:** Issues surrounding session state persistence, memory churn during continuations (OpenClaw #197579), and corrupt metadata in paged sessions (LobsterAI #3061) are pervasive, indicating a need for standardized session serialization.

### Differentiation Analysis
*   **Feature Focus:** 
    *   **Model Ecosystem:** CoPaw and OpenClaw are actively expanding decision model catalogs (Piccolo, Gemini).
    *   **UI/UX:** LobsterAI and PicoClaw prioritize web interface organization (chat folders, read-aloud).
    *   **Integration/Deployment:** ZeroClaw and NanoClaw focus on sandbox policies and CLI drivers; Hermes Agent and NanoBot focus on specific chat integrations (Telegram, Slack).
*   **Target Users:** 
    *   **OpenClaw/CoPaw:** Power users and developers seeking deep customization and local model control.
    *   **NanoBot/Hermes Agent:** End-users within specific chat ecosystems (Discord, Slack, Telegram).
    *   **ZeroClaw:** Multi-tenant infrastructure and security-conscious deployments.
*   **Technical Architecture:** 
    *   OpenClaw and NanoClaw employ sophisticated agent containerization and sign-in flows.
    *   LobsterAI and PicoClaw appear to be launcher-focused UI wrappers.
    *   Moltis differentiates with its `agy` CLI streaming integration.

### Community Momentum & Maturity
*   **Rapidly Iterating:** OpenClaw (prerelease beta), CoPaw (post-v2.3.0 fix cycle), and ZeroClaw (active v0.9.0 development) show the highest velocity and frequent changes.
*   **Stabilizing:** NanoClaw and PicoClaw are in maintenance phases with low PR counts and focus on security/hardening. NanoBot and Moltis are relatively quiet but stable, indicating mature, if feature-light, deployments.

### Trend Signals
*   **Shift to Localization & Quantization:** The CoPaw v2.3.0 release and NanoClaw's GPU controls signal a industry trend toward "offline-first" AI agents, reducing reliance on cloud APIs and managing hardware constraints (BF16/Q8_0 quantization).
*   **Maturing Security Models:** The proliferation of sandbox policy RFCs (ZeroClaw #6996, PicoClaw #3456) and delegate tool confinement (#8279) indicates a move from "open access" to "zero-trust" agent deployment, especially for multi-tenant environments.
*   **Upgrade Path Fragility:** The CoPaw v2.3.0 "upgrade migration crisis" highlights a critical risk area: breaking changes in plugin architectures cause significant user friction. Future frameworks will likely prioritize backward-compatible plugin APIs and automated migration tooling to prevent community churn.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-11-12
**Source:** [GitHub - HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Today's Overview
Nanobot exhibits moderate development activity on 2026-11-12, with 19 pull requests updated in the last 24 hours (7 open, 12 merged/closed) and 5 issues updated (4 open/active, 1 closed). The project shows sustained momentum with multiple cross-cutting fixes across webui, execution tools, and channel integrations. However, two critical multi-room deployment bugs remain open and unaddressed, signaling areas requiring maintainer focus. The release cadence is steady with no new versions published today.

## 2. Releases
No new releases were published today. The latest version remains 0.3.5, per issue #5798.

## 3. Project Progress
**12 PRs were merged or closed today**, reflecting focused work on webui stability, execution tooling, and session architecture. Key merges include:
- **#6633** [CLOSED]: Fixed subagent duplicate delegation by appending "Don't duplicate its work." to background creation responses.
- **#6623** [CLOSED]: Refactored process-tree lifecycle into `nanobot/execution/processes.py`, centralizing launch, termination, and cleanup.
- **#6630** [CLOSED]: Fixed webui display of completed subagent results, ensuring they only appear beside loaded initiating messages.
- **#6626** [CLOSED]: Deprecated shared sessions for new setups, redirecting new users to per-chat and explicit topic routes.
- **#6617** [CLOSED]: Fixed webui chat request correlation and stale reconnect cancellation during client reconnect tokens.

Additionally, **7 PRs remain open**, including performance optimizations (#6634), webui cache preservation (#6636), and tool stability fixes (#6426, #6427).

## 4. Community Hot Topics
The most active discussions today center on **multi-room deployment integrity** and **webui session management**:

| Issue/PR | Status | Comments | Reactions | Link |
|---|---|---|---|---|
| #6619 | Open | 1 | 0 | [Heartbeat turns deliver task output to most recently updated room](https://github.com/HKUDS/nanobot/issues/6619) |
| #6620 | Open | 1 | 0 | [Suppressed message-tool sends return success ack instead of error](https://github.com/HKUDS/nanobot/issues/6620) |
| #6636 | Open | undefined | 0 | [Preserve session caches during history revalidation](https://github.com/HKUDS/nanobot/pull/6636) |
| #6634 | Open | undefined | 0 | [Read saved task history by message window](https://github.com/HKUDS/nanobot/pull/6634) |

**Underlying needs:** The two heartbeat/room leakage issues (#6619, #6620) reveal a fundamental routing problem in multi-channel deployments where task output bypasses intentional suppression and lands in unrelated rooms. Meanwhile, PR #6636 and #6634 indicate users need finer-grained control over webui session persistence and history loading performance.

## 5. Bugs & Stability
**5 issues updated today**, with 1 closed and 4 remaining open. Severity ranking:

| Issue | Status | Severity | Summary |
|---|---|---|---|
| #5798 | Closed (updated today) | High | Cross-session reply leakage: replying in one chat incorrectly triggers responses in unrelated active sessions. Fixed in 0.3.0 historically; regressed in 0.3.5. |
| #6620 | Open | Medium | Suppressed `message` calls during internal turns return success acks instead of errors, potentially masking delivery failures. |
| #6619 | Open | High | Heartbeat task reports leak to unrelated rooms in multi-deployments, causing cross-chat contamination. |
| #6635 | Open (new) | Low | Feature request: add MiniMax H3-Image model support. |
| #6618 (implied) | Open | Medium | Discord thread history backfill (issue #6632 relates). |

**Fix PR status:** #5798 was closed historically; no new fix PRs were merged today for the active bugs #6619 or #6620.

## 6. Feature Requests & Roadmap Signals
Two feature-focused PRs and issues signal near-term roadmap direction:
- **#6635** [Open]: Request to support MiniMax H3-Image (`MiniMax-H3-Image` / `MiniMax-H3-Image-Highspeed`) generation models. Currently only legacy `image-01` is supported.
- **#6632** [Open]: Discord thread history backfill and optional startup presence. Addresses the blind-agent problem where new sessions cannot see prior messages in pre-existing threads.
- **#6032** [Open]: Configurable local trusted extension surface for WebUI browser-side add-ons.

**Predicted next-version candidates:** MiniMax image support (#6635) and Discord thread improvements (#6632) are likely candidates for the next minor release, given their "feat" labels and recent activity.

## 7. User Feedback Summary
Users report two dominant pain points today:
1. **Cross-session contamination:** Issue #5798 describes a regression where active sessions reply to unrelated chats. This erodes trust in multi-chat workflows.
2. **Multi-room routing failures:** Issues #6619 and #6620 confirm that heartbeat and tool delivery mechanisms fail to respect channel boundaries in deployments with multiple enabled channels, sending task output to "most recently updated" rooms regardless of intent.

Satisfaction is mixed: while the volume of merged PRs (#6623, #6630, #6617) suggests active maintenance, the persistent multi-room bugs indicate incomplete fixes in the 0.3.x series.

## 8. Backlog Watch
These long-unanswered or maintainer-intensive items require attention:

| Item | Age | Status | Priority |
|---|---|---|---|
| **#6619** | 3 days (opened 2026-11-09) | Open, High severity | Heartbeat room leakage in multi-channel deployments |
| **#6620** | 3 days (opened 2026-11-09) | Open, Medium severity | Suppressed message ack mismatch |
| **#6634** | 1 day (opened 2026-11-12) | Open, Performance | Subagent history loading performance (7.4MB JSON on 500-turn sessions) |
| **#6636** | 1 day (opened 2026-11-12) | Open, WebUI | Session cache preservation during history revalidation |
| **#6426 / #6427** | 19 days (opened 2026-10-24) | Open, Tool stability | stdin-closed ack and xcrun cache-denial noise in sandboxed stderr |

**Maintainer action needed:** Issues #6619 and #6620 have seen activity but no resolution despite being open for 3 days. PRs #6634 and #6636 were opened today and require code review. The stale #6426/#6427 pair addresses critical execution tool stability and should be prioritized if not already in review.

---
*Digest generated from real-time GitHub data. All links point to `github.com/HKUDS/nanobot`.)*


</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

Here is the project digest for Hermes Agent as of 2026-11-12.

### 1. Today's Overview
Hermes Agent is currently in a state of high velocity, with 50 PRs merged or closed in the last 24 hours and 7 issues updated. The project shows strong engineering momentum, particularly in gateway and plugin stability. However, the issue queue remains active with critical platform-specific bugs (Windows Desktop, Telegram sessions) alongside new feature additions, indicating a push toward both polish and expansion.

### 2. Releases
No new releases were published today. The latest merge activity consists of internal bug fixes and plugin bumps (e.g., fish-audio v1.14.0, imagegen 1.7.0) which do not constitute a public version bump but enhance the existing v0.22.x base.

### 3. Project Progress
A significant portion of today's 50 PR activity focused on the gateway and plugin ecosystem. Key advancements include:
*   **Gateway Reliability:** PR #153469 addressed restart loops and `--replace` takeovers that were spamming "Gateway online" messages to home chats, preventing chat flooding.
*   **Telegram UX:** PR #153436 and #153429 resolved issues where streaming previews got stuck with cursors or were truncated mid-word when interrupted by `/stop` or `/new`.
*   **Cron & Sessions:** PR #153447 and #153534 improved cron output delivery to Telegram DMs and ensured topic-born jobs report back into their correct topics, fixing leakages into general chat.
*   **Plugin Expansion:** Three new plugins were cataloged: `hermes-local-voice` (offline transcription), `plugin-scout` (security sandbox), and `pilot` (interactive TTY terminal).

### 4. Community Hot Topics
The most discussed items today reflect user concerns about stability and cross-platform compatibility:
*   **Windows Desktop Crash (Issue #146763):** The top open issue details a `service_identity_unverified` error when running the Microsoft Store version of Hermes Desktop. With 4 comments, this is the most urgent stability blocker for Windows users, suggesting a potential mismatch between the Store package and the local backend hostname resolution.
*   **Webapp Transcript Bug (Issue #148686):** A P2 bug where the foreground transcript in the webapp becomes stale, showing older messages while newer ones are persisted in the session. This creates confusion about agent status.
*   **Telegram Forum Topics (Issues #148953 & #151520):** Two related closed issues highlight a systemic problem: kanban notifications and Slack/DM threads fail to deliver when `parent_chat_id` is missing, causing events to be "unroutable" in forum topics or unrelated channels.

### 5. Bugs & Stability
The bug surface is currently split between critical platform crashes and granular gateway routing bugs:
*   **Critical:** Issue #146763 (Windows Store `service_identity_unverified`) and #148686 (Stale webapp transcripts) are the highest severity open bugs.
*   **Moderate:** Issues #147522 (Telegram group kanban `user_id` NULL) and #151520 (Slack DM thread rejection) affect workflow integrity but have corresponding closed PRs (#147522 and #153447/#153534) that appear to be fixing the underlying routing logic.
*   **Gateway Flood Protection:** PR #153476 implemented an 8-message split cap for Telegram replies to prevent flood bans on long responses, a significant stability improvement for high-throughput users.

### 6. Feature Requests & Roadmap Signals
The PR activity signals a roadmap focused on "agent capability" and "offline-first" features:
*   **Interactive Interfaces:** The addition of the `pilot` plugin (PR #153787) and `hermes-local-voice` (PR #152986) suggests a push to give agents more tangible, local interaction capabilities (TTY and voice) without relying solely on cloud APIs.
*   **Plugin Discovery:** The continued growth of the plugin-catalog (adding `detonator`, `scout`, `visual-memory`) indicates a maturation of the extensibility model, aiming to make Hermes a platform for specialized agents rather than a general assistant.
*   **Desktop Integration:** PR #154009 adds a "make it smart" catalog entry, hinting at future desktop-aware agent features and pending-approval workflows.

### 7. User Feedback Summary
User feedback today centers on two poles: **Reliability** and **Usability**.
*   **Dissatisfaction:** Windows Store users are experiencing startup failures due to identity verification errors, and Telegram users are frustrated by notification silences in forum topics and lost thread context in cron jobs.
*   **Satisfaction:** The community is actively engaging with the plugin hackathon entries and appreciating the granular control over gateway behavior (e.g., the split message cap and reaction handling for queued messages).

### 8. Backlog Watch
Several items require maintainer triage to prevent backlog growth:
*   **#146763 (Windows Store Bug):** Open since Oct 30, this is the oldest active issue and currently has no assigned owner or fix PR. Given its impact on the primary distribution channel (Microsoft Store), it warrants immediate attention.
*   **#148686 (Webapp Transcript):** Open since Nov 4, this bug affects the primary web dashboard experience. A fix would greatly improve the perceived reliability of the agent's memory.
*   **PR #153053 (Gateway Photo Handling):** Merged today, but the related issue (#132371, #138365) history shows this is a tricky edge case. It is worth monitoring if similar photo-drop issues resurface in other media types.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Generated on:** 2026-11-12

### 1. Today's Overview
PicoClaw exhibits low but focused activity for 2026-11-12, with only 3 issues updated in the last 24 hours. The project maintains a stable state: 1 open issue and 2 closed issues, while the pull request pipeline remains idle. The most significant development is the emergence of a critical security concern regarding hook re-initialization, though no code has been merged today. Overall, the project appears to be in a maintenance phase with attention on UI organization and security hardening.

[GitHub Repository](https://github.com/sipeed/picoclaw)

### 2. Releases
No new releases were published today. The latest commit activity does not indicate a new version tag, suggesting the project is either in active development toward a future release or maintaining the current stable branch without a tagged milestone.

### 3. Project Progress
Merged and closed PR activity was nil today (0 updated). The two closed issues (#3450 and #3449) were resolved previously (as of 2026-11-11), indicating cleanup of stale tickets rather than new feature integration. Progress this period is limited to issue triage and resolution backlog.

### 4. Community Hot Topics
The most active discussion centers on Issue #3456, an open security item with 1 comment as of the latest update. This issue addresses a race condition where a failed approval-hook re-initialization during gateway reload leaves tools ungated—a critical access control flaw. While low in comment count, the label "Security" and the technical nature of the flaw warrant attention. Issue #3450, recently updated, concerns Web UI chat folder organization, reflecting community demand for better session management in the launcher interface.

- **#3456** [OPEN] Security: a failed approval-hook re-initialization during reload leaves the gateway serving with tools ungated — 1 comment — [View](https://github.com/sipeed/picoclaw/issues/3456)
- **#3450** [CLOSED] Web UI: chat folders to organize launcher session history — 2 comments — [View](https://github.com/sipeed/picoclaw/issues/3450)

### 5. Bugs & Stability
Two bugs were closed today, both marked with the `[stale]` label prior to closure:
- **#3449** [CLOSED] BUG report from rajkumar-madhu — details unspecified but categorized as a bug fix.
- **#3450** [CLOSED] [stale] Feature for chat folders — resolved, likely implementing the requested organizational feature.

No new crash reports or regressions emerged in the last 24 hours. The closed issues suggest the maintainers are actively addressing reported stability and quality-of-life concerns.

### 6. Feature Requests & Roadmap Signals
The open issue #3450, though closed today, signals a clear roadmap direction: UI enhancements for the launcher’s session history. Users want to move beyond a flat chat list to organized folders, indicating a need for modular conversation management. The security issue #3456 also points to a roadmap imperative—ensuring configuration reloads do not compromise tool approval gates. These two areas (UI organization and security hardening) likely feature in the next development cycle.

### 7. User Feedback Summary
User feedback through issues reveals two primary pain points:
1. **Usability:** The flat session list in the Web UI (Issue #3450) makes it difficult to manage long-running launcher histories, prompting requests for folder-based organization.
2. **Security/Integrity:** The approval-hook re-initialization flaw (Issue #3456) risks unintended tool execution after gateway reloads, a serious concern for users relying on access controls.

Satisfaction appears mixed: while bugs are being closed, the open security issue may erode trust if not resolved promptly. The lack of new PRs suggests the community is currently consuming features rather than contributing code.

### 8. Backlog Watch
Several items merit maintainer attention:
- **#3456** remains open and unaddressed since 2026-11-04. Given its security classification, this should be a priority for the maintainers to prevent potential privilege escalation or unintended tool access post-reload.
- **#3450** was closed today, but the underlying feature request for chat folders may require follow-up UI work if the closed status was merely stale-cleanup rather than full implementation.
- **#3449**’s quick summary was submitted on 2026-10-26; if not fully resolved, it may join the stale backlog.

Maintainers should monitor the security issue (#3456) and verify the closure of #3450 aligns with user expectations for the folder-organization feature.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest**
**Date:** 2026-11-12
**Source:** [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

### 1. Today's Overview
The NanoClaw project exhibited moderate activity on 2026-11-12, characterized by a healthy influx of Pull Requests but a standstill in Issue resolution. The repository processed 24 Pull Requests in the last 24 hours, with 14 merged or closed and 10 remaining open. Conversely, no new Issues were reported in the last 24 hours, and the total count of open Issues remains at zero. This pattern suggests a maintenance-focused day, likely driven by automated dependency updates and CI hardening rather than new feature development or bug triage. The project continues its transition toward version `v2026.10.0`, with recent image hardening updates stabilizing the agent environment.

### 2. Releases
No new releases were published on 2026-11-12. The latest development branch remains centered on the `v2026.10.0` release cycle. The most significant recent artifact is the agent image refresh, moving from `v2026.10.0` to `v2026.10.0-20261111T2249` (PR #4339), which updates the hardened container image SHA to `8250093fbe92...`. This indicates an active effort to refresh base security layers without altering the public API version.

### 3. Project Progress
Progress today was dominated by Pull Request merges and closed items, focusing on stability, security hardening, and developer experience.
*   **Security & Hardening:** A critical batch of PRs addressed credential and channel security. `PR #4156` and `PR #4147` implemented text escaping and approval card fixes to prevent card overflow or link injection on platforms like Slack and Discord. `PR #4316` hardened the sign-in flow by ensuring HTTPS-only device code links are opened, avoiding shell execution via `cmd.exe` on WSL.
*   **Infrastructure & CI:** `PR #4318` introduced a read-only token for CI operations and added a release target verification step to the workflow, preventing accidental code execution from unmerged SHAs.
*   **Agent & Container Fixes:** `PR #4317` fixed a Docker build orphan cleanup issue where shell strings were built from install folder paths, preventing potential path injection errors. `PR #4320` resolved a Mattermost delivery bug where replies exceeding 16,383 characters were silently rejected, implementing a split-reply mechanism.
*   **Skill & Integration:** `PR #496` (merged today after being open since February) added a "things.app" skill leveraging `things3-cli`, expanding NanoClaw's native task management integration on macOS.

### 4. Community Hot Topics
The most active discussion thread today is **`PR #4339`**, an automated image refresh bot update. This PR locks the hardened image for `v2026.10.0` to a specific SHA (`8250093fbe92...`), replacing a previous snapshot. With zero comments, it reflects the project's reliance on automated bot maintenance for base image security.
Another highly active area is the dependency update queue. **`PR #4337`** (opened yesterday) bumps the `dev-minor-patch` group across one directory with five updates, including `@types/node` from `22.19.17` to `22.20.5` and `globals` from `17.13.0` to `17.14.0`. This is a standard Dependabot cycle crucial for maintaining TypeScript safety and runtime compatibility.

### 5. Bugs & Stability
Bug fixes were the primary driver of merged PRs today, with several stability improvements landing.
*   **Router Stability:** `PR #4335` and `PR #4336` (both closed today) tackled a persistent routing bug where a `/clear` command in one agent's role lookup would incorrectly hold "sticky follow-ups" meant for another agent in the same thread. This fix restores thread isolation.
*   **Mattermost Delivery:** `PR #4320` addressed a hard crash/timeout issue where Mattermost rejected agent replies exceeding 16,383 characters, splitting them into manageable posts.
*   **Question Persistence:** `PR #4328` fixed a UI bug where answering a question on a card would cause the question text to disappear from other channels (like Discord), ensuring the query body is preserved globally.

### 6. Feature Requests & Roadmap Signals
While no new feature requests were reported in Issues today, the merged PRs signal near-term roadmap directions.
*   **Platform Expansion:** The merge of `PR #496` indicates a push toward deeper macOS integration, specifically enabling support for the "Things" task manager via CLI.
*   **Delivery Protocol Maturity:** The implementation of Resend testing (`PR #4188`) and the Mattermost splitting logic (`PR #4320`) suggests a roadmap focus on reliable, multi-format message delivery and robustness against payload size limits.
*   **Security-First CI:** The read-only token implementation (`PR #4318`) signals a maturing DevSecOps posture, likely preparing for broader public deployment or enterprise adoption.

### 7. User Feedback Summary
User sentiment, inferred from PR activity, appears focused on **reliability and cross-platform compatibility**.
*   **Pain Points:** The closed router bug (`#4335/4336`) highlights a frustration with "stale" state management across agents, where commands in one context leak into others. The Mattermost size limit issue (#4320) reflects a common pain point with long-running AI conversations hitting platform message caps.
*   **Satisfaction:** The consistent stream of "cleanup" and "hardening" PRs (dependency bumps, CI token fixes) suggests maintainers are responsive to technical debt, leading to a stable, if quiet, user experience.

### 8. Backlog Watch
Several PRs merged today had been open for several days, indicating a healthy backlog clearance pace.
*   **`PR #4316`** (Opened Nov 9): A hardening fix for sign-in links. It waited 3 days for merge, suggesting a maintainer review cycle focused on the WSL/Windows substrate risk.
*   **`PR #4304`** (Opened Nov 8): A dependency bump group. This waited 4 days, likely awaiting the `PR #4293` prettier reformatting to complete first to avoid format conflicts.
*   **Long-term Open PRs:** `PR #4156` and `PR #4147` (opened in October) remain open, addressing card text escaping and approval card details. These are critical for Slack/Discord stability but have seen no updates in the last 24 hours, representing the oldest active "community-facing" bugs in the queue.

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
**Generated on:** 2026-11-12
**Source:** [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. Today's Overview
LobsterAI shows moderate development activity for 2026-11-12, with 17 pull requests processed (14 merged/closed, 3 newly opened) and no new releases or issue activity in the last 24 hours. The project continues its focus on refining the "Cowork" collaborative interface and managing model context windows. The open PR #3059 proposing 1M token context window support signals an ongoing effort to scale capabilities for power users, while the closed PRs indicate steady progress on UI polish, stability, and packaging fixes. Overall, the project health appears stable with a healthy merge rate (82% of PRs closed today), though the 3 open PRs suggest active development on core UX and model features.

**[GitHub Project](https://github.com/netease-youdao/LobsterAI) | [Open PRs (3)](https://github.com/netease-youdao/LobsterAI/pulls?q=is%3Aopen) | [Merged PRs (14)](https://github.com/netease-youdao/LobsterAI/pulls?q=is%3Amerged+closed)**

---

## 2. Releases
No new releases were published today. The latest release history is currently unavailable.

**[No releases data available]**

---

## 3. Project Progress
**Merged/Closed PRs (14 items):** Today’s merged contributions span multiple areas including renderer, cowork, main, and packaging. Key advances include:
- **Context window & model management:** PR #3058 stabilized bootstrap timestamps across replays for OpenCLaw; PR #3047 resolved model catalog locking after login.
- **Cowork UX improvements:** PR #3060 settled and displayed usage for stopped turns; PR #3055 preserved input caret after adding selected text; PR #3054 prevented scroll jumps in conversation history; PR #3052 avoided layout shift during search prefetch.
- **Packaging & platform fixes:** PR #3056 prevented duplicate macOS notarization; PR #3049 centered the desktop companion orb.
- **Readability & accessibility:** PR #3045 added inline read-aloud for completed replies; PR #3062 fixed legacy reply readability after model switches.

**New Open PRs (3 items):** Three PRs were opened today focusing on explicit context window selection (up to 1M tokens), corrupt metadata tolerance in paged sessions, and preserving turn credit usage after stopping.

**[View all merged PRs](https://github.com/netease-youdao/LobsterAI/pulls?q=is%3Amerged+closed+created%3A2026-11-12)**

---

## 4. Community Hot Topics
The most active discussion today centers on **explicit context window selection** (PR #3059), which allows users to opt into a 1M token context window on eligible managed models. This PR received immediate attention as the newest open item, addressing a long-requested power-user feature. 

Other highly active PRs include:
- **#3061** (Open): Fixes corrupt metadata in paged session messages—critical for users with large conversation histories.
- **#3062** (Open): Addresses broken read-aloud buttons when switching models in legacy sessions.
- **#3061** and **#3062** both created today (2026-11-12) and already have community engagement, suggesting these are regression fixes responding to recent user reports.

**[PR #3059: Support explicit context window selection up to 1M](https://github.com/netease-youdao/LobsterAI/pull/3059) | [PR #3061: Tolerate corrupt metadata in paged session messages](https://github.com/netease-youdao/LobsterAI/pull/3061) | [PR #3062: Keep legacy replies readable after model changes](https://github.com/netease-youdao/LobsterAI/pull/3062)**

---

## 5. Bugs & Stability
**Bugs reported today:** 0 new open issues. However, several stability-related PRs were merged, indicating active regression fixing:
- **PR #3061** tackles corrupt metadata in paged session messages (Fixes #639).
- **PR #3053** ensures stopped turns retain credit usage (user-reported issue).
- **PR #3054** prevents scroll jumps when browsing conversation history.
- **PR #3056** resolves duplicate macOS notarization during packaging.

**Severity ranking:** The corrupt metadata issue (#3061) and credit usage loss on stopped turns (#3053) are highest severity as they affect data integrity and billing transparency. All identified bugs appear to have corresponding fix PRs merged or in review, suggesting good maintainer responsiveness.

**[No new issues reported today] | [Bug fix PRs overview](https://github.com/netease-youdao/LobsterAI/pulls?q=is%3Aclosed+area%3Abug+created%3A2026-11-12)**

---

## 6. Feature Requests & Roadmap Signals
**Feature requests evident in today's PRs:**
- **Explicit context window selection** (PR #3059): Allows users to opt into 1M token contexts, a clear roadmap signal for power users and long-context workloads.
- **Inline read-aloud for completed replies** (PR #3045, just merged): Adds accessibility and consumption features.
- **Editing user messages with version switching** (PR #3051, just merged): Enhances Cowork session flexibility.
- **Banners/ad system** (PR #3048): Indicates a push toward monetization or audience targeting.

**Predicted next-version features:** Based on merged PRs, the next LobsterAI release is likely to include improved context window controls, enhanced session editing capabilities, and stabilized read-aloud functionality. The 1M token context window opt-in (PR #3059) may feature prominently if merged soon.

---

## 7. User Feedback Summary
**Pain points addressed today:**
- **Conversation navigation:** Scroll jumps and layout shifts when browsing history (fixed in #3054, #3052).
- **Session stability:** Corrupt metadata causing paged message reads to fail (#3061).
- **Billing transparency:** Credit usage disappearing after stopping turns (#3053).
- **Model switches:** Broken read-aloud buttons and lost reply readability when changing models (#3062).
- **Packaging friction:** Duplicate notarization slowing macOS releases (#3056).

**Satisfaction signals:** The high merge rate (14/17 PRs) and focus on polish (caret preservation, clock deduping, orb positioning) suggest maintainers are responding to power-user feedback. The absence of new issues indicates the community is currently testing merged fixes rather than reporting fresh bugs.

---

## 8. Backlog Watch
**Items needing maintainer attention:**
- **PR #3059** (Open, created today): Context window selection—high impact, but author attribution appears as a dot-com link; may need maintainer review/labeling.
- **PR #3061** (Open, created today): Corrupt metadata tolerance—critical bug fix, low comment count suggests it may need triage.
- **PR #3062** (Open, created today): Legacy reply readability— important UX regression, minimal discussion.

**Longer-term backlog:** No issues opened in the last 24h, but the project's issue radar should monitor PRs older than 7 days for stalled merges. The 3 open PRs from today are the current focus; if any remain unmerged in 48 hours, they warrant maintainer escalation.

**[Open PRs needing attention](https://github.com/netease-youdao/LobsterAI/pulls?q=is%3Aopen+created%3A2026-11-12)**

---

**Digest generated from real-time GitHub API data. All links point to netease-youdao/LobsterAI repository.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Date:** 2026-11-12

## 1. Today's Overview
Moltis currently shows a healthy but quiet development state. With zero issues and zero new releases updated in the last 24 hours, the project appears to be in a maintenance or stabilization phase. The most significant activity comes from the merge of two pull requests focused on lifecycle events and external agent streaming integration. Overall, the project health is stable, with no critical bugs or active disputes reported today.

## 2. Releases
No new releases were published today. The project has no tagged releases in the observed period. Users are advised to track the main branch for the latest features and fixes, as development continues via Pull Request merges rather than formal versioned releases.

## 3. Project Progress
Two Pull Requests were merged/closed today, representing meaningful architectural additions:

*   **#1257 [CLOSED]** (`fix(hooks)`): Introduced an optional `tool_call_id` to `BeforeToolCall`, `AfterToolCall`, and `ToolResultPersist` events. This change preserves backward compatibility with existing JSON payloads while enabling end-to-end correlation of tool invocations. This is a foundational improvement for debugging and state management.
*   **#1258 [CLOSED]** (`feat(external-agents)`): Added a first-class streaming transport for the official `agy` CLI. This feature allows Moltis to reuse the `agy` Google OAuth session, eliminating the need for a separate Gemini CLI or API key. It also translates `AGY`'s `stream-json` output into Moltis-native formats (text, reasoning, notices, tool calls, sub-agents, and resumable sessions).

## 4. Community Hot Topics
The most active discussions today center on the just-merged PRs:

*   **PR #1257** addresses the need for granular tool call tracking. The underlying need is better observability and "end-to-end" tracing within complex agent workflows.
*   **PR #1258** is a significant feature for users of the `agy` CLI. It solves the friction of managing multiple API keys and OAuth sessions by unifying the streaming pipeline. The community likely values the "resumable session" capability, which suggests a focus on long-running agent tasks.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported or fixed in the last 24 hours. The closed PRs were feature enhancements and bugfixes related to lifecycle events, not stability patches. The project appears stable with no open critical issues at this time.

## 6. Feature Requests & Roadmap Signals
Analysis of the merged PRs reveals the current roadmap signals:
1.  **Lifecycle Granularity:** There is active development around the "Agent lifecycle" events (`AgentEnd`, `MessageSending`, `MessageSent`). Future features may focus on refining these hooks for better integration with external monitoring tools.
2.  **Multi-Provider Streaming:** The integration of `agy` streaming suggests a roadmap trend toward supporting diverse AI tooling ecosystems (beyond just Google/Gemini) and improving "first-class" streaming experiences.

## 7. User Feedback Summary
Since there are no open issues, there is no direct user feedback regarding pain points or dissatisfaction visible in the issue tracker today. However, the merge of PR #1258 indicates that users requiring `agy` integration are a priority group, and the solution directly addresses the pain point of fragmented API authentication.

## 8. Backlog Watch
While no issues are currently open, two merged PRs from September ( #1257 and #1258 ) remain the primary focus of recent activity. Maintainers should ensure that the discussions and implementations from these PRs are fully documented and that any follow-up issues regarding the new `tool_call_id` fields or `agy` streaming behavior are actively monitored.

---
*Data Source: GitHub API for repository `moltis-org/moltis` on 2026-11-12.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the CoPaw project digest for 2026-11-12.

### 1. Today's Overview
CoPaw (QwenPaw) is in a phase of active maintenance following the v2.3.0 release on 2026-11-11. The project shows high daily activity with 15 issues and 50 PRs updated in the last 24 hours, indicating a busy development cycle. While the release introduced new local decision models (Piccolo), it also surfaced several critical upgrade and stability issues, particularly around plugin migration and resource management. The development velocity is strong, with numerous bug fixes and feature implementations landing today.

### 2. Releases
*   **v2.3.0 (Released 2026-11-11):** The latest release focuses on "Piccolo Local Decision Models," adding support for 4B, 9B, and 27B models for tool review and context compaction. It recommends BF16 and Q8_0 quantization for runtime stability. The release aims to improve local AI processing capabilities but has already triggered several migration-related issues reported by users upgrading from earlier versions.

### 3. Project Progress
*   **Merged Fixes:** 18 PRs were merged/closed today. Key merges include **#8689** fixing sandbox ACE writing on volume roots (Windows), **#8606** cleaning up dead external links in documentation, and **#8679** resolving community password login issues on Platform instances.
*   **Feature Advancement:** Significant progress was made on local AI infrastructure. **#8649** merged llama.cpp GPU controls and runtime auto-update, forming the foundation for future MLX and other backend integrations. **#8578** introduced the ability to surface stale daily notes as inbox reminders, improving the ReMe memory workflow. **#8671** added functionality to reconnect externally started chat runs.

### 4. Community Hot Topics
*   **Upgrade Migration Crisis (#8684, #8682):** The most urgent community conversation centers on the v2.3.0 upgrade. **#8684** reports that upgrading leaves built-in channel plugins (like Matrix) on old sources, preventing new fixes from applying. **#8682** details worker crashes on Linux due to missing `HOME` or `QWENPAW_WORKING_DIR` environment variables when using official channel plugins. These issues suggest a breaking change in the plugin architecture between v2.2.x and v2.3.0.
*   **Query Error Spam (#8674):** A critical usability bug where querying errors generates full conversation JSON snapshots without retention limits, continuously consuming system temp directory space. This issue has garnered attention for its impact on system stability.

### 5. Bugs & Stability
*   **Critical - Plugin Crash on Linux (#8682):** Workers crash immediately on startup with `RuntimeError: Could not determine home directory`. This is blocking the use of official channel plugins (WeChat) on Linux systems.
*   **Critical - Memory Index Failure (#8580):** The memory tag index fails to rebuild, causing `/memory/tags` to return 503 errors. Tags are generated but become unreadable, indicating a deserialization or caching bug in the memory system.
*   **High - Tilde-comma Path Heuristic (#8688, #8689):** A benign Python heredoc containing a tilde-comma (`~,`) aborts deep path inspection, crashing the sandbox/deep scan functionality. A fix PR **#8689** is already open.
*   **High - Repetitive Memory Search (#8361):** Even after duplicate search protection triggers, the system fails to produce a normal response (finalize/recovery), leaving the agent in a broken state.

### 6. Feature Requests & Roadmap Signals
*   **Documented Plugin Data Directories (#8686):** A request to give plugins a documented data directory to prevent destructive file operations during cleanup passes. This aligns with the infrastructure work in **#8649** and **#8687**.
*   **Markdown Preview UX (#8683):** Users are requesting a better markdown preview experience, specifically size adjustment and full-screen capabilities within the vertical browser view.
*   **Console UX Polish (#8685, #8668):** Focus on stabilizing the composer controls during window resizing and reducing idle CPU consumption from always-on decorations.

### 7. User Feedback Summary
Users are experiencing a mix of excitement about the new local models (Piccolo) and frustration with the v2.3.0 upgrade path. The primary pain point is the **stability of the plugin ecosystem** post-upgrade; many users report that their configured setups (particularly Matrix and WeChat) broke or failed to activate after updating. There is also significant dissatisfaction with the **console UI** during long tasks, specifically the visual inconsistency between "Thought" cards and "Tool" cards, and the inability to distinguish between multiple browser tabs due to static titles. The "Query Error Dump" issue highlights a concern about silent resource leakage in error handling.

### 8. Backlog Watch
*   **#8684 (Open, 1 comment):** The upgrade migration issue requires immediate maintainer attention to ensure plugins migrate correctly on update.
*   **#8682 (Open, 1 comment):** The Linux worker crash is a blocker for Linux users of the official plugin system.
*   **#8580 (Open, 5 comments):** The memory tag index bug has been open since Nov 4th with ongoing discussion; a fix is needed to restore the `/memory/tags` endpoint.
*   **#8674 (Open, 1 comment):** The query error dump file leak needs a retention policy implementation to prevent disk filling.
*   **#8686 (Open, 1 comment):** The plugin data directory request is waiting on maintainer prioritization for infrastructure cleanup standards.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**Generated:** 2026-11-12

## 1. Today's Overview
ZeroClaw is in an active development phase with **45 open issues** and **47 open PRs** updated in the last 24 hours. The project shows strong momentum with 50 total PRs processed recently (3 merged/closed), indicating a healthy contribution pipeline. A significant v0.9.0 release was published, marking the first version where non-operator sign-in is possible via OpenID Connect. Current activity centers on sandbox policy refinement, CI stabilization across platforms, and security hardening for delegate tools and agent confinement.

## 2. Releases
**v0.9.0** released recently (referenced in issue timestamps). This milestone release introduces:
- **Multi-tenant sign-in:** Non-administrator accounts can now sign in via their own OpenID Connect provider.
- **Scoped chat:** Non-admin users receive isolated chat contexts per account.
- **Dashboard enhancements:** Sign-in flow integrated into the web dashboard.
- **117 commits** from **22 contributors** since the previous release.
- **Breaking changes/migration:** As the first release allowing external sign-in, users should review updated authentication configuration and scoped permission models. No explicit migration guide is provided in the release notes, but the RFC #8396 (wire protocol first-class) and associated trackers suggest a restructured provider and onboarding flow.

## 3. Project Progress
**Merged/Closed PRs (last 24h):** 3 PRs closed, including dependency bumps (happy-dom, vite, brace-expansion) and web minor-patch updates. Active PRs show significant feature advancement:
- **PR #7821:** Canonical sandbox_policy schema with application-layer enforcement (refs RFC #6996).
- **PR #8754:** Schema V4 breaking cut removing inert/SaaS/CLI-wrapper config surfaces.
- **PR #9002:** Gateway turn-life preservation after viewer disconnect.
- **PR #9091:** Native macOS/Linux/Windows drivers for computer-use tool.
- **PR #9320:** Cron job timeout alignment with agentic timeouts.
- **PR #9827:** Security fix to stop shell children from escaping validated confinement.
- **PR #9833:** New `web_research` delegate tool with bounded sub-agent loops.

## 4. Community Hot Topics
- **#6996** (29 comments): RFC for Granular sandbox policy — filesystem restrictions. Highlights historical drift between application-layer path admission and OS sandbox backends (Bubblewrap, Landlock, Seatbelt). Community is debating risk profiles and workspace restrictions.
- **#7462** (19 comments): 74 test failures on Windows due to Unix-only test commands, path semantics, and console encoding (Chinese code page 936). Indicates a long-standing CI gap for non-Linux platforms.
- **#8396** (19 comments): RFC to make wire protocol first-class in provider construction and onboarding. Reflects architectural effort to unify provider interfaces.
- **#7432** (17 comments): Tracker for runtime, dashboard sign-in, and gateway delivery roadmap from RFC #5574.
- **PR #9827** (no comment count displayed but open): Security fix for shell child confinement escaping validated boundaries. Critical for multi-tenant deployments.

## 5. Bugs & Stability
- **#12320** (3 comments, created 2026-11-09): Security job fails on every build due to RUSTSEC-2026-0459 (libsqlite3-sys 0.38.2, bundled SQLite 3.53.2). This blocks the CI Required Gate and merge queue. Severity: S1 - workflow blocked.
- **#5869** (5 comments): rumqttc v0.25.1 pins rustls-webpki 0.102.x and rustls-pemfile — RUSTSEC advisory cluster. Dependencies issue currently blocked.
- **#8519** (7 comments): cargo-audit ignores vs. cargo deny deny.toml drift for wasmtime-wasi CVEs.
- **#8279** (5 comments): Delegate bypasses parent's tool allowlist — sub-agent can invoke tools the parent policy excludes (Severity: S0 - data loss/security risk).
- **#8642** (5 comments): MCP/tool-schema cloning drives unbounded RSS growth in agent loop (split from #5542).
- **#9826** (no comment count): CLI refuses to run when an agent's shell spawned the process — privilege escalation risk.
- **#9829** (no comment count): web-fetch truncation issue; large responses (>50KB) to be spilled to workspace files.

## 6. Feature Requests & Roadmap Signals
- **#6996** (RFC): Granular sandbox policy — likely to shape v0.9.1 or v0.10.0 security model.
- **#8396** (RFC): Wire protocol first-class in provider construction — architectural foundation for future provider onboarding.
- **#7432** (Tracker): Runtime, dashboard sign-in, and gateway delivery roadmap — release allocation and sequencing for v0.9.1.
- **#5982** (Feature): Per-sender RBAC for multi-tenant agent deployments — accepted direction building on existing agent/risk-profile model.
- **#5601** (Tracker): Subscription-native provider authentication for Ollama Cloud, Z.AI, Kimi Code, and MiniMax — expanding OAuth/login support beyond current three providers.
- **#6489** (Tracker): Unified capability catalog and plugin migration roadmap — product path toward "Everything is a plugin" north-star.

## 7. User Feedback Summary
- **Authentication & Access:** The v0.9.0 sign-in feature addresses a key multi-tenant need, enabling non-admin users to operate within scoped chat and tool access. Feedback likely focuses on OIDC provider configuration ease and permission granularity.
- **Cross-Platform Stability:** The 74 Windows test failures (#7462) represent a major pain point for users on non-Linux environments, highlighting the need for CI matrix expansion.
- **Security Confinement:** Issues #8279 and #9827 indicate user concerns about delegate tools and shell escapes bypassing parent allowlists. The community is actively working on sandbox policy and confinement boundaries.
- **Dependency & CI Health:** Recurring RUSTSEC failures (#12320, #5869) and audit/deny drift (#8519) create workflow friction, blocking merges and causing user frustration in CI pipelines.
- **Feature Gaps:** Requests for per-skill security permissions (#5775), TOTP enforcement across channels (#3767), and deterministic precondition gates for cron jobs (#5607) show ongoing demand for fine-grained security and operational controls.

## 8. Backlog Watch
- **#12320** (created 2026-11-09): Security job fails on every build — **urgent maintainer attention required** to unblock the merge queue.
- **#8279** (created 2026-06-24): Delegate bypasses parent's tool allowlist — **high priority** security risk requiring policy fix.
- **#8519** (created 2026-06-30): cargo-audit ignores and wasmtime-wasi CVEs remediation — **dependencies health** task.
- **#7462** (created 2026-06-10): 74 test failures on Windows — **CI stability** issue needing platform matrix expansion.
- **#9826** (created 2026-08-07): CLI refuses to run when agent's shell spawned the process — **privilege escalation** risk needing design resolution.
- **#8396** (created 2026-06-27): RFC for wire protocol first-class in provider construction — **architectural decision** needing maintainer review and sponsorship.

*Data source: GitHub api.github.com/zeroclaw-labs/zeroclaw (issues updated last 24h: 45, PRs updated last 24h: 50, new releases: 1)*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*