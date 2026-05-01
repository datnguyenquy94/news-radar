# OpenClaw Ecosystem Digest 2026-05-01

> Issues: 500 | PRs: 500 | Projects covered: 13 | Generated: 2026-05-01 00:21 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-05-01

---

## 1. Today's Overview

OpenClaw exhibits **extremely high community activity** with 500 issues and 500 PRs updated in the last 24 hours, though the merge/close rate remains critically low (13 issues closed, 18 PRs merged/closed). This 97%+ open rate indicates either a massive backlog accumulation or a release-cycle bottleneck. The project shipped **5 releases on 2026.4.29** (one stable, four betas) with substantial messaging/automation enhancements, yet **severe stability regressions in v2026.4.24–4.26** dominate community discourse. Gateway performance degradation—CPU spinning, startup hangs, and cross-platform latency—has emerged as the defining crisis, with multiple blocker-tagged issues and active PRs attempting remediation.

---

## 2. Releases

### v2026.4.29 (Stable) + v2026.4.29-beta.1 through beta.4
- **Release Date:** 2026-04-29
- **Highlights:** [Full release notes](https://github.com/openclaw/openclaw/releases/tag/v2026.4.29)
  - **Messaging & Automation:** Active-run steering by default, visible-reply enforcement, spawned subagent routing metadata, opt-in follow-up commitments for heartbeat-delivered reminders
  - **Memory system expansion** (note truncated in source: "Memory grows i…")
- **Contributors:** @vincentkoc, @scoootscooob, @samzong, @vignesh07
- **Breaking Changes / Migration Notes:** None documented; however, **numerous regressions reported post-upgrade from 4.22→4.26** suggest stability risks not captured in release notes

---

## 3. Project Progress

### Merged/Closed PRs (18 total; notable items from visible set)

| PR | Status | Focus | Link |
|:---|:---|:---|:---|
| #75311 | **CLOSED** | Fix GitHub App active-PR-limit exemption regression in CI automation | [PR #75311](https://github.com/openclaw/openclaw/pull/75311) |
| #75183 | OPEN | Simplify bundled runtime dependency repair (XL size, maintainer-involved) | [PR #75183](https://github.com/openclaw/openclaw/pull/75183) |
| #75310 | OPEN | Detect/recover from incomplete bundled runtime deps staging (fixes #75309) | [PR #75310](https://github.com/openclaw/openclaw/pull/75310) |
| #75076 | OPEN | Harden Control UI auth, status warnings, build provenance (XL, security) | [PR #75076](https://github.com/openclaw/openclaw/pull/75076) |
| #75101 | OPEN | Add `tools.exec.denyPathPatterns` hard-deny gate (security/exec) | [PR #75101](https://github.com/openclaw/openclaw/pull/75101) |
| #75097 | OPEN | Fix false-positive security audit WARNs on single-operator setups | [PR #75097](https://github.com/openclaw/openclaw/pull/75097) |
| #75095 | OPEN | Redact CLI argv secrets before persisting to config-audit log | [PR #75095](https://github.com/openclaw/openclaw/pull/75095) |
| #75256 | OPEN | Mattermost streaming mode='block' for turn-boundary draft splitting | [PR #75256](https://github.com/openclaw/openclaw/pull/75256) |
| #74290 | OPEN | Update QA lab parity gate for GPT-5.5 vs Opus 4.7 | [PR #74290](https://github.com/openclaw/openclaw/pull/74290) |

**Key Advancements:** Security hardening (secret redaction, path deny-lists, auth improvements) and infrastructure reliability (bundled runtime repair, dependency staging recovery). Model evaluation infrastructure updated for GPT-5.5/Opus 4.7 parity testing.

---

## 4. Community Hot Topics

### Most Active Issues (by comment count & engagement)

| Issue | Comments | 👍 | Core Need | Link |
|:---|:---|:---|:---|:---|
| **#9443 Prebuilt Android APK releases** | 21 | 1 | **Distribution/accessibility** — Lower barrier for mobile users; submitted by AI assistant on behalf of user | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| **#72338 Gateway CPU spin → Telegram stalls, status probe timeout** | 18 | 3 | **Production reliability** — Critical infrastructure stability for messaging integrations | [#72338](https://github.com/openclaw/openclaw/issues/72338) |
| **#22438 Tiered bootstrap file loading** | 16 | 0 | **Cost optimization** — Token efficiency for large workspaces; sub-agents/cron jobs waste context | [#22438](https://github.com/openclaw/openclaw/issues/22438) |
| **#73323 Gateway runtime degradation (pricing fetch timeouts, polling stalls, RPC slowdown)** | 13 | 0 | **Cross-platform stability** — Chronic Windows 11 + Node 24 regression across 3 versions | [#73323](https://github.com/openclaw/openclaw/issues/73323) |
| **#62505 Coding Agent never completes (regression from 2026.4.2)** | 12 | 1 | **Core agent functionality** — Agent task completion broken for primary use case | [#62505](https://github.com/openclaw/openclaw/issues/62505) |
| **#73501 [BLOCKER] 4.22→4.26 significantly slower** | 12 | 5 | **Performance regression** — Blocker-tagged; reactions and replies degraded | [#73501](https://github.com/openclaw/openclaw/issues/73501) |
| **#73303 Gateway restart hangs 3-4 min on macOS** | 12 | 2 | **Developer experience** — LaunchAgent mode startup failure | [#73303](https://github.com/openclaw/openclaw/issues/73303) |

**Underlying Needs Analysis:**
- **Infrastructure resilience** dominates (4 of top 7 issues) — the gateway architecture appears unable to handle network variability, timer degradation, or graceful restarts
- **Cost/efficiency consciousness** emerging — users actively tracking token waste (#22438, #67419) and seeking granular control
- **Enterprise/production readiness** — Multi-tenancy (#60127), sensitive data masking (#64046), and mobile distribution (#9443) signal maturation beyond early adopters

---

## 5. Bugs & Stability

### Critical/Blocker Severity

| Issue | Severity | Symptoms | Fix PR? | Link |
|:---|:---|:---|:---|:---|
| **#73501** 4.22→4.26 performance degradation | **BLOCKER** | Slower reactions, replies; 5 👍 | No linked fix | [#73501](https://github.com/openclaw/openclaw/issues/73501) |
| **#74328** Gateway main thread 100% CPU (fs.stat storm) | **Critical** | v2026.4.26 regression from 4.22; clean on 4.22 | No linked fix | [#74328](https://github.com/openclaw/openclaw/issues/74328) |
| **#72338** Gateway CPU spin, Telegram stalls | **Critical** | High-CPU state, probe timeouts, needs service restart | No linked fix | [#72338](https://github.com/openclaw/openclaw/issues/72338) |
| **#73323** Multi-subsystem degradation (pricing, polling, RPC) | **Critical** | Chronic across 4.23/4.25/4.26, Windows 11 + Node 24 | No linked fix | [#73323](https://github.com/openclaw/openclaw/issues/73323) |
| **#75069** Bundled plugin runtime mirror blocks gateway main thread | **Critical** | ~80-90s blocking on first agent run; regression 2026.4.22+ | No linked fix | [#75069](https://github.com/openclaw/openclaw/issues/75069) |
| **#73874** HTTP/WS dispatch deadlock (Windows + Docker Desktop) | **High** | Regression in 4.24, persists .25/.26; bind-mount specific | No linked fix | [#73874](https://github.com/openclaw/openclaw/issues/73874) |
| **#73306** Active Memory plugin timeout (15s, 0 chars) | **High** | Every run fails since 4.26; also 4.25 | No linked fix | [#73306](https://github.com/openclaw/openclaw/issues/73306) |
| **#62505** Coding Agent never completes | **High** | Regression from 2026.4.2; vague status updates only | No linked fix | [#62505](https://github.com/openclaw/openclaw/issues/62505) |
| **#74209** Bundled plugins (especially bonjour) block gateway startup | **High** | 4.26 upgrade regression; Linux affected | **#75183, #75310** (repair/staging) | [#74209](https://github.com/openclaw/openclaw/issues/74209) |
| **#73303** Gateway restart hangs 3-4 min (macOS LaunchAgent) | **High** | 4.26 specific; normal startup is seconds | No linked fix | [#73303](https://github.com/openclaw/openclaw/issues/73303) |
| **#74953** Web and CLI super laggy (4.23+) | **High** | "Increasingly laggy" with each version | No linked fix | [#74953](https://github.com/openclaw/openclaw/issues/74953) |

**Pattern:** A **cascade of gateway performance regressions** introduced between 4.22–4.26, concentrated in:
- **CPU saturation** (fs.stat storms, synchronous plugin walks)
- **Network/timer subsystem degradation** (pricing fetch, polling, RPC)
- **Startup/shutdown pathology** (restart hangs, plugin blocking)

**Fix activity:** PRs #75183 and #75310 address bundled runtime dependency repair but do not directly target the CPU/fs.stat or timer root causes.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Category | Predicted Priority | Rationale | Link |
|:---|:---|:---|:---|:---|
| **#22438** Tiered bootstrap loading | **Performance/Cost** | **High** — v2026.5.x | 16 comments, directly addresses 20-30% token waste; aligns with #67419 | [#22438](https://github.com/openclaw/openclaw/issues/22438) |
| **#60127** Multi-tenancy (shared server + RBAC) | **Enterprise** | Medium — v2026.6+ | Startup use case, but complex; 6 comments, 0 👍 | [#60127](https://github.com/openclaw/openclaw/issues/60127) |
| **#63829** Per-agent memory-wiki vault | **Multi-agent** | **High** — v2026.5.x | 4 👍, 7 comments; isolation is recurring theme (#65374 dreaming contamination) | [#63829](https://github.com/openclaw/openclaw/issues/63829) |
| **#64046** Sensitive data masking (Chinese: 敏感数据脱敏) | **Security/Compliance** | **High** — v2026.5.x | API keys, tokens, secrets exposed in logs, UI, config; compliance blocker | [#64046](https://github.com/openclaw/openclaw/issues/64046) |
| **#71736** Control UI plugin contribution slots | **Extensibility** | Medium | SDK surface proposal; 8 comments, architectural | [#71736](https://github.com/openclaw/openclaw/issues/71736) |
| **#71142** Configurable upload size limit (Control UI) | **UX** | Low-Medium | 5MB hardcoded; 6 comments | [#71142](https://github.com/openclaw/openclaw/issues/71142) |
| **#9443** Prebuilt Android APK | **Distribution** | Medium | 21 comments but only 1 👍; mobile expansion | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| **#33329** Document/config toggles for implicit discovery | **Transparency/Control** | Medium | 4 implicit network calls on startup; privacy/control concern | [#33329](https://github.com/openclaw/openclaw/issues/33329) |

**Likely v2026.5.x candidates:** Token efficiency (#22438, #67419), security hardening (#64046, already partially addressed by PRs #75095, #75097, #75101), and multi-agent isolation (#63829, #65374).

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|:---|:---|:---|
| **"What are you doing?"** — Upgrade anxiety | #74953: "What are you doing? Many users have a very poor experience" | 🔴 Critical |
| **Performance cliff on upgrade** | Multiple reports: 4.22 "clean" → 4.23-4.26 "increasingly laggy", "significantly slower", "super laggy" | 🔴 Critical |
| **Gateway as single point of failure** | CPU spins, restart hangs, startup blocks, message loss — all gateway-centric | 🔴 Critical |
| **Windows as second-class citizen** | #73323, #73874, #70857, #75315 all Windows-specific or Windows-worse | 🟡 High |
| **Token cost opacity** | #22438, #67419: 20-30% context waste on bootstrap re-injection | 🟡 High |
| **Agent identity contamination** | #65374: Dreaming system pools all agents; #63829: no per-agent vault isolation | 🟡 High |

### Use Cases & Satisfaction Signals

| Positive | Negative |
|:---|:---|
| Intensive daily use driving detailed feature bundles (#65824: "11 platform gaps from intensive daily use") | Coding agent — core use case — "never completes anything" (#62505) |
| Multi-agent setups attempted (dreaming, vault isolation requests) | Multi-agent setups broken (identity contamination, no isolation) |
| Production deployments attempted (security audit, multi-tenancy) | Production incidents (secret leakage #74379, auth split-brain #74271) |
| Mobile companion desired (#9443) | No prebuilt mobile distribution |

---

## 8. Backlog Watch

### Long-Unanswered Issues Needing Maintainer Attention

| Issue | Age | Risk | Link |
|:---|:---|:---|:---|
| **#8892** `--agent` flag for TUI | ~3 months (2026-02-04) | 3 👍, 4 comments; basic CLI UX gap still unaddressed | [#8892](https://github.com/openclaw/openclaw/issues/8892) |
| **#8441** Thinking/model config in skills.entries | ~3 months | 1 👍, 4 comments; asymmetry with cron jobs | [#8441](https://github.com/openclaw/openclaw/issues/8441) |
| **#8287** Node-Registered Agent Tools | ~3 months | 0 👍, 4 comments; extensibility architecture | [#8287](https://github.com/openclaw/openclaw/issues/8287) |
| **#7575** Sysbox Docker Runtime | ~3 months | 1 👍, 4 comments; **on HOLD** — needs host maintenance window | [#7575](https://github.com/openclaw/openclaw/issues/7575) |
| **#33329** Implicit discovery mechanisms | ~2 months | 1 👍, 5 comments; privacy/network transparency | [#33329](https://github.com/openclaw/openclaw/issues/33329) |

### PRs Potentially Stalled

| PR | Status | Concern | Link |
|:---|:---|:---|:---|
| **#75183** Simplify bundled runtime dependency repair | OPEN, XL size, maintainer tag | Critical path for #74209 but unmerged after 24h+ | [PR #75183](https://github.com/openclaw/openclaw/pull/75183) |
| **#75076** Harden Control UI auth | OPEN, XL size, "dirty-candidate" triage | Security-critical, flagged for quality concerns | [PR #75076](https://github.com/openclaw/openclaw/pull/75076) |

---

## Project Health Assessment

| Metric | Status |
|:---|:---|
| **Activity Volume** | 🟢 Exceptional (1000 items/24h) |
| **Merge Velocity** | 🔴 Critically low (~1.8% PR closure rate) |
| **Release Stability** | 🔴 Degraded — v2026.4.24–4.26 introduced widespread regressions |
| **Security Posture** | 🟡 Improving — active hardening PRs, but incidents occurred |
| **Community Engagement** | 🟢 Strong — detailed reports, reproduction steps, cross-referencing |
| **Maintainer Bandwidth** | 🟡 Constrained — XL PRs lingering, blocker issues unassigned |

**Recommendation:** Immediate triage needed for gateway performance regressions (#73501, #74328, #72338, #75069) with potential 4.27 hotfix or 4.22 rollback advisory. The 97%+ open rate on 1000 daily items suggests either a release-week anomaly or systemic review backlog requiring process adjustment.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-05-01 | **Analyst:** Senior AI Agent Ecosystem Analyst

---

## 1. Ecosystem Overview

The personal AI assistant open-source ecosystem is experiencing **intense fragmentation and parallel evolution**, with 10+ active projects pursuing divergent architectural bets while converging on common operational pain points. The landscape splits between **mature, production-stressed platforms** (OpenClaw, Hermes Agent, ZeroClaw) grappling with gateway stability and multi-tenancy, **rapidly iterating challengers** (Moltis, NanoClaw, CoPaw) prioritizing UX polish and deployment flexibility, and **struggling or dormant projects** (LobsterAI, TinyClaw, ZeptoClaw) facing maintainer bandwidth collapse or complete inactivity. A critical inflection point is emerging: projects that successfully navigate the **gateway performance cliff** (CPU saturation, startup pathology, cross-platform degradation) and **security hardening** (secret redaction, sandbox boundaries, approval workflows) are separating from those accumulating technical debt faster than they can resolve it.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Releases | Merge Rate | Health Score | Status |
|:---|:---:|:---:|:---|:---:|:---:|:---|
| **OpenClaw** | 500 | 500 | v2026.4.29 (5 releases 4/29) | ~3.6% (18/500) | 🔴 **Strained** | Release-cycle bottleneck; 97%+ open rate |
| **NanoBot** | 15 | 27 | None (v0.1.5.post3 current) | ~33% (9/27) | 🟡 **Solid but strained** | Review backlog growing |
| **Hermes Agent** | 50 | 50 | v0.12.0 "Curator" (4/30) | ~22% (11/50) | 🟡 **Growth phase** | High velocity, 94% open issue rate |
| **PicoClaw** | 37 | 38 | v0.2.8 (4/30) | ~16% (6/38) | 🟡 **Bottlenecked** | Active but review-starved |
| **NanoClaw** | 8 | 50 | None | ~78% (39/50) | 🟢 **Stabilizing** | v2 pre-release; security-focused |
| **NullClaw** | 0 | 5 | None | ~60% (3/5) | 🟡 **Recovering** | Zig 0.16 migration fallout |
| **IronClaw** | 24 | 39 | None | ~54% (21/39) | 🟡 **Architectural transition** | "Reborn" rewrite; canary failures |
| **LobsterAI** | 1 | 12 | None | **0%** (0/12) | 🔴 **Stagnant** | 6-week stale PR queue; maintainer absent |
| **Moltis** | ~7 | 21 | 20260430.01 (4/30) | ~86% (18/21) | 🟢 **Strong** | Small core team, high throughput |
| **CoPaw** | 50 | 16 | v1.1.5.post1 (hotfix) | ~88% (14/16) | 🟢 **Active, improving** | Rapid iteration; enterprise channel focus |
| **ZeroClaw** | 50 | 50 | None (release-blocked) | ~2% (1/50) | 🔴 **Pre-release crisis** | Schema v3 migration blocking all merges |
| **TinyClaw** | 0 | 0 | — | — | ⚫ **Dormant** | No activity |
| **ZeptoClaw** | 0 | 0 | — | — | ⚫ **Dormant** | No activity |

*Health Score methodology: Blend of merge velocity, issue resolution rate, release stability, and maintainer responsiveness indicators.*

---

## 3. OpenClaw's Position

### Advantages vs. Peers
| Dimension | OpenClaw Position | Peer Comparison |
|:---|:---|:---|
| **Scale** | 1,000 items/day; largest absolute volume | 10-50x higher than Moltis, NanoClaw, CoPaw |
| **Feature breadth** | Most comprehensive (messaging, automation, memory, multi-agent, security audit) | Hermes Agent comparable; others narrower |
| **Release cadence** | Weekly stable/beta cadence | Moltis, PicoClaw match; NanoClaw, ZeroClaw blocked |
| **Enterprise signals** | Multi-tenancy (#60127), sensitive data masking (#64046), RBAC requests | CoPaw (WeCom/Feishu), ZeroClaw (schema v3) pursuing similar |

### Technical Approach Differences
- **vs. Moltis/CoPaw**: OpenClaw uses **Node.js gateway-centric architecture** with bundled plugin runtimes; Moltis/CoPaw favor more modular, provider-abstracted designs with explicit sandbox boundaries
- **vs. Hermes Agent**: Both multi-agent, but Hermes emphasizes **autonomous self-maintenance** ("Curator" loop); OpenClaw emphasizes **human-in-the-loop control** (approval workflows, visible-reply enforcement)
- **vs. NanoClaw**: NanoClaw uses **containerized agent isolation** with strict filesystem/network sandboxing; OpenClaw's gateway runs bare-metal/VM with process-level separation
- **vs. IronClaw**: IronClaw bets on **WASM-based substrate** ("Reborn") for deterministic execution; OpenClaw remains dynamic/interpreted

### Community Size
- **Largest measured community** by raw activity (500 issues + 500 PRs/day)
- **However**: Merge velocity (1.8%) is **lowest among active projects** except ZeroClaw (2%); Moltis (86%), CoPaw (88%), NanoClaw (78%) demonstrate healthier throughput
- **217 contributors** in Hermes Agent's single release cycle suggests deeper engagement per-capita than OpenClaw's broader, shallower participation

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|:---|:---|:---|
| **Gateway performance & stability** | OpenClaw, Hermes Agent, ZeroClaw, PicoClaw, NanoBot | CPU spin mitigation (#72338, #17959), startup hang resolution (#73303, #5726), graceful restart/shutdown (#940, #940) |
| **Security hardening** | OpenClaw, NanoClaw, CoPaw, ZeroClaw, LobsterAI | Secret redaction (#75095), path traversal prevention (#3973, #828), container escape prevention (#2001, #2053), approval bypass fixes (#6207) |
| **Windows platform parity** | OpenClaw, NanoBot, PicoClaw, CoPaw | Path separator bugs (#2472, #3506), Electron white screens (#3971), POSIX documentation assumptions (#3550) |
| **Chinese IM ecosystem integration** | CoPaw, PicoClaw, ZeroClaw, LobsterAI | WeCom/Feishu/WeChat stability (#2757, #3546, #1878), auth flow changes, thread context preservation |
| **Local/self-hosted model support** | NanoClaw, Moltis, ZeroClaw, NanoBot | Ollama configuration (#603, #6123), timeout flexibility (#2149: 90s hardcoded), model discovery (#931) |
| **Multi-agent isolation & coordination** | OpenClaw, Hermes Agent, ZeroClaw, CoPaw | Per-agent memory vaults (#63829), identity contamination prevention (#65374, #3957), multi-agent UX flows (#5890) |
| **Observability & debugging** | Hermes Agent, IronClaw, ZeroClaw | In-flight session visibility (#18127), tracing infrastructure (#3131, #6190), reasoning trace plumbing (#3129) |
| **Token/cost efficiency** | OpenClaw, PicoClaw | Tiered bootstrap loading (#22438: 20-30% waste reduction), configurable context windows (#2527) |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architecture Bet | Risk Profile |
|:---|:---|:---|:---|:---|
| **OpenClaw** | Feature completeness + release velocity | Power users, early enterprise | Node.js gateway, bundled plugins | 🔴 Stability regressions outpacing fixes |
| **Moltis** | Deployment flexibility + UX polish | Self-hosters, developers | Multi-backend sandboxes, GPU passthrough | 🟢 Balanced growth |
| **NanoClaw** | Security-first container isolation | Security-conscious production | Strict filesystem/network sandboxing | 🟡 OpenCode provider crisis |
| **Hermes Agent** | Autonomous self-improvement | Research, advanced automation | "Curator" self-maintenance loop | 🟡 v0.12.0 regressions unpatched |
| **CoPaw** | Chinese enterprise IM integration | China-market teams | WeCom/Feishu-first channel design | 🟡 Workspace identity bugs |
| **ZeroClaw** | Schema-rigid configuration | Operators, multi-instance deployers | Schema v3 strict validation | 🔴 Release-blocked, governance bottleneck |
| **IronClaw** | Deterministic WASM execution | Infrastructure engineers, NEAR ecosystem | "Reborn" WASM substrate | 🟡 Architectural rewrite stress |
| **PicoClaw** | Embedded/edge hardware alignment | Sipeed hardware users, ARM64 deployers | Rust-based, resource-constrained | 🟡 ARM64 packaging broken |
| **NanoBot** | "Ultra-lightweight" positioning (contested) | Cost-sensitive, local-model users | Node.js+Python hybrid | 🟡 Dependency bloat criticism |
| **NullClaw** | Zig systems programming | Zig enthusiasts, performance purists | Zig 0.16, async I/O | 🟡 Single-maintainer bus factor |
| **LobsterAI** | NetEase Youdao corporate backing | China desktop users | Electron-based, MCP integration | 🔴 Effectively unmaintained |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapidly Iterating (Healthy Velocity)
| Project | Indicators | Trajectory |
|:---|:---|:---|
| **Moltis** | 86% merge rate, same-day issue resolution, SDK expansion | 📈 Ascending — platform play emerging |
| **CoPaw** | 88% merge rate, 4 first-time contributors, security patch same-day | 📈 Ascending — enterprise channel maturity |
| **NanoClaw** | 78% merge rate, critical security fixes landed, v2 stabilization | 📈 Ascending — production-hardening phase |

### Tier 2: High Volume, Constrained Throughput
| Project | Indicators | Trajectory |
|:---|:---|:---|
| **OpenClaw** | 1,000 items/day, 1.8% merge rate, 97% open rate | ⚠️ **At risk** — backlog accumulation or release-cycle dysfunction |
| **Hermes Agent** | 100 items/day, 22% merge, 94% open issues | 📊 **Stable growth** — but P1 unpatched threatens trust |
| **ZeroClaw** | 100 items/day, 2% merge, schema v3 blocker | 🔻 **Stalled** — governance/technical debt convergence |

### Tier 3: Recovery/Stabilization
| Project | Indicators | Trajectory |
|:---|:---|:---|
| **NanoBot** | 42 items/day, 33% merge, no release despite fixes | 📊 **Stable** — review backlog manageable |
| **PicoClaw** | 75 items/day, 16% merge, 6-week-old critical bug | ⚠️ **At risk** — contributor fatigue from unmerged PRs |
| **IronClaw** | 63 items/day, 54% merge, canary failures masked | 📊 **Transition stress** — Reborn rewrite consuming bandwidth |
| **NullClaw** | 5 items/day, 60% merge, single maintainer | 📊 **Fragile recovery** — Zig migration fallout resolving |

### Tier 4: Stagnant or Dormant
| Project | Indicators | Trajectory |
|:---|:---|:---|
| **LobsterAI** | 0% merge rate, 6-week stale PRs, security fixes unmerged | 🔻 **Declining** — maintainer absence critical |
| **TinyClaw, ZeptoClaw** | Zero activity | ⚫ **Inactive** — ecosystem casualties |

---

## 7. Trend Signals

### For AI Agent Developers

| Trend | Evidence | Strategic Implication |
|:---|:---|:---|
| **Gateway as critical failure mode** | 4 of top 7 OpenClaw issues, 2 P1 Hermes Agent bugs, ZeroClaw canary failures | **Invest in gateway observability and circuit-breaker patterns early** — the "agent works but can't communicate reliably" failure mode dominates production incidents |
| **Security sandboxing as table stakes** | NanoClaw #458 (4👍), OpenClaw #75101 (denyPathPatterns), CoPaw #3973 (path traversal fix) | **Assume adversarial container/host boundaries** — filesystem, network, and execution sandboxing must be designed in, not bolted on |
| **Chinese IM ecosystem as distinct market** | CoPaw, PicoClaw, ZeroClaw, LobsterAI all prioritizing WeCom/Feishu/WeChat | **International projects ignoring these channels cede massive addressable market** — auth flows and thread semantics differ materially from Slack/Discord |
| **Local model deployment friction** | NanoClaw #2149 (90s timeout), Moltis #931 (30s probe timeout), ZeroClaw #6123 (Ollama config) | **Hardcoded timeouts and cloud-first assumptions exclude self-hosting users** — design for 100B+ parameter models on consumer hardware |
| **Token economics as user-visible concern** | OpenClaw #22438 (20-30% bootstrap waste), #67419 | **Context window efficiency is becoming a competitive feature** — users compare and optimize token spend |
| **Multi-agent identity isolation** | OpenClaw #63829/#65374, CoPaw #3957, ZeroClaw #5890 | **"Agent" is becoming "team of agents"** — memory contamination and workspace boundary violations are the new race conditions |
| **Observability gap in autonomous modes** | Hermes Agent #18127 ("no way to observe in-flight sessions"), IronClaw #3131 (trace infrastructure) | **Self-improving agents require self-debugging infrastructure** — black-box autonomy erodes operator trust |
| **Contributor experience as retention lever** | PicoClaw 6-week unmerged PRs, LobsterAI 0% merge rate, OpenClaw 97% open rate | **Review bandwidth is the constraint, not code production** — projects with <20% merge velocity risk contributor attrition and security patch stagnation |

---

**Bottom Line:** The ecosystem is bifurcating between projects that have internalized **production operational requirements** (security, observability, gateway resilience, platform parity) and those still optimizing for feature velocity. OpenClaw's scale advantage is eroding due to stability regressions and merge dysfunction; Moltis, CoPaw, and NanoClaw demonstrate that smaller teams with focused architectural bets can achieve healthier development dynamics. The next 90 days will likely see consolidation as users migrate from stressed platforms to stable alternatives, particularly for enterprise and self-hosted deployments.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-05-01

## 1. Today's Overview

NanoBot shows **high community velocity** with 42 items updated in the last 24 hours (15 issues, 27 PRs), though the 18:9 open-to-merged PR ratio suggests a growing review backlog. No new release was cut despite significant bug-fix activity, indicating maintainers may be accumulating changes for a larger version bump. The project is experiencing **active channel expansion** (Feishu, Matrix, mailbox) alongside **core stability work** on streaming APIs and reasoning model compatibility. Cross-platform support (Windows path handling, POSIX assumptions in docs) is emerging as a recurring theme. Overall health is **solid but strained**—community contribution is strong, but maintainer bandwidth for review and release cadence appears to be the limiting factor.

---

## 2. Releases

**No new releases** (v0.1.5.post3 remains current as of 2026-04-30).

Notable: Multiple fixes target v0.1.5.post3 regressions, particularly DeepSeek-V4 `reasoning_content` errors ([#3554](https://github.com/HKUDS/nanobot/issues/3554)) and Matrix empty-message spam. Users on current stable should monitor for an imminent patch release.

---

## 3. Project Progress

### Merged/Closed PRs Today (9 total)

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#3562](https://github.com/HKUDS/nanobot/pull/3562) / [#3565](https://github.com/HKUDS/nanobot/pull/3565) | bstaeheli | Skip empty stream deltas in Matrix channel | Fixes empty-message spam from DeepSeek reasoning chunks |
| [#3557](https://github.com/HKUDS/nanobot/pull/3557) | dannylty | `lunarpixie` | Unclear (no description; possibly spam/abandoned) |
| [#3556](https://github.com/HKUDS/nanobot/pull/3556) | orkapodavid | `.gitattributes` for LF line endings | DevEx: prevents CRLF churn on Windows |
| [#3550](https://github.com/HKUDS/nanobot/pull/3550) | orkapodavid | Portable temp paths in docs | DevEx: removes POSIX-only assumptions |
| *(plus 4 closed issues with associated fixes)* | | | |

### Key Advances

- **Matrix channel stability**: Empty-delta filtering merged after two PR attempts ([#3562](https://github.com/HKUDS/nanobot/pull/3562), [#3565](https://github.com/HKUDS/nanobot/pull/3565))
- **API streaming lifecycle**: Fix PR [#3555](https://github.com/HKUDS/nanobot/pull/3555) open for premature SSE termination on tool-backed requests
- **DeepSeek reasoning compatibility**: Adjustment PR [#3560](https://github.com/HKUDS/nanobot/pull/3560) targets [#3554](https://github.com/HKUDS/nanobot/issues/3554)

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Type | Comments | 👍 | Core Tension |
|:---|:---|:---:|:---:|:---|
| [#660](https://github.com/HKUDS/nanobot/issues/660) | Issue | 11 | 5 | **"Ultra-lightweight" branding vs. Node.js+Python runtime reality** |
| [#603](https://github.com/HKUDS/nanobot/issues/603) | Issue | 7 | 0 | Ollama local setup UX/documentation gaps |
| [#3546](https://github.com/HKUDS/nanobot/issues/3546) | Issue | 6 | 0 | Feishu `reply_in_thread` forced behavior + memory/context loss |

### Underlying Needs Analysis

- **#660**: Identity crisis. Community is pushing back on marketing claims vs. architectural decisions. Suggests need for either dependency reduction (Rust/Go rewrite?) or honest repositioning.
- **#3546**: Enterprise chat platform integration maturity. Feishu users need thread control + persistent context—signals that multi-tenant/group-chat features are underbaked for production deployment.
- **#2298** (4 comments): Agent safety/loop prevention for local models—critical for cost-sensitive users running smaller LLMs.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|:---|:---|:---|:---:|
| 🔴 **High** | [#3554](https://github.com/HKUDS/nanobot/issues/3554) | DeepSeek-V4 `reasoning_content` error on Windows/WebUI/exec tool | [#3560](https://github.com/HKUDS/nanobot/pull/3560) open |
| 🔴 **High** | [#3551](https://github.com/HKUDS/nanobot/issues/3551) | OpenAI-compatible SSE stream terminates early for tool-backed requests | [#3555](https://github.com/HKUDS/nanobot/pull/3555) open |
| 🟡 **Medium** | [#3553](https://github.com/HKUDS/nanobot/issues/3553) | Matrix re-reads old messages on startup/restart | None yet |
| 🟡 **Medium** | [#3506](https://github.com/HKUDS/nanobot/issues/3506) | Matrix Windows path crash (colon in nio store) | **Fixed** (closed 2026-04-30) |
| 🟡 **Medium** | [#3546](https://github.com/HKUDS/nanobot/issues/3546) | Feishu forced threading + memory loss | Partial (related PRs: [#3552](https://github.com/HKUDS/nanobot/pull/3552), [#3549](https://github.com/HKUDS/nanobot/pull/3549)) |
| 🟢 **Low** | [#979](https://github.com/HKUDS/nanobot/issues/979) | `rm` command guard bypassable by social engineering | None—design/philosophy question |

**Regression pattern**: DeepSeek reasoning model integration continues to have edge cases across WebUI, Matrix, and API streaming paths. The `reasoning_content` contract is fragile.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Release | Rationale |
|:---|:---|:---:|:---|
| **Model presets/quick switching** | [#3358](https://github.com/HKUDS/nanobot/pull/3358) | High | Open PR, well-scoped, high user value |
| **OpenTelemetry observability** | [#3173](https://github.com/HKUDS/nanobot/pull/3173) | Medium | Production readiness signal; large PR may need iteration |
| **HookCenter plugin system** | [#3564](https://github.com/HKUDS/nanobot/pull/3564) | Medium | Major architecture change; replaces AgentHook, needs careful review |
| **Gateway lifecycle hooks** | [#3373](https://github.com/HKUDS/nanobot/pull/3373) | Medium | Addresses operational needs; smaller scope |
| **Multi-agent mailbox channel** | [#3461](https://github.com/HKUDS/nanobot/pull/3461) | Medium-Low | Novel inter-agent communication; may incubate longer |
| **Manifest LLM router** | [#3568](https://github.com/HKUDS/nanobot/pull/3568) | Medium | Provider ecosystem expansion; straightforward integration |
| **Sender identity in group chats** | [#3552](https://github.com/HKUDS/nanobot/pull/3552), [#3549](https://github.com/HKUDS/nanobot/pull/3549) | High | Multiple PRs converging; clear user pain point |

**Predicted v0.1.6 contents**: Model presets, sender identity context, DeepSeek fixes, Matrix stability patches, gateway hooks.

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|:---|:---|:---:|
| **Setup friction** | [#603](https://github.com/HKUDS/nanobot/issues/603) Ollama config confusion, [#660](https://github.com/HKUDS/nanobot/issues/660) dependency bloat | High |
| **Windows as second-class** | [#3506](https://github.com/HKUDS/nanobot/issues/3506) path bugs, [#3554](https://github.com/HKUDS/nanobot/issues/3554) Windows-specific DeepSeek issue, POSIX docs | Medium-High |
| **Group chat context/memory** | [#3546](https://github.com/HKUDS/nanobot/issues/3546) "失忆" (amnesia), [#3553](https://github.com/HKUDS/nanobot/issues/3553) Matrix re-reads | High |
| **Local model safety** | [#2298](https://github.com/HKUDS/nanobot/issues/2298) infinite tool loops, [#979](https://github.com/HKUDS/nanobot/issues/979) guard bypass | Medium |
| **Proactive/automation gaps** | [#3484](https://github.com/HKUDS/nanobot/issues/3484) automation without context, [#3559](https://github.com/HKUDS/nanobot/issues/3559) WebSocket vs webhook limitations | Medium |

### Satisfaction Signals

- Strong community contribution (27 PRs in 24h)
- Active Feishu/Discord/Matrix channel maintenance
- Responsive bug closure for clear regressions

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|:---|:---:|:---|:---|
| [#660](https://github.com/HKUDS/nanobot/issues/660) "ultra-lightweight" branding debate | ~2.5 months | **Reputational** | Maintainer decision on positioning or roadmap to reduce dependencies |
| [#2298](https://github.com/HKUDS/nanobot/issues/2298) Infinite tool loops | ~1.5 months | **Reliability** | Design review for loop detection heuristics; no PR yet |
| [#979](https://github.com/HKUDS/nanobot/issues/979) `rm` guard bypass | ~2 months | **Security** | Policy decision: technical fix or documentation/warning? |
| [#1385](https://github.com/HKUDS/nanobot/pull/1385) Preserve reasoning_details multi-turn | ~2 months | **Model compatibility** | Review stalled; OpenRouter users affected |
| [#3173](https://github.com/HKUDS/nanobot/pull/3173) OpenTelemetry tracing | ~2 weeks | **Production readiness** | Large PR; may need maintainer pairing to land |
| [#3564](https://github.com/HKUDS/nanobot/pull/3564) HookCenter architecture | New | **Extensibility** | Major API change; needs architectural review |

**Critical gap**: No maintainer response visible on [#3559](https://github.com/HKUDS/nanobot/issues/3559) (WebSocket/webhook multi-tenant proactive messaging)—this is a platform-level limitation affecting enterprise adoption.

---

*Digest generated from HKUDS/nanobot GitHub activity for 2026-04-30/2026-05-01.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-05-01

## 1. Today's Overview

Hermes Agent shows **extremely high development velocity** with 100 items updated in the last 24 hours (50 issues, 50 PRs) and the major v0.12.0 "Curator" release dropping yesterday. The project is in an active growth phase with a **94% open issue rate** (47/50 open) and **78% open PR rate** (39/50 open), indicating either rapid feature expansion or potential bottleneck in review capacity. The release emphasizes autonomous self-maintenance capabilities, marking a significant architectural shift toward self-improving agent systems.

---

## 2. Releases

### [v0.12.0 "The Curator" (2026.4.30)](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.30)

| Metric | Value |
|--------|-------|
| Commits since v0.11.0 | 1,096 |
| Merged PRs | 550 |
| Files changed | 1,270 |
| Insertions | 217,776 |
| Community contributors | 217 |

**Key Theme:** Autonomous background self-maintenance — Hermes Agent now maintains itself operationally without human intervention.

**Breaking Changes / Migration Notes:** None explicitly documented; however, the scale of changes (217K+ insertions) suggests significant internal refactoring. Users should verify:
- Custom plugin compatibility
- Gateway configuration persistence
- Cron/job scheduling behavior (see PR #18120 for cron hardening)

---

## 3. Project Progress

### Merged/Closed PRs (11 total, select highlights)

| PR | Description | Significance |
|----|-------------|------------|
| [#16100](https://github.com/NousResearch/hermes-agent/pull/16100) | Kanban multi-profile collaboration board implementation | Major feature delivery from RFC #16102 |
| — | *(10 other PRs merged/closed, details limited in source)* | — |

### Active Development Signals (Open PRs advancing)

| PR | Area | Status |
|----|------|--------|
| [#18135](https://github.com/NousResearch/hermes-agent/pull/18135) | Per-turn current time context injection | Fresh, improves temporal awareness |
| [#18115](https://github.com/NousResearch/hermes-agent/pull/18115) | Best-of-N competitive evaluation for `delegate_task` | Phase 1 of #479 — quality improvement for batch delegation |
| [#18133](https://github.com/NousResearch/hermes-agent/pull/18133) | Conductor mission process management | Dashboard + durable supervisor processes |
| [#18130](https://github.com/NousResearch/hermes-agent/pull/18130) | Moonshot/Kimi MCP schema sanitizer fixes | Provider compatibility |
| [#18107](https://github.com/NousResearch/hermes-agent/pull/18107) | Manifest LLM router integration | Cost-optimization via open-source routing |

---

## 4. Community Hot Topics

### Most Active Discussions (by comment count)

| # | Title | Comments | Link | Underlying Need |
|---|-------|----------|------|---------------|
| [#16102](https://github.com/NousResearch/hermes-agent/issues/16102) | RFC: Kanban multi-profile collaboration board | 13 | [Issue](https://github.com/NousResearch/hermes-agent/issues/16102) | **Team coordination for AI agents** — users need multi-agent project management with human oversight; closed as implemented via PR #16100 |
| [#5726](https://github.com/NousResearch/hermes-agent/issues/5726) | Slow startup: Honcho memory provider blocks 60s+ | 5 | [Issue](https://github.com/NousResearch/hermes-agent/issues/5726) | **Performance at scale** — memory provider initialization is a critical path bottleneck |
| [#8576](https://github.com/NousResearch/hermes-agent/issues/8576) | WhatsApp bridge npm vulnerabilities | 5 | [Issue](https://github.com/NousResearch/hermes-agent/issues/8576) | **Security hygiene** — supply chain trust in messaging integrations |
| [#18106](https://github.com/NousResearch/hermes-agent/issues/18106) | IMAP fetch error: 'int' object has no attribute 'decode' | 3 | [Issue](https://github.com/NousResearch/hermes-agent/issues/18106) | **Email gateway reliability** — Apple iCloud IMAP compatibility |
| [#18127](https://github.com/NousResearch/hermes-agent/issues/18127) | Observability for in-flight gateway sessions | 2 | [Issue](https://github.com/NousResearch/hermes-agent/issues/18127) | **Operational visibility** — black-box agent debugging is painful |

**Pattern:** Heavy concentration on **gateway/platform stability** (Slack, Telegram, Email, WhatsApp) and **observability gaps** in v0.12.0's new autonomous modes.

---

## 5. Bugs & Stability

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **P1** | [#16677](https://github.com/NousResearch/hermes-agent/issues/16677) | DeepSeek V4 Pro via OpenRouter → gateway crash loop, Telegram bot death | ❌ None linked |
| **P1** | [#17959](https://github.com/NousResearch/hermes-agent/issues/17959) | Complete keyboard freeze, Ctrl+C ineffective, terminal kill required | ❌ None linked |
| **P1** | [#17908](https://github.com/NousResearch/hermes-agent/issues/17908) | Install blocked: `exclude-newer = "7 days"` invalid uv date | ✅ Closed — fixed |
| **P2** | [#18106](https://github.com/NousResearch/hermes-agent/issues/18106) | IMAP fetch type error (int vs bytes decode) | ❌ None linked |
| **P2** | [#18101](https://github.com/NousResearch/hermes-agent/issues/18101) | Slack thread leakage — background process messages wrong thread | ❌ None linked |
| **P2** | [#16671](https://github.com/NousResearch/hermes-agent/issues/16671) | `session_search` O(n) full session read on long sessions | ❌ None linked |
| **P2** | [#15524](https://github.com/NousResearch/hermes-agent/issues/15524) | `patch` tool omits conditionally required parameters | ❌ None linked |
| **P2** | [#5722](https://github.com/NousResearch/hermes-agent/issues/5722) | `docker_forward_env` silently ignored from config | ❌ None linked |
| **P2** | [#5729](https://github.com/NousResearch/hermes-agent/issues/5729) | Telegram silent cold-boot failure (retry budget) | ❌ None linked |
| **P2** | [#18072](https://github.com/NousResearch/hermes-agent/issues/18072) | Stale Nous auth reported as valid | ❌ None linked |
| **P3** | [#18110](https://github.com/NousResearch/hermes-agent/issues/18110) | `hermes status` false negative on passwordless sudo | ❌ None linked |

**Critical Concern:** Two **P1 unpatched** issues involving complete system unresponsiveness (#17959) and production gateway crashes (#16677). The v0.12.0 release may have introduced regressions in keyboard handling and provider routing.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Maturity Signal | v0.13.0 Likelihood |
|---------|----------|---------------|-------------------|
| **Autonomous Evolution Engine (GASP Loop)** | [#18092](https://github.com/NousResearch/hermes-agent/issues/18092) | Detailed RFC, builds on prior art | High — aligns with "Curator" theme |
| **Non-blocking background delegation** | [#5586](https://github.com/NousResearch/hermes-agent/issues/5586) | PR #18115 in progress (Best-of-N) | High — infrastructure in motion |
| **Configurable retry/backoff strategy** | [#5570](https://github.com/NousResearch/hermes-agent/issues/5570) / [#5571](https://github.com/NousResearch/hermes-agent/pull/5571) | PR open, well-specified | Very High |
| **Plugin platform adapters** | [#12475](https://github.com/NousResearch/hermes-agent/pull/12475) | PR open since Apr 19 | Medium — needs review bandwidth |
| **MiniMax VLM vision** | [#5585](https://github.com/NousResearch/hermes-agent/pull/5585) | PR open | Medium — provider expansion |
| **Workload status bar / TUI improvements** | [#5625](https://github.com/NousResearch/hermes-agent/issues/5625), [#5626](https://github.com/NousResearch/hermes-agent/issues/5626) | Multiple related issues | Medium — UX polish |
| **Korean documentation** | [#18124](https://github.com/NousResearch/hermes-agent/issues/18124) (closed), [#18126](https://github.com/NousResearch/hermes-agent/issues/18126) (open) | Community demand, duplicate suggests interest | Low — i18n typically deferred |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Observability black hole** | [#18127](https://github.com/NousResearch/hermes-agent/issues/18127): "no way to observe what an in-flight gateway agent session is doing" | 🔴 Critical — v0.12.0 regression |
| **Startup performance** | [#5726](https://github.com/NousResearch/hermes-agent/issues/5726): 2+ minute initialization; Honcho sequential blocking | 🔴 High |
| **Session degradation** | [#16671](https://github.com/NousResearch/hermes-agent/issues/16671): Search slows linearly with session length | 🟡 Medium |
| **Platform fragility** | Telegram cold-boot [#5729](https://github.com/NousResearch/hermes-agent/issues/5729), Slack thread leakage [#18101](https://github.com/NousResearch/hermes-agent/issues/18101), WhatsApp security [#8576](https://github.com/NousResearch/hermes-agent/issues/8576) | 🟡 Medium |
| **Configuration ignored** | [#5722](https://github.com/NousResearch/hermes-agent/issues/5722) docker env, [#18110](https://github.com/NousResearch/hermes-agent/issues/18110) sudo detection | 🟡 Medium |

### Positive Signals
- Strong community contribution (217 contributors in one release cycle)
- Active Korean community (translation proposals)
- Sophisticated feature requests suggest power-user adoption (GASP loop, Best-of-N evaluation)

---

## 8. Backlog Watch

### Long-Standing Issues Needing Maintainer Attention

| Issue | Age | Risk | Action Needed |
|-------|-----|------|---------------|
| [#5726](https://github.com/NousResearch/hermes-agent/issues/5726) Honcho startup block | ~24 days | 🔴 User attrition | Profile initialization, async loading |
| [#8576](https://github.com/NousResearch/hermes-agent/issues/8576) WhatsApp npm vulnerabilities | ~19 days | 🔴 Security exposure | Dependency audit, bridge update |
| [#5687](https://github.com/NousResearch/hermes-agent/issues/5687) Anthropic OAuth test failure | ~24 days | 🟡 CI reliability | Test isolation, stdin mocking |
| [#5695](https://github.com/NousResearch/hermes-agent/issues/5695) `/plugins install` error | ~24 days | 🟡 Plugin ecosystem growth | Error handling, URL validation |
| [#5589](https://github.com/NousResearch/hermes-agent/issues/5589) macOS launchd EX_CONFIG | ~25 days | 🟡 Platform parity | External volume / permission handling |

### PRs Stalled >2 Weeks

| PR | Age | Blocker |
|----|-----|---------|
| [#12475](https://github.com/NousResearch/hermes-agent/pull/12475) Plugin platform adapters | ~12 days | Review bandwidth; core architecture decision |
| [#5585](https://github.com/NousResearch/hermes-agent/pull/5585) MiniMax VLM | ~25 days | Provider-specific, needs testing |
| [#5567](https://github.com/NousResearch/hermes-agent/pull/5567) MCP EventBridge integrity | ~25 days | Complex distributed systems logic |

---

## Project Health Assessment

| Dimension | Score | Note |
|-----------|-------|------|
| Velocity | ⭐⭐⭐⭐⭐ | Exceptional commit/PR volume |
| Stability | ⭐⭐⭐☆☆ | v0.12.0 introducing visible regressions; 2 P1 unpatched |
| Community | ⭐⭐⭐⭐⭐ | 217 contributors, active international interest |
| Responsiveness | ⭐⭐⭐☆☆ | 94% open issue rate suggests review bottleneck |
| Security | ⭐⭐⭐☆☆ | Unpatched npm vulns, stale auth false-positives |

**Recommendation:** Prioritize P1 stability fixes (#16677, #17959) and observability gaps (#18127) before expanding autonomous features, or risk user trust erosion in the "Curator" release cycle.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-05-01

## 1. Today's Overview

PicoClaw shows **very high community activity** with 37 issues and 38 PRs updated in the last 24 hours, though merge velocity remains low with only 6 PRs merged/closed versus 32 remaining open. The project released v0.2.8 with significant MCP (Model Context Protocol) CLI tooling improvements, indicating active development in the agent-tooling ecosystem. The issue-to-merge ratio suggests a growing backlog requiring maintainer attention, particularly around provider compatibility and channel integrations. Chinese-speaking users represent a substantial user base, with Feishu/Lark and QQ channel issues prominently featured. Overall project health is **active but bottlenecked at review/merge stage**.

---

## 2. Releases

### [v0.2.8](https://github.com/sipeed/picoclaw/releases/tag/v0.2.8)
**Published:** 2026-04-30

| Change | Description |
|--------|-------------|
| **feat(mcp)** | Added full CLI command suite for MCP server management: `show`, `add`, `list`, `remove`, `test`, `edit` |
| **fix(mcp)** | Send empty object `{}` instead of `null` for tool calls without arguments — fixes compatibility with Zod-validating MCP servers (TypeScript SDK) |
| **fix(build)** | Resolved build failure (#2723) |

**Breaking Changes:** None identified.  
**Migration Notes:** Users with custom MCP servers should verify tool calls now receive empty objects rather than null.

### [nightly: v0.2.8-nightly.20260430.4ffbe7a2](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)
**Automated build** — unstable, use with caution. Full changelog available at comparison link.

---

## 3. Project Progress

**Merged/Closed PRs (6 total, 2 releases + 4 inferred from issue closure):**

| PR | Status | Key Advancement |
|----|--------|---------------|
| MCP CLI commands (2da05c2) | **Released in v0.2.8** | Major UX improvement for MCP server management |
| MCP null→empty object fix (9d8f0dc) | **Released in v0.2.8** | Critical interoperability fix for TypeScript-based MCP servers |
| Build fix (a741460) | **Released in v0.2.8** | CI/CD stability |

**Notable Open PRs Advancing:**

| PR | Link | Progress |
|----|------|----------|
| Slack Webhook output channel | [#2719](https://github.com/sipeed/picoclaw/pull/2719) | New output-only channel with Block Kit formatting, near merge-ready |
| Native audio input for multimodal LLMs | [#2626](https://github.com/sipeed/picoclaw/pull/2626) | Gemini 1.5 audio support, touches core protocol types |
| Pico web chat streaming UX | [#2587](https://github.com/sipeed/picoclaw/pull/2587) | End-to-end streaming with scroll behavior rebuild |

---

## 4. Community Hot Topics

### Most Active Issues (by engagement)

| Rank | Issue | Link | Comments | Underlying Need |
|------|-------|------|----------|---------------|
| 1 | **LLM Account Stacking (Cartridge-Belt)** — Automatic API key rotation on rate limits/quotas | [#2408](https://github.com/sipeed/picoclaw/issues/2408) | 10 | **Production reliability**: Users hitting rate limits need failover without manual intervention; "cartridge-belt" metaphor suggests power-user automation expectations |
| 2 | **Ollama cloud credentials** | [#2225](https://github.com/sipeed/picoclaw/issues/2225) | 9 | **Provider parity**: Ollama cloud (not just local) needs auth support; gap between local-first design and cloud-hosted reality |
| 3 | **Migrate to OpenAI Responses API** | [#2171](https://github.com/sipeed/picoclaw/issues/2171) | 9 | **API modernization**: Future-proofing against Chat Completions deprecation; technical debt reduction |
| 4 | **Scheduled task execution fails** (cron internal channel restriction) | [#2468](https://github.com/sipeed/picoclaw/issues/2468) | 7 | **Automation completeness**: Cron jobs can't use tools due to security sandboxing — architectural tension between security and functionality |

### Most Active PRs

| PR | Link | Focus | Readiness |
|----|------|-------|-----------|
| Slack Webhook channel | [#2719](https://github.com/sipeed/picoclaw/pull/2719) | Enterprise notification integration | High — output-only, low risk |
| SecureString panic fix | [#2270](https://github.com/sipeed/picoclaw/pull/2270) | Configuration safety | Medium — has tests, needs review |
| Native audio multimodal | [#2626](https://github.com/sipeed/picoclaw/pull/2626) | Next-gen LLM capabilities | Medium — core protocol changes |

---

## 5. Bugs & Stability

| Severity | Issue | Link | Status | Fix PR? |
|----------|-------|------|--------|---------|
| **Critical** | **aarch64 .deb package fails to install** — dependency resolution broken on ARM64 | [#1763](https://github.com/sipeed/picoclaw/issues/1763) | Open since Mar 18 | ❌ No PR identified |
| **High** | **Scheduled tasks fail** — `cron` tool blocked by "internal channels only" restriction | [#2468](https://github.com/sipeed/picoclaw/issues/2468) | Active discussion | ❌ No PR identified |
| **High** | **Terminal control character injection** — `exec` and `logs` emit unsafe ANSI/Unicode bidi | [#2377](https://github.com/sipeed/picoclaw/issues/2377) | Security-relevant | ❌ No PR identified |
| **High** | **Windows path separator bug** — `list_dir` fails with `invalid argument` on `\` paths | [#2472](https://github.com/sipeed/picoclaw/issues/2472) | Confirmed | ❌ No PR identified |
| **Medium** | **Skill override bug** — `/use <skill>` overwrites previous skill instead of stacking | [#2478](https://github.com/sipeed/picoclaw/issues/2478) | Code-level analysis provided | ❌ No PR identified |
| **Medium** | **WhatsApp LID format silently drops messages** | [#2540](https://github.com/sipeed/picoclaw/issues/2540) | Root cause identified | ❌ No PR identified |
| **Medium** | **WhatsApp group_trigger.mention_only completely broken** (4 compounded defects) | [#2541](https://github.com/sipeed/picoclaw/issues/2541) | Detailed patch described | ❌ No PR identified |
| **Medium** | **Gateway start button non-functional** | [#2483](https://github.com/sipeed/picoclaw/issues/2483) | Needs reproduction details | ❌ No PR identified |

**Regressions in v0.2.8 area:** None reported yet.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue | Likelihood in Next Version | Rationale |
|---------|-------|---------------------------|-----------|
| **SMTP channel for scheduled email delivery** | [#2465](https://github.com/sipeed/picoclaw/issues/2465) | **High** | Simple, universal protocol; fits cron automation use case; low complexity |
| **Multiple Feishu app instances** | [#2493](https://github.com/sipeed/picoclaw/issues/2493) | **Medium** | Config architecture change; Chinese enterprise demand clear |
| **OAuth 2.1 + PKCE for MCP servers** | [#2546](https://github.com/sipeed/picoclaw/issues/2546) | **Medium** | Aligns with MCP investment in v0.2.8; dashboard UX focus |
| **Dual HEAD authentication for custom models** | [#2169](https://github.com/sipeed/picoclaw/issues/2169) | **Medium** | Simple provider config extension; self-hosted model trend |
| **Memory system with mem0/Supermemory/HydraDB** | [#2515](https://github.com/sipeed/picoclaw/issues/2515) | **Low-Medium** | Large architectural scope; competing with seahorse summarization |
| **LLM Account Stacking/Cartridge-Belt** | [#2408](https://github.com/sipeed/picoclaw/issues/2408) | **Low** | Complex state machine; needs design consensus |
| **Configurable `fresh_tail_size` in seahorse** | [#2527](https://github.com/sipeed/picoclaw/pull/2527) | **High** | PR already exists, trivial constant→config change |

---

## 7. User Feedback Summary

### Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **ARM64/embedded deployment friction** | aarch64 .deb broken ([#1763](https://github.com/sipeed/picoclaw/issues/1763)), Raspberry Pi Zero 2 WhatsApp builds missing ([#2625](https://github.com/sipeed/picoclaw/issues/2625)) | High — hardware is Sipeed's core market |
| **Chinese channel polish gaps** | Feishu only processes last message ([#2464](https://github.com/sipeed/picoclaw/issues/2464), [#2447](https://github.com/sipeed/picoclaw/issues/2447)), no streaming/UI richness ([#2580](https://github.com/sipeed/picoclaw/issues/2580)), QQ missing AppSecret ([#2280](https://github.com/sipeed/picoclaw/issues/2280)) | High — market mismatch with user base |
| **Security sandbox too restrictive** | Workspace jail breaks cron, /tmp access floods logs ([#2519](https://github.com/sipeed/picoclaw/issues/2519)), exec preflight ambiguity ([#2298](https://github.com/sipeed/picoclaw/pull/2298)) | Medium — tension between safety and utility |
| **Provider compatibility whack-a-mole** | Open weights tool calls broken ([#2482](https://github.com/sipeed/picoclaw/issues/2482)), model_name vs model mismatch ([#2480](https://github.com/sipeed/picoclaw/issues/2480)), Codex OAuth empty responses ([#2443](https://github.com/sipeed/picoclaw/pull/2443)) | Medium — ecosystem fragmentation |

### Satisfaction Indicators
- Active feature design discussions (Feishu optimization [#2580](https://github.com/sipeed/picoclaw/issues/2580) has 👍2)
- Users investing in detailed bug reports with patches (WhatsApp LID [#2540](https://github.com/sipeed/picoclaw/issues/2540), mention_only [#2541](https://github.com/sipeed/picoclaw/issues/2541))

### Dissatisfaction Indicators
- "What kind of idiots give this one stars?" — console mode double-character input ([#2429](https://github.com/sipeed/picoclaw/issues/2429))
- Frustration with silent failures (WhatsApp message dropping, no INFO logs)

---

## 8. Backlog Watch

### Critical Attention Needed

| Item | Link | Age | Risk |
|------|------|-----|------|
| **aarch64 .deb install failure** | [#1763](https://github.com/sipeed/picoclaw/issues/1763) | ~6 weeks | **Blocks ARM64 adoption** — Sipeed's hardware core market |
| **SecureString panic fix** | [#2270](https://github.com/sipeed/picoclaw/pull/2270) | ~4 weeks | Crash on config handling; has tests, unmerged |
| **Feishu group mention detection** | [#2091](https://github.com/sipeed/picoclaw/pull/2091) | ~5 weeks | Core channel functionality; bot identity probing |
| **Telegram streaming drafts/routing** | [#2090](https://github.com/sipeed/picoclaw/pull/2090) | ~5 weeks | UX degradation in active channel |
| **Slack mention race condition** | [#2089](https://github.com/sipeed/picoclaw/pull/2089) | ~5 weeks | Double-processing, session fragmentation |
| **OpenAI strict mode compatibility** | [#1683](https://github.com/sipeed/picoclaw/pull/1683) | ~6 weeks | Third-party provider ecosystem health |

### Maintainer Bottleneck Indicators
- 32 open PRs vs 6 merged/closed (84% unmerged rate)
- Multiple PRs by `badgerbees` (prolific contributor) stuck in review since March
- Dependabot PRs ([#2735](https://github.com/sipeed/picoclaw/pull/2735), [#2736](https://github.com/sipeed/picoclaw/pull/2736)) unmerged same-day — routine maintenance backlog

**Recommendation:** Project would benefit from additional maintainer bandwidth or triage automation to prevent contributor fatigue and security patch stagnation.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-05-01

## 1. Today's Overview

NanoClaw saw **extremely high development velocity** with 50 PRs updated in the last 24 hours (39 merged/closed, 11 open) and 8 issues updated (5 still open). The project is in an **intensive stabilization phase** for its v2 release, with heavy focus on security hardening, setup flow refinement, and provider reliability. Notably, two critical security vulnerabilities were resolved today, and the new OpenCode provider is experiencing significant teething problems with multiple high-severity bugs reported. No new releases were cut, suggesting the team is accumulating fixes before tagging.

---

## 2. Releases

**No new releases.** The latest release remains unspecified in available data.

---

## 3. Project Progress

### Major Merged/Closed PRs Today

| PR | Author | Summary | Impact |
|:---|:---|:---|:---|
| [#2001](https://github.com/qwibitai/nanoclaw/pull/2001) | Hinotoi-agent | **Security fix**: Prevents host file read/delete via container-controlled outbox paths by hardening host/container filesystem boundary | Critical security boundary hardening |
| [#2053](https://github.com/qwibitai/nanoclaw/pull/2053) | dim0627 | Applies outbox path-confinement to inbound attachments (stacked on #2001) | Completes #2001's security model |
| [#2055](https://github.com/qwibitai/nanoclaw/pull/2055) | dooha333 | Injects `~/.local/bin` into PATH for setup scripts | Fixes fresh Linux install blocker |
| [#2040](https://github.com/qwibitai/nanoclaw/pull/2040) | ddaniels | Signal adapter: outbound attachments support | New channel capability |
| [#2114](https://github.com/qwibitai/nanoclaw/pull/2114) | robbyczgw-cla | Pre-task scripts now apply to follow-up injections | Fixes silent gate bypass |
| [#2033](https://github.com/qwibitai/nanoclaw/pull/2033) | mzazon | Defers task messages from follow-up polling to main loop | Fixes race condition in task handling |
| [#2112](https://github.com/qwibitai/nanoclaw/pull/2112) | robbyczgw-cla | Wires `maxTextLength` to Telegram engage splitter | UX improvement: no more truncated messages |
| [#2142](https://github.com/qwibitai/nanoclaw/pull/2142) | mnolet | Includes routing in `schedule_task` content JSON | Fixes scheduled message delivery |
| [#2141](https://github.com/qwibitai/nanoclaw/pull/2141) | brookgao | Dota-Feishu decision bridge via IPC with `targetSelf` protocol | Enterprise integration feature |
| [#2111](https://github.com/qwibitai/nanoclaw/pull/2111) | gabi-simons | Deletes scratch agent after ping-pong, simplifies setup flow | Cleaner first-run experience |
| [#2155](https://github.com/qwibitai/nanoclaw/pull/2155) | Koshkoshinsk | Root user warning gate for Linux setup | Safety/UX improvement |
| [#2157](https://github.com/qwibitai/nanoclaw/pull/2157) | gabi-simons | Per-step env var reuse instead of all-or-nothing | More granular setup control |
| [#2107](https://github.com/qwibitai/nanoclaw/pull/2107) | gabi-simons | `resolveChannelName` for Slack and Telegram | Better channel approval UX |
| [#2105](https://github.com/qwibitai/nanoclaw/pull/2105) | gabi-simons | Richer channel-approval flow with agent selection | Major UX upgrade |
| [#2158](https://github.com/qwibitai/nanoclaw/pull/2158) | alipgoldberg | Under-the-sea lobster splash at boot | Polish/character |
| [#2154](https://github.com/qwibitai/nanoclaw/pull/2154), [#2146](https://github.com/qwibitai/nanoclaw/pull/2146) | alipgoldberg | URL fallback improvements in setup browser prompts | Headless/GUI setup robustness |

**Key themes**: Security hardening (#2001, #2053), setup flow refinement (8+ PRs), provider infrastructure, and channel adapter completeness.

---

## 4. Community Hot Topics

### Most Active by Engagement

| Item | Type | Comments/👍 | Analysis |
|:---|:---|:---|:---|
| [#458](https://github.com/qwibitai/nanoclaw/issues/458) | Issue (closed) | 2 comments, 4 👍 | **Network sandboxing for agents** — highest community interest. Users recognize the exfiltration risk of unrestricted container network access combined with `bypassPermissions`. The 4 👍 vs. typical 0 👍 shows security-conscious user base. |
| [#457](https://github.com/qwibitai/nanoclaw/issues/457) | Issue (closed) | 2 comments, 0 👍 | Command injection in `stopContainer()` — critical but less visible to users until exploited. |
| [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) | Issue (open) | 1 comment, 0 👍 | OpenCode provider context loss — **silent failure mode** that breaks agent functionality without obvious errors. |

**Underlying needs**: The community prioritizes **security guarantees** over features. The high engagement on #458 vs. zero engagement on setup polish PRs suggests a production-user skew who need containment assurances before wider deployment.

---

## 5. Bugs & Stability

### Critical/High Severity (Open)

| Issue | Severity | Description | Fix PR? |
|:---|:---|:---|:---|
| [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) | **High** | OpenCode `wrapPromptWithContext` sends literal `@./...md` lines; fragments and `CLAUDE.md` never reach LLM — **silent context loss** | ❌ None |
| [#2148](https://github.com/qwibitai/nanoclaw/issues/2148) | **High** | `proc.kill('SIGKILL')` leaks binary, holds port 4096; compounds with 90s timeout to make container unusable | ❌ None |
| [#2147](https://github.com/qwibitai/nanoclaw/issues/2147) | **High** | Orphan `processing_ack` rows survive `kill-ceiling`, instantly SIGKILL next respawn — **claim-stuck loop persists after #209061f** | ❌ None |
| [#2149](https://github.com/qwibitai/nanoclaw/issues/2149) | Medium | Hardcoded 90s idle timeout breaks local-model setups (slow inference) | ❌ None |
| [#2159](https://github.com/qwibitai/nanoclaw/issues/2159) | Unspecified | OneCLI `ensureAgent` fails: agent group IDs with underscores rejected by `[a-z0-9-]` validator | ❌ None |

### Fixed Today

| Issue | Severity | Fix PR |
|:---|:---|:---|
| [#458](https://github.com/qwibitai/nanoclaw/issues/458) | High | Network restrictions merged |
| [#457](https://github.com/qwibitai/nanoclaw/issues/457) | Critical | Container command injection patched |
| [#1973](https://github.com/qwibitai/nanoclaw/issues/1973) | Unspecified | PATH propagation fixed via [#2055](https://github.com/qwibitai/nanoclaw/pull/2055) |

**Assessment**: The OpenCode provider is in **crisis** — 4 of 5 open issues target it, with 3 high-severity bugs creating cascading failures (context loss → process leaks → port exhaustion → timeout death spiral). The hardcoded 90s timeout (#2149) is a design debt decision that now breaks the local-model use case. No fix PRs exist for any open bug, suggesting either provider ownership gap or the issues were filed today and fixes are in progress.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood in Next Version |
|:---|:---|:---|
| **Configurable provider timeouts** | #2149 (local models need >90s) | **High** — trivial fix, clear user need |
| **Proper process lifecycle management for OpenCode** | #2148 (SIGKILL leaks) | **High** — blocking stability issue |
| **Context/fragment delivery overhaul** | #2150 (literal @ lines) | **High** — core provider functionality broken |
| **Database cleanup/ack consistency** | #2147 (orphan rows) | **Medium** — requires careful state machine design |
| **OneCLI identifier compatibility** | #2159 (underscore vs. hyphen) | **Medium** — needs cross-project coordination |
| **Network sandboxing as default** | #458 (merged but may need enforcement toggle) | **Medium** — security feature, may need migration path |
| **More channel adapters with attachment support** | #2040 (Signal), pattern from Slack/Telegram | **Medium** — incremental expansion |

**Prediction**: The next release will focus almost entirely on **OpenCode provider stabilization** and **setup flow completion**. Feature work appears paused until v2 exits this stabilization window.

---

## 7. User Feedback Summary

### Pain Points

| Issue | User Impact | Severity |
|:---|:---|:---|
| Fresh Linux installs fail at Claude token registration | New user dropout at setup | **Blocking** |
| Agent operates without instructions (context loss) | Silent malfunction, user confusion | **Critical** |
| Local model setups timeout and die | Self-hosting users excluded | **High** |
| Container becomes unusable after timeouts | Requires manual intervention/restart | **High** |
| Session locks after kill, needs DB edit | Operational burden, requires SSH access | **High** |

### Use Cases Emerging

- **Enterprise bridge integrations** (Feishu/Dota via IPC in #2141)
- **Self-hosted/local model deployments** (blocked by #2149)
- **Security-conscious production deployments** (driving #458 engagement)

### Satisfaction Signals

- Strong security response time (critical bugs #457, #458 closed same day as activity spike)
- Setup UX investment is substantial (10+ PRs in pipeline)
- Community contribution quality high (PRs follow guidelines, stacked PR discipline)

### Dissatisfaction Signals

- OpenCode provider appears **under-tested** — 4 bugs filed same day suggests either new code landing or new user cohort hitting it
- "Persists after #209061f" in #2147 indicates **regression/recurring issue** eroding trust

---

## 8. Backlog Watch

### Needs Maintainer Attention

| Item | Age | Risk |
|:---|:---|:---|
| [#2052](https://github.com/qwibitai/nanoclaw/pull/2052) — Auto-bootstrap local OneCLI admin | Open since 2026-04-27 | **Blocking fresh installs**; complements closed #2055 but still open |
| [#2150](https://github.com/qwibitai/nanoclaw/issues/2150), [#2148](https://github.com/qwibitai/nanoclaw/issues/2148), [#2147](https://github.com/qwibitai/nanoclaw/issues/2147), [#2149](https://github.com/qwibitai/nanoclaw/issues/2149) | All filed 2026-04-30 | **OpenCode provider cluster failure** — needs owner assignment |
| [#2159](https://github.com/qwibitai/nanoclaw/issues/2159) | Filed 2026-04-30 | Cross-system identifier compatibility; may need OneCLI team coordination |

### Recommendations

1. **Emergency triage on OpenCode provider** — assign dedicated owner, consider feature-flagging or reverting if fixes aren't imminent
2. **Merge #2052** — unblocks v2 setup completion
3. **Audit #209061f fix** — #2147 explicitly states the claim-stuck loop persists after that commit; root cause analysis needed

---

*Digest generated from GitHub activity data for qwibitai/nanoclaw as of 2026-05-01.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-05-01

## 1. Today's Overview

NullClaw shows **moderate development velocity** with 5 PRs active in the past 24 hours, though no new issues or releases were published. All activity originates from a single contributor (vernonstinebaker), indicating concentrated maintenance effort rather than broad community participation. The project is clearly in a **stabilization phase following the Zig 0.16 migration**, with multiple closed PRs addressing high-severity production regressions. Two critical fixes have already landed, while three PRs remain open for review—two targeting POSIX compatibility and Mattermost integration reliability, and one introducing security policy improvements. Overall project health appears **recovering from migration stress** but would benefit from broader reviewer engagement.

---

## 2. Releases

*No new releases published.*

---

## 3. Project Progress

### Merged/Closed Today

| PR | Description | Significance |
|:---|:---|:---|
| [#876](https://github.com/nullclaw/nullclaw/pull/876) | `fix(compat): replace readSliceShort with readVec in Stream.read` | **Unblocks HTTP/1.1 keep-alive clients** — eliminates blocking behavior that caused second `readv()` calls to hang indefinitely on persistent connections |
| [#873](https://github.com/nullclaw/nullclaw/pull/873) | `fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin` | **Resolves dual high-severity regressions**: 100% CPU utilization from busy-spin on `EAGAIN`, plus silent Mattermost messaging failures from empty POST bodies |

**Technical advancement**: The closed PRs establish more robust async I/O patterns for the compatibility layer and fix integration-critical bugs in the Mattermost channel backend. These represent foundational infrastructure repairs rather than feature additions.

---

## 4. Community Hot Topics

*No community-driven hot topics identified.* All 5 PRs have **zero comments and zero reactions**, and no open issues exist. The absence of discussion suggests:

- **Low community engagement** — possibly due to small user base, effective self-service documentation, or maintainer responsiveness making prolonged discussion unnecessary
- **Risk**: Critical changes like [#875](https://github.com/nullclaw/nullclaw/pull/875) (security policy overhaul) receive no external review, increasing single-point-of-failure dependency on vernonstinebaker

| PR | Status | Engagement | Link |
|:---|:---|:---|:---|
| #878 thread.sleep POSIX fix | OPEN | 0 comments, 0 👍 | [View PR](https://github.com/nullclaw/nullclaw/pull/878) |
| #877 Mattermost writer allocation fix | OPEN | 0 comments, 0 👍 | [View PR](https://github.com/nullclaw/nullclaw/pull/877) |
| #875 Security tier classification | OPEN | 0 comments, 0 👍 | [View PR](https://github.com/nullclaw/nullclaw/pull/875) |

**Underlying need**: The project would benefit from establishing code review norms and attracting Zig-literate contributors, particularly for POSIX systems programming and security policy domains.

---

## 5. Bugs & Stability

| Severity | Issue/PR | Description | Fix Status |
|:---|:---|:---|:---|
| **HIGH** (Resolved) | [#873](https://github.com/nullclaw/nullclaw/pull/873) | Gateway accept-loop CPU spin (100% utilization) — affects all platforms in daemon mode | **CLOSED** 2026-04-30 |
| **HIGH** (Resolved) | [#873](https://github.com/nullclaw/nullclaw/pull/873) | Silent Mattermost messaging failure — empty POST bodies since Zig 0.16 migration | **CLOSED** 2026-04-30 |
| **HIGH** (Resolved) | [#876](https://github.com/nullclaw/nullclaw/pull/876) | HTTP/1.1 keep-alive clients permanently blocked on second `readv()` call | **CLOSED** 2026-04-30 |
| **MEDIUM** (Open) | [#878](https://github.com/nullclaw/nullclaw/pull/878) | `thread.sleep()` fails to actually suspend OS thread on POSIX — cooperative yield only, causing unexpected scheduling behavior | **PR OPEN**, awaiting review |
| **MEDIUM** (Open) | [#877](https://github.com/nullclaw/nullclaw/pull/877) | Mattermost POST requests send uninitialized/empty body due to `Allocating` writer flush timing change in Zig 0.16 | **PR OPEN**, awaiting review |

**Stability assessment**: The three closed PRs eliminated **production-critical regressions** introduced by the Zig 0.16 migration. The two open PRs address remaining edge cases in the same migration fallout. Risk profile is **decreasing but not yet resolved** — the POSIX sleep issue could cause subtle timing bugs in agent scheduling.

---

## 6. Feature Requests & Roadmap Signals

No explicit feature requests exist in today's data. However, [#875](https://github.com/nullclaw/nullclaw/pull/875) contains **implicit roadmap signals**:

| Signal | Description | Likely Priority |
|:---|:---|:---|
| **Security policy refinement** | 3-tier risk classification (low/medium/high) replacing binary high/low model | Near-term — PR is open and substantial |
| **Supervised execution improvements** | `block_` prefix stripping and medium-risk tier enabling `curl` in supervised mode | Near-term — directly addresses #167 |
| **Network tool accessibility** | Explicit allowlisting of `curl`, `wget`, `nc`, `scp`, `ftp`, `telnet` | Medium — unblocks common agent workflows |

**Prediction**: If [#875](https://github.com/nullclaw/nullclaw/pull/875) merges, the next logical step would be configurable policy files or per-agent risk profiles, moving beyond hardcoded classification.

---

## 7. User Feedback Summary

*No direct user feedback available* — zero issues opened, zero comments on PRs.

**Inferred pain points from PR analysis**:

| Pain Point | Evidence | User Impact |
|:---|:---|:---|
| **Zig 0.16 migration fragility** | 4 of 5 PRs directly address migration regressions | Production downtime, silent failures, resource exhaustion |
| **Mattermost reliability** | 2 PRs (#873, #877) fix Mattermost-specific breakages | Broken agent-to-team communication, message loss |
| **POSIX platform inconsistency** | #878 sleep behavior, #876 read behavior | Unpredictable performance on Linux/Unix deployments |
| **Security policy too restrictive** | #875 references `curl` "impossible to use even in supervised mode" | Limited agent capability for legitimate network operations |

**Satisfaction inference**: Users who stayed through the Zig 0.16 migration likely experienced **significant friction** but may be seeing improvement as fixes land. The absence of complaints could indicate either satisfaction recovery or user attrition.

---

## 8. Backlog Watch

| Item | Age | Concern | Action Needed |
|:---|:---|:---|:---|
| **All PRs lack reviewers** | N/A | Single-maintainer bottleneck; no code review process evident | Recruit Zig-experienced maintainers or establish review rotation |
| **Issue #167** (referenced in #875) | Unknown | Security classification enhancement requested; PR #875 claims to close it | Verify #167 closure upon #875 merge; check if other security issues languish |
| **No open issues** | — | May indicate issue tracking elsewhere or discouraged reporting | Audit if users are using discussions, Discord, or other channels instead |

**Critical watch**: The project exhibits **bus factor = 1** risk. If vernonstinebaker becomes unavailable, there is no evident secondary maintainer with merge capability. The three open PRs from today alone could stall indefinitely.

---

*Digest generated from github.com/nullclaw/nullclaw data as of 2026-05-01. All links: https://github.com/nullclaw/nullclaw*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-05-01

## Today's Overview

IronClaw shows **intense development velocity** with 24 issues updated and 39 PRs in the last 24 hours, reflecting a project in active architectural transition. The dominant theme is the **"Reborn" architecture landing**—a major substrate rewrite tracked through epic #2987 with 15+ related issues and PRs in motion. Despite high activity, **zero releases** and **three live canary failures** (#3113, #3115, #3116) on the same commit suggest production stability concerns. The team is prioritizing infrastructure over user-facing features, with most PRs closed being test coverage or stub implementations rather than complete features.

---

## Releases

**No new releases** (0 releases in last 24h).

---

## Project Progress

### Merged/Closed PRs Today (21 total; notable items)

| PR | Author | Summary | Significance |
|:---|:---|:---|:---|
| [#3098](https://github.com/nearai/ironclaw/pull/3098) | zmanian | **Shared runtime HTTP egress** — `RuntimeHttpEgress` contracts with DNS/SSRF protection, redirect-disabled transport, policy checks | Core Reborn infrastructure; enables #3123 |
| [#3095](https://github.com/nearai/ironclaw/pull/3095) | serrrfirat | **Host runtime contract facade** — `ironclaw_host_runtime` stable API for upper Reborn layers | Unblocks parallel development on `TurnCoordinator`, `AgentLoopHost` |
| [#3120](https://github.com/nearai/ironclaw/pull/3120) | serrrfirat | **Real cancel/health in host runtime** — replaced stubs with actual process cancellation and health probes | Critical for production readiness |
| [#3117](https://github.com/nearai/ironclaw/pull/3117) | serrrfirat | **WASM runtime failure edge coverage** — malformed bytes, non-component-model rejection, prepare failures | Test debt reduction |
| [#3114](https://github.com/nearai/ironclaw/pull/3114) | serrrfirat | **Memory substrate vertical integration tests** | Closes #3067 Phase 5 |
| [#3119](https://github.com/nearai/ironclaw/pull/3119) | nickpismenkov | **Disable canary issue creation** | Likely response to canary noise; may mask real problems |
| [#3124](https://github.com/nearai/ironclaw/pull/3124), [#3125](https://github.com/nearai/ironclaw/pull/3125) | zetyquickly | Demo/abound empty notification fixes (both closed) | Rapid iteration on #1764 demo branch |
| [#3130](https://github.com/nearai/ironclaw/pull/3130) | zmanian | Trace Commons client (closed, superseded by #3131) | Observability infrastructure |

### Open PRs Advancing

| PR | Author | Status |
|:---|:---|:---|
| [#3131](https://github.com/nearai/ironclaw/pull/3131) | zmanian | **XL: Trace Commons client** — observability capture, policy, CLI, web API, Reborn wiring |
| [#3126](https://github.com/nearai/ironclaw/pull/3126) | serrrfirat | **XL: Host runtime services graph** — full `HostRuntimeServices` composition with Script/MCP/WASM adapters |
| [#3123](https://github.com/nearai/ironclaw/pull/3123) | serrrfirat | **WASM HTTP through shared egress** — consumes #3098 |
| [#3122](https://github.com/nearai/ironclaw/pull/3122) | ilblackdragon | **Externally-provided tools in Responses API** — OpenAI-compatible wire shape |
| [#3129](https://github.com/nearai/ironclaw/pull/3129) | zetyquickly | **Reasoning trace plumbing** — GLM-5, DeepSeek, o-series, Qwen chain-of-thought emission |
| [#3121](https://github.com/nearai/ironclaw/pull/3121) | ironclaw-ci[bot] | **Staging→main promotion** (2026-04-30 16:44 UTC) |

---

## Community Hot Topics

### Most Active by Engagement

| Item | Comments | Analysis |
|:---|:---|:---|
| [#2987](https://github.com/nearai/ironclaw/issues/2987) — **EPIC: Reborn architecture landing strategy** | **43 comments** | The central coordination point. Core tension: avoiding "one massive stacked PR" while maintaining coherence. Suggests organizational scaling challenge in large Rust refactors. |
| [#3067](https://github.com/nearai/ironclaw/issues/3067) — **Vertical-slice integration test suite** | **10 comments** | Recognition that unit tests don't prove substrate works. Need for "caller-level" validation indicates previous test gaps at API boundaries. |
| [#3103](https://github.com/nearai/ironclaw/issues/3103) — **High ASCII TUI broken** | **7 comments** | User-facing regression with immediate workaround demand ("provide an argument to return to what worked"). |

### Underlying Needs

- **Reborn delivery anxiety**: The epic's comment volume reveals coordination overhead of architectural rewrites in open source
- **Test strategy maturation**: Move from crate-local to vertical integration reflects growing engineering maturity
- **Backward compatibility expectation**: TUI issue shows users expect stability in terminal interfaces, especially for developer tools

---

## Bugs & Stability

| Severity | Issue | Description | Fix Status |
|:---|:---|:---|:---|
| **🔴 Critical** | [#3113](https://github.com/nearai/ironclaw/issues/3113) | Live canary: provider-matrix anthropic failed | Same commit as #3115, #3116; #3119 disables issue creation rather than fixes root cause |
| **🔴 Critical** | [#3115](https://github.com/nearai/ironclaw/issues/3115) | Live canary: persona-rotating failed | Likely systemic, not lane-specific |
| **🔴 Critical** | [#3116](https://github.com/nearai/ironclaw/issues/3116) | Live canary: public-smoke failed | All three canaries on commit `2a65da7` |
| **🟡 High** | [#3128](https://github.com/nearai/ironclaw/issues/3128) | **Gmail OAuth 502 on callback** | Workaround exists (install via settings); no fix PR yet |
| **🟡 High** | [#3103](https://github.com/nearai/ironclaw/issues/3103) | **High ASCII TUI display corruption** | No fix PR; user requests fallback flag |
| **🟡 High** | [#3108](https://github.com/nearai/ironclaw/issues/3108) | **Web IDE API keys return 401 "Session not found"** | Gateway/auth mismatch; no fix PR |
| **🟢 Medium** | [#3112](https://github.com/nearai/ironclaw/issues/3112) → closed | Workspace DB adapter approach **abandoned** | Superseded by #3118 (native Reborn memory service) |

**Stability Assessment**: Three simultaneous canary failures on identical commit suggest **regression in staging**. The response (#3119 disabling canary issue creation) is a process band-aid, not a fix. This risks masking production-readiness signals during Reborn landing.

---

## Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood in Next Release |
|:---|:---|:---|
| [#3036](https://github.com/nearai/ironclaw/issues/3036) — **Configuration-as-Code** | Strong demand from operators; "no schema, no diff, no audit trail" pain | Medium — ilblackdragon authored, 1 👍, but Reborn infrastructure blocks |
| [#3069](https://github.com/nearai/ironclaw/issues/3069) — **Separate `ironclaw-reborn` binary** | Explicit product boundary request | **High** — standalone ownership task, first milestone defined |
| [#3127](https://github.com/nearai/ironclaw/issues/3127) — **Scalable capability permission UX** | Security/UX intersection; obligations from #3080 need resolution | Medium — design phase, no implementation PR |
| [#3107](https://github.com/nearai/ironclaw/issues/3107) — **AgentLoopDriver and run-class profiles** | Needed for multiple loop execution models | High — blocks loop variety, serrrfirat actively filing related PRs |
| [#3118](https://github.com/nearai/ironclaw/issues/3118) — **Native Reborn memory storage/search** | Supersedes adapter approach; clean isolation desired | **High** — immediate priority, replaces closed #3112 |

**Reborn completion predictors**: #3016 (AgentLoopHost facade), #3013 (TurnCoordinator), #3091 (loop support services), #3092 (reference loops), #3094 (approval/auth services) all lack comments but are cutover blockers—suggesting either silent progress or pending dependency resolution.

---

## User Feedback Summary

### Real Pain Points

| Source | Pain Point | Context |
|:---|:---|:---|
| fmotta (#3103) | **TUI regressions break workflow** | "Scrolling messes up display"; needs `--no-fancy-ui` equivalent |
| sergeiest (#3128) | **OAuth flows fail in chat assistant** | 502 on Gmail callback; inconsistent with settings-path success |
| ALuhning (#3108) | **API key generation broken for private gateway** | Web IDE "Configure: NEAR AI" dialog produces invalid keys; instance-provisioned keys work |

### Satisfaction/Dissatisfaction Pattern

- **Dissatisfied**: Users experiencing **authentication and terminal UI friction**—foundational interactions that "just worked" previously
- **Satisfied (implied)**: Staging promotion (#3121) proceeding, suggesting internal confidence in batch quality despite canary failures
- **At risk**: Operator configurability (#3036) — sophisticated users want declarative control, currently forced into "hand-edit a mix of `.env`, workspace docs, settings JSON, extension installs, and runtime flags"

### Use Case Signals

- **Headless server deployment** (#3105): ek775's WASM channel fallback for "ubuntu server with ollama gemma4" indicates self-hosted/edge usage growing
- **Financial integrations** (#1764): Abound demo with forex timing, credential injection, guardrails suggests enterprise fintech targeting

---

## Backlog Watch

| Item | Age | Risk | Why Needs Attention |
|:---|:---|:---|:---|
| [#1764](https://github.com/nearai/ironclaw/pull/1764) | **~1 month** | High | XL PR open since 2026-03-30; "Abound demo" with Responses API, credential injection, skills, guardrails. High scope, high risk, many merge conflicts likely. Comment count unavailable—may indicate stalled review. |
| [#1446](https://github.com/nearai/ironclaw/pull/1446) | **~1.5 months** | Medium | Aliyun Coding Plan support; contributor: new. Long-running, may need maintainer guidance or scope reduction. |
| [#1479](https://github.com/nearai/ironclaw/pull/1479) | **~1.5 months** | Medium | near-intents tool (Defuse 1Click API); contributor: new. Similar pattern—external contributor, extended timeline. |
| [#2987](https://github.com/nearai/ironclaw/issues/2987) | 4 days | Managed | High comment count is healthy coordination, but 43 comments in 4 days suggests potential decision fatigue |

**Maintainer attention needed**: The two-month-old PRs from new contributors (#1446, #1479) risk contributor attrition without feedback. #1764's demo scope may need decomposition to land. The canary failure pattern (#3113-#3116) requires root cause analysis, not just issue suppression.

---

*Digest compiled from 24 issues, 39 PRs, 0 releases. Data timestamp: 2026-05-01.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-05-01

## 1. Today's Overview

LobsterAI shows **stagnant development activity** with a significant backlog accumulation. Despite 12 PRs receiving updates in the last 24 hours, **zero PRs were merged or closed**—all 12 remain open, many marked as `[stale]` since their creation on 2026-03-25. The single active issue (#1878) highlights a critical IM bot configuration blocker affecting WeChat integration. With no new releases and a 6-week-old unmerged PR queue, the project exhibits **maintainer bandwidth constraints** that threaten community contribution velocity and user trust in the project's forward momentum.

---

## 2. Releases

**No new releases.** The project has no published releases as of this digest.

---

## 3. Project Progress

**No merged or closed PRs today.** All 12 updated PRs remain open with no forward progress:

| PR | Author | Status | Summary |
|---|---|---|---|
| #826 | MC7177 | `[stale]` | URL protocol validation for `shell.openExternal` |
| #827 | huntbao | `[stale]` | Prevent duplicate skill installation |
| #828 | BucleLiu | `[stale]` | Path traversal fix in `localfile://` handler |
| #830 | tomZou12 | `[stale]` | SQLite performance optimization |
| #835 | gssify | `[stale]` | JSON paste mode for batch MCP server creation |
| #836 | leedalei | `[stale]` | Handle duplicate local skill imports |
| #838 | jezhee | `[stale]` | Per-channel model override for IM bot sessions |
| #841 | leedalei | `[stale]` | Prevent overlapping runtime poll cycles |
| #842 | happyoung | `[stale]` | Security environment scanning with UI |
| #847 | leedalei | `[stale]` | Preserve single tilde ranges in markdown |
| #848 | leedalei | `[stale]` | Batch config writes in transaction |
| #852 | noransu | `[stale]` | Fix main process crash on window destroy |

**Assessment:** Bulk timestamp updates (all to 2026-04-30) suggest automated stale-bot activity or batch CI re-triggering rather than substantive review engagement.

---

## 4. Community Hot Topics

### Most Active Discussion

| Item | Activity | Link | Analysis |
|---|---|---|---|
| **#1878** — IM机器人 微信接口 配置扫码后无法输入验证码 | 1 comment, created 2026-04-30 | [Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | **Critical UX blocker**: WeChat's updated auth flow requires 6-digit code entry in OpenClaw client, but no input UI exists. This breaks a core IM bot onboarding path for China's largest messaging platform. |

### Underlying Needs
- **IM ecosystem parity**: Users need seamless WeChat integration; auth flow changes by platform providers require rapid client adaptation
- **Security hardening urgency**: PRs #826, #828, #842 address security gaps (URL protocol validation, path traversal, environment scanning) but languish unmerged—suggests either security review backlog or architectural disagreement

---

## 5. Bugs & Stability

| Severity | Item | Description | Fix PR Available? |
|---|---|---|---|
| **🔴 Critical** | #1878 | WeChat IM bot auth flow broken—no 6-digit code input UI | ❌ No PR |
| **🟠 High** | #852 | Main process crash when `event.sender` used after window destroy | ✅ [PR #852](https://github.com/netease-youdao/LobsterAI/pull/852) — **unmerged** |
| **🟠 High** | #828 | Path traversal vulnerability in `localfile://` protocol handler | ✅ [PR #828](https://github.com/netease-youdao/LobsterAI/pull/828) — **unmerged** |
| **🟡 Medium** | #847 | Single tilde ranges (e.g., `11~21°C`) incorrectly rendered as strikethrough | ✅ [PR #847](https://github.com/netease-youdao/LobsterAI/pull/847) — **unmerged** |
| **🟡 Medium** | #841 | Overlapping runtime poll cycles causing potential race conditions | ✅ [PR #841](https://github.com/netease-youdao/LobsterAI/pull/841) — **unmerged** |

**Concern:** Two critical/high-severity stability issues (#852 crash, #828 security) have had fixes pending for **6 weeks** without merge. This pattern risks security exposure and user data loss.

---

## 6. Feature Requests & Roadmap Signals

| Feature | PR/Issue | Predicted Priority | Rationale |
|---|---|---|---|
| **Security environment scanning UI** | [PR #842](https://github.com/netease-youdao/LobsterAI/pull/842) | High | Enterprise adoption blocker; 9-class permission management aligns with compliance trends |
| **Per-channel IM model override** | [PR #838](https://github.com/netease-youdao/LobsterAI/pull/838) | High | Operational necessity for multi-tenant bot deployments; cost/performance optimization |
| **Batch MCP server creation (JSON paste)** | [PR #835](https://github.com/netease-youdao/LobsterAI/pull/835) | Medium | Developer experience improvement; reduces friction for Claude Desktop migrations |
| **SQLite performance tuning** | [PR #830](https://github.com/netease-youdao/LobsterAI/pull/830) | Medium | Desktop app responsiveness; journal mode and cache optimizations are low-risk wins |
| **Duplicate skill prevention** | [PR #827](https://github.com/netease-youdao/LobsterAI/pull/827), [#836](https://github.com/netease-youdao/LobsterAI/pull/836) | Medium | Two competing implementations suggest design review needed |

**Prediction:** If maintainer capacity returns, security (#842, #828, #826) and IM operational features (#838) likely head next release due to enterprise/blocking user impact.

---

## 7. User Feedback Summary

### Pain Points
| Source | Issue | User Impact |
|---|---|---|
| #1878 | WeChat auth UI gap | **Complete blocker** for China-based IM bot deployment |
| #827/#836 | Duplicate skill installation | Cluttered skill library, version confusion, storage waste |
| #830 | SQLite defaults | Perceived sluggishness, battery drain from excessive disk I/O |

### Use Case Signals
- **Multi-platform IM operations**: PR #838 demand indicates users running LobsterAI bots across Slack, Discord, Feishu, DingTalk, Telegram with model-specific needs
- **Security-conscious deployments**: PR #842's comprehensive permission model suggests enterprise/team usage requiring audit trails and least-privilege skill execution
- **MCP ecosystem integration**: PR #835 JSON paste mode signals users migrating from Claude Desktop or managing multiple MCP server configurations

### Satisfaction Risk
High dissatisfaction likely from: (1) unmerged security fixes creating exposure anxiety, (2) WeChat breakage affecting core China market, (3) 6-week PR stagnation discouraging further community contribution.

---

## 8. Backlog Watch

### Critical PRs Needing Maintainer Action

| PR | Age | Risk of Bitrot | Action Needed |
|---|---|---|---|
| [PR #828](https://github.com/netease-youdao/LobsterAI/pull/828) — Path traversal fix | 6 weeks | **High** | Security review + merge; CVE-worthy if exploited |
| [PR #852](https://github.com/netease-youdao/LobsterAI/pull/852) — Main process crash fix | 6 weeks | **High** | Code review; references #624 suggesting recurring issue |
| [PR #826](https://github.com/netease-youdao/LobsterAI/pull/826) — URL protocol validation | 6 weeks | Medium | Security review; may conflict with #842's broader security framework |
| [PR #842](https://github.com/netease-youdao/LobsterAI/pull/842) — Security scanning framework | 6 weeks | Medium | Architectural review; potentially supersedes #826, #828 if merged first |
| [PR #836](https://github.com/netease-youdao/LobsterAI/pull/836) vs [PR #827](https://github.com/netease-youdao/LobsterAI/pull/827) | 6 weeks | Medium | **Design decision required**: Two approaches to duplicate skill handling (content fingerprint vs. name comparison)—choose one or reconcile |

### Issue Requiring Immediate Triage
- [Issue #1878](https://github.com/netease-youdao/LobsterAI/issues/1878): WeChat auth flow—needs PM/UX input on 6-digit code input design; likely fast-track if IM bot adoption is a priority metric

---

## Project Health Assessment

| Metric | Status |
|---|---|
| Contribution velocity | ⚠️ **Declining** — 0% merge rate on active PRs |
| Security posture | 🔴 **At risk** — Unmerged fixes for traversal, protocol injection, crash exploits |
| Issue responsiveness | 🟡 **Moderate** — New issue acknowledged, but no visible assignment |
| Release cadence | ⚠️ **Stalled** — No releases; unclear versioning strategy |
| Community retention | 🔴 **Threatened** — 6-week stale PRs risk contributor attrition |

**Recommendation:** LobsterAI maintainers should prioritize a security-focused merge sprint and establish transparent PR review SLAs to restore community confidence.

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-05-01

## 1. Today's Overview

Moltis demonstrated **exceptional development velocity** on 2026-04-30 with 21 PRs updated and 18 merged/closed against only 3 remaining open. The project released version `20260430.01` amid a heavy bug-fix sprint that resolved 6 of 7 active issues. Activity is heavily concentrated in three maintainers—**penso** (10 PRs), **gaarf** (4 PRs), and **Cstewart-HC** (2 PRs)—suggesting a small core team with high throughput. The open PRs represent significant architectural expansions (multi-backend sandboxes, new providers, UI polish) that signal ambitious roadmap execution. Overall project health appears **strong** with rapid issue resolution and consistent feature delivery.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| [20260430.01](https://github.com/moltis-org/moltis/releases/tag/20260430.01) | 2026-04-30 | No detailed changelog provided in release metadata. Based on merged PRs, this release likely bundles: SIGTERM handling for Docker deployments, DeepInfra provider, sandbox GPU passthrough, auto-generated session titles, message action bars, and multiple web UI fixes. |

**Breaking Changes/Migration:** None explicitly flagged in PR summaries. The SIGTERM fix ([PR #940](https://github.com/moltis-org/moltis/pull/940)) changes shutdown behavior—Docker deployments now graceful-drain rather than immediate-kill, which may affect timeout-sensitive orchestration.

---

## 3. Project Progress

### Merged/Closed PRs (18 items)

| PR | Author | Summary | Impact |
|----|--------|---------|--------|
| [#33](https://github.com/moltis-org/moltis/pull/33) | penso | Google Gemini provider (API key + OAuth) | **Major** — First-class Google AI integration |
| [#288](https://github.com/moltis-org/moltis/pull/288) | penso | TypeScript/Python/Go SDK foundations | **Major** — Developer ecosystem expansion |
| [#201](https://github.com/moltis-org/moltis/pull/201) | penso | Full TUI onboarding flow | **Major** — New user experience |
| [#935](https://github.com/moltis-org/moltis/pull/935) | penso | Per-skill usage telemetry | Medium — Operational visibility |
| [#941](https://github.com/moltis-org/moltis/pull/941) | penso | Fix system-notice overflow | Low — UI polish |
| [#940](https://github.com/moltis-org/moltis/pull/940) | penso | SIGTERM graceful shutdown | **Critical** — Production reliability |
| [#934](https://github.com/moltis-org/moltis/pull/934) | penso | DeepInfra provider + GPU passthrough + strict model selection | **Major** — Infrastructure expansion |
| [#936](https://github.com/moltis-org/moltis/pull/936) | gaarf | Clipboard fix for insecure HTTP contexts | Medium — Self-hosted deployments |
| [#933](https://github.com/moltis-org/moltis/pull/933) | penso | Auto-generate session titles from conversation | Medium — UX enhancement |
| [#197](https://github.com/moltis-org/moltis/pull/197) | esojourn | `/autolabel` command for session titles | Medium — (superseded by #933's automatic approach) |
| [#932](https://github.com/moltis-org/moltis/pull/932) | penso | Message action bar (Copy/Retry/Fork) | Medium — Core chat UX |
| [#931](https://github.com/moltis-org/moltis/pull/931) | penso | Replace completion-based model probe with catalog check | **Critical** — Fixes 30s timeout for large local models |
| [#925](https://github.com/moltis-org/moltis/pull/925) | Cstewart-HC | Remove scroll-hijacking in chat | Medium — UX regression fix |
| [#921](https://github.com/moltis-org/moltis/pull/921) | Cstewart-HC | Auto-trigger code indexing on project changes | **Major** — Developer workflow automation |
| [#259](https://github.com/moltis-org/moltis/pull/259) | blacksmith-sh[bot] | Migrate CI to Blacksmith runners | Low — Infrastructure |
| [#928](https://github.com/moltis-org/moltis/pull/928) | dependabot[bot] | Bump `marked` 18.0.0 → 18.0.2 | Low — Security/dependency hygiene |
| [#926](https://github.com/moltis-org/moltis/pull/926) | penso | `/btw`, `/fast`, `/insights`, `/steer`, `/queue` commands + auxiliary model config | **Major** — Power-user features |

**Themes:** Production hardening (SIGTERM, clipboard, scroll), provider ecosystem expansion (Gemini, DeepInfra), developer experience (SDKs, onboarding, code indexing), and conversational UX (titles, action bars, slash commands).

---

## 4. Community Hot Topics

| Item | Comments | Analysis |
|------|----------|----------|
| [#922](https://github.com/moltis-org/moltis/issues/922) Chat scrolling broken | **3 comments** | Highest engagement; indicates scroll behavior is a **sensitive UX surface**. Fix merged in [#925](https://github.com/moltis-org/moltis/pull/925). Root cause: over-eager auto-scroll fighting user intent during streaming. |
| [#266](https://github.com/moltis-org/moltis/issues/266) Native 9router support | 2 comments | **Ecosystem integration request** — users want Moltis to work with AI coding tool proxies. Closed without merge (likely deferred or rejected). Underlying need: **vendor flexibility** and cost optimization in AI infrastructure. |

**Underlying Needs:**
- **Control over streaming UX** — users expect to interrupt/review model output without fighting the UI
- **Interoperability with emerging AI infrastructure** (routers, proxies) — Moltis's provider abstraction may need to become more pluggable

---

## 5. Bugs & Stability

| Severity | Issue | Fix Status | Details |
|----------|-------|------------|---------|
| 🔴 **High** | [#939](https://github.com/moltis-org/moltis/issues/939) SIGTERM unhandled | ✅ Fixed in [#940](https://github.com/moltis-org/moltis/pull/940) | Docker/systemd deployments received hard kills; now graceful shutdown with resource cleanup |
| 🟡 **Medium** | [#922](https://github.com/moltis-org/moltis/issues/922) Chat scroll-hijacking | ✅ Fixed in [#925](https://github.com/moltis-org/moltis/pull/925) | Regression from #846; broke user scroll during streaming |
| 🟡 **Medium** | [#938](https://github.com/moltis-org/moltis/issues/938) System-notice overflow | ✅ Fixed in [#941](https://github.com/moltis-org/moltis/pull/941) | Visual bug with pill-shaped containers on multi-line text |
| 🟡 **Medium** | [#919](https://github.com/moltis-org/moltis/issues/919) Model discovery 30s timeout | ✅ Fixed in [#931](https://github.com/moltis-org/moltis/pull/931) | Large local models (100B+) failed probe; replaced with lightweight catalog check |
| 🟡 **Medium** | [#927](https://github.com/moltis-org/moltis/issues/927) MCP OAuth re-auth missing | ✅ Fixed (implied by closure, no explicit PR link) | Auth token expiration UX gap |

**Open Bug:**
| Severity | Issue | Status | Risk |
|----------|-------|--------|------|
| 🟡 **Medium** | [#937](https://github.com/moltis-org/moltis/issues/937) settings/terminal tmux error | ⏳ **Open** | Terminal multiplexing integration broken; affects power-user workflows |

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood in Next Version | Rationale |
|---------|--------|---------------------------|-----------|
| **Remote/multi-backend sandboxes** | [#942](https://github.com/moltis-org/moltis/pull/942) (open) | **Very High** | Active PR by core maintainer penso; addresses cloud deployment blocker (Docker-in-Docker unavailable on Fly.io, Render, DO) |
| **Zen/OpenCode provider** | [#944](https://github.com/moltis-org/moltis/pull/944) (open) | **Very High** | PR open by gaarf; follows established provider pattern; competitive pricing angle |
| **Voice UI conditional hiding** | [#943](https://github.com/moltis-org/moltis/pull/943) (open) | **High** | Small scope, clean implementation, config-driven |
| **9router native support** | [#266](https://github.com/moltis-org/moltis/issues/266) (closed) | Low | Closed without merge; may be achievable via generic OpenAI-compatible provider already |

**Emerging Pattern:** Heavy investment in **deployment flexibility** (remote sandboxes, GPU passthrough, insecure-context clipboard) suggests Moltis is targeting **self-hosted and enterprise** users, not just cloud SaaS.

---

## 7. User Feedback Summary

### Pain Points
| Issue | Frequency | User Segment |
|-------|-----------|--------------|
| Scroll behavior during streaming | Recurring | All users |
| Docker deployment reliability | Sporadic | Self-hosters |
| Large local model timeouts | Niche | Local LLM users (100B+) |
| HTTP/self-hosted clipboard broken | Niche | LAN/self-hosters |
| tmux integration | Single report | Terminal power users |

### Satisfaction Indicators
- **Rapid fix turnaround**: 6/7 issues closed within 24h of update
- **Rich slash command ecosystem**: `/btw`, `/fast`, `/insights`, `/steer`, `/queue`, `/title`, `/autolabel`, `/mode` — indicates responsive feature development
- **SDK investment**: Multi-language SDKs suggest commitment to platform play

### Dissatisfaction Risk
- **9router closure without explanation** may alienate users seeking infrastructure flexibility
- **No comments/reactions on most issues** suggests either low community engagement or maintainer-heavy triage (all issues have 0 👍)

---

## 8. Backlog Watch

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#937](https://github.com/moltis-org/moltis/issues/937) tmux error | 1 day | Medium — only open bug | Maintainer triage; terminal integration is power-user critical path |
| [#942](https://github.com/moltis-org/moltis/pull/942) Remote sandboxes | 1 day | Low — active development | Review complexity; multi-provider architecture (Vercel, Daytona, Firecracker) |
| [#944](https://github.com/moltis-org/moltis/pull/944) Zen provider | 1 day | Low — active development | Standard provider review |
| [#943](https://github.com/moltis-org/moltis/pull/943) Voice button hiding | 1 day | Low — active development | Minor UX polish |

**No stale items detected** — all open items are ≤1 day old, reflecting healthy velocity. No long-unanswered critical issues identified in this dataset.

---

*Digest generated from GitHub activity 2026-04-30 to 2026-05-01. All links: https://github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-05-01

## 1. Today's Overview

CoPaw (QwenPaw) shows **high-velocity development** with 50 issues and 16 PRs updated in the last 24 hours, indicating an active, rapidly iterating project. The team shipped a hotfix release (v1.1.5.post1) addressing Feishu channel improvements, while closing 33 issues and merging 14 PRs. Security and channel stability dominate the merged work, with notable fixes for path traversal vulnerabilities and WeCom/Feishu async event loop conflicts. However, 17 open issues remain active, including several critical bugs around workspace identity confusion, session management, and Windows client behavior that suggest growing pains as the project scales to enterprise deployments.

---

## 2. Releases

### [v1.1.5.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.5.post1) — Hotfix Release

| Aspect | Details |
|--------|---------|
| **Version bump** | [#3970](https://github.com/agentscope-ai/QwenPaw/pull/3970) by @zhijianma |
| **Key feature** | Feishu interactive card support for tool guard approvals |
| **Breaking changes** | None documented |
| **Migration notes** | No migration required; patch release |

**Changes:**
- **Feishu channel upgrade**: Introduces `FeishuCardHandler` and replaces text-command approval (`/approval approve <id>`) with one-click interactive buttons ([#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941))
- Tool guard approval now requires `card.action.trigger` subscription; docs hint added for misconfigured instances ([#3982](https://github.com/agentscope-ai/QwenPaw/pull/3982))

---

## 3. Project Progress

### Merged/Closed PRs Today (14 total)

| PR | Author | Focus | Impact |
|----|--------|-------|--------|
| [#3982](https://github.com/agentscope-ai/QwenPaw/pull/3982) | @hongxicheng | Feishu approval card docs hint | UX: prevents silent button failures |
| [#3981](https://github.com/agentscope-ai/QwenPaw/pull/3981) | @bowenliang123 | Antd v5 API migration | DevEx: eliminates 5/11 console warnings |
| [#3978](https://github.com/agentscope-ai/QwenPaw/pull/3978) | @celestialhorse51D | WeCom cross-loop runtime fix | **Stability**: fixes `RuntimeError: Future attached to a different loop` |
| [#3973](https://github.com/agentscope-ai/QwenPaw/pull/3973) | @zhijianma | Path traversal prevention | **Security**: blocks absolute static file paths |
| [#3970](https://github.com/agentscope-ai/QwenPaw/pull/3970) | @zhijianma | Version bump | Release orchestration |
| [#3963](https://github.com/agentscope-ai/QwenPaw/pull/3963) | @hongxicheng | WeCom double reconnect race fix | **Stability**: prevents cross-loop disconnects |
| [#3960](https://github.com/agentscope-ai/QwenPaw/pull/3960) | @bowenliang123 | CodeMirror line wrapping | UI polish for tool call blocks |
| [#3959](https://github.com/agentscope-ai/QwenPaw/pull/3959) | @zhenai1314521 (first-time) | Keep Chat mounted on navigation | **UX**: preserves sessions across page switches |
| [#3958](https://github.com/agentscope-ai/QwenPaw/pull/3958) | @zhenai1314521 (first-time) | Restore chat session on agent switch | **UX**: maintains conversation context |
| [#3954](https://github.com/agentscope-ai/QwenPaw/pull/3954) | @cliffffffffff (first-time) | Skip BOOTSTRAP.md for initialized workspaces | **Reliability**: prevents overwrite on re-init |
| [#3950](https://github.com/agentscope-ai/QwenPaw/pull/3950) | @hongxicheng | WeCom placeholder stream keepalive | **UX**: fixes stuck "Thinking..." states |
| [#3948](https://github.com/agentscope-ai/QwenPaw/pull/3948) | @hongxicheng | WeCom `share_session_in_group` toggle | **Feature**: configurable group chat isolation |
| [#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941) | @hongxicheng | FeishuCardHandler + interactive approvals | **Major feature**: modernizes Feishu UX |
| [#3300](https://github.com/agentscope-ai/QwenPaw/pull/3300) | @octo-patch | WeCom WS SDK loop dispatch | **Stability**: fixes #3296 event loop conflict |

**Themes:** Channel stability (WeCom/Feishu), security hardening, console UX persistence, first-time contributor onboarding (4 PRs from new contributors).

---

## 4. Community Hot Topics

### Most Active Issues by Engagement

| Issue | Comments | Status | Core Concern |
|-------|----------|--------|--------------|
| [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) — Windows arbitrary file traversal vulnerability | 12 | **CLOSED** | **Security**: Path traversal in v1.1.5; fixed by [#3973](https://github.com/agentscope-ai/QwenPaw/pull/3973) |
| [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) — Debian page freeze on model save | 10 | **CLOSED** | **Stability**: Root vs non-root permission issue; workaround identified |
| [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) — WeCom channel frequent disconnections | 7 | **CLOSED** | **Reliability**: Heartbeat config insufficient; re-save workaround |
| [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) — Ultra-long conversation scroll lag (>200 rounds) | 6 | **OPEN** | **Performance**: Frontend rendering bottleneck with A2A calls |
| [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) — Agent workspace identity confusion via channel | 5 | **OPEN** | **Critical bug**: Cross-agent workspace switching breaks identity |

**Underlying needs analysis:**
- **Enterprise channel reliability**: WeCom/WeChat/Feishu issues dominate — users need production-stable integrations
- **Long-session support**: 200+ round conversations with A2A agents reveal architecture limits
- **Workspace isolation**: Multi-agent scenarios expose fundamental identity/workspace boundary flaws

---

## 5. Bugs & Stability

| Severity | Issue | Status | Fix PR | Description |
|----------|-------|--------|--------|-------------|
| 🔴 **Critical** | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) Windows path traversal | CLOSED | [#3973](https://github.com/agentscope-ai/QwenPaw/pull/3973) | Security vulnerability allowing arbitrary file access |
| 🔴 **Critical** | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) Workspace identity confusion | **OPEN** | None yet | Agent assumes wrong identity when receiving cross-agent channel messages |
| 🟠 **High** | [#3976](https://github.com/agentscope-ai/QwenPaw/issues/3976) Session idle cleanup kills running tasks | **OPEN** | None yet | UnifiedQueueManager false-positive idle detection; 600s timeout loses AI responses |
| 🟠 **High** | [#3971](https://github.com/agentscope-ai/QwenPaw/issues/3971) Windows exe first-run white screen | CLOSED | Unknown | v1.1.4 installer fails on 7/7 tested machines |
| 🟠 **High** | [#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969) `FunctionCallOutput` validation + config corruption | **OPEN** | None yet | `call_id=None` crashes agent; `loop_config.json` corruption side effect |
| 🟡 **Medium** | [#3980](https://github.com/agentscope-ai/QwenPaw/issues/3980) "Running Config" 404 error | **OPEN** | None yet | API endpoint `/api/workspace/running-config` missing |
| 🟡 **Medium** | [#3861](https://github.com/agentscope-ai/QwenPaw/issues/3861) Console conversation repeated interruptions | **OPEN** | None yet | Multiple mid-conversation breaks |
| 🟡 **Medium** | [#3977](https://github.com/agentscope-ai/QwenPaw/issues/3977) `memory_search` AttributeError | **OPEN** | None yet | List object has no `.get()` — memory management regression |

**Regression risk:** The workspace identity bug (#3957) and idle cleanup bug (#3976) are **unfixed regressions** that break core agent functionality. The Windows white screen (#3971) suggests packaging/initialization issues in the Electron/desktop wrapper.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal Strength | Prediction |
|-------|-----------------|------------|
| [#3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) Hermes-style auto-evolution | Medium | Long-term research; no active PRs. May appear in v1.3+ if agent architecture refactored |
| [#3972](https://github.com/agentscope-ai/QwenPaw/issues/3972) `/ralph-loop` self-referential execution | **CLOSED/Implemented** | Magic command pattern established; likely in v1.1.5.post1 or next minor |
| [#2434](https://github.com/agentscope-ai/QwenPaw/issues/2434) Console paste image/file (Ctrl+V) | **CLOSED** | Shipped |
| [#3146](https://github.com/agentscope-ai/QwenPaw/issues/3146) Wide-screen chat layout | **CLOSED** | Shipped |
| [#3038](https://github.com/agentscope-ai/QwenPaw/issues/3038) Timestamp display in WebUI | **CLOSED** | Shipped |
| [#2945](https://github.com/agentscope-ai/QwenPaw/issues/2945) GUI approve button vs text input | **CLOSED** | Shipped |
| [#3966](https://github.com/agentscope-ai/QwenPaw/issues/3966) Expand file preview types (docx, pdf) | Medium | Likely v1.2; requires new renderer components |
| [#3979](https://github.com/agentscope-ai/QwenPaw/issues/3979) Windows client tray minimize | Medium | Desktop wrapper improvement; v1.2 likely |
| [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967) Separate core config from user workspace | **Strong signal** | High community pain point; architectural change likely v1.2 |

**Emerging pattern:** Console UX maturation (timestamps, wide-screen, paste, buttons) is nearly complete. Next wave focuses on **agent lifecycle management** (workspaces, memory, evolution) and **desktop client polish**.

---

## 7. User Feedback Summary

### Pain Points (verbatim themes)

| Category | Quote/Summary | Frequency |
|----------|-------------|-----------|
| **Channel instability** | "企业微信突然不生效，重新开关保存频道才能恢复正常" | Recurring |
| **Performance at scale** | "超过200轮对话，页面滚动变得特别卡" | Emerging |
| **Workspace confusion** | "清理文档过程中，难以区分哪些不能删除，有很大概率会误删除" | Common |
| **Desktop client limitations** | "关闭后整个服务都停掉了...只能打开桌面端才能运行" | Windows-specific |
| **Memory management** | "对话上下文没有记忆管理，使用到memory_search报错" | Technical |

### Use Cases
- **Project-level code iteration**: Users maintain 200+ round sessions for iterative development with A2A agents
- **Multi-channel enterprise deployments**: WeCom/Feishu/DingTalk as primary interfaces
- **Non-technical end users**: Struggle with workspace/config boundaries; need simplified file management

### Satisfaction indicators
- ✅ Active maintainer response (most issues closed within 1-2 days)
- ✅ Rapid security patching (path traversal fixed same day as reported)
- ❌ Recurring channel disconnections suggest architectural debt in async handling
- ❌ Windows desktop experience lags behind web console

---

## 8. Backlog Watch

### Issues needing maintainer attention (stale or critical)

| Issue | Age | Risk | Action needed |
|-------|-----|------|---------------|
| [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) Scroll lag >200 rounds | 16 days | **Performance ceiling** | Frontend virtualization or pagination architecture decision |
| [#3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) Hermes auto-evolution | 14 days | Roadmap input | Product direction response |
| [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) WeChat/Weixin identifier unification | 10 days | **Channel consistency** | Review pending; blocks clean WeChat support |
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) GitHub Copilot model provider | 4 days | **Ecosystem expansion** | First-time contributor; needs review for model provider abstraction |

### Open PRs requiring review

| PR | Status | Blocker |
|----|--------|---------|
| [#3605](https://github.com/agentscope-ai/QwenPaw/pull/3605) | Open, under review | Weixin vs WeChat identity resolution |
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) | Open, first-time contributor | GitHub Copilot OAuth/model integration review |

---

**Project Health Assessment:** 🟢 **Active, improving** — Strong merge velocity, responsive security patching, and healthy first-time contributor influx. Yellow flags on Windows client stability, async channel architecture, and workspace isolation for multi-agent scenarios. Recommend prioritizing #3957 (identity confusion) and #3976 (idle cleanup) for next patch release.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-05-01

---

## 1. Today's Overview

ZeroClaw shows **intense development activity** with 50 issues and 50 PRs updated in the last 24 hours, indicating a highly active pre-release stabilization period. The project is currently **release-blocked** with zero new versions shipped, as a coordinated schema v3 migration (#5947) remains incomplete. The community is heavily focused on **onboarding friction**, **provider compatibility**, and **gateway UX improvements**, with 49 of 50 recent issues still open suggesting either rapid issue filing or a backlog accumulation. Notably, `singlerider` dominates both issue authoring and PR submissions, indicating concentrated maintainer effort across multiple workstreams. The high proportion of P1-severity bugs (8 open) signals **stability concerns** that likely prevent cutting a release.

---

## 2. Releases

**No new releases.** ZeroClaw has not shipped a version today or recently, with the schema v3 migration (#5947) acting as an explicit merge blocker: "All items in the checklist below must be complete before any PR in this batch is merged to master. No partial landings."

---

## 3. Project Progress

### Merged/Closed Items Today
| Item | Type | Summary |
|------|------|---------|
| [#3468](https://github.com/zeroclaw-labs/zeroclaw/issues/3468) | Closed Issue | Fixed `matrix-sdk` 0.16 compilation failure on Rust 1.94+ due to recursion depth limit |

### Active PRs Advancing Key Features
| PR | Author | Focus | Status |
|----|--------|-------|--------|
| [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | singlerider | **Web onboarding parity** — per-property CRUD config endpoints for dashboard/CLI unification | Open, XL size, high risk |
| [#6220](https://github.com/zeroclaw-labs/zeroclaw/pull/6220) | singlerider | **Gateway UX** — chat input lock, stop button, running indicator (addresses #5999) | Open |
| [#6221](https://github.com/zeroclaw-labs/zeroclaw/pull/6221) | singlerider | **Cross-subsystem canvas fix** — shares `CanvasStore` between gateway and channel agents | Open, high risk |
| [#6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214) | singlerider | **HMAC tool receipts activation** — security feature wiring from #5168 | Open |
| [#6167](https://github.com/zeroclaw-labs/zeroclaw/pull/6167) | tidux | **ACP protocol v1** — tool-call permission and back-channel for external consumers | Open, XL, high risk |
| [#6117](https://github.com/zeroclaw-labs/zeroclaw/pull/6117) | aliasliao | **OpenAI Codex native Responses tool calls** | Open, L, high risk, needs-author-action |
| [#6190](https://github.com/zeroclaw-labs/zeroclaw/pull/6190) | alexandme | **OTel GenAI spans** for runtime memory ops (stacked on #6009) | Open, L |

---

## 4. Community Hot Topics

### Most Discussed Issues (by comment count)

| Rank | Issue | Comments | Topic | Underlying Need |
|------|-------|----------|-------|---------------|
| 1 | [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | **15** | `default_model` crash on fresh install | **Critical onboarding friction** — new users cannot complete first setup; remote Ollama configuration is under-documented |
| 2 | [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | **7** | RFC: Multi-agent UX flow design | **Architectural direction** — community wants clarity on how multiple agents coordinate; RFC process stalled at core team vote |
| 3 | [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | **6** | Schema v3 batch migration | **Release unblocking** — technical debt consolidation blocking all merges |
| 3 | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | **6** | Agent unaware of `zeroclaw cron` capability | **Tool discovery gap** — agent's self-knowledge doesn't match available tools |
| 3 | [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) | **6** | Matrix voice transcription format failure | **Media pipeline robustness** — Matrix/Element audio format handling |

**Analysis:** The top topics reveal a **"first 5 minutes" problem** — onboarding failures dominate discourse. The multi-agent RFC's 7-day discussion period has concluded without core team vote, suggesting governance bottleneck. Schema v3's "no partial landings" policy creates a high-stakes integration event.

---

## 5. Bugs & Stability

### P1 (Workflow Blocked) — Immediate Attention Required

| Issue | Component | Description | Fix PR? |
|-------|-----------|-------------|---------|
| [#6123](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) | Provider/config | Fresh install `default_model` error with remote Ollama | **None identified** |
| [#6210](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) | Skills/SkillForge | Auto-integrator emits non-schema fields; blocked by #6128 review | **Under code review** |
| [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) | Runtime/Android | Infinite tool-call loop on Termux/Android | None; needs-repro, needs-author-action |
| [#6224](https://github.com/zeroclaw-labs/zeroclaw/issues/6224) | Channel/WhatsApp | Cron job dispatch missing WhatsApp in delivery channels | **Community workaround provided** |
| [#6223](https://github.com/zeroclaw-labs/zeroclaw/issues/6223) | Channel/WhatsApp | `web_fetch` unavailable in WhatsApp Web | **Community workaround provided** |
| [#6237](https://github.com/zeroclaw-labs/zeroclaw/issues/6237) | Channel/Slack | `bot_token` must be in config file, not env var (regression of #5183) | None |
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) | Gateway/Security | WebSocket path bypasses `ApprovalManager` — supervised approvals invisible | **None; needs-maintainer-review** |
| [#6206](https://github.com/zeroclaw-labs/zeroclaw/issues/6206) | Onboarding/Provider | Custom OpenAI-compatible provider fails with "Unknown property" + mislabeled prompt | None |
| [#6120](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) | Onboarding/Provider | OpenAI Codex selection prompts for wrong API key type | None |

### P2 (Degraded Behavior)

| Issue | Component | Description | Fix PR? |
|-------|-----------|-------------|---------|
| [#6153](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) | Matrix | Voice transcription fails with unsupported audio format | None |
| [#6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225) | Telegram | Smart truncation needed for Markdown/codeblock messages | None |
| [#6229](https://github.com/zeroclaw-labs/zeroclaw/issues/6229) | Telegram | `mention_only=true` doesn't suppress media message responses | None |
| [#6227](https://github.com/zeroclaw-labs/zeroclaw/issues/6227) | Runtime | `status` hardcodes `zeroclaw.service`, breaks named instances | None |
| [#6233](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) | Provider/DeepSeek | `reasoning_content` dropped for plain-text assistant messages | None |

**Stability Assessment:** **Concerning** — 8 P1 bugs with only 2 having clear fix paths. WhatsApp channel has critical gaps (cron dispatch, web_fetch) that users are patching locally. Security issue #6207 (approval bypass) is particularly severe for supervised deployments.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Feature | Maturity Signal | Likelihood in Next Release |
|----------|---------|---------------|---------------------------|
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) | Multi-agent UX flow | RFC draft complete, awaiting core team vote | **Medium** — governance dependent |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) | Schema v3 migration | Explicit merge blocker, in-progress | **High** — required for any release |
| [#6225](https://github.com/zeroclaw-labs/zeroclaw/issues/6225) | Telegram smart truncation | Fresh request, no PR | **Low** — nice-to-have |
| [#6241](https://github.com/zeroclaw-labs/zeroclaw/issues/6241) | Browser headless/headed config | Fresh request, small scope | **Medium** — quick win |
| [#5932](https://github.com/zeroclaw-labs/zeroclaw/issues/5932) | Groq per-model tool support | Has PR history (#5848 global disable) | **Medium** — follow-through likely |
| [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | Slack thread context hydration | Follow-up to #5992, well-specified | **Medium** |
| [#5999](https://github.com/zeroclaw-labs/zeroclaw/issues/5999) | Gateway Web Chat UX | Active PRs (#6220, #6217) addressing subsets | **High** — in flight |
| [#5618](https://github.com/zeroclaw-labs/zeroclaw/issues/5618) | DaemonSubsystems → Registry API | Phase 2 accepted, no-stale | **Medium** — architectural |
| [#6017](https://github.com/zeroclaw-labs/zeroclaw/issues/6017) | SQLite memory backend v3 migration | Blocked on schema v3 batch | **High** — coupled to release |

**Prediction:** Next release will be **schema v3.0.0** with bundled breaking config changes, SQLite/Postgres memory unification, and gateway UX improvements. Multi-agent UX may require a follow-up minor release.

---

## 7. User Feedback Summary

### Pain Points (Explicit Complaints)

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Onboarding is broken** | #6123, #6206, #6120 — fresh installs fail, custom providers misconfigured, Codex flow broken | 🔴 Critical |
| **WhatsApp is second-class** | #6224, #6223 — cron and web_fetch missing; user maintains private fork | 🔴 Critical |
| **Documentation gaps** | #6222 (broken links), #5863 (skills docs wanted), #5994 (need official docs site) | 🟡 High |
| **Config/env confusion** | #6237 (Slack token), #6241 (browser headless dead code) | 🟡 High |
| **Android/Termux unsupported** | #6036 infinite loop, no maintainer repro | 🟡 Medium |
| **Approval UX broken in web** | #6207 supervised approvals silently fail | 🔴 Critical (security) |

### Use Cases Emerging
- **LXC/self-hosted Ollama** — remote provider configuration (#6123)
- **Multi-instance daemons** — named services for isolation (#6227)
- **RSS/blog subscription** — users want to follow project outside React app (#6208)
- **Raspberry Pi edge deployment** — PR #6203 addresses this directly

### Satisfaction Signals
- Active community workarounds for WhatsApp (#6224, #6223) indicate **engaged users willing to patch**
- Translation contributions (PR #6170 zh-CN, PR #6242 WeChat i18n) show **global adoption**
- `good first issue` labels on docs requests suggest **maintainer outreach to newcomers**

---

## 8. Backlog Watch

### Issues/PRs Needing Maintainer Attention

| Item | Age | Blocker | Action Needed |
|------|-----|---------|---------------|
| [#5890](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) Multi-agent RFC | 12 days | Core team vote per #5577 §8.2 | **Core team vote to proceed/reject** |
| [#6036](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) Android infinite loop | 7 days | needs-repro, needs-author-action | Author follow-up or maintainer repro attempt |
| [#6117](https://github.com/zeroclaw-labs/zeroclaw/pull/6117) Codex Responses tool calls | 5 days | needs-author-action | Author response to review feedback |
| [#6101](https://github.com/zeroclaw-labs/zeroclaw/pull/6101) WebUI hot-switch model | 6 days | needs-author-action | Author response to review feedback |
| [#6207](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) ApprovalManager bypass | 2 days | needs-maintainer-review | **Security review required** |
| [#5994](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) Official docs website | 9 days | needs-maintainer-review | Decision on scope and ownership |
| [#5947](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) Schema v3 batch | 11 days | Merge blocker checklist incomplete | **Coordinate remaining checklist items** |

### Risk Concentration
- **singlerider** is the sole active maintainer visible in PRs — bus factor concern
- Multiple `needs-author-action` items suggest **review bandwidth exceeds author availability**
- Security issue #6207 has not been triaged despite 2-day age

---

*Digest generated from GitHub activity 2026-04-30 to 2026-05-01. All links: https://github.com/zeroclaw-labs/zeroclaw*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*