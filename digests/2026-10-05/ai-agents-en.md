# OpenClaw Ecosystem Digest 2026-10-05

> Issues: 183 | PRs: 500 | Projects covered: 12 | Generated: 2026-10-05 05:14 UTC

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

# OpenClaw Project Digest — 2026-10-05

## 1. Today's Overview
OpenClaw saw **exceptionally high activity** in the last 24 hours: **683 total updates** (183 issues, 500 PRs), with a **near-even split between open and closed items** (91 open issues, 92 closed; 300 open PRs, 200 merged/closed). No new release was cut. The velocity signals a project in **active stabilization mode** — maintainers are processing a large backlog of bug fixes, refactors, and test hardening, while several P0/P1 regressions (update failures, message loss, zombie processes) remain open and block release candidacy. The volume of `clawsweeper:needs-maintainer-review` and `clawsweeper:needs-product-decision` tags indicates decision bottlenecks on architectural questions (plugin trust, cost enforcement, session recovery semantics).

---

## 2. Releases
**No new releases published today.** The latest stable appears to be **2026.9.x** (referenced in issues #144739, #144447, #152275). Multiple update-path regressions (#144739, #144447, #164074, #164113, #164528) are blocking reliable upgrades to 2026.9.4+.

---

## 3. Project Progress (Merged/Closed PRs — 200 items)
Key merged work today clusters around **test reliability, performance, and internal cleanup**:

| PR | Area | Impact |
|----|------|--------|
| [#165218](https://github.com/openclaw/openclaw/pull/165218) | Gateway startup | Moves non-essential maintenance after readiness → reduces update downtime for large Gateways |
| [#165221](https://github.com/openclaw/openclaw/pull/165221) | Sessions/Transcripts | Bounds `sessions.history.source-messages` reads → prevents 100+ MB heap spikes on reader worker |
| [#165332](https://github.com/openclaw/openclaw/pull/165332) | Cron | Serves cron tick session state from workers → removes 360 SQLite statements from Gateway main thread |
| [#165344](https://github.com/openclaw/openclaw/pull/165344) | Gateway | Avoids full display refresh for session member lists → speeds catalog-refresh on member changes |
| [#165150](https://github.com/openclaw/openclaw/pull/165150) | Sessions list | Shares list views & sends runner row updates → eliminates redundant roster selections |
| [#165170](https://github.com/openclaw/openclaw/pull/165170), [#165178](https://github.com/openclaw/openclaw/pull/165178), [#165187](https://github.com/openclaw/openclaw/pull/165187) | macOS/Web UI tests | Replaces wall-clock polls with awaited owners → fixes flaky `macos-swift (packages)` timeouts |
| [#165267](https://github.com/openclaw/openclaw/pull/165267) | Upgrade diagnostics | Retains failing upgrade steps in artifacts → prevents Doctor log budget from hiding root cause |
| [#119055](https://github.com/openclaw/openclaw/pull/119055) | Code Mode | Keeps waiting results durable across retries → fixes session/SQLite ownership boundaries |
| [#161788](https://github.com/openclaw/openclaw/pull/161788) | Agents | Fixes subagent completion into restarted session (`SESSION_WORK_START_CHANGED` retry loop) |
| [#164993](https://github.com/openclaw/openclaw/pull/164993) | Sessions | `sessions_history` reads transcripts for configured ACP owners |

**Refactor wave**: `steipete` opened 7 large refactor PRs today (#165346–#165350) targeting meetings, workboard, iMessage, macOS catalog, and shared plugin metadata — all marked “no user-visible change.”

---

## 4. Community Hot Topics (Most Commented Issues/PRs)

| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) Per-agent cost budget enforcement at gateway | 25 | 1 | **Operational guardrail** — prevent runaway spend without external monitoring; needs product decision on budget model (daily/monthly, hard/soft) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie child processes from hook/tool execution | 18 | 1 | **Runtime stability** — unreaped `openclaw-hooks`, `bash`, `codex` children accumulate → degradation over time; regression |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) CLI-backed subagent `announce-wake` loses tools, model fabricates calls | 15 | 0 | **Subagent protocol correctness** — handoff regression from #117148; CLI-backed paths remain tool-free by design but break expectation |
| [#144502](https://github.com/openclaw/openclaw/issues/144502) WhatsApp TTS voice notes unplayable (48 kHz + Lavf tag) | 12 | 0 | **Media interop** — Baileys/WA Web transport emits audio WhatsApp mobile rejects; codec/container mismatch |
| [#92516](https://github.com/openclaw/openclaw/issues/92516) Self-hosted channel plugins blocked by `openKeyedStore` trust gate | 11 | 2 | **Plugin architecture** — providers work unbundeled, channels don’t; no supported way to trust self-hosted channel plugin |
| [#100121](https://github.com/openclaw/openclaw/issues/100121) Exec/tool failures show “(see attached image)” and suppress model response | 10 | 3 | **Regression 2026.6.11** — three code paths combine to hide errors; message loss in Discord |
| [#164074](https://github.com/openclaw/openclaw/issues/164074) Native update recovery stuck at publication-complete | 7 | 0 | **Update reliability** — candidate startup deadline missed, retained fingerprint change blocks recovery |
| [#144739](https://github.com/openclaw/openclaw/issues/144739) npm update runs 2026.9.3 against schema-17 candidate state | 7 | 0 | **Migration safety** — candidate rehearsal migrates to schema 17 but runs old code against it |
| [#144447](https://github.com/openclaw/openclaw/issues/144447) Git/dev update ends in `managed-service-preflight` | 6 | 0 | **Update flow** — candidate startup deadline recorded, then preflight exits without activating candidate |
| [#164528](https://github.com/openclaw/openclaw/issues/164528) `openclaw update` aborts on strict permission check on stale recovery dirs | 4 | 0 | **Update hygiene** — macOS LaunchAgent; stale dirs trigger EPERM during candidate validation |

**PRs with most discussion signals** (all opened today, comments not yet populated): #165349 (meetings refactor), #165346 (infra simplify), #165332 (cron perf), #165318 (macOS deslop), #164934 (Talk consult correlation tests).

---

## 5. Bugs & Stability — Ranked by Severity

### P0 / Release-Blocking (ux-release-blocker, impact:message-loss, impact:crash-loop)
| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| [#152275](https://github.com/openclaw/openclaw/issues/152275) | Post-commit plugin activation failure leaves model catalog & reply dispatch unavailable until restart | OPEN | No |
| [#144739](https://github.com/openclaw/openclaw/issues/144739) | npm update runs old version against schema-17 candidate state | OPEN | No |
| [#144447](https://github.com/openclaw/openclaw/issues/144447) | Git/dev update ends in `managed-service-preflight` without activating candidate | OPEN | No |
| [#164074](https://github.com/openclaw/openclaw/issues/164074) | Native update recovery stuck at publication-complete | OPEN | No |
| [#164528](https://github.com/openclaw/openclaw/issues/164528) | `openclaw update` aborts on stale recovery dir permission check | OPEN | No |
| [#164113](https://github.com/openclaw/openclaw/issues/164113) | Update fails at `updater-runtime-retention` with `FICLONE EPERM` in unprivileged LXC (seccomp) | CLOSED | [#164113](https://github.com/openclaw/openclaw/pull/164113) (fix-shape-clear) |

### P1 / High Impact (message-loss, session-state, security)
| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Zombie child process leak (hooks/tools) → runtime degradation | OPEN | No |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | CLI-backed subagent announce-wake turns tool-free; model fabricates calls | OPEN | No |
| [#144797](https://github.com/openclaw/openclaw/issues/144797) | Reused `claude-cli` session keeps deleted `--mcp-config`; MCP tools die with HTTP 401 | OPEN | No |
| [#150498](https://github.com/openclaw/openclaw/issues/150498) | Subagent announce run loses child report; raw child text bypasses requester on failure | OPEN | No |
| [#150795](https://github.com/openclaw/openclaw/issues/150795) | `ask_user` after `sessions_yield` never reaches Telegram; all messages refused | OPEN | No |
| [#164250](https://github.com/openclaw/openclaw/issues/164250) | Inbound user message becomes “orphaned” on model 429 rate-limit | OPEN | No |
| [#144594](https://github.com/openclaw/openclaw/issues/144594) | Inter-session messages silently retained in `interrupted` state, no replay/warning | OPEN | No |
| [#161942](https://github.com/openclaw/openclaw/issues/161942) | WhatsApp watchdog reconnect (499) drops in-flight replies with `PlatformMessageNotDispatchedError` | OPEN | No |
| [#157657](https://github.com/openclaw/openclaw/issues/157657) | Plugin reinstall churn invalidates unrelated provider; reply dispatch unpublished ~20 min | CLOSED | No |
| [#109672](https://github.com/openclaw/openclaw/issues/109672) | “Something went wrong” when AWS Guardrail triggered (no logging/fallback) | CLOSED | No |
| [#113466](https://github.com/openclaw/openclaw/issues/113466) | `/new` and `/reset` don’t create new session (only emit hooks) | CLOSED | No |

### P2 / Notable
| Issue | Title | Status | Fix PR? |
|-------|-------|--------|---------|
| [#144527](https://github.com/openclaw/openclaw/issues/144527) | `bundle-mcp`: every isolated cron run leaks session MCP runtime until 256 limit | OPEN | No |
| [#144556](https://github.com/openclaw/openclaw/issues/144556) | Codex Telegram photo follow-ups replay older image attachments | OPEN | Linked PR open |
| [#92516](https://github.com/openclaw/openclaw/issues/92516) | Self-hosted channel plugins can’t use `openKeyedStore` (no trust path) | OPEN | No |
| [#88562](https://github.com/openclaw/openclaw/issues/88562) | `models.json` generator writes `apiKey` as plain string instead of `secret-ref` | OPEN | No |
| [#69110](https://github.com/openclaw/openclaw/issues/69110) | Gateway model identity not passed to delivery hooks → silent model-tag forgery | OPEN | No |
| [#54435](https://github.com/openclaw/openclaw/issues/54435) | `sessions_list` API only returns main session; others missing from dashboard/API | CLOSED | No |
| [#125901](https://github.com/openclaw/openclaw/issues/125901) | Web UI Terminal mode cannot input CJK via IME | CLOSED | No |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) Per-agent cost budget enforcement (daily/monthly caps at gateway) | **Strong ops demand** — 25 comments, labeled `needs-product-decision`; gateway-level enforcement is architecturally clean | Medium — needs product spec; may ship behind flag |
| [#52732](https://github.com/openclaw/openclaw/issues/52732) Per-agent `compaction` / `contextPruning` overrides in `agents.list` | **Config completeness** — currently rejected as unrecognized keys; low complexity | High — straightforward schema extension |
| [#70266](https://github.com/openclaw/openclaw/issues/70266) Use assistant avatar in macOS Talk Mode overlay | **Polish/consistency** — `ui.assistant.avatar` exists but not used in Talk Mode | High — low risk, visible UX win |
| [#97993](https://github.com/openclaw/openclaw/issues/97993) CarPlay support for iOS app | **Platform expansion** — 4 comments, 3 👍; safety use case | Low — requires CarPlay entitlements, audio routing, UI redesign |
| [#153227](https://github.com/openclaw/openclaw/issues/153227) Consequence-bound release receipts beyond tool permission | **Security architecture** — reference impl exists; “prove exact consequence before it becomes real” | Low — research/design phase; `off-meta tidepool` |
| [#129814](https://github.com/openclaw/openclaw/issues/129814) Expire “Always allow” exec approval

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent & Assistant Open-Source Ecosystem (2026-10-05)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **high fragmentation with convergent technical challenges**. Ten active projects span from feature-rich reference implementations (OpenClaw) to specialized forks (PicoClaw, NanoClaw) and emerging contenders (ZeroClaw, CoPaw). All projects are grappling with **session reliability, update/release hygiene, plugin/channel isolation, and cost observability** — indicating a maturing layer where operational robustness now outweighs raw feature velocity. No project has achieved "stable 1.0" semantics; most operate in perpetual beta/release-candidate cycles with calendar or semantic versioning. Community engagement correlates strongly with **multi-channel (Telegram/Discord/Slack) and multi-model (local + cloud) support** — projects lacking these see dormant issue queues.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score |
|---------|--------------|-----------|----------------|--------------|
| **OpenClaw** | 183 | 500 | No release (2026.9.x latest) | 🟡 **Stabilizing** — high velocity but P0 update/message-loss bugs block release |
| **NanoBot** | 7 | 52 | No release | 🟢 **Healthy** — strong merge rate, critical regressions fixed fast |
| **Hermes Agent** | 11 | 50 | No release | 🟢 **Active** — high velocity, systematic bug fixes + a11y/plugin investment |
| **PicoClaw** | 4 | 9 | No release (v0.3.1 latest) | 🟢 **High Maintenance** — 7 bug fixes merged, QQ/OneBot breakage urgent |
| **NanoClaw** | 8 | 22 | **v2026.10.0-rc.1** shipped | 🟡 **Caution** — RC released but 3 high-severity bugs lack fixes |
| **NullClaw** | 5 | 14 | No release | 🟢 **Stabilizing** — platform hardening (Android/Docker), CI unblocked |
| **IronClaw** | 0 | 5 (all Dependabot) | No release | ⚪ **Dormant** — dependency hygiene only, no human activity |
| **LobsterAI** | 5 | 6 | No release | 🟡 **Stabilizing** — scheduler/MCP bugs critical, renderer polish merged |
| **CoPaw (QwenPaw)** | 13 | 12 | No release (v2.2.2b4) | 🟡 **Under Pressure** — Critical memory/plugin isolation bugs, active first-time contributors |
| **ZeroClaw** | 10 | 50 | Targeting **v0.8.6** | 🟡→🟢 **Trending Green** — config durability fixes in flight, clear patch scope |

**Note**: Moltis and ZeptoClaw had zero activity.

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Scale & Breadth**: Largest codebase (683 updates/24h), most channels (WhatsApp, iMessage, Telegram, Discord, Slack, QQ, DingTalk), deepest session/transcript infrastructure.
- **Architectural Maturity**: Explicit session ownership, plugin trust model, gateway-level cost enforcement design (#42475), cron/worker separation — peers are still building these.
- **Ecosystem Gravity**: Referenced by NanoClaw, PicoClaw, LobsterAI as upstream or integration target; plugin/channel protocols de facto standards.

### Technical Approach Differences
| Dimension | OpenClaw | Typical Peer Approach |
|-----------|----------|----------------------|
| **Session Model** | First-class `sessions_history`, transcript replay, interrupted-state recovery | Ad-hoc conversation logs; few support cross-session resume |
| **Plugin/Channel Trust** | `openKeyedStore` gate, signed plugins, bundled vs. self-hosted distinction | Most allow all or none; NullClaw/PicoClaw building trust now |
| **Update Mechanism** | Multi-stage candidate rehearsal, fingerprint retention, Doctor diagnostics | Simple binary swap (NanoClaw channels, ZeroClaw daemon) or manual |
| **Cost Control** | Gateway-level per-agent budget enforcement (designed, needs product decision) | Per-call logging only (NanoBot #5266), or absent |

### Community Size Comparison
- **OpenClaw**: ~180 issues/24h, 500 PRs — **order of magnitude larger** than next (ZeroClaw 50 PRs, Hermes 50 PRs).
- **Contributor Breadth**: `clawsweeper` bot tags indicate structured triage; `steipete` driving 7 refactor PRs/day — signals paid maintainer team.
- **Downstream Dependents**: At least 4 projects in this set directly integrate or fork OpenClaw components.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Session/State Durability** | OpenClaw (#152275, #164074), NanoBot (#5545, #5483), Hermes (#73683), ZeroClaw (#11432, #11519), CoPaw (#8109) | Crash-safe session recovery, no message loss on update/restart, correct cwd/agent ownership |
| **Update/Release Hygiene** | OpenClaw (5 P0 update bugs), NanoClaw (channel-based RC), ZeroClaw (v0.8.6 patch), PicoClaw (ARM updater fix) | Atomic rollback, schema migration safety, staged candidate validation, non-root Docker support |
| **Plugin/Channel Isolation** | OpenClaw (#92516), NullClaw (#953, #1002), PicoClaw (#3401), CoPaw (#7840), Hermes (#133114) | Bounded event loops, nil-safe reload, trust gates for self-hosted channels, WebSocket connect timeouts |
| **Cost/Token Observability** | OpenClaw (#42475), NanoBot (#5266), ZeroClaw (#8539), CoPaw (#8103), Hermes (#133106) | Per-call token logging, fallback model notification, cost_usd in AgentEnd, budget enforcement |
| **Multi-Model/Local-First UX** | ZeroClaw (#5287 `local_small`), NanoClaw (#3643 30-min kill ceiling), CoPaw (#7026 DeepSeek kwargs), LobsterAI (#856 per-task model) | Configurable context budgets, local model streaming without hard ceilings, model-specific param passing |
| **Mobile/Edge Deployment** | NullClaw (#966, #1018 Termux), PicoClaw (#3399 ARM32), ZeroClaw (#11525 Android), CoPaw (#8106 container plugin install) | Non-root containers, ARM32/64 binary selection, stdio buffering fixes, WebView2 cache resilience |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architectural Signature |
|---------|---------------|-------------|-------------------------|
| **OpenClaw** | **Enterprise-grade gateway** — multi-tenant, multi-channel, plugin marketplace, operational guardrails | Teams running fleets of agents across Slack/Telegram/WhatsApp/iMessage | Gateway + worker separation, SQLite-backed session log, capability-based plugin trust |
| **NanoBot** | **Observability-first single-user assistant** — token transparency, subagent orchestration, WebUI polish | Power users / developers who audit every token | Per-call token hooks, subagent tooling, WebUI as first-class client, provider capability declarations |
| **Hermes Agent** | **Developer productivity agent** — cron, kanban, terminal, desktop, plugin catalog | Engineers automating repos, CI, docs, research | Rust/Zig core, `AGENTS.md` context budget, skill discovery, cron cancellation, a11y |
| **PicoClaw** | **Chinese ecosystem gateway** — QQ/OneBot/DingTalk/WeChat native, ARM SBC deployment | Chinese communities, Raspberry Pi / SBC self-hosters | Go-based, NapCat/OneBot adapters, ARM32/64 binary matrix, stream SDK workarounds |
| **NanoClaw** | **Container-native, skill-driven** — Baileys/WhatsApp, OneCLI, calendar versioning | Users wanting Docker-first, skill-store UX, Telegram/WhatsApp focus | Gateway in container, skill manifest (`/add-whatsapp`), release channels (stable/beta) |
| **NullClaw** | **Minimal, correct, embeddable runtime** — Zig, bounded resources, non-root, Android/Termux | Embedders, mobile Linux, security-conscious operators | Zig stdlib, curl fallback on Android, 512KiB→2MiB stack tuning, diagnostics flags |
| **IronClaw** | **WASM/NEAR smart-contract agent** — blockchain tooling, Rust/WASM runtime | NEAR protocol developers, on-chain automation | `wasmtime`/`wit-component` stack, Dependabot-only maintenance |
| **LobsterAI** | **Desktop AI workstation** — macOS-first, scheduled tasks, MCP integration, preset agents | Knowledge workers on macOS, Notion/Obsidian users | Electron/Tauri desktop, Bridge spawn env propagation, MCP tool picker, scheduler |
| **CoPaw (QwenPaw)** | **Qwen-ecosystem IDE companion** — console UI, plugin sandbox, OpenCode compatibility | Qwen model users, VS Code / OpenCode migrators | Console boot splash, plugin event-loop (shared = bug), `x-opencode-session` header |
| **ZeroClaw** | **Runtime-as-a-library** — composition boundaries, config durability, daemon/session hygiene | Framework builders, local-first operators, Android/Termux | Core Team approval for composition, config save validation, typed stop taxonomy |

---

## 6. Community Momentum & Maturity

### Tier 1: **High Velocity, Stabilizing** (OpenClaw, ZeroClaw, Hermes, NanoBot)
- **OpenClaw**: Massive throughput but **release-blocked** by 6 P0 update/message-loss bugs. Stabilization sprint evident.
- **ZeroClaw**: 50 PRs/24h, clear v0.8.6 scope, **config durability fixes merging** — trending toward release.
- **Hermes**: 50 PRs, systematic refactors (ruff, AGENTS.md), a11y/plugins — **maturing developer tool**.
- **NanoBot**: 14/52 PRs merged, critical provider/channel fixes same-day — **healthy iteration cadence**.

### Tier 2: **Focused Maintenance / Niche Leaders** (PicoClaw, NullClaw, NanoClaw)
- **PicoClaw**: 7 bug fixes merged, **QQ/OneBot breakage** is user-facing emergency; ARM32 fix shipped.
- **NullClaw**: Platform hardening (Android, Docker, WebSocket bounds) — **release-ready patch set**.
- **NanoClaw**: **RC shipped** but 3 high-severity bugs (Telegram, container ceiling, scheduler) unfixed — **premature RC risk**.

### Tier 3: **Stabilizing Under Pressure** (CoPaw, LobsterAI)
- **CoPaw**: Critical memory/plugin isolation bugs (#7722, #7840) **no PRs yet**; first-time contributors carrying UI fixes.
- **LobsterAI**: Scheduler bugs **7 months old** (#837, #850); MCP fixes merged but scheduler neglected — **maintainer attention gap**.

### Tier 4: **Dormant / Maintenance-Only** (IronClaw, Moltis, ZeptoClaw)
- **IronClaw**: Only Dependabot; WASM toolchain PR stale 43 days — **no active feature work**.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Session continuity > chat history** | 6/10 projects fixing session recovery, cwd leakage, transcript replay, interrupted-state handling | **Invest in durable session layer** — users expect pause/resume across updates, devices, crashes. |
| **Gateway-level cost governance** | OpenClaw designing per-agent budgets; NanoBot/ZeroClaw/CoPaw demanding token visibility; Hermes rescaling Anthropic usage | **Build observability first, enforcement second** — operators cannot adopt without audit trail. |
| **Plugin/channel sandboxing is non-negotiable** | CoPaw event-loop freeze, NullClaw WebSocket bounds, OpenClaw trust gate, PicoClaw nil-channel panic | **Design isolation from day one** — retrofitting causes data loss and security CVEs (Baileys pin in NanoClaw). |
| **Local-first / edge deployment driving architecture** | ZeroClaw `local_small`, NanoClaw 30-min kill ceiling, NullClaw Termux, PicoClaw ARM32, CoPaw container install | **Assume constrained environments** — no hardcoded timeouts, configurable resource ceilings, non-root containers. |
| **Update mechanisms becoming a product feature** | OpenClaw Doctor diagnostics, NanoClaw release channels, ZeroClaw daemon recovery, NullClaw macOS snapshot race | **Treat update as critical path** — staged candidates, rollback artifacts, channel selection (stable/beta). |
| **Multi-model routing as table stakes** | LobsterAI per-task model, CoPaw DeepSeek kwargs, Hermes Bedrock gap, NanoBot provider capabilities | **Abstract model differences** — capability declarations, parameter translation, fallback transparency. |
| **Desktop/mobile parity expected** | Hermes a11y, LobsterAI macOS scheduler, NullClaw Termux, CoPaw WebView2, PicoClaw QQ mobile | **Invest in platform-specific UX** — IME, clipboard, notifications, CarPlay/Watch — not just CLI/Web. |

---

## Summary for Decision-Makers

- **OpenClaw remains the reference implementation** — largest scope, deepest operational tooling, but **release velocity blocked by update-path regressions**. Adopters should track 2026.9.4+ stabilization.
- **ZeroClaw and NullClaw show strongest "runtime-as-library" trajectory** — clean composition boundaries, config durability, embeddability. Best bets for framework builders.
- **NanoBot leads on observability/subagent UX** — token logging, subagent tooling, WebUI polish. Reference for single-user assistant products.
- **PicoClaw and NanoClaw dominate Chinese/Telegram/WhatsApp niches** — but QQ/OneBot breakage (PicoClaw) and Telegram underscore bug (NanoClaw) show **upstream adapter fragility**.
- **CoPaw and LobsterAI need maintainer triage on critical bugs** — memory/plugin isolation (CoPaw) and scheduler deadlocks (LobsterAI) are user-facing emergencies.
- **IronClaw, Moltis, ZeptoClaw are effectively inactive** — do not depend on them for production.

**Recommendation**: For new projects, **compose from ZeroClaw/NullClaw runtime + NanoBot observability + OpenClaw channel adapters** rather than forking any single monolith. The ecosystem is converging on **modular, session-centric, cost-aware architectures** — but no single project has fully delivered it yet.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-10-05

## 1. Today's Overview
NanoBot shows **high development velocity** with 52 pull requests updated and 7 issues touched in the last 24 hours. The project is in active feature development and bug-fixing mode: 14 PRs were merged/closed, addressing provider regressions, WebUI stability, session integrity, and channel notifications. No new release was cut today. The open PR queue (38) includes several long-running, conflict-marked efforts (provider capability refactor, subagent messaging, MCP schema budgeting) that signal upcoming architectural shifts. Community engagement is concentrated on token-usage observability (#5266, 13 comments) and silent background operations (#5900, #6029).

## 2. Releases
**No new releases published today.**

## 3. Project Progress — Merged / Closed PRs (Last 24h)
| PR | Area | Summary |
|----|------|---------|
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) | Subagent / Session | Added session-owned subagent creation, messaging, inspection, targeted cancellation, and live task observations via a new `subagent` tool. WebUI now retains progress/results under the originating request. |
| [#6005](https://github.com/HKUDS/nanobot/pull/6005) | Providers | Fixed `reasoningEffort` incorrectly dropping `temperature` for all 38 `openai_compat` providers. Temperature is now preserved for compatible models (e.g., Mistral) while retaining the exclusion for o1/o3/o4. |
| [#6062](https://github.com/HKUDS/nanobot/pull/6062) | Channels | Implements chat-channel notifications (QQ, Telegram, Discord, Slack…) when a fallback model serves a turn, closing [#6031](https://github.com/HKUDS/nanobot/issues/6031). Uses existing observer hook to publish `TurnModelUpdatedEvent` beyond WebSocket. |
| [#6058](https://github.com/HKUDS/nanobot/pull/6058) / [#6059](https://github.com/HKUDS/nanobot/pull/6059) / [#6061](https://github.com/HKUDS/nanobot/pull/6061) | WebUI | Series of mobile/accessibility fixes: restore sidebar menu focus on Escape, dismiss drawer on current-topic selection, and fix focus loss after submenu Escape. |
| [#6054](https://github.com/HKUDS/nanobot/pull/6054) | Docs | Corrected Git repository layout in memory guide (workspace root vs `memory/`) and fixed history-search example to incrementally read JSONL with proper tail slice. |
| [#5900](https://github.com/HKUDS/nanobot/issues/5900) (issue closed) | Channels / Logging | Silent context compaction (no channel notification) and reduced WeChat polling log verbosity implemented. |

**Net effect:** Provider compatibility restored, subagent UX significantly expanded, channel observability improved, and mobile WebUI polished.

## 4. Community Hot Topics
| Item | Comments | Signal |
|------|----------|--------|
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) **Logs about token consumption** | 13 👍 | **Top pain point**: users see “millions of tokens burned in 2 hours” with zero visibility. Request: per-call token logging (prompt/completion/total) with timestamps and model tags. |
| [#6029](https://github.com/HKUDS/nanobot/issues/6029) **Silent context compaction / suppress broadcasts** | 1 | Duplicate of #5900; users want background idle/dream cycles to compact *without* spamming chat channels (“Compressing context…”). |
| [#6031](https://github.com/HKUDS/nanobot/issues/6031) **Notify channels on fallback model** | 1 | Fallback works but is invisible outside WebUI; PR [#6062](https://github.com/HKUDS/nanobot/pull/6062) already merged. |
| [#6008](https://github.com/HKUDS/nanobot/issues/6008) **Sidebar state wiped after failed fetch** | 1 | WebUI silently falls back to default state on initial fetch failure, then persists user mutations to that stale default. PR [#6009](https://github.com/HKUDS/nanobot/pull/6009) open. |

**Underlying needs:**  
- **Cost observability** — operators cannot audit or optimize spend without granular token logs.  
- **Background invisibility** — maintenance cycles (compaction, dreaming) must not leak into user-facing channels.  
- **Failover transparency** — multi-channel users need to know *which* model actually answered.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P1 (Data loss risk)** | [#5545](https://github.com/HKUDS/nanobot/pull/5545) Stale `Session.save()` recreates deleted sessions | Open (conflict) | #5545 |
| **P1 (Data loss risk)** | [#5483](https://github.com/HKUDS/nanobot/pull/5483) Deleted sessions recreated by delayed cross-session messages | Open (conflict) | #5483 |
| **P2 (Regression)** | [#6002](https://github.com/HKUDS/nanobot/issues/6002) `reasoningEffort` drops `temperature` for 38 providers | **Closed** | [#6005](https://github.com/HKUDS/nanobot/pull/6005) ✅ |
| **P2 (UX break)** | [#6008](https://github.com/HKUDS/nanobot/issues/6008) Sidebar state wiped after failed initial fetch | Open | [#6009](https://github.com/HKUDS/nanobot/pull/6009) |
| **P2 (Integration)** | [#6024](https://github.com/HKUDS/nanobot/issues/6024) Obsidian CLI “unable to find Obsidian” under nanobot (XDG_RUNTIME_DIR) | **Closed** | — (env fix) |
| **P2 (Channel)** | [#6031](https://github.com/HKUDS/nanobot/issues/6031) Fallback model silent on chat channels | **Closed** | [#6062](https://github.com/HKUDS/nanobot/pull/6062) ✅ |
| **P2 (Document)** | [#6060](https://github.com/HKUDS/nanobot/pull/6060) XLSX cells beyond declared dimensions dropped | Open | #6060 |

**Stability note:** Two session-persistence bugs (#5545, #5483) remain open with conflicts — they threaten data integrity and should be prioritized for the next patch.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Per-call token logging** (prompt/completion/total, timestamp, model) | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | **High** — 13 comments, direct cost impact, low implementation risk. |
| **Silent background compaction** (config flag to suppress channel broadcasts) | [#5900](https://github.com/HKUDS/nanobot/issues/5900), [#6029](https://github.com/HKUDS/nanobot/issues/6029) | **High** — already partially done (#5900 closed), needs config toggle. |
| **Scheduled-task chat binding in WebUI** | [#6057](https://github.com/HKUDS/nanobot/pull/6057) | **Medium** — PR open, UI control + gateway op ready. |
| **Local WebUI extension surface** (manifest-based, scoped routes) | [#6032](https://github.com/HKUDS/nanobot/pull/6032) | **Medium** — security-sensitive, needs review. |
| **MCP schema byte budget** (opt-in, lexical selection) | [#5388](https://github.com/HKUDS/nanobot/pull/5388) | **Low-Medium** — long-open, conflict, opt-in reduces risk. |
| **Session-scoped `focus` persistence** | [#5537](https://github.com/HKUDS/nanobot/pull/5537) | **Medium** — solves continuity (#3292), PR open. |
| **Declarative Responses capabilities** (provider routing, reasoning replay) | [#5204](https://github.com/HKUDS/nanobot/pull/5204) | **Low** — large refactor, P1 priority but conflicted since Aug. |

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Uncontrollable token burn** | #5266: “millions of tokens in 2 hours, no activity” | Blocks production adoption; users cannot audit or budget. |
| **Noisy background ops** | #5900, #6029: “Compressing context…” spams WeChat/WhatsApp | Degrades UX in shared channels; users disable compaction. |
| **Invisible failover** | #6031: fallback model switches silently on Telegram/Slack | Users lose trust; cannot debug quality changes. |
| **WebUI state fragility** | #6008: sidebar mutations lost after fetch failure | Data loss perception; discourages WebUI reliance. |
| **Obsidian CLI broken in desktop context** | #6024: `XDG_RUNTIME_DIR` not propagated | Blocks desktop→CLI workflow; workaround only via terminal. |
| **Positive** | Subagent tooling (#5985), mobile WebUI polish (#6058–61), provider fix (#6005) | Advanced users gain powerful orchestration; mobile usability improved. |

## 8. Backlog Watch — Stale / High-Value Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) `refactor(providers): declare Responses capabilities` | 65 days (since 2026-08-01) | **P1 refactor** — replaces name-based checks with declarative profiles for OpenAI/Copilot/DeepSeek. Unblocks future provider additions and reasoning-model handling. Conflicted; needs rebase/decision. |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) `feat(agent): budget model-visible MCP schemas` | 53 days (since 2026-08-13) | Controls context explosion from tool schemas. Opt-in, but conflicted; review needed to merge or close. |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) `fix(subagent): mark partial completion results` | 69 days (since 2026-07-28) | Subagent UX completeness — pending counts, model-only notices. Conflicted; blocks clean subagent UX. |
| [#5846](https://github.com/HKUDS/nanobot/pull/5846) `fix(agent): trace BUILD substage latency` | 14 days (since 2026-09-21) | Observability foundation — structured DEBUG timing for every BUILD substage. Prerequisite for #5266 token logging. |
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) **Token consumption logging** | 60 days (since 2026-08-06) | Highest-comment issue. No PR yet; requires instrumentation in provider/agent layer. Should be paired with #5846. |

---

**Health Indicator:** 🟢 **Active / Healthy** — High merge rate (14/52 PRs), critical regressions fixed quickly (#6002, #6031), but two P1 session bugs and the token-observability epic (#5266) remain open. Next release should prioritize #5545, #5483, and a token-logging MVP.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-10-05

## 1. Today's Overview
Hermes Agent saw **high velocity** on 2026-10-05 with **50 PRs updated** (38 open, 12 merged/closed) and **11 active issues** — all opened or updated today except two long-running items. The day’s work clusters around **bug fixes** (tool_search compatibility, cron credit handling, terminal workdir semantics, Bedrock provider gaps, checkpoint permissions, plugin race conditions) and **incremental feature work** (cron cancellation, git-state pinning for cron, kanban feasibility gates, desktop accessibility, new plugins). No release was cut.

---

## 2. Releases
**No new releases today.**

---

## 3. Project Progress — Merged/Closed PRs (12 total)
Only one closed PR appears in the top-20 list; the remaining 11 merged/closed PRs are not shown in the excerpt but are reflected in the aggregate count.

| PR | Type | Summary |
|----|------|---------|
| [#133111](https://github.com/NousResearch/hermes-agent/pull/133111) | **feat(pm)** | Pinned **llama.cpp b11370** across all backends (cpu/cuda/vulkan/hip/metal); Windows cudart zips byte-identical. |

*Other 11 merged PRs not individually listed in the top-20 comment-ranked view.*

---

## 4. Community Hot Topics (Most Comments / Engagement)

### Issues
| Issue | Comments | Area | Core Need |
|-------|----------|------|-----------|
| [#23972](https://github.com/NousResearch/hermes-agent/issues/23972) | 5 | **refactor / agent** | Systematic **ruff complexity reduction** (C, PLR rules) — multi-PR tracking issue open since May. |
| [#133057](https://github.com/NousResearch/hermes-agent/issues/133057) | 4 | **feature / cron** | **`hermes cron cancel JOB_ID`** — on-demand termination of stuck in-flight cron runs (network hangs, wedged scripts). |
| [#73683](https://github.com/NousResearch/hermes-agent/issues/73683) | 3 | **bug / terminal / sessions** | `terminal` tool’s `workdir=` **permanently mutates session cwd** despite being documented as per-command. Visible in desktop session-folder display. |
| [#133113](https://github.com/NousResearch/hermes-agent/issues/133113) | 1 | **bug / cli / duplicate** | Kanban PR acceptance **misclassifies 403 (plan-gated required-checks) as auth failure** — private repo admins cannot close contracts. |
| [#133107](https://github.com/NousResearch/hermes-agent/issues/133107) | 1 | **bug / tools** | `tool_search` **rejects singular `query` key** even though schema promises “single string accepted”. Breaks older callers (cron sessions). |

### PRs
Comment counts are not populated in the feed (`undefined`), so hot PRs cannot be ranked by discussion volume today.

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue | Summary | Fix PR Exists? |
|----------|-------|---------|----------------|
| **P2** | [#73683](https://github.com/NousResearch/hermes-agent/issues/73683) | `terminal workdir=` **permanently changes session cwd** (doc says per-command) | ❌ |
| **P2** | [#133107](https://github.com/NousResearch/hermes-agent/issues/133107) | `tool_search` **rejects legacy `query` key** — breaks cron/deferred tools | ✅ [#133110](https://github.com/NousResearch/hermes-agent/pull/133110), [#133112](https://github.com/NousResearch/hermes-agent/pull/133112) |
| **P2** | [#133106](https://github.com/NousResearch/hermes-agent/issues/133106) | **Anthropic usage ≤1% rescaled ×100** (1% → 100%) in `account_usage` | ❌ |
| **P2** | [#133120](https://github.com/NousResearch/hermes-agent/issues/133120) | **Bedrock**: iteration-limit summary **missing `bedrock_converse` arm** → falls to OpenAI client, lost | ❌ |
| **P2** | [#133096](https://github.com/NousResearch/hermes-agent/issues/133096) | `checkpoint _run_git` **PermissionError on non-traversable dir** (e.g., `/root` mode 0700) | ❌ |
| **P2** | [#132751](https://github.com/NousResearch/hermes-agent/pull/132751) | **Soft interrupts mis-attributed** to user; synthetic interrupt close shown to user | ✅ (PR open) |
| **P2** | [#133109](https://github.com/NousResearch/hermes-agent/pull/133109) | Cron **credit/budget failures** (HTTP 402, spend limits) create **noisy per-attempt incidents** | ✅ (PR open) |
| **P2** | [#125000](https://github.com/NousResearch/hermes-agent/pull/125000) | **Secrets exposed** when reading well-known credential files (`.netrc`, AWS, npm, pip, pgpass, git-credentials) | ✅ (PR open) |
| **P3** | [#129579](https://github.com/NousResearch/hermes-agent/issues/129579) | Kanban PR acceptance **reports unreadable private repo as `infra` not `auth`** | ❌ |
| **P3** | [#133113](https://github.com/NousResearch/hermes-agent/issues/133113) | Duplicate of #129579 / #133113 — same root cause | ❌ |
| **P3** | [#133114](https://github.com/NousResearch/hermes-agent/pull/133114) | **Plugin discovery dict-size race** under load-deadline timeout | ✅ (PR open) |
| **P2** | [#133094](https://github.com/NousResearch/hermes-agent/pull/133094) | **Mermaid bare `<br>`** breaks SVG `img` load in desktop | ✅ (PR open) |
| **P2** | [#132925](https://github.com/NousResearch/hermes-agent/pull/132925) | **Skill discovery** picks up `_prefixed` dirs (archived skills) | ✅ (PR open) |
| **P3** | [#132647](https://github.com/NousResearch/hermes-agent/pull/132647) | **Windows gateway respawn** loses `--profile default` pin | ✅ (PR open) |
| **P2** | [#132361](https://github.com/NousResearch/hermes-agent/pull/132361) | `hermes update` **git/ZIP swap not crash-safe** | ✅ (PR open) |
| **P3** | [#133117](https://github.com/NousResearch/hermes-agent/pull/133117) | **Telegram media timeouts** fixed budgets; need scaling by payload size | ✅ (PR open) |
| **P3** | [#133119](https://github.com/NousResearch/hermes-agent/pull/133119) | **Windows update** marks supervisor-restored dashboards as failed | ✅ (PR open) |

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Area | Signal | Likelihood for Next Version |
|----------|------|--------|-----------------------------|
| [#133057](https://github.com/NousResearch/hermes-agent/issues/133057) | **cron** | **`hermes cron cancel JOB_ID`** — strong ops need (stuck jobs, network hangs) | High — clear CLI gap, 4 comments |
| [#133097](https://github.com/NousResearch/hermes-agent/issues/133097) | **cron / config** | **Cron jobs pin git state (branch) at creation** — prevents feature-branch drift incidents | Medium — needs-decision label, multi-profile fleet use-case |
| [#133099](https://github.com/NousResearch/hermes-agent/issues/133099) | **kanban / cli** | **Decomposer feasibility gate** — validate endpoint/cred/service before spawning children | Medium — patch attached, reduces wasted child cards |
| [#133115](https://github.com/NousResearch/hermes-agent/pull/133115) | **desktop / plugin** | **`echarts-in-chat` plugin** — inline chart rendering via directive syntax | High — catalog addition, self-contained |
| [#133116](https://github.com/NousResearch/hermes-agent/pull/133116) | **desktop / a11y** | **Screen-reader support for composer suggestions** — listbox roles, accessible names | High — a11y compliance, low risk |
| [#125100](https://github.com/NousResearch/hermes-agent/pull/125100) | **plugin catalog** | **Hermes Slash Router** — TypeSafe slash-command routing for Desktop | Medium — standalone plugin, pinned commit |
| [#132926](https://github.com/NousResearch/hermes-agent/pull/132926) | **plugin catalog** | **evalroute v0.6.2** — dependency bump (`evalroute>=0.8,<0.9`) | High — routine catalog bump |
| [#133118](https://github.com/NousResearch/hermes-agent/pull/133118) | **agent / cli / gateway / tui / desktop** | **AGENTS.md loads whole** — root hub 11.8k (was 38.7k), CI enforces context budget | Medium — large refactor, CI-reviewed, cross-component |

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Cron jobs cannot be cancelled mid-run** | [#133057](https://github.com/NousResearch/hermes-agent/issues/133057) — “wedged network I/O, stuck scripts” | Ops blocker for long-running scheduled work |
| **`tool_search` breaks older callers** | [#133107](https://github.com/NousResearch/hermes-agent/issues/133107) — cron sessions send singular `query` | Regression for deferred/background tool use |
| **Terminal `workdir=` leaks into session state** | [#73683](https://github.com/NousResearch/hermes-agent/issues/73683) — desktop shows wrong folder | UX confusion, session pollution |
| **Private repo auth misclassified as infra** | [#129579](https://github.com/NousResearch/hermes-agent/issues/129579), [#133113](https://github.com/NousResearch/hermes-agent/issues/133113) | Users can’t self-serve credential fixes |
| **Bedrock provider second-class in iteration-limit handling** | [#133120](https://github.com/NousResearch/hermes-agent/issues/133120) | Summary lost on max-iterations → degraded agent loops |
| **Checkpoint fails on permission-restricted dirs** | [#133096](https://github.com/NousResearch/hermes-agent/issues/133096) — `/root` 0700 | Blocks snapshots in locked-down environments |
| **Anthropic usage metrics inflated 100×** | [#133106](https://github.com/NousResearch/hermes-agent/issues/133106) | Billing/cost visibility broken for low-usage sessions |
| **Plugin discovery races under load** | [#133114](https://github.com/NousResearch/hermes-agent/pull/133114) | Potential crashes during gateway config reload |
| **Mermaid diagrams break in desktop** | [#133094](https://github.com/NousResearch/hermes-agent/pull/133094) | Rendering failures for label-break diagrams |

**Positive signals**: Active plugin ecosystem (echarts, slash-router, evalroute), a11y investment, systematic refactors (AGENTS.md, ruff complexity), and crash-safe update path.

---

## 8. Backlog Watch — Stale / High-Leverage Items Needing Maintainer Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#23972](https://github.com/NousResearch/hermes-agent/issues/23972) | **~5 months** (opened 2026-05-11) | **Ruff complexity reduction tracker** — 5 comments, maps multiple PRs; technical debt reduction across agent codebase | Open, active tracking |
| [#73683](https://github.com/NousResearch/hermes-agent/issues/73683) | **~2.5 months** (opened 2026-07-28) | **Terminal `workdir=` semantic bug** — P2, affects

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-10-05

## 1. Today's Overview
PicoClaw shows **high maintenance velocity** with 9 PRs updated in the last 24 hours (7 merged/closed, 2 open) and 4 issues updated (3 open, 1 closed). The project is actively addressing stability regressions (DingTalk panic, config persistence, ARM updater), multi-agent context handling, and channel-level bugs. No new releases were cut, but a batch of critical fixes has landed on `main`, suggesting a v0.3.2 or v0.4.0 release is imminent. Community engagement remains modest (low comment/reaction counts), but contributors are delivering well-scoped, reviewable changes.

## 2. Releases
**No new releases** in the last 24 hours. The last tagged release is v0.3.1. The merged fixes (#3400, #3401, #3402, #3403, #3399, #3353, #3233) collectively resolve config migration, ARM binary selection, channel reload crashes, agent routing, and tool-feedback leaks — all candidates for a near-term patch release.

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3403](https://github.com/sipeed/picoclaw/pull/3403) | **Bug fix** | Async tool results (`spawn`) now delivered to originating session/agent instead of default agent's main session. | **High** — fixes cross-chat result leakage in multi-user/agent deployments. |
| [#3401](https://github.com/sipeed/picoclaw/pull/3401) | **Bug fix** | `Manager.Reload` made synchronous & nil-safe; prevents gateway panic when enabled channel lacks instance (e.g., Telegram without token). | **High** — eliminates startup/reload crash on misconfigured channels. |
| [#3400](https://github.com/sipeed/picoclaw/pull/3400) | **Bug fix** | Config persistence now retains all `api_keys`, `enabled` flag, and correct fallback ordering for multi-key models. | **High** — prevents silent loss of fallback keys & enabled state on every save/migration. |
| [#3399](https://github.com/sipeed/picoclaw/pull/3399) | **Bug fix** | Updater now selects correct 32-bit ARM asset (`armv6`/`armv7`) instead of mistakenly picking `arm64`. | **Medium** — fixes broken auto-update on 32-bit ARM devices (Pi Zero, older SBCs). |
| [#3402](https://github.com/sipeed/picoclaw/pull/3402) | **Bug fix** | Context managers resolve owning agent for routed (non-default) agents; rebased from #3316. | **Medium** — restores correct agent-scoped context for multi-agent routing. |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | **Bug fix** | Tool feedback animations bounded: stop after 5 min or on first edit error. | **Medium** — prevents indefinite message edits & resource leaks. |
| [#3233](https://github.com/sipeed/picoclaw/pull/3233) | **Compat fix** | Backward-compatibility fix for PR #3222 (details in PR). | **Low/Medium** — ensures smooth upgrade path for existing configs. |

**Net effect:** 7 merged PRs, all bug/compat fixes, zero new features. The `main` branch is significantly more stable than v0.3.1.

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [#3394](https://github.com/sipeed/picoclaw/issues/3394) — **QQ bot API mismatch** | 2 comments, updated 2026-10-04 | QQ channel adapter broken after upstream API change; users on NapCat/OneBot cannot receive/send messages. **Urgent for Chinese-community users.** |
| [#3395](https://github.com/sipeed/picoclaw/issues/3395) / [#3396](https://github.com/sipeed/picoclaw/pull/3396) — **OneBot auto-reaction toggle** | 1 comment (issue), PR open | Users want **opt-in** control over hardcoded `set_msg_emoji_like` (emoji 289) on every group message. PR #3396 adds `reaction_enabled: false` default. |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) — **OpenAI Responses API migration** | 0 comments, open since 2026-09-17 | Major provider refactor: switch from Chat Completions to Responses API. Blocked on review/testing; enables tool-use streaming, native `web_search`, etc. |
| [#3392](https://github.com/sipeed/picoclaw/issues/3392) — **CLAassistant signature detection** | 2 comments | Bot fails to detect signed CLA on PR #3381; blocks merge of Responses API work. Infra/maintainer issue. |

**Pattern:** Chinese-channel (QQ/OneBot/DingTalk) compatibility dominates user-reported pain; core provider upgrades (OpenAI Responses) are stalled on CI/bot tooling.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **Critical** | DingTalk stream SDK panic on reconnect (`send on closed channel`) — [#3382](https://github.com/sipeed/picoclaw/issues/3382) | **Closed (stale)** | No fix PR; issue marked stale but panic persists on v0.3.1 + `dingtalk-stream-sdk-go` v0.9.1. |
| **Critical** | Channel reload panic on nil channel (Telegram without token) — [#3401](https://github.com/sipeed/picoclaw/pull/3401) | **Merged** | Fixed in #3401. |
| **High** | Config migration loses multi-key `api_keys`, `enabled`, fallback order — [#3400](https://github.com/sipeed/picoclaw/pull/3400) | **Merged** | Fixed in #3400. |
| **High** | Async tool results routed to wrong session/agent — [#3403](https://github.com/sipeed/picoclaw/pull/3403) | **Merged** | Fixed in #3403. |
| **Medium** | Updater installs arm64 binary on 32-bit ARM — [#3399](https://github.com/sipeed/picoclaw/pull/3399) | **Merged** | Fixed in #3399. |
| **Medium** | Tool feedback animation leaks (indefinite edits) — [#3353](https://github.com/sipeed/picoclaw/pull/3353) | **Merged** | Fixed in #3353. |
| **Medium** | QQ/OneBot channel broken after upstream API change — [#3394](https://github.com/sipeed/picoclaw/issues/3394) | **Open** | No PR yet; needs adapter update. |
| **Low** | CLAassistant bot doesn't detect CLA signature — [#3392](https://github.com/sipeed/picoclaw/issues/3392) | **Open** | Infra issue; blocks #3381. |

**Note:** The DingTalk panic (#3382) was closed as *stale* but **no fix merged** — maintainers should verify if upstream SDK update or local workaround is needed before next release.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **OneBot `reaction_enabled` toggle** (opt-in ack emoji) | [#3395](https://github.com/sipeed/picoclaw/issues/3395) + [#3396](https://github.com/sipeed/picoclaw/pull/3396) | **High** — PR ready, trivial config addition, addresses spammy behavior. |
| **OpenAI Responses API support** | [#3381](https://github.com/sipeed/picoclaw/pull/3381) | **Medium-High** — large refactor, but strategic; blocked on CLA bot & review. |
| **QQ/OneBot adapter update for new API** | [#3394](https://github.com/sipeed/picoclaw/issues/3394) | **High** — user-facing breakage; likely hotfix or v0.3.2. |
| **Multi-key model config persistence** | Implicit in [#3400](https://github.com/sipeed/picoclaw/pull/3400) | **Done** — merged, will ship in next release. |
| **Agent-scoped context for routed agents** | Implicit in [#3402](https://github.com/sipeed/picoclaw/pull/3402) | **Done** — merged. |

**Prediction:** Next release (v0.3.2) will bundle the 7 merged fixes + #3396 (OneBot toggle). OpenAI Responses API (#3381) may target v0.4.0. QQ adapter fix (#3394) is urgent enough for a hotfix or inclusion in v0.3.2.

## 7. User Feedback Summary

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **QQ/OneBot channel broken** | #3394: "QQ bot API updated, QQ chat channel not updated" | Chinese-community users on NapCat/OneBot (likely largest user segment). |
| **Spammy auto-reactions** | #3395: "Every group message gets automatic emoji ack (emoji 289)" | OneBot/QQ group admins. |
| **DingTalk gateway crashes** | #3382: "Still panics on stream SDK reconnect" | Enterprise DingTalk users. |
| **Config loss on save/migration** | #3400: "Every save loses fallback keys & enabled flag" | Anyone using multi-key model configs (load-balancing, failover). |
| **Async tool results misrouted** | #3403: "Results accumulate in default agent's main session" | Multi-agent/multi-chat deployments. |
| **ARM32 auto-update broken** | #3399: "Installs arm64 binary on 32-bit ARM" | Raspberry Pi Zero, older ARM SBC users. |

**Satisfaction signal:** Users file specific, reproducible bugs with configs/logs — indicates engaged technical user base. Low reaction counts suggest community is developer-heavy, not broad consumer.

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3382](https://github.com/sipeed/picoclaw/issues/3382) — DingTalk panic | Opened 2026-09-20, closed *stale* 2026-10-04 | **Critical stability bug** marked stale without fix. If DingTalk stream mode is supported, this must be resolved or documented as known limitation. |
| [#3394](https://github.com/sipeed/picoclaw/issues/3394) — QQ API breakage | Opened 2026-09-26 | **User-facing outage** for major channel. No PR yet; needs adapter maintainer. |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) — OpenAI Responses API | Opened 2026-09-17 | **Strategic feature** stalled 18 days. Blocked by CLA bot (#3392) and review bandwidth. |
| [#3392](https://github.com/sipeed/picoclaw/issues/3392) — CLAassistant failure | Opened 2026-09-25 | **Infra blocker** for #3381 and any external contribution. |
| [#3396](https://github.com/sipeed/picoclaw/pull/3396) — OneBot reaction toggle | Opened 2026-09-27 | **Ready-to-merge** quality-of-life fix; low review burden. |

**Recommendation:** Prioritize #3394 (QQ fix) and #3396 (merge) for v0.3.2; unblock #3381 by fixing CLA bot; re-open or fix #3382 before claiming DingTalk stream support.

---

*Data sourced from GitHub API (issues/PRs updated 2026-10-04 → 2026-10-05). All links point to sipeed/picoclaw repository.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-10-05

## 1. Today's Overview
NanoClaw is in a high-velocity release window: the first calendar-versioned release candidate **v2026.10.0-rc.1** shipped yesterday, introducing a new update-channel system (`stable`/`beta`) that shifts `/update-nanoclaw` from tracking `main` to published tags. In the last 24 hours the repo saw **8 active issues** (all bugs, several high-severity) and **22 PR updates** (9 merged/closed, 13 open), signaling a focused stabilization sprint around Telegram delivery, container timeouts, scheduled-task error visibility, and the new update mechanism. Core maintainers are merging fixes rapidly, but several long-standing architectural bugs (task-mode routing, container kill ceiling, XML escaping) remain open and unassigned.

## 2. Releases
### v2026.10.0-rc.1 — Release Candidate (2026-10-04)
- **Version scheme change**: NanoClaw moves to calendar versioning (`YYYY.M.PATCH`); this is the first release `/update-nanoclaw` installs by default.  
- **Update channels**: `NANOCLAW_UPDATE_CHANNEL` in `.env` selects `stable` (default, newest annotated `vX.Y.Z` tag) or `beta` (newest `-rc.N` newer than stable).  
- **Breaking**: OneCLI installs on Linux now require `ONECLI_URL` pointing at the Docker-bridge gateway (see PR #4028).  
- **Migration**: Existing installs on `main` will stay on `main` unless they opt into a channel; `stable` channel users will receive this RC when it graduates.  
- **Release PR**: [#4025](https://github.com/qwibitai/nanoclaw/pull/4025) — includes `RELEASING.md` update and version bump `2.4.0 → 2026.10.0-rc.1`.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary |
|----|------|---------|
| [#3998](https://github.com/qwibitai/nanoclaw/pull/3998) | containers, agent-runner | Trust gateway CA in agent browser (NSS DB injection) — unblocks HTTPS via credential gateway. |
| [#3999](https://github.com/qwibitai/nanoclaw/pull/3999) | providers, agent-runner | Pass `CLAUDE_CODE_AUTO_COMPACT_WINDOW` from host into container (env propagation fix). |
| [#3983](https://github.com/qwibitai/nanoclaw/pull/3983) | core, logging | Preserve nested `toJSON()` redaction when value contains BigInt/cycle (safeStringify fallback fix). |
| [#4024](https://github.com/qwibitai/nanoclaw/pull/4024) | skills, channels | Pin Baileys `7.0.0-rc14` in `/add-whatsapp` (fixes critical message-spoofing CVE GHSA-qvv5-jq5g-4cgg). |
| [#4028](https://github.com/qwibitai/nanoclaw/pull/4028) | skills, docs | OneCLI upgrade guide: use `ONECLI_URL` for Linux gateway detection. |
| [#3986](https://github.com/qwibitai/nanoclaw/pull/3986) | setup, update | `/update-nanoclaw` now follows release tags by default via channels (stable/beta). |
| [#4025](https://github.com/qwibitai/nanoclaw/pull/4025) | release | Release PR for v2026.10.0-rc.1. |
| [#4023](https://github.com/qwibitai/nanoclaw/pull/4023) | multi-area | Checklist shopping buttons (scope unclear — appears experimental). |

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#3569](https://github.com/qwibitai/nanoclaw/issues/3569) | Issue | 1 comment, 38 days open | **Telegram URL delivery broken** — pinned `@chat-adapter/telegram@4.29.0` drops messages with odd `_` count; upstream fixed in 4.32.0. PR [#4029](https://github.com/qwibitai/nanoclaw/pull/4029) renders `_` links as plain text as workaround. |
| [#3643](https://github.com/qwibitai/nanoclaw/issues/3643) | Issue | 0 comments, 38 days open | **Hard 30-min container kill ceiling** — local-model turns killed mid-stream; no config knob. Blocks long-running local inference. |
| [#3223](https://github.com/qwibitai/nanoclaw/issues/3223) | Issue | 0 comments, 56 days open | **Scheduled-task failures silent** — errors dropped because task messages lack routing fields; operators never learn of failure. |
| [#3301](https://github.com/qwibitai/nanoclaw/issues/3301) | Issue | 0 comments, 49 days open | **Task-in-chat regression** — one-door delivery (#2988) causes logs dropped, replies eaten, series unlisted for pre-2.1.48 tasks. |
| [#4029](https://github.com/qwibitai/nanoclaw/pull/4029) | PR | 0 comments, fresh | Workaround for #3569; renders underscore URLs as plain text to avoid GFM parser autolink bug. |

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#3643](https://github.com/qwibitai/nanoclaw/issues/3643) — Hardcoded 30-min `ABSOLUTE_CEILING_MS` kills long local-model turns; no config seam | Open | None |
| **High** | [#3569](https://github.com/qwibitai/nanoclaw/issues/3569) — Telegram drops messages with odd `_` count (pinned adapter 4.29.0 vs fixed 4.32.0) | Open | [#4029](https://github.com/qwibitai/nanoclaw/pull/4029) (workaround) |
| **High** | [#3223](https://github.com/qwibitai/nanoclaw/issues/3223) — Scheduled-task errors silently dropped (no routing fields) | Open | None |
| **High** | [#3301](https://github.com/qwibitai/nanoclaw/issues/3301) — Tasks in chat sessions: logs dropped, replies eaten, series unlisted | Open | None |
| **Medium** | [#4033](https://github.com/qwibitai/nanoclaw/issues/4033) — Poll-loop: folded follow-up leaves turn queue off-by-one, wrong `in_reply_to` | Open | None |
| **Medium** | [#4020](https://github.com/qwibitai/nanoclaw/issues/4020) — Inbound `escapeXml` never reversed; replies show `&amp;` | Open | None |
| **Medium** | [#4021](https://github.com/qwibitai/nanoclaw/issues/4021) — macOS `stopService` returns before host exits; snapshot races shutdown (I/O error 5) | Open | None |
| **Low** | [#4027](https://github.com/qwibitai/nanoclaw/issues/4027) — Coordinator agent cannot restart/clear child agents (`cli_scope: group` blocks foreign `--id`) | Open | [#4026](https://github.com/qwibitai/nanoclaw/pull/4026) (fixes `ncl groups restart --id <other>`) |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| Configurable container kill ceiling (replace hardcoded 30-min) | [#3643](https://github.com/qwibitai/nanoclaw/issues/3643) | Medium — high impact for local-model users, but no PR yet |
| Agent-initiated child-agent restart/clear | [#4027](https://github.com/qwibitai/nanoclaw/issues/4027) | High — PR [#4026](https://github.com/qwibitai/nanoclaw/pull/4026) already open and targeted |
| Scheduled-task failure notification to operator | [#3223](https://github.com/qwibitai/nanoclaw/issues/3223) | Medium — architectural (routing fields missing), needs design |
| Telegram adapter version bump to ≥4.32.0 | [#3569](https://github.com/qwibitai/nanoclaw/issues/3569) | High — workaround PR merged, but root cause is pinned dep |
| OneCLI Linux gateway auto-detection | [#4028](https://github.com/qwibitai/nanoclaw/pull/4028) | Done — merged in RC |

## 7. User Feedback Summary
- **Telegram reliability** is the loudest pain point: users on every install hit the underscore-URL bug (#3569) and long-poll stalls (#4031).  
- **Local-model operators** are blocked by the non-configurable 30-min container kill (#3643) — affects anyone running long reasoning turns on self-hosted LLMs.  
- **Scheduled-task owners** have zero visibility into failures (#3223); a silent-data-loss scenario.  
- **macOS updaters** hit a race condition during version cuts (#4021) — rolled back cleanly but erodes confidence in `/update-nanoclaw`.  
- **Positive signal**: The new channel-based update system (#3986, #4025) and Baileys security pin (#4024) show maintainers responding to supply-chain and operational maturity concerns.

## 8. Backlog Watch (Stale but Important)
| Item | Days Open | Why It Matters |
|------|-----------|----------------|
| [#3643](https://github.com/qwibitai/nanoclaw/issues/3643) | 38 | Hard ceiling breaks local-model workloads; no config, no PR. |
| [#3223](https://github.com/qwibitai/nanoclaw/issues/3223) | 56 | Silent scheduled-task failures = operational blind spot. |
| [#3301](https://github.com/qwibitai/nanoclaw/issues/3301) | 49 | Regression from one-door delivery; affects all pre-2.1.48 tasks. |
| [#3450](https://github.com/qwibitai/nanoclaw/pull/3450) | 44 | Telegram broadcast-channel identity fix (sender_chat → author mapping) — stuck in review. |
| [#3642](https://github.com/qwibitai/nanoclaw/pull/3642) | 38 | `update-skills` should report local adapter state instead of failing/silently reverting. |

---

**Health Indicator**: 🟡 **Caution** — Release candidate shipped with strong fix throughput, but three high-severity bugs (#3643, #3223, #3301) have zero fix PRs and block key workflows (local models, scheduled tasks, chat-task hybrid). Recommended: prioritize config knob for container ceiling and scheduled-task error routing before `stable` channel promotion.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-10-05

---

## 1. Today's Overview

NullClaw saw **high engineering velocity** over the last 24 hours: 14 PRs updated (7 merged/closed, 7 open) and 5 issues touched. The merged PRs cluster around **channel reliability** (Discord gateway recovery, HTTPS typing stack, outbound ownership), **Android/Termux HTTP hardening**, **CLI stdout corruption fix**, **diagnostics documentation**, and **bot-loop prevention**. Open PRs and issues signal active work on **WebSocket connect boundedness**, **Docker non-root permissions**, **Serply search provider**, **curl transport regression tests**, **GIT_DIR leakage in worktree hooks**, and **Anthropic provider hardening**. No release was cut today; the project is in a **stabilization + platform-hardening sprint** ahead of a likely patch release.

---

## 2. Releases

**No new releases today.** The latest published version remains prior to 2026-10-05. Several merged fixes (Discord gateway recovery, HTTPS typing stack, CLI stdout, bot-loop guard, Android curl fallback, diagnostics docs) are candidates for a near-term patch (e.g., `v0.x.y+1`).

---

## 3. Project Progress — Merged / Closed PRs (Last 24h)

| PR | Title | Area | Key Change |
|----|-------|------|------------|
| [#953](https://github.com/nullclaw/nullclaw/pull/953) | `fix(channels): recover gateway sockets with safe shutdown ownership` | Discord/Telegram/MAX gateways | Socket shutdown before joining heartbeat workers; bounded pre-HELLO health; backoff failed RESUME until fresh IDENTIFY; successful RESUMED resets reconnect counter. |
| [#1002](https://github.com/nullclaw/nullclaw/pull/1002) | `fix(channels): run HTTPS typing workers on the heavy runtime stack` | Discord/Telegram/MAX typing | Moves typing workers to 2 MiB stack (from 512 KiB) to avoid Zig TLS init overflow. Cherry-picked from #978. |
| [#954](https://github.com/nullclaw/nullclaw/pull/954) | `fix(channels): preserve outbound ownership on allocation failures` | Outbound delivery | Hardens ownership/retry on alloc failure; releases partially copied choice fields. |
| [#1010](https://github.com/nullclaw/nullclaw/pull/1010) | `fix(discord): ignore messages the bot itself posted` | Discord ingress | Prevents self-reply loops when `allow_bots=true` and `require_mention` matches bot's own `@`. |
| [#1007](https://github.com/nullclaw/nullclaw/pull/1007) | `docs: explain the diagnostics logging flags` | Docs / Observability | Documents each flag, defaults, log locations; example uses production-safe values (`log_content = false`). |
| [#1006](https://github.com/nullclaw/nullclaw/pull/1006) | `fix(cli): append streamed stdout instead of overwriting offset zero` | CLI / stdout | Switches from positional write at offset 0 to append; fixes macOS pipe corruption (first byte replaced by newline). |
| [#966](https://github.com/nullclaw/nullclaw/pull/966) | `fix(http): secure buffered curl fallback on Android` | Android / HTTP | Routes full traffic through curl on `aarch64-linux-android` when stdlib DNS fails; preserves `std.http` semantics. |

**Net effect:** Gateway stability ↑, Android reliability ↑, CLI output correctness ↑, self-loop regression fixed, observability docs clarified.

---

## 4. Community Hot Topics (Most Comments / Reactions)

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#941](https://github.com/nullclaw/nullclaw/issues/941) | Issue (Closed) | 7 | 0 | **Agent-type cron jobs not spawning subprocess** — Telegram delivery never happens despite job marked completed. Root cause: scheduler doesn't fork agent process for `job_type: "agent"`. |
| [#1018](https://github.com/nullclaw/nullclaw/issues/1018) | Issue (Closed) | 2 | 0 | **Termux agent output corruption** — scrambled/truncated responses, exit 0, no error. Likely stdio/pipe buffering or Zig runtime interaction on `aarch64-linux-android`. |
| [#1017](https://github.com/nullclaw/nullclaw/issues/1017) | Issue (Open) | 1 | 0 | **Docker gateway `AccessDenied`** — `/nullclaw-data` root-owned after `COPY`; uid 65534 cannot write. Blocking non-root image deployments. |
| [#1024](https://github.com/nullclaw/nullclaw/issues/1024) | Issue (Open) | 0 | 0 | **WebSocket connect boundedness** — DNS/TCP establishment unbounded; `stop` cannot interrupt pre-connect phase. Follow-up from #953 approval. |
| [#1020](https://github.com/nullclaw/nullclaw/issues/1020) | Issue (Open) | 0 | 0 | **Pre-push hook fails in worktrees** — `GIT_DIR` leaks into test-spawned `git` commands, causing fixture pollution. Blocks documented maintainer workflow. |

**Analysis:** Top pain points are **scheduler-agent integration** (#941), **Android/Termux runtime quirks** (#1018, #966), **container permission hygiene** (#1017, #1023), and **CI/worktree hygiene** (#1020). The community is surfacing **platform-edge bugs** that block production use on Android and Docker.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR / Notes |
|----------|-------|--------|----------------|
| **Critical (Production Block)** | [#1017](https://github.com/nullclaw/nullclaw/issues/1017) Docker gateway `AccessDenied` — `/nullclaw-data` root-owned | Open | PR [#1023](https://github.com/nullclaw/nullclaw/pull/1023) (`fix(docker): keep HOME writable in the non-root image`) — adds `RUN chown` after `COPY`. |
| **Critical (Data Corruption)** | [#1018](https://github.com/nullclaw/nullclaw/issues/1018) Termux agent output scrambled/truncated, exit 0 | Closed | Likely addressed by [#966](https://github.com/nullclaw/nullclaw/pull/966) (curl fallback) + [#1006](https://github.com/nullclaw/nullclaw/pull/1006) (stdout append). No dedicated fix PR yet; verify on device. |
| **High (Reliability)** | [#941](https://github.com/nullclaw/nullclaw/issues/941) Agent cron jobs don't spawn subprocess — Telegram delivery never happens | Closed | Root cause identified in scheduler; fix likely in `schedule` job_type handling. Verify cron agent path. |
| **High (CI/Workflow Block)** | [#1020](https://github.com/nullclaw/nullclaw/issues/1020) Pre-push hook fails from worktree — `GIT_DIR` leak | Open | PR [#1021](https://github.com/nullclaw/nullclaw/pull/1021) (`fix(hooks): clear inherited GIT_DIR before the pre-push test run`). |
| **Medium (Stability)** | [#1024](https://github.com/nullclaw/nullclaw/issues/1024) WebSocket DNS/TCP connect unbounded — `stop` cannot interrupt | Open | PR [#1025](https://github.com/nullclaw/nullclaw/pull/1025) adds deadline to `connectTcp` and resolver. |
| **Medium (Observability)** | [#1004](https://github.com/nullclaw/nullclaw/pull/1004) Provider error bodies freed on non-2xx — reason invisible | Open | PR adds secret-scrubbed, length-capped body logging on error. |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Serply as web_search provider** | PR [#1022](https://github.com/nullclaw/nullclaw/pull/1022) (open) | **High** — follows existing Brave pattern; low risk, adds provider diversity. |
| **Native Anthropic provider hardening** | PR [#962](https://github.com/nullclaw/nullclaw/pull/962) (open, since Jun) | **Medium** — docs + config hardening; near-ready but stalled on review. |
| **Bounded WebSocket connect** | Issue [#1024](https://github.com/nullclaw/nullclaw/issues/1024) + PR [#1025](https://github.com/nullclaw/nullclaw/pull/1025) | **High** — follow-up to merged #953; addresses graceful shutdown gap. |
| **Docker non-root permission fix** | Issue [#1017](https://github.com/nullclaw/nullclaw/issues/1017) + PR [#1023](https://github.com/nullclaw/nullclaw/pull/1023) | **Critical** — blocks non-root deployments; trivial fix, likely in next patch. |
| **Curl transport byte-exact tests** | PR [#1019](https://github.com/nullclaw/nullclaw/pull/1019) (open) | **Medium** — hardening; may land with Android fixes. |

**Prediction:** Next patch will include Docker permission fix, WebSocket connect bounds, Serply provider, and possibly Anthropic docs. Android/Termux fixes (#966, #1006) already merged.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Scheduled agent tasks silently fail** | #941: "job is marked as completed but the agent subprocess is never started. No message arrives in Telegram." | Automations broken; no visibility. |
| **Termux output corruption with zero signals** | #1018: "scrambled fragment… exits 0, no error logged… corruption completely silent." | Unreliable on mobile Linux; hard to debug. |
| **Docker image unusable non-root** | #1017: "container exits immediately with `error: AccessDenied`." | Blocks containerized deployments following best practices. |
| **Worktree workflow broken** | #1020: "cannot pass when pushed from a git worktree… this repo's documented workflow." | Maintainers/contributors blocked on CI. |
| **Self-reply loops on Discord** | #1010: "each turn triggered the next… when a reply opened with the bot's own `@`-mention." | Runaway agent loops; fixed in #1010. |
| **Diagnostics flags undocumented** | #1007: "example turned content logging on and never said what the flags do." | Operators flying blind; now documented. |

**Sentiment:** Users encounter **silent failures** (no logs, exit 0) on edge platforms (Android, Docker, cron). Fixes are landing but **observability gaps** remain a theme.

---

## 8. Backlog Watch — Stale / Needing Maintainer Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#962](https://github.com/nullclaw/nullclaw/pull/962) `fix(providers): document and harden native Anthropic setup` | ~110 days (opened 2026-06-18) | Provider config parity; docs + hardening for blocking/streaming. Stalled despite being "documentation + config". | Assign reviewer; merge or close with rationale. |
| [#941](https://github.com/nullclaw/nullclaw/issues/941) Agent cron subprocess not spawned | Closed but **verify fix shipped** | 7 comments indicate community hit this; ensure regression test added. | Add integration test for `job_type: "agent"` + Telegram delivery. |
| [#1004](https://github.com/nullclaw/nullclaw/pull/1004) `fix(providers): log scrubbed provider error bodies on non-2xx` | Open since 2026-09-24 | Improves debuggability of provider failures (e.g., model capability mismatches). | Review + merge; low risk, high ops value. |
| [#1019](https://github.com/nullclaw/nullclaw/pull/1019) `test(http): pin byte-exact curl transport round-trips` | Open since 2026-10-04 | Prevents regressions in Android curl path; transport invariants. | Merge to lock in Android HTTP reliability. |
| [#1021](https://github.com/nullclaw/nullclaw/pull/1021) `fix(hooks): clear inherited GIT_DIR before the pre-push test run` | Open since 2026-10-04 | Unblocks documented worktree workflow for all contributors. | Merge immediately; trivial fix, high DX impact. |

---

**Overall Health:** 🟢 **Active stabilization sprint** — core gateway/transport bugs fixed, platform edges (Android, Docker) being hardened, CI workflow unblocked. **Release readiness high** for a patch once Docker + WebSocket + hook fixes merge. Watch Anthropic PR (#962) and cron agent regression test.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-10-05

## 1. Today's Overview
IronClaw shows **zero human-driven activity** in the last 24 hours. The only updates are **5 automated Dependabot pull requests** (4 open, 1 closed) targeting Rust, GitHub Actions, and WASM dependency groups. No new issues, releases, or community discussions were recorded. The project appears to be in a **maintenance-only state** with dependency hygiene as the sole ongoing activity.

## 2. Releases
**No new releases** published today or in the recent period covered by this data.

## 3. Project Progress
| PR | Status | Scope | Summary |
|----|--------|-------|---------|
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | **Closed** | `dependencies, rust` | Bumped `tower-http` 0.7.0 → 0.7.1 and `tokio-tungstenite` (patch updates). Merged/closed 2026-10-04. |
| [#8123](https://github.com/nearai/ironclaw/pull/8123) | Open | `dependencies, rust` | Tokio ecosystem: `tokio-test` 0.4.5 → 0.4.6, `tower-http`, `tokio-tungstenite` updates. |
| [#8114](https://github.com/nearai/ironclaw/pull/8114) | Open | `dependencies, rust` (size: XL, risk: low) | 31-package “everything-else” group: `thiserror` 2.0.20 → 2.0.21, `uuid` 1.24.0 → 1.26.1, `base64`, `serde`, `clap`, etc. |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | Open | `dependencies, github_actions` | 8 GitHub Actions updates: `actions/setup-node` 4.0.2 → 7.0.0, `anthropics/claude-code-action` 1.0.183 → 1.0.228, etc. |
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | Open | `dependencies, rust` (size: L, risk: medium) | WASM toolchain: `wasmtime`, `wasmtime-wasi`, `wit-component`, `wit-parser` updates. |

**Net progress**: One low-risk Rust dependency PR merged; four larger dependency batches await review/merge.

## 4. Community Hot Topics
**No community-driven issues or PRs** with comments or reactions in the last 24 hours. All activity is automated Dependabot noise.  
*Implication*: Community engagement is currently dormant; maintainers may need to triage the backlog of open dependency PRs to prevent staleness.

## 5. Bugs & Stability
**No bug reports, crashes, or regressions** filed or updated today. The closed PR [#8078](https://github.com/nearai/ironclaw/pull/8078) contains only patch-level dependency bumps with no indicated bug fixes.

## 6. Feature Requests & Roadmap Signals
**No feature requests** or roadmap discussions captured in the current data window. The open PRs suggest the next meaningful changes will be **dependency upgrades** (especially the large “everything-else” batch [#8114](https://github.com/nearai/ironclaw/pull/8114) and WASM toolchain [#7834](https://github.com/nearai/ironclaw/pull/7834)), which may unblock future feature work once merged.

## 7. User Feedback Summary
**No user feedback** (issues, discussions, or PR reviews) recorded today. The project lacks visible user pain points or satisfaction signals in this period.

## 8. Backlog Watch
| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | 43 days | Medium | WASM toolchain upgrades (`wasmtime` etc.) can introduce breaking changes; labeled `risk: medium`, `size: L`. |
| [#8114](https://github.com/nearai/ironclaw/pull/8114) | 8 days | Low | 31-package bulk update; low risk but large surface—requires CI validation and maintainer bandwidth. |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | 15 days | Low | GitHub Actions major bumps (e.g., `setup-node` v4 → v7); may need workflow adjustments. |
| [#8123](https://github.com/nearai/ironclaw/pull/8123) | 1 day | Low | Fresh Tokio ecosystem patches; minimal risk but should be merged to stay current. |

**Recommendation**: Prioritize review/merge of [#7834](https://github.com/nearai/ironclaw/pull/7834) (oldest, medium risk) and [#8114](https://github.com/nearai/ironclaw/pull/8114) (largest surface), then clear the remaining Dependabot PRs to keep the dependency baseline healthy.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-10-05

## 1. Today's Overview
LobsterAI shows **moderate maintenance activity** with 11 total updates (5 issues, 6 PRs) in the last 24 hours, though all are marked `[stale]` — indicating older items receiving administrative updates rather than new work. No new releases were published. The project is in a **stabilization phase**: three PRs merged/closed recently deliver MCP tooling enhancements (per-server tool filters, parallel calls, tool picker) and six new preset agent templates, while three fresh PRs from `alison-xx` (opened 2026-10-04) polish the renderer — model grouping, artifact path handling, and cowork UX. Open issues cluster around **scheduled-task reliability** (two distinct bugs) and **multi-model task assignment**, signaling core workflow pain points still unresolved.

## 2. Releases
**No new releases** in the last 24 hours. The latest version remains unspecified in the provided data.

## 3. Project Progress — Merged / Closed PRs (Last 24h)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#2710](https://github.com/netease-youdao/LobsterAI/pull/2710) | **feat** (mcp, openclaw) | Pass per-server `toolFilter` (include/exclude globs) and `supportsParallelToolCalls` to OpenClaw via config sync | **High** — unlocks granular MCP tool selection per session; previously only command/url/headers were synced |
| [#2789](https://github.com/netease-youdao/LobsterAI/pull/2789) | **feat** (mcp) | MCP Tool Picker UI | **High** — user-facing tool selection for MCP servers; complements #2710 |
| [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) | **feat** (preset-agents) | Add 6 new preset agent templates (expanding from 6 to 12 scenarios) | **Medium** — broadens out-of-the-box use cases; templates cover new domains beyond stock/content/lesson/summary/medical/pet |

All three were updated/closed on **2026-10-04**; #2710 had been open since 2026-09-18.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#850](https://github.com/netease-youdao/LobsterAI/issues/850) (Issue) | 2 comments, updated 2026-10-04 | **Scheduled tasks ignore “off” toggle** — users expect hard disable; current behavior erodes trust in automation |
| [#837](https://github.com/netease-youdao/LobsterAI/issues/837) (Issue) | 1 comment + log attachment, updated 2026-10-04 | **Task scheduler enters unrecoverable failure state after lock-screen trigger** — requires full app restart; macOS-specific |
| [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) (Issue) | 2 comments, **closed** 2026-10-04 | **Notion MCP auth failure** — env vars (token) not propagated to spawned `npx @notionhq/notion-mcp-server`; root cause in Bridge `child_process.spawn` env handling |
| [#2790](https://github.com/netease-youdao/LobsterAI/pull/2790) (PR) | Opened 2026-10-04, 0 comments | **Model catalog usability** — collapsible family groups, duplicate-name disambiguation, search inside “More models” fold |
| [#2792](https://github.com/netease-youdao/LobsterAI/pull/2792) (PR) | Opened 2026-10-04, 0 comments | **Cowork UX** — long prompts overflow dock heading; context tooltip unbounded width |

**Analysis**: Scheduler reliability (#850, #837) and MCP integration robustness (#1003) are the loudest signals. The MCP issues are being addressed by recently merged PRs (#2710, #2789), but the scheduler bugs remain open with no fix PRs linked.

## 5. Bugs & Stability — Ranked by Severity
| Rank | Issue | Severity | Status | Fix PR? |
|------|-------|----------|--------|---------|
| 1 | [#837](https://github.com/netease-youdao/LobsterAI/issues/837) — Scheduler deadlocks after lock-screen trigger; only restart recovers | **Critical** (data loss risk, manual intervention required) | Open | **No** |
| 2 | [#850](https://github.com/netease-youdao/LobsterAI/issues/850) — Disabled scheduled tasks still fire | **High** (automation trust, potential side effects) | Open | **No** |
| 3 | [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) — Notion MCP 401 due to missing env vars in spawn | **High** (blocks Notion integration) | **Closed** (stale) | Likely fixed by #2710/#2789 (env/config sync) |
| 4 | [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) — Agent Engine infinite restart loop | **High** (app unusable) | **Closed** (stale) | No linked PR; may be config-related |

**Note**: #1003 and #1007 are closed but marked `[stale]` — closure may be administrative, not necessarily fixed. Verify regression risk.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Per-task model assignment** (different models for different tasks) | [#856](https://github.com/netease-youdao/LobsterAI/issues/856) | **High** — aligns with #2790’s model-grouping work; architectural precedent exists in MCP per-server config |
| **Documentation sync for new features** (e.g., OpenClaw usage) | [#856](https://github.com/netease-youdao/LobsterAI/issues/856) | **Medium** — often deferred; but #2710/#2789 suggest MCP docs gap |
| **Scheduler resilience** (auto-recovery, hard disable) | [#837](https://github.com/netease-youdao/LobsterAI/issues/837), [#850](https://github.com/netease-youdao/LobsterAI/issues/850) | **High** — two open bugs, user-visible, no PRs yet |
| **Artifact path inference hardening** | [#2791](https://github.com/netease-youdao/LobsterAI/pull/2791) (PR) | **High** — PR already open, fixes placeholder-path pollution |

**Prediction**: Next patch will likely include #2790, #2791, #2792 (renderer polish) + scheduler fixes if prioritized. Per-task model config may arrive in a minor release.

## 7. User Feedback Summary
- **Pain Points**:  
  - Scheduler is **unreliable on macOS** (lock screen → permanent failure) and **ignores disable toggle** — breaks “set-and-forget” automation.  
  - MCP integrations **leak auth** (Notion 401) due to Bridge-layer env handling.  
  - Agent Engine **restart loops** leave users stuck without config guidance.  
- **Use Cases**:  
  - Heavy reliance on **scheduled background tasks** (half-hourly, overnight).  
  - **Multi-model workflows** — users want coding model for dev, creative model for writing, etc.  
  - **MCP ecosystem adoption** — Notion, OpenClaw, custom servers.  
- **Sentiment**: Frustration on scheduler/MCP bugs; appreciation for preset agents and MCP tooling PRs (silent on PRs, but merged quickly).

## 8. Backlog Watch — Stale Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#837](https://github.com/netease-youdao/LobsterAI/issues/837) | **7 months** (created 2026-03-25) | Critical macOS scheduler bug with logs; no triage, no fix PR |
| [#850](https://github.com/netease-youdao/LobsterAI/issues/850) | **7 months** | Core automation trust issue; simple repro, high impact |
| [#856](https://github.com/netease-youdao/LobsterAI/issues/856) | **7 months** | Feature request blocking multi-model workflows; docs debt growing |
| [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) | **6 months** | Agent Engine restart loop — closed stale but may persist; needs verification |

**Recommendation**: Maintainers should **triage #837 and #850 immediately** — they are the oldest, most severe, and have zero fix momentum. Consider labeling `scheduler`, `macos`, `regression` to attract contributors.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-10-05

## 1. Today's Overview
CoPaw shows **high maintenance velocity** with 25 total items updated in the last 24 hours (13 issues, 12 PRs). The project is in active stabilization phase for v2.2.2b4, with no new releases but significant bug-fix momentum. Critical infrastructure issues dominate: memory exhaustion (#7722), plugin event-loop blocking (#7840), console boot reliability (#8094, #8102), and provider fallback observability (#8103). Two PRs were closed today (#8110, #7299), both console UI fixes. First-time contributors are actively engaged across 5 open PRs.

## 2. Releases
**No new releases today.** Current version remains **v2.2.2b4** (beta). The project appears to be iterating on beta stabilization before a potential v2.2.2 GA release.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#8110](https://github.com/agentscope-ai/QwenPaw/pull/8110) | `fix(console): let the settings mobile navigation dropdown exceed the trigger width` | UI/UX (size/XS) | Fixes mobile Settings page navigation truncation on ≤768px viewports |
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | `fix(console): reject conflicting chat payloads` | API/Backend (first-time-contributor) | Prevents silent acceptance of duplicate `POST /api/console/chat` for active runs; returns proper error instead of HTTP 200 no-op |

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | 👍 | Core Need |
|------|----------|-----|-----------|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) Memory exhaustion (3 paths) | 6 | 0 | **Production stability**: Unbounded stream buffers + keep-alive stacking + gate evasion cause ~1MB/s leak → OOM. Controlled repro + minimal fixes provided. |
| [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) Plugins share host event loop | 5 | 0 | **Architectural isolation**: Synchronous I/O in any plugin freezes entire instance (agents, channels, UI). No contract, monitoring, or isolation exists. |
| [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) Carry session header on connection checks | — | 0 | **OpenCode compatibility**: `x-opencode-session` header must propagate to health/connection checks (follows #7899). Under review since 2026-09-18. |
| [#7774](https://github.com/agentscope-ai/QwenPaw/pull/7774) Derive startup provisioner allow-list from build | — | 0 | **Consistency**: Hub control app uses hard-coded `{"local", "docker"}` while other entry points use runtime service. Under review since 2026-09-15. |

**Underlying theme**: Users are hitting **architectural boundaries** (event-loop sharing, hard-coded allow-lists, silent fallbacks) that manifest as production reliability gaps rather than feature gaps.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR | Key Symptom |
|----------|-------|--------|--------|-------------|
| **Critical** | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) Memory exhaustion (3 paths) | OPEN | None | Container OOM at ~1MB/s; service hangs. Three independent leak vectors compound. |
| **Critical** | [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) Plugin sync I/O freezes instance | OPEN | None | One plugin's blocking call freezes all agents/channels/UI for ~40s. No isolation. |
| **High** | [#8109](https://github.com/agentscope-ai/QwenPaw/issues/8109) Stream error loses entire session | **CLOSED** | Likely fixed in beta | Agent B's session 100% lost after stream error in A→B delegation. |
| **High** | [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) Console boot splash no retry | OPEN | [#8102](https://github.com/agentscope-ai/QwenPaw/pull/8102) | Stale WebView2 cache after update → permanent boot block; no error surface. |
| **High** | [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) Content-inspection false positives kill turns | OPEN | None | Benign DevOps chat flagged as `data_inspection_failed` → classified as `bad_request` → no retry/fallback, turn killed. |
| **High** | [#8106](https://github.com/agentscope-ai/QwenPaw/issues/8106) Plugin install fails in container | OPEN | [#8107](https://github.com/agentscope-ai/QwenPaw/pull/8107) | `PIP_TARGET` leaks into pip build env + `PYTHONPATH` shadows stdlib → `importlib.invalidate_caches()` crash. |
| **Medium** | [#8105](https://github.com/agentscope-ai/QwenPaw/issues/8105) Tool approval buttons both execute "reject" | OPEN | None | Approve/Reject both trigger reject; envelope icon non-functional. Approval UX broken. |
| **Medium** | [#7026](https://github.com/agentscope-ai/QwenPaw/issues/7026) `chat_template_kwargs` not wrapped in `extra_body` | OPEN | None | DeepSeek-v4-pro calls throw OpenAI SDK `TypeError` on every model call. |
| **Medium** | [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) `MissingSessionID` on OpenCode Go models | OPEN | Related: [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) | `x-opencode-session` header missing on model connection checks. |

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Version | Rationale |
|---------|----------|----------------------------|-----------|
| **Files panel: toggle dot-prefixed files** | [#7731](https://github.com/agentscope-ai/QwenPaw/issues/7731) / [#8111](https://github.com/agentscope-ai/QwenPaw/pull/8111) | **High** | PR #8111 opened today (size/S); backend already supports hidden-file paths; UI toggle only. |
| **Hourly Dream schedule presets + catch-up** | [#8112](https://github.com/agentscope-ai/QwenPaw/issues/8112) | **Medium** | User discovers "Advanced" = raw cron; hourly preset is UX gap for frequent memory consolidation. |
| **Notify on silent model fallback** | [#8103](https://github.com/agentscope-ai/QwenPaw/issues/8103) | **High** | Observability gap: user sees different model response with zero indication. Critical for trust/debugging. |
| **Scroll-back message pagination** | [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | **Medium** | Large PR (size/XXXL); solves context compaction UX where history silently starts mid-conversation. |
| **Surface `finish_reason="length"` truncation** | [#8096](https://github.com/agentscope-ai/QwenPaw/pull/8096) | **High** | Truncated answers indistinguishable from complete ones; metadata loss breaks user trust. |

## 7. User Feedback Summary
**Pain points (direct quotes paraphrased):**
- *"Container memory fills at ~1MB/s then service hangs/OOMs"* (#7722) — **Production blocker**
- *"One synchronous call in any plugin freezes the whole instance for ~40s"* (#7840) — **Architectural fragility**
- *"Stream error → 100% session content lost"* (#8109) — **Data loss**
- *"Console boot permanently blocked by stale WebView2 cache after update"* (#8094) — **Unrecoverable failure**
- *"Benign conversation flagged by content inspection → turn killed, no retry"* (#8092) — **False positive intolerance**
- *"Plugin install fails with pip env leak + stdlib shadowing"* (#8106) — **Container deployment broken**
- *"Approve/Reject both do reject; envelope icon dead"* (#8105) — **Core UX broken**
- *"DeepSeek calls throw TypeError on every request"* (#7026) — **Model integration broken**

**Positive signals:** Active first-time contributors (5 PRs), rapid PR turnaround for console fixes (#8110, #7299 closed same-day), community providing controlled repros (#7722, #7840).

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) Memory exhaustion (3 paths) | 23 days | **Critical production leak**; controlled repro + minimal fixes provided by reporter | No PR yet; requires core streaming/gate changes |
| [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) Plugin event-loop isolation | 18 days | **Architectural debt**; affects all plugin authors & users | Needs plugin sandbox design decision |
| [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) Session header on connection checks | 17 days | **Unblocks OpenCode Go** (#7599, #8104) | Under review since 2026-09-18 |
| [#7774](https://github.com/agentscope-ai/QwenPaw/pull/7774) Hub provisioner allow-list from build | 20 days | **Consistency bug**; hard-coded vs runtime drift | Under review since 2026-09-15 |
| [#7738](https://github.com/agentscope-ai/QwenPaw/pull/7738) Filter unrecognized kwargs for OpenAI compat | 22 days | **Middleware/proxy compatibility**; prevents `TypeError` on custom kwargs | Under review since 2026-09-13 |
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) Reject conflicting chat payloads | 41 days | **API correctness**; was accepting duplicate payloads silently | **Closed today** — resolved |
| [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) Scroll-back pagination | 31 days | **Major UX feature**; size/XXXL, first-time contributor | Large scope; needs review bandwidth |

---

**Project Health Indicator**: 🟡 **Stabilizing under pressure** — High bug severity but active fix pipeline; first-time contributor influx is healthy; critical architectural issues (#7722, #7840) lack PRs yet. Recommend maintainer triage focus on memory exhaustion and plugin isolation this sprint.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-10-05

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 60 items (10 issues + 50 PRs) updated in the last 24 hours. The project is in an active stabilization phase targeting **v0.8.6**, with multiple critical bug fixes around config persistence, runtime composition boundaries, and daemon/session state management. Five PRs were merged/closed today, indicating steady integration throughput. No new release was published, but several `release:v0.8.6` tagged items suggest an imminent patch. The backlog carries several **P0/P1 security and data-loss risks** (config overwrite, secret handling on Android) that are actively being addressed.

## 2. Releases
**No new releases published today.**  
The `release:v0.8.6` label appears on 5 open PRs (#11534, #11533, #11526, #11521, #11518) and 2 issues (#10993, #11519), signaling a coordinated patch cut. Expected scope: runtime capability composition, config save validation, daemon session recovery, CLI approval provenance, and test determinism.

## 3. Project Progress (Merged/Closed Today)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#11521](https://github.com/zeroclaw-labs/zeroclaw/pull/11521) | docs(runtime): record Core Team approval of composition exception | Runtime architecture | Unblocks runtime embedding work (#10993) |
| [#11518](https://github.com/zeroclaw-labs/zeroclaw/pull/11518) | fix(approval): preserve CLI input failure provenance | CLI / approvals | Fixes misleading "Denied by user" when stdin=EOF (#11335) |
| [#11534](https://github.com/zeroclaw-labs/zeroclaw/pull/11534) | test(runtime): make RPC and delegate fixtures deterministic | Test infra | Reduces flakiness in CI |
| [#11533](https://github.com/zeroclaw-labs/zeroclaw/pull/11533) | test(runtime): isolate bootstrap WARN capture | Test infra | Improves parallel test reliability |
| [#11335](https://github.com/zeroclaw-labs/zeroclaw/issues/11335) | **CLOSED** — CLI approval prompt reports fail-closed as user denial | Runtime/daemon | Resolved via #11518 |

**Net progress:** Core runtime composition exception approved; config save safety and CLI approval semantics fixed; test suite hardened.

## 4. Community Hot Topics (Most Active Items)
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Issue | 10 | 👍 2 | **Compact local runtime profile** — users want a "local_small" mode that caps prompt budget, disables fallback parsing, prevents system-instruction leakage. High community interest (P2, accepted, in-progress). |
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | Issue | 6 | — | **Config::save() data loss** — P0/S0: populated 109 KB config.toml replaced with 702-byte skeleton during workspace test. Blocking for operators with many agents. |
| [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | Issue | 4 | — | **ZeroCode "Copy" button broken** — clipboard no-op in TUI (Linux). S1 workflow block. |
| [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993) | Issue | 3 | — | **Runtime composition boundary** — architectural refactor to allow embedding with explicit capabilities (depends on #7432, #5559, #7430). |
| [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525) | Issue | 3 | — | **Android/Termux quickstart fails** — config persistence error on aarch64. P1, quickstart label. |

**Underlying themes:**  
- **Local-first UX** (#5287) — demand for lean, predictable local model runs.  
- **Config durability** (#10495, #11519, #11525) — multiple reports of config corruption/loss across platforms.  
- **Embeddability** (#10993, #11526) — push to make runtime a library with clear capability boundaries.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S0 / P0** | [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) Config::save() overwrites populated config with near-empty file | Open, in-progress | [#10499](https://github.com/zeroclaw-labs/zeroclaw/pull/10499) (validated persistent writes), [#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527) (refuse unproven full saves) |
| **S1 / P1** | [#11525](https://github.com/zeroclaw-labs/zeroclaw/issues/11525) quickstart fails on Android/Termux (config persist) | Open | — |
| **S1 / P1** | [#11519](https://github.com/zeroclaw-labs/zeroclaw/issues/11519) Resumed workspace split hides installed plugins from recovery | Open, in-progress | — |
| **S1** | [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) ZeroCode "Copy" button non-functional (Linux clipboard) | Open | [#11529](https://github.com/zeroclaw-labs/zeroclaw/pull/11529) (local clipboard writers + outcome reporting) |
| **S2 / P1** | [#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539) AgentEnd missing cost_usd; channel path never emits AgentEnd | Open, no-stale | [#11535](https://github.com/zeroclaw-labs/zeroclaw/pull/11535) (restore cost attribution) |
| **S2 / P2** | [#11432](https://github.com/zeroclaw-labs/zeroclaw/issues/11432) Daemon killed mid-turn leaves session `running` forever | Open | — |
| **S2 / P2** | [#9190](https://github.com/zeroclaw-labs/zeroclaw/issues/9190) Reliable provider key rotation selects but cannot apply alternate keys | Open, no-stale | — |

**Critical path:** #10495 (data loss) has two concurrent fix PRs (#10499, #11527) — highest priority for merge.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v0.8.6 / Next |
|--------|--------|------------------------------|
| **Compact `local_small` runtime profile & prompt-budget contract** | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) (P2, accepted, in-progress) | High — active work, strong community signal |
| **Public runtime composition boundary (embeddable runtime)** | [#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993) (accepted, release:v0.8.6) | High — Core Team exception approved (#11521), PR #11526 open |
| **Android native tools & standalone app** | [#10205](https://github.com/zeroclaw-labs/zeroclaw/pull/10205) (XL, parking-lot) | Medium — large scope, needs-author-action, but Android quickstart bug (#11525) adds urgency |
| **Guided cron schedule editor (web)** | [#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698) (L, parking-lot) | Low — stale-candidate, web-only |
| **Sendblue iMessage/SMS channel** | [#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768) (XL, parking-lot) | Low — needs-author-action, stale-candidate |
| **agy_cli (Antigravity CLI) coding tool delegate** | [#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076) (XL) | Medium — Google deprecating Gemini CLI, active maintenance |
| **Typed stop taxonomy for turn-path aborts** | [#10504](https://github.com/zeroclaw-labs/zeroclaw/pull/10504) (L, refactor) | Medium — architectural cleanup for agent-loop |

**Prediction:** v0.8.6 will ship runtime composition, config save hardening, CLI approval fix, and test determinism. `local_small` profile and Android support likely target v0.9.

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Config corruption / loss** | #10495 (109 KB → 702 B), #11519 (plugins hidden), #11525 (Android persist fail) | 3 distinct reports in 24h |
| **Local model UX bloat** | #5287: "prompt bloat", "permissive fallback parsing", "system instructions leak to user output" | Long-standing (Apr), 10 comments, 2 👍 |
| **Daemon/session reliability** | #11432 (zombie `running` sessions), #11335 (misleading denial msg) | 2 daemon issues |
| **Observability gaps** | #8539 (missing cost_usd, missing AgentEnd on channel path) | 1 issue, 2 comments |
| **Mobile/Termux support** | #11525 (Android 16/Termux quickstart broken) | New, P1 |
| **ZeroCode clipboard** | #11418 (Copy button no-op) | New, S1 |

**Sentiment:** Operators running multi-agent workspaces are **blocked by config durability**; local-first users **demand leaner runtime**; mobile/Termux users **cannot onboard**. Fixes are in flight but not yet merged.

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Labels | Why It Matters |
|------|-----|--------|----------------|
| [#10499](https://github.com/zeroclaw-labs/zeroclaw/pull/10499) fix(config): validate persistent config writes | 35 days | needs-author-action, risk:high, size:XL | Direct fix for P0 #10495; large, needs review |
| [#10205](https://github.com/zeroclaw-labs/zeroclaw/pull/10205) feat(android): native tools & standalone app | 45 days | needs-author-action, risk:high, size:XL, parking-lot | Unblocks Android; stalled |
| [#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768) feat(channels): Sendblue iMessage/SMS | 25 days | needs-author-action, stale-candidate, parking-lot | Non-Apple iMessage path; community demand? |
| [#10698](https://github.com/zeroclaw-labs/zeroclaw/pull/10698) feat(web): guided cron editor | 28 days | needs-author-action, stale-candidate, parking-lot | UX polish; low priority |
| [#10504](https://github.com/zeroclaw-labs/zeroclaw/pull/10504) refactor(turn): typed stop taxonomy | 35 days | needs-maintainer-review, topic:agent-loop | Architectural clarity for agent-loop; medium risk |
| [#11111](https://github.com/zeroclaw-labs/zeroclaw/pull/11111) docs(runtime): bounded SOP RPC exception | 10 days | needs-maintainer-review, risk:high | Runtime composition unblocker; small but high-risk label |
| [#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527) fix(config): refuse unproven full saves | 1 day | needs-maintainer-review, risk:high, risk:manual | Second fix for #10495; requires manual test |

**Action recommended:** Prioritize review of #10499 and #11527 (P0 data loss), then #11111 (unblocks #10993). Ping authors on stale XL PRs (#10205, #10768) to confirm intent or close.

---

**Project Health Score: 🟡 Yellow → trending 🟢 Green**  
*Active fixes for critical bugs, clear v0.8.6 scope, but config durability and Android onboarding remain user-visible gaps until merges land.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*