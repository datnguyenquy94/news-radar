# OpenClaw Ecosystem Digest 2026-08-09

> Issues: 166 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-09 02:14 UTC

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

# OpenClaw Project Digest — 2026-08-09

---

## 1. Today's Overview

OpenClaw shows **very high velocity** with 500 PRs and 166 issues updated in 24 hours. Two patch releases (v2026.6.33, v2026.6.34) shipped recently, both focused on **security hardening** — sandboxing browser routes, capping hostile response sizes, and preventing credential leakage in diagnostics. The open issue backlog is dominated by **P0/P1 reliability bugs**: a critical gateway memory leak (350 MB → 15.5 GB), silent model reply failures, OAuth wedging, and message loss across Telegram/Feishu/Codex. Meanwhile, a large batch of PRs from maintainers (notably `vincentkoc`, `steipete`) advances **Code Mode provider accounting, session trace integrity, and device pairing UX** — signaling a push toward production-grade agent observability and multi-device workflows.

---

## 2. Releases

### v2026.6.34 — *Safer Browser & Network Boundaries*
- **Sandboxed browser routes** — reject unsafe access paths (#97958, #38290, #103075, #110693)
- **Trusted DNS targets** — restrict outbound resolution
- **Custom browser origins** — tightened origin validation
- **Loopback provider endpoints** — block unsafe local access
- **Contributors**: @eleqtrizit, @brunowowk, @mosidevv, @pgondhi987

### v2026.6.33 — *Safer Network & Secret Boundaries*
- **Provider streams / Discord REST / browser fetches / OAuth paths / logs** — cap hostile response sizes
- **Telegram credentials** — kept out of diagnostics (#96989, #95412, #99428)
- **Contributors**: @wangmiao0668000666, @Alix-007

> **No breaking changes noted** in either release; both are defensive hardening patches.

---

## 3. Project Progress (Merged/Closed Today)

| PR | Area | Summary |
|----|------|---------|
| [#119511](https://github.com/openclaw/openclaw/pull/119511) | `sessions` / `tasks` | **Fix**: `tasks maintenance --apply` now archives cron-run transcripts as `.deleted` instead of hard-deleting (closes #119269) |
| [#120803](https://github.com/openclaw/openclaw/pull/120803) | `worker` / `gateway` | **Fix**: Preserve long OpenAI Responses sessions across cloud handoff — prevents silent loss of server-compaction replay |
| [#120802](https://github.com/openclaw/openclaw/pull/120802) | `windows` / `gateway` | **Fix**: Preserve configured child `env` overrides across key casing differences |
| [#120817](https://github.com/openclaw/openclaw/pull/120817) | `telegram` | **Fix**: Restore account-specific `replyToMode` on beta.1 (release-blocking regression) |
| [#120820](https://github.com/openclaw/openclaw/pull/120820) | `web-ui` | **Fix**: Dashboard widgets no longer flash white in dark mode |
| [#120822](https://github.com/openclaw/openclaw/pull/120822) | `google-meet` | **Fix**: Stop failed voice gateway connections cleanly (no leaked retry timers) |
| [#120824](https://github.com/openclaw/openclaw/pull/120824) | `msteams` | **Fix**: Paginate channel thread replies > 50 (closes #98870) |
| [#120827](https://github.com/openclaw/openclaw/pull/120827) | `cli` | **Fix**: Keep QR codes within standard 80-column terminal widths (closes #120758) |

**Pattern**: Rapid closure of recent regressions (beta.1 Telegram, QR CLI, cron transcript loss) + steady progress on **Code Mode traceability** (see §6).

---

## 4. Community Hot Topics

| Issue | Status | Comments | Core Need |
|-------|--------|----------|-----------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | **CLOSED** | 179 | DeepSeek v4 Flash silent failure → generic fallback; need provider-level error visibility |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | **OPEN** | 22 | **P0**: Gateway RSS leaks 350 MB → 15.5 GB over days → OOM kills; blocks long-running deployments |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | **OPEN** | 11 | Codex OAuth refresh wedges agent for hours; no alerting, no aggressive profile rotation |
| [#84583](https://github.com/openclaw/openclaw/issues/84583) | **OPEN** | 11 | Cron announce delivery collides with active user chat → `EmbeddedAttemptSessionTakeoverError` |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | **OPEN** | 10 | **Dynamic model discovery** for OpenRouter (static catalog is stale) |
| [#114154](https://github.com/openclaw/openclaw/issues/114154) | **OPEN** | 7 | MCP tool passes policy/probe but never bundled — `ToolSearch` finds nothing |
| [#79293](https://github.com/openclaw/openclaw/issues/79293) | **OPEN** | 6 | `openclaw-weixin` proactive sends report success but user sees "请稍后再试" / missing chunks |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | **OPEN** | 6 | Feishu/Telegram dispatch fails: `runChannelInboundEvent` requires `runDispatchLifecycle` (post-2026.7.2-beta.4) |

**Underlying themes**:  
- **Reliability > features** — memory leak, silent failures, and message loss dominate discussion  
- **Multi-channel parity** — Telegram, Feishu, Weixin, Teams, Discord all show delivery gaps  
- **Provider observability** — users cannot diagnose why a model/tool/channel failed

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P0 / Critical** | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway memory leak → OOM crash every 2–3 days; `launchd-handoff` restart loops | ❌ No PR yet |
| **P1 / Message Loss** | [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash silent reply failure → generic "No reply generated" fallback | ✅ Closed (fix implied) |
| **P1 / Message Loss** | [#114020](https://github.com/openclaw/openclaw/issues/114020) | Feishu/Telegram dispatch broken since 2026.7.2-beta.4 — `runDispatchLifecycle` missing | ❌ |
| **P1 / Session State** | [#87327](https://github.com/openclaw/openclaw/issues/87327) | Isolated agent runs stall in `runtime-plugins` phase before execution (hourly crons) | ❌ |
| **P1 / Auth** | [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth refresh wedges agent for hours; no alerting/profile rotation | ❌ |
| **P1 / Message Loss** | [#120425](https://github.com/openclaw/openclaw/issues/120425) | Telegram DM reply-to-photo re-fetches media every turn → multi-min latency, races timeout | ❌ |
| **P1 / Crash Loop** | [#89791](https://github.com/openclaw/openclaw/issues/89791) | Supervisor mode + dual plist → 30s `EADDRINUSE` loop on port 18789 | ❌ |
| **P2 / Data Loss** | [#119269](https://github.com/openclaw/openclaw/issues/119269) | `tasks maintenance --apply` hard-deletes cron transcripts without `.deleted` archive | ✅ [#119511](https://github.com/openclaw/openclaw/pull/119511) merged |
| **P2 / Session State** | [#94536](https://github.com/openclaw/openclaw/issues/94536) | Commitment marked `sent` but never delivered (PR #92231 fix incomplete) | ❌ |
| **P2 / Compatibility** | [#98870](https://github.com/openclaw/openclaw/issues/98870) | Teams thread context omits replies > 50 (Graph pagination) | ✅ [#120824](https://github.com/openclaw/openclaw/pull/120824) open |

> **Note**: Several P1s have *no fix PR* after weeks/months — maintainer bandwidth appears constrained on deep runtime bugs.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Signal | Likely Next Version? |
|-------|-------|--------|----------------------|
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 3 | **Dynamic model discovery** (OpenRouter + beyond) — static catalog is a recurring pain point | 🟡 High — multiple providers affected |
| [#13219](https://github.com/openclaw/openclaw/issues/13219) | 1 | **Per-model usage logging** for cost tracking — session JSONL has data but no aggregation | 🟡 High — aligns with Code Mode accounting PRs |
| [#49740](https://github.com/openclaw/openclaw/issues/49740) | 0 | **Cron auto-retry** (`--retry-count`, `--retry-delay`) — daily crons fail silently until next day | 🟢 Medium — clear operator need |
| [#71330](https://github.com/openclaw/openclaw/issues/71330) | 0 | **Configurable memory promotion target** (not hardcoded `MEMORY.md`) | 🟢 Medium — architectural cleanup |
| [#10944](https://github.com/openclaw/openclaw/issues/10944) | 0 | **Telegram `parseMode` config** (Markdown breaks emojis/formatting) | 🟢 Medium — simple, high impact |
| [#71195](https://github.com/openclaw/openclaw/issues/71195) | 1 | **OpenAI Realtime (speech-to-speech) for macOS Talk Mode** — parity with voice-call plugin | 🔴 Low — niche, complex |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | 1 | **Suppress sub-agent announce** (currently requires model to reply `ANNOUNCE_SKIP`) | 🟢 Medium — UX friction |

**Strongest signals**: Dynamic model catalog, per-model cost observability, cron retry, Telegram parse mode — all address daily operator friction.

---

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Silent failures** | #116277 (179 comments), #79293, #120425, #111944 | Users see "bot went silent" or generic fallbacks; no debug visibility |
| **Memory instability** | #91588 (22 comments, P0) | Requires manual restart / monitoring; breaks unattended automation |
| **OAuth / auth wedging** | #86215, #107839, #86214 | Agents stuck for hours; no alerting; manual intervention needed |
| **Channel delivery gaps** | #114020 (Feishu/Telegram), #98870 (Teams), #79293 (Weixin) | Multi-channel deployments unreliable; trust erodes |
| **Session/transcript loss** | #119269, #73471, #120567 | `doctor --fix` and `tasks maintenance` delete history without archive |
| **UI/UX friction** | #75947 (8 comments), #9637 (accessibility), #106475 (QR in webchat) | Config pages dense; TUI not screen-reader friendly; QR codes break in 80-col terminals |
| **Provider observability** | #13219, #10687, #118673 | Cannot track costs, model versions, or stop reasons; "flying blind" |

**Positive notes**: Users cite OpenClaw as "part of daily workflow" (#73537), appreciate family/business automation, and engage deeply with detailed repros.

---

## 8. Backlog Watch — Stalled High-Value Items

| Item | Age | Why It Matters | Blocked By |
|------|-----|----------------|------------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | ~2 months | **P0 memory leak** — blocks production stability; no PR, no maintainer assignment | Deep runtime profiling needed |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | ~2.5 months | Codex OAuth wedging — affects all Codex users; needs alerting + rotation logic | Product decision on rotation policy |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | ~6 months | Dynamic model discovery — requested by many; static catalog is stale | Architecture decision on provider abstraction |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) | ~3.5 months | **Production-readiness label for releases** — users cannot distinguish stable vs beta | Release process definition |
| [#87327](https://github.com/openclaw/openclaw

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
*Generated from 2026-08-09 community digests*

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bifurcated maturity**: a tier of high-velocity, production-hardening projects (OpenClaw, IronClaw, ZeroClaw, Hermes) operating at 50+ PRs/day with dedicated maintainer teams, and a tier of specialized or earlier-stage projects (NanoBot, PicoClaw, NanoClaw, Moltis, CoPaw, LobsterAI) focused on protocol integration, sandbox stability, and UX polish. **No project released a minor/major version today** — all are in patch, stabilization, or architectural migration phases. Security hardening (sandboxing, response caps, credential hygiene) and **multi-channel reliability** (Telegram, Slack, Discord, Matrix, Feishu, Weixin) are universal concerns. The ecosystem is converging on **MCP (Model Context Protocol) as the standard tool integration layer**, with remote HTTP/SSE MCP support landing in multiple codebases simultaneously.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Release Status | Health Score* |
|---------|--------------|-----------|----------------|---------------|
| **OpenClaw** | 166 | 500 | 2 patch releases (security) | 🟢 **High** — velocity + releases + maintainer depth |
| **IronClaw** | 25 | 50 | None (Reborn migration) | 🟡 **High** — velocity + architectural progress, but XL PR backlog |
| **ZeroClaw** | 11 | 50 | None (consolidation phase) | 🟡 **High** — velocity + security focus, but review bottleneck + S0 bug |
| **Hermes Agent** | 12 | 50 | None (v0.20.0 2026-08-07) | 🟡 **Medium-High** — velocity but 43 open PRs, P1 bugs unfixed |
| **CoPaw/QwenPaw** | 1 | 50 | None (pre-release stabilization) | 🟡 **Medium** — high PR throughput but low issue closure, architectural gaps |
| **NanoBot** | 5 | 9 | None | 🟢 **Medium** — focused delivery (token observability + ephemeral chat shipped) |
| **NanoClaw** | 8 | 6 | None | 🟢 **Medium** — steady merging, MCP/channel expansion |
| **PicoClaw** | 3 | 4 (open) | None | 🟡 **Medium-Low** — stale PRs (>30d), review bandwidth constrained |
| **Moltis** | 2 | 1 (merged) | None | 🟢 **Medium** — sandbox fix delivered, new Apple Container gap |
| **LobsterAI** | 1 (stale) | 3 (stale) | None | 🔴 **Low** — high-value work stalled 4+ months, zero community engagement |
| **NullClaw** | 0 | 0 | None | ⚪ **Unknown** — no activity |
| **ZeptoClaw** | 0 | 0 | None | ⚪ **Unknown** — no activity |

*Health Score: 🟢 Healthy velocity & delivery | 🟡 High velocity but risks (review bottleneck, unfixed P1s, migration) | 🔴 Stalled critical work

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale of operation**: 10x PR volume of nearest peers (500 vs 50/day); 166 issue updates indicates massive community engagement
- **Release discipline**: Only project shipping **security patches today** (v2026.6.33/34) — demonstrates production readiness
- **Maintainer depth**: Multiple named maintainers (`vincentkoc`, `steipete`, `eleqtrizit`, `brunowowk`, `mosidevv`, `pgondhi987`, `wangmiao0668000666`, `Alix-007`) driving distinct workstreams
- **Observability lead**: Code Mode provider accounting, session trace integrity, device pairing UX — features absent in most peers
- **Multi-channel breadth**: Active fixes across Telegram, Feishu, Weixin, Teams, Discord, Codex, Google Meet simultaneously

### Technical Approach Differences
- **Gateway-centric architecture** with explicit sandboxing, response-size caps, and DNS restrictions — peers handle security at channel or tool level
- **Cron/task maintenance as first-class operator concern** (transcript archival, retry policies) — others treat scheduling as afterthought
- **Provider abstraction with dynamic discovery** (OpenRouter issue #10687) vs static catalogs in NanoBot, Hermes, NanoClaw
- **Session handoff preservation** across cloud/edge boundaries (PR #120803) — unique focus on long-running session continuity

### Community Size Comparison
- **OpenClaw**: 179 comments on single issue (#116277), 22 on P0 memory leak — orders of magnitude higher engagement than any peer
- **IronClaw/ZeroClaw/Hermes**: 5–11 comments on hottest items (mostly maintainer-driven RFCs)
- **NanoBot/NanoClaw/PicoClaw/Moltis/CoPaw**: 0–4 comments typical — niche or early communities
- **LobsterAI**: Zero reactions/comments — dormant community

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **MCP remote server support (HTTP/SSE)** | NanoClaw (merged #2776), IronClaw (Reborn), ZeroClaw (catalog unification), NanoBot (schema budgeting #5298) | Standardized remote MCP endpoint discovery, auth, and capability negotiation |
| **Token/cost observability** | NanoBot (merged #5293, #5299), OpenClaw (#13219), Hermes (session write policy), ZeroClaw (gateway audit logging #9410) | Per-iteration, per-model, per-tool token accounting with UI visibility |
| **Multi-channel message delivery reliability** | OpenClaw (Telegram/Feishu/Teams/Weixin), Hermes (Slack/Telegram), IronClaw (Slack/Telegram/Web Push), NanoClaw (Discord/Mattermost/Google Chat), PicoClaw (WhatsApp/IRC/DeltaChat/SimpleX) | Unified delivery acknowledgment, retry, deduplication, and cross-channel threading |
| **Sandbox/container execution hardening** | OpenClaw (browser routes, loopback), Moltis (Docker fallback merged, Apple Container gap), IronClaw (WASM guest sanitization #7048), ZeroClaw (network guards #9580), CoPaw (shared filesystem persistence #6767) | Filesystem access control, host-path translation, runtime detection across Docker, Podman, Apple Container, WASM |
| **Authentication resilience (OAuth refresh, rotation)** | OpenClaw (Codex OAuth wedging #86215), Hermes (Anthropic content filter #82154, xAI 403 #82052), NanoBot (MCP OAuth #5297), PicoClaw (OAuth 2.1 MCP #3302), ZeroClaw (gateway auth #9744) | Automatic token refresh, profile rotation, alerting on auth failure, standards compliance (OAuth 2.1) |
| **Session state integrity across restarts** | OpenClaw (gateway handoff #120803), Hermes (Codex thread resume #82160, SIGTERM on release #41225), CoPaw (persistence on shared FS #6767), ZeroClaw (SOP cron attachment #9494) | Durable session identity, background process survival, atomic state writes |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | IronClaw | ZeroClaw | Hermes | NanoBot | NanoClaw | PicoClaw | CoPaw | Moltis | LobsterAI |
|-----------|----------|----------|----------|--------|---------|----------|----------|-------|--------|-----------|
| **Primary Focus** | Production-grade multi-device agent observability | Reborn architectural migration (identity, skills, channels) | Crate consolidation, security hardening, catalog unification | Desktop/cloud agent with Modal backend, session lifecycle | Token observability, ephemeral chat, MCP resilience | Multi-channel + MCP ecosystem expansion | Protocol bridging (WhatsApp, IRC, SimpleX, DeltaChat) | Multi-agent (sub-agent) workspace isolation | Sandbox execution (Docker, Apple Container) | SQLite perf, LiteLLM gateway, tool config declarativeness |
| **Target User** | Power users, automation engineers, multi-device deployments | Platform builders, channel/tool authors | Framework integrators, security-conscious deployers | Desktop-first users, cloud (Modal) developers | Cost-sensitive developers, privacy-focused users | Multi-channel bot operators, MCP integrators | Bridge operators (IRC↔AI, WhatsApp↔AI) | Multi-agent workflow designers | Containerized agent runners | Chinese-market developers, embedded/headless automation |
| **Architecture** | Gateway-centric, session handoff, cron/task first-class | Reborn: capability lifecycle, product workflows, channel adapters | Workspace: plugins, channels, providers, capabilities unified | Agent + gateway + Modal backend + desktop (Tauri) | WebUI + gateway, token diagnostics baked in | Channel adapters + MCP servers + skills | Protocol adapters + MCP client | AgentScope 2.0 alignment, Scroll memory | Sandbox runtime abstraction + gateway | Electron + sql.js (in-browser SQLite) |
| **Unique Strength** | Scale, release discipline, observability depth | Identity model (owner≠actor), model-driven skills, stress infra | Unified catalog contract, security-first defaults | Modal sandbox integration, session write policy | Sub-iteration token UI, ephemeral chat | Remote MCP HTTP/SSE, Strava skill demo | WhatsApp/IRC/SimpleX/DeltaChat breadth | Sub-agent model isolation + shared workspace | Docker fallback + Apple Container focus | Headless browser config declarativeness |

---

## 6. Community Momentum & Maturity

### **Tier 1: Rapid Iteration at Scale** (50+ PRs/day, multi-maintainer)
- **OpenClaw** — *Maturing*: Shipping patches, tackling P0 reliability, building observability. Highest community engagement.
- **IronClaw** — *Migrating*: Reborn architectural overhaul (23 issues closed today). High velocity but XL PR backlog indicates review saturation.
- **ZeroClaw** — *Consolidating*: Crate reduction, security hardening, catalog unification. Governance bottleneck (#8692: 11 RFCs queued).
- **Hermes Agent** — *Stabilizing*: v0.20.0 recent, but 43 open PRs and unfixed P1s (gateway drain, Anthropic auth) show release debt.
- **CoPaw/QwenPaw** — *Pre-release*: 50 PRs but only 1 issue; heavy refactoring (AgentScope 2.0 alignment, persistence hardening). Sub-agent UX gap emerging.

### **Tier 2: Focused Delivery** (5–10 PRs/day, clear feature shipping)
- **NanoBot** — *Shipping*: Token observability + ephemeral chat delivered end-to-end in 24h. MCP resilience next.
- **NanoClaw** — *Expanding*: Remote MCP, Strava skill, Mattermost channel merged. Platform integration focus.
- **PicoClaw** — *Constrained*: Protocol work ready (WhatsApp fix, SimpleX, DeltaChat) but review bandwidth stalled (>30d PRs).
- **Moltis** — *Stabilizing*: Docker sandbox fixed, Apple Container detection gap new. Niche but responsive.

### **Tier 3: Low Velocity / Stalled**
- **LobsterAI** — *Dormant*: High-value PRs stale 4+ months (#1193 SQLite perf, #1192 tool config). Zero community signals.
- **NullClaw / ZeptoClaw** — *Inactive*: No 24h activity.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **MCP is the universal tool integration layer** | Remote HTTP/SSE MCP merged in NanoClaw

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-09

## 1. Today's Overview
NanoBot shows **high maintenance velocity** with 14 total updates (5 issues, 9 PRs) in the last 24 hours and **zero new releases**, indicating active development sprint rather than stabilization. Four PRs were merged/closed today, focusing on code hygiene (dead code removal, UI polish) and a user-facing feature (temporary chat mode). The issue queue surfaces **three critical pain points**: runaway token consumption, MCP integration fragility (OAuth, crash loops), and Docker deployment friction. No releases since the data cutoff suggests the team is batching fixes for a near-term cut.

## 2. Releases
**None** in the last 24 hours.

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5252](https://github.com/HKUDS/nanobot/pull/5252) | **feat(webui)** | Adds *Temporary Chat* mode — ephemeral, multi-turn conversations that never persist to disk or session history. | New UX pattern for privacy-sensitive / throw-away interactions. |
| [#5293](https://github.com/HKUDS/nanobot/pull/5293) | **feat(usage)** | Logs per-iteration token diagnostics (input/output/cached) alongside existing daily aggregates. | Directly addresses #5266; enables pinpointing token-hungry agent runs. |
| [#5299](https://github.com/HKUDS/nanobot/pull/5299) | **feat(webui)** | Surfaces recent token-usage records (with iteration & tool context) in the WebUI. | Makes #5293 data visible to end-users without CLI access. |
| [#5296](https://github.com/HKUDS/nanobot/pull/5296) | **refactor/chore** | Removes 19 dead internal code units, 11 test-only seams, and orphaned frontend assets. | Reduces maintenance surface; no user-facing change. |
| [#5294](https://github.com/HKUDS/nanobot/pull/5294) | **fix(webui)** | Eliminates image-hover clipping by dropping hover scaling/ring; keeps zoom cursor & focus ring. | Polish fix for assistant image previews. |

**Net effect**: Token observability stack (backend + UI) shipped end-to-end in one day; temporary chat mode lands; codebase trimmed.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) **Token consumption logging** | 13 comments, 2 days old | Users see **millions of tokens burned in hours** with no visibility into *which* call/iteration caused it. Urgent demand for per-call, per-iteration breakdown. |
| [#5297](https://github.com/HKUDS/nanobot/issues/5297) **MCP OAuth / web auth** | 2 comments, same day | Need to connect to MCP servers that require **browser-based OAuth flows** (e.g., Xmind). Current gateway cannot complete external auth handshakes. |
| [#5300](https://github.com/HKUDS/nanobot/issues/5300) **MCP crash loop & CPU spike** | 0 comments, same day | Remote MCP HTTP 530 → `anyio` cancel-scope cross-task `RuntimeError` → gateway crash + leaked tasks → **CPU runaway**. High-severity stability hole. |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) **Stale background task overwrite** | Open, P0, conflict | Background title-generation task can overwrite session after `/new` clears it. Data-loss risk; marked priority P0. |

**Signal**: Token observability and MCP resilience are the two dominant operational concerns.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue / PR | Status | Fix PR? |
|----------|------------|--------|---------|
| **Critical** | [#5300](https://github.com/HKUDS/nanobot/issues/5300) MCP cancel-scope crash → gateway death + CPU leak | Open | No |
| **High** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) Stale background task overwrites session after `/new` | Open (P0) | **Yes (#5271)** |
| **High** | [#5295](https://github.com/HKUDS/nanobot/issues/5295) Docker compose: `entrypoint.sh` permission denied | Open | No |
| **Medium** | [#5206](https://github.com/HKUDS/nanobot/pull/5206) Duplicate streamed-response logging | Open (P2) | **Yes (#5206)** |
| **Low** | [#5294](https://github.com/HKUDS/nanobot/pull/5294) Image hover clipping (UI only) | **Closed** | **Yes (#5294)** |

**Note**: #5300 has no fix PR yet and causes full gateway collapse — should be triaged immediately.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood Next Release |
|---------|--------|-------------------------|
| **Per-call / per-iteration token logging + UI** | #5266, #5293, #5299 | **Very High** — backend + UI already merged. |
| **Temporary / ephemeral chat mode** | #5252 | **Done** — merged today. |
| **MCP OAuth / gateway-assisted web auth** | #5297 | Medium — requires gateway redesign; no PR yet. |
| **Budgeted MCP schema exposure (large tool sets)** | #5298 | Medium — architectural; correlates with token budget work. |
| **Model-agnostic computer-use / browser tools** | #4276 | Low-Medium — long-open (Jun), large scope, still open. |
| **Matrix room-level reply threading** | #5292 | Medium — niche but clean PR; may land soon. |

**Prediction**: Next cut will ship token observability + temporary chat; MCP OAuth & schema budgeting are next-quarter candidates.

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Invisible token burn** | “millions of tokens in 2 hours, no activity” (#5266) | 😡 Frustrated — blocks cost control. |
| **MCP unreliability** | Crash on HTTP 530, OAuth unsupported (#5300, #5297) | 😰 Anxious — core integration broken. |
| **Docker deploy friction** | `entrypoint.sh` permission denied on stock compose (#5295) | 😕 Annoyed — blocks onboarding. |
| **Session data loss risk** | Background task overwrites after `/new` (#5271) | 😟 Concerned — marked P0 by maintainers. |
| **Positive** | Temporary chat mode welcomed; token UI praised in PR reviews | 🙂 Satisfied — visible progress on observability. |

## 8. Backlog Watch — Stale / High-Leverage Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) **Computer-use / browser tools** | 60 days | Flagship agent capability; large diff, needs review bandwidth. |
| [#5206](https://github.com/HKUDS/nanobot/pull/5206) **Duplicate stream logging fix** | 8 days | P2, clean fix, stuck in review — logging noise affects debugging. |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) **Stale session task (P0)** | 3 days | Critical data-integrity fix; marked conflict — needs rebase/merge. |
| [#5300](https://github.com/HKUDS/nanobot/issues/5300) **MCP cancel-scope crash** | 0 days | New but **critical**; no PR, no workaround — gateway instability. |
| [#5297](https://github.com/HKUDS/nanobot/issues/5297) **MCP OAuth** | 0 days | Unlocks whole class of MCP servers; requires gateway auth proxy design. |

---

**Bottom line**: NanoBot is in a **high-throughput fix/feature sprint** — token observability and ephemeral chat delivered today, but **MCP stability (crash + OAuth) and Docker onboarding** are the next burning fires. Maintainer bandwidth on #4276 and #5271 will signal release cadence.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-09

## 1. Today's Overview

Hermes Agent shows **high velocity with significant stability concerns** on 2026-08-09. The project processed 62 total updates (12 issues, 50 PRs) in 24 hours with zero releases, indicating active development but a backlog of unreleased fixes. Critical P1 bugs affect gateway shutdown behavior and Anthropic authentication, while multiple P2 issues span desktop updates, Modal backend reliability, and session state management. The PR pipeline is heavily loaded (43 open PRs) with several salvaged fixes from prior attempts, suggesting technical debt in review processes. Community engagement is moderate—most new issues have 0–1 comments—indicating either rapid triage or limited external contributor bandwidth.

## 2. Releases

**No new releases today.** The last release (v0.20.0) was referenced in issue #82166 as having been available since 2026-08-07, but the update-check endpoint incorrectly reported "up to date" for consecutive days.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Component | Summary |
|----|------|-----------|---------|
| [#82160](https://github.com/NousResearch/hermes-agent/pull/82160) | Bug fix | `codex_app_server` | Resume persisted Codex thread on agent re-instantiation instead of creating fresh thread |
| [#79343](https://github.com/NousResearch/hermes-agent/pull/79343) | Bug fix | Memory provider | Fix trivial-prompt classifier incorrectly skipping memory recall for workflow commands (`continue`, `proceed`, `next`, etc.) |
| [#79325](https://github.com/NousResearch/hermes-agent/pull/79325) | Bug fix | Models.dev catalog | Add SiliconFlow provider to `PROVIDER_TO_MODELS_DEV` mapping (49/47 models now visible in picker) |
| [#82158](https://github.com/NousResearch/hermes-agent/pull/82158) | Bug fix | Desktop update | Fix venv-blocker scan truncating cmdlines, breaking gateway exemption and dead-ending Desktop updates |
| [#79723](https://github.com/NousResearch/hermes-agent/pull/79723) | Feature | Session write policy | Integrate v0.20 session write policy migration (29 paths, 27 with effective diffs) |
| [#80943](https://github.com/NousResearch/hermes-agent/pull/80943) | Feature | Runtime/ACP | Propagate and enforce session write policy into delegated child agents and Copilot ACP subprocess |
| [#82158](https://github.com/NousResearch/hermes-agent/pull/82158) | Bug fix (duplicate) | CLI/Windows | Same as above — closed as duplicate |

**Net progress:** 7 PRs merged/closed, addressing session persistence, memory classification, provider catalog completeness, Windows desktop update reliability, and session write policy enforcement.

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#82167](https://github.com/NousResearch/hermes-agent/issues/82167) — Desktop ignores `config.yaml` provider | 1 comment, created today | **Configuration authority**: Users expect config file to be source of truth; desktop app persists stale provider selection causing billing to wrong endpoint |
| [#82165](https://github.com/NousResearch/hermes-agent/issues/82165) — Add Spanish locale | 1 comment, created today | **Global accessibility**: Spanish (600M speakers) missing from desktop language picker while Chinese, Japanese, Arabic present |
| [#41225](https://github.com/NousResearch/hermes-agent/issues/41225) — Background processes killed by SIGTERM on `release()` | 4 comments, updated today (open since Jun) | **Session lifecycle integrity**: Long-running background terminals die during session end, compression, error recovery — breaks workflows relying on persistent processes |
| [#82166](https://github.com/NousResearch/hermes-agent/issues/82166) — Update-check endpoint false "up to date" | 0 comments, created today | **Release reliability**: Inverse of known stale-cache bug; automated update checks silently fail for days |

**Pattern:** Configuration drift, i18n gaps, and session-state fragility dominate user pain.

## 5. Bugs & Stability — Ranked by Severity

### P1 (Critical)
| Issue | Component | Status | Fix PR |
|-------|-----------|--------|--------|
| [#82161](https://github.com/NousResearch/hermes-agent/issues/82161) Gateway drain exits 0.00s with in-flight cron job, killing it mid-run | Gateway/Cron | Open | None |
| [#82154](https://github.com/NousResearch/hermes-agent/issues/82154) Anthropic content filter rejects built-in `SKILLS_GUIDANCE` prompt — subscription OAuth fails with misleading "out of extra usage" 400 | Agent/Anthropic/Auth | Open | None |

### P2 (High)
| Issue | Component | Status | Fix PR |
|-------|-----------|--------|--------|
| [#41225](https://github.com/NousResearch/hermes-agent/issues/41225) Background processes killed by SIGTERM during `release()` | Agent/Tools/Terminal | Open (needs repro) | None |
| [#82167](https://github.com/NousResearch/hermes-agent/issues/82167) Desktop sessions ignore `config.yaml model.provider` — bills old endpoint | Desktop/Config/Billing | Open | None |
| [#82164](https://github.com/NousResearch/hermes-agent/issues/82164) Modal backend: sandbox silently dies mid-task — generic errors, no reconnect, file bridge dies | Backend/Modal/Terminal/File | Open (needs repro) | None |
| [#82168](https://github.com/NousResearch/hermes-agent/issues/82168) Windows: Both updating and reinstalling fail | Desktop/Windows/Install | Open (needs repro) | [#82143](https://github.com/NousResearch/hermes-agent/pull/82143) (self-heal `get-windows` binding) |
| [#82152](https://github.com/NousResearch/hermes-agent/issues/82152) FTS5 sanitizer missing special chars — search returns zero for `it's`, `user@host`, `50%` | Agent/Search | Open | [#82152](https://github.com/NousResearch/hermes-agent/pull/82152) (salvaged from #79285) |
| [#82151](https://github.com/NousResearch/hermes-agent/issues/82151) Model-switch reads keys outside per-profile secret scope — cross-profile key leakage | CLI/Auth/Profiles | Open | [#82151](https://github.com/NousResearch/hermes-agent/pull/82151) (salvaged from #79222) |

### P3 (Medium)
| Issue | Component | Status | Fix PR |
|-------|-----------|--------|--------|
| [#82052](https://github.com/NousResearch/hermes-agent/issues/82052) xAI 403 classified non-retryable — long-lived workers never refresh expired OAuth token | Agent/xAI/Auth | Open | None |
| [#79343](https://github.com/NousResearch/hermes-agent/issues/79343) Memory gate treats workflow commands as trivial — skips provider recall | Agent/Memory | **Closed** | [#79343](https://github.com/NousResearch/hermes-agent/pull/79343) |
| [#79325](https://github.com/NousResearch/hermes-agent/issues/79325) SiliconFlow missing from `PROVIDER_TO_MODELS_DEV` — picker empty | Agent/Models.dev | **Closed** | [#79325](https://github.com/NousResearch/hermes-agent/pull/79325) |
| [#82166](https://github.com/NousResearch/hermes-agent/issues/82166) Update-check endpoint false "up to date" for days while release exists | CLI/Install | Open | None |
| [#82165](https://github.com/NousResearch/hermes-agent/issues/82165) Spanish locale missing from desktop | Desktop/i18n | Open | None |

**Stability signal:** 3 P1/P2 bugs with no fix PRs yet; Modal backend and gateway drain are single points of failure for cloud users.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| Spanish (es) locale for desktop | [#82165](https://github.com/NousResearch/hermes-agent/issues/82165) | **High** — low complexity, high impact, explicit demand |
| Per-child memory & toolset permission boundary in delegation | [#82157](https://github.com/NousResearch/hermes-agent/pull/82157) | **High** — PR open, addresses multi-agent security/isolation |
| Configurable background review tools (`auxiliary.background_review.extra_tools`) | [#82146](https://github.com/NousResearch/hermes-agent/pull/82146) | **Medium** — PR open, needs design decision |
| Search-only toolset exposed in configurator (`web_search` without `web_extract`) | [#82155](https://github.com/NousResearch/hermes-agent/pull/82155) | **High** — PR open with regression test |
| Bidirectional Telegram reactions | [#81709](https://github.com/NousResearch/hermes-agent/pull/81709) | **Medium** — PR open, platform-specific |
| Configurable human-facing timestamps (CLI/TUI/Desktop) | [#81439](https://github.com/NousResearch/hermes-agent/pull/81439) | **Medium** — PR open, UX polish |
| Deterministic MCP record/replay fixtures | [#80475](https://github.com/NousResearch/hermes-agent/pull/80475) | **Medium** — PR open, testing infrastructure |

**Roadmap inference:** Next version (v0.21+) likely to ship i18n, delegation security boundaries, search tooling granularity, and MCP test fixtures. Gateway/Modal stability fixes are prerequisites.

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Desktop config drift** | [#82167](https://github.com/NousResearch/hermes-agent/issues/82167): "new sessions ignore config.yaml model.provider — bills old endpoint" | Financial (wrong billing), trust erosion |
| **Session state loss** | [#41225](https://github.com/NousResearch/hermes-agent/issues/41225): background processes SIGTERM'd on `release()`; [#82160](https://github.com/NousResearch/hermes-agent/issues/82160): Codex thread identity lost on restart | Workflow interruption, data loss |
| **Update unreliability** | [#82166](https://github.com/NousResearch/hermes-agent/issues/82166): endpoint lies "up to date" for days; [#82168](https://github.com/NousResearch/hermes-agent/issues/82168): Windows update/reinstall both fail | Stale deployments, manual intervention required |
| **Cloud backend fragility** | [#82164](https://github.com/NousResearch/hermes-agent/issues/82164): Modal sandbox dies silently, no reconnect, file bridge dies | Work loss, no recovery path |
| **Auth token staleness** | [#82052](https://github.com/NousResearch/hermes-agent/issues/82052): xAI 403 non-retryable; [#82154](https://github.com/NousResearch/hermes-agent/issues/82154): Anthropic misleading 400 | Long-lived sessions break silently |
| **Search broken for common queries** | [#82152](https://github.com/NousResearch/hermes-agent/issues/82152): FTS5 rejects `it's`, `user@host`, `50%` | Core feature unusable for technical queries |

**Positive signals:** Active PR pipeline shows maintainers addressing memory classification, provider catalog, Windows native deps, and session write policy. Salvaged PRs (#82151, #82152, #82162, #82163) indicate commitment to closing old loops.

## 8. Backlog Watch — Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#41225](https://github.com/NousResearch/hermes-agent/issues/41225) Background processes killed by SIGTERM on `release()` | 63 days (since Jun 7) | Core session lifecycle bug; blocks persistent terminal workflows; labeled `sweeper:risk-session-state`, `needs-repro` |
| [#82161](https://github.com/NousResearch/hermes-agent/issues/82161) Gateway drain kills in-flight cron jobs | 0 days (P1, new) | Data loss risk for scheduled tasks; no fix PR; `sweeper:risk-message-delivery` |
| [#82154](https://github.com/NousResearch/hermes-agent/issues/82154) Anthropic content filter blocks built-in prompt | 0 days (P1, new) | Blocks all Anthropic subscription OAuth users; misleading error message |
| [#82164](https://github.com/NousResearch/hermes-agent/issues/82164) Modal backend silent sandbox death | 0 days (P2, new) | Cloud execution reliability; no reconnect/recovery; `needs-repro` |
| [#82166](https://github.com/NousResearch/hermes-agent/issues/82166) Update-check endpoint false negative | 0 days (P3, new) | Inverse of known bug (#11007, #1620); breaks automated update pipelines |
| [#53040](https://github.com/NousResearch/hermes-agent/pull/53040) Preserve last-good build during before-pack cleanup | 44 days (open) | Prevents `hermes update` destroying binary on failure; AI-authored, needs verification |
| [#80475](https://github.com/NousResearch/hermes-agent/pull/80475) MCP deterministic record/replay fixtures | 3 days (open) | Closes real-protocol testing gap; infrastructure investment |

**Recommendation:** Prioritize P1 gateway/cron and Anthropic auth fixes for hotfix release; assign repro efforts for Modal and SIGTERM issues; schedule Spanish locale and search-only toolset for v0.21.

---

*Digest generated from GitHub API data for NousResearch/hermes-agent as of 2026-08-09. All links point to live GitHub items.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-09

## 1. Today's Overview
PicoClaw shows steady maintenance activity with **3 issue updates** and **4 open PRs** in the last 24 hours, though no merges or releases occurred. The project is actively addressing protocol compatibility (WhatsApp, IRC, SimpleX, DeltaChat) and performance optimization (prefix caching, CPU usage). Two stale PRs (#3222, #3193) remain open for over a month, suggesting review bandwidth constraints. The closed CPU-usage bug (#3292) indicates responsive triage for user-reported regressions.

## 2. Releases
**No new releases** in the last 24 hours. Current latest version remains unlisted in provided data.

## 3. Project Progress
**No PRs merged or closed today.** All 4 active PRs are in open/review state:
- **#3320** — Critical dependency bump for WhatsApp connectivity (whatsmeow)
- **#3321** — Agent context reordering to enable prefix caching optimization
- **#3222** — DeltaChat refactor (-200 LOC, cleanup, security hardening)
- **#3193** — New SimpleX channel implementation

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue | 4 comments | **IRCv3 long-message reassembly** — Users need transparent handling of fragmented IRC messages (>512 bytes) as single logical units |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Issue | 2 comments | **OAuth 2.1 for MCP servers** — Alignment with evolving auth standards for Model Context Protocol integrations |
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | PR | Recent update | **WhatsApp client version block** — Urgent: WhatsApp rejecting outdated client (405 error), channel non-functional without bump |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | PR | Recent update | **Prefix caching efficiency** — Reordering dynamic context to preserve cache hits across requests |

**Analysis:** Protocol compatibility (WhatsApp, IRC, MCP) dominates immediate needs. Performance optimization (caching, CPU) shows maturing focus on production efficiency.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | WhatsApp channel dead — client outdated (405) | Open | [#3320](https://github.com/sipeed/picoclaw/pull/3320) (ready) |
| **High** | CPU spike on chat input focus (web) | **Closed** (#3292) | Fixed in unreleased code |
| **Medium** | IRC message fragmentation breaks cohesion | Open (#3287) | None yet |

**Note:** The WhatsApp blocker is production-breaking for affected users; #3320 should be prioritized for merge.

## 6. Feature Requests & Roadmap Signals
| Request | Signal Strength | Likelihood for Next Version |
|---------|-----------------|----------------------------|
| **OAuth 2.1 for MCP** (#3302) | Explicit roadmap alignment checkbox ticked; references prior issue #2546 | High — standards compliance |
| **SimpleX channel** (#3193) | PR open 43 days; new protocol support | Medium — pending review |
| **DeltaChat modernization** (#3222) | PR open 37 days; security & cleanup focus | Medium — technical debt reduction |
| **IRC long-message support** (#3287) | Stale tag but active discussion | Low-Medium — niche but requested |

**Prediction:** OAuth 2.1 MCP support and WhatsApp fix are highest-probability inclusions. SimpleX/DeltaChat depend on maintainer review capacity.

## 7. User Feedback Summary
- **Pain points:** WhatsApp non-functional (blocker), CPU spike on input focus (resolved), IRC message splitting breaks UX
- **Use cases:** Multi-protocol bridging (IRC, WhatsApp, DeltaChat, SimpleX, MCP), AI agent context optimization
- **Sentiment:** Constructive — users file detailed issues with env specs; maintainers close bugs promptly (#3292 closed in 15 days)
- **Unmet needs:** Modern auth (OAuth 2.1), protocol parity for emerging networks (SimpleX)

## 8. Backlog Watch
| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 37 days | Stale refactor; security-relevant (drops password config) | **Review/merge** — reduces attack surface, modernizes DeltaChat |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | 43 days | New channel type; expands protocol coverage | **Review/merge** — first SimpleX support |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 18 days | Stale feature request; IRC power-user need | **Triage** — assign or clarify scope |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | 10 days | OAuth 2.1 spec alignment; referenced prior work | **Prioritize** — standards-driven, likely low-effort if #2546 done |

**Maintainer attention needed:** Two month-old PRs (#3222, #3193) represent completed work blocked only by review. The WhatsApp fix (#3320) is time-sensitive due to upstream API enforcement.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-09

## 1. Today's Overview
NanoClaw saw **moderate maintenance activity** in the last 24 hours with 8 issue updates and 6 PR updates, but **no new release**. The project is actively resolving platform integration bugs (Discord approvals, Signal attachments, Google Chat message-ID handling) and advancing multi-channel support (Mattermost, Telegram rich messages, Strava MCP). Three PRs were merged — notably remote HTTP/SSE MCP server support and Strava integration — signaling continued expansion of the MCP/skills ecosystem. Several open issues point to architectural friction around secret management, provider event typing, and skill documentation drift.

## 2. Releases
**No new releases** published today. The `main` branch continues to receive fixes and features; next release will likely bundle Discord approval fix, Mattermost channel, Telegram rich rendering, and MCP remote-server support.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#2776](https://github.com/nanocoai/nanoclaw/pull/2776) | **Feature** | Remote HTTP/SSE MCP servers now supported via new `McpServerRemoteConfig` (type, url, headers, instructions) and CLI flags `--type`, `--url`, `--header` | **High** — enables hosted/managed MCP endpoints; unblocks SaaS MCP integrations |
| [#2777](https://github.com/nanocoai/nanoclaw/pull/2777) | **Feature** | `/add-strava` skill: official Strava MCP over HTTP transport + host-side OAuth flow with token refresh | **Medium** — adds fitness-data MCP; demonstrates remote-MCP pattern |
| [#3199](https://github.com/nanocoai/nanoclaw/pull/3199) | **Feature** (superseded) | Mattermost v2 ChannelAdapter implementation (community `chat-adapter-mattermost`) | **Medium** — replaced by [#3202](https://github.com/nanocoai/nanoclaw/pull/3202) which is now the active PR |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3201](https://github.com/nanocoai/nanoclaw/issues/3201) **Discord approval buttons broken** | 2 comments, closed same day | **Critical UX blocker**: owners cannot approve config updates; root cause = `\n` in `custom_id` parsing (fix in [#3185](https://github.com/nanocoai/nanoclaw/pull/3185)) |
| [#3177](https://github.com/nanocoai/nanoclaw/issues/3177) **SQLite lock contention on Docker mounts** | 1 comment, closed | **Stability on macOS/Linux**: 29k+ readonly errors; fixed by switching journal mode to WAL for cross-mount filesystems |
| [#3206](https://github.com/nanocoai/nanoclaw/issues/3206) **Google Chat attachments dropped** | 0 comments, new | **Channel compatibility**: `isSafeAttachmentName` rejects `/` in message IDs; blocks Google Chat file ingestion |
| [#3205](https://github.com/nanocoai/nanoclaw/issues/3205) **Persistent group-scoped OneCLI secrets** | 0 comments, new | **Architectural clarity**: two contradictory secret-assignment models exist; needs persistent per-group vault mapping |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#3201](https://github.com/nanocoai/nanoclaw/issues/3201) Discord approvals always reject (owner clicks ignored) | Closed | [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) (open, strips `\n` from `custom_id`) |
| **High** | [#3206](https://github.com/nanocoai/nanoclaw/issues/3206) Google Chat inbound attachments silently dropped | Open | None yet |
| **High** | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) Signal images/PDFs unreachable in agent container | Open (since May) | None |
| **Medium** | [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) Codex provider emits undeclared `file` event → typecheck fail + dropped images | Open | None |
| **Medium** | [#3177](https://github.com/nanocoai/nanoclaw/issues/3177) SQLite lock contention on VirtioFS (macOS/Linux Docker) | Closed | Fixed via WAL journal mode |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Mattermost channel** | [#3202](https://github.com/nanocoai/nanoclaw/pull/3202) (open PR) | **High** — follows Slack adapter pattern; supersedes stale [#546](https://github.com/nanocoai/nanoclaw/issues/546) |
| **Telegram rich messages (Bot API 10.1)** | [#2877](https://github.com/nanocoai/nanoclaw/pull/2877) (open PR) | **Medium** — uses `sendRichMessage`; needs review |
| **Remote HTTP/SSE MCP servers** | [#2776](https://github.com/nanocoai/nanoclaw/pull/2776) **merged** | **Done** — will ship in next release |
| **Persistent group-scoped OneCLI secrets** | [#3205](https://github.com/nanocoai/nanoclaw/issues/3205) | **Medium** — design fork must be resolved first |
| **Strava MCP integration** | [#2777](https://github.com/nanocoai/nanoclaw/pull/2777) **merged** | **Done** — demonstrates remote-MCP pattern |

## 7. User Feedback Summary
- **Discord admins blocked**: approval workflow unusable until [#3185](https://github.com/nanocoai/nanoclaw/pull/3185) merges; immediate pain for multi-user groups.
- **Google Chat users**: file attachments vanish silently — no error, no visibility ([#3206](https://github.com/nanocoai/nanoclaw/issues/3206)).
- **Signal users (long-standing)**: media files arrive on host but container cannot read them ([#2528](https://github.com/nanocoai/nanoclaw/issues/2528), 3 months open).
- **Developers/maintainers**: skill documentation drift ([#3204](https://github.com/nanocoai/nanoclaw/issues/3204) — `add-opencode` still references deleted Dockerfile blocks) and provider typing gaps ([#3203](https://github.com/nanocoai/nanoclaw/issues/3203)) slow onboarding.

## 8. Backlog Watch — Stale/Important Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) Signal attachments unreachable in container | **~3 months** | Blocks media-rich Signal workflows; no PR, no recent movement |
| [#3205](https://github.com/nanocoai/nanoclaw/issues/3205) Persistent group-scoped OneCLI secrets | **New but architectural** | Two contradictory secret models exist; resolution required before multi-tenant hardening |
| [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) Codex provider `file` event undeclared | **New** | Breaks typecheck on `main`; drops generated images silently |
| [#3204](https://github.com/nanocoai/nanoclaw/issues/3204) `add-opencode` skill doc drift | **New** | Skill guard test asserts old Dockerfile shape; misleads contributors |
| [#2877](https://github.com/nanocoai/nanoclaw/pull/2877) Telegram rich rendering PR | **~6 weeks** | Large PR, awaiting review; enables modern Telegram UX |

---

**Health Indicators**: ✅ Active merging of MCP/channel features; ✅ Critical Discord bug has fix PR; ⚠️ Several high-severity bugs lack fixes; ⚠️ Architectural secret-management fork unresolved; ⚠️ Long-standing Signal attachment issue untouched.  
**Next-release candidates**: Discord approval fix, Mattermost channel, remote MCP support, Strava skill, Telegram rich messages (if reviewed).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-09

## 1. Today's Overview
IronClaw shows **high velocity** with 50 PRs and 25 issues updated in the last 24 hours. The project is in the midst of a major **"Reborn" architectural migration** — 23 issues were closed today, nearly all tied to Reborn workstreams (product workflows, channel porting, CLI/TUI migration, capability lifecycle, approval parity). Meanwhile, 18 PRs remain open, several of them **XL-sized** (web push notifications, progressive Slack previews, presence-based shared conversations, inspector completion, stress testing). No new releases were cut. The merge rate (32 PRs merged/closed) indicates healthy throughput, but the concentration of XL PRs suggests reviewers are under pressure.

## 2. Releases
**No new releases** published today.

## 3. Project Progress — Merged/Closed PRs (Selected)
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#7377](https://github.com/nearai/ironclaw/pull/7377) | `feat!: a run acts as its invoker — remove shared-route subject binding` | Auth/Identity, Slack & Telegram | **Merged** — Core identity model change; enables owner ≠ actor runs |
| [#7382](https://github.com/nearai/ironclaw/pull/7382) | `feat(stress): scripted tool-call workload with durable write read-back` | Stress testing, API capacity | **Merged** — Adds `--api-scripted-tool` mode for deterministic tool sequences |
| [#7280](https://github.com/nearai/ironclaw/pull/7280) | `test(inspector): add browser, security, and operator coverage` | Web Debug Inspector | **Merged** — Security & browser test coverage for `?debug=true` inspector |
| [#7389](https://github.com/nearai/ironclaw/pull/7389) | `fix(live-qa): verify triggered Slack delivery through the two-lane contract` | Slack delivery, Live QA | **Merged** — Fixes post-#7157 regression in delivery verification |
| [#7393](https://github.com/nearai/ironclaw/pull/7393) | `test(disclosure): measure the Core delivery pair in the wide-catalog benchmark` | Benchmarks, Outbound | **Merged** — Updates disclosure benchmark for Core-tier tools |
| [#6938](https://github.com/nearai/ironclaw/pull/6938) | `fix(skills): the model chooses the skill, not a keyword scorer` | Skills, Agent Loop | **Merged** — Removes host-side keyword scoring; model-driven activation via `builtin.skill_activate` |
| [#7029](https://github.com/nearai/ironclaw/pull/7029) | `fix(product): restore durable delivery claim` | Outbound delivery | **Merged** — Restores CAS-based `Prepared → Sending` claim as sole authority |
| [#4118](https://github.com/nearai/ironclaw/pull/4118) | `Reborn CLI provider add/login parity` | Reborn CLI | **Closed** — Tracks provider registry/auth parity using `ironclaw_llm` crate |

**Key advances:** Identity model unification (owner ≠ actor), model-driven skill selection, stress-test infrastructure, inspector hardening, outbound delivery durability, and Reborn CLI parity.

## 4. Community Hot Topics — Most Active Items
| Item | Type | Comments | Signals |
|------|------|----------|---------|
| [#3280](https://github.com/nearai/ironclaw/issues/3280) | Issue | 7 | **Reborn ProductWorkflow facade** — Central piece connecting ProductAdapters to host-layer services; 7 related issues show high coordination need |
| [#6989](https://github.com/nearai/ironclaw/issues/6989) | Issue | 5 | **Token accounting bug** — `ModelWorkRequest` estimates from reference string length, not actual content; part of P1 pi-harness adoption |
| [#7398](https://github.com/nearai/ironclaw/pull/7398) | PR | — | **Web Push + PWA** — XL PR making web app a first-party notification channel (VAPID, RFC 8030/8291/8292); parity with Slack/Telegram |
| [#7397](https://github.com/nearai/ironclaw/pull/7397) | PR | — | **Presence-based shared conversations** — Builds on #7377's acting-identity ladder for Slack & Telegram |
| [#7396](https://github.com/nearai/ironclaw/pull/7396) | PR | — | **Generic progressive previews for Slack** — Channel-neutral contract mapped to `chat.startStream`/`appendStream`/`stopStream` |
| [#7291](https://github.com/nearai/ironclaw/pull/7291) | PR | — | **Inspector completion** — Stats, navigation, localization, stream health metrics |

**Underlying needs:** 
- **Reborn completion** — The 23 closed Reborn issues signal a push to finish the migration.
- **Multi-channel parity** — Web push, Slack progressive previews, shared conversations all aim for feature parity across channels.
- **Observability** — Inspector and stress-test work address operator/debugging gaps.
- **Token accounting correctness** — Critical for cost control and model routing.

## 5. Bugs & Stability — Today's Reports
| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **High** | [#6989](https://github.com/nearai/ironclaw/issues/6989) | Token estimation uses `content_ref.as_str().len()` (reference string) instead of referenced content | None yet |
| **High** | [#7395](https://github.com/nearai/ironclaw/pull/7395) | TOCTOU race in `claim_delivery_attempt_for_send` + failed-row misclassification | **Open PR #7395** |
| **Medium** | [#7352](https://github.com/nearai/ironclaw/pull/7352) | Gate projection identity collision (`run-notification:approval:<run_id>` duplicates across gates) | **Open PR #7352** |
| **Medium** | [#7389](https://github.com/nearai/ironclaw/pull/7389) | Live QA Slack delivery verification broken post-#7157 (retired `triggered-run-delivery` outcome) | **Merged #7389** |
| **Low** | [#7341](https://github.com/nearai/ironclaw/pull/7341) | WebUI scoped attachment reads & SSE tests broken after fetch/ReadableStream migration | **Open PR #7341** |
| **Low** | [#7048](https://github.com/nearai/ironclaw/pull/7048) | WASM guest diagnostics not sanitized before tracing (log injection risk) | **Open PR #7048** (depends on #7063) |

**Note:** Several bug-fix PRs are open and XL-sized (#7395, #7048), indicating non-trivial fixes.

## 6. Feature Requests & Roadmap Signals
| Feature | Evidence | Likelihood for Next Version |
|---------|----------|----------------------------|
| **Web Push / PWA notifications** | PR #7398 (XL, core contributor) | **High** — Near completion, first-party channel parity goal |
| **Progressive Slack previews** | PR #7396 (XL, core contributor) | **High** — Channel-neutral contract designed |
| **Presence-based shared conversations (Slack/Telegram)** | PR #7397 (XL, core contributor) | **High** — Builds on merged #7377 identity model |
| **Web Debug Inspector (operator-only)** | Issue #7218 (epic), PR #7291, #7280 | **High** — Tests merging, feature behind `?debug=true` |
| **Model-driven skill selection** | Merged #6938 | **Done** — Shipped |
| **Reborn approvals parity (approve once / deny / always allow)** | Issue #4539 (epic) | **Medium** — Epic tracked, core substrate exists |
| **Declarative capability policy (local-dev grants)** | Issue #4120 | **Medium** — Config-as-code dependency |
| **Generic channel progressive preview contract** | PR #7396 | **Medium** — Slack first, then extensible |
| **Stress-test scripted tool workloads** | Merged #7382 | **Done** — Infrastructure landed |

## 7. User Feedback Summary
*No direct user comments in the provided data (all 👍: 0). Inferred pain points from issue/PR content:*

| Pain Point | Source |
|------------|--------|
| **Skill installation appears to succeed but skill disappears** | PR #7171: "`installed: true` but gone from Settings, unactivatable" |
| **Token accounting wildly inaccurate** | Issue #6989: estimating from reference string length |
| **Live QA delivery verification broken after identity change** | PR #7389: scheduled lane failing every run since #7157 |
| **Gate notification collisions block multi-gate runs** | PR #7352: identical projection IDs for approval/auth gates |
| **WebUI attachment reads & SSE tests regressed** | PR #7341: legacy Playwright suites incompatible with new transport |
| **WASM guest logs can inject into tracing** | PR #7048: unsanitized diagnostics |
| **Reborn CLI provider add/login missing parity** | Issue #4118: can't manage providers via CLI post-LLM config wiring |

**Satisfaction signals:** High contributor velocity, systematic Reborn closure, operator tooling (Inspector) investment.  
**Dissatisfaction signals:** Regression rate (multiple "fix regression" PRs), XL PR backlog, token accounting bug in P1 path.

## 8. Backlog Watch — Stale / Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3484](https://github.com/nearai/ironclaw/issues/3484) | ~90 days | **EPIC: Reborn Contributor Runway** — Enables parallel skill/tool/channel porting; blocked on stable runway |
| [#4470](https://github.com/nearai/ironclaw/issues/4470) | ~65 days | **Refactor `ironclaw_reborn_composition`** — Oversized crate owning auth, WebUI, Slack, OAuth, extensions; CI-enforced boundaries needed |
| [#4088](https://github.com/nearai/ironclaw/issues/4088) | ~75 days | **Decompose oversized Reborn integration files** — 4 files called out in PR #4066 review; technical debt |
| [#4091](https://github.com/nearai/ironclaw/issues/4091) | ~75 days | **Production/multi-tenant extension lifecycle wiring** — Currently only local single-user; blocks production reuse |
| [#3905](https://github.com/nearai/ironclaw/issues/3905) | ~80 days | **Safe user-scoped tool installs** — Scoped model exists for skills but not tools; security boundary |
| [#3571](https://github.com/nearai/ironclaw/issues/3571) | ~85 days | **Refactor `HostHttpEgressService` to accept `Arc<dyn SecretStore>`** — Boilerplate delegation; API ergonomics |
| [#7028](https://github.com/nearai/ironclaw/pull/7028) | 6 days | **fix(outbound): preserve terminal status during recovery** — Small, open, dependency for #7029 (merged) |
| [#7048](https://github.com/nearai/ironclaw/pull/7048) | 6 days | **fix(wasm): sanitize guest diagnostics** — XL, depends on #7063, security-relevant |

**Maintainer action suggested:** Prioritize #4470 (composition crate split) and #4088 (file decomposition) to unblock parallel Reborn work; land #7028/#7048 to clear security/stability debt.

---

*Data source: GitHub API snapshot for nearai/ironclaw, 2026-08-09. All links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-09

## 1. Today's Overview
LobsterAI shows **low but steady maintenance activity** over the last 24 hours: one stale issue updated, three stale PRs touched (two open, one closed). No new releases. The project appears in a **maintenance/consolidation phase** — core contributors are addressing long-standing performance debt (SQLite write amplification), expanding provider integrations (LiteLLM), and polishing discoverability (TakoAPI badge). Community engagement remains minimal (zero reactions/comments on all items), suggesting a quiet period or limited external contributor bandwidth.

---

## 2. Releases
**No new releases** published in the last 24 hours. The latest version remains whatever was shipped prior to this window.

---

## 3. Project Progress
### Merged / Closed PRs (1)
| PR | Title | Area | Status | Summary |
|----|-------|------|--------|---------|
| [#2193](https://github.com/netease-youdao/LobsterAI/pull/2193) | feat: add LiteLLM as AI gateway provider | renderer, main, openclaw | **CLOSED** (stale) | Adds LiteLLM proxy support as a unified OpenAI-compatible gateway, enabling access to 100+ LLM providers without new dependencies. Reuses existing `chatWithOpenAICompatible` handler. Closed as stale — likely superseded or deprioritized. |

### Open PRs Updated (2)
| PR | Title | Area | Status | Summary |
|----|-------|------|--------|---------|
| [#1193](https://github.com/netease-youdao/LobsterAI/pull/1193) | perf(sqlite): eliminate write amplification with debounce + batch transactions | — | **OPEN** (stale) | Critical performance fix: replaces per-mutation full DB serialization (`db.export()` + `fs.writeFileSync()`) with debounced batched transactions. Targets sql.js in-memory persistence bottleneck. |
| [#2294](https://github.com/netease-youdao/LobsterAI/pull/2294) | docs: add TakoAPI directory badge | docs | **OPEN** (stale) | Adds project badge for TakoAPI open agent directory listing. Purely cosmetic/discoverability. |

> **Note**: All three PRs carry the `stale` label, indicating no recent maintainer review or CI activity. The performance PR (#1193) is the highest-impact item but has lingered since April.

---

## 4. Community Hot Topics
### Most Active Issue
| Issue | Title | Author | Updated | 👍 | Comments | Core Need |
|-------|-------|--------|---------|----|----------|-----------|
| [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192) | 自定义已有工具的默认配置 (Customize default config for built-in tools) | duzhen1996 | 2026-08-08 | 0 | 1 | **Deterministic tool behavior**: User wants to hardcode headless mode for the browser tool (avoid popup windows) because LLM instruction-following is unreliable. Requests a *static default config override* mechanism for built-in tools. |

> **Analysis**: This reveals a **trust/reliability gap** in agent-tool interaction. Users cannot depend on LLMs to consistently pass runtime flags (e.g., `headless: true`). A declarative, user-controlled default config layer for core tools would improve UX for automation/headless scenarios — a common pattern in AI agent frameworks (e.g., LangChain tool configs, AutoGen tool wrappers).

### PR Engagement
All PRs have **zero comments/reactions**, indicating no active discussion or review. The LiteLLM PR (#2193) was closed stale despite addressing a high-demand integration (multi-provider gateway).

---

## 5. Bugs & Stability
**No new bug reports or crash logs** in the last 24 hours.  
However, **PR #1193** implicitly addresses a **stability/performance regression risk**: uncontrolled SQLite write amplification can cause:
- High I/O latency on every state mutation
- Disk wear on embedded devices
- Potential data loss if `writeFileSync` fails mid-write

> **Severity**: **High (latent)** — affects all persistent sessions. Fix exists in #1193 but unmerged for 4+ months.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version | Rationale |
|--------|--------|-----------------------------|-----------|
| **Hardcoded default tool configs** (e.g., headless browser) | [Issue #1192](https://github.com/netease-youdao/LobsterAI/issues/1192) | **Medium** | Strong UX need; low implementation complexity (config schema extension). Aligns with "reliable agent tooling" trend. |
| **LiteLLM / multi-provider gateway** | [PR #2193](https://github.com/netease-youdao/LobsterAI/pull/2193) (closed stale) | **Low (for now)** | High community demand industry-wide, but PR closed without merge. May resurface via new PR or built-in provider abstraction. |
| **SQLite write amplification fix** | [PR #1193](https://github.com/netease-youdao/LobsterAI/pull/1193) | **High** | Critical perf/stability debt; ready-to-merge implementation. Blocked only by review bandwidth. |

---

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Unreliable LLM tool-argument adherence** | Issue #1192: "LLM instruction following often bad, can't start headless mode" | Forces users to seek *declarative overrides* — indicates agent loop not yet trustworthy for automation. |
| **No visibility into project health** | Zero reactions/comments on all recent activity | Community may perceive project as abandoned; hurts contributor recruitment. |
| **Discoverability gap** | PR #2294 adds TakoAPI badge | Maintainers actively seeking visibility — suggests growth focus. |

> **Overall sentiment**: **Quietly frustrated**. Users hit concrete UX walls (tool config rigidity) but see no maintainer response. The project has *solutions in flight* (PRs) but lacks triage velocity.

---

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Type | Age | Why It Matters |
|------|------|-----|----------------|
| [#1193](https://github.com/netease-youdao/LobsterAI/pull/1193) | PR (perf) | **131 days** (since 2026-04-01) | **Highest ROI fix**: Eliminates full-DB rewrite on every mutation. Unblocks scaling, reduces I/O, prevents data-corruption risk. Ready for review. |
| [#1192](https://github.com/netease-youdao/LobsterAI/issues/1192) | Issue (feature) | **131 days** | **Top user pain point**: Declarative tool defaults. Low effort, high UX value. Should be designed + implemented. |
| [#2193](https://github.com/netease-youdao/LobsterAI/pull/2193) | PR (feat) | **47 days** (closed stale) | LiteLLM integration is **strategic** (multi-provider via single endpoint). Closed stale ≠ rejected — reopen or rebase if architecture aligns. |
| [#2294](https://github.com/netease-youdao/LobsterAI/pull/2294) | PR (docs) | **32 days** | Trivial merge. Boosts discoverability. No reason to stall. |

---

### 📌 Key Takeaway
LobsterAI has **high-value work stuck in stale limbo** — particularly the SQLite performance fix (#1193) and tool-config declarativeness (#1192). A single maintainer triage session could unblock both. The project is **technically alive but socially quiet**; signaling activity (merging #1193, responding to #1192) would disproportionately improve perceived health and contributor confidence.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-09

## 1. Today's Overview
Moltis saw modest maintenance activity in the last 24 hours with **2 issue updates** and **1 merged pull request**. No new releases were published. The primary movement was the closure of a long-standing Docker sandbox filesystem regression (issue #1096) via PR #1105, which restores Read/Write/Edit tool functionality in containerized environments. A new bug report (#1185) surfaced regarding Apple Container 1.x sandbox detection, indicating ongoing sandbox compatibility work across runtimes. Overall, the project is in a **stabilization phase** addressing sandbox execution edge cases.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Project Progress
| PR | Title | Status | Impact |
|----|-------|--------|--------|
| [#1105](https://github.com/moltis-org/moltis/pull/1105) | Fix Docker sandbox filesystem tool fallback | **Merged/Closed** | Restores `Read`/`Write`/`Edit`/`MultiEdit` tool operation in Docker sandboxes by falling back from translated host paths to container-native operations when the gateway cannot access host mounts. Adds regression coverage for `/home/sandbox` and `workspace/data` paths. Directly resolves issue #1096. |

**Key advancement:** Docker sandbox filesystem operations are now resilient to host-mount permission/translation failures, unblocking users running Moltis in containerized execution environments.

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#1185](https://github.com/moltis-org/moltis/issues/1185) | Bug (Open) | Created & updated 2026-08-08; 0 comments, 0 👍 | **Apple Container 1.x runtime compatibility** — Moltis fails to detect a running Apple Container sandbox, treating it as stopped. Blocks users adopting Apple's new containerization framework on macOS. |
| [#1096](https://github.com/moltis-org/moltis/issues/1096) | Bug (Closed) | Created 2026-06-03; closed 2026-08-08 via PR #1105 | **Docker sandbox tool parity** — Core filesystem tools were non-functional in Docker, a critical regression for container-based workflows. Now resolved. |

*Community engagement remains low (zero comments/reactions on both issues), suggesting these are niche runtime-specific bugs rather than widespread regressions.*

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR | Notes |
|----------|-------|--------|--------|-------|
| **High** | [#1185](https://github.com/moltis-org/moltis/issues/1185) Apple Container 1.x sandbox detection failure | **Open** | None yet | New runtime (Apple Container 1.x) not recognized; sandbox reports "not running" despite active state. Blocks macOS users on latest container stack. |
| **High (Resolved)** | [#1096](https://github.com/moltis-org/moltis/issues/1096) Read/Write/Edit tools broken in Docker | **Closed** | [#1105](https://github.com/moltis-org/moltis/pull/1105) | Fallback mechanism added; regression tests included. Verified fixed in merged PR. |

**Stability signal:** One active high-severity sandbox detection bug on a newly released runtime (Apple Container 1.x). Docker sandbox stability restored.

## 6. Feature Requests & Roadmap Signals
*No new feature requests or roadmap-discussion issues in the last 24 hours.*  
The two issues are pure bug reports. However, **#1185 signals an implicit roadmap need**: first-class support for Apple Container runtime alongside Docker and Podman. Given Apple Container's recent 1.x release, expect a sandbox-adapter update in the next minor version.

## 7. User Feedback Summary
- **Pain point (resolved):** Docker sandbox users unable to perform basic file operations (read/write/edit) for over two months (since June 3). Fix delivered today.
- **Pain point (active):** Early adopters of Apple Container 1.x on macOS cannot use Moltis sandbox execution; tool misreports sandbox state.
- **Sentiment:** Neutral-to-positive on Docker fix (silent closure suggests acceptance). No feedback yet on Apple Container issue — too new.

## 8. Backlog Watch
| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [#1185](https://github.com/moltis-org/moltis/issues/1185) Apple Container 1.x sandbox detection | 1 day (new) | **Medium-High** | New runtime from Apple; macOS developer segment affected. Detection logic likely needs a new adapter or heuristic update. No PR yet. Assign to sandbox/runtime maintainer. |
| [#1105](https://github.com/moltis-org/moltis/pull/1105) Docker sandbox fallback | Merged today | Low | Verify backport to any active maintenance branches; ensure CI covers Apple Container detection once implemented. |

---

**Health Indicator:** 🟡 **Caution** — Active sandbox compatibility gap on a major new runtime (Apple Container), but core Docker stability restored. Recommend prioritizing #1185 for next patch release.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-08-09

## 1. Today's Overview
The project shows **high development velocity** with 50 pull requests updated in the last 24 hours (47 open, 3 merged/closed), but **low issue throughput** — only 1 new issue filed and none closed. This suggests the team is in a heavy refactoring/bug-fix cycle rather than feature delivery. The single new issue (#6838) reveals a significant architectural pain point around sub-agent model isolation and workspace sharing, indicating the multi-agent execution model is actively being stress-tested by users. No releases were cut today.

## 2. Releases
**No new releases today.** The project appears to be in a pre-release stabilization phase given the volume of bug-fix and infrastructure PRs.

## 3. Project Progress — Merged/Closed PRs (3)
| PR | Type | Summary |
|----|------|---------|
| [#6801](https://github.com/agentscope-ai/QwenPaw/pull/6801) | Bug Fix (Desktop) | Restored text selection and copy (Ctrl/Cmd+C) in OS desktop window content — regression caused by `user-select: none` on desktop root container. |
| [#6802](https://github.com/agentscope-ai/QwenPaw/pull/6802) | Bug Fix (Desktop) | Duplicate fix for desktop window text selection (same root cause as #6801). |
| [#6824](https://github.com/agentscope-ai/QwenPaw/pull/6824) | Bug Fix (Scroll) | Fixed CJK substring search correctness in FTS5 tokenizer — queries like `紫水晶河马` now match `紫水晶河马在周二跳舞`. |

**Net progress**: Three user-facing regressions resolved — desktop text interaction (2 PRs) and CJK search recall. No new features merged.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| **[Issue #6838](https://github.com/agentscope-ai/QwenPaw/issues/6838)** — Sub-agent model switching & workspace sharing | 1 comment, created & updated today | **Multi-agent isolation vs. resource sharing**: Users want parent/child agents to use different models (flagship vs. full) while sharing a workspace. Current config.json approach breaks web UI (reads child chats.json/agent.json). Signals demand for first-class sub-agent workspace abstraction. |
| **[PR #6764](https://github.com/agentscope-ai/QwenPaw/pull/6764)** — CI gate on required test checks | 0 comments, updated today | **Release quality gate**: Maintainers preparing to enforce test-passing before merge. Prerequisite: clear existing flaky tests first. |
| **[PR #6767](https://github.com/agentscope-ai/QwenPaw/pull/6767)** — Harden agent persistence on shared filesystems | 0 comments, updated today | **Multi-machine/container durability**: Atomic writes + stronger cache keys (device/inode/size/ns-mtime) to survive NFS, synced folders, container restarts. |
| **[PR #6779](https://github.com/agentscope-ai/QwenPaw/pull/6779)** — Align Scroll/memory with AgentScope 2.0 lifecycle | 0 comments, updated today | **Framework convergence**: Collapsing Native/Scroll context branches into single protocol matching AgentScope Agent base class (state, toolkit, middleware, context hooks). Reduces inconsistency risk in memory/compression. |

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **High** | Desktop text selection/copy broken in `/os` route (regression) | **Fixed** (merged) | [#6801](https://github.com/agentscope-ai/QwenPaw/pull/6801), [#6802](https://github.com/agentscope-ai/QwenPaw/pull/6802) |
| **High** | CJK FTS5 search returns no results for substring queries | **Fixed** (merged) | [#6824](https://github.com/agentscope-ai/QwenPaw/pull/6824) |
| **Medium** | Chat deletion leaves orphaned persisted data (chats.json only) | **Open** | [#6536](https://github.com/agentscope-ai/QwenPaw/pull/6536) (addresses #6299) |
| **Medium** | macOS packaged backend misses login-shell PATH → version managers (Homebrew, nvm, mise) not found | **Open** | [#5861](https://github.com/agentscope-ai/QwenPaw/pull/5861) (first-time contributor, under review) |
| **Medium** | Console `print()` crashes with EIO/EPIPE after terminal detaches (TTY deleted) | **Open** | [#6569](https://github.com/agentscope-ai/QwenPaw/pull/6569) |
| **Medium** | Mission Mode `max_iterations` not enforced server-side → 54+ sub-sessions vs. configured 20 | **Open** | [#6652](https://github.com/agentscope-ai/QwenPaw/pull/6652) (fixes #6505) |
| **Low** | DoomLoopGate false-positives on repeated read-only tool calls (memory recall) | **Open** | [#6041](https://github.com/agentscope-ai/QwenPaw/pull/6041) (exempts read-only tools) |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Sub-agent model isolation + shared workspace** | [#6838](https://github.com/agentscope-ai/QwenPaw/issues/6838) (new today) | **High** — Active user pain, architectural gap |
| **Reranker support for ReMe memory search** | [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) (under review) | **High** — Backend ready, adds `RerankerConfig`, candidate multiplier |
| **Persistent workspace artifact cards (WorkBuddy-style)** | [#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719) | **Medium** — Detects created/modified files per turn, emits UI card, persists manifest |
| **OneBot remote inbound voice/image (CDN URLs)** | [#6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) (under review) | **Medium** — Unblocks OneBot implementations returning HTTP media URLs |
| **Feishu markdown image → native image upload** | [#5823](https://github.com/agentscope-ai/QwenPaw/pull/5823) | **Medium** — Feishu doesn't render markdown images in text/post |
| **Embedding model config guide (OpenAI, DashScope, Gemini, Ollama)** | [#6771](https://github.com/agentscope-ai/QwenPaw/pull/6771) | **Low** — Docs only, but signals embedding config complexity |
| **qwen3.8-max-preview in Aliyun Token Plan** | [#6293](https://github.com/agentscope-ai/QwenPaw/pull/6293) (under review) | **Low** — Provider catalog update, 1M context / 65k output |

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Sub-agent workspace/model confusion** | [#6838](https://github.com/agentscope-ai/QwenPaw/issues/6838) — "workspace 无法设置为同一个目录", config.json sharing breaks web UI | Blocks multi-agent workflows; users forced to choose between model isolation and shared context |
| **Desktop app unusable for copy/paste** | [#6801](https://github.com/agentscope-ai/QwenPaw/pull/6801) — "users cannot select text with mouse or copy" | Core UX regression in OS mode; now fixed |
| **CJK search broken** | [#6824](https://github.com/agentscope-ai/QwenPaw/pull/6824) — "紫水晶河马 could not match 紫水晶河马在周二跳舞" | Non-Latin users unable to recall history; now fixed |
| **macOS backend can't find user tools** | [#5861](https://github.com/agentscope-ai/QwenPaw/pull/5861) — GUI apps skip login shell, PATH missing Homebrew/nvm/mise | Developers on macOS can't use version managers from packaged app |
| **Long chat history timeouts** | [#6636](https://github.com/agentscope-ai/QwenPaw/pull/6636) — "30s timeouts on slow networks for long chats (1MB+)" | Pagination + GZip PR open; affects power users with extended sessions |
| **Test flakiness blocking CI gate** | [#6102](https://github.com/agentscope-ai/QwenPaw/pull/6102) — "passes in isolation, fails in full suite" due to module leakage | Maintainer productivity drain; prerequisite for #6764 |

## 8. Backlog Watch — Stale but Critical
| Item | Age | Why It Matters |
|------|-----|----------------|
| **[#5861](https://github.com/agentscope-ai/QwenPaw/pull/5861)** — macOS login-shell PATH for packaged backend | **~32 days** (created 2026-07-08) | First-time contributor PR, under review. Blocks all macOS desktop users from using Homebrew/nvm/mise/pyenv. High user impact, low complexity. |
| **[#6041](https://github.com/agentscope-ai/QwenPaw/pull/6041)** — DoomLoopGate exempt read-only tools | **~27 days** (created 2026-07-13) | First-time contributor. False positives terminate legitimate memory recall (3+ reads = warning, 6+ = termination). Undermines trust in loop protection. |
| **[#6102](https://github.com/agentscope-ai/QwenPaw/pull/6102)** — Isolation meta-test for #5813 flaky patterns | **~26 days** (created 2026-07-14) | Test infrastructure. Pins two systemic flake patterns (module leakage, async fixture teardown). Required before CI gate (#6764) can land. |
| **[#6536](https://github.com/agentscope-ai/QwenPaw/pull/6536)** — Chat deletion cleans up persisted data | **~12 days** (created 2026-07-28) | Addresses #6299. Prevents storage bloat and orphaned data. Core data hygiene. |
| **[#6767](https://github.com/agentscope-ai/QwenPaw/pull/6767)** — Harden agent persistence on shared filesystems | **~3 days** (created 2026-08-06) | Marked "ready-for-human-review". Critical for containerized/NFS/synced-folder deployments. Atomic writes + robust cache keys. |

---

**Health Assessment**: 🟡 **Moderate** — Strong bug-fix throughput (3 merged today, 47 active PRs) but accumulating stale critical-path PRs (macOS PATH, test flakiness, data hygiene). The new sub-agent issue (#6838) exposes a product-level gap in multi-agent UX. Recommendation: prioritize merging #5861, #6102, #6536, #6767 this week to unblock CI gate and desktop users.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-09

## 1. Today's Overview

ZeroClaw shows **high architectural churn with moderate feature velocity** over the past 24 hours. The project processed 11 issue updates (9 open, 2 closed) and 50 PR updates (48 open, 2 closed/merged), indicating active development but significant work-in-progress accumulation. No releases were cut. The dominant themes are: **crate consolidation** (retiring `aardvark-sys` and `zeroclaw-robot-kit` into `zeroclaw-hardware`), **gateway/webhook security hardening**, **SOP (Standard Operating Procedure) runtime fixes**, and **configuration/contract unification** across plugins, channels, and providers. Several high-risk, XL-sized refactors remain open, suggesting the codebase is in a transitional state.

---

## 2. Releases

**No new releases** published today.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#9798](https://github.com/zeroclaw-labs/zeroclaw/pull/9798) | `docs(sop): document which agent executes SOP steps` | Docs | Superseded by #9841; captured transient behavior before runtime fix |
| [#9494](https://github.com/zeroclaw-labs/zeroclaw/pull/9494) | `fix(sop): drive cron-started headless runs` | Bug fix (P1) | **Closed** — functionality continued in #9841; fixed stranded cron runs lacking agent loop attachment |

**Net progress:** One P1 bug fix for SOP cron execution was closed (merged into follow-up #9841). Documentation cleanup on SOP agent assignment was superseded. No new features shipped to users today.

---

## 4. Community Hot Topics — Most Active Discussions

| Item | Comments | Summary | Underlying Need |
|------|----------|---------|-----------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Tracker: Maintainer decision queue for RFCs | 11 | Central decision queue for RFCs, design issues, release-policy questions needing maintainer attention | **Governance bottleneck** — maintainers need structured triage for architectural decisions |
| [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) RFC: Retire `aardvark-sys` crate (CLOSED) | 11 | Fold standalone hardware crate into `zeroclaw-hardware` | **Workspace simplification** — reduce crate count, unblock crates.io publishing |
| [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) RFC: Unified package/capability/config/runtime-state catalog contract | 5 | Define single product-level catalog across integrations, built-ins, plugins | **Platform coherence** — replace fragmented catalogs (#8908, #8909) with one contract |
| [#8586](https://github.com/zeroclaw-labs/zeroclaw/issues/8586) Refactor: centralize webhook channel message dispatch | 5 | Shared gateway webhook-to-channel ingress helper for message lifecycle reuse | **Channel consistency** — unify parsing, autosave, dispatch, reply/error across webhook channels |
| [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) Bug: Matrix channel fails `.well-known` delegation | 1 (new today) | S0 severity — homeserver URL constructed directly, bypassing Matrix discovery | **Standards compliance & security** — Matrix federation requires `.well-known` resolution |

**Signal:** The maintainer decision queue (#8692) is the hottest item, confirming a **governance scaling challenge**. Crate consolidation (#8043, #9803, #9852) and catalog unification (#9346) reflect a deliberate push to reduce architectural surface area.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Component | Fix PR? | Summary |
|----------|-------|-----------|---------|---------|
| **S0** (data loss/security) | [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) | Matrix channel | No | Homeserver resolution bypasses `.well-known/matrix/client` delegation — breaks federation, potential SSRF |
| **S2** (degraded behavior) | [#9850](https://github.com/zeroclaw-labs/zeroclaw/issues/9850) | `llm_task` tool | No | Uses legacy provider factory (`create_model_provider_with_options`), loses alias-specific config (Azure/OAuth/requires_openai_auth) |
| **S2** (degraded behavior) | [#9849](https://github.com/zeroclaw-labs/zeroclaw/issues/9849) | `RateLimitedTool` | No | Non-atomic budget check (check-then-record) allows overrun under parallel dispatch |

**Assessment:** One **critical S0 bug** in Matrix channel discovery (new today) with no fix PR yet. Two S2 concurrency/configuration bugs also lack fix PRs. The S0 issue warrants immediate maintainer attention given security implications.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood for Next Version |
|----------|--------|----------------------------|
| [#9845](https://github.com/zeroclaw-labs/zeroclaw/issues/9845) Non-ASCII agent aliases (Chinese/Japanese) | **Accepted** (status:accepted, P2) — i18n config support | High — config validation change, low risk |
| [#9852](https://github.com/zeroclaw-labs/zeroclaw/issues/9852) Remove `aardvark-sys` & `zeroclaw-robot-kit` from workspace | **Accepted** — supersedes stalled #8043, unblocks crates.io publishing (#9381) | High — deletion is simpler than fold; workspace cleanup priority |
| [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) Unified catalog contract (RFC) | **Needs maintainer review** (P2, risk:high) — foundational for plugin/channel/provider unity | Medium — RFC stage, high risk, XL scope |
| [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744) Gateway: require authenticated webhook ingress | **Open, needs-author-action** (XL, risk:high) — security hardening for agent dispatch | Medium — security priority but large refactor |
| [#9828](https://github.com/zeroclaw-labs/zeroclaw/pull/9828) Agent-facing config authoring with policy previews | **Open** — 6-commit stacked PR, replaces raw `echo > config.toml` | Medium — improves agent UX, needs review bandwidth |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) Multi-session panes with agent sidebar (zerocode) | **Stacked on #9738** — major UI/UX feature for ACP clients | Low-Medium — XL, depends on stacked PR chain |

**Prediction:** Next version will likely include **crate deletions (#9852)**, **non-ASCII alias support (#9845)**, and **SOP runtime fixes (#9841)**. The unified catalog (#9346) and gateway auth (#9744) are strategic but need more review cycles.

---

## 7. User Feedback Summary

| Source | Pain Point / Use Case | Sentiment |
|--------|----------------------|-----------|
| [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) (lugu) | Matrix homeserver discovery broken — cannot federate without manual URL config | 😡 **Frustrated** — S0 severity, standards violation |
| [#9845](https://github.com/zeroclaw-labs/zeroclaw/issues/9845) (NiuBlibing) | Cannot use Chinese/Japanese agent aliases (`[agents."审核助手"]`) — config validation too restrictive | 😐 **Neutral/Request** — accepted, workaround exists (ASCII aliases) |
| [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) (JordanTheJet) | Standalone hardware crates block publishing, add maintenance burden | 😐 **Maintainer-driven** — internal technical debt |
| [#9849](https://github.com/zeroclaw-labs/zeroclaw/issues/9849) (JordanTheJet) | Rate limiter race condition under parallel tool execution | 😐 **Maintainer-identified** — proactive bug find |

**Overall:** Limited direct end-user feedback today; most activity is **maintainer-driven architectural cleanup**. The Matrix bug (#9855) is the only clear user-facing regression reported externally.

---

## 8. Backlog Watch — Long-Unanswered / Stalled Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue tracker | 36 days | Open, 11 comments | **Governance backbone** — 11 RFCs/design issues queued; maintainer bandwidth is the constraint |
| [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) Unified catalog contract RFC | 16 days | Open, needs-maintainer-review | **Architectural keystone** — blocks plugin/channel/provider unification; high risk, no movement |
| [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) Remove WATI channel | 10 days | Open, needs-author-action | **Dead code removal** — large XL PR removing entire channel; security domain, needs review |
| [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) Move network guards to `zeroclaw-infra::net_guard` | 9 days | Open, needs-author-action | **Security foundation** — Stage 1 of plugin egress policy (ADR-013); blocks #9395 fix |
| [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) Default command audit logging to disabled | 14 days | Open | **Security honesty** — accepted direction, but XL refactor stalled on review |
| [#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) Herdr agent reporting integration | 44 days | Open | **Observability** — long-open XL feature; may need rebase or scope reduction |

**Critical Path:** The **maintainer decision queue (#8692)** is the meta-blocker. Clearing RFC reviews (#9346, #8043→#9852) would unblock multiple XL PRs. Security PRs (#9580, #9410, #9744) are piling up without review bandwidth.

---

## Project Health Indicators

| Metric | Signal |
|--------|--------|
| **Issue:PR ratio** | 11:50 → PR-heavy, review bottleneck |
| **High-risk open PRs** | 7 XL/L PRs with `risk:high` or `priority:p0` awaiting review |
| **S0 bugs open** | 1 (Matrix `.well-known`) — **urgent** |
| **Governance load** | 11-item decision queue (#8692) with no resolution updates today |
| **Release cadence** | No release today; last release date unknown from data |

**Bottom line:** ZeroClaw is in a **consolidation & hardening phase** — reducing crate count, unifying contracts, fixing security defaults. Velocity is high on PR authoring but **review throughput is the limiting factor**. The S0 Matrix bug should be prioritized for immediate triage.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*