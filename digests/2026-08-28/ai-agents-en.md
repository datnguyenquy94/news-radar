# OpenClaw Ecosystem Digest 2026-08-28

> Issues: 119 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-28 11:03 UTC

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

# OpenClaw Project Digest — 2026-08-28

## 1. Today's Overview
OpenClaw shows **exceptionally high velocity** with 119 issues and 500 PRs updated in the last 24 hours. The project is in a heavy bug-fix and stabilization phase: 186 PRs were merged/closed today, many addressing P1 regressions in session state, message delivery, authentication, and memory management. No new release was cut, but a `2026.9.1-beta.1` candidate is in preparation (#130731). The issue backlog contains several long-standing (April–July) P1/P2 items awaiting maintainer decisions, signaling a tension between rapid iteration and review capacity.

## 2. Releases
**No new releases published today.**  
The nearest candidate is **`2026.9.1-beta.1`** (PR #130731), currently in “waiting on author” state with XL scope, touching gateway, agents, scripts, and OpenAI/Codex extensions. It carries merge-risk flags for session-state, security-boundary, and availability.

## 3. Project Progress — Key Merged/Closed PRs Today (186 total)
| PR | Scope | Rating | Status | Summary |
|----|-------|--------|--------|---------|
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | gateway, 7 channels | 🐚 platinum hermit | **Closed** | Keep conversation delivery within agent bindings; fixes cross-agent message leakage |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | security, CLI, macOS | 🐚 platinum hermit | **Closed** | Require acknowledgement for install-policy warnings (interactive CLI review) |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) | web-ui | 🐚 platinum hermit | **Closed** | Avoid session catalog refresh storms on focus/presence changes |
| [#128371](https://github.com/openclaw/openclaw/pull/128371) | release, scripts | 🦪 silver shellfish | **Closed** | Authorize focused beta evidence (unblocks beta.3) |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | models, web-ui, gateway | 🦐 gold shrimp | **Closed** | Keep Claude CLI OAuth available in Control UI after restart |
| [#128223](https://github.com/openclaw/openclaw/pull/128223) | CLI | 🦪 silver shellfish | **Closed** | Resolve alias targets from write snapshot |
| [#127222](https://github.com/openclaw/openclaw/pull/127222) | doctor, transcript | 🦞 diamond lobster | **Closed** | Fix doctor transcript repair truncation risk |
| [#129217](https://github.com/openclaw/openclaw/pull/129217) | SQLite startup | 🦞 diamond lobster | **Closed** | Prevent legacy session migration on SQLite-only layouts |

**Theme:** Session-state integrity, channel delivery correctness, auth persistence, and release pipeline hardening.

## 4. Community Hot Topics — Most Discussed Issues/PRs
| Item | Comments | 👍 | Core Need |
|------|----------|-----|-----------|
| [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway heap grows to 1073 MB+ at idle on macOS; cron jobs fail silently | 9 | 1 | **Memory leak + silent cron failure** — production blocker for long-running gateways |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) Multi-Slot Memory Architecture | 8 | 3 | **Architectural extension** — replace single memory slot with purpose-specific slots |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) Add production-readiness stability label to releases | 7 | 2 | **Release governance** — users need clear stability signals for production deployments |
| [#103198](https://github.com/openclaw/openclaw/issues/103198) WebChat image attachments mapped to `image_0` instead of real media path | 6 | 3 | **Media pipeline bug** — breaks image tool usage in WebChat |
| [#98702](https://github.com/openclaw/openclaw/issues/98702) Inherited OpenAI OAuth rejected on `openai-chatgpt-responses` transport | 6 | 1 | **Auth inheritance regression** — built-in runtime fails where main succeeds |
| [#131711](https://github.com/openclaw/openclaw/issues/131711) Completed reply stays active until timeout; abort duplicates transcript entry | 3 | 0 | **Transcript duplication** — fresh P1 filed today, fix-shape-clear |

**Underlying pattern:** Users running OpenClaw as daily-driver assistants (Telegram, Slack, cron, Home Assistant) hit **silent data loss, memory bloat, and auth fragility** after multi-hour uptime. The “diamond lobster” (🦞) rating appears on the most impactful session-state/message-loss bugs.

## 5. Bugs & Stability — Today’s Critical Reports (Ranked by Severity)
| Issue | Severity | Area | Fix PR? | Key Symptom |
|-------|----------|------|---------|-------------|
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | **P1** 🦪 | Gateway memory / cron | No | Heap 558 MB → 1073 MB+ at idle; cron OOM → silent failure |
| [#131711](https://github.com/openclaw/openclaw/issues/131711) | **P1** 🦞 | Session transcript | No | Reply written twice (completed + aborted duplicate) |
| [#118185](https://github.com/openclaw/openclaw/issues/118185) | **P1** 🦞 | claude-cli transcript | [#131735](https://github.com/openclaw/openclaw/pull/131735) | Single turn written twice by two writers |
| [#126090](https://github.com/openclaw/openclaw/issues/126090) | **P1** 🦞 | Telegram delivery | Closed | `delivery-mirror` bypasses dedup → duplicate assistant messages |
| [#131561](https://github.com/openclaw/openclaw/issues/131561) | **P2** 🦞 | Telegram session | No | Session stays running ~15 min after successful terminal delivery |
| [#87407](https://github.com/openclaw/openclaw/issues/87407) | **P1** 🦞 | Anthropic provider | No | `UND_ERR_SOCKET` keep-alive failures → silent fallback to OpenAI/Codex |
| [#130096](https://github.com/openclaw/openclaw/issues/130096) | **P1** 🦞 | Compaction / TPM | [#130275](https://github.com/openclaw/openclaw/pull/130275) | Provider TPM limit = per-request ceiling → never reaches compaction |
| [#131688](https://github.com/openclaw/openclaw/issues/131688) | **P1** 🦪 | Feishu media / security | No | Outbound media falls back to `📎 <local path>`; containment rejects staged file |
| [#124132](https://github.com/openclaw/openclaw/issues/124132) | **P1** 🐚 | WhatsApp groups | No | `sendReadReceipts:false` stops group inbound delivery entirely |
| [#123297](https://github.com/openclaw/openclaw/issues/123297) | **P1** 🦞 | Plugin discovery | No | `plugins.allow` + `bundledDiscovery:"compat"` disables 47/55 bundled plugins |

**Stability signal:** 10+ P1 bugs active simultaneously, 5 filed/updated today. Multiple involve **silent message loss** and **session-state corruption** — the highest user-trust risk.

## 6. Feature Requests & Roadmap Signals
| Issue | Rating | Signal | Likelihood for Next Version |
|-------|--------|--------|-----------------------------|
| [#60572](https://github.com/openclaw/openclaw/issues/60572) Multi-Slot Memory Architecture | 🦞 diamond lobster | Core architecture redesign; linked PR open | Medium — needs product decision |
| [#114798](https://github.com/openclaw/openclaw/issues/114798) Browser tool: snapshot-on-navigate, fewer round-trips | 🌊 off-meta tidepool | Quality-critical for browser automation | Medium — field-reported decisive factor |
| [#129327](https://github.com/openclaw/openclaw/issues/129327) Proactive quota/usage alerts at 80/85/90/95% | 🌊 off-meta tidepool | Operational visibility gap | High — low complexity, high user value |
| [#131665](https://github.com/openclaw/openclaw/issues/131665) Narrow plugin API for session labels | 🌊 off-meta tidepool | Plugin sandboxing improvement | Medium — narrow scope |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) Production-readiness stability labels | 🌊 off-meta tidepool | Release process maturity | High — maintainer acknowledged |
| [#13620](https://github.com/openclaw/openclaw/issues/13620) Telegram media groups (albums) support | 🌊 off-meta tidepool | Channel feature parity | Medium — Telegram-specific |

**Prediction:** Quota alerts (#129327) and stability labels (#73537) are most likely to land soon; memory architecture (#60572) remains a multi-cycle effort.

## 7. User Feedback Summary — Real Pain Points
| Channel / Use Case | Pain Point | Representative Issue |
|--------------------|------------|----------------------|
| **Family/business assistant (Telegram, cron, HA)** | No release stability labels; can’t gauge upgrade risk | [#73537](https://github.com/openclaw/openclaw/issues/73537) |
| **Long-running gateway (macOS)** | 2× heap growth in 12 h → cron OOM → silent failure | [#87109](https://github.com/openclaw/openclaw/issues/87109) |
| **WebChat users** | Image attachments broken (`image_0` ref) | [#103198](https://github.com/openclaw/openclaw/issues/103198) |
| **Telegram power users** | Duplicate messages, sessions stuck 15 min post-delivery | [#126090](https://github.com/openclaw/openclaw/issues/126090), [#131561](https://github.com/openclaw/openclaw/issues/131561) |
| **Slack/LINE/Feishu** | Delayed/dropped inbound, auth inheritance breaks | [#90240](https://github.com/openclaw/openclaw/issues/90240), [#97435](https://github.com/openclaw/openclaw/issues/97435), [#131688](https://github.com/openclaw/openclaw/issues/131688) |
| **Plugin/skill authors** | Workspace hooks rejected; `after_tool_call` receives flattened string | [#72370](https://github.com/openclaw/openclaw/issues/72370), [#102961](https://github.com/openclaw/openclaw/issues/102961) |

**Sentiment:** Grateful for the product (“genuinely part of daily workflow”) but **frustrated by silent failures and lack of operational visibility**. Users effectively beta-test in production.

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention
| Issue | Age | Rating | Blocked On |
|-------|-----|--------|------------|
| [#60572](https://github.com/openclaw/openclaw/issues/60572) Multi-Slot Memory Architecture | 148 days | 🦞 diamond lobster | Product decision + maintainer review |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) Production-readiness labels | 122 days | 🌊 off-meta tidepool | Maintainer decision |
| [#72370](https://github.com/openclaw/openclaw/issues/72370) Workspace hooks rejected (hot-reload destroys context) | 124 days | 🦞 diamond lobster | Maintainer review |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway heap leak + cron silent fail | 93 days | 🦪 silver shellfish | Root-cause analysis (macOS-specific?) |
| [#68232](https://github.com/openclaw/openclaw/issues/68232) Config edits restart Telegram channel, lose in-memory state | 133 days | 🦞 diamond lobster | Architecture decision on hot-reload scope |
| [#103198](https://github.com/openclaw/openclaw/issues/103198) WebChat image path mapping | 49 days | 🦞 diamond lobster | Media pipeline fix |
| [#98702](https://github.com/openclaw/openclaw/issues/98702) OAuth inheritance failure on responses transport | 58 days | 🦪 silver shellfish | Auth flow review |

**Common thread:** All carry `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` labels. The maintainer bottleneck is the primary velocity constraint.

---

### Health Indicators
| Metric | Value | Trend |
|--------|-------|-------|
| Open P1 bugs | ≥10 | ⬆️ Rising |
| PR merge rate (24h) | 186 | 🟢 High |
| Maintainer-review queue | 20+ issues | 🟡 Congested |
| Release cadence | Beta candidate only | ⏸️ Paused |
| Silent-data-loss reports | 5+ active | 🔴 Critical |

**Bottom line:** OpenClaw is shipping code fast but accumulating **user-visible reliability debt** faster than maintainers can triage. The next stable release will likely hinge on clearing the P1 session-state/message-loss cluster rather than new features.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal Assistant Open-Source Ecosystem (2026-08-28)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem is **fragmented but highly active**, with 10 of 12 tracked projects showing significant development velocity in the past 24 hours. A clear bifurcation exists: **core runtime projects** (OpenClaw, Hermes Agent, IronClaw, ZeroClaw, CoPaw) are in aggressive stabilization phases—shipping patches, fixing session-state bugs, and hardening provider integrations—while **specialized/derivative projects** (NanoBot, NanoClaw, PicoClaw, LobsterAI, Moltis) focus on UX polish, installer robustness, and niche protocol support. No project has reached "1.0" maturity; all operate in pre-1.0 or beta cycles with frequent breaking changes. The dominant architectural pattern is **multi-channel gateway + pluggable provider runtime + persistent session/memory layer**, but implementation approaches diverge sharply on sandboxing, memory architecture, and extension models.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed (24h) | Release Status | Health Score |
|---------|--------------|-----------|---------------------|----------------|--------------|
| **OpenClaw** | 119 | 500 | 186 | `2026.9.1-beta.1` candidate | 🟡 **Caution** — High velocity but 10+ P1 bugs, maintainer bottleneck |
| **Hermes Agent** | 8 | 50 | 10+ | **v0.20.6 released** (525 PRs rolled up) | 🟢 **Healthy** — Stable patch cadence, active salvage of community fixes |
| **IronClaw** | 23 | 47 | 30 | Pre-release (Reborn rewrite) | 🟢 **Healthy** — Strong throughput, architectural momentum |
| **ZeroClaw** | 8 | 50 | 3 | v0.8.5 stabilization (freeze 8/4) | 🟢 **Healthy** — RFC-driven, principal contributor engagement |
| **CoPaw / QwenPaw** | 28 | 47 | 19 PRs + 23 issues | **v2.2.0-beta.2 released** | 🟢 **Healthy** — Sprint wrap-up, desktop + mobile expansion |
| **NanoClaw** | 4 | 50 | 4 | Pre-release (provider contract refactor) | 🟡 **Caution** — High core velocity, critical Discord bug unpatched |
| **NanoBot** | 1 | 27 | 11 | Pre-release (structural refactors) | 🟢 **Healthy** — Clean internal velocity, Windows/provider fixes landing |
| **LobsterAI** | 5 (stale-closed) | 12 | 12 | **2026.8.26 released** (installer hotfix) | 🟡 **Caution** — High merge rate but critical bugs archived without fix |
| **PicoClaw** | 1 active | 7 | 1 feature + 6 stale | None | 🟡 **Stable** — Low volume, community-driven UI fix pending |
| **Moltis** | 0 | 2 | 2 | None | 🟢 **Stable** — Mature, security/compat hardening only |
| **NullClaw** | 0 | 0 | 0 | None | ⚫ **Dormant** |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚫ **Dormant** |

**Health Score Key**: 🟢 Healthy = consistent releases/fixes, 🟡 Caution = velocity/debt mismatch, 🟡 Stable = low-risk maintenance, ⚫ Dormant = no recent activity.

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Largest scope & channel coverage**: 7+ messaging channels (Telegram, Slack, WhatsApp, Feishu, Teams, Discord, Matrix), Web UI, CLI, cron, Home Assistant — broadest "daily driver" deployment surface.
- **Highest raw velocity**: 500 PR touches/24h dwarfs peers; 186 merges shows merge capacity.
- **Deep session-state investment**: "Diamond lobster" (🦞) rated fixes on transcript integrity, compaction, migration — most mature session durability work in ecosystem.
- **Production user base**: Issues reflect real multi-hour uptime workloads (cron, family/business assistants), not synthetic benchmarks.

### Technical Approach Differences
| Dimension | OpenClaw | Peer Norm |
|-----------|----------|-----------|
| **Memory** | Single-slot + compaction; **Multi-Slot Architecture** (#60572) in design | NanoBot: explicit recall tool + pluggable backend; IronClaw: cumulative compaction barriers; ZeroClaw: model-window-ratio anchoring |
| **Provider Model** | Extensions (OpenAI, Codex, Anthropic, Claude CLI) + gateway routing | Hermes: dynamic schema rebuild at compaction; NanoClaw: wire-protocol-first contracts; ZeroClaw: A2A/OpenAI-compat first-class |
| **Sandboxing** | Process-isolated channels; plugin allowlists | IronClaw: per-user WASM sandbox (RFC); ZeroClaw: composable WASM Component Model; CoPaw: Tauri/WebView2 + Python sidecar |
| **Release Governance** | Beta candidates only; **stability labels requested** (#73537) | Hermes: monthly patch tags; CoPaw: beta series; LobsterAI: date-based hotfixes; ZeroClaw: milestone freeze |

### Community Size Comparison
- **Issue volume**: OpenClaw (119 updated) > CoPaw (28) > IronClaw (23) > others — **5–10× larger active issue surface**.
- **Maintainer bottleneck**: 20+ issues carry `needs-maintainer-review` — unique scale of triage congestion.
- **External contributors**: High (salvage PRs from community in Hermes, IronClaw, ZeroClaw), but OpenClaw's backlog age (93–148 days) suggests **review capacity is the primary constraint**, not contributor supply.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|------------|----------|----------------|
| **Session/Context Durability** | OpenClaw, Hermes, IronClaw, ZeroClaw, NanoBot | Compaction without data loss (OpenClaw #130096, Hermes #97063, IronClaw #7954, ZeroClaw #9535); transcript deduplication (OpenClaw #131711, #118185); cross-session memory (IronClaw #7276, ZeroClaw #6954) |
| **Provider Reliability & Portability** | All active projects | Non-OpenAI reasoning params (NanoBot #4429, OpenClaw #98702); auth inheritance/refresh (OpenClaw #98702, Hermes #87891, NanoClaw #3489); context-overflow recovery (ZeroClaw #10329, OpenClaw #130096) |
| **Multi-Channel Message Integrity** | OpenClaw, Hermes, NanoClaw, CoPaw, IronClaw | Duplicate delivery (OpenClaw #126090, CoPaw #5030); threading/reply routing (Hermes #97068, NanoClaw #3532); silent drop/timeout (OpenClaw #131561, CoPaw #5344) |
| **Memory/Token Economics** | OpenClaw, Hermes, IronClaw, ZeroClaw, CoPaw | Context reduction campaigns (Hermes #95681: −4.6K tok/call); prompt cache observability (CoPaw #7335); compaction triggers (ZeroClaw #9535, IronClaw #7824) |
| **Windows/Desktop Stability** | CoPaw, Hermes, IronClaw, NanoBot, PicoClaw | WebView2 crashes (CoPaw #6427); TLS/DPI resets (CoPaw #7298 → Python 3.13); installer engine blocks (Hermes #97072); `os.replace` permission errors (NanoBot #5382); workspace/skill root overlap (IronClaw #6590) |
| **Extension/Skill Sandbox Security** | OpenClaw, IronClaw, ZeroClaw, Moltis, NanoClaw | WASM runtime (IronClaw #7903, ZeroClaw #10076); plugin allowlist semantics (OpenClaw #123297, NanoClaw #3532); schema validation (Moltis #1232) |
| **Operational Observability** | OpenClaw, CoPaw, ZeroClaw, LobsterAI, Hermes | Quota alerts (OpenClaw #129327); health endpoints (ZeroClaw #10005); cache hit rates (CoPaw #7335); structured logging (Hermes #95681 infographic) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Signature |
|---------|------------------------|-------------|------------------------|
| **OpenClaw** | **Channel breadth + session durability** | Power users, families, small businesses running 24/7 assistants | Gateway-centric; channel bindings as first-class; SQLite session store; extension-based providers |
| **Hermes Agent** | **Stable patch cadence + salvage workflow** | Docker/hosted deployments, Bot Mode (Telegram/Teams/Keet) | Reborn architecture; dynamic tool schemas; compression barriers; skills guard |
| **IronClaw** | **Reborn rewrite: context barriers + WASM sandbox** | NEAR ecosystem, developers needing multi-tenant isolation | Cumulative compaction barriers; capability projection; per-user sandboxed executor (RFC) |
| **ZeroClaw** | **Formal RFC process + wire-protocol-first providers** | Platform builders, multi-provider orchestrators | Internal-agent provenance; A2A/OpenAI-compat contracts; composable WASM plugins; log rotation |
| **CoPaw / QwenPaw** | **Desktop-first (Tauri) + native mobile prototype** | End-users wanting cross-platform GUI; Chinese LLM ecosystem | Python 3.13 TLS stack; ReMe memory plugin; Expo/React Native mobile; per-session model overrides |
| **NanoClaw** | **Provider contract standardization + agent personality** | Multi-agent orchestrators, Discord-heavy workflows | Tone/speed inference; cross-session status lookup; core-owned provider contracts |
| **NanoBot** | **Session I/O off event loop + explicit memory recall** | CLI/TUI power users, Windows developers | Async `SessionManager`; `recall_memory` tool; immutable `ProviderAttempt`; unbounded concurrency default |
| **LobsterAI** | **Installer/UX polish + OpenClaw fork** | Chinese enterprise/desktop users | Silent upload-first builds; phone masking; model-list collapse; scheduled-task optimistic UI |
| **PicoClaw** | **Lightweight + IRC/Matrix niche** | Bridge/bot operators, embedded deployments | Go-based; IRCv3 reassembly needed; dynamic model override for sub-agents |
| **Moltis** | **Sandbox security + OpenAI schema compliance** | Security-sensitive, untrusted-code execution | Admin-only image validation; strict schema patching; Cargo-tested |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (Pre-1.0, High Velocity, Active Stabilization)
- **OpenClaw**, **Hermes Agent**, **IronClaw**, **ZeroClaw**, **CoPaw**, **NanoClaw**, **NanoBot**
- **Signals**: Daily PR merges >10; beta/patch releases monthly; P1 bugs actively fixed; RFCs driving architecture.
- **Risk**: All carry significant technical debt (session leaks, provider fragility, Windows gaps).

### Tier 2: Stabilizing / Niche (Lower Volume, Focused Fixes)
- **LobsterAI**, **PicoClaw**, **Moltis**
- **Signals**: Date-based or hotfix releases; community PRs merged; stale issue sweeps; security/compat focus.
- **Risk**: LobsterAI archiving critical bugs; PicoClaw maintainer bandwidth; Moltis zero community feedback loop.

### Tier 3: Dormant
- **NullClaw**, **ZeptoClaw** — No 24h activity; likely abandoned or private forks.

### Maturity Markers Observed
| Marker | Projects Exhibiting |
|--------|---------------------|
| **Tagged patch releases** | Hermes (v0.20.6), CoPaw (v2.2.0-beta.2), LobsterAI (2026.8.26) |
| **Milestone freeze / stabilization branch** | ZeroClaw (v0.8.5), NanoClaw (provider contracts), IronClaw (Reborn) |
| **RFC/design review process** | ZeroClaw (14-item queue), IronClaw (sandbox spike), OpenClaw (Multi-Slot) |
| **Security hardening PRs** | Moltis (#1222, #123

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-28

## 1. Today's Overview
NanoBot shows **high internal velocity** with 27 PRs updated in the last 24 hours (11 merged/closed, 16 open), but only 1 issue closed—indicating the team is executing on a large refactor/cleanup sprint rather than responding to external reports. The work clusters around **session persistence architecture**, **memory system redesign**, **TUI/Windows stability**, and **provider/MCP hardening**. No new release was cut today; the next version will likely bundle these structural changes.

## 2. Releases
**None today.** The last release predates this reporting window. Expect a minor/patch release once the open PRs around session I/O, memory recall, and provider fallbacks land.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Area | Summary |
|----|------|---------|
| [#5579](https://github.com/HKUDS/nanobot/pull/5579) | Session I/O (core) | Moved session persistence off the event loop; added cancellation-safe async `SessionManager` APIs (load/save/checkpoint/metadata/list) while preserving sync callers and third-party `SessionStore` contracts. |
| [#5578](https://github.com/HKUDS/nanobot/pull/5578) | TUI / Tests | Fixed flaky Windows clipboard-image test by waiting for the composer placeholder instead of a transient status-line message. |
| [#5577](https://github.com/HKUDS/nanobot/pull/5577) / [#5576](https://github.com/HKUDS/nanobot/pull/5576) | TUI / Herdr | Restored full alternate-screen TUI layout inside Herdr panes; reduced Herdr integration to pane-title management only; added regression coverage. |
| [#5574](https://github.com/HKUDS/nanobot/pull/5574) | Providers | Introduced immutable `ProviderAttempt` and explicit async resolution route (provider, model, transport, context window, continuation, compaction, retry) before execution; `AgentRunner` now drives a single source of truth. |
| [#5569](https://github.com/HKUDS/nanobot/pull/5569) | Agent / Tools | Extracted tool execution boundary (`nanobot.agent.tools.execution`)—preparation, batching, error observation, safety classification—out of `AgentRunner`. |
| [#5575](https://github.com/HKUDS/nanobot/pull/5575) | Memory | Removed `consolidationRatio` config and ratio-driven archive loop; now archives one deterministic old prefix while retaining latest 8 messages (extended to a user turn). |
| [#5572](https://github.com/HKUDS/nanobot/pull/5572) | Agent Concurrency | Defaulted inbound request concurrency to **unlimited** when `NANOBOT_MAX_CONCURRENT_REQUESTS` is unset; positive env values remain an explicit cap. |
| [#4346](https://github.com/HKUDS/nanobot/pull/4346) | Providers / Images | Fixed image-stripping fallback: stripped images now marked “unviewable” instead of leaking the original path in retry turns. |

**Theme:** Decoupling I/O from the event loop, making provider/tool execution explicit and testable, and simplifying memory consolidation logic.

## 4. Community Hot Topics
| Item | Type | Signals |
|------|------|---------|
| [#4429](https://github.com/HKUDS/nanobot/issues/4429) (closed) | Issue | **Custom provider thinking-style config** — users need non-OpenAI reasoning parameters (e.g., VolcEngine/Doubao `{"thinking":{"type":"enabled"}}`). Closed after PR work; suggests provider extensibility is a recurring ask. |
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) | PR (open, p1, conflict) | **Memory: explicit recall by default** — stops auto-injecting `MEMORY.md`, raw history, archived summaries into system prompt; routes to new `recall_memory` tool. High priority, conflicts indicate design churn. |
| [#5570](https://github.com/HKUDS/nanobot/pull/5570) | PR (open, p2, conflict) | **Pluggable memory backend** — defines `MemoryBackend` interface; makes `MemoryStore` first implementation. Foundation for #5571. |
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) | PR (open, p1) | **Session persistence off event loop** (duplicate of merged #5579? — same author, same day, different number). Watch for double-merge or rebase. |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | PR (open, p2, conflict) | **Surface model retry status in TUI/WebUI** — user-visible retry countdown/progress. UX polish for flaky provider calls. |

**Underlying needs:**  
- **Provider portability** beyond OpenAI-shaped APIs (thinking/reasoning, auth refresh).  
- **Predictable memory semantics**—users want control over what the model sees, not implicit context stuffing.  
- **Observability** for retries and provider fallbacks in the UI.

## 5. Bugs & Stability — Today’s Reports & Fixes
| Severity | Item | Status | Notes |
|----------|------|--------|-------|
| **High (data loss risk)** | [#5483](https://github.com/HKUDS/nanobot/pull/5483) — deleted sessions recreated by delayed messages | Open (p2) | Cross-session delivery/timeout messages now require existing session; metadata checked without creation. |
| **High (gateway crash)** | [#5382](https://github.com/HKUDS/nanobot/pull/5382) — `os.replace()` `WinError 5` on heartbeat save | Open (p2, conflict) | Retry logic added for transient Windows permission errors during `JsonlSessionStore.save()`. |
| **Medium (UX regression)** | [#5581](https://github.com/HKUDS/nanobot/pull/5581) — TUI cursor left in history on Windows exit | Open (p2) | Disables OpenTUI explicit-width probe on Windows by default; preserves user overrides. |
| **Medium (flaky test)** | [#5578](https://github.com/HKUDS/nanobot/pull/5578) — clipboard race on Windows | **Merged** | Waits for stable composer placeholder instead of shimmer message. |
| **Low (leak)** | [#4346](https://github.com/HKUDS/nanobot/pull/4346) — stripped image paths leaked in retry | **Merged** | Images now marked “unviewable” instead of exposing local paths. |

**Fix coverage:** 3/5 high/medium bugs have merged fixes today; the two open ones (#5483, #5382) are Windows-specific and have PRs in review.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Explicit memory recall (opt-in)** | #5571, #5570 | **High** — p1, active review, conflicts being resolved. |
| **Per-spawn model presets (allowlist)** | [#5561](https://github.com/HKUDS/nanobot/pull/5561) | **Medium** — resolves #4231; alternative to #4291; design agreed in review. |
| **Budgeted MCP tool schemas** | [#5388](https://github.com/HKUDS/nanobot/pull/5388) | **Medium** — opt-in byte budget, deterministic subset selection; open since 8/13. |
| **Auto-refresh expired OAuth tokens (MCP)** | [#5573](https://github.com/HKUDS/nanobot/pull/5573) | **High** — p2, persists expiry/issuer, survives restarts; 401-driven refresh. |
| **Custom provider thinking-style config** | #4429 (closed) | **Done** — implementation likely in provider refactor (#5574). |

## 7. User Feedback Summary
- **Windows users** continue to hit TUI quirks (cursor, clipboard, file locks) — fixes landing quickly but surface area is large.  
- **Multi-provider users** (VolcEngine, custom endpoints) need first-class support for non-standard reasoning/thinking params and OAuth flows.  
- **Power users** want **memory transparency** — stop stuffing everything into the prompt; give them a tool to recall.  
- **WebUI/TUI parity** — retry/status surfacing (#5504) shows demand for consistent observability across interfaces.  
- No loud dissatisfaction; issues are technical, not experiential — suggests a developer-heavy user base.

## 8. Backlog Watch — Stale but Important
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) — budgeted MCP schemas | 15 days open | Prevents context-window blowup from exploding MCP tool sets; opt-in, backward-compatible. |
| [#5382](https://github.com/HKUDS/nanobot/pull/5382) — Windows `os.replace` retry | 15 days open | Gateway crash on heartbeat; affects Windows operators. Conflict label suggests rebase needed. |
| [#5483](https://github.com/HKUDS/nanobot/pull/5483) — deleted session recreation | 6 days open | Data integrity; cross-session message handling. |
| [#4231](https://github.com/HKUDS/nanobot/issues/4231) (referenced by #5561) — spawn presets | ~2 months | Multi-model workflow enablement; PR #5561 is the agreed path. |
| [#4345](https://github.com/HKUDS/nanobot/issues/4345) (fixed by #4346) — image path leak | 74 days | Security/privacy; fixed but worth verifying no similar leaks elsewhere. |

---

**Health indicators:**  
- ✅ **Velocity**: 27 PR touches/day, 11 merged — strong.  
- ✅ **Bug fix rate**: Critical Windows/provider bugs addressed same-day.  
- ⚠️ **Review bottleneck**: Several p1/p2 PRs carry `conflict` label; may need maintainer arbitration.  
- 📦 **Release readiness**: Core refactors (session I/O, memory, provider attempts) are landing; a 0.x+1 or 1.x cut is imminent once open p1s merge.

*Data sourced from GitHub API snapshot for HKUDS/nanobot on 2026-08-28.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-28

## 1. Today's Overview
Hermes Agent released **v0.20.6** (v2026.8.27), a patch release bundling ~525 PRs since v0.20.5 into a stable tag for Docker images and fresh installs. The project shows **high velocity** with 50 PRs and 8 issues updated in 24 hours. Activity centers on **stability hardening**: fixing session-bricking bugs in vision/image handling, compression livelocks, gateway/platform integrations (Teams, Telegram, Feishu, Keet), and Windows install failures. A major **context-burden reduction campaign** (~4.6K tokens/call saved) is tracking merged schema/prompt optimizations. The codebase is in active "salvage mode" — maintainers are cherry-picking and merging community fixes from older PRs to close long-standing gaps.

## 2. Releases
### v0.20.6 (v2026.8.27) — Patch Release
- **Scope**: Rolls up ~525 PRs merged since v0.20.5 into a stable tagged release for downstream consumers (Docker, hosted deployments, fresh installs).
- **Breaking Changes**: None noted (patch release).
- **Migration Notes**: Standard upgrade; no config/schema migrations required.
- **Key Themes in Rollup**: Vision/image validation, compression reliability, gateway/platform fixes, skills guard relaxation, desktop locale materialization, auth hardening, context-token reduction.
- **Release Link**: [v2026.8.27](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.27)

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary |
|----|------|---------|
| [#97073](https://github.com/NousResearch/hermes-agent/pull/97073) | Compaction | **Merged**: Rebuild dynamic tool schemas at compaction boundary — fixes forever-sessions (Bot Mode) where frozen schemas caused drift. |
| [#97057](https://github.com/NousResearch/hermes-agent/pull/97057) | Vision/Tools | **Merged**: `image_generate` capability-gated dynamic schema (554 → 317 tok/call, **−43%**). Part of context-burden campaign [#95681](https://github.com/NousResearch/hermes-agent/issues/95681). |
| [#97064](https://github.com/NousResearch/hermes-agent/pull/97064) | Compression | **Open (critical fix)**: Stop summary stream when commit fence cancelled — addresses livelock [#96953](https://github.com/NousResearch/hermes-agent/issues/96953). |
| [#97063](https://github.com/NousResearch/hermes-agent/pull/97063) | Memory | **Open (critical fix)**: Forward checkpoint requirement to v2 providers — prevents silent data loss during compression. |
| [#97072](https://github.com/NousResearch/hermes-agent/pull/97072) | Install/Windows | **Open**: Windows installer rejects engine-blocked npm (11.10.0–11.16.x) and falls back to Hermes-managed toolchain. |

**Net Progress**: 10 PRs merged/closed today; majority are **salvage/fix PRs** targeting session-state risks (vision, compression, gateway, install). The context-reduction campaign [#95681](https://github.com/NousResearch/hermes-agent/issues/95681) has multiple merged entries.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#69078](https://github.com/NousResearch/hermes-agent/issues/69078) | Bug (xAI vision) | 14 | 0 | **Session permanently bricked** by xAI `Invalid PNG` 400 — survives restart; only fix is session deletion. Evades all recovery matchers. |
| [#60709](https://github.com/NousResearch/hermes-agent/issues/60709) | Bug (skills guard) | 3 | 1 | **False-positive CRITICAL/HIGH** blocks benign community skill installs; `--force` cannot override `dangerous` verdict. |
| [#96953](https://github.com/NousResearch/hermes-agent/issues/96953) | Bug (compression livelock) | 1 | 0 | **Gateway unresponsive ~30 min** after `/restart` on large sessions — compression commit-fence cancellation + hygiene retry livelock. |
| [#97079](https://github.com/NousResearch/hermes-agent/pull/97079) | PR (vision fix) | — | 0 | **Proactive corrupt/truncated image rejection** before embedding (salvages #53307 + #76896). Fixes [#76884](https://github.com/NousResearch/hermes-agent/issues/76884). |
| [#97078](https://github.com/NousResearch/hermes-agent/pull/97078) | PR (browser/CDP) | — | 0 | **CDP screenshot redaction** corrupts base64 (Fernet token pattern match) → provider 400. Salvages [#94142](https://github.com/NousResearch/hermes-agent/pull/94142). |

**Underlying Themes**:  
- **Session durability** is the top risk — multiple vectors (vision, compression, gateway) can permanently brick sessions.  
- **Community contribution friction**: skills guard over-blocking; salvage workflow indicates upstream review latency.  
- **Platform integrations** (Teams, Telegram, Feishu, Keet) have routing/reliability gaps affecting Bot Mode.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR | Impact |
|----------|-------|--------|--------|--------|
| **P1 — Session bricking** | [#69078](https://github.com/NousResearch/hermes-agent/issues/69078) xAI grok-4.5 `Invalid PNG` 400 bricks session permanently | Closed (but root cause?) | [#97079](https://github.com/NousResearch/hermes-agent/pull/97079) (proactive validation) | All API calls fail including plain-text; survives gateway restart; requires session deletion. |
| **P1 — Data loss risk** | [#97063](https://github.com/NousResearch/hermes-agent/pull/97063) Checkpoint requirement not forwarded to v2 memory providers | Open (fix PR) | [#97063](https://github.com/NousResearch/hermes-agent/pull/97063) | Silent compression proceed without durable checkpoint → potential history loss. |
| **P1 — Gateway hang** | [#96953](https://github.com/NousResearch/hermes-agent/issues/96953) Compression commit-fence + hygiene retry livelock | Open (fix PR) | [#97064](https://github.com/NousResearch/hermes-agent/pull/97064) | Gateway unresponsive ~30 min after `/restart` on large sessions. |
| **P2 — Vision poisoning** | [#76884](https://github.com/NousResearch/hermes-agent/issues/76884) Truncated raster image passes preprocessing → persistent Codex 400 | Closed | [#97079](https://github.com/NousResearch/hermes-agent/pull/97079) | Partially downloaded images embed in history; providers cannot decode. |
| **P2 — Bot Mode init failure** | [#89109](https://github.com/NousResearch/hermes-agent/issues/89109) "No LLM provider configured" in group chat | Open | — | Bot Mode unusable in Telegram groups despite config. |
| **P2 — Teams threading** | [#97068](https://github.com/NousResearch/hermes-agent/issues/97068) Thread mentions lose `replyToId`; cron deliveries miss thread | Open | — | Replies and proactive messages route to wrong context. |
| **P3 — Keet setup crash** | [#97065](https://github.com/NousResearch/hermes-agent/issues/97065) `TypeError: _n() missing required argument 'config'` | Open | — | Windows/Keet gateway setup wizard crashes. |
| **P3 — Windows install** | [#97072](https://github.com/NousResearch/hermes-agent/pull/97072) npm engine-blocked band kills `npm ci` mid-build | Open (fix PR) | [#97072](https://github.com/NousResearch/hermes-agent/pull/97072) | Install dies at `npm ci` with `EBADENGINE` on system Node 11.10.0–11.16.x. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Memory-refine optional skill** — LLM auto-extraction of stable user observations into `fact_store` | [#97080](https://github.com/NousResearch/hermes-agent/pull/97080) (new PR) | High — optional skill, low risk, aligns with long-term memory roadmap. |
| **German (de) desktop locale materialization** | [#92909](https://github.com/NousResearch/hermes-agent/pull/92909) | High — trusted materialization of community PR [#51762](https://github.com/NousResearch/hermes-agent/pull/51762); closes [#51217](https://github.com/NousResearch/hermes-agent/issues/51217). |
| **Kanban attachment preview in Desktop** | [#84299](https://github.com/NousResearch/hermes-agent/pull/84299), [#84297](https://github.com/NousResearch/hermes-agent/pull/84297) | Medium — UX polish, TDD-backed, but desktop-focused. |
| **Sidebar collapse/expand all shortcut (⌘⇧E)** | [#89487](https://github.com/NousResearch/hermes-agent/pull/89487) | Medium — small productivity win, ready. |
| **Context-burden reduction campaign** — schema/prompt diets across tools | [#95681](https://github.com/NousResearch/hermes-agent/issues/95681) | Ongoing — multiple merged PRs (#97057, #94599, etc.); infographic planned. |
| **Anthropic OAuth CSRF gap closure + cross-process refresh race fix** | [#87891](https://github.com/NousResearch/hermes-agent/pull/87891) | High — security/auth hardening; removes dashboard PKCE flow, uses external flow. |

**Prediction**: Next patch (v0.20.7) will likely include: memory-refine skill, German locale, Kanban preview, compression/memory checkpoint fixes, Windows install guard, and remaining salvage PRs for vision/CDP/Codex image handling.

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Sessions irreversibly bricked by image/provider errors** | [#69078](https://github.com/NousResearch/hermes-agent/issues/69078) (xAI), [#76884](https://github.com/NousResearch/hermes-agent/issues/76884) (Codex), [#57948](https://github.com/NousResearch/hermes-agent/issues/57948) (Alibaba/DashScope) — all require session deletion | High — 3+ distinct provider vectors in recent issues |
| **Skills guard blocks legitimate community skills** | [#60709](https://github.com/NousResearch/hermes-agent/issues/60709) — "widely-installed research skill" hard-blocked; `--force` ineffective | Medium — affects ecosystem growth |
| **Bot Mode unreliable in group chats** | [#89109](https://github.com/NousResearch/hermes-agent/issues/89109) (Telegram), [#97068](https://github.com/NousResearch/hermes-agent/issues/97068) (Teams threading) | Medium — platform adoption blocker |
| **Gateway hangs on large sessions after restart** | [#96953](https://github.com/NousResearch/hermes-agent/issues/96953) — 30 min unresponsive | Low frequency, high impact |
| **Windows install fails on common Node versions** | [#97072](https://github.com/NousResearch/hermes-agent/pull/97072) — npm 11.10–11.16 blocked mid-build | Medium — Windows onboarding friction |
| **Positive**: Context-token reduction visible | [#95681](https://github.com/NousResearch/hermes-agent/issues/95681) tracking ~4.6K tok/call savings across merged PRs | Campaign underway |

**Satisfaction Signal**: Users hit **hard blockers** (bricked sessions, blocked installs, broken Bot Mode) but see **rapid salvage response** — maintainers merging fixes same-day. Trust in stability is recovering but session durability remains the #1 concern.

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#89109](https://github.com/NousResearch/hermes-agent/issues/89109) Bot Mode: "No LLM provider configured" in group chat | 10 days | Blocks Telegram group usage; P2, needs-repro | Open, 1 comment |
| [#87891](https://github.com/NousResearch/hermes-agent/pull/87891) Anthropic OAuth CSRF gap, refresh race, API-key shadowing | 12 days | Security/auth boundary; removes dashboard PKCE, moves to external flow | Open, needs review |
| [#92122](https://github.com/NousResearch/hermes-agent/pull/92122) Linux `.desktop` Exec resolver for Hermes-capable interpreter | 6 days | Silent launch failure on uv/venv shims; affects Linux desktop UX | Open, needs-decision |
| [#93006](https://github.com/NousResearch/hermes-agent/pull/93006) Bot Mode: avoid false unread markers | 5 days | UX polish for Bot Mode; late gateway discovery edge cases | Open |
| [#84299](https://github.com/NousResearch/hermes-agent/pull/84299) / [#84297](https://github.com/NousResearch/hermes-agent/pull/84297) Kanban attachment preview (backend + desktop) | 16 days | Desktop productivity feature; TDD-backed, preview rail integration | Open |
| [#92909](https://github.com/NousResearch/hermes-agent/pull/92909) German desktop locale materialization | 5 days | i18n milestone; trusted community contribution blocked by fork workflow | Open |
| [#60709](https://github.com/NousResearch/hermes-agent/issues/60709) Skills guard false positives hard-block installs | 51 days | Ecosystem friction; `--force` bypass broken for `dangerous` verdict | Closed (but fix?) — needs guard rule tuning |

**Maintainer Action Items**:  
1. **Triage Bot Mode platform issues** ([#89109](https://github.com/NousResearch/hermes-agent/issues/89109), [#97068](https://github.com/NousResearch/hermes-agent/issues/97068)) — adoption blockers.  
2. **Review security/auth PR** [#87891](https://github.com/NousResearch/hermes-agent/pull/87891) — Anthropic OAuth hardening.  
3. **Decide on skills guard policy** [#60709](https://github.com/NousResearch/hermes-agent/issues/60709) — relax rules or add override path.  
4. **Merge desktop polish PRs** ([#92909](https://github.com/NousResearch/hermes-agent/pull/92909), [#84299](https://

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-28

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with 7 PRs processed in the last 24 hours, though only 1 represents new feature work (#3347 fixing UI lag). The remaining 6 are automated dependency updates closed as stale. Issue activity is low with 1 active feature request (#3287 for IRC long-message support) and 2 stale feature requests closed. No new releases were published. The project appears in a steady maintenance phase with community-driven UI improvements and routine dependency hygiene.

## 2. Releases
**No new releases** published today. The project continues on its current version.

## 3. Project Progress
### Merged/Closed PRs (6)
| PR | Type | Summary |
|----|------|---------|
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | **OPEN** (created today) | **Fix laggy web UI** — Addresses performance degradation when chat history grows large. Author tested on desktop/mobile Brave; targets `picoclaw-launcher`. Not a TS/Node expert — fix derived from analysis. |
| [#3336](https://github.com/sipeed/picoclaw/pull/3336) | CLOSED (stale) | Dependabot: `aws-sdk-go-v2/service/bedrockruntime` 1.53.3 → 1.57.1 |
| [#3335](https://github.com/sipeed/picoclaw/pull/3335) | CLOSED (stale) | Dependabot: `aws-sdk-go-v2/config` 1.32.25 → 1.32.35 |
| [#3334](https://github.com/sipeed/picoclaw/pull/3334) | CLOSED (stale) | Dependabot: `anthropic-sdk-go` 1.55.1 → 1.62.0 |
| [#3333](https://github.com/sipeed/picoclaw/pull/3333) | CLOSED (stale) | Dependabot: `mautrix` 0.27.0 → 0.29.0 (Matrix client library) |
| [#3332](https://github.com/sipeed/picoclaw/pull/3332) | CLOSED (stale) | Dependabot: `aws-sdk-go-v2` 1.42.0 → 1.43.4 |
| [#1555](https://github.com/sipeed/picoclaw/pull/1555) | CLOSED (updated today) | Legacy merge of PRs #1390, #1389, #1383, #1381 (from Mar 2024) — finally resolved |

**Key advancement:** The UI performance fix (#3347) is the only substantive code change; dependency PRs were closed without merging due to staleness, suggesting maintainers may be behind on dependency review.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) **IRC long-message support** | 8 comments, 1 open | **Protocol compliance** — IRCv3 splits >512B messages; PicoClaw treats fragments as separate messages. User needs reassembly for coherent conversation context. |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) **Dynamic model override in delegate/spawn/subagent** | 2 comments, closed stale | **Agent orchestration flexibility** — Users want per-call model selection for sub-agents, not static config. Indicates advanced multi-agent workflows. |
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) **Non-Whisper transcription models** | 2 comments, closed stale | **ASR modernization** — Request to support arbitrary `/audio/transcriptions` endpoints beyond legacy `*-whisper-*` models. |

**Analysis:** The IRC issue (#3287) has genuine engagement (8 comments) and addresses a standards-compliance gap. The two stale closures (#3330, #3331) reveal unmet demand for **model routing flexibility** and **ASR provider choice** — both point to users building complex, multi-model pipelines.

## 5. Bugs & Stability
**No new bug reports or crashes** in the last 24h. The sole active PR (#3347) fixes a **UI performance regression** (lag with large chat histories) — a stability-adjacent issue affecting usability on both desktop and mobile. No fix PRs exist for other issues.

## 6. Feature Requests & Roadmap Signals
| Request | Likelihood for Next Version | Rationale |
|---------|----------------------------|-----------|
| **IRC long-message reassembly** (#3287) | **High** | Active discussion, protocol-level fix, single coherent ask |
| **Dynamic model override for sub-agents** (#3330) | **Medium** | Strong use case (multi-agent orchestration), but closed stale — may need re-opening with maintainer buy-in |
| **Pluggable ASR providers** (#3331) | **Low-Medium** | Valid modernization need, but closed stale; depends on voice pipeline refactor priority |
| **Web UI virtualization/pagination** (implied by #3347) | **High** | Fix already authored; likely to merge soon given user impact |

## 7. User Feedback Summary
- **Pain point:** Web UI becomes unusably laggy with long conversations (#3347) — affects both desktop and mobile browsers.
- **Use case:** IRC power users need spec-compliant message handling for bots/bridges (#3287).
- **Advanced need:** Developers building agent swarms want runtime model selection per sub-task (#3330).
- **Dissatisfaction signal:** Two feature requests closed as "stale" within 2 weeks (#3330, #3331) suggest maintainer bandwidth constraints or triage gaps — users may feel unheard.

## 8. Backlog Watch
| Item | Status | Age | Why It Matters |
|------|--------|-----|----------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC long-message support | **OPEN** | 37 days | 8 comments, protocol compliance, no maintainer response yet |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) Fix laggy interface | **OPEN** | 1 day | Ready fix for visible UX regression; needs review/merge |
| [#3330](https://github.com/sipeed/picoclaw/issues/3330) Dynamic model override | CLOSED (stale) | 15 days | High-value for agent frameworks; consider re-opening with design discussion |
| [#3331](https://github.com/sipeed/picoclaw/issues/3331) Non-Whisper ASR | CLOSED (stale) | 15 days | Blocks modern STT providers; needs voice config redesign |
| Dependabot PRs (#3332–#3336) | CLOSED (stale) | 15 days | Security/maintenance debt; maintainers should schedule dependency review sprint |

**Maintainer action items:** Prioritize #3347 review/merge (immediate UX win), engage on #3287 (protocol fix), and establish a dependency update cadence to avoid stale-bot closures. The stale closures on #3330/#3331 warrant a triage pass — they represent genuine architectural needs for extensibility.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-28

## 1. Today's Overview
NanoClaw shows **high development velocity** with 50 PRs updated in the last 24 hours (46 open, 4 merged/closed), indicating active iteration on core provider infrastructure and CLI tooling. No new releases were cut today. The issue queue is small (4 active issues) but includes a **high-severity Discord regression** (#3456) breaking approval flows, plus architectural concerns around skill registry drift (#3579) and agent-group scoping gaps (#3532). Core-team PRs dominate, focusing on provider contract standardization (Codex, OpenCode, opencode), authentication hardening, and cross-session agent status lookup.

## 2. Releases
**No new releases today.** The project appears to be in a pre-release stabilization phase with heavy provider-layer refactoring underway.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3595](https://github.com/nanocoai/nanoclaw/pull/3595) | Fix (core-team) | Teach agents cross-session status lookup | Improves multi-session agent observability |
| [#3594](https://github.com/nanocoai/nanoclaw/pull/3594) | Fix | Account errored task turns as FAILED runs (fixes #3223) | Closes silent-failure gap in scheduled tasks |
| [#3593](https://github.com/nanocoai/nanoclaw/pull/3593) | Feature (core-team) | Map core tone/speed onto personality & service tier | Enables richer agent personality configuration |
| [#3592](https://github.com/nanocoai/nanoclaw/pull/3592) | Feature (core-team) | Core-owned tone/speed inference properties for groups | Foundation for per-group behavior tuning |

**Net signal:** The 4 closed PRs address **observability, reliability, and agent-personality foundations** — all core-platform work rather than channel/skill additions.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#3456](https://github.com/nanocoai/nanoclaw/issues/3456) — Discord approval buttons broken (5 comments, high severity) | **Highest engagement** — 5 comments in 5 days | **Silent data corruption**: `value` param on Discord buttons overwrites `custom_id`, causing wrong-option resolution + duplicate resends. Blocks Discord approval/ask_question cards entirely. |
| [#3532](https://github.com/nanocoai/nanoclaw/issues/3532) — `add-*` tool scoping misses later-created agents (1 comment) | Emerging architectural gap | **Dynamic agent-group lifecycle**: OneCLI gateway rules are static at creation time; new groups bypass intended tool restrictions. |
| [#3579](https://github.com/nanocoai/nanoclaw/issues/3579) — Registry `nc:copy` drift from channels/providers branches (0 comments, new) | Fresh architectural concern | **Supply-chain integrity**: No verification that skill install recipes match long-lived implementation branches. |
| [#3577](https://github.com/nanocoai/nanoclaw/issues/3577) — Auto-wire sole eligible agent group (0 comments, new) | UX friction reduction | **Onboarding friction**: Manual "Choose an agent" picker shown even when only one group exists. |

**Underlying theme:** Platform maturity gaps — **Discord channel reliability**, **dynamic policy enforcement**, **artifact provenance**, and **zero-config onboarding**.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#3456](https://github.com/nanocoai/nanoclaw/issues/3456) — Discord approval `value` param corrupts `custom_id`; silent wrong-option resolution + duplicate resend | Open, 5 days old | **No PR yet** — root cause identified in `src/channels/chat-sdk-bridge.ts` `ask_question` builder |
| **High** | [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) (fixed by [#3594](https://github.com/nanocoai/nanoclaw/pull/3594)) — Errored scheduled tasks dropped silently instead of marked FAILED | **Fixed & merged** | ✅ #3594 |
| **Medium** | [#2985](https://github.com/nanocoai/nanoclaw/issues/2985) (fixed by [#3463](https://github.com/nanocoai/nanoclaw/pull/3463)) — OpenCode provider misses final assistant text snapshot on race/omission | Open PR, 5 days old | ✅ #3463 (open, awaiting review) |
| **Medium** | [#2878](https://github.com/nanocoai/nanoclaw/issues/2878) — Codex reconnect succeeds with stale OneCLI secret; fails mid-conversation | Open PR, 2 months old | ✅ #2878 (open, core-team) |

**Stability note:** The Discord regression (#3456) is the only **user-facing blocker** without an active fix PR. Provider-side bugs have fix PRs but remain unmerged.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Provider contract standardization** (Codex, OpenCode, opencode, setup, host, runtime) | 6 core-team PRs ([#3588](https://github.com/nanocoai/nanoclaw/pull/3588), [#3591](https://github.com/nanocoai/nanoclaw/pull/3591), [#3584](https://github.com/nanocoai/nanoclaw/pull/3584), [#3586](https://github.com/nanocoai/nanoclaw/pull/3586), [#3585](https://github.com/nanocoai/nanoclaw/pull/3585), [#3581](https://github.com/nanocoai/nanoclaw/pull/3581)) | **Very High** — coordinated refactor across all provider types |
| **Structured Codex auth driver** (non-interactive, CI-friendly) | [#3489](https://github.com/nanocoai/nanoclaw/pull/3489) (core-team, 5 days old) | **High** — unblocks automated deployments |
| **Per-group model override for OpenCode** | [#2872](https://github.com/nanocoai/nanoclaw/pull/2872) (2 months old) | **Medium** — stalled but core-team tagged |
| **Auto-wire single agent group** | [#3577](https://github.com/nanocoai/nanoclaw/issues/3577) (new) | **Medium** — low-effort UX win |
| **Google Gemini provider** | [#2136](https://github.com/nanocoai/nanoclaw/pull/2136) (4 months old) | **Low** — long-open, no recent movement |
| **Custom OpenAI-compat endpoints for Codex/OpenCode** | [#1994](https://github.com/nanocoai/nanoclaw/pull/1994), [#1995](https://github.com/nanocoai/nanoclaw/pull/1995) (4 months old) | **Low** — superseded by provider contract work? |

**Roadmap prediction:** Next version will likely ship **provider contract v1** + **Codex auth overhaul** + **task-failure visibility**. Discord fix (#3456) should be hotfixed independently.

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Discord approvals unusable** | #3456: "every click resolves to the wrong option" | **Complete break** for Discord-based human-in-the-loop workflows |
| **Manual agent selection on single-group installs** | #3577: "requiring a manual click every single time" | **Onboarding friction** for simple deployments |
| **Tool scoping bypassed by new agents** | #3532: "new group gets the tool by default" | **Security/compliance risk** for orgs using `add-*` tool gating |
| **Silent task failures** | #3223 (fixed): "indistinguishable from one that ran and chose not to message" | **Observability gap** for scheduled/background agents |
| **Stale Codex tokens cause mid-chat crashes** | #2878: "Your access token could not be refreshed" | **Reliability hit** for long-running Codex sessions |

**Sentiment:** Users encounter **sharp edges on Discord and multi-agent policy enforcement**, while core provider work feels "internal" until contracts land.

## 8. Backlog Watch — Stale & Critical Items Needing Attention
| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|-------------------|
| [#3456](https://github.com/nanocoai/nanoclaw/issues/3456) — Discord `value`/`custom_id` corruption | 5 days | **User-facing critical bug**, no fix PR | Assign to channel-team; hotfix candidate |
| [#2878](https://github.com/nanocoai/nanoclaw/pull/2878) — Codex stale-token reconnect | 61 days | Core-team PR, solves recurring auth failure | Review/merge — unblocks Codex reliability |
| [#3463](https://github.com/nanocoai/nanoclaw/pull/3463) — OpenCode final-text race fix | 5 days | Fixes #2985, provider correctness | Review/merge — low risk, high value |
| [#2136](https://github.com/nanocoai/nanoclaw/pull/2136) — Google Gemini provider | 121 days | First-class Gemini support, community demand | Triage: revive or close with rationale |
| [#1994](https://github.com/nanocoai/nanoclaw/pull/1994) / [#1995](https://github.com/nanocoai/nanoclaw/pull/1995) — Custom OpenAI-compat endpoints | 126 days | Enables local/private LLM backends | Assess vs. new provider contract work |
| [#3579](https://github.com/nanocoai/nanoclaw/issues/3579) — Registry `nc:copy` drift | 1 day | **Supply-chain integrity** for skills | Design verification step (CI gate?) |

---

**Health Indicators**
- 🟢 **Velocity:** Very high (50 PR updates/24h)
- 🟡 **Release cadence:** None recently — likely waiting for provider contract merge
- 🔴 **Critical user bug:** 1 (Discord approvals) without fix PR
- 🟢 **Core-team engagement:** Strong — 15+ core-team PRs in flight
- 🟡 **Community PR latency:** Several 4-month-old PRs stagnant

**Next 7-day watch:** Discord hotfix (#3456), provider contract merge wave, Codex auth PR (#3489) landing.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-28

---

## 1. Today's Overview
IronClaw shows **very high development velocity** with 70 total updates in 24 hours (23 issues, 47 PRs). Thirty PRs were merged/closed and five issues resolved, indicating strong throughput on the "Reborn" architecture rewrite. The project is in active feature-development mode with zero releases today — focus remains on context/window management, memory systems, sandbox execution, and model-capability surfacing. Windows compatibility and Telegram UX regressions are the most visible user-facing bugs.

---

## 2. Releases
**No new releases today.** The project appears to be in a pre-release stabilization sprint for the Reborn stack.

---

## 3. Project Progress — Merged / Closed Today
| PR / Issue | Title | Area | Impact |
|------------|-------|------|--------|
| [#7968](https://github.com/nearai/ironclaw/pull/7968) | feat(mcp): normalize hosted tool results | MCP / Tools | Projects successful `CallToolResult` at protocol boundary; preserves text/JSON/resources, drops inline blobs |
| [#7963](https://github.com/nearai/ironclaw/pull/7963) | feat(github): decode repository file content | GitHub Extension | Decodes base64 at producer boundary; surfaces UTF-8 text, preserves metadata |
| [#7943](https://github.com/nearai/ironclaw/pull/7943) | ci: compile integration batches once | CI / Infra | Batches PR/merge-group lanes into single compile + nextest run; keeps main’s 5 coverage lanes |
| [#7944](https://github.com/nearai/ironclaw/pull/7944) | feat(gmail): surface semantic message output | Gmail Extension | Normalizes `format=full` → plain text + Markdown + semantic headers before durable writer |
| [#7954](https://github.com/nearai/ironclaw/pull/7954) | feat(threads): add cumulative compaction context barrier | Context / Reborn | Persists compaction outputs as cumulative barriers; folds newest + incremental deltas into next summarization |
| [#7907](https://github.com/nearai/ironclaw/pull/7907) | fix(memory): reject stale full-document rewrites | Memory / Safety | Adds `content_hash` read / `expected_content_hash` write; returns `conflict` on stale CAS |
| [#7776](https://github.com/nearai/ironclaw/issues/7776) | memory.write needs expected-version mode | Memory / Bug | **Closed** — CAS race fixed by #7907 |
| [#5671](https://github.com/nearai/ironclaw/issues/5671) | LeakDetector rebuilt per JSON string/key | Perf / Host Runtime | **Closed** — redundant redaction eliminated |
| [#4491](https://github.com/nearai/ironclaw/issues/4491) | Use Slack AI streaming for Reborn Slack progress | Slack / UX | **Closed** — stopgap feedback path implemented |
| [#3278](https://github.com/nearai/ironclaw/issues/3278) | Define MissionService integration with TurnCoordinator | Architecture / Reborn | **Closed** — tracker resolved |
| [#7920](https://github.com/nearai/ironclaw/issues/7920) | feat(skills): configure learned-skill extraction in Inference settings | Skills / UX | **Closed** — wiring exposed in UI |

**Net progress**: Context compaction barriers, memory safety, MCP/GitHub/Gmail producer normalization, CI batch compilation, and skill-learning UI wiring all landed today.

---

## 4. Community Hot Topics (Most Comments / Reactions)
| Item | Comments | Core Need |
|------|----------|-----------|
| [#7891](https://github.com/nearai/ironclaw/issues/7891) `perf(extensions): unprojected capability payloads + blind 24 KiB head-slice cost 14.3s of inference on two emails` | **10** | **Critical perf regression**: 49 KB raw MIME headers injected into prompt unasked, causing 19 s model turns. Requires projection/filtering at extension boundary. |
| [#7824](https://github.com/nearai/ironclaw/issues/7824) `Context projection: Pi-style compaction barrier, structured summaries, overflow recovery` | 4 | **Architectural debt**: Full thread history replayed every request → 4× token/cost vs baseline. Needs structured summarization + overflow recovery. |
| [#6590](https://github.com/nearai/ironclaw/issues/6590) `serve fails on Windows in local-dev and local-dev-yolo` | 3 | **Windows blocker**: Workspace root overlap with default skill root `/skills` prevents `ironclaw serve` on Windows. |
| [#7276](https://github.com/nearai/ironclaw/issues/7276) `Reborn: automatically promote useful conversation facts into durable cross-conversation memory` | 2 | **Product gap**: Users expect cross-conversation memory; currently only short-term transcript stored. |
| [#7903](https://github.com/nearai/ironclaw/issues/7903) `Decision spike: persistent per-user sandboxed executor behind the trusted host kernel` | 1 | **Architecture decision**: Move canonical loop into user sandbox vs. host-to-sandbox command plumbing for every new CLI. |

**Signal**: Performance (#7891, #7824) and Windows compatibility (#6590) are the loudest pain points. Cross-conversation memory (#7276) and sandbox architecture (#7903) are strategic product debates.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical (Prod Perf)** | [#7891](https://github.com/nearai/ironclaw/issues/7891) 49 KB raw MIME headers → 14.3 s inference on 2 emails | Open | — |
| **High (Platform Block)** | [#6590](https://github.com/nearai/ironclaw/issues/6590) `ironclaw serve` fails on Windows (workspace/skill root overlap) | Open | — |
| **Medium (UX Regression)** | [#7956](https://github.com/nearai/ironclaw/issues/7956) Telegram unpaired `/start` shows command inventory instead of pairing notice | Open | — |
| **Medium (UX Regression)** | [#7955](https://github.com/nearai/ironclaw/issues/7955) Telegram personal-account linking shows generic "Something went wrong" when admin hasn’t configured `api_id`/`api_hash` | Open | — |
| **Medium (Safety)** | [#7776](https://github.com/nearai/ironclaw/issues/7776) `memory.write` CAS race on full-document rewrites | **Closed** | [#7907](https://github.com/nearai/ironclaw/pull/7907) ✅ |
| **Medium (Perf)** | [#5671](https://github.com/nearai/ironclaw/issues/5671) `LeakDetector` rebuilt per JSON string/key during redaction | **Closed** | Fixed in redaction path |

**Note**: #7891 is the only open critical-severity item; a fix PR is expected imminently given the 10-comment discussion.

---

## 6. Feature Requests & Roadmap Signals
| Issue | Area | Likelihood for Next Version |
|-------|------|-----------------------------|
| [#7824](https://github.com/nearai/ironclaw/issues/7824) Pi-style compaction barrier & overflow recovery | Context / Reborn | **High** — #7954 (cumulative barriers) merged today; this is the next slice |
| [#7276](https://github.com/nearai/ironclaw/issues/7276) Cross-conversation memory promotion | Memory / Product | **High** — #7947–#7952 filed today as implementation slices |
| [#7903](https://github.com/nearai/ironclaw/issues/7903) Persistent per-user sandboxed executor | Sandbox / Architecture | **Medium** — spike PR [#7908](https://github.com/nearai/ironclaw/pull/7908) open, XL scope |
| [#7969](https://github.com/nearai/ironclaw/issues/7969) / [#7970](https://github.com/nearai/ironclaw/issues/7970) / [#7971](https://github.com/nearai/ironclaw/issues/7971) NEAR AI model capabilities surfacing in UI | Model Discovery / WebUI | **High** — three coordinated issues filed today by same author; backend work likely underway |
| [#7960](https://github.com/nearai/ironclaw/issues/7960) Enforce HTML complexity during Gmail DOM construction | Gmail / Safety | **Medium** — bounds-checking before `htmd` allocation |
| [#7953](https://github.com/nearai/ironclaw/issues/7953) Learning observability & evaluation gates | Learning / Ops | **Medium** — part of #7276 decomposition |

**Prediction**: Next version will ship cumulative context barriers (#7954 follow-up), memory admission/promotion pipeline (#7947–#7952), NEAR AI capability tags in WebUI, and Gmail HTML hardening. Sandbox executor spike (#7908) may land behind a flag.

---

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Unusable latency on email tasks** | #7891: “19.7-second turn, 19.2 s model inference” from raw MIME headers | Power users / automation workflows blocked |
| **Windows developers cannot run locally** | #6590: `ironclaw serve` fails in both dev profiles | Entire Windows contributor base blocked |
| **Telegram onboarding broken** | #7955, #7956: generic errors, wrong first-message response | New Telegram users see confusing UX |
| **No cross-conversation memory** | #7276: “users expecting information… to be available in later conversations” | Core product expectation unmet |
| **Model capabilities invisible** | #7969, #7970, #7971: “cannot tell whether a model accepts text only, accepts image input, or produces images” | Model selection guesswork |

**Satisfaction**: High engagement on Reborn architecture (many XL PRs), but user-facing regressions on Windows/Telegram and a critical perf bug on email suggest **beta-quality experience** for non-Linux, non-core paths.

---

## 8. Backlog Watch — Stale / High-Value Items Needing Attention
| Item | Age | Why It Matters | Current State |
|------|-----|----------------|---------------|
| [#6590](https://github.com/nearai/ironclaw/issues/6590) Windows serve fails | 36 days | Blocks all Windows dev/local usage | Open, 3 comments, no PR linked |
| [#7276](https://github.com/nearai/ironclaw/issues/7276) Cross-conversation memory | 22 days | Core product differentiator | Open, 2 comments, **7 implementation issues filed today** (#7947–#7953) |
| [#7824](https://github.com/nearai/ironclaw/issues/7824) Context projection / compaction | 6 days | 4× token cost vs baseline | Open, 4 comments, #7954 (barriers) merged |
| [#7891](https://github.com/nearai/ironclaw/issues/7891) Extension payload perf | 3 days | 14 s inference waste per email pair | Open, **10 comments**,

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-28

## 1. Today's Overview
LobsterAI shipped a patch release (2026.8.26) and merged **12 PRs** in the last 24 hours, all of which are now closed. The team also performed a **stale-issue sweep**, closing 5 issues dating back to March 2026 with no recent activity. Current velocity is high on the release branch (2026.8.24 line), focusing on installer hardening, UI polish (phone masking, model-list collapse), and test coverage for OpenClaw memory modules. No open issues or PRs remain from today’s batch — the backlog is effectively cleared for this cycle.

## 2. Releases
### **LobsterAI 2026.8.26** (published 2026-08-26)
| Change | PR | Author |
|--------|-----|--------|
| Fix installer: support silent upload-first web builds | [#2511](https://github.com/netease-youdao/LobsterAI/pull/2511) | @btc69m979y-dotcom |
| Fix installer: hide banner for dictbind silent package | [#2512](https://github.com/netease-youdao/LobsterAI/pull/2512) | @btc69m979y-dotcom |

**Notes**: Minor installer fixes only; no breaking changes or migration steps required. The version bump appears to be a hotfix on top of the 2026.8.24 release train.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Area | Summary |
|----|------|---------|
| [#2572](https://github.com/netease-youdao/LobsterAI/pull/2572) | renderer, build, docs, main, openclaw, cowork, windows, artifacts | **Release/2026.8.24** — main release branch merge |
| [#2568](https://github.com/netease-youdao/LobsterAI/pull/2568) | renderer, docs, main | **Feat**: collapse optional models into “More Models” section; add server-synced sidebar banner scheduling with version gating, local expiry, cache & refresh recovery |
| [#2566](https://github.com/netease-youdao/LobsterAI/pull/2566) | build, windows | **Fix**: Windows installer truncated-payload hardening |
| [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551) | renderer, main | **Fix**: app update preserves ready state |
| [#2565](https://github.com/netease-youdao/LobsterAI/pull/2565) | renderer | **Fix(library)**: optimize list query switching & reload state — snapshot caching, prevent flicker/pagination corruption, unify busy states, add refresh progress & a11y loading, add query-load-phase tests |
| [#2571](https://github.com/netease-youdao/LobsterAI/pull/2571) / [#2569](https://github.com/netease-youdao/LobsterAI/pull/2569) / [#2570](https://github.com/netease-youdao/LobsterAI/pull/2570) | renderer | **Fix(account)**: phone nickname masking (136****7834), resolve merge conflicts, replace real phone test data with synthetic fixtures |
| [#2567](https://github.com/netease-youdao/LobsterAI/pull/2567) | renderer | **Fix**: 2026.8.24 miscellaneous fixes |
| [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) | (stale) | **Fix(scheduled tasks)**: add “Run Now” optimistic UI feedback, Gateway state sync, right-click menu polish |
| [#1165](https://github.com/netease-youdao/LobsterAI/pull/1165) | (stale) | **Test**: 75 Vitest unit tests for `openclawMemoryFile` & `openclawLocalTimeContextPrompt` (was 0% coverage) |
| [#1166](https://github.com/netease-youdao/LobsterAI/pull/1166) | (stale) | **Fix(agent)**: prevent duplicate custom agent names on create |

**Net advancement**: Installer robustness, model-list UX, scheduled-task responsiveness, OpenClaw test coverage, and agent-name dedup — all landed in a single day.

## 4. Community Hot Topics
All 5 issues updated today were **stale-closed** (originally filed 2026-03-31, closed 2026-08-27). No active discussion or reactions. The sweep suggests housekeeping rather than community demand.

| Issue | Comments | Reaction | Core Need |
|-------|----------|----------|-----------|
| [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) | 2 | 0 | **Uninstall leaves process running** — user fears “backdoor”; indicates installer/process-lifecycle gap |
| [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) | 3 | 0 | **Force-sandbox in 3.31 can’t be disabled** — power-user config request |
| [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) | 2 | 0 | **Custom agent edit triggers gateway restart loop** — stability regression |
| [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) | 2 | 0 | **Multiple custom model providers** — feature request for multi-provider workflows |
| [#1162](https://github.com/netease-youdao/LobsterAI/issues/1162) | 2 | 0 | **Unit tests for OpenClaw memory/time modules** — addressed by [#1165](https://github.com/netease-youdao/LobsterAI/pull/1165) (merged today) |

**Takeaway**: The sandbox, uninstall cleanup, and gateway stability pain points remain unresolved in code (only stale-closed). Multi-provider support is a clear product-direction signal.

## 5. Bugs & Stability — Today’s Reports (all stale-closed)
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) — App continues running after Windows uninstall, can still send messages | Stale-closed | No |
| **High** | [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) — Editing custom agent icon triggers gateway restart loop | Stale-closed | No |
| **Medium** | [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) — Forced sandbox in 3.31 with no off switch | Stale-closed | No |
| **Low** | [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) — Single custom model provider limit (feature gap) | Stale-closed | No |

**Critical gap**: The two high-severity bugs (uninstall leak, gateway restart loop) have **no linked fix PRs** and were closed administratively. They likely persist in current builds.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Multiple custom model providers** | [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) | ★★★☆☆ — Clear multi-tenant need; would require settings/schema migration |
| **Sandbox toggle** | [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) | ★★☆☆☆ — Power-user only; may be intentionally locked down |
| **Scheduled-task optimistic UI** | [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) | ✅ **Already merged** (stale PR closed today) |
| **OpenClaw test coverage** | [#1162](https://github.com/netease-youdao/LobsterAI/issues/1162) | ✅ **Done** via [#1165](https://github.com/netease-youdao/LobsterAI/pull/1165) |
| **Agent-name dedup** | [#1166](https://github.com/netease-youdao/LobsterAI/pull/1166) | ✅ **Done** |

**Prediction**: Next minor will likely ship the model-provider multiplicity (high user value, low risk) and possibly a sandbox-config flag if enterprise demand grows.

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Uninstall doesn’t kill process** | [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) — “even can send Feishu messages after uninstall” | 😡 Strong distrust (“backdoor?”) |
| **Gateway instability on agent edit** | [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) — “repeated restart” | 😟 Frustration, blocks custom-agent workflow |
| **Forced sandbox regression** | [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) — “rolled back to 3.30” | 😞 Workflow disruption |
| **Multi-provider workflow** | [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) — “keep old while testing new” | 🙂 Constructive feature ask |

**Overall**: Trust erosion around process lifecycle & gateway stability; feature requests are pragmatic and workflow-oriented.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) — Uninstall leak | 5 months | **Security/privacy perception risk**; Windows users expect clean uninstall |
| [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) — Gateway restart loop | 5 months | **Core stability** for custom-agent feature; blocks power users |
| [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) — Sandbox toggle | 5 months | **Configurability** for advanced/enterprise users |
| [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) — Multi custom providers | 5 months | **Product differentiation**; aligns with multi-model trend |

**Recommendation**: Re-open or migrate the three high-impact bugs (#1173, #1180, #1179) to an active milestone. The stale-close without fix creates silent technical debt.

---

**Health Indicator**: 🟡 **Caution** — High merge velocity & test investment are positive, but critical bugs were archived without resolution. Next sprint should convert stale closures into actionable tickets.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-28

## 1. Today's Overview
Moltis saw moderate maintenance activity over the past 24 hours with **two pull requests merged**, both addressing security and compatibility fixes. No new issues were filed, no releases published, and the issue tracker remained quiet. The merged PRs focus on hardening the web sandbox image validation pipeline and ensuring tool schemas conform to OpenAI's strict schema requirements — indicating ongoing work to secure the execution environment and improve LLM tool-calling reliability. Project velocity appears steady but low-volume, consistent with a mature codebase in a maintenance-and-hardening phase.

## 2. Releases
No new releases published today.

## 3. Project Progress
### Merged Pull Requests (2)

| PR | Title | Author | Merged | Summary |
|----|-------|--------|--------|---------|
| [#1222](https://github.com/moltis-org/moltis/pull/1222) | **fix(web): validate sandbox image requests** | [tsauvajon](https://github.com/tsauvajon) | 2026-08-27 | Adds validation of image references and package names before container/Dockerfile use; restricts package checks and image builds to operator administrators; preserves full admin access for password, passkey, and trusted loopback identities. Includes Cargo test validation. |
| [#1232](https://github.com/moltis-org/moltis/pull/1232) | **fix(tools): make object schemas OpenAI-safe** | [IlyaBizyaev](https://github.com/IlyaBizyaev) | 2026-08-27 | Fixes OpenAI strict schema compliance by declaring webhook patch fields, representing MCP environment variables as fixed name/value entries, and patching map schemas to satisfy `additionalProperties: false` requirements — preventing Codex from sending null/empty values. |

**Net effect**: Strengthened sandbox security posture and restored reliable tool calling with OpenAI-compatible LLMs.

## 4. Community Hot Topics
No active issues or PRs with significant discussion (comments/reactions) in the last 24 hours. The two merged PRs had **zero comments and zero reactions**, suggesting either:
- Changes were reviewed asynchronously via CI/checks
- Contributors are core maintainers with high trust
- Low community engagement on internal hardening work

*Underlying need*: The silence on security/compatibility fixes may indicate these are perceived as routine maintenance rather than user-facing features — or that the contributor base is small and tightly coordinated.

## 5. Bugs & Stability
**No new bugs, crashes, or regressions reported today.**  
The two merged PRs *resolve* latent stability risks:
- **#1222** mitigates potential container escape or supply-chain risk via unvalidated image builds (Severity: **High** if exploited)
- **#1232** fixes a silent data-loss bug in tool calling where OpenAI strict mode caused null/empty payloads (Severity: **Medium** — breaks agent workflows silently)

Both fixes are now in `main` with tests passing.

## 6. Feature Requests & Roadmap Signals
No new feature requests filed today.  
**Inferred roadmap signals from merged work**:
- **Sandbox hardening** (#1222) suggests upcoming multi-tenant or untrusted-code execution scenarios
- **OpenAI schema compliance** (#1232) signals continued investment in **first-class OpenAI/Codex integration** — likely to support agentic workflows relying on `function calling` with strict schemas
- Expect follow-up PRs extending schema validation to other LLM providers (Anthropic, Gemini) and expanding admin-only sandbox controls

## 7. User Feedback Summary
No direct user feedback (issues, discussions, reactions) captured in the last 24h.  
**Indirect signals**:
- Zero friction on merging security/compatibility fixes → maintainers have high confidence in test coverage
- Absence of "works for me" or "broke my workflow" comments suggests either:
  - Changes are backward-compatible
  - Affected users are internal/early adopters
  - Feedback channels are underutilized

*Recommendation*: Add a `changelog` entry or release note for #1232 — developers upgrading OpenAI SDKs may hit this silently.

## 8. Backlog Watch
No stale issues or PRs flagged in the 24h window.  
**However**, the following patterns warrant periodic review:
- **Schema compatibility layer** (#1232) — monitor for similar issues with other providers (track via `tools` label)
- **Sandbox admin model** (#1222) — watch for RBAC expansion requests (e.g., team-scoped image policies)
- **Zero community interaction** on core fixes — consider adding `security`/`compatibility` labels and auto-notifying stakeholders

---

*Data source: GitHub API (moltis-org/moltis), 2026-08-28 00:00–23:59 UTC. All links point to live GitHub objects.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-28

---

## 1. Today's Overview

CoPaw (QwenPaw) shows **high velocity** with 47 PRs and 28 issues updated in the last 24 hours. The project released **v2.2.0-beta.2**, closed 23 issues (many long-standing), and has 28 open PRs in flight. Activity spans desktop stability (Tauri/WebView2), TLS stack modernization (Python 3.11→3.13), MCP protocol upgrades, provider model discovery fixes, test suite optimization, and a **native mobile client prototype** (Expo/React Native). The closure rate of older issues (some from April) suggests a sprint wrap-up or release hardening phase.

---

## 2. Releases

### v2.2.0-beta.2 (Beta)
**Release page:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.2

| Change | PR | Author |
|--------|-----|--------|
| Fix workspace startup failure cleanup to be cancellation-safe | [#7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) | @jinliyl |
| Boost console e2e coverage with 23 targeted cases + extended assertions | [#7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) | @yutai78786 |

**Notes:** Beta release; no breaking changes documented. Focus on stability (cancellation safety) and test coverage. Installation verification issue auto-created: [#7385](https://github.com/agentscope-ai/QwenPaw/issues/7385).

---

## 3. Project Progress — Merged/Closed PRs Today (19)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#7384](https://github.com/agentscope-ai/QwenPaw/pull/7384) | perf(app): shared A-tier deferred startup architecture | Startup performance | Merged |
| [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) | fix(ci): bump bundled Python to 3.13 — desktop pipeline + Docker base image | TLS/Infra | Merged |
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | fix(console): reject conflicting chat payloads | API/Concurrency | Merged |
| [#7348](https://github.com/agentscope-ai/QwenPaw/pull/7348) | chore: release notes for v2.2.0 | Release | Merged |
| [#7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) | fix(workspace): cancellation-safe startup cleanup | Workspace | Merged |
| [#7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) | test(e2e): boost console coverage | Testing | Merged |
| [#7335](https://github.com/agentscope-ai/QwenPaw/pull/7335) | Prompt cache hit rate observability (81% vs 96%) | Observability | Closed (issue) |
| [#6314](https://github.com/agentscope-ai/QwenPaw/pull/6314) | RemoteProtocolError: peer closed connection | Network/Transport | Closed (issue) |
| [#2814](https://github.com/agentscope-ai/QwenPaw/pull/2814) | Multi-agent chat history empty for running callee | Multi-agent | Closed (issue) |
| [#2777](https://github.com/agentscope-ai/QwenPaw/pull/2777) | GPT-5.x max_tokens parameter error | Providers | Closed (issue) |
| [#4237](https://github.com/agentscope-ai/QwenPaw/pull/4237) | In-chat observability for running shell commands | Shell/UX | Closed (issue) |
| [#6273](https://github.com/agentscope-ai/QwenPaw/pull/6273) | Unify task tracking & same-session concurrency | Concurrency | Closed (issue) |
| [#4011](https://github.com/agentscope-ai/QwenPaw/pull/4011) | Fallback model option | Providers | Closed (issue) |
| [#3751](https://github.com/agentscope-ai/QwenPaw/pull/3751) | Windows system tray icon | Desktop/UX | Closed (issue) |
| [#6427](https://github.com/agentscope-ai/QwenPaw/pull/6427) | WebView2 render crash ~7s after startup (v2.0.0+post.4) | Desktop/Stability | Closed (issue) |
| [#6124](https://github.com/agentscope-ai/QwenPaw/pull/6124) | Editable install memory leak: 36 ReMe loops, 48GB+ | Performance/Memory | Closed (issue) |
| [#5718](https://github.com/agentscope-ai/QwenPaw/pull/5718) | Auto-switch model on quota/error | Providers/UX | Closed (issue) |
| [#5030](https://github.com/agentscope-ai/QwenPaw/pull/5030) | WeChat channel duplicate replies in active mode | Channels | Closed (issue) |
| [#3883](https://github.com/agentscope-ai/QwenPaw/pull/3883) | Unit test support for Skills | Skills/Testing | Closed (issue) |

**Themes:** Desktop stability (WebView2, tray, Python 3.13), provider reliability (model discovery, fallback, GPT-5), concurrency/session semantics, memory/startup performance, and observability.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Type | Summary |
|------|----------|------|---------|
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | 9 | Bug | `RemoteProtocolError`: QwenPaw actively closes TLS connection (FIN sent); packet captures attached. **Closed today.** |
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | 8 | Bug | **OpenSSL 3.0.x (Python 3.11) TLS stack triggers carrier DPI resets** on desktop (Tauri) and Docker. **Fix merged:** Python 3.13 bump ([#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328)). |
| [#2814](https://github.com/agentscope-ai/QwenPaw/issues/2814) | 7 | Enhancement | Multi-agent chat history empty for running callee agent. **Closed.** |
| [#2777](https://github.com/agentscope-ai/QwenPaw/issues/2777) | 5 | Bug | GPT-5.x models fail due to hardcoded model list & `max_tokens` param. **Closed.** |
| [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | 5 | Feature | In-chat running-commands panel (see/kill/extend timeout). **Closed.** |
| [#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273) | 5 | Bug | Task tracking & same-session concurrency semantics differ by entry point. **Closed.** |
| [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) | 3 | Feature | Prompt cache hit rate observability: QwenPaw 81.68% vs OpenCode 96.02% — cost impact documented. **Closed.** |
| [#7380](https://github.com/agentscope-ai/QwenPaw/pull/7380) | — | Perf | Test suite: cut wall clock 41%, drop zero-value tests (9,997 unit in 57s). **Open.** |
| [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | — | Feature | **DO NOT MERGE** — Native mobile (Expo/React Native) for Android/iOS. **Open draft.** |

**Underlying needs:**  
- **Network resilience** — carrier-grade TLS, WebSocket health, connection lifecycle  
- **Desktop parity** — system tray, WebView2 stability, startup speed  
- **Provider maturity** — dynamic model discovery, fallback, per-session overrides  
- **Observability** — cache metrics, running command visibility, prompt cache optimization  
- **Mobile expansion** — native client prototype signals platform ambition

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) | PDF with ~10+ Chinese chars in filename fails: `UNKNOWN_AGENT_ERROR No connection adapters found for 'file://...'` | — |
| **High** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | OpenSSL 3.0.x TLS stack causes carrier DPI handshake resets (desktop + Docker) | **Merged:** [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) (Python 3.13) |
| **High** | [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) | WebView2 render crash ~7s post-startup (`msedge.dll+0x36c7f6d`, 0x80000003) — regression in v2.0.0+post.4 | **Closed** (root cause identified in post.3→post.4 frontend changes) |
| **High** | [#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124) | Editable install memory leak: 36 ReMe background loops consume 48GB+ RAM, never completes | **Closed** (ReMe downgrade + indexing fix) |
| **Medium** | [#7241](https://github.com/agentscope-ai/QwenPaw/issues/7241) | Codex agent locked to GPT-5.5; cannot use GPT-5.6 (Business tier workspace loading?) | — |
| **Medium** | [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) | `/api/console/chat` returns 200 but silently drops messages when agent busy | **Closed** ([#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) rejects conflicting payloads) |
| **Medium** | [#4217](https://github.com/agentscope-ai/QwenPaw/issues/4217) | Concurrent cron tasks with `share_session=true` produce empty replies | **Closed** |

**Note:** 23 issues closed today — many were stability bugs from v2.0.x era. The Python 3.13 bump (#7328) addresses the highest-impact infrastructure issue (TLS/DPI).

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Signals | Likelihood for Next Version |
|---------|----------|---------|----------------------------|
| **Native mobile client (Android/iOS)** | [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | Draft PR, Expo/React Native, reuses existing services | Low (experimental, "DO NOT MERGE") |
| **Per-session model overrides** | [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | Opt-in, disabled by default, under review | **High** — addresses #4011 fallback, #5718 auto-switch |
| **Fallback model option** | [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011) | Closed today; likely implemented via per-session overrides | **High** |
| **Auto-switch model on error/quota** | [#5718](https://github.com/agentscope-ai/QwenPaw/issues/5718) | Closed; user wants "error→auto-retry→success" loop | **Medium** — needs provider tooling |
| **Session grouping/folders in sidebar** | [#6287](https://github.com/agentscope-ai/QwenPaw/issues/6287), [#6507](https://github.com/agentscope-ai/QwenPaw/issues/6507), [#3187](https://github.com/agentscope-ai/QwenPaw/issues/3187) | Multiple requests: archive, filter sub-agent sessions, folders | **High** — UX debt, 3+ issues |
| **System tray (Windows)** | [#3751](https://github.com/agentscope-ai/QwenPaw/issues/3751), [#5622](https://github.com/agentscope-ai/QwenPaw/issues/5622) | Both closed today; implementation likely in v2.2 | **High** |
| **Prompt cache hit rate observability** | [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) | 81% vs 96% (OpenCode), cost impact quantified | **Medium** — telemetry first |
| **In-chat shell command panel (kill/extend)** | [#4237](https://github.com/agentscope-ai/QwenPaw/issues/4237) | Closed; reuses approval-card pipeline | **High** |
| **ReMe 0.4.1.9 integration + embedding recovery** | [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) | Pluginized deps, health checks, vector space consistency | **High** — memory subsystem |

**Predicted v2.2.0 stable scope:** Python 3.13/TLS fix, system tray, per-session models, session grouping, shell command panel, ReMe upgrade, startup perf (deferred architecture).

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Desktop instability on Windows** | WebView2 crash (#6427), no system tray (#3751, #5622), TLS/DPI resets (#7298) | High (3+ issues) |
| **Provider rigidity** | Hardcoded model lists (#2777), no fallback (#4011), no auto-switch (#5718), custom provider discovery broken (#7320) | High (4+ issues) |
| **Session/concurrency confusion** | Empty history for running sub-agents (#2814), silent message drop when busy (#5344), cron race (#4217), task tracking inconsistency (#6273) | High (5+ issues) |
| **Memory/startup bloat** | 48GB leak in editable install (#6124), slow test suite (#7380), plugin load sweep (#7383) | Medium |
| **Observability gaps** | No running command visibility (#4237, #4986), no cache hit rate (#7335), no loading indicator during "thinking" (#2829) | Medium |
| **Channel reliability** | WeChat duplicate replies (#5030), DingTalk stale streams (#7381) | Low-Medium |
| **File handling edge cases** | Chinese filename PDF failure (#7379) | Low (new) |

**Positive signals:** Users actively test betas, provide packet captures, compare cache metrics vs competitors (OpenCode), and contribute fixes (first-time contributors on #7267, #7299, #5992).

---

## 8. Backlog Watch — Long-Unanswered / Needs Maintainer Attention

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-28

## 1. Today's Overview
ZeroClaw shows **high velocity** with 50 PRs updated and 8 issues active in the last 24 hours. The project is in a **stabilization phase for v0.8.5** (freeze date 2026-08-04, target 2026-08-30) while simultaneously advancing three major RFCs: internal-agent provenance (#6954), wire-protocol-first provider onboarding (#8396), and composable WASM plugin runtime (#10076). No new release today; three PRs merged/closed including a critical provider bug fix and routine dependency updates. The maintainer decision queue (#8692) tracks 14 active design items awaiting resolution.

## 2. Releases
**No new releases today.** The v0.8.5 stabilization line (#9459) is tracking weekly cuts through August 30, 2026. Intake froze on August 4; the milestone page remains the source of truth for the full item list.

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#10329](https://github.com/zeroclaw-labs/zeroclaw/pull/10329) | **Bug Fix (S2)** | Fixed resilient wrapper truncation that shadowed loop-level context-overflow recovery for OpenAI-compatible providers. The wrapper now re-throws `ContextOverflow` so upstream recovery paths engage. | Restores automatic context-overflow handling; high-risk provider reliability fix. |
| [#10343](https://github.com/zeroclaw-labs/zeroclaw/pull/10343) | **Dependencies** | Bumped `rust-all` group (47 updates): `clap 4.6.1→4.6.6`, `tokio 1.52.3→1.53.0`, `reqwest 0.12.12→0.12.15`, `tracing 0.1.41→0.1.42`, etc. | Routine maintenance; keeps toolchain current. |
| *Third closed PR not in top-20 list* | — | Data shows 3 merged/closed total; the third may be a small fix or bot PR outside the displayed set. | — |

## 4. Community Hot Topics — Most Active Discussions
| Item | Comments | Core Need / Signal |
|------|----------|-------------------|
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) **RFC: Provenance, conversation binding, reply contract** | 16 | **Accepted RFC** — Defines `InternalPrincipal` envelope (Cron/PeerAgent/Daemon) and reply contract for internally initiated turns. Implementation slice #10425 opened today. |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) **RFC: Wire protocol first-class in provider construction** | 15 | **Needs maintainer review** — Aims to make A2A/OpenAI-compatible wire models explicit in provider config/onboarding, reducing adapter drift. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Tracker: Maintainer decision queue** | 14 | **Process bottleneck** — 14 RFCs/design issues await maintainer verdict (accept/reject/defer/split). Indicates review capacity constraint. |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) **RFC: Composable WASM plugin runtime** | 4 | **High-risk architecture** — Seeks typed extension points for HookHandlers, MemoryProviders, Skills via WASM Component Model. |
| [#10306](https://github.com/zeroclaw-labs/zeroclaw/issues/10306) **Task: Gate web/ TypeScript in CI** | 3 | **CI hygiene** — `web/` TypeScript errors (75) currently leak; wants `cargo web check` as canonical gate. |

**Underlying theme**: The project is formalizing its extension contracts (provenance, wire protocol, WASM) while clearing a backlog of maintainer decisions.

## 5. Bugs & Stability — Reported / Fixed Today
| Severity | Issue / PR | Status | Summary |
|----------|------------|--------|---------|
| **S2 (Degraded)** | [#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329) | **Closed / Fixed** | Resilient wrapper swallowed `ContextOverflow` for OpenAI-compatible providers, preventing loop-level recovery. Fix: wrapper re-throws. |
| **High** | [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) | Open (needs-author-action) | Corrupt images (truncated JPEG, bad PNG) pass header sniff but fail at provider. Fix: full decode validation via `image` crate. |
| **High** | [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) | Open (needs-author-action) | `RiskProfileConfig.allowed_tools`: empty list `[]` incorrectly meant “unrestricted” instead of “deny-all”. Three-state fix. |
| **High** | [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) | Open (needs-author-action) | `always_ask` prompts silently dropped in Full autonomy mode. Fix: consult `always_ask` before auto-approve. |
| **Medium** | [#10005](https://github.com/zeroclaw-labs/zeroclaw/pull/10005) | Open (needs-author-action) | `/health` reported channel `ok` before listener actually connected. Fix: base health on channel connection state. |
| **Medium** | [#10378](https://github.com/zeroclaw-labs/zeroclaw/pull/10378) | Open (needs-author-action) | ZeroCode config metadata not localizable. Fix: stable locale-independent identifiers for groups/sections. |
| **High** | [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) | Open (needs-author-action) | `git -C <path> <verb>` misclassified risk because parser read global option as subcommand. Fix: proper subcommand resolution. |

**Trend**: Provider resilience, config correctness, and channel health are the dominant stability themes. Several high-risk fixes await author action.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v0.8.5 / Next |
|--------|--------|------------------------------|
| **Internal-agent provenance & reply contract** | [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) + [#10425](https://github.com/zeroclaw-labs/zeroclaw/pull/10425) | **High** — Accepted RFC; first implementation slice opened today. |
| **Wire-protocol-first provider onboarding** | [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | **Medium** — Needs maintainer review; foundational for A2A/multi-provider. |
| **Composable WASM plugin runtime** | [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | **Low for v0.8.5** — High-risk, exploratory; likely post-stabilization. |
| **Run SOP as heartbeat** | [#10422](https://github.com/zeroclaw-labs/zeroclaw/issues/10422) | **Medium** — New today; small, deterministic UX improvement. |
| **Entry-count log rotation & multi-segment queries** | [#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) | **High** — Principal contributor; observability hardening. |
| **Telegram multi-message streaming mode** | [#8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561) | **Medium** — Parity with Discord/Matrix; needs author action. |
| **A2A outbound client (Phase 1)** | [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) | **High** — Distinguished contributor; implements RFC #9106 positions. |
| **Context compaction anchored to model window ratio** | [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | **High** — Principal contributor; replaces fixed 32k token budget. |
| **Multiple models per provider profile** | [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | **High** — Principal contributor; reduces credential duplication. |
| **Session ownership claim via SessionBackend contract** | [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) | **Medium** — Core runtime contract extraction; risk:high. |

**Prediction**: v0.8.5 will likely land log rotation (#10214), context compaction ratio (#9535), multi-model provider profiles (#9809), and the first provenance slice (#10425). A2A client (#9324) and Telegram streaming (#8561) are strong candidates if author actions complete.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Provider context-overflow handling broken** | #10329 (S2 bug) | OpenAI-compatible providers silently fail recovery; users see degraded behavior. |
| **Config ambiguity: empty list vs. omitted** | #9753, #9724 | Security policies misbehave (`[]` = deny-all not honored; `always_ask` ignored in Full autonomy). |
| **Channel health misleading** | #10005 | `/health` shows `ok` for never-connected channels; operators lack true visibility. |
| **Corrupt media crashes provider requests** | #9819 | Truncated/bad images pass validation but fail at provider; no local guard. |
| **TypeScript errors noise in CI** | #10306 | 75 misleading `tsc` errors on `master`; developers need correct gate (`cargo web check`). |
| **Desire for deterministic heartbeat** | #10422 | Users want to run SOP directly as heartbeat instead of `HEARTBEAT.md` indirection. |
| **Need localized ZeroCode config UI** | #10378 | Non-English operators see raw English section/group labels. |
| **Git risk classification false positives** | #9635 | `git -C /repo cmd` flagged incorrectly; blocks legitimate agent workflows. |

**Satisfaction signal**: Active RFC participation and principal contributor PRs indicate invested community; however, the maintainer decision queue backlog (#8692) suggests review latency frustration.

## 8. Backlog Watch — Stalled / Awaiting Maintainer Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Maintainer decision queue** | 56 days | 14 comments | **Process blocker** — 14 RFCs/design issues parked; clearing this unblocks architecture direction. |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) **Provenance RFC**

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*