# OpenClaw Ecosystem Digest 2026-09-11

> Issues: 163 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-11 04:15 UTC

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

# OpenClaw Project Digest — 2026-09-11

## 1. Today's Overview

OpenClaw shows **high velocity** with 663 total items updated in the last 24 hours (163 issues, 500 PRs). The project maintains two active release trains: v2026.9.4 (current stable) and v2026.6.35 (final June 2026 LTS). With 267 PRs merged/closed today versus 233 still open, the merge throughput is healthy. The issue backlog shows 65 active/open issues against 98 closed, indicating net progress. Key themes today: update/recovery reliability, provider auth boundaries, session state integrity, and UI/UX polish across Web, macOS, and mobile clients.

---

## 2. Releases

### v2026.9.4 (Current Stable)
**Highlights:**
- **Recover from compatible failed updates** (#140339): Retains previous package and restores it with previous configuration/service when schema/config checks prove rollback is safe. Database migrations still require verified pre-update backup.
- This addresses a critical gap where failed updates could leave the gateway in a broken state without automatic recovery.

### v2026.6.35 (June 2026 Extended Stable / LTS — Final)
**Highlights:**
- **Safer provider and channel boundaries**: Bundled providers and channel adapters now bound untrusted response bodies, reject oversized inputs before expensive work, and preserve safe recovery when transport fails.
- This is the final LTS release for the June 2026 train; users should plan migration to the September train.

**Migration Notes:**  
- v2026.9.4 includes the update-recovery fix (#144005) which backs up state before migrations and restores on rollback — critical for anyone upgrading from 2026.9.2 where failed Doctor migrations could leave databases in an incompatible state.
- No breaking changes noted in release notes, but the provider/channel boundary hardening in 2026.6.35 may affect custom providers expecting unbounded response sizes.

---

## 3. Project Progress (Merged/Closed PRs Today — 267 items)

**Major merged/closed PRs (by impact):**

| PR | Area | Summary |
|----|------|---------|
| [#144005](https://github.com/openclaw/openclaw/pull/144005) | `cli`, `gateway`, `update` | **fix(update): back up state before migrations and restore on rollback** — Critical fix for #142770; prevents data loss when Doctor migrations fail mid-update. |
| [#144624](https://github.com/openclaw/openclaw/pull/144624) | `backup` | **fix(backup): preserve committed data in SQLite hardlink aliases** — Fixes WAL data omission in verified archives (closes #144585). |
| [#144544](https://github.com/openclaw/openclaw/pull/144544) | `channel: line` | **fix(line): retire promoted default-account credentials on setup rotation** — Silent no-op fix for credential rotation after single-account promotion. |
| [#144631](https://github.com/openclaw/openclaw/pull/144631) | `agents`, `codex` | **fix(codex): require per-call approval for requester-scoped MCP tools** — Security fix: requester-scoped tools bypassed approval wrapper. |
| [#144587](https://github.com/openclaw/openclaw/pull/144587) | `agents`, `exec` | **fix(exec): complex commands trigger human approval fallback due to reviewer token truncation** — Fixes false approval escalation (closes #144476). |
| [#144583](https://github.com/openclaw/openclaw/pull/144583) | `agents` | **fix(agents): recover tasks when Responses streams end mid-tool-call** — Prevents generic "Agent run failed" when stream cuts during tool execution. |
| [#144622](https://github.com/openclaw/openclaw/pull/144622) | `extensions: memory-core` | **fix(memory): purge phase signals when forgetting sessions** — Orphaned dreaming signals no longer affect ranking on re-create. |
| [#144586](https://github.com/openclaw/openclaw/pull/144586) | `app: macos` | **fix(mac): discard late MLX speech after cancellation** — Prevents late audio delivery from canceled TTS jobs. |
| [#144467](https://github.com/openclaw/openclaw/pull/144467) | `app: macos` | **fix(macos): stop showing healthy remote gateways as stopped** — UI status accuracy for remote gateways without messaging channels. |
| [#144642](https://github.com/openclaw/openclaw/pull/144642) | `app: web-ui` | **improve: simplify sidebar session tree projection** — Maintenance cleanup preserving hierarchy/indicators. |

**Pattern:** Today's merges heavily favor **reliability fixes** (update recovery, backup integrity, auth boundaries, session recovery) over new features. The `maintainer` label appears on ~40% of closed PRs, indicating strong core-team drive.

---

## 4. Community Hot Topics (Most Commented Issues/PRs)

### Top Issues by Comment Count

| Issue | Comments | Area | Core Pain Point |
|-------|----------|------|-----------------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 15 | **hooks/tools** | **Zombie process leak** — `openclaw-hooks`, `bash`, `codex` children accumulate as zombies, degrading runtime. P1, regression, silver-shellfish rating. **No fix PR yet.** |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) | 12 | **cron/safety** | **Hallucinated output on tool failure** — Cron sessions fabricate plausible output instead of failing cleanly. Trust/safety issue (platinum-hermit). Closed stale, needs product decision. |
| [#40786](https://github.com/openclaw/openclaw/issues/40786) | 12 | **backup CLI** | **No exclude patterns** — `backup create` includes `node_modules`, `.env`, `__pycache__`. Large backups + sensitive data exposure. Open, stale, P2. |
| [#141747](https://github.com/openclaw/openclaw/issues/141747) | 10 | **runtime scaffolding** | **~686 tokens/turn injected via `<system-reminder>` with no opt-out** — Context bloat, no user control. P2, silver-shellfish. Open, needs info. |
| [#79168](https://github.com/openclaw/openclaw/issues/79168) | 8 | **security** | **No content-level prompt injection scanning on tool output** — Only XML wrapping exists. Closed stale, needs security review. |
| [#116691](https://github.com/openclaw/openclaw/issues/116691) | 8 | **auth/provider** | **VolcEngine/OpenAI Responses: missing `input.status` on long conversations** — Regression, works for single turn. Open, P2. |
| [#135776](https://github.com/openclaw/openclaw/issues/135776) | 7 | **update/plugins** | **Core/plugin version skew after update** — `openclaw update` leaves exact-pinned official plugins (Discord, Slack) on old version, causing missing exports. P0, platinum-hermit, release-blocker. **Open, 7 comments.** |

### Top PRs by Activity
Most PRs show 0 comments (likely automated or fresh). The highest-engagement PRs are maintainer-driven refactors/fixes awaiting review (e.g., [#144314](https://github.com/openclaw/openclaw/pull/144314) — update recovery authority preservation, XL size, compatibility/security merge risks).

**Underlying Needs:**
1. **Runtime hygiene** — Zombie processes, token bloat, unbounded tool outputs signal maturation gaps in the agent runtime.
2. **Update/recovery trust** — Version skew (#135776), failed migration recovery (#144005), backup integrity (#144624) cluster around "can I upgrade safely?"
3. **Security boundaries** — Prompt injection scanning, provider auth leakage (#142421), credential inheritance (#121622) show active hardening.
4. **UX polish** — macOS app status bugs, WebChat stuck states, Workboard modal data loss — the "last mile" for daily drivers.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical / Release-Blocking (P0)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#135776](https://github.com/openclaw/openclaw/issues/135776) Core/plugin version skew after update — Discord/Slack fail with missing `plugin-sdk/security-runtime` | P0, platinum-hermit, ux-release-blocker | **Open** | No |
| [#141615](https://github.com/openclaw/openclaw/issues/141615) 2026.9.2 webchat: "Authenticated profile verification unavailable" wedges all RPCs until gateway restart | P0, silver-shellfish, ux-release-blocker | **Open** | No |
| [#144066](https://github.com/openclaw/openclaw/issues/144066) gpt-5.4/gpt-5.4-mini misrouted to openai-codex due to stale `auth_profile_state.order` | P0, silver-shellfish, ux-release-blocker | **Open** | No |

### 🟠 High (P1)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process leak from hook/tool children | P1, silver-shellfish, crash-loop | **Open** | No |
| [#144534](https://github.com/openclaw/openclaw/issues/144534) a2a channel reports `tool_delivered=true` but peer never receives request | P1, silver-shellfish, message-loss | **Open** | No |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) Restart recovery claim changed before agent adoption (regression on 2026.7.2-beta.7) | P1, platinum-hermit | **Open** | No |
| [#123176](https://github.com/openclaw/openclaw/issues/123176) Windows node exec stops after `system.run.prepare`; no approval UI card | P1, gold-shrimp, ux-friction | **Open** | No |

### 🟡 Medium (P2) — Selected
| Issue | Area | Status |
|-------|------|--------|
| [#141747](https://github.com/openclaw/openclaw/issues/141747) | 686 tokens/turn runtime scaffolding, no opt-out | Open |
| [#116691](https://github.com/openclaw/openclaw/issues/116691) | VolcEngine long-conversation `input.status` missing | Open |
| [#142421](https://github.com/openclaw/openclaw/issues/142421) | `models auth logout` leaves plaintext creds in cache; `doctor --fix` resurrects | Open |
| [#143980](https://github.com/openclaw/openclaw/issues/143980) | `taskSuggestions.accept` fails in Docker-sandboxed agents (`cwd unavailable`) | Open |
| [#144581](https://github.com/openclaw/openclaw/issues/144581) | Windows `openclaw update` fails at candidate snapshot (malformed canary path) | Open |
| [#144516](https://github.com/openclaw/openclaw/issues/144516) | Custom-provider onboarding cannot define thinking levels | Open |

### 🟢 Recently Fixed (Closed Today)
- [#144424](https://github.com/openclaw/openclaw/issues/144424) — Concurrent heartbeat lanes causing self-sustaining 429 storms (fixed in #144637)
- [#141033](https://github.com/openclaw/openclaw/issues/141033) — `infer model run` local exec fails to materialize account-owned secrets (fixed)
- [#140770](https://github.com/openclaw/openclaw/issues/140770) — Context-overflow precheck ignores tool schemas, clamps `max_tokens` to 1 (fixed)
- [#144585](https://github.com/openclaw/openclaw/issues/144585) — SQLite hardlink alias backup omits WAL data (fixed in #144624)

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Signals | Likelihood Next Version |
|---------|-------|---------|-------------------------|
| **Backup exclude patterns (`.gitignore`-like)** | [#40786](https://github.com/openclaw/openclaw/issues/40786) | 12 comments, stale but persistent, P2, linked PR open | Medium — UX friction for all users; PR exists but stale |
| **Content-based prompt injection scanning on tool output** | [#79168](https://github.com/openclaw/openclaw/issues/79168) | 8 comments, security-rated, closed stale but needs security review | Low-Medium — Security hardening trend, but closed |
| **Scope-bound gateway auth tokens + per-agent dispatch lanes** | [#92367](https://github.com/openclaw/openclaw/issues/92367) | 6 comments, platinum-hermit, from security review | Medium — Aligns with current auth boundary work (#144005, #121622) |
| **Multi-user/partition isolation for memory-lancedb** | [#63550](https://github.com/openclaw/openclaw/issues/63550) | 4 comments, P1, platinum-hermit, enhancement | Medium — Multi-tenancy is a recurring enterprise ask |
| **Per-group `allowFrom` for WhatsApp (parity with Feishu/IRC/LINE/Telegram)** | [#69926](https://github.com/openclaw/openclaw/issues/69926) | 5 comments, diamond-lobster, feature parity | High — Channel parity work is ongoing |
| **Configurable `web_search.maxResults` (currently hardcoded 5)** | [#79384](https://github.com/openclaw/openclaw/issues/79384) | 5 comments, tidepool, closed stale | Low — Simple config exposure, but closed |
| **Log failed tool executions to persistent log** | [#117703](https://github.com/openclaw/openclaw/issues/117703) | 6 comments, closed stale | Medium — Observability gap; transient errors only in chat |
| **Improve upgrade UX when Node.js version requirement changes** | [#107930](https://github.com/openclaw/openclaw/issues/107930) | 5 comments, P0, tidepool, ux-release-blocker | High — Directly adjacent to v2026.9.4 update fixes |

**Predicted Next Version Focus:** Update/recovery robustness (building on v2026.9.4), auth boundary hardening, sandbox/Docker compatibility, and channel parity (WhatsApp `allowFrom`). The P0 upgrade UX issue (#107930) and plugin version skew (#135776) are likely blockers for 2026.9.5.

---

## 7. User Feedback Summary

**Pain Points (from issue descriptions):**

| Category | Representative Feedback |
|----------|-------------------------|
| **Update Reliability** | "`openclaw update` leaves exact-pinned official plugins on previous release — Discord fails with missing export" (#135776); "upgrading to newer Node.js requirement requires manual Node upgrade, reinstall, fix gateway service path" (#

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-11)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **high fragmentation with a clear core-periphery structure**. OpenClaw dominates as the upstream reference implementation (663 items updated in 24h), while 11 downstream forks/siblings pursue specialized niches: mobile-first (CoPaw), embedded/IoT (PicoClaw), enterprise/team (LobsterAI, Hermes), minimalist runtime (ZeptoClaw, NanoClaw), and experimental architectures (ZeroClaw, Moltis). **No project has reached 1.0 stability** — all operate on date-based or beta release trains with frequent breaking changes. The dominant theme across 9/12 active projects is **runtime hardening** (update recovery, session integrity, auth boundaries) over new features, signaling an industry-wide maturation push.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged PRs | Release Status | Health Score |
|---------|--------------|-----------|------------|----------------|--------------|
| **OpenClaw** | 163 (65 open) | 500 (233 open) | 267 | Dual train: v2026.9.4 stable + v2026.6.35 LTS (final) | 🟢 **Strong** — high throughput, structured releases |
| **NanoBot** | 3 (2 open) | 20 (13 open) | 7 | No release today; iterating toward milestone | 🟢 **Healthy** — 35% merge rate, P2 fixes |
| **Hermes Agent** | 13 (all open) | 50 (48 open) | 2 | No release; continuous delivery | 🟡 **Stabilizing** — high PR volume but 96% open, critical bugs piling |
| **PicoClaw** | 2 (1 open) | 7 (all open) | 0 | No release | 🟡 **Moderate** — PR queue growing, QQ connector broken 12d |
| **NanoClaw** | 3 (1 new high) | 6 (3 open) | 3 | No release; main at 2.3.0 | 🟢 **Steady** — core runtime hardening |
| **NullClaw** | 0 | 0 | 0 | No activity | 🔴 **Dormant** |
| **IronClaw** | 1 (new) | 8 (6 open) | 2 | No release | 🟢 **Healthy** — bot-driven deps + targeted features |
| **LobsterAI** | 0 | 13 (3 open) | 10 | No release; post-upgrade hardening | 🟢 **Strong** — 10/13 PRs merged, all upgrade fixes |
| **Moltis** | 2 (both closed) | 3 (all merged) | 3 | No release; accumulating for next | 🟢 **Healthy** — 100% issue/PR closure rate |
| **CoPaw/QwenPaw** | 15 | 40 (24 open) | 16 | v2.2.1-beta.2 shipped | 🟢 **High velocity** — beta regressions but strong throughput |
| **ZeptoClaw** | 4 (3 closed) | 19 (1 open) | 18 | No release | 🟢 **Strong** — security hardening complete, CI fix pending |
| **ZeroClaw** | 4 | 50 (all open) | 0 | No release | 🟡 **Architecture phase** — 50 XL PRs, zero merges, review bottleneck |

**Health Score Legend**: 🟢 Strong (sustainable velocity, releases, low critical backlog) | 🟡 Moderate (active but bottlenecks visible) | 🔴 Dormant/At Risk

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Throughput**: 10-50× higher PR/issue volume than any downstream; 267 merges/day vs. next highest (CoPaw: 16, NanoBot: 7)
- **Release Discipline**: Only project with dual stable/LTS trains and documented migration notes
- **Security Maturity**: Provider/channel boundary hardening (v2026.6.35), update-recovery atomicity (v2026.9.4), prompt-injection scanning discussions
- **Multi-Platform**: Native Web, macOS, mobile, CLI — most forks target 1-2 platforms

**Technical Approach Differences:**
- **Gateway-Centric Architecture**: Central gateway manages sessions, providers, channels, updates — forks either adopt (LobsterAI, NanoClaw) or replace (ZeptoClaw, ZeroClaw, Moltis)
- **Plugin/Extension Model**: Official plugins (Discord, Slack) version-pinned; forks add custom providers (PicoClaw: opencode-go, QQ) or channels
- **Session Recovery**: Atomic rollback with state backup (#144005) — unique in ecosystem

**Community Size**: Largest by far (implied by 663 daily items, 15-194 comment issues). Downstream projects show 0-25 comment discussions — mostly internal contributor chatter.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Update/Recovery Reliability** | OpenClaw (#144005, #135776), LobsterAI (10 migration PRs), NanoClaw (#3760), CoPaw (#7687) | Atomic upgrades, plugin version sync, rollback on failed migrations, no false restart screens |
| **Auth Boundary Hardening** | OpenClaw (#144005, #121622), Hermes (#105839, #107899), ZeptoClaw (#674), ZeroClaw (#9410, #9419) | Short-lived tokens, no plaintext creds in cache, gateway relay for OAuth, scope isolation |
| **Session/State Integrity** | OpenClaw (#144583, #118839), Hermes (#98042, #107915), CoPaw (#7687), Moltis (#293) | Stream recovery, WS reconnection, resume scope correctness, fresh-deploy DB creation |
| **Provider Streaming & Timeouts** | NanoBot (#5730), Hermes (#106648), CoPaw (#7629), ZeptoClaw (WS auth) | Streaming for long internal calls, reasoning-effort handling, token leakage prevention |
| **Multi-Channel Parity** | OpenClaw (#69926), NanoBot (#5356, #5711), IronClaw (#8072, #8076), CoPaw (#7591, #7592) | WhatsApp `allowFrom`, Telegram command mapping, Feishu reasoning UX, Slack shared-channel guidance |
| **Sandbox/Docker Compatibility** | OpenClaw (#143980), NanoClaw (#3689), CoPaw (#7672), Moltis (#293) | Volume mounts, cwd resolution, bind-mount permissions, security sandbox bypasses |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Technical Architecture | Key Differentiator |
|---------|---------------|--------------|------------------------|---------------------|
| **OpenClaw** | Universal gateway + runtime | Developers, power users, integrators | Central gateway, plugin SDK, multi-transport | Upstream reference; dual release trains |
| **NanoBot** | WebUI-first, channel onboarding | Self-hosters, multi-channel operators | TypeScript monorepo, WebUI setup flows | Best-in-class WebUI channel catalog (#5356) |
| **Hermes Agent** | Team/enterprise messaging + skills | Org deployments, customer-facing bots | Gateway + relay + dashboard + skills index | Skills marketplace, collective wisdom agent (#94266) |
| **PicoClaw** | Embedded/IoT + Chinese platforms | Hardware makers, QQ/WeChat users | Rust gateway, DeltaChat/QQ/IRC/Lark channels | QQ/DeltaChat native connectors |
| **NanoClaw** | Minimal agent runner + mailbox | Lightweight self-host, CI agents | Rust agent-runner, SQLite mailbox, admission gates | Admission gate extensibility (#3707) |
| **IronClaw** | Platform-native UX polish | Desktop/mobile power users | Rust + Tauri, platform adapters (Slack/Telegram) | Telegram command menu, IME-compliant composer |
| **LobsterAI** | OpenClaw downstream + enterprise UI | Teams migrating from OpenClaw | Electron + OpenClaw gateway, cowork UI | Rapid OpenClaw version tracking, migration tooling |
| **Moltis** | External-agent orchestration | Devs using AGY/Claude/Codex CLI | Rust, AGY native streaming, cron semantics | AGY streaming without API keys (#1258) |
| **CoPaw/QwenPaw** | Mobile-first + team Hub | Mobile users, Chinese enterprise | Flutter console, Qwen models, Hub multi-tenant | Mobile agent selector, Hub RBAC roadmap (#7318) |
| **ZeptoClaw** | Security-minimal runtime | Security-conscious self-hosters | Rust, WebSocket tickets, no gateway | WS auth tickets instead of bearer tokens (#674) |
| **ZeroClaw** | Architecture R&D + eval harness | Researchers, platform builders | Massive refactors, canonical principals, live eval | RFC-governed evolution, evaluation gating |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity, Pre-Stable)** | CoPaw, Hermes, ZeroClaw | Beta regressions daily, 40-50 PRs/day, major features in flight (Hub, Wisdom Agent, RFC process) |
| **Stabilizing (Hardening Focus, Release-Ready)** | OpenClaw, LobsterAI, NanoBot, NanoClaw, ZeptoClaw, Moltis, IronClaw | P0/P1 bug fixes dominate, release candidates imminent, dependency hygiene cycles |
| **Maintenance Mode (Low Velocity, Targeted Fixes)** | PicoClaw | Connector bugs persist, dependabot noise, 7 PRs/0 merges |
| **Dormant** | NullClaw | Zero activity |

**Maturity Indicators:**
- Only **OpenClaw** has LTS + stable trains
- **ZeptoClaw** and **Moltis** show cleanest "issue → fix → close" cycles (100% closure today)
- **ZeroClaw** has deepest technical debt (9 XL PRs >50 days in review)
- **CoPaw** ships beta releases weekly but with regressions (#7687, #7678)

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Gateway → Runtime Decoupling** | ZeptoClaw (no gateway), ZeroClaw (canonical principals), Moltis (AGY direct) | Build reusable agent runtimes; gateway becomes optional infra |
| **Auth as First-Class Primitive** | 6 projects fixing token leakage, OAuth relay, short-lived tickets | Design for zero-trust from day one; avoid bearer tokens in URLs/logs |
| **Session Recovery = Product Requirement** | OpenClaw atomic rollback, Hermes fanout freeze, CoPaw silent new convo | Invest in deterministic resume; users reject "restart to recover" |
| **Multi-Tenancy Emerging** | CoPaw Hub (#7318), Hermes skills index, ZeroClaw principals, LobsterAI cowork | Team/enterprise features now table stakes for adoption |
| **Local Model Configurability** | NanoClaw hardcoded 30-min ceiling (#3643), CoPaw local download (#7666) | Expose all timeouts/limits as config; self-hosted LLM users need control |
| **Observability Gaps** | OpenClaw zombie processes (#97616), NanoBot silent background failures (#5429), Hermes operator leaks (#107899) | Structured logging + background task telemetry = competitive advantage |
| **Channel Setup as Onboarding Killer** | NanoBot #5356 (30d PR), PicoClaw QQ broken 12d, IronClaw Slack shared-channel UX | Invest in "channel catalog → one-click install → verified" flows |

---

**Bottom Line for Decision-Makers**: The ecosystem is **consolidating around runtime hardening** while **fragmenting on distribution models** (mobile, embedded, team, minimal). OpenClaw remains the de facto standard; forks that track its gateway APIs (LobsterAI, NanoClaw) reduce maintenance burden. Projects investing in **auth boundaries, session recovery, and channel onboarding UX** will win the next adoption wave. **ZeroClaw's RFC process** and **ZeptoClaw's security model** are worth studying for governance and architecture patterns respectively.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-11

---

## 1. Today's Overview

NanoBot showed **high development velocity** on 2026-09-11 with **20 PRs updated** (7 merged/closed, 13 open) and **3 issues updated** (2 open, 1 closed). The project is actively addressing bugs across Discord, WebUI, agent background tasks, and provider streaming timeouts, while advancing WebUI setup flows, iOS PWA fixes, and cron/delivery features. No new release was published today, indicating ongoing iteration toward a future milestone. The merge rate (~35%) and focus on P2-priority fixes suggest a stabilization phase.

---

## 2. Releases

**No new releases today.** The latest activity consists of PR merges and issue triage. Watch for a patch or minor release incorporating today's merged fixes (Discord compaction, WebUI alignment, TUI context display, Telegram commands, MCP OAuth refresh).

---

## 3. Project Progress — Merged/Closed PRs Today (7)

| PR | Title | Area | Key Change |
|----|-------|------|------------|
| [#5720](https://github.com/HKUDS/nanobot/pull/5720) | `fix(discord): update compaction notice in place` | Channel/Discord | Replaces two standalone messages (`Compressing context…`, `Context compacted.`) with a single in-place edit when `sendProgress: false`. Closes #5719. |
| [#5723](https://github.com/HKUDS/nanobot/pull/5723) | `fix(webui): align standalone page widths with conversations` | WebUI | Apps, Skills, Automations, Channels now share the centered `49.5rem` content width and gutters used by session conversations. |
| [#5725](https://github.com/HKUDS/nanobot/pull/5725) | `fix(webui): align chat elements and fix prompt rail grouping` | WebUI | Aligns message footer icons with conversation leading edge; renders compaction notices centered. |
| [#5722](https://github.com/HKUDS/nanobot/pull/5722) | `feat(webui): refine sidebar hierarchy and selection feedback` | WebUI | Sliding rounded background for selection, aligned nested topics, vertical guides with disclosure arrows. |
| [#5469](https://github.com/HKUDS/nanobot/pull/5469) | `fix(tui): show measured request context` | TUI | Idle footer now shows provider-reported prompt context/window, cache ratio, output tokens, generation rate; removes stale cumulative counters. |
| [#5711](https://github.com/HKUDS/nanobot/pull/5711) | `fix(telegram): adapt command spellings within the channel` | Channel/Telegram | Maps canonical hyphenated commands (`/dream-init`) to underscore variants (`/dream_init`) for Telegram menu/help consistency. |
| [#5573](https://github.com/HKUDS/nanobot/pull/5573) | `fix(mcp): refresh expired OAuth tokens automatically` | Provider/MCP | Persists absolute expiry, auth-server metadata, issuer binding; refreshes before request or after 401 with re-discovery. |

**Net effect:** User-facing polish (Discord, WebUI, TUI, Telegram) + critical provider reliability (MCP OAuth). All merged PRs carry `priority: p2` and test coverage.

---

## 4. Community Hot Topics

| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#5356](https://github.com/HKUDS/nanobot/pull/5356) | PR (open, 30 days) | `feat(webui): improve setup flows across chat channels` — redesign catalog, grouped two-column rows, serialized installs, localized copy. **Long-running, high-scope PR** touching WebUI, channels, tests. | **Onboarding friction**: Users struggle to discover, install, and activate channels (Discord, Telegram, WeCom, etc.). This PR aims to make setup self-evident and race-free. |
| [#5429](https://github.com/HKUDS/nanobot/issues/5429) | Issue (open, 24 days) | `AgentLoop does not retrieve exceptions from background tasks` — 1 comment, linked PR #5724. | **Observability gap**: Background task failures (consolidation, archival, title gen) are swallowed, making debugging impossible. |
| [#5726](https://github.com/HKUDS/nanobot/issues/5726) | Issue (open, 1 day) | `[bug] Startup initial password?` — headless server install, no JS link, user cannot find WebUI bootstrap secret. 1 comment. | **Headless deployment UX**: Missing clear documentation for first-login secret on servers without browser access. |
| [#5727](https://github.com/HKUDS/nanobot/pull/5727) | PR (open, 1 day) | `docs(webui): explain headless login secret` — documents `channels.websocket.tokenIssueSecret` and LAN access. **Direct response to #5726.** | Same as above — closing the docs gap for headless operators. |

**Signal:** The community is pushing hard on **WebUI onboarding (headless + channel setup)** and **background-task reliability** — two pillars of production readiness.

---

## 5. Bugs & Stability — Reported/Fixed Today

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | [#5429](https://github.com/HKUDS/nanobot/issues/5429) `AgentLoop` drops background task exceptions | Open (24d) | [#5724](https://github.com/HKUDS/nanobot/pull/5724) open — retrieves results, logs unexpected failures |
| **High** | [#5730](https://github.com/HKUDS/nanobot/pull/5730) Internal model calls (Dream) use non-streaming requests → hit 120s HTTP timeout → exhaust 300s runner limit | Open (today) | PR #5730 open — forces streaming for internal calls with idle timeouts |
| **Medium** | [#5719](https://github.com/HKUDS/nanobot/issues/5719) Discord compaction sends two messages despite `sendProgress: false` | **Closed** | [#5720](https://github.com/HKUDS/nanobot/pull/5720) **merged** |
| **Medium** | [#5726](https://github.com/HKUDS/nanobot/issues/5726) Headless WebUI: no visible bootstrap password | Open (1d) | [#5727](https://github.com/HKUDS/nanobot/pull/5727) open (docs only) — secret location documented; no code change |
| **Medium** | [#5630](https://github.com/HKUDS/nanobot/pull/5630) Dream memory files (SOUL.md, USER.md, MEMORY.md) grow unbounded after #5622 removed size cap | Open (9d) | PR #5630 open — adds size guardrails |
| **Low** | [#5729](https://github.com/HKUDS/nanobot/pull/5729) WeCom/Weixin media fallback names use non-deterministic `hash()` | Open (today) | PR #5729 open — replaces with SHA1 digest |

**Watchlist:** #5429 + #5730 are **silent data-loss / stall risks** — background failures and Dream stalls may go unnoticed in production. Prioritize merges.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **WebUI channel setup overhaul** — grouped catalog, serialized installs, localized copy | [#5356](https://github.com/HKUDS/nanobot/pull/5356) (30d, P2, conflict) | **High** — large but active, addresses top onboarding pain |
| **Cron result delivery targets + batch archive** | [#5620](https://github.com/HKUDS/nanobot/pull/5620) (10d, P2, conflict) | **High** — explicit delivery targets, archive lifecycle, tooling |
| **Model provider removal controls (WebUI)** | [#5352](https://github.com/HKUDS/nanobot/pull/5352) (30d, P2, conflict) | **Medium** — blocked by reference checks (presets, image gen) |
| **iOS PWA tap/status-bar fixes** | [#5641](https://github.com/HKUDS/nanobot/pull/5641) (8d, P2, conflict) | **High** — 3 concrete fixes, mobile UX critical |
| **Completion notification sound (opt-in)** | [#5602](https://github.com/HKUDS/nanobot/pull/5602) (12d, P2, conflict) | **Medium** — closes #5524, minor polish |
| **Workspace override for Archive consolidation prompt** | [#5702](https://github.com/HKUDS/nanobot/pull/5702) (3d, P2, conflict) | **High** — parity with Dream prompt override, low risk |
| **Preserve explicit API types across search toggles** | [#5698](https://github.com/HKUDS/nanobot/pull/5698) (3d, P2, conflict) | **High** — fixes regression in provider form state |

**Prediction:** Next release will likely bundle **WebUI setup polish (#5356, #5722, #5723, #5725)**, **cron/archive delivery (#5620)**, **iOS PWA (#5641)**, and **critical bug fixes (#5720, #5724, #5730, #5630)**. Provider removal (#5352) may slip due to conflicts.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Headless WebUI first-login secret invisible** | #5726 — user installed on headless server, accessed via Firefox from workstation, "no idea which password" | Blocks deployment on servers without local browser; docs fix (#5727) helps but secret generation flow may need CLI `nanobot webui --print-secret` |
| **Discord noise from compaction** | #5719 — two extra messages per idle compaction despite `sendProgress: false` | Chat disruption; fixed in #5720 |
| **iOS PWA double-tap / status bar** | #5641 — first tap swallowed by `:hover`, status bar overlaps content | Mobile usability degradation |
| **Background task failures silent** | #5429 — consolidation, archival, title gen failures only appear as asyncio warnings | Operators unaware of data-consistency issues |
| **Dream memory unbounded growth** | #5630 — files injected into every request, no size cap since #5622 | Latency creep, token bloat, potential OOM |
| **Telegram command spelling mismatch** | #5711 — help shows `/dream-init` but Telegram expects `/dream_init` | User confusion; fixed in #5711 |
| **MCP OAuth token expiry breaks long-running gateways** | #5573 — no auto-refresh, restart required | Fixed in #5573 |

**Satisfaction signals:** Quick turnaround on Discord (#5719→#5720 in 2 days), Telegram (#5711), TUI (#5469), MCP (#5573) shows responsive maintenance. Headless WebUI docs (#5727) opened same day as issue (#5726).

---

## 8. Backlog Watch — Stale / Needs Attention

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#5356](https://github.com/HKUDS/nanobot/pull/5356) `feat(webui): improve setup flows` | 30d | **Largest open PR** — touches catalog, install serialization, localization, tests. Merge would unblock onboarding for all channels. | Conflicts (`conflict` label), scope creep risk. Needs maintainer review bandwidth. |
| [#5352](https://github.com/HKUDS/nanobot/pull/5352) `Add model provider removal controls` | 30d | User-requested cleanup; prevents orphaned provider configs. | `conflict` label; depends on reference-graph validation (presets, image gen). |
| [#5620](https://github.com/HKUDS/nanobot/pull/5620) `feat(cron): configurable delivery + batch archive` | 10d | Major automation enhancement — delivery targets, archive lifecycle, tooling. | `conflict` label; multi-file, needs integration test review. |
| [#5429](https://github.com/HKUDS/nanobot/issues/5429) `AgentLoop background task exceptions` | 24d | **Reliability hole** — silent failures in consolidation, archival, title gen. | Fix PR #5724 open 1 day; needs review + test for async error propagation. |
| [#5630](https://github.com/HKUDS/nanobot/pull/5630) `Dream memory size guardrails` | 9d | Prevents unbounded memory file growth → token bloat. | `conflict` label; requires careful sizing defaults + migration for existing large files. |
| [#5641](https://github.com/HKUDS/nanobot/pull/5641) `iOS PWA tap/status-bar fixes` | 8d | Mobile PWA usability; 3 discrete fixes. | `conflict` label; CSS/JS touch-event nuances need device testing. |

**Recommendation:** Prioritize review/merge of **#5724 (background exceptions)**, **#5730 (Dream streaming timeout)**, **#5630 (memory guardrails)** — these are stability-critical. Then clear the **WebUI setup trilogy (#5356, #5352, #5620)** which collectively define the next UX tier.

---

*Digest generated from GitHub API data for HKUDS/nanobot on 2026-09-11. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-11

---

## 1. Today's Overview
Hermes Agent shows **high maintenance velocity** with 50 PRs and 13 issues updated in the last 24 hours, but **zero new releases**. The project is in a heavy bug-fix and stabilization phase: two PRs were merged (MCP OAuth relay, relay profile disable), while 48 PRs remain open—most targeting session resilience, messaging gateway hygiene, cron reliability, and Windows/desktop compatibility. A long-standing skills-index freshness issue (#66616, 194 comments since July) remains unresolved, indicating a chronic CI/CD health debt. Several critical user-facing bugs were filed today (session fanout freeze, operator-diagnostic leaks to customers, resume-scope mismatch, compaction-count false positives), suggesting the recent feature surface area has outpaced hardening.

---

## 2. Releases
**No new releases today.** The last published version is not indicated in the data; the project appears to be on a continuous-delivery or pre-release cycle.

---

## 3. Project Progress (Merged / Closed PRs Today)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#107909](https://github.com/NousResearch/hermes-agent/pull/107909) | **feat(gateway): relay MCP OAuth callbacks from messaging chats** | Gateway / MCP | Enables agents in messaging chats (Telegram, WhatsApp, etc.) to initiate `hermes mcp login` and receive the OAuth callback via the gateway—unblocks remote MCP server authentication for chat-driven workflows. |
| [#105839](https://github.com/NousResearch/hermes-agent/pull/105839) | **fix(relay): honor explicit profile disable before relay startup** | Gateway / Config | Prevents credential provisioning and relay registration when `platforms.relay.enabled: false` is set, even if a relay URL is supplied. Eliminates a startup race that could expose unwanted connections. |

> **Note:** Both PRs were created and closed today, suggesting rapid turnaround for well-scoped gateway fixes.

---

## 4. Community Hot Topics (Most Active Issues / PRs)

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Issue (bug) | 194 | 0 | **Skills index freshness** — automated probe reports index 29.8 h old (limit 26 h). Blocks `/docs/skills` and skill discovery. Chronic since July; needs workflow reliability or alerting overhaul. |
| [#74933](https://github.com/NousResearch/hermes-agent/issues/74933) | Issue (bug) | 4 | 1 | **Hindsight "shared" scope rejected** — provider discards documented `shared` observation scope, fragmenting memory by session. Affects multi-session memory coherence. |
| [#106648](https://github.com/NousResearch/hermes-agent/issues/106648) | Issue (bug) | 4 | 0 | **DeepSeek 400 on long reasoning sessions** — `reasoning_content` echo-back + `reasoning_effort` triggers empty HTTP 400. Workaround: omit `reasoning_effort`. Impacts opencode-go provider users. |
| [#107915](https://github.com/NousResearch/hermes-agent/issues/107915) | Issue (bug) | 2 | 0 | **Session-event fanout silent detach** — overflowing subscriber socket stays open, pane freezes permanently. Critical for dashboard/TUI reliability. |
| [#96948](https://github.com/NousResearch/hermes-agent/issues/96948) | Issue (bug) | 2 | 0 | **Dashboard WS 10 s write timeout** — hardcoded timeout drops in-flight generations during heavy sessions. |

> **Pattern:** Session/message delivery reliability (fanout, WS timeouts, scope mismatches, diagnostic leaks) dominates today’s new issues. The skills-index staleness (#66616) is the longest-running “hot” item by far.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Critical** | [#107915](https://github.com/NousResearch/hermes-agent/issues/107915) | Session-event fanout silently detaches overflowing subscriber; socket open, pane frozen permanently. Affects all dashboard/TUI users. | No |
| **Critical** | [#107899](https://github.com/NousResearch/hermes-agent/issues/107899) | Operator-only diagnostics (turn-budget, file-mutation verifier, provider errors) leak to **customer-facing** WhatsApp/Telegram chats. 5 distinct leaks found in prod. | **Yes** — [#107904](https://github.com/NousResearch/hermes-agent/pull/107904) |
| **High** | [#107485](https://github.com/NousResearch/hermes-agent/issues/107485) | SSH-isolated backend idle-exit watchdog **kills running cron executions** and skips scheduled slots. Breaks automation reliability. | **Yes** — [#107503](https://github.com/NousResearch/hermes-agent/pull/107503) |
| **High** | [#98042](https://github.com/NousResearch/hermes-agent/issues/98042) | Remote TUI WS drop mid-turn leaves session unrecoverable: sticky `gateway exited` flag, phantom “another process using session”. | No |
| **High** | [#106648](https://github.com/NousResearch/hermes-agent/issues/106648) | DeepSeek long sessions → empty HTTP 400 (non-retryable). Workaround exists but degrades reasoning quality. | No |
| **Medium** | [#96948](https://github.com/NousResearch/hermes-agent/issues/96948) | Dashboard embedded-chat WS dropped by hardcoded 10 s write timeout mid-generation. | No |
| **Medium** | [#107911](https://github.com/NousResearch/hermes-agent/issues/107911) | `/resume <n>` resolves against different scope than `/sessions all`; numbers unresolvable. Admin `--all` doesn’t widen `source`. | No |
| **Medium** | [#107905](https://github.com/NousResearch/hermes-agent/issues/107905) | Resume guard counts compaction-generation copies → 4.7 k msg session refused at 20 001 rows. | **Yes** — [#107912](https://github.com/NousResearch/hermes-agent/pull/107912), [#107913](https://github.com/NousResearch/hermes-agent/pull/107913) |
| **Medium** | [#107907](https://github.com/NousResearch/hermes-agent/issues/107907) | Cron job delivery to Matrix fails with Timeout context manager error; direct messages work. | No |
| **Medium** | [#107829](https://github.com/NousResearch/hermes-agent/issues/107829) | `tui_gateway` dispatcher crashes on `FileNotFoundError` for deleted profile during `session.create`. | No |
| **Low** | [#74933](https://github.com/NousResearch/hermes-agent/issues/74933) | Hindsight provider rejects documented `"shared"` observation scope, fragments memory. | No |
| **Chronic** | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale/degraded (29.8 h > 26 h limit). Automated probe failing since July. | No |

> **Fix coverage:** 4 of the 12 bugs filed/updated today have open fix PRs (#107899, #107485, #107905). The critical fanout freeze (#107915) and TUI unrecoverable state (#98042) have no PR yet.

---

## 6. Feature Requests & Roadmap Signals

| Issue / PR | Signal | Likelihood for Next Version |
|------------|--------|-----------------------------|
| [#107914](https://github.com/NousResearch/hermes-agent/issues/107914) | **Environment-probing background review** (arXiv:2609.11060) — verify uncertain memory/skill writes against live env before commit. | Medium — research-backed, but requires new agent fork; may land behind a flag. |
| [#94266](https://github.com/NousResearch/hermes-agent/pull/94266) | **Hermes Collective Wisdom Agent V1** — large feature PR open since Aug 24, updated today. “Deadline handoff” suggests deferred acceptance; could ship soon if maintainers prioritize. | High — code complete, awaiting consolidated review. |
| [#107896](https://github.com/NousResearch/hermes-agent/pull/107896) | **Dashboard skill picker in chat sidebar** — search & launch `/skill` from UI. Small, user-visible improvement. | High — low risk, builds on existing `/api/skills`. |
| [#107908](https://github.com/NousResearch/hermes-agent/pull/107908) | **MCP Agent Guild preflight catalog entry** — endpoint observation before delegation. Free tier only. | Medium — niche but aligns with MCP ecosystem push. |
| [#107910](https://github.com/NousResearch/hermes-agent/pull/107910) | **Desktop scroll-position restore** across kept-alive bot switches. Polish for desktop UX. | High — trivial fix, improves perceived quality. |

> **Theme:** Dashboard/desktop polish (skill picker, scroll restore), MCP ecosystem integration, and a major “Wisdom Agent” feature are the visible roadmap items. Core stability (session fanout, cron, WS) must land first.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Session unreliability across transports** | #107915 (fanout freeze), #98042 (TUI WS drop), #96948 (dashboard WS timeout), #107911 (resume scope mismatch) | Users lose in-flight work, cannot resume sessions, panes freeze—core UX broken for daily drivers. |
| **Operator noise in customer chats** | #107899 (5 leak types in WhatsApp prod) | **Production blocker** for customer-facing deployments; trust/security risk. |
| **Cron automation silently failing** | #107485 (idle-exit kills jobs), #107907 (Matrix delivery timeout) | Scheduled agents unreliable; manual fires poison ledger (#106970). |
| **Provider-specific reasoning bugs** | #106648 (DeepSeek 400 on `reasoning_effort` + `reasoning_content`) | Forces workaround that degrades model capability; affects opencode-go users. |
| **Skills discovery broken** | #66616 (index 29.8 h stale) | Skill Hub unusable; taps invisible within cache TTL (#106736). |
| **Windows gateway resume regression** | #106702 (Job Object teardown kills relaunched gateway) | Windows users hit hard-fail on `hermes update`. |

> **Satisfaction signals:** No positive feedback (👍) on new issues; only #74933 has 1 👍. Users are filing bugs, not praising features. The volume of “today” issues (7/13 created 2026-09-11) suggests a recent regression wave or increased deployment scale exposing latent bugs.

---

## 8. Backlog Watch (Long-Unanswered / Stalled Items)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **56 days** (since 2026-07-18) | Skills index freshness is a **platform health metric**; 194 comments indicate repeated automated alerts, no root-cause fix. Blocks skill discoverability. | Open, no fix PR |
| [#94266](https://github.com/NousResearch/hermes-agent/pull/94266) | **18 days** (since 2026-08-24) | **Collective Wisdom Agent V1** — major feature, “deadline handoff” passed, code complete but unmerged. Needs maintainer review consolidation. | Open, updated today |
| [#98042](https://github.com/NousResearch/hermes-agent/issues/98042) | **13 days** (since 2026-08-29) | TUI remote session unrecoverable after WS drop — **data loss / session corruption** risk for distributed teams. | Open, 1 comment |
| [#96948](https://github.com/NousResearch/hermes-agent/issues/96948) | **14 days** (since 2026-08-28) | Hardcoded 10 s WS write timeout — known cause, simple fix (configurable timeout), but unaddressed. | Open, 2 comments |
| [#74933](https://github.com/NousResearch/hermes-agent/issues/74933) | **43 days** (since 2026-07-30) | Hindsight `shared` scope rejection breaks multi-session memory model; low comment count but high architectural impact. | Open, 4 comments |

> **Recommendation

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-11

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 7 open PRs and 2 issue updates in the last 24 hours, but **no merges or releases**. The workload is heavily tilted toward dependency updates (5 dependabot PRs) and two substantive contributions: a new `opencode-go` provider and a fix for the `deltachat` channel registration bug. The stale `qq` channel issue (#3349) remains unresolved, indicating a backlog in connector stability. Overall project health appears steady but with a growing PR review queue.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress
**No PRs were merged or closed today.** All 7 PRs remain open. The two feature/fix PRs (#3371, #3376) are awaiting review; the five dependabot PRs (#3360–#3364) are routine dependency bumps that typically require CI validation before merge.

## 4. Community Hot Topics
| Item | Type | Activity | Link | Core Need |
|------|------|----------|------|-----------|
| **#3265** | Issue (Closed) | 6 comments, 1 👍 | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | Gateway fails to start when `deltachat` channel type is unknown despite not being configured — **config validation overreach**. |
| **#3376** | PR (Open) | 0 comments | [#3376](https://github.com/sipeed/picoclaw/pull/3376) | Fixes #3265 by registering `deltachat` as a custom channel type to pass config validation. |
| **#3349** | Issue (Open) | 4 comments, 0 👍 | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ channel fails with **401 Authorization header format error** (code 11241) on both Docker and Linux x86 — **connector authentication regression**. |
| **#3371** | PR (Open) | 0 comments | [#3371](https://github.com/sipeed/picoclaw/pull/3371) | Adds `opencode-go` provider (`https://opencode.ai/zen/go/v1`) with automatic model routing and `x-opencode-session` header support — **expands LLM provider ecosystem**. |

**Analysis**: The deltachat config bug (#3265) has a ready fix (#3376) but awaits merge. The QQ channel issue (#3349) affects a major Chinese platform and has persisted since 2026-08-30 without a fix PR, suggesting either complexity in the auth flow or insufficient maintainer bandwidth for connector debugging.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | **#3349**: QQ channel 401 auth failure (code 11241) — blocks QQ platform usage | Open, stale (12 days) | None |
| **Medium** | **#3265**: Gateway startup fails on unknown `deltachat` channel type even when unconfigured | Closed (stale), fix PR open | **#3376** (open, ready) |

**Note**: #3265 is marked closed but the fix PR #3376 is still open — the issue may have been closed as "stale" rather than truly resolved. Verify merge of #3376 before considering fixed.

## 6. Feature Requests & Roadmap Signals
1. **OpenCode Go provider** (#3371) — Explicitly requested via PR, indicates demand for OpenCode's Go-hosted models. Likely to land in next minor release if CI passes.
2. **QQ channel stabilization** — Implicit roadmap signal: a major connector is broken; fix will be prioritized if enterprise/community users rely on QQ.
3. **Dependency hygiene** — 5 dependabot PRs signal ongoing maintenance; expect a batch merge after CI validation.

**Prediction**: Next patch release will likely include #3376 (deltachat fix) and #3371 (opencode-go). QQ fix (#3349) may slip to following release unless a contributor submits a PR.

## 7. User Feedback Summary
- **Pain points**: 
  - Gateway startup blocked by phantom channel validation (#3265)
  - QQ platform completely unusable due to auth header regression (#3349)
- **Use cases**: Multi-platform messaging gateways (DeltaChat, QQ, IRC, Lark, etc.), LLM provider aggregation (OpenCode, AWS, etc.)
- **Sentiment**: Neutral to slightly negative — critical connector broken for 12+ days without acknowledgment; dependabot noise dominates PR list.

## 8. Backlog Watch
| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| **#3349** QQ channel 401 error | 12 days | **High** — major platform broken | Maintainer triage: assign or invite community fix; check Tencent QQ API changes |
| **#3376** deltachat fix PR | 1 day | **Medium** — blocks clean startup | Review & merge; re-open #3265 if fix incomplete |
| **#3371** opencode-go provider | 3 days | Low — enhancement | Review provider implementation, test model routing |
| **#3360–#3364** dependabot PRs | 8 days | Low — routine | Batch merge after CI green; monitor for breaking changes in `larksuite/oapi-sdk-go` (v3.9.4→3.11.0) |

---

**Key Links**:  
- Repository: https://github.com/sipeed/picoclaw  
- Issues: https://github.com/sipeed/picoclaw/issues  
- Pull Requests: https://github.com/sipeed/picoclaw/pulls

*Digest generated from GitHub data as of 2026-09-11 00:00 UTC.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-11

## 1. Today's Overview
NanoClaw showed moderate maintenance activity with **6 PRs processed** (3 merged, 3 open) and **3 issues updated** (1 new high-priority bug, 2 closed). No releases were cut. The merged PRs address SQLite locking order, agent-runner admission gates, and a setup verification regression for nohup-started hosts. The standout open issue (#3643) reveals a hardcoded 30-minute absolute ceiling that kills long local-model turns — a configuration gap affecting self-hosted LLM users. Overall, the project is in steady bug-fix mode with incremental core improvements.

---

## 2. Releases
**No new releases today.** The current main branch sits at `2c754a2` (tagged 2.3.0 per issue #3759).

---

## 3. Project Progress — Merged/Closed PRs

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3708](https://github.com/nanocoai/nanoclaw/pull/3708) | **Fix** | Swapped `busy_timeout` before `journal_mode` PRAGMA in outbound SQLite connection (`container/agent-runner/src/mailbox/sqlite/connection.ts`). Prevents exclusive lock contention during journal mode changes. | Improves SQLite reliability under contention; core agent-runner stability. |
| [#3707](https://github.com/nanocoai/nanoclaw/pull/3707) | **Feature** | Added `registerAdmissionGate` / `evaluateAdmission` / `resetAdmissionGatesForTesting` in `container/agent-runner/src/admission-gate.ts`, wired into poll loop after abort check. | Extensibility hook for custom admission control (e.g., rate limiting, quotas) before message processing. |
| [#3760](https://github.com/nanocoai/nanoclaw/pull/3760) | **Fix** | `verify` step now detects a host started via nohup fallback when systemd user instance is unavailable (`systemctl --user` fails). Closes #3759. | Fixes false-negative `SERVICE: not_found` on headless/CI environments without user systemd. |

**Net effect:** Core runtime (agent-runner, mailbox) hardening + setup verification robustness for non-standard host environments.

---

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) **Hardcoded 30-min ABSOLUTE_CEILING_MS kills long local-model turns** | 1 comment, 👍0, **priority/high**, open since 2026-08-28 | **Configurable turn timeout** for self-hosted/long-inference models. Current 1800000 ms ceiling is non-configurable and absolute — containers are SIGKILLed mid-turn. Blocking for local LLM users (OpenCode → OpenAI-compatible servers). |
| [#3689](https://github.com/nanocoai/nanoclaw/pull/3689) **Fix: snapshot symlinked mutable roots** | Updated 2026-09-10, open | **Workspace snapshotting correctness** — mutable paths symlinked at root now snapshot target content, not the link. Affects sandbox reproducibility. |
| [#3758](https://github.com/nanocoai/nanoclaw/pull/3758) **Fix: skip portal reminders already answered** | Open, 2026-09-10 | **Setup UX deduplication** — portal perks re-ask answered questions (sandbox image source, etc.). Operator friction reduction. |

**Signal:** Self-hosted model operators need runtime configurability (#3643); setup flow polish continues (#3758).

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) Hardcoded 30-min ceiling kills long local-model turns — no config seam | **Open** | None yet |
| **Medium** | [#3759](https://github.com/nanocoai/nanoclaw/issues/3759) `verify` reports `SERVICE: not_found` for nohup-started host when systemd user instance missing | **Closed** | [#3760](https://github.com/nanocoai/nanoclaw/pull/3760) ✅ Merged |
| **Low** | [#3757](https://github.com/nanocoai/nanoclaw/pull/3757) Ambient credential env var invents false channel in `verify` | **Open PR** | [#3757](https://github.com/nanocoai/nanoclaw/pull/3757) (open) |
| **Low** | [#3684](https://github.com/nanocoai/nanoclaw/issues/3684) (implied by #3689) Snapshot records symlink, not target content | **Closed via PR** | [#3689](https://github.com/nanocoai/nanoclaw/pull/3689) (open, awaiting review) |

**Stability note:** SQLite lock-order fix (#3708) and admission-gate seam (#3707) are preventive stability investments.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Configurable `ABSOLUTE_CEILING_MS` / per-model turn timeouts** | #3643 (high-priority bug, explicit "no config seam") | **High** — directly blocks local-model users; trivial to add env/config knob |
| **Admission gate extensibility** | #3707 (merged) | **Delivered** — foundation for rate limiting, quotas, custom policies |
| **Setup portal deduplication** | #3758 (open PR) | **High** — UX polish, low risk, clear operator pain |
| **Snapshot symlink fidelity** | #3689 (open PR) | **Medium** — correctness fix, needs review |

**Prediction:** Next patch (2.3.1) will likely include #3760, #3708, #3707, and a fix for #3643 (configurable ceiling). #3758 and #3689 are strong candidates if reviews complete.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Affected Segment |
|------------|----------|------------------|
| **Unconfigurable hard timeout kills long inferences** | #3643: "long agent turns are killed mid-turn by the host sweep" with `heartbeatAgeMs=1829985 ceilingMs=1800000` | Self-hosted LLM operators (OpenCode, local OpenAI-compatible servers) |
| **Setup verification false negatives on headless hosts** | #3759: `verify` fails despite host running via nohup | CI / headless / container deployments without user systemd |
| **Setup re-asks answered questions** | #3758: portal perks duplicate prompts (sandbox image source) | Operators running interactive setup |
| **Env leakage causes spurious verify failures** | #3757: ambient credential env var invents channel | Developers with credential-rich environments |

**Satisfaction signal:** Active fixes for setup/verification flows show responsiveness; #3643's 14-day open status with no fix PR suggests capacity constraint or design debate.

---

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) **Hardcoded 30-min ceiling** | 2026-08-28 (14 days) | **High-priority bug, no config seam, blocks local-model workloads.** Simple fix (env var / config file) but no PR yet. |
| [#3689](https://github.com/nanocoai/nanoclaw/pull/3689) **Snapshot symlinked mutable roots** | 2026-08-31 (11 days) | Correctness fix for workspace snapshots; awaits review. Low risk, high value for reproducibility. |
| [#3758](https://github.com/nanocoai/nanoclaw/pull/3758) **Skip answered portal reminders** | 2026-09-10 (1 day) | UX polish; ready for merge if tests pass. |
| [#3757](https://github.com/nanocoai/nanoclaw/pull/3757) **Ambient credential env var in verify** | 2026-09-10 (1 day) | Test reliability fix; small scope. |

**Recommendation:** Prioritize #3643 (configurable ceiling) and #3689 (snapshot fix) for next patch cycle. Both are low-complexity, high-impact for affected users.

---

*Digest generated from GitHub data as of 2026-09-11. Links point to nanocoai/nanoclaw repository.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-11

## 1. Today's Overview

IronClaw shows steady maintenance activity with **8 PRs updated** (6 open, 2 closed) and **1 new issue** in the last 24 hours. The project is in a healthy maintenance phase with no new releases, focusing on dependency updates, platform integrations (Slack, Telegram), and UI stability fixes. The single new issue (#8093) is a daily failure taxonomy report from automated benchmarks, indicating continuous CI/CD monitoring. Overall velocity is moderate with strong bot-driven dependency management and targeted human contributions.

## 2. Releases

**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Author | Scope | Impact |
|----|-------|--------|-------|--------|
| [#8080](https://github.com/nearai/ironclaw/pull/8080) | chore(deps): bump everything-else group (21 Rust updates) | dependabot[bot] | Dependencies | Routine maintenance; uuid 1.24→1.26, base64 0.22→0.23, rust_decimal updates |
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | feat(telegram): register Bot API command menu at activation | thisisjoshford | Telegram integration | **User-facing feature**: Telegram hamburger menu now shows `/model`, `/status`, `/new`, `/stop`, `/interrupt` commands; auto-registers on activation, cleans up on deactivation |

**Summary**: Two PRs closed — one routine dependency batch, one meaningful Telegram UX improvement that surfaces bot commands in the native chat menu.

## 4. Community Hot Topics

| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#8076](https://github.com/nearai/ironclaw/pull/8076) | PR (open) | Updated 2026-09-11, 5 days old | **Slack shared-channel disconnection handling** — distinguish paired-user disconnected shared channels from unpaired accounts; render channel-specific guidance for users and bots; unify rejection classification across product, adapter, and OpenAI-compatible surfaces |
| [#8093](https://github.com/nearai/ironclaw/issues/8093) | Issue (open) | Created 2026-09-10, 0 comments | **Benchmark failure taxonomy** — automated daily analysis of 42 non-pass tasks in `officeqa` suite; majority are genuine model errors (DeepSeek-V4-Flash navigation issues), signaling need for model-side fixes or test adjustments |

**Analysis**: The Slack PR (#8076) addresses a nuanced enterprise integration edge case (shared channel lifecycle), while the benchmark issue (#8093) reflects ongoing model-evaluation infrastructure — both indicate production hardening priorities.

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **Medium** | [#8092](https://github.com/nearai/ironclaw/pull/8092) | **IME composition broken in chat composer** — native IME keys intercepted before command-menu handling; Safari `isComposing` false-positive on Enter (keyCode 229); regression tests added | **Open PR #8092** (fix ready, preserves composition, handles Safari quirk without timers/latches) |
| **Low** | [#8093](https://github.com/nearai/ironclaw/issues/8093) | 42 non-pass tasks in `officeqa` benchmark — mostly model errors (DeepSeek-V4-Flash) | No fix PR; requires model tuning or test expectation updates |

**Stability signal**: One active UI regression fix in review (#8092) with comprehensive test coverage; benchmark failures are model-side, not infrastructure.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Telegram command menu registration** | Merged PR [#8072](https://github.com/nearai/ironclaw/pull/8072) | ✅ **Already delivered** — sets precedent for platform-native command surfacing |
| **Slack shared-channel disconnection UX** | Open PR [#8076](https://github.com/nearai/ironclaw/pull/8076) | 🟡 **High** — detailed implementation, cross-surface consistency work suggests near-term merge |
| **IME-compliant composer** | Open PR [#8092](https://github.com/nearai/ironclaw/pull/8092) | 🟡 **High** — regression-tested fix for international input, critical for non-Latin locales |
| **Dependency freshness** | 4 dependabot PRs (#8094–#8097, #8080) | ✅ **Continuous** — automated, low-risk, likely batched weekly |

**Prediction**: Next patch will include Slack shared-channel fix, IME composer fix, and a dependency batch. Telegram-style command menus may expand to other adapters.

## 7. User Feedback Summary

No direct user-reported issues or feedback in the last 24 hours. All activity is:
- **Automated**: dependabot PRs (4), benchmark taxonomy issue (1)
- **Internal contributor**: Telegram feature (merged), Slack fix (PR), IME fix (PR)

**Pain points inferred from PRs**:
- Slack shared-channel disconnection leaves users without guidance (#8076)
- Non-Latin script users experience composer breakage during IME composition (#8092)
- Telegram users previously lacked discoverable command menu (now fixed in #8072)

## 8. Backlog Watch

| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#8076](https://github.com/nearai/ironclaw/pull/8076) | 5 days | Open, updated today | **Slack shared-channel fix** — cross-cutting change (product, adapter, OpenAI-compatible surfaces); needs maintainer review for classification consistency |
| [#8092](https://github.com/nearai/ironclaw/pull/8092) | 1 day | Open | **IME composer fix** — Safari-specific quirk handling; regression tests included; should be fast-tracked for i18n stability |
| [#8093](https://github.com/nearai/ironclaw/issues/8093) | 1 day | Open | **Benchmark taxonomy** — 42 failures attributed to model; needs triage: model update vs. test flakiness vs. expectation drift |

**No stale PRs >2 weeks** in this snapshot — healthy review throughput.

---

*Generated from GitHub API data for nearai/ironclaw on 2026-09-11. All links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-11

## 1. Today's Overview
LobsterAI shows **high maintenance velocity with zero new issues** but **13 PR updates** in the last 24 hours—10 merged/closed and 3 still open (all stale dependabot updates). The merged PRs are exclusively focused on **OpenClaw v2026.8.1 integration stabilization**: gateway startup reliability, legacy session/workspace migration, memory sidecar handling, and UI polish. No new releases were published. The project appears to be in a **post-upgrade hardening phase**, rapidly resolving regressions introduced by the OpenClaw v2026.8.1 dependency bump.

## 2. Releases
**No new releases today.** The latest published version remains prior to the OpenClaw v2026.8.1 integration work currently being validated through merged PRs.

## 3. Project Progress — Merged/Closed PRs (10)

| PR | Area | Summary | Link |
|----|------|---------|------|
| **#2651** | main, openclaw | Prevent stale desktop sessions from being incorrectly resumed by requiring an explicit interruption marker for recovery. | [#2651](https://github.com/netease-youdao/LobsterAI/pull/2651) |
| **#2650** | docs, main, openclaw | Fix gateway startup failures caused by memory index archive-name collisions between legacy indexes and `.migrated` backups. | [#2650](https://github.com/netease-youdao/LobsterAI/pull/2650) |
| **#2649** | build, docs, main, openclaw | Complete gateway startup state migrations; ensure device identity JSON is handled so preflight doesn’t skip required steps. | [#2649](https://github.com/netease-youdao/LobsterAI/pull/2649) |
| **#2648** | main, openclaw | Deduplicate IM restarts (keep single restart on toggle) and switch MCP config updates to OpenClaw native hot-reload. | [#2648](https://github.com/netease-youdao/LobsterAI/pull/2648) |
| **#2647** | docs, main, openclaw | Quarantine corrupt/empty legacy workspace attestations (e.g., all-NUL files) before they block gateway startup. | [#2647](https://github.com/netease-youdao/LobsterAI/pull/2647) |
| **#2646** | renderer | Apply scheduled-task history date filters locally instead of sending unsupported `startMs`/`endMs` to gateway. | [#2646](https://github.com/netease-youdao/LobsterAI/pull/2646) |
| **#2645** | renderer, cowork | Fix collapsed engine-failure overlay: mark status pill as non-draggable so restore/quick-repair buttons receive clicks on Windows. | [#2645](https://github.com/netease-youdao/LobsterAI/pull/2645) |
| **#2644** | docs, main, openclaw | Avoid false restart screens during config sync by waiting for real readiness and stabilizing `agents.defaults.sessionStore` generation. | [#2644](https://github.com/netease-youdao/LobsterAI/pull/2644) |
| **#2643** | renderer, main, openclaw, cowork | **Feature**: Add opt-in “Enable pre-compression memory save” toggle (default off) to control token cost of memory flush. | [#2643](https://github.com/netease-youdao/LobsterAI/pull/2643) |
| **#2642** | main, openclaw | Unblock legacy session migration when transcripts contain repeated session headers with same ID (archive validation mismatch). | [#2642](https://github.com/netease-youdao/LobsterAI/pull/2642) |

**Theme**: All 10 merged PRs target **OpenClaw v2026.8.1 upgrade fallout**—migration edge cases, gateway restart storms, data-corruption guards, and one user-facing setting (#2643) to manage token costs.

## 4. Community Hot Topics
**No new issues or active discussions** in the last 24h. The three open PRs are **stale dependabot updates** (created 2026-08-10, last updated 2026-09-10) with zero comments/reactions:
- [#2459](https://github.com/netease-youdao/LobsterAI/pull/2459) – `@nodesecure/js-x-ray` 14.3.0 → 16.0.0
- [#2461](https://github.com/netease-youdao/LobsterAI/pull/2461) – `eslint-plugin-react-hooks` 5.2.0 → 7.1.1
- [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464) – `react-dom` 18.3.1 → 19.2.8

**Signal**: Community surface is quiet; all energy is internal stabilization. Dependabot PRs have lingered >30 days—may indicate low priority or CI gating.

## 5. Bugs & Stability — Today’s Fixed Regressions (Ranked by Boot-Blocking Severity)

| Severity | Symptom | Root Cause | Fix PR |
|----------|---------|------------|--------|
| **Critical (boot-block)** | Gateway fails to start with “legacy workspace attestation has an invalid header” (59 NUL bytes on Windows) | Corrupt legacy attestation not guarded | [#2647](https://github.com/netease-youdao/LobsterAI/pull/2647) |
| **Critical (boot-block)** | Gateway startup fails repeatedly when legacy memory index coexists with `.migrated` backup | Archive-name collision leaves source active | [#2650](https://github.com/netease-youdao/LobsterAI/pull/2650) |
| **Critical (boot-block)** | Gateway exits after successful legacy migration because device identity remains in JSON | Preflight skips automatic migration step | [#2649](https://github.com/netease-youdao/LobsterAI/pull/2649) |
| **High (migration-block)** | Legacy session archival blocked: SQLite stores 8 events, archive validation counts 9 (duplicate headers) | Repeated session headers with same ID | [#2642](https://github.com/netease-youdao/LobsterAI/pull/2642) |
| **High (UX regression)** | Editing IM toggle or installing MCP triggers **multiple gateway restarts** | Duplicate restart queuing; MCP marked as must-restart | [#2648](https://github.com/netease-youdao/LobsterAI/pull/2648) |
| **Medium (UI regression)** | Collapsed engine-failure dialog’s status pill overlaps drag region → buttons unclickable on Windows | Missing `non-draggable` on pill container | [#2645](https://github.com/netease-youdao/LobsterAI/pull/2645) |
| **Medium (API misuse)** | Scheduled-task history date filters send unsupported `startMs`/`endMs` → `cron.runs` rejects request | Client-side filtering not applied | [#2646](https://github.com/netease-youdao/LobsterAI/pull/2646) |
| **Low (noise)** | Config sync causes brief readiness probe timeout → false “engine restart” screen shown | Sync path didn’t await real readiness | [#2644](https://github.com/netease-youdao/LobsterAI/pull/2644) |

**All critical/high bugs have merged fixes.** No open bug reports today.

## 6. Feature Requests & Roadmap Signals
Only **one user-facing feature** merged today:
- **#2643** – Opt-in “Enable pre-compression memory save” (default **off**) to let users trade token cost for richer memory. Added under *Settings → Agent Engine → Background Execution*. Bilingual tooltip explains token impact.

**Roadmap inference**:  
- Near-term: **Stabilize OpenClaw v2026.8.1** (current PR wave).  
- Next: Likely **release cut** once migration/restart noise is quiet.  
- Dependabot backlog (#2459, #2461, #2464) suggests **React 19 / tooling upgrade** is pending but not urgent.

## 7. User Feedback Summary
- **Direct QA feedback** cited in #2648, #2644: “Gateway restarts twice on IM toggle”; “Restart screen flashes during config sync”; “MCP install sometimes triggers multiple restarts.”  
- **No public issues/comments** in last 24h → feedback loop is internal (QA → PR).  
- **Pain points addressed**: boot failures on upgrade, restart storms, unclickable dialogs, token-cost surprise.  
- **Satisfaction signal**: Rapid fix turnaround (same-day PRs for QA reports) indicates strong internal process.

## 8. Backlog Watch — Stale Items Needing Maintainer Attention

| Item | Age | Risk | Suggested Action |
|------|-----|------|------------------|
| [#2459](https://github.com/netease-youdao/LobsterAI/pull/2459) `@nodesecure/js-x-ray` 14→16 | 32 days | Security scanner dep; may block future audits | Review breaking changes; merge or close with reason |
| [#2461](https://github.com/netease-youdao/LobsterAI/pull/2461) `eslint-plugin-react-hooks` 5→7 | 32 days | Lint rules drift; could hide hooks bugs | Test in CI; merge if green |
| [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464) `react-dom` 18→19 | 32 days | Major React version; potential rendering regressions | Run full UI regression suite; schedule dedicated merge window |

**No stale issues**—issue tracker is clean.

---

**Bottom line**: LobsterAI is **healthy and actively hardened**. The team is systematically eliminating every OpenClaw v2026.8.1 upgrade blocker. A release candidate is likely imminent once the dependabot backlog is triaged.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-11

## 1. Today's Overview
Moltis showed steady maintenance activity over the past 24 hours with **2 issues closed** and **3 PRs merged**, while 4 feature/dependency PRs remain open for review. The project is in a healthy "bug-fix and polish" phase: two long-standing bugs (Docker fresh-deploy DB creation and misleading `exec` error when `sh` is missing) were resolved and documented. No new releases were cut, indicating the team is accumulating changes for a future version. Open PRs suggest active work on **external-agent streaming (AGY)**, **reasoning-effort granularity**, and **cron edge-case handling**.

## 2. Releases
**No new releases** published today.

## 3. Project Progress — Merged/Closed PRs
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#1252](https://github.com/moltis-org/moltis/pull/1252) | **docs/docker** | Documents the bind-mount permission fix for fresh `docker compose up` deployments. **Closes #293**. | Eliminates a common first-run failure; improves onboarding. |
| [#1260](https://github.com/moltis-org/moltis/pull/1260) | **fix(exec)** | Correctly reports “shell not found in PATH” instead of “working directory does not exist” when `sh` is missing. **Closes #279**. | Removes a confusing error that wasted debugging time. |
| [#1256](https://github.com/moltis-org/moltis/pull/1256) | **chore(deps-dev)** | Bumps `browserslist` 4.28.2 → 4.28.8 in `/crates/web/ui`. | Routine dependency hygiene; no functional change. |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#1258](https://github.com/moltis-org/moltis/pull/1258) **feat(external-agents): add direct AGY streaming** | Open 7 days, updated today | First-class support for Google’s `agy` CLI without requiring Gemini CLI or API keys — users want simpler auth & streaming for external agents. |
| [#1253](https://github.com/moltis-org/moltis/pull/1253) **feat(reasoning): add max effort level** | Open 9 days, updated today | Finer-grained control over reasoning budgets (`max` level) across providers; aligns with OpenAI Codex Responses API. |
| [#1262](https://github.com/moltis-org/moltis/pull/1262) **fix(cron): treat `end="24:00"` as end-of-day** | Open 4 days, updated today | Fixes a silent misconfiguration where the default cron window (`08:00–24:00`) parsed incorrectly, causing 24×7 execution. |

*All three open PRs have zero comments/reactions — maintainer review is the bottleneck.*

## 5. Bugs & Stability — Today’s Resolved Items
| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **High** (blocked fresh installs) | [#293](https://github.com/moltis-org/moltis/issues/293): No DB file on fresh Docker Compose deploy | [#1252](https://github.com/moltis-org/moltis/pull/1252) | **Closed & documented** |
| **Medium** (misleading error) | [#279](https://github.com/moltis-org/moltis/issues/279): `exec` reports “working directory does not exist” when `sh` missing | [#1260](https://github.com/moltis-org/moltis/pull/1260) | **Closed & fixed** |
| **Low** (config parse edge-case) | Cron `end="24:00"` rejected by chrono, fail-open → always active | [#1262](https://github.com/moltis-org/moltis/pull/1262) | **Fix PR open** |

No new bugs reported today.

## 6. Feature Requests & Roadmap Signals
1. **AGY native streaming** (#1258) — High likelihood for next minor release; completes external-agent story.
2. **Reasoning `max` effort level** (#1253) — Aligns with provider APIs; likely to land soon.
3. **Cron `24:00` semantic fix** (#1262) — Small but user-visible; will ship once reviewed.

*Dependabot PRs (#1263, #1256) are routine and not roadmap signals.*

## 7. User Feedback Summary
- **Pain point**: Fresh Docker deployments failed silently with a panic (`failed to open moltis.db`) — now documented and fixed.
- **Pain point**: Cryptic `exec` error when container lacks `sh` — now surfaces the real cause.
- **Implicit need**: Users running scheduled agents hit a silent “always-on” bug due to `24:00` parsing — fix pending review.
- **Positive signal**: Active development on AGY integration shows responsiveness to “bring your own auth/CLI” workflows.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1258](https://github.com/moltis-org/moltis/pull/1258) AGY streaming | 7 days | Core feature for external-agent users; no review yet. |
| [#1253](https://github.com/moltis-org/moltis/pull/1253) Reasoning `max` | 9 days | API surface change; needs design sign-off. |
| [#1262](https://github.com/moltis-org/moltis/pull/1262) Cron `24:00` | 4 days | Silent misconfiguration bug; fix ready, awaits merge. |
| [#1263](https://github.com/moltis-org/moltis/pull/1263) Dependabot (babel, astro, js-yaml…) | 1 day | Routine, but large grouped update — verify CI before merge. |

---

**Health Indicators**  
✅ 2/2 issues closed today | ✅ 3/3 bug-fix PRs merged | ⚠️ 3 feature PRs awaiting review > 4 days | 📦 0 releases this cycle

*Next expected milestone: a patch release bundling the Docker/exec fixes + cron fix, followed by a minor with AGY streaming & reasoning `max`.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-11

## 1. Today's Overview
CoPaw (QwenPaw) shows **high velocity** with 40 PRs and 15 issues updated in the last 24 hours. The project shipped **v2.2.1-beta.2** — a beta patch focused on mobile agent selector improvements and CSS alignment. Merged PRs (16) outpace new opens, indicating strong review throughput. Community discussion is concentrated on the upcoming **QwenPaw Hub multi-tenant edition** (#7318, 25 comments, 4 👍), while several regressions in 2.2.1-beta.2 (subagent model override, chat history navigation, PDF multimodal handling) are being actively triaged.

## 2. Releases
### v2.2.1-beta.2 (Beta) — 2026-09-10
| Change | Type | Details |
|--------|------|---------|
| Mobile agent selector UX | `feat(console)` | Improved selector for mobile layouts (#7623) |
| Version bump | `chore` | 2.2.1-beta.2 tag (#7643) |
| CSS selector alignment | `fix(console)` | Aligned QwenPaw console CSS selectors |

**Breaking changes**: None reported.  
**Migration notes**: Beta release — intended for validation; production users should remain on 2.2.0 stable.  
**Release verification**: Automated installation verification issue #7674 tracks pass/fail across platforms (4 checkpoints required).

---

## 3. Project Progress — Merged/Closed PRs Today (16)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| #7536 | OpenCode API `x-opencode-session` header | Integrations | Fixes OpenCode compatibility; adds regression tests |
| #7562 | Loop mode from composer menu reaches backend | Core/Loop | Fixes silent fallback to default loop mode |
| #7629 | Gemini 400 “trailing model turn” after background tools | Providers/Gemini | Changes notification role to `user`; unblocks Gemini |
| #7591 | Feishu auto-collapse reasoning streaming card | Channels/Feishu | UX improvement for long reasoning traces |
| #7645 | E2E rebuild for unified Environments page | Testing/Environments | Restores 11 failing E2E cases after UI overhaul |
| #7665 | Improve grouped chat history pagination | Console/History | In-group pagination, “Load More”, state preservation |
| #7686 | Chat history group pagination follow-up | Console/History | Removes “Collapse List”, standardizes on “Load More” |
| #7444 | Unify ReMe slash commands | Memory | Completes chat-facing ReMe unification |
| #7691 | Release notes for v2.2.1 | Release | Documentation |
| #7674 | Release duty: v2.2.1-beta.2 installation verification | Release/Process | Automated verification tracking |

**Net progress**: Core loop-mode bug fixed, Gemini provider stabilized, Feishu/Telegram channel polish, history pagination redesigned, E2E suite restored.

---

## 4. Community Hot Topics
| Item | Activity | Core Need / Signal |
|------|----------|---------------------|
| **#7318** [Discussion] QwenPaw Hub multi-tenant — what next? | 25 comments, 4 👍 | **Strong demand for team/enterprise features**: RBAC, shared skills, admin console, audit logs, billing. Community wants clarity on roadmap before 2.2.0 Hub launch. |
| **#7689** [Bug] PDF blocks still sent to multimodal endpoints | 2 comments, 0 👍 | **Multimodal regression**: Fix #7621 only covered `supports_multimodal=False`; OpenAI-compatible endpoints still reject `{"type":"file"}` payloads. |
| **#7676** [Bug] `subagent_model` ignored — inherits parent model | 1 comment, 0 👍 | **Per-task model selection broken**: Critical for cost/quality routing; related to #4901, #6302. |
| **#7678** [Bug] Spawn subAgent always fails (timeout) | 2 comments, 0 👍 | **Subagent reliability**: Users report 100% failure on spawn; blocks delegation workflows. |
| **#7679** [Feature] Loop: add `/compact` context compression | 2 comments, 0 👍 | **Token cost control**: Long-running loops blow context; users want automatic or threshold-based compaction. |

**Underlying theme**: Transition from **personal assistant → team platform** (Hub) is the top strategic ask; stability of **subagent delegation** and **multimodal handling** are immediate technical blockers.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **Critical** | #7687 Switching agent silently creates new conversation (2.2.1-beta.2 regression) | OPEN | No | Desktop 2.2.1-beta.2 / console 2026-09-10 build; bisected to 08-31 vs 09-10 bundle |
| **Critical** | #7678 Spawn subAgent — 100% timeout failure | OPEN | No | Windows 2.2.0; long timeouts don’t help; needs root-cause debug |
| **High** | #7676 `subagent_model` config ignored — inherits parent `active_model` | OPEN | #7680 (diagnostic) | Diagnostic PR adds logging; fix pending |
| **High** | #7689 PDF `file` blocks rejected by multimodal OpenAI-compatible endpoints | OPEN | No | Regression from incomplete #7621 fix |
| **Medium** | #7445 Hub fails to connect to local/LAN model services (127.0.0.1, 192.168.x) | OPEN | No | Since 2.2.0-beta.5; cloud APIs work |
| **Medium** | #7666 Local model download from HF fails; no GGUF file selection | CLOSED | — | Closed as “review later”; user blocked on MiniCPM5-2B-GGUF |
| **Low** | #3113 Initial team-collab instruction ignored until retry | OPEN | No | Long-standing (Apr 2026); low reproduction clarity |

**Fix PRs open today**: #7680 (diagnostic for #7676), #7688/#7686 (history pagination follow-ups), #7690 (mailbox batch safeguards), #7677 (422 validation), #7684 (provider error classification), #7683 (hub audit logging).

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **QwenPaw Hub multi-tenant (RBAC, shared skills, admin UI)** | #7318 (25 comments) | **High** — 2.2.0 target | Explicitly announced; community polling for scope |
| **Loop `/compact` context compression (auto/threshold)** | #7679 | **Medium** — 2.2.x | Clear ROI for long tasks; low implementation risk |
| **Auto-downscale oversized images instead of dropping** | #7671 | **Medium** — 2.2.x | Improves multimodal UX; similar to existing resize logic |
| **Syntax highlighting in Files panel Preview** | #7670 | **Low-Medium** | Nice-to-have; requires Monaco/lightweight highlighter integration |
| **Feishu collapsible reasoning panel (opt-in auto-collapse)** | #7685, #7591 | **High** — 2.2.1 | Already merged (#7591) + enhanced (#7685 open) |
| **Telegram intermediate-message cleanup (opt-in)** | #7592 | **Medium** | First-time contributor; default off, low risk |
| **Per-task model selection (`subagent_model` fix)** | #7676, #4901 | **High** — 2.2.1 | Critical for delegation; diagnostic PR #7680 landed |

**Predicted 2.2.1 scope**: Hub MVP + subagent model fix + history pagination polish + Feishu/Telegram reasoning UX + image downscale + provider error hardening.

---

## 7. User Feedback Summary
| Pain Point | Frequency | User Impact | Example |
|------------|-----------|-------------|---------|
| **Subagent delegation broken** | 2 issues today (#7676, #7678) | High — blocks multi-agent workflows | “No spawned subAgent executes; all timeout” |
| **History navigation regressions** | 1 critical (#7687) + 2 PRs fixing pagination | High — daily driver UX | “Switch agent → silent new conversation” |
| **Multimodal PDF handling incomplete** | 1 high (#7689) | Medium — document-heavy users | “HTTP 400 on OpenAI-compatible endpoints” |
| **Local model download/selection** | 1 closed (#7666) | Medium — offline/LLM-local users | HF download error; no GGUF file picker |
| **Hub local/LAN model connectivity** | 1 medium (#7445) | Medium — hybrid cloud/on-prem | “127.0.0.1:8088/v1 fails” |
| **Team collaboration ignored first try** | 1 old (#3113) | Low-Medium — team users | “Must interrupt & retry to trigger multi-agent” |
| **Positive** | Feishu/Telegram reasoning UX improvements | Positive | Active PRs + merges show responsive channel polish |

**Satisfaction signal**: High engagement on Hub discussion (#7318) shows **anticipation**; beta regressions (#7687, #7678) cause **frustration** but are being triaged rapidly.

---

## 8. Backlog Watch — Stale / Needs Maintainer Attention
| Item | Age | Why It Matters | Current State |
|------|-----|----------------|---------------|
| **#3113** Team collaboration ignored on first request | 5 months (Apr 2026) | Core multi-agent UX; undermines “team” positioning | Open, 2 comments, no PR |
| **#4901** Per-task model selection | Referenced in #7676 | Prerequisite for `subagent_model` to work | Still open (per #7676) |
| **#7445** Hub local/LAN model connection failure | 11 days | Blocks hybrid deployments for Hub beta | Open, 2 comments, no PR |
| **#7672** Windows security sandbox bypass | 1 day (but security) | Potential exploit; Zhihu writeup linked | Open, 1 comment, no PR — **needs security review** |
| **#7655** History FTS corruption on retention cleanup | 2 days | Data integrity; `SQLITE_CORRUPT_VTAB` | Open PR #7655, needs review |
| **#7639** Scroll integrity scan perf (per-process cache) | 3 days | Startup latency for large histories | Open PR #7639, needs review |
| **#7592** Telegram intermediate cleanup (first-time contributor) | 5 days | Opt-in feature; tests needed | Open, awaiting review |

**Action items for maintainers**:
1. **Security triage #7672** immediately (sandbox bypass claim).
2. Assign owner for **#3113** (team collab first-request bug) — 5 months is too long.
3. Review **#7655** (FTS corruption) and **#7639** (perf) — both have open PRs with clear fixes.
4. Decide scope on **#7445** (Hub local connectivity) before 2.2.0 Hub launch.

---

## Links Reference
- **Repo**: https://github.com/agentscope-ai/QwenPaw
- **Release v2.2.1-beta.2**: https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.1-beta.2
- **Hub discussion**: #7318
- **Critical regressions**: #7687, #7678, #7676, #7689
- **Feature requests**: #7679, #7671, #7670
- **Security**: #7672
- **Backlog PRs**: #7655, #7639, #7592, #7680, #7684, #7683, #7685

*Digest generated 2026-09-11 from GitHub data (issues/PRs updated in last 24h).*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-11

## 1. Today's Overview
ZeptoClaw showed **high maintenance velocity** today with 19 PRs closed/merged and 3 security-critical issues resolved. The project is in a **dependency hygiene and security hardening phase** — no new features shipped, but a coordinated cleanup of 17 dependabot PRs (some open since June) plus a significant WebSocket authentication security fix. One CI permission issue remains open (#676) with a corresponding fix PR (#677) awaiting review. Overall project health appears strong: maintainers are actively addressing technical debt and security findings.

## 2. Releases
**No new releases** published today.

## 3. Project Progress

### Merged/Closed PRs (18 total)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#674](https://github.com/qhkm/zeptoclaw/pull/674) | **Security Fix** | Replace WebSocket `?auth=` query param with short-lived tickets | **High** — eliminates token leakage to logs/browser history |
| [#658](https://github.com/qhkm/zeptoclaw/pull/658) | Dependency | Bump Rust `1.95 → 1.98` (slim-trixie) | Medium — toolchain update |
| [#630](https://github.com/qhkm/zeptoclaw/pull/630) | Dependency | Bump Debian base image `b6e2a15 → 4e401d9` | Medium — container base update |
| [#625, #617, #620, #623, #627](https://github.com/qhkm/zeptoclaw/pull/625) | Dependencies (Rust) | `rpassword`, `tower-http`, `scraper`, `tokio`, `serde_json` bumps | Low-Medium — routine updates |
| [#618, #622, #624, #626, #628](https://github.com/qhkm/zeptoclaw/pull/618) | Dependencies (GitHub Actions) | Docker, codecov, taiki-e actions updated | Low — CI maintenance |
| [#616, #619, #621](https://github.com/qhkm/zeptoclaw/pull/616) | Dependencies (JS/panel) | React, Tailwind, @types/node in `/panel` | Low — frontend deps |
| [#614, #615](https://github.com/qhkm/zeptoclaw/pull/614) | Dependencies (JS/docs) | Astro `6.3.x → 6.3.7` in landing pages | Low — docs only |

**Key advancement**: PR #674 resolves all three WebSocket/auth security issues (#653, #655, #656) in a single architectural change — replacing bearer tokens in URLs with CSRF-protected, single-use tickets.

### Open PR
- [#677](https://github.com/qhkm/zeptoclaw/pull/677): `fix(ci): allow rustsec audit check reporting` — grants `checks: write` to the audit job so `rustsec/audit-check` can publish results. Linked to Issue #676.

## 4. Community Hot Topics
| Item | Activity | Analysis |
|------|----------|----------|
| [#653](https://github.com/qhkm/zeptoclaw/issues/653) / [#655](https://github.com/qhkm/zeptoclaw/issues/655) / [#656](https://github.com/qhkm/zeptoclaw/issues/656) | 3 issues, 0 comments each, all closed today by PR #674 | **Security cluster** reported by external contributor `morler` — token leakage in WS query params, non-constant-time comparison, and token printed to stdout. All fixed together. |
| [#676](https://github.com/qhkm/zeptoclaw/issues/676) / [#677](https://github.com/qhkm/zeptoclaw/pull/677) | 1 issue + 1 PR, 0 comments | CI hardening — minor permission gap blocking security audit reporting. Low community friction. |

**Underlying need**: The project attracted a focused security audit (likely from `morler`) revealing systemic auth-token handling flaws. Maintainers responded comprehensively within ~10 days.

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#653](https://github.com/qhkm/zeptoclaw/issues/653): WS auth token in `?auth=` query param → leaks to logs, history, proxies | ✅ Closed | [#674](https://github.com/qhkm/zeptoclaw/pull/674) |
| **High** | [#655](https://github.com/qhkm/zeptoclaw/issues/655): Bearer token compared with `==` (non-constant-time) in 3 locations; false claim of constant-time in docs | ✅ Closed | [#674](https://github.com/qhkm/zeptoclaw/pull/674) |
| **High** | [#656](https://github.com/qhkm/zeptoclaw/issues/656): `panel start` prints full API token to stdout → terminal scrollback, CI logs, screenshots | ✅ Closed | [#674](https://github.com/qhkm/zeptoclaw/pull/674) |
| **Low** | [#676](https://github.com/qhkm/zeptoclaw/issues/676): `rustsec/audit-check` fails to publish check run due to missing `checks: write` permission | 🔴 Open | [#677](https://github.com/qhkm/zeptoclaw/pull/677) (open) |

**No crashes, regressions, or runtime bugs reported today.**

## 6. Feature Requests & Roadmap Signals
**No new feature requests** in the last 24h. The closed issues were pure security fixes.

**Roadmap inference from today's activity**:
- **Security hardening cycle** nearing completion (token handling, constant-time compare, CI audit reporting)
- **Dependency modernization** catching up (17 dependabot PRs merged in batch)
- Next likely focus: **release cut** incorporating Rust 1.98, security fixes, and updated dependencies — or continued CI/CD hardening (the open #677 is the last known blocker)

## 7. User Feedback Summary
**No direct user feedback** (feature requests, bug reports from end-users, or usage discussions) in today's data.

**Indirect signal**: External security researcher `morler` filed 3 well-documented, high-quality issues with code references — indicates the project is **visible to security-conscious practitioners** and taken seriously enough to audit. Maintainers responded promptly and thoroughly.

## 8. Backlog Watch

| Item | Age | Concern | Action Needed |
|------|-----|---------|---------------|
| [#677](https://github.com/qhkm/zeptoclaw/pull/677) (CI fix for #676) | 1 day | Blocks security audit check reporting on push; low-risk permission change | Review & merge — trivial scope (`contents: read`, `checks: write` on one job) |
| [Dependabot PRs from June](https://github.com/qhkm/zeptoclaw/pulls?q=is%3Apr+author%3Adependabot%5Bbot%5D+created%3A2026-06-03) | ~3 months | 17 PRs merged today were stale; suggests dependabot backlog not triaged regularly | Consider: auto-merge for patch/minor, scheduled triage, or dependabot grouping |
| No open feature/bug issues beyond #676 | — | Healthy — no neglected user-facing issues | Maintain current responsiveness |

---

**Health Score**: 🟢 **Strong** — Security issues resolved comprehensively, dependency debt cleared, CI fix in progress, no user-facing regressions. Ready for a patch release once #677 merges.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-11

## 1. Today's Overview
ZeroClaw shows **high development velocity with zero merge activity** in the last 24 hours: 50 open PRs were updated (many long-running, large-scope efforts) and 4 issues refreshed, but no PRs were merged or closed and no releases cut. The backlog is dominated by **XL-sized, high-risk refactors** spanning providers, evaluation harness, security grants, plugin installation hardening, and session ownership—indicating a project in a heavy "architecture hardening" phase rather than feature shipping. Community engagement on individual threads appears light (comment counts undefined/low), suggesting review bandwidth may be the bottleneck.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress (Merged/Closed Today)
**Zero PRs merged or closed** in the last 24 hours. All 50 updated PRs remain open. The most recently updated PRs (all touched 2026-09-11) are large, stacked efforts that have been open for weeks to months:
- Provider identity & context-window resolution (#8966, opened 2026-07-11)
- Anthropic/Bedrock adaptive-thinking support (#10611, opened 2026-09-04)
- Evaluation baseline & regression gating (#9221, #9220, #9219, #9217, #9214 — stacked, opened 2026-07-20)
- Security audit presentation fix (#9410, opened 2026-07-26)
- Gateway viewer disconnect handling (#9002, opened 2026-07-11)
- Plugin egress grant ceremony (#9584, opened 2026-07-31)
- Typed config end-to-end test fixture (#9577, opened 2026-07-31)
- Isolated eval case memory (#9244, opened 2026-07-21)
- Session ownership claim backend (#10412, opened 2026-08-27)
- Canonical principals & grant resolution (#10248, opened 2026-08-22)
- Cron job wall-clock timeout (#9320, opened 2026-07-23)
- Provider credential rotation after rate limits (#9419, opened 2026-07-26)
- Knowledge graph per-agent attribution (#9745, opened 2026-08-04)
- Provider alias probe after model-routing update (#10034, opened 2026-08-16)
- Anthropic refusal handling (#9272, opened 2026-07-23)
- Telegram media group batching (#8955, opened 2026-07-10)

## 4. Community Hot Topics
| Item | Type | Updated | Comments | Signal |
|------|------|---------|----------|--------|
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | Issue (RFC) | 2026-09-10 | 8 | Simplify RFC voting: remove mandatory discussion windows, make REVISE stop snapshot. Contributors feel current 48/72h waits add friction without improving review quality. |
| [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | Issue (RFC) | 2026-09-10 | 7 | Clarify PR review evidence, freshness warnings, author-action boundaries; adds expedited merge lane for clean advisory reviews. High priority (p2), accepted, high risk. |
| [#10770](https://github.com/zeroclaw-labs/zeroclaw/issues/10770) | Issue | 2026-09-11 | 0 | Recover incomplete plugin installations without overwriting valid packages (follow-up from #9134). |
| [#10769](https://github.com/zeroclaw-labs/zeroclaw/issues/10769) | Issue | 2026-09-11 | 0 | Harden plugin payload opens against concurrent ancestor replacement (follow-up from #9134). |

**Analysis**: The two RFCs (#10549, #10366) are the only threads with substantive discussion (8 & 7 comments). Both target **process friction**—RFC voting latency and PR review ambiguity—suggesting contributors want faster, clearer governance. The two new plugin issues are silent but trace to a known PR (#9134), indicating known technical debt being chipped away.

## 5. Bugs & Stability
No new bug reports filed today. However, several **open high-risk bug-fix PRs** remain unmerged, representing known stability gaps:

| PR | Area | Severity | Status |
|----|------|----------|--------|
| [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) | Security: command execution presented as audited | High (domain:security) | Open, needs-author-action |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | Gateway: agent turns cancelled on viewer disconnect | High | Open, needs-author-action |
| [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) | Providers: rotate live credentials after rate limits | High (domain:security) | Open, needs-author-action, **do-not-merge** |
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | Memory: per-agent attribution in knowledge graph | High (domain:security) | Open, needs-author-action |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | Cron: unbounded agent job runs | High | Open, needs-author-action |
| [#10034](https://github.com/zeroclaw-labs/zeroclaw/pull/10034) | Tools: probe saved provider alias after model-routing update | High | Open, needs-author-action |

**Top concern**: #9410 (security misrepresentation) and #9419 (credential rotation) are both `domain:security` and `risk:high`; #9419 is explicitly marked `do-not-merge`, suggesting a design rethink is underway.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **RFC process streamlining** (remove fixed discussion windows, REVISE stops snapshot) | [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | High — RFC accepted status, active discussion |
| **Expedited PR merge lane** for clean advisory reviews | [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | High — RFC accepted, p2 priority |
| **Anthropic/Bedrock adaptive-thinking model support** (Claude Fable/Opus/Sonnet 5) | [#10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611) | High — recent (Sep 4), distinguished contributor, provider-critical |
| **Evaluation baselines + regression gating + capability tracking** | [#9221](https://github.com/zeroclaw-labs/zeroclaw/pull/9221) (stacked) | Medium — large stacked series, depends on #9220 |
| **Live eval mode with sandboxed tool surface** | [#9214](https://github.com/zeroclaw-labs/zeroclaw/pull/9214) | Medium — foundational for CI trust |
| **Plugin egress grant ceremony** (install/list) | [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | Medium — maintainer note indicates scope corrected |
| **Session ownership claim backend** (atomic compare-and-set) | [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) | Medium — core runtime contract |
| **Canonical principals & shared grant resolution** (RFC #7141 Rev 8) | [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248) | Medium — supersedes prior auth work |

## 7. User Feedback Summary
- **Governance pain**: Contributors explicitly call out RFC voting timers as "unnecessary friction" that "often does not produce more review" (#10549).
- **Review ambiguity**: Need for "clarified PR review evidence, freshness warnings, and author-action boundaries" with an expedited path for clean reviews (#10366).
- **Plugin reliability**: Two new issues (#10770, #10769) target installation recovery and race conditions—indicates real-world plugin management friction.
- **Security trust**: Multiple high-risk security PRs linger (#9410, #9419, #9745, #10248), suggesting users/expectations around credential handling, audit logging, and knowledge graph isolation are not yet met.
- **Provider parity**: Anthropic/Bedrock adaptive-thinking support (#10611) shows demand for latest model capabilities without manual config workarounds.

## 8. Backlog Watch — Stale High-Value Items Needing Maintainer Attention
| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | 62 days | Live provider identity on usage events; context-window resolution from serving provider. Core observability/cost tracking. | `needs-author-action`, `risk:high`, `size:XL` |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | 62 days | Gateway keeps agent turns alive after viewer disconnect. UX reliability for long-running agents. | `needs-author-action`, `risk:high` |
| [#9214](https://github.com/zeroclaw-labs/zeroclaw/pull/9214) | 53 days | Live eval mode with sandboxed tool surface. Foundation for trustworthy CI. | `needs-author-action`, `risk:high`, stacked deps |
| [#9220](https://github.com/zeroclaw-labs/zeroclaw/pull/9220) | 53 days | Comparable run receipts & failure transcripts. Debuggability for evals. | `needs-author-action`, `risk:high`, base for #9221 |
| [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) | 47 days | Security: stop presenting command execution as audited. Trust/safety. | `needs-author-action`, `domain:security` |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | 42 days | Plugin egress grant ceremony. Supply-chain security UX. | Maintainer note says scope corrected; awaiting review |
| [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248) | 20 days | Canonical principals & shared grant resolution (RFC #7141 Rev 8). Auth foundation. | `needs-author-action`, supersedes #8672 |
| [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) | 15 days | Atomic session-ownership claim backend. Concurrency safety. | `needs-author-action`, `risk:high` |
| [#10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611) | 7 days | Anthropic/Bedrock adaptive-thinking Claude models. Provider parity. | `needs-maintainer-review`, `risk:high`, distinguished contributor |

**Pattern**: 9 XL-sized, high-risk PRs (53–62 days old) sit in `needs-author-action` or `needs-maintainer-review`. The review queue is the clear throughput constraint.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*