# OpenClaw Ecosystem Digest 2026-11-26

> Issues: 173 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-26 07:54 UTC

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

Here is the OpenClaw project digest for 2026-11-26.

### 1. Today's Overview
The OpenClaw project shows extreme short-term volatility with 673 total updates across Issues and Pull Requests in the last 24 hours. The issue queue is dominated by severe memory instability and crash-loop scenarios, with 173 open issues currently active. The merged PR count (222) significantly outpaces the open PR count (278), indicating a high throughput of fixes, though the issue backlog remains critical. The release of `v2026.10.34` represents a gateway-only LTS-equivalent snapshot, suggesting the project is in a stabilization phase focused on reliability rather than new feature velocity.

### 2. Releases
*   **v2026.10.34 (Extended-Stable / LTS Equivalent):** This gateway-only release is the current "current equivalent to LTS." It includes critical security updates, reliability and performance fixes, and new model support from the end of October 2026. As this is a gateway-only release, it does not encompass the full CLI or agent suite changes found in newer betas, focusing instead on the stability of the core service layer.

### 3. Project Progress
In the last 24 hours, **222 PRs were merged or closed**, reflecting a robust merge pipeline. Key advancements include:
*   **Plugin & Runtime Stability:** PRs such as #204785 fixed the issue of owner memory being lost after background commands, and #205838 improved offline model run handling to prevent exclusive state database locks.
*   **UX & Interface Polish:** Numerous small but impactful fixes landed, including #205834 (preserving leading code blocks in previews), #205711 (fixing workboard comment truncation), and #205816 (withholding meeting records without usable transcripts).
*   **Infrastructure & CI:** Maintenance PRs like #205810 (stopping directory-watch helpers) and #205812 (limiting Doctor pre-repair copies) addressed resource leaks and compatibility risks.

### 4. Community Hot Topics
The most discussed issues today revolve around **memory management and crash loops**.
*   **#91588 (Critical Gateway Memory Leak):** 42 comments. The gateway RSS balloons from 350MB to 15.5GB over days, triggering OOM kills and restart cycles. This is the highest-engagement issue, highlighting a core architectural stability problem.
*   **#159662 (Unbounded Memory Leak):** 28 comments. A `prepared-model-catalog.worker.js` leak grows 4-5GB/hour, independent of workload, making single-user installs unstable within an hour.
*   **PR Activity:** #205837 (agent snooze functionality) and #205807 (Control UI asset sharing) are the most visible new contributions, though they have no comments yet, signaling active development on the user-facing control layer.

### 5. Bugs & Stability
The bug landscape is currently defined by "Runaway" and "Crash Loop" categories:
*   **Critical Crashes:** Issues #184843 (RSS growing ~1GB over 2-4 days on Windows) and #161379 (Gateway pinning a CPU core due to catalog refresh loops) represent high-severity stability regressions.
*   **Memory Leaks:** Beyond the gateway-level leaks, #153426 reveals a "provenance ratchet" issue where trusted memory files (`MEMORY.md`) are permanently excluded from bootstrap injection once marked "untrusted," causing potential data loss or context starvation.
*   **Fix Status:** While numerous PRs address specific crash causes (e.g., #205743 preventing Doctor from restarting Gateways during updates), the systemic memory leak issues (notably #91588 and #159662) currently lack merged fixes in the stable release cycle.

### 6. Feature Requests & Roadmap Signals
Feature development is active but secondary to stability fixes. Signals include:
*   **Deep Research:** Issue #205619 reports the portable engine returns partial/empty results for every model, suggesting a need for improved search orchestration.
*   **Session Management:** Issue #202699 requests that scheduled automations select inference models identically to interactive turns, improving consistency for automated workflows.
*   **Memory Trust Restoration:** Issue #203532 requests a CLI command (`openclaw memory trust <file>`) to reverse the provenance ratchet, addressing user frustration from #153426.

### 7. User Feedback Summary
Users are reporting two primary categories of dissatisfaction:
*   **Reliability Anxiety:** The dominant pain point is the instability of long-running gateways. Users on constrained hardware (ARM64, Docker with 4GB limits) frequently encounter OOM kills shortly after startup or during normal operation, rendering the system unusable for production without over-provisioning resources.
*   **Update Friction:** Several recent issues (#204226, #205402) detail update failures where the Gateway hangs at "Database engines" or "targetConfigConvergence," leaving users unable to upgrade their installations without manual intervention or repair commands that currently fail.

### 8. Backlog Watch
These long-standing or critically important items require maintainer triage:
*   **#153426 (Provenance Ratchet):** 26 comments. A fundamental bug where trusted memory files are permanently excluded. Despite being open since September, no fix PR is currently visible in the top active list, and it overlaps with the related #203532 and #204738.
*   **#103788 (Memory Pressure Degradation):** 6 comments. Describes a "degraded state" where tool responses return empty under memory pressure (1.8GiB RSS) before OOM, effectively paralyzing the agent's tool use while the process stays alive.
*   **#203442 (Update Activation Doctor):** 11 comments. A blocking bug where updating from 2026.11.4 to 2026.11.10-beta.1 causes the `openclaw doctor` activation step to fail with a "Plugin deepseek Doctor source must be prepared" error, blocking new installs.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem
**Data Snapshot:** 2026-11-26

## 1. Ecosystem Overview
The personal AI assistant open-source ecosystem is currently fragmented into specialized verticals, ranging from general-purpose agents (OpenClaw, Hermes Agent) to niche hardware controllers (PicoClaw, NanoClaw) and domain-integrated platforms (LobsterAI, Moltis). The landscape is characterized by a bifurcation between "core service" projects focused on reliability and scale, and "application" projects emphasizing UI/UX and connector integration. While activity levels vary wildly—from the hyper-active OpenClaw to the stagnant PicoClaw and ZeroClaw—the dominant trend is a shift from feature velocity toward stabilization, security hardening, and infrastructure maturity. No single project currently dominates the mindshare, indicating an evolving market where interoperability and modular architecture may supersede monolithic feature sets.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 673 | 222 merged/closed | v2026.10.34 (LTS Equivalent) | **Critical** (High volatility, severe leak backlog) |
| **NanoBot** | 7 | 23 | No releases | **Active** (Steady-state maintenance) |
| **Hermes Agent** | 20 | 23 merged/closed | v0.23.4+canary | **Active** (High iteration, pressing backlog) |
| **PicoClaw** | 0 | 4 merged | No releases | **Stagnant** (Maintenance phase, backlog clearing) |
| **NanoClaw** | 0 | 13 updated | v2026.11.0 | **Active** (Security/infrastructure focus) |
| **LobsterAI** | 0 | 25 merged/closed | No releases | **Active** (Strong momentum, stabilizing) |
| **Moltis** | 1 | 1 updated | None | **Low** (Single blocker issue) |
| **CoPaw** | 13 | 50 updated | 2.3.x series | **Active** (Rapid stability fixes) |
| **ZeroClaw** | 6 | 50 updated | Internal refactor | **High Momentum** (Major version boundary) |
| **IronClaw** | 0 | 0 | N/A | **Inactive** |
| **ZeptoClaw** | 0 | 0 | N/A | **Inactive** |

*Health Score Key: Critical = Systemic stability failure; Active = Balanced development/stability; Stagnant = Minimal change; Low = Single blocker; High Momentum = Rapid structural change.*

## 3. OpenClaw's Position
**Advantages vs Peers:** OpenClaw is the undeniable "core reference" of the ecosystem, possessing the deepest feature set and highest technical complexity. Its plugin/runtime architecture is more mature than NanoBot or Hermes Agent, and its scale dwarfs niche players like PicoClaw. **Technical Approach Differences:** OpenClaw employs a "gateway" model with sophisticated memory management and offline worker processes, distinguishing it from Hermes Agent's profile multiplexing or NanoBot's WebUI-first approach. **Community Size Comparison:** OpenClaw has the largest active community by issue volume (673), but this reflects a "critical mass of problems" rather than pure contributor growth. It attracts users experiencing instability, creating a high-engagement but high-friction environment compared to the smoother contributor flow in ZeroClaw or NanoClaw.

## 4. Shared Technical Focus Areas
*   **Memory & Resource Management:** A universal pain point. OpenClaw (#91588, #159662), Hermes Agent (session resumption), and ZeroClaw (cost limit bug #10635) all grapple with unbounded growth or misreported budgets.
*   **Security Hardening:** ZeroClaw (PR #4574/#4573), NanoClaw (PR #4574/4573), and CoPaw (JSON/Video memory guards) are actively mitigating injection risks, privilege escalation, and runtime crashes.
*   **Provider & Model Integration:** Hermes Agent (Plugin Catalog), ZeroClaw (Provider registry refactors #12454/12456/12457), and CoPaw (Custom decision model endpoints #8928) are standardizing how models are resolved and connected.
*   **Stabilization over Features:** PicoClaw, LobsterAI, and CoPaw are prioritizing bug fixes and localization (e.g., French locale in PicoClaw) over new functionality, indicating a maturing codebase.

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | NanoBot | PicoClaw / ZeroClaw |
| :--- | :--- | :--- | :--- | :--- |
| **Target User** | Power users / Self-hosters | Desktop power users / Plugin developers | CLI/WebUI users | Developers / System integrators |
| **Feature Focus** | Core service stability, gateway reliability | Voice chat, A2A multiplexing, plugin ecosystem | WebUI polish, SDK unification | Low-level hardware control, agent runtime |
| **Architecture** | Gateway-centric, worker processes | Profile multiplexing, Desktop client | Modular SDK, WebUI components | Config-driven, provider-refactor heavy |
| **Maturity Axis** | Feature-rich but stability-challenged | Rapid iteration, usability friction | Steady-state, media handling | Niche, infrastructure-focused |

## 6. Community Momentum & Maturity
*   **Rapidly Iterating:** **ZeroClaw** (50 PRs, structural refactors), **CoPaw** (50 PRs, stability cluster), and **NanoBot** (23 PRs, bug fixes) are showing the highest velocity. These projects are in "sprint" mode, pushing out fixes and refactors.
*   **Stabilizing:** **LobsterAI** (25 closed PRs, zero new issues) and **PicoClaw** (4 merged PRs clearing backlog) are in a "maintenance phase," indicating confidence in the codebase or a pause before the next release cycle.
*   **Critical Pressure:** **OpenClaw** and **Hermes Agent** are under significant backlog pressure. OpenClaw's 173 open issues and Hermes Agent's 100% open issue rate suggest these projects are struggling to triage volume, potentially leading to contributor fatigue.

## 7. Trend Signals
*   **The "Stability Tax":** The sheer volume of memory leak and cost-budget bugs across OpenClaw, ZeroClaw, and Hermes Agent suggests that building reliable, long-running AI agents is fundamentally difficult. The "it works in dev but crashes in production" pattern is pervasive.
*   **Infrastructure-First Development:** A clear shift toward CI/CD modernization (Dependabot bumps, container image refreshes in NanoClaw/ZeroClaw) and typed provider registries (ZeroClaw #12454/12456/12457). The "plumbing" of agent development is becoming as important as the "brain."
*   **Modularity & Extensibility:** Projects are focusing on pluggable architectures (OpenClaw plugins, Hermes Agent plugins, CoPaw custom endpoints) to manage complexity, rather than building monolithic all-in-one assistants.
*   **Usability Friction:** Issues like Hermes Agent's voice chat silence (#143512) and LobsterAI's DingTalk cards (#3211) highlight that "good enough" AI functionality is not enough; polish in UX, localization, and channel-specific integrations (Feishu, DingTalk) is a key differentiator for user adoption.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**2026-11-26**

## 1. Today's Overview
NanoBot maintains a healthy development pace with 23 PRs merged or closed and 7 active issues in the last 24 hours. The project shows strong momentum in WebUI refinements and SDK unification, though architectural challenges around media handling and cross-platform stability persist. Activity is evenly distributed between bug fixes (13) and new features (10), indicating a mature codebase approaching steady-state maintenance.

## 2. Releases
No new releases were published today. The project remains on its current version with no breaking changes introduced in the last 24 hours.

## 3. Project Progress
**23 PRs** were updated in the last day, with 20 merged/closed and 3 remaining open. Notable merges include:
- **#6804**: Fix for rendering bare `<br>` tags in Markdown table cells, closing issue #6803.
- **#6798**: Separation of foreground/background session capacity in the WebUI executor, improving CLI responsiveness.
- **#6797**: Improvement to omit empty archive summaries from system prompts.
- **#6716**: Security hardening to reject malformed hostnames before DNS resolution.

Three open PRs show significant recent activity: #6323 (edit/resend messages), #6296 (parallel tool call handling), and #6789 (SDK execution unification).

## 4. Community Hot Topics
The most discussed issue is **#6801** (@all mentions waking bot in Feishu broadcasts, 2 comments). This reveals a critical channel-specific mention handling bug where `group_policy: "mention"` causes bots to respond to `@_all` announcements they weren't addressed in.

**#6805** (large images fail silently, 1 comment) highlights a vision provider resilience issue where 502 errors trigger silent retries without the original image data, prompting requests for configurable max image sizes.

**#6807** (Hebrew localization & bidirectional chat, 1 comment) is notable as the entire workflow—from architecture to translations—was AI-agent assisted, signaling potential AI-augmented development patterns.

Top PRs by recency include #6804 (bug fix), #6789 (SDK refactor), and #6798 (executor capacity split).

## 5. Bugs & Stability
**Critical:** Issue **#6801** describes a Feishu broadcast @all bug where bots wake and produce spurious replies on announcements. Root cause identified as one line in the Feishu handler.

**High:** Issue **#6805** addresses silent failures with large inbound images (502 errors from providers), causing retries without original image data. No fix PR currently exists.

**Closed today:** #6803 (Markdown table `<br>` display), #6804 (bare HTML line breaks), #6797 (empty archive summaries), and #6716 (hostname security) all resolved stability issues.

## 6. Feature Requests & Roadmap Signals
**#6806** requests an option to auto-convert long pasted text into workspace files instead of inlining it in messages—addressing conversation pollution from logs/configs.

**#6802** proposes Lexmount Web Fetch as an optional reader for `web_fetch`, expanding browsing capabilities beyond Jina Reader.

**#6807** (Hebrew localization) and **#6723** (auto-undo for topic deletion) suggest ongoing UI/UX internationalization and safety features.

Predicted near-term focus: improved media handling (vision/image sizing), enhanced WebUI text handling, and continued SDK unification.

## 7. User Feedback Summary
Users report pain points with large image processing (silent 502 failures), mention handling in group chats (unintended bot wakeups), and conversational clutter from inline long text pastes. The Feishu @all issue (#6801) represents a fundamental channel semantics bug affecting group chat usability. Positive momentum comes from rapid bug cycling (4+ fixes in last 24h) and thoughtful executor architecture improvements.

## 8. Backlog Watch
**#6801** (Feishu @all) and **#6805** (vision image sizing) require maintainer triage—both created on 2026-11-25 with zero upvotes but technical complexity. **#6323** (edit/resend messages, created 2026-10-20) has been open over a month with no reviews, needing maintainer attention. **#6296** (parallel tool calls, created 2026-10-19) also pending review. These three items represent the most significant backlog items requiring decision or action from maintainers.

---
*Data source: github.com/HKUDS/nanobot (snapshot: 2026-11-26)*
*Issues: 7 updated (5 open/active, 2 closed)*
*PRs: 23 updated (3 open, 20 merged/closed)*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest
**Date:** 2026-11-26

## 1. Today's Overview
Hermes Agent exhibits a day characterized by rapid iteration and volume. A total of 20 issues were updated in the last 24 hours, all remaining open, and 50 PRs were processed, with 23 merged or closed. The project released a canary build (v0.23.4+canary.20261125T064800Z) on November 25. The activity level is high, indicating active development and a pressing backlog of issues, though the 100% open issue rate suggests a need for increased triage and merging capacity.

## 2. Releases
A single new release was published: **Hermes Agent v0.23.4+canary.20261125T064800Z** on November 25, 2026. While the full changelog for this specific canary build is not itemized in the data beyond its version string, its existence marks the head of the development branch. No breaking changes or migration notes are provided in the data for this build.

## 3. Project Progress
Today saw significant progress in the **Plugin Catalog**, with 13 new plugins added or updated, including `lavish-status`, `mergeable`, `logbuch`, and `kaizen-views`. Infrastructure improvements were also merged, notably **PR #160330** ("one listener per gateway, multiplexed profiles mount at /p/"), which resolves a critical A2A conflict where multiple profiles caused port binding collisions. **PR #157011** fixed CLI listing drift, ensuring the plugin loader matches the command output. Additionally, **PR #160357** improved Desktop usability by supporting Unicode slash queries (e.g., `/두레이`).

## 4. Community Hot Topics
The most active discussions center on **Desktop stability and voice features**.
*   **Issue #143512** (3 comments): Reports that live voice chat replies are never spoken in chained mode, a critical usability bug for the Desktop app.
*   **Issue #156256** (2 comments): Critiques the discoverability of the spoken-reply toggle in the Desktop composer.
*   **PR #160330** (0 comments): A technical fix for A2A multiplexing that is essential for users running multiple profiles.
*   **PR #160357** (0 comments): A usability fix for non-ASCII slash commands.

## 5. Bugs & Stability
Stability concerns are prevalent, particularly regarding **Session Resumption** and **A2A Timeouts**.
*   **Issue #160360** (0 comments, newest): Reports that named profiles moved to a multiplexer fail to resume with "storage_unavailable" due to a route mismatch introduced in v0.23.3.
*   **Issue #159438** (8 comments): A severe bug where if the gateway dies mid-command, resumed sessions re-run the terminal command, potentially causing duplication or errors.
*   **Issue #109089** (2 comments): A persistent timeout issue where `a2a_call` consistently times out at 420s regardless of configured peer timeouts.
*   **Fixes exist** for compaction behavior (**PR #146902**) and A2A reply timeouts (**PR #145789**), though the latter notes replies are still discarded.

## 6. Feature Requests & Roadmap Signals
Feature requests highlight a push for **Persistent Configuration** and **Desktop Customization**.
*   **Issue #141496** requests persistent GUI controls for context length and compaction, indicating users want finer control over large context windows (256K tokens) without premature compaction.
*   **Issue #160353** proposes "layout presets" to save and restore desktop tile arrangements (e.g., Kanban pages).
*   **Issue #160355** requests exposing TLS certificates for Telegram webhooks, signaling a move toward easier production deployment.

## 7. User Feedback Summary
Users are experiencing a mix of **high-power usage** and **usability friction**.
*   **Satisfaction:** The plugin ecosystem is expanding rapidly, with numerous new catalog entries added today, enriching the Hermes Desktop experience.
*   **Dissatisfaction:** The Desktop voice chat feature (#143512) is reported as "silently broken," and the spoken-reply control (#156256) is "hard to discover." Additionally, Windows users face artifact rendering crashes (#160359) when handling large volumes of data, and profile management issues (#160360) break expected workflows.

## 8. Backlog Watch
Several critical items require maintainer attention.
*   **Issue #160359** (0 comments): A "hard-exit" crash on Windows when clicking Artifacts with ~33k records—needs immediate investigation for pagination or performance optimization.
*   **Issue #160354** (0 comments): A2A timeout and log path settings are not profile-scoped under the multiplexed gateway, likely causing cross-profile interference.
*   **Issue #160199** (2 comments): A test failure regarding manifest probing when the checkout resides inside `~/.hermes`, which may indicate a path resolution bug affecting installation setups.
*   **PR #160253** (0 comments): A fix for session route deletion when plugins are late-registered; merging this would prevent conversational state loss for plugin platform users.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

**PicoClaw Project Digest**
**Date:** 2026-11-26
**Repository:** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

### 1. Today's Overview
The PicoClaw project shows signs of consolidation rather than active feature development. With zero new issues or releases generated in the last 24 hours, the project has entered a maintenance phase. The most significant activity comes from the merging of four Pull Requests, which synthesized fixes from a backlog of older open PRs (notably #1312, #1311, and #1308). This suggests the core development team is focusing on stabilizing the codebase and integrating previously deferred contributions, resulting in a stable but stagnant state regarding new functionality.

### 2. Releases
No new releases were published today. The latest activity consists of Pull Request merges targeting the development branch. Given the lack of a "Latest Releases" entry and the nature of the merged PRs (fixes and locale additions), no breaking changes or migration notes are applicable at this time.

### 3. Project Progress
Today’s progress was defined by the merging of four Pull Requests:
*   **PR #1560:** Merged fixes from PRs #1312, #1311, and #1308. These merges likely addressed core functionality bugs or compatibility issues that had been pending since March 2026.
*   **PR #1555:** Merged fixes from PRs #1390, #1389, #1383, and #1381. This batch suggests a focused effort to resolve a cluster of related issues, possibly related to the web interface or core library stability.
*   **PR #1558:** Merged fixes from PRs #1344, #1342, #1341, and #1331. Similar to the above, this indicates a "sweep" of the backlog to clear older pull requests.
*   **PR #3467:** Added a complete French UI locale to the web launcher, marking the first significant internationalization effort for the project's frontend.

### 4. Community Hot Topics
The most active discussion today centers on the French localization effort (PR #3467). While the PR has zero comments, its inclusion in the merge queue indicates a growing community demand for accessibility and multi-language support. The merging of older PRs (#1312, etc.) highlights a need for better merge hygiene and review processes, as these fixes waited several months before integration. The overall lack of new Issues suggests the user community is currently in a quiet period, possibly waiting for the stabilization implied by these merges.

### 5. Bugs & Stability
The merged PRs (#1560, #1555, #1558) collectively represent a significant stability update. By integrating fixes from PRs dating back to March 2026, the project has addressed a backlog of reported bugs. Specifically, the merges likely resolved crashes or regressions that were blocking users. As no new Issues were opened today, there are currently no active, unreported bugs; the "Bugs & Stability" status is currently "Clearing Backlog."

### 6. Feature Requests & Roadmap Signals
There are no new feature requests documented in Issues today. However, the merge of PR #3467 (French locale) signals a roadmap shift towards internationalization and user experience (UX) polishing. The lack of new feature PRs suggests the roadmap is currently focused on "bug squashing" and localization rather than groundbreaking new hardware or software features. Users can predict the next version will likely include these integrated fixes and the new French language support.

### 7. User Feedback Summary
User sentiment, inferred from the PR merge activity, appears to be one of patience and anticipation. The community seems satisfied with the project's direction but is eager for the resolution of long-standing issues. The addition of a French locale is a positive signal of the project's commitment to supporting a global user base, moving beyond an English-only utility. The primary pain point appears to be the delay in merging contributory fixes, which may have frustrated external contributors.

### 8. Backlog Watch
Several high-impact PRs merged today had been open since March 2026:
*   **PR #1312, #1311, #1308** (merged into #1560)
*   **PR #1390, #1389, #1383, #1381** (merged into #1555)
*   **PR #1344, #1342, #1341, #1331** (merged into #1558)

Additionally, **PR #3467** (French UI locale), created on 2026-11-10, was successfully merged, demonstrating the maintainers' responsiveness to community i18n requests. Maintainers should monitor the remaining open PRs to ensure the backlog does not reaccumulate.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

**NanoClaw Project Digest**
**Date:** 2026-11-26
**Source:** [GitHub Repository](https://github.com/qwibitai/nanoclaw)

### 1. Today's Overview
NanoClaw shows moderate daily activity with 13 pull requests updated in the last 24 hours, though no new issues were opened. The project remains in an active development state focused on security hardening and infrastructure updates. The most significant activity stems from security-focused PRs (#4574, #4573) and a continuous image refresh pipeline, indicating a mature project balancing feature development with critical security maintenance.

### 2. Releases
No new releases were published today. The latest release remains `v2026.11.0`, with a series of hardened container images being continuously refreshed (most recent: `v2026.11.0-20261125T0659`). There are no breaking changes or migration notes associated with today's updates, as the project focuses on incremental security patches and dependency bumps.

### 3. Project Progress
The most significant progress today involved **security hardening** and **dependency management**:
*   **Security Enforcement:** PR #4574 validates apt and npm package names in the CLI and image builder, moving regexes into shared helpers to prevent injection risks. PR #4573 enforces session ownership and host boundaries on container outbound edits, preventing compromised containers from spoofing host-authored approval cards.
*   **Bug Fix:** PR #4572 resolves a message loss issue where messages arriving precisely as an idle container stops are now properly reconciled.
*   **Infrastructure:** A Dependabot PR (#4308) bumped `actions/checkout` from 4.4.0 to 7.0.1, updating the CI infrastructure.

### 4. Community Hot Topics
The most discussed items are the security-focused PRs. **PR #4574** addresses the validation of package names, a critical need for any system building containers or executing commands externally. **PR #4573** deals with the complex boundary between trusted host and untrusted containers, addressing the risk of privilege escalation or request hijacking. These topics reflect the project's current maturation phase, shifting from functionality toward robust, production-ready security boundaries.

### 5. Bugs & Stability
Bug activity is low but targeted. The primary stability fix is **PR #4572**, which prevents a message from being silently lost during the precarious transition of an idle container being stopped. No critical crashes or regressions were reported in new issues today. The existing backlog of closed image PRs (#4570, #4561, etc.) indicates a stable release cycle where agent images are consistently updated and hardened.

### 6. Feature Requests & Roadmap Signals
There are no new feature requests in the issue tracker today. The roadmap signals are dominated by **security and infrastructure**. The series of "agent-images" PRs suggests a roadmap focused on maintaining up-to-date, hardened base images for the agents. The dependency bump in #4308 signals a commitment to keeping the CI/CD pipeline modern.

### 7. User Feedback Summary
User feedback, as reflected in the PR activity, centers on **trust and reliability**. The security PRs (#4573, #4574) indicate users and maintainers are prioritizing the integrity of the host-containers interface. The image refresh pipeline provides confidence that the underlying agent environments are being actively maintained and patched, addressing the common pain point of stale dependencies in AI tooling.

### 8. Backlog Watch
**PR #4308** (Dependabot bump) is the primary backlog item requiring maintainer attention. Opened on 2026-11-09, it has been open for ~17 days and updates a core CI action. While Dependabot PRs are often automated, maintainers should review it to ensure the new `actions/checkout` v7.0.1 does not introduce breaking changes to the workflow syntax. Additionally, the open security PRs (#4573, #4574) are ready for review and merging to close the security gaps identified in the last 24 hours.

---
*Data snapshot taken on 2026-11-26. Project health assessment: **Active** - Security and infrastructure focus with steady CI maintenance.*

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

Here is the LobsterAI project digest for 2026-11-26.

### 1. Today's Overview
The LobsterAI project experienced a highly active development day on 2026-11-26, with 25 pull requests merged or closed and no new issues reported in the last 24 hours. The majority of activity is focused on refining the Desktop Sharing Hub (DSH) core, improving authentication flows for fresh installations, and expanding connector integrations (specifically NetEase Mail). With zero open issues and a steady stream of closed PRs, the project demonstrates strong maintainer momentum and a focus on stabilizing existing features rather than introducing disruptive new architecture.

### 2. Releases
No new releases were published today. The latest release history remains unchanged from the previous cycle.

### 3. Project Progress
Today’s merged PRs (24 closed, 1 open) highlight significant progress in three areas:
*   **DSH Stability & Reliability:** PR #3204 and #3210 address critical race conditions and session management. #3204 fixes write conflicts and duplicate sends when connections are interrupted, while #3210 restricts question filtering and rich IM replies to prevent unauthorized tool calls.
*   **Authentication & Access:** PR #3212 introduces a "forced login gate" for fresh installations, balancing security for new users with the preservation of guest/optional login for legacy and enterprise deployments.
*   **Connector & Feature Expansion:** PR #3209 integrates NetEase Mail into the connector market, enabling full email lifecycle management (browsing, reading attachments, drafting) within chats. Additionally, PR #3208 adds live model discovery across major providers (OpenAI, Anthropic, Google).

### 4. Community Hot Topics
The most discussed items today are the merged PRs listed above, all of which garnered significant attention due to their impact on core functionality.
*   **#3211 (Closed):** Fixes the DingTalk card body displaying as blank on iOS. This was a top priority for users relying on DingTalk integration.
*   **#3212 (Open):** The "forced login gate" proposal is currently open for community feedback, reflecting the project's effort to balance security with usability.

### 5. Bugs & Stability
The day was dominated by bug fixes rather than new bug reports (0 new issues).
*   **Critical:** PR #3204 resolves a "already owned by an active write handle" error that caused interrupted replies when the desktop app reconnected.
*   **Medium:** PR #3194 fixes a startup crash for profiles upgraded from remote-connect builds that had legacy owned agents.
*   **Low/Resolved:** PR #3211 specifically addresses the DingTalk blank card issue, which has been validated and closed.

### 6. Feature Requests & Roadmap Signals
Several PRs signal upcoming capabilities and roadmap direction:
*   **Plugin Ecosystem:** PR #3202 and #3207 introduce plugin management, version checks, and hot-update flows for DSH plugins, indicating a move toward a more extensible plugin market.
*   **AI Model Management:** PR #3208's live model discovery feature suggests a roadmap focus on helping users easily find and switch between compatible AI models across different providers.
*   **Authentication:** The enforcement in #3212 signals a trend toward stricter onboarding flows for new users.

### 7. User Feedback Summary
User feedback today centered on two main themes: **integration reliability** and **access control**.
*   **Integration Reliability:** The focus on DingTalk cards (#3211) and NetEase Mail (#3209) shows users prioritize seamless connectivity with established workplace tools. The successful validation of the DingTalk fix ("three rows, three columns table normal") indicates high user satisfaction when integrations work correctly.
*   **Access Control:** The introduction of the forced login gate (#3212) suggests a need to modernize onboarding while respecting the diverse deployment models (individual vs. enterprise) already in use.

### 8. Backlog Watch
*   **#3212 (Open):** This PR regarding the forced login gate for fresh installations is the primary item requiring maintainer attention and community review. Its open status is unusual given the high volume of closed PRs and may indicate a deliberate pause for design iteration or policy decision.
*   **#3208:** While closed, the live model discovery feature is a significant addition worth monitoring for future stability as the number of supported providers grows.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

Here is the structured digest for the Moltis project as of 2026-11-26.

### 1. Today's Overview
The Moltis project shows minimal activity today, with only a single open issue and a single open pull request updated in the last 24 hours. The project currently has no active releases, indicating a state of steady maintenance rather than rapid development. The low volume of updates suggests the core team may be focusing on stabilizing existing features or preparing for a larger release cycle. The overall health appears stable, though the single open issue regarding sandboxed PDF handling represents a significant functional blocker for users operating in containerized environments.

### 2. Releases
No new releases were published today. The latest release history is currently empty. Given the lack of new versions, the project appears to be in a maintenance phase, likely awaiting the merging of pending contributions or the resolution of critical blockers before tagging a new version.

### 3. Project Progress
Progress today is limited to one open Pull Request: **#1327** ("feat(voice): add Gemini speech-to-text provider"). This PR aims to integrate Google Gemini’s dedicated transcription model (`gemini-3.5-transcribe`) to support voice note transcription. This addresses a common pain point where users are forced to rely on the Google Cloud provider, which requires a Cloud API key and is often inaccessible for individual or hobbyist users. No PRs were merged or closed today.

### 4. Community Hot Topics
The most significant community activity centers on **Issue #1328** ("Agent cannot read PDF text in a sandboxed session"). With zero comments and zero reactions, the issue is freshly opened but highlights a critical usability friction point. Users attempting to run Moltis in Docker or Podman environments find the `Read` tool actively blocking PDF text extraction, returning an `unsupported_in_sandbox` error. This indicates a divide between host-side capabilities and sandboxed execution environments.

### 5. Bugs & Stability
The primary stability concern today is **Issue #1328**. The bug is categorized by its severity: it renders a core functionality tool (`Read`) inoperable for a specific deployment mode (sandboxed/Docker/Podman). Currently, there is no associated fix PR; the issue description notes that text extraction only runs on the host, suggesting a architectural limitation where sandboxed sessions lack the necessary libraries or permissions to process PDFs locally.

### 6. Feature Requests & Roadmap Signals
The open Pull Request **#1327** serves as the primary roadmap signal for the near future. By adding a Gemini STT provider, the project is signaling an intent to diversify its voice input capabilities beyond the Google Cloud ecosystem. This move likely targets users who prefer Google AI Studio keys or seek potentially lower-latency/newer model variants compared to the established Google Cloud Speech-to-Text offering.

### 7. User Feedback Summary
User feedback, though minimal in volume today, reveals a dichotomy in the user base. On one hand, there is demand for expanded AI provider support (evidenced by PR #1327 for Gemini). On the other hand, there is reported dissatisfaction regarding the sandboxing experience. The inability to process PDFs in a sandboxed session creates a significant workflow disruption for users prioritizing security and isolation, suggesting a need for either a sandbox-compatible PDF handler or a clearer communication of limitations.

### 8. Backlog Watch
**Issue #1328** is the primary backlog item requiring maintainer attention. Created and updated today, it sits at the top of the issue queue. Given that it blocks a core tool in sandboxed environments—which are increasingly standard for AI agent deployments—it requires a prompt technical decision: either implement a headless PDF extraction method compatible with containers or document the sandbox limitations explicitly to manage user expectations.

**Pull Request #1327** also warrants watch status. While it adds valuable functionality, the disparity between the "google" (Cloud) and "gemini" (AI Studio) providers mentioned in the summary suggests a need for consistent documentation and key-management support to ensure the new provider is as accessible as the existing one.

---
**GitHub Links:**
*   **Issue #1328:** [moltis-org/moltis Issue #1328](https://github.com/moltis-org/moltis/issues/1328)
*   **PR #1327:** [moltis-org/moltis PR #1327](https://github.com/moltis-org/moltis/pull/1327)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the project digest for CoPaw (QwenPaw) for 2026-11-26.

### 1. Today's Overview
As of 2026-11-26, CoPaw (QwenPaw) is in an active development phase with 13 issues updated in the last 24 hours. The project shows high velocity, with 50 PRs updated recently, indicating a push toward stabilizing the 2.3.x series and preparing features for the Platform Web App integration. The issue count remains low (13 active), with a healthy mix of bug fixes and feature implementations. The most pressing narrative revolves around "video_memory" segmentation bugs and JSON handling stability, suggesting a focus on reliability for media processing pipelines.

### 2. Releases
No new releases were published today. The latest activity centers on PRs targeting the upcoming 2.3.1 and 2.4.0 versions. Users should expect incremental stability improvements rather than major version shifts at this time.

### 3. Project Progress
Significant progress was made on video memory and JSON handling stability. Three critical bug fixes were merged today:
*   **PR #8932** ("fix(video_memory): cap folded short-tail segments at max_scene_sec in plan_segments"): Resolves the issue where `plan_segments()` could return segments longer than `max_scene_sec`.
*   **PR #8933** ("fix(video_memory): coerce root themes to str & guard null in merged_graph_payload"): Fixes crashes in `merged_graph_payload()` when root themes or key entities are null or non-strings.
*   **PR #8917** ("fix(video_memory): scan for longest valid JSON in extract_json"): Prevents `JSONDecodeError` by correctly handling trailing prose brackets in JSON extraction.

Additionally, PR #8927 implemented timing guards to avoid test flakes during successful shutdowns.

### 4. Community Hot Topics
The most discussed items center on UI/UX and integration:
*   **Issue #8848** (2 comments): A user complaint that the "compression failed" error message suggests using `/clear`, which risks user data loss. This highlights a need for better UX messaging regarding context preservation.
*   **PR #8793** (0 comments): A large "XXXL" feature to add Platform-backed Web App access to local QwenPaw via QR code scanning, indicating the project's direction toward cross-device synchronization.
*   **PR #8928** (0 comments): A first-time contributor friendly addition to support custom decision model endpoints, reflecting an open-door policy for extensibility.

### 5. Bugs & Stability
Today saw a cluster of stability fixes in the `video_memory` and `json_utils` subsystems:
*   **Critical:** Issue #8930 and #8918 (both updated today) report that `plan_segments()` can return segments exceeding `max_scene_sec`, potentially causing timeline desynchronization in video processing.
*   **Medium:** Issue #8931 reports that `merged_graph_payload()` crashes on null root themes/entities.
*   **Low:** Issue #8888 describes a transcript jumping bug in the Console when content height changes, affecting the user interface reliability.
*   **Fixes Exist:** All mentioned bugs have corresponding open PRs (#8932, #8933, #8917) ready for merge, demonstrating rapid triage.

### 6. Feature Requests & Roadmap Signals
Feature requests today focus on integration and configurability:
*   **Custom Decision Models:** PR #8928 allows users to add custom decision model endpoints via the Settings UI, moving away from hardcoded defaults.
*   **Header Configuration:** Issue #8929 requests a form-based UI for MCP header authentication, moving away from raw JSON editing to improve user friendliness.
*   **Telegram Forum Isolation:** PR #8827 (closed/updated recently) aimed to isolate agent sessions by Telegram forum topic, suggesting a need for multi-group management.

### 7. User Feedback Summary
User feedback indicates a mix of frustration with error handling and appreciation for new integration features.
*   **Pain Point:** The `/clear` suggestion in compression failures (#8848) is viewed as risky, as it may erase important conversation context.
*   **Satisfaction:** The active PR #8793 for Web App QR login is generating positive anticipation for seamless device switching.
*   **Usability:** Users are requesting more intuitive configuration interfaces (e.g., header forms in #8929) rather than editing raw configuration files.

### 8. Backlog Watch
Several important items require maintainer attention to keep the backlog clean:
*   **Issue #8727** (Updated today): A critical bug regarding the Responses continuation summary failing when a model's default reasoning consumes the 4000-token output budget. This remains open and impacts the core "Reasoning" functionality.
*   **Issue #8919** (Re-filed as #8930/#8931): The video_memory segmentation and merging crashes are a recurring theme; while PRs exist, the sheer volume of related issues (#8306, #8342, #8377) suggests a deep-rooted architectural complexity in media handling.
*   **PR #8586** (Updated today): A large refactor to unify session configuration for ACP and native execution. While merged activity is high, the complexity of this change requires validation to ensure it doesn't introduce regression in existing workflows.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest - 2026-11-26

## 1. Today's Overview
ZeroClaw remains in active development with significant recent momentum. The project saw 6 issue updates and 50 PR updates in the last 24 hours, indicating high maintainer activity. Five issues remain open, with four marked as "in-progress" or "accepted" and high severity. The PR merge rate is brisk at 6 merged/closed PRs, while 44 open PRs await review, reflecting a healthy contribution pipeline. No new releases were published today, but the volume of structural changes (config, providers, runtime) suggests a major version boundary is approaching.

## 2. Releases
No new releases were published today. The latest activity centers on internal architecture and provider refactors rather than consumer-facing version bumps. Users should expect the next release to incorporate the V5 configuration schema changes currently in PR #12448 and the provider registry domain work in PR #12454.

## 3. Project Progress
Six PRs were merged or closed today, advancing several key areas:
- **Provider normalization**: PR #12457 introduced nested registry reflection and input normalization for the configuration system.
- **Provider separation**: PR #12456 split chat connection and timeout construction across multiple LLM providers (OpenAI, Anthropic, OpenRouter, etc.).
- **Memory embedding**: PR #11893 (closed) implemented configurable query prefixes for instruction-tuned embedding models.
- **Runtime cost override**: PR #11589 implemented the `cost.allow_override` flag, allowing operators to bypass exceeded cost limits without daemon restart.
- **MCP local configuration**: PR #12275 exposed local configuration controls with deferred writes via an stdio MCP bridge.
- **Tool cleanup**: PR #12678 removed the deprecated `gemini_cli` coding tool following Google's shutdown of the service.

## 4. Community Hot Topics
The most discussed items today center on provider stability and configuration:

- **PR #12457** (feat: nested registry reflection) and **PR #12456** (separate chat connection/timeout) by NiuBlibing are the most substantial open PRs, reflecting the project's push toward a unified, typed provider registry. These are stacked dependencies, indicating a major refactor of how capabilities and models are resolved.
- **Issue #11554** (path-marker image re-sending) remains active with 5 comments, addressing a chronic UX bug where older images are re-described as "new" in multi-turn conversations across Signal, Telegram, and Discord.
- **Issue #12707** (tracker: daemon-held OIDC refresh grants) was opened yesterday and already updated today, coordinating the implementation of ADR-017 for keeping device sessions alive via IdP refresh—critical for continuous agent operation.

## 5. Bugs & Stability
Three bugs with "high" or "medium" severity were updated today, with one carrying significant runtime implications:

- **Issue #10635** ([bug] Runtime profile cost limit does not reflect effective global daily budget) is the most critical stability issue. A runtime profile can report `max_cost_per_day_cents = 4294967295` (effectively unbounded), while agent turns are still rejected after the process-wide cost ledger exceeds $10.00. This S2 bug carries "risk: high" and has 5 comments; a related PR #11589 attempts to let operators override exceeded limits, but the core budget reflection bug remains open.
- **Issue #11554** (earlier path-marker images re-sent on every later turn) is a medium-severity UX bug affecting image channels, with 5 comments. No fix PR is merged, but the issue is well-understood.
- **Issue #12719** (test timing window on macOS) is a CI stability issue with a 200ms probe delay that macOS runners cannot reliably meet. This is a test infrastructure bug, not a runtime bug, but it blocks reliable CI for tunnel functionality.

## 6. Feature Requests & Roadmap Signals
Several large-scale features are in advanced staging, signaling the project's roadmap:

- **Colony agent workspace** (PR #11560): Adds a blueprint canvas for reusable Queen-led teams, agent selection, recurring prompts, and room connections. Created in October, it remains open and stacked under the broader runtime/configuration refactor.
- **Goal V1 proposal series**: PRs #11883 and #11884 (draft proposal 6/12 and 7/12) are implementing Goal controls at turn boundaries and RPC exposure. These are cumulative, draft proposals that will likely shape the next major release's autonomy and command-layer architecture.
- **Provider protocol sharing** (PR #12454): Introduces typed provider registry domain types for connections, capabilities, and model references—foundational for the V5 configuration freeze in PR #12448.

## 7. User Feedback Summary
User pain points today cluster around three themes:

- **Cost governance**: The cost limit bug (#10635) represents a fundamental disconnect between profile-level settings and the process-wide ledger, frustrating users who set daily budgets but still get turned away. The `cost.allow_override` flag (PR #11589) is the community's attempted mitigation.
- **Image handling continuity**: Issue #11554 highlights a persistent frustration with image markdown markers being re-sent and re-described, breaking the "memory" of what has already been shown. This affects the primary multimodal use case for many users.
- **Provider compatibility and stability**: The series of provider refactors (#12454, #12456, #12457) indicates the project is actively modernizing its LLM integration, but the stacked, high-risk nature of these PRs means users on the bleeding edge may face breakage until V5 stabilizes.

## 8. Backlog Watch
Several important items need maintainer attention:

- **Issue #10635** (cost limit bug): Open since September, still unresolved. With 5 comments and high risk, this is the top priority for a maintainer to triage or assign, as it affects the core economic model of agent operation.
- **PR #11560** (Colony agent workspace): Open since October with no merged status. This is a highly requested feature for team orchestration and should be reviewed to determine if it can land before the V5 configuration freeze.
- **Issue #12707** (OIDC refresh grants tracker): Opened yesterday but already updated, indicating rapid maintainer response. However, it is a coordination tracker dependent on ADR-017; maintainers should ensure the underlying design is finalized to prevent it from stalling.
- **PR #12457** (nested registry reflection): The largest open PR by scope, stacked after #12456. It is blocking several downstream provider and config changes; a maintainer review bottleneck may be slowing the entire V5 migration.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*