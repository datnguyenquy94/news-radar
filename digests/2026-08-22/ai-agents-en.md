# OpenClaw Ecosystem Digest 2026-08-22

> Issues: 258 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-22 01:39 UTC

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

# OpenClaw Project Digest — 2026-08-22

## 1. Today's Overview

OpenClaw is in a **high-velocity stabilization phase** with zero new releases but intense remediation activity: 500 PRs and 258 issues updated in the last 24 hours. The project is grappling with multiple **P0/P1 production-critical defects** — a gateway memory leak (350 MB → 15.5 GB), event-loop blocking (~100 s every ~11 min), state DB pointer-map corruption, and OAuth refresh wedging — while simultaneously hardening the Codex integration (upgrade to 0.149), fixing message-tool attachment durability, and reducing health-snapshot overhead. The volume of `clawsweeper:needs-maintainer-review` and `clawsweeper:recovery-stuck` tags signals a backlog of deep, cross-cutting bugs that require architectural fixes rather than point patches. Community engagement is high (many 👍 on issues), but the ratio of open PRs (387) to merged (113) suggests review bandwidth is the primary bottleneck.

---

## 2. Releases

**No new releases today.** The latest published version remains `2026.8.1-beta.2`, which itself introduced regressions (event-loop blocking, DB corruption) documented in #124788 and #125744. A stable release is likely blocked until the P0 memory leak (#91588) and event-loop stall (#124788) are resolved.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | Security / UI | **feat(ui): review install policy warnings** — admins can acknowledge and proceed past `warn`-level install policy blocks in Control UI. | Unblocks plugin/skill installs that previously hard-failed on policy warnings. |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | Security / CLI | **feat(security): require acknowledgement for install policy warnings** — interactive CLI now prompts for exact target name before continuing a warned install. | Consistent policy enforcement across UI and CLI. |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | Auth / Models | **fix(models): keep Claude CLI OAuth available in Control UI** — fixes stale `provider: anthropic, mode: token` profile causing missing refresh ownership after restart. | Restores Claude CLI OAuth visibility in model picker. |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | Gateway / Delivery | **fix(gateway): keep conversation delivery within agent bindings** — prevents cross-agent message leakage in multi-agent setups. | Critical for multi-agent orchestration correctness. |
| [#127727](https://github.com/openclaw/openclaw/pull/127727) | Browser | **refactor(browser): remove test-only route bypass** — eliminates synthetic auth bypass in browser bridge tests. | Improves test fidelity; no user-facing change. |

**Net progress:** 5 PRs merged/closed today, all addressing security policy UX, auth visibility, message-delivery isolation, and test hygiene. No P0 bug fixes landed today — the critical fixes remain in open PRs awaiting review.

---

## 4. Community Hot Topics (Most Commented/Reacted)

| Issue/PR | Comments | 👍 | Core Need |
|----------|----------|----|-----------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) **Critical: Gateway Memory Leak** | 23 | 1 | **RSS grows 350 MB → 15.5 GB over days → OOM kills → launchd restart loops.** Affects all long-running deployments. |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) **Codex hook relay CPU spin** | 22 | 2 | `openclaw-hooks` processes consume 100%+ CPU, stalling gateway RPC. Blocks Codex integration usability. |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) **Configurable streaming watchdog timeout** | 16 | 8 | Reasoning models (kimi-k2.5, DeepSeek-R1) hit 30 s watchdog false-positives. Need tunable threshold. |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) **Hardcoded `/Users/wangtao` workspace path** | 13 | 0 | User workspace auto-created at a developer's personal path. Embarrassing shipped bug; still open. |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) **Subagent completion delivery loss** | 12 | 0 | Completions lost on timeout/drain/orphan — breaks `sessions_yield` orchestration. |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) **Codex OAuth refresh wedges agent for hours** | 11 | 1 | No alerting, no aggressive profile rotation on 401/invalidation. Silent degradation. |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) **Write/exec params silently dropped after long conversations** | 11 | 2 | Tool calls arrive with empty args after ~15 turns. Silent data loss. |
| [#124788](https://github.com/openclaw/openclaw/issues/124788) **Event loop blocks ~100 s every ~11 min (beta.2)** | 7 | 0 | Periodic anchored-timer stall kills WebSocket, HTTP `/ready`, cron. Regression in beta.2. |

**Pattern:** Users are hitting **fundamental reliability gaps** (memory, CPU, delivery, auth) in production, not edge cases. The high 👍 on #68596 shows broad pain from reasoning-model timeouts.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0** | [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway memory leak → OOM crash loop | Open | No PR linked |
| **P0** | [#124788](https://github.com/openclaw/openclaw/issues/124788) Event-loop 100 s block every ~11 min (beta.2) | Open | No PR linked |
| **P0** | [#125744](https://github.com/openclaw/openclaw/issues/125744) State DB ptrmap corruption recurs; in-place recovery never fires | Open | No PR linked |
| **P0** | [#125333](https://github.com/openclaw/openclaw/issues/125333) `totalTokens` inflation ratchet on memory-flush transcript path | Open | No PR linked |
| **P1** | [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex hook relay CPU spin stalls RPC | Open | No PR linked |
| **P1** | [#67777](https://github.com/openclaw/openclaw/issues/67777) Subagent completion delivery lost on timeout/drain | Open | No PR linked |
| **P1** | [#86215](https://github.com/openclaw/openclaw/issues/86215) Codex OAuth refresh wedges agent silently | Open | No PR linked |
| **P1** | [#83598](https://github.com/openclaw/openclaw/issues/83598) `anthropic:claude-cli` OAuth refresh dead-ends main lane | Open | No PR linked |
| **P1** | [#92776](https://github.com/openclaw/openclaw/issues/92776) Session model pinning persists indefinitely (origin-field pollution) | Open | No PR linked |
| **P1** | [#126707](https://github.com/openclaw/openclaw/issues/126707) Native Codex compaction repeats successful message send | Open | No PR linked |
| **P1** | [#124345](https://github.com/openclaw/openclaw/issues/124345) Setup inference probe 32-token cap starves reasoning models | Open | No PR linked |
| **P1** | [#124279](https://github.com/openclaw/openclaw/issues/124279) Proven-unsent message replayed after reconnect → duplicate | Open | No PR linked |
| **P2** | [#53408](https://github.com/openclaw/openclaw/issues/53408) Write/exec params silently dropped after long convos | Open | No PR linked |
| **P2** | [#77930](https://github.com/openclaw/openclaw/issues/77930) Discord channel not loaded (regression in 2026.5.4) | Open | [#127737](https://github.com/openclaw/openclaw/pull/127737) (attachments) |
| **P2** | [#72240](https://github.com/openclaw/openclaw/issues/72240) `exec` intermittently SIGKILL on macOS, no diagnostics | Open | No PR linked |
| **P2** | [#69242](https://github.com/openclaw/openclaw/issues/69242) `exec` SIGKILLs broad find/grep on Linux, no OOM | Open | No PR linked |

**Observation:** 16 P0/P1 bugs open with **zero linked fix PRs** — the maintainer review queue is the constraint. Two P2 regressions (#77930, #72240) have partial PRs but root causes unaddressed.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Signal | Likelihood for Next Release |
|-------|-------|--------|----------------------------|
| [#68596](https://github.com/openclaw/openclaw/issues/68596) Configurable streaming watchdog timeout | 8 👍 | **High** — reasoning models are mainstream; 30 s default is broken for them. | High — low-risk config toggle. |
| [#41135](https://github.com/openclaw/openclaw/issues/41135) Provider-profile routing policies (multi-account OAuth pools) | 2 👍 | **Strategic** — enterprises need key rotation, fallback, load-balancing across OAuth profiles. | Medium — architectural, needs design. |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) Multiple Azure/Teams bots per gateway | 1 👍 | **Multi-tenant** — single bot identity is a blocker for SaaS deployments. | Medium — schema change required. |
| [#71195](https://github.com/openclaw/openclaw/issues/71195) OpenAI Realtime (speech-to-speech) for Talk Mode on macOS | 1 👍 | **Parity** — voice-call plugin already has sub-second Realtime path. | High — partial impl exists in plugin. |
| [#50798](https://github.com/openclaw/openclaw/issues/50798) Visible agent-to-agent messaging for ACP threads | 0 👍 | **Orchestration** — coordinators need to speak in subagent threads without route pollution. | Low — niche, but architectural. |
| [#54128](https://github.com/openclaw/openclaw/issues/54128) `maxThreads` for local embedding (node-llama-cpp) | 1 👍 | **Perf** — 16-core systems only use 6 cores. Easy config addition. | High — trivial change. |

**Prediction:** Watchdog timeout config (#68596) and `maxThreads` for embeddings (#54128) are the most likely to land soon — both are low-risk, high-value config knobs. Multi-bot Teams (#71058) and provider-profile routing (#41135) are v2-scale work.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Theme | Representative Issues | User Sentiment |
|-------|----------------------|----------------|
| **Unreliable long-running stability** | #91588 (mem leak), #124788 (event-loop stall), #125744 (DB corruption) | 😡 **Frustrated** — "production deployment wedged for hours", "restart loop every 11 min" |
| **Silent data/message loss** | #67777 (subagent completion lost), #53408 (tool params dropped), #92116 (yield completion as passive context) | 😰 **Anxious** — "LLM can silently ignore it, breaking orchestration loops" |
| **OAuth/auth fragility** | #86215 (Codex refresh wedges), #83598 (Claude CLI dead-ends), #90074 (image gen uses wrong auth) | 😤 **Blocked** — "hours without clear alerting", "no aggressive profile rotation" |
| **Reasoning-model incompatibility** | #68596 (watchdog), #124345 (32-token probe), #108215 (context usage drops 57%→13%) | 😕 **Confused** — "no clear error message indicating context window exceeded" |
| **Shipped embarrassments** | #51429 (hardcoded `/Users/wangtao`), #91931 (preseeded BOOTSTRAP.md deleted) | 😳 **Incredulous** — "apparently some wangtao hardcode his working space path... and somebody merged" |
| **TUI/UX regressions** | #44130 (scroll-jump), #78017 (long messages vanish, clears scrollback) | 😞 **Disappointed** — "disruptive way instead of staying stable where I am reading" |

**Use cases emerging:** Multi-agent orchestration (`sessions_yield`), ACP/opencode integration, multi-tenant Teams/Slack gateways, local reasoning models (DeepSeek-R1, kimi), voice Realtime on macOS.

---

## 8. Backlog Watch (Stale but Critical)

| Item | Age | Why It Matters | Blocker |
|------|-----|----------------|---------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway memory leak | 74 days | **P0 — every production instance crashes** | No reproduction bisect; needs memory profiler ownership |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) Subagent completion delivery loss | 128 days | **Breaks `sessions_yield` orchestration** | Requires redesign of completion delivery priority/fallback |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) Hardcoded user path | 154 days | **Shipped bug; trivial fix but unreleased** | No PR; likely blocked by "needs-product-decision" on cleanup strategy |
| [#41135](https://github.com/openclaw/openclaw/issues/41135) Provider-profile routing policies | 166 days | **Enterprise multi-account OAuth requirement** | Architectural scope; no champion |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) Multiple Teams bots | 120 days | **Multi-tenant SaaS blocker** | Schema migration + config redesign |
| [#47606](https://github.com/openclaw/openclaw/issues/47606) Execution anti-drift guards | 160 days | **Agent reliability: status loops, delayed escalation, idle after green** | Design-phase; needs product spec |
| [#10142](https://github.com/openclaw/openclaw/issues/10142) `session:end` internal hook | 198 days | **Temporal/workflow integration** | Small scope; no maintainer bandwidth |
| [#60612](https://github.com/open

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-22)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape shows **bimodal maturity**: a cluster of 6 projects (OpenClaw, Hermes, IronClaw, NanoBot, NanoClaw, ZeroClaw) operating at **high velocity with production-grade ambition**, and a second tier (PicoClaw, Moltis, LobsterAI, CoPaw) in **active feature/UX polishing phases**. No project released a new version today, but 3 (Hermes, LobsterAI, CoPaw) have imminent release candidates. The dominant theme across leaders is **stabilization over innovation** — fixing P0 memory leaks, event-loop stalls, OAuth wedging, and channel reliability — while architectural RFCs (WASM plugins, unified attachments, pluggable memory) signal the next evolution. Community engagement is technical and operational (bug reports, repro logs) rather than feature-voting, indicating **production deployments are real and growing**.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release Status | Health Score |
|---------|--------------|-----------|---------------|----------------|--------------|
| **OpenClaw** | 258 | 500 | 5 | ❌ Blocked (P0 bugs) | 🟡 High velocity, review bottleneck |
| **NanoBot** | 5 | 38 | 24 | ❌ None | 🟢 Healthy — high merge throughput |
| **Hermes Agent** | 11 | 50 | 4 | ✅ v0.20.5 (Aug 19) | 🟡 Stable, review queue deep (46 open) |
| **PicoClaw** | 1 | 3 | 3 | ❌ None | 🟢 Stable incremental |
| **NanoClaw** | 1 | 24 | 11 | ❌ None | 🟢 High velocity feature sprint |
| **NullClaw** | 0 | 1 | 0 | ❌ None | ⚪ Low activity |
| **IronClaw** | 15 | 35 | 16 | ❌ None | 🟢 High velocity, CI hardening |
| **LobsterAI** | 2 closed | 13 | 13 | 🟡 Imminent (2026.8.21 branch) | 🟡 Good velocity, 1 open regression |
| **Moltis** | 2 | 8 | 1 | ❌ None | 🟡 Caution — 2 high-sev bugs unaddressed |
| **CoPaw** | 14 active | 59 | 13 | 🟡 v2.1.1b2 bump merged | 🟡 High velocity, critical beta regressions |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ None | ⚪ Inactive |
| **ZeroClaw** | 21 | 50 | 2 | 🟡 Pre-release gate | 🟡 Active, ZeroCode S1 cluster |

**Top 3 by raw activity**: OpenClaw (758), ZeroClaw (71), CoPaw (59)  
**Top 3 by merge throughput**: NanoBot (24), IronClaw (16), LobsterAI (13)

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Largest scale & community**: 500 PRs/258 issues in 24h dwarfs all others; 387 open PRs indicate massive contributor base
- **Multi-agent orchestration maturity**: `sessions_yield`, ACP/opencode integration, subagent completion delivery — features absent in most peers
- **Enterprise readiness signals**: Multi-tenant Teams/Slack gateway (#71058), provider-profile routing (#41135), OAuth pool management
- **Production battle-testing**: P0 bugs (memory leak, event-loop stall, DB corruption) are *production* failures, not test-lab issues

### Technical Approach Differences
| Dimension | OpenClaw | Peer Norm |
|-----------|----------|-----------|
| **Architecture** | Gateway-centric, multi-agent runtime, state DB with pointer-map | Single-agent CLI/TUI or simple bridge bots |
| **Model integration** | Codex CLI, Claude CLI, Anthropic, OpenAI, Bedrock, local (llama.cpp) — unified provider abstraction | Typically 1-2 provider paths |
| **Channel layer** | First-class: Discord, Slack, Teams, Telegram, Matrix, WhatsApp, custom adapters | Often 1-2 channels or web-only |
| **Extensibility** | Skills, plugins, hooks, ACP, MCP — multiple extension surfaces | Usually single plugin model |

### Community Size Comparison
- **OpenClaw**: 23 comments + 1 👍 on top P0 issue (#91588) — small but intense engagement
- **Hermes**: Max 11 comments, 1 👍 — similar intensity, smaller scale
- **NanoBot/IronClaw/NanoClaw**: Core-team driven, low public comment counts
- **CoPaw**: 14 active issues with 1-3 comments each — growing user base
- **Conclusion**: OpenClaw has the **largest contributor funnel** but **similar per-issue engagement depth** to Hermes. Its community is more contributor-heavy than user-heavy.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Long-running stability** | OpenClaw (#91588, #124788), Hermes (#91969), ZeroClaw (#10230), CoPaw (#6427, #6430) | Memory leak fixes, event-loop stall elimination, daemon/TUI crash recovery, WebView2 stability |
| **Streaming/timeout handling for reasoning models** | OpenClaw (#68596, #124345), Hermes (#91974), ZeroClaw (#10166, #10168) | Configurable watchdog timeouts, partial streaming defaults, stall watchdogs, context-window budget hints |
| **OAuth/auth reliability** | OpenClaw (#86215, #83598, #125471), Hermes (#47509), ZeroClaw (#10175), NanoBot (#5156) | Aggressive token refresh, profile rotation on 401, visible failure alerts, credential sensitivity marking |
| **Channel/message delivery guarantees** | OpenClaw (#67777, #126424), Hermes (#63277), NanoBot (#5156, #5457), ZeroClaw (#10237), Moltis (#1224) | Subagent completion delivery, cross-agent isolation, Telegram/Slack/WhatsApp history persistence, shared-channel tool execution |
| **Pluggable memory & context** | IronClaw (#7664), ZeroClaw (#10197), OpenClaw (#92776), Hermes (#89871) | MCP-based memory providers, interrupted-turn persistence, model pinning hygiene, importance decay |
| **Desktop/TUI reliability** | CoPaw (#6427, #6430), ZeroClaw (#10223, #10238), Hermes (#90473), IronClaw (#7813) | WebView2 crash fixes, startup hang elimination, paging UX at scale, heading crop regressions |
| **Security policy enforcement** | OpenClaw (#116489, #120900), ZeroClaw (#9839, #10164), NanoBot (#1149), IronClaw (#7797) | Install policy ack, destructive command blocking, prompt injection detection, agent-guidance audit |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Technical Architecture |
|---------|---------------|--------------|------------------------|
| **OpenClaw** | **Enterprise-grade multi-agent platform** | Teams, SaaS builders, power users | Gateway + agent runtime + state DB + channel adapters; Rust/TS |
| **Hermes Agent** | **Desktop-first personal agent with bridge ecosystem** | Developers, researchers, power users | Tauri desktop + WhatsApp/Telegram/Discord bridges; Rust/TS |
| **IronClaw** | **Developer productivity & CI/CD integration** | Engineering teams, NEAR ecosystem | Sandbox-mediated CLI, Wasm plugins, Reborn storage; Rust |
| **NanoBot** | **Multi-channel bot framework with memory** | Bot builders, community managers | Dream memory, cron, multi-channel (TG/Slack/DingTalk); Python |
| **NanoClaw** | **Template-driven agent creation & multi-instance channels** | Teams deploying reproducible agents | Registry-backed skills, Dial/Mattermost, driver contracts; TS |
| **ZeroClaw** | **Security-first, WASM-extensible agent runtime** | Security-conscious deployers, plugin authors | WASM Component Model, scoped tool registry, ZeroRelay; Rust |
| **CoPaw** | **Self-hosted multi-user Hub + desktop polish** | Teams, enterprises, Chinese-market users | Hub control plane, Tauri desktop, Qwen integration; TS/Rust |
| **LobsterAI** | **DSH (DeepSeek Harness) runtime + library UX** | Chinese devs, DeepSeek users, artifact-heavy workflows | Electron + DSH experimental runtime; TS |
| **Moltis** | **WhatsApp/Slack-centric automation with cron** | SMB automation, scheduled tasks | Browser automation, heartbeat scheduling; Python |
| **PicoClaw** | **Lightweight protocol-compatible agent core** | Embedders, proxy users | Anthropic Messages API, WebFetch tool; Go |
| **NullClaw** | **OpenAI-compatible gateway aggregation** | Multi-provider router users | Eden AI, NEAR AI, Atlas Cloud gateways; minimal |

**Key Architectural Fault Lines**:
- **Gateway vs. Embedded**: OpenClaw/ZeroClaw/IronClaw run gateways; Hermes/NanoBot/CoPaw run embedded
- **WASM vs. Native Plugins**: ZeroClaw/IronClaw bet on WASM; others use native dynamic loading
- **Memory Philosophy**: IronClaw (MCP pluggable), ZeroClaw (ACP persistence), OpenClaw (state DB), Hermes (LivingMemory decay)
- **Channel Strategy**: OpenClaw/NanoClaw (many, first-class); Hermes/Moltis (bridge-centric); PicoClaw/NullClaw (none)

---

## 6. Community Momentum & Maturity

### Tier 1: **Rapidly Iterating, Production-Hardening** (High velocity + P0 bug focus)
- **OpenClaw**: Highest raw velocity, but **review bottleneck** (387 open PRs) and **16 P0/P1 bugs with zero fix PRs** — scaling pains
- **ZeroClaw**: 71 updates, **3× S1 ZeroCode regressions**, architectural RFCs active — pre-release stabilization
- **CoPaw**: 59 updates, **critical beta regressions** (#7206, #7210), but massive test investment (~800 cases merged today)

### Tier 2: **Steady Feature Integration** (High merge throughput, low critical bugs)
- **NanoBot**: 24 merges, **all high-sev bugs fixed same-day**, desktop apps shipped, refactor stack ready
- **IronClaw**: 16 merges, **CI expedite tracks** (4 parallel), pluggable memory MCP near merge
- **NanoClaw**: 11 merges, **template-driven agents + multi-instance Telegram** flagship push
- **LobsterAI**: 13 merges (12 stale cleared), **imminent release**, one open regression (#1550)

### Tier 3: **Stable Incremental / Niche** (Moderate activity, focused scope)
- **Hermes**: Monthly patch cadence (v0.20.5 Aug 19), **deep review queue** (46 open), UX debt at scale
- **PicoClaw**: 3 merges, **protocol compatibility focus**, steering-mode RFC signals next UX leap
- **Moltis**: 1 merge (WhatsApp Markdown), **2 high-sev bugs unaddressed** — needs triage priority

### Tier 4: **Low/No Activity**
- **NullClaw**: 1 open PR (Eden AI gateway) — maintenance mode
- **ZeptoClaw**: Inactive

**Maturity Signal**: Projects with **release gates** (Hermes, ZeroClaw, LobsterAI, CoPaw) show more disciplined stabilization; projects without (OpenClaw, NanoBot, IronClaw) merge to main continuously but accumulate review debt.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Reasoning models break default timeouts** | OpenClaw (#68596: 8 👍), Hermes (#91974), ZeroClaw (#10166, #10168) | **Immediate**: Implement configurable streaming watchdogs, partial streaming defaults, context-window budget

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-22

## 1. Today's Overview
NanoBot shows **high maintenance velocity** with 38 PRs updated and 5 issues touched in the last 24 hours. The merge rate is strong (24 merged/closed PRs vs 14 open), indicating active triage and integration. No new release was cut today. Work clusters around provider/trajectory refactoring, Dream/cron reliability, channel resilience (Telegram, Slack, DingTalk), and WebUI/TUI polish. The project is in a **steady refactor-and-harden phase** rather than feature-launch mode.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (Selected High-Impact)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#5442](https://github.com/HKUDS/nanobot/pull/5442) | `fix(dream): advance cursor when tool errors were recovered` | Dream/memory | Fixes regression where recovered `edit_file` errors permanently stalled the memory cursor (#5441). |
| [#5407](https://github.com/HKUDS/nanobot/pull/5407) | `fix(cron): retire persisted heartbeat/dream system jobs when disabled` | Cron/gateway | Stops zombie cron jobs from firing after disable+restart, saving tokens. |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | `fix(telegram): recover from silently stalled polling` | Telegram channel | Adds watchdog to detect and restart stalled long-polling after network blips (#5171). |
| [#5457](https://github.com/HKUDS/nanobot/pull/5457) | `fix(channels): scope dispatcher exception boundary to message processing` | Channel core | Prevents a single outbound error from killing the entire dispatcher task. |
| [#5414](https://github.com/HKUDS/nanobot/pull/5414) | `fix(slack): validate file downloads across redirects` | Slack channel | Hardens private file download against open-redirect SSRF. |
| [#5476](https://github.com/HKUDS/nanobot/pull/5476) | `feat(tui): render LaTeX as Unicode` | TUI | Improves math rendering in terminal without external deps. |
| [#5477](https://github.com/HKUDS/nanobot/pull/5477) | `fix(webui): keep iOS PWA controls inside safe area` | WebUI | Restores `viewport-fit=auto` and syncs theme-color for installed PWAs. |
| [#1149](https://github.com/HKUDS/nanobot/pull/1149) | `feat(safety): Add PromptGuard for prompt injection detection` | Safety | New `nanobot.safety` module detecting system-prompt overrides, role confusion, tool-call injection. |
| [#1592](https://github.com/HKUDS/nanobot/pull/1592) | `feat: finalize Lumina Windows app + local stack installer flow` | Desktop | Completes Windows-native runtime, auto-detect Python, smoke tests, CMake prefix fixes. |
| [#2063](https://github.com/HKUDS/nanobot/pull/2063) | `feat: add Tauri desktop app with PyInstaller sidecar` | Desktop | Tauri v2 shell, sidecar gateway, onboarding wizard, GitHub Actions release pipeline. |
| [#1539](https://github.com/HKUDS/nanobot/pull/1539) | `Add CrowPay skill — payment service for AI agents` | Skills | Autonomous API payments with spending rules, human-in-loop approval. |

**Refactor stack in progress** (sequential, not yet merged):  
[#5478](https://github.com/HKUDS/nanobot/pull/5478) → [#5480](https://github.com/HKUDS/nanobot/pull/5480) → [#5479](https://github.com/HKUDS/nanobot/pull/5479) → [#5481](https://github.com/HKUDS/nanobot/pull/5481) — typed `LLMUsage` contract, normalized token/cache semantics across OpenAI/Anthropic/Bedrock, and unified provider-usage trajectory backend.

## 4. Community Hot Topics

| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Issue (closed) | 4 comments | **Model switching UX** — users expect to change active model mid-session via UI blip or `/model` without full reconfig; current behavior locks to primary model with fallbacks only. |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | PR (open) | — | **Meta-search provider (mst-python)** — aggregates DuckDuckGo/Google/Brave/Bing via RRF for richer coverage; high-priority (p1) feature request. |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) | PR (open, conflict) | — | **Turn observability & safe recovery** — projects each user turn into a single answer surface with ordered reasoning/tool activity, usage accumulation, and interrupted-work display. |
| [#1168](https://github.com/HKUDS/nanobot/issues/1168) | Issue (closed) | 2 comments | **Notion MCP connection failure** — user cannot connect despite valid API; works in Claude. Suggests MCP transport/auth edge case. |

**Underlying theme**: Users want **more transparent, controllable model selection** and **richer search/observability** without losing session context.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) Model switch impossible mid-session | Closed (no fix PR linked) | — |
| **High** | [#5441](https://github.com/HKUDS/nanobot/issues/5441) Dream cursor blocked by recovered tool error | Closed | [#5442](https://github.com/HKUDS/nanobot/pull/5442) ✅ merged |
| **High** | [#5454](https://github.com/HKUDS/nanobot/issues/5454) Streaming retry skipped after first delta on `server_error` | Closed (no fix PR linked) | — |
| **Medium** | [#5463](https://github.com/HKUDS/nanobot/issues/5463) DingTalk inbound tasks not observed/drained | **Open** | — |
| **Medium** | Telegram silent polling stall | Fixed | [#5156](https://github.com/HKUDS/nanobot/pull/5156) ✅ merged |
| **Medium** | Cron zombie jobs after disable | Fixed | [#5407](https://github.com/HKUDS/nanobot/pull/5407) ✅ merged |
| **Medium** | Channel dispatcher dies on single outbound error | Fixed | [#5457](https://github.com/HKUDS/nanobot/pull/5457) ✅ merged |
| **Low** | Slack file download redirect validation | Fixed | [#5414](https://github.com/HKUDS/nanobot/pull/5414) ✅ merged |
| **Low** | iOS PWA safe-area clipping | Fixed | [#5477](https://github.com/HKUDS/nanobot/pull/5477) ✅ merged |

**Watch**: #5463 (DingTalk task leak) is the only **open, unaddressed regression** among today’s bugs.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Meta-search provider (mst-python)** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) (p1, test, webui) | **High** — labeled priority p1, includes tests, reviewer assigned. |
| **Typed LLMUsage contract + trajectory backend** | [#5478](https://github.com/HKUDS/nanobot/pull/5478) → [#5481](https://github.com/HKUDS/nanobot/pull/5481) (p2, refactor, test) | **High** — stacked 4-PR refactor already authored; merges will land together. |
| **Turn observability & safe recovery** | [#5420](https://github.com/HKUDS/nanobot/pull/5420) (conflict, feature, test) | **Medium** — marked conflict, needs rebase; UX value high. |
| **Manual-only skill invocation** | [#5405](https://github.com/HKUDS/nanobot/pull/5405) (p2, doc, test) | **Medium** — clear use-case (deployment/publish skills), tests included. |
| **PromptGuard safety module** | [#1149](https://github.com/HKUDS/nanobot/pull/1149) (merged today) | **Done** — landed; expect docs/examples follow-up. |
| **Desktop apps (Lumina + Tauri)** | [#1592](https://github.com/HKUDS/nanobot/pull/1592), [#2063](https://github.com/HKUDS/nanobot/pull/2063) (both merged) | **Done** — installers, sidecars, CI/CD wired. |

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Model lock-in per session** | #5198: “Clicking model blip allows no change… `/model` command seemingly does nothing” | 😞 Frustrated — expects SaaS-parity UX |
| **MCP integration fragility** | #1168: Notion MCP fails despite valid API; works in Claude | 😕 Confused — protocol/interop gap |
| **Dream memory stalls** | #5441: “valid edits rejected… cursor unchanged… duplicates on every run” | 😟 Annoyed — silent data corruption risk |
| **Silent channel failures** | #5171 (via #5156): Telegram stops receiving messages, logs stay silent | 😠 Critical — production reliability |
| **iOS PWA usability** | #5477: Controls clipped by safe area | 😐 Minor — but affects daily mobile users |

**Positive signals**: Desktop apps (Lumina/Tauri) and CrowPay skill merged — users gain native installers and autonomous payment capability.

## 8. Backlog Watch — Stale/Needs Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5463](https://github.com/HKUDS/nanobot/issues/5463) DingTalk background task leak | 1 day (open) | Only open regression today; can accumulate tasks → OOM or missed messages. |
| [#5420](https://github.com/HKUDS/nanobot/pull/5420) Turn observability (conflict) | 4 days | High-value UX feature; conflict blocks merge — needs maintainer rebase/guidance. |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) Memory: preserve full consolidation input | 9 days | Core memory pipeline; safety cap logic subtle — needs review. |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) Skills: manual-only invocation | 6 days | Security/ops boundary for side-effect skills; tests ready. |
| [#5457](https://github.com/HKUDS/nanobot/pull/5457) Channel dispatcher boundary | 2 days | Merged today — verify no follow-up regressions in multi-channel deployments. |

---

**Health Score**: 🟢 **Healthy** — high merge throughput, active refactor stack, critical bugs fixed same-day.  
**Risk**: DingTalk leak (#5463) and model-switch UX (#5198) are the top user-visible gaps.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-22

---

## 1. Today's Overview

Hermes Agent remains in **high-velocity maintenance mode** with 50 PRs and 11 issues updated in the last 24 hours. The project just shipped **v0.20.5 (v2026.8.19)** on August 19, a patch release rolling up ~323 PRs since v0.20.4. Current activity is heavily weighted toward **bug fixes, protocol conformance, and platform stability** — particularly around WhatsApp/Telegram bridges, MCP tooling, desktop UX, and A2A v1.0 compliance. No major feature launches are evident today; the signal is "hardening the 0.20.x line."

---

## 2. Releases

### v0.20.5 (v2026.8.19) — August 19, 2026
- **Type**: Patch / stabilization release
- **Scope**: Rolls up **~323 merged PRs** since v0.20.4 into a tagged release for Docker images, hosted deployments, and fresh installs.
- **Breaking changes**: None documented in the release notes (patch semantic versioning).
- **Migration notes**: Standard `hermes update` path; downstream consumers (Docker, hosted) should re-pull images.
- **Link**: [Release v2026.8.19](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.19)

---

## 3. Project Progress (Merged/Closed Today)

| PR / Issue | Type | Summary | Link |
|------------|------|---------|------|
| #91979 | Bug (closed, duplicate) | Configured MCP silently disabled when gateway SDK missing — duplicate of #47509 | [#91979](https://github.com/NousResearch/hermes-agent/issues/91979) |
| *4 merged/closed PRs* (not individually listed in data) | — | Included in the v0.20.5 rollup; exact identities not surfaced in today’s feed | — |

**Observation**: Today’s closed count is low (4 PRs, 1 issue) — most energy is in **open PRs under review** (46) and **active issue triage**. The v0.20.5 tag suggests a batch-merge cadence rather than daily trickle.

---

## 4. Community Hot Topics (Most Active Items)

| Item | Type | Comments | 👍 | Core Pain Point | Link |
|------|------|----------|----|-----------------|------|
| **#90473** | Bug/UX | 11 | 0 | **"Show earlier messages" paging is unusable on long sessions (~900 msgs)** — user calls the design "stupid"; Windows 11, Desktop app | [#90473](https://github.com/NousResearch/hermes-agent/issues/90473) |
| **#68592** | Bug | 10 | 0 | Cron agents **forced into Kanban protocol** without `HERMES_KANBAN_TASK` set; `kanban_show()` fails with "task_id required" | [#68592](https://github.com/NousResearch/hermes-agent/issues/68592) |
| **#47509** | Bug | 4 | 0 | MCP discovery failures logged at `DEBUG` — **invisible at default INFO level**; silent breakage when SDK missing | [#47509](https://github.com/NousResearch/hermes-agent/issues/47509) |
| **#63277** | Bug | 4 | 0 | WhatsApp bridge `/health` reports `connected` during **Baileys WebSocket flapping (428/503 loop)** → silent message loss | [#63277](https://github.com/NousResearch/hermes-agent/issues/63277) |
| **#50871** | Bug | 3 | 1 | Desktop Markdown renders lone `~` as strikethrough — **breaks ranges like `1~10,11~20`** | [#50871](https://github.com/NousResearch/hermes-agent/issues/50871) |

**Underlying needs**:  
- **Session UX at scale** — long-context paging is a real-user blocker.  
- **Protocol hygiene** — Kanban, MCP, A2A, and bridge health checks must not lie or crash silently.  
- **Observability** — critical failures (MCP, WhatsApp) hidden behind wrong log levels.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1** | [#91969](https://github.com/NousResearch/hermes-agent/issues/91969) | **Unbounded Telegram flood-control sleep (97 min) freezes ALL platform inbound on boot path** — no upper bound, runs before gateway ready | ❌ |
| **P2** | [#90473](https://github.com/NousResearch/hermes-agent/issues/90473) | "Show earlier messages" paging broken UX on long sessions (Desktop, compression) | ❌ |
| **P2** | [#47509](https://github.com/NousResearch/hermes-agent/issues/47509) | MCP discovery failures at DEBUG only — silent when SDK missing | ❌ (duplicate #91979 closed) |
| **P2** | [#63277](https://github.com/NousResearch/hermes-agent/issues/63277) | WhatsApp `/health` lies during WebSocket flap → silent message loss | ❌ |
| **P2** | [#91980](https://github.com/NousResearch/hermes-agent/issues/91980) | Approval prompts sent on dead socket **time out silently** — no birth log, retry, or fallback | ❌ |
| **P3** | [#68592](https://github.com/NousResearch/hermes-agent/issues/68592) | Cron agents forced into Kanban protocol without task env var | ❌ |
| **P3** | [#50871](https://github.com/NousResearch/hermes-agent/issues/50871) | Lone `~` rendered as strikethrough in Markdown (Desktop) | ❌ |
| **P3** | [#91976](https://github.com/NousResearch/hermes-agent/issues/91976) | A2A v1.0 conformance gaps: outbound results lack data Parts, `protocolBinding` bare string, skills missing I/O modes | ❌ |
| **P3** | [#91967](https://github.com/NousResearch/hermes-agent/issues/91967) | PowerPoint skill: dense text overflows body placeholder (~6 lines max) | ❌ |
| **P3** | [#91115](https://github.com/NousResearch/hermes-agent/issues/91115) | macOS keychain prompt after every update — ad-hoc re-sign breaks Safe Storage ACL | ❌ |

**Note**: Several P2/P3 bugs have **duplicate fix PRs opened today** (e.g., #91973, #91977, #91978) but the primary issues remain open.

---

## 6. Feature Requests & Roadmap Signals

| PR / Issue | Signal | Likelihood for Next Minor (0.21.x) |
|------------|--------|-----------------------------------|
| [#89871](https://github.com/NousResearch/hermes-agent/pull/89871) | **Optional Hindsight importance decay** (LivingMemory-style soft decay for recall) — profile-scoped, non-destructive | 🟢 High — memory UX is active investment area |
| [#91984](https://github.com/NousResearch/hermes-agent/pull/91984) | **Kanban operator attribution** on assign/complete + dashboard assign dry-run (audit trail) | 🟢 High — part of #82689, incremental |
| [#91983](https://github.com/NousResearch/hermes-agent/pull/91983) | **User-chosen default profile** for rail home pill (persisted setting) | 🟢 High — UX polish, low risk |
| [#91974](https://github.com/NousResearch/hermes-agent/pull/91974) | **Context-window budget hint injection** (adapted from OpenAI Codex) — advisory line when request nears limit | 🟡 Medium — needs-decision, compression-related |
| [#91963](https://github.com/NousResearch/hermes-agent/pull/91963) | **Durable child attribution IDs** in delegation results (`delegation_id`, `subagent_id`, `child_session_id`) | 🟡 Medium — observability/audit, needs-decision |
| [#89410](https://github.com/NousResearch/hermes-agent/pull/89410) | **Preserve signed thinking blocks** for Copilot (non-Anthropic host) | 🟡 Medium — provider compatibility, P2 |
| [#91895](https://github.com/NousResearch/hermes-agent/pull/91895) | **Generation-fenced deployment transaction authority** for `hermes update` (proof-carrying) | 🔴 Low — architectural, needs-decision, risk-compatibility |
| [#91917](https://github.com/NousResearch/hermes-agent/pull/91917) | **Bot Mode shadow control-plane contracts** (Phase 1) | 🔴 Low — early refactor, needs-decision |

**Prediction**: Next minor will likely ship **memory decay, Kanban audit, profile default UX, and context-window hints** — all low-risk, high-user-value. Bot Mode and deployment authority are deeper architectural work.

---

## 7. User Feedback Summary

| Source | Sentiment | Key Quotes / Patterns |
|--------|-----------|------------------------|
| **#90473** (Windows 11, ~900 msg session) | 😡 **High frustration** | > "显示更多消息是哪个傻逼的设计？" ("Who the hell designed this 'show more messages' thing?") — paging UX is actively hostile at scale |
| **#63277** (WhatsApp bridge) | 😟 **Silent data loss** | Health endpoint lies during flapping; messages lost without alert — trust erosion for production bridges |
| **#47509** / **#91979** (MCP) | 😟 **Silent misconfiguration** | "Configured MCP is silently disabled when gateway SDK is missing" — no startup warning, discovered only via incident |
| **#50871** (Markdown) | 😐 **Annoyance** | Lone `~` in ranges (`1~10`) rendered as strikethrough — breaks technical content |
| **#91115** (macOS) | 😐 **Recurring friction** | Keychain prompt after *every* update due to ad-hoc re-sign — "Python updater cannot fix this" |
| **#68592** (Cron + Kanban) | 😕 **Protocol leakage** | Non-Kanban cron jobs forced into Kanban flow — "needs-decision" for 30+ days |

**Overall**: Users hit **sharp edges at scale** (long sessions, bridge flapping, silent config failures). Desktop UX and bridge reliability are the loudest pain points.

---

## 8. Backlog Watch (Stale but Important)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#68592](https://github.com/NousResearch/hermes-agent/issues/68592) | **32 days** (created 2026-07-21) | Cron agents broken for non-Kanban workloads; `needs-decision` label but no movement | Open, 10 comments |
| [#47509](https://github.com/NousResearch/hermes-agent/issues/47509) | **66 days** (created 2026-06-17) | MCP failures invisible at default log level — **production blind spot**; duplicate #91979 filed today shows it bit someone again | Open, 4 comments |
| [#63277](https://github.com/NousResearch/hermes-agent/issues/63277) | **41 days** (created 2026-07-12) | WhatsApp health endpoint lies during flap → silent message loss; `needs-repro`, `sweeper:risk-message-delivery` | Open, 4 comments |
| [#50871](https://github.com/NousResearch/hermes-agent/issues/50871) | **61 days** (created 2026-06-22) | Markdown strikethrough bug on lone `~` — simple fix, high visibility for devs writing ranges | Open, 3 comments, 1 👍 |
| [#91976](https://github.com/NousResearch/hermes-agent/issues/91976) | **0 days** (created today) | **A2A v1.0 conformance report** — canonical location for protocol gaps; blocks interop | Open, 0 comments |

**Maintainer attention needed**: #68592 and #47509 are **month-old P2/P3 bugs with real user impact** and clear fix paths (log level bump, protocol guard). #63277 needs a repro but is a **message-loss risk**. #91976 is a **new canonical conformance tracker** — should be triaged to a milestone.

---

## Health Indicators

| Metric | Signal |
|--------|--------|
| **Release cadence** | ~Monthly patch tags (v0.20.4 → v0.20.5 ~30 days) — healthy |
| **PR throughput** | 50 PRs updated / 4 merged today — **review bottleneck** (46 open) |
| **Issue hygiene** | 11 updated / 1 closed — **triage active but backlog growing** |
| **Critical bugs** | 1 P1, 4 P2 open today — **elevated** but mostly platform/bridge layer |
| **Community engagement** | Low 👍 counts (max 1) — issues are **technical/operational**, not feature votes |
| **Architectural debt** | Multiple `needs-decision` PRs open >30 days — **decision latency** |

**Verdict**: **Stable but hardening**. The project is shipping patches reliably, but the review queue is deep and several high-impact bugs have lingered >30 days. Next 2 weeks should focus on **clearing P1/P2 bugs** and **landing the queued UX/memory features** before cutting 0.21.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-22

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with three pull requests merged/closed in the last 24 hours and one new feature request opened. The project is actively refining its tooling (WebFetchTool), documentation (AGENTS.md), and protocol support (Anthropic Messages API). No new releases were published. The single new issue proposes a significant architectural change to message steering behavior, indicating community interest in more sophisticated concurrency handling. Overall project health appears stable with consistent incremental improvements.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
| PR | Type | Summary | Status |
|----|------|---------|--------|
| [#647](https://github.com/sipeed/picoclaw/pull/647) | Enhancement (tool) | Improved `WebFetchTool` text extraction: added HTML entity decoding (`&amp;`, `&lt;`, etc.), preserved block-level structure with newlines, enhanced readability of fetched content. | **Closed/Merged** 2026-08-21 |
| [#1182](https://github.com/sipeed/picoclaw/pull/1182) | Documentation | Refined `AGENTS.md` to be principle-first and lightweight; clarified Go version sourcing from `go.md`; updated contribution guidance for AI agents and humans. | **Closed/Merged** 2026-08-21 |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | Feature (protocol) | Added `anthropic-messages` protocol prefix for native Anthropic Messages API (`/v1/messages`) support. Fixes [#269](https://github.com/sipeed/picoclaw/issues/269) — enables use of Anthropic-compatible proxy services that only implement the native format. | **Closed/Merged** 2026-08-21 |

**Net impact**: Tooling robustness ↑, onboarding clarity ↑, LLM provider compatibility ↑.

## 4. Community Hot Topics
| Item | Type | Activity | Signal |
|------|------|----------|--------|
| [#3342](https://github.com/sipeed/picoclaw/issues/3342) | Feature Request | 0 comments, 0 👍 (new) | **High architectural interest** — user wants opt-in "after-turn" steering: queue incoming messages during active turn instead of interrupting and skipping remaining tool calls. Addresses real-world multi-message concurrency pain point. |

*Only one active issue today; no high-comment/reaction threads. The new steering proposal is the clearest signal of unmet need.*

## 5. Bugs & Stability
**No bug reports, crashes, or regressions** filed or updated in the last 24 hours. The three closed PRs were enhancements/documentation, not bug fixes.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Opt-in "after-turn" steering mode** — queue busy-session messages instead of interrupting | [#3342](https://github.com/sipeed/picoclaw/issues/3342) | **Medium** — architectural change; requires design review, but solves a concrete UX gap for interactive use. |
| *(Already delivered)* Anthropic native Messages API support | [#1158](https://github.com/sipeed/picoclaw/pull/1158) | ✅ **Shipped** — merged today. |
| *(Already delivered)* Improved WebFetchTool extraction | [#647](https://github.com/sipeed/picoclaw/pull/647) | ✅ **Shipped** — merged today. |

**Prediction**: The steering-mode request (#3342) is the strongest candidate for near-term roadmap inclusion given its user-facing impact.

## 7. User Feedback Summary
- **Pain point**: Current steering interrupts running turns on new user message, skipping pending tool calls — disruptive for multi-step tasks.  
- **Use case**: Users sending follow-up messages while agent is still working (common in chat UIs).  
- **Satisfaction signals**: Silent on recent merges (no comments/reactions), but quick closure of long-open PRs (#647 open since Feb, #1158/#1182 since Mar) suggests maintainer responsiveness.  
- **Unmet need**: Explicit concurrency control for message handling — #3342 is the first formal ask.

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3342](https://github.com/sipeed/picoclaw/issues/3342) | 1 day | Open, 0 comments | **New but strategic** — defines future steering architecture. Needs maintainer triage/design input. |
| [#269](https://github.com/sipeed/picoclaw/issues/269) | ~5 months | **Closed by #1158** | Was blocking Anthropic-compatible proxies; now resolved. |
| *No other stale high-priority items surfaced in today’s data.* |

---

**Links**:  
- Issue tracker: https://github.com/sipeed/picoclaw/issues  
- Pull requests: https://github.com/sipeed/picoclaw/pulls  
- Releases: https://github.com/sipeed/picoclaw/releases

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-22

---

## 1. Today's Overview

NanoClaw shows **high velocity** with 24 pull requests updated in the last 24 hours (11 merged/closed, 13 open) and only 1 new issue. The project is in a **feature integration sprint**—core team members are landing template-based agent creation, multi-instance Telegram support, setup-wizard improvements, and CI stabilization in parallel. No new releases were cut, indicating changes are still accumulating on `main`. The single open issue (#3426) reveals a **platform-level regression** where `send_card` button callbacks are silently dropped, causing agent confusion.

---

## 2. Releases

**No new releases published today.** The latest version remains whatever was last tagged (not provided in today's data). Expect a release once the current wave of template/Telegram/Dial work stabilizes.

---

## 3. Project Progress — Merged / Closed PRs (11)

| PR | Area | Summary |
|----|------|---------|
| [#3433](https://github.com/nanocoai/nanoclaw/pull/3433) | Dial / Skills | Convert `/add-dial-number` to use `nc` directives; fixes registry discovery. |
| [#3439](https://github.com/nanocoai/nanoclaw/pull/3439) | Container / Deps | Bump Claude Code CLI to **2.1.238** and `@anthropic-ai/claude-agent-sdk` to **0.3.238**. |
| [#3424](https://github.com/nanocoai/nanoclaw/pull/3424) | CI / Skills | Add CI job to test **registry-backed skills** (discover, apply, build, test each `add-*` skill against a pinned registry snapshot). |
| [#3403](https://github.com/nanocoai/nanoclaw/pull/3403) | Matrix Channel | Apply a **refresh-safe ESM patch** for Matrix adapter (Node 22 compat). |
| [#3402](https://github.com/nanocoai/nanoclaw/pull/3402) | Providers | Accept **file events** from branch-backed providers (no runtime changes). |
| [#3401](https://github.com/nanocoai/nanoclaw/pull/3401) | WhatsApp Cloud | Keep skill payload compatible with `main` (export/register helper in adapter). |
| [#3430](https://github.com/nanocoai/nanoclaw/pull/3430) | CI | Restore stable **required `ci` check** (matrix was reporting `ci (22)`/`ci (24)`). |
| [#3429](https://github.com/nanocoai/nanoclaw/pull/3429) | Drivers / Core | Ratify **driver attach surface**: `SessionExecSpec { bin, argsTty, argsPlain }` — descriptive contract for terminal attachment. |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | Setup / Dial | Add **Dial to channel picker & wizard** (runChannelSkill model). |
| [#3202](https://github.com/nanocoai/nanoclaw/pull/3202) | Mattermost | New **Mattermost channel integration** (wraps `chat-adapter-mattermost`). |
| [#3287](https://github.com/nanocoai/nanoclaw/pull/3287) | Agent Runner | Fix inbound **message ID stripping** (removes agent-group suffix) — closes #3153. |

**Themes:** CI hardening, driver contract formalization, Dial/Mattermost channel maturity, container dependency hygiene.

---

## 4. Community Hot Topics — Active PRs (13 open)

| PR | Author | Comments | Focus |
|----|--------|----------|-------|
| [#3396](https://github.com/nanocoai/nanoclaw/pull/3396) | amit-shafnir | — | **Create agents from templates in chat** — `create_agent` tool gains `template` ref; `ncl templates list` verb (local + registry). |
| [#3428](https://github.com/nanocoai/nanoclaw/pull/3428) | amit-shafnir | — | Slack agent creation **carries template ref end-to-end** (re-port of reverted #3397). |
| [#3436](https://github.com/nanocoai/nanoclaw/pull/3436) | amit-shafnir | — | **Named Telegram bot instances** via `TELEGRAM_INSTANCES` + instance-bound pairing. |
| [#3438](https://github.com/nanocoai/nanoclaw/pull/3438) | amit-shafnir | — | Setup wizard: **"Add another Telegram bot"** when one already configured. |
| [#3437](https://github.com/nanocoai/nanoclaw/pull/3437) | amit-shafnir | — | Docs for **add-telegram**: add-another-bot path, instance-aware pairing. |
| [#3435](https://github.com/nanocoai/nanoclaw/pull/3435) | amit-shafnir | — | Setup: **carry adapter instance** through pairing, init-first-agent, CLI welcome. |
| [#3431](https://github.com/nanocoai/nanoclaw/pull/3431) | amit-shafnir | — | Fix: Telegram pairing card **says 6 digits** (was wrong). |
| [#3434](https://github.com/nanocoai/nanoclaw/pull/3434) | amit-shafnir | — | Fix: **Polling adapters don't open webhook server** (chat-sdk). |
| [#3432](https://github.com/nanocoai/nanoclaw/pull/3432) | glifocat | — | Dial post-merge follow-ups: credential re-run, step captions, registry CI. |
| [#3426](https://github.com/nanocoai/nanoclaw/issues/3426) | glifocat | 0 | **Bug**: `send_card` docs promise callback buttons; bridge drops actions without `url`. |

**Underlying needs:**
- **Template-driven agent creation** is the flagship UX push — making agents reproducible and shareable via registry.
- **Multi-instance Telegram** support signals real-world demand for running multiple bots per deployment.
- **Setup wizard maturity** (instance-aware flows, pairing fixes) targets onboarding friction.
- The `send_card` regression (#3426) blocks interactive card workflows — agents falsely tell users "platform can't render buttons."

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | `send_card` drops callback buttons (actions without `url`) — agents misreport platform capability | [Open #3426](https://github.com/nanocoai/nanoclaw/issues/3426) | None yet |
| **Medium** | Telegram pairing card shows wrong digit count (6 vs actual) | [Open #3431](https://github.com/nanocoai/nanoclaw/pull/3431) | PR #3431 |
| **Medium** | Polling adapters fail to open webhook server | [Open #3434](https://github.com/nanocoai/nanoclaw/pull/3434) | PR #3434 |
| **Low** | Dial skill used prose shell blocks (registry discovery broken) | **Fixed** | [#3433](https://github.com/nanocoai/nanoclaw/pull/3433) ✅ |
| **Low** | Matrix adapter ESM imports break on Node 22 | **Fixed** | [#3403](https://github.com/nanocoai/nanoclaw/pull/3403) ✅ |
| **Low** | CI required check `ci` missing due to matrix naming | **Fixed** | [#3430](https://github.com/nanocoai/nanoclaw/pull/3430) ✅ |
| **Low** | Inbound message IDs retained agent-group suffix | **Fixed** | [#3287](https://github.com/nanocoai/nanoclaw/pull/3287) ✅ |

**Stability signal:** Most bugs are **already fixed and merged** today. The only **unresolved high-severity** item is #3426 (card button regression) — no fix PR visible yet.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Version |
|--------|----------|-----------------------------|
| **Template-based agent creation** | #3396, #3428 (Slack), #3436 (Telegram instances) | **Very High** — multiple PRs, core-team authored |
| **Multi-instance channel support** | #3436 (Telegram), #3438 (wizard), #3435 (instance wiring) | **High** — Telegram first, pattern reusable |
| **Setup wizard UX polish** | #3431, #3435, #3437, #3438 | **High** — 4 PRs in one day |
| **Driver attach contract** | #3429 (ratified `SessionExecSpec`) | **High** — foundational for tooling |
| **Registry-backed skill CI** | #3424 (new CI job) | **Medium** — infra, not user-facing |
| **Mattermost channel** | #3202 (merged) | **Done** — shipped today |
| **WhatsApp Cloud skill compat** | #3401 (fixed) | **Done** |

**Prediction:** Next release will center on **templates + multi-instance Telegram + wizard polish**, with the `send_card` fix as a prerequisite.

---

## 7. User Feedback Summary

| Pain Point | Source | Impact |
|------------|--------|--------|
| **Buttons disappear from cards** — agents blame platform | [#3426](https://github.com/nanocoai/nanoclaw/issues/3426) | High — breaks interactive flows, misleads users |
| **Telegram pairing shows wrong code length** | [#3431](https://github.com/nanoclaw/pull/3431) | Medium — onboarding confusion |
| **Cannot run multiple Telegram bots** | [#3436](https://github.com/nanoclaw/pull/3436) | Medium — real deployment need |
| **Wizard doesn't offer "add another bot"** | [#3438](https://github.com/nanoclaw/pull/3438) | Low-Medium — UX gap |
| **Polling adapters don't start webhook** | [#3434](https://github.com/nanoclaw/pull/3434) | Medium — breaks hybrid deployments |

**Satisfaction signal:** Users (and core team) are hitting **onboarding & multi-tenancy** walls. The rapid PR response suggests maintainers are listening.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3426](https://github.com/nanocoai/nanoclaw/issues/3426) `send_card` button regression | 1 day (new) | **Highest priority** — silent data loss, agent hallucination, no fix PR yet |
| [#3396](https://github.com/nanocoai/nanoclaw/pull/3396) Template agent creation | 2 days | Flagship feature; blocks #3428 (Slack) — needs review/merge |
| [#3436](https://github.com/nanocoai/nanoclaw/pull/3436) Named Telegram instances | 1 day | Multi-bot support; touches config, pairing, registry — needs design review |
| [#3432](https://github.com/nanocoai/nanoclaw/pull/3432) Dial post-merge follow-ups | 1 day | Credential re-run, step captions, registry CI — cleanup after big merge |
| [#3434](https://github.com/nanocoai/nanoclaw/pull/3434) Polling adapter webhook fix | 1 day | Affects all polling-based channels — verify no regression |

---

**Bottom line:** NanoClaw is **shipping fast** on template-driven agents, multi-instance channels, and onboarding polish. The only **open critical bug** is the `send_card` button regression (#3426) — expect a fix PR within 24–48h given today's velocity.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-22

## 1. Today's Overview
NullClaw shows minimal activity in the past 24 hours with **zero issue updates** and only **one open pull request** (#990). No releases were published. The sole PR adds Eden AI as an OpenAI-compatible gateway provider, indicating continued expansion of the provider ecosystem. Overall project velocity appears low today—no bug fixes, feature merges, or community discussions were recorded.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
**No PRs were merged or closed today.** The only movement is PR #990, which remains open and awaits review.

| PR | Title | Status | Author | Notes |
|----|-------|--------|--------|-------|
| [#990](https://github.com/nullclaw/nullclaw/pull/990) | feat(providers): add Eden AI as an OpenAI-compatible gateway | **OPEN** | MVS-source | Adds Eden AI (EU-based, multi-vendor routing) via existing `OpenAiCompatibleProvider`; follows pattern of #922. No new provider implementation required. |

## 4. Community Hot Topics
Only one PR exists in the window; it has **0 comments and 0 reactions** as of the snapshot. No issues were updated. There is insufficient engagement data to identify a “hot topic.”

## 5. Bugs & Stability
No bug reports, crash logs, or regression issues were filed or updated in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
The sole feature signal is PR #990—**adding Eden AI as a gateway provider**. This continues the roadmap of expanding OpenAI-compatible gateway integrations (preceded by NEAR AI Cloud and Atlas Cloud in #922). Given the pattern, future gateway additions (e.g., other EU-based or multi-vendor routers) are likely candidates for upcoming versions.

## 7. User Feedback Summary
No user-facing issues, discussions, or feedback entries were recorded today. No pain points, use cases, or satisfaction signals can be extracted from the current data.

## 8. Backlog Watch
With zero issues updated and only one fresh PR, there are no stale or long-unanswered items surfacing in this 24-hour window. Maintainers should prioritize reviewing **PR #990** to unblock the Eden AI integration, but no existing backlog items require urgent attention based on today’s data.

---

*Data sourced from GitHub API for nullclaw/nullclaw; covers 2026-08-21 00:00 UTC → 2026-08-22 00:00 UTC.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-22

## 1. Today's Overview
IronClaw saw **high velocity** in the last 24 hours: 15 issues updated (11 open, 4 closed) and 35 PRs updated (19 open, 16 merged/closed). No new releases were cut. The dominant theme is **CI/CD hardening and developer-experience polish** — four coordinated “CI expedite” tracks (T1–T4) aim to consolidate toolchain setup, switch to `cargo-nextest`, converge PR/queue gates, and establish a canonical preflight script. Parallel work streams are advancing **pluggable memory via MCP** (with Mnesis Core as first consumer), **WebUI notification inbox generalization**, **sandbox-mediated GitHub CLI credentials**, and a **Storybook/design-system foundation**. Bug fixes landed for LLM timeout policy, Telegram consent flow, and Clippy 1.98 regressions.

---

## 2. Releases
*No new releases published today.*

---

## 3. Project Progress — Merged / Closed PRs (16)

| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#7797](https://github.com/nearai/ironclaw/pull/7797) | Repo-wide agent-guidance audit — fix drift, prune 21.5k lines, consolidate tests/ onto AGENTS.md | docs, ci | **Closed** |
| [#7804](https://github.com/nearai/ironclaw/pull/7804) | Fix: honor `IRONCLAW_REBORN_WORKSPACE_ROOT` on 1.3 branch | workspace, docs | **Closed** |
| [#7805](https://github.com/nearai/ironclaw/pull/7805) | Forward-port Clippy 1.98 lint fixes to 1.3 branch | ci, docs | **Closed** |
| [#7803](https://github.com/nearai/ironclaw/pull/7803) | Fix Telegram: keep paired channels ready, collapse reply drafts | telegram, sandbox | **Closed** |
| [#7796](https://github.com/nearai/ironclaw/pull/7796) | Preserve failed Railway audit appends in sandbox | sandbox, ci | **Closed** |
| [#7783](https://github.com/nearai/ironclaw/issues/7783) | LLM timeout policy: finalization can’t measure TTFT, retry budget misses deadline | llm, bug | **Closed** |
| [#7690](https://github.com/nearai/ironclaw/issues/7690) | Publish approval, auth, and blocked-run notifications to user inbox | notifications, webui | **Closed** |
| [#7715](https://github.com/nearai/ironclaw/issues/7715) | Telegram connection flow lacks bot vs. personal account consent | telegram, qa | **Closed** |
| [#7689](https://github.com/nearai/ironclaw/issues/7689) | Generalize WebUI notification center, consume server-backed inbox | notifications, webui | **Closed** |
| [#7806](https://github.com/nearai/ironclaw/pull/7806) | Feat(sandbox): mediate GitHub CLI credentials (v1) | sandbox, deps | **Closed** |
| [#7807](https://github.com/nearai/ironclaw/pull/7807) | Feat(sandbox): mediate GitHub CLI credentials (v2) | sandbox, deps | **Closed** |
| [#7699](https://github.com/nearai/ironclaw/pull/7699) | Feat(notifications): publish actionable run gates | notifications | **Closed** |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | Fix(reborn): make durable storage profile-agnostic | storage, reborn | *Still open but updated today* |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | Feat(coding): omp core-tool contract + engines + benchmark arm | coding, tools | *Still open but updated today* |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | Feat(automations): derive run outcomes from runtime evidence | automations | *Still open but updated today* |
| [#7700](https://github.com/nearai/ironclaw/pull/7700) | Feat(notifications): publish authoritative run outcomes | notifications | *Still open but updated today* |

**Key advances:**  
- CI foundation consolidated (toolchain pin, mold linker, centralized profiles via composite action).  
- Notification inbox generalized — actionable gates (approval, auth, blocked runs) now durable and deduplicated.  
- Sandbox gained direct `gh` credential mediation with one-shot obligation flow.  
- Agent-guidance layer audited by 13 parallel auditors; 21.5k stale lines removed.  
- Critical LLM timeout bug fixed (structured-output finalization now respects TTFT and retry budget).

---

## 4. Community Hot Topics — Most Active Issues / PRs

| Item | Comments | Signals |
|------|----------|---------|
| [#7801](https://github.com/nearai/ironclaw/issues/7801) — CI expedite T4: canonical preflight | 3 | **Developer productivity**: single gate list (`scripts/preflight-gates.sh`), worktree-safe hooks, self-printing REPRO for reproducible CI failures. |
| [#7799](https://github.com/nearai/ironclaw/issues/7799) — CI expedite T2: nextest pipeline | 3 | **Test speed & signal**: replace sequential `cargo test` with `cargo-nextest`, JUnit roll-up, PR unthrottle, hermetic network guard. |
| [#7800](https://github.com/nearai/ironclaw/issues/7800) — CI expedite T3: PR/queue convergence | 2 | **Reliability**: planner drift guard for disk-reading tests, default-features Clippy in queue, frontend dedup. |
| [#7798](https://github.com/nearai/ironclaw/issues/7798) — CI expedite T1: setup-rust composite | 2 | **Maintainability**: replace 43 scattered `rust-toolchain` invocations across 12 workflows with one composite action. |
| [#7664](https://github.com/nearai/ironclaw/issues/7664) — Pluggable memory over MCP | 2 | **Extensibility**: external memory providers bindable by config; Mnesis Core first consumer; provider crate `ironclaw_memory_mcp` in draft [#7661](https://github.com/nearai/ironclaw/pull/7661). |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) — Operator surface for IronHub agent link (WebUI) | — | **Operator UX**: WebUI Extensions page now shows IronHub register URL & shared key install (was CLI-only). |

**Underlying needs:**  
- **CI determinism & speed** — teams lose hours to flaky/queue-divergent runs.  
- **Memory provider ecosystem** — pluggable MCP memory is a strategic unlock for long-context agents.  
- **Operator self-service** — reduce CLI-only deployment steps.

---

## 5. Bugs & Stability — Reported / Fixed Today

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#7783](https://github.com/nearai/ironclaw/issues/7783) LLM timeout: finalization can’t measure TTFT; 60s stall kills 75s deadline | **Closed** | Likely addressed in merged timeout-policy work (see #7783 closure) |
| **Medium** | [#7715](https://github.com/nearai/ironclaw/issues/7715) Telegram: no consent/selection between bot & personal account | **Closed** | [#7803](https://github.com/nearai/ironclaw/pull/7803) — keeps paired bot active, separates personal auth |
| **Medium** | [#7808](https://github.com/nearai/ironclaw/issues/7808) Memory write path: redaction + taint metadata required before external provider binds | **Open** | Prerequisite for #7664; no fix PR yet |
| **Low** | [#7813](https://github.com/nearai/ironclaw/issues/7813) UI: heading cropped when suggestions panel appears | **Open** | No fix PR yet |
| **Low** | Clippy 1.98 regressions on `release/2026-08-17` | **Closed** | [#7805](https://github.com/nearai/ironclaw/pull/7805) forward-ports fixes |

**Stability signal:** Critical LLM and Telegram bugs resolved same-day; memory-write redaction is a known blocker for MCP memory rollout.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Canonical preflight gates + worktree-safe hooks** | [#7801](https://github.com/nearai/ironclaw/issues/7801), [#7809](https://github.com/nearai/ironclaw/pull/7809) | ✅ High — PR implementing Tasks 1-5 open |
| **`cargo-nextest` pipeline with JUnit roll-up** | [#7799](https://github.com/nearai/ironclaw/issues/7799) | ✅ High — tracked in T2 |
| **Pluggable MCP memory (Mnesis Core first)** | [#7664](https://github.com/nearai/ironclaw/issues/7664), [#7661](https://github.com/nearai/ironclaw/pull/7661) | ✅ High — provider crate drafted, write-path redaction (#7808) is last blocker |
| **Durable user inbox (approvals, auth, blocked runs, info)** | [#7687](https://github.com/nearai/ironclaw/issues/7687), [#7699](https://github.com/nearai/ironclaw/pull/7699), [#7700](https://github.com/nearai/ironclaw/pull/7700) | ✅ High — core pieces merged |
| **Sandbox-mediated `gh` CLI credentials** | [#7810](https://github.com/nearai/ironclaw/pull/7810), [#7806](https://github.com/nearai/ironclaw/pull/7806), [#7807](https://github.com/nearai/ironclaw/pull/7807) | ✅ High — multiple iterations merged/closed |
| **Storybook + design-system catalog (Phase 1)** | [#7750](https://github.com/nearai/ironclaw/pull/7750), [#7257](https://github.com/nearai/ironclaw/pull/7257) | ⏳ Medium — PR open, epic tracking |
| **OOBE suggestions always-on** | [#7802](https://github.com/nearai/ironclaw/pull/7802) | ✅ High — small PR, removes feature flag |
| **Shared page-shell & loading primitives** | [#7792](https://github.com/nearai/ironclaw/issues/7792), [#7794](https://github.com/nearai/ironclaw/pull/7794) | ✅ High — PR open, migrates 5 routes |
| **Onboarding suggestions with user-permissioned tools** | [#7812](https://github.com/nearai/ironclaw/issues/7812) | ⏳ Medium — new issue, depends on tool-permission model |
| **Xquik hosted MCP bundle (Twitter/X data)** | [#7811](https://github.com/nearai/ironclaw/pull/7811) | ⏳ Medium — new PR from contributor |

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **CI flakiness & queue/PR divergence** | 4 coordinated “CI expedite” issues filed same day by core maintainer; explicit mention of “measured green-PR/red-queue divergence” (#7800). |
| **LLM request stalls destroy runs** | #7783: “A single transport stall destroys a run” — finalization deadline too tight, TTFT invisible. |
| **Telegram auth UX confusing** | #7715: “no option to choose between bot and personal account; user not informed which mode they are connecting.” |
| **Memory providers can’t be plugged in** | #7664: external memory systems not bindable by config; host write path egresses verbatim content (#7808). |
| **WebUI notifications limited to automation approvals** | #7687: “Replace automation-approval-only notification center with durable, user-scoped inbox.” |
| **Design inconsistency across Settings, Admin, Workspace, Extensions** | #7792, #7793: repeated page markup, local banners instead of shared `InlineNotice`. |
| **Operator cannot link agent from WebUI** | #7516: “operator can only obtain IronHub register URL…through CLI today.” |

**Satisfaction signal:** Rapid closure of high-impact bugs (LLM timeout, Telegram consent) and operator-facing WebUI gaps suggests responsive maintainers. Open issues are mostly *enhancements* rather than regressions.

---

## 8. Backlog Watch — Long-Unanswered / Stale Important Items

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7456](https://github.com/nearai/ironclaw/pull/7456) — Fix(reborn): make durable storage profile-agnostic | **12 days open** (updated today) | XL risk, profile-agnostic storage is foundational for Reborn; needs review. |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) — Feat(coding): omp core-tool contract + engines | **11 days open** (updated today) | XL, new coding-tool surface (read/write/edit/glob/grep/bash); benchmark arm included. |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) — Feat(automations): derive run outcomes from runtime evidence | **8 days open** (updated today) | XL, replaces semantic judging with deterministic evidence-backed assessment. |
| [#7700](https://github.com/nearai/ironclaw/pull/7700) — Feat(notifications): publish authoritative run outcomes | **5 days open** (updated today) | XL, materializes completion/failure from Process Journal transitions. |
| [#7257](https://github.com/nearai/ironclaw/pull/7257) — Docs: design-system proposal & checklist | **17 days open** (updated today) | L, north-star doc for Storybook catalog; supersedes closed #7039. |
| [#7661](https://github.com/nearai/ironclaw/pull/7661) — Draft: `ironclaw_memory_mcp` provider crate | **Referenced in #7664** | Blocking pluggable memory; needs review to unblock Mnesis integration. |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) — Operator surface for IronHub agent link | **10 days open** (updated today) | XL, WebUI Extensions page feature; contributor `neo-sky` (new). |

**Recommendation:** Prioritize review of the three XL PRs (#7456, #7491, #7650) — they touch storage, coding tools, and automation outcomes, all high-leverage. The memory provider crate (#7661) should be reviewed to unblock #7664.

---

*Digest generated 2026-08-22 from GitHub API data. All links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-22

---

## 1. Today's Overview

LobsterAI demonstrates **high development velocity** with 13 PRs merged/closed in the last 24 hours, though no formal release was published. The activity centers on three pillars: **DSH (DeepSeek Harness) experimental runtime stabilization** (v0.1.1-rc.1), **library/artifacts UX refinements**, and **clearing a backlog of stale PRs from April 2026**. Two stale issues (both from April) were closed without recent community engagement. The project appears to be in a **polish-and-stabilize phase** ahead of a likely 2026.8.21 release candidate, with emphasis on Windows reliability, privacy-conscious analytics, and rendering performance.

---

## 2. Releases

**No new formal releases** in the last 24 hours.  
However, **PR #2519** merges `release/2026.8.21` into `main`, signaling an imminent version bump. Key changes in that branch:
- DSH runtime updated to `0.1.1-rc.1`
- Windows integration reliability improvements
- Privacy-conscious analytics for DSH enablement and workbench usage (fire-and-forget, non-blocking)
- Related PRs: #2515 (analytics instrumentation), #2516 (DSH version bump), #2518 (analytics moved to renderer)

> **Migration note**: DSH remains experimental; no breaking changes for stable users. Analytics are opt-in via DSH settings.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary | Link |
|----|------|---------|------|
| **#2519** | renderer, docs, main | **Release branch merge**: 2026.8.21 — DSH 0.1.1-rc.1, Windows fixes, analytics | [#2519](https://github.com/netease-youdao/LobsterAI/pull/2519) |
| **#2518** | renderer, docs, main | **refactor(dsh)**: Move usage analytics from main process to renderer-side service (`dshAnalytics.ts`) | [#2518](https://github.com/netease-youdao/LobsterAI/pull/2518) |
| **#2517** | renderer, artifacts | **fix(library)**: Improve file share/favorite interactions — Unicode filename preservation, instant favorite updates, deduplicated refresh, unified quota dialogs | [#2517](https://github.com/netease-youdao/LobsterAI/pull/2517) |
| **#2516** | — | **feat**: Update DSH to `0.1.1-rc.1` | [#2516](https://github.com/netease-youdao/LobsterAI/pull/2516) |
| **#2515** | docs, main | **feat(dsh)**: Add usage analytics for DSH enable toggle & workbench open (fire-and-forget, documented in spec) | [#2515](https://github.com/netease-youdao/LobsterAI/pull/2515) |
| **#2514** | renderer, docs, main, artifacts | **feat(library)**: Optimize local artifact preview & UX — preview sizing, remove delete entry, distinguish empty vs filtered states, clear-search buttons, fix placeholder duplication | [#2514](https://github.com/netease-youdao/LobsterAI/pull/2514) |
| **#2513** | renderer, docs, main, artifacts | **Feat/2026.8.17 library** (placeholder PR, minimal description) | [#2513](https://github.com/netease-youdao/LobsterAI/pull/2513) |
| **#1224** | stale | **fix(agent)**: i18n hardcoded Chinese in `CoworkPromptInput`, Agent modal Escape key support, delete double-click guard | [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) |
| **#1220** | stale | **perf(cowork)**: Eliminate N+1 queries in `recentChats`/`conversationSearch` (batched latest-message fetch) | [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) |
| **#1219** | stale | **perf(cowork)**: Add `React.memo` to session list items, consolidate `useSelector` in detail view to stop cascade re-renders | [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219) |
| **#1218** | stale | **fix(定时任务)**: Refactor task list sort — use `nextRunAtMs` + creation time instead of random UUID order | [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) |
| **#1215** | stale | **fix(im)**: Always rebuild chat handler on `setConfig` (platform saves lacked `settings` key, causing stale systemPrompt/skills) | [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) |

**Net effect**: 12 stale PRs (all from April 2026) were finally merged/closed today alongside 4 fresh PRs from the current release train. The stale batch delivers meaningful perf & i18n fixes that had been pending for ~4.5 months.

---

## 4. Community Hot Topics

| Item | Type | Comments | 👍 | Signal |
|------|------|----------|-----|--------|
| **#1217** | Issue (closed stale) | 2 | 0 | Intermittent gateway restart on Win10 (v2026.3.26), 3–5×/day. Logs attached. No recent reproduction — likely fixed by subsequent IM/chat-handler changes (#1215). |
| **#1223** | Issue (closed stale) | 2 | 0 | Three UX/i18n bugs in one PR (#1224): hardcoded Chinese label, missing Escape close on Agent modals, no double-click guard on delete. All fixed. |
| **#1550** | PR (open) | 0 | 0 | **Scheduled task delivery mode "none" sends `channel/to` to gateway → validation error** when task triggers. Only affects tasks created via chat/IM (not manual UI). Root cause identified; fix pending review. | [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550) |

**Underlying needs**:  
- **Reliability on Windows** (gateway stability, IM integration)  
- **i18n completeness** (hardcoded strings still surface)  
- **Scheduled task parity** between chat-created vs UI-created flows  

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | Scheduled task "no notify" mode crashes gateway on trigger (chat-created tasks) | **Open** — #1550 | #1550 (open, awaiting review) |
| **Medium** | Intermittent gateway restart (Win10, v2026.3.26) | **Closed stale** — #1217 | Likely resolved by #1215 (chat handler rebuild) |
| **Low** | i18n: hardcoded "输入文件" leaks into English prompts | **Fixed** — #1223/#1224 | #1224 (merged) |
| **Low** | Agent modals: no Escape close, delete lacks double-click guard | **Fixed** — #1223/#1224 | #1224 (merged) |
| **Perf** | Cowork session list/item re-renders on every parent state change | **Fixed** — #1219 | #1219 (merged) |
| **Perf** | N+1 queries loading recent chats & search results | **Fixed** — #1220 | #1220 (merged) |

**Critical watch**: #1550 is the only **open, unfixed regression** — affects scheduled task execution path for a growing user segment (chat-created tasks).

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **DSH analytics & workbench telemetry** | #2515, #2518 | **High** — already in release branch |
| **Library UX: preview sizing, search clear, empty-state distinction** | #2514, #2517 | **High** — merged today |
| **Scheduled task sort by next run time + creation time** | #1218 | **High** — merged (stale) |
| **IM/chat handler config hot-reload** | #1215 | **High** — merged (stale) |
| **Unicode filename support in shares** | #2517 | **High** — merged |
| **Privacy-first analytics (opt-in, fire-and-forget)** | #2515, #2518 | **High** — design spec documented |
| **Agent modal keyboard accessibility (Escape)** | #1223/#1224 | **Done** — merged |

**Prediction**: Next version (2026.8.21+) will ship DSH 0.1.1-rc.1, library UX polish, and the backlog of perf/i18n fixes. The only missing piece for a clean release is resolving #1550.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Gateway instability on Windows** | #1217: "3–5 restarts/day", logs provided | 😟 Frustrated (no recent follow-up) |
| **Chinese text leaking in English UI** | #1223: "violates AGENTS.md 'Never hardcode'" | 😐 Technical — fixed promptly once reported |
| **Agent modal UX gaps** | #1223: no Escape, unsafe delete | 😐 Minor — fixed |
| **Scheduled task creation parity** | #1550: chat-created vs UI-created behave differently | 😟 Blocking for chat-driven automation users |
| **Session list lag during streaming** | #1219: "entire list re-renders on every message" | 😐 Performance — fixed |

**Overall**: Users encounter **sharp edges in Windows gateway reliability** and **cross-path consistency** (chat vs UI task creation). The team is responsive to well-scoped bugs (i18n, perf) but stale issues suggest triage bandwidth constraints.

---

## 8. Backlog Watch

| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| **#1550** fix(scheduledTask): "no notify" mode sends invalid `channel/to` | 4.5 months (created Apr 7, updated today) | **Regression in production path** — tasks created via chat fail at runtime. Only open PR with user-visible breakage. | **Urgent**: Review & merge #1550 before 2026.8.21 release. |
| **#1217** Gateway intermittent restart (Win10) | 4.5 months | Closed stale but **no root-cause confirmation**. Logs exist. Could resurface. | Verify fix via #1215; add regression test. |
| **Stale PR cleanup** | 12 PRs from Apr 2026 closed today | Technical debt cleared, but **4.5-month merge latency** indicates process gap. | Establish stale-bot rules or monthly triage to avoid backlog. |
| **DSH experimental status** | Ongoing | Analytics added but still `rc.1`; no graduation criteria visible. | Document exit criteria for DSH beta. |

---

## Quick Links
- **Release branch PR**: [#2519](https://github.com/netease-youdao/LobsterAI/pull/2519)
- **Critical open fix**: [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550)
- **DSH analytics spec**: Referenced in [#2515](https://github.com/netease-youdao/LobsterAI/pull/2515)
- **Library UX PRs**: [#2514](https://github.com/netease-youdao/LobsterAI/pull/2514), [#2517](https://github.com/netease-youdao/LobsterAI/pull/2517)
- **Perf/i18n backlog batch**: [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215), [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218), [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219), [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220), [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224)

---

**Health score**: 🟡 **Good velocity, one open regression blocking release confidence**.  
**Recommended next step**: Merge #1550 → cut 2026.8.21 → publish release notes highlighting DSH rc.1, library UX, and perf fixes.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-22

## 1. Today's Overview
Moltis saw moderate development activity over the past 24 hours with **2 new issues** and **8 pull requests** updated (7 opened, 1 merged). No new release was published. The project continues to focus on bug fixes and incremental improvements across WhatsApp, browser automation, cron scheduling, internationalization, web sandboxing, and Windows compatibility. The merged PR (#1220) adds WhatsApp Markdown rendering, while several open PRs address critical bugs in shared Slack channels, heartbeat active-hours logic, and Windows shell hooks.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress (Merged/Closed PRs)
| PR | Title | Summary |
|----|-------|---------|
| [#1220](https://github.com/moltis-org/moltis/pull/1220) | **fix(whatsapp): render Markdown in outbound messages** | Converts model-generated Markdown to WhatsApp-native markup before delivery. Applied to text messages and media captions while preserving original Markdown in history/UI. Requires valid header/separator structure. **Merged/Closed** |

*This is the only PR closed in the period. It improves WhatsApp user experience by enabling rich text formatting.*

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#1224](https://github.com/moltis-org/moltis/issues/1224) | Issue (Bug) | 0 comments, 0 👍 | **Tools fail in shared Slack channels** — critical for teams using Slack Connect / shared channels. No workaround reported. |
| [#1223](https://github.com/moltis-org/moltis/issues/1223) | Issue (Bug) | 0 comments, 0 👍 | **Heartbeat `active_hours` config ineffective** — default `end: "24:00"` never suppresses jobs; user-defined windows with `24:00` also broken. Blocks scheduled-task reliability. |
| [#1208](https://github.com/moltis-org/moltis/pull/1208) | PR (Fix) | 0 comments, 0 👍 | **Fix cron to honor heartbeat active hours** — directly addresses #1223 / #1205. Awaiting review. |
| [#468](https://github.com/moltis-org/moltis/pull/468) | PR (Fix) | Long-standing (opened 2026-03-23), updated today | **Windows shell hooks use `cmd.exe /C`** — enables plugin hooks on Windows. CI passes; needs maintainer merge. |

*Despite low comment counts, these items represent **core functionality gaps** (Slack, scheduling, Windows) that affect production deployments.*

## 5. Bugs & Stability
| Severity | Issue / PR | Description | Fix PR? |
|----------|------------|-------------|---------|
| **High** | [#1224](https://github.com/moltis-org/moltis/issues/1224) | Tools stop working in shared Slack channels. No workaround. | No |
| **High** | [#1223](https://github.com/moltis-org/moltis/issues/1223) | `heartbeat.active_hours` never suppresses jobs; parsing bug with `end: "24:00"`. | Yes — [#1208](https://github.com/moltis-org/moltis/pull/1208) |
| **Medium** | [#1228](https://github.com/moltis-org/moltis/pull/1228) | WhatsApp inbound files (docs/photos) not persisted → local tools lack `local_path`. | PR open |
| **Medium** | [#1222](https://github.com/moltis-org/moltis/pull/1222) | Web sandbox accepts unvalidated image refs/package names; security risk. | PR open (validation + admin restriction) |
| **Low** | [#468](https://github.com/moltis-org/moltis/pull/468) | Shell hooks fail on Windows (`sh -c` unavailable). | PR open (uses `cmd.exe /C`) |

*Two high-severity bugs with no immediate fix PR (#1224) or pending review (#1208 for #1223).*

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **WhatsApp media persistence for local tools** | [#1228](https://github.com/moltis-org/moltis/pull/1228) | High — PR ready, bounded implementation (20 MB limit, sanitization). |
| **Obscura stealth mode by default** | [#1227](https://github.com/moltis-org/moltis/pull/1227) | High — config flag added (`tools.browser.obscura_stealth`), default `true`. |
| **Cron delivery to originating chat** | [#1226](https://github.com/moltis-org/moltis/pull/1226) | High — resolves thread/topic routing for scheduled jobs. |
| **Traditional Chinese (zh-TW) translation overhaul** | [#1225](https://github.com/moltis-org/moltis/pull/1225) | Medium — large locale update, community-contributed. |
| **Windows shell hook support** | [#468](https://github.com/moltis-org/moltis/pull/468) | Medium — long-open, CI green, awaiting maintainer. |

*Most open PRs are **bug-fix/improvement** rather than new features, indicating a stabilization phase.*

## 7. User Feedback Summary
- **Pain points**:  
  - Slack shared channels break tool execution (#1224) — blocks collaborative workflows.  
  - Scheduled jobs ignore `active_hours` (#1223) — leads to unwanted off-hours executions.  
  - Windows users cannot run shell hooks (#468) — limits plugin ecosystem on Windows.  
- **Positive signals**:  
  - WhatsApp Markdown rendering merged (#1220) — improves messaging UX.  
  - Active community contributions (zh-TW locale, Windows fix, WhatsApp media).  
- **No explicit dissatisfaction** in comments, but **zero engagement** on critical bugs suggests they may be encountered silently in production.

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#468](https://github.com/moltis-org/moltis/pull/468) | ~5 months | Open, CI passing | **Windows compatibility** — enables shell hooks on Windows; long delay risks contributor fatigue. |
| [#1208](https://github.com/moltis-org/moltis/pull/1208) | 5 days | Open, addresses #1223 | **Cron active-hours fix** — core scheduling bug; should be prioritized for merge. |
| [#1224](https://github.com/moltis-org/moltis/issues/1224) | 1 day | Open, no PR | **Slack shared channels** — high-impact bug with no fix in sight; needs triage. |
| [#1222](https://github.com/moltis-org/moltis/pull/1222) | 2 days | Open, tests pass | **Web sandbox validation** — security hardening; should be reviewed promptly. |

---

**Overall Health**: 🟡 **Caution** — Active development but two high-severity bugs lack fixes; several important PRs await review. Recommend prioritizing #1208, #1224, and #468 for next sprint.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-22

## 1. Today's Overview

CoPaw shows **high development velocity** with 59 total issue/PR updates in 24 hours. The project is in active feature development (v2.1.1-beta cycle) with significant investment in testing infrastructure, desktop stability, and multi-user Hub capabilities. No new release today, but a version bump to **v2.1.1b2** was merged (#7200). Regression density is notable: several v2.1.1-beta.1 issues (#7206, #7210) indicate the beta introduced tool injection and compaction bugs. Community engagement is strong with 14 active issues spanning bugs, feature requests, and usability questions.

## 2. Releases

**No new releases today.** The latest version bump to `v2.1.1b2` was merged in [#7200](https://github.com/agentscope-ai/QwenPaw/pull/7200) but not yet tagged/released. The current stable remains **v2.1.0**; v2.1.1-beta.1 is confirmed to have regressions (see Bugs section).

---

## 3. Project Progress — Merged/Closed PRs Today (13)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7205](https://github.com/agentscope-ai/QwenPaw/pull/7205) | **CI/Testing** | Fix Windows integration coverage reading 0 lines; add fail-closed guard | Restores CI visibility for Windows; prevents silent coverage gaps |
| [#7200](https://github.com/agentscope-ai/QwenPaw/pull/7200) | **Chore** | Bump version to v2.1.1b2 | Pre-release version bump for beta cycle |
| [#7176](https://github.com/agentscope-ai/QwenPaw/pull/7176) | **Performance** | Keep long chat sessions responsive (Markdown parsing, virtualization) | Major UX improvement for power users with long histories |
| [#7112](https://github.com/agentscope-ai/QwenPai/pull/7112) | **Feature** | **QwenPaw Hub** — self-hosted multi-user control plane with isolated app instances | Strategic expansion: enables team/enterprise deployment, local + Docker runtimes |
| [#7175](https://github.com/agentscope-ai/QwenPaw/pull/7175) | **Bug Fix** | Restore complete free model listings in model selector | Fixes provider metadata sync for free-tier models |
| [#5580](https://github.com/agentscope-ai/QwenPaw/pull/5580) | **Testing** | Backend unit test coverage for `app` infra layer (agent_context, console_push_store, workspace_migration) | Locks 2.0 contracts, prevents regressions |
| [#5437](https://github.com/agentscope-ai/QwenPaw/pull/5437) | **Testing** | Frontend M3-B: 14 test files / 171 cases for Inbox + 11 API modules | Zero-coverage → covered for critical frontend modules |
| [#5433](https://github.com/agentscope-ai/QwenPaw/pull/5433) | **Testing** | Frontend M3-A: 19 test files / ~135 cases for M1 Agent hooks, Settings pure fns, Settings hooks | Core settings/agent logic now tested |
| [#5419](https://github.com/agentscope-ai/QwenPaw/pull/5419) | **Testing** | Runner module unit tests (W2 sprint) | Backend runner reliability |
| [#5007](https://github.com/agentscope-ai/QwenPaw/pull/5007) | **Testing** | M3+M4 Settings + Inbox + API convergence (~160 cases + tech debt) | Major test milestone completed |
| [#5006](https://github.com/agentscope-ai/QwenPaw/pull/5006) | **Testing** | M2 Control page + Stores/Hooks unit tests (~118 cases) | Core UI state logic covered |
| [#5005](https://github.com/agentscope-ai/QwenPaw/pull/5005) | **Testing** | M1 Agent page + core API modules unit tests (~115 cases) | User-facing agent page logic covered |
| [#5004](https://github.com/agentscope-ai/QwenPaw/pull/5004) | **Testing** | M1 Agent 页面 + 核心 API 单元测试 (~115 用例) | Duplicate of #5005 (CN/EN) |

**Key Theme:** Massive testing investment — **~800+ new test cases** merged today across backend and frontend, closing a multi-sprint coverage plan. Hub (#7112) is the standout feature merge.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | Bug | 3 | Tool call 404 during streaming — critical streaming session reliability |
| [#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206) | Bug | 2 | **Regression**: `/compact` fails with Pydantic ValidationError when `compact_threshold_ratio=0.9` (works in v2.1.0) |
| [#7204](https://github.com/agentscope-ai/QwenPaw/issues/7204) | Question | 2 | **Custom tool support** — user asks how to add custom tools (only built-ins visible) |
| [#7197](https://github.com/agentscope-ai/QwenPaw/issues/7197) | Bug | 2 | Custom channel plugins not appearing in MCP tool authorization rules |
| [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) | Bug | 2 | WebView2 renderer crash ~7s after startup (v2.0.0+post.4 regression, `msedge.dll+0x36c7f6d`) |
| [#6430](https://github.com/agentscope-ai/QwenPaw/issues/6430) | Bug | 2 | Desktop startup hang ~85s (background stall) |
| [#7210](https://github.com/agentscope-ai/QwenPaw/issues/7210) | Bug | 1 | Built-in tools enabled in `agent.json` but not injected into session function schema |
| [#7203](https://github.com/agentscope-ai/QwenPaw/issues/7203) | Feature | 1 | Toggle to hide tool call info (visual noise during contract review/reports) |
| [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | Feature | 1 | Default fold/collapse for reasoning process (visual distraction) |
| [#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198) | Feature | 1 | Don't require approval for operations on files created *during* session (only pre-existing files) |

**Underlying Needs Analysis:**
1. **Streaming/Session Reliability** (#7016, #7206, #7210) — Core agent loop has regressions in tool handling and context compaction
2. **Extensibility Gaps** (#7204, #7197) — Custom tools and channels are second-class citizens in UI/authz
3. **Desktop Stability** (#6427, #6430) — WebView2 crashes and startup hangs block desktop adoption
4. **Power-User UX** (#7203, #7196, #7198) — Heavy users need granular control over verbosity, approvals, reasoning display

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | Tool call 404 during streaming (`/offload` endpoint returns "Tool call not found") — breaks streaming sessions | No |
| **Critical** | [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) | WebView2 renderer crash 7s post-startup (`msedge.dll+0x36c7f6d`, `0x80000003`) — v2.0.0+post.4 regression, app unusable on Windows | No |
| **High** | [#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206) | **Regression v2.1.1-beta.1**: `/compact` always fails with Pydantic ValidationError at `compact_threshold_ratio=0.9` | No |
| **High** | [#7210](https://github.com/agentscope-ai/QwenPaw/issues/7210) | Built-in tools enabled in `agent.json` but **not injected into agent's function schema** — tools invisible to LLM | No |
| **High** | [#6430](https://github.com/agentscope-ai/QwenPaw/issues/6430) | Desktop startup hang ~85s consistently — background stall | No |
| **Medium** | [#7197](https://github.com/agentscope-ai/QwenPaw/issues/7197) | Custom channel plugins missing from MCP tool authorization rules dropdown | No |
| **Medium** | [#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) | `daily_paper` job crashes on PDF with surrogate chars (U+D800–U+DFFF) in `write_atomic` → `UnicodeEncodeError` | No |
| **Medium** | [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) | Agent memory search returns **another session's content** — context leakage across sessions | No |
| **Low** | [#7195](https://github.com/agentscope-ai/QwenPaw/issues/7195) | Desktop fullscreen chat window obscured by bottom icons | No |

**Note:** No fix PRs linked for any of today's critical/high bugs. [#7211](https://github.com/agentscope-ai/QwenPaw/pull/7211) addresses context injection persistence but is unrelated to #7210.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version | Rationale |
|---------|-------|----------------------------|-----------|
| **Toggle tool call visibility** | [#7203](https://github.com/agentscope-ai/QwenPaw/issues/7203) | **High** | Simple UI toggle, matches Hermes/Claude UX, high user pain for report/contract work |
| **Collapse reasoning by default** | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | **High** | Same pattern as #7203; settings-based default fold |
| **Per-provider media byte caps** | [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) | **High** | Structured config change; PR-ready scope; aligns with provider limits |
| **Session-scoped multi-project dirs** | [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | **High** | **Open PR** with significant scope; enables multi-repo workflows |
| **DingTalk shared session context** | [#7208](https://github.com/agentscope-ai/QwenPaw/pull/7208) | **High** | **Open PR**; enterprise channel feature, unblocks group collaboration |
| **Custom tool registration** | [#7204](https://github.com/agentscope-ai/QwenPaw/issues/7204) | **Medium** | Repeated ask; needs API + UI work; may wait for plugin system maturation |
| **Approval policy: ignore session-generated files** | [#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198) | **Medium** | Policy logic change; high value for autonomous agents; needs design review |
| **Global hotkey quick-input (Doubao-style)** | [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) | **Medium** | **Open PR**; desktop differentiator; Tauri implementation |
| **Mailbox management docs** | [#7202](https://github.com/agentscope-ai/QwenPaw/pull/7202) | **High** | **Open PR**; documentation only; completes #6800 feature |

**Predicted v2.1.1 scope:** Bug fixes for regressions (#7206, #7210, #7016) + toggles (#7203, #7196) + media caps (#7201) + docs (#7202). Multi-project (#6976) and DingTalk sharing (#7208) likely v2.2.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Streaming tool calls broken** | #7016: "page keeps calling `/offload` → 404" | Blocks streaming workflows; core feature unreliable |
| **Desktop app crashes on Windows** | #6427: WebView2 crash 7s after start; #6430: 85s startup hang | Windows desktop users cannot use v2.0.0+post.4 |
| **Beta regressions erode trust** | #7206: "works fine on v2.1.0; regression confirmed after rollback" | Users rolling back; beta not viable for daily use |
| **Tools invisible despite config** | #7210: "agent.json all enabled but tools not injected into schema" | Silent failure — LLM cannot use configured tools |
| **Visual noise from tool/reasoning output** | #7203, #7196: "severe visual interference", "no positive value for contract review" | Power users (reports, contracts, research) overwhelmed |
| **Approval spam on temp files** | #7198: "auto-approve deletes execution artifacts but still prompts" | Blocks overnight/autonomous runs |
| **Custom tools/channels not first-class** | #7204: "only built-in tools"; #7197: custom channel missing in MCP auth | Extensibility gap for advanced users |
| **Memory cross-contamination** | #7193: "searched another session's content" | Privacy/confidentiality risk; breaks session isolation |

**Positive Signals:** Hub (#7112) and Creator (#7167) PRs show ambitious platform expansion. Testing sprint completion (~800 cases) indicates quality focus. Performance fix (#7176) addresses real long-session pain.

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) | **30 days** | Open, 2 comments | **WebView2 crash blocks Windows desktop** — deterministic renderer assertion failure since post.4; no workaround |
| [#6430](https://github.com/agentscope-ai/QwenPaw/issues/6430) | **30 days** | Open, 2 comments | **85s startup hang** — consistent stall on every launch; PyInstaller onedir backend |
| [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) | **9 days** | Open PR | **Session-scoped multi-project dirs** — significant feature PR awaiting review; enables multi-repo workflows |
| [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) | **22 days** | Open PR | **Global hotkey floating window** — desktop differentiator; Tauri implementation ready |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | **41 days** | Open, Under Review | **Per-session model overrides** — opt-in feature for multi-model agents; long review cycle |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | **30 days** | Open, Under Review

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-22

## 1. Today's Overview
ZeroClaw shows **high velocity with 71 total items updated** in the last 24 hours (21 issues, 50 PRs), but **zero releases** — indicating a development-heavy phase focused on architecture, security hardening, and stability fixes. Three major RFCs are under active discussion (unified attachments, agent swarms, WASM plugin architecture), signaling significant architectural evolution. The bug backlog is dominated by **ZeroCode/TUI regressions** (daemon startup overflow, stale connection state, Ctrl+C handling) and **channel/runtime reliability issues** (Telegram history fragmentation, channel-backed tool access). Security remains a first-class concern with multiple PRs hardening supply chain, sandbox policy enforcement, and secret handling.

## 2. Releases
**No new releases today.** The project appears to be in a pre-release stabilization window — PR #10174 (closed) added CI verification for pinned release tools on native Linux/Windows runners, suggesting a release cut is imminent once toolchain validation completes.

## 3. Project Progress — Merged/Closed Today
| PR / Issue | Type | Summary |
|------------|------|---------|
| [#10174](https://github.com/zeroclaw-labs/zeroclaw/pull/10174) | CI (closed) | Added two-runner smoke matrix for pinned `cross` (Linux) and Tauri CLI (Windows) release tools — validates release pipeline before next cut. |
| [#10159](https://github.com/zeroclaw-labs/zeroclaw/issues/10159) | Task (closed) | Verified pinned release-tool installer on native GitHub-hosted runners; prerequisite for trusting automated release paths. |

**Net signal:** Release infrastructure hardening is the only merged work; all feature/security/refactor PRs remain open, suggesting maintainers are gating merges behind the release-gate validation.

## 4. Community Hot Topics — Most Active Discussions
| Item | Type | Comments | Core Debate / Need |
|------|------|----------|-------------------|
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC | 18 | **Unified attachment architecture** — how to handle files/blobs consistently across web chat, channels (Telegram, Discord, etc.), and tools. High risk, touches gateway, runtime, security. |
| [#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) | RFC | 2 | **Ephemeral agent swarms with TUI** — operator wants dynamic, goal-oriented multi-agent teams without static config surgery; proposes "crush-style" TUI for orchestration. |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | RFC | 2 | **Comprehensive WASM plugin architecture** — "everything is a plugin" via WASM Component Model; extends current narrow surface to tools, channels, memory, skills, hooks. Accepted, high risk. |
| [#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839) | PR | — | **Block direct spellings of irreversible destructive commands** — security policy hardening; allowlist `*` + `block_high_risk_commands=false` short-circuits guard, under review. |
| [#9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319) | PR | — | **Seal engine tool registry as `ScopedToolRegistry`** — major refactor to enforce scoping at registry level; touches agent, channel, runtime, skills, ACP. XL size, high risk. |

**Underlying theme:** Contributors are pushing **architectural unification** (attachments, plugins, tool registry) and **dynamic multi-agent workflows** — moving away from static config toward runtime-composable systems.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Component | Status | Fix PR? |
|----------|-------|-----------|--------|---------|
| **S1** | [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) Daemon startup/reload stack overflow during Quickstart apply | `zerocode/tui`, daemon | Open | No |
| **S1** | [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) ZeroCode RPC sessions cannot reach configured channels via channel-backed tools | `zerocode/tui`, channels | Open | No |
| **S1** | [#10223](https://github.com/zeroclaw-labs/zeroclaw/issues/10223) ZeroCode drops Ctrl+C, blocks input during reconnect on active turn | `zerocode/tui` | Open | No |
| **S2** | [#10238](https://github.com/zeroclaw-labs/zeroclaw/issues/10238) ZeroCode shows stale "Connected" state after daemon exit | `zerocode/tui` | Open | No |
| **S2** | [#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) `block_high_risk_commands = false` not honored — allowlisted high-risk command still blocked | `security/sandbox`, `tool:shell` | Accepted | No |
| **S2** | [#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175) Google TTS API key header not marked sensitive | `channel` | Accepted | No |
| **S2** | [#10199](https://github.com/zeroclaw-labs/zeroclaw/issues/10199) Plugin egress connect-deadline cannot cancel blocking `getaddrinfo` | `runtime:wasm`, `tool:web` | Accepted | No |
| **S2** | [#10232](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) Daemon diagnostics drop underlying error chain | `runtime/daemon`, observability | Accepted | No |
| **S2** | [#10224](https://github.com/zeroclaw-labs/zeroclaw/issues/10224) Custom provider 5xx errors logged as duplicated escaped JSON | `provider` | Accepted | No |
| **S2** | [#10178](https://github.com/zeroclaw-labs/zeroclaw/issues/10178) Daemon socket ownership error lacks active owner/recovery info | `runtime/daemon`, `zerocode` | Accepted | No |
| **S2** | [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) Telegram reply-threads fragment conversation memory into per-thread buckets | `channel:telegram` | Open | No |
| **S3** | [#10180](https://github.com/zeroclaw-labs/zeroclaw/issues/10180) ZeroCode paste mutates hidden composer while another surface owns input | `zerocode/tui` | Accepted | No |

**Pattern:** **ZeroCode/TUI is the epicenter of S1 regressions** — daemon interaction, connection state, input handling. Security sandbox policy (#10164) and WASM plugin networking (#10199) are accepted but unfixed. Telegram history fragmentation (#10237) is a new functional regression.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Default `stream_mode = partial`** | [#10166](https://github.com/zeroclaw-labs/zeroclaw/issues/10166) (accepted) | High — trivial config default change, improves perceived latency |
| **Enable stall watchdog by default** | [#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) (accepted) | High — conservative non-zero default, prevents indefinite hangs |
| **Git Channel in `zeroclaw:debian` Docker image** | [#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138) | Medium — packaging change, no code risk |
| **ZeroRouter preset + device-flow login** | [#9645](https://github.com/zeroclaw-labs/zeroclaw/pull/9645) (XL PR) | Medium — first-class compat provider, but XL scope |
| **ACP: persist interrupted turn progress** | [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) (XL PR) | Medium — UX critical for CLI/ACP users, large implementation |
| **ZeroRelay secure transport + browser enrollment** | [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) (XL PR) | Low — supersedes #9080, mandatory mTLS, per-daemon CA; architectural |
| **WASM plugin "everything is a plugin"** | [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) (accepted RFC) | Low — foundational, high risk, long horizon |
| **Ephemeral agent swarms with TUI** | [#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025) (RFC) | Low — early design, requires orchestrator + dynamic config |

**Prediction:** Next patch/minor will ship **streaming/stall defaults**, **Docker Git Channel**, and **ACP turn persistence**. ZeroRelay and WASM plugin architecture are multi-release epics.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **ZeroCode unreliable during daemon churn** | #10230 (overflow), #10238 (stale state), #10223 (Ctrl+C lost), #10180 (paste race) | S1 workflow blocks — daily driver TUI feels fragile |
| **Channel-backed tools broken in ZeroCode RPC** | #10225 — `git_forge` works in daemon but not ZeroCode session | Blocks "agent in editor" workflow for Git/channel users |
| **Security policy bypass confusion** | #10164 — `block_high_risk_commands=false` + allowlist ignored on parent path | Operators cannot opt out of destructive-command guard as documented |
| **Telegram history fragmentation** | #10237 — reply threads split conversation memory | Multi-turn context lost in threaded chats; functional regression |
| **Daemon socket errors unactionable** | #10178 — no PID/path of existing owner | Operators cannot self-recover "address in use" |
| **Custom provider error logs unreadable** | #10224 — duplicated escaped JSON | Debugging provider failures is harder than necessary |

**Positive signals:** Active RFC engagement shows users investing in long-term architecture; accepted feature defaults (streaming, stall watchdog) indicate maintainer responsiveness to UX friction.

## 8. Backlog Watch — Stale High-Value Items Needing Attention
| Item | Age | Why It Matters | Blocker |
|------|-----|----------------|---------|
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: Unified attachment architecture | 26 days | 18 comments, high risk, touches web/gateway/channels/security — foundational for file handling | Needs author action / sponsor follow-up |
| [#9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319) Refactor: seal engine tool registry as `ScopedToolRegistry` | 30 days | XL refactor, high risk, enables secure tool scoping across agent/channel/runtime/ACP | Needs maintainer review |
| [#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839) Feat: block direct spellings of irreversible commands | 15 days | Security policy hardening; allowlist `*` short-circuit is a known gap | Needs author action |
| [#8576](https://github.com/zeroclaw-labs/zeroclaw/pull/8576) Fix: env-var fallback for OpenAI STT credentials | 52 days | Stale candidate, high risk, fixes ignored env creds for STT | Needs author action |
| [#9637](https://github.com/zeroclaw-labs/zeroclaw/pull/9637) CI: guard temporary React Router RSC exception | 21 days | Do-not-merge, dependency review gate, affects web dashboard build | Needs author action |
| [#10149](https://github.com/zeroclaw-labs/zeroclaw/issues/10149) Bug: preserve custom agent workspace path across delete retries | 2 days | P1, accepted, data-loss risk on failed archival | No fix PR yet |
| [#9645](https://github.com/zeroclaw-labs/zeroclaw/pull/9645) Feat: ZeroRouter preset + device-flow login | 21 days | XL, distinguished contributor, new compat provider family | Needs author action |

**Maintainer action recommended:** Prioritize review of **#9319 (tool registry sealing)** and **#9839 (destructive command guard)** — both are security-critical, have clear scope, and unblock downstream hardening. The **ZeroCode S1 cluster** (#10230, #10225, #10223) warrants a dedicated triage sprint.

---

**Project Health Assessment:** 🟡 **Active development, pre-release stabilization**  
- **Velocity:** High (71 updates/24h)  
- **Release readiness:** Blocked on CI toolchain validation (#10174 done, gate passing)  
- **Critical risk:** ZeroCode/TUI regression cluster (3× S1, 4× S2)  
- **Strategic direction:** Clear — unified plugin/attachment/agent architecture via RFCs  
- **Community trust:** Maintainers responsive (accepted labels on 12+ issues today), but fix throughput lags report rate

*Data sourced from GitHub API; all links point to zeroclaw-labs/zeroclaw.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*