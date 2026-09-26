# OpenClaw Ecosystem Digest 2026-09-26

> Issues: 176 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-26 04:38 UTC

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

# OpenClaw Project Digest — 2026-09-26

## 1. Today's Overview

OpenClaw shows **exceptionally high activity** with 176 issues and 500 PRs updated in the last 24 hours — a volume suggesting an active release stabilization sprint. The project is currently in a **pre-release fix cycle** (tracking toward 2026.9.7 per #157531), with multiple P0/crash-loop regressions on the 2026.9.5 baseline dominating attention. No new release was published today. The PR queue is heavily weighted toward performance optimization ("deslop" refactoring passes, gateway main-thread offloading) and regression fixes, indicating maintainers are prioritizing stability over new features.

---

## 2. Releases

**No new releases published today.** The latest tracked baseline is **2026.9.5 (ec9c1a1)**, which has several known regressions. A fixes tracker for **2026.9.7** is active (#157531) with 18/21 P1 candidates identified.

---

## 3. Project Progress (Merged/Closed PRs Today)

**118 PRs merged/closed** in the last 24h. Key thematic clusters from the open PR queue (which signals what's being prepared for merge):

| Theme | Representative PRs | Status |
|-------|-------------------|--------|
| **Gateway performance / main-thread offloading** | #158586 (chat admission reads), #158588 (Activity recap reads), #158648 (deduplicate title reads), #158649 (typing cleanup bucketing), #158555 (Control UI prewarm) | 👀 Ready / ⏳ Waiting |
| **"Deslop" refactoring passes (3rd sweep)** | #158638 (plugin runtime), #158613 (Codex harness), #158598 (auto-reply), #158571 (shared packages), #158512 (iOS app) | 👀 Ready |
| **Bug fixes with repro** | #158611 (SQLite symlink alias DB conflict), #158636 (Telegram Bash command progress), #157565 (idle Codex catalog relisting), #145639 (Bonjour ENODEV bursts) | 👀 Ready / 📣 Needs proof |
| **Build / CI / Windows fixes** | #152875 (refuse dist rebuild under live Gateway), #157885 (Windows special-char paths), #157844 (CI ratchet false failures) | 📣 Needs proof / ⏳ Waiting |
| **UX / feature polish** | #158577 (unread session recency), #158578 (PR mention banners), #158582 (Android provider setup), #158120 (owner hands keys/config to agent) | ⏳ Waiting / 👀 Ready |

> **Note**: The open PR list shows what's *staged*; the 118 merged/closed PRs likely include many of the above plus additional fixes. The "deslop" series suggests a systematic code-health campaign.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | 👍 | Core Issue |
|------|------|----------|-----|------------|
| [#155753](https://github.com/openclaw/openclaw/issues/155753) | Issue (CLOSED) | 30 | 0 | **Model-catalog CPU burn**: `readFullModelCatalog()` triggers `refreshExpiredCatalog()` on every read → 100% core pinned. Root cause identified in #154276/#153422. |
| [#152981](https://github.com/openclaw/openclaw/issues/152981) | Issue (OPEN) | 17 | 0 | **Gateway startup hangs ~17 min** at `sidecars.model-runtime` on Windows; plugin publication timeout. Regression on 2026.9.5. |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | Issue (OPEN) | 16 | 0 | **Umbrella: duplicate transcript/replay/context assembly** across MSTeams, webchat, Telegram, followup queue — systemic architectural issue. |
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | Issue (OPEN) | 13 | 0 | **2026.9.7 Fixes Tracker** — coordinating 18+ P1 fixes between 2026.9.6 → 2026.9.7. |
| [#156712](https://github.com/openclaw/openclaw/issues/156712) | Issue (OPEN) | 11 | 0 | **`openclaw triage` repair subprocess** doesn't exit cleanly, holds `gateway-lifecycle` lock, blocks app restart. |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | Issue (OPEN) | 10 | 5 | **Per-agent dreaming configuration** — all workspaces dream simultaneously causing OOM; need per-agent control/scheduling. |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Issue (OPEN) | 9 | 0 | **Gateway startup wall-time scales with plugin count** — Discord, Codex, WeChat plugins dominate 120s budget. |
| [#158648](https://github.com/openclaw/openclaw/pull/158648) | PR (OPEN) | — | 0 | Perf: deduplicate session title source reads (gateway) |
| [#158638](https://github.com/openclaw/openclaw/pull/158638) | PR (OPEN) | — | 0 | Refactor: deslop plugin runtime third pass (XL, compat risk) |

**Underlying needs**: Users are hitting **scalability walls** (plugin count → startup time, concurrent workspaces → memory/CPU), **regression clusters** around 2026.9.5, and **architectural debt** (duplicate transcript paths, catalog refresh loops). The "deslop" PR wave suggests maintainers recognize technical debt is impeding stability.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **P0 — Crash-loop / CPU burn** | [#155753](https://github.com/openclaw/openclaw/issues/155753) Model-catalog expiry/rebuild loop pins CPU core | **CLOSED** | Likely fixed in deslop PRs | Root cause: `readFullModelCatalog()` → `refreshExpiredCatalog()` on every read; TTL ~60s |
| **P0 — Startup hang** | [#152981](https://github.com/openclaw/openclaw/issues/152981) Gateway startup hangs 17 min at model-runtime publication (Windows) | OPEN | No | Regression on 2026.9.5; blocks beta release |
| **P0 — Startup scaling** | [#155859](https://github.com/openclaw/openclaw/issues/155859) Gateway startup time scales with plugin count | OPEN | No | Discord/Codex/WeChat plugins add 10s+ each |
| **P0 — Update failure** | [#158231](https://github.com/openclaw/openclaw/issues/158231) `managed-service-preflight` fails on 2026.9.5 → 2026.9.6 (macOS) | OPEN | No | Fresh report (2026-09-25) |
| **P0 — Subprocess leak** | [#156712](https://github.com/openclaw/openclaw/issues/156712) `openclaw triage` subprocess holds gateway-lifecycle lock | OPEN | No | Blocks app restart; manual-only repro |
| **P0 — Mac unresponsive** | [#156392](https://github.com/openclaw/openclaw/issues/156392) Mac Mini M5 Pro: Gateway 100% CPU, heartbeat disabled | OPEN | No | Regression on 2026.9.5 |
| **P1 — Silent model escalation** | [#147344](https://github.com/openclaw/openclaw/issues/147344) Auto-escalation to Sonnet + HIGH thinking burns ~$25 | OPEN | No | Cost/safety issue; no user approval |
| **P1 — Session contamination** | [#49523](https://github.com/openclaw/openclaw/issues/49523) Transcript header `cwd` from `process.cwd()` → cross-agent workspace leak | CLOSED | Linked PR open | Stale but high-impact |
| **P2 — Thread binding** | [#42986](https://github.com/openclaw/openclaw/issues/42986) Telegram: support thread binding for subagent sessions | OPEN | No | Feature gap vs Discord |
| **P2 — MCP servers not reaching agent** | [#122712](https://github.com/openclaw/openclaw/issues/122712) `openclaw mcp add` servers healthy but not in claude-cli session | CLOSED | No | Stale; may persist |

> **Pattern**: Multiple P0s cluster around **gateway startup**, **model catalog**, and **subprocess lifecycle** — all touched by the 2026.9.5 release. Several have "clawsweeper:manual-only" or "needs-live-repro" tags, slowing fixes.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals | Likelihood for Next Version |
|---------|-------|---------|----------------------------|
| **Per-agent dreaming config** | [#67413](https://github.com/openclaw/openclaw/issues/67413) (10 👍, 5 comments) | P2, 5 👍, memory pressure pain point | Medium — architectural, needs scheduling redesign |
| **Per-agent TTS/STT overrides** | [#66252](https://github.com/openclaw/openclaw/issues/66252) (8 comments, 1 👍) | Multi-agent multi-language need | Medium — provider abstraction exists |
| **Telegram thread binding** | [#42986](https://github.com/openclaw/openclaw/issues/42986) (5 comments, 1 👍) | Parity with Discord; queueable-fix label | High — clear shape, source repro, P2 |
| **Task-scoped decision models (RFC)** | [#156341](https://github.com/openclaw/openclaw/issues/156341) | New RFC, inspectable evaluation | Low — exploratory, P3 |
| **Provider-aware concurrency/backpressure** | [#126727](https://github.com/openclaw/openclaw/issues/126727) | Native subagent parallelism hitting rate limits | Medium — scaling pain |
| **Signal live tool-call progress** | [#77202](https://github.com/openclaw/openclaw/issues/77202) (4 comments, 1 👍) | Edit-free pattern parity with Telegram | Medium — UX gap |
| **Native approval buttons (Feishu/Teams/Mattermost)** | [#104521](https://github.com/openclaw/openclaw/issues/104521) (5 comments, 1 👍) | Transport limitation workaround | Medium — product decision needed |
| **Rendered Markdown preview in Review** | [#128090](https://github.com/openclaw/openclaw/issues/128090) (4 comments, 3 👍) | UX polish, low risk | High — straightforward |

**Prediction**: Near-term (2026.9.7) will focus on **stability fixes only**. Features with `queueable-fix` + `fix-shape-clear` labels (Telegram thread binding, plugin toolContext media visibility #156548) have highest merge probability. Per-agent config features require product decisions (`needs-product-decision` tag) and likely slip to 2026.10+.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **"Gateway won't start / takes forever"** | #152981 (17 min hang), #155859 (scales with plugins), #147369 (global install failed) | Blocks onboarding & updates; Windows & multi-plugin setups hit hardest |
| **"CPU burns / machine unresponsive"** | #155753 (catalog loop), #156392 (Mac 100% CPU), #157565 (idle Codex relisting) | Silent resource drain; costs money (cloud) or locks up dev machines |
| **"Updates break / fail silently"** | #158231 (preflight fail), #147369 (global install), #107607 (sqlite version mismatch) | Fear of upgrading; rollback friction |
| **"Multi-agent isolation broken"** | #49523 (cwd leak), #123471 (any agent sends as any bot), #148789 (fallback misattribution) | Security & correctness in shared deployments |
| **"Transcript/context duplication everywhere"** | #69208 (umbrella, 16 comments), #137493 (internal envelope leaks to webchat), #91914 (queued inbound cancels delivery) | Data integrity & debugging nightmare |
| **"Platform parity gaps"** | #42986 (Telegram threads), #68105 (RTL bidi), #50530 (Telegram newlines), #113873 (Telegram quote → `[object Object]`) | Non-Discord channels feel second-class |
| **"Approval/UX friction"** | #104521 (no native buttons), #58887 (typing indicator after STT), #158577 (unread recency bump) | Daily workflow annoyance |

**Sentiment**: **Frustrated but engaged**. Users file detailed repros, track regressions across versions, and propose fixes. The "silver shellfish" 🦪 and "diamond lobster" 🦞 ratings indicate a structured severity taxonomy the community respects. Dissatisfaction centers on **regression density in 2026.9.x** and **architectural gaps in multi-agent/multi-channel isolation**.

---

## 8. Backlog Watch — Stalled High-Impact Items Needing Maintainer Attention

| Item | Age | Labels | Why It Matters | Blockers |
|------|-----|--------|----------------|----------|
| [#69208](https://github.com/openclaw/openclaw/issues/69208) Umbrella: duplicate transcript/replay/context | 5 months | P1, needs-product-decision, needs-info | **Systemic architectual flaw** affecting 5+ channels; root cause for many "message-loss" bugs | Requires cross-cutting redesign; no owner |
| [#51620](https://github.com/openclaw/openclaw/issues/51620) Gateway restart drops queued/in-flight messages | 6 months | P2, needs-product-decision, needs-live-repro | **Data loss on restart** — critical for production deployments | Needs durable queue design decision |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) Per-agent dreaming config | 5 months | P2, needs-product-decision, 5 👍 | **OOM kills** on multi-workspace instances; 5 👍 shows demand | Scheduling architecture decision |
| [#134042](https://github.com/openclaw/openclaw/issues/134042) Official AgentMail plugin

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem (2026-09-26)

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape shows **bimodal maturity**: a cluster of high-velocity, production-grade platforms (OpenClaw, Hermes Agent, ZeroClaw, NanoBot, CoPaw) operating in active stabilization sprints, and a long tail of quieter or early-stage projects (IronClaw, PicoClaw, NullClaw, LobsterAI) with sporadic maintenance. **Security hardening, multi-agent isolation, provider abstraction, and gateway reliability** dominate cross-project engineering investment. No project shipped a release today—indicating a **broad pre-release hardening window** across the ecosystem. Community engagement correlates strongly with production deployment scale: projects with documented multi-channel, multi-agent usage (OpenClaw, ZeroClaw, Hermes, CoPaw) exhibit the highest issue/PR velocity and most structured severity taxonomies.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Last Release | Release Age | Health Score | Primary Phase |
|---------|--------------|-----------|--------------|-------------|--------------|---------------|
| **OpenClaw** | 176 | 500 | 2026.9.5 (ec9c1a1) | 21 days | 🟡 High activity, regression-heavy | Pre-release stabilization (2026.9.7 tracker) |
| **ZeroClaw** | 16 | 50 | v0.8.5 | ~30+ days | 🟠 Intense security stabilization | S0/S1 bug convergence + OIDC stack landing |
| **Hermes Agent** | 14 | 50 | v0.21.5+2369 | 2 days | 🟢 High velocity, patch imminent | Stabilization sprint → v0.21.6 |
| **NanoClaw** | 5 | 50 | v2.4.0 (c313d061) | ~21 days | 🟡 Caution — 0 issue closure, 5 new critical bugs | Setup/gateway hardening sprint |
| **CoPaw (QwenPaw)** | 10 | 13 | 2.2.1 stable / 2.2.0b7 beta | ~30 days | 🟡 High contributor velocity, **zero merges** | Review bottleneck; UI/provider hardening |
| **NanoBot** | 4 | 15 | v0.3.5 | 10 days | 🟢 Healthy — quick regressions turnaround | Active maintenance, provider expansion |
| **LobsterAI** | 0 | 7 (1 merged) | — | — | 🟢 Stable, focused bug-fix momentum | Core stability + backlog grooming |
| **PicoClaw** | 2 | 4 | nightly-50-gbbf6893c | — | 🟡 Steady, review-bottlenecked | Provider modernization (Responses API) |
| **IronClaw** | 0 | 2 | — | — | 🟢 Quiet maintenance | Automated CI + new contributor feature |
| **NullClaw** | 0 | 1 | — | — | 🟡 Low activity, single critical fix in review | Supervised autonomy correctness fix |
| **Moltis** | 0 | 0 | — | — | ⚪ No activity | Dormant |
| **ZeptoClaw** | 0 | 0 | — | — | ⚪ No activity | Dormant |

> **Note**: "Issues/PRs (24h)" = items updated in last 24h per digest. Health scores synthesize velocity, merge throughput, release cadence, and bug severity.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw | Peer Comparison |
|-----------|----------|-----------------|
| **Scale of operations** | 176 issues / 500 PRs/24h — **10× next peer** | Only ZeroClaw (50 PRs) and Hermes (50 PRs) approach similar raw velocity |
| **Regression taxonomy** | Structured P0–P2 with "silver shellfish 🦪 / diamond lobster 🦞" severity ratings | Most peers use informal severity; only ZeroClaw matches formal S0–S2 taxonomy |
| **Multi-channel maturity** | 5+ channels (Discord, Telegram, MSTeams, Webchat, Feishu, WeChat) with known duplication bugs | Hermes (Signal/Slack), CoPaw (QQ), NanoBot (Feishu/Napcat/Email), LobsterAI (OpenClaw-based) have narrower coverage |
| **Architectural self-awareness** | Explicit "deslop" refactoring campaign (3rd sweep), umbrella issue #69208 tracking systemic duplication | ZeroClaw has similar XL architectural PRs; others lack cross-cutting debt visibility |

### Technical Approach Differences
- **Gateway-centric architecture**: OpenClaw's gateway is a distinct, instrumented process handling admission, transcript assembly, and plugin runtime — peers embed gateway logic in main process (Hermes, NanoBot) or delegate to host runtime (ZeroClaw).
- **Plugin runtime as first-class citizen**: "Deslop" passes target plugin runtime, Codex harness, auto-reply — indicating a **plugin ecosystem strategy** absent in most peers.
- **Model catalog as hot path**: CPU-burn regression (#155753) reveals catalog refresh on every read — a scalability pattern unique to OpenClaw's scale.

### Community Size Signals
- **Highest absolute engagement**: 30-comment issue (#155753), 17-comment startup hang (#152981), 16-comment umbrella (#69208)
- **Structured severity culture**: Community uses 🦪/🦞 ratings, tracks regressions across versions (2026.9.5 → 2026.9.7)
- **Production deployment evidence**: Windows/macOS/Linux regression clusters, multi-plugin startup scaling complaints, cloud cost incidents ($25 auto-escalation)

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Gateway / host process reliability** | OpenClaw, Hermes, ZeroClaw, NanoClaw, NanoBot | Startup scaling (OpenClaw #155859, Hermes #123463), PID/identity races (Hermes #123463, NanoClaw #3907), transcript duplication (OpenClaw #69208, Hermes #123462), log rotation (NanoClaw #3916) |
| **Multi-agent isolation & ownership** | OpenClaw, ZeroClaw, Hermes, CoPaw | Per-agent workspace/cwd leakage (OpenClaw #49523), session-tool ownership scoping (ZeroClaw #9646/#9746), delegate filesystem sandboxing (ZeroClaw #10391), kanban state corruption (Hermes #121281) |
| **Provider abstraction & cost control** | OpenClaw, NanoBot, PicoClaw, LobsterAI, CoPaw, Hermes | OpenAI Responses API migration (PicoClaw #3381, OpenClaw implicit), Cheaper Inference / Requesty / OpenRouter gateways (NanoBot #5915, PicoClaw #3393, LobsterAI #2766, CoPaw #7986), Copilot/DeepSeek parser fixes (Hermes #94881, ZeroClaw #11130) |
| **Security / authentication hardening** | ZeroClaw, Hermes, IronClaw, NanoClaw | OIDC/PKCE enrollment (ZeroClaw #11082), MCP OAuth issuer mismatch (Hermes #95508), Microsoft delegated OAuth (NanoBot #5609), RPC principal enforcement (ZeroClaw #10259/#10263) |
| **Channel parity & UX polish** | OpenClaw, NanoBot, CoPaw, Hermes, LobsterAI | Telegram thread binding (OpenClaw #42986), Feishu checkpoint leakage (NanoBot #5903), QQ event replay (CoPaw #7946), Slack thread lifecycle (Hermes #123454–57), global search scope (LobsterAI #1634) |
| **Context/history management** | OpenClaw, Hermes, ZeroClaw, CoPaw, LobsterAI | Compaction budget miscalculation (CoPaw #7628), replay-after-model-call (LobsterAI #2763), transcript pagination (ZeroClaw #10596), history pagination (CoPaw #7542) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | **Multi-channel gateway platform** — Discord/Telegram/Teams/Feishu/Webchat as peers | Teams running shared, multi-agent, multi-channel deployments | Gateway process + plugin runtime + model catalog + transcript assembly as separate domains |
| **ZeroClaw** | **Security-first multi-agent runtime** — OIDC, principal ownership, SOP sandboxing | Operators requiring audit-grade isolation, portable agent bundles | Capability-based RPC, per-agent workspace scoping, ACP transcript persistence, agent export/import |
| **Hermes Agent** | **Desktop-integrated personal agent** — Electron UI, cron, Signal/Slack, kanban scheduling | Power users wanting local-first agent with scheduling & desktop integration | Managed venv interpreter, POSIX cron on managed Python, Electron 44+, `hermes insights` CLI |
| **NanoBot** | **Lightweight multi-provider WebUI + channels** — Feishu, Napcat, Email, WebUI | Developers wanting extensible WebUI + channel adapters with provider routing | Provider capability declaration (#5204), MCP pagination, JSON Schema unions, composer draft persistence |
| **CoPaw (QwenPaw)** | **Qwen-ecosystem agent console** — Aliyun models, QQ gateway, browser SDK, custom endpoints | Chinese-market developers building on Qwen/Aliyun stack | Aliyun Token Plan integration, QQ official bot gateway, browser automation with profile persistence |
| **NanoClaw** | **Container-orchestrated agent groups** — Iron Proxy, host/spawn model, sweep timers | Operators running ephemeral agent containers at scale | `ncl` CLI, container spawn/restart, Iron Proxy arm64, setup/install hardening |
| **LobsterAI** | **OpenClaw-derived UI polish** — model selector, search, scheduled tasks, provider registry | Teams wanting OpenClaw backend with refined frontend | React renderer, cowork UI, Requesty/OpenRouter providers, global search redesign |
| **PicoClaw** | **Embedded/edge agent** — DeltaChat, Parallel Search MCP, provider migration | Resource-constrained or privacy-first deployments | DeltaChat refactor (-200 LOC), OpenAI Responses API, Cheaper Inference |
| **Hermes / ZeroClaw / NanoClaw** | **Runtime/daemon architecture** — long-lived processes, RPC, config authority | — | |
| **OpenClaw / NanoBot / CoPaw / LobsterAI** | **Gateway + WebUI architecture** — HTTP/WebSocket frontends, channel adapters | — | |

---

## 6. Community Momentum & Maturity

### Tier 1: **Rapidly Iterating / Production-Hardening** (High velocity, structured process)
- **OpenClaw**: Highest volume, formal severity taxonomy, release tracker (#157531), "deslop" campaign
- **ZeroClaw**: S0/S1 bug convergence, XL architectural PRs, distinguished contributors, security stack landing
- **Hermes Agent**: Daily patch velocity, Windows/macOS/Linux platform matrix, imminent v0.21.6
- **NanoBot**: 10-day release cycle, quick regression turnaround, provider ecosystem expansion

### Tier 2: **Active but Bottlenecked** (High contributor output, low merge throughput)
- **CoPaw**: 13 PRs/24h, **0 merges** — 4 first-time contributor fixes + 4 month-old PRs stalled
- **NanoClaw**: 50 PRs/24h, 0 issue closure, 5 new critical bugs — fix-forward without triage closure
- **PicoClaw**: 4 PRs open, CLA bot blocking flagship migration (#3381), DeltaChat refactor 85 days stale

### Tier 3: **Stable Maintenance** (Low churn, focused scope)
- **LobsterAI**: 1 merge + 6 stale PR updates — core stability + UI backlog grooming
- **IronClaw**: Automated CI PR + 1 new contributor feature — quiet but healthy
- **NullClaw**: Single critical fix in review — minimal but purposeful

### Tier 4: **Dormant / Early**
- **Moltis**, **ZeptoClaw**: No 24h activity

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Gateway reliability > new features** | OpenClaw 2026.9.7 tracker (18/21 P1 fixes), Hermes v0.21.6 patch, NanoClaw v2.4.1 hardening | **Invest in gateway observability, startup scaling, and transcript deduplication** — users block on reliability |
| **Multi-agent isolation is a security requirement** | ZeroClaw 4 S0 issues in 2 days (ownership scoping), OpenClaw cwd leak (#49523), Hermes kanban corruption | **Design per-agent workspace/capability boundaries from day one** — retrofitting causes S0 bugs |
| **Provider gateway abstraction accelerating** | 5+ projects adding Cheaper Inference / Requesty / OpenRouter / Responses API in last 30 days | **Build provider-agnostic routing with capability declaration** — NanoBot #5204 is the emerging pattern |
| **Channel parity gaps drive churn** | Telegram threads (OpenClaw), Feishu checkpoints (NanoBot), QQ replay (CoPaw), Slack lifecycle (Hermes) | **Abstract channel adapters with normalized event models** — don't leak transport specifics to agent logic |
| **Cost observability becoming table stakes** | OpenClaw $25 auto-escalation

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-26

---

## 1. Today's Overview
NanoBot shows **high maintenance velocity** with 15 PRs and 4 issues updated in the last 24 hours. The project is in active stabilization mode: two PRs merged (composer draft persistence, test consolidation), while 13 PRs remain open covering provider expansions, MCP pagination fixes, JSON Schema union handling, and channel-level bugs (Feishu, Napcat, Email). No new release cut today; the last release was v0.3.5 on 2026-09-16. Community engagement is modest (few 👍/comments), but contributors are steadily addressing regressions and UX polish across WebUI, channels, and core agent logic.

---

## 2. Releases
**No new releases today.**  
Last release: **v0.3.5** (2026-09-16) — [Release Notes](https://github.com/HKUDS/nanobot/releases/tag/v0.3.5)

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#5912](https://github.com/HKUDS/nanobot/pull/5912) | fix(webui): preserve composer drafts across navigation and reloads | Bug fix / UX | **High** — Persists draft text, mentions, and quoted context per conversation in `localStorage`; survives refresh and conversation switching. Closes [#5910](https://github.com/HKUDS/nanobot/issues/5910). |
| [#5907](https://github.com/HKUDS/nanobot/pull/5907) | test: consolidate redundant coverage across the test suite | Refactor / Test | **Medium** — Removed 703 net lines across 34 files; parameterized 46 Python test groups while preserving all 171 original assertions. Faster CI, easier maintenance. |

---

## 4. Community Hot Topics (Most Active Items)
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) **Feishu: hidden session-checkpoint marker leaked to user** | 2 comments, updated today | **Channel hygiene** — Internal checkpoint message `"Continue the active task from the working-memory checkpoint above."` escapes to end-users after idle compaction on Feishu/Lark. Indicates missing message-filtering for system markers in channel adapters. |
| [#5908](https://github.com/HKUDS/nanobot/issues/5908) **WebUI: live tokens/sec while streaming** | 2 comments, updated yesterday | **Observability** — Users want real-time generation-speed feedback to detect stalls. No PR yet; likely a small WebUI overlay on the streaming response. |
| [#5780](https://github.com/HKUDS/nanobot/pull/5780) **Stop sending context compaction notifications** | 11 days open, updated yesterday | **Noise reduction** — Auto-compaction notices leak to users; author argues they should be invisible (retained only for `/compact` command). Config toggle requested if intentional. |

---

## 5. Bugs & Stability (Reported/Updated Today)
| Severity | Issue / PR | Summary | Fix PR? |
|----------|------------|---------|---------|
| **High** | [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Feishu delivers internal checkpoint marker to user after idle compaction | No PR yet |
| **High** | [#5918](https://github.com/HKUDS/nanobot/pull/5918) | JSON Schema `type: ["integer", "string"]` incorrectly coerces/ rejects valid values (e.g., `"00123"` → `123`, `"doc-A"` rejected) | **Yes** — [#5918](https://github.com/HKUDS/nanobot/pull/5918) open |
| **Medium** | [#5916](https://github.com/HKUDS/nanobot/pull/5916) | MCP tool discovery stops at first page; subsequent pages ignored even if `enabledTools` selects them | **Yes** — [#5916](https://github.com/HKUDS/nanobot/pull/5916) open |
| **Medium** | [#5914](https://github.com/HKUDS/nanobot/pull/5914) | Napcat image download rejects non-numeric `file_size` (crashes on malformed payload) | **Yes** — [#5914](https://github.com/HKUDS/nanobot/pull/5914) open |
| **Low** | [#5913](https://github.com/HKUDS/nanobot/pull/5913) | Unparsable `NANOBOT_MAX_CONCURRENT_REQUESTS` raises instead of falling back to default | **Yes** — [#5913](https://github.com/HKUDS/nanobot/pull/5913) open |

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Live tokens/sec indicator in WebUI** | [#5908](https://github.com/HKUDS/nanobot/issues/5908) | High — small UI addition, clear user demand |
| **Cheaper Inference as built-in gateway provider** | [#5915](https://github.com/HKUDS/nanobot/pull/5915) | High — PR open, adds popular OpenAI-compatible router with 15–60% cost savings |
| **Microsoft delegated OAuth for Office365/Outlook email** | [#5609](https://github.com/HKUDS/nanobot/pull/5609) | Medium — PR open 27 days, addresses mandatory OAuth migration; security-sensitive |
| **Email recipient-alias filtering** | [#5606](https://github.com/HKUDS/nanobot/pull/5606) | Medium — PR open 27 days, needed for shared-mailbox deployments |
| **Responses provider capabilities declaration** | [#5204](https://github.com/HKUDS/nanobot/pull/5204) | Medium — Large refactor (56 days open), foundational for multi-provider routing |

---

## 7. User Feedback Summary
- **Pain points**:  
  - Feishu users see internal system messages ([#5903](https://github.com/HKUDS/nanobot/issues/5903)) — breaks trust in channel isolation.  
  - WebUI draft loss on conversation switch/refresh ([#5910](https://github.com/HKUDS/nanobot/issues/5910), now fixed in [#5912](https://github.com/HKUDS/nanobot/pull/5912)).  
  - Auto-compaction notifications spam users ([#5780](https://github.com/HKUDS/nanobot/pull/5780)).  
  - MCP tools silently missing when server paginates ([#5916](https://github.com/HKUDS/nanobot/pull/5916)).  
- **Positive signals**:  
  - Contributors rapidly close UX regressions (draft persistence merged same day as issue).  
  - Provider ecosystem expanding (Cheaper Inference, JEV client [#5825](https://github.com/HKUDS/nanobot/pull/5825)).  
  - Test suite consolidation shows maintainer investment in velocity.

---

## 8. Backlog Watch (Stale but Important)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) **refactor(providers): declare Responses capabilities** | 56 days | Foundational refactor for provider routing, reasoning replay, compaction — blocks clean multi-provider support. |
| [#5005](https://github.com/HKUDS/nanobot/pull/5005) **fix(exec): allow scoped tmp cleanup commands** | 68 days | Security-sensitive; current blanket `rm` block breaks legitimate test/build scripts. Marked `conflict`. |
| [#5386](https://github.com/HKUDS/nanobot/pull/5386) **feat(mcp): preserve MCP Apps result metadata** | 44 days | Enables structured app results without polluting model context; key for rich tool integrations. |
| [#5605](https://github.com/HKUDS/nanobot/pull/5605) **fix(email): only mark \Seen on delivered messages** | 27 days | Prevents false-read marking on filtered/rejected mail — data integrity for email channel. |
| [#5780](https://github.com/HKUDS/nanobot/pull/5780) **stop sending context compaction notifications** | 11 days | UX polish; simple fix but needs maintainer decision on config vs. hard invisible. |

---

**Overall Health**: 🟢 **Healthy** — High PR throughput, quick turnaround on user-facing regressions, active provider/channel expansion. Main risk: several foundational PRs ([#5204](https://github.com/HKUDS/nanobot/pull/5204), [#5005](https://github.com/HKUDS/nanobot/pull/5005)) stalled >6 weeks; merging them would unblock next-gen provider architecture and safer exec sandbox.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-26

## 1. Today's Overview
Hermes Agent shows **very high development velocity** today with 50 PRs and 14 issues updated in 24 hours. No new release was published. The activity is heavily skewed toward **bug fixes and stability improvements** across multiple platforms (Windows, macOS, Linux), with particular focus on gateway reliability, cron job execution, Windows locale handling, and plugin update safety. Several user-facing features are also in flight (Signal/Slack enhancements, `hermes insights` CLI, kanban scheduling). The project appears to be in a **stabilization sprint** ahead of a likely near-term release.

## 2. Releases
**No new releases today.** The latest tagged release remains `v0.21.5+2369.gf8dddd7` (2026-09-24). The volume of P1/P2 bug fixes merged or in review suggests a patch release (`v0.21.6`) may be imminent.

## 3. Project Progress — Merged / Closed Today
| Item | Type | Summary | Link |
|------|------|---------|------|
| #123480 | Issue (Closed) | Added `desktop.nvidia_swiftshader` config option (sibling of `desktop.disable_gpu`) to give `HERMES_DESKTOP_NVIDIA_SWIFTSHADER` a persistent home in `config.yaml`. | [#123480](https://github.com/NousResearch/hermes-agent/issues/123480) |
| *(4 PRs merged/closed — not individually listed in feed)* | PRs | The feed shows 4 PRs moved to merged/closed state; details not provided in the snapshot. | — |

**Key advances in open PRs (likely to land soon):**
- **Gateway stability**: #123472 fixes duplicate transcript flushes (#123462); #123482 unifies launcher identity parsing to resolve false “no gateway” reports on Windows (#123463); #123206 boots Windows gateway under the checkout’s committed interpreter (PATH-race fix).
- **Cron reliability**: #123051 & #123479 run POSIX `.py` cron scripts on the selected managed venv interpreter (fixes #123440); #122290 restores activated dependency site-packages for external workers.
- **Plugin safety**: #122007 preserves user files in subdirectory installs and ignored data dirs during `hermes plugins update`.
- **Desktop**: #122132 upgrades Electron to 44.4.5 (security baseline past CVE-2026-85046); #123453 silences spurious “reconnect” log on quit.
- **New CLI insight**: #123474 adds `hermes insights` showing per-tool session reach and eager/deferred schema token costs.
- **Kanban scheduling**: #123481 introduces ready-queue admission with deferral instead of enqueue-then-fail.
- **Signal/Slack UX**: #122033 (Signal `note_to_self` opt-out); #123454–#123457 (Slack thread clarity, numbered clarify choices, thread-root document recovery, lifecycle status values).

## 4. Community Hot Topics (Most Discussed)
| Item | Comments | Reactions | Core Need / Signal |
|------|----------|-----------|---------------------|
| [#121281](https://github.com/NousResearch/hermes-agent/issues/121281) | 5 | 0 | **Kanban state corruption**: manual `blocked→ready` promote leaves stale `last_failure_error`, causing permanent `blocker_auth` parking. Operators’ explicit actions are silently ignored. |
| [#95508](https://github.com/NousResearch/hermes-agent/issues/95508) | 4 | 0 | **MCP OAuth issuer mismatch** for Indeed (trailing slash mismatch). Blocks `hermes mcp login indeed` — auth flow broken for a popular integration. |
| [#122402](https://github.com/NousResearch/hermes-agent/issues/122402) | 4 | 0 | **Ubuntu historical takeover fails** building `python-olm` (needs `clang++`). Blocks Matrix/encryption feature on managed Python installs. |
| [#94881](https://github.com/NousResearch/hermes-agent/issues/94881) | 2 | 1 | **Copilot provider pins `chat_completions`** blindly, breaking Responses-API-only models. Config mutation without model awareness. |
| [#122772](https://github.com/NousResearch/hermes-agent/issues/122772) | 2 | 0 | **Windows GBK locale**: ~32 `subprocess` call sites use `text=True` without `encoding=`, causing `UnicodeDecodeError` on startup/update. |

**Pattern**: Users hit **platform-specific install/update/auth failures** that block core workflows (Matrix, MCP, Copilot, cron, gateway). The issues are concrete, reproducible, and affect daily drivers.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1** | [#123462](https://github.com/NousResearch/hermes-agent/issues/123462) | Gateway re-appends whole loaded history to `state.db` on tool turns → duplicate transcript blocks. | ✅ [#123472](https://github.com/NousResearch/hermes-agent/pull/123472) |
| **P1** | [#123206](https://github.com/NousResearch/hermes-agent/pull/123206) | Windows gateway ABI crash-loop: launcher bakes wrong Python interpreter (PATH race). | ✅ (PR open) |
| **P2** | [#123440](https://github.com/NousResearch/hermes-agent/issues/123440) | Cron `.py` scripts can’t import Hermes modules/managed deps on macOS PM-managed installs (regression from 0.21.3). | ✅ [#123051](https://github.com/NousResearch/hermes-agent/pull/123051), [#123479](https://github.com/NousResearch/hermes-agent/pull/123479) |
| **P2** | [#123463](https://github.com/NousResearch/hermes-agent/issues/123463) | Windows strict PID check rejects live gateway after update → false “No gateway process”. | ✅ [#123482](https://github.com/NousResearch/hermes-agent/pull/123482) |
| **P2** | [#122402](https://github.com/NousResearch/hermes-agent/issues/122402) | Ubuntu takeover fails building `python-olm` (missing `clang++`). | — |
| **P2** | [#95508](https://github.com/NousResearch/hermes-agent/issues/95508) | MCP OAuth issuer mismatch for Indeed (trailing slash). | — |
| **P2** | [#94881](https://github.com/NousResearch/hermes-agent/issues/94881) | Copilot `determine_api_mode()` model-blind, pins `chat_completions` → breaks Responses-API models. | — |
| **P2** | [#123447](https://github.com/NousResearch/hermes-agent/issues/123447) | Main-agent auxiliary fallback adopts unrelated ambient provider when chain exhausted. | — |
| **P2** | [#123387](https://github.com/NousResearch/hermes-agent/issues/123387) | `hermes update` electron failure in proxy (China network blackhole). | — |
| **P3** | [#121281](https://github.com/NousResearch/hermes-agent/issues/121281) | Kanban manual promote keeps stale error → permanent `blocker_auth`. | — |
| **P3** | [#122772](https://github.com/NousResearch/hermes-agent/issues/122772) | Windows GBK locale: 32+ `subprocess` sites lack explicit encoding. | — |
| **P3** | [#123467](https://github.com/NousResearch/hermes-agent/issues/123467) | Context-file TRUNCATED warning emitted during candidate enumeration, before injection decision. | — |
| **P3** | [#123452](https://github.com/NousResearch/hermes-agent/issues/123452) | `delegate_task` ignores model pin — manifest shows `model: null, provider: null`. | — |
| **P3** | [#123453](https://github.com/NousResearch/hermes-agent/pull/123453) | Desktop logs spurious “Restarting desktop connection” on quit. | ✅ (PR open) |

**Stability takeaway**: 5 P1/P2 bugs have **active fix PRs** (gateway, cron, Windows gateway identity, desktop quit log). The remaining P2s (Ubuntu build, MCP OAuth, Copilot provider, kanban state, delegate model pin) are **unpatched** and affect specific but real user paths.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **`hermes insights` CLI** — per-tool session reach & token-cost analysis | [#123474](https://github.com/NousResearch/hermes-agent/pull/123474) (PR by `teknium1`) | **High** — merges cleanly, addresses token-efficiency demand |
| **Signal `note_to_self` opt-out** | [#122033](https://github.com/NousResearch/hermes-agent/pull/122033) | **High** — config-only, backward-compatible |
| **Slack thread UX**: natural threads, numbered clarify choices, thread-root doc recovery, lifecycle status | [#123454](https://github.com/NousResearch/hermes-agent/pull/123454)–[#123457](https://github.com/NousResearch/hermes-agent/pull/123457) | **High** — cohesive Slack UX overhaul, all PRs same day |
| **Kanban ready-queue admission with deferral** | [#123481](https://github.com/NousResearch/hermes-agent/pull/123481) | **Medium** — scheduler behavior change, needs soak |
| **Desktop NVIDIA EGL fallback visibility/control** | [#123422](https://github.com/NousResearch/hermes-agent/issues/123422) | **Medium** — follow-up to recent detection fix; config/UI work needed |
| **Google Workspace scoped OAuth flow** | [#123475](https://github.com/NousResearch/hermes-agent/pull/123475) | **Medium** — fixes documented-but-broken flow |

**Prediction**: The next patch (`v0.21.6`) will bundle the P1/P2 fixes + `hermes insights` + Signal/Slack config options. Kanban deferral and NVIDIA fallback control may slip to `v0.22`.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows non-UTF8 locales break basic commands** | [#122772](https://github.com/NousResearch/hermes-agent/issues/122772) — `hermes update`/`--version` crash on GBK | Blocks Chinese/Japanese/Korean Windows users entirely |
| **Managed installs (PM/self) break cron & gateway** | [#123440](https://github.com/NousResearch/hermes-agent/issues/123440), [#123463](https://github.com/NousResearch/hermes-agent/issues/123463) | Core automation (cron) and session persistence (gateway) unreliable on macOS/Windows |
| **Provider/auth integrations fragile** | [#95508](https://github.com/NousResearch/hermes-agent/issues/95508) (MCP Indeed), [#94881](https://github.com/NousResearch/hermes-agent/issues/94881) (Copilot), [#123475](https://github.com/NousResearch/hermes-agent/pull/123475) (Google Workspace) | Users cannot trust “one-click” auth for key SaaS tools |
| **Kanban manual operations silently ignored** | [#121281](https://github.com/NousResearch/hermes-agent/issues/121281) | Operators lose trust in task-state UI |
| **Plugin updates destroy user data** | [#122007](https://github.com/NousResearch/hermes-agent/pull/122007) — fixes subdir/ignored-dir loss | High frustration for plugin authors & users; fix in review |
| **Electron update fails behind corporate/CN proxies** | [#123387](https://github.com/NousResearch/hermes-agent/issues/123387) | Desktop auto-update unreliable in restricted networks |

**Positive signals**: Users actively file detailed repros (logs, env, steps). The `hermes insights` PR originated from a Cursor blog post — community tracks upstream LLM tooling trends.

## 8. Backlog Watch — Stale / High-Value Items Needing Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#95508](https://github.com/NousResearch/hermes-agent/issues/95508) | 31 days | MCP Indeed auth broken — popular integration; trivial fix (trailing slash normalization) | Open, no PR |
| [#94881](https://github.com/NousResearch/hermes-agent/issues/94881) | 32 days | Copilot provider breaks Responses-API models; config mutation is silent | Open, no PR |
| [#121281](https://github.com/NousResearch/hermes-agent/issues/121281) | 2 days (but active) | Kanban data corruption on manual promote; needs decision on state-machine semantics | Open, `needs-decision` |
| [#122402](https://github.com/NousResearch/hermes-agent/issues/122402) | 1 day | Ubuntu Matrix/encryption blocked by missing `clang++` in managed Python toolchain | Open, no PR |
| [#123422](https://github.com/NousResearch/hermes-agent/issues/123422) | 0 days | NVIDIA EGL fallback is silent + env-var-only opt-out; UX gap after detection fix | Open, no PR |
| [#123447](https://github.com/NousResearch/hermes-agent/issues/123447) | 0 days | Auxiliary fallback picks wrong provider — subtle but dangerous for multi-provider setups | Open, no PR |

**Maintainer action suggested**: Assign #95508 and #948

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-26

## 1. Today's Overview
PicoClaw saw moderate community activity over the last 24 hours with **2 issue updates** and **4 active pull requests**, but **no merges or new releases**. The project remains in active development with several feature-oriented PRs under review, including a significant provider migration (OpenAI Responses API) and a new LLM gateway integration. One stale bug was closed with a configuration fix, while a new CLA bot issue surfaced. Overall velocity appears steady but bottlenecked on PR review/merge throughput.

## 2. Releases
**No new releases published today.** The latest available build remains the nightly `nightly-50-gbbf6893c` (commit `bbf6893c`).

## 3. Project Progress
**No PRs were merged or closed in the last 24 hours.** All 4 updated PRs remain open:
- **#3381** – Migration of OpenAI provider to the new Responses API (feature, non-breaking)
- **#3368** – Documentation: Parallel Search MCP setup example (docs)
- **#3222** – DeltaChat refactor: cleanup, -200 LOC, removed legacy config (refactor)
- **#3393** – New provider: Cheaper Inference (OpenAI-compatible gateway) (feature)

These represent forward movement on provider modernization, documentation, and codebase simplification, but require maintainer review to land.

## 4. Community Hot Topics
| Item | Type | Activity | Link | Analysis |
|------|------|----------|------|----------|
| **#3355** | Issue (Closed) | 3 comments, stale label | [sipeed/picoclaw#3355](https://github.com/sipeed/picoclaw/issues/3355) | User reported Feishu channel config validation error (`config.json contains unknown field(s): channel_list.feishu.app_id`). Closed with workaround — indicates config schema drift or documentation gap for Feishu integration. |
| **#3381** | PR (Open) | Updated 2026-09-25 | [sipeed/picoclaw#3381](https://github.com/sipeed/picoclaw/pull/3381) | Core provider change: switching OpenAI to Responses API. High impact — affects all OpenAI-compatible workflows. Linked to new CLA issue #3392. |
| **#3393** | PR (Open) | Created & updated 2026-09-25 | [sipeed/picoclaw#3393](https://github.com/sipeed/picoclaw/pull/3393) | Adds Cheaper Inference as a cost-optimized OpenAI-compatible provider. Signals demand for multi-provider routing and cost reduction. |

**Underlying needs**: Users want broader provider choice, lower inference costs, and up-to-date API compatibility. Config validation errors suggest onboarding friction for channel integrations.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Medium** | **#3355** – Feishu config validation rejects `app_id` field | Closed (stale) | No (workaround documented) |
| **Low** | **#3392** – CLAassistant fails to detect signed CLA on PR #3381 | Open | No |

**Notes**: #3355 was closed as stale with a config workaround, not a code fix — may recur. #3392 is a CI/bot issue blocking contributor workflow on the flagship OpenAI migration PR.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **OpenAI Responses API migration** | PR #3381 | **High** — core provider update, marked as feature, non-breaking |
| **Cheaper Inference provider** | PR #3393 | **High** — OpenAI-compatible, cost-focused, aligns with multi-provider strategy |
| **Parallel Search MCP integration** | PR #3368 | **Medium** — docs-only, enables web search without API key |
| **DeltaChat cleanup & modernization** | PR #3222 | **Medium** — large refactor (-200 LOC), removes legacy auth, but open since July |

**Prediction**: Next release will likely include OpenAI Responses API support and Cheaper Inference provider. DeltaChat refactor may need more review cycles.

## 7. User Feedback Summary
- **Pain points**: 
  - Channel configuration validation too strict or outdated (Feishu `app_id` rejection)
  - CLA bot false negatives blocking legitimate contributions
- **Use cases**: 
  - Multi-channel messaging (Feishu, DeltaChat)
  - Cost-sensitive LLM routing (Cheaper Inference interest)
  - Zero-config web search via Parallel Search MCP
- **Sentiment**: Mixed — active contributors pushing modernization, but config/CI friction persists. No explicit satisfaction signals in current data.

## 8. Backlog Watch
| Item | Age | Type | Why It Needs Attention |
|------|-----|------|------------------------|
| **#3222** – DeltaChat refactor | ~85 days | PR (refactor) | Large cleanup (-200 LOC), removes password auth, updates invite logic. Stalled despite clear scope. Blocks DeltaChat modernization. |
| **#3368** – Parallel Search MCP docs | ~21 days | PR (docs) | Ready-to-merge documentation for a user-requested feature (web search). Low risk, high user value. |
| **#3381** – OpenAI Responses API | ~9 days | PR (feat) | **Blocked by CLA bot (#3392)**. Critical path for OpenAI users. Should be prioritized for unblock/merge. |
| **#3355** – Feishu config schema | 25 days | Issue (closed stale) | Closed without code fix. Root cause (schema validation vs. actual config) likely remains. Will resurface. |

**Recommendation**: Maintainers should triage #3381 (unblock CLA), merge #3368 (quick win), and decide on #3222 (refactor scope). Re-open #3355 if schema mismatch is systemic.

---

*Data sourced from GitHub API for sipeed/picoclaw on 2026-09-26. All links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-26

## 1. Today's Overview

NanoClaw shows **intense maintenance activity** with 50 PRs updated in the last 24 hours (47 open, 3 closed), but **no new releases** and only 5 new issues — all bug reports filed yesterday (2026-09-25). The project is in a **stabilization phase** post-v2.4.0 (commit c313d061), with core-team members (glifocat, gavrielc) driving a wave of targeted fixes across setup, agent-runner, Iron Proxy, and update flows. Zero closed issues suggests triage is lagging behind discovery; the high PR count reflects a "fix-forward" approach rather than feature development.

## 2. Releases

**No new releases** in the last 24 hours. The current baseline remains **v2.4.0** (commit c313d061). All recent PRs are fixes/hardening against this version.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#3917](https://github.com/nanocoai/nanoclaw/pull/3917) | Seed Claude's default output style, not Concise, which defeated prompt caching | agent-runner, containers, providers | **CLOSED** |
| [#226](https://github.com/nanocoai/nanoclaw/pull/226) | Skill: add `/add-model-identity` for agent self-identification | delivery/skill | **CLOSED** |

- **#3917** (gavrielc): Critical performance fix — removes `Concise` output style default that broke prompt caching for Claude agents. Merged same-day.
- **#226** (macp-sh): Long-standing skill PR (opened Feb 2026) finally closed; adds `/add-model-identity` skill using `CLAUDE_MODEL` env var.

## 4. Community Hot Topics

*No PRs or issues have comments/reactions recorded in the data (all show `Comments: undefined` or `0`, `👍: 0`).*  
**Signal:** Community discussion is minimal; work is driven internally by core team. The most "active" items by update frequency are the **same-day fix PRs** (3905–3920), all opened and updated 2026-09-25.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Summary | Fix PR |
|----------|-------|---------|--------|
| **Critical** | [#3906](https://github.com/nanocoai/nanoclaw/issues/3906) | `/update-nanoclaw` controller archive misses `setup/` since #3816; stage-rooted commands run before deps exist | [#3913](https://github.com/nanocoai/nanoclaw/pull/3913) |
| **Critical** | [#3909](https://github.com/nanocoai/nanoclaw/issues/3909) | Host starts session container for agent group **deleted mid-spawn** (race in `spawnContainer`) | — |
| **High** | [#3911](https://github.com/nanocoai/nanoclaw/issues/3911) | `ncl groups restart --id <other group>` from an agent restarts **caller**, not target | — |
| **High** | [#3907](https://github.com/nanocoai/nanoclaw/issues/3907) | Gateway detection fails when nested pnpm prints workspace warning to stdout | [#3910](https://github.com/nanocoai/nanoclaw/pull/3910) |
| **Medium** | [#3916](https://github.com/nanocoai/nanoclaw/issues/3916) | Host logs never rotate, no dates — 10–29 MB logs spanning months misread as live incidents | — |

**Fix PRs already open** for 3/5 bugs (#3906, #3907, #3911 has none yet). #3909 (container race) and #3916 (log rotation) have no fix PRs — **need maintainer attention**.

## 6. Feature Requests & Roadmap Signals

No explicit feature requests in today's issues. However, **PR patterns signal near-term roadmap**:

| Signal | Likely Next-Version Work |
|--------|--------------------------|
| Multiple PRs tightening **setup/installation** gates (#3905, #3910, #3915, #3919, #3920) | Setup hardening release (v2.4.1?) |
| Iron Proxy arm64 support (#3891) + allowed-hosts resilience (#3915) | Gateway stability sprint |
| Sweep timer env overrides (#3646) | Operator configurability for slow local models |
| PR template enforcement (#3886, #3914) | Release process automation |

**Prediction:** v2.4.1 will be a **stability/setup patch** within 1–2 weeks; no major features visible.

## 7. User Feedback Summary

| Pain Point | Evidence |
|------------|----------|
| **Update flow broken** | #3906: `/update-nanoclaw` fails silently; users stuck on old version |
| **Log noise / no rotation** | #3916: 10–29 MB undated logs make debugging "last few minutes" impossible |
| **CLI command misbehavior** | #3911: `ncl groups restart --id <other>` restarts wrong group — safety risk |
| **Gateway detection flakiness** | #3907: pnpm workspace warning breaks setup validation on healthy installs |
| **Container orphan race** | #3909: Deleted groups still get containers — resource leak |

**Sentiment:** Frustration with **reliability of core flows** (update, setup, CLI, logging). No positive feedback signals in data.

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3909](https://github.com/nanocoai/nanoclaw/issues/3909) | 1 day (new) | **Race condition** in container spawn — can leak containers for deleted groups. No fix PR. |
| [#3916](https://github.com/nanocoai/nanoclaw/issues/3916) | 1 day (new) | **Log rotation absent** — operational blind spot for multi-week deployments. No fix PR. |
| [#3911](https://github.com/nanocoai/nanoclaw/issues/3911) | 1 day (new) | **CLI safety bug** — restart targets wrong group. No fix PR. |
| [#3646](https://github.com/nanoclaw/pull/3646) | 28 days | Sweep timer env overrides — **operator configurability** for slow models. Open, updated today. |
| [#3185](https://github.com/nanoclaw/pull/3185) | 53 days | Discord approval webhook broken (all approvals rejected). Updated today, still open. |
| [#3446](https://github.com/nanoclaw/pull/3446) | 35 days | Auto-drop bot senders in unknown-sender gate. Security/UX fix, stalled. |
| [#3302](https://github.com/nanoclaw/pull/3302) | 40 days | OneCLI gateway bind address mismatch. Core gateway fix, stale. |

**Action:** Prioritize #3909, #3916, #3911 (new critical bugs w/o fixes) and #3185, #3446, #3302 (month-old PRs blocking channel/gateway reliability).

---

**Project Health Score: 🟡 Caution**  
- ✅ High fix velocity (50 PRs/24h)  
- ⚠️ Zero issue closure, 5 new critical bugs  
- ⚠️ Stale PR backlog (30–50 days)  
- ❌ No release cadence visible  

**Recommendation:** Cut a **v2.4.1 patch** this week merging the 3 closed PRs + the 5 same-day fix PRs (#3905, #3908, #3910, #3913, #3915, #3917, #3918, #3919, #3920), then address the 3 unpatched critical issues (#3909, #3911, #3916).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-26

## 1. Today's Overview
NullClaw showed minimal public activity in the past 24 hours: no issues were created or updated, no releases were published, and only one pull request (#1009) received attention. The repository appears to be in a quiet maintenance phase with a single open PR addressing a long-standing supervised-autonomy bug. Overall project velocity is low, suggesting either a stabilization period or limited contributor bandwidth.

## 2. Releases
No new releases were published today.

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#1009](https://github.com/nullclaw/nullclaw/pull/1009) | **Open** | Fixes supervised autonomy so that medium/high-risk shell commands pause for `/approve` instead of failing immediately. Closes #900. The PR is authored by `serhiy-bzhezytskyy` and was created/updated on 2026-09-25. No reviews or merges yet. |

No PRs were merged or closed today.

## 4. Community Hot Topics
Only one item had activity in the last 24 h:

- **PR #1009** – *fix(exec): pause for /approve on medium/high-risk commands instead of failing*  
  - **Comments**: not disclosed  
  - **Reactions**: 👍 0  
  - **Underlying need**: Users expect the “supervised autonomy” workflow to actually pause risky commands for human approval rather than aborting them. This is a correctness/usability fix for a core safety feature.

## 5. Bugs & Stability
| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **High** | [#900](https://github.com/nullclaw/nullclaw/issues/900) (referenced by PR #1009) | Supervised autonomy never reaches `approval_request` state; medium/high-risk commands fail instead of pausing for `/approve`. | PR #1009 (open) |

No new bug reports or crashes surfaced today.

## 6. Feature Requests & Roadmap Signals
No new feature requests were filed today. The only roadmap signal is the ongoing effort to make supervised autonomy work as designed (PR #1009). Once merged, this will unblock the intended human-in-the-loop approval flow for risky shell operations.

## 7. User Feedback Summary
No user-facing issues, discussions, or support threads were updated in the last 24 h. The sole activity is an internal contributor fixing a known defect, indicating no fresh user pain points surfaced today.

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#900](https://github.com/nullclaw/nullclaw/issues/900) | Referenced 2026-09-25 | **Open** (fix in PR #1009) | Core safety feature broken; blocks supervised autonomy use cases. |
| *No other stale high-priority issues/PRs identified in today’s data.* | | | |

---

**Health Indicator**: 🟡 **Low activity / single critical fix in review**  
The project is quiet but has an important correctness fix awaiting review. Merging PR #1009 should be a near-term priority to restore the intended approval workflow.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-26

## 1. Today's Overview
IronClaw shows minimal daily activity with **zero issues updated** and **two open pull requests** receiving updates in the last 24 hours. No releases were published, and no PRs were merged or closed today. The project appears to be in a quiet maintenance phase, with one automated dependency-style PR (#7988) and one community-contributed feature PR (#8108) awaiting review. Overall project health signals low immediate churn but steady background maintenance.

## 2. Releases
**No new releases** published today or in the recent window.

## 3. Project Progress
**No PRs were merged or closed today.** The two open PRs updated recently are:

| PR | Status | Summary |
|----|--------|---------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | Open | **chore(agents): refresh codebase knowledge graph** — Automated nightly refresh of the committed codebase-memory bootstrap snapshot. Generated by CI workflow; labeled `CI/Infrastructure`, size XS, risk low. Authored by `ironclaw-ci[bot]`. |
| [#8108](https://github.com/nearai/ironclaw/pull/8108) | Open | **fix(host-runtime): add builtin.time shift and typed input issues** — Adds `operation: "shift"` to `builtin.time` for signed relative time offsets (seconds, minutes, hours, days, weeks). Includes wide accumulator for signed cancellation and typed input validation. Size XL, risk low, scope `docs`, contributor `Bortlesboat` (new). |

## 4. Community Hot Topics
With only two PRs and zero issues updated, **no clear "hot topic" emerges**. The most notable activity is PR #8108, which introduces a non-trivial runtime feature (`builtin.time` shift operation) from a new contributor — a signal of growing external engagement. No comments or reactions are recorded on either PR, so community discussion is currently absent.

## 5. Bugs & Stability
**No bugs, crashes, or regressions were reported today** (zero issues updated). PR #8108 is labeled a `fix` but appears to be a feature addition (`builtin.time` shift) rather than a bug fix. No fix PRs for known issues are visible in today’s data.

## 6. Feature Requests & Roadmap Signals
PR #8108 is the sole feature signal today: **extending `builtin.time` with a `shift` operation for relative time arithmetic**. This suggests demand for richer temporal logic in the host runtime — likely for scheduling, TTLs, or agent workflows. Given its XL size and docs scope, it may be a candidate for the next minor release if reviewed and merged. No other feature requests appear in today’s data.

## 7. User Feedback Summary
**No direct user feedback (issues, comments, reactions) captured today.** The absence of issue activity and PR discussion limits insight into pain points or satisfaction. The new contributor on #8108 indicates at least one external developer finds the project approachable enough to propose a runtime enhancement.

## 8. Backlog Watch
| Item | Age | Concern |
|------|-----|---------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | Open since 2026-08-29 (28 days) | Automated PR stale; no human review/merge. May block nightly graph freshness if left unmerged. |
| [#8108](https://github.com/nearai/ironclaw/pull/8108) | Open since 2026-09-22 (4 days) | XL-sized feature from new contributor; needs maintainer review for correctness, testing, and docs. Risk of stall without triage. |

**Recommendation:** Prioritize review of #8108 (feature + new contributor) and merge #7988 (low-risk CI maintenance) to clear backlog.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-26

## 1. Today's Overview
LobsterAI shows **low issue activity but moderate PR churn** over the last 24 hours. Zero new issues were opened or updated, while 7 pull requests saw updates—1 merged and 6 remaining open. The merged PR (#2763) addresses a critical replay logic bug in the OpenClaw agent runner. The open PRs consist of one fresh feature addition (Requesty provider) and five **stale PRs from April 2026** that received recent timestamp updates, suggesting a backlog grooming or rebase pass. No new releases were published. Overall project health appears stable with focused bug-fix momentum but a visible backlog of UI/UX improvements awaiting review.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#2763](https://github.com/netease-youdao/LobsterAI/pull/2763) | **MERGED** | `docs`, `main`, `openclaw` | **Fix: stop whole-turn replay after model call starts**. Prevents collision between a committed user message and retry logic that was re-replaying the entire turn, which previously masked real provider errors with a generic “LLM request failed.” Adds `modelCallStarted` guard to `OverloadRetryState`. |
| [#2766](https://github.com/netease-youdao/LobsterAI/pull/2766) | OPEN | `renderer`, `main`, `openclaw` | **Feat: add Requesty as built-in model provider**. Implements Requesty (LLM gateway) similarly to OpenRouter—registry entry, OpenClaw descriptor, icon. Starts disabled; no default selection. |
| [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) | OPEN (stale) | `scheduledTask` | **Fix: notification channel can’t revert to “Do Not Notify”**. Form initialization now prioritizes `delivery.mode === 'none'` to show “不通知” correctly. |
| [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550) | OPEN (stale) | `scheduledTask` | **Fix: remove `channel`/`to` fields when delivery mode is “none”**. Resolves gateway validation error (“Channel is required…”) for session-created tasks triggered at runtime. |
| [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) | OPEN (stale) | `renderer`, `cowork` | **Feat UI: model selector redesign + unified session toolbar**. Vendor icons, i18n “Image” label, truncation + tooltip, adaptive dropdown width, portal-based positioning to avoid clipping. |
| [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) | OPEN (stale) | `renderer`, `cowork` | **Fix + UX: global search scope & experience**. Removes implicit `agentId` filter; calls `listSessions()` directly for true global search. Redesigns search panel for efficiency. |
| [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) | OPEN (stale) | `renderer`, `cowork` | **Feat: non-main agent homepage shows agent name/description**. Dynamic welcome header (“Hi, I’m {agentName}”) and agent-specific description replace static copy. |

## 4. Community Hot Topics
No issues or PRs received comments or reactions (👍) in the last 24 hours. The **most structurally significant activity** is the merge of #2763 (core agent-runner stability) and the opening of #2766 (provider ecosystem expansion). The stale PRs (#1547, #1550, #1628, #1634, #1660) collectively represent a **UI/UX and scheduled-task consistency backlog** that has lingered since April—maintainer attention here would unblock multiple user-facing improvements.

## 5. Bugs & Stability
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | Whole-turn replay after model call started masks real provider errors | **Fixed** | [#2763](https://github.com/netease-youdao/LobsterAI/pull/2763) (merged) |
| **Medium** | Scheduled task “Do Not Notify” reverts to previous channel in UI | Open (stale) | [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) |
| **Medium** | Gateway validation error when session-created task runs with `mode=none` | Open (stale) | [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550) |
| **Low** | Search implicitly scoped to current agent; unpredictable Redux session state | Open (stale) | [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) |
| **Low** | Dropdown panels clipped in multiple pages | Open (stale) | [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) |

## 6. Feature Requests & Roadmap Signals
1. **Provider ecosystem growth** – #2766 adds Requesty; pattern mirrors OpenRouter. Expect more gateway providers (e.g., Portkey, LiteLLM) to follow.
2. **Scheduled-task UX polish** – Two stale fixes (#1547, #1550) target the “Do Not Notify” flow; merging them would close a long-standing inconsistency.
3. **Global search & discoverability** – #1634 redefines search as truly cross-agent; likely a prerequisite for future “command palette” or “agent marketplace” features.
4. **Agent-personalized home** – #1660 makes non-main agents feel first-class; signals roadmap toward multi-agent workspaces where each agent has distinct branding.

**Prediction**: Next version will likely include the merged replay fix (#2763), the Requesty provider (#2766), and—if maintainers clear the April backlog—the scheduled-task and search fixes (#1547, #1550, #1634).

## 7. User Feedback Summary
No direct user comments in the last 24 hours. Inferred pain points from PR descriptions:
- **Developers/integrators**: Provider error masking (#2763) erodes debugging trust.
- **Power users of scheduled tasks**: “Do Not Notify” UX broken in two distinct paths (UI form vs. session creation) (#1547, #1550).
- **Multi-agent users**: Search not truly global (#1634); non-main agents lack identity on home screen (#1660).
- **General UI**: Clipped dropdowns (#1628) and missing vendor icons in model selector reduce discoverability.

## 8. Backlog Watch
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1547](https://github.com/netease-youdao/LobsterAI/pull/1547) | 5+ months | Blocks “Do Not Notify” UX for scheduled tasks | Review & merge (2-line fix) |
| [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550) | 5+ months | Causes runtime gateway errors for session-created tasks | Review & merge |
| [#1628](https://github.com/netease-youdao/LobsterAI/pull/1628) | 5+ months | Broad UI polish: icons, i18n, dropdown clipping | Prioritize for next UI sprint |
| [#1634](https://github.com/netease-youdao/LobsterAI/pull/1634) | 5+ months | Fixes core search semantics + UX upgrade | High impact—merge soon |
| [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) | 5+ months | Improves multi-agent discoverability | Low risk, merge with #1634 |

---

*Digest generated from GitHub data as of 2026-09-26 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-09-26

## 1. Today's Overview
CoPaw shows **high contributor velocity with zero merge activity** — 13 PRs and 10 issues updated in the last 24 hours, yet no PRs merged and no issues closed. This suggests a review bottleneck or a deliberate batching strategy. The backlog leans heavily toward **UI/UX polish (console settings, markdown tables, pagination)** and **provider/integration hardening (custom endpoints, QQ gateway, Gemini, browser SDK)**. No new releases; the project remains on `2.2.1` stable / `2.2.0b7` beta.

## 2. Releases
No new releases today. Current versions: QwenPaw `2.2.1` (PyPI stable), `2.2.0b7` (beta); AgentScope `2.0.7.post1`; ReMe `0.4.1.10`.

## 3. Project Progress (Merged/Closed Today)
**None.** All 13 PRs remain open; all 10 issues remain open. The pipeline is full but stalled at review/merge.

## 4. Community Hot Topics
| Item | Type | Comments | Summary |
|------|------|----------|---------|
| [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | Enhancement/Bug | 7 | Context compaction budget miscalculation — compaction triggers on visible context only, ignoring the full provider request, causing turn failures. Core reliability issue. |
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | Question | 5 | User frustration: compressed history fails to reload fully on refresh; demands longer retention. Signals UX gap in history pagination (#7542 addresses this). |
| [#7980](https://github.com/agentscope-ai/QwenPaw/issues/7980) | Bug | 2 | `grep_search` reads binary `history.db-wal`, poisoning agent state with control bytes. **Fix PR #7988** open. |
| [#7984](https://github.com/agentscope-ai/QwenPaw/issues/7984) | Bug | 2 | Browser SDK forced `--disable-extensions` breaks persistent profile extensions (e.g., SwitchyOmega). **Fix PR #7987** open. |
| [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) | Bug | 2 | QQ official bot gateway replays events on session resume → duplicate processing. **Fix PR #7983** open. |

**Underlying needs**: Users want *reliable context management*, *persistent/historical chat access*, and *integration stability* (QQ, browser, custom providers). The cluster of first-time-contributor PRs (#7987, #7988, #7989, #7982) shows community momentum on these exact pain points.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#7980](https://github.com/agentscope-ai/QwenPaw/issues/7980) | `grep_search` ingests binary WAL files → agent state corruption, unrecoverable loops | [#7988](https://github.com/agentscope-ai/QwenPaw/pull/7988) |
| **High** | [#7981](https://github.com/agentscope-ai/QwenPaw/issues/7981) | `chat_with_agent` foreground timeout misreports "user interrupted", drops final answer | None yet |
| **High** | [#7946](https://github.com/agentscope-ai/QwenPaw/issues/7946) | QQ gateway event replay → duplicate agent turns & replies | [#7983](https://github.com/agentscope-ai/QwenPaw/pull/7983) |
| **Medium** | [#7948](https://github.com/agentscope-ai/QwenPaw/issues/7948) | Web console design breaks user input (details truncated) | None yet |
| **Medium** | [#7984](https://github.com/agentscope-ai/QwenPaw/issues/7984) | Browser SDK cannot load profile extensions due to forced `--disable-extensions` | [#7987](https://github.com/agentscope-ai/QwenPaw/pull/7987) |
| **Medium** | [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | Context compaction budget ignores full request → turn failures | None yet |
| **Low** | [#7924](https://github.com/agentscope-ai/QwenPaw/issues/7924) | Markdown tables overflow, bottom-only horizontal scrollbar | [#7989](https://github.com/agentscope-ai/QwenPaw/pull/7989) |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **History pagination / scroll-back** | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884), [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | High — PR #7542 (Sep 4) implements pagination; blocked on review |
| **Disable pre-made models/channels** | [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | Medium — low-effort UX toggle, aligns with settings overhaul (#7956) |
| **Per-media inline caps (image/video/audio)** | [#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359) | Medium — PR open since Aug 27, addresses #7201 |
| **Tool call visibility toggle** | [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | Medium — PR open since Aug 27, strong UX value |
| **Aliyun Token Plan `thinking_param_style`** | [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | High — catalog metadata fix; unblocks Console thinking controls |
| **Tool result block retention policy** | [#7923](https://github.com/agentscope-ai/QwenPaw/pull/7923) | Medium — addresses storage bloat; PR open since Sep 21 |
| **Custom provider context window fallback** | [#7986](https://github.com/agentscope-ai/QwenPaw/pull/7986) | High — prevents wrong context inference for llama.cpp/vLLM |

## 7. User Feedback Summary
- **Pain**: History loss after compaction (#7884), console input breakage (#7948), markdown table UX (#7924), duplicate QQ messages (#7946), extensionless browser profiles (#7984).
- **Workarounds**: Users manually avoid `grep_search` on workspace root; disable browser persistence; tolerate truncated history.
- **Sentiment**: Frustration on history/console basics ("体验多差么？？？" — #7884); appreciation for first-time contributor fixes (4 PRs in 24h).
- **Use cases**: Long-running agent sessions, QQ bot deployments, custom provider hosting (llama.cpp/vLLM), browser automation with proxy extensions.

## 8. Backlog Watch (Stale but Important)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | 30 days | Tool call toggle — high UX impact, ready since Aug |
| [#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359) | 30 days | Media caps — provider configurability, ready since Aug |
| [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | 22 days | History pagination — solves top user complaint (#7884) |
| [#7825](https://github.com/agentscope-ai/QwenPaw/pull/7825) | 9 days | Cron DOW fix — scheduling correctness |
| [#7923](https://github.com/agentscope-ai/QwenPaw/pull/7923) | 5 days | Tool result retention — storage growth control |

**Maintainer action needed**: Review/merge the four ready-for-merge PRs (#7357, #7359, #7542, #7825) and the four first-time-contributor bug fixes (#7983, #7987, #7988, #7989) to unblock users and reward contributors. The zero-merge day is the single biggest health signal today.

---
*Digest generated from GitHub data at 2026-09-26. Links point to agentscope-ai/QwenPaw (CoPaw upstream).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-26

---

## 1. Today's Overview

ZeroClaw shows **intense security-focused development activity** with 16 issues and 50 PRs updated in the last 24 hours. The project is in a **high-velocity stabilization phase** — no new release today, but 8 PRs merged/closed including critical security enforcement (#10259, #10263) and agent export (#9986). The issue backlog is dominated by **S0/S1 severity bugs** (data loss, security bypasses, unbounded waits), with multiple concurrent fixes targeting per-agent ownership scoping, config race conditions, and tool-call parsing defects. Contributor velocity is high (several "distinguished contributor" PRs), but review bottlenecks persist on XL-sized security stacks.

---

## 2. Releases

**No new releases today.** The last release was v0.8.5 (referenced in tracker #10814). The project is actively working on release efficiency improvements to reduce repeated builds and shorten preparation/recovery cycles for the next version.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259) | `feat(security): enforce authenticated principals on RPC with native+peercred` | **Security (XL)** | **Merged** — Stage 3 of #8289 OIDC stack; enforces authenticated principals on RPC, supersedes #8672 in part |
| [#10263](https://github.com/zeroclaw-labs/zeroclaw/pull/10263) | `feat(security): compose principal tool selectors into agent sessions` | **Security (XL)** | **Merged** — Principal tool-selector composition for agent sessions; depends on #10259 |
| [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) | `feat(agents): export an agent to a portable bundle` | **Feature (XL)** | **Merged** — Adds `zeroclaw agents export <alias> --out <dir>` for portable agent bundles (manifest, config closure, workspace) |
| [#11046](https://github.com/zeroclaw-labs/zeroclaw/pull/11046) | `fix(tools): stop inlining base64 into screenshot results` | **Bug (S)** | **Merged** — Removes redundant base64 PNG data URI from screenshot tool results; relies on runtime path promotion |
| [#10394](https://github.com/zeroclaw-labs/zeroclaw/pull/10394) | MCP tool results stored as full `CallToolResult` envelope | **Bug (P2)** | **Closed** — Duplicate payload issue in MCP client; fix likely incorporated elsewhere |

**Key advancement:** The OIDC/authentication stack (#8289) has landed core enforcement layers (#10259, #10263 merged), with browser PKCE/enrollment API (#10321) and gateway IPC coverage (#11001) still in progress.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Activity | Core Need |
|------|----------|-----------|
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) `fix(tools): per-agent ownership scoping for session tools and discord_search` | **XL, 53-day review**, distinguished contributor, `needs-author-action` | **Critical security gap**: Session/channel tools (`sessions_list/history/send`, `discord_search`) accept model-supplied IDs without per-agent ownership checks — any agent can reach another's data ([#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) S0) |
| [#11082](https://github.com/zeroclaw-labs/zeroclaw/pull/11082) `feat(security): OIDC principals, enrollment and the gateway auth surface` | **XL, stacked PR**, 8 slices in one, `quickstart` | **Unified auth surface**: Landing entire OIDC stack (principals, enrollment, gateway auth) as single PR per contributor call; replaces 8 separate PRs |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) `fix(delegate): bounded delegate filesystem tools respect target's workspace` | **XL, `needs-author-action`**, reconciled with master twice | **Delegate tool sandboxing**: Filesystem tools invoked via delegate must respect target agent's workspace boundaries |
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) `feat(runtime): coordinate agent lifecycle mutations` | **XL, `needs-maintainer-review`**, distinguished contributor | **Config authority unification**: Single live-config authority for daemon RPC, gateway, channels, ACP admission, CLI mutations — replaces independent cloned snapshots |
| [#11132](https://github.com/zeroclaw-labs/zeroclaw/pull/11132) `feat(runtime): turn parity over RPC for steering, totals, and session ops` | **XL, opened today** | **RPC turn completeness**: Steering channel now passed over RPC (`session/steer`), session totals, and session ops parity |

**Underlying theme:** The project is **converging on a unified security/auth model** (OIDC + principal ownership + tool selectors + gateway IPC) while simultaneously fixing **critical data-loss bugs** in config, memory, and filesystem tools. The XL PRs indicate architectural refactors, not incremental features.

---

## 5. Bugs & Stability — Ranked by Severity

### 🔴 **S0 — Data Loss / Security Risk** (Immediate Attention)

| Issue | Component | Status | Fix PR |
|-------|-----------|--------|--------|
| [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) `concurrent file_edit/file_write calls silently drop one edit` | tools / runtime | **Opened today**, 0 comments | None yet |
| [#11127](https://github.com/zeroclaw-labs/zeroclaw/issues/11127) `Session-data tools bypass principal ownership checks` | security/sandbox | **Opened yesterday**, 1 comment | Related to #9746 |
| [#11125](https://github.com/zeroclaw-labs/zeroclaw/issues/11125) `SOP execution omits tools:execute permission check` | security/sandbox | **Opened yesterday**, 1 comment | None yet |
| [#11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123) `SOP execution accepts wildcard tool selectors without tools:execute` | security/sandbox | **Opened yesterday**, 1 comment | None yet |
| [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) `markdown memory backend silently loses entries on overlapping store()` | memory | **Open**, 2 comments, `accepted` | None yet |
| [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) `Session/channel tools lack per-agent ownership scoping` | tools | **In-progress**, 4 comments | **[#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746)** (XL, needs-author-action) |

### 🟠 **S1 — Workflow Blocked**

| Issue | Component | Status | Fix PR |
|-------|-----------|--------|--------|
| [#11130](https://github.com/zeroclaw-labs/zeroclaw/issues/11130) `DeepSeek DSML tool-call markup not parsed — raw markup leaks` | provider / tool-call-parser | **Opened yesterday**, 1 comment | **[#11135](https://github.com/zeroclaw-labs/zeroclaw/pull/11135)** (S, opened today) |
| [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946) `agent-browser subprocess waits unbounded (probe + run_command)` | tools (browser) | **In-progress**, 3 comments, `accepted` | None yet (same class as #8560) |

### 🟡 **S2 — Degraded Behavior**

| Issue | Component | Status | Fix PR |
|-------|-----------|--------|--------|
| [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) `config flush can overwrite concurrent writes` | runtime/daemon | **Open**, 5 comments, `accepted`, `no-stale` | None yet |
| [#11129](https://github.com/zeroclaw-labs/zeroclaw/issues/11129) `Memory content scan blocks SOP audit for text containing URL + secret-like word` | memory | **Opened yesterday**, 0 comments | None yet |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **OIDC/gateway auth completion** | [#11082](https://github.com/zeroclaw-labs/zeroclaw/pull/11082) (XL, stacked), [#11001](https://github.com/zeroclaw-labs/zeroclaw/issues/11001) (blocked) | **Very High** — Core enforcement merged; enrollment API and IPC coverage in final stages |
| **SOP conditional steps (`decide:`)** | [#11134](https://github.com/zeroclaw-labs/zeroclaw/pull/11134) (L, opened today) | **High** — New feature landed in PR, uses decision model from #11085 |
| **Agent export/import (portable bundles)** | [#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) **merged today** | **Done** — `zeroclaw agents export` now available |
| **ACP transcript pagination** | [#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596) (XL, `needs-maintainer-review`) | **Medium** — Bounded cursor pagination for persisted transcripts; review bottleneck |
| **ZeroCode composer: add selected transcript text** | [#10051](https://github.com/zeroclaw-labs/zeroclaw/issues/10051) (in-progress, `accepted`) | **Medium** — UX enhancement for transcript quoting |
| **Shared workspace read access gating** | [#10308](https://github.com/zeroclaw-labs/zeroclaw/pull/10308) (L, `needs-author-action`) | **Medium** — Per-agent `can_use_shared_workspace` flag; security hardening |
| **Release efficiency tracker** | [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) (p1, tracker) | **Process** — Measuring next release against v0.8.5 workflow |

**Prediction:** Next release (v0.9.0?) will likely ship the **completed OIDC/auth stack**, **SOP conditional steps**, **agent export**, and **critical S0 bug fixes** (ownership scoping, config races, memory backend). ACP pagination and shared workspace gating may slip if review bandwidth stays constrained.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Security bypasses in multi-agent setups** | 4 S0 issues filed in 2 days ([#11123](https://github.com/zeroclaw-labs/zeroclaw/issues/11123), [#11125](https://github.com/zeroclaw-labs/zeroclaw/issues/11125), [#11127](https://github.com/zeroclaw-labs/zeroclaw/issues/11127), [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136)) — session tools, SOP execution, file writes all bypass principal checks | Operators running multi-agent deployments with non-admin principals |
| **Data loss in concurrent operations** | Config flush race ([#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284)), memory backend overwrites ([#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)), concurrent file edits ([#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136)) | Users with parallel agent turns, automated workflows, high-throughput tools |
| **Unbounded hangs in browser tool** | [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946) — no deadline/kill_on_drop on `agent-browser` CLI | Anyone using browser tool; same defect class as #8560 (recurring pattern) |
| **DeepSeek model output broken** | [#11130](https://github.com/zeroclaw-labs/zeroclaw/issues/11130) — DSML markup leaks to channel, turn ends silently | Users of DeepSeek/compatible providers emitting DSML tool-call format |
| **Documentation discoverability** | [#11088](https://github.com/zeroclaw-labs/zeroclaw/issues/11088) — multi-agent guide under `contributing/` not `agents/` | New operators setting up multi-agent systems |
| **Windows CI failures** | [#11137](https://github.com/zeroclaw-labs/zeroclaw/pull/11137) — panic during bundle export on Windows | Windows developers/contributors |

**Satisfaction signal:** High contributor engagement on security fixes suggests **operators are actively testing multi-agent deployments** and finding boundary-condition bugs. The rapid filing of 4 S0 issues in 24h by `Audacity88` indicates **deep security auditing** — a positive maturity signal despite the severity.

---

## 8. Backlog Watch — Stalled/Long-Open Items Needing Attention

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) `config flush overwrites concurrent writes` | **65 days** (opened 2026-07-23) | **High** — Core daemon config race, `accepted`/`no-stale` but no fix PR | Affects all deployments with concurrent config mutations; S2 but `risk:high` |
| [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) Per-agent ownership scoping for session tools | **53 days** (opened 2026-08-04) | **Critical** — XL PR, `needs-author-action`, blocks #9646 (S0) | **Primary fix for 4 S0 session-tool bypasses**; distinguished contributor, reconciled twice |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) Delegate filesystem tools respect target workspace | **31 days** (opened 2026-08-26) | **High** — XL, `needs-author-action`, security:policy | Delegate tool sandboxing; reconciled with master twice |
| [#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596) ACP transcript pagination | **23 days** (opened 2026-09-03) | **Medium** — XL, `needs-maintainer-review` | UX/capability for long sessions; distinguished contributor |
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) Coordinate agent lifecycle mutations | **22 days** (opened 2026-09-04) | **High** — XL, `needs-maintainer-review` | **Architectural unification** of config authority across runtime/gateway/channels/CLI |
| [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) Persist interrupted ACP turn progress | **37 days** (opened 2026-08-20) | **High** — XL, `needs-maintainer-review`, `risk:manual` | Turn recovery for ZeroCode/ACP; distinguished contributor |
| [#10308

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*