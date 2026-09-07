# OpenClaw Ecosystem Digest 2026-09-07

> Issues: 148 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-07 04:12 UTC

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

# OpenClaw Project Digest — 2026-09-07

## 1. Today's Overview

OpenClaw shows **extremely high velocity** with 500 PRs and 148 issues updated in the last 24 hours. The 223 merged/closed PRs vs 277 open indicates a healthy merge rate (~45%), though the open PR backlog is growing. Notably, **no new release was cut today** despite significant merge activity. The issue landscape is dominated by **session-state/message-loss bugs** (Platinum Hermit / Diamond Lobster rated), **gateway stability** (zombie processes, crash loops, restart drain), and **multi-platform channel regressions** (Discord, Telegram, Feishu, Matrix). Several P0/P1 release-blocker issues remain open, suggesting the project is in a stabilization phase ahead of a potential 2026.9.3+ release.

---

## 2. Releases

**No new releases today.** The last stable appears to be **2026.9.2** (referenced in multiple issues). Several merged fixes (e.g., #140466 xAI OAuth, #140479 gateway restart drain, #137690 sessions_spawn regression, #140416 CLI `--import tsx` breakage) are post-2026.9.2 and not yet shipped. Expect a **2026.9.3 patch** or **2026.10.0** soon given the volume of release-blocker fixes merged.

---

## 3. Project Progress — Merged/Closed PRs Today (223)

Key merged fixes (sample from top-commented PRs):

| PR | Area | Summary |
|----|------|---------|
| [#140747](https://github.com/openclaw/openclaw/pull/140747) | CI | Fix idle gateway fixture port collisions in parallel CI |
| [#140750](https://github.com/openclaw/openclaw/pull/140750) | Meeting | Retire completed loopback correlation scratch (perf) |
| [#140767](https://github.com/openclaw/openclaw/pull/140767) | Agents | Honor sequential tools in Code Mode (fixes concurrent execution of stateful MCP tools) |
| [#140766](https://github.com/openclaw/openclaw/pull/140766) | Crabbox | Skip redundant inspection after warm capture |
| [#140764](https://github.com/openclaw/openclaw/pull/140764) | OpenShell | Report preserved shadows after mirror failures |
| [#140653](https://github.com/openclaw/openclaw/pull/140653) | xAI/Grok | Keep Grok token discovery on subscription route |
| [#140466](https://github.com/openclaw/openclaw/pull/140466) | xAI OAuth | Fix auto alias resolving to canonical model then failing auth rematerialization |
| [#140479](https://github.com/openclaw/openclaw/pull/140479) | Gateway | Fix restart drain aborting in-flight Codex stdio turns |
| [#137690](https://github.com/openclaw/openclaw/pull/137690) | Telegram | Fix `sessions_spawn` "unknown parent session" for Telegram-originated sessions |
| [#140416](https://github.com/openclaw/openclaw/pull/140416) | CLI | Fix bare `--import tsx` breaking worker spawns outside package root |
| [#135862](https://github.com/openclaw/openclaw/pull/135862) | Gateway | Keep service-derived status targets off explicit-URL credential path |
| [#109379](https://github.com/openclaw/openclaw/pull/109379) | Docs | Fix docs sync declaration omitting orphan-pruning export |

**Theme:** Heavy focus on **gateway/runtime stability**, **auth/provider routing correctness**, **CI reliability**, and **Windows/Unix path-edge cases**.

---

## 4. Community Hot Topics — Most Active Issues/PRs

### Top Issues by Comment Count

| Issue | Comments | 👍 | Status | Core Pain Point |
|-------|----------|-----|--------|-----------------|
| [#79077](https://github.com/openclaw/openclaw/issues/79077) Telegram bot-to-bot & guest-bot support | 14 | 8 | **Closed (stale)** | Platform feature parity — Telegram released new bot modes May 2026; OpenClaw lacks support |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie child process leak from hooks/tools | 14 | 1 | **Open** | Runtime degradation over time; `openclaw-hooks`, `bash`, `codex` zombies accumulate |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) Windows sleep/resume: UI/WS reconnect fails 30-60s | 9 | 0 | **Open** | Gateway unreachable after wake; thaw recovery deferred behind busy gateway + event-loop stalls |
| [#118018](https://github.com/openclaw/openclaw/issues/118018) Stale subagent completion delivered to replaced requester lifecycle | 7 | 0 | **Open** | Session-state corruption: completions routed to wrong lifecycle, settled silently |
| [#140535](https://github.com/openclaw/openclaw/issues/140535) Discord `/new` doesn't reset channel session | 7 | 0 | **Closed** | Returns "No reply was generated" ephemeral fallback instead of resetting session |
| [#68264](https://github.com/openclaw/openclaw/issues/68264) Canvas/Browser UI visualization fails to render | 6 | 1 | **Open (stale)** | Regression: web page content not visible in chat interface |
| [#121232](https://github.com/openclaw/openclaw/issues/121232) Memory-core dreaming: ranker nominates, applier rejects forever | 6 | 0 | **Open** | "Ranked N, Promoted 0" — deep-sleep ranker/applier eligibility mismatch, no surfacing |
| [#106920](https://github.com/openclaw/openclaw/issues/106920) openclaw 2026.7.1 can't restart gateway | 5 | 5 | **Closed** | Post-update gateway restart failure; regression from 2026.6.11 |

### Top PRs by Activity (All Created/Updated Today)

All top PRs are **fresh (created today)** and in review. Highest structural impact:
- [#140339](https://github.com/openclaw/openclaw/pull/140339) **`feat(update): integrate checkpoints and interrupted-update recovery`** — XL, P2, multiple merge-risk flags (compatibility, session-state, security-boundary), **needs proof**
- [#140648](https://github.com/openclaw/openclaw/pull/140648) **`fix(update): bound finalization and diagnose stalled phases`** — Related to #139485 (managed upgrade leaves gateway offline), XL, P1
- [#140719](https://github.com/openclaw/openclaw/pull/140719) **`feat(config): externally managed read-only configuration`** — M, P2, avoids Nix mode side effects
- [#131467](https://github.com/openclaw/openclaw/pull/131467) **`feat(agents): expose pause/resume to update_goal tool`** — M, P2, session-state/security-boundary risks, **needs proof**

**Underlying needs:** Operators want **reliable upgrades** (checkpoint/recovery), **config immutability** without Nix coupling, and **agent lifecycle control** from tools. The update/recovery PRs signal a push to harden the managed-upgrade path (#139485).

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

### 🔴 P0 / Release Blockers (Critical)

| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#140497](https://github.com/openclaw/openclaw/issues/140497) | P0, 🐚 Platinum Hermit, **ux-release-blocker** | ❌ | Discord setup accepts Application ID as bot token; channel shows configured/stopped, `lastError=null`, never starts |
| [#140550](https://github.com/openclaw/openclaw/issues/140550) | P0, 🦞 Diamond Lobster, **ux-release-blocker** | ❌ | Discord guild allowlist writes don't apply; Control UI turns defer channel reload; stop/start keeps stale config |
| [#139485](https://github.com/openclaw/openclaw/issues/139485) | P1, 🦪 Silver Shellfish, **maturity:stable** | ✅ PR [#140648](https://github.com/openclaw/openclaw/pull/140648) | Managed upgrade leaves gateway offline; finalization nonterminal; requires operator intervention + rollback |
| [#140359](https://github.com/openclaw/openclaw/issues/140359) | P2, 🦪 Silver Shellfish | ❌ | ChatGPT/Codex model discovery times out at 5s cap; gpt-6-astra subscription route never registers |

### 🟠 P1 / High Impact

| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1, 🦪 Silver Shellfish | ❌ | **Zombie process leak** from hook/tool execution (`openclaw-hooks`, `bash`, `codex`); runtime degradation |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) | P1 | ❌ | Windows sleep/resume: UI/WS reconnect fails 30-60s; gateway unreachable |
| [#118018](https://github.com/openclaw/openclaw/issues/118018) | P1, 🦞 Diamond Lobster | ❌ | Stale subagent completion delivered to replaced requester lifecycle — silent session-state corruption |
| [#140479](https://github.com/openclaw/openclaw/issues/140479) | P1, 🦪 Silver Shellfish, maturity:stable | ✅ Merged [#140479](https://github.com/openclaw/openclaw/pull/140479) | Gateway restart drain aborts in-flight Codex stdio turns (docs say it waits) |
| [#140535](https://github.com/openclaw/openclaw/issues/140535) | P1, 🦪 Silver Shellfish, maturity:stable | ✅ Closed (fix implied) | Discord `/new` doesn't reset channel session; returns fallback error |

### 🟡 P2 / Significant

| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#140129](https://github.com/openclaw/openclaw/issues/140129) | P2, 🦐 Gold Shrimp | ❌ | Anthropic cache stuck at ~46k tools+system prefix on long sessions; `session:sanitized` rewrites history fingerprints |
| [#118482](https://github.com/openclaw/openclaw/issues/118482) | P2, 🦞 Diamond Lobster | ❌ | `codex-supervisor` WS handshake fails over unix socket due to `permessage-deflate` negotiation |
| [#140214](https://github.com/openclaw/openclaw/issues/140214) | P2, 🦞 Diamond Lobster | ✅ Closed | `memory.search.extraPaths` silently omits configured symlink root |
| [#140416](https://github.com/openclaw/openclaw/issues/140416) | P2, 🦞 Diamond Lobster, maturity:stable | ✅ Merged [#140416](https://github.com/openclaw/openclaw/pull/140416) | CLI bare `--import tsx` breaks every worker spawn outside package-root cwd |
| [#96203](https://github.com/openclaw/openclaw/issues/96203) | P0 (stale), 🐚 Platinum Hermit | ❌ | Gateway crash-loops with default Node heap (~4GB); `openclaw daemon install` should set `NODE_OPTIONS` or accept `--heap-mb` |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#79077](https://github.com/openclaw/openclaw/issues/79077) Telegram bot-to-bot & guest-bot support | **High** — Platform mandate (Telegram May 2026 release); 8 👍, 14 comments | Medium — Closed stale, but platform pressure will force revisit |
| [#78963](https://github.com/openclaw/openclaw/issues/78963) WhatsApp listen-only/hooks-only mode | **High** — 7 comments, clear ETL/archival use case | Medium — Closed stale; pattern exists for other channels |
| [#122403](https://github.com/openclaw/openclaw/issues/122403) Show local vs cloud provenance in Control UI model picker | **Medium** — UX clarity for data sovereignty; 4 comments | High — Low-effort, uses existing data; P2 |
| [#45503](https://github.com/openclaw/openclaw/issues/45503) Manual context clearing for tool results | **Medium** — 4 comments, 2 👍; addresses context bloat | Low — P3, needs product decision |
| [#96292](https://github.com/openclaw/openclaw/issues/96292) Standardize skill data dir under `~/.openclaw/` | **Medium** — 3 comments, 1 👍; ops hygiene | Medium — P3, closed stale but recurring need |
| [#91556](https://github.com/openclaw/openclaw/issues/91556) MCP `notifications/tools/list_changed` + HTTP reload endpoint | **High** — Production use case at scale (Pareto Colabs); 3 comments | High — Critical for MCP server operators; P2 |
| [#104521](https://github.com/openclaw/openclaw/issues/104521) Native approval buttons for Feishu/Teams/Mattermost | **Medium** — Transport parity after typed approvals work; 3 comments, 1 👍 | Medium — P2, stale, needs product decision |
| [#86425](https://github.com/openclaw/openclaw/issues/86425) `describe_view` camera frame for OpenAI Realtime Talk | **Low** — Niche voice+vision; 3 comments, 2 👍 | Low — P2, closed, security review needed |

**Predicted next-version candidates:** MCP tools-list-changed reload (#91556), model provenance UI (#122403), and possibly Telegram bot-mode support (#79077) if platform pressure persists.

---

## 7. User Feedback Summary — Real Pain Points

| Theme | Representative Issues | User Sentiment |
|-------|----------------------|----------------|
| **Gateway/Upgrade Reliability** | [#139485](https://github.com/openclaw/openclaw/issues/139485), [#106920](https://github.com/openclaw/openclaw/issues/106920), [#140648](https://github.com/openclaw/openclaw/pull/140648) | 😡 **High frustration** — Managed upgrades leave gateway offline, require manual rollback; "operator intervention" needed |
| **Session/Message Loss** | [#118018](https://github.com/openclaw/openclaw/issues/118018), [#140535](https://github.com/openclaw/opencl

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Ecosystem (2026-09-07)

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape shows **bimodal maturity**: a tier of high-velocity, production-grade frameworks (OpenClaw, ZeroClaw, NanoClaw, Hermes Agent, CoPaw) actively hardening runtime stability, multi-channel orchestration, and provider abstraction; and a tier of specialized or earlier-stage projects (PicoClaw, NanoBot, NullClaw, Moltis, ZeptoClaw, LobsterAI) focused on niche deployments (embedded, safety-critical, protocol compliance) or maintenance. **No project released a new version today**, indicating a cross-ecosystem stabilization window. The dominant architectural trend is **gateway-authoritative, Desktop-optional orchestration** with pluggable provider contracts — moving agents from client-side loops to server-grade, multi-device runtimes.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score (1–10) |
|---------|--------------|-----------|-------------------|----------------|---------------------|
| **OpenClaw** | 148 | 500 | 223 | Last: 2026.9.2; 2026.9.3/2026.10.0 imminent | 8 |
| **ZeroClaw** | 7 | 50 | 6 | v0.8.5 stabilization (tracker #9459) | 7 |
| **Hermes Agent** | 9 | 50 | 4 | No release; batching Bot Mode fixes | 7 |
| **NanoClaw** | 2 | 16 | 7 | v2.3.0 (2026-08-24); main +119 commits | 8 |
| **CoPaw** | 26 | 26 | 6 | v2.2.0-beta.7 (2026-09-02); stable pending | 6 |
| **NanoBot** | 0 | 16 | 5 | No release; batching open PR cluster | 8 |
| **PicoClaw** | 4 | 2 | 1 | No release; pre-release/maintenance | 5 |
| **ZeptoClaw** | 1 | 0 | 0 | No release; maintenance/polishing | 6 |
| **NullClaw** | 0 | 1 (open) | 0 | No release; stabilization | 6 |
| **Moltis** | 0 | 2 (open) | 0 | No release; quiet maintenance | 5 |
| **LobsterAI** | 1 | 1 | 1 | No release; OpenClaw upgrade branch | 5 |
| **IronClaw** | 0 | 0 | 0 | No activity | N/A |

*Health Score factors: velocity, merge rate, blocker severity, review responsiveness, community engagement, release cadence.*

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale & throughput**: 10× PR volume of nearest peers (ZeroClaw, Hermes); 223 merges/day demonstrates unmatched integration capacity.
- **Platform breadth**: Native multi-channel (Discord, Telegram, Feishu, Matrix, Slack) with active regression fixing — only NanoClaw matches channel count.
- **Release discipline**: Despite no release today, 2026.9.2 is recent; patch cadence (~weekly) exceeds all peers.
- **Issue taxonomy maturity**: Structured severity labels (Platinum Hermit, Diamond Lobster, Silver Shellfish) and release-blocker tags enable precise triage.

**Technical Approach Differences**
- **Monolithic gateway + Crabbox sandbox** vs. NanoClaw/ZeroClaw's provider-contract micro-kernel; Hermes's gateway-authoritative rooms; CoPaw's console-centric runtime.
- **Session-state as first-class citizen** with explicit lifecycle IDs — contrasts with PicoClaw's file-based JSONL and ZeptoClaw's delegation-tree model.
- **Windows/Unix path-edge investment** (PR #140416, #140747) signals enterprise desktop commitment absent in Linux-first peers.

**Community Size Comparison**
- **OpenClaw**: Highest visible engagement (14 comments on #79077, 14 on #97616, 5👍 on #106920).
- **Hermes**: Strong on advanced features (25 comments on #97681, 9👍 on #10421).
- **NanoBot/ZeroClaw/NanoClaw**: Engineering-driven; near-zero 👍/comments on issues — contributors ≈ users.
- **PicoClaw/ZeptoClaw/NullClaw/Moltis**: Single-digit or zero community signals.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Gateway/daemon reliability** | OpenClaw, Hermes, ZeroClaw, NanoClaw, CoPaw | Zombie process cleanup (OpenClaw #97616, NanoBot #5580), restart drain (OpenClaw #140479), cold-start timeouts (Hermes #94665), cron wall-clock timeouts (ZeroClaw #9191) |
| **Session durability & message-loss prevention** | OpenClaw, CoPaw, PicoClaw, Hermes, ZeroClaw | Append-only storage (PicoClaw #3351), context amnesia (CoPaw #7579/#7584), stale subagent routing (OpenClaw #118018), interrupted turn persistence (ZeroClaw #10197), bot offline continuity (Hermes #97681) |
| **Provider contract standardization** | NanoClaw, ZeroClaw, Hermes, NanoBot | Canonical setup/host/runtime contracts (NanoClaw #3581/#3585/#3586), live provider identity on usage (ZeroClaw #8966), MCP schema budgeting (NanoBot #5388), OAuth profile storage (ZeroClaw #9420) |
| **Multi-channel/platform parity** | OpenClaw, NanoClaw, Hermes, CoPaw, PicoClaw | Telegram bot modes (OpenClaw #79077, Hermes #103518), Slack thread_ts (NanoClaw #3730), Feishu/Teams approval buttons (OpenClaw #104521, CoPaw #7570), QQ rich media (PicoClaw #1349), Proton Mail (NanoClaw #3726) |
| **Observability & health endpoints** | NanoClaw, ZeroClaw, Hermes, OpenClaw | Telegram silent death (NanoClaw #3728), heartbeat composite keys (ZeroClaw #10670), gateway status targets (OpenClaw #135862), cron health (Hermes #104453) |
| **Embedded/edge performance** | PicoClaw, NanoBot, ZeptoClaw | Web UI virtualization (PicoClaw #3350), Windows CI flake isolation (NanoBot #5677/#5680), delegation safety on constrained runtimes (ZeptoClaw #664) |
| **Security hardening** | NanoBot, ZeroClaw, ZeptoClaw, Moltis | SSRF guard coverage (NanoBot #5678), TLS ALPN spec compliance (Moltis #1261), capability inheritance ceilings (ZeptoClaw #664), web fetch decompression (ZeroClaw #9283) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoClaw | ZeroClaw | Hermes Agent | CoPaw | NanoBot | PicoClaw | ZeptoClaw | NullClaw | Moltis |
|-----------|----------|----------|----------|--------------|-------|---------|----------|-----------|----------|--------|
| **Primary Target** | Enterprise/Pro desktop + multi-channel bots | Multi-provider agent runtime (CLI-first) | Scalable gateway + ZeroCode UX | Multi-device bot orchestration | Consumer desktop + plugin marketplace | Developer/Researcher TUI + WebUI | Embedded/IoT (RV1106, RISC-V) | Safety-critical delegation | MCP stdio transport reliability | Protocol-compliant execution layer |
| **Architecture** | Monolithic gateway, Crabbox sandbox, OpenShell UI | Provider-contract micro-kernel, browser setup portal | Gateway + runtime + provider plugins, SQLite session store | Gateway-authoritative rooms, Desktop optional | Console-centric, plugin skills, Advisor Mode | Async TUI/WebUI, dispatcher offload | Single-binary, JSONL session, Web UI | Delegation tree with policy ceiling | Minimal core, MCP-focused | Rust, TLS/HTTP spec adherence |
| **Channel Strategy** | Native adapters (Discord, Telegram, Feishu, Matrix, Slack) | Slack, Telegram, Proton Mail (Bridge), browser portal | Multi-instance channel routing, heartbeat targeting | Telegram, Discord, Slack (gateway-side) | Telegram, Feishu, Web, LAN LLM | WeCom (SDK), extensible | QQ Channel | N/A | N/A | N/A |
| **Provider Model** | xAI, Anthropic, OpenAI-compat, built-in discovery | Canonical contracts: setup/host/runtime/instruction | Stored OAuth, live identity, AnySearch, Hailo-Ollama | OpenAI-compat, xAI, Kimi, Z.ai | OpenAI-compat, DeepSeek, LM Studio, custom | OpenAI-compat, Serper, AnySearch, Codex | Plugin registry (OpenCode Go header gap) | N/A | MCP stdio only | N/A |
| **UX Differentiator** | Control UI, session import/export, CLI `--import` | Browser setup portal, `speed` tier per group | Multi-session panes, agent sidebar, prompt attachments | Bot Group Chat continuity, turn-level live time | Advisor Mode, tool-call toggle, plugin store | Context-window % in TUI, session I/O offload | Embedded Web UI (laggy), i18n | Policy-safe delegation | N/A | Shell spawn error precision |
| **Maturity Signal** | 2026.9.2 stable, weekly patches, structured triage | v2.3.0 +119 commits, contract refactor complete | v0.8.5 stabilization, intake frozen, weekly cuts | No version shown, architectural transition | v2.2.0-beta.7, critical regressions | No version, steady QoL fixes | No release, critical data-loss bug | No release, safety design phase | 7,373 tests passing, minimal churn | No release, correctness fixes only |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity + Structural Change)** | **OpenClaw, NanoClaw, ZeroClaw, Hermes Agent** | 50+ PRs/day; XL refactors (provider contracts, gateway rooms, session durability); P0 blockers actively triaged; architectural shifts in flight |
| **Feature-Forward Stabilizing** | **NanoBot, CoPaw** | 16–26 PRs/day; merging QoL fixes (CI, TUI, marketplace, language selector) while critical regressions remain open (CoPaw context loss, NanoBot session I/O) |
| **Maintenance / Niche Hardening** | **PicoClaw, NullClaw, Moltis, ZeptoClaw, LobsterAI** | ≤4 PRs/day; zero or near-zero community signals; fixing correctness (TLS, paths, delegation safety) or single critical bugs; no release pressure |
| **Dormant / Opaque** | **IronClaw** | No 24h activity; cannot assess |

**Key Insight**: The top tier (OpenClaw, NanoClaw, ZeroClaw, Hermes) is converging on **gateway-authoritative, contract-driven, multi-provider runtimes** — but each solves a different coordination problem: OpenClaw for channel breadth, NanoClaw for provider pluggability, ZeroClaw for ZeroCode UX, Hermes for bot autonomy.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Gateway > Desktop** | Hermes #95163 (g

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-07

## 1. Today's Overview
NanoBot shows **high development velocity** with 16 pull requests updated in the last 24 hours (11 open, 5 closed/merged) and zero new issues, indicating a maintenance-and-feature-forward phase rather than a fire-fighting cycle. The merged PRs span test stabilization, WeCom SDK migration, CI parallelization, TUI context-window reporting, and a marketplace-skills shadowing fix — all landing cleanly with passing test suites. Open PRs reveal three concurrent investment tracks: **WebUI/UX polish** (README refresh, session I/O offloading), **provider & MCP extensibility** (AnySearch, Langfuse tracing for Codex, MCP schema budgeting), and **security hardening** (SSRF guard coverage, exec working-dir resolution). No releases were cut today; the project appears to be accumulating changes for a future minor/major version.

## 2. Releases
**No new releases published today.** The latest published version remains whatever was current before 2026-09-07. Maintainers are batching merged fixes and features; expect a release once the open PR cluster (especially #5580, #5607, #5388, #5386) lands.

## 3. Project Progress — Merged / Closed PRs Today
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#5677](https://github.com/HKUDS/nanobot/pull/5677) | **Test Stability** | Fixed three flaky/environment-dependent tests (Windows catalog bounds, Rich terminal output, Windows process compat) — no production code changes. | Improves CI reliability; unblocks Windows contributors. |
| [#5683](https://github.com/HKUDS/nanobot/pull/5683) | **WeCom Channel** | Migrated media upload from private WebSocket impl to official SDK `WSClient.upload_media` (requires `wecom-aibot-sdk-python>=0.1.7,<0.2.0`). 156 tests pass. | Reduces maintenance burden; aligns with upstream SDK. |
| [#5680](https://github.com/HKUDS/nanobot/pull/5680) | **CI/CD** | Parallelized Linux/Windows pytest suites with `pytest-xdist`; split Windows process tests into separate job; enabled uv caching. | Cuts main-suite latency; isolates flaky Windows process tests. |
| [#5679](https://github.com/HKUDS/nanobot/pull/5679) | **TUI** | Footer now shows *context-window occupancy* (e.g., `11% context`) instead of aggregate token throughput. | Gives users accurate, actionable context-pressure signal. |
| [#5309](https://github.com/HKUDS/nanobot/pull/5309) | **Skills / WebUI** | Marketplace skills can now shadow built-ins; fixes install-button disablement for overridden skills (e.g., `github`). | Unblocks workspace-level skill customization. |

## 4. Community Hot Topics
*No issues were updated today, so “hot topics” are inferred from the most recently active PRs with architectural scope:*

| PR | Signals / Underlying Need |
|----|----------------------------|
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) (p1, updated 09-06) | **Session persistence blocking event loop** — users hit stalls under slow storage or file-lock contention. Offloading I/O to a dispatcher is a systemic fix for multi-conversation responsiveness. |
| [#5607](https://github.com/HKUDS/nanobot/pull/5607) (updated 09-07) | **Key-optional, anonymous-quota web search** — demand for zero-config, privacy-friendly search (AnySearch) alongside paid providers (Serper). |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) / [#5386](https://github.com/HKUDS/nanobot/pull/5386) (updated 09-06) | **MCP schema budgeting & rich result metadata** — large MCP tool sets blow context windows; users need deterministic subset selection and structured app results without polluting model context. |
| [#5678](https://github.com/HKUDS/nanobot/pull/5678) (new 09-06) | **SSRF guard coverage gaps** — redirect validation & pinned-DNS transport had zero direct tests; security-conscious deployments need regression suites. |

## 5. Bugs & Stability — Today’s Landscape
| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High (p1)** | Session persistence blocks event loop under load | **Open** — fix in progress | [#5580](https://github.com/HKUDS/nanobot/pull/5580) |
| **Medium (p2)** | `ExecTool` resolves relative `working_dir` from process CWD, not workspace | **Open** — fix authored | [#5682](https://github.com/HKUDS/nanobot/pull/5682) |
| **Medium (p2)** | Flaky Windows tests (catalog bounds, Rich, process compat) | **Fixed & Merged** | [#5677](https://github.com/HKUDS/nanobot/pull/5677) |
| **Medium (p2)** | WeCom media upload used private WS impl (brittle) | **Fixed & Merged** | [#5683](https://github.com/HKUDS/nanobot/pull/5683) |
| **Low (p2)** | Marketplace skills couldn’t shadow built-ins (UI + backend) | **Fixed & Merged** | [#5309](https://github.com/HKUDS/nanobot/pull/5309) |

*No new crash reports or regressions filed today.*

## 6. Feature Requests & Roadmap Signals
| Feature | PR / Issue | Likelihood for Next Release | Rationale |
|---------|------------|-----------------------------|-----------|
| **AnySearch web-search provider (key-optional)** | [#5607](https://github.com/HKUDS/nanobot/pull/5607) | **High** — follows established Serper pattern; tests passing. |
| **Langfuse tracing for Codex provider** | [#5520](https://github.com/HKUDS/nanobot/pull/5520) | **High** — parity with OpenAI-compatible provider; native SDK approach. |
| **MCP schema byte budget (opt-in)** | [#5388](https://github.com/HKUDS/nanobot/pull/5388) | **Medium** — opt-in, backward-compatible; solves real context-pressure pain. |
| **MCP Apps rich result metadata preservation** | [#5386](https://github.com/HKUDS/nanobot/pull/5386) | **Medium** — non-breaking; enables structured tool UIs. |
| **Heartbeat isolated-session & model-override** | [#4551](https://github.com/HKUDS/nanobot/pull/4551), [#4549](https://github.com/HKUDS/nanobot/pull/4549) | **Low–Medium** — open since June; needs design review / rebase. |
| **Desktop attach-only target selection** | [#5676](https://github.com/HKUDS/nanobot/pull/5676) | **Medium** — CLI UX polish; independent installs already supported. |
| **README/WebUI visual tour refresh** | [#5684](https://github.com/HKUDS/nanobot/pull/5684) | **High** — documentation-only; merges fast. |

## 7. User Feedback Summary
*Direct user comments are absent from today’s data (no issue updates, PR comments marked `undefined`). Pain points are inferred from merged/fixed PRs:*
- **“Event loop stalls during session save”** → #5580 (p1) addresses this head-on.
- **“Context window % invisible in TUI”** → #5679 gives live occupancy.
- **“Can’t install workspace skill that shadows built-in”** → #5309 unblocks custom skill workflows.
- **“Windows CI flakes waste reviewer time”** → #5677 + #5680 parallelization directly improve contributor experience.
- **“No free/anonymous web search option”** → #5607 adds AnySearch.

Overall sentiment: **maintainers are responsive to friction points**; users benefit from steady quality-of-life fixes.

## 8. Backlog Watch — Stale but Important
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) — Heartbeat `isolatedSession` config | **73 days** | Enables shared-session heartbeats for context-aware notifications; requested by multi-tenant deployments. | Rebase, add integration test, or close with rationale. |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) — Heartbeat `modelOverride` | **73 days** | Cost optimization: run heartbeat on cheaper model. Same stale cluster as #4551. | Bundle review with #4551; decide on heartbeat v2 scope. |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) / [#5386](https://github.com/HKUDS/nanobot/pull/5386) — MCP budgeting & metadata | **25 days** | Large MCP adopters blocked by context explosion; opt-in budget is a surgical fix. | Prioritize review; both are feature-complete per authors. |
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) — Session I/O offload (p1) | **10 days** | Highest-priority open bug; affects all multi-conversation workloads. | Assign reviewer today; block next release until merged. |

---

**Health Indicators**  
✅ **Green**: CI reliability improving, zero critical regressions, active security hardening.  
🟡 **Yellow**: Two-month-stale heartbeat PRs; p1 session fix still open.  
📈 **Trend**: Feature throughput > bug intake; project investing in extensibility (MCP, providers) and UX (TUI, WebUI, CLI).

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-07

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 PRs and 9 issues updated in the last 24 hours, though only 4 PRs were merged/closed — indicating active iteration with a backlog of work-in-progress. The project is heavily focused on **Bot Mode group chat continuity** (offline persistence, history sync, gateway-side orchestration), **Desktop stability** (renderer loops, cold-start timeouts, layout editor lag), and **cron/systemd compatibility** on Ubuntu 22.04. No releases were cut today. The issue/PR ratio suggests the team is in a feature-development and bug-fix sprint rather than a stabilization phase.

## 2. Releases
**No new releases today.** The latest version remains unspecified in the provided data.

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Component | Summary |
|----|------|-----------|---------|
| [#103518](https://github.com/NousResearch/hermes-agent/pull/103518) | **Bug Fix** | `gateway`, `platform/telegram` | Fixed Telegram in-band queued follow-up: reaction lifecycle and reply anchor now bind correctly when a message arrives while the agent is still working. Closes #103429. |
| *3 other merged/closed PRs* | — | — | Details not provided in data (4 total merged/closed). |

**Net progress**: One confirmed fix for Telegram message-delivery reliability; three additional merges undisclosed.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Issue | 25 | 0 | **Bot Group Chat persistence after Desktop closes** — users want bots on laptop/server/VPS to continue collaborating and allow pickup from another device. Linked PRs: [#104601](https://github.com/NousResearch/hermes-agent/pull/104601), [#98307](https://github.com/NousResearch/hermes-agent/pull/98307). |
| [#10421](https://github.com/NousResearch/hermes-agent/issues/10421) | Issue | 19 | 9 | **Turn-level live time context** — agents lack reliable "now" (date/weekday/timezone) without tool calls; session-level timestamp is insufficient for scheduling, deadlines, time-aware reasoning. |
| [#95163](https://github.com/NousResearch/hermes-agent/issues/95163) | Issue | 14 | 1 | **Backend-hosted group rooms** — move orchestration from Desktop renderer to gateway (authoritative room log, round driver) so bots survive Desktop disconnect. Tagged `needs-decision`. |
| [#104712](https://github.com/NousResearch/hermes-agent/issues/104712) | Issue | 3 | 0 | **Desktop Tasks list truncation** — >11 phases cut off with no scrollbar; blocks visibility of long-running agent workflows. |
| [#104453](https://github.com/NousResearch/hermes-agent/issues/104453) | Issue | 3 | 0 | **Cron broken on Ubuntu 22.04 (systemd 249)** — `OOMPolicy=kill` rejected on transient scopes; all cron jobs fail post v0.21.0. `P1` severity. |

**Underlying theme**: Users are pushing Hermes toward **multi-device, server-grade agent orchestration** — bots that run independently of the Desktop UI, with durable state, authoritative logs, and gateway-side scheduling.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **P1** | [#104453](https://github.com/NousResearch/hermes-agent/issues/104453) — Cron dispatch fails on Ubuntu 22.04 systemd 249 (`OOMPolicy=kill` rejected) | `tools`, `cron` | Open | None yet |
| **P2** | [#104711](https://github.com/NousResearch/hermes-agent/issues/104711) — Streaming crash: `reasoning_content` as list (xAI/Grok) breaks `separate_glued_reasoning_blocks()` | `agent`, `provider/xai` | Open | None yet |
| **P2** | [#102658](https://github.com/NousResearch/hermes-agent/issues/102658) — Live sessions ignore `config.yaml` model changes; `model_override` persists with no clear path | `cli`, `gateway`, `config` | Open | None yet |
| **P3** | [#104712](https://github.com/NousResearch/hermes-agent/issues/104712) — Desktop Tasks list cuts off >11 entries, no scrollbar | `desktop` | Open (dup) | None yet |
| **P3** | [#104719](https://github.com/NousResearch/hermes-agent/issues/104719) — z-ai models missing from pricing table → `$0/unknown` cost | `agent`, `provider/zai` | Open | None yet |
| **P3** | [#104665](https://github.com/NousResearch/hermes-agent/pull/104665) — `brotlicffi 1.2.0.1` decoder regression causes mid-stream `httpx.DecodingError` (Kimi provider) | `agent`, `provider/kimi`, `deps` | PR open | [#104665](https://github.com/NousResearch/hermes-agent/pull/104665) (bump to 1.2.0.2) |

**Stability signal**: Two P2 crashes (streaming, config persistence) and one P1 cron regression affect production workloads. The `brotlicffi` fix is ready but unmerged.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version | Rationale |
|---------|----------|-----------------------------|-----------|
| **Bot Group Chat continuity (offline + multi-device pickup)** | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681), [#104601](https://github.com/NousResearch/hermes-agent/pull/104601), [#98307](https://github.com/NousResearch/hermes-agent/pull/98307) | **High** | 3 linked PRs active; core "Bot Mode" vision; multiple maintainers (dokterdok) driving. |
| **Gateway-side group room orchestration (authoritative log, round driver)** | [#95163](https://github.com/NousResearch/hermes-agent/issues/95163) | **Medium-High** | Tagged `needs-decision`; architectural shift from Desktop to gateway; enables #97681. |
| **Turn-level live time context (current date/time/weekday per turn)** | [#10421](https://github.com/NousResearch/hermes-agent/issues/10421) | **Medium** | 9 👍, 19 comments; low implementation cost (inject `now` into turn context); high UX value for scheduling agents. |
| **Dashboard light/cream theme (accessibility)** | [#104720](https://github.com/NousResearch/hermes-agent/issues/104720) | **Low-Medium** | Single new issue, 0 comments; UI polish; may bundle with broader theme system. |
| **Terminal provider configuration support** | [#96161](https://github.com/NousResearch/hermes-agent/pull/96161) | **Medium** | Follow-up to #68555; enables plugin-owned config in Dashboard; incremental. |
| **Canonical Agent Chat SDK Seam (two communication modes)** | [#104722](https://github.com/NousResearch/hermes-agent/pull/104722) | **Low** | New PR, architectural; likely requires design review. |

**Roadmap prediction**: Next version will likely ship **Bot Group Chat history retention** (#104601) and **cold-start timeout fixes** (#94665), with turn-level time context (#10421) as a strong candidate if scope allows.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Source | User Impact |
|------------|--------|-------------|
| **"Bots stop when I close my laptop"** | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Core workflow blocker for multi-device users; forces Desktop to stay running 24/7. |
| **"Agent doesn't know today's date without calling a tool"** | [#10421](https://github.com/NousResearch/hermes-agent/issues/10421) | Frequent friction for scheduling, deadline-aware, and time-sensitive agents. |
| **"Cron completely broken on Ubuntu 22.04 after update"** | [#104453](https://github.com/NousResearch/hermes-agent/issues/104453) | Production regression; all scheduled jobs fail; blocks server deployments. |
| **"Streaming crashes on Grok/xAI responses"** | [#104711](https://github.com/NousResearch/hermes-agent/issues/104711) | Breaks reasoning display for popular models; visible user-facing error. |
| **"Tasks list cuts off in long agent runs"** | [#104712](https://github.com/NousResearch/hermes-agent/issues/104712) | Desktop UX regression; can't monitor multi-phase workflows. |
| **"Dashboard themes are dark-only, cause eye strain"** | [#104720](https://github.com/NousResearch/hermes-agent/issues/104720) | Accessibility complaint; "headaches" from monochromatic dark themes. |
| **"Model change in config doesn't apply to running bot sessions"** | [#102658](https://github.com/NousResearch/hermes-agent/issues/102658) | Ops frustration; requires session recreation to pick up new default model. |

**Positive signals**: Active PR engagement on Bot Mode continuity shows users are investing in advanced multi-agent workflows. The `brotlicffi` bump (#104665) shows dependency vigilance.

---

## 8. Backlog Watch (Stale/High-Value Items Needing Attention)

| Item | Age | Why It Matters | Blockers |
|------|-----|----------------|----------|
| [#10421](https://github.com/NousResearch/hermes-agent/issues/10421) — Turn-level live time context | **~5 months** (created 2026-04-15) | 9 👍, 19 comments; low-effort high-value; improves all time-aware agents. | Needs design decision: where to inject `now` (system prompt? tool? context var?). |
| [#95163](https://github.com/NousResearch/hermes-agent/issues/95163) — Backend-hosted group rooms | **~2 weeks** | Architectural prerequisite for true bot autonomy; tagged `needs-decision`. | Requires gateway-side state machine design; security boundary review (`sweeper:risk-security-boundary`). |
| [#102658](https://github.com/NousResearch/hermes-agent/issues/102658) — Session model override persistence | **~3 days** | Config changes silently ignored for long-lived sessions; ops hazard. | Needs "clear override" API/CLI; session rehydration logic audit. |
| [#104453](https://github.com/NousResearch/hermes-agent/issues/104453) — Cron/systemd 249 regression | **1 day** (P1) | Blocks all cron on Ubuntu 22.04 LTS (widely used). | Root cause: `systemd-run --user --scope` + `OOMPolicy=kill` interaction; may need fallback path. |
| [#94665](https://github.com/NousResearch/hermes-agent/pull/94665) — Cold-start tolerant timeouts | **~2 weeks** | Unblocks remote backend on busy hosts (60-150s boot); Desktop currently gives up at 45s. | Open, awaiting review; affects remote Desktop users. |

**Maintainer action items**: 
1. **Triage #104453 (P1 cron regression)** — Ubuntu 22.04 is a major deployment target.
2. **Decide on #95163** — gateway-side rooms unblock #97681's full vision.
3. **Merge #104665 (brotlicffi)** — quick stability win for Kimi/xAI streaming.
4. **Schedule #10421** — high community interest, low complexity, broad impact.

---

## Project Health Indicators
| Metric | Signal |
|--------|--------|
| **PR throughput** | High (50 updated/24h) but low merge rate (4/50) — WIP accumulation |
| **Issue severity** | 1 P1, 2 P2, rest P3 — manageable but cron regression is urgent |
| **Community engagement** | Strong on Bot Mode (25 comments) and time context (9 👍) — users investing in advanced features |
| **Architectural direction** | Clear shift toward **gateway-authoritative, Desktop-optional** bot orchestration |
| **Release cadence** | No release today; likely batching Bot Mode continuity fixes |

**Bottom line**: Hermes Agent is in a **major architectural transition** (Desktop-orchestrated → gateway-orchestrated bots) with active development on durability, multi-device continuity, and server-grade reliability. The next release will be a milestone if Bot Mode continuity lands.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-07

---

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 4 issues and 2 PRs updated in the last 24 hours. No new releases were published. The project is actively addressing **critical data-loss concerns** (session history physically deleted during compression), **embedded-device performance bottlenecks** (Web UI input lag on low-end hardware), and **provider ecosystem expansion** (OpenCode Go headers, additional LLM providers). One enhancement PR for QQ Channel attachment support was merged, while a Czech i18n PR remains open. Community engagement is low (zero reactions/comments on most items), suggesting a quiet but technically focused contributor base.

---

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be in a pre-release or maintenance phase between versions.

---

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | **Merged/Closed** | QQ Channel: parse/reply to emoji, voice, image, video, file attachments; Markdown fallback | ✅ Expands messaging platform parity for QQ Channel users |
| [#3348](https://github.com/sipeed/picoclaw/pull/3348) | **Open** | i18n: complete Czech code-wrap labels | 🔧 Minor localization polish; awaiting review |

**Net progress**: One user-facing feature landed (QQ rich media), one trivial i18n PR pending. No core runtime or provider changes merged today.

---

## 4. Community Hot Topics
| Issue | Activity | Core Need |
|-------|----------|-----------|
| [#3351](https://github.com/sipeed/picoclaw/issues/3351) **Session history physically deleted on compression** | 1 comment, updated 2026-09-06 | **Data integrity**: `JSONLStore.rewriteJSONL()` overwrites the session file, destroying original messages. Users lose irrecoverable history after "amnesia" events. |
| [#3350](https://github.com/sipeed/picoclaw/issues/3350) **Web UI input lag on embedded devices** | 1 comment, updated 2026-09-06 | **Performance**: Input latency scales with chat length on RV1106/RISC-V boards. Suspected virtual-list or re-render bottleneck in Web UI. |
| [#675](https://github.com/sipeed/picoclaw/issues/675) **Add more LLM provider support** | 7 comments, closed 2026-09-06 | **Ecosystem breadth**: Long-standing request (since Feb) for multi-provider abstraction; closed possibly due to provider plugin architecture now in place. |
| [#3369](https://github.com/sipeed/picoclaw/issues/3369) **OpenCode Go session header support** | 0 comments, created 2026-09-06 | **Integration**: Need `x-opencode-session` header mapping for OpenCode Go (distinct from OpenCode Zen). |

**Underlying theme**: Users are hitting **hard limits** — data loss, hardware constraints, and integration gaps — rather than requesting nice-to-haves.

---

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#3351](https://github.com/sipeed/picoclaw/issues/3351) | `JSONLStore.rewriteJSONL()` **physically deletes** original session messages during compression. No append-only guarantee; history unrecoverable. | ❌ No fix PR yet |
| **High** | [#3350](https://github.com/sipeed/picoclaw/issues/3350) | Web UI input box **severe lag** on embedded CPUs (RV1106, RISC-V) after conversation grows. CPU spikes per keystroke. | ❌ No fix PR yet |
| **Medium** | [#675](https://github.com/sipeed/picoclaw/issues/675) | Provider extensibility gaps (closed, but may reflect incomplete plugin coverage) | ✅ Likely addressed via provider plugin system |

**Stability signal**: Two **unfixed, user-impacting bugs** with clear root-cause identification but no active remediation PRs. Data-loss bug (#3351) is a release blocker for any production use.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Append-only session storage** (fix #3351) | Issue #3351 | 🔥 **Very High** — data loss is unacceptable; architectural fix needed in `pkg/memory/jsonl.go` |
| **Virtualized/virtual-list Web UI** (fix #3350) | Issue #3350 | 🔥 **High** — embedded deployment is a stated target (RV1106, RISC-V) |
| **OpenCode Go `x-opencode-session` header** | Issue #3369 | ⬆️ **Medium** — niche but well-scoped; provider plugin can implement |
| **Additional LLM providers** | Issue #675 (closed) | 📦 **Ongoing** — likely handled via provider plugin registry; monitor plugin contributions |

**Prediction**: Next patch/minor release will **must** include a fix for #3351 (append-only JSONL or snapshot+delta). #3350 may require a Web UI refactor (virtualization, memoization) and could slip to a minor version.

---

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Irreversible history loss** | "文件本身被重写删减了" — user inspected `.jsonl` and confirmed shrinkage | **Trust erosion**: users cannot rely on session persistence; "amnesia" = total context wipe |
| **Unusable on target hardware** | "每输入一个字符都有明显延迟，CPU 飙升" on RV1106/RISC-V | **Deployment blocker**: PicoClaw markets embedded support but Web UI fails on reference boards |
| **Integration friction** | OpenCode Go requires custom header not mappable via current OpenAI-compat layer | **Workflow break**: developers using OpenCode Go cannot link conversations |

**Satisfaction**: Low for embedded/data-critical users; neutral for desktop/cloud users unaffected by these paths.

---

## 8. Backlog Watch
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#3351](https://github.com/sipeed/picoclaw/issues/3351) **Session physical deletion** | 8 days (created 2026-08-30) | **Critical data-loss bug**; root cause identified (`rewriteJSONL`); no maintainer response or fix PR. Blocks any production session reliance. |
| [#3350](https://github.com/sipeed/picoclaw/issues/3350) **Embedded Web UI lag** | 8 days | **Platform promise violation**; PicoClaw targets RV1106/RISC-V but UI unusable. Needs profiling & virtualization. |
| [#3348](https://github.com/sipeed/picoclaw/pull/3348) **Czech i18n labels** | 9 days | Trivial, but stale PR indicates **low maintainer throughput** for even simple reviews. |
| [#675](https://github.com/sipeed/picoclaw/issues/675) **Provider support** | 197 days (closed 2026-09-06) | Closed without clear resolution link; verify provider plugin docs cover requested LLMs. |

**Maintainer bandwidth signal**: 2 critical bugs + 1 stale trivial PR + 1 new integration request = **backlog pressure exceeding review capacity**. Priority must be #3351 → #3350 → #3369 → #3348.

---

*Digest generated from GitHub data as of 2026-09-07. All links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-07

## 1. Today's Overview

NanoClaw shows **high development velocity** with 16 PRs updated and 2 issues addressed in the last 24 hours. The project is in a **heavy refactoring phase** focused on provider contract standardization — 7 provider-related PRs were merged/closed today alone, establishing canonical contracts for setup, host, runtime, and instruction rendering. A critical Slack session-management bug was identified and fixed within hours (#3730 → #3731). Meanwhile, a silent Telegram inbound failure (#3728) remains open and unaddressed, representing a stability risk. No new release was published; the main branch sits at 119 commits ahead of v2.3.0 (2026-08-24).

## 2. Releases

**No new releases today.** The latest published version remains **v2.3.0** (2026-08-24). The main branch has accumulated 119 commits since then, including the provider-contract refactors and the Slack fix merged today.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3731](https://github.com/nanocoai/nanoclaw/pull/3731) | **Bug Fix** | Fix Slack DM `thread_ts` preservation for reply delivery (resolves #3730) | Restores correct `session_mode: "shared"` behavior for Slack DMs |
| [#3586](https://github.com/nanocoai/nanoclaw/pull/3586) | **Refactor** | Declare setup provider contract & install verifier | Foundation for pluggable provider installation/verification |
| [#3592](https://github.com/nanoclaw/pull/3592) | **Feature** | Add `speed` as core-owned per-agent-group property (CLI: `ncl groups config update --speed <tier>`) | Enables inference-speed tier selection per group, approval-gated |
| [#3727](https://github.com/nanocoai/nanoclaw/pull/3727) | **Refactor** | Render provider instructions from core-owned canon (typed facts → rendered prose) | Eliminates provider-specific instruction drift; centralizes agent guidance |
| [#3585](https://github.com/nanocoai/nanoclaw/pull/3585) | **Refactor** | Declare host provider contract (spawn + group-init surfaces) | Removes hard-coded Claude logic; enables clean multi-provider host support |
| [#3581](https://github.com/nanocoai/nanoclaw/pull/3581) | **Refactor** | Declare runtime provider contract (execution policy, inference, MCP, memory hook) | Enforces verifiable provider implementations; replaces flag-based behavior |
| [#3584](https://github.com/nanocoai/nanoclaw/pull/3584) | **Refactor** | Implement Codex provider against new contracts (backward-compatible) | Codex now conforms to canonical runtime/setup/host contracts |
| [#3591](https://github.com/nanocoai/nanoclaw/pull/3591) | **Refactor** | Duplicate of #3727 — same canon-rendering work | Closed as duplicate/merged via #3727 |

**Net progress:** The provider-contract architecture (setup, host, runtime, instruction canon) is now **core-enforced** for Codex and foundational for OpenCode/Cursor. The `speed` group property adds a new user-facing control dimension. The Slack DM regression is resolved.

## 4. Community Hot Topics

| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#3728](https://github.com/nanocoai/nanoclaw/issues/3728) — *Telegram inbound silent death* | **Only open issue updated today** (0 comments, 0 👍) but **high severity**: inbound stops for days with no logs, no backoff, no alerting. | **Observability & resilience gap** in channel adapters. Users need: (a) health-check endpoints, (b) circuit-breaker/logging on polling success/failure, (c) alerting hooks. |
| [#3729](https://github.com/nanocoai/nanoclaw/pull/3729) — *Browser portal for Echo/Slack setup + WorkOS sign-in* | Large feature PR (core-team, 7 area labels) — **setup UX overhaul**. | **Reducing installation friction**; moving credential/channel setup out of CLI into a unified web flow with perk management. |
| [#3726](https://github.com/nanocoai/nanoclaw/pull/3726) — *Proton Mail channel via Bridge* | New channel adapter (ARM compatibility addressed via Bridge). | **Expanding channel surface** beyond Slack/Telegram; privacy-focused email integration. |
| [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) / [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) — *Cursor Agent SDK provider + install skill* | Open since 2026-08-19, updated today — **multi-provider expansion**. | **Supporting Cursor as a first-class agent runtime** alongside Claude/Codex/OpenCode. |

## 5. Bugs & Stability — Ranked by Severity

| Rank | Issue/PR | Severity | Status | Fix PR |
|------|----------|----------|--------|--------|
| **1** | [#3728](https://github.com/nanocoai/nanoclaw/issues/3728) — Telegram pollingLoop: infinite retries, zero success logs, silent inbound death for days | **Critical** (data loss, no observability) | **Open** | None yet |
| **2** | [#3730](https://github.com/nanocoai/nanoclaw/issues/3730) — Slack `session_mode: "shared"` spawns new per-thread session per top-level DM | **High** (session isolation broken) | **Closed** | [#3731](https://github.com/nanocoai/nanoclaw/pull/3731) ✅ merged |
| **3** | [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) — `NO_PROXY` for `host.docker.internal` so host-side MCP servers reachable | **Medium** (connectivity regression in containerized setups) | **Open** (PR ready) | [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) |
| **4** | [#3464](https://github.com/nanocoai/nanoclaw/pull/3464) — Remove v1-only `session-commands.ts` (dead code blocking merges) | **Low** (code hygiene, merge blocker) | **Open** | [#3464](https://github.com/nanocoai/nanoclaw/pull/3464) |

**Stability signal:** The Telegram adapter lacks **basic production guardrails** (timeouts, success logging, health metrics). This is the most pressing reliability hole.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Provider contract standardization** (setup/host/runtime/canon) | 7 merged PRs today (#3581, #3585, #3586, #3592, #3727, #3584, #3591) | **Certain** — already landed; v2.4 will ship this foundation |
| **`speed` inference tier per agent group** | [#3592](https://github.com/nanocoai/nanoclaw/pull/3592) merged | **Certain** — CLI + provider vocabulary in place |
| **Browser-based setup portal (WorkOS, perk management)** | [#3729](https://github.com/nanocoai/nanoclaw/pull/3729) open, core-team | **High** — large UX investment, active development |
| **Proton Mail channel** | [#3726](https://github.com/nanocoai/nanoclaw/pull/3726) open | **Medium** — new adapter, ARM constraint solved via Bridge |
| **Cursor Agent SDK provider + `/add-cursor` skill** | [#3356](https://github.com/nanocoai/nanoclaw/pull/3356), [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) open since Aug 19 | **Medium-High** — contracts ready, payload implemented |
| **OpenCode provider contract adoption in install skill** | [#3722](https://github.com/nanocoai/nanoclaw/pull/3722) open | **High** — follows same pattern as Codex/Cursor |
| **Telegram resilience hardening** | [#3728](https://github.com/nanocoai/nanoclaw/issues/3728) | **Should be high** but no PR yet — may slip without champion |

## 7. User Feedback Summary

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Silent channel failures** | #3728: Telegram inbound dead 4 days, host `active`, outbound works, no logs | **Severe** — users unaware agent isn't receiving messages |
| **Slack session regression** | #3730: `session_mode: "shared"` broken on main for 119 commits | **High** — DM threading broken for shared-session users |
| **Container networking friction** | #3654: `host.docker.internal` MCP servers unreachable without `NO_PROXY` | **Medium** — blocks host-side tool access in Docker |
| **Setup complexity** | #3729 motivation: "Move Echo and Slack setup into browser portal" | **Recurring** — CLI-first setup is a barrier; web portal requested |
| **Provider instruction inconsistency** | #3727/#3591: "provider could supply free-form instruction sections... restating core semantics" | **Developer experience** — fragmented agent behavior across providers |

**No positive feedback signals** (👍, comments) captured in today's data — activity is purely engineering-driven.

## 8. Backlog Watch — Stale/Needing Attention

| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|-------------------|
| [#3728](https://github.com/nanocoai/nanoclaw/issues/3728) — Telegram silent death | **Created yesterday, 0 comments** | Critical reliability hole; affects all Telegram users | **Assign immediately**; add polling timeout, success logging, health endpoint |
| [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) / [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) — Cursor provider + skill | **19 days open** (updated today) | Multi-provider strategy hinge; contracts now ready | **Review & merge** — blocked only on final validation |
| [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) — `NO_PROXY` fix | **9 days open** | Unblocks host MCP in Docker; small, targeted fix | **Merge** — low risk, high value for container users |
| [#3464](https://github.com/nanocoai/nanoclaw/pull/3464) — Remove v1 `session-commands.ts` | **15 days open** | Dead code blocking `skill/compact` merge | **Merge or close** — clarify if v1 cleanup still needed |
| [#3588](https://github.com/nanocoai/nanoclaw/pull/3588) — OpenCode runtime contract impl | **11 days open** | Completes OpenCode provider parity with Codex | **Review** — depends on #3581/#3585 (now merged) |

---

**Health Assessment:** 🟡 **Moderate** — Excellent architectural velocity on provider contracts, but **critical observability gap in Telegram** and **zero community engagement signals** (no comments/reactions on any item). The project is advancing its internal architecture rapidly while a production channel adapter silently fails. Recommend: prioritize #3728 fix, merge #3654/#3464, and land Cursor/OpenCode providers to capitalize on the new contract foundation.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-07

---

## 1. Today's Overview
NullClaw saw minimal activity in the last 24 hours: zero issues created or updated, zero releases, and a single open pull request (#996) addressing a timeout and cleanup issue in the MCP stdio transport. The project appears to be in a maintenance/stabilization phase with no new feature work or community-reported regressions surfacing today. Test suite health remains strong (7,373 tests passing, 9 skipped per the PR validation).

---

## 2. Releases
**No new releases published today.**  
The latest release information is not provided in the data snapshot.

---

## 3. Project Progress
**Merged/Closed PRs today:** None.  
**Open PR advancing:**  
- **#996** `fix(mcp): bound stdio response waits` — Adds `timeout_ms` enforcement to stdio MCP response reads and ensures the server’s process group is terminated on timeout. Also cleans up the spawned child process on failed initialization.  
  - Status: Open (created 2026-09-06)  
  - Validation: Full test suite passes (7,373 passed, 9 skipped); release build succeeds.  
  - Fixes: Issue #991 (not in today’s issue list, likely older).  
  - Link: [PR #996](https://github.com/nullclaw/nullclaw/pull/996)

---

## 4. Community Hot Topics
**No issues or PRs with significant comments or reactions in the last 24h.**  
The sole active PR (#996) has zero comments and zero reactions, indicating low community engagement on this change at this time.

---

## 5. Bugs & Stability
**No new bugs, crashes, or regressions reported today.**  
The only stability-related work is the proactive fix in PR #996, which hardens the MCP stdio transport against hung responses and orphaned child processes — a reliability improvement rather than a reaction to a reported incident.

---

## 6. Feature Requests & Roadmap Signals
**No new feature requests or roadmap signals today.**  
The current PR is a targeted bug-fix/refactor. Without issue activity or discussion, there are no observable signals for upcoming features.

---

## 7. User Feedback Summary
**No user feedback (issues, comments, reactions) captured in the last 24h.**  
The project’s user-facing channels appear quiet; no pain points, use cases, or satisfaction signals are visible from today’s data.

---

## 8. Backlog Watch
**No long-unanswered issues or PRs highlighted in today’s snapshot.**  
Since the data only covers the last 24 hours and shows zero issues, there’s no evidence of stale items needing maintainer attention from this window. (Historical backlog analysis would require a broader query.)

---

*Digest generated from GitHub data for nullclaw/nullclaw covering 2026-09-06 → 2026-09-07. Links point to github.com/nullclaw/nullclaw.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-07

## 1. Today's Overview
LobsterAI showed low but focused activity in the last 24 hours: one merged PR addressing test reliability on Windows, and one stale but still-open bug report concerning agent-switching UI refresh. No new releases were published. The project appears to be in a maintenance/stabilization phase with contributors cleaning up test infrastructure while a long-standing UX bug remains unaddressed.

## 2. Releases
**None** — No new versions or pre-releases were published today.

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#2619](https://github.com/netease-youdao/LobsterAI/pull/2619) | **Merged** | **Test: fix Windows path portability in installer and thumbnail tests** — Corrected 4 failing tests after merging `main` into the OpenClaw v2026.8.1 upgrade branch. Changes are limited to two test files: macOS installer tests now use POSIX path semantics when `process.platform = 'darwin'` is mocked, and a thumbnail queue priority test was adjusted for cross-platform path handling. No production code or runtime behavior was modified. |

**Impact**: Improves CI reliability on Windows runners; unblocks the OpenClaw upgrade branch validation.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [Issue #1068](https://github.com/netease-youdao/LobsterAI/issues/1068) | 1 comment, 0 👍, last updated 2026-09-06 (stale) | **UI state consistency** — When the currently selected agent is deleted and the UI falls back to another agent (e.g., `main`), the task list does not auto-refresh, leaving the user staring at an empty/stale list. Screenshot evidence shows the discrepancy. Users expect automatic list synchronization after destructive actions. |

*Only one issue received updates in the window; no PR discussions or reactions were recorded today.*

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Medium** | [#1068](https://github.com/netease-youdao/LobsterAI/issues/1068) — Task list fails to refresh after agent deletion & fallback | **Open (stale)** | No linked PR |

**Assessment**: A visible UX regression that affects multi-agent workflows. The bug has been open since March 2026 with no fix in sight. No crash or data loss, but it breaks the expected “delete → fallback → see tasks” flow.

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap discussions appeared in the last 24 h. The sole active issue (#1068) is a bug, not a feature ask. The merged PR (#2619) signals ongoing work to stabilize the **OpenClaw v2026.8.1 upgrade branch**, suggesting the next release may center on that integration rather than new user-facing features.

## 7. User Feedback Summary
- **Pain point**: Agent deletion leaves the task list in a stale state, forcing manual refresh or re-navigation.  
- **Use case**: Users managing multiple agents expect seamless fallback to `main` with immediate task visibility.  
- **Sentiment**: Neutral to slightly negative — the issue has lingered 5+ months without triage or fix, indicating low prioritization or resource constraints.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [Issue #1068](https://github.com/netease-youdao/LobsterAI/issues/1068) | ~5 months | Core multi-agent UX bug; simple to reproduce, clear expected behavior, but untouched. Should be triaged for the next sprint or labeled `help wanted` to attract community fixes. |
| OpenClaw upgrade branch validation | Ongoing | PR #2619 is part of a larger branch merge effort; watch for follow-up PRs that may surface additional portability or runtime issues before the next release. |

---

**Health Indicator**: 🟡 **Caution** — Test hygiene is improving (PR #2619), but a user-visible bug sits stale for months with no maintainer response. Prioritizing #1068 would signal stronger commitment to UX quality.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-07

## 1. Today's Overview
Moltis showed minimal public activity in the last 24 hours: zero issue updates, zero merged or closed pull requests, and no new releases. Two pull requests remain open—both authored by `be-student` and both targeting bug fixes rather than new features. The project appears to be in a quiet maintenance phase with focused, incremental improvements being prepared for review.

## 2. Releases
**No new releases published today.** The latest release information is not included in the provided data snapshot.

## 3. Project Progress
**No PRs were merged or closed today.** The two open PRs represent work in progress:
- **#1261** – Restricts TLS ALPN advertisement to HTTP/1.1 until RFC 8441 WebSocket upgrade support lands (fixes #245). Tests for `moltis-tls` pass (18/18).
- **#1260** – Improves `NotFound` error classification for shell spawns so a valid working directory no longer masks a missing `sh` in `PATH` (closes #279). Focused tests pass; reduced-feature suite shows 915/916 passing.

Both PRs are awaiting review/merge and address specific correctness issues rather than user-facing features.

## 4. Community Hot Topics
With zero issues updated and only two open PRs (both with 0 comments and 0 reactions), there are no visibly “hot” community discussions today. The two PRs are the sole active threads:
- [#1261](https://github.com/moltis-org/moltis/pull/1261) – TLS ALPN restriction (updated 2026-09-07)
- [#1260](https://github.com/moltis-org/moltis/pull/1260) – Shell spawn error reporting (updated 2026-09-06)

Underlying need: contributors are tightening protocol compliance (HTTP/1.1-only ALPN) and hardening execution-layer error semantics—both signals of a project prioritizing stability and spec adherence over feature expansion.

## 5. Bugs & Stability
No new bug reports or crash regressions were filed today. The two open PRs *fix* known issues:
| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| Medium | TLS advertised ALPN protocols beyond HTTP/1.1 (spec violation) | [#1261](https://github.com/moltis-org/moltis/pull/1261) | Open, tests pass |
| Low | `NotFound` error for missing shell incorrectly swallowed when CWD exists | [#1260](https://github.com/moltis-org/moltis/pull/1260) | Open, 915/916 tests pass |

No unfixed regressions or crashes reported in the last 24 h.

## 6. Feature Requests & Roadmap Signals
No new feature requests appear in today’s data. The only roadmap signals come from the fix PRs:
- **RFC 8441 WebSocket upgrade support** is explicitly blocked behind #1261; once merged, expect a follow-up PR to enable `h2`/WebSocket ALPN.
- **Execution-layer diagnostics** are being hardened (#1260), suggesting future work may improve tool-spawning UX (better errors, fallback shells).

Prediction: the next version will likely include these two fixes and possibly the WebSocket upgrade implementation if #1261 merges quickly.

## 7. User Feedback Summary
No user-reported issues, discussions, or feedback entries in the last 24 h. The only “feedback” is implicit in the two fixed issues (#245, #279), which originated from contributors/maintainers rather than external users. Pain points addressed:
- Spec-compliant TLS negotiation (affects interop with strict HTTP/2 clients).
- Misleading “directory not found” errors when the real problem is a missing `sh` binary.

## 8. Backlog Watch
The provided data contains no long-unanswered issues or stale PRs. With only two open PRs (both < 48 h old) and zero open issues in the snapshot, there is no backlog requiring immediate maintainer attention at this moment.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-07

---

## 1. Today's Overview

CoPaw maintains **high velocity** with 26 issues and 26 PRs updated in the last 24 hours. The project is in active **v2.2.0 beta** phase (v2.2.0-beta.7 released 2026-09-02), with maintainers and community contributors simultaneously addressing **critical stability regressions** (context loss, event-loop blocking, exception swallowing), **channel-specific bugs** (Telegram markdown, Feishu reasoning cards), and **UX regressions** (workspace selector, plugin store). Six PRs were merged/closed today, including language-selector unification and a first-time contributor fix for follow-up message queuing. No new release published today.

---

## 2. Releases

**No new releases today.**  
Latest: **v2.2.0-beta.7** (2026-09-02) — installation verification issue [#7503](https://github.com/agentscope-ai/QwenPaw/issues/7503).  
Project remains in beta; stable v2.2.0 not yet cut.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#7595](https://github.com/agentscope-ai/QwenPaw/pull/7595) | `fix(console): unify language selector options` | Bug fix | Restores Bahasa Indonesia & Tiếng Việt in sidebar settings; extracted shared config |
| [#7086](https://github.com/agentscope-ai/QwenPaw/pull/7086) | `fix(console): unify language options between settings gear and dropdown` | Bug fix | Same fix, earlier contributor (haosong384); now merged |
| [#7577](https://github.com/agentscope-ai/QwenPaw/pull/7577) | `fix(console): enqueue follow-up messages when chat task is running` | Bug fix | Addresses **#7559** 409 error — new messages now queued instead of rejected |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | `Close-and-review-later: task stop not actually stopping` | Issue closed | UI showed stopped but backend continued; deferred for deeper fix |
| [#7594](https://github.com/agentscope-ai/QwenPaw/issues/7594) | `Close-and-review-later: duplicate task output 3×` | Issue closed | Duplicate streaming events; deferred |
| [#7503](https://github.com/agentscope-ai/QwenPaw/issues/7503) | `Release Duty: v2.2.0-beta.7 Installation Verification` | Release task | Verification window closed |

**Net effect:** Two user-facing regressions (language selector, 409 on follow-up) resolved; two severe runtime bugs deferred.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Core Need |
|------|----------|-----------|
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) **LAN LLM disconnect/retry storm** (12 💬) | 12 | Stable local-model connectivity; LM Studio LAN users hit client disconnect → retry → timeout loop |
| [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) **409 on follow-up message during task** (5 💬) | 5 | **Fixed by #7577** — users expect queueing, not rejection |
| [#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820) **UI streams nothing until full completion** (5 💬) | 5 | Streaming UX broken; model output, tool calls, reasoning all batch at end |
| [#7513](https://github.com/agentscope-ai/QwenPaw/issues/7513) **deepseek-v4-pro tool-call mixing** (4 💬) | 4 | Model output interleaved with CoPaw tool-call markers; parsing ambiguity |
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) **Sync calls freeze event loop 120s+** (4 💬) | 4 | Startup & message-send hang; `timeout` ineffective — architectural async violation |
| [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) / [#7584](https://github.com/agentscope-ai/QwenPaw/issues/7584) **Model replies lost from context** (3+2 💬) | 5 | **Critical** — assistant messages persisted but omitted from next request → amnesia loops |
| [#7588](https://github.com/agentscope-ai/QwenPaw/issues/7588) **Workspace path input removed in v2.2** (2 💬) | 2 | **PR #7593** restores direct path entry; GUI picker unusable for deep paths |

**Underlying theme:** v2.2 introduced **regressions in core loops** (streaming, context, task control, async) while adding features. Users prioritize reliability over new modes.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **🔴 Critical** | [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) / [#7584](https://github.com/agentscope-ai/QwenPaw/issues/7584) Assistant messages dropped from context → amnesia, tool-call loops | Open | None yet |
| **🔴 Critical** | [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) Sync I/O blocks event loop 2 min+ at startup & per message | Open | None yet |
| **🟠 High** | [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) Hardcoded `32768` context_size fallback → `CONTEXT_UNFIT` for all models | Open | None yet |
| **🟠 High** | [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) `_coordinator._drain()` swallows exception stacks (no `logger.exception`) | Open | **[#7578](https://github.com/agentscope-ai/QwenPaw/pull/7578)** (first-time contrib) |
| **🟠 High** | [#7596](https://github.com/agentscope-ai/QwenPaw/issues/7596) `history.db` FTS corruption undetected; retention purge fails silently | Open | None yet |
| **🟠 High** | [#7589](https://github.com/agentscope-ai/QwenPaw/issues/7589) Heartbeat cron → duplicate message pile-up (agent unresponsive 2h) | Open | None yet |
| **🟡 Medium** | [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) LAN LLM client disconnect storm (LM Studio) | Closed | Workaround documented? |
| **🟡 Medium** | [#7513](https://github.com/agentscope-ai/QwenPaw/issues/7513) deepseek-v4-pro tool-call token mixing | Open | None yet |
| **🟡 Medium** | [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) Scroll compression injects `[context compressed]` as `role=user` → DeepSeek 400 | Open | None yet |
| **🟡 Medium** | [#7587](https://github.com/agentscope-ai/QwenPaw/issues/7587) OpenAI-compatible provider → Cloudflare 403 (WUSRouter) | Open | None yet |
| **🟢 Low** | [#7585](https://github.com/agentscope-ai/QwenPaw/issues/7585) Telegram markdown tables render as raw pipes | Open | **[#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590)** |
| **🟢 Low** | [#7099](https://github.com/agentscope-ai/QwenPaw/issues/7099) Dark mode channel tag unreadable (LESS selector bug) | Closed | Fixed in merged PR? |
| **🟢 Low** | [#7597](https://github.com/agentscope-ai/QwenPaw/issues/7597) Tool-returned image/PDF base64 → 400 `file must have file_id or file_data` | Open | None yet |

**Fix coverage:** Only 3/13 high+ bugs have open fix PRs (#7578, #7590, #7593). Critical context-loss and event-loop bugs lack patches.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for v2.2 / v2.3 |
|---------|----------|----------------------------|
| **Advisor Mode** (dual-model loop) | [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) | High — PR open, novel differentiation |
| **Tool-call visibility toggle** | [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | High — PR open, UX polish |
| **Chat scroll lock** | [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) | High — PR open, streaming UX |
| **Per-media inline caps (image/video/audio)** | [#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359) | Medium — provider-level feature |
| **Telegram intermediate-message cleanup** | [#7586](https://github.com/agentscope-ai/QwenPaw/issues/7586) / [#7592](https://github.com/agentscope-ai/QwenPaw/pull/7592) | Medium — PR open, opt-in |
| **Feishu reasoning card auto-collapse** | [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) / [#7591](https://github.com/agentscope-ai/QwenPaw/pull/7591) | Medium — PR open |
| **Plugin store: one-click update, update notifications, no full-page refresh** | [#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582) | Medium — high user pain |
| **AgentScope community integration (login, inbox, feedback)** | [#7583](https://github.com/agentscope-ai/QwenPaw/issues/7583) | Low — strategic, not core |
| **Sidebar/settings redesign** | [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) | High — large PR, UX overhaul |
| **Skill v2 (approval-driven draft workflow)** | [#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509) | Medium — “Ready for Merge” |

**Prediction:** v2.2 stable will likely include Advisor Mode, tool-call toggle, scroll lock, sidebar redesign, and the critical bug fixes above. Plugin store UX and community features may slip to v2.3.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Context amnesia** — “model forgets what it just said” | [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579), [#7584](https://github.com/agentscope-ai/QwenPaw/issues/7584) | 😡 Frustrated — “severe, causes loops” |
| **Event-loop freeze** — 2 min hangs on startup/send | [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | 😡 Blocking |
| **Streaming broken** — no output until done | [#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820) | 😡 “Unusable for long responses” |
| **Workspace selector regression** — lost direct path entry | [#7588](https://github.com/agentscope-ai/QwenPaw/issues/7588) | 😞 “v2.1 was better” |
| **Plugin store friction** — click-heavy, no bulk update | [#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582) | 😞 “Tedious on multiple machines” |
| **Telegram/Feishu formatting** — tables, reasoning cards | [#7585](https://github.com/agentscope-ai/QwenPaw/issues/7585), [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) | 😐 Annoyance |
| **Positive** — Advisor Mode concept, Feishu CardKit v2.1 praised | [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569), [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) | 👍 “Nice, working well” |

**Net sentiment:** **Concerned** — core reliability regressions outweigh feature excitement. Users expect v2.2 stable to *fix* v2.1 issues, not add new ones.

---

## 8. Backlog Watch (Stale & High-Impact)

| Item | Age | Why It Matters | Maintainer Action Needed |
|------|-----|----------------|--------------------------|
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) Sync calls freeze event loop | 10 days | Blocks every user on Windows; timeout ineffective | **Assign & prioritize** — architectural fix required |
| [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) Context loss / amnesia | 1 day (but dup of older?)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw Project Digest — 2026-09-07

---

## 1. Today's Overview

ZeptoClaw showed **low but focused activity** in the last 24 hours: one high-priority safety issue (#664) was updated, with no pull requests, merges, or new releases. The project appears to be in a **maintenance/polishing phase** centered on hardening its delegation safety model. The sole active issue targets a policy-inheritance gap in the existing sub-agent delegation system — a foundational concern for multi-agent trust boundaries. Overall velocity is minimal, but the workstream is strategically important.

---

## 2. Releases

**No new releases** in the last 24 hours. The latest published version remains unchanged.

---

## 3. Project Progress

**No merged or closed PRs today.** Zero pull-request activity means no features were completed, no bugs were fixed via PR, and no documentation or refactoring landed. The only movement is on the design/discussion side (Issue #664).

---

## 4. Community Hot Topics

| Item | Type | Activity | Link |
|------|------|----------|------|
| **#664** [OPEN] [area:safety, P2-high] [M][safety] Delegated-agent capability inheritance — children must not exceed parent policy | Issue | 1 comment, 0 reactions, updated 2026-09-06 | [qhkm/zeptoclaw#664](https://github.com/qhkm/zeptoclaw/issues/664) |

**Analysis**: This is the **only** community touchpoint today. The issue highlights a **policy-inheritance gap**: while ZeptoClaw already implements delegation mechanics (fresh child loops, sessions, concurrency, recursion blocking in `src/tools/delegate.rs`), child agents can currently exceed their parent’s policy permissions. The author (maintainer `qhkm`) frames this as the last missing piece for safe sub-agent delegation. The single comment suggests early-stage discussion — likely scoping the fix. Underlying need: **enforce least-privilege across agent hierarchies**, critical for production multi-agent workflows.

---

## 5. Bugs & Stability

**No bugs, crashes, or regressions reported today.** The single open issue is a **safety/design gap** (capability inheritance), not a defect in existing behavior. No fix PR exists yet.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Enforce parent-policy ceiling on delegated child agents** | Issue #664 (maintainer-authored, P2-high) | **High** — explicit priority, scoped to existing delegation code (`delegate.rs`), no architectural blockers mentioned |

This is the **only** roadmap signal visible. Given the maintainer authorship and P2-high label, this capability-inheritance fix is the strongest candidate for the next patch/minor release.

---

## 7. User Feedback Summary

**No external user feedback** (issues, discussions, or PRs from non-maintainers) in the last 24 hours. The sole activity is an internal safety hardening task. No pain points, use cases, or satisfaction signals from the broader community are visible today.

---

## 8. Backlog Watch

| Item | Status | Stale Since | Why It Matters |
|------|--------|-------------|----------------|
| *None identified in 24h window* | — | — | No long-unanswered issues or PRs surfaced in today’s data. The backlog health cannot be assessed from this snapshot alone. |

> **Note**: This digest covers only the last 24 hours. For a full backlog health check, a wider historical query (e.g., issues/PRs with no activity >30 days) would be needed.

---

**Data source**: GitHub API snapshot for `qhkm/zeptoclaw` (issues, PRs, releases) as of 2026-09-07.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-07

## 1. Today's Overview

ZeroClaw shows **high development velocity** with 50 PRs updated in the last 24 hours (6 merged/closed) and 7 issues updated. The project is in an active stabilization phase for **v0.8.5** (tracker #9459), with multiple large-scale refactors in flight across the gateway, runtime, provider, and channel layers. No new releases were published today. Critical-path bugs around cron job timeouts (#9191), session restore after budget exhaustion (#10659), and multi-instance channel routing (#10670) are actively being addressed. The PR backlog includes several XL-sized changes requiring maintainer review, indicating a focus on architectural improvements over incremental patches.

## 2. Releases

**No new releases** published today. The v0.8.5 stabilization line (tracker #9459) remains active with intake frozen since August 4; weekly cuts continue shipping ready work.

## 3. Project Progress — Merged/Closed Today

| PR / Issue | Type | Summary |
|------------|------|---------|
| #9575 | Enhancement (closed) | OpenAI-compatible provider warmup now uses `GET /models` instead of `GET /chat/completions` |
| #10572 | Documentation (closed) | WeCom (WeChat Work) channel documentation task completed |
| *6 PRs merged/closed* | — | Exact merged PRs not listed in data; 6 PRs moved to merged/closed state in last 24h |

**Key advancement**: Provider warmup logic corrected for OpenAI-compatible endpoints; WeCom channel now documented.

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| **#10407** — Persistent session prompt attachments (XL) | Updated today, high-risk, needs-author-action | Durable, opt-in prompt attachments per session with SQLite backing; explicit approval for mutations |
| **#8966** — Live provider identity on usage events (XL) | Updated today, high-risk | Fix context meter ceiling using serving provider’s actual context window, not trim budget |
| **#10241** — Supervised shell approval routing (XL) | Updated today, blocked, high-risk | Restore real operator approval path for channel-driven supervised shell calls |
| **#9420** — Stored OAuth profiles for Anthropic (XL) | Updated today, blocked, high-risk | Enable stored OAuth credential profiles for Anthropic provider |
| **#9739** — Multi-session panes with agent sidebar (XL) | Updated today, needs-maintainer-review | ZeroCode UX: multi-session panes, sidebar-launched quickstart, bounded reconnect |

**Underlying theme**: Contributors are pushing **multi-provider, multi-session, and multi-channel** capabilities — especially around provider identity propagation, session durability, and channel-instance routing.

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S1 / P1 / High** | **#9191**: Cron agent jobs lack wall-clock timeout; in-flight locks only cleared at process start | Open, in-progress | — |
| **S1 / P1 / High** | **#10659**: Budget-exceeded Code turn loses visible progress after session restore | Open, follow-up | — |
| **S1 / High** | **#10670**: `heartbeat.target` rejects channel instance composite key (`<type>.<alias>`) | Open (created today) | **#10671** (open, fixes #10670) |
| **High** | **#10637**: WS memory consolidation uses gateway-wide default provider, not turn’s provider | Open, needs-author-action | #10637 |
| **High** | **#9283**: `web_fetch` doesn’t decompress gzip/brotli/deflate responses | Open, stale-candidate, needs-author-action | #9283 |
| **High** | **#10197**: Interrupted ACP turn progress not persisted | Open, needs review | #10197 |
| **Medium** | **#9447**: Anthropic incomplete terminal responses classified as success | Open, in-progress, needs-author-action | #9447 |
| **Medium** | **#9378**: Failed/cancelled ACP turn transcripts dropped on session load | Open, needs-author-action | #9378 |

**Note**: #10670 (created today) already has a fix PR (#10671) — fast response.

## 6. Feature Requests & Roadmap Signals

| Feature | Signal Strength | Likely Target |
|---------|----------------|---------------|
| **Persistent session prompt attachments** (#10407) | High — XL PR, active review | v0.8.5 or v0.9 |
| **Multi-session panes / agent sidebar** (#9739) | High — XL PR, maintainer review started | v0.9+ (ZeroCode UX) |
| **Stored OAuth profiles for Anthropic** (#9420) | High — XL PR, blocked on review | v0.8.5 if unblocked |
| **AnySearch web search provider** (#10356) | Medium — L PR, blocked | v0.9 |
| **Native Hailo-Ollama provider** (#9109) | Medium — XL PR, do-not-merge | Post-v0.8.5 |
| **Telegram secure model picker** (#9997) | Medium — XL PR, blocked | v0.9 |
| **Third cache breakpoint for Anthropic turn-boundary fallback** (#10660) | High — in-progress, follow-up | v0.8.5 |

**Prediction**: v0.8.5 will land provider identity fixes (#8966), cron timeout (#9191), cache breakpoint (#10660), and heartbeat composite key (#10670/10671). UX features (multi-session, prompt attachments) likely slip to v0.9.

## 7. User Feedback Summary

| Pain Point | Evidence |
|------------|----------|
| **Cron jobs hang indefinitely** | #9191: “workflow blocked”, no timeout on `agent::run` |
| **Session restore loses in-progress work after budget limit** | #10659: “discards unfinished assistant text and tool results” |
| **Cannot target specific channel instance for heartbeat** | #10670: “daemon fails with `unsupported heartbeat.target channel: telegram.bot2`” |
| **WS memory consolidation uses wrong provider** | #10637: “spawned its LLM call on the gateway-wide boot default” |
| **Web fetch fails on compressed responses** | #9283: gzip/brotli/deflate not decompressed |
| **Anthropic incomplete responses treated as success** | #9447: “semantic-empty and incomplete terminal completions as typed failures” |
| **Supervised shell calls denied without approval path** | #10241: “denying them before anyone can respond” |

**Satisfaction signal**: Users/contributors are filing detailed, high-severity bugs with reproduction steps — indicates deep production usage. Quick fix PR for #10670 suggests responsive maintainers.

## 8. Backlog Watch — Stalled / Needs Maintainer Attention

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| **#8966** — Live provider identity on usage events | 58 days | High | Context meter broken for multi-provider setups; XL PR, updated today but still open |
| **#9420** — Stored OAuth profiles for Anthropic | 43 days | High | Blocked; security-sensitive; XL PR with many labels |
| **#10241** — Supervised shell approval routing | 16 days | High | Blocked; affects all channel-driven shell approvals |
| **#9283** — Web fetch decompression | 46 days | High | Stale-candidate; security-relevant (compressed payloads) |
| **#9997** — Telegram secure model picker | 24 days | High | Blocked; multi-provider model selection UX |
| **#10356** — AnySearch web search provider | 13 days | High | Blocked; new provider integration |
| **#9109** — Hailo-Ollama native provider | 52 days | High | Do-not-merge; hardware-specific provider |

**Action needed**: Several XL PRs are blocked on maintainer review. The v0.8.5 tracker (#9459) notes “intake froze August 4” — these may be deliberately deferred, but security/high-risk items (#8966, #9283, #10241) warrant triage.

---

**Project Health Indicators**
- 🟢 **Velocity**: High (50 PR updates/24h)
- 🟡 **Review Throughput**: Bottlenecked — multiple XL PRs awaiting maintainer action
- 🟢 **Bug Responsiveness**: Good — new S1 bug (#10670) got fix PR same day
- 🟢 **Stabilization Focus**: Clear — v0.8.5 tracker active, intake frozen
- 🔴 **Technical Debt**: Visible — stale-candidate PRs (#9283, #9378) >45 days open

**Links**: [Issues](https://github.com/zeroclaw-labs/zeroclaw/issues) | [Pull Requests](https://github.com/zeroclaw-labs/zeroclaw/pulls) | [v0.8.5 Tracker #9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*