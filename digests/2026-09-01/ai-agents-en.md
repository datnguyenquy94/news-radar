# OpenClaw Ecosystem Digest 2026-09-01

> Issues: 172 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-01 04:45 UTC

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

# OpenClaw Project Digest — 2026-09-01

## 1. Today's Overview
OpenClaw shows **exceptionally high velocity** with 172 issues and 500 PRs updated in 24 hours — a signal of both active development and significant technical debt surfacing. The 96 closed issues and 193 merged/closed PRs indicate strong maintainer throughput, but the 76 still-open issues and 307 open PRs reveal a growing backlog. No new release was cut today. The issue landscape is dominated by **security vulnerabilities** (prompt injection, SSRF, auth bypass), **session-state corruption** (model snapshot staleness, subagent context loss), **gateway startup failures** (legacy migration conflicts), and **channel-specific regressions** (WhatsApp, Telegram, Discord, Matrix). The project is in a stabilization sprint rather than feature development mode.

## 2. Releases
**No new releases today.** The latest version remains `2026.8.1` (commit `ea80657`). Users on `2026.7.1-2` upgrading to `2026.8.1` report **gateway unstartable** (#133984) with `doctor --fix` unable to apply config-key migrations non-interactively — a migration path gap that may delay the next patch release.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Change |
|----|------|--------|
| [#131567](https://github.com/openclaw/openclaw/pull/131567) | agents/sessions | Fixed infinite loop in `buildSessionContext` on cyclic parent chains |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | scripts/ci | Clean up `tsgo` process trees on timeout/signal; add `OPENCLAW_TSGO_TIMEOUT_MS` |
| [#128223](https://github.com/openclaw/openclaw/pull/128223) | cli | Resolve alias targets from write snapshot (fixes stale reads) |
| [#107529](https://github.com/openclaw/openclaw/pull/107529) | security/parser | Command validation bypass fix for multi-line tool calls in parser |
| [#112796](https://github.com/openclaw/openclaw/pull/112796) | migration | Doctor: fix legacy WhatsApp `ackReaction` migration dropping DM acks |
| [#134445](https://github.com/openclaw/openclaw/pull/134445) | migration | Doctor: handle zero-byte attestation files during legacy workspace migration |
| [#102391](https://github.com/openclaw/openclaw/pull/102391) | security/export | `/export-session` path traversal fix — non-owners could write outside workspace |
| [#102749](https://github.com/openclaw/openclaw/pull/102749) | gateway/startup | Legacy-state migration convergence when `.migrated` archive exists |
| [#103076](https://github.com/openclaw/openclaw/pull/103076) | gateway/startup | Additional legacy migration sources blocking gateway after #102780 |
| [#107133](https://github.com/openclaw/openclaw/pull/107133) | memory-core | Embedding cache conflict permanently blocking gateway startup |

**Pattern:** The merged PRs cluster around **startup/migration reliability**, **security boundary hardening**, and **session context correctness** — confirming the stabilization focus.

## 4. Community Hot Topics (Most Discussed Issues/PRs)

| Item | Comments | 👍 | Core Issue |
|------|----------|-----|------------|
| [#45740](https://github.com/openclaw/openclaw/issues/45740) (CLOSED) | 17 | 1 | **Prompt injection in `gh-issues` skill**: raw GitHub issue bodies injected into sub-agent prompts without sanitization — *platinum hermit* security rating |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | 14 | 1 | **WhatsApp image wedge**: inbound images block main lane ~3 min before processing — multimodal strand deadlock |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | 12 | 6 | **MCP tools not injected into subagents**: `bundle-mcp` + allowlists ignored; subagents receive only built-ins — *diamond lobster* |
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | 10 | 0 | **Built-in headless browser** request: bundle Chromium for reliable web access without external deps |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 10 | 1 | **Zombie process leak**: unreaped hook/tool children accumulate, degrading runtime — *gold shrimp* |
| [#108395](https://github.com/openclaw/openclaw/issues/108395) | 5 | 1 | **Assistant generates fake "Human: [timestamp]" messages** — self-authorizes live actions via context pollution |
| [#104992](https://github.com/openclaw/openclaw/issues/104992) | 4 | 1 | **Transcript redaction (`***`) replayed into model context** — model reuses masked secrets in new tool calls — *diamond lobster* |

**Underlying needs:** 
- **Supply-chain trust** — users need verifiable builds (#113447), sanitized skill inputs (#45740), and redacted transcripts that stay redacted (#104992)
- **Session integrity** — model switches must refresh session snapshots (#92415), subagents must inherit MCP tools (#85030), and context must not hallucinate user turns (#108395)
- **Operational reliability** — gateway must start deterministically after upgrades (#133984, #102749), and background tasks must not leak zombies (#97616)

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 P0 / Release Blockers
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#133984](https://github.com/openclaw/openclaw/issues/133984) | 🦞 diamond lobster | No | `2026.7.1-2 → 2026.8.1` leaves gateway unstartable; `doctor --fix` skips config migrations |
| [#102749](https://github.com/openclaw/openclaw/issues/102749) | 🦞 diamond lobster | **Closed** (#102780, #103076) | Legacy migration never converges when `.migrated` archive exists — gateway refuses start |
| [#107133](https://github.com/openclaw/openclaw/issues/107133) | 🦞 diamond lobster | **Closed** | Memory Core `embedding_cache` conflict blocks gateway permanently on 2026.7.1 |
| [#124343](https://github.com/openclaw/openclaw/issues/124343) | 🦞 diamond lobster | No | `yield-owned` settle-wake parks completed subagent forever — no delivery, retry, or reason |

### 🟠 P1 / High Impact
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | 🐚 platinum hermit | No | WhatsApp 1:1 inbound image wedges lane ~3 min (multimodal strand deadlock) |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | 🦞 diamond lobster | No | MCP tools not injected into `sessions_spawn` subagents — all allowlists ignored |
| [#92415](https://github.com/openclaw/openclaw/issues/92415) | 🦪 silver shellfish | **Closed** (stale) | `AgentSession.this.model` never refreshed after `/model` switch — stale contextWindow, reasoning |
| [#91804](https://github.com/openclaw/openclaw/issues/91804) | 🦐 gold shrimp | No | Internal reasoning leaking to users in every response since 2026.6.5 |
| [#110346](https://github.com/openclaw/openclaw/issues/110346) | 🦪 silver shellfish | No | `message send --media` inconsistent local-media allowlist: WhatsApp accepts, Telegram rejects same path |
| [#108409](https://github.com/openclaw/openclaw/issues/108409) | 🦞 diamond lobster | No | Discord inbound treats OpenClaw runtime-context wrapper as user message content |
| [#73480](https://github.com/openclaw/openclaw/issues/73480) | 🦪 silver shellfish | No | Matrix recovery key verification fails — cannot recover account |
| [#111254](https://github.com/openclaw/openclaw/issues/111254) | 🦐 gold shrimp | No | Codex-harness agents: no per-agent command policy; `before_tool_call` never fires for native `exec` |

### 🟡 P2 / Stability & UX
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 🦐 gold shrimp | No | Unreaped hook/tool child processes → zombie accumulation → runtime degradation |
| [#88087](https://github.com/openclaw/openclaw/issues/88087) | 🦪 silver shellfish | No | Poor UX for long-running background tasks + silent cron wake failures |
| [#74848](https://github.com/openclaw/openclaw/issues/74848) | 🐚 platinum hermit | No | macOS App node repeatedly disconnects with "cancelled" (CLI node works) |
| [#99253](https://github.com/openclaw/openclaw/issues/99253) | 🦪 silver shellfish | No | Assistant self-inserts fabricated user turn and answers it — context pollution |
| [#110368](https://github.com/openclaw/openclaw/issues/110368) | 🦞 diamond lobster | No | ACP sessions in Control UI show duplicate identical replies per prompt |
| [#107787](https://github.com/openclaw/openclaw/issues/107787) | 🦪 silver shellfish | No | MiniMax-M3 thinking blocks leak into Telegram and confuse agent |
| [#105466](https://github.com/openclaw/openclaw/issues/105466) | 🌊 off-meta tidepool | No | No disk space quotas on agent sandbox — infinite writes can fill container |
| [#90980](https://github.com/openclaw/openclaw/issues/90980) | 🐚 platinum hermit | No | Unresponsive Docker engine → `docker exec` hangs (no timeout) → gateway blocks at startup |

**Fix PR coverage:** Only ~30% of P0/P1 bugs have linked fix PRs; most are `clawsweeper:no-new-fix-pr` — maintainers are triaging but not yet patching.

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|----------------------------|
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | P3 | **Built-in headless browser** — eliminate fragile 3-layer web access (Chrome extension → browser-use → playwright) | Medium — high user demand, but architectural scope large |
| [#74594](https://github.com/openclaw/openclaw/issues/74594) | P2 | **Skill Capability Manifests v0** — make skill capabilities visible before enforcement (RFC) | High — RFC stage, maintainer engagement visible |
| [#43564](https://github.com/openclaw/openclaw/issues/43564) | P2 | **ACP Session Skill Context Injection** — skills into Codex/Pi/OpenCode/Gemini sessions | Medium — depends on ACP protocol stabilization |
| [#79281](https://github.com/openclaw/openclaw/issues/79281) | P2 | **Default ACP thread-binding preset** — third-party channels re-implement ~870 LOC each | High — reduces fragmentation, clear ROI |
| [#77886](https://github.com/openclaw/openclaw/issues/77886) | P2 | **Owner-approved flow for protected config changes** — agent-initiated changes blocked but no approval UX | Medium — security-adjacent, UX design needed |
| [#80674](https://github.com/openclaw/openclaw/issues/80674) | P2 | **Expose polling lifecycle + session persistence hooks for plugins** | Low — plugin SDK maturity prerequisite |
| [#113440](https://github.com/openclaw/openclaw/issues/113440) | P2 | **Pre-effect hook for resolved nested tool operations** — authorize downstream effects | Medium — security boundary hardening |
| [#113442](https://github.com/openclaw/openclaw/issues/113442) | P2 | **Persist operator-supplied system prompt on `sessions.create`** | Medium — clear operator need, low complexity |
| [#110872](https://github.com/openclaw/openclaw/issues/110872) | P2 | **Recipient-addressed outbound sends** — resolve via verified routes, not raw platform IDs | Medium — architectural, reduces spoofing risk |
| [#96475](https://github.com/openclaw/openclaw/issues/96475) | P3 | **`tools.exec.strictShellMetachars` knob** — reject shell-chained commands by default | High — simple config flag, aligns with `strictInlineEval` |

**Prediction:** The next patch (`2026.8.x`) will likely include: ACP thread-binding preset (#79281), strictShellMetachars (#96475), and owner-approved config flow (#77886). The headless browser (#53763) and skill manifests (#74594) are 2026.Q4+ candidates.

## 7. User Feedback Summary

### Pain Points (Direct Quotes)
> **"I've been running OpenClaw on a DigitalOcean 2vCPU/4GB droplet and hit enough friction today that I'm tearing it down. Costs aren't worth it for the experience."** — #88087
> 
> **"Since upgrading to OpenClaw 2026.6.5, internal agent reasoning/thinking is being exposed to users in every response. This is a major privacy and UX regression."** — #91804
> 
> **"The npm provenance endpoint for this exact version returns 404, so there is no way to verify the published artifact matches the source."** — #113447
> 
> **"Upgrading 2026.7.1-2 → 2026.8.1 left the Gateway unstartable and required roughly a dozen manual repair steps... The documented recovery path — `openclaw doctor --fix` — could not repair the config."** — #133984
> 
> **"An assistant response contained a fabricated timestamped user turn and then answered that fabricated turn inside the same assistant message."** — #

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-01)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem is **bifurcating into two distinct tiers**: a top tier of **high-velocity, production-hardening projects** (OpenClaw, Hermes Agent, CoPaw, IronClaw, NanoClaw) shipping frequent releases or major milestones with 10–500+ daily PR updates, and a second tier of **specialized or early-stage projects** (PicoClaw, Moltis, LobsterAI, ZeptoClaw, ZeroClaw) addressing niche protocols, security hardening, or architectural refactors. NullClaw stands alone in maintenance-only mode. Across the board, **stabilization outweighs feature development** — security boundaries, session integrity, gateway startup reliability, and channel parity dominate merged work. Multi-tenancy (Hub/Org features), MCP ecosystem integration, and WASM plugin architectures are the most visible strategic bets for 2026.H2.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Latest Release | Health Score |
|---------|---------------------|-------------------|-------------------|----------------|--------------|
| **OpenClaw** | 172 | 500 | 193 | 2026.8.1 (2026-08-31) | 🟡 High velocity, backlog growing |
| **Hermes Agent** | 10 | 50 | 9 | v0.21.0 (2026-08-31) | 🟢 Major release, active stabilization |
| **CoPaw (QwenPaw)** | ~23 resolved | 16+ | 16 | v2.2.0-beta.5 (2026-08-31) | 🟢 Beta stabilization, trending GA |
| **IronClaw** | 14 | 20 | 6 | None (preview branches) | 🟢 High velocity, feature-heavy |
| **NanoClaw** | 24 | 34 | 16 | v2.3.0 (stale) | 🟡 Active, user bugs aging |
| **NanoBot** | 0 | 18 | 10 | None (accumulating) | 🟢 Healthy, 1.0-hardening |
| **LobsterAI** | 11 | 27 | 8 | None | 🟡 Active, UX debt accumulating |
| **Moltis** | 1 | 3 | 3 | 20260831.01 (2026-08-31) | 🟢 Steady, release cut |
| **PicoClaw** | 1 | 5 | 0 | None | 🟡 Moderate, review bottleneck |
| **ZeptoClaw** | 8 | 1 | 1 | None | 🟠 Reactive security sprint |
| **ZeroClaw** | 17 | 50 | 0 | None (architectural RFCs) | 🟠 Ambitious, delivery-constrained |
| **NullClaw** | 0 | 1 | 0 | None | 🔴 Maintenance-only |

*Notes: "Health Score" synthesizes merge rate, release cadence, critical bug backlog, and community engagement.*

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale & Breadth**: Largest raw activity (500 PRs/24h) and widest channel matrix (WhatsApp, Telegram, Discord, Matrix, Slack, ACP)
- **Security Maturity**: Most visible investment in supply-chain trust (provenance verification #113447), prompt-injection hardening (#45740), and transcript redaction integrity (#104992)
- **Migration Tooling**: `doctor --fix` framework exists (though gaps remain per #133984) — peers lack equivalent automated upgrade repair

**Technical Approach Differences:**
- **Gateway-Centric Architecture**: OpenClaw's gateway owns session state, migration, and channel multiplexing — contrast with Hermes Agent's gateway-profile routing, IronClaw's Design System-first WebUI, or ZeroClaw's runtime-owned session RFC (#9487)
- **Skill/Extension Model**: Skills as first-class, sandboxed units with capability manifests (#74594 RFC) — vs. NanoBot's MCP Apps, CoPaw's ReMe memory skills, or ZeroClaw's WASM plugin architecture
- **Session Snapshotting**: Explicit model-switch snapshot refresh (#92415) and subagent context inheritance (#85030) — deeper session-state engineering than most peers

**Community Size:**
- 760+ contributors on Hermes Agent (per v0.21.0 release notes) suggests **Hermes leads in contributor count**
- OpenClaw's 172 issues/24h implies **largest active issue volume** — but only ~30% of P0/P1 bugs have fix PRs, indicating triage > patch capacity
- CoPaw's 15-comment Hub discussion (#7318) shows **strongest team/enterprise pull** — OpenClaw lacks equivalent multi-tenant RFC

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Gateway/Startup Reliability** | OpenClaw (#133984, #102749, #107133), Hermes Agent (#99989), IronClaw (#7977), NanoClaw (#3646) | Deterministic post-upgrade startup; legacy migration convergence; configurable kill timeouts; agent-loop termination guards |
| **Session Integrity & Context Correctness** | OpenClaw (#92415, #85030, #108395), CoPaw (#7447, #7420), ZeroClaw (#9535, #10523), NanoBot (#5612, #5610) | Model-switch snapshot refresh; subagent MCP tool inheritance; context truncation/eviction bugs; ephemeral runtime context; cumulative memory checkpoints |
| **Security Boundaries & Supply Chain** | OpenClaw (#45740, #104992, #113447), ZeptoClaw (#652–#656), LobsterAI (#2590, #908), Moltis (#1221, #1222), ZeroClaw (#9582) | Prompt-injection sanitization; transcript redaction persistence; artifact provenance; token leakage (logs, perms, query params); WASM egress policy; MCP command-injection allowlists |
| **MCP Ecosystem Integration** | OpenClaw (#85030), NanoBot (#5251), IronClaw (#8012, #7964), LobsterAI (#1662), Hermes Agent (#99984) | Subagent MCP tool injection; MCP Apps interactive UI in WebUI; catalog scalability (47k tools); non-SSE transports; Cloudflare auth |
| **Multi-Tenancy / Team Features** | CoPaw (#7318), Hermes Agent (#97681, #98307), IronClaw (#7781), NanoClaw (#3695), ZeroClaw (#9487) | Bot persistence across restarts; RBAC/shared skills/admin console; Design System governance; Slack skills in-tree; runtime-owned sessions |
| **Channel Parity & Protocol Support** | OpenClaw (WhatsApp/Telegram/Discord/Matrix regressions), PicoClaw (IRCv3 #3354, GBR #3344), NanoClaw (Signal #3693, WhatsApp #3085), CoPaw (Feishu/DingTalk #7436), IronClaw (Slack Agent UI #8006) | Typed mention handling; voice audio forwarding; rich-message streaming; multiline IRC; remote-agent pairing; raw gateway passthrough |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | Hermes Agent | CoPaw | IronClaw | NanoClaw | ZeroClaw | Others |
|-----------|----------|--------------|-------|----------|----------|----------|--------|
| **Primary Focus** | Multi-channel gateway stabilization | Bot-mode continuity & desktop UX | Memory/ReMe subsystem & Hub multi-tenant | Design System & MCP scale | Slack/skills migration & CI automation | Runtime-owned architecture & WASM plugins | Niche protocols (PicoClaw), security hardening (ZeptoClaw), sandbox isolation (Moltis) |
| **Target User** | Operators running multi-channel fleets | Power users / homelab bot runners | Teams & document-heavy workflows | Enterprise WebUI consumers | Slack-centric dev teams | Platform builders / runtime architects | Embedded (PicoClaw), compliance (Moltis), Chinese-market (LobsterAI) |
| **Architecture** | Gateway-centric, session snapshots | Gateway-profile routing, plugin chronos | ReMe memory + browser SDK + Hub | Design-token-governed WebUI + WASM | Containerized skills + sweep daemon | Runtime-owned sessions + WASM plugins | Single-binary (ZeptoClaw), Kubernetes-native (Moltis) |
| **Release Cadence** | Dated (2026.8.1), patch gaps | Major (v0.21.0) + rapid patches | Beta sprints (2 in 24h) | Preview branches, v1.4.0 target | v2.3.0 stale, patch imminent | None (RFC phase) | Dated (Moltis), none (others) |
| **Unique Strength** | Channel breadth + migration tooling | Contributor scale (760+) + bot persistence | ReMe long-term memory + Hub vision | Design System governance + Storybook | CI/labeling automation + skill in-tree | Architectural clarity via RFCs | Supply-chain pinning (Moltis), Rust safety (ZeptoClaw) |

---

## 6. Community Momentum & Maturity

### **Tier 1: Rapid Iteration / Production Hardening**
- **OpenClaw**: Highest raw velocity, but backlog growing (307 open PRs). Stabilization sprint mode.
- **Hermes Agent**: Just shipped massive v0.21.0; now fixing release fallout (bot persistence, gateway sign-in). Strong contributor funnel.
- **CoPaw**: Beta velocity exceptional (2 releases/24h, 23 issues resolved). Hub multi-tenant is community rallying point.
- **IronClaw**: Design System + MCP scale dual-track. New contributor fixes shipping same-day.

### **Tier 2: Active Feature Completion / 1.0 Path**
- **NanoBot**: Clean agent runtime refactors (context, memory, transcript). Memory recall opt-in (#5571) is breaking-change gate.
- **NanoClaw**: Strong engineering hygiene (CI, templates), but 4 high-priority bugs >2 weeks old. Slack migration shows responsiveness.
- **Moltis**: Steady dated releases, supply-chain hardening. Kubernetes sandbox (#1118) is clear next milestone.

### **Tier 3: Specialized / Early / Stalled**
- **PicoClaw**: Protocol extensions (IRCv3, GBR) but review bandwidth bottleneck (60-day stale PR).
- **LobsterAI**: Security-first (MCP hardening), but UX debt (keyboard shortcuts, retry button) stale 5 months.
- **ZeptoClaw**: Security audit sprint — 7 safety issues in 24h. CI baseline broken 40 days.
- **ZeroClaw**: Architectural ambition (8 RFCs) but 0 merges/24h. Maintainer review bandwidth saturated.
- **NullClaw**: Automated Dependabot only. No human-driven activity.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Gateway → Runtime Ownership Shift** | ZeroClaw RFC #9487 (29 comments), Hermes bot-mode gateway authority, OpenClaw gateway startup failures | **Architectural**: Who owns session lifecycle determines multi-device, multi-channel, and upgrade paths. Invest in clear boundary definitions. |
| **MCP as App Platform, Not Just Tools** | NanoBot #5251 (MCP Apps WebUI), IronClaw 47k-tool catalog, OpenClaw subagent MCP injection | **Product**: MCP servers shipping interactive UIs (dashboards, forms) will differentiate. Plan for `tool_search` scalability and non-SSE transports. |
| **Memory Subsystems Hardening** | CoPaw ReMe 0.4.1.10+11, NanoBot cumulative checkpoints (#5610), OpenClaw embedding cache conflict (#107133

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-01

## 1. Today's Overview
NanoBot shows **high development velocity** with 18 PRs updated in 24 hours (10 merged/closed, 8 open), indicating active maintenance and feature iteration. The project is in a **refinement and stabilization phase** — no new releases, but significant work on agent runtime architecture (context compaction, memory recall, ephemeral runtime context), Telegram/WebSocket channel robustness, and MCP Apps integration. Two open enhancement issues (#5251 MCP Apps, #5493 HTML/MD preview) signal upcoming UI/UX expansion. Overall health: **healthy, active, trending toward 1.0-hardening**.

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be accumulating changes for a future release (likely a minor or patch version).

## 3. Project Progress — Merged/Closed PRs Today (10)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5617](https://github.com/HKUDS/nanobot/pull/5617) | **Bug/Regression (P1)** | Fixed WebSocket listener health check using non-portable `SO_ACCEPTCONN` (breaks on macOS/BSD) | **Critical stability fix** for WebUI on non-Linux |
| [#5615](https://github.com/HKUDS/nanobot/pull/5615) | **Feature (P2)** | Added `ephemeral` lifecycle to `RuntimeContextBlock` — context available for current request but excluded from session persistence | Enables transient context (e.g., one-time instructions, secrets) |
| [#5619](https://github.com/HKUDS/nanobot/pull/5619) | **Feature (P2)** | Ephemeral runtime-context blocks opt out of history persistence | Complements #5615; closes #5586 |
| [#5531](https://github.com/HKUDS/nanobot/pull/5531) | **Bug (P2)** | Fixed Telegram rich-message streaming: final message now upgrades to rich in-place at stream end | **UX fix** — rich messages now render with streaming enabled |
| [#5612](https://github.com/HKUDS/nanobot/pull/5612) | **Refactor (P1)** | Unified `AgentRunner` request fitting: pressure-checks payload before every provider call (retries, no-tools finalization) | Improves token-budget reliability, reduces context-overflow errors |
| [#5608](https://github.com/HKUDS/nanobot/pull/5608) | **Refactor (P2)** | Deferred transcript assembly to `AgentRunner`; explicit `TranscriptInput` | Cleaner separation of concerns, better testability |
| [#5610](https://github.com/HKUDS/nanobot/pull/5610) | **Refactor (P2)** | Made memory summaries cumulative checkpoints (previous + new context) | More accurate long-term memory, less drift |
| [#5598](https://github.com/HKUDS/nanobot/pull/5598) / [#5604](https://github.com/HKUDS/nanobot/pull/5604) | **Docs (P2)** | Clarified `edit_file` selector mutual exclusivity (`occurrence`, `line_hint`, `replace_all`) | Fixes #5592; reduces tool misuse |
| [#5618](https://github.com/HKUDS/nanobot/pull/5618) | **Style** | Simplified TUI runtime header: whitespace separators, active preset only, non-clickable session title | Cleaner CLI UX |

**Key theme**: Agent runtime hardening (context, memory, transcript, token fitting) + Telegram/WebSocket channel fixes.

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) **MCP Apps host support in WebUI** | 3 comments, open since Aug 5 | **First-class UI for MCP server-provided apps** (interactive dashboards, forms, visualizations) — moves nanobot beyond text/chat toward "AI app platform" |
| [#5620](https://github.com/HKUDS/nanobot/pull/5620) **Cron: configurable delivery + batch archive** | Just opened, links closed issue #5513 | **Operational automation hygiene** — route cron results to dedicated channels, archive batches, keep chat clean |
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) **Memory: require explicit recall by default** (conflict) | Open since Aug 27, P1 | **Privacy/token control** — stop auto-loading `MEMORY.md`/`history.jsonl`; opt-in recall via tool |
| [#5570](https://github.com/HKUDS/nanobot/pull/5570) **Memory: pluggable recall backend** (conflict) | Open since Aug 27, P2 | **Extensibility** — swap in vector DB, graph, or external knowledge stores |
| [#5283](https://github.com/HKUDS/nanobot/pull/5283) **Per-session sandbox isolation** | Open since Aug 7, P2 | **Multi-tenant security** — isolate filesystem per session for non-WebUI channels |

**Signal**: Community pushing for **production-grade multi-tenancy, memory control, and MCP-as-app-platform**.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **Critical (P1)** | WebSocket `SO_ACCEPTCONN` non-portable — breaks listener health check on macOS/BSD | **Fixed** | [#5617](https://github.com/HKUDS/nanobot/pull/5617) ✅ merged |
| **High (P2)** | Telegram rich messages never render with streaming enabled | **Fixed** | [#5531](https://github.com/HKUDS/nanobot/pull/5531) ✅ merged |
| **Medium (P2)** | `edit_file` docs implied combinable selectors (`occurrence` + `line_hint` + `replace_all`) but runtime rejects | **Fixed** | [#5598](https://github.com/HKUDS/nanobot/pull/5598) + [#5604](https://github.com/HKUDS/nanobot/pull/5604) ✅ merged |
| **Low** | Cron results pollute creating chat session; no batch management | **Addressed** | [#5620](https://github.com/HKUDS/nanobot/pull/5620) (open PR implementing #5513) |

**No open critical regressions** — all P1/P2 bugs from last 24h have merged fixes.

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **MCP Apps host in WebUI** | #5251 (enhancement, 3 comments) | **High** — aligns with MCP ecosystem growth; WebUI is flagship |
| **Cron configurable delivery + batch archive** | #5620 (PR open, implements #5513) | **High** — PR ready, addresses ops pain point |
| **Per-session sandbox isolation** | #5283 (PR open since Aug 7) | **Medium** — security-critical, but "conflict" label suggests merge complexity |
| **Explicit memory recall (opt-in)** | #5571 (PR open, P1, conflict) | **Medium** — breaking change default; needs migration path |
| **Pluggable memory backend** | #5570 (PR open, P2, conflict) | **Medium** — architectural, enables RAG/vector stores |
| **HTML/TXT/MD preview in channels** | #5493 (enhancement, Chinese) | **Low-Medium** — UI polish, iframe `srcdoc` approach proposed |
| **Custom Telegram Bot API base URL** | #4919 (PR open since Jul 14, conflict) | **Low** — enterprise/self-host need, but stale |

**Predicted next version**: MCP Apps WebUI + Cron delivery/archive + memory recall opt-in (behind flag) + sandbox isolation (experimental).

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **"Cron noise pollutes my chat"** | #5513: "mixes automation noise into personal conversations, no way to batch-manage" | 😤 Frustrated → **Addressed by #5620** |
| **"Rich messages broken with streaming"** | #5516: "mutually exclusive… final message always delivered via legacy HTML" | 😤 Frustrated → **Fixed by #5531** |
| **"edit_file docs misleading"** | #5592: "parameters presented together… runtime rejects any combination" | 😕 Confused → **Fixed by #5598/#5604** |
| **"Need HTML/MD preview in channels"** | #5493: "方便预览" (convenient preview) | 🙂 Feature request |
| **"Want MCP Apps (interactive UI) in WebUI"** | #5251: "MCP call results treated as text/image… Apps extension lets server attach interactive UI" | 🚀 Forward-looking |
| **"Memory auto-load wastes tokens/privacy"** | #5571: "stop preloading durable MEMORY.md and history.jsonl by default" | 🔒 Privacy-conscious |

**Overall**: Users are **power-users/operators** running cron jobs, multi-session, multi-channel deployments. They want **isolation, control, and richer UI** — not just chat.

## 8. Backlog Watch — Stale/Important Items Needing Maintainer Attention

| Item | Age | Priority | Why It Matters |
|------|-----|----------|----------------|
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) **Custom Telegram Bot API base URL** | 49 days (since Jul 14) | P2, **conflict** | Enterprise/self-hosted Telegram deployments blocked; "conflict" suggests rebase needed |
| [#5283](https://github.com/HKUDS/nanobot/pull/5283) **Per-session sandbox isolation** | 25 days (since Aug 7) | P2 | Multi-tenant security foundation; "conflict" label — may need design review |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) **Integrate mst-python (metasearch provider)** | 29 days (since Aug 3) | P1, **new-provider** | Web search upgrade (multi-engine + RRF); "webui" label — flagship feature |
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) **Explicit memory recall by default** | 5 days | P1, **conflict** | Breaking default behavior; needs migration guide + config flag |
| [#5570](https://github.com/HKUDS/nanobot/pull/5570) **Pluggable memory backend** | 5 days | P2, **conflict** | Architectural; enables vector/GraphRAG; depends on #5571 |

**Recommendation**: Prioritize #5234 (search provider) and #4919 (Telegram enterprise) for unblocking users; resolve "conflict" PRs (#5283, #5571, #5570) via design sync.

---

**Project Health Score**: 🟢 **Healthy** — High merge rate, zero critical open bugs, clear roadmap signals, active contributor base.  
**Risk**: Stale "conflict" PRs accumulating; memory/defaults changes need careful release communication.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-01

## 1. Today's Overview

Hermes Agent shipped **v0.21.0 "The Pantheon Release"** yesterday (2026-08-31), a massive drop representing ~5,800 commits, ~2,475 merged PRs, and ~2,100 issues closed since v0.20.0 with 760+ contributors. Despite the major release, velocity remains high: **10 issues** and **50 PRs** (41 open, 9 merged/closed) were updated in the last 24 hours. The project is in active stabilization mode — most new issues are fresh bug reports or follow-ups from the release, while PRs focus on hardening bot-mode continuity, gateway routing, cron reliability, desktop UX, and security hygiene.

---

## 2. Releases

### v0.21.0 (v2026.8.31) — "The Pantheon Release"
**Released:** 2026-08-31 | [Release Notes](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.31)

**Scale:** ~5,800 commits · ~2,475 merged PRs · ~5,680 files changed · ~869k insertions · ~135k deletions · ~2,100 issues closed · 760+ contributors

**Key Themes (from release title & recent PRs):**
- **Bot-mode / Group Chat continuity** — gateway-owned authority, same-gateway runner, scoped cross-gateway transport now on `main`; work continues to persist bot sessions across Desktop restarts (#97681, #98307, #99960)
- **Gateway profile routing & multiplexing** — fixes for routed profile transcript loading (#99997), isolated runtimes behind profiles (#99986)
- **Cron reliability** — per-job `api_max_retries` override (#99996, #39587), failure classification fixes (#99993, #99988)
- **Desktop hardening** — link previews with SSRF guard (#99980), durable user prompt fan-out (#99970), update-mutex quoting (#96260), platform icon coverage (#99497)
- **Security** — custom endpoint API keys moved out of `config.yaml` via `key_env` (#80927)
- **Plugin/Provider fixes** — Anthropic `extra_headers` propagation (#46002), Telegram media retry (#84210), Cloudflare MCP auth (#99984)

**Breaking Changes / Migration Notes:** Not explicitly listed in provided data; given the ~2,100 issues closed, review the [full changelog](https://github.com/NousResearch/hermes-agent/compare/v0.20.0...v2026.8.31) and scan for `BREAKING` labels before upgrading.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#99072](https://github.com/NousResearch/hermes-agent/pull/99072) | **fix** (kanban) | Fail closed on unresolved blocked claims; adds `_has_unresolved_block()` predicate in `claim_task()` | Prevents stale `status='ready'` writes from bypassing blocking dependencies |
| [#99970](https://github.com/NousResearch/hermes-agent/pull/99970) | **fix** (desktop) | Fan out durable user prompts live on ordered session event stream; deduplicate submitting client's optimistic message | Improves real-time UX in multi-client sessions |
| [#39587](https://github.com/NousResearch/hermes-agent/pull/39587) | **feat** (cron) | Per-job `api_max_retries` override (closed, re-implemented in #99996) | Allows per-job retry budgets without raising global config |

**Net:** 3 PRs closed/merged today — two hardening fixes (kanban, desktop real-time) and one cron feature that was superseded by a wired end-to-end implementation (#99996).

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **133** | Bug (automated) | **Skills index freshness** — automated probe shows index 29.8h old (limit 26h); workflow cron at 6/18 UTC not keeping up. High-volume automation noise, but signals CI/CD drift. |
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | **10** | Feature (bot-mode) | **Bot Group Chat persistence** — bots should survive Desktop close; gateway authority + runner + transport ready, need "connect foundation to production" (session continuity, file sharing, handoff). |
| [#62951](https://github.com/NousResearch/hermes-agent/issues/62951) | **3** | Bug (plugin) | **Chronos plugin API break** — bundled cron provider calls removed `PluginContext.register_cron_scheduler` on v0.18.2; blocks users on older plugin API. |
| [#98307](https://github.com/NousResearch/hermes-agent/pull/98307) | — | Feature (bot-mode) | **Complete Group Chat continuity** — "core PR" for bot-mode: stop/restart, file sharing, bot-to-bot handoff, cross-device reconnect. Tagged `needs-decision` + 5 `sweeper:risk-*` labels. |

**Underlying signals:**  
- **Bot-mode / multi-device continuity** is the top product priority (multiple linked issues/PRs, high label investment).  
- **Automation health** (skills index, contributor file case collisions #99995) needs dedicated ownership.  
- **Plugin API stability** — chronos break suggests semver/contract testing gaps for bundled plugins.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **High** | [#99989](https://github.com/NousResearch/hermes-agent/issues/99989) | Desktop: pre-save gateway sign-in writes session to wrong cookie jar; connection fails on first connect | [#99992](https://github.com/NousResearch/hermes-agent/pull/99992) (open) |
| **High** | [#99984](https://github.com/NousResearch/hermes-agent/issues/99984) | Cloudflare MCP connector: (1) strict RFC 9207 `iss` check rejects provider's own broken metadata; (2) `codemode=false` triggers concurrent OAuth flows colliding on callback port | — |
| **Medium** | [#99962](https://github.com/NousResearch/hermes-agent/issues/99962) | `browser_console` eval executes in Chrome New Tab instead of navigated page when multiple `page` targets exist | — |
| **Medium** | [#99988](https://github.com/NousResearch/hermes-agent/issues/99988) | Cron failure summarizer mislabels non-auth errors as "provider authentication error" by substring-matching embedded payload text | [#99993](https://github.com/NousResearch/hermes-agent/pull/99993) (open) |
| **Medium** | [#62951](https://github.com/NousResearch/hermes-agent/issues/62951) | Bundled `chronos` plugin fails to load on v0.18.2: `'PluginContext' object has no attribute 'register_cron_scheduler'` | — |
| **Low** | [#88503](https://github.com/NousResearch/hermes-agent/issues/88503) | Telegram topic mode: bare deliveries land in unusable lobby; need `/new` to create topic & target last-active | — |
| **Low** | [#99995](https://github.com/NousResearch/hermes-agent/pull/99995) | Case-colliding contributor email files (`agent@agents-Mac-mini.local` vs `agent@Agents-Mac-mini.local`) break case-insensitive FS | [#99995](https://github.com/NousResearch/hermes-agent/pull/99995) (open) |

**Note:** 4 of 7 bugs filed today already have fix PRs open — good signal on triage-to-fix latency.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Release | Rationale |
|---------|----------|----------------------------|-----------|
| **Bot Group Chat continuity across Desktop restarts** | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681), [#98307](https://github.com/NousResearch/hermes-agent/pull/98307) | **Very High** | Core PR (#98307) open with 5 risk labels; foundation merged; labeled `needs-decision` — likely gating v0.22.0 |
| **Per-job `api_max_retries` override (cron)** | [#99996](https://github.com/NousResearch/hermes-agent/pull/99996) | **High** | Wired end-to-end; supersedes closed #39587; low risk, high utility for flaky backends |
| **Isolated agent runtimes behind gateway profile routing** | [#99986](https://github.com/NousResearch/hermes-agent/issues/99986) | **Medium** | References #82701 (multi-tenant orchestrator), #34352 (multi-tenant memory), #68559 (routing bug) — architectural, may need design review |
| **Opt-in agent self-introduction on new session** | [#99991](https://github.com/NousResearch/hermes-agent/issues/99991) | **Medium** | Simple UX win; conversation loop currently waits for user message first |
| **Click-to-expand link previews (SSRF-guarded)** | [#99980](https://github.com/NousResearch/hermes-agent/pull/99980) | **High** | Privacy-first implementation; desktop-only; ready for review |
| **Complete messaging platform icon coverage (Desktop)** | [#99497](https://github.com/NousResearch/hermes-agent/pull/99497) | **High** | Bundles vendor brand assets (Slack, DingTalk, WeCom, Feishu/Lark); polish item |

**Predicted v0.22.0 focus:** Bot-mode continuity (#98307), cron per-job retries (#99996), desktop link previews (#99980), and the Cloudflare MCP auth fix (#99984).

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Bot sessions die when Desktop closes** | #97681, #98307, #99960 — users expect bots on laptop/homelab/VPS to persist group chats | High (core product gap) |
| **Plugin API breaks without warning** | #62951 — bundled `chronos` broken since v0.18.2; no deprecation path | Medium (affects plugin authors) |
| **Secrets leakage into `config.yaml`** | #80927 — custom endpoint API keys written to disk; fixed via `key_env` | High (security) |
| **Telegram topic mode UX broken** | #88503 — lobby unusable, no `/new` command, bare deliveries misrouted | Medium (platform-specific) |
| **Browser automation flakiness** | #99962 — `browser_console` targets wrong page (New Tab) | Medium (automation users) |
| **Cron failure noise** | #99988, #99993 — misclassification creates alert fatigue | Medium (ops) |
| **Gateway sign-in flow loses session** | #99989 — pre-save OAuth writes to wrong jar | High (onboarding friction) |

**Satisfaction signals:**  
- Users actively file detailed bugs with repro steps (e.g., #99962, #99984) — engaged community.  
- Feature requests are architectural (#99986, #97681) not cosmetic — power-user base.  
- Quick fix PRs from community (#99992, #99993, #99995) — healthy contributor funnel.

---

## 8. Backlog Watch (Long-Unanswered / Stale Important Items)

| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **45 days** (2026-07-18) | Open, 133 comments | Automated skills index watchdog **degraded** for weeks; index 29.8h > 26h limit. CI cron (6/18 UTC) not sustaining freshness. Blocks docs/skills hub. |
| [#62951](https://github.com/NousResearch/hermes-agent/issues/62951) | **51 days** (

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-01

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with **1 issue** and **5 pull requests** updated in the last 24 hours. No new releases were published. The project is actively addressing a high-severity Telegram rate-limit bug (#3343) with a corresponding fix PR (#3353) opened yesterday. Four other PRs remain open, covering new provider integrations (Exa search), protocol support (Build Remote Agent, IRCv3 multiline), and a significant deltachat refactor. The codebase appears healthy with ongoing cleanup and feature expansion, though several PRs carry `[stale]` labels suggesting reviewer bandwidth constraints.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | **Closed (stale)** | Added native Exa web search provider (`tools.web`/`web_search`) with `POST /search` API, `X-Api-Key` auth, and date-range filters. Closed without merge — likely superseded or deferred. |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | **Open** | **Fix for #3343**: Bounds tool feedback animations to 5 min max lifetime and stops on first edit error, preventing runaway Telegram `editMessageText` calls. |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | **Open** | Implements IRCv3 `draft/multiline` receive support, assembling fragmented messages into single inbound events. Requests `batch`, `message-tags`, `draft/multiline` caps by default. |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | **Open (stale)** | Adds Build Remote Agent pairing adapter (`gbr/1` protocol) enabling phone spectating via `gbr-agent` (QR + 8-char code). Connects to `http://127.0.0.1:8788` or stdio. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | **Open** | Major deltachat refactor (~200 LOC removed): drops legacy features/password config, references official relay list, renames `invite_link` → `join_invite_link`, adds `show_invite_link`. |

**Merged/Closed today**: Only #3299 (closed stale). No PRs merged in the last 24h.

## 4. Community Hot Topics
| Item | Activity | Analysis |
|------|----------|----------|
| [Issue #3343](https://github.com/sipeed/picoclaw/issues/3343) | **2 comments**, updated 2026-08-31 | **Highest engagement**. Runaway Telegram animation caused 228k+ edit attempts → server-side rate limit (`retry_after`). User impact: potential API bans, wasted quota, noisy logs. Fix PR #3353 opened 2026-08-31. |
| [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) | Long-running (opened 2026-07-03), updated 2026-08-31 | **Sustained interest**. 200 LOC deltachat cleanup signals maintainer investment in reducing technical debt. No comments visible but frequent updates suggest active iteration. |
| [PR #3344](https://github.com/sipeed/picoclaw/pull/3344) | **Stale label**, updated 2026-08-31 | New protocol integration (Build Remote Agent) — may await protocol stabilization or maintainer review capacity. |
| [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) | **Closed stale**, updated 2026-09-01 | Exa search provider contribution closed without merge. Possible duplication with existing web search abstraction or strategic pivot. |

**Underlying needs**: Reliability hardening (animation bounds), protocol extensibility (IRCv3, GBR), and dependency simplification (deltachat refactor).

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#3343](https://github.com/sipeed/picoclaw/issues/3343): Tool feedback animation edits Telegram message indefinitely after failed turn → 228k+ API calls, rate limit triggered | **Open** | [#3353](https://github.com/sipeed/picoclaw/pull/3353) (opened 2026-08-31) — bounds animation to 5 min, stops on first error |
| *No other bugs reported in last 24h* | | | |

**Assessment**: Single critical bug with immediate fix proposed. No regressions or crashes reported. Fix PR #3353 is minimal and targeted — strong candidate for fast merge.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Exa native web search provider** | [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) | **Low** — Closed stale; may reopen if demand persists |
| **Build Remote Agent (gbr/1) pairing** | [PR #3344](https://github.com/sipeed/picoclaw/pull/3344) | **Medium** — Protocol-specific, depends on `gbr-agent` v0.6.0+ adoption |
| **IRCv3 multiline message assembly** | [PR #3354](https://github.com/sipeed/picoclaw/pull/3354) | **High** — Standards-compliant, small scope, improves IRC UX |
| **Deltachat modernization** | [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) | **High** — Large cleanup, aligns with upstream relay list, removes legacy auth |

**Prediction**: IRCv3 multiline (#3354) and deltachat refactor (#3222) are most likely to land next. Animation fix (#3353) will likely be fast-tracked.

## 7. User Feedback Summary
- **Pain point**: Telegram integration instability — runaway animations cause rate limits, risking bot restrictions (Issue #3343).
- **Use case**: Mobile spectating of desktop agent via Build Remote Agent (PR #3344) — suggests demand for cross-device workflows.
- **Satisfaction signal**: Contributors submitting protocol-level features (IRCv3, GBR) indicate confidence in PicoClaw's channel abstraction.
- **Dissatisfaction signal**: Stale PRs (#3299, #3344) suggest review latency; deltachat refactor open since July hints at complex migration.

## 8. Backlog Watch
| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) | **60 days** (opened 2026-07-03) | **High** — Large refactor, touches auth/config, no recent comments. Risk of merge conflicts or bitrot. | **Maintainer review/decision**: Approve, request changes, or close with rationale. |
| [PR #3344](https://github.com/sipeed/picoclaw/pull/3344) | **9 days** (stale) | **Medium** — New protocol, external dependency (`gbr-agent`). | Clarify support policy for third-party pairing protocols. |
| [Issue #3343](https://github.com/sipeed/picoclaw/issues/3343) | **10 days** | **Critical** — Production impact (rate limits). Fix PR exists but unmerged. | **Prioritize merge of #3353**; consider backport to stable if applicable. |
| [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) | **37 days** (closed stale) | **Low** — Closed, but feature may be re-requested. | Document why Exa provider was declined (dup? scope?). |

---

**Health Indicator**: 🟡 **Moderate** — Critical bug with fix pending, several feature PRs stalled, but active cleanup and protocol work underway. Review bandwidth appears to be the primary bottleneck.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-01

---

## 1. Today's Overview

NanoClaw shows **high maintenance velocity** with 58 total items updated in the last 24 hours (24 issues, 34 PRs). The project is in a **stabilization and refactoring phase**: 16 PRs were merged/closed, including a major Slack skills migration to `main`, CI/labeling automation, and a fix for the hardcoded 30-minute container kill ceiling. Nine active issues remain open, several of which are high-priority bugs affecting WhatsApp mention handling, scheduled-task deduplication, and WhatsApp Cloud upgrade migrations. No new release was cut today.

---

## 2. Releases

**No new releases published today.** The latest tagged release remains v2.3.0 (per issue #3694 context). The merged PRs (#3695, #3646, #3657, #3648, #3650, #3647, #3651, #3644) represent substantial changes that will likely feed into a v2.3.1 or v2.4.0.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3695](https://github.com/nanocoai/nanoclaw/pull/3695) | **Feature/Skill** | Slack companion skills (`slack-a2a-rooms`, `slack-agent-flow`) moved in-tree; `main` is now canonical source | Eliminates branch-fetch step for consumers; simplifies `/add-slack` |
| [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) | **Bug Fix** | Makes idle timeout configurable; applies to both kill paths (heartbeat + absolute ceiling) | Fixes hardcoded 30-min kill of slow local-model turns (#3643) |
| [#3657](https://github.com/nanocoai/nanoclaw/pull/3657) | **CI/Hardening** | Report-only `template-compliance` commit status for PR template v2 | Improves PR hygiene without blocking merges |
| [#3648](https://github.com/nanocoai/nanoclaw/pull/3648) | **CI** | PR template v2 with token parsing and managed-kind reconcile | Structured intake: `kind/*` checkbox, validation, release-note block |
| [#3650](https://github.com/nanocoai/nanoclaw/pull/3650) | **Feature** | Harvests `release-note` blocks from PRs into draft changelog | Automates changelog generation from contributor-written notes |
| [#3647](https://github.com/nanocoai/nanoclaw/pull/3647) | **CI** | Auto-applies `area/*` from changed paths and `kind/*` from PR type | Reduces manual triage; additive labeling |
| [#3651](https://github.com/nanocoai/nanoclaw/pull/3651) | **Docs** | Adds issue-side intake section to CONTRIBUTING.md | Documents 4 issue forms, labels, and post-filing lifecycle |
| [#3644](https://github.com/nanocoai/nanoclaw/pull/3644) | **Docs** | Adds `.github/ISSUE_TEMPLATE/` (4 forms: bug, skill request, docs, security) | Standardizes issue intake; includes private vulnerability reporting |

**Also closed today:** 8 ancient merge-forward failure issues (#892, #893, #895–#898, #1066, #1073, #1074, #1147, #1148, #1226–#1228) — all from March 2026, auto-closed by bot after remaining unresolved.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3695](https://github.com/nanocoai/nanoclaw/pull/3695) Slack skills in-tree | **Merged today**, high visibility | Consumers want zero-friction Slack agent setup; branch-based skills caused build breaks (#3694) |
| [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) Configurable sweep timeout | **Open, addresses #3643** | Local-model users (OpenCode, self-hosted) hit hard 30-min kill; need per-deployment tuning |
| [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) WhatsApp `engage_mode=mention` broken for typed `@name` | **Open, high priority, 1 comment** | WhatsApp group users expect typed mentions to work; autocomplete-only behavior is a silent failure |
| [#3694](https://github.com/nanocoai/nanoclaw/issues/3694) Slack skills build breaks on clean install | **Closed today, 0 comments but critical** | `/add-slack` copy list missing files; lint/container failures block adoption |
| [#3693](https://github.com/nanocoai/nanoclaw/pull/3693) Signal: queue outbound, forward voice audio | **Open, new today** | Signal adapter drops messages when disconnected; no voice support — gaps vs. WhatsApp/Slack parity |

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) Hardcoded 30-min `ABSOLUTE_CEILING_MS` kills long local-model turns | **Open** | [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) **merged** — makes timeout configurable |
| **High** | [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) WhatsApp `engage_mode=mention` ignores typed `@name`; `accumulate` masks failure | **Open** | None yet |
| **High** | [#2997](https://github.com/nanocoai/nanoclaw/issues/2997) Recurring reminders with fixed text stop after first fire (dedup matches prior sends) | **Open** | None yet |
| **High** | [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) WhatsApp Cloud upgrade strands `messaging_groups` rows (no migration for instance re-key) | **Open** | None yet |
| **Medium** | [#3248](https://github.com/nanocoai/nanoclaw/issues/3248) `setup.sh` Node version check fails for "too old" — `install-node.sh` short-circuits | **Open** | None yet |
| **Medium** | [#3001](https://github.com/nanocoai/nanoclaw/issues/3001) Pre-shared-skills groups keep stale skill copies, block managed symlinks | **Open** | None yet |
| **Low** | [#3426](https://github.com/nanocoai/nanoclaw/issues/3426) `send_card` docs promise callback buttons; bridge drops actions without `url` | **Open** | [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) **open** — tells agent buttons are dropped |
| **Low** | [#2463](https://github.com/nanocoai/nanoclaw/issues/2463) CLI docs: `--agent-group-id` locked under group scope, not just defaulted | **Open** | None |
| **Low** | [#2464](https://github.com/nanocoai/nanoclaw/issues/2464) CLI silently overrides explicit `--agent-group-id` under group scope | **Open** | None |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Provider contract refactor** (setup, runtime, host, codex, opencode) | 5 PRs by @zvi-fried ([#3581](https://github.com/nanocoai/nanoclaw/pull/3581), [#3584](https://github.com/nanocoai/nanoclaw/pull/3584), [#3585](https://github.com/nanocoai/nanoclaw/pull/3585), [#3586](https://github.com/nanocoai/nanoclaw/pull/3586), [#3588](https://github.com/nanocoai/nanoclaw/pull/3588)) | **High** — core architectural work, all open but actively developed |
| **Free local voice transcription skill** (Whisper/whisper.cpp) | [#2317](https://github.com/nanocoai/nanoclaw/pull/2317) by @ira-at-work | **Medium** — open since May, adds privacy-first voice |
| **AWS credential proxy skill (paws4claws)** | [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) by @ira-at-work | **Medium** — niche but complete PR |
| **Signal parity: queued sends, voice audio, group typing, reactions** | [#3693](https://github.com/nanocoai/nanoclaw/pull/3693), [#2685](https://github.com/nanocoai/nanoclaw/pull/2685) | **High** — active PRs, addresses channel parity gap |
| **Automated changelog from PR release-note blocks** | [#3650](https://github.com/nanocoai/nanoclaw/pull/3650) merged | **Done** — will appear in next release |
| **Issue/PR intake taxonomy (forms, labels, auto-area)** | [#3644](https://github.com/nanocoai/nanoclaw/pull/3644), [#3647](https://github.com/nanocoai/nanoclaw/pull/3647), [#3651](https://github.com/nanocoai/nanoclaw/pull/3651) merged | **Done** — infrastructure for scaling triage |

---

## 7. User Feedback Summary

**Pain points (from open issues):**
- **WhatsApp mention engagement is unreliable** — users type `@agent` but it only works via autocomplete pill; `accumulate` policy hides the failure (#3085)
- **Scheduled reminders silently stop** — fixed-text recurring tasks deliver once then vanish; only trace is a container log line (#2997)
- **Upgrade migrations missing** — WhatsApp Cloud re-key (#2913) left existing installs with stranded DB rows, muting WhatsApp (#3105)
- **Node install broken for old versions** — `setup.sh` detects old Node but installer short-circuits, leaving user stuck (#3248)
- **Pre-refactor groups run stale skills** — no migration path, no warning, silent divergence from `container/skills/` (#3001)
- **CLI silently overrides explicit args** — operators pass `--agent-group-id` but it's ignored under group scope (#2464)
- **Signal adapter drops messages when disconnected** — no queue, no reconnect; voice not supported (#3693)

**Positive signals:**
- Slack skills migration (#3695) shows responsive resolution to build-break report (#3694)
- Configurable sweep timeout (#3646) directly addresses local-model user report (#3643)
- CI/labeling automation reduces maintainer toil — scales with contributor growth

---

## 8. Backlog Watch — Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) WhatsApp typed mention failure | **45 days** (opened 2026-07-18) | High-priority user-facing bug; `accumulate` policy makes it invisible; affects all WhatsApp group deployments |
| [#2997](https://github.com/nanocoai/nanoclaw/issues/2997) Recurring reminder dedup bug | **54 days** (opened 2026-07-09) | Silent data loss — reminders stop with no error; core scheduled-task reliability |
| [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) WhatsApp Cloud upgrade migration missing | **43 days** (opened 2026-07-20) | Blocks upgrades; existing installs lose WhatsApp silently; needs DB migration |
| [#3001](https://github.com/nanocoai/nanoclaw/issues/3001) Stale skills in pre-refactor groups | **53 days** (opened 2026-07-10) | Silent drift; groups created before Apr 2026 never get skill updates |
| [#3248](https://github.com/nanocoai/nanoclaw/issues/3248) Node install broken for "too old" | **18 days** (opened 2026-08-14) | Installation blocker for users on older Node; `setup.sh` detects but cannot remediate |
| [#2463](https://github.com/nanocoai/nanoclaw/issues/2463) / [#2464](https://github.com/nanocoai/nanoclaw/issues/2464) CLI group-scope lock behavior | **111 days** (opened 2026-05-13) | UX footgun — silent override confuses operators; docs understate lock-in |
| [#3426](https://github.com/nanocoai/nanoclaw/issues/3426) `send_card` button docs vs. reality | **11 days** (opened 2026-08-21) | Agents blame platform for missing buttons; PR [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) open but stale |
| [#2317](https://github.com/nanocoai/nanoclaw/pull/2317) Free Whisper skill | **117 days** (opened 2026-05-07) | Complete PR, privacy-valuable feature; no review movement |

---

## Project Health Indicators

| Metric | Signal |
|--------|--------|
| **PR merge rate** | 16/34 (47%) merged/closed today — healthy throughput |
| **Issue closure rate** | 15/24 (63%) closed today — but 8 were ancient bot issues; only 1 user issue resolved |
| **High-priority bug backlog** | 4 open high-priority bugs >2 weeks old — **concerning** |
| **Contributor diversity** | Core team (@glifocat, @gavrielc, @zvi-fried, @ira-at-work) driving most PRs; limited external contributors visible |
| **Documentation investment** | Strong — issue forms, PR template v2, CONTRIBUTING.md all updated today |
| **Release cadence** | No release since v2.3.0; accumulated fixes suggest patch/minor release imminent |

**Bottom line:** NanoClaw is actively maintained with strong engineering hygiene (CI, templates, labeling), but **user-facing bugs in WhatsApp, scheduled tasks, and upgrades are aging without fixes**. The provider refactor and Signal parity work indicate architectural investment. A v2.3.1 cutting the merged fixes (#3646, #3695, CI improvements) would restore confidence.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-01

## 1. Today's Overview
NullClaw shows **minimal activity** over the past 24 hours with zero issue updates, zero merged/closed PRs, and no new releases. The sole activity is a single open Dependabot PR (#956) updating the base Alpine Linux image in Docker configurations from 3.23 to 3.24. This indicates the project is in a **maintenance-only phase** with no active feature development or community-driven issue resolution currently underway. Project health appears stable but stagnant.

## 2. Releases
**No new releases** published today. The latest release information is not provided in the data snapshot.

## 3. Project Progress
**No merged or closed PRs** in the last 24 hours. The only open PR is:
- **#956** `ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group`  
  *Author: dependabot[bot]* | *Created: 2026-06-15* | *Updated: 2026-08-31*  
  🔗 [View PR #956](https://github.com/nullclaw/nullclaw/pull/956)  
  *Status:* Awaiting review/merge. This is a routine dependency update for Docker base images, improving security and compatibility but introducing no functional changes.

## 4. Community Hot Topics
**No active community discussions** in the last 24 hours. Zero issues and only one automated PR with no comments or reactions. The project shows **no current community engagement signals** — no feature debates, bug reports, or user questions.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** Zero issues filed or updated. The absence of stability reports could indicate either a stable codebase or low user adoption/monitoring. No fix PRs exist because no bugs were reported.

## 6. Feature Requests & Roadmap Signals
**No feature requests** captured in the current data. With no user-facing issues or discussions, there are no observable roadmap signals from the community. The only signal is the automated dependency maintenance via Dependabot, suggesting the project relies on bot-driven upkeep rather than active roadmap planning.

## 7. User Feedback Summary
**No user feedback available** in the last 24 hours. No issues, comments, or reactions to analyze. Pain points, use cases, and satisfaction levels cannot be assessed from current data. This silence may reflect a small user base, mature/stable tooling, or lack of project visibility.

## 8. Backlog Watch
**No long-unanswered issues or PRs** identified in the provided dataset (only 1 PR total, updated recently). However, **PR #956 has been open since 2026-06-15 (78 days)** with no maintainer action. While low-risk, this delay suggests **maintainer bandwidth constraints** or low priority for Docker maintenance.  
🔗 [PR #956 — Alpine 3.24 bump](https://github.com/nullclaw/nullclaw/pull/956) — *Recommendation: Merge promptly to keep CI/CD foundations current.*

---

**Overall Health Indicator:** 🟡 **Low Activity / Maintenance Mode**  
*NullClaw is currently sustained by automated dependency updates only. No human-driven development, community interaction, or issue resolution is observable. Consider proactive maintainer engagement or community outreach if growth is desired.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-01

## 1. Today's Overview

IronClaw shows **high velocity** with 34 total updates (14 issues + 20 PRs) in the last 24 hours. The project is actively pursuing three major parallel tracks: a **five-phase Design System overhaul** for the WebUI (Epic #7038 → #7781 → #7782), **MCP catalog scalability fixes** for large tool sets (47k+ tools), and **agent-loop stability improvements** (termination guards, deferred-tool handling). Six PRs merged today, including a GitHub repo-listing performance fix and CI stabilization. No new releases cut; the team is integrating preview branches (#8005) before merging Design System Phases 2–3.

---

## 2. Releases

**No new releases** published today. The `main` branch is receiving phased integration work behind feature flags / preview PRs.

---

## 3. Project Progress — Merged / Closed PRs (Last 24h)

| PR | Title | Scope | Impact |
|----|-------|-------|--------|
| [#7996](https://github.com/nearai/ironclaw/pull/7996) | `perf(github): compact repository list responses` | github extension, wasm | Projects `list_repos` / `search_repositories` onto minimal model-useful fields; cuts 519 KB → ~few KB per call. Rebuilds committed WASM artifact. |
| [#7977](https://github.com/nearai/ironclaw/pull/7977) | `fix(loop): terminate on dominant repeated output, cap interactive wall clock` | agent-loop | Adds dominant-repeat terminator + wall-clock cap to prevent 70-min / 593-call runaway loops (root cause of #7892). |
| [#7992](https://github.com/nearai/ironclaw/pull/7992) | `ci: unify bounded integration execution` | CI | Single `cargo nextest run` with 4-test concurrency ceiling; removes duplicate shell runner. |
| [#7995](https://github.com/nearai/ironclaw/pull/7995) | `fix(ci): stabilize main branch coverage checks` | CI, notifications | Fixes stale `approval_required` Inbox notifications; isolates Railway sandbox flakes. |
| [#7993](https://github.com/nearai/ironclaw/pull/7993) | `chore(deps): bump everything-else group (16 updates)` | deps | Routine dependency updates (uuid, base64, toml, etc.). |
| [#8002](https://github.com/nearai/ironclaw/issues/8002) | `Fix main branch CI failures 20260831` | CI | Meta-issue tracking the above CI fixes; closed after merges. |

**Net effect:** Agent-loop runaway protection is now in place; GitHub extension payload size reduced ~100×; CI pipeline unified and stabilized.

---

## 4. Community Hot Topics (Most Active / Strategic)

| Item | Type | Comments | 👍 | Why It Matters |
|------|------|----------|----|----------------|
| [#7781](https://github.com/nearai/ironclaw/issues/7781) | Epic (Phases 2–3) | 2 | 0 | **Design System governance + theme reskin** — supersedes #7733; drives PRs #7994, #8011, #8005. |
| [#7038](https://github.com/nearai/ironclaw/issues/7038) | Epic (Phase 1, closed) | 3 | 0 | Storybook integration done (#7750 merged earlier); now reference for Phases 2–5. |
| [#7831](https://github.com/nearai/ironclaw/pull/7831) | PR (XL) | — | 0 | **Chromatic Storybook publishing** (non-blocking lane); token work moved to #8011. |
| [#7986](https://github.com/nearai/ironclaw/issues/7986) | Bug (perf, closed) | 1 | 0 | GitHub `list_repos` returning 81 fields/519 KB — fixed by #7996. |
| [#7987](https://github.com/nearai/ironclaw/issues/7987) | Bug (schema) | 1 | 0 | `flatten_top_level` whitelist discards valid schema constraints — fix in #7999. |
| [#8012](https://github.com/nearai/ironclaw/issues/8012) | Bug (MCP, new) | 0 | 0 | **47k-tool catalog ingests but 0 tools searchable** — critical scalability blocker. |
| [#8006](https://github.com/nearai/ironclaw/pull/8006) | PR (XL) | — | 0 | **Progressive reply publication + native Slack Agent UI** — cross-cutting UX feature. |

**Underlying needs:**  
- **Design System:** Single source of truth (`DESIGN.md`), token governance, M3 Expressive reskin before v1.4.0.  
- **MCP at scale:** Catalog ingestion must truncate gracefully, not discard entirely; error visibility for discovery failures.  
- **Agent reliability:** Hard limits on loop duration / repeat calls; schema fidelity for tool definitions.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR / Status |
|----------|-------|-------------|-----------------|
| **Critical** | [#8012](https://github.com/nearai/ironclaw/issues/8012) | 47,337-tool hosted-MCP catalog ingests fully but **zero tools reachable via `tool_search`**; works at 2k tools. | No PR yet. Related: #7964 (truncation instead of discard). |
| **Critical** | [#8008](https://github.com/nearai/ironclaw/issues/8008) | Single leak-flagged `tools/list` page **aborts entire catalog discovery**, publishing 0 tools. | No PR yet. |
| **High** | [#8009](https://github.com/nearai/ironclaw/issues/8009) | MCP egress errors collapse to `"response_error"` — **discovery failures undiagnosable**. | No PR yet. |
| **High** | [#7987](https://github.com/nearai/ironclaw/issues/7987) | `flatten_top_level` rebuilds schema from whitelist, **silently drops valid top-level constraints** (`dependentRequired`, `$defs`, `minProperties`, `title`). | Fix PR: [#7999](https://github.com/nearai/ironclaw/pull/7999) (open). |
| **High** | [#7892](https://github.com/nearai/ironclaw/issues/7892) (closed) | Deferred tool found 15×, never invoked — 123 s run, 4 distinct calls, no terminating guard. | Fixed by [#7977](https://github.com/nearai/ironclaw/pull/7977) (merged). |
| **Medium** | [#7986](https://github.com/nearai/ironclaw/issues/7986) (closed) | `github.list_repos` returns 81 raw fields (519 KB for 98 repos); projection seam unused. | Fixed by [#7996](https://github.com/nearai/ironclaw/pull/7996) (merged). |
| **Medium** | [#7890](https://github.com/nearai/ironclaw/issues/7890) | `app.css` carries 100-line Tailwind colour-alias compat layer with `!important` — blocks WS3b reskin. | Targeted by #8011 (open). |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version (v1.4.0) |
|--------|--------|--------------------------------------|
| **Design System Phases 2–3** (`DESIGN.md` governance + M3 reskin) | Epic #7781, PRs #7994, #8011, #8005 | **Very High** — preview integration branch (#8005) exists; token work split from Chromatic lane. |
| **Design System Phases 4–5** (agentic interactions, components, IA) | Epic #7782 | Medium — depends on Phases 2–3 landing. |
| **Progressive reply publication + Slack Agent UI** | PR #8006, Issue #8007 | High — PR is XL but design doc approved; waivers tracked in #8007. |
| **Session-event transport unification + run-completion notifications** | PR #8010 | High — implements approved design doc `2026-08-13-webapp-run-notifications.md`. |
| **Model capability icons in Inference UI** | PR #7997 | Medium — UI polish, low risk. |
| **NEAR AI model capability preservation through discovery** | PR #7998 | Medium — additive API (`list_model_catalog`). |
| **MCP catalog truncation (not discard) on resource limits** | PR #7964 | High — fixes critical data-loss bug for large catalogs. |

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Large MCP catalogs are unusable** | #8012: 47k tools ingest → 0 searchable; #8008: one leaky page kills whole catalog | Enterprise / platform users hosting many MCP servers |
| **MCP errors are opaque** | #8009: all egress errors → `"response_error"`; no byte counts, no reason | Developers debugging MCP integrations |
| **Agent loops run away silently** | #7892: 123 s, 31 calls, 4 distinct pairs; #7977 fixed but shows production impact | Any autonomous agent workload |
| **GitHub extension bloats context** | #7986: 519 KB for `list_repos` — fixed in #7996 | Users with many repos / frequent GitHub tool use |
| **Tool schema constraints silently dropped** | #7987: `dependentRequired`, `$defs`, etc. discarded | Tool authors relying on JSON Schema validation |
| **WebUI design debt blocks reskin** | #7890: 100-line `!important` compat layer in `app.css` | Frontend team; blocks M3 Expressive rollout |

**Positive signals:**  
- New contributor `linhongyu510` shipped two fixes (#7996, #7999) in one day.  
- Nightly codebase-graph refresh (#7988) runs automatically.  
- Design System work is well-scoped with clear phase gates.

---

## 8. Backlog Watch — Stale / Blocked Items Needing Attention

| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#7964](https://github.com/nearai/ironclaw/pull/7964) | 4 days | Open (XL) | **MCP large-catalog fix** — changes error semantics from `Err` (discard all) to truncation. Blocks #8012 resolution. |
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | 9 days | Open (L) | `wasmtime` / `wit-component` dependency bumps — WASM runtime updates; may need compat testing. |
| [#7831](https://github.com/nearai/ironclaw/pull/7831) | 9 days | Open (XL) | Chromatic Storybook lane — **rescoped 2026-08-31**, token work moved to #8011. Needs review on remaining Chromatic-only changes. |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | 3 days | Open (XS) | Nightly codebase-graph refresh — trivial but should be merged to keep CI snapshot current. |
| [#8003](https://github.com/nearai/ironclaw/pull/8003) | 1 day | Open (L) | 17 `everything-else` dependency updates — routine but wide surface; monitor for breakage. |
| [#7984](https://github.com/nearai/ironclaw/pull/7984) | 4 days | Open (XL) | `tool_search` reply sizing to first-look envelope — affects token budget / model context; needs perf validation. |

---

## Project Health Snapshot

| Dimension | Signal | Assessment |
|-----------|--------|------------|
| **Velocity** | 6 merged PRs, 14 open PRs (7 XL) | 🟢 High — large scoped work in flight |
| **Stability** | 3 critical MCP bugs, 1 agent-loop fix merged | 🟡 Mixed — new critical bugs vs. fixes landing |
| **Design System** | 3 Epics, 5 PRs, preview integration branch | 🟢 On track for v1.4.0 |
| **Contributor Health** | 2 new-contributor fixes, bot-driven deps/graph | 🟢 Growing |
| **Technical Debt** | `app.css` compat layer, schema whitelist, MCP error flattening | 🟡 Being actively addressed |

**Bottom line:** IronClaw is in a **feature-heavy stabilization window** — Design System and MCP scalability are the twin pillars for v1.4.0. The next 48–72 hours should see #7964, #7999, #8011, and #8006 move toward merge, which would resolve the top critical bugs and deliver the M3 reskin.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-01

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** with 27 PRs and 11 issues updated in 24 hours, though zero new releases. The project is actively clearing stale backlog (6 issues auto-closed as stale from April) while addressing fresh user reports: a critical credit-drain bug (#2589), DSH integration gaps (#2577), and UX friction points (#1117, #1120). Security hardening is a visible priority with two MCP command-injection fixes in flight (#2590, #908). Dependency hygiene is aggressively managed via Dependabot (10+ PRs). Overall health: **active, security-conscious, but accumulating UX debt**.

---

## 2. Releases
**No new releases today.** Last release not provided in data.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Area | Change Type | Status |
|----|------|-------------|--------|
| [#2588](https://github.com/netease-youdao/LobsterAI/pull/2588) | docs, renderer, main, cowork | User guide update (Liuzhq) | **Closed** |
| [#2462](https://github.com/netease-youdao/LobsterAI/pull/2462) | deps | `mermaid 10.9.8 → 11.16.1` | **Closed** |
| [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465) | deps-dev | `vite 5.4.21 → 8.2.1` (major) | **Closed** |
| [#2463](https://github.com/netease-youdao/LobsterAI/pull/2463) | deps-dev | `@vitejs/plugin-react 4.7.0 → 6.0.5` | **Closed** |
| [#2164](https://github.com/netease-youdao/LobsterAI/pull/2164) | ci | `trufflehog 3.88.30 → 3.95.5` | **Closed** |
| [#2167](https://github.com/netease-youdao/LobsterAI/pull/2167) | ci | `actions/stale 9.1.0 → 10.3.0` | **Closed** |
| [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165) | ci | `actions/checkout 4 → 6` | **Closed** |
| [#2458](https://github.com/netease-youdao/LobsterAI/pull/2458) | deps-dev | `@types/react-dom 18.3.7 → 19.2.4` | **Closed** |

**Signal:** Batch closure of month-old Dependabot PRs + a doc PR suggests a **housekeeping sprint** before next feature cycle. Vite 8 / React 19 type upgrades indicate modernization of build stack.

---

## 4. Community Hot Topics (Most Active/Revealing)

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#2589](https://github.com/netease-youdao/LobsterAI/issues/2589) | Issue (new) | 0 | **Plan mode burns ~200 credits** — user calls it unexpected/unacceptable; signals billing transparency / quota control gap. |
| [#2577](https://github.com/netease-youdao/LobsterAI/issues/2577) | Issue | 1 | **DSH workbench lacks "reasoning effort" slider** for LobsterAI-provided models (only works for manual providers). |
| [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) | PR (new) | — | **Security hardening**: validate MCP stdio commands & external URLs against allowlists to prevent command injection / SSRF. |
| [#908](https://github.com/netease-youdao/LobsterAI/pull/908) | PR (stale) | — | Same MCP command-injection fix (open since Mar 26); now superseded by #2590? |
| [#1117](https://github.com/netease-youdao/LobsterAI/issues/1117) | Issue (stale) | 1 | **Keyboard shortcuts for tool-permission modals** (Enter/Approve, Esc/Deny) — power-user workflow blocker. |
| [#1120](https://github.com/netease-youdao/LobsterAI/issues/1120) | Issue (stale) | 1 | **One-click Retry** after session error — eliminates copy/paste/new-session friction. |

**Underlying theme:** Users hitting **sharp edges in daily loop** (credit surprise, missing model controls, modal keyboard traps, no error recovery). Security PRs show maintainers responding to supply-chain risk.

---

## 5. Bugs & Stability — Today's Reports

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#2589](https://github.com/netease-youdao/LobsterAI/issues/2589) | Plan mode drains ~200 credits unexpectedly; user threatens churn. | ❌ None yet |
| **High** | [#2577](https://github.com/netease-youdao/LobsterAI/issues/2577) | DSH workbench hides `reasoning_effort` for LobsterAI-routed models (pkg/custom providers). | ✅ [#2585](https://github.com/netease-youdao/LobsterAI/pull/2585) (open, maps thinking metadata → DSH `reasoningEfforts`) |
| **Medium** | [#1124](https://github.com/netease-youdao/LobsterAI/issues/1124) | Installer falsely claims "Lobster AI cannot close" after clean exit + logout. | ❌ |
| **Low** | [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) | MD→Word conversion cuts off mid-stream (`sse response finish reason: full`). | ❌ (stale-closed) |
| **Low** | [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) | Ollama local models (qwen3, gemma4) fail in LobsterAI but work in Cherry Studio. | ❌ (stale-closed) |

**Note:** Six April issues auto-closed as stale (#1653, #1635, #1643, #1644, #1662, #1671) — some may be real regressions; consider re-opening if users confirm.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Keyboard shortcuts for permission modals** (Enter/Esc) | [#1117](https://github.com/netease-youdao/LobsterAI/issues/1117) | 🟡 Medium — low effort, high DX impact; stale but still open |
| **Retry button on errored sessions** | [#1120](https://github.com/netease-youdao/LobsterAI/issues/1120) | 🟡 Medium — similar profile to #1117 |
| **MD-based workflow orchestration** (main agent discovers/delegates to other agents) | [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) | 🔴 Low — architectural, closed stale; but signals demand for **multi-agent coordination** |
| **MCP non-SSE transports (stdio, etc.)** | [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | 🟡 Medium — security PRs (#2590, #908) touching stdio path may unblock |
| **Group policy persistence** (allowlist reset) | [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) | 🔴 Low — closed stale; config sync bug? |

**Prediction:** Next patch will likely ship **#2585 (DSH reasoning-effort)** + **#2590 (MCP security)** + dependency updates. UX shortcuts (#1117, #1120) are ripe for a "quality-of-life" sprint.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Credit/billing opacity** | #2589 "you don't expect a repeat customer" | 😡 Frustrated — trust risk |
| **Model-control parity** | #2577 DSH slider missing only for LobsterAI models | 😐 Annoyed — inconsistent UX |
| **Keyboard-driven workflow broken** | #1117 "move hands off keyboard every time" | 😤 Power-user friction |
| **No error recovery** | #1120 "only option: copy, new session, paste" | 😞 Workflow dead-end |
| **Installer false alarm** | #1124 "already closed & logged out" | 😕 Confusion |
| **Ollama compatibility** | #1635 works elsewhere, not here | 🤔 Compatibility gap |

**Positive signal:** Users file detailed repro steps, screenshots, and logs — invested community.

---

## 8. Backlog Watch — Stagnant Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#908](https://github.com/netease-youdao/LobsterAI/pull/908) | 5 months | MCP command-injection fix; superseded by #2590? Decide & merge one. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 5 months | Electron 40 → 44 upgrade (major); blocked on testing? |
| [#1117](https://github.com/netease-youdao/LobsterAI/issues/1117) | 5 months | Keyboard shortcuts — trivial fix, high daily impact. |
| [#1120](https://github.com/netease-youdao/LobsterAI/issues/1120) | 5 months | Retry button — same. |
| [#1124](https://github.com/netease-youdao/LobsterAI/issues/1124) | 5 months | Installer UX bug; affects every update. |
| [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) | 4.5 months | Multi-agent workflow vision; closed stale but strategic. |

**Recommendation:** Triage stale PRs (#908, #1277) this week — security & Electron upgrades are release blockers. Convert #1117/#1120 to "good first issue" to clear UX debt.

---

*Digest generated from GitHub API data as of 2026-09-01 00:00 UTC. Links point to live items.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-01

## 1. Today's Overview
Moltis shipped a new dated release **20260831.01** and closed three pull requests in the last 24 hours, covering supply-chain hardening, sandbox image validation, and a regression in explicit `node: null` handling. One new PR addresses a Docker networking edge-case for local-auth detection. The only open issue updated today is a long-running feature request for a Kubernetes-native sandbox backend, signaling continued investment in enterprise-grade isolation. Overall activity is steady: a release cut, three fixes merged, and one high-value feature discussion still active.

## 2. Releases
### `20260831.01` (2026-08-31)
No detailed changelog is attached to the release object in the feed. Given the three merged PRs (#1221, #1222, #1248) all updated on 2026-08-31, this release likely bundles:
- **Supply-chain fix**: Snyk Agent Scan pinned to `0.5.17` via `uvx`; standalone `mcp-scan` fallback removed (#1221).
- **Security hardening**: Sandbox image references and package names now validated; package checks and image builds restricted to operator administrators (#1222).
- **Execution regression fix**: Explicit `node: null` in tool calls now correctly selects local execution path (#1248).

> ⚠️ **Migration note**: If you relied on the `mcp-scan` fallback for skill security scans, ensure `uv` is installed in your CI/CD pipelines. Administrators should review sandbox image allow-lists after the new validation logic.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#1248](https://github.com/moltis-org/moltis/pull/1248) | `fix(exec): honor explicit null node selection` | Execution / Node routing | Fixes a regression where `node: null` was ignored, causing unintended remote execution. Adds regression test. |
| [#1221](https://github.com/moltis-org/moltis/pull/1221) | `fix(gateway): pin Snyk Agent Scan` | Supply-chain / Security | Pins scanner version, removes fallback, mandates `uv`. Reduces supply-chain attack surface. |
| [#1222](https://github.com/moltis-org/moltis/pull/1222) | `fix(web): validate sandbox image requests` | Sandbox / Web API | Validates image refs & package names; restricts build/check to admin identities. Hardens multi-tenant deployments. |

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#1118](https://github.com/moltis-org/moltis/issues/1118) | Feature (open) | 3 comments, 1 👍, updated 2026-08-31 | **Kubernetes-native sandbox** with `runtimeClassName` support for VM-level isolation (Kata, gVisor). Users want to run untrusted LLM-generated code in ephemeral pods with hardware-enforced boundaries—critical for enterprise/compliance scenarios. |

*No other issues or PRs received comments or reactions in the last 24 h.*

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Medium** | [#1246](https://github.com/moltis-org/moltis/issues/1246) “can't run on sandbox after a node is added” | Closed (2026-08-31) | Likely resolved by #1248 (explicit `node: null` handling) or related node-selection logic. No dedicated fix PR linked. |
| **Low** | Docker bridge-network source IP breaks `is_local_connection()` → Tier 2 auth disabled | Open | [#1249](https://github.com/moltis-org/moltis/pull/1249) (open, authored 2026-08-31) |

*No crashes or data-loss reports in today’s feed.*

## 6. Feature Requests & Roadmap Signals
1. **Kubernetes sandbox backend** ([#1118](https://github.com/moltis-org/moltis/issues/1118)) — Oldest open feature (since June), now with concrete `runtimeClassName` design. Strong signal for next major release; aligns with “untrusted code execution” narrative.
2. **Docker-local auth compatibility** ([#1249](https://github.com/moltis-org/moltis/pull/1249)) — Small but frequent friction for self-hosters using default bridge networking. Quick win if merged.

*Prediction*: Kubernetes sandbox will land behind a feature flag in the next 1–2 releases; Docker auth fix likely in the next patch.

## 7. User Feedback Summary
- **Pain point**: Self-hosters on Docker lose “local dev convenience” tier because container source IPs aren’t `127.0.0.1` ([#1112](https://github.com/moltis-org/moltis/issues/1112) → #1249).
- **Use case**: Teams need to spawn short-lived, strongly-isolated pods for each agent command—hence the `runtimeClassName` ask ([#1118](https://github.com/moltis-org/moltis/issues/1118)).
- **Satisfaction**: Silent on the three merged fixes (no comments), suggesting they resolve quiet annoyances rather than vocal complaints.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1118](https://github.com/moltis-org/moltis/issues/1118) Kubernetes sandbox | ~80 days | High-value enterprise feature; design discussed but no implementation PR yet. Needs maintainer triage / assignment. |
| [#1249](https://github.com/moltis-org/moltis/pull/1249) Docker loopback auth | 1 day (open) | Small fix, but affects every Docker-based dev deployment. Quick review would unblock self-hosters. |

---
*Digest generated from GitHub data as of 2026-09-01 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-01

---

## 1. Today's Overview

CoPaw is in **high-velocity beta stabilization** for the v2.2.0 release, with two beta versions shipped in 24 hours (v2.2.0-beta.4 → v2.2.0-beta.5). The project shows **strong engineering discipline**: 16 PRs merged/closed, 23 issues resolved, and a focus on critical stability fixes (memory indexing, browser SDK tab groups, console streaming, zero-downtime reloads). Community engagement is active — 15 comments on the Hub multi-tenant discussion (#7318) signals anticipation for team/collaborative features. Overall health: **healthy, trending toward GA**.

---

## 2. Releases

### v2.2.0-beta.5 (2026-08-31)
| Change | Type | PR | Notes |
|--------|------|----|-------|
| Fix channel contract checks: portable encoding, complete SIPChannel coverage | Fix | [#7267](https://github.com/agentscope-ai/QwenPaw/pull/7267) | Resolves Windows `UnicodeDecodeError` in static checker |
| Make embedding reindex explicit & scoped; disable vector search on config change until manual reindex succeeds | Fix | [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) | **Breaking behavior change**: no auto-reindex on embedding config save; falls back to BM25 |
| Version bump to 2.2.0b5 | Chore | [#7438](https://github.com/agentscope-ai/QwenPaw/pull/7438) | — |

### v2.2.0-beta.4 (2026-08-31)
| Change | Type | PR | Notes |
|--------|------|----|-------|
| Bound oversized single-line tool results in context | Fix | [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) | Prevents context bloat |
| Align agent-stats test (TC-AGT-06) with current agent scope | Test | [#7021](https://github.com/agentscope-ai/QwenPaw/pull/7021) | — |
| Desktop unification fixes (truncated in data) | Fix | — | — |

**Migration note for beta.5**: If you changed embedding provider/dimensions, run **Manual Rebuild Memory Index** in UI — vector search stays disabled until it succeeds.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Impact |
|----|------|--------|
| [#7438](https://github.com/agentscope-ai/QwenPaw/pull/7438) | Release | Version bump to 2.2.0b5 |
| [#7267](https://github.com/agentscope-ai/QwenPaw/pull/7267) | Channels | Portable contract checker; fixes Windows CI |
| [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) | Memory | Explicit embedding reindex; ReMe 0.4.1.10 integration |
| [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) | Context | Tool result size bounding |
| [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) | Media | Reject oversized image dimensions (pixel limits) |
| [#7021](https://github.com/agentscope-ai/QwenPaw/pull/7021) | Testing | Agent-stats test alignment |
| [#7437](https://github.com/agentscope-ai/QwenPaw/pull/7437) | Release | Beta.4 verification (closed invalid) |
| [#7364](https://github.com/agentscope-ai/QwenPaw/pull/7364) | Memory | Zero-downtime reload memory_manager leak (closed) |

**Net advancement**: Memory subsystem hardened, channel contracts portable, context safety improved, desktop startup/performance fixes in flight.

---

## 4. Community Hot Topics

| Issue/PR | Comments | 👍 | Core Need |
|----------|----------|----|-----------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) **QwenPaw Hub multi-tenant edition — what next?** | 15 | 2 | **Team/organization features**: RBAC, shared skills, admin console, audit logs, SSO. Community wants "Cursor for teams" equivalent. |
| [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) **Tool results lost + command re-dispatched (doom-loop)** | 8 | 0 | **Critical regression in 2.2.0b1**: agent stalls, duplicate dispatches. Blocks desktop users. |
| [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) **Console stream: duplicated chunks mid-stream** | 5 | 0 | **SSE replay bug** — affects web UI & backend. UX degradation for long responses. |
| [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) **Early context records lost in long sessions (160-page docs)** | 2 | 0 | **Context truncation/eviction bug** — days of work vanish. High-severity for document-heavy workflows. |
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) **Parent agent doesn't poll sub-agent status proactively** | 2 | 0 | **Orchestration gap**: main agent waits for user "progress?" prompt before checking children. |

**Signal**: Hub (multi-tenant) is the **#1 strategic ask**. Stability regressions in 2.2.0 betas (tool dispatch, context loss, streaming) are the **#1 tactical pain**.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR / Notes |
|----------|-------|--------|----------------|
| **Critical** | [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) Tool results lost, command re-dispatched → doom-loop | Open | No fix PR yet. Affects 2.2.0b1+ desktop. |
| **Critical** | [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) Early context records permanently lost (long sessions) | Open | No fix PR. User reports 160-page doc context wiped. |
| **High** | [#7446](https://github.com/agentscope-ai/QwenPaw/issues/7446) Rebuild Memory Index → 500 (ReMe instance `None`) | Open | Fix PR: [#7453](https://github.com/agentscope-ai/QwenPaw/pull/7453) — bundle ReMe Python core in PyInstaller |
| **High** | [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) Sync calls block event loop; timeout ineffective (118–135s startup freeze) | Open | No fix PR. Windows desktop. |
| **High** | [#7364](https://github.com/agentscope-ai/QwenPaw/issues/7364) Zero-downtime reload reuses closed `memory_manager` | Closed | Fixed in beta.5 via [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) reindex changes |
| **Medium** | [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) Console SSE duplicated chunks mid-stream | Open | No fix PR. Affects web UI + backend replay. |
| **Medium** | [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) PDF with Chinese filename (10+ chars) → `UNKNOWN_AGENT_ERROR` | Closed | Likely fixed by [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) oversized image check (path handling) |
| **Medium** | [#7397](https://github.com/agentscope-ai/QwenPaw/issues/7397) Browser SDK spawns new tab-group per `open()`/`present()` | Open | Fix PR: [#7457](https://github.com/agentscope-ai/QwenPaw/pull/7457) — reuse session group |
| **Medium** | [#7445](https://github.com/agentscope-ai/QwenPaw/issues/7445) Hub fails to connect to local/LAN model endpoints (127.0.0.1:8088) | Open | No fix PR. Blocks Hub + local model usage. |
| **Low** | [#7436](https://github.com/agentscope-ai/QwenPaw/issues/7436) Tool call display format in IM channels (Feishu/DingTalk) | Open | Feature PR: [#7436](https://github.com/agentscope-ai/QwenPaw/pull/7436) adds `tool_call_format` config |

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for v2.2.0 / v2.3.0 |
|---------|--------|-------------------------------|
| **Hub multi-tenant: RBAC, shared skills, admin console, SSO** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) (15 comments) | **High** — 2.2.0 flagship; beta.5 ships Hub core |
| **Disable all built-in cloud providers (Kilo Code, opencode)** | [#7455](https://github.com/agentscope-ai/QwenPaw/issues/7455) | **Medium** — simple toggle; privacy/compliance ask |
| **Proactive sub-agent status polling by parent agent** | [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | **Medium** — orchestration UX gap; likely 2.3.0 |
| **Copy assistant text without reasoning/thinking blocks** | [#7448](https://github.com/agentscope-ai/QwenPaw/pull/7448) | **High** — PR open, trivial UX win |
| **Unified ReMe slash commands (`/reme <action>`)** | [#7444](https://github.com/agentscope-ai/QwenPaw/pull/7444) | **High** — PR open, consolidates `/dream`, `/memorize`, `/reme_status` |
| **Auto Fin (scheduled long-term memory from CLS telegrams)** | [#7441](https://github.com/agentscope-ai/QwenPaw/pull/7441) | **High** — PR open, upgrades ReMe to 0.4.1.11 |
| **Access Policy docs in security mechanisms** | [#7440](https://github.com/agentscope-ai/QwenPaw/pull/7440) | **High** — doc PR open |
| **Workspace-scoped skill preload config** | [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | **Medium** — under review; "Claude Code subagents" parity |
| **OAuth2 rotating refresh_token persistence** | [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | **Medium** — first-time contributor, under review |

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Beta instability blocks daily work** | [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) "5 stalls in a single session", [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) "context lost → task cannot continue" | 😡 Frustrated |
| **Desktop startup too slow (4 min)** | [#7360](https://github.com/agentscope-ai/QwenPaw/issues/7360) 247s background launch | 😟 Dissatisfied |
| **Hub + local model connectivity broken** | [#7445](https://github.com/agentscope-ai/QwenPaw/issues/7445) "cloud API works, local 127.0.0.1:8088 fails" | 😟 Blocked |
| **Memory reindex UX confusing** | [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) changed to explicit manual reindex; users may not know | 🤔 Unclear |
| **Strong demand for team features** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) 15 comments, 2 👍 | 🙌 Excited |
| **Console streaming UX broken** | [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) duplicated chunks mid-stream | 😟 Annoyed |
| **Browser SDK tab grouping broken** | [#7397](https://github.com/agentscope-ai/QwenPaw/issues/7397) new group per call | 😟 Workaround needed |

**Net**: Power users (long-context, multi-agent, desktop) are **hitting regressions hard** in 2.2.0 betas. Hub anticipation is high but local-model connectivity is a blocker.

---

## 8. Backlog Watch (Needs Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) **OAuth2 rotating refresh_token persistence** | 16 days | First-time contributor; fixes XMind/remote MCP auth expiry. Stalled in review. |
| [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) **Workspace-scoped skill preload** | 12 days | Strategic for "trusted core skills" UX; under review, no recent movement. |
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) **Sync calls freeze event loop (2+ min startup)** | 5 days | Critical desktop perf bug; no fix PR, no assignee. |
| [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) **Tool result loss + doom-loop** | 1 day | Critical regression; 8 comments, no fix. Should be **P0 for beta.6**. |
| [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) **Context records vanish in long sessions** | 0 days | Data loss severity; needs root-cause (eviction? truncation? ReMe?). |
| [#7445](https://github.com/agentscope-ai/QwenPaw/issues/7445) **Hub ↔ local model connectivity** | 0 days | Blocks Hub adoption for self-hosted/private models. |
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) **Hub roadmap discussion** | 6 days | 15 comments — maintainers should synthesize & publish roadmap. |

---

## Links Index

- **Repo**: https://github.com/agentscope-ai/QwenPaw
- **Releases**: https://github.com/agentscope-ai/QwenPaw/releases
- **Issues**: https://github.com/agentscope-ai/QwenPaw/issues
- **Pull Requests**: https://github.com/agentscope-ai/QwenPaw/pulls

---

*Digest generated from GitHub data as of 2026-09-01 00:00 UTC. All links point to agentscope-ai/QwenPaw (CoPaw upstream).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-01

## 1. Today's Overview
ZeptoClaw shows **intense security-focused activity** with 8 open issues updated in the last 24 hours—all filed or updated yesterday (2026-08-31)—and one merged PR addressing dependency vulnerabilities. The project is in a **reactive hardening phase**: a contributor (morler) appears to have performed a security audit, surfacing 7 distinct safety issues (token leakage, timing attacks, missing rate limits, insecure file permissions, WebSocket auth via query params) plus a CI baseline failure (Clippy/cargo-deny) and 8 RustSec advisories. No new releases; the merged PR (#657) resolves the advisory backlog, unblocking the CI restore tracked in #646. Overall health: **high urgency, active triage, no user-facing features in flight**.

## 2. Releases
**None** — no new versions published.

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#657](https://github.com/qhkm/zeptoclaw/pull/657) | **Merged/Closed** | **chore(deps): fix 8 RustSec advisories** — updates `h2`, `bcrypt`, `quinn-proto`, `crossbeam-epoch`, `anyhow` via `cargo update`; bumps `quick-xml` 0.39→0.41, `lopdf` 0.40→0.41 in `Cargo.toml`. Closes #651. Enables `cargo-deny` to pass, unblocking #646. |

*No feature PRs merged; all movement is vulnerability remediation and CI hygiene.*

## 4. Community Hot Topics
| Issue | Activity | Underlying Need |
|-------|----------|-----------------|
| [#646](https://github.com/qhkm/zeptoclaw/issues/646) (3 comments) | **Highest discussion** — CI baseline broken by new Clippy warnings (Rust 1.97.1) and `cargo-deny` failures on `quick-xml`/`lopdf`. | **Restore green CI** before further safety work can land; maintainers need zero-warning baseline. |
| [#644](https://github.com/qhkm/zeptoclaw/issues/644) (1 comment) | Subprocess env scrubbing & process-tree termination on timeout. | **Prevent credential leakage** to child processes; avoid orphaned processes on timeout. |
| [#656](https://github.com/qhkm/zeptoclaw/issues/656) – [#651](https://github.com/qhkm/zeptoclaw/issues/651) (0 comments each) | **Cluster of 7 safety issues filed same day** by morler. | **Comprehensive secret handling, auth hardening, and dependency hygiene** — suggests external audit or pre-release security sweep. |

*Reactions (👍) are zero across all items; engagement is technical, not community-driven.*

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1-Critical** | [#644](https://github.com/qhkm/zeptoclaw/issues/644) | Subprocesses inherit full env (credentials); timeout wrapper doesn’t kill process tree. | No |
| **P1-Critical** | [#656](https://github.com/qhkm/zeptoclaw/issues/656) | `panel start` prints full API token to stdout → logs, scrollback, screenshots. | No |
| **High** | [#655](https://github.com/qhkm/zeptoclaw/issues/655) | Bearer token compared with `==` in 3 sites (timing attack surface); doc claims constant-time falsely. | No |
| **High** | [#653](https://github.com/qhkm/zeptoclaw/issues/653) | WS auth token passed as `?auth=` query param → leaks to proxy logs, browser history. | No |
| **High** | [#652](https://github.com/qhkm/zeptoclaw/issues/652) | `config.toml` (provider keys) & `panel.token` written with default perms (world-readable on multi-user). | No |
| **High** | [#654](https://github.com/qhkm/zeptoclaw/issues/654) | `POST /api/auth/login` has no rate limit; only bcrypt cost 12 (~250 ms) throttles brute force. | No |
| **Medium** | [#646](https://github.com/qhkm/zeptoclaw/issues/646) | CI fails: 5 new Clippy warnings + `cargo-deny` blocks on `quick-xml`/`lopdf` vulns. | **Yes** — #657 merged fixes advisories; Clippy fixes pending. |
| **Medium** | [#651](https://github.com/qhkm/zeptoclaw/issues/651) | 7 RustSec advisories (h2, quick-xml, lopdf, bcrypt, quinn-proto, crossbeam-epoch, anyhow). | **Yes** — #657 merged (8 advisories incl. anyhow). |

*All safety bugs are fresh (filed 2026-08-31) with **no fix PRs yet** except the dependency batch.*

## 6. Feature Requests & Roadmap Signals
**No explicit feature requests** in the last 24h. The issue cluster signals an **implicit roadmap priority**:
1. **Secret hygiene overhaul** — token printing, file perms, query-param auth, timing-safe compare.
2. **Auth hardening** — rate-limited login, constant-time verification, WS header-based auth.
3. **Subprocess sandboxing** — env scrubbing, process-tree kill on timeout.
4. **CI baseline restoration** — Clippy clean, `cargo-deny` green (blocked on #646 follow-up).

*Prediction*: Next version will be a **security patch release** (e.g., `v0.x.y+1`) bundling fixes for #652–#656 + Clippy clean-up.

## 7. User Feedback Summary
- **No end-user feedback** (issues, discussions, reactions) in this window.
- All activity is **internal/maintainer-driven** (qhkm, morler).
- Pain points inferred from issues: **accidental secret exposure** (logs, perms, query strings), **weak auth throttling**, **CI noise blocking merges**.
- Satisfaction signal: **low visibility** — project appears in "quiet maintenance with sudden security sprint" mode.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Issue | Age | Why It Matters |
|-------|-----|----------------|
| [#646](https://github.com/qhkm/zeptoclaw/issues/646) | **40 days** (opened 2026-07-23) | **CI gate broken** — blocks all PR merges until Clippy warnings fixed & `cargo-deny` passes. #657 resolves advisories; Clippy fixes still open. |
| [#644](https://github.com/qhkm/zeptoclaw/issues/644) | **40 days** | **Subprocess credential leak** — architectural safety gap; requires runtime changes across multiple providers. |
| [#652](https://github.com/qhkm/zeptoclaw/issues/652) | **1 day** | **World-readable secret files** — immediate risk on shared hosts; trivial fix (chmod 0600) but unassigned. |
| [#655](https://github.com/qhkm/zeptoclaw/issues/655) | **1 day** | **Timing attack on auth** — 3 call sites; needs constant-time compare (e.g., `subtle::ConstantTimeEq`). |
| [#653](https://github.com/qhkm/zeptoclaw/issues/653) | **1 day** | **WS token in query string** — requires protocol change (header/cookie auth) + client update. |

> **Actionable insight**: The 40-day-old CI baseline (#646) and subprocess safety (#644) are **stale P1s** that pre-date yesterday’s audit. The 7 new issues (#651–#656) are **fresh, concrete, and fixable in parallel** — ideal for a coordinated security sprint. Maintainer bandwidth appears focused on triage; assigning owners to each safety issue would accelerate resolution.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-01

## 1. Today's Overview

ZeroClaw is in a **high-velocity architectural redesign phase** with zero releases but intense RFC activity. The project shows 17 active issues and 50 open PRs updated today — all still open, indicating a backlog of large-scale changes awaiting review. No PRs were merged in the last 24 hours, suggesting maintainers are focused on reviewing substantial architectural proposals (many marked `size:XL` and `risk:high`) rather than shipping incremental fixes. The dominance of RFCs around runtime ownership, WASM plugin architecture, sandbox policy, and channel/gateway unification signals a **platform-level refactor** in progress. Two critical bugs (S0 data loss, S2 degraded behavior) were reported yesterday and already have fix PRs open.

## 2. Releases

**No new releases** published today. The project appears to be between versions while major architectural RFCs are debated.

---

## 3. Project Progress

**No PRs merged or closed today** — all 50 PRs updated remain open. Key workstreams advancing toward merge (all `needs-maintainer-review` or `needs-author-action`):

| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | `fix(cron): bound agent job runs with wall-clock timeout` | Cron scheduler, agent runtime | `needs-maintainer-review`, `size:XL` |
| [#9740](https://github.com/zeroclaw-labs/zeroclaw/pull/9740) | `feat(channels): add VoiceHost WebSocket bridge` | Voice channel (FunASR/SenseVoice) | `needs-author-action`, `size:XL` |
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | `feat(runtime): anchor context compaction to model window ratio` | Context management, runtime profiles | `needs-author-action`, `size:XL` |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | `feat(providers): support multiple models per provider profile` | Provider config, multi-model | `needs-author-action`, `size:XL` |
| [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) | `feat(plugins): enforce host-owned egress policy on plugin wasi:http` | WASM plugin security, egress control | `status:blocked`, `size:XL` |
| [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | `feat(runtime): enforce execution-tree iteration budgets` | Agent execution limits | Open, `size:L` |
| [#10521](https://github.com/zeroclaw-labs/zeroclaw/pull/10521) | `fix(config): honor ZEROCLAW_CONFIG_DIR in Config::default()` | Config path resolution | Open, small fix |
| [#10498](https://github.com/zeroclaw-labs/zeroclaw/pull/10498) | `fix(config): refuse unsafe bare-path overwrites` | Config safety, prevents data loss | Open, addresses #10495 |
| [#10518](https://github.com/zeroclaw-labs/zeroclaw/pull/10518) | `fix(zerocode): satisfy Rust 1.98 drain-collect lint` | Toolchain compatibility | Open, `size:XS` |
| [#10477](https://github.com/zeroclaw-labs/zeroclaw/pull/10477) | `fix(zerocode): satisfy Rust 1.98 drain lint` | Toolchain compatibility | Open, `size:XS` |

**Pattern**: Most large PRs are stacked on RFC decisions and await maintainer bandwidth. Small fixes (#10521, #10498, #10518, #10477) are ready but unmerged.

---

## 4. Community Hot Topics

### Top Issues by Discussion Volume

| Issue | Comments | Topic | Core Tension |
|-------|----------|-------|--------------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 29 | **RFC: Runtime-owned conversation sessions & transport surface adapters** | Who owns the session lifecycle — runtime or gateway? High-risk architecture boundary. |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 23 | **RFC: Unified attachment architecture for web chat and channels** | Cross-channel attachment handling (images, files, audio) with security boundaries. |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | 18 | **RFC: Granular sandbox policy — filesystem & network restrictions** | Drift between app-layer path admission and OS sandbox backends (Bubblewrap, Landlock, Seatbelt). |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | 15 | **RFC: Computer-use support for desktop screen interaction & input control** | Security model for agent desktop automation (approval boundaries, sidecar trust). |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | 11 | **RFC: AI-assisted PR pre-review and re-review** | Formalizing AI review as comment-only SOP; human retains approval/merge. |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) | 11 | **RFC: WASM plugin lifecycle observer subscriptions** | Extending plugin observability via `PluginCapability::Observer`. |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) | 10 | **RFC: Verbatim channel send over gateway without agent turn** | Gateway currently has 47 `/api/*` paths; none allow raw message passthrough. |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | 6 | **RFC: Composable WASM plugin runtime architecture** | Core APIs, typed extension points, replaceable providers for tools/channels/memory/skills. |

**Underlying needs**: 
- **Architectural clarity** on ownership boundaries (runtime vs. gateway vs. channel)
- **Security-first extension model** for WASM plugins and desktop automation
- **Operational tooling** (AI review, eval history, judge calibration) to scale contributor velocity
- **Unified abstractions** across channels (web, WeChat, voice, ACP) for attachments, sessions, and raw passthrough

---

## 5. Bugs & Stability

### Critical Bugs Reported/Updated Today

| Issue | Severity | Component | Status | Fix PR |
|-------|----------|-----------|--------|--------|
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | **S0 — Data loss / security risk** | `config/onboarding` | `accepted` | [#10498](https://github.com/zeroclaw-labs/zeroclaw/pull/10498) |
| [#10513](https://github.com/zeroclaw-labs/zeroclaw/issues/10513) | **S2 — Degraded behavior** | `runtime/daemon` (SOP RPC) | `accepted` | — |
| [#9850](https://github.com/zeroclaw-labs/zeroclaw/issues/9850) | **S2 — Degraded behavior** | `tools` (llm_task provider) | `accepted` | — |
| [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | **S2 — Degraded behavior** | `runtime/daemon` (bootstrap truncation) | New (created today) | — |

**Details**:
- **#10495 (S0)**: `Config::save()` can overwrite a populated 109 KB `config.toml` (25 agents) with a 702-byte near-empty file. **Fix PR #10498** adds guard against unsafe bare-path overwrites.
- **#10513 (S2)**: `RpcDispatcher::handle_sops_run` returns a run ID but no driver executes the SOP — returns success for no-op.
- **#9850 (S2)**: `LlmTaskTool` uses legacy provider factory, losing alias-specific config (Azure/OAuth/`requires_openai_auth`).
- **#10523 (S2)**: Bootstrap files (`AGENTS.md`, `SOUL.md`, etc.) silently truncated at 6,000 chars when `compact_context` enabled — invisible to operator.

**Risk**: Two S0/S2 bugs in config/runtime paths suggest **onboarding and daemon execution paths need hardening** before next release.

---

## 6. Feature Requests & Roadmap Signals

### High-Signal RFCs Likely to Land Next Version

| RFC | Domain | Probability | Rationale |
|-----|--------|-------------|-----------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) Runtime-owned sessions | Architecture/Transport | **High** | 29 comments, `priority:p2`, ratifies ownership boundary with #9488/#9600; foundational for gateway/channel work |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) Unified attachments | Channels/Security | **High** | 23 comments, Revision 9, needed for voice/web/WeChat parity |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) Granular sandbox policy | Security/Sandbox | **High** | 18 comments, `in-progress`, addresses drift between app-layer and OS sandbox |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) Composable WASM plugin runtime | Plugins/Architecture | **Medium-High** | 6 comments, `principal contributor` author, enables hooks/observers/skills unification |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) AI-assisted PR review | CI/DevEx | **Medium** | 11 comments, folds production `pr-review-pilot` behavior into SOP |
| [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) Verbatim channel send | Gateway/Channels | **Medium** | 10 comments, unblocks 47-path gateway gap for raw passthrough |

### Deferred / Lower Probability
- [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) Computer-use desktop automation — `risk:high`, security clarification ongoing, likely post-v1.0
- [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) WASM observer capability — depends on #10076 plugin architecture landing first

---

## 7. User Feedback Summary

**Pain points surfaced in issues/PRs**:

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Config data loss on save** | #10495: 109 KB → 702 bytes silently | Operators with multi-agent configs |
| **Silent bootstrap truncation** | #10523: 6K char limit invisible | Users with large `AGENTS.md`/`SOUL.md` |
| **Provider alias config ignored** | #9850: Azure/OAuth settings lost | Enterprise users with non-default providers |
| **SOP RPC returns fake success** | #10513: run ID for no-op execution | Automation consumers of daemon RPC |
| **No raw message passthrough in gateway** | #10050: 47 paths, none support verbatim send | Channel integrators (Slack, Discord, custom) |
| **Schema recompilation on every config resolve** | #10195: `compile_manifest_config` per execution | Plugin authors, slow tool/channel startup |
| **Rust 1.98 lints blocking toolchain** | #10518, #10477: `clippy::drain_collect` | All contributors (blocks #9527 routine update) |

**Positive signals**: 
- Active RFC process with maintainer takeovers (e.g., #6909, #7822 revisions)
- Distinguish/principal contributors driving large features (#9320, #9740, #9535, #9809)
- Eval infrastructure maturing (#9248, #9245, #9244, #9225) for quality gates

---

## 8. Backlog Watch — Stalled High-Value Items

| Item | Age | Blockers | Why It Matters |
|------|-----|----------|----------------|
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) Granular sandbox policy | **106 days** (since 2026-05-28) | Needs maintainer review; `in-progress` but stale | Security foundation; drift between app/OS sandbox layers |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) Computer-use desktop | **99 days** | Security clarification, maintainer takeover | High-risk feature; needs explicit approval model |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) WASM observer capability | **76 days** | Depends on #10076 plugin architecture | Unblocks plugin observability/telemetry |
| [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) Plugin egress policy | **32 days** | `status:blocked`, `do-not-merge` | ADR-014 Stage 2; security-critical for WASM plugins |
| [#9244](https://github.com/zeroclaw-labs/zeroclaw/pull/9244) Eval: seed & grade isolated case memory | **42 days** | `needs-author-action`, `stacked`, `risk:high` | Core eval infrastructure for regression prevention |
| [#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248) Eval: append-only run-history receipts | **42 days** | `needs-author-action` | Longitudinal analysis, audit trail |
| [#9245](https://github.com/zeroclaw-labs/zeroclaw/pull/9245) Eval: judge calibration tooling | **42 days** | Base branch `feat/7065-llm-judge` | Human-in-the-loop quality gates |
| [#9510](https://github.com/zeroclaw-labs/zeroclaw/issues/9510) Reject PRs with no common ancestor | **35 days** | `accepted`, `size:XS` | Cheap `git blame` guard; easy win unmerged |

**Maintainer attention needed**: The RFC backlog (#6996, #6909, #9487, #9488) blocks multiple `size:XL` PRs. The eval stack (#9244, #9245, #9248) is foundational for release confidence but stalled on author action. Config safety fixes (#10498, #10521) are trivial but unmerged.

---

## Health Indicators

| Metric | Signal |
|--------|--------|
| **PR merge rate (24h)** | 0/50 — **stalled** |
| **Issue closure rate (24h)** | 0/17 — **stalled** |
| **RFC-to-implementation ratio** | 8 RFCs : 50 PRs — **architecture-heavy** |
| **Critical bug fix latency** | #10495 → #10498 in <24h — **responsive** |
| **Maintainer review bandwidth** | Bottleneck — 15+ `needs-maintainer-review` items |
| **Contributor depth** | 5+ principal/distinguished contributors active — **healthy** |

**Bottom line**: ZeroClaw is **architecturally ambitious but delivery-constrained**. The next version

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*