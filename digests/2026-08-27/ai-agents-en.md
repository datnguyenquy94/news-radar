# OpenClaw Ecosystem Digest 2026-08-27

> Issues: 180 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-27 08:50 UTC

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

# OpenClaw Project Digest — 2026-08-27

## 1. Today's Overview
OpenClaw shows **intense maintenance velocity** with 180 issues and 500 PRs updated in 24 hours — a 2.8:1 PR-to-issue ratio signaling active triage and fix throughput. The project is in a **stabilization phase** post-2026.7.x releases: no new versions shipped today, but 142 PRs merged/closed indicate rapid patch integration. Critical-path bugs dominate (gateway crashes, silent message loss, session corruption), while feature work focuses on UX polish (UI composer, fullscreen Android, schema generation). Maintainer bandwidth appears stretched — 358 open PRs await review, many tagged `waiting on author` or `ready for maintainer look`.

## 2. Releases
**No new releases today.** Latest stable remains `2026.7.1-2`; beta at `2026.8.1-beta.1`. Several open issues (#108435, #113093, #115256) report regressions in 2026.7.x that may gate the next patch.

## 3. Project Progress — Merged/Closed PRs (142 today)
Key fixes landed:

| PR | Area | Impact |
|----|------|--------|
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | Gateway: conversation delivery within agent bindings | Fixes multi-agent message misrouting across Discord, iMessage, Matrix, Mattermost, Slack, Telegram, Feishu |
| [#130624](https://github.com/openclaw/openclaw/pull/130624) | Docs/Gateway: preserve channel answers after unavailable approvals | Resolves #130584 — approval warnings swallowing recovered answers |
| [#124543](https://github.com/openclaw/openclaw/pull/124543) | Gateway: render Claude CLI history once | Fixes duplicate assistant turns in Control UI/Android (#123792) |
| [#129035](https://github.com/openclaw/openclaw/pull/129035) | llama.cpp: safe managed archive extraction | Security hardening — ignores symlinks, enforces checksum-pinned manifests |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | Scripts: clean tsgo process trees on timeout/signal | Prevents wedged compiler processes |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | UI: review install policy warnings | Admin can acknowledge plugin install warnings in Control UI |
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | UI: full session actions from chat header | Pin, mark unread, set icon, copy ID, move to group |
| [#130588](https://github.com/openclaw/openclaw/pull/130588) | Agents: self-identify code-mode reconciliation prompts | Fixes spurious read-only lockouts after exec host-policy denial |

**Pattern**: Heavy investment in **cross-channel message fidelity**, **gateway auth/session integrity**, and **Control UX parity** across surfaces.

## 4. Community Hot Topics — Most Active Issues/PRs

### Top Issues by Comment Count
| Issue | Comments | 👍 | Core Pain Point |
|-------|----------|-----|-----------------|
| [#108435](https://github.com/openclaw/openclaw/issues/108435) Gateway fails to start (crash-loop) | 14 | 3 | **P1 regression** in 2026.7.1: gateway won't start with systemd/Ollama/manual — blocks all users on latest stable |
| [#88657](https://github.com/openclaw/openclaw/issues/88657) DeepSeek V4 Flash incomplete turns | 12 | 1 | **P1 message-loss** via OpenRouter since 2026.5.27 — `payloads=0, tools=2, stopReason=stop` |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) Expose resolved backend model in session_status | 8 | 1 | **Blind spot** for LiteLLM/proxy users — agents see alias not actual model (GPT-5.4, Claude-4.6) |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) Visible inbound channel turn silently dropped | 8 | 1 | **Zero-payload dispatch** — no retry, dead-letter, or user-visible failure |
| [#112248](https://github.com/openclaw/openclaw/issues/112248) @openclaw/codex plugin fails to register | 7 | 0 | **TypeError on `openSyncKeyedStore`** — `/codex` slash commands silently no-op |

### Top PRs by Activity (all maintainer-gated)
| PR | Status | Merge Risk | Key Blockers |
|----|--------|------------|--------------|
| [#125471](https://github.com/openclaw/openclaw/pull/125471) Fix Claude CLI OAuth in Control UI | **CLOSED** | 🚨 auth-provider, 🚨 compatibility | Required proof of OAuth refresh ownership after restart |
| [#126330](https://github.com/openclaw/openclaw/pull/126330) Accept released Apple routing projection | **OPEN** ⏳ waiting on author | 🚨 compatibility, 🚨 security-boundary | AI-assisted; needs author validation |
| [#110250](https://github.com/openclaw/openclaw/pull/110250) Feeds: consume signed sharded catalogs | **OPEN** 📣 needs proof | 🚨 compatibility, 🚨 security-boundary | XL size; feed-stack foundation (#101981) already on main |
| [#127850](https://github.com/openclaw/openclaw/pull/127850) Keep replies available during credential refresh | **OPEN** 👀 ready for maintainer | 🚨 auth-provider, 🚨 message-delivery | XL; races prepared-model-runtime republication |

**Underlying needs**: Users demand **reliable message delivery** across channels, **transparent model routing** behind proxies, and **gateway resilience** to auth/credential churn. The `clawsweeper` automation bot files bulk issues (`bulk-filed` label) — maintainers triaging at scale.

## 5. Bugs & Stability — Today's Critical Reports

### 🔴 P1 / Crash-Loop / Data-Loss (Immediate Attention)
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | **Crash-loop** (gateway won't start) | ❌ | Regression in 2026.7.1; affects systemd, Ollama, manual launch |
| [#128971](https://github.com/openclaw/openclaw/issues/128971) | **Message-loss** (Telegram final reply lost) | ❌ | `delivery_ambiguous` receipt → silent drop of final answer |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | **Message-loss** (inbound channel turn dropped) | ❌ | Zero-payload dispatch, no retry/dead-letter/visibility |
| [#130810](https://github.com/openclaw/openclaw/issues/130810) | **Message-loss** (stuck-session recovery loses followups) | ❌ | Resets command lane but never drains followup queue |
| [#119313](https://github.com/openclaw/openclaw/issues/119313) | **Infinite billing loop** (embedded run never returns) | ❌ | Mid-turn precheck enabled → endless billed model calls |
| [#73471](https://github.com/openclaw/openclaw/issues/73471) | **Data-loss** (doctor `--fix` archives transcripts as orphans) | ❌ | Silent chat history loss; needs CI hardening of doctor recs |
| [#80667](https://github.com/openclaw/openclaw/issues/80667) | **Data-loss** (trajectory.jsonl never written for claude-cli) | ❌ | Pure claude-cli sessions lack event recording |

### 🟠 P1 / Session-State / Auth-Provider
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#113093](https://github.com/openclaw/openclaw/issues/113093) | 413/400 on tool payload with llama.cpp MTP | ❌ | Full profile + llama.cpp MTP broken since 2026.7.1-2 |
| [#127287](https://github.com/openclaw/openclaw/issues/127287) | GHE data-residency broken (copilot-developer-cli integration-id) | ❌ | `*.ghe.com` tenants reject default integration-id |
| [#123652](https://github.com/openclaw/openclaw/issues/123652) | Azure/OpenAI GPT-5.6 prompt cache lineage broken | ❌ | `runtimeContextCarrier` tail relocation changes cache keys |
| [#128140](https://github.com/openclaw/openclaw/issues/128140) | `memory_search` tool times out (15s) | ❌ | CLI `openclaw memory search` works fine |
| [#118885](https://github.com/openclaw/openclaw/issues/118885) | Redundant full SQLite integrity checks on startup | ❌ | Multi-GB DB checked multiple times per boot |

### 🟡 P2 / UX-Friction / Stability
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#123792](https://github.com/openclaw/openclaw/issues/123792) | ✅ **Fixed in #124543** | Duplicate assistant turns with claude-cli backend |
| [#115256](https://github.com/openclaw/openclaw/issues/115256) | Desktop app boot-loops gateway | ❌ | 32–727s restart cycles; doctor fix reverted by app |
| [#128967](https://github.com/openclaw/openclaw/issues/128967) | Session layer front-truncates tool results to 64KiB | ❌ | No head-truncation marker; only tail marker |
| [#129004](https://github.com/openclaw/openclaw/issues/129004) | Telegram richMessages: 50 media cap vs real 20 limit | ❌ | Silent truncation at 21+ media; `splitTelegramHtmlChunks` cuts inside `<tg-slideshow>` |
| [#116519](https://github.com/openclaw/openclaw/issues/116519) | Delegated writes request unfulfillable approval | ❌ | Messaging users cannot complete delegated approvals |
| [#113327](https://github.com/openclaw/openclaw/issues/113327) | Rapid multi-part Telegram turns fragment into parallel sessions | ❌ | Should batch into one continuous turn |

**Fix coverage**: Only 2/20+ critical bugs have linked fix PRs. Most P1s lack `clawsweeper:linked-pr-open` — maintainer triage bottleneck.

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood Next Version |
|-------|----------|--------|-------------------------|
| [#51441](https://github.com/openclaw/openclaw/issues/51441) Expose resolved backend model | P2 | **High demand** — proxy/LiteLLM users blind to actual model | 🟡 Medium (needs product decision) |
| [#55235](https://github.com/openclaw/openclaw/issues/55235) Generate JSON schema on bootstrap/update | P3 | **DX improvement** — editor integration for `openclaw.json` | 🟢 High (linked PR open, low risk) |
| [#118490](https://github.com/openclaw/openclaw/issues/118490) Android fullscreen chat mode | P3 | **Mobile UX** — hide tabs/chrome, content+input only | 🟡 Medium (needs product decision) |
| [#123086](https://github.com/openclaw/openclaw/issues/123086) User-facing path to view generated Markdown | P3 | **Content consumption** — rendered docs vs raw files | 🟡 Medium (recovery-stuck label) |
| [#20837](https://github.com/openclaw/openclaw/issues/20837) Agent awareness of communication channel | P2 | **Contextual intelligence** — know source (Telegram, dashboard, etc.) | 🔴 Low (diamond lobster but no fix shape) |
| [#42276](https://github.com/openclaw/openclaw/issues/42276) Reasoning stream (overwrite lines like OpenAI/Grok) | P3 | **Streaming UX** — "searching, scanning, installing..." | 🔴 Low (off-meta tidepool) |
| [#79163](https://github.com/openclaw/openclaw/issues/79163) Notification + context re-injection on model fallback | P2 | **Fallback transparency** — silent personality change | 🟡 Medium (off-meta tidepool) |
| [#10005](https://github.com/openclaw/openclaw/issues/10005) Hide session status card option | P3 | **Chat declutter** — reduce visual noise | 🟢 High (simple toggle, low risk) |
| [#107930](https://github.com/openclaw/openclaw/issues/107930) Improve upgrade UX when Node.js version changes | P2 | **Ops friction** — manual Node upgrade, service path fix | 🟡 Medium (gold shrimp rating) |

**Roadmap prediction**: Next patch (2026.7.2?) will likely include JSON schema generation (#55235), session status card toggle (#10005), and critical bug fixes for gateway startup (#108435), Telegram media truncation (#129004), and claude-cli duplicate rendering (#123792 → #124543). Proxy model visibility (#51441) and Android fullscreen (#118490) are strong candidates for 2026.8.x.

## 7. User Feedback Summary — Real Pain Points

| Theme | Representative Voices | Severity |
|-------|----------------------|----------|
| **Gateway unreliability** | "gateway doesn't start with systemd/Ollama/manual" ([#108435](https://github.com/openclaw/openclaw/issues/108435)); "desktop app boot-loops gateway; doctor recommends fix app immediately reverts" ([#115256](https://github.com/openclaw/openclaw/issues/115256)) | 🔴 Critical — blocks all usage |
| **Silent message loss**

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-08-27)

## 1. Ecosystem Overview

The open-source personal AI assistant landscape is bifurcating into **two distinct tiers**: a high-velocity "core" tier (OpenClaw, IronClaw, Hermes, NanoBot, ZeroClaw, CoPaw, NanoClaw) shipping daily fixes and architectural RFCs, and a "specialist" tier (PicoClaw, LobsterAI, Moltis, NullClaw) focusing on channel integrations, UI polish, or niche deployments. **No project is stagnant** — even the quietest (NullClaw, Moltis) had merges or issues today. The ecosystem is converging on **three hard problems**: reliable cross-channel message delivery, prefix-cache efficiency across heterogeneous LLM providers, and sandbox/security boundary hardening for tool execution. Release cadences are accelerating toward **weekly patches** (IronClaw RC, CoPaw beta, OpenClaw stabilization) rather than monthly majors.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score |
|---------|--------------|-----------|-------------------|----------------|--------------|
| **OpenClaw** | 180 | 500 | 142 | Stabilizing (2026.7.1-2 stable, 2026.8.1-beta) | 🟡 **Stretched** — 358 open PRs, critical P1 backlog |
| **IronClaw** | 10 | 47 | 47 | **RC shipped** (v1.4.0-rc.1, 81 commits) | 🟢 **Excellent** — architectural consolidation, security fixes merged |
| **Hermes Agent** | 13 | 44 | ~6 | Accumulating fixes (last v0.20.5) | 🟢 **High** — P1 fixed in 48h, desktop/Windows focus |
| **NanoBot** | 2 | 31 | 16 | Accumulating on `main` | 🟢 **Strong** — 16 merges/day, 1 critical sec vuln open (#5564) |
| **ZeroClaw** | 13 | 50 | 4 | Pre-release (RFC backlog) | 🟡 **Caution** — 7 high-risk RFCs, review bottleneck |
| **CoPaw** | 16 | 39 | 19 | **Beta shipped** (v2.2.0-beta.1) | 🟢 **High** — Hub multi-tenant confirmed, cache observability WIP |
| **NanoClaw** | 2 | 24 | 5 | Accumulating `[Unreleased]` | 🟢 **Active** — 2 critical bugs, 1 unpatched (#3568) |
| **LobsterAI** | 1 | 10 | 10 | Pending #2551 | 🟢 **Healthy** — 10 merges/day, artifact lifecycle complete |
| **PicoClaw** | 7 | 6 | 4 | Stale (v0.3.1, >5mo) | 🟡 **Needs patch** — Web UI perf, Slack media broken |
| **Moltis** | 0 | 2 | 2 | **Released** (20260826.01) | 🟢 **Stable** — quiet, focused merges |
| **NullClaw** | 1 | 0 | 0 | Stale (2026.5.29) | 🔴 **Dormant** — single enhancement, no maintainer response |

*ZeptoClaw: no activity.*

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Widest channel matrix**: Discord, iMessage, Matrix, Mattermost, Slack, Telegram, Feishu — only OpenClaw and PicoClaw approach this breadth.
- **Gateway-centric architecture**: Message routing, auth, and session integrity are first-class primitives, not afterthoughts.
- **Enterprise-grade observability**: `doctor` tooling, trajectory recording, session inspection — unmatched in the ecosystem.
- **Scale of contribution**: 500 PRs/24h indicates massive community/contributor base; `clawsweeper` automation handles triage at scale.

**Technical Approach Differences:**
| Dimension | OpenClaw | IronClaw | Hermes | NanoBot | ZeroClaw |
|-----------|----------|----------|--------|---------|----------|
| **Core primitive** | Gateway + Channel bindings | Reborn agent-loop + Compaction pipeline | CLI/Desktop dual-mode | TUI/WebUI + Agent core | Daemon + ZeroCode dashboard |
| **Message delivery** | Central gateway, multi-protocol | In-process, per-thread serialization | Per-session, WS/SSE | Gateway-managed WebSocket | Channel adapters + daemon |
| **Model routing** | LiteLLM/OpenRouter proxy, alias→resolved gap (#51441) | Provider-native cache_control, OpenAI gap (#7921) | Native Responses + compression preflight | Unified usage backend, per-retry | Keyed provider registry, migration bugs |
| **Security model** | Plugin install warnings, approval gates | TOCTOU-fixed fs, sandbox TLS, seccomp | MCP stdio liveness, OAuth refresh | Path traversal (#5564), worker isolation | Granular sandbox policy RFC (#6996) |

**Community Size**: OpenClaw's issue/PR volume (180/500) is **5–10× the next project** (IronClaw 10/47), confirming its role as the ecosystem's "Linux kernel" — the reference implementation others fork or integrate with.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Prefix-cache stability across providers** | IronClaw (#7921), CoPaw (#7335), OpenClaw (#51441 proxy visibility) | OpenAI-family backends drop `prompt_cache_key`; Anthropic-only implementation causes 50%+ cache-hit collapse. Need universal cache-control abstraction. |
| **Silent message loss / delivery guarantees** | OpenClaw (#108435, #112259, #128971), PicoClaw (#3338 Slack), NanoClaw (#3569 Telegram), Hermes (#96183 Bot Chat) | Zero-payload dispatch, no dead-letter, no retry, no user visibility. Cross-channel ack/retry framework needed. |
| **Sandbox / filesystem security hardening** | IronClaw (#6817 TOCTOU), ZeroClaw (#6996 policy RFC), NanoBot (#5564 path traversal), NanoClaw (#3550 shell injection) | fd-rooted traversal, capability-free manifests, path validation, worker isolation — convergent evolution toward `openat`/Landlock/Seatbelt. |
| **Session/context lifecycle correctness** | OpenClaw (#123792 dup turns, #130810 stuck recovery), Hermes (#95779 `/clear` UI-only), PicoClaw (#3301 routed agents), CoPaw (#7193 cross-session leak) | Context must survive routing, restarts, compression, and multi-agent handoffs. |
| **Observability for production workloads** | IronClaw (#7929 per-run metrics, #7931 BI telemetry), CoPaw (#7342 cache observability), NanoBot (#5504 retry status, #5562 tool progress), ZeroClaw (#8337 Herdr) | Token accounting, cache-hit rates, tool-churn, retry visibility — moving from "is it broken?" to "how much does it cost?" |
| **Multi-modal TUI parity** | NanoBot (#5563 clipboard images), CoPaw (mobile composer #7334), Hermes (Windows toast #96207), IronClaw (voice-to-text epic #7867) | TUI/WebUI/CLI feature parity for images, voice, rich rendering — no longer "nice to have." |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | **Universal gateway** — connect any channel, any model, any agent | Platform builders, enterprise integrators, power users | Gateway-centric, plugin architecture, multi-protocol message bus |
| **IronClaw** | **Reborn agent-loop** — compaction, memory, tool pipelines, sandbox | Advanced users, researchers, self-hosters wanting control | Rust, typed compaction pipeline, MCP registration framework, libSQL/Postgres telemetry |
| **Hermes Agent** | **Desktop + CLI dual-mode** — oneshot (`-z`), SSH remote, Bot Mode | Developers, automation engineers, desktop-first users | Python, stdio MCP, Windows/macOS/Linux parity, background review forks |
| **NanoBot** | **TUI/WebUI excellence** — streaming, reasoning, multimodal, search | Terminal-native developers, researchers | Python, worker-isolated tools, metasearch (MST), unified usage backend |
| **ZeroClaw** | **Daemon + Dashboard (ZeroCode)** — multi-agent management, WASM plugins, web-bundle | Operators managing fleets, plugin authors, web-deployment | Go/Rust, RFC-driven, ACP protocol, granular sandbox policy, computer-use RFC |
| **CoPaw** | **Multi-tenant Hub** — org/team workspaces, shared skills, RBAC | Teams, organizations, Chinese-market enterprises | TypeScript/Electron, Aliyun/DashScope integration, prompt-cache economics |
| **NanoClaw** | **Lightweight containerized agent** — fast setup, channel adapters, MCP policy | Self-hosters, edge deployments, quick-start users | Node.js, container-first, `jq` over `node -e`, OneCLI gateway routing |
| **PicoClaw** | **Channel integration depth** — Slack, LINE, Telegram, Discord, IRC, Web UI | Chat-ops teams, multi-channel communities | Go, per-channel adapters, routed-agent context, ARM/edge model support |
| **LobsterAI** | **Artifact lifecycle & analytics** — share, deploy, delete, track, monetize | Creators, educators, artifact publishers | Electron/React, cloud-shared files, analytics pipeline, provider aggregator support |
| **Moltis** | **Provider/MCP preference management** — model selection, OAuth scopes | Users juggling multiple LLM providers/MCP servers | Date-based releases, focused scope, Fastmail MCP specialist |
| **NullClaw** | **Skill symlink workflow** — dotfile-style skill management | Dotfile/obsidian workflow users | Minimal, single enhancement focus |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Tier 1: Hyper-velocity Core** | IronClaw, OpenClaw, Hermes, NanoBot, ZeroClaw, CoPaw, NanoClaw | 20–500 PRs/day; RFC/architectural debates; security fixes merge same-day; release candidates weekly; maintainer bandwidth visibly stretched (OpenClaw, ZeroClaw) |
| **Tier 2: Specialized & Stable** | LobsterAI, PicoClaw, Moltis | 2–10 PRs/day; focused feature completion; UI/UX polish; clear release gates; lower architectural risk |
| **Tier 3: Dormant / Early** | NullClaw, ZeptoClaw | <1 PR/day; no releases in months; single-issue activity; unclear maintainer availability |

**Rapidly Iterating**: IronClaw (47 merges + RC), NanoBot (16 merges + sec fix), CoPaw (19 merges + beta), Hermes (P1 fix in 48h).
**Stabilizing**: OpenClaw (patch gating), LobsterAI (artifact complete), Moltis (quiet merges).
**At Risk**: NullClaw (no maintainer response), PicoClaw (stale release, Web UI perf), ZeroClaw (RFC bottleneck #8692).

---

## 7. Trend Signals for AI Agent Developers

1. **Prefix-cache is the new latency budget** — IronClaw's 82%→29% collapse (#7921) and CoPaw's 81% vs 96% benchmark (#7335) prove cache efficiency directly maps to cost. **Invest in cache-control abstractions early**; don't assume provider parity.

2. **Message delivery must be observable, not assumed** — Every project with channels (OpenClaw, PicoClaw, NanoClaw, Hermes) has silent-loss bugs. **Build dead-letter queues, retry policies, and user-visible delivery receipts from day one.**

3. **Sandbox ≠ container** — IronClaw's TOCTOU fixes (#6817), ZeroClaw's policy RFC (#6996), NanoBot's path traversal (#5564) show **OS-level sandboxing (Landlock, Seatbelt, `openat`) is replacing container-only isolation**. Plan for fd-rooted filesystem access.

4. **Multi-modal TUI is table stakes** — NanoBot clipboard images (#5563), CoPaw mobile composer (#7334), IronClaw voice-to-text (#7867). **Terminal UIs must handle images, voice, and rich rendering** to compete with Web/Slack/Telegram.

5. **Observability > Features for production adoption** — IronClaw's BI telemetry (#7931), CoPaw cache APIs (#7342), NanoBot tool progress SSE (#5562). **Users now demand token accounting, cache-hit rates, and tool-churn metrics** — not just "it works."

6. **Architectural ambition outpaces governance** — ZeroClaw's 7 high-risk RFCs (#8692 tracker), OpenClaw's 358 open PRs. **Projects scaling beyond 3–4 maintainers need explicit RFC/decision processes** or review becomes the bottleneck.

7. **Channel adapters are commoditizing; gateway logic is not** — PicoClaw, NanoClaw, OpenClaw all maintain Slack/Telegram/Discord adapters. **Differentiation lives in routing rules, session persistence, and auth recovery** — not the adapter itself.

8. **Cost anxiety drives feature priority** — CoPaw's cache observability (#7335), Hermes background review circuit-breaker (#90446), OpenClaw proxy model visibility (#51441). **Users will pay for tooling that reduces API spend**; build cost dashboards before new model integrations.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-27

## 1. Today's Overview
NanoBot shows **high development velocity** with 31 PRs updated in the last 24 hours (16 merged/closed, 15 open) and 2 issue updates. The project is in active feature development and refactoring phase, with heavy focus on TUI/WebUI improvements, agent architecture cleanup, security hardening, and streaming infrastructure. No new releases were published today, suggesting the team is accumulating changes for a future release. The merge rate (16 PRs in 24h) indicates a healthy, fast-moving codebase with strong maintainer throughput.

## 2. Releases
**No new releases today.** The project continues on the current version with changes accumulating in `main` branch.

## 3. Project Progress — Merged/Closed PRs Today (16)

### Security & Correctness
| PR | Title | Area |
|----|-------|------|
| [#5556](https://github.com/HKUDS/nanobot/pull/5556) | **fix(agent): complete native reasoning lifecycle** | Agent core — closes provider-native reasoning before answer content, tool execution, stream recovery; adds ordering constraints |
| [#5543](https://github.com/HKUDS/nanobot/pull/5543) | **fix(tui): surface chat connection failures** | TUI — distinguishes readiness states, queries `/health` only after failures, keeps UI copy product-level |
| [#5533](https://github.com/HKUDS/nanobot/pull/5533) | **fix(tools): keep find_files scans responsive** | Tools — moves scan to worker, uses `os.scandir`, bounds pagination/sort retention, propagates cancellation |

### Architecture & Refactoring (Agent Core)
| PR | Title | Area |
|----|-------|------|
| [#5558](https://github.com/HKUDS/nanobot/pull/5558) | **refactor(agent): load MyTool through tool loader** | Removes concrete import/manual registration; uses `Tool.create()` via `RuntimeControl` |
| [#5559](https://github.com/HKUDS/nanobot/pull/5559) | **refactor(agent): decouple loop from message tool state** | Removes `MessageTool` per-turn state, `TurnContext` injection; aggregates delivery in `AgentRunner` |
| [#5546](https://github.com/HKUDS/nanobot/pull/5546) | **refactor(agent): make run usage explicit** | Returns `AgentRunResult`; removes process-wide `_last_usage` side channel; per-run hook for API, session-scoped for `/status` |
| [#5555](https://github.com/HKUDS/nanobot/pull/5555) | **refactor(agent): remove duplicate progress streaming path** | Removes unused `progress_callback`, second state machine; keeps single hook path for reasoning/deltas/tool hints |
| [#5548](https://github.com/HKUDS/nanobot/pull/5548) | **refactor(webui): isolate websocket application orchestration** | Moves reconnect hydration to `WebUISessionProjection`/`WebUIOutboundProjector`; routes typed inbound envelopes |

### TUI / WebUI Polish
| PR | Title | Area |
|----|-------|------|
| [#5557](https://github.com/HKUDS/nanobot/pull/5557) | **perf(tui): skip redundant dependency installs** | Caches SHA-256 fingerprint of `package.json` + `bun.lock`; invalidates before refresh |
| [#5534](https://github.com/HKUDS/nanobot/pull/5534) | **feat(tui): autocomplete skill references** | Loads skills from gateway; filtered picker for `$skill-name` with arrow/Enter/Tab/Esc |
| [#5538](https://github.com/HKUDS/nanobot/pull/5538) | **refactor(tui): clarify active composer actions** | Updates placeholder to `Enter send now · Tab send next`; shortens hint text |
| [#5519](https://github.com/HKUDS/nanobot/pull/5519) | **fix(webui): compact single-pane chat header** | Compacts header/conversation spacing; adds model-settings entry to picker |
| [#5491](https://github.com/HKUDS/nanobot/pull/5491) | **fix(webui): keep answer text outside reasoning shell** | Preserves answer slices across turns; merges into final message; keeps media-only answers |

### Infrastructure
| PR | Title | Area |
|----|-------|------|
| [#5481](https://github.com/HKUDS/nanobot/pull/5481) | **feat(usage): add unified provider usage backend** | Records content-free usage row per retry-managed attempt (gateway-managed WebUI/TUI) |

---

## 4. Community Hot Topics — Most Active Open PRs

| PR | Comments | Summary | Underlying Need |
|----|----------|---------|-----------------|
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | High activity | **fix(ui): surface model retry status** — publishes sanitized retry lifecycle events to WebSocket; renders countdown/progress in TUI/WebUI | **Observability during model failures** — users need visibility when models retry/fallback instead of silent hangs |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | Long-running (since Aug 3) | **feat(agent): integrate mst-python as metasearch provider** — aggregates DuckDuckGo, Google, Brave, Bing via RRF | **Richer web search** — single-engine coverage gaps; meta-search for better recall |
| [#5563](https://github.com/HKUDS/nanobot/pull/5563) | New today | **feat(tui): support pasting clipboard images** — `Ctrl+V`/`Alt+V` handling, `[Image #n]` placeholders, WebSocket media path | **Multimodal TUI input** — parity with WebUI; developers want to paste screenshots/diagrams directly |
| [#5562](https://github.com/HKUDS/nanobot/pull/5562) | New today | **feat(api): stream tool progress events** — exposes structured tool progress via opt-in SSE field on OpenAI-compatible endpoint | **Real-time tool observability for API consumers** — clients currently blind to tool execution lifecycle |
| [#5561](https://github.com/HKUDS/nanobot/pull/5561) | New today | **feat(spawn): per-spawn model presets behind allowlist** — alternative to #4291; resolves #4231 | **Flexible spawn-time model config** — teams need per-task model selection without global changes |

**Pattern:** The hottest PRs cluster around **observability (retries, tool progress), multimodal TUI, and search quality** — signaling that power users are pushing the agent into production workflows where visibility, media input, and research depth matter.

---

## 5. Bugs & Stability — Today's Reports

| Severity | Issue/PR | Summary | Fix Status |
|----------|----------|---------|------------|
| **High (Security)** | [#5564](https://github.com/HKUDS/nanobot/issues/5564) | **Path traversal in session file handling** — `session_id` used directly in path construction (`../../etc/passwd` possible) | **Open** — filed by `arena-ai-coding-agent[bot]` today; no fix PR yet |
| **Medium** | [#5550](https://github.com/HKUDS/nanobot/issues/5550) | **`read_session` returns empty history on wildcard queries** (`"*"`, `".*"`, whitespace) | **Closed** — root cause identified in query handling; likely fixed via recent tool refactors |
| **Medium** | [#5556](https://github.com/HKUDS/nanobot/pull/5556) | Native reasoning lifecycle not properly closed before answer/tool/stream events | **Merged** — fixes ordering, keeps state local to request |
| **Medium** | [#5533](https://github.com/HKUDS/nanobot/pull/5533) | `find_files` blocks UI on large workspaces; no cancellation propagation | **Merged** — worker + `os.scandir` + budgeted traversal + cancellation |
| **Low** | [#5543](https://github.com/HKUDS/nanobot/pull/5543) | TUI shows generic "connecting" instead of specific failure states | **Merged** — distinguishes readiness/recovery/failure; queries `/health` post-failure |

**Critical Watch:** #5564 is a **security vulnerability** (path traversal) with no fix PR yet. Given it was filed by an automated agent, it may have been auto-detected — maintainers should prioritize a patch release or hotfix.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Metasearch provider (MST)** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) (open since Aug 3, active) | **High** — long-running, addresses core search quality gap; RRF merging is production-ready pattern |
| **Clipboard image paste in TUI** | [#5563](https://github.com/HKUDS/nanobot/pull/5563) (opened today) | **High** — small scope, uses existing WebSocket media path; strong UX parity argument |
| **Streaming tool progress via API** | [#5562](https://github.com/HKUDS/nanobot/pull/5562) (opened today) | **High** — closes #3698; opt-in SSE field is low-risk; critical for API consumers building UIs |
| **Per-spawn model presets (allowlist)** | [#5561](https://github.com/HKUDS/nanobot/pull/5561) (opened today) | **Medium-High** — resolves #4231; alternative to earlier design; allowlist approach addresses security concerns |
| **`nanobot` as default agent command** | [#5560](https://github.com/HKUDS/nanobot/pull/5560) (opened today) | **Medium** — CLI ergonomics; breaking change risk (current bare command behavior) needs careful migration |
| **Skill autocomplete in TUI** | [#5534](https://github.com/HKUDS/nanobot/pull/5534) (merged today) | **Delivered** — gateway-loaded skills with filtered picker; improves discoverability of skill ecosystem |

**Roadmap inference:** The project is converging on **production hardening** (observability, security, streaming contracts) + **multimodal parity** (TUI ↔ WebUI) + **extensibility** (skills, spawn presets, metasearch). Expect a release bundling the merged refactors + security fix once #5564 is resolved.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|----------------------|----------|-----------|
| **Silent model retries** | #5504 — users see no indication when model retries/fallbacks | 😠 Frustration — "hangs" perceived as bugs |
| **No tool progress visibility via API** | #5562 / #3698 — API consumers blind to tool execution | 😐 Gap — blocking custom UI builders |
| **TUI lacks image paste** | #5563 — developers want to paste screenshots/diagrams | 😐 Feature gap — WebUI has it, TUI doesn't |
| **Search quality from single engines** | #5234 — MST PR open 24 days, still active | 😐 Limitation — users hitting coverage ceilings |
| **CLI verbosity** | #5560 — request `nanobot` = `nanobot agent` | 😊 Minor QoL — power users want shorter invocation |
| **Session security** | #5564 — automated detection of path traversal | 😨 Concern — security hygiene expected |

**Overall:** Users are **pushing NanoBot into serious workflows** (custom UIs via API, research-heavy tasks, multimodal TUI work). The feedback is constructive — not "it crashes" but "I need visibility/control/parity." This indicates a maturing user base.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|-------------------|
| [#5564](https://github.com/HKUDS/nanobot/issues/5564) **Path traversal in session handling** | 0 days (today) | **Security vulnerability** — session ID used unsanitized in filesystem path | **Urgent**: Assign fix PR; consider patch release; add path validation in `manager.py` |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) **Metasearch provider (MST)** | 24 days | High-value feature; open long time with active updates; closes search quality gap | **Review & merge** — appears ready; RRF implementation is solid; unblocks better research |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) **Surface model retry status** | 3 days | High comment activity; UX critical for production use | **Prioritize review** — retry observability reduces "is it broken?" support load |
| [#5562](https://github.com/HKUDS/nanobot/pull/5562) **Stream tool progress events (API)** | 0 days | Closes #3698; enables custom UIs; opt-in = low risk | **Fast-track** — small surface area, high leverage for ecosystem |
| [#5560](https://github.com/HKUDS/nanobot/pull/5560) **`nanobot` as default agent command** | 0 days | CLI breaking change potential; needs migration plan/docs | **Design review** — confirm backward compatibility strategy before merge |

---

## Health Indicators Summary

| Metric | Status | Signal |
|--------|--------|--------|
| **Merge throughput** | 16 PRs/24h | 🟢 Excellent — high maintainer capacity |
| **Security responsiveness** | 1 critical open, 0-day | 🟡 Watch — #5564 needs same-day fix |
| **Feature velocity** | 5+ feature PRs opened today | 🟢 Strong — active investment in UX/core |
| **Refactoring discipline** | 7 architecture PRs merged today | 🟢 Healthy — paying down technical debt systematically |
| **Community engagement** | Bot-detected sec issue; long PR discussions | 🟢 Growing — automated tooling + power users |
| **Release cadence** | No release today; changes accumulating | 🟡 Normal — likely batching for next version |

**Bottom line:** NanoBot is in a **high-velocity hardening phase**. The codebase is being aggressively refactored for correctness (reasoning lifecycle, usage tracking, progress streaming) while user-facing features (multimodal TUI, metasearch, retry observability) advance in parallel. The sole risk is the unattended security issue (#5564) — otherwise, project health is strong.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-27

## 1. Today's Overview
Hermes Agent shows **very high development velocity** with 64 total issue/PR updates in the last 24 hours. The project is in an active bug-fix and stabilization phase: 13 new/updated issues (mostly bugs) and 44 open PRs indicate maintainers are rapidly addressing regressions across desktop, CLI, MCP tooling, and session management. No new release was cut today, suggesting the team is accumulating fixes for a near-term patch. The closed issue (#94335) and its fix PR (#94339) demonstrate a critical P1 regression was identified and resolved within 48 hours.

## 2. Releases
**No new releases today.** The latest release appears to be v0.20.5 (2026-08-19) per issue #96209. The current HEAD (`f293e720`) contains numerous fixes not yet shipped.

---

## 3. Project Progress — Merged/Closed Today
| PR / Issue | Type | Summary | Link |
|------------|------|---------|------|
| #94339 / #94335 | **Bug Fix (P1)** | Fixed inverted liveness check in `_stdio_children_dead()` that caused every stdio MCP call in oneshot (`-z`) sessions to fail-fast incorrectly. | [PR #94339](https://github.com/NousResearch/hermes-agent/pull/94339) • [Issue #94335](https://github.com/NousResearch/hermes-agent/issues/94335) |
| #94335 | **Issue Closed** | The above bug report, closed after fix merged. | [Issue #94335](https://github.com/NousResearch/hermes-agent/issues/94335) |

*Only 1 issue closed and 1 PR merged in the last 24h; the remaining 5 merged/closed PRs are not individually detailed in the feed but likely include routine dependency updates or docs.*

---

## 4. Community Hot Topics (Most Active Discussions)
| Item | Activity | Core Need / Signal |
|------|----------|-------------------|
| **#94335** — MCP stdio child liveness inversion | 13 comments, P1 bug | **Critical regression in oneshot CLI mode** — users cannot run `hermes -z` with MCP tools. Fix already merged (#94339). |
| **#96155** — Native Responses preflight over-counts tokens | 3 comments, P2 | **Cost/compression regression**: preflight compression triggers at ~152K tokens because it counts full durable history instead of checkpoint-pruned payload. Fix PR #96217 open. |
| **#96183** — Desktop Bot Chat shows stale messages on reopen | 3 comments, P2 | **Offline message delivery gap**: cron-delivered bot-chat messages persist but don't hydrate on panel reopen without full app restart. Fix PR #96215 open. |
| **#96024** — SSH Remote Backend boot failure (zombies, timeouts) | 2 comments, 2 👍, P2 | **Desktop SSH remote mode broken** — boot loop, zombie processes on remote. Multiple related PRs (#96212, #96218). |
| **#96177** — Windows cold-start WS probe timeout + i18n retry | 2 comments, P2 | **Windows reliability**: 10s probe vs 12-28s backend import; i18n locale fetch has no retry. Fix PR #96213 open. |

**Underlying theme**: Desktop app stability (SSH remote, Windows boot, Bot Chat hydration) and token/cost accounting accuracy are the top pain points.

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Component | Fix PR? | Summary |
|----------|-------|-----------|---------|---------|
| **P1 (Critical)** | [#94335](https://github.com/NousResearch/hermes-agent/issues/94335) | `tools/mcp_tool.py`, CLI `-z` | ✅ [#94339](https://github.com/NousResearch/hermes-agent/pull/94339) **MERGED** | Inverted liveness check fail-fasts every stdio MCP call in oneshot sessions. |
| **P2** | [#96155](https://github.com/NousResearch/hermes-agent/issues/96155) | OpenAI Responses, compression | ✅ [#96217](https://github.com/NousResearch/hermes-agent/pull/96217) | Preflight counts full durable history instead of pruned Responses input → premature compression. |
| **P2** | [#96024](https://github.com/NousResearch/hermes-agent/issues/96024) | Desktop SSH remote backend | 🟡 Related: [#96212](https://github.com/NousResearch/hermes-agent/issues/96212), [#96218](https://github.com/NousResearch/hermes-agent/pull/96218) | SSH boot fails with timeout; zombie processes accumulate on remote. Double-quoted paths cause livelock. |
| **P2** | [#96177](https://github.com/NousResearch/hermes-agent/issues/96177) | Desktop Windows, i18n | ✅ [#96213](https://github.com/NousResearch/hermes-agent/pull/96213) | 10s WS probe too short for 12-28s cold import; i18n locale fetch has no retry. |
| **P2** | [#95976](https://github.com/NousResearch/hermes-agent/issues/95976) | Background review, skills | ❌ | Background review fork never updates skills — read-before-write guard conflicts with `skill_view` dedup. |
| **P2** | [#93580](https://github.com/NousResearch/hermes-agent/pull/93580) | Bot Mode group threads | 🟡 PR open | Group member sessions not isolated by thread; thread B overwrites thread A session. |
| **P3** | [#95779](https://github.com/NousResearch/hermes-agent/issues/95779) | Desktop `/clear` command | ✅ [#96216](https://github.com/NousResearch/hermes-agent/pull/96216) | `/clear` only clears UI, not conversation context. |
| **P3** | [#96209](https://github.com/NousResearch/hermes-agent/issues/96209) | Kanban artifacts | ✅ [#96210](https://github.com/NousResearch/hermes-agent/pull/96210) | `kanban_complete` stores attachments with `content_type=NULL` → HTML downloads instead of rendering. |
| **P3** | [#96208](https://github.com/NousResearch/hermes-agent/issues/96208) | CLI clarify panel | ❌ | Clarify timeout hardcoded to 120s, ignores `agent.clarify_timeout` config. |
| **P3** | [#96205](https://github.com/NousResearch/hermes-agent/issues/96205) | Desktop updater (Windows) | ❌ | `hermes update` exits 124 (timeout) on success, triggers retry loop in updater popup. |
| **P3** | [#96190](https://github.com/NousResearch/hermes-agent/issues/96190) | `hermes status` plugin platforms | ✅ [#96200](https://github.com/NousResearch/hermes-agent/pull/96200) | Plugin platforms falsely show "configured" due to passive dependency probe. |
| **P3** | [#96211](https://github.com/NousResearch/hermes-agent/pull/96211) | Session archive/pin/unread | 🟡 PR open | Non-default profile sessions: owning profile not sent in body → 404 or wrong profile mutated. |

---

## 6. Feature Requests & Roadmap Signals
| Issue / PR | Signal | Likelihood for Next Release |
|------------|--------|----------------------------|
| [#90446](https://github.com/NousResearch/hermes-agent/issues/90446) — Background review cost guardrails (circuit breaker + token budget) | **Cost control for autonomous forks** — 2 comments, P3. Production pain: refusal loops burn tokens. | Medium — needs design decision (`needs-decision` label absent but scope is non-trivial). |
| [#96219](https://github.com/NousResearch/hermes-agent/issues/96219) — Keep task animations running when window visible but unfocused | **Desktop UX polish** — 0 comments, new today. | Low — cosmetic, no PR yet. |
| [#96007](https://github.com/NousResearch/hermes-agent/pull/96007) — Roam pet overlay across desktop surfaces | **Desktop "pet" feature enhancement** — PR open, P3. | Medium — UI delight feature, already implemented in PR. |
| [#96207](https://github.com/NousResearch/hermes-agent/pull/96207) — Windows toast notifications for CLI events | **Windows integration** — PR open, 4 event types. | Medium — improves Windows UX, standalone PR. |
| [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) — `hermes webapp`: serve Desktop renderer in browsers | **Major architectural shift** — browser-hosted Desktop workspace, `needs-decision`, multiple sweepers. | Low for next release — large scope, security/session-state risks flagged. |
| [#95281](https://github.com/NousResearch/hermes-agent/pull/95281) — Unified package manager (`pm`) | **Build/deployment overhaul** — `needs-decision`, cross-platform, Docker/Nix. | Low — foundational change, many sweepers. |

**Prediction**: Next patch (v0.20.6) will bundle the P1/P2 fixes above (#94339, #96217, #96215, #96213, #96216, #96210, #96200, #96218). The webapp and unified PM are v0.21+ candidates.

---

## 7. User Feedback Summary — Real Pain Points
| Source | Pain Point | Evidence |
|--------|------------|----------|
| **#94335** | Oneshot CLI (`hermes -z`) completely broken with MCP tools | "fail-fasts every stdio MCP call" — blocks automation/CI use cases. |
| **#96024** | Desktop SSH remote mode unusable | "boot loop produces 'SSH operation timed out' errors and piles up zombie processes" — 2 👍. |
| **#96177** | Windows cold start unreliable | Backend import 12-28s > 10s probe → spawns duplicate backend. |
| **#95779** | `/clear` doesn't actually clear context | "session's messages and context usage remain exactly as before (e.g., 46% stays 46%)". |
| **#96183** | Bot Chat offline messages invisible until restart | Cron delivers to closed panel; reopen shows stale cache. |
| **#96205** | Updater lies: says success but exits 124 → retry loop | "prints `✓ Update complete!` but exits 124... updater interprets non-zero as failed". |
| **#96208** | Clarify timeout ignores config | "always times out after 120s even when `agent.clarify_timeout` is explicitly set (e.g. 600)". |
| **#95976** | Background review never updates skills | "fails to update skills 100% of the time" — autonomous improvement loop broken. |

**Sentiment**: Frustration with desktop reliability (Windows, SSH, Bot Chat) and CLI oneshot mode. Users expect "clear" to mean "reset context". Cost control for background forks is a growing concern.

---

## 8. Backlog Watch — Stale / Needing Maintainer Attention
| Item | Age / Status | Why It Matters |
|------|--------------|----------------|
| [#43277](https://github.com/NousResearch/hermes-agent/pull/43277) — Codex pool fallback respects exhausted cooldowns | **Open since 2026-06-10** (78 days), updated today | Auth fallback for OpenAI Codex — rate-limit handling broken; affects all Codex users. Multiple sweepers: `risk-session-state`, `risk-compatibility`, `blast-moderate`. |
| [#92122](https://github.com/NousResearch/hermes-agent/pull/92122) — Linux `.desktop` Exec resolver | Open since 2026-08-22, updated today | Linux launcher fails silently with uv-managed shims / venv symlinks. Blocks clean Linux desktop install. |
| [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) — `hermes webapp` (browser-hosted Desktop) | Open since 2026-08-24, updated today | Major feature, but flagged with `needs-decision` + 5 sweepers (session-state, security-boundary, compatibility, desktop, dashboard, profiles). Requires architectural review. |
| [#93580](https://github.com/NousResearch/hermes-agent/pull/93580) — Bot Mode thread isolation | Open since 2026-08-24, updated today | Group chat session leakage across threads — data integrity risk for multi-user bots. |
| [#94846](https://github.com/NousResearch/hermes-agent/pull/94846) — MCP OAuth refresh-token rotation recovery | Open since 2026-08-25, updated today | Two backends sharing `HERMES_HOME` (desktop + gateway) — peer-rotated tokens clear session instead of recovering. Security boundary sweeper. |
| [#90446](https://github.com/NousResearch/hermes-agent/issues/90446) — Background review cost guardrails | Open since 2026-08-20, updated today | Unbounded token burn in refusal loops; production impact noted. No PR yet. |

**Recommendation**: Prioritize #43277 (oldest, auth-critical), #92122 (Linux install blocker), and #94846 (multi-backend data loss risk). The webapp PR (#93508) needs a dedicated design review session.

---

*Digest generated from GitHub data as of 2026-08-27. All links point to NousResearch/hermes-agent repository.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-27

---

## 1. Today's Overview

PicoClaw shows **moderate maintenance activity** with 7 issues and 6 PRs updated in the last 24 hours. The project is actively addressing bugs across multiple channels (Slack, LINE, Telegram, Discord, Web UI) and improving core agent routing logic. Four PRs were merged/closed today, resolving stale issues around routed-agent context management, Telegram topic handling, shell command allow-lists, and a batch of older fixes. Two new bug reports emerged: a Web UI performance regression with long chat histories and an RKLLM model anomaly on ARM hardware. No new release was published.

---

## 2. Releases

**No new releases** in the last 24 hours. Current version remains **v0.3.1**.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Impact |
|----|-------|--------|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | **fix: routed-agent context management** (history, summarization, compression, seahorse bootstrap) | Fixes #3301. Ensures `/clear` and auto-compression work for chats routed to non-default agents via dispatch rules. Critical for multi-agent deployments. |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | **Support topics in private bot chats** (Telegram) | Adds `IsTopicMessage` handling for private chats with forum-enabled bots. Previously only worked in forum supergroups. |
| [#3314](https://github.com/sipeed/picoclaw/pull/3314) | **Fix: agent unable to execute shell commands in `customAllowPatterns`** | Default deny patterns incorrectly overrode user allow-lists (e.g., `git push`). Restores intended security policy behavior. |
| [#1549](https://github.com/sipeed/picoclaw/pull/1549) | **fix: merge PRs #1448, #1447, #1446, #1444** | Batch merge of older fixes (from Mar 2024), now closed. Indicates backlog cleanup. |

**Net effect:** Core routing/context bugs resolved; Telegram and shell-execution UX improved.

---

## 4. Community Hot Topics — Most Active Discussions

| Issue/PR | Comments | 👍 | Core Need |
|----------|----------|----|-----------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) **Feature: Better IRC long-message support** | 8 | 0 | IRCv3 messages >512 bytes are split by clients; PicoClaw treats fragments as separate messages. Users need logical reassembly for coherent LLM context. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) **Bug: Web UI input lag with long history** | 7 | 1 | **High user pain.** Input box becomes unusably slow as session history grows. Likely DOM/rendering bottleneck in Web UI. |
| [#3301](https://github.com/sipeed/picoclaw/issues/3301) **Bug: /clear & auto-compression broken for routed agents** | 5 | 0 | **Resolved by #3316.** Dispatch-rule routing bypassed session lifecycle hooks. Critical for multi-tenant/bot setups. |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) **Bug: Slack media upload fails (FileSize=0)** | 2 | 0 | **Fix PR opened (#3340).** `SendMedia` omits `FileSize`; `slack-go` SDK rejects pre-flight. Blocks all image uploads via Slack. |
| [#3328](https://github.com/sipeed/picoclaw/issues/3328) **Bug: LINE `webhook_host`/`webhook_port` config inert** | 2 | 0 | **Fix PR opened (#3329).** Config values documented & defaulted but never read. LINE webhook uses shared gateway server instead. |

**Signal:** Users hit **channel-specific integration bugs** (Slack, LINE, IRC, Telegram) and **Web UI scalability limits**. Multi-agent routing is a growing use case.

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input **severely laggy** with moderate history. Renders Web UI unusable for long sessions. | ❌ No PR yet |
| **High** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack **image uploads completely broken** — `FileSize=0` causes pre-flight rejection. | ✅ [#3340](https://github.com/sipeed/picoclaw/pull/3340) (open) |
| **Medium** | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Google **Antigravity (Gemini) returns 429** despite valid OAuth/quota. Blocks all generations. | ❌ No PR |
| **Medium** | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | **RKLLM (Qwen3.5-0.8B on ARM)** returns abnormal responses. New report, no details yet. | ❌ No PR |
| **Low** | [#3328](https://github.com/sipeed/picoclaw/issues/3328) | LINE `webhook_host`/`port` config **silently ignored**. Misleading docs/defaults. | ✅ [#3329](https://github.com/sipeed/picoclaw/pull/3329) (open, stale) |
| **Low** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC long messages **fragmented** — no reassembly. Feature gap, not crash. | ❌ No PR |

**Top priority:** Web UI performance (#3281) and Slack media (#3338) affect core user flows.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **IRCv3 message reassembly** (coalesce split fragments) | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Medium — 8 comments, stale tag, but clear spec. Needs protocol-level handling. |
| **Web UI virtualized history / lazy rendering** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **High** — User-facing regression, 1👍, 7 comments. Likely requires frontend refactor. |
| **RKLLM/ARM model support hardening** | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | Unknown — New, hardware-specific. May need provider-side debug. |
| **Config validation for inert settings** (LINE webhook) | [#3329](https://github.com/sipeed/picoclaw/pull/3329) | High — PR open, warns instead of silently ignoring. Low-risk cleanup. |

**Prediction:** Next patch (v0.3.2) will likely include Slack media fix (#3340), LINE config warning (#3329), and possibly Web UI perf mitigation if a PR lands.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Web UI unusable for long conversations** | #3281: "very laggy… keep trying to input" | Blocks daily usage for power users; 1👍 confirms shared pain. |
| **Slack image sharing broken** | #3338: "always fail with file size cannot be 0" | Blocks media-rich workflows (design, ops, support). |
| **Multi-agent routing loses context** | #3301: "/clear and auto-compression don't work" | Fixed by #3316, but indicates routing is a **production pattern**. |
| **Silent config failures** | #3328: LINE webhook settings "have no effect, no warning" | Erodes trust in config system; users waste time debugging. |
| **ARM/edge model quirks** | #3346: RKLLM "abnormal responses" on dev board | Niche but growing — edge AI deployment is a vector. |

**Satisfaction signals:** Users actively file detailed bugs with env info; PRs from community (octavioturra, ex-takashima, genuss) show **contributor engagement**. Frustration centered on **UI performance** and **channel integration reliability**.

---

## 8. Backlog Watch — Stale/Unanswered Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) **IRC long messages** | 36 days | Open, stale, 8 comments | Protocol-level gap; affects IRC power users. No PR. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) **Web UI lag** | 37 days | Open, 7 comments, 1👍 | **Highest user-visible regression.** No PR assigned. |
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) **LINE config warning** | 16 days | Open, stale | Simple fix, improves config UX. Awaiting review. |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) **Slack FileSize fix** | 10 days | Open | Blocks Slack media. Ready to merge. |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) **Antigravity 429** | 10 days | Open, stale | Gemini integration broken. Needs provider debug. |

**Maintainer action suggested:** Prioritize review of **#3340** (trivial fix, high impact), **#3329** (low risk), and triage **#3281** (needs frontend owner). Consider labeling #3287 for v0.4 if protocol work needed.

---

## Project Health Snapshot

| Metric | Status |
|--------|--------|
| **Issue throughput** | 7 updated / 2 closed — steady |
| **PR merge rate** | 4 merged/closed today — healthy |
| **Community PRs** | 3/6 from external contributors — **strong** |
| **Critical bugs open** | 2 (Web UI lag, Antigravity 429) — **needs attention** |
| **Release cadence** | No release >5 months (v0.3.1) — consider patch cut |

**Overall:** PicoClaw is **actively maintained with engaged contributors**, but accumulating UX regressions (Web UI, Slack) and stale feature gaps (IRC) suggest a **patch release (v0.3.2)** is overdue to ship merged fixes and unblock users.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-27

---

## 1. Today's Overview
NanoClaw shows **high development velocity** with 24 PRs updated in the last 24 hours (19 open, 5 closed/merged), indicating an active maintenance and feature cycle. Two critical bugs surfaced today: a Telegram message-delivery regression (#3569) and a queue-starvation issue that silently halts agent responses (#3568). The maintainer team (Agi-Asi, shachartal, glifocat, wildcard) is rapidly shipping fixes across setup, containers, channels, and agent policy enforcement. No new release was cut today, but the volume of merged PRs suggests a release candidate may be imminent.

---

## 2. Releases
**No new releases published today.**  
The `[Unreleased]` changelog (see PR #3501) is accumulating fixes for Dial channel documentation, Mattermost card-thread recovery, and the Telegram adapter bump.

---

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3557](https://github.com/qwibitai/nanoclaw/pull/3557) | Fix (core-team) | Mattermost: improve initial setup & `SiteURL` handling | Onboarding reliability |
| [#3556](https://github.com/qwibitai/nanoclaw/pull/3556) | Fix (core-team) | Mattermost: recover card thread after host restart | Persistent interactive approvals |
| [#574](https://github.com/qwibitai/nanoclaw/issues/574) | Enhancement (closed) | Containers now include `jq`; replaces `node -e` parsing | Security (eval attack surface reduced) |

*Five PRs closed/merged in the last 24 h; the two Mattermost fixes are already on `main`.*

---

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#3569](https://github.com/qwibitai/nanoclaw/issues/3569) — **Telegram URL delivery broken** (odd underscore count) | 0 comments, filed today; **PR #3570** already open | Users cannot receive OneCLI connect links or any message with odd MarkdownV2 marker count. Upstream fixed in `@chat-adapter/telegram@4.32.0`; NanoClaw pinned at 4.29.0. |
| [#3568](https://github.com/qwibitai/nanoclaw/issues/3568) — **Inbound queue starvation by pending `system` rows** | 0 comments, filed yesterday | Silent agent stop after `maxMessagesPerPrompt` (default 10) pending system messages. No error, no log — agent simply ignores new traffic. |
| [#3570](https://github.com/qwibitai/nanoclaw/pull/3570) — **Bump chat core/adapters to 4.38.1** | Opened today, fixes #3569 | Directly addresses the Telegram regression; also pulls in other adapter fixes. |

*Both issues are P0 regressions affecting production deployments; fixes are in review.*

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#3568](https://github.com/qwibitai/nanoclaw/issues/3568) — Agent silently stops responding | Open, no fix PR yet | — |
| **Critical** | [#3569](https://github.com/qwibitai/nanoclaw/issues/3569) — Telegram drops URLs with odd underscores | Open | [#3570](https://github.com/qwibitai/nanoclaw/pull/3570) (ready) |
| **High** | [#3555](https://github.com/qwibitai/nanoclaw/pull/3555) — Node floor raised to 22.14.0 (better-sqlite3 13 segfaults below) | Open PR | [#3555](https://github.com/qwibitai/nanoclaw/pull/3555) |
| **Medium** | [#3563](https://github.com/qwibitai/nanoclaw/pull/3563) — `signal-cli` probes deadlock on daemon config lock | Open PR | [#3563](https://github.com/qwibitai/nanoclaw/pull/3563) |
| **Medium** | [#3562](https://github.com/qwibitai/nanoclaw/pull/3562) — `needrestart` hang in Linux installers | Open PR | [#3562](https://github.com/qwibitai/nanoclaw/pull/3562) |

*The queue-starvation bug (#3568) is the only critical issue without a visible fix PR; it warrants immediate triage.*

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Per-group MCP policy enforcement & OneCLI gateway routing** | [#3551](https://github.com/qwibitai/nanoclaw/pull/3551), [#3552](https://github.com/qwibitai/nanoclaw/pull/3552) (Codex-authored) | High — two PRs, core-team review |
| **Dial channel documentation** | [#3501](https://github.com/qwibitai/nanoclaw/pull/3501) | High — trivial docs update, already approved |
| **Claude SDK output-token cap raised to model ceiling** | [#3558](https://github.com/qwibitai/nanoclaw/pull/3558) | Medium — affects long-running agent tasks |
| **Forks retain local adapters through skill refresh** | [#3565](https://github.com/qwibitai/nanoclaw/pull/3565) | Medium — improves contributor UX |
| **Task-series ID stamped into `task_log` for run-log continuity** | [#3564](https://github.com/qwibitai/nanoclaw/pull/3564) | Medium — observability improvement |

*MCP policy work (Codex-driven) and Dial docs are the clearest near-term additions.*

---

## 7. User Feedback Summary
- **Pain points**:  
  - Telegram users **cannot receive connect links** (OneCLI) or any message with odd MarkdownV2 markers — silent failure, no error.  
  - Agents **go silent** after accumulating system messages; no logs, no alerts.  
  - Linux installers hang on `needrestart`; macOS `launchd` restart is a no-op.  
  - `signal-cli` setup deadlocks on daemon lock.
- **Positive signals**:  
  - Mattermost card-thread persistence fixed — users confirm approval cards survive restarts.  
  - Container security improved (`jq` added, `node -e` removed).  
  - Active contributor base (Agi-Asi alone opened 10+ fix PRs today).

---

## 8. Backlog Watch — Stale / Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3568](https://github.com/qwibitai/nanoclaw/issues/3568) — Queue starvation | 1 day | **Critical, no fix PR**; silent outage vector. |
| [#3554](https://github.com/qwibitai/nanoclaw/pull/3554) — Node 25+ stderr test flakiness | 1 day | Blocks CI on upcoming Node versions. |
| [#3560](https://github.com/qwibitai/nanoclaw/pull/3560) — Fail-fast wiring hint for `cli/local` no-agent | 1 day | Improves DX for misconfigured installs. |
| [#3550](https://github.com/qwibitai/nanoclaw/pull/3550) — Email validation shell-injection fix | 1 day | Security hardening for onboarding. |

*Recommendation: Prioritize #3568 root-cause analysis and merge #3570 (Telegram) today to unblock users.*

---

**Project Health Indicator**: 🟢 **Active / High Velocity** — 24 PRs/day, critical bugs identified and mostly patched, but one silent-failure bug (#3568) remains open without a fix. Next release likely within days.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-08-27

---

## 1. Today's Overview
NullClaw saw minimal activity in the past 24 hours with **one new enhancement issue opened** and **no pull requests, merges, or releases**. The sole contribution is Issue #995 requesting symlink support for skills, indicating community interest in improving skill management workflows. Overall project velocity appears low today—no code changes, reviews, or maintainer responses recorded. The repository remains in a quiet maintenance phase with no urgent regressions or hotfixes reported.

---

## 2. Releases
**No new releases published today.** The latest version remains `2026.5.29` (per issue context). No changelog, breaking changes, or migration notes to report.

---

## 3. Project Progress
**No merged or closed PRs today.** Zero pull requests were updated, opened, or merged in the last 24 hours. No feature advancements or bug fixes landed in the codebase.

---

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#995** | Enhancement | 0 comments, 0 reactions, created & updated today | [nullclaw/nullclaw#995](https://github.com/nullclaw/nullclaw/issues/995) |

**Analysis**: The only active discussion centers on **skill symlink support**. The author (`ivostoykov`) notes that `nullclaw skills link` currently ignores symlinks, forcing manual synchronization and making obsolete skill management cumbersome. This suggests a workflow pain point for users managing skill collections across multiple environments or version-controlled skill directories. No maintainer or community response yet—early signal for a quality-of-life improvement.

---

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** Issue #995 is an enhancement, not a defect. No existing issues were updated with new failure reports.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|------------------------------|
| **Skills symlink support** (`nullclaw skills link` to follow/respect symlinks) | #995 | **Moderate** — Low-complexity enhancement aligning with existing `skills link` command; no breaking changes implied. Strong candidate if maintainer prioritizes DX improvements. |

**Prediction**: If the maintainer engages, this could land in a near-term patch (e.g., `2026.6.x`). No other feature signals present today.

---

## 7. User Feedback Summary
- **Pain point**: Skill symlink handling is broken/absent → users cannot use symlinks to deduplicate or version-control skills, leading to sync friction and stale copies.
- **Use case**: Developers/power users managing skill repos across machines or projects via symlinks (common in dotfile/obsidian-style workflows).
- **Sentiment**: Neutral-to-positive framing (“would be great to have”); no frustration or urgency expressed. Zero community amplification (👍/comments) so far.

---

## 8. Backlog Watch
**No long-unanswered critical issues or PRs surfaced in today’s data.** The only open item (#995) is <24h old. Historical backlog not provided in this snapshot—recommend checking issues with `updated < 2026-08-01` and `comments > 5` for stale high-impact items.

---

*Digest generated from GitHub API data for nullclaw/nullclaw covering 2026-08-26 → 2026-08-27. Links point to live GitHub items.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-27

## 1. Today's Overview

IronClaw shipped its **first release candidate for v1.4.0** (ironclaw-v1.4.0-rc.1) yesterday, marking 81 commits since v1.3.0. The project shows **exceptionally high velocity**: 47 PRs merged/closed and 11 issues closed in the last 24 hours, alongside 3 new open PRs and 10 active issues. The focus is clearly on **Reborn architecture maturation** — agent-loop refactoring, compaction pipeline decomposition, MCP registration framework, sandbox security hardening, and WebUI v2 capabilities. A new epic for **voice-to-text in WebUI** landed today with three architectural proposals, signaling the next UX frontier.

## 2. Releases

### ironclaw-v1.4.0-rc.1 (2026-08-26)
**Release Notes**: First release candidate for 1.4.0, covering 81 commits since `ironclaw-v1.3.0`.

**Added**:
- **Durable notification inbox**: Runs publish authoritative outcomes and actionable gates to a per-user inbox, surfaced by the WebUI notification center, so approvals and auth prompts survive restarts and are visible across devices.

**Migration Notes**: This is a release candidate; expect potential breaking changes before final 1.4.0. The notification inbox introduces new persistent state — operators should verify storage migration paths for existing deployments.

[Release Link](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.0-rc.1)

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Scope | Key Change |
|----|-------|------------|
| [#7926](https://github.com/nearai/ironclaw/pull/7926) | Release | Cut 1.4.0-rc.1 (version bump, Cargo.lock, changelog) |
| [#7931](https://github.com/nearai/ironclaw/pull/7931) | Telemetry | Add tenant-scoped BI telemetry foundation: typed contracts, hourly aggregation, 6 telemetry tables (libSQL + Postgres), async recorder with batch writes |
| [#6817](https://github.com/nearai/ironclaw/pull/6817) | Security/Filesystem | Fix **4 TOCTOU containment escapes** in `DiskFilesystem` via fd-rooted traversal (canonicalize + openat) |
| [#6740](https://github.com/nearai/ironclaw/pull/6740) | Sandbox | TLS termination seam for sandbox egress proxy (ports `tls_intercept.rs` from `sandbox/shell-integration`) |
| [#6533](https://github.com/nearai/ironclaw/pull/6533) | Service | Container-supervised mode for hosted deployments (restart/apply path, clearer error UX) |
| [#6366](https://github.com/nearai/ironclaw/pull/6366) | Onboarding | Fix `ironclaw onboard`: Esc at API-key prompt now returns to provider menu |
| [#6157](https://github.com/nearai/ironclaw/pull/6157) | Reborn/UI | Add `ironclaw-reborn tui` (ratatui thin HTTP+SSE client of WebChat v2 API) + service install, behind `webui-v2-beta` |
| [#6134](https://github.com/nearai/ironclaw/pull/6134) | Testing | Fault-injection scenarios for provider-error and compound-denial paths (Reborn tier-2 harness) |
| [#6133](https://github.com/nearai/ironclaw/pull/6133) | Testing | SSE wire-contract fixture round-trip test for WebUI v2 (`WebChatV2Event` ↔ frontend parsing) |
| [#6132](https://github.com/nearai/ironclaw/pull/6132) | Testing | Fixture-sourced LLM seam for tier-2 integration harness (realistic fixtures) |
| [#6131](https://github.com/nearai/ironclaw/pull/6131) | Testing | Storage-mode audit (InMemory vs LibSql) + operator LLM-config tier-2 coverage across 86 test modules |
| [#6112](https://github.com/nearai/ironclaw/pull/6112) | Refactor | Decompose `canonical.rs` execute(), dedupe latency wrapping in agent-loop executor |
| [#6096](https://github.com/nearai/ironclaw/pull/6096) | Bugfix | Serialize concurrent inbound-message writes per thread (fixes out-of-order persistence/display) |
| [#5970](https://github.com/nearai/ironclaw/pull/5970) | MCP | Registration framework skeleton: owner-scoped store, minted IDs, lifecycle chokepoints |
| [#5918](https://github.com/nearai/ironclaw/pull/5918) | MCP | User-facing hosted-MCP registration & runtime discovery (register/unregister, live tool discovery) |
| [#5917](https://github.com/nearai/ironclaw/pull/5917) | MCP | Lock registered servers to host egress (reject public endpoints, capability-free manifests until discovery) |
| [#5742](https://github.com/nearai/ironclaw/pull/5742) | Reborn | **[PRODUCTION CHANGE]** Wire memory prompt-context source; pin untrusted-memory envelope at int tier |
| [#6686](https://github.com/nearai/ironclaw/pull/6686) | Cleanup | Retire `DockerProcessSandboxBackend` (dead code, superseded by persistent sandbox) |
| [#4162](https://github.com/nearai/ironclaw/pull/4162) | Refactor | Refactor agent-loop prompt stage compaction orchestration (split planning from compaction) |
| [#4163](https://github.com/nearai/ironclaw/pull/4163) | Refactor | Refactor compaction task into typed pipeline stages |
| [#4165](https://github.com/nearai/ironclaw/pull/4165) | Perf | Optimize compaction transcript range materialization (reduce FS reads) |
| [#4167](https://github.com/nearai/ironclaw/pull/4167) | Refactor | Move compaction prompt ownership into owning crate (fix cross-crate `include_str!`) |
| [#4425](https://github.com/nearai/ironclaw/pull/4425) | Reborn/Tools | Fix `builtin.http` context bomb: add HTML strip, size caps, steer model to `.save` |
| [#4796](https://github.com/nearai/ironclaw/pull/4796) | Reborn | LLM date/time awareness fix (inject current time context) |
| [#3873](https://github.com/nearai/ironclaw/pull/3873) | Feature | Trigger Loop — scheduled (cron) triggers for Reborn agent workflows |
| [#567](https://github.com/nearai/ironclaw/pull/567) | Perf | Proactive tool output truncation + configurable compaction thresholds |

**Summary**: The merged PRs represent a massive **architectural consolidation** — agent-loop decomposition, compaction pipeline typing, MCP registration framework (3 PRs), sandbox TLS/seccomp hardening, Reborn TUI/service install, and a fortified testing harness (4 PRs). The release cut caps this cycle.

## 4. Community Hot Topics

| Issue/PR | Comments | Signal |
|----------|----------|--------|
| [#7921](https://github.com/nearai/ironclaw/issues/7921) **perf(llm): OpenAI-family backends send no `prompt_cache_key` — measured ~82%→29% cache-hit collapse past ~200 calls** | 0 (new today) | **Critical perf regression**: Only Anthropic transports implement cache_control breakpoints. OpenAI-compatible paths (Codex, Chat Completions, Registry variants) silently drop prefix caching. Blocking multiple perf initiatives. |
| [#6986](https://github.com/nearai/ironclaw/issues/6986) **Cache: keep advertised tool array byte-identical — defer_loading/tool_reference instead of mid-run promotion** | 3 | **P0 perf (pi-harness adoption)**: Progressive disclosure mutates advertised tool set mid-run (`PromotedSet`), breaking prefix cache stability. Requires `defer_loading`/`tool_reference` redesign. |
| [#7867](https://github.com/nearai/ironclaw/issues/7867) **Voice-to-text in the WebUI composer** | 1 | **Epic/roadmap**: Keyboard-only composer is a UX gap vs Slack/Telegram. Three sibling design issues opened today (#7932, #7933, #7934) evaluating browser-normalized vs host-normalized architectures. |
| [#2950](https://github.com/nearai/ironclaw/issues/2950) **llm: split provider-safe tool schema cleanup from strict optional-field rewriting** | 3 | **Refactoring debt**: `normalize_schema_strict()` bundles two behaviors causing provider 400s vs strict rewriting. Blocks schema hygiene. |
| [#7930](https://github.com/nearai/ironclaw/issues/7930) **perf(tools): allow tool arguments to cite prior result by reference instead of re-emitting** | 0 (new) | **Token efficiency**: Models must re-emit full payloads to chain tools (e.g., `gmail.get_message` → next call). Reference semantics would cut output tokens significantly. |
| [#7929](https://github.com/nearai/ironclaw/issues/7929) **obs(loop): instrument per-run model-call, prefix-cache, tool-churn metrics** | 0 (new) | **Observability gap**: All current perf proposals justified by estimates, not production metrics. Need durable telemetry to decide. |
| [#7922](https://github.com/nearai/ironclaw/issues/7922) **feat(tools): declare apply_patch as grammar-constrained freeform tool** | 1 | **Tool UX**: `builtin.apply_patch` uses JSON-escaped diffs (error-prone). Grammar-constrained freeform would eliminate escaping hell. |

**Underlying Needs**: 
1. **Prefix cache stability** across all LLM providers (not just Anthropic) — the single highest-leverage perf fix.
2. **Tool result referencing** to break the re-emission token tax on multi-step workflows.
3. **Voice input parity** with competing channels (Slack/Telegram) — WebUI is the last surface without it.
4. **Production observability** to move perf work from guesswork to data-driven decisions.

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical (Security)** | [#6817](https://github.com/nearai/ironclaw/pull/6817) 4 TOCTOU containment escapes in `DiskFilesystem` (path check → separate syscall re-resolution) | **Merged** | #6817 (fd-rooted traversal with `openat`) |
| **High (Data Integrity)** | [#6096](https://github.com/nearai/ironclaw/pull/6096) Concurrent inbound messages to same thread persisted/displayed/acted on out of order | **Merged** | #6096 (serialize writes per thread) |
| **High (Perf Regression)** | [#7921](https://github.com/nearai/ironclaw/issues/7921) OpenAI-family backends drop `prompt_cache_key` → cache hit rate 82%→29% past 200 calls | **Open** | None yet |
| **Medium (Context Bomb)** | [#4425](https://github.com/nearai/ironclaw/issues/4425) `builtin.http` returns raw HTML (1.2 MB observed), no strip, no size cap, no `.save` steering | **Closed** | #4425 (HTML strip, caps, `.save` guidance) |
| **Medium (Dead Code)** | [#6686](https://github.com/nearai/ironclaw/issues/6686) `DockerProcessSandboxBackend` dead, superseded by persistent sandbox | **Closed** | #6686 (removed) |
| **Medium (Onboarding UX)** | [#6366](https://github.com/nearai/ironclaw/pull/6366) `ironclaw onboard` API-key prompt trapped user (Esc didn't return to menu) | **Merged** | #6366 |
| **Low (Date Awareness)** | [#4796](https://github.com/nearai/ironclaw/issues/4796) LLM lacks current date/time unless explicitly using time tool | **Closed** | #4796 (inject time context) |

**Stability Assessment**: **Strong**. Critical security and data-integrity bugs fixed and merged. The remaining open high-severity item (#7921) is a performance regression, not a correctness bug. The codebase is actively hardening (TOCTOU, sandbox, serialization).

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for 1.4.x / 1.5 |
|---------|--------|----------------------------|
| **Voice-to-text in WebUI composer** | [#7867](https://github.com/nearai/ironclaw/issues/7867) + 3 design issues today | **High** — Epic labeled, 3 architecture proposals active, blocker is architecture decision not model tier |
| **Tool result referencing (cite prior result by reference)** | [#7930](https://github.com/nearai/ironclaw/issues/7930) | **High** — P1, direct token savings, enables complex multi-tool chains |
| **Prefix cache support for OpenAI-family backends** | [#7921](https://github.com/nearai/ironclaw/issues/7921) | **Critical** — P2, measured 53% cache-hit collapse, blocks multiple perf initiatives |
| **Bounded selectable JSON result views (RFC 6901 pointers)** | [#7928](https://github.com/nearai/ironclaw/pull/7928) | **High** — PR open, XL scope, addresses context bloat from large tool results |
| **Tenant BI telemetry foundation** | [#7931](https://github.com/nearai/ironclaw/pull/7931) | **High** — PR merged, privacy-safe typed contracts, hourly aggregation, dual DB adapters |
| **Grammar-constrained `apply_patch` (freeform tool)** | [#7922](https://github.com/nearai/ironclaw/issues/7922) | **Medium** — P3, eliminates JSON-escaped diff pain, improves patch reliability |
| **Per-run observability (model-call, prefix-cache, tool-churn metrics)** | [#7929](https://github.com/nearai/ironclaw/issues/7929) | **Medium** — P1, prerequisite for data-driven perf decisions |
| **Scheduled (cron) triggers for Reborn** | [#3873](https://github.com/nearai/ironclaw/issues/3873) | **Done** — Merged, trigger loop v1 shipped |
| **MCP registration & discovery (hosted servers)** | [#5918](https://github.com/nearai/ironclaw/pull/5918) | **Done** — Merged, user-facing flow on framework skeleton |
| **Reborn TUI + service install** | [#6157](https://github.com/nearai/ironclaw/pull/6157) | **Done** — Merged behind `webui-v2-beta` flag |

**Prediction**: v1.4.0 final will likely include the telemetry foundation, bounded JSON views, and voice-to-text architecture decision. The OpenAI prefix cache fix (#7921) and tool result referencing (#7930) are strong candidates for 1.4.1 or 1.5 given their P1/P2 priority and measured impact.

## 7. User

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-27

---

## 1. Today's Overview

LobsterAI showed **high merge velocity** today with **10 PRs closed/merged** in the last 24 hours against only 1 new issue opened. The project is in active maintenance mode: UI polish (login animation, settings width, dark-mode icons), artifact/library enhancements (permanent delete for shared files, analytics pipeline hardening), and a critical app-update state preservation fix are all landing. No new release was cut, but the volume of merged work suggests a release candidate may be imminent. Community engagement remains low on issues (only 1 feature request, 0 comments on PRs), indicating changes are largely internally driven.

---

## 2. Releases

**No new releases published today.**  
The last release PR (#2549) was merged on 2026-08-26; watch for a version bump once the current batch of fixes (especially #2551) stabilizes.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2558](https://github.com/netease-youdao/LobsterAI/pull/2558) | renderer, auth | Rainbow border/glow animation on sidebar login CTA; theme-preserving contrast; added renderer logs for login attempts/failures | UX polish + observability |
| [#2557](https://github.com/netease-youdao/LobsterAI/pull/2557) | renderer, docs | Undocumented fix batch (2026.8.24) | Maintenance |
| [#2556](https://github.com/netease-youdao/LobsterAI/pull/2556) | renderer, docs | Rlog update (2026.8.24) | Maintenance |
| [#2555](https://github.com/netease-youdao/LobsterAI/pull/2555) | renderer, artifacts, analytics | **Major analytics overhaul**: share/deploy/copy-link/permission events; async deploy final-state tracking; reliable upload queue; unified identity/subscription/env context; library refresh/favorite/publish modal tracking; automated tests + server integration docs | **High** — hardens telemetry & reliability for artifact sharing |
| [#2553](https://github.com/netease-youdao/LobsterAI/pull/2553) | renderer, build, docs, windows | Zhipu icon dark-mode fix | UI polish (Windows) |
| [#2552](https://github.com/netease-youdao/LobsterAI/pull/2552) | renderer, cowork | Guide recharge flow | Onboarding/billing UX |
| [#2550](https://github.com/netease-youdao/LobsterAI/pull/2550) | renderer, docs, main, artifacts | **Permanent delete for cloud-shared files**: new API/IPC/types; delete only stopped shares with filename confirmation; sync cloud list/state counts/local favorites; handle conflicts, server incompat, failure calibration; fix duplicate deploy requests on account switch/modal close; tooltip accessibility; automated tests + server docs | **High** — completes artifact lifecycle management |
| [#2549](https://github.com/netease-youdao/LobsterAI/pull/2549) | renderer, build, docs, windows | Release 2026.8.26 prep | Release engineering |
| [#2548](https://github.com/netease-youdao/LobsterAI/pull/2548) | renderer | Settings panel width adjustment | UI polish |
| [#2547](https://github.com/netease-youdao/LobsterAI/pull/2547) | renderer | Login guide fix | Onboarding UX |

**Open PR carrying forward:**  
- [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551) `fix: app update preserve ready state` (renderer, main) — critical for seamless auto-update experience; not yet merged.

---

## 4. Community Hot Topics

| Item | Type | Activity | Signal |
|------|------|----------|--------|
| [#2554](https://github.com/netease-youdao/LobsterAI/issues/2554) | Issue (Feature) | 1 comment, 0 👍 | **Add Synthorai as built-in provider** — user wants first-class support for “one key, multiple models” gateways (like OpenRouter) with default model list, protocol switching (`switchableBaseUrls`), icon, and validated base URL. Indicates growing demand for **multi-provider aggregators** beyond the current 18 built-ins. |

*No PRs attracted comments or reactions today — discussion is concentrated on the single feature request.*

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | App update may lose ready state (potential restart/UX break) | Open | [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551) (open, authored by fisherdaddy) |
| Medium | Duplicate local-service deploy requests on account switch / modal close | Fixed | [#2550](https://github.com/netease-youdao/LobsterAI/pull/2550) (merged) |
| Low | Zhipu provider icon invisible in dark mode (Windows) | Fixed | [#2553](https://github.com/netease-youdao/LobsterAI/pull/2553) (merged) |
| Low | Settings panel width suboptimal | Fixed | [#2548](https://github.com/netease-youdao/LobsterAI/pull/2548) (merged) |
| Low | Login guide flow issues | Fixed | [#2547](https://github.com/netease-youdao/LobsterAI/pull/2547) (merged) |

**Watchlist:** #2551 is the only open regression-risk item; it touches the main process update logic and should be reviewed/merged before next release.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Native Synthorai provider** (default models, protocol switching, icon, validated base URL) | [#2554](https://github.com/netease-youdao/LobsterAI/issues/2554) | **High** — follows pattern of adding OpenRouter; low implementation risk (extends existing provider schema) |
| **Artifact lifecycle completeness** (permanent delete, analytics hardening) | [#2550](https://github.com/netease-youdao/LobsterAI/pull/2550), [#2555](https://github.com/netease-youdao/LobsterAI/pull/2555) | **Done** — both merged today |
| **Onboarding/billing polish** (login animation, recharge guide, login guide) | [#2558](https://github.com/netease-youdao/LobsterAI/pull/2558), [#2552](https://github.com/netease-youdao/LobsterAI/pull/2552), [#2547](https://github.com/netease-youdao/LobsterAI/pull/2547) | **Done** — merged today |
| **Windows dark-mode icon parity** | [#2553](https://github.com/netease-youdao/LobsterAI/pull/2553) | **Done** |

**Prediction:** Synthorai provider (#2554) is the most visible gap and aligns with the “aggregator” trend; expect a PR within 1–2 sprints.

---

## 7. User Feedback Summary

- **Pain point (explicit):** Custom provider slots lack default model lists, protocol-switching URLs, icons, and base-URL validation — forcing manual, error-prone setup for gateway services like Synthorai ([#2554](https://github.com/netease-youdao/LobsterAI/issues/2554)).
- **Pain point (implicit, fixed today):**  
  - Shared artifact deletion was impossible; users could only “stop” sharing.  
  - Deploy analytics were fragmented (no end-to-end latency/error classification).  
  - App updates could leave the renderer in a stale ready state.  
  - Dark-mode icons missing for some providers on Windows.
- **Satisfaction signals:** Rapid closure of 10 PRs in 24h suggests maintainers are responsive to internal QA and known gaps. No user-reported crashes or data-loss issues surfaced today.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551) `fix: app update preserve ready state` | Opened 2026-08-26 (1 day) | **Critical path** for auto-update reliability; touches main/renderer IPC. Should be reviewed & merged before next release cut. |
| [#2554](https://github.com/netease-youdao/LobsterAI/issues/2554) Synthorai provider request | Opened 2026-08-26 (1 day) | High community value (aggregator trend); low complexity. Assign to provider-onboarding owner. |
| [#2557](https://github.com/netease-youdao/LobsterAI/pull/2557) / [#2556](https://github.com/netease-youdao/LobsterAI/pull/2556) — vague “fix/rlog” PRs | Merged same day | Titles lack context; ensure changelog entries explain user-visible changes. |

---

**Health Indicators**  
- ✅ **Merge throughput:** 10 PRs/24h  
- ✅ **Zero open bugs** (except #2551 in progress)  
- ⚠️ **Issue engagement:** Low (1 feature request, 0 community bug reports) — consider triage bot or “good first issue” labeling to invite external contributors  
- 📦 **Release readiness:** High — pending #2551 merge and optional #2554 inclusion

*Generated from GitHub data as of 2026-08-27 00:00 UTC.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-27

## 1. Today's Overview
Moltis shipped a new dated release (20260826.01) and closed two pull requests in the last 24 hours, with zero open issues or PRs updated during the same window. The merged work resolves a long-standing provider-model preference bug (#1094/#1104) and patches Fastmail MCP OAuth scope registration (#1244). Activity is low but focused: both PRs were authored by the same contributor and merged promptly, indicating a healthy maintainer response loop. No new community discussions or regressions surfaced today.

## 2. Releases
**20260826.01** (2026-08-26)  
- No detailed changelog provided in the feed; the version follows Moltis’s date-based scheme.  
- Likely bundles the two merged PRs below (provider preferred-model replacement and Fastmail MCP OAuth fix).  
- **Breaking changes / migration notes:** None reported. Users upgrading should verify their saved provider model preferences load correctly and that Fastmail MCP connections re-authenticate without scope errors.

## 3. Project Progress
| PR | Title | Status | Key Changes |
|----|-------|--------|-------------|
| [#1104](https://github.com/moltis-org/moltis/pull/1104) | fix(providers): allow replacing preferred models | **Merged/Closed** | • Pre-selects saved provider model preferences when opening the preferred-model dialog.<br>• Replaces a provider’s previous preferred models on save (including clearing all with an empty selection).<br>• Adds backend + Playwright regression coverage for de-preferring models. |
| [#1244](https://github.com/moltis-org/moltis/pull/1244) | Fix Fastmail MCP OAuth scope registration | **Merged/Closed** | • Prefers protected-resource scopes over the authorization server’s broader catalog during MCP OAuth discovery.<br>• Includes selected scopes in RFC 7591 dynamic client registration.<br>• Adds a Fastmail-shaped regression test covering resource discovery, registration, and localhost redirect. |

Both PRs close the only issue updated today (#1094) and add automated tests, reducing future regression risk.

## 4. Community Hot Topics
No issues or PRs with comments or reactions in the last 24 h. The sole updated issue (#1094) has **0 comments / 0 👍**, and both PRs show undefined comment counts and zero reactions. Community discourse is currently quiet; the project’s momentum is driven by internal contributor pushes rather than external discussion.

## 5. Bugs & Stability
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| [#1094](https://github.com/moltis-org/moltis/issues/1094) – De-Preferring Models (provider preferred-model selection not replaceable) | **Medium** – UX/data-integrity bug; users couldn’t clear or change saved model preferences. | **Closed** (2026-08-26) | [#1104](https://github.com/moltis-org/moltis/pull/1104) (merged) |

No new crashes, regressions, or stability reports today.

## 6. Feature Requests & Roadmap Signals
No new feature requests opened or discussed in the last 24 h. The two merged PRs were **bug fixes with test coverage**, not new features. Based on recent patterns, the next version will likely continue incremental provider/MCP hardening rather than introduce user-facing features.

## 7. User Feedback Summary
- **Pain point resolved:** Users could not de-prefer or replace a provider’s saved model selection (#1094).  
- **Use case addressed:** Fastmail MCP OAuth flows now correctly negotiate scopes, avoiding auth failures for Fastmail users.  
- **Sentiment:** Neutral—no explicit satisfaction/dissatisfaction signals in the data; the fixes are preventive/corrective rather than delight-driven.

## 8. Backlog Watch
No long-unanswered issues or PRs appear in today’s feed. The only issue updated (#1094) was open since June but is now closed with a merged fix. All active PRs were merged within hours of their last update. Maintainer attention appears current; no stale items flagged.

---

*Data sourced from GitHub activity on 2026-08-27 for moltis-org/moltis. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-27

## 1. Today's Overview

CoPaw (QwenPaw) shows **high development velocity** with 39 PRs and 16 issues updated in the last 24 hours. The project just released **v2.2.0-beta.1**, signaling active progress toward the next major version. A healthy ratio of closed PRs (19) to open PRs (20) indicates steady throughput. Community engagement is strong — multiple issues have 7–11 comments, reflecting deep user investment in the multi-tenant Hub direction, desktop stability, and prompt-caching economics.

## 2. Releases

### v2.2.0-beta.1 (Beta) — Released 2026-08-27
**Release page:** https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.1

**Key Changes:**
- **Docs:** Updated scroll context manager blog (@niceIrene, [PR #7300](https://github.com/agentscope-ai/QwenPaw/pull/7300))
- **Fix (providers):** Sanitize DashScope tool schemas for strict models (@XiuShenAl, [PR #7284](https://github.com/agentscope-ai/QwenPaw/pull/7284))
- **Test (integration):** Targeted coverage improvements (truncated in data)

**Breaking Changes / Migration Notes:** None explicitly documented in the release summary. This is a beta — expect API/UI changes before stable. The version bump to `2.2.0b2` via [PR #7338](https://github.com/agentscope-ai/QwenPaw/pull/7338) suggests rapid iteration post-release.

**Verification Tracking:** [Issue #7333](https://github.com/agentscope-ai/QwenPaw/issues/7333) (release-duty bot) tracks installation verification across platforms with a 4-hour deadline.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary | Link |
|----|------|---------|------|
| **#7338** | chore | Bump version to 2.2.0b2 | [PR #7338](https://github.com/agentscope-ai/QwenPaw/pull/7338) |
| **#7332** | test | Stabilize timing-sensitive tests (TUI transport, kill-deadline sync) | [PR #7332](https://github.com/agentscope-ai/QwenPaw/pull/7332) |
| **#7327** | test(e2e) | Boost console coverage: +23 cases, extended assertions (~6-7% gain from 28.6% baseline) | [PR #7327](https://github.com/agentscope-ai/QwenPaw/pull/7327) |
| **#7323** | fix(installer) | Ignore NSIS caller during uninstall process checks (Windows) | [PR #7323](https://github.com/agentscope-ai/QwenPaw/pull/7323) |
| **#7194** | fix(workspace) | Make startup failure cleanup cancellation-safe | [PR #7194](https://github.com/agentscope-ai/QwenPaw/pull/7194) |
| **#7229** | bug | Local test runner skips suites / reports false success | [PR #7229](https://github.com/agentscope-ai/QwenPaw/pull/7229) |
| **#7258** | bug | WeChat channel "show thinking" setting ineffective | [PR #7258](https://github.com/agentscope-ai/QwenPaw/pull/7258) |
| **#7177** | enhancement | Deploy page homepage UX improvements (mobile) | [PR #7177](https://github.com/agentscope-ai/QwenPaw/pull/7177) |
| **#6285** | enhancement | Add `qwen3.8-max-preview` to Aliyun Token Plan model list | [PR #6285](https://github.com/agentscope-ai/QwenPaw/pull/6285) |
| **#7324** | bug | Scheduled task success notifications missing for some agents | [PR #7324](https://github.com/agentscope-ai/QwenPaw/pull/7324) |

**Theme:** Test infrastructure hardening, Windows installer reliability, workspace lifecycle safety, and mobile/web UX polish dominate merged work.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Summary | Underlying Need |
|------|------|----------|---------|-----------------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | Issue (Discussion) | 7 | **QwenPaw Hub (multi-tenant) coming in 2.2.0 — what should we build next?** | Team/organization adoption; admin controls, shared skills, billing, RBAC |
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | Issue (Bug) | 11 | Agent stops mid-task after planning output ("Now 2.1, 3.1, 3.2...") — requires "continue" prompt | **Core agent loop reliability**; users lose trust when agent stalls silently |
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | Issue (Bug) | 4 | Desktop/Docker ship OpenSSL 3.0.x (Python 3.11) — carrier DPI resets TLS handshakes | **Network resilience** in restricted/corporate environments; upgrade to Python 3.12+/OpenSSL 3.2+ |
| [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) | Issue (Feature) | 2 | Prompt cache hit rate observability — 81% vs OpenCode 96%, direct cost impact | **Cost transparency & optimization**; users need visibility to reduce API spend |
| [#7312](https://github.com/agentscope-ai/QwenPaw/issues/7312) | Issue (Bug) | 2 | Windows: `execute_shell_command` hangs due to inherited stdin pipe (missing `stdin=DEVNULL`) | **Windows backend reliability**; blocks shell tool execution |
| [#7346](https://github.com/agentscope-ai/QwenPaw/pull/7346) | PR (perf) | — | Stabilize prompt cache prefixes (move env metadata behind reusable prefix, sort tool list) | Directly addresses #7335; **cache efficiency** |
| [#7342](https://github.com/agentscope-ai/QwenPaw/pull/7342) | PR (feat) | — | Add prompt cache observability (token recording, APIs, aggregate stats, chat UI) | Stage 1 of #7335; **user-facing cache metrics** |
| [#7340](https://github.com/agentscope-ai/QwenPaw/pull/7340) | PR (feat) | — | Chat scroll lock for desktop console (persisted in localStorage) | Addresses [#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339); **streaming UX control** |

**Analysis:** The community is pulling the project in two directions: **(1) Enterprise readiness** (Hub, RBAC, admin controls) and **(2) Core reliability/cost efficiency** (agent loop stalls, TLS, prompt caching). The maintainers are responding to both in parallel.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR | Notes |
|----------|-------|--------|--------|-------|
| **Critical** | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) — Agent silently stops after planning output, requires manual "continue" | Open | None yet | High user impact (11 comments); breaks trust in autonomous execution |
| **Critical** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) — OpenSSL 3.0.x TLS stack causes carrier DPI handshake resets (Desktop + Docker) | Open | None yet | Blocks users on restricted networks; requires Python/OpenSSL upgrade |
| **High** | [#7312](https://github.com/agentscope-ai/QwenPaw/issues/7312) — Windows `execute_shell_command` hangs on inherited stdin | Open | None yet | Breaks shell tooling on Windows backend |
| **High** | [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) — Web agent memory search cross-contaminates sessions | Open | None yet | Privacy/data leakage risk; agent acts on wrong conversation context |
| **Medium** | [#7324](https://github.com/agentscope-ai/QwenPaw/issues/7324) — Scheduled task success notifications missing for some agents | Closed | Likely in #7324 | Partial notification delivery |
| **Medium** | [#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258) — WeChat channel "show thinking" setting ignored | Closed | Likely in #7258 | UI setting not respected |
| **Medium** | [#7310](https://github.com/agentscope-ai/QwenPaw/issues/7310) — Plugin conflict (datapaw) causes startup crashes | Open | Workaround: disable plugin | Plugin isolation needed |
| **Low** | [#7339](https://github.com/agentscope-ai/QwenPaw/issues/7339) — No scroll-lock during streaming (Desktop) | Open | [PR #7340](https://github.com/agentscope-ai/QwenPaw/pull/7340) | UX annoyance; fix in progress |

**Critical Path:** #6921 and #7298 affect core usability for power users and enterprise networks respectively. No fix PRs visible yet — these need maintainer triage.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for v2.2.0 / v2.3.0 |
|--------|--------|-------------------------------|
| **QwenPaw Hub (multi-tenant)** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) — explicit "coming in 2.2.0" | **Confirmed for 2.2.0** — active discussion shaping scope |
| **Prompt cache observability & optimization** | [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) + [PR #7342](https://github.com/agentscope-ai/QwenPaw/pull/7342) (observability) + [PR #7346](https://github.com/agentscope-ai/QwenPaw/pull/7346) (prefix stabilization) | **Observability in 2.2.0** (PR #7342 open); **optimization in 2.2.x/2.3.0** |
| **Workspace-scoped skill preload** | [PR #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) (under review) | **Likely 2.2.0** — aligns with Hub/team workflows |
| **Game-dev file language support (C#, shaders)** | [PR #7344](https://github.com/agentscope-ai/QwenPaw/pull/7344) (fixes #7068) | **Likely 2.2.0** — targeted console improvement |
| **Tool result simplification/deletion in ReAct loop** | [#7316](https://github.com/agentscope-ai/QwenPaw/issues/7316) — discussion | **Research phase** — may become a skill or built-in tool |
| **Mobile composer UX overhaul** | [PR #7334](https://github.com/agentscope-ai/QwenPaw/pull/7334) | **Likely 2.2.0** — consistent 44px targets, bottom drawers |
| **Model output capability separation from request limits** | [PR #7337](https://github.com/agentscope-ai/QwenPaw/pull/7337) | **Likely 2.2.0** — provider architecture cleanup |

**Prediction:** v2.2.0 will ship **Hub (beta), cache observability, mobile/console polish, skill preload, and game-dev language support**. Core agent loop fixes (#6921) and TLS upgrade (#7298) may slip to 2.2.1/2.3.0 unless prioritized.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Agent stalls silently mid-task** | [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) — 11 comments, detailed logs showing planning output then stop | 😡 **High frustration** — "need to say 'continue'" breaks autonomy |
| **Network/TLS blocks in corporate/carrier environments** | [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) — technical deep-dive, no workaround for desktop | 😰 **Blocked** — Python 3.11/OpenSSL 3.0.x is a known liability |
| **Cross-session memory leakage** | [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) — agent searches wrong conversation's memory | 😨 **Privacy/trust concern** |
| **Missing notifications for scheduled tasks** | [#7324](https://github.com/agentscope-ai/QwenPaw/issues/7324) — 3 agents, only 2 notified | 😐 **Reliability gap** |
| **Mobile web UX awkward** | [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) — deploy button buried, stop button too close | 😐 **Usability** — fix in progress |
| **Cost anxiety from low cache hit rate** | [#7335](https://github.com/agentscope-ai/QwenPaw/issues/7335) — 81% vs 96% benchmark, documented cost impact | 💰 **Economic pressure** — users measuring ROI |
| **Windows shell command hangs** | [#7312](https://github.com/agentscope-ai/QwenPaw/issues/7312) — reproducible, blocks automation | 😡 **Platform-specific blocker** |

**Positive Signals:** Active discussion on Hub (#7318) shows users *want* to adopt CoPaw for teams. PR velocity and rapid beta release indicate maintainer responsiveness.

---

## 8. Backlog Watch (Long-Unanswered / Needing Maintainer Attention)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) — Agent silent stall | 15 days (created 2026-08-12) | Core autonomy failure; 11 comments, no fix PR | 🔴 **Urgent** — needs root-cause analysis |
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) — TLS/OpenSSL upgrade | 2 days but deep technical | Blocks enterprise/carrier users; requires runtime bump | 🟠 **High** — architectural decision needed |
| [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) — Cross-session memory leak | 6 days | Data isolation bug; privacy risk | 🟠 **High** — no fix PR |
| [#7312](https://github.com/agentscope-ai/QwenPaw/issues/7312) — Windows stdin pipe hang | 1 day | Blocks shell tools on Windows | 🟡 **Medium** — clear fix (`stdin=DEVNULL`) |
| [#401](https://github.com/agentscope-ai/QwenPaw/pull/401) — README update (first-time contributor) | 5+ months | Stale PR; onboarding friction | 🟢 **Low** — housekeeping |
| [#534](https://github.com/agentscope-ai/QwenPaw/pull/534) — French (fr-CA) localization | 5+ months | Stale PR; i18n backlog | 🟢 **Low** — housekeeping |

**Recommendation:** Maintainers should triage #6921

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-27

## 1. Today's Overview
ZeroClaw shows **high architectural churn** with 50 PRs and 13 issues updated in 24 hours, but **no releases**. The project is deep in RFC-driven redesigns: memory lifecycle decoupling, sandbox policy granularity, computer-use desktop interaction, WASM plugin observers, and web-bundle compatibility are all active high-risk RFCs. Security hardening dominates merged work (cron atomicity, provider refresh guards, Git shell policy), while ZeroCode (TUI dashboard) receives rapid UX polish (reconnect resilience, clickable transcripts, ACP restore). Two new S2/S1 bugs landed today around concurrent message handling and temp-file permissions, with fix PRs already open.

## 2. Releases
**No new releases today.** The last release data is absent from the feed; the project appears to be in a pre-release stabilization window while multiple stacked RFCs and security patches land on `master`.

## 3. Project Progress — Merged / Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#9748](https://github.com/zeroclaw-labs/zeroclaw/pull/9748) | `fix(runtime): prevent stale provider refreshes from mutating replacement sessions` | Runtime / Providers | **Merged**. Adds monotonic `generation` counter to `RpcSession`; blocks stale `apply_model_provider`/`set_overrides_gated` calls from corrupting new sessions. Fixes #9719. |
| [#10264](https://github.com/zeroclaw-labs/zeroclaw/pull/10264) | `task: make Quickstart CLI validation tests locale-independent` | CI / Tests | **Closed**. Removes Fluent-locale flakiness from Quickstart validation suite. |
| [#10327](https://github.com/zeroclaw-labs/zeroclaw/issues/10327) | `bug: Discord URL fallback reports false partial image-load failure` | Channels / Discord | **Closed (accepted)**. Minor S3 issue; Discord gate now preserves original `[IMAGE:<url>]` marker when local save fails. |
| [#9651](https://github.com/zeroclaw-labs/zeroclaw/issues/9651) | `bug: migrated bare vision_model_provider cannot resolve keyed provider credentials` | Provider / Config | **Closed**. S1 workflow-blocker; migration path for keyed vision providers restored. |

## 4. Community Hot Topics — Most Active Discussions
| Item | Type | Comments | Core Tension |
|------|------|----------|--------------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | RFC | 20 | **Memory architecture**: Decouple durable storage (`Memory` trait) from lifecycle policy (consolidation, governance). High risk, affects gateways, channels, backends. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker | 14 | **Governance bottleneck**: Maintainer decision queue for RFCs/design issues. Signals review bandwidth saturation. |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC | 13 | **Sandbox policy**: Unify application-layer path admission with OS sandbox backends (Bubblewrap, Landlock, Seatbelt). High risk, security-critical. |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC | 11 | **Computer-use**: Desktop screen interaction & input control with bounded approval units, session arming, sidecar trust. High risk, new capability surface. |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | RFC | 7 | **AI-assisted review**: Ratify comment-only SOP pipeline with human-owned approval. Folds in production pilot behavior. |

**Underlying need**: Contributors are pushing **architectural boundaries** (memory, sandbox, desktop, WASM, web) faster than maintainer review can absorb. The tracker (#8692) exists *because* the queue is clogged.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Issue | Severity | Component | Status | Fix PR |
|-------|----------|-----------|--------|--------|
| [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | **S2 – Degraded** | Runtime / Daemon | Open | [#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411) (serialize same-session messages) |
| [#10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409) | **S2 – Info Leak** | Channels (temp files) | Open | Implicit in issue (0o600 permissions) |
| [#9651](https://github.com/zeroclaw-labs/zeroclaw/issues/9651) | **S1 – Blocked** | Provider / Config | **Closed** | Fixed via migration |
| [#10327](https://github.com/zeroclaw-labs/zeroclaw/issues/10327) | **S3 – Minor** | Channel / Discord | **Closed** | Accepted, no code change needed |

**Key insight**: The S2 concurrency bug (#10408) and its fix PR (#10411) were both filed **today** — rapid detection/response. Temp-file permission issue (#10409) is a classic shared-system hardening task.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Agent deletion & bulk cleanup in ZeroCode** | [#10244](https://github.com/zeroclaw-labs/zeroclaw/issues/10244) (in-progress) | **High** — explicit `zerocode` label, in-progress status |
| **Clickable transcript URLs in ZeroCode** | [#10386](https://github.com/zeroclaw-labs/zeroclaw/pull/10386) | **High** — UX polish, distinguished contributor, open |
| **Telegram secure model picker** | [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) (blocked) | **Medium** — blocked, needs author action |
| **Discord role-based authorization** | [#9971](https://github.com/zeroclaw-labs/zeroclaw/pull/9971) (blocked) | **Medium** — blocked, security-relevant |
| **Herdr observability integration** | [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) (do-not-merge) | **Low** — opt-in, do-not-merge, 2 months stale |

**Roadmap read**: ZeroCode UX hardening (deletion, transcripts, reconnect, ACP restore) is the **nearest user-visible milestone**. Channel security (Telegram picker, Discord roles) is stalled on review. Deep RFCs (memory, sandbox, computer-use, WASM, web-bundle) are **quarter-scale** efforts.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Segment |
|------------|----------|--------------|
| **No agent deletion in dashboard** | #10244: “Quickstart, testing, and dev workflows accumulate stale agents” | ZeroCode / Dashboard users |
| **Concurrent messages spawn parallel runs** | #10408: “Duplicate work and duplicate reply” when interrupt disabled | Channel / Daemon operators |
| **Temp files world-readable on shared hosts** | #10409: Voice/images leak via 0o644 | Multi-user server deployments |
| **Vision provider migration breaks keyed credentials** | #9651 (S1): `openrouter` vision fails after migration | Multi-provider / Multimodal users |
| **Discord image fallback leaves broken markers** | #10327: False partial-load failure | Discord channel users |
| **Quickstart tests fail on non-English locale** | #10264: Fluent locale breaks validation assertions | Contributors / CI runners |

**Satisfaction signal**: Users file **actionable, well-scoped bugs** with component/severity tags — indicates engaged operator community. ZeroCode gaps (deletion, transcripts, reconnect) are the loudest recurring theme.

## 8. Backlog Watch — Stalled High-Value Items Needing Maintainer Attention
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: Memory lifecycle decoupling | 98 days | **High** | Foundational storage architecture; 20 comments, no decision |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: Granular sandbox policy | 91 days | **High** | Security boundary unification; needs-maintainer-review |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) RFC: Computer-use desktop support | 94 days | **High** | New capability surface; security clarification folded in |
| [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) RFC: WASM plugin observer subscriptions | 71 days | **High** | Plugin extensibility; observer capability reserved |
| [#9975](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) RFC: Web bundle/daemon compatibility | 14 days | **High** | Web deployment contract; needs-maintainer-review |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) RFC: AI-assisted PR review SOP | 34 days | **High** | Process ratification; folds production pilot |
| [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) Herdr observability integration | 62 days | Medium | Opt-in telemetry; do-not-merge, stale |
| [#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) Telegram secure model picker | 13 days | Medium | Blocked, needs-author-action |
| [#9971](https://github.com/zeroclaw-labs/zeroclaw/pull/9971) Discord role-based auth | 14 days | Medium | Blocked, security-relevant |
| [#10075](https://github.com/zeroclaw-labs/zeroclaw/pull/10075) Thread live config to tool registry (SSRF hardening) | 9 days | **High** | Stacked security fix (3/3); needs-author-action |

**Maintainer bandwidth alert**: 7 high-risk RFCs + 3 blocked security PRs + 1 stacked SSRF hardening chain = **review capacity exceeded**. The tracker (#8692) is the symptom; the root cause is architectural ambition outpacing governance throughput.

---

**Project Health Score**: 🟡 **Caution** — High velocity on security/UX patches, but RFC backlog indicates architectural debt accumulating faster than resolution. Next release likely a **stabilization cut** once ZeroCode UX gaps close and stacked security PRs land.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*