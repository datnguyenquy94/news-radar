# OpenClaw Ecosystem Digest 2026-09-08

> Issues: 165 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-08 04:13 UTC

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

# OpenClaw Project Digest — 2026-09-08

## 1. Today's Overview

OpenClaw shows **very high development velocity** with 500 PRs and 165 issues updated in the last 24 hours. The project is in a heavy maintenance and stabilization phase — 200 PRs were merged/closed today, indicating active resolution of backlog items. No new release was cut. The issue landscape is dominated by **critical reliability bugs** around message loss, session state corruption, internal context leaks across multiple channels (Telegram, Feishu, Slack, Teams, WebChat), and upgrade/recovery failures. Several P1/P0 issues carry the "🦞 diamond lobster" severity rating, signaling release-blocking impact. The PR queue shows maintainers actively reviewing fixes for gateway upgrades, auth token persistence, transcript persistence, and browser panel recovery.

---

## 2. Releases

**No new releases today.** The latest version in the issue reports is 2026.9.2 (mentioned in #140605), but no release tag or changelog appears in the data.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary | Link |
|----|------|---------|------|
| #126947 | Gateway, Agents, Docs | Prevent stale transcript projections from publishing — binds derived projections to canonical source generation | [#126947](https://github.com/openclaw/openclaw/pull/126947) |
| #126943 | Gateway, Scripts, Docs | Persist stateful transcript display semantics — adds semantic layer for durable display projections | [#126943](https://github.com/openclaw/openclaw/pull/126943) |
| #126939 | Gateway, Scripts, Docs | Persist bounded transcript display rows — storage foundation for paged chat history | [#126939](https://github.com/openclaw/openclaw/pull/126939) |
| #121942 | CI | Drop retired poll routing fixtures — cleanup after poll rewrite | [#121942](https://github.com/openclaw/openclaw/pull/121942) |
| #141576 | Browser, Web UI | Recover stale browser panel after screencast disconnects (fixes #141564) | [#141576](https://github.com/openclaw/openclaw/pull/141576) |
| #141823 | Agents | Keep live image probe matching private — test refactor | [#141823](https://github.com/openclaw/openclaw/pull/141823) |
| #141805 | Gateway, Cron | Explain slow automation list requests — adds scoped timing visibility | [#141805](https://github.com/openclaw/openclaw/pull/141805) |
| #113637 | Agents, Gateway, Commands | Explicit per-surface agent targets + default-role materialization | [#113637](https://github.com/openclaw/openclaw/pull/113637) |

**Key advances:** Transcript persistence/display overhaul (three linked PRs), browser panel resilience, CI hygiene, per-surface agent routing, and cron observability.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | 👍 | Core Theme | Link |
|------|------|----------|----|------------|------|
| #44925 | Issue | 26 | 2 | **Subagent completion silently lost** — no retry, notification, or auto-restart on timeout | [#44925](https://github.com/openclaw/openclaw/issues/44925) |
| #97616 | Issue | 15 | 1 | **Zombie child process leak** from hook/tool execution causing runtime degradation | [#97616](https://github.com/openclaw/openclaw/issues/97616) |
| #43367 | Issue | 14 | 1 | **Multi-agent orchestration unstable** — config overwrites, session-lock failures, detached child work | [#43367](https://github.com/openclaw/openclaw/issues/43367) |
| #127229 | Issue | 13 | 0 | **Telegram durable updates falsely tombstoned** before transport settles | [#127229](https://github.com/openclaw/openclaw/issues/127229) |
| #137927 | Issue | 12 | 0 | **Internal context block leaks into visible Telegram messages** (CLOSED) | [#137927](https://github.com/openclaw/openclaw/issues/137927) |
| #133984 | Issue | 12 | 0 | **Upgrade 2026.7.1-2 → 2026.8.1 leaves Gateway unstartable**; `doctor --fix` skips migrations (CLOSED) | [#133984](https://github.com/openclaw/openclaw/issues/133984) |
| #139714 | Issue | 11 | 0 | **Post-core update resume admits unfinalizable `update_runs` row** — `status` stuck "update in progress" | [#139714](https://github.com/openclaw/openclaw/issues/139714) |
| #96675 | Issue | 10 | 2 | **Owner-signed responsibility gates** for assistant memory, actions, skills, evidence reuse | [#96675](https://github.com/openclaw/openclaw/issues/96675) |
| #136311 | Issue | 6 | 0 | **Gateway reacquires reindex lock on every start** — 19 GB orphaned temp DBs accumulate | [#136311](https://github.com/openclaw/openclaw/issues/136311) |
| #139809 | Issue | 6 | 0 | **Telegram does not receive protected secrets prompt from Codex** — times out with `no_answer` | [#139809](https://github.com/openclaw/openclaw/issues/139809) |

**Underlying needs:** Users are hitting **fundamental reliability gaps** in multi-agent orchestration, upgrade/recovery paths, and cross-channel message integrity. The repeated "internal context leak" reports across Telegram, Feishu, Slack, Teams, and WebChat suggest a **systemic trust-boundary violation** in the runtime context envelope handling. The upgrade cascade failures (#133984, #134896) indicate **migration tooling is not production-hardened**.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P0/P1, 🦞 diamond lobster / 🐚 platinum hermit)

| Issue | Severity | Summary | Fix PR? |
|-------|----------|---------|---------|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | P1, 🦞 | Subagent completion silently lost — no retry/notification/auto-restart | No fix PR linked |
| [#127229](https://github.com/openclaw/openclaw/issues/127229) | P1, 🦞 | Telegram durable updates falsely tombstoned pre-adoption | No fix PR linked |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) | P1, 🐚 | Gateway reacquires reindex lock on every start; 19 GB orphaned temp DBs | No fix PR linked |
| [#139809](https://github.com/openclaw/openclaw/issues/139809) | P1, 🦞 | Telegram doesn't receive Codex protected secrets prompt | No fix PR linked |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | P1, 🦞 | Telegram durable outbound stuck in `send_attempt_started`, lost on restart | No fix PR linked |
| [#139485](https://github.com/openclaw/openclaw/issues/139485) | P1, 🦪 | Managed upgrade leaves gateway offline; finalization nonterminal | No fix PR linked |
| [#111578](https://github.com/openclaw/openclaw/issues/111578) | P0, 🦞 | Gateway auth token dropped from service-env on update (recurs despite claimed fix) | No fix PR linked |
| [#141787](https://github.com/openclaw/openclaw/issues/141787) | P2, 🦞 | Dreaming on untouched workspace creates `memory/` and marks configured, spending BOOTSTRAP.md early | No fix PR linked |
| [#141694](https://github.com/openclaw/openclaw/issues/141694) | P2, 🦞 | Silent-fallback reply hardcodes "couldn't reach model backend" even when provider returned HTTP 200 | No fix PR linked |
| [#141042](https://github.com/openclaw/openclaw/issues/141042) | P2, 🦞 | `backup create` aborts whole archive on transient SQLite sidecar ENOENT | No fix PR linked |

### 🟠 High (P1, 🦐 gold shrimp / 🦪 silver shellfish)

| Issue | Severity | Summary | Fix PR? |
|-------|----------|---------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1, 🦐 | Zombie child process leak from hook/tool execution | No fix PR linked |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | P1, 🦐 | Multi-agent orchestration unstable: config overwrites, session-lock failures | Has linked PR (clawsweeper:linked-pr-open) |
| [#137927](https://github.com/openclaw/openclaw/issues/137927) | P1 | Internal context leaks into Telegram messages | **CLOSED** |
| [#133984](https://github.com/openclaw/openclaw/issues/133984) | P1, 🦞 | Upgrade cascade: 5-blocker gateway restart + `doctor --fix` self-referential failure | **CLOSED** |
| [#134896](https://github.com/openclaw/openclaw/issues/134896) | P1, 🦞 | 2026.8.1 update: 5-blocker gateway restart cascade + `doctor --fix` failure | **CLOSED** |
| [#140605](https://github.com/openclaw/openclaw/issues/140605) | P1, 🦪 | Feishu DM still leaks inbound metadata in 2026.9.2 (follow-up to #93966) | No fix PR linked |
| [#137493](https://github.com/openclaw/openclaw/issues/137493) | P1 | Internal runtime context leaks into WebChat on large pastes | No fix PR linked |
| [#127784](https://github.com/openclaw/openclaw/issues/127784) | P1, 🦞 | Runtime-only turns inline full channel inbound context into visible user turn | Has linked PR |
| [#115978](https://github.com/openclaw/openclaw/issues/115978) | P1, 🦞 | Internal context leaks into Feishu channel messages | No fix PR linked |
| [#136360](https://github.com/openclaw/openclaw/issues/136360) | P1, 🐚 | Internal context leaks as standalone visible turns on Microsoft Teams | No fix PR linked |
| [#136471](https://github.com/openclaw/openclaw/issues/136471) | P1 | Internal context leaks raw into Telegram; per-turn session IDs instead of persistent | No fix PR linked |
| [#134240](https://github.com/openclaw/openclaw/issues/134240) | P2, 🐚 | Internal runtime-context envelope leaks into Telegram (same class as ACP leak) | No fix PR linked |
| [#141816](https://github.com/openclaw/openclaw/issues/141816) | P0 | Windows hub install gateway fails due to wrong Node version | **CLOSED** |

**Pattern:** The **internal context envelope leak** appears in at least 7 issues across 5 channels (Telegram, Feishu, Slack, Teams, WebChat), suggesting a shared code path in `attempt-prompt-build.ts` or channel adapters. The **upgrade/recovery path** has multiple independent failure modes. **Subagent/orchestration reliability** remains fragile.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Summary | Likelihood for Next Version |
|-------|----------|---------|----------------------------|
| [#96675](https://github.com/openclaw/openclaw/issues/96675) | P2, 🌊 | Owner-signed responsibility gates for memory, actions, skills, evidence reuse | Medium — security/privacy focus, 2 👍 |
| [#60602](https://github.com/openclaw/openclaw/issues/60602) | P2, 🌊 | Per-Agent Bedrock `requestMetadata` injection for multi-agent cost attribution | Low — niche, needs security review |
| [#98084](https://github.com/openclaw/openclaw/issues/98084) | P2, 🌊 | MiniMax M3 native video input with timestamp-scaling metadata | Low — reference branch only, stale |
| [#45503](https://github.com/openclaw/openclaw/issues/45503) | P3, 🌊 | Manual context clearing for tool results (vs TTL-only) | Medium — 2 👍, clear UX win |
| [#129366](https://github.com/openclaw/openclaw/issues/129366) | P3, 🌊 | Model request rate limiting (per-model or global) | Low — needs product decision |
| [#82011](https://github.com/openclaw/openclaw/issues/82011) | P3, 🌊 | Input text typo/grammar detection (Chinese) | Low — niche, 1 👍 |
| [#128073](https://github.com/openclaw/openclaw/issues/128073) | P3, 🌊 | Allow permission-gated workspace plugins to use host-mediated session attachment | Low — needs security review |
| [#124919](https://github.com/openclaw/openclaw/issues/124919) | P2, 🌊 | Expose Discord permission-overwrite ops through message action contract | **CLOSED** (stale) |
| [#124906](https://github.com/openclaw/openclaw/issues/124906) | P3, 🌊 | Noninteractive MCP OAuth credential import | **CLOSED** (stale) |

**Strongest signals:** Owner confirmation gates (#96675) and manual context clearing (#45503) have community support and address clear UX gaps. The MiniMax video (#98084) and Bedrock cost attribution (#60602) are provider-specific and blocked on security review.

---

## 7. User Feedback Summary

**Pain points (from issue narratives):**
- **Upgrade trauma:** Multiple users report 5+ sequential blockers upgrading 2026.7.x → 2026.8.x/2026.9.x, requiring manual DB surgery and snapshot rollbacks (#133984, #134896, #139485). `doctor --fix` is described as ineffective for config-key migrations.
- **Silent data loss:** Subagent results vanish without notification (#44925); Telegram outbound messages stuck then lost on restart (#126246); durable updates tombstoned prematurely (#127229).
- **Trust boundary violations:** Internal runtime context (`<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>`) renders visibly to end users across Telegram, Feishu, Slack, Teams, WebChat — reported as security-relevant (#137927, #115978

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-08)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **high fragmentation with convergent reliability pressures**. Twelve active projects span from full-stack desktop assistants (OpenClaw, LobsterAI, Hermes Agent) to specialized orchestration layers (NanoBot, NanoClaw, ZeroClaw) and niche protocol adapters (PicoClaw, IronClaw, Moltis). **Zero projects released today**, indicating a cross-ecosystem stabilization phase. The dominant theme is **production hardening**: every active project is fixing critical regressions in session persistence, multi-channel message integrity, upgrade/recovery paths, and provider compatibility. Community engagement is polarized—three projects (OpenClaw, CoPaw, ZeroClaw) drive 80%+ of issue/PR volume, while four (NullClaw, Moltis, ZeptoClaw, IronClaw) operate in low-velocity maintenance mode.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Release Today | Health Score* |
|---------|---------------------|-------------------|-------------------|---------------|---------------|
| **OpenClaw** | 165 | 500 | ~200 | No | 🟡 High velocity, critical bugs |
| **NanoBot** | 2 new | 24 | 10 | No | 🟢 Healthy, enterprise/edge focus |
| **Hermes Agent** | 15 active | 50 | 4 | **Yes** (v0.21.1) | 🟢 High velocity, infra reliability focus |
| **PicoClaw** | 1 critical | 5 | 0 | No | 🟡 Caution: zero merges, ARM blocker |
| **NanoClaw** | 2 new (high-sev) | 28 | 17 | No | 🟢 High velocity, durable-host landed |
| **NullClaw** | 0 | 1 (Dependabot) | 0 | No | 🔴 Dormant, stale deps |
| **IronClaw** | 1 (auto) | 4 | 0 | No | 🟢 Stable, UI polish sprint |
| **LobsterAI** | 0 | 7 | 5 | No | 🟢 Healthy, user-facing fixes shipping |
| **Moltis** | 0 | 1 | 0 | No | 🟡 Quiet, single config bug |
| **CoPaw/QwenPaw** | 23 | 35 | 14 | No | 🟡 High velocity, v2.2.0 regressions |
| **ZeptoClaw** | 0 | 0 | 0 | No | 🔴 Inactive |
| **ZeroClaw** | 9 | 50 | 3+ | No | 🟢 Strong, security/Responses API push |

*Health Score: 🟢=Healthy active development, 🟡=Active but significant risks, 🔴=Stalled/at risk

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale of multi-channel support**: Only project with verified issues across 5+ channels simultaneously (Telegram, Feishu, Slack, Teams, WebChat)
- **Orchestration depth**: Subagent management, multi-agent orchestration, and session locking are first-class concerns
- **Community surface**: 165 issues/24h indicates largest active user base reporting production pain

**Technical Approach Differences:**
- **Gateway-centric architecture**: Centralized transcript persistence, reindex locking, and upgrade tooling (`doctor --fix`) — unique in scope
- **Trust-boundary enforcement**: Systemic "internal context envelope" leaks reveal a shared runtime context model that peers avoid via simpler message-passing
- **Diamond-lobster severity taxonomy**: Formalized release-blocking classification absent in other projects

**Community Size Comparison:**
- **Largest by issue volume** (165 vs next ~23 for CoPaw)
- **PR throughput** (500/24h) exceeds next 3 projects combined
- **Contributor breadth**: External contributors credited via "salvage" PRs in Hermes Agent, but OpenClaw's scale suggests larger org-backed maintenance

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session/transcript durability** | OpenClaw, NanoBot, NanoClaw, Hermes Agent, ZeroClaw | Persistent transcript projections (OpenClaw #126943), compaction checkpoints (NanoBot #5694), transcript rotation gaps (NanoClaw #3732), compressed conversation cost tracking (Hermes #105535), log rotation (ZeroClaw #10214) |
| **Multi-channel message integrity** | OpenClaw, NanoBot, PicoClaw, LobsterAI, ZeroClaw | Internal context leaks across 5 channels (OpenClaw), Feishu single-card streaming (NanoBot #5567), QQ auth regression (PicoClaw #3365), in-app browser element refs (LobsterAI #2621), Telegram passive context (ZeroClaw #10640) |
| **Upgrade/recovery reliability** | OpenClaw, NanoClaw, Hermes Agent | Gateway unstartable post-upgrade (OpenClaw #133984), `doctor --fix` ineffective (OpenClaw, NanoClaw), gateway SIGTERM freeze (Hermes #82874) |
| **Provider compatibility & streaming** | Hermes Agent, NanoBot, ZeroClaw, CoPaw, LobsterAI | Gemini schema crashes (Hermes #55643), OpenCode session headers (NanoBot #5662, PicoClaw #3371), OpenAI Responses WebSocket steering (ZeroClaw #10708), DeepSeek context compression (CoPaw #6541), browser tool errors (LobsterAI #2621) |
| **Edge/lightweight deployment** | NanoBot, PicoClaw, ZeroClaw | Unmanned retail/IoT (NanoBot #5693), ARM/embedded QQ (PicoClaw #3365), filesystem confinement (ZeroClaw #9977) |
| **Security hardening** | ZeroClaw, NanoClaw, OpenClaw | Credential rotation (ZeroClaw #9419), filesystem/git confinement (ZeroClaw #9977/#10337), auth token persistence (OpenClaw #111578), command audit defaults (ZeroClaw #9410) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architectural Signature |
|---------|---------------|--------------|------------------------|
| **OpenClaw** | Full-stack multi-channel gateway + orchestration | Enterprise/teams, power users | Centralized gateway, canonical transcript projections, per-surface agent routing |
| **NanoBot** | Lightweight multi-channel bot + edge deployment | Developers, enterprise (Feishu/Telegram), IoT | Modular provider/channel plugins, cron scheduler, sandbox exec (Seatbelt) |
| **Hermes Agent** | Desktop-first agent with bot-mode continuity | Researchers, local-first users | Persistent CLI sessions, gateway MCP multiplexing, skill index automation |
| **PicoClaw** | Protocol-rich chat adapter (IRC, QQ, Build Remote) | Embedded/ARM hobbyists, Chinese ecosystem | Multi-protocol channel layer, provider-agnostic, minimal core |
| **NanoClaw** | Durable host + agent-to-agent coordination | Fleet operators, automation-heavy teams | Coordination state survive restarts, A2A messaging, browser portal setup |
| **ZeroClaw** | OpenAI Responses API parity + production hardening | OpenAI ecosystem adopters, security-conscious | Streaming SSE webhooks, programmatic tools, reasoning state preservation |
| **LobsterAI** | Desktop UI/UX polish + OpenClaw integration | End-users, Chinese Windows users | Electron renderer, library artifact management, installer quality |
| **CoPaw/QwenPaw** | Qwen-ecosystem IDE/console + memory plugins | Chinese developers, Qwen model users | Memory backend plugins, skill versioning, Creator blueprint workbench |
| **IronClaw** | WebUI command-result UX refinement | Web-first users | React-based console, slash-command grid, accessibility |
| **Moltis** | Cron/scheduler for agent tasks | Automation builders | Minimal config-driven scheduler |
| **NullClaw** | Container base images | Infrastructure teams | Alpine Docker images only |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (High Velocity, High Risk)** | OpenClaw, CoPaw, ZeroClaw | 50+ PRs/24h, critical regressions in latest versions, large contributor pools, release-blocking bugs |
| **Stabilizing (High Velocity, Fixes Landing)** | NanoBot, NanoClaw, Hermes Agent, LobsterAI | 20-50 PRs/24h, merged fixes for high-sev bugs, clear roadmap signals, recent releases or imminent |
| **Focused Sprint (Low Volume, Targeted)** | IronClaw, PicoClaw | <10 PRs/24h, single-theme work (UI polish, ARM blocker), maintainer-driven |
| **Maintenance/Quiet** | Moltis, NullClaw, ZeptoClaw | ≤1 PR/24h, no releases, stale backlog, limited community signals |

**Maturity Indicators:**
- **Release discipline**: Only Hermes Agent shipped a patch today; others accumulating changes
- **Backlog health**: OpenClaw and ZeroClaw have 40+ day stale security/architectural PRs; NanoBot has 56-day Telegram enterprise PR
- **Contributor integration**: Hermes Agent "salvage" PRs and NanoBot first-time contributors show healthy onboarding; OpenClaw's scale suggests formal processes

---

## 7. Trend Signals for AI Agent Developers

1. **Multi-channel trust boundaries are unsolved** — Internal context leaks across 5+ channels (OpenClaw) and Feishu/Telegram UX fragmentation (NanoBot, PicoClaw) indicate **no project has a proven message-envelope sanitization layer**. This is a shared infrastructure gap.

2. **Upgrade/recovery is the #1 operational blocker** — OpenClaw's cascade failures, NanoClaw's unbounded archives, Hermes Agent's gateway shutdown freeze, and ZeroClaw's log rotation needs all point to **missing "day-2 operations" tooling**. Projects investing in durable-host patterns (NanoClaw #3653) and entry-count log rotation (ZeroClaw #10214) are ahead.

3. **OpenAI Responses API is the new compatibility baseline** — ZeroClaw's 4 new issues (#10704-10708), NanoBot's OpenCode headers, and PicoClaw's opencode-go provider show **convergence on streaming, steering, programmatic tools, and reasoning state** as required features.

4. **Edge/IoT deployment is emerging as a differentiator** — NanoBot's unmanned retail request, PicoClaw's ARM QQ regression, and ZeroClaw's filesystem confinement reveal **growing demand for binary size, offline operation, and hardware-specific sandboxing**.

5. **Plugin/skill marketplaces need versioning and security** — CoPaw's memory backend plugins (#7616), NanoClaw's OpenCode skill (#3733), and ZeroClaw's credential rotation (#9419) signal **ecosystem maturation toward regulated extensibility**.

6. **Desktop UX quality separates adopter tiers** — LobsterAI's Windows font fix, Hermes Agent's Windows TLS regression, IronClaw's command-result grid, and CoPaw's IME crash fix show **platform-native polish directly impacts enterprise adoption**.

7. **Observability > Features for production users** — NanoClaw's fleet operators, ZeroClaw's log rotation, Hermes Agent's skills index monitoring, and OpenClaw's cron timing visibility all prioritize **measurable runtime health over new capabilities**.

---

**Strategic Takeaway**: The ecosystem is consolidating around **durable execution substrates** (transcript persistence, coordination survival, upgrade safety) and **OpenAI Responses parity**. Projects that solve cross-channel trust boundaries and day-2 operations will capture enterprise deployments; those optimizing for edge/IoT and plugin security will own the long tail. OpenClaw's scale makes it the de facto reference for multi-channel reliability patterns—its fixes (or failures) will propagate across forks and derivatives.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-08

## 1. Today's Overview
NanoBot shows **high development velocity** with 24 PRs updated in the last 24 hours (10 merged/closed, 14 open), indicating active maintenance and feature work. Two new issues were filed: one requesting Feishu (Lark) channel UX improvements to consolidate multi-turn agent replies into a single streaming card, and another proposing ultra-lightweight deployment for unmanned retail/IoT edge scenarios. No new releases were published today. The PR pipeline spans channel enhancements (Telegram custom API base), cron stability fixes, WebUI compaction/notification improvements, provider failover logic, sandbox backends (macOS Seatbelt), and Dream memory size guardrails — suggesting a focus on **reliability, multi-channel polish, and edge-deployment readiness**.

---

## 2. Releases
**No new releases** in the last 24 hours.

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary |
|----|------|---------|
| [#5607](https://github.com/HKUDS/nanobot/pull/5607) | **Feature** | Added **AnySearch** web-search provider (key-optional, anonymous quota) — expands search provider ecosystem. |
| [#5676](https://github.com/HKUDS/nanobot/pull/5676) | **Feature** | CLI: added **attach-only Desktop target selection** for `nanobot`/`nanobot webui`, keeping Desktop/Python installs independent. |
| [#5687](https://github.com/HKUDS/nanobot/pull/5687) | **Docs** | Clarified **gateway health & WebSocket readiness** responses in multi-instance guide (200/503 conditions, full JSON shape). |
| [#5690](https://github.com/HKUDS/nanobot/pull/5690) | **Docs** | Unified **personal agent installation** with Quick Start guide — single maintained install path. |
| [#5691](https://github.com/HKUDS/nanobot/pull/5691) | **Bugfix (WebUI)** | Fixed **multiline dollar math** rendering (KaTeX errors when `$$C\n=...$$` delimiters share lines with content). |
| [#5689](https://github.com/HKUDS/nanobot/pull/5689) | **Bugfix (WebUI)** | Fixed **working timer consistency** across first output (server vs. browser clock skew causing jump from “13–15s” to 1s). |
| [#5686](https://github.com/HKUDS/nanobot/pull/5686) | **Bugfix (Cron)** | **Deferred timer re-arming** while cron jobs execute — prevents `CancelledError` before schedule save when job store edited mid-callback. |
| [#5694](https://github.com/HKUDS/nanobot/pull/5694) | **Bugfix (WebUI/Compaction)** | **Summary checkpoints for all compaction triggers** — prevents large request retention and stale context usage in WebUI. |
| [#5682](https://github.com/HKUDS/nanobot/pull/5682) | **Bugfix (Exec)** | Resolved **relative `working_dir` from workspace** (was resolved from process CWD). |
| [#5695](https://github.com/HKUDS/nanobot/pull/5695) | **Bugfix (Agent)** | **Stable tool results across replay** — normalizes oversized results before next request; stops `_save_turn` re-truncation. |

**Net progress**: 10 PRs merged/closed — heavy on **stability (cron, compaction, replay, timer)**, **WebUI polish (math, timer, notifications)**, and **documentation unification**.

---

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) | Issue | 5 comments, updated 2026-09-07 | **Feishu/Lark UX**: Consolidate agent’s multi-message replies (tool hints, progress, final) into **one streaming card** per user message — critical for enterprise chat UX. |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | PR | Long-running (since Jul 14), updated today | **Telegram self-hosted/enterprise gateway**: Custom `api_base` + extra headers for Bot API — enables air-gapped/private deployments. |
| [#5693](https://github.com/HKUDS/nanobot/issues/5693) | Issue | 0 comments, created today | **Ultra-lightweight/edge deployment** for unmanned retail/IoT — requests smaller footprint, Chinese docs, edge-device support. |
| [#5662](https://github.com/HKUDS/nanobot/pull/5662) | PR | 3 days old, updated today | **OpenCode session header** (`x-opencode-session`) for prompt-cache optimization — vendor-specific provider hardening. |

**Signal**: Enterprise channel maturity (Feishu, Telegram self-hosted) and **edge/IoT deployment** are emerging as strategic directions.

---

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **High** | Cron timer cancelled mid-callback → lost schedule saves ([#5686](https://github.com/HKUDS/nanobot/pull/5686)) | **Merged** | #5686 |
| **High** | Compaction leaves large request / stale context in WebUI ([#5694](https://github.com/HKUDS/nanobot/pull/5694)) | **Open** | #5694 |
| **High** | Tool results re-truncated on replay → history drift ([#5695](https://github.com/HKUDS/nanobot/pull/5695)) | **Open** | #5695 |
| **Medium** | Relative `working_dir` resolved from process CWD not workspace ([#5682](https://github.com/HKUDS/nanobot/pull/5682)) | **Open** | #5682 |
| **Medium** | Provider failover blocked by runner deadline cancellation ([#5675](https://github.com/HKUDS/nanobot/pull/5675)) | **Open** | #5675 |
| **Low** | WebUI multiline `$$` math rendering error ([#5691](https://github.com/HKUDS/nanobot/pull/5691)) | **Merged** | #5691 |
| **Low** | Working timer jumps on first activity (clock skew) ([#5689](https://github.com/HKUDS/nanobot/pull/5689)) | **Merged** | #5689 |

**Note**: 3 high-severity bugs have open fix PRs awaiting review; 3 merged today.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|------------------------------|
| **Feishu single streaming card** (consolidate multi-turn replies) | [#5567](https://github.com/HKUDS/nanobot/issues/5567) | **High** — 5 comments, active discussion, enterprise channel priority |
| **Telegram custom Bot API base URL** (self-hosted/enterprise) | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | **High** — long-running PR, implements #4702, near-ready |
| **Ultra-lightweight/edge deployment** (unmanned retail, IoT) | [#5693](https://github.com/HKUDS/nanobot/issues/5693) | **Medium** — new, aligns with Seatbelt sandbox (#5628) & exec sandbox work |
| **macOS Seatbelt sandbox backend** for `tools.exec` | [#5628](https://github.com/HKUDS/nanobot/pull/5628) | **Medium** — opt-in, no new deps, security hardening |
| **OpenCode `x-opencode-session` header** | [#5662](https://github.com/HKUDS/nanobot/pull/5662) | **High** — vendor deadline (2026-09-06), prompt-cache critical |
| **Dream memory file size guardrails** | [#5630](https://github.com/HKUDS/nanobot/pull/5630) | **High** — regression from #5622, unbounded growth risk |

**Prediction**: Next patch/minor will likely include Feishu card consolidation, Telegram custom API, OpenCode header, Dream size caps, and cron/compaction fixes. Edge deployment may target a later minor.

---

## 7. User Feedback Summary
| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Feishu UX fragmentation** — users see multiple bot messages per request (tool hints, progress, final) | [#5567](https://github.com/HKUDS/nanobot/issues/5567): “用户体验较差…希望整合为一条流式卡片消息” |
| **Self-hosted/air-gapped Telegram** — enterprise cannot use public `api.telegram.org` | [#4919](https://github.com/HKUDS/nanobot/pull/4919): implements #4702 for custom `api_base` |
| **Edge/IoT deployment gaps** — need lighter binary, Chinese docs, ARM/edge support | [#5693](https://github.com/HKUDS/nanobot/issues/5693): “无人零售门店智能运营…更轻量的部署方案” |
| **WebUI math rendering broken** for multiline `$$` formulas | [#5691](https://github.com/HKUDS/nanobot/pull/5691): KaTeX red error on `$$C\n=...$$` |
| **Timer UX confusion** — “Working for 13s” on fresh message due to clock skew | [#5689](https://github.com/HKUDS/nanobot/pull/5689) |
| **OpenCode prompt-cache loss** without session header — may error after Sep 6 | [#5662](https://github.com/HKUDS/nanobot/pull/5662) |

**Sentiment**: Constructive — users file detailed issues with reproduction steps; enterprise/edge users actively shaping roadmap.

---

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) **Telegram custom API base** | ~56 days (since Jul 14) | **Stale PR** — implements voted issue #4702, enables enterprise/self-hosted Telegram; marked `conflict`, needs rebase/review. |
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) **Move session persistence off event loop** | ~11 days (since Aug 28) | **P1 performance** — slow storage blocks event loop, stalls all conversations; marked `conflict`, critical for scale. |
| [#5547](https://github.com/HKUDS/nanobot/pull/5547) **WebUI turn-completion sound** | ~13 days (since Aug 26) | Duplicate of #5602 (merged?); both open — needs consolidation. |
| [#5611](https://github.com/HKUDS/nanobot/pull/5611) **Bound reasoning replay to latest turn** | ~9 days (since Aug 30) | Token-budget & prefill cost optimization; closes #5584. |
| [#5630](https://github.com/HKUDS/nanobot/pull/5630) **Dream memory size guardrails** | ~6 days (since Sep 2) | Regression from #5622 — unbounded `SOUL.md`/`MEMORY.md` growth injects into every request. |
| [#5628](https://github.com/HKUDS/nanobot/pull/5628) **macOS Seatbelt sandbox** | ~6 days (since Sep 2) | Security hardening for exec tool; opt-in, no deps — good candidate for merge. |

**Action suggested**: Prioritize review of **#4919 (Telegram enterprise)**, **#5580 (event-loop persistence)**, and **#5630 (Dream memory cap)** — highest impact on stability and enterprise adoption.

---

## Project Health Indicators
| Metric | Status |
|--------|--------|
| **PR throughput** | 🟢 High (24 PRs/24h, 10 merged) |
| **Issue triage** | 🟡 Moderate (2 new, 1 high-value enterprise UX) |
| **Bug fix latency** | 🟢 Good (3 high-sev merged today, 3 open with PRs) |
| **Documentation hygiene** | 🟢 Good (2 docs PRs merged, unification effort) |
| **Strategic alignment** | 🟢 Strong (enterprise channels, edge/IoT, provider hardening) |

**Overall**: **Healthy, active project** with clear enterprise/edge trajectory. Maintainer bandwidth appears sufficient for current PR volume; backlog items #4919 and #5580 are the main bottlenecks.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-08

## 1. Today's Overview
Hermes Agent showed **high velocity** on 2026-09-08 with 50 PRs updated (4 merged/closed) and 15 issues active. A patch release **v0.21.1 (v2026.9.7)** was cut from `main` at commit `6178e9f`, rolling up post-v0.21.0 changes for downstream consumers. The day’s work clusters around **gateway stability** (cancellation, MCP multiplexing, shutdown), **desktop UX** (group-chat roster filing, Windows TLS), **provider compatibility** (Gemini schema crashes, `key_cmd` auth), and **session/cost accounting** (compression cost freeze, lease reclamation). Several PRs are “salvage” merges that preserve external contributor attribution while rebasing onto current `main`.

## 2. Releases
### v0.21.1 (v2026.9.7) — Patch Release
- **Date:** 2026-09-07  
- **Scope:** Tagged deployment roll-up of `main` since v0.21.0; no new user-facing features.  
- **Breaking Changes:** None.  
- **Migration Notes:** Downstream deployments should re-pull the new tag; no config/schema changes.  
- **Changelog:** [Release notes](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.7) (truncated in feed; see tag for full diff).

---

## 3. Project Progress — Merged/Closed PRs Today
| PR | Area | Summary |
|----|------|---------|
| [#105545](https://github.com/NousResearch/hermes-agent/pull/105545) | agent, gemini, mcp | **Closed** – Salvages #55643: fixes native Gemini tool-call crashes on nullable/union parameters (preserves contributor @MaxFreedomPollard). |
| [#105539](https://github.com/NousResearch/hermes-agent/pull/105539) | desktop | **Closed** – Duplicate of #105543; group-chat roster filing feature. |
| [#55643](https://github.com/NousResearch/hermes-agent/pull/55643) | agent, gemini | **Closed** – Original fix for `TypeError: unhashable type: 'list'` on array-typed tool schemas with enum (superseded by #105545). |
| [#55666](https://github.com/NousResearch/hermes-agent/pull/55666) | agent, gemini | **Closed** – Alternate fix for same Gemini schema crash (list type in enum sanitization). |

**Net progress:** Four PRs closed, three of which converge on the same Gemini schema regression; the desktop group-chat filing PR was duplicated and one copy closed.

---

## 4. Community Hot Topics (Most Comments / Engagement)
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Issue (bug) | 176 | **Skills index freshness** – automated probe shows index 29.8 h stale (limit 26 h); blocks `/docs/skills` site. CI cron (`skills-index.yml`) or deploy workflow likely failing silently. |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Issue (feature) | 27 | **Bot Group Chat continuity** – users want bots to keep collaborating after Desktop closes; requires gateway-side persistence & cross-device handoff. Linked PR [#98307](https://github.com/NousResearch/hermes-agent/pull/98307) is the flagship implementation. |
| [#82874](https://github.com/NousResearch/hermes-agent/issues/82874) | Issue (bug) | 6 | **Gateway SIGTERM freeze** – blocking `future.result(timeout=15)` in `shutdown_mcp_servers()` stalls event loop; clean-exit marker never written. Fix likely in gateway shutdown path. |
| [#105541](https://github.com/NousResearch/hermes-agent/issues/105541) | Issue (bug) | 2 | **Cancellation swallowed** – gateway turn cancellation waits for 5 s flush or gets swallowed; PR [#105549](https://github.com/NousResearch/hermes-agent/pull/105549) open with fix. |
| [#99893](https://github.com/NousResearch/hermes-agent/pull/99893) | PR (bug) | — | **`key_cmd` provider auth** – model picker didn’t resolve short-lived bearer tokens; salvaged into [#105550](https://github.com/NousResearch/hermes-agent/pull/105550). |

**Signal:** Infrastructure reliability (skills index, gateway shutdown) and **multi-device bot continuity** are the top community pain points.

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Component | Fix PR? |
|----------|-------|-----------|---------|
| **P1** | [#105396](https://github.com/NousResearch/hermes-agent/issues/105396) – Multiplexed gateway starves non-default profiles of MCP servers; `/reload-mcp` reports “No MCP servers connected” | gateway, mcp, profiles | [#105542](https://github.com/NousResearch/hermes-agent/pull/105542) (open) |
| **P1** | [#102194](https://github.com/NousResearch/hermes-agent/issues/102194) (via PR [#102411](https://github.com/NousResearch/hermes-agent/pull/102411)) – Persistent CLI sessions lose provider prompt cache on new turns (~50 k token cutoff) | agent, cli, sessions | [#102411](https://github.com/NousResearch/hermes-agent/pull/102411) (open) |
| **P2** | [#105541](https://github.com/NousResearch/hermes-agent/issues/105541) – Cancellation waits for flush / swallowed | gateway | [#105549](https://github.com/NousResearch/hermes-agent/pull/105549) (open) |
| **P2** | [#82874](https://github.com/NousResearch/hermes-agent/issues/82874) – SIGTERM blocks event loop in `shutdown_mcp_servers()` | gateway, docker | — |
| **P2** | [#105532](https://github.com/NousResearch/hermes-agent/issues/105532) – Windows Desktop: expired system roots cause `CERT_HAS_EXPIRED` for valid gateways | desktop, windows | — |
| **P2** | [#105535](https://github.com/NousResearch/hermes-agent/issues/105535) – Compressed conversation cost freezes at rotation; profile usage excludes post-compression spend | dashboard, sessions, compression | — |
| **P2** | [#105551](https://github.com/NousResearch/hermes-agent/issues/105551) – MCP sampling crashes on valid non-object JSON tool arguments | agent, mcp | — |
| **P3** | [#104912](https://github.com/NousResearch/hermes-agent/issues/104912) – Desktop renders internal/runtime content as assistant response | desktop | — |
| **P3** | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) – Skills index stale (29.8 h) | docs, ci | — |
| **P3** | [#55645](https://github.com/NousResearch/hermes-agent/issues/55645) – Gemini tool translation crashes on array-typed param with enum (fixed in #105545) | agent, gemini | [#105545](https://github.com/NousResearch/hermes-agent/pull/105545) (closed) |

**Stability note:** Two P1 bugs affect core multi-profile gateway usage and persistent CLI sessions; both have open fix PRs. Windows TLS regression is new and unassigned.

---

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Minor |
|---------|----------|---------------------------|
| **Bot Group Chat continuity across devices** | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) / [#98307](https://github.com/NousResearch/hermes-agent/pull/98307) | **High** – flagship PR open, multiple follow-ups (#104198 file sharing, #105543 group filing) |
| **Group chats filable into user roster sections** | [#105544](https://github.com/NousResearch/hermes-agent/issues/105544) / [#105543](https://github.com/NousResearch/hermes-agent/pull/105543) | **High** – PR open, trivial UI parity with bots |
| **Model picker favorites / LRU / pinning** | [#23117](https://github.com/NousResearch/hermes-agent/issues/23117), [#25363](https://github.com/NousResearch/hermes-agent/issues/25363), [#88881](https://github.com/NousResearch/hermes-agent/issues/88881) | **Medium** – three duplicate/related issues, no PR yet |
| **User-configurable model display labels** | [#88881](https://github.com/NousResearch/hermes-agent/issues/88881) | **Medium** – disambiguation for same model via different providers |
| **API Route as first-class provider** | [#105547](https://github.com/NousResearch/hermes-agent/pull/105547) | **Medium** – PR open, adds OpenAI-compatible discovery |
| **Czech i18n** | [#105503](https://github.com/NousResearch/hermes-agent/pull/105503) | **Low** – single PR, no issue linkage |

**Prediction:** Bot-mode continuity (#98307) and group-chat roster filing (#105543) are closest to merge; model favorites need a unified design decision.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Skills docs out of date** | #66616 (176 comments, automated probe) | Blocks contributor onboarding & skill discovery |
| **Gateway shutdown hangs on Docker/SIGTERM** | #82874 | Breaks clean container orchestration |
| **Multi-profile MCP servers invisible after reload** | #105396 | Forces users to restart gateway for secondary profiles |
| **Windows Desktop TLS false positives** | #105532 | Prevents valid gateway connections on Windows |
| **Cost tracking breaks after `/compress`** | #105535 | Undermines usage-cost dashboard trust |
| **Desktop leaks internal execution text to UI** | #104912 | Confuses users, appears as hallucination |
| **Model picker UX for frequent switchers** | #23117, #25363, #88881 (3 issues, 1 👍) | Daily friction for power users |

**Positive signal:** External contributors (@haydster7, @MaxFreedomPollard, @Halldrix) are being credited via “salvage” PRs, indicating healthy community integration.

---

## 8. Backlog Watch — Stale / Unanswered High-Value Items
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) Skills index stale | 52 days (opened 2026-07-18) | Docs site broken; CI cron likely misconfigured | **Open, 176 comments, no fix PR** |
| [#82874](https://github.com/NousResearch/hermes-agent/issues/82874) Gateway SIGTERM freeze | 29 days | Blocks production Docker deployments | **Closed? (marked closed but no fix PR linked)** |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) Bot Group Chat continuity | 10 days | Core product differentiator; large PR #98307 awaiting review | **Open, 27 comments, PR open** |
| [#23117](https://github.com/NousResearch/hermes-agent/issues/23117) / [#25363](https://github.com/NousResearch/hermes-agent/issues/25363) Model favorites | 121 / 117 days | Repeated requests, no implementation | **Open, no PR** |
| [#98901](https://github.com/NousResearch/hermes-agent/pull/98901) Session-scoped model overrides persist across idle reaping | 10 days | Affects bot-mode session resume correctness | **Open PR, needs decision** |

**Maintainer action suggested:**  
1. Investigate skills-index CI cron (#66616) – highest community visibility.  
2. Review/merge bot-mode continuity PR (#98307) – strategic feature.  
3. Triagate Windows TLS regression (#105532) – new platform blocker.  
4. Decide on model-favorites UX to consolidate three duplicate issues.

---

*Digest generated from GitHub data as of 2026-09-08. All links point to NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-08

---

## 1. Today's Overview
PicoClaw shows **active development velocity** with 5 open PRs updated in the last 24 hours and 1 critical issue under investigation. No releases were cut today. The project is in a **feature-expansion phase**—new provider integrations (opencode-go, Keenable web search), protocol support (Build Remote Agent `gbr/1`, IRCv3 multiline), and stability hardening (tool feedback animation bounds) are all in flight. However, **zero PRs were merged** today, suggesting maintainers may be in review/hold mode or awaiting CI resolution. The sole active issue (#3365) is a **blocking regression** for QQ channel users on aarch64, rooted in a dependency conflict between `botgo v0.2.1` and `resty >= v2.17`.

---

## 2. Releases
**No new releases** published today. The latest reported version remains the nightly `0.3.1` build referenced in issue #3365.

---

## 3. Project Progress (Merged/Closed PRs Today)
**None.** All 5 PRs updated in the last 24h remain **open**. No features or fixes were landed today. The backlog of merge-ready work includes:
- **#3371** (created today): `opencode-go` provider with session header support — closes #3369
- **#3370** (created 2026-09-07): Keenable web search provider (no API key required)
- **#3354** (stale, 2026-08-31): IRCv3 `draft/multiline` receive support
- **#3353** (stale, 2026-08-31): Bound tool feedback animations (5-min cap, error-stop)
- **#3344** (stale, 2026-08-23): Build Remote Agent phone pairing (`gbr/1` protocol)

---

## 4. Community Hot Topics
| Item | Type | Activity | Link | Underlying Need |
|------|------|----------|------|-----------------|
| **#3365** | Issue | 1 comment, 1 👍, updated 2026-09-07 | [sipeed/picoclaw#3365](https://github.com/sipeed/picoclaw/issues/3365) | **Critical regression**: QQ channel authentication fails on aarch64 (Orange Pi 3B) due to `botgo v0.2.1` + `resty v2.17.1` incompatibility. Users on embedded ARM devices are blocked. |
| **#3371** | PR | Created today, 0 comments | [sipeed/picoclaw#3371](https://github.com/sipeed/picoclaw/pull/3371) | **New provider demand**: Native support for OpenCode Go (`opencode.ai/zen/go/v1`) with per-model routing and stable session headers. Closes #3369 (not in data, but referenced). |
| **#3370** | PR | Created 2026-09-07, 0 comments | [sipeed/picoclaw#3370](https://github.com/sipeed/picoclaw/pull/3370) | **Zero-config web search**: Keenable provider works without API key—lowers barrier for web search tool adoption. |

**Signal**: Community is pushing **provider ecosystem expansion** (LLM backends, web search) while a **platform-specific regression** (#3365) threatens embedded deployments.

---

## 5. Bugs & Stability
| Severity | Item | Summary | Fix PR? |
|----------|------|---------|---------|
| **Critical** | [#3365](https://github.com/sipeed/picoclaw/issues/3365) | QQ channel 401 "Authorization参数格式错误" on aarch64; root cause: `botgo v0.2.1` + `resty >= v2.17` incompatibility. Blocks embedded/ARM users. | **No** — issue open, no linked fix PR. Requires dependency downgrade or botgo patch. |
| **Medium** | [#3353](https://github.com/sipeed/picoclaw/pull/3353) | Tool feedback animations could run indefinitely on missed cleanup; PR adds 5-min cap + immediate stop on edit error. | **Yes** — PR #3353 (stale, open since 2026-08-31) |

**Stability note**: Only 1 bug reported today, but it’s **platform-specific and blocking**. The animation leak (#3353) is a latent stability risk already addressed in a stale PR.

---

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **opencode-go provider** (`https://opencode.ai/zen/go/v1`) with `x-opencode-session` header | PR #3371 (closes #3369) | **High** — PR created today, focused scope, closes tracked issue |
| **Keenable web search** (public endpoint, no API key, `X-Keenable-Title` header) | PR #3370 | **High** — zero-config, fresh install friendly, recent PR |
| **Build Remote Agent pairing** (`gbr/1` protocol, QR + 8-char code) | PR #3344 | **Medium** — stale (16 days), protocol-specific, requires `gbr-agent` v0.6.0+ |
| **IRCv3 `draft/multiline` receive** (batch, message-tags) | PR #3354 | **Medium** — stale (8 days), niche but standards-compliant |
| **Tool feedback animation bounds** (5-min cap, error-stop) | PR #3353 | **High** — stability fix, low risk, stale but merge-ready |

**Prediction**: Next version will likely include **opencode-go provider**, **Keenable web search**, and **animation bounds fix**. Remote Agent and IRCv3 may slip unless maintainers prioritize stale PRs.

---

## 7. User Feedback Summary
- **Pain point**: Embedded/ARM users (Orange Pi 3B, RK3566) **cannot use QQ channel** due to auth regression (#3365). Nightly build `0.3.1` is affected.
- **Use case expansion**: Users want **diverse LLM backends** (opencode-go) and **zero-friction web search** (Keenable) — indicates PicoClaw is being adopted as a **multi-provider orchestration layer**.
- **Protocol completeness**: Requests for **IRCv3 multiline** and **Build Remote Agent** show demand for **rich chat protocol support** and **mobile/remote pairing workflows**.
- **Satisfaction signal**: No negative reactions on PRs; 1 👍 on critical issue suggests users are **engaged and waiting for fix**, not abandoning.

---

## 8. Backlog Watch — Maintainer Attention Needed
| Item | Age | Risk | Action |
|------|-----|------|--------|
| **[#3365](https://github.com/sipeed/picoclaw/issues/3365)** | 4 days (updated 2026-09-07) | **Critical** — blocks ARM/QQ users; no fix PR | **Triage immediately**: pin `resty < v2.17`, patch `botgo`, or vendor workaround. |
| **[#3353](https://github.com/sipeed/picoclaw/pull/3353)** | 8 days (stale) | **Medium** — animation leak fix ready | **Review & merge**: low-risk stability improvement. |
| **[#3354](https://github.com/sipeed/picoclaw/pull/3354)** | 8 days (stale) | **Low** — IRCv3 feature | **Review** if IRC is priority; else label `help-wanted`. |
| **[#3344](https://github.com/sipeed/picoclaw/pull/3344)** | 16 days (stale) | **Medium** — Remote Agent pairing, external dep | **Clarify scope**: is `gbr/1` support on roadmap? If yes, assign reviewer. |
| **[#3371](https://github.com/sipeed/picoclaw/pull/3371)** | 0 days (today) | **High** — new provider, closes #3369 | **Fast-track review**: fresh, focused, closes tracked issue. |

---

**Health Indicator**: 🟡 **Caution** — Active feature pipeline but **zero merges today** and a **critical unresolved regression** on embedded hardware. Maintainer bandwidth appears focused on review backlog rather than landing fixes. Prioritize #3365 and #3353 to restore stability signal.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-08

---

## 1. Today's Overview

NanoClaw shows **high development velocity** with 28 PRs updated in the last 24 hours (17 merged/closed, 11 still open) and 2 new issues filed. The project is in active maintenance mode with no new release today, but a significant volume of bug fixes, infrastructure improvements, and feature work landing on `main`. Two critical operational issues surfaced regarding unbounded conversation archive growth and transcript rotation gaps for long-running containers — both filed by the same reporter (TO-maschenborn) indicating fleet-scale pain points. The merged PRs reveal a focus on durability (coordination state, approvals survival), CI hardening, container reliability, and agent-to-agent communication correctness.

---

## 2. Releases

**No new releases** published today. The latest version remains **2.1.53** (referenced in both new issues).

---

## 3. Project Progress — Merged/Closed PRs Today (17)

| PR | Area | Type | Summary |
|----|------|------|---------|
| [#3737](https://github.com/nanocoai/nanoclaw/pull/3737) | core/db | Bug fix | Fixed flaky nested-continuation conformance test race on PostgreSQL (watchdog timing) |
| [#3736](https://github.com/nanocoai/nanoclaw/pull/3736) | CI | Infra | Added `gate` job to CI workflow that fails on dependency failures instead of being skipped |
| [#3739](https://github.com/nanocoai/nanoclaw/pull/3739) | CI/skills | Infra | Added `registry gate` check and build resilient to Docker Hub 5xx errors |
| [#3661](https://github.com/nanocoai/nanoclaw/pull/3661) | containers | Bug fix | Retry Bun install in Dockerfile instead of failing image build on transient network errors |
| [#3653](https://github.com/nanocoai/nanoclaw/pull/3653) | core/durable-host | Feature rollup | **Major**: Durable host integration — coordination state, wake seam, reconcile queue, restart-honest delivery, claim fencing (merge of #3508–#3528 chain) |
| [#3518](https://github.com/nanocoai/nanoclaw/pull/3518) | approvals | Feature | Approvals survive restarts via row-keyed resolution through `GatewayProvider` seam |
| [#3517](https://github.com/nanocoai/nanoclaw/pull/3517) | db | Feature | Shadow-write coordination state to durable rows alongside in-memory maps |
| [#3515](https://github.com/nanocoai/nanoclaw/pull/3515) | core | Feature | Part of durable-host chain (referenced in #3653) |
| [#3514](https://github.com/nanocoai/nanoclaw/pull/3514) | core | Feature | Part of durable-host chain |
| [#3508](https://github.com/nanocoai/nanoclaw/pull/3508) | core | Feature | Part of durable-host chain — durable rows for coordination |
| [#3400](https://github.com/nanocoai/nanoclaw/pull/3400) | channels/typing | Bug fix | End typing status when reply delivered (Slack assistant status persistence fix) |
| [#1519](https://github.com/nanocoai/nanoclaw/pull/1519) | scheduler | Bug fix | Prevent duplicate task runs, cleanup orphaned tasks, harden IPC |
| [#3734](https://github.com/nanocoai/nanoclaw/pull/3734) | CI/labels | Bug fix | Reconcile PR labels without duplicate classifications (competing workflows) |
| [#3729](https://github.com/nanocoai/nanoclaw/pull/3729) | channels/setup | Feature | Move Echo/Slack setup to browser portal with WorkOS sign-in |
| [#3719](https://github.com/nanocoai/nanoclaw/pull/3719) | a2a/core | Bug fix | Report communication failures to source agent and originating chat |
| [#3718](https://github.com/nanoclaw/pull/3718) | a2a/core | Bug fix | Preserve verified sender identity and command boundaries in agent-to-agent messages |
| [#3738](https://github.com/nanocoai/nanoclaw/pull/3738) | agent-runner/tools | Bug fix | Thread replies from message being answered (files no longer land in main channel) |

**Key advancement**: The **durable-host rollup (#3653)** is the most significant merge — it lands a multi-PR chain making host coordination state survive restarts, enabling reliable scheduled tasks, approvals, and delivery guarantees. CI hardening (#3736, #3739) and container reliability (#3661) also progressed.

---

## 4. Community Hot Topics

| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) | Issue | 1 comment, 0 👍 | **Operational scalability**: Conversation archives grow without bound — no retention, rotation, or cap. Fleet operators need automated cleanup to prevent disk exhaustion. |
| [#3732](https://github.com/nanocoai/nanoclaw/issues/3732) | Issue | 0 comments, 0 👍 | **Reliability gap**: Transcript rotation never runs for tasks keeping containers alive >30 min idle ceiling. Long-running scheduled tasks accumulate unbounded session state. |
| [#3738](https://github.com/nanocoai/nanoclaw/pull/3738) | PR | Updated today | **UX correctness**: File/message replies landing in wrong thread (main channel vs. thread). Core routing logic fix. |
| [#3743](https://github.com/nanocoai/nanoclaw/pull/3743) | PR | Created today | **Channel expansion**: Native AgentMail email adapter — avoids DNS/MX ownership conflicts. New channel type demand. |
| [#3733](https://github.com/nanoclaw/pull/3733) | PR | Updated yesterday | **Provider ecosystem**: Self-contained OpenCode provider skill for setup/recovery/debugging. Expands provider choice. |
| [#3741](https://github.com/nanoclaw/pull/3741) | PR | Created yesterday | **Scheduled task economics**: `--fresh-session` flag to run stateless, preventing cost growth from accumulating conversation history. |

**Analysis**: The two new issues (#3735, #3732) expose a **systemic gap in data lifecycle management** — archives and transcripts lack retention policies, which becomes critical at fleet scale. The PR activity shows parallel investment in **channel diversity** (AgentMail, A2A fixes), **provider extensibility** (OpenCode skill), and **operational economics** (fresh sessions for scheduled tasks).

---

## 5. Bugs & Stability — Today's Reports

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **High** | [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) | Conversation archives grow without bound — no retention, rotation, cap. Disk exhaustion risk on fleets. | **No fix PR yet** — newly filed |
| **High** | [#3732](https://github.com/nanoclaw/issues/3732) | Transcript rotation never runs for long-lived containers (tasks with recurrence <30 min idle ceiling). Session state accumulates indefinitely. | **No fix PR yet** — newly filed |
| **Medium** | [#3738](https://github.com/nanoclaw/pull/3738) | `send_message`/`send_file`/`<message to>` replies land in main channel instead of thread of message being answered. | **Fix PR open** — `resolveRouting` thread resolution corrected |
| **Medium** | [#3740](https://github.com/nanoclaw/pull/3740) | Inbound routing completion discarded; adapters mark message handled before mailbox write fails, losing retry eligibility. | **Fix PR open** — return host routing promise to adapters |
| **Medium** | [#3719](https://github.com/nanoclaw/pull/3719) | A2A communication failures (blocks, approval waits, rejections, missing reply paths) not reported to source agent/chat. | **Fix PR open** — `notifySource` implementation |
| **Medium** | [#3718](https://github.com/nanoclaw/pull/3718) | A2A messages arrive with sender's self-written identity; one-way edges show `from="unknown:agent:<id>"`. | **Fix PR open** — preserve verified sender identity |
| **Low** | [#3737](https://github.com/nanoclaw/pull/3737) | Flaky test: nested-continuation conformance test races its own watchdog on PostgreSQL. | **Merged** — test timing fixed |
| **Low** | [#3661](https://github.com/nanoclaw/pull/3661) | Dockerfile Bun install fails on transient network errors (no retry). | **Merged** — retry logic added |

**Stability note**: The two high-severity issues are **newly discovered operational bugs with no mitigation yet**. They affect any deployment running scheduled tasks or long-lived agent groups. The A2A fixes (#3719, #3718) address correctness in multi-agent deployments.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Conversation archive retention/rotation** | [#3735](https://github.com/nanoclaw/issues/3735) (fleet operator) | **High** — operational blocker, clear scope (add TTL/cap to `archiveTranscriptFile`) |
| **Transcript rotation for long-lived containers** | [#3732](https://github.com/nanoclaw/issues/3732) (fleet operator) | **High** — paired with #3735; likely same PR or release |
| **AgentMail email channel adapter** | [#3743](https://github.com/nanoclaw/pull/3743) (new PR) | **High** — complete implementation, no MX/DNS conflict, fills channel gap |
| **OpenCode provider skill** | [#3733](https://github.com/nanoclaw/pull/3733) (core-team labeled) | **High** — self-contained, enables setup/recovery/debugging; expands provider matrix |
| **`--fresh-session` for scheduled tasks** | [#3741](https://github.com/nanoclaw/pull/3741) (core-team area) | **High** — direct cost optimization, simple flag, addresses compounding token growth |
| **Build Remote Agent phone pairing (gbr/1)** | [#3494](https://github.com/nanoclaw/pull/3494) (open since Aug 23) | **Medium** — niche but complete; depends on external `gbr-agent` adoption |
| **Browser portal for Echo/Slack setup + WorkOS** | [#3729](https://github.com/nanoclaw/pull/3729) (core-team) | **Medium** — UX improvement, but larger surface area; may need more review |
| **Durable host coordination (landed)** | [#3653](https://github.com/nanoclaw/pull/3653) (merged) | **Done** — foundation for reliable scheduling, approvals, delivery |

**Prediction**: The next patch/minor release (likely **2.1.54** or **2.2.0**) will almost certainly include fixes for #3735/#3732 (archive/transcript rotation), the AgentMail adapter (#3743), `--fresh-session` (#3741), and the A2A fixes (#3719/#3718). The durable-host work (#3653) is already merged and will be in the next cut.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Unbounded disk growth from conversation archives** | [#3735](https://github.com/nanoclaw/issues/3735) — "On our fleet this reaches hundreds of GB" | Fleet operators cannot run indefinitely without manual cleanup; risk of disk exhaustion |
| **Scheduled task cost inflation** | [#3741](https://github.com/nanoclaw/pull/3741) — "job doing identical task each night costs more every night – one grew 15% in a single week" | Economic pressure on long-running automation; token costs compound without session reset |
| **Transcript rotation blind spot** | [#3732](https://github.com/nanoclaw/issues/3732) — containers alive >30 min never rotate | Long-running tasks accumulate unbounded session state; memory/disk pressure |
| **A2A messaging unreliability** | [#3719](https://github.com/nanoclaw/pull/3719), [#3718](https://github.com/nanoclaw/pull/3718) — failures silent, identity spoofable | Multi-agent workflows fragile; debugging hard; security/replay risks |
| **File replies in wrong thread** | [#3738](https://github.com/nanoclaw/pull/3738) — files land in main channel | UX breakage in threaded channels (Slack, etc.); context loss |
| **CI flakiness blocking merges** | [#3739](https://github.com/nanoclaw/pull/3739) — auto-merge with red non-required jobs | Developer velocity; false confidence in merge readiness |
| **Email channel DNS/MX conflict** | [#3743](https://github.com/nanoclaw/pull/3743) — "no email channel that avoids DNS/MX ownership problem" | Blockers for orgs with existing mail providers; AgentMail solves via API-only inbox |

**Satisfaction signals**: Active contributor engagement (core-team labels on multiple PRs), rapid merge of infrastructure PRs, and detailed issue reports from fleet operators indicate a **healthy, production-used project** with maintainers responsive to operational pain.

---

## 8. Backlog Watch — Stale/Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3494](https://github.com/nanoclaw/pull/3494) | 16 days | Open | Build Remote Agent phone pairing (gbr/1) — complete implementation but no review movement since Aug 23. Niche but could unlock mobile spectating use case. |
| [#3729](https://github.com/nanoclaw/pull/3729) | 2 days | Open | Browser portal + WorkOS for Echo/Slack setup — large UX surface, core-team labeled, but no recent update since Sep 7. May need design review. |
| [#3719](https://github.com/nanoclaw/pull/3719) / [#3718](https://github.com/nanoclaw/pull/3718) | 4 days | Open | A2A fixes — core-team labeled, critical for multi-agent correctness. Should be prioritized for review/merge. |
| [#3735](https://github.com/nanoclaw/issues/3735) / [#3732](https://github.com/nanoclaw/issues/3732) | 1 day | Open (new) | **High-severity operational bugs with no fix PR yet**. Need maintainer triage and fix assignment immediately. |
| [#3690](https://github.com/nanoclaw/issues/3690) (referenced in [#3742](https://github.com/nanoclaw/pull/3742)) | Unknown | Fixed in PR #3742 | CLI `add-mount --rw` / `--ro` no-op — fix ready in #3742, needs review. |

**Action items for maintainers**:
1. **Triage #3735 and #3732 immediately** — assign fix owners; these are fleet-blocking.
2. **Review/merge A2A fixes (#3719, #3718)** — core-team labeled, multi-agent correctness.
3. **Review #3742 (CLI mount fix)** — small, referenced issue, ready.
4. **Decide on #3494 (gbr/1)** — merge or close; stale 16 days.
5. **Schedule archive/transcript retention design** — likely needs config schema + cleanup job.

---

*Digest generated from GitHub data as of 2026-09-08. All

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-08

## 1. Today's Overview
NullClaw shows minimal active development in the past 24 hours, with zero issue updates and a single pull request updated. The sole activity is a Dependabot-initiated PR (#956) bumping the Alpine Linux base image from 3.23 to 3.24 across Docker images — a routine maintenance task rather than feature work. No new releases, bug reports, or community discussions appear in the window. Project health indicators suggest a low-activity maintenance phase; the open Dependabot PR has been pending since June 2026 without review or merge, which may indicate limited maintainer bandwidth or deprioritized CI dependency updates.

## 2. Releases
No new releases published today or in the recent period covered by this data.

## 3. Project Progress
**Merged/Closed PRs today:** 0  
**Open PRs updated today:** 1  
- **#956** `ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group` — [View PR](https://github.com/nullclaw/nullclaw/pull/956)  
  *Author:* dependabot[bot] | *Created:* 2026-06-15 | *Last updated:* 2026-09-07  
  *Status:* Open, awaiting review/merge. Updates base Alpine version in Docker images for security and package freshness. No functional changes to application code.

No feature PRs merged, bugs fixed, or milestones advanced today.

## 4. Community Hot Topics
No issues or PRs with comments, reactions, or discussion activity in the last 24 hours. The only open PR (#956) has zero comments and zero reactions. Community engagement appears dormant.

## 5. Bugs & Stability
No new bug reports, crashes, or regressions filed or updated today. No fix PRs present.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap discussions captured today. Absence of user-driven issues or proposal PRs makes forward-looking signals unavailable from this dataset.

## 7. User Feedback Summary
No user-reported issues, feedback, or use-case discussions in the last 24 hours. Zero open issues total implies either a stable, low-friction experience or insufficient user engagement/surfacing channels.

## 8. Backlog Watch
| Item | Type | Age | Concern |
|------|------|-----|---------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | PR (Dependabot) | ~85 days open | Long-stale dependency update; Alpine 3.23 is EOL (May 2026). Delayed merge leaves Docker images on unsupported base. Maintainer attention needed to validate and merge or close with rationale. |

**Recommendation:** Prioritize review of #956 to maintain container security hygiene. Investigate whether CI pipeline runs automatically on Dependabot PRs and why this has not been actioned for nearly three months.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-08

## 1. Today's Overview
IronClaw saw focused UI/UX refinement activity today with **4 open pull requests** (all webui fixes) and **1 new issue** documenting daily benchmark failure taxonomy. No releases were published. All PRs originate from a core contributor (`italic-jinxin`) and target low-risk, small-to-medium scoped improvements to the command-result rendering, slash-command menu, and dismissal interactions. The single new issue (#8081) is an automated daily failure report highlighting 42 non-passing tests in the `officeqa` suite, predominantly attributed to model-quality numeric errors in DeepSeek-V4-Flash. Overall project health appears stable with active maintenance on the frontend layer.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
No PRs were merged or closed today. The four open PRs represent incremental UI polish:

| PR | Scope | Status | Summary |
|----|-------|--------|---------|
| [#8071](https://github.com/nearai/ironclaw/pull/8071) | `webui` (XS, low risk) | Open | Prevents command-result cards from collapsing in the transcript flex column; adds regression coverage. |
| [#8070](https://github.com/nearai/ironclaw/pull/8070) | `webui`, `docs` (XS, low risk) | Open | Replaces variable-width flex rows with a responsive grid in the slash-command menu; aligns titles/descriptions; truncates long names. |
| [#8069](https://github.com/nearai/ironclaw/pull/8069) | `webui` (S, low risk) | Open | Adds accessible dismiss actions to all command-result types (success, list, fallback, denial); threads callback through `Chat → MessageList → MessageBubble`. |
| [#8068](https://github.com/nearai/ironclaw/pull/8068) | `webui`, `docs` (S, low risk) | Open | Keeps active slash-command option visible during keyboard/mouse navigation; adds Chromium regression test. |

All four PRs are awaiting review/merge and collectively improve command-result UX consistency and accessibility.

## 4. Community Hot Topics
Only one issue was updated today; no PRs have comments or reactions recorded.

- **Issue #8081** — [Daily ironclaw failure taxonomy — 2026-09-07](https://github.com/nearai/ironclaw/issues/8081)  
  *Author: `pranavraja99`* | 0 comments | 0 👍  
  Automated daily report: 42 `officeqa` failures, mostly genuine model-quality numeric errors in DeepSeek-V4-Flash. Serves as a benchmark health signal rather than a community discussion.

## 5. Bugs & Stability
No new bug reports, crashes, or regressions were filed today. The only issue (#8081) is a **benchmark failure taxonomy** — not a product bug. The open PRs address existing UI polish issues (card collapse, menu alignment, missing dismiss actions, scroll visibility) but do not reference specific bug tickets.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests today. The PR cluster suggests a **near-term roadmap focus on command-result UX hardening**:
- Persistent card heights & outer scrolling (#8071)
- Consistent slash-command menu layout (#8070)
- Dismissible ephemeral command results (#8069)
- Keyboard/pointer navigation accessibility (#8068)

These align with a “polish & accessibility” sprint for the web UI. Expect these to land in the next patch release if reviews proceed smoothly.

## 7. User Feedback Summary
No direct user feedback (comments, reactions, or support issues) captured in the last 24h. The daily failure taxonomy (#8081) reflects **model evaluation pain points** (numeric accuracy in `officeqa`), which may drive future model-selection or prompt-engineering work but is not a UI/UX complaint.

## 8. Backlog Watch
No long-unanswered issues or PRs surfaced in today’s data. All four PRs were created **2026-09-04** and updated **2026-09-07** — still within a typical review window. Maintainer attention should prioritize reviewing the webui PR batch (#8068–#8071) to unblock the UI polish sprint. The automated failure taxonomy issue (#8081) is informational and requires no action unless failure patterns persist.

---

*Data sourced from GitHub API for `nearai/ironclaw`; covers activity between 2026-09-07 00:00 UTC and 2026-09-08 00:00 UTC.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-08

## 1. Today's Overview
LobsterAI showed **active maintenance velocity** on 2026-09-07 with **5 PRs merged/closed** and **2 PRs updated** (both long-running dependabot and stale PRs). No new issues or releases appeared in the last 24 hours. The merged work spans **Windows installer polish, library UI/UX enhancements, in-app browser stability, and OpenClaw gateway robustness** — indicating a focus on cross-platform quality, artifact management, and agent runtime reliability. The two open PRs (#1277, #1067) are stale dependency/update and architectural cleanup items awaiting maintainer review.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (2026-09-07)

| PR | Area | Type | Summary |
|----|------|------|---------|
| [#2623](https://github.com/netease-youdao/LobsterAI/pull/2623) | renderer, docs, main, cowork | **Feature** | **Library: task priority sorting & grid grouping collapse** — organizes local artifacts by latest update time; adds grouped pagination with preview/expand/resume/collapse; improves session change notifications, refresh retry, scroll restoration; strengthens protocol version/cursor validation; enhances collapse widget a11y & i18n; fixes macOS dev-mode extra Dock icon; adds regression tests & design docs. |
| [#2620](https://github.com/netease-youdao/LobsterAI/pull/2620) | platform: windows | **Fix** | **Installer: modern CJK UI fonts** — overrides NSIS baked-in bitmap fonts (SimSun/PMingLiU/MS PGothic/Gulim 9pt) with Windows 10+ system UI fonts per locale via `SetFont /LANG`, fixing jagged text on DPI-aware installer; guarded with `!ifdef` for narrowed `installerLanguages`. |
| [#2621](https://github.com/netease-youdao/LobsterAI/pull/2621) | main, openclaw | **Fix** | **Browser: resolve in-app element refs & preserve tool error details** — OpenClaw `scrollIntoView` passed snapshot element ref treated as string, causing `TypeError` shown only as `Uncaught` with error banner; now resolves element refs correctly and surfaces full error context. |
| [#2622](https://github.com/netease-youdao/LobsterAI/pull/2622) | main, openclaw | **Fix** | **OpenClaw: gateway subprocess Node mode inheritance** — unifies `spawn` with Node mode to ensure worker inherits runtime; aborts `postinstall` on patch failure; adds tests for launch args, env inheritance, abnormal exit. |
| [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) | renderer, main, artifacts | **Fix** | **Browser: improve in-app login & tab controls** — dismissible saved-login feedback, cleared on navigation/tab change; keeps credential settings open after save; replaces page dropdown with scrollable tab strip, adjacent-tab selection on close, new blank tab preserving current page context. |

**Net impact**: 1 significant feature (library UX overhaul), 4 stability/quality fixes (Windows installer, in-app browser, OpenClaw gateway, tab UX), plus test/doc coverage.

## 4. Community Hot Topics
*No issues updated in the last 24h; no PRs with comments/reactions recorded in the feed.* The two open PRs have **zero reactions/comments** in this window:

- [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) — Dependabot: bump `electron` 40.2.1 → 44.2.0 & `electron-builder` (open since **2026-04-02**, 159 days stale). **Underlying need**: keep Electron current for security, performance, and API access; blocked by potential breaking changes or test gaps.
- [#1067](https://github.com/netease-youdao/LobsterAI/pull/1067) — Stop OpenClaw heartbeat auto-creating `[OpenClaw]` Cowork session (open since **2026-03-30**, 192 days stale, marked `stale`). **Underlying need**: prevent noisy phantom sessions polluting user workspace; architectural cleanup of heartbeat→session coupling.

## 5. Bugs & Stability
No new bug *reports* (issues) today. The **fixed bugs** via merged PRs (ranked by user-facing severity):

| Severity | PR | Symptom | Fix Status |
|----------|-----|---------|------------|
| **High** | [#2621](https://github.com/netease-youdao/LobsterAI/pull/2621) | In-app browser `TypeError` on OpenClaw `scrollIntoView`; error banner with no actionable detail | ✅ Merged — element ref resolution + full error surfacing |
| **High** | [#2622](https://github.com/netease-youdao/LobsterAI/pull/2622) | OpenClaw gateway subprocess fails to inherit Node runtime; `postinstall` continues on patch failure | ✅ Merged — unified `spawn` + abort on patch fail + tests |
| **Medium** | [#2620](https://github.com/netease-youdao/LobsterAI/pull/2620) | Windows NSIS installer shows jagged CJK text on HiDPI | ✅ Merged — system UI font override per locale |
| **Medium** | [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) | Saved-login toast not dismissible; credential settings close on save; tab UX limited | ✅ Merged — dismissible toast, settings stay open, scrollable tab strip |
| **Low** | [#2623](https://github.com/netease-youdao/LobsterAI/pull/2623) | macOS dev mode shows extra Dock icon for gateway | ✅ Merged — fixed in library overhaul |

**No regressions reported** in this window.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Library artifact management overhaul** — grouping, pagination, collapse, preview, resume | [#2623](https://github.com/netease-youdao/LobsterAI/pull/2623) (merged) | **High** — already landed with tests/docs |
| **Electron 44 upgrade** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) (open) | **Medium** — dependabot PR stale 5+ months; may need manual rebase/review |
| **OpenClaw heartbeat/session decoupling** | [#1067](https://github.com/netease-youdao/LobsterAI/pull/1067) (open, stale) | **Low–Medium** — architectural cleanup, no recent motion |
| **In-app browser tab UX parity** (scrollable strip, adjacent select, blank tab) | [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) (merged) | **Delivered** |

**Prediction**: Next release will likely bundle the library UX feature + browser/tab fixes + Windows installer polish. Electron 44 upgrade remains a deferred maintenance item.

## 7. User Feedback Summary
*No direct user issues/comments in the last 24h.* Inferred pain points from merged fixes:

| Pain Point | Evidence | Resolution |
|------------|----------|------------|
| **"Installer looks blurry on my Chinese/Japanese/Korean Windows"** | [#2620](https://github.com/netease-youdao/LobsterAI/pull/2620) | System UI font override |
| **"OpenClaw browser actions crash silently with cryptic banner"** | [#2621](https://github.com/netease-youdao/LobsterAI/pull/2621) | Element ref resolution + error detail |
| **"Gateway install fails silently / worker doesn't inherit my Node env"** | [#2622](https://github.com/netease-youdao/LobsterAI/pull/2622) | Strict spawn + postinstall abort + tests |
| **"Login toast stuck; can't manage saved creds easily; tabs hard to navigate"** | [#2617](https://github.com/netease-youdao/LobsterAI/pull/2617) | Dismissible toast, persistent settings, modern tab strip |
| **"Artifact list is flat & unmanageable; can't group/collapse/preview"** | [#2623](https://github.com/netease-youdao/LobsterAI/pull/2623) | Grouped pagination, collapse, preview, resume |

**Satisfaction signal**: Rapid closure of 5 PRs addressing concrete UX/stability gaps suggests responsive maintainers; dissatisfaction signal: two long-stale PRs (#1277, #1067) indicate backlog pressure on dependency upgrades & architectural cleanup.

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Type | Why It Matters | Suggested Action |
|------|-----|------|----------------|------------------|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 159 days | Dependabot (Electron 40→44) | Security patches, V8 updates, `electron-builder` compatibility; blocks future upgrades | Rebase, run full test suite, merge or close with reason |
| [#1067](https://github.com/netease-youdao/LobsterAI/pull/1067) | 192 days | Architectural fix (OpenClaw heartbeat) | Prevents phantom `[OpenClaw]` sessions; cleans coupling | Review + merge (low risk, tests exist) or close with design decision |

---

**Health Indicator**: 🟢 **Healthy** — active merge cadence, user-facing fixes shipping, feature work landing with tests/docs. **Risk**: dependency upgrade backlog (Electron 44) and stale architectural PR may accumulate technical debt if unaddressed.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-08

## 1. Today's Overview
Moltis shows minimal activity over the past 24 hours with zero issue updates, zero merged/closed PRs, and no new releases. The sole activity is one open pull request (#1262) addressing a cron scheduling edge case where `active_hours end="24:00"` was not correctly parsed as end-of-day. The project appears in a maintenance phase with low community engagement today. Overall health signals are quiet—no regressions, no urgent bugs, and no feature momentum visible in the last day.

## 2. Releases
No new releases published today.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. The only open PR (#1262) remains under review and has not yet advanced the codebase.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#1262** | PR | 0 comments, 0 reactions | [moltis-org/moltis#1262](https://github.com/moltis-org/moltis/pull/1262) |

**Analysis**: The single active PR targets a documented default configuration (`start="08:00", end="24:00"`) that currently fails parsing due to `chrono` rejecting hour `24`. This causes a fail-open behavior where the scheduler treats every hour as active. The fix is narrow but affects default runtime behavior—likely a silent misconfiguration for users relying on the documented defaults. No community discussion or reactions yet; maintainer review is the next gate.

## 5. Bugs & Stability
| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **Medium** | Cron `active_hours end="24:00"` parse failure → fail-open always-active | Open | [#1262](https://github.com/moltis-org/moltis/pull/1262) |

No crashes, regressions, or new bug reports today. The identified bug is configuration-triggered and has a pending fix.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap signals observed in the last 24 hours. The only pending work is the cron parsing fix in #1262, which is a correctness improvement rather than a new feature.

## 7. User Feedback Summary
No user-reported issues, discussions, or feedback captured today. The absence of issue activity suggests either stable usage or low community visibility. The pending PR addresses a latent misconfiguration that may affect users silently—real-world impact depends on how many deployments use the default `end="24:00"` window.

## 8. Backlog Watch
| Item | Age | Type | Concern |
|------|-----|------|---------|
| **#1262** | 1 day | PR | Fixes default config parsing bug; awaiting review/merge. No CI status visible in data. |

No long-unanswered issues or stale PRs beyond today’s single open PR. The backlog appears current.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-08

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **high maintenance velocity** with 35 PRs and 23 issues updated in the last 24 hours. The project is in active stabilization mode: 14 PRs were merged/closed (mostly bug fixes and UI polish), while 21 PRs remain open—many addressing critical regressions in v2.2.0 around context handling, memory backends, and streaming timeouts. No new release was cut today, but the volume of "Under Review" and "first-time-contributor" PRs signals a healthy contributor pipeline. The bug surface is broad: context loss, PDF handling, MCP protocol conformance, IME crashes, and dashboard performance—all actively being triaged.

---

## 2. Releases

**No new releases published today.** The latest tagged version remains **v2.2.0** (released earlier). Several open PRs (#7486 Creator 1.2.0, #7502 Console redesign, #7616 memory plugin migration) represent substantial feature work likely targeting a v2.3.0 or v2.2.1 patch.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) | fix(providers): coerce string-typed tool args emitted as JSON numbers (#6839) | **Bug fix** | Resolves MCP tool calls sending numeric strings as numbers (e.g., `"assetInfo": 1.000001`), which caused schema validation failures. |
| [#7499](https://github.com/agentscope-ai/QwenPaw/pull/7499) | fix(console): unify nav and theme-toggle icons with Spark line series (#7376) | **UI polish** | Fixes visual inconsistency in sidebar icons (files, checkpoints, dark-mode toggle). |
| [#7530](https://github.com/agentscope-ai/QwenPaw/pull/7530) | test(console): expand console unit tests (+245 cases, +5.02pp statement coverage) | **Test coverage** | Fourth coverage sprint; significantly hardens frontend against regressions. |
| [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | ReMe background embedding/indexing job fails — Dependency accessed before start() | **Bug fix (issue closed)** | Fixed silent failure in long-term memory embedding jobs when using OpenAI-compatible backends. |
| [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) | scroll context compression triggers MODEL_EXECUTION_ERROR on DeepSeek | **Bug fix (issue closed)** | `[context compressed]` block now uses `role=system` instead of `role=user`, satisfying DeepSeek/OpenAI-compatible APIs. |
| [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | embedding health check times out even when backend is warm | **Bug fix (issue closed)** | Health-check timeout made configurable; warm Ollama embeddings no longer spuriously fail. |
| [#6885](https://github.com/agentscope-ai/QwenPaw/issues/6885) | Console UI crashes on Chinese IME compositionEnd | **Bug fix (issue closed)** | Message queue now usable with Chinese IME during agent runs. |
| [#6948](https://github.com/agentscope-ai/QwenPaw/issues/6948) | Admin console shows UTC time instead of user timezone | **Bug fix (issue closed)** | Conversation timestamps now respect `user_timezone` config (e.g., Asia/Shanghai). |
| [#7604](https://github.com/agentscope-ai/QwenPaw/issues/7604) | LLM stream idle timeout hardcoded at 30s (v2.2.0) | **Bug fix (issue closed)** | Timeout constants (`QWENPAW_LLM_STREAM_*_TIMEOUT`) now configurable via env/WebUI. |

**Net progress**: 8 bugs closed, 3 UI/test PRs merged. Core regressions in v2.2.0 (stream timeouts, context compression, MCP arg coercion, IME crashes) are being systematically resolved.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) | Bug | 6 | **Model replies vanish from context** — persisted assistant messages disappear on next turn ("model cannot see what it just said"). Affects all channels; high severity. |
| [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | Bug | 5 | **Hardcoded 32768 context_size fallback** in `RetryChatModel` forces all models to 32k window, causing `CONTEXT_UNFIT` errors for larger-context models. |
| [#7589](https://github.com/agentscope-ai/QwenPaw/issues/7589) | Bug | 4 | **Heartbeat cron feedback loop** — duplicate messages pile up, agent unresponsive for ~2 hrs. Requires manual intervention. |
| [#7597](https://github.com/agentscope-ai/QwenPaw/issues/7597) | Bug | 4 | **Tool-returned PDF/image binary sent as bare base64** (`"type":"data"`) → 400 `file must have file_id or file_data`. Blocks file-returning tools. |
| [#7621](https://github.com/agentscope-ai/QwenPaw/pull/7621) | PR (open) | — | **Fix for #7617**: Treat `application/pdf` DataBlocks as media during request normalization so text-only models don't receive unsupported OpenAI file blocks. |
| [#7482](https://github.com/agentscope-ai/QwenPaw/pull/7482) | PR (open) | — | **Agent Kanban i18n** — Chinese/English localization following host `useLocale` hook. |
| [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) | PR (open) | — | **Console sidebar & settings redesign** — unified configurable sidebar, conversation history overhaul. |

**Underlying theme**: v2.2.0 introduced regressions in **context persistence**, **streaming resilience**, and **multimodal payload handling**. Users are hitting showstoppers in production (agent unresponsiveness, broken file tools, context loss). The community is also pushing hard on **UI/UX consistency** (icons, sidebar, i18n) and **extensibility** (memory plugins, skill versioning).

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Critical** | [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) | Assistant replies persisted but missing in subsequent requests — model "sees empty history". | No |
| **Critical** | [#7589](https://github.com/agentscope-ai/QwenPaw/issues/7589) | Heartbeat cron creates duplicate message pile-up; agent hangs ~2 hrs. | No |
| **High** | [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | Hardcoded 32768 `context_size` breaks all models with >32k context. | No |
| **High** | [#7597](https://github.com/agentscope-ai/QwenPaw/issues/7597) | Tool-returned PDF/image as bare base64 → 400 from OpenAI-compat endpoints. | [#7621](https://github.com/agentscope-ai/QwenPaw/pull/7621) (open) |
| **High** | [#7617](https://github.com/agentscope-ai/QwenPaw/issues/7617) | PDF `DataBlock` in tool result permanently breaks text-only endpoints (Zhipu GLM 400). | [#7621](https://github.com/agentscope-ai/QwenPaw/pull/7621) (open) |
| **High** | [#7607](https://github.com/agentscope-ai/QwenPaw/issues/7607) | Cursor ACP Runner: extension method handling violates JSON-RPC → `WritableIterable is closed`. | No |
| **Medium** | [#7619](https://github.com/agentscope-ai/QwenPaw/issues/7619) | Windows 11 + qwen-35B-A3B-FP8: conversations end unexpectedly (screenshot attached). | No |
| **Medium** | [#7612](https://github.com/agentscope-ai/QwenPaw/issues/7612) | Built-in CLI commands (`qwenpaw agents list`) fail inside Hub local sandboxes (RuntimeBoundaryMiddleware blocks). | No |
| **Medium** | [#7242](https://github.com/agentscope-ai/QwenPaw/issues/7242) | Dashboard takes 6+ min to load with 74 agents (Docker). API works fine. | No |
| **Medium** | [#7620](https://github.com/agentscope-ai/QwenPaw/issues/7620) | MCP streamable-http: non-conforming 401 (`-32601 Method not found`) blocks legacy fallback, misleads as "requires OAuth". | No |

**Pattern**: v2.2.0's new streaming watchdog (`RetryChatModel`), context compression, and multimodal handling have interacting regressions. Fix PRs exist for PDF/image issues (#7621) but not yet for context loss or heartbeat loop.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Memory backend plugin architecture** — ADBPG & PowerContext migrated to plugins; OpenViking backend added | [#7616](https://github.com/agentscope-ai/QwenPaw/pull/7616), [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | **High** — architectural direction clear; multiple PRs in flight |
| **Skill versioning & dependency validation** — expose versions, validate MCP/env/bin declarations | [#7609](https://github.com/agentscope-ai/QwenPaw/pull/7609) | **High** — PR open, addresses marketplace reliability |
| **Plugin manager update detection** — official dir + community marketplace, "Update All" | [#7605](https://github.com/agentscope-ai/QwenPaw/pull/7605) | **High** — UX gap for plugin maintenance |
| **Console sidebar/settings redesign** — unified sidebar, conversation history overhaul | [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) | **Medium** — large UI refactor, may wait for v2.3.0 |
| **Agent Kanban i18n (zh/en)** | [#7482](https://github.com/agentscope-ai/QwenPaw/pull/7482) | **Medium** — straightforward, follows host locale |
| **Creator 1.2.0** — blueprint workbench, async delegation, multi-timeline A/B, MiniMax H3 video, snapshot rollback | [#7486](https://github.com/agentscope-ai/QwenPaw/pull/7486) | **Medium** — fork sync, substantial feature bundle |
| **DingTalk interactive card callbacks in stream mode** | [#7608](https://github.com/agentscope-ai/QwenPaw/issues/7608) | **Low-Medium** — channel-specific, single reporter |
| **Protected execution contract** — clarification/authorization ahead of workspace prompt files | [#7526](https://github

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-08

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 50 PRs and 9 issues updated in the last 24 hours. The project is in active feature development and hardening phase: three critical bugs were closed today (heartbeat composite-key rejection, WhatsApp Web voice-note transcription, reliable-provider model reporting), while 44 PRs remain open spanning runtime UX (Ctrl+C handling), observability (log rotation), gateway streaming (SSE webhooks), security hardening (credential rotation, filesystem confinement, command-audit defaults), and OpenAI Responses API parity. No new release was cut, suggesting the maintainers are accumulating changes for a larger drop.

## 2. Releases
**No new releases today.** The latest published version remains whatever was shipped prior to 2026-09-08.

## 3. Project Progress — Merged / Closed PRs (Last 24h)
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#10670](https://github.com/zeroclaw-labs/zeroclaw/issues/10670) | `heartbeat.target` rejects channel instance composite key | runtime/daemon | **Closed** (bug fix) |
| [#10688](https://github.com/zeroclaw-labs/zeroclaw/issues/10688) | WhatsApp Web voice notes never transcribed | channel/whatsapp | **Closed** (bug fix) |
| [#10326](https://github.com/zeroclaw-labs/zeroclaw/issues/10326) | Reliable streaming errors report requested model instead of pinned model | provider/reliable | **Closed** (bug fix) |
| *(3 additional PRs merged/closed per summary stats)* | | | |

**Net effect:** Three S1/S2 workflow-blocking bugs resolved; the codebase is now safer for multi-instance channel routing, WhatsApp voice handling, and provider observability.

## 4. Community Hot Topics — Most Active Issues & PRs
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#9229](https://github.com/zeroclaw-labs/zeroclaw/pull/9229) | PR | High (long thread) | **Interactive UX reliability** — make Ctrl+C state-aware in REPL instead of per-turn listeners |
| [#9212](https://github.com/zeroclaw-labs/zeroclaw/pull/9212) | PR | High | **Regression safety** — gate CI on replay suite; prevent silent behavior drift |
| [#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) | PR | High | **Observability scale** — entry-count log rotation + multi-segment queries for production log volumes |
| [#10450](https://github.com/zeroclaw-labs/zeroclaw/pull/10450) | PR | High | **Gateway streaming** — SSE support for webhook chat turns (real-time UX) |
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | PR | High | **Context efficiency** — anchor compaction to model window ratio instead of fixed 32k budget |
| [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) | PR | High | **Security policy correctness** — `always_ask` must survive “Full autonomy” mode |
| [#10708](https://github.com/zeroclaw-labs/zeroclaw/issues/10708) | Issue | New | **OpenAI Responses WebSocket steering** — active-response correction mid-stream |
| [#10707](https://github.com/zeroclaw-labs/zeroclaw/issues/10707) | Issue | New | **Programmatic tool calling** — hosted tool protocol for orchestrated tool use |

**Signal:** Contributors are pushing hard on **production hardening (logging, security, CI gates)** and **OpenAI Responses API feature parity** (streaming, steering, programmatic tools, reasoning state). The long-running PRs (#9229, #9212, #10214) indicate architectural work that maintainers want solid before merge.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Component | Fix PR? |
|----------|-------|-----------|---------|
| **S1 – Workflow Blocked** | [#10670](https://github.com/zeroclaw-labs/zeroclaw/issues/10670) `heartbeat.target` rejects `<type>.<alias>` composite key | runtime/daemon | **Closed** (fix merged) |
| **S2 – Degraded Behavior** | [#10688](https://github.com/zeroclaw-labs/zeroclaw/issues/10688) WhatsApp Web voice notes never transcribed | channel/whatsapp | **Closed** (fix merged) |
| **S3 – Minor** | [#10326](https://github.com/zeroclaw-labs/zeroclaw/issues/10326) Reliable provider reports requested model, not pinned model | provider/reliable | **Closed** (fix merged) |
| **High (Security)** | [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) Filesystem mutations escape workspace via symlinks | tools/file | **Open PR** (needs review) |
| **High (Security)** | [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) Git operations ignore allowed roots | tools/git | **Open PR** (needs review) |
| **High (Security)** | [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) Live credentials not rotated after rate limits | providers | **Open PR** (needs review) |
| **High (Security)** | [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) Command audit logging defaults to enabled | security/doctor | **Open PR** (needs author action) |

**Takeaway:** All newly reported bugs were resolved same-day. The remaining high-severity items are **in-progress security hardening PRs** awaiting maintainer review or author action.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **OpenAI Responses: WebSocket steering** (active-response correction) | [#10708](https://github.com/zeroclaw-labs/zeroclaw/issues/10708) | High — explicit feature issue from core contributor |
| **Programmatic tool calling (hosted protocol)** | [#10707](https://github.com/zeroclaw-labs/zeroclaw/issues/10707) | High — aligns with OpenAI roadmap |
| **Preserve opaque reasoning state across call paths** | [#10706](https://github.com/zeroclaw-labs/zeroclaw/issues/10706) | High — consistency gap for streaming vs non-streaming |
| **`max` reasoning effort for GPT-6 Astra** | [#10705](https://github.com/zeroclaw-labs/zeroclaw/issues/10705) | Medium — config deserializer change only |
| **Async function tools (model continues while tools run)** | [#10704](https://github.com/zeroclaw-labs/zeroclaw/issues/10704) | Medium — requires turn-engine redesign |
| **Astra setup docs for API-key & Codex subscription** | [#10709](https://github.com/zeroclaw-labs/zeroclaw/issues/10709) | High — documentation-only, quick win |
| **Passive Telegram group context** | [#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) | High — PR open, opt-in feature |
| **SSE streaming for gateway webhooks** | [#10450](https://github.com/zeroclaw-labs/zeroclaw/pull/10450) | High — PR open, extends existing JSON path |
| **Entry-count log rotation + multi-segment queries** | [#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) | High — production observability need |

**Prediction:** The next release will likely bundle **OpenAI Responses parity features** (steering, programmatic tools, reasoning state, max effort) + **gateway SSE streaming** + **Telegram passive context** + **log rotation**. Security PRs (#9977, #10337, #9419) may land if maintainers clear review queue.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Multi-instance channel routing broken** | #10670: `heartbeat.target` rejects `<type>.<alias>` | Blocks deployments with >1 channel instance of same type |
| **WhatsApp voice notes unusable** | #10688: transcription provider not wired | Voice-first users cannot use WhatsApp channel |
| **Misleading provider observability** | #10326: errors show requested model, not actual pinned model | Debugging reliable-provider fallbacks is confusing |
| **Ctrl+C handling flaky in REPL** | #9229: per-turn listeners vs process-local state | Interactive users get inconsistent interruption behavior |
| **Log rotation only time-based** | #10214: no entry-count trigger | High-volume deployments lose granularity or fill disks |
| **No real-time webhook streaming** | #10450: only JSON response path | Web integrations cannot stream tokens to end-users |
| **Context compaction uses fixed 32k** | #9535: ignores actual model window | Wastes context on small models, truncates on large ones |
| **Security defaults too permissive** | #9410: command audit logging enabled by default | Operators unaware of audit surface |

**Satisfaction signals:** Quick closure of three S1/S2 bugs shows responsive maintainership. Long-open hardening PRs suggest users **want** these fixes but are blocked by review bandwidth.

## 8. Backlog Watch — Stale / High-Value Items Needing Attention
| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#9229](https://github.com/zeroclaw-labs/zeroclaw/pull/9229) Ctrl+C state-aware REPL | ~50 days | Core UX reliability; “distinguished contributor” authored | Complex async refactor; needs maintainer bandwidth |
| [#9212](https://github.com/zeroclaw-labs/zeroclaw/pull/9212) CI gate on replay regression suite | ~50 days | Prevents silent regressions; foundational for velocity | Marked `do-not-merge`; likely awaiting eval infra stability |
| [#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) Entry-count log rotation | ~18 days | Production observability at scale | `needs-author-action` — possibly waiting on config UX decision |
| [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) Confine filesystem mutations to workspace | ~26 days | Security: symlink escapes | `needs-maintainer-review` + `needs-author-action` |
| [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) Honor allowed roots for git operations | ~14 days | Security: git escapes workspace | `needs-author-action` |
| [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) Rotate live credentials after rate limits | ~44 days | Security: credential hygiene | `needs-maintainer-review`; complex provider-graph logic |
| [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) Default command audit logging to disabled | ~44 days | Security honesty: default-safe | `needs-author-action`; doc updates needed |
| [#9272](https://github.com/zeroclaw-labs/zeroclaw/pull/9272) Anthropic refusal handling with fallback notices | ~47 days | Provider correctness: typed errors vs empty success | `needs-author-action` |
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) Live provider identity on usage events / context window resolution | ~59 days | Accurate metering & context budgeting | `needs-author-action`; touches provider, runtime, gateway |

**Recommendation:** Maintainers should prioritize **security PRs (#9977, #10337, #9419, #9410)** and **CI gate (#9212)** to unblock safe releases. The OpenAI Responses feature cluster (#10704–#10708) is well-scoped for a focused “Responses v1” milestone.

---

**Project Health: 🟢 Strong** — High contributor engagement, same-day critical bug fixes, clear roadmap toward OpenAI Responses parity and production hardening. Main bottleneck: **review throughput for security/architectural PRs**.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*