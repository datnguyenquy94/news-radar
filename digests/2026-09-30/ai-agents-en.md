# OpenClaw Ecosystem Digest 2026-09-30

> Issues: 147 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-30 05:13 UTC

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

# OpenClaw Project Digest — 2026-09-30

## 1. Today's Overview

OpenClaw shows **very high velocity** with 147 issues and 500 PRs updated in the last 24 hours. The project released **v2026.9.7** today, focused on update safety (database backups before migrations, consistent snapshots, rollback on cleanup failure). Of the 500 PRs, 179 were merged/closed — indicating strong throughput. However, 321 PRs remain open and 58 issues are still active, suggesting a growing backlog. Critical stability issues persist: memory sawtooth in Gateway (#159596), zombie process leaks (#97616), and embedded prompt cache breakage (#102175) — all P1/P2 with diamond-lobster (🦞) severity ratings.

## 2. Releases

### v2026.9.7 — openclaw 2026.9.7
**Released:** 2026-09-30 | [Release Notes](https://github.com/openclaw/openclaw/releases/tag/v2026.9.7)

**Highlights:**
- **Update safety overhaul**: Updates now back up every state and agent database before migrations and restore them on rollback
- **Consistent snapshots**: Taken while Gateway keeps writing (no downtime)
- **Schema-change guard**: Stops before schema changes when snapshot cleanup fails
- **Fixes**: #157846 and #157603

**Migration notes:** No breaking changes reported. This is a safety/hardening release — operators should update to gain the new backup/rollback guarantees.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#161629](https://github.com/openclaw/openclaw/pull/161629) | CI/install | Fix install smoke reruns failing payload verification after partial retry | Merged |
| [#161627](https://github.com/openclaw/openclaw/pull/161627) | iOS | Fix pasting image into chat composer doing nothing | Merged |
| [#161630](https://github.com/openclaw/openclaw/pull/161630) | Gateway/test | Keep startup sweep out of manual saved-batch wakes (fixes flaky test) | Merged |
| [#161623](https://github.com/openclaw/openclaw/pull/161623) | Test | Remove duplicate agent event ordering test case | Merged |
| [#161624](https://github.com/openclaw/openclaw/pull/161624) | Net | Refactor: use native fixed proxy agent construction | Merged |
| [#161631](https://github.com/openclaw/openclaw/pull/161631) | Gateway | Remove dead code/comment slop in placement | Merged |
| [#161259](https://github.com/openclaw/openclaw/pull/161259) | Web UI | Fix: Control UI chat composer sends draft on IME conversion-confirm in Safari | Merged |
| [#161310](https://github.com/openclaw/openclaw/pull/161310) | Gateway | Fix: canceled replies remain pending during thinking-catalog waits | Merged |
| [#161278](https://github.com/openclaw/openclaw/pull/161278) | Diagnostics/OTel | Fix: cron turns split into two root traces | Merged |
| [#160523](https://github.com/openclaw/openclaw/pull/160523) | Plugin: mistral | Fix: data/settings upgrade stuck; `doctor --fix` cannot complete | Merged |
| [#157693](https://github.com/openclaw/openclaw/pull/157693) | Gateway | Fix: keep failed idle DB cleanup from blocking every agent | Merged |
| [#158447](https://github.com/openclaw/openclaw/pull/158447) | Updater | Fix: identify config-read child by env, not import query (stops unbounded subprocess chain) | Merged |
| [#100982](https://github.com/openclaw/openclaw/pull/100982) | Compaction | Fix: delivery-mirror usage poisons tokensBefore→null; sessions never truncate | Merged |
| [#146216](https://github.com/openclaw/openclaw/pull/146216) | Agents | Fix: recover legacy default via materialized systemAgent after explicit-roster persistence | Merged |
| [#111660](https://github.com/openclaw/openclaw/pull/111660) | Plugin SDK | Fix: `simple-completion-runtime` unresolvable for external plugins | Merged |
| [#112145](https://github.com/openclaw/openclaw/pull/112145) | Perf | Fix: high GC pressure from frequent string allocations in log redaction filter | Merged |

**Key themes:** CI reliability, iOS/web UI polish, Gateway stability (cleanup, subprocess management), plugin SDK fixes, and compaction correctness.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

### Top Issues by Comment Count

| Issue | Comments | 👍 | Severity | Core Problem |
|-------|----------|-----|----------|--------------|
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 20 | 1 | 🦞 P2 | **Embedded prompt cache breaks** across room-event, policy, and Responses boundaries — long-lived sessions lose provider prompt-cache reuse |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 16 | 1 | 🦪 P1 | **Zombie process leak** from hook/tool execution — `openclaw-hooks`, `bash`, `codex` children accumulate, causing runtime degradation |
| [#159596](https://github.com/openclaw/openclaw/issues/159596) | 11 | 2 | 🦪 P1 | **Gateway memory sawtooth** on 2026.9.6 — prepared-model-catalog worker grows to heap ceiling; ~200 critical memory-pressure events/day |
| [#118785](https://github.com/openclaw/openclaw/issues/118785) | 8 | 0 | 🌊 P2 | **QA proof tracking** for 23 container IDs + 31 external app SDK IDs |
| [#121729](https://github.com/openclaw/openclaw/issues/121729) | 8 | 0 | 🌊 P3 | **Feature**: Friendly daily spending allowances for background agents |

### Top PRs by Activity (Ready for Review)

| PR | Area | Size | Rating | Status |
|----|------|------|--------|--------|
| [#160442](https://github.com/openclaw/openclaw/pull/160442) | Perf(nodes): load only what worker turn needs | XL | 🦞 | 👀 Ready |
| [#161114](https://github.com/openclaw/openclaw/pull/161114) | Fix(subagents): wake requesters when children pause | XL | 🐚 | 👀 Ready |
| [#161583](https://github.com/openclaw/openclaw/pull/161583) | Feat(gateway): honor host lifetime & install ownership | XL | 🦐 | ⏳ Waiting on author |
| [#157679](https://github.com/openclaw/openclaw/pull/157679) | Feat(plugins): deployment-specific supervisor guidance | XL | 🦞 | 👀 Ready |
| [#161053](https://github.com/openclaw/openclaw/pull/161053) | Feat: react to prompts/replies with emoji in shared sessions | XL | 🦪 | 📣 Needs proof |

**Underlying needs:** Operators want **resource efficiency** (lazy loading, memory fixes), **multi-agent reliability** (subagent wakeups, spending controls), and **deployment flexibility** (plugin supervision, host lifetime). The emoji reactions PR (#161053) signals growing **collaborative/shared-session** usage.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical / P0
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#141791](https://github.com/openclaw/openclaw/issues/141791) | Empty legacy `auth_profile_store` blocks every request; dropping table prevents startup — **no valid state exists** | [#141791 linked](https://github.com/openclaw/openclaw/issues/141791) |
| [#158163](https://github.com/openclaw/openclaw/issues/158163) | Update safety fixes (included in v2026.9.7) | ✅ Released |

### 🟠 High / P1
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#159596](https://github.com/openclaw/openclaw/issues/159596) | Gateway memory sawtooth — prepared-model-catalog worker hits heap ceiling, 200+ critical events/day | ❌ No PR yet |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Zombie process leak from hook/tool execution — runtime degradation over time | ❌ No PR yet |
| [#108395](https://github.com/openclaw/openclaw/issues/108395) | Assistant generates fake "Human: [timestamp]" messages enabling self-authorization of live actions | ❌ No PR yet |
| [#157575](https://github.com/openclaw/openclaw/issues/157575) | Managed Gateway heap flag overrides per-worker old-space limits | ❌ No PR yet |
| [#161310](https://github.com/openclaw/openclaw/issues/161310) | Canceled replies remain pending during thinking-catalog waits | ✅ [#161310](https://github.com/openclaw/openclaw/pull/161310) merged |

### 🟡 Medium / P2
| Issue | Summary | Fix PR? |
|-------|---------|---------|
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | Embedded prompt cache breaks across boundaries (🦞 diamond lobster) | ❌ No PR yet |
| [#154834](https://github.com/openclaw/openclaw/issues/154834) | Failed subagent delivery recurs in every turn's runtime context | [#154834 linked](https://github.com/openclaw/openclaw/issues/154834) |
| [#161610](https://github.com/openclaw/openclaw/issues/161610) | Codex diagnostic-log warnings replay across later chat turns | ❌ No PR yet |
| [#93518](https://github.com/openclaw/openclaw/issues/93518) | `exec host=node` denied by Companion App policy despite correct config | ❌ No PR yet |
| [#146969](https://github.com/openclaw/openclaw/issues/146969) | `secrets configure` cannot migrate shared-store auth profiles | ❌ No PR yet |

### 🟢 Lower / P3
| Issue | Summary |
|-------|---------|
| [#70266](https://github.com/openclaw/openclaw/issues/70266) | Feature: Use assistant avatar in macOS Talk Mode overlay |
| [#136431](https://github.com/openclaw/openclaw/issues/136431) | Feature: Per-trigger overall turn timeout |
| [#136048](https://github.com/openclaw/openclaw/issues/136048) | Feature: Allow registering non-Git directories as projects |

---

## 6. Feature Requests & Roadmap Signals

| Feature Request | Issue | Signals | Likelihood Next Version |
|-----------------|-------|---------|-------------------------|
| **Daily spending allowances** for background agents | [#121729](https://github.com/openclaw/openclaw/issues/121729) | P3, 8 comments, "consumer-friendly" — cost control for unattended agents | Medium (needs product decision) |
| **Per-trigger turn timeouts** (interactive vs cron) | [#136431](https://github.com/openclaw/openclaw/issues/136431) | P3, 4 comments, clear UX need: fast failover for chat, long for cron | Medium |
| **Non-Git directory project registration** | [#136048](https://github.com/openclaw/openclaw/issues/136048) | P3, 4 comments, aligns with project-identity decoupling | Medium |
| **WhatsApp `/new` & `/reset` for admitted users** | [#143003](https://github.com/openclaw/openclaw/issues/143003) | P2, 4 comments, security-review needed — shared-session autonomy | Low (security review pending) |
| **Drag-to-resize Control UI chat composer** | [#113270](https://github.com/openclaw/openclaw/issues/113270) | P3, 4 comments, UX polish for long messages | High (small scope, ready PR likely) |
| **Emoji reactions in shared sessions** | [#161053](https://github.com/openclaw/openclaw/pull/161053) | XL PR, needs proof — strong collaborative workflow signal | High (PR open, needs proof) |
| **Trusted Discord admin role** | [#140765](https://github.com/openclaw/openclaw/issues/140765) | P2, 4 comments, Discord-first operations use case | Low (needs security review) |

**Roadmap prediction:** Next version (2026.9.x) will likely include: emoji reactions (#161053), lazy node loading (#160442), subagent wake fixes (#161114), and continued memory/zombie fixes. Spending allowances and per-trigger timeouts need product decisions first.

---

## 7. User Feedback Summary

### Pain Points (from issues)
| Area | User Quote / Signal | Frequency |
|------|---------------------|-----------|
| **Memory/performance** | "Gateway exhibits repeating memory sawtooth... 200 critical memory-pressure events/day" (#159596) | High |
| **Process leaks** | "Zombie accumulation... causing runtime degradation" (#97616) | High |
| **Prompt cache** | "Long-lived embedded sessions can lose provider prompt-cache reuse" (#102175) | High |
| **Auth fragility** | "Empty legacy auth_profile_store blocks every request; dropping table stops gateway" (#141791) | Critical |
| **Channel leaks** | "Internal runtime context block leaking raw into visible Telegram messages" (#136471, #134240, #141012) | Recurring regression |
| **Mobile UX** | "Pasting image into chat composer does nothing" (iOS, #161626), "IME conversion confirms submit in Safari" (#161259) | Medium |
| **Cost control** | "Leave agents running without worrying about unexpected costs" (#121729) | Emerging |
| **Plugin reliability** | "Mistral plugin data/settings upgrade stays unfinished; doctor --fix cannot complete" (#160523) | Medium |

### Positive Signals
- **v2026.9.7 update safety** addresses a major operator fear (failed migrations = data loss)
- **Lazy node loading** (#160442) directly addresses "worker processes reach admission sooner and use less memory"
- **Subagent wake fix** (#161114) unblocks multi-agent workflows
- **Emoji reactions** (#161053) shows investment in collaborative/shared-session UX

---

## 8. Backlog Watch (Stale/

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-09-30 | **Projects Analyzed:** 12 (11 active, 1 inactive)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bifurcated maturity**: a top tier of 5 projects (OpenClaw, NanoBot, Hermes, CoPaw, ZeroClaw) operating at **high velocity** (30–500 PRs/day) with production-grade concerns (update safety, multi-agent reliability, security boundaries), while a second tier (IronClaw, NanoClaw, PicoClaw, LobsterAI, NullClaw) focuses on **stabilization and platform-specific gaps** (Windows, arm64, Web UI). Only **IronClaw shipped a release today** (v1.4.1); OpenClaw released a safety patch (v2026.9.7). The landscape is converging on **three architectural battles**: runtime/gateway separation (ZeroClaw, OpenClaw), multi-channel parity (WhatsApp/Telegram/WeChat), and **cost-aware context management** (prompt caching, MCP schema budgeting, silent compaction). Community engagement remains **maintainer-driven** — external issue/PR comments are near zero across most repos.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Today | Health Score* |
|---------|--------------|-----------|-------------------|---------------|---------------|
| **OpenClaw** | 147 | 500 | 179 | ✅ v2026.9.7 | 🟡 High velocity, critical backlog |
| **ZeroClaw** | 12 | 50 | 5 | ❌ | 🟡 High velocity, S0 security bugs |
| **Hermes Agent** | 5 | 50 | 6 | ❌ | 🟠 Critical blockers (update, deps, leaks) |
| **CoPaw (QwenPaw)** | 9 | 33 | 18 | ❌ | 🟢 Strong throughput, high-sev bugs w/o fixes |
| **NanoBot** | 13 | 40 | 23 | ❌ | 🟢 Security/reliability fixes merged |
| **NanoClaw** | 2 closed | 16 | 7 | ❌ | 🟢 Stabilization, arm64/container fixes |
| **LobsterAI** | 10 | 11 | 11 | ❌ | 🟠 Critical data-corruption bugs stale 60+ days |
| **PicoClaw** | 6 | 5 | 0 | ❌ | 🟡 Web UI bottleneck, input lag 70 days |
| **IronClaw** | 0 | 3 | 1 | ✅ v1.4.1 | 🟢 Stable, RFC-driven roadmap |
| **NullClaw** | 1 | 1 | 1 | ❌ | 🟢 Low activity, maintenance mode |
| **Moltis** | 1 | 0 | 0 | ❌ | 🔴 Dormant, single feature request |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | ⚫ Inactive |

*Health Score: 🟢 Healthy iteration | 🟡 Caution (backlog/blockers) | 🟠 Critical issues | 🔴 Stalled | ⚫ Inactive

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Throughput:** 10× PR volume of nearest peer (500 vs 50); 179 merged in 24h demonstrates unmatched review/merge capacity
- **Update Safety Leadership:** v2026.9.7 introduces **database backup/rollback guarantees** — a production hardening pattern only NanoClaw (#3956) and ZeroClaw (#10995) are attempting
- **Multi-Agent Depth:** Subagent wake fixes (#161114), spending allowances (#121729), and prompt-cache reuse (#102175) address workflows others haven't modeled

**Technical Approach Differences:**
| Dimension | OpenClaw | Peer Convergence |
|-----------|----------|------------------|
| **Architecture** | Monolithic Gateway + agent DB | ZeroClaw/Hermes/NanoClaw: **Runtime/Gateway split** (RPC, Wasmtime) |
| **Plugin Model** | Built-in + SDK (simple-completion-runtime) | IronClaw/NanoClaw/ZeroClaw: **WASM/container isolation**, verified updates |
| **Channel Strategy** | Own gateway + adapters | NanoBot/CoPaw/ZeroClaw: **Per-channel policy** (Telegram topics, WhatsApp images) |
| **Context Mgmt** | Embedded prompt cache (broken #102175) | NanoBot/ZeroClaw: **Explicit schema budgeting**, silent compaction |

**Community Size:** Largest by contributor throughput (implied by PR volume), but **low external engagement** — issues/PRs show minimal 👍/comments, similar to all peers. OpenClaw operates as **internal-team-driven open source** like NanoClaw/ZeroClaw/IronClaw.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Update/Rollback Safety** | OpenClaw (shipped), NanoClaw (#3956), ZeroClaw (#10995), LobsterAI (#2707) | Atomic DB snapshots, stop live host on rollback, plugin update CLI |
| **Multi-Agent Reliability** | OpenClaw (#161114, #154834), ZeroClaw (session ownership), Hermes (desktop session races), CoPaw (TaskTracker zombies) | Subagent wakeups, session isolation, task-count accuracy, spending controls |
| **Channel Media Parity** | ZeroClaw (#10975 WhatsApp), NanoBot (Telegram topics #5972), Hermes (multi-Weixin), PicoClaw (Web UI queue) | Image download/save, per-topic policy, vision model integration, queue visibility |
| **Context-Cost Control** | NanoBot (#5298 MCP schemas), OpenClaw (#102175 prompt cache), ZeroClaw (streaming guard), CoPaw (inline media bounds) | Schema filtering/summarization, provider cache reuse, per-request media limits |
| **Security Boundaries** | ZeroClaw (S0 session ownership), NanoBot (#5564 path traversal), IronClaw (Wasmtime), CoPaw (tool output capability check) | Plugin payload integrity, principal-scoped tools, supply-chain hardening (pinned actions) |
| **Platform Gaps** | NanoClaw (arm64 Iron Proxy), LobsterAI (PS 5.1, encoding), Hermes (ruamel dep), CoPaw (FD_SETSIZE) | Native arm64 images, configurable shells, bundled deps, poll() over select() |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | **Reference implementation** — full-stack agent platform | Platform operators, self-hosters | Monolithic Gateway, SQLite state, built-in plugin SDK |
| **ZeroClaw** | **Security-first runtime/gateway split** | Multi-tenant, compliance-sensitive | WASM plugins, RPC wire contract, capability-based auth |
| **NanoBot** | **Multi-channel bot framework** | Telegram/WeChat/WhatsApp operators | Per-channel policy, session persistence, subagent tasks |
| **Hermes Agent** | **Desktop-first personal assistant** | End-users (Windows/macOS/Linux) | Tauri desktop, Weixin multi-account, Portal billing integration |
| **IronClaw** | **Extensible skill/runtime platform** | Developers, automation engineers | WASM skills, BM25F+embedding tool ranking, edge worker RFC |
| **NanoClaw** | **Containerized agent hosting** | DGX/ARM/Cloud deployments | Iron Proxy, host/container lifecycle, HTTPS_PROXY support |
| **CoPaw** | **Creator/Console UX + provider resilience** | Power users, skill authors | ACP console, fallback cooldowns, community marketplace |
| **LobsterAI** | **Localized (CN) desktop + cowork** | Chinese-speaking knowledge workers | OpenClaw fork, Windows installer, Dream Diary, ad-supported |
| **PicoClaw** | **Lightweight Web UI** | Browser-first users | Go backend, React frontend, virtualization needed |
| **NullClaw** | **Minimal core + swappable memory** | Experimenters, MemCode integration | Pluggable memory engines, web search hardening |
| **Moltis** | **Goal-directed autonomy** | Early adopters of agentic loops | Ralph/autoGPT-style loop (proposed) |

---

## 6. Community Momentum & Maturity

**Tier 1: Rapid Iteration (High Velocity + Active Fix Flow)**
- **OpenClaw** — 500 PRs/day, but 321 open = growing backlog; critical P1s (memory, zombies) unfixed
- **ZeroClaw** — 50 PRs/day, stacked RFCs for v0.9.0 gateway separation; S0 bugs have active fix PRs
- **NanoBot** — 40 PRs/day, 23 merged; security/reliability fixes land fast (path traversal, Telegram watchdog)
- **CoPaw** — 33 PRs/day, 18 merged; Console redesign driving test alignment, but high-sev bugs lack fixes

**Tier 2: Stabilization Focus (Fixes > Features)**
- **NanoClaw** — 16 PRs, 7 merged; arm64, containers, logging, proxy — all hardening
- **IronClaw** — Stable release shipped; RFCs for scale/latency; low bug count
- **PicoClaw** — Web UI polish only; 4 PRs open for input lag, queue, ghost sessions, thinking indicator
- **LobsterAI** — 11 PRs merged in one day (stale cleanup + fresh fixes); but critical bugs stale 60+ days

**Tier 3: Low/No Momentum**
- **NullClaw** — 1 PR merged (version bump + fixes), 1 feature request
- **Moltis** — 1 issue, 0 PRs; dormant
- **ZeptoClaw** — Inactive

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Runtime/Gateway Separation is Standardizing** | ZeroClaw (v0.9.0), OpenClaw (Gateway focus), Hermes (daemon leaks), NanoClaw (host/container) | **Design for RPC boundaries now** — Wasmtime, capability auth, wire contracts are converging |
| **Multi-Channel = Multi-Policy** | NanoBot (Telegram topics), ZeroClaw (WhatsApp images), Hermes (multi-Weixin), CoPaw (Telegram fenced code) | **Per-channel policy engines** replace global config; forum topics, image handling, auth differ per transport |
| **Context Budgeting > Context Stuffing** | NanoBot (MCP schema filtering), OpenClaw (prompt cache), ZeroClaw (streaming guard), CoPaw (inline media bounds) | **Explicit token budgets per component** (tools, history, media) needed; silent compaction expected |
| **Update Safety = Table Stakes** | OpenClaw (v2026.9.7), NanoClaw (#3956), ZeroClaw (#10995), LobsterAI (#2707) | **Atomic rollback with DB snapshots** required for production; "hope it works" updates unacceptable |
| **Security Boundaries Moving Downstack** | ZeroClaw (S0 session ownership), NanoBot (path traversal), IronClaw (Wasmtime), CoPaw (tool capability check) | **Plugin/WASM isolation + principal-scoped tools** replacing trust-the-model assumptions |
| **Windows/ARM Are First-Class Blockers** | LobsterAI (PS 5.1, encoding), NanoClaw (arm64 Iron Proxy), Hermes (ruamel), CoPaw (NSIS, FD_SETSIZE) | **CI must cover Windows ARM + non-ASCII paths**; hardcoded shells/paths are technical debt |
| **Observability Gaps Erode Trust** | CoPaw (TaskTracker zombies), NanoBot (silent reindex drop), OpenClaw (canceled replies pending) | **Metrics must match reality** — dashboard vs API divergence, silent data loss, opaque errors are P0 |

---

**Bottom Line for Decision-Makers:** The ecosystem is **consolidating around three pillars** — **safe updates**, **secure multi-tenancy**, and **channel-aware context economics**. Projects investing in **runtime/gateway separation** (ZeroClaw, OpenClaw, NanoClaw) and **explicit capability-based security** (ZeroClaw, IronClaw, CoPaw) are best positioned for enterprise/compliance adoption. **OpenClaw remains the velocity leader** but must resolve its P1 stability debt to retain reference-status credibility. Developers should **design for RPC boundaries, per-channel policy, and token budgets** — these are no longer differentiators but baseline requirements.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-30

## 1. Today's Overview
NanoBot shows **high development velocity** with 40 pull requests updated in the last 24 hours (23 merged/closed, 17 open) and 13 issues updated (9 closed, 4 open). No new releases were published today. Activity spans security hardening, provider fallback reliability, Telegram channel policy granularity, session persistence refactoring, and subagent task orchestration. The project is actively addressing both long-standing bugs (Telegram polling hangs, tokenizer network dependency) and new feature requests (per-topic group policy, budget-visible MCP schemas, silent context compaction).

## 2. Releases
**No new releases today.** The last release data is not included in this snapshot.

## 3. Project Progress — Merged/Closed PRs (Selected)

| PR | Type | Summary | Link |
|----|------|---------|------|
| #5986 | Bug fix, test | Preserve `PATH` for argument-vector commands in `ExecTool`; add regression test for executable lookup and env isolation | [#5986](https://github.com/HKUDS/nanobot/pull/5986) |
| #5981 | Feature, fix, test | TUI `/goal` command now accepts goal requests during active turns; enters immediately, Tab waits | [#5981](https://github.com/HKUDS/nanobot/pull/5981) |
| #5633 | Security, bug fix, test | **Fix path traversal in session keys** — validate session IDs before file persistence (fixes #5564) | [#5633](https://github.com/HKUDS/nanobot/pull/5633) |
| #5349 | Bug fix, test | Fix timezone mismatch in token-usage settings tests (fixes #5348) | [#5349](https://github.com/HKUDS/nanobot/pull/5349) |
| #5344 | Bug fix, test | Warn on repeated identical tool calls instead of silently burning `max_iterations` (loop detection) | [#5344](https://github.com/HKUDS/nanobot/pull/5344) |
| #3720 | Bug fix | Cron reminders now stream with `stream_id` and `turn_end` via `AgentLoop._dispatch` (fixes #3718) | [#3720](https://github.com/HKUDS/nanobot/pull/3720) |
| #3662 | Enhancement | Avoid network loads during token estimation; use local `tiktoken` cache with char-based fallback (fixes #3647) | [#3662](https://github.com/HKUDS/nanobot/pull/3662) |
| #3627 | Bug fix | Add Telegram polling watchdog to recover from silent hangs (fixes #3626) | [#3627](https://github.com/HKUDS/nanobot/pull/3627) |
| #3127 | Bug fix | Fall back to short tool results when model executes tools but emits no final answer (fixes #3106) | [#3127](https://github.com/HKUDS/nanobot/pull/3127) |
| #2166 | Feature | PID lock file (`gateway.pid`) to prevent duplicate gateway instances (fixes #2084) | [#2166](https://github.com/HKUDS/nanobot/pull/2166) |
| #5982 | Bug fix, i18n | Correct 20 misleading Taiwanese WebUI strings to match English source and UI behavior | [#5982](https://github.com/HKUDS/nanobot/pull/5982) |
| #5968 | Bug fix, provider, test | Honor configured fallbacks on "insufficient credits" HTTP 400 errors (fixes #5967) | [#5968](https://github.com/HKUDS/nanobot/pull/5968) |

**Key advances**: Security hardening (session path validation, PID lock), reliability (Telegram watchdog, provider fallback on credit exhaustion, cron streaming IDs), developer experience (TUI `/goal`, token estimation offline, tool-loop warnings), and i18n polish.

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#3626](https://github.com/HKUDS/nanobot/issues/3626) | Issue (closed) | 4 | **Telegram long-polling silently hangs** — bot alive but stops receiving updates; fixed by watchdog in #3627 |
| [#5298](https://github.com/HKUDS/nanobot/issues/5298) | Issue (open) | 2 | **Budget model-visible MCP schemas** — large tool sets blow context; need schema filtering/summarization before sending to model |
| [#5900](https://github.com/HKUDS/nanobot/issues/5900) | Issue (open) | 1 | **Silent context compaction + reduce WeChat polling log verbosity** — users don't want channel notifications on idle compaction |
| [#5972](https://github.com/HKUDS/nanobot/issues/5972) | Issue (open) | 0 | **Per-chat / per-topic Telegram group policy** — single `groupPolicy` too coarse for forum topics; PR #5973/#5974 implements |
| [#5967](https://github.com/HKUDS/nanobot/issues/5967) | Issue (closed) | 0 | **Fallbacks skipped on "insufficient credits" (HTTP 400)** — fixed in #5968 by recognizing the error phrasing |

**Analysis**: The most discussed items are **operational reliability** (Telegram polling, provider fallbacks) and **context-cost control** (MCP schema budgeting, silent compaction). Users running bots in production hit silent failures that leave the process alive but non-functional — a critical ops blind spot.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR | Notes |
|----------|-------|--------|--------|-------|
| **High (Security)** | [#5564](https://github.com/HKUDS/nanobot/issues/5564) Path traversal via session ID (`../../etc/passwd`) | Closed | [#5633](https://github.com/HKUDS/nanobot/pull/5633) | Validation added at persistence chokepoint |
| **High (Reliability)** | [#3626](https://github.com/HKUDS/nanobot/issues/3626) Telegram long-polling silent hang | Closed | [#3627](https://github.com/HKUDS/nanobot/pull/3627) | Watchdog added; bot now recovers automatically |
| **High (Reliability)** | [#5967](https://github.com/HKUDS/nanobot/issues/5967) Fallbacks skipped on "insufficient credits" HTTP 400 | Closed | [#5968](https://github.com/HKUDS/nanobot/pull/5968) | Phrasing detection added to `_should_fallback()` |
| **Medium** | [#5348](https://github.com/HKUDS/nanobot/issues/5348) Token-usage tests fail 5h/day due to UTC vs configured timezone | Closed | [#5349](https://github.com/HKUDS/nanobot/pull/5349) | `record_token_usage()` now passes `timezone_name` |
| **Medium** | [#3718](https://github.com/HKUDS/nanobot/issues/3718) Cron reminders missing `stream_id` in WebSocket deltas | Closed | [#3720](https://github.com/HKUDS/nanobot/pull/3720) | Now routes through `AgentLoop._dispatch` |
| **Medium** | [#3106](https://github.com/HKUDS/nanobot/issues/3106) Agent completes tools but emits no final answer (GPT models) | Closed | [#3127](https://github.com/HKUDS/nanobot/pull/3127) | Falls back to short tool-result summary |
| **Low** | [#3647](https://github.com/HKUDS/nanobot/issues/3647) `tiktoken.get_encoding()` blocks on network | Closed | [#3662](https://github.com/HKUDS/nanobot/pull/3662) | Local-only encoder with char fallback |
| **Low** | [#2084](https://github.com/HKUDS/nanobot/issues/2084) Duplicate gateway instances from same config | Closed | [#2166](https://github.com/HKUDS/nanobot/pull/2166) | PID lock file prevents second launch |

**All high-severity bugs reported/updated today have fix PRs merged.**

## 6. Feature Requests & Roadmap Signals

| Request | Source | Signal Strength | Likelihood for Next Version |
|---------|--------|-----------------|----------------------------|
| **Per-chat / per-topic Telegram group policy** + `/group` command | [#5972](https://github.com/HKUDS/nanobot/issues/5972), [#5973](https://github.com/HKUDS/nanobot/pull/5973), [#5974](https://github.com/HKUDS/nanobot/pull/5974) | High — stacked PRs ready, addresses forum-topic limitation | **Very High** — PRs open, tests included, only depends on #5973 merge |
| **Budget model-visible MCP schemas** (filter/summarize large tool sets) | [#5298](https://github.com/HKUDS/nanobot/issues/5298) | Medium — design discussion, no PR yet | Medium — needs API design for schema budgeting |
| **Silent context compaction** (no channel notification) + reduced WeChat polling logs | [#5900](https://github.com/HKUDS/nanobot/issues/5900) | Medium — clear user pain, no PR yet | Medium — low-risk config change |
| **Session-owned subagent task messaging & cancellation** | [#5985](https://github.com/HKUDS/nanobot/pull/5985) | High — PR open, builds on #5976 | High — active development, UUID tasks, bounded inboxes |
| **Aggregate concurrent subagent results** (single notification) | [#5954](https://github.com/HKUDS/nanobot/pull/5954) | Medium — PR open, conflict label | Medium — depends on subagent framework |
| **Catalog-backed reasoning effort selection in WebUI** | [#5983](https://github.com/HKUDS/nanobot/pull/5983) | Medium — PR open, moves from free-text to capability-aware dropdown | Medium — UX improvement, provider-dependent |
| **Codex model discovery without release-pinned filtering** | [#5984](https://github.com/HKUDS/nanobot/pull/5984) | Medium — PR open, uses `client_version=99.99.99` | Medium — unblocks new models faster |
| **Centralize session state ownership in SQLite** (replace JSONL) | [#5943](https://github.com/HKUDS/nanobot/pull/5943) | High — major refactor, P1, bounded worker off event loop | High — architectural, likely in next major |

**Top candidates for next release**: Per-topic Telegram policy (#5973/5974), SQLite session refactor (#5943), subagent messaging (#5985), Codex catalog fix (#5984).

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|----------------------|----------|-----------|
| **Silent production failures** — Telegram bot appears healthy but stops receiving messages; no logs, no alerts | #3626, #3627 | 😡 Critical — "bot alive but stops receiving updates" |
| **Provider credit exhaustion not triggering fallbacks** — agent "stops working" despite configured fallbacks | #5967, #5968 | 😡 Critical — "fallbacks silently skipped" |
| **Context cost explosion from large MCP tool sets** — all schemas sent to model every turn | #5298 | 😟 High — "context cost of large MCP tool sets" |
| **Unwanted noise from idle compaction** — notifications sent to WeChat/WhatsApp channels on auto-compaction | #5900 | 😟 Medium — "sends notification messages to the WeChat and WhatsApp channels" |
| **Duplicate gateway instances** — restart command launches new process instead of managing existing | #2084, #2166 | 😟 Medium — "didn't realize the daemon process and instead launched a new one" |
| **Timezone-sensitive test flakiness** — tests fail deterministically 5h/day due to UTC default | #5348, #5349 | 😐 Low — fixed, but reveals timezone handling fragility |
| **Model picker shows deprecated/shutdown models** — `gpt-5-chat-latest` listed but unavailable | #5977 | 😟 Medium — "dropdown is whatever `GET /v1/models` returns" |
| **Tool-loop burning iterations silently** — same tool+args repeated, no signal to user/model | #5344 | 😟 Medium — "just looks frozen from the outside" |
| **Taiwanese WebUI strings misleading** — implied incorrect action/state | #5982 | 😐 Low — i18n polish, 20 strings corrected |

**Overall**: Users running NanoBot in **multi-tenant Telegram/WeChat environments** hit operational blind spots (silent hangs, fallback failures, notification spam). Developers integrating **large MCP tool sets** face context-budget pressure. The project responds quickly with fixes, but several UX gaps remain (model catalog freshness, silent compaction, per-topic policy).

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#5298](https://github.com/HKUDS/nanobot/issues/5298) Budget model-visible MCP schemas | 53 days | Open, 2 comments | **Architectural** — large tool sets break context budgets; needs schema filtering/summarization API before model call |
| [#5900](https://github.com/HKUDS/nanobot/issues/5900) Silent compaction + log verbosity | 6 days | Open, 1 comment | **UX/ops** — simple config flags could silence compaction notifications and reduce WeChat polling log spam |
| [#5943](https://github.com/HKUDS/nanobot/pull/5943) SQLite session refactor (P1) | 3 days | Open, 0 comments | **Core infra** — replaces JSONL with SQLite transactions, bounded worker; high impact, needs review |
| [#5973](https://github.com/HKUDS/nanobot/pull/5973) Per-chat/topic Telegram policy | 1 day | Open, 0 comments | **Blocked** — #5974 (command) depends on this; forum-topic support blocked |
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) Subagent task messaging & cancellation | 0 days | Open, 0 comments | **New capability** — session-owned tasks, UUIDs, bounded inboxes, receipts; builds on #5976 |
| [#5954](https://github.com

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-30

---

## 1. Today's Overview

Hermes Agent shows **high development velocity** with 50 PRs and 5 issues updated in the last 24 hours. The project is in active bug-fix and stabilization mode — no new release today, but a large batch of desktop-session fixes, gateway improvements, and i18n updates are moving through review. Critical blockers exist around file-permission corruption after updates (#128968), missing Python dependency breaking profile gateway (#128959), and thread/memory leaks in long-running gateway processes (#128969). Security hygiene needs attention: a history-check workflow flaw (#128930) means unrelated-history PRs can slip through.

---

## 2. Releases

**No new releases today.** The latest tagged version remains `v0.21.5` (rc.30-v0.21.5-223-gddd0cc6944 per issue reports). Next release will likely bundle the current wave of desktop session-state fixes, gateway multi-Weixin support, and the capabilities-catalog redesign.

---

## 3. Project Progress — Merged/Closed PRs (6 items)

| PR | Type | Summary |
|----|------|---------|
| [#44229](https://github.com/NousResearch/hermes-agent/pull/44229) | Feature (closed duplicate) | Korean (`ko`) locale support for Desktop UI — closed as duplicate |
| [#47129](https://github.com/NousResearch/hermes-agent/pull/47129) | Feature (closed) | Multi-account Weixin (personal WeChat) gateway support — superseded by rebased [#128967](https://github.com/NousResearch/hermes-agent/pull/128967) |
| *4 other merged/closed PRs* | — | Details not in feed; likely routine dependency bumps or doc fixes |

**Key advancement:** The rebased multi-Weixin PR ([#128967](https://github.com/NousResearch/hermes-agent/pull/128967), +881 lines across 9 files) is now open and clean — a significant gateway feature for users managing multiple WeChat identities.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#122394](https://github.com/NousResearch/hermes-agent/issues/122394) | 3 comments, 👍1 | **Billing/entitlement mismatch**: Free Perplexity Fast Search blocked for authenticated Portal users with zero credits — contradicts public launch announcement. Users expect tier promises to be honored. |
| [#128930](https://github.com/NousResearch/hermes-agent/issues/128930) | 1 comment | **Supply-chain security**: CI history-check cannot reject unrelated-history PRs because `actions/checkout` materializes the merge ref. Maintainers need a fix to prevent malicious history injection. |
| [#128959](https://github.com/NousResearch/hermes-agent/issues/128959) | 1 comment | **Installability regression**: Missing `ruamel` Python package prevents profile gateway startup on fresh installs — blocks onboarding. |
| [#128968](https://github.com/NousResearch/hermes-agent/issues/128968) | 0 comments (new) | **Self-inflicted breakage**: `hermes update` writes root-owned cache files under `~/.hermes`, blocking all future updates and functions. High-impact blocker. |

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical (Blocker)** | [#128968](https://github.com/NousResearch/hermes-agent/issues/128968) — `hermes update` creates root-owned files in user home, bricking installs | Open | None yet |
| **Critical (Blocker)** | [#128959](https://github.com/NousResearch/hermes-agent/issues/128959) — Missing `ruamel` package prevents profile gateway start | Open | None yet |
| **High** | [#128969](https://github.com/NousResearch/hermes-agent/issues/128969) — Gateway daemon threads accumulate (35→78 in 2h), memory 286MB→724MB; only restart clears | Open | None yet |
| **High** | [#122394](https://github.com/NousResearch/hermes-agent/issues/122394) — Free Perplexity Fast Search incorrectly gated by credit entitlement | Open | None yet |
| **Medium** | [#128930](https://github.com/NousResearch/hermes-agent/issues/128930) — Security: history-check workflow ineffective | Open | None yet |
| **Medium** | Desktop session-state races (multiple PRs): [#128916](https://github.com/NousResearch/hermes-agent/pull/128916), [#128532](https://github.com/NousResearch/hermes-agent/pull/128532), [#128571](https://github.com/NousResearch/hermes-agent/pull/128571), [#127231](https://github.com/NousResearch/hermes-agent/pull/127231), [#127272](https://github.com/NousResearch/hermes-agent/pull/127272) | Open PRs exist | 5 PRs targeting session creation, clarify answers, quick-entry, rename routing, subagent pinning |
| **Medium** | Browser pop-out relay & preview webview reuse: [#127239](https://github.com/NousResearch/hermes-agent/pull/127239), [#127050](https://github.com/NousResearch/hermes-agent/pull/127050) | Open PRs exist | 2 PRs |
| **Low** | Image lightbox zoom/pan missing: [#127247](https://github.com/NousResearch/hermes-agent/pull/127247) | Open PR | 1 PR |
| **Low** | File-tree context menu opens file unintentionally: [#128581](https://github.com/NousResearch/hermes-agent/pull/128581) | Open PR | 1 PR |
| **Low** | i18n key manifest stale for terminal strings: [#128961](https://github.com/NousResearch/hermes-agent/pull/128961) | Open PR | 1 PR |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Capabilities Catalog Redesign** | [#128956](https://github.com/NousResearch/hermes-agent/pull/128956) — Figma-approved card/section/filter/layout overhaul for Skills & Plugins catalog | **High** — PR open, significant UI investment |
| **Multi-Weixin (WeChat) Gateway Support** | [#128967](https://github.com/NousResearch/hermes-agent/pull/128967) — Rebased, de-noised, +881 lines; supersedes closed [#47129](https://github.com/NousResearch/hermes-agent/pull/47129) | **High** — Mature implementation, clear user demand |
| **External Skills Provenance Tier** | [#128387](https://github.com/NousResearch/hermes-agent/pull/128387) — `external` provenance for `skills.external_dirs` mounts (usage report, dashboard, catalog, learning graph) | **Medium** — Touches multiple surfaces; needs review |
| **Review-Pane Diff Scope Selector** | [#127200](https://github.com/NousResearch/hermes-agent/pull/127200) — Docs promise Uncommitted/Branch/Last-turn; UI hardcoded to `uncommitted` | **Medium** — Doc/UI parity fix |
| **Korean Locale** | [#44229](https://github.com/NousResearch/hermes-agent/pull/44229) — Closed as duplicate; suggests active i18n work elsewhere | **Low** — Duplicate indicates parallel track |

---

## 7. User Feedback Summary

| Pain Point | Source | Impact |
|------------|--------|--------|
| **Update command breaks own installation** | [#128968](https://github.com/NousResearch/hermes-agent/issues/128968) | Users cannot update or run Hermes after `hermes update` — root-owned cache files in `~/.hermes` |
| **Profile gateway won't start (missing dependency)** | [#128959](https://github.com/NousResearch/hermes-agent/issues/128959) | Fresh installs on Python 3.14 fail immediately — `ruamel` not bundled/declared |
| **Gateway degrades over time** | [#128969](https://github.com/NousResearch/hermes-agent/issues/128969) | Long-running agents (2h+) leak threads & memory; requires manual restart — unsuitable for server/daemon use |
| **Free tier feature incorrectly paywalled** | [#122394](https://github.com/NousResearch/hermes-agent/issues/122394) | Perplexity Fast Search announced free for all Portal tiers, but entitlement check blocks zero-credit accounts |
| **Session UX fragility** | 5+ desktop PRs | First-message loss, clarify-answer loss on remount, quick-entry fire-and-forget, rename routing to wrong profile, subagent rows pinned after stop |

**Positive signals:** Active PR authors (especially `OutThisLife`) are systematically fixing session-state races, browser pop-out architecture, and catalog UX — indicating strong internal investment in desktop polish.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#122394](https://github.com/NousResearch/hermes-agent/issues/122394) | 5 days (updated today) | Public commitment vs. implementation gap; affects Portal credibility; P2, has 👍 |
| [#128930](https://github.com/NousResearch/hermes-agent/issues/128930) | New (today) | CI security gate silently broken; could allow malicious PR merges |
| [#128968](https://github.com/NousResearch/hermes-agent/issues/128968) | New (today) | **Self-DoS vector** — every user running `hermes update` bricks their install; needs hotfix |
| [#128959](https://github.com/NousResearch/hermes-agent/issues/128959) | New (today) | Blocks new-user onboarding; missing dep in packaging |
| [#128969](https://github.com/NousResearch/hermes-agent/issues/128969) | New (today) | Gateway not production-ready for long-lived deployments; architectural fix needed |
| [#47129](https://github.com/NousResearch/hermes-agent/pull/47129) / [#128967](https://github.com/NousResearch/hermes-agent/pull/128967) | 3+ months / today | Multi-Weixin support long in review; rebased PR ready but needs merge decision |
| [#128387](https://github.com/NousResearch/hermes-agent/pull/128387) | 1 day | External skills provenance touches catalog, dashboard, usage reports, learning graph — cross-cutting |

---

**Overall Health:** 🟡 **Caution** — High feature velocity but three critical blockers (#128968, #128959, #128969) and a security gap (#128930) landed simultaneously. Recommend prioritizing the update-bricking fix and missing dependency before next release. Desktop session fixes are progressing well in PRs.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-30

## 1. Today's Overview
PicoClaw shows **high Web UI–focused activity** with 6 issues and 5 PRs updated in the last 24 hours, all centered on the built-in web frontend (`web/frontend`). No new release was published. The project is in an active bug-fix and UX-polish phase: contributors are addressing chat-input lag with long histories, invisible/dropped queued messages, “ghost sessions” disappearing while the model thinks, and a misleading thinking indicator. One PR (#3337) was closed as stale (MCP failure hang), while four new PRs target the reported Web UI gaps. Overall health: **active maintenance, user-facing stability work in progress**.

---

## 2. Releases
**No new releases** in the last 24 hours. Current latest remains **v0.3.1** (referenced in #3281).

---

## 3. Project Progress (Merged/Closed PRs)
| PR | Title | Status | Impact |
|----|-------|--------|--------|
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix/mcp failure hangs agent loop | **Closed (stale)** | Would have prevented agent-loop exit on MCP server connection failure; closed without merge due to inactivity. Maintainers may revisit if the hang recurs. |

*No PRs merged today.* The four open PRs (#3412, #3411, #3410, #3378) are all in review and target the Web UI issues reported today/yesterday.

---

## 4. Community Hot Topics (Most Active Issues)
| Issue | Comments | 👍 | Core Need |
|-------|----------|----|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) **Web UI chat input lag with long history** | 16 | 2 | **Performance**: Input box becomes unusably slow as session history grows (v0.3.1, Go 1.25.11). Users need virtualization or incremental rendering. |
| [#440](https://github.com/sipeed/picoclaw/issues/440) **Replace hard iteration limit with context-window bounding** | 7 | 0 | **Agent capability**: `max_tool_iterations: 20` aborts complex workflows prematurely. Request: dynamic bound based on context window + loop detection. |
| [#3408](https://github.com/sipeed/picoclaw/issues/3408) **Queued messages dropped silently, no UI feedback** | 1 | 0 | **Reliability/UX**: Messages sent while agent is busy vanish; queue full (`MaxQueueSize=10`) drops them with zero indication. PR [#3410](https://github.com/sipeed/picoclaw/pull/3410) surfaces queue state. |
| [#3407](https://github.com/sipeed/picoclaw/issues/3407) **Ghost session: disappears from list while model thinks** | 1 | 0 | **Session management**: Active session vanishes from dropdown mid-turn, leaving user stranded. |
| [#3409](https://github.com/sipeed/picoclaw/issues/3409) **Scheduling primitive misused as subagent wait → unwanted loop tick** | 1 | 0 | **Agent orchestration**: `ScheduleWakeup` used as polling hack for subagent completion triggers autonomous loop side-effects. Needs proper wait/notify. |

**Underlying theme**: The Web UI has become the primary daily driver, but its real-time feedback, session lifecycle, and input-performance fundamentals are unfinished.

---

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Chat input lag → unusable with moderate history | — |
| **High** | [#3408](https://github.com/sipeed/picoclaw/issues/3408) | Queued messages silently dropped (queue full = data loss) | [#3410](https://github.com/sipeed/picoclaw/pull/3410) |
| **Medium** | [#3407](https://github.com/sipeed/picoclaw/issues/3407) | Ghost session: active session vanishes from list mid-turn | — |
| **Medium** | [#3409](https://github.com/sipeed/picoclaw/issues/3409) | Scheduling primitive misuse causes spurious autonomous ticks | — |
| **Low** | [#3337](https://github.com/sipeed/picoclaw/pull/3337) (closed) | MCP failure hangs agent loop (stale, unmerged) | — |

*Note*: PR [#3412](https://github.com/sipeed/picoclaw/pull/3412) (“make a failed turn visible”) addresses a related UX gap—errors currently swallowed by the `message` tool.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Honest, state-driven working indicator** (replace canned “thinking” phrases) | [#3406](https://github.com/sipeed/picoclaw/issues/3406) + PR [#3411](https://github.com/sipeed/picoclaw/pull/3411) | **High** — PR open, part 1 of tracked issue |
| **Separate manual/channel sessions in session list + archiving** | [#3406](https://github.com/sipeed/picoclaw/issues/3406) | Medium — UX polish, no PR yet |
| **Context-window–bounded iteration limit + loop detection** | [#440](https://github.com/sipeed/picoclaw/issues/440) | Medium — architectural, needs design |
| **OAuth token refresh uses configured scopes (not hardcoded)** | PR [#3378](https://github.com/sipeed/picoclaw/pull/3378) | **High** — simple fix, open since 2026-09-12 |

---

## 7. User Feedback Summary
- **Pain points**:  
  - “Typing becomes molasses after a few dozen messages” (#3281)  
  - “I send a message, nothing happens, later I realize it was dropped” (#3408)  
  - “My session vanished while the model was thinking—no way back” (#3407)  
  - “The ‘thinking’ spinner lies; it just cycles canned phrases” (#3406)  
- **Use cases**: Heavy multi-turn coding sessions, subagent-driven workflows, daily chat via Web UI.  
- **Satisfaction**: Core agent logic praised; Web UI labeled “frustrating for real use” (#3406).  
- **Workarounds cited**: Users refresh browser to recover ghost sessions; avoid long histories.

---

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#440](https://github.com/sipeed/picoclaw/issues/440) — Iteration-limit redesign | 7+ months (opened 2026-02-18) | Blocks complex agent workflows; 7 comments, 0 👍 but high technical debt. |
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) — OAuth refresh scopes fix | 18 days open | Security/compliance: hardcoded scopes override provider config. Simple, review-ready. |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) — MCP hang fix (closed stale) | 46 days | If MCP flakiness returns, agent becomes unresponsive. Consider reopening or alternative fix. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Input lag | 70 days | 16 comments, 2 👍; affects every power user. Needs virtualization or diff-based render. |

---

**Bottom line**: PicoClaw’s agent core is solid; the Web UI is the current bottleneck. The next patch (likely v0.3.2) will probably ship the honest working indicator (#3411), queue visibility (#3410), error visibility (#3412), and OAuth scope fix (#3378). The iteration-limit redesign (#440) and input-performance work (#3281) are deeper investments for a future minor release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-30

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 16 PRs updated and 2 issues closed in the last 24 hours, though no new releases were cut. The activity is heavily skewed toward **bug fixes, hardening, and documentation** rather than new features. Seven PRs were merged/closed, addressing arm64 compatibility, container lifecycle leaks, logging crashes, and proxy authentication flows. Nine PRs remain open, including CI hardening, gateway/provider enhancements, and update/rollback reliability. The project is in a **stabilization phase**—clearing technical debt and platform-support gaps ahead of a likely patch release.

## 2. Releases
**No new releases published today.** The latest version remains **2.4.0** (per issue #3888 context). Several merged fixes (arm64 Iron Proxy, container cleanup, log serialization, update rollback) are strong candidates for a **2.4.1** patch.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3953](https://github.com/nanocoai/nanoclaw/pull/3953) | **Bug fix (arm64)** | Stops Iron Proxy install early on arm64 engines that cannot run amd64 `ironsh/iron-control` image, replacing cryptic `exec format error` with actionable message. | **High** — unblocks arm64 users (DGX Spark, Apple Silicon, Graviton) |
| [#3947](https://github.com/nanocoai/nanoclaw/pull/3947) | **Bug fix (containers)** | Host sweep now stops containers whose session or agent group was deleted, preventing orphaned containers until host restart. | **High** — eliminates resource leaks on agent-group deletion |
| [#3958](https://github.com/nanocoai/nanoclaw/pull/3958) | **Bug fix (logging)** | `formatErr`/`formatData` no longer throw on non-JSON-serializable values (circular refs, BigInt); `emit` wrapped in try/catch. | **High** — prevents host crashes from log payloads |
| [#3878](https://github.com/nanocoai/nanoclaw/pull/3878) | **Bug fix (setup)** | Ping agent’s container stopped before folder deletion during post-ping cleanup. | **Medium** — cleans up temporary containers reliably |
| [#3955](https://github.com/nanocoai/nanoclaw/pull/3955) | **Docs (skills)** | OpenCode skill docs now defer gateway-specific credential notes to Iron/OneCLI skills; single source of truth. | **Medium** — reduces doc drift |
| [#3954](https://github.com/nanocoai/nanoclaw/pull/3954) | **Docs (gateways)** | Corrects two comments about credential reread refusal logic (ID/metadata vs. value-only changes). | **Low** — internal clarity |
| [#3919](https://github.com/nanocoai/nanoclaw/pull/3919) | **Bug fix (skills, superseded)** | OpenCode setup validates model URL against selected gateway at prompt; keyless model on same machine works over `http://host.docker.internal:<port>/v1`. **Superseded by #3965.** | **Medium** — improved UX, but replaced |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| **[#3888](https://github.com/nanocoai/nanoclaw/issues/3888)** Iron Proxy `exec format error` on arm64 | 0 comments, 0 👍, but **root cause identified & fixed in #3953** | **Native arm64 support for Iron Control image** — users on DGX Spark, Mac, ARM servers cannot use Iron Proxy today. |
| **[#3909](https://github.com/nanocoai/nanoclaw/issues/3909)** Container spawned for deleted agent group | 0 comments, 0 👍, **fixed in #3947** | **Race condition in `spawnContainer`** — host reads group, then awaits; group deleted mid-flight → orphan container. |
| **[#3969](https://github.com/nanocoai/nanoclaw/pull/3969)** Iron Proxy: send `Proxy-Authenticate` challenge on 407 | Open, 0 comments | **Git/libcurl compatibility** — clients only send proxy creds after challenge; bare 407 breaks `git fetch` through proxy. |
| **[#3968](https://github.com/nanocoai/nanoclaw/pull/3968)** CI: pin actions & cosign, add Dependabot | Open, 0 comments | **Supply-chain hardening** — floating tags (`@v4`, `@v1`) risk silent CI behavior changes. |

> **Pattern**: Issues are filed by core team (glifocat) and resolved rapidly. External community engagement (comments/reactions) remains near zero — project operates as **internal-team-driven with open source visibility**.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **Critical** | Host crashes on non-JSON-serializable log value (circular/BigInt) | ✅ Fixed | [#3958](https://github.com/nanocoai/nanoclaw/pull/3958) |
| **Critical** | Iron Proxy install fails on arm64 with `exec format error` (no arm64 Iron Control image) | ✅ Fixed (early exit + guidance) | [#3953](https://github.com/nanocoai/nanoclaw/pull/3953) |
| **High** | Orphan containers when agent group/session deleted mid-spawn or post-delete | ✅ Fixed | [#3947](https://github.com/nanoclaw/pull/3947) |
| **High** | Update rollback doesn’t stop live nohup host or drain agent containers | 🟡 Open | [#3956](https://github.com/nanocoai/nanoclaw/pull/3956) |
| **High** | `/update-nanoclaw` reports `complete` while old host still running if liveness probe fails | 🟡 Open | [#3962](https://github.com/nanocoai/nanoclaw/pull/3962) |
| **Medium** | Host service ignores `HTTPS_PROXY` unless `NODE_USE_ENV_PROXY` set at boot | 🟡 Open | [#3901](https://github.com/nanocoai/nanoclaw/pull/3901) |
| **Medium** | Result-door providers (OpenCode) re-send reply already sent via `send_message` | 🟡 Open (held) | [#3918](https://github.com/nanocoai/nanoclaw/pull/3918) |
| **Low** | Ping agent container left running after folder deletion | ✅ Fixed | [#3878](https://github.com/nanocoai/nanoclaw/pull/3878) |

## 6. Feature Requests & Roadmap Signals
| PR / Signal | Description | Likelihood for Next Version |
|-------------|-------------|-----------------------------|
| **[#3964](https://github.com/nanocoai/nanoclaw/pull/3964)** Provider declares exact `host:port` model endpoints | Allows non-default ports without per-call approval cards; auto-approved like `modelDomains`. | **High** — core-team labeled, solves real pain for on-prem/private models |
| **[#3966](https://github.com/nanocoai/nanoclaw/pull/3966)** Iron: keyless model on same machine over plain HTTP | `http://host.docker.internal:<port>/v1` for local keyless models; port-scoped, inference-only. | **High** — core-team, simplifies local dev with Iron |
| **[#3965](https://github.com/nanocoai/nanoclaw/pull/3965)** OpenCode/Iron: validate model URL against gateway at prompt | Re-prompts with gateway’s reason instead of silent failure later. | **High** — UX polish, supersedes #3919 |
| **[#3968](https://github.com/nanocoai/nanoclaw/pull/3968)** CI hardening: pinned actions, cosign, Dependabot | Supply-chain security baseline. | **High** — maintenance, likely merged soon |
| **[#3901](https://github.com/nanocoai/nanoclaw/pull/3901)** Host service respects `HTTPS_PROXY` via `NODE_USE_ENV_PROXY` at boot | Enables NanoClaw behind corporate HTTPS proxies. | **Medium** — niche but blocking for some enterprises |

**Prediction**: Next patch (2.4.1) will bundle arm64 guard, container sweep, log hardening, ping cleanup, and doc fixes. Gateway/provider enhancements (#3964, #3966, #3965) may ship in **2.5.0** as they add new capability surfaces.

## 7. User Feedback Summary
- **Arm64 users blocked** on Iron Proxy (#3888) — now mitigated by early-exit with instructions; true fix requires arm64 `iron-control` image (upstream).
- **Corporate proxy users** cannot run host service (#3901) — fix pending, requires Node flag at process start.
- **Developers using local models** with Iron/OpenCode face confusing validation failures (#3919, #3965) — UX fix in review.
- **No direct user complaints** in issues; all tracked items are internally discovered. Suggests **dogfooding-driven QA** with limited external issue reporting.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| **[#3901](https://github.com/nanocoai/nanoclaw/pull/3901)** Host service HTTPS proxy support | 5 days open | **Medium** — blocks enterprise deployments behind mandatory HTTPS proxies. Requires `NODE_USE_ENV_PROXY=1` at Node boot; fix must inject flag early. |
| **[#3956](https://github.com/nanocoai/nanoclaw/pull/3956)** Rollback stops live host & drains containers | 2 days open | **High** — update/rollback reliability gap; nohup installs leave old host running, causing split-brain. |
| **[#3962](https://github.com/nanocoai/nanoclaw/pull/3962)** Update cutover refuses when liveness probe fails | 2 days open | **High** — false `complete` status leaves system in inconsistent state. |
| **[#3918](https://github.com/nanocoai/nanoclaw/pull/3918)** Agent-runner nudge duplicate on result-door reply | 5 days open (held) | **Medium** — duplicates user-visible messages; blocked on `send_message` ack flag. |
| **[#3969](https://github.com/nanocoai/nanoclaw/pull/3969)** Iron Proxy `Proxy-Authenticate` challenge for git | <1 day open | **Medium** — breaks `git fetch` through proxy; low-complexity fix (add header). |

---

**Health Indicators**  
✅ **Velocity**: 16 PRs/24h, 7 merged — strong throughput  
✅ **Bug clearance**: 5 critical/high bugs fixed today  
⚠️ **Release cadence**: No patch since 2.4.0; fixes accumulating  
⚠️ **External engagement**: Near-zero community interaction  
✅ **CI hardening**: In progress (#3968) — proactive security posture  

**Recommendation**: Cut **2.4.1** this week with merged fixes; prioritize #3956, #3962, #3901 for 2.4.2 or 2.5.0.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-30

## 1. Today's Overview
NullClaw showed modest but focused activity over the past 24 hours. One pull request (#1014) was merged, delivering a version bump to `v20260929` alongside targeted fixes for web-search provider pinning, Exa header deduplication, and Markdown stripping in official QQ replies. Simultaneously, a new feature request (#1015) was opened by the founder of MemCode proposing a hosted memory engine to enable cross-device memory persistence without increasing local footprint. No new releases were published, and overall issue/PR velocity remains low, suggesting a maintenance-oriented phase with an eye toward extensibility.

## 2. Releases
No new releases published today. The merged PR #1014 increments the version to `v20260929`; a formal release artifact may follow once the release workflow completes.

## 3. Project Progress
| PR | Status | Key Changes |
|----|--------|-------------|
| [#1014 v20260929](https://github.com/nullclaw/nullclaw/pull/1014) | **Merged/Closed** | • Pin web search to configured provider (prevents fallback surprises)<br>• Stop Exa from rejecting duplicate `Content-Type` headers<br>• Strip Markdown markers before official QQ replies<br>• Version bump to `v20260929` |

These changes improve reliability of the web-search pipeline and QQ integration, both user-facing surfaces.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#1015 Hosted MemCode engine for nullclaw memory interface](https://github.com/nullclaw/nullclaw/issues/1015) | Issue | 0 | 0 | **Cross-device memory persistence** — User wants a remote, swappable memory backend so selected memories sync across devices without bloating local storage. Signals demand for cloud-backed, pluggable memory engines. |

With zero comments/reactions so far, the topic is fresh; maintainer engagement will indicate priority.

## 5. Bugs & Stability
No new bug reports, crashes, or regressions were filed in the last 24 hours. The merged PR #1014 addresses two stability-adjacent issues (Exa header rejection, Markdown leakage in QQ), both now resolved.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| Hosted MemCode engine (remote memory backend) | [#1015](https://github.com/nullclaw/nullclaw/issues/1015) (external founder) | **Medium–High** — Aligns with existing “swappable memory engines” architecture; low runtime footprint is a stated project goal. |

If maintainers accept the proposal, expect a new memory-engine interface and configuration options in a subsequent minor release.

## 7. User Feedback Summary
- **Pain point**: Current memory engines are local-only; users with multiple devices cannot share selected memories without manual export/import.
- **Use case**: Cross-device assistants (desktop + mobile) needing consistent long-term context.
- **Sentiment**: Neutral-to-positive; the request comes from a domain expert (MemCode CEO) offering a purpose-built solution, suggesting partnership potential rather than generic complaint.

## 8. Backlog Watch
No stale issues or PRs surfaced in today’s data. The only open item is the newly created #1015, which warrants timely triage (design review, API sketch, security/privacy assessment) to avoid backlog stagnation.

---

*Data sourced from GitHub API for `nullclaw/nullclaw` on 2026-09-30. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-30

## 1. Today's Overview
IronClaw shipped **v1.4.1** yesterday, promoting the RC2 candidate to stable with a Google OAuth activation fix and a Wasmtime security update. The repository shows steady maintenance velocity: one release-promotion PR merged, two feature-oriented PRs open (knowledge-graph refresh and a new opt-in tool-selection implementation), and two active RFC/proposal issues discussing architectural expansion to remote edge workers and BM25F+embedding-based tool ranking. No critical bugs or regressions were reported in the last 24 hours, indicating a healthy, stable codebase with forward-looking design discussions underway.

## 2. Releases
### **ironclaw-v1.4.1** (2026-09-29)  
**Stable promotion of `1.4.1-rc.2`**  
[Release Notes](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.4.1)

| Category | Changes |
|----------|---------|
| **Fixed** | • Google extensions (Gmail, Google Calendar) can now be activated when the operator supplies the Google OAuth client via the Web UI (previously only worked with env-var configuration).<br>• Wasmtime dependency updated to address a security advisory. |
| **Breaking Changes** | None reported. |
| **Migration Notes** | Operators using Google extensions via Web UI OAuth configuration should verify activation works; no config-schema changes required. |

---

## 3. Project Progress
| PR | Status | Scope | Summary |
|----|--------|-------|---------|
| [#8120](https://github.com/nearai/ironclaw/pull/8120) | **MERGED** | release, ci, docs, deps | Promoted `1.4.1-rc.2` → `1.4.1`; updated changelogs, lockfiles, and shipping artifacts. |
| [#8119](https://github.com/nearai/ironclaw/pull/8119) | **OPEN** | feat(loop-host), docs, deps | Implements opt-in turn-0 tool selection using BM25F + embeddings; adds ranking pipeline, config flags (`RANK_TOOLS_AT_TURN_START`), and tests. |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | **OPEN** | ci, infra | Nightly codebase-knowledge-graph refresh (bot-generated); updates committed bootstrap snapshot. |

**Net advancement**: Stable release shipped; experimental tool-ranking feature ready for review; internal CI hygiene maintained.

---

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| **[#7889](https://github.com/nearai/ironclaw/issues/7889) RFC: extend scheduler/orchestrator with opt-in remote edge workers** | 1 comment, updated 2026-09-29 | Operators want to burst workloads to heterogeneous, geographically distributed worker pools (idle PCs, edge devices, spot instances) while preserving IronClaw’s security/audit model. |
| **[#8113](https://github.com/nearai/ironclaw/issues/8113) Proposal: opt-in turn-0 tool selection (BM25F + embeddings)** | 0 comments, updated 2026-09-29 | Reduce first-turn latency by eliminating the `tool_search` round-trip; let the model call the right tools immediately via pre-ranked tool advertisement. |
| **[#8119](https://github.com/nearai/ironclaw/pull/8119) feat(loop-host): opt-in tool selection with embeddings** | 0 comments, opened 2026-09-29 | Concrete implementation of #8113; early review signal will indicate community appetite for this latency optimization. |

**Analysis**: Both discussions center on **horizontal scalability** (remote workers) and **latency reduction** (turn-0 tool ranking)—clear indicators that operators are pushing IronClaw into larger, latency-sensitive deployments.

---

## 5. Bugs & Stability
No new bug reports, crashes, or regressions surfaced in the last 24 hours. The only stability-related change in v1.4.1 is the **Wasmtime security update** (defensive dependency bump). No open issues labeled `bug` or `regression` with recent activity.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Minor (1.5.x) |
|--------|--------|-----------------------------------|
| **Remote edge worker pool** | [#7889](https://github.com/nearai/ironclaw/issues/7889) (RFC) | Medium — requires scheduler/orchestrator redesign; likely behind a feature flag. |
| **Turn-0 tool ranking (BM25F + embeddings)** | [#8113](https://github.com/nearai/ironclaw/issues/8113) + [#8119](https://github.com/nearai/ironclaw/pull/8119) | High — PR already open, opt-in, low risk; aligns with latency-reduction theme. |
| **Knowledge-graph auto-refresh** | [#7988](https://github.com/nearai/ironclaw/pull/7988) | Already merged nightly; may become a configurable CI step. |

---

## 7. User Feedback Summary
- **Pain point**: Google OAuth activation via Web UI was broken for operators who don’t use env vars (fixed in 1.4.1).  
- **Use case expansion**: Operators running fleets of idle machines want to recruit them as ephemeral workers without sacrificing auditability (#7889).  
- **Latency sensitivity**: First-turn `tool_search` round-trip perceived as avoidable overhead; embedding-based pre-ranking proposed (#8113).  
- **Satisfaction**: No negative sentiment in recent issues/PRs; discussions are constructive and forward-looking.

---

## 8. Backlog Watch
| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| **[#7889](https://github.com/nearai/ironclaw/issues/7889) RFC: remote edge workers** | 2026-08-25 (36 days) | Architectural scope is large; needs maintainer triage to decide if/when to schedule design review. |
| **[#7988](https://github.com/nearai/ironclaw/pull/7988) Knowledge-graph refresh** | 2026-08-29 (32 days) | Bot-generated PR; trivial to merge but lingering—may indicate CI ownership gap. |

**Recommendation**: Prioritize triage on #7889 (strategic direction) and merge/close #7988 (housekeeping).

---

*Generated from GitHub data as of 2026-09-30. All links point to the nearai/ironclaw repository.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-30

---

## 1. Today's Overview

LobsterAI saw a **significant maintenance push** on 2026-09-29 with **11 pull requests merged/closed** in a single day — a mix of fresh fixes (gateway stability, installer UX, markdown rendering, artifact linking) and **stale PR cleanup** dating back to April 2026. No new release was cut. On the issue side, **10 issues were updated** (8 open, 2 closed), including one **new critical bug** (#2779) around multi-agent "Dream Diary" data isolation, while several July-era issues remain unresolved. The project shows **active core maintenance** but a **growing backlog of user-reported bugs** — especially on Windows (encoding, shell, installer) and multi-agent data leakage.

---

## 2. Releases

**No new releases** in the last 24 hours. The last merged PRs (especially #2783, #2782, #2781, #2780) suggest a **patch release candidate** may be imminent, focusing on:
- Gateway restart stability
- Windows installer skill-backup failure UX
- Markdown math rendering regression
- Artifact link handling

---

## 3. Project Progress — Merged/Closed PRs (2026-09-29)

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2783](https://github.com/netease-youdao/LobsterAI/pull/2783) | `main`, `openclaw` | **Gateway restart budget fix** — prevents infinite restart loops after brief health | **High** — core stability |
| [#2782](https://github.com/netease-youdao/LobsterAI/pull/2782) | `windows`, `installer` | **Skill-backup failure dialog** — lists user skill folders, guides move to per-user skills root (zh/en) | **High** — unblocks Windows updates |
| [#2781](https://github.com/netease-youdao/LobsterAI/pull/2781) | `renderer`, `artifacts` | **Markdown inline math fix** — prevents `$3/$15` from being parsed as KaTeX | **Medium** — rendering correctness |
| [#2780](https://github.com/netease-youdao/LobsterAI/pull/2780) | `renderer`, `cowork`, `artifacts` | **Artifact link routing** — opens markdown links in matching artifact card, not external app | **Medium** — UX cohesion |
| [#2758](https://github.com/netease-youdao/LobsterAI/pull/2758) | `renderer`, `docs`, `main`, `cowork` | **Progress cards** — displays OpenClaw progress cards above Cowork composer with refresh | **Medium** — visibility |
| [#2707](https://github.com/netease-youdao/LobsterAI/pull/2707) | `main`, `openclaw` | **Gateway restart budget refill** — only refills after stability window | **High** — prevents flapping |
| [#2706](https://github.com/netease-youdao/LobsterAI/pull/2706) | `windows`, `installer` | **Skills backup as PSCustomObject** — fixes PS 5.1 compat on upgrade | **High** — Windows upgrade reliability |

**Stale PRs finally closed** (all from April 2026):
- [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) — TTS read-aloud for AI replies (Web Speech API)
- [#1683](https://github.com/netease-youdao/LobsterAI/pull/1683) — Skill remote import URL validation
- [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) — Clear home draft on agent switch
- [#1773](https://github.com/netease-youdao/LobsterAI/pull/1773) — i18n: missing 'edit' translation

> **Signal**: The team cleared a 5-month PR backlog in one day — likely preparing a stable baseline for a release.

---

## 4. Community Hot Topics — Most Active Issues

| Issue | Comments | Reactions | Core Need |
|-------|----------|-----------|-----------|
| [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) (CLOSED) | 6 | 0 | **Multi-agent USER.md data leakage** — all agents' `USER.md` overwritten by `main` on restart |
| [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) (CLOSED) | 3 | 0 | **Remove bottom-left ad** — no setting to disable permanently |
| [#2779](https://github.com/netease-youdao/LobsterAI/issues/2779) | 1 | 0 | **Dream Diary empty in multi-agent** — `doctor.memory.*` ambient-owner fallback missing in runtime 2026.8.1 |
| [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) | 1 | 0 | **exec tool: hardcoded PowerShell 5.1 + Chinese path encoding** — breaks on non-ASCII usernames |
| [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) | 1 | 0 | **Accelerator corrupts `\f` → `\x0C`** — silent data corruption in file writes (critical) |

**Analysis**:  
- **Data isolation** (#2293, #2779) is the top architectural pain point — users expect true per-agent workspaces.  
- **Windows fundamentals** (#2390, #2393, #2396) remain broken: shell choice, encoding, string rewriting.  
- **Ad UX** (#2342) shows monetization friction — users want control.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| 🔴 **Critical** | [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) — Accelerator rewrites `\f` (5C 66) → form feed (0C), corrupting paths/JSON/scripts | OPEN (Jul 27) | ❌ No |
| 🔴 **Critical** | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) — Multi-agent `USER.md` clobbered by `main` on restart (data loss) | CLOSED (stale) | ❌ No fix linked |
| 🟠 **High** | [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) — `exec` hardcodes PowerShell 5.1; fails on Chinese usernames / Linux cmds / special chars | OPEN (Jul 27) | ❌ No |
| 🟠 **High** | [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) — Same root as #2390: default shell wrapper = PS 5.1, inline scripts fail silently | OPEN (Jul 28) | ❌ No |
| 🟠 **High** | [#2779](https://github.com/netease-youdao/LobsterAI/issues/2779) — Dream Diary panel empty in multi-agent; `DREAMS.md` writes but `doctor.memory.*` ambient-owner missing | OPEN (Sep 29) | ⚠️ Upstream fix exists, needs backport |
| 🟡 **Medium** | [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) — Installer fails: "user skills could not be backed up" | OPEN (Jul 28) | ✅ **Fixed in #2782** (better UX, still blocks) |
| 🟡 **Medium** | [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) — Skill licensing question (Anthropic PDF/DOCS/PPTX/XLSX skills) | OPEN (Jul 28) | ❌ Legal/clarification needed |

> **Note**: #2293 and #2342 were closed as `stale` — **not fixed**. The underlying bugs likely persist.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version |
|---------|-------|----------------------------|
| **Skill rename** | [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) | 🟡 Medium — low complexity, high user value |
| **Scheduled task: select agent + skill** | [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) | 🟡 Medium — fits "cowork" automation theme |
| **Disable ad permanently** | [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) | 🟢 High — trivial toggle, but closed stale |
| **Per-agent USER.md isolation** | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 🔴 Low — closed stale, but architectural fix needed |
| **PowerShell 7 / pwsh as default shell** | [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) | 🟡 Medium — aligns with #2706 PS 5.1 fixes |

**Prediction**: Next patch will ship **#2783, #2782, #2781, #2780, #2758, #2707, #2706** — stability + Windows installer + rendering. Skill rename (#2391) and scheduled-task agent/skill selection (#2392) are strong candidates for the following minor.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Data loss / corruption** | #2293 (USER.md overwritten), #2393 (silent byte corruption), #2779 (Diary not reading `DREAMS.md`) | 😡 **High frustration** — trust in persistence broken |
| **Windows second-class** | #2390, #2396 (PS 5.1 hardcoded), #2395 (installer blocks on skill backup), Chinese username encoding | 😤 **Neglected platform** — core tooling fails on non-ASCII paths |
| **Multi-agent broken** | #2293, #2779 — isolation not enforced; settings leak across agents | 😕 **Core feature unreliable** |
| **Ad intrusion** | #2342 — no opt-out, appears post-update | 😐 **Monetization friction** |
| **Skill UX gaps** | #2391 (rename), #2401 (license clarity), #2395 (backup blocks update) | 😐 **Workflow friction** |

**Bright spots**:  
- PR #2782 improves installer error UX (localized, actionable)  
- PR #2780/2758 improve Cowork/Artifact cohesion  
- PR #1682 (TTS) and #1707 (draft clear) show UI polish — but merged 5 months late

---

## 8. Backlog Watch — Stalled High-Impact Items

| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) — Accelerator `\f` corruption | 64 days | **Silent data destruction**; affects any file write with `\f` sequence | **Urgent**: Root-cause in accelerator string rewrite; needs fix + regression test |
| [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) / [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) — PS 5.1 hardcoded | 63 days | **Blocks all shell exec on Windows** with non-ASCII paths / modern cmds | **High**: Configurable shell + encoding fix; aligns with #2706 PS 5.1 work |
| [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) — USER.md clobber | 84 days | **Multi-agent data isolation broken**; closed stale but unfixed | **High**: Reopen, assign; workspace ownership model needs audit |
| [#2779](https://github.com/netease-youdao/LobsterAI/issues/2779) — Dream Diary empty | 1 day | **New regression** in multi-agent; upstream fix exists | **Medium**: Backport `doctor.memory.*` ambient-owner to bundled runtime |
| [#2401](https://github.com/netease-youdao/LobsterAI/issues/2401) — Skill license clarity | 63 days | **Commercial adoption blocker** | **Low effort**: Official statement on Anthropic skill licensing |

---

## Bottom Line

**Health: 🟡 Caution** — Core runtime (gateway, installer, rendering) got a **strong maintenance sprint**, but **user-facing bugs in data integrity, Windows support, and multi-agent isolation** have festered for 2+ months. The stale-closure of #2293 and #2342 without fixes erodes trust. **Priority for next cycle**: ship the merged PRs as a patch, then tackle #2393, #2390, #2293, #2779 as a "data integrity & Windows" milestone.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-30

---

## 1. Today's Overview
Moltis showed **very low activity** in the last 24 hours: only **1 issue updated** (#1289), **no pull requests**, and **no new releases**. The single issue is a feature request for a "Goal mode or ralph loop," suggesting users are exploring autonomous/agentic workflows. With zero merged PRs and zero closed issues, the codebase did not advance functionally today. Project health appears **quiet** — maintainers may be in a planning or review phase.

---

## 2. Releases
**No new releases** published today. The latest release remains whatever was shipped prior to this period.

---

## 3. Project Progress
**No merged or closed PRs** in the last 24 hours. No features were delivered, no fixes landed, and no documentation updates merged. The contribution pipeline is currently idle.

---

## 4. Community Hot Topics
| Issue | Type | Comments | Reactions | Summary |
|-------|------|----------|-----------|---------|
| [#1289](https://github.com/moltis-org/moltis/issues/1289) | Enhancement | 0 | 0 👍 | **Goal mode / ralph loop** — User proposes a persistent autonomous loop where the agent pursues a high-level goal, iteratively planning, executing, and reflecting (akin to AutoGPT-style "Ralph" loops). No discussion yet. |

**Analysis**: The sole activity is a forward-looking feature request for **goal-directed autonomous loops** — a signal that users want Moltis to move beyond single-turn interactions into continuous, self-driving agent behavior. Zero engagement so far suggests either low visibility or early-stage ideation.

---

## 5. Bugs & Stability
**No bug reports, crashes, or regressions** filed or updated today. Stability surface appears clean in this window.

---

## 6. Feature Requests & Roadmap Signals
| Request | Likelihood for Next Version | Rationale |
|---------|-----------------------------|-----------|
| **Goal mode / autonomous loop (#1289)** | Medium | Aligns with industry trend toward agentic workflows (AutoGPT, BabyAGI, LangGraph). If Moltis aims to compete in "personal AI assistant" space, this is a strategic capability. However, zero discussion and no linked design doc lowers immediate priority. |

**Prediction**: If maintainers engage with #1289, a prototype or RFC may appear in the next cycle. Otherwise, it remains a backlog item.

---

## 7. User Feedback Summary
- **Pain point**: Users want **hands-off, goal-driven automation** — not just chat or single-task execution.
- **Use case**: "Set a high-level objective (e.g., 'research X and write report'), let the agent loop until done."
- **Sentiment**: Too early to gauge satisfaction; no feedback on current UX, performance, or reliability today.

---

## 8. Backlog Watch
| Item | Status | Age | Why It Needs Attention |
|------|--------|-----|------------------------|
| [#1289](https://github.com/moltis-org/moltis/issues/1289) | Open, 0 comments | 1 day | **Strategic feature request** with zero maintainer response. Risk of stalling if not triaged. Assign owner, label `needs-design` or `rfc`, and invite community input. |

**Action recommended**: Triage #1289 within 48h — either accept as RFC, request clarification, or close with rationale. Silent neglect harms contributor trust.

---

*Digest generated from GitHub data as of 2026-09-30 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-30

## 1. Today's Overview
The project shows **high velocity** with 33 PRs updated and 9 issues active in the last 24 hours. A healthy **18 PRs were merged/closed** today, indicating strong maintainer throughput. No new release was cut. Activity spans backend reliability (DB connections, session cleanup), provider resilience (fallback cooldowns, inline media bounds), desktop/terminal hardening, and E2E test alignment with a recent UI redesign. The issue queue surfaces several user-facing bugs in transcription settings, embedding reindex, and tool-output handling — suggesting the next patch cycle will prioritize stability over new features.

## 2. Releases
**No new releases today.** Current published version remains **2.2.1** (referenced in multiple issues).

---

## 3. Project Progress — Merged/Closed PRs (18 today)

| PR | Type | Summary | Link |
|----|------|---------|------|
| #8038 | **fix(hub)** | Close SQLite connections after transactions (commit/rollback/PRAGMA failure paths) — prevents connection leaks | [#8038](https://github.com/agentscope-ai/QwenPaw/pull/8038) |
| #8039 | **fix(ci)** | Correct first-time PR detection; add automatic PR size labels | [#8039](https://github.com/agentscope-ai/QwenPaw/pull/8039) |
| #7893 | **fix(memory)** | Restore runtime after backend rollback on failed plugin memory-backend reload | [#7893](https://github.com/agentscope-ai/QwenPaw/pull/7893) |
| #8037 | **fix(console)** | Align E2E tests with redesigned Console UI (ACP, Channels, Cron, Heartbeat, Skills, Tools, etc.) | [#8037](https://github.com/agentscope-ai/QwenPaw/pull/8037) |
| #8032 | **fix(terminal)** | Replace `select` with `poll` for PTY readiness — supports FDs > `FD_SETSIZE` (1024) | [#8032](https://github.com/agentscope-ai/QwenPaw/pull/8032) |
| #8025 | **fix(desktop)** | Disable NSIS solid compression (Windows installer) | [#8025](https://github.com/agentscope-ai/QwenPaw/pull/8025) |
| #8026 | **fix(ci)** | Cross-platform path handling, sandbox cleanup isolation, Windows terminal interrupt fixes | [#8026](https://github.com/agentscope-ai/QwenPaw/pull/8026) |

**Other closed PRs** (titles only): #8041 (e2e session cleanup), #8001 (timeout tool results recoverable), #8012 (Telegram fenced code blocks), #8034 (inline media per-request bound), #8033 (Tauri desktop backend reconciliation), #8031 (unawaited coroutine leaks in tests), #8029 (Playwright launch args), #8028 (Office COM automation flagging), #8027 (skill download offload to worker thread).

**Theme:** Core infrastructure hardening — DB, terminals, desktop, CI, and test stability — with multiple PRs addressing the recent Console UI redesign fallout.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Summary | Link |
|------|------|----------|---------|------|
| **#7991** | Bug | 4 | **TaskTracker zombie entries inflate `running_task_count`** — dashboard shows 2 running tasks but API returns 1; aggregate vs per-chat counter scope mismatch | [#7991](https://github.com/agentscope-ai/QwenPaw/issues/7991) |
| **#2359** | Enhancement | 3 | **HEARTBEAT_OK / CRON_OK control** — adopt OpenClaw-style gating so model decides whether to send content after heartbeat/cron | [#2359](https://github.com/agentscope-ai/QwenPaw/issues/2359) |
| **#8036** | Bug | 2 | **Creator: OpenAI integration failures** — connection tests pass but generation fails; UI masks provider errors with generic retry message | [#8036](https://github.com/agentscope-ai/QwenPaw/issues/8036) |
| **#8042** | Bug | 1 | **Tool output files auto-fed to model** — PDFs sent as input cause "Internal error" on models lacking format support | [#8042](https://github.com/agentscope-ai/QwenPaw/issues/8042) |
| **#8040** | Bug | 1 | **Embedding reindex silent batch drop** — CJK chunk over per-item token limit drops entire batch; logs claim success (recurrence of #5950) | [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) |

**Underlying needs:**  
- **Observability accuracy** (#7991) — users trust dashboard metrics; divergence erodes confidence.  
- **Provider-level control** (#2359) — advanced users want fine-grained heartbeat/cron gating, mirroring OpenClaw patterns.  
- **Error transparency** (#8036, #8042) — generic "retry" messages hide root causes; models need capability-aware content handling.  
- **Data integrity** (#8040) — silent data loss during reindex is a regression of a known issue.

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | **#8040** Embedding reindex silent batch drop | 20 chunks failed but logs show `processed=126/126`; CJK chunk exceeds provider per-item token limit → whole batch dropped silently. **Recurrence of #5950**. | ❌ No PR yet |
| **High** | **#7991** TaskTracker zombie entries | `running_task_count` disagrees with `/api/chats`; zombie entries inflate count. Affects dashboard reliability and autoscaling logic. | ❌ No PR yet |
| **High** | **#8036** Creator OpenAI integration failures | Connection test passes, generation fails; UI replaces actionable provider error with generic Chinese retry text. Blocks Creator workflow. | ❌ No PR yet |
| **Medium** | **#8042** Tool output files auto-fed to model | Generated PDFs sent back as input → "Internal error" on models without PDF support. No capability check before re-injection. | ❌ No PR yet |
| **Medium** | **#8035** Transcription settings cannot configure `transcription_model` | Switching providers silently breaks transcription; settings page lacks field for model selection. | ❌ No PR yet |
| **Medium** | **#8022** `send_file_to_user` pollutes context | File/image blocks + empty assistant messages cause persistent 400 on all subsequent requests (no capability-based content degradation). | ❌ No PR yet |
| **Low** | **#8030** Invalid/spam issue | "jcy is a nb man" — closed as invalid. | ✅ Closed |

**Note:** Several high-severity bugs lack fix PRs — maintainers may prioritize these for the next patch.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Request | Likelihood for Next Version |
|-------|---------|----------------------------|
| **#8015** | **Custom Skill/Plugin marketplace sources** (self-hosted mirror, air-gapped/intranet deployments) | 🟢 **High** — clear enterprise need, well-scoped config change, 1 comment shows interest |
| **#2359** | **HEARTBEAT_OK / CRON_OK** gating for model message sending (OpenClaw parity) | 🟡 **Medium** — enhancement, not urgent; requires protocol design |
| **#7903** (PR) | **Community & Inbox integration** — embedded feed, comments, Platform editor links, PKCE auth | 🟡 **Medium** — WIP PR (#7903) active, large scope, may target minor release |
| **#8020** (PR) | **Model fallback cooldown** — skip failed candidates for cooling period instead of retrying every request | 🟢 **High** — PR open, directly improves provider resilience, low risk |
| **#8029** (PR) | **Browser config to drop Playwright default args** (e.g., `--disable-extensions`) | 🟢 **High** — PR open, unblocks persistent profile + extensions use case |

**Prediction:** Next patch (2.2.2) will likely include #8020, #8029, #8038, #8032, and fixes for #8040/#7991/#8036. #8015 and #7903 appear targeted for 2.3.0.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Silent data loss in embedding reindex** | #8040: "logs claim full success (`processed=126/126`)" but 20 chunks failed; recurrence of #5950 | High — users cannot trust reindex completeness |
| **Dashboard metrics lie** | #7991: "dashboard reports '2 running tasks' but chat list API returns only 1" | High — operational visibility broken |
| **Opaque provider errors** | #8036: UI shows "本次执行未完成，可重试继续" instead of actual provider error | High — blocks debugging Creator workflows |
| **No capability-aware content handling** | #8042: PDFs auto-fed to model → 400; #8022: file blocks + empty messages poison context | Medium — forces manual workarounds |
| **Transcription config broken** | #8035: switching providers silently breaks transcription; no UI to set `transcription_model` | Medium — feature effectively unusable after provider change |
| **Air-gapped deployment blocked** | #8015: no config for self-hosted Skill/Plugin marketplace | Medium — enterprise blocker |

**Positive signals:** Active first-time contributor (#8012), PRs addressing long-standing technical debt (terminal FD limit, DB connection leaks, CI cross-platform), and WIP community features.

---

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| **#5950** (referenced in #8040) | **~6 months** | **Root cause of embedding reindex silent batch drop** — already recurred once. Fix must handle per-item token limits per provider, not just batch-level. | 🔴 **Critical recurrence** — no fix merged yet |
| **#2359** HEARTBEAT_OK/CRON_OK | **6 months** (created 2026-03-26) | Advanced agent control parity with OpenClaw; 3 comments show sustained interest. | 🟡 **Stalled enhancement** — needs design decision |
| **#7903** Community/Inbox integration (PR) | **10 days** (WIP) | Large feature PR; integrates Platform auth, feed, comments. Risk of merge conflicts if left open too long. | 🟡 **WIP PR** — needs review bandwidth |
| **#7931** Durable paginated transcript history (PR) | **8 days** | Per-session SQLite transcript storage with catalog routing — foundational for chat history UX. | 🟡 **Open PR** — significant scope, needs review |
| **#8001** Timeout tool results recoverable (PR) | **3 days** | Addresses #7981; changes timeout behavior to return result instead of interrupting. | 🟢 **Open PR** — targeted fix, should land soon |

**Maintainer action items:**  
1. **Prioritize #5950 root fix** — it has now caused two user-visible incidents (#8040 + original).  
2. **Triage #7991, #8036, #8040** — all high-severity, no fix PRs.  
3. **Review #7903 and #7931** — large PRs that will rot if delayed.  
4. **Decide on #2359** — 6-month-old enhancement with community interest; accept or close with rationale.

---

*Digest generated from GitHub data as of 2026-09-30. All links point to `agentscope-ai/QwenPaw` repository.*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-30

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 62 total updates (12 issues, 50 PRs) in the last 24 hours, though no new releases were cut. The project is deep in **v0.8.6/v0.9.0 release preparation** (tracker #7432), focusing on runtime/gateway separation, plugin hardening, and security-critical fixes around session ownership, plugin isolation, and channel media handling. Five PRs were merged/closed, including a major RPC transport refactor (#11171). Activity centers on **security hardening** (session ownership, plugin payload integrity, tool authorization) and **channel parity** (WhatsApp, Lark/Feishu image handling). The backlog carries several **P1/high-risk** items blocking workflows (cron declarative jobs, WhatsApp images, session-data tool bypasses).

---

## 2. Releases

**No new releases today.** The project is tracking toward **v0.8.6 (Phase 2 runtime)** and **v0.9.0 (Phase 3 gateway separation)** per tracker #7432. Key prerequisites remain open: plugin update/rollback (#10995), plugin payload hardening (#10769, #10770, #11232), session ownership fixes (#10412, #11126, #11234), and channel media parity (#10975, #11255, #11267).

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#11171](https://github.com/zeroclaw-labs/zeroclaw/pull/11171) | **CLOSED** feat(rpc): bound local transport + chunked uploads | RPC, transport, security | **XL, high risk** — Bounds local RPC transport, adds chunked uploads; carries adversarial-review fixes for commit-time authorization ordering against policy publication/unpairing. Held for re-review approval. |
| *4 other PRs merged/closed* | (details not individually listed in data) | — | Contribute to the 50 PRs updated; see open PRs below for in-flight work. |

**Key advancement:** The RPC wire contract extraction (#11165) and client/gateway seam (#11186) are stacked and nearing merge, enabling v0.9.0 gateway separation. Session ownership contract (#10412) is integrated and underpins multiple security fixes.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#10975](https://github.com/zeroclaw-labs/zeroclaw/issues/10975) | Issue | 4 | **WhatsApp Web images broken** — Inbound images arrive as literal `"[Image]"` text; vision models unusable. Blocks multimodal agents on WhatsApp. |
| [#10769](https://github.com/zeroclaw-labs/zeroclaw/issues/10769) | Issue | 3 | **Plugin payload race hardening** — Concurrent ancestor replacement during plugin opens; follow-up from #9134. Critical for plugin supply-chain integrity. |
| [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) | Issue | 3 | **Revoked admin ownership bypass** — Queued session ops retain stale admin grants; #10412 is partial fix. **S0 security risk**. |
| [#11127](https://github.com/zeroclaw-labs/zeroclaw/issues/11127) | Issue | 2 | **Session-data tools bypass ownership** — Non-admin principals read other principals' session history via `sessions_history`. **S0 data loss/security risk**. |
| [#11237](https://github.com/zeroclaw-labs/zeroclaw/issues/11237) | Issue | 2 | **Config editor cannot write declarative cron** — Blocks authoring scheduled jobs via config API (dashboard `/config/cron`). **S1 workflow blocked**. |
| [#10935](https://github.com/zeroclaw-labs/zeroclaw/pull/10935) | PR | — | **Streaming guard over-suppression** — Prose quoting tool-result objects incorrectly dropped. Affects all provider streams. |
| [#10938](https://github.com/zeroclaw-labs/zeroclaw/pull/10938) | PR | — | **Tool attachment declaration** — Move from scanning tool text for image markers to explicit attachment declarations. Fixes base64-in-result regressions. |

**Underlying theme:** **Security boundary enforcement** (session ownership, plugin isolation, tool authorization) and **channel media parity** (WhatsApp, Lark) dominate. Users/developers hit hard limits on multimodal workflows and config-driven automation.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S0** (security/data loss) | [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126) Queued session ops retain revoked admin ownership | Open | [#11234](https://github.com/zeroclaw-labs/zeroclaw/pull/11234) (judge queued ownership by current authority) |
| **S0** | [#11127](https://github.com/zeroclaw-labs/zeroclaw/issues/11127) Session-data tools bypass principal ownership checks | Open | [#11220](https://github.com/zeroclaw-labs/zeroclaw/pull/11220) (require `tools:execute` for SOPs over RPC); [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) (per-agent ownership scoping) |
| **S1** (workflow blocked) | [#11237](https://github.com/zeroclaw-labs/zeroclaw/issues/11237) Config editor cannot write declarative cron schedule | Open | — |
| **S2** (major feature broken) | [#10975](https://github.com/zeroclaw-labs/zeroclaw/issues/10975) WhatsApp Web inbound images not downloaded | Open | [#11255](https://github.com/zeroclaw-labs/zeroclaw/issues/11255) (feature request to save images like Telegram) |
| **S2** | [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) `cron update` silently discards changes to declarative jobs (6 columns) | Open | — |
| **High risk** | [#10769](https://github.com/zeroclaw-labs/zeroclaw/issues/10769) Plugin payload opens race vs concurrent ancestor replacement | Open | [#11232](https://github.com/zeroclaw-labs/zeroclaw/pull/11232) (open admitted payloads from retained package root) |
| **High risk** | [#10770](https://github.com/zeroclaw-labs/zeroclaw/issues/10770) Recover incomplete plugin installations without overwriting valid packages | Open | [#11098](https://github.com/zeroclaw-labs/zeroclaw/pull/11098) (staging dir + atomic rename; partial) |
| **High risk** | [#10935](https://github.com/zeroclaw-labs/zeroclaw/pull/10935) Streaming guard drops prose quoting tool-result objects | Open PR | — |
| **High risk** | [#10938](https://github.com/zeroclaw-labs/zeroclaw/pull/10938) Tool attachment detection via text scanning (fragile) | Open PR | — |
| **S3** (minor) | [#11256](https://github.com/zeroclaw-labs/zeroclaw/issues/11256) `initial_prompt` documented but never sent to Whisper providers | Open | — |

**Note:** Multiple high-risk bugs have active fix PRs (#11234, #11220, #11232, #11098, #11255-linked), indicating rapid response. The two S0 issues are the most urgent.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signal for Next Version |
|---------|-------|-------------------------|
| **WhatsApp image parity with Telegram** — Save inbound images to workspace, pass as `[IMAGE:<path>]` | [#11255](https://github.com/zeroclaw-labs/zeroclaw/issues/11255) | **High** — Directly addresses #10975; Telegram already works; low complexity. |
| **Verified plugin update with failure rollback** | [#10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995) | **High** — Tracker #7432 R3/Phase 2 D3; CLI gap (no `update` command). |
| **zerocode TUI: unified plugin/capability catalog pane** | [#8907](https://github.com/zeroclaw-labs/zeroclaw/issues/8907) | **Medium** — Blocked on catalog API alignment; prerequisites #8908/#8909 merged. |
| **Cron declarative job authoring via config API** | [#11237](https://github.com/zeroclaw-labs/zeroclaw/issues/11237) | **High** — S1 blocker; needed for v0.8.6 config/gateway work. |
| **RPC parity: cron, memory, skills, personality, quickstart** | [#11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176) | **In progress** — P4 of v0.9.0 core-parity lane (#11001); closes cron pre-approval bypass. |
| **RPC wire contract extraction (`zeroclaw-rpc-proto`) + OpenRPC drift check** | [#11165](https://github.com/zeroclaw-labs/zeroclaw/pull/11165) | **In progress** — Foundation for v0.9.0 gateway separation. |
| **In-process gateway seam + `zeroclaw-rpc-client`** | [#11186](https://github.com/zeroclaw-labs/zeroclaw/pull/11186) | **In progress** — Stacked on #11165; enables gateway/runtime split. |

**Prediction:** Next version (v0.8.6) will likely include: plugin update/rollback (#10995), cron declarative fixes (#9770, #11237), WhatsApp image fix (#11255 → #10975), and session ownership hardening (#10412, #11234). v0.9.0 gateway separation depends on #11165/#11185/#11186 merging.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **WhatsApp multimodal broken** | #10975: "inbound image delivered as literal `[Image]` — vision unusable" | Agents cannot process images on WhatsApp; forces fallback to text-only. |
| **Config-driven cron authoring blocked** | #11237: "workflow blocked for authoring a config-owned scheduled job through the config API" | Dashboard/editor unusable for scheduled jobs; manual TOML edits required. |
| **Cron updates silently lose changes** | #9770: "six columns affected: command, name, expression/schedule, session_target, allowed_tools, uses_memory" | Operators unaware changes discarded; reliability risk for scheduled automation. |
| **Plugin management lacks update/rollback** | #10995: "no update command; re-running installation not a defined update/rollback contract" | Production plugin updates risky; no atomic rollback on failure. |
| **Session ownership leaks across principals** | #11126, #11127: revoked admins retain access; non-admins read others' history | **Security/compliance risk** for multi-tenant or team deployments. |
| **Lark/Feishu rich-text images dropped** | #11267: "post messages with images silently dropped before reaching agent" | Bot ignores image-containing posts on Lark/Feishu. |
| **Transcription `initial_prompt` ignored** | #11256: "accepted by config, documented, but no provider sends it" | Users cannot bias Whisper transcription (e.g., for terminology). |

**Satisfaction signals:** Contributors actively file detailed bugs with component/tags (e.g., `channel:whatsapp`, `runtime:wasm`, `domain:security`), suggesting engaged technical users. No explicit positive feedback in data, but rapid PR response to issues indicates maintainer attentiveness.

---

## 8. Backlog Watch — Long

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*