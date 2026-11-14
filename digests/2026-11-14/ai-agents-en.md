# OpenClaw Ecosystem Digest 2026-11-14

> Issues: 133 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-14 05:57 UTC

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
**Date:** 2026-11-14

## 1. Today's Overview
OpenClaw shows high operational velocity with 500 PRs and 133 issues updated in the last 24 hours, indicating an active development cycle. The merge rate remains healthy at 236 PRs closed, while 264 remain open for triage. Despite the volume, no new releases were published today, suggesting the team is focused on stabilizing the 2026.10.10 codebase rather than cutting new versions. The project health appears robust, with maintainers actively processing a large backlog of bug fixes and feature implementations across all subsystems.

## 2. Releases
**No new releases published today.** The most recent release remains v2026.10.10 (published 2026-11-03). No breaking changes or migration notes are associated with today's activity. Users on the latest release should continue without interruption, though several critical bugs affecting the 2026.10.10 version are currently open and under active review.

## 3. Project Progress
**500 PRs updated today**, with 236 merged/closed and 264 newly opened. Notable merges include:
- **#198694**: Publication of `openclaw/faint-krill` after workspace reconciliation.
- **#198690**: CI optimization to skip scheduling scans for fresh extension compiles.
- **#198689**: Fix for tool-free completion relay instructions alignment.
- **#198658**: Control UI freeze fix in WebKit when picker replaces opening menu.
- **#198657**: CLI fix to stop interrupted exec approval grants list reads on Ctrl+C.

Feature completions this cycle include ID member role management, improved memory-core stalls under filesystem pressure, and reduced Gateway resident memory on ARM64 hosts.

## 4. Community Hot Topics
The most discussed issues today center on session stability and provider reliability:
- **#128140** (13 comments): `memory_search` tool timeout (15s) despite CLI working—likely a worker/embedding provider mismatch.
- **#155119** (13 comments): Subagent completion delivery loss, truncated final answers, and stuck `deliveryStatus`.
- **#191847** (11 comments): SQLite worker OOM crash in large Telegram sessions after 2026.10.10 regression.
- **#196820** (6 comments): Control UI locks up in `Element.getAnimations()` loop on macOS, blocking the UI thread.
- **#197297** (6 comments): Feature request for per-user secret vault with per-session opt-in.

Top PRs by visibility include UI freeze fixes (#198658), CLI timeout handling (#198657), and ID access control work (#197748, #197770, #197782).

## 5. Bugs & Stability
**Critical stability issues reported today:**
- **#191847** (P1): Large sessions repeatedly kill the 512 MB SQLite worker with `ERR_WORKER_OUT_OF_MEMORY`; every turn fails with "admission is closed." No fix PR yet.
- **#195030** (P0): Claude-cli conversation wedged after in-process Gateway restart; turns hang until full process restart (stuck recovery released=0).
- **#196820** (P1): Control UI enters a busy loop calling `Element.getAnimations()`, consuming ~100% CPU.
- **#194403** (P1): Helper-completion continuations invalidate authority, leaving conversations blocked.
- **#194164** (P2): Memory indexing does not start after Gateway boot; only triggered by `memory_search`.

Fix PRs in flight include **#198658** (Control UI freeze), **#198633** (completion relay failures), and **#197510** (Gateway stalls under filesystem pressure).

## 6. Feature Requests & Roadmap Signals
Several user-requested features show high traction and may target the next release:
- **#197297**: Per-user secret vault with per-session opt-in—explicitly scoped to non-durable Gateway-hosted exec.
- **#166678**: Hide agents from the agent picker across WebUI/macOS/iOS while keeping them spawnable.
- **#168557**: Agent credential request batching, persistent prompts, and `kind: env` support.
- **#178373**: Agent loop run-level turn/token budget and tool-loop detection configuration.
- **#197531**: macOS TTS audio conversion bug (segmented MP3 to Opus-in-CAF truncation).

The appearance of "security-sensitive-changed" labels on several PRs (#198410, #198194) suggests a concurrent focus on access control and sandboxing.

## 7. User Feedback Summary
Users report significant pain points with:
- **Session persistence**: Long sessions losing prompt cache on wake/replay (#198410); memory indexing not starting until manual `memory_search` (#194164).
- **Provider reliability**: Slack token not reloading after rotation (#80346, old but recurring); Anthropic context windows missing (#167762).
- **UI/UX friction**: Control UI freezing on picker transitions (#196820, #198658); agent picker visibility and localization issues (#166678, #168990).
- **Cron/automation**: Script limits silently discarded on `cron add` (#198688); automation owner authorization for cross-provider fallbacks (#192009).
- **Agent tooling**: `exec approval` card not flagging mount points (#124306); `before_agent_finalize` "revise" ignored after tool calls (#167862).

Satisfaction is mixed: while the mergerate and CI improvements are noted positively, the volume of P1/P0 crashes in 2026.10.10 has raised concern among long-term operators.

## 8. Backlog Watch
**Long-unanswered important issues needing maintainer attention:**
- **#166336** (8 comments, since 2026-10-06): Agent `automations` tool silently vanishes org-wide; `worker_turn_tool_authorities` resolves falsy for every session, persisting across cold restarts. No logged event.
- **#192009** (14 comments, since 2026-11-03): Feature to explicitly authorize cross-provider cron fallback accounts (OpenAI primary + xAI fallback).
- **#195397** (5 comments, since 2026-11-08): Gateway-started runs cannot declare `NO_REPLY`; explicit silence replaced by settled-turn fallback text.
- **#197810** (5 comments, since 2026-11-12): MCP loopback: claude-cli turns wake without OpenClaw tools due to capability read escaping `withPreparedSessionCapabilityRead`.
- **#134446** (6 comments, since 2026-08-31): `SecretRef` exec resolution rejects root-owned commands like `/usr/bin/security` on macOS, making keychain unusable.

**Critical PRs needing maintainer triage:**
- **#198410** (size: XL, P2): Long sessions lose prompt cache—proof sufficient, waiting on author.
- **#197748** (size: XL, P2): Guest member role with sandboxed session tools—security-boundary merge risk, waiting on author.
- **#198684** (size: S, P2): Gateway discard queued input after node unpairing—proof sufficient, ready for maintainer look.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison: Personal AI Agent & Assistant Open-Source Ecosystem

## 1. Ecosystem Overview

The personal AI agent and assistant open-source ecosystem (Nov 14, 2026) is characterized by a dichotomy between high-velocity, feature-rich platforms and specialized, maintenance-focused tools. Large integrator projects like **OpenClaw** and **ZeroClaw** dominate with hundreds of daily changes, serving as de facto reference implementations for complex agent orchestration, provider aggregation, and sandboxing. Conversely, niche projects such as **NullClaw** and **PicoClaw** exhibit minimal activity, focusing on specific integration bugs or upstream synchronization. A middle tier—**NanoBot**, **NanoClaw**, and **LobsterAI**—balances UI refinement and stability fixes with modest release cycles. Security hardening and platform compatibility (particularly macOS Sandbox/Docker/Windows) represent a unifying thread across nearly all projects, indicating that the industry is currently prioritizing trust and reliability over raw capability expansion. The landscape reveals a maturing field where "stable" often trumps " cutting-edge," and community health is increasingly defined by issue response times and PR merge velocity rather than feature volume alone.

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | Release Status | Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 133 | 500 | v2026.10.10 (Nov 03); No new releases | **High** (Active, large backlog, stabilizing) |
| **ZeroClaw** | 7 | 50 | No new releases | **Medium-High** (Robust, active PRs, sandbox focus) |
| **Hermes Agent** | 6 | 50 | v0.23.1+canary (Nov 13) | **High** (Security marathon, rapid canary cycles) |
| **LobsterAI** | 0 (new) | 24 | 2026.11.6 (Nov 06) | **Medium** (Stability fixes, session integrity focus) |
| **CoPaw** | 12 | 26 | v2.3.0 (Nov 11) | **Medium** (Feature freeze, migration pitfalls) |
| **NanoBot** | 3 | 22 | Maintenance/RC phase | **Low-Medium** (Steady, UI-focused) |
| **NanoClaw** | 1 | 15 | RC phase (v2026.10.x) | **Medium** (Infrastructure hardening) |
| **PicoClaw** | 1 | 3 | Unavailable | **Low** (Maintenance sync) |
| **NullClaw** | 0 | 2 | No releases | **Low** (Stable, minimal activity) |
| **IronClaw** | 0 | 0 | N/A | **Inactive** |
| **Moltis** | 0 | 0 | N/A | **Inactive** |

*\*Health Score is a qualitative assessment based on activity volume, release recency, and bug frequency.*

## 3. OpenClaw's Position

**Advantages vs. Peers:** OpenClaw stands as the reference benchmark for the ecosystem. Its 500 PRs in 24 hours demonstrate unscaled operational velocity, providing the most extensive testing ground for new features, provider integrations, and multi-agent workflows. The project's maturity is evident in its robust release process (v2026.10.10) and the depth of its community hot topics, which cover critical stability issues (SQLite OOM, UI freezes) and provider reliability.

**Technical Approach Differences:** While many projects focus on specific channels (Telegram, Slack) or single-platform sandboxing, OpenClaw operates as a core "operating system" for AI agents. It abstracts provider interactions (Anthropic, OpenAI, etc.), manages complex session state across diverse workers (SQLite, embedding providers), and implements sophisticated approval gateways. This breadth makes it uniquely positioned but also more prone to the "volume of P1/P0 crashes" noted in user feedback.

**Community Size Comparison:** OpenClaw dwarfs the competition in raw contributor volume. Projects like **NullClaw** and **PicoClaw** have single-digit PR counts, whereas OpenClaw's 264 open PRs and 133 issues indicate a massive, active contributor base. This scale attracts more bug reports and feature requests but also necessitates the rigorous triage observed in its "Backlog Watch" section.

## 4. Shared Technical Focus Areas

Several critical requirements emerge across the ecosystem, reflecting current pain points for AI agent developers:

*   **Session & State Management:** A universal challenge. **OpenClaw** (Issue #191847, #194164), **ZeroClaw** (Issue #10781 inert configs), **LobsterAI** (Issue #639 metadata corruption), and **CoPaw** (Issue #8684 migration failure) all grapple with persistent session data, memory indexing, and state synchronization across restarts or platform shifts.
*   **Provider Integration & Reliability:** Managing third-party API quirks is pervasive. **Hermes Agent** (Anthropic OAuth cooldowns), **OpenClaw** (Slack token rotation, Anthropic context windows), and **ZeroClaw** (Keenable provider addition) highlight the need for resilient provider fallbacks, token management, and compatibility shims as the number of integrated models grows.
*   **Sandboxing & Security Escapes:** Platform-specific security is a dominant concern. **ZeroClaw** (macOS Seatbelt regex #12137), **Hermes Agent** (Windows Task Scheduler, Docker tool execution), **OpenClaw** (WebKit UI freezes, Gateway OOM), and **NanoBot** (HTTP timeout issues) all address the difficulty of running untrusted code or tool outputs within trusted environments.
*   **UI/UX Stability & "Last Mile" Polish:** Projects are investing heavily in the user-facing layer. **NanoBot** and **LobsterAI** focus on WebUI refinements and "Recently used" skill pickers. **OpenClaw** and **CoPaw** tackle critical UI freezes and deployment configurations (base paths, theming), indicating that "out-of-the-box" experience is a key differentiator.

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | LobsterAI | CoPaw / NanoBot |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | General-purpose agent OS / Orchestration | Security/Sandboxing, Provider agnosticism | Security hardening, A2A protocol, Windows/Docker | Session integrity, Multi-agent persona, Skill mgmt | UI/UX polish, Provider integration, Stability |
| **Target User** | Power users, platform builders, Ops teams | Security-conscious admins, Mac admins | Enterprise/Containerized deployment | Users managing complex multi-agent personas | Developers, end-users seeking stability |
| **Architecture** | Monorepo-scale, subsystems (Gateway, Worker, UI) | Modular, focused on config & sandbox | Supervised gateway, terminal-centric | Adapter-based, channel-centric | Hybrid, often WebUI + CLI |
| **Release Cadence** | Periodic (v2026.10.10); Focus on stabilization | Continuous, no major version bumps | Canary releases (v0.23.1); Rapid iteration | Point releases (2026.11.6); Maintenance | Semi-regular (v2.3.0); RC phases |

## 6. Community Momentum & Maturity

*   **Rapidly Iterating (High Velocity):** **OpenClaw** and **ZeroClaw** are in a constant state of flux. OpenClaw's 500 daily PRs and ZeroClaw's 50 PRs indicate active development, likely driven by a need to stabilize new code or integrate fresh providers. **Hermes Agent** also exhibits high velocity (50 PRs/6 issues) with a focus on "sec-marathon" security pushes.
*   **Stabilizing (Maintenance Mode):** Projects like **NanoBot**, **NanoClaw**, **PicoClaw**, and **NullClaw** show low activity, suggesting their core features are complete and they are in bug-fix or synchronization phases. **CoPaw** sits at a crossroads: it has a stable v2.3.0 release but is actively addressing migration pitfalls and deployment limitations, indicating a transition from feature-driven to stability-driven development.
*   **Inactive/Quiescent:** **IronClaw** and **Moltis** show zero activity, signaling either project completion, dormancy, or a shift to private/internal development.

## 7. Trend Signals

1.  **Security as the Primary Backlog:** Across OpenClaw, ZeroClaw, Hermes Agent, and LobsterAI, the most critical open issues and merged PRs relate to sandbox escapes (macOS Seatbelt), metadata corruption, and OAuth credential management. The industry is moving from "feature first" to "secure by default," with sandboxing and permission boundaries becoming the rate-limiting step for adoption.
2.  **The "Last Mile" Friction:** A significant portion of feedback centers on deployment and configuration gaps. Issues like CoPaw's `#8714` (reverse-proxy prefix), OpenClaw's `#198688` (cron script limits), and ZeroClaw's `#10781` (inert config keys) reveal that users are blocked not by the AI capabilities, but by the infrastructure surrounding them (permissions, paths, environment variables).
3.  **Provider Fragmentation & Compatibility:** The sheer volume of provider-specific bugs (Anthropic cooldowns, OpenAI model deprecation, Keenable integration) suggests the ecosystem is reaching a tipping point where integrating 20+ LLMs natively is outpacing the ability to maintain compatibility shims. Projects are differentiating by either embracing a "provider-agnostic" core (OpenClaw/ZeroClaw) or specializing in narrow, well-tested integrations.
4.  **Maturation of "Agent-to-Agent" (A2A) Standards:** The appearance of A2A protocol work in **Hermes Agent** (#141947) and the focus on agent loops and budgets in **OpenClaw** (#178373) indicate that the industry is standardizing on communication protocols between agents, moving beyond simple tool use toward coordinated multi-agent systems.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest

**Generated on:** 2026-11-14

## 1. Today's Overview
NanoBot maintains steady development momentum with 22 PRs merged or closed and 3 new issues opened in the last 24 hours. The project continues its focus on web UI refinements, provider integrations, and stability fixes. While no new releases were published today, the volume of merged PRs indicates active progress toward the next stable version. Issue activity is concentrated on bug fixes and incremental feature additions rather than major architectural changes.

## 2. Releases
No new releases were published today. The latest release cycle appears to be in a maintenance or release-candidate phase, with maintainers focusing on stabilizing existing features through targeted PRs rather than publishing versioned artifacts.

## 3. Project Progress
Twenty-two PRs were updated in the last day, with 13 merged or closed and 9 remaining open. The merged contributions span several areas:
- **WebUI polish:** PRs #6657, #6659, #6653, #6658, #6654, #6656, and #6655 refined the user interface, fixed session handling, and improved visual consistency.
- **Provider and model improvements:** #6647 added the ShengSuanYun gateway; #6651 routed image inputs by preset capability; #6616 centralized scoped file operations.
- **Tooling and infrastructure:** #6486 fixed JSON schema validation for tool parameters; #6642 implemented trusted PyPI publishing.
- **Closed bug fixes:** #6657 scoped remote health checks to visible demand; #6651 resolved image routing; #6650 refreshed the empty chat welcome.

## 4. Community Hot Topics
The most discussed items today center on UI/UX and provider integrations:
- **PR #6661** (open): Proposes showing the latest activity in collapsed turns, aiming to reduce visual clutter while keeping activity accessible via the timer.
- **PR #6647** (open): Adds the ShengSuanYun model gateway, expanding regional provider support.
- **Issue #6649** (open, 2 comments): Reports that the Dream feature only reads the first 1000 characters of each cumulative checkpoint in `history.jsonl`, potentially losing long-term context.
- **Issue #6660** (open): Notes that `gpt-image-1`, `dall-e-3`, and `dall-e-2` are retired by OpenAI but still appear in the model list, causing failed requests.

## 5. Bugs & Stability
Three new bugs were reported in the last 24 hours, all marked as open:
- **#6649** [bug]: Dream truncation issue—checkpoints beyond 1000 characters are silently dropped, breaking cumulative context. Severity: High for long-running sessions.
- **#6660** [bug]: Retired OpenAI image models still listed, leading to API errors. Severity: Medium; workaround required until models are removed.
- **#6652** [bug]: QQ channel attachments over ~2MB randomly fail with "media upload failed: empty response" due to a 5s HTTP timeout with no retry. Severity: Moderate; intermittent but impactful for file-sharing workflows.

No fix PRs were merged for these specific issues today, though related webUI stability PRs were merged.

## 6. Feature Requests & Roadmap Signals
Several PRs signal upcoming enhancements:
- **PR #6661** and **#6653** focus on session transition stability and activity visualization, suggesting a roadmap priority on reducing UI noise and improving multi-turn coherence.
- **PR #5234** (open since August, updated recently) integrates `mst-python` as a metasearch provider, indicating continued expansion of search capabilities.
- **PR #6317** adds continuation offsets to `web_fetch`, a feature that supports multi-page agent reasoning and may land in a future release.

## 7. User Feedback Summary
Users are actively reporting pain points around long-context handling (#6649), retired model compatibility (#6660), and file upload reliability on QQ (#6652). The merged PRs show the project responding to feedback on UI clutter (#6661, #6650), provider gaps (#6647), and session integrity (#6657, #6653). Overall satisfaction appears high for incremental stability fixes, while long-context and cross-platform attachment issues remain active pain points.

## 8. Backlog Watch
- **#6649** (2 comments, last updated 2026-11-14): The Dream checkpoint truncation bug has persisted since #5610. A fix would require updating `build_dream_prompt` to read full checkpoint entries.
- **#6660** (0 comments, last updated 2026-11-13): Retired models listed; maintainer action needed to sync the model list with OpenAI's deprecation schedule.
- **#5234** (undefined comments, last updated 2026-11-13): The mst-python provider integration has been open for over three months; may need maintainer review or conflict resolution.
- **#6616** (undefined comments, last updated 2026-11-13): Centralizing scoped file operations is a refactor conflict; maintainer attention may be required to resolve merge dependencies.

**Links:**
- Issues: #6649, #6660, #6652
- PRs: #6661, #6647, #6616

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest**
**Date:** 2026-11-14

### 1. Today's Overview
Hermes Agent is currently in a state of active maintenance and security hardening. The project recorded 6 new issues and 50 new pull requests within the last 24 hours, indicating a high velocity of development. The release of the canary v0.23.1 build suggests a push toward stabilizing new features ahead of a potential major version bump. The community is heavily focused on security hardening (the "sec-marathon-2026-11-13" tag appears across numerous PRs) and fixing platform-specific bugs, particularly for Windows and Docker environments. Overall project health appears strong, with maintainers actively merging fixes and addressing a high volume of contributor submissions.

### 2. Releases
*   **New Release:** `v0.23.1+canary.20261113T064447Z` was published on November 13, 2026.
*   **Details:** This is a canary release, indicating it is a pre-release build for testing upcoming features. No specific migration notes or breaking changes are detailed in the release summary for this specific canary build, but it represents the latest development state of the Hermes Agent codebase.

### 3. Project Progress
Significant progress was made on security hardening and infrastructure stability today. A cluster of 10 pull requests merged/closed focus on the "sec-marathon-2026-11-13" initiative, addressing critical security boundaries. Key advancements include:
*   **Terminal Security:** PR #155555 ensures that managed terminal scopes are applied even in safe-mode or ignore-user-config sessions, preventing Docker tool execution from defaulting to local backends unintentionally.
*   **Gateway Stability:** PR #155532 implements a "restart on idle" feature for the gateway, salvaging previous work (#115190, #147402) where restarts would freeze the agent for up to 30 minutes, killing active work.
*   **Platform Support:** PR #89824 (originally opened in August but updated recently) fixes Windows Scheduled Task installation on workgroup machines, a long-standing compatibility issue.

### 4. Community Hot Topics
The most active discussion centers on **Anthropic OAuth credential management** (Issue #128510). With 3 comments and 1 upvote, this issue highlights a defect where stored OAuth grants disappear during model cooldowns, forcing unnecessary re-authentication. This is a significant usability bug for users relying on Anthropic providers.

Security remains the dominant theme in the PR landscape. The top PR by recent activity is #155553, which addresses a "literal-PID kill" vulnerability in the supervised gateway, reflecting the project's focus on preventing processes from killing their own supervisors. Other hot PRs focus on hardening git approval gates and securing the inline browser vault executor.

### 5. Bugs & Stability
Six new bugs were reported today, ranging from critical infrastructure failures to quality-of-life regressions:
*   **Critical:** Issue #155550 reports a "never re-checked" bug in Anthropic per-model cooldowns. If Anthropic reopens a credential window early, the system fails to re-evaluate the status, leaving credentials benched unnecessarily.
*   **High Severity:** Issue #154749 describes a "completely broken" bug where truncated tool output is written to the Herme host instead of the SSH target host. This renders the terminal and file tools unusable when using the Docker image with an SSH backend.
*   **Medium Severity:** Issue #154959 involves a cron job monitoring race condition where changes are marked as "seen" before the wake-gate script can decide to skip the agent, potentially causing missed tasks.

Fix PRs exist for several of these, particularly the terminal scope issue (#155555) and the Windows Task Scheduler issue (#89824), though the Anthropic cooldown and truncated output bugs are still awaiting resolution.

### 6. Feature Requests & Roadmap Signals
Analysis of the issue queue reveals a strong push toward **A2A (Agent-to-Agent) integration** and **multi-platform compatibility**. 
*   **A2A Protocol:** PR #141947 introduces an "accept-then-poll" client workflow for A2A 1.0, signaling the project's intent to support modern agent communication standards.
*   **Telegram Integration:** PR #152292 fixes session handoff bugs within Telegram topics, indicating active development in chat platform bridges.
*   **Windows Focus:** The consistent appearance of Windows-specific fixes (PRs #155556, #89824) and the "sec-marathon" security hardening suggest a roadmap focused on stabilizing the agent on Windows workgroup machines and improving native integration.

### 7. User Feedback Summary
User feedback today paints a picture of a powerful but complex tool undergoing rigorous security and stability tightening. 
*   **Satisfaction:** The high volume of merged PRs (50 in 24h) suggests maintainers are responsive and the codebase is active.
*   **Dissatisfaction/Pain Points:** The most significant pain point is the **OAuth credential persistence issue** with Anthropic (#128510), where users lose access and must re-authenticate frequently. Additionally, the **Docker/SSH terminal truncation bug** (#154749) is causing critical workflow failures for users running Hermes in containerized SSH environments, making the tool effectively unusable for that specific configuration until fixed.

### 8. Backlog Watch
Several important items require maintainer attention in the backlog:
*   **Issue #155550 (Anthropic Cooldown):** Despite being reported today, this bug has a root cause that could affect many users relying on Anthropic models. It is currently open with 0 comments but is high severity.
*   **PR #155558 (env_loader keying):** This PR fixes a state consistency bug where secret sources are keyed by resolved home paths, potentially causing cross-profile secret leaks or losses. It is open and awaiting merge.
*   **Issue #154555 (Kanban Workers):** A deterministic pre-turn failure in Kanban workers that results in the confusing error "Kanban owner refused: Kanban execution unknown." This has been open since November 12 and has 2 comments, indicating it may need a maintainer's decision on the underlying logic.
*   **PR #152292 (Telegram Handoff):** While merged, it is worth watching as it touches the complex area of multi-topic session management.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Generated on:** 2026-11-14
**Repository:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

## 1. Today's Overview
PicoClaw exhibits minimal day-to-day activity, characterized by a low issue and PR volume. The project closed three PRs today, all of which appear to be bulk merges syncing fixes from upstream or other branches, rather than new feature development. The sole active issue, #3461, highlights a usability gap regarding gateway initiation via the Web UI, indicating that while the console functions correctly, the gateway startup remains inaccessible for users without API keys. Overall, the project is in a maintenance and synchronization phase, with development focus likely on stability and upstream compatibility rather than new functionality.

## 2. Releases
No new releases were published today. The latest release history is currently unavailable.

## 3. Project Progress
Three PRs were merged/closed today:
*   **PR #1558:** Merged fixes from PRs #1344, #1342, #1341, and #1331.
*   **PR #1546:** Merged fixes from PRs #1480, #1479, #1478, #1473, and #1467.
*   **PR #2810:** A major synchronization commit merging ~1095 commits from `upstream/main` and forward-porting 6 customization commits. This includes significant reorganization of the agent loop into `agent_*.go`, tooling moves to `pkg/tools/{fs,integration}/`, and channel config relocation.

## 4. Community Hot Topics
The most significant community interaction is Issue **#3461** ("[stale] [BUG] start gateway not available via web ui (with no-api-key providers)"), updated on 2026-11-13. With one comment and zero thumbs up, the issue reports that users cannot start a gateway via the Web UI even when using providers that do not require an API key (e.g., "kilo-auto/free"). The underlying need is for a seamless onboarding experience where the gateway can be launched without prior API key configuration, bridging the gap between console-based operation and web interface accessibility.

## 5. Bugs & Stability
The only bug reported in the last 24 hours is **Issue #3461**. It is classified as a BUG and is currently marked as [stale]. The issue specifically blocks users from starting the gateway through the Web UI when using no-api-key providers, though console operations remain functional. No fix PRs exist for this issue at this time; resolution would likely require changes to the Web UI's gateway initiation logic to handle providers with empty or no API key fields.

## 6. Feature Requests & Roadmap Signals
There are no explicit feature requests or roadmap signals in the data provided for today. However, the merge of PR #2810 suggests an ongoing effort to align with upstream developments and restructure the project's internal architecture (splitting the agent loop and reorganizing tools). This indicates a roadmap focused on codebase modernization, maintainability, and integration with upstream Sipeed/picoclaw developments, rather than user-facing feature additions.

## 7. User Feedback Summary
User feedback, as captured in the active issue, centers on the **Web UI experience** and **gateway accessibility**. A core pain point is the inability to start the gateway directly from the Web interface when using "no-api-key" providers, forcing users to rely on the console. This suggests a segment of the user base prefers or requires UI-based management and encounters friction when their API setup does not involve traditional key-based authentication. The satisfaction level appears mixed; functionality is present in the console, but the Web UI path is broken for specific configuration profiles.

## 8. Backlog Watch
*   **Issue #3461** (Created 2026-11-06, Updated 2026-11-13): This is the primary item requiring maintainer attention. It is currently stale and blocking the Web UI startup flow for no-api-key providers. Given its recent creation and update, it represents a regression or usability gap that should be prioritized for triage and resolution to improve the out-of-box experience.
*   **PR #2810** (Created 2026-05-07, Updated 2026-11-13): While merged today, this PR was in the backlog since May. Its successful merge demonstrates the maintainers' ability to handle large-scale synchronization and forward-porting tasks, which is a positive sign for project health despite the low daily activity.

---
*Data Source: GitHub API / PicoClaw Repository Snapshots*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest - 2026-11-14

## 1. Today's Overview
NanoClaw remains in an active development cycle, processing a significant volume of changes across the codebase. Today saw 15 Pull Requests merged or closed against only a single Issue update, indicating a focused period of bug fixes, documentation updates, and infrastructure hardening rather than new feature exploration. The project health appears stable, with maintainers rapidly cycling through PRs to address community-reported issues and prepare the upcoming v2026.10.x release candidate.

## 2. Releases
No new releases were published today. The most recent activity relates to the internal agent image refresh (PR #4349), which updated the hardened container image from `v2026.10.0` to `v2026.10.0-20261112T2338`. Users should note that while no user-facing version bump occurred, the underlying agent image has been reinforced with the latest security and stability patches.

## 3. Project Progress
A major cluster of merged PRs centered on the "channels" and "approvals" subsystems. Key advancements include:
*   **Channel Stability:** PR #4171 and #4168 resolved race conditions where approval cards or text responses were answered by the channel before the host could intervene, a critical fix for integrations like WhatsApp and iMessage.
*   **Card Text Integrity:** PR #4156 and #4147 addressed text escaping and formatting issues, ensuring approval card actions render correctly across Slack, Discord, and Google Chat without being truncated or interpreted as links/mentions.
*   **Setup & Credentials:** PR #4350 and #4316 improved the installation pipeline, ensuring the `NANOCLAW_INSTALL_ID` environment variable is honored in shell scripts and that sign-in links open correctly via HTTPS without spawning unnecessary shell processes on WSL.

## 4. Community Hot Topics
The most discussed item is Issue #3853, opened on 2026-09-19 and updated most recently on 2026-11-13. This documentation gap concerns the `CLAUDE.md` file, where the `## Admin CLI (ncl)` table is outdated. Three CLI tools are missing from the documented list, creating a discrepancy between the help text and the actual capabilities available to users. On the PR front, #4354 and #4353 are the current hot topics, both addressing edge cases in chat turn management where replies ending with `<internal>` tags or failing to reply entirely leave users waiting.

## 5. Bugs & Stability
Stability improvements were the dominant theme today. Several "hardening" PRs were merged to prevent runtime crashes and adapter hangs:
*   **Adapter Timeouts:** PR #4351 prevents Mattermost adapters from hanging indefinitely if a WebSocket upgrade is accepted but never completed.
*   **Session Management:** PR #4347 fixes a critical bug in cross-session context where a new session's mailbox would fail to initialize if the backing store did not pre-exist.
*   **Input Sanitization:** PRs #4156 and #4147 prevent card text from being mangled by chat platform parsers (e.g., Slack interpreting markdown links), which previously caused cards to fail to post entirely.

## 6. Feature Requests & Roadmap Signals
Several new skills and adaptations are in review, signaling near-term roadmap expansion:
*   **Local AI Integration:** PR #4352 introduces an opt-in skill for "Rapid-MLX" local model tools on Apple Silicon, indicating a push toward tighter local hardware integration.
*   **Email Integration:** PR #3726 and its accompanying adapter PR #4218 add Proton Mail support, expanding NanoClaw's reach into secure communications.
*   **Skill Distribution:** The volume of PRs in the `area/skills` category suggests an ongoing effort to modularize capabilities, making it easier for users to install specific functions (like Proton Mail or Proton Bridge) without pulling in the entire codebase.

## 7. User Feedback Summary
User feedback today highlights two primary pain points:
*   **Documentation Lag:** The discrepancy in Issue #3853 is a recurring frustration; users expect `CLAUDE.md` to be the source of truth for CLI capabilities, and falling behind erodes trust in the configuration.
*   **Channel Coordination:** The merged PRs #4168 and #4171 address a fundamental friction point where AI agents and human hosts "talk past each other" regarding approvals. The fix ensures that the host remains the final arbiter, resolving confusion in group chats.

## 8. Backlog Watch
Several important items require maintainer triage:
*   **Issue #3853 (Documentation):** Open since September, this remains the oldest active issue. Despite being tagged for triage, it has yet to receive a maintainer response to update the `CLAUDE.md` table.
*   **PR #3726 / #4218 (Proton Mail):** These feature PRs have been open for weeks (since September and October respectively). While the skill (#3726) and adapter (#4218) are logically separate, their long wait time may be blocking users seeking Proton Mail integration.
*   **PR #4316 (Setup/Installation):** Open since Nov 9, this small hardening fix for WSL sign-in links is ready for merge but sits in the queue, potentially delaying smooth onboarding for new Windows/WSL users.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest
## 2026-11-14

### 1. Today's Overview
The NullClaw project is currently in a low-activity state with no releases and no issues updated in the last 24 hours. The project status reflects a maintenance phase where two pull requests were opened in the last two days but have seen no merges or closures today. While the issue queue is empty, the recent PR activity indicates ongoing development efforts in specific feature areas, particularly Telegram markdown rendering and web search provider integration. The project appears stable with no critical bugs or regressions reported recently, though the lack of recent merges suggests development may be focused on refining existing implementations rather than shipping major changes.

[GitHub Project Link](https://github.com/nullclaw/nullclaw) | [Project Digest Archive](https://github.com/nullclaw/nullclaw/issues?q=is%3Aissue+is%3Aclosed)

### 2. Releases
No new releases have been published for NullClaw. The project has no tagged releases in the current view, indicating this may be a development-focused repository or that releases are managed through a different workflow. Without new releases, there are no breaking changes or migration notes to report for this period. Users should refer to the main branch for the latest features and bug fixes.

### 3. Project Progress
Two pull requests were opened in the last 24 hours, representing the primary development activity for NullClaw:
- **#1094**: feat(telegram) - render markdown tables as monospace pre blocks - Author: timosha (Created: 2026-11-13)
- **#1091**: feat(web_search) - add Keenable provider (no API key required) - Author: KGKallasmaa (Created: 2026-11-03, Updated: 2026-11-13)

Neither PR has been merged or closed today, suggesting they are still under review or implementation. The Telegram markdown table rendering fix addresses a specific usability issue where tables were rendered as jumbled single lines, while the Keenable provider addition expands web search capabilities without requiring API keys.

### 4. Community Hot Topics
The two open pull requests represent the most active community topics:
- **#1094** (timosha): Focuses on improving Telegram markdown table rendering. The underlying need is clear: Telegram's rendering engine has difficulty with standard markdown tables, requiring conversion to monospace pre-formatted blocks for proper display. This suggests users are actively using Telegram integration and encountering formatting issues.
- **#1091** (KGKallasmaa): Adds Keenable as a web_search provider with no API key required. This addresses accessibility needs by providing a free public endpoint (`POST https://api.keenable.ai/v1/search/public`), indicating community demand for search functionality that doesn't require API key setup barriers.

Both topics highlight the project's focus on improving user experience and expanding functionality without increasing user complexity.

### 5. Bugs & Stability
No bugs, crashes, or regressions were reported in the last 24 hours. The issue queue remains empty, and there are no closed issues indicating recent bug fixes. The two open PRs (#1094 and #1091) appear to be feature implementations rather than bug fixes, suggesting the core project functionality is stable with no critical issues currently affecting users. The lack of recent bug reports combined with the empty issue queue indicates good project stability.

### 6. Feature Requests & Roadmap Signals
The open pull requests provide clear signals about the project roadmap:
- **Telegram markdown table rendering** (PR #1094): This feature addresses a specific pain point for Telegram users, suggesting the roadmap includes refining platform-specific integrations and improving formatting fidelity.
- **Keenable web search provider** (PR #1091): This addition signals an expanding web search capabilities roadmap, particularly focusing on providers that require no API key setup, lowering the barrier to entry for search functionality.

These features suggest the project is actively balancing new functionality with usability improvements across different integration points.

### 7. User Feedback Summary
User feedback, as evidenced by the open PRs, centers on two main areas:
- **Telegram integration usability**: Users encountering markdown table formatting issues when using NullClaw's Telegram features. The pain point involves tables being rendered as jumbled single lines rather than proper formatted tables.
- **Search accessibility**: Demand for web search functionality that doesn't require API key configuration, making the assistant more accessible to users without technical setup capabilities.

The satisfaction appears to be growing as these issues are addressed, with the Keenable provider specifically targeting users who want search capabilities without API key management overhead.

### 8. Backlog Watch
No long-unanswered important Issues or PRs requiring immediate maintainer attention were identified in the last 24 hours. The issue queue is completely empty, and while PR #1091 has been open since November 3rd (11 days), and PR #1094 since November 13th (1 day), neither appears to be blocking critical functionality. The open PRs may simply be awaiting maintainer review or CI checks. Maintainers should monitor these PRs to ensure they receive appropriate attention, particularly #1091 which has had time to marinate in the review queue.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

### LobsterAI Project Digest
**Date:** 2026-11-14

#### 1. Today's Overview
LobsterAI shows high development velocity today with 24 PRs merged or closed in the last 24 hours, indicating an active maintenance cycle. The project is currently in a stable state with no new releases, but two critical bugs were addressed. The team appears focused on stabilizing the OpenClaw subsystem and refining the coworking/session features. Despite the activity, the project faces lingering stability issues related to metadata corruption in session messages, though recent fixes are actively resolving these regressions.

#### 2. Releases
No new releases were published today. The latest tagged version remains `2026.11.6` (based on Issue #3035 context), with no announced migration paths for the current development head.

#### 3. Project Progress
Today saw significant progress in session integrity and skill management:
*   **Session Integrity:** PR #3061 ([Closed]) implemented a fix for corrupt metadata in paged session messages, directly resolving Issue #639. PR #3087 ([Closed]) followed up by ensuring resilient parsing of stored message metadata, preventing a single corrupted message from rejecting an entire session history load.
*   **Skill Management:** PR #3088 ([Closed]) reduced bundled skills from 27 to 19, preserving user copies as deletable user skills. PR #3091 ([Open]) addresses a detection bug where byte-identical local skill zips were incorrectly duplicated.
*   **Polish & Performance:** PR #3085 ([Closed]) slimmed down the `AGENTS.md` template to reduce token overhead on cold starts. PR #3089 ([Closed]) unified reply footer spacing and read-aloud states in the renderer.

#### 4. Community Hot Topics
*   **Most Active PR:** [#3092](https://github.com/netease-youdao/LobsterAI/pull/3092) (Closed) - Fixes automatic maintenance to respect deleted agents, preventing database migration failures and accidental media cleanup of preserved session attachments. This addresses a critical operational risk for long-running deployments.
*   **Most Active Issue:** [#3035](https://github.com/netease-youdao/LobsterAI/issues/3035) (Closed) - Reports a "dual-track" identity desync bug where `IDENTITY.md`/`SOUL.md` files stored in a sub-agent's workspace are not synced to the runtime persona, causing user edits to be silently rolled back. This highlights a deep architectural consistency problem in the multi-agent persona system.

#### 5. Bugs & Stability
*   **Critical - Resolved:** Issue #639 ([Closed]) was the primary bug reported today regarding metadata corruption in the `cowork_messages` table crashing entire sessions. This has been fixed by PRs #3061 and #3087, which implement per-message metadata parsing and recovery.
*   **Active - Open:** Issue #3090 ([Open]) reports that `CoworkStore.getConfig()` hardcodes `executionMode` to `'local'`, ignoring saved `auto` or `sandbox` settings across reloads. PR #3090 is the corresponding fix.
*   **Stability Risk:** Issue #3035 ([Closed]) regarding the sub-agent identity desync remains a significant stability/consistency concern for users managing custom personas.

#### 6. Feature Requests & Roadmap Signals
*   **Skill Picker UX:** PR #3079 ([Closed]) introduced a "Recently used" group in the skill picker, signaling a focus on discoverability.
*   **Media Workflow:** PR #3080 ([Closed]) adds support for Seedream layer decomposition, exposing base images and OCR text to agents, indicating a push toward more sophisticated multimodal capabilities.
*   **Provider Catalogs:** Open PR #2859 aims to refresh built-in provider model catalogs (DeepSeek, Qwen, etc.), suggesting ongoing alignment with the evolving LLM landscape.

#### 7. User Feedback Summary
Users are actively reporting pain points around session persistence and agent identity. The most distressing feedback centers on **Issue #639**, where users lose entire sessions due to a single corrupted metadata field, with no recovery path. Similarly, **Issue #3035** reveals frustration with "silent" agent behavior—users investing time to tune a sub-agent's personality only to have changes ignored or reverted. On the positive side, the reduction of bundled skills (#3088) and the introduction of the "Recently used" skill group (#3079) are well-received usability improvements.

#### 8. Backlog Watch
*   **#3035** (Sub-agent identity desync): Despite being closed, the underlying bug of dual-track storage remains a high-priority maintainer item to verify the fix fully resolves the UI/runtime desync.
*   **#2859** (Provider model refresh): This open PR has been pending since October 13th. It requires maintainer attention to finalize the catalog updates and migration logic for existing users.
*   **#3091** (Skill duplicate detection): The open PR fixing the `-1` suffix duplication bug for local skill zips needs maintainer review and merge to prevent skill library clutter.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest
**Date:** 2026-11-14

## 1. Today's Overview
CoPaw (QwenPaw) shows robust development activity today, with 41 total updates across Issues and Pull Requests. The project maintains a healthy merge rate, closing 3 PRs while opening 26 new ones. Critical infrastructure and platform stability issues dominate the current dialogue, particularly surrounding Hub provider integrations, channel-specific bugs, and deployment configurations. Despite 12 open Issues, the team is actively addressing blocker bugs, suggesting a focus on stabilizing the 2.3.0 release cycle before new feature sprawl.

## 2. Releases
No new releases were published today. The latest stable version remains **v2.3.0** (released 2026-11-11). Users on earlier versions should note the known upgrade pitfall documented in Issue #8684: upgrading to 2.3.0 does not migrate built-in channel plugins (e.g., Matrix), leaving them on outdated sources where critical fixes (E2EE dependencies, session/device-key rotations) from subsequent issues do not apply.

## 3. Project Progress
Three PRs were merged/closed today, all focusing on bug fixes and quality-of-life improvements:
*   **PR #8722:** Fixed real-time tool output preview size in the Harness, limiting display to the last 4,096 characters to prevent runaway event growth.
*   **PR #8723:** Addressed a Codex app-server disconnect issue where pending replies would hang indefinitely; the fix now wakes waiting replies and marks the current round as failed upon disconnection.
*   **PR #8715:** Fixed WeChat send receipt handling to properly process responses carrying only a `message_id`, resolving false bot conflict detections during startup/QR login.

Additionally, PR #8719 was opened to implement a configurable `QWENPAW_BASE_PATH` runtime setting, directly addressing the deployment limitation raised in Issue #8714.

## 4. Community Hot Topics
The most active discussion thread is **Issue #8718** (2 comments), a critical bug where the Hub model gateway instantly fails for Anthropic, MiniMax, and MiniMax-CN presets due to `provider_headers()` calls missing `request_headers()`. This is blocking integrations for users of these providers. Closely following is **Issue #8711** (2 comments), which proposes an auto-retry mechanism for `RetryChatModel` when streams complete with empty/thinking-only content, a common failure mode in the v2.3.0 runtime. On the PR side, **PR #8729** (exposing `request_headers` on Anthropic presets) is the direct code fix for #8718 and merits close attention.

*   **#8718:** [Hub model gateway instantly fails for Anthropic/MiniMax presets](https://github.com/agentscope-ai/QwenPaw/issues/8718)
*   **#8711:** [Auto-retry once in RetryChatModel](https://github.com/agentscope-ai/QwenPaw/issues/8711)
*   **#8729:** [Expose request_headers on AnthropicProvider presets](https://github.com/agentscope-ai/QwenPaw/pull/8729)

## 5. Bugs & Stability
Stability concerns are high today, with three significant bugs reported across different subsystems:

1.  **#8727:** A `[bug]` where the Responses continuation summary fails when a model's default reasoning consumes the 4,000-token output budget. The `disable_thinking=True` flag strips the `reasoning` field instead of expressing "no reasoning," breaking summary generation. *Severity: High* (functional impairment).
2.  **#8718:** [Critical] Hub provider headers mismatch causing instant 502 errors for Anthropic/MiniMax. *Severity: Critical* (integration blocker).
3.  **#8684:** [Medium] Upgrade migration failure for built-in channel plugins (Matrix stays on old source). *Severity: Medium* (upgrade path obstruction).
4.  **#8712:** `execute_shell_command` result hidden from the model after resource protection termination. *Severity: Medium* (workflow disruption).

Fix PRs exist or are in progress for #8722, #8723, and #8715, but #8727 and #8718 require immediate maintainer triage.

## 6. Feature Requests & Roadmap Signals
Several feature requests signal the project's roadmap direction:
*   **#8071:** Plugin-facing theme extension point. Users want plugins to have deeper theming control beyond the single `colorPrimary` knob, suggesting a move toward a more modular, semantic token system for the Console.
*   **#8714 / #8719:** Configurable runtime base-path deployment. This is a direct response to users wanting to run QwenPaw behind a reverse-proxy prefix (e.g., `/app/`), indicating a push for broader enterprise/self-hosting compatibility.
*   **#8532:** Append-only session storage and paginated history. This large-scale PR (XXXL size) introduces durable SQLite history, signaling a long-term investment in conversation state management and recovery.

## 7. User Feedback Summary
User sentiment today centers on **deployment flexibility** and **provider reliability**.
*   **Deployment:** Users on Docker/UV installations are frustrated by the inability to mount the Console under a URL prefix (Issue #8714), a blocker for integrating QwenPaw into existing internal tool portals.
*   **Channel Switching:** A recurring pain point in **Issue #8725** is the inability to switch session-level models within a channel (e.g., Feishu/DingTalk) once a model is pinned. Users report they cannot downgrade to a fallback model if the pinned one fails, effectively locking the session.
*   **Theme Customization:** Feature request **#8071** highlights that plugin authors feel restricted by the current theming API, desiring the ability to override semantic tokens (accent, hover, radius) to match their plugin's branding.

## 8. Backlog Watch
Several important items warrant maintainer attention due to age or high impact:
*   **#8532** (Created 2026-11-02): A massive XXXL PR for append-only session storage and native Turn forks. While updated recently (2026-11-13), its "Under Review" status and immense scope suggest it may be blocking or waiting on other infrastructure changes. It is a key piece for long-term conversation durability.
*   **#8071** (Created 2026-10-01): The plugin theme extension point has been open for over a month with 13 comments. It represents a significant UX improvement for the plugin ecosystem but lacks a clear implementation path or maintainer assignment.
*   **#8626** (Created 2026-11-08): PR for per-job `thinking_level` override in crons. This addresses a specific performance optimization but has stalled, potentially leaving scheduled jobs paying unnecessary reasoning latency costs.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest
## 2026-11-14

### 1. Today's Overview
ZeroClaw exhibits robust development activity with 7 issues and 50 PRs updated in the last 24 hours, indicating an active development cycle. The project shows strong momentum with frequent contributions across runtime, security, and provider integration domains. Despite the high PR volume, no new releases were published, suggesting the team is focused on incremental improvements and bug fixes rather than major version milestones. The merged PR count of 1 reflects a deliberate, thorough merging process typical of a mature open-source project.

### 2. Releases
No new releases were published today. The project continues on the current development track with active PRs targeting the master branch.

### 3. Project Progress
A single PR was merged/closed in the last 24 hours: **#12150**, which fixes the macOS Seatbelt "home dotfiles for tool configs" regex emission bug. This addresses a critical security/sandbox issue where the rule was incorrectly emitted as `regex #"^/Users/[^/]+/\\."`, preventing matching of `~/.cargo`, `~/.nvm`, and similar paths. The fix ensures the rule is now a literal backslash, resolving the "Operation not permitted" errors under default macOS sandboxing. Additionally, 49 open PRs remain in flight, spanning provider enhancements, web UI fixes, and runtime improvements.

### 4. Community Hot Topics
The most discussed issues center on **configuration inertness** and **Telegram functionality**:
- **#10781** (5 comments): An enhancement/docs issue regarding several accepted config keys being "inert" in v0.8.5, including `context_compression.*`, `history_pruning.keep_recent`, `collapse_tool_results`, and `keep_tool_context_turns`. Users expect reduced context/token usage, but nothing happens. This indicates a significant gap between documented configuration and runtime behavior.
- **#12396** (1 comment): Explicitly flags that `history_pruning.keep_recent` and `collapse_tool_results` are "dead config knobs" with no readers since PR #8196, which removed the legacy history pruner/compressor in favor of whole-turn trimming.
- **#12371** (0 comments): A new PR to process Telegram `edited_message` updates with latest-wins coalescing, addressing the "invisible edit" problem described in **#11713**.
- **#12421** (0 comments): A perf issue noting agent cron jobs run outside the session-key scope, losing provider prompt-cache affinity.

### 5. Bugs & Stability
**Critical/S1 Severity:**
- **#12137** (2 comments): A bug where the Seatbelt profile's "user home dotfiles" read rule is mis-escaped (`\\.`), causing toolchains and configs under `~/.cargo`, `~/.nvm`, `~/.pyenv`, `~/.local` to fail with "Operation not permitted" under the default macOS sandbox. **Fix PR #12150** was merged today, resolving this.
- **#12150** (0 comments merged): The direct fix for the Seatbelt regex emission.

**Other notable bugs:**
- **#11713** (2 comments): Telegram channel ignores `edited_message` updates, so mentions added via edit are never seen.
- **#12396**: Confirms `history_pruning.keep_recent` and `collapse_tool_results` are non-functional config knobs.

### 6. Feature Requests & Roadmap Signals
Several PRs signal upcoming capabilities:
- **#9809** (0 comments): A large enhancement to support multiple models per provider profile, separating schema-v4 connections, capability models, presets, and fallback graphs.
- **#12373** / **#12408** / **#12418**: A cluster of features regarding write-only WebUI credential management, scoped secret references, and scoped use of operator-managed service credentials. These indicate a roadmap focus on security isolation and credential hygiene for agent tasks.
- **#12422** (0 comments): An RFC proposing scoped use of operator-managed service credentials, allowing agents to perform tasks without disclosing underlying credentials to the model or chat.

### 7. User Feedback Summary
Users are experiencing two primary categories of friction:
1. **Configuration Transparency**: The inert config keys (#10781, #12396) represent a significant trust gap. Users setting `history_pruning.keep_recent` or `collapse_tool_results` expect behavioral changes that do not manifest, leading to confusion and potential token overuse.
2. **Platform-Sandbox Integration**: The macOS Seatbelt regex bug (#12137) highlights the project's sensitivity to platform-specific security models. The quick merge of #12150 suggests maintainers are responsive to critical sandbox escape risks.

### 8. Backlog Watch
Several important items require maintainer triage and attention:
- **#12422** (RFC: Scoped use of operator-managed service credentials): New today, requires design review to define the security model for credential delegation.
- **#12421** (perf: cron jobs run outside session-key scope): Open since today, needs investigation into session key propagation for cron-driven agent jobs.
- **#10781** (Inert config keys): Open since September with 5 comments, indicating a persistent UX/documentation mismatch that may need a design decision: implement the keys, remove them, or clarify their status.
- **#12396** (Dead config knobs): Open since November 11, directly related to #10781, requires a decision on whether to resurrect or prune these schema entries.
- **#11713** (Telegram edited_message): Open since October 13 with 2 comments, a functional gap in a major chat channel integration.

*Data source: GitHub API for zeroclaw-labs/zeroclaw, queried 2026-11-14*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*