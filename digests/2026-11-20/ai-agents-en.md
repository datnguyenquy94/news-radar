# OpenClaw Ecosystem Digest 2026-11-20

> Issues: 139 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-20 06:52 UTC

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
**2026-11-20**

---

## 1. Today's Overview

OpenClaw maintains intense development velocity with **139 active issues** and **500 open PRs** updated in the last 24 hours. The project ships **two new releases** today (v2026.11.10-beta.1 and v2026.11.6), reflecting a fast-paced release cycle. Activity is dominated by bug fixes and infrastructure improvements, though several P0/P1 stability bugs remain unaddressed. The merge rate is high (200 PRs closed in 24h), indicating strong maintainer throughput, but the backlog of critical stability issues suggests the project is in a "rapid iteration" phase rather than a "polish" phase.

**Link**: [OpenClaw GitHub](https://github.com/openclaw/openclaw)

---

## 2. Releases

Two releases were published today:

### **v2026.11.10-beta.1** (Beta)
- **Highlight**: Agent templates now allow adding agents directly from ClawHub packages via a single `CLAW.md` manifest and bundled skill folders, checked by the native trust flow.
- **Notable**: OpenClaw ID connection node improvements.
- **Migration Note**: As a beta release, users should expect potential instability but gain access to the latest package management workflows.

### **v2026.11.6** (Stable)
- **Context**: 406 commits, 386 PRs, 157 contributors since inception.
- **Changes**: Release notes and changelog are presented in two formats (standard and docs-published).
- **Stability**: This is the latest stable branch, incorporating recent fixes but inheriting the cumulative technical debt of the rapid release cycle.

**Links**: 
- [v2026.11.10-beta.1 Release](https://github.com/openclaw/openclaw/releases/tag/v2026.11.10-beta.1)
- [v2026.11.6 Release](https://github.com/openclaw/openclaw/releases/tag/v2026.11.6)

---

## 3. Project Progress

**Merged/Closed PRs (Last 24h)**: 200 PRs were merged or closed, reflecting high maintainer throughput. Key merged PRs include:
- **#202278**: Reclaim cache left by completed Linux commands (Prevents resource contention).
- **#202300**: Gateway performance testing under 2/4 GiB memory caps.
- **#202301**: Bringing the Gateway back after a failed upgrade (Rollback reliability).
- **#202284**: ChatGPT model discovery version gating fix.
- **#202231**: Worktree naming convention cleanup.

**Features Advancing**: Session sharing opt-in requirements, voice-call consult handling for Claude CLI agents, and memory permission verification for PostgreSQL recall.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count)
| Issue | Comments | Status | Summary |
|-------|----------|--------|---------|
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | 29 | OPEN | Post-install Doctor WAL publication verification leaves 11.3 update partially finalized. |
| [#120385](https://github.com/openclaw/openclaw/issues/120385) | 27 | CLOSED | Code Mode tool catalog built incomplete for scheduled/cron turns — MCP tools missing. |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | 27 | OPEN | `doctor --fix --non-interactive` idles for 15+ min in repair preparation. |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | 23 | OPEN | Startup regression in 2026.10.1: `ready` time ~1030s vs ~410s on 2026.9.9 (Windows). |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | 15 | OPEN | Telegram adapter: network-failed outbound sends dead-lettered after a single attempt. |

### Most Active PRs (by comment count)
| PR | Comments | Status | Summary |
|----|----------|--------|---------|
| [#202298](https://github.com/openclaw/openclaw/pull/202298) | — | OPEN | Keep older checkouts compatible with verified bootstrap. |
| [#202308](https://github.com/openclaw/openclaw/pull/202308) | — | OPEN | Keep skill reviews and Advisor runs working after agent replies. |
| [#202209](https://github.com/openclaw/openclaw/pull/202209) | — | OPEN | Fix voice: answer phone, meeting and FaceTime consults on Claude CLI agents. |

**Analysis**: The most commented issues are all **stability and bootstrap bugs** (#197083, #178359, #168955). These represent the community's primary pain points: update reliability, doctor tool hangs, and startup performance regressions. The PR activity is heavily focused on infrastructure, CI, and platform-specific fixes (voice, Docker, memory).

---

## 5. Bugs & Stability

### Critical Bugs Reported Today (Ranked by Severity)
| Issue | Severity | Summary |
|-------|----------|---------|
| [#200606](https://github.com/openclaw/openclaw/issues/200606) | P1 | Candidate Doctor blocks update from 2026.11.3 → 2026.11.5 with plugin migration conflict and `changed=[]`. |
| [#198218](https://github.com/openclaw/openclaw/issues/198218) | P1 | Doctor/update maintenance livelocks while Gateway is stopped: update-run admission reader re-hashes unchanged state DB forever. |
| [#200224](https://github.com/openclaw/openclaw/issues/200224) | P2 | 2026.11.5 beta update refuses retired `agents.defaults.heartbeat`, but removing it on stable re-enables heartbeats. |
| [#202250](https://github.com/openclaw/openclaw/issues/202250) | P2 | `update migration-plan` always refuses because candidate artifact digest cannot be supplied. |
| [#200781](https://github.com/openclaw/openclaw/issues/200781) | P2 | Control UI 2026.11.5 Sessions sidebar renders only agent headers — no session rows. |

### Fix PRs Exist?
- **#202301** (Closed today) directly addresses the failed upgrade rollback path, likely related to #200606 and #198218.
- **#202278** addresses cache reclamation, which may indirectly help with resource-related stability.
- No direct fix PRs are open for the top P1 bugs (#198218, #200606) as of this digest.

**Stability Takeaway**: The project is shipping new betas/stables while P1 bugs from previous cycles (e.g., #198218 from Nov 13) remain open. The "candidate Doctor" block (#200606) is a direct blocker for users on the 2026.11.x update path.

---

## 6. Feature Requests & Roadmap Signals

### Actively Requested Features
- **#181774**: Make Active Memory recall ceiling (`MAX_TIMEOUT_MS`) configurable and show recall progress.
- **#181791**: Durable owner-native execution provenance for safe interruption recovery.
- **#179328**: Skill Workshop — configurable sedimentation rate (temperature dial) and content gate.
- **#131457**: Progress streaming mode for Feishu (Lark) channel (same as Slack, Discord, etc.).

### Predictions for Next Version
Given the volume of PRs merging today and the beta release, the next stable release (likely v2026.11.10 or v2026.12.0) will probably include:
- Improvements to the Agent Template/ClawHub package workflow (from #195707/#196322 in v2026.11.10-beta.1).
- Fixes to the update migration-plan digest requirement (#202250).
- Potential memory recall configurability if maintainers prioritize #181774.

---

## 7. User Feedback Summary

### Real User Pain Points
- **Update Reliability**: Managed npm updates frequently fail Doctor verification (#197083, #200606, #199617). Users report update runtimes taking hours and failing with SQLite lock errors during Gateway handoff (#200289).
- **Startup Performance**: Windows startup times degraded significantly (1030s vs 410s) in 2026.10.1 (#168955). Plugin metadata snapshot rescans take 58s on large trees (#187350).
- **Telemetry & Offsets**: Telegram poller fails to start after boot despite connected status; offset queued but never committed (#199569). Network failures on Telegram dead-letter messages with no retry (#125764).
- **Agent Management**: Idle skills refresh re-enters at 19-20 agents on Windows (#192496). Agent `end` hooks cannot tell which attempts a durable context engine already owns (#200471).
- **Usability**: Control UI Sessions sidebar shows only agent headers, no session rows (#200781). Prompt cache invalidated by system prompt section churn (#202001).

### Satisfaction/Dissatisfaction
- **High Dissatisfaction**: Update workflow reliability, startup performance regressions, and Telegram offset management.
- **Moderate Satisfaction**: New feature additions (agent templates, voice consults) are progressing well.
- **Positive Signals**: Maintainer responsiveness (500 PRs in 24h), active community participation, and rapid release cadence.

---

## 8. Backlog Watch

### Long-Unanswered Important Issues
| Issue | Age | Comments | Severity | Maintainer Attention Needed |
|-------|-----|----------|----------|----------------------------|
| [#198218](https://github.com/openclaw/openclaw/issues/198218) | 7 days | 11 | P1 (crash-loop, livelock) | **High** — Livelock in update-run admission when Gateway is stopped. |
| [#178359](https://github.com/openclaw/openclaw/issues/178359) | 31 days | 27 | P1 (doctor idle 15+ min) | **High** — `doctor --fix --non-interactive` never reaches DB repair. |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | 40 days | 23 | P1 (startup regression) | **High** — Startup `ready` time doubled on Windows. |
| [#197083](https://github.com/openclaw/openclaw/issues/197083) | 9 days | 29 | P0 (WAL publication) | **Medium** — Post-install Doctor leaves updates partially finalized. |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | 84 days | 15 | P1 (Telegram dead-letter) | **Medium** — No retry, no alert on transient network failures. |

### PRs Needing Maintainer Attention
- [#202298](https://github.com/openclaw/openclaw/pull/202298) — Keep older checkouts compatible with verified bootstrap (Open since today).
- [#202308](https://github.com/openclaw/openclaw/pull/202308) — Keep skill reviews/Advisor runs working after agent replies (Open since today).
- [#202209](https://github.com/openclaw/openclaw/pull/202209) — Voice consult fixes for Claude CLI agents (Open since today).

**Backlog Note**: The project has a "long tail" of issues aged 30-90+ days, many marked P1/P0. This is consistent with a project in rapid release mode where new features and betas outpace bug triage. Maintainers are actively merging PRs (200 in 24h), but the issue backlog reflects the cumulative surface area of a fast-moving codebase.

---
*Digest generated from GitHub data on OpenClaw. All links point to live GitHub resources.*

---

## Cross-Ecosystem Comparison

### 1. Ecosystem Overview
The personal AI agent open-source ecosystem on 2026-11-20 is characterized by a dichotomy between rapid iteration and stabilization. A subset of projects (OpenClaw, Hermes Agent, CoPaw, LobsterAI) exhibit high velocity, merging dozens of Pull Requests daily and shipping frequent beta/stable releases, reflecting a "rapid iteration" phase driven by feature ambition and community contributions. Conversely, a significant number of projects (NanoBot, PicoClaw, NanoClaw, ZeptoClaw, ZeroClaw) operate in a "maintenance mode" with low issue counts, merged PRs focused on CI/bug consolidation, and no new releases, indicating technical consolidation and debt resolution. Overall, the landscape is fragmented, with varying release cycles and maturity levels, but unified by a core focus on agent reliability, cross-platform integration (Telegram/Windows), and security hardening.

### 2. Activity Comparison
| Project | Issues (Open) | PRs (Open/Active) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 139 | 500 | 2 releases (1 Beta, 1 Stable) | ⭐⭐⭐⭐ (High velocity, high debt) |
| **Hermes Agent** | ~9 | 50 | 2 releases (Stable v0.23.3, Canary) | ⭐⭐⭐⭐ (Mature, platform focused) |
| **LobsterAI** | 1 | 50 | No releases | ⭐⭐⭐ (High feature velocity, security risk) |
| **CoPaw** | 12 | 14 | No releases | ⭐⭐⭐ (Stability focus, CLI bugs) |
| **NanoClaw** | 21 | 14 | RC3 (v2026.11.0) | ⭐⭐⭐⭐ (Active RC, security spikes) |
| **NanoBot** | 1 | 21 | None | ⭐⭐⭐⭐ (Frontend/UI focus) |
| **PicoClaw** | 0 | 5 | None | ⭐⭐⭐⭐ (Steady maintenance) |
| **ZeroClaw** | 4 | 50 | None | ⭐⭐⭐ (High refactoring activity) |
| **NanoClaw mirror** | - | - | - | - |
| **IronClaw/NullClaw/Moltis** | 0 | 0 | - | N/A |

### 3. OpenClaw's Position
OpenClaw occupies the "engine room" of the ecosystem. Its advantages over peers include the broadest feature scope (agent templates, package management via ClawHub, multi-provider support) and the highest raw throughput (200+ PRs merged in 24h). Technically, it differentiates itself through a "ClawHub" package manifest system and native trust flows for agent templates, positioning it as a platform for building agent networks rather than a single-assistant tool. However, it faces the steepest maturity curve: its 139 open issues and 500 open PRs indicate a project in "rapid iteration" mode where new features outpace polish. Compared to Hermes Agent's focused stability or PicoClaw's consolidation, OpenClaw is a high-risk, high-reward platform for early adopters and integrators.

### 4. Shared Technical Focus Areas
Across the ecosystem, several cross-project technical needs emerge:
*   **Telegram Stability:** Issues #125764 (OpenClaw), #6701 (NanoBot), #4340 (NanoClaw), and #12597 (ZeroClaw) highlight a persistent pain point: transient network failures, offset stagnation, and NUL-byte hostname bugs crashing or jamming Telegram-based agents.
*   **Cross-Platform Windows Stability:** Windows-specific regressions are universal. OpenClaw (#168955), Hermes Agent (#126622), LobsterAI (#3120/#3122), and CoPaw (#8830/#8833) all report startup freezes, file overwrite bugs (`write_file`), and resource leaks (`llama-server.exe`) on the Windows platform.
*   **Credential/API Key Security:** LobsterAI (#3120) and ZeroClaw (#12422) independently address the exposure of API keys (plaintext CLI args, missing checksums), signaling a maturing concern for "secure-by-default" agent deployment.
*   **Session & State Persistence:** OpenClaw (#198218, #197083), Hermes Agent (#158024), and CoPaw (#8579/#8811) focus on recovering agent state after restarts, preventing task leaks, and managing narrow-screen UI clipping.

### 5. Differentiation Analysis
*   **Feature Focus:** 
    *   **OpenClaw & ZeroClaw** target the "agent orchestrator" market, focusing on provider registries, channel migrations (IRC/Twitch to plugins), and tool search deferment.
    *   **LobsterAI & Hermes Agent** prioritize the "desktop companion" experience, emphasizing UI polish, DPI scaling, and native integration (Electron, Desktop panes).
    *   **NanoBot & PicoClaw** are lightweight, focused on specific workflows (WebUI, tool call extraction) with minimal overhead.
*   **Target Users:**
    *   **OpenClaw** appeals to integrators and power users building complex agent networks, given its high customizability and "beta" risk profile.
    *   **LobsterAI** targets users seeking a polished local AI companion (YoudaoNote integration) but currently faces securityUX criticism regarding key handling.
    *   **NanoBot/PicoClaw** appeal to developers or minimalists looking for stable, low-maintenance building blocks.
*   **Technical Architecture:**
    *   **OpenClaw** uses a monorepo-style rapid release cycle with beta/stable splits.
    *   **Hermes Agent** emphasizes a curated, stable release cycle with explicit "sweeper" risk tags for platform edge cases.
    *   **ZeroClaw** focuses on a modular provider registry and web-interface canonicalization.

### 6. Community Momentum & Maturity
*   **Rapidly Iterating:** OpenClaw (high PR volume, frequent betas), Hermes Agent (50 PRs/month, canary releases), and LobsterAI (50 PRs/month, active feature pushes) are in an aggressive development phase. They attract contributors seeking to shape cutting-edge features but carry higher instability risk.
*   **Stabilizing/Maintenance Mode:** NanoClaw, PicoClaw, NanoBot, and ZeroClaw (despite 50 PRs, focused on refactoring) are in consolidation phases. They demonstrate healthy project health through low issue counts and focused bug squashing, ideal for users prioritizing reliability over new features.

### 7. Trend Signals
*   **Security UX as a Bottleneck:** The simultaneous emergence of API key exposure issues (LobsterAI) and scoped credentials RFCs (ZeroClaw) indicates that as agents gain access to sensitive tools (Telegram, Notes, Browsers), the industry is recognizing that "powerful defaults" are a liability. Future frameworks will likely prioritize implicit authorization and encrypted secret vaults over plaintext CLI arguments.
*   **Platform Fragmentation Pressure:** The near-universal presence of Windows startup bugs and Telegram edge-case failures suggests that cross-platform compatibility is the primary technical debt burden. Projects that solve the "Windows + Telegram" matrix (e.g., via native API abstractions) will likely capture the enterprise/ power-user market.
*   **Modular Provider Ecosystems:** The migration of IRC/Twitch to plugins (ZeroClaw), the introduction of independent provider registries (ZeroClaw), and the deferment of large tool catalogs (LobsterAI, OpenClaw) point toward a trend of "unbundling." AI agents are moving away from monolithic toolsets toward modular, on-demand skill repositories to reduce token overhead and improve startup latency.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

**NanoBot Project Digest**
**Date:** 2026-11-20
**Source:** [GitHub - HKUDS/nanobot](https://github.com/HKUDS/nanobot)

### 1. Today's Overview
NanoBot maintains a healthy development cadence today, with 21 Pull Requests merged or closed against a single bug fix. The project continues its rapid iteration on the WebUI and session management, though the lone issue update addresses a latent security risk in URL resolution. Activity is concentrated in the frontend and session layers, with the core network security module seeing attention only for the critical bug fix. Overall, the project is in an active stabilization phase leading into the holiday period.

### 2. Releases
No new releases were published today. The latest release history remains unchanged from the previous digest.

### 3. Project Progress
A significant wave of 14 Pull Requests were merged or closed today, focusing primarily on WebUI polish, session stability, and accessibility.

*   **WebUI Polish:** Several PRs refined the user interface, including `fix(webui): hide live activity timer on narrow screens` (6728) and `fix(webui): anchor floating surface animations` (6722).
*   **Session & Continuity:** Major work went into session continuity. `fix(session): replay passive history in native continuations` (6681) and `fix(session): replay user images from stored attachments` (6720) ensure state survives process restarts and channel switches.
*   **Security Patching:** Two security-focused PRs were merged: `fix(security): reject malformed hostnames before DNS resolution` (6716) and `fix(goal): block goals after terminal execution failures` (6688), addressing crash loops and invalid DNS targets.
*   **Refactoring:** `refactor(webui): separate gateway mutations and UI state` (6727) and `refactor: remove unreachable code and redundant tests` (6729) cleaned up technical debt and redundant code paths.

### 4. Community Hot Topics
The most discussed items today reflect a focus on reliability and user experience continuity.

*   **Highest Comment Activity:** While comment counts are listed as "undefined" for many top PRs, the volume of merged PRs (21 total) indicates high reviewer activity. Notably, PR #6731 ([bug, documentation, enhancement, webui, fix, test, priority: p2] fix(webui): confirm linked automation deletion in untimed toast) is the most recent open PR, signaling ongoing work on automation state management.
*   **Active Issues:** Issue #6701 remains the sole active topic, detailing a bug where `resolve_url_target()` allows hostnames with NUL bytes, causing `getaddrinfo` truncation. This is a low-comment issue but a critical stability/concern for network operations.
*   **Open Feature Requests:** PR #5234 ([provider, webui, new-provider, feature, test, priority: p1] feat(agent): integrate mst-python as a metasearch provider) is the oldest open PR still active (created Aug 3), representing a long-awaited feature to integrate a multi-search aggregator.

### 5. Bugs & Stability
Today saw the resolution of several stability bugs, though one latent network security issue requires attention.

*   **Critical:** Issue #6701 ([CLOSED]...resolve_url_target allows hostnames with NUL bytes) was updated on 2026-11-19. While marked closed, the underlying bug—where NUL bytes (\x00) in hostnames truncate DNS resolution on POSIX systems—poses a potential security risk if input sanitization is bypassed. A fix PR (#6716) was merged today to reject malformed hostnames, suggesting this issue was the catalyst for that change.
*   **Moderate:** PR #6688 ([conflict] fix(goal): block goals after terminal execution failures) was merged, preventing goals from remaining active after output-limit recovery or empty responses, which previously led to stalled agent runs.
*   **Low:** Various UI bugs regarding timer visibility on narrow screens and animation anchoring were resolved, improving the robustness of the interface under edge-case conditions.

### 6. Feature Requests & Roadmap Signals
The roadmap is currently driven by WebUI refinement and provider expansion.

*   **Upcoming Features:** The integration of **mst-python** (PR #5234) as a metasearch provider is the most significant long-term feature request. Once merged, it will aggregate results from DuckDuckGo, Google, Bing, etc., using Reciprocal Rank Fusion.
*   **Roadmap Signals:** The sheer number of "p2" priority fixes regarding WebUI responsiveness (narrow screens, tool timers) suggests a push toward making the interface viable on mobile and low-resolution devices. The focus on "continue channel sessions from the sidebar" (PR #6714) indicates a roadmap item focused on cross-platform continuity (Telegram/WebUI).

### 7. User Feedback Summary
User feedback, as evidenced by merged PRs, centers on **state persistence** and **interface consistency**.

*   **Satisfaction:** Users appear satisfied with the rapid bug squashing rate (14 merges today). The resolution of image replay issues (6720) and history replay (6681) likely resolves significant frustrations regarding lost context between sessions.
*   **Dissatisfaction/Pain Points:** The continued existence of issue #6701 regarding NUL byte hostnames suggests a concern about edge-case robustness in network handling. Additionally, the need for an "untimed toast" confirmation for automation deletion (6731) implies users want clearer, less intrusive confirmation flows when managing linked automations.

### 8. Backlog Watch
Several items in the backlog require maintainer triage or review closure.

*   **Long-Open Feature:** **PR #5234** (integrate mst-python metasearch) has been open since August 3rd. Despite having "p1" priority, it remains unmerged, representing a significant delay in search capability enhancement.
*   **Unresolved Security Concern:** **Issue #6701** (NUL byte hostname resolution) was technically updated/closed today, but the root cause in `nanobot/security/network.py` warrants a code review to ensure the fix is complete and no similar truncation vectors exist.
*   **Open Conflict Resolution:** **PR #6714** (continue channel sessions from the sidebar) and **PR #6688** (block goals after terminal failures) are marked with `[conflict]`, indicating they may have merge conflicts with the current main branch that need resolution.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-11-20

## 1. Today's Overview
Hermes Agent exhibits a day characterized by rapid issue resolution and feature deployment, with 9 issues and 50 PRs updated in the last 24 hours. The project shows high velocity, driven by two releases pushed on November 19 (stable v0.23.3 and canary v0.23.2+canary). The current state reflects a mature codebase addressing cross-platform stability, particularly on Windows and Telegram, while refining the desktop experience. The "sweeper" risk tags indicate ongoing attention to platform-specific edge cases. Overall, project health appears strong, with maintainers actively merging fixes and preparing the next stable cycle (v0.24.0).

## 2. Releases
Two releases were published on **November 19, 2026**:
*   **v0.23.3 (Stable):** A patch release rolling up approximately 370 PRs since v0.23.2. It targets the CLI, installers, Microsoft Store, Docker, and Hermes Cloud. Notably, full curated notes for this window are shipped with the upcoming v0.24.0, suggesting a transition to a new feature cycle.
*   **v0.23.2+canary.20261119T064637Z (Canary):** The canary build corresponding to the same development window.

**Breaking Changes / Migration:** No breaking changes are documented for v0.23.3; it is framed as a stabilization release. Users upgrading from v0.23.2 should expect a smooth transition, with the "curated notes" implying significant internal changes behind the scenes for v0.24.0.

## 3. Project Progress
Today saw significant progress in stability and desktop integration:
*   **Windows Stability:** PR #158121 closed a critical Windows bug where provider plugin staging failed with `WinError 3` due to path length exceeding `MAX_PATH`. PR #141881 (open) addresses the root cause of `write_file` refusing overwrites on Windows by rebuilding file versions from paths.
*   **Telegram Reliability:** Two PRs merged today (#158130, #153032) fix inbound document handling and draft streaming, addressing timeouts and installation-onboarding issues.
*   **Desktop Polish:** PR #152402 fixes a gateway fencing issue where idle dashboard panes would block chat resumption. PR #149932 improves chat refresh rendering, ensuring prompts are drawn only once during long-chat mid-turn refreshes.
*   **Agent Logic:** PR #158127 introduces "unfinished-bench" behavior, making agents stop and report when workspace rules block tasks rather than forcing overrides. PR #158038 (closed) fixed a regression related to Tuesday self-awareness.

## 4. Community Hot Topics
The most active discussions center on platform-specific reliability and system behavior:
*   **Windows File Overwrite Bug (Issue #126622):** This remains the top open issue with 12 comments. It details a permanent refusal to overwrite files on Windows due to a `stat()`/`fstat()` `st_ctime_ns` source mismatch in `_file_version`. The linked PR #141881 aims to fix the version building logic.
*   **BlueBubbles Read-Receipt Task Management (Issues #158024 & #158132):** A critical pairing of bug and fix. The bug (#158024) reports that read-receipt tasks are spawned via `asyncio.create_task()` and immediately dropped, causing the event loop to keep only weak references, leading to tasks being garbage collected. PR #158132 implements the fix to keep the task referenced and cancel it on disconnect.
*   **Telegram `getFile` Timeout (Issues #158107 & #158130):** Issue #158107 reports that inbound PDF documents are dropped because Telegram's `getFile` API takes 90+ seconds on fresh uploads, exceeding the 20s timeout. PR #158130 grants inbound `getFile` a longer read budget to resolve this.

## 5. Bugs & Stability
The bug landscape today is dominated by Windows and Telegram integration stability:
*   **Critical:** The `write_file` refusal on Windows (#126622) and the `WinError 3` plugin staging failure (#158121) represent high-severity platform stability issues.
*   **Moderate:** The BlueBubbles read-receipt task leak (#158024) is a latent stability risk; while PR #158132 exists, it requires verification. The "activity timer ticking after reply" bug (#158118) affects the user experience of the Desktop client.
*   **Low Severity but Annoying:** The macOS update labeling bug (#157098) where the client labels a return to stable as an update remains open with no clear resolution path in the provided data.

## 6. Feature Requests & Roadmap Signals
Feature activity is split between infrastructure and user-facing workflows:
*   **Desktop Redesign (PR #152168):** A massive integration branch introducing a "redesigned agent workspace with classic recovery." This is the most significant UI/UX change currently in flight, suggesting a focus on the "Hermes Desktop" experience.
*   **Plugin Catalog Expansion (PR #158131, #146365):** Updates to Reliquary (native host support) and the addition of `agents-hub` indicate a growing ecosystem and community plugin integration.
*   **A2A Protocol (PR #141947):** Implementation of an "accept-then-poll" client workflow for A2A 1.0, signaling support for next-generation agent-to-agent communication standards.

## 7. User Feedback Summary
User pain points are heavily weighted toward cross-platform compatibility and streaming fidelity:
*   **Windows Users:** Face persistent file I/O issues (`write_file` refusal) and plugin staging failures (`MAX_PATH` errors), making the agent less reliable as a local tool on that platform.
*   **Telegram Users:** Experience dropped media and streaming failures during the initial bot setup or after on-demand library installs.
*   **Streaming UX:** Multiple issues (#16084, #149932, #153032) focus on eliminating "edited" badges, improving ParseMode rendering, and ensuring streaming indicators behave correctly across platforms (Feishu, Telegram, Desktop).
*   **Satisfaction:** The high volume of merged PRs (50 in 24h) suggests a responsive maintainer team, but the existence of long-standing open issues like #126622 (since September) indicates a backlog of platform-specific edge cases that can frustrate power users.

## 8. Backlog Watch
Several important items require maintainer attention or are at risk of aging:
*   **Issue #126622** ([Windows write_file bug]): Open since 2026-09-28. Despite a linked PR (#141881), the issue remains open with 12 comments. This is the most critical backlog item given its impact on the core `write_file` functionality on the dominant OS.
*   **Issue #90498** ([System-prompt guidance looping]): Open since 2026-08-20. Discusses agents looping on failing approaches due to aggressive system prompt guidance. This is a fundamental agentic reasoning issue that may require systemic changes to the prompt engineering or task execution logic.
*   **PR #152168** ([Redesigned agent workspace]): The head of a long merge chain (stacked PRs). While active, the sheer volume of dependent PRs makes it a blocker for any major workspace-related releases until merged.
*   **Issue #158133** ([Reasoning-budget exhaustion]): Created and updated today. A specific bug where reasoning token exhaustion is misclassified as context overflow, triggering unnecessary compression. This is a sharp, well-defined bug that should be prioritized for the v0.24.0 cycle.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

Here is the project digest for PicoClaw (github.com/sipeed/picoclaw) for 2026-11-20.

### 1. Today's Overview
The PicoClaw project shows signs of steady maintenance activity following a period of feature consolidation. With zero new issues or releases generated in the last 24 hours, the project is currently in a stable state. The most notable activity consists of five closed Pull Requests, primarily focused on CI optimization and merging previously open bug-fix contributions. The lack of new issue creation suggests the core functionality is functioning well, and the community is currently in a "maintenance mode" phase, cleaning up technical debt and refining existing workflows rather than introducing breaking changes.

### 2. Releases
**No new releases were published today.**

The latest release data indicates no new version tags were created in the observed period. Users should refer to the repository’s Releases page for the most recent stable builds.

### 3. Project Progress
**Five Pull Requests were merged/closed today, representing a mix of workflow optimization and bug resolution.**

*   **CI Workflow Optimization (PR #2516):** The most significant non-bug fix was the closure of PR #2516, which disabled the automatic daily `sync-rebase` cron schedule. This change was made to reduce unnecessary CI load, though the workflow remains available for manual triggers via `workflow_dispatch`. This indicates a move towards more efficient resource management.
*   **Bug Fix Consolidation:** Three separate Pull Requests were merged by user `xuwei-xy` (PR #1560, #1555, and #1551), all following a similar pattern of consolidating fixes from older open PRs (#1312, #1308, #1390, etc.). These merges suggest a "cleanup" effort to integrate long-standing contributions into the main branch, likely resolving lingering compatibility or functionality issues.
*   **Tooling Improvement (PR #586):** This PR was closed with improvements to tool call extraction and stripping logic, supporting complex model outputs and handling nested objects/escaped characters more robustly. This is a technical enhancement aimed at improving the reliability of AI tool interactions.

### 4. Community Hot Topics
The most active discussion thread today is **PR #2516**, which garnered attention for its impact on the project's CI pipeline. While the PR itself has zero comments, its focus on removing automated cron jobs highlights a community concern regarding CI efficiency and cost reduction.

Underlying needs evident in the merged PRs (#1560, #1555, #1551) revolve around **stability and integration**. The repeated merging of fixes from PRs dating back to early 2026 suggests that the project maintainers are actively working to resolve a backlog of smaller integration issues to ensure a stable foundation for future feature development.

### 5. Bugs & Stability
**No new bugs were reported in the last 24 hours (0 open/active issues).**

The stability of the project appears high for the current date. The closed PR #586 is the primary indicator of recent bug-fixing activity, focusing on "hardening the tool call extraction logic." By implementing a "state-aware scanner" to handle nested JSON and escaped characters, this fix directly addresses potential crashes or failures when interacting with complex AI model outputs. No critical regressions were reported today.

### 6. Feature Requests & Roadmap Signals
No feature requests or new Issues were created today, making it difficult to predict immediate roadmap signals based solely on this data dump. However, the nature of the closed PRs provides insight:

*   **Refinement over Expansion:** The focus on CI optimization (#2516) and tool call extraction (#586) suggests the roadmap is currently centered on **developer experience and AI integration reliability** rather than new user-facing features.
*   **Integration Hygiene:** The merging of multiple legacy PRs (#1312, #1308, etc.) indicates that the immediate roadmap goal is likely to "land" pending contributions and stabilize the codebase before venturing into new major features.

### 7. User Feedback Summary
Since no new issues were opened, there is no direct user feedback recorded for 2026-11-20. However, the activity pattern reveals user pain points that have recently been addressed:

*   **Pain Point:** Potential instability or failures when calling tools with complex, nested JSON structures or escaped characters.
*   **Resolution:** The fixes in PR #586 and the consolidation PRs indicate that the maintainers are prioritizing a robust parsing layer to prevent these types of crashes.
*   **Satisfaction:** The disabling of the automatic rebase schedule (#2516) likely improves satisfaction for users managing the repository's CI, reducing noise and potential build failures caused by automated rebasing.

### 8. Backlog Watch
**Long-unanswered Issues:** With 0 open issues currently listed, there are no "long-unanswered" issues to monitor at this moment.

**PRs Needing Attention:**
*   **PR #1560, #1555, #1551:** While these were merged today, they originated from older open PRs (#1312, #1308, #1390, etc.). Maintainers should verify that the merged code from these older branches does not introduce new technical debt or require follow-up cleanup.
*   **PR #2516:** Although merged, the decision to remove the cron schedule should be monitored to ensure that manual `workflow_dispatch` triggers are functioning as expected and that the project maintainers remember to manually rebase if needed to keep the branch up to date.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-11-20

## 1. Today's Overview
NanoClaw remains in active development with 21 open issues and 14 active PRs updated in the last 24 hours. The project released the third release candidate for version 2026.11.0 (v2026.11.0-rc.3), signaling a push toward stable release. A notable spike in security hardening issues was observed today, with four new items filed regarding dependency management and binary provenance. Community activity is evenly split between bug fixes in core integrations (Telegram, WhatsApp) and infrastructure hardening.

## 2. Releases
*   **v2026.11.0-rc.3** (Released): The third release candidate for the November 2026 release. This build is intended to be the final stable candidate unless testing reveals issues, replacing the previous 2026.10.1 cycle. It includes the merge of 6 PRs since the last release candidate, most notably the movement of `channels` and the update of Iron Proxy pins.

## 3. Project Progress
**Merged/Closed PRs (6 items):**
*   **Infrastructure Hardening:** PR #4471 successfully implemented hardening follow-ups from #4439, specifically showing refused database password changes and blocking `~/.onecli` mounts during setup.
*   **Setup Stability:** PR #4488 fixed a crash in the setup step runner where a raw log that couldn't be opened would crash the process; steps now wait until the log is safely written to disk.
*   **Skill Integration:** PR #4477 prevented Linux Codex sign-in from removing old sign-in folders that running processes might still reference.
*   **Release Engineering:** PR #4489 adjusted the test guard for `/add-vercel` installs to allow the skill-installed vercel entry.

**Feature PRs Merged:**
*   **Telegram Threading:** PR #3971 routed forum and private-chat topics as threads, ensuring replies land in their source topic.
*   **Discord Attachments:** PR #2752 fixed the staging of inbound Discord attachments to expose only URLs, making them readable by the agent.

## 4. Community Hot Topics
The most active discussion centers on **security hardening** and **Telegram rendering**.

*   **Iron Proxy Staleness (#4494, #4493, #4490):** Three new issues filed today highlight that Iron Proxy is seven releases behind upstream (v0.52.0 vs v0.59.0), checksums are missing for pinned binaries in `not-covered.json`, and base images are pinned by tag rather than digest. These indicate a maintenance burden keeping third-party dependencies up to date.
*   **Telegram Heading Bug (#4340):** A long-standing bug where lines starting with `#<digits>` (e.g., `#467 is closed`) render as large headings in Telegram. Despite being open since Nov 12, it has only 1 comment, suggesting it is a persistent rendering edge-case.
*   **Node Installer Non-Debian Support (#2462):** An open issue from May still plagues non-Debian users (Fedora/RHEL), who hit NodeSource's "Debian-based systems" error with no fallback. A related PR (#4483) was merged today to add openSUSE support and clear error messages for other distros.

## 5. Bugs & Stability
*   **Critical/High:** The **Telegram heading rendering** (#4340) remains the most visible user-facing bug. The **update-nanoclaw skill** (#4480) reports that it asks for upstream commits and file buckets that the `prepare` step does not return, potentially blocking legitimate updates.
*   **Medium:** The **cutover snapshot** (#4479) was found to copy agent-built `node_modules` and package caches into the `groups/` directory, inflating snapshot sizes unnecessarily. PR #4484 attempts to fix the ordering of space checks before service stoppage.
*   **Low/Infrastructure:** Several "nothing checks the pins" issues (#4493, #4491, #4492) relate to the integrity of installed skills and proxies, marking a shift toward preventive stability.

## 6. Feature Requests & Roadmap Signals
*   **iMessage Summaries:** PR #4468 was merged to allow agent groups to follow chosen iMessage threads as summaries locally on Mac, without messages leaving the device. This signals a roadmap focus on cross-platform messaging fidelity and local privacy.
*   **Branch-Aware Installs:** PR #4084 (updated recently) ensures new installs follow the branch they were cloned from, reducing friction for teams tracking `main` vs `stable`.

## 7. User Feedback Summary
Users are reporting friction in two main areas:
1.  **Dependency Management:** The influx of Iron Proxy and pin-related issues suggests operators are struggling with the provenance and freshness of third-party binaries (Iron Proxy, mnemon, dashboard packages).
2.  **Cross-Platform Onboarding:** The `install-node.sh` script remains a pain point for non-Debian Linux users, despite the merged fix for openSUSE, as other distros still fail with opaque errors.

## 8. Backlog Watch
*   **#4480** (`update-nanoclaw` skill): Open since Nov 19. The skill is asking for data that the `prepare` phase doesn't provide, which may be blocking automated updates.
*   **#4340** (Telegram headings): Open since Nov 12. A minor but persistent rendering bug affecting agent readability in Telegram.
*   **#4479** (Snapshot bloat): Open since Nov 19. The snapshot is copying large dependency trees from agent workspaces.
*   **#4468** (iMessage summaries): Recently merged, but worth monitoring for user adoption feedback on the new summary feature.

**Data Source:** GitHub API for `nanocoai/nanoclaw` (qwibitai/nanoclaw mirror/analysis).

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
**Date:** 2026-11-20
**Source:** netease-youdao/LobsterAI

### 1. Today's Overview
The LobsterAI project shows high engineering velocity today, with 50 Pull Requests merged or closed in the last 24 hours against a single issue update. The activity is dominated by performance optimizations, stability fixes for Windows gateway startup, and security hardening. The project health appears strong, with maintainers actively cleaning up technical debt (reducing token overhead, deferring tool catalogs) and addressing platform-specific stability issues. However, a critical security oversight regarding API key handling in the YoudaoNote skill has surfaced, indicating a tension between rapid feature development and credential safety.

### 2. Releases
No new releases were published today. The latest release history is currently empty.

### 3. Project Progress
A significant wave of 50 PRs were merged/closed today, focusing on three main axes:
*   **Performance & Startup Speed:** Several PRs (#3000, #3001, #2997, #2987) targeted reducing gateway startup latency on Windows, cutting blocked time from seconds/minutes to milliseconds by natively reading process start times and isolating plugin loads.
*   **OpenClaw Tooling:** PR #3029 implemented "Tool Search" to defer large tool catalogs, reducing the data sent per model request from ~106k characters/45k tokens to only core tools. PR #3066 optimized plugin gating and dist packaging.
*   **UI/UX Polish:** PR #3121 collapsed image galleries by default on the home screen, and PR #3124 refined the desktop companion orb docking behavior across displays and DPI scaling.

### 4. Community Hot Topics
The most discussed items today revolve around the newly opened issue and its corresponding PR fix.

*   **#3120 [OPEN]** "youdaonote：API Key 以明文命令行参数传递，安装脚本缺少版本与校验" (Created: 2026-11-19, Updated: 2026-11-20, 3 comments)
    *   **Analysis:** This is the top community hot topic. It highlights a critical credential exposure vector where API keys are passed as plaintext command-line arguments, appearing in model context, shell history, and process lists. The community is actively discussing secure alternatives for credential transmission.
*   **#3122 [OPEN]** "fix(skills): protect YoudaoNote API key setup" (Created: 2026-11-20, 0 comments)
    *   **Analysis:** This PR directly addresses #3120. It aims to restructure the YoudaoNote skill to avoid exposing user keys in plaintext, marking a significant step toward hardening the project's security model.

### 5. Bugs & Stability
Stability improvements were a major focus of today's merges, primarily targeting the Windows gateway experience:

*   **Windows Gateway Startup Latency:** PRs #2997 and #2987 address severe startup freezes (up to 170-250 seconds) caused by synchronous `fs.access` calls and PowerShell spawning when 360 Total Security is present. The fixes involve native Windows API reads and plugin path caching.
*   **Gateway Exit/Crash Recovery:** PR #2729 (closed recently but relevant) deals with Windows gateway exits failing to register as "exited" after SIGKILL, a persistent regression for Windows users.
*   **PPT Dialog Click Issues:** PR #3119 fixed click-through issues on example dialogs during Windows QA, ensuring close buttons receive proper mouse input.

No critical crashes were reported in the last 24h beyond the ongoing gateway startup discussions; fixes are actively being merged.

### 6. Feature Requests & Roadmap Signals
While no new feature requests were highlighted in the 24h snapshot, the merged PRs signal the roadmap direction:
*   **In-app Browser Integration:** PR #3043 indicates a shift toward an authenticated local bridge for web search within the Electron app, moving away from standalone Playwright/Chrome instances to reuse app sessions and proxy configurations.
*   **Subagent Persistence:** PR #3123 focuses on restoring subagent sessions on the dsh engine, ensuring delegated tasks retain their output panels—a quality-of-life improvement for multi-agent workflows.
*   **Desktop Companion Polish:** The focus on orb docking (#3124) suggests an ongoing effort to refine the local "companion" UI experience.

### 7. User Feedback Summary
User feedback today is split between **performance gratification** and **security concern**.
*   **Positive:** The community is benefiting from significant under-the-hood speed improvements, particularly Windows users who previously faced agonizingly slow startups. The collapsing gallery UI (#3121) is also noted as a welcome cleanup.
*   **Negative/Concern:** The exposure of API keys in plaintext (#3120) is a major pain point. Users relying on the YoudaoNote skill are at risk of credential leakage. There is a clear demand for "secure by default" credential handling, indicating that securityUX is currently lagging behind feature velocity.

### 8. Backlog Watch
*   **#3120 (and #3122):** The API key exposure issue is the most urgent backlog item. While PR #3122 is open to fix it, the issue has been open for less than a day but has already garnered attention due to the severity of hardcoded/CLI-plaintext keys. Maintainer attention is required to approve the security fix.
*   **#3124:** The desktop companion orb docking fix is open and addressing a specific UX edge case (multi-display/DPI). It requires testing on varied hardware configurations to ensure the "flush against edge" default works universally.
*   **Long-term Technical Debt:** PRs like #2996 (shipping only allowlisted skills) and #3029 (tool search deferment) represent a backlog of performance optimizations that have finally been merged, suggesting the project is catching up on "cleanup" after a period of rapid feature addition.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the CoPaw project digest for 2026-11-20.

### 1. Today's Overview
CoPaw continues to see active development with a healthy flow of contributions. Over the last 24 hours, the project merged or closed 14 PRs and addressed 12 open issues, indicating a focused effort on stability and polishing the user interface. While no new releases were published today, the volume of merged fixes—particularly in the Windows backend and console frontend—suggests the team is prioritizing a stable v2.3.x release candidate state ahead of a potential future launch.

### 2. Releases
**No new releases were published today.**

### 3. Project Progress
Today saw significant progress on the Windows backend and console UX. Four merged PRs addressed critical Windows-specific stability issues:
*   **PR #8835**: Fixed agent config save failures caused by Windows file locking and ensured plugin installer child processes exit cleanly.
*   **PR #8834**: Reclaimed stale response routes in channels when capacity limits are reached.
*   **PR #8823**: Fixed the console rendering of wide tables and code blocks, ensuring they remain scrollable within message bubbles rather than being clipped.
*   **PR #8831**: Stabilized the nightly plugin install/uninstall tests.

Other merged fixes addressed SDK log restoration after channel isolation and improved media budget enforcement.

### 4. Community Hot Topics
The most discussed issues today reflect user frustration with UI scaling and API routing bugs:
*   **Issue #8811** (4 comments): A bug reported on 2026-11-18 regarding narrow-screen rendering, where long messages, tables, and code blocks are裁切 (clipped) without horizontal scrolling. This highlights a persistent responsiveness issue in the Web UI.
*   **Issue #8833** & **#8832** (1 comment each, created 2026-11-20): These are "blocker" bugs for the CLI. The `mission` CLI incorrectly duplicates the `/api` prefix (`/api/api/chat/send`), and the auto health check uses an unsupported `HEAD /api/version` endpoint, resulting in 405 errors. These issues render the CLI non-functional for automated tasks.
*   **Issue #8836** (1 comment, created 2026-11-20): Reports a page loop/refresh bug when tool configurations contain a `password` component, indicating a fragile frontend state management issue.

### 5. Bugs & Stability
The bug report volume is high, with several critical stability concerns:
*   **Critical (CLI/HTTP):** Issues #8833 and #8832 are currently blocking users who rely on the CLI for mission management and daemon health checks.
*   **Critical (Windows):** Issue #8830 reports that orphaned `llama-server.exe` processes accumulate on Windows across restarts, exhausting memory and preventing local model startup. This is a resource leak bug.
*   **High (UI/Rendering):** Issue #8811 (narrow screen clipping) and #8836 (password config loop) affect the day-to-day usability of the Console UI.
*   **Status:** Fix PRs exist for the console scrolling (#8823) and Windows config saving (#8835), but the CLI prefix and Windows server leak bugs require immediate maintainer attention.

### 6. Feature Requests & Roadmap Signals
Feature requests today were sparse but targeted:
*   **Telegram Integration:** Issue #8827 requests isolating agent sessions by Telegram forum topic, allowing for better organization in supergroups.
*   **Local Hardware Support:** Issue #8826 proposes adding a "Rapid-MLX" preset for Apple Silicon users to connect local inference servers.
*   **Native Notifications:** Issue #8821 (closed today) requested Windows system tray notifications on task completion, which was merged, suggesting the team is responsive to quality-of-life requests.

### 7. User Feedback Summary
User feedback today paints a picture of a feature-rich but technically precarious experience. The community is actively hitting edge cases: the Web UI clips content on mobile/narrow views, the CLI has routing bugs that break automation, and Windows users face process leaks. There is a clear demand for better "it just works" stability, particularly around Windows backend management and responsive design, contrasted against the high excitement for new provider integrations (like DeepSeek search) and Telegram features.

### 8. Backlog Watch
Several important items need maintainer triage:
*   **#8580** (Created Nov 4, Updated Nov 20): The "Memory tag index never rebuilds" issue. Despite being open for 16 days and having 6 comments, it remains unresolved, causing 503 errors for tag queries. This is a high-priority data integrity bug.
*   **#8579** (Created Nov 4, Updated Nov 19): Reports that disabling a provider leaves stale model configurations in the agent run-config, causing `ProviderError` crashes. This has been open for 16 days with 2 comments and breaks channel functionality.
*   **#8811** (Created Nov 18, Updated Nov 20): The narrow-screen clipping bug is relatively new but has already garnered attention due to its impact on the primary user interface.
*   **#8499**: A large [XXXL] PR to extract local model management into a plugin, which has been open since late October. This is a significant architectural change that may be blocking other developments.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest - 2026-11-20

## 1. Today's Overview
ZeroClaw exhibits high velocity with 54 total events (4 issue updates and 50 PR updates) in the last 24 hours. The project remains in an active development state with zero new releases. The issue landscape is currently dominated by targeted security and platform stability concerns, while the PR stream shows a strong focus on architectural refactoring, provider ecosystem expansion, and channel infrastructure modernization. The ratio of open issues (4) to merged PRs (1) suggests a bottleneck in code review/integration rather than a lack of development momentum.

## 2. Releases
No new releases were published today. The project continues its incremental development cycle without a tagged version bump. Operators should track the `master` branch for the latest features and fixes.

## 3. Project Progress
A single PR was merged/closed today (#12590), a minor Docker configuration fix ensuring the Windows installer script remains embedded in web builds. The most significant progress lies in the 49 open PRs, which represent substantial forward motion across the codebase. Key merged advancements include the migration of IRC and Twitch channels into registry plugins (#12443), the introduction of an independent provider registry domain (#12454), and the implementation of canonical registry and model reference selection for the web interface (#12450, #12452, #12453). These changes signal a maturation of the project's orchestration layer and provider integration framework.

## 4. Community Hot Topics
The most discussed items center on Telegram reliability and browser credential management.

*   **Telegram Transcription Deadlock (#12597):** This bug report has immediate severity (S1), noting that failed voice message transcriptions cause the bot to retry indefinitely, blocking subsequent text messages. The lack of offset advancement is a critical workflow blocker.
*   **Scoped Operator Credentials RFC (#12422):** A Request for Comments regarding a new security layer allowing operators to authorize agents against services without exposing underlying credentials to the model or chat. This has attracted attention (3 comments) and represents a high-impact security design discussion.
*   **Browser TOTP/Username Isolation (#12596):** A feature PR adding WebUI support for independent browser grants for username/password and TOTP access. This depends on the aforementioned RFC #12422 and indicates a push for finer-grained access control.

## 5. Bugs & Stability
Two critical stability issues were reported today, both classified as bugs:

*   **Telegram Offset Stagnation (#12597):** Severity S1. The core issue is that transcription failures prevent the Telegram offset from advancing, effectively jamming the channel. This is the most pressing stability bug currently open.
*   **PR Risk Test Proof Read Error (#12601):** An S3 minor issue concerning the `strict_test_only_proof` script reading from `base.sha` instead of the merge-base for Rust files. While lower severity, it indicates a systemic risk in the CI/risk reporting pipeline that could lead to false positives/negatives in PR approvals.

Notably, a fix PR for the Docker installer issue (#12590) was merged today, resolving a packaging regression.

## 6. Feature Requests & Roadmap Signals
Today's feature activity is heavily concentrated on channel capabilities and provider model selection.

*   **WhatsApp Quoted Replies (#12598):** A request to send agent replies as quoted replies in WhatsApp groups to improve context awareness, given broken mention functionality.
*   **Telegram Trusted Groups (#12592):** A large feature (L size) adding `trusted_groups` authorization, allowing messages from specific groups to be admitted without peer-group sender entries. This reflects a demand for more granular channel access control.
*   **Provider Model Canonicalization (#12450, #12452, #12453):** A trilogy of PRs adopting the V5 registry model, suggesting a roadmap move towards standardized, canonical model references across all providers (OpenAI, Anthropic, Ollama, etc.) to replace the current V4 configuration fragmentation.

## 7. User Feedback Summary
User feedback today highlights two distinct pain points:
1.  **Telegram Media Handling:** The inability to recover from failed transcriptions without manual intervention, leading to stalled bots.
2.  **Credential Exposure Friction:** The need for secure-by-default authorization patterns (as explored in RFC #12422) where models can act without seeing raw secrets, indicating a user base that values both capability and security/privacy.

## 8. Backlog Watch
Several items warrant maintainer attention due to age or high impact:

*   **#11676 (Preserve created_at):** Open since October 12, this bug fixes a SQLite session transcript timestamp regression. It has been open for over a month despite being a regression on a core data feature.
*   **#12062 (Bounded RPC Denial):** Open since October 27, this documentation proposal addresses stable RPC denial reasons. It sits in the docs backlog but is critical for defining error boundaries.
*   **#12422 (RFC: Scoped Credentials):** While active with 3 comments, this RFC has been open since November 14 and requires a maintainer decision to merge or close to unblock the dependent PR #12596 (browser TOTP/username isolation).
*   **#12443 (IRC/Twitch Migration):** Merged today, but the underlying architectural shift is large; the backlog watch here is essentially resolved, but the migration completeness should be verified.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*