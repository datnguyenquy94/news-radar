# OpenClaw Ecosystem Digest 2026-09-28

> Issues: 183 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-28 05:00 UTC

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

# OpenClaw Project Digest — 2026-09-28

---

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 183 issues and 500 PRs updated in the last 24 hours — a signal of active maintenance and rapid iteration. The 130 merged/closed PRs against 370 still open indicates a healthy throughput, though the open PR backlog is substantial. No new releases were cut today, but multiple P0/P1 bugs targeting release-blocker status are actively being triaged and fixed. The project is in a **stabilization phase** ahead of a likely 2026.9.7 release, with heavy focus on Windows gateway reliability, SQLite/WAL management, session-state integrity, and provider/model discovery regressions introduced in recent 2026.9.x builds.

---

## 2. Releases

**No new releases today.** The latest stable appears to be **2026.9.6 (eb377ac)** with a prepared **2026.9.7** in progress. Several issues (#159927, #159926, #159514, #156571) describe regressions in 2026.9.5/9.6 that are blocking upgrades — credential-store migration, `doctor --fix` failures, catalog worker memory leaks, and tmp disk exhaustion. These are likely holding the 2026.9.7 release.

---

## 3. Project Progress — Merged/Closed PRs Today (130)

Key merged/closed work (sample from top activity):

| PR | Area | Summary |
|----|------|---------|
| [#159835](https://github.com/openclaw/openclaw/pull/159835) | agents/state | **Fix migration lease loss after database relocation** — prevents retired DB paths being recreated when shared worker reused (P2, 🦞 diamond lobster) |
| [#158307](https://github.com/openclaw/openclaw/pull/158307) | agentsapi | **Configure hosted vs self-hosted environments** — adds executor choice to Agents API plugin (P2, 🐚 platinum hermit) |
| [#153573](https://github.com/openclaw/openclaw/pull/153573) | heartbeat | **Prevent event failures mislabeled as heartbeat failures** — improves diagnostics for exec/cron/background task failures (P2, 🦪 silver shellfish) |
| [#124133](https://github.com/openclaw/openclaw/issues/124133) | channels | **Beta blocker fixed**: `openclaw-snowluma` channel plugin `formatInboundEnvelope` regression in 2026.8.1-beta.2 |
| [#110065](https://github.com/openclaw/openclaw/issues/110065) | config | **Compaction.enabled schema mismatch fixed** — code read field but schema rejected it |
| [#103162](https://github.com/openclaw/openclaw/issues/103162) | docs/telegram | **Documented config key `streaming.preview.toolProgress` now accepted by schema** |
| [#88812](https://github.com/openclaw/openclaw/issues/88812) | gateway/perf | **Measured pre-model latency** — 5.0s e2e vs 2.8s provider call; identified dispatch/harness/context prep overhead |

**Theme**: Session-state durability, channel plugin compatibility, config schema alignment, and latency measurement.

---

## 4. Community Hot Topics — Most Active Issues/PRs

### Top 5 Issues by Comment Count

| Issue | Comments | Labels | Core Problem |
|-------|----------|--------|--------------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 78 | **P0, crash-loop, ux-release-blocker, Windows** | Agent SQLite WAL grows unbounded (1.4–2.8 GB) despite `wal_autocheckpoint=1000`; blocks gateway startup on Windows |
| [#58450](https://github.com/openclaw/openclaw/issues/58450) | 17 | P2, stale, message-loss | Agent promises follow-up ("I'll check...") but starts no background action — UX trust issue |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 16 | P1, crash-loop, message-loss | **Zombie process leak** from hook/tool children (`openclaw-hooks`, `bash`, `codex`) accumulates, degrades runtime |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 14 | P0, ux-release-blocker, message-loss | Stuck agent-DB resource causes **all agents' replies to fail** with generic error until gateway restart |
| [#140129](https://github.com/openclaw/openclaw/issues/140129) | 14 | P2, auth-provider | Anthropic cache stuck at ~46k tokens (tools+system prefix) on long sessions; rewrites full history every turn |

### Top PRs by Activity (all opened today)

| PR | Area | Risk/Status |
|----|------|-------------|
| [#160118](https://github.com/openclaw/openclaw/pull/160118) | release/tooling | Fix Tideclaw alpha npm publish after protected environment cutover |
| [#160119](https://github.com/openclaw/openclaw/pull/160119) | gateway/restart | **P0**: Fix gateway restart loop after startup-failure triage in containers |
| [#159431](https://github.com/openclaw/openclaw/pull/159431) | update/Bun | Fix `openclaw update`/`repair` on Bun-only installs (no Node) |
| [#160125](https://github.com/openclaw/openclaw/pull/160125) | test/gateway | Fix flaky placement-fence test in CI |
| [#159999](https://github.com/openclaw/openclaw/pull/159999) | gateway/refactor | **XL**: Deslop gateway core files — consolidate duplicated logic |

**Underlying needs**: Windows reliability (WAL, locks, standby), session durability across restarts, provider/model discovery robustness, and CI/test stability for release velocity.

---

## 5. Bugs & Stability — Ranked by Severity

### 🔴 P0 / Release Blockers (Crash-loop, Data Loss, UX Blockers)

| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | **P0, crash-loop, ux-release-blocker** | ❌ | SQLite WAL unbounded growth (2.8 GB) on Windows; blocks gateway startup |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | **P0, ux-release-blocker, message-loss** | ❌ | Stuck agent-DB resource fails **all agents** until gateway restart |
| [#156571](https://github.com/openclaw/openclaw/issues/156571) | **P0, crash-loop, ux-release-blocker** | ❌ | Model-catalog worker leaks `openclaw-plugin-build-*` in tmp (1–3 GB/min, fills disk) |
| [#158126](https://github.com/openclaw/openclaw/issues/158126) | **P0, crash-loop, ux-release-blocker** | ❌ | Gateway shutdown fails: "Worker environment inventory has closed" → exit 1, unit left failed |
| [#160060](https://github.com/openclaw/openclaw/issues/160060) | **P0, crash-loop, ux-release-blocker, Windows** | ❌ | Gateway silently dies ~54 min post-standby thaw; no exit log, no WER dump, supervisor inert |
| [#159927](https://github.com/openclaw/openclaw/issues/159927) | **P0, ux-release-blocker, auth-provider** | ❌ | 2026.9.6 requires credential-store migration but only `doctor --fix` applies it, no fallback |
| [#159926](https://github.com/openclaw/openclaw/issues/159926) | **P0, ux-release-blocker, auth-provider** | ❌ | `doctor --fix` refuses maintenance mode on canonical env/paths (2026.9.6 regression) |
| [#159514](https://github.com/openclaw/openclaw/issues/159514) | **P0, crash-loop** | ✅ **Closed** (was fixed in #157842?) | Catalog worker rebuilds discovery registry every request → 8 MB unreleasable modules/request |
| [#160119](https://github.com/openclaw/openclaw/pull/160119) | **P0, gateway restart** | 🟡 **Open PR** | Container gateway restart loops forever after startup-failure triage |

### 🟠 P1 / High Impact

| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1, crash-loop, message-loss | ❌ | Zombie process leak from hook/tool children |
| [#155359](https://github.com/openclaw/openclaw/issues/155359) | P1, Windows | ❌ | 9 SQLite write-transaction holds (5.9–33s) past `busy_timeout=5000ms` on awake Windows |
| [#159931](https://github.com/openclaw/openclaw/pull/159931) | P1, session-state | 🟡 **Open PR** | Claude CLI turns stall 15 min on stream output limit, then abort as "CLI run aborted" |
| [#123596](https://github.com/openclaw/openclaw/issues/123596) | P1, message-loss | ❌ | Slow `openclaw_agent_consult` reply arrives after Realtime turn errored — voice hears "no reply" |
| [#113149](https://github.com/openclaw/openclaw/issues/113149) | P1, message-loss | ❌ | CLI-backend empty_response fallback kills unrelated background Agent-tool sessions |

### 🟡 P2 / Stability & UX

| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#140129](https://github.com/openclaw/openclaw/issues/140129) | P2, auth-provider | ❌ | Anthropic cache stuck at ~46k on long sessions; rewrites history every turn |
| [#158922](https://github.com/openclaw/openclaw/issues/158922) | P2, auth-provider | ❌ | `claude-cli/*` models report `available: false` after gateway restart (regression post #157459) |
| [#148697](https://github.com/openclaw/openclaw/issues/148697) | P2, regression | ✅ **Closed** | History prompt-cache rewritten every call during tool loop (4–8× cost) |
| [#154417](https://github.com/openclaw/openclaw/pull/154417) | P2, availability | 🟡 **Open PR** | Spurious "couldn't confirm previous reply" notice when message arrives mid-send |
| [#156897](https://github.com/openclaw/openclaw/pull/156897) | P2, auth-provider | 🟡 **Open PR** | `before_model_resolve` hook never fires for CLI-backed models |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|----------------------------|
| [#45508](https://github.com/openclaw/openclaw/issues/45508) | P2 | **Self-hosted STT/TTS in webchat** — route via gateway instead of browser Speech API | Medium (8 👍, clear architecture ask) |
| [#58398](https://github.com/openclaw/openclaw/issues/58398) | P2 | **Adopt Claude Code's multi-layer compaction** — now that source is public | Medium (structural, needs design) |
| [#129814](https://github.com/openclaw/openclaw/issues/129814) | P2 | **Expire "Always allow" exec approvals** — generalize 30-min TTL to persisted allowlist | High (security hardening, low complexity) |
| [#105494](https://github.com/openclaw/openclaw/issues/105494) | P3 | **Interactive "memory therapy" session** — resolve open questions/contradictions with user | Low (new UX loop, not urgent) |
| [#42276](https://github.com/openclaw/openclaw/issues/42276) | P3 | **Reasoning stream** — overwrite lines like OpenAI/Grok to show thinking | Medium (UX polish, 6 👍) |
| [#39923](https://github.com/openclaw/openclaw/issues/39923) | P3 | **Datetime suffix for config backups** instead of numeric rotation | High (simple, 1 👍, low risk) |
| [#119254](https://github.com/openclaw/openclaw/issues/119254) | P2 | **WhatsApp `poll_vote_received` plugin hook** | Medium (narrow, follows #48570) |
| [#159363](https://github.com/openclaw/openclaw/pull/159363) | P2 | **AgentsAPI: discover self-hosted skills** — stacked on #158307 | High (PR open, part of Agents API work) |
| [#159896](https://github.com/openclaw/openclaw/pull/159896) | P2 | **GitHub: bind native commands to run-scoped App credentials** | Medium (security boundary, needs proof) |

**Prediction**: Next version (2026.9.7) will ship P0 fixes + SQLite/WAL hardening + credential migration fallback + catalog worker leak fix. Self-hosted STT/TTS and exec-approval TTL are strong candidates for 2026.10.

---

## 7. User Feedback Summary — Real Pain Points

| Theme | Representative Issues | User Sentiment |
|-------|----------------------|----------------|
| **Windows gateway unreliability** | [#143524](https://github.com/openclaw/openclaw/issues/143524), [#160060](https://github.com/openclaw/openclaw/issues/160060), [#160061](https://github.com/openclaw/openclaw/issues/160061), [#155359](https://github.com/openclaw/openclaw/issues/155359) | 😡 **High frustration** — WAL growth, silent crashes post-standby, stale lock files blocking restart, SQLite holds past timeout. Users on Windows Server/scheduled tasks feel abandoned. |
| **Session amnesia / context loss** | [#98156](https://github.com/openclaw/openclaw/issues/98156), [#114640](https://github.com/openclaw/openclaw/issues/114640), [#123596](https://github.com/openclaw/openclaw/issues/123596), [#95750](https://github.com/openclaw/openclaw/issues/95750) | 😰 **Trust erosion** — Abort settle timeout causes full context loss; LLM idle timeout wipes runtime context; Realtime voice hears "no reply" while text has answer; no cross-boot retry budget. |
| **Provider/model discovery broken** | [#140359

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-28)

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape shows **bimodal maturity**: a cluster of large, high-velocity platforms (OpenClaw, ZeroClaw, Hermes Agent, NanoBot, NanoClaw, NullClaw, CoPaw) iterating daily on stability, security, and provider parity, and a second tier of smaller or specialized projects (PicoClaw, IronClaw, Moltis, LobsterAI) in maintenance or niche-focused cycles. **Zero projects released today**, indicating a coordinated stabilization phase ahead of version bumps. Critical themes across the ecosystem: **Windows reliability**, **session/state durability**, **provider/model discovery robustness**, **security boundary hardening**, and **container/runtime lifecycle hygiene**. Community engagement is implementer-driven—detailed bug reports with repro steps and contributor-supplied fix PRs are common, signaling invested user bases rather than casual adoption.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | Merged/Closed PRs | Latest Release | Health Score* |
|---------|---------------------|-------------------|-------------------|----------------|---------------|
| **OpenClaw** | 183 | 500 | 130 | 2026.9.6 (2026.9.7 in progress) | 🟢 **High** — massive throughput, P0 triage active |
| **ZeroClaw** | 14 | 50 | ~15 | v0.8.5 (v0.9.0 stabilizing) | 🟢 **High** — intense security/release hardening |
| **Hermes Agent** | 6 | 50 | 5 | None recent | 🟢 **High** — architectural PRs advancing |
| **NanoBot** | 4 | 20 | 7 | v0.3.5 (v0.3.6 imminent) | 🟢 **High** — provider/runtime fixes landing |
| **NanoClaw** | 1 | 38 | 9 | None recent | 🟢 **High** — stabilization wave, same-day issue→PR |
| **NullClaw** | 18 | 8 | 8 | None recent | 🟢 **High** — feature-complete, pre-release hardening |
| **CoPaw** | 8 | 7 | 4 | None recent | 🟢 **Good** — UX features + critical fix merged |
| **IronClaw** | 2 | 6 | 1 | None recent | 🟡 **Stable** — dependency maintenance only |
| **Moltis** | 1 | 3 | 0 | None recent | 🟡 **Stable** — incremental provider/bug fixes |
| **PicoClaw** | 4 | 2 | 0 | v0.3.1 | 🟡 **Low velocity** — maintainer bandwidth constrained |
| **LobsterAI** | 5 (mostly stale) | 7 (mostly stale) | 0 (1 new PR) | None recent | 🟡 **Stalled features** — security response good, backlog aged |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚪ **Inactive** |

*Health Score: 🟢 High velocity + active triage + fix PRs for critical bugs; 🟡 Stable/maintenance but limited feature flow or reviewer bandwidth; ⚪ No activity.

---

## 3. OpenClaw's Position

**Advantages vs Peers**
- **Scale of operation**: 500 PRs/24h dwarfs all others (next: ZeroClaw 50, Hermes 50). Indicates large contributor pool and mature CI/CD.
- **Windows gateway investment**: Dedicated P0 triage for WAL growth, standby crashes, lock reclamation—areas where peers (NanoClaw, CoPaw) report similar pain but with fewer resources.
- **Session-state architecture**: Explicit focus on migration lease loss, stuck DB resources, cross-boot retry budgets—systemic durability work others address piecemeal.
- **Provider/model discovery depth**: Catalog worker memory leaks, credential-store migration, CLI-backed model regressions show mature multi-provider abstraction.

**Technical Approach Differences**
- **Monolithic gateway + agent worker model** with SQLite/WAL per agent—contrasts with NanoClaw's container-per-session + Iron proxy, ZeroClaw's WASM plugin runtime, Hermes' unified gateway session ownership.
- **Release-blocker taxonomy** (P0/P1/P2 with `ux-release-blocker`, `crash-loop` labels) more formalized than peers' ad-hoc severity.
- **Telemetry-driven latency measurement** (pre-model dispatch overhead quantified at 5.0s e2e vs 2.8s provider)—rare quantitative observability.

**Community Size Comparison**
- **Largest active issue/PR volume** by 5–10×. Top issues have 14–78 comments (vs 0–8 elsewhere). Contributor-supplied fix PRs for P0s (e.g., #160119) indicate deep external engagement. Only ZeroClaw and Hermes approach similar discussion depth on architectural items.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Windows gateway/agent reliability** | OpenClaw (#143524, #160060, #155359), NanoClaw (#3951), CoPaw (#8000, #8002), LobsterAI (#2771) | SQLite WAL unbounded growth, silent standby crashes, rootful Docker mount ownership, single-instance guard, COM sandbox escape |
| **Session/state durability across restarts** | OpenClaw (#157325, #159927), ZeroClaw (#11197, #11126), Hermes (#125998), NanoClaw (#3883, #3947), CoPaw (#7965) | Credential-store migration fallback, admin revocation survival, checkpoint bloat, Iron Control DB orphan, media context reclamation |
| **Provider/model discovery & frontier model parity** | OpenClaw (#158922, #159514), NanoBot (#5898, #5939), Moltis (#1286), NullClaw (#1013), IronClaw (#8115), ZeroClaw (#9816) | GPT-6/Tsubasa/DeepSeek-Flash immediate support, catalog worker leaks, reasoning-toggle detection, cost tracking ($0.00 bugs) |
| **Security boundary hardening** | ZeroClaw (#11136, #11197, #11126), NullClaw (#974/#1012), Hermes (#125955), NanoClaw (#3920), LobsterAI (#1041/#1042) | A2A bearer scoping, session resume revocation bypass, LSP untrusted workspace execution, failure-assist agent permissions, SSRF/file-read |
| **Container/runtime lifecycle hygiene** | NanoClaw (#3878, #3913, #3947, #3948), ZeroClaw (#9846), Hermes (#125999), CoPaw (#8000) | Ping agent leaks, update controller broken, host sweep misses, Unix socket ownership, double-launch backend kill |
| **Cost/latency control for scheduled/background tasks** | OpenClaw (#140129), NanoClaw (#3931, #3932), Hermes (#4525), CoPaw (#4525) | Anthropic cache rewrite, `minimalContext` provider option, agent auto-checkpoint/reset, lean task runs |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | NanoBot | NanoClaw | NullClaw | CoPaw | Others |
|-----------|----------|----------|--------------|---------|----------|----------|-------|--------|
| **Core Architecture** | Monolithic gateway + per-agent SQLite workers | WASM plugin runtime (channels/tools), RPC/gateway parity | Unified gateway session ownership (CLI/TUI/Desktop/ACP/cron) | Electron desktop + React WebUI, Responses API focus | Container-per-session + Iron TLS proxy | Modular channels/providers, adaptive intelligence pipeline | Console-centric (settings, multi-tab terminal), Scroll context | IronClaw: WASM toolchain; Moltis: provider registry; PicoClaw: channel plugins |
| **Target User** | Power users, self-hosters, Windows-heavy | Operators needing extensibility without recompile | Multi-surface developers (CLI↔Desktop↔Web) | Desktop/WebUI users, Codex/Copilot subscribers | Self-hosted operators, private model hosting | Enterprise/self-hosted, multi-tenant, channel parity | Developers wanting integrated terminal + chat | LobsterAI: Electron desktop; Moltis: web-first |
| **Feature Focus** | Stability, Windows, session durability, provider breadth | Security, plugin architecture, release process, cost observability | Session continuity, Windows parity, cron reliability, LSP security | Provider compatibility (Responses API, Codex), WebUI polish, cron durability | Linux container hygiene, Iron proxy TLS, lean tasks, update resilience | Channel breadth (Email/WhatsApp/DingTalk/Matrix/Teams), tool customization | UX unification, media context reclamation, embedded terminal | IronClaw: dependency hygiene; Moltis: provider detection; PicoClaw: OneBot/DingTalk |
| **Release Cadence** | Date-based (2026.9.x), P0-blocked | Milestone-based (v0.9.0 core-parity) | Not evident from data | Patch-heavy (v0.3.5→v0.3.6) | Accumulating fixes for patch/minor | Feature-complete, pre-release hardening | Feature bundles for v2.2.x/v2.3.0 | LobsterAI: no visible cadence; Moltis: incremental |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapidly Iterating (High Velocity + Structural Work)** | OpenClaw, ZeroClaw, Hermes Agent, NanoBot, NanoClaw, NullClaw, CoPaw | Daily PR merges, architectural PRs open >2 weeks (#106742 Hermes, #8850 ZeroClaw), P0 triage with fix PRs same-day, contributor-supplied fixes common |
| **Stabilizing / Maintenance-Focused** | IronClaw, Moltis, PicoClaw | Dependency updates dominate, few feature PRs, bug fixes small-scope, maintainer bandwidth visible constraint |
| **Feature-Stalled / Backlog-Heavy** | LobsterAI | Security response strong (P0s patched same cycle), but 6-month-old PRs (#978 chat folders) and issues (#976, #977) untriaged; only 1 net-new PR today |
| **Inactive** | ZeptoClaw | Zero activity in 24h window |

**Key differentiator**: Top-tier projects show **fix PRs opened within hours of critical issues** (OpenClaw #160119, NanoClaw #3952, ZeroClaw #11203, CoPaw #7965). Mid-tier projects have fix PRs but slower merge (PicoClaw #3353 open 28 days, IronClaw #7834 open 36 days).

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|--------------------------|-----------------|
| **Frontier model support lag is a top user pain** | NanoBot (GPT-6 via Copilot), Moltis (DeepSeek-Flash), NullClaw/IronClaw (Tsubasa), OpenClaw (catalog worker leaks) | **Provider abstraction layers must update within days, not weeks.** Projects with automated model discovery (OpenClaw catalog, NanoBot Codex client_version) recover faster. |
| **Windows is a first-class platform again** | OpenClaw (5+ P0 Windows issues), NanoClaw (Linux mount fix but Windows implied), CoPaw (2 new Windows desktop bugs today), LobsterAI (lock reclamation) | **Invest in Windows CI, SQLite/WAL tuning, standby/resume, single-instance guards.** Ignoring Windows loses power-user segment. |
| **Session durability > raw model performance** | OpenClaw (stuck DB kills all agents), ZeroClaw (admin revocation bypass on resume), Hermes (scratch lanes), NanoClaw (Iron DB orphan), CoPaw (media context OOM) | **Users tolerate slower models; they abandon agents that lose context, leak state, or require gateway restarts.** Checkpointing, migration fallbacks, and cross-boot retry budgets are table stakes. |
| **Security boundaries must survive resume/requeue** | ZeroClaw (3 S0 bugs in 48h), NullClaw (A2A bearer scoping), Hermes (LSP workspace trust), NanoClaw (failure-assist permissions) | **Multi-tenant and shared deployments are growing.** Token scoping, ownership rechecks under lock, and sandbox persistence are now release-blockers. |
| **Container/runtime hygiene enables operator trust** | NanoClaw (7 lifecycle fixes in 24h), ZeroClaw (Unix socket lock), Hermes (cron site-packages), CoPaw (double-launch kill) | **Self-hosted operators judge projects by upgrade/update reliability.** Broken updates (NanoClaw #3913, #3948) create upgrade fear. |
| **Cost observability is becoming mandatory** | ZeroClaw (Anthropic/OpenRouter $0.00), OpenClaw (Anthropic cache rewrite 4–8× cost), NanoClaw/Hermes/CoPaw (lean task context control) | **Token/cost tracking per provider, per session, per tool call is expected.** Budget caps that don't fire are P1 bugs. |
| **Unified session ownership across surfaces** | Hermes (#106742 architectural PR), OpenClaw (Agents API executor choice), CoPaw (multi-tab terminal per conversation) | **Users want CLI ↔ Desktop ↔ Web ↔ API continuity.** Projects investing in single-gateway session models (Hermes) or conversation-scoped workspaces (CoPaw) lead UX. |

---

**Bottom Line for Decision-Makers**: The ecosystem is **consolidating around reliability, security, and operator experience** rather than raw model capabilities. Projects that solve **Windows stability, session durability, provider parity latency, and security boundary persistence** will capture the self-hosted/operator segment. **OpenClaw and ZeroClaw set the pace** for velocity and systemic fixes; **Hermes and NanoClaw** demonstrate architectural differentiation (unified gateway, container+proxy); **NanoBot and CoPaw** excel at desktop/WebUX polish. **Invest in cross-project standards for provider model metadata, session migration formats, and security token scoping**—these are the next interoperability frontiers.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-28

## 1. Today's Overview
NanoBot shows **high development velocity** with 20 PRs updated in the last 24 hours (7 merged/closed, 13 open) and 4 active issues. The project is actively addressing **provider compatibility** (GPT-6 support via GitHub Copilot/Codex), **runtime stability** (sudo loop, cron action loss, Responses API stream handling), and **WebUI/UX polish** (session persistence, PWA support, history pagination). No new release was cut today, but multiple P1/P0 fixes suggest a patch release is imminent.

## 2. Releases
**No new releases today.** The latest version remains **v0.3.5** (per issue #5898). Given the volume of merged fixes (7 PRs closed today, several P1), a **v0.3.6** patch release is likely within days.

## 3. Project Progress — Merged/Closed PRs Today (7)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5940](https://github.com/HKUDS/nanobot/pull/5940) | **bug, provider, fix, test, p2** | **Exposes GPT-6 Sol & Luna in Codex model discovery** by bumping `client_version` from `0.153.4` → `0.158.0` | Unblocks users on latest Codex models |
| [#5937](https://github.com/HKUDS/nanobot/pull/5937) | **bug, provider, fix, test, p1** | **Stops Responses streams at terminal events** (`response.completed`/`incomplete`) instead of waiting for EOF | Fixes hangs & resource leaks in OpenAI-compatible & Azure providers |
| [#5938](https://github.com/HKUDS/nanobot/pull/5938) | **bug, provider, regression, fix, test, p1** | **Preserves optional tool parameters (`strict`) in Responses requests** | Prevents MCP filters from becoming required incorrectly |
| [#5936](https://github.com/HKUDS/nanobot/pull/5936) | **channel, fix, test, p2** | **Silences WeChat polling request logs** (every ~18s) | Reduces log noise (#5900) |
| [#5934](https://github.com/HKUDS/nanobot/pull/5934) | **bug, enhancement, regression, webui, fix, test, p2** | **Unblocks earlier-history pagination** + adds retry/loading states | Improves WebUX for long conversations |
| [#5865](https://github.com/HKUDS/nanobot/pull/5865) | **bug, webui, fix, test, p2** | **Preserves primary context window** (256K) when smaller fallback (200K) configured | Fixes regression where fallback shrank primary budget |
| [#5944](https://github.com/HKUDS/nanobot/pull/5944) | **feat, webui** | **Polishes GitHub star invitation** (illustration, copy, animation) | Minor UX delight |

**Key advancement:** Provider layer stability (Responses API, Codex, Copilot) + WebUI session/history reliability.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) **GPT-6 via GitHub Copilot** | 1 comment, opened 2026-09-24 | **Model parity** — users expect immediate support for new OpenAI model series (GPT-6) through their existing Copilot subscription |
| [#5924](https://github.com/HKUDS/nanobot/issues/5924) **Sudo loop — agent unusable** | 1 comment, opened 2026-09-26 | **Reliability** — sudo auth expires mid-task, causing infinite retry loops; blocks autonomous workflows |
| [#5935](https://github.com/HKUDS/nanobot/pull/5935) **Route GPT-6 through Responses API** | Open PR, linked to #5898 | Direct fix for #5898; shows maintainer responsiveness |
| [#5933](https://github.com/HKUDS/nanobot/pull/5933) **Cron: preserve pending actions until store save succeeds** | Open PR, P0, linked to #5932 | **Data durability** — prevents loss of scheduled actions on disk-full/ENOSPC |

**Signal:** Users are adopting **frontier models (GPT-6)** faster than provider abstractions update; **agent autonomy** (sudo, cron) is a friction point for production use.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P0 (Critical)** | [#5932](https://github.com/HKUDS/nanobot/issues/5932) Cron: pending actions lost if merged store save fails (ENOSPC) | Open | [#5933](https://github.com/HKUDS/nanobot/pull/5933) (open, P0) |
| **P1 (High)** | [#5898](https://github.com/HKUDS/nanobot/issues/5898) GPT-6 models fail via GitHub Copilot (Chat Completions path) | Open | [#5935](https://github.com/HKUDS/nanobot/pull/5935) (open) |
| **P1 (High)** | [#5924](https://github.com/HKUDS/nanobot/issues/5924) Sudo auth expires mid-turn → agent stuck in loop | Open | *No PR yet* |
| **P1 (Fixed)** | Responses streams not stopping at terminal events → hangs/leaks | **Closed** | [#5937](https://github.com/HKUDS/nanobot/pull/5937) ✅ |
| **P1 (Fixed)** | Optional tool params (`strict`) dropped in Responses → MCP filters become required | **Closed** | [#5938](https://github.com/HKUDS/nanobot/pull/5938) ✅ |
| **P2** | [#5939](https://github.com/HKUDS/nanobot/issues/5939) Codex model picker omits GPT-6 Sol/Luna (pinned client_version) | **Closed** | [#5940](https://github.com/HKUDS/nanobot/pull/5940) ✅ |
| **P2** | WeChat polling logs every 18s at INFO level | **Closed** | [#5936](https://github.com/HKUDS/nanobot/pull/5936) ✅ |

**Watch:** #5924 (sudo loop) has no fix PR yet — likely needs runtime-level retry/backoff logic.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Native ripgrep (`rg`) for file search** | [#5948](https://github.com/HKUDS/nanobot/pull/5948) (open, p2) | High — performance win, drop-in replacement for `grep`/`find_files` |
| **Unbrowse reader backend for `web_fetch`** | [#5945](https://github.com/HKUDS/nanobot/pull/5945) (open, p2) | Medium — optional, behind API key |
| **Tsubasa provider (tsubasa-fast/pro)** | [#5947](https://github.com/HKUDS/nanobot/pull/5947) (open) | High — small addition, follows existing OpenAI-compat pattern |
| **Connect local WebUI to remote NanoBot instance** | [#5941](https://github.com/HKUDS/nanobot/pull/5941) (open, NAN-157) | High — enables server-side agent management |
| **Persist completed tool results per execution batch** | [#5946](https://github.com/HKUDS/nanobot/pull/5946) (open, p2) | High — improves crash recovery for multi-tool turns |
| **Warm fallback tokenizer in background** | [#5861](https://github.com/HKUDS/nanobot/pull/5861) (open, p1, conflict) | Medium — startup perf, but has conflicts |
| **Centralize session state in SQLite (off event loop)** | [#5943](https://github.com/HKUDS/nanobot/pull/5943) (open, p1) | High — architectural, fixes #5580 (blocking I/O) |
| **iOS PWA top-edge color surface** | [#5942](https://github.com/HKUDS/nanobot/pull/5942) (open, draft) | Low — needs device testing |

**Roadmap themes:** **Provider breadth** (Tsubasa, GPT-6, Unbrowse), **Runtime durability** (cron, tool checkpoints, tokenizer warmup), **WebUI as control plane** (remote connect, PWA, session SQLite).

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Model access lag** — New OpenAI models (GPT-6) not immediately usable via Copilot/Codex | #5898, #5939, #5935, #5940 | 3 issues + 2 PRs in 4 days |
| **Agent autonomy breaks** — sudo expires, cron loses actions, context compaction noisy | #5924, #5932, #5780 | 3 distinct reports |
| **WebUI responsiveness** — Session I/O blocks event loop, history pagination broken | #5580, #5934, #5943 | 3 PRs targeting same area |
| **Log noise** — WeChat polling, context compaction notices | #5936, #5780 | 2 PRs silencing defaults |
| **Crash recovery gaps** — Mid-batch tool execution loss, tokenizer cold start | #5946, #5861 | 2 PRs adding durability |

**Satisfaction signal:** Users file detailed bugs with repro steps and often **provide fix PRs** (#5935, #5940, #5933) — indicates invested community. Dissatisfaction centers on **frontier-model latency** and **long-running agent reliability**.

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) `fix(session): move persistence off event loop` | **Open since 2026-08-28 (31 days)** | P1, blocks WebUI scalability; superseded by #5943 (SQLite rewrite) but both open |
| [#5861](https://github.com/HKUDS/nanobot/pull/5861) `fix(tokens): warm fallback tokenizer in background` | **Open since 2026-09-22 (6 days)** | P1, marked `conflict` — needs rebase/review; startup perf for CLI/SDK |
| [#5780](https://github.com/HKUDS/nanobot/pull/5780) `fix: stop sending context compaction notifications` | **Open since 2026-09-15 (13 days)** | P2, `conflict` — UX annoyance, config option requested |
| [#5864](https://github.com/HKUDS/nanobot/pull/5864) `fix(discord): cancel delayed reaction tasks on runtime reset` | **Open since 2026-09-22 (6 days)** | P2, fixes #5806 — Discord channel stability |
| [#5924](https://github.com/HKUDS/nanobot/issues/5924) `Agent gets stuck in sudo loop` | **Open since 2026-09-26 (2 days)** | **No PR yet** — high user impact, needs runtime fix |

**Maintainer action suggested:**  
1. **Merge #5933 (P0 cron fix)** → cut v0.3.6 with provider fixes (#5937, #5938, #5940).  
2. **Review #5935 (GPT-6 Copilot)** and #5924 (sudo loop) for same patch.  
3. **Decide between #5580 vs #5943** for session I/O — #5943 is more comprehensive but larger.  
4. **Resolve conflicts** on #5861, #5780 to unblock tokenizer/notification UX.

---

*Digest generated from GitHub API data as of 2026-09-28. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-28

## 1. Today's Overview
Hermes Agent shows **very high development velocity** today with 50 pull requests updated (45 open, 5 merged/closed) and 6 active issues updated in the last 24 hours. No new releases were published. Activity spans Windows compatibility fixes, cron worker stability, desktop performance regressions, security hardening for LSP/workspace trust, and major architectural work on unified session ownership (#106742). The project is in active bug-fix and feature-integration mode with multiple P1/P2 issues targeting compatibility and session-state risks.

---

## 2. Releases
**No new releases today.** The latest release data shows none in the provided window.

---

## 3. Project Progress (Merged/Closed PRs Today)
Five PRs were merged/closed in the last 24h (exact list not enumerated in data; inferred from “merged/closed: 5”). Notable **open PRs advancing toward merge** with recent updates:

| PR | Area | Summary |
|----|------|---------|
| [#126001](https://github.com/NousResearch/hermes-agent/pull/126001) | cron, compat | **Fixes #125999** — pins external worker’s runtime `site-packages` (not just repo root), restoring `ruamel.yaml`/`dotenv` imports for cron jobs. |
| [#125955](https://github.com/NousResearch/hermes-agent/pull/125955) | security, lsp | Prevents executing a cloned repo’s own interpreter/TS SDK in untrusted workspaces; closes supply-chain RCE vector. |
| [#125998](https://github.com/NousResearch/hermes-agent/pull/125998) | agent, sessions | Introduces per-session scratch lanes excluded from checkpoints, fixing checkpoint bloat and `TMPDIR` pollution. |
| [#125903](https://github.com/NousResearch/hermes-agent/pull/125903) | cli, desktop | Implements `/handoff desktop` deep-link (`hermes://session/<id>`) to continue CLI sessions in Desktop (salvages #66647, #76398, #79186, #84683). |
| [#124497](https://github.com/NousResearch/hermes-agent/pull/124497) | local-models | Adds live `tokens/s` and context-window telemetry for `llama.cpp` runtime via new `telemetry.py` module. |

---

## 4. Community Hot Topics (Most Commented/Reacted)
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#107232](https://github.com/NousResearch/hermes-agent/issues/107232) | Issue (bug) | 7 | 0 | **Windows subprocess hang** when `agent-browser` runs `.cmd` batch files directly — blocks browser automation on Windows. |
| [#125243](https://github.com/NousResearch/hermes-agent/issues/125243) | Issue (perf) | 3 | 0 | **Desktop bundle-skew probes** leak Git processes on partial clones, causing post-restart CPU spikes on macOS. |
| [#125997](https://github.com/NousResearch/hermes-agent/issues/125997) | Issue (test) | 2 | 0 | **`check-windows-footguns.py --diff`** returns exit 0 (false clean) when `git diff` fails (shallow clones, bad refs). |
| [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) | PR (feature) | — | 0 | **Unified gateway session ownership** — single gateway owns all local sessions (CLI, TUI, Desktop, ACP, cron, bots). Long-running (opened 2026-09-09), high architectural impact. |
| [#74440](https://github.com/NousResearch/hermes-agent/pull/74440) | PR (bug) | — | 0 | **Gateway startup quarantine** instead of abort on misconfigured platform — prevents single bad transport from taking down all platforms. Open since 2026-07-29. |

**Underlying themes:** Windows platform parity, desktop resource leaks, cron/worker environment isolation, and the multi-year push toward a single gateway-owned session model.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P1** | [#125999](https://github.com/NousResearch/hermes-agent/issues/125999) / [#125820](https://github.com/NousResearch/hermes-agent/issues/125820) | Cron external worker loses `site-packages` after update → `ModuleNotFoundError: ruamel.yaml`, `dotenv` on every job. Regression in v0.21.5+2085 → v0.21.5+3540. | ✅ [#126001](https://github.com/NousResearch/hermes-agent/pull/126001) (open, targets fix) |
| **P2** | [#107232](https://github.com/NousResearch/hermes-agent/issues/107232) | Windows: `_agent_browser_session_cmd` hangs executing `.cmd` batch files directly (browser automation broken). | — |
| **P2** | [#125243](https://github.com/NousResearch/hermes-agent/issues/125243) | Desktop bundle-skew Git processes survive app restart → periodic CPU spikes on macOS (treeless partial clones). | — |
| **P2** | [#121944](https://github.com/NousResearch/hermes-agent/pull/121944) | MCP: recorded 5xx misclassified as SSE transport mismatch → false latch on transient 503. | PR open |
| **P2** | [#125431](https://github.com/NousResearch/hermes-agent/pull/125431) | Telegram: `[[as_document]]` videos incorrectly sent as inline instead of file attachments. | PR open |
| **P3** | [#125997](https://github.com/NousResearch/hermes-agent/issues/125997) | `check-windows-footguns.py --diff` exits 0 on `git diff` failure (false clean receipts, shallow clones). | — |
| **P3** | [#124110](https://github.com/NousResearch/hermes-agent/pull/124110) | File edits write inserted text as UTF-8 regardless of file encoding → corrupts legacy (e.g., latin-1) files. | PR open |

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Unified gateway session ownership** — all surfaces (CLI, TUI, Desktop, ACP, cron, bots) attach to one gateway-owned session | [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) (P1, needs-decision, 19 days old) | **High** — architectural flagship, touches `sweeper:risk-session-state`, `risk-message-delivery`, `risk-compatibility`, `risk-automation` |
| **Per-session scratch lanes excluded from checkpoints** | [#125998](https://github.com/NousResearch/hermes-agent/pull/125998) | **High** — fixes checkpoint bloat, already implemented |
| **`/handoff desktop` deep-link continuation** (`hermes://session/<id>`) | [#125903](https://github.com/NousResearch/hermes-agent/pull/125903) | **High** — salvages 4 prior issues, UX polish for CLI↔Desktop flow |
| **Desktop profile rail: per-profile hooks + `profiles.list` worker_session visibility** | [#125929](https://github.com/NousResearch/hermes-agent/issues/125929) | **Medium** — UI gap making external dispatch invisible |
| **Live `tokens/s` & context-window telemetry for `llama.cpp`** | [#124497](https://github.com/NousResearch/hermes-agent/pull/124497) | **Medium** — observable local-model runtime |
| **Gateway quarantine (not abort) on open-policy platform misconfig** | [#74440](https://github.com/NousResearch/hermes-agent/pull/74440) | **Medium** — stability, open since July |

---

## 7. User Feedback Summary (Pain Points & Use Cases)
- **Windows users blocked on browser automation** — `.cmd` execution hangs (#107232); footgun checker gives false confidence (#125997).
- **Cron operators hit hard regression** — post-update `ModuleNotFoundError` for stdlib-adjacent deps (`ruamel`, `dotenv`) breaks all scheduled jobs (#125999, #125820).
- **Desktop users see silent CPU drain** — bundle-skew Git processes persist after quit, spike CPU on macOS (#125243).
- **Security-conscious users exposed** — LSP runs untrusted repo’s own toolchain without prompt (#125955).
- **Multi-surface users want session continuity** — `/handoff desktop` deep links address real workflow (CLI → Desktop) (#125903).
- **File-edit corruption on legacy encodings** — silent UTF-8 insertion breaks non-UTF-8 sources (#124110).

---

## 8. Backlog Watch (Long-Unanswered High-Impact Items)
| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) | 19 days | **Architectural** | Unifies all local session ownership; touches gateway, CLI, TUI, Desktop, ACP, cron, plugins. Marked `needs-decision`, 10+ `sweeper:risk-*` labels. |
| [#74440](https://github.com/NousResearch/hermes-agent/pull/74440) | 61 days | **Stability** | Gateway aborts on single misconfigured platform; quarantine fix pending. `needs-decision`, `sweeper:blast-moderate`. |
| [#107232](https://github.com/NousResearch/hermes-agent/issues/107232) | 18 days | **Platform parity** | Windows browser automation fundamentally broken (subprocess hang on `.cmd`). 7 comments, no fix PR yet. |
| [#125929](https://github.com/NousResearch/hermes-agent/issues/125929) | 0 days (new) | **UX/Observability** | Desktop profile rail shows no hook for external dispatch (CLI/kanban/cron) — “invisible work” gap. |
| [#124110](https://github.com/NousResearch/hermes-agent/pull/124110) | 2 days | **Data integrity** | File edits corrupt non-UTF-8 files; `needs-decision` on encoding policy. |

---

**Health Indicators:** 🟢 High PR throughput, 🟡 Multiple P1 regressions in cron/Windows, 🟢 Security fixes landing quickly, 🟡 Long-running architectural PRs (#106742, #74440) need maintainer resolution. Next release likely to include cron fix (#126001), scratch lanes (#125998), and handoff deep-links (#125903).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-28

## 1. Today's Overview
PicoClaw saw moderate maintenance activity over the past 24 hours with **4 issue updates** and **2 pull request updates**, but **no merges or releases**. The project is in a steady-state maintenance phase: two stale items (#3287, #3353) received recent comments, a critical DingTalk panic (#3382) remains unaddressed since v0.3.1, and two new feature requests (#3395, #3397) arrived with accompanying PRs for one of them. Overall velocity is low—no PRs merged recently—suggesting maintainer bandwidth is limited or review cycles are long.

## 2. Releases
**No new releases** published today. Latest tagged release remains **v0.3.1** (commit 2cf030d2).

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | Open (stale) | Bounds tool feedback animations to 5 min max lifetime and stops on first edit error; prevents indefinite message edits. |
| [#3396](https://github.com/sipeed/picoclaw/pull/3396) | Open | Adds opt-in `reaction_enabled` toggle (default `false`) for OneBot channel to gate automatic `set_msg_emoji_like` acknowledgements. |

**No PRs were merged or closed today.** Both open PRs are awaiting review.

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue (closed, stale) | 14 comments, 0 👍 | IRCv3 message fragmentation: PicoClaw treats split >512-byte IRC messages as separate instead of reassembling them. |
| [#3382](https://github.com/sipeed/picoclaw/issues/3382) | Issue (open, stale) | 1 comment, 0 👍 | **Critical stability**: DingTalk stream SDK reconnect triggers panic (`send on closed channel` at `client.go:161`); regression from #973 persists in v0.3.1. |
| [#3395](https://github.com/sipeed/picoclaw/issues/3395) | Issue (open) | 0 comments, 0 👍 | OneBot auto-ack reaction (emoji 289) is hardcoded and unconditional; users want it configurable/off by default. |
| [#3396](https://github.com/sipeed/picoclaw/pull/3396) | PR (open) | 0 comments, 0 👍 | Direct implementation of #3395—adds `reaction_enabled` config flag. |

**Analysis**: The DingTalk panic (#3382) is the highest-impact open issue (production crash). The OneBot reaction pair (#3395/#3396) shows a clear user-driven improvement with a ready-to-merge PR. IRC reassembly (#3287) was closed as stale but had significant discussion—may resurface.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#3382](https://github.com/sipeed/picoclaw/issues/3382) DingTalk stream SDK reconnect panic (`send on closed channel`) | Open, stale (filed 2026-09-20) | No |
| Medium | [#3353](https://github.com/sipeed/picoclaw/pull/3353) Tool feedback animation can edit messages indefinitely on lifecycle leak | Open, stale (PR from 2026-08-31) | Yes (PR #3353) |

**Note**: The DingTalk crash blocks Stream Mode users entirely. No fix PR exists yet—likely requires upstream SDK coordination or channel reconnection logic overhaul.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|------------------------------|
| **OneBot `reaction_enabled` toggle** | [#3395](https://github.com/sipeed/picoclaw/issues/3395) + [#3396](https://github.com/sipeed/picoclaw/pull/3396) | **High** – PR ready, trivial config change, addresses explicit user pain point. |
| **Tsubasa provider catalog entry** | [#3397](https://github.com/sipeed/picoclaw/issues/3397) | **Medium** – Low-effort catalog addition; aligns with existing OpenAI-compatible provider pattern. |
| **IRC long-message reassembly** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) (closed stale) | **Low** – Closed without fix; would need protocol-level handling in IRC channel. |

## 7. User Feedback Summary
- **DingTalk Stream Mode users** are blocked by a recurring panic on SDK reconnect (v0.3.1, `dingtalk-stream-sdk-go` v0.9.1). No workaround reported.
- **OneBot/QQ (NapCat) users** find the mandatory emoji-ack on *every* group message noisy and unwanted; they’ve supplied a PR to make it opt-in.
- **Tsubasa users** currently work around missing catalog entry via manual `openai` config with custom base URL; they want first-class provider UX.
- **IRC users** (historical) need transparent handling of >512-byte message fragmentation per IRCv3 spec.

**Sentiment**: Frustration on stability (DingTalk), appreciation for configurability (OneBot PR), mild inconvenience on provider discoverability (Tsubasa).

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3382](https://github.com/sipeed/picoclaw/issues/3382) DingTalk panic | 8 days open, 0 fix PR | Production crash for a major channel; regression of #973. |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) Bound tool feedback animations | 28 days open (PR) | Prevents indefinite message-edit loops; simple, tested fix awaiting review. |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC long-message support | 68 days (closed stale) | 14-comment discussion indicates real need; closed without resolution—may need reopening. |

**Maintainer Action Suggested**: Prioritize #3382 (crash) and #3353 (merged-ready fix). Consider merging #3396 (low-risk config flag) to unblock OneBot users.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-28

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 38 PRs updated in the last 24 hours (9 merged/closed, 29 open) but only 1 new issue filed. The project is in a **stabilization and hardening phase** — the majority of open PRs are bug fixes, infrastructure improvements, and reliability hardening across containers, setup/installation, agent runner, and the Iron proxy. No new releases were cut today. The single new issue (#3951) is a Linux-specific Docker mount ownership bug that already has a targeted fix PR (#3952) opened the same day, indicating responsive triage.

## 2. Releases
**No new releases today.** The project appears to be accumulating fixes for a future patch or minor release. Given the volume of merged/closed PRs (9 in 24h), a release candidate may be imminent.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#3571](https://github.com/nanocoai/nanoclaw/pull/3571) | fix(container): prevent system rows starving inbound queue | container / core | **Merged** — Fixes a starvation bug where system-level DB rows could block the inbound message queue, improving reliability under load. |
| *8 other PRs closed/merged* (not individually listed in top-20) | Various fixes across setup, containers, providers | setup, containers, providers | Consolidated cleanup; details in closed PR list. |

**Net progress:** The closed PRs resolve a container queue starvation issue and likely several setup/container hygiene bugs. The 29 open PRs represent a **large, coordinated hardening wave** targeting: session/container lifecycle, Iron proxy TLS trust, scheduled-task context control, update/resilience paths, and test flakiness.

## 4. Community Hot Topics
| Item | Type | Comments | Summary | Underlying Need |
|------|------|----------|---------|-----------------|
| [#3951](https://github.com/nanocoai/nanoclaw/issues/3951) | Issue | 0 | `ncl tasks delete` leaves orphaned session + unreadable SQLite DB on Linux (rootful Docker mount ownership) | **Reliable task cleanup on Linux hosts** — operators hit persistent log spam and broken state after task deletion. |
| [#3952](https://github.com/nanocoai/nanoclaw/pull/3952) | PR | 0 | Fix for #3951: pre-create session mount points as host user before Docker bind-mounts | **Rootless-friendly mount handling** — eliminates root-owned directories that block `rmSync`. |
| [#3950](https://github.com/nanocoai/nanoclaw/pull/3950) | PR | 0 | feat(iron): trust operator's name-constrained local CA for private model hosts | **Private model hosting behind Iron** — enables `https://models.home.arpa/v1` without public CA certs. |
| [#3932](https://github.com/nanocoai/nanoclaw/pull/3932) | PR | 0 | feat(skills): add `/add-lean-tasks` for minimal-context scheduled task runs | **Cost/latency control for scheduled tasks** — run cheap/small-model tasks without full agent context. |
| [#3931](https://github.com/nanocoai/nanoclaw/pull/3931) | PR | 0 | refactor(agent-runner): add `minimalContext` provider option | **Provider-level context control** — foundation for lean tasks and deterministic runs. |

*Note: All PRs show `Comments: undefined` in the feed; actual discussion may exist on GitHub. The above are the most structurally significant items.*

## 5. Bugs & Stability — Today’s Reports & Fixes
| Severity | Issue / PR | Title | Status | Fix PR |
|----------|------------|-------|--------|--------|
| **High** | [#3951](https://github.com/nanocoai/nanoclaw/issues/3951) | `ncl tasks delete` half-fails on Linux: root-owned mount points block `rmSync`, leaves orphaned session + periodic `SqliteError` | Open | [#3952](https://github.com/nanocoai/nanoclaw/pull/3952) (open, same day) |
| **High** | [#3948](https://github.com/nanocoai/nanoclaw/pull/3948) | `/update-nanoclaw` stops Iron proxy → every agent spawn fails post-update | Open (fix PR) | #3948 itself |
| **Medium** | [#3878](https://github.com/nanocoai/nanoclaw/pull/3878) | Setup leaves ping agent container running after deleting its folder | Open (fix PR) | #3878 |
| **Medium** | [#3919](https://github.com/nanocoai/nanoclaw/pull/3919) | OpenCode setup accepts local model URLs Iron cannot route → fails at prompt or every turn | Open (fix PR) | #3919 |
| **Medium** | [#3947](https://github.com/nanocoai/nanoclaw/pull/3947) | Host sweep doesn’t stop containers whose session/agent group was deleted → containers leak until host restart | Open (fix PR) | #3947 |
| **Medium** | [#3883](https://github.com/nanocoai/nanoclaw/pull/3883) | Uninstall leaves Iron Control DB → reinstall in same folder starts with stale encryption keys | Open (fix PR) | #3883 |
| **Low** | [#3946](https://github.com/nanocoai/nanoclaw/pull/3946) | Skill step failure shows generic "step did not complete" instead of actual error | Open (fix PR) | #3946 |
| **Low** | [#3908](https://github.com/nanocoai/nanoclaw/pull/3908) | Agent-to-agent failure notice loops (failure notice answered with another failure notice) | Open (fix PR) | #3908 |
| **Low** | [#3918](https://github.com/nanocoai/nanoclaw/pull/3918) | Result-door providers (OpenCode) re-send reply agent already sent via `send_message` | Open (fix PR) | #3918 |

**Pattern:** Most bugs are **lifecycle/resource leaks** (containers, DBs, mount points) and **proxy/routing edge cases** (Iron, OpenCode). Fix PRs exist for all — the project is actively closing the loop.

## 6. Feature Requests & Roadmap Signals
| Signal | PR / Issue | Description | Likelihood for Next Version |
|--------|------------|-------------|-----------------------------|
| **Lean scheduled tasks** | [#3932](https://github.com/nanocoai/nanoclaw/pull/3932), [#3931](https://github.com/nanocoai/nanoclaw/pull/3931) | `/add-lean-tasks` + `minimalContext` provider option — run tasks on small/local models without full context | **High** — both PRs open, follow guidelines, core-team tagged |
| **Private CA trust for Iron** | [#3950](https://github.com/nanocoai/nanoclaw/pull/3950) | Operator-provided name-constrained CA for private model hosts (e.g., `.home.arpa`) | **High** — unblocks self-hosted model usage, core-team tagged |
| **Mattermost callback secret auto-derivation** | [#3949](https://github.com/nanocoai/nanoclaw/pull/3949) | Derive `MATTERMOST_CALLBACK_SECRET` at verify-runtime if unset | **Medium** — follow-up to #3823, reduces setup friction |
| **Failure-assist agent permission hardening** | [#3920](https://github.com/nanocoai/nanoclaw/pull/3920) | Restrict setup failure-assist agents to safe baseline (not allow-all) on live installs | **Medium** — security hardening, core-team tagged |
| **Update controller load fix** | [#3913](https://github.com/nanocoai/nanoclaw/pull/3913) | `/update-nanoclaw` loads controller without `setup/` or `node_modules` (broken since gateway extraction) | **High** — restores update functionality, core-team tagged |

**Roadmap inference:** The next release will likely be a **stability + operator-experience patch** (vX.Y.Z) focusing on: Linux container hygiene, Iron proxy TLS flexibility, scheduled-task cost control, and update/resilience paths. No major new integrations visible in today’s batch.

## 7. User Feedback Summary
*No direct user comments captured in the 24h feed (all PR comment counts `undefined`, issue #3951 has 0 comments).* However, the **nature of the bugs** reveals real operator pain points:

- **Linux/rootful Docker users** hit silent state corruption after task deletion (log spam, unreadable DB) — a **production reliability blocker**.
- **Self-hosted model operators** cannot use private hostnames (`.home.arpa`, `.local`) behind Iron — forces workarounds or public exposure.
- **Scheduled-task users** pay full context cost (skills, MCP, memory) even for trivial recurring jobs — **cost/latency concern**.
- **Upgraders** experience total agent spawn failure post-update due to Iron proxy drain — **upgrade fear**.
- **Setup runners** see misleading "no gateway detected" errors from pnpm workspace warnings — **false-negative setup failures**.

The maintainers (glifocat, barnuri, IamAdamJowett, dawNotPoi) are **responding same-day** with targeted fixes — a healthy signal.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#3571](https://github.com/nanocoai/nanoclaw/pull/3571) | ~1 month (created 2026-08-27) | Container queue starvation fix — **already merged**, but verify no regressions in high-throughput scenarios | **Merged** — monitor post-merge |
| [#3878](https://github.com/nanocoai/nanoclaw/pull/3878) | 5 days | Ping agent container leak during setup cleanup — affects fresh installs | **Open** — core-team tagged, needs review |
| [#3883](https://github.com/nanocoai/nanoclaw/pull/3883) | 4 days | Iron Control DB orphan on uninstall → broken reinstall | **Open** — core-team tagged, security/reliability |
| [#3913](https://github.com/nanocoai/nanoclaw/pull/3913) | 3 days | `/update-nanoclaw` completely broken (controller load fails) | **Open** — core-team tagged, **blocks updates** |
| [#3948](https://github.com/nanocoai/nanoclaw/pull/3948) | 1 day | Update kills Iron proxy → all agent spawns fail | **Open** — core-team tagged, **critical for upgrades** |
| [#3952](https://github.com/nanocoai/nanoclaw/pull/3952) | 0 days | Fix for today’s highest-severity issue (#3951) | **Open** — same-day, needs quick merge to unblock Linux users |

**Recommendation:** Prioritize review/merge of **#3913, #3948, #3952** — they gate updates, upgrades, and Linux task deletion respectively. The 29 open PRs represent a large review burden; consider a **triage sprint** to merge the critical-path fixes and batch the rest.

---

**Project Health Score: 🟢 Good** — High fix velocity, same-day issue-to-PR turnaround, no stale critical bugs without fixes. Risk: PR review bandwidth vs. 29 open PRs. Next release should be a strong stability patch.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-28

## 1. Today's Overview
NullClaw shows **high maintenance velocity** with 18 issues and 8 PRs closed/merged in the last 24 hours, indicating an active triage and release-preparation cycle. Two critical items remain open: a security fix for the A2A bearer-token scoping bug (#974, #1012) and a new provider onboarding (Tsubasa, #1013). No new release was cut today, but the volume of merged PRs suggests a point release is imminent. Community engagement is moderate—most discussions are 4–5 comments deep, driven by implementers rather than casual users.

## 2. Releases
**No new releases published today.** The last merged PRs (#527 adaptive intelligence pipeline, #667 bidirectional email, #319 DingTalk recall, #411 tool customization) represent substantial feature work that will likely ship in the next version.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#527](https://github.com/nullclaw/nullclaw/pull/527) | Core/Channels | **Adaptive Intelligence Pipeline** (turn scorer, skill router, online LoRA) + **Email & WhatsApp Web (Baileys) channels** | Major: enables self-improving agents & two high-demand channels |
| [#667](https://github.com/nullclaw/nullclaw/pull/667) | Email | **Full bidirectional IMAP IDLE** with fallback polling & network resilience | High: email becomes a first-class interactive channel |
| [#319](https://github.com/nullclaw/nullclaw/pull/319) | DingTalk | **Official Bot API + OAuth2 token mgmt + message recall** | Medium: closes send-only limitation (#376) |
| [#411](https://github.com/nullclaw/nullclaw/pull/411) | Tools | **Tool customization system** (trigger keywords, priority, pre-filled args) | High: allows per-deployment tool tuning without code changes |
| [#968](https://github.com/nullclaw/nullclaw/pull/968) | Matrix | **Persist `next_batch` cursor** across restarts + test isolation | Medium: fixes duplicate/initial-sync flood on restart |
| [#958](https://github.com/nullclaw/nullclaw/pull/958) | Teams | **Lowercase `serviceurl` JWT claim + JWKS fetch cap raise** | Medium: unblocks MS Teams 403 errors |
| [#990](https://github.com/nullclaw/nullclaw/pull/990) | Providers | **Eden AI gateway** (OpenAI-compatible, EU-hosted) | Low-Medium: adds multi-vendor EU gateway |
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | Docker/Deps | **Alpine 3.23 → 3.24** base image bump | Low: routine dependency update |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#764](https://github.com/nullclaw/nullclaw/issues/764) **Add logo to Agent Skills clients page** (5 💬, 0 👍) | Open, 5 comments | **Ecosystem visibility**—maintainers asked to submit branding for agentskills.io/clients |
| [#974](https://github.com/nullclaw/nullclaw/issues/974) **A2A bearer token allows cross-caller task/context reuse** (1 💬, 0 👍) | Open, 1 comment, **security** | **Multi-tenant isolation**—shared bearer lets callers enumerate/steal each other’s tasks & contexts |
| [#613](https://github.com/nullclaw/nullclaw/issues/613) **Improve config.json option descriptions** (3 💬, 4 👍) | Closed, 3 comments, 4 👍 | **Onboarding friction**—newcomers find generated config opaque; docs/examples requested |
| [#183](https://github.com/nullclaw/nullclaw/issues/183) **WhatsApp Web via Baileys (QR)** (5 💬, 2 👍) | Closed, 5 comments, 2 👍 | **Consumer WhatsApp support**—delivered in #527 |
| [#619](https://github.com/nullclaw/nullclaw/issues/619) **Better error for `error.ApiError`** (5 💬, 1 👍) | Closed, 5 comments | **Observability**—testers need actionable logs without reading source |

**Signal:** Security (#974) and onboarding/docs (#613) are the loudest pain points; channel parity (WhatsApp, DingTalk, Email, Matrix) is largely resolved.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#974](https://github.com/nullclaw/nullclaw/issues/974) A2A bearer token scopes tasks/contexts globally → cross-tenant data leak | **Open** | [#1012](https://github.com/nullclaw/nullclaw/pull/1012) (open, scopes by bearer principal) |
| **High** | [#354](https://github.com/nullclaw/nullclaw/issues/354) Homebrew upgrade breaks `launchd` plist (hardcoded Cellar path) | Closed | Not linked—likely fixed in packaging script |
| **High** | [#477](https://github.com/nullclaw/nullclaw/issues/477) Feishu/Lark WS disconnect under load | Closed | No PR referenced |
| **Medium** | [#408](https://github.com/nullclaw/nullclaw/issues/408) Tool-call JSON parser extracts `:` as tool name | Closed | Likely fixed in #411 tool system rewrite |
| **Medium** | [#665](https://github.com/nullclaw/nullclaw/issues/665) `error.NoResponseContent` on Windows build | Closed | No PR referenced |
| **Low** | [#957](https://github.com/nullclaw/nullclaw/issues/957) Config reader “rate limit” noise in JSON output mode | Closed | Config doc/update implied |

**Watch:** #1012 must land before next release; it touches authZ path used by all A2A consumers.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Tsubasa provider** | [#1013](https://github.com/nullclaw/nullclaw/pull/1013) (open PR) | **Very High**—trivial OpenAI-compat addition, tests passing |
| **JIRA access tool** | [#914](https://github.com/nullclaw/nullclaw/issues/914) | Medium—enterprise ask, no PR yet |
| **DuckDuckGo (`ddgs`) web search** | [#623](https://github.com/nullclaw/nullclaw/issues/623) | Low—single request, no PR |
| **Docker Hub official image + compose** | [#449](https://github.com/nullclaw/nullclaw/issues/449) | Medium—#956 shows Docker CI active; image publish is next step |
| **GET `/status` endpoint for monitoring** | [#631](https://github.com/nullclaw/nullclaw/issues/631) | Medium—ops need, low complexity |
| **Agent Skills client listing** | [#764](https://github.com/nullclaw/nullclaw/issues/764) | **High**—maintainer action only (metadata submission) |

## 7. User Feedback Summary
- **Pain points:**  
  - Config opacity (#613, 4 👍) — “generated config has options with no practical use”  
  - Silent failure after Homebrew upgrade (#354) — daemon stops, no logs  
  - Cryptic `error.ApiError` / `error.NoResponseContent` logs (#619, #665) — testers blocked  
  - A2A multi-tenant leak (#974) — security blocker for shared deployments  
- **Delighters:**  
  - WhatsApp Web (Baileys) finally shipped (#183 → #527)  
  - Email bidirectional IDLE (#667) — “instant email processing”  
  - Tool customization (#411) — “no code changes to tune triggers”  
- **Use cases surfacing:** headless VPS Web UI tunneling (#861), Cloudflare/Nginx in front of gateway (#495), enterprise JIRA/Teams/Matrix integrations.

## 8. Backlog Watch — Stale / Unresolved Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#764](https://github.com/nullclaw/nullclaw/issues/764) Agent Skills logo submission | 178 days | Zero-code marketing win; only maintainer action required |
| [#974](https://github.com/nullclaw/nullclaw/issues/974) / [#1012](https://github.com/nullclaw/nullclaw/pull/1012) A2A authZ fix | 80 days / 1 day | **Security regression risk**—must merge before any multi-tenant deploy |
| [#613](https://github.com/nullclaw/nullclaw/issues/613) Config docs overhaul | 194 days | High 👍 (4), low effort, high onboarding ROI |
| [#449](https://github.com/nullclaw/nullclaw/issues/449) Docker Hub official image | 200 days | Recurring ask; CI already builds images (#956) |
| [#914](https://github.com/nullclaw/nullclaw/issues/914) JIRA tool | 138 days | Enterprise adoption signal; no contributor yet |

---

**Bottom line:** NullClaw is in a **feature-complete, pre-release hardening phase**. The adaptive intelligence pipeline and channel parity (Email, WhatsApp, DingTalk, Matrix, Teams) are landed. The gate to the next release is the A2A security fix (#1012) and maintainer bandwidth for docs/docker/image publication. Community energy is shifting from “add channel X” to “make it observable, secure, and documented.”

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-28

## 1. Today's Overview
IronClaw shows steady maintenance activity with **zero new releases** but **8 total items updated** in the last 24 hours (2 issues, 6 PRs). The project is in a **dependency-heavy maintenance phase**: 5 of 6 active PRs are automated Dependabot updates spanning Rust crates, GitHub Actions, and WASM tooling. Two new feature proposals opened — a Tsubasa provider registry entry (#8115) and an opt-in turn-0 tool selection mechanism (#8113) — signal early-stage roadmap exploration. No bug reports or regressions surfaced today. Overall health: **stable, maintenance-focused, low community friction**.

## 2. Releases
**No new releases** published today.

## 3. Project Progress
| PR | Status | Scope | Notes |
|----|--------|-------|-------|
| [#8104](https://github.com/nearai/ironclaw/pull/8104) | **Closed** | Dependencies (Rust) | 29 crate updates merged (uuid, base64, rust_decimal, etc.) — routine dependency hygiene. |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | Open | CI/Infrastructure | Nightly codebase knowledge graph refresh (bot-generated); awaiting review/merge. |
| [#8114](https://github.com/nearai/ironclaw/pull/8114) | Open | Dependencies (Rust) | 31 crate updates (thiserror, uuid, base64, etc.) — supersedes #8104 partially. |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | Open | Dependencies (GitHub Actions) | 8 action updates (claude-code-action, setup-node, etc.). |
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | Open | Dependencies (WASM) | 4 WASM toolchain updates (wasmtime, wit-component, wit-parser). |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | Open | Dependencies (Rust) | 2 Tokio ecosystem updates (tower-http, tokio-tungstenite). |

**Net progress**: One dependency PR merged; five dependency PRs + one infra PR pending. No feature code merged today.

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#8115](https://github.com/nearai/ironclaw/issues/8115) | Issue | Opened today, 0 comments | **Provider UX simplification** — users want a named "Tsubasa" registry entry with a 32K context budget preset to avoid manual endpoint/model entry. |
| [#8113](https://github.com/nearai/ironclaw/issues/8113) | Issue | Opened yesterday, 0 comments | **Token efficiency / tool discovery** — proposal to predict required tools from the first user message using BM25F + embeddings, advertising only predicted tools + discovery bridges. Reduces context bloat and latency. |

**Analysis**: Both issues are **proposals, not bug reports**, and have zero community discussion yet. They reflect maintainer/contributor-driven roadmap thinking rather than user pain. Watch for engagement — if comments accumulate, they may graduate to implementation.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported or updated today.**  
All 6 active PRs are dependency/infra updates with `risk: low` labels. No fix PRs linked to issues.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Tsubasa named provider with 32K context preset** | [#8115](https://github.com/nearai/ironclaw/issues/8115) | **Medium** — small scope, aligns with existing OpenAI-compatible backend; likely a config-only PR. |
| **Opt-in turn-0 tool prediction (BM25F + embeddings)** | [#8113](https://github.com/nearai/ironclaw/issues/8113) | **Low–Medium** — XL scope, requires ranking infrastructure; may land behind a feature flag first. |
| **WASM toolchain modernization** | [#7834](https://github.com/nearai/ironclaw/pull/7834) | **High** — dependabot PR open 36 days; wasmtime updates often unblock WASM agent features. |

**Prediction**: Next minor release will likely bundle the merged dependency updates (#8104) + WASM bumps (#7834) + Tsubasa registry entry (#8115). Turn-0 tool prediction (#8113) is a vNext candidate.

## 7. User Feedback Summary
**No direct user feedback captured today** — no comments on issues/PRs, no 👍 reactions, no support questions. The two new issues are author-driven proposals. Community appears **quiet but not dissatisfied**; typical for a project in maintenance mode between major feature cycles.

## 8. Backlog Watch
| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | 36 days | Medium | WASM toolchain updates (wasmtime 20+) often carry breaking API changes; blocking WASM agent work if stale. |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | 30 days | Low | Nightly knowledge graph refresh — harmless but clutters PR list; should be auto-merged or closed. |
| [#8113](https://github.com/nearai/ironclaw/issues/8113) | 1 day | — | Ambitious proposal; needs design review to avoid scope creep. Assign a maintainer to triage. |

---

**Data source**: GitHub REST API (issues, PRs, releases) for `nearai/ironclaw` as of 2026-09-28.  
**Next digest**: 2026-09-29.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-28

## 1. Today's Overview
LobsterAI shows **low genuine development velocity** today. While the GitHub metrics report 5 issues and 7 PRs "updated in the last 24h," **all but one are stale items from March 2026** (created 2026-03-27–30) that received a bulk update on 2026-09-27—likely a triage or label-sync action. The only net-new contribution today is **PR #2771**, a targeted fix for OpenClaw gateway lock reclamation on Windows. No releases were published. The project appears in a maintenance/security-hardening phase with limited active feature work.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress (Merged/Closed PRs)
All merged/closed PRs listed were originally opened in March and closed on 2026-09-27 (yesterday). They represent a batch of security and stability fixes:

| PR | Area | Summary | Link |
|----|------|---------|------|
| #1042 | security | **P0 fixes**: SSRF via `api:fetch`/`api:stream` (no URL validation in main process) + arbitrary file read via `dialog:readFileAsDataUrl` (no path boundary checks). Closes #1041. | [#1042](https://github.com/netease-youdao/LobsterAI/pull/1042) |
| #1038 | proxy/streaming | Ensures `ReadableStream` readers are cancelled on errors/timeouts/user stop, preventing TCP connection leaks. | [#1038](https://github.com/netease-youdao/LobsterAI/pull/1038) |
| #1044 | installer | Normalizes NSIS install paths when users select a drive root (e.g., `D:\` → `D:\LobsterAI`). | [#1044](https://github.com/netease-youdao/LobsterAI/pull/1044) |
| #1045 | renderer (UI) | Adds unsaved-changes prompt when switching agents in the settings panel. | [#1045](https://github.com/netease-youdao/LobsterAI/pull/1045) |
| #979 | renderer (UI) | Fixes missing spacing in Agent skill option lists (Create/Preset Agent dialogs). | [#979](https://github.com/netease-youdao/LobsterAI/pull/979) |
| #2771 | openclaw/main | **Today’s only new PR**: Reclaims gateway locks whose recorded PID was reused after unclean shutdown (Windows), fixing startup/repair failures. | [#2771](https://github.com/netease-youdao/LobsterAI/pull/2771) |

**Net advancement**: Security hardening (SSRF, file read), streaming reliability, installer robustness, and two UI polish fixes.

## 4. Community Hot Topics
All high-activity items are stale (March origin, updated yesterday). The most commented/reaction items:

| Item | Type | Comments | 👍 | Core Need | Link |
|------|------|----------|----|-----------|------|
| #1041 | Issue | 2 | 0 | **Critical SSRF + arbitrary file read** — main process fetch without URL validation; `readFileAsDataUrl` without path sandboxing. | [#1041](https://github.com/netease-youdao/LobsterAI/issues/1041) |
| #1046 | Issue | 2 | 0 | **Context-window configurability** — users want to raise the 200K limit to match model capabilities (e.g., Qwen 1M). | [#1046](https://github.com/netease-youdao/LobsterAI/issues/1046) |
| #1047 | Issue | 2 | 0 | **Agent skill persistence bug** — cleared skills reappear after agent switch. | [#1047](https://github.com/netease-youdao/LobsterAI/issues/1047) |
| #978 | PR (open) | 0 | 0 | **Chat folders** — sidebar session grouping with SQLite persistence (12 files, large scope). | [#978](https://github.com/netease-youdao/LobsterAI/pull/978) |

**Underlying signals**:  
- Security posture is a pressing concern (two P0 vulns filed + fixed in same batch).  
- Power users need **model-parameter configurability** (context window, etc.) — currently hard-coded/undocumented.  
- **Agent/skill state management** has consistency bugs.  
- **Organizational features** (folders) are desired but the PR (#978) has been open 6 months without merge.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue/PR | Description | Fix Status |
|----------|----------|-------------|------------|
| **Critical (P0)** | #1041 / #1042 | SSRF via `api:fetch`/`api:stream` (main process fetch to arbitrary URLs); arbitrary local file read via `dialog:readFileAsDataUrl`. | **Fixed & merged** (#1042) |
| **High** | #1038 | Stream reader leaks on network error/timeout/user stop → TCP connection exhaustion. | **Fixed & merged** (#1038) |
| **Medium** | #1047 | Cleared agent skills persist visually after agent switch (state/UI sync bug). | **Open** (no fix PR linked) |
| **Medium** | #976 | Offline QA shows two timeout toasts (poor UX, violates error-handling spec). | **Open** (stale, no fix PR) |
| **Low** | #977 | Deep-link handler (`handleDeepLink`) lacks origin/URL validation → auth flow interference risk. | **Open** (stale, no fix PR) |
| **Low** | #979 | Missing spacing in skill option lists (cosmetic). | **Fixed & merged** (#979) |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|----------------------------|-----------|
| **Configurable context window / model params** | #1046 | Medium | Explicit user demand; aligns with "bring your own model" trend; no code change visible yet. |
| **Chat folders / session grouping** | #978 (PR) | Low–Medium | Large, well-scoped PR open 6 months; may need rebase/review bandwidth. |
| **Unsaved-changes guard in Agent panel** | #1045 | High (already merged) | Small UX win, merged yesterday. |
| **Deep-link security hardening** | #977 | Low | Stale, no fix PR; low visibility. |
| **Offline/error UX standardization** | #976 | Low | Stale, no fix PR; requires design spec alignment. |

**Prediction**: Next version will likely ship the merged security/streaming/installer fixes + UI polish. Configurable context window is the strongest candidate for a follow-up if maintainers prioritize power-user requests.

## 7. User Feedback Summary
- **Security anxiety**: Two P0 vulns reported externally (SSRF, file read) — users/auditors are probing the Electron main-process attack surface.
- **Model control frustration**: Users hit undocumented hard limits (200K context) and want parity with upstream model specs.
- **Agent workflow friction**: Skills don't stay cleared; switching agents loses unsaved edits (now mitigated by #1045).
- **Organizational pain**: Heavy users want folder grouping for sessions (#978).
- **Reliability**: Offline/error states feel unpolished (duplicate toasts, no spec compliance).

Overall sentiment: **Cautious** — security fixes are welcome, but feature velocity feels stalled; several March issues/PRs remain unresolved.

## 8. Backlog Watch (Stale & Needing Maintainer Attention)
| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|-------------------|
| **#978** (PR: Chat folders) | 6 months | High-user-value org feature; 12-file change, blocked on review. | Assign reviewer; split if needed; or close with rationale. |
| **#976** (Issue: Dual timeout toasts offline) | 6 months | UX spec violation; easy fix if error-handling spec exists. | Link to spec; create good-first-issue PR. |
| **#977** (Issue: Deep-link validation) | 6 months | Attack surface for auth flow; low effort to harden. | Security triage; add URL allowlist/origin check. |
| **#1047** (Issue: Skill persistence bug) | 6 months | Core Agent UX broken; erodes trust in custom agents. | Root-cause: state sync between UI/store; needs debugger. |
| **#1046** (Issue: Context window config) | 6 months | Power-user blocker; docs + code change required. | Expose provider-level `maxContextTokens` in config schema. |

---

**Health Indicators**  
- ✅ Security response: P0 vulns patched within same update cycle.  
- ✅ Streaming reliability improved.  
- ⚠️ Feature throughput: 1 net-new PR today; 6-month-old PRs linger.  
- ⚠️ Issue hygiene: 4/5 "updated" issues are stale with no recent movement.  
- ❌ No release cadence visible.

**Next Watch**: Whether #2771 (today’s OpenClaw fix) triggers a patch release, and if maintainers triage the 6-month backlog.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-28

## 1. Today's Overview
Moltis shows steady maintenance activity with **1 new issue** and **3 open pull requests** updated in the last 24 hours, but **no merged PRs or new releases**. The focus is on provider integrations (Tsubasa) and a regression fix for DeepSeek’s latest flagship model (`deepseek-flash`) which currently lacks the Reasoning Effort toggle in the UI. The project is in a healthy, incremental improvement phase with no critical blockers.

## 2. Releases
**No new releases** published today. The latest version remains the previous stable release.

## 3. Project Progress
No PRs were merged or closed today. All three active PRs are in review:
- **#1288** adds a new provider (Tsubasa) with two models and 32K context.
- **#1280** fixes a tool-selection regression where an empty `active_tools` array incorrectly overrode preset tools.
- **#1287** addresses the DeepSeek reasoning-model detection bug reported in #1286.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **DeepSeek-V4.1-Flash reasoning toggle missing** | Issue #1286 | 0 comments, 0 reactions, created & updated yesterday | [moltis-org/moltis#1286](https://github.com/moltis-org/moltis/issues/1286) |
| **Recognise deepseek-flash as thinking model** | PR #1287 | 0 comments, 0 reactions, opened yesterday | [moltis-org/moltis#1287](https://github.com/moltis-org/moltis/pull/1287) |

**Analysis**: The DeepSeek issue is the only user-reported bug today. It stems from hard-coded model-ID heuristics in `model_capabilities.rs` that haven’t been updated for DeepSeek’s new `deepseek-flash` identifier. The fix PR (#1287) is already open and directly targets the root cause.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Medium** | #1286 | `deepseek-flash` (DeepSeek-V4.1-Flash) not recognized as a reasoning model → Reasoning Effort toggle hidden in web UI. Affects users of DeepSeek’s current flagship model. | **#1287** (open) |
| **Low** | #1277 (referenced in #1280) | Empty `active_tools` array incorrectly cleared preset tool controls instead of falling back to them. | **#1280** (open) |

No crashes or regressions reported today beyond the two above.

## 6. Feature Requests & Roadmap Signals
- **New provider: Tsubasa** (PR #1288) — Adds `tsubasa-fast` and `tsubasa-pro` (32K context) to the OpenAI-compatible registry. Signals continued expansion of supported inference providers.
- **Reasoning-model detection modernization** — The DeepSeek fix highlights a broader need: moving from hard-coded ID heuristics to a more maintainable, data-driven capability registry (e.g., provider-declared model metadata). Expect this pattern to be revisited in the next cycle.

## 7. User Feedback Summary
- **Pain point**: DeepSeek users cannot access reasoning-effort control for the latest model, degrading the experience for a major provider.
- **Use case**: Developers relying on preset tool configurations were affected by the empty-array regression (#1277), now fixed in #1280.
- **Sentiment**: Neutral-to-positive; issues are acknowledged and fix PRs are open quickly. No complaints about core stability.

## 8. Backlog Watch
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **#1280** (fix: preserve preset tools for empty `active_tools`) | 7 days | Open, no review yet | Small but user-visible regression; fix is ready and low-risk. |
| **#1287** (fix: recognise deepseek-flash) | 1 day | Open, no review yet | Directly blocks reasoning UI for a flagship model; high user impact. |
| **#1288** (feat: Tsubasa provider) | 0 days | Open, no review yet | New provider integration; expands ecosystem but needs validation. |

**Recommendation**: Prioritize review/merge of #1287 and #1280 (both bug fixes with ready patches). #1288 can follow once CI passes.

---

*Generated from GitHub data as of 2026-09-28. All links point to the Moltis organization repository.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-09-28

## 1. Today's Overview
CoPaw shows **high maintenance velocity** with 7 PRs updated (4 merged) and 8 issues active in the last 24 hours. The merged PRs deliver meaningful UX improvements (unified settings, multi-tab terminal) and a critical fix for media context accumulation (#7965 addressing #7853). No new release was cut, but the merged changes likely target the next patch/minor. Open issue count remains steady at 6, with two new Windows desktop bugs reported today (#8002, #8000). Community engagement is modest—most items have 0–2 reactions and ≤8 comments—indicating a focused contributor base rather than broad public discussion.

## 2. Releases
**No new releases today.** The last merged PRs (#7956, #7965, #7953, #7861) bundle console UX unification, context/media reclamation, import-failure preservation, and an authenticated multi-tab terminal—all candidates for a v2.2.x or v2.3.0 release.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#7956](https://github.com/agentscope-ai/QwenPaw/pull/7956) | **feat(console)** | Unified settings UX per `design.md`: reusable controls, consistent surfaces, localized labels, fluid feedback; fixed workspace-picker overflow & welcome-screen flash. | **UX polish** — settings now feel cohesive; conversation switching smoother. |
| [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) | **fix(context)** | Reclaims historical media in Scroll (images with short captions were excluded from folding); aligns thinking omission with token counting. Directly addresses **#7853**. | **Critical stability** — prevents unbounded base64 image accumulation that OOM’d model context. |
| [#7953](https://github.com/agentscope-ai/QwenPaw/pull/7953) | **fix(portability)** | Preserves actionable per-asset import failures instead of swallowing them. | **Developer experience** — clearer diagnostics for asset loading issues. |
| [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | **feat(console)** | Adds lazy-loaded xterm terminal below shared chat/files workspace: independent tabs, conversation-scoped CWD, auto-create, rename, close, resize, collapse, bounded replay. Requires auth. | **Major new capability** — embedded multi-tab terminal for agent-assisted CLI work. |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) (Closed) | 8 comments, 0 👍 | **Context explosion from base64 images** — users hit model context limits in image-heavy sessions; fix merged in #7965. |
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) (Open, May) | 2 comments, 0 👍 | **Agent self-managed context lifecycle** — cron/long-pipeline agents degrade at 50–60% context; need auto-checkpoint/reset. |
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) (Open) | 1 comment, 0 👍 | **Model catalog metadata gap** — Aliyun Token Plan models missing `thinking_param_style`, hiding Console thinking controls. |
| [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) (Open, **new today**) | 1 comment, 0 👍 | **Windows sandbox bypass** — auto mode + sandbox off allows agent to `Quit()` user’s PowerPoint via COM. Security surface. |
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) (Open) | 1 comment, 0 👍 | **Message editing/retraction + workspace rollback** — WebUI “undo” for cleaner context & file state. |

**Signal:** Users are pushing against context-window limits (media, long runs) and want safer, more controllable agent automation on Windows.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) — Windows auto mode (sandbox off) lets agent COM-quit PowerPoint | Open, **new today** | None yet |
| **High** | [#8000](https://github.com/agentscope-ai/QwenPaw/issues/8000) — Desktop double-launch kills first instance’s backend (no single-instance guard) | Open | None yet |
| **Medium** | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) — ToolResultPruner skips `type="data"` media → base64 OOM | **Closed** | Fixed in [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) (merged) |
| **Medium** | [#7981](https://github.com/agentscope-ai/QwenPaw/issues/7981) (referenced) — Tool timeout loses result, blocks model continuation | Open | Addressed in [#8001](https://github.com/agentscope-ai/QwenPaw/pull/8001) (open) |
| **Low** | [#7953](https://github.com/agentscope-ai/QwenPaw/issues/7953) — Import failures swallowed | **Closed** | Fixed in [#7953](https://github.com/agentscope-ai/QwenPaw/pull/7953) (merged) |

## 6. Feature Requests & Roadmap Signals
| Request | Likelihood for Next Version | Rationale |
|---------|----------------------------|-----------|
| **Agent auto-checkpoint/reset for cron tasks** ([#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525)) | Medium | Long-standing (May), aligns with context-reclamation work in #7965; needs design for “agent-managed” lifecycle. |
| **Model catalog `thinking_param_style` for Aliyun models** ([#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)) | High | Data-only catalog update; unblocks Console thinking UI for supported models. |
| **Desktop UI font-size scaling** ([#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999)) | High | Labeled `good first issue`; pure UI, accessibility win. |
| **WebUI message edit/retract + workspace rollback** ([#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997)) | Medium | Requires history truncation + snapshot rollback; bigger scope, but high user value. |
| **Configurable MCP tool-call timeout** ([#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)) | Medium | PR open since Aug, under review; adds `tool_call_timeout` (default 300s). |

## 7. User Feedback Summary
- **Pain points:**  
  - Context window exhaustion from accumulated base64 images (now fixed).  
  - Agent quality degradation in long/unattended runs — users want autonomous context management.  
  - Windows desktop instability: double-launch kills backend; sandbox bypass allows destructive COM calls.  
  - Missing thinking controls for Aliyun models despite upstream support.  
  - No font-size adjustment on desktop (accessibility/DPI).  
- **Positive signals:**  
  - Console settings unification and multi-tab terminal (#7861) received no negative feedback; suggest UX investment is landing well.  
  - Quick fix turnaround on #7853 → #7965 (6 days) builds confidence.  
- **Use cases emerging:** Cron agents, multi-tab CLI workspaces, image-heavy analysis, Windows desktop as daily driver.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) — Agent self-managed context lifecycle | **~4.5 months** | Core reliability for automation; blocks “set-and-forget” agents. |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) — Configurable MCP tool-call timeout | **~1.5 months** (PR) | Long review cycle; timeout defaults affect all MCP integrations. |
| [#8000](https://github.com/agentscope-ai/QwenPaw/issues/8000) — Desktop single-instance guard | **1 day** | Data-loss risk (backend killed); Windows desktop blocker. |
| [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) — Windows sandbox/COM escape | **Today** | Security regression in auto mode; needs sandbox enforcement or COM blocking. |
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) — Model catalog thinking metadata | **3 days** | Simple catalog patch; restores UI for supported models. |

---

**Health Indicator:** 🟢 **Good** — Active merging, critical bug fixed quickly, UX features landing. **Watch areas:** Windows desktop stability (two new high-sev bugs), long-lived automation/context lifecycle issue, and PR review latency on #6874.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-28

## 1. Today's Overview
ZeroClaw shows **high velocity with 64 total updates** (14 issues, 50 PRs) in the last 24 hours, reflecting intense stabilization work ahead of v0.9.0. The project is tackling **critical security regressions** (S0 severity bugs around admin revocation bypass and session resumption), **release pipeline hardening** after v0.8.5 crates.io failures, and **RPC/gateway parity** for the upcoming core-parity lane. No new release shipped today, but multiple release-blocking fixes are merged or in review. Activity is heavily skewed toward infrastructure, security, and developer experience — feature work is minimal outside the Microsoft Teams channel addition.

---

## 2. Releases
**No new releases today.** The last release was v0.8.5. Current focus is on release-process fixes (#11105, #11095, #11091) to prevent repeat crates.io publishing failures. Next release (v0.9.0) appears to be tracking core-parity milestones (#11176, #11172, #11169).

---

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#11095](https://github.com/zeroclaw-labs/zeroclaw/pull/11095) | `ci(release): block version bumps whose crates cannot publish` | CI/Release | Prevents broken publishes by moving crates.io preflight **before** GitHub Release; merged |
| [#11091](https://github.com/zeroclaw-labs/zeroclaw/pull/11091) | `fix(release): verify crates before the GitHub Release` | CI/Release | Same goal as above; stacked on #11086, merged |
| [#11168](https://github.com/zeroclaw-labs/zeroclaw/pull/11168) | `test(plugins): make the egress pin test independent of live DNS` | WASM/Plugins/Security | Deterministic test for #10008; proves `wasi:http` hook dials pinned address set; merged |
| [#11206](https://github.com/zeroclaw-labs/zeroclaw/pull/11206) | `fix(gateway): recheck config-write authority under the lock` | Gateway/Security | Fixes TOCTOU where config-write auth checked at admission, not at write time; merged |
| [#11151](https://github.com/zeroclaw-labs/zeroclaw/pull/11151) | `fix(rpc): honour the agent parameter on memory methods` | RPC/Memory | Validates `agent` consistently across memory RPCs; prevents cross-agent leaks; merged |
| [#10824](https://github.com/zeroclaw-labs/zeroclaw/pull/10824) | `fix(rpc): report denied batch entries and verify authorization` | RPC/Security | Reports denied entries in `config/set-many`; merged |
| [#9846](https://github.com/zeroclaw-labs/zeroclaw/pull/9846) | `fix(runtime): preserve local socket ownership` | Runtime/IPC | Serializes Unix socket lifecycle with persistent `.lock` file; merged |
| [#11071](https://github.com/zeroclaw-labs/zeroclaw/pull/11071) | `perf(ci): debounce master-push runs before the compile fleet starts` | CI | Cancels superseded runs **before** compile fleet starts; saves compute; merged |
| [#11097](https://github.com/zeroclaw-labs/zeroclaw/pull/11097) | Plugin egress remedy commands escape apostrophes in grants | Plugins/CLI | Fixes JSON-in-single-quotes escaping bug; merged |
| [#11093](https://github.com/zeroclaw-labs/zeroclaw/pull/11093) | Stable docs promotion syncs root `llms.txt`/`llms-full.txt` | CI/Docs | Ensures LLM context files update on stable promotion; merged |

**Key theme:** Release hardening, security authorization fixes, and deterministic testing.

---

## 4. Community Hot Topics
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | Issue (tracker) | 6 | **Runtime plugin architecture** — move channels/tools off compile-time Cargo features to WASM plugins; shrinks binary, enables no-recompile extensibility; high risk, in progress |
| [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) | Issue (bug) | 5 | **Anthropic cost tracking broken** — `$0.00` spend reported, budget caps never fire; P1, in progress |
| [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) | Issue (bug) | 4 | **Concurrent file edits silently drop data** — `file_edit`/`file_write` to same path under `parallel_tools` loses one edit; S0 severity, in progress |
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) | Issue (bug) | 2 | **Session resume restores revoked admin env** — S0 security: resumed sessions bypass admin revocation; accepted, follow-up |
| [#11194](https://github.com/zeroclaw-labs/zeroclaw/pull/11194) | PR (feature) | — | **Microsoft Teams (Bot Framework) channel** — new channel integration; large PR, open |

**Underlying needs:**  
- **Extensibility without recompilation** (plugin system) — architectural priority  
- **Trustworthy cost observability** — multiple providers affected (Anthropic, OpenRouter #11204)  
- **Data integrity under concurrency** — file tools, session state  
- **Security boundaries that survive resume/requeue** — admin revocation, ownership checks  

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S0 (Data loss / Security)** | [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136): Concurrent file_edit/file_write silently drop edits | Tools/Runtime | Open, in progress | — |
| **S0** | [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197): Session resume restores forwarded env after admin revocation | Security/Sandbox | Open, accepted | — |
| **S0** | [#11126](https://github.com/zeroclaw-labs/zeroclaw/issues/11126): Queued session ops retain revoked admin ownership bypass | Security/Sandbox | Open | — |
| **S2 (Degraded)** | [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816): Anthropic provider reports $0.00 spend | Provider/Observability | Open, in progress | — |
| **S2** | [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204): OpenRouter spend shows $0.00, all tokens "free tok" | Runtime/Daemon | Open | — |
| **S2** | [#10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186): Terminal fallback text bypasses live delivery seams | Runtime/Daemon | Open | [#11203](https://github.com/zeroclaw-labs/zeroclaw/pull/11203) (open) |
| **S3 (Minor)** | [#11097](https://github.com/zeroclaw-labs/zeroclaw/issues/11097): Plugin egress remedy commands don't escape apostrophes | Plugins/CLI | **Closed** | [#11097](https://github.com/zeroclaw-labs/zeroclaw/pull/11097) merged |

**Critical cluster:** Three S0 bugs (#11136, #11197, #11126) all involve **state synchronization under concurrency or resume** — file tools, session resumption, and queued operations. Fix for #10186 (S2) has PR #11203 open.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v0.9.0 |
|--------|--------|------------------------|
| **Runtime WASM plugin system** (channels/tools as plugins) | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) (tracker) | High — architectural tracker, multiple PRs in flight |
| **RPC ↔ HTTP gateway parity** (cron, memory, skills, config, SOP) | [#11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176), [#11172](https://github.com/zeroclaw-labs/zeroclaw/pull/11172), [#11169](https://github.com/zeroclaw-labs/zeroclaw/pull/11169) | Very high — core-parity lane P4/P5, large open PRs |
| **Microsoft Teams channel** | [#11194](https://github.com/zeroclaw-labs/zeroclaw/pull/11194) | Medium — large PR, new channel, not security-critical |
| **Self-serve relay enrollment (`relay claim`)** | [#10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592) | Medium — distinguished contributor, open since Sept 3 |
| **Atomic batch config mutation (`config/set-many`)** | [#10822](https://github.com/zeroclaw-labs/zeroclaw/issues/10822) (closed) | Done — merged via #10824 |
| **Authority recheck foundation** | [#11205](https://github.com/zeroclaw-labs/zeroclaw/pull/11205) | High — new security foundation, opened today |
| **Tsubasa custom-provider docs** | [#11207](https://github.com/zeroclaw-labs/zeroclaw/issues/11207) | Low — docs-only, scope discussion |

**Prediction:** v0.9.0 will ship **RPC/gateway parity**, **plugin runtime foundation**, and **authority recheck security model**. Teams channel may slip to v0.9.1.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Cost tracking broken for major providers** | Anthropic (#9816), OpenRouter (#11204) both report $0.00; budget caps useless | 2 providers, P1/P2 |
| **Data loss on concurrent file operations** | #11136: "silently drop one edit under parallel_tools" — S0 | 1 report, high impact |
| **Security boundaries not honored on resume** | #11197, #11126: admin revocation bypassed via session resume/queue | 2 S0 bugs in 2 days |
| **Release process unreliability** | v0.8.5 crates.io failures; 3 PRs (#11105, #11095, #11091) fixing pipeline | Internal, but blocks users |
| **Docs drift on stable promotion** | #11093: `llms.txt`/`llms-full.txt` out of sync | Fixed, but indicates CI gaps |

**Satisfaction signals:** No positive feedback in data. Users filing S0 bugs suggest production use with high expectations. Contributor JordanTheJet drives multiple tracks (release, plugins, security) — strong maintainer velocity.

---

## 8. Backlog Watch — Stalled / Needing Maintainer Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592) `feat(relay): self-serve enrollment via relay claim` | 25 days | Distinguished contributor, enables operator self-service; needs maintainer review | Open, needs review |
| [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) `fix(runtime): recover from rejected image requests` | 29 days | Agent-loop stability for image-bearing requests; distinguished contributor | Open, needs review |
| [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) `feat(session): atomic session-ownership claim contract` | 32 days | Security foundation for session ownership; shared backend contract | Open, integrated but not merged |
| [#10652](https://github.com/zeroclaw-labs/zeroclaw/pull/10652) `fix(memory): route CLI memory factory through storage-aware resolver` | 22 days | Fixes PostgreSQL/Qdrant CLI memory commands; needs

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*