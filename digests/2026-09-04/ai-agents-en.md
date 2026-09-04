# OpenClaw Ecosystem Digest 2026-09-04

> Issues: 161 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-04 04:08 UTC

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

# OpenClaw Project Digest — 2026-09-04

## 1. Today's Overview
OpenClaw shows **very high velocity** with 161 issues and 500 PRs updated in the last 24 hours. The project released **v2026.9.1** today, delivering Mermaid diagram rendering across all chat surfaces (Control UI, macOS, iOS, Android). Throughput is strong: 65 issues closed and 83 PRs merged/closed, though the open backlog remains substantial (96 active issues, 417 open PRs). A critical Windows gateway startup regression in the new release (#137813, P0) and several data-loss bugs indicate stability pressure on the 2026.9.x line.

## 2. Releases
### **v2026.9.1** — Released today
**Highlights:**
- **Diagrams in every chat**: Mermaid blocks now render as interactive diagrams in Control UI and native mobile/desktop apps, with enlarge previews and mobile retry logic ([#134913](https://github.com/openclaw/openclaw/issues/134913), [#135746](https://github.com/openclaw/openclaw/issues/135746), [#135470](https://github.com/openclaw/openclaw/issues/135470), [#135342](https://github.com/openclaw/openclaw/issues/135342))
- **From install to chat**: Streamlined onboarding flow (details truncated in source)

**Breaking Changes / Migration Notes:** None explicitly documented in the release summary. However, **#137813** reports a **P0 regression**: Windows gateway fails to start after update — the new `--task-supervisor` flag exits 0 silently and the child process never spawns. Operators on Windows should delay upgrade or test in staging.

## 3. Project Progress (Merged/Closed Today)
**83 PRs merged/closed** in the last 24h. Key merged work inferred from closed issues and release:

| Area | Progress |
|------|----------|
| **Mermaid rendering** | Shipped across Web, macOS, iOS, Android (release highlight) |
| **Slack Canvas** | PR [#136794](https://github.com/openclaw/openclaw/pull/136794) adds `canvases.create/edit/delete/sections` actions (XL, needs proof) |
| **Windows device approval** | PR [#127177](https://github.com/openclaw/openclaw/pull/127177) prevents repeated metadata approval prompts (M, ready for maintainer) |
| **Plugin reload stability** | PR [#126547](https://github.com/openclaw/openclaw/pull/126547) fixes channel monitors retaining retired bindings after plugin reloads (M, waiting on author) |
| **Memory tooling** | PR [#137876](https://github.com/openclaw/openclaw/pull/137876) exposes storage usage and guides safe disk recovery (S, ready) |
| **CI reliability** | PR [#137881](https://github.com/openclaw/openclaw/pull/137881) warns instead of failing when npm advisory service is unavailable (M, ready) |
| **Automation admin** | PR [#137857](https://github.com/openclaw/openclaw/pull/137857) lets Control UI admins manage channel-created jobs (XL, security-boundary, waiting on author) |

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | 👍 | Status | Core Need |
|------|----------|-----|--------|-----------|
| [#94518](https://github.com/openclaw/openclaw/issues/94518) DeepSeek cache hit rate <10% after 6.x upgrade | 11 | 10 | **Closed** | Boundary-aware caching breaks prefix matching for DeepSeek V4; operators need caching compatibility or rollback guidance |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process accumulation from hook/tool children | 10 | 1 | **Open** | Unreaped `openclaw-hooks`, `bash`, `codex` processes degrade runtime; P1 regression needing process-reaping fix |
| [#96007](https://github.com/openclaw/openclaw/issues/96007) Discord: subsequent message content truncated after inline error | 9 | 1 | **Open** | Error text in multi-part replies silently drops all following content; message-loss impact |
| [#137705](https://github.com/openclaw/openclaw/issues/137705) Telegram leaks raw `file://` Markdown links | 8 | 0 | **Open** (today) | Links with non-allowlisted schemes render as raw Markdown; security/UX issue |
| [#123799](https://github.com/openclaw/openclaw/issues/123799) Production upgrade guidance for Codex compact 404 | 8 | 0 | **Open** | Affected deployment on 2026.5.12 needs safe backport/upgrade path after related issue closed as "implemented on main" |
| [#135347](https://github.com/openclaw/openclaw/issues/135347) Forced memory reindex inflates DB to 35GB, deleting destroys sessions | 8 | 0 | **Open** | Embedding-provider change triggered massive DB growth; recovery via deletion caused data-loss; P1, diamond lobster |

**Underlying theme:** Operators are hitting **upgrade friction** (caching, Codex, memory indexing) and **silent data-loss paths** (memory persistence, message truncation). The community demands safer migration tooling and explicit failure signaling.

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0 — UX Release Blocker** | [#137813](https://github.com/openclaw/openclaw/issues/137813) | Windows gateway never starts after 2026.9.1; `--task-supervisor` exits 0 silently | **No PR yet** (created today) |
| **P1 — Data Loss / Crash Loop** | [#135347](https://github.com/openclaw/openclaw/issues/135347) | Forced memory reindex grows shared DB to 35GB; deleting it destroys sessions | [#137876](https://github.com/openclaw/openclaw/pull/137876) adds storage visibility & recovery guidance |
| **P1 — Silent Data Loss** | [#126906](https://github.com/openclaw/openclaw/issues/126906) | `tools.deny` on write tool disables memory persistence; agent reports success anyway | **No PR** |
| **P1 — Regression** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped hook/tool child processes accumulate as zombies, degrading runtime | **No PR** |
| **P2 — Regression** | [#125640](https://github.com/openclaw/openclaw/issues/125640) | `memory index --force` still fails on item-count batch limits (Qianfan 16, Volcano 10); #80226 never fixed | **No PR** |
| **P2 — Message Loss** | [#137845](https://github.com/openclaw/openclaw/issues/137845) | Harness-internal turn failures (e.g., session-store errors) surfaced as generic "provider/model request failed" | **No PR** |
| **P2 — UX Friction** | [#137843](https://github.com/openclaw/openclaw/issues/137843) | iOS branch picker enabled during active runs; safety rejection shows as generic error | [#137890](https://github.com/openclaw/openclaw/pull/137890) — **PR open, needs proof** |
| **P1 — Auth/Config** | [#126529](https://github.com/openclaw/openclaw/issues/126529) | Custom `models.providers.<name>.models[]` entries silently route to wrong provider (missing api/baseUrl) | **No PR** |
| **P2 — Message Loss** | [#96007](https://github.com/openclaw/openclaw/issues/96007) | Discord: inline error text truncates subsequent message content in same message | **No PR** |
| **P1 — Security** | [#120571](https://github.com/openclaw/openclaw/issues/120571) | `before_tool_call { block: true }` silently unenforced for Codex-native exec when `approvalPolicy: "never"` (fails open) | **No PR** |

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|----------------------------|
| [#137872](https://github.com/openclaw/openclaw/issues/137872) Policy-bound hooks enumerate authorized tool names | P3 | **New today**; security-boundary work; maintainer decision pending | Medium — fits current prompt-hook hardening |
| [#127208](https://github.com/openclaw/openclaw/issues/127208) One-off `/followup` command | P2 | UX friction reduction; clear operator need | High — small scope, existing queue infrastructure |
| [#126781](https://github.com/openclaw/openclaw/issues/126781) Durable Lobster workflows from `/loop` & Automations | P3 | Workflow orchestration maturation; "off-meta tidepool" | Low — requires TaskFlow integration, long-term |
| [#116473](https://github.com/openclaw/openclaw/issues/116473) `@A ask @B` inter-agent delegation | P3 | Multi-agent UX; security-reviewed, plugin-first | Medium — aligns with federation roadmap |
| [#109753](https://github.com/openclaw/openclaw/issues/109753) WhatsApp Status updates via message tool | P3 | Channel parity; Baileys session already present | Medium — incremental channel feature |
| [#87733](https://github.com/openclaw/openclaw/issues/87733) Cross-gateway federation protocol | P2 | Strategic (FRD draft); tenant-scoped identity, bridge protocol | Low — foundational, multi-release effort |

**Prediction:** Next patch (2026.9.2) will likely include the Windows startup fix, iOS branch-picker disable, and memory storage visibility. The `/followup` command and Slack Canvas are strong candidates for 2026.10.

## 7. User Feedback Summary

**Pain Points (from issues):**
- **Upgrade trauma**: Multiple reports of silent breakage after version bumps (DeepSeek caching, Codex compact 404, memory indexing, Windows startup). Users want **explicit migration guides** and **backport policies**.
- **Silent failures**: Memory persistence disabled without warning (#126906), message content dropped (#96007, #137705), generic error messages masking root causes (#137845).
- **Resource leaks**: Zombie processes (#97616), 35GB DB growth (#135347), memory pressure causing false stalled-run detection (#107415).
- **Channel fragility**: Discord, Telegram, Feishu, Slack each have distinct rendering/delivery bugs; multi-channel operators bear integration tax.

**Positive Signals:**
- High engagement on Mermaid diagram release (multiple linked PRs, cross-platform).
- Active maintainer triage: many PRs in "ready for maintainer look" or "waiting on author" states.
- Community contributes repros and workarounds (e.g., #95985 bootstrap cache analysis, #125079 WhatsApp LID retraction).

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)

| Issue | Age | Labels | Why It Matters |
|-------|-----|--------|----------------|
| [#87733](https://github.com/openclaw/openclaw/issues/87733) Cross-gateway federation protocol | 100+ days | P2, stale, security, session-state, auth-provider, tidepool | Strategic FRD; unblocked by maintainer filing |


---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-04)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bifurcated maturity**: a tier of high-velocity, production-hardening projects (OpenClaw, Hermes Agent, IronClaw, ZeroClaw, CoPaw, NanoClaw) contrasted with a long tail of stalled or niche efforts (NullClaw, Moltis, ZeptoClaw). **Multi-platform delivery** (desktop, mobile, web, CLI, chat channels) and **session durability** (persistence, compression, crash recovery) are the dominant technical battlegrounds. **Security boundaries**—tool approval gates, sandboxed execution, network egress consent—have shifted from aspirational to actively implemented across the leaders. Release cadences are accelerating toward **weekly patches** for the top projects, with semantic versioning giving way to date-based or continuous delivery.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged PRs (24h) | Release Today | Latest Version | Health Score |
|---------|--------------|-----------|------------------|---------------|----------------|--------------|
| **OpenClaw** | 161 | 500 | 83 | ✅ v2026.9.1 | v2026.9.1 | 🟢 Excellent |
| **Hermes Agent** | 19 | 50 | 3 | ❌ | Pre-release | 🟢 Excellent |
| **ZeroClaw** | 1 (new) + backlog | 50 | 1 | ❌ | Pre-release | 🟢 Excellent |
| **IronClaw** | 11 | 18 | 10 | ❌ | Pre-release | 🟢 Excellent |
| **CoPaw (QwenPaw)** | 20 | 36 | 15 | ❌ | v2.2.0-beta5 | 🟢 Excellent |
| **NanoClaw** | 5 | 23 | 3 | ❌ | Not specified | 🟢 Excellent |
| **NanoBot** | 4 active | 25 | 14 | ❌ (0.3.1 imminent) | 0.3.0 | 🟢 Good |
| **LobsterAI** | 6 (mostly stale) | 10 | 10 | ❌ (RC merged) | 2026.8.31-RC | 🟡 Good |
| **PicoClaw** | 6 | 8 | 1 | ❌ | 0.3.1 | 🟡 Fair |
| **NullClaw** | 0 | 0 | 0 | ❌ | — | 🔴 Poor |
| **Moltis** | 0 | 0 | 0 | ❌ | — | 🔴 Poor |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | — | 🔴 Poor |

*Health Score criteria: velocity + fix/merge ratio + release cadence + critical bug backlog + maintainer responsiveness.*

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale & Breadth**: Largest contributor base (500 PRs/24h), widest platform matrix (Control UI, macOS, iOS, Android, 6+ chat channels), and most comprehensive feature set (memory, automations, plugins, federation).
- **Release Discipline**: Only project shipping **dated production releases today** (v2026.9.1) with cross-platform parity.
- **Operator Tooling**: Unique focus on deployment operators—memory storage visibility (#137876), upgrade guidance, CI reliability.

### Technical Approach Differences
| Dimension | OpenClaw | Peers (Hermes, IronClaw, ZeroClaw) |
|-----------|----------|-----------------------------------|
| **Architecture** | Monorepo, gateway-centric, plugin-first | Crate/module extraction (ZeroClaw), loop-host separation (IronClaw), agent-runner isolation (NanoClaw) |
| **Session Model** | Centralized gateway + distributed clients | ACP-native (ZeroClaw, IronClaw), per-channel sessions (CoPaw), browser-restored (LobsterAI) |
| **Security** | Policy hooks, `before_tool_call` (fail-open bugs noted) | Tiered permission policies (ZeroClaw RFC #7155), sandboxed executor spikes (IronClaw), approval gates (CoPaw) |
| **Extensibility** | Plugin marketplace, Slack Canvas, federation protocol (FRD) | Provider contracts (NanoClaw), skill marketplace (CoPaw Hub), MCP launcher (ZeroClaw) |

### Community Size
- **OpenClaw**: ~100+ active contributors/day (inferred from PR volume), 96 active issues, 417 open PRs
- **Next tier** (Hermes, ZeroClaw, IronClaw, CoPaw): 10–25 active contributors/day
- **Niche projects**: <5 contributors, often single-maintainer

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Session Durability & Recovery** | OpenClaw, Hermes Agent, ZeroClaw, IronClaw, LobsterAI, CoPaw | Crash-safe turn persistence (ZeroClaw #10197), compression fail-soft (Hermes #100602), reentrancy guards (LobsterAI #1089), session restore per profile (Hermes #77952) |
| **Multi-Channel Message Fidelity** | OpenClaw, NanoBot, PicoClaw, CoPaw, LobsterAI, IronClaw | Mermaid rendering parity (OpenClaw), stream state on reconnect (NanoBot #5514), Slack FileSize (PicoClaw #3340), Feishu stall (CoPaw #7534), IM bot card layout (LobsterAI #2599) |
| **Security Boundaries** | ZeroClaw, IronClaw, CoPaw, OpenClaw, Hermes Agent | Shell permission policy (ZeroClaw RFC #7155), sandboxed executor decision (IronClaw #7903), CRITICAL rule auto-deny (CoPaw #7496), `before_tool_call` enforcement (OpenClaw #120571), custom provider auth (Hermes #100858) |
| **Provider Abstraction & Routing** | NanoClaw, Hermes Agent, IronClaw, CoPaw, ZeroClaw | Unified provider contracts (NanoClaw #3581–#3592), context-length respect (Hermes #15779, IronClaw #8053), cache-key management (IronClaw #8062), custom provider migration (CoPaw #7474) |
| **Desktop/Web Parity & Performance** | OpenClaw, IronClaw, CoPaw, NanoBot, PicoClaw, LobsterAI | WebUI type safety (IronClaw #8037–#8040), input lag (PicoClaw #3281), mobile PWA (NanoBot #5641), background updates (CoPaw #7543), Windows installer (LobsterAI #2605–#2606) |
| **Memory & Context Management** | OpenClaw, Hermes Agent, CoPaw, ZeroClaw, NanoClaw | Reindex safety (OpenClaw #135347), compression authority (Hermes #100315), ReMe indexing (CoPaw #7469), recall timestamps (ZeroClaw #10567), persona preservation (CoPaw #7527) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Technical Architecture | Key Differentiator |
|---------|---------------|--------------|------------------------|-------------------|
| **OpenClaw** | **Universal gateway** — deploy once, connect everywhere | Operators, teams, multi-channel power users | Monorepo TypeScript/Go gateway + native clients | Broadest channel matrix; operator-first tooling |
| **Hermes Agent** | **Bot Mode productization** — persistent, multi-user agents | Teams building agent "bots" for Slack/Discord/Matrix | Rust core + React desktop; session/compression heavy | 80+ bug sweep for Bot Mode; aux vision + custom providers |
| **ZeroClaw** | **Security-first crate ecosystem** — isolated, auditable boundaries | Security-conscious devs, plugin authors | Rust workspace: `zeroclaw-runtime`, `zeroclaw-cron`, `zeroclaw-bootstrap` | RFC-driven permission policy; ACP-native; cron as crate |
| **IronClaw** | **Type-safe WebUI + loop performance** | Web-first users, LLM cost optimizers | Rust loop-host + TypeScript WebUI (ratcheted strictness) | 198+ `@ts-nocheck` removed; prompt budget from model ads |
| **CoPaw (QwenPaw)** | **Multi-tenant Hub** — team workspaces, skill marketplace | SMBs, dev teams, Chinese-language community | Go backend + React console + mobile PWA; ACP + custom channels | Hub roadmap shaped by 17-comment discussion; SOUL.md personas |
| **NanoClaw** | **Container-sovereign agents** — provider contracts, lazy loading | Self-hosters, privacy-focused deployments | Go + container runtime; provider SDKs as plugins | Provider contract unification (12 PRs); WhatsApp lazy media |
| **NanoBot** | **Lightweight SDK + WebUI** — embeddable, channel-agnostic | Developers embedding agents in apps | Go core + Svelte WebUI; Matrix/Signal/Telegram channels | Locale registry, streaming recovery, iOS PWA polish |
| **LobsterAI** | **Desktop-first consumer UX** — browser, voice, artifacts | End-users, non-technical, Chinese market | Electron + OpenClaw fork; in-app browser, MCP Apps | Guided onboarding; video sharing; Windows installer hardening |
| **PicoClaw** | **Embedded/ARM deployment** — low-resource, multi-channel | IoT hobbyists, Orange Pi/RK3566 users | Go + WebUI; QQ/Slack/LINE channels | ARM/RKLLM optimization; botgo/resty dependency mgmt |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating / Pre-1.0 Hardening
- **ZeroClaw**, **IronClaw**, **Hermes Agent**, **NanoClaw**, **CoPaw**  
  *Signals*: XL refactor PRs, architectural spikes (sandboxed executor, cron crate extraction), security RFCs, high PR velocity with low release frequency. All building toward **first stable release**.

### Tier 2: Production Stabilization
- **OpenClaw**, **NanoBot**, **LobsterAI**  
  *Signals*: Regular dated releases, patch backlogs, operator-focused fixes, compliance pressure (LobsterAI OpenClaw bump), mobile/desktop parity work.

### Tier 3: Niche / Maintenance Mode
- **PicoClaw** — ARM/embedded focus, review bottleneck (stale PRs #3340, #3347)
- **NullClaw**, **Moltis**, **ZeptoClaw** — No 24h activity; likely archived or private

### Maturity Indicators
| Signal | Leaders | Laggards |
|--------|---------|----------|
| **CI/CD & Type Safety** | IronClaw (ratcheted TS), ZeroClaw (Rust workspace), NanoBot (test labels) | PicoClaw (TS review queue), OpenClaw (Windows P0 regression shipped) |
| **Security Posture** | ZeroClaw (RFC #7155), CoPaw (governance fix), IronClaw (secret storage PR) | OpenClaw (fail-open tool block), Hermes (custom provider auth regression) |
| **Observability** | ZeroClaw (ACP checkpoint), CoPaw (Langfuse gap noted), LobsterAI (scheduled-task alerts PR) | Most lack structured tracing; Hermes compression bugs opaque |

---

## 7. Trend Signals for AI Agent Developers

1. **ACP (Agent Client Protocol) is the emerging interconnect**  
   ZeroClaw, IronClaw, NanoClaw, CoPaw all invest in ACP compliance — transcript pagination, session recovery, egress grants. **Build ACP-native** or plan adapter layer.

2. **Crate/Module Extraction > Monorepo for Security Boundaries**  
   ZeroClaw (`zeroclaw-cron`), NanoClaw (provider SDKs), IronClaw (loop-host) isolate high-risk surfaces. **Expect plugin ecosystems to demand capability-based sandboxing**.

3. **Prompt Budget & Cache Management = Cost Control**  
   IronClaw derives budget from model-advertised window (#8053), sends OpenAI cache keys (#8062), denylists new Claude families (#8044). **Token accounting is moving from heuristic to contract-driven**.

4. **Session Model Convergence: User-Centric > Channel-Centric**  
   CoPaw #7541 explicitly calls channel-split sessions "architectural error." OpenClaw federation FRD (#87733), ZeroClaw ACP, Hermes Bot Mode all point to **unified identity + portable session**.

5. **Desktop Apps Are Reverting to "Browser + Native Shell"**  
   LobsterAI restores in-app Agent Browser (#2602), OpenClaw ships Mermaid everywhere, NanoBot/CoPaw invest

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-04

---

## 1. Today's Overview

NanoBot shows **high maintenance velocity** with 25 PRs updated in the last 24 hours (14 merged/closed, 11 open) and 4 active issues. The project is in a **stabilization phase** focused on WebUI reliability, channel integration fixes, and iOS PWA polish. No new release was cut today, but the volume of merged fixes (14 PRs) suggests a patch release (0.3.1) is imminent. Core areas receiving attention: locale registry concurrency, session title generation, streaming state recovery after gateway restarts, and Matrix/Signal channel robustness.

---

## 2. Releases

**No new releases today.** The latest published version remains **0.3.0**. Given 14 merged PRs in 24h — including multiple `priority: p2` bug fixes — a **0.3.1 patch release** is likely within days. Watch for changelog entries covering:
- WebUI locale regression (#5644/#5651)
- Session title projection (#5647/#5648)
- Gateway reconnect streaming stall (#5512/#5514)
- Current Time runtime context regression (#5645)

---

## 3. Project Progress — Merged/Closed PRs Today (14)

| PR | Area | Summary | Link |
|----|------|---------|------|
| #5650 | WebUI | Preserve Hero model preset during chat creation; optimistic session metadata handoff | [#5650](https://github.com/HKUDS/nanobot/pull/5650) |
| #5646 | WebUI | Language picker shows native names only; removed English display names | [#5646](https://github.com/HKUDS/nanobot/pull/5646) |
| #5514 | WebUI | **Fixes #5512** — Clear stale stream state on gateway reconnect; subscribe to `onRunStatus` | [#5514](https://github.com/HKUDS/nanobot/pull/5514) |
| #5637 | Matrix | Propagate stream delivery failures; restore failed deltas before retry | [#5637](https://github.com/HKUDS/nanobot/pull/5637) |
| #5385 | Matrix | Complete Element SAS request flow (verification.request → ready → done) | [#5385](https://github.com/HKUDS/nanobot/pull/5385) |
| #5413 | Providers | Apply fallback policy to provider exceptions (not just error responses) | [#5413](https://github.com/HKUDS/nanobot/pull/5413) |
| #5472 | Signal | Honor `*` wildcard in DM/group allowlists | [#5472](https://github.com/HKUDS/nanobot/pull/5472) |
| #5515 | Agent | Observe session-reply timeout task failures (background task error visibility) | [#5515](https://github.com/HKUDS/nanobot/pull/5515) |
| #5629 | SDK | Respect `max_length` for plain tool values (grep, web_search, find_files) | [#5629](https://github.com/HKUDS/nanobot/pull/5629) |
| #5635 | SDK | Preserve queued events on stream close (wait for queue space before sentinel) | [#5635](https://github.com/HKUDS/nanobot/pull/5635) |
| #5632 | Provider | Preserve Codex prompt cache affinity (stable SHA-256 session routing key) | [#5632](https://github.com/HKUDS/nanobot/pull/5632) |
| #5334 | Channels | Preserve indentation across message splits; avoid whitespace-only chunks | [#5334](https://github.com/HKUDS/nanobot/pull/5334) |
| #5641 | WebUI | iOS PWA fixes: single-tap sidebar rows, status-bar safe area, viewport meta | [#5641](https://github.com/HKUDS/nanobot/pull/5641) |
| #5648 | WebUI | Check session metadata when generating WebUI titles (fixes #5647) | [#5648](https://github.com/HKUDS/nanobot/pull/5648) |

**Key themes**: WebUI session lifecycle hardening, channel delivery reliability, provider fallback robustness, iOS PWA usability.

---

## 4. Community Hot Topics

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#5644](https://github.com/HKUDS/nanobot/issues/5644) | Issue | 1 | **Locale registry race condition** — concurrent `loadChannelLocale()` calls drop locales (e.g. `en`). Fix PR #5651 open. |
| [#5512](https://github.com/HKUDS/nanobot/issues/5512) | Issue | 1 | **WebUI spinning stall after gateway restart** — fixed by #5514 (merged). |
| [#5647](https://github.com/HKUDS/nanobot/issues/5647) | Issue | 0 | **Session title not generated** when frontend envelope lacks `webui` flag. Fix PR #5648 open. |
| [#5645](https://github.com/HKUDS/nanobot/issues/5645) | Issue | 0 | **Current Time runtime context missing in 0.3.0** — regression from 0.2.2 auto-injection. No fix PR yet. |

**Analysis**: The locale race (#5644) and session title projection (#5647) are **WebUI-specific regressions introduced in 0.3.0** around unified session handling. The Current Time regression (#5645) affects SDK users directly and has no fix PR — highest risk for silent breakage.

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#5645](https://github.com/HKUDS/nanobot/issues/5645) — Current Time runtime context absent by default in 0.3.0 | Open | ❌ None |
| **High** | [#5644](https://github.com/HKUDS/nanobot/issues/5644) — Channel locale registry drops locale on concurrent startup load | Open | ✅ [#5651](https://github.com/HKUDS/nanobot/pull/5651) |
| **Medium** | [#5647](https://github.com/HKUDS/nanobot/issues/5647) — Session title not generated without `webui` flag in envelope | Open | ✅ [#5648](https://github.com/HKUDS/nanobot/pull/5648) |
| **Medium** | [#5512](https://github.com/HKUDS/nanobot/issues/5512) — WebUI stalls spinning after Gateway restart | **Closed** | ✅ [#5514](https://github.com/HKUDS/nanobot/pull/5514) (merged) |

**Note**: #5645 is the only high-severity bug without a fix PR. It impacts all SDK consumers expecting automatic time injection.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Configurable cron delivery & batch archive** | [#5620](https://github.com/HKUDS/nanobot/pull/5620) (open, 3 days) | High — feature + tests, `priority: p2` |
| **Per-request context reuse visualization** | [#5649](https://github.com/HKUDS/nanobot/pull/5649) (open) | Medium — WebUI UX enhancement, token usage popover + stacked bars |
| **Model retry status surfacing (NAN-34)** | [#5504](https://github.com/HKUDS/nanobot/pull/5504) (open, 11 days) | Medium — TUI/WebUI retry countdown, `priority: p2` |
| **Stabilize session labels, TUI streaming, pairing prompts** | [#5639](https://github.com/HKUDS/nanobot/pull/5639) (open) | High — OpenTUI 0.5.10 upgrade, streaming UX polish |

**Prediction**: 0.3.1 will be a **stability patch**; 0.4.0 will likely include cron management (#5620), context reuse UI (#5649), and retry observability (#5504).

---

## 7. User Feedback Summary

| Pain Point | Evidence | Affected Surface |
|------------|----------|------------------|
| **Silent regression: time context missing** | #5645 — "0.2.2 auto-adds Current Time; 0.3.0 produces only user text" | SDK / ContextBuilder |
| **WebUI unusable after gateway restart** | #5512 — "spinning state forever, never receives `goal_status: idle`" | WebUI |
| **Locale loss on multi-locale startup** | #5644 — "`en` dropped when two locales load concurrently" | WebUI (i18n) |
| **Session titles not appearing** | #5647 — "title not generated when envelope lacks webui flag" | WebUI (unifiedSession mode) |
| **iOS PWA: double-tap required for sidebar** | #5641 — "first tap swallowed by iOS `:hover` chain" | WebUI (PWA) |
| **Language picker requires English knowledge** | #5646 — "should show native names only" | WebUI (i18n) |

**Satisfaction signal**: Users are **filing precise regression reports with reproduction steps** — indicates engaged technical user base. No feature complaints, only 0.3.0 regressions.

---

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5446](https://github.com/HKUDS/nanobot/pull/5446) — `fix(codex): persist OAuth tokens in Nanobot data directory` | 16 days | **Conflict label**, security-relevant (token storage outside managed dir). Blocked? |
| [#5620](https://github.com/HKUDS/nanobot/pull/5620) — `feat(cron): configurable delivery & batch archive` | 3 days | Feature PR with tests, `priority: p2`, no review activity visible |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) — `fix(ui): surface model retry status (NAN-34)` | 11 days | User-facing retry UX, `priority: p2`, stale |
| [#5645](https://github.com/HKUDS/nanobot/issues/5645) — Current Time runtime context regression | 1 day | **High severity, no fix PR** — silent SDK breakage |

**Action items for maintainers**:
1. **Triage #5645 immediately** — assign or create fix PR (runtime context regression)
2. **Review #5446** — resolve conflict, merge security fix
3. **Unblock #5620 / #5504** — both are `priority: p2` with tests, waiting >3 days

---

## Health Indicators

| Metric | Signal |
|--------|--------|
| **Merge rate** | 14 PRs/24h → **Excellent** |
| **Fix-to-bug ratio** | 3/4 open bugs have fix PRs → **Good** (1 critical gap: #5645) |
| **Release cadence** | No release since 0.3.0, but patch backlog building → **Due** |
| **Test coverage** | All merged PRs include `test` label → **Strong discipline** |
| **Platform breadth** | Fixes span WebUI, TUI, Matrix, Signal, SDK, Providers → **Healthy multi-surface maintenance** |

**Overall**: **Healthy, active stabilization sprint**. Next 48h should yield 0.3.1 if #5645 gets a fix.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-04

---

## 1. Today's Overview

Hermes Agent shows **very high development velocity** with 69 total items updated in the last 24 hours (19 issues, 50 PRs). The project is in an active stabilization and polish phase: a massive **whole-codebase refactor (−35.6% LOC, 37 god-files decomposed)** is under review (#102117), while dozens of targeted bug fixes address session-state integrity, provider routing, compression reliability, and desktop UX. No new releases were cut today, but the volume of merged/closed PRs (3) and the sweep of P2/P3 bugs suggests a **pre-release hardening cycle**. Community engagement is moderate—most items have 0–6 comments—with a few long-standing issues resurfacing from the August sweep.

---

## 2. Releases

**No new releases published today.** The latest release remains prior to 2026-09-04. Given the current PR throughput, a patch or minor release is likely imminent once the refactor (#102117) and critical P2 fixes land.

---

## 3. Project Progress (Merged/Closed Today)

| PR | Type | Summary |
|----|------|---------|
| [#77157](https://github.com/NousResearch/hermes-agent/pull/77157) | **Bug fix (Windows)** | Fixed native-Windows `search_files` path handling; zero-match probes now fall back to `grep`; preserves MSYS-safe paths for remote backends. |
| [#15779](https://github.com/NousResearch/hermes-agent/issues/15779) | **Bug fix (gateway/config)** | `/model` switch to named custom provider now respects `custom_providers[].models.<model>.context_length` (was falling back to 128k default). |
| *(1 other closed PR not detailed in feed)* | | |

**Net effect**: Windows search reliability restored; gateway model-switch context-length bug fixed—both reduce user-facing friction.

---

## 4. Community Hot Topics (Most Comments/Reactions)

| Item | Type | Comments | 👍 | Core Theme |
|------|------|----------|----|------------|
| [#94726](https://github.com/NousResearch/hermes-agent/issues/94726) | Issue | 6 | 1 | **Desktop Bot Mode umbrella tracker** — consolidates ~80 open bugs across agent + Hermes-Bot-Mode; signals a coordinated push to stabilize Bot Mode. |
| [#100858](https://github.com/NousResearch/hermes-agent/issues/100858) | Issue | 6 | 0 | **Aux vision + custom provider + base_url sends `no-key-required`** — auth regression for custom vision providers (401). |
| [#77952](https://github.com/NousResearch/hermes-agent/issues/77952) | Issue | 4 | 0 | **Restore last session per profile** — desktop UX gap when switching profiles. |
| [#76602](https://github.com/NousResearch/hermes-agent/issues/76602) | Issue | 4 | 0 | **Aux vision custom provider loses api_key** — same root cause as #100858 (downgraded to `custom` → `no-key-required`). |
| [#77409](https://github.com/NousResearch/hermes-agent/issues/77409) | Issue | 3 | 0 | **Desktop UI tests broken under React 19.1+ production build** — `React.act` stubbed to `undefined`. |
| [#102642](https://github.com/NousResearch/hermes-agent/issues/102642) | Issue | 3 | 0 | **Windows group-chat WinError 10060** — intermittent socket timeout in Agent Bridge. |

**Analysis**: The top discussion is the **Bot Mode stabilization sweep** (#94726), indicating a product-level push to make Bot Mode production-ready. The custom-provider auth bugs (#100858, #76602) are a **regression cluster** affecting vision workflows. Windows-specific issues (#77157 merged, #102642 new) show platform parity work continues.

---

## 5. Bugs & Stability (Reported/Updated Today, Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P2** | [#100858](https://github.com/NousResearch/hermes-agent/issues/100858) | Aux vision with `custom:<name>` + `base_url` sends `no-key-required` → 401 | No PR yet |
| **P2** | [#76602](https://github.com/NousResearch/hermes-agent/issues/76602) | Aux vision custom provider + base_url loses api_key (downgraded to `no-key-required`) | No PR yet |
| **P2** | [#101091](https://github.com/NousResearch/hermes-agent/issues/101091) | Desktop accepts mismatched provider/model pair; injects model into wrong provider group | No PR yet |
| **P2** | [#100870](https://github.com/NousResearch/hermes-agent/issues/100870) | Remote code kernel fails on Docker — brace group rewriter omits separator after `}` | No PR yet |
| **P2** | [#100381](https://github.com/NousResearch/hermes-agent/issues/100381) | `codex_app_server_auto=hermes` triggers compaction on local mirror estimate → thrashes long sessions | No PR yet |
| **P2** | [#100855](https://github.com/NousResearch/hermes-agent/issues/100855) | Browser daemons from `browser_exec`/`real-profile` lanes invisible to orphan reaper → wedged daemons survive 47h | PR [#100865](https://github.com/NousResearch/hermes-agent/pull/100865) open |
| **P2** | [#100315](https://github.com/NousResearch/hermes-agent/issues/100315) | Codex reasoning-only events retain compression summary-progress authority indefinitely | No PR yet |
| **P2** | [#100602](https://github.com/NousResearch/hermes-agent/issues/100602) | Sessions wedge at “Summarizing session…” when auxiliary compression fails — no fail-soft | No PR yet |
| **P2** | [#102644](https://github.com/NousResearch/hermes-agent/issues/102644) | Compressor lazy path ignores `providers.<name>.models.<id>.context_length` | PR [#102645](https://github.com/NousResearch/hermes-agent/pull/102645) open |
| **P2** | [#102658](https://github.com/NousResearch/hermes-agent/issues/102658) | Live sessions ignore config `default-model` changes; persisted `model_override` has no clear path | No PR yet |
| **P3** | [#77409](https://github.com/NousResearch/hermes-agent/issues/77409) | Desktop UI tests fail: `React.act` undefined under `NODE_ENV=production` | No PR yet |
| **P3** | [#102642](https://github.com/NousResearch/hermes-agent/issues/102642) | Windows group chat intermittent WinError 10060 | No PR yet |
| **P3** | [#102652](https://github.com/NousResearch/hermes-agent/issues/102652) | `desktop_preview` fails on long compressed diagrams.net URLs (zlib decompression error) | No PR yet |

**Pattern**: Session-state & compression bugs dominate (5/13 P2s). Provider routing/auth regressions are the second cluster. Several have **open fix PRs** (#100865, #102645) but most are still triage-stage.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|-----------------------------|
| [#102653](https://github.com/NousResearch/hermes-agent/issues/102653) | **Bot Mode product polish**: one permanent conversation per bot; hide sessions/gateway/compression machinery | High — aligns with #94726 sweep |
| [#91329](https://github.com/NousResearch/hermes-agent/issues/91329) | **Bot Mode: manage members from Group settings** | Medium — UX gap in Bot Mode |
| [#77952](https://github.com/NousResearch/hermes-agent/issues/77952) | **Desktop: restore last selected session per profile** | Medium — straightforward UX fix |
| [#102643](https://github.com/NousResearch/hermes-agent/issues/102643) | **Slash-command description i18n** (Chinese request) | Medium — follows recent Spanish locale PR [#82172](https://github.com/NousResearch/hermes-agent/pull/82172) |
| [#102650](https://github.com/NousResearch/hermes-agent/pull/102650) | **Owner-only `sessions reset-store` recovery command** (PR open) | High — operational tooling |
| [#102648](https://github.com/NousResearch/hermes-agent/pull/102648) | **Tirith auto-update for Hermes-managed installs** (PR open) | High — maintenance burden reduction |
| [#99490](https://github.com/NousResearch/hermes-agent/pull/99490) | **Desktop secret storage secure by default** (OS keychain, encrypted at rest) | High — security hardening |

**Roadmap read**: Bot Mode maturation + desktop polish + operational tooling + security defaults are the near-term themes.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Custom provider auth broken for vision** | #100858, #76602 (both P2, 10 combined comments) | Users cannot use custom vision endpoints; 401 errors block workflows |
| **Session/model state persistence surprises** | #102658, #101091, #15779 (closed) | Config changes don’t propagate; mismatched provider/model pairs accepted silently |
| **Compression/compaction unreliability** | #100381, #100315, #100602 | Long-lived sessions wedge or thrash; no graceful degradation |
| **Windows-specific instability** | #102642 (new), #77157 (just fixed) | Group chat socket errors; search tool path issues |
| **Desktop UX gaps** | #77952 (profile session memory), #102652 (diagram preview), #77409 (test breakage) | Profile switching loses context; diagram tool broken; CI red |
| **Bot Mode fragmentation** | #94726 (umbrella, 80+ items), #91329, #102653 | Membership management split across dialogs; session machinery exposed to users |

**Satisfaction signals**: Users are filing detailed, reproducible bugs with config snippets — indicates **power-user adoption** but also **friction in advanced configs** (custom providers, Bot Mode, compression). The sweep issue (#94726) shows maintainers are listening.

---

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#77952](https://github.com/NousResearch/hermes-agent/issues/77952) | **32 days** (created 2026-08-03) | Profile-session memory is a basic desktop UX expectation; 4 comments, no PR |
| [#76602](https://github.com/NousResearch/hermes-agent/issues/76602) | **33 days** (2026-08-02) | Custom provider vision auth regression; duplicate of newer #100858 but older |
| [#77409](https://github.com/NousResearch/hermes-agent/issues/77409) | **32 days** | Desktop UI test suite 100% red — blocks CI confidence for desktop changes |
| [#99490](https://github.com/NousResearch/hermes-agent/pull/99490) | **4 days** (PR, 2026-08-31) | **Security**: desktop secret storage secure-by-default; no review activity visible |
| [#102117](https://github.com/NousResearch/hermes-agent/pull/102117) | **1 day** (PR, 2026-09-03) | **Massive refactor** (−35.6% LOC); needs thorough review before merge — risk of silent regressions |
| [#67055](https://github.com/NousResearch/hermes-agent/pull/67055) | **48 days** (2026-07-18) | Vision provider transport preservation fix; stale but addresses same area as #100858/#76602 |
| [#31003](https://github.com/NousResearch/hermes-agent/pull/31003) | **104 days** (2026-05-23) | Security: reject redacted-secret placeholders in file writes; long-open, moderate blast radius |

**Action items for maintainers**:
1. **Triage #102117** — allocate review bandwidth for the mega-refactor.
2. **Merge #99490** — security default, low risk, high value.
3. **Consolidate #76602 + #100858** — assign single owner for custom-provider vision auth.
4. **Unblock desktop CI** — #77409 is a test-infra blocker.
5. **Close/merge stale PRs** — #67055, #31003 have been open >1.5 months.

---

## Health Indicator Summary

| Metric | Status |
|--------|--------|
| **Velocity** | 🟢 Very High (69 updates/24h) |
| **Bug Backlog** | 🟡 Elevated (13 P2/P3 bugs updated today) |
| **Critical Path** | 🟡 Session/compression stability + Bot Mode polish |
| **Security Posture** | 🟢 Improving (secret storage PR, redacted-secret guard PR) |
| **Platform Parity** | 🟡 Windows issues active but being addressed |
| **Release Readiness** | 🟡 Pending refactor merge + P2 bug fixes |

**Bottom line**: Hermes Agent is in a **high-churn hardening phase**. The codebase simplification (#102117) is the single largest risk/opportunity; once merged, expect a wave of patch releases addressing the P2 session/compression/provider bugs. Bot Mode is receiving product-level attention — likely the next major feature milestone.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-04

## 1. Today's Overview
PicoClaw shows **moderate maintenance activity** with 14 total updates (6 issues, 8 PRs) in the last 24 hours. The project is actively addressing **multi-channel integration bugs** (Slack, QQ, LINE) and a **high-impact Web UI performance regression** causing input lag with longer chat histories. No new releases were published. Dependency updates via Dependabot indicate routine upkeep. Community engagement is visible but limited—most issues have few comments/reactions, suggesting a smaller active contributor base.

## 2. Releases
**No new releases** in the last 24 hours. Current latest version remains `0.3.1` (per issue reports). Nightly builds are in use by some users (e.g., #3365).

## 3. Project Progress
### Merged / Closed PRs
| PR | Title | Impact |
|----|-------|--------|
| [#3329](https://github.com/sipeed/picoclaw/pull/3329) | `fix(line): warn on inert webhook_host / webhook_port instead of seeding them` | Removes misleading defaults for LINE webhook config; prevents silent misconfiguration. **Closed** (merged). |

### Open PRs with Notable Fixes
| PR | Title | Status | Linked Issue |
|----|-------|--------|--------------|
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | `fix(slack): set FileSize on media upload params` | Open (stale) | [#3338](https://github.com/sipeed/picoclaw/issues/3338) |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | `fix laggy interface` (Web UI chat input lag) | Open | [#3281](https://github.com/sipeed/picoclaw/issues/3281) |

> **Note**: PR #3347 is authored by a non-TypeScript/Node developer but reports successful local testing on desktop & mobile (Brave). Awaiting review.

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Summary |
|------|------|----------|----|---------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Issue | 9 | 2 | **Web UI chat input becomes very laggy with moderate history length** — affects usability on both desktop & mobile. Highest engagement. |
| [#3365](https://github.com/sipeed/picoclaw/issues/3365) | Issue | 0 | 0 | **QQ channel 401 "Authorization参数格式错误"** — root cause traced to `botgo v0.2.1` + `resty >= v2.17`. New, detailed env report. |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Issue | 3 | 0 | **Slack media upload fails: `file size cannot be 0`** — SDK rejects before network call. Fix PR (#3340) exists but stale. |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Issue | 3 | 0 | **Google Antigravity returns 429 (quota exhausted) despite valid OAuth** — closed as stale, but may indicate provider-side quota or token scope issue. |

**Underlying needs**:  
- **Web UI performance** is a visible pain point for daily users.  
- **Channel reliability** (QQ, Slack, LINE) is critical for production deployments—breakages block core functionality.  
- Users are debugging **dependency conflicts** (botgo/resty) themselves, suggesting need for pinned/compatible versions in `go.mod`.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI input lag with chat history — blocks interactive use. | Yes: [#3347](https://github.com/sipeed/picoclaw/pull/3347) (awaiting review) |
| **High** | [#3365](https://github.com/sipeed/picoclaw/issues/3365) | QQ channel 401 auth failure on ARM (Orange Pi 3B) — `botgo v0.2.1` + `resty v2.17.1` incompatibility. | No PR yet |
| **Medium** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack `SendMedia` omits `FileSize` → upload rejected by SDK pre-flight. | Yes: [#3340](https://github.com/sipeed/picoclaw/pull/3340) (stale) |
| **Medium** | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | RKLLM abnormal replies on ARM (Qwen3.5-0.8B) — possible model/runtime mismatch. | No |
| **Low** | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Google Antigravity 429 despite valid auth — closed stale, may be transient quota. | N/A (closed) |

## 6. Feature Requests & Roadmap Signals
No explicit feature requests in today’s updates. However, signals suggest:
- **Web UI virtualization / windowing** for chat history (implied by #3347 fix approach).
- **Dependency compatibility matrix** for channel SDKs (botgo, resty, slack-go) — users hit version conflicts.
- **ARM/RKLLM optimization** — niche but growing (Orange Pi, RK3566). May warrant CI/testing on ARM.

**Prediction**: Next patch (`0.3.2`) will likely include #3347 (lag fix), #3340 (Slack upload), and a `go.mod` pin for `botgo`/`resty` to unblock QQ.

## 7. User Feedback Summary
| Pain Point | Evidence |
|------------|----------|
| **Web UI unusable with history** | #3281: "very laggy" on desktop & mobile; 2👍, 9 comments. |
| **QQ channel broken on ARM** | #3365: detailed logs, version pinning, trace ID — user invested in debugging. |
| **Slack media upload silently fails** | #3338: SDK rejects pre-flight; no network call made. |
| **Config confusion (LINE)** | #3329: unused `webhook_host`/`port` misled users; fixed via warning. |
| **Model runtime issues (RKLLM)** | #3346: abnormal output on embedded ARM — screenshot attached. |

**Satisfaction signal**: Users file detailed, reproducible reports — indicates investment in PicoClaw. But stale PRs (#3340, #3347) suggest **review bottleneck**.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | 18 days | Trivial fix (add `FileSize`), unblocks Slack media. Stale — needs merge. |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | 8 days | High-impact UX fix for Web UI. Author tested locally; needs TS/Node review. |
| [#3365](https://github.com/sipeed/picoclaw/issues/3365) | 0 days | New, well-documented QQ auth regression. Requires `go.mod` adjustment or botgo workaround. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 45 days | Oldest open bug with most engagement. Fix exists in #3347 but unmerged. |
| [#3346](https://github.com/sipeed/picoclaw/issues/3346) | 8 days | RKLLM on ARM — niche but may grow. No maintainer response yet. |

> **Maintainer action suggested**: Prioritize review/merge of #3347 and #3340. Pin `botgo`/`resty` versions in `go.mod` to prevent QQ breakage. Consider ARM CI for RKLLM.

---

**Links Reference**  
- Issues: [#3281](https://github.com/sipeed/picoclaw/issues/3281) | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | [#3365](https://github.com/sipeed/picoclaw/issues/3365)  
- PRs: [#3329](https://github.com/sipeed/picoclaw/pull/3329) | [#3340](https://github.com/sipeed/picoclaw/pull/3340) | [#3347](https://github.com/sipeed/picoclaw/pull/3347) | [#3360](https://github.com/sipeed/picoclaw/pull/3360) | [#3361](https://github.com/sipeed/picoclaw/pull/3361) | [#3362](https://github.com/sipeed/picoclaw/pull/3362) | [#3363](https://github.com/sipeed/picoclaw/pull/3363) | [#3364](https://github.com/sipeed/picoclaw/pull/3364)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-04

## 1. Today's Overview

NanoClaw shows **high development velocity** with 23 PRs and 5 issues updated in the last 24 hours. The project is in active refactoring and stabilization phase: three PRs were merged/closed (dependency bumps, core agent-runner fixes), while 20 PRs remain open — many forming a coordinated **provider contract refactor series** (#3581–#3592) that restructures how agent providers (Claude, Codex, OpenCode, Cursor, Host) are declared, validated, and rendered. Concurrently, the team is addressing container mount bugs, SQLite concurrency issues in tests, and WhatsApp channel improvements. No new release was cut today.

---

## 2. Releases

**No new releases published today.** The latest release information is not included in the provided data.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#3461](https://github.com/nanocoai/nanoclaw/pull/3461) | `chore(deps): bump all @chat-adapter/* + chat 4.29.0 → 4.38.1` | channels, dependencies | Brings 9 channel adapters + core `chat` package 9 minor versions forward; ensures `/add-<channel>` skills copy updated `package.json`. |
| [#3126](https://github.com/nanocoai/nanoclaw/pull/3126) | `fix(agent-runner): never deliver silence, never deliver <internal> thinking` | agent-runner, core | Eliminates double-delivery of empty/`<internal>` blocks; improves message fidelity for all providers. |
| [#3426](https://github.com/nanocoai/nanoclaw/issues/3426) | `send_card` docs promise callback buttons that the bridge drops since #2265 | tools, channels | **Closed** (likely superseded by PR fixes). Documented mismatch between `send_card` advertised capabilities and bridge behavior. |

---

## 4. Community Hot Topics — Most Active Items

| Item | Type | Comments | Summary | Underlying Need |
|------|------|----------|---------|-----------------|
| [#3440](https://github.com/nanocoai/nanoclaw/pull/3440) | PR | *undefined* (high activity implied by age + labels) | **docker-driver**: fix SELinux-blocked mounts, group-writable rw mounts, stray NUL byte | **Production container reliability** — SELinux, permissions, and data corruption blockers for hosted agents. |
| [#2003](https://github.com/nanocoai/nanoclaw/pull/2003) | PR | *undefined* (open since Apr 2026) | **Voice transcription V2** — container-side, sovereign by default | **Sovereign audio pipeline** — move transcription into agent container per architectural mandate; long-running feature. |
| [#3356](https://github.com/nanocoai/nanoclaw/pull/3356) / [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) | PR pair | *undefined* | **Cursor Agent SDK provider** + `/add-cursor` install skill | **Provider parity** — first-class support for Cursor alongside Codex/Claude/OpenCode. |
| [#3711](https://github.com/nanocoai/nanoclaw/pull/3711) + [#3712](https://github.com/nanocoai/nanoclaw/pull/3712) | PR pair | *undefined* | **Lazy inbound content resolution** (router + WhatsApp) | **Channel efficiency** — avoid downloading media for messages no agent will see; critical for WhatsApp scale. |

> **Note:** Comment counts are not populated in the API response; activity inferred from PR age, label breadth, and cross-references.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3706](https://github.com/nanocoai/nanoclaw/issues/3706) | `ncl groups config add-mount --container <absolute-path>` silently creates **double-nested broken path** (e.g., `/workspace/shared-repos` → `/workspace/shared-repos/workspace/shared-repos`). No validation or normalization. | ❌ No PR yet |
| **High** | [#3709](https://github.com/nanocoai/nanoclaw/issues/3709) | SQLite mailbox tests use **fixed `/tmp` fixture root** → concurrent `vitest` runs (multi-worktree CI) **delete each other's databases**. | ❌ No PR yet |
| **Medium** | [#3705](https://github.com/nanocoai/nanoclaw/issues/3705) | `ncl tasks update --recurrence` **does not recompute `process_after`** — task stays on old schedule until manual intervention. | ❌ No PR yet |
| **Medium** | [#3710](https://github.com/nanocoai/nanoclaw/pull/3710) | Test suite leaves **~355 temp directories/run** in OS `/tmp` — accumulates on tmpfs, risks disk pressure. | ✅ **PR #3710** (open) adds cleanup |
| **Low** | [#3708](https://github.com/nanocoai/nanoclaw/pull/3708) | `busy_timeout` PRAGMA set **after** `journal_mode` (exclusive lock) → connection can stall under contention. | ✅ **PR #3708** (open) swaps order |

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Provider contract unification** — runtime, setup, host, instruction rendering | PRs [#3581](https://github.com/nanocoai/nanoclaw/pull/3581)–[#3592](https://github.com/nanocoai/nanoclaw/pull/3592) (12 PRs by @zvi-fried) | **Very High** — coordinated, core-team labeled, near-complete set |
| **Per-agent-group delivery mode** (envelope vs. outbound tools) | PR [#3713](https://github.com/nanoclaw/pull/3713) | **High** — column + plumbing only; enables non-envelope models |
| **Cursor Agent SDK as first-class provider** | PR [#3356](https://github.com/nanoclaw/pull/3356) + skill [#3355](https://github.com/nanoclaw/pull/3355) | **High** — payload + install skill; follows established provider pattern |
| **Protected session-assembly hook** for `SqliteAgentMailbox` subclasses | Issue [#3704](https://github.com/nanoclaw/issues/3704) | **Medium** — fork maintainer request; low-risk extension point |
| **`speed` inference property** per agent group (core-owned) | PR [#3592](https://github.com/nanoclaw/pull/3592) | **Medium** — CLI + provider vocabulary; approval-gated |
| **Voice transcription V2 (container-side)** | PR [#2003](https://github.com/nanoclaw/pull/2003) | **Low→Medium** — re-submission with architectural alignment; may wait for container stabilization |

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Mount path silent corruption** | [#3706](https://github.com/nanoclaw/issues/3706) — absolute `--container` paths produce broken double-nested mounts | Devs waste cycles debugging volume mounts; blocks reproducible container setups |
| **Test flakiness in parallel CI** | [#3709](https://github.com/nanoclaw/issues/3709) — fixed `/tmp` path collides across worktrees | CI failures, wasted compute, inability to run parallel test suites |
| **Task recurrence updates are "fire-and-forget"** | [#3705](https://github.com/nanoclaw/issues/3705) — `process_after` not recomputed | Scheduled tasks run on stale cadence; manual `ncl tasks trigger` workarounds needed |
| **WhatsApp media download waste** | [#3712](https://github.com/nanoclaw/pull/3712) — downloads all media before routing | Bandwidth/cost overhead; latency for high-volume channels |
| **Provider instruction drift** | PR [#3591](https://github.com/nanoclaw/pull/3591) — providers restate core semantics differently | Inconsistent agent behavior; maintenance burden across providers |

**Positive signals:** Active contributor base (multiple core-team members), structured PR templates, clear architectural direction (provider contracts, container sovereignty), and rapid iteration on reported bugs.

---

## 8. Backlog Watch — Stale & Critical Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#2003](https://github.com/nanoclaw/pull/2003) Voice transcription V2 | **5 months** (opened 2026-04-25) | Open, re-submitted per maintainer feedback | Flagship sovereign feature; architectural precedent for container-side ML |
| [#3440](https://github.com/nanoclaw/pull/3440) docker-driver SELinux/perms/NUL fixes | **2 weeks** (opened 2026-08-22) | Open, broad area labels | Blocks production deployments on RHEL/Fedora/SELinux-enforced hosts |
| [#3126](https://github.com/nanoclaw/pull/3126) Never deliver silence/`<internal>` | **1.5 months** (opened 2026-07-24) | **Closed today** | Core message fidelity fix — verify no regressions in merged code |
| Provider contract refactor series ([#3581](https://github.com/nanoclaw/pull/3581)–[#3592](https://github.com/nanoclaw/pull/3592)) | **1 week** | All open, core-team labeled | **12 interdependent PRs** — risk of merge conflicts / partial adoption; needs coordinated review |

---

## Project Health Indicators

| Metric | Signal |
|--------|--------|
| **PR throughput** | 23 PRs updated/24h — strong |
| **Issue-to-PR ratio** | 5 issues : 23 PRs — proactive fixing |
| **Core-team engagement** | Multiple core-team labeled PRs; coordinated refactor |
| **Test hygiene** | Temp-dir leak acknowledged; cleanup PR opened same day |
| **Architectural coherence** | Provider contracts, container sovereignty, lazy loading — consistent direction |

**Bottom line:** NanoClaw is in a **healthy, high-velocity refactoring window** with clear architectural north stars (provider contracts, container sovereignty, test reliability). Near-term risk is **merge coordination** of the 12-PR provider series and **production blocker** resolution (SELinux mounts, SQLite concurrency).

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-04

## 1. Today's Overview

IronClaw shows **high development velocity** with 29 total updates (11 issues + 18 PRs) in the last 24 hours. The project is in an active refactoring and stabilization phase: 10 PRs were merged/closed today, primarily focused on TypeScript type safety across the WebUI codebase (removing 198+ `@ts-nocheck` directives), performance optimization in the loop-host streaming path, and subagent approval gate plumbing. No new releases were published. The issue queue reveals a split between deep architectural spikes (persistent sandboxed executor, prompt budget accounting) and concentrated UX polish on the slash-command menu and result cards.

---

## 2. Releases

**No new releases published today.**

---

## 3. Project Progress — Merged/Closed PRs (10)

| PR | Title | Scope | Impact |
|----|-------|-------|--------|
| [#8037](https://github.com/nearai/ironclaw/pull/8037) | `chore(webui): ratchet TypeScript suppressions` | WebUI, CI | Removed **40 redundant `@ts-nocheck`** directives; added CI ratchet to prevent new suppressions |
| [#8038](https://github.com/nearai/ironclaw/pull/8038) | `refactor(webui): type and validate frontend API boundaries` | WebUI, API | Typed all frontend API boundaries with runtime decoders for device-link, pairing, notifications, suggestions, projects, settings, workspace |
| [#8039](https://github.com/nearai/ironclaw/pull/8039) | `refactor(webui): type production components and hooks` | WebUI | Removed `@ts-nocheck` from **64 production components/hooks**; added explicit React Query, DOM, auth payload types |
| [#8040](https://github.com/nearai/ironclaw/pull/8040) | `test(webui): type frontend test infrastructure` | WebUI, Testing | Removed **94 test-side `@ts-nocheck`**; centralized VM boundary typing |
| [#8043](https://github.com/nearai/ironclaw/pull/8043) | `perf(loop-host): coalesce streamed text updates` | Core Loop, Performance | **O(N·k) → O(N)** fix: eliminated full-text re-sanitization per delta; 16 KiB / 1k deltas went from 1000× slowdown to linear |
| [#8046](https://github.com/nearai/ironclaw/pull/8046) | `feat(subagent): child approval/auth gate reaches owner's inbox (R3 3a)` | Subagents, UX | Unblocked visibility: child runs blocked on approval/credential gates now surface to parent's inbox |
| [#8055](https://github.com/nearai/ironclaw/pull/8055) | `fix(webui): follow authorizeTraceHold to trace-api.ts in asset test` | WebUI, CI | **Unblocks `main` branch** — fixed panic in `sidebar_trace_credits_card_assets_are_embedded` test |
| [#8058](https://github.com/nearai/ironclaw/pull/8058) | `test(webui): use live extension id in notification-setup boundary test` | WebUI, CI | Fixed architecture gate `retired_web_push_spelling_stays_at_zero_occurrences` failure |
| [#8033](https://github.com/nearai/ironclaw/issues/8033) | Remove Redundant `@ts-nocheck` Directives (Issue) | WebUI, CI | Closed — work completed via #8037 |
| [#8035](https://github.com/nearai/ironclaw/issues/8035) | Remove `@ts-nocheck` from WebUI Production Components (Issue) | WebUI | Closed — work completed via #8039 |
| [#8036](https://github.com/nearai/ironclaw/issues/8036) | Type WebUI Test Infrastructure (Issue) | WebUI, Testing | Closed — work completed via #8040 |

**Net progress:** The WebUI type-safety initiative (Issues #8033, #8035, #8036) is **complete** — 198+ suppressions removed, CI ratchets in place. Core loop streaming performance fixed. Subagent R3 slice 3a delivered.

---

## 4. Community Hot Topics

### Most Active Issues (by comments + recency)

| Issue | Comments | 👍 | Core Need |
|-------|----------|-----|-----------|
| [#7903](https://github.com/nearai/ironclaw/issues/7903) *Decision spike: persistent per-user sandboxed executor* | 2 | 0 | **Architectural crossroads**: whether to move the canonical agent loop into a sandboxed executor (breaking host authority boundary) vs. keeping loop in host and plumbing every new CLI through host→sandbox. High risk, high scope. |
| [#8009](https://github.com/nearai/ironclaw/issues/8009) *MCP egress errors flatten to "response_error"* | 1 | 0 | **Observability gap**: `mcp_http_error` discards underlying `RuntimeHttpEgressError` reason/byte counts, making hosted-MCP discovery failures undiagnosable. |

### Most Active PRs (by scope + risk)

| PR | Size | Risk | Scope | Status |
|----|------|------|-------|--------|
| [#8053](https://github.com/nearai/ironclaw/pull/8053) | XL | Medium | Loop, Dependencies | Open |
| [#8062](https://github.com/nearai/ironclaw/pull/8062) | XL | Low | LLM, Docs | Open |
| [#8044](https://github.com/nearai/ironclaw/pull/8044) | XL | Low | LLM, Dependencies | Open |
| [#8061](https://github.com/nearai/ironclaw/pull/8061) | M | Low | Subagent, Docs | Open |

**Underlying theme:** Three XL PRs open simultaneously (#8053, #8062, #8044) all touch **LLM provider integration** — prompt budget derivation from model-advertised window, OpenAI prompt cache keys, and Claude family cache-gate denylist. This signals a coordinated push to harden multi-provider token accounting and caching.

---

## 5. Bugs & Stability — Reported Today

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#8009](https://github.com/nearai/ironclaw/issues/8009) | MCP egress errors collapse to opaque `"response_error"` — discovery failures undiagnosable | None yet |
| **Medium** | [#8066](https://github.com/nearai/ironclaw/issues/8066) | Command result cards collapse to horizontal lines after repeated `/model` executions (flex layout shrink) | None |
| **Medium** | [#8063](https://github.com/nearai/ironclaw/issues/8063) | Slash-command menu doesn't auto-scroll — active command moves outside visible area (keyboard + pointer) | None |
| **Low** | [#8064](https://github.com/nearai/ironclaw/issues/8064) | Command result cards lack dismiss/close action — accumulate and consume conversation space | None |
| **Low** | [#8065](https://github.com/nearai/ironclaw/issues/8065) | Command metadata misaligned in slash menu — inconsistent horizontal start positions for titles/descriptions | None |
| **Low** | [#8056](https://github.com/nearai/ironclaw/pull/8056) | Malformed embedded tool-result text causes panic on preview range (closing delimiter before opening) | [#8056](https://github.com/nearai/ironclaw/pull/8056) (open) |
| **Low** | [#8059](https://github.com/nearai/ironclaw/pull/8059) | `POST /api/v1/responses/{id}/cancel` returns 400 for all states; hardcoded cancel reason rejected by parser | [#8059](https://github.com/nearai/ironclaw/pull/8059) (open) |

**Note:** The WebUI test panic (blocking `main`) was fixed in [#8055](https://github.com/nearai/ironclaw/pull/8055) (merged).

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Prompt context budget derived from model-advertised window** (not hardcoded 128k/20k) | [#8053](https://github.com/nearai/ironclaw/pull/8053) (PR open, XL) | **High** — core loop change, addresses [#8057](https://github.com/nearai/ironclaw/issues/8057) |
| **OpenAI prompt cache key per conversation** (preserved across turns/tool loops) | [#8062](https://github.com/nearai/ironclaw/pull/8062) (PR open, XL) | **High** — cost/latency optimization for OpenAI-compatible endpoints |
| **Claude cache-gate by denylist** (not allowlist) for new families (`claude-fable-*`, `claude-mythos-*`) | [#8044](https://github.com/nearai/ironclaw/pull/8044) (PR open, XL) | **High** — prevents silent cache downgrade |
| **Persistent per-user sandboxed executor** (move agent loop into sandbox) | [#7903](https://github.com/nearai/ironclaw/issues/7903) (Issue, spike) | **Low** — "decision spike" phase, high risk, needs design consensus |
| **Prompt budget accounts for non-transcript material** (identity, skills, tool schemas) | [#8057](https://github.com/nearai/ironclaw/issues/8057) (Issue) | **Medium** — logical follow-on to #8053 |
| **Concurrent subagent children cap + child-gate card replay verification** | [#8061](https://github.com/nearai/ironclaw/pull/8061) (PR open, M) | **Medium** — R2 debt + R3 3b verification |
| **Slash-command menu UX polish** (auto-scroll, alignment, dismiss cards, prevent collapse) | [#8063](https://github.com/nearai/ironclaw/issues/8063), [#8064](https://github.com/nearai/ironclaw/issues/8064), [#8065](https://github.com/nearai/ironclaw/issues/8065), [#8066](https://github.com/nearai/ironclaw/issues/8066) | **High** — 4 issues filed same day by same author, focused sprint likely |

---

## 7. User Feedback Summary

**Pain points surfaced today:**

1. **Slash-command UX is degraded** — Four issues filed by `italic-jinxin` on the same day indicate real friction: cards collapse to lines, no dismiss, menu doesn't scroll, metadata misaligned. This affects daily driver workflows for CLI-heavy users.

2. **MCP integration is a black box** — [#8009](https://github.com/nearai/ironclaw/issues/8009) shows hosted-MCP discovery failures surface as a single token `"response_error"` with zero diagnostic context. Users cannot self-debug.

3. **Prompt budget surprise** — [#8057](https://github.com/nearai/ironclaw/issues/8057) reveals the budget only sizes transcript, while identity/skills/tool schemas are added *on top* — requests silently exceed what the loop believes it sent.

4. **Telegram first-contact regression** — [#8054](https://github.com/nearai/ironclaw/pull/8054) shows unpaired users' first `/start` got command list instead of pairing notice — fixed in PR.

**No explicit satisfaction signals** in today's data (no 👍 on issues, no positive PR reviews visible).

---

## 8. Backlog Watch — Stale/Blocked Items Needing Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#7903](https://github.com/nearai/ironclaw/issues/7903) *Decision spike: persistent per-user sandboxed executor* | 9 days | Open, 2 comments | **Architectural fork point** — decision needed before Reborn sandbox plumbing accumulates more technical debt. Tagged `risk: high`, `scope: agent`, `scope: sandbox`. |
| [#8009](https://github.com/nearai/ironclaw/issues/8009) *MCP egress errors flatten to "response_error"* | 4 days | Open, 1 comment | **Observability debt** — blocks MCP debugging for all users. Simple fix: preserve `RuntimeHttpEgressError` fields in error envelope. |
| [#8053](https://github.com/nearai/ironclaw/pull/8053) *feat(loop): derive prompt context budget from model's advertised window* | 1 day | Open, XL, risk: medium | **Core loop behavior change** — touches token accounting for every model call. Needs review before merge. |
| [#8062](https://github.com/nearai/ironclaw/pull/8062) *fix(llm): send conversation cache keys on OpenAI request paths* | 0 days | Open, XL, risk: low | **Cost optimization** — enables prompt caching for OpenAI Responses/Chat Completions. Large surface area. |
| [#8044](https://github.com/nearai/ironclaw/pull/8044) *fix(llm): cache-gate new Claude families by denylist* | 2 days | Open, XL, risk: low | **Provider compatibility** — prevents silent cache loss for new Claude model families. |

**Maintainer action suggested:** Prioritize review of the three XL LLM PRs (#8053, #8062, #8044) as a batch — they're interrelated token-accounting changes. Schedule a decision meeting on #7903 before sandbox plumbing expands further.

---

*Digest generated from GitHub data as of 2026-09-04. All links point to live GitHub items.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-04

## 1. Today's Overview
LobsterAI shows **high merge velocity** with 10 PRs closed/merged in the last 24 hours, primarily focused on the imminent **2026.8.31 release** (PR #2600) and follow-up polish. No new release was cut today, but the release candidate PR (#2600) and several companion fixes (#2602–#2609) indicate a release is being finalized. Issue activity is low (6 updates, only 2 new), with most "updated" issues being stale items from March–April 2026 that received automated or maintenance touches. The project is in a **stabilization phase** ahead of a version bump.

## 2. Releases
**No new releases published today.**  
The closest is **PR #2600** — *Release: 2026.8.31* (merged 2026-09-03), which prepares a guided first-run experience, faster Library browsing, video sharing support, clearer login/quota messaging, and Windows installer hardening. Expect a tagged release (`v2026.8.31` or similar) within days.

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Area | Summary |
|----|------|---------|
| [#2609](https://github.com/netease-youdao/LobsterAI/pull/2609) | renderer, main | **Update UX**: confirm dialog before install/quit when agent turn or scheduled task is running; removes mid-download cancel. |
| [#2608](https://github.com/netease-youdao/LobsterAI/pull/2608) | docs, main | **DSH cleanup**: drops MCP delegation, removes `dshCodeMcpServer`/`dshSessionClient`, stops OpenClaw config re-sync on DSH toggle. |
| [#2607](https://github.com/netease-youdao/LobsterAI/pull/2607) | build, openclaw | **Bundle size**: stops peer install from bloating plugin bundle. |
| [#2606](https://github.com/netease-youdao/LobsterAI/pull/2606) | docs, windows | **Installer**: launches helper processes without console window. |
| [#2605](https://github.com/netease-youdao/LobsterAI/pull/2605) | windows | **Installer**: declares DPI-aware to fix blurry icons. |
| [#2604](https://github.com/netease-youdao/LobsterAI/pull/2604) | renderer, cowork | **Voice input**: dims exhausted quota button but keeps clickable for quota prompt. |
| [#2603](https://github.com/netease-youdao/LobsterAI/pull/2603) | renderer | **i18n**: refines Chinese voice-quota-exhausted copy with new free-trial wording. |
| [#2602](https://github.com/netease-youdao/LobsterAI/pull/2602) | renderer, main, openclaw, cowork, artifacts | **Browser restore**: brings back interactive in-app Agent Browser, MCP bridge, persistent profile, encrypted credentials, approval-gated autofill. |
| [#2600](https://github.com/netease-youdao/LobsterAI/pull/2600) | renderer, docs, main, cowork, im, windows, artifacts | **Release 2026.8.31** — guided first-run, faster Library, video sharing, login/quota messaging, Windows installer recovery. |
| [#2599](https://github.com/netease-youdao/LobsterAI/pull/2599) | renderer, im | **IM bot cards**: limits multi-instance cards to 2 responsive columns, centers content vertically. |

**Net effect**: Release hardening + browser feature restore + Windows installer polish + voice-quota UX + DSH/OpenClaw decoupling.

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Signal |
|------|------|----------|-----|--------|
| [#2601](https://github.com/netease-youdao/LobsterAI/issues/2601) | Issue | 1 | 0 | **New**: Request to render MCP Apps / Prefab UI (`ui://` resources) in desktop client — aligns with emerging MCP Apps spec. |
| [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552) | Issue (closed stale) | 2 | 0 | **Stale feature**: AI artifact Markdown preview & file cards — still high relevance for writer/agent workflows. |
| [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079) | PR (open stale) | 0 | 0 | **Stale feature**: "Current Process" side panel with tool execution log + diff view for Cowork sessions. |
| [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) | PR (open stale) | 0 | 0 | **Stale feature**: Scheduled-task failure → IM alert notification (currently silent on failure). |

**Underlying needs**:  
- **MCP Apps / interactive UI support** is a forward-looking ask (MCP ecosystem maturity).  
- **Artifact preview & diff** remains a top UX gap for agent-generated files.  
- **Observability** (scheduled-task alerts, per-turn tool logs) is sought by power users.

## 5. Bugs & Stability — Reported Today
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) — `CoworkRunner` reentrancy: concurrent `startSession`/`continueSession` corrupts stream & duplicates messages | Open (stale, updated today) | No |
| **High** | [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) — Prefetch async callback lacks `turnToken` validation → cross-turn pollution | Open (stale, updated today) | No |
| **Medium** | [#1087](https://github.com/netease-youdao/LobsterAI/pull/1087) — `continueSession` failure shows **two duplicate error messages** | Open (stale PR) | Yes (#1087) |
| **Low** | [#1081](https://github.com/netease-youdao/LobsterAI/pull/1081) — MCP sync message i18n mix + edit dialog scrollbar overflow | Open (stale PR) | Yes (#1081) |

**Note**: The two high-severity concurrency bugs (#1088, #1089) have been open since March 2026 with no fix merged. They affect core session integrity and should be prioritized.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **MCP Apps / Prefab UI rendering** (`ui://` resources) | [#2601](https://github.com/netease-youdao/LobsterAI/issues/2601) (new) | Medium — spec is emerging; browser restore (#2602) lays groundwork. |
| **Artifact Markdown/HTML preview + file cards** | [#1552](https://github.com/netease-youdao/LobsterAI/issues/1552) | High — core UX gap; Write tool already creates files. |
| **Scheduled-task failure → IM alert** | [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) | Medium — PR exists but stale; fits reliability theme. |
| **Cowork "Current Process" side panel (tool log + diff)** | [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079) | Medium — PR exists, ~400 LOC; valuable for debugging. |
| **OpenClaw version bump** (v2026.3.2 → latest) | [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082) | High — security/compliance flagged; #2607 touches OpenClaw build. |

**Prediction**: Next patch (post-2026.8.31) will likely include OpenClaw bump, MCP Apps探索, and artifact preview MVP. Concurrency fixes (#1088, #1089) are overdue for a stability release.

## 7. User Feedback Summary
- **Pain points**:  
  - No in-app preview of agent-created Markdown/HTML/code files (#1552).  
  - Silent scheduled-task failures — users discover only by opening task page (#1078).  
  - Voice input quota exhaustion UX confusing (addressed in #2603, #2604).  
  - Windows installer blurriness & console windows (fixed in #2605, #2606).  
- **Positive signals**:  
  - Browser restore (#2602) welcomed by users needing interactive auth/autofill.  
  - Guided first-run & faster Library browsing (#2600) target onboarding friction.  
- **Compliance pressure**: National CERT mandates OpenClaw update (#1082) — maintainers responding via build fixes (#2607).

## 8. Backlog Watch — Stale Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) | 5 months | **Session corruption** under concurrent IM/message load — core reliability. |
| [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) | 5 months | **Cross-turn data leakage** in prefetch — subtle but dangerous. |
| [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082) | 5 months | **OpenClaw version** — compliance/security risk. |
| [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) | 5 months | **Scheduled-task observability** — PR ready, just needs review/merge. |
| [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079) | 5 months | **Cowork debugging UX** — PR ready, high dev-value. |
| [#1081](https://github.com/netease-youdao/LobsterAI/pull/1081) | 5 months | **MCP i18n + scrollbar** — small polish, PR ready. |
| [#1087](https://github.com/netease-youdao/LobsterAI/pull/1087) | 5 months | **Duplicate error toast** — PR ready, easy win. |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 5 months | **Electron 40 → 44** — dependabot PR, unmerged; security/perf. |

**Recommendation**: Triage the 5-month-old concurrency bugs (#1088, #1089) and OpenClaw bump (#1082) immediately. Merge the ready-to-go PRs (#1078, #1079, #1081, #1087) to clear backlog. Electron upgrade (#1277) should be tested in a branch before the next major release.

---

*Digest generated from GitHub API data (issues/PRs updated 2026-09-03 to 2026-09-04). Links point to live GitHub items.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-04

## 1. Today's Overview
CoPaw shows **high velocity** with 56 total updates (20 issues, 36 PRs) in the last 24 hours. The project is actively iterating toward **v2.2.0**, with major work on multi-tenant Hub architecture, security governance fixes, desktop startup performance, and UI/UX refinements. No new release shipped today, but 15 PRs were merged/closed, indicating steady integration. Community engagement is strong — the top discussion (#7318) has 17 comments debating Hub roadmap priorities. Several critical bugs (security sandbox breach, ReMe indexing failure, cron duplicate runs) are under active investigation with fix PRs already opened.

## 2. Releases
**No new releases today.** The project remains on **v2.2.0 beta** track (current beta5 per #7469). The upcoming v2.2.0 will introduce **QwenPaw Hub (multi-tenant edition)** as the headline feature per #7318.

## 3. Project Progress — Merged/Closed PRs Today (15 total)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#7524](https://github.com/agentscope-ai/QwenPaw/pull/7524) | `fix(console): separate free models from pro tab` | Console/UI | Cleaner model selector UX; free models no longer pollute Pro tab |
| [#7525](https://github.com/agentscope-ai/QwenPaw/pull/7525) | `fix(governance): require approval for non-auto-denied critical findings` | Security/Governance | **Fixes #7496** — CRITICAL rules now respect `auto_deny` flag; aligns UI behavior with policy engine |
| [#7498](https://github.com/agentscope-ai/QwenPaw/pull/7498) | `fix(tools): return 404 when updating config for an unknown tool` | Tools/API | Proper HTTP semantics; prevents 500 on missing tool config updates |
| [#7545](https://github.com/agentscope-ai/QwenPaw/pull/7545) | `fix: desktop right-click copy in chat input` | Desktop | Restores parity with web console — copy context menu now works on Windows |
| [#7474](https://github.com/agentscope-ai/QwenPaw/pull/7474) | `fix: custom provider loading after max_tokens migration` | Providers | **Fixes #7474** — restores custom provider model loading broken by PR #7337 |
| [#7267](https://github.com/agentscope-ai/QwenPaw/pull/7267) | `fix(channels): make contract checks portable and complete` | Channels/Testing | Fixes Windows UTF-8 contract test failures; ensures all built-in channels validated |
| [#5399](https://github.com/agentscope-ai/QwenPaw/pull/5399) | `feat(providers): support custom model ordering within providers` | Providers/UI | Drag-and-drop model reordering persisted to backend |
| [#5394](https://github.com/agentscope-ai/QwenPaw/pull/5394) | `feat(plugin-manager): mobile card layout and unified catalog cards` | Console/Mobile | Responsive plugin manager; fixes overflow/clipping on narrow viewports |
| [#5363](https://github.com/agentscope-ai/QwenPaw/pull/5363) | `fix(console): improve mobile responsiveness of settings/agents page` | Console/Mobile | Card-based layout replaces broken table on mobile |
| [#5334](https://github.com/agentscope-ai/QwenPaw/pull/5334) | `feat(ui): allow switching agent in collapsed sidebar mode` | Console/UI | Agent selector functional in compact sidebar (mobile/common) |
| [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | `feat: optional PowerContext long-term memory backend` | Memory/Extensibility | New `powercontext` memory backend registered; selectable peer to ReMe |
| [#7433](https://github.com/agentscope-ai/QwenPaw/pull/7433) | `fix(website): add QwenPaw discussion menu, update blog` | Website/Docs | Community navigation improvements |
| [#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) | `fix(acp): prevent Windows ACP agent stalls during workspace bootstrap` | ACP/Windows | Moves plugin bootstrap off event loop; prevents minutes-long hangs |
| [#7544](https://github.com/agentscope-ai/QwenPaw/pull/7544) | `fix(memory): return proper status for unavailable routes` | Memory/API | 404 for missing agent on reindex undo; 503 for unavailable memory routes |
| [#7496](https://github.com/agentscope-ai/QwenPaw/pull/7496) | (Issue closed via #7525) | Governance | CRITICAL rule auto-rejection bug fixed |

**Key advancement**: Security governance now correctly handles CRITICAL findings per UI contract; desktop/Web parity restored; mobile console usable; custom providers unblocked; ACP Windows stability improved.

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Activity | Core Need |
|------|----------|-----------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) **QwenPaw Hub multi-tenant edition — what next?** | 17 comments, 3 👍 | **Product strategy**: Community shaping Hub roadmap — requests include RBAC, skill marketplace, team workspaces, audit logs, cost controls. Signals strong demand for team/enterprise deployment. |
| [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) **Security sandbox breached (CLOSED)** | 9 comments | **Critical security**: External report (Zhihu) claims sandbox escape. Closed quickly — likely mitigated or false positive. No fix PR linked; warrants verification. |
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) **LAN LLM server frequent client disconnect → timeout** | 7 comments | **Reliability**: LM Studio on LAN drops connections; qwenpaw retries exhaustively then fails. Need connection resilience (keep-alive, backoff, health checks). |
| [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) **ReMe background embedding job fails — dependency accessed before start()** | 5 comments | **Data integrity**: Silent failure in long-term memory indexing with OpenAI-compatible embedders. New memories not persisted. Blocking for ReMe users. |
| [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) **Cron task double-executes in misfire_grace window → duplicate backups** | 4 comments | **Operational reliability**: APScheduler misfire grace causes duplicate runs. Affects backup/scripts; needs idempotency or scheduler tuning. |
| [#7541](https://github.com/agentscope-ai/QwenPaw/issues/7541) **Architecture flaw: sessions split by channel (web/desktop/Telegram)** | 3 comments | **Architectural debt**: Sessions should be user-centric, not transport-centric. Blocks unified history, cross-device continuity. |
| [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) **Codex-style "steer mode" — inject guidance mid-execution** | 3 comments (old issue, recent activity) | **Interaction model**: Human-in-the-loop correction during agent runs. High-value for coding/debugging workflows. |

**Underlying theme**: Transition from **personal assistant → team platform** (Hub), while hardening **reliability** (LAN, ReMe, cron, security) and **architectural coherence** (session model, steering).

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) Security sandbox breach reported externally | Closed (9 comments) | None linked — **verify mitigation** |
| **High** | [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) ReMe embedding job crashes silently; memories lost | Open (5 comments) | None yet — blocks long-term memory |
| **High** | [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) Feishu session consumer stalls → session permanently unresponsive | Open (2 comments) | None — channel reliability regression |
| **Medium** | [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) LAN LLM disconnect storm → timeout | Open (7 comments) | None — needs retry/backoff hardening |
| **Medium** | [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) Cron double-run in misfire_grace → duplicate backups | Open (4 comments) | None — scheduler config or idempotency needed |
| **Medium** | [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) Custom provider load fails after `max_tokens`→`max_output_length` migration | **Closed** | Fixed via migration handling |
| **Low** | [#7545](https://github.com/agentscope-ai/QwenPaw/issues/7545) Desktop chat input: right-click copy missing | **Closed** | [#7545](https://github.com/agentscope-ai/QwenPaw/pull/7545) merged |
| **Low** | [#7529](https://github.com/agentscope-ai/QwenPaw/issues/7529) Langfuse monitoring: tool output blank in traces | Open (1 comment) | None — observability gap |
| **Low** | [#7531](https://github.com/agentscope-ai/QwenPaw/issues/7531) OpenCode API now requires `x-opencode-session` header | Open (2 comments) | None — external API compliance needed by 09/06 |

**Note**: Critical security issue (#7511) closed without public fix details — maintainers should confirm resolution. ReMe data loss (#7469) and Feishu session death (#7534) are active user-impacting regressions without fix PRs yet.

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for v2.2.x | Rationale |
|---------|-------|----------------------|-----------|
| **QwenPaw Hub multi-tenant features** (RBAC, team workspaces, skill marketplace, audit logs) | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | **High** — headline v2.2.0 feature | 17-comment discussion actively shaping scope; Hub is the strategic pivot |
| **Unified session model across channels** (web/desktop/Telegram = one session) | [#7541](https://github.com/agentscope-ai/QwenPaw/issues/7541) | **Medium** — architectural, may wait for v2.3 | Fundamental rewrite; acknowledged as "architectural error" |
| **Steer mode / mid-run guidance injection** (Codex-style) | [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) | **Medium** — backend ready, needs UI | Core/backend marked ready; Console/Channels pending |
| **Background/online updates (non-blocking)** | [#7543](https://github.com/agentscope-ai/QwenPaw/issues/7543) | **High** — desktop UX pain point | Current foreground update blocks app; clear user demand |
| **Message buttons / interactive elements in chat** | [#7533](https://github.com/agentscope-ai/QwenPaw/issues/7533) | **Medium** — requires channel abstraction | Needs unified message component across Console + Channels |
| **Element/Matrix compatibility (MSC2965 OIDC, recovery keys)** | [#7535](https://github.com/agentscope-ai/QwenPaw/issues/7535) | **Low** — niche but standards-aligned | Matrix ecosystem moving to MAS/OIDC; matrix-nio may need updates |
| **Opt-out of hardcoded "About" identity in system prompt** | [#7540](https://github.com/agentscope-ai/QwenPaw/issues/7540) | **High** — trivial config toggle | One-line change; respects custom personas (SOUL.md) |
| **Preserve agent persona during context compaction** | [#7527](https://github.com/agentscope-ai/QwenPaw/issues/7527) | **Medium** — memory quality | Compaction erodes personality; important for long-running agents |
| **Scroll-back pagination for compacted history** | [#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542) | **High** — PR open, first-contributor | Directly addresses "history lost after compaction" UX gap |

**Predicted v2.2.0 scope**: Hub MVP + background updates + persona preservation + scroll-back history + OpenCode header fix + critical bug fixes (ReMe, Feishu, cron, LAN resilience).

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Model setup too tedious** (5+ clicks to add model) | [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) (6 comments, good first issue) | New/occasional users; onboarding friction |
| **LAN LLM instability** (LM Studio disconnects → retries → timeout) | [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) (7 comments) | Self-hosted/local model users on home/office LAN |
| **ReMe silent failure** — memories not indexed, no error surfaced | [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) (5 comments) | Power users relying on long-term memory |
| **Desktop/Web inconsistency** (copy, UI behavior) | [#7545](https://github.com/agentscope-ai/QwenPaw/issues/7545) (2 comments) | Desktop daily drivers |
| **Foreground updates block work** | [#7543](https://github.com/agentscope-ai/QwenPaw/issues/7543) (1 comment, screenshot) | All desktop users during update |
| **Session fragmentation across devices/channels** | [#7541](https://github.com/agentscope-ai/QwenPaw/issues/7541) (3 comments) | Multi-device users (web + mobile + Telegram) |
| **Custom provider broken after upgrade** | [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) (4 comments) | Advanced users with private/local model endpoints |
| **Cron duplicate runs corrupt backups** | [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) (4 comments) | Self-hosted operators running scheduled jobs |

**Positive signals**: Active community shaping Hub roadmap (#7318); first-time contributors landing meaningful PRs (#7080, #7542, #7267); mobile/responsive UI improvements merging steadily.

## 8. Backlog Watch — Stale/Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) **Model addition UX overhaul** (good first issue) | 4 months | Onboarding bottleneck; labeled "good first issue" but no PR | Open, 6 comments |
| [#1775](https://

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-04

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 50 pull requests updated in the last 24 hours (49 open, 1 merged), but only a single new issue filed. The project is in a heavy refactoring and hardening phase: major workstreams include security policy implementation (RFC #7155), cron extraction into a dedicated crate, ACP transcript pagination, zerocode TUI fixes, and bootstrap/MCP launcher infrastructure. No new releases were cut today. The sole new issue (#10609) is a **S1-severity workflow blocker** in zerocode, indicating a critical UX regression for local developers.

## 2. Releases
**No new releases published today.**

## 3. Project Progress — Merged / Closed PRs Today
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#10539](https://github.com/zeroclaw-labs/zeroclaw/pull/10539) | `fix(runtime): stop advertising self-approval in tool schemas` | Runtime, Security, Tool Permissions | **Merged**. Removes the `approved` argument from `shell`, `schedule`, `cron_add`, `cron_update`, `cron_run` tool schemas — this argument was runtime plumbing that the approval gate overwrites anyway. Reduces schema surface and prevents model confusion. |

*Only one PR merged today; the remaining 49 updated PRs are still in review.*

## 4. Community Hot Topics — Most Active PRs (by comment activity)
*GitHub comment counts are not populated in the feed (`undefined`), so we infer activity from stack dependencies, contributor seniority, and scope breadth.*

| PR | Author | Scope | Why It Matters |
|----|--------|-------|----------------|
| [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) | NiuBlibing | **Security: Shell V1 Permission Policy (RFC #7155 Phase 0+1)** — 5 single-concern commits implementing unified tool permission policy & tiered approval. | **Flagship security milestone**. Touches `agent`, `config`, `cron`, `runtime`, `tool:delegate`, `tool:cron`, `tool:shell`. Blocks multiple downstream PRs. |
| [#10557](https://github.com/zeroclaw-labs/zeroclaw/pull/10557) | JordanTheJet | **refactor(cron): extract cron into `zeroclaw-cron`** — 11k lines moved via `git mv`, precondition gate landed in new crate. | **Architectural extraction** per #10546. Removes cron from holding crate `zeroclaw-runtime`. Enables independent versioning and security boundary. |
| [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) | Audacity88 | **fix(acp): persist interrupted turn progress** — checkpoints Code/ACP prompt, assistant text, tool calls/results before forwarding. | **Long-running (since Aug 20)**, `size:XL`, `risk:high`. Critical for ACP session reliability; enables recovery after crashes/network loss. |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | JordanTheJet | **feat(cli): egress grant ceremony for plugin install/list** — adds user consent flow for outbound network calls during plugin ops. | **Security UX**: makes network egress explicit. Stacked on merged #9582. `size:XL`, `domain:security`. |
| [#10595](https://github.com/zeroclaw-labs/zeroclaw/pull/10595) | Audacity88 | **fix(zerocode): cache wrapped rows for long thinking output** — stacked on #9317, addresses TUI rendering performance. | **zerocode TUI stability**. `size:XL`, `stacked`. Directly impacts daily developer experience. |

**Underlying needs**: The cluster around RFC #7155, cron extraction, and ACP durability signals a push toward **production-grade security boundaries, crate-level isolation, and session resilience** — prerequisites for broader adoption and plugin ecosystem trust.

## 5. Bugs & Stability — Reported Today
| Issue / PR | Severity | Component | Status | Fix PR? |
|------------|----------|-----------|--------|---------|
| [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609) | **S1 — Workflow Blocked** | `zerocode/tui` | **Open** (filed today) | **Yes** — [#10565](https://github.com/zeroclaw-labs/zeroclaw/pull/10565) (`fix(zerocode): pin local Code sessions to process cwd`) opened 2026-09-02, updated today. |
| [#10582](https://github.com/zeroclaw-labs/zeroclaw/pull/10582) | Medium | `runtime`, `tool:file`, `channel:acp` | **Open PR** | Fixes attachment image MIME validation: provider-loadable contract now decides, preventing `image/svg+xml`, `image/bmp` rejections. |
| [#10539](https://github.com/zeroclaw-labs/zeroclaw/pull/10539) | High (risk:high) | `runtime`, `security`, `tool` | **Merged** | Removed self-approval advertisement in tool schemas (see §3). |

**Note**: #10609 is the only *new* bug today; the others are pre-existing fixes landing in PRs.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Shell V1 Permission Policy (RFC #7155)** | [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) | **Very High** — implementation complete, 5 commits ready; blocks plugin/agent security model. |
| **Cron as standalone crate (`zeroclaw-cron`)** | [#10557](https://github.com/zeroclaw-labs/zeroclaw/pull/10557) | **High** — extraction done, precondition gate landed; enables independent releases. |
| **ACP transcript pagination** | [#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596) | **High** — `size:XL`, bounded cursor pagination for persisted transcripts; needed for long sessions. |
| **MCP launcher (`zeroclaw-bootstrap`)** | [#10591](https://github.com/zeroclaw-labs/zeroclaw/pull/10591) | **Medium-High** — stacked on canonical release target registry (#10590); enables Claude Code / Codex integration. |
| **Todo tracker dismissal persistence** | [#10584](https://github.com/zeroclaw-labs/zeroclaw/pull/10584) | **Medium** — UX polish for zerocode; remembers show/hide across panes/reconnects. |
| **Memory recall date stamping** | [#10567](https://github.com/zeroclaw-labs/zeroclaw/pull/10567) | **Low-Medium** — adds recall date to memory entries; improves context freshness signals. |
| **Web `/upload` slash command** | [#10578](https://github.com/zeroclaw-labs/zeroclaw/pull/10578) | **Low** — keyboard-first image attach; quality-of-life for web UI. |

**Roadmap inference**: Next version will likely ship **RFC #7155 permission policy**, **cron crate extraction**, **ACP pagination**, and **zerocode cwd fix**. MCP launcher and bootstrap are close but depend on release registry merge.

## 7. User Feedback Summary
| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **zerocode launches in wrong directory** | [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609): “ignores the directory it was launched from and starts every session in the selected agent's configured workspace” | 😡 **High frustration** — S1 blocker for local dev workflow. |
| **Interrupted ACP turns lose progress** | [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197): checkpoint/recovery for Code/ACP prompt, tool calls, results | 😟 **Anxiety** — long sessions at risk; fix in review since Aug 20. |
| **Plugin install lacks network consent** | [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584): egress grant ceremony for plugin install/list | 🛡️ **Security demand** — users want explicit approval for outbound calls. |
| **Memory entries lack recall timestamps** | [#10567](https://github.com/zeroclaw-labs/zeroclaw/pull/10567): “entry recalled from days ago is textually indistinguishable from the most recent” | 🤔 **Mild annoyance** — context freshness unclear. |
| **Todo tracker dismissal not persisted** | [#10584](https://github.com/zeroclaw-labs/zeroclaw/pull/10584): “reclaiming conversation space does not require knowing Ctrl+P” | 😐 **UX friction** — minor but frequent. |
| **Image upload size limit too low** | [#10589](https://github.com/zeroclaw-labs/zeroclaw/pull/10589): default 5 MiB drops ordinary phone photos | 😕 **Surprise limitation** — fix raises default to 20 MiB ceiling. |

**Overall**: Users are hitting **workflow-breaking bugs in zerocode** and **session durability gaps in ACP**, while security-conscious contributors demand **explicit network consent** and **tool permission clarity**. The project responds with rapid PR turnover.

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention
| Item | Age | Area | Why It Matters |
|------|-----|------|----------------|
| [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) | **15 days** (opened 2026-08-20) | `runtime`, `channel:acp`, `size:XL`, `risk:high` | ACP session durability — critical for any long-running agent workflow. Still open despite `distinguished contributor` author. |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | **35 days** (opened 2026-07-31) | `cli`, `domain:security`, `size:XL` | Plugin egress consent — security UX gate for plugin ecosystem. Stacked on merged #9582; maintainer note indicates scope corrected. |
| [#10557](https://github.com/zeroclaw-labs/zeroclaw/pull/10557) | **2 days** but **11k LOC move** | `cron`, `domain:architecture`, `size:XL` | Cron extraction — architectural milestone. Large diff needs thorough review; blocks downstream crate independence. |
| [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) | **0 days** (opened today) | `security:policy`, `tool:shell`, `tool:cron`, `tool:delegate` | **RFC #7155 implementation** — 5 commits, cross-cutting. Must be reviewed holistically; likely gating next release. |
| [#10590](https://github.com/zeroclaw-labs/zeroclaw/pull/10590) / [#10591](https://github.com/zeroclaw-labs/zeroclaw/pull/10591) | **0 days** | `dist`, `bootstrap`, `MCP` | Release target registry + MCP launcher — foundational for distribution. #10591 stacked on #10590; both need merge to unblock packaging. |

**Recommendation**: Prioritize review of #10197 (oldest high-risk), #10610 (security flagship), and the cron extraction #10557. The zerocode cwd fix (#10565 → #10609) should be fast-tracked given S1 severity.

---

*Digest generated from GitHub API data for zeroclaw-labs/zeroclaw on 2026-09-04. All links point to live GitHub items.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*