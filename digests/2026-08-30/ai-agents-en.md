# OpenClaw Ecosystem Digest 2026-08-30

> Issues: 196 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-30 05:01 UTC

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

# OpenClaw Project Digest — 2026-08-30

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 196 issues and 500 PRs updated in the past 24 hours. The project is in a heavy stabilization phase: 77 issues closed and 157 PRs merged/closed indicate rapid iteration on bug fixes and regression resolution. No new release was cut today, but the volume of "ready for maintainer look" and "needs proof" PRs suggests a release candidate (likely 2026.8.x) is being hardened. The issue backlog is dominated by session-state reliability, channel delivery guarantees, and cross-platform compatibility — all hallmarks of a project preparing for production-grade multi-agent deployments.

---

## 2. Releases

**No new releases published today.**  
The latest tagged release remains **2026.8.1** (and 2026.8.1-beta.2). Current PR activity (#128371 authorizing focused beta evidence, #133052 fixing UI attachment handling) points to a **2026.8.2 / 2026.8.1-beta.3** stabilization push.

---

## 3. Project Progress — Merged / Closed PRs (Last 24h)

| PR | Area | Summary | Status |
|----|------|---------|--------|
| [#128371](https://github.com/openclaw/openclaw/pull/128371) | Release / Beta | Authorize focused beta evidence; unblock beta.3 by accepting rerun historical leaves | **Closed** |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) | Web UI | Avoid session catalog refresh storms on focus/presence changes | **Closed** |
| [#124479](https://github.com/openclaw/openclaw/pull/124479) | Agents | Wrap `JSON.parse` in `readGooglePromptCacheJson` with try/catch | **Open** (needs proof) |
| [#93842](https://github.com/openclaw/openclaw/pull/93842) | Plugins | Report missing config clearly instead of misleading required-property errors | **Open** (needs proof) |
| [#121044](https://github.com/openclaw/openclaw/pull/121044) | Memory-core | Fix `memory_search` rebuilding whole index after zero-hit query | **Open** (ready for maintainer) |
| [#120138](https://github.com/openclaw/openclaw/pull/120138) | Docs / Secrets | Keep SecretRef reference docs in sync via registry-backed formatter | **Open** (ready for maintainer) |
| [#103723](https://github.com/openclaw/openclaw/pull/103723) | Anthropic | Add `claude-haiku-4-5` to claude-cli catalog | **Open** (ready for maintainer) |

**Key advances:** Beta release gating relaxed, UI refresh storms fixed, plugin config error UX improved, memory search performance regression addressed, secret documentation automation added.

---

## 4. Community Hot Topics — Most Discussed Issues & PRs

| Item | Comments | 👍 | Core Theme |
|------|----------|-----|------------|
| [#102175](https://github.com/openclaw/openclaw/issues/102175) Embedded prompt cache breaks across boundaries | 18 | 1 | **Session-state integrity** — prompt cache invalidation at room-event, policy, Responses boundaries |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) WhatsApp 1:1 image wedges lane ~3 min | 14 | 1 | **Channel latency** — multimodal image processing stalls main lane |
| [#87561](https://github.com/openclaw/openclaw/issues/87561) Durable final fallback delivery semantics | 12 | 1 | **Delivery guarantees** — fallback messages suppressed/dropped across channels |
| [#131150](https://github.com/openclaw/openclaw/issues/131150) Slack DMs silently dropped after restart (19 accounts) | 6 | 0 | **Multi-account socket mode** — `prepareSlackMessage` returns null pre-gate |
| [#133051](https://github.com/openclaw/openclaw/issues/133051) Telegram delivery succeeds but missing receipt marks session failed | 3 | 0 | **Receipt reconciliation** — durable receipt dropped from tool result |

**Underlying needs:**  
- **Reliable session continuity** across compaction, recovery, and provider boundaries (#102175, #125333)  
- **Deterministic channel delivery** with receipts and fallbacks (#87561, #133051, #96834)  
- **Multi-account / multi-channel parity** — Slack, Telegram, WhatsApp, Discord all show edge cases (#131150, #96834, #92598)  
- **Observability into silent failures** — users report "wedged" lanes, dropped messages, missing receipts without errors

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0 / Critical** | [#125333](https://github.com/openclaw/openclaw/issues/125333) | `totalTokens` inflation ratchet on memory-flush transcript path (unguarded) | No |
| **P1 / High** | [#102175](https://github.com/openclaw/openclaw/issues/102175) | Embedded prompt cache breaks across room-event/policy/Responses boundaries | No |
| **P1** | [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp image wedges main lane ~3 min before processing | No |
| **P1** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped hook/tool child processes → zombie accumulation & runtime degradation | No |
| **P1** | [#99586](https://github.com/openclaw/openclaw/issues/99586) | Runtime tool surface returns blank body after gateway-touching ops | No |
| **P1** | [#119884](https://github.com/openclaw/openclaw/issues/119884) | DB migration missing `ANALYZE` → stale planner stats → 15-57s starvation | No |
| **P1** | [#120162](https://github.com/openclaw/openclaw/issues/120162) | Safeguard compaction: qualityGuard audit shares timeout/abort budget, kills compaction | No |
| **P1** | [#131150](https://github.com/openclaw/openclaw/issues/131150) | Slack DMs silently dropped after gateway restart (multi-account) | No |
| **P1** | [#131807](https://github.com/openclaw/openclaw/issues/131807) | System-agent conversations share Codex session key, invalidate fresh turns | No |
| **P2** | [#87756](https://github.com/openclaw/openclaw/issues/87756) | Lobster workflow hangs on nested `/tools/invoke` when prompt-launched | No |
| **P2** | [#92451](https://github.com/openclaw/openclaw/issues/92451) | v2026.6.x system prompt bloat degrades instruction following on smaller models | No |
| **P2** | [#50490](https://github.com/openclaw/openclaw/issues/50490) | Feishu 群聊 activation 模式切换无效 — always responds to all messages | No |
| **P2** | [#47273](https://github.com/openclaw/openclaw/issues/47273) | Memory detection skips macOS (darwin) — `os.freemem()` never reported | [#124479](https://github.com/openclaw/openclaw/pull/124479) (partial) |
| **P2** | [#133051](https://github.com/openclaw/openclaw/issues/133051) | Telegram delivery succeeds but missing receipt marks Control UI session failed | [#133083](https://github.com/openclaw/openclaw/pull/133083) |

**Pattern:** Session-state corruption, channel delivery gaps, and resource leaks dominate. Several P1s have **no fix PR yet** — maintainer bandwidth is the bottleneck.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#87561](https://github.com/openclaw/openclaw/issues/87561) Durable fallback delivery semantics | Cross-channel reliability foundation | **High** — P1, maintainer-tagged, product-decision needed |
| [#38520](https://github.com/openclaw/openclaw/issues/38520) Pre-compaction notification & handoff window | Agent-friendly compaction | **Medium** — Closed but design work referenced in #120162 |
| [#44965](https://github.com/openclaw/openclaw/issues/44965) Stream repetition safeguard (halt & confirm) | Model loop protection | **Medium** — Gold shrimp rating, clear UX need |
| [#53890](https://github.com/openclaw/openclaw/issues/53890) Default outbound topic/thread binding for Telegram | Telegram parity with inbound routing | **Low** — Off-meta tidepool, no recent movement |
| [#92525](https://github.com/openclaw/openclaw/issues/92525) Model-callable `clear_goal` with canonical-store archive | Goal lifecycle management | **Low** — Closed, design proposal only |
| [#112371](https://github.com/openclaw/openclaw/issues/112371) Cron precheck gates + script-only jobs | Cost optimization for poller workloads | **Medium** — Closed but linked PR open, practical ops need |
| [#119044](https://github.com/openclaw/openclaw/issues/119044) Map compatible bundle agents to native templates | Claude/Cursor agent import path | **Low** — Early exploration, off-meta |
| [#79164](https://github.com/openclaw/openclaw/issues/79164) Automatic config rollback on gateway failure | Operational safety | **Medium** — Tidepool, but critical for self-hosted ops |
| [#77278](https://github.com/openclaw/openclaw/issues/77278) Interactive sudo password prompt in TUI | Developer UX | **Low** — Closed, stale |

**Prediction:** Next version will prioritize **delivery guarantees (#87561)**, **compaction safety (#120162)**, and **token accounting fixes (#125333, #101929)**. Cron prechecks (#112371) and config rollback (#79164) are strong candidates for 2026.9.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Silent message loss** | #131150 (Slack), #96834 (WhatsApp), #87561 (fallback suppression), #133051 (Telegram receipt) | Users cannot trust delivery; no visibility into failures |
| **Session wedging / stalls** | #96834 (3-min WhatsApp wedge), #99586 (blank tool surface), #97616 (zombie accumulation) | Requires gateway restart; degrades over time |
| **Cross-platform gaps** | #47273 (macOS memory detection), #92777 (WSL2 backspace), #93804 (Telegram macOS overlap) | Non-Linux users hit basic usability bugs |
| **Token / context accounting errors** | #125333 (totalTokens inflation), #101929 (overflow precheck 2.3-2.6× overcount) | Premature truncation, unexpected costs |
| **Multi-agent / subagent fragility** | #65374 (dreaming contaminates identity), #80498 (premature completion announcements), #91836 (no saturation notification) | Complex workflows unreliable |
| **Config / secrets UX** | #132848 (`provider: "default"` confusion), #91554 (systemd env token not loaded), #91138 (exec credential masking) | Operational friction, security workarounds |

**Satisfaction signals:** Users are filing detailed repros (traces, sanitized logs, version matrices) — indicates **invested user base** but **frustration with regression velocity**. Multiple "platinum hermit" (🐚) ratings = high-impact, hard-to-fix issues persisting across versions.

---

## 8. Backlog Watch — Long-Unanswered / Stalled High-Value Items

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#65374](https://github.com/openclaw/openclaw/issues/65374) Dreaming system cross-agent contamination | 140 days | Open, P1, platinum hermit | **Security / data isolation** — multi-agent memory pooling is architectural |
| [#87561](https://github.com/openclaw/openclaw/issues/87561) Durable fallback delivery semantics | 94 days | Open, P1, maintainer-tagged | **Cross-channel reliability foundation** — blocks trust in all channels |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Unreaped child process leaks (zombies) | 62 days | Open, P1, gold shrimp | **Runtime stability** — degrades over hours/days, requires restart |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) Embedded prompt cache breaks at boundaries | 53 days | Open, P1, platinum hermit | **Provider cost & latency** — cache misses on every boundary crossing |
| [#125333](https://github.com/openclaw/openclaw/issues/125333) totalTokens inflation ratchet (memory-flush path) | 13 days | Open, P0, diamond lobster | **Billing accuracy & context window** — affects every long session |
| [#120162](https://github.com/openclaw/openclaw/issues/120162) Safeguard compaction qualityGuard shares abort budget | 23 days | Open, P1, diamond lobster | **Compaction reliability** — audit retry kills whole compaction |
| [#91808](https://github.com/openclaw/openclaw/issues/91808) CODEOWNERS vs CONTRIBUTING.md maintainer drift | 81 days | Closed, stale, P3 | **Governance** — PR routing broken, maintainer burnout risk |
| [#79164](https://github.com/openclaw/openclaw/issues/79164) Automatic config rollback on failure | 114 days | Open, P2, tidepool | **Self-hosted ops safety** — bad config = manual recovery |

**Maintainer attention needed:**  
- **Triage bandwidth** — 343 open PRs, many "needs proof" or "waiting on author"  
- **P0/P1 issues without fix PRs** — 6 of top 10 bugs lack a linked PR  
- **Stale labels on critical issues** — several platinum hermit bugs marked `stale` despite recent activity  
- **Cross-cutting architecture items** (#65374 dreaming, #87561 delivery semantics) need design decisions, not just patches

---

## Project Health Assessment

| Dimension | Signal | Assessment |
|-----------|--------|------------|
| **Velocity** | 500 PRs/24h, 157 merged | ✅ Very high |
| **Stability** | 119 open issues, 10+ P0/P1 unfixed | ⚠️ Regression-heavy |
| **Release readiness** | Beta gating PR merged, many "ready" PRs | 🟡 Near-term patch likely |
| **Community engagement

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-08-30)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **polarized velocity**: three projects (OpenClaw, ZeroClaw, NanoClaw) operate at **high architectural churn** with 45–500 PRs/day, while six projects (LobsterAI, Moltis, PicoClaw, IronClaw, CoPaw, Hermes) are in **stabilization or maintenance modes** with <50 PRs/day. Two projects (NullClaw, ZeptoClaw) are dormant. **No project released today**—all are between cuts, accumulating fixes. The dominant theme across active projects is **production hardening**: session-state reliability, channel delivery guarantees, security defaults, and cost/token control. Multi-agent, multi-channel, and multi-tenant deployments are the shared target; single-user chat UX is table stakes.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | New Release | Health Score* |
|---------|--------------|-----------|-------------------|-------------|---------------|
| **OpenClaw** | 196 | 500 | 157 | No (2026.8.1 latest) | 🟡 High velocity, regression-heavy |
| **ZeroClaw** | 16 | 50 | 6 | No | 🟡 Architectural transition, security-focused |
| **NanoClaw** | 5 | 45 | 27 | No | 🟢 Strong contributor throughput, Signal regressions |
| **Hermes Agent** | 11 | 50 | 5 | No (v2026.8.27) | 🟠 Firefighting mode, P0/P1 cluster |
| **NanoBot** | 1 | 14 | 5 | No | 🟢 High velocity, stability & security fixes |
| **CoPaw** | 10 | 6 | 0 | No (v2.2.0 planned) | 🟠 Community-vibrant, review-bound |
| **IronClaw** | 1 | 5 | 0 | No | 🟡 Stabilization, cost crisis (4× tokens) |
| **PicoClaw** | 2 | 3 | 2 (stale) | No | 🔴 Low velocity, high-severity bugs unfixed |
| **LobsterAI** | 1 | 5 (all stale) | 0 | No | 🔴 Stalled, 5-month PR backlog |
| **Moltis** | 1 | 0 | 0 | No | 🔴 Quiet, core sandbox regression untriaged |
| **NullClaw** | 0 | 0 | 0 | No | ⚫ Dormant |
| **ZeptoClaw** | 0 | 0 | 0 | No | ⚫ Dormant |

*Health Score: 🟢 Healthy velocity & merge rate | 🟡 High velocity but stability debt | 🟠 Active but blocked/review-bound | 🔴 Stalled or critical bugs untriaged | ⚫ No activity*

---

## 3. OpenClaw's Position

**Advantages vs Peers**
- **Scale of iteration**: 10× PR volume of nearest peer (ZeroClaw, Hermes); 157 merges/day demonstrates unmatched merge throughput.
- **Production-grade scope**: Only project explicitly hardening for "production-grade multi-agent deployments" with session-state, channel delivery, and cross-platform reliability as first-class concerns.
- **Community investment**: Users file detailed repros (traces, logs, version matrices)—indicates deployed, relied-upon installations.
- **Architectural breadth**: Covers memory-core, plugin system, multi-channel (Slack, Telegram, WhatsApp, Discord, Feishu), secret management, compaction, and provider catalogs in one codebase.

**Technical Approach Differences**
- **Monolithic core vs. modular peers**: OpenClaw integrates channels, memory, plugins, and runtime in one repo; NanoClaw/ZeroClaw/IronClaw split channels/runtime/providers; CoPaw/Hermes/PicoClaw are more UI/desktop-centric.
- **Beta gating & evidence-based releases**: PR #128371 shows formal beta evidence authorization—unseen in other projects.
- **Compaction & token accounting as first-class**: P0 token inflation (#125333) and compaction safety (#120162) are treated as release blockers.

**Community Size Comparison**
- **Largest active contributor pool**: 343 open PRs, multiple "ready for maintainer" items daily.
- **Highest issue engagement**: Platinum/diamond ratings on long-standing bugs show deep user investment.
- **Only project with multi-account/multi-channel parity tracking** across 5+ platforms simultaneously.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects | Specific Needs |
|------------|----------|----------------|
| **Session-state reliability & compaction safety** | OpenClaw (#102175, #120162), Hermes (#98351, #98314), ZeroClaw (#9103 RFC), IronClaw (#7824, #7978), NanoBot (#5568) | Deterministic compaction, token accounting accuracy, cross-boundary prompt cache validity, history persistence across restarts |
| **Channel delivery guarantees & receipts** | OpenClaw (#87561, #133051, #131150), NanoClaw (#3660, #3669–3671), PicoClaw (#3343), Hermes (#98336) | Durable fallback semantics, receipt reconciliation, silent-drop elimination, multi-account socket stability |
| **Security hardening & credential hygiene** | ZeroClaw (#10433, #9995, #10016), NanoBot (#5536), NanoClaw (#3668/3667 typecheck), Hermes (#98334), CoPaw (#7301) | Secret scrubbing in logs/audit, sandbox enforcement, OAuth token rotation, sensitive header marking, PATH resolution safety |
| **Cost/token control & context window management** | IronClaw (#7824: 4× cost), OpenClaw (#125333, #101929), ZeroClaw (#10351), Hermes (#98347), NanoBot (#5568) | Compaction barriers, structured summaries, overflow recovery, iteration budgets, repetition guards |
| **Cross-platform parity (Windows/macOS/Linux)** | OpenClaw (#47273, #92777), Hermes (#98336, #91185), NanoBot (#5581), CoPaw (#7401), PicoClaw (#3349) | TUI/cursor behavior, auto-update deadlocks, memory detection, shell PATH resolution, gateway install |
| **Multi-tenant / team / hub features** | CoPaw (#7318 Hub), NanoClaw (#3651 intake taxonomy), LobsterAI (#1145 team config), ZeroClaw (#8692 governance) | RBAC, billing isolation, shared workspaces, admin-managed skills, config-as-code, vulnerability intake routes |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Technical Architecture |
|---------|---------------|-------------|------------------------|
| **OpenClaw** | Production multi-agent runtime | Enterprises, power users, self-hosted operators | Monolithic core: channels + memory + plugins + runtime + providers; Go/TypeScript |
| **ZeroClaw** | Architectural purity & security | Platform builders, security-conscious deployers | Crate-graph inversion (channels→runtime), Rust, audit-correlation first |
| **NanoClaw** | Operator ergonomics & Slack/Signal excellence | DevOps teams, Slack-heavy orgs | Skill-based extensibility, chat-sdk-bridge, container-first |
| **Hermes Agent** | Desktop/TUI polish & cross-platform auth | Daily-driver desktop users, macOS/Windows | Tauri + Python sidecar, OAuth/Keychain deep integration |
| **NanoBot** | WebUI/CLI/TUI triple-surface & provider breadth | Developers wanting UI choice, multi-provider | TypeScript runtime, OAuth catalog discovery, SkillHub marketplace |
| **CoPaw** | Multi-tenant Hub & team collaboration | Teams, orgs moving from personal to shared | QwenPaw Hub (v2.2.0), ACP protocol, console/chat separation |
| **IronClaw** | Cost-efficient long-context agents | Researchers, long-running coding agents | Pi-style compaction barriers, structured summaries, benchmark-driven |
| **PicoClaw** | Lightweight multi-channel bot | Hobbyists, single-bot deployments | Go, Telegram/QQ/Feishu focus, minimal deps |
| **LobsterAI** | Cowork UX & team config portability | Teams needing shared agent workspaces | Vue/Go, scheduled tasks, skill management, team templates |
| **Moltis** | Node-based sandbox orchestration | CI/CD, multi-agent pipeline builders | Sandbox execution, node lifecycle, minimal UI |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (Architectural Churn)** | OpenClaw, ZeroClaw, NanoClaw | 45–500 PRs/day; multiple XL refactors in flight; pre-release consolidation; maintainers merging same-day fixes for P1/P0 |
| **Active Stabilization (Bug-Fix Sprint)** | Hermes, NanoBot, IronClaw | 5–50 PRs/day; P0/P1 clusters being triaged; security & cost crises driving focus; near-term patch releases likely |
| **Review-Bound / Community-Driven** | CoPaw | High issue/PR discussion (14 comments on Hub RFC), zero merges; maintainers soliciting roadmap input; first-time contributors active |
| **Stalled / Low Velocity** | PicoClaw, LobsterAI, Moltis | Stale PRs (50–150 days), no merges, critical bugs untriaged; maintainer bandwidth appears constrained |
| **Dormant** | NullClaw, ZeptoClaw | Zero activity in 24h window |

**Key Insight**: Only **OpenClaw** and **NanoClaw** combine high velocity *with* consistent merge throughput. **ZeroClaw** has velocity but architectural PRs are blocked. **Hermes** and **NanoBot** merge fixes but are firefighting. **CoPaw** has community energy but no merge velocity.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication for Developers |
|-------|----------|----------------------------|
| **Multi-agent → Multi-tenant is the next productization step** | CoPaw Hub (#7318), NanoClaw team config (#3651), LobsterAI team templates (#1145), ZeroClaw governance (#8692) | Build for shared workspaces, RBAC, billing isolation from day one; single-user assumptions are technical debt. |
| **Channel reliability > new channels** | OpenClaw (5 channels, all with P1 delivery bugs), NanoClaw (Signal cluster), PicoClaw (Telegram/QQ), Hermes (Slack/Telegram) | Invest in receipt reconciliation, fallback semantics, idempotency keys *before* adding channels. Silent drops destroy trust. |
| **Compaction is the new GC** | IronClaw (4× cost), OpenClaw (token inflation P0), ZeroClaw (iteration budgets), Hermes (summarization loops), NanoBot (runner-owned compaction) | Token accounting accuracy and compaction safety are production blockers. Expect structured summaries, hard barriers, and overflow recovery to become standard interfaces. |
| **Security defaults shifting to fail-closed** | NanoBot (#5536 ExecTool sandbox), ZeroClaw (credential scrubbing, temp perms), CoPaw (MCP credential leak), Hermes (Keychain sync) | "Allow by default" is disappearing. Sandbox enforcement, secret redaction, and sensitive-header marking are becoming merge gates. |
| **Cross-platform desktop is a differentiation vector** | Hermes (macOS Keychain, Windows Task Scheduler), NanoBot (Windows TUI cursor), CoPaw (Windows ACP stall), OpenClaw (macOS memory detection) | Projects investing in native OS integration (Keychain, scheduled tasks, TUI terminals) retain power users; web-only UX caps adoption. |
| **Observability into silent failures is a product requirement** | OpenClaw (missing receipts, wedged lanes), Hermes (4,927 auth failures invisible), NanoClaw (DB readonly blocks all channels) | Structured audit logs, health endpoints, and failure visibility UIs are no longer optional—they're table stakes for self-hosted ops. |
| **Skill/Plugin marketplaces emerging** | NanoBot (SkillHub installs column), CoPaw (Hub admin skills), LobsterAI (quick-create skill), OpenClaw (plugin config UX) | Plugin discovery, installation, and versioning are becoming platform features. Design plugin APIs for marketplace semantics (signing, dependencies, permissions). |

---

**Bottom Line for Decision-Makers**: The ecosystem is consolidating around **production hardening** (OpenClaw, ZeroClaw, NanoClaw) and **team/multi-tenant readiness** (CoPaw, NanoClaw, LobsterAI). Projects that treat compaction, delivery guarantees, and security as architectural concerns—not afterthoughts—are pulling ahead. For new adopters: **OpenClaw** offers the most complete production stack today; **ZeroClaw** for security-first architecture; **NanoClaw** for Slack/Signal operator ergonomics; **CoPaw** for team Hub roadmap; **Hermes/NanoBot** for desktop/WebUI polish. Avoid stalled projects

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-30

## 1. Today's Overview
NanoBot shows **high development velocity** with 14 PRs updated in the last 24 hours (9 open, 5 closed/merged) and 1 new issue filed. The project is actively addressing stability across multiple surfaces: WebUI, CLI/TUI, agent runtime, and provider integrations. No new release was cut today, but several merged PRs deliver user-visible fixes (Windows TUI cursor, WebUI log streaming, SkillHub UI cleanup) and a notable feature (OAuth model catalog discovery for Codex/Grok/Copilot). The open PR backlog includes a significant refactor of context compaction ownership (#5568) and multiple bug fixes targeting resource leaks and race conditions.

## 2. Releases
**No new releases published today.** The last release information is not provided in the current data window.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5581](https://github.com/HKUDS/nanobot/pull/5581) | **Bug Fix (TUI)** | Preserves cursor position on Windows exit by disabling OpenTUI's explicit-width probe on Windows. | Improves Windows terminal UX; prevents cursor jumping into scrollback history. |
| [#5599](https://github.com/HKUDS/nanobot/pull/5599) | **Feature (CLI/WebUI)** | Streams gateway logs to terminal during `nanobot webui`; starts at log tail, handles missing/truncated files. | Better observability for WebUI operators; no replay of old logs. |
| [#5596](https://github.com/HKUDS/nanobot/pull/5596) | **Feature (Providers)** | Discovers account-specific model catalogs online for OpenAI Codex, xAI Grok, GitHub Copilot; normalizes catalog shared by WebUI and runtime; Grok 4.6 now default. | Reduces manual model config; keeps model lists fresh per account. |
| [#5595](https://github.com/HKUDS/nanobot/pull/5595) | **UI Polish (WebUI)** | Hides SkillHub `installs` column (sparse data, many zeros). | Cleaner SkillHub UI; removes misleading "0 installs" noise. |
| [#5591](https://github.com/HKUDS/nanobot/pull/5591) | **Bug Fix (WebUI)** | Preserves user-defined pane group titles when group shrinks to one pane; fixes active-pane deletion losing title. | Restores expected pane-group persistence in WebUI layout. |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#5593](https://github.com/HKUDS/nanobot/issues/5593) — *Session message rate-limit state retains expired one-shot sessions* (Issue, 0 comments, 0 👍) | New issue filed 2026-08-29; directly addressed by open PR [#5594](https://github.com/HKUDS/nanobot/pull/5594) from same author. | **Resource leak in rate-limiter**: one-shot source sessions accumulate indefinitely in `_sent_at` deque because cleanup only triggers on re-use. Fix bounds state by discarding expired prefixes on each send. |
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) — *refactor(agent): let runner own context compaction* (Open PR, updated 2026-08-30) | Large refactor touching `AgentRunner`; enforces local input ceiling even with provider-native compaction; snapshot-based. | **Architectural clarity & reliability**: moves context-pressure handling into the runner so compaction is predictable, testable, and not deferred to provider quirks. |
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) — *fix(exec): fail closed when restricted shell lacks a sandbox* (Open PR, P1 Security, updated 2026-08-29) | Addresses #4072; replaces path-check allowlist with sandbox-enforced isolation. | **Security hardening**: prevents workspace escape via symlinks, shell expansion, or command substitution when sandbox unavailable. |

## 5. Bugs & Stability — Today's Reports & Fixes
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High (Security)** | [#4072](https://github.com/HKUDS/nanobot/issues/4072) / [#5536](https://github.com/HKUDS/nanobot/pull/5536) — `ExecTool` path checks bypassable via symlinks/expansion | Open PR (P1) | [#5536](https://github.com/HKUDS/nanobot/pull/5536) — fail-closed when sandbox missing |
| **Medium** | [#5593](https://github.com/HKUDS/nanobot/issues/5593) — Rate-limit state leak for one-shot sessions | Open Issue | [#5594](https://github.com/HKUDS/nanobot/pull/5594) — bounds state, discards expired entries |
| **Medium** | [#5600](https://github.com/HKUDS/nanobot/pull/5600) — Native reasoning stream not closed on cancellation (missing `reasoning_end`) | Open PR | [#5600](https://github.com/HKUDS/nanobot/pull/5600) — closes reasoning stream on `CancelledError` |
| **Medium** | [#5601](https://github.com/HKUDS/nanobot/pull/5601) — Rejected WebUI messages leave orphaned attachments & WS subscriptions | Open PR | [#5601](https://github.com/HKUDS/nanobot/pull/5601) — rolls back attachments & subscriptions on hydration failure |
| **Low** | [#5597](https://github.com/HKUDS/nanobot/pull/5597) — `RetryWaitEvent` dropped by `ChannelManager` when progress disabled | Open PR | [#5597](https://github.com/HKUDS/nanobot/pull/5597) — routes through progress visibility gate |
| **Low** | [#5581](https://github.com/HKUDS/nanobot/pull/5581) — Windows TUI cursor restored to history on exit | **Merged** | Fixed in [#5581](https://github.com/HKUDS/nanobot/pull/5581) |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Completion notification sound (opt-in)** | PR [#5602](https://github.com/HKUDS/nanobot/pull/5602) (closes #5524) | High — small, tested, behind local preference flag |
| **Manual-only skill invocation (`disable-model-invocation`)** | PR [#5405](https://github.com/HKUDS/nanobot/pull/5405) | Medium — adds new front-matter key; needs docs & model-awareness updates |
| **OAuth model catalog auto-discovery** | PR [#5596](https://github.com/HKUDS/nanobot/pull/5596) **merged** | Already in main; will ship in next release |
| **Runner-owned context compaction** | PR [#5568](https://github.com/HKUDS/nanobot/pull/5568) | Medium-High — architectural refactor; likely targeted for next minor |
| **EditFileTool selector exclusivity docs** | PR [#5598](https://github.com/HKUDS/nanobot/pull/5598) | High — documentation-only, clarifies existing validation |

## 7. User Feedback Summary
- **Windows TUI users** reported cursor corruption on exit; fix merged (#5581) — direct quality-of-life win.
- **WebUI operators** wanted live gateway logs without replay; delivered in #5599.
- **SkillHub browsers** complained about "0 installs" noise; column hidden in #5595.
- **Pane-group power users** lost custom titles on pane deletion; restored in #5591.
- **Security-conscious deployers** flagged workspace escape via shell tricks (#4072); fail-closed fix in review (#5536).
- **Noisy "0 installs" and pane-title loss** indicate UI polish is a current focus area.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) — `ExecTool` fail-closed sandbox (P1 Security) | Open since 2026-08-25 | **Critical security fix**; blocks workspace escape when sandbox unavailable. Should be fast-tracked. |
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) — Runner-owned context compaction | Open since 2026-08-27 | **Core refactor** affecting every agent turn; needs thorough review & perf validation. |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) — Manual-only skill invocation | Open since 2026-08-16 | **New skill capability** enabling safe side-effect skills; design reviewed but awaiting merge. |
| [#5594](https://github.com/HKUDS/nanobot/pull/5594) / [#5593](https://github.com/HKUDS/nanobot/issues/5593) — Rate-limit state bound | Issue+PR 2026-08-29 | **Memory leak fix**; small scope but affects long-running multi-session deployments. |
| [#5600](https://github.com/HKUDS/nanobot/pull/5600) — Reasoning stream cleanup on cancel | Open 2026-08-29 | **Streaming correctness**; prevents client desync when reasoning cancelled mid-stream. |

---
*Data sourced from GitHub API for HKUDS/nanobot on 2026-08-30. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-30

## 1. Today's Overview

Hermes Agent shows **high velocity with significant stability pressure** today. The project processed 50 PR updates and 11 issue updates in 24 hours, with zero new releases. Five PRs were merged/closed, addressing critical bugs in session state, Windows compatibility, and OAuth handling. However, 9 new issues opened today—including two **P1** (Windows auto-update deadlock, Python SIGSEGV crash) and one **P0** (multimodal data loss in transcript repair)—signal acute regression risk. The long-running skills-index staleness issue (#66616, open since July 18) remains unresolved with 121 comments, indicating a chronic CI/CD gap. Overall, the project is in active firefighting mode with maintainers prioritizing crash fixes and data-integrity patches over feature work.

## 2. Releases

**No new releases published today.** The latest version remains `v2026.8.27` (v0.20.6, upstream 5fc308a7). Several merged PRs today (#98343, #91185, #92604, #98335, #98347) contain fixes that would typically ship in a patch release—particularly the P0 multimodal corruption fix (#98335) and P0 repetition-guard DoS fix (#98347). Expect a `v2026.8.30` or `v2026.8.31` cut once CI validates the merged batch.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Component | Summary |
|----|------|-----------|---------|
| [#98343](https://github.com/NousResearch/hermes-agent/pull/98343) | **Bug fix (closed, duplicate)** | auth, macOS | Mirrors Claude Code OAuth token rotation to macOS Keychain (fixes #98334) |
| [#91185](https://github.com/NousResearch/hermes-agent/pull/91185) | **Bug fix (closed)** | gateway, Windows | Fixes `hermes gateway install` Scheduled Task principal/flag defects on workgroup hosts |
| [#92604](https://github.com/NousResearch/hermes-agent/pull/92604) | **Feature (closed, withdrawn)** | agent, Azure | Azure Foundry Entra deployment picker visibility — author withdrew |
| [#98335](https://github.com/NousResearch/hermes-agent/pull/98335) | **Bug fix (open, P0)** | agent, sessions | **Preserves multimodal content in transcript repair** — fixes `is_content_blank()` misclassifying image/audio messages as blank |
| [#98347](https://github.com/NousResearch/hermes-agent/pull/98347) | **Bug fix (open, P0)** | agent, streaming | **Repetition guard supports multipart list content** — prevents infinite continuation loops on truncated multimodal responses |

**Key advancement:** Two **P0 data-integrity/DoS fixes** merged (#98335, #98347) address silent multimodal message loss and infinite streaming loops. The macOS Keychain OAuth fix (#98343) resolves a security-boundary gap but was closed as duplicate of the issue filed today (#98334). Windows gateway install (#91185) unblocks workgroup-host deployments.

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **121 comments**, open since Jul 18 | **Skills index CI/CD reliability** — automated freshness probe fails (index 29.8h old vs 26h limit); blocks `/docs/skills` hub |
| [#98334](https://github.com/NousResearch/hermes-agent/issues/98334) | 2 comments, filed today | **macOS Keychain OAuth sync** — refresh writes only `~/.claude/.credentials.json`, stale Keychain token bricks login |
| [#98336](https://github.com/NousResearch/hermes-agent/issues/98336) | 1 comment, filed today | **Windows auto-update deadlock** — `hermes serve`/`gateway` child processes hold `hermes.exe`, blocking one-click update (P1) |
| [#98338](https://github.com/NousResearch/hermes-agent/issues/98338) | 1 comment, filed today | **Observability gap in auth refresh** — 4,927 failures/17h, 66% invisible in app log, no backoff/circuit breaker (P2) |
| [#98332](https://github.com/NousResearch/hermes-agent/issues/98332) | 1 comment, filed today | **Managed Python SIGSEGV in sqlite3** — crashes at 600s delegation timeout, kills owner process (P1) |

**Underlying theme:** Cross-platform credential persistence (macOS Keychain), Windows process-management during updates, and observability of authentication failures are the top user-visible pain points. The skills-index staleness (#66616) reflects a deeper CI/CD maintenance burden.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Component | Fix PR Exists? |
|----------|-------|-----------|----------------|
| **P0** | [#98335](https://github.com/NousResearch/hermes-agent/issues/98335) — Multimodal content lost in transcript repair/row reconciliation | agent, sessions | ✅ **Merged** [#98335](https://github.com/NousResearch/hermes-agent/pull/98335) |
| **P0** | [#98347](https://github.com/NousResearch/hermes-agent/issues/98347) — Repetition guard DoS on multipart truncated responses | agent, streaming | ✅ **Merged** [#98347](https://github.com/NousResearch/hermes-agent/pull/98347) |
| **P1** | [#98336](https://github.com/NousResearch/hermes-agent/issues/98336) — Windows auto-update fails when `hermes.exe` held by child processes | desktop, Windows, install-update | ✅ **Open PR** [#98350](https://github.com/NousResearch/hermes-agent/pull/98350) |
| **P1** | [#98332](https://github.com/NousResearch/hermes-agent/issues/98332) — Python 3.11.15 SIGSEGV in `sqlite3` C extension at delegation timeout | agent, delegate, sessions | ❌ No PR yet |
| **P2** | [#98334](https://github.com/NousResearch/hermes-agent/issues/98334) — macOS OAuth refresh doesn't write Keychain | agent, auth, macOS | ✅ **Open PR** [#98343](https://github.com/NousResearch/hermes-agent/pull/98343) (closed as duplicate) |
| **P2** | [#98338](https://github.com/NousResearch/hermes-agent/issues/98338) — `auth_native_refresh()` splits failures across logs, no backoff | cli, auth | ✅ **Open PR** [#98344](https://github.com/NousResearch/hermes-agent/pull/98344) |
| **P2** | [#98330](https://github.com/NousResearch/hermes-agent/issues/98330) — `skills.write_approval` pending writes accumulate silently, no review surface | cli, gateway, skills | ❌ No PR yet |
| **P2** | [#98321](https://github.com/NousResearch/hermes-agent/issues/98321) — Bot Chat regresses answer quality vs regular sessions | agent, desktop, sessions | ❌ No PR yet |
| **P2** | [#98351](https://github.com/NousResearch/hermes-agent/issues/98351) — 1500+ message session stuck in 'summarizing thread' loop, UI dead | agent, desktop, compression | ❌ No PR yet |
| **P3** | [#98303](https://github.com/NousResearch/hermes-agent/pull/98303) — Gemini TTS timeout too short for long audio | tts, Gemini | ✅ **Open PR** [#98303](https://github.com/NousResearch/hermes-agent/pull/98303) |

**Critical cluster:** Two P0s merged, two P1s with open fix PRs (#98336→#98350, #98334→#98343), one P1 without fix (#98332 — native crash), and three P2s with fix PRs (#98338, #98330, #98351). The SIGSEGV (#98332) is the highest-risk unfixed item — managed Python crash kills the entire agent process.

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood for Next Version |
|----------|--------|----------------------------|
| [#98337](https://github.com/NousResearch/hermes-agent/pull/98337) — **Prior-work-first execution memory** (PR open) | Repository-level "law" for durable execution protocol, preflight/resume guards, worktree/handoff discovery | **Medium** — needs-decision label, architectural scope suggests v2026.9+ |
| [#98197](https://github.com/NousResearch/hermes-agent/pull/98197) — **Deferred plugin questions** (PR open) | SQLite-backed deferred-question service for plugins, delivery after gateway idle, persist handler results | **High** — complements plugin system, comp/gateway/cli touchpoints |
| [#98352](https://github.com/NousResearch/hermes-agent/issues/98352) — **Telegram Pokémon Dex plugin** (issue open) | Deterministic local plugin, no LLM/agent session, Chinese/English queries | **Low** — P3, user-local plugin, niche use case |
| [#98314](https://github.com/NousResearch/hermes-agent/pull/98314) — **Restore DB-backed history for Desktop/TUI** (PR open) | Fixes multi-turn history loss from hollow in-memory session history | **High** — P2, session-state regression, Desktop/TUI core path |
| [#96379](https://github.com/NousResearch/hermes-agent/pull/96379) — **Accept custom models without catalog listings** (PR open) | OpenAI-compatible endpoints without `/models` catalog | **High** — P2, compatibility, unblocks custom endpoint users |

**Roadmap read:** Near-term (next 1–2 weeks) will likely ship Desktop history fix (#98314), custom-model compatibility (#96379), Gemini TTS timeout (#98303), and deferred plugin questions (#98197). The prior-work-first memory system (#98337) is a larger architectural bet requiring design review.

## 7. User Feedback Summary

**Pain points (from issues filed today):**
- **Windows users blocked from auto-updates** when running `hermes serve` or `gateway` — hand-off flow doesn't terminate child processes (#98336)
- **macOS users experience login brick** after OAuth refresh because Keychain isn't updated (#98334)
- **Desktop users lose session history** in TUI/Desktop due to in-memory history hollow (#98314 context)
- **Large sessions (1500+ msgs) freeze UI** in "summarizing thread" loop — compression deadlock (#98351)
- **Bot Chat quality regression** vs regular sessions with identical config — intent handling failure (#98321)
- **Skill write approvals accumulate silently** with no review UI — pending writes invisible (#98330)
- **Auth refresh failures invisible** — 66% of 4,927 failures/17h not in app log, no backoff (#98338)

**Positive signals:**
- Active PR response: maintainers opened fix PRs for 6 of 9 new issues within hours
- Community contributions: Indonesian docs trio (#92192, #93632), Windows gateway fix (#91185)
- Plugin extensibility: deferred questions (#98197) and local deterministic plugins (#98352) show ecosystem growth

## 8. Backlog Watch — Long-Unanswered / Needs Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **43 days** | Open, 121 comments | Skills index CI/CD fundamentally broken — blocks documentation hub, indicates workflow neglect |
| [#91557](https://github.com/NousResearch/hermes-agent/pull/91557) | 9 days | Open, P1 | Native compaction drops image-only messages — partial fix for #91477, needs review |
| [#98197](https://github.com/NousResearch/hermes-agent/pull/98197) | 1 day | Open, needs-decision | Deferred plugin questions — architectural, touches gateway/cli/plugins, session-state risk flags |
| [#98337](https://github.com/NousResearch/hermes-agent/pull/98337) | 0 days | Open, needs-decision | Prior-work-first execution memory — new "law" for agent, requires design sign-off |
| [#92192](https://github.com/NousResearch/hermes-agent/pull/92192) / [#93632](https://github.com/NousResearch/hermes-agent/pull/93632) | 8–6 days | Open | Indonesian i18n docs — complete trio + Docusaurus locale, ready for merge |

**Top priority for maintainers:** Resolve #66616 (skills-index CI) — it's the oldest, highest-comment item and reflects a systemic automation gap. Review #915

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-30

## 1. Today's Overview
PicoClaw showed moderate maintenance activity over the last 24 hours with 2 issues updated and 3 pull requests processed. No new releases were published. The project closed two stale PRs (#3315, #3337) that had been open for weeks, indicating maintainer cleanup of backlog. One new bug report (#3349) surfaced today regarding QQ channel authentication failures, while a previously reported Telegram animation bug (#3343) remains open with one community comment. A small i18n PR (#3348) for Czech translations was opened yesterday and awaits review. Overall velocity appears low-to-moderate with focus on bug triage and localization.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
**Merged/Closed PRs (2):**
- **#3315** *Support topics in private bot chats* — Closed as stale. This PR aimed to fix Telegram topic handling for private bot chats with forum topic mode enabled by recognizing `IsTopicMessage` in addition to `Chat.IsForum`. The fix addresses a gap where PicoClaw only recognized topics in forum supergroups. [View PR](https://github.com/sipeed/picoclaw/pull/3315)
- **#3337** *Fix/mcp failure hangs agent loop* — Closed as stale. This PR addressed a hang in the agent loop when an MCP server connection fails. Previously, `ensureMCPInitialized` errors would propagate and exit `AgentLoop.Run`, stopping the chat interface until restart. The fix ensures graceful error handling. [View PR](https://github.com/sipeed/picoclaw/pull/3337)

**Open PR (1):**
- **#3348** *i18n: complete Czech code wrap labels* — Opened 2026-08-29. Adds missing Czech localization strings for code wrapping labels. Awaiting review. [View PR](https://github.com/sipeed/picoclaw/pull/3348)

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| **#3343** [BUG] Telegram tool feedback animation edits message indefinitely after failed turn | 1 comment, created 2026-08-22, updated 2026-08-29 | High — Produced 228,000+ edit attempts triggering Telegram rate limits (`retry_after`). Indicates a runaway loop in animation logic when agent turns stall. |
| **#3349** [BUG] QQ channel unavailable (auth header format error) | 0 comments, created today | Medium — Fresh report with detailed gateway logs showing `code:401`, `err_code:40011005` ("Authorization参数格式错误"). Affects both Docker and Linux x86 builds. |
| **#3348** i18n: Czech code wrap labels | 0 comments, opened yesterday | Low — Routine localization contribution. |

**Underlying needs:** The Telegram bug (#3343) reveals a missing guard/timeout in feedback animation logic that can spam external APIs. The QQ issue (#3349) suggests a protocol/auth implementation drift against QQ's gateway expectations.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | #3343 — Telegram animation runaway loop (228k+ edits, rate limited) | Open | No |
| **Medium** | #3349 — QQ channel auth header format error (401/11241) | Open | No |

**Notes:** #3343 is the most severe — it causes external API abuse and potential account restrictions. No fix PR exists yet. #3349 blocks QQ channel entirely for affected users; logs point to Authorization header construction.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests in the last 24h. The closed PR #3315 (private bot chat topics) signals ongoing Telegram Bot API compliance work. The i18n PR (#3348) indicates continued localization expansion. Given the MCP fix (#3337) was closed stale, MCP stability may still need attention.

**Predicted next-version candidates:**
- Telegram private chat topic support (from #3315, if re-opened/merged)
- MCP connection resilience (from #3337, if re-visited)
- QQ gateway auth fix (from #3349, high user impact)

## 7. User Feedback Summary
**Pain points:**
- **Telegram users:** Runaway animation edits spam API, trigger rate limits, waste quota (#3343).
- **QQ users:** Complete channel failure on both Docker and native Linux builds due to auth header mismatch (#3349).

**Use cases implied:**
- Long-running agent turns with tool feedback animations (Telegram).
- Self-hosted deployments via Docker and binary on x86 Linux (QQ).

**Sentiment:** Negative on stability for two major chat platforms. No positive feedback visible in this window.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| **#3343** Telegram animation runaway loop | 8 days (updated yesterday) | High-severity bug with external side effects (API abuse, rate limits). Needs timeout/guard logic. No PR yet. |
| **#3315** Private bot chat topics | 27 days (closed stale) | Useful Telegram feature fix abandoned as stale. May need re-opening if maintainers accept scope. |
| **#3337** MCP failure hangs agent loop | 16 days (closed stale) | Core stability fix for MCP integrations closed without merge. Risk of recurrence. |
| **#3349** QQ auth failure | 0 days (new today) | Blocks a full channel. Fresh but detailed; should be triaged quickly. |

**Maintainer attention needed:** #3343 (urgent), #3349 (triage), and reconsideration of stale-closed PRs #3315/#3337 if fixes are still valid.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-30

---

## 1. Today's Overview

NanoClaw shows **high maintenance velocity** with 45 PRs updated and 27 merged/closed in the last 24 hours, indicating an active core team pushing fixes and infrastructure improvements. The issue queue is quiet (only 5 updates, 1 closure), but three new Signal-related bugs filed today (#3669–#3671) reveal a fragile onboarding path for the dedicated-number Signal setup. No new releases were cut. Overall health: **strong contributor throughput, but a cluster of user-facing Signal regressions needs triage**.

---

## 2. Releases

**None today.** The last published release is not in the provided data window.

---

## 3. Project Progress — Merged / Closed PRs (Last 24h)

| PR | Type | Summary | Link |
|----|------|---------|------|
| #3668 | **Fix (core-team)** | Restored missing `slack-raw-text.ts` copy in `add-slack` skill; unblocked typecheck for Slack adapter installs | [#3668](https://github.com/nanocoai/nanoclaw/pull/3668) |
| #3667 | **Fix (core-team)** | Copied `slack-raw-text.ts` alongside Slack adapter so `import './slack-raw-text.js'` resolves | [#3667](https://github.com/nanocoai/nanoclaw/pull/3667) |
| #3666 | **Feature (core-team)** | Added pasted-table recovery from raw Slack events via new `extractRawText` hook (depends on #3665) | [#3666](https://github.com/nanocoai/nanoclaw/pull/3666) |
| #3665 | **Feature (core-team)** | Exposed `extractRawText` hook in `chat-sdk-bridge` so channel adapters can recover content left in `message.raw` | [#3665](https://github.com/nanocoai/nanoclaw/pull/3665) |
| #3664 | **Feature (core-team)** | Added `NANOCLAW_DEFAULT_MODEL` & `NANOCLAW_FAST_MODE` env vars for install-wide model default & fast serving tier | [#3664](https://github.com/nanocoai/nanoclaw/pull/3664) |
| #3663 | **Chore (core-team)** | Replaced personal placeholder name (“Gavriel”) with neutral placeholder across examples, fixtures, init scripts | [#3663](https://github.com/nanocoai/nanoclaw/pull/3663) |
| #3662 | **Fix (core-team)** | Distinguished pre-task script timeout from generic “Command failed” error message | [#3662](https://github.com/nanocoai/nanoclaw/pull/3662) |
| #3661 | **Fix (core-team)** | Added retry logic to Bun install in Dockerfile to avoid flaky image builds | [#3661](https://github.com/nanocoai/nanoclaw/pull/3661) |
| #3655 | **Fix** | Rejected empty `--prompt` on `ncl tasks update` | [#3655](https://github.com/nanocoai/nanoclaw/pull/3655) |

**Theme:** Heavy focus on **Slack adapter reliability** (raw-text extraction, missing file copy), **container/build hardening** (Bun retry, timeout messaging), and **operator ergonomics** (default model, neutral placeholders).

---

## 4. Community Hot Topics

| Item | Activity | Signal |
|------|----------|--------|
| **#3671** — `install-signal-cli.sh` pins buggy `signal-cli 0.14.3` (session hang) | 0 comments, 0 👍, filed today | **Critical onboarding blocker** — new contacts cause silent indefinite hangs; fixed upstream in 0.14.7 |
| **#3670** — Dedicated-number Signal setup grants “owner” to bot, not operator; approval cards vanish | 0 comments, 0 👍, filed today | **Silent failure mode** — documented path produces total silence, no errors |
| **#3669** — `signal-auth` can’t find `signal-cli` in `~/.local/bin` under non-login shells; falls back to QR flow | 0 comments, 0 👍, filed today | **PATH resolution bug** — breaks automated/non-interactive setups |
| **#3660** — Session DB readonly errors blocking all outbound messages (Discord, etc.) | 0 comments, 0 👍, filed today | **Production outage** — SQLite “attempt to write a readonly database” started ~12h ago |

**Analysis:** Three Signal issues (#3669–#3671) filed by the same reporter (IT-Sage) within hours of each other point to a **systemic gap in the dedicated-number Signal onboarding path** — version pinning, permission model, and PATH resolution all broken simultaneously. The DB readonly issue (#3660) is a separate, broader stability regression affecting multiple channels.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#3660](https://github.com/nanocoai/nanoclaw/issues/3660) | Session SQLite DBs read-only → **all outbound message delivery blocked** (Discord + others) | No PR yet |
| **High** | [#3671](https://github.com/nanocoai/nanoclaw/issues/3671) | `signal-cli 0.14.3` hangs indefinitely on new-contact session establishment | No PR yet (simple version bump to 0.14.7) |
| **High** | [#3670](https://github.com/nanocoai/nanoclaw/issues/3670) | Dedicated-number Signal setup assigns ownership to bot account → approval cards go to unwatched self-DM | No PR yet |
| **Medium** | [#3669](https://github.com/nanocoai/nanoclaw/issues/3669) | `signal-auth` `cliPath()` misses `~/.local/bin` in non-login shells → falls back to QR flow incorrectly | No PR yet |
| **Low** | [#95](https://github.com/nanocoai/nanoclaw/issues/95) | Raspberry Pi 4B install guidance (closed today) | Closed, no code change |

**Note:** The Slack adapter typecheck break (#3668/#3667) was **fixed and merged today**.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Configurable host-sweep turn ceiling** | PR [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) (open, core-team) | High — addresses #3643, simple config addition |
| **PR template v2 with token parsing & managed-kind reconcile** | PR [#3648](https://github.com/nanocoai/nanoclaw/pull/3648) (open, core-team) | High — part of CI-04 label taxonomy rollout |
| **Automatic `area/*` & `kind/*` labels from changed paths / PR type** | PR [#3647](https://github.com/nanocoai/nanoclaw/pull/3647) (open, core-team) | High — eliminates manual triage |
| **Context.dev MCP integration skill** | PR [#3364](https://github.com/nanocoai/nanoclaw/pull/3364) (open, 10 days old) | Medium — operational/container skill, awaiting review |
| **Explicit Slack room handoffs & mention validation** | PR [#3545](https://github.com/nanocoai/nanoclaw/pull/3545) (open, core-team) | Medium — improves Slack UX, 5 days old |
| **`NO_PROXY` for `host.docker.internal` to reach host-side MCP servers** | PR [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) (open) | Medium — niche but concrete Docker networking fix |
| **Issue-side intake taxonomy docs (forms, labels, vulnerability route)** | PR [#3651](https://github.com/nanocoai/nanoclaw/pull/3651) (open, core-team) | High — documentation for new contributor workflow |

**Prediction:** The **CI/label automation suite (#3647, #3648, #3657)** and **host-sweep configurability (#3646)** are closest to merge. Signal onboarding fixes will likely be fast-tracked given the cluster of new bugs.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Signal dedicated-number path is silently broken** | #3670, #3671, #3669 all filed today by same operator | Operators following documented “Alternatives” hit 3 independent failures: version hang, ownership misassignment, PATH miss |
| **Session DB corruption / readonly state halts all messaging** | #3660 — “Discord and other channels cannot send outbound messages” | Production outage affecting multiple channels simultaneously |
| **Slack adapter install fails typecheck** | #3668 — missing `slack-raw-text.ts` copy in skill | Blocked deployments using `add-slack` skill since 2026-08-29 ~18:45Z |
| **Flaky Bun install breaks container builds** | #3661 — Dockerfile `curl | bash` fails intermittently | CI/CD reliability |
| **Pre-task script timeout masked as generic failure** | #3662 — “Command failed” instead of “timed out” | Debugging difficulty |
| **Personal name in generated examples** | #3663 — “Gavriel” in `init-first-agent.ts` usage block | Minor polish, but affects new-user copy-paste experience |

**Overall sentiment:** Operators hitting **documented but broken paths** (Signal dedicated-number) and **sudden regressions** (DB readonly, Slack typecheck). Core team responding rapidly to infra/tooling issues.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#3660](https://github.com/nanocoai/nanoclaw/issues/3660) — Session DB readonly | < 24h | **Open, no PR** | **Active production outage** — blocks all outbound messages |
| [#3671](https://github.com/nanocoai/nanoclaw/issues/3671) — signal-cli 0.14.3 hang | < 24h | **Open, no PR** | Simple version bump (0.14.7) unblocks new-contact messaging |
| [#3670](https://github.com/nanocoai/nanoclaw/issues/3670) — Signal owner misassignment | < 24h | **Open, no PR** | Documented “Alternatives” path is fundamentally broken |
| [#3669](https://github.com/nanocoai/nanoclaw/issues/3669) — signal-auth PATH miss | < 24h | **Open, no PR** | Breaks non-interactive/automated Signal setup |
| [#3464](https://github.com/nanocoai/nanoclaw/pull/3464) — Remove v1-only `session-commands.ts` | 7 days | **Open, stale** | Blocks `skill/compact` merge; v1 symbols no longer exist on v2 `main` |
| [#3364](https://github.com/nanocoai/nanoclaw/pull/3364) — Context.dev MCP skill | 10 days | **Open** | Community-contributed integration, awaiting review |
| [#3545](https://github.com/nanocoai/nanoclaw/pull/3545) — Slack room handoffs | 5 days | **Open, core-team** | UX improvement for Slack-heavy teams |

**Recommendation:** Prioritize #3660 (DB readonly) and the Signal cluster (#3669–#3671) for immediate triage/fix. The v1 cleanup (#3464) is a merge blocker for a long-running branch.

---

*Digest generated from GitHub data as of 2026-08-30 00:00 UTC. All links point to `github.com/nanocoai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-30

## 1. Today's Overview
IronClaw shows **moderate maintenance activity** with 5 open PRs updated in the last 24 hours and 1 active issue, but **zero merged PRs or releases**. The project is in a **stabilization and bug-fix phase** rather than feature development: all 5 PRs are fixes or chores (CI, tooling, compaction bounds, error messaging). The single active issue (#7824) reveals a **critical performance/cost problem** — full thread history replay causing 4× token inflation and 4× cost on benchmarks — which PR #7978 begins to address. No new releases indicate the team is accumulating fixes for a future cut.

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be between release cycles, with fixes accumulating on `main`.

## 3. Project Progress
**No PRs were merged or closed today.** All 5 updated PRs remain open:
- **#7978** (size: L, risk: low, core contributor) — bounds cumulative summarizer input during compaction; directly tackles the token-explosion problem highlighted in Issue #7824.
- **#7988** (size: XS, CI bot) — nightly refresh of the codebase knowledge graph bootstrap snapshot.
- **#7991** (size: XS) — fixes pre-push hook failures on macOS (test + CI script issues).
- **#7990** (size: M) — corrects tool-disclosure error classification: unresolvable tool names no longer mislabeled as encoding errors.
- **#7989** (size: S) — improves `list_dir` error messages to include the missing path.

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| **[#7824](https://github.com/nearai/ironclaw/issues/7824)** | Issue | 5 comments, created 2026-08-22, updated 2026-08-29 | **Drastic token/cost reduction** for long-context agents. Current full-history replay burns 227.7M tokens ($10.31) vs. 55.1M ($2.52) baseline on PinchBench. Requests Pi-style compaction barriers, structured summaries, and overflow recovery. |
| **[#7978](https://github.com/nearai/ironclaw/pull/7978)** | PR | Open, updated 2026-08-29, author: serrrfirat (core) | **First concrete fix** for #7824: bounds cumulative summarizer input across carried summary + delta, preserves full message bodies behind injection/leak scans. |

**Analysis:** The community (core team) is laser-focused on the **context-window cost crisis**. Issue #7824 is the architectural umbrella; PR #7978 is the first surgical fix. Other PRs are peripheral developer-experience improvements.

## 5. Bugs & Stability
| Severity | Bug | Status | Fix PR |
|----------|-----|--------|--------|
| **High (cost/perf)** | Full thread history replay → 4× token usage, 4× API cost on benchmarks | Open (Issue #7824) | **#7978** (partial: bounds summarizer input) |
| **Medium (DX)** | Pre-push hook fails on macOS (test + CI script) → developers bypass hook | Open | **#7991** |
| **Low (correctness)** | Tool-disclosure misclassifies unresolvable tool name as `InputEncode` error | Open | **#7990** |
| **Low (DX)** | `list_dir` on missing path returns generic error without the path | Open | **#7989** |

**No crashes or regressions reported today.** The high-severity item is a **cost/performance regression** from earlier compaction work (referenced PR #7491).

## 6. Feature Requests & Roadmap Signals
**Explicit requests from Issue #7824:**
1. **Pi-style compaction barriers** — periodic hard boundaries that force summarization.
2. **Structured summaries** — machine-readable, typed summaries instead of free-text.
3. **Overflow recovery** — graceful handling when even summaries exceed context window.

**Predicted next-version candidates:**
- PR #7978 (compaction input bounding) — **high confidence**, core-authored, directly addresses #7824.
- PR #7990 (error-kind fix) — **high confidence**, low-risk, improves debugging fidelity.
- PR #7989 (path-in-error) — **high confidence**, trivial UX win.
- PR #7991 (macOS pre-push) — **medium confidence**, blocks Mac contributors but CI unaffected.

**Not yet scoped:** Full Pi-style barriers and structured summaries — likely require follow-up PRs after #7978 lands.

## 7. User Feedback Summary
**Pain points (from #7824 benchmark data):**
- **Cost unpredictability:** Same task suite costs $10.31 vs. $2.52 depending on compaction strategy.
- **Token bloat:** 227.7M input tokens for 147 tasks is unsustainable for production workloads.
- **No visibility into compaction behavior** — users can’t audit what gets summarized vs. retained.

**Use cases implied:** Long-running coding agents, multi-turn research tasks, any workflow where context accumulates over hours/days.

**Satisfaction signal:** Core team actively fixing; no external user complaints visible in this 24h window. The issue author (`serrrfirat`) is a core contributor, suggesting **dogfooding-driven urgency**.

## 8. Backlog Watch
| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| **[#7824](https://github.com/nearai/ironclaw/issues/7824)** | 8 days | **High** | Umbrella issue for the project’s #1 cost/perf problem. Only 1 of 3 requested features (compaction barriers, structured summaries, overflow recovery) has a PR (#7978). No milestone, no target version. |
| **[#7978](https://github.com/nearai/ironclaw/pull/7978)** | 2 days | Medium | Large PR (size: L) touching core compaction logic. Needs thorough review before merge; blocks progress on #7824. |
| **[#7990](https://github.com/nearai/ironclaw/pull/7990)** | 1 day | Low | Medium-sized fix with error-kind semantics change; could affect downstream error handling. |

**Maintainer action recommended:** Assign #7824 to a milestone, triage #7978 for priority review, and consider splitting Pi-style barriers/structured summaries into child issues for parallel work.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-30

## 1. Today's Overview
LobsterAI shows **minimal forward momentum** on 2026-08-30: no new releases, zero PRs merged or closed, and all five open PRs plus the single active issue carry a `stale` label (last meaningful update 2026-03-31). The repository appears to be in a **maintenance/low-velocity phase**—contributions exist but await maintainer review. The only live discussion is a bug report around agent task-record synchronization (#1139), while the pending PRs cluster around UX polish (error highlighting, skill creation shortcuts, scheduled-task visibility, team-config portability, and an icon-consistency fix).

---

## 2. Releases
**None** — no new versions published in the last 24 h.

---

## 3. Project Progress
**No PRs merged or closed today.** All five open PRs remain in `stale` state:
| PR | Title | Focus Area | Status |
|----|-------|------------|--------|
| [#1138](https://github.com/netease-youdao/LobsterAI/pull/1138) | Highlight tool errors & add jump-to-latest button | Cowork UX | Open (stale) |
| [#1142](https://github.com/netease-youdao/LobsterAI/pull/1142) | Quick-create skill from skill management page | Skills UX | Open (stale) |
| [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) | Fix default icon not saved on agent creation | Agent UI consistency | Open (stale) |
| [#1144](https://github.com/netease-youdao/LobsterAI/pull/1144) | Show last run time & running state in scheduled tasks | Scheduled Tasks UX | Open (stale) |
| [#1145](https://github.com/netease-youdao/LobsterAI/pull/1145) | Team config template export/import | Settings / Team config | Open (stale) |

---

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) | Issue | 1 comment, updated 2026-08-29 | **Agent task-record sync broken** when creating a same-name agent after deletion—user must switch away/back to see records. |
| [#1138](https://github.com/netease-youdao/LobsterAI/pull/1138) | PR | 0 comments | **Error observability** in Cowork sessions—users need immediate visual cues for failed tool calls. |
| [#1145](https://github.com/netease-youdao/LobsterAI/pull/1145) | PR | 0 comments | **Team-config portability**—export/import JSON templates for UI, model defaults, providers, cowork options, skills. |

*Underlying theme*: Contributors are targeting **workflow friction** (error visibility, skill onboarding, config sharing) and a **data-consistency bug** that breaks trust in agent history.

---

## 5. Bugs & Stability
| Severity | Item | Description | Fix PR? |
|----------|------|-------------|---------|
| **High** | [#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) | Creating a same-name agent after deletion leaves the UI on the new agent but fails to load its task records until a manual switch-away/switch-back. Affects core agent-history reliability. | No |
| **Low** | [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) | Default icon (🤖) not persisted on agent creation → sidebar shows 🦞, “My Agents” page shows 🤖. Purely visual inconsistency. | Yes (#1143) |

*No crashes, regressions, or security issues reported in the last 24 h.*

---

## 6. Feature Requests & Roadmap Signals
The five stale PRs collectively signal the **next likely version’s focus**:
1. **Cowork UX hardening** — error highlighting + navigation (#1138)  
2. **Skill authoring streamlining** — one-click “Create Skill” flow (#1142)  
3. **Scheduled-task observability** — last-run timestamp + live running state (#1144)  
4. **Team-config as code** — export/import templates for reproducible setups (#1145)  
5. **UI consistency polish** — icon persistence (#1143)

*Prediction*: If maintainers resume reviews, the next release will be a **UX/ DX polish drop** (v0.x.y) rather than a feature milestone.

---

## 7. User Feedback Summary
- **Pain point**: Agent history breaks on rename/recreate cycles (#1139) — users lose immediate access to conversation context.  
- **Desired improvements**:  
  - Instant visual feedback for tool failures (Cowork)  
  - Frictionless skill creation without leaving the skills page  
  - At-a-glance scheduled-task health (last run, running state)  
  - Shareable, version-controllable team configurations  
- **Sentiment**: Constructive but **blocked**—contributors have delivered code for four of five requests, yet all sit unreviewed for ~5 months.

---

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1138](https://github.com/netease-youdao/LobsterAI/pull/1138) | 152 days | Cowork error UX — directly impacts developer trust in tool-use loops. |
| [#1142](https://github.com/netease-youdao/LobsterAI/pull/1142) | 152 days | Lowers barrier to skill creation; strategic for ecosystem growth. |
| [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) | 152 days | Trivial fix, eliminates confusing UI inconsistency. |
| [#1144](https://github.com/netease-youdao/LobsterAI/pull/1144) | 152 days | Completes scheduled-task observability; ops-friendly. |
| [#1145](https://github.com/netease-youdao/LobsterAI/pull/1145) | 152 days | Enables team-config GitOps; high leverage for enterprise adoption. |
| [#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) | 152 days | Data-integrity bug in core agent workflow; erodes user confidence. |

**Recommendation**: Triage the stale queue—merge the four low-risk UX PRs (#1138, #1142, #1144, #1145), apply the icon fix (#1143), and assign #1139 for root-cause analysis. This would unblock contributors and ship a meaningful polish release.

---

*Data sourced from GitHub API (issues/PRs updated 2026-08-29 → 2026-08-30). All links point to netease-youdao/LobsterAI.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-30

## 1. Today's Overview
Moltis shows minimal activity over the past 24 hours with only one open bug report (#1246) and no pull requests, merges, or releases. The project appears to be in a quiet maintenance phase rather than active feature development. The single reported issue describes a sandbox execution failure after adding a node, suggesting a potential regression in the node orchestration or sandbox initialization logic. With zero PRs and zero releases, development velocity is currently at a standstill.

## 2. Releases
No new releases published in the last 24 hours.

## 3. Project Progress
No pull requests were opened, merged, or closed today. No features advanced or bugs fixed via PRs in this window.

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Link |
|------|------|----------|-----------|------|
| **#1246** [Bug]: can't run on sandbox after a node is added | Issue | 0 | 0 👍 | [moltis-org/moltis#1246](https://github.com/moltis-org/moltis/issues/1246) |

**Analysis**: The sole active issue has zero community engagement (no comments, no reactions), indicating either a niche use-case or low visibility. The reporter completed the preflight checklist, suggesting a genuine, reproducible bug rather than a configuration error. The lack of discussion may mean the issue hasn't been triaged yet or affects a small subset of users.

## 5. Bugs & Stability
| Issue | Severity | Status | Fix PR |
|-------|----------|--------|--------|
| **#1246** Sandbox fails to run after node addition | **High** (blocks core workflow) | Open, unassigned | None |

**Details**: The bug prevents sandbox execution—a core Moltis capability—after a node is added. This smells like a state-synchronization or initialization-order defect in the node-manager/sandbox handshake. No fix PR exists; maintainers should prioritize triage and reproduction.

## 6. Feature Requests & Roadmap Signals
No feature requests or roadmap-relevant issues surfaced today. The only signal is the bug in #1246, which may indirectly highlight a need for better node-lifecycle testing or sandbox health checks in the next release cycle.

## 7. User Feedback Summary
- **Pain point**: Sandbox becomes unusable after node addition, breaking the "add node → run in sandbox" workflow.
- **Use case**: Dynamic node provisioning followed by immediate sandbox execution (likely CI/CD or multi-agent orchestration scenarios).
- **Sentiment**: Neutral/technical—reporter followed template diligently; no frustration expressed yet. Silence from community suggests either low impact or low awareness.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| **#1246** Sandbox failure after node add | 2 days (opened 2026-08-28) | Core functionality regression; no assignee, no comments, no fix. High risk of becoming stale if not triaged soon. |

**Recommendation**: Assign #1246 to a maintainer for immediate reproduction. Consider adding a regression test for "node add → sandbox run" to prevent recurrence. If the project uses a triage label (e.g., `triage`, `regression`), apply it now.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-30

## 1. Today's Overview
CoPaw (QwenPaw) shows **high community engagement but zero merge velocity** today. Ten issues and six pull requests were updated in the last 24 hours, yet no PRs were merged or closed. The dominant signal is the upcoming **v2.2.0 multi-tenant "QwenPaw Hub"** (#7318), which has drawn 14 comments in three days as maintainers solicit roadmap input. Meanwhile, two regressions — MCP credential leakage (#7301) and empty `output_text` blocks breaking Ark Responses API (#7402) — are blocking users on every new session. The project is in a **feature-planning + bug-triage phase** with maintainers not yet clearing the review queue.

## 2. Releases
**No new releases** in the last 24 hours. The next milestone is **v2.2.0**, which will introduce **QwenPaw Hub (multi-tenant edition)** per #7318.

## 3. Project Progress
**Zero PRs merged or closed today.** All six active PRs remain open:
- **#7401** `fix(acp)`: Prevents Windows ACP agent stalls during workspace bootstrap (event-loop freeze in `bootstrap_plugins()`).  
- **#7356** `feat(console)`: Adds chat scroll lock so long streams don’t force-follow new content.  
- **#7357** `feat(chat)`: Adds tool-call visibility toggle to reduce noise in normal reading.  
- **#7220** `fix(media)`: Rejects oversized image dimensions (closes #7212); first-time contributor.  
- **#6874** `feat(mcp)`: Adds configurable `tool_call_timeout` (default 300 s), deprecates legacy `timeout` key; **under review since Aug 10**.  
- **#7403** `docs`: README update by first-time contributor.

## 4. Community Hot Topics
| Rank | Item | Activity | Core Need |
|------|------|----------|-----------|
| 1 | **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** QwenPaw Hub multi-tenant discussion | 14 💬, 1 👍 | Teams want **shared workspaces, admin-managed skills, RBAC, billing isolation** — maintainers explicitly asking “what should we build next?” |
| 2 | **[#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770)** Chrome tab lifetime configurable | 4 💬 (closed) | Users need **persistent browser sessions across response cycles** for long-running web tasks. |
| 3 | **[#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301)** MCP legacy migration → `CredentialNotFoundError` | 3 💬 | **Every new session fails** for empty-env clients; migration leaves dangling credential ref. |
| 4 | **[#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406)** Official theming support (NEW today) | 1 💬 | UI locked to orange `#f07e26`, system font, fixed spacing — users edit `.app` bundle on every update. |
| 5 | **[#7398](https://github.com/agentscope-ai/QwenPaw/issues/7398)** `/btw` side-question command (like Claude Code) | 1 💬 | **Non-context side questions** without polluting main history. |

**Underlying theme:** Transition from *personal* to *team* tooling (Hub), plus **UI/UX polish** (theming, scroll lock, tool-call toggle, plan mode) that power users expect from a daily driver.

## 5. Bugs & Stability (ranked by severity)
| Severity | Issue | Impact | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | **[#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301)** MCP legacy migration leaves dangling credential ref | **Every new session crashes** with `CredentialNotFoundError` for empty-env clients | ❌ No PR yet |
| **High** | **[#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402)** Empty `output_text` blocks poison session history → Ark Responses API 400 | Breaks **Volcengine Ark** provider; any empty assistant text block corrupts downstream requests | ❌ No PR yet |
| **Medium** | **[#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212)** (via **#7220**) Oversized image dimensions freeze app | 65 MP image < 2 MiB bypasses byte check but exceeds vision pixel limit | ✅ **#7220** open, awaiting review |
| **Medium** | **[#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770)** Chrome tab lifetime not configurable | Long web tasks lose browser state between cycles | ❌ Closed (no fix merged) |
| **Low** | **[#7400](https://github.com/agentscope-ai/QwenPaw/issues/7400)** User error (closed invalid) | — | — |

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for v2.2.0 |
|---------|--------|------------------------|
| **QwenPaw Hub (multi-tenant)** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) (maintainer-initiated) | **Certain** — explicit 2.2.0 target |
| **Official theming (accent, font, spacing)** | [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | **High** — trivial config, high user pain |
| **`/btw` side-question command** | [#7398](https://github.com/agentscope-ai/QwenPaw/issues/7398) | **Medium** — mirrors Claude Code, low impl cost |
| **Plan Mode revival** | [#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405) | **Medium** — users miss pre-execution visibility |
| **Expose `card_auto_layout` in Console** | [#7404](https://github.com/agentscope-ai/QwenPaw/issues/7404) | **High** — already implemented, just hidden |
| **Chat scroll lock** | [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) | **High** — PR ready, UX win |
| **Tool-call visibility toggle** | [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | **High** — PR ready, reduces noise |
| **Configurable MCP tool-call timeout** | [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | **Medium** — under review 20 days, closes #6724 |

## 7. User Feedback Summary
- **Pain points:**  
  - “Every app update wipes my manual theme edits” (#7406)  
  - “New session = instant crash” on MCP/Ark (#7301, #7402)  
  - “Can’t read earlier output while model streams” (#7356)  
  - “Tool-call cards clutter chat; no off switch” (#7357)  
  - “Windows ACP agent hangs for minutes on startup” (#7401)  
- **Delighters:**  
  - Community excited about **Hub**; 14 comments in 3 days show strong team-adoption demand.  
  - First-time contributors active (#7220, #7403) — onboarding works.  
- **Unmet expectations:**  
  - Plan Mode removed; snapshots are reactive, not proactive (#7405).  
  - `card_auto_layout` exists but undiscoverable (#7404).

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| **[#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)** Configurable MCP tool-call timeout | 2026-08-10 (20 days) | Closes #6724; default 300 s matches SSE budget; **under review** but no movement. |
| **[#7220](https://github.com/agentscope-ai/QwenPaw/pull/7220)** Reject oversized image dimensions | 2026-08-23 (7 days) | Fixes freeze on valid-but-huge images; **first-time contributor** — good signal to merge fast. |
| **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** Hub roadmap definition | 2026-08-26 (4 days) | **Blocker for 2.2.0 scope**; maintainers must synthesize 14 comments into spec. |
| **[#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301)** MCP credential regression | 2026-08-26 (4 days) | **Critical severity**, no PR — assign or triage immediately. |
| **[#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401)** Windows ACP bootstrap stall | 2026-08-29 (1 day) | Affects Windows developers; event-loop fix is straightforward. |
| **[#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402)** Empty `output_text` breaks Ark | 2026-08-29 (1 day) | Provider-specific but high-impact; needs validation guard in session persistence. |

---

**Bottom line:** CoPaw is **community-vibrant but review-bound**. The critical path to v2.2.0 is:  
1. **Triage & fix the two session-breaking bugs** (#7301, #7402).  
2. **Merge the three UX PRs** (#7356, #7357, #7220) — all small, tested, and user-visible.  
3. **Decide Hub MVP scope** from #7318 discussion.  
4. **Unblock #6874** (timeout config) to close a long-standing MCP gap.  

Maintainers clearing even 2–3 of these this week would shift the project from “treading water” to “shipping 2.2.0 on schedule.”

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-30

## 1. Today's Overview

ZeroClaw shows **high architectural churn** with 50 PRs and 16 issues updated in 24 hours. The project is mid-stream on several **foundational refactors**: inverting the `channels ↔ runtime` dependency (#6864), centralizing webhook dispatch (#8586), and separating authoritative memory storage from enrichment connectors (#9103 RFC). Security hardening is a parallel theme—credential scrubbing, temp file permissions, and sensitive header marking. No release cut today; the volume of open, large PRs (multiple XL/L) suggests a stabilization window before next version.

## 2. Releases

**No new releases today.** The project appears to be in a pre-release consolidation phase with multiple in-flight architectural PRs.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Impact |
|----|-------|--------|
| [#10184](https://github.com/zeroclaw-labs/zeroclaw/pull/10184) | fix(zerocode): restore terminal after external SIGINT | Fixes P1 terminal corruption on SIGTERM/SIGINT (#9800) |
| [#10433](https://github.com/zeroclaw-labs/zeroclaw/pull/10433) | fix(channels): mark ElevenLabs TTS API key sensitive | Closes #10432; prevents API key leakage in logs |
| [#10029](https://github.com/zeroclaw-labs/zeroclaw/pull/10029) | fix(channels): preserve configured alias on inbound webhook messages | Closes #9662; enables multiple webhook instances |
| [#10440](https://github.com/zeroclaw-labs/zeroclaw/pull/10440) | fix(zerocode): recover split SGR wheel input | Partial fix for #10437 (mouse-wheel composer pollution) |
| [#10444](https://github.com/zeroclaw-labs/zeroclaw/pull/10444) | fix(zerocode): decode split SGR mouse events | Completes #10437 fix; reassembles fragmented escape sequences |
| [#9995](https://github.com/zeroclaw-labs/zeroclaw/pull/9995) | fix(hooks): harden webhook audit exports | Scrubs credentials/tokens from audit logs before size-limiting |

**Net**: 6 PRs merged—mostly security/UX polish on ZeroCode TUI and channel webhook routing.

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [#9103 RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) | 15 comments, **high risk**, needs maintainer review | **Architectural boundary**: split authoritative memory storage from optional enrichment connectors; post-Core REVISE vote revision |
| [#8692 Tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 14 comments, accepted | **Governance**: maintainer decision queue for RFCs/design issues—central coordination point |
| [#10016 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/10016) | Stacked, **blocked**, XL, high risk | **Audit correlation**: opaque per-invocation context for webhook audit calls; security-critical |
| [#6864](https://github.com/zeroclaw-labs/zeroclaw/issues/6864) | 4 comments, **in progress**, high risk | **Layer inversion**: move orchestrator into `zeroclaw-runtime`; fixes crate graph inversion |
| [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) | 4 comments, **high risk** | **Streaming UX**: SSE token streaming from `POST /webhook` for hosted Path A workers |

**Pattern**: Contributors and maintainers are aligning on **architecture boundaries** (memory, runtime, channels) and **security defaults** before feature work.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P1 / S0** | [#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947): Cron tools not scoped to owning agent — cross-agent job access | **Closed** | Implied fixed (no linked PR shown) |
| **P1** | [#10409](https://github.com/zeroclaw-labs/zeroclaw/issues/10409): Temp files created 0o644 — leaks voice/images on shared systems | **Open** | None yet |
| **P1** | [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063): Anthropic-compatible gateways reject `image_url` in tool results | **In progress** | None linked |
| **P1** | [#9800](https://github.com/zeroclaw-labs/zeroclaw/issues/9800): SIGTERM leaves terminal raw/mouse-tracking enabled | **Closed** | [#10184](https://github.com/zeroclaw-labs/zeroclaw/pull/10184) ✅ |
| **P2 / High** | [#10436](https://github.com/zeroclaw-labs/zeroclaw/issues/10436): OpenRouter streaming cut off by total request timeout | **Open** | None yet |
| **P2** | [#10456](https://github.com/zeroclaw-labs/zeroclaw/issues/10456): MCP SSE reader accepts suffix after oversized event | **Open** (filed today) | None yet |
| **P2** | [#9681](https://github.com/zeroclaw-labs/zeroclaw/issues/9681): ZeroCode drops clipboard-temp cleanup ownership on deletion failure | **Open** | None yet |
| **P2** | [#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432): ElevenLabs TTS API key header not marked sensitive | **Closed** | [#10433](https://github.com/zeroclaw-labs/zeroclaw/pull/10433) ✅ |

**Trend**: Security-hardening bugs (credentials, temp files, scoping) dominate P1/P2; fixes landing same-day for several.

## 6. Feature Requests & Roadmap Signals

| Signal | Likelihood for Next Version | Rationale |
|--------|----------------------------|-----------|
| **SSE streaming from `/webhook`** ([#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419)) | High | Explicit hosted-worker need; high-risk label suggests active design |
| **AnySearch web search provider** ([#10356](https://github.com/zeroclaw-labs/zeroclaw/pull/10356)) | Medium | PR open, needs author action; expands tool ecosystem |
| **Execution-tree iteration budgets** ([#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351)) | High | Distinguished contributor, XL scope, runtime core—likely merge target |
| **Hailo-Ollama native provider** ([#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)) | Low | Marked `do-not-merge`, needs author action; niche hardware |
| **Memory storage/enrichment split** ([#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)) | Medium-term | RFC stage, post-vote revision; architectural, not patch |

**Prediction**: Next version will ship **iteration budgets**, **webhook SSE streaming**, and **AnySearch**; memory RFC will drive a follow-on minor.

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Terminal corruption on exit** | #9800, #10437, #10440 — raw SGR sequences dumped to shell | 3 issues/PRs in 24h |
| **Webhook alias collision** | #9662, #10029 — multiple webhooks collapse to bare `webhook` route | 2 issues, 1 fix merged |
| **Streaming timeouts on long responses** | #10436 — OpenRouter cuts off active streams | 1 issue, high visibility |
| **Credential leakage in logs/audit** | #10432, #9995, #10016 — API keys, tokens in headers/exports | 3 security issues/PRs |
| **Cross-agent cron access** | #9947 — S0 severity, any agent can delete another's jobs | 1 critical, now closed |

**Satisfaction**: Contributors actively fixing UX papercuts (ZeroCode TUI, webhook routing) and security defaults; frustration visible on streaming reliability and terminal hygiene.

## 8. Backlog Watch — Stale/Blocked High-Value Items

| Item | Age | Blocked By | Why It Matters |
|------|-----|------------|----------------|
| [#10016](https://github.com/zeroclaw-labs/zeroclaw/pull/10016) `fix(hooks): correlate webhook audit calls by identity` | 15 days | **Blocked** label, stacked, XL | Security audit trail integrity; per-invocation context |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) `feat(providers): add native Hailo-Ollama support` | 44 days | `do-not-merge`, needs author action | Hardware provider; stuck in limbo |
| [#10370](https://github.com/zeroclaw-labs/zeroclaw/pull/10370) `fix(providers): harden Copilot credential cache` | 5 days | `do-not-merge`, high risk | Removes predictable fallback; supply-chain hardening |
| [#10094](https://github.com/zeroclaw-labs/zeroclaw/pull/10094) `ci(memory): require PostgreSQL backend tests` | 12 days | Needs maintainer review, high risk | CI gate for memory backend; prevents regressions |
| [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) RFC: memory storage/enrichment split | 45 days | Needs maintainer review, high risk | Core architecture decision; post-vote revision active |

**Action needed**: Maintainer unblock on #10016 (audit correlation) and #10094 (PG CI gate); RFC #9103 decision will gate memory PRs.

---

**Project Health**: 🟡 **Active / Architectural Transition** — High velocity on security/UX fixes, but multiple XL architectural PRs open and blocked. Next release hinges on landing runtime iteration budgets, webhook SSE, and resolving the memory RFC.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*