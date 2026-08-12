# OpenClaw Ecosystem Digest 2026-08-10

> Issues: 177 | PRs: 500 | Projects covered: 12 | Generated: 2026-08-10 02:21 UTC

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

# OpenClaw Project Digest — 2026-08-10

## 1. Today's Overview
OpenClaw shows **exceptionally high velocity** with 500 PRs and 177 issues updated in 24 hours. The merge rate is strong (168 PRs closed/merged), indicating active maintainer throughput. No new release today, but the volume of fixes targeting session stability, message delivery, and gateway reliability suggests a stabilization push. Critical regressions on macOS (restart loops, inference hangs) and cross-channel message duplication (Telegram, Feishu, Slack) dominate the bug landscape. The project is in a **high-churn stabilization phase** ahead of what appears to be a major architectural consolidation (subagent subsystem restructuring, failover unification, security policy centralization).

## 2. Releases
**No new releases today.** The latest stable channel remains 2026.7.x. Given the volume of P1 fixes merging (session recovery, gateway restart loops, message delivery), a patch release (2026.7.3 or 2026.7.4) is likely imminent.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Area | Summary |
|----|------|---------|
| [#121342](https://github.com/openclaw/openclaw/pull/121342) | Sessions/Performance | **Closed** — Eliminates full cache scans after transcript writes; fixes O(N²) scaling where 50-message probe caused 250K row scans at 5K sessions |
| [#121146](https://github.com/openclaw/openclaw/pull/121146) | Agents/Session State | **Closed** — Fixes tool-result/replay mismatch after session reset when provider reuses call IDs across reset boundary |
| [#120588](https://github.com/openclaw/openclaw/pull/120588) | QA/Docker | **Closed** — Ensures single immutable Docker candidate reused across evidence producers, eliminating flaky QA runs |
| [#121346](https://github.com/openclaw/openclaw/pull/121346) | Commands/GPT-5 | **Closed** — Preserves `gpt5.personality: "off"` setting through `openclaw doctor --fix` migrations |
| [#121253](https://github.com/openclaw/openclaw/pull/121253) | QA/Docker | **Closed** — Supersedes #120588; enforces one immutable Docker candidate across entire QA pipeline |

**In-flight major refactors awaiting review:**
- [#121341](https://github.com/openclaw/openclaw/pull/121341) — Consolidate failover classification into single substrate (XL, ready for maintainer)
- [#120804](https://github.com/openclaw/openclaw/pull/120804) — Quiet Where picker, placement chip, projects read model (XL, ready)
- [#120768](https://github.com/openclaw/openclaw/pull/120768) — One-paste device pairing via `oc-pair` setup links (XL, security-boundary risk)
- [#121350](https://github.com/openclaw/openclaw/pull/121350) — Move spawn family into `subagents/spawn` (stage 2 of subagent consolidation)
- [#121335](https://github.com/openclaw/openclaw/pull/121335) — Unify secret-redaction and SSRF policy ownership (security gap fix)

## 4. Community Hot Topics — Most Active Issues
| Issue | Comments | 👍 | Core Need |
|-------|----------|-----|-----------|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 19 | 0 | **Tiered bootstrap loading** — Progressive context control to stop wasting tokens on unused files in large workspaces (Feb 2026, still open) |
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | 13 | 0 | **Duplicate transcript/context assembly umbrella** — Cross-channel (MSTeams, WebChat, Telegram, followup queue) deduplication root cause |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | 10 | 1 | **Subagent sessions persist** — Main session becomes unresponsive after spawning subagents (WSL2, webchat) |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | 10 | 2 | **active-memory plugin blocks replies** — QMD boot initialization overloads multi-agent gateways |
| [#96242](https://github.com/openclaw/openclaw/issues/96242) | 8 | 2 | **Duplicate Telegram messages** — Three independent code paths send same message (P1, recovery-stuck) |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | 8 | 5 | **Per-agent dreaming config** — All workspaces dream simultaneously causing OOM kills; no per-agent control |
| [#114154](https://github.com/openclaw/openclaw/issues/114154) | 7 | 0 | **bundle-mcp tool invisible to agent** — Passes policy/health checks but ToolSearch finds nothing, zero tool_action logs |

**Pattern:** Users are hitting **architectural limits** — context scaling, multi-agent coordination, cross-channel deduplication, and plugin isolation. These aren't surface bugs; they're subsystem interaction failures.

## 5. Bugs & Stability — Ranked by Severity

### 🔴 Critical (P0/P1 — Crash Loops, Data Loss, Total Unavailability)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#111372](https://github.com/openclaw/openclaw/issues/111372) | **P1 Regression** — Gateway infinite SIGTERM restart loop on macOS (3-6s cycle) | Open, stable blocker | No |
| [#74986](https://github.com/openclaw/openclaw/issues/74986) | **P1** — `openclaw infer` hangs, child process 100% CPU, zero network I/O | Open, stable | No |
| [#114020](https://github.com/openclaw/openclaw/issues/114020) | **P1** — Feishu/Telegram dispatch fails: `runChannelInboundEvent requires runDispatchLifecycle` | Open | No |
| [#87928](https://github.com/openclaw/openclaw/issues/87928) | **P0** — macOS update leaves manual-update loop + stale node → gateway restart storm (~75s) | Open, stable, ux-release-blocker | No |
| [#78805](https://github.com/openclaw/openclaw/issues/78805) | **P1 Regression** — Sync I/O (execSync, readFileSync) blocks event loop 4s, freezes channels | Open | No |
| [#78380](https://github.com/openclaw/openclaw/issues/78380) | **P1** — Gateway self-restart from chat turn drops in-flight Telegram/Discord replies | Open, stable | No |

### 🟠 High (P1 — Message Loss, Session Corruption)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#96242](https://github.com/openclaw/openclaw/issues/96242) | **P1** — Duplicate Telegram messages via 3+ independent paths | Open, recovery-stuck | No |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | **P1** — Subagent sessions persist, main session unresponsive | Open | No |
| [#93831](https://github.com/openclaw/openclaw/issues/93831) | **P1** — Foreground reply fence cancels older in-flight reply after newer delivery | Open, recovery-stuck | No |
| [#108865](https://github.com/openclaw/openclaw/issues/108865) | **P1** — Feishu drops inbound when session archived — no auto-restore | Open | No |
| [#56653](https://github.com/openclaw/openclaw/issues/56653) | **P1** — Slack reaction events never delivered via Socket Mode (multi-account) | Open | No |

### 🟡 Medium (P2 — Degraded UX, Config Issues)
| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#80131](https://github.com/openclaw/openclaw/issues/80131) | **P2 Perf** — Auth (5.5s) + tool bundling (8.9s) = 14/43s TTFT | Open | No |
| [#78301](https://github.com/openclaw/openclaw/issues/78301) | **P2** — Plugin loader silent failures on legacy/invalid contracts | Open, needs-security-review | No |
| [#80346](https://github.com/openclaw/openclaw/issues/80346) | **P2** — Slack botToken rotation not reloaded (cached singleAuthorization) | Open | No |
| [#114192](https://github.com/openclaw/openclaw/issues/114192) | **P2** — TUI history disappears after compaction (session intact) | Open | **[#121337](https://github.com/openclaw/openclaw/pull/121337)** (open, ready) |
| [#110153](https://github.com/openclaw/openclaw/issues/110153) | **P2** — Tool-error warnings on benign exits (grep no-match, recovered retries) | Open, fix-shape-clear | No |

## 6. Feature Requests & Roadmap Signals
**High-signal requests likely to shape next major version:**

| Issue | Votes | Signal |
|-------|-------|--------|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered bootstrap loading | 0 | **Context scaling** — Fundamental to large-workspace adoption; 19 comments show deep design debate |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) Multi-slot memory architecture | 3 | **Memory subsystem overhaul** — Replace single memory slot with purpose-specific layers |
| [#63990](https://github.com/openclaw/openclaw/issues/63990) Multi-index embedding with model-aware failover | 1 | **Provider resilience** — Avoid mixed vector spaces during embedding model failover |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) Per-agent dreaming configuration | 5 | **Resource governance** — Prevent OOM from synchronized dreaming across workspaces |
| [#33478](https://github.com/openclaw/openclaw/issues/33478) Structured callback actions for agent handoffs | 1 | **Mesh reliability** — Replace fragile REPLY_SKIP with typed tool params + thread context inheritance |
| [#39343](https://github.com/openclaw/openclaw/issues/39343) Image batching / media group buffering | 1 | **Gateway-layer UX** — Buffer rapid-fire media (Telegram albums, LINE photos) into single agent turn |
| [#66010](https://github.com/openclaw/openclaw/issues/66010) Sub-agent cascade circuit breaker | 1 | **Multi-agent safety** — Backoff/retry limits for failing subagents |
| [#57307](https://github.com/openclaw/openclaw/issues/57307) Memory importance scoring + time decay | 1 | **Long-term memory quality** — Weibull decay + 1-10 importance at write time |
| [#117178](https://github.com/openclaw/openclaw/issues/117178) Confirm disruptive lifecycle actions | 0 | **Operational safety** — Explicit confirmation before update/restart/shutdown from UI |
| [#33975](https://github

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
**Date:** 2026-08-10 | **Projects Analyzed:** 12 (10 active, 2 inactive)

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem shows **high fragmentation with converging technical challenges**. Twelve projects span from research prototypes (LobsterAI, Moltis) to production-grade platforms (OpenClaw, IronClaw, ZeroClaw), yet all face identical subsystem pressures: **cross-channel message deduplication, session-state durability, provider-config fidelity, and security hardening (SSRF, exec bypasses)**. No project has shipped a release in the last 24 hours — the ecosystem is in a **synchronized stabilization sprint** ahead of architectural consolidations (subagent restructuring, memory subsystem overhauls, governance automation). Contributor-driven projects (ZeroClaw, CoPaw, NanoBot) outpace vendor-backed ones in feature velocity, but all struggle with **integration throughput bottlenecks** — ready PRs accumulate faster than maintainers can review.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release Today | Health Score |
|---------|--------------|-----------|---------------|---------------|--------------|
| **OpenClaw** | 177 | 500 | 168 merged | No | 🟡 High churn, stabilization |
| **ZeroClaw** | 5 (RFCs) | 50 | 1 merged | No | 🟡 Governance bottleneck |
| **Hermes Agent** | 11 | 50 | 3 merged | No | 🟠 Low resolution rate |
| **IronClaw** | 22 | 32 | 8 merged + 7 bugs closed | No | 🟢 Active stabilization |
| **CoPaw** | 18 | 23 | 1 merged + 4 closed | No (v2.1.0b2) | 🟢 High velocity, beta |
| **NanoBot** | 5 | 16 | 4 merged | No | 🟡 Critical security unpatched |
| **NanoClaw** | 1 | 16 | 0 merged | No | 🟡 Zero integration throughput |
| **PicoClaw** | 3 | 6 | 1 closed | No | 🟢 Stable, hardening |
| **Moltis** | 2 | 1 | 0 | No | 🟢 Low velocity, focused |
| **LobsterAI** | 3 | 0 | 0 | No | 🔴 Stalled, maintenance only |
| **NullClaw** | 0 | 0 | 0 | No | ⚫ Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | No | ⚫ Inactive |

**Key Insight:** Only **IronClaw** and **PicoClaw** show healthy merge-to-open ratios. **OpenClaw** leads absolute throughput but at 500 PRs/24h signals process overload. **NanoClaw** and **Hermes Agent** have critical review backlogs.

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale of operations:** 10× PR volume of next project (ZeroClaw 50); only project with dedicated QA Docker pipeline (#120588, #121253)
- **Architectural maturity:** Subagent consolidation (#121350), failover unification (#121341), security policy centralization (#121335) are **cross-cutting refactors** — peers address these as isolated bugs
- **Session/performance engineering:** O(N²) cache scan fix (#121342) and tool-result/replay mismatch (#121146) demonstrate deep runtime instrumentation

### Technical Approach Differences
| Dimension | OpenClaw | Typical Peer |
|-----------|----------|--------------|
| **Gateway reliability** | Unified failover substrate, macOS restart-loop fixes | Per-channel workarounds (IronClaw, PicoClaw) |
| **Multi-agent** | Subagent spawn subsystem restructuring (staged) | Ad-hoc cron/delegate (Hermes, ZeroClaw) |
| **Security** | Centralized SSRF/secret-redaction ownership (#121335) | Per-adapter fixes (PicoClaw #3322-3324, NanoBot #5305-5306) |
| **Context scaling** | Tiered bootstrap loading design debate (#22438, 19 comments) | Per-model config RFCs (ZeroClaw #7100, LobsterAI #1187) |

### Community Size Comparison
- **OpenClaw:** 177 issues updated/24h + 500 PRs → **largest active contributor base**
- **ZeroClaw:** 50 PRs but only 5 RFC issues → **contributor-driven, low end-user friction**
- **CoPaw:** 18 issues + 23 PRs with 66-comment onboarding board (#2291) → **strong community cultivation**
- **NanoBot/IronClaw:** ~20 issues + 15-30 PRs → **mid-size, steady**

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Cross-channel message deduplication** | OpenClaw (#69208, #96242), IronClaw (#7348), PicoClaw (#3287), ZeroClaw (#9777) | Unified inbound deduplication layer; protocol-native reassembly (IRCv3, Telegram albums) |
| **Session-state durability & restore** | OpenClaw (#47975, #114192), Hermes (#82872, #79518), CoPaw (#5579), NanoBot (#5271) | Checkpoint persistence, ghost-tile prevention, async-op race guards |
| **Provider config fidelity** | OpenClaw (#121346), Hermes (#82875), ZeroClaw (#7100), LobsterAI (#2453), CoPaw (#6812) | Per-model capability/context windows; schema validation (Gemini `$schema`); custom ID parsing |
| **SSRF / exec-tool hardening** | PicoClaw (#3322-3324), NanoBot (#5305-5306), ZeroClaw (#8826), Moltis (#1186), NanoClaw (#3207) | Centralized allowlist/blocklist; URL fetch guards; shell-chain bypass prevention |
| **Memory subsystem overhaul** | OpenClaw (#60572, #67413), ZeroClaw (#9066, #9067, #9758), CoPaw (ReMe4 #6840), Hermes (#76883) | Multi-slot architecture; reversible mutations; consolidation correctness; per-agent resource governance |
| **Governance & process automation** | ZeroClaw (#6808, #9496), IronClaw (#7392), CoPaw (#2291) | Work-lane automation; RFC streamlining; contributor task boards |

**Most pervasive:** Session durability (6/10 active projects) and provider config fidelity (5/10). **Most urgent:** SSRF/exec bypasses — 5 projects have critical unpatched CVEs in last 24h.

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture Signal |
|---------|---------------|-------------|---------------------|
| **OpenClaw** | Enterprise-grade multi-channel gateway + agent runtime | Platform operators, multi-tenant deployments | Monolithic core with staged subsystem extraction; heavy QA investment |
| **ZeroClaw** | Governance-first, security-by-default agent framework | Contributors, security-conscious builders | RFC-gated changes; capability-based security; verifiable intent boundaries |
| **IronClaw** | Automation-centric (routines, skills, WebUI) | Power users, workflow automators | Capability-driven tool discovery; parallel execution; PWA/Web Push |
| **CoPaw** | Memory-rich agent (ReMe) + provider diversity | Chinese-cloud users, memory-intensive workflows | ReMe memory pipeline; 10+ provider integrations; mobile Web Console |
| **NanoBot** | Lightweight self-hosted + WebUI + plugin skills | Self-hosters, plugin developers | Agent Plugins v1; GitAgent Protocol; skill marketplace |
| **Hermes Agent** | Desktop-first multi-session + cron + memory | Desktop power users, cron automation | Session-centric desktop; Hindsight memory; Buzz/Slack gateways |
| **PicoClaw** | Protocol bridging fidelity (Matrix, IRC, Telegram, DeltaChat) | Bridge operators, multi-protocol users | Channel-adapter architecture; SSRF hardening sweep |
| **NanoClaw** | Hardened container images + channel expansion | Security-first deployments, telephony (Dial) | Module lifecycle; DB migrations; CVE-gated publishing |
| **Moltis** | Vault-backed secret management + container runtime | Security-focused desktop users | Recovery-phrase normalization; Apple Container detection |
| **LobsterAI** | Multi-model orchestration UI | Experimenters, model switchers | Custom model registry; cross-model subtask gap |

**Clear segmentation:** 
- **Gateway/platform:** OpenClaw, IronClaw, ZeroClaw
- **Desktop/session:** Hermes, CoPaw, Moltis
- **Bridge/protocol:** PicoClaw
- **Self-host/lightweight:** NanoBot, NanoClaw
- **Memory/orchestration:** CoPaw, ZeroClaw, LobsterAI

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity + Active Resolution)** | **IronClaw**, **CoPaw**, **PicoClaw** | IronClaw: 8 merges + 7 bug closes; CoPaw: 3 critical fix PRs ready; PicoClaw: coordinated SSRF sweep |
| **High Velocity, Review Bottlenecked** | **OpenClaw**, **ZeroClaw**, **Hermes Agent**, **NanoClaw** | OpenClaw: 500 PRs but XL refactors stalled; ZeroClaw: 49 open PRs, 6 RFCs >2wks; Hermes: 0/11 bugs with fix PRs; NanoClaw: 0 merges |
| **Stabilizing / Maintenance** | **NanoBot**, **Moltis** | NanoBot: 2 critical CVEs unpatched but p2 fixes merging; Moltis: 2 new bugs, 1 security PR |
| **Stalled / Low Activity** | **LobsterAI** | 0 PRs, 2 stale issues >90 days, 1 fresh regression |
| **Inactive** | **NullClaw**, **ZeptoClaw** | No 24h activity |

**Maturity indicators:** Only **IronClaw** and **PicoClaw** show consistent "merge > open" patterns. **OpenClaw** operates at scale that masks bottlenecks. **ZeroClaw**'s RFC process is a deliberate velocity governor.

---

## 7. Trend Signals for AI Agent Developers

### 1. **Session Durability is the New Table Stakes**
Users reject agents that lose context on crash/restart (OpenClaw #47975, Hermes #82872, CoPaw #5579, NanoBot #5271). **Checkpoint persistence + async-op race guards** are mandatory for production credibility.

### 2. **Provider Config Drift Causes Silent Failures**
Gemini `$schema` rejection (CoPaw #6812), `reasoning_effort` dropped (Hermes #82875), custom ID parsing (LobsterAI #2453), per-model caps (ZeroClaw #7100). **Schema validation + capability declaration at registration** is emerging standard.

### 3. **Cross-Channel Deduplication Requires Protocol Awareness**
Telegram albums (OpenClaw #39343), IRCv3 labeled-response (PicoClaw #3287), Signal UUID senders (ZeroClaw #9777). **Gateway-layer message coalescing** beats per-adapter hacks.

### 4. **Security Hardening Shifts from Reactive to Architectural**
PicoClaw's coordinated SSRF sweep (#3322-3324), ZeroClaw's verifiable intent boundaries (#9866), OpenClaw's policy centralization (#121335). **Centralized allowlist/blocklist substrates** replace per-tool guards.

### 5. **Memory Subsystems Converge on Multi-Slot + Reversibility**
OpenClaw tiered bootstrap (#22438), ZeroClaw Hindsight stack (#9066/9067), CoPaw ReMe4 (#6840), Hermes reversible mutations (#76883). **Archive-not-delete + importance scoring + time decay** is the emerging model.

### 6. **Governance Automation Scales Contributor Throughput**
ZeroClaw Work Lanes (#6808), CoPaw task board (#2291), IronClaw skill single-responsibility rule (#3111). **Automated triage + labeled work lanes** reduce maintainer decision fatigue.

### 7. **Container/Hardened Image Supply Chain is a Differentiator**
NanoClaw CVE-gated Docker Hub publish (#3207/3208), OpenClaw immutable QA candidates (#120588/121253). **Reproducible, attested builds** become compliance requirement for enterprise adoption.

---

## Summary for Decision-Makers

| If You Need... | Best Reference Project |
|----------------|------------------------|
| **Production multi-channel gateway at scale** | OpenClaw (despite churn, only project solving cross-channel deduplication architecturally) |
| **Security-first framework with governance** | ZeroClaw (RFC process, verifiable intent, capability boundaries) |
| **Automation + WebUI + PWA** | IronClaw (routines, skills, parallel capability execution) |
| **Memory-rich agents + Chinese cloud providers** | CoPaw (ReMe pipeline, Volcengine/Xiaomi, mobile console) |
| **Protocol bridging fidelity** | PicoClaw (Matrix/IRC/Telegram/DeltaChat, SSRF-hardened) |
| **Self-hosted lightweight + plugin ecosystem** | NanoBot (Agent Plugins v1, GitAgent Protocol, WebUI) |
| **Hardened container deployments** | NanoClaw (CVE gates, module lifecycle, Dial channel) |

**Strategic recommendation:** The ecosystem is converging on **three architectural pillars** — *session durability substrates*, *centralized security policy*, and *multi-slot memory*. Projects investing in these cross-cutting layers (OpenClaw, ZeroClaw, CoPaw) will define the next generation; those fixing per-adapter bugs will accumulate technical debt.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-08-10

## 1. Today's Overview
NanoBot shows **high maintenance activity** with 16 PRs and 5 issues updated in the last 24 hours. Four PRs were merged/closed, addressing Telegram polling stability, CI/CD hardening, WebUI HTTPS documentation, and Star History restoration. Two critical security advisories (#5305, #5306) were filed regarding `exec.allowPatterns` bypasses — these demand immediate maintainer review. No new release was cut, but several p0/p1 fixes are in review (session stale-task overwrite, provider capability refactor, token-usage exposure).

## 2. Releases
**No new releases today.** The latest published version remains prior to 2026-08-10.

## 3. Project Progress (Merged / Closed PRs Today)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#5308](https://github.com/HKUDS/nanobot/pull/5308) | test: strengthen user-path coverage and CI gates | CI/CD, webui, test (p2) | Adds user-path tests for CLI, WebUI chat forks, auth, failure boundaries; enforces V8 coverage; removes flaky tests |
| [#5307](https://github.com/HKUDS/nanobot/pull/5307) | Restore Star History chart | documentation, feature (p2) | Re-adds star-history chart using a new provider after GitHub killed the original |
| [#5304](https://github.com/HKUDS/nanobot/pull/5304) | fix(webui): explain HTTPS requirement for voice input | bug, documentation, webui, fix, test (p2) | Distinguishes insecure HTTP from missing mic support; adds actionable HTTPS guidance for LAN access |
| [#4019](https://github.com/HKUDS/nanobot/pull/4019) | Add GitAgent Protocol support (agent.yaml + SOUL.md) | feature | **Closed** (not merged) — adds GitAgent Protocol manifest support for portable agents |

## 4. Community Hot Topics (Most Comments / Reactions)

| Item | Comments | Summary | Underlying Need |
|------|----------|---------|-----------------|
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) | 13 | Token consumption logging — user sees millions of tokens burned in 2h with no visible activity | **Observability & cost control**: operators need per-call token accounting to debug runaway usage |
| [#5295](https://github.com/HKUDS/nanobot/issues/5295) | 5 | Docker compose deploy fails: `cannot open /usr/local/bin/entrypoint.sh: Permission denied` | **Deployment reliability**: clear, reproducible container startup for self-hosters |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) | — (p0, conflict) | Prevent stale background task saves from overwriting session data | **Data integrity**: session corruption during `/new` while async title generation runs |
| [#5299](https://github.com/HKUDS/nanobot/pull/5299) | — | Expose structured token usage records via API | Directly addresses #5266 — diagnostic endpoint for token accounting |

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue / PR | Description | Fix Status |
|----------|------------|-------------|------------|
| **Critical (Security)** | [#5305](https://github.com/HKUDS/nanobot/issues/5305) | `exec.allowPatterns` allowlist bypass via chained shell commands through OpenAI-compatible API | **No fix PR yet** — immediate triage needed |
| **Critical (Security)** | [#5306](https://github.com/HKUDS/nanobot/issues/5306) | `exec.allowPatterns` shell-chain bypass allows unintended command execution | **No fix PR yet** — same root cause as #5305 |
| **High (Data Loss)** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | Stale background task (`maybe_generate_webui_title`) overwrites session after `/new` clears it | **PR open (p0, conflict)** — needs rebase/resolution |
| **High (Reliability)** | [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Docker compose entrypoint permission denied on gateway container | **No fix PR** — likely file-mode / user-mapping issue in image |
| **Medium** | [#5311](https://github.com/HKUDS/nanobot/issues/5311) | Agnes AI custom provider double-encodes nested-object tool args as JSON strings | **No fix PR** — provider integration bug |
| **Medium** | [#5302](https://github.com/HKUDS/nanobot/pull/5302) | Dream consolidation calls unavailable tools (uses general system prompt) | **PR open (p2)** — restricts tool registry for Dream |
| **Medium** | [#5303](https://github.com/HKUDS/nanobot/pull/5303) | Weather skill uses bare `curl` → resolves to `Invoke-WebRequest` alias on Windows PowerShell | **PR open (p2)** — make Windows-safe |

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Per-call token usage logging & API** | #5266 (13 comments), #5299 (PR) | **High** — PR #5299 already implements structured records endpoint; strong user demand |
| **Provider capability declarations (Responses API)** | #5204 (p1 refactor) | **High** — architectural cleanup for multi-provider routing, reasoning, compaction |
| **Agent Plugins v1 integration with CLI Apps** | #5288 | **Medium** — vendor-neutral plugin boundary; enables `nanobot-dev/computer-use` as plugin |
| **Model-agnostic computer use (browser + computer_use tools)** | #4276 (long-open, conflict) | **Low/Medium** — large scope, conflicts; may land behind feature flag |
| **Truthful API status for externally-managed `nanobot serve`** | #5255 (draft) | **Medium** — improves WebUI accuracy for hybrid deployments |
| **Marketplace skills shadowing builtins** | #5309 (p2) | **High** — small fix, improves skill override UX |
| **Forced QR login for Weixin** | #5310 | **High** — trivial fix, unblocks CLI login flow |

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Runaway token costs** | #5266: “million tokens in 2h without noticeable activity” | 😡 Frustrated — no visibility into what drives consumption |
| **Docker deploy broken out-of-box** | #5295: permission denied on entrypoint.sh | 😕 Blocked — deployment.md steps don’t work |
| **Custom provider interop issues** | #5311: Agnes AI double-encodes nested objects | 😕 Blocked — MCP tool calls fail |
| **Windows CLI quirks** | #5303: `curl` alias breaks weather skill | 😐 Annoyed — works on Linux/macOS only |
| **Telegram bot silently stalls** | #5156, #5301: polling dies after network blip | 😟 Anxious — no logs, no auto-recovery |
| **Session corruption during async ops** | #5271: `/new` loses data if title generation in flight | 😟 Data-loss fear |

**Positive signals**: Active PR reviews, quick turnaround on p2 fixes (HTTPS docs, Star History, CI), community contributing provider/channel fixes.

## 8. Backlog Watch (Stale / High-Impact Items Needing Maintainer Attention)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) | ~60 days | Model-agnostic computer use — flagship feature, but conflicts block merge; needs design decision or rebase |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | ~9 days | Provider Responses capability refactor (p1) — foundational for multi-provider parity; stalled |
| [#5255](https://github.com/HKUDS/nanobot/pull/5255) | ~5 days | Truthful API status for external `nanobot serve` — draft, but improves hybrid deploy UX |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | ~12 days | Telegram stalled polling recovery — production-affecting; #5301 split out observability piece but full fix pending |
| [#5288](https://github.com/HKUDS/nanobot/pull/5288) | ~3 days | Agent Plugins v1 + CLI Apps integration — architectural, enables plugin ecosystem |
| **Security advisories #5305 / #5306** | 1 day | **Urgent** — exec tool bypasses; no fix PR assigned; should be triaged today |

---

**Project Health Score**: 🟡 **Caution** — Strong feature velocity and community engagement, but **two critical security issues with no fix yet** and a backlog of high-impact PRs needing review. Recommend maintainers prioritize #5305/#5306 triage, unblock #5271 (p0), and decide on #4276 scope.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-08-10

---

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 61 total items (11 issues + 50 PRs) updated in the last 24 hours. All 11 issues remain open, indicating active triage rather than resolution. Three PRs were merged/closed, while 47 remain open — suggesting a pipeline heavy with in-progress work. The issue mix is dominated by **desktop session-state bugs** (ghost tiles, hidden tab strip), **gateway reliability** (SIGTERM freeze, auth allowlist gaps), and **memory/provider correctness** (reasoning_effort drop, Hindsight writer stalls). No release was cut today; the project appears in a stabilization sprint targeting v0.20.x-class defects.

---

## 2. Releases
**No new releases today.** The latest published version remains prior to 2026-08-10.

---

## 3. Project Progress — Merged/Closed PRs (3)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#82873](https://github.com/NousResearch/hermes-agent/pull/82873) | fix(tools): bypass read_file dedup in execute_code sandbox | tools/code-exec | **CLOSED** (duplicate) |
| [#82746](https://github.com/NousResearch/hermes-agent/pull/82746) | fix(ci): don't report all-good before jobs start | ci | **MERGED** |
| [#82782](https://github.com/NousResearch/hermes-agent/pull/82782) | feat(cron): harden scheduled execution accountability | cron/gateway/plugins | **MERGED** |

**Summary:** Two substantive merges — a CI reliability fix preventing false-green reports, and a major cron accountability feature adding durable execution ledgers, canonical fire-identity binding, and immutable media hashes. The tools fix was closed as duplicate.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Comments | Reactions | Core Need |
|------|----------|-----------|-----------|
| [#82872](https://github.com/NousResearch/hermes-agent/issues/82872) Desktop: ws_orphan_reap sessions restore as empty ghost tiles | 2 | 0 | **Session restore integrity** — users lose access to sessions after backend restart; sidebar shows entry but pane renders empty |
| [#82875](https://github.com/NousResearch/hermes-agent/issues/82875) reasoning_effort silently dropped for named providers | 1 | 0 | **Provider config fidelity** — explicit reasoning_effort settings ignored for named endpoints, breaking expectations for OpenAI-compatible providers |
| [#76883](https://github.com/NousResearch/hermes-agent/issues/76883) feat(memory): make memory mutations reversible | 1 | 0 | **Memory safety** — irreversible `remove()`/`replace()` with no audit trail; users want archive-not-delete semantics like skills have |
| [#79518](https://github.com/NousResearch/hermes-agent/issues/79518) Desktop: hidden tab strip is inescapable dead end | 1 | 0 | **Desktop UX recoverability** — hidden tab strip makes sessions unclickable; "Open in new tab" re-pins hidden flag |

**Underlying theme:** Desktop session-state fragility and config/provider contract violations are the top user-facing pain points. Memory reversibility is a deliberate design ask.

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue | Component | Fix PR? |
|----------|-------|-----------|---------|
| **P2 — Data Loss / Session Corruption** | [#82872](https://github.com/NousResearch/hermes-agent/issues/82872) Ghost tiles after `ws_orphan_reap` + app restart | desktop/sessions | ❌ |
| **P2 — Config Contract Violation** | [#82875](https://github.com/NousResearch/hermes-agent/issues/82875) `reasoning_effort` dropped for named providers | agent/config/providers | ❌ |
| **P2 — Gateway Hang on SIGTERM** | [#82874](https://github.com/NousResearch/hermes-agent/issues/82874) Blocking `future.result()` in `shutdown_mcp_servers()` freezes event loop; clean-exit marker never written | gateway/docker/mcp | ❌ |
| **P2 — Auth Bypass (Buzz)** | [#82871](https://github.com/NousResearch/hermes-agent/issues/82871) Gateway default-denies all Buzz users — allowlist never consulted | gateway/auth/plugins | ❌ |
| **P2 — Skill Deletion** | [#82882](https://github.com/NousResearch/hermes-agent/issues/82882) `hermes update` / bundled-skills sync deletes user-owned skills in bundled categories | desktop/skills/update | ❌ |
| **P3 — Memory Durability** | [#82879](https://github.com/NousResearch/hermes-agent/issues/82879) Hindsight provider: no stalled-writer detection, no durable turn delivery | memory/providers | ❌ |
| **P3 — Silent Config Fallback** | [#82878](https://github.com/NousResearch/hermes-agent/issues/82878) Unrecognized `busy_input_mode` silently falls back to `interrupt` | gateway/config | ❌ |
| **P3 — Self-Steer Hallucination** | [#82877](https://github.com/NousResearch/hermes-agent/issues/82877) Cron sessions taught steer-channel marker they can never receive; model self-emits and obeys | agent/system_prompt/cron | ❌ |
| **P3 — MCP Tool Lookup Break** | [#82876](https://github.com/NousResearch/hermes-agent/issues/82876) Hyphenated MCP server names break `tool_describe`/`tool_call` | tools/mcp | ❌ |
| **P3 — Hidden Tab Strip Dead End** | [#79518](https://github.com/NousResearch/hermes-agent/issues/79518) Hidden tab strip makes sessions unopenable | desktop/sessions | ❌ |
| **P3 — Memory Irreversibility** | [#76883](https://github.com/NousResearch/hermes-agent/issues/76883) `remove()`/`replace()` destroy content with no archive | memory | ❌ (feature request) |

**Note:** Zero of today’s 11 bugs have an open fix PR. Several older PRs address related classes (e.g., [#82280](https://github.com/NousResearch/hermes-agent/pull/82280) hardens `state.db` corruption; [#82592](https://github.com/NousResearch/hermes-agent/pull/82592) fixes relay delegation drops), but today’s fresh issues are untriaged for fixes.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Reversible memory mutations** (archive-on-delete) | [#76883](https://github.com/NousResearch/hermes-agent/issues/76883) | High — aligns with existing skill archive semantics; P3 but clear design precedent |
| **Skill usage telemetry: last sessions per skill** | [#82854](https://github.com/NousResearch/hermes-agent/pull/82854) (PR open) | High — PR already implements desktop detail pane; plumbing exists |
| **Single-char scope aliases for approval replies** (`y`/`a`/`n`) | [#82881](https://github.com/NousResearch/hermes-agent/pull/82881) (PR open) | High — UX for messaging platforms (WeCom, SMS, Signal); low complexity |
| **Public `inject_internal_message` API (AL17)** | [#82880](https://github.com/NousResearch/hermes-agent/pull/82880) (PR open) | Medium — plugin/host contract; needs design review (`needs-decision` on related PRs) |
| **Cron no_agent run history visibility** | [#82870](https://github.com/NousResearch/hermes-agent/pull/82870) (PR open) | Medium — fixes desktop "no runs yet" for script-only jobs |
| **Title generation fallback on HTTP 400** | [#82868](https://github.com/NousResearch/hermes-agent/pull/82868) (PR open) | Medium — provider compatibility; retry with `json_object` |

**Prediction:** The next patch (likely v0.20.1 or v0.21.0) will bundle the desktop skill telemetry PR, cron run-history fix, title-generation fallback, and single-char approval aliases. Memory reversibility and `inject_internal_message` may slip to a minor release pending design consensus.

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Sessions vanish after backend restart** | [#82872](https://github.com/NousResearch/hermes-agent/issues/82872) — "clicking them in the sidebar switches the highlight but the main pane renders an empty state" | High — users lose work context; desktop becomes unreliable for persistent sessions |
| **Config settings silently ignored** | [#82875](https://github.com/NousResearch/hermes-agent/issues/82875) — "`reasoning_effort` ... resolve correctly and are then silently dropped" | High — power users tuning reasoning get no effect; trust erosion |
| **Gateway won't clean-shutdown in containers** | [#82874](https://github.com/NousResearch/hermes-agent/issues/82874) — "clean-exit marker never written" on SIGTERM | Medium — ops teams can't rely on graceful shutdown; orchestration issues |
| **Buzz adapter completely blocked** | [#82871](https://github.com/NousResearch/hermes-agent/issues/82871) — "default-denies **every** Buzz user" | High for Buzz users — total auth failure |
| **Skills deleted by update process** | [#82882](https://github.com/NousResearch/hermes-agent/issues/82882) — "disappeared twice within 24h ... took out the entire `github/` category plus 49 other skills" | Critical — data loss; users avoid updates |
| **Hidden tab strip = dead end** | [#79518](https://github.com/NousResearch/hermes-agent/issues/79518) — "Every sidebar click on an open session looks dead" | Medium — desktop UX trap; no visible recovery |

**Satisfaction signals:** No positive feedback issues today. The volume of P2 session-state and config-contract bugs suggests users are hitting reliability walls in desktop and gateway deployments.

---

## 8. Backlog Watch — Stale/High-Value Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#82280](https://github.com/NousResearch/hermes-agent/pull/82280) fix(state): harden state.db against corruption | 1 day (updated today) | **Production corruption fixes** — WAL protections, write lock, reconnect self-heal; 139 tests pass; `needs-decision` | **Open, needs maintainer review** |
| [#78467](https://github.com/NousResearch/hermes-agent/pull/78467) fix: OpenWebUI SSE, scope stack, query auth, write_eof, non-TTY auto-replace | 6 days | **OpenWebUI + non-interactive reliability** — 4 bundled fixes; 139/139 tests pass; `needs-decision` | **Open, needs maintainer review** |
| [#80238](https://github.com/NousResearch/hermes-agent/pull/80238) fix(gateway): isolate `_auth_env` under multiplex | 4 days | **Cross-profile allowlist leak** — security boundary; fixes #80026 | **Open, needs maintainer review** |
| [#78490](https://github.com/NousResearch/hermes-agent/pull/78490) fix(security): redact full dotted body of prefixed credentials | 6 days | **Credential redaction** — structural fix beyond vendor-specific; builds on #78138 | **Open, needs maintainer review** |
| [#81407](https://github.com/NousResearch/hermes-agent/pull/81407) fix(cron): SSRF protection for monitor jobs | 2 days | **Cron security** — private service fetch + change suppression bugs | **Open, needs maintainer review** |
| [#80847](https://github.com/NousResearch/hermes-agent/pull/80847) fix(tools): browser_cdp frame_id SSRF guard | 3 days | **Browser tool SSRF** — OOPIF path gaps | **Open, needs maintainer review** |
| [#81527](https://github.com/NousResearch/hermes-agent/pull/81527) fix(installer): don't adopt Node tarball uids on root installs | 2 days | **Installer security** — root-owned node dir left as uid 1001 | **Open, needs maintainer review** |
| [#61752](https://github.com/NousResearch/hermes-agent/pull/61752) fix(tests): stop cmd_update tests leaking Windows gateways | 31 days | **CI hygiene** — leaks detached gateway processes on Windows | **Open, long-stalled** |

**Maintainer action needed:** Seven security/reliability PRs carry `needs-decision` or `needs-repro` and have passing test suites. The `state.db` hardening (#82280) and OpenWebUI bundle (#78467) are the highest-impact for production users. The 31-day-old Windows test leak (#61752) indicates CI maintenance debt.

---

## Project Health Snapshot
- **Velocity:** High (61 items/24h) but **resolution rate low** (0/11 issues closed, 3/50 PRs merged)
- **Bug density:** Concerning — 11 fresh bugs, 6 at P2, zero with fix PRs
- **Security posture:** Active — 6 security-labeled PRs open, several addressing credential leakage and SSRF
- **Desktop stability:** Regression cluster around session restore, tab strip, and skill sync
- **Gateway reliability:** SIGTERM hang, auth gaps, MCP shutdown — critical for containerized deployments
- **Backlog pressure:** 8 high-value PRs awaiting maintainer decisions, some >6 days old

**Recommendation:** Prioritize merging the 3 security/reliability PRs with passing tests (#82280, #78467, #80238), triage today's P2 bugs into fix PRs, and cut a stabilization release before new features.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-08-10

## 1. Today's Overview
PicoClaw shows steady maintenance activity with **9 total updates** (3 issues, 6 PRs) in the last 24 hours, but **no new releases**. The project is in a **refinement and hardening phase**: two security-focused PRs (#3323, #3324) address SSRF vulnerabilities in WeCom/Weixin media handling, a third (#3322) extends the same protection to inbound media across multiple channels, and a fourth (#3327) implements native Telegram table rendering. A long-standing Matrix reconnection bug (#3203) was closed as stale after 38 days, while IRC long-message support (#3287) remains open with community discussion. Overall health appears stable with active contributor engagement on both features and security.

## 2. Releases
**No new releases** published in the last 24 hours. Current latest version remains **v0.2.9** (per issue #3203 environment).

## 3. Project Progress (Merged/Closed PRs)
| PR | Title | Status | Impact |
|----|-------|--------|--------|
| [#3326](https://github.com/sipeed/picoclaw/pull/3326) | fix(web): remove duplicate pnpm lock entries | **Closed** | Resolves `ERR_PNPM_BROKEN_LOCKFILE` blocking CI/frontend installs; pure build hygiene fix. |

*No feature PRs were merged today; all other PRs remain open under review.*

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Issue | 8 comments, 2 👍, **closed as stale** | **Matrix reliability**: `/sync` long-polling dies silently on network/server disruption with no auto-reconnect; systemd `Restart=on-failure` ineffective because process stays alive. Users need resilient reconnection with backoff. |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue | 4 comments | **IRCv3 long-message handling**: PicoClaw splits >512 byte messages into multiple IRC lines, breaking cohesion. Request: reassemble split parts into single logical message per IRCv3 `labeled-response` or `message-tags`. |
| [#3327](https://github.com/sipeed/picoclaw/pull/3327) | PR | 0 comments (new) | **Telegram native tables**: Render GFM/HTML tables as Bot API 10.1 rich messages instead of monospace code blocks. Directly addresses [#3325](https://github.com/sipeed/picoclaw/issues/3325). |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR | 38 days open | **DeltaChat refactor**: -200 LOC cleanup, drops legacy password auth, updates relay list reference, adds full documentation. High-impact maintenance but awaiting review. |

**Analysis**: The Matrix reconnection issue (#3203) had the strongest community signal (8 comments, 2 reactions) but was closed stale—suggesting either maintainer bandwidth limits or a perception that the bug is non-critical. The IRC and Telegram topics reflect **bridging fidelity demands**: users expect protocol-native semantics (message coalescing, rich rendering) rather than lowest-common-denominator fallback.

## 5. Bugs & Stability
| Severity | Item | Description | Fix PR? |
|----------|------|-------------|---------|
| **High** | [#3322](https://github.com/sipeed/picoclaw/pull/3322) | **SSRF in inbound media downloads** (QQ, Telegram, Discord, LINE, Slack): `utils.DownloadFile` lacked `BlockPrivateTargets`, allowing crafted media URLs to reach loopback/link-local/RFC1918 addresses. | **Yes** — PR #3322 (open) |
| **High** | [#3323](https://github.com/sipeed/picoclaw/pull/3323) | **WeCom SSRF**: `mediaClient` used plain `http.Client`, following redirects to private hosts in `storeRemoteMedia`/`downloadRemoteMediaToTemp`. | **Yes** — PR #3323 (open) |
| **High** | [#3324](https://github.com/sipeed/picoclaw/pull/3324) | **Weixin SSRF**: identical vector via `api.HttpClient` for CDN/remote media. | **Yes** — PR #3324 (open) |
| **Medium** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix `/sync` loop dies permanently on network disruption; no reconnection logic. Process stays alive → systemd won’t restart. | **No** — issue closed stale, no fix PR |
| **Low** | [#3326](https://github.com/sipeed/picoclaw/pull/3326) | Duplicate `semver@7.8.5` entries in `pnpm-lock.yaml` break `pnpm install --frozen-lockfile`. | **Fixed** — PR #3326 closed |

**Note**: Three coordinated SSRF fixes (#3322–3324) opened same day by same author (SashaMIT), indicating a **security audit sweep** across channel adapters.

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Telegram native table rendering** | [#3325](https://github.com/sipeed/picoclaw/issues/3325) + [#3327](https://github.com/sipeed/picoclaw/pull/3327) | **High** — PR already implements detection + Bot API rich message delivery for GFM/HTML tables. |
| **IRCv3 long-message reassembly** | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | **Medium** — clear use case, 4 comments, but requires protocol-level handling (message tags, labeled responses). |
| **DeltaChat modernization** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | **Medium** — large refactor (-200 LOC), drops legacy auth, adds docs; may need staged review. |
| **Matrix auto-reconnect with backoff** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | **Low** — issue closed stale; would need re-opening or new issue to regain traction. |

**Prediction**: Telegram tables (#3327) and the SSRF fixes (#3322–3324) are the strongest candidates for the next patch release. IRC long-message support may follow if a contributor picks it up.

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Matrix bridge unreliability** | #3203: “silent death after network/server disruption”, 8 comments, 2 👍 | High — bridges go dark until manual restart; affects all Matrix users. |
| **IRC message fragmentation** | #3287: “PicoClaw splits long messages… treated as separate messages” | Medium — breaks conversation flow for IRC users receiving long bridged messages. |
| **Telegram table degradation** | #3325: “degrade to plain text or monospaced code blocks” | Low–Medium — cosmetic but reduces readability for structured data. |
| **Frontend build breakage** | #3326: `pnpm install --frozen-lockfile` fails | Low — CI/dev environment only, fixed promptly. |

**Satisfaction signal**: Users file detailed, reproducible issues with environment specs. The stale closure of #3203 may erode trust for Matrix users; a maintainer comment explaining triage rationale would help.

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 38 days | Open | Large DeltaChat refactor (-200 LOC), drops password auth, updates docs. Blocked on review; modernizes a whole protocol adapter. |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 19 days | Open | IRCv3 long-message support — clear spec, 4 comments, no PR yet. Good “good first issue” candidate. |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | 39 days | **Closed (stale)** | Matrix reconnection bug with community support. Should be re-opened or linked to a tracking issue if fix is planned. |
| [#3322](https://github.com/sipeed/picoclaw/pull/3322) | 1 day | Open | **Security**: SSRF hardening for 5+ channel inbound media. Time-sensitive; should be prioritized for review/merge. |
| [#3323](https://github.com/sipeed/picoclaw/pull/3323) / [#3324](https://github.com/sipeed/picoclaw/pull/3324) | 1 day | Open | **Security**: WeCom/Weixin media client SSRF fixes. Companion to #3322; same author, same pattern. |

**Maintainer action suggested**: 
1. Fast-track review of SSRF PRs (#3322–3324) — coordinated security fix.
2. Decide on #3203: re-open with “help wanted” or document why reconnection is out of scope.
3. Assign reviewer for #3222 (DeltaChat) — it’s a significant cleanup stalled over a month.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-08-10

## 1. Today's Overview
NanoClaw saw **high contributor activity** with **16 open PRs updated** and **1 new issue filed** in the last 24 hours, but **zero merges or closes** — indicating a day of active development and review rather than integration. The workload spans CLI ergonomics, documentation, security hardening, channel integrations (Dial, Slack, Signal), and core refactors (module lifecycle, DB migrations, permissions). No release was cut. The project appears in a **feature-rich, pre-merge sprint** with multiple long-running PRs (some open since May/July) still awaiting review.

## 2. Releases
**No new releases** published today.

## 3. Project Progress (Merged/Closed Today)
**None** — all 16 PRs remain open. Integration velocity is currently **zero**; the backlog of review-ready changes is growing.

## 4. Community Hot Topics
| Item | Type | Activity Signal | Core Need |
|------|------|----------------|-----------|
| [#3217](https://github.com/qwibitai/nanoclaw/issues/3217) | Issue | New (0 comments, 0 👍) | **Python package support in `install_packages`** — blocker for hardened-image adoption when agents depend on pip-installed tools. |
| [#3218](https://github.com/qwibitai/nanoclaw/pull/3218) | PR | New | **Bounded JSON stdin for `ncl` CLI** — enables structured input without framing changes; quality-of-life for automation. |
| [#3208](https://github.com/qwibitai/nanoclaw/pull/3208) | PR | New, `[core-team]` | **Publish agent image to Docker Hub with CVE gates** — supply-chain hardening; manual-dispatch, multi-arch build. |
| [#3207](https://github.com/qwibitai/nanoclaw/pull/3207) | PR | New, `[core-team]` | **Bump pnpm/npm past critical `tar` CVE (GHSA-23hp-3jrh-7fpw)** — immediate security remediation for container image. |
| [#2529](https://github.com/qwibitai/nanoclaw/pull/2529) | PR | Updated (open since **2026-05-18**) | **Signal: deliver inbound attachments to agent** — long-standing fix for dropped files; closes #2528. |
| [#3041](https://github.com/qwibitai/nanoclaw/pull/3041) / [#3050](https://github.com/qwibitai/nanoclaw/pull/3050) | PRs | Updated (open since **2026-07-14**) | **Dial channel (SMS + AI voice)** — new integration + wizard/skill; two linked PRs (adapter + setup). |

**Signal**: Security hardening (#3207, #3208) and channel expansion (Dial, Signal, Slack) are the dominant themes. The Python-package gap (#3217) is a newly surfaced adoption blocker.

## 5. Bugs & Stability
| Severity | Item | Description | Fix PR |
|----------|------|-------------|--------|
| **Critical (CVE)** | [#3207](https://github.com/qwibitai/nanoclaw/pull/3207) | `tar` < 7.5.19 vendored in npm 10.9.8 (base `node:22-slim`) and pnpm 10.33.0 — flagged by grype. Base refresh alone insufficient. | **#3207** (open) |
| **High (data loss)** | [#2529](https://github.com/qwibitai/nanoclaw/pull/2529) | Signal adapter drops inbound attachments (images, PDFs, docs) — path never mounted into agent container. | **#2529** (open, 3+ months) |
| **High (data loss)** | [#3142](https://github.com/qwibitai/nanoclaw/pull/3142) | Signal: non-image/audio attachments forwarded to dead path `/workspace/extra/signal-attachments/<id>` — unreadable by agent. | **#3142** (open, 2+ weeks) |
| **Medium** | [#3209](https://github.com/qwibitai/nanoclaw/pull/3209) | Slack: pasted tables not surfaced to agent — markdown/table parsing gap. | **#3209** (open) |
| **Medium** | [#3215](https://github.com/qwibitai/nanoclaw/pull/3215) | DM resolution logs leak sensitive data — needs redaction. | **#3215** (open) |

**Note**: Two critical-severity bugs (#2529, #3142) have viable fix PRs open for **weeks to months** without merge.

## 6. Feature Requests & Roadmap Signals
| Feature | Evidence | Likelihood for Next Version |
|---------|----------|-----------------------------|
| **Python package channel (`packages_pip`)** | [#3217](https://github.com/qwibitai/nanoclaw/issues/3217) — explicit blocker for hardened-image adoption | **High** — single-issue, clear scope, security-adjacent |
| **Dial channel (SMS + AI voice)** | [#3041](https://github.com/qwibitai/nanoclaw/pull/3041), [#3050](https://github.com/qwibitai/nanoclaw/pull/3050) — adapter + wizard/skill, marked `Feature skill` | **High** — both PRs updated today, core-team adjacent |
| **CLI JSON stdin (`--stdin-json`)** | [#3218](https://github.com/qwibitai/nanoclaw/pull/3218) — generic bounded input mode | **Medium** — low-risk ergonomics, no framing changes |
| **Skill single-responsibility rule** | [#3111](https://github.com/qwibitai/nanoclaw/pull/3111) (docs) — architectural guardrail | **Medium** — docs-only, enables future governance |
| **Host seams for skill-owned capabilities** | [#3186](https://github.com/qwibitai/nanoclaw/pull/3186) — refactor for extensibility | **Medium** — foundational, but large refactor |
| **Module migration registry (DB)** | [#3212](https://github.com/qwibitai/nanoclaw/pull/3212) — schema versioning for modules | **Low–Medium** — infra, not user-visible |

## 7. User Feedback Summary
- **Pain point**: *“Can’t use hardened prebuilt image because my agents need pip packages.”* ([#3217](https://github.com/qwibitai/nanoclaw/issues/3217)) — direct adoption blocker for security-conscious users.
- **Pain point**: *“Signal attachments never reach the agent — images, PDFs, docs all dropped.”* ([#2528](https://github.com/qwibitai/nanoclaw/issues/2528) via #2529, #3142) — reported May, still unresolved; affects any file-based workflow.
- **Pain point**: *“Slack pasted tables invisible to agent.”* ([#3209](https://github.com/qwibitai/nanoclaw/pull/3209)) — limits data-rich channel interactions.
- **Positive signal**: Active contribution on **Dial** (voice/SMS) suggests community demand for telephony channels.
- **No explicit satisfaction/dissatisfaction comments** on PRs today — review cycles not yet started.

## 8. Backlog Watch — Stalled / Needs Maintainer Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#2529](https://github.com/qwibitai/nanoclaw/pull/2529) | **84 days** (since 2026-05-18) | Fixes **total attachment loss** in Signal; closes #2528. Fix PR exists, passes guidelines. | **Urgent review/merge** — user-facing data loss. |
| [#3142](https://github.com/qwibitai/nanoclaw/pull/3142) | **14 days** (since 2026-07-27) | Complements #2529 — fixes non-image/audio attachment path mounting. | **Pair-review with #2529**; same root cause area. |
| [#3041](https://github.com/qwibitai/nanoclaw/pull/3041) / [#3050](https://github.com/qwibitai/nanoclaw/pull/3050) | **27 days** (since 2026-07-14) | **New channel integration** (Dial) + setup wizard — expands product surface. Two linked PRs. | **Coordinated review**; assign channel owner. |
| [#3207](https://github.com/qwibitai/nanoclaw/pull/3207) | **1 day** | **Critical CVE remediation** — blocks secure image publish. | **Fast-track** — security gate for #3208. |
| [#3208](https://github.com/qwibitai/nanoclaw/pull/3208) | **1 day** | **Docker Hub publish + CVE gate** — supply-chain hardening. Depends on #3207. | **Merge after #3207**; core-team labeled. |
| [#3186](https://github.com/qwibitai/nanoclaw/pull/3186) | **6 days** | **Host seams for skill capabilities** — architectural refactor enabling skill-owned features. | **Architecture review needed** — high leverage, high risk. |

---

**Health Indicator**: 🟡 **Caution** — High contributor output, but **integration throughput is zero**. Critical security fix (#3207) and long-standing data-loss bugs (#2529, #3142) have ready PRs awaiting review. Recommend dedicating a **merge sprint** before next feature wave.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-08-10

## 1. Today's Overview
IronClaw shows high development velocity with **54 total updates** (22 issues, 32 PRs) in the last 24 hours, though no new releases were cut. The project is in active stabilization mode: 7 bugs were closed today, 8 PRs merged, and multiple epics (#7166, #7392) signal architectural evolution. Core focus areas include tool-discovery overhaul (#7405/#7410/#7411), parallel capability execution (#7407), WebUI reliability (#7341/#7346/#7348/#7349), and hardening the outbound delivery pipeline (#7395). Contributor mix is healthy—core team, experienced dependabot automation, and new contributors all active.

## 2. Releases
**No new releases today.** Current stable remains `1.1.0` (referenced in #7400).

## 3. Project Progress — Merged/Closed PRs (8)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#7171](https://github.com/nearai/ironclaw/pull/7171) | fix(skills): one DB-backed tree per skill mount; make skill commands runnable | Skills / Persistence | Fixes silent skill-install loss; closes #7168, part of #6941 |
| [#7387](https://github.com/nearai/ironclaw/pull/7387) | chore(deps): bump everything-else group (12 updates) | Dependencies | Routine maintenance |
| [#7022](https://github.com/nearai/ironclaw/pull/7022) | chore(deps): bump actions group (setup-node 4→7, docker/login) | CI / Dependencies | GitHub Actions modernization |
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | [CLOSED] Reborn routine fails on Slack DM read (missing capability) | Agent / Slack | QA blocker resolved |
| [#7292](https://github.com/nearai/ironclaw/issues/7292) | [CLOSED] Installed tool unusable — runner heartbeat error | Tooling / Runtime | Demo-mode CoinGecko tool now functional |
| [#5552](https://github.com/nearai/ironclaw/issues/5552) | [CLOSED] Generic "invalid result" after multiple tool failures | Error Handling | Improved failure diagnostics |
| [#5509](https://github.com/nearai/ironclaw/issues/5509) | [CLOSED] Chat creation latency scales with history | Frontend Performance | Latency growth eliminated |
| [#5510](https://github.com/nearai/ironclaw/issues/5510) | [CLOSED] Cannot delete old routines | Routines / UI | Deletion mechanism restored |

## 4. Community Hot Topics (Most Comments / Engagement)
| Item | Comments | Signal |
|------|----------|--------|
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | 4 | **Slack DM read capability gap** — reborn agent loops on missing capability; exposes need for capability discovery UX |
| [#7405](https://github.com/nearai/ironclaw/issues/7405) | 2 | **Deferred-tool discovery UX** — model turns wasted, incomplete signatures at scale; PRs #7409/#7410/#7411 already stacked |
| [#7400](https://github.com/nearai/ironclaw/issues/7400) | 2 | **Critical API bug** — `stream:true + tools[]` on `/api/v1/responses` creates undeletable "zombie" threads (100% repro, high severity) |
| [#7346](https://github.com/nearai/ironclaw/issues/7346) | 2 | **Emoji regression** — shortcodes (`:wave:`) render as plain text in assistant messages |
| [#7348](https://github.com/nearai/ironclaw/issues/7348) | 2 | **Activity timeline ordering** — tool calls & progress messages appear out of sequence during long runs |

**Underlying needs:** Developers want *predictable, observable tool discovery* (#7405), *reliable streaming API* (#7400), and *faithful UI rendering* (#7346, #7348). The Slack capability gap (#5522) reveals a broader gap: **capability negotiation & fallback UX**.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#7400](https://github.com/nearai/ironclaw/issues/7400) | `stream:true + tools[]` on Responses API fails mid-stream → permanently undeletable "zombie" thread (v1.1.0-rc.1 & stable) | No PR yet |
| **High** | [#7349](https://github.com/nearai/ironclaw/issues/7349) | Page refresh loses large portions of run history & Activity timeline | No PR yet |
| **High** | [#5882](https://github.com/nearai/ironclaw/issues/5882) | Repeated Slack disconnect/reconnect → auth flow stuck at "Waiting for Slack..."; only fix = reinstall extension | No PR yet |
| **Medium** | [#7346](https://github.com/nearai/ironclaw/issues/7346) | Emoji shortcodes (`:wave:`, `:+1:`) render as raw text in assistant messages | No PR yet |
| **Medium** | [#7348](https://github.com/nearai/ironclaw/issues/7348) | Activity blocks & progress messages display in wrong chronological order | No PR yet |
| **Medium** | [#7345](https://github.com/nearai/ironclaw/issues/7345) | Agent reports 61 automations; UI shows 50 — state inconsistency | No PR yet |
| **Medium** | [#6046](https://github.com/nearai/ironclaw/issues/6046) | Simple email→sheet task triggers 124 tool calls (excessive decoding/analysis) | No PR yet |
| **Low** | [#5878](https://github.com/nearai/ironclaw/issues/5878) | Revoked GitHub token → misleading errors instead of re-auth prompt | No PR yet |
| **Low** | [#5551](https://github.com/nearai/ironclaw/issues/5551) | Slack automation posts intermediate progress instead of final result | No PR yet |
| **Low** | [#6479](https://github.com/nearai/ironclaw/issues/6479) | Routines can create/modify other routines → risk of self-replicating automations | No PR yet |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Deferred-tool retrieval as swappable provider** | [#7405](https://github.com/nearai/ironclaw/issues/7405) + [#7411](https://github.com/nearai/ironclaw/pull/7411) | **Very High** — 3 stacked PRs (#7409, #7410, #7411) already open |
| **Parallel execution of `BatchPolicy::Parallel` capability batches** | [#7407](https://github.com/nearai/ironclaw/issues/7407) | **High** — zero model-facing change, bounded concurrency |
| **Generic progressive previews for Slack/Telegram** | [#7396](https://github.com/nearai/ironclaw/pull/7396) | **High** — PR open, channel-neutral contract |
| **Web Push / PWA as first-party notification channel** | [#7398](https://github.com/nearai/ironclaw/pull/7398) | **Medium-High** — XL PR, feature-complete RFC 8030/8291/8292 impl |
| **Replace first-party coding tools with pinned `omp` surface** | [#7392](https://github.com/nearai/ironclaw/issues/7392) | **Medium** — experiment, depends on external `oh-my-pi` pin |
| **Expand stress coverage for built-in/durable write paths** | [#7360](https://github.com/nearai/ironclaw/issues/7360) | **Medium** — CI investment, prevents silent regressions |
| **Fail-closed + hash-gated projection identities** | [#7352](https://github.com/nearai/ironclaw/pull/7352) | **Medium** — fixes approval/auth gate collision |

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Unreliable Slack integration** | #5522 (no DM read), #5882 (auth loop), #5551 (intermediate messages) | 3 issues |
| **UI loses state on refresh** | #7349 (history disappears), #7345 (count mismatch) | 2 issues |
| **Opaque tool failures** | #5552 (generic "invalid result"), #6046 (124 calls for simple task) | 2 issues |
| **Misleading auth errors** | #5878 (revoked GH token), #5882 (Slack re-auth) | 2 issues |
| **Visual regressions** | #7346 (emoji shortcodes), #4341 (CoT leak), #4344 (mirrored message) | 3 issues (2 older) |
| **Routine management gaps** | #5510 (can't delete), #6479 (self-replication risk) | 2 issues |

**Satisfaction signal:** Users hit *show-stopper bugs* in automation channels (Slack) and *observability gaps* (history loss, silent failures). Core chat works but polish gaps accumulate.

## 8. Backlog Watch — Stale / Unanswered Important Items
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#6479](https://github.com/nearai/ironclaw/issues/6479)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-08-10

## 1. Today's Overview
LobsterAI shows low code velocity with **zero pull requests** and **no new releases** in the last 24 hours. Community engagement is present but thin: **three issues were updated**, all remaining open, with two marked as stale (inactive >90 days). The project appears in a maintenance phase where user-reported configuration and multi-model orchestration gaps accumulate faster than they are resolved. No merged fixes or feature landings today.

## 2. Releases
**No new releases** published today. The latest version remains whatever was previously on `main`/`latest`.

## 3. Project Progress
**No PRs merged or closed today.** No features advanced, no bugs fixed via pull requests in the last 24h.

## 4. Community Hot Topics
| Issue | Activity | Core Need |
|-------|----------|-----------|
| [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) — Add context-window & output-token settings to model API config | 2 comments, 1 👍, stale since Apr 2026 | Users hit “Context overflow” errors with DeepSeek and need **per-model context/output limits** exposed in UI to avoid prompt-too-large failures. |
| [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453) — Custom model IDs like `custom_1/openai/gpt-oss-20b:free` rejected as “unlicensed” | 1 comment, fresh (created today) | **Provider/model parsing logic** incorrectly splits on first `/`, misidentifying `custom_1` as provider. Blocks OpenRouter free tiers & NVIDIA models, especially when switching mid-thread. |
| [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) — Cross-model subtask collaboration (M3 planner + DeepSeek executor) | 1 comment, stale since Jun 2026 | **Multi-agent orchestration gap**: gateway function calls not tracked in `sessions_list`/`subagents`; completion notifications don’t propagate across model boundaries. User wants same real-time sync as same-model subtasks. |

**Underlying theme:** Users are pushing LobsterAI beyond single-model chat into **multi-model pipelines** and **custom provider integrations**, but configuration surfaces and orchestration internals haven’t caught up.

## 5. Bugs & Stability
| Severity | Issue | Symptoms | Fix PR? |
|----------|-------|----------|---------|
| High | [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453) | Model switch fails mid-thread for valid OpenRouter/NVIDIA free models; new thread works → **regression in provider parsing** | No |
| Medium | [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | “Context overflow” crashes DeepSeek sessions; no UI to raise window/token limits | No |
| Medium | [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | Cross-model subtask completion invisible to planner; gateway calls untracked → **silent coordination failures** | No |

No fix PRs linked to any of the three.

## 6. Feature Requests & Roadmap Signals
1. **Per-model context/output token controls** (#1187) — highest user vote (👍1), stale but recurring pain. Likely candidate for next settings revamp.
2. **Robust custom-model ID parser** (#2453) — blocks growing class of “provider/model:variant” IDs (OpenRouter, NVIDIA, etc.). Quick regex fix could unblock many.
3. **First-class cross-model subtask protocol** (#2132) — design-level ask: event bus or callback hook so *any* model can notify planner. Would enable true heterogeneous agent teams.

**Prediction:** Next minor version will probably ship #2453 parser fix + #1187 settings fields; #2132 needs architecture work and may slip to a 0.x+1 milestone.

## 7. User Feedback Summary
- **Pain points:** Silent failures when switching models mid-conversation; hard-coded context limits causing abrupt session deaths; no visibility into cross-model task status.
- **Use cases:** Orchestrating planner (M3) + executor (DeepSeek) pipelines; consuming OpenRouter/NVIDIA free tiers via custom model registry.
- **Sentiment:** Frustration that “works in new thread, breaks in existing thread” (#2453) and “stale issues unaddressed for months” (#1187, #2132). No positive feedback surfaced today.

## 8. Backlog Watch
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | 131 days | Core usability for any long-context model; simple settings addition. |
| [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | 62 days | Blocks advanced multi-agent workflows; needs design review. |
| [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453) | 1 day | Fresh, high-impact regression; easy fix, high unblock value. |

**Maintainer action suggested:** Triage #2453 immediately (parser hotfix), schedule #1187 for next sprint, assign #2132 to architecture owner for RFC.

---

*Data sourced from GitHub API snapshot 2026-08-10 00:00 UTC. Links point to live issues.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-08-10

## 1. Today's Overview
Moltis shows low but focused activity over the last 24 hours: two new bug reports and one open pull request, with no merges, closures, or releases. Both issues are recent regressions — one in the heartbeat settings UI (data loss on form submit) and one in Apple Container 1.x sandbox detection — indicating the project is actively surfacing edge-case defects in its desktop/runtime integration layer. The single open PR addresses a security-adjacent vault normalization bug, suggesting maintainers are prioritizing correctness in secret handling. Overall velocity is modest; the project appears in a stabilization phase rather than feature development.

## 2. Releases
No new releases published today.

## 3. Project Progress
**Merged/Closed PRs today:** 0  
**Open PRs updated today:** 1  
- **#1186** `fix(vault): normalize recovery phrase before hashing` — Ensures the stored recovery-key hash matches the normalization (strip dashes, uppercase) applied during unsealing, fixing a mismatch that could block legitimate phrase entry. Author: pxmpsdev. [View PR](https://github.com/moltis-org/moltis/pull/1186)

No feature work advanced today; the only movement is a correctness fix for vault unsealing consistency.

## 4. Community Hot Topics
No issues or PRs have comments or reactions in the last 24h — community discussion is currently absent. Both new issues are single-author reports with zero engagement, so no “hot” topics emerge from this window. Underlying needs visible in the reports:
- **#1187** — Users expect form UIs to preserve non-editable fields (data integrity in settings).
- **#1185** — Apple Container 1.x adoption is outpacing Moltis’ runtime detection logic (compatibility with new container tooling).

## 5. Bugs & Stability
| Rank | Issue | Severity | Fix PR? |
|------|-------|----------|---------|
| 1 | **#1187** Heartbeat settings UI silently resets fields not in form | **High** — silent data loss on save | No |
| 2 | **#1185** Apple Container 1.x sandbox reported as not running | **Medium** — breaks container-based workflows | No |

Both bugs are unassigned and lack reproduction details beyond the reporter’s environment. No fix PRs exist yet.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests in today’s data. However, the two bugs signal near-term roadmap pressure:
- **Settings-form robustness** — A pattern fix (preserve unknown fields on partial updates) will likely be generalized across the UI.
- **Container runtime detection** — Apple Container 1.x support will require updating the sandbox health-check logic; expect a follow-up PR once triaged.

## 7. User Feedback Summary
- **Pain point 1 (settings):** “I changed one heartbeat field and lost my custom endpoint/token because they weren’t in the form.” — Data-loss frustration; trust erosion in settings persistence.
- **Pain point 2 (containers):** “Apple Container starts fine but Moltis says it’s down.” — Blocks developers adopting Apple’s new container CLI; perceived as Moltis lagging behind platform tooling.
- **Satisfaction:** No positive feedback captured today; silence on the PR suggests the vault fix is seen as internal hygiene rather than user-visible.

## 8. Backlog Watch
No long-unanswered items appear in today’s 24h slice. However, maintainers should watch:
- **#1187** — High-severity data-loss bug; needs a fix and regression test before next release.
- **#1185** — Compatibility blocker for macOS developers; triage and assign to runtime-integration owner.
- **#1186** — Security-adjacent; should be reviewed and merged promptly to avoid vault unsealing edge cases.

---

*Data source: GitHub API (issues, PRs, releases) for moltis-org/moltis, 2026-08-09 → 2026-08-10.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-08-10

## 1. Today's Overview
CoPaw (QwenPaw) shows **high development velocity** with 41 items updated in the last 24 hours (18 issues, 23 PRs). The project is in active feature development for v2.1.0b2, with significant community engagement around memory systems (ReMe), provider integrations, and UI/UX improvements. No new releases were published today. The ratio of open to closed items (33 open vs 8 closed) indicates a growing backlog, though several critical bugs have matching fix PRs already submitted.

## 2. Releases
**No new releases today.** The current version remains **v2.1.0b2** (beta). Multiple PRs target fixes for this beta branch.

## 3. Project Progress — Merged/Closed Today
| PR/Issue | Type | Summary |
|----------|------|---------|
| [#6846](https://github.com/agentscope-ai/QwenPaw/pull/6846) | **PR Merged** | Added DeepSeek V4 context windows (1M tokens) to provider catalog — fixes context compaction triggering prematurely at 128k |
| [#6848–#6851](https://github.com/agentscope-ai/QwenPaw/issues/6848) | **Issues Closed** | 4 duplicate reports of front-end renderer collapsing long multi-line tool output — marked closed (fix likely in progress via other PRs) |
| [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) | **Issue Closed** | Conversation loss on abnormal interruption (reboot/crash) — closed without fix; checkpoint persistence still missing |
| [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) | **Issue Closed** | Custom Ascend-vLLM connection failure — closed; user reports v1.1.7 worked, later versions fail despite config testing OK |

**Net progress**: One provider catalog fix merged; several long-standing issues closed without resolution (conversation persistence, Ascend-vLLM). Core beta blockers remain open.

---

## 4. Community Hot Topics (Most Active Items)

| Item | Activity | Core Need |
|------|----------|-----------|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | **66 comments** 🔥 | **Community onboarding** — "Help Wanted" task board (P0–P2 priorities). Contributors claim tasks; @cuiyuebing coordinates. Active since March. |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 5 comments | **Mobile Web Console** — Users want responsive UI for phone/tablet access to agent control panel. |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 4 comments | **Assistant message timing bug** — Completion time shows seconds vs actual 2 min think time (v2.0.1, Windows). |
| [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | 3 comments | **MCP tool type coercion** — Numeric-looking strings sent as numbers, breaking API calls (e.g., stock codes "0.000001" → 1e-6). |
| [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | 3 comments | **Gemini provider broken** — `$schema` field in tool schema rejected by Google SDK; PR [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) fixes this. |
| [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) | 2 comments | **Approval UX** — AI should describe *why* it needs permission in plain language, not just show raw PowerShell. PR [#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) adds localized purpose descriptions. |
| [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | 2 comments | **Antivirus false positives** — QwenPaw processes killed by AV during tasks; competitor "WorkBuddy" unaffected. |
| [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) | 1 comment | **ReMe memory docs lie** — `prompts.py` claims Dream writes to `MEMORY.md`; actual pipeline writes to `digest/` — never implemented. |
| [#6841](https://github.com/agentscope-ai/QwenPaw/issues/6841) | 1 comment | **Auto-Dream fault tolerance** — Single unit schema failure marks entire nightly task as error; needs retry/partial-success handling. |

**Underlying themes**: 
- **Trust & reliability** (conversation loss, timing bugs, AV kills, memory doc mismatch)
- **Provider diversity** (Gemini, Ascend-vLLM, Volcengine, Xiaomi, DeepSeek V4)
- **UX polish** (mobile, approval descriptions, tool output rendering)
- **Memory system maturity** (ReMe Light → ReMe4 roadmap, Auto-Dream robustness)

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) Conversation history lost on crash/reboot — no checkpoint persistence | **Closed (no fix)** | None |
| **Critical** | [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) Gemini provider completely broken — `$schema` rejected by Google SDK | Open | [#6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) ✅ Ready |
| **High** | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) MCP tool coercion: string→number breaks financial/stock APIs | Open | None yet |
| **High** | [#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806) Windows: Cannot save *any* model config — "Internal Server Error" | Open | None yet |
| **High** | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) Antivirus kills QwenPaw processes during task execution | Open | None (may require code signing/behavior changes) |
| **Medium** | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) Assistant completion time wrong (shows creation time, not finish time) | Open | [#6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) ✅ Ready |
| **Medium** | [#6848–#6852](https://github.com/agentscope-ai/QwenPaw/issues/6848) Front-end collapses long tool output into unreadable blob | 4 closed, 1 open | Likely addressed in console renderer PRs |
| **Medium** | [#6358](https://github.com/agentscope-ai/QwenPaw/pull/6360) Context injection uses `role=system` → rejected by AgentScope validation | Open | [#6360](https://github.com/agentscope-ai/QwenPaw/pull/6360) ✅ Changes context to `role=user` |
| **Low** | [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) Dream prompt claims writes to `MEMORY.md`; actually writes to `digest/` | Open | None (doc/code mismatch) |

**Stability signal**: 3 critical/high bugs have ready fix PRs (#6844, #6845, #6360). The conversation persistence bug (#5579) was closed without resolution — a recurring risk.

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|----------------------------|
| **Mobile-responsive Web Console** | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Medium — UI work tracked in [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) (theme/skin module draft) |
| **Approval purpose descriptions** | [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) | **High** — PR [#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) from first-time contributor, ready |
| **ReMe4 full roadmap** (Auto-Link, tri-modal search, 4-category digest weights) | [#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840) | Medium — ReMe Light (0.4.1.4) shipped in 2.1.0b2; full v4 timeline unclear |
| **Volcengine Agent Plan & Xiaomi MiMo V2.5 providers** | [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) | **High** — PR open, adds two major Chinese cloud providers |
| **CIDR support in no-auth allowlist** | [#6259](https://github.com/agentscope-ai/QwenPaw/pull/6259) | Medium — Security hardening, first-time contributor PR |
| **Reranker for ReMe memory search** | [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) | Medium — Backend PR under review, over-fetches + reranks |
| **Session fork (checkpoint snapshot)** | [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) | Medium — Ready for review, enables conversation branching |
| **Hidden agents (plugin-internal)** | [#6842](https://github.com/agentscope-ai/QwenPaw/pull/6842) | High — Simple flag, first-time contributor PR |
| **Real-time SSE streaming (no buffering)** | [#6843](https://github.com/agentscope-ai/QwenPaw/pull/6843) | High — Fixes console "all-at-once" rendering, ASGI middleware approach |

**Predicted v2.1.0 inclusions**: Provider fixes (#6844, #6515), approval UX (#6854), timing fix (#6845), hidden agents (#6842), SSE streaming (#6843), context injection fix (#6360). ReMe4 and mobile UI likely later.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Data loss on crash/reboot** | [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) — "conversation completely disappears", "system very fragile" | 😡 **High frustration** — closed without fix |
| **Antivirus interference** | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) — "killed by AV, WorkBuddy unaffected" with screenshots | 😟 **Concern** — blocks enterprise/Windows adoption |
| **Provider compatibility gaps** | [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) Ascend-vLLM; [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) Gemini | 😕 **Regression** — v1.1.7 worked, v2.x broken |
| **MCP type coercion breaks real APIs** | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) — stock codes "0.000001" → scientific notation | 😕 **Silent data corruption** |
| **Console output unreadable** | 5 duplicate issues [#6848–#6852](https://github.com/agentscope-ai/QwenPaw/issues/6848) — long tool output collapsed | 😡 **High visibility** — multiple users hit same bug |
| **Approval UX opaque** | [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) — "must read PowerShell to understand" | 😐 **Usability friction** |
| **Mobile access missing** | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) — "convenient for mobile operation" | 😐 **Feature gap** |
| **Memory system docs vs reality** | [#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853) — "prompts.py lies to agents" | 😕 **Trust erosion** |

**Positive signals**: Active contributor onboarding (#2291), first-time contributor PRs merging (#6846, #6854, #6842, #6843), rapid fix turnaround for Gemini (#6812 → #6844 in 1 day).

---

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Stale Since | Why It Matters |
|------|-------------|----------------|
| [#5579](https://github.com/agentscope-ai/QwenPaw/issues/5579) Conversation checkpoint persistence | **2026-06-27** (44 days) | **Critical reliability gap** — closed without fix; users lose all progress on crash/reboot. Should be reopened or tracked in epic. |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) Mobile Web Console | **2026-07-20** (21 days) | 5 comments, no PR — UX gap for remote/on-call usage. Related to [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) theme draft. |
| [#6360](https://github.com/agentscope-ai/QwenPaw/pull/6360) Context injection role fix | **2026-07-22** (19 days) | **Blocks memory/context features** — system role rejected by AgentScope. Ready, needs review. |
| [#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) ReMe reranker support | **2026-07-23** (18 days) | **Memory quality upgrade** — "Under Review" label, backend only; frontend integration needed. |
| [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) Volcengine + Xiaomi providers | **2026-07-28** (13 days) | **Major provider gap** for Chinese users — two cloud platforms missing. |
| [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) Session fork | **2026-08-05** (5 days) | **Power-user feature** — "ready-for-human-review", enables checkpoint workflows. |
| [#6750](https://github.com/agentscope-ai/QwenPaw/pull/6750) Chat session deadlock + oversized prompt collapse | **2026-08-06** (4 days) | **3-in-1 frontend fix** — addresses message queue stuck, early save, prompt collapse. |
| [#6806](https://github.com/agentscope-ai/QwenPaw/issues/6806) Windows model config save broken | **2026-08-07** (3 days) | **Platform blocker** — "Internal Server Error" on every save; plugin-package analysis provided. |

---

## Health Indicators Summary
| Metric | Signal |
|--------|--------|
| **Velocity** | 🟢 High — 41 updates/24h, multiple PRs ready |
| **Bug Fix Latency** | 🟡 Mixed — Critical Gemini fixed in 1 day; conversation persistence ignored 44 days |
| **

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-08-10

## 1. Today's Overview
ZeroClaw shows **high governance activity** with 5 active RFC discussions updated today, but **no merged feature work** in the last 24 hours (only 1 PR closed/merged out of 50 updated). The project is in a **process-refinement phase**: maintainers are debating work-lane automation, RFC workflow streamlining, per-model capability config, WhatsApp security defaults, and risk-label precedence. Meanwhile, 49 open PRs span security hardening (SSRF, secrets, verifiable intent), memory subsystem correctness, Windows shell support, observability (Langfuse), and channel fixes (Signal, WhatsApp, ACP). Release cadence appears paused — current version remains `0.8.3` with `0.8.0-beta-1` RFC baseline.

## 2. Releases
**No new releases** in the last 24h. Latest known version: `0.8.3` (per RFC #6808). The `0.8.0-beta-1` milestone marked the start of the Work Lanes RFC rollout, now deferred/pending ratification.

## 3. Project Progress (Merged/Closed PRs Today)
Only **1 PR merged/closed** in the last 24h (details not provided in feed). The 49 open PRs updated today indicate **active review cycles** but no completions. Notable PRs in advanced review:
- **#9571** `chore(channels): remove the WATI channel` — full removal of a channel integration (CI, gateway, installer, web proxy) by distinguished contributor.
- **#9196** `feat(mcp): materialize resource blob with aggregate budget preflight` — MCP resource handling with budget enforcement.
- **#9067** / **#9066** — 7-part Hindsight memory stack (retention/forget, consolidation/dedup) by logical-and, rebased and under review.
- **#9866** `fix(runtime): harden verifiable intent boundaries` — security hardening (JWK redaction, wraparound, currency validation) by Audacity88.

## 4. Community Hot Topics (Most Active Issues/PRs)

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** RFC: Work Lanes, Board Automation, Label Cleanup | Issue (RFC) | 22 | **Governance scalability** — automate work routing, reduce maintainer label overhead, define "lanes" for triage. Deferred ratification, rollout in progress. |
| **[#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)** RFC: Per-model capability & context-window config | Issue (RFC) | 12 | **Model metadata fidelity** — unify vision/context_window sources, fix fallback-to-32k bug, enable accurate UI budget display. |
| **[#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)** RFC: Empty WhatsApp `allowed_groups` = permit-none | Issue (RFC) | 11 | **Security default flip** — change empty list from "allow all groups" to "allow none" to prevent accidental exposure. Sponsored by @belumume. |
| **[#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)** RFC: Streamline RFC scope, discussion, voting, assignment | Issue (RFC) | 6 | **Process velocity** — reduce 7-day minimum discussion, replace unanimity with lighter consensus, automate vote coordination. |
| **[#9530](https://github.com/zeroclaw-labs/zeroclaw/issues/9530)** RFC: Risk precedence for test-only changes in high-risk paths | Issue (RFC) | 6 | **Label consistency** — resolve conflict between `risk:low` definition and test-only changes in security-sensitive directories. |

**Underlying theme**: The project is **optimizing its own governance and security defaults** rather than shipping user-facing features. Contributors are investing in process tooling (labels, RFC workflow) and safe-by-default configs (WhatsApp, model caps).

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue/PR | Description | Fix PR Exists? |
|----------|----------|-------------|----------------|
| **Critical** | **[#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826)** `fix(tools): gate image_gen download URL against SSRF` | `image_gen` tool fetches server-supplied URL — SSRF via compromised fal.ai or MITM. | ✅ **#8826** (open, needs author action) |
| **High** | **[#9866](https://github.com/zeroclaw-labs/zeroclaw/pull/9866)** `fix(runtime): harden verifiable intent boundaries` | JWK private scalars serialized/leaked in debug; `u32` wraparound on checkout qty; empty currency accepted in payment constraints. | ✅ **#9866** (open, by Audacity88) |
| **High** | **[#9544](https://github.com/zeroclaw-labs/zeroclaw/pull/9544)** `fix(delegate): honor configured provider fallbacks` | Delegated calls bypassed root session provider builder — lost retries, fallbacks, credentials, model resolution. | ✅ **#9544** (open, by vrurg) |
| **High** | **[#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424)** `fix(runtime): reject semantic-empty terminal completions` | Blank/whitespace/think-only responses reported as success instead of retry/fallback. | ✅ **#9424** (open, in progress) |
| **High** | **[#9197](https://github.com/zeroclaw-labs/zeroclaw/pull/9197)** `fix(channels): connect CLI Ctrl+C to supervisor lifecycle token` | Ctrl+C during `zeroclaw channel start` causes restart loop (supervisor sees clean return as crash). | ✅ **#9197** (open, needs author action) |
| **Medium** | **[#9777](https://github.com/zeroclaw-labs/zeroclaw/pull/9777)** `fix(channels): accept Signal source UUID senders` | Signal `sourceUuid` not deserialized — phone-number-private senders lose identity. | ✅ **#9777** (open) |
| **Medium** | **[#9636](https://github.com/zeroclaw-labs/zeroclaw/pull/9636)** `fix(config): accept Windows null device (nul) as safe redirect` | Shell policy blocked `2>nul` on Windows while allowing `/dev/null` on Unix. | ✅ **#9636** (open, needs maintainer review) |
| **Medium** | **[#9758](https://github.com/zeroclaw-labs/zeroclaw/pull/9758)** `fix(memory): stop consolidation inventing traits/speaking over persona` | Memory consolidation output injected as self-description — model hallucinates permanent traits from one-off behavior. | ✅ **#9758** (open, needs author action) |

**Stability signal**: 8 high/medium bug-fix PRs active today — memory, delegation, shell policy, and Signal/WhatsApp channels are focus areas. No crash reports in issues; bugs surfaced via PR reviews.

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Per-model capability/context config** | [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) (RFC, P1) | **High** — blocked on RFC ratification; PR #9809 `feat(providers): support multiple models per provider profile` already open |
| **Work Lanes & board automation** | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) (RFC, P2) | **Medium** — rollout in progress but ratification deferred; depends on label cleanup |
| **Langfuse observability backend** | [#9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556) (PR, P2) | **High** — feature-complete PR, new `observability-langfuse` feature flag |
| **PowerShell native shell on Windows** | [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) (PR, XL) | **Medium** — large refactor, needs author action; Windows parity work |
| **MCP resource blob materialization with budget** | [#9196](https://github.com/zeroclaw-labs/zeroclaw/pull/9196) (PR, L) | **Medium** — builds on merged #9195; MCP ecosystem investment |
| **Streamlined RFC process** | [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) (RFC, P1) | **Process-only** — no code change, but accelerates future features |

**Prediction**: Next version (`0.8.4` or `0.9.0`) will likely include **Langfuse observability**, **per-model provider profiles** (#9809), **Windows PowerShell support**, and **Signal UUID sender fix**. Memory consolidation fixes (#9066, #9067, #9758) may land as a batch.

## 7. User Feedback Summary
No direct user issues (bug reports, feature requests from end-users) in today’s feed. All 5 issues are **internal RFCs** authored by maintainers/contributors (@Audacity88, @NiuBlibing, @belumume). This indicates:
- **Community is contributor-driven** — users file PRs, not issues.
- **Pain points are architectural**: governance overhead, config fragmentation, security defaults.
- **No quickstart/zerocode regressions reported** — labels `quickstart`, `zerocode` appear only on PRs fixing internals.

## 8. Backlog Watch (Stale/Needs Maintainer Attention)

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)** Work Lanes RFC | 83 days | Ratification deferred, rollout in progress | Blocks governance scaling; label cleanup prerequisite for automation. |
| **[#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)** Per-model capability config | 69 days | Open, P1, high risk | Unblocks accurate context budgeting & UI; PR #9809 depends on it. |
| **[#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)** WhatsApp `allowed_groups` default | 15 days | In progress, P1, high risk | Security default flip — prevents group exposure; sponsored but needs merge. |
| **[#9066](https://github.com/zeroclaw-labs/zeroclaw/pull/9066)** / **[#9067](https://github.com/zeroclaw-labs/zeroclaw/pull/9067)** Hindsight memory stack (4/7, 5/7) | 27 days | Rebased, needs author action | 7-part memory correctness series; foundational for agent memory. |
| **[#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182)** PowerShell native shell | 21 days | XL, needs author action | Windows parity; large surface area (cron, shell, WASM, delegate). |
| **[#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826)** SSRF gate for `image_gen` | 33 days | Needs author action | Critical security fix; `image_gen` tool fetches untrusted URLs. |

**Maintainer bandwidth alert**: 6 high-priority items >2 weeks old with `needs-maintainer-review` or `needs-author-action`. RFC ratification backlog may be slowing merges.

---

**Project Health Score**: 🟡 **Moderate**  
- ✅ Active security hardening, memory correctness, cross-platform work  
- ⚠️ Zero merges in 24h; RFC process bottleneck; 49 open PRs aging  
- 🔮 Next release likely process/security focused, not feature-rich

*Data source: GitHub API snapshot 2026-08-10. Links point to zeroclaw-labs/zeroclaw.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*