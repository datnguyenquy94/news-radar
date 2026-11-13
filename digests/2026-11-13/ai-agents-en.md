# OpenClaw Ecosystem Digest 2026-11-13

> Issues: 124 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-13 06:14 UTC

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
**Generated on:** 2026-11-13

## 1. Today's Overview
OpenClaw's engineering velocity remains exceptionally high, with 500 PRs updated in the last 24 hours (191 merged/closed, 309 open) and 124 issues triaged (79 open/active). The merge rate significantly outpaces the issue triage rate, indicating active development focus. Despite the volume of activity, zero new releases were published today, suggesting the team is prioritizing stabilization and incremental improvements over major version bumps. The project health appears robust, with a steady stream of fixes and features landing, though the high issue count suggests ongoing architectural refinements are needed to manage scale.

## 2. Releases
**No new releases were published today.**

The latest stable release remains `v2026.10.10-beta.3`, with the most recent commits targeting `main` but not yet tagged for a stable release. Users on older versions (e.g., `2026.10.6`, `2026.10.7`) may encounter known bugs fixed in later commits but not yet propagated to stable channels.

## 3. Project Progress
**500 PRs updated in the last 24 hours**, with 191 merged or closed.
*   **Sandbox & Gateway Stability:** PR #198128 ("keep agents running during atomic workspace snapshots") and #198132 ("Doctor and spawn-broker cleanup fail when host denies process-group signals") address critical infrastructure stability, preventing agent freezes and cleanup failures in sandboxed environments.
*   **Browser & UI Refinements:** Several browser panel fixes landed, including #197927 (fixing lag/stutter) and #198082 (preventing live view blanking). PR #197948 fixed Telegram nickname mention boundaries for the Tlon channel.
*   **Agent & Workflow Fixes:** PR #198127 fixed "steers missing the next request during preparation," while #198110 addressed web_fetch result wrapping in Code Mode. PR #198100 ensures session prefixes remain append-only across provider routes.
*   **Telegram & Matrix:** #198022 routes widgets back into private topic conversations, and #165824 fixes Matrix message burst handling.

## 4. Community Hot Topics
The most active discussions center on **agent persistence, session scaling, and cross-platform reliability**.

*   **#119720 (26 comments, 🦞 diamond lobster):** "Synchronous agent persistence and transcript maintenance block the Gateway event loop at scale." This P1 issue is the top thread, highlighting a fundamental performance bottleneck. The discussion references recent partial repairs (#140231, #138984) but indicates the problem persists at scale.
*   **#126950 (16 comments, 🦞 diamond lobster):** "Telegram: opaque callback payloads silently dropped for non-plugin callers." A Telegram-specific bug where `tgcb1:` prefixed callbacks are dropped because no plugin has registered the handler, causing silent message loss.
*   **#181459 (10 comments, 🦪 silver shellfish):** "3.5 GB agent DB makes startup a gamble." Reports that a 3.5GB database causes startup blocks (18s to 4-6 min) and leaves agents in an `UNAVAILABLE` state due to expired commit checkpoints.
*   **#185085 (8 comments, 🐚 platinum hermit):** Reports that `exec` completion wakes fail with `SESSION_DELIVERY_GENERATION_UNAVAILABLE` on stable `2026.10.7`, despite a fix existing on `main` since Oct 19.

## 5. Bugs & Stability
A significant cluster of stability bugs was reported today, many involving large databases or specific platform quirks.

*   **Critical / P1:** 
    *   **#181459:** The 3.5GB agent DB startup gamble is the most severe stability issue, causing crash-loops and `UNAVAILABLE` states.
    *   **#187355:** `openclaw message send` takes ~17s even with `--dry-run` and can run for minutes post-delivery.
    *   **#181120:** macOS Gateway stops responding with the main thread blocked closing a worker MessagePort.
*   **Regression & Platform Issues:**
    *   **#196199:** Since `2026.10.10`, native Codex helper completions fail to resume the parent, locking users out.
    *   **#195192:** Control UI chat composer missing in Safari 27.3 on every session (Chrome OK).
    *   **#196544:** Configured models without `maxTokens` silently get an 8192 cap, causing truncation mid-tool-call.
*   **Fix PRs:** #198128 and #198132 are the most relevant recent fixes targeting the sandbox and infrastructure stability bugs.

## 6. Feature Requests & Roadmap Signals
Feature requests today focused on **permissions scoping, model routing, and workflow automation**.

*   **#168389:** Request for a "Scoped 'own automations' permission" so agents can create/schedule jobs without full owner rights.
*   **#187264:** "Caller-scoped, same-conversation scheduling for non-owner channel requests" — enabling shared Slack users to persist checkpoints.
*   **#198119:** "feat: add caller-scoped personal reminders" — allowing linked non-owner Telegram users to create one-shot reminders.
*   **#150238:** Request for a "context budget / skip policy for Skill Workshop Experience Review on oversized sessions" to guard against foreground session context exhaustion.

## 7. User Feedback Summary
Users are reporting **real pain points around scale, platform compatibility, and workflow interruptions**.

*   **Scale & Data Growth:** The 3.5GB agent database issue (#181459) is a recurring theme, with users hitting startup timeouts and crash-loops as their agent histories grow. There is a clear need for better DB compaction, lazy loading, or checkpointing strategies.
*   **Platform Fragmentation:** Safari-specific UI bugs (#195192) and Telegram callback handling issues (#126950, #167320) indicate the Gateway and Control UI need more rigorous cross-platform testing.
*   **Reliability:** The "message send" delay (#187355) and the "opaque callback drop" (#126950) frustrate users relying on automated workflows, as they experience silent failures or long waits without clear feedback.

## 8. Backlog Watch
These long-unanswered or maintainer-need items require attention to unblock progress:

*   **#119720 (26 comments):** The top issue regarding Gateway event loop blocking. Despite linked PRs, the core scaling problem remains open and needs a maintainer-led design review.
*   **#181459 (10 comments):** The 3.5GB DB startup crisis. A fix is critical for any user with non-trivial agent histories.
*   **#141413 (9 comments):** macOS app omits auth tokens for local Gateways using `SecretRef`. This is a `P0` / `ux-release-blocker` blocking macOS deployment.
*   **#185085 (8 comments):** The `exec` completion wake failure on `2026.10.7`. The fix exists on `main` but has not been backported to the stable release branch, leaving stable users stranded.

### Data Sources
*   GitHub API: `openclaw/openclaw` Issues & Pull Requests (fetched 2026-11-13)
*   Metrics: 124 Issues updated, 500 PRs updated, 0 new releases.

---

## Cross-Ecosystem Comparison

### 1. Ecosystem Overview
The personal AI agent and assistant open-source ecosystem in late 2026 is characterized by a bifurcation between high-velocity core infrastructure projects and specialized, feature-focused assistants. Core frameworks like OpenClaw and ZeroClaw dominate with massive PR volumes, acting as foundational layers for agent orchestration, provider integration, and sandbox management. Meanwhile, niche projects such as NanoBot, PicoClaw, and LobsterAI concentrate on specific UI/UX refinements, platform-specific integrations (e.g., Discord, Telegram, macOS), and domain-specific workflows (e.g., PPT generation). The landscape is currently in a phase of intense stabilization, with significant engineering effort directed toward resolving scale-related bottlenecks, credential handling regressions, and cross-platform compatibility, rather than introducing paradigm-shifting features.

### 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Releases (24h) | Health Score* |
| :--- | :--- | :--- | :--- | :--- |
| **OpenClaw** | 124 | 500 | 0 | ★★★★☆ (High velocity, scale focus) |
| **ZeroClaw** | 4 | 48 | 0 | ★★★★☆ (Feature-forward, architectural depth) |
| **CoPaw** | 16 | 45 | 0 | ★★★☆☆ (Mature, stable release focus) |
| **NanoBot** | 3 | 18 | 0 | ★★★☆☆ (Polish & provider expansion) |
| **NanoClaw** | 3 | 12 | 1 Beta | ★★★☆☆ (Active beta cycle) |
| **PicoClaw** | 2 | 7 | 0 | ★★☆☆☆ (Transition/fork transition) |
| **LobsterAI** | 0 | 16 | 0 | ★★★☆☆ (Polish & platform fixes) |
| **Hermes Agent** | 4 | 50 | 0 | ★★★☆☆ (Installation & auth fixes) |
| **IronClaw** | 1 | 0 | 0 | ★☆☆☆☆ (Stagnant maintenance) |
| **Moltis / NanoClaw zepto** | 0 | 0 | 0 | N/A |

*\*Health Score is a qualitative assessment based on merge rate, issue resolution velocity, and release activity.*

### 3. OpenClaw's Position
OpenClaw occupies the de facto "core reference" position in this ecosystem. Its advantages over peers include **exceptional engineering velocity** (500 PRs in 24h) and a **robust, active community** that prioritizes incremental stabilization over major version bumps. Technically, OpenClaw distinguishes itself by addressing "agent persistence and session scaling" at the infrastructure level (e.g., Gateway event loop blocking), whereas competitors like ZeroClaw focus on provider contract extraction and NanoBot on UI polish. Community size is markedly larger for OpenClaw, evidenced by its high issue count (124) and the presence of long-standing, high-comment threads (e.g., #119720 with 26 comments), indicating it is the primary integration point for diverse agent implementations.

### 4. Shared Technical Focus Areas
Across the ecosystem, several cross-cutting technical needs emerge:
*   **Credential & Authentication Stability:** Issues persist across OpenClaw (#154707), PicoClaw (#3447), and Hermes Agent (#154707) regarding failed auth diagnostics and credential helper regressions post-upgrade.
*   **Cross-Platform UI/UX Consistency:** Bugs related to Telegram rendering (#4340, #126950), Safari compatibility (#195192), and macOS launch authorization (#3067) indicate a widespread need for rigorous multi-platform testing.
*   **Large-Scale Database & State Management:** The "3.5GB agent DB" crisis (#181459 in OpenClaw) and similar scale-related startup blockers are a universal pain point, driving demand for better compaction and checkpointing strategies.
*   **Provider & Model Interoperability:** Efforts to support multiple models per provider (ZeroClaw #9809) and integrate regional gateways (NanoBot #6647) highlight a shared need for flexible, schema-compatible LLM orchestration.

### 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | CoPaw | NanoBot | Hermes Agent |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Primary Focus** | Core infrastructure, sandbox/gateway stability | Agent delegation, Goal Mode execution, provider interoperability | Console orchestration, channel plugins, task accountability | Lightweight UI, Discord/Matrix integration, provider polish | CLI workflow, plugin catalog, session management |
| **Target User** | Framework developers, system integrators, large-scale deployments | Advanced users building complex multi-agent workflows | AI operators managing multi-channel workflows | Developers/builders seeking lightweight assistants | Users needing robust CLI installation and plugin management |
| **Technical Architecture** | High-volume PR pipeline; focus on sandbox atomicity and session scaling | "Goal V1 proposal" series; deep task contract extraction; write-only credential management | Session storage architecture; channel transport hardening; favicon/status refresh | Minimalist architecture; focus on web UI refinements and schema validation | Hybrid CLI/UI; focus on installation stability and catalog defaults |
| **Release Cadence** | Frequent incremental commits; no stable release in 24h | High merge volume; release candidate imminent | Beta series (`2.3.0b4`); stable release approach | No releases in period; focus on polishing existing v1.x | No releases; focused on polishing current iteration |

### 6. Community Momentum & Maturity
The ecosystem splits into three distinct activity tiers:
*   **Rapidly Iterating (High Velocity):** OpenClaw and ZeroClaw are in a state of constant, high-frequency change. OpenClaw’s 500 PRs in 24h and ZeroClaw’s 48 PRs indicate aggressive feature and fix shipping, though this comes with a higher volume of open issues and pending backlogs.
*   **Stabilizing & Polishing:** CoPaw, NanoBot, and LobsterAI show moderate activity focused on refining existing features, fixing platform-specific bugs (Safari, Discord, Telegram), and preparing for stable releases (e.g., CoPaw’s `2.3.0b4`).
*   **Stagnant/Maintenance Mode:** IronClaw and PicoClaw exhibit low activity. IronClaw is effectively in maintenance mode with only CI configuration updates, while PicoClaw is undergoing a community-driven fork takeover, signaling a transition period rather than active development.

### 7. Trend Signals
*   **Scale is the Primary Bottleneck:** The recurring "3.5GB DB" and "message send delay" issues across OpenClaw, CoPaw, and ZeroClaw indicate that the industry is hitting limits with current session management and state persistence strategies. Developers must prioritize architectural patterns for lazy loading, compaction, and checkpointing.
*   **Credential & Auth Fragility:** Post-upgrade credential helper failures and platform-specific auth diagnostic breakdowns (e.g., Anthropic/Azure confusion) are a critical reliability gap. The "write-only" credential management trend (ZeroClaw #12373/#12408) suggests a move toward tighter secret scoping for security and operational hygiene.
*   **Platform Fragmentation as a Cost Center:** The sheer volume of cross-platform UI bugs (Safari, Telegram, Discord, macOS) reveals that maintaining a consistent agent experience across diverse environments is a major engineering burden, driving the need for abstraction layers or platform-specific adapters.
*   **Goal Mode & Delegation as the Next Frontier:** The concentration of PRs on "Goal V1 proposals" (ZeroClaw) and "session binding/transport hardening" (CoPaw) signals that the community is shifting from basic tool-use toward complex, durable multi-agent delegation and lifecycle management.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Generated on:** 2026-11-13
**Source:** [github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. Today's Overview

NanoBot shows **moderate daily activity** with 18 PRs and 3 issues updated in the last 24 hours. The project merged 11 PRs while leaving 7 open, indicating a healthy contribution rhythm as the project approaches the end of the year. No new releases were published, suggesting maintainers are focusing on stabilizing the codebase rather than shipping new features. The mix of web UI refinements, tooling fixes, and provider integrations reflects an active effort to polish existing functionality ahead of potential year-end releases.

---

## 2. Releases

**No new releases published** in the last 24 hours. The project has not tagged a new version since the last digest period. With no release notes available, the current stable version remains whatever was last published. Users should monitor the repository's releases page for year-end updates, as the current activity pattern suggests preparation for a potential v1.x refresh.

---

## 3. Project Progress

**11 PRs merged/closed** today across diverse categories:

- **Web UI Polish (6 PRs):** Multiple improvements to the chat interface, including preventing math expressions from breaking code spans (`#6646`), fixing phantom reasoning on empty streams (`#6640`), reordering appearance settings (`#6639`), and preserving session caches during history revalidation (`#6636`). These indicate a focus on user experience stability.

- **Tooling & Schema Validation (2 PRs):** `#6648` closes the long-standing `#6485` issue by implementing proper jsonschema validation for tool arguments without coercion, fixing the `$ref`/`anyOf`/`oneOf` skipping bug that caused crashes on tuple-form parameters.

- **Refactoring & Infrastructure (3 PRs):** Sharing sandbox launch paths (`#6645`), adding PyPI trusted publishing workflow (`#6642`), and deriving Telegram command regexes from alias maps (`#6643`). These improvements reduce technical debt and improve maintainability.

---

## 4. Community Hot Topics

### Most Active Issues

- **#6632** [OPEN] *feat(discord): backfill recent thread history + optional startup presence* (1 comment, 0 👍)
  - **Link:** [#6632](https://github.com/HKUDS/nanobot/issues/6632)
  - **Analysis:** The Discord channel starts fresh sessions per thread, unable to read prior messages if threads predate the bot or after gateway restarts. This is a significant usability problem for long-running Discord communities where conversation history matters. The single comment suggests early discussion.

- **#6620** [OPEN] *Suppressed message-tool sends during internal turns return a success-phrased ack instead of an error* (1 comment, 0 👍)
  - **Link:** [#6620](https://github.com/HKUDS/nanobot/issues/6620)
  - **Analysis:** During heartbeat/internal turns, message-tool delivery is suppressed to funnel output through the post-run evaluator. However, suppressed `message` calls incorrectly return success acknowledgements to the calling agent, potentially causing the agent to believe messages were sent when they were actually suppressed. This could lead to silent message loss.

### Most Active PRs

- **#6646** [CLOSED] *fix(webui): prevent single-dollar math from crossing code spans* (0 comments, 0 👍)
  - **Link:** [#6646](https://github.com/HKUDS/nanobotPR #6646)
  - **Analysis:** Quick bug fix for the WebUI's math scanner consuming `$` characters inside code spans, which destroys formatting when sent to KaTeX.

- **#6648** [CLOSED] *fix(tools): validate arguments with jsonschema without coercion* (0 comments, 0 👍)
  - **Link:** [#6648](https://github.com/HKUDS/nanobotPR #6648)
  - **Analysis:** Critical fix for `#6485` - implements proper jsonschema validation that respects `$ref`, `anyOf`, `oneOf`, and tuple-form schemas. This directly addresses the tool parameter validation crash bug.

- **#6647** [OPEN] *feat(providers): add ShengSuanYun gateway* (0 comments, 0 👍)
  - **Link:** [#6647](https://github.com/HKUDS/nanobotPR #6647)
  - **Analysis:** New OpenAI-compatible gateway provider for ShengSuanYun (胜算云), expanding regional provider options for Chinese users.

---

## 5. Bugs & Stability

### Critical Bugs Reported Today

1. **#6620** - *Suppressed message-tool sends return success ack* (Open, 1 comment)
   - **Severity:** HIGH - Causes silent message loss during internal turns; agent incorrectly believes messages were delivered
   - **Status:** Bug reported; fix PR `#6648` addresses the underlying validation issue but may not fully resolve the suppression/acknowledgement mismatch

2. **#6485** - *Tool parameter validation silently skips $ref/anyOf/oneOf schemas* (Closed 2026-11-13)
   - **Severity:** HIGH - Causes crashes on MCP server parameter schemas; validation never resolves local `$ref` fragments
   - **Status:** **Fixed** by PR `#6648` merged today

### Stability Observations

- No critical crashes or regressions reported beyond the validation issue
- 7.3 MB JSON payload issue in subagent history (`#6634`) has been closed, indicating good performance maintenance
- The mix of open bugs (#6620, #6632) and closed fixes suggests active stabilization efforts

---

## 6. Feature Requests & Roadmap Signals

### New Provider Integration

- **#6647** - *Add ShengSuanYun gateway* (Open)
  - **Prediction:** Likely to be merged soon given no opposing comments; expands provider options for East Asian users

- **#5234** - *Integrate mst-python as metasearch provider* (Open since August, updated today)
  - **Prediction:** Strong candidate for next version; MST (Meta-Search Tool) with RRF aggregation provides comprehensive search coverage

### Execution & Sandbox Improvements

- **#6645** - *Share sandbox launch path with settings checks* (Open)
- **#6637** - *Share bounded HTTP redirects* (Open)
- **#6616** - *Centralize scoped file operations* (Open)
- **All three** reflect a roadmap focused on improving execution safety, sandbox management, and file operation scoping - likely prerequisites for future feature releases

### Discord & Channel Features

- **#6632** - *Discord thread backfill history* (Open) - Persistent request for better Discord integration
- **#6617** - *Correlate chat requests and cancel stale reconnects* (Closed) - Related channel stability work

---

## 7. User Feedback Summary

### Pain Points

- **Discord History Loss:** Users with pre-existing threads or gateway restarts cannot access conversation history, forcing agents to answer "blind" without context of prior decisions or replies
- **Message Suppression Confusion:** During internal turns, the success acknowledgment for suppressed messages creates false confidence about message delivery
- **Tool Validation Crashes:** MCP servers emitting union/typed parameters cause `validate_params` to crash due to unhandled `$ref`/`anyOf`/`oneOf` schemas
- **WebUI Formatting Bugs:** Single-dollar math scanning disrupts code span formatting, particularly affecting documentation and technical discussions

### Satisfaction Indicators

- Strong performance optimization work (the 7.3 MB JSON issue being resolved)
- Consistent web UI improvements showing attention to user experience details
- Active provider expansion (ShengSuanYun addition)
- Regular bug fixes and refinements rather than major breaking changes

---

## 8. Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention

| Issue | Status | Last Activity | Priority |
|-------|--------|---------------|----------|
| **#6632** | OPEN | 2026-11-12 | Medium - Discord thread history is a fundamental usability issue |
| **#6620** | OPEN | 2026-11-12 | High - Message suppression ack bug could cause silent data loss |
| **#6647** | OPEN | 2026-11-13 | Low-Medium - New provider integration, minor feature |
| **#6645** | OPEN | 2026-11-12 | Medium - Sandbox launch path refactoring, infrastructure |
| **#6616** | OPEN | 2026-11-12 | Medium - Scoped file operations, safety improvement |

### PRs Awaiting Maintainer Review

- **#6642** - Add trusted PyPI publishing workflow (Open since 2026-11-12)
- **#6643** - Derive Telegram command regexes from alias map (Open since 2026-11-12)
- **#6637** - Share bounded HTTP redirects (Open since 2026-11-12)
- **#6634** - Read saved task history by loaded turns (Closed 2026-11-12) - *Recently resolved*

### Recommendation

The maintainer team appears efficient with a healthy merge rate (11/18 PRs). The two open bugs (#6632, #6620) should be prioritized given their impact on core functionality (Discord usability and message reliability). The backlog of infrastructure PRs (#6642, #6645, #6616) represents good technical debt management that should be merged to unblock future feature development.

---
*Data snapshot taken on 2026-11-13. All links point to github.com/HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

### Hermes Agent Project Digest
**Date:** 2026-11-13

#### 1. Today's Overview
The Hermes Agent project shows high activity today, with 50 PRs merged or closed and 4 new issues opened in the last 24 hours. The merge rate is robust, indicating active development momentum. However, the day is dominated by urgent bug fixes and stability patches, particularly in the CLI installation flow and provider authentication. No new releases were published, suggesting the team is focused on polishing the current iteration rather than version bumps.

#### 2. Releases
No new releases were published today. The project remains on its current release cycle with zero new version tags.

#### 3. Project Progress
A significant cluster of merged PRs addressed installation and configuration stability. Key advancements include:
*   **CLI Stability:** PR #154832 fixed a critical issue where two Hermes installs on one machine would conflict, breaking tool stores due to outdated `facts.json`.
*   **Plugin Catalog:** PR #154858 introduced a major workflow change: catalog plugins marked `default: true` are now automatically installed and enabled in every home, reducing the need for manual bundle inclusion.
*   **Session Management:** PR #154807 resolved a desktop retry failure when a backend session is dropped, improving remote session robustness.
*   **Memory Tooling:** PR #113557 merged a fix for drifted memory pastes, enhancing the reliability of the terminal memory tool.

#### 4. Community Hot Topics
The most discussed issues reflect user pain points around authentication and platform-specific workflows:
*   **Anthropic Auth Bug (Issue #154707):** Currently the top active issue. Users report that when a `key_cmd` credential triggers a 401 error, Hermes incorrectly suggests `az login` (Azure Entra ID), confusing users who are using a custom `key_cmd` provider.
*   **Installation SIGKILL (Issue #154782):** A P2 blocker for fresh/slow machines. The Vite web-UI build is killed by a watchdog during the `install.sh` completion stage, causing intermittent installation failures.
*   **Billing/Usage Logic (Issue #154861):** A P2 bug regarding "Keep going on credits." Paid models are refused despite having positive pay-as-you-go credits when the daily usage window expires.

#### 5. Bugs & Stability
The bug surface today is concentrated in authentication and installation:
*   **Critical:** The Anthropic 401 diagnostic help text is fundamentally broken for non-Azure credentials (Issue #154707). A fix PR (#154860) exists and closes this issue, suggesting the maintainers are responsive.
*   **Medium:** The `install.sh` SIGKILL watchdog issue (#154782) poses a significant friction point for new users on resource-constrained machines.
*   **Low/Feature-like:** The billing logic refusal (#154861) is causing paid model access issues for Plus users, though a technical root cause is still being analyzed.

#### 6. Feature Requests & Roadmap Signals
Analysis of today's PRs signals a focus on **automation** and **catalog integration**:
*   **Default Plugins:** The introduction of `default: true` for catalog plugins (#154858) indicates a roadmap shift toward "batteries included" defaults, aiming to reduce the "empty home" friction users experience after install.
*   **Session Persistence:** Fixes around session tiles and desktop retry logic (#154807, #154865) suggest a push for more reliable remote and local session bridging.
*   **Memory & Context:** Continued investment in the memory tool and delegate auto-resume (#154353) suggests a roadmap focused on long-horizon agent continuity.

#### 7. User Feedback Summary
User feedback today highlights a tension between **power and usability**.
*   **Satisfaction:** The merge of the memory tool fix and the plugin catalog defaults is likely to be well-received, as it reduces manual configuration overhead.
*   **Dissatisfaction:** The Anthropic auth error message (#154707) and the intermittent install failures (#154782) are sources of immediate frustration. Users on slow machines or using non-standard credential providers feel "unsupported" by the error messages and installation guardrails.

#### 8. Backlog Watch
Several items require maintainer triage to prevent stagnation:
*   **#154264 (Plugin Seams):** Open since Nov 12. This is a structural issue regarding token routes and environment management for terminal/backend plugins. With zero comments but high technical complexity, it requires a maintainer to review the "token routes" and "approval state" architecture.
*   **#154782 (Install SIGKILL):** Open since today. Given the P2 severity and the fact it blocks fresh installs, this should be a priority for the CI/CD maintainer to adjust the watchdog thresholds or build ordering.
*   **#154861 (Billing Logic):** Open since today. The maintainer needs to verify the interaction between "daily limits," "pay-as-you-go credits," and the "Keep going on credits" toggle to resolve the 402 error logic.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoCrawl Project Digest
**Generated on:** 2026-11-13
**Source:** [github.com/sipeed/picocrawl](https://github.com/sipeed/picocrawl)

## 1. Today's Overview
PicoClaw exhibits moderate activity with a critical structural shift underway. In the last 24 hours, the project merged 7 closed PRs and closed 2 issues, while 4 issues and 11 PRs remain open. Most notably, a community-driven fork takeover is in progress: Issue #3417 reveals that the original maintainer has stepped back, and a new active fork at `afjcjsbx/picoclaw` is attracting community interest to ensure project continuity. This transition may impact roadmap stability in the short term, but the underlying codebase remains active with dependency updates and bug fixes.

## 2. Releases
No new releases were published today. The project has not tagged a new version recently, reflecting an active development cycle focused on bug fixes and dependency maintenance rather than feature milestone releases.

## 3. Project Progress
Seven PRs were merged or closed today, spanning dependency bumps, bug fixes, and build improvements:
- **#3452**: Fixed a deadlock in the Discord bot gateway, restoring message flow.
- **#3447**: Resolved an Anthropic token-auth failure for `claude-haiku-5-5` thinking-always models.
- **#3457/#3458/#3459/#3460**: Automated dependency updates for `golang.org/x/time`, `modernc.org/sqlite`, `line-bot-sdk-go/v8`, and `azure-sdk-for-go/azidentity`.
- **#2976**: Fixed a Makefile parsing error related to spaces in Go version strings.
- **#649**: Optimized in-memory caching and LRU implementation in the SearchCache for improved memory performance.

## 4. Community Hot Topics
The most discussed issue is **#3417** (5 comments), where the original maintainer announces the fork takeover to `afjcjsbx/picoclaw`. This highlights a community-driven need for project maintenance and reassurance. Issue **#3454** (3 comments) reveals user friction with model identifier validation—specifically, the WebUI lowercasing upstream model prefixes (e.g., `ACME/gpt-4o-mini` → `acme/gpt-4o-mini`), which breaks case-sensitive upstream API expectations. This suggests a tension between local UX normalization and upstream API compatibility.

## 5. Bugs & Stability
Two closed issues address stability regressions:
- **#3453**: WebUI falsely reports "restart required" after gateway hot-reload—an UI state desynchronization bug that misleads users into unnecessary restarts.
- **#3451**: Request for Android API 19 x86_32/x86_64 support, targeting legacy SBCs and emulators. No crash reports were recorded today, but the dependency bumps (#3457–#3460) aim to stabilize the Go runtime and SQLite layer.

## 6. Feature Requests & Roadmap Signals
The open PR #3451 signals a demand for broader Android x86 compatibility, potentially expanding PicoClaw’s footprint on low-cost hardware. The model identifier casing issue (#3454) may prompt a config-level toggle to disable lowercasing for advanced users. Given the fork activity (#3417), roadmap items may shift based on the new maintainer’s priorities, but dependency hygiene and WebUI polish appear to be current focus areas.

## 7. User Feedback Summary
Users report a generally stable experience with minor UI quirks. The "restart required" toast (#3453) is a frequent source of confusion post-hot-reload. The model prefix casing (#3454) frustrates users integrating with case-sensitive third-party APIs. The fork announcement (#3417) has been met with community appreciation, though some worry about breaking changes during the transition.

## 8. Backlog Watch
- **#3417**: Fork takeover—needs maintainer sign-off on the new repo ownership and migration plan.
- **#3454**: Model identifier validation—requires a decision on whether to make lowercasing optional or configurable.
- **#3451**: Android API 19 x86 support—a legacy compatibility request with no current maintainer response.
- **#3460, #3459, #3458, #3457**: Dependencies bumps pending review/merge to ensure Go 1.26+ compatibility and library security.

**Project Health Signal**: The project is in a healthy state of maintenance with active dependency management and community-driven continuity efforts. The fork transition and model prefix casing issue are the primary focal points for upcoming attention.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest
**Date:** 2026-11-13
**Source:** [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

## 1. Today's Overview
NanoClaw exhibits moderate development activity with 12 PRs and 3 Issues updated in the last 24 hours. The project shipped a new beta release (v2026.11.0-beta.2) while actively addressing stability regressions in credential handling and session management. A total of 11 open PRs remain active, signaling a busy development cycle focused on hardening the platform against upgrade-related failures and polish refinements.

## 2. Releases
**v2026.11.0-beta.2** (Latest)
*   **Changes:** This early test build includes 16 PRs merged since the previous beta, featuring release notes and package version bumps from `2026.11.0-beta.1` to `2026.11.0-beta.2`.
*   **Breaking Changes/Migration:** As a beta release, users should expect rough edges. This release replaces the never-stable `2026.10.1` and consolidates the two release candidates from October into a single entry.
*   **Link:** [v2026.11.0-beta.2 Release](https://github.com/qwibitai/nanoclaw/releases/tag/v2026.11.0-beta.2)

## 3. Project Progress
**Merged/Closed PRs Today:**
*   **#4343 (Closed):** Release PR for `v2026.11.0-beta.2`, consolidating 10 release notes and version bumps.
*   **Stability Fixes:** Three critical bugfix PRs were merged/closed addressing credential helpers and agent-runner formatting.

**Features Advancing:**
*   **Channel Hardening:** PR #4156 and #4147 focus on escaping approval card text and preventing card text cuts on Slack/Telegram/Discord, directly responding to platform length limits.
*   **Session Management:** PR #4347 resolves backfill issues for new sessions, ensuring mailbox storage is correctly initialized.

## 4. Community Hot Topics
The most active discussion centers on **Telegram rendering bugs** and **Credential helper failures**.

*   **Issue #4340 [Telegram Bug]:** Lines starting with `#<number>` are rendered as headings in Telegram. This UI/UX bug affects how agent messages are displayed and has garnered attention for its impact on message readability.
*   **Issue #4342 [Critical Bug]:** Setup fails to fetch hardened images after a Node upgrade because the docker credential helper points to an old Node binary. This is a regression affecting upgrade paths.
*   **PR #4341 [Fix]:** A direct fix for the credential helper issue (#4341), which aims to let the docker credential helper find the Node after an upgrade, showing a clear path to resolve #4342.

## 5. Bugs & Stability
Three new bugs were reported today, all classified as `[kind/bug]`:

1.  **#4345 (High Severity):** Setup's container step never waits for the derived-image reconcile; the call is missing `await`. This is a systemic bug present since v2.3.0, causing setup hangs during image reconciliation.
2.  **#4342 (High Severity):** Setup can't fetch the hardened image after a Node upgrade. The docker credential helper points at the old Node, causing credential errors. A fix exists in PR #4341.
3.  **#4340 (Medium Severity):** Telegram renders `#<digits>` lines as headings, breaking message formatting.

**Ranking:** The credential/helper issues (#4342, #4345) are the most critical as they block installation and upgrades. PR #4341 is the primary candidate to resolve the Node upgrade crash.

## 6. Feature Requests & Roadmap Signals
Analysis of recent PRs signals a roadmap focused on **cross-platform stability** and **messaging compatibility**.

*   **Approval Card Text Escaping:** PRs #4156 and #4147 indicate a push to make approval cards robust across Slack, Google Chat, Discord, Telegram, and WhatsApp. This suggests a roadmap priority on "omnichannel" reliability.
*   **Agent-Runner Messaging:** PR #4344 fixes message text reaching the agent as typed (instead of XML-escaped), improving fidelity for code snippets and special characters in agent replies.

**Predicted Next Version:** Expect further refinements to the `v2026.11.0` release cycle, likely focusing on resolving the `#4345` await issue and finalizing the agent-runner message formatting.

## 7. User Feedback Summary
Users are experiencing two distinct pain points today:

*   **Upgrade Anxiety:** The recurring theme in Issues #4342 and #4345 indicates that upgrading NanoClaw or the underlying Node environment is risky. Users report setup steps failing or hanging, leading to friction in maintenance cycles.
*   **Platform-Specific Rendering:** The Telegram heading bug (#4340) and the Discord/Slack card text limits (#4147, #4156) show that users running agents on diverse chat platforms face inconsistent UI experiences. There is dissatisfaction with "rough edges" in the beta, as noted in the release description.

## 8. Backlog Watch
These long-standing or high-impact items require maintainer triage:

*   **#4345 (Missing `await`):** Open since 2026-11-12. A fundamental bug in the setup container logic. Despite being open for only a short time, it marks a regression from v2.3.0 and needs immediate attention to prevent setup failures.
*   **#4342 (Credential Helper):** Open since 2026-11-12. Directly blocks users upgrading Node versions. While PR #4341 exists as a fix, the issue remains open, suggesting the PR may need review or merging.
*   **#4156 & #4147 (Card Escaping):** Open since October 2026. These PRs have been in the pipeline for weeks, refining how approval cards behave across chat platforms. Their longevity indicates complex edge cases in card formatting that may require maintainer design review.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest
**Date:** 2026-11-13

## 1. Today's Overview
The IronClaw project experienced minimal activity on 2026-11-13, with a single issue update and no new releases or merged pull requests. The repository remains in a low-velocity state typical of a mature open-source infrastructure tool. The sole activity centers on CI configuration maintenance, suggesting the core development focus may have shifted toward stability or external dependencies rather than new feature implementation. With only one open issue and no open pull requests, the project's current health appears stable but stagnant, lacking the momentum typical of active development cycles.

**[GitHub Repository](https://github.com/nearai/ironclaw)**

## 2. Releases
No new releases were published today. The project has no tagged releases in the latest cycle, indicating either a development-phase focus or a wait for significant milestone completion before versioning. Users should expect the current HEAD or latest commit SHA to represent the most recent stable state unless a release is tagged in the near future.

## 3. Project Progress
No pull requests were merged or closed today. The project's contribution pipeline is currently empty, with no merged code advancing the codebase. This absence of merged PRs suggests either a backlog awaiting review, a pause in feature development, or maintainers focusing on triage rather than integration. The lack of merged activity contributes to the perception of a project in maintenance mode rather than active evolution.

## 4. Community Hot Topics
The most significant community activity is Issue #8170, opened and updated today by user coconux3. This issue proposes the adoption of [GitHub's workflow dependency lockfile](https://docs.github.com/actions/concepts/security/workflow-dependency-lockfiles) to complement the existing commit SHA pinning. With zero comments and no reactions, the issue sits as a procedural proposal rather than a debated feature. The underlying need appears to be enhancing CI security and reproducibility by managing cross-workflow dependencies more granularly than SHA pinning allows, a common concern in complex monorepo or multi-workflow CI setups.

*   **#8170: [OPEN] ci: add GitHub's workflow lockfile (actions.lock), two pins to refresh first** — [GitHub Link](https://github.com/nearai/ironclaw/issues/8170)

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. The single active issue is purely configurational (CI workflow locking) and does not indicate runtime failures or stability concerns. The project's stability posture remains unchallenged by new defect reports, though the absence of reports may also reflect a quiet user base or a mature codebase with low incident rates.

## 6. Feature Requests & Roadmap Signals
No feature requests or roadmap signals emerged today. The lack of new issues or PRs suggests the project may be in a "lull" period between major versions, or maintainers are actively working on unreleased changes not yet reflected in the issue tracker. Without new user-driven requests, it is difficult to predict near-term roadmap direction, though the CI locking proposal (Issue #8170) may indicate a focus on developer experience and CI hygiene over functional features.

## 7. User Feedback Summary
User feedback today is limited to the single CI lockfile proposal. There are no reported pain points regarding functionality, performance, or usability. The silence on user experience issues could imply satisfaction with the current state, or a disengaged user community. The one active voice (coconux3) is advocating for infrastructure-level improvements, hinting that the most vocal users are currently focused on CI maintenance rather than core agent or assistant capabilities.

## 8. Backlog Watch
No long-unanswered issues or PRs requiring immediate maintainer attention were identified beyond Issue #8170, which was created today and thus has no backlog accumulation. The project's issue list appears clean, with no stale items visible in the 24-hour window. Maintainers have capacity to address new contributions, though the low throughput may require proactive engagement to pull requests from the community.

***

*Data snapshot captured on 2026-11-13. All links point to live GitHub resources.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

**LobsterAI Project Digest**
**Date:** 2026-11-13
**Project:** GitHub Repository: netease-youdao/LobsterAI

### 1. Today's Overview
LobsterAI shows moderate development activity for 2026-11-13. The project closed 16 pull requests and opened 1 new feature request, maintaining a steady release pipeline. No new releases were published today. The issue queue remains quiet with zero updates in the last 24 hours, while the PR pipeline is active, indicating that the development team is focused on shipping and stabilizing existing features rather than addressing new bugs or feature requests in the short term. Overall project health appears stable, with engineering effort directed toward platform-specific fixes and incremental feature enhancements.

*GitHub Overview: [LobsterAI](https://github.com/netease-youdao/LobsterAI)*

### 2. Releases
**No new releases were published today.** The "Latest Releases" section remains empty. Given the volume of merged PRs, a future release is likely to bundle the stability and packaging fixes currently in review.

### 3. Project Progress
**16 PRs were merged or closed today**, representing significant progress across multiple subsystems:
*   **Renderer & Cowork:** Focused on UI/UX stability, including fixing empty search layout shifts, preserving input caret behavior, and preventing scroll jumps during conversation history browsing.
*   **Main & OpenClaw:** Addressed core functionality, expert management, and gateway performance. Notable fixes include resolving expert identity conflicts after deletion (#3065) and trimming gateway startup by gating the xAI plugin (#3066).
*   **Build & Packaging:** Improved CI efficiency through parallel validation (#3069) and prevented duplicate macOS notarization (#3056).
*   **Docs & Banners:** Enhanced documentation and in-app linking capabilities (#3063).

A summary of key merged PRs includes:
*   **#3069:** CI: parallelize validation and optimize dependency caching.
*   **#3066:** perf(openclaw): trim gateway startup by gating xAI plugin.
*   **#3065:** fix(agents): Fix expert identity conflict and gateway sync failure after deletion.
*   **#3064:** fix(experts): Inherit new-task model selection when summoning.
*   **#3054:** fix(cowork): Prevent scroll jumps when browsing conversation history.

### 4. Community Hot Topics
Today's most active discussions are driven by new PRs rather than long-standing issues.

*   **#3072 [OPEN]:** *feat(ppt): add configurable homepage examples and guided cover creation.* This is the most discussed PR currently, with 0 comments but high relevance to the PPT generation use case. It proposes replacing text shortcuts with visual examples on the PPT homepage, allowing users to customize content and create matching covers. This signals a push toward making the PPT feature more "out-of-the-box" and visually oriented.
    *   *Link:* [PR #3072](https://github.com/netease-youdao/LobsterAI/pull/3072)
*   **#3071 [CLOSED]:** *fix(cowork): recover unavailable session model presets.* This closed PR addresses a specific UX bug where old chats retained bindings to unavailable models. Its closure indicates the team is actively cleaning up edge cases in the "cowork" (collaboration) module.
    *   *Link:* [PR #3071](https://github.com/netease-youdao/LobsterAI/pull/3071)

Underlying needs evident in today's activity include improving the reliability of model selection contexts and enhancing the "first-run" or "homepage" experience for content creation features like PPT.

### 5. Bugs & Stability
Stability improvements were a major focus of today's merged PRs, with several fixes preventing crashes or data loss:

*   **Critical:** **#3065** fixed a severe issue where deleting a preset expert caused identity conflicts and gateway sync failures, preventing the expert from being summoned again and breaking image example functionality. The fix involves using independent instance IDs for new experts and syncing deletions into a queue.
*   **High:** **#3067** repaired macOS launch authorization and preserved app signatures, fixing two launch failures related to codown signing and Fabric CLI upgrades.
*   **Medium:** **#3054** prevented scroll jumps when browsing conversation history, a common UX complaint in chat applications.
*   **Low/Medium:** **#3055** preserved the input caret after adding selected text, and **#3053** preserved turn credit usage after stopping a task.

No new crashes or regressions were reported in issues today, as the issue count remained at zero.

### 6. Feature Requests & Roadmap Signals
The most prominent roadmap signal today is the **PPT feature expansion** (**#3072**). By adding configurable homepage examples and guided cover creation, the project is moving beyond basic text generation into a more integrated content creation workflow. The lack of comments on this PR might indicate it is in a design review phase or awaiting UX feedback.

Another signal is the continued investment in **context window management** (**#3059**, closed previously on 2026-11-12), which allowed users to select contexts up to 1M tokens. This feature is likely stabilizing, with subsequent PRs like **#3062** ensuring legacy replies remain readable after model changes.

### 7. User Feedback Summary
User feedback today, as reflected in merged PRs, centers on **polish and reliability**.
*   **Productivity:** Users want the "cowork" and collaboration features to be seamless. Fixes around preserving credit usage, preventing layout shifts, and maintaining input focus directly impact the "flow state" of working with the AI.
*   **Platform Stability:** Mac users specifically benefit from the notarization and launch fixes (#3067), indicating a need for cross-platform parity.
*   **AI Configuration:** The expert model selection inheritance (#3064) suggests users want consistent model behavior when starting new tasks or summoning experts, rather than having to reconfigure settings each time.

### 8. Backlog Watch
While no new issues were opened today, the following long-term items merit attention:

*   **Open PR #3072:** This is the most significant "open" item. It sits at the intersection of the PPT feature and the homepage UI. If the maintainers approve this, it will be a major functional addition. If it stalls, the PPT roadmap may be delayed.
*   **Open Issues:** The issue queue is currently empty, which is positive for short-term stability but means there is no visible "voice of the user" channel for immediate bug reporting. Maintainers should monitor if the quiet issue queue masks underlying user dissatisfaction or if the merged PRs have sufficiently addressed the backlog.

*Data analysis based on GitHub activity for netease-youdao/LobsterAI on 2026-11-13.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest – 2026-11-13

## 1. Today's Overview
CoPaw (agentscope-ai/CoPaw) shows **moderate daily activity** with 16 issues and 45 PRs updated in the last 24 hours. The project is in an active development phase leading toward a stable release, with a healthy merge rate (11 of 45 PRs closed). No new releases were published today. The issue mix reflects a mature project balancing bug fixes, platform compatibility, and feature expansion; the open issue count remains substantial (13 active), indicating ongoing refinement rather than critical instability.

## 2. Releases
**No new releases** were published today. The latest available version remains `2.3.0b4` (beta series). Users on older beta versions (`2.3.0-beta.1` through `beta.3`) should note that several reported bugs, particularly path truncation and attachment issues, were introduced in that series and are actively being addressed in subsequent PRs.

## 3. Project Progress
**45 PRs** were updated in the last 24 hours, with **11 merged/closed**. Key merged contributions include:
- **PR #8607**: Fixes boolean schema sanitization, preserving `additionalProperties: false` in tool definitions.
- **PR #8691**: Improves console session refresh and favicon status display.
- **PR #8704**: Ensures the selected PyPI mirror is used when seeding the virtual environment, resolving upgrade failures on restricted networks.
- **PR #8713**: Correctly reports resource-protection shell terminations rather than generic errors.
- **PR #8707**: Critical fix to persist cron and heartbeat token usage into turn records, directly addressing the "missing usage data" gap identified in Issue #8705.

Advanced features in review include session storage (PR #8532) and channel transport hardening (PR #8694).

## 4. Community Hot Topics
The most discussed items today are:
- **Issue #8709** [2 comments]: WeChat channel startup failure (`ACCOUNT_IN_USE`) and unidentified send results. Links to PR #8715 which partially addresses receipt handling.
- **Issue #8714** [1 comment]: Request for configurable runtime base path for Console and API behind a reverse proxy.
- **Issue #8710** [1 comment]: Per-conversation session binding for messaging channels, enabling `/new` to rotate sessions independently of transport identity.
- **PR #8715** [0 comments]: Fix for WeChat send receipts carrying only `message_id`.
- **PR #8713** [0 comments]: Improved shell resource-protection error reporting.

These topics highlight cross-platform compatibility (WeChat, Feishu), deployment flexibility (reverse proxies), and user workflow ergonomics.

## 5. Bugs & Stability
**13 active bugs** were updated today, ranked by reported severity and frequency:

| Priority | Issue | Summary | Status / Fix PR |
| :--- | :--- | :--- | :--- |
| **High** | #8705 | Cron task token usage not written to `turns.jsonl`; consumption path diverges from chat channels. | Fix: PR #8707 merged |
| **High** | #8696 | Attachment paths containing `#` fail to resolve on Windows. | Open |
| **High** | #8655 | Attachment paths truncated to drive root (e.g., `C:\`) since 2.3.0-beta.1. | Open |
| **Medium** | #8706 | Creation Assistant input lags due to full AgentDock re-render on keystroke. | Open |
| **Medium** | #8669 | Feishu channel plugin fails on every start with `CHANNEL_NOT_CONNECTED` (race condition). | Open |
| **Medium** | #8312 | Context control failure causing task interruption due to context length exceeded. | Open |
| **Low** | #8712 | Shell termination result hidden from model after resource protection. | Fix: PR #8713 merged |
| **Low** | #8700 | DoomLoopGate never triggers when replies are accumulated into a single assistant message. | Open |

## 6. Feature Requests & Roadmap Signals
Several feature-oriented PRs and issues suggest the roadmap is expanding beyond core stability:
- **PR #8532**: Append-only session storage with paginated history and native Turn forks—a major architectural shift for long-conversation recovery.
- **PR #8699**: Plugin updates, version guards, and official marketplace releases for channel plugins.
- **PR #8694**: Optional streaming and hardened channel transport for the Xiaoyi channel.
- **Issue #8711**: Auto-retry logic for `RetryChatModel` when streams complete with no answer content.
- **Issue #8710**: Per-conversation session binding for messaging channels.

## 7. User Feedback Summary
Real-user pain points today center on **cross-platform reliability** and **task accountability**:
- **WeChat/Feishu instability**: Multiple startup and connection races (#8669, #8709) are eroding confidence in the channel plugin system, especially for users managing multiple accounts/workspaces.
- **Cron task invisibility**: The token usage gap for cron jobs (#8705) means scheduled tasks are "black boxes" in the usage dashboard, a significant concern for power users relying on automated pipelines.
- **Path and attachment bugs**: Truncation (#8655) and `#` character issues (#8696) on Windows paths indicate a need for robust path-handling refactoring ahead of the stable `2.3.0` release.
- **Usability friction**: Creation Assistant lag (#8706) and missing favicon/status refresh (#8691) are noted as polish items affecting daily workflow satisfaction.

## 8. Backlog Watch
Long-standing items requiring maintainer triage:
- **Issue #2306** (Closed, Mar–Nov): Long-running timers being interrupted; a question that saw activity across months but was closed without a definitive resolution visible in the summary.
- **Issue #8184** (Open, Oct–Nov): "Doom-loop gate" killing legitimate polling patterns—a concurrency/state-distinction bug that has persisted for over a month and risks blocking automated task flows.
- **PR #8532** (Open, Nov 2 – Nov 13): The largest PR by scope (XXXL size) introducing durable session storage; despite being under review, it represents the most significant roadmap change for conversation lifecycle management.
- **PR #8694 / #8699** (Open, Nov 12 – Nov 13): Channel plugin enhancements; these should be prioritized if the maintainer aims to stabilize the plugin ecosystem before the next stable release.

*Data source: GitHub snapshot for agentscope-ai/CoPaw on 2026-11-13. All links reference `github.com/agentscope-ai/CoPaw`.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest: 2026-11-13

## 1. Today's Overview
The ZeroClaw project shows robust development activity with 48 PRs merged or closed in the last 24 hours against only 4 issue updates, indicating a team focused on shipping features and fixes rather than triaging bugs. The open issue count remains low at 4, with one high-priority security/item (#11853) recently updated. The PR landscape is dominated by architectural enhancements to the provider system, goal-mode task contracts, and web/telegram channel integrity. Overall project health appears strong, with significant momentum heading into the mid-November period.

🔗 [Project Repository](https://github.com/zeroclaw-labs/zeroclaw)

## 2. Releases
No new releases were published today. The project remains on the latest master branch commit cycle. Given the volume of merged PRs (48 in 24h), a release candidate or version bump is likely imminent, pending final integration testing and maintainer sign-off.

## 3. Project Progress
**Merged/Closed Activity:** 48 PRs were updated in the last 24 hours, with 44 still open and 4 merged/closed. The merged closures appear to be routine maintenance or draft finalizations rather than major feature merges. Notable advancements include:
*   **Provider Multi-Model Support (PR #9809):** A large (XL) PR to support multiple models per provider profile, normalizing schema-v4 connections and capability models.
*   **Goal Mode Foundations (PRs #11878, #11879, #11880):** A series of 12 "Goal V1 proposal" PRs extracting task contracts and command grammies into the `zeroclaw-goal` crate, establishing the durable task lifecycle foundation for "Goal Mode."
*   **Telegram Media Handling (PRs #12404, #12405):** Fixes for replied-to document/photo/video handling in Telegram replies, extending content context to agents.
*   **Write-Only WebUI Credentials (PRs #12373, #12402, #12408):** A trilogy of PRs adding scoped secret management under Storage → Secrets, focusing on write-only creation/replacement and HTTP Basic/API token cataloging.

## 4. Community Hot Topics
The most active discussions today center on **Goal Mode architecture** and **Provider interoperability**.
*   **PR #11880** (Goal V1 proposal 3/12) and **PR #11879** (Goal V1 proposal 2/12) are highly active, focusing on extracting transport-neutral Goal policy contracts and defining the command grammar. These indicate a community push to stabilize the "Goal Mode" execution model.
*   **PR #9809** (Multiple models per provider) remains a top priority for users integrating multiple LLM providers (OpenAI, Anthropic, Ollama, etc.), addressing the complexity of managing disparate model capabilities within a single profile.
*   **PR #12406** (Parallel web search provider) and **PR #12408** (Scoped HTTP credentials) reflect ongoing efforts to expand the web search ecosystem and tighten web operation security.

## 5. Bugs & Stability
Several critical bugs were reported or updated today, primarily concerning **tool context** and **channel delegation**.
*   **#12401** (Bug): Tool-context collapse (`keep_tool_context_turns`) breaks Claude Opus 5.5 chats. This is marked S1 - workflow blocked. Once an older tool-using turn leaves the `keep_tool_context_turns` window, subsequent requests fail with a 400 error. No fix PR is immediately visible, but this is the most severe stability issue currently open.
*   **#11138** (Enhancement/Risk:high): Defines caller tool-level approval in bounded delegation. While marked as an enhancement, the "risk:high" and "status:accepted" tags suggest it addresses a significant security/architecture boundary problem in agent delegation.
*   **#11853** (Security): A CI `npm audit` failure was closed recently (updated 2026-11-12), indicating dependency management is being actively cleaned up.

## 6. Feature Requests & Roadmap Signals
The roadmap is heavily weighted toward **agent delegation**, **Goal Mode execution**, and **web integration**.
*   **Feature:** The series of PRs starting at #11878 (Goal V1 proposal 1/12) through #11880 establish a "durable task lifecycle foundation." This suggests the next stable version will likely feature stabilized Goal Mode task execution, moving beyond experimental proposals.
*   **Feature:** **PR #12258** (`sessions_prompt` tool) and **#12259** (`sessions_message` scaffold) introduce inter-agent session prompting. This is a direct response to the need for multi-agent coordination and is likely to feature in upcoming releases.
*   **Feature:** The continued expansion of write-only credential management (#12373, #12402) and the Parallel web search provider (#12406) indicate a focus on making ZeroClaw a more deployable, secure platform for diverse web interactions.

## 7. User Feedback Summary
User feedback, as reflected in the issue tracker, highlights two primary pain points:
*   **Context Retention:** The bug #12401 regarding `keep_tool_context_turns` crashing Opus 5.5 chats is a critical usability blocker for users on the cutting-edge Anthropic provider. The frustration stems from losing chat context after a few tool turns.
*   **Media Context Loss:** Issues #12197, #12404, and #12405 collectively reveal that when users reply to media (photos, videos, documents) in Telegram, the agent receives only a placeholder (`[Document]` or `[Photo]`) without captions or paths, rendering the agent unable to process the actual content. Users are seeking richer reply contexts.

## 8. Backlog Watch
These long-standing or critical items require maintainer attention:
*   **#11138** ([Feature]: define caller tool-level approval in bounded delegation): Open since Sept 26, updated today. This is a high-risk architecture item defining how approvals flow between parent and child agents. Its "accepted" status but lack of merger suggests it may be blocked on design review or dependent on other delegation PRs (like #10937).
*   **#7821** (feat(security): canonical sandbox_policy schema): Open since June 17. A foundational security PR establishing the `SandboxPolicyConfig`. Despite being open for months, it is a prerequisite for many other security and runtime features.
*   **#11633** (feat(zerocode): open local file paths from the transcript): Open since Oct 9. Fixes ZeroCode link detection for continuation rows and `~/` paths, a usability improvement for file handling.
*   **#12373** (Write-only WebUI credential management): Open since Nov 10. Closely linked to the active PRs #12402 and #12408, forming a complete credential management suite.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*