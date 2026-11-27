# OpenClaw Ecosystem Digest 2026-11-27

> Issues: 104 | PRs: 500 | Projects covered: 12 | Generated: 2026-11-27 07:55 UTC

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
**2026-11-27**

## 1. Today's Overview
OpenClaw maintains intense development velocity with **104 issues** and **500 PRs** updated in the last 24 hours. The project shows robust activity: 72 open/active issues and 278 open PRs indicate steady progress, while 32 closed issues and 222 merged/closed PRs demonstrate continuous refinement. Zero new releases were published today, suggesting the team is deep in feature implementation and bugfixing rather than release cycles. The high volume of merged PRs (222) relative to open ones suggests good maintainer throughput, though the 72 active issues signal ongoing stabilization work.

## 2. Releases
No new releases were published today. The latest release cycle remains at 2026.11.10 (`6ea542f`), with subsequent development occurring on the `main` branch. Users should expect incremental improvements and bugfixes in the next stable tag rather than a version bump today.

## 3. Project Progress
**500 PRs** were updated in the last 24 hours, with **222 merged/closed** and **278 remaining open**. Key merged fixes include:
- **#206403**: Fixes agents crashing when replying to a second message mid-task (`fix: keep answering your first message after the agent replies to a second one mid-task`).
- **#206412**: Resolves infinite message-loop issues after agent replies (`fix: keep answering your first message after the agent replies to a second one mid-task`).
- **#206439**: Preserves trusted certificates through nested secret egress proxies, closing long-standing issues #135955 and #144830.
- **#206477**: Optimizes one-shot agent runs by skipping the bootstrap ritual.
- **#206488**: Fixes dictation relay failures when STT reconnects.

These fixes address critical session-state, memory, and authentication stability issues. The 278 open PRs span feature refinements, performance optimizations, and compatibility updates, with several marked as 🚨 compatibility-risk requiring maintainer review.

## 4. Community Hot Topics
**Most Active Issues (by comment count):**
- **#204775** (41 comments): Design of "prepared-release updates" — a shared reference for update paths, ownership, and file collision prevention. Reflects the project's focus on structured, coordinated releases.
- **#153426** (28 comments): Curated memory roots (`MEMORY.md`/`USER.md`) silently excluded from bootstrap injection by the provenance ratchet, with no diagnostics or recovery. A P0 security/ux-release-blocker impacting every session.
- **#200606** (21 comments): Candidate Doctor blocking updates from 2026.11.3→11.5 due to plugin migration conflicts and `changed=[]`.

**Most Active PRs:**
- **#206471**: Refactors subagent collector replay decisions to centralize state, preventing duplicated rules and registry row exposure.
- **#206484**: Improves session reader loading to only target readers when a worker needs them, reducing cold-storage overhead.
- **#206468**: Fixes visible children following their spawning parent, closing #206460.

*Analysis:* The community is heavily focused on **memory provenance**, **update/diagnostic reliability**, and **subagent coordination**. The high comment counts on design and architectural issues (#204775, #153426) indicate these are active decision points, not stale threads.

## 5. Bugs & Stability
**Critical bugs reported today:**
- **#205007** (8 comments): "My device is being completely overtaken..." — A alarming report suggesting BSD license issues could allow complete take-over. Requires immediate security review.
- **#205299** (3 comments): `AgentDatabaseAdmissionError "plugin load reentry detected for cache key"` wedges an agent's lane until full gateway stop/start, blocking `doctor --fix`.
- **#205927** (2 comments): Doctor recommends deleting retired agent directories, but Gateway maintenance recreates their SQLite stores — a data-loss risk.
- **#206335** (2 comments): Subagent requester-settle continuation blocks the requester's channel DM indefinitely; a slow tool call locks the user out.
- **#200227** (2 comments): memory-core native watcher pegs Gateway main thread (~1 core, 3.4 GB) on large extraPaths trees (~100k .md files).

**Fixes in flight:**
- **#206439** addresses the nested egress proxy certificate trust issue (#135955, #144830).
- **#206477** optimizes one-shot run bootstrapping.
- Multiple PRs target subagent and memory-core stability.

*Ranking by severity:* Take-over vulnerability (#205007) > Plugin reentry wedge (#205299) > Memory watcher thread pegging (#200227) > Subagent DM blocking (#206335) > Doctor recreation mismatch (#205927).

## 6. Feature Requests & Roadmap Signals
**Active feature-oriented issues:**
- **#204701**: Configurable git timeout + table-level exclusions for `backup git create` (hardcoded 120s GIT_TIMEOUT_MS).
- **#203079**: Memory Reliability Contract (MRC) — common guarantees and conformance tests for all memory backends.
- **#206349**: Let plugins add gated outbound headers to embedded model requests.
- **#204811**: Automatic Haiku utility calls falling back cross-provider without same-provider rotation.
- **#151178**: Let Active Memory delegate escalation decisions to a plugin provider.

*Predictions:* The MRC (#203079) and memory provenance escalation (#151178) signals suggest the roadmap is moving toward standardized memory reliability and plugin-mediated recall decisions. The git timeout request (#204701) reflects operational maturity — users managing large agent databases need predictable backup behavior.

## 7. User Feedback Summary
**Real pain points (today's data):**
- **Memory provenance opacity:** Users report `MEMORY.md`/`USER.md` being silently quarantined with no diagnostic or recovery path (#153426, #204738).
- **Update blockages:** Candidate Doctor failures due to plugin migration conflicts and legacy session store errors (#200606, #205202).
- **Performance cliffs:** Memory watchers pegging main threads on large directory trees (#200227); Gateway OOM under constrained ARM64 memory (#192547).
- **Subagent coordination:** Continuation blocking, missing delivery receipts, and thread management across spawning parents (#198307, #206335).
- **Authentication gaps:** Secret egress proxy failures with self-signed certificates and nested proxy trust loss (#141413, #144830, #206439).

**Satisfaction indicators:** The high merge rate (222 PRs) and active design issue (#204775) suggest the team is responsive, but the volume of critical bugs indicates users are hitting edge cases in memory, updates, and subagent management.

## 8. Backlog Watch
**Long-unanswered important issues needing maintainer attention:**
- **#205007** (created 2026-11-25, 8 comments): Potential security take-over vector — highest priority for immediate review.
- **#204738** (created 2026-11-24, 5 comments): Memory provenance quarantine with no restore path; overlaps #153426 and #203532.
- **#204816** (created 2026-11-24, 12 comments): Stable rolls back with doctor-failed / Invalid config after successful candidate validation — a update-blocker affecting confidence in managed upgrades.
- **#203079** (created 2026-11-21, 4 comments): Memory Reliability Contract (MRC) proposal — valuable for backend neutrality but needs product decision.
- **#200606** (created 2026-11-17, 21 comments): Candidate Doctor blocking updates — long-standing validation workflow issue.

**PRs needing maintainer triage:**
- **#206126** (waiting on maintainer, compatibility-risk): Keep native threads across internal turns and automations catalog changes — related to #148329 thread-rotation bug.
- **#201284** (waiting on author, compatibility-risk): Use one check script for model-free automations — still in progress under discussion.
- **#206483** (ready for maintainer look): Let owners fork a chat with exec after subagent/exec completion — authentication policy fix.

*Watch list summary:* The project has a healthy flow of merged PRs but several critical security and update-validation issues have been open for days with significant community comment counts, indicating areas where maintainer prioritization could prevent user-facing breakage.

---

## Cross-Ecosystem Comparison

# Cross-Project Ecosystem Analysis: Personal AI Agent & Assistant Open-Source Landscape (2026-11-27)

## 1. Ecosystem Overview
The personal AI assistant and agent open-source ecosystem in late-November 2026 exhibits a bifurcated landscape of high-velocity innovation and stabilization maturity. The core reference project, OpenClaw, dominates with extreme development velocity (500 PRs/24h), while the majority of projects operate at moderate to low activity levels. The landscape is currently divided between those aggressively pursuing memory provenance standardization, subagent coordination, and platform integration (OpenClaw, LobsterAI, ZeroClaw), and those focusing on niche specialization, dependency maintenance, or specific platform adaptations (NanoClaw, PicoClaw, ZeptoClaw). A significant thematic convergence is emerging around "memory reliability," "update/diagnostic robustness," and "subagent orchestration" as the primary pain points users are resolving through community-driven fixes.

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases (24h) | Health Score |
| :--- | :---: | :---: | :---: | :---: |
| **OpenClaw** | 72 | 500 | 0 | ⭐⭐⭐⭐⭐ (High Velocity) |
| **NanoBot** | 9 | 11 | 0 | ⭐⭐⭐⭐ (Active) |
| **Hermes Agent** | 10 | 50 | 0 | ⭐⭐⭐ (Burst Activity) |
| **LobsterAI** | ~0* | 17 | 0 | ⭐⭐⭐ (Migration Phase) |
| **CoPaw** | 17 | 35 | 0 | ⭐⭐⭐ (Stable but Platform-Loaded) |
| **NanoClaw** | ~0* | 16 | 0 | ⭐⭐⭐⭐ (Steady) |
| **Moltis** | 0 | 2 | 0 | ⭐⭐ (Low Activity) |
| **PicoClaw** | 0 | 5 | 0 | ⭐⭐ (Maintenance) |
| **NullClaw** | 0 | 0 | 0 | ⭐ (Idle) |
| **IronClaw** | 0 | 0 | 0 | ⭐ (Idle) |
| **ZeptoClaw** | 0 | 0 | 0 | ⭐ (Idle) |
| **ZeroClaw** | 3 | 50 | 0 | ⭐⭐⭐⭐ (Pre-release Sprint) |

*Issues count estimated or not explicitly listed in digest; activity driven by PRs.

## 3. OpenClaw's Position
OpenClaw occupies a dominant position as the core reference architecture, distinguished by its extreme development velocity and comprehensive feature surface area. Its technical approach is broad and integrative, acting as a "plumbing" layer for memory provenance, nested proxy trust, and subagent coordination. Compared to peers, OpenClaw has the largest community footprint and the most critical mass of open issues (72 active), indicating active stabilization work rather than idle development. Its advantage lies in the sheer volume of merged fixes addressing fundamental session-state and authentication stability, though this high velocity introduces a higher density of edge-case bugs (e.g., the "device take-over" vulnerability #205007). Technically, OpenClaw differentiates itself by targeting general-purpose agent orchestration rather than niche model targeting or specific platform UIs.

## 4. Shared Technical Focus Areas
Across the ecosystem, several recurring technical requirements emerge, correlating with specific projects:
*   **Memory Provenance & Reliability:** OpenClaw (#153426, #203079), CoPaw (#8882), and LobsterAI all address memory retention, provenance quarantine, and reliability contracts. This is the most significant shared pain point, indicating a industry-wide need for standardized memory backends and diagnostic paths.
*   **Update & Migration Stability:** OpenClaw (#200606), NanoBot, and ZeroClaw report issues regarding update blockages, plugin migration conflicts, and candidate doctor failures. This suggests the ecosystem is transitioning from alpha/beta feature development toward stable, managed upgrades.
*   **Subagent & Coordinator Stability:** OpenClaw (#206335, #206468) and Hermes Agent (#160692) focus on preventing requester channel blocking, duplicated rules, and silent control token rendering. This highlights the complexity of multi-agent systems and the need for robust state management.
*   **Provider & Infrastructure Hardening:** ZeroClaw (#12704, #12596), NanoBot (#6815, #6818), and LobsterAI focus on provider stability, proxy connectivity, and security scoping (TOTP/SSH credentials). This reflects a maturing concern for deployability in complex (Docker/corporate) networks.

## 5. Differentiation Analysis
The projects differentiate sharply by target user and architectural focus:
*   **General Orchestration vs. Specialization:** OpenClaw, Hermes Agent, and ZeroClaw target general-purpose AI agent frameworks capable of multi-provider orchestration, sub-agent spawning, and complex tool use. In contrast, PicoClaw, Picoclaw, and NanoClaw are Go-based toolkits focused on specific integration patterns (AWS/Azure SDKs, local model support) or lightweight agent runnables.
*   **Platform Focus:** LobsterAI and CoPaw prioritize chat/UI experiences and distributed shared hub architectures, catering to users seeking conversational interfaces and multi-tab organization. NanoBot and ZeptoClaw show activity around WebUI enhancements and specific provider compatibility (Claude/OpenAI paths).
*   **Release Maturity:** ZeroClaw is explicitly in a "pre-release stabilization phase" targeting v1.0.0, signaling a commitment to a stable public release. OpenClaw and CoPaw operate on active development branches (`main`) with post-release candidates, indicating a "rolling" or rapid iteration model. PicoClaw and Moltis show lower activity, suggesting either mature stable codebases or stalled projects.

## 6. Community Momentum & Maturity
The ecosystem is segmented into distinct activity tiers:
*   **Rapidly Iterating (High Velocity):** OpenClaw (500 PRs/24h) and ZeroClaw (50 PRs/24h) are in intense "sprint closing" or release preparation modes. Hermes Agent also shows burst activity (50 PRs), likely tied to a sprint cycle. These projects are high-risk/high-reward, with frequent changes but active community engagement.
*   **Active Stabilization:** NanoBot, NanoClaw, and CoPaw show consistent, moderate activity (11-35 PRs/24h). They are past the initial "fever pitch" of v1.0 but remain active in bugfixing and feature refinement, focusing on usability and platform compatibility.
*   **Stabilizing / Maintenance:** PicoClaw, Moltis, and LobsterAI have settled into maintenance or migration phases. LobsterAI is actively migrating to a DSH architecture, while PicoClaw and Moltis focus on dependency updates and specific integration bugs (Signal/Discord). These projects have lower issue counts, indicating user bases are hitting fewer critical blockers.

## 7. Trend Signals
Extracted from community feedback, several industry trends are evident for AI agent developers:
*   **The Memory Provenance Problem:** The sheer volume of issues regarding `MEMORY.md` quarantine, silent exclusions, and the "Memory Reliability Contract" (MRC) signals that managing long-term agent memory is the hardest unsolved problem in the stack. Developers should expect to invest significant effort in provenance tracking and diagnostic recovery paths.
*   **Update Friction as a Major Blockers:** The prevalence of "Candidate Doctor" failures and plugin migration conflicts indicates that the industry is moving from "feature building" to "production operation." Tooling for safe, predictable updates (git timeouts, dependency scoping) is becoming as critical as the agent logic itself.
*   **Subagent Orchestration Complexity:** Issues regarding continuation blocking, duplicated rules, and "no-reply" token rendering reveal that coordinating multiple autonomous agents within a single session is error-prone. Future frameworks will likely need built-in state machines or deterministic orchestration layers to manage these interactions.
*   **Infrastructure-Aware Development:** The focus on Docker networks, proxy trust, and ARM64 memory constraints shows that AI agents are no longer just software running on a laptop; they are distributed services. Developers must prioritize resilience to network failures, credential scoping, and resource constraints (memory watchers pegging threads).

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest
**Date:** 2026-11-27

## 1. Today's Overview
Nanobot shows moderate activity with 9 open issues and 11 PRs updated in the last 24 hours. The project has seen a flurry of recent activity, primarily focused on WebUI enhancements, i18n localization fixes, and provider stability improvements. While no new releases were published today, the volume of merged PRs indicates healthy development momentum heading into the end of November.

## 2. Releases
No new releases were published today. The project remains on its current version cycle with no breaking changes or migration notes to report.

## 3. Project Progress
Eleven PRs were merged or closed today, representing significant advances across multiple subsystems:
*   **WebUI & i18n:** Merged PR #6814 and #6819 added full Hebrew localization across five command catalogs, resolving the issue raised in #6807. PR #6810 added math format hints for WebSocket replies.
*   **Provider & MCP Stability:** PRs #6815 and #6818 enabled `web_fetch` and MCP connections to resolve remote server hostnames through a shared proxy, addressing internal Docker network connectivity issues.
*   **SDK & Agent Refactoring:** PR #6789 unified direct and streamed Python SDK execution, while #6816 refactored agent channels to let them declare their own reply formats, removing hardcoded channel name lists.
*   **Testing:** PR #6820 updated Telegram command menu tests to account for the new Hebrew localization.

## 4. Community Hot Topics
The most discussed issue is **#6806** ([Open] WebUI: option to auto-convert long pasted text into a workspace file). With 2 comments, it addresses a common pain point where large logs or config files "pollute the conversation transcript." The underlying need is better context management and reduced token bloat.

Other highly active issues include:
*   **#6811** (Closed): Usability of `web_fetch` and HTTP MCP on internal Docker networks, fixed in PR #6815.
*   **#6812** (Closed): Making `web_search` provider key-optional, resolved in PR #6812.
*   **#6813** (Closed): Adding the TrustedRouter gateway for privacy-focused routing.

## 5. Bugs & Stability
Today saw several critical stability fixes:
*   **Anthropic Haiku 5.x:** Issues #6785 and #6786 regarding `reasoningEffort` rejections and thinking session compaction bugs were addressed by PR #6792, which implements adaptive thinking budgets for Haiku 5.5.
*   **OpenAI-compatible Claude Path:** Issue #6817 reports a bug where `cache_control` markers are dropped after textless tool calls on the Claude path, potentially breaking tool loops.
*   **WebSocket Math:** Issue #6809 regarding missing default math render hints was partially addressed by the merged PR #6810.

## 6. Feature Requests & Roadmap Signals
Several user-requested features were merged today, signaling near-term roadmap direction:
*   **Edit/Resend Messages:** PR #6323 (opened Oct 20, merged recently) implements editing and resending messages within the same session.
*   **Skill Discovery:** PR #6821 (opened today) allows the agent to discover and use skills from `<project>/.agents/skills/` and `~/.agents/skills/` without manual installation.
*   **Hebrew Localization:** The merging of #6814 and #6819 completes the localization effort for the WebUI and command menus.

## 7. User Feedback Summary
User feedback today highlights two distinct themes: **linguistic inclusivity** and **infrastructure resilience**. The successful implementation of Hebrew localization (#6807, #6814, #6819) demonstrates the project's commitment to accessibility. Simultaneously, fixes for internal Docker networks (#6811, #6815, #6818) and proxy configurations indicate users are running nanobot in complex, restricted environments (e.g., corporate intranets), where SSRF pre-checks and DNS resolution are major pain points.

## 8. Backlog Watch
*   **#6806** (Open, 2 comments): The request for auto-converting long pasted text to workspace files remains open. This is a quality-of-life feature that would significantly improve the user experience for data-heavy workflows.
*   **#6817** (Open, 0 comments): The `cache_control` marker bug on the Claude path is recently opened and has not yet received a PR fix.
*   **#6323** (Open, undefined comments): The "edit and resend" PR has been open since October 20th. While merged today (based on the digest), the long open time suggests complex integration challenges or review bottlenecks that may need maintainer attention for future similar features.

***Data Source:*** [GitHub - HKUDS/nanobot](https://github.com/HKUDS/nanobot) (Issues/PRs as of 2026-11-27)

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

**Hermes Agent Project Digest**
**Generated on:** 2026-11-27
**Source:** [GitHub Repository](https://github.com/NousResearch/hermes-agent)

### 1. Today's Overview
The Hermes Agent project exhibited high velocity on 2026-11-27, with 10 new issues and 50 new pull requests opened within the last 24 hours. Activity is currently **open/active** across both issue and PR tracks, indicating a burst of development activity likely tied to recent releases or a sprint cycle. Notably, no new releases were published today, but the merge queue processed 6 closed PRs, suggesting a push toward stabilizing recent features. The repository is in a state of active refinement, with numerous bug fixes and platform-specific updates landing simultaneously.

### 2. Releases
No new releases were tagged today. The latest activity consists of merge commits and issue dispositions rather than version bumps. Users should expect the current installed version to incorporate the fixes and features detailed in the "Project Progress" section below.

### 3. Project Progress
**Merged/Closed PRs (6 items):**
*   **Gateway Stability:** PR #157086 fsync'd backup archives to prevent data corruption on crash; PR #157439 (closed) addressed a `deepcopy` error caused by footed replies.
*   **Cron & Backend Migration:** PR #160379 isolated script reads to prevent gateway stalls; PR #160694 & #160696 refined orphan sweep logic and timeout invariants.
*   **Tool & Policy Fixes:** PR #160689 resolved a critical bug where disabled MCP server keys (e.g., `memory`) were stripping built-in toolsets from local sessions. PR #160690 fixed title generation crashes with MLX VLM schema rejections.
*   **Feature Polish:** PR #160686 improved the "Go to last session" keyboard navigation; PR #160688 added a "fresh-context" plugin for context management.

### 4. Community Hot Topics
The most discussed items today reflect a mix of bug mitigation and feature reconnaissance:

*   **#160692 [Bug][Bot Mode] [SILENT] / NO_REPLY control tokens:** 0 comments, 0 upvotes. This issue reports that `no reply needed` tokens from notify-only DMs are rendering as visible chat bubbles and triggering push notifications, breaking the intended silent behavior in Bot Mode.
*   **#159782 [Bug]: Hosted room `info`/`history`/`results` re-read every settled admission:** 2 comments. A performance regression where long-lived hosted rooms stall the gateway event loop for 10+ seconds by re-reading the entire admission history on every poll.
*   **#160675 [Bug]: Disabled MCP server named like built-in toolset strips that toolset:** 1 comment. A critical policy bug where an MCP server entry named `memory` (even if disabled) removes the native `memory` toolset from all sessions.
*   **#160685 [Feature]: Let an authorized client answer an exact live approval or clarification without attaching:** 0 comments. A request for "tap-to-approve" functionality on mobile/notification clicks.
*   **PR #160688 [Feature]: plugin-catalog: add fresh-context:** A new plugin to manage context handoffs after idle gaps.

### 5. Bugs & Stability
The bug surface today is dominated by **P2/P3 stability regressions** following the recent backend migration:

*   **Critical:** **#160675** - A disabled MCP server named like a built-in toolset (e.g., `memory`) strips that toolset from every local/Desktop session. This is a regression with high impact on daily driver usability.
*   **High:** **#159782** - Hosted room history/info reads stall the gateway loop for 10+ seconds, causing other profiles to answer "starting" instead of joining.
*   **Medium:** **#160699** - Hosted room member FIFO pauses on 'changed hosted binding' permission errors, causing lengthy (21 min) admission pauses.
*   **Note:** Fix PRs exist for the MCP toolset issue (#160689) and the gateway read isolation (#160694), indicating these are being actively addressed.

### 6. Feature Requests & Roadmap Signals
Several P3 feature requests signal near-term roadmap directions:
*   **#91813:** Request for Bot Mode group activity to expose a bot-scoped live session transcript for better multi-agent supervision.
*   **#160685:** "Tap-to-approve" for live clarifications from notifications.
*   **#108573:** Native C2C streaming protocol rules for QQ bot (reconnaissance stage).
*   **#160688:** The "fresh-context" plugin added today addresses the need for deterministic context handoffs after idle periods.

### 7. User Feedback Summary
User feedback today highlights two distinct pain points:
1.  **Policy & Tool Configuration:** Frustration regarding MCP server configuration, specifically that disabling or naming an MCP server after a built-in toolset (like `memory`) inadvertently removes that toolset from the user's available toolset, breaking established workflows.
2.  **Bot Mode Transparency & Control:** Issues regarding the opacity of Bot Mode group activity state and the misbehavior of `no-reply` tokens, which break the expected silent/notify-only interaction model.

### 8. Backlog Watch
*   **#160675** (Created/Updated today): Requires immediate maintainer attention as it is a regression blocking users who rely on the `memory` toolset with MCP configurations.
*   **#159782:** Performance issue that stalls the gateway; the maintainer team should evaluate the `_call`/`asyncio.run_coroutine_threadsafe` pattern used for room reads.
*   **#160692:** A Bot Mode UX bug that has existed since at least the last update cycle; needs a fix to control token rendering logic.
*   **#160379** (Merged today): A positive sign that the team is actively isolating script reads to prevent gateway lock contention.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest
**Date:** 2026-11-27

## 1. Today's Overview
The PicoClaw project shows **minimal activity** for 2026-11-27, with zero new issues or releases generated in the last 24 hours. The repository maintained a healthy state with **5 pull requests updated**, primarily consisting of automated dependency bumps. No open issues were reported, and the project appears stable with no critical bugs or feature requests demanding immediate attention. The main activity stems from automated dependency updates, indicating active maintenance of the Go module dependencies rather than core development.

[GitHub Repository](https://github.com/sipeed/picoclaw)

## 2. Releases
No new releases were published today. The project has no latest releases tagged in the period covered by this digest.

## 3. Project Progress
Five pull requests were updated today, all opened by the dependabot bot and focused on dependency updates:
- **#3474**: Bump `github.com/aws/aws-sdk-go-v2` from 1.42.0 to 1.48.0
- **#3473**: Bump `github.com/Azure/azure-sdk-for-go/sdk/azcore` from 1.22.0 to 1.24.0
- **#1558**: Closed merge of fixes from PRs #1344, #1342, #1341, #1331
- **#1559**: Closed merge of fixes from PRs #1327, #1319, #1318, #1313
- **#1555**: Closed merge of fixes from PRs #1390, #1389, #1383, #1381

The three closed PRs (#1558, #1559, #1555) represent the merging of earlier fix contributions from March 2026, indicating ongoing refinement of the codebase. The two open dependency updates suggest the project maintains current versions of key cloud SDKs.

## 4. Community Hot Topics
The most active items today are the two dependabot PRs:
- **[#3474](https://github.com/sipeed/picoclaw/pull/3474)**: Bump AWS SDK Go v2 (1 upvote)
- **[#3473](https://github.com/sipeed/picoclaw/pull/3473)**: Bump Azure SDK for Go (1 upvote)

With zero comments and undefined reaction counts, these items show low community engagement beyond the automated updates. The underlying need is maintaining compatibility with the latest AWS and Azure SDK versions, ensuring the project can leverage new features and security patches from these cloud providers.

## 5. Bugs & Stability
No bugs, crashes, or regressions were reported today. The zero issue count indicates a stable period for the project. The closed PRs (#1558, #1559, #1555) suggest previous fixes have been successfully merged, though no specific bug reports from today require attention. The project appears to be in a stable state with no active stability concerns.

## 6. Feature Requests & Roadmap Signals
No feature requests or roadmap signals were identified in today's data. The activity is purely maintenance-focused with dependency updates. Based on the merge history of earlier PRs (#1344, #1342, etc.), the project seems to prioritize bug fixes and dependency management over new feature development. No predictions can be made for the next version beyond the current dependency maintenance pattern.

## 7. User Feedback Summary
User feedback today is minimal, with the dependabot PRs receiving no comments or reactions. The three closed merge PRs from March 2026 indicate that user-contributed fixes have been integrated, suggesting an active contributor community. However, the lack of new issues or feature requests today implies either high user satisfaction with current capabilities or a silence period where users aren't reporting pain points. The project's focus on Go-based AI assistant/agent tooling appears to be maintained without major disruptive changes.

## 8. Backlog Watch
**Long-unanswered items needing maintainer attention:**
- **#3474** and **#3473**: Dependabot PRs from 2026-11-26 with zero comments. These require maintainer review/approval to merge the dependency updates.
- **Closed PRs #1558, #1559, #1555**: While merged, these pulled in fixes from March 2026 that may need testing or follow-up validation.

The dependabot PRs represent the primary backlog items, as they automate dependency updates but still require human maintainer review to ensure compatibility and merge into the main codebase.

---

*Data source: GitHub repository sipeed/picoclaw, analyzed 2026-11-27. Project digest generated by AI analyst.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

### NanoClaw Project Digest - 2026-11-27

**Today's Overview**
NanoClaw continues its active development cycle with a significant surge in pull request merging activity. A total of 16 PRs were updated in the last 24 hours, with 7 successfully merged. The project remains in a healthy state with no new releases published today, but the volume of merged code suggests significant momentum moving toward the next release candidate. Community engagement remains high, with multiple bot-initiated image refreshes and core team bug fixes being finalized.

**Releases**
No new releases were published today. The latest tagged version remains `v2026.11.0`. Development activity is focused on stabilizing the `main` branch and refreshing container images rather than publishing a new full version tag.

**Project Progress**
The most significant progress today was the merging of PR #4562, which resolves the `@types/bun` 1.4.4 type-checking failure that was blocking the agent-runner updates. Additionally, PR #4527 addressed a critical usability issue where `/update-nanoclaw` would fail on detached HEADs with an unhelpful git error, now providing clear guidance on how to recover. PR #4424 completed the visual refresh by replacing the favicon with the updated mascot design. The week also saw the merging of the Proton Mail adapter (#4218) and initial llmman local-model support (#4210), expanding the platform's integration capabilities.

**Community Hot Topics**
The most discussed issue today is #4563, which details a container typecheck failure triggered by the `@types/bun` 1.4.4 update. This issue directly stems from the dependency bump in PR #4274 and highlights the tight coupling between type definitions and runtime stability. On the PR front, #4578 continues the automated image refresh cycle, hardening the `v2026.11.0` image with a new timestamp. Users are also closely watching #4525, which documents a failure mode for the update script on detached repositories—a problem now partially mitigated by the merged PR #4527.

**Bugs & Stability**
Stability improvements were a major focus today. The team closed two significant bugs: #4562 fixes the type regression caused by the `@types/bun` update, and #4527 resolves the confusing git error for users on detached HEADs. Furthermore, PR #4484 improved the stability of the service cutover process by adding snapshot space validation before stopping the service, preventing agents from being killed prematurely due to disk issues.

**Feature Requests & Roadmap Signals**
Feature development remains steady with two major open PRs showing clear user demand. PR #4218 adds a native Proton Mail adapter via Bridge, integrating a popular privacy-focused email service directly into the channels system. Similarly, PR #4210 introduces `llmman` as a local-model option, reflecting a broader industry trend toward self-hosted and local LLMs as alternatives to cloud providers. These features are likely candidates for inclusion in the next major release if merged soon.

**User Feedback Summary**
User feedback this cycle centers on reliability and integration ease. The most prevalent pain point involves dependency management, specifically the breaking changes introduced by minor version bumps of `@types/bun`, which can disrupt the type-safe container environment. Conversely, users are expressing high satisfaction with the new capabilities being added, particularly the local model support and the Proton Mail integration, which expand the platform's utility for privacy-conscious and self-hosted users.

**Backlog Watch**
Several important items require maintainer attention in the backlog. Issue #4525, while now having a fix PR (#4527) merged, still serves as a record of the detached HEAD friction. PR #4146, which pins the web-flow branch to author dates, has been open since October 19th and is critical for the correct functioning of the stale workflow. Additionally, PR #4576, which addresses session write serialization to prevent context reordering, is a core runtime fix that has been open for discussion and needs final merging to stabilize the multi-session workflow.

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

Here is the structured project digest for LobsterAI based on the 2026-11-27 data.

### 1. Today's Overview
LobsterAI exhibits high development velocity with 17 Pull Requests merged or closed and 1 new Issue reported within the last 24 hours. The project is currently in an active stabilization and migration phase, transitioning legacy OpenClaw configurations to the new Distributed Shared Hub (DSH) architecture. While the core engineering team is heavily focused on DSH refinements and UI polish, the single open Issue highlights a critical user trust and account security concern regarding arbitrary account bans.

### 2. Releases
No new releases were published today. The project continues to evolve through a rapid series of merged Pull Requests, effectively acting as a rolling release model for the DSH transition.

### 3. Project Progress
Today’s merged PRs (14 closed, 3 open) signal a focus on architectural completion and polish:
*   **DSH Migration & Stability:** Several PRs closed the loop on the DSH migration, including `#3227` (recovering profile reloads and desktop connections) and `#3226` (folding repeated scheduler runs into single tasks). PR `#3223` preserved host identity to avoid duplicate session titles.
*   **UI/UX Polish:** Significant frontend work landed, including `#3221` (redesigning the DSH side chat with multi-tab panels) and `#3215` (adding plugin reorder overflow and polishing the home/companion UI).
*   **Performance:** PR `#3213` notably improved cold startup times, reducing median connection times from ~4.67s to ~1.99s.

### 4. Community Hot Topics
*   **#3225 [OPEN]**: An appeal regarding a disabled account. The user suspects their account was banned due to using a local reverse proxy to forward the internal model interface for personal use. This post has garnered attention as it touches on the sensitive topic of automated account security triggers.
*   **#3229 & #3228 [OPEN]**: Two new PRs focusing on the "Side Chat" UI and shared group conversation preservation in DSH. These are currently generating discussion regarding channel identification and task attribution.

### 5. Bugs & Stability
*   **Critical:** Issue `#3225` reports an account ban triggered by reverse proxy usage. This is a high-severity "blocker" for users who wish to self-host or proxy the AI interface locally.
*   **Fixed:** PR `#3217` addressed a critical Windows installer failure where the update process would abort if previous processes couldn't be stopped, preventing users from updating the application.

### 6. Feature Requests & Roadmap Signals
The volume of PRs merged today suggests the roadmap is shifting toward **DSH maturity**:
*   **Context Optimization:** PR `#3222` implemented P0-P2 initial context token optimization and idle capability cleanup, indicating a push to reduce resource overhead.
*   **Agent Collaboration:** PRs `#3219` and `#3220` introduced "turn rail" outlines and context breakdown popovers, suggesting a roadmap focused on multi-turn agent collaboration and transparency.
*   **Prediction:** The next version is likely to focus on refining the "Side Chat" functionality and improving token management efficiency based on the number of merges in these areas.

### 7. User Feedback Summary
*   **Pain Point:** The primary friction point remains the **account security system**. Users who utilize the software for local model proxying or advanced deployment configurations feel penalized by automated bans (Issue `#3225`). There is a demand for more granular control or whitelisting options for local development setups.
*   **Satisfaction:** The core user base appears satisfied with the transition to DSH, particularly the improved performance (#3213) and the new multi-tab side chat interface (#3221), which addresses long-standing requests for better conversation organization.

### 8. Backlog Watch
*   **#3225 (Open):** Requires maintainer attention regarding the ban policy logic and user appeals process.
*   **#3228 (Open):** Needs validation to ensure the "shared group conversation" fix correctly handles cross-platform group IDs (Feishu, Enterprise WeChat, DingTalk) without breaking historical chat links.
*   **#3218 (Open):** A macOS packaging fix regarding cached lockfiles for skills; while open, it is a build infrastructure issue that may block macOS deployments if not resolved soon.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest
**Generated on:** 2026-11-27
**Source:** github.com/moltis-org/moltis

## 1. Today's Overview
Moltis is currently in a low-activity state with no releases and no new issues reported in the last 24 hours. The project's health is stable but stagnant; the two open pull requests from the previous day represent the only recent development activity. With zero issues updated and no new releases, the maintainer team appears to be in a maintenance or consolidation phase rather than active feature development.

## 2. Releases
No new releases have been published. The project has no tagged releases in the observed period, indicating that the current codebase is either under active development towards a future release or is being maintained in a rolling-development model without formal version tags.

## 3. Project Progress
Two pull requests were updated in the last 24 hours, both focused on fixing integration stability:
*   **PR #1329:** Fixes a crash/startup failure in the Signal integration. The `signal-cli` daemon returns an empty body for its health check, which the client incorrectly attempted to parse as JSON. This PR ensures the health check is accepted without JSON decoding, allowing the Signal channel to start correctly.
*   **PR #1330:** Addresses a significant gap in the Discord integration. Previously, only voice notes (STT) and images were processed as attachments; all other file types (PDF, text, Office files, archives, video) were dropped, with the agent only seeing the caption or an empty body. This PR enables the ingestion of inbound document attachments across these broader file categories.

## 4. Community Hot Topics
The two open pull requests are the primary community hot topics:
*   **#1330 (feat: discord ingest attachments):** Highlights a "hidden" limitation where the agent was functionally blind to most file types in Discord. The underlying need is clear: users expect an AI assistant to handle and reason over arbitrary files shared in chat, not just media.
*   **#1329 (fix: signal accept empty health check):** A technical debt item that was blocking the entire Signal channel from functioning. The lack of comments suggests this was a quick internal fix or a low-visibility bug that was resolved urgently.

## 5. Bugs & Stability
No new bugs were reported today. The two updated PRs (#1329 and #1330) are the stability work for the period. #1329 specifically tackles a regression/crash condition where the Signal daemon's empty health check response broke the channel startup sequence. With these PRs merged or in review, stability for the Signal and Discord endpoints is actively being improved.

## 6. Feature Requests & Roadmap Signals
There are no new feature requests in the issue tracker today. However, the work in **#1330** serves as a strong roadmap signal: the project is moving towards making the agent "file-capable" across platforms. Following this, likely roadmap items would include:
*   Full-text extraction/OCR for the newly supported document types.
*   Support for the same attachment logic in other chat platforms (e.g., Telegram, Slack) that Moltis supports.

## 7. User Feedback Summary
User feedback, as evidenced by the PR activity, centers on **integration completeness**. The Discord feedback implies users are sharing diverse file types with the agent and hitting a wall where those files are ignored. The Signal feedback indicates a demand for reliability and seamless connectivity with popular messaging platforms. Overall satisfaction appears limited by these functional gaps, but the active PRs suggest the maintainers are responsive to these "long-tail" integration issues.

## 8. Backlog Watch
*   **#1330:** Open since 2026-11-26. Requires maintainer review to merge the Discord attachment logic.
*   **#1329:** Open since 2026-11-26. Requires maintainer review to fix the Signal health check parsing.
*   **Long-term:** With zero open issues and zero new releases, the "backlog" is effectively empty of user-reported bugs. The focus is currently on the PR reviewers' inbox. Maintainers should watch for community feedback on the merged changes to #1330 and #1329 to ensure they resolve the intended use cases without introducing new regressions.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

Here is the CoPaw project digest for 2026-11-27.

### 1. Today's Overview
The CoPaw project (QwenPaw) shows high short-term activity with 17 issues and 35 PRs updated in the last 24 hours, though no new releases were published today. The issue queue is currently dominated by UI rendering bugs and backend stability fixes, while the PR pipeline is focused on infrastructure stability, video memory management, and console navigation polish. The project health appears stable with a balanced flow of bug fixes and feature refinements, though the high volume of Windows-specific test failures and rendering edge cases suggests platform compatibility remains a significant maintenance burden.

### 2. Releases
No new releases were published today. The latest version referenced in the issue tracker is `2.3.0-post1`, with subsequent release candidates (`2.3.1b2`) mentioned in bug reports.

### 3. Project Progress
A significant wave of merged and closed PRs advanced several core areas today:
*   **Console & Navigation:** PR #8951 stabilized chat navigation and scrolling, while #8859 clarified confirmation and approval interactions to prevent stale state display.
*   **Relay & Recovery:** PR #8950 recovered Platform bindings and Console frames, following up on previous nightly test failures.
*   **Video Memory:** A cluster of small but critical PRs (#8933, #8932, #8917, #8915) fixed JSON extraction, segment capping, and schema handling in the video_memory module.
*   **Under Review:** PR #8719 added support for runtime base-path deployment, and #8532 (opened Nov 2) continues the long-term work on append-only session storage and paginated history.

### 4. Community Hot Topics
The most discussed items today reflect a mix of UI polish and functional bugs:
*   **#8948 [Open]:** A rendering bug where single `~` characters are parsed as strikethrough delimiters, breaking numeric ranges like `600~1500 t/s`. This has 1 upvote and high relevance to the user-facing console.
*   **#8882 [Open]:** An enhancement request for reference-counted archival long-term memory to prevent "stale entries pile up" and the "agent keeps forgetting" what matters. This addresses a core user complaint about memory retention.
*   **#8945 [Open]:** A Feishu integration bug where table cards treat lines starting with `|` as tables/headings, ignoring fenced code blocks.
*   **#8951 [Open]:** The top-commented PR today focusing on stabilizing chat navigation.

### 5. Bugs & Stability
Today saw several critical stability and compatibility bugs:
*   **#8903 [Open]:** A code mode bug where `run_tool_batch` tool calls fail because the toolkit only exposes `run_code`, while actual tools remain in the catalog.
*   **#8830 [Closed]:** A Windows-specific bug (closed today) regarding orphaned `llama-server.exe` processes accumulating across backend restarts, exhausting memory. While closed, it highlights a persistent OS-specific stability issue.
*   **#8943 [Open]:** A `ToolCallBudgetGate` bug where earlier tool calls are counted again on every iteration, potentially stopping turns prematurely after ~√(2N) calls.
*   **#8949 [Open]:** A frontend bug where the task execution status does not update continuously after upgrading to `2.3.0-post1`, requiring a refresh to see completion.

### 6. Feature Requests & Roadmap Signals
User requests continue to focus on memory and tooling:
*   **#8882** proposes a "reference-counted archival" system for long-term memory, suggesting the roadmap is moving toward more persistent, decay-aware memory management.
*   **#8947** requests adding **WebRouter** as a `web_search` provider, indicating a need for more flexible, third-party search API integration beyond the current Tavily/AnySearch/Firecrawl options.
*   **#8938** questions whether the Composer will migrate from a `<textarea>` to a rich editor (Lexical), signaling potential UI/UX roadmap discussions.

### 7. User Feedback Summary
Users are experiencing a mix of frustration and functional roadblocks:
*   **Frontend Rendering:** The `~` strikethrough bug (#8948) and markdown table overflow (#8845) are immediate visual nuisances affecting the chat experience.
*   **Model Switching:** Issue #8725 reports an inability to switch session-level models within channels (Feishu/DingDing), leaving users stuck with a faulty pinned model.
*   **Memory & Tool Loops:** The "doom-loop" of repeated tool calls (#8712, #8713) and memory decay (#8882) are recurring themes where users feel the agent "forgets" context or gets stuck in cycles.
*   **Windows Parity:** A significant portion of the activity (test failures in #8941, orphaned processes in #8830) stems from Windows platform disparities, indicating a need for better cross-platform QA.

### 8. Backlog Watch
Several important items require maintainer attention:
*   **#8845 (Console: markdown tables overflow):** Open since Nov 20, this UI usability issue remains unresolved, making tables effectively invisible in messages.
*   **#8882 (Reference-counted archival):** An enhancement discussed since Nov 24 that addresses the "Never forgets" promise but has not yet been implemented.
*   **#8725 (Model switching in channels):** Open since Nov 13, blocking users from rescuing sessions with faulty pinned models in production channels.
*   **#8532 (Append-only session storage):** A large feature PR opened in Nov that is still "Under Review," representing a major architectural shift for conversation persistence.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

Here is the ZeroClaw project digest for 2026-11-27.

### **Today's Overview**
ZeroClaw remains in a high-velocity development state, processing 53 total items (3 Issues + 50 PRs) in the last 24 hours. The project is currently in a "merge-first" posture, with all 50 open PRs merged or closed but requiring attention. While the issue pipeline is lighter than the PR pipeline, three active bugs are currently tracked, including a focus-regain regression in the web dashboard. The absence of new releases and the sheer volume of dependency and infrastructure updates suggest a team focused on stabilizing and hardening the platform ahead of a v1.0.0 milestone.

### **Releases**
No new releases were published today. The latest tracked issue (#12712) serves as the official "Roadmap to v1.0.0," indicating the project is in a pre-release stabilization phase rather than active version churn.

### **Project Progress**
A massive influx of 50 PRs was updated in the last 24 hours, indicating a "sprint closing" or release preparation cycle. Key advancements include:
*   **Provider Stability:** PR #12704 fixes a critical bug where tool results lost their paired names, preventing Groq provider errors. PR #12073 resolves streaming retries for Codex endpoints.
*   **Infrastructure & Security:** Significant security hardening occurred via PRs #12490, #12596, and #12659, which scope password, TOTP, and SSH/TOTP credentials to specific vault grants.
*   **Tooling & Channels:** Features like Discord thread modes (#12762) and WebDAV remote file operations (#12695) were merged, expanding ZeroClaw's integration capabilities.

### **Community Hot Topics**
The most discussed items currently are the roadmap tracker and recent chat bugs:
*   **#12712 [Roadmap to v1.0.0]:** High engagement (2 comments, 1 👍). This tracker defines the release order and target dates for the much-anticipated v1.0.0 launch, replacing the old version plan. It signals community eagerness for a stable release.
*   **#11658 [Web Chat Focus Bug]:** A persistent S3 severity bug where the web chat input loses focus after an agent reply. Despite being open since October, it remains unfixed, highlighting a UX regression in the primary web interface.
*   **#12746 [Focus Bug on Reconnect]:** A newer variant of the focus bug (#11658), filed just yesterday, addressing the specific case where focus is lost after a page reconnection.

### **Bugs & Stability**
Three bugs were updated today, all classified as S3 (minor) or low risk, but they impact the core user experience:
1.  **#11658:** Web chat input focus loss (Updated 2026-11-27). No fix PR is currently linked, though it is "in-progress."
2.  **#12746:** Focus loss after page reconnect (Updated 2026-11-27). This is a secondary case raised due to scope limitations of a previous fix.
3.  **#12712:** Roadmap tracker (Meta-issue, not a bug, but critical for stability planning).

Notably, the high volume of PRs related to provider fixes (#12704, #12073) suggests the team is actively addressing the stability bugs that cause crashes or API errors.

### **Feature Requests & Roadmap Signals**
The activity is heavily weighted toward developer infrastructure and provider compatibility rather than end-user-facing features.
*   **Roadmap Definition:** The creation of #12712 indicates the project is formalizing its path to v1.0.0.
*   **Scoped Credentials:** There is a strong push toward fine-grained security (e.g., PRs #12596, #12659), allowing operators to scope username/password and TOTP access independently. This suggests a maturing platform intended for multi-tenant or shared deployments.
*   **Integration Expansion:** Features like Discord thread modes (#12762) and WebDAV operations (#12695) show an expanding ecosystem of supported channels and storage backends.

### **User Feedback Summary**
User feedback, as reflected in the issues, centers on two pain points:
1.  **Chat UX Friction:** The recurring focus-loss bug (#11658, #12746) is the most visible pain point for daily operators. The inability to simply press "Enter" to continue a conversation after an agent reply degrades the chat experience.
2.  **Configuration Complexity:** The introduction of granular permission scopes (vault grants, TOTP aliases) represents a shift toward power-user control. While some users may find this complex, the community appears to favor the increased security and flexibility over the previous "all-or-nothing" approach.

### **Backlog Watch**
Several items require maintainer triage or author action to unblock progress:
*   **#11463 & #11727/11731 (zerocode Sessions):** These PRs, created in early October, address critical Quality of Life features for the ZeroCode component (showing file diffs and reopening sessions after restart). Despite being open for weeks, they have zero comments/👍, suggesting they may be stalled or awaiting a specific reviewer. They are marked as "needs-author-action."
*   **#12711 & #12723 (Dependency Bumps):** While routine, the sheer scale of the rust-patch group bump (32 packages) and the skipping of duplicates require maintainer review to ensure the dependency tree remains healthy and secure.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*