# OpenClaw Ecosystem Digest 2026-08-29

> Issues: 207 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-29 06:48 UTC

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

# OpenClaw Project Digest — 2026-08-29

## 1. Today's Overview

OpenClaw shows **very high velocity** with 707 total items updated in the last 24 hours (207 issues, 500 PRs), indicating intense pre-release stabilization activity. The project released **v2026.9.1-beta.1** with critical Gateway restart recovery and config-write reliability fixes. The issue backlog reveals systemic pain points around **LLM error handling**, **process lifecycle management**, **prompt caching efficiency**, and **message delivery guarantees** — many tagged with high-severity ratings (🦞 diamond lobster, 🐚 platinum hermit). PR throughput suggests maintainers are actively triaging and merging fixes across channels, providers, and core infrastructure.

## 2. Releases

### v2026.9.1-beta.1 — *2026-09-01 beta cycle*

**Key Changes:**
- **Gateway restart recovery** (#130491): Preserves admitted turns across repeated Gateway restarts so restart-safe runs continue through each checkpoint and deliver their final response. *Contributor: @jalehman*
- **Gateway config-write reliability**: Keeps committed config writable during updates (details truncated in source).

**Migration Notes:** No breaking changes documented. This beta focuses on operational resilience — operators running long-lived assistant turns or frequent config reloads should test upgrade paths. The restart recovery is particularly relevant for deployments using managed Gateway services (systemd, Scheduled Tasks) where SIGUSR1/config-triggered restarts are common.

[Release Link](https://github.com/openclaw/openclaw/releases/tag/v2026.9.1-beta.1)

## 3. Project Progress — Merged/Closed PRs (190 today)

| Area | PR | Summary | Risk Tags |
|------|-----|---------|-----------|
| **Release/Automation** | [#128371](https://github.com/openclaw/openclaw/pull/128371) | Authorize focused beta evidence; unblocks beta.3 release | 🚨 automation, 🚨 security-boundary |
| **Gateway/Channels** | [#126424](https://github.com/openclaw/openclaw/pull/126424) | Keep conversation delivery within agent bindings across 12+ channels | 🚨 compatibility, 🚨 message-delivery, 🚨 security-boundary |
| **Security** | [#116489](https://github.com/openclaw/openclaw/pull/116489) | Require acknowledgement for install policy warnings (interactive CLI) | 🚨 compatibility, 🚨 security-boundary |
| **Windows Gateway** | [#119052](https://github.com/openclaw/openclaw/pull/119052) | Keep Windows gateway running after foreground window closes (fixes #91144) | 🚨 compatibility, 🚨 availability |
| **UI/Session Mgmt** | [#123535](https://github.com/openclaw/openclaw/pull/123535) | Avoid session catalog refresh storms in Web UI | 🚨 availability |
| **UI/Session Actions** | [#128995](https://github.com/openclaw/openclaw/pull/128995) | Full session actions (pin, mark unread, move) available from chat header | 🚨 availability |
| **Auto-reply/Commands** | [#125618](https://github.com/openclaw/openclaw/pull/125618) | Restore `/new` and `/reset` for channel-authorized users on non-owner-enforced channels | 🚨 compatibility, 🚨 session-state, 🚨 security-boundary |
| **CLI/Aliases** | [#128223](https://github.com/openclaw/openclaw/pull/128223) | Resolve alias targets from write snapshot (fixes #127618) | 🚨 compatibility |
| **Tool Search** | [#126618](https://github.com/openclaw/openclaw/pull/126618) | Wrap native `read`/`exec` in `tool_call` for Codex compatibility | 🚨 compatibility, 🚨 availability |
| **Sessions CLI** | [#124540](https://github.com/openclaw/openclaw/pull/124540) | Project `archived`/`archivedAt` in `openclaw sessions list --json` | 🚨 other |

**Pattern:** Heavy focus on **cross-channel consistency**, **Windows stability**, **security boundaries**, and **session-state correctness** — all prerequisites for a stable 2026.9 release.

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Comments | Reactions | Core Need |
|------|----------|-----------|-----------|
| [#117609](https://github.com/openclaw/openclaw/issues/117609) Transient LLM/socket errors not retried at embedded-assistant stage | 11 | 0 | **Reliability**: Long multi-step turns die on single transient error while trivial turns succeed — retry parity with channels/one-shot jobs needed |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process accumulation from hook/tool execution | 10 | 1 | **Stability**: Unreaped child processes (`openclaw-hooks`, `bash`, `codex`) degrade runtime over time; regression |
| [#95610](https://github.com/openclaw/openclaw/issues/95610) Prompt-cache prefix churn on OpenAI models | 10 | 1 | **Cost/Performance**: Per-turn dynamic injections defeat automatic prefix caching — no `cache_control` breakpoint support |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) Inbound channel turn silently dropped (zero-payload dispatch) | 8 | 1 | **Message Delivery**: Visible messages accepted then discarded — no retry, dead-letter, or user-visible failure |
| [#63990](https://github.com/openclaw/openclaw/issues/63990) Multi-index embedding memory with model-aware failover | 7 | 1 | **Architecture**: Single embedding model per agent blocks provider/model failover without vector corruption |
| [#132419](https://github.com/openclaw/openclaw/pull/132419) Browser worker targets crash Gateway | — | 0 | **Crash Fix**: Chrome shared/service worker targets without browser context ID terminate Gateway |

**Underlying Themes:** 
- **Error handling gaps** between channel layer (retries) and embedded-assistant layer (no retries)
- **Resource leaks** in long-running processes (zombies, unclosed workers)
- **Provider abstraction leaks** (OpenAI caching semantics not respected, DeepSeek DSML format changes)
- **Observability gaps** (silent drops, no dead-letter queues, invisible proactive messages)

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **Critical (P1, 🐚 platinum hermit)** | [#128593](https://github.com/openclaw/openclaw/issues/128593) | Gateway never stably ready with Discord on Windows — WS handshake starved, unbounded retry in `waitForGatewayReady` | ❌ |
| 🔴 **Critical (P1, 🐚 platinum hermit)** | [#115642](https://github.com/openclaw/openclaw/issues/115642) | Billing cooldown outlives outage (5hr fixed window); no probe-based recovery or manual reset | ❌ |
| 🔴 **Critical (P1, 🦞 diamond lobster)** | [#117609](https://github.com/openclaw/openclaw/issues/117609) | Transient LLM errors kill long turns at embedded-assistant stage (no retry) | ❌ |
| 🔴 **Critical (P1, 🦞 diamond lobster)** | [#112259](https://github.com/openclaw/openclaw/issues/112259) | Inbound channel messages silently dropped — zero payload, no agent run, no transcript | ❌ |
| 🔴 **Critical (P1, 🦐 gold shrimp)** | [#101445](https://github.com/openclaw/openclaw/issues/101445) | Embedded Ollama reports `payloads=0 tools=0` despite valid `tool_calls` in response | ❌ |
| 🟠 **High (P1, 🦞 diamond lobster)** | [#53008](https://github.com/openclaw/openclaw/issues/53008) | Memory compaction blocks main lane 10+ min — all inbound messages queued/unprocessed | ❌ |
| 🟠 **High (P2, 🦞 diamond lobster)** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Zombie process accumulation from hook/tool execution degrades runtime | ❌ |
| 🟠 **High (P2, 🦞 diamond lobster)** | [#95610](https://github.com/openclaw/openclaw/issues/95610) | Prompt-cache prefix churn defeats OpenAI automatic caching (cost/latency impact) | ❌ |
| 🟡 **Medium (P2, 🦞 diamond lobster)** | [#128967](https://github.com/openclaw/openclaw/issues/128967) | Session layer front-truncates large tool results to 64KiB silently (head discarded, no marker) | ❌ |
| 🟡 **Medium (P2, 🦞 diamond lobster)** | [#96534](https://github.com/openclaw/openclaw/issues/96534) | `memory_search` latches fallback embedding model after outage — only full restart recovers | ❌ |

**Note:** Several P1 bugs have **no linked fix PR** despite being open for weeks (e.g., #53008 since March). The `clawsweeper:recovery-stuck` tag appears on multiple critical issues.

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#63990](https://github.com/openclaw/openclaw/issues/63990) Multi-index embedding memory with model-aware failover | **High** — 7 comments, 🦪 rating, tagged `needs-product-decision`; architectural prerequisite for multi-provider resilience | Medium (requires schema migration) |
| [#54373](https://github.com/openclaw/openclaw/issues/54373) Context Provenance: source/volatility metadata for injected context | **Medium** — RFC status, 6 comments, `needs-product-decision`; addresses agent's inability to distinguish context age/source | Low (design phase) |
| [#55792](https://github.com/openclaw/openclaw/issues/55792) Catch up on missed inbound messages after gateway restart | **High** — Directly complements today's restart recovery release; 4 comments, 🐚 rating | **High** — logical next step after #130491 |
| [#83143](https://github.com/openclaw/openclaw/issues/83143) Skip HEARTBEAT.md prompt if file doesn't exist | **Low** — Simple UX fix, 3 comments, 2 👍; low complexity | **High** — trivial implementation |
| [#95279](https://github.com/openclaw/openclaw/issues/95279) Trusted inbound-decoration contract (strip/dedup without forgeable heuristics) | **Medium** — Security/integrity focus, 4 comments, 4 👍; affects all channel consumers | Medium (requires protocol change) |
| [#129599](https://github.com/openclaw/openclaw/issues/129599) Buzz channel policy and lifecycle extension boundaries | **Exploratory** — Contributor proposal, maintainer alignment pending | Low (pre-RFC) |

**Prediction:** The **missed-message catch-up** (#55792) and **HEARTBEAT.md guard** (#83143) are most likely for 2026.9.x given alignment with current restart-recovery work and low complexity. Multi-index embeddings (#63990) is a 2026.10+ candidate.

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Silent message loss** | #112259 (inbound dropped), #127948 (WhatsApp blank bubbles), #88757 (proactive messages invisible in context) | Users/operators cannot trust delivery; conversation desynchronization |
| **Long-turn fragility** | #117609 (transient errors kill multi-step turns), #101603 (dreaming narrative timeout discards fallback output) | Complex workflows unreliable; "works for simple, fails for real work" |
| **Windows as second-class** | #128593 (Gateway never ready with Discord), #119052 (foreground close kills gateway), #113219 (GBK encoding mangles output) | Windows operators blocked or degraded |
| **Provider-specific quirks leak** | #95610 (OpenAI cache churn), #128858 (DeepSeek doubled DSML), #107814 (gpt-5.3-codex-spark empty args), #89114 (Minimax thinking modes missing) | Model switching risky; each provider needs custom workarounds |
| **Observability gaps** | #130014 (sync realpathSync blocks event loop), #128967 (silent truncation), #89257 (backup verify exits 13, leaves corrupt .tmp) | Operators blind to failures until cascade |
| **Zombie/resource leaks** | #97616 (hook child processes), #115450 (hook timeout leaves children alive) | Degradation over hours/days; requires restarts |

**Sentiment:** Frustration with **silent failures** and **asymmetric reliability** (channels retry, embedded-assistant doesn't). Users value the project's ambition but demand **operational hardening** over new features.

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention

| Item | Age | Tags | Why It Matters |
|------|-----|------|----------------|
| [#53008](https://github.com/openclaw/openclaw/issues/53008) Memory compaction blocks main lane 10+ min | 5 months | P1, 🦞 diamond lobster, `clawsweeper-recovery-stuck`, `impact:message-loss`, `impact:session-state` | **Core availability bug** — blocks all inbound processing during compaction; no fix PR despite clear impact |
| [#63990](https://github.com/openclaw/openclaw/issues/63990) Multi-index embedding memory | 4.5 months | P3, 🌊 off-meta tidepool, `needs-product-decision` | **Architectural blocker** for multi-provider resilience; needs product decision to unblock design |
| [#54373](https://github.com/openclaw/openclaw/issues/54373) Context Provenance RFC | 5 months | P3, 🌊 off-meta tidepool, `needs-product-decision` | **Foundation for trustworthy context** — agents can't distinguish stale vs fresh injections |
| [#55792](https://github.com/openclaw/openclaw/issues/55792) Catch up on missed inbound messages | 5 months | P1, 🐚 platinum hermit, `needs-live-repro` | **

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent & Assistant Open-Source Ecosystem (2026-08-29)

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape is **highly fragmented but technically converging** on a shared set of hard problems: reliable long-running execution, multi-provider model abstraction, secure sandboxing, and observable agent lifecycles. Of 12 tracked projects, **7 show high velocity** (50+ PRs/24h), **2 are in active release cycles**, and **3 are dormant**. No single project dominates; instead, distinct architectural lineages are emerging around **gateway-centric** (OpenClaw, IronClaw, ZeroClaw), **desktop-first** (NanoBot, CoPaw, Hermes), **lightweight/embedded** (PicoClaw, NanoClaw), and **specialized** (LobsterAI, Moltis) designs. The ecosystem is transitioning from feature expansion to **operational hardening** — retries, timeouts, resource bounds, and cross-platform parity now outweigh novel capabilities in maintainer priority.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
|---------|--------------|-----------|----------------|---------------|
| **OpenClaw** | 207 | 500 | **v2026.9.1-beta.1** (2026-09-01) | 🟢 **Critical** — Highest velocity, beta release, but 5 P1 bugs w/o fix PRs |
| **NanoBot** | 8 | 17 | Imminent patch/minor | 🟢 **High** — Core fixes merged, architectural PRs in conflict |
| **Hermes Agent** | 13 | 50 | Latest v2026.8.18 | 🟡 **Elevated** — Security debt (80d), Windows regressions, rapid PR response |
| **PicoClaw** | 1 | 1 (merged) | None recent | 🟡 **Low** — Maintenance mode, single platform focus |
| **NanoClaw** | 2 | 50 | Rolling dev, setup-driver stack | 🟡 **High** — P0 startup hang, 6mo security debt (#216) |
| **NullClaw** | 0 | 0 | None | ⚫ **Dormant** |
| **IronClaw** | 14 | 28 | **v1.4.0** (2026-08-27) | 🟢 **High** — Release shipped, notification inbox live, compaction epic active |
| **LobsterAI** | 2 | 7 (merged) | **2026.8.28** (yesterday) | 🟢 **Stable** — Regular cadence, test coverage improving, stale PR backlog |
| **Moltis** | 1 | 0 | None | 🔴 **Critical** — Sandbox regression, zero PR velocity |
| **CoPaw (QwenPaw)** | 30 | 27 | **v2.2.0-beta.3** (today) | 🟢 **Critical** — Dual beta in 24h, MCP 2026-07-28 support, Hub confirmed |
| **ZeptoClaw** | 0 | 0 | None | ⚫ **Dormant** |
| **ZeroClaw** | 5 | 50 | Rolling master | 🟢 **High** — Security hardening, A2A tracker, RFC governance scaling |

*Health Score: 🟢 Active/Healthy | 🟡 Active with Risks | 🔴 Critical Gaps | ⚫ Inactive

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale of operations**: 707 items/24h dwarfs all others; only project with dedicated Gateway infrastructure managing 12+ channels
- **Multi-channel maturity**: Discord, Slack, WhatsApp, Telegram, Matrix, etc. — production-grade delivery guarantees (or active fixes for them)
- **Restart resilience**: v2026.9.1-beta.1 ships *preserved admitted turns across Gateway restarts* — a unique operational capability for long-lived assistant deployments
- **Security boundary enforcement**: Install policy acknowledgements, config-write atomicity, session-state isolation

### Technical Approach Differences
| Dimension | OpenClaw | Peers |
|-----------|----------|-------|
| **Architecture** | Gateway + embedded-assistant + channels (microkernel) | Monolithic (NanoBot, CoPaw, Hermes) or library-first (IronClaw, ZeroClaw) |
| **Model abstraction** | Provider-agnostic, but leaks caching semantics (OpenAI prefix churn) | NanoBot/CoPaw: explicit thinking-style config; ZeroClaw: sealed tool registry |
| **State persistence** | Session catalog, memory compaction (blocks main lane 10+ min) | NanoBot: off-event-loop I/O (merged today); IronClaw: Pi-style compaction barrier |
| **Windows support** | Second-class (Gateway never ready, GBK encoding) | NanoBot/CoPaw/Hermes: active Windows TUI/desktop fixes |

### Community Size Comparison
- **OpenClaw**: Largest visible contributor base (190 PRs merged *today*), high-severity tag taxonomy (🦞 diamond lobster, 🐚 platinum hermit), structured triage
- **CoPaw/ZeroClaw/IronClaw**: Comparable PR velocity but smaller issue backlogs; more RFC-driven governance
- **NanoBot/Hermes**: Core-team dominated, fewer external contributors
- **Others**: Single-maintainer or organizational (LobsterAI, PicoClaw)

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **LLM error handling & retry parity** | OpenClaw (#117609), NanoBot (#5585/#5504), CoPaw (#7298 TLS), Hermes (#89886 Anthropic 400) | Embedded-assistant layer lacks channel-grade retries; transient errors kill long turns; provider-specific error surfaces |
| **Prompt/cache efficiency** | OpenClaw (#95610 OpenAI prefix churn), CoPaw (#7335 81% vs 96% hit rate), IronClaw (#7824 4× token cost) | Dynamic injections defeat automatic prefix caching; no `cache_control` breakpoint support; observability gaps |
| **Resource bounds & leak prevention** | OpenClaw (#97616 zombies, #53008 compaction stall), NanoBot (#5579 event-loop I/O), CoPaw (#6124 48GB ReMe), ZeroClaw (#10262 RPC leaks) | Child process reaping, memory compaction off hot path, bounded tool results, connection cleanup on reload |
| **Cross-platform parity (Windows)** | OpenClaw (#128593, #119052), NanoBot (#5578, #5581), Hermes (#97702, #52556), CoPaw (#7298 OpenSSL) | WS handshake starvation, foreground-close kills gateway, TUI cursor reset, carrier DPI TLS breaks |
| **Secure sandboxing & isolation** | IronClaw (#7903 persistent sandbox), ZeroClaw (#9319 ScopedToolRegistry), Hermes (#70716 cgroup OOM), NanoClaw (#216 `/proc` bypass) | Tool registry scoping, gateway worker isolation, credential redaction, response body bounds |
| **Multi-provider interoperability** | ZeroClaw (#3566 A2A tracker), CoPaw (#7330 MCP 2026-07-28 dual-protocol), OpenClaw (#63990 multi-index embeddings) | Agent-to-agent protocol, MCP stateless spec, embedding model failover without vector corruption |
| **Observability & debugging** | OpenClaw (#112259 silent drops), NanoBot (#5585 retry status UI), IronClaw (#7985 misleading errors), CoPaw (#7335 cache metrics) | Dead-letter queues, retry countdown UI, structured error codes, cache hit rate dashboards |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Technical Architecture | Key Differentiator |
|---------|---------------|--------------|------------------------|---------------------|
| **OpenClaw** | **Gateway-centric multi-channel ops** | Self-hosted operators, enterprise deployments | Microkernel: Gateway + embedded-assistant + channel adapters | 12+ channel parity, restart-safe turns, install policy enforcement |
| **IronClaw** | **Context-window economics & notifications** | Cost-sensitive teams, NEAR AI ecosystem | Rust core, durable notification inbox, projection seams | Pi-style compaction, authoritative run outcomes in inbox |
| **ZeroClaw** | **Runtime security & interoperability** | Security-first deployments, edge mesh experimenters | Sealed `ScopedToolRegistry`, A2A protocol, household mesh RFC | Forward-compatible constraints, internal principal envelope |
| **CoPaw (QwenPaw)** | **Desktop UX & MCP modernization** | Power users, Chinese-market teams, B2B (Hub) | Electron + Python, dual-protocol MCP client, multi-tenant Hub | Stateless MCP 2026-07-28 with legacy fallback, `/btw` side-questions |
| **NanoBot** | **Terminal-first extensibility** | Developers, TUI enthusiasts, plugin authors | Async Python, pluggable memory backends, MCP Apps WebUI | Explicit recall tool, Herdr pane integration, design-system playground |
| **Hermes Agent** | **Desktop + group chat + gateway** | Nous Research community, multi-bot orchestration | TypeScript/Go, Bot Mode, ACP subprocess provider | Group chat session persistence, commit identity spoofing fix |
| **NanoClaw** | **Native app installation & local models** | GUI-first users, local LLM runners | Machine-driven NDJSON setup, container-side voice STT | Sovereign-by-default transcription, configurable turn ceiling (pending) |
| **LobsterAI** | **Collaborative UI & multi-provider routing** | Chinese enterprise, cowork scenarios | React/TypeScript, OpenClaw integration, artifact rendering | In-session Ctrl+F, plan model catalog, cowork memory extractor |
| **PicoClaw** | **QQ Channel adapter richness** | Chinese QQ Channel communities | Go, platform-specific adapter | Multimedia QQ support (emoji, voice, video, file) |
| **Moltis** | **Graph-based sandbox execution** | Visual workflow builders | Unknown (minimal data) | Incremental node graph editing in sandbox (currently broken) |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (Multiple PRs/day, Active Releases)
- **OpenClaw** — Pre-release stabilization sprint; 707 items/24h; beta cycle active
- **CoPaw** — Two betas in 24h; MCP protocol transition; Hub product confirmed
- **ZeroClaw** — 50 PRs; security hardening + RFC governance; A2A tracker hot
- **NanoClaw** — 50 PRs; 39-PR setup-driver stack; P0 startup hang blocks new users

### Tier 2: Stabilizing / Release-Cadenced (Weekly Releases, Focused Fixes)
- **IronClaw** — v1.4.0 shipped; notifications hardening wave; compaction epic (3 PRs open)
- **LobsterAI** — 4-day cadence; test coverage push; search UX delivered; stale PR backlog
- **NanoBot** — Core fixes merged (session I/O, Windows TUI); memory redesign in conflict
- **Hermes Agent** — High PR volume but 80d security debt; Windows regressions; rapid PR response

### Tier 3: Maintenance / Low Velocity
- **PicoClaw** — Single PR merged (QQ multimedia); stale steering-mode issue
- **Moltis** — One critical bug, zero PRs; sandbox regression unaddressed

### Tier 4: Dormant
- **NullClaw**, **ZeptoClaw** — No 24h activity

---

## 7. Trend Signals for AI Agent Developers

### 1. **Protocol Standardization is Accelerating**
- **MCP 2026-07-28 (stateless)** adopted by CoPaw (#7330) with legacy fallback — signals ecosystem convergence
- **A2A (Agent2Agent) v0.3.0+** tracked by ZeroClaw (#3566, 7👍) — cross-project interoperability becoming strategic
- **ACP (Agent Client Protocol)** supported by Hermes (#97735), NanoBot — subprocess provider model emerging

### 2. **Operational Hardening > New Features**
- Every active project fixing: retry logic, timeouts, resource bounds, connection cleanup, silent failure elimination
- **Restart resilience** is the new baseline: OpenClaw (Gateway), CoPaw (MCP session recovery), IronClaw (notification durability)
- **Observability** becoming first-class: retry countdowns (NanoBot), cache hit metrics (CoPaw), dead-letter demands (OpenClaw)

### 3. **Windows is a First-Class Target — Finally**
- 5/7 active projects have Windows-specific fixes *this week*: TUI cursor, OpenSSL, Gateway foreground-close, GBK encoding, DPI TLS
- **Action**: CI must include Windows runners; OpenSSL 3.2+ / boringssl vendoring needed for carrier DPI environments

### 4. **Context/Token Economics Drive Architecture**
- IronClaw's Pi-style compaction, OpenClaw's memory compaction stall, CoPaw's cache hit gap, NanoBot's explicit recall — all attacking the same problem
- **Projection seams** (IronClaw), **cache_control breakpoints** (OpenClaw), **reasoning replay bounds** (NanoBot) are converging patterns

### 5. **Security Boundaries Moving Down the Stack**
- ZeroClaw's sealed `ScopedToolRegistry`, OpenClaw's install policy ack, NanoClaw's `/proc` bypass, Hermes' secret redaction
- **Trend**: Capability-based tool access, credential redaction at persistence layer, response body bounds for compromised routers

### 6. **Multi-Tenant / B2B Features Emerging**
- CoPaw Hub (admin skills, RBAC, shared memory), IronClaw's scoped tenant BI, ZeroClaw's household edge mesh
- **Signal**: Open-source agents becoming platforms; community editions → enterprise upsell paths

### 7. **Local Model / Sovereign Execution Demand Rising**
- NanoClaw's container-side STT, CoPaw's editable install RAM fix, OpenClaw's embedded Ollama bugs, Hermes' local terminal executors
- **Gap**: Hardcoded turn ceilings (NanoClaw 30min), no config seams — power users blocked

---



---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-29

---

## 1. Today's Overview

NanoBot shows **high velocity** with 25 total GitHub items updated in the last 24 hours (8 issues, 17 PRs). The project is in active feature development and stabilization mode: 6 PRs were merged/closed today addressing session persistence performance, TUI Windows compatibility, cron job safety, and CLI ergonomics. Seven new issues opened by core contributors signal a focused push on MCP Apps WebUI support, provider retry visibility, context/history bounding, and memory architecture redesign. No release was cut today, but the volume of merged fixes suggests a patch or minor release is imminent.

---

## 2. Releases

**No new releases published today.**  
Latest release information not provided in the data snapshot.

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#5591](https://github.com/HKUDS/nanobot/pull/5591) | **fix(webui): preserve named pane groups** | WebUI | Prevents loss of user-defined pane group titles when reconciliation dissolves single-pane groups. |
| [#5560](https://github.com/HKUDS/nanobot/pull/5560) | **feat(cli): make `nanobot` the default agent command** | CLI | `nanobot` (bare) now launches the native terminal agent; root-level flags (`-m`, `--workspace`, etc.) work without `agent` subcommand. Improves UX parity with common CLI tools. |
| [#5579](https://github.com/HKUDS/nanobot/pull/5579) | **fix(session): move persistence off event loop** | Session / Performance | Makes `SessionManager` cache & persistence thread-safe; moves I/O to worker threads via `asyncio.to_thread`. Eliminates event-loop stalls during session save/checkpoint. |
| [#5578](https://github.com/HKUDS/nanobot/pull/5578) | **test(tui): avoid clipboard status race on Windows** | TUI / CI | Stabilizes flaky Windows clipboard-image test by waiting for composer placeholder instead of transient status line. |
| [#5577](https://github.com/HKUDS/nanobot/pull/5577) / [#5576](https://github.com/HKUDS/nanobot/pull/5576) | **fix(tui): preserve full UI in Herdr panes** | TUI / Integration | Herdr panes now use the same alternate-screen TUI layout; metadata reporting removed, reducing complexity and fixing rendering regressions. |
| [#4429](https://github.com/HKUDS/nanobot/issues/4429) | **feat: Allow custom provider to configure thinking style** | Providers | Closed (merged via unlinked PR). Enables non-OpenAI thinking parameters (e.g., VolcEngine/Doubao `{"thinking": {"type": "enabled"}}`). |

**Net effect:** Core session I/O is now off the hot path, CLI ergonomics improved, WebUI pane state more reliable, and Windows TUI stability hardened.

---

## 4. Community Hot Topics

| Item | Type | Comments | 👍 | Signal |
|------|------|----------|----|--------|
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Issue (enhancement) | 2 | 0 | **MCP Apps host support in WebUI** — Request to render MCP server-attached UIs (`io.modelcontextprotocol/ui`) inside WebUI, not just as model-facing artifacts. Indicates demand for richer tool-integrated UX. |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | PR (conflict) | — | 0 | **Surface model retry status to UI (NAN-34)** — Publishes sanitized retry lifecycle events to WebSocket clients; renders countdown in TUI/WebUI. Long-open (since 08-24) with conflicts, suggests priority for observability. |
| [#5571](https://github.com/HKUDS/nanobot/pull/5571) / [#5570](https://github.com/HKUDS/nanobot/pull/5570) | PRs (conflict) | — | 0 | **Memory redesign: explicit recall by default + pluggable backend** — Stops auto-injecting `MEMORY.md`/history into system prompt; introduces `recall_memory` tool and `MemoryBackend` interface. Architectural shift toward opt-in, extensible memory. |

**Underlying needs:**  
- **Observability** — Users want visibility into provider retries (latency, cost).  
- **Extensibility** — MCP Apps UI hosting and pluggable memory backends point to platform-as-a-framework aspirations.  
- **Control** — Explicit memory recall gives users/agents deterministic context management.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **P1** | [#5589](https://github.com/HKUDS/nanobot/issues/5589) → [#5589](https://github.com/HKUDS/nanobot/pull/5589) | **Discarded sessions reviving** — Pending/deferred messages publish to global bus during cleanup, resurrecting dead sessions. | PR #5589 (open, test included) |
| **P1** | [#5580](https://github.com/HKUDS/nanobot/pull/5580) / [#5579](https://github.com/HKUDS/nanobot/pull/5579) | **Session persistence blocks event loop** — I/O on hot path causes UI stalls. | PR #5579 merged; #5580 open (refined approach) |
| **P2** | [#5582](https://github.com/HKUDS/nanobot/issues/5582) → [#5587](https://github.com/HKUDS/nanobot/pull/5587) | **Cron jobs crash with runtime-context blocks** — Quote/@mention context attached to cron origin causes crash at add/fire time. | PR #5587 (open, sanitizes origin metadata) |
| **P2** | [#5592](https://github.com/HKUDS/nanobot/issues/5592) | **`edit_file` doc: match selectors mutually exclusive** — Docs imply `occurrence`, `line_hint`, `replace_all`, `expected_replacements` can combine; they cannot. | No PR yet |
| **P2** | [#5581](https://github.com/HKUDS/nanobot/pull/5581) | **TUI cursor position lost on Windows exit** — OpenTUI width probe resets cursor in embedded terminals. | PR #5581 (open, disables probe by default on Windows) |
| **P2** | [#5590](https://github.com/HKUDS/nanobot/pull/5590) | **Oversized JSON tool results lose root keys in preview** — First 1,200 chars may omit `ok`, `status`, `error`, etc. | PR #5590 (open, summarizes persisted JSON) |

**Stability note:** Two P1 issues have active fix PRs; session persistence regression is already merged. Cron crash fix (#5587) directly addresses #5582.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **MCP Apps host support in WebUI** | [#5251](https://github.com/HKUDS/nanobot/issues/5251) | Medium — requires WebUI rendering pipeline changes; design discussion started. |
| **Provider retry-wait events to channels** | [#5585](https://github.com/HKUDS/nanobot/issues/5585) | High — PR #5504 already implements UI surface; needs channel plumbing. |
| **Bound `reasoning_content`/`thinking_blocks` replay depth** | [#5584](https://github.com/HKUDS/nanobot/issues/5584) | High — token-cost control; low-risk config addition. |
| **Ephemeral runtime-context blocks (opt-out of history)** | [#5586](https://github.com/HKUDS/nanobot/issues/5586) | Medium — touches session replay logic; clear use case (quotes/@mentions). |
| **Retry hint on raised tool exceptions** | [#5583](https://github.com/HKUDS/nanobot/issues/5583) → [#5588](https://github.com/HKUDS/nanobot/pull/5588) | High — PR #5588 open with tests; aligns with existing error-result behavior. |
| **Explicit memory recall + pluggable backend** | [#5571](https://github.com/HKUDS/nanobot/pull/5571) / [#5570](https://github.com/HKUDS/nanobot/pull/5570) | Medium-High — architectural; conflicts indicate active debate, but direction is set. |
| **Budget model-visible MCP schemas** | [#5388](https://github.com/HKUDS/nanobot/pull/5388) | Low-Medium — opt-in byte budget; long-open (08-13), conflicts suggest complexity. |

**Prediction:** Next minor release will likely include retry-hint propagation (#5588), retry-event channels (#5585/#5504), reasoning replay bounds (#5584), and the session persistence fix (#5579). Memory redesign may land behind a flag.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **CLI friction** — Users expect `nanobot` (no subcommand) to launch agent. | PR #5560 merged to address this. |
| **WebUI pane state loss** — Custom pane group titles disappear after pane deletion. | PR #5591 merged. |
| **Windows TUI cursor/resizing issues** — Embedded terminals (Windows Terminal, ConEmu) misbehave on exit. | PR #5581, #5578 target this. |
| **Provider retry opacity** — No UI signal during model back-off; users perceive hangs. | Issue #5585, PR #5504. |
| **Cron reliability** — Reminders created from quoted/mentioned context crash. | Issue #5582, PR #5587. |
| **Tool result truncation** — Large JSON results hide success/error fields in model preview. | PR #5590. |
| **Memory bloat / lack of control** — Auto-injected history/MEMORY.md pollutes context; no pluggable storage. | PRs #5570, #5571. |

**Sentiment:** Constructive — core contributors filing well-scoped issues/PRs with tests. No external user complaints in this window.

---

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | 16 days | Open, **conflict** | MCP schema budgeting — token-cost control for agents with many MCP tools. Conflicts suggest rebase needed; design settled but integration blocked. |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | 5 days | Open, **conflict** | Retry status UI — key observability feature; conflicts with channel/event refactors. |
| [#5570](https://github.com/HKUDS/nanobot/pull/5570) / [#5571](https://github.com/HKUDS/nanobot/pull/5571) | 2 days | Open, **conflict** | Memory architecture — foundational change; conflicts with current memory implementation. Requires maintainer decision on merge order. |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | 24 days | Open | MCP Apps WebUI — strategic feature for tool-rich UX; no PR yet. |
| [#4429](https://github.com/HKUDS/nanobot/issues/4429) | 70 days | **Closed today** | Custom provider thinking style — finally resolved; good signal for provider extensibility. |

**Recommendation:** Prioritize rebasing/merging #5388, #5504, and the memory PR pair (#5570/#5571) to unblock the next release train. Assign a reviewer to #5251 to scope MCP Apps WebUI work.

---

*Digest generated from GitHub API data as of 2026-08-29 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-29

## 1. Today's Overview

Hermes Agent shows **high development velocity** with 50 PRs and 13 issues updated in the last 24 hours. The project is in active maintenance mode with no new releases today, but significant work across security hardening, Windows desktop regressions, session management, gateway reliability, and test quality. Critical security issues around secret redaction and authentication boundaries are being addressed, while multiple Windows desktop regressions (drag-and-drop, file uploads) indicate platform-specific instability. The PR-to-issue ratio (~4:1) suggests proactive feature work alongside bug fixes.

## 2. Releases

**No new releases today.** The latest version appears to be `v2026.8.18` (referenced in issue #89886), which introduced a regression with Anthropic-format API cache_control handling.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Component | Impact |
|----|-------|-----------|--------|
| [#89886](https://github.com/NousResearch/hermes-agent/issues/89886) | **CLOSED**: cache_control on tool_result.content[] rejected by Anthropic-format API | agent, provider/anthropic | **P0 Critical** — Fixed non-retryable 400 error killing tool-using sessions |
| [#93578](https://github.com/NousResearch/hermes-agent/pull/93578) | feat(memory): add hindsight_update_memory tool | plugins, tool/memory | **P3 Feature** — Completes Hindsight plugin write path for timeline facts |
| [#97738](https://github.com/NousResearch/hermes-agent/issues/97738) | **CLOSED**: scope probe - ignore | — | Cleanup |
| [#6](https://github.com/NousResearch/hermes-agent/pull/6) | Fix VM instance sharing across tasks | — | **Legacy PR closed** — VM isolation per task, 20-min TTL |

**Key advancement**: The Anthropic API regression (#89886) is now closed, unblocking tool-using sessions. The Hindsight memory plugin gains its missing write tool (#93578), enabling proper timeline-based recall.

## 4. Community Hot Topics

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|-----|-----------|
| [#43666](https://github.com/NousResearch/hermes-agent/issues/43666) | Issue | 6 | 0 | **Security boundary hardening** — 23 plaintext password hits in state.db; redaction gaps at persistence layer (tool outputs, compaction blocks, DB URIs) |
| [#96570](https://github.com/NousResearch/hermes-agent/issues/96570) | Issue | 6 | 0 | **Group chat session regression** — System prompt stored as null every turn, prefix cache always misses, rebuilding from scratch |
| [#70716](https://github.com/NousResearch/hermes-agent/issues/70716) | Issue | 5 | 0 | **Gateway stability** — Local terminal executors share gateway cgroup; memory-heavy workers can kill control plane via systemd-oomd |
| [#97702](https://github.com/NousResearch/hermes-agent/issues/97702) | Issue | 3 | 0 | **Windows desktop regression** — Drag-and-drop file attachment broken on Windows (worked previously, works on other machines) |
| [#97739](https://github.com/NousResearch/hermes-agent/pull/97739) | PR | — | 0 | **Gateway worker isolation** — Fixes #70716; isolates workers/queue under resource pressure, addresses health-guard false positives |

**Analysis**: Security (#43666) and gateway reliability (#70716/#97739) dominate technical discussion. Windows desktop regressions (#97702, #52556) signal platform-specific CI gaps. Group chat session management (#96570) reveals architectural fragility in state persistence.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Component | Fix PR | Status |
|----------|-------|-----------|--------|--------|
| **P0** | [#89886](https://github.com/NousResearch/hermes-agent/issues/89886) — Anthropic API 400 on tool_result cache_control | agent, provider/anthropic | — | **Closed** (fixed in v2026.8.18+) |
| **P2** | [#43666](https://github.com/NousResearch/hermes-agent/issues/43666) — Secret redaction gaps at persistence boundary | agent, auth, security | — | **Open** — Audit found 23 plaintext password leaks |
| **P2** | [#70716](https://github.com/NousResearch/hermes-agent/issues/70716) — Terminal executors share gateway cgroup, risk control plane OOM kill | gateway, tools, terminal | [#97739](https://github.com/NousResearch/hermes-agent/pull/97739) | **Open** — PR submitted, isolates workers |
| **P2** | [#97702](https://github.com/NousResearch/hermes-agent/issues/97702) — Windows drag-and-drop file attachment broken | desktop, platform/windows | — | **Open** — Regression, needs repro |
| **P2** | [#97716](https://github.com/NousResearch/hermes-agent/issues/97716) — `--resume` rejects truncated session IDs from `sessions list` | cli, sessions | [#97717](https://github.com/NousResearch/hermes-agent/pull/97717) | **Open** — PR submitted |
| **P2** | [#78374](https://github.com/NousResearch/hermes-agent/issues/78374) — Commit identity email resolves to real GitHub account (misattribution) | agent, config | — | **Open** — Identity spoofing risk |
| **P3** | [#96570](https://github.com/NousResearch/hermes-agent/issues/96570) — Group chat system prompt null every turn, cache misses | agent, sessions | — | **Open** — Needs repro |
| **P3** | [#52556](https://github.com/NousResearch/hermes-agent/issues/52556) — Desktop upload over remote gateway fails EACCES (read-only cwd) | gateway, desktop, sessions | — | **Open** — Container deployment blocker |
| **P3** | [#97742](https://github.com/NousResearch/hermes-agent/issues/97742) — Switching connection updates lastUsed not primary; backend stays on old connection | desktop | — | **Open** — Connection state desync |
| **P3** | [#97740](https://github.com/NousResearch/hermes-agent/issues/97740) — Bot Mode: sticky Stop holds invisible, `@all` without resume can't release | agent, group-chat | — | **Open** — Rooms go permanently silent |

**Critical pattern**: Multiple P2 issues have fix PRs already open (#70716→#97739, #97716→#97717), indicating rapid response. The secret redaction issue (#43666) remains the highest-risk open vulnerability.

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Gateway worker isolation & resource pressure queueing** | [#97739](https://github.com/NousResearch/hermes-agent/pull/97739) (PR) | **High** — Addresses P2 stability issue, already implemented |
| **LLM-generated session handoff with insight extraction** | [#97733](https://github.com/NousResearch/hermes-agent/pull/97733) (PR) | **High** — Solves context compaction durability gap |
| **`hermes update --merge-ref` for upstream ref merging** | [#97732](https://github.com/NousResearch/hermes-agent/pull/97732) (PR) | **Medium** — CLI enhancement, low risk |
| **Master switch to disable pre-agent auth fallback** | [#97736](https://github.com/NousResearch/hermes-agent/pull/97736) (PR) | **Medium** — Security hardening, operator control |
| **ACP subprocess provider (run ACP agents as models)** | [#97735](https://github.com/NousResearch/hermes-agent/pull/97735) (PR) | **Medium** — Extends provider ecosystem |
| **Bot Group Chats persist after Desktop closes** | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) (Issue) | **Medium** — Architectural change needed |
| **Persist collapsed Bot Mode roster sections** | [#97375](https://github.com/NousResearch/hermes-agent/pull/97375) (PR) | **High** — UX polish, already implemented |
| **MoA compact reference markers on gateway** | [#97737](https://github.com/NousResearch/hermes-agent/pull/97737) (PR) | **Low** — Display enhancement |

**Roadmap inference**: Next version will likely include gateway stability fixes (#97739), session handoff durability (#97733), and CLI improvements (#97732, #97717). Security hardening (auth fallback switch #97736, secret redaction #43666) remains a parallel track.

## 7. User Feedback Summary

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Windows desktop regressions** | Drag-and-drop broken (#97702), upload fails with EACCES on remote gateway (#52556) | Windows Desktop users, containerized deployments |
| **Session management friction** | Truncated session IDs break `--resume` (#97716), group chat system prompt rebuilds every turn (#96570) | CLI users, group chat operators |
| **Gateway instability under load** | Terminal workers can OOM-kill control plane (#70716), connection switching desync (#97742) | Self-hosted gateway operators |
| **Security opacity** | 23 plaintext secrets in state.db (#43666), commit identity misattribution (#78374) | Security-conscious deployments |
| **Bot Mode usability** | Invisible Stop holds cause permanent silence (#97740), roster state not persisted (#97375) | Multi-bot/group chat users |

**Positive signals**: Users actively file detailed repros (Windows version specifics, config snippets). PR authors respond same-day to issues. Indonesian i18n work (#92192, #93632) shows community expansion.

## 8. Backlog Watch — Stale High-Value Items

| Item | Age | Priority | Why It Matters |
|------|-----|----------|----------------|
| [#43666](https://github.com/NousResearch/hermes-agent/issues/43666) — Secret redaction gaps at persistence boundary | **80 days** (created 2026-06-10) | **P2 Security** | 23 plaintext password leaks in state.db; affects all persistent sessions. Audit by @nnnarvaez split from #43083. |
| [#52556](https://github.com/NousResearch/hermes-agent/issues/52556) — Desktop upload EACCES on remote gateway (read-only cwd) | **65 days** (created 2026-06-25) | **P3** | Blocks containerized deployments; 1 👍. Default cwd `/opt/hermes/.hermes` unwritable. |
| [#70716](https://github.com/NousResearch/hermes-agent/issues/70716) — Terminal executors share gateway cgroup | **36 days** (created 2026-07-24) | **P2** | Gateway stability risk; PR #97739 submitted today but needs review. |
| [#74636](https://github.com/NousResearch/hermes-agent/pull/74636) — Kanban: park parentless dependency waits | **30 days** (created 2026-07-30) | **P2** | Broad risk tags (session-state, compatibility, blast-broad); replaces source-AST asserts with behavioral tests. |
| [#78374](https://github.com/NousResearch/hermes-agent/issues/78374) — Commit identity email resolves to real GitHub account | **25 days** (created 2026-08-04) | **P2** | Identity spoofing; 1 👍. `hermes@nousresearch.com` registered to unrelated user `Rafa-Ross`. |

**Maintainer attention needed**: #43666 (security) and #70716 (stability) are the oldest high-severity items. #74636 PR has been open a month with broad risk tags — likely needs architectural review.

---

**Overall Health Assessment**: 🟡 **Active but with structural debt surfacing**. High velocity masks accumulating platform-specific regressions (Windows) and a critical security boundary issue (#43666) that's 80 days old. The gateway worker isolation PR (#97739) and session handoff feature (#97733) are promising signs of architectural investment. Recommend prioritizing #43666 resolution and Windows desktop CI investment before next release.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-29

## 1. Today's Overview
PicoClaw showed low but focused activity over the last 24 hours: one long-standing enhancement PR (#1349) was merged, adding richer QQ Channel attachment handling, while a single open feature issue (#3342) received a stale marker but no new discussion. No new releases were published. The project appears to be in a maintenance-and-incremental-improvement phase, with community attention split between messaging-platform integrations and core agent steering behavior.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
| PR | Title | Status | Key Changes |
|----|-------|--------|-------------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | `feat(qq): support parsing and replying to more attachment types` | **Merged** 2026-08-29 | • Parses QQ Channel emoji structures<br>• Handles incoming voice, image, video, file messages<br>• Supports replying with local attachments (upload-before-send)<br>• Prefers Markdown replies with fallback to plain text |

This PR expands the QQ Channel adapter from text-only to full multimedia support, a significant quality-of-life improvement for users on that platform.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [Issue #3342](https://github.com/sipeed/picoclaw/issues/3342) — Opt-in “after-turn” steering mode | 1 comment, 0 👍, marked **stale** (last update 2026-08-28) | Users want a non-interruptive way to queue follow-up messages while the agent is still processing a turn, instead of having the current turn aborted and the new message injected mid-stream. This signals a desire for more predictable, conversation-friendly agent control flow. |

## 5. Bugs & Stability
No bug reports, crashes, or regressions were filed or updated in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
- **After-turn message queuing** (#3342): The only active feature request. Given its “stale” label and low engagement, it is unlikely to land in the immediate next release unless a maintainer champions it. However, it addresses a core UX pain point (interrupted turns) and could be prioritized if steering redesign is on the roadmap.
- **QQ Channel multimedia** (#1349, now merged): Indicates ongoing investment in platform-specific adapter richness. Expect similar upgrades for other channels (Discord, Telegram, etc.) in upcoming cycles.

## 7. User Feedback Summary
- **Positive**: The merged QQ PR suggests maintainers are responsive to platform-specific feature gaps; users gain parity with mainstream chat clients.
- **Pain point**: The steering-mode issue reveals frustration with the current “interrupt-and-replace” behavior when sending rapid follow-ups. No explicit satisfaction/dissatisfaction signals beyond this single issue.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [Issue #3342](https://github.com/sipeed/picoclaw/issues/3342) | Opened 2026-08-21 (8 days stale) | Core agent UX improvement; low visibility but high impact if implemented. Needs maintainer triage: either schedule design discussion or close with rationale. |
| *No other long-unanswered PRs or issues surfaced in the 24h window.* | | |

---
*Generated from GitHub data as of 2026-08-29. Links point to live items on github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-29

---

## 1. Today's Overview

NanoClaw shows **high development velocity** with 50 PRs updated in the last 24 hours (45 open, 5 closed/merged), though no new release was cut. The project is in the midst of a **large-scale setup/driver refactor stack** (39 PRs per #3485) led by the core team, modernizing the installation flow for machine-driven (NDJSON) and terminal UIs in parallel. Two fresh user-facing issues surfaced today: a startup hang on `nanoclaw.sh` (#3645) and a hard-coded 30-minute turn ceiling that kills long local-model runs (#3643). Overall health is **active but with emerging stability friction** for local-model users.

---

## 2. Releases

**No new releases published today.** The repository continues on a rolling development cadence; the next version will likely bundle the setup-driver stack once the open PRs land.

---

## 3. Project Progress — Merged / Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#2361](https://github.com/nanocoai/nanoclaw/pull/2361) | **feat(codex)** | Replaces stale Codex SDK sketch with current `codex app-server` JSON-RPC contract; makes `CODEX_MODEL` optional. | Unblocks Codex provider for users on latest CLI. |
| [#2363](https://github.com/nanocoai/nanoclaw/pull/2363) | **fix(credential-proxy)** | Proactively refreshes expiring Anthropic OAuth tokens (v2 port of #1102). | Fixes silent 401s after ~1 hour for native credential-proxy users. |
| [#1102](https://github.com/nanocoai/nanoclaw/pull/1102) | **fix(credential-proxy)** | Original auto-refresh OAuth token implementation. | Superseded by #2363; now closed. |
| [#2326](https://github.com/nanocoai/nanoclaw/pull/2326) | **docs** | Adds GitHub issue templates (bug, enhancement, skill). | Improves issue triage consistency. |
| [#216](https://github.com/nanocoai/nanoclaw/pull/216) | **security** | Secret sanitization bypass via `/proc` and Read tool — **blocked**. | Critical security gap remains open; see Backlog Watch. |

> **Note:** The five closed PRs above were all updated today but originated months ago, suggesting a batch cleanup/merge by maintainers.

---

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#3645](https://github.com/nanocoai/nanoclaw/issues/3645) | **Issue** | 2 💬 | **Startup reliability** — `nanoclaw.sh` hangs with ASCII art banner but no logs/feedback; blocks all new users. |
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | **Issue** | 0 💬 | **Local-model turn ceiling** — Hardcoded 30-min `ABSOLUTE_CEILING_MS` kills long turns; no config override. |
| [#3644](https://github.com/nanocoai/nanoclaw/pull/3644) | **PR (docs)** | 0 💬 | Adds GitHub issue forms — meta-improvement for future triage. |
| [#3633–#3640](https://github.com/nanocoai/nanoclaw/pull/3633) | **PR stack (8)** | 0 💬 each | **Setup driver overhaul** — Machine-driven setup, auth gating, renderer parity tests, uninstall NDJSON path. Core-team owned. |

**Analysis:** The setup-driver stack (#3633–#3640) is the dominant engineering effort (8 PRs in one day), signaling a push to **first-class native app (GUI) installation**. Meanwhile, #3645 is a **P0 user-blocker** — every new user hitting `nanoclaw.sh` today gets a silent hang.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue / PR | Status | Fix PR? |
|----------|------------|--------|---------|
| **P0 – Startup hang** | [#3645](https://github.com/nanocoai/nanoclaw/issues/3645) `nanoclaw.sh` hangs indefinitely, no logs | **Open** (29 Aug) | ❌ No fix PR yet |
| **P1 – Local-model kill** | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) Hardcoded 30-min ceiling kills long turns | **Open** (28 Aug) | ❌ No fix PR yet |
| **P0 – Security bypass** | [#216](https://github.com/nanocoai/nanoclaw/pull/216) Secret sanitization bypass via `/proc/self/environ` | **Closed but Blocked** (Feb → Aug) | ⚠️ PR exists but blocked; **unresolved** |
| **P2 – Credential refresh** | [#2363](https://github.com/nanocoai/nanoclaw/pull/2363) OAuth token expiry after 1 hr | **Merged today** | ✅ Fixed for native proxy users |

> **Critical gap:** #216 has been blocked since February. The vulnerability allows reading unset secrets via `/proc` — a **production security risk** if containers are multi-tenant.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Machine-driven setup / NDJSON protocol** | PR stack #3633–#3640 (8 PRs, core-team) | **Very High** — 39-PR stack nearing completion |
| **GUI uninstall flow** | [#3637](https://github.com/nanocoai/nanoclaw/pull/3637) NDJSON uninstall path | **High** — paired with setup driver |
| **Voice transcription V2 (container-side)** | [#2003](https://github.com/nanocoai/nanoclaw/pull/2003) Sovereign-by-default STT | **Medium** — re-submitted Apr, awaiting review |
| **Configurable turn ceiling** | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) User asks for config seam | **High** — simple fix, blocks local-model power users |
| **Slack DM privacy / approval routing fixes** | [#3387](https://github.com/nanocoai/nanoclaw/pull/3387), [#3392](https://github.com/nanocoai/nanoclaw/pull/3392) | **Medium** — core-team, multi-instance hardening |

**Prediction:** The next release will be **setup-driver heavy** (machine install/uninstall, auth gating, renderer parity). A quick patch for #3643 (configurable ceiling) and #3645 (startup logging) would significantly improve user perception.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Silent startup failure** | #3645: "`bash nanoclaw.sh` just hangs indefinitely with no feedback or logging" — ASCII banner prints, then nothing. | **All new installs** |
| **Local-model turns killed at 30 min** | #3643: `WARN Killing container past absolute ceiling sessionId="sess-…" heartbeatAgeMs=1829985 ceilingMs=1800000` | **Self-hosted / OpenCode / local LLM users** |
| **OAuth tokens expire silently** | #2363 / #1102: 401s after ~1 hour, no auto-refresh | **Native credential-proxy users** (fixed today) |
| **Secret leakage via `/proc`** | #216: `unset` doesn't clear `/proc/self/environ`; Read tool can expose keys | **Multi-tenant container deployments** (unfixed) |

**Sentiment:** Frustration on **Day 1 experience** (hang) and **long-running autonomy** (ceiling). Security-conscious users are blocked by #216.

---

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#216](https://github.com/nanocoai/nanoclaw/pull/216) **Security: secret sanitization bypass** | 6+ months (Feb 13 → Aug 28) | **Unpatched credential leak** in container env; blocks enterprise/compliance use. | Unblock PR or apply mitigation (e.g., `procfs` hidepid, init-container scrub). |
| [#2003](https://github.com/nanocoai/nanoclaw/pull/2003) **Voice transcription V2** | 4 months (Apr 25 → Aug 28) | Sovereign STT skill — high user demand, moved to container per maintainer request. | Review & merge; unblocks voice-first workflows. |
| [#3645](https://github.com/nanocoai/nanoclaw/issues/3645) **Startup hang** | 0 days (today) | **Every new user hits this**; no logs = unactionable. | Add `--verbose`/structured logging to `nanoclaw.sh` entrypoint; ship hotfix. |
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) **Hardcoded ceiling** | 1 day | Blocks legitimate long-running local-model tasks; no workaround. | Expose `ABSOLUTE_CEILING_MS` via config/env; default 30 min, allow 0=unlimited. |

---

## TL;DR for Maintainers

1. **Ship a hotfix for #3645** (startup hang) — it’s the front door.
2. **Unblock or mitigate #216** — security debt is now 6 months old.
3. **Land the setup-driver stack** (#3633–#3640) — it’s the flagship Q3 feature.
4. **Add config seam for #3643** — one-line change, high goodwill for local-model users.
5. **Review #2003** — voice skill is “sovereign by default” and container-native; aligns with architecture goals.

---

*Digest generated from GitHub API data as of 2026-08-29. All links point to live GitHub items.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-29

## 1. Today's Overview
IronClaw released **v1.4.0** on 2026-08-27 (81 commits since v1.3.0), headlined by a **durable notification inbox** that surfaces authoritative run outcomes and actionable gates to users via WebUI. In the last 24 hours the project saw **high velocity**: 28 PRs updated (15 merged/closed) and 14 issues updated (3 closed). The merged PRs cluster around **notifications hardening**, **compaction reliability**, **tool-search precision**, and **CI topology validation** — indicating a stabilization sprint after the v1.4.0 cut. Open PRs and issues reveal two parallel investment tracks: **context-window economics** (compaction thresholds, result referencing, projection) and **sandbox architecture** (persistent per-user executor spike).

---

## 2. Releases
### `ironclaw-v1.4.0` (2026-08-27)
- **Scope**: Stable promotion of `1.4.0-rc.1` (81 commits since `v1.3.0`).
- **Key Addition**: **Durable notification inbox** — runs publish authoritative outcomes (`RunFailed`, `AuthenticationRequired`, `RunBlocked`) and actionable gates to a per-user inbox, surfaced by WebUI.
- **Breaking Changes**: None explicitly noted in release notes; the inbox is additive.
- **Migration Notes**: No migration steps documented; notifications are opt-in via existing extension auth/run pipelines.
- **Link**: [Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.0)

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#7899](https://github.com/nearai/ironclaw/pull/7899) | feat(notifications): publish automation pre-run failures | Notifications | Durable `RunFailed` inbox item for automation fires that fail before run submission; stable identity from fire ref. |
| [#7901](https://github.com/nearai/ironclaw/pull/7901) | fix(notifications): persist auth gates before enrichment | Notifications | Guarantees `AuthenticationRequired` lands in inbox even if auth provider/enrichment backend is down. |
| [#7900](https://github.com/nearai/ironclaw/pull/7900) | feat(notifications): publish durable resource blocks | Notifications | Maps `BlockedResource` run states → `RunBlocked` notification; de-dupes via gate reference. |
| [#7982](https://github.com/nearai/ironclaw/pull/7982) | fix(tools): stop sending model after unreachable `result_read` budget | Tools/Loop | Fixes model retry loop (5× `max_bytes: 400` in prod) by differentiating budget-failure messages. |
| [#7965](https://github.com/nearai/ironclaw/pull/7965) | perf(tool-search, github): stop offering tools matching one incidental term | Tool Search | Raises BM25 threshold; prevents false-positive ranked lists that mislead model into reading empty results. |
| [#7979](https://github.com/nearai/ironclaw/pull/7979) | test(extensions): enforce encoded output ownership | Extensions/Security | Fail-closed gate inventories all encoded/encrypted/binary/JSON-RPC output boundaries; requires owner/exposure/rationale. |
| [#7980](https://github.com/nearai/ironclaw/pull/7980) | ci: validate integration group topology | CI/Infra | Pre-flight checks Cargo group registrations against `tests/integration/group_*` dirs; routes malformed paths to groups lane. |
| [#5563](https://github.com/nearai/ironclaw/pull/5563) | feat(webui): design system tokens + /playground | WebUI/Design | Design system spec/docs isolated in `/playground`; enables autonomous AI-implemented UI improvements. |
| [#5084](https://github.com/nearai/ironclaw/pull/5084) | Redesign the automations page | WebUI/UX | Ground-up visual/UX redesign aligned with new design system; lists scheduled automations, runs, status. |

**Net Signal**: The v1.4.0 release unlocked a **notifications hardening wave** (4 merged PRs) and a **tooling reliability wave** (budget handling, search precision, output ownership). Two long-stale WebUI PRs (#5563, #5084) were finally closed, suggesting design-system stabilization.

---

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7891](https://github.com/nearai/ironclaw/issues/7891) | Issue | 10 | **Performance crisis**: 49 KiB raw MIME headers pushed unasked into prompt → 19.2 s model inference on two `gmail.get_message` calls. Demands projection/seam usage. |
| [#7824](https://github.com/nearai/ironclaw/issues/7824) | Issue | 5 | **Context projection overhaul**: Full thread replay costs 4× tokens/$ vs baseline. Needs Pi-style compaction barrier, structured summaries, overflow recovery. |
| [#7770](https://github.com/nearai/ironclaw/issues/7770) | Issue | 4 | **Agent lifecycle hooks epic**: After-turn, before-turn, compaction, tool-result seams to replace core-engine edits with hook registrations. |
| [#7981](https://github.com/nearai/ironclaw/issues/7981) | Issue | 3 | **GitHub tooling bloat**: 519 KB `list_repos` payload (81 fields × 98 repos) → 64 tool calls, 3 min. Projection seam exists but unused. |
| [#7903](https://github.com/nearai/ironclaw/issues/7903) | Issue | 2 | **Sandbox architecture decision**: Move canonical executor into persistent per-user Docker sandbox vs. host-to-sandbox plumbing per CLI. |

**Underlying Theme**: **Token/context efficiency** dominates — three of the top five items are about payload bloat (MIME headers, GitHub REST fields, full thread replay) and the compaction machinery to tame it. The sandbox spike (#7903) reflects architectural tension between authority boundary and extensibility.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#7891](https://github.com/nearai/ironclaw/issues/7891) | Unprojected 49 KiB MIME headers cause 19.2 s inference; no projection seam used. | No |
| **High** | [#7987](https://github.com/nearai/ironclaw/issues/7987) | `flatten_top_level` rebuilds schema from whitelist, silently discarding non-forbidden top-level constraints (e.g., `pattern`, `format`). | No |
| **Medium** | [#7986](https://github.com/nearai/ironclaw/issues/7986) | `github.list_repos` returns 81 raw fields/repo (519 KB for 98 repos); package's own projection seam unused. | No |
| **Medium** | [#7981](https://github.com/nearai/ironclaw/issues/7981) | Unhinted `result_read` schema + raw payload → 64 tool calls, 3 min to list repos. | No (related: #7982 fixed budget messaging) |
| **Medium** | [#7985](https://github.com/nearai/ironclaw/pull/7985) | `NativeMemoryService::read` maps missing document → `InputEncode` error ("tool input could not be encoded"), misleading users. | PR #7985 (open) |
| **Low** | [#7930](https://github.com/nearai/ironclaw/issues/7930) | No way to reference prior tool result in arguments; model must re-emit payload verbatim (output tokens serialized). | No |

**Note**: #7891 and #7987 are **silent data-loss/correctness** bugs (payload bloat, schema constraint deletion) with high user-impact; no fix PRs yet.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Result referencing** (cite prior tool output by reference) | [#7930](https://github.com/nearai/ironclaw/issues/7930) | High — directly reduces output tokens; aligns with compaction/projection theme. |
| **Model capability tags in WebUI** (modalities, input/output types) | [#7971](https://github.com/nearai/ironclaw/issues/7971), [#7970](https://github.com/nearai/ironclaw/issues/7970), [#7969](https://github.com/nearai/ironclaw/issues/7969) | High — backend preserves NEAR AI modalities; UI work is isolated, design-system ready. |
| **Pi-style compaction barrier + structured summaries** | [#7824](https://github.com/nearai/ironclaw/issues/7824), [#7978](https://github.com/nearai/ironclaw/pull/7978), [#7976](https://github.com/nearai/ironclaw/pull/7976), [#7975](https://github.com/nearai/ironclaw/pull/7975) | Very High — 3 open PRs + epic issue; v1.4.0 compaction threshold derivation (#7976) already in flight. |
| **Agent lifecycle hooks (after-turn, before-turn, compaction, tool-result)** | [#7770](https://github.com/nearai/ironclaw/issues/7770) | Medium — phased epic; first phase likely after compaction stabilization. |
| **Persistent per-user sandboxed executor** | [#7903](https://github.com/nearai/ironclaw/issues/7903), [#7908](https://github.com/nearai/ironclaw/pull/7908) | Low-Medium — spike PR open; architectural decision pending; high risk/scope. |
| **Scoped tenant BI telemetry** | [#7961](https://github.com/nearai/ironclaw/pull/7961) | Medium — privacy-bounded, provider-neutral; open PR with contracts. |
| **Post-run learning review router** | [#7958](https://github.com/nearai/ironclaw/pull/7958) | Medium — replaces hidden skill installer; disabled by default; open PR. |

---

## 7. User Feedback Summary (Pain Points & Use Cases)
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Token/context explosion** | #7824 (227.7M vs 55.1M tokens, $10.31 vs $2.52 on PinchBench); #7891 (19.2 s inference on 2 emails); #7986 (519 KB for repo list) | **Cost & latency** — users pay 4× and wait minutes for simple tasks. |
| **Opaque tool errors** | #7982 (model retries wrong budget 5×); #7985 (missing doc → "input could not be encoded") | **Debugging friction** — models and users get misleading error messages. |
| **Tool search noise** | #7965 (BM25 >0 returns false positives; model reads "results exist" as "capability present") | **Agent confusion** — models chase non-existent capabilities. |
| **No result reuse** | #7930 (model must re-emit payload to chain tools) | **Token waste & latency** — autoregressive re-generation of large payloads. |
| **Model capability blindness** | #7969/#7970/#7971 (WebUI shows model IDs only; no modalities) | **Selection errors** — users can't tell if model accepts images, produces images, etc. |
| **Silent schema degradation** | #7987 (`flatten_top_level` drops constraints silently) | **Correctness risk** — validation constraints vanish without warning. |

**Satisfaction Signal**: The v1.4.0 notification inbox addresses a **visibility gap** (run failures, auth issues, resource blocks now surface durably). However, **performance/cost regressions** from unprojected payloads are the dominant dissatisfaction driver.

---

## 8

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-29

## 1. Today's Overview
LobsterAI saw a **release-focused day** with version **2026.8.28** shipped and **7 PRs merged/closed** in the last 24 hours. The team closed a release branch (#2572) and resolved several renderer/account-related fixes (#2569–#2571). Meanwhile, two long-standing test-coverage PRs (#1153, #1156) and a UI search feature (#1155) were also merged, indicating a push to harden core libraries. Only **1 PR remains open** (#1146, stale since March), and **2 issues stay open** (#1149, #1151, both stale test/bug items). Community chatter is low—issues are mostly maintenance or stale—suggesting a **stable, maintenance-mode cadence** with periodic feature drops.

## 2. Releases
### **LobsterAI 2026.8.28** (published 2026-08-28)
| Change | PR | Author |
|--------|-----|--------|
| Login guide improvements | [#2525](https://github.com/netease-youdao/LobsterAI/pull/2525) | @liuzhq1986 |
| Settings: add plan model catalog | [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) | @liuzhq1986 |

**Breaking changes / migration notes:** None mentioned. The release appears to be a **minor feature + docs update**—safe for direct upgrade.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary | Area |
|----|------|---------|------|
| [#2572](https://github.com/netease-youdao/LobsterAI/pull/2572) | Release | Cut 2026.8.24 release branch (multi-area) | build, docs, main, renderer, cowork, openclaw, artifacts, windows |
| [#2571](https://github.com/netease-youdao/LobsterAI/pull/2571) | Fix | Phone nickname display fix | renderer |
| [#2570](https://github.com/netease-youdao/LobsterAI/pull/2570) | Fix | Resolve phone-masking merge conflict; replace real phone test data | renderer |
| [#2569](https://github.com/netease-youdao/LobsterAI/pull/2569) | Fix | Duplicate phone nickname fix | renderer |
| [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) | Bugfix | Fix `buildOpenAIChatCompletionsURL` off-by-one for Gemini `/v1` baseURL | main (libs) |
| [#1155](https://github.com/netease-youdao/LobsterAI/pull/1155) | Feature | In-session **Ctrl+F / Cmd+F** search with precise highlight & jump | renderer (cowork) |
| [#1156](https://github.com/netease-youdao/LobsterAI/pull/1156) | Test | Add Vitest coverage for `commandSafety` & `coworkMemoryJudge` (35+ cases) | main (libs) |

**Key advances:**  
- **Search UX** – users can now find text inside a conversation instantly.  
- **Safety hardening** – two critical guardrails (`commandSafety`, `coworkMemoryJudge`) now have automated tests.  
- **Gemini compatibility** – URL-building bug fixed for Google Gemini endpoints.

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) “快更新v4pro！” | 3 comments, closed today | Users eager for next major version; maintainers closed without roadmap detail. |
| [#2536](https://github.com/netease-youdao/LobsterAI/issues/2536) “微信群已满人” | 2 comments, closed today | Community channel saturation—users asking for additional WeChat/Discord spaces. |
| [#1154](https://github.com/netease-youdao/LobsterAI/issues/1154) Test coverage for safety modules | 2 comments, **closed via #1156** | Contributor-driven quality push; maintainers accepted. |
| [#1149](https://github.com/netease-youdao/LobsterAI/issues/1149) Test coverage for `coworkMemoryExtractor` | 1 comment, **still open (stale)** | 35-case test suite ready in PR #1146? (unlinked) – needs maintainer review. |
| [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151) Gemini URL bug | 1 comment, **fixed via #1153** | External provider integration fragility surfaced. |

**Underlying needs:**  
1. **Faster release cadence / visibility** (v4pro demand).  
2. **Scalable community channels** (WeChat full).  
3. **Reliability for multi-provider LLM routing** (Gemini bug).

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | Gemini `/v1` baseURL produces malformed URL (missing `/`) | **Fixed** | [#1153](https://github.com/netease-youdao/LobsterAI/pull/1153) merged |
| **Medium** | New agent creation fails to load task records until tab switch | **Open (stale)** | [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) open since Mar |
| **Low** | Phone nickname/merge conflict in account menu | **Fixed** | [#2569](https://github.com/netease-youdao/LobsterAI/pull/2569), [#2570](https://github.com/netease-youdao/LobsterAI/pull/2570), [#2571](https://github.com/netease-youdao/LobsterAI/pull/2571) |

**No crashes or regressions reported today.**

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **v4pro major update** | #2489 (user demand) | Medium – no public roadmap, but release branches cut frequently. |
| **Additional community channels** | #2536 | High – easy win (Discord/Telegram/Slack). |
| **In-session search (Ctrl+F)** | #1155 | **Delivered today**. |
| **Full test coverage for memory extractor** | #1149 | Medium – PR exists but stale; may land in next sprint. |
| **Plan model catalog in settings** | Release notes (#2530) | **Delivered today**. |

## 7. User Feedback Summary
- **Positive:** Search feature (#1155) and plan-model catalog are concrete usability wins.  
- **Pain points:**  
  - Agent task-record race condition (#1146) blocks workflow for power users.  
  - Community access bottleneck (WeChat full).  
  - Desire for clearer version roadmap (“v4pro” chant).  
- **Satisfaction:** Silent on recent releases—no praise/complaints on 2026.8.28 yet.

## 8. Backlog Watch (Stale & Needing Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) Agent task-record fix | 5 months | Blocks new-agent UX; PR ready but unmerged. |
| [#1149](https://github.com/netease-youdao/LobsterAI/issues/1149) `coworkMemoryExtractor` tests | 5 months | Core memory pipeline untested; 35-case suite written. |
| [#1151](https://github.com/netease-youdao/LobsterAI/issues/1151) Gemini URL bug | 5 months | **Fixed today** via #1153 – can be closed. |
| [#2489](https://github.com/netease-youdao/LobsterAI/issues/2489) v4pro demand | 2 weeks | Signals need for public milestone/communication. |

---

**Health Indicators**  
- ✅ **Release cadence**: ~4 days since last cut.  
- ✅ **Test coverage**: Critical paths now covered.  
- ⚠️ **Stale PR backlog**: 2 important PRs idle >5 months.  
- ⚠️ **Community scaling**: WeChat limit reached; no alternative announced.  

**Next watch**: Will maintainers merge #1146/#1149 and communicate v4pro timeline?

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-29

## 1. Today's Overview
Moltis shows minimal activity in the last 24 hours with only one new bug report filed and no pull requests, merges, or releases. The single open issue (#1246) indicates a regression preventing sandbox execution after adding a node, which could block users relying on incremental workflow construction. With zero PR activity and no merged fixes, the project appears in a quiet maintenance phase, though the reported bug suggests a stability concern in core sandbox functionality. Community engagement remains low (no comments or reactions on the new issue). Overall health signals are mixed: low velocity but a potentially high-impact regression surfaced.

## 2. Releases
No new releases published today.

## 3. Project Progress
No pull requests were opened, merged, or closed in the last 24 hours. No feature advancements or bug fixes landed today.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Link |
|------|------|----------|-----------|------|
| [#1246](https://github.com/moltis-org/moltis/issues/1246) **[OPEN] [bug] [Bug]: can't run on sandbox after a node is added** | Issue | 0 | 0 👍 | [View Issue](https://github.com/moltis-org/moltis/issues/1246) |

**Analysis**: The sole active discussion is a fresh bug report with no community interaction yet. The issue describes a sandbox execution failure triggered by adding a node — a core workflow operation. The lack of comments suggests either limited visibility or that the reporter provided sufficient context (preflight checklist completed) for maintainers to triage directly. Underlying need: reliable incremental graph editing in sandbox mode, likely critical for iterative agent development.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#1246](https://github.com/moltis-org/moltis/issues/1246) | Sandbox fails to run after a node is added to the graph. Blocks iterative workflow development. Reporter on latest version; preflight checks passed. | None yet |

**Note**: This is the only bug reported today. No crash logs or reproduction steps beyond the summary are visible in the data. Severity rated High due to sandbox being a primary execution environment.

## 6. Feature Requests & Roadmap Signals
No feature requests or roadmap signals captured in the last 24 hours. The sole issue is a regression, not a new capability ask.

## 7. User Feedback Summary
**Pain point**: Inability to execute sandbox runs after modifying the node graph (adding a node).  
**Use case**: Iterative agent/graph development where nodes are added incrementally and tested in sandbox.  
**Sentiment**: Neutral/technical — reporter followed checklist, provided no emotional language. No satisfaction/dissatisfaction signals beyond the functional block.

## 8. Backlog Watch
No long-unanswered issues or PRs surfaced in today’s data. The only open item (#1246) is <24h old. Maintainer attention should prioritize triaging this regression given its potential to stall core workflows.

---

*Data source: GitHub API for moltis-org/moltis (issues, PRs, releases) — 2026-08-28 to 2026-08-29*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-29

---

## 1. Today's Overview

CoPaw (QwenPaw) is in an active pre-release phase for v2.2.0, with **two beta releases shipped in 24 hours** (v2.2.0-beta.2 and v2.2.0-beta.3). The project shows high velocity: **27 PRs updated** (10 merged) and **30 issues touched** (21 closed). Development focus is squarely on **MCP protocol modernization** (stateless 2026-07-28 spec support), **multi-tenant Hub** groundwork, **fallback model infrastructure**, and **startup performance**. The community is actively discussing the upcoming Hub edition (#7318), while several long-standing bugs around MCP reconnection, TLS/OpenSSL, and large output handling are being resolved.

---

## 2. Releases

### v2.2.0-beta.3 (2026-08-28)
| Change | Details |
|--------|---------|
| **feat(mcp)** | Added `Streamable-HTTP` dual-protocol client (`HttpAutoClient`) that speaks MCP 2026-07-28 (stateless) first, with **automatic fallback** to legacy handshake-era clients (2025-03-26 / 2025-06-18 / 2025-11-25). Probes `server/discover` with per-request timeouts. [PR #7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) |
| **fix(mcp)** | Abort hung session RPCs on teardown; recover stale `list_tools` calls that could stall agent schema collection indefinitely after transport failure or server restart. [PR #7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) |

### v2.2.0-beta.2 (2026-08-28)
| Change | Details |
|--------|---------|
| **fix(workspace)** | Made startup failure cleanup cancellation-safe (prevents resource leaks on aborted init). [PR #7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) |
| **test(e2e)** | Added 23 targeted console E2E cases with extended assertions. [PR #7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) |

> **Migration Notes**: Beta releases; expect breaking changes before stable. The MCP client now auto-negotiates protocol version — no config changes required for most users. Custom MCP server operators should verify compatibility with the 2026-07-28 stateless spec.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) | **Feature** | MCP Streamable-HTTP dual-protocol client with legacy fallback | **High** — Unblocks stateless MCP 2026-07-28 adoption |
| [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) | **Fix** | Abort hung MCP RPCs on teardown; recover stale `list_tools` | **High** — Fixes silent agent stalls after MCP server restart |
| [#7320](https://github.com/agentscope-ai/QwenPaw/pull/7320) | **Fix** | Restore reliable model discovery for custom OpenAI-compatible providers | **High** — Fixes regression where discovered models weren't auto-populated |
| [#7386](https://github.com/agentscope-ai/QwenPaw/pull/7386) | **Fix** | Migrate discovered model output limits; preserve encrypted credentials | **Medium** — Provider migration reliability |
| [#7388](https://github.com/agentscope-ai/QwenPaw/pull/7388) | **Fix** | ACP: use `max_completion_tokens` for explicit runtime limits | **Medium** — Standards compliance |
| [#7381](https://github.com/agentscope-ai/QwenPaw/pull/7381) | **Fix** | DingTalk: detect stale stream connections, bound SDK requests | **Medium** — Channel reliability after sleep/wake/VPN |
| [#7384](https://github.com/agentscope-ai/QwenPaw/pull/7384) | **Perf** | Shared A-tier deferred startup architecture (desktop + app) | **High** — Faster "chat-ready" time |
| [#7387](https://github.com/agentscope-ai/QwenPaw/pull/7387) | **Perf** | Early readiness: serve lightweight shell while Python app initializes | **High** — Perceived startup speed |
| [#7380](https://github.com/agentscope-ai/QwenPaw/pull/7380) | **Perf/Test** | Cut test suite wall-clock 41%; drop zero-value tests | **Medium** — CI velocity |
| [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) | **Fix** | Bound oversized single-line tool results; preserve as workspace artifacts | **Medium** — Context overflow protection |

---

## 4. Community Hot Topics

| Issue/PR | Activity | Core Need |
|----------|----------|-----------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) **QwenPaw Hub (multi-tenant) coming in 2.2.0 — what next?** | 13 comments, 1 👍 | **Product direction**: Community wants team workspaces, admin-managed skills, RBAC, shared memory/knowledge bases, billing/usage tracking. Strong signal for B2B features. |
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) **Desktop & Docker ship OpenSSL 3.0.x (Python 3.11) — carrier DPI resets handshakes** | 9 comments | **Network compatibility**: Users on restrictive ISPs (China Mobile/Unicom) see TLS handshake failures. Need OpenSSL 3.2+ or boringssl, or user-configurable TLS stack. |
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) **Feishu (Lark) bot: first message replies, then silence** | 15 comments | **Channel reliability**: Docker & Platform instances both affected. Likely stream connection stale state — related to #7381 (DingTalk fix). |
| [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) **Prompt cache hit rate observability — 81% vs OpenCode 96%** | 3 comments | **Cost optimization**: Users lack visibility into cache performance; direct $ impact. Request: metrics dashboard, cache warming hints. |
| [#7398](https://github.com/agentscope-ai/QwenPaw/issues/7398) **Add `/btw` side-question command (like Claude Code)** | 1 comment, new | **UX parity**: Lightweight side queries without polluting main context. High-value for power users. |

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR / Notes |
|----------|-------|--------|----------------|
| **Critical** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) OpenSSL 3.0.x TLS stack broken on carrier DPI | **Open** | No fix PR yet. Requires runtime upgrade (Python 3.12+ / OpenSSL 3.2+) or boringssl vendoring. Blocks users on restricted networks. |
| **Critical** | [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) Feishu bot stops responding after 1st message | **Closed** (2026-08-28) | Likely fixed by [#7381](https://github.com/agentscope-ai/QwenPaw/pull/7381) (DingTalk stale connection detection) — same root cause pattern. Verify in beta.3. |
| **High** | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) MCP client fails to auto-recover after server restart | **Closed** | Fixed by [#7329](https://github.com/agentscope-ai/QwenPaw/pull/7329) + [#7330](https://github.com/agentscope-ai/QwenPaw/pull/7330) — dual-protocol client with session recovery. |
| **High** | [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) `RemoteProtocolError`: peer closed connection (qwenpaw sends FIN) | **Closed** | Root cause likely MCP transport; mitigated by new client in beta.3. |
| **High** | [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) WebView2 renderer crash ~7s after start (v2.0.0+post.4) | **Closed** | Regression in post.3→post.4 frontend. No fix PR visible; may need WebView2 version pin or frontend revert. |
| **Medium** | [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) PDF with 10+ Chinese chars in filename fails | **Open** | New in 2.1.1b3. URL encoding/artifact path handling bug. |
| **Medium** | [#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220) Oversized image dimensions (compressed but > pixel limit) freeze app | **Open PR** | Validation added; needs review. |
| **Medium** | [#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124) Editable install: ReMe background loops consume 48GB+ RAM | **Closed** | ReMe 0.4.1.10 integration in [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) addresses reindex control. |

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for v2.2.0 / Next |
|---------|--------|------------------------------|
| **Multi-tenant Hub (QwenPaw Hub)** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) — official announcement | **Confirmed** — "coming in 2.2.0"; admin skills, team workspaces, RBAC |
| **Fallback model configuration** | [#4011](https://github.com/agentscope-ai/QwenPaw/issues/4011), [#5718](https://github.com/agentscope-ai/QwenPaw/issues/5718), [#7392](https://github.com/agentscope-ai/QwenPaw/pull/7392) | **High** — Dedicated UI page added in [#7392](https://github.com/agentscope-ai/QwenPaw/pull/7392); auto-switch on quota/error |
| **Claude Code third-party agent harness** | [#7395](https://github.com/agentscope-ai/QwenPaw/issues/7395), [#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396) | **High** — Registry shows `coming_soon=True`; Codex/Qoder already done |
| **`/btw` side-question command** | [#7398](https://github.com/agentscope-ai/QwenPaw/issues/7398) | **Medium** — Low effort, high UX value; mirrors Claude Code |
| **Prompt cache hit rate metrics** | [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) | **Medium** — Cost-sensitive users; needs backend instrumentation |
| **Telegram allowlist fields in Desktop GUI** | [#7389](https://github.com/agentscope-ai/QwenPaw/issues/7389) | **Medium** — Config parity; 6 missing fields |
| **Chat history pagination + virtualization** | [#7361](https://github.com/agentscope-ai/QwenPaw/pull/7361) | **High** — Backend API exists (#7049); frontend WIP |
| **Session archiving / grouping** | [#3187](https://github.com/agentscope-ai/QwenPaw/issues/3187), [#6507](https://github.com/agentscope-ai/QwenPaw/issues/6507) | **Medium** — UX debt; sub-agent sessions clutter history |
| **Windows tray icon (background run)** | [#5622](https://github.com/agentscope-ai/QwenPaw/issues/5622) | **Low** — Desktop-only, niche but requested |

---

## 7. User Feedback Summary

| Theme | Representative Voices | Sentiment |
|-------|----------------------|-----------|
| **MCP reliability** | "MCP backend restart → client stuck on old session-id, need `list mcp` to reconnect" ([#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)) | 😡 Frustrated → **Fixed in beta.3** |
| **Network/TLS on restricted ISPs** | "Carrier DPI resets OpenSSL 3.0.x handshakes; no workaround on desktop" ([#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298)) | 😡 Blocked — **No fix yet** |
| **Feishu/DingTalk channel flakiness** | "First message works, then bot goes silent" ([#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757)) | 😡 Unreliable → **Likely fixed** |
| **Startup speed** | "Editable install eats 48GB RAM on ReMe indexing" ([#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124)) | 😟 Painful → **Improved via deferred startup** |
| **Cost visibility** | "81% cache hit vs OpenCode 96% — no metrics to optimize" ([#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335)) | 😟 Blind spot — **Instrumentation requested** |
| **Hub excitement** | "Finally team support! Need admin skills, shared knowledge, RBAC" ([#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)) | 😍 Anticipation — **Product-market fit signal** |
| **UX parity with Claude Code** | "Want `/btw` side questions, steer mode, auto model switch" ([#7398](https://github.com/agentscope-ai/QwenPaw/issues/7398), [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775)) | 😊 Power-user demand — **Differentiation opportunity** |

---

## 8. Backlog Watch (Stale but Important)

| Item | Age | Why It Matters | Needs |
|------|-----|----------------|-------|
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) **OpenSSL 3.0.x / carrier DPI** | 4 days | Blocks users in China on mobile networks; affects both Desktop & Docker | Maintainer decision: upgrade Python base image (3.12+), vendor boringssl, or add TLS config knobs |
| [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) **Steer mode (Codex-like mid-run correction)** | 5 months | High-value UX for agent steering; "good first issue" but no takers | Design review + frontend/backend split; good contributor onboarding target |
| [#3014](https://github.com/agentscope-ai/QwenPaw/issues/3014) **Isolated/scheduled job sessions** | 5 months | Enterprise automation need; parity with OpenClaw | Backend session management; low

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-29

## 1. Today's Overview
ZeroClaw shows high development velocity with **50 PRs updated** in the last 24 hours (13 merged/closed, 37 open), indicating active iteration across runtime, security, channels, and developer experience. Five issues were updated, including two closures: the orphaned SkillForge engine removal (#8309, #10309) and a Telegram conversation history regression fix (#10237, #10418). Three open trackers/RFCs signal strategic direction: A2A protocol interoperability (#3566), a maintainer decision queue (#8692), and a household edge mesh RFC (#10360). No new releases were published today.

## 2. Releases
**No new releases today.** The project continues on the `master` branch with continuous integration.

## 3. Project Progress — Merged/Closed PRs (13)

| PR | Type | Scope | Summary |
|----|------|-------|---------|
| [#10309](https://github.com/zeroclaw-labs/zeroclaw/pull/10309) | chore/refactor | runtime, skillforge | **Removed orphaned SkillForge engine** (scout/evaluate/integrate modules, shims, CODEOWNERS refs, tests). Closes #8309. |
| [#10418](https://github.com/zeroclaw-labs/zeroclaw/pull/10418) | bugfix | channel:telegram | **Fixed Telegram reply-thread history fragmentation** — keeps reply-threads in main chat conversation history. Closes #10237. |
| [#9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319) | refactor | runtime, security | **Sealed engine tool registry as `ScopedToolRegistry`** — prevents bypass of scoping seam across `Agent`, channel runtime, and turn-entry carriers. |
| [#9935](https://github.com/zeroclaw-labs/zeroclaw/pull/9935) | enhancement | runtime, security | **Preserve unknown constraint types** in `evaluate_constraints` — changed `Constraint` from closed enum to `Known/Unknown` variant for forward compatibility. |
| [#10256](https://github.com/zeroclaw-labs/zeroclaw/pull/10256) | security fix | gateway | **Redact duplicate idempotency keys from logs** — logs only `idempotency_key_present: true` while retaining key for replay-store lookup. |
| [#10314](https://github.com/zeroclaw-labs/zeroclaw/pull/10314) | security fix | provider | **Bound `/models` response body** for compatible providers — prevents unbounded memory allocation from compromised routers. |
| [#10399](https://github.com/zeroclaw-labs/zeroclaw/pull/10399) | ci | web, dashboard | **Typecheck generated OpenAPI client** in CI — adds `cargo web check` to `web-permission-tests` job. |
| [#9673](https://github.com/zeroclaw-labs/zeroclaw/pull/9673) | refactor | channels | **Removed 36 unreachable channel re-exports** and dead ACP/RpcError fields. |
| [#10352](https://github.com/zeroclaw-labs/zeroclaw/pull/10352) | deps | zerocode | **Removed unused `async-trait` dependency** from `zerocode` crate. |
| [#10365](https://github.com/zeroclaw-labs/zeroclaw/pull/10365) | deps | channels | **Removed unused `tokio-socks` direct dependency** from `zeroclaw-channels`. |
| [#9319](https://github.com/zeroclaw-labs/zeroclaw/pull/9319) | refactor | runtime, security | **ScopedToolRegistry sealed through engine** — see above. |
| [#10309](https://github.com/zeroclaw-labs/zeroclaw/pull/10309) | chore | skillforge | **SkillForge engine removal** — see above. |
| [#10418](https://github.com/zeroclaw-labs/zeroclaw/pull/10418) | bugfix | telegram | **Telegram history key fix** — see above. |

**Net effect:** Significant dead-code removal (SkillForge, unreachable channels, unused deps), security hardening (idempotency key redaction, response body bounds), and a user-facing Telegram UX fix.

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) **Tracker: A2A protocol interoperability** | 10 comments, 7 👍, open since Mar 2026 | **High community interest** in native Agent2Agent (v0.3.0+) support for cross-agent communication (ZeroClaw, NanoClaw, OpenClaw). Tracker remains active — likely a major roadmap item. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Tracker: Maintainer decision queue** | 14 comments, open since Jul 2026 | **Process scaling need** — central queue for RFCs, design issues, release-policy questions awaiting maintainer/code-owner decisions. Indicates growing contribution volume requiring triage structure. |
| [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) **RFC: Household edge mesh with pull workers** | 3 comments, created Aug 25 | **Emerging architecture discussion** — opt-in mesh across idle local devices (PCs, phones, SBCs) with signed receipts. High risk (security, domain:architecture), needs maintainer review. |
| [#10425](https://github.com/zeroclaw-labs/zeroclaw/pull/10425) **feat: internal-principal envelope (RFC #6954, 1/3)** | New PR (Aug 28), risk:high, size:L | **First slice of accepted RFC #6954** — introduces `InternalPrincipal` enum (Cron, PeerAgent, Daemon) for separated cron run outcomes. Foundation for multi-principal runtime. |
| [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) **feat: atomic session-ownership claim (SessionBackend)** | New PR (Aug 27), risk:high, size:XL | **Core concurrency primitive** — `SessionBackend::claim_session_agent_alias` with compare-and-set inside backend lock. Addresses session contention at scale. |

**Underlying needs:** (1) Interoperability with external agent ecosystems (A2A), (2) Governance scaling for RFC/design decisions, (3) Horizontal compute scaling via local device mesh, (4) Runtime primitives for multi-principal/agent isolation.

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) Telegram reply-threads fragment conversation history into per-thread buckets | **Closed** | [#10418](https://github.com/zeroclaw-labs/zeroclaw/pull/10418) merged — history key correction |
| **High** | [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) Provider credential rotation after rate limits — `do-not-merge` flag | **Open** (needs author action) | PR open, marked `do-not-merge` — likely needs design review |
| **High** | [#10414](https://github.com/zeroclaw-labs/zeroclaw/pull/10414) Cron: guard agent manual trigger and history | **Open** (needs author action) | PR open, adds owner-qualified cron-store helpers |
| **Medium** | [#10262](https://github.com/zeroclaw-labs/zeroclaw/pull/10262) RPC connections not closed on daemon reload; zerocode quickstart stuck | **Open** (needs author action) | PR open, cancels local-socket/WSS connections on reload |
| **Medium** | [#9399](https://github.com/zeroclaw-labs/zeroclaw/pull/9399) Quickstart checklist rows exceed terminal width | **Open** (needs author action) | PR open, fits rows to terminal byte/display-column budgets |
| **Medium** | [#10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064) Telegram approval cards don't self-destruct after tap | **Open** (needs author action) | PR open, adds `answerCallbackQuery` + prompt rewrite |

**Stability note:** The Telegram history bug (#10237) was fixed and merged same-day (#10418) — good turnaround. Two high-risk PRs (#9419, #10414) remain open awaiting author action.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **A2A protocol native support** | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) (tracker, 7 👍, 10 comments) | **High** — active tracker, cross-project interoperability demand |
| **Household edge mesh (pull workers, signed receipts)** | [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360) (RFC, needs maintainer review) | **Medium** — early RFC, high complexity, security-first design |
| **Session ownership atomic claims** | [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) (PR, XL) | **High** — core concurrency fix, large scope |
| **Internal principal envelope (RFC #6954 slice 1/3)** | [#10425](https://github.com/zeroclaw-labs/zeroclaw/pull/10425) (PR, L) | **High** — accepted RFC, first of 3 slices |
| **Eval run-history receipts (append-only)** | [#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248) (PR, XL) | **Medium** — opt-in feature, trend analysis use case |
| **ACP standalone default agent selection** | [#9638](https://github.com/zeroclaw-labs/zeroclaw/pull/9638) (PR, S) | **High** — small, UX improvement for ACP launchers |

**Predicted next version focus:** Runtime concurrency primitives (session claims, internal principals), A2A groundwork, and continued security hardening.

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Telegram conversation context loss** in reply threads | #10237: "lost multi-turn context" — fixed in #10418 |
| **Daemon reload breaks RPC connections / zerocode quickstart hangs** | #10262: "unstick zerocode quickstart" — PR open |
| **Terminal width issues in Quickstart checklist** | #9399: "dialoguer redraw accounting cannot erase earlier rows" — PR open |
| **Approval cards persist after interaction (Telegram)** | #10064: "self-destruct after operator tap" — PR open |
| **Need cross-agent communication (A2A)** | #3566: 7 👍, "communicate with external agents over HTTP" |
| **Desire to utilize idle local hardware** | #10360: "operators already own several mostly-idle PCs, laptops, phones, SBCs" |
| **RFC/design decision bottleneck** | #8692: "active issue-level decision queue for RFCs... that need maintainer attention" |

**Sentiment:** Active contributors hitting real UX edges (Telegram, CLI, daemon reload) and pushing architectural boundaries (A2A, edge mesh). Fixes are being proposed rapidly; maintainer review bandwidth appears to be the gating factor.

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) **A2A protocol interoperability tracker** | 5+ months (Mar 2026) | High community interest (7 👍), strategic interoperability, no clear owner decision |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) **Maintainer decision queue tracker** | ~2 months (Jul 2026) | Process meta-issue — 14 comments indicate active use but no resolution on triage workflow |
| [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) **Provider credential rotation after rate limits** | 1+ month (Jul 202

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*