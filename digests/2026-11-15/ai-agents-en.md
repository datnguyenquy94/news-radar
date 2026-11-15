# OpenClaw Ecosystem Digest 2026-11-15

> Issues: 99 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-15 05:59 UTC

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
**Date:** 2026-11-15

#### 1. Today's Overview
OpenClaw remains in an active development phase with 99 open issues and 500 open PRs. Today witnessed a significant spike in merge activity, with 139 PRs merged and closed in the last 24 hours, indicating a push toward stabilizing the recently released `2026.11.5-beta.3` build. The project shows high velocity, driven by a mix of bug fixes, infrastructure updates, and UI polish. However, the issue queue remains heavy, with several diamond lobster-rated bugs highlighting session stability and message integrity as persistent pain points. The community is highly active, with multiple bot-assisted PRs merging rapidly at the end of the day.

#### 2. Releases
*   **New Release:** `v2026.11.5-beta.3` (Released ~10 days ago).
*   **Highlights:** This beta focuses on "Large-session reliability," specifically reducing memory pressure during transcript indexing and compaction. It introduces streamlined hydration payloads and configurable summary limits to prevent context overflow. No breaking changes are documented for this specific beta, but it serves as the foundation for the stable `2026.11.5` release.

#### 3. Project Progress
*   **Merge Activity:** 139 PRs were merged/closed in the last 24 hours.
*   **Feature Advancement:** Significant UI and operational improvements were merged, including fixes for localized WebKit startup speed (`#199418`), preventing publish state desync after template changes (`#199486`), and resolving Incognito draft permission loss (`#199485`).
*   **Bug Fixes:** Critical stability fixes landed, including recovering child results after Gateway restarts (`#199488`), preserving Windows task environment values (`#185511`), and fixing Telegram duplicate replies (`#195842`).
*   **Infrastructure:** Performance improvements were merged to avoid duplicate progress-card authority checks (`#199477`) and preserve oversized heap profiles as files (`#199476`).

#### 4. Community Hot Topics
*   **Most Active Issue:** **[#143017](https://github.com/openclaw/openclaw/issues/143017)** (17 comments). A deep-dive into prompt-cache rewrites, measuring 21.3M cache-write tokens. It highlights the difficulty in controlling persistent session prefixes.
*   **Most Active PR:** **[#199488](https://github.com/openclaw/openclaw/pull/199488)**. Focuses on recovering child results when a Gateway restart interrupts requester delivery, directly addressing a reliability gap in the session lifecycle.
*   **High Reaction Items:** Issues #127195 and #160494 both hold "diamond lobster" ratings with 12 and 10 comments respectively, indicating deep technical debt regarding "changed while starting work" errors and cron session rejections.

#### 5. Bugs & Stability
*   **Critical:** **[#199155](https://github.com/openclaw/openclaw/issues/199155)** (2 comments). A regression in `2026.11.5-beta.2` where `sessions.delete` returns `ok:true` but keeps invalid `session_nodes` rows, causing UNIQUE constraint violations on `transcript_events`. This is a blocker for the current beta.
*   **Severe:** **[#199030](https://github.com/openclaw/openclaw/issues/199030)** (4 comments). "Updater-runtime-retention" hard-links 0 files but byte-copies 162,786 files when an explicit temp dir is on a Btrfs subvolume, causing massive I/O wait during updates.
*   **Session State:** **[#166964](https://github.com/openclaw/openclaw/issues/166964)** (10 comments). Subagent completion delivery fails permanently when requester authority is revoked, leaving parents in a perpetual waiting state.

#### 6. Feature Requests & Roadmap Signals
*   **Talk Continuity:** **[#196006](https://github.com/openclaw/openclaw/issues/196006)** requests keeping Talk conversational during long-running work, addressing user frustration with silence during tool use.
*   **Windows Integration:** **[#187950](https://github.com/openclaw/openclaw/issues/187950)** requests a configurable shell for `tools.exec` on Windows to use PowerShell 7.
*   **Backup UX:** **[#183094](https://github.com/openclaw/openclaw/issues/183094)** requests making `openclaw backup create --verify` faster for large states (currently ~25 mins for 16GB).
*   **Diagnostics:** **[#199476](https://github.com/openclaw/openclaw/pull/199476)** (merged) signals a roadmap move toward preserving debug data (heap profiles) for operators.

#### 7. User Feedback Summary
*   **Satisfaction:** The rapid merge rate of UI and localization fixes (`#199418`, `#199486`) suggests the maintainer team is highly responsive to quality-of-life improvements.
*   **Dissatisfaction:** Persistent session management issues and the "hard-link/copy" bug (#199030) represent significant friction. Users report that the Gateway becomes unresponsive or stalls during backup operations on specific filesystems (Btrfs/PostgreSQL), indicating a need for better lifecycle management in the storage layer.
*   **Usability:** The high volume of UI PRs merging today indicates a push to make the product more accessible and less prone to "silent" failures (e.g., expired approvals, missing media dispatches).

#### 8. Backlog Watch
*   **[#187917](https://github.com/openclaw/openclaw/issues/187917)** (13 comments): Update failure regarding `updater-runtime-retention`. This is a top priority given its recurrence and the recent spike in related bugs (#199030).
*   **[#160494](https://github.com/openclaw/openclaw/issues/160494)** (10 comments): Cron runs bound to persistent sessions being rejected at admission. Lacks a maintainer review, blocking resolution.
*   **[#198929](https://github.com/openclaw/openclaw/pull/198929)**: A highly requested PR to fix session rewinding/switching without copying the entire 357MB transcript, which currently kills SQLite workers. Waiting on maintainer look.

---

## Cross-Ecosystem Comparison

# Personal AI Agent & Assistant Open-Source Ecosystem Analysis (2026-11-15)

## Ecosystem Overview
The personal AI agent open-source landscape on 2026-11-15 is characterized by a bifurcation between high-velocity core frameworks and specialized, provider-integrated assistants. A few "core" projects—OpenClaw, NanoClaw, ZeroClaw—dominate merge activity and issue volume, functioning as extensible backbones for agent orchestration, memory management, and storage layer stability. Meanwhile, niche projects like LobsterAI, PicoClaw, and ZeptoClaw focus on specific verticals (file editing, provider compatibility, pricing utilities), exhibiting lower activity but critical niche utility. Hermes Agent and CoPaw occupy a middle ground, emphasizing UI/UX and cross-platform stability. Overall, the ecosystem is in a state of aggressive refactoring and infrastructure hardening, with a strong industry shift toward canonical model registries, cost transparency, and cross-provider interoperability as the primary differentiators.

## Activity Comparison

| Project | Open Issues | Open PRs | Release Status | Health Score* |
| :--- | :---: | :---: | :--- | :---: |
| **OpenClaw** | 99 | 500 | `v2026.11.5-beta.3` (active beta) | **Critical** (High velocity, heavy bug queue) |
| **NanoClaw** | 0 | 25 (updated) | `v2026.11.0-beta.3` (3rd beta) | **Stable** (High refactor velocity, dormant issues) |
| **ZeroClaw** | 21 | 50 (updated) | No release (V5 migration) | **Active** (High PR volume, critical bugs) |
| **Hermes Agent** | 14 | 41 (updated) | `v0.23.1+canary` (canary) | **Intense** (Rapid canary releases, P2 bugs) |
| **CoPaw** | 9 | 15 (updated) | `v2.3.0` / `v2.3.1b1` | **Developing** (Healthy merge pipeline) |
| **NanoBot** | ~0 (est) | 32 (updated) | No release | **Maintenance** (Stabilizing codebase) |
| **PicoClaw** | 2 | 10 (updated) | No release | **Stable** (Infrastructure sync) |
| **LobsterAI** | 0 | 1 (open) | No release | **Consolidation** (Static pipeline) |
| **ZeptoClaw** | 1 | 0 | No release | **Stagnant** (Single pricing issue) |
| **IronClaw** | 1 | 1 (open) | No release | **Stabilization** (Budgeting focus) |

*\*Health Score is a composite of issue backlog severity, PR merge velocity, and release stability.*

## OpenClaw's Position

**Advantages vs Peers:**
OpenClaw dominates the ecosystem as the primary reference implementation, boasting the highest merge velocity (139 PRs in 24h) and the deepest feature set. Its recent `2026.11.5-beta.3` release focuses on "Large-session reliability," addressing the critical pain points of memory pressure and transcript compaction that affect all large-agent workflows. Technically, OpenClaw differentiates itself through a sophisticated Gateway architecture and robust session lifecycle management, though it currently bears the heaviest stability burden, as evidenced by critical bugs like the `sessions.delete` regression (#199155) and the Btrfs hard-link issue (#199030).

**Technical Approach Differences:**
While OpenClaw employs a Gateway-centric model with persistent session nodes and complex compaction logic, competitors like NanoClaw favor a modular, container-native approach ("agent runners" and Docker teardown fixes). ZeroClaw and Hermes Agent prioritize provider-agnostic model routing and credential management, whereas OpenClaw focuses heavily on operational stability and transcript integrity. OpenClaw's community is the largest, indicating a "battle-tested" maturity, but this comes with a higher operational overhead compared to the leaner NanoBot or the specialized PicoClaw.

**Community Size Comparison:**
OpenClaw has by far the largest community and issue/PR queue. It is followed at a distance by ZeroClaw and Hermes Agent, which also show significant engagement. The long tail of projects (LobsterAI, PicoClaw, ZeptoClaw) have minimal activity, serving specific niches rather than the broad agent developer market.

## Shared Technical Focus Areas

1.  **Session & State Management:** A critical need across OpenClaw, NanoClaw, Hermes Agent, and CoPaw. Issues revolve around session persistence, transcript loss after cleanup (NanoClaw #4379), authority revocation failures (OpenClaw #166964), and Feishu session "silent deaths" (CoPaw #7534).
2.  **Provider & Model Routing:** Unified across ZeroClaw, PicoClaw, and ZeptoClaw. The industry is standardizing on canonical registries (ZeroClaw #12453) and resolving compatibility gaps for OpenAI-compatible providers (PicoClaw #3470, #3462) and deprecated models (NanoBot #6660).
3.  **Cost & Budgeting Transparency:** Emerging as a top priority in ZeroClaw (Anthropic $0 spend #9816, #12412), IronClaw (pricing data fix #8171), and OpenClaw (backup UX for large states #183094). Users demand accurate, hierarchical cost modeling.
4.  **Cross-Platform & Encoding Stability:** CoPaw (#8733) and IronClaw highlight struggles with Chinese Windows encoding and TTS installation. NanoClaw and Hermes Agent address Windows terminal and TTS integration bugs.

## Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | CoPaw | NanoClaw |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | Session reliability, transcript compaction, Gateway ops | Model registry, canonical references, credential panels | Desktop agent workflow, Kanban/UIs, provider fallbacks | Console UIs, Provider integrations, WebUI polish | Container-native runners, local model diversification |
| **Target User** | Power users, infrastructure operators, large-scale deployments | Developers building agentic applications | Knowledge workers, cross-platform AI users | Console users, tooling developers | Self-hosters, local AI enthusiasts |
| **Architecture** | Centralized Gateway with stateful sessions | Federated registry + WebUI operator panels | Hybrid client-server with local state | Console-first with provider plugins | Modular runners + local model adapters |
| **Release Cycle** | Beta-stable hybrid (`beta.3` → stable) | Unstable / Migration (V5) | Canary-driven rapid iteration | Stable incremental (`v2.3.x`) | Beta-driven feature drops |

## Community Momentum & Maturity

*   **Rapidly Iterating (High Velocity):** **OpenClaw** and **ZeroClaw** are the most active, driven by large-scale refactoring and infrastructure migrations. **Hermes Agent** also iterates rapidly via canary builds, prioritizing safety fixes and immediate bug resolution.
*   **Stabilizing (Mature/Stagnant):** **LobsterAI**, **PicoClaw**, and **ZeptoClaw** are in maintenance or consolidation phases. Their low issue counts and lack of new releases indicate maturity or a pause in development. **NanoClaw**, while having high PR update counts, has a dormant issue queue, suggesting the team is focused on internal refactoring rather than feature delivery.
*   **Healthy Development:** **CoPaw** and **NanoBot** show balanced activity—active PR pipelines with manageable issue backlogs, indicating a sustainable development rhythm.

## Trend Signals for AI Agent Developers

1.  **The Rise of the Canonical Registry:** There is a definitive industry shift toward standardized model registries (exemplified by ZeroClaw's PR #12453 and #12452). Developers should anticipate a move away from ad-hoc endpoint configuration toward integrated, searchable model hubs to simplify provider switching and cost tracking.
2.  **Cost Transparency as a Core Feature:** Accurate budgeting is no longer a "nice-to-have" but a blocking issue (#2843 in IronClaw, #9816 in ZeroClaw). Future frameworks will likely integrate real-time cost ledgers and hierarchical budgeting (user→project→thread) as foundational primitives.
3.  **Session Integrity at Scale:** As context windows grow, "silent failures" in session management (transcript loss, authority revocation bugs) are the highest-risk areas. Investments in robust compaction, hydration payloads, and permission-aware delivery (OpenClaw's current focus) will be the differentiators for production-ready agents.
4.  **UX Polarization:** There is a split between "power-user" frameworks (OpenClaw, ZeroClaw) prioritizing raw capability and stability, and "experience" frameworks (CoPaw, LobsterAI) prioritizing UI polish and frictionless workflows. Developers must choose their target persona early, as the technical stacks diverge significantly.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

### NanoBot Project Digest
**Date:** 2026-11-15

#### 1. Today's Overview
Nanobot maintains a healthy development pace with 32 PRs merged or closed in the last 24 hours against only 2 new issues. This high merge velocity indicates active maintenance and a focus on stabilizing the codebase ahead of the year-end. While new issue creation is low, the volume of PR activity suggests the project is actively resolving technical debt and preparing infrastructure updates. No new releases were published today.

#### 2. Releases
No new releases were published in the last 24 hours. The project continues on its current version trajectory without a tagged release triggered by today's merges.

#### 3. Project Progress
A significant cluster of 20 closed PRs focused on WebUI stability, model routing, and provider refactoring. Key advancements include the retirement of legacy OpenAI API selectors (`#6615`), improvements to model preset saving performance (`#6631`), and the resolution of image-input routing issues for mixed-model chains (`#6651`). Stability fixes addressed WebUI reasoning display bugs (`#6640`) and prevented phantom streams on empty model outputs. Additionally, infrastructure improvements were merged, including the derivation of Telegram command regexes from alias maps (`#6643`) and the sharing of bounded HTTP redirect logic (`#6637`).

#### 4. Community Hot Topics
The most discussed open issue is **#6662** regarding WebUI inline code rendering. Users report that lengthy inline code spans either become unmanageable scrolling blocks or display only filenames, disrupting the Markdown reading experience. This technical rendering limitation requires a UI/UX adjustment to the Markdown renderer.

The most active pull request is **#6194**, which focuses on allowing durable delivery and shutdown processes to complete on Continuous Integration (CI) pipelines. This PR is critical for maintaining test reliability and CI stability, addressing the aftermath of prior API server modifications.

#### 5. Bugs & Stability
Stability was a major focus today, with 12 closed PRs fixing WebUI and gateway behaviors. A critical regression fix **#6627** preserves whitespace across streamed continuations, preventing lost newlines or indentation when answers exceed output limits. **#6625** fixes a systemd service restart issue where stopping a gateway process would inadvertently trigger `Restart=always`, causing foreground conflict messages. **#6660** documents the retirement of `gpt-image-1`, `dall-e-3`, and `dall-e-2`, noting that while OpenAI has deprecated these models, they remain listed in Nanobot's OpenAI configuration, potentially causing failed requests for users.

#### 6. Feature Requests & Roadmap Signals
Analysis of closed PRs reveals a strong push toward provider consolidation and UI polish. The retirement of the old OpenAI API selector (`#6615`) and the refactoring of dead code (`#6644`) suggest a roadmap focused on cleaning up legacy technical debt. The addition of the ShengSuanYun gateway (`#6647`) indicates an expanding supported provider ecosystem. Feature signals point toward improved model routing logic and more efficient WebUI state management.

#### 7. User Feedback Summary
User feedback today centers on two operational pain points. First, the WebUI Markdown rendering of code is creating a poor reading experience, with inline code either breaking layout or truncating content. Second, there is confusion and frustration regarding the continued presence of retired OpenAI image models in the selector, which results in silent failures or errors when selected. These issues highlight a need for better model version alignment and more robust UI handling of code blocks.

#### 8. Backlog Watch
**#6662** (Open, 1 comment) remains the primary item requiring maintainer attention regarding WebUI rendering logic. **#6194** (Open) is the most significant open PR, focusing on CI durability and shutdown handshake procedures. Additionally, **#6617** (Closed this week but high impact) addressed chat request correlation and stale reconnect cancellation, suggesting the project is actively ironing out real-time connection stability issues that users may still be experiencing.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

### **Hermes Agent Project Digest**
**Date:** 2026-11-15

#### **1. Today's Overview**
The Hermes Agent project exhibited high activity on 2026-11-15, with 14 issues and 50 PRs updated in the last 24 hours. The project continues its rapid development cycle, evidenced by the release of a canary build and a steady influx of bug fixes and feature additions. The merged PR count (9) indicates a healthy development velocity, though the high number of open issues (14) and active PRs (41) suggests the project is in an intense feature and stabilization phase ahead of a stable release. The community is highly engaged, with multiple critical bugs reported and fixed on the same day.

#### **2. Releases**
*   **New Release:** `v0.23.1+canary.20261114T064334Z` (Canary)
    *   **Release Date:** November 14, 2026.
    *   **Details:** This canary build represents the bleeding edge of the 0.23.x series. As a canary release, it includes the latest bug fixes and features but is intended for testing. No specific migration notes or breaking changes were listed in the release metadata for this specific canary build, though the project generally follows a semantic versioning scheme where minor version bumps (0.23.x) typically introduce new functionality.

#### **3. Project Progress**
*   **Merged/Closed PRs:** 9 PRs were merged or closed today.
*   **Key Advances:**
    *   **Security & Compliance:** Two critical plugin security scanner fixes were merged (`#155830` and `#155924`), resolving an issue where Python docstrings were bypassing safety guards, effectively "fixing the fix" for docstring bypasses.
    *   **Agent Reliability:** The `execute_code` approval flow was refined (`#155983`), ensuring that code execution requests properly ask for client approval rather than immediately denying them, improving safety and usability.
    *   **Infrastructure Stability:** PR `#144701` addressed gateway control queue bottlenecks, preventing missed deadlines during slow WebSocket requests.
    *   **Cross-Platform:** A Windows terminal fix (`#155628`) ensured commands are contained within job objects, preventing orphaned processes on interruption.

#### **4. Community Hot Topics**
*   **Most Active Issue:** **[#155977](https://github.com/NousResearch/hermes-agent/issues/155977)** (Desktop Queued Turn Stuck) - 0 comments, but critical UX bug where queued turns become permanently stuck and undeletable due to Local State persistence issues. High severity for Desktop users.
*   **Most Active PR:** **[#155983](https://github.com/NousResearch/hermes-agent/pull/155983)** (Approval flow fix) - Focuses on the `execute_code` guard, ensuring it asks the client for approval instead of denying immediately.
*   **Underlying Needs:** The community is actively debugging provider compatibility (OpenAI zstd compression `#148898`, Weixin/WeCom inbound stop `#155978`) and Desktop stability issues. There is a strong demand for reliability in cross-platform environments and robust fallback mechanisms when primary AI providers fail.

#### **5. Bugs & Stability**
*   **Critical Bugs Reported Today:**
    *   **[#155977](https://github.com/NousResearch/hermes-agent/issues/155977)**: Desktop queued turn stuck permanently (Severity: P2). No fix PR yet; the issue lies in the client-side Local Storage persistence vs. server-side delete RPC.
    *   **[#155982](https://github.com/NousResearch/hermes-agent/issues/155982)**: Fallback chain incorrectly sending the primary's model name to the fallback provider, guaranteed to cause 400 errors (Severity: P2).
    *   **[#155955](https://github.com/NousResearch/hermes-agent/issues/155955)**: First DM into a pre-gateway Bot Chat silently forking the chat (Severity: P2).
*   **Existing Fixes:** Several high-impact bugs have corresponding merged PRs today, specifically the plugin security scanner fixes and the `execute_code` approval guard fix, indicating a focused effort on "safety and stability" features.

#### **6. Feature Requests & Roadmap Signals**
*   **Focus Plugin:** PR **[#153896](https://github.com/NousResearch/hermes-agent/pull/153896)** was merged, adding a "Focus" (Cognitive Context Engine) plugin to the catalog. This signals a roadmap shift toward enhancing the agent's contextual awareness and tool-based cognitive support.
*   **Desktop UX:** PR **[#155975](https://github.com/NousResearch/hermes-agent/pull/155975)** adds a rebindable Kanban shortcut, indicating continued investment in the Desktop UI/UX layer.
*   **Predictions:** Given the merge of the "Focus" plugin and the activity around `build_worker_context`, the next stable version is likely to emphasize improved agent context management and workflow automation tools.

#### **7. User Feedback Summary**
*   **Pain Points:** Windows TTS installation issues (`#155948`) where the ElevenLabs package reports as not installed despite being present, and WeCom/Weixin inbound message silent failures (`#155978`) lasting over 90 minutes.
*   **Use Cases:** Heavy usage of Kanban/task management (`#119070`, `#126190`) and integration with various AI providers (OpenAI Codex, Anthropic). Users are experiencing "context bleed" and rate-limiting guard issues that prevent tasks from running.
*   **Satisfaction:** The rapid release cycle (canary `v0.23.1`) and immediate bug fixes (plugin security) are viewed positively, though the volume of open "P2" bugs indicates a trade-off between feature velocity and polish.

#### **8. Backlog Watch**
*   **[#119070](https://github.com/NousResearch/hermes-agent/issues/119070)**: "Kanban: card whose run was rate-limited then succeeded is parked as blocker_auth forever." 26 comments. This is a persistent guard logic bug affecting task dispatch. **Needs attention:** The `check_respawn_guard` logic appears to be the root cause.
*   **[#148898](https://github.com/NousResearch/hermes-agent/issues/148898)**: "Codex backend returns HTTP 400 for some zstd-compressed /responses bodies." 13 comments. An intermittent integration issue with OpenAI's compression changes.
*   **[#78834](https://github.com/NousResearch/hermes-agent/issues/78834)**: "Kanban: config knob for same-assignee 'Recent work' injection." 1 comment, created in August. A long-standing feature request for configuration options to prevent cross-task context bleed during compaction. **Needs maintainer decision** on implementing a config knob.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PICOCLAW PROJECT DIGEST**
**Generated on:** 2026-11-15
**Project:** sipeed/picoclaw (GitHub)

---

### 1. Today's Overview
PicoClaw exhibits moderate activity for mid-November 2026, with 2 new issues and 10 PRs merged or updated in the last 24 hours. The project continues its trend of stabilizing the provider ecosystem and infrastructure, with a notable focus on OpenAI-compatible integrations. The issue landscape is currently dominated by a regression concerning skill installation frontmatter conflicts, while the PR stream shows active synchronization with upstream developments and the addition of new model providers. Overall project health appears stable, with maintainers actively merging fixes and community contributors driving provider expansion.

**Links:** [GitHub Repository](https://github.com/sipeed/picoclaw) | [Issues](https://github.com/sipeed/picoclaw/issues) | [Pull Requests](https://github.com/sipeed/picoclaw/pulls)

---

### 2. Releases
No new releases were published in the last 24 hours. The project maintains its most recent stable release cycle without new tagged versions.

**Links:** [Releases Page](https://github.com/sipeed/picoclaw/releases)

---

### 3. Project Progress
Ten pull requests were updated in the last day, primarily consisting of merges syncing the project with upstream/main and consolidating fixes. Key merged activities include:
*   **PR #1546:** Merged fixes from open PRs #1480, #1479, #1478, #1473, and #1467.
*   **PR #2810:** A massive sync with upstream/main (1095 commits) and the forward-porting of 6 customization commits, including restructuring the agent loop and reorganizing tools into `pkg/tools/{fs,integration}/`.
*   **PR #423:** Merged WIP for a base multi-agent collaboration framework with shared context.
*   **PRs #1558 and #1559:** Merged fix batches from earlier in the year.

**Links:** [PR #1546](https://github.com/sipeed/picoclaw/pull/1546) | [PR #2810](https://github.com/sipeed/picoclaw/pull/2810) | [PR #423](https://github.com/sipeed/picoclaw/pull/423)

---

### 4. Community Hot Topics
The most discussed items today are the two newly opened issues:
*   **Issue #3470** (0 comments): A feature request to add **LLMTR** as a built-in OpenAI-compatible provider. The user seeks a `llmtr` entry in the model catalog to simplify access to the LLMTR gateway (`https://llmtr.com/v1`).
*   **Issue #3462** (1 comment): A regression regarding skill installation. Users encounter "registry archive is not a valid skill" errors when multiple installed skills share the same `name` in their `SKILL.md` frontmatter, even if the skills are distinct.

**Links:** [Issue #3462](https://github.com/sipeed/picoclaw/issues/3462) | [Issue #3470](https://github.com/sipeed/picoclaw/issues/3470)

---

### 5. Bugs & Stability
The primary stability concern today is **Issue #3462**, which reports a functional bug blocking the `skills install` command. The error "registry archive is not a valid skill" triggers falsely when frontmatter names conflict across different skills. This suggests a bug in the skill validation or registry parsing logic. Interestingly, a corresponding PR **#3464** was opened on 2026-11-07 to add a `cloudgpu` provider, but it is separate from this installation bug. No fix PR has been explicitly linked to #3462 in the data, though the activity suggests maintainers are addressing provider and registry issues in parallel.

**Links:** [Issue #3462](https://github.com/sipeed/picoclaw/issues/3462) | [PR #3464](https://github.com/sipeed/picoclaw/pull/3464)

---

### 6. Feature Requests & Roadmap Signals
Feature demand is currently focused on provider integration and multi-agent capabilities.
*   **Provider Additions:** There is a clear pattern of adding OpenAI-compatible providers. Besides the request for **LLMTR** (#3470/#3471), there are open PRs for **CloudGPU** (#3464) and **Standard Compute** (#3431). This indicates PicoClaw is positioning itself as a versatile gateway for various LLM backends.
*   **Multi-Agent Framework:** **PR #423** outlines a "Base multi-agent collaboration framework with shared context," suggesting roadmap work toward complex agent orchestration.

**Links:** [Issue #3470](https://github.com/sipeed/picoclaw/issues/3470) | [PR #3471](https://github.com/sipeed/picoclaw/pull/3471) | [PR #3464](https://github.com/sipeed/picoclaw/pull/3464) | [PR #3431](https://github.com/sipeed/picoclaw/pull/3431) | [PR #423](https://github.com/sipeed/picoclaw/pull/423)

---

### 7. User Feedback Summary
User feedback from the issue tracker reveals two primary pain points:
1.  **Skill Management Friction:** The frontmatter name collision in **Issue #3462** represents a significant usability bug. Users expect `skills install` to be deterministic based on the full skill identity (slug/organization), not just the display name in frontmatter. This breaks workflows for users managing multiple skills from different sources.
2.  **Provider Flexibility:** The request for **LLMTR** (#3470) highlights a need for out-of-the-box compatibility with popular third-party gateways without requiring users to manually configure custom OpenAI endpoints every time.

**Overall Satisfaction:** The high volume of merged PRs (#2810 merging 1095 commits) suggests a maintainer commitment to keeping the project current, but the emergence of the skill installation bug (#3462) may temporarily frustrate users relying on the `skills` command.

**Links:** [Issue #3462](https://github.com/sipeed/picoclaw/issues/3462) | [Issue #3470](https://github.com/sipeed/picoclaw/issues/3470)

---

### 8. Backlog Watch
Several items require maintainer attention or re-evaluation:
*   **Issue #3462 [stale]:** Despite being marked `[stale]`, this issue is currently blocking a core workflow (`skills install`). The `[stale]` label may be inaccurate given the recent update (2026-11-14) and the fact it has 1 comment. It requires a maintainer to triage whether the fix is a simple validation change or a larger registry restructure.
*   **PR #3464 [stale]:** Open since 2026-11-07 to add the CloudGPU provider. While [stale] is marked, it sits alongside the LLMTR requests and may need maintainer review to ensure naming consistency and API compatibility.
*   **PR #3431 [stale]:** Open since 2026-10-15 for the Standard Compute provider. This older open PR may need a maintainer review or a response to move it toward merge or closure.

**Links:** [Issue #3462](https://github.com/sipeed/picoclaw/issues/3462) | [PR #3464](https://github.com/sipeed/picoclaw/pull/3464) | [PR #3431](https://github.com/sipeed/picoclaw/pull/3431)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

Here is the NanoClaw project digest for 2026-11-15.

### 1. Today's Overview
NanoClaw is currently in a highly active development phase, marking the third beta of its 2026.11.0 release cycle. The project shows robust engineering momentum with 50 Pull Requests updated in the last 24 hours, indicating a concentrated push toward the November release. Despite the high volume of changes, issue activity remains dormant, with zero new or updated issues reported today. The project is primarily focused on internal refactoring, bug hardening, and infrastructure improvements rather than new user-facing features.

### 2. Releases
A new prerelease has been published: **v2026.11.0-beta.3**.
This beta serves as the third iteration of the November 2026 release, replacing the never-stable 2026.10.1 cycle. As a beta release, it carries the expectation of "rough edges" and is intended for early testers. No specific breaking changes or migration notes are detailed in the release metadata beyond the version bump and the stabilization of the two previous release candidates' features into this entry.

### 3. Project Progress
The project merged or closed 25 PRs today, reflecting a intense sprint to stabilize the upcoming release. Key advancements include:
*   **Agent Runners:** PR #4354 and #4353 focus on chat turn management, ensuring replies ending with `<internal>` mentions are not lost and "nudge" mechanisms function correctly when no reply is generated.
*   **Container Stability:** PR #4057 resolves Docker teardown errors related to `--rm` auto-removal, and PR #4383 adds end-to-end testing to prevent racing conditions during container kills.
*   **Provider & Tooling:** PR #4210 adds local-model support for `llmman`, expanding the roster of local AI options alongside existing providers.
*   **Security & Compliance:** Several PRs (#4377, #4356) tighten security around container mounts and channel adapter labeling to prevent abuse and text rendering errors.

### 4. Community Hot Topics
The most discussed items today are a mix of bug fixes and feature additions, all carrying the "follows-guidelines" label, indicating strict adherence to project standards.
*   **#4384 (Bug/Host Polls):** This is the most technically active PR today, fixing a critical inefficiency where host polls re-read entire session histories on every pass. The fix involves pruning session databases to prevent full-table scans during message delivery polls.
*   **#3446 (Auto-drop automated senders):** A long-standing issue finally being addressed, this PR ensures bot/webhook senders (Discord, Slack, Telegram) are correctly denied entry to the "unknown-sender gate" rather than being stuck in a perpetual approval limbo.
*   **#4210 (llmman Support):** The community is actively integrating new local model providers, reflecting a trend toward offline/private AI capabilities.

### 5. Bugs & Stability
Stability is a major focus of today's commits, with several "kind/bug" PRs merged or open:
*   **Claude Transcript Loss (#4379):** A critical stability fix for Claude Code users. When the stored session transcript expires (after the default 30-day cleanup period), the agent previously replied "No conversation found." This PR forces a fresh session start, preventing dead-end interactions.
*   **Google Chat & Discord Formatting (#4356):** Fixes "raw" text marks in Discord and incorrect label backslashes in Google Chat cards, preventing render breakages in those adapters.
*   **Logging & Idle Containers (#4382):** Addresses log flooding; the "30-minute ceiling" for idle containers previously logged a warning on every stop event, creating noise (272 warnings/week on a single install). This update silences routine stops while preserving error logs for actual failures.

### 6. Feature Requests & Roadmap Signals
While no new feature requests were opened today, the merged PR #4210 signals a clear roadmap direction: **local model diversification**. The addition of `llmman` as a provider suggests the project is moving beyond just Anthropic/OpenAI integrations to support a broader ecosystem of local, self-hosted models. Users can predict that future betas will likely focus on optimizing these local toolchains and possibly adding more MCP (Model Context Protocol) server integrations.

### 7. User Feedback Summary
User feedback, as evidenced by the PR activity, centers on **reliability and "invisible" failures**.
*   **Pain Point:** Users interacting with Claude Code are frustrated by session loss after the cleanup period, leaving them unable to resume context.
*   **Pain Point:** Admins using Docker containers are weary of warning logs flooding their systems during normal container lifecycle events (the idle container issue).
*   **Satisfaction:** The community appears satisfied with the rigorous "follows-guidelines" enforcement, which maintains a clean, predictable codebase despite the high velocity of changes.

### 8. Backlog Watch
Several important PRs from earlier in the month require maintainer attention to unblock the release:
*   **#4374 (Chore: Remove Dead Code):** A massive refactor PR removing unused exports and stale comments. While "no behavior change," it is essential for code health. Its size and age (created Nov 14) suggest it may need a maintainer review to ensure no critical dependencies are accidentally severed.
*   **#4177 (CI: Test Channel Payloads):** A CI enhancement ensuring channel adapters test payloads correctly before moving off the `channels` branch. This is a preventive measure for channel stability but is currently open and may block automated testing pipelines.
*   **#3996 (Base Image Update):** Updates the agent image base to Node 24. This is a preparatory infrastructure change that is open but relatively low-risk; however, it sits behind the scenes of the broader release.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-11-15

## 1. Today's Overview
IronClaw shows minimal activity for 2026-11-15, with only a single PR merged and no new releases. The project appears to be in a stabilization phase following significant architectural shifts related to cost-based budgeting. The lone updated issue (#2843) remains open and represents a high-risk, high-impact refactor regarding budgeting architecture, while the updated PR (#8171) addresses immediate data accuracy concerns in pricing models. Overall project health seems stable but development velocity is low, with maintainers likely focusing on resolving the budgeting cascade system before further feature expansion.

## 2. Releases
No new releases were published today. The latest release history is currently unavailable, suggesting the project may be in a pre-release or development branch state. Users should expect any major changes to be reflected in the main branch rather than tagged versions at this time.

## 3. Project Progress
- **Merged/Closed PRs:** 1
  - **#8171** fix(common): price models from the llm-prices table
    - **Changes:** Updated pricing for several models to match current provider rates (gpt-5.5, gpt-5.2-pro, Opus 4.5/4.6, Haiku 4.5).
    - **Impact:** Critical data fix ensuring cost-based budgeting (referenced in issue #2843) calculates expenses accurately. Without this fix, the USD budget system would miscalculate expenses based on stale price data.

## 4. Community Hot Topics
The community focus today centers on two interconnected items:

- **#2843 [OPEN] Cost-based budgeting cascade system** (1 comment, 0 👍)
  - **Link:** [nearai/ironclaw Issue #2843](https://github.com/nearai/ironclaw/issues/2843)
  - **Analysis:** This is the project's most significant active discussion. The issue requests replacing iteration/time caps with a USD budget system cascading across user → project → mission → thread → sub-thread hierarchy. With 0 upvotes despite being created in April 2026, it suggests the proposal may be technically sound but lacks community visibility or consensus. The "high" risk rating and scopes (agent, db, config) indicate this is a foundational change affecting how agents manage resources.

- **#8171 [OPEN] price models fix** (0 comments, 0 👍)
  - **Link:** [nearai/ironclaw PR #8171](https://github.com/nearai/ironclaw/pull/8171)
  - **Analysis:** Despite 0 comments, this PR has immediate practical value. The price discrepancies described (gpt-5.5 from $2/$8 to $5/$30, etc.) would cause budgeting failures if the #2843 system were implemented without this fix. The PR description notes "The USD budget work in #2843 depends on..." creating a dependency chain where #8171 must be resolved first.

## 5. Bugs & Stability
No bugs or crashes were reported in the last 24 hours. The stability profile remains good, with the only activity being the pricing correction in #8171. This PR is essential for stability if the cost-based budgeting system from #2843 is ever merged, as inaccurate pricing would lead to budget overruns or unexpected agent termination.

## 6. Feature Requests & Roadmap Signals
The primary roadmap signal is the implementation of **cost-based budgeting** as described in #2843. User needs appear to shift from simple iteration caps to granular, hierarchical budgeting across the agent workflow. The dependency structure (#8171 → #2843) suggests the project maintainers have a clear implementation path: fix pricing data first, then implement the budgeting cascade system. No other feature requests or roadmap signals are evident from today's minimal activity.

## 7. User Feedback Summary
User feedback, while limited today, reveals a clear pain point: **inaccurate cost modeling**. The pricing discrepancies in #8171 demonstrate that users relying on budget predictions face significant mismatches between expected and actual LLM costs. This affects both individual users managing agent budgets and organizations deploying IronClaw at scale. The lack of upvotes on #2843 (despite its April 2026 creation) may indicate users are waiting for pricing accuracy before endorsing the budgeting overhaul.

## 8. Backlog Watch
**Long-term items needing maintainer attention:**

- **#2843** (created 2026-04-22, updated 2026-11-15)
  - **Status:** Open for ~7 months
  - **Priority:** High - Foundational budgeting system
  - **Action needed:** Maintainer decision on whether to implement the USD cascade hierarchy or close/defer the proposal
  - **Risk:** If closed, the project lacks a modern budgeting mechanism; if implemented without #8171 fix, will have inaccurate cost calculations

- **#8171** (created/updated 2026-11-15)
  - **Status:** Open, pending merge
  - **Priority:** Critical - Price data accuracy
  - **Action needed:** Maintainer review and merge
  - **Note:** This is the immediate blocker for any budgeting work

The backlog shows a healthy dependency chain: pricing accuracy must be resolved before the budgeting system can be meaningfully implemented. Maintainers should prioritize #8171 merge to unblock the longer-term #2843 architectural work.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

Here is the structured project digest for LobsterAI based on the 2026-11-15 data.

### 1. Today's Overview
LobsterAI, the personal AI assistant open-source project, recorded minimal activity on 2026-11-15. The issue queue remains completely static with 0 new updates and 0 active issues, indicating a period of stability. The project's primary engagement today stemmed from a single open Pull Request (#3093) focused on improving documentation and user interface clarity within the renderer and coworking features. With no new releases and a closed issue pipeline, the project appears to be in a maintenance or consolidation phase rather than active development.

### 2. Releases
No new releases were published today. The latest release history is currently unavailable. Users are advised to check the GitHub Releases page for the most recent stable build.

### 3. Project Progress
The most significant progress today is the existence of **1 open Pull Request (#3093)**.
*   **PR #3093** ([Open](https://github.com/netease-youdao/LobsterAI/pull/3093)): This PR addresses usability concerns in the file editing workflow. It proposes removing live `+N / -N` counters that could be mistaken for credit charges and replacing them with a default "Show file actions" view. An explicit "View changes" control would be added to allow users to see before/after details on demand. This reflects a focus on reducing user anxiety and improving transparency in the coworking/renderer features.

### 4. Community Hot Topics
The community hot topic for today is **PR #3093**.
*   **Link:** [#3093: Fix file edit progress and details](https://github.com/netease-youdao/LobsterAI/pull/3093)
*   **Analysis:** This PR has 0 comments and 0 reactions currently. It addresses a specific "usability issue" reported by users regarding file edit counters. The underlying need is for clearer feedback mechanisms; users previously risked misinterpreting the counters as financial credits. The solution moves towards a "show-and-tell" model, prioritizing an explicit action to view details over live counting, which is a common pattern in modern IDEs to reduce noise.

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The issue queue is empty, suggesting the current build is stable regarding reported defects. Since there are no open issues, there are no active bug fix PRs to merge today, though the work in #3093 addresses a UX "bug" (misleading counter) rather than a functional crash.

### 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap signals emerged today due to the empty issue stream. However, the work being done in #3093 suggests a roadmap signal focused on **"Transparency & UX polish."** The move to clarify file edit progress indicates the maintainers are responding to user confusion regarding system state indicators. Future versions may continue to prioritize reducing "cognitive load" for users interacting with the AI's file management capabilities.

### 7. User Feedback Summary
User feedback today is non-existent in the issue tracker, but the context from PR #3093 reveals a persistent pain point: **Ambiguous system feedback.** Users reported that live file edit counters (`+N / -N`) were confusing and potentially mistaken for credit charges. This indicates a need for better state management and clearer communication of "outcomes" versus "process" within the AI assistant's workflow.

### 8. Backlog Watch
There are no long-unanswered important issues or PRs requiring immediate maintainer attention at this moment. The backlog is currently clear. The only item warranting attention is **PR #3093**, which has been open since 2026-11-14. Given its focus on documentation and clarity, it is a low-risk, high-reward item that maintainers should consider merging to close the loop on today's activity.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

### CoPaw Project Digest
**Generated on:** 2026-11-15

#### 1. Today's Overview
CoPaw continues its rapid development cycle with a highly active day. The project recorded **14 issue updates and 16 PR updates in the last 24 hours**, indicating strong maintainer engagement. While no new releases were published today, the volume of merged and open PRs signals significant progress toward stabilizing the v2.3.x series. The open issue count remains healthy at 9 active items, though the high number of open PRs (15) suggests the review pipeline is currently the primary bottleneck for shipping code.

#### 2. Releases
**No new releases were published today.** The latest release remains **v2.3.0** (or v2.3.1b1). Development appears to be focused on the `main` branch with a series of incremental PRs aimed at refining the Console and Provider integrations rather than a major version bump.

#### 3. Project Progress
Today saw significant activity in the Console and Provider ecosystems. **Three console-focused PRs were merged/updated**, focusing on drag-and-drop stability (`#8738`, `#8737`), UI resizing behaviors (`#8739`), and CJK markdown rendering (`#8133`). In the provider space, **`#8628`** added model fallback metadata to chat responses, improving transparency during model switches. Additionally, **`#8741`** successfully integrated Olostep as a `web_search` provider, expanding the tooling landscape. A notable backend fix, **`#8630`**, addressed a critical channel configuration bug where partial updates silently disabled channels.

#### 4. Community Hot Topics
The most discussed issue is **#8745**, a mobile-focused bug report regarding session isolation and keyboard interference on PawApp, with 1 comment. However, the most technically critical hot topic is **#8733**, the "cloudpaw plugin fails to load on Chinese Windows" issue, which has garnered attention due to its system-level encoding failure. On the PR side, **#8734** (fixing the Chinese Windows encoding issue) and **#8735** (retrying empty streams) are the most popular first-time-contributor fixes, both updated today.

#### 5. Bugs & Stability
Stability concerns are centered on two long-running bugs:
*   **#7534** (QwenPaw Feishu session queue consumer stuck): A critical bug where session consumers silently die after high-priority messages, leaving the session unresponsive. This has **4 comments** and is a high-priority fix.
*   **#6608** (Long-running shell commands blocking sessions): An orphan subprocess issue that can block sessions for hours. Despite being open since July, it remains relevant due to the severity of indefinite blocking.
*   **#8742** (Provider integration test HTTP method mismatch): A recent bug where integration tests send GET to a PUT-only route, causing immediate test failures.

#### 6. Feature Requests & Roadmap Signals
The feature request pipeline is robust. Key signals for the next version include:
*   **Interactive Card Support (#7608):** Request for DingTalk callback support in stream mode.
*   **Olostep Integration (#8740, #8741):** Adding Olostep as a web search provider alongside Tavily and Firecrawl.
*   **Console Customization (#8732):** Adding an Appearance page for welcome screen and background customization in the Settings Center.
*   **Retry Logic (#8735, #8811):** Improving handling of empty/thinking-only AI stream completions.

#### 7. User Feedback Summary
Users are experiencing two distinct classes of friction. **Feishu users** report frequent session "silent deaths" and configuration loss (issues #7534, #7408), suggesting underlying state management or race condition bugs in the Feishu channel adapter. **Mobile/PawApp users** (#8745) complain about session isolation confusion and input method bugs, indicating a need for better cross-platform UI parity. Meanwhile, **Chinese Windows users** (#8733) face basic plugin load failures due to encoding defaults, highlighting a platform compatibility gap.

#### 8. Backlog Watch
Several important items require maintainer triage:
*   **#8733** (CloudPaw Chinese Windows encoding): Updated today but may need a merge to resolve the crash for a significant user base.
*   **#8745** (PawApp mobile experience): Newly opened, needs maintainer validation of the three reported mobile bugs.
*   **#8736** (Subagent notification trigger): A console notification bug affecting user experience.
*   **#8630** (Channel enabled state preservation): Merged today, but watch for regressions in partial update workflows.

*** github.com/agentscope-ai/CoPaw

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

### ZeptoClaw Project Digest
**Date:** 2026-11-15

#### 1. Today's Overview
ZeptoClaw is currently in a low-activity state with no releases and no PR merges in the last 24 hours. The project status is stable but stagnant, marked by a single open issue regarding outdated pricing data. The overall health appears stable, though the lack of recent merged contributions suggests a potential slowdown in development momentum or a maintenance-focused phase.

#### 2. Releases
No new releases were published today. The repository has no tagged versions available in the latest release data.

#### 3. Project Progress
No Pull Requests were merged or closed in the last 24 hours. Consequently, no new features were merged into the codebase, and no bug fixes were integrated today. Development activity appears to have halted for the day, with maintenance being the primary focus.

#### 4. Community Hot Topics
The most significant community activity is centered around **Issue #724**, which is the only open issue currently. This issue addresses the outdated pricing for `claude-opus-4-6` within the `default_pricing()` function. The community reaction (👍: 0) is minimal, indicating this is a factual update request rather than a high-priority bug. The underlying need is to keep the cost modeling utility aligned with Anthropic's latest pricing tiers to ensure accurate cost estimation for users.

*   **Link:** [Issue #724: Opus 4.6 and gpt-5.1 prices in default_pricing() are out of date](https://github.com/qhkm/zeptoclaw/issues/724)

#### 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The sole open issue (#724) is a pricing data discrepancy rather than a functional bug or stability regression. No severity-ranked issues were identified for today's digest.

#### 6. Feature Requests & Roadmap Signals
No feature requests or roadmap signals were identified from new issues or PR activity today. The current focus remains on the correction of existing utility functions (`default_pricing`) rather than the introduction of new capabilities. Users should not expect new features in the immediate next version beyond potential pricing updates.

#### 7. User Feedback Summary
User feedback today is limited to the single issue regarding Claude Opus 4.6 pricing. The pain point revolves around the accuracy of cost projection tools; users relying on `default_pricing()` for budgeting will receive incorrect estimates if the data is not updated. This suggests a user base that actively monitors API costs and depends on the tool's utility for financial planning.

#### 8. Backlog Watch
**Long-unanswered Issue:** Issue #724, created and updated today (2026-11-15), requires immediate maintainer attention. As the only item in the backlog/backlog queue, the maintainer should update the `claude-opus-4-6` pricing constants from the current `$15/$75` to the correct `$5/$25` rates, along with adjusting the cache-read and cache-write multipliers if necessary. There are no other stale PRs or issues requiring attention at this time.

*   **Link:** [Issue #724: Opus 4.6 and gpt-5.1 prices in default_pricing() are out of date](https://github.com/qhkm/zeptoclaw/issues/724)

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest - 2026-11-15

## 1. Today's Overview
The ZeroClaw project shows intense development velocity on 2026-11-15, with 50 pull requests updated in the last 24 hours and 21 open issues actively being tracked. The merge queue is active, with 1 PR merged/closed recently, indicating steady progress toward releasing new capabilities. A significant portion of today’s activity centers on infrastructure refactoring, provider integrations, and WebUI credential management. The community is highly engaged, with multiple large XL-sized PRs being finalized, suggesting a major version increment is imminent.

## 2. Releases
No new releases were published today. The latest activity consists of PRs targeting version 0.9.0 and V5 schema migrations. Users should expect upcoming releases focused on canonical model registries, provider unification, and enhanced credential management, but no official version tags have been published in the last day.

## 3. Project Progress
Fifty PRs were touched today, with the merged/closed count at 1. The most significant merged item is **#12402**, which adds a write-only operator panel under Config → Storage → Secrets for plugin TLS credentials, reusing existing host-mediated TLS authorization. A batch of seven interrelated PRs from author NiuBlibing (#12442 through #12451) advanced the canonical registry, model references, and memory/storage features. Additionally, PR #12376 fixes detached chat turn display in the WebUI, and #12265 records a Core Team placement approval exception. The merge pipeline is clearly focused on stabilizing the V5 migration path and expanding operator-facing tooling.

## 4. Community Hot Topics
The most discussed issue is **#9816** (cost: anthropic provider reports $0.00 spend), which has 6 comments and a high-priority P1 status. It reveals a critical budgeting bug where the Anthropic provider always reports zero spend, rendering daily/monthly caps ineffective. On the PR side, **#12453** (feat(web): edit canonical registry and select exact model references) and **#12452** (feat(zerocode): configure and select canonical provider models) are the most visible, both created and updated today, signaling the community’s focus on model governance and registry hygiene. The Matrix thread-scoped session PR #12439 also generated notable interest, directly referencing the long-standing issue #8541.

## 5. Bugs & Stability
Today saw several critical and high-severity bugs surface. **#12412** and **#12413** both report OpenCode Go provider bugs—one returning no context window capacity, the other incorrectly using Zen’s model catalogue—both rated S2 severity. **#12401** is marked S1 (workflow blocked), describing tool-context collapse breaking Claude Opus 5.5 chats after a few turns. **#12390** involves the shell tool swallowing stderr on non-zero exits, leaving agents unaware of failure reasons. **#12289** reveals that disabled agents still process turns via operator chat and RPC, a security concern. Interestingly, fix PRs exist for some of these: **#12402** addresses credential management, and **#12376** resolves the detached chat turn issue, indicating active remediation.

## 6. Feature Requests & Roadmap Signals
Feature demand is heavily weighted toward WebUI and provider orchestration. **#12353** requests a running estimated cost display per conversation, leveraging the existing cost ledger—a clear UX pain point for users on spending allowances. **#12449** adds generic OAuth 2.1 PKCE sign-in for remote MCP servers, expanding federation capabilities. **#11845** aims to expose OpenRouter credit balances in the dashboard. The PR #9809, though older (created August 2026), supports multiple models per provider profile, a roadmap staple. Together, these signals point to a roadmap emphasizing cost transparency, multi-model support, and federated authentication.

## 7. User Feedback Summary
Users are reporting tangible friction points: the Anthropic cost bug (#9816) directly impacts budget trust; the OpenCode Go provider bugs (#12412, #12413) frustrate Go-based OpenCode users; and the shell tool’s silent stderr (#12390) degrades agent debuggability. On the positive side, the write-only secrets panel (#12402) and the dashboard credit balance feature (#11845) are well-received operational improvements. The overwhelming theme is a desire for better visibility (cost, credits, model selection) and more reliable provider behavior.

## 8. Backlog Watch
Several important items remain open and warrant maintainer attention. **#12411** (OpenCode Go context-window discovery returns no capacity) and **#12412** (OpenCode Go uses Zen's model catalogue) are recent and blocking Go users. **#12330** describes zerocode falling back to a local daemon when config can't be parsed, risking silent misconfiguration. **#12289** (disabled agents still running turns) is a security-relevant regression. **#9816** remains the most critical bug due to its budgeting impact. On the PR side, **#12453** and **#12452** are large, dependency-heavy merges that may need reviewer bandwidth to unblock the V5 transition.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*