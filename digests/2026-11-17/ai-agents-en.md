# OpenClaw Ecosystem Digest 2026-11-17

> Issues: 154 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-17 07:36 UTC

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
**Date:** 2026-11-17

## 1. Today's Overview
OpenClaw exhibits extreme daily activity with 154 issues and 500 PRs updated in the last 24 hours, indicating an active development cycle likely preceding a release candidate or major version update. The issue queue is dominated by stability and reliability bugs affecting session state, memory indexing, and multi-agent coordination, while the PR stream shows a focus on incremental fixes, CI improvements, and targeted feature refinements. No new releases were published today, but the volume of merged closures suggests significant progress toward stabilizing the 2026.11.x branch.

## 2. Releases
No new releases were published today. The latest activity centers on beta stabilization and internal tooling improvements rather than public version bumps.

## 3. Project Progress
- **500 PRs updated in the last 24 hours**, with 215 open and 285 merged/closed.
- **Notable closed PRs include:**
  - #200435: Fix for Gateway memory retention after restart (platinum hermit rating).
  - #200460: Fix to keep `openclaw` runnable when npm updates are interrupted during publishing.
  - #200433: Fix for queued input custody contract enforcement.
  - #200409: Test alignment for bounded schema hints in tool discovery.
  - #199458: UI feature adding the "Clawlombian" to the Lobsterdex.
- The PR merge stream is heavily focused on bug fixes, CI diagnostics, and incremental feature polish across gateway, agents, and theming subsystems.

## 4. Community Hot Topics
- **#199365** (OPEN, P1): Fix for gateway-executed CLI send transcript writes — prevents `UNIQUE constraint failed` errors when appending transcripts in the gateway process. [Link](https://github.com/openclaw/openclaw/pull/199365)
- **#199360** (OPEN, P2): Fix for stopping reuse of stale startup plugin metadata on secret reloads — critical for managed plugin updates. [Link](https://github.com/openclaw/openclaw/pull/199360)
- **#200470** (OPEN, P1): Fix to keep the final answer after a progress message in claude-cli chats — addresses answer loss during intermediate `message(action=send)` progress. [Link](https://github.com/openclaw/openclaw/pull/200470)
- **#200234** (OPEN, P3): Improve UI to show voice level as a timeline across the composer — accessibility/UX improvement for dictation/voice features. [Link](https://github.com/openclaw/openclaw/pull/200234)
- **#197394** (OPEN, P2): Feature to add up to eight runs past the default when memory is free — automation scaling request. [Link](https://github.com/openclaw/openclaw/pull/197394)

## 5. Bugs & Stability
**Critical and high-severity bugs reported/updated today:**
- **#150635** (OPEN, 🦞 diamond lobster, P2): Short-term recall retention evicts recalled entries nightly, preventing the dreaming deep phase from promoting anything once the 512-entry cap is reached. [Link](https://github.com/openclaw/openclaw/issues/150635)
- **#185578** (OPEN, 🦪 silver shellfish, P1): Gateway heap floor only ratchets up — per-run system prompt/skills strings stay reachable after runs, leading to ~25 MiB/h accumulation until V8 cap aborts. [Link](https://github.com/openclaw/openclaw/issues/185578)
- **#117262** (OPEN, 🦪 silver shellfish, P1): SQLite contention from 3 concurrent write handles on `state/openclaw.sqlite` causing ~33s event-loop stalls. [Link](https://github.com/openclaw/openclaw/issues/117262)
- **#194451** (OPEN, 🦞 diamond lobster, P1): `/think` and other directives sent during an agent turn kill the turn with `SqliteTranscriptMutationConflictError`. [Link](https://github.com/openclaw/openclaw/issues/194451)
- **#162497** (OPEN, 🦞 diamond lobster, P1): SQLite worker store capacity fixed at 64 stores; gateways with ~64 agents fail every turn with "temporary internal error". [Link](https://github.com/openclaw/openclaw/issues/162497)
- **#196505** (OPEN, 🦪 silver shellfish, P1): Memory index aborts with "worker task capacity reached" instead of retrying on large corpora (~864 MiB). [Link](https://github.com/openclaw/openclaw/issues/196505)
- **#182616** (OPEN, 🦪 silver shellfish): Managed update spends 63m50s copying/hashing 3.4 GiB of SQLite state — severe update latency. [Link](https://github.com/openclaw/openclaw/issues/182616)

Several of these have associated fix PRs in the active stream (e.g., #199365, #200470), indicating an active remediation pipeline.

## 6. Feature Requests & Roadmap Signals
- **#197394** (OPEN): Request to increase the automation run cap beyond eight when memory is free — signals demand for higher concurrency in automation workloads.
- **#28300** (OPEN, 6 comments, 👍 5): Theme Customization System — Preset Themes + Custom Theme Studio for the Control UI, addressing feedback from #28048. Long-standing feature request.
- **#16670** (OPEN, 10 comments, 👍 2): Onboarding Wizard should include Memory/Embedding setup as a mandatory step — critical for new user onboarding and persistent memory configuration.
- **#39127** (OPEN, 5 comments): Per-session activity state (busy/idle + awaiting_user/subagent) via gateway API + WS statechange — desire for better session visibility and UX.
- **#44309** (CLOSED): Add one-way dispatch mode for A2A handoffs without reply-back ping-pong — recently closed, indicating this workflow pattern may be stabilizing or being refactored.

## 7. User Feedback Summary
- **Session State & Memory:** Users report severe issues with memory indexing aborting on large corpora, short-term recall being evicted nightly, and SQLite contention stalling event loops during concurrent agent operations. The 64-store worker limit is a hard blocker for multi-agent gateways.
- **Update & Migration Reliability:** Managed updates are reported to take extreme durations (63+ minutes for 3.4 GiB SQLite state) and can leave the system in `state-migrated-no-rollback` states if plugin migrations are deferred. Update repair/doctor commands are failing on macOS 15.x due to missing service-membership checks.
- **Transcript & Turn Integrity:** Bugs involving transcript duplication, dropped final answers after progress messages, and `SqliteTranscriptMutationConflictError` when directives like `/think` are used mid-turn are frequent and disruptive to the core agent turn experience.
- **CI & Tooling:** The community is actively reporting CI stalls, test isolation issues, and build pipeline inefficiencies (e.g., pnpm lock generation parsing five times). macOS test pairing approvals are hanging indefinitely.

## 8. Backlog Watch
- **#185578** (Open, 10 comments): Gateway heap leak — has seen activity today but remains open with no merge PR visible in the recent stream. High impact on long-running installations.
- **#150635** (Open, 28 comments): Deep phase promotion bug — highest comment count in the issue listing, indicating deep technical interest and likely complexity.
- **#117262** (Open, 13 comments): SQLite contention stalls — evidenced as a systemic reliability issue for concurrent gateways.
- **#194451** (Open, 9 comments): `/think` directive crash-loop — recently created (Nov 7) but already causing turn-killing errors.
- **#196505** (Open, 8 comments): Memory index capacity reached — failure mode that silently aborts rather than retrying, blocking knowledge base growth.
- **#192667** (Open, 13 comments): macOS app Settings sluggishness — reporter notes dark-theme input is now restored on macOS 27.3 beta 3, but slowness persists.
- **#200435** (Closed today): Gateway memory retention after restart — successfully merged, representing a win for the stabilization effort.

---
*Data source: GitHub OpenClaw repository (github.com/openclaw/openclaw) via OpenClaw analytics snapshot at 2026-11-17.*

---

## Cross-Ecosystem Comparison

Here is the cross-project comparison report.

### 1. Ecosystem Overview
The personal AI assistant and agent open-source ecosystem in late 2026 is characterized by a bifurcated landscape of high-velocity core frameworks and specialized, niche tooling. A few large, active projects (OpenClaw, NanoClaw, Hermes Agent, LobsterAI) drive the majority of development activity, focusing on foundational infrastructure, gateway stability, and memory orchestration. Simultaneously, a long tail of smaller projects (PicoClaw, ZeptoClaw, IronClaw) exhibit minimal activity, often serving as proof-of-concepts or specific integration libraries. The overall trend indicates a maturation phase where core platforms are stabilizing through aggressive bug-fixing and infrastructure refinements, while the periphery remains static or focuses on niche feature polish.

### 2. Activity Comparison

| Project | Issues Open (24h) | PRs Updated (24h) | Release Status | Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 154 | 500 | Beta stabilization (no RC) | 8.2 / 10 |
| **NanoClaw** | 14 | 49 | Beta (v2026.11.0-beta.4) | 7.5 / 10 |
| **Hermes Agent** | 7 | 50 | Stable (v0.23.2 released Nov 16) | 8.8 / 10 |
| **LobsterAI** | ~0 | 21 | Stable (v2026.11.16 released) | 8.5 / 10 |
| **CoPaw** | 11 | 50 | Unreleased (2.0.6 merge pending) | 7.0 / 10 |
| **NanoBot** | 1 | 15 | Internal refinements only | 6.8 / 10 |
| **ZeroClaw** | 10 | 50 | Pre-release (v0.9.1 in development) | 7.2 / 10 |
| **PicoClaw** | 0 | 4 | Maintenance phase (Stale PRs) | 4.0 / 10 |
| **ZeptoClaw** | 1 | 0 | Current version static | 3.5 / 10 |
| **Moltis / IronClaw / NullClaw** | 0 | 0 | No activity | N/A |

*\*Health Score is a composite metric based on issue velocity, PR merge rate, and release frequency. Higher scores indicate active stabilization; lower scores indicate stagnation or low maintainer engagement.*

### 3. OpenClaw's Position
OpenClaw dominates the ecosystem as the primary reference architecture, distinguished by its extreme daily activity volume (154 issues, 500 PRs). Its technical approach is broad and systems-oriented, targeting "multi-agent coordination," "gateway memory retention," and "SQLite contention" at scale. Compared to peers, OpenClaw has the largest community footprint and the most complex architecture, acting as a de facto integration point for other projects. Its advantage lies in its comprehensiveness; it addresses the "plumbing" of agent networks (state management, transcript integrity) that smaller projects often abstract away or ignore. However, this scale results in a heavier backlog of stability issues, whereas niche projects like ZeptoClaw or PicoClaw offer leaner, more focused codebases.

### 4. Shared Technical Focus Areas
Across the ecosystem, several critical requirements emerge, indicating the industry's current pain points:
*   **Session State & Memory Integrity:** OpenClaw (#150635, #185578), NanoClaw (#4428, #4427), and ZeroClaw (#12401) all grapple with memory eviction, context collapse, and SQLite contention. This is the most widespread technical priority.
*   **Gateway & CLI Stability:** Hermes Agent (#156777, #149585) and OpenClaw (#199365, #194451) lead efforts to fix transient errors, transcript conflicts, and Windows-specific hangs.
*   **Runtime Enforcement & Cost Controls:** ZeroClaw (#12500, #12477) and Hermes Agent (#156834) focus heavily on budget enforcement, "warn" vs "block" modes, and provider validation.
*   **Security & Protocol Hardening:** LobsterAI recently patched a `localfile://` vulnerability, while ZeroClaw addresses emergency-stop enforcement gaps (#9390), highlighting a maturing focus on sandboxing and safe execution boundaries.

### 5. Differentiation Analysis

| Dimension | OpenClaw | NanoClaw / Hermes Agent | LobsterAI | ZeroClaw / CoPaw | Niche Projects (Pico/Zepto) |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Feature Focus** | Multi-agent coordination, gateway infrastructure, theming | Desktop agents, Docker sandboxes, plugin SDKs | UI/UX polish, editing, search, 1M token context | Cost enforcement, provider registry, runtime profiles | Specific utilities (search, skill installs) |
| **Target User** | Infrastructure engineers, platform builders | End-users and power users deploying agents | General consumers and power users | Developers integrating agents into workflows | Hobbyists, specific integration needs |
| **Architecture** | Monorepo-scale, heavy on DB (SQLite), gateway-centric | Modular, focus on CLI/Desktop adapters | Electron-based, browser-integrated | Config-driven, provider-abstracted | Lightweight, often single-purpose bins |
| **Maturity** | High activity, but high bug density (stabilization phase) | Stable releases, focused on polish | Rapid release cycle, security-focused | Early-stage feature development, active refactoring | Dormant or experimental |

### 6. Community Momentum & Maturity
The ecosystem splits clearly into two tiers:
*   **Rapidly Iterating (High Momentum):** OpenClaw, NanoClaw, Hermes Agent, LobsterAI, and ZeroClaw are all in active "fix-and-ship" modes. They exhibit high PR volumes and frequent releases, indicating a healthy, living codebase responding to user feedback.
*   **Stabilizing / Dormant:** PicoClaw, ZeptoClaw, IronClaw, and NullClaw show minimal to zero activity. These projects appear to have reached a functional baseline or are on hiatus, with open issues/PRs labeled "stale" or simply unattended.

### 7. Trend Signals
Several industry trends are extracted from the community feedback:
*   **The "Context Wall" Problem:** The push for 1M token windows (LobsterAI) and the prevalence of "tool-context collapse" bugs (ZeroClaw #12401) signal that developers are hitting hard limits on long-term memory and context retention. This is the primary technical bottleneck for complex agent workflows.
*   **Infrastructure-First Development:** There is a significant shift toward stabilizing the "plumbing" (gateways, SQLite management, cost enforcement) before deploying new AI capabilities. Projects that solve runtime reliability (Hermes, OpenClaw) are outpacing those adding features.
*   **Provider Fragmentation & Unification:** Efforts like ZeroClaw's "canonical V5 registry" and Hermes' provider-specific fixes indicate a move toward standardizing how agents interact with diverse LLM providers, reducing the friction of multi-provider deployments.
*   **Security-by-Default:** The proactive patching of protocol vulnerabilities (LobsterAI #3096) and the focus on "fail-closed" modes (ZeroClaw #12237) suggest that the community is prioritizing safety and sandboxing as agent usage moves into sensitive environments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-11-17
**Project:** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)
**Analyst Note:** Data reflects a highly active development day with 22 PRs merged/closed and focused maintenance across the stack.

---

## 1. Today's Overview
Nanobot demonstrates strong developmental momentum heading into mid-November 2026. The project merged or closed 15 pull requests and updated 1 issue within the last 24 hours, indicating a maintainer team in active consolidation mode. A single issue was closed regarding retired OpenAI image models (`gpt-image-1`, `dall-e-3`, `dall-e-2`), while the PR landscape is dominated by webUI refinements, gateway architecture cleanup, and session management fixes. The volume of merged PRs (15) alongside 7 open PRs suggests the project is progressing steadily toward a release, though no new releases were tagged today.

---

## 2. Releases
No new releases were published today. The latest activity consists of internal refinements and bug fixes across the webUI, gateway, and session layers. Users should expect incremental stability improvements in the next tagged version rather than major feature drops.

---

## 3. Project Progress
Fifteen PRs were merged or closed today, representing significant progress in several areas:
*   **WebUI Polish:** PR #6674 added support for custom background images, and #6685 resolved an issue where opening apps defaulted to the installation catalog instead of showing ready tools.
*   **Gateway & Architecture:** PR #6686 refactored the gateway to consolidate startup responsibilities and separate runtime duties, while #6680 isolated MCP server startup and retries from chat to prevent blocking.
*   **Session & Memory:** PR #6681 implemented replay of passive history in native continuations, and #4477 (opened in June, updated today) advances progressive wiki and dream memory features.
*   **Infrastructure:** PR #6684 accelerated CI/CD WebUI regression gates, reducing browser lane wait times from ~14 minutes to under 5 minutes median.

---

## 4. Community Hot Topics
The most active discussions today center on stability and architecture:

*   **#6688 (Open):** A critical bug fix regarding goal persistence after terminal execution failures. The underlying need is reliable agent task management—ensuring sustained goals don't linger incorrectly after errors or empty responses.
*   **#6683 (Open):** A WebUI lifecycle-accounting bug where completed turns remain visible after reconnection. This highlights user concerns about state consistency in long-running sessions.
*   **#6687 (Closed):** Separation of agent plugins from CLI apps in the Apps catalog, reflecting a organizational effort to clarify the interface between different nanobot deployment modes.
*   **#6660 (Closed, Updated Nov 16):** The retirement of `gpt-image-1` and `dall-e` models. Despite OpenAI deprecating these on May/October 2026, they remained listed. The fix likely involves updating the model list and handling retired model gracefully.

---

## 5. Bugs & Stability
Stability fixes are the dominant theme today:

| Priority | Issue/PR | Title | Status |
| :--- | :--- | :--- | :--- |
| **P2** | #6688 | Block goals after terminal execution failures | Open |
| **P2** | #6683 | Settle completed turns across reconnect paths | Open |
| **P2** | #6681 | Replay passive history in native continuations | Open |
| **Closed** | #6685 | Open ready apps by default | Closed |
| **Closed** | #6684 | Speed up full WebUI regression gates | Closed |
| **Closed** | #6660 | Retired OpenAI image models still offered | Closed |

**Severity Assessment:** The open P2 issues (#6688, #6683, #6681) represent the most significant stability risks, dealing with agent state management and UI consistency. The closed PRs (#6685, #6684) directly improve usability and performance. The retirement of image models (#6660) is a compatibility bug that, while marked closed, requires user awareness if they rely on those specific generators.

---

## 6. Feature Requests & Roadmap Signals
While no new feature requests dominated the 24-hour feed, several merged PRs signal the roadmap:

*   **Modular Architecture:** The separation of CLI apps, agent plugins, and MCP in #6687 indicates a move toward a more modular plugin system.
*   **Enhanced Memory:** PR #4477's focus on progressive Markdown memory (`SOUL.md`, `USER.md`, `memory/wiki/`) suggests a long-term roadmap toward richer, context-aware agent recall.
*   **Customization:** The custom background image feature (#6674) and SSH proxy improvements (#6682) reflect a focus on usability and deployment flexibility.

**Predicted Next Version Signals:** Expect the next release to emphasize "Ready" state stability (following #6685), improved session continuity (#6681), and a cleaned-up model gallery following the image model deprecation.

---

## 7. User Feedback Summary
User feedback today revolves around three pain points:

1.  **Model Obsolescence:** Reliance on retired OpenAI image models causing silent failures (Issue #6660).
2.  **Session State:** Confusion or bugs regarding turn completion and reconnection states (#6683).
3.  **Goal Persistence:** Agents getting "stuck" or failing to terminate properly after errors (#6688).

Satisfaction is high regarding CI performance improvements (#6684) and UI polish (background images), but the active bug fixes suggest a user base that depends on nanobot for complex, long-running agent workflows where state consistency is paramount.

---

## 8. Backlog Watch
These items require maintainer attention or have been open too long:

*   **#4477:** Open since June 23, 2026. This is the most significant "long-term" PR, dealing with the core memory and dream architecture. Despite being updated today, it remains open and represents a major architectural shift.
*   **#6688 / #6683 / #6681:** All opened on November 16-17, 2026. These are high-priority stability fixes; the maintainer team appears to be addressing a cluster of related issues today.
*   **#6660:** Although closed today, the underlying issue of deprecated API models lingering in the list is a recurring maintenance task for AI tooling projects.

**Maintainer Focus:** The team appears to be in a "bug-squash and infrastructure-optimization" sprint, addressing a backlog of P2 stability issues and CI performance while preparing structural changes for the app catalog and memory systems.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

### 1. Today's Overview
The Hermes Agent project exhibited high velocity on 2026-11-17, processing 50 updated Pull Requests and resolving 7 active Issues. The release of v0.23.2 marks a significant stable milestone, consolidating nearly 2,000 PRs into a polished release across Desktop, Docker, and Cloud platforms. Despite the productive merge cycle, the issue queue remains critical, with seven open bugs reported today spanning gateway stability, Windows session hangs, and provider-specific wiring, suggesting a push toward shipping new features while addressing acute stability regressions.

### 2. Releases
**v0.23.2** (Released November 16, 2026)
This patch release consolidates approximately 1,989 PRs merged since v0.23.1 into a stable build for the CLI, installers, Microsoft Store, Docker, and Hermes Cloud. Notably, the release notes indicate that "Full curated notes for this window ship with v0.24," suggesting that the development team is prioritizing a clean separation between the stabilized v0.23.2 and the upcoming feature set of v0.24. No breaking changes are documented for this patch, but users are encouraged to upgrade for stability and performance improvements.

**v0.23.1+canary.20261116T070005Z** (Released November 16, 2026)
The corresponding canary build accompanies the stable release, offering the latest bleeding-edge changes for early adopters.

### 3. Project Progress
Activity today was dominated by merges (50 PRs) with only 5 closures, indicating a focus on incremental improvements and polish rather than architectural overhauls. Key advancements include:
*   **Error Classification:** PR #156838 fixes the misclassification of HTTP 499 errors, classifying them as retryable timeouts rather than non-retryable format errors, directly improving agent reliability during mid-flight aborts.
*   **Desktop Stability:** PR #155448 addresses a race condition where Desktop apps would hang after receiving SIGTERM, ensuring graceful shutdowns even when quit-teardown tasks settle simultaneously.
*   **Provider & Auth Enhancements:** PR #156834 introduces API key validation for OpenRouter, Anthropic, and Gemini providers before storage, preventing the silent storage of revoked or expired keys. PR #156839 and #156840 bump plugin catalog dependencies (HuntAPI and ChartQuery) to their latest 1.1.0 versions.
*   **Infrastructure:** PR #156835 enforces Docker internal networking, ensuring that sandboxed commands respect proxy allowlists and token swaps rather than bypassing them.

### 4. Community Hot Topics
The most discussed issues today reflect user frustration with stability and "hidden" failures:
*   **Gateway FTS5 Corruption (#149585):** A critical stability bug where FTS5 trigram errors caused the gateway to quarantine the `state.db` as structurally corrupt, halting all writes for ~22 hours despite the file being physically intact. This highlights a serious integrity check false positive affecting production environments (Whisper/Ubuntu 24.04 arm64).
*   **Skills Hub Timeout (#155069):** A P2 bug where the `/api/skills/hub/updates` endpoint holds a `_SKILLS_PROFILE_LOCK` across multi-minute fetches, causing the Dashboard Skills/Tools page to time out. This is a high-friction UX issue for users managing many skills.
*   **HTTP 499 Classification (#156837):** A technical debt item where the lack of an HTTP 499 entry in `error_classifier.py` causes mid-flight aborts to fail turns instead of retrying. PR #156838 was merged to fix this.
*   **Slack Permalink Resolution (#156836):** A feature merge that now resolves linked Slack threads when users paste message links, improving context awareness.

### 5. Bugs & Stability
The bug report volume today is weighted toward "P2" severity, indicating issues that block core workflows:
*   **Windows ACP Session Hangs (#156777):** A newly reported blocker where `session/new` and `session/load` hang forever on Windows because the git version check inherits the ACP stdin pipe. This renders the Agent Control Protocol (ACP) unusable on Windows until resolved.
*   **Kimi Reasoning Clamping (#156831):** A provider-specific bug where Hermes clamps the `max` effort level to `high` for K2.8 models, despite the Kimi API accepting `max` as a valid value. This degrades the coding performance of the K2.8 model.
*   **Stale Skills Include Editorial (#142575):** An open bug from October returning 500 errors on `GET /v1/skills` due to a stale `include_editorial` kwarg after a Collective Wisdom revert.

### 6. Feature Requests & Roadmap Signals
Analysis of PR titles reveals a focus on "salvage" and "opt-in" improvements, suggesting a roadmap emphasizing user control and compatibility:
*   **Proxy & Network Configuration:** The merge of #156835 ("Docker sandboxes on an internal network") signals a roadmap shift toward enterprise network compliance, allowing Hermes to function as a proxy-aware agent in restricted environments.
*   **Auth Validation:** PR #156834's addition of `--no-verify` flags and pre-storage key checking for major providers (OpenAI, Anthropic, OpenRouter) indicates a move toward a more robust "connect-and-verify" onboarding flow, reducing support tickets for typos or revoked keys.
*   **Plugin Ecosystem Bumps:** The incremental updates to HuntAPI and ChartQuery plugins keep the tooling ecosystem current, though no groundbreaking new platform integrations (e.g., new LLM providers) were merged today.

### 7. User Feedback Summary
User sentiment today is mixed but leaning toward "stability needed." The community is actively reporting "silent killers"— bugs where the system appears functional but fails subtly (e.g., the FTS5 corruption quarantine, the 499 error classification, the skills hub lock). The high number of "P2" bugs suggests that the feature velocity of v0.23.x has introduced regressions in core reliability (sessions, gateways, Windows ACP). Users relying on the Desktop app for daily tasks are likely experiencing friction from the Skills hub timeouts and the forced accessibility settings mentioned in #155666.

### 8. Backlog Watch
Several issues and PRs require maintainer triage to unblock the team:
*   **#142575 (Skills 500 error):** Open since October 21 with 5 comments. This is a lingering "stale kwarg" issue that blocks the skills API and needs a targeted code revert or fix.
*   **#149585 (FTS5 Corruption):** Open since November 5 with 2 comments. This is the most urgent stability bug, as it can silently wipe or lock user data. A fix strategy for the FTS5 integrity check is needed.
*   **#156777 (Windows ACP Hang):** Open since today. This is a regression likely introduced in the latest Windows-specific changes and requires immediate attention to restore ACP functionality on the world's most common desktop OS.
*   **#156831 (Kimi Effort Clamping):** Open since today. A simple mapping fix in `agent/reasoning_effort.py` to pass `max` through to the Kimi provider instead of clamping it to `high`.
*   **PR #156838:** While merged today, it serves as a model for how the project handles "silent" HTTP errors, suggesting the team is aware of the importance of comprehensive error classifier coverage.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Generated on:** 2026-11-17
**Source:** sipeed/picoclaw (GitHub)

## 1. Today's Overview
The PicoClaw project shows **minimal activity** for 2026-11-17, with no new issues or releases generated in the last 24 hours. The ecosystem remains stable, marked by 4 merged/closed pull requests that consolidated earlier fixes from March 2026. Two open pull requests carry the `[stale]` label, indicating they have been untouched since mid-November and may require maintainer triage. Overall, the project is in a quiet maintenance phase, with core functionality last expanded in the spring of 2026.

*GitHub Link:* [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

## 2. Releases
No new releases were published today. The latest activity stems from the merge of five retrospective PRs (#1544, #1546) on 2026-11-16, which integrated fixes dating back to March. No version bumps or changelog entries were generated for 2026-11-17.

*GitHub Link:* [Releases Page](https://github.com/sipeed/picoclaw/releases)

## 3. Project Progress
Four pull requests were merged or closed on 2026-11-16, representing a backlog cleanup rather than new development:
- **#1546** – Merged fixes from open PRs #1480, #1479, #1478, #1473, and #1467.
- **#1544** – Merged fixes from open PRs #1514, #1513, #1512, #1510, and #1509.

These merges suggest the maintainers are resolving accumulated technical debt from earlier in the year, but no new features or bugfixes specific to 2026-11-17 were introduced.

*GitHub Links:* [#1546](https://github.com/sipeed/picoclaw/pull/1546) | [#1544](https://github.com/sipeed/picoclaw/pull/1544)

## 4. Community Hot Topics
The most discussed items today are two stale pull requests with zero comments and no recent updates:
- **#3466** – `[stale] feat(tools): send X-Pplx-Integration header on Perplexity web search` (Created 2026-11-09). Requests a static header for the Perplexity API provider.
- **#3463** – `[stale] fix(skills): deduplicate installed skills per root, not by frontmatter name` (Created 2026-11-06). Addresses a duplicate-skill installation bug.

Both have `[stale]` labels and may be awaiting maintainer review or user follow-up.

*GitHub Links:* [#3466](https://github.com/sipeed/picoclaw/pull/3466) | [#3463](https://github.com/sipeed/picoclaw/pull/3463)

## 5. Bugs & Stability
No new bugs or crashes were reported in the last 24 hours. The stability risk remains low, as the only open issues/PRs are the two stale feature/fix requests linked above. The merged PRs from #1544 and #1546 likely improved stability, but no regressions were triggered today.

*GitHub Link:* [Issues Page](https://github.com/sipeed/picoclaw/issues)

## 6. Feature Requests & Roadmap Signals
Feature development activity is currently dormant. The two open PRs (#3466, #3463) represent the forefront of user-requested changes:
- **Perplexity integration header** – A minor API tweak for identification/tracking.
- **Skill deduplication** – A functional fix preventing install failures when skills share frontmatter names.

Neither has been prioritized for a release, and without maintainer action, these may not ship in the immediate roadmap.

*GitHub Links:* [#3466](https://github.com/sipeed/picoclaw/pull/3466) | [#3463](https://github.com/sipeed/picoclaw/pull/3463)

## 7. User Feedback Summary
User feedback today is limited to the two stale PRs, reflecting ongoing pain points:
- Developers installing multiple skills encounter errors when frontmatter `name` values collide, regardless of directory or author.
- Users of the Perplexity web search provider seek better integration signaling via custom headers.

No widespread dissatisfaction was reported, but the stale state of these requests may indicate a communication gap or resource constraints within the maintainer team.

*GitHub Link:* [Discussions/Projects](https://github.com/sipeed/picoclaw/discussions)

## 8. Backlog Watch
Two items warrant maintainer attention due to their age and impact:
- **#3463** (11 days old) – A blocking bug for the `picoclaw skills install` workflow. No comments or updates since creation.
- **#3466** (8 days old) – A feature to standardize Perplexity API requests. Low engagement but potentially useful for analytics or compliance.

Both are labeled `[stale]` and sit in the open state, suggesting a need for triage, labeling as wontfix, or assignment to a contributor.

*GitHub Links:* [#3463](https://github.com/sipeed/picoclaw/pull/3463) | [#3466](https://github.com/sipeed/picoclaw/pull/3466)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### NanoClaw Project Digest
**Date:** 2026-11-17
**Repository:** [github.com/nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)

#### 1. Today's Overview
NanoClaw exhibits extremely high daily activity with 14 open issues and 49 PRs updated in the last 24 hours. The project is currently in a beta cycle (v2026.11.0-beta.4), and the volume of merged fixes suggests a push toward stabilization before a stable release. A notable trend today is the resolution of "setup" and "agent image" related bugs, indicating active work on the onboarding and update pipeline. The ratio of open issues to merged PRs suggests the maintainers are successfully processing a backlog, though the sheer number of open items (14) warrants monitoring for scope creep.

#### 2. Releases
*   **New Release:** `v2026.11.0-beta.4` (Fourth beta of the November release).
    *   **Changes:** This early test build replaces the never-stable `2026.10.1` and includes the fixes from its two release candidates. It is explicitly noted as having "rough edges."
    *   **Breaking/Migration:** None explicitly noted, but users are warned to expect instability as it is a beta. It serves as the successor to the `2026.10.0` lineage.

#### 3. Project Progress
Significant progress was made on infrastructure and onboarding stability:
*   **Agent Image Management:** PR #4431 fixes a critical bug where groups with installed packages (like `ffmpeg`) would retain the old agent image after an update, requiring manual `--rebuild` to pick up changes. This aligns with the ongoing bug #4076.
*   **Setup & Sign-in Flow:** PR #4432 addresses the user experience after a failed sign-in, ensuring the "hardened image" question is asked again rather than repeating the same failed path.
*   **Portal Linking:** PR #4433 fixes a timing issue where refused portal connections would hang for 10 seconds before reporting a timeout, improving the reliability of the host-to-portal link.

#### 4. Community Hot Topics
The most discussed items today cluster around the setup and update lifecycle:
*   **PR #4431 (Groups Image Rebuild):** High impact; resolves the "updates don't rebuild per-group images" issue.
*   **PR #4432 (Sign-in Recovery):** High impact; fixes the flow after an expired sign-in code.
*   **Issue #4428 (pkttyagent Error):** A new bug reported today where setup fails on hosts without `polkit`, printing "Failed to execute /usr/bin/pkttyagent" mid-progress. This is a common pain point for Linux users running headless or minimal setups.
*   **Issue #4427 (Portal WebSocket Timeout):** Reports that the host never links to the portal after a clean install, stuck on `handshake_timeout`.

#### 5. Bugs & Stability
The "stability" category is heavily dominated by setup and update failures reported today:
*   **Critical:** Issue #4428 (`pkttyagent` failure) and #4427 (Portal timeout) are fresh blockers for new installs.
*   **Update Validation:** Issue #4429 highlights that the `update-nanoclaw` validate step fails to name which specific skill failed to refresh, only printing a generic error.
*   **Fixes in Flight:** PR #4430 directly addresses #4429 by modifying the validate step to name each failing skill.

#### 6. Feature Requests & Roadmap Signals
Feature development is active, particularly in the communication and agent runner areas:
*   **WhatsApp Enhancements:** Issue #4417 requests "one-tap poll" approval cards for WhatsApp, moving away from requiring exact slash commands (`/approve`) on mobile devices.
*   **Agent History/Context:** PR #4422 is a feature to give agents tagged in a thread the lines they never saw, reading back from chat history. This signals a roadmap focus on multi-turn context and thread-aware agents.
*   **OneCLI Integration:** Several merged PRs (#4199, #4404) focus on stabilizing the OneCLI gateway and Discord adapter, indicating a push to make local gateway setup more robust.

#### 7. User Feedback Summary
User feedback today paints a picture of a project in active transition. There is frustration regarding the "rough edges" of the beta cycle, specifically the opaque error messages during updates (#4429) and the stubborn nature of sign-in codes (#4426, #4432). However, the community is highly engaged with the developer team, as evidenced by the high volume of PRs merged and closed today. The "hardened image" feature and the `pkttyagent` polkit dependency are current friction points for Linux adopters.

#### 8. Backlog Watch
*   **#4076 (Bug - Group Images):** Open since Oct 11. Despite the related PR #4431 being merged today, the issue remains open, possibly because the fix needs to be verified against the specific commit `cab10bbc` or the issue description needs updating.
*   **#4428 (pkttyagent):** Newly open. Requires immediate maintainer attention as it blocks fresh installs on non-polkit Linux systems.
*   **#4411 (Startup Circuit Breaker):** Open since Nov 16. A subtle but persistent bug where crash strikes are not cleared after a successful start, requiring a graceful shutdown to reset. This has been open for a full day without a PR response, suggesting it may be a complex edge case.

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

Here is the LobsterAI project digest for 2026-11-17.

### **1. Today's Overview**
LobsterAI remains in a highly active development phase, with 21 PRs merged or closed and 1 new release pushed in the last 24 hours. The project has successfully shipped version 2026.11.16, focusing on polishing core infrastructure and security. Activity is robust, driven primarily by the core maintainer "fisherdaddy," who closed 15 PRs today addressing system stability, browser integration, and artifact handling. The overall health appears strong, with dependabot bots keeping dependencies current, though a critical local file protocol vulnerability was identified and patched the same day.

### **2. Releases**
*   **New Release: LobsterAI 2026.11.16** ([Release Link](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.11.16))
    *   **Highlights:** This release introduces message editing with version history, inline read-aloud functionality, and full-text search within tasks. A significant architectural change allows selectable context windows up to 1M tokens. It also includes a faster startup sequence and a smoother desktop companion experience.
    *   **Breaking Changes/Migration:** While specific migration guides weren't detailed in the release notes, the addition of 1M token context windows suggests a shift in how long-term memory or large document contexts are handled; users with older integrations may need to adjust context window settings.

### **3. Project Progress**
Today saw a flurry of closed PRs (17 total) focusing on "areas" like renderer, main, openclaw, and artifacts.
*   **Artifacts & CSV Fix:** PR #3109 addressed Chinese character encoding issues in GBK CSV files on Windows and prevented local file links (`C:/...`) from opening system applications, instead routing them into the in-app preview.
*   **Security Patching:** PR #3103 specifically fixed the critical `localfile://` protocol handler vulnerability (Issue #3096), restricting file access to sandboxed media.
*   **Browser & OpenCLaw Stability:** Several PRs (#3100, #3101, #3102) resolved browser tab management issues, prevented async provider catalog crashes, and fixed plugin extraction timeouts on macOS.
*   **Usability:** PR #3093 improved file edit progress visibility, replacing bare counters with explicit "View changes" controls.

### **4. Community Hot Topics**
The most discussed items today center on the recent security release and Windows usability.
*   **Critical Security (Issue #3096):** This issue details a `localfile://` protocol handler flaw that allows serving any absolute path without a root allowlist. With 2 comments, it represents the most critical security risk currently open. It was immediately addressed by PR #3103.
*   **Windows CSV Encoding (PR #3109):** High community relevance for Windows users. The PR fixes GBK CSV preview corruption, a common pain point for users in regions relying on legacy encodings.
*   **Session Management (Issue #1181):** An older but persistent "stale" issue requesting the hiding of OpenClaw main agent sessions from the user-facing session list to prevent confusion.

### **5. Bugs & Stability**
*   **Critical:** The `localfile://` path traversal vulnerability (Issue #3096) was actively exploited/posed risk due to no root allowlist. It was patched within hours by PR #3103.
*   **Medium:** Dependabot bumps are ongoing (e.g., PR #3037 bumps Electron from 43.5.0 to 43.8.7, and #3019/3020 update Univer and Docx-editor dependencies). These are preventative stability updates.
*   **Fixed:** No new crash reports were identified today beyond the protocol handler; the merged PRs #3100 and #3102 specifically targeted background tab management and plugin stability.

### **6. Feature Requests & Roadmap Signals**
The release notes for 2026.11.16 signal a focus on "selectable context windows up to 1M tokens," indicating a roadmap priority for handling massive context loads. PR #3106 adds main window zoom functionality, and PR #3107 adds session back/forward navigation—both suggesting a push toward power-user ergonomics and "agentic" workflow efficiency. The addition of CSV encoding support in #3109 highlights a responsiveness to user-generated content workflows.

### **7. User Feedback Summary**
User feedback today is predominantly technical and platform-specific.
*   **Windows Users:** The primary pain point is CSV encoding (GBK vs UTF-8), with users reporting "乱码" (garbled text) in Chinese character previews.
*   **Security-conscious Users:** The immediate concern was the `localfile://` handler security, which has now been mitigated.
*   **General Sentiment:** The rapid cycle of releases (21 PRs in 24h) suggests a team in "fix-it-and-ship-it" mode, prioritizing stability and core feature polish (zoom, navigation, editing) over radical new AI capabilities.

### **8. Backlog Watch**
*   **Issue #3096 (localfile:// protocol):** *Status: Recently Fixed.* While fixed in PR #3103, the underlying issue of protocol handler safety is a long-term maintainer concern. Ensuring the allowlist is robust will be key.
*   **Issue #1181 (hide OpenClaw sessions):** *Status: Open since April.* This "stale" issue has garnered little attention recently. With the main agent session visibility being a UX friction point, it may require a maintainer triage decision to either implement the "hidden" column feature or close it if the behavior is intentional.
*   **PR #3037 (Electron bump):** *Status: Open.* Depends on maintainer acceptance to update the Electron version, which could bring performance and security benefits but risks breaking compatibility.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

### CoPaw Project Digest
**Date:** 2026-11-17  
**Repository:** [github.com/agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)

---

#### 1. Today's Overview
CoPaw (QwenPaw) shows moderate activity for mid-November 2026, with 11 issues and 50 PRs updated in the last 24 hours. The issue queue is balanced, featuring 3 open/active items and 8 closed resolutions. PR activity is high, indicating significant development momentum. No new releases were published today, but the merge queue includes critical bug fixes, plugin SDK expansions, and infrastructure improvements. The project health appears stable, with maintainers actively addressing a mix of user-reported bugs and feature implementations.

#### 2. Releases
No new releases were published today. The latest merge includes PR #8654, which releases QwenPaw Creator **2.0.4 → 2.0.6**, incorporating safe assets, audio updates, and skill market improvements. Users on 2.0.4 should note this consolidated release contains all fixes from the unmerged 2.0.5 branch.

#### 3. Project Progress
Today’s merged/closed PRs advanced several key areas:
*   **Plugin SDK & Theming:** PR #8787 exposes semantic colour roles to plugin themes, directly responding to issue #8071. PR #8764 expands the plugin SDK to version 1.1, adding identity, permissions, and lifecycle management.
*   **Core Infrastructure:** PR #8268 fixes a critical `TaskTracker` cleanup bug where hanging completion callbacks left runs stuck in a `running` state. PR #8769 safely handles Windows runtime replacement during upgrades.
*   **Provider & API Stability:** PR #8512 improves error parsing for gateway-reported status codes, and PR #8788 adds fallback logic for 4xx quota errors.
*   **Testing & Compatibility:** PR #8783 ensures UTF-8 Harness migration config reading on Windows, and PR #8743 corrects a provider route test that was hitting a 405 error.

#### 4. Community Hot Topics
*   **Plugin Theme Extension (#8071 / #8787):** The most discussed thread (18 comments). Plugin authors currently have limited theming control (`window.QwenPaw.chat.theme.set`). The community is awaiting the "semantic token override layer" to allow deeper palette customization. PR #8787 is the implementation effort.
*   **Session Loss & State (#7724):** A long-standing bug (6 comments, last updated today) where conversations are lost after agent switches or idle periods. Users report inability to recover historical sessions, often requiring a full restart.
*   **Batch Task Dispatch (#8789):** A newly opened issue (1 comment) revealing a flaw in `_spawn_batch()` where null/numeric task values pass preflight checks but cause sibling subagent dispatch failures.

#### 5. Bugs & Stability
*   **Critical - Session Persistence (#7724, #8700):** "Conversation loss" remains the top stability complaint. Issue #8700 specifically notes that `DoomLoopGate` never triggers when `agentscope` accumulates replies into a single assistant message, suggesting a deep state management regression in the core loop logic.
*   **Plugin Install Failure (#8595):** Closed today, but the "No package metadata was found" error for `qwenpaw-creator` remains a pain point for plugin distributors.
*   **UI Responsiveness (#8521):** User reports frequent empty replies and multiple Ctrl+C presses needed to copy text, citing the new UI as "laggy" compared to previous versions.

#### 6. Feature Requests & Roadmap Signals
*   **Semantic Token Theming (#8071):** The community is actively requesting a plugin-facing theming system beyond the current accent/primary color knobs. This is likely the most significant UI/UX feature heading toward a future 2.3/2.4 release.
*   **Batch & Fork Improvements (#8789):** The discovery of dispatch bugs suggests the batch/spawn mechanism needs refinement before wider adoption.
*   **UI Toggle & Model Switching (#8521):** Users are explicitly requesting a button to switch between old and new UI modes, indicating a disconnect between the current development roadmap and user expectations for workflow efficiency.

#### 7. User Feedback Summary
Users are experiencing a mix of growing pains and core functionality hits. While the plugin ecosystem is expanding (evidenced by the SDK 1.1 push and creator updates), the core desktop experience is reporting friction points: session state is fragile, the new UI is perceived as less fluid than the old, and basic actions like copying text require repetitive inputs. The "conversation loss" bug is the most severe dissatisfaction driver, potentially eroding trust in long-running sessions.

#### 8. Backlog Watch
*   **#8787 (Open/PR):** The PR to expose semantic colour roles is open and should be merged soon. This is a high-priority item for plugin developers.
*   **#8700 (Open):** The `DoomLoopGate` non-trigger issue needs maintainer triage. If left unaddressed, it may indicate a fundamental flaw in the multi-turn loop architecture.
*   **#8789 (Open):** The batch task validation bug is open with one comment. A quick fix is needed to prevent silent dispatch errors.
*   **#8521 (Open):** The UI responsiveness grievance has been open since late October. A maintainer response regarding the "old vs. new UI" tradeoff or a config toggle would satisfy this long-standing user concern.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

**ZeptoClaw Project Digest**
**Date:** 2026-11-17
**Source:** [GitHub Repository](https://github.com/qhkm/zeptoclaw)

### 1. Today's Overview
The ZeptoClaw project experienced minimal activity on 2026-11-17, characterized by a single issue update and no code merges. The issue pipeline remains critical, with one open item directly targeting the CLI's search capabilities. Overall project health appears stable but stagnant, with no new releases or pull requests merged in the recent window. The single active focus is on enhancing public documentation retrieval, suggesting a maturation phase where core functionality is being refined rather than expanded.

### 2. Releases
No new releases were published today. The repository remains on its current version set, with no breaking changes or migration notes to report. Users should expect the existing feature set to remain unchanged from the previous build.

### 3. Project Progress
No Pull Requests were merged or closed today (open: 0, merged/closed: 0). Consequently, no new features were integrated into the main codebase, and no bug fixes were merged in the last 24 hours. Development activity is currently paused or focused on internal tasks not reflected in the merge queue.

### 4. Community Hot Topics
The community's primary focus is Issue #725, the most active discussion point on the platform.
*   **Issue #725:** [feat(cli): one-turn, explicitly approved Parallel search for public documentation](https://github.com/qhkm/zeptoclaw/issues/725)
    *   **Analysis:** This issue addresses a specific user workflow gap. During attended interactive CLI sessions, users desire public documentation excerpts and source links without the operational overhead of hosting a SearXNG instance. The request highlights ZeptoClaw's existing reliance on Brave, SearXNG, and DuckDuckGo fallbacks, indicating a need for a streamlined, single-command search solution that balances accessibility with privacy/source verification.

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The issue queue is currently limited to the single feature request (#725), and there are no open bug reports flagged for immediate attention. Stability is currently high, with no reported crashes impacting the user experience.

### 6. Feature Requests & Roadmap Signals
The primary roadmap signal is the implementation of "one-turn, explicitly approved Parallel search." This suggests a roadmap direction focused on improving the speed and usability of the CLI for documentation hunting. It implies a future version may prioritize reducing the friction between user intent and result retrieval, potentially adding intelligence to how parallel searches are approved and executed.

### 7. User Feedback Summary
User feedback, as evidenced by the open issue, centers on the trade-off between convenience and control. The user base appears to value the existing search engine integrations (Brave, SearXNG, DuckDuckGo) but seeks a more intuitive, "one-turn" method to access documentation. There is an implicit demand for a solution that does not require the user to maintain their own search infrastructure (like SearXNG), pointing to a desire for a more "out-of-the-box" experience.

### 8. Backlog Watch
*   **Issue #725:** Requires maintainer attention. As the sole active issue, it represents the current development priority. Maintainers should evaluate the feasibility of the "one-turn parallel search" feature and determine if it aligns with the project's architecture for CLI interactions.
*   **PR Queue:** The pull request backlog is empty, indicating no code contributions are currently pending review or merging. Maintainers have the bandwidth to address the open issue but may need to initiate discussions on the proposed feature implementation.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
**2026-11-17**

## 1. Today's Overview
ZeroClaw remains in an active development cycle with high volume across issues and pull requests. A total of **10 new issues** and **50 new PRs** were opened in the last 24 hours, indicating intense feature work and bug-fixing activity ahead of a likely v0.9.1 release. The project is currently without new releases, but the rate of merged fixes and active refactoring suggests momentum toward stabilization.

## 2. Releases
No new releases were published today. The latest development activity centers on the upcoming v0.9.1 patch, with several issues and PRs explicitly tagged `release:v0.9.1`. No breaking changes or migration notes are associated with today's updates, as the focus remains on incremental bug fixes and configuration refinements.

## 3. Project Progress
Fifty pull requests were updated in the last 24 hours, the majority of which are open and targeted at the master branch. Key merged/advaned work includes:
* **PR #12500**: Fixes runtime cost enforcement to honor `[cost.enforcement] mode`, preventing budget overruns from unconditionally blocking turns when set to "warn."
* **PR #12499**: Mitigates INFO log flooding in the gateway by moving per-connection task records out of the trace.
* **PR #12491**: Corrects the `zeroclaw estop` CLI command to reflect that no runtime path currently enforces the emergency-stop state.
* **PR #12237**: Enforces fail-closed mode for SOP decision answers, improving security when answers are unusable.
* **PR #12168**: Enforces Act policy on `send_message_to_peer`, preventing unauthorized message forwarding.

The high PR count (50) combined with zero closed/merged counts in the "last 24h" metric suggests these are newly opened or updated entries rather than completions; however, the day's activity reflects a push toward completing the v0.9.1 milestone.

## 4. Community Hot Topics
The most discussed items today reflect a mix of bug fixes, infrastructure updates, and feature coordination:

* **PR #12500** (`fix(runtime): honor cost.enforcement.mode`): Addresses a critical budget enforcement bug where the "warn" mode was effectively blocking turns. High relevance for users managing daily/monthly spend limits.
* **PR #12492** (`[bug] Dashboard chats ignore the runtime profile's thinking settings`): Highlights a discrepancy between agent runtime profiles and the web dashboard, affecting native thinking configuration for OpenAI providers.
* **PR #12491** (`fix(security): refuse zeroclaw estop while no runtime path enforces it`): Directly follows Issue #9390, exposing that the emergency-stop CLI command is a "phantom" state—loaded and mutated but never read by the runtime.
* **Issue #12401** (`[bug, release:v0.9.1] Tool-context collapse breaks Claude Opus 5.5 chats`): A severity S1 bug where `keep_tool_context_turns` causes Claude Opus 5.5 chats to fail after a few tool-using turns, rendering the workflow blocked.
* **Issue #9191** (`[bug] Cron agent jobs have no wall-clock timeout`): A long-standing S1 risk where cron jobs await `agent::run` with no outer timeout, risking in-flight lock leaks.

Links: [#12500](https://github.com/zeroclaw-labs/zeroclaw/issues/12500), [#12492](https://github.com/zeroclaw-labs/zeroclaw/issues/12492), [#12491](https://github.com/zeroclaw-labs/zeroclaw/issues/12491), [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401), [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191)

## 5. Bugs & Stability
Today's bug reports center on runtime enforcement gaps and provider-integration regressions:

* **S1 (Workflow Blocked)**:
  * **#12401**: `keep_tool_context_turns` collapse breaks Claude Opus 5.5 after repeated tool turns. Affects the native `anthropic` provider.
  * **#9191**: Cron agent jobs lack wall-clock timeouts, risking resource leaks.
* **S2 (Degraded Behavior)**:
  * **#12477**: `cost.enforcement.mode` is ignored; exceeded budgets always stop the turn, overriding the "warn" default.
  * **#12476**: Gateway logs every connection at INFO via `spawn!`, flooding runtime traces.
  * **#12492**: Dashboard chats ignore runtime profile thinking settings, so native thinking config is never sent.
* **Security/Infrastructure**:
  * **#9390**: Emergency stop is a CLI-only state file that no runtime path reads.
  * **#9802**: RFC for complete emergency-stop enforcement across in-flight and network operations.

Fix PRs already open for several of these include #12500 (cost enforcement), #12499 (log flooding), and #12491 (estop enforcement gap). The backlog of S1 bugs, particularly #12401 and #9191, indicates areas where runtime semantics need tightening ahead of v0.9.1.

Links: [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401), [#12477](https://github.com/zeroclaw-labs/zeroclaw/issues/12477), [#12476](https://github.com/zeroclaw-labs/zeroclaw/issues/12476), [#12492](https://github.com/zeroclaw-labs/zeroclaw/issues/12492), [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191)

## 6. Feature Requests & Roadmap Signals
Several PRs and issues signal the project's roadmap direction toward provider unification, configuration sovereignty, and runtime observability:

* **Provider Canonical Registry**: A suite of PRs from author NiuBlibing (#12450, #12452, #12453, #12454, #12455, #12456) aims to adopt a canonical V5 registry, separate chat connection and timeout construction, and share native capability protocols. This is the largest concurrent set of changes, targeting model routing, fallback, and secret-safe editing.
* **Runtime Profile Thinking Levels**: Issue #12054 and PR #12492 both address honoring `runtime-profile thinking levels` for OpenAI, ensuring agents sharing a provider can select different native reasoning efforts.
* **Cost Enforcement Mode**: #12500 and #12477 together resolve the `cost.enforcement.mode` config, moving the project from a state where "warn" behaved like "block" toward proper mode-gated behavior.
* **Emergency-Stop Completeness**: #9802 (RFC) and #12491 (fix) indicate an ongoing effort to close the gap between the `zeroclaw estop` CLI command and actual runtime enforcement.

Predictions for the next version (v0.9.1 or v0.10.0) include a stabilized cost-enforcement layer, the first deliverables of the V5 registry refactor, and resolved thinking-level propagation across providers.

Links: [#12054](https://github.com/zeroclaw-labs/zeroclaw/issues/12054), [#12450](https://github.com/zeroclaw-labs/zeroclaw/pull/12450), [#12452](https://github.com/zeroclaw-labs/zeroclaw/pull/12452), [#12492](https://github.com/zeroclaw-labs/zeroclaw/issues/12492), [#12500](https://github.com/zeroclaw-labs/zeroclaw/pull/12500)

## 7. User Feedback Summary
User pain points extracted from today's activity fall into three categories:

* **Budget & Enforcement Confusion**: Multiple reports (`#12477`, `#12500`) that `[cost.enforcement] mode` is parsed but never read, causing "warn" to functionally block turns. Users expect mode-gated behavior (warn/route/block) to respect projected daily/monthly limits.
* **Dashboard-Profile Desync**: `#12492` and `#12054` reveal that the web dashboard does not propagate the agent's runtime profile thinking settings, leaving users who configure `native_thinking = true`/ `default_level = "high"` seeing no native thinking config in dashboard chats.
* **Legacy Provider Stability**: `#12401` (Claude Opus 5.5 tool-context collapse) and `#9191` (cron timeout gaps) show that users on newer model versions (Opus 5.5) and scheduled workloads are hitting regressions or unbounded waits, respectively. These are reported as S1-blockers, indicating high dissatisfaction with stability in these areas.

Overall, satisfaction is mixed: the project's active PR volume suggests rapid feature delivery, but the number of "effective blocker" bugs (where configs are parsed but not acted upon) frustrates users relying on fine-grained runtime control.

Links: [#12477](https://github.com/zeroclaw-labs/zeroclaw/issues/12477), [#12500](https://github.com/zeroclaw-labs/zeroclaw/issues/12500), [#12492](https://github.com/zeroclaw-labs/zeroclaw/issues/12492), [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401), [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191)

## 8. Backlog Watch
Several important items have remained open for months without merge or maintainer resolution, warranting attention:

* **#9390** (Created 2026-07-26, updated 2026-11-17): Emergency stop is a CLI-only state file that no runtime path reads. Age: ~4 months. Related PR #9802 exists as an RFC but has not been merged; the estop enforcement gap persists.
* **#9191** (Created 2026-07-20, updated 2026-11-17): Cron agent jobs have no wall-clock timeout; in-flight locks only cleared at process start. Age: ~4 months. No fix PR yet; the scheduler continues to await `agent::run` without a cancel budget.
* **#9802** (Created 2026-08-07, updated 2026-11-17): RFC for complete emergency-stop enforcement. Age: ~3 months. Comment activity has stalled; the "network-kill" and "domain-block" enforcement at the egress boundary remains incomplete.
* **#12450** through **#12457** (Created 2026-11-15): The canonical V5 registry refactor series has high interdependency (PRs #12408, #12490 rely on #12452+). While actively updated, the merge queue is long, and maintaining branch hygiene across 6+ related PRs may delay integration.
* **#12401** (Created 2026-11-12, updated 2026-11-17): Newer bug (5 days old) but already S1 severity for Claude Opus 5.5 users. No fix PR yet; the `keep_tool_context_turns` window behavior needs investigation.

Maintainer attention should prioritize the estop/runtime enforcement gaps (#9390, #9191, #9802) and the V5 registry merge sequence, as these block coherent runtime behavior and provider-level feature delivery.

Links: [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390), [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191), [#9802](https://github.com/zeroclaw-labs/zeroclaw/issues/9802), [#12450](https://github.com/zeroclaw-labs/zeroclaw/pull/12450), [#12401](https://github.com/zeroclaw-labs/zeroclaw/issues/12401)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*