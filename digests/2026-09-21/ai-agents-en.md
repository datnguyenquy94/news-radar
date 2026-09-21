# OpenClaw Ecosystem Digest 2026-09-21

> Issues: 286 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-21 04:34 UTC

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

# OpenClaw Project Digest — 2026-09-21

## 1. Today's Overview

OpenClaw shows **exceptionally high development velocity** with 786 total items updated in the last 24 hours (286 issues, 500 PRs). The project has **199 open issues** and **292 open PRs**, indicating a large active backlog. No new releases were published today. The issue landscape is dominated by **P0/P1 stability bugs** — SQLite WAL unbounded growth on Windows, zombie process accumulation, model fallback failures, and cron scheduler reliability — suggesting the project is in a **stabilization phase** rather than feature development. PR activity is heavily focused on maintenance, CI optimization, and targeted bug fixes, with many PRs marked "ready for maintainer look" awaiting review.

## 2. Releases

**No new releases today.** The latest stable appears to be the 2026.9.x series (referenced in issues #139215, #143524, #144858). Several P0 issues (#143524, #144858) are marked `impact:ux-release-blocker`, indicating they block the next release.

## 3. Project Progress

**208 PRs merged/closed in the last 24h** — a very high throughput. Key merged/closed PRs today:

| PR | Area | Summary |
|----|------|---------|
| [#154340](https://github.com/openclaw/openclaw/pull/154340) | CI | Run compatible PR tests on pinned Bun fork (performance) |
| [#154412](https://github.com/openclaw/openclaw/pull/154412) | Web Search | Honor result limits when providers return extra rows (Brave, Exa, Parallel, Perplexity) |
| [#154418](https://github.com/openclaw/openclaw/pull/154418) | CI | Restore worker fixture and routing contracts after Bun migration |
| [#154160](https://github.com/openclaw/openclaw/pull/154160) | Update System | Simplify update execution and finalization (closes #154157) |
| [#154320](https://github.com/openclaw/openclaw/pull/154320) | Core/Automation | Fix queued automations losing authority after native reply |
| [#154389](https://github.com/openclaw/openclaw/pull/154389) | Logging | Skip redundant log/transcript redaction work (perf) |
| [#154394](https://github.com/openclaw/openclaw/pull/154394) | Codex | Stop artifact capture after cancellation during file opening |
| [#154415](https://github.com/openclaw/openclaw/pull/154415) | Gateway | Reduce session projection allocation churn (perf) |
| [#154421](https://github.com/openclaw/openclaw/pull/154421) | Cron | Keep healthy active runs from delaying job lists |
| [#154422](https://github.com/openclaw/openclaw/pull/154422) | Memory | Reuse complete writes for recovery (fs-safe) |

**Pattern:** Most merged PRs are **maintenance, performance, CI, and targeted fixes** — not new features. Many carry `maintainer` label and `rating: 🐚 platinum hermit` (high complexity/risk).

## 4. Community Hot Topics

### Top 5 Most Discussed Issues (by comment count)

| Issue | Comments | Labels | Core Problem |
|-------|----------|--------|--------------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 36 | **P0**, `impact:crash-loop`, `impact:ux-release-blocker`, `clawsweeper:needs-maintainer-review` | **SQLite WAL grows to 1.4–2.8 GB in days** on Windows despite `wal_autocheckpoint=1000`; blocks gateway startup |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 32 | **P1**, `impact:crash-loop`, `impact:message-loss` | **Zombie process leak** from hook/tool execution (`openclaw-hooks`, `bash`, `codex`); runtime degradation over time |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 16 | **P0**, `regression`, `impact:ux-release-blocker`, `impact:auth-provider` | **"Cannot convert undefined or null to object"** with `google-vertex/gemini-3.1-pro-preview` since 2026.3.2 |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | 13 | **P2**, `clawsweeper:needs-product-decision`, `impact:session-state` | Subagent completion injects too much child content into parent context |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | 13 | **P2**, `impact:other` | **Write/exec tool parameters silently dropped** after long conversations (15+ turns) |

### Top 5 Most Discussed PRs (by readiness/complexity signals)

| PR | Status | Labels | Scope |
|----|--------|--------|-------|
| [#148193](https://github.com/openclaw/openclaw/pull/148193) | Open | `size: XL`, `merge-risk: 🚨 compatibility`, `extensions: llama-cpp` | Managed local OCR/vision setup for llama-cpp |
| [#154320](https://github.com/openclaw/openclaw/pull/154320) | Open | `size: XL`, `P1`, `security-sensitive-changed`, 15+ component touches | Fix queued automations losing authority after native reply |
| [#153989](https://github.com/openclaw/openclaw/pull/153989) | Open | `size: XL`, `P2`, `security-sensitive-changed` | Preserve operator authority through queued/child runs |
| [#154160](https://github.com/openclaw/openclaw/pull/154160) | Open | `size: XL`, `dependencies-changed` | Simplify update execution and finalization |
| [#154346](https://github.com/openclaw/openclaw/pull/154346) | Open | `size: XL`, `merge-risk: 🚨 automation`, `P2` | Reduce repeated GitHub reads during PR landing |

**Underlying needs:** Users are hitting **production-blocking stability issues** (WAL growth, zombies, silent data loss, model fallback failures). The community is demanding **reliability over features** — see #90974 ("Stop shipping features. Start shipping a product that works." — 5 comments, 2👍).

## 5. Bugs & Stability

### Critical (P0) — Release Blockers

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | **P0** — SQLite WAL unbounded growth (2.8 GB), blocks gateway startup on Windows | Open, 36 comments | No fix PR linked |
| [#144858](https://github.com/openclaw/openclaw/issues/144858) | **P0** — Candidate rehearsal capped at 300s despite larger timeout | **Closed** (today) | Likely fixed in update system PRs |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | **P0** — Regression: "Cannot convert undefined or null to object" with Gemini 3.1 Pro | Open since 2026-03-06, 16 comments | No fix PR linked |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | **P0** — Live docs ahead of release (Heartbeat IsolatedSessions missing in 2026.3.13) | Open since 2026-03-17, 11 comments | No fix PR linked |
| [#101814](https://github.com/openclaw/openclaw/issues/101814) | **P0** — All channels broken after 2026.6.11: one message then permanent silence | Open, 6 comments | No fix PR linked |

### High (P1) — Data Loss / Crash Loops

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | **P1** — Zombie process leak, runtime degradation | Open since 2026-06-29, 32 comments | No fix PR linked |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | **P1** — Matrix agents loop on no-reply output, stale session replay | Open, 10 comments | No fix PR linked |
| [#119992](https://github.com/openclaw/openclaw/issues/119992) | **P1** — Per-turn send budget needed: duplicate answer storms | Open, 9 comments | `clawsweeper:linked-pr-open` |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | **P1** — Visible inbound messages silently dropped (zero-payload dispatch) | Open, 9 comments | No fix PR linked |
| [#118793](https://github.com/openclaw/openclaw/issues/118793) | **P1** — Claude CLI "session limit" error doesn't trigger model fallback | Open, 6 comments | No fix PR linked |
| [#102534](https://github.com/openclaw/openclaw/issues/102534) | **P1** — Cron scheduler timer permanently stops after heavy timeouts | Open, 6 comments | No fix PR linked |
| [#139215](https://github.com/openclaw/openclaw/issues/139215) | **P1** — Cron scheduler silently swallows scheduled ticks since 2026.9.1 | Open, 6 comments | No fix PR linked |
| [#118408](https://github.com/openclaw/openclaw/issues/118408) | **P1** — Concurrent subagent completions race on session file | Open, 5 comments | No fix PR linked |

### Notable Regressions (Recent)

| Issue | Regression Since | Impact |
|-------|------------------|--------|
| [#134579](https://github.com/openclaw/openclaw/issues/134579) | 2026.8.1-beta.3 | Active Memory automatic recall broken |
| [#139215](https://github.com/openclaw/openclaw/issues/139215) | 2026.9.1 | Cron ticks silently swallowed |
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | 2026.9.2/9.3 | SQLite WAL growth on Windows |
| [#101814](https://github.com/openclaw/openclaw/issues/101814) | 2026.6.11 | Channel breakdown after single message |

## 6. Feature Requests & Roadmap Signals

### High-Signal Requests (Community-Driven)

| Issue | Votes/Comments | Category | Likelihood for Next Version |
|-------|----------------|----------|----------------------------|
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | 13 comments, 1👍 | **Subagent isolation** — return only status + session link by default | High — `clawsweeper:needs-product-decision`, P2 |
| [#99583](https://github.com/openclaw/openclaw/issues/99583) | 8 comments, 2👍 | **Intelligent session auto-titling** (lazy, cheap models, topic-aware) | Medium — P3, `clawsweeper:needs-product-decision` |
| [#113706](https://github.com/openclaw/openclaw/issues/113706) | 5 comments | **Bounded Memory Wiki batch operations** for automation | Low — P3, `clawsweeper:needs-product-decision` |
| [#122403](https://github.com/openclaw/openclaw/issues/122403) | 5 comments | **Show local vs cloud provenance** in Control UI model picker | Medium — P2, security/UX |
| [#52640](https://github.com/openclaw/openclaw/issues/52640) | 9 comments, 2👍 | **Persistent task-status surface** for long-running channel turns | Medium — Closed but signals demand |
| [#51028](https://github.com/openclaw/openclaw/issues/51028) | 8 comments | **Sort sessions by meaningful activity**, not last message | Low — Closed, UX friction |

### Predicted Next-Version Inclusions
1. **Cron scheduler fixes** (#139215, #102534, #90595) — multiple P1/P2 cron issues, PR #154421 merged today
2. **Subagent completion isolation** (#96975) — product decision needed, high community pain
3. **Model fallback reliability** (#118793, #106786, #97335) — multiple provider-specific fallback failures
4. **Memory system stabilization** (#134579, #99910, #84242) — Active Memory broken, dreaming OOM, LanceDB tools not exposed

## 7. User Feedback Summary

### Top Pain Points (from issue content & #90974)

| Pain Point | Evidence |
|------------|----------|
| **Unreliable message delivery** | #112259 (silent drops), #49381 (duplicate replies), #101814 (permanent silence after 1 msg) |
| **Session/context corruption** | #96975 (subagent pollution), #118408 (race conditions), #64103 (misleading status fields) |
| **Model/provider instability** | #38327 (Gemini crash), #106786 (silent fallback), #118793 (Claude limit no fallback), #97335 (cron fallback broken) |
| **Resource leaks/crashes** | #143524 (WAL growth), #97616 (zombies), #119565 (MCP memory amplification), #99910 (dreaming OOM) |
| **Cron/scheduler unreliability** | #139215 (silent swallow), #102534 (timer death), #90595 (alert fatigue), #82662 (setup timeout) |
| **Documentation/release gap** | #48920 (live docs ahead of release), #90974 ("stop shipping features") |

### User Sentiment
- **Frustration with stability over features**: #90974 explicitly calls out "I don't care about Parallel search... I care that my agent **responds to messages**"
- **Production blockers**: Multiple P0 issues with `impact:ux-release-blocker` suggest users cannot upgrade
- **Windows-specific neglect**: #143524

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-21)

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape shows **bimodal velocity**: a cluster of high-velocity projects (OpenClaw, NanoBot, LobsterAI, CoPaw, ZeroClaw) shipping daily fixes and weekly releases, contrasted with maintenance-mode projects (IronClaw, Moltis, NullClaw, PicoClaw) and one inactive project (ZeptoClaw). **Stability and reliability** have overtaken feature development as the dominant theme—across projects, P0/P1 bugs (resource leaks, message loss, session corruption, provider fallback failures) consume disproportionate maintainer bandwidth. The ecosystem is converging on **multi-channel gateway architectures**, **local-model orchestration** (Ollama/llama.cpp), **MCP/ACP protocol adoption**, and **plugin/skill marketplaces** as the next extensibility frontier. Community sentiment universally demands "product that works" over new capabilities.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Open PRs | Latest Release | Health Score* |
|---------|-------------|-----------|-------------------|----------|----------------|---------------|
| **OpenClaw** | 286 | 500 | 208 | 292 | 2026.9.x (stale) | 🟡 High velocity, critical backlog |
| **NanoBot** | 3 | 52 | 34 | 18 | Pre-release | 🟢 High velocity, clean merges |
| **Hermes Agent** | 7 | 50 | 6 | 44 | v0.17.0/0.19.0 | 🟡 Critical bugs, active fixes |
| **PicoClaw** | 4 | 5 | 2 | 3 | v0.3.1 | 🟡 Low velocity, stale bugs |
| **NanoClaw** | 1 | 38 | 38 | 2 | v2.3.0 | 🟢 Batch cleanup, strong core team |
| **NullClaw** | 1 | 0 | 0 | 0 | Unknown | 🔴 Dormant |
| **IronClaw** | 0 | 8 | 4 | 4 | 1.4.1-rc.1 | 🟡 Maintenance mode, low engagement |
| **LobsterAI** | 3 | 15 | 8 | 7 | 2026.9.20 (daily) | 🟢 Highest release cadence |
| **Moltis** | 0 | 0 | 0 | 1 | Stale | 🔴 Quiet |
| **CoPaw** | 23 | 30 | 12 | 18 | v2.2.2-beta.3 | 🟢 Active beta, strong community |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | None | 🔴 Inactive |
| **ZeroClaw** | 9 | 50 | 8 | 42 | Pre-release | 🟢 High velocity, XL PR backlog |

*Health Score: 🟢 Healthy (steady merges, releases, manageable backlog) | 🟡 Caution (high velocity but critical bugs/stale items) | 🔴 At Risk (low activity, no releases, stale backlog)

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Velocity**: 10× PR throughput of nearest peer (500 PRs/24h vs 50); largest contributor base
- **Reference Implementation**: De facto standard for gateway/session/tool protocols; other projects (LobsterAI, NanoClaw, ZeroClaw) integrate or mirror its APIs
- **Ecosystem Gravity**: Provider abstractions, cron scheduler, memory system, and automation engine are adopted/de facto standards

**Technical Approach Differences:**
- **Monolithic Gateway**: Single Rust/TypeScript gateway managing sessions, tools, providers, cron, memory—vs. NanoBot/ZeroClaw's modular channel-adapter pattern
- **SQLite-First Persistence**: WAL-mode SQLite for all state (causes Windows WAL growth P0 #143524); peers use mixed stores (LobsterAI: SQLite + OpenClaw shared state; ZeroClaw: ACP transcripts + config)
- **Automation-Centric**: Native cron, queued automations, subagent delegation as first-class primitives; others treat as add-ons

**Community Size Comparison:**
- **Issues/PRs**: 199 open issues / 292 open PRs — 5-10× larger backlog than any peer
- **Engagement**: Top issue #143524 has 36 comments; NanoBot's top has 1; CoPaw's top has 31
- **Contributor Breadth**: "platinum hermit" rating on complex PRs indicates deep specialist contributors; peers show smaller core teams

**Risk**: Stabilization debt accumulating faster than throughput can resolve (5 P0 release-blockers, 8 P1 data-loss/crash-loop bugs).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Local Model Orchestration** | OpenClaw, NanoBot, PicoClaw, ZeroClaw, LobsterAI, CoPaw | Ollama/llama.cpp integration, tool-support detection (NullClaw #1000), model fallback reliability (OpenClaw #118793, #106786), hardware/quantization guides (ZeroClaw #9549) |
| **MCP/ACP Protocol Adoption** | LobsterAI, NanoBot, ZeroClaw, PicoClaw, CoPaw | MCP server bridging (LobsterAI #1003), ACP transcript pagination (ZeroClaw #10596), MCP preset distribution (NanoBot #5830), OpenCode Go session headers (PicoClaw #3369, CoPaw #7869) |
| **Multi-Session/Channel Isolation** | OpenClaw, NanoBot, Hermes, ZeroClaw, CoPaw | Subagent context pollution (OpenClaw #96975), per-session API routing (NanoBot #5838), channel/session binding (ZeroClaw #10985), Hub multi-tenant (CoPaw #7318) |
| **Resource Leak Prevention** | OpenClaw, NanoBot, Hermes, CoPaw, ZeroClaw | SQLite WAL growth (OpenClaw #143524), zombie processes (OpenClaw #97616), memory amplification (OpenClaw #119565), media pruning (CoPaw #7853), Windows handle leaks (ZeroClaw #10793) |
| **Provider Fallback & Resilience** | OpenClaw, NanoBot, Hermes, ZeroClaw, CoPaw | Model fallback on rate limits/errors (OpenClaw #118793, #97335), NIM timeout retry (NanoBot #5769), reasoning-text streaming parity (NanoBot #5833), Anthropic thinking via OpenAI gateways (ZeroClaw #10605) |
| **Windows/macOS Desktop Parity** | OpenClaw, Hermes, CoPaw, ZeroClaw, LobsterAI | WAL growth on Windows (OpenClaw), Electron SIGTRAP crashes Linux/macOS (Hermes #100573, #69247), Windows session loss (CoPaw #7724), Windows service logs (ZeroClaw #10931), macOS entitlements (LobsterAI #2723) |
| **Plugin/Skill Marketplace** | LobsterAI, CoPaw, PicoClaw, ZeroClaw | Digital employees/capability market (LobsterAI #2726), community skills (CoPaw #5567), module trust (PicoClaw #3383), skill persistence (LobsterAI #2727) |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | NanoBot | Hermes | LobsterAI | ZeroClaw | CoPaw | Others |
|-----------|----------|---------|--------|-----------|----------|-------|--------|
| **Primary Focus** | Gateway/automation reference | Developer UX, provider ecosystem | Desktop/web dashboard, fleet management | Productized app, daily releases, marketplace | Channel adapters, ACP/ZeroCode, security | Beta Hub multi-tenant, Console IDE | Niche/specialized |
| **Target User** | Framework builders, power users | Developers, self-hosters | Teams, fleet operators | End-users, plugin authors | Channel integrators, coders | Teams, Qwen ecosystem | Embedded/IoT (PicoClaw), minimal (NullClaw) |
| **Architecture** | Monolithic gateway + SQLite | Modular adapters + SQLite/JSONL | Electron desktop + gateway + TUI/CLI | Electron app + OpenClaw embedded | Adapter pattern + ACP transcripts | Console + Hub + plugin runtime | Varied |
| **Release Cadence** | Irregular (blocked by P0s) | Sprint-based, no recent stable | Irregular (v0.17/v0.19) | **Daily** (2026.9.14→20) | Pre-release, batch merges | Beta iterations (v2.2.2-beta.3) | Sparse |
| **Extensibility Model** | Native automation, tools, cron | MCP presets, provider plugins, skills | Plugins, connectors, stdlib packages | MCP bridge, artifact skills, marketplace | Channel adapters, ACP tools, ZeroRelay | Skills, plugins, Hub shared skills | MCP only (PicoClaw), none (NullClaw) |
| **Differentiator** | Scale, reference impl, automation depth | Provider breadth, WebUI polish, self-update | Fleet/auth infrastructure, RTL/i18n | **Release velocity**, user-facing product | Security hardening, channel completeness | Hub multi-tenant, Console terminal | Hardware focus (PicoClaw), Rust (IronClaw) |

---

## 6. Community Momentum & Maturity

### Tier 1: **Rapidly Iterating / Productizing** (Daily/weekly releases, user-facing)
- **LobsterAI** — Daily releases, marketplace PR (#2726) largest in ecosystem, 4 versions in 7 days
- **CoPaw** — Active beta, 31-comment Hub roadmap, Console IDE features, community skills
- **NanoBot** — High merge rate (65%), provider/WebUI sprint, self-update CLI in review

### Tier 2: **High Velocity / Stabilizing** (High PR throughput, critical bug backlog)
- **OpenClaw** — Massive throughput but 5 P0 blockers, stabilization phase
- **ZeroClaw** — 50 PRs/24h, 7 XL PRs awaiting review, security/channel focus
- **NanoClaw** — 38 merges in batch cleanup, strong core team, WhatsApp/OpenCode focus

### Tier 3: **Maintenance Mode / Niche** (Low engagement, specific use cases)
- **Hermes Agent** — Critical desktop/auth bugs, active but blocked on infra
- **IronClaw** — Release candidate cut, Dependabot-only activity, no community issues
- **PicoClaw** — Pre-sprint (v0.11.0 design doc), stale UI lag bug (62 days)

### Tier 4: **At Risk / Dormant**
- **Moltis** — Single PR, zero issues/PRs merged
- **NullClaw** — One enhancement, no code activity
- **ZeptoClaw** — No activity

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Reliability > Features** | OpenClaw #90974 ("Stop shipping features"), multiple P0 release-blockers across projects | Invest in observability, chaos testing, and automated regression suites before new capabilities |
| **Local-First Model Stack** | 7/12 projects active on Ollama/llama.cpp; NullClaw #1000 tool-support detection gap | Build model-capability registries; assume heterogeneous local+cloud routing |
| **Protocol Convergence (MCP/ACP)** | 5 projects implementing MCP bridges/ACP transcripts; ZeroClaw pagination PR (#10596) | Design for protocol interop; avoid proprietary session/tool formats |
| **Multi-Tenant / Team Workspaces** | CoPaw Hub (#7318, 31 comments), Hermes fleet, LobsterAI marketplace | Architect for isolation (session/channel/tenant) from day one |
| **Desktop as First-Class Target** | Hermes Electron crashes, CoPaw Windows session loss, LobsterAI macOS entitlements, OpenClaw Windows WAL | Invest in cross-platform process management, code-signing, auto-update early |
| **Skill/Plugin Marketplace Economy** | LobsterAI #2726 (digital employees), CoPaw skills, PicoClaw module trust, ZeroClaw ZeroRelay | Standardize skill manifests, sandboxing, and distribution; prepare for monetization hooks |
| **Self-Update / Zero-Touch Ops** | NanoBot #5817 (nanobot update), LobsterAI targeted updates (#2730), IronClaw release workflow | Build signed, delta-capable updaters with rollback; treat as core feature |
| **Reasoning/Thinking Token Parity** | NanoBot #5833 (reasoning_text events), ZeroClaw #10605 (Anthropic thinking), OpenClaw model fallback | Abstract provider-specific reasoning streams; normalize in gateway layer |

---

**Bottom Line**: The ecosystem is **consolidating around a common substrate** (SQLite persistence, MCP/ACP protocols, local-model routing, plugin marketplaces) while **diverging on product focus** (framework vs. app vs. fleet vs. hardware). Projects that resolve the **stability triad**—resource leaks, session/channel isolation, provider fallback—will capture the next wave of production deployments. OpenClaw's scale makes it the bellwether

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-21

## 1. Today's Overview

NanoBot shows **high velocity** with 52 PRs updated in the last 24 hours (34 merged/closed, 18 open), indicating an active development sprint. No new releases were published today. The project is heavily focused on WebUI polish, provider ecosystem expansion, agent architecture refactoring, and infrastructure hardening. Three new issues were filed, all feature/improvement requests rather than regressions. The merge rate (~65%) and volume suggest maintainers are processing contributions efficiently.

---

## 2. Releases

**No new releases today.** The latest version remains whatever was published prior to this period.

---

## 3. Project Progress — Merged/Closed PRs (34 today)

| PR | Area | Summary |
|----|------|---------|
| [#5830](https://github.com/HKUDS/nanobot/pull/5830) | WebUI / Providers | Added **Baizhi Cloud Agent Toolkit** MCP preset (web search, scrape, extract) |
| [#5832](https://github.com/HKUDS/nanobot/pull/5832) | Providers | Added **Unifically** as built-in OpenAI-compatible provider |
| [#5835](https://github.com/HKUDS/nanobot/pull/5835) | Agent / CI | Fixed response-source runner test (missing `consolidate_history` callback) |
| [#5836](https://github.com/HKUDS/nanobot/pull/5836) | WebUI / Auth | OAuth re-authentication UX: show "Sign in again" on confirmed auth failure, retain state on transient errors |
| [#5823](https://github.com/HKUDS/nanobot/pull/5823) | WebUI | Removed legacy message projection; completed event-protocol migration |
| [#5769](https://github.com/HKUDS/nanobot/pull/5769) | Providers / Resilience | FallbackProvider now retries on NIM-style timeout errors (message-based detection) |
| [#5807](https://github.com/HKUDS/nanobot/pull/5807) | Discord | Clean up reaction state on runtime stop; added regression test |
| [#5605](https://github.com/HKUDS/nanobot/pull/5605) | Email | Only mark `\Seen` on messages actually delivered to agent (not just filtered) |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | Memory / Context | Use API-reported prompt tokens (not local tiktoken) to trigger consolidation |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | WebUI / i18n | Localized agent activity labels across 10 locales; live language switching |

**Themes:** Provider onboarding (Baizhi, Unifically), WebUI modernization (event protocol, i18n, OAuth UX), reliability (fallback logic, token accounting, IMAP state), and CI/test hygiene.

---

## 4. Community Hot Topics

| Item | Type | Engagement | Signal |
|------|------|------------|--------|
| [#5838](https://github.com/HKUDS/nanobot/pull/5838) | PR (open) | — | **API routing fix**: each `session_id` now maps to its own chat (was hardcoded to `default`). Critical for multi-session API consumers. |
| [#5817](https://github.com/HKUDS/nanobot/pull/5817) | PR (open, conflict) | — | **Self-update flows**: stable PyPI update (`nanobot update`), `--dev` source update, pinned Bun runtime bootstrap. Foundational for distribution. |
| [#5811](https://github.com/HKUDS/nanobot/pull/5811) | PR (open, conflict) | — | **Subagent refactor**: execute delegated work as private in-memory child sessions via shared `AgentLoop`. Removes separate runner. Architectural simplification. |
| [#5524](https://github.com/HKUDS/nanobot/issues/5524) | Issue (open) | 1 comment | **WebUI notification sound** on agent turn completion (opt-in, configurable). Quality-of-life for long-running tasks. |
| [#5509](https://github.com/HKUDS/nanobot/issues/5509) | Issue (open) | 1 comment | **Session search FTS5 index**: replace full JSONL scan with SQLite FTS5 mirror for large histories. Performance scaling. |
| [#5833](https://github.com/HKUDS/nanobot/issues/5833) | Issue (open) | 0 comments | **SSE Responses consumer parity**: missing `response.reasoning_text.*` events vs SDK consumer. Blocked by [#5834](https://github.com/HKUDS/nanobot/pull/5834) (fix PR open). |

**Underlying needs:** Multi-session API correctness, painless self-updates, subagent architecture cleanup, WebUI polish (notifications, search), and provider streaming parity.

---

## 5. Bugs & Stability

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **P1** | [#5402](https://github.com/HKUDS/nanobot/issues/5402) (ref: #5403) — Local tiktoken undercounts prompt tokens 30–50%, consolidation never triggers | **Fix merged** ([#5403](https://github.com/HKUDS/nanobot/pull/5403)) | ✅ Merged |
| **P2** | [#5833](https://github.com/HKUDS/nanobot/issues/5833) — SSE Responses consumer drops `response.reasoning_text.*` events (xAI Grok, OpenAI Codex) | **Fix open** ([#5834](https://github.com/HKUDS/nanobot/pull/5834)) | 🔄 Open |
| **P2** | [#5769](https://github.com/HKUDS/nanobot/pull/5769) — FallbackProvider didn't retry on NIM-style timeout errors (message-wrapped) | **Fix merged** | ✅ Merged |
| **P2** | [#5605](https://github.com/HKUDS/nanobot/pull/5605) — Email channel marked `\Seen` before actual delivery | **Fix merged** | ✅ Merged |
| **P2** | [#5807](https://github.com/HKUDS/nanobot/pull/5807) — Discord reaction state leaked on stop | **Fix merged** | ✅ Merged |
| **P2** | [#5829](https://github.com/HKUDS/nanobot/pull/5829) — TUI Markdown links not clickable (upgrade `@opentui/core`) | **Fix open** | 🔄 Open |

**Assessment:** Critical token-accounting bug resolved. Streaming parity gap for reasoning text has a fix in review. Channel-level state leaks (Discord, Email) addressed. TUI regression has a targeted dependency upgrade.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood (Next Version) |
|---------|--------|---------------------------|
| **WebUI notification sound** (opt-in, per-turn) | [#5524](https://github.com/HKUDS/nanobot/issues/5524) | 🟡 Medium — "good first issue", clear scope |
| **Session search via SQLite FTS5** | [#5509](https://github.com/HKUDS/nanobot/issues/5509) | 🟡 Medium — async index build, performance win for power users |
| **Self-update CLI** (`nanobot update`, `--dev`) | [#5817](https://github.com/HKUDS/nanobot/pull/5817) | 🟢 High — conflicted but foundational; pinned Bun runtime reduces deps |
| **Subagent execution via private sessions** | [#5811](https://github.com/HKUDS/nanobot/pull/5811) | 🟢 High — architectural cleanup, removes duplicate runner |
| **JEV shell safeguard (OpenRouter Decisions API)** | [#5815](https://github.com/HKUDS/nanobot/pull/5815), [#5825](https://github.com/HKUDS/nanobot/pull/5825) | 🟡 Medium — opt-in, reusable client added; depends on policy design |
| **Baizhi MCP preset** | [#5830](https://github.com/HKUDS/nanobot/pull/5830) | ✅ Done — merged today |
| **Unifically provider** | [#5832](https://github.com/HKUDS/nanobot/pull/5832) | ✅ Done — merged today |
| **WebUI completed-turn UI noise reduction** | [#5831](https://github.com/HKUDS/nanobot/pull/5831) | 🟡 Medium — UX polish, hover/focus controls |
| **OAuth re-auth actionable UX** | [#5836](https://github.com/HKUDS/nanobot/pull/5836) | ✅ Done — merged today |
| **Microsoft OAuth for Office365/Outlook** | [#5609](https://github.com/HKUDS/nanobot/pull/5609) | 🟡 Medium — enterprise-relevant, open since Aug 30 |

**Predictions:** Self-update CLI, subagent refactor, and provider streaming parity (#5834) are the highest-impact items likely to land soon. WebUI notification sound and FTS5 search are scoped "good first issue" / performance tasks that may wait for contributor bandwidth.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence |
|------------------------|----------|
| **Long-running agent tasks invisible in WebUI** — users don't know when turn completes | [#5524](https://github.com/HKUDS/nanobot/issues/5524): "Need to refresh page or stare at screen" |
| **Session search too slow with hundreds of conversations** | [#5509](https://github.com/HKUDS/nanobot/issues/5509): full JSONL scan per query |
| **API consumers broken by hardcoded `chat_id="default"`** | [#5838](https://github.com/HKUDS/nanobot/pull/5838): all sessions routed to `api:default` |
| **Self-update requires manual git/PyPI steps** | [#5817](https://github.com/HKUDS/nanobot/pull/5817): adds `nanobot update` + `--dev` |
| **Subagent architecture duplication** | [#5811](https://github.com/HKUDS/nanobot/pull/5811): separate runner + prompt path |
| **Reasoning text missing in xAI Grok / Codex streams** | [#5833](https://github.com/HKUDS/nanobot/issues/5833): SSE consumer parity gap |
| **Email IMAP marks read prematurely** | [#5605](https://github.com/HKUDS/nanobot/pull/5605): messages marked `\Seen` before delivery |
| **Discord emoji reactions leak on restart** | [#5807](https://github.com/HKUDS/nanobot/pull/5807): state not cleaned on stop |
| **TUI Markdown links not clickable** | [#5829](https://github.com/HKUDS/nanobot/pull/5829): regression in `@opentui/core` |
| **Enterprise email auth (Office365) requires OAuth2** | [#5609](https://github.com/HKUDS/nanobot/pull/5609): basic auth deprecated |

**Sentiment:** Users are hitting scaling limits (search, multi-session API) and polish gaps (notifications, reasoning streams, OAuth UX). Contributors are responding with targeted fixes and architectural cleanup. No major dissatisfaction signals—mostly "paper cuts" and scale bottlenecks.

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5609](https://github.com/HKUDS/nanobot/pull/5609) — Microsoft delegated OAuth for Office365/Outlook | 22 days (opened 2026-08-30) | Enterprise blocker; basic auth deprecated. Large, security-sensitive PR. |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) — Use API-reported tokens for consolidation | 36 days (opened 2026-08-16) | **P1 bug fix merged today** — was long-standing context window miscalculation. |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) — WebUI agent activity localization | 39 days (opened 2026-08-13) | 10-locale i18n, live switching. Merged today after long review. |
| [#5817](https://github.com/HKUDS/nanobot/pull/5817) — Self-update flows (stable + dev) | 2 days, **conflicted** | Foundational for distribution; conflicts suggest base drift. Needs rebase/review. |
| [#5811](https://github.com/HKUDS/nanobot/pull/5811) — Subagent refactor via private sessions | 3 days, **conflicted** | Architectural simplification; conflicts indicate touch on core agent loop. |
| [#5815](https://github.com/HKUDS/nanobot/pull/5815) — JEV shell safeguard | 3 days, **conflicted** | Security-relevant opt-in; depends on #5825 (JEV client, open). |
| [#5769](https://github.com/HKUDS/nanobot/pull/5769) — NIM timeout fallback | 7 days | **Merged today** — was open a week; provider resilience improvement. |

**Action items:** Resolve conflicts on #5817, #5811, #5815 (core architecture PRs). Review #5609 (enterprise OAuth) for security/compliance. Monitor #5834 (reasoning text parity) for quick merge.

---

*Generated from GitHub data as of 2026-09-21. Links point to live items on github.com/HKUDS/nanobot.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-21

## 1. Today's Overview
Hermes Agent shows high development velocity with **50 PRs updated** and **7 issues updated** in the last 24 hours, though no new releases were cut. The project is in active maintenance mode with a strong focus on desktop stability (Electron crashes on Linux/macOS), authentication infrastructure (Cloudflare/Auth0 breakage), security hardening, and cross-platform compatibility (Windows Defender false positives, WSL detection). The 6 merged/closed PRs indicate steady integration, while 44 open PRs suggest a healthy pipeline of fixes and features undergoing review. Critical production issues — desktop SIGTRAP crashes and dashboard auth failure — dominate maintainer attention.

## 2. Releases
**No new releases today.** The latest version remains v0.17.0 (desktop) / v0.19.0 (agent) per issue context.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Status |
|----|------|---------|--------|
| [#117858](https://github.com/NousResearch/hermes-agent/pull/117858) | Bug fix (gateway/WhatsApp) | Suppress first-contact setup notice for untrusted inbound contacts; only deliver to configured admins via `allow_admin_from` policy. Fixes #117800. | **CLOSED** |
| *5 other PRs merged/closed* | Not in top-20 comment list | The overview reports 6 total merged/closed; the remaining 5 are not shown in the provided PR list (likely lower-comment routine merges). | Merged/Closed |

**Key advancement**: Gateway message-delivery hardening for WhatsApp/Telegram-style inbound channels — reduces noise and aligns with admin-authorization model.

## 4. Community Hot Topics
### Most Discussed Issues
1. **[#100573](https://github.com/NousResearch/hermes-agent/issues/100573)** — *Desktop: recurring SIGTRAP from `string_view::substr` in Electron 40.10.2 on Linux* (10 comments, P1)  
   **Underlying need**: Linux/Wayland users on Arch experience hard crashes in Electron main process; blocking daily driver usage. Root cause: out-of-range `std::string_view::substr()` in libc++ — likely Electron/Chromium upstream but Hermes must mitigate or upgrade.

2. **[#69247](https://github.com/NousResearch/hermes-agent/issues/69247)** — *Electron crash: `ares_dns_rr_get_ttl` SIGTRAP on macOS 26* (2 comments, P3)  
   **Underlying need**: macOS 26 (beta) + Electron 40 compatibility gap; DNS resolver (c-ares) triggers `EXC_BREAKPOINT`. Affects early adopters on Apple Silicon.

3. **[#117856](https://github.com/NousResearch/hermes-agent/issues/117856)** & **[#117861](https://github.com/NousResearch/hermes-agent/issues/117861)** — *Cloudflare 1014: CNAME Cross-User Banned on Auth0 domain* (1 comment each, P2)  
   **Underlying need**: **Dashboard login completely broken** — DNS/CDN misconfiguration at `nous-forge-prod.us.auth0.com` blocks all portal authentication. Infrastructure-level, not code.

### Most Active PRs (by inference — comment counts not provided)
- **[#111008](https://github.com/NousResearch/hermes-agent/pull/111008)** — Unified connector setup flow across Desktop/TUI/CLI (feat, ci-reviewed)  
- **[#113303](https://github.com/NousResearch/hermes-agent/pull/113303)** — Desktop notification card clamp + rehydration message loss fix (P2)  
- **[#112035](https://github.com/NousResearch/hermes-agent/pull/112035)** — Full Persian/RTL localization + visual regression suite (feat, P3)

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical (P1)** | [#100573](https://github.com/NousResearch/hermes-agent/issues/100573) | Desktop SIGTRAP crash on Linux/Wayland (Electron 40.10.2) — `string_view::substr` OOB in libc++. Recurring, user-facing hard exit. | No PR linked |
| **Critical (P2)** | [#117861](https://github.com/NousResearch/hermes-agent/issues/117861) / [#117856](https://github.com/NousResearch/hermes-agent/issues/117856) | Dashboard auth broken: Cloudflare Error 1014 on Auth0 CNAME. All login flows fail. | No PR (infra fix needed) |
| **High (P2)** | [#117867](https://github.com/NousResearch/hermes-agent/issues/117867) | Desktop: newest turn (user prompt + assistant reply) vanishes on completion when warm-resume transcript gate held. Data intact in DB, UI loss only. | Likely addressed by [#113303](https://github.com/NousResearch/hermes-agent/pull/113303) (rehydration fix) |
| **High (P2)** | [#117839](https://github.com/NousResearch/hermes-agent/pull/117839) (PR) | Delegated child loses `requested_provider="custom:<name>"` → vision routing broken for named custom providers. | **PR open** |
| **Medium (P3)** | [#117848](https://github.com/NousResearch/hermes-agent/issues/117848) | `redact_sensitive_text` misses Discord bot tokens — first-class Discord integration ships without token redaction. | No PR |
| **Medium (P3)** | [#69247](https://github.com/NousResearch/hermes-agent/issues/69247) | macOS 26 + Electron 40: `ares_dns_rr_get_ttl` SIGTRAP + GIL event loop freeze. | No PR |
| **Medium (P2)** | [#117859](https://github.com/NousResearch/hermes-agent/pull/117859) (PR) | Windows: unsigned `hermes.exe` launchers trigger Defender quarantine on every `uv pip install -e .`. | **PR open** |
| **Low (P3)** | [#117818](https://github.com/NousResearch/hermes-agent/issues/117818) | Security hardening gap: `write_file`/`patch` not covered by home-tree exemption despite comment claiming so. | No PR |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Unified connector setup UX** (Desktop/TUI/CLI) | [#111008](https://github.com/NousResearch/hermes-agent/pull/111008) (ci-reviewed) | **High** — PR is ci-reviewed, touches all clients |
| **Plugin uninstall in Desktop hub** | [#117855](https://github.com/NousResearch/hermes-agent/pull/117855) | **High** — community-requested, small scope |
| **Machine-facts stdlib package (`hermes_platform.host`)** | [#117863](https://github.com/NousResearch/hermes-agent/pull/117863) (NS-920) | **High** — foundational, first of stacked PRs |
| **Persian/RTL full localization + visual regression** | [#112035](https://github.com/NousResearch/hermes-agent/pull/112035) | **Medium** — large scope, needs decision |
| **Home Assistant session-integrated delivery** | [#112136](https://github.com/NousResearch/hermes-agent/pull/112136) | **Medium** — builds on prior work, niche |
| **Auto-approval allowlist hook firing** | [#117866](https://github.com/NousResearch/hermes-agent/pull/117866) | **Medium** — plugin observability gap |
| **Fail-fast deny for dangerous commands in fleet delegations** | [#117857](https://github.com/NousResearch/hermes-agent/pull/117857) | **Medium** — automation safety |
| **Gate side-effecting tools on fallback routes** | [#117714](https://github.com/NousResearch/hermes-agent/pull/117714) (needs-decision) | **Low** — requires design decision |

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Desktop instability on Linux** | #100573: "repeatedly terminates with SIGTRAP… three times in…" | Daily driver unusable for Arch/Wayland users |
| **Dashboard login broken** | #117861: "redirect to Auth0 fails at DNS/CDN layer before…" | Zero dashboard access for all users |
| **Message loss in Desktop UI** | #117867: "newest turn vanishes at completion when warm-resume transcript gate held" | Data integrity fear (though DB intact) |
| **Windows Defender false positives** | #117859: "every reinstall hands Defender a new unsigned binary to quarantine" | Install/update friction on Windows |
| **Discord token leakage risk** | #117848: "project ships first-class Discord integration" but no redaction | Security/compliance concern |
| **Plugin management UX** | #117855: community request "i can't uninstall plugins from the hub" | Workflow gap for power users |

**Positive signals**: Active PR reviews (ci-reviewed tags), stacked PR trains (NS-920), and cross-client consistency work (#111008) show maintainer investment in polish.

## 8. Backlog Watch — Stale/High-Impact Items Needing Attention
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **[#100573](https://github.com/NousResearch/hermes-agent/issues/100573)** | 21 days (created 2026-09-01) | **Open, P1, 10 comments** | Linux desktop crashes — highest severity, no fix PR, affects core user base |
| **[#69247](https://github.com/NousResearch/hermes-agent/issues/69247)** | 61 days (created 2026-07-22) | **Open, P3, needs-repro** | macOS 26 beta crash; will become P1 on release. Needs Electron upgrade or c-ares patch. |
| **[#117714](https://github.com/NousResearch/hermes-agent/pull/117714)** | 0 days (created today) | **Open, needs-decision** | Gates irreversible tools on provider fallback — critical safety design decision pending. |
| **[#112035](https://github.com/NousResearch/hermes-agent/pull/112035)** | 6 days | **Open, P3** | Massive i18n PR (Persian/RTL + visual regression) — needs maintainer bandwidth for review. |
| **[#111008](https://github.com/NousResearch/hermes-agent/pull/111008)** | 7 days | **Open, ci-reviewed** | Unified connector UX — blocked on final review/merge despite ci-reviewed status. |

---

**Project Health Assessment**: 🟡 **Moderate Risk**  
- **Strengths**: High PR throughput, cross-platform focus, security hardening, ci-reviewed features.  
- **Risks**: Two critical production bugs (Linux desktop crash, dashboard auth) with no fix PRs; Windows install friction; macOS 26 compatibility debt.  
- **Recommendation**: Prioritize #100573 (Linux crash) and #117861 (auth infra) for immediate hotfix; merge ci-reviewed #111008/#117855 to unblock UX improvements; schedule decision on #117714 (fallback safety).

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-21

## 1. Today's Overview
PicoClaw shows steady maintenance activity with **9 total updates** (4 issues, 5 PRs) in the last 24 hours, though no new release was cut. Two PRs were closed/merged (documentation updates), while three feature/fix PRs remain open awaiting review. The issue tracker carries three stale-but-open items (Web UI lag, IRC multiline, OpenAI-compatible providers) and one closed feature request for OpenCode Go session headers. Overall velocity is modest; the project is in a **pre-sprint polish phase** (v0.11.0 design doc just landed) with focus on protocol integrations and UI responsiveness.

## 2. Releases
**No new releases** in the last 24 hours. The latest published version remains **v0.3.1** (referenced in Issue #3281).

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#3367](https://github.com/sipeed/picoclaw/pull/3367) | `docs` | Adds Pilot MCP setup example, health-check command, and clarifies no-API-key requirement to native MCP CLI quick-start. | Improves onboarding for MCP users; zero-code change. |
| [#3383](https://github.com/sipeed/picoclaw/pull/3383) | `docs` | Commits v0.11.0 sprint plan (Tracks 67–75): agentic Web3, module trust, ACP/mesh depth, ordering DAG, risk register, and per-track checklists. | **Major roadmap signal** — defines next release scope; creates `.todo.md` for execution tracking. |

## 4. Community Hot Topics (Most Comments / Reactions)
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Bug | 13 | 2 | **Web UI input lag** with moderate chat history — UX regression affecting daily drivers. |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Feature | 13 | 0 | **IRCv3 multiline message assembly** — protocol correctness for long IRC messages. |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | Feature | 4 | 0 | **OpenAI-compatible provider abstraction** — enable self-hosted routers (e.g., 9Router). |
| [#3369](https://github.com/sipeed/picoclaw/issues/3369) | Feature | 2 | 2 | **OpenCode Go `x-opencode-session` header** — session tracking for OpenCode Go (closed, may resurface). |

**Analysis**: The Web UI lag (#3281) is the only *user-facing regression* with strong engagement; IRC multiline (#3287) has a matching WIP PR (#3354). OpenAI-compatible providers (#3366) reflects growing demand for **BYOM (bring-your-own-model) routing** — likely to land in v0.11.0 given the sprint’s “module trust” track.

## 5. Bugs & Stability — Reported Today
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High (UX regression)** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI chat input lag with history | Open, stale | No |
| **Medium (protocol)** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC long-message splitting | Open, stale | **Yes — [#3354](https://github.com/sipeed/picoclaw/pull/3354)** (open, implements `draft/multiline`) |
| **Low (animation leak)** | Tool feedback animations unbounded | Fixed in [#3353](https://github.com/sipeed/picoclaw/pull/3353) (open) | PR adds 5-min cap + error stop |

No crashes or data-loss bugs reported today.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for v0.11.0 | Rationale |
|---------|--------|------------------------|-----------|
| OpenAI-compatible provider | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | **High** | Aligns with “module trust” track; low implementation risk (copy OpenAI provider). |
| IRCv3 multiline receive | [#3287](https://github.com/sipeed/picoclaw/issues/3287) + [#3354](https://github.com/sipeed/picoclaw/pull/3354) | **High** | PR already written; protocol compliance. |
| OpenCode Go session header | [#3369](https://github.com/sipeed/picoclaw/issues/3369) | Medium | Closed but 👍2; may reopen if upstream changes. |
| Pilot MCP quick-start | [#3367](https://github.com/sipeed/picoclaw/pull/3367) | **Done** | Merged — docs only. |
| Agentic Web3 / ACP mesh | [#3383](https://github.com/sipeed/picoclaw/pull/3383) | **Committed** | Explicitly scoped in v0.11.0 sprint plan. |

## 7. User Feedback Summary
- **Pain point**: Web UI becomes unusably laggy after “a little bit long” history (#3281) — impacts power users most.  
- **Protocol gaps**: IRC users lose message cohesion on long payloads (#3287); OpenCode Go users need custom header (#3369).  
- **Extensibility demand**: Strong interest in **generic OpenAI-compatible provider** to plug self-hosted routers (#3366).  
- **Documentation appetite**: Pilot MCP example merged quickly (#3367), suggesting users struggle with MCP setup.  
- **Sentiment**: Mixed — active contributors (linhongyu510, sarff, TeoSlayer) pushing fixes, but stale tags on top issues indicate **review bandwidth bottleneck**.

## 8. Backlog Watch — Stale / Unanswered Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI lag | 62 days | High user impact; no fix PR; likely requires virtualized list or input memoization. |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC multiline | 61 days | PR [#3354](https://github.com/sipeed/picoclaw/pull/3354) ready for review — unblocks IRC power users. |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) Bound tool feedback animations | 21 days | Small, low-risk fix; prevents animation leaks. |
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) OAuth scope fix | 9 days | Security/auth correctness; uses configured scopes instead of hardcoded defaults. |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) OpenAI-compatible provider | 17 days | Strategic extensibility; needs design decision (config schema, priority vs. built-ins). |

---

**Health Indicator**: 🟡 **Caution** — useful features shipping (IRC multiline, OAuth fix, MCP docs) but **core UI regression (#3281) untouched for 2+ months** and review queue growing. Next sprint (v0.11.0) is well-scoped; clearing the stale backlog this cycle would restore momentum.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-21

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 38 PRs merged/closed in the last 24 hours, suggesting a coordinated batch cleanup or release-prep cycle. Only 2 PRs remain open (#3420 macOS statusbar, #3463 opencode provider), and a single new bug report (#3858) highlights a WhatsApp UX gap: agents cannot see participant display names in groups, only raw JIDs. No new releases were cut. The project appears healthy, with active core-team engagement and systematic backlog reduction.

## 2. Releases
**None** — No new versions published today. The last tagged release remains v2.3.0 (referenced in #3858).

## 3. Project Progress (Merged/Closed PRs — 2026-09-20)
A large wave of fixes and improvements landed yesterday, spanning adapters, skills, CLI, CI, and agent runtime:

| Area | Key PRs | Impact |
|------|---------|--------|
| **WhatsApp adapter** | #2565 (group @-mentions via `contextInfo.mentionedJid`), #746 (prevent restart hammering on auth failure) | Reliability & mention fidelity |
| **OpenCode provider** | #2152 (kill server process group, configurable `IDLE_TIMEOUT_MS`), #3346 (recover resumed sessions that idle without work) | Stability for long-running coding agents |
| **Agent runtime / sessions** | #700 (rotate oversized JSONL sessions to prevent container timeouts), #701 (inject date/time context into all prompts), #2327 (inject destination reminder after SDK auto-compaction) | Context integrity & timeout prevention |
| **Skills framework** | #2309 (replace `sqlite3` CLI with `better-sqlite3` wrapper), #2290 (canonical SQL in `SKILL.md`), #2288 (parse SQLite timestamps as UTC), #2322 (Karpathy LLM wiki v2 compat), #706 (icloud-tools skill: CalDAV/CardDAV/IMAP/SMTP) | Developer experience, correctness, new capability |
| **Chat SDK / channels** | #2265 (support `send_card` display cards in bridge), #2328 (default reply destination to message origin in multi-destination groups) | Rich UI & routing correctness |
| **CLI & install** | #2416 (provision companion rows on `ncl groups/wirings create`), #2356 (install `~/.local/bin/ncl` symlink on upgrade), #3420 (macOS statusbar slug-aware labels — *still open*) | Operational smoothness |
| **CI / repo hygiene** | #2402 (workflow guards after repo rename), #2287 (probe correct OneCLI health endpoint) | Build reliability |

## 4. Community Hot Topics
| Item | Type | Comments | Signals |
|------|------|----------|---------|
| **#3858** [bug] Agent never sees sender display names from native adapters (WhatsApp shows only the JID) | Issue | 0 | **Critical UX gap** — agents can’t address users by name in groups; blocks personalization & trust. No PR yet. |
| **#3420** fix(add-macos-statusbar): make Swift code and plist labels slug-aware | PR (open) | — | Core-team tagged; macOS install slug mismatch breaks statusbar monitoring. |
| **#3463** opencode provider: fall back to `message.part.delta` text | PR (open) | — | Fixes race where final assistant text snapshot missed before `session.idle` (~78 ms margin). |

*No high-comment threads today; the batch closures were mostly routine merges.*

## 5. Bugs & Stability
| Severity | Issue / PR | Status | Fix PR? |
|----------|------------|--------|---------|
| **High** | #3858 — WhatsApp group messages lack display names (only JID) | Open | No |
| **Medium** | #2985 (tracked by #3463) — OpenCode final text snapshot race | Open | **Yes (#3463)** |
| **Medium** | #748 (tracked by #746) — WhatsApp auth-failure restart hammering | Closed | **Yes (#746 merged)** |
| **Medium** | #697 (tracked by #700) — Oversized JSONL sessions cause container timeouts | Closed | **Yes (#700 merged)** |
| **Low** | #698 (tracked by #701) — Missing date/time context in agent prompts | Closed | **Yes (#701 merged)** |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **WhatsApp display-name resolution** | #3858 (new bug) | **High** — core UX, affects all group interactions |
| **macOS statusbar slug-aware labels** | #3420 (core-team) | **High** — blocks polished macOS install experience |
| **OpenCode delta-text fallback** | #3463 (race fix) | **High** — stability for coding agents |
| **iCloud productivity suite (CalDAV/CardDAV/IMAP/SMTP)** | #706 (skill) | **Medium** — merged, expands agent tooling |
| **Rich card rendering (`send_card`)** | #2265 (merged) | **Done** — enables interactive UI in Chat SDK channels |

## 7. User Feedback Summary
- **Pain point:** WhatsApp group participants are indistinguishable to the agent (“every message reaches the model with the phone JID as the sender and no display name” — #3858). This breaks natural conversation flow and personalization.
- **Reliability concerns:** Historical issues with WhatsApp reconnection storms (#748), OpenCode session races (#2985), and session-size timeouts (#697) indicate users run long-lived, multi-channel agents in production.
- **Positive adoption:** Merged skills (icloud-tools, Karpathy wiki) and card support show demand for **rich, personal-productivity agents** beyond chat.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| **#3858** WhatsApp display names | 1 day | New, high-impact UX bug; no assignee/PR yet. |
| **#3420** macOS statusbar slug-aware | 32 days | Core-team tagged; blocks clean v2 installs on macOS. |
| **#3463** OpenCode delta fallback | 29 days | Race condition fix; improves coding-agent reliability. |
| **#706** icloud-tools skill | 201 days | Merged but large surface; watch for follow-up bugs. |
| **#2565** WhatsApp @-mentions | 124 days | Merged; verify mention parsing in real groups. |

---

**Health Indicator:** 🟢 **Strong** — systematic backlog burn-down, active core team, clear prioritization of adapter reliability and agent context fidelity. Next milestone likely v2.3.1 or v2.4 with WhatsApp display-name fix and macOS polish.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-21

## 1. Today's Overview
NullClaw saw minimal activity in the past 24 hours with only **one open issue** (#1000) and **zero pull requests or releases**. The sole activity is an enhancement request addressing Ollama model compatibility notifications, indicating users are encountering silent failures when models lack tool-calling support. No code changes, merges, or version bumps occurred today. Project health appears **low-velocity** with no active development momentum visible in the tracked window.

## 2. Releases
**No new releases** published today. The latest release information is unavailable in the provided data.

## 3. Project Progress
**No merged or closed PRs** in the last 24 hours. No feature advancements or bug fixes were delivered today.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| **#1000** | Enhancement | 1 comment, 0 reactions | [nullclaw/nullclaw#1000](https://github.com/nullclaw/nullclaw/issues/1000) |

**Analysis**: The only active discussion centers on **improving error visibility for Ollama tool-support mismatches**. The reporter had to use Wireshark to diagnose the root cause, indicating current error handling surfaces only a generic "adapter error" without actionable guidance. This reveals a **developer-experience gap**: users integrating local LLMs via Ollama need clear, early validation that the selected model supports function/tool calling before runtime failures occur.

## 5. Bugs & Stability
**No bug reports, crashes, or regressions** filed today. The single open item (#1000) is an enhancement, not a defect. No fix PRs exist.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Signal Strength |
|---------|--------|-----------------|
| **Ollama model tool-support pre-check / descriptive notification** | [#1000](https://github.com/nullclaw/nullclaw/issues/1000) | ★★★☆☆ (Single user, high diagnostic effort reported) |

**Prediction**: This enhancement is **high-likelihood for the next minor release** because:
- It addresses a silent-failure mode that blocks onboarding
- Fix is likely localized (validation + error message)
- Aligns with "developer experience" polish typical in v0.x → v1.0 maturation

## 7. User Feedback Summary
**Pain Point**: *"It's hard to understand why it is not working. I've used Wireshark to get it."* — @aaafgcfg ([#1000](https://github.com/nullclaw/nullclaw/issues/1000))

**Use Case**: User attempts to use an Ollama model that **does not support tool/function calling**, but receives only a generic "adapter error" with no explanation.  
**Satisfaction**: **Negative** — current UX forces network-level debugging.  
**Implicit Need**: Fail-fast validation at model-selection or request-init time with a human-readable message (e.g., *"Selected model 'xyz' does not support tool calling. Please choose a model with function-calling support."*).

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| **[#1000] Ollama incompatibility notification** | 1 day | Open, 1 comment | **High leverage UX fix**: prevents silent failures for all Ollama users. Low implementation cost, high user-impact. No maintainer response yet. |

> **Maintainer Action Suggested**: Acknowledge #1000, confirm scope (validation at model-load vs. first tool-call), and assign or label `good first issue` if appropriate.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-21

## 1. Today's Overview
IronClaw showed **maintenance-focused activity** over the past 24 hours with zero new issues and eight pull requests — four merged/closed and four remaining open. The merged work centers on cutting a release candidate (`1.4.1-rc.1`) and fixing a Google OAuth activation bug that affected deployments using administrator-configured OAuth clients. The open PRs are exclusively automated Dependabot dependency updates across Rust crates, GitHub Actions, WASM tooling, and the Tokio ecosystem. No community discussions, bug reports, or feature requests surfaced today, indicating a quiet period for user-facing feedback.

## 2. Releases
**No new stable releases published today.**  
A release candidate **`1.4.1-rc.1`** was prepared via [#8105](https://github.com/nearai/ironclaw/pull/8105) (merged). This version bump unblocks the “Cut Ironclaw Release” workflow so the tag `ironclaw-v1.4.1-rc.1` can be applied on the merge commit. No changelog or breaking-change notes were included in the PR; expect the formal release notes to accompany the eventual stable `1.4.1`.

## 3. Project Progress
| PR | Status | Summary |
|----|--------|---------|
| [#8105](https://github.com/nearai/ironclaw/pull/8105) | **Merged** | Version bump to `1.4.1-rc.1` to satisfy release workflow tagging requirements. |
| [#8102](https://github.com/nearai/ironclaw/pull/8102) | **Merged** | Fixed Gmail/Google Calendar extension activation when Google OAuth client is configured via the Web UI (administrator configuration) instead of environment variables. Root cause: provider-instance readiness check ran before admin config was applied. |
| [#8099](https://github.com/nearai/ironclaw/pull/8099) | **Closed** | Dependabot batch update of 25 Rust crates (superseded by newer #8104). |
| [#8079](https://github.com/nearai/ironclaw/pull/8079) | **Closed** | Dependabot batch update of 6 GitHub Actions (superseded by newer #8103). |

**Net advancement:** One user-visible bug fix (OAuth activation) and a release candidate cut. Dependency housekeeping dominates the remainder.

## 4. Community Hot Topics
**None today.**  
- Zero issues opened/updated.  
- All PRs have `Comments: undefined` and `👍: 0` — no human discussion or reactions recorded.  
- The only “active” conversations are the two merged PRs, both authored by core maintainer `henrypark133`.

*Interpretation:* The project is currently in a low-engagement window; community surface area is limited to automated bot traffic and internal release engineering.

## 5. Bugs & Stability
| Severity | Bug | Fix PR | Status |
|----------|-----|--------|--------|
| **Medium** | Gmail/Google Calendar extensions fail to activate when Google OAuth client is configured via Web UI (admin config) rather than env vars. OAuth flow completes but activation errors with `Provider...` readiness failure. | [#8102](https://github.com/nearai/ironclaw/pull/8102) | **Fixed & merged** |

No new crashes, regressions, or security advisories reported in the last 24 h.

## 6. Feature Requests & Roadmap Signals
**No feature requests or roadmap discussions captured today.**  
The only forward-looking signal is the `1.4.1-rc.1` cut, suggesting a patch release is imminent. Based on the merged fix, the next stable will likely contain:
- OAuth admin-config activation fix (already merged)
- Whatever additional commits land before `1.4.1` final

No user-driven feature asks are visible in the current data set.

## 7. User Feedback Summary
**No direct user feedback (issues, comments, reactions) recorded in the last 24 h.**  
The sole user-impacting change — the OAuth activation fix — originated from an internal diagnosis (“could not be activated on any deployment whose operator configured the Google OAuth client through the Web UI”). No external reporter is cited, so pain-point validation remains implicit.

## 8. Backlog Watch
| Item | Age | Type | Why It Needs Attention |
|------|-----|------|------------------------|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | **29 days** | Dependabot (WASM group: `wasmtime`, `wit-component`, `wit-parser`) | Long-open automated PR; WASM runtime upgrades can introduce subtle semantics changes. Requires maintainer review/testing before merge. |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | **15 days** | Dependabot (Tokio ecosystem: `tower-http`, `tokio-tungstenite`) | Networking stack updates; should be validated for compatibility with IronClaw’s HTTP/WebSocket layers. |
| [#8104](https://github.com/nearai/ironclaw/pull/8104) | **1 day** | Dependabot (29 Rust crate updates) | Large batch; includes `uuid`, `base64`, `rust_decimal` — widely used crates. Merge after CI passes. |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | **1 day** | Dependabot (8 GitHub Actions updates) | Includes major `actions/setup-node` bump `4 → 7`; verify workflow compatibility. |

**Recommendation:** Prioritize review of the two older Dependabot PRs (#7834, #8078) to prevent backlog rot, then process the fresh batches (#8104, #8103) in CI.

---

*Data sourced from GitHub REST API snapshots for `nearai/ironclaw` as of 2026-09-21 00:00 UTC. All links point to live GitHub resources.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-21

---

## 1. Today's Overview

LobsterAI continues its rapid, daily-release cadence with **4 versions shipped in the last 7 days** (2026.9.14 → 2026.9.20). In the past 24 hours alone, **15 PRs were updated** (8 merged/closed, 7 open) and **3 issues refreshed** (1 closed, 2 stale but still open). The merged PRs span critical stability fixes (Windows gateway recovery, SQLite readonly files, OpenClaw repair), new user-facing features (passkey/WebAuthn in the in-app browser, scheduled-task Weixin casing fix), and a sizable feature PR adding **digital employees, expert teams, and a capability marketplace** (#2726). The project shows high velocity, strong maintainer responsiveness, and a clear push toward extensibility (OpenClaw, MCP, plugin marketplace) and platform hardening (macOS entitlements, Windows process management).

---

## 2. Releases

| Version | Date | Key Changes | Breaking / Migration Notes |
|---------|------|-------------|----------------------------|
| **2026.9.20** | 2026-09-20 | • Sub-agent session visibility  <br>• **Passkey/WebAuthn support** for in-app agent browser (macOS entitlements, preload bridge, i18n) <br>• Scheduled task improvements | New `browserPasskeys` module; macOS entitlements added — rebuild required for packaged app. |
| **2026.9.17** | 2026-09-17 | • OpenClaw shared-state schema migration before startup repair <br>• Repair snapshot rollback & agent media migration handling | Schema migration runs automatically on first launch after upgrade. |
| **2026.9.15** | 2026-09-15 | • OpenClaw compatibility repair <br>• xAI auth credentials migrated to canonical SQLite store <br>• Recovery fixes | xAI credentials moved — no user action needed; repair flows hardened. |
| **2026.9.14** | 2026-09-14 | • OpenClaw upgraded to v2026.8.1 <br>• Markdown editing support <br>• Improved artifact workflows | OpenClaw version bump may change internal APIs; plugin authors should re-test. |

> **No explicit breaking changes flagged**, but the OpenClaw upgrade and schema migrations mean **plugin developers and self-hosters should verify custom integrations** after updating.

---

## 3. Project Progress (Merged/Closed PRs — 2026-09-20 → 2026-09-21)

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2731](https://github.com/netease-youdao/LobsterAI/pull/2731) | plugins, main | Fix `nsp-clawguard` ESM startup crash: add `__filename`/`__dirname` via `fileURLToPath` | Stops gateway restart loop on Windows/non-ASCII paths. |
| [#2730](https://github.com/netease-youdao/LobsterAI/pull/2730) | renderer, main | Updater: optional targeted update candidates (signed-in sessions) | Enables staged rollouts / A/B testing of updates. |
| [#2729](https://github.com/netease-youdao/LobsterAI/pull/2729) | main, openclaw | Windows gateway exit recovery & repair startup fix | Eliminates “process did not exit after SIGKILL” false positives. |
| [#2728](https://github.com/netease-youdao/LobsterAI/pull/2728) | main, openclaw | Fix OpenClaw SQLite readonly result file | Prevents corruption when DB opened read-only. |
| [#2725](https://github.com/netease-youdao/LobsterAI/pull/2725) | release | Release/2026.9.18 (rolled into 2026.9.20) | Packaging & CI/CD consolidation. |
| [#2724](https://github.com/netease-youdao/LobsterAI/pull/2724) | renderer, main, cowork, artifacts | Remove background jobs feature (store, IPC, UI, i18n) | Simplifies codebase; removes unused complexity. |
| [#2723](https://github.com/netease-youdao/LobsterAI/pull/2723) | renderer, build, main, macos, artifacts | **Passkey/WebAuthn for in-app browser** (service, observer, preload, entitlements) | Major security/UX upgrade for agent web auth. |
| [#2722](https://github.com/netease-youdao/LobsterAI/pull/2722) | renderer, main | Scheduled-task: preserve Weixin target casing, explain resend rejection | Fixes Weixin proactive-message delivery failures. |

**Net effect:** 8 merged PRs = **stability hardening (Windows, SQLite, gateway), security (WebAuthn), and developer experience (updater, schema migration)**. The background-job removal signals a deliberate scope reduction to focus on core agent workflows.

---

## 4. Community Hot Topics

| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#2726](https://github.com/netease-youdao/LobsterAI/pull/2726) | PR (OPEN) | 0 comments, but **largest diff** (+digital employees, expert teams, capability market, MCP tool exposure) | **Marketplace / multi-agent productization** — community wants a no-code way to compose, share, and monetize agent skills. |
| [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) | PR (OPEN) | 0 comments, fixes [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) | **Plugin hook persistence across sync/restart** — critical for OpenClaw plugin authors. |
| [#2721](https://github.com/netease-youdao/LobsterAI/pull/2721) | PR (OPEN) | 0 comments | **Live IM config reload without gateway restart** — ops pain point for long-running deployments. |
| [#1068](https://github.com/netease-youdao/LobsterAI/issues/1068) | Issue (CLOSED) | 2 comments, stale since Mar | Auto-refresh task list after agent deletion — UX polish for multi-agent users. |
| [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) | Issue (OPEN, stale) | 1 comment | **MCP Bridge not passing env vars to Notion MCP server** — blocks Notion integration; needs maintainer triage. |
| [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) | Issue (OPEN, stale) | 1 comment | **Agent Engine infinite restart** — stability blocker; users ask for config workaround. |

**Pattern:** The hottest *open* items are **PRs implementing marketplace/extensibility features** (#2726, #2727, #2721), while the oldest *issues* (#1003, #1007) are **integration & stability bugs** that have gone months without resolution — suggesting maintainers prioritize forward features over legacy bug backlog.

---

## 5. Bugs & Stability (Reported / Fixed Today)

| Severity | Issue / PR | Status | Fix PR |
|----------|------------|--------|--------|
| **Critical** | Windows gateway “did not exit after SIGKILL” false positive → repair startup failure | Fixed | [#2729](https://github.com/netease-youdao/LobsterAI/pull/2729) (merged) |
| **Critical** | `nsp-clawguard` ESM crash on startup (`__dirname` missing) → gateway restart loop | Fixed | [#2731](https://github.com/netease-youdao/LobsterAI/pull/2731) (merged) |
| **High** | OpenClaw SQLite readonly result file corruption | Fixed | [#2728](https://github.com/netease-youdao/LobsterAI/pull/2728) (merged) |
| **Medium** | Weixin scheduled-task target lowercasing → proactive message rejection | Fixed | [#2722](https://github.com/netease-youdao/LobsterAI/pull/2722) (merged) |
| **Medium** | MCP Bridge not forwarding env vars to Notion MCP server (401) | **Open** | None yet — [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) |
| **Medium** | Agent Engine infinite restart (config-related) | **Open** | None yet — [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) |
| **Low** | Task list not auto-refreshing after agent deletion | Closed (stale) | Likely fixed in recent refactors — [#1068](https://github.com/netease-youdao/LobsterAI/issues/1068) |

**Takeaway:** Today’s merges **resolved 4 high-severity regressions** (Windows, ESM, SQLite, Weixin). The two remaining medium bugs (#1003, #1007) are **integration/config issues from March** — they need maintainer attention before next release.

---

## 6. Feature Requests & Roadmap Signals

| Source | Feature | Likelihood for Next Release |
|--------|---------|-----------------------------|
| [#2726](https://github.com/netease-youdao/LobsterAI/pull/2726) (PR, OPEN) | **Digital employees, expert teams, capability marketplace, MCP tool exposure** | **High** — large, well-scoped PR; aligns with “OpenClaw + marketplace” vision; uses existing SQLite/OpenClaw infra. |
| [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) (PR, OPEN) | Persist OpenClaw entry hooks across sync/restart | **High** — fixes known issue (#2654), small diff, plugin-critical. |
| [#2721](https://github.com/netease-youdao/LobsterAI/pull/2721) (PR, OPEN) | Live IM config reload (no gateway restart) | **Medium-High** — ops-friendly, but touches gateway runtime; may need more testing. |
| [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) (PR, stale) | 6 new preset agent templates | **Low** — stale since Mar, low maintenance burden but not urgent. |
| [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) (PR, stale) | Prompt template library (variables, copy, persist) | **Medium** — strong UX value, but stale; may be superseded by marketplace skills. |
| [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) (PR, stale) | Extensible artifacts preview (HTML/React/Mermaid) | **Medium** — Cowork UX upgrade; depends on artifact pipeline stability. |
| [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) (PR, stale) | Slash-triggered skill picker in prompt input | **Medium** — Power-user productivity; UI-only, low risk. |

**Prediction:** The **marketplace/digital-employee PR (#2726)** is the strongest candidate for the next minor release (2026.9.22+), followed by the two plugin/runtime fixes (#2727, #2721). Stale PRs (#1008–#1013) will likely be revisited after the marketplace lands.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **MCP / Notion integration broken** | [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003): “Bridge doesn’t pass env vars → 401” | 😡 Frustrated — config changes don’t work, suspects bridge bug. |
| **Agent Engine instability** | [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007): “Infinite restart, need config workaround” | 😟 Anxious — blocks production use, no clear docs. |
| **Multi-agent UX gaps** | [#1068](https://github.com/netease-youdao/LobsterAI/issues/1068): Task list doesn’t refresh after agent switch | 😐 Minor annoyance — fixed/closed but shows workflow friction. |
| **Desire for reusable prompt/skill assets** | Stale PRs #1009 (templates), #1013 (slash skills), #1011 (artifact preview) | 😊 Positive — users investing in PRs to improve daily workflow. |
| **Excitement for marketplace** | #2726 PR description: “capability marketplace workflow… discover skills, create digital employees” | 🚀 High anticipation — aligns with “AI agent platform” positioning. |

**Overall:** Users are **pushing the platform toward team/productivity use cases** (marketplace, templates, artifacts) while **core stability (MCP, engine restarts) remains a friction point** for early adopters.

---

## 8. Backlog Watch (Stale / Unanswered — Needs Maintainer Attention)

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) | 6 months | **Notion MCP broken** — popular integration, env var forwarding is a one-line fix in bridge spawn logic. | Assign to bridge maintainer; add integration test. |
| [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) | 6 months | **Agent Engine restart loop** — undermines reliability perception; users ask for config doc. | Document known causes (port conflict, missing deps) + add health-check logging. |
| [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) | 6 months | 6 preset agents — low-effort content win for new users. | Merge or close with reason; good “good first issue” candidate. |
| [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) | 6 months | Prompt template library — high community value, well-designed PR. | Review for merge conflict with marketplace skills; decide unified model. |
| [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) | 6 months | Artifact preview pipeline — differentiates Cowork UX. | Needs design review (security/sandbox for HTML/React); prioritize after marketplace. |
| [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) | 6 months | Slash skill picker — small UI, big productivity gain. | Easy merge if UI tests pass; assign to frontend contributor. |

**Recommendation:** Spend **one triage session** on the six stale items above. Closing or merging them will clear 6-month debt and signal to contributors that the project welcomes community PRs.

---

## Quick Links

- **Latest release:** [2026.9.20](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.9.20)
- **All PRs updated today:** [PR list](https://github.com/netease-youdao/LobsterAI/pulls?q=updated%3A%3E2026-09-20)
- **All issues updated today:** [Issue list](https://github.com/netease-youdao/LobsterAI/issues?q=updated%3A%3E2026-09-20)
- **OpenClaw integration tracker:** [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) (hook persistence)

---

*Digest generated from GitHub data as of 2

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-21

---

## 1. Today's Overview
Moltis saw **minimal activity** in the past 24 hours: zero issue updates, zero merged/closed PRs, and no new releases. The sole movement was a single open pull request (#1280) addressing a tool-preset regression. This indicates a quiet maintenance day with no community-driven discussions or urgent incidents.

---

## 2. Releases
**No new releases** published today.

---

## 3. Project Progress
**No PRs were merged or closed today.** The only open PR is:

| PR | Title | Status | Author | Link |
|----|-------|--------|--------|------|
| #1280 | `fix(tools): preserve preset tools for empty active_tools` | OPEN | mikemikimike | [moltis-org/moltis#1280](https://github.com/moltis-org/moltis/pull/1280) |

**Summary of #1280**: Fixes issue [#1277](https://github.com/moltis-org/moltis/issues/1277). Ensures an explicitly empty `active_tools` array is treated as “no per-turn override,” preserving the preset’s tool allow/deny policy. Non-empty per-turn tool lists remain scoped by the preset policy.

---

## 4. Community Hot Topics
**No issues or PRs received comments or reactions today.** The only trackable item is PR #1280 (0 👍, 0 comments). Underlying need: developers rely on predictable tool-preset behavior when passing empty arrays; the fix restores that contract.

---

## 5. Bugs & Stability
**No new bugs, crashes, or regressions were reported today.** The regression addressed in #1277 (empty `active_tools` incorrectly clearing preset tools) has a fix pending review in #1280.

---

## 6. Feature Requests & Roadmap Signals
**No new feature requests or roadmap signals** appeared in the last 24 hours.

---

## 7. User Feedback Summary
**No user feedback** (issues, discussions, or review comments) was recorded today.

---

## 8. Backlog Watch
With zero issue updates today, there are no newly stale items to flag. Maintainers should prioritize reviewing **PR #1280** to close the known regression (#1277) and prevent downstream breakage for users relying on preset tool controls.

---

*Data source: GitHub REST API (issues, pulls, releases) for moltis-org/moltis, window 2026-09-20 → 2026-09-21.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-21

## 1. Today's Overview
CoPaw shows **high development velocity** with 53 total updates (23 issues, 30 PRs) in the last 24 hours. The project is in active beta iteration (v2.2.2-beta.3 released 2026-09-20), with maintainers rapidly addressing regressions in the Hub multi-tenant rollout, tool-approval plumbing, context-window management, and Windows process isolation. No stable release shipped today, but 12 PRs were merged/closed, indicating a healthy merge cadence. Community engagement is strong on the Hub roadmap discussion (#7318, 31 comments) while critical bugs in media handling (#7853) and session persistence (#7724) draw technical scrutiny.

---

## 2. Releases
**No new stable release today.**  
Latest published: **v2.2.2-beta.3** (2026-09-20, beta) — installation verification tracked in [#7891](https://github.com/agentscope-ai/QwenPaw/issues/7891). The 2.2.0 Hub multi-tenant edition remains in preview per [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318).

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Type | Linked Issue |
|----|-------|------|--------------|
| [#7902](https://github.com/agentscope-ai/QwenPaw/pull/7902) | fix(console): refresh cached file tabs on activation | Bug fix | #7866 |
| [#7904](https://github.com/agentscope-ai/QwenPaw/pull/7904) | fix(pet): forward approval actor to native service | Bug fix | #7856 |
| [#7887](https://github.com/agentscope-ai/QwenPaw/pull/7887) | fix(agents): handle unknown audio part rejections | Bug fix | #7876 |
| [#7886](https://github.com/agentscope-ai/QwenPaw/pull/7886) | fix(agents): handle unknown input_audio rejections | Bug fix | #7876 |
| [#7901](https://github.com/agentscope-ai/QwenPaw/pull/7901) | ci(release): unfreeze merges post-release via workflow_run | CI | — |
| [#7862](https://github.com/agentscope-ai/QwenPaw/pull/7862) | ci(release): gate artifact publishing on test gate | CI | — |
| [#7894](https://github.com/agentscope-ai/QwenPaw/pull/7894) | test(console): raise frontend statement coverage +3.19pp | Tests | — |
| [#7900](https://github.com/agentscope-ai/QwenPaw/issues/7900) | Bug: Hub authentication supports `?token=` query param | Bug fix (issue closed) | #7900 |
| [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) | harnesses/codex: empty responses with non-streaming gateways | Bug fix (issue closed) | #7431 |
| [#4974](https://github.com/agentscope-ai/QwenPaw/issues/4974) | Feature: per-agent avatars | Enhancement (issue closed) | #4974 |
| [#5567](https://github.com/agentscope-ai/QwenPaw/issues/5567) | QwenPaw GitHub Issue Assistant Skill | Community (issue closed) | #5567 |
| [#7321](https://github.com/agentscope-ai/QwenPaw/issues/7321) | Tool call stuck in "executing" state after forced stop | Bug fix (issue closed) | #7321 |

**Key advances:** File-tab cache invalidation, plugin approval plumbing, audio-part resilience, CI release automation, and frontend test coverage.

---

## 4. Community Hot Topics (Most Comments/Reactions)

| Item | Type | Comments | 👍 | Summary |
|------|------|----------|-----|---------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | Issue | 31 | 4 | **Hub multi-tenant roadmap** — Community designing QwenPaw Hub 2.2.0 features (RBAC, shared skills, billing, audit logs). Strong signal for team/enterprise adoption. |
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | Issue | 6 | 0 | **ToolResultPruner skips media blocks** — `view_image` base64 payloads never pruned, causing unbounded context growth. Critical for long-running sessions. |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | Issue | 5 | 0 | **Session loss on Windows desktop** — Entire chat history + model config disappear after plugin redeploy/shutdown. Data-integrity concern. |
| [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) | Issue | 4 | 0 | **React `insertBefore` NotFoundError** — Browser UI injects `<font>` wrapper breaking React hydration on chat pages. |
| [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | Issue | 4 | 0 | **Context compaction budget miscalculation** — Compaction uses visible context only, not full provider request, causing OOM failures. |

**Underlying needs:** Team collaboration (Hub), reliability at scale (context/media pruning), Windows desktop parity, and frontend stability.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical** | [#7908](https://github.com/agentscope-ai/QwenPaw/issues/7908) | Windows: child `execute_shell_command` Ctrl event terminates QwenPaw host process | [#7910](https://github.com/agentscope-ai/QwenPaw/pull/7910) (open) |
| **Critical** | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | `ToolResultPruner` skips `type="data"` media blocks → base64 images accumulate unbounded → context window exhaustion | None yet |
| **High** | [#7905](https://github.com/agentscope-ai/QwenPaw/issues/7905) | `DoomLoopGate` escalates to TERMINATE on text-only round without new tool-call evidence | [#7906](https://github.com/agentscope-ai/QwenPaw/pull/7906) (open) |
| **High** | [#7895](https://github.com/agentscope-ai/QwenPaw/issues/7895) | Idle cleanup drops messages received while another consumer stopping (race condition) | None yet |
| **High** | [#7907](https://github.com/agentscope-ai/QwenPaw/issues/7907) | Responses API schema cleaning removes `nullable`, breaks optional `recall_history` date params | None yet |
| **Medium** | [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882) | OpenCode "free" models return 403 FreeTierError but UI labels them free | None yet |
| **Medium** | [#7883](https://github.com/agentscope-ai/QwenPaw/issues/7883) | Tool-returned PDF serialized as OpenAI nested file part; DeepSeek rejects with 400 | None yet |
| **Medium** | [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890) | Zero-downtime reload drops plugin `register_runtime_hook` (middleware retained) — inconsistency | None yet |
| **Medium** | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | Post-compaction refresh fails to load full history (truncated UX) | None yet |
| **Medium** | [#7888](https://github.com/agentscope-ai/QwenPaw/issues/7888) | React hydration error from browser-injected `<font>` wrapper on chat routes | None yet |

**Note:** 4 of 10 bugs have open fix PRs; media pruning (#7853) and idle-race (#7895) lack patches.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **QwenPaw Hub multi-tenant features** (RBAC, shared skills, audit, billing) | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) (31 comments) | **High** — 2.2.0 target, active community design |
| **Per-agent avatars** in lists, switcher, chat | [#4974](https://github.com/agentscope-ai/QwenPaw/issues/4974) (2 👍, closed) | **Medium** — Closed but 2👍; may reopen for 2.3 |
| **Custom browser tab title** per workspace | [#7648](https://github.com/agentscope-ai/QwenPaw/issues/7648) | **Medium** — Low effort, high UX value for multi-project users |
| **Separate model for ReMeLight memory writing** | [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) (open PR) | **High** — PR open, reduces cost for memory ops |
| **Unified model discovery/pricing/selection/thinking controls** | [#7899](https://github.com/agentscope-ai/QwenPaw/pull/7899) (open PR) | **High** — Large refactor PR, aligns provider UX |
| **Authenticated multi-tab chat terminal** (xterm, per-conversation CWD) | [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) (open PR) | **High** — PR open, extends Console to IDE-like workflow |
| **LaTeX math rendering (KaTeX)** in markdown previews | [#7909](https://github.com/agentscope-ai/QwenPaw/pull/7909) (open PR) | **Medium** — PR open, niche but complete |
| **Community/Inbox integration** (Platform auth, feed, comments) | [#7903](https://github.com/agentscope-ai/QwenPaw/pull/7903) (open PR) | **Medium** — Ecosystem play, depends on Platform adoption |
| **OpenCode Go endpoint session header** | [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) (open PR) | **High** — Unblocks first-class OpenCode provider |
| **Responses API prompt caching (GPT-5.6+)** | [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) (open, long-running) | **Medium** — Long review cycle, cost-saving for heavy users |

**Prediction:** Next stable (v2.2.2) will likely include Hub auth fixes, Windows shell isolation, DoomLoop fix, pet approval fix, file-tab refresh, and audio-part resilience. Hub multi-tenant (2.2.0) and unified model UX (2.3) are larger tracks.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Session/history loss on Windows desktop** | [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724): "对话丢失，在控制-会话中完全找不到…模型也丢失了" | 😡 Frustrated — data loss, recurring |
| **Context window exhaustion from images** | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853): base64 images "永远不会被裁剪…直到每一次请求都超出模型上下文窗口" | 😡 Critical — blocks long sessions |
| **Hub file preview broken** | [#7900](https://github.com/agentscope-ai/QwenPaw/issues/7900): `?token=` auth not supported, previews fail | 😐 Blocked — fixed same day |
| **Chat UI broken after compaction** | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884): "回头往上翻，看不到了？？？体验多差" | 😡 UX regression — history truncation |
| **OpenCode "free" models misleading** | [#7882](https://github.com/agentscope-ai/QwenPaw/issues/7882): UI says free, API returns 403 | 😐 Misleading — trust erosion |
| **Tool call stuck "executing" after force-stop** | [#7321](https://github.com/agentscope-ai/QwenPaw/issues/7321): UI never recovers | 😐 Annoying — fixed |
| **Plugin reload inconsistency** | [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890): runtime hooks dropped, middleware kept | 😐 Developer friction — inconsistent semantics |
| **Positive: Community skill for issue writing** | [#5567](https://github.com/agentscope-ai/QwenPaw/issues/5567): "帮你把吐槽变成标准 Issue" (2👍) | 😊 Delight — ecosystem contribution |

**Overall:** Power users hit sharp edges (Windows, context, Hub) but appreciate extensibility (skills, plugins). Desktop stability is a recurring theme.

---

## 8. Backlog Watch (Stale/Important Items Needing Attention)

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) | 48 days | Open PR (Under Review) | **Responses API prompt caching** — cost optimization for GPT-5.6+ users; long review cycle suggests architectural debate |
| [#7565](https://github.com/agentscope-ai/QwenPaw/pull/7565) | 17 days | Open PR | **Clean plugin unload & rollback-safe hot reload** — foundational for plugin ecosystem stability; no merges yet |
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | 3 days | Open Issue (0 PR) | **Media pruning gap** — unbounded context growth; no fix PR despite severity |
| [#7895](https://github.com/agentscope-ai/QwenPaw/issues/7895) | 1 day | Open Issue (0 PR) | **Idle cleanup race** — message loss under load; core reliability |
| [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890) | 1 day | Open Issue (0 PR) | **Zero-downtime reload hook inconsistency** — plugin developer trust |
| [#7724](https://github.com/agentscope-ai/QwenPaw/issues/7724) | 9 days | Open Issue (0 PR) | **Windows session loss** — data integrity; user reports recurrence |
| [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | 13 days | Open Issue (0 PR) | **Context compaction budget** —

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-21

## 1. Today's Overview
ZeroClaw shows **high velocity** with 50 PRs and 9 issues updated in the last 24 hours. The project is in active feature development and stabilization phase: 8 PRs merged/closed, 42 still open. Work spans **channel integrations (Matrix, WhatsApp Web)**, **ACP/ZeroCode transcript pagination**, **security hardening (allowed_roots, frame limits, Windows service logs)**, **runtime cost tracking**, and **CI/release reliability**. No new releases today. The backlog includes several **P1/P2 security and correctness bugs** with fixes in progress.

## 2. Releases
> **No new releases published today.**

## 3. Project Progress — Merged / Closed PRs (Last 24h)
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) | feat(zerorelay): relay-terminated browser enrollment frontdoor (phase 1) | zerorelay, security | **Closed** |
| [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | fix(tools): honor allowed roots for git operations | tools, security | **Closed** |
| [#11008](https://github.com/zeroclaw-labs/zeroclaw/pull/11008) | docs(getting-started): guide local model selection with llmfit | docs, onboarding | **Closed** |
| [#10697](https://github.com/zeroclaw-labs/zeroclaw/pull/10697) | [Bug]: ZeroCode ACP transcript drops assistant text before tool call | zerocode, acp | **Closed** |
| [#10334](https://github.com/zeroclaw-labs/zeroclaw/pull/10334) | [Bug]: git_operations ignores allowed_roots for ordinary repository paths | tools, security | **Closed** |
| [#9549](https://github.com/zeroclaw-labs/zeroclaw/pull/9549) | [Feature]: Guide local model selection with llmfit and ZeroClaw setup documentation | docs, config | **Closed** |

**Key advances:**  
- **Security fix**: `git_operations` now respects `allowed_roots` (#10337, closes #10334).  
- **ZeroRelay**: Phase 1 browser enrollment frontdoor re-added with audited trust model (#10525).  
- **ZeroCode/ACP**: Transcript rendering bug fixed — pre-tool-call assistant text no longer dropped (#10697).  
- **Documentation**: Local model selection guide with `llmfit` integration merged (#11008, resolves #9549).

## 4. Community Hot Topics — Most Active Issues & PRs
| Item | Type | Comments | Summary | Underlying Need |
|------|------|----------|---------|-----------------|
| [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | Issue (RFC) | 9 | Clarify PR review evidence, freshness warnings, author-action boundaries; adds expedited merge lane | **Governance & contributor experience** — streamline review for low-risk changes while preserving safety |
| [#10925](https://github.com/zeroclaw-labs/zeroclaw/issues/10925) | Issue (Feature) | 4 | Support input-driven mirror voice replies on Matrix (`output_modality = "mirror"`) | **Channel parity** — Matrix voice UX matching other channels |
| [#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) | Issue (Feature) | 4 | WhatsApp Web: implement `create_room` / `invite_user` for group creation | **Channel completeness** — enable `channel_room` tool for WhatsApp groups |
| [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) | Issue (Bug) | 3 | Three Windows-only test failures on advisory job, no code change under test | **CI flakiness** — Windows test stability |
| [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) | Issue (Bug, P1) | 2 | Dashboard-started turns get fresh channel instances → channel-backed tools can't reach session-bound channel | **Architecture correctness** — session/channel binding broken for web dashboard |

**Signal:** Contributors are investing in **review process automation** (#10366) and **channel feature parity** (Matrix voice, WhatsApp groups). The P1 bug #10985 indicates a session/channel lifecycle regression affecting the web UI.

## 5. Bugs & Stability — Reported Today (Ranked by Severity)
| Issue | Severity | Area | Fix PR? | Notes |
|-------|----------|------|---------|-------|
| [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) | **S2 (P1)** | gateway/api, WhatsApp | No PR yet | Dashboard turns create new channel instances; `poll`, `reaction`, `channel_room`, `ask_user`, `escalate` fail for session-bound channels |
| [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) | **Medium (P2)** | runtime, shell, CI | No PR yet | 3 Windows-only `zeroclaw-runtime` test failures on advisory job; flaky, no code change |
| [#11023](https://github.com/zeroclaw-labs/zeroclaw/issues/11023) | **Low** | runtime, test | PR [#11022](https://github.com/zeroclaw-labs/zeroclaw/pull/11022) open | Narration test fixture builds `ResolvedContextLimits` with budget > window; follow-up to #11022 |

**Stability note:** The P1 channel binding bug (#10985) is a **regression for web dashboard users** on WhatsApp. Windows CI flakiness (#10793) recurs without code changes — may need environment isolation.

## 6. Feature Requests & Roadmap Signals
| Issue / PR | Feature | Likelihood for Next Release | Rationale |
|------------|---------|----------------------------|-----------|
| [#10925](https://github.com/zeroclaw-labs/zeroclaw/issues/10925) | Matrix `mirror` voice replies | **High** — accepted, in-progress | Channel parity; follows #10489 voice support |
| [#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) | WhatsApp `create_room` / `invite_user` | **High** — in-progress, needs maintainer review | Unblocks `channel_room` tool for WhatsApp |
| [#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596) | Paginated persisted ACP transcripts | **High** — XL PR, needs maintainer review | Critical for long ZeroCode sessions |
| [#10605](https://github.com/zeroclaw-labs/zeroclaw/pull/10605) | Anthropic extended thinking via OpenAI-compatible gateways | **Medium** — XL, needs review | Provider transport completeness |
| [#10879](https://github.com/zeroclaw-labs/zeroclaw/pull/10879) | ZeroCode: combine Sessions Queue & Plan in one dock | **Medium** — XL, needs review | UX consolidation for Code/Chat |
| [#10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592) | Self-serve ZeroRelay enrollment (`relay claim`) | **Medium** — needs author action | Relay usability |
| [#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091) | Native `computer_use` tool (macOS, Linux X11, Windows) | **Low→Medium** — long-open, needs author action | Major desktop automation capability |

**Roadmap prediction:** Next version will likely ship **Matrix mirror voice**, **WhatsApp group management**, **ACP transcript pagination**, and **Windows service log bounding** (#10931). `computer_use` remains a long-pole item.

## 7. User Feedback Summary — Pain Points & Use Cases
| Source | Pain Point / Use Case | Sentiment |
|--------|----------------------|-----------|
| [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) | Web dashboard + WhatsApp: channel-backed tools (`poll`, `ask_user`, etc.) **completely broken** for session-bound channels | 🔴 **Critical regression** |
| [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) | Windows CI flakiness blocks unrelated PRs (cron code change triggered runtime test failures) | 🟡 **Developer friction** |
| [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | PR review process unclear; need expedited lane for low-risk changes | 🟡 **Contributor experience** |
| [#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) (closed) | Choosing local models (Ollama, llama.cpp) requires scattered hardware/runtime/quantization info | 🟢 **Resolved** — docs merged (#11008) |
| [#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697) (closed) | ZeroCode transcript loses pre-tool-call assistant text | 🟢 **Fixed** — merged |

**Overall:** Users hit **channel/session binding bugs in web UI** and **CI unreliability**. Contributors want **clearer review gates**. Documentation gaps on local models are being closed.

## 8. Backlog Watch — Long-Unanswered / Stalled Items Needing Maintainer Attention
| Item | Age | Labels | Why It Matters |
|------|-----|--------|----------------|
| [#9091](https://github.com/zeroclaw-labs/zeroclaw/pull/9091) | ~68 days | `size:XL`, `needs-author-action`, `risk:high`, `domain:security` | Native `computer_use` tool — major capability, security-sensitive, awaiting author updates |
| [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) | ~56 days | `size:XL`, `needs-maintainer-review`, `domain:security`, 12+ channel labels | Sender authorization for Bluesky/Reddit — cross-channel security fix, broad impact |
| [#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596) | 18 days | `size:XL`, `needs-maintainer-review`, `risk:high`, `topic:zerocode` | ACP transcript pagination — unblocks long ZeroCode sessions |
| [#10605](https://github.com/zeroclaw-labs/zeroclaw/pull/10605) | 18 days | `size:XL`, `needs-maintainer-review`, `risk:high`, `topic:provider-transport` | Anthropic thinking via OpenAI gateways — provider interop |
| [#10499](https://github.com/zeroclaw-labs/zeroclaw/pull/10499) | 21 days | `size:XL`, `needs-maintainer-review`, `risk:high`, `zerocode` | Persistent config validation — prevents corrupt config writes |
| [#10804](https://github.com/zeroclaw-labs/zeroclaw/pull/10804) | 9 days | `size:XL`, `risk:high`, `topic:agent-loop` | Cost tracking in delegated sub-loops — agent-loop correctness |
| [#10817](https://github.com/zeroclaw-labs/zeroclaw/pull/10817) | 8 days | `release-gate`, `risk:high`, `type:ci` | Release script fail-closed — release reliability |

**Action recommended:** Prioritize review of **#9428 (channel auth)**, **#10596 (ACP pagination)**, and **#10817 (release safety)**. Ping authors on **#9091** and **#10592** (ZeroRelay claim) to unblock XL security-sensitive work.

---

**Project Health Indicator:** 🟢 **Active / 🟡 Needs Triage on XL PRs**  
High throughput, but 7 XL PRs await maintainer review — risk of merge queue buildup. P1 bug #10985 should be triaged immediately.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*