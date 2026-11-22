# OpenClaw Ecosystem Digest 2026-11-22

> Issues: 118 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-22 06:18 UTC

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
**Date:** 2026-11-22

#### 1. Today's Overview
The OpenClaw project exhibits extremely high daily activity, with 118 issues and 500 PRs updated in the last 24 hours. The issue queue is currently dominated by P1/P2 stability bugs, particularly surrounding gateway lifecycle management, memory leaks, and session state corruption. Despite the volume of activity, no new releases were published today. The merge rate is robust, with 204 PRs merged or closed, indicating a healthy contribution pipeline. However, the issue backlog remains critical, with 81 open/active issues demanding attention.

#### 2. Releases
No new releases were published today. The latest stable releases remain `v2026.11.5` and `v2026.11.6`, which contain fixes for several high-priority bugs including the Collector child session hang (Issue #141474) and terminal reply rendering issues.

#### 3. Project Progress
Today saw significant progress in infrastructure and gateway stability. Key merged PRs include:
*   **PR #202801**: Fixes WAL journal mode restoration after database rollback, preventing SQLite integrity issues on WAL-policy filesystems.
*   **PR #201631**: Resolves a gateway spawn broker restart failure, restoring command functionality after launch errors.
*   **PR #203106**: Adds user-facing error reporting for chat-made automations, improving debuggability after silent failures.
*   **PR #203414**: Fixes Codex turn startup failures on macOS reboot by handling stale app-server registrations and PID inspection errors.

#### 4. Community Hot Topics
The most discussed issues today reflect the project's current pain points:
*   **Issue #191944** (38 comments): A macOS-specific bug where `gateway stop` fails with "Process ancestry could not be fully inspected," blocking routine maintenance.
*   **Issue #182891** (22 comments): A "Prompt cache never reused" regression causing performance degradation across every request, linked to runtime context carrier changes.
*   **Issue #202441** (7 comments): A third-party WS channel issue regarding detaching transport authority from post-ACK turn work.
*   **PR #203319**: A fix for worker sessions looping on unusable wait tools, directly addressing multi-agent worker stability.

#### 5. Bugs & Stability
Stability remains the primary concern, with several critical regressions flagged:
*   **P0/Blockers**: Issue #169844 (Windows Gateway update hangs at "Activating") and Issue #166641 (web_fetch plugin capture stalls main thread) are rated as release blockers.
*   **Memory & Resource Leaks**: Issue #153899 reports Gateway drain timing out full `TimeoutStopSec` windows, while Issue #165663 highlights uncleaned spawned workers causing RSS bloat.
*   **Session State Corruption**: Issue #196199 describes a regression where Codex helpers fail to resume parents, locking users out. Issue #190307 notes gateway restarts leave agents permanently "degraded."
*   **Fix Status**: Several high-impact bugs (e.g., #141474, #158817) have been closed and shipped in recent releases, but the backlog of open stability issues is substantial.

#### 6. Feature Requests & Roadmap Signals
Feature activity is focused on modularity and plugin integration:
*   **Auth & Identity**: PR #203394 refactors provider sign-in to enforce a single owner for failures and recovery, alongside PR #192350 migrating GitHub repository integration into a plugin.
*   **Memory & Context**: Issue #151178 proposes letting Active Memory delegate escalation to plugin providers. PR #129388 implements a "context-pressure-aware continuation" system for self-elected turn continuation.
*   **UI/UX**: PR #203308 aims to make theme background artwork opt-in, reducing canvas clutter.

#### 7. User Feedback Summary
Users are reporting significant friction with gateway lifecycle commands on macOS (#191944) and Windows (#169844), alongside persistent memory bloat issues that necessitate frequent restarts. There is frequent frustration regarding the inability to remap default shortcuts (e.g., Ctrl+Shift+A in the Control UI, #163739) and a demand for better diagnostics when entitlements or OAuth configurations fail silently. The high volume of "needs-maintainer-review" tags suggests a bottleneck in code review capacity relative to the contribution velocity.

#### 8. Backlog Watch
Several important items require maintainer attention:
*   **Issue #182891**: The "Prompt cache never reused" bug has been open since October and impacts performance across all providers. It requires a maintainer review to diagnose the `cache read dropped N -> 0` behavior.
*   **Issue #166964**: Subagent completion delivery fails permanently upon authority revocation, leaving parent sessions hanging.
*   **PR #203292**: A fix for allowing agents on dedicated workers to start child sessions is waiting on maintainer review/merge.
*   **Issue #202441**: The third-party WS channel authority detachment feature needs security review before merging.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant Open-Source Ecosystem
**Snapshot Date:** 2026-11-22

## 1. Ecosystem Overview
The personal AI assistant and agent open-source ecosystem in late 2026 exhibits a bimodal distribution of activity. A core set of "infrastructure-heavy" projects—led by OpenClaw and NanoClaw—demonstrates intense development velocity, driven by rapid feature iteration, provider integration, and critical stability patching. These projects form the de facto reference implementation for agent orchestration, gateway management, and session handling. Complementing this core are specialized or younger projects like PicoClaw, NullClaw, and ZeroClaw, which focus on narrow niches (provider compatibility, specific protocol support) with lower velocity but high specialization. A third tier—Hermes Agent, LobsterAI, and CoPaw—balances feature richness with UI/UX polish and cross-platform compatibility. The overall landscape is characterized by a tension between breaking new ground in agent autonomy (OpenClaw/NanoClaw) and refining usability and compatibility (PicoClaw/NullClaw), with a steady undercurrent of user demand for better diagnostics, provider agnosticism, and cross-platform reliability.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 118 | 500 | 0 | ⭐⭐⭐⭐⭐ (Critical Backlog) |
| **NanoClaw** | 9 | 38 | 0 | ⭐⭐⭐⭐ (Stable Pace) |
| **Hermes Agent** | 18 | 50 | 0 | ⭐⭐⭐ (Active Development) |
| **CoPaw** | (Implied ~17) | 11 | 0 | ⭐⭐⭐ (Maturing) |
| **LobsterAI** | 1 | 10 | 0 | ⭐⭐⭐⭐ (Migration Focus) |
| **PicoClaw** | 2 | 5 | 0 | ⭐⭐⭐⭐ (Specialized) |
| **NullClaw** | 0 | 1 | 0 | ⭐⭐⭐⭐⭐ (Stable) |
| **ZeroClaw** | 1 | 50 | 0 | ⭐⭐⭐ (High Volume) |
| **IronClaw** | (Implied 1) | 0 | 0 | ⭐⭐⭐ (Minimal) |
| **Moltis** | 1 | 0 | 0 | ⭐⭐⭐ (Low Velocity) |
| **NanoBot** | 0 | 12 | 1 minor | ⭐⭐⭐⭐⭐ (Stabilizing) |

*\*Health Score is a qualitative assessment based on issue backlog severity, PR merge rate, and release frequency. "⭐⭐⭐⭐⭐" indicates low backlog and high merge velocity; "⭐" indicates critical stability concerns or high backlog pressure.*

## 3. OpenClaw's Position
OpenClaw dominates the ecosystem as the core reference point, processing 500 PRs and 118 issues in a single day. Its primary advantage over peers is **ecosystem breadth**: it encompasses the widest surface area of agent infrastructure, from WAL journal management and gateway lifecycle to provider sign-in and memory delegation. Technically, OpenClaw employs a sophisticated, distributed architecture focused on "gateway orchestration" and "stateful session management," making it the most complex but also the most capable framework for large-scale, multi-agent deployments. However, this complexity exacts a cost: the project faces a **critical backlog of 81 active issues**, primarily surrounding stability bugs, memory leaks, and platform-specific gateway failures (macOS/Windows). While its contribution pipeline is healthy (204 merges today), the ratio of issues to merges indicates a review bottleneck. Compared to peers, OpenClaw attracts the largest community but suffers the most from "feature debt" if maintainer capacity does not scale with contribution velocity.

## 4. Shared Technical Focus Areas
Across the ecosystem, several recurring technical needs emerge, projects affected, and specific requirements:

*   **Provider Agnosticism & Gateway Integration**: Nearly every project is actively expanding OpenAI-compatible provider support.
    *   *Projects*: OpenClaw (PR #203394, #192350), PicoClaw (#3471, #3464), IronClaw (#8174), ZeroClaw (#11845-#11847).
    *   *Need*: Users demand "one-key" access to diverse LLM providers (LLMTR, CloudGPU, OpenRouter, Cerebras) without manual endpoint configuration.
*   **Cross-Platform Stability (macOS/Windows)**: Gateway lifecycle and command execution failures are the most pervasive pain points.
    *   *Projects*: OpenClaw (#191944 macOS, #169844 Windows), Hermes Agent (#153005 bash parsing), LobsterAI (multi-agent DSH migration).
    *   *Need*: Robust handling of stale registrations, PID inspection, and OS-specific bash parsing to prevent hangs and RSS bloat.
*   **Context & Memory Management**: Issues around token limits, message history bloat, and compaction failures are ubiquitous.
    *   *Projects*: NanoClaw (#4530 connection drops, #4529 auth deadlock), CoPaw (#8848 compaction failure), OpenClaw (memory leaks/bloat).
    *   *Need*: Efficient polling for long-running agents (42k+ messages) and reliable authentication recovery when keys are revoked.
*   **UI/UX Polish & Localization**: Focus on keyboard navigation, theme consistency, and multilingual support.
    *   *Projects*: CoPaw (#8854 focusability, #8853 compaction), NanoBot (#6747 i18n slash commands), LobsterAI (hover pet rendering).
    *   *Need*: Reducing canvas clutter, fixing focus management on mobile/web, and ensuring language preferences apply globally.

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoClaw | Hermes Agent | CoPaw | PicoClaw/NullClaw/ZeroClaw |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | Full-suite orchestration, gateway stability, infrastructure. | Rapid iteration, provider expansions, agent tooling. | Cross-platform parity, Windows/Desktop, E2EE workflows. | Console UX, mobile stability, skill sync. | Narrow niche compatibility, protocol support, documentation. |
| **Target User** | Power users, system integrators, large-scale deployments. | Developers building custom agents, rapid prototypers. | Enterprise/ power users requiring cross-gateway consistency. | End-users seeking a polished chat UI/console experience. | Specialist users, gateway operators, specific protocol adopters. |
| **Architecture** | Distributed gateway orchestration, WAL/journal focus. | Modular provider pipeline, rapid PR cycle. | CLI-centric, Matrix/E2EE integration focus. | Web-centric console, focus on "skills" and UX. | Provider-adapter pattern, OpenAI-compatible focus. |
| **Maturity Stage** | Mature but strained by backlog; "critical mass" phase. | Actively iterating toward v2026.11.0; growth phase. | Stabilizing v0.23.x release cycle; feature-rich. | Active development; addressing production blockers. | Early adoption/specialization; low but focused velocity. |

## 6. Community Momentum & Maturity
The ecosystem splits into three distinct activity tiers:

*   **Rapidly Iterating (High Velocity, Low Maturity Stability)**: **OpenClaw** and **ZeroClaw** lead this tier. OpenClaw's 500 daily PRs indicate an extremely healthy contribution pipeline, but the critical backlog of 81 issues and "needs-maintainer-review" tags signal that community growth has outpaced maintainer capacity. **NanoClaw** is similarly active (38 PRs) but closer to a stable release (v2026.11.0), indicating a more managed growth pace.
*   **Stabilizing (Moderate Velocity, High Reliability)**: **NanoBot** and **NullClaw** exemplify this tier. NanoBot recently published v0.4.2, focusing on polishing existing features (SSH support, WeChat state) and stabilizing the codebase. NullClaw is nearly dormant but exhibits very high health scores, indicating a rock-solid, maintenance-phase project.
*   **Mature & Feature-Rich (Lower Velocity, High Polish)**: **Hermes Agent**, **CoPaw**, and **LobsterAI** operate here. Hermes Agent is actively merging features (Kling Image 4.0, workspace switchers) but wrestling with log noise and Matrix E2EE issues. CoPaw is balancing new skills (Office sync) with critical stability fixes (iOS WebKit freeze). **Moltis** and **PicoClaw** sit at the low-velocity end, focusing on specific integrations or provider compatibility with minimal day-to-day churn.

## 7. Trend Signals
Extracted from community feedback and PR activity, the following trends hold significant value for AI agent developers:

*   **The "Provider Commoditization" Shift**: The overwhelming focus across OpenClaw, PicoClaw, IronClaw, and ZeroClaw on adding "X as an OpenAI-compatible provider" signals a maturing market. Developers are no longer building custom integrations from scratch; they expect frameworks to natively support a catalog of major gateways. The "one-key" solution is becoming a baseline expectation.
*   **Stability as the Primary Bottleneck**: Despite the eagerness to add features (Kling Image 4.0, workspace switchers, new providers), the dominant noise in issue queues is stability. Memory bloat, gateway hangs on macOS/Windows, and authentication deadlocks are the primary friction points. For developers, this signals that **investing in robust lifecycle management and cross-platform QA yields higher ROI than greenfield feature development.**
*   **The Mobile/Web Gap**: CoPaw's iOS WebKit freeze and LobsterAI's multi-agent UI regressions highlight that the "personal AI assistant" experience is still primarily optimized for desktop/CLI. Mobile/web stability, particularly around layout thrashing and focus management, remains a significant unmet need and a key differentiator for projects that solve it.
*   **Authentication & Session Recovery**: The recurring theme of "stale sign-ins," "already connected" deadlocks, and "warn-once" log bloating indicates that session management and credential lifecycle are underserved areas. Frameworks that provide seamless auth replacement and clear diagnostics for entitlement/OAuth failures will see strong adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

Here is the NanoBot project digest for 2026-11-22.

### 1. Today's Overview
NanoBot shows a pattern of intense short-term development activity followed by stabilization periods. Today, the project processed 12 Pull Requests (8 open, 4 merged/closed) and published a new minor release (v0.4.2), but no new Issues were opened in the last 24 hours. The activity is heavily weighted toward bug fixes and polishing existing features (particularly WebUI and tooling) rather than greenfield development. This suggests the project is maturing, focusing on reliability and cross-platform compatibility ahead of a potential v0.5.0 release.

### 2. Releases
*   **v0.4.2 Released**: The latest minor version was published recently.
    *   **Key Changes**: A significant usability improvement allows users to connect over SSH to gateways that also advertise a public WebSocket URL. Crucially, this version now supports Windows hosts where Python 3 is available as `python` (previously Linux-only for this feature).
    *   **Migration Notes**: No breaking changes are noted in the changelog. Users on Linux may see improvements in the quick-pairing workflow, though gateway-native TLS and `trustedProxyAuth` remain unsupported.

### 3. Project Progress
Today’s merged activity focused on closing the loop for the v0.4.2 release cycle and polishing the WebUI experience.
*   **WebUI Polish**: PR #6743 was merged to fix focus management when reopening the model picker, preventing the UI from closing unexpectedly and interrupting the user's workflow.
*   **Release Automation**: PR #6745 merged a CI improvement to publish accepted releases to PyPI in a single click, streamlining the distribution process.
*   **Bug Fixes**: PR #6748 addressed a UI inconsistency where a failed WeChat login channel appeared "enabled" but had a disabled switch; the fix ensures the UI accurately reflects the connection status and that clicking the switch retries the connection as expected.

### 4. Community Hot Topics
The most discussed items today center on feature completion and localization.
*   **Feature Completion (PR #6747)**: This open PR aims to localize all 17 built-in slash command results across WebUI, TUI, and text channels. With zero comments currently, it represents a "quiet" but significant polish request—ensuring that a user's language preference applies globally, including model switch badges and saved replies.
*   **Documentation (PR #6746)**: Opened to update the README with a dynamic Latest Release link and preserve the release archive, reflecting the project's growing need for stable version tracking as releases become more frequent.

### 5. Bugs & Stability
Bug fixing was the dominant theme in the merged PRs today.
*   **WeChat Channel State (PR #6748)**: The most critical stability fix merged today. It resolved a state desynchronization bug where a failed WeChat login channel appeared visually "off" but functionally remained "on," leading to user confusion and failed connection retries.
*   **Tooling Issues**: Several older open bugs (created Oct 10) remain active, including `read_file` line numbering inconsistencies (#6140), SVG handling (#6135), and Matrix HTML formatting (#6138). These "AI batch PRs" indicate a backlog of low-level tooling stability that requires maintainer attention.

### 6. Feature Requests & Roadmap Signals
The open PR #6747 highlights a demand for deeper internationalization (i18n) integration. The request to localize slash command results suggests users want NanoBot to function as a truly multilingual assistant across all interfaces (Web, CLI, Text). This, combined with the OpenRouter image generation feature request (#5718) from September, signals a roadmap focused on expanding provider compatibility and UI accessibility.

### 7. User Feedback Summary
User feedback today reflects a mix of appreciation for new features and frustration with legacy tooling inconsistencies.
*   **Positive**: The Windows Python 3 SSH support in v0.4.2 is likely well-received by Windows users who previously struggled with the Linux-only quick-pairing command.
*   **Pain Points**: The persistent open bugs regarding `read_file` line counting and Matrix formatting suggest a segment of the user base relying on text-based editing and Matrix integration is experiencing friction. The WeChat login state bug (#6748) would have caused significant confusion for immediate users.

### 8. Backlog Watch
Several important items have langged in the open state for over a month and require maintainer triage:
*   **PR #6323**: Merged very recently (updated Nov 21) but was created Oct 20. It proposes "edit and resend messages in the same session," a highly requested webUI feature (related to NAN-92). Its recent update to "Ready for review" after 20 CI checks passing suggests it is close to release but has been in the pipeline for over a month.
*   **PR #6744**: The release preparation PR. While closed, it serves as the gateway for v0.4.2; any blockers here impact the entire user base's ability to update.
*   **Issue #5718**: Open since September, requesting OpenRouter native image generation support. Given its age and the "feature" label, this is a candidate for the next roadmap sprint if the maintainers wish to expand multimodal capabilities.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

### Hermes Agent Project Digest
**Date:** 2026-11-22

#### 1. Today's Overview
Hermes Agent maintains a healthy state of active development with 18 open issues and 50 open PRs updated in the last 24 hours. The project shows robust community engagement, merging one bug fix and accepting 50 new feature/bugfix contributions. Activity is concentrated in the CLI, gateway, and tool integration layers, with significant focus on Windows compatibility and Matrix/E2EE workflows. The volume of merges suggests a push toward stabilizing the v0.23.x release cycle ahead of year-end.

#### 2. Releases
No new releases were published today. The latest activity consists of PR merges targeting the development branch, with no tagged v0.23.x or subsequent versions released in this window.

#### 3. Project Progress
One PR was merged/closed in the last 24 hours: **#158211** — a fix for profile cloning that previously copied logins from the named source instead of the root profile. Beyond this, 49 new PRs were opened, spanning critical bug fixes (e.g., Windows bash command parsing in #153005, emoji handling in #155392), new features (Kling Image 4.0 support in #158796, project workspace switcher in #151754), and infrastructure improvements (Docker host path mapping in #154157, provider GLM-5.3 branch in #158481).

#### 4. Community Hot Topics
The most discussed issue is **#158795** (0 comments, 0 👍 but authored today), reporting that the "warn-once" dedupe mechanism is process-per-turn, flooding `errors.log` with ~9,899 benign WARNING lines on multi-profile macOS setups. On the PR side, **#158481** (0 comments) addresses a provider configuration edge case for GLM-5.3 models, while **#158796** (0 comments) adds Kling Image 4.0 as a selectable FAL model. The high PR count (50) with generally low comment counts indicates maintainers are rapidly merging contributions rather than debating them.

#### 5. Bugs & Stability
**Critical:** **#158795** — warn-once dedupe is per-process, causing `errors.log` to bloat with benign notices (79% of 9,899 lines), masking real failures. No fix PR yet.
**High:** **#29849** — `no_agent=True` cronjob scripts ignore `terminal.backend` settings (e.g., SSH), running locally on the scheduler host instead of the remote backend. Open since May 2026 with 15 comments.
**Medium:** **#148601** — Regression of model lock on named custom providers failing every session chat turn (5 comments). **#145473** — Matrix peer bots can approve each other's gated commands (2 comments). **#152515** — tool.progress events not reaching remote-client adapters (2 comments).
**Low:** Numerous Windows-specific tool bugs (#153005, #153007) and emoji serialization issues (#155392) are being actively fixed.

#### 6. Feature Requests & Roadmap Signals
Feature-driven PRs dominate the merge queue. Notable additions include:
*   **Project workspace switcher** (#151754) for Desktop, leveraging per-profile Projects stores.
*   **Kling Image 4.0** (#158796) integration for FAL text-to-image and 10-ref edits.
*   **Literal think-tag preservation** (#153105) for routes with out-of-band reasoning.
*   **File tool enhancements** (#157545) — log tails, folder listings, search trust, and Python cell integration.
These signals suggest the roadmap is shifting toward cross-platform parity (Windows, Desktop), improved model/provider compatibility, and richer local tooling rather than core agent architecture shifts.

#### 7. User Feedback Summary
Users report significant log noise from the dedupe system (**#158795**), making it difficult to identify actual failures. The `no_agent` + remote backend mismatch (**#29849**) remains a persistent friction point for cron/automation workflows. Windows users face command parsing breaks in bash execution (**#153005**). Meanwhile, the Matrix E2EE build aborting updates (**#132820**) and model lock regressions (**#148601**) erode confidence in multi-gateway deployments. The overall sentiment is one of an active, feature-rich project where stability and cross-platform reliability are the primary pain points.

#### 8. Backlog Watch
*   **#29849** (15 comments, created May 2026) — The `no_agent` + `terminal.backend` bug is the oldest high-impact issue still open. A fix PR has not yet emerged despite the May creation date.
*   **#132820** (8 comments, created Oct 2026) — The Matrix `matrix` extra forcing E2EE dependencies on every `hermes update` on Linux. A hot topic for Matrix-reliant users.
*   **#158795** (0 comments, created Nov 2026) — The log-bloat issue is newly reported and demands immediate maintainer attention to prevent release drift.
*   **#153255** (0 comments) — Re-prompt on tool calls left as text in reasoning/content for local models; open but low visibility.
*   **#154157** (0 comments) — Docker host path mapping fixes for gateway-in-container setups; merged today but warrants monitoring for regression.

*Data sourced from GitHub API snapshot at 2026-11-22. All links point to `github.com/nousresearch/hermes-agent`.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**Project Digest: PicoClaw (sipeed/picoclaw)**
**Generated on:** 2026-11-22

### 1. Today's Overview
PicoClaw shows moderate recent activity with 2 issues and 5 PRs updated in the last 24 hours. The project is currently in a steady state of provider integration, with two new OpenAI-compatible gateway providers (LLMTR and CloudGPU) being actively developed and merged. While no new releases were published today, the influx of provider-related PRs suggests the core architecture is stable enough to support external gateway integrations. The community appears focused on expanding compatibility rather than fixing critical bugs, indicating a healthy, evolving codebase.

### 2. Releases
No new releases were published today. The project maintains its current release cycle, with development proceeding via Pull Requests to the main branch.

### 3. Project Progress
Five PRs were updated in the last 24 hours, representing significant progress in provider ecosystem expansion:
*   **#3471 (OPEN):** Merged or in review to add `llmtr` as a named OpenAI-compatible provider. This adds a `llmtr` entry to the model catalog with a default API base of `https://llmtr.com/v1`, allowing users to access LLMTR's catalog of models via a single API key.
*   **#3464 (CLOSED):** Successfully merged to add `cloudgpu` as a built-in OpenAI-compatible provider. This allows users to utilize CloudGPU's services using only an API key, simplifying integration for users of that service.
*   **#3431 (CLOSED):** Merged to add the `standardcompute` OpenAI-compatible provider, expanding support for another major gateway service.
*   **#2379 (CLOSED):** Merged the Telegram Codex Orchestrator feature, integrating Telegram-based control capabilities.
*   **#1559 (CLOSED):** A meta-PR merging several previous fixes (#1327, #1319, #1318, #1313) into the codebase.

### 4. Community Hot Topics
The most significant community discussion centers on **OpenAI-compatible provider integration**.
*   **Issue #3470** (2 comments): Users are requesting a native `llmtr` provider in the model catalog. The underlying need is the convenience of a "one-key" solution to access models hosted on the LLMTR gateway, avoiding the complexity of manually configuring custom OpenAI-compatible endpoints.
*   **PR #3471** (0 comments): The implementation of the `llmtr` provider requested in the issue above.
*   **PR #3464** (0 comments): The successful integration of the CloudGPU provider, demonstrating the project's trajectory toward supporting diverse commercial AI gateways.

### 5. Bugs & Stability
No critical bugs or crashes were reported in the 24-hour window. The closed issues and PRs focus entirely on feature additions and provider expansions. The closed issue #3462 regarding "registry archive is not a valid skill" errors (created Nov 6, updated Nov 21) appears to have been addressed or is being managed through the merge of other stability-focused PRs, though no direct fix for that specific frontmatter conflict is evident in the recent activity.

### 6. Feature Requests & Roadmap Signals
The roadmap is clearly defined by the recent merge activity. The pattern of adding "X as an OpenAI-compatible provider" (Standard Compute, CloudGPU, LLMTR) suggests a roadmap focused on **universal gateway compatibility**. Users can predict that future PRs will likely continue this trend, potentially targeting other major AI infrastructure providers or specialized hardware gateways to make PicoClaw a truly agnostic orchestrator.

### 7. User Feedback Summary
User feedback, as evidenced by the open issues, revolves around **provider accessibility and skill management**.
*   **Pain Point:** Users want to easily integrate non-standard AI gateways (like LLMTR) without manual endpoint configuration.
*   **Satisfaction:** The merge of `cloudgpu` and `standardcompute` providers likely provides immediate satisfaction to users of those specific services, validating the project's "provider-first" approach.
*   **Dissatisfaction/Frustration:** The stalled state of Issue #3470 (feature request) before the corresponding PR #3471 was merged may have caused frustration for users wanting LLMTR support, though the quick PR response (created and updated on the same day) suggests active maintenance.

### 8. Backlog Watch
**#3462 [CLOSED]** - This issue is now closed, resolving the "registry archive is not a valid skill" error that occurred when skills shared frontmatter names. This was a notable stability bug regarding the skill installation system.

**#3470 [OPEN]** - While the PR #3471 implements the feature, the Issue remains open with the `[stale]` label. Maintainers should ensure the issue is cleaned up or closed once the PR is fully merged and validated to prevent the backlog from growing with duplicate or resolved feature requests.

**#2379 [CLOSED]** - The Telegram Codex Orchestrator integration is now merged, closing a long-standing feature request from April 2026.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Generated on:** 2026-11-22
**Source:** [nanocoai/nanoclaw (GitHub)](https://github.com/qwibitai/nanoclaw)

## 1. Today's Overview
NanoClaw maintains a brisk development pace with 9 issues and 38 PRs updated in the last 24 hours. The project continues its rapid iteration cycle ahead of the v2026.11.0 release, with 18 PRs merged/closed and 20 still open. Activity is heavily concentrated on bug fixes, provider integrations, and infrastructure maintenance, indicating a stable but feature-active development phase.

## 2. Releases
No new releases were published today. The latest stable version remains **v2026.11.0**. Development activity is focused on stabilizing this release through targeted bug fixes and provider updates rather than introducing a new major version.

## 3. Project Progress
Eighteen PRs were merged or closed today, representing significant progress across multiple domains:
- **Provider integrations**: Added `/add-pi` payload skill and `/add-antigravity` provider skill for Google's Antigravity CLI
- **Mailbox & core fixes**: PR #4535 and #4534 address message polling efficiency and stale reply retirement
- **Setup & installation**: PR #4533 ensures WhatsApp credentials are verified before link confirmation
- **Codex improvements**: PR #4531 enables stale OpenAI sign-in replacement during setup
- **Container maintenance**: PR #4524 bumps Claude Code to 2.1.330 and Agent SDK to 0.3.330

## 4. Community Hot Topics
The most discussed items today reflect the project's current priorities:

| Item | Type | Comments/Reactions | Analysis |
|------|------|-------------------|----------|
| [#4535](https://github.com/nanocoai/nanoclaw/pull/4535) | fix(mailbox) | 0 | Critical infrastructure fix for long-running agents with 42,000+ message histories. |
| [#4442](https://github.com/nanocoai/nanoclaw/pull/4442) | feat(skills) | 0 | New `/add-antigravity` provider skill enabling Google Antigravity CLI integration. |
| [#4531](https://github.com/nanocoai/nanoclaw/pull/4531) | fix(codex) | 0 | Allows Codex setup to replace stale OpenAI sign-ins, resolving "already connected" deadlock. |
| [#4129](https://github.com/nanocoai/nanoclaw/pull/4129) | feat(providers) | 0 | Adds `/add-pi` payload skill for Pi agent provider integration. |
| [#4534](https://github.com/nanocoai/nanoclaw/pull/4534) | fix(mailbox) | 0 | Prevents timed-out ncl replies from consuming message slots in subsequent batches. |

## 5. Bugs & Stability
Nine issues were updated, with 6 remaining open and 3 closed. Severity ranges from critical agent functionality to quality-of-life improvements:

| Issue | Title | Status | Severity |
|-------|-------|--------|----------|
| [#4530](https://github.com/nanocoai/nanoclaw/issues/4530) | Codex connection drop fails reply despite retries | Open | **High** - Interrupts turn completion during network instability |
| [#4529](https://github.com/nanocoai/nanoclaw/issues/4529) | Codex sign-in says "already connected" | Open | **High** - Prevents auth replacement when keys are revoked |
| [#4528](https://github.com/nanocoai/nanoclaw/issues/4528) | Sub-agent finishing ends main agent turn early | Open | **Medium** - Concurrency/turn management issue |
| [#4525](https://github.com/nanocoai/nanoclaw/issues/4525) | /update-nanoclaw fails on detached HEAD | Open | **Medium** - Tooling workflow disruption |
| [#4523](https://github.com/nanocoai/nanoclaw/issues/4523) | Agent runs outdated Claude Code 2.1.321 | Open | **Medium** - Misses latest fixes/resume/compaction features |
| [#4521](https://github.com/nanocoai/nanoclaw/issues/4521) | Restamp reads agent-writable files after type check | Open | **Low-Medium** - Potential safety concern in group workflows |
| [#4519](https://github.com/nanocoai/nanoclaw/issues/4519) | Claude token parser returns too-long token | Closed | **Medium** - Terminal escape code handling bug |
| [#4517](https://github.com/nanocoai/nanoclaw/issues/4517) | Telegram voice notes arrive as plain audio | Closed | **Low** - Feature parity issue for voice messaging |
| [#4513](https://github.com/nanocoai/nanoclaw/issues/4513) | verify-agent-image fails on unreadable image pins | Closed | **Low** - CI pipeline reliability issue |

Two fix PRs directly address critical bugs: #4531 (stale sign-in) and #4535 (message polling efficiency).

## 6. Feature Requests & Roadmap Signals
Several new provider skills and integration patterns are actively being developed:
- **Pi agent provider** (#4129): New `/add-pi` skill for Pi agent integration
- **Antigravity provider** (#4442): Google's Antigravity CLI support with per-group provider switching
- **Llmman local-model support** (#4210): Adds llmman as a local-model option alongside existing providers
- **Codex turn lifecycle fixes** (#4165, #4166): Sub-agent event isolation and retry handling

The convergence of these PRs suggests NanoClaw is expanding beyond Anthropic-native workflows to support diverse AI provider ecosystems.

## 7. User Feedback Summary
Primary pain points evident in today's data:
- **Authentication persistence**: Codex sign-in deadlock when stored credentials become invalid
- **Long-running agent stability**: Message history bloat (42,000+ messages) impacting polling performance
- **Network resilience**: Connection drops causing premature turn termination despite retry capabilities
- **Tooling edge cases**: Update commands failing on non-standard git states (detached HEAD)
- **Provider diversification**: Requests for non-Anthropic integrations (Pi, Antigravity, llmman)

Users appear satisfied with the rapid bug fix cycle but express need for more robust authentication recovery and cross-provider compatibility.

## 8. Backlog Watch
Items requiring maintainer attention:

| Item | Last Updated | Priority |
|------|-------------|----------|
| [#4530](https://github.com/nanocoai/nanoclaw/issues/4530) | 2026-11-21 | **High** - Codex retry handling during connection drops; no comments yet |
| [#4529](https://github.com/nanocoai/nanoclaw/issues/4529) | 2026-11-21 | **High** - "already connected" sign-in blocker; no comments yet |
| [#4528](https://github.com/nanocoai/nanoclaw/issues/4528) | 2026-11-21 | **Medium** - Sub-agent turn interruption; no comments yet |
| [#4129](https://github.com/nanocoai/nanoclaw/pull/4129) | 2026-11-22 | **Medium** - Pi agent provider feature; open 33 days with no merger activity |
| [#4442](https://github.com/nanocoai/nanoclaw/pull/4442) | 2026-11-22 | **Medium** - Antigravity provider skill; open 5 days |

The four items marked "High"/"Medium" with no recent comment activity may need maintainer triage to unblock contributors. Notably, the Pi agent provider (#4129) has been open for over a month without merger attention, which could indicate a review bottleneck or integration complexity.

---
*Data snapshot taken from GitHub API at time of generation. Project health indicators based on issue/PR velocity, merge rates, and community engagement patterns.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

### **NullClaw Project Digest**
**Date:** 2026-11-22

#### **1. Today's Overview**
The NullClaw project experienced minimal activity over the last 24 hours, reflecting a stable but quiet development phase. The most significant update was the merging of PR #1052, which added an optional Parallel Search MCP example. With zero issues updated and no new releases, the project remains in a state of maintenance rather than active feature expansion. The core team appears to be focusing on consolidating existing functionality and refining documentation, as evidenced by the merge of the documentation-focused PR. Overall, project health is strong, with no critical bugs or security incidents reported in the recent window.

*GitHub Link: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*

#### **2. Releases**
No new releases were published today. The project has not tagged a new version since the last digest period. Users are advised to stay on the current stable branch or the most recent merged commit for the latest features and bug fixes.

#### **3. Project Progress**
The primary advancement today was the merge of **PR #1052** titled "[CLOSED] docs: add optional Parallel Search MCP example." This closed pull request introduces an opt-in example demonstrating how to integrate NullClaw's native HTTP transport with the Model Context Protocol (MCP) for parallel web searching. The change is purely additive and does not alter core logic; it provides a ready-to-use configuration snippet for users looking to implement parallel search capabilities without needing a separate Parallel API key or local bridge. This advancement simplifies the onboarding process for advanced search workflows.

*GitHub Link: [PR #1052](https://github.com/nullclaw/nullclaw/pull/1052)*

#### **4. Community Hot Topics**
The community's current focus is centered around the newly merged documentation example. While PR #1052 is the only active thread from the last 24 hours, it highlights a growing interest in MCP integration and parallel search utilities. The lack of open issues suggests the community is currently evaluating the new example or working with the existing stable build. There are no contentious debates or highly commented issues requiring immediate maintainer intervention at this time.

#### **5. Bugs & Stability**
There are zero bugs, crashes, or regressions reported in the last 24 hours. The project's stability is currently high, with no open issues flagging critical failures. Since PR #1052 was a documentation merge and not a code change affecting runtime behavior, there are no associated bug fixes to report. The codebase appears robust for the current user base.

#### **6. Feature Requests & Roadmap Signals**
Feature requests are not visible in the recent activity log, as no new issues were opened today. However, the merge of the Parallel Search MCP example signals a roadmap direction toward enhanced interoperability with external AI protocol standards. Based on this merge, users can predict that future updates may focus on expanding the "MCP" ecosystem support, potentially adding more protocol examples or optimizing the HTTP transport for other agentic workflows. The "opt-in" nature of the feature suggests a modular roadmap approach, allowing users to enable advanced features as needed.

#### **7. User Feedback Summary**
User feedback for the period is characterized by stability and a focus on extensibility. The merging of the Parallel Search MCP example indicates that users are seeking easier ways to integrate NullClaw with external search tools and MCP-compatible interfaces. There are no reported dissatisfaction points regarding core functionality. The "Anonymous access has rate limits" note in the PR summary suggests that power users are exploring the boundaries of the free-tier capabilities, which is a healthy sign of active adoption.

#### **8. Backlog Watch**
The project backlog is currently clear of urgent, unanswered items. With zero open issues and zero new issues created in the last 24 hours, there are no long-unanswered important Issues or PRs requiring immediate maintainer attention at this moment. The most notable item to watch is PR #1052 itself, which has been successfully merged and closed, indicating an efficient merge pipeline. Maintainers appear to be keeping the repository lean and responsive.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

**IronClaw Project Digest**
*Report Generated: 2026-11-22 | Source: GitHub Data*

### 1. Today's Overview
IronClaw maintains a minimal but active development cadence. In the last 24 hours, the project recorded a single issue update, indicating low-frequency but focused contributor engagement. The repository remains in a stable state with no pull requests merged or closed and no new releases published. The solitary activity centers on the expansion of LLM provider compatibility, aligning with the project's core identity as an AI agent framework.

### 2. Releases
No new releases were published today. The project has no tagged versions available in the latest data feed. Users are advised to track the default branch for the latest stable builds, as the project follows a rolling or development-focused release model rather than discrete versioned tags.

### 3. Project Progress
Progress today was limited to issue triage and maintenance. No pull requests were merged or closed, meaning the codebase did not receive new contributions or bug fixes within the 24-hour window. The project's momentum is currently driven by feature requests and community-driven enhancements rather than defect resolution.

### 4. Community Hot Topics
The community's primary focus is currently Issue #8174, which has garnered attention for proposing the addition of LLMTR as a built-in OpenAI-compatible LLM provider. With one comment and zero likes, the discussion is in its early stages. The request highlights a demand for broader compatibility with OpenAI-compatible gateways, suggesting users seek flexibility in model routing and provider choice beyond the existing catalog of Groq, Together, Cerebras, and MiniMax.

*   **Issue #8174**: [feat: add LLMTR as a built-in OpenAI-compatible LLM provider](https://github.com/nearai/ironclaw/issues/8174)

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported or updated in the last 24 hours. The issue queue remains quiet on stability fronts, indicating that the current build is functioning as expected or that users have not encountered critical failures requiring immediate attention.

### 6. Feature Requests & Roadmap Signals
The dominant signal from the community is the integration of additional LLM providers. Issue #8174 serves as the primary roadmap indicator for the immediate future. If implemented, this feature would expand the framework's utility for developers looking to aggregate or switch between various OpenAI-compatible services via a unified IronClaw interface. This suggests a roadmap direction focused on **provider agnosticism** and **gateway integration**.

### 7. User Feedback Summary
User feedback, as reflected in the single active issue, centers on **provider expansion**. The request for LLMTR integration indicates a user base that values open standards and wishes to avoid vendor lock-in. The pain point appears to be the manual configuration required to add new providers, desiring a "first-class" entry in the catalog to streamline the setup process for OpenAI-compatible models.

### 8. Backlog Watch
While no long-unanswered issues are critically stalled (given the low velocity), Issue #8174, created on 2026-11-21, requires maintainer attention to determine its feasibility and priority. Additionally, the project's overall issue backlog appears dormant, with no other items showing recent activity. Maintainers should monitor the provider catalog assets (`crates/domains/ironclaw_llm/assets/providers.json`) to ensure future additions follow the established format.

---
*Data sourced from GitHub API snapshot dated 2026-11-22. Project: nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest
**Generated on:** 2026-11-22
**Source:** netease-youdao/LobsterAI

---

## 1. Today's Overview
The LobsterAI project exhibited a flurry of activity on 2026-11-22, with 10 PRs merged and 1 issue updated. The day's work centered on stabilizing the recent OpenClaw-to-DSH runtime migration, with several PRs restoring compatibility and fixing desktop integration bugs. A single issue was updated, addressing a persistent UI bug in the Dreams diary panel under multi-agent configurations. Overall, the project health appears strong, with maintainers actively closing the gap on migration-related technical debt and polishing cross-agent features.

## 2. Releases
No new releases were published today. The latest release cycle appears to be `release/2026.11.17`, which served as the target for several cherry-picked fixes. No breaking changes were introduced in today's merge batch.

## 3. Project Progress
Ten PRs were merged and closed today, representing significant progress in three areas:
*   **Desktop Companion Stability:** PR #3140 and #3138 fixed orb docking behavior across multiple displays and Windows DPI scaling, and aligned hover pet atlas rendering. These updates ensure the "orb" companion remains visually consistent and properly positioned regardless of monitor setup.
*   **DeepSeek Harness (DSH) Runtime Compatibility:** PR #3144 was critical, restoring three missing Plan model compatibility capabilities (protocol dispatch, Anthropic proxy path, and kimi-k3 compatibility) that were lost during the OpenClaw to DSH migration. PR #3137 added cross-agent collaboration and specialist delegation features, allowing agents to delegate tasks using their workspace persona and long-term memory. PR #3136 completed the desktop runtime integration, handling scheduled tasks and local skill installation.
*   **Renderer & Office Fixes:** PR #3143 fixed an XML namespace bug in xlsx exports, while #3139 ensured turn artifacts render correctly above reply metadata.

## 4. Community Hot Topics
The most significant community activity today was the update to Issue #2779, which remained the sole item in the "Latest Issues" list. With 2 comments and 0 upvotes, it highlights a specific but painful UI regression. The issue reports that under multi-agent configurations (`agents.entries` with 5 agents, `ownership = "explicit"`), the "Dream" → "Diary" panel remains permanently empty, stating "No diary entries," despite the workspace `DREAMS.md` file actively updating (7.7KB). The root cause is traced to the internal runtime `OpenClaw 2026.8.1` lacking `doctor.memory.*` ambient-owner fallbacks. This indicates a pain point for power users leveraging the multi-agent system, where core features like the diary become unusable.

## 5. Bugs & Stability
**Critical Bug:** Issue #2779 ([Bug] 多分身配置下「梦境日记」面板恒为空). Severity: **High** for affected users. The Diary panel is stuck empty in multi-agent setups. A fix exists in the upstream repository, but it has not yet been merged/followed into LobsterAI. Users on runtime `OpenClaw 2026.8.1` are impacted.
**Other Stability:** No new crash reports or regressions were reported in the PR merge batch today; the merged PRs primarily focused on compatibility and UI polish rather than fixing new bugs.

## 6. Feature Requests & Roadmap Signals
While no new feature PRs were merged today beyond the collaboration delegation in #3137, the merged PRs signal the roadmap direction:
*   **Cross-Agent Orchestration:** The merging of #3137 suggests a focus on making specialized agents discoverable and delegateable, moving beyond isolated workflows.
*   **Desktop Integration Polish:** #3136 and #3140 indicate a push to make the desktop companion a reliable, persistent hub for scheduled tasks and media tools, rather than a floating gimmick.
*   **Model Compatibility:** The restoration of model protocols in #3144 suggests ongoing effort to ensure LobsterAI works seamlessly with a broad range of LLMs (Claude, Kimi), not just the default options.

## 7. User Feedback Summary
User feedback today revolves around two poles: **Power usability** and **Visual fidelity**.
*   **Power Users:** Are frustrated by the broken Diary feature in multi-agent setups (#2779). There is an expectation that core "Dream" features should function regardless of agent configuration complexity.
*   **General Users:** Are benefiting from the stability improvements. The fixes to docking and hover animations (#3140, #3138) likely improve the daily experience for the broader user base, reducing friction when using the desktop companion across different hardware configurations.

## 8. Backlog Watch
**#2779** – This issue requires immediate maintainer attention. Although the upstream fix is marked as "already fixed," the lack of a follow-up PR or cherry-pick into the main LobsterAI branch leaves users on the `2026.9.23` version (and earlier) with a broken Diary feature. This is a blocker for the "multi-agent" use case and should be prioritized for the next stable release.

**#3137** – While merged, the "cross-agent collaboration" feature is complex. Watchers should monitor subsequent PRs or issues linking to this design doc to ensure the delegation workflow is fully fleshed out and documented, as the initial merge may leave gaps in the UI/UX for end-users.

---
*Data snapshot taken from GitHub API on 2026-11-22. All links point to `github.com/netease-youdao/LobsterAI`.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

**Moltis Project Digest**
**Date:** 2026-11-22
**Repository:** [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

### 1. Today's Overview
The Moltis project recorded minimal activity over the past 24 hours, with only a single issue update and no new pull requests or releases. The project currently sits at one open issue, indicating a period of low development velocity. While the core functionality appears stable, the lack of recent merges suggests the maintainer team may be in a pause phase or focusing on external contributions. The open issue regarding Lark/Feishu integration remains the primary focal point of current community interest.

### 2. Releases
No new releases were published today. The project has no tagged releases in the recent window, maintaining its status as a developing open-source initiative without formal versioned milestones.

### 3. Project Progress
No merged or closed pull requests were recorded in the last 24 hours. The project's development activity is currently driven primarily by issue tracking rather than code contributions. The single open issue (#383) represents the primary vector for project advancement at this time.

### 4. Community Hot Topics
The most active discussion centers on **Issue #383**: "[enhancement] [Feature]: Support Lark/Feishu" (created 2026-03-10, updated 2026-11-21, 2 comments, 👍: 7). This issue has garnered significant community support with 7 likes and has been actively discussed over approximately 8 months. The underlying need appears to be integration with Lark (Lark Suite/Feishu), a popular workplace collaboration platform in Asian markets. With 2 comments already, the issue suggests ongoing technical evaluation of API compatibility and integration architecture. The longevity of this issue (8+ months) indicates it represents a non-trivial feature request requiring significant architectural consideration.

🔗 [Issue #383 Discussion](https://github.com/moltis-org/moltis/issues/383)

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The project's stability appears intact during this quiet period, with no critical issues requiring immediate attention. The single open issue is classified as an enhancement/feature request rather than a bug report, suggesting the core functionality is currently working as intended.

### 6. Feature Requests & Roadmap Signals
The Lark/Feishu integration request (#383) represents the primary feature signal for the project's roadmap. Given the issue's maturity and community engagement (7 likes), this integration is likely a high-priority user need. Other potential roadmap signals are currently dormant due to the lack of new issue activity. The project's feature pipeline appears limited to this integration request at present.

### 7. User Feedback Summary
The sole active issue (#383) reflects user demand for expanded platform compatibility, specifically targeting Lark/Feishu users. This suggests the current user base may be seeking broader enterprise communication tool integration. The 7 likes on the issue indicate moderate to strong community interest in this functionality. No negative feedback or dissatisfaction was reported today, implying existing users are satisfied with current capabilities during this quiet period.

### 8. Backlog Watch
**Long-term item requiring attention:** Issue #383 has been open for approximately 8 months without resolution. While it has community support (7 likes), the extended timeline suggests technical complexity or prioritization challenges. Additionally, the absence of any pull requests in the last 24 hours, combined with the issue's longevity, may indicate maintainers need to evaluate integration feasibility or provide clearer roadmap communication. The project's backlog currently contains only this single important enhancement request, which may benefit from maintainer triage and estimation to guide community expectations.

🔗 [Issue #383 Full Thread](https://github.com/moltis-org/moltis/issues/383)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

**CoPaw (agentscope-ai/QwenPaw) Project Digest**
**Date:** 2026-11-22

### 1. Today's Overview
CoPaw continues its active development cycle, processing a robust volume of 17 items in the last 24 hours. The project exhibits a healthy merge rate with 11 PRs updated, though zero were merged; activity is dominated by bug fixes and feature implementations. A critical production-blocking issue was identified on iOS WebKit, while the team simultaneously pushed forward with console runtime improvements and community linkage features. The overall health indicator remains positive, with consistent contributions across frontend, backend, and documentation layers.

### 2. Releases
No new releases were published today. The latest available version remains `2.3.0.post1`. Given the absence of new releases and the presence of several stability issues in the current console build (notably iOS freezes), the next stable release will likely focus on addressing the WebKit layout thrashing and focusability bugs currently under PR review.

### 3. Project Progress
Eleven PRs were updated today, reflecting significant momentum in polishing the user experience. Key advancements include:
*   **Console Focusability:** PR #8854 successfully made the conversation history keyboard-focusable, directly resolving Issue #8844.
*   **Context Recovery:** PR #8853 added suggestions to retry failed context compaction, addressing user data loss concerns from Issue #8848.
*   **Runtime Flexibility:** PR #8719 introduced `QWENPAW_BASE_PATH` support, enabling deployment behind reverse proxies.
*   **Skill Sync:** PR #8479 synced bundled Office skills (DOCX, PPTX, XLSX) with the Anthropic July 2026 update.
*   **Typos & Links:** Several micro-improvements landed, including typo fixes in the LICENSE and corrections to AWS documentation links.

### 4. Community Hot Topics
The most discussed issues center on **console usability** and **feature gaps**:
*   **Issue #8852 (Freezing):** Currently the most critical bug, causing UI freeze on iOS Safari/WebKit during long conversations due to layout thrashing. (2 comments)
*   **Issue #8844 (Keyboard Navigation):** A persistent usability blocker where the conversation list is not keyboard-focusable, rendering arrow/PageUp navigation useless without a mouse. (2 comments)
*   **Issue #8848 (Compact Failure):** Users are frustrated by the suggestion to use `/clear` when context compaction fails, fearing data loss. (2 comments)
*   **PR #8854 & #8853:** These are the most directly actionable PRs, fixing the exact pain points raised in #8844 and #8848, respectively.

### 5. Bugs & Stability
**High Severity:**
*   **#8852 (iOS WebKit Freeze):** The console freezes on iOS WebKit in long conversations. This is a regression affecting a major platform and requires immediate attention. *Fix PR: #8854 (partially addresses focus, but layout thrashing may need further optimization).*
*   **#8844 (Keyboard Focus):** The message list is not focusable, breaking keyboard navigation entirely for power users. *Fix PR: #8854.*
*   **#8851 (Import Map Remap):** Causes plugin routes to fail to register, breaking plugin functionality. *Fix: None identified yet, but identified as a blocker for plugin users.*

**Medium Severity:**
*   **#8848 (Compact Failure Message):** The error message suggesting `/clear` is misleading and risks user data loss. A fix PR (#8853) offers a "retry" alternative.

### 6. Feature Requests & Roadmap Signals
User requests are shifting toward **integration and recovery**:
*   **#6475 (notice_after_complete):** A long-standing request (created July 2026) for a mechanism allowing agents to notify users after long-running tasks complete, allowing the user to interact with other things in the meantime. While no PR exists yet, the recent activity on compaction recovery (#8853) suggests the team is thinking about session management and state handling.
*   **#7583 (Community Linkage):** Request for QwenPaw integration with the AgentScope community (logins, feedback). This reflects a desire for a broader ecosystem play rather than a purely local tool.
*   **Predicted Next Version Focus:** Based on the merged PRs, the next release will likely feature improved console keyboard navigation and robust context compaction recovery tools.

### 7. User Feedback Summary
User sentiment is currently mixed between **high satisfaction with new skills** (Office suite sync) and **significant frustration with console stability on mobile**.
*   **Pain Points:** iOS users experience complete UI freeze; desktop users lose conversation history during compaction failures due to confusing error messages; plugin users face import map registration failures.
*   **Use Cases:** The community is actively using the Office skills and exploring console customization via the new base-path feature.
*   **Dissatisfaction:** The `/clear` suggestion in compaction failures is the most cited "anti-feature," and the iOS freeze is a dealbreaker for mobile users.

### 8. Backlog Watch
*   **#8852 & #8844:** These open bugs, created on 2026-11-22, require immediate maintainer triage. #8852 is a platform-specific crash; #8844 breaks the core UI/UX.
*   **#8851:** The import map bug needs a quick patch to restore plugin functionality.
*   **#6475:** This enhancement, open since July, has not seen a code contribution. It represents a "nice-to-have" for multi-tasking agents but is lower priority than the current stability blocker.
*   **#7583:** The community linkage feature is open with comments but no clear implementation path yet.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the project digest for ZeroClaw for the date 2026-11-22.

### **1. Today's Overview**
ZeroClaw shows moderate activity for 2026-11-22, with 50 pull requests updated in the last 24 hours and a single bug report filed. The project remains in a state of active development, characterized by a high volume of merged/closed PRs (5) and a focus on infrastructure and platform stability. A notable regression involves the agent card spend display, while the PR queue is dominated by core utility fixes and gateway enhancements. Overall, the project health appears stable, with maintainers actively managing a diverse set of contributions across web, core, and channel integrations.

### **2. Releases**
No new releases were published today. The latest release history is currently unavailable, indicating the project is likely in active pre-release or development phases between major version bumps.

### **3. Project Progress**
Significant progress was made in the web and core domains today. Key merged/closed PRs include:
*   **PR #12510:** Fixed a Windows-specific test failure regarding reply-end write deadlines in the gateway.
*   **PR #12519:** Documented bounded channel progress localization.
*   **PR #12563:** Recorded a bounded managed HTTP credential write guard in the runtime documentation.
*   **PR #12644:** Addressed clippy lint failures introduced by the Rust 1.99 toolchain bump, ensuring CI compatibility.
*   **PR #12318:** Restored local field form drafts after a "Discard all" action in the web interface.

### **4. Community Hot Topics**
The most discussed items today reflect a mix of user experience polish and technical debt resolution:
*   **PR #11414 (Most Active/High Impact):** An enhancement to add "opt-in focused workspaces," allowing operators to choose between a classic dashboard layout and a focused home/agent layout. This highlights a demand for flexible UX/UI configurations.
*   **PR #12638 (Bug Report):** An open issue regarding agent cards displaying "<$0.01" for agents with $0.00 spend. This is the most commented/reactioned item of the day, indicating a visible UI polish bug affecting user trust in spend tracking.
*   **PR #12634 & #12635:** Two consecutive open PRs by JordanTheJet addressing voice settings and auto-send cancellation, indicating a focus on refining the voice interaction model.

### **5. Bugs & Stability**
The primary stability concern today is **Issue #12638**. This bug causes agents utilizing free local models to display "<$0.01 this month" instead of "$0.00" on their cards. While marked as S3 (minor), it represents a cosmetic regression in the billing/spend display feature. Currently, no fix PR exists, though the recent activity suggests the team is aware of related UI state issues (e.g., PR #12634 regarding voice auto-send cancellation).

### **6. Feature Requests & Roadmap Signals**
Analysis of recent PRs suggests several roadmap directions:
*   **Gateway & Provider Integration:** PRs #11845 and #11846 focus on exposing OpenRouter credit balances and controlling balance reporting in web settings, signaling a push towards better multi-provider financial transparency.
*   **Channel Expansion:** PR #11847 adds native Rust XMPP support with optional OMEMO, indicating an expansion of communication protocol support beyond existing channels.
*   **Session Management:** PR #10407 adds persistent session prompt attachments, a long-requested feature for maintaining context across restarts.

### **7. User Feedback Summary**
User feedback, inferred from the PR and issue activity, centers on two pain points:
1.  **Spend Transparency:** The "<$0.01" bug (#12638) frustrates users who run agents on free infrastructure, as it misrepresents costs.
2.  **Workflow Interruptions:** The activity around voice settings (#12634, #12635) and draft restoration (#12318) suggests users are sensitive to state loss and unexpected automated actions (like auto-send) during interactive sessions.

### **8. Backlog Watch**
Several items require maintainer attention to unblock contributors:
*   **PR #12642 & #12643:** Both created today (2026-11-22) by `tidux` and `joalvaradon` respectively. #12642 fixes a critical runtime issue where config writes are refused during mid-turn sessions to prevent race conditions. #12643 fixes a log rolling crash. These are high-priority stability fixes that likely need immediate review.
*   **Issue #12638:** The open bug regarding agent spend display has been open for less than 24 hours but has already accumulated attention due to its visibility on the dashboard.
*   **PR #11414:** The "focused workspaces" enhancement is large (XL size) and has been open since October, requiring maintainer prioritization to decide on merging the default layout change.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*