# OpenClaw Ecosystem Digest 2026-09-13

> Issues: 182 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-13 04:27 UTC

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

# OpenClaw Project Digest — 2026-09-13

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 PRs and 182 issues updated in the last 24 hours. The project is in active maintenance mode: 226 PRs were merged/closed and 81 issues resolved, indicating strong throughput. However, the backlog remains substantial with 274 open PRs and 101 active issues. No new release was cut today. The issue landscape is dominated by **stability regressions** (zombie processes, MCP server crashes, session-state corruption, upgrade failures) and **session/message-loss bugs** — many tagged P0/P1 with "diamond lobster" or "platinum hermit" severity ratings. The PR queue shows a wave of **doctor/repair hardening**, **UI responsiveness fixes**, and **provider alias resolution** work, suggesting the team is prioritizing reliability over new features.

## 2. Releases

**No new releases today.** The latest coordination issue [#145252](https://github.com/openclaw/openclaw/issues/145252) tracks "2026.9.3 / 2026.9.4 update, upgrade and recovery reliability" — indicating recent releases (2026.9.3 and 2026.9.4) have surfaced migration and recovery issues that are now being addressed in the current PR wave.

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary |
|----|------|---------|
| [#146720](https://github.com/openclaw/openclaw/pull/146720) | Gateway/Channels | Reduce reload and thaw recovery work for large channel configs |
| [#146722](https://github.com/openclaw/openclaw/pull/146722) | Worktrees | Avoid redundant checkout waits and Git queries (APFS timestamp delay) |
| [#146693](https://github.com/openclaw/openclaw/pull/146693) | Update/CLI | Require consent before interactive repair (fixes timeout-as-Yes behavior) |
| [#146694](https://github.com/openclaw/openclaw/pull/146694) | Scripts/Parallels | Share gateway readiness loop across macOS/Linux smoke tests |
| [#146696](https://github.com/openclaw/openclaw/pull/146696) | QA Lab | Share capture filter rendering (Kind, Provider, Host) |
| [#146705](https://github.com/openclaw/openclaw/pull/146705) | Web UI | Coalesce pending chat metadata refreshes |
| [#146734](https://github.com/openclaw/openclaw/pull/146734) | Web UI | Fix generated agent avatars — fill circle, vary by color/eyes/mouth |
| [#144960](https://github.com/openclaw/openclaw/pull/144960) | Extensions/Kilocode | Resolve `models.dev` kilo provider alias |
| [#144951](https://github.com/openclaw/openclaw/pull/144951) | Extensions/StepFun | Resolve `models.dev` provider aliases |
| [#141363](https://github.com/openclaw/openclaw/pull/141363) | Gateway | Trim `portal.close` id before service lookup |
| [#141393](https://github.com/openclaw/openclaw/pull/141393) | Gateway | Trim wizard `sessionId` before Map lookup |

**Theme:** Reliability hardening — repair consent, upgrade safety, metadata coalescing, provider alias resolution, and gateway lookup robustness.

## 4. Community Hot Topics (Most Commented Issues/PRs)

### Issues
| Issue | Comments | 👍 | Core Problem |
|-------|----------|-----|--------------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 30 | 1 | **Zombie process leak** from hook/tool child processes (`openclaw-hooks`, `bash`, `codex`) accumulating under main process, causing runtime degradation |
| [#63216](https://github.com/openclaw/openclaw/issues/63216) | 13 | 3 | **Repeated hard resets** on same session key despite high `reserveTokensFloor`; retry loop re-injects bootstrap context |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | 13 | 0 | **MCP server init timeout** crashes Gateway via unhandled rejection in child cleanup path ("service child cleanup identity lost") |
| [#87756](https://github.com/openclaw/openclaw/issues/87756) | 11 | 1 | **Lobster workflow hangs** on nested `/tools/invoke` when prompt-launched (works via curl) |
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | 10 | 0 | **Requester-settle batches retry forever** after ownership check; failed/timed-out/cancelled subagent runs remain pending |

### PRs
All top 30 PRs show **0 comments** (likely auto-generated/maintainer-authored). The highest-engagement PRs by *review readiness* are:
- [#146667](https://github.com/openclaw/openclaw/pull/146667) — Recover yielded subagents, preserve sidebar nesting (P1, XL, screenshot proof)
- [#146092](https://github.com/openclaw/openclaw/pull/146092) — Doctor continue repairs after legacy agent directory collisions (P1, XL, waiting on author)
- [#142173](https://github.com/openclaw/openclaw/pull/142173) — Fix talk: don't treat queued consult as empty completion (P2, XL, security-boundary risk)

**Underlying needs:** Users are hitting **session-state corruption** (lost completions, stuck yields, message loss), **upgrade/repair failures**, and **child-process management bugs** that cascade into Gateway crashes. The "diamond lobster" 🦞 and "platinum hermit" 🐚 tags indicate these are high-impact, hard-to-reproduce issues affecting power users.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR? | Description |
|----------|-------|--------|---------|-------------|
| **P0 / UX Release Blocker** | [#145510](https://github.com/openclaw/openclaw/issues/145510) | Open | No | Update failure: `runtime-verification-failed` on 2026.9.3 → 2026.9.4 (Win32) |
| **P0 / UX Release Blocker** | [#112475](https://github.com/openclaw/openclaw/issues/112475) | Open | No | Device pairing recovery fails after removal (Gateway 2026.7.1 / CLI 2026.6.9) |
| **P0 / UX Release Blocker** | [#143334](https://github.com/openclaw/openclaw/issues/143334) | Open | No | Lost subagent completion parks requester in settle-yield; restart recovery fails "gateway request timeout for agent" |
| **P1 / Crash Loop** | [#144911](https://github.com/openclaw/openclaw/issues/144911) | Open | No | MCP server init timeout crashes Gateway via unhandled rejection in child cleanup |
| **P1 / Crash Loop** | [#134993](https://github.com/openclaw/openclaw/issues/134993) | Open | No | Gateway pegs CPU core (busy loop in filesystem discovery) after 2026.8.1 upgrade with large skill fleet |
| **P1 / Session State** | [#141474](https://github.com/openclaw/openclaw/issues/141474) | Open | No | Collector child calling `sessions_yield` strands `agents_wait` forever; `outputSchema` inert on claude-cli |
| **P1 / Session State** | [#132765](https://github.com/openclaw/openclaw/issues/132765) | Open | No | `agents_wait` ignores `timeoutSeconds` — dies after ~60s as tool error instead of returning pending |
| **P1 / Regression** | [#87756](https://github.com/openclaw/openclaw/issues/87756) | Open | No | Lobster workflow hangs on nested `/tools/invoke` when prompt-launched |
| **P1 / Regression** | [#92285](https://github.com/openclaw/openclaw/issues/92285) | Open | No | Parent subagent task stays `stale_running` after child becomes lost |
| **P2 / Zombie Leak** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Open | No | Unreaped hook/tool child processes accumulate as zombies, degrading runtime |
| **P2 / Message Loss** | [#86214](https://github.com/openclaw/openclaw/issues/86214) | Open | No | Codex app-server client closes mid-turn during image/tool requests with large `logs_2.sqlite` |
| **P2 / Regression** | [#134878](https://github.com/openclaw/openclaw/issues/134878) | Closed | — | Configured HTTP MCP tools discovered but omitted from Codex-backed agent sessions (2026.8.1) |

**Critical pattern:** Multiple P0/P1 issues involve **subagent completion delivery failures**, **session yield/strand bugs**, and **upgrade/repair breakdowns** — suggesting the swarm/collector subsystem and Doctor repair path are the weakest links.

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal |
|-------|----------|--------|
| [#79904](https://github.com/openclaw/openclaw/issues/79904) | P2 | **Cursored SQLite transcript read API** for companion consumers (closed stale, but part of umbrella #79902) |
| [#79903](https://github.com/openclaw/openclaw/issues/79903) | P2 | **Durable session lineage & sessionId discovery** across rotations (closed stale) |
| [#79905](https://github.com/openclaw/openclaw/issues/79905) | P2 | **Typed transcript projections** + documented companion rebuild contract (closed stale) |
| [#79047](https://github.com/openclaw/openclaw/issues/79047) | P2 | **Preserve conversation context** across cross-backend model switches (closed stale) |
| [#58057](https://github.com/openclaw/openclaw/issues/58057) | P2 | **Dynamic identity resolution** for allowlists (`dmPolicy: dynamic`) (closed stale) |
| [#80026](https://github.com/openclaw/openclaw/issues/80026) | P2 | **Per-agent / per-cron-job provider request headers** (closed stale) |
| [#71301](https://github.com/openclaw/openclaw/issues/71301) | P3 | **Version-matched bundled docs** + native docs retrieval for agent-guided onboarding (closed stale) |
| [#82450](https://github.com/openclaw/openclaw/issues/82450) | P2 | **Linear Persistent Workspace Mode** for blind users (accessibility) — **still open** |
| [#54128](https://github.com/openclaw/openclaw/issues/54128) | P3 | **maxThreads config** for local embedding (node-llama-cpp) (open) |
| [#87764](https://github.com/openclaw/openclaw/pull/87764) | P2 | **Owner-scoped ClawHub skill refs** (`@openclaw/demo`) — PR open, needs proof |

**Prediction:** The **SQLite transcript API** (#79904/79903/79905) and **session lineage** work will likely land in the next minor release once the current stability wave settles. The **accessibility request** (#82450) has strong user advocacy and may get prioritized. **Owner-scoped skill refs** (#87764) is the only feature PR with active maintainer attention.

## 7. User Feedback Summary

### Pain Points (from issue descriptions)
- **"Zombie accumulation degrades runtime over time"** — long-running Gateways become unstable (#97616)
- **"80+ minutes of queued inbound messages after runs completed"** — stuck-session recovery misreports force-clear as abort (#145152)
- **"Doctor --fix recommends an alsoAllow fix its own resolver rejects"** — self-contradictory repair guidance (#145503)
- **"3–6 minute delay after sending Telegram messages"** — regression since 2026.05.03 (#78079)
- **"Gateway receives message instantly but user sees delay"** — channel delivery path latency (#78079)
- **"Cold-path auth resolution ~4s vs warm 2-4ms"** — bimodal latency every 1-15 min (#78041)
- **"Cross-exec stale file reads"** — same path returns different content across exec calls (#71326)
- **"WebChat renders system memory injection blocks to users"** — internal prompts leaked to UI (#64613)

### Use Cases Revealed
- **Multi-channel deployments**: Telegram, Discord, Slack, Feishu, Google Chat, BlueBubbles/iMessage
- **Subagent orchestration**: Collector patterns, swarm workflows, Lobster workflows with nested tool invocation
- **Long-running sessions**: Group topics with high message volume, context compaction at 200K+ tokens
- **Cross-backend model switching**: claude-cli ↔ openrouter ↔ codex-cli
- **Windows/macOS/Linux parity**: Platform-specific bugs (EFI partitions, temp dir access, NTFS sync I/O)
- **Accessibility**: Blind user relying on OpenClaw as primary AI work interface (#82450)

### Satisfaction Signals
- **Positive**: "One of the most powerful AI work interfaces I have ever used" (blind user, #82450)
- **Negative**: Multiple "regression" tags, "beta release blocker: No" but P0/P1 severity — users are hitting production blockers in stable releases
- **Frustration**: Stale-closed feature requests (#79903, #79904, #79905, #79047, #58057) suggest community feels roadmap ignores companion/ecosystem needs

## 8. Backlog Watch (Long-Unanswered Important Items)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#48711](https://github.com/openclaw/openclaw/issues/48711) | 180 days | **Task/Memory Recall Too Weak** — fundamental trust issue for real conversations; 5 comments, 1 👍 |
| [#67393](https://github.com/openclaw/openclaw/issues/67393) | 151 days | **22GB+ VIRT memory bloat** at Gateway startup — previously closed "not planned" but persists |
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | 127 days | **Umbrella: SQLite runtime companion APIs** — 3 sub-issues closed stale, no progress |
| [#78041](https://github.com/openclaw/openclaw/issues/78041) | 131 days | **Cold-path auth 4s latency** — affects every cold dispatch, bimodal distribution |
| [#71326](https://github.com/openclaw/openclaw/issues/71326) | 141 days | **Cross-exec stale file reads** — vnode/dentry cache race since 2026.4.20 |
| [#60381](https://github.com/openclaw/openclaw/issues/60381) | 163 days | **Browser tool force click + evaluate action** — Playwright hits fail on modern frameworks |
| [#877

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-13)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows a **bifurcated maturity landscape**: a cluster of high-velocity "core" projects (OpenClaw, ZeroClaw, NanoBot, NanoClaw, Hermes Agent, CoPaw) actively hardening reliability for production use, contrasted with smaller or niche projects in maintenance (NullClaw, IronClaw, Moltis) or stalled states (PicoClaw, LobsterAI, ZeptoClaw). **Stability, not features, dominates current investment** — upgrade/repair reliability, session persistence, provider fallback correctness, and security hardening (path traversal, TLS, permission policies) appear across 8/10 active projects. Release cadence has slowed across the board; most projects batch fixes post-release rather than cutting frequent versions. Community engagement is strong in contributor count but thin in user-facing discussion — issues are largely maintainer-driven bug reports, not feature debates.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged (24h) | Release Today? | Health Score* |
|---------|---------------------|-------------------|------------------|----------------|---------------|
| **OpenClaw** | 182 | 500 | 226 | No | 🟡 High velocity, critical backlog |
| **ZeroClaw** | 16 | 50 | 13 | No | 🟢 Stabilizing, release imminent |
| **NanoBot** | 4 | 15 | 9 | No | 🟢 Strong fix throughput |
| **NanoClaw** | 5 | 26 | 11 | No | 🟢 Feature + fix balance |
| **Hermes Agent** | ~5* | 50 | 2 | No | 🟡 Operational debt (triage backlog) |
| **CoPaw** | 15 | 6 | 0 | No | 🔴 Review bottleneck, regressions |
| **LobsterAI** | 6 (all stale) | 3 (merged) | 3 | No | 🔴 Stale backlog, low review velocity |
| **PicoClaw** | 4 | 4 | 1 | No | 🔴 Critical infra failure (TLS) |
| **Moltis** | 0 | 3 | 1 | No | 🟡 Steady, low community signal |
| **NullClaw** | 0 | 1 | 1 | No | 🟢 Quiet maintenance |
| **IronClaw** | 0 | 2 | 1 | No | 🟢 Low-churn maintenance |
| **ZeptoClaw** | 0 | 0 | 0 | No | ⚫ Inactive |

*Health Score: 🟢 Healthy / 🟡 Caution / 🔴 Risk / ⚫ Inactive  
*Hermes issue count estimated from "2,743 duplicate/invalid" triage backlog + new reports.

---

## 3. OpenClaw's Position

**Advantages vs Peers**
- **Scale & Throughput**: 10× PR velocity of next peer (ZeroClaw: 50 PRs vs 500); 226 merges/day demonstrates industrial-grade CI/review capacity.
- **Multi-Channel Maturity**: Native support for Telegram, Discord, Slack, Feishu, Google Chat, BlueBubbles/iMessage — broadest channel ecosystem observed.
- **Subagent/Collector Architecture**: Unique "swarm/collector" pattern for nested agent orchestration (Lobster workflows, yield/strand semantics) — peers use simpler tool-call or single-agent loops.
- **Doctor/Repair System**: Automated upgrade/repair CLI (`doctor --fix`) with consent gates — only NanoClaw shows comparable install/upgrade hardening.

**Technical Approach Differences**
- **Gateway-Centric**: Central `Gateway` process manages sessions, channels, providers, and subagent lifecycle — vs. NanoBot/ZeroClaw's daemon+CLI split or CoPaw's Electron renderer/main.
- **Session-State as Source of Truth**: SQLite transcript + `agents_wait`/`sessions_yield` primitives — peers use in-memory turn state (ZeroClaw) or file-based history (NanoBot).
- **Provider Alias Resolution via `models.dev`**: Declarative provider registry — NanoBot/NanoClaw hardcode or config-file providers.

**Community Size**
- **Largest active contributor base** (implied by PR volume, distinct author tags in merged PRs: Kilocode, StepFun, QA Lab, Gateway, Web UI teams).
- **Highest user pain visibility**: P0/P1 issues with "diamond lobster"/"platinum hermit" severity tags indicate power-user production deployments at scale — peers report fewer severity-tiered bugs.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Upgrade/Repair Reliability** | OpenClaw, NanoClaw, ZeroClaw, NanoBot | Atomic migrations (NanoClaw #3766), consent-gated repair (OpenClaw #146693), release automation (ZeroClaw #10814), headless install (NanoBot #5735) |
| **Session/History Persistence & Recovery** | OpenClaw, ZeroClaw, CoPaw, LobsterAI, NanoBot | Subagent completion delivery (OpenClaw #143334), ACP turn durability (ZeroClaw #10788), session loss on shutdown (CoPaw #7724), incremental history replay (NanoBot #5745) |
| **Provider Fallback & Multi-Model Routing** | ZeroClaw, NanoBot, NanoClaw, OpenClaw | Stream→non-stream fallback (ZeroClaw #10736), model failover after deadline (NanoBot #5675), Codex/Claude/Opencode parity (NanoClaw #3489), provider alias resolution (OpenClaw #144960) |
| **Security Hardening** | NanoBot, ZeroClaw, OpenClaw, Moltis | Path traversal in session keys (NanoBot #5633), canonical principals/grants (ZeroClaw #10248), TLS ALPN restriction (Moltis #1261), shell permission policy (ZeroClaw #10610) |
| **Cross-Platform Parity (Win/macOS/Linux)** | OpenClaw, NanoClaw, ZeroClaw, CoPaw | Windows stack guard (ZeroClaw #10734), APFS timestamp delay (OpenClaw #146722), Linux nohup fallback (NanoClaw #3768), headless auth (NanoBot #5735) |
| **Tool/Protocol Interop (MCP, ACP, A2A)** | OpenClaw, CoPaw, ZeroClaw, NanoClaw, LobsterAI | MCP server init crashes (OpenClaw #144911), A2A missing (CoPaw #7484), ACP turn persistence (ZeroClaw #10673), OpenClaw subagent empty response (LobsterAI #2658) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | NanoBot | NanoClaw | Hermes Agent | CoPaw | LobsterAI | Moltis | PicoClaw | IronClaw |
|-----------|----------|----------|---------|----------|--------------|-------|-----------|--------|----------|----------|
| **Primary Interface** | Web UI + CLI + Multi-channel | ZeroCode (TUI) + CLI | Web UI + Headless | Web UI + CLI | CLI/TUI + Kanban | Electron Desktop | Electron Desktop | Web/API | Web + IRC/iMessage | Slack/Assistant |
| **Target User** | Power users, teams, multi-channel ops | Developers, terminal-first | Self-hosters, headless servers | Self-hosters, channel integrators | Developer-productivity, task mgmt | Desktop plugin ecosystem | Chinese-market productivity | Multi-tenant bot platforms | Lightweight/embedded | Slack workspace admins |
| **Architecture** | Gateway + Subagent Swarm | Daemon + RPC + SOP Engine | React + Go + SQLite | Go + SQLite + Channels | Rust + Kanban + Adapters | Electron + Plugin Host | Electron + OpenClaw Fork | Go + Provider Table | Go + Channels | Python + Slack Bolt |
| **Key Differentiator** | Subagent yield/strand, Doctor repair | SOP workflows, cost-ledger, ACP | Incremental history, headless UX | Code Mode (tmux coding), Voice | Kanban-driven agent tasks | ReMeLight memory, Plugin Store | Cowork sessions, Scheduled tasks | TLS hygiene, Provider simplicity | IRCv3, iMessage, Privacy sanitizer | Shared-channel Slack routing |
| **Extension Model** | Skills (ClawHub), Extensions | Plugins (durable scheduler) | Integrations, Providers | Skills, Channels, MCP | Adapters (40+ being consolidated) | Plugins (Creator, ReMe, etc.) | OpenClaw-compatible | Provider table-driven | MCP, Channels | Slack capabilities matrix |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity + High Fix Rate)** | OpenClaw, ZeroClaw, NanoBot, NanoClaw | 9–226 merges/day; P0/P1 bugs fixed in hours; active contributor rosters; release blockers tracked explicitly |
| **Feature-Complete / Stabilizing** | Moltis, NullClaw, IronClaw | Low churn; PRs are hardening/security; no feature PRs; releases infrequent but reliable |
| **Bottlenecked / Review-Constrained** | CoPaw, Hermes Agent, LobsterAI | CoPaw: 0 merges/15 issues; Hermes: 2,743 uncloseable issues; LobsterAI: 167-day stale PRs with fixes ready |
| **At Risk / Infrastructure Debt** | PicoClaw | TLS cert expired (site down); 55-day Web UI lag; 55-day IRC bug; 1 merged PR/24h |
| **Inactive** | ZeptoClaw | No 24h activity |

**Maturity Insight**: Projects with **dedicated "doctor/repair" subsystems** (OpenClaw, NanoClaw, ZeroClaw) show highest production readiness. Those relying on Electron (CoPaw, LobsterAI) face deeper memory/renderer stability challenges. Rust-based (ZeroClaw, Hermes) and Go-based (NanoClaw, Moltis, PicoClaw) projects exhibit fewer runtime crashes but more platform-specific CI issues.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Reliability > Features** | 8/10 active projects merging stability fixes; zero feature releases today | **Invest in upgrade atomicity, session durability, and observability** — users punish data loss more than missing features |
| **Headless/Automation First** | NanoBot headless auth fix (#5735), NanoClaw Codex auth overhaul (#3489), ZeroClaw SOP engine (#10066) | **Design for non-interactive CI/CD, scheduled tasks, and remote operation** — desktop-only is a shrinking segment |
| **Multi-Protocol Interop (MCP/ACP/A2A)** | CoPaw A2A promised, ZeroClaw ACP persistence, OpenClaw MCP crashes, NanoClaw MCP skills | **Build protocol adapters as first-class citizens** — vendor lock-in (Claude Code, Codex) is a user pain point |
| **Cost & Resource Governance** | ZeroClaw u32::MAX vs $10/day ledger (#10635), NanoBot history replay bounds (#5745), CoPaw OOM paths (#7722) | **Implement scoped cost tracking and memory budgets** — enterprise adoption requires predictable resource envelopes |
| **Security as Default** | NanoBot path traversal (#5633), ZeroClaw canonical principals (#10248), Moltis ALPN restriction (#1261) | **Adopt capability-based tool permissions and supply-chain verification** — plugin/skill ecosystems expand attack surface |
| **Accessibility & Inclusive Design** | OpenClaw Linear Persistent Workspace for blind users (#82450) | **Design for screen readers, keyboard-only, and persistent context** — underserved high-value user segment |
| **Companion/Ecosystem APIs** | OpenClaw SQLite transcript API umbrella (#79902), ZeroClaw log rotation (#10214) | **Expose structured, versioned APIs for external tooling** — the "agent as platform" model requires companion contracts |

---

**Bottom Line for Decision-Makers**: The ecosystem is consolidating around **production-grade reliability patterns** (atomic upgrades, durable sessions, scoped permissions, cost observability). Projects lacking automated repair, headless operation, or protocol interop will struggle to retain users beyond hobbyist tiers. OpenClaw's scale makes it a de facto reference implementation for multi-channel, subagent-orchestrated architectures — but its complexity demands significant ops investment. ZeroClaw and NanoClaw represent the most transferable patterns for teams building developer-facing agents.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-13

## 1. Today's Overview

NanoBot showed **high development velocity** on 2026-09-13 with **15 PRs updated** (9 closed/merged, 6 open) and **4 issues updated** (3 new open, 1 closed). The project is actively addressing **reliability** (recovery/checkpointing), **security** (path traversal), **performance** (streaming, history replay), and **usability** (headless login, web UI polish). No releases were cut today, but multiple merged PRs represent production-ready fixes. Community engagement remains modest (low comment/reaction counts), suggesting a focused contributor base rather than broad community discussion.

---

## 2. Releases

**No new releases** published today. The last release information is not provided in the current data window.

---

## 3. Project Progress — Merged/Closed PRs (9 items)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5743](https://github.com/HKUDS/nanobot/pull/5743) | WebUI UX | Simplified settings catalog: Calendar as default Automations view, shared composer for creation, compact toolbar | Usability improvement; reduces UI complexity |
| [#5735](https://github.com/HKUDS/nanobot/pull/5735) | WebUI/Bug | **Headless login made self-explanatory** — detects text-only browsers (links, lynx, w3m), prints manual SSH handoff instructions with derived target address | **Directly fixes #5726** (user couldn't find initial password on headless server) |
| [#5752](https://github.com/HKUDS/nanobot/pull/5752) | Integrations | Codex/integrations stability upstream | Stability for Codex provider |
| [#5738](https://github.com/HKUDS/nanobot/pull/5738) | Performance | Reduced long-text streaming refresh overhead: bounded reasoning preview to 512 UTF-16 units, kept full preview in tooltip | Performance; addresses [NAN-113](https://linear.app/nanobot-ai/issue/NAN-113) |
| [#5746](https://github.com/HKUDS/nanobot/pull/5746) | Feature/Provider | **Added DaoXE as named gateway provider** | Expands provider ecosystem |
| [#5739](https://github.com/HKUDS/nanobot/pull/5739) | CI/CD | Dev pipeline improvements | Infrastructure |
| [#5745](https://github.com/HKUDS/nanobot/pull/5745) | Performance/Bug | **Large history replay made incremental & cached** — bounded by message/record/byte budgets, moved parsing/recovery off event loop, 40-msg initial page with stale-while-revalidate | **P1 fix**; major scalability improvement for long conversations |
| [#5613](https://github.com/HKUDS/nanobot/pull/5613) | Provider/Bug | Cleaned up replayed items before sending to providers — prevents Responses API failures from provider-generated IDs and unsupported fields | Provider reliability |
| [#5675](https://github.com/HKUDS/nanobot/pull/5675) | Provider/Regression | **Model failover after runner deadlines** — fixes hanging primary model exhausting deadline before fallback can trigger | Critical reliability for multi-model setups |

**Key advances today**: Headless authentication UX fixed, history replay scalability resolved, provider failover reliability restored, DaoXE provider added.

---

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#5726](https://github.com/HKUDS/nanobot/issues/5726) **CLOSED** — *Startuo initial password?* | 2 comments, P1 bug | **Headless server operators need clear authentication flow** — user installed on headless server, accessed via text browser (links), couldn't find password. **Fixed by #5735** (merged). |
| [#5721](https://github.com/HKUDS/nanobot/issues/5721) **OPEN** — *Durable memory across sessions?* | 1 comment, 0 👍 | **Enterprise/multi-deployment memory sharing** — MemCode CEO proposing hosted/self-managed memory backend integration. Signals demand for **persistent, portable agent memory** across deployments. |
| [#5749](https://github.com/HKUDS/nanobot/issues/5749) **OPEN** — *Expose stable tool invocation context for idempotent side effects* | 0 comments | **Developer tooling need** — tools need stable invocation identity for idempotency (e.g., payment APIs, external mutations). **PR #5750** addresses this. |
| [#5747](https://github.com/HKUDS/nanobot/issues/5747) **OPEN** — *Recovery: persist completed tool results at execution-batch boundaries* | 0 comments | **Crash consistency** — current checkpointing loses completed tool results if crash occurs mid-batch. **PR #5748** addresses this. |

**Analysis**: The headless auth issue (#5726) was the only user-facing pain point with immediate resolution. The memory proposal (#5721) reveals a strategic direction request. The two tool-execution issues (#5749, #5747) from the same author (xiexiahao) indicate **deep runtime reliability work** underway.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue/PR | Status | Fix PR |
|----------|----------|--------|--------|
| **P1 (Critical)** | [#5633](https://github.com/HKUDS/nanobot/pull/5633) — Session key path traversal (`../../etc/passwd`) | **Open** (updated today) | **#5633** (validation at persistence chokepoint) |
| **P1** | [#5745](https://github.com/HKUDS/nanobot/pull/5745) — Large history replay blocks event loop, unbounded memory | **Merged** | **#5745** (incremental, cached, off-loop) |
| **P1** | [#5675](https://github.com/HKUDS/nanobot/pull/5675) — Fallback provider never tried after runner deadline | **Merged** | **#5675** (controlled failover) |
| **P2** | [#5751](https://github.com/HKUDS/nanobot/pull/5751) — Editing automation recomputes next_run incorrectly (skips/delays runs) | **Open** (updated today) | **#5751** (preserve pending runs) |
| **P2** | [#5673](https://github.com/HKUDS/nanobot/pull/5673) — Remote WebUI project paths / picker capabilities | **Open** (updated today, conflict) | **#5673** (honor gateway folder-picker) |
| **P2** | [#5747](https://github.com/HKUDS/nanobot/issues/5747) — Crash loses completed tool results mid-batch | **Open** | **#5748** (persist at batch boundaries) |
| **P2** | [#5735](https://github.com/HKUDS/nanobot/pull/5735) — Headless login confusing (text browsers) | **Merged** | **#5735** (detect + print handoff) |

**Security note**: #5633 (path traversal in session keys) is the only **security-classified** bug today — still open but fix implemented in PR.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|----------------------------|-----------|
| **Durable/shared memory backend** (MemCode integration) | [#5721](https://github.com/HKUDS/nanobot/issues/5721) | Medium | External CEO proposal; aligns with "memory across deployments" trend; requires architecture discussion |
| **Stable tool invocation context** (idempotency) | [#5749](https://github.com/HKUDS/nanobot/issues/5749) + [#5750](https://github.com/HKUDS/nanobot/pull/5750) | **High** | PR #5750 already open, fixes the issue; low-risk ContextVar addition |
| **Checkpoint at tool-batch boundaries** | [#5747](https://github.com/HKUDS/nanobot/issues/5747) + [#5748](https://github.com/HKUDS/nanobot/pull/5748) | **High** | PR #5748 open; critical for production reliability |
| **DaoXE provider** | [#5746](https://github.com/HKUDS/nanobot/pull/5746) | **Done** | Already merged |
| **Remote project path support** | [#5673](https://github.com/HKUDS/nanobot/pull/5673) | Medium | Open with conflict; needed for remote WebUI workflows |

**Prediction**: Tool invocation context (#5750) and batch-boundary checkpointing (#5748) are the most likely near-term merges — both have PRs ready, address core runtime gaps, and are from active contributor xiexiahao.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Resolution Status |
|------------|----------|-------------------|
| **Headless server authentication** — "no idea which password to write in web UI" | [#5726](https://github.com/HKUDS/nanobot/issues/5726) (user gardiol) | **Fixed** via #5735 (detects text browsers, prints SSH handoff) |
| **Long conversation history replay blocks UI** | Implied by [#5745](https://github.com/HKUDS/nanobot/pull/5745) (P1 perf fix) | **Fixed** — incremental, cached, bounded |
| **Model failover silently broken** | [#5675](https://github.com/HKUDS/nanobot/pull/5675) (hanging primary blocks fallback) | **Fixed** |
| **Remote WebUI opens local file picker** | [#5673](https://github.com/HKUDS/nanobot/pull/5673) | **In progress** (PR open, has conflict) |
| **Automation editing breaks schedules** | [#5751](https://github.com/HKUDS/nanobot/pull/5751) | **In progress** (PR open) |

**Satisfaction signals**: Rapid fix for headless auth (issue → PR → merge in ~2 days). **Dissatisfaction risks**: Automation schedule bug (#5751) affects reliability of scheduled tasks; remote path support (#5673) blocks remote workflows.

---

## 8. Backlog Watch — Needing Maintainer Attention

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#5633](https://github.com/HKUDS/nanobot/pull/5633) — Path traversal in session keys | 11 days (created 2026-09-02) | **Security vulnerability** — untrusted session ID escapes sessions dir; P1, security-labeled | Open, needs review/merge |
| [#5673](https://github.com/HKUDS/nanobot/pull/5673) — Remote project paths & picker | 8 days (created 2026-09-05) | Enables remote WebUI usage; marked **conflict** | Merge conflict needs resolution |
| [#5721](https://github.com/HKUDS/nanobot/issues/5721) — Durable memory across sessions | 4 days | Strategic feature request from external founder; could define memory architecture | No PR yet; needs design discussion |
| [#5751](https://github.com/HKUDS/nanobot/pull/5751) — Automation edit breaks next_run | 1 day | P2 regression; scheduled tasks silently skip/fail | Open, needs review |
| [#5749](https://github.com/HKUDS/nanobot/issues/5749) / [#5750](https://github.com/HKUDS/nanobot/pull/5750) — Tool invocation context | 1 day | Enables idempotent tools; PR ready | PR open, needs review |
| [#5747](https://github.com/HKUDS/nanobot/issues/5747) / [#5748](https://github.com/HKUDS/nanobot/pull/5748) — Batch-boundary checkpointing | 1 day | Crash consistency for tool execution; PR ready | PR open, needs review |

**Top priority for maintainers**: **#5633 (security)** — oldest open P1 security fix. Then **#5673 (remote WebUI)** — unblocks remote users. The three xiexiahao PRs (#5748, #5750, plus issue #5749) form a cohesive reliability batch worth reviewing together.

---

## Project Health Indicators

| Metric | Signal |
|--------|--------|
| **PR throughput** | 9 merged/closed in 24h — **strong** |
| **Issue-to-PR ratio** | 3 new issues → 2 already have fix PRs (#5749→#5750, #5747→#5748) — **responsive** |
| **Security hygiene** | One P1 security PR open 11 days — **needs attention** |
| **Contributor depth** | chengyongru, xiexiahao, Re-bin, beemines, kkkhoo, be-student, aniruddhaadak80 — **healthy multi-contributor** |
| **Release cadence** | No release today despite 9 merged PRs — **may batch releases** |

**Overall**: NanoBot is in active, healthy development with strong focus on production reliability (recovery, failover, history scaling, security). The headless UX fix shows user-facing responsiveness. The memory proposal (#5721) hints at next strategic phase.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-13

---

## 1. Today's Overview

Hermes Agent shows **high development velocity** with 50 PRs updated in the last 24 hours, though only 2 were merged/closed. The project is in a heavy refactoring and bug-fix phase rather than feature release mode. A notable operational burden exists: **2,743 open issues** are already labeled `duplicate` or `invalid` but remain unclosed due to triage permission gaps. Kanban subsystem stability is a current focus, with two related bugs (#109260, #107398) fixed via PR #109334. No new releases were published today.

---

## 2. Releases

**No new releases** in the last 24 hours.

---

## 3. Project Progress

### Merged / Closed PRs (2)

| PR | Title | Impact |
|----|-------|--------|
| [#109334](https://github.com/NousResearch/hermes-agent/pull/109334) | **fix(kanban): initial_status=blocked gates survive board reads and dispatcher ticks** | **Critical stability fix**. Cards created with `--initial-status blocked` now remain blocked until explicit `kanban_unblock`. Fixes #109260, #107398. Prevents silent promotion during `hermes kanban list` or dashboard API reads. |
| [#107858](https://github.com/NousResearch/hermes-agent/pull/107858) | **fix(tools): mid-turn steer releases a blocking process_manage wait** | **UX improvement**. User messages sent while model waits in `process_manage(action='wait')` now interrupt the wait (<1s), allowing immediate response. Ports fix from kimi-code#3697. |

### Notable Open PRs Advancing Key Areas

| PR | Area | Significance |
|----|------|--------------|
| [#109602](https://github.com/NousResearch/hermes-agent/pull/109602) | **Platform/Adapter Refactor** | Massive consolidation: replaces ~40 hand-rolled adapter copies with single scoped-secret reader, spec-driven enablement, YAML→env bridge, access-policy mixin, shared Ogg/Opus transcoding, task/dedup utilities. |
| [#109596](https://github.com/NousResearch/hermes-agent/pull/109596) | **CLI/TUI** | Adds opt-in `custom` status-bar field rendering shell command output — prompt-segment equivalent for Hermes status bar. |
| [#109601](https://github.com/NousResearch/hermes-agent/pull/109601) | **Kanban** | Two-tier `active_pr` respawn guard by PR-URL attribution; distinguishes valid PR ownership from incidental mentions. |
| [#109600](https://github.com/NousResearch/hermes-agent/pull/109600) | **Update/Fleet** | Stops fulfilled fleet restarts from staying pending; requires matching updater receipt and post-marker process incarnations. |

---

## 4. Community Hot Topics

### Most Active Issue (by comments)
| Issue | Comments | Summary |
|-------|----------|---------|
| [#109552](https://github.com/NousResearch/hermes-agent/issues/109552) | **12** | **Triage backlog crisis**: 2,743 open tickets labeled `duplicate`/`invalid` cannot be closed by reporter (no triage permissions). Duplicate copies point to still-open canonicals. Requires maintainer triage access or automation. |

### Recently Closed Bugs with Discussion
| Issue | Comments | Resolution |
|-------|----------|------------|
| [#109260](https://github.com/NousResearch/hermes-agent/issues/109260) | 6 | Kanban `--initial-status blocked` undone by any board read. Fixed by #109334. |
| [#107398](https://github.com/NousResearch/hermes-agent/issues/107398) | 2 | Parent-gating promotes `blocked` human-gate cards to `ready`. Fixed by #109334. |

**Underlying needs**: 
- **Triage automation/permissions** — community cannot self-clean duplicate/invalid labels
- **Kanban reliability** — human-in-the-loop blocking must survive passive reads
- **Adapter maintainability** — 40+ near-duplicate implementations signal technical debt

---

## 5. Bugs & Stability

### Reported / Active Today (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#109552](https://github.com/NousResearch/hermes-agent/issues/109552) — 2,743 duplicate/invalid issues stuck open | **Open** | None (requires triage permissions/automation) |
| **Medium** | [#104088](https://github.com/NousResearch/hermes-agent/pull/104088) — CUA bare driver name resolution in `--no-overlay` probe | **Open PR** | #104088 (open since 2026-09-06) |
| **Medium** | [#57519](https://github.com/NousResearch/hermes-agent/pull/57519) — `/compact` slash command collision (ACP vs TUI vs UI-TUI) | **Open PR** | #57519, #57208 (both open since July) |
| **Medium** | [#57137](https://github.com/NousResearch/hermes-agent/pull/57137) — Auth: silent empty API key when all pool entries exhausted (429) | **Open PR** | #57137 (open since July) |
| **Low** | [#57349](https://github.com/NousResearch/hermes-agent/pull/57349) — Telegram debug-log unmentioned group drops | **Open PR** | #57349 (open since July) |

### Recently Fixed (Closed Today)
- **Kanban blocked-status promotion** (#109260, #107398) → Fixed by merged #109334
- **Mid-turn steer wait release** → Fixed by merged #107858

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Custom status-bar command output** | PR [#109596](https://github.com/NousResearch/hermes-agent/pull/109596) (new today) | **High** — Small, self-contained, adds user-extensible UX |
| **Scoped-secret reader & spec-driven adapter enablement** | PR [#109602](https://github.com/NousResearch/hermes-agent/pull/109602) (new today) | **High** — Major refactor reducing ~40 adapter copies; likely milestone |
| **Two-tier PR respawn guard** | PR [#109601](https://github.com/NousResearch/hermes-agent/pull/109601) (new today) | **Medium** — Kanban workflow refinement |
| **Stream `reasoning_content` deltas via SSE** | PR [#57094](https://github.com/NousResearch/hermes-agent/pull/57094) (open since July) | **Medium** — OpenAI-compatible streaming; depends on API server stability |
| **Cron script execution from job workdir** | PR [#57415](https://github.com/NousResearch/hermes-agent/pull/57415) (open since July) | **Medium** — Low-risk, improves cron usability |
| **Provider alias normalization for `hermes auth`** | PR [#57327](https://github.com/NousResearch/hermes-agent/pull/57327) (open since July) | **High** — Consistency fix; mirrors `hermes model` behavior |

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Triage paralysis** — Contributors cannot close obvious duplicates/invalids | [#109552](https://github.com/NousResearch/hermes-agent/issues/109552): "This account cannot close other people's tickets here (no triage)" |
| **Kanban human-gate reliability** — Blocked cards promoted by passive reads breaks HITL workflows | [#109260](https://github.com/NousResearch/hermes-agent/issues/109260), [#107398](https://github.com/NousResearch/hermes-agent/issues/107398) |
| **Mid-turn interruption latency** — Long waits block user steer | [#107858](https://github.com/NousResearch/hermes-agent/pull/107858): "wait releases in under a second" after fix |
| **Adapter fragmentation** — 40+ near-identical implementations | [#109602](https://github.com/NousResearch/hermes-agent/pull/109602): "Buzz's 113-LOC secret reader with one bug" |
| **CLI/TUI command collisions** — `/compact` registered by 3 components | [#57519](https://github.com/NousResearch/hermes-agent/pull/57519), [#57208](https://github.com/NousResearch/hermes-agent/pull/57208) |
| **Auth provider alias inconsistency** — `hermes model` accepts aliases, `hermes auth` rejects | [#57327](https://github.com/NousResearch/hermes-agent/pull/57327) |

**Overall sentiment**: Active contributors are fixing deep subsystem bugs (kanban, auth, adapters) but operational bottlenecks (triage permissions, stale PRs) persist.

---

## 8. Backlog Watch — Stale High-Impact Items Needing Maintainer Attention

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#57519](https://github.com/NousResearch/hermes-agent/pull/57519) / [#57208](https://github.com/NousResearch/hermes-agent/pull/57208) — `/compact` collision fix | **73 days** (since 2026-07-02) | Blocks coexistence with Claude Code in VS Code; two competing PRs, neither merged | Decision on which approach to accept; possible three-way coordination |
| [#57137](https://github.com/NousResearch/hermes-agent/pull/57137) — Auth: surface real 429 on pool exhaustion | **73 days** | Security/compatibility: silent empty API key causes confusing failures | Requires auth pool redesign review |
| [#57094](https://github.com/NousResearch/hermes-agent/pull/57094) — Stream `reasoning_content` via SSE | **73 days** | OpenAI-compatible reasoning streaming; requested for API parity | Depends on API server stability; may need spec alignment |
| [#56957](https://github.com/NousResearch/hermes-agent/pull/56957) — OpenRouter auxiliary token caps | **73 days** | Preserves `max_tokens` caps for OpenRouter-hosted models | Low-risk but unmerged; may need provider test coverage |
| [#109552](https://github.com/NousResearch/hermes-agent/issues/109552) — 2,743 duplicate/invalid issues | **New (today)** | Noise reduces issue tracker utility; requires triage automation or permission grants | No automation; limited maintainer triage bandwidth |

---

**Project Health Indicator**: 🟡 **Active Development / Operational Debt**  
High PR velocity and subsystem fixes indicate strong engineering momentum, but triage backlog, stale PRs (70+ days), and permission gaps suggest maintainer bandwidth is the primary constraint. The adapter consolidation (#109602) and kanban fixes (#109334) are positive structural investments.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-13

## 1. Today's Overview
PicoClaw shows moderate community activity with **4 issues** and **4 pull requests** updated in the last 24 hours, but **no new releases**. The project faces a **critical infrastructure issue**: the TLS certificate for picoclaw.io expired on 2026-09-10, rendering the project homepage inaccessible to all browsers. Development continues on feature enhancements (iMessage support, OpenAI-compatible providers, MCP integrations) and a notable Web UI performance regression (laggy input with long chat history). One PR (#1268) was closed/merged today, delivering iMessage support and logging improvements.

## 2. Releases
**No new releases published today.** The latest version remains **0.3.1** (referenced in issue #3281).

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Type | Key Changes |
|----|-------|------|-------------|
| [#1268](https://github.com/sipeed/picoclaw/pull/1268) | imessage support stop command some logs | Enhancement (provider, channel) | • Added iMessage channel support<br>• Added LLM API call logging<br>• Added conversation logging<br>• Added `/stop` command<br>• Added privacy sanitizer |

**Impact**: Expands channel ecosystem (iMessage), improves observability (logging), and adds user control (`/stop`). Privacy sanitizer addresses data-handling concerns.

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Feature (IRC) | 12 | 0 | **IRCv3 long-message cohesion** — Users need PicoClaw to reassemble split IRC messages (>512 bytes) into single logical messages for correct LLM context. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Bug (Web UI) | 11 | 2 👍 | **Web UI input lag with history** — Input becomes "very laggy" as chat history grows (v0.3.1, Go 1.25.11). High user pain; likely DOM/rendering bottleneck. |
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | Critical (Infra) | 0 | 1 👍 | **TLS certificate expired** — picoclaw.io down for all browsers since 2026-09-10. Blocks discovery, docs access, and trust. Time-sensitive. |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | Feature (Provider) | 2 | 0 | **OpenAI-compatible provider** — Request for generic "OpenAI Compatible" provider to support self-hosted routers (e.g., 9Router). |

**Analysis**: The top two issues (#3287, #3281) are **stale (open since July)** with high comment counts, indicating persistent, unresolved user pain. The critical infra issue (#3377) is new but requires immediate maintainer action. Feature request #3366 signals growing demand for **provider-agnostic LLM integration**.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#3377](https://github.com/sipeed/picoclaw/issues/3377) — TLS cert expired, site down | Open, 0 comments | No |
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI input lag with history | Open (stale), 11 comments, 2 👍 | No |
| **Medium** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) — IRC long messages split incorrectly | Open (stale), 12 comments | No |

**Note**: No bug-fix PRs opened today. The Web UI lag (#3281) and IRC message handling (#3287) have lingered ~2 months without resolution.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **OpenAI-compatible provider** | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | High | Low-effort (copy of OpenAI provider); enables self-hosted routers; aligns with multi-provider trend. |
| **iMessage channel** | [#1268](https://github.com/sipeed/picoclaw/pull/1268) (merged) | ✅ Delivered | Already merged; expands consumer-facing channels. |
| **Parallel Search MCP** | [#3368](https://github.com/sipeed/picoclaw/pull/3368) (open) | Medium | Docs-only PR; adds web search via MCP without API key. Useful but niche. |
| **Pilot MCP** | [#3367](https://github.com/sipeed/picoclaw/pull/3367) (open) | Medium | Docs-only; health-check command. Depends on Pilot adoption. |
| **IRCv3 long-message support** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Medium-High | High engagement (12 comments), but protocol complexity may delay. |

**Prediction**: Next version will likely include **OpenAI-compatible provider** and **MCP documentation updates**. iMessage is already in. IRC fix may slip unless prioritized.

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Web UI unusable with history** | #3281: "very laggy" input, 2 👍, 11 comments | High — daily driver regression for web users. |
| **Project site unreachable** | #3377: TLS expired, 1 👍 | High — blocks onboarding, docs, credibility. |
| **IRC messages fragmented** | #3287: 12 comments, no 👍 | Medium — power users on IRC lose context. |
| **Provider lock-in** | #3366: Request for generic OpenAI-compatible | Medium — limits self-hosted/private LLM use. |

**Positive signals**: iMessage support merged; active MCP ecosystem contributions (Parallel, Pilot); privacy sanitizer added.

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|-------------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI lag | ~55 days | High user frustration; core UI regression | Profile render loop; virtualize message list; prioritize fix. |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC long messages | ~55 days | Protocol correctness; 12 comments show demand | Implement message reassembly per IRCv3 spec; assign owner. |
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) TLS certificate | 1 day | **Site down for all visitors**; trivial fix, high visibility | Renew cert immediately; automate renewal (Let's Encrypt + cron). |
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) Parallel Search MCP docs | ~8 days | Low-risk docs PR; enables web search out-of-box | Review & merge; good community contribution. |
| [#3367](https://github.com/sipeed/picoclaw/pull/3367) Pilot MCP docs | ~9 days | Same as above | Review & merge. |

---

**Project Health Score**: 🟡 **Caution**  
- ✅ Active feature development (channels, providers, MCP)  
- ⚠️ Critical infra failure (TLS) + two high-impact stale bugs  
- ⚠️ No bug-fix PRs today; maintainer bandwidth appears constrained  

**Immediate Priority**: Renew TLS certificate (#3377) → Triage Web UI lag (#3281) → Review/merge MCP docs PRs (#3367, #3368).

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-13

---

## 1. Today's Overview

NanoClaw shows **high velocity** with 31 total items updated in the last 24 hours (5 issues, 26 PRs). The project is in an active stabilization and feature-expansion phase: 11 PRs were merged/closed today, addressing setup regressions, SQLite migration races, webhook configuration bugs, and skill-installation reliability. Two new open issues highlight fresh-install regressions (provider picker skipped, channels branch drift). No new releases were cut; the team appears to be batching fixes onto `main` for a future release.

---

## 2. Releases

**No new releases** published today. The latest tagged release remains prior to the current `main` HEAD (`0399a6d`). All merged PRs today are post-release fixes and features.

---

## 3. Project Progress — Merged/Closed PRs Today (11)

| PR | Area | Summary | Link |
|----|------|---------|------|
| #3782 | containers, credentials | Pass session container name to gateway providers | [#3782](https://github.com/nanocoai/nanoclaw/pull/3782) |
| #3774 | credentials | Persist OneCLI gateway certs/credentials across restarts (fixes `EISDIR` on missing temp files) | [#3774](https://github.com/nanocoai/nanoclaw/pull/3774) |
| #3768 | setup-installation | Start & verify Linux nohup fallback service during setup | [#3768](https://github.com/nanocoai/nanoclaw/pull/3768) |
| #3776 | setup-installation, credentials, skills | Run downloaded installers via absolute system-shell path (fixes exe.dev `sh` PATH regression) | [#3776](https://github.com/nanocoai/nanoclaw/pull/3776) |
| #3770 | configuration, core | Honor `WEBHOOK_PORT` from `.env` (was ignored, only process env worked) | [#3770](https://github.com/nanocoai/nanoclaw/pull/3770) |
| #3767 | channels, setup-installation, skills | Preserve destination files on registry copy failure; allow retries | [#3767](https://github.com/nanocoai/nanoclaw/pull/3767) |
| #3766 | core | Re-check migrations under SQLite write lock (prevents duplicate migration runs during concurrent setup) | [#3766](https://github.com/nanocoai/nanoclaw/pull/3766) |
| #3773 | channels, setup-installation, skills | Fetch explicit registry tracking refs for single-branch clones | [#3773](https://github.com/nanocoai/nanoclaw/pull/3773) |
| #3758 | setup-installation | Skip portal reminders already answered by operator | [#3758](https://github.com/nanocoai/nanoclaw/pull/3758) |
| #3763 | providers, skills | Drop pre-CLI-tools Dockerfile guard test on `/add-opencode` refresh/remove | [#3763](https://github.com/nanocoai/nanoclaw/pull/3763) |
| #2901 (issue) | configuration | `WEBHOOK_PORT` in `.env` now honored (fixed by #3770) | [#2901](https://github.com/nanocoai/nanoclaw/issues/2901) |

**Theme**: Setup/installation hardening, configuration loading fixes, and skill/channel registry reliability dominate today’s merges.

---

## 4. Community Hot Topics

| Item | Type | Comments | Reactions | Signal |
|------|------|----------|-----------|--------|
| [#3787](https://github.com/nanocoai/nanoclaw/issues/3787) | Issue (Open) | 1 | 0 | **Fresh install regression**: Provider picker skipped, silently defaults to Claude. Blocks Codex/other provider selection. PR #3788 opened to fix. |
| [#3785](https://github.com/nanocoai/nanoclaw/issues/3785) | Issue (Open) | 0 | 0 | **Branch drift**: `channels` branch references `ChatSdkBridgeConfig.extractRawText` missing on `main`. Blocks Slack raw-text feature merge. |
| [#3789](https://github.com/nanocoai/nanoclaw/pull/3789) | PR (Open) | — | 0 | **Driver resilience**: Watch feed subscription failure must not break arming (linked to #1454). Core stability fix. |
| [#3489](https://github.com/nanocoai/nanoclaw/pull/3489) | PR (Open) | — | 0 | **Codex auth overhaul**: Structured, non-interactive setup-driver auth for Codex provider (unblocks headless/CI usage). |
| [#3783](https://github.com/nanocoai/nanoclaw/pull/3783) | PR (Open) | — | 0 | **Code Mode (major)**: Persistent coding sessions (Claude Code under tmux), sandbox verbs, boundary approvals, session-surface core. Large feature, multi-area. |

**Underlying needs**:  
- **Provider choice parity** — users expect to pick Codex/Claude/Opencode at first run.  
- **Headless/automation support** — Codex auth redesign targets CI and non-interactive environments.  
- **Session persistence** — "Code Mode" signals a shift toward long-lived, sandboxed coding agents vs. chat loops.  
- **Channel ecosystem maturity** — Voice (GPT-Live-1) and Slack adapters expanding multi-modal interaction.

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#3787](https://github.com/nanocoai/nanoclaw/issues/3787) | Fresh `bash nanoclaw.sh` skips provider picker, hard-defaults to Claude. Users cannot select Codex/Opencode on first install. | [#3788](https://github.com/nanocoai/nanoclaw/pull/3788) (open) |
| **High** | [#3765](https://github.com/nanoclaw/issues/3765) | Concurrent SQLite migrations during fresh setup cause initializer crash (host + CLI agent race). | [#3766](https://github.com/nanocoai/nanoclaw/pull/3766) **merged** |
| **Medium** | [#2901](https://github.com/nanocoai/nanoclaw/issues/2901) | `WEBHOOK_PORT` in `.env` silently ignored; only process env worked. Doc/config mismatch. | [#3770](https://github.com/nanocoai/nanoclaw/pull/3770) **merged** |
| **Medium** | [#3762](https://github.com/nanocoai/nanoclaw/issues/3762) | `/add-opencode` remove/upgrade leaves stale Dockerfile guard test (`src/opencode-dockerfile.test.ts`). | [#3763](https://github.com/nanocoai/nanoclaw/pull/3763) **merged** |
| **Medium** | [#3785](https://github.com/nanocoai/nanoclaw/issues/3785) | `channels` branch Slack adapter imports non-existent `extractRawText` on `main`. Blocks merge. | — (needs core change on `main`) |
| **Low** | [#3750](https://github.com/nanocoai/nanoclaw/pull/3750) | `/update-nanoclaw` skill omits `scripts/provider-contract-verifier.ts` → controller fails at module load. | Open, under review |

**Stability takeaway**: Setup-path regressions (provider picker, SQLite race, config loading) are the primary risk surface. All but #3787 and #3785 have fixes merged or in review.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Code Mode (persistent coding sessions)** | [#3783](https://github.com/nanocoai/nanoclaw/pull/3783) — large PR, core-team label, touches runner, containers, sessions, approvals, sandbox verbs | **High** — flagship feature, active development |
| **Voice channel (GPT-Live-1 full-duplex browser calls)** | [#3772](https://github.com/nanocoai/nanoclaw/pull/3772), [#3764](https://github.com/nanocoai/nanoclaw/pull/3764) — skill + adapter, core-team, delivery/skill | **High** — skill-ready, adapter on `channels` branch |
| **Codex structured auth (headless/CI)** | [#3489](https://github.com/nanocoai/nanoclaw/pull/3489) — follows-guidelines, core-team | **High** — unblocks automation, provider parity |
| **Community Portal: remote terminal + chat surface** | [#3784](https://github.com/nanocoai/nanoclaw/pull/3784) — opt-in SSH relay, per-session chat | **Medium** — extends Code Mode, depends on #3783 |
| **Typing indicator tied to runner turn state** | [#3786](https://github.com/nanocoai/nanoclaw/pull/3786) — mailbox model, status text | **Medium** — UX polish for channels/sessions |
| **Slack raw-text extraction** | [#3785](https://github.com/nanocoai/nanoclaw/issues/3785) — blocked on core API addition | **Medium** — requires `main` change, then `channels` merge |

**Roadmap inference**: Next release will likely center on **Code Mode** + **Voice** + **Codex auth** as the three pillars, with setup/config bugfixes as the baseline.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **First-run provider choice broken** | #3787: "fresh install no longer asks which agent runtime" | New regression, high visibility |
| **Config in `.env` not respected** | #2901 (open since Jul), #3770 fix merged today | Long-standing, documented vs. actual mismatch |
| **Skill upgrade/remove leaves cruft** | #3762: stale test file persists across upgrades | Affects `/add-opencode` users |
| **Linux fallback service not started** | #3768: setup wizard cannot reach host on nohup path | Platform-specific gap |
| **Portal reminders re-ask answered questions** | #3758 fixed today | UX friction during setup |
| **Headless Codex auth impossible** | #3489: old flow required terminal, `process.exit(1)` on failure | Blocker for CI/automation |

**Satisfaction signals**: Rapid fix turnaround (multiple same-day merges for setup bugs) suggests maintainers prioritize install/upgrade reliability. No explicit positive feedback in data, but velocity on fixes is a proxy for responsiveness.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3785](https://github.com/nanocoai/nanoclaw/issues/3785) | 1 day | Open, 0 comments | **Blocks `channels` branch merge** — Slack adapter broken on `main`; needs core API (`extractRawText`) landed first. |
| [#3750](https://github.com/nanocoai/nanoclaw/pull/3750) | 5 days | Open, 0 comments | **`/update-nanoclaw` broken** — missing `scripts/provider-contract-verifier.ts` in git archive; update skill unusable. |
| [#3489](https://github.com/nanocoai/nanoclaw/pull/3489) | 21 days | Open, 0 comments | **Codex auth redesign** — large, follows-guidelines, core-team labeled; stalled review? Critical for provider parity. |
| [#3783](https://github.com/nanocoai/nanoclaw/pull/3783) | 1 day | Open, 0 comments | **Code Mode mega-PR** — 13 area labels, foundational; needs thorough review before merge. |
| [#3784](https://github.com/nanocoai/nanoclaw/pull/3784) | 1 day | Open, 0 comments | **Community Portal extensions** — depends on #3783; review sequencing needed. |
| [#3786](https://github.com/nanocoai/nanoclaw/pull/3786) | 1 day | Open, 0 comments | **Typing indicator overhaul** — changes mailbox model; cross-area (runner, channels, sessions). |

**Recommendation**: Prioritize #3785 (unblocks channel work), #3750 (restores update skill), and #3489 (provider parity). Schedule dedicated review slots for the two large features (#3783, #3784) to avoid merge conflicts.

---

*Digest generated from GitHub API data as of 2026-09-13. All links point to nanocoai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-13

## 1. Today's Overview
NullClaw saw minimal community activity in the past 24 hours with zero new issues and no releases. The sole movement was the merge of PR #996, a targeted stability fix for MCP stdio transport timeout handling. The project remains in a maintenance/stabilization phase with core test suite passing (7,373 tests). No breaking changes or feature work surfaced today.

## 2. Releases
**No new releases published today.** The latest release information is not available in the provided data.

## 3. Project Progress
### Merged PRs (1)
- **[#996 fix(mcp): bound stdio response waits](https://github.com/nullclaw/nullclaw/pull/996)** — *Merged 2026-09-12*  
  Fixes issue #991. Applies `timeout_ms` to stdio MCP response reads and terminates the server's process group on request timeout. Failed initialization now cleans up spawned child processes. Validated via full test suite (7,373 passed, 9 skipped) and ReleaseSmall build.

## 4. Community Hot Topics
**No active issues or PRs with significant discussion in the last 24 hours.** The only recent PR (#996) had zero comments/reactions, indicating routine maintenance rather than community debate.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| Medium | MCP stdio response reads could hang indefinitely on timeout; child process leakage on failed init | **Fixed** | [#996](https://github.com/nullclaw/nullclaw/pull/996) (merged) |

No new bugs, crashes, or regressions reported today.

## 6. Feature Requests & Roadmap Signals
**No new feature requests or roadmap discussions captured today.** The merged PR is purely a reliability fix with no user-facing feature additions. Based on the MCP transport focus, future work may continue hardening stdio/stdio-adjacent integrations.

## 7. User Feedback Summary
**No direct user feedback (issues, comments, reactions) recorded in the last 24 hours.** The silence suggests either stable usage or low community engagement at this time.

## 8. Backlog Watch
**No long-unanswered issues or PRs identified in today's data slice.** (Historical backlog not provided; maintainers should review issues/PRs older than 30 days with no activity separately.)

---

*Data source: GitHub API snapshot for nullclaw/nullclaw covering 2026-09-12 to 2026-09-13. Links point to live GitHub items.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-13

## 1. Today's Overview
IronClaw saw minimal visible activity in the last 24 hours: **zero new or updated issues**, **one PR merged** and **one new PR opened**. The merged PR (#8076) addresses a Slack/assistant integration edge case around disconnected shared channels, while the new PR (#8098) adds a regression test for turn-state lineage metadata. No releases were published. Overall, the project appears in a **low-churn maintenance phase** with focused, small-scope contributions rather than feature development.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#8076](https://github.com/nearai/ironclaw/pull/8076) | **Merged** (2026-09-12) | `fix(assistant): distinguish disconnected shared channels` — Differentiates a paired user’s disconnected shared channel from an unpaired account; renders channel-specific guidance for user messages and bot commands; keeps rejection classification consistent across product, adapter, and OpenAI-compatible surfaces; updates Slack capability matrix. | Improves reliability of Slack/assistant routing and user-facing error messaging for shared-channel scenarios. |
| [#8098](https://github.com/nearai/ironclaw/pull/8098) | **Open** (created 2026-09-12) | `test(turns): pin state-derived lineage drop` — Adds inverse regression test beside existing terminal-rewrite lineage test; proves claimed metadata initially carries depth, activation provenance, and descendant cap; pins that a subsequent `TurnRunState`-derived snapshot deliberately omits all three lineage fields. | Strengthens test coverage for turn-state serialization; prevents accidental regression of lineage-field stripping. |

## 4. Community Hot Topics
No issues or PRs with significant comment threads or reactions in the last 24 hours. The two PRs above have **zero comments and zero reactions** each, indicating routine, non-controversial work.

## 5. Bugs & Stability
**No new bug reports, crashes, or regressions** filed today. The merged PR (#8076) fixes a *classification consistency* bug in shared-channel handling, but it was already in progress (opened 2026-09-06) and not a freshly reported incident.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap discussions surfaced today. The only signal is the **test-first mindset** in #8098, suggesting the team is hardening turn-state internals—possibly in preparation for a larger refactor or new turn-based feature.

## 7. User Feedback Summary
No direct user feedback (issues, discussions, or support threads) captured in the last 24 hours. The merged fix (#8076) indirectly reflects a **pain point for Slack users sharing channels across paired/unpaired accounts**, now resolved with clearer guidance and consistent rejections.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| *(none surfaced today)* | — | With zero open issues updated today, no stale high-priority items were visible in this window. Maintainers may want to review older open issues/PRs not touched in this 24h slice. |

---

*Data sourced from GitHub API for `nearai/ironclaw` on 2026-09-13. Links point to live PRs; activity counts reflect the 24h window ending at digest generation.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-13

## 1. Today's Overview
LobsterAI shows **moderate maintenance activity** with **3 PRs merged today** (all by contributor `fisherdaddy`) addressing markdown editing, OpenClaw subagent empty responses, and thumbnail/native dependency build issues. However, the issue backlog remains **stagnant**—all 6 issues updated in the last 24h are marked `[stale]` and originated on 2026-03-30, indicating they have been open for ~5.5 months without resolution. The 8 open PRs are similarly stale, suggesting a bottleneck in code review or prioritization. No new releases were published.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Areas | Author | Summary |
|----|-------|-------|--------|---------|
| [#2659](https://github.com/netease-youdao/LobsterAI/pull/2659) | feat: support markdown editing | renderer, docs, main, artifacts | fisherdaddy | Adds markdown editing capability (details not provided in summary). |
| [#2658](https://github.com/netease-youdao/LobsterAI/pull/2658) | fix: openclaw subagent yield empty response | docs, main, openclaw | fisherdaddy | Fixes a bug where OpenClaw subagents returned empty responses. |
| [#2657](https://github.com/netease-youdao/LobsterAI/pull/2657) | fix: resolve thumbnail rendering and native dependency build issues | renderer, build, docs, main, openclaw | fisherdaddy | Resolves thumbnail rendering failures and native dependency build breakages. |

**Takeaway:** Today’s merged work focuses on **renderer/frontend polish (markdown, thumbnails)** and **OpenClaw stability (subagent responses, build health)**. These are incremental quality-of-life and reliability fixes rather than major features.

## 4. Community Hot Topics
All active issues/PRs are stale (created 2026-03-30, last updated 2026-09-12). The most technically significant—and likely highest user impact—are:

| Item | Type | Comments | 👍 | Core Problem |
|------|------|----------|----|--------------|
| [#1048](https://github.com/netease-youdao/LobsterAI/issues/1048) / [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049) | Issue/PR | 1 | 0 | **Auth race condition**: Concurrent 401s cause double `refreshToken` consumption → forced logout. PR #1049 proposes a shared `sharedRefreshOnce` slot to deduplicate refresh. |
| [#1051](https://github.com/netease-youdao/LobsterAI/issues/1051) / [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) | Issue/PR | 1 | 0 | **OpenClaw session deadlocks**: Two race conditions (`ensureGatewayClientReady` silent failure on init error; `ensureActiveTurn` creating turn on stopped session) permanently break AI sessions until app restart. |
| [#1053](https://github.com/netease-youdao/LobsterAI/issues/1053) / [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054) | Issue/PR | 1 | 0 | **Modal close button unclickable** when modal overlaps the window drag region (Electron `-webkit-app-region: drag` intercepts clicks). PR adds `-webkit-app-region: no-drag` to fixed-position overlays. |

**Underlying needs:** Users are hitting **fundamental concurrency bugs in auth and agent runtime** that cause unrecoverable states (forced logout, permanently broken sessions). The modal bug affects **core UX** across all dialogs. Low comment/reaction counts suggest these are encountered by few but are **high-severity when hit**.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | PR Fix Exists? | Description |
|----------|-------|----------------|-------------|
| **Critical** | [#1048](https://github.com/netease-youdao/LobsterAI/issues/1048) | Yes ([#1049](https://github.com/netease-youdao/LobsterAI/pull/1049)) | Concurrent 401 → double refreshToken consumption → forced logout. Affects any multi-IPC startup flow. |
| **Critical** | [#1051](https://github.com/netease-youdao/LobsterAI/issues/1051) | Yes ([#1052](https://github.com/netease-youdao/LobsterAI/pull/1052)) | OpenClaw session permanently fails after init race or stop-race; requires full app restart. |
| **High** | [#1053](https://github.com/netease-youdao/LobsterAI/issues/1053) | Yes ([#1054](https://github.com/netease-youdao/LobsterAI/pull/1054)) | Modal close buttons unclickable when modal height reaches title bar (drag region). All modals affected. |
| **Medium** | [#1062](https://github.com/netease-youdao/LobsterAI/issues/1062) | No | Scheduled task edit: title timestamp doesn’t update after time change (UI/data sync bug). |
| **Medium** | [#1066](https://github.com/netease-youdao/LobsterAI/issues/1066) | No | Heartbeat/internal log messages leak into user-visible chat history. |
| **Low** | [#1061](https://github.com/netease-youdao/LobsterAI/issues/1061) | No | User asks how to change gateway port (conflicts with OpenClaw); likely a config/docs gap. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Bind scheduled tasks to existing Cowork sessions** | [#1065](https://github.com/netease-youdao/LobsterAI/pull/1065) (open PR) | **High** — PR is feature-complete with searchable session selector; aligns with "cowork" workflow. |
| **Windows default browser detection fix** | [#1059](https://github.com/netease-youdao/LobsterAI/pull/1059) (open PR) | **Medium** — Targets a specific Windows UX papercut (Edge launched instead of Chrome). |
| **Gateway port configurability** | [#1061](https://github.com/netease-youdao/LobsterAI/issues/1061) | **Low–Medium** — No PR yet; likely a config flag addition. |
| **Filter internal/heartbeat messages from UI** | [#1066](https://github.com/netease-youdao/LobsterAI/issues/1066) | **Medium** — Clear UX need; may require message-type tagging in storage. |

## 7. User Feedback Summary
- **Pain points:** Unrecoverable session failures (auth, OpenClaw), modal interaction broken, scheduled-task UI desync, noisy internal logs in chat.
- **Use cases implied:** Multi-IPC startup (auth:getUser + auth:getQuota), long-running agent sessions, scheduled automation bound to persistent cowork contexts, Windows daily-driver usage.
- **Sentiment:** Silent frustration—issues open 5+ months with fixes proposed but unmerged. Users encountering these bugs have no workaround except restart or reinstall.

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049) (auth race fix) | 167 days | Critical auth reliability; fix is localized and well-scoped. | **Review & merge urgently** — prevents forced logouts. |
| [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) (OpenClaw session deadlocks) | 167 days | Renders agent sessions permanently unusable; two distinct race fixes. | **Review & merge** — core agent stability. |
| [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054) (modal drag-region fix) | 167 days | Affects every modal in the app; one-line CSS fix. | **Quick merge** — high visibility UX win. |
| [#1056](https://github.com/netease-youdao/LobsterAI/pull/1056) (remove debug logs) | 167 days | Cleanup; violates logging guidelines. | Low risk, merge during cleanup pass. |
| [#1057](https://github.com/netease-youdao/LobsterAI/pull/1057) (filter thinking blocks) | 167 days | Prevents chain-of-thought leakage in memory judge. | Merge if Anthropic extended thinking is used. |
| [#1058](https://github.com/netease-youdao/LobsterAI/pull/1058) (scheduled-task migration data loss guard) | 167 days | Prevents silent migration failure → data loss on next launch. | **Important for upgrade reliability**. |
| [#1059](https://github.com/netease-youdao/LobsterAI/pull/1059) (Windows browser detection) | 167 days | Windows UX fix. | Test on Windows, merge if valid. |
| [#1065](https://github.com/netease-youdao/LobsterAI/pull/1065) (scheduled-task session binding) | 167 days | New feature with UI; enhances automation workflow. | Review for API/UX consistency, then merge. |

---

**Bottom line:** The project is **shipping small fixes daily** (today’s 3 merges) but **carrying a 5-month backlog of high-impact bug fixes and features** that are review-ready. Unblocking PRs #1049, #1052, #1054, #1058, and #1065 would dramatically improve stability and user trust.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-13

## 1. Today's Overview
Moltis saw **no issue activity** and **three pull-request updates** in the last 24 hours. One PR (#1261) was merged, closing a TLS/ALPN hardening task, while two PRs remain open: a long-standing provider addition (#1143, open since July) and a fresh Telegram security enhancement (#1265, opened yesterday). No new releases were published. Overall, the project is in a **steady maintenance and incremental feature phase** with healthy PR throughput but low community issue engagement.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#1261](https://github.com/moltis-org/moltis/pull/1261) | **MERGED** | Restricts TLS ALPN advertisement to HTTP/1.1 only until WebSocket upgrade support (RFC 8441) is implemented. Adds test pinning and contributor docs. | Improves protocol hygiene & reduces attack surface; closes [#245](https://github.com/moltis-org/moltis/issues/245). |
| [#1143](https://github.com/moltis-org/moltis/pull/1143) | **OPEN** | Adds Requesty (OpenAI-compatible router) as a table-driven provider, mirroring OpenRouter wiring. | Expands LLM provider ecosystem; ready for review/merge. |
| [#1265](https://github.com/moltis-org/moltis/pull/1265) | **OPEN** | Exposes `untrusted_audience` & `untrusted_tools` policy controls for Telegram shared chats, aligning with existing Slack implementation. | Hardens multi-tenant tool access; fixes [#1264](https://github.com/moltis-org/moltis/issues/1264). |

## 4. Community Hot Topics
No issues were updated in the last 24 hours. The most recent community signal comes from the two open PRs:
- **#1143** (Requesty provider) — 73 days open, zero reactions/comments → likely awaiting maintainer bandwidth or CI green.
- **#1265** (Telegram tool policy) — opened yesterday, zero reactions/comments → fresh security hardening, may attract review soon.

*Underlying need*: Users want **broader LLM provider choice** and **consistent cross-platform (Slack/Telegram) security controls** for shared-chat scenarios.

## 5. Bugs & Stability
No new bug reports or crash regressions surfaced today. The merged PR #1261 proactively addresses a **protocol-level stability risk** (unintended HTTP/2 or WebSocket ALPN negotiation) before it becomes a production issue.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| Requesty provider support | PR #1143 | **High** — implementation complete, follows established pattern. |
| Telegram `untrusted_*` tool policies | PR #1265 | **High** — mirrors Slack parity, security-focused. |
| WebSocket upgrade support (RFC 8441) | PR #1261 docs | **Medium** — explicitly called out as future work. |

## 7. User Feedback Summary
Direct user feedback is absent today (zero issues/comments). Indirect signals:
- **Provider diversity**: Community maintains interest in adding new OpenAI-compatible routers (Requesty).
- **Security parity**: Contributor `penso` proactively closed the Telegram/Slack policy gap (#1264 → #1265), indicating **internal dogfooding** of shared-chat features.

## 8. Backlog Watch
| Item | Age | Concern |
|------|-----|---------|
| [#1143](https://github.com/moltis-org/moltis/pull/1143) Requesty provider | 73 days | Long-open, feature-complete PR; risks bit-rot or contributor fatigue. Maintainer review needed. |
| [#245](https://github.com/moltis-org/moltis/issues/245) WebSocket ALPN support | Referenced in #1261 | Tracked as follow-up; no active PR yet. |

---
*Digest generated from GitHub data as of 2026-09-13 00:00 UTC. Links point to live GitHub resources.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-13

## 1. Today's Overview
CoPaw shows high community engagement with **15 issues and 6 PRs updated in the last 24 hours**, though **zero PRs were merged** — indicating active triage and contribution but a bottleneck in review/merge velocity. The issue volume is dominated by **bug reports (8/15)** covering session loss, memory exhaustion, MCP/ACP protocol regressions, and workspace freezing — signaling stability pressure on the 2.2.x line. Two enhancement issues were closed (#7582 plugin store UX, #7664 ReMeLight model config), both with corresponding PRs opened today (#7719 for memory model separation). No new release was published.

---

## 2. Releases
**No new releases** in the last 24 hours. Current latest remains **v2.2.1** (desktop) / **v2.2.0** (container). Users on 2.2.x are experiencing multiple regressions (MCP discovery, ACP permission handling, workspace watcher) — a patch release (2.2.2) appears warranted.

---

## 3. Project Progress
**No PRs merged today.** All 6 open PRs are fixes targeting bugs reported in the last 48 hours:
| PR | Target Issue | Status | Summary |
|----|--------------|--------|---------|
| [#7732](https://github.com/agentscope-ai/QwenPaw/pull/7732) | #7726 | Open | Fix ACP `trusted: true` fallback to interactive prompts by matching permission `kind` first |
| [#7729](https://github.com/agentscope-ai/QwenPaw/pull/7729) | #7728 | Open | Recognize Java MCP SDK’s non-standard `jsonRpcError` envelope on `/discover` probe |
| [#7725](https://github.com/agentscope-ai/QwenPaw/pull/7725) | #7721 | Open | Replace blocking `watchfiles.awatch` SSE watcher with threaded polling to unblock event loop |
| [#7723](https://github.com/agentscope-ai/QwenPaw/pull/7723) | — | Open | Emit error event on `stream_one` failure so clients can distinguish failure from completion |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | #7664 | Open | Add `memory_model` config to `ReMeLightMemoryManager` for cheaper memory-write LLM |
| [#7718](https://github.com/agentscope-ai/QwenPaw/pull/7718) | — | Open | Render Telegram approval-card markdown via `parse_mode=HTML` |

**Progress signal:** Contributors are rapidly producing targeted fixes, but maintainer bandwidth for review/merge appears constrained.

---

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | Question | 4 | 0 | **Agent instruction persistence** — user’s workspace/path rules forgotten across sessions; suggests weak context/state management |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | Bug | 3 | 0 | **Session & model config loss** — entire chat history + LLM settings vanished after shutdown; data durability concern |
| [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | Feature | 3 | 0 | **A2A protocol support** — promised in 2.x architecture docs, only MCP implemented; ecosystem integration blocker |
| [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | Bug | 3 | 0 | **LLM config disappearance** — recurring silent loss of model settings during normal use |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | Bug | 2 | 0 | **Memory exhaustion (3 paths)** — unbounded stream buffers, keep-alive stacking, gate evasion; container OOM at ~1MB/s |

**Underlying themes:**  
- **Reliability over features** — users hit data loss (sessions, configs) and resource leaks daily  
- **Protocol completeness** — A2A/ACP gaps block enterprise/agent-interop use cases  
- **Plugin UX friction** — #7582 (closed) shows strong demand for bulk plugin management

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | PR Fix | Impact |
|----------|-------|--------|--------|
| **Critical** | [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721) Workspace watcher freezes **entire server** (SSE + all channels) on large repos | [#7725](https://github.com/agentscope-ai/QwenPaw/pull/7725) | Complete service hang; affects all users with sizable workspaces |
| **Critical** | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) Memory exhaustion via 3 compounding paths → OOM | — | Container/service crash; no fix PR yet |
| **High** | [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) Session + model config **permanently lost** after shutdown | — | Irrecoverable user data loss; erodes trust |
| **High** | [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) MCP **cannot connect/register** since 2.2.x upgrade | — | Breaks core tool integration; regression from 2.1.1b3 |
| **High** | [#7728](https://github.com/agentscope-ai/QwenPaw/issues/7728) MCP `server/discover` fails on Java SDK servers (HTTP 500 + non-standard envelope) | [#7729](https://github.com/agentscope-ai/QwenPaw/pull/7729) | Blocks MCP adoption for Java/Kotlin ecosystems |
| **Medium** | [#7726](https://github.com/agentscope-ai/QwenPaw/issues/7726) ACP `trusted: true` silently falls back to interactive prompts | [#7732](https://github.com/agentscope-ai/QwenPaw/pull/7732) | Breaks automated ACP workflows |
| **Medium** | [#7727](https://github.com/agentscope-ai/QwenPaw/issues/7727) Out-of-workspace write block **blind to kimi-code Write tool** | — | Security boundary bypass for ACP/kimi-code |
| **Medium** | [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) LLM config **disappears silently** during normal use | — | Recurring config loss; workflow disruption |
| **Medium** | [#7720](https://github.com/agentscope-ai/QwenPaw/issues/7720) Creator plugin hides prompt-sync blocker behind `GATED`; no manual image accept | — | Blocks Creator storyboard generation flow |
| **Low** | [#7730](https://github.com/agentscope-ai/QwenPaw/issues/7730) Plugin catalog read failures **escape offline fallback** | — | Degraded UX during network issues |
| **Low** | [#7731](https://github.com/agentscope-ai/QwenPaw/issues/7731) Files panel: no toggle for dot-prefixed files | — | Missing UI affordance for hidden files |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals | Likelihood for Next Version |
|---------|-------|---------|----------------------------|
| **A2A protocol support** | [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | Explicitly promised in 2.x architecture docs; only MCP delivered | **High** — architectural commitment, but no PR yet |
| **ReMeLight separate memory model** | [#7664](https://github.com/agentscope-ai/QwenPaw/issues/7664) | PR [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) opened same day; clear cost-saving value | **Very High** — PR ready, addresses token-cost pain |
| **Plugin store: bulk install/update + notifications** | [#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582) | Closed but no PR; strong multi-device maintainer use case | **Medium** — UX debt, needs design |
| **Files panel: show dotfiles toggle** | [#7731](https://github.com/agentscope-ai/QwenPaw/issues/7731) | Simple UI addition; first-time contributor friendly | **High** — low effort, high utility |
| **ACP `trusted` mode reliability** | [#7726](https://github.com/agentscope-ai/QwenPaw/issues/7726) | PR [#7732](https://github.com/agentscope-ai/QwenPaw/pull/7732) fixes core logic gap | **High** — unblocks programmatic ACP |

**Prediction:** Next patch (2.2.2) will likely bundle the 5 open fix PRs (#7718, #7719, #7723, #7725, #7729, #7732) + dotfiles toggle. A2A remains a 2.3/3.0 milestone.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Segment |
|------------|----------|--------------|
| **Agent forgets workspace rules** | #7571: “refused to remember TODO path restriction; forgot I was developing in A not C” | Plugin developers / power users |
| **Session & config vanish without trace** | #7724, #7708: “conversation gone, model config gone, no recovery” | Daily desktop users |
| **MCP broken after upgrade** | #7716: “2.1.1b3 worked, 2.2.x fails to connect” | MCP server operators |
| **Server hangs on file browse** | #7721: “entire server freezes, all channels stop” | Teams with large monorepos |
| **Memory leak → OOM in containers** | #7722: “fills at ~1MB/s, then hangs/OOMs” | Self-hosted / container deployments |
| **Plugin management is click-heavy** | #7582: “install/update multiple plugins = excessive clicks, no bulk update” | Multi-device maintainers |
| **Telegram approval cards render raw markdown** | #7718: “**bold**, backticks shown verbatim” | Telegram channel users |

**Sentiment:** Frustration with **regressions in 2.2.x** (stability, protocol support) outweighs enthusiasm for new features. Users expect **patch-quality fixes** before new capabilities.

---

## 8. Backlog Watch (Stale/High-Impact Items Needing Maintainer Attention)

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) A2A support | 11 days | Open, 3 comments | **Architectural promise unfulfilled**; blocks agent-interop roadmap |
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) Memory exhaustion (3 paths) | 1 day | Open, 2 comments | **No fix PR yet**; compounding OOM paths need core runtime changes |
| [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) MCP connect/register broken | 1 day | Open, 2 comments | **Regression from 2.1.1b3**; core feature broken for all 2.2.x users |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) Session + model loss | 1 day | Open, 3 comments | **Data loss = trust loss**; needs root-cause (persistence layer?) |
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) Agent instruction amnesia | 8 days | Open, 4 comments | **Context/state management weakness**; affects all long-running agent tasks |
| [#7727](https://github.com/agentscope-ai/QwenPaw/issues/7727) OOB write bypass for kimi-code | 1 day | Open, 1 comment | **Security boundary gap** in ACP tool guard |

---

## Health Indicators Summary
| Metric | Signal |
|--------|--------|
| **Issue velocity** | 🔴 High (15/24h) — mostly bugs |
| **PR merge velocity** | 🔴 Zero merges/24h — review bottleneck |
| **Fix-to-bug ratio** | 🟡 6 fix PRs for ~8 new bugs — catching up but not ahead |
| **Community responsiveness** | 🟢 Strong — contributors ship fixes within hours of reports |
| **Release cadence** | 🔴 Stalled — 2.2.1 is weeks old with known regressions |
| **Protocol completeness** | 🟡 MCP partial, ACP fragile, A2A missing |

**Recommendation:** Prioritize a **2.2.2 patch release** this week bundling the 6 open fix PRs. Assign maintainer review slots to unblock merge queue. Schedule A2A design review for 2.3 planning.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-13

---

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 PRs and 16 issues updated in the last 24 hours, though no new releases were cut. The project is in a **stabilization and hardening phase** — multiple P0/P1 bugs around ACP turn persistence, cost tracking, provider fallbacks, and Windows stack limits are actively being addressed. A new release-efficiency tracker (#10814) and four release-process PRs (#10815–#10818) signal an imminent v0.8.5+ cut. The 13 merged/closed PRs today include security policy work, docs, and a zerocode keybinding overhaul, indicating steady progress on both infrastructure and UX fronts.

---

## 2. Releases

**No new releases today.** The latest tracker (#10814) coordinates "release efficiency and repeatable publication" improvements following v0.8.5, with four supporting PRs (#10815–#10818) targeting version-bump reliability, Apple notarization pre-checks, dev-dependency ordering, and docs promotion without rebuilds. Expect a patch release once these land.

---

## 3. Project Progress — Merged/Closed PRs (13 today)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#10479](https://github.com/zeroclaw-labs/zeroclaw/pull/10479) | **feat** | `zerocode`: explicit modifier intent (Control/Super/Platform-primary keybindings); migrates legacy `ctrl+` bindings | UX polish, eliminates ambiguous keybinding behavior |
| [#10169](https://github.com/zeroclaw-labs/zeroclaw/pull/10169) | **docs** | ADR-014: Plugin Egress Authority (proposed) | Architecture documentation for plugin network boundaries |
| *11 other closed PRs* | — | Various fixes/docs/ci (details not enumerated in data) | Incremental stabilization |

**Open PRs of note** (updated today, high comment activity or size:XL):
- [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248) — **Security**: canonical principals & shared grant resolution (RFC #7141 Rev 8, stage 2) — *needs-author-action*
- [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) — **Security**: Shell V1 permission policy (RFC #7155 Phase 0+1) — *needs-author-action, risk:high*
- [#9139](https://github.com/zeroclaw-labs/zeroclaw/pull/9139) — **Plugins**: durable scheduler outbox foundation — *distinguished contributor, risk:high, size:XL*
- [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) — **Bug**: pixel-level image validation for multimodal — *principal contributor, risk:high, size:XL*
- [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) — **Bug**: honor allowed roots for git operations — *experienced contributor, risk:high, size:XL*
- [#10819](https://github.com/zeroclaw-labs/zeroclaw/pull/10819) — **Bugfix** (opened today): fix tilde expansion in `knowledge.db_path` (addresses #10721)

---

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | 7 comments, P1, **in-progress** | Windows stack overflow in `RpcDispatcher::process_line` (2 MB guard) — CI blocker for Windows advisory job |
| [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381) | 5 comments, P2, **tracker** | crates.io publishing follow-ups: Windows symlinks, cargo-install UX, packaging |
| [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | 4 comments, **P0**, high risk | SOP engine executes later steps before recording output-schema rejection — workflow-blocking |
| [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) | 3 comments, P1, **in-progress** | Failed ACP turns discard accepted prompt + completed tool exchanges from durable history |
| [#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814) | 0 comments, P1, **created today** | Release efficiency tracker — reduce repeated builds, measure against v0.8.5 workflow |

**Pattern**: Windows CI reliability, ACP/turn persistence correctness, and release automation are the three dominant themes. Contributors (Audacity88, JordanTheJet, NiuBlibing) are driving parallel fixes across runtime, provider, and zerocode layers.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR? | Summary |
|----------|-------|--------|---------|---------|
| **P0** | [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | Open, accepted | No | SOP engine runs later steps before recording output-schema rejection |
| **P1** | [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | **In-progress** | Likely in-flight | Windows stack overflow (2 MB guard) in RPC dispatch test |
| **P1** | [#10788](https://github.com/zeroclaw-labs/zeroclaw/issues/10788) | **In-progress** | No | Failed ACP turn loses prompt + tool history |
| **P1** | [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) | Open, accepted | No | Profile cost limit (u32::MAX) ≠ global $10/day ledger |
| **P1** | [#10645](https://github.com/zeroclaw-labs/zeroclaw/issues/10645) | Open, accepted | No | Delegated sub-loops lack scoped cost-tracking context |
| **P1** | [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) | **In-progress** | No | Notification lag → `begin_notification_resync` → cancels all turns |
| **P1** | [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) | Open | No | Persist failed ACP turns on daemon RPC path (Code pane) |
| **P2** | [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | **In-progress** | No | Stream failure skips advertised non-streaming fallback |
| **P2** | [#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) | **In-progress** | No | Single-candidate stream recovery ignores `provider_retries`; 529 gets 1 immediate retry |
| **P2** | [#10721](https://github.com/zeroclaw-labs/zeroclaw/issues/10721) | Open | **Yes: [#10819](https://github.com/zeroclaw-labs/zeroclaw/pull/10819)** | `knowledge.db_path` tilde expansion replaces all `~`, not just prefix |
| **P2** | [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) | **In-progress** | No | 3 Windows-only test flakes on advisory job (no code change) |
| **P2** | [#10779](https://github.com/zeroclaw-labs/zeroclaw/issues/10779) | Open | No | OpenCode 429 (quota exhausted) retried with sub-second backoff |
| **P2** | [#10741](https://github.com/zeroclaw-labs/zeroclaw/issues/10741) | Open, accepted | No | ZeroCode pauses queue after "clean-looking" completed response |
| **P3** | [#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802) | **In-progress** | No | `session/list-acp` vs `turn_end` message_count mismatch |

**Observation**: 7 of 14 active bugs are **P1**; 5 are already `in-progress`. The ACP/turn persistence cluster (#10788, #10673, #10785, #10802) and provider fallback cluster (#10736, #10787) are being tackled in parallel.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Canonical principals / grant resolution** (RFC #7141 Rev 8) | [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248) | High — security foundation, `needs-author-action` |
| **Shell V1 permission policy** (RFC #7155 Phase 0+1) | [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) | High — unified tool approval, `risk:high` |
| **Durable plugin scheduler outbox** | [#9139](https://github.com/zeroclaw-labs/zeroclaw/pull/9139) | Medium — long-running, `size:XL`, foundational |
| **Typed plugin event routing** | [#9138](https://github.com/zeroclaw-labs/zeroclaw/pull/9138) | Medium — pairs with #9139 |
| **Context compaction anchored to model window ratio** | [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) | Medium — UX improvement for long sessions |
| **Log entry-count rotation + multi-segment queries** | [#10214](https://github.com/zeroclaw-labs/zeroclaw/pull/10214) | Medium — observability, `size:XL` |
| **Clickable transcript URLs in ZeroCode** | [#10386](https://github.com/zeroclaw-labs/zeroclaw/pull/10386) | High — UX polish, `distinguished contributor` |
| **QQ channel delivery for announcements/cron** | [#10799](https://github.com/zeroclaw-labs/zeroclaw/pull/10799) | Low — niche channel, `size:S` |

**Prediction**: Security policy PRs (#10248, #10610) and the clickable-URLs PR (#10386) are the strongest candidates for v0.8.6. The plugin scheduler (#9139) and log rotation (#10214) are larger foundations likely targeting v0.9.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **ACP turn history loss on failure** | #10788, #10673 — "nothing from that turn is written to durable history" | ZeroCode Code-pane users, ACP integrators |
| **Windows CI flakes block merges** | #10734 (stack overflow), #10793 (3 test flakes) | All contributors; Windows advisory job non-required but noisy |
| **Cost tracking inconsistency** | #10635 (profile says unlimited, ledger enforces $10), #10645 (delegated loops untracked) | Users hitting daily budgets, delegate-heavy workflows |
| **Provider fallback not triggering** | #10736, #10787 — stream error → no non-streaming retry | Users on unreliable providers (Anthropic 529, quota 429) |
| **ZeroCode queue stalls silently** | #10741 — "conservatively settles turn as non-clean" | ZeroCode power users with queued prompts |
| **Tilde in `knowledge.db_path` breaks on Windows** | #10721 — global replace corrupts paths | Anyone using `~` in knowledge tool config |

**Satisfaction signals**: Active contributor engagement on fixes (multiple `in-progress` tags), rapid PR turnover (13 merged today), and new release-tracker show maintainers prioritizing reliability over features.

---

## 8. Backlog Watch — Stale/High-Value Items Needing Attention

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381) | ~50 days | High | crates.io publishing tracker — blocks Windows users (symlinks), cargo-install UX; deferred from v0.8.4 |
| [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248) | 22 days | Medium | Canonical principals (RFC #7141) — security foundation; `needs-author-action` for weeks |
| [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) | 9 days | High | Shell V1 permission policy (RFC #7155) — `needs-author-action`, 5-commit slice |
| [#9139](https://github.com/zeroclaw-labs/zeroclaw/pull/9139)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*