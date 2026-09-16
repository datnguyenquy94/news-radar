# OpenClaw Ecosystem Digest 2026-09-16

> Issues: 175 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-16 04:29 UTC

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

# OpenClaw Project Digest — 2026-09-16

---

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 675 total items updated in the last 24 hours (175 issues, 500 PRs). The project is in a **heavy stabilization phase** — no new releases today, but 184 PRs merged/closed indicates rapid iteration on fixes. The issue backlog reveals systemic stability problems: memory leaks (gateway RSS growing to 15.5 GB), zombie process accumulation, upgrade failures blocking users on 2026.9.x, and concurrent session dispatch bugs causing duplicate replies. Maintainer throughput is high (many PRs marked "ready for maintainer look"), but several P0/P1 bugs lack fix PRs, suggesting triage bandwidth constraints.

---

## 2. Releases

**No new releases today.** The latest stable appears to be `2026.9.4` (referenced in upgrade-failure issues). Users report repeated failures upgrading from `2026.9.3 → 2026.9.4` due to schema-17 candidate state conflicts ([#144739](https://github.com/openclaw/openclaw/issues/144739)) and Doctor detecting orphan foreign keys without recovery paths ([#142586](https://github.com/openclaw/openclaw/issues/142586)). A `2026.9.3` runtime-verification failure on Windows is also documented ([#148545](https://github.com/openclaw/openclaw/issues/148545)).

---

## 3. Project Progress (Merged/Closed PRs Today)

**184 PRs merged/closed** — key themes:

| PR | Area | Impact |
|----|------|--------|
| [#149388](https://github.com/openclaw/openclaw/pull/149388) | Gateway admission | Avoids full session scans during startup; reduces latency for large installations |
| [#149308](https://github.com/openclaw/openclaw/pull/149308) | Doctor/Repair | Preserves state across repeated repairs; prevents overwrite of newer session edits |
| [#149537](https://github.com/openclaw/openclaw/pull/149537) | Sessions | Reduces repeated SQLite reads during compaction/goal edits/parent forks |
| [#149554](https://github.com/openclaw/openclaw/pull/149554) | SQLite | Preserves original DB open errors after rollback (diagnosability) |
| [#149458](https://github.com/openclaw/openclaw/pull/149458) | Mattermost | Fixes reaction removal false failure when 200 response body truncated |
| [#148623](https://github.com/openclaw/openclaw/pull/148623) | Projects | Moves project registry removal to state worker (off event loop) |
| [#99105](https://github.com/openclaw/openclaw/pull/99105) | Memory | Allows concurrent session recalls within shared limit |
| [#135648](https://github.com/openclaw/openclaw/pull/135648) | Browser | Perf: prepares profile defaults in one map (reduces allocations) |
| [#149522](https://github.com/openclaw/openclaw/pull/149522) | CI/Release | Unblocks Blacksmith CI, restores MCP tool discovery |

**Net signal:** Heavy focus on **gateway event-loop offloading**, **session/DB read reduction**, and **upgrade/repair reliability** — directly addressing the top user pain points.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Bug (P1) | 30 | **Zombie process leak** from hook/tool children — degrades runtime, needs reaping fix |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Bug (P1) | 25 | **Gateway memory leak** (350 MB → 15.5 GB over days) — OOM kills, launchd restart loops |
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | Bug (P1) | 19 | **Concurrent runs for same session lane** — duplicate replies under load |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) | Bug (P1) | 11 | **memory-core reindex lock** acquired on every start, never released — 19 GB orphaned temp DBs |
| [#145929](https://github.com/openclaw/openclaw/issues/145929) | Bug (P0) | 8 | **Auth logout/write fails** with "lock may be busy" after interrupted self-update |
| [#144739](https://github.com/openclaw/openclaw/issues/144739) | Bug (P0) | 7 | **Update 2026.9.3→9.4 runs old version against schema-17** — migration broken |
| [#134925](https://github.com/openclaw/openclaw/issues/134925) | Bug (P1) | 7 | **Gateway main thread 100% CPU on ARM64/Pi** every agent turn |
| [#108395](https://github.com/openclaw/openclaw/issues/108395) | Bug (P1) | 6 | **Assistant generates fake "Human: [timestamp]" messages** — enables self-authorization of live actions |
| [#134616](https://github.com/openclaw/openclaw/issues/134616) | Bug (P0) | 5 | **Upgrade 2026.7.1→8.1 completely breaks** installation and major features |
| [#142586](https://github.com/openclaw/openclaw/issues/142586) | Bug (P0) | 5 | **Doctor detects orphan FKs** but provides no supported recovery path |

**Underlying needs:** Users are blocked by **upgrade reliability**, **resource leaks** (memory, processes, DB locks), and **concurrency correctness** in multi-agent deployments. The "silver shellfish" (🦪) and "platinum hermit" (🐚) issue ratings mark these as high-impact, hard-to-fix bugs.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0 — Release Blocker** | [#145929](https://github.com/openclaw/openclaw/issues/145929) Auth logout/write permanently fails after interrupted self-update | Open | No |
| **P0 — Release Blocker** | [#144739](https://github.com/openclaw/openclaw/issues/144739) Update runs 2026.9.3 against schema-17 candidate state | Open | No |
| **P0 — Release Blocker** | [#134616](https://github.com/openclaw/openclaw/issues/134616) Upgrade 2026.7.1→8.1 breaks installation | Open | No |
| **P0 — Release Blocker** | [#142586](https://github.com/openclaw/openclaw/issues/142586) Doctor orphan FKs, no recovery path | Open | No |
| **P0 — Release Blocker** | [#148545](https://github.com/openclaw/openclaw/issues/148545) Update failure: runtime-verification-failed (Windows) | Open | No |
| **P0 — Release Blocker** | [#108520](https://github.com/openclaw/openclaw/issues/108520) iOS app update breaks Talk Mode & chat | Open | No |
| **P1 — Critical** | [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway memory leak → 15.5 GB RSS → OOM kills | Open | No |
| **P1 — Critical** | [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie child process accumulation (hooks, bash, codex) | Open | No |
| **P1 — Critical** | [#111897](https://github.com/openclaw/openclaw/issues/111897) Concurrent runs for same session lane → duplicate replies | Open | No |
| **P1 — Critical** | [#136311](https://github.com/openclaw/openclaw/issues/136311) memory-core reindex lock never released, 19 GB orphaned DBs | Open | No |
| **P1 — Critical** | [#134925](https://github.com/openclaw/openclaw/issues/134925) Gateway 100% CPU on ARM64/Pi every agent turn | Open | No |
| **P1 — Critical** | [#118839](https://github.com/openclaw/openclaw/issues/118839) Restart recovery claim changed before agent adoption (regression) | Open | No |
| **P1 — Security** | [#108395](https://github.com/openclaw/openclaw/issues/108395) Assistant generates fake "Human:" messages → self-authorization | Open | No |
| **P1 — Security** | [#123009](https://github.com/openclaw/openclaw/issues/123009) Codex subscription recheck blocks every 5 min | Open | No |

**Observation:** 10+ P0/P1 bugs have **no associated fix PR** — maintainer review bandwidth appears to be the bottleneck.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals |
|---------|-------|---------|
| **Gateway-lite mode** (no AI harness) | [#86881](https://github.com/openclaw/openclaw/issues/86881) | Closed but shows demand for deterministic, lightweight deployments |
| **One-way A2A dispatch** (no reply-back ping-pong) | [#44309](https://github.com/openclaw/openclaw/issues/44309) | Stale, but reflects need for fire-and-forget agent handoffs |
| **Cron auto-retry** (`--retry-count`, `--retry-delay`) | [#49740](https://github.com/openclaw/openclaw/issues/49740) | Stale; daily crons failing due to provider overload |
| **Plugin Circuit Breaker** | [#41899](https://github.com/openclaw/openclaw/issues/41899) | Stale; single misbehaving plugin degrades entire gateway |
| **Dedicated browser lane** / per-channel routing | [#41120](https://github.com/openclaw/openclaw/issues/41120) | Stale; browser workflows starve all other channels |
| **Skill-Driven Plugin Context Visibility** | [#55071](https://github.com/openclaw/openclaw/issues/55071) | Closed; 84 extensions → schema bloat in every agent context |
| **Safe context-engine control contract** for external control planes | [#117984](https://github.com/openclaw/openclaw/issues/117984) | New; multi-tenant provisioning need |

**Predicted next-version candidates:** Gateway-lite mode, cron retry, and plugin circuit breaker align with current stabilization work (offloading, reliability). The A2A dispatch mode may arrive once session-state bugs settle.

---

## 7. User Feedback Summary

**Pain Points (from issues):**
- **Upgrades are breaking production** — multiple users cannot move past 2026.7.x or 2026.9.3 ([#134616](https://github.com/openclaw/openclaw/issues/134616), [#144739](https://github.com/openclaw/openclaw/issues/144739), [#148545](https://github.com/openclaw/openclaw/issues/148545))
- **Resource leaks make long-running deployments untenable** — memory (15.5 GB), zombies, orphaned temp DBs (19 GB), CPU spikes on ARM ([#91588](https://github.com/openclaw/openclaw/issues/91588), [#97616](https://github.com/openclaw/openclaw/issues/97616), [#136311](https://github.com/openclaw/openclaw/issues/136311), [#134925](https://github.com/openclaw/openclaw/issues/134925))
- **Concurrency bugs cause data corruption** — duplicate replies, session state conflicts, auth lock contention ([#111897](https://github.com/openclaw/openclaw/issues/111897), [#145929](https://github.com/openclaw/openclaw/issues/145929))
- **Security-adjacent behavior** — model hallucinates "Human:" messages that re-enter context ([#108395](https://github.com/openclaw/openclaw/issues/108395))
- **Mobile/iOS breakage** — auto-update broke Talk Mode and chat entirely ([#108520](https://github.com/openclaw/openclaw/issues/108520))

**Positive signals:**
- High PR merge rate shows maintainers shipping fixes rapidly
- Off-main refactors (state worker, session-list off event loop) address root causes
- Community provides detailed repros, logs, and environment data

---

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway memory leak | 99 days | Open, P1, no fix PR | **Core stability** — affects all long-running gateways |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process leak | 79 days | Open, P1, no fix PR | **Core stability** — degrades all hook/tool usage over time |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) memory-core reindex lock | 14 days | Open, P1, no fix PR | **Data integrity** — 19 GB orphaned DBs, index unrebuildable |
| [#108395](https://github.com/openclaw/openclaw/issues/108395) Fake "Human:" messages | 63 days | Open, P1, security | **Security/Trust** — model can self-authorize actions |
| [#41899](https://github.com/openclaw/openclaw/issues/41899) Plugin Circuit Breaker | 190 days | Open, P3, stale | **Architecture** — needed for plugin ecosystem scalability |
| [#41120](https://github.com/openclaw/openclaw/issues/41120) Browser lane / per-channel routing | 191 days | Open, P2, stale | **Scalability** — browser workloads starve other channels |
| [#76247](https://github.com/openclaw/openclaw/issues/76247) Dispatch landing ACK telemetry | 137 days | Open, P3, stale | **Observability** — multi-agent deployments blind to receiver entry |
| [#86881](https://github.com/openclaw/openclaw/issues/86881) Gateway-lite mode | 113 days | Closed (needs product decision) | **Product direction** — lightweight deployments blocked |

**Recommendation:** Prioritize **#91588, #97616, #136311, #108395** for immediate maintainer triage — they block production stability and security. The stale feature requests (#4189

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-16)

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape shows **bimodal activity**: a cluster of 5 projects (OpenClaw, NanoBot, Hermes, NanoClaw, ZeroClaw, CoPaw) driving high-velocity iteration with daily merges and multi-PR releases, while 5 others (PicoClaw, LobsterAI, Moltis, ZeptoClaw, NullClaw/IronClaw) operate in maintenance or stabilization modes. **No project is dormant** — even the quietest (ZeptoClaw) runs automated dependency updates. The ecosystem is converging on **three shared hard problems**: upgrade/release reliability, resource-leak elimination in long-running gateways, and multi-agent orchestration (A2A/handoff). Projects shipping native terminals (NanoBot, Hermes, CoPaw) and multi-tenant "Hub" modes (CoPaw, ZeroClaw) signal a shift from single-user CLI tools to **team-ready, multi-surface platforms**.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release Today | Health Score |
|---------|--------------|-----------|---------------|---------------|--------------|
| **OpenClaw** | 175 | 500 | 184 | ❌ (2026.9.4 latest) | 🟡 High activity, stability debt |
| **NanoBot** | 3 | 20 (9 open) | 11 | ✅ **v0.3.5** (TUI + WebUI) | 🟢 Healthy |
| **Hermes Agent** | 11 | 50 | 13 | ❌ (v0.21.0 Aug 31) | 🟢 High velocity |
| **PicoClaw** | 2 | 3 | 1 | ❌ | 🟡 Bug-fix accumulation |
| **NanoClaw** | 5 | 40 | 21 | ❌ | 🟢 Good |
| **LobsterAI** | 3 | 28 | 18 | ❌ (release PR merged, no artifact) | 🟢 Stabilizing |
| **Moltis** | 1 | 1 | 0 | ❌ | 🔴 Low activity |
| **CoPaw/QwenPaw** | 15 | 50 | 26 | ❌ (v2.2.0 upcoming) | 🟢 High velocity |
| **ZeptoClaw** | 0 | 18 (bot) | 0 | ❌ | 🔴 Bot-only maintenance |
| **ZeroClaw** | 10 | 50 | 9 | ❌ (v0.8.2 latest) | 🟢 High velocity |
| **NullClaw** | 0 | 0 | 0 | ❌ | ⚫ Inactive |
| **IronClaw** | 0 | 0 | 0 | ❌ | ⚫ Inactive |

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale of iteration**: 675 items/24h dwarfs all others (next: CoPaw/ZeroClaw/Hermes at ~50-65)
- **Core infrastructure depth**: Gateway admission control, session compaction, SQLite rollback diagnostics, Doctor/Repair tooling — features peers *consume* rather than build
- **Ecosystem anchor**: LobsterAI's 10+ compatibility PRs today prove OpenClaw is the upstream dependency for forks

**Technical Approach Differences:**
| Dimension | OpenClaw | NanoBot / Hermes / CoPaw | ZeroClaw / NanoClaw |
|-----------|----------|---------------------------|---------------------|
| **Architecture** | Monolithic gateway + plugin system | Modular core + channel adapters + native TUI | WASM plugin sandbox + A2A protocol |
| **Session Model** | SQLite + memory-core reindex | File-based transcript + compaction | Capability-gated, model-window-anchored |
| **Multi-Agent** | Lane-based dispatch (buggy) | Sub-agent spawn (CoPaw), Advisor Mode | A2A outbound client (RFC accepted) |
| **Release Cadence** | Date-based (2026.9.x), currently blocked | Semantic (v0.3.5), shipping TUI today | Accumulating for next cut |

**Community Size Signals:**
- OpenClaw: 30+ comments on top bugs, 10+ P0 issues with "silver shellfish" (🦪) ratings — indicates **large production deployments hitting scale limits**
- NanoBot/CoPaw: 20-27 comment discussions on *features* (Hub, Dream limits) — indicates **active co-design with users**
- ZeroClaw: RFCs with 11 comments (A2A) — **architectural governance** emerging

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Upgrade/Release Reliability** | OpenClaw (5 P0 upgrade bugs), LobsterAI (post-upgrade stabilization), NanoClaw (update cutover deadlock #3828), Hermes (Windows installer fixes) | Schema migration safety, rollback verification, atomic cutover, Doctor/Repair automation |
| **Resource Leak Elimination** | OpenClaw (15.5 GB gateway RSS, 19 GB orphaned DBs, zombie processes), NanoClaw (WebSocket idle 10-min hangs), ZeroClaw (rumqttc transitive CVEs) | Memory profiling, process reaping, connection pooling, dependency hardening |
| **Multi-Agent Orchestration** | ZeroClaw (A2ATool RFC), CoPaw (Hub multi-tenant, sub-agent), NanoClaw (handoff ledger, mission control), OpenClaw (lane dispatch bugs) | Agent discovery, contract negotiation, handoff durability, quota/governance |
| **Native Terminal / Multi-Surface** | NanoBot (v0.3.5 TUI), Hermes (Desktop app), CoPaw (Desktop workbench, voice), ZeroClaw (OSC terminal reporting) | Bundled TUI, cross-surface session continuity, voice channel, mobile WebUI |
| **Plugin/Tool Sandbox & Verification** | ZeroClaw (WASM install-time verify, egress governance), OpenClaw (circuit breaker requested), CoPaw (MCP integration fixes) | ABI verification, capability gating, supply-chain security, runtime isolation |
| **Observability & Diagnostics** | NanoClaw (OTel tracing skill), Hermes (`hermes doctor`), ZeroClaw (CI flake fixes), LobsterAI (error card restoration) | Structured logs, cost/token tracing, install diagnostics, compatibility scanners |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architectural Signature |
|---------|------------------------|-------------|-------------------------|
| **OpenClaw** | **Reference implementation** — gateway, session, plugin, channel primitives | Platform builders, fork maintainers | Monolithic Go gateway + SQLite + plugin RPC |
| **NanoBot** | **One agent, every surface** — bundled TUI + WebUI + chat channels in single `pip install` | End-users wanting zero-config multi-device | Python core, native Rust TUI, channel adapters |
| **Hermes Agent** | **Desktop-first polish** — profile pills, `hermes doctor`, Intel macOS gap, TTS/xAI | Power users on macOS/Linux/Windows desktops | Electron + Go backend, per-user memory partition |
| **CoPaw/QwenPaw** | **Enterprise/Team Hub** — RBAC, shared skills, org model gateway, audit logs (2.2.0) | Teams, orgs, Chinese-market enterprise | Multi-tenant gateway, Advisor Mode, voice, artifacts |
| **ZeroClaw** | **WASM plugin sandbox + A2A protocol** — capability-gated hardware, outbound agent calls | Edge/robotics, multi-agent researchers | Rust, WASI components, A2A client/server, PostgreSQL backend |
| **NanoClaw** | **Durable communication fabric** — handoff ledger, Slack A2A, email/voice channels, OTel | Production multi-agent deployments | Go, append-only ledger, channel adapters as first-class |
| **LobsterAI** | **OpenClaw distro with UX layer** — cowork, skills, team config, ad-toggle | Chinese-market teams, OpenClaw consumers | TypeScript/Electron frontend + patched OpenClaw runtime |
| **PicoClaw** | **Lightweight config-driven** — QQ/Feishu channel focus, sensitive-data caching | Chinese IM integrations, resource-constrained | Go, channel-first, config-as-code |
| **Moltis** | **OpenAI-compatible gateway** — custom endpoint parameter passthrough | Users of vLLM/Ollama/TGI with vendor extensions | Rust, minimal gateway, provider flexibility |
| **ZeptoClaw** | **Documentation-driven** — Astro/Starlight sites, automated deps | N/A (appears archival or pre-launch) | Rust + JS docs, CI-heavy |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (Daily Merges, Feature Velocity)** | NanoBot, CoPaw, ZeroClaw, NanoClaw, Hermes | Releases or major PR clusters weekly; RFC→implementation visible; first-time contributors landing fixes |
| **Stabilizing / Bug-Fix Heavy** | OpenClaw, LobsterAI, PicoClaw | High P0/P1 bug counts; merge rate focused on fixes not features; release blockers unpicked |
| **Maintenance / Sporadic** | Moltis, ZeptoClaw | Only bot activity or single PRs; no community discussion; no release cadence |
| **Inactive** | NullClaw, IronClaw | Zero 24h activity |

**Maturity Markers:**
- **Shipping native binaries**: NanoBot (v0.3.5), Hermes (Desktop), CoPaw (Desktop) — **user-facing product maturity**
- **Governance processes**: ZeroClaw (RFCs for A2A, WASI hardware), OpenClaw (🦪/🐚 severity labels) — **architectural maturity**
- **Enterprise features**: CoPaw (Hub RBAC, audit), ZeroClaw (plugin verification, PostgreSQL), NanoClaw (handoff ledger, OTel) — **production readiness**

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|-------------------------|-----------------|
| **Terminal is the new WebUI** | NanoBot (bundled TUI), Hermes (Desktop), ZeroClaw (OSC reporting), CoPaw (workbench) | **Invest in native TUI** — users expect `agent` command to *just work* without browser |
| **Multi-tenancy > Single-user** | CoPaw Hub (27-comment RFC), ZeroClaw (A2A, org gateway), NanoClaw (handoff ledger), LobsterAI (team config) | **Design for shared gateways, RBAC, audit** from day one — retrofit is painful |
| **A2A/Handoff as Standard** | ZeroClaw (RFC accepted), NanoClaw (merged ledger), CoPaw (sub-agent), OpenClaw (lane bugs) | **Implement A2A client/server** — becoming table stakes for agent platforms |
| **WASM Plugins for Safety** | ZeroClaw (install-time verify, capability gating), OpenClaw (circuit breaker requested) | **Adopt WASI component model** — solves supply-chain + sandbox + hardware access |
| **Upgrade Reliability = Trust** | OpenClaw (5 P0 upgrade bugs), LobsterAI (10 compat PRs), NanoClaw (cutover deadlock) | **Invest in Doctor/Repair, schema versioning, atomic cutover** — users abandon projects that break on update |
| **Observability as Product Feature** | NanoClaw (OTel skill), Hermes (`hermes doctor`), ZeroClaw (CI flake dashboards) | **Expose cost, tokens, latency, errors to users** — not just logs; build `/usage` and `doctor` commands |
| **Channel Breadth = Adoption** | NanoBot (QQ, Feishu, Email, Mattermost), CoPaw (WeChat, Mail), NanoClaw (Proton, AgentMail, Voice), PicoClaw (QQ) | **Support local IM platforms** — Western projects ignore QQ/Feishu/WeChat at peril in APAC |

---

## Summary for Decision-Makers

- **If building a platform**: Study **OpenClaw's gateway internals** but avoid its release process; adopt **ZeroClaw's WASM/A2A architecture** for extensibility.
- **If shipping a user product**: Copy **NanoBot's bundled TUI+WebUI distribution** and **CoPaw's Hub multi-tenancy** — these are winning UX patterns.
- **If deploying in production**: Prioritize projects with **Doctor/Repair tooling** (OpenClaw, Hermes) and **upgrade atomicity** (NanoClaw, ZeroClaw) — OpenClaw's current P0 bugs show the cost of neglect.
- **If targeting enterprise/APAC**: **CoPaw** and **PicoClaw** lead on local IM integration and team governance — Western projects have a gap here.
- **If researching multi-agent**: **ZeroClaw's A2ATool** and **NanoClaw's handoff ledger** are the only production-grade implementations; others are at RFC/bug-fix stage.

The ecosystem is **consolidating around Rust/Go cores + WASM plugins + native terminals + A2A protocol**. Projects not investing in these four pillars risk becoming niche forks.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-16

---

## 1. Today's Overview

NanoBot shipped **v0.3.5** today, introducing a native terminal client (`nanobot`) alongside the existing browser Workbench (`nanobot webui`) — delivering on the "one agent, more places to work" vision. The release bundles the TUI into platform wheels, removing the first-run GitHub download and Bun dependency. Development velocity remains high: **11 PRs merged/closed** and **9 open PRs** updated in the last 24 hours, covering provider fixes, WebUI polish, Dream iteration limits, session recovery, and new provider integrations. Three active issues surface a Dream runaway-loop regression, QQ channel compaction noise, and a release announcement. Overall project health is strong — frequent releases, rapid PR turnover, and cross-platform packaging investment signal a maturing, user-facing product.

---

## 2. Releases

### v0.3.5 — "Workbench to the Terminal" (2026-09-16)
| Aspect | Details |
|--------|---------|
| **Headline** | Native terminal client (`nanobot`) + browser Workbench (`nanobot webui`) sharing the same agent core |
| **Key Changes** | • `nanobot` CLI launches the native TUI<br>• `nanobot webui` launches the browser Workbench<br>• TUI bundled in platform wheels (Linux/macOS/Windows, arm64/x64) — no first-run download, no Bun required<br>• Conversation continuity across terminal, browser, and chat apps |
| **Breaking Changes** | None documented |
| **Migration Notes** | Existing users can `pip install -U nanobot` and immediately run `nanobot` or `nanobot webui`. No config changes required. |
| **Links** | [Release v0.3.5](https://github.com/HKUDS/nanobot/releases/tag/v0.3.5) • [PR #5785: chore(release): prepare v0.3.5](https://github.com/HKUDS/nanobot/pull/5785) • [PR #5787: build: bundle native TUI in platform wheels](https://github.com/HKUDS/nanobot/pull/5787) • [PR #5789: docs: refresh README WebUI screenshots](https://github.com/HKUDS/nanobot/pull/5789) |

---

## 3. Project Progress — Merged/Closed PRs Today (11)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5782](https://github.com/HKUDS/nanobot/pull/5782) | **Fix (Dream)** | Restores `agents.defaults.dream.maxIterations` (default 15) and applies it to manual/scheduled Dream runs, replacing the global 200-iteration cap | **High** — Stops runaway 25–111 min consolidation loops (see Issue #5781) |
| [#5783](https://github.com/HKUDS/nanobot/pull/5783) | **Fix (Providers)** | Preserves assistant `content` alongside `tool_calls` in history; removes deprecated compatibility setting | **Medium** — Fixes provider replay fidelity (Mistral, OpenAI-compatible) |
| [#5775](https://github.com/HKUDS/nanobot/pull/5775) | **Fix (Tools)** | Scopes `read_file` deduplication to current model context; prevents stale stubs after compaction/trimming | **Medium** — Eliminates false "unchanged file" returns |
| [#5778](https://github.com/HKUDS/nanobot/pull/5778) | **Fix (Email/Security)** | Hardens inbound email sender verification: requires configured service, parses auth results structurally, checks authenticated identity vs visible domain | **High** — Security hardening for email channel |
| [#5768](https://github.com/HKUDS/nanobot/pull/5768) | **Fix (Feishu/Lark)** | Uses `/page/cli` verification URL for QR onboarding; resolves "Link expired" on `nanobot channels login feishu` | **High** — Unblocks Feishu channel login |
| [#5697](https://github.com/HKUDS/nanobot/pull/5697) | **Fix (QQ/Security)** | Validates attachment URLs before download, normalizes protocol-relative URLs, disables redirects, accepts only HTTP 200 | **High** — SSRF protection for QQ inbound attachments |
| [#5757](https://github.com/HKUDS/nanobot/pull/5757) | **Fix (WebUI/Session)** | Fixes `search_sessions` / filtered `read_session` missing older messages in long conversations by paging through transcript | **Medium** — Restores full history search |
| [#5777](https://github.com/HKUDS/nanobot/pull/5777) | **Fix (WebUI/Mobile)** | Prevents mobile drawer from stealing focus to search button; focuses dialog container instead | **Medium** — Mobile UX polish |
| [#5786](https://github.com/HKUDS/nanobot/pull/5786) | **Refactor (WebUI)** | Animates segmented control indicator with overshoot transition, reduced-motion support; reused for theme selector | **Low** — UI polish |
| [#5787](https://github.com/HKUDS/nanobot/pull/5787) | **Build** | Bundles native TUI in 5 platform wheels; validates checksums, arch, Python metadata | **High** — Enables zero-dependency TUI install |
| [#5785](https://github.com/HKUDS/nanobot/pull/5785) | **Chore (Release)** | Prepares v0.3.5 version bump, release checklist, TUI packaging pipeline | **Process** — Release engineering |

**Net advancement**: Dream loop regression fixed, Feishu/QQ channel blockers resolved, email security hardened, TUI distribution modernized, WebUI history search restored, mobile UX improved.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| **[Issue #5781](https://github.com/HKUDS/nanobot/issues/5781)** — Dream runs loop 1–2h re-reading same files; `dream.maxIterations` deprecated/ignored | 3 comments, created 2026-09-15, updated 2026-09-16 | **Reliability**: Scheduled consolidation must be bounded and predictable. Users expect config knobs to work. Fix shipped in [#5782](https://github.com/HKUDS/nanobot/pull/5782). |
| **[Issue #5784](https://github.com/HKUDS/nanobot/issues/5784)** — QQ channel: auto-compaction notices appear as ordinary chat messages (no collapse/hide) | 1 comment, created 2026-09-15 | **Channel UX**: Background lifecycle events shouldn't pollute user-facing chat. Related to #5719. Fix PR [#5780](https://github.com/HKUDS/nanobot/pull/5780) makes autocompaction invisible. |
| **[Issue #5788](https://github.com/HKUDS/nanobot/issues/5788)** — Release announcement for v0.3.5 | 0 comments, created 2026-09-16 | **Visibility**: Community celebration / release tracking. |

**Signal**: Users are exercising multi-channel (QQ, Feishu, Email) and long-running agent features (Dream consolidation) in production. Channel noise and runaway loops are the top friction points.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#5781](https://github.com/HKUDS/nanobot/issues/5781) | Dream consolidation loops 25–111 min (up to 200 tool calls), re-reading same 2 files repeatedly. Config `dream.maxIterations` ignored; global 200 cap applies. | [#5782](https://github.com/HKUDS/nanobot/pull/5782) **MERGED** — Restores dedicated limit (default 15) |
| **High** | [#5784](https://github.com/HKUDS/nanobot/issues/5784) | QQ auto-compaction sends "Compressing context…" / "Context compacted" as visible chat messages; no collapse mechanism. | [#5780](https://github.com/HKUDS/nanobot/pull/5780) **OPEN** — Hides autocompaction notices, retains for `/compact` |
| **Medium** | (Implied by #5775) | `read_file` returns stale "unchanged" stub after original output removed by compaction/trimming. | [#5775](https://github.com/HKUDS/nanobot/pull/5775) **MERGED** |
| **Medium** | (Implied by #5757) | WebUI session search misses older messages in long conversations (single-page fetch). | [#5757](https://github.com/HKUDS/nanobot/pull/5757) **MERGED** |
| **Low** | (Implied by #5777) | Mobile drawer steals focus to search button on open. | [#5777](https://github.com/HKUDS/nanobot/pull/5777) **OPEN** |

**Stability note**: All critical/high bugs reported today have fixes either merged or open — rapid response cycle.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Signed direct-delivery webhook** for deterministic notifications (CI, monitoring, billing) bypassing agent loop | [PR #5652](https://github.com/HKUDS/nanobot/pull/5652) (open, 12 days, conflict) | **High** — Security-reviewed, addresses real integration need |
| **aimlapi.com as built-in OpenAI-compatible provider** (1000+ models, 400k users) | [PR #5666](https://github.com/HKUDS/nanobot/pull/5666) (open, 12 days) | **High** — Partner-driven, implementation complete, partnership offer |
| **`copy_file` / `move_file` filesystem tools** (currently only read/write/edit/list) | [PR #5626](https://github.com/HKUDS/nanobot/pull/5626) (open, 15 days, conflict) | **Medium** — Clear gap, but conflicts need resolution |
| **Concurrent session file-write serialization** (fixes #4798) | [PR #5779](https://github.com/HKUDS/nanobot/pull/5779) (open, 1 day, conflict) | **High** — Data-loss bug, active |
| **Stable per-invocation tool context** (exposes `tool_call_id` to tools) | [PR #5750](https://github.com/HKUDS/nanobot/pull/5750) (open, 4 days) | **Medium** — Enables better tool observability |
| **Provider picker search/filter in WebUI Settings** | [PR #5776](https://github.com/HKUDS/nanobot/pull/5776) (open, 1 day) | **High** — UX polish, trivial merge |
| **Partial tool progress persistence at batch boundaries** (recovery) | [PR #5748](https://github.com/HKUDS/nanobot/pull/5748) (open, 4 days) | **Medium** — Resilience improvement |

**Prediction**: v0.3.6 will likely include the webhook gateway, aimlapi provider, file copy/move tools, and concurrent write fix — all high-value, near-ready PRs.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Dream runaway loops** waste compute/time; config ignored | Issue #5781: "25–111 minutes each, up to ~200 tool calls" | High — Scheduled consolidations become runaway jobs |
| **Channel noise**: auto-compaction leaks into QQ chat | Issue #5784: "same noise class as #5719" | Medium — Pollutes user conversation history |
| **Feishu QR login broken** ("Link expired" instantly) | PR #5768: "could never complete for us on v0.3.0" | High — Blocks channel onboarding |
| **WebUI history search incomplete** for long conversations | PR #5757: "silently miss older messages" | Medium — Power users lose access to context |
| **Mobile drawer focus hijack** on phone | PR #5777: "stealing focus to search button" | Low — Mobile UX annoyance |
| **Email sender spoofing risk** | PR #5778: hardening authentication verification | High (security) — Proactive hardening |

**Positive signals**: Release announcement (#5788) shows community engagement. TUI bundling (#5787) removes install friction — a frequent historical complaint.

---

## 8. Backlog Watch — Stale/High-Value Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **[PR #5652](https://github.com/HKUDS/nanobot/pull/5652)** — Signed direct-delivery webhook | 12 days | Open, conflict | Enables deterministic server-to-bot notifications without model calls; security-sensitive, needs review |
| **[PR #5666](https://github.com/HKUDS/nanobot/pull/5666)** — aimlapi.com provider | 12 days | Open | Partner integration, 1000+ models, partnership offer; expands provider ecosystem |
| **[PR #5626](https://github.com/HKUDS/nanobot/pull/5626)** — `copy_file` / `move_file` tools | 15 days | Open, conflict | Fundamental filesystem gap; model currently chains read→write for moves |
| **[PR #5697](https://github.com/HKUDS/nanobot/pull/5697)** — QQ SSRF protection | 8 days | **MERGED today** | ✅ Resolved |
| **[PR #5748](https://github.com/HKUDS/nanobot/pull/5748)** — Partial tool progress persistence | 4 days | Open | Crash recovery: prevents completed side-effects from looking unexecuted |
| **[PR #5750](https://github.com/HKUDS/nanobot/pull/5750)** — Stable per-invocation tool context | 4 days | Open | Foundation for tool observability/debugging |
| **[PR #5779](https://github.com/HKUDS/nanobot/pull/5779)** — Serialize concurrent session file writes | 1 day | Open, conflict | Fixes #4798 (data loss/corruption on concurrent writes) — **urgent** |

**Maintainer action suggested**: Prioritize #5779 (data loss), #5652 (security-reviewed integration), #5666 (partner), and #5626 (core tooling). Conflicts on #5626/#5779 need rebasing or resolution.

---

## Summary Metrics (2026-09-16)

| Metric | Value |
|--------|-------|
| Issues updated (24h) | 3 (all open) |
| PRs updated (24h) | 20 (9 open, 11 merged/closed) |
| New release | v0.3.5 |
| Critical bugs fixed today | 1 (Dream loop) |
| High-severity bugs fixed today | 3 (Feishu login, QQ SSRF, Email auth) |
| Open PRs >7 days | 4 (#5652, #5666, #5626, #5748) |
| Community engagement | Release announcement + 2 bug reports |

**Health score**: 🟢 **Healthy** — Shipping cadence, bug fix velocity, and multi-platform investment all trending positive. Backlog contains high-value items ready for merge.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-16

## 1. Today's Overview
Hermes Agent shows **high velocity** with 50 PRs and 11 issues updated in the last 24 hours. The project is in active maintenance mode: 13 PRs merged/closed today, addressing critical bugs (session leaks, hook concurrency, credential pooling), security gaps (config write bypass), and developer tooling (`hermes doctor`, compatibility scanner). No new release shipped, but multiple fixes target v0.21.x stability. The desktop app remains a focus area with 5/11 active issues involving session lifecycle, Docker volumes, and macOS architecture support.

## 2. Releases
**No new releases today.** Latest version remains v0.21.0 (2026-08-31). Several merged PRs (#42808, #96891, #94450, #27183, #103387, #105333, #112130) accumulate toward a likely v0.21.1 patch or v0.22.0 minor.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Area | Summary |
|----|------|---------|
| [#111217](https://github.com/NousResearch/hermes-agent/pull/111217) | Agent/Vision/OpenRouter | **Fixed**: Xiaomi MiMo models via OpenRouter now receive text summaries for image tool results instead of unsupported multipart messages. |
| [#112177](https://github.com/NousResearch/hermes-agent/pull/112177) | Desktop/Transcript | **Fixed**: Inline directives (`::name{attr="value"}`) no longer break when GFM autolinks an attribute value (e.g., email/URL in value). |
| [#42808](https://github.com/NousResearch/hermes-agent/pull/42808) | CLI/Install/Windows | **Fixed**: Removed deprecated `rcedit`; resolved electron-builder v26+ update infrastructure issues across platforms. |
| [#96891](https://github.com/NousResearch/hermes-agent/pull/96891) | Gateway/TUI/Compression | **Feature**: Over-threshold sessions now compact *when a turn settles* instead of waiting for next preflight, eliminating idle-stall perception. |
| [#94450](https://github.com/NousResearch/hermes-agent/pull/94450) | Desktop/Profiles | **Feature**: Active profile shows pinned avatar+name pill; inactive default profile renders as ringed initial for machine-owner distinction. |
| [#27183](https://github.com/NousResearch/hermes-agent/pull/27183) | Agent/Memory | **Feature**: `MemoryStore` now supports optional `user_id` partitioning `USER.md` per platform user (`<HERMES_HOME>/memories/users/<user_id>/USER.md`). |
| [#103387](https://github.com/NousResearch/hermes-agent/pull/103387) | TTS/xAI | **Fixed**: `XAIStreamer` updated for `websockets` 14+ (`additional_headers` kwarg) and corrected session protocol handling. |
| [#105333](https://github.com/NousResearch/hermes-agent/pull/105333) | CLI/Desktop/Picker | **Fixed**: Exhausted credential pools no longer hide entire provider from `/model` and ModelPickerDialog. |
| [#112130](https://github.com/NousResearch/hermes-agent/pull/112130) | Skills/Security | **Fixed**: CommonMark fence tracking in `skills_guard` prose-link exemption — now respects matching marker length and proper close rules. |

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|-----|-----------|
| [#42199](https://github.com/NousResearch/hermes-agent/issues/42199) | Issue (closed dup) | 16 | 5 | **Intel macOS support** — ARM64-only DMG blocks 2019 Intel MacBook Pros; users need x86_64 build or universal binary. |
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | Issue (open) | 12 | 0 | **Security bypass** — `hermes config set` circumvents system-config write protection added in v0.18.0, allowing agents to disable approval layer un-gated. |
| [#98382](https://github.com/NousResearch/hermes-agent/issues/98382) | Issue (closed) | 7 | 0 | **Hook concurrency bug** — Concurrent observer-hook invocations incorrectly dropped as timeouts; fixed in [#104763](https://github.com/NousResearch/hermes-agent/pull/104763). |
| [#104691](https://github.com/NousResearch/hermes-agent/issues/104691) | Issue (open) | 5 | 0 | **Session lease corruption** — Zombie lease on torn-down lane permanently locks session ("already has a live owner"). |

**Analysis**: Top community pain points are **platform parity (Intel macOS)**, **security enforcement consistency**, and **session-state reliability** — all desktop-focused. The security issue (#59293) is a P2 with active discussion but no fix PR yet.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Status | Fix PR? | Description |
|----------|-------|--------|---------|-------------|
| **P1** | [#104691](https://github.com/NousResearch/hermes-agent/issues/104691) | Open | No | Zombie session lease on torn-down lane locks session permanently — blocks all submission. |
| **P1** | [#98382](https://github.com/NousResearch/hermes-agent/issues/98382) | Closed | Yes ([#104763](https://github.com/NousResearch/hermes-agent/pull/104763)) | Concurrent hook callbacks dropped as timeouts; fix serializes overlapping fires. |
| **P2** | [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | Open | No | **Security**: `hermes config set` bypasses system-config write protection, allowing un-gated approval-layer disable. |
| **P2** | [#107502](https://github.com/NousResearch/hermes-agent/issues/107502) | Open | No | Desktop session-control polling cannot recover ownerless runtime IDs after profile backend lifecycle. |
| **P2** | [#98005](https://github.com/NousResearch/hermes-agent/issues/98005) | Open | No | `sessions.changed` broadcast on idle `state.db` mtime churn re-mounts chat and yanks scroll (renderer fix incomplete). |
| **P2** | [#63383](https://github.com/NousResearch/hermes-agent/issues/63383) | Open | No | `docker_volumes` config ignored in Desktop (works in CLI). |
| **P2** | [#112303](https://github.com/NousResearch/hermes-agent/pull/112303) | PR Open | — | Bedrock: Claude 5-family rejects assistant turn with text after `toolUse` block — rebuild turn from content+tool_calls. |
| **P3** | [#112582](https://github.com/NousResearch/hermes-agent/issues/112582) | Open | No | STT failures masked by `AttributeError` when `subprocess.CalledProcessError.stderr/stdout` is `None`. |
| **P3** | [#112584](https://github.com/NousResearch/hermes-agent/issues/112584) | Open | Yes ([#112589](https://github.com/NousResearch/hermes-agent/pull/112589), [#112585](https://github.com/NousResearch/hermes-agent/pull/112585)) | Compatibility pointer scanner traverses excluded dirs (`node_modules`, venvs) — PRs prune traversal. |

**Critical cluster**: Session-state bugs (#104691, #107502, #98005) suggest systemic issues in desktop session lifecycle management.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Intel macOS (x86_64) Desktop build** | [#42199](https://github.com/NousResearch/hermes-agent/issues/42199) (5👍, 16 comments) | High — closed as duplicate implies canonical issue exists; strong user demand. |
| **`hermes doctor` install diagnostics** | [#85372](https://github.com/NousResearch/hermes-agent/pull/85372), [#112588](https://github.com/NousResearch/hermes-agent/pull/112588) | High — two PRs converging; #112588 adds version, install method, upstream distance, update command. |
| **Per-user `USER.md` memory isolation** | [#27183](https://github.com/NousResearch/hermes-agent/pull/27183) (merged) | **Done** — landed today; enables multi-user deployments. |
| **Ollama Cloud usage quotas in `/usage`** | [#103297](https://github.com/NousResearch/hermes-agent/pull/103297) | Medium — open PR, adds Ollama fetcher matching OpenAI/Anthropic/OpenRouter. |
| **Gateway auto-compact on turn settle** | [#96891](https://github.com/NousResearch/hermes-agent/pull/96891) (merged) | **Done** — eliminates idle-stall UX. |
| **Profile identity pills in Desktop** | [#94450](https://github.com/NousResearch/hermes-agent/pull/94450) (merged) | **Done** — visual polish for multi-profile workflows. |

**Prediction**: Next release (v0.21.1 or v0.22.0) will bundle: session-state fixes, `hermes doctor` diagnostics, Intel macOS build, Ollama usage, and the merged UX/features above.

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Intel Mac users blocked** | [#42199](https://github.com/NousResearch/hermes-agent/issues/42199): "Rosetta 2 translates Intel→ARM, not the reverse" — 5👍, 16 comments | High — excludes legacy hardware; no workaround. |
| **Session corruption / "already has a live owner"** | [#104691](https://github.com/NousResearch/hermes-agent/issues/104691), [#107502](https://github.com/NousResearch/hermes-agent/issues/107502), [#98005](https://github.com/NousResearch/hermes-agent/issues/98005) | High — permanent session lock, scroll yank, ownerless runtime IDs. |
| **Security control bypass** | [#59293](https://github.com/NousResearch/hermes-agent/issues/59293): CLI circumvents approval layer | Medium — trust boundary violation for agent-terminal interactions. |
| **Desktop ≠ CLI parity (Docker volumes)** | [#63383](https://github.com/NousResearch/hermes-agent/issues/63383): Config works in CLI, ignored in Desktop | Medium — breaks containerized workflows in Desktop. |
| **Poor error guidance on remote gateway** | [#112586](https://github.com/NousResearch/hermes-agent/issues/112586): `/browser connect` gives bare "only available when connected to local gateway" | Low — UX friction, closed same day. |

**Positive signals**: Users engage deeply (multi-comment issues), report reproducible bugs with versions/commits, and contribute fixes (e.g., #112589, #112585 from issue reporters).

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | 72 days | Open, P2, **Security** | Config write bypass undermines v0.18.0 approval layer; no fix PR despite 12 comments. |
| [#63383](https://github.com/NousResearch/hermes-agent/issues/63383) | 66 days | Open, P2 | Desktop/CLI config parity gap; blocks Docker workflows in Desktop. |
| [#98005](https://github.com/NousResearch/hermes-agent/issues/98005) | 18 days | Open, P2 | Gateway-side `sessions.changed` churn remains after renderer fix (#38015); causes scroll yank. |
| [#42199](https://github.com/NousResearch/hermes-agent/issues/42199) | 100 days | Closed (dup) | Canonical Intel macOS issue not linked; users still wait for x86_64/universal build. |
| [#85372](https://github.com/NousResearch/hermes-agent/pull/85372) | 34 days | Open PR | `hermes doctor` source checkout state — superseded by #112588 but not closed; needs merge decision. |
| [#104763](https://github.com/NousResearch/hermes-agent/pull/104763) | 9 days | Open

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-16

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 2 critical bug reports and 3 open fix PRs in the last 24 hours. No new releases were published. The project is currently addressing **two high-severity stability issues**: a data race in sensitive data caching that can cause panics, and silent API key loss during config save/load cycles. One enhancement PR (QQ channel stability) was merged, while three bug-fix/feature PRs await review. The "stale" label on all new items suggests they may have been auto-tagged due to inactivity, yet all were updated today — indicating active triage.

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be in a bug-fix accumulation phase before the next cut.

## 3. Project Progress
| PR | Status | Domain | Summary |
|----|--------|--------|---------|
| [#1780](https://github.com/sipeed/picoclaw/pull/1780) | **Merged** | channel, config | **QQ connection stability** — Added configurable reconnect intervals, retry counts, and rate limits via config/env vars with full backward compatibility. |
| [#3375](https://github.com/sipeed/picoclaw/pull/3375) | Open | config, security | **Fix: guard lazy sensitive-data cache init** — Addresses the data race in `Config.initSensitiveCache()` (see Issue #3374). |
| [#3372](https://github.com/sipeed/picoclaw/pull/3372) | Open | tools, config | **Fix: make reaction tool configurable** — Adds missing `reaction` field to `ToolsConfig` and corrects enablement logic. |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | Open | tools, web_search | **Feature: Keenable web search provider** — Adds zero-API-key web search via Keenable.ai public endpoint. |

**Net progress**: 1 enhancement delivered, 3 fixes/features pending review.

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#3374](https://github.com/sipeed/picoclaw/issues/3374) | Bug | 1 comment, updated today | **Concurrency safety** — Users hit panics from `nil` replacer in `FilterSensitiveData` under load; critical for production deployments. |
| [#3373](https://github.com/sipeed/picoclaw/issues/3373) | Bug | 1 comment, updated today | **Config integrity** — Silent data loss of API keys on round-trip breaks trust in config persistence; fallback references become dangling. |
| [#3375](https://github.com/sipeed/picoclaw/pull/3375) | PR (fix) | Updated today | Direct fix for #3374 — uses `sync.Once` correctly to serialize cache initialization. |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | PR (feat) | Updated today | **Zero-config web search** — Community demand for API-key-free search; Keenable offers public endpoint with title header. |

**Signal**: Stability/reliability (bugs #3374, #3373) dominate over new features. The fix PR #3375 is tightly coupled to the highest-impact bug.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#3374](https://github.com/sipeed/picoclaw/issues/3374) | Data race in `Config.initSensitiveCache()` → `sync.Once` defeated → two goroutines create separate caches → `SensitiveDataReplacer` returns `nil *strings.Replacer` → **panic in `FilterSensitiveData`**. | [#3375](https://github.com/sipeed/picoclaw/pull/3375) |
| **High** | [#3373](https://github.com/sipeed/picoclaw/issues/3373) | `SaveConfig` deletes all `api_keys` after the first in a `model_list` entry; leaves `fallbacks` pointing to non-existent model. **Silent data loss** on load→save round trip. | None yet |
| **Medium** | [#3372](https://github.com/sipeed/picoclaw/pull/3372) | `reaction` tool not configurable — falls through to default `enabled=true`; no `reaction` field in `ToolsConfig`. | [#3372](https://github.com/sipeed/picoclaw/pull/3372) (self-fix) |

**Ranking rationale**: #3374 causes crashes; #3373 corrupts user credentials silently; #3372 is a config usability gap.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Zero-API-key web search (Keenable)** | [PR #3370](https://github.com/sipeed/picoclaw/pull/3370) | **High** — PR is complete, addresses common friction (API key management), and extends provider ecosystem. |
| **Configurable QQ channel resilience** | [PR #1780 (merged)](https://github.com/sipeed/picoclaw/pull/1780) | **Done** — Already in main branch. |
| **Reaction tool config parity** | [PR #3372](https://github.com/sipeed/picoclaw/pull/3372) | **High** — Small, focused fix aligning with existing tool config pattern. |
| **Sensitive data cache hardening** | [Issue #3374](https://github.com/sipeed/picoclaw/issues/3374) + [PR #3375](https://github.com/sipeed/picoclaw/pull/3375) | **Critical** — Must land before next release to avoid panic reports. |

**Prediction**: Next patch will likely include #3375, #3372, and #3370; #3373 fix is still missing and may delay a clean cut.

## 7. User Feedback Summary
- **Pain points**: 
  - Production crashes from sensitive data cache race (#3374).
  - Lost API keys after config edit/save (#3373) — "silent data loss" erodes confidence.
  - Inability to disable `reaction` tool (#3372) — forces unwanted behavior.
- **Use cases**: 
  - Multi-key model configurations (implied by #3373).
  - QQ channel deployments needing tuned reconnect/rate-limit (delivered in #1780).
  - Air-gapped or keyless environments wanting web search (#3370).
- **Sentiment**: Technical users filing precise, reproducible bugs with fix PRs — indicates engaged, capable community. No complaints about direction, only correctness.

## 8. Backlog Watch
| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [#3373](https://github.com/sipeed/picoclaw/issues/3373) | 8 days | **High** | No fix PR yet; silent credential loss is a security/reliability hybrid. Blocker for config-heavy users. |
| [#3375](https://github.com/sipeed/picoclaw/pull/3375) | 8 days | **Critical** | Fix for crash bug #3374; should be fast-tracked for review/merge. |
| [#3372](https://github.com/sipeed/picoclaw/pull/3372) | 8 days | Medium | Small config parity fix; low risk, high usability value. |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | 9 days | Low | New provider; needs security review of external endpoint, but well-scoped. |

**Maintainer action suggested**: Prioritize review of #3375 (crash fix) and #3373 (data loss). Consider assigning #3373 to a contributor or drafting a fix — it has no PR yet.

---

*Digest generated from GitHub data as of 2026-09-16. All links point to live items on github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-16

## 1. Today's Overview
NanoClaw shows **high velocity** with 40 PRs and 5 issues updated in the last 24 hours. The merge rate is strong (21 PRs closed/merged vs. 19 still open), indicating active maintainer throughput. No new release was cut, but the PR queue contains substantial feature work (voice channel, telemetry, email adapters, provider auth refactors) and performance fixes. Two open issues (#3338, #3828) flag correctness bugs in the update/drain path and WebSocket retry visibility — both are recent and unaddressed. Overall project health appears **good**: steady feature delivery, active cleanup, and prompt closure of setup/installation regressions.

## 2. Releases
**No new releases today.** The latest published version remains prior to 2026-09-16.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Area | Type | Summary |
|----|------|------|---------|
| [#3813](https://github.com/nanocoai/nanoclaw/pull/3813) | channels, core, ncl-cli, repo-maint | Feature | Durable handoff ledger with fingerprinted contracts, append-only events, structured Slack agent-to-agent delivery, bounded bot hops, mission control |
| [#3830](https://github.com/nanocoai/nanoclaw/pull/3830) | configuration, core | Test fix | Webhook port tests: kernel-allocated free ports to eliminate `EADDRINUSE` flakes |
| [#3829](https://github.com/nanocoai/nanoclaw/pull/3829) | core, sessions | Perf | Cross-session echo fan moved off wake path; bounded to hot set — reduces wake latency scaling with sibling sessions |
| [#3827](https://github.com/nanocoai/nanoclaw/pull/3827) | agent-runner, providers | Refactor | Codex provider now uses shared tone contract (`friendly` default, `personality` mapping) |
| [#3826](https://github.com/nanocoai/nanoclaw/pull/3826) | providers | Feature | Providers can declare default tone + native settings mapping via optional `configuration.tone` contract |
| [#3822](https://github.com/nanocoai/nanoclaw/pull/3822) | repo-maint | Chore | `.worktrees/` added to `.gitignore` |
| [#1981](https://github.com/nanocoai/nanoclaw/issues/1981) | setup | Bug fix (closed) | systemd misdetection on headless Linux (SSH non-login shells) — resolved |
| [#3354](https://github.com/nanocoai/nanoclaw/issues/3354) | setup | Bug fix (closed) | 0-byte channel files on failed `git show`; `onecli` PATH check before fix — resolved |
| [#3684](https://github.com/nanocoai/nanoclaw/issues/3684) | update | Bug fix (closed) | `update-nanoclaw` snapshot captures symlinks not content for `data/`/`groups/` — resolved |

**Net advance:** Major durability/communication infrastructure (handoff ledger, Slack delivery), provider contract standardization (tone), test reliability, and three setup/installation bugs resolved. Performance work on session wake path merged.

## 4. Community Hot Topics — Most Active Items
| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#3813](https://github.com/nanocoai/nanoclaw/pull/3813) | PR | High (undefined count, but largest scope) | **Core architectural investment** — durable handoff + mission control suggests multi-agent orchestration is a strategic priority |
| [#3338](https://github.com/nanocoai/nanoclaw/issues/3338) | Issue | 3 👍0 | **Silent 10-min hangs** on Codex WebSocket stalls — user-visible reliability gap; no PR yet |
| [#3781](https://github.com/nanocoai/nanoclaw/pull/3781) | PR | — | **Tools-only delivery enforcement** — addresses provider contract inconsistency (final-text envelope) |
| [#3713](https://github.com/nanoclaw/pull/3713) | PR | — | **Per-agent-group delivery mode config** — prerequisite for #3781, migration 26 |
| [#3764](https://github.com/nanoclaw/pull/3764) | PR | — | **`/add-voice` skill** — full-duplex browser calls via GPT-Live-1; new channel modality |
| [#3796](https://github.com/nanoclaw/pull/3796) | PR | — | **`/add-telemetry` skill** — OpenTelemetry tracing (cost, tokens, cache breakdown) — observability push |
| [#3726](https://github.com/nanoclaw/pull/3726) / [#3743](https://github.com/nanoclaw/pull/3743) | PRs | — | **Two email channels** (Proton Mail Bridge, AgentMail API) — filling the "no email channel" gap |

**Underlying needs:**  
- **Reliability at edges**: WebSocket/idle handling (#3338), update cutover deadlock (#3828)  
- **Multi-agent coordination**: Handoff ledger, mission control, delivery modes  
- **Channel breadth**: Voice, email (Proton, AgentMail), Mattermost hardening  
- **Observability**: First-class OTel tracing skill  
- **Provider abstraction**: Credential connections, tone contracts, auth via Iron Proxy

## 5. Bugs & Stability — Today's Reports
| Severity | Item | Status | Fix PR? |
|----------|------|--------|---------|
| **High** | [#3828](https://github.com/nanoclaw/issues/3828) — Update cutover drain deadlock: host service stopped before containers it waits on; host shutdown leaves idle containers running → poll never succeeds | **Open** (created today) | No |
| **High** | [#3338](https://github.com/nanoclaw/issues/3338) — Codex WebSocket idle retry hidden until 10-min turn timeout; Telegram requests silent for 10 min | **Open** (Aug 18, updated today) | No |
| **Medium** | [#3799](https://github.com/nanoclaw/pull/3799) — Signal inbound attachments not staged via session inbox | **Open PR** (fix) | Yes (#3799) |
| **Medium** | [#3823](https://github.com/nanoclaw/pull/3823) — Mattermost: unauthenticated callbacks, shared secret exposure | **Open PR** (fix) | Yes (#3823) |
| **Low** | [#3830](https://github.com/nanoclaw/pull/3830) — Webhook port test flakes (`EADDRINUSE`) | **Merged** | Yes (kernel port allocation) |

**Note:** Two high-severity correctness bugs (#3828, #3338) have no fix PRs yet. #3828 is brand new and blocks updates when agents are running; #3338 is a month old but user-impacting.

## 6. Feature Requests & Roadmap Signals
| Feature | Evidence | Likelihood for Next Version |
|---------|----------|----------------------------|
| **Durable agent handoff / mission control** | #3813 merged — ledger, contracts, Slack delivery | **Very high** — already merged |
| **Per-group delivery mode (tools-only vs final-text)** | #3713 (config) + #3781 (enforcement) both open | **High** — paired PRs, migration 26 ready |
| **Voice channel (full-duplex browser calls)** | #3764 open, skill-based install | **High** — complete skill, native adapter |
| **Email channels (Proton Mail Bridge, AgentMail)** | #3726, #3743 both open | **Medium-High** — two independent implementations |
| **OpenTelemetry tracing skill** | #3796 open | **Medium** — opt-in, production-grade spans |
| **Provider credential abstraction + Iron Proxy auth** | #3824 (refactor), #3825 (OpenCode via Iron) | **Medium** — foundational, enables more providers |
| **Keenable MCP tool skill** | #3697 open | **Low-Medium** — niche integration |
| **Tone contract standardization** | #3826, #3827 merged | **Done** — provider contract now supports defaults |

**Prediction:** Next release will likely include handoff ledger, delivery mode config, voice skill, and at least one email adapter. Telemetry and provider auth refactors may follow.

## 7. User Feedback Summary
| Pain Point / Use Case | Source | Sentiment |
|------------------------|--------|-----------|
| **10-minute silent hangs on Codex WebSocket stalls** — Telegram requests appear frozen | [#3338](https://github.com/nanoclaw/issues/3338) | 😠 Frustrated — "simple request remains silent for ten minutes" |
| **Update command deadlocks when agent containers running** — cannot complete cutover | [#3828](https://github.com/nanoclaw/issues/3828) | 😠 Blocking — "cutover can't complete if an agent container is running" |
| **Headless/SSH install fails: systemd misdetected, 0-byte files, PATH issues** | [#1981](https://github.com/nanoclaw/issues/1981), [#3354](https://github.com/nanoclaw/issues/3354) | 😐 Resolved — setup assumptions fixed |
| **Symlinked `data/`/`groups/` break update snapshots/rollback** | [#3684](https://github.com/nanoclaw/issues/3684) | 😐 Resolved — content vs symlink fixed |
| **Need email channel without MX/DNS ownership** | [#3726](https://github.com/nanoclaw/pull/3726), [#3743](https://github.com/nanoclaw/pull/3743) | 🙂 Active demand — two PRs |
| **Want full-duplex voice conversations with agents** | [#3764](https://github.com/nanoclaw/pull/3764) | 🙂 New modality requested |
| **Need production observability (cost, tokens, cache)** | [#3796](https://github.com/nanoclaw/pull/3796) | 🙂 Opt-in telemetry skill proposed |

**Overall:** Users hit sharp edges on **update reliability** and **WebSocket resilience**, but setup/install pain points are being resolved. Demand for **richer channels (voice, email)** and **observability** is clear.

## 8. Backlog Watch — Stale/Needs Attention
| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#3338](https://github.com/nanoclaw/issues/3338) — Codex WebSocket idle retry hidden | 29 days | User-visible 10-min hangs; no PR; affects Telegram/remote users | **Triage & assign** — investigate Codex `app-server` error surfacing |
| [#3828](https://github.com/nanoclaw/issues/3828) — Update cutover drain deadlock | 1 day | Blocks updates whenever agents run; architectural (host stops before containers) | **Urgent design review** — invert stop order or add container stop hook |
| [#3781](https://github.com/nanoclaw/pull/3781) — Tools-only delivery enforcement | 4 days | Unlocks providers that can't emit final-text; paired with #3713 | **Review + merge** — core delivery reliability |
| [#3713](https://github.com/nanoclaw/pull/3713) — Per-group delivery mode config | 13 days | Prerequisite for #3781; migration 26 ready | **Review + merge** — config foundation |
| [#3764](https://github.com/nanoclaw/pull/3764) — `/add-voice` skill | 5 days | New channel modality; complete skill | **Review + merge** — expand channel portfolio |
| [#3796](https://github.com/nanoclaw/pull/3796) — `/add-telemetry` skill | 3 days | First-class OTel; cost/token visibility | **Review** — observability milestone |
| [#3726](https://github.com/nanoclaw/pull/3726) / [#3743](https://github.com/nanoclaw/pull/3743) — Email channels | 10/8 days | Two competing email adapters; user demand | **Decide/merge one** — avoid fragmentation |

**Maintainer attention priority:** #3828 (blocks updates), #3338 (silent user harm), then #3781/#3713 (delivery reliability), then channel/observability PRs.

---

*Generated from GitHub data as of 2026-09-16. All links point to nanocoai/nanoclaw repository.*

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

# LobsterAI Project Digest — 2026-09-16

---

## 1. Today's Overview

LobsterAI shows **high maintenance velocity** today with 28 PRs updated (18 merged/closed) and 3 issues updated, though no new release was cut. The bulk of merged work centers on **OpenClaw compatibility repairs** (10+ PRs from `fisherdaddy`, `btc69m979y-dotcom`, `liuzhq1986`) addressing runtime dependency packaging, gateway startup crashes, token budget starvation, and legacy state migration. A user-facing PR (#2374) adds a permanent setting to hide the sidebar ad banner in direct response to issue #2342. Several stale PRs from March/April 2026 were also closed, suggesting a backlog cleanup sweep. Overall project health appears **active and stabilizing** after an OpenClaw upgrade.

---

## 2. Releases

**No new releases** published in the last 24h. The last release PR (#2687 "Release/2026.9.15") was merged but no GitHub Release artifact appears yet.

---

## 3. Project Progress — Merged/Closed PRs (2026-09-15)

| PR | Area | Summary | Link |
|----|------|---------|------|
| #2686 | build, openclaw | Pack & stage local workspace deps in runtime build; fix `pnpm pack` dropping patched builds | [#2686](https://github.com/netease-youdao/LobsterAI/pull/2686) |
| #2685 | build, openclaw | Preserve patched workspace runtime deps for `electron:dev:openclaw` (missing `prepareReplayMessages`) | [#2685](https://github.com/netease-youdao/LobsterAI/pull/2685) |
| #2683 | renderer, build, main, openclaw, cowork | OpenClaw compatibility repair (broad) | [#2683](https://github.com/netease-youdao/LobsterAI/pull/2683) |
| #2684 | docs, main, openclaw | Prevent heuristic output budget starvation (long-session Chat Completions output tokens → 1) | [#2684](https://github.com/netease-youdao/LobsterAI/pull/2684) |
| #2682 | docs, main, openclaw | Validate historical transcript replay (missing IDs, bad field types) | [#2682](https://github.com/netease-youdao/LobsterAI/pull/2682) |
| #2679 | renderer, build, main, openclaw, cowork | Full repair flow: backup engine data, run OpenClaw doctor, recover memory indexes/plugins | [#2679](https://github.com/netease-youdao/LobsterAI/pull/2679) |
| #2681 | renderer, build, docs, main, openclaw, cowork | Recover invalid legacy dreaming state at startup (corrupt `memory/.dreams/` JSON) | [#2681](https://github.com/netease-youdao/LobsterAI/pull/2681) |
| #2680 | main, openclaw | Preserve model policy during config sync (avoid repeated rewrite of migrated fields) | [#2680](https://github.com/netease-youdao/LobsterAI/pull/2680) |
| #2678 | docs, main, openclaw | Preserve compaction summary format & audit facts (dual-template conflict) | [#2678](https://github.com/netease-youdao/LobsterAI/pull/2678) |
| #2677 | docs, main | Restore technical error details in error cards (lost after OpenClaw 2026.8.1 upgrade) | [#2677](https://github.com/netease-youdao/LobsterAI/pull/2677) |
| #2664 | docs | Avoid POPO SDK loading races (`ERR_REQUIRE_ESM_RACE_CONDITION`) | [#2664](https://github.com/netease-youdao/LobsterAI/pull/2664) |
| #1142 | skills | Quick-create skill from skill management page (stale, closed) | [#1142](https://github.com/netease-youdao/LobsterAI/pull/1142) |
| #1143 | agent | Fix default icon not saved on Agent create (sidebar vs My Agents mismatch) | [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) |
| #1144 | scheduled-tasks | Show last run time in task list + running state feedback | [#1144](https://github.com/netease-youdao/LobsterAI/pull/1144) |
| #1145 | settings | Team config template export/import (UI, model defaults, providers, skills) | [#1145](https://github.com/netease-youdao/LobsterAI/pull/1145) |
| #1146 | agent | Fix new agent not fetching task records on create | [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) |
| #1149 | test | Add Vitest unit tests for `coworkMemoryExtractor` (35 cases) | [#1149](https://github.com/netease-youdao/LobsterAI/pull/1149) |
| #1151 | libs | Fix `buildOpenAIChatCompletionsURL` off-by-one for Gemini `/v1` baseURL | [#1151](https://github.com/netease-youdao/LobsterAI/pull/1151) |

**Pattern**: The September 15 batch is almost entirely **OpenClaw v2026.8.1 post-upgrade stabilization** — runtime packaging, gateway startup resilience, token budgeting, legacy state migration, and error observability. The March/April PRs appear to be stale-items closed during cleanup.

---

## 4. Community Hot Topics

| Item | Type | Activity | Core Need | Link |
|------|------|----------|-----------|------|
| **#2342** | Issue | 2 comments, 0 👍 | **User frustration**: Sidebar ad banner appears in v2026.7.15; dismissible but no permanent off switch. User demands complete disable. | [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) |
| **#2374** | PR | 0 comments | **Direct fix for #2342**: Adds Settings → General toggle to permanently hide sidebar ad banner. | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) |
| **#1181** | PR | 0 comments | **UX cleanup**: Hide OpenClaw main agent session (`[OpenClaw]`) from user-facing session list (confuses users). | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) |

**Analysis**: The ad banner (#2342) is the only **user-visible regression** with direct community feedback. The fix (#2374) exists but is still open — merging it would close the loop. The OpenClaw session leak (#1181) is a UX polish item with no user reports yet.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **Critical** | Gateway startup blocked by corrupt `memory/.dreams/` JSON (legacy dreaming state) | ✅ Fixed | [#2681](https://github.com/netease-youdao/LobsterAI/pull/2681) |
| **Critical** | `electron:dev:openclaw` fails — missing `prepareReplayMessages` (patched deps lost in pack) | ✅ Fixed | [#2685](https://github.com/netease-youdao/LobsterAI/pull/2685), [#2686](https://github.com/netease-youdao/LobsterAI/pull/2686) |
| **High** | Long-session Chat Completions output tokens clamped to 1 (heuristic budget starvation) | ✅ Fixed | [#2684](https://github.com/netease-youdao/LobsterAI/pull/2684) |
| **High** | Historical transcript replay crashes on missing IDs / bad field types | ✅ Fixed | [#2682](https://github.com/netease-youdao/LobsterAI/pull/2682) |
| **High** | POPO SDK loading race (`ERR_REQUIRE_ESM_RACE_CONDITION`) leaves gateway without account listeners | ✅ Fixed | [#2664](https://github.com/netease-youdao/LobsterAI/pull/2664) |
| **Medium** | Error cards lost technical details after OpenClaw 2026.8.1 (only provider/model shown) | ✅ Fixed | [#2677](https://github.com/netease-youdao/LobsterAI/pull/2677) |
| **Medium** | Config sync repeatedly rewrites migrated `modelPolicy` fields (noise + potential drift) | ✅ Fixed | [#2680](https://github.com/netease-youdao/LobsterAI/pull/2680) |
| **Low** | Gemini `/v1` baseURL → malformed URL (off-by-one in path join) | ✅ Fixed (stale) | [#1151](https://github.com/netease-youdao/LobsterAI/pull/1151) |
| **Low** | New agent doesn't fetch task records until re-switch | ✅ Fixed (stale) | [#1146](https://github.com/netease-youdao/LobsterAI/pull/1146) |
| **Low** | Agent create: default icon not persisted (sidebar 🦞 vs My Agents 🤖) | ✅ Fixed (stale) | [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) |

**All critical/high bugs from the OpenClaw upgrade have fix PRs merged.** The remaining open PRs are enhancements or polish.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|------------------------------|
| **Permanent sidebar ad hide toggle** | #2342 (user) + #2374 (PR ready) | **Very High** — PR addresses direct user pain, minimal scope |
| **Hide internal OpenClaw session from session list** | #1181 (PR open) | **High** — UX cleanup, no downside |
| **Team config template export/import** | #1145 (merged, stale) | **Medium** — Already merged, may need docs/release |
| **Quick-create skill from skill management** | #1142 (merged, stale) | **Medium** — Merged, likely in next cut |
| **Scheduled tasks: last run time + running state** | #1144 (merged, stale) | **Medium** — Merged, UX polish |
| **Vitest coverage for memory extractor** | #1149 (merged, stale) | **Done** — 35 tests added, improves regression safety |

**Prediction**: Next release (likely `v2026.9.x`) will bundle the OpenClaw stabilization fixes + the ad-hide toggle (#2374) + session list cleanup (#1181). The stale March PRs (#1142–#1146, #1149, #1151) are already merged and just await a release cut.

---

## 7. User Feedback Summary

| Feedback | Sentiment | Context |
|----------|-----------|---------|
| "Sidebar ad appears in v2026.7.15, can dismiss but no permanent off switch" | 😠 Negative | #2342 — First sighting of ads; user expects control |
| No direct feedback on OpenClaw upgrade issues (gateway crashes, token starvation, etc.) | 🤷 Silent | Likely caught in internal testing / nightly; no user issues filed |
| No feedback on agent/task/skill UX improvements | 🤷 Silent | Stale PRs merged without linked user reports |

**Takeaway**: The **ad banner is the only user-reported regression** in this window. The OpenClaw upgrade appears to have been validated internally before user impact. Maintainers should prioritize merging #2374 to restore trust.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters | Action |
|------|-----|----------------|--------|
| **#2374** (feat: permanent ad hide toggle) | Open since 2026-07-21 | Direct fix for user complaint #2342; trivial merge, high goodwill | **Merge & release ASAP** |
| **#1181** (hide OpenClaw main agent session) | Open since 2026-04-01 | UX polish; prevents user confusion; no conflicts | Review & merge |
| **#1277** (dependabot: bump electron 43.5.0 → 44.3.0) | Open since 2026-04-02 | Security/maintenance; Electron upgrades can break native modules | Test & merge (or close if blocked) |
| **#2680** (preserve model policy during config sync) | Merged 2026-09-15 | Prevents config thrash; ensure it's in release | Verify in release notes |
| **Release cut** | — | 18 PRs merged since last release; users on old build | **Cut v2026.9.15 or v2026.9.16** |

---

## Summary

**LobsterAI is in a post-upgrade stabilization phase.** The OpenClaw v2026.8.1 integration introduced critical runtime, startup, and token-budget bugs — all now fixed in a concentrated 10-PR merge window. The only **user-facing regression** is the sidebar ad banner (#2342), with a ready fix (#2374) awaiting merge. A release cut bundling these fixes + the ad toggle would resolve all known critical issues and address the top community pain point. The backlog contains only low-risk polish items and a dependabot Electron bump.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-16

## 1. Today's Overview
Moltis saw minimal visible activity in the last 24 hours: one open issue (#205) received an update and one new pull request (#1270) was opened. No releases were published, and no PRs were merged or closed. The project appears to be in a maintenance phase with sporadic contributor-driven improvements rather than active feature development. The single open PR targets build performance (caching Cargo layers), indicating ongoing attention to developer experience and CI efficiency.

## 2. Releases
No new releases published today.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. The only open PR (#1270) introduces BuildKit cache mounts for Cargo's target directory and crate registry to avoid full recompilation on every image build. This is a build-infrastructure improvement that will reduce CI latency and local iteration time, but it has not yet been reviewed or merged.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#205** | Enhancement | 2 comments, updated 2026-09-15 | [Issue #205](https://github.com/moltis-org/moltis/issues/205) |
| **#1270** | PR (Build) | 0 comments, opened 2026-09-15 | [PR #1270](https://github.com/moltis-org/moltis/pull/1270) |

**Analysis:** Issue #205 requests the ability to pass arbitrary body parameters to custom OpenAI-compatible endpoints on a per-model basis. This signals a growing need for deeper integration with non-OpenAI providers (e.g., local LLMs, Azure, third-party gateways) that extend the OpenAI API with custom fields. The two comments suggest some discussion but no consensus or implementation yet. PR #1270 is a pure DevOps improvement with no functional changes; it has not yet attracted reviewer attention.

## 5. Bugs & Stability
No bug reports, crashes, or regressions were filed or updated in the last 24 hours.

## 6. Feature Requests & Roadmap Signals
**Issue #205** is the sole active feature request. It asks for:
- Passing extra body parameters to custom OpenAI endpoints
- Per-model configuration of those parameters

This aligns with a broader ecosystem trend: users are deploying Moltis against diverse OpenAI-compatible backends (vLLM, Ollama, TGI, custom proxies) that accept vendor-specific extensions (e.g., `grammar`, `logit_bias`, `stop_token_ids`). Implementing this would likely involve extending the model configuration schema and the request-building logic in the provider layer. Given the issue’s age (opened Feb 2026) and lack of linked PR, it is not imminent but represents a clear user demand for provider flexibility.

## 7. User Feedback Summary
Only one user (TheGoddessInari) surfaced a concrete pain point: inability to leverage custom parameters on their chosen inference backend. No satisfaction/dissatisfaction signals beyond this. The community appears quiet—no new issues, no discussion on PR #1270, and zero reactions on either item—suggesting either a small active user base or that most interactions happen elsewhere (Discord, Matrix, etc.).

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **#205** | ~7 months | Open, no linked PR | High-value provider extensibility; blocks advanced use-cases with custom endpoints. Needs maintainer triage or contributor pickup. |
| **#1270** | 1 day | Open, no review | Low-risk build speedup; easy win for contributor experience. Should be reviewed/merged promptly to unblock faster iterations. |

**Recommendation:** Prioritize review of PR #1270 (quick merge, immediate DX benefit). Schedule triage for #205 to decide whether to accept, design, or defer—its longevity without action suggests it may be overlooked.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-16

---

## 1. Today's Overview

CoPaw shows **high velocity** with 65 total GitHub items updated in the last 24 hours (15 issues, 50 PRs). The project is in active feature development for the upcoming **2.2.0 release**, centered on **QwenPaw Hub** (multi-tenant/team edition) and **Desktop UX polish** (theming, workbench, voice, recording). Stability work continues on MCP integration, sub-agent execution, and multimodal request handling. Community engagement is strong on the Hub direction issue (#7318, 27 comments), while several regression bugs in 2.2.x are being triaged and fixed rapidly.

---

## 2. Releases

**No new releases published today.** The next release (v2.2.0) is expected to include QwenPaw Hub (multi-tenant), theming, Advisor Mode, and voice chat based on merged/pending PRs.

---

## 3. Project Progress — Merged/Closed PRs Today (26 items)

| PR | Type | Summary | Link |
|----|------|---------|------|
| #7763 | **Fix** | Plugin catalog CDN read failures now properly fall back to offline empty catalog (fixes #7730) | [#7763](https://github.com/agentscope-ai/QwenPaw/pull/7763) |
| #7741 | **Feature** | **Official theming support** — 6 built-in palettes, real-time preview, persistent config (closes #7406) | [#7741](https://github.com/agentscope-ai/QwenPaw/pull/7741) |
| #7636 | **Fix** | Strip PDF `DataBlock`s from **all** OpenAI-compatible chat-completions requests (follow-up to #7621, fixes #7689) | [#7636](https://github.com/agentscope-ai/QwenPaw/pull/7636) |
| #7735 | **Fix** | Preserve decoded HTTP error responses for MCP; prevents double-decompression (fixes #7716) | [#7735](https://github.com/agentscope-ai/QwenPaw/pull/7735) |
| #7737 | **Fix** | Expand multi-agent collaboration trigger keywords (first-time contributor) | [#7737](https://github.com/agentscope-ai/QwenPaw/pull/7737) |
| #7736 | **Feature** | Add DeepSeek V4 Flash capabilities to provider catalog (1M token context, image input) | [#7736](https://github.com/agentscope-ai/QwenPaw/pull/7736) |
| #7729 | **Fix** | Recognize Java/Kotlin MCP `jsonRpcError` envelope on discover probe | [#7729](https://github.com/agentscope-ai/QwenPaw/pull/7729) |

**Other closed PRs** cover: mail custom IMAP/SMTP (#7791), subagent model override diagnostics (#7796), reranker UI panel (#6399), and various Docs/CI updates.

---

## 4. Community Hot Topics

| Item | Activity | Core Need / Signal |
|------|----------|-------------------|
| **#7318** [OPEN] QwenPaw Hub 2.2.0 direction discussion | **27 comments**, 4 👍 | Community shaping **multi-tenant Hub** roadmap: RBAC, shared skills, usage quotas, org model gateway, audit logs. Strong signal this is the **flagship 2.2 feature**. |
| **#7678** [OPEN] `spawn subAgent` → 100% timeout failures (Windows 2.2.0) | 7 comments | **Critical regression** in sub-agent spawning; blocks multi-agent workflows. Users report even long timeouts don’t help. |
| **#7797** [OPEN] Artifacts polluted with intermediate/temp files | 1 comment, screenshots | UX pain: users want **clean final outputs only** (like competitor products). Impacts trust in agent deliverables. |
| **#7792** [OPEN] WeChat attachments become `file://` URLs → 400 from OpenAI API | 1 comment | Channel integration gap: local file URLs sent raw to cloud multimodal endpoints. Needs upload-to-object-store or data-URI conversion. |
| **#7650** [OPEN] Pass channel metadata (QQ, phone, employee ID) to MCP tools | 3 comments | **Enterprise integration need**: context from chat channel (not user message) must reach MCP servers for auth/personalization. |

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR / Notes |
|----------|-------|--------|----------------|
| **Critical** | #7678 `spawn subAgent` timeout 100% failure (Win 2.2.0) | **OPEN** | #7796 (diagnostics) opened; root cause unknown — likely process isolation / IPC regression |
| **High** | #7689 PDF blocks rejected by OpenAI-compatible multimodal endpoints | **CLOSED** | Fixed in **#7636** (merged) — strips for *all* chat-completions, not just text-only |
| **High** | #7716 MCP connect/register broken since 2.2.x (Java `jsonRpcError` envelope) | **CLOSED** | Fixed in **#7735** (merged) + **#7729** (open) |
| **High** | #7764 MCP client `dagu` inactive — `zlib incorrect header check` | **CLOSED** | Likely fixed by #7735 (HTTP error body handling) |
| **Medium** | #7792 WeChat video/audio → `file://` URL → 400 Bad Request | **OPEN** | No fix PR yet; needs channel→object-store upload pipeline |
| **Medium** | #5872 Docker `browser_use` dbus/Chromium crash | **CLOSED** | Historical; may need Dockerfile/runtime docs update |
| **Medium** | #3871 Infinite "Thinking" bubble after response (SSE not closing) | **CLOSED** | Historical; verify fix in current stream handling |
| **Low** | #7730 Plugin catalog CDN read errors escape fallback | **CLOSED** | Fixed in **#7763** (merged) |
| **Low** | #7744 File sent via `send_file_to_user` hidden in collapsed tool step | **CLOSED** | UX fix pending; no PR linked |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Evidence | Likelihood for 2.2.0 / Near-term |
|---------|----------|----------------------------------|
| **QwenPaw Hub (Multi-tenant)** | #7318 (27 comments), #7779 (PR: model gateway, governance, dashboard) | **Very High** — flagship 2.2 theme |
| **Official Theming** | #7406 → #7741 (merged) | **Done** — in 2.2.0 |
| **Advisor Mode** (strong+cheap model pairing) | #7569 (open, detailed design) | **High** — sophisticated loop mode, likely 2.2.x |
| **Realtime Voice Chat** | #7785 (open, integrates with existing chat path) | **High** — Desktop differentiator |
| **Record & Replay (macOS desktop events)** | #7798 (open, privacy-filtered, consent-gated) | **Medium-High** — novel capability |
| **Unified Chat Workbench Shell** | #7790 (open, resizable right panel, tabbed tools) | **High** — Desktop UX overhaul |
| **Multi-folder Default Workspaces** | #7789 (open, configurable project dirs) | **High** — power-user workflow |
| **DeepSeek V4 Flash Support** | #7736/#7794 (merged + open) | **Done** — provider catalog update |
| **Custom IMAP/SMTP for Mail** | #7791 (open, first-time contributor) | **Medium** — enterprise self-host support |
| **Reranker UI Config** | #6399 (open, long-standing) | **Medium** — memory quality feature |
| **Clean Artifact Output (no temp files)** | #7797 (open, strong UX ask) | **Medium** — requires agent runtime changes |

---

## 7. User Feedback Summary

| Pain Point | Frequency | Representative Voice |
|------------|-----------|----------------------|
| **Sub-agent completely broken in 2.2.0** | 1 issue, 7 comments | "任务一旦进行 spawn subAgent 处理…没有一个执行的下去，全都 timeout 失败" — #7678 |
| **Artifacts cluttered with junk files** | 1 issue, screenshots | "现在的产物会输出大量无用的中间文件、临时文件等，杂乱无章" — #7797 |
| **WeChat files can't be used with cloud models** | 1 issue | "file:// URLs sent raw to OpenAI-compatible API → 400" — #7792 |
| **Channel context (user ID, phone) not reaching MCP** | 1 issue, 3 comments | "既然可以作为会话的 userid，那么应该可以透传给 mcp" — #7650 |
| **Desire for team/multi-user Hub** | 1 issue, 27 comments | Community actively co-designing Hub features — #7318 |
| **UI rigidity (no theming, fixed layout)** | 2 issues, 1 PR merged | "UI is locked to one orange accent… no config key, no settings page" — #7406 |
| **File delivery hidden in collapsed tool steps** | 1 issue | "用户需要手动展开才能找到文件" — #7744 |

**Positive signals:** Rapid maintainer response to regressions (PDF blocks, MCP errors, plugin catalog), first-time contributors landing fixes, community engaged in Hub design.

---

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| **#7678** `spawn subAgent` timeout (Windows) | 2026-09-11 | **Blocks multi-agent workflows**; no root cause PR yet; #7796 only adds logging |
| **#7792** WeChat `file://` → 400 | 2026-09-15 | **Channel-cloud integration gap**; affects all WeCom/WeChat enterprise users |
| **#7650** Channel metadata → MCP | 2026-09-09 | **Enterprise auth/context pattern**; architectural decision needed |
| **#7797** Clean artifact output | 2026-09-16 | **UX differentiator**; requires runtime/file-tracking redesign |
| **#7569** Advisor Mode | 2026-09-05 | **Complex feature**; needs review bandwidth; high value if done right |
| **#6399** Reranker UI panel | 2026-07-23 | **Long-open** (55 days); backend ready, UI blocked on review |
| **#7382** AgentScopeRuntimeWebUI 1.2 adapt | 2026-08-28 | **Stabilizes queues/composer**; 19 days open, under review |
| **#4037** HTTP gateway unauthenticated by default | 2026-05-04 | **Security posture**; closed but verify mitigation shipped (bind-loopback or auth-env) |

---

## Key Links

- **Repo**: https://github.com/agentscope-ai/QwenPaw
- **Hub Discussion (#7318)**: https://github.com/agentscope-ai/QwenPaw/issues/7318
- **Sub-agent Bug (#7678)**: https://github.com/agentscope-ai/QwenPaw/issues/7678
- **Theming PR (#7741)**: https://github.com/agentscope-ai/QwenPaw/pull/7741
- **MCP Fixes (#7735, #7729)**: https://github.com/agentscope-ai/QwenPaw/pull/7735 | https://github.com/agentscope-ai/QwenPaw/pull/7729
- **Advisor Mode (#7569)**: https://github.com/agentscope-ai/QwenPaw/pull/7569
- **Voice Chat (#7785)**: https://github.com/agentscope-ai/QwenPaw/pull/7785

---

**Bottom line**: CoPaw is **shipping fast** toward a major 2.2.0 focused on **team/enterprise (Hub)**, **Desktop polish (theming, workbench, voice)**, and **model diversity (DeepSeek, Advisor Mode)**. The **sub-agent regression (#7678)** is the top stability risk. Community is deeply engaged in shaping Hub — a rare and healthy signal for an open-source AI agent platform.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-16

## 1. Today's Overview
ZeptoClaw saw **zero human-driven activity** in the last 24 hours: no new issues, no merged pull requests, and no releases. All 18 updated PRs are automated **Dependabot dependency bumps** spanning Rust crates, JavaScript/TypeScript tooling (Astro/Starlight docs sites), GitHub Actions, and Docker base images. The project is in a quiet maintenance phase with the bot keeping the dependency graph current while maintainers have not yet reviewed or merged any updates.

## 2. Releases
**None** — no new versions published today.

## 3. Project Progress
**No PRs merged or closed today.** All 18 dependency-update PRs remain open awaiting review/CI passes.  
Key version jumps pending:
- **Astro 6.3.7 → 7.2.2** (major) in both `/landing/zeptoclaw/docs` (#695) and `/landing/r8r/docs` (#686)
- **@astrojs/starlight 0.39.2 → 0.41.10** in both doc sites (#696, #689)
- **sharp 0.34.5 → 0.35.4** in both doc sites (#693, #691)
- **Rust toolchain** in Docker: `17d1ba8 → bce1476` (#679) and Debian base `4e401d9 → d7e1218` (#680)
- **Core Rust deps**: clap 4.6.1→4.6.6 (#690), base64 0.22.1→0.23.1 (#694), rustls 0.23.39→0.23.43 (#692), async-trait 0.1.89→0.1.92 (#688), tokio-serial 5.4.5→5.5.0 (#685)
- **CI actions**: docker/login-action 4.2.0→4.6.0 (#687), rust-cache 2.9.1→2.9.2 (#683), cargo-deny-action 2.0.18→2.1.1 (#684), action-gh-release 3.0.0→3.0.3 (#681), install-action 2.79.7→2.87.6 (#682)

## 4. Community Hot Topics
**No human-authored issues or discussion PRs** — zero comments, reactions, or community engagement recorded today. All activity is bot-generated.

## 5. Bugs & Stability
**No bug reports, crashes, or regressions filed today.** Stability signals will depend on CI outcomes of the pending dependency PRs (especially Astro 7 and Rust toolchain updates).

## 6. Feature Requests & Roadmap Signals
**None today.** The sole signal is the **Astro 7 major upgrade** queued in two doc sites — once merged, it may enable new content/authoring features for documentation but is not a product feature per se.

## 7. User Feedback Summary
**No user feedback captured** in the last 24 h (no issues, discussions, or support threads).

## 8. Backlog Watch
| Item | Type | Age / Status | Why It Matters |
|------|------|--------------|----------------|
| **#695, #686** | PR (Astro 6→7) | Open 1 day | Major framework upgrade; may require config/content migrations in both doc sites. |
| **#696, #689** | PR (Starlight 0.39→0.41) | Open 1 day | Companion to Astro 7; brings new sidebar, i18n, and API changes. |
| **#679, #680** | PR (Docker Rust/Debian) | Open 1 day | Base image refreshes; validate build reproducibility & binary compatibility. |
| **#690, #694, #692, #688, #685** | PR (Rust crate bumps) | Open 1 day | Routine but broad surface — clap, base64, rustls, async-trait, tokio-serial. Run full test suite before merge. |
| **#687, #683, #684, #681, #682** | PR (GitHub Actions) | Open 1 day | CI pipeline hardening; verify workflow permissions & caching behavior. |

> **Maintainer action suggested**: Batch-review the two doc-site upgrade pairs (#695+#696 and #686+#689) together, then triage the Rust/CI/Docker batches. No human-authored backlog items are stale or blocked.

---

*Digest generated from GitHub data as of 2026-09-16. All links point to `github.com/qhkm/zeptoclaw`.*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-16

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 50 PRs updated and 10 issues active in the last 24 hours. The project is in active feature development across multiple fronts: A2A outbound client (RFC accepted), Anthropic OAuth support, WASM plugin hardware access, CI infrastructure improvements, and security hardening. Nine PRs were merged/closed today, indicating steady integration throughput. No new releases were cut, suggesting the team is accumulating changes for a future release. The codebase spans agent runtime, provider integrations (Anthropic, OpenAI, compatible), gateway, channels (Telegram, ACP, MQTT), daemon, CLI, and a WASM plugin system — reflecting a mature, extensible AI agent platform.

## 2. Releases
**No new releases** in the last 24 hours. The latest shipped version remains v0.8.2 (A2AServer inbound support). Next release will likely include: A2ATool outbound client (#9106), Anthropic stored-profile OAuth (#9420), context compaction anchored to model window (#9535), web_research delegate tool (#9833), and plugin install-time verification (#10746).

## 3. Project Progress — Merged/Closed PRs Today (9)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#10898](https://github.com/zeroclaw-labs/zeroclaw/pull/10898) | fix(daemon): serialize lifecycle tests against the log broadcast | daemon, runtime, CI | Fixes flaky test `supervisor_preserves_component_error_chain` (#10897) by serializing tests that mutate global log broadcast hook |
| [#10896](https://github.com/zeroclaw-labs/zeroclaw/pull/10896) | perf(ci): pin compile-job runner labels instead of reading fmt outputs | CI | Removes `needs: [fmt]` from 11 compile jobs, eliminating 70-min queue delays during runner shortages |
| [#10874](https://github.com/zeroclaw-labs/zeroclaw/pull/10874) | perf(ci): stop queueing GitHub-hosted jobs behind fmt | CI | Same as above — parallelizes CI job creation |
| [#10493](https://github.com/zeroclaw-labs/zeroclaw/pull/10493) | refactor(channels): gate email and IRC TLS dependencies | channels, dependencies | Makes rustls stack optional; reduces transitive dependency surface (relevant to #5869 rumqttc security advisories) |
| [#9876](https://github.com/zeroclaw-labs/zeroclaw/pull/9876) | feat(zerocode): report turn state to terminal over OSC title/progress | zerocode, CLI | Adds OSC 2 (title) and OSC 9;4 (machine progress) for terminal-native turn visibility |
| [#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) | feat(zerorelay): relay-terminated browser enrollment frontdoor (phase 1) | zerorelay, security | Re-adds browser enrollment with disclosed trust model; removes hand-rolled TLS-in-JS |
| [#10746](https://github.com/zeroclaw-labs/zeroclaw/pull/10746) | feat(plugins): load-verify a plugin at install and give egress denials a fix | plugins, WASM, security | WASM components verified against host WIT ABI at install time; egress denials get remediation hints |
| [#10752](https://github.com/zeroclaw-labs/zeroclaw/pull/10752) | feat(cli): report whether an installed plugin actually loads (plugin info, plugin list --verify) | CLI, plugins | Adds load-verdict reporting to `zeroclaw plugin info/list --verify` |
| [#10750](https://github.com/zeroclaw-labs/zeroclaw/pull/10750) | feat(plugins): govern channel plugin egress | plugins, security | Restacks channel-plugin egress governance onto master with sender authorization preserved |

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Comments | Core Need |
|------|----------|-----------|
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) RFC: A2A outbound client (A2ATool) | 11 | **Inter-agent collaboration**: Agents cannot proactively call external A2A-compliant agents; forced through chat. High-risk RFC accepted, blocked on implementation. |
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) Security: rumqttc v0.25.1 pins vulnerable rustls-webpki/pemfile | 5 | **Transitive dependency vulnerability**: 4 RUSTSEC advisories blocked on rumqttc update. PR #10493 gates TLS deps but rumqttc upgrade still needed. |
| [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) Anthropic stored-profile OAuth alias contract | 4 | **OAuth UX**: Formalize contract for `auth_mode = "oauth"` with stored profiles (PR #9420 in progress). |
| [#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187) RFC: Capability-gated WASI hardware host functions for plugins | 3 | **Hardware access in sandbox**: GPIO/SPI/I2C/USB/serial for WASM plugins without breaking sandbox. Native plugin model rejected (#7420). |
| [#9318](https://github.com/zeroclaw-labs/zeroclaw/issues/9318) CI: add required PostgreSQL service-container job for session backend | 3 | **CI coverage gap**: PostgreSQL backend (#9251) has `cargo check` but no integration test against real PG. |

**Underlying theme**: ZeroClaw is maturing from single-agent runtime → **multi-agent ecosystem** (A2A), **production hardening** (security advisories, CI gaps, plugin sandboxing), and **developer experience** (OAuth, terminal feedback, plugin verification).

## 5. Bugs & Stability — Reported Today
| Severity | Issue | Component | Fix PR |
|----------|-------|-----------|--------|
| **S2 (Degraded)** | [#10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883) Telegram media-group listener test times out under parallel runtime job | channel:telegram, CI | — |
| **S2 (Degraded)** | [#10897](https://github.com/zeroclaw-labs/zeroclaw/issues/10897) `daemon::tests::supervisor_preserves_component_error_chain` flakes under parallel nextest (global log-broadcast race) | daemon, CI, tooling | [#10898](https://github.com/zeroclaw-labs/zeroclaw/pull/10898) ✅ **Fixed today** |
| **Medium** | [#10889](https://github.com/zeroclaw-labs/zeroclaw/issues/10889) Anthropic provider drops rolling cache breakpoint when last message ends with image block | provider:anthropic | — |
| **High (Security)** | [#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882) Image markers bypass content validation on `run_model_query` direct-dispatch seam | agent, provider, runtime, security | — (split from #9819, in-progress) |
| **High (Security)** | [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) rumqttc transitive RUSTSEC advisories (0049/0098/0099/0104/0134) | dependencies, security, channel:mqtt | Partial: [#10493](https://github.com/zeroclaw-labs/zeroclaw/pull/10493) gates TLS deps; rumqttc upgrade still pending |

**Stability note**: Two S2 flaky tests identified today; one fixed immediately via #10898. The Anthropic cache bug (#10889) and image validation bypass (#9882) are provider/runtime correctness issues affecting multimodal flows.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **A2ATool (outbound A2A client)** | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) RFC accepted, high risk | High — core multi-agent enabler |
| **Anthropic stored-profile OAuth** | [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420), [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) | High — PR in progress, security-labeled |
| **Context compaction anchored to model window ratio** | [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | High — XL refactor, needs author action |
| **web_research delegate tool (bounded sub-agent loop)** | [#9833](https://github.com/zeroclaw-labs/zeroclaw/pull/9833) | High — principal contributor, XL scope |
| **WASM plugin hardware host functions (GPIO, SPI, I2C, USB, serial)** | [#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187) RFC | Medium — RFC stage, requires WASI capability gating |
| **ACP near-live JSON-RPC smoke test for `deliver_file`** | [#9370](https://github.com/zeroclaw-labs/zeroclaw/issues/9370) | Medium — test infrastructure, follow-up to #9195 |
| **PostgreSQL session backend CI integration** | [#9318](https://github.com/zeroclaw-labs/zeroclaw/issues/9318) | Medium — blocked on CI infra |
| **Relay-terminated browser enrollment (ZeroRelay)** | [#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) | Medium — phase 1, stacked, security-sensitive |
| **Typed stop taxonomy for turn-path aborts** | [#10504](https://github.com/zeroclaw-labs/zeroclaw/pull/10504) | Medium — architecture refactor, needs author action |

**Predicted next version theme**: "Multi-agent & Production Hardening" — A2A outbound, Anthropic OAuth, plugin verification, context compaction, web_research tool.

## 7. User Feedback Summary
*No direct user feedback (forum/discord/support) in provided data.* Inferred pain points from issues/PRs:
- **Multi-agent developers**: Blocked on outbound A2A (#9106) — "forced through chat" is a hard workflow limitation.
- **Security-conscious deployers**: rumqttc vulnerability cluster (#5869) blocks compliance; transitive dep hell.
- **Anthropic users**: OAuth flow incomplete (#9464), cache breakpoint bug with images (#10889), image validation bypass (#9882).
- **Plugin authors**: No hardware access in sandbox (#8187); install-time verification now landing (#10746).
- **CI/maintainers**: Flaky tests (#10883, #10897), PG backend untested (#9318), 70-min CI queues (#10874).
- **Terminal power users**: Want turn-state visibility — OSC title/progress now shipping (#9876).

## 8. Backlog Watch — Long-Unanswered Important Items
| Item | Age | Labels | Why It Matters |
|------|-----|--------|----------------|
| [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) rumqttc security advisories | 151 days | `priority:p1`, `status:blocked`, `risk:high`, `type:dependencies` | **Critical security debt**: 4 RUSTSEC advisories unpatchable until rumqttc upgrades. Blocks compliance. PR #10493 mitigates but doesn't fix root cause. |
| [#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187) WASI hardware host functions RFC | 86 days | `priority:p2`, `type:rfc`, `risk:high`, `hardware` | **Architectural gap**: Hardware access for edge/robotics use cases. Native plugin model rejected; WASI capability gating needed. No PR yet. |
| [#9318](https://github.com/zeroclaw-labs/zeroclaw/issues/9318) PostgreSQL session backend CI | 55 days | `priority:p2`, `status:blocked`, `status:accepted`, `type:ci` | **CI coverage hole**: Opt-in backend untested against real PG. Blocks confidence in session persistence. |
| [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) A2ATool RFC | 62 days | `priority:p2`, `status:accepted`, `risk:high`, `type:rfc` | **Strategic feature**: Outbound A2A is key differentiator for multi-agent. Accepted but no implementation PR visible. |
| [#10504](https://github.com/zeroclaw-labs/zeroclaw/pull/10504) Typed stop taxonomy for turn aborts | 16 days | `needs-author-action`, `risk:high`, `size:L`, `type:refactor` | **Architecture refactor**: Large cross-cutting change stalled on author. Affects agent, channel, provider, runtime. |

---

**Project Health Indicators**
- ✅ **Velocity**: High (50 PR updates, 9 merges/day)
- ✅ **Security responsiveness**: Active on RUSTSEC, plugin verification, OAuth
- ⚠️ **Technical debt**: rumqttc blocked 5+ months; flaky tests recurring
- ⚠️ **Review bottleneck**: Several XL PRs with `needs-author-action`/`needs-maintainer-review`
- ✅ **Architecture discipline**: RFC process for major changes (A2A, WASI hardware, stop taxonomy)
- ✅ **CI investment**: Active optimization (parallelization, PG backend, compile-job pinning)

**Next watch**: A2ATool implementation PR, rumqttc upgrade, Anthropic OAuth merge, plugin verification landing.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*