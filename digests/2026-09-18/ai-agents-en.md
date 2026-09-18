# OpenClaw Ecosystem Digest 2026-09-18

> Issues: 193 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-18 04:20 UTC

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

# OpenClaw Project Digest — 2026-09-18

---

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 PRs and 193 issues updated in the last 24 hours, though only 16 PRs were merged/closed and 62 issues closed — indicating a large backlog of work in progress rather than completion throughput. The project is in active development across multiple fronts: gateway performance, WebUI stability, multi-platform clients (iOS, Android, macOS), channel integrations (Telegram, Feishu, Slack, WhatsApp, Discord), and core agent runtime fixes. No new releases were published today. The issue landscape is dominated by **P0/P1 regressions** around process leaks, SQLite corruption, authentication failures, and session-state inconsistencies — several marked as beta blockers. Maintainer attention is split across many parallel tracks, with numerous PRs marked "ready for maintainer look" but awaiting review.

---

## 2. Releases

**No new releases today.** The latest version appears to be in the 2026.8.x/2026.9.x beta cycle (evident from issue references like 2026.8.2, 2026.9.2). Several issues reference beta blockers (#123136, #149361) suggesting a release candidate is being stabilized.

---

## 3. Project Progress (Merged/Closed PRs Today)

Only **16 PRs merged/closed** in the last 24h. Notable completions from the top-30 list:

| PR | Area | Summary |
|----|------|---------|
| [#151066](https://github.com/openclaw/openclaw/pull/151066) | plugins | Reduced CPU for sorting provider options during login/onboarding |
| [#98674](https://github.com/openclaw/openclaw/issues/98674) | macOS App | Fixed unclickable install icon due to DMG scaling issue (closed issue) |
| [#95612](https://github.com/openclaw/openclaw/issues/95612) | cli-backend | Resolved 401 auth_failed for claude-cli runtime vs shell (closed issue) |
| [#84610](https://github.com/openclaw/openclaw/issues/84610) | gateway | Fixed gateway SIGTERM loop every ~90s after upgrade (WSL2) (closed issue) |
| [#84092](https://github.com/openclaw/openclaw/issues/84092) | WhatsApp | Fixed silent drop of long/complex responses (closed issue) |
| [#84154](https://github.com/openclaw/openclaw/issues/84154) | Telegram | Fixed group message recorded but no run dispatched until next message (closed issue) |
| [#84504](https://github.com/openclaw/openclaw/issues/84504) | xAI | OAuth succeeds but grok-4.3 inference returns 403 (closed issue) |
| [#84783](https://github.com/openclaw/openclaw/issues/84783) | Moonshot Discord | Fixed 30s model-resolution delay before dispatch (closed issue) |
| [#91007](https://github.com/openclaw/openclaw/issues/91007) | iOS Talk | Fixed realtime session closing before audio append (closed issue) |
| [#123176](https://github.com/openclaw/openclaw/issues/123176) | Windows node | Fixed exec stopping after system.run.prepare (closed issue) |
| [#98388](https://github.com/openclaw/openclaw/issues/98388) | macOS App | Icon cutout edges issue (closed issue) |
| [#98070](https://github.com/openclaw/openclaw/issues/98070) | Skill Workshop | Extensibility for custom workflows (closed issue) |
| [#98069](https://github.com/openclaw/openclaw/issues/98069) | Skill Workshop | Runtime testing for proposals before apply (closed issue) |
| [#97911](https://github.com/openclaw/openclaw/issues/97911) | tools.deny | Fixed skill_workshop not hidden from Codex deferred tools (closed issue) |

**Pattern:** Most closed items are **stale P1-P3 issues** from May–July 2026, now resolved — suggesting a backlog-clearing push. The merged PRs themselves are not visible in the top-30 list (which shows mostly open PRs), so the 16 merged PRs are likely smaller fixes.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

### Top Issues by Comment Count

| Issue | Comments | Type | Core Problem |
|-------|----------|------|--------------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 30 | 🐛 **P1 Bug** | **Zombie process leak** from hook/tool child processes (`openclaw-hooks`, `bash`, `codex`) accumulating under main process, causing runtime degradation |
| [#149361](https://github.com/openclaw/openclaw/issues/149361) | 21 | 📦 **Umbrella** | WebUI performance & stability across desktop/mobile — tracking multiple sub-issues |
| [#85103](https://github.com/openclaw/openclaw/issues/85103) | 11 | 🐛 **P1 (Closed)** | Model fallback chain not triggered on provider quota exhaustion + `EmbeddedAttemptSessionTakeoverError` |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | 10 | 🐛 **P2 Regression** | Cron agent jobs timeout during sustained LLM API 500s instead of fast-failing |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | 8 | 🐛 **P0 Regression** | **SQLite corruption** on pristine rebuilt DBs within 15–24h (WSL2) — 5 events in 5 days, includes "paralyzed gateway" mode |
| [#74594](https://github.com/openclaw/openclaw/issues/74594) | 8 | 📝 **RFC** | Skill Capability Manifests v0 — make skill capabilities visible before enforcement |
| [#53783](https://github.com/openclaw/openclaw/issues/53783) | 8 | 🐛 **P2** | Telegram group: cross-agent `sessions_list` visibility mismatch → one-way `sessions_send` failure |
| [#88087](https://github.com/openclaw/openclaw/issues/88087) | 8 | 🐛 **P2** | Poor UX for long-running background tasks + silent cron wake failures — user abandoning droplet |
| [#43564](https://github.com/openclaw/openclaw/issues/43564) | 8 | ✨ **Feature** | ACP Session Skill Context Injection — skills not available to ACP agents |
| [#121729](https://github.com/openclaw/openclaw/issues/121729) | 7 | ✨ **Feature** | Friendly daily spending allowances for background agents |

### Top PRs by Activity (All Open, "Ready for Maintainer Look")

| PR | Area | Risk Tags | Status |
|----|------|-----------|--------|
| [#150898](https://github.com/openclaw/openclaw/pull/150898) | update/gateway/cli | 🚨 compatibility, 🚨 security-boundary | 📣 needs proof |
| [#148290](https://github.com/openclaw/openclaw/pull/148290) | fleet/registry | 🚨 compatibility | 👀 ready |
| [#150257](https://github.com/openclaw/openclaw/pull/150257) | sessions perf | — | 👀 ready |
| [#150294](https://github.com/openclaw/openclaw/pull/150294) | sessions perf | — | 👀 ready |
| [#149700](https://github.com/openclaw/openclaw/pull/149700) | gateway worker overhead | — | 👀 ready |
| [#141004](https://github.com/openclaw/openclaw/pull/141004) | audit/skill usage | 🚨 compatibility | 👀 ready |
| [#135296](https://github.com/openclaw/openclaw/pull/135296) | agents thinking overrides | 🚨 compatibility | 👀 ready |
| [#124557](https://github.com/openclaw/openclaw/pull/124557) | plugin hooks auth | 🚨 compatibility, 🚨 security-boundary | 📣 needs proof |
| [#67421](https://github.com/openclaw/openclaw/pull/67421) | web_fetch SSRF | 🚨 compatibility, 🚨 security-boundary | 📣 needs proof |

**Underlying Needs:**  
- **Stability over features**: Top issues are all regressions/crashes/data-loss (zombies, SQLite corruption, auth failures, session loss)  
- **Multi-platform parity**: macOS, Windows, iOS, Android, WSL2 all have platform-specific blockers  
- **Observability**: Users need better visibility into spending, skill usage, session state, and background task progress  
- **Security boundaries**: Multiple PRs flagged `🚨 security-boundary` — sandboxing, SSRF, config protection are active concerns  

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? | Key Details |
|----------|-------|--------|---------|-------------|
| **P0** | [#126821](https://github.com/openclaw/openclaw/issues/126821) SQLite corruption on pristine DBs (WSL2) | Open | No | Freelist miscount within 15–24h → "paralyzed gateway" refusing all service; 5 events in 5 days |
| **P1** | [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process leak (hooks/tools) | Open | No | `openclaw-hooks`, `bash`, `codex` children unreaped → accumulation → runtime degradation |
| **P1** | [#86119](https://github.com/openclaw/openclaw/issues/86119) Orphaned `node server.js` workers after subagent/cron runs | Open | No | Docker (Debian), tini PID 1 — workers accumulate, not cleaned up |
| **P1** | [#76962](https://github.com/openclaw/openclaw/issues/76962) Subagent timeout leaves zombie `claude -p` → late output to user | Open | No | 3-bug chain: timeout doesn't kill process, output bypasses parent, parent never notified |
| **P1** | [#90980](https://github.com/openclaw/openclaw/issues/90980) Docker engine wedged → `docker exec` hangs → gateway blocks at startup | Open | No | Fresh repro of #5135; engine unresponsive (not "not running") → full outage |
| **P1** | [#136175](https://github.com/openclaw/openclaw/issues/136175) Full memory reindex saturates CPU, blocks diagnostics (2026.8.2) | Open | No | llama.cpp embedding uses 2 cores + 2.4GB RSS; requests queue, memory diags blocked |
| **P1** | [#87051](https://github.com/openclaw/openclaw/issues/87051) Codex OAuth profile not propagated to subagents → silent fallback hallucinates tool calls | Open | No | Production-affecting in multi-bot deployments using OAuth |
| **P1** | [#123596](https://github.com/openclaw/openclaw/issues/123596) Slow `agent_consult` reply arrives after Realtime turn errored | Open | No | Voice hears "no reply", text session has answer — timing mismatch |
| **P1** | [#141556](https://github.com/openclaw/openclaw/issues/141556) `NO_REPLY` on mentioned/thread turn retried as empty answer | Open | No | Posts "Agent couldn't generate a response" incorrectly |
| **P2** | [#45494](https://github.com/openclaw/openclaw/issues/45494) Cron jobs timeout on sustained 500s instead of fast-fail | Open | No | Exhausts full `timeoutSeconds` (e.g., 180s) per attempt |
| **P2** | [#74848](https://github.com/openclaw/openclaw/issues/74848) macOS App node repeatedly disconnects with "cancelled" | Open | No | CLI node works; remote mode fails at `wss://` gateway connect |
| **P2** | [#134317](https://github.com/openclaw/openclaw/issues/134317) First model request returns 401 "Token invalid" (siliconflow) | Open | No | Recovers after ~8s auth-profile re-warm; regression since 2026.8.1 |
| **P2** | [#125314](https://github.com/openclaw/openclaw/issues/125314) Codex `message` tool serializes full manager schema every turn | Open | No | Bloats prompt; deferred-tool guidance never asks for batching |
| **P2** | [#149727](https://github.com/openclaw/openclaw/issues/149727) WebUI: measurement scroll compensation triggers extra history loads | Open | No | Child of #149361 (WebUI perf umbrella) |

**Critical Cluster:** Process management (zombies, orphans, unclean shutdowns) appears in **#97616, #86119, #76962, #90980** — suggesting a systemic issue in how the gateway manages child processes across Docker, subagents, cron, and CLI runtimes.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signals | Likelihood for Next Version |
|-------|---------|----------------------------|
| [#121729](https://github.com/openclaw/openclaw/issues/121729) Daily spending allowances (per-agent/shared) | High user pain ("leaving agents running without worrying about costs"); 7 comments | **High** — operational necessity for background agents |
| [#74594](https://github.com/openclaw/openclaw/issues/74594) Skill Capability Manifests v0 (RFC) | 8 comments, 👍1; foundational for skill ecosystem transparency | **High** — RFC stage, skills-first architecture push |
| [#43564](https://github.com/openclaw/openclaw/issues/43564) ACP Session Skill Context Injection | 8 comments, 👍1; unblocks ACP agents (Codex/Pi/OpenCode/Gemini) from using skills | **High** — critical for multi-runtime parity |
| [#79281](https://github.com/openclaw/openclaw/issues/79281) Default ACP thread-binding preset | 7 comments, 👍1; third-party channels re-implement ~870 LOC each | **High** — reduces fragmentation, improves DX |
| [#77886](https://github.com/openclaw/openclaw/issues/77886) Owner-approved flow for protected config changes | 7 comments, 👍2; security/usability balance | **Medium** — needs design consensus |
| [#80674](https://github.com/openclaw/openclaw/issues/80674) Plugin hooks for polling lifecycle + session persistence | 6 comments, 👍1; extends plugin observability | **Medium** — plugin ecosystem maturity |
| [#71216](https://github.com/openclaw/openclaw/issues/71216) Config schema: `sandbox`, `routing.rules`, `instances`, `gateway.nodes.denyPaths` | 6 comments, 👍1; advanced deployment needs | **Medium** — power-user feature |
| [#113442](https://github.com

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-09-18 | **Projects Analyzed:** 11 active (1 inactive: NullClaw)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bifurcated maturity**: a cluster of high-velocity, production-hardening projects (OpenClaw, NanoBot, Hermes, CoPaw, ZeroClaw, NanoClaw, LobsterAI) versus specialized, maintenance-mode or early-stage efforts (PicoClaw, Moltis, ZeptoClaw, IronClaw). **Security hardening, session isolation, and provider-agnostic reasoning control** are the dominant cross-cutting concerns. Most projects are in **pre-release stabilization** rather than feature expansion, with architectural refactors (gateway/skill systems, event-sourced sessions, pluggable auth) signaling a shift toward enterprise-ready, multi-runtime platforms. Community engagement is strong on stability issues but thin on RFCs, suggesting maintainers drive roadmap more than user demand.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged (24h) | Last Release | Health Score* |
|---------|--------------|-----------|--------------|--------------|---------------|
| **OpenClaw** | 193 updated | 500 updated | 16 | 2026.8.x/9.x beta | 🟡 High velocity, low throughput |
| **NanoBot** | 4 active | 17 updated | 8 | v0.3.5 (v0.3.6 pending) | 🟢 Strong |
| **Hermes Agent** | 13 open | 50 updated | 1 | Pre-v2026.9.14 | 🟡 Accumulation-heavy |
| **PicoClaw** | 1 closed stale | 14 updated | 7 | None recent | 🟢 Steady maintenance |
| **NanoClaw** | ~5 implied | 18 updated | 4 | None recent | 🟢 Healthy velocity, 🟡 review bottleneck |
| **IronClaw** | 2 active | 0 | 0 | None recent | 🟡 Observability-heavy |
| **LobsterAI** | 5 updated (3 closed) | 18 updated | 13 | 2026.9.16 (yesterday) | 🟢 Active stabilization |
| **Moltis** | 2 new | 3 open | 0 | 20260913.02 | 🟢 Healthy maintenance |
| **CoPaw/QwenPaw** | 12 active | 19 open | 16 | v2.2.2-beta.1 (today) | 🟡 High velocity, concerning stability |
| **ZeptoClaw** | 5 updated | 7 updated | 5 | None recent | 🟢 Refactoring/hardening |
| **ZeroClaw** | 8 updated | 50 updated | 4 | None recent | 🟢 High velocity, 🟡 review bottleneck |

*Health Score: 🟢=Healthy, 🟡=Caution, 🔴=Critical (based on velocity/throughput ratio, bug severity, release cadence)*

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Breadth**: Largest contributor base (500 PRs/24h), widest platform matrix (iOS, Android, macOS, Windows, WSL2, 6+ channel integrations)
- **Ecosystem Gravity**: Referenced as upstream by LobsterAI, NanoClaw, ZeroClaw; de facto standard for gateway/runtime protocol
- **Multi-Runtime Support**: Native ACP integration for Codex, OpenCode, Gemini, Pi — unmatched provider/runtime parity

**Technical Approach Differences:**
- **Gateway-Centric Architecture**: Centralized gateway manages child processes, sessions, and channel adapters — contrasts with ZeptoClaw's edge-first, ZeroClaw's event-sourced, and NanoBot's session-worker models
- **Beta-Blocker Triage Process**: Formal P0/P1 classification with "beta blocker" tags — more structured than peers' ad-hoc labeling
- **Security Boundary Investment**: Multiple PRs flagged `🚨 security-boundary` (SSRF, sandboxing, config protection) — deeper than most

**Community Size Comparison:**
- **Issues/PRs**: 10× NanoBot, 5× Hermes, 3× ZeroClaw
- **Contributors**: Implied large core team (many "ready for maintainer look" PRs)
- **Downstream Dependents**: At least 3 projects (LobsterAI, NanoClaw, ZeroClaw) track OpenClaw versions closely

**Risk**: Low merge throughput (16/500) suggests **review bottleneck** — velocity is broad but shallow.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session Isolation & Process Hygiene** | OpenClaw (#97616, #86119), NanoBot (#5798), Hermes (#114639), CoPaw (#7839), ZeroClaw (#10908) | Zombie/orphan process cleanup, cross-session leakage prevention, subprocess ownership |
| **Provider-Agnostic Reasoning/Thinking Control** | IronClaw (#7537), OpenClaw (implied), ZeroClaw (multimodal), CoPaw (context window) | Unified `thinking_effort` parameter mapping to provider-native controls (OpenAI `reasoning_effort`, Anthropic `thinking.budget_tokens`, DeepSeek `chat_template_kwargs`) |
| **Multimodal Provenance & Validation** | ZeroClaw (#10908, #9819), OpenClaw (WhatsApp/Telegram fixes), CoPaw (file handling), NanoClaw (attachments) | Pixel-level image validation, attachment provenance tracking, signed reasoning preservation |
| **Pluggable Gateway / Skill / Auth Architecture** | NanoClaw (#3815–#3818, #3825), ZeroClaw (#10526 RFC), OpenClaw (plugin hooks), Hermes (ACP clients) | Credential gateway abstraction, skill discovery (`.well-known`), installable skills as gateway plugins |
| **Event-Sourced / Append-Only Session History** | ZeroClaw (#10526 RFC), NanoClaw (stateless tasks), Moltis (cron), LobsterAI (audit events) | Deterministic replay, time-travel debugging, auditability, checkpoint/recovery for interrupted turns |
| **Enterprise Deployment Hardening** | LobsterAI (#1082 CERT), NanoClaw (Iron Proxy), ZeptoClaw (binary size gate), Moltis (sandbox per-agent) | Compliance-driven dependency freshness, rootless containers, binary size constraints, per-agent sandboxing |
| **Local Model / Edge Runtime Support** | ZeptoClaw (aarch64 7MB gate), OpenClaw (WSL2, llama.cpp), Hermes (Windows Computer Use), PicoClaw (IRCv3) | Tool-schema sanitization for weak models, binary size budgets, local-first CI, offline capability |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes | ZeroClaw | NanoClaw | CoPaw | ZeptoClaw | LobsterAI | PicoClaw | Moltis | IronClaw |
|-----------|----------|---------|--------|----------|----------|-------|-----------|-----------|----------|--------|----------|
| **Primary Focus** | Universal gateway + multi-runtime | Lightweight self-hosted bridge | Desktop-first ACP client | Event-sourced runtime architecture | Pluggable gateway/skill ecosystem | Multi-agent platform (Qwen) | Edge/robot deployment | Enterprise desktop wrapper | Multi-channel chat bridge | Scheduled agent automation | Model reasoning observability |
| **Target User** | Power users, developers, enterprises | Self-hosters, privacy-focused | Desktop developers, researchers | Platform builders, architects | Enterprise integrators | Chinese-market developers | Edge/robotics engineers | Enterprise/compliance teams | Multi-channel community managers | Cron/automation operators | Benchmark/ML engineers |
| **Architecture** | Central gateway + channel adapters | Session workers + provider adapters | Electron desktop + ACP subprocesses | Event store + deterministic replay | Skill-gateway contract + Iron Proxy | Console + subagents + plugins | Static binary + local validation | Electron + OpenClaw fork | Go single-binary + channel adapters | Rust + WASM tools + cron | Benchmark runner + taxonomy |
| **Differentiator** | Widest runtime/channel matrix | Simplicity + session isolation | Windows Computer Use + ACP focus | Event-sourced sessions + audit | Enterprise auth gateway + skills | SubAgent delegation + data app | Zero-cloud CI + binary size gate | Compliance-driven OpenClaw fork | Protocol breadth (QQ, Feishu, DeltaChat) | Per-agent sandbox + Nix repro | Failure taxonomy + reasoning control |
| **Maturity** | Beta (2026.9.x) | v0.3.x stabilizing | Pre-release refactor | Pre-release accumulation | Active refactor | v2.2.x beta | Hardening phase | 2026.9.16 released | Maintenance | 20260913.02 tagged | Observability-only |

---

## 6. Community Momentum & Maturity

### **Tier 1: Rapid Iteration & High Throughput** (Healthy velocity + regular merges)
- **NanoBot**: 8 merges/24h, clear v0.3.6 path, fast bug containment
- **LobsterAI**: 13 merges/24h, released yesterday, compliance-driven urgency
- **ZeptoClaw**: 5 merges/24h (CI removal, security patches), decisive governance
- **PicoClaw**: 7 merges/24h (mostly deps), steady maintenance

### **Tier 2: High Velocity, Accumulation-Heavy** (Many PRs, low merge rate, review bottlenecks)
- **OpenClaw**: 500 PRs updated, 16 merged — massive parallel work, maintainer bottleneck
- **ZeroClaw**: 50 PRs updated, 4 merged — 8 XL PRs awaiting review
- **NanoClaw**: 18 PRs updated, 4 merged — 3+ month stale PRs despite core-team labels
- **Hermes Agent**: 50 PRs updated, 1 merged — stabilization phase, design decisions pending
- **CoPaw**: 19 PRs open, 16 merged — but 12 active P0 bugs, beta iteration speed masks instability

### **Tier 3: Specialized / Early-Stage / Maintenance**
- **Moltis**: 3 PRs open, 0 merged — pre-patch stabilization, Nix blocker
- **IronClaw**: 0 PRs — observability phase, waiting on #7537 design consensus
- **NullClaw**: Inactive

**Key Insight**: Projects with **smaller scope** (NanoBot, ZeptoClaw, PicoClaw, Moltis) achieve higher merge throughput. **Platform-scale projects** (OpenClaw, ZeroClaw, NanoClaw, Hermes, CoPaw) suffer review bottlenecks despite high contributor activity.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Session/Process Isolation = Table Stakes** | 6/11 projects fixing zombie processes, cross-session leaks, subprocess ownership | **Critical**: Any multi-session agent platform must solve this at architecture level, not as afterthought |
| **Provider-Agnostic Reasoning Control** | IronClaw RFC (+38 days), ZeroClaw multimodal, CoPaw context window bugs | **High**: Unified `thinking_effort` API will become expected; implement adapter pattern now |
| **Event-Sourced Session History** | ZeroClaw RFC (11 comments), NanoClaw stateless tasks, LobsterAI audit events | **Medium-High**: Enables replay, debugging, compliance; design for append-only from v1 |
| **Pluggable Gateway/Skill Contracts** | NanoClaw (4 PRs), ZeroClaw (skills discovery), OpenClaw (plugin hooks) | **High**: Standardized skill distribution (`.well-known/agent-skills`) emerging; build to this spec |
| **Enterprise Compliance Driving Forks** | LobsterAI (CERT mandate), NanoClaw (Iron Proxy), ZeroClaw (audit trails) | **High**: Dependency freshness, SBOM, air-gap support, role-based approval — design for regulated envs |
| **Local-First / Edge Deployment** | ZeptoClaw (7MB aarch64, no CI), Hermes (Windows Computer Use), OpenClaw (WSL2, llama.cpp) | **Medium**: Binary size budgets, tool-schema sanitization, offline capability — differentiate via resource efficiency |
| **Security Boundary Hardening** | OpenClaw (7 `🚨 security-boundary` PRs), ZeptoClaw (Rustls patch), LobsterAI (RCE stale), ZeroClaw (approval policy) | **Critical**: Sandbox per-agent, capability manifests, fail-closed approvals — invest early |
| **Observability > Features** | IronClaw (failure taxonomy), OpenClaw (spending allowances), NanoClaw (dashboard), Moltis (prepaid search hops) | **High**: Users demand cost visibility, spending controls, audit logs before new capabilities |

---

## Summary for Decision-Makers

1. **If building a new agent platform**: Adopt **event-sourced sessions**, **pluggable gateway contracts**, and **provider-agnostic reasoning control** from day one — retrofits are painful (see OpenClaw, ZeroClaw).

2. **If selecting a base for enterprise deployment**: **LobsterAI** (released, compliance-aware) or **NanoClaw** (enterprise auth gateway) lead; **OpenClaw** has breadth but beta stability risks.

3. **If targeting edge/local-first**: **ZeptoClaw**'s architecture (no cloud CI, binary size gate, tool-schema sanitization) is the cleanest reference.

4. **If contributing**: **NanoBot**, **PicoClaw**, **Moltis**, **ZeptoClaw** have responsive maintainers and merge-ready PRs; platform-scale projects need review bandwidth more than code.

5. **Watch the RFCs**: ZeroClaw's append-only sessions (#10526), IronClaw's reasoning control (#7537), and NanoClaw's skill gateway (#3815) will shape 2027 ecosystem standards.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-18

## 1. Today's Overview
NanoBot shows **high development velocity** with 17 PRs updated and 4 issues active in the last 24 hours. The project is in a **stabilization phase** — 8 PRs were merged/closed today, primarily addressing cross-session message leakage, consolidation truncation bugs, compaction notice noise on QQ, and cron tool validation. Two new bugs were reported (session crossover on Windows, Vertex AI provider request), while two long-standing issues received fixes. No new release was cut, suggesting the team is batching fixes for a near-term patch.

## 2. Releases
**No new releases today.** The last published version remains **v0.3.5** (per issue #5798). The merged PRs today (#5792, #5794, #5799, #5379, #5765, #5766, #5762, #5802) collectively form a strong candidate for a **v0.3.6** patch release targeting session isolation, consolidation integrity, and channel UX polish.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5792](https://github.com/HKUDS/nanobot/pull/5792) | **Bug, Regression, P1** | Serialize & batch per-session messages; single FIFO inbox per session worker | **Critical** — fixes cross-session response leakage (root cause of #5798) |
| [#5794](https://github.com/HKUDS/nanobot/pull/5794) | **Bug, P2** | Fix cross-session response delivery in agent loop | **High** — complementary fix for same symptom as #5792 |
| [#5799](https://github.com/HKUDS/nanobot/pull/5799) | **Bug, Channel, P2** | Drop compaction notices on channels without in-place edit/recall (QQ) | **Medium** — resolves UX noise (#5784) |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | **Bug, P2** | Preserve full consolidation input; fix truncation advancing `last_consolidated` past dropped messages | **High** — fixes data loss in memory consolidation (#5377) |
| [#5765](https://github.com/HKUDS/nanobot/pull/5765) | **Bug, P2** | Require boolean `stream` values in OpenAI-compatible API | **Medium** — prevents `"stream": "false"` from enabling SSE |
| [#5766](https://github.com/HKUDS/nanobot/pull/5766) | **Bug, P2** | Reject conflicting cron schedule fields (`every_seconds`/`cron_expr`/`at`) | **Medium** — prevents silent schedule misconfiguration |
| [#5762](https://github.com/HKUDS/nanobot/pull/5762) | **Bug, Regression, P2** | Reject past one-time `at` schedules in cron tool | **Medium** — avoids silent no-op jobs |
| [#5802](https://github.com/HKUDS/nanobot/pull/5802) | **Bug, WebUI** | Hide model details until AI setup complete | **Low** — UI polish for setup flow |

**Net progress:** 8 merges, 0 new releases. The merged set closes **3 issues** (#5377, #5784, #5798) and hardens session isolation, memory consolidation, API compliance, and channel UX.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#5798](https://github.com/HKUDS/nanobot/issues/5798) *Bug: 回复串会话问题* | **New, 0 comments** but **high user impact** — Windows user reports replies leaking across sessions in v0.3.5 (worked in 0.3.0) | **Session isolation regression** — blocks multi-session usage on Windows; likely duplicate of #5792/#5794 root cause |
| [#5784](https://github.com/HKUDS/nanobot/issues/5784) *QQ: compaction notices as standalone messages* | **2 comments**, closed via [#5799](https://github.com/HKUDS/nanobot/pull/5799) | **Channel-aware lifecycle UX** — users want silent/in-place compaction on channels lacking edit/recall (QQ, potentially others) |
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) *Feature: Native Google Vertex AI provider for Claude* | **1 comment**, open since Aug 20 | **Enterprise/cloud provider parity** — Vertex AI is a major Anthropic Claude hosting path; absence forces workarounds |
| [#5562](https://github.com/HKUDS/nanobot/pull/5562) *Feat: Stream tool progress events* | **Open since Aug 27**, conflict label | **Real-time agent observability** — API consumers need tool lifecycle events (start/progress/end) over SSE, not just text chunks |

**Signal:** Session isolation (#5798/#5792/#5794) and provider coverage (#5459, #5718) are the top community pain points.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#5798](https://github.com/HKUDS/nanobot/issues/5798) Cross-session response leakage (Windows, v0.3.5 regression) | **Open** | Likely fixed by merged [#5792](https://github.com/HKUDS/nanobot/pull/5792) + [#5794](https://github.com/HKUDS/nanobot/pull/5794) — needs verification |
| **High** | [#5377](https://github.com/HKUDS/nanobot/issues/5377) Consolidation truncates input but advances cursor past full batch → message loss | **Closed** | Fixed by [#5379](https://github.com/HKUDS/nanobot/pull/5379) (merged) |
| **Medium** | [#5784](https://github.com/HKUDS/nanobot/issues/5784) QQ compaction notices appear as permanent chat messages | **Closed** | Fixed by [#5799](https://github.com/HKUDS/nanobot/pull/5799) (merged) |
| **Medium** | [#5765](https://github.com/HKUDS/nanobot/pull/5765) `"stream": "false"` string enables SSE incorrectly | **Closed** | Fixed by [#5765](https://github.com/HKUDS/nanobot/pull/5765) (merged) |
| **Medium** | [#5766](https://github.com/HKUDS/nanobot/pull/5766) Cron tool silently picks first schedule field when multiple provided | **Closed** | Fixed by [#5766](https://github.com/HKUDS/nanobot/pull/5766) (merged) |
| **Medium** | [#5762](https://github.com/HKUDS/nanobot/pull/5762) Cron tool accepts past `at` times, creates no-op jobs | **Closed** | Fixed by [#5762](https://github.com/HKUDS/nanobot/pull/5762) (merged) |

**Stability note:** 6/7 bugs have merged fixes. The critical session crossover (#5798) appears resolved by today's merges but lacks explicit confirmation from the reporter.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Native Google Vertex AI provider for Claude** | [#5459](https://github.com/HKUDS/nanobot/issues/5459) (Issue) | **High** — clear gap in provider matrix; enterprise demand; PR welcome |
| **OpenRouter native image generation API** | [#5718](https://github.com/HKUDS/nanobot/pull/5718) (PR, open) | **High** — PR exists, adds provider capability, needs review |
| **Model provider removal controls in WebUI** | [#5352](https://github.com/HKUDS/nanobot/pull/5352) (PR, open) | **Medium** — UI polish, safety checks included, open since Aug 12 |
| **Stream tool progress events (OpenAI-compatible SSE)** | [#5562](https://github.com/HKUDS/nanobot/pull/5562) (PR, conflict) | **Medium** — high value for API consumers, but has merge conflicts |
| **Discord `replyToMessage` parity with Telegram** | [#5800](https://github.com/HKUDS/nanobot/pull/5800) (PR, new) | **Medium** — channel parity, opt-in, includes tests/locales |
| **Telegram rich-message newlines, topic_id, typing status** | [#5803](https://github.com/HKUDS/nanobot/pull/5803) (PR, new) | **Medium** — 3 small quality-of-life fixes bundled |

**Prediction:** Vertex AI provider (#5459) and OpenRouter image gen (#5718) are the strongest candidates for the next minor release. Provider removal UI (#5352) may wait for design review.

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Session crossover on Windows** | [#5798](https://github.com/HKUDS/nanobot/issues/5798) — "replies from one session appear in another; 0.3.0 worked" | **High** — breaks core multi-session workflow; regression in v0.3.5 |
| **Compaction noise on QQ** | [#5784](https://github.com/HKUDS/nanobot/issues/5784) — "Compressing context… / Context compacted. appear as permanent messages" | **Medium** — UX annoyance for self-hosters on QQ; fixed in [#5799](https://github.com/HKUDS/nanobot/pull/5799) |
| **Missing Vertex AI / Claude provider** | [#5459](https://github.com/HKUDS/nanobot/issues/5459) — "no first-class provider for Anthropic Claude on Vertex" | **Medium** — forces custom OpenAI-compat config; enterprise blocker |
| **No tool progress visibility in API** | [#5562](https://github.com/HKUDS/nanobot/pull/5562) — "clients cannot observe tool execution lifecycle" | **Medium** — limits building rich UIs on NanoBot API |
| **Concurrent file writes corrupt session state** | [#5779](https://github.com/HKUDS/nanobot/pull/5779) (PR fixing #4798) — "two sessions interleave bytes or lose updates" | **Low/Medium** — affects power users with parallel sessions; fix in review |

**Satisfaction signal:** Users notice regressions quickly (v0.3.5 → 0.3.0 comparison) and file detailed reports. The project responds fast — critical bugs get same-day fixes.

## 8. Backlog Watch — Stale Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5352](https://github.com/HKUDS/nanobot/pull/5352) *Feat: Add model provider removal controls* | **37 days open** (since 2026-08-12) | Complete PR with tests, locales, safety guards. Blocked only by review. Removes dead provider configs — UX debt. |
| [#5562](https://github.com/HKUDS/nanobot/pull/5562) *Feat: Stream tool progress events* | **22 days open** (since 2026-08-27) | High-value API enhancement. Marked `conflict` — needs rebase/resolution. Unlocks real-time agent UIs. |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) *Fix: Mark partial subagent completion results* | **52 days open** (since 2026-07-28) | Addresses subagent turn completion tracking. Long-standing; may need design alignment. |
| [#5611](https://github.com/HKUDS/nanobot/pull/5611) *Feat: Bound reasoning replay to latest assistant turn* | **19 days open** (since 2026-08-30) | Token-budget optimization for reasoning models. Has `conflict` label. Performance win. |
| [#5718](https://github.com/HKUDS/nanobot/pull/5718) *Feat: OpenRouter native image generation* | **9 days open** (since 2026-09-09) | Provider capability expansion. Ready for review; fills image gen gap for OpenRouter users. |

**Maintainer action suggested:** Prioritize review of [#5352](https://github.com/HKUDS/nanobot/pull/5352) (oldest complete feature PR) and [#5562](https://github.com/HKUDS/nanobot/pull/5562) (high API value). Resolve conflicts on [#5611](https://github.com/HKUDS/nanobot/pull/5611) and [#5562](https://github.com/HKUDS/nanobot/pull/5562) to unblock merges.

---

**Project Health Score: 🟢 Strong**  
- **Velocity:** High (17 PRs/24h, 8 merges)  
- **Bug containment:** Excellent (6/7 bugs fixed same cycle)  
- **Community responsiveness:** Fast (critical regression addressed in hours)  
- **Technical debt:** Manageable (stale PRs are features, not bugs)  
- **Release readiness:** v0.3.6 patch candidates all merged; only verification needed

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-18

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 63 total items updated in the last 24 hours (13 issues, 50 PRs), but **zero releases** — indicating a heavy stabilization/refactor phase rather than a shipping cycle. All 13 issues remain open, suggesting triage and fix authoring are outpacing closure. The PR queue is dominated by targeted bug fixes (desktop, agent, tools, update flow, kanban) and a few feature PRs (Windows computer-use upgrade). No merged PRs appear in the 24h window, so the main branch has not yet absorbed today's fixes. Project health: **active but accumulation-heavy** — maintainers should prioritize merging the 49 open PRs to prevent integration debt.

---

## 2. Releases
**No new releases** in the last 24 hours. The latest tagged release remains prior to `v2026.9.14` (referenced in PR #114653 as a pre-update baseline).

---

## 3. Project Progress
**Merged/Closed PRs (last 24h):** 1 (count from data; specific PR not listed in detail).  
**Open PRs advanced today (representative):**

| PR | Area | Summary |
|----|------|---------|
| [#114640](https://github.com/NousResearch/hermes-agent/pull/114640) | ACP/Copilot | Fix process-slot sharing: each `CopilotACPClient` session now owns its subprocess, eliminating cross-session kill/leak. |
| [#114649](https://github.com/NousResearch/hermes-agent/pull/114649) | Agent | Distinguish background-review context failures from foreground conversation overflow — correct error surfacing. |
| [#114651](https://github.com/NousResearch/hermes-agent/pull/114651) | Review | Cap default `background_review.max_input_tokens` to 75% of model context (e.g., 49k for 65k window) instead of fixed 600k. |
| [#114650](https://github.com/NousResearch/hermes-agent/pull/114650) | Tools | `tool_call` rejection error now restates the valid single-entry payload shape for easier retry. |
| [#114643](https://github.com/NousResearch/hermes-agent/pull/114643) | Desktop | Retain sibling-worktree project ownership — prevents duplicate session listing under ancestor project. |
| [#114647](https://github.com/NousResearch/hermes-agent/pull/114647) | Desktop | Kanban board switcher now has accessible button name + tooltip; no longer reads as static label. |
| [#114653](https://github.com/NousResearch/hermes-agent/pull/114653) | Update | Bridge stale root modules so pre-handoff upgrades (from `v2026.9.14`) finish restart without `file_signature` import error. |
| [#114601](https://github.com/NousResearch/hermes-agent/pull/114601) | Update | Fail closed when pre-update backup fails; handle `SOUL.md` symlink loop that caused launchd restart storm. |
| [#114136](https://github.com/NousResearch/hermes-agent/pull/114136) | Agent/Streaming | Strip namespace-prefixed tool-call XML (`<atem:function_calls>`) from visible text channel. |
| [#111622](https://github.com/NousResearch/hermes-agent/pull/111622) | Desktop/Windows | Computer Use: direct Win32 named-pipe transport, a11y strategy, in-app titlebar HUD — addresses all review blockers. |

---

## 4. Community Hot Topics
*No issues/PRs have comment counts > 3 in the last 24h.* The highest-comment items are:

| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#70712](https://github.com/NousResearch/hermes-agent/issues/70712) | Issue | 3 | Long-standing (since Jul 24) desktop skills provenance bug — local skills mislabeled "learned" due to fallback `agent` provenance. Needs design decision. |
| [#110350](https://github.com/NousResearch/hermes-agent/issues/110350) | Issue | 2 | Windows installer copies Chocolatey `uv.exe` shim instead of real binary, breaking Python 3.11 verification. P1, platform blocker. |
| [#114038](https://github.com/NousResearch/hermes-agent/issues/114038) | Issue | 2 | Files pane shows only session CWD, not all project folders (multi-root). UX gap for multi-folder projects. |
| [#114644](https://github.com/NousResearch/hermes-agent/issues/114644) | Issue | 1 | Background-review context rejection misreported as foreground conversation too long — confusing UX. |
| [#114645](https://github.com/NousResearch/hermes-agent/issues/114645) | Issue | 1 | `background_review.max_input_tokens` default 600k ≫ local model context (9×). Follow-up to #93057. |

**Underlying needs:**  
- **Windows install reliability** (P1 blocker)  
- **Accurate error attribution** (background vs. foreground work)  
- **Multi-root project visibility** in desktop UI  
- **Sane defaults for local-model budgets**  
- **Skills provenance clarity** (design decision pending)

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **P1** | [#110350](https://github.com/NousResearch/hermes-agent/issues/110350) Windows installer copies Chocolatey `uv` shim → Python verification fails | — | Open, no fix PR yet |
| **P2** | [#114644](https://github.com/NousResearch/hermes-agent/issues/114644) Background-review context rejection misreported as foreground overflow | [#114649](https://github.com/NousResearch/hermes-agent/pull/114649) | Fix PR open |
| **P2** | [#114645](https://github.com/NousResearch/hermes-agent/issues/114645) `background_review.max_input_tokens` default 600k too large for local models | [#114651](https://github.com/NousResearch/hermes-agent/pull/114651) | Fix PR open |
| **P2** | [#114646](https://github.com/NousResearch/hermes-agent/issues/114646) `tool_call` rejects multi-entry batches but error doesn't show valid shape | [#114650](https://github.com/NousResearch/hermes-agent/pull/114650) | Fix PR open |
| **P3** | [#70712](https://github.com/NousResearch/hermes-agent/issues/70712) Desktop labels all `provenance=agent` skills as "learned" (fallback catches local/migrated) | — | Open, needs decision |
| **P3** | [#114525](https://github.com/NousResearch/hermes-agent/issues/114525) Skills index stale/degraded (29.8h > 26h limit) | — | Automated alert, cron may need trigger |
| **P3** | [#114625](https://github.com/NousResearch/hermes-agent/issues/114625) 5 bundled skills reference missing `scripts/` files in SKILL.md | — | Open, runtime failures |
| **P3** | [#114638](https://github.com/NousResearch/hermes-agent/issues/114638) Sibling worktree session appears under both repo and ancestor projects | [#114643](https://github.com/NousResearch/hermes-agent/pull/114643) | Fix PR open |
| **P3** | [#114642](https://github.com/NousResearch/hermes-agent/issues/114642) Kanban board switcher undiscoverable (looks like static label) | [#114647](https://github.com/NousResearch/hermes-agent/pull/114647) | Fix PR open |
| **P3** | [#114652](https://github.com/NousResearch/hermes-agent/issues/114652) No UI to set board `project_id` (API supports it) | — | Open, UI gap |
| **P4** | [#114639](https://github.com/NousResearch/hermes-agent/issues/114639) Concurrent ACP sessions share process slot → cross-kill + leak | [#114640](https://github.com/NousResearch/hermes-agent/pull/114640) | Fix PR open |
| **P4** | [#114648](https://github.com/NousResearch/hermes-agent/issues/114648) WebUI language switcher invisible on mobile; locale defaults to English | — | Open, no fix PR |

**Stability notes:**  
- Update flow had a **regression** (PR #114653/#114654) where `v2026.9.14` → HEAD upgrades fail due to missing `file_signature` in stale `utils.py` — now patched.  
- Kanban test-suite leakage into production DB (PR #114156) indicates test isolation gaps.  
- Skills index freshness probe failing suggests cron (`skills-index.yml`) may be misfiring or deploy pipeline delayed.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|-----------------------------|
| **Multi-root file tree** in desktop Files pane (show all project folders) | [#114038](https://github.com/NousResearch/hermes-agent/issues/114038) | High — clear UX gap, 2 comments, P3 |
| **Kanban board `project_id` UI** (API ready, UI missing) | [#114652](https://github.com/NousResearch/hermes-agent/issues/114652) | High — trivial wiring, explicit bug |
| **Windows Computer Use overhaul** (named pipes, a11y, HUD) | [#111622](https://github.com/NousResearch/hermes-agent/pull/111622) | Medium — large PR, review blockers cleared, Windows-strategic |
| **Skills provenance redesign** (distinguish local/learned/migrated) | [#70712](https://github.com/NousResearch/hermes-agent/issues/70712) | Low — needs design decision, open since Jul |
| **Mobile-responsive i18n** (language switcher visible, locale persistence) | [#114648](https://github.com/NousResearch/hermes-agent/issues/114648) | Medium — mobile/web parity |

**Predicted next-version content:** Desktop UX polish (multi-root files, Kanban switcher, board-project wiring), Windows install fix, background-review budget fix, ACP concurrency fix. Skills provenance and mobile i18n likely slip.

---

## 7. User Feedback Summary
**Pain points (from issues):**
- **Windows users blocked** on install — Chocolatey shim copy breaks Python verification (#110350).
- **Confusing errors** — background review OOM blamed on user's short conversation (#114644).
- **Desktop UX gaps** — can't see all project folders (#114038), Kanban switcher invisible (#114642), board-project binding absent from UI (#114652).
- **Skills trust** — bundled skills reference missing scripts (#114625), index stale (#114525), local skills mislabeled (#70712).
- **Mobile web unusable for i18n** — language switcher hidden, forced English (#114648).

**Positive signals:**  
- Active PR authors (KoNit-K, Byrd-IT, beardthelion, KoNit-K, etc.) delivering focused fixes same-day as issues.  
- Windows Computer Use PR (#111622) shows investment in first-class Windows support.  
- Automated freshness probes (#114525) catch infra drift.

---

## 8. Backlog Watch — Long-Unanswered / Needs Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#70712](https://github.com/NousResearch/hermes-agent/issues/70712) | 56 days (since 2026-07-24) | **Design decision needed** on skills provenance taxonomy. Blocks correct labeling, affects trust. Tagged `needs-decision`. |
| [#110350](https://github.com/NousResearch/hermes-agent/issues/110350) | 5 days | **P1 Windows install blocker**. No fix PR yet. High user impact. |
| [#114525](https://github.com/NousResearch/hermes-agent/issues/114525) | <1 day (bot) | Skills index degraded — cron/deploy pipeline may need manual kick or schedule fix. |
| [#114625](https://github.com/NousResearch/hermes-agent/issues/114625) | <1 day | 5 bundled skills have dead `scripts/` refs — runtime failures for users. Quick fix: restore files or update SKILL.md. |
| [#114648](https://github.com/NousResearch/hermes-agent/issues/114648) | <1 day | Mobile i18n broken — no fix PR. Affects non-English mobile users. |
| [#114652](https://github.com/NousResearch/hermes-agent/issues/114652) | <1 day | API/UI mismatch — board `project_id` settable via API but not UI. Low effort, high visibility. |

**Actionable:** Prioritize #110350 (P1 Windows), #70712 (design unblock), and merge the 10+ ready fix PRs to drain the open-PR backlog.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-18

## 1. Today's Overview
PicoClaw shows **steady maintenance velocity** with 14 PRs updated in the last 24 hours (7 merged/closed, 7 open). No new releases were published. The merged work is dominated by **dependency updates** (5 dependabot PRs) plus two functional fixes: threading replies to originating messages and adding Anthropic Messages API support. Open PRs signal active development on DeltaChat refactoring, IRCv3 multiline support, OpenAI Responses API migration, and a new Build Remote Agent pairing protocol. One stale QQ channel bug was closed without resolution, indicating possible platform-side auth changes.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3358](https://github.com/sipeed/picoclaw/pull/3358) | **Fix** | Thread bot responses to the originating question message (adds `ReplyToMessageID` for non-reply @mentions) | Improves UX in busy group chats; bot answers now visually linked to triggering message |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | **Feature** | Add `anthropic-messages` protocol prefix for native Anthropic `/v1/messages` API format (fixes [#269](https://github.com/sipeed/picoclaw/issues/269)) | Unblocks Anthropic-compatible proxies/services that only support native Messages API |
| [#3360](https://github.com/sipeed/picoclaw/pull/3360) | **Deps** | Bump `larksuite/oapi-sdk-go/v3` 3.9.4 → 3.11.0 | Feishu/Lark integration dependency refresh |
| [#3361](https://github.com/sipeed/picoclaw/pull/3361) | **Deps** | Bump `google.golang.org/protobuf` 1.36.11 → 1.36.12 | Minor protobuf update |
| [#3364](https://github.com/sipeed/picoclaw/pull/3364) | **Deps** | Bump `aws/aws-sdk-go-v2` 1.42.0 → 1.45.1 | AWS SDK refresh (multiple service updates) |
| [#3362](https://github.com/sipeed/picoclaw/pull/3362) | **Deps** | Bump `golang.org/x/term` 0.44.0 → 0.45.0 | Terminal handling dependency |
| [#3363](https://github.com/sipeed/picoclaw/pull/3363) | **Deps** | Bump `ergochat/irc-go` 0.6.0 → 0.7.0 | IRC library major version; includes multiline groundwork |

**Net signal**: Maintenance-heavy day; two user-facing fixes merged after 6+ months (anthropic PR opened March).

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) **QQ channel 401 auth error** | 5 comments, closed as stale | Users need QQ channel working; error suggests QQ gateway now rejects current Authorization header format — likely requires protocol update |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) **DeltaChat refactor (-200 LOC)** | Open since Jul 3, stale | Simplify DeltaChat integration; drop legacy password auth, reference official relay list |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) **Switch OpenAI to Responses API** | Created & updated today | Migrate from Chat Completions to OpenAI's newer Responses API (assistants, tools, stateful threads) |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) **Build Remote Agent pairing (gbr/1)** | Open since Aug 23 | Enable phone spectating of desktop agent via QR/8-char code; new pairing protocol |

**Analysis**: QQ auth breakage and OpenAI API migration are the two highest-impact platform changes requiring maintainer response. DeltaChat cleanup and remote agent pairing show community extending PicoClaw beyond core chat bridges.

## 5. Bugs & Stability
| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **High** | [#3349](https://github.com/sipeed/picoclaw/issues/3349) QQ channel `401 Authorization header format error` (code 11241) | **Closed stale** — no fix | None |
| **Medium** | [#3376](https://github.com/sipeed/picoclaw/pull/3376) DeltaChat config validation error: `unknown type "deltachat"` | **Open PR** | #3376 (registers deltachat as custom channel) |
| **Low** | [#3353](https://github.com/sipeed/picoclaw/pull/3353) Tool feedback animations can edit channel message indefinitely on missed cleanup | **Open PR** | #3353 (5-min cap + stop on first edit error) |
| **Low** | [#3358](https://github.com/sipeed/picoclaw/pull/3358) Bot replies unthreaded from @mention in groups | **Merged** | #3358 ✅ |

**Note**: QQ channel breakage is the only production-blocking issue with no active fix. DeltaChat validation error blocks new DeltaChat setups until #3376 merges.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **OpenAI Responses API migration** | [#3381](https://github.com/sipeed/picoclaw/pull/3381) (opened today) | **High** — labeled ✨ New feature, aligns with OpenAI direction |
| **IRCv3 multiline message assembly** | [#3354](https://github.com/sipeed/picoclaw/pull/3354) | **High** — standards-compliant, improves IRC fidelity |
| **Build Remote Agent (gbr/1) pairing** | [#3344](https://github.com/sipeed/picoclaw/pull/3344) | **Medium** — niche but complete implementation; depends on external `gbr-agent` |
| **DeltaChat modernization** | [#3222](https://github.com/sipeed/picoclaw/pull/3222), [#3376](https://github.com/sipeed/picoclaw/pull/3376) | **Medium** — two PRs active; config fix (#3376) likely first |
| **Parallel Search MCP integration** | [#3368](https://github.com/sipeed/picoclaw/pull/3368) | **Low-Medium** — docs-only, adds web search without API key |

**Prediction**: OpenAI Responses API + IRCv3 multiline + DeltaChat config fix are the strongest candidates for next minor release.

## 7. User Feedback Summary
| Pain Point / Use Case | Evidence | Sentiment |
|----------------------|----------|-----------|
| **QQ channel broken** — Docker & Linux x86 both fail with 401 auth error | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | 😠 Frustrated; issue closed stale without resolution |
| **Anthropic native API unsupported** — proxies only exposing `/v1/messages` | [#1158](https://github.com/sipeed/picoclaw/pull/1158) (fixes #269) | ✅ Resolved after 6 months |
| **Bot replies float unthreaded in busy groups** | [#3358](https://github.com/sipeed/picoclaw/pull/3358) | ✅ Fixed |
| **DeltaChat setup fails config validation** | [#3376](https://github.com/sipeed/picoclaw/pull/3376) | 🔧 Blocked; fix PR open |
| **Desire for phone→desktop agent spectating** | [#3344](https://github.com/sipeed/picoclaw/pull/3344) | 🧪 Experimental; community-driven |
| **Need web search without API keys** | [#3368](https://github.com/sipeed/picoclaw/pull/3368) | 📝 Docs added for Parallel Search MCP |

**Overall**: Users hit platform-specific auth breakages (QQ) and protocol gaps (Anthropic, OpenAI Responses). Community contributes fixes for niche protocols (IRCv3, DeltaChat, gbr/1).

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) **QQ channel 401 error** | 19 days (closed stale) | **Production blocker for QQ users**; root cause likely QQ gateway API change — needs investigation, not closure |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) **DeltaChat refactor** | 77 days | Large cleanup (-200 LOC), removes legacy auth; stale but valuable |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) **Build Remote Agent pairing** | 26 days | Novel feature; needs security/protocol review |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) **IRCv3 multiline** | 18 days | Standards compliance; improves IRC reliability |
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) **DeltaChat config fix** | 8 days | Unblocks new DeltaChat users; small, targeted fix |

**Recommendation**: Prioritize QQ auth investigation (reopen #3349 or new issue), merge #3376 (DeltaChat unblock), review #3381 (OpenAI Responses API — strategic), then triage DeltaChat refactor and IRCv3 multiline.

---

*Digest generated from GitHub data as of 2026-09-18. All links point to sipeed/picoclaw repository.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-18

## 1. Today's Overview
NanoClaw shows **high development velocity** with 18 PRs updated in the last 24 hours (14 open, 4 merged/closed), indicating active feature work and maintenance. The project is undergoing a **major architectural refactor** around credential gateways and provider integrations, with multiple interconnected PRs (#3815–#3818, #3825) extracting OneCLI into an installable skill and introducing an Iron Proxy gateway. Setup/installation fixes (#3844, #3847) address Linux permission issues affecting users on distro-packaged Node.js. No new releases were cut today.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3844](https://github.com/nanocoai/nanoclaw/pull/3844) | **Fix** (setup) | Replaced broken `sudo` retry in `setup.sh` with user-owned `npm` prefix fallback for distro-packaged Node.js (Fedora, Debian/Ubuntu) | Resolves `EACCES` bootstrap failures on Linux without nvm/Homebrew |
| [#3847](https://github.com/nanocoai/nanoclaw/pull/3847) | **Fix** (setup) | Enables `corepack pnpm` in `~/.local/bin` when global bin dir is read-only (`/usr`) | Prevents bootstrap hang on system-wide Node installs; improves Linux UX |
| [#3846](https://github.com/nanocoai/nanoclaw/pull/3846) | **Feature** (skills) | Adds `/add-typesafe-tool` skill + `maintainer` agent template using TypeSafe's Jev decision model as container tool | New classification/ranking tooling for agent workflows |
| [#3148](https://github.com/nanocoai/nanoclaw/pull/3148) | **Fix** (config) | Honors `WEBHOOK_PORT` from `.env` with proper config precedence (env → `.env` → default 3000) | Fixes webhook port configuration (#2901) |

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3816](https://github.com/nanocoai/nanoclaw/pull/3816) | 14-area refactor, core-team | **Modular gateway architecture** — extracting OneCLI into a skill enables pluggable credential providers and cleaner separation of concerns |
| [#3815](https://github.com/nanocoai/nanoclaw/pull/3815) | 13-area refactor, core-team | **Centralized credential contract** — unifying gateway contributions, provider domains, session leases, and approval lifecycle under one host-owned contract |
| [#3825](https://github.com/nanocoai/nanoclaw/pull/3825) | 6-area feature, core-team | **Enterprise auth via Iron Proxy** — API key / native ChatGPT sign-in with credential storage and OAuth refresh owned by Iron Control |
| [#957](https://github.com/nanocoai/nanoclaw/issues/957) | 11 comments, 8 👍 (closed) | **Podman support request** — macOS/Linux users want rootless, daemonless container alternative to Docker; closed but signals demand |

**Analysis**: The gateway/skill refactor (#3815–#3818) is the dominant theme — maintainers are building a **pluggable provider ecosystem** where OneCLI becomes just one gateway among many (Iron Proxy next). This suggests a strategic shift toward **multi-provider, enterprise-ready authentication**.

## 5. Bugs & Stability

| Severity | Issue/PR | Status | Fix Exists? |
|----------|----------|--------|-------------|
| **High** | [#3849](https://github.com/nanocoai/nanoclaw/pull/3849) — OpenCode history serialization failure (Gemini rejects `functionCall` leading turn) | Open | PR #3849 (recovery logic) |
| **Medium** | [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) — Agent runner not carrying channel attachments as structured parts to providers | Open (since Jul 30) | PR #3156 (carry attachments) |
| **Medium** | [#2681](https://github.com/nanocoai/nanoclaw/pull/2681) — Service linger fails on per-home-encrypted systems | Open (since Jun 3) | PR #2681 (skip linger) |
| **Low** | [#3803](https://github.com/nanocoai/nanoclaw/pull/3803) — Webhook port recovery test flakiness (`EADDRINUSE`) | Open | PR #3803 (fixture-owned port retry) |
| **Low** | [#3552](https://github.com/nanocoai/nanoclaw/pull/3552) / [#3551](https://github.com/nanocoai/nanoclaw/pull/3551) — Codex/OpenCode MCP policy enforcement gaps behind OneCLI | Open (since Aug 26) | PRs #3552, #3551 |

**Note**: Two long-standing bugs (#2681, #3156) remain open for 2+ months — may need maintainer prioritization.

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Pluggable gateway/skill system** | 4 interconnected PRs (#3815–#3818) + #3825 (Iron Proxy) | **Very High** — core-team labeled, large scope |
| **Stateless scheduled tasks** | [#3741](https://github.com/nanocoai/nanoclaw/pull/3741) — `--fresh-session` flag to prevent context bloat | **High** — addresses cost growth (15%/week reported) |
| **TypeSafe Jev decision model integration** | [#3846](https://github.com/nanocoai/nanoclaw/pull/3846), [#3848](https://github.com/nanocoai/nanoclaw/pull/3848) — container tool + agent template | **High** — merged (#3846) + follow-up PR |
| **Local monitoring dashboard** | [#3845](https://github.com/nanocoai/nanoclaw/pull/3845) — `@nanoco/nanoclaw-dashboard` with API/UI | **Medium** — new dependency, config flags added |
| **Podman as Docker alternative** | [#957](https://github.com/nanocoai/nanoclaw/issues/957) — 8 👍, closed but documented request | **Low-Medium** — docs-only change, no code PR yet |

## 7. User Feedback Summary

| Pain Point / Use Case | Source | Sentiment |
|----------------------|--------|-----------|
| **Scheduled task context bloat** — "job doing identical task each night costs more every night (grew 15% in a week)" | [#3741](https://github.com/nanocoai/nanoclaw/pull/3741) | 😤 Frustrated → **PR proposes fix** |
| **Linux bootstrap failures** — `EACCES` on distro Node.js (Fedora/Debian), `corepack enable` hangs on `/usr` | [#3844](https://github.com/nanocoai/nanoclaw/pull/3844), [#3847](https://github.com/nanocoai/nanoclaw/pull/3847) | 😤 Frustrated → **Fixed & merged** |
| **Podman desire** — "rootless, daemonless, better macOS/Linux UX" | [#957](https://github.com/nanocoai/nanoclaw/issues/957) | 🙂 Constructive → **Closed (doc request)** |
| **Gemini history corruption** — stored sessions with leading `functionCall` break requests | [#3849](https://github.com/nanocoai/nanoclaw/pull/3849) | 🐛 Bug report → **Fix in progress** |
| **Enterprise auth needs** — Iron Proxy gateway for API keys / ChatGPT sign-in with OAuth refresh | [#3825](https://github.com/nanocoai/nanoclaw/pull/3825) | 🏢 Enterprise → **Active development** |

## 8. Backlog Watch — Stale Items Needing Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2681](https://github.com/nanocoai/nanoclaw/pull/2681) — `fix(service): skip linger on per-home-encrypted systems` | **107 days** (opened Jun 3) | Blocks systemd user services on encrypted home dirs (common on Fedora/Ubuntu); core-team labeled but unmerged |
| [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) — `fix(agent-runner): carry channel attachments to providers as structured parts` | **50 days** (opened Jul 30) | Affects multimodal/attachment handling across providers; core-team labeled, no merge |
| [#3551](https://github.com/nanocoai/nanoclaw/pull/3551) / [#3552](https://github.com/nanocoai/nanoclaw/pull/3552) — MCP policy enforcement + OneCLI gateway routing | **23 days** (opened Aug 26) | Security/compliance gap: remote MCP policies not enforced at runtime; core-team labeled |
| [#957](https://github.com/nanocoai/nanoclaw/issues/957) — Podman support request | **191 days** (opened Mar 11) | 8 👍, closed but no doc PR; recurring user ask for rootless containers |

---

**Health Assessment**: 🟢 **Healthy velocity** with focused architectural work (gateway/skill refactor). 🟡 **Risk**: 3+ month-old PRs (#2681, #3156) stalled despite core-team labels — may indicate review bandwidth constraints. 🟢 **Positive**: Linux setup fixes merged quickly, showing responsiveness to user-blocking issues. Next release likely to include gateway modularity, stateless scheduled tasks, and TypeSafe tooling.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-18

## 1. Today's Overview
IronClaw shows **low code-change velocity** today with zero pull requests opened, merged, or updated in the last 24 hours. Activity centers on **two open issues**: a feature request for provider-agnostic thinking/effort control (#7537, opened 2026-08-12, still under discussion) and a daily automated failure taxonomy report (#8101) highlighting model-quality regressions in the `officeqa` benchmark suite. No new releases were published. The project appears in a **maintenance/observability phase**—focused on diagnosing model behavior rather than shipping features.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Project Progress
*No PRs merged or closed today.* The only movement is issue discussion (#7537 received 2 new comments) and the automated nightly failure report (#8101).

## 4. Community Hot Topics
| Issue | Activity | Core Need |
|-------|----------|-----------|
| **#7537** `feat(llm): generic per-request thinking/effort control` | 2 comments, updated today | **Provider-agnostic “thinking budget” knob** — Users want a single request-level parameter (e.g., `thinking_effort: low|medium|high`) that each provider adapter (OpenAI, Anthropic, DeepSeek, etc.) maps to its native control (`reasoning_effort`, `thinking.budget_tokens`, `chat_template_kwargs`, …). Triggered by DeepSeek-V4-Flash verbosity regressions. |
| **#8101** `Daily ironclaw failure taxonomy — 2026-09-17` | 0 comments, created yesterday | **Automated regression surveillance** — Nightly benchmark run (`officeqa`, 35 non-pass tasks) flags *model-quality* errors, not infrastructure flakes. DeepSeek-V4-Flash shows navigation & reasoning failures. Serves as early-warning for provider model drift. |

**Underlying signal**: Contributors are prioritizing **observability & control over model reasoning** over new agent capabilities.

## 5. Bugs & Stability
*No new bug reports or crash issues filed today.* The failure taxonomy (#8101) categorizes existing non-pass tasks as **genuine model-quality errors** (DeepSeek-V4-Flash reasoning/navigation), not regressions in IronClaw code. No fix PRs exist because root cause lies in the upstream model.

## 6. Feature Requests & Roadmap Signals
| Request | Likelihood for Next Release | Rationale |
|---------|-----------------------------|-----------|
| Generic `thinking_effort` parameter with provider-native mapping (#7537) | **High** | Cross-cutting concern; affects every provider adapter; already has design discussion; unblocks consistent UX for reasoning-heavy workloads. |
| Structured failure taxonomy pipeline (#8101) | **Medium** | Already automated; likely to be promoted to a first-class `ironclaw benchmark monitor` CLI command. |

## 7. User Feedback Summary
- **Pain point**: *“DeepSeek-V4-Flash became unexpectedly verbose after 0731 checkpoint”* — users cannot throttle reasoning without provider-specific hacks.
- **Use case**: Teams running `officeqa`-style benchmarks need **stable, comparable model behavior** across provider upgrades.
- **Satisfaction**: Silent on UX; vocal on **lack of a unified reasoning-control API**.

## 8. Backlog Watch
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| **#7537** Generic thinking/effort control | 38 days | Blocked on API design consensus (per-request vs. per-model default, enum vs. int tokens). No PR yet. Maintainer review needed to unblock provider-adapter work. |
| **#8101** Daily failure taxonomy (recurring) | 1 day (new daily) | If `officeqa` non-pass count trends upward, it signals **model drift** requiring either prompt/agent updates or provider escalation. Watch for 3+ consecutive days of rising failures. |

---

**Health Indicator**: 🟡 **Observability-heavy, feature-light** — Codebase stable; energy spent on diagnosing upstream model behavior. Next meaningful signal will be a PR implementing #7537 or a spike in benchmark failures.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-18

## 1. Today's Overview
LobsterAI shows **high maintenance velocity** today with 18 PRs updated (13 merged/closed) and 5 issues updated (3 closed as stale, 2 remaining open). No new release was published. The activity pattern indicates a **stabilization sprint**: core maintainers are systematically closing stale March-era issues/PRs while landing targeted fixes for openclaw integration, Cowork session stability, IM gateway robustness, and a critical shell IPC security hole. Dependency hygiene is also underway (Vite 5 → 8). The project is in healthy active maintenance mode, though the backlog of stale items suggests prior triage debt.

## 2. Releases
**No new releases today.** The last release PR (#2699 “Release/2026.9.16”) was merged yesterday.

## 3. Project Progress — Merged/Closed PRs Today (13)
| PR | Area | Summary |
|----|------|---------|
| [#2700](https://github.com/netease-youdao/LobsterAI/pull/2700) | openclaw | **Fix**: Initialize legacy v1 state schema before repair verification — prevents audit_events table missing errors on pre-audit databases. |
| [#641](https://github.com/netease-youdao/LobsterAI/pull/641) | cowork (renderer) | **Feature**: Double-click to rename session title (reuses existing inline rename UI, guarded in batch mode). |
| [#2699](https://github.com/netease-youdao/LobsterAI/pull/2699) | renderer, docs, main, openclaw, cowork | **Release**: 2026.9.16 cut (meta PR). |
| [#2698](https://github.com/netease-youdao/LobsterAI/pull/2698) | openclaw | **Fix**: Safely recover stale gateway lock owners — validates lock PID liveness inside maintenance barrier before snapshot/doctor/recovery. |
| [#2692](https://github.com/netease-youdao/LobsterAI/pull/2692) | cowork (renderer) | **Feature**: Rotate “Thinking” phase labels and show finished step count in activity indicator to avoid stalled perception. |
| [#2697](https://github.com/netease-youdao/LobsterAI/pull/2697) | cowork (renderer) | Follow-up to #2692. |
| [#2695](https://github.com/netease-youdao/LobsterAI/pull/2695) | openclaw, main, docs | **Fix**: Contain browser DNS failures inside tool calls — prevents gateway restart cascades that interrupt sessions/IM. |
| [#2693](https://github.com/netease-youdao/LobsterAI/pull/2693) | main | **Fix**: Immediate window hide on quit; guard window ops during shutdown; poll web-search skill service exit instead of fixed 2s wait. |
| [#2694](https://github.com/netease-youdao/LobsterAI/pull/2694) | openclaw, main, docs | **Fix**: Guard IM workloads in auto-config-recovery — track IM lifecycle evidence (prepare, run, poll, stop, expiry) to avoid misclassifying busy as idle and restarting gateway. |
| [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) | scheduled-task | **Feature**: Push IM alert on cron job failure (previously only success delivered via `handleComplete`). |
| [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079) | cowork (renderer) | **Feature**: “Current Process” right panel — shows tool execution records with diff view for Write/Edit ops. |
| [#1081](https://github.com/netease-youdao/LobsterAI/pull/1081) | mcp (renderer) | **Fix**: i18n for MCP sync toast (`{count} tools`); fix edit dialog scrollbar overflow beyond rounded corners. |
| [#1087](https://github.com/netease-youdao/LobsterAI/pull/1087) | cowork | **Fix**: Deduplicate error toast on `continueSession` failure — removed first `addMessage` call, kept classified error path. |

**Open PRs still in flight (5):**  
- [#2669](https://github.com/netease-youdao/LobsterAI/pull/2669) chore: Vite 5.4.21 → 8.3.0 (dependabot)  
- [#2696](https://github.com/netease-youdao/LobsterAI/pull/2696) feat: Workspace review, inline question dock, Tasks panel (Codex-style)  
- [#1027](https://github.com/netease-youdao/LobsterAI/pull/1027) fix: Skip optional plugins with unreachable custom registries immediately  
- [#1028](https://github.com/netease-youdao/LobsterAI/pull/1028) fix: Guard `v2Client` null in `sendTeamTextReply` / `fetchTeamName`  
- [#1029](https://github.com/netease-youdao/LobsterAI/pull/1029) fix: Replace auto-derived `PLATFORM_TO_CHANNEL_MAP` with explicit definition  

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Signal |
|------|------|----------|-----------|--------|
| [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082) | Issue | 2 | 0 | **Compliance pressure**: User reports national CERT requirement to update `openclaw` from v2026.3.2 — indicates enterprise/government deployment with strict dependency governance. |
| [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) | Issue | 2 | 0 | **Data integrity**: Prefetch async callback lacks `turnToken` validation — cross-turn contamination risk in multi-turn sessions. |
| [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) | Issue | 2 | 0 | **Concurrency bug**: `CoworkRunner` missing reentrancy guard — concurrent `startSession`/`continueSession` corrupts stream state. |
| [#1026](https://github.com/netease-youdao/LobsterAI/issues/1026) | Issue | 1 | 0 | **Crash**: `NimGateway.sendTeamTextReply` uses `v2Client!` without null check — crashes on reconnect during chunked send. |
| [#1031](https://github.com/netease-youdao/LobsterAI/issues/1031) | Issue | 1 | 0 | **Security**: `shell:openExternal` IPC accepts arbitrary protocols (`file://`, `javascript:`) — RCE vector from compromised renderer. |

**Underlying needs**: Enterprise compliance (dependency freshness), session reliability under concurrency, and Electron IPC hardening are the three pillars users are signaling.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **Critical (RCE)** | [#1031](https://github.com/netease-youdao/LobsterAI/issues/1031) `shell:openExternal` no protocol validation | — | **Open, stale** — no fix PR yet |
| **High (Crash)** | [#1026](https://github.com/netease-youdao/LobsterAI/issues/1026) `v2Client` null deref in `sendTeamTextReply` | [#1028](https://github.com/netease-youdao/LobsterAI/pull/1028) | **Open PR** (stale, March) |
| **High (Data corruption)** | [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) Cowork reentrancy → stream corruption | — | **Closed stale** (no fix merged) |
| **High (Data leak)** | [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) Prefetch cross-turn contamination | — | **Closed stale** (no fix merged) |
| **Medium (Compliance)** | [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082) `openclaw` v2026.3.2 outdated per CERT | — | **Closed stale** (dependency update likely in #2700 context) |
| **Medium (Observability)** | [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) Cron failure silent | [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) | **Merged today** ✅ |

**Note**: Three high-severity bugs (#1088, #1089, #1031) have **no merged fix** despite being identified in March. #1028 (fix for #1026) is open but stale.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Codex-style workspace**: Turn review, inline question dock, Tasks panel | [#2696](https://github.com/netease-youdao/LobsterAI/pull/2696) (open, large) | **High** — downstream fork already using; rebased onto release branch |
| **Rich activity indicator**: Phase rotation + step counter | [#2692](https://github.com/netease-youdao/LobsterAI/pull/2692) (merged) | **Delivered** |
| **Tool execution side panel with diff** | [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079) (merged) | **Delivered** |
| **Session title inline rename** | [#641](https://github.com/netease-youdao/LobsterAI/pull/641) (merged) | **Delivered** |
| **Cron failure → IM alert** | [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) (merged) | **Delivered** |
| **Vite 8 upgrade** | [#2669](https://github.com/netease-youdao/LobsterAI/pull/2669) (open) | **Medium** — major version, may need CI validation |
| **Explicit platform→channel map** | [#1029](https://github.com/netease-youdao/LobsterAI/pull/1029) (open) | **Medium** — correctness fix for multi-channel platforms |

**Prediction**: Next release will likely bundle the Codex-style workspace (#2696) once reviewed, plus Vite 8 if CI passes. Security fix for #1031 should be prioritized.

## 7. User Feedback Summary
- **Compliance-driven urgency**: “National Internet Emergency Center requires latest openclaw” (#1082) — users in regulated environments cannot upgrade LobsterAI until openclaw dependency updates.
- **Silent failures hurt trust**: Cron jobs failing without notification (#1078) — users discover failures only by opening UI.
- **Session instability under load**: Rapid messages / batch IM delivery cause stream corruption (#1089) and duplicate errors (#1087).
- **Security awareness**: Reporter of #1031 demonstrates exploit knowledge (`file://`, `javascript:` protocols) — likely internal sec team or advanced user.
- **UX polish appreciated**: Diff view in tool panel (#1079), thinking phase animation (#2692), double-click rename (#641) show user-facing investment.

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1031](https://github.com/netease-youdao/LobsterAI/issues/1031) `shell:openExternal` protocol validation | 6 months | **Critical security** — Electron IPC hardening; trivial fix (allowlist `http/https`). |
| [#1026](https://github.com/netease-youdao/LobsterAI/issues/1026) / [#1028](https://github.com/netease-youdao/LobsterAI/pull/1028) `v2Client` null guard | 6 months | **Crash on reconnect** — affects IM reliability; fix PR exists but stale. |
| [#1029](https://github.com/netease-youdao/LobsterAI/pull/1029) Explicit `PLATFORM_TO_CHANNEL_MAP` | 6 months | **Correctness** — auto-derived map breaks with duplicate platform entries (popo, wecom). |
| [#1027](https://github.com/netease-youdao/LobsterAI/pull/1027) Skip unreachable optional plugin registries | 6 months | **DX** — 5 min hang on `npm install` for external contributors; fix PR open. |
| [#2669](https://github.com/netease-youdao/LobsterAI/pull/2669) Vite 5 → 8 | 4 days | **Tech debt** — major version; dependabot PR open, needs CI validation. |
| [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) Prefetch `turnToken` check | 6 months | **Data integrity** — cross-turn contamination; closed stale without fix. |
| [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) Cowork reentrancy guard | 6 months | **Stability** — concurrent session corruption; closed stale without fix. |

**Recommendation**: Prioritize #1031 (security), #1028 (crash fix ready), and #1029 (correctness) for immediate review. Re-open #1088/#1089 with fix ownership.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-18

---

## 1. Today's Overview

Moltis shows **steady maintenance activity** with 2 new issues and 3 open PRs updated in the last 24 hours, but **no releases or merged changes**. The project is in a **pre-release stabilization phase** — contributors are addressing build reproducibility (Nix flake), sandbox hardening, and a cron edge-case, while a new enhancement request explores prepaid web-search hops. No critical regressions or security incidents are reported. Overall health: **healthy, active maintenance**.

---

## 2. Releases

**No new releases today.**  
The latest published tag remains `20260913.02` (commit 6aa4881). Users on that tag should be aware of the Nix build breakage documented in [Issue #1273](#3-project-progress).

---

## 3. Project Progress

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#1272](https://github.com/moltis-org/moltis/pull/1272) | **Open** (updated 2026-09-17) | **feat(sandbox): per-agent mounts, `run_as`, forced sandbox** — Adds three per-agent knobs in `[sandbox]` block: extra bind mounts, UID/GID, and a “never run outside sandbox” flag. Threaded through agent preset parsing, sandbox config, and container runtime. | **High** — Major sandbox hardening; enables multi-tenant / least-privilege agent deployments. |
| [#1262](https://github.com/moltis-org/moltis/pull/1262) | **Open** (updated 2026-09-17) | **fix(cron): treat `active_hours end="24:00"` as end-of-day** — Fixes chrono parsing bug where `%H` rejects hour 24, causing the documented default window (`08:00`–`24:00`) to fail-open (always active). | **Medium** — Restores intended cron scheduling behavior; affects all users relying on default active hours. |
| [#1275](https://github.com/moltis-org/moltis/pull/1275) | **Open** (created 2026-09-18) | **chore(deps): bump `smol-toml` 1.7.0 → 1.8.0 in `/docs`** — Dependabot update for the documentation site’s npm dependency. | **Low** — Routine dependency maintenance; no runtime impact. |

**No PRs merged or closed today.** All three remain under review.

---

## 4. Community Hot Topics

| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#1273](https://github.com/moltis-org/moltis/issues/1273) | **Issue** (Nix flake build broken) | 0 comments, 0 👍, created & updated 2026-09-17 | **Reproducible builds for Nix users** — Missing vendored crate hashes (`wacore-0.6.0`, `zvec-rust-0.6.0`) and web assets prevent `nix build .#default` at tag `20260913.02`. Blocks downstream packagers (e.g., NixOS, home-manager). |
| [#1274](https://github.com/moltis-org/moltis/issues/1274) | **Issue** (enhancement: prepaid search hop) | 0 comments, 0 👍, created & updated 2026-09-17 | **Cost control for web search** — User proposes a “prepaid hop” model for `wasm-web-search` to cap API costs per agent invocation. Signals demand for predictable billing in production LLM workflows. |
| [#1272](https://github.com/moltis-org/moltis/pull/1272) | **PR** (sandbox per-agent config) | 0 comments, 0 👍, updated 2026-09-17 | **Operator demand for fine-grained isolation** — Reviewers likely evaluating security surface; zero discussion so far suggests either low visibility or straightforward acceptance. |

*No item has comments or reactions yet — community engagement is quiet but the issues target concrete operator pain points.*

---

## 5. Bugs & Stability

| Severity | Issue / PR | Description | Fix PR? |
|----------|------------|-------------|---------|
| **Medium** | [#1262](https://github.com/moltis-org/moltis/pull/1262) | Cron `active_hours end="24:00"` fails to parse → fail-open → agents run every hour instead of respecting window. Affects all deployments using default config. | **Yes** — PR #1262 open, ready for review. |
| **Medium** | [#1273](https://github.com/moltis-org/moltis/issues/1273) | Nix flake at tag `20260913.02` cannot build: missing `cargoLock.outputHashes` for `wacore-0.6.0`, `zvec-rust-0.6.0` and missing web assets. Blocks Nix-based CI/CD and distribution. | **No fix PR yet** — Requires maintainer to update `flake.nix` with new vendor hashes and asset fetching. |
| **Low** | — | No crashes, panics, or data-loss reports in last 24h. | — |

**Recommendation:** Prioritize merging #1262 (cron fix) and cutting a patch release; assign #1273 to a Nix-fluent maintainer.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **Per-agent sandbox mounts / `run_as` / forced sandbox** | [PR #1272](https://github.com/moltis-org/moltis/pull/1272) | **High** — Already implemented, awaiting review. | Directly addresses multi-tenant security; aligns with “sandbox-first” architecture. |
| **Prepaid search hop for `wasm-web-search`** | [Issue #1274](https://github.com/moltis-org/moltis/issues/1274) | **Medium** — New, no discussion yet. | Cost predictability is a recurring theme in LLM tooling; likely to be prototyped if maintainers see demand. |
| **Nix flake build reproducibility** | [Issue #1273](https://github.com/moltis-org/moltis/issues/1273) | **High** — Blocking packagers. | Fix is mechanical (update hashes, add asset fetch); expected in next patch. |

---

## 7. User Feedback Summary

- **Pain point:** *Nix users cannot build the latest tag* — “`nix build .#default` fails with missing vendor hashes and web assets.” ([#1273](https://github.com/moltis-org/moltis/issues/1273))
- **Pain point:** *Cron jobs run 24/7 despite `active_hours` config* — Default `end = "24:00"` silently breaks, causing unexpected agent executions. ([#1262](https://github.com/moltis-org/moltis/pull/1262))
- **Use case:** *Operators need per-agent sandbox isolation* — Request for bind mounts, UID/GID, and forced sandbox per agent preset. ([#1272](https://github.com/moltis-org/moltis/pull/1272))
- **Feature ask:** *Predictable web-search costs* — Prepaid hop model to bound external API spend per agent run. ([#1274](https://github.com/moltis-org/moltis/issues/1274))

**Sentiment:** Neutral-to-constructive. No complaints about core functionality; issues are infrastructure/ops focused.

---

## 8. Backlog Watch

| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#1273](https://github.com/moltis-org/moltis/issues/1273) | 1 day | **Release-blocking for Nix ecosystem.** Tag `20260913.02` is effectively unbuildable on Nix. Maintainer should update `flake.nix` with `cargoLock.outputHashes` for `wacore-0.6.0`, `zvec-rust-0.6.0` and ensure web assets are fetched/vendored. |
| [#1262](https://github.com/moltis-org/moltis/pull/1262) | 11 days (updated today) | **Stability fix sitting idle.** Cron misbehavior affects all users on default config. Needs review/merge to cut a patch. |
| [#1272](https://github.com/moltis-org/moltis/pull/1272) | 2 days | **Security-relevant feature.** Large surface area (parsing, config, runtime); deserves thorough review but no comments yet. Assign a sandbox-savvy reviewer. |

---

> **Next digest:** 2026-09-19 — will track whether #1262/#1272 merge, #1273 gets a fix PR, and if #1274 gathers discussion.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-09-18

## 1. Today's Overview
CoPaw (QwenPaw) shows **high development velocity with concerning stability signals**. The project released v2.2.2-beta.1 while simultaneously fielding 12 active issues and 19 open PRs in 24 hours. Critical bugs dominate today's activity: plugin event-loop freezing, session-sync corruption, context-window misconfiguration, and desktop startup races. The merge rate (16 PRs closed/merged) indicates rapid iteration, but the volume of P0-style bugs suggests the 2.2.x branch has regressions needing urgent attention before a stable release.

## 2. Releases
### v2.2.2-beta.1 (Beta)
**Release page**: https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.2-beta.1  
**Changes**:
- `feat(console)`: Improved grouped chat history ([#7665](https://github.com/agentscope-ai/QwenPaw/pull/7665))
- `feat(memory)`: Unified ReMe slash commands ([#7444](https://github.com/agentscope-ai/QwenPaw/pull/7444))
- Version bump to 2.2.2b1

**Note**: A follow-up PR [#7844](https://github.com/agentscope-ai/QwenPaw/pull/7844) bumps to `v2.2.2b2` same-day, indicating rapid beta iteration. No breaking changes documented; migration notes absent.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary | Link |
|----|------|---------|------|
| #7844 | Chore | Version bump to v2.2.2b2 | [#7844](https://github.com/agentscope-ai/QwenPaw/pull/7844) |
| #7831 | Fix | Stream background tool output on demand (console) | [#7831](https://github.com/agentscope-ai/QwenPaw/pull/7831) |
| #7760 | Fix | Allow memory jobs to drain on shutdown (CLI) | [#7760](https://github.com/agentscope-ai/QwenPaw/pull/7760) |
| #7488 | Fix | Finalize PawApp stream resources exactly once | [#7488](https://github.com/agentscope-ai/QwenPaw/pull/7488) |
| #6353 | Feat | Per-job model overrides for cron jobs | [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353) |
| #7050 | Feat | Console picker for per-cron-job model override | [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) |
| #7637 | Feat | QwenPaw-Data app 0.3.0 (analytics workflow) | [#7637](https://github.com/agentscope-ai/QwenPaw/pull/7637) |

**Key advances**: Cron job model pinning (long-requested), background tool streaming UX, graceful shutdown for memory pipelines, and a major data-analytics sub-app.

## 4. Community Hot Topics
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | Bug | 10 | **SubAgent spawn consistently fails/times out** — blocks multi-agent workflows |
| [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | Bug | 4 | **Plugin sync I/O freezes entire instance** — no isolation/contract/monitoring |
| [#7810](https://github.com/agentscope-ai/QwenPaw/issues/7810) | Question | 3 | **Context-window limit ignored** — 131k setting → 271k actual, compaction not triggering |
| [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | Feat | 2 | **Agent-autonomous context management** — agent should control eviction timing |
| [#7827](https://github.com/agentscope-ai/QwenPaw/issues/7827) | Bug | 1 | **MCP streamable_http 500 handling broken** — DashScope store activation fails |

**Pattern**: Users are hitting **architectural limits** (event-loop sharing, context eviction opacity, subprocess isolation) rather than surface bugs. The subAgent failure (#7678) and plugin freeze (#7840) suggest the multi-agent/runtime substrate needs hardening.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR | Details |
|----------|-------|--------|--------|---------|
| **P0 — Data loss / freeze** | [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) Plugins share host event loop — sync call freezes all agents | Open | [#7842](https://github.com/agentscope-ai/QwenPaw/pull/7842) | Watchdog + isolation PR opened same-day; affects cloud & Docker |
| **P0 — Corruption** | [#7839](https://github.com/agentscope-ai/QwenPaw/issues/7839) Session-sync skips orphans + "database disk image malformed" on purge | Open | — | 86 orphaned files skipped; SQLite corruption blocks retention |
| **P0 — Core feature broken** | [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) SubAgent spawn always fails/times out | Open | — | 10 comments, no workaround; blocks agent delegation |
| **P1 — Config ignored** | [#7810](https://github.com/agentscope-ai/QwenPaw/issues/7810) Context window 131k → 271k, compaction dead | Open | [#7832](https://github.com/agentscope-ai/QwenPaw/pull/7832) | PR makes override explicit; root cause = 5-level precedence chain |
| **P1 — Desktop UX** | [#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) Console loads before backend ready — blank model/plugin panels | Open | — | Race on startup; manual refresh required |
| **P1 — Silent data mismatch** | [#7847](https://github.com/agentscope-ai/QwenPaw/issues/7847) Literal `%` in filenames sends wrong file | Open | [#7848](https://github.com/agentscope-ai/QwenPaw/pull/7848) | Fix PR ready; URL escaping boundary issue |
| **P2 — Memory leak** | [#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835) Auto-memory-recall payload leaks to non-console channels | Open (PR) | [#7835](https://github.com/agentscope-ai/QwenPaw/pull/7835) | Synthetic tool trace pollutes outbound channels |
| **P2 — Eviction correctness** | [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) Scroll eviction drops bracketing user turns | Open | — | Live window loses request; history.db retains it |
| **P2 — Tool missing** | [#7838](https://github.com/agentscope-ai/QwenPaw/issues/7838) `recall_history_python` not registered on kernel < 5.13 | Open | — | Sandfallback silent; advanced recall unavailable |

**Fix coverage**: 4/9 critical bugs have PRs opened today (#7842, #7832, #7848, #7835) — good response speed.

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for v2.2.2 / v2.3 | Rationale |
|---------|----------|------------------------------|-----------|
| Agent-autonomous context management (eviction hooks) | [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | 🟡 v2.3 | Architectural; needs protocol design |
| OS desktop mode: register custom apps | [#7830](https://github.com/agentscope-ai/QwenPaw/issues/7830) | 🟢 v2.2.2+ | UI extension point; low risk |
| Scroll-back pagination for compacted chats | [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | 🟢 v2.2.2 | PR open, UX gap for long sessions |
| Plugin clean unload / rollback-safe hot reload | [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | 🟡 v2.3 | Large refactor; reduces workspace rebuilds |
| Per-cron-job model override (backend + UI) | [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353), [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | ✅ Merged | **Delivered today** — major workflow unblock |
| AgentScope Platform as built-in provider | [#7843](https://github.com/agentscope-ai/QwenPaw/pull/7843) | 🟢 v2.2.2 | PR open; strategic integration |

**Strongest signals**: Plugin lifecycle hardening (#7565, #7842), context eviction control (#7733), and first-party platform integration (#7843).

## 7. User Feedback Summary
**Pain points** (from issues):
- **"SubAgent never works"** — multiple timeouts, no diagnostics ([#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678))
- **"Whole app freezes for 40s when plugin does sync I/O"** — no isolation, no monitoring ([#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840))
- **"Context limit setting is ignored; compaction never triggers"** — 271k vs 131k configured ([#7810](https://github.com/agentscope-ai/QwenPaw/issues/7810))
- **"Desktop shows blank panels on startup"** — race condition, manual refresh needed ([#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841))
- **"Session sync corrupts DB; 86 orphan files skipped"** — data integrity fear ([#7839](https://github.com/agentscope-ai/QwenPaw/issues/7839))

**Positive signals**:
- Cron job model override delivered after long request ([#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) → #6353/#7050)
- QwenPaw-Data 0.3.0 brings analytics workflow ([#7637](https://github.com/agentscope-ai/QwenPaw/pull/7637))
- First-time contributors fixing file-escape bug (#7848) and plugin issues

**Sentiment**: **Frustrated but engaged** — power users filing detailed bugs with logs, but core multi-agent/runtime reliability is eroding trust.

## 7. Backlog Watch (Stalled / Needs Maintainer Attention)
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) SubAgent spawn failures | 7 days | **Blocks core multi-agent feature**; 10 comments, no triage label, no fix PR | 🔴 Critical — needs root-cause investigation |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) Plugin unload/hot-reload | 14 days | Large refactor; reduces workspace rebuilds; enables safer plugin ecosystem | 🟡 Stalled — needs review bandwidth |
| [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) Scroll-back pagination | 14 days | UX gap for compacted sessions; first-time contributor | 🟡 Stalled — needs maintainer review |
| [#7639](https://github.com/agentscope-ai/QwenPaw/pull/7639) Scroll integrity scan perf | 10 days | Avoids repeated `PRAGMA quick_check`; performance fix | 🟡 Stalled — needs benchmark validation |
| [#7685](https://github.com/agentscope-ai/QwenPaw/pull/7685) Feishu collapsible reasoning | 7 days | UX for long thinking traces; prior attempt #7591 failed | 🟡 Stalled — needs design sign-off |

**Recommendation**: Prioritize #7678 (subAgent) and #7840 (plugin freeze) for immediate engineering focus — they undermine the agent-platform value proposition. Assign dedicated reviewers to #7565 and #7542 to unblock contributor momentum.

---

*Data sourced from GitHub API (agentscope-ai/QwenPaw) for 2026-09-18. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-18

---

## 1. Today's Overview
ZeptoClaw saw a concentrated burst of maintenance and security work over the past 24 hours, with **12 total items updated** (5 issues, 7 PRs). The project is in a **refactoring/hardening phase**: GitHub Actions CI has been deliberately removed (user-driven), a critical Rustls vulnerability (RUSTSEC-2026-0285) is being patched to 0.23.45, and the CI pipeline is gaining an aarch64 binary-size gate (7 MB) to protect the "robot moat" target. Two feature PRs are open — tool-schema sanitization for local/strict backends and rate-limiting on the panel login endpoint — signaling continued investment in edge runtime robustness and security. No new release was cut today.

---

## 2. Releases
**None** — no new versions published in the last 24 h.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Status | Key Change |
|----|-------|--------|------------|
| [#700](https://github.com/qhkm/zeptoclaw/pull/700) | chore(ci): remove GitHub Actions CI checks | **Closed** | Deleted CI, E2E, and PR Hygiene workflows; removed README badge; updated contributor guidance to require local validation. |
| [#692](https://github.com/qhkm/zeptoclaw/pull/692) | fix(deps): upgrade Rustls to 0.23.45 for RUSTSEC-2026-0285 | **Closed** | Patches the advisory; raises minimum version; updates TLS deps & documentation. |
| [#684](https://github.com/qhkm/zeptoclaw/pull/684) | chore(deps): bump cargo-deny-action 2.0.18 → 2.1.1 | **Closed** | Dependency hygiene (now moot with CI removal). |
| [#682](https://github.com/qhkm/zeptoclaw/pull/682) | chore(deps): bump install-action 2.79.7 → 2.87.6 | **Closed** | Dependency hygiene (now moot with CI removal). |
| [#683](https://github.com/qhkm/zeptoclaw/pull/683) | fix(deps): bump rust-cache 2.9.1 → 2.9.2 | **Closed** | Dependency hygiene (now moot with CI removal). |

**Net effect:** The repository has **fully migrated off GitHub Actions** for PR validation; security baseline is now Rustls ≥ 0.23.45.

---

## 4. Community Hot Topics
No issue or PR in the last 24 h has comments or reactions (>0). The most structurally significant discussions are:

| Item | Link | Why It Matters |
|------|------|----------------|
| **#699 / #700** | [Issue](https://github.com/qhkm/zeptoclaw/issues/699) • [PR](https://github.com/qhkm/zeptoclaw/pull/700) | User-mandated CI removal — shifts validation burden to contributors; changes project governance model. |
| **#697 / #692** | [Issue](https://github.com/qhkm/zeptoclaw/issues/697) • [PR](https://github.com/qhkm/zeptoclaw/pull/692) | Critical supply-chain vulnerability blocking all dependabot PRs; resolution unblocks dependency updates. |
| **#698 / #701** | [Issue](https://github.com/qhkm/zeptoclaw/issues/698) • [PR](https://github.com/qhkm/zeptoclaw/pull/701) | Tool-schema sanitization & argument coercion — core work to make ZeptoClaw reliable on weak/local models. |
| **#629** | [Issue](https://github.com/qhkm/zeptoclaw/issues/629) | aarch64 binary-size gate (7 MB) — strategic constraint for edge/robot deployment. |

---

## 5. Bugs & Stability
| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **Critical** | [#697](https://github.com/qhkm/zeptoclaw/issues/697) | Rustls 0.23.39 (and 0.23.43) vulnerable to RUSTSEC-2026-0285; fails `cargo deny` & security audit. | [#692](https://github.com/qhkm/zeptoclaw/pull/692) ✅ merged |
| **Medium** | [#702](https://github.com/qhkm/zeptoclaw/pull/702) | Panel password-login endpoint allowed unlimited attempts (only bcrypt cost as throttle). | **Open** — rate-limits to 5 attempts / 60 s per IP with 429 + `Retry-After`. |

No crashes or regressions reported today.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Tool-schema sanitization & argument coercion** for strict/local backends (Ollama, etc.) | [#698](https://github.com/qhkm/zeptoclaw/issues/698) / [#701](https://github.com/qhkm/zeptoclaw/pull/701) | **High** — PR #701 is complete, awaiting review/merge. |
| **aarch64 binary-size gate (7 MB)** | [#629](https://github.com/qhkm/zeptoclaw/issues/629) | **High** — strategic moat; CI removal means gate must be enforced locally or via new pipeline. |
| **Panel login rate-limiting** | [#702](https://github.com/qhkm/zeptoclaw/pull/702) | **High** — security hardening, ready to merge. |
| **Compile optional integration features in PR CI** | [#545](https://github.com/qhkm/zeptoclaw/issues/545) | **Low/Medium** — CI removed; would need local pre-merge script or replacement CI. |

---

## 7. User Feedback Summary
- **Explicit CI removal request** (#699): A user (likely the maintainer or a key stakeholder) demanded zero GitHub Actions checks, favoring **local validation only**. This is a strong signal that the project values **zero-cloud-dependency workflows** and contributor autonomy over automated gatekeeping.
- **Security sensitivity**: Immediate patching of Rustls advisory shows low tolerance for supply-chain risk.
- **Edge/runtime focus**: Binary-size gate (aarch64) and tool-schema work confirm the product targets **resource-constrained, local-model environments** (Pi, Jetson, Apple Silicon).

---

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#545](https://github.com/qhkm/zeptoclaw/issues/545) | ~5 months | Closed (but unresolved) | Optional integration features still not compiled in any CI (now that CI is gone, this becomes a **local pre-merge checklist** item). |
| [#629](https://github.com/qhkm/zeptoclaw/issues/629) | ~3.5 months | Closed | aarch64 size gate defined but **no enforcement mechanism** remains after CI removal — needs a `just`/`make`/`cargo-make` target or pre-commit hook. |
| [#701](https://github.com/qhkm/zeptoclaw/pull/701) | 1 day | Closed | Tool-schema sanitization PR closed (likely merged or superseded) — verify it landed on `main`. |
| [#702](https://github.com/qhkm/zeptoclaw/pull/702) | <1 day | **Open** | Rate-limiting PR ready; should be reviewed/merged quickly to close the auth brute-force window. |

---

**Bottom line:** ZeptoClaw is aggressively shedding cloud CI in favor of local-first validation, while hardening its security posture (Rustls, login throttling) and locking down the binary-size constraint that enables its edge/robot deployment story. The next release will likely bundle the tool-schema sanitization, aarch64 size enforcement (via local scripts), and the login rate-limiter.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-18

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 PRs and 8 issues updated in the last 24 hours. The project is in active feature development and security hardening phase — no new releases today, but multiple large XL-sized PRs are in progress targeting runtime architecture, provider integrations, security policies, and multimodal handling. The closed PR #10664 (gateway health endpoint sanitization) and closed issue #9882 (image marker validation bypass) indicate steady progress on security hardening. Several PRs carry `needs-maintainer-review` and `needs-author-action` labels, suggesting review bandwidth may be a bottleneck.

---

## 2. Releases

**No new releases today.** The project appears to be in a pre-release accumulation phase with multiple large features and fixes staged in open PRs.

---

## 3. Project Progress — Merged/Closed Today

| PR / Issue | Title | Area | Status |
|------------|-------|------|--------|
| [#10664](https://github.com/zeroclaw-labs/zeroclaw/pull/10664) | fix(gateway): sanitize public health errors | Gateway, Security | **Closed/Merged** — Health endpoint no longer leaks internal diagnostic snapshots; projects a safe public view. |
| [#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882) | Image markers bypass content validation on run_model_query direct-dispatch seam | Provider: Anthropic, Security | **Closed** — Split from #9819; the direct-dispatch path now receives proper multimodal normalization. |

*Only 4 PRs total were merged/closed in the last 24h — the majority of activity is on open, in-review PRs.*

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Type | Comments | Labels / Signals | Core Need |
|------|------|----------|------------------|-----------|
| [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | Issue (RFC) | 11 | `enhancement`, `runtime`, `domain:architecture`, `type:rfc`, `risk:high`, `priority:p2` | **Append-only session event history & deterministic replay** — Replace mutable conversation persistence with an event-sourced model enabling derived agent streams, time-travel debugging, and auditability. High architectural impact. |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | Issue | 8 | `enhancement`, `skills`, `domain:security`, `status:accepted`, `status:blocked`, `status:parking-lot`, `risk:high` | **Install skills from `.well-known` agent-skills discovery indexes** — Standardized skill distribution. Blocked on upstream spec finalization (agentskills/agentskills#254). |
| [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) | Bug | 3 | `bug`, `provider`, `runtime`, `tool`, `domain:security`, `domain:architecture`, `priority:p1`, `status:blocked`, `risk:high` | **Image markers in tool results promoted to attachments without provenance** — Multimodal carrier scan strips literal source/log text, breaking audit trails and potentially leaking data. |
| [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) | Bug | 2 | `bug`, `agent`, `config`, `runtime`, `tool:delegate`, `security:policy`, `priority:p1`, `status:in-progress`, `risk:high` | **Fail-closed approval enforcement for bounded child loops** — Child loops inherit tools without approval manager; `approval: None` treated as `NotRequired`, allowing prompt-required tools to execute unapproved. |
| [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) | PR | — (comment count not shown) | `bug`, `dependencies`, `agent`, `provider`, `runtime`, `provider:openai`, `provider:anthropic`, `provider:gemini`, `domain:security`, `risk:high`, `size:XL` | **Pixel-level image validation** — Full decode validation to prevent corrupt images from failing provider requests. XL effort, principal contributor. |

> **Pattern:** Security and architecture dominate the hottest threads — multimodal provenance, approval policy enforcement, and event-sourced session redesign.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Summary | Fix PR Exists? |
|----------|-------|---------|----------------|
| **P1 / S2** | [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) | Image markers in tool-result text promoted to attachments without provenance; literal source/log text stripped. Affects provider multimodal path. | ❌ No PR yet (created 2026-09-16, updated today) |
| **P1** | [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) | Bounded child loops inherit tools without approval manager; fail-open on `approval: None`. | ❌ No PR yet (follow-up from #10601, `status:in-progress`) |
| **P1** | [#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882) | `run_model_query` direct-dispatch seam bypasses multimodal normalization (image markers only). | ✅ Fixed via #9819 (pixel validation) + this issue closed |
| **Medium** | [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) | Seam sanitizers (`sanitize_image_markers`, `sanitize_audio_markers`) rewrite signed reasoning inside assistant tool-call envelope; Anthropic rejects replayed thinking. | ✅ **PR #10953** opened today — preserves signed reasoning |
| **Medium** | [#10928](https://github.com/zeroclaw-labs/zeroclaw/pull/10928) | Windows task owner recognition: definite process exit check needed before treating `sysinfo` entry as live. | ✅ PR #10928 (open, created yesterday) |

> **Notable:** Two P1 bugs opened in the last 3 days (#10908, #10643) with no fix PRs yet. The multimodal sanitizer regression (#10952) got a same-day fix PR (#10953).

---

## 6. Feature Requests & Roadmap Signals

| Feature / RFC | Status | Likelihood for Next Release | Rationale |
|---------------|--------|-----------------------------|-----------|
| **Append-only session event history & deterministic replay** ([#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)) | RFC, `needs-maintainer-review` | **Medium** — High architectural impact, requires consensus; XL effort. |
| **Multiple models per provider profile** ([#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)) | Open PR, `needs-author-action`, `size:XL` | **High** — Principal contributor, addresses common config pain point (single cred + endpoint, multiple models). |
| **Shell V1 permission policy (RFC #7155 Phase 0+1)** ([#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610)) | Open PR, `needs-author-action`, `risk:high`, `size:XL` | **High** — Accepted RFC, implemented in 5 commits, security-critical. |
| **Persistent session prompt attachments** ([#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407)) | Open PR, `needs-author-action`, `size:XL` | **Medium-High** — SQLite-backed, survives daemon restart, 4-attachment limit. |
| **Context compaction anchored to model window ratio** ([#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)) | Open PR, `needs-author-action`, `size:XL` | **Medium** — Replaces fixed 32k token budget with dynamic ratio; UX improvement. |
| **Execution-tree iteration budgets** ([#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351)) | Open PR, `needs-maintainer-review`, `size:XL` | **Medium** — Aggregate iteration ceiling for agent execution trees; prevents runaway loops. |
| **Agent lifecycle mutation coordination** ([#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621)) | Open PR, `needs-maintainer-review`, `size:XL` | **Medium** — Unified live-config authority for daemon/gateway/channels/CLI. |
| **`.well-known` agent-skills discovery** ([#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)) | Accepted but `blocked`/`parking-lot` | **Low (near-term)** — Blocked on external spec standardization. |

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Source | Pain Point / Use Case | Sentiment |
|--------|----------------------|-----------|
| [#10709](https://github.com/zeroclaw-labs/zeroclaw/issues/10709) (Docs) | Missing documentation for Astra setup with API-key and Codex subscription providers; current guide explains settings individually but not end-to-end. | 😕 **Frustration** — Configuration gap for paid/provider-specific flows. |
| [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) (ACP) | Interrupted turns lose progress — need checkpoint/recovery for ACP prompts, assistant text, tool calls/results. | 😕 **Reliability** — Critical for long-running coding agents. |
| [#9453](https://github.com/zeroclaw-labs/zeroclaw/pull/9453) | Context meter blank for local OpenAI-compatible providers (llama.cpp) — token counts omitted by provider. | 😕 **Observability gap** — Users on local models lack usage visibility. |
| [#10811](https://github.com/zeroclaw-labs/zeroclaw/pull/10811) | PowerShell analysis cache not preserved on Windows — slows command discovery. | 😕 **Perf/UX** — Windows developer experience. |
| [#10239](https://github.com/zeroclaw-labs/zeroclaw/pull/10239) | `interrupt_on_new_message` ignored when channel alias ≠ `default`. | 😕 **Config silent failure** — Operator-named aliases not respected. |

> **Theme:** Configuration ergonomics, Windows/local-model support, and interruption resilience are recurring user friction points.

---

## 8. Backlog Watch — Stale High-Value Items Needing Maintainer Attention

| Item | Age | Labels | Why It Matters |
|------|-----|--------|----------------|
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | ~6 months | `status:accepted`, `status:blocked`, `status:parking-lot`, `risk:high` | Skill ecosystem standardization — unblocked by external spec. Park but track. |
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | ~2 months | `needs-maintainer-review`, `risk:high`, `size:XL`, `topic:zerocode` | Live provider identity on usage events + context window resolution. Core observability. |
| [#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) | ~1 month | `needs-maintainer-review`, `risk:high`, `size:XL` | Log rotation by entry-count + multi-segment queries. Operational necessity. |
| [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | ~3 weeks | `needs-maintainer-review`, `size:XL` | Execution-tree iteration budgets — prevents runaway agent loops. Safety feature. |
| [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | ~2 weeks | `needs-maintainer-review`, `risk:high`, `size:XL` | Unified agent lifecycle config authority — architectural consolidation. |
| [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) | ~1 month | `needs-maintainer-review`, `risk:high`, `risk:manual`, `topic:zerocode` | ACP interrupted turn persistence — critical for coding agent reliability. |
| [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) | ~1.5 months | `needs-maintainer-review`, `risk:high`, `size:XL` | Pixel-level image validation — security hardening for multimodal. |
| [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | ~1.5 months | `needs-author-action`, `follow-up`, `size:XL` | Dynamic context compaction — UX improvement, but author action needed. |

> **Maintainer bandwidth alert:** 8 XL-sized PRs await review/action. Consider triaging by risk (security > reliability > UX) and assigning dedicated reviewers.

---

## Health Indicators Summary

| Metric | Signal |
|--------|--------|
| **Velocity** | 🟢 High (50 PR updates/24h) |
| **Release Cadence** | 🟡 No release today; accumulation phase |
| **Security Focus** | 🟢 Strong (multiple P1 fixes, policy RFC implementation) |
| **Review Throughput** | 🟡 Potential bottleneck (8 XL PRs awaiting maintainer) |
| **Bug Regression Rate** | 🟡 2 new P1 bugs in 3 days; 1 same-day fix |
| **Community Engagement** | 🟢 Active RFC/discussion on architecture (#10526) |
| **Documentation Gaps** | 🟡 Visible (Astra, ACP, local providers) |

---

*Digest generated from GitHub API data for zeroclaw-labs/zeroclaw on 2026-09-18. All links point to live GitHub items.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*