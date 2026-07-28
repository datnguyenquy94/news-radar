# OpenClaw Ecosystem Digest 2026-07-28

> Issues: 169 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-28 02:43 UTC

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

# OpenClaw Project Digest — 2026-07-28

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 500 PRs and 169 issues updated in 24 hours — a velocity that suggests a large, active contributor base or automated bot activity. The 212 merged/closed PRs indicate strong throughput, though the 288 open PRs signal a growing review backlog. Critically, **no new releases** have been cut, meaning fixes and features are accumulating in `main` without user-facing delivery. The issue landscape is dominated by **gateway stability** (memory leaks, OOM crashes, session deadlocks), **session-state integrity** (message loss, compaction bugs, bootstrap bloat), and **security hardening** (memory trust tagging, skill permissions). Multiple P0/P1 bugs affect production gateway reliability.

## 2. Releases

**No new releases** published today. The latest version appears to be in the `2026.7.2-beta.x` series based on issue references. Users on stable channels are not receiving the 200+ merged fixes from recent days.

---

## 3. Project Progress — Merged/Closed PRs (212 today)

Key merged work (from open PRs with maintainer-ready status):

| PR | Area | Summary |
|----|------|---------|
| [#108322](https://github.com/openclaw/openclaw/pull/108322) | voice-call | Fix tail cursor alignment on short reads — prevents log corruption |
| [#113606](https://github.com/openclaw/openclaw/pull/113606) | channel:line | Preserve webhook error details (fixes `[object Object]` errors) |
| [#112606](https://github.com/openclaw/openclaw/pull/112606) | security | Audit live plugin collectors — closes registry gap |
| [#112579](https://github.com/openclaw/openclaw/pull/112579) | agents | Keep MCP resolvers from live registries |
| [#111181](https://github.com/openclaw/openclaw/pull/111181) | gateway | Bound Canvas A2UI JSONL file reads — prevents unbounded memory |
| [#114601](https://github.com/openclaw/openclaw/pull/114601) | agents | Reject directories in `read` tool before `readFile` — clearer errors |
| [#114825](https://github.com/openclaw/openclaw/pull/114825) | agents | Classify Google invalid API keys as auth failures — enables fallback |
| [#114390](https://github.com/openclaw/openclaw/pull/114390) | tools | Unescape literal `\n` in write tool content — fixes generated files |
| [#109745](https://github.com/openclaw/openclaw/pull/109745) | memory | Honor `Retry-After` header in embeddings batch retry |
| [#112003](https://github.com/openclaw/openclaw/pull/112003) | codex | Unit tests for `extractRawAssistantText` |

**Notable large PRs awaiting author/review:**
- [#82572](https://github.com/openclaw/openclaw/pull/82572) (XL) — Persist followup queues across gateway restarts (session-state, message-delivery risk)
- [#114865](https://github.com/openclaw/openclaw/pull/114865) (L) — Prevent cron/Workboard lifecycle regressions
- [#114841](https://github.com/openclaw/openclaw/pull/114841) (M) — Rename scheduler agent tool `cron` → `automations` (RFC 0026)
- [#98259](https://github.com/openclaw/openclaw/pull/98259) (M) — Enable prompt cache keys for Azure OpenAI

---

## 4. Community Hot Topics — Most Discussed Issues

| Issue | Comments | 👍 | Core Need |
|-------|----------|-----|-----------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 22 | 0 | **Security**: Tag memory by origin (user, web, skills) to prevent poisoning attacks |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway Memory Leak — RSS 350MB→15.5GB | 21 | 1 | **Stability P0**: Severe leak causes OOM crashes every 2-3 days |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) Second message fails: "reply session initialization conflicted" | 16 | 1 | **Session integrity**: Cross-channel, position-dependent failure |
| [#74484](https://github.com/openclaw/openclaw/issues/74484) Gateway pairing scope deadlock | 13 | 2 | **Auth/CLI**: CLI lacks scope to approve/reject auto-reissued repair requests |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) SQLite snapshot restore lacks crash/identity guarantees | 12 | 0 | **Data safety**: Restore reports success without durable directory linking |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) Webhook hook sessions should reuse sessionKey | 11 | 0 | **Multi-turn**: Documented `sessionKey` reuse not implemented |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) Session context bloat: bootstrap files re-injected every turn | 10 | 2 | **Token efficiency**: 20-30% context wasted on repeated bootstrap files |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Denylist support for exec-approvals | 10 | 8 | **Security policy**: "Allow all except X" for dangerous commands |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Fully dynamic model discovery (OpenRouter) | 10 | 3 | **Model ops**: Static catalog can't keep up with fast-moving providers |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway heap grows to 1073MB+ at idle on macOS | 9 | 1 | **Memory**: Idle heap growth → cron job silent failures |

**Pattern**: Top issues cluster around **gateway memory management**, **session lifecycle correctness**, and **security policy granularity** — all production-blocking concerns.

---

## 5. Bugs & Stability — Ranked by Severity

### P0 / Critical (Production Down / Data Loss)
| Issue | Status | Fix PR? | Summary |
|-------|--------|---------|---------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Open | No | Gateway RSS 350MB→15.5GB over days → OOM kill → restart loop |
| [#109867](https://github.com/openclaw/openclaw/issues/109867) | Closed | Likely | Beta.2 migration creates index before column — blocks gateway startup |
| [#113434](https://github.com/openclaw/openclaw/issues/113434) | Open | No | Codex `sessions.reset` reuses retired ID; catalog scans exhaust RAM |

### P1 / High (Crash Loop / Message Loss / Session Corruption)
| Issue | Status | Fix PR? | Summary |
|-------|--------|---------|---------|
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | Open | No | Heap 558MB→1073MB+ idle → cron jobs silently fail (timeouts, no errors) |
| [#103917](https://github.com/openclaw/openclaw/issues/103917) | Closed | Likely | Gateway crashes on `FsSafeError: root dir not found` after subagent workspace deletion |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) | Open | No | Auto-update leaves gateway with stale hashed bundle imports |
| [#90178](https://github.com/openclaw/openclaw/issues/90178) | Closed | Likely | Subagent announce give-up → parent waits forever on `sessions_yield` (deadlock) |
| [#89766](https://github.com/openclaw/openclaw/issues/89766) | Closed | Likely | Isolated cron lanes leak on claude-cli backend → accumulate until restart |
| [#113323](https://github.com/openclaw/openclaw/issues/113323) | Open | No | LLM idle timeout aborts during reasoning-token streaming on local models |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | Open | No | Matrix room agents loop on no-reply output, replay stale state after restart |

### P2 / Medium (UX Friction / Config Bugs)
| Issue | Status | Fix PR? | Summary |
|-------|--------|---------|---------|
| [#110065](https://github.com/openclaw/openclaw/issues/110065) | Closed | Likely | `compaction.enabled` read by code but rejected by config schema |
| [#109672](https://github.com/openclaw/openclaw/issues/109672) | Closed | Likely | "Something went wrong" when AWS Guardrail triggered — no logging |
| [#110067](https://github.com/openclaw/openclaw/issues/110067) | Open | No | claude-cli: mid-turn assistant text never delivered durably |
| [#99251](https://github.com/openclaw/openclaw/issues/99251) | Closed | Likely | Ollama: native `tool_calls` not recognized → falls back to JSON parsing |
| [#45846](https://github.com/openclaw/openclaw/issues/45846) | Closed | Likely | Web UI chat images display too large (regression) |

**Observation**: Multiple P1/P0 bugs have **no linked fix PR** — especially the gateway memory leaks (#91588, #87109) which are the most user-impacting.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Signal | Likelihood for Next Version |
|-------|-------|--------|----------------------------|
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Denylist for exec-approvals | 8 | **High demand** — security policy flexibility | High (clear scope, security value) |
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | 0 | **Strategic security** — memory poisoning prevention | Medium (needs design, security review) |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Dynamic model discovery (OpenRouter) | 3 | **Ops necessity** — static catalog untenable | High (active PRs in area) |
| [#11665](https://github.com/openclaw/openclaw/issues/11665) Webhook `sessionKey` reuse | 0 | **Doc/code mismatch** — multi-turn broken | High (linked PR open) |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) Agent-triggered context compaction | 2 | **Agent autonomy** — self-compact tool | Medium (linked PR open) |
| [#12219](https://github.com/openclaw/openclaw/issues/12219) Skill Permission Manifest (skill.yaml) | 0 | **Supply chain security** — informed consent | Medium (needs RFC) |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) Expose OpenRouter usage cost | 1 | **Cost observability** — per-message tracking | Low (nice-to-have) |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) Model fallback on context length exceeded | 0 | **Resilience** — fallback only on API errors today | Medium (config exists, logic missing) |
| [#10142](https://github.com/openclaw/openclaw/issues/10142) `session:end` internal hook event | 0 | **Integration** — Temporal/workflow signaling | Low (niche) |
| [#13968](https://github.com/openclaw/openclaw/issues/13968) On-demand HEARTBEAT.md loading | 0 | **Token optimization** — 380 tokens every message | High (low risk, high savings) |

**Prediction**: Next version will likely include denylist (#6615), dynamic model discovery (#10687), webhook sessionKey fix (#11665), HEARTBEAT.md lazy-load (#13968), and skill manifest groundwork (#12219) — all have PR movement or clear implementation paths.

---

## 7. User Feedback Summary — Real Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Gateway instability** | #91588 (21 comments), #87109 (9), #113434 (7) — OOM crashes, silent cron failures, RAM exhaustion | **Critical**: Users cannot run gateway >2-3 days without restart |
| **Session/message loss** | #102020 (16), #11665 (11), #64664 (7), #109672 (7) — cross-channel conflicts, webhook multi-turn broken, approvals lost on restart | **High**: Core chat reliability broken |
| **Memory/token inefficiency** | #67419 (10, 2👍), #13968 (4) — 20-30% context wasted on bootstrap re-injection | **Medium**: Costly for long conversations |
| **Security policy gaps** | #6615 (10, 8👍), #7707 (22), #12219 (6) — no denylist, no memory trust tags, no skill permissions | **Medium**: Production blockers for security-conscious users |
| **CLI/TUI usability** | #10118 (6, 4👍), #9637 (6) — no Shift+Enter, emojis break screenreaders | **Medium**: Daily friction for terminal users |
| **Provider-specific bugs** | #99251 (5), #109672 (7), #89445 (4) — Ollama tool_calls, AWS Guardrail silent, 2026.5.28 startup failure | **Medium**: Fragmented provider experience |

**Sentiment**: Frustration with **gateway reliability** dominates. Users report workarounds (daily restarts, downgrades). Positive signals on **security feature requests** (denylist, trust tagging) show users investing in platform long-term.

---

## 8. Backlog Watch — Stale High-Impact Items Needing Maintainer Attention

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | 176 days | Security architecture | Foundational for memory safety; tagged `needs-security-review`, `needs-product-decision` |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway Memory Leak | 49 days | **P0 stability** | No fix PR; 21 comments, 1👍; blocks production use |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) Bootstrap re-injection bloat | 104 days | Token cost | 2👍; clear optimization; tagged `clawsweeper-recovery-stuck` |
| [#6615](https://github.com/openclaw/openclaw/issues/6615) Exec-approvals denylist | 178 days |

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem (2026-07-28)

---

## 1. Ecosystem Overview

The personal AI agent open-source ecosystem shows **bimodal maturity**: a cluster of **high-velocity, production-grade platforms** (OpenClaw, IronClaw, ZeroClaw, Hermes Agent, NanoBot) shipping architectural rewrites and hardening releases, contrasted with **specialized or early-stage projects** (PicoClaw, NanoClaw, Moltis, CoPaw) focusing on desktop UX, channel integrations, and protocol interoperability. **NullClaw and ZeptoClaw are effectively dormant**. Across active projects, the dominant theme is **stabilization over feature expansion**—memory safety, session integrity, gateway/runtime reliability, and security hardening consume disproportionate engineering capacity. No project has solved "reliable multi-day gateway uptime" or "zero-config local model onboarding" at scale.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Open PR Backlog | Latest Release | Health Score* |
|---------|--------------|-----------|-------------------|-----------------|----------------|---------------|
| **OpenClaw** | 169 | 500 | 212 | 288 | 2026.7.2-beta.x (stale) | 🟡 High velocity, release debt |
| **IronClaw** | 20 | 50 | 19 | ~30 | **v1.0.0 (2026-07-27)** | 🟢 Post-release hardening |
| **ZeroClaw** | 18 | 50 | 2 | ~45 | v0.8.3 (v0.8.5 tracking) | 🟠 Stability-starved |
| **Hermes Agent** | 20 | 50 | 14 | 36 | v0.19.0 (ref) | 🟡 Risk-concentrated |
| **NanoBot** | 63 closed | 20 | 20 | 14 | Pre-release prep | 🟢 Hardening sprint |
| **CoPaw** | 19 | 50 | 14 | ~36 | v2.0.1 | 🟡 Desktop reliability gaps |
| **LobsterAI** | 9 | 9 | 9 | 4+ stale | Unversioned | 🟠 Windows crisis, review bottleneck |
| **PicoClaw** | 5 | 4 | 0 | 4 | v0.3.1 | 🟡 Maintenance, review stalled |
| **NanoClaw** | 0 | 10 | 1 | 9 | None | 🟢 Active dev, review queue growing |
| **Moltis** | 0 | 5 | 0 | 5 | None | ⚪ Core-only, no community |
| **NullClaw** | 0 | 1 (bot) | 0 | 1 | None | ⚪ **Dormant** |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | None | ⚪ **Inactive** |

*Health Score: 🟢 Stable/releasing | 🟡 High activity with risks | 🟠 Critical bugs blocking release | ⚪ Low/no activity

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Largest contributor throughput**: 500 PRs/24h dwarfs all peers (next: IronClaw/ZeroClaw/Hermes/CoPaw at ~50)
- **Most battle-tested session/gateway architecture**: 200+ merged fixes in days, though unreleased
- **Security depth**: Memory trust tagging (#7707), skill permission manifests (#12219), exec denylist (#6615) exceed peer scope
- **Multi-channel maturity**: Gateway pairing, webhook session reuse, cross-channel session conflict resolution are production concerns peers are just discovering

### Technical Approach Differences
| Dimension | OpenClaw | IronClaw | ZeroClaw | Hermes | NanoBot |
|-----------|----------|----------|----------|--------|---------|
| **Architecture** | Monolithic gateway + agents | Reborn: decoupled runtime/storage/extensions | SOP daemon + PostgreSQL sessions | Desktop-first, profile-isolated | Embeddable runtime + skills |
| **Session State** | SQLite snapshots + compaction | Row-native process journal | PostgreSQL backend | Honcho memory provider | GitStore + consolidation |
| **Extension Model** | Skills + MCP + live registries | Manifest-driven (V3 target) | Package/capability catalog (RFC) | Bundled skills (87) lazy-load RFC | Native Python extensions SDK |
| **Release Cadence** | Beta series, **no stable cut** | **v1.0.0 shipped**, weekly minors | Weekly non-breaking (v0.8.x) | Irregular (v0.19.x) | Milestone-driven (v0.2/1.0 target) |

### Community Size Comparison
- **OpenClaw**: 22 comments on memory trust tagging, 21 on memory leak — highest *technical* engagement
- **IronClaw**: 14 comments on error recoverability epic — deep architectural discourse
- **NanoBot/CoPaw/LobsterAI**: 3-9 comments on usability bugs — broader but shallower user base
- **NullClaw/ZeptoClaw/Moltis**: Near-zero community signals

**Verdict**: OpenClaw leads on **scale and production hardening scope** but lags on **release discipline**—the only top-tier project without a stable release in the observation window.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Gateway/Runtime Memory Safety** | OpenClaw (#91588, #87109), Hermes (#71463), ZeroClaw (CI mutex poison), LobsterAI (accelerator corruption) | Bounded heaps, leak detection, crash-free idle, byte-pass-through integrity |
| **Session Lifecycle Correctness** | OpenClaw (#102020, #11665), NanoBot (#4792, #5120), CoPaw (#6505, #6506), IronClaw (#6696) | Durable IDs, cross-restart persistence, sub-agent inheritance, queue survival |
| **Local Model Onboarding** | NanoBot (#2570, #2329), LobsterAI (#2390, #2396), PicoClaw (implied), Hermes (implied) | Auto-detect Ollama/LM Studio/pwsh, UTF-8 paths, configurable shells, port management |
| **Security Policy Granularity** | OpenClaw (#6615, #7707, #12219), Moltis (#1170), ZeroClaw (#9417), NanoBot (#4667) | Exec denylist, memory trust tags, skill manifests, operator-gated privileged tools, token leak prevention |
| **Channel × Provider Isolation** | NanoBot (#2329), NanoClaw (Signal, Dial), Hermes (WeCom, SSH), IronClaw (#6741), PicoClaw (#3276) | Per-channel provider resolution, OAuth reliability, webhook bind config, systemd coexistence |
| **Observability & Debugging** | Hermes (#65329), Moltis (#1174), CoPaw (#6503), IronClaw (implied), ZeroClaw (RFC #9330) | Turn tracing, per-agent token stats, feedback widgets, AI-assisted review, structured instrumentation |
| **Desktop/UX Reliability** | CoPaw (#6473, #6460), LobsterAI (#2395, #1237), Hermes (#71226, #31403), PicoClaw (#3281) | Plugin bundling, history hygiene, rendering perf, IME support, installer robustness, statusbar contrast |

---

## 5. Differentiation Analysis

| Project | Primary Differentiator | Target User | Architectural Opinion |
|---------|------------------------|-------------|----------------------|
| **OpenClaw** | **Enterprise gateway scale** — multi-tenant session mgmt, live registry skills, audit-grade security | Platform operators, SaaS builders | Centralized gateway owns session state; agents are ephemeral workers |
| **IronClaw** | **Reborn architecture** — hermetic testing, failure vocabulary, manifest-driven extensions, IronHub marketplace | Developers wanting extensible, testable runtime | Decoupled crates (`ironclaw_common`, `ironclaw_skills`); DB as lifecycle authority |
| **ZeroClaw** | **SOP daemon + PostgreSQL** — long-running workflows, cancellation control, governance (FND-003) | Automation engineers, ops teams | Persistent SOPs as first-class; CLI/cron/web unified via runtime |
| **Hermes Agent** | **Desktop-first + profile isolation** — Windows/macOS/Linux parity, bundled skills, SSH/WeCom channels | Power users, multi-environment developers | Profile-per-subprocess; lazy skill loading (RFC); TUI/IME investment |
| **NanoBot** | **Embeddable agent runtime** — Extension SDK, Host Integration, Skills Marketplace, LINE channel | App builders embedding agents | Agent as library; WebUI as optional frontend; ACP-ready |
| **CoPaw** | **Desktop automation + browser SDK** — native GUI automation, Chrome extension, AG-UI protocol, Mission Mode | End-users automating desktop/web workflows | Visual context compression; workspace checkpoints; third-party agent bridging |
| **LobsterAI** | **Artifact-centric UX** — share/deploy toolbar, site deployment, Windows installer, email skill security | Content creators, Windows-first teams | Artifacts as deployable units; Electron shell; accelerator pipeline |
| **PicoClaw** | **Lightweight self-host** — systemd-aware launcher, MCP resilience, i18n, model fallback chains | Homelab/VM operators, JP/CN users | Launcher manages gateway; WebUI optional; config-driven fallbacks |
| **NanoClaw** | **Channel diversity + CLAUDE.md composition** — Signal/Dial/WhatsApp, group-scoped instructions, approval UX | Multi-platform chat operators | Per-channel adapters; settings sources hierarchy; approval audit trail |
| **Moltis** | **ACP-native + PWA** — stdio ACP agent, push notifications, operator-gated tools, red

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-28

## 1. Today's Overview
NanoBot experienced an extraordinary maintenance day with **63 issues closed** and **20 PRs merged/closed** in the last 24 hours, alongside 14 new/open PRs. This signals a coordinated "spring cleaning" sprint—likely a milestone push to clear technical debt before a release. The project shows high velocity: core maintainers (chengyongru, hamb1y, ATECHPCS, Re-bin) are actively refactoring runtime scaffolding, hardening the WebUI, adding channel integrations (LINE), and fixing long-standing bugs in session consolidation, gitstore, and cron handling. No new release was cut today, but the volume of `priority: p1` PRs suggests one is imminent.

## 2. Releases
**No new releases published today.** The latest activity is all pre-release preparation.

## 3. Project Progress — Merged/Closed PRs (Key Advances)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5124](https://github.com/HKUDS/nanobot/pull/5124) | **fix, regression, p1** | `gitstore`: return real git object IDs (fixes double-hex encoding breaking memory IDs) | **Critical** — resolves memory/session corruption |
| [#5114](https://github.com/HKUDS/nanobot/pull/5114) | **fix, p1** | `memory`: preserve Dream input integrity; allow Dream to write canonical memory files | **High** — fixes Dream agent memory drift |
| [#5113](https://github.com/HKUDS/nanobot/pull/5113) | **fix, p1** | `webui`: stabilize repeated model preset rows (unique React keys) | **High** — eliminates UI duplication bugs |
| [#5121](https://github.com/HKUDS/nanobot/pull/5121) | **fix, p1** | `webui`: prevent composer resize scroll jitter | **Medium** — improves WebUX |
| [#5119](https://github.com/HKUDS/nanobot/pull/5119) | **fix** | `webui`: soften model selector emphasis (typography tokens) | **Low** — polish |
| [#5123](https://github.com/HKUDS/nanobot/pull/5123) | **docs, p2** | Improve README landing page (clear H1, star CTA, concrete use cases) | **Low** — onboarding |

**Net effect**: Memory layer stabilized, WebUI polished, documentation modernized.

## 4. Community Hot Topics — Most Discussed Issues (All Closed Today)

| Issue | Comments | Core Need | Status |
|-------|----------|-----------|--------|
| [#1991](https://github.com/HKUDS/nanobot/issues/1991) | 9 | **Multiple custom model profiles** — users want to switch between `custom1`, `custom2` etc. without reconfiguring | Closed (likely superseded by preset system) |
| [#3123](https://github.com/HKUDS/nanobot/issues/3123) | 8 | **Cron messages sent in cron session** — users can't reply/refer to proactive messages | Closed (architectural limitation acknowledged) |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | 7 | **Ollama local config 404 / port 18790 not listening** — recurring local model setup pain | Closed (workaround documented in [#1590](https://github.com/HKUDS/nanobot/issues/1590)) |
| [#2329](https://github.com/HKUDS/nanobot/issues/2329) | 6 | **Custom provider works on CLI but breaks Feishu channel** — channel-specific provider resolution | Closed |
| [#1174](https://github.com/HKUDS/nanobot/issues/1174) | 5 (👍2) | **Memory consolidation hangs/fails on local models** — blocks new sessions | Closed (mitigation: allow session start without consolidation) |
| [#4792](https://github.com/HKUDS/nanobot/issues/4792) | 3 | **`/stop` discards pending queue messages permanently** — message loss on shutdown | Closed (fix likely in runtime refactor) |
| [#3559](https://github.com/HKUDS/nanobot/issues/3559) | 3 | **WebSocket can't replace webhooks for proactive multi-tenant delivery** | Closed (architecture decision: webhooks still required) |

**Pattern**: Users struggle with **multi-profile model management**, **channel-specific provider config**, **local model onboarding (Ollama/LM Studio)**, and **proactive messaging semantics**. Many issues closed without code fixes—suggesting maintainers are redirecting to existing features (presets, skills, config) or documenting workarounds.

## 5. Bugs & Stability — Today's Risk Items

| Severity | Issue / PR | Description | Fix PR |
|----------|------------|-------------|--------|
| **Critical** | [#5124](https://github.com/HKUDS/nanobot/pull/5124) (merged) | `GitStore` double-hex encodes object IDs → memory corruption | ✅ Merged |
| **High** | [#4805](https://github.com/HKUDS/nanobot/issues/4805) | `suppress(Exception)` in `prepare_call` swallows tool validation errors silently | ❌ Open (no fix PR yet) |
| **High** | [#5120](https://github.com/HKUDS/nanobot/pull/5120) (open) | Session consolidation drops uploaded media paths stored only in `media[]` field | 🔄 Open PR |
| **Medium** | [#4792](https://github.com/HKUDS/nanobot/issues/4792) | `/stop` drains pending queue without re-publishing → permanent message loss | ✅ Closed (refactor likely addressed) |
| **Medium** | [#3166](https://github.com/HKUDS/nanobot/issues/3166) | Feishu channel doesn't show progress notifications despite `send_progress: true` | ✅ Closed |
| **Medium** | [#1948](https://github.com/HKUDS/nanobot/issues/1948) | `exec` tool fails writing to `/tmp` for npx/npm (read-only FS error) | ✅ Closed |

**Watchlist**: `#4805` (silent tool failures) and `#5120` (media loss) are open, unpatched, and affect reliability.

## 6. Feature Requests & Roadmap Signals

| Signal | Evidence | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Unified Extension Platform** | [#5098](https://github.com/HKUDS/nanobot/pull/5098) (open, p1) — native Python extensions bridging skills/Apps/MCP gaps | **High** — core maintainer authored, extensive design |
| **LINE Messaging API Channel** | [#5115](https://github.com/HKUDS/nanobot/pull/5115) (open, p1) — full webhook + HMAC implementation | **High** — complete, tested, high-demand region (JP/TW/TH/ID) |
| **Host Integration SDK** | [#5111](https://github.com/HKUDS/nanobot/pull/5111) (open) — per-turn context providers, `SessionTurnPersisted` event | **High** — enables embedding nanobot in host apps |
| **Dream Runs in WebUI** | [#5112](https://github.com/HKUDS/nanobot/pull/5112) (open, conflict) — read-only replay of Dream sessions | **Medium** — conflicts need resolution |
| **Agent Readiness `status` Command** | [#5110](https://github.com/HKUDS/nanobot/pull/5110) (open) — offline env/model/provider validation | **High** — improves deployability |
| **Skills.sh Marketplace in WebUI** | [#5116](https://github.com/HKUDS/nanobot/pull/5116) (open, p1) — discover/install skills from UI | **High** — UX priority |
| **Composer Model Preset Switching** | [#5077](https://github.com/HKUDS/nanobot/pull/5077) (closed) — long-press drag to cycle presets | **Done** — merged |

**Prediction**: Next release will ship **Extension SDK**, **LINE channel**, **Skills Marketplace UI**, and **Agent Readiness CLI**—positioning NanoBot as an embeddable agent runtime, not just a chat bot.

## 7. User Feedback Summary — Pain Points & Use Cases

| Theme | User Voice | Frequency |
|-------|------------|-----------|
| **Local model onboarding** | "Ollama 404 / port 18790 not listening", "LM Studio 'No API key'", "vllm prefixes model name wrong" | High (multiple issues, workaround docs created) |
| **Channel × Provider mismatch** | "Custom provider works on CLI but breaks Feishu/Discord" | Medium |
| **Proactive messaging UX** | "Cron messages unreplyable", "WebSocket can't push in multi-tenant", "Message tool reports success but nothing received" | Medium |
| **Memory/session reliability** | "Consolidation hangs on local models", "Media paths lost on consolidation", "GitStore ID corruption" | High (critical fixes merged today) |
| **WebUI polish** | "Composer scroll jitter", "Model selector too bold", "Duplicate preset rows" | Low (actively fixed) |
| **Developer ergonomics** | "Remove `TYPE_CHECKING` imports if mypy not used", "Hardcoded 🐈 emoji in system prompt" | Low (addressed) |

**Satisfaction signal**: Users are filing detailed bug reports with configs/logs—indicating investment in the project. Maintainers respond fast (same-day closes), but many issues are closed as "won't fix / use preset / see docs" rather than code changes.

## 8. Backlog Watch — Stale & Critical Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#4805](https://github.com/HKUDS/nanobot/issues/4805) | 22 days | Silent tool validation failures → silent agent misbehavior | **Open, no PR** |
| [#5120](https://github.com/HKUDS/nanobot/pull/5120) | 1 day | Media loss on session consolidation | **Open PR, needs review** |
| [#5112](https://github.com/HKUDS/nanobot/pull/5112) | 1 day | Dream runs in WebUI (conflicts block merge) | **Open, conflict** |
| [#5098](https://github.com/HKUDS/nanobot/pull/5098) | 2 days | Extension platform — architectural pivot | **Open, needs design review** |
| [#4667](https://github.com/HKUDS/nanobot/pull/4667) | 26 days | Protect user skills from Dream writes (security) | **Open, conflict** |
| [#1683](https://github.com/HKUDS/nanobot/pull/1683) | 143 days | `LLM_LOGGING` env var for debug logging | **Open, conflict** — old, valuable for observability |

**Recommendation**: Prioritize `#4805` (silent failures are dangerous), resolve conflicts on `#5112`/`#4667`/`#1683`, and schedule design review for `#5098` before next release cut.

---

**Bottom line**: NanoBot is in a **high-velocity hardening phase**. Core stability bugs (gitstore, consolidation, media handling) are being fixed; the product is pivoting toward **embeddable agent runtime** via Extensions SDK, Host Integration, and WebUI marketplace. Local-model DX and channel-provider isolation remain user pain points. Next release will likely be a **major milestone (v0.2 / v1.0 candidate)** given the scope of merged refactors.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-28

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 PRs and 20 issues updated in the last 24 hours. The project is in active maintenance mode with no new release today. Key focus areas include Windows Desktop stability (boot loop regression), profile isolation for tool subprocesses, session state management fixes, and memory provider (Honcho) reliability. The 14 merged/closed PRs indicate steady integration of bug fixes and small improvements, while 36 open PRs suggest a healthy backlog of in-flight work. Several P1/P2 bugs on Windows and session-state risks dominate the risk profile.

## 2. Releases
**No new releases today.** The latest release activity appears to be v0.19.0 (referenced in issue #72981 for Managed Cloud). No breaking changes or migration notes to report.

## 3. Project Progress — Merged/Closed PRs Today (14 total)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#73054](https://github.com/NousResearch/hermes-agent/pull/73054) | UI/Refactor | Removed chrome (border/header) from markdown code blocks in replies; now renders as tinted syntax-highlighted slab | Improves message readability; reduces visual noise |
| [#64671](https://github.com/NousResearch/hermes-agent/pull/64671) | Bug Fix (dup) | Wrap `/background` ack in `EphemeralReply` to suppress duplicate file uploads | Fixes duplicate uploads on QQBot/Windows; closed as duplicate of newer PR |
| [#73061](https://github.com/NousResearch/hermes-agent/pull/73061) | Bug Fix | Resubmission of #64671 fix on current main: wrap `/background` ack in `EphemeralReply` with `ttl_seconds=0` | Same fix, rebased; addresses duplicate file upload regression |
| [#73045](https://github.com/NousResearch/hermes-agent/pull/73045) | Bug Fix | Allow `@/foo` alias to work same as `@foo` in composer (follow-up to #72889) | UX fix for muscle-memory slash prefix |
| [#73053](https://github.com/NousResearch/hermes-agent/pull/73053) | Revert | Reverted NeMo Relay observability integration (#67607) | Removes telemetry integration; likely due to compatibility/stability |
| [#73042](https://github.com/NousResearch/hermes-agent/issues/73042) | Bug Fix (Issue closed) | Context-usage statusbar item deadlock when hidden by default | Fixed via PR #72442 revert/adjustment; restores toggle functionality |
| *6 others* | Various | Additional fixes for ACP session validation, Kanban notification inheritance, Windows file probes, Bitwarden lazy import, DeepSeek message stripping, Tenki sandbox backend (still open) | See open PRs below for details |

## 4. Community Hot Topics — Most Active Issues/PRs
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#71226](https://github.com/NousResearch/hermes-agent/issues/71226) | Bug (P1) | 10 | 1 | **Windows Desktop boot loop** — WebSocket connects but client disconnects immediately, triggering renderer reset cycle. Blocks all Windows 11 users post-update. |
| [#2045](https://github.com/NousResearch/hermes-agent/issues/2045) | Feature (P3) | 3 | 3 | **Lazy skill loading** — 87 bundled skills bloat system prompt; users want on-demand tool instead of full listing at session start. |
| [#14091](https://github.com/NousResearch/hermes-agent/issues/14091) | Bug (P2) | 6 | 0 | **SSH env var passthrough** — Skill `required_environment_variables` not passed to SSH sessions despite being set in container/.env. |
| [#14061](https://github.com/NousResearch/hermes-agent/issues/14061) | Bug (P2) | 4 | 0 | **WeCom duplicate messages** — Timeout fallback sends plain-text duplicate; `_is_timeout_error()` doesn't recognize timeout string. |
| [#73051](https://github.com/NousResearch/hermes-agent/pull/73051) | PR (P2) | — | 0 | **Profile isolation for Desktop subprocesses** — Fixes tool subprocesses inheriting wrong profile env (linked to #72480). |

**Underlying themes:** Windows Desktop reliability, multi-profile isolation, prompt token efficiency, and platform-specific messaging quirks (WeCom, SSH).

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR | Notes |
|----------|-------|--------|--------|-------|
| **P1 — Critical** | [#71226](https://github.com/NousResearch/hermes-agent/issues/71226) Desktop boot loop (Windows) | Open | None yet | WebSocket connect → immediate disconnect → renderer reset loop. Blocks Windows 11 entirely. |
| **P2 — High** | [#14091](https://github.com/NousResearch/hermes-agent/issues/14091) SSH env vars not passed | Open | None | Affects skill-based SSH workflows; needs decision on implementation approach. |
| **P2 — High** | [#14061](https://github.com/NousResearch/hermes-agent/issues/14061) WeCom duplicate messages | Open | None | Timeout error string not recognized; causes double delivery. |
| **P2 — High** | [#10581](https://github.com/NousResearch/hermes-agent/issues/10581) Home-channel prompt ignores YAML config | Open | None | Only reads env var; `sethome` writes to YAML — config drift. |
| **P2 — High** | [#54648](https://github.com/NousResearch/hermes-agent/issues/54648) `hermes-agent --version` starts agent run (Windows) | Open | None | Packaged exe misbehaves; `hermes.exe` works. |
| **P2 — High** | [#66926](https://github.com/NousResearch/hermes-agent/pull/66926) Missing redaction for `AQ.` Gemini keys | Open PR | #66926 | Security: bare auth keys leak in logs/output. |
| **P2 — High** | [#70766](https://github.com/NousResearch/hermes-agent/pull/70766) Bitwarden import crashes CLI on broken `cryptography` | Open PR | #70766 | Lazy import fix; prevents total CLI failure. |
| **P2 — High** | [#70725](https://github.com/NousResearch/hermes-agent/pull/70725) `hermes update` crashes on Windows (OSError 1920) | Open PR | #70725 | File probe hits locked `pythonw.exe`; swallow OSError. |
| **P2 — High** | [#71787](https://github.com/NousResearch/hermes-agent/pull/71787) DeepSeek rejects empty-content + tool_calls messages | Open PR | #71787 | Strips problematic assistant messages pre-API-call. |
| **P3 — Medium** | [#72981](https://github.com/NousResearch/hermes-agent/issues/72981) Honcho dependency install fails (permission denied) | Open | None | Managed Cloud v0.19.0; `uv pip install` fails in provider flow. |
| **P3 — Medium** | [#66541](https://github.com/NousResearch/hermes-agent/issues/66541) Kanban workers inherit dispatcher TERMINAL_* env | Open | None | Profile boundary violation for terminal config. |
| **P3 — Medium** | [#31403](https://github.com/NousResearch/hermes-agent/issues/31403) TUI runtime_footer dark-on-dark unreadable | Open | None | Contrast issue on macOS/iTerm2. |
| **P3 — Medium** | [#39195](https://github.com/NousResearch/hermes-agent/issues/39195) TUI IME: Enter submits instead of confirming CJK candidates | Open | None | No `isComposing` check; affects all CJK users. |
| **P3 — Medium** | [#58407](https://github.com/NousResearch/hermes-agent/issues/58407) `context_length` config triggers compression every turn | Open | None | Auto-lower mechanism side effect; session performance impact. |
| **P3 — Medium** | [#73060](https://github.com/NousResearch/hermes-agent/issues/73060) `/stop` discards only queue head; FIFO overflow runs anyway | Open | None | Queue management bug; messages behind head survive and execute. |

**Critical path:** Windows Desktop boot loop (#71226) is the only P1 with no fix PR. Security redaction (#66926) and CLI crash fixes (#70766, #70725) have PRs ready.

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Priority | Likelihood for Next Version |
|---------|----------|----------|----------------------------|
| **Lazy skill loading** (on-demand tool vs. full prompt injection) | [#2045](https://github.com/NousResearch/hermes-agent/issues/2045) | P3, 3👍 | Medium — architectural change; needs design decision |
| **Tenki cloud sandbox terminal backend** (7th backend) | [#64190](https://github.com/NousResearch/hermes-agent/pull/64190) | P3 | High — PR open, adds new execution backend alongside docker/ssh/modal/etc. |
| **Per-turn waterfall tracing** (opt-in telemetry: `agent.turn_trace`) | [#65329](https://github.com/NousResearch/hermes-agent/pull/65329) | P3 | Medium — resubmitted with config.yaml activation; needs decision |
| **Remove inter-tool delay** (1s sleep between tool calls) | [#64172](https://github.com/NousResearch/hermes-agent/pull/64172) | P3 | High — no documented rationale; performance win |
| **Resolve `max_iterations` from config.yaml directly** (avoid env round-trip) | [#64298](https://github.com/NousResearch/hermes-agent/pull/64298) | P2 | High — fixes stale env var bugs; straightforward |
| **Esc key to exit overlay routes in Desktop** | [#70808](https://github.com/NousResearch/hermes-agent/pull/70808) | P3 | High — UX polish; simple binding |
| **Bound Honcho local session cache growth** | [#71463](https://github.com/NousResearch/hermes-agent/pull/71463) | P3 | High — prevents unbounded memory growth; fixes #71461 |

**Roadmap prediction:** Next version likely includes Tenki backend, inter-tool delay removal, config.yaml direct resolution, Esc binding, Honcho cache bounds, and the security/CLI crash fixes. Lazy skill loading and turn tracing need more design discussion.

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Windows Desktop unusable post-update** | #71226 (10 comments, 1👍) | Complete blocker for Windows 11 users; "stuck at error screen" |
| **SSH sessions missing skill env vars** | #14091 (6 comments) | Breaks skill-based automation; vars exist in container/.env but not passed |
| **WeCom duplicate messages on timeout** | #14061 (4 comments) | User confusion; double delivery in enterprise WeChat |
| **TUI unreadable footer (contrast)** | #31403 (1 comment, 1👍) | macOS/iTerm2 users cannot read model/token/timer info |
| **CJK IME broken in TUI** | #39195 (1 comment) | Enter key submits instead of confirming candidates; all CJK users affected |
| **Profile import WSL→Windows fails** | #51364 (1 comment) | Path translation issue; cross-platform profile portability broken |
| **`hermes-agent --version` launches agent** | #54648 (1 comment) | Windows packaged exe misbehavior; violates CLI conventions |
| **Honcho install fails on Managed Cloud** | #72981 (2 comments) | v0.19.0 Cloud users cannot install memory provider deps |
| **Context-usage statusbar toggle deadlock** | #73042 (closed, 2 comments) | Hidden-by-default item unrecoverable; fixed but indicates config fragility |

**Positive signals:** Lazy skill loading request has 3👍 — users feel prompt bloat. Esc-to-chat PR (#70808) from user issue shows responsive UX iteration.

## 8. Backlog Watch — Stale/High-Value Items Needing Attention
| Item | Age | Type | Why It Matters | Status |
|------|-----|------|----------------|--------|
| [#2045](https://github.com/NousResearch/hermes-agent/issues/2045) Lazy skill loading | ~4 months | Feature (P3) | 87 skills bloat prompt; 3👍; architectural but high leverage | Open, needs decision |
| [#14091](https://github.com/NousResearch/hermes-agent/issues/14091) SSH env var passthrough | ~3 months | Bug (P2) | Blocks skill→SSH workflows; 6 comments, needs decision | Open, needs decision |
| [#14061](https://github.com/NousResearch/hermes-agent/issues/14061) WeCom duplicate messages | ~3 months | Bug (P2) | Message delivery reliability; plain-text fallback logic flaw | Open, needs decision |
| [#10581](https://github.com/NousResearch/hermes-agent/issues/10581) Home-channel prompt ignores YAML | ~3.5 months | Bug (P2) | Config drift between env and YAML; combined with #6447 | Open, needs decision |
| [#31680](https://github.com/NousResearch/hermes-agent/issues/31680) Hindsight plugin missing concurrency warning | ~2 months | Docs (P3) | Users sharing local LLM endpoint hit OOM; `HINDSIGHT_API_LLM_MAX_CONCURRENT=32` default | Open, simple fix |
| [#38693](https://github.com/NousResearch/hermes-agent/issues/38693) Cron validation hardcodes `~/.hermes/scripts/` | ~1.5 months | Bug (P3) | Error message misleading; actual path uses `$HERMES_HOME` | Open, trivial fix |
| [#64190](https://github.com/NousResearch/hermes-agent/pull/64190) Tenki sandbox backend | ~2 weeks | Feature (P3) | New cloud execution backend; large PR, needs review | Open, 0 comments |
| [#65329](https://github.com/NousResearch/hermes-agent/pull/65329) Turn tracing telemetry | ~2 weeks | Feature (P3) | Opt-in observability; resubmitted with config policy | Open, needs decision |
| [#68891](https://github.com/NousResearch/hermes-agent/pull/68891) Narrow FTS UPDATE triggers | ~1 week | Perf (P2) | Large `state.db` compaction saturates disk; status-only updates trigger full FTS rebuild | Open, 0 comments |
| [#71463](https://github.com/NousResearch/hermes-agent/pull/71463) Bound Honcho cache growth | ~3 days | Bug (P3) | Unbounded memory growth in memory provider; fixes #71461 | Open, 0 comments |

**Maintainer action suggested:** Prioritize decisions on #2045, #14091, #14061, #10581 (all tagged `needs-decision`). Review large PRs #64190, #65329, #68891. Quick wins: #31680 (docs), #38693 (error message), #71463 (memory leak fix).

---

**Overall Health Assessment:** 🟡 **Active but risk-concentrated** — High velocity with strong PR throughput, but Windows Desktop regression (#

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-28

---

## 1. Today's Overview
PicoClaw shows **steady community-driven activity** with 5 active issues and 4 open PRs updated in the last 24 hours, but **no merged code or releases**. The backlog is dominated by **usability polish** (localization, chat lag, tool defaults) and **operational robustness** (systemd gateway integration, MCP connection resilience). No critical security or data-loss bugs surfaced today. The project is in a **maintenance & refinement phase** rather than feature-expansion mode.

---

## 2. Releases
**No new releases** in the last 24 hours. The latest published version remains **0.3.1** (per issue #3281).

---

## 3. Project Progress
**No PRs were merged or closed today.** All 4 open PRs are in review/stale state:

| PR | Title | Status | Key Scope |
|----|-------|--------|-----------|
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) | feat(webui): add Japanese (ja) localization | Open, stale | i18n: full JA translation (968 lines) + dayjs locale |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | chore(providers): update default model names to 2026-07 latest | Open, stale | Provider configs: OpenAI, Anthropic, Google, etc. |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | feat: add DashScope TTS provider and WeChat audio file sending | Open, stale | New TTS provider + WeChat channel audio support |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): add configurable default fallback chain | Open (since 2026-07-01) | Web UI + backend API for model fallback ordering |

> **Signal:** PR #3200 has been open for **27 days** without merge — the longest-running active PR. It introduces a user-facing configuration surface (default fallback chain) that likely needs design review.

---

## 4. Community Hot Topics
Ranked by **recency + engagement potential** (all have 1 comment, 0 reactions):

| Issue/PR | Core Need | Underlying Theme |
|----------|-----------|------------------|
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) | Launcher should detect/coexist with systemd-managed gateway; tolerate unknown channel types in config | **Production hardening** — headless/VM deployments need service-manager awareness |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input becomes laggy with moderate history length | **Frontend performance** — virtualization or memoization missing in message list |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server connection failure hangs agent loop → chat stops replying | **Resilience** — no timeout/fallback/circuit-breaker on MCP client |
| [#3272](https://github.com/sipeed/picoclaw/issues/3272) + [#3273](https://github.com/sipeed/picoclaw/pull/3273) | Japanese localization for WebUI/Launcher (docs already have JA) | **Internationalization** — community-contributed, ready to merge |
| [#3268](https://github.com/sipeed/picoclaw/issues/3268) | `exec` tool `action` param should default to `"run"` (required now breaks LLM calls) | **DX / LLM compatibility** — reduce schema friction for agent tool use |

---

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP connection failure → agent loop hangs indefinitely → **chat UI freezes** for user. No recovery path. | No |
| **Medium** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Chat input latency grows with history length (repro on 0.3.1). Likely O(n) re-render or lack of windowing. | No |
| **Medium** | [#3268](https://github.com/sipeed/picoclaw/issues/3268) | `exec` tool requires `action: "run"` — LLMs often omit → tool call fails. Default would fix 95%+ cases. | No |
| **Low** | [#3276](https://github.com/sipeed/picoclaw/issues/3276) | Launcher hard-fails on unknown channel types in config; assumes it owns gateway lifecycle (conflicts with systemd). | No |

> **Note:** Zero bug-fix PRs opened today. All 4 PRs are features/chores.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Release | Rationale |
|---------|--------|-----------------------------|-----------|
| **Japanese i18n** | [#3272](https://github.com/sipeed/picoclaw/issues/3272) + [#3273](https://github.com/sipeed/picoclaw/pull/3273) | **High** — PR complete, only needs review/merge | Low-risk, high-value for JP users; docs already localized |
| **DashScope TTS + WeChat audio** | [#3270](https://github.com/sipeed/picoclaw/pull/3270) | **Medium** — new provider, needs testing | Expands Chinese-market TTS & WeChat bot capabilities |
| **Configurable model fallback chain** | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | **Medium-High** — 27 days open, UI + API work done | Addresses multi-model reliability; UX design may be blocker |
| **Systemd-aware launcher** | [#3276](https://github.com/sipeed/picoclaw/issues/3276) | **Medium** — operational need, no PR yet | Critical for production VM deployments; design discussion needed |
| **MCP connection resilience** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | **High priority, unknown timeline** | Stability blocker; needs timeout/retry/circuit-breaker design |

---

## 7. User Feedback Summary
| Pain Point | Evidence | User Context |
|------------|----------|--------------|
| **Chat UI becomes unusable with history** | #3281: "very laggy when history has a little bit long" | Web UI users with multi-turn sessions |
| **Agent stops responding silently** | #3269: "chat interface to stop replying to users" on MCP failure | Anyone using MCP tools (files, browsers, etc.) |
| **LLM tool calls fail on `exec`** | #3268: "AI agent calls fail unpredictably" when `action` omitted | Agent developers / prompt engineers |
| **Launcher fights systemd** | #3276: "WebUI Start/Stop Gateway buttons spawn/kill" but gateway already managed by systemd | Self-hosters on Ubuntu VMs |
| **Missing Japanese UI** | #3272: "docs already have JA but WebUI doesn't" | Japanese-speaking users / teams |

> **Sentiment:** Frustration on **silent failures** (MCP hang, exec tool) and **performance regression** (chat lag). Positive signal: community **contributes fixes** (JA i18n PR, DashScope TTS PR).

---

## 8. Backlog Watch — Needs Maintainer Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | **27 days** | Model fallback chain is a **core reliability feature** for production (auto-failover across providers). UI + backend done. | **Review & merge** or request changes — don't let rot. |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | 8 days | **High-severity stability bug** — MCP failure = total chat freeze. No workaround. | **Triage immediately**; assign or label `bug:critical`. Consider minimal fix: add connection timeout + user-visible error. |
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) | 8 days | Blocks **systemd-based deployments** (common for headless servers). Design decision needed: launcher as manager vs. observer. | **Design discussion** — issue has 1 comment but no maintainer response. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 7 days | **Frontend perf regression** — affects all Web UI users with >~20 messages. | **Profile & fix** — likely needs `react-window` or `useMemo` on message list. |
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) | 8 days | **Complete, tested i18n PR** — only needs merge. Low risk. | **Merge** to unblock JP users; encourages further i18n contributions. |

---

### Health Indicators
| Metric | Status |
|--------|--------|
| **Issue throughput (24h)** | 5 updated / 0 closed → **backlog growing** |
| **PR throughput (24h)** | 4 updated / 0 merged → **review bottleneck** |
| **Critical bugs unfixed** | 1 (MCP hang) + 1 (chat lag) → **needs sprint focus** |
| **Community PRs ready** | 2 (JA i18n, DashScope TTS) → **low-hanging fruit** |
| **Stale PRs > 14 days** | 1 (#3200) → **process smell** |

---

*Digest generated from GitHub data as of 2026-07-28. All links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-28

---

## 1. Today's Overview
NanoClaw showed **zero issue activity** but **high pull-request velocity** on 2026-07-28: 10 PRs were updated (9 still open, 1 closed), spanning webhook configurability, Signal adapter fixes, agent engagement controls, CLAUDE.md composition, and a new Dial channel integration. No new releases were cut. The project is in active feature/bug-fix development mode with maintainers reviewing multiple concurrent PRs—indicating healthy throughput but also a growing review backlog.

---

## 2. Releases
**None** — no new versions published today.

---

## 3. Project Progress (Merged / Closed PRs)

| PR | Title | Author | Merged/Closed | Summary |
|----|-------|--------|---------------|---------|
| [#2598](https://github.com/nanocoai/nanoclaw/pull/2598) | fix: load per-group CLAUDE.local.md by adding 'local' to settingSources | jonnychesthair-crypto | **Closed** (2026-07-28) | Ensures group-scoped `CLAUDE.local.md` files are picked up during settings resolution. Originally opened 2026-05-23; closed after 66 days. |

*Only one PR closed today; the remaining nine are still under review.*

---

## 4. Community Hot Topics (Most Active PRs)

| PR | Updates (24h) | Area | Why It Matters |
|----|---------------|------|----------------|
| [#3144](https://github.com/nanocoai/nanoclaw/pull/3144) | Created & updated today | Webhook server | Adds `WEBHOOK_HOST` env var (default `0.0.0.0`) so deployments can bind to specific interfaces—critical for hardened/cloud-networked setups. |
| [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) | Updated today (core-team) | Agent engagement & wiring | Fixes context retention across turns, exposes self-serve wiring inspection, validates engagement regexes—core to agent autonomy & safety. |
| [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) | Created & updated today (core-team) | Approval UX | Preserves resolved approval card content (title, request, decision, actor) instead of dropping it—improves auditability. |
| [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) | Created & updated today | Signal adapter | Fixes broken attachment paths: images/files now forwarded via mounted inbox instead of dead `/workspace/extra/signal-attachments/` path. |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | Updated today | Channel integration (Dial) | Adds Dial to channel picker + wizard + `runChannelSkill` model—expands supported chat platforms. |

*All hot PRs are **open** and authored by core-team or frequent contributors; no external community comments/reactions recorded in the 24h window.*

---

## 5. Bugs & Stability (Reported or Fixed Today)

| Severity | PR / Issue | Description | Fix Status |
|----------|------------|-------------|------------|
| **High** | [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) | Signal image/file attachments unreachable—path not mounted in agent container. | **Fix PR open** (same day) |
| **Medium** | [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) | Resolved approval cards lost title/request details; only muted decision remained. | **Fix PR open** |
| **Medium** | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | Unknown slash commands mis-categorized as `passthrough`, causing silent response drops. | **Fix PR open** (stalled since 2026-05-08) |
| **Low** | [#2598](https://github.com/nanocoai/nanoclaw/pull/2598) | `CLAUDE.local.md` not loaded for groups. | **Closed** (fix merged/accepted) |

*No new crash reports or regressions filed today; all visible bugs already have open fix PRs.*

---

## 6. Feature Requests & Roadmap Signals

| PR | Feature | Likelihood for Next Release |
|----|---------|------------------------------|
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | **Dial channel integration** (picker, wizard, skill model) | **High** — feature-complete PR, follows guidelines, active updates. |
| [#2971](https://github.com/nanocoai/nanoclaw/pull/2971) | **ncc utility skill** (host operational/health CLI) | **Medium** — utility skill, no core changes, awaiting review. |
| [#3144](https://github.com/nanocoai/nanoclaw/pull/3144) | **Configurable webhook bind address** (`WEBHOOK_HOST`) | **High** — trivial, non-breaking, security-relevant. |
| [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) | **Agent self-serve wiring & engagement controls** | **Medium** — core-team, touches safety surface; may need more test coverage. |
| [#2685](https://github.com/nanocoai/nanoclaw/pull/2685) | **Signal docs updates** (group typing, outbound reactions, quote-reply) | **Low** — documentation-only; can ship anytime. |

*Signal adapter hardening (#3142, #2685) and Dial channel (#3050) appear to be the current release drivers.*

---

## 7. User Feedback Summary
- **No new issues or comments** in the last 24h → no direct user pain points surfaced today.
- **Implied needs** from PR activity:
  - Operators want **network-level control** over webhook exposure (`WEBHOOK_HOST`).
  - Signal users hitting **attachment failures** in containerized deployments.
  - Teams adopting **Dial** as a new chat backend.
  - Maintainers investing in **agent introspection** (wiring, engagement policies) for safer multi-agent setups.

---

## 8. Backlog Watch (Stale / Needs Maintainer Attention)

| PR | Age | Status | Why It Matters |
|----|-----|--------|----------------|
| [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) | **81 days** (opened 2026-05-08) | Open, updated today | Slash-command categorization bug silently drops responses; fix is small but unmerged. |
| [#2685](https://github.com/nanocoai/nanoclaw/pull/2685) | **54 days** (opened 2026-06-04) | Open, updated today | Signal documentation overhaul—blocks accurate user onboarding for new features. |
| [#2971](https://github.com/nanocoai/nanoclaw/pull/2971) | **21 days** (opened 2026-07-07) | Open, updated yesterday | ncc utility skill—useful ops tooling, no core risk, ready for review. |
| [#3141](https://github.com/nanocoai/nanoclaw/pull/3141) | **1 day** (opened 2026-07-27) | Open, updated today | Compose: respect `container.json` skill selection for CLAUDE.md fragments—affects multi-skill containers. |

*Recommendation: prioritize review of #2346 (user-facing bug) and #3141 (compose correctness) before they accumulate conflicts.*

---

**Overall Health**: 🟢 **Active development, low issue churn, growing PR review queue** — core team is shipping fixes and features rapidly; main risk is review latency on older PRs.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-28

---

## 1. Today's Overview
NullClaw shows **extremely low activity** over the past 24 hours. No issues were opened, updated, or closed, and no new releases were published. The only movement is a single Dependabot pull request (#956) updating the Alpine base image from 3.23 to 3.24 in the Docker images group. This PR has been open since 2026-06-15 and was last updated 2026-07-27, indicating it has not yet been reviewed or merged. Overall, the project appears **dormant or in maintenance-only mode** with no active feature development or community engagement visible in the last day.

---

## 2. Releases
**No new releases** published today or in the recent period covered by the data.

---

## 3. Project Progress
**No merged or closed PRs** in the last 24 hours. The sole open PR (#956) is a routine dependency bump (Alpine 3.23 → 3.24) with no functional changes to the codebase. No features were advanced, bugs fixed, or improvements landed today.

---

## 4. Community Hot Topics
**No active issues or PRs with community discussion.**  
- The only PR (#956) has **0 comments** and **0 reactions** (👍).  
- No issues exist in the tracker.  
→ **Underlying need**: The project lacks visible community interaction. The stale Dependabot PR suggests maintainers may not be actively monitoring automated updates, which could lead to accumulated technical debt in base images.

---

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.**  
- Issue tracker is empty.  
- No bug-fix PRs present.  
→ Stability cannot be assessed from recent data due to absence of reports.

---

## 6. Feature Requests & Roadmap Signals
**No feature requests or roadmap signals** detected.  
- Zero issues (open or closed) in the repository.  
- No discussion, RFCs, or proposals visible.  
→ **Prediction**: Without incoming feature requests or maintainer-driven roadmap artifacts, the next version (if any) will likely consist only of dependency updates and maintenance patches.

---

## 7. User Feedback Summary
**No user feedback available.**  
- No issues, discussions, or PR comments from users.  
- No pain points, use cases, or satisfaction signals captured in the last 24h or historically (per provided data).  
→ The project appears to have **no visible user community** or feedback loop on GitHub.

---

## 8. Backlog Watch
| Item | Type | Age | Status | Concern |
|------|------|-----|--------|---------|
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | PR (Dependabot) | 43 days (opened 2026-06-15) | Open, unmerged | **Stale dependency update** — Alpine 3.24 bump pending review/merge. Risk of accumulating outdated base images. No CI status shown. |

**Recommendation**: Maintainers should triage #956 — merge if CI passes, or close if the project is archived/unmaintained. If unmaintained, consider adding an `ARCHIVED` notice to README.

---

### Project Health Indicator
| Metric | Signal |
|--------|--------|
| **Activity Level** | ⚪ **Dormant** (1 bot PR in 43 days, 0 human interactions) |
| **Maintainer Responsiveness** | ⚠️ **Low** (Dependabot PR unaddressed for 6+ weeks) |
| **Community Engagement** | ⚪ **None** (0 issues, 0 comments, 0 reactions) |
| **Release Cadence** | ⚪ **None observed** |

> **Bottom line**: NullClaw shows no signs of active development or community presence. The repository may be abandoned, archived in practice, or maintained outside GitHub. Stakeholders should verify project status before relying on it.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-28

---

## 1. Today's Overview

IronClaw shipped its **first stable v1.0.0 release yesterday (2026-07-27)** — a ground-up rebuild of the agent runtime, storage, extension host, and WebUI. The new `ironclaw` binary replaces the legacy monolith (now built as `ironclaw-legacy`). Repository velocity is exceptionally high: **20 issues** and **50 PRs** updated in the last 24 hours, with **19 PRs merged/closed**. The backlog is dominated by large architectural epics (error recoverability, hermetic testing, manifest-driven extensions, pluggable memory, MCP support, IronHub integration) and a cluster of new UX/bug reports filed today. The project is in a post-release consolidation and platform-hardening phase.

---

## 2. Releases

### `ironclaw-v1.0.0` — 2026-07-27
- **First stable release of the rearchitected IronClaw** (not an increment on 0.29.x).
- **New CLI binary**: `ironclaw` (rearchitected); legacy monolith available as `ironclaw-legacy`.
- **Scope**: Agent runtime, storage, extension host, WebUI rebuilt from scratch.
- **Migration note**: Users on pre-Reborn (`src/` monolith) must migrate; tracking issue **#6725** opened today to document the path.
- **Release PR**: [#5598](https://github.com/nearai/ironclaw/pull/5598) (chore: release) — still open, updated today; publishes breaking changes in `ironclaw_common` (0.5.0) and `ironclaw_skills` (0.4.0).

---

## 3. Project Progress — Merged/Closed PRs Today (19 total)

| PR | Title | Scope | Status |
|----|-------|-------|--------|
| [#6684](https://github.com/nearai/ironclaw/pull/6684) | **refactor(reborn): one failure vocabulary** — collapse five failure-kind enums into `host_api::FailureKind` (36 variants) + fate projections; fixes 6 wrongful-terminal/mis-retry bugs with regression tests | Core error recoverability (#6284 item) | **Closed** |
| [#6692](https://github.com/nearai/ironclaw/pull/6692) | **docs: restructure docs site around shipped 1.0 binary** — removed 33 internal engineering doc paths that were publicly served (entire `reborn/contracts/` freeze set) | Documentation / Security | **Closed** |
| [#6723](https://github.com/nearai/ironclaw/pull/6723) | **sandbox: add unwired credential-firewall primitives** — `SandboxCertificateAuthority` + obligation staging for TLS termination seam | Sandbox / Security | **Closed** |
| [#6687](https://github.com/nearai/ironclaw/pull/6687) | **build(deps): bump everything-else group (33 updates)** — async-trait, thiserror, uuid, etc. | Dependencies | **Closed** |
| [#6060](https://github.com/nearai/ironclaw/issues/6060) | **Bug fix**: Routine delivery target leaks across all routines (global default → per-routine) | Automations / Delivery | **Closed** (issue) |

*Other merged PRs not individually listed in the top-20 feed include dependency bumps (tokio, wasm, serialization groups) and test infrastructure work.*

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | **Epic** | 14 💬 | **Error recoverability endgame**: Every mid-run error must survive, be visible to the model with cause + remediation, give the model a turn, and never report non-success as success. Drives PR [#6684](https://github.com/nearai/ironclaw/pull/6684) (merged) and [#6697](https://github.com/nearai/ironclaw/pull/6697) (open). |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | **Epic** | 3 💬 | **Hermetic capability/journey testing platform**: Deterministic, meaningful coverage for every supported capability and critical user journey. Drives PRs [#6738](https://github.com/nearai/ironclaw/pull/6738) (fault-state isolation), [#6728](https://github.com/nearai/ironclaw/pull/6728) (reverse-order replay). |
| [#6741](https://github.com/nearai/ironclaw/issues/6741) | **Bug** | 0 💬 (new today) | **Extension OAuth fails for Gmail/Calendar** after sign-in flow — blocks core integration on hosted instance. |
| [#6726](https://github.com/nearai/ironclaw/issues/6726) | **Bug/Design** | 0 💬 | **`register_generic_channel_outbound_targets` is a no-op** with all tests green — sole surviving mutant from audit (#6681); indicates dead code or missing test coverage. |
| [#6696](https://github.com/nearai/ironclaw/pull/6696) | **PR (XL)** | — | **Collapse lifecycle state into row-native process journal** — DB migration, makes `ironclaw_processes` the lifecycle authority. High architectural impact. |
| [#6691](https://github.com/nearai/ironclaw/pull/6691) | **PR (XL)** | — | **Refactor composition assembly** — reduces `ironclaw_reborn_composition` by **9,394 lines**, splits monoliths into focused builders. |

**Underlying theme**: The project is aggressively paying down architectural debt post-v1.0 — unifying failure semantics, making lifecycle state durable and observable, and proving test hermeticity. The OAuth regression (#6741) is the only user-visible blocker filed today.

---

## 5. Bugs & Stability — Reported Today (Ranked by Severity)

| Issue | Severity | Summary | Fix PR? |
|-------|----------|---------|---------|
| [#6741](https://github.com/nearai/ironclaw/issues/6741) | **High** | Extension OAuth connection fails for Gmail & Calendar after completing sign-in flow on hosted WebUI. Core integration broken. | None yet |
| [#6726](https://github.com/nearai/ironclaw/issues/6726) | **Medium** | `register_generic_channel_outbound_targets` can be replaced with no-op; all test tiers pass. Indicates dead code or missing coverage in channel outbound targeting. | None (audit origin: #6681) |
| [#6060](https://github.com/nearai/ironclaw/issues/6060) | **Medium → Resolved** | Routine delivery target leaked globally (setting one routine to Slack affected all routines). Closed today. | Implied fixed (issue closed) |

> **Note**: No crash/regression reports beyond the OAuth flow. The v1.0 release appears stable for core paths; the bugs are in extension/channel integrations.

---

## 6. Feature Requests & Roadmap Signals — User/Internal Requests (Last 7 Days)

| Issue | Signal | Likelihood for Next Minor |
|-------|--------|---------------------------|
| [#6727](https://github.com/nearai/ironclaw/issues/6727) | **Custom/arbitrary MCP server support** — only 2 host-bundled MCP servers today; no CLI/WebUI/extension path to add more. | **High** — explicit v1 gap, clear user demand |
| [#6731](https://github.com/nearai/ironclaw/issues/6731) | **IronHub integration** — runtime tool/skill marketplace, signed/provenance-checked. | **High** — strategic platform play |
| [#6734](https://github.com/nearai/ironclaw/issues/6734) | **Agent access to own docs** (`docs/reborn/`, `docs/extensions/`) to guide config. | **Medium** — improves self-service, low implementation risk |
| [#6725](https://github.com/nearai/ironclaw/issues/6725) | **Migration path: legacy → v1 (Reborn)** — tracking issue created today. | **High** — required for existing users |
| [#6641](https://github.com/nearai/ironclaw/issues/6641) | **Skill Self-Creation** — hot-swappable, manifest-based skill module (benchmarked on 86 tasks). | **Medium** — design doc phase, follows memory architecture (#6345) |
| [#6481](https://github.com/nearai/ironclaw/issues/6481) | **Unified Manifest-Driven Extension Platform** — V3 manifest target. | **High** — epic, drives PR [#6655](https://github.com/nearai/ironclaw/pull/6655) (open), [#6729](https://github.com/nearai/ironclaw/issues/6729) |
| [#6482](https://github.com/nearai/ironclaw/issues/6482) | **Pluggable Memory Providers** — native, mem0, custom without agent-loop changes. | **High** — PR [#6724](https://github.com/nearai/ironclaw/pull/6724) (open) rebuilds contract around declared capabilities |
| [#6483](https://github.com/nearai/ironclaw/issues/6483) | **Telegram Completeness & Production Hardening** — pairing, attachments, delivery config, WebUI coherence. | **Medium** — channel-specific, active workstream |
| [#6484](https://github.com/nearai/ironclaw/issues/6484) | **Shared Messaging Capability Layer** — provider-neutral ops (send/edit/delete/react/reply/thread). | **Medium** — reduces duplication across channel extensions |
| [#6733](https://github.com/nearai/ironclaw/issues/6733) | **Manifest-declared `/model` & `/status` commands** across Telegram, Slack, WebUI. | **Medium** — consistency win, builds on manifest platform |
| [#6743](https://github.com/nearai/ironclaw/issues/6743) | **In-app feedback/bug-report widget** — WebUI. | **Low** — UX polish, no PR yet |
| [#6742](https://github.com/nearai/ironclaw/issues/6742) | **User profile details view** in WebUI (name, email, account ID). | **Low** — UX polish, no PR yet |

**Prediction**: Next minor (v1.1) will likely ship **custom MCP support (#6727)**, **migration docs/tooling (#6725)**, **memory provider contract (#6724 → #6482)**, and **extension manifest normalization (#6655 → #6481)**. IronHub (#6731) is larger and may target v1.2.

---

## 7. User Feedback Summary — Real Pain Points (From Today's Issues)

| Pain Point | Source | Context |
|------------|--------|---------|
| **"OAuth for Gmail/Calendar fails after sign-in"** | [#6741](https://github.com/nearai/ironclaw/issues/6741) | Hosted WebUI user; blocks email/calendar tool adoption. |
| **"No way to give feedback/report bugs from inside WebUI"** | [#6743](https://github.com/nearai/ironclaw/issues/6743) | Users must leave app for Slack/GitHub; friction for early adopters. |
| **"Profile menu shows non-functional 'IronClaw' item; can't see which account (personal vs org) I'm using"** | [#6742](https://github.com/nearai/ironclaw/issues/6742) | Identity confusion in multi-account scenarios. |
| **"Routine delivery target leaked globally — setting Slack for one routine broke email summaries"** | [#6060](https://github.com/nearai/ironclaw/issues/6060) (closed) | Confirmed real-user impact; fixed today. |

**Sentiment**: Early v1.0 adopters are hitting **extension/channel

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-28

## 1. Today's Overview
LobsterAI saw **high maintenance activity** today with **9 PRs merged/closed** and **9 issues updated**, but **no new releases**. The merged PRs focus on security hardening (email attachment path traversal), agent engine stability (terminating no-progress tool loops), artifact UX (share/deploy toolbar), and a Windows installer documentation fix. Meanwhile, the issue queue surfaced **three critical Windows-specific bugs** — PowerShell 5.1 default shell causing silent command failures, accelerator corrupting `\f` byte sequences, and Chinese-path encoding breaks — plus longstanding UX gaps (unsaved settings loss, model-switching deadlock on rate limits, scheduled task agent/skill selection). The project is in a **bug-fix and hardening phase** with active Windows compatibility work.

## 2. Releases
**No new releases today.** Latest version remains unversioned in this window.

## 3. Project Progress — Merged/Closed PRs (6)

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2394](https://github.com/netease-youdao/LobsterAI/pull/2394) | docs, windows | Fix Windows install manual overwrite blocked | Resolves installer backup failure (#2395) |
| [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) | skills, security | Fix email skill: prevent attachment path traversal; sanitize filenames, enforce download dir boundaries | **Security hardening** — blocks directory traversal via malicious attachments |
| [#2388](https://github.com/netease-youdao/LobsterAI/pull/2388) | renderer, artifacts, docs | Add share/deploy toolbar to artifact preview; HTML→share, local server→deploy; analytics instrumentation | **UX enhancement** — one-click artifact publishing |
| [#2386](https://github.com/netease-youdao/LobsterAI/pull/2386) | main, openclaw, renderer | Terminate no-progress tool loops before token budget exhaustion | **Stability** — prevents runaway agent loops consuming context |
| [#2387](https://github.com/netease-youdao/LobsterAI/pull/2387) | renderer, artifacts, docs | Feat/2026.7.20 sites (artifact site deployment improvements) | Deployment pipeline polish |
| [#1323](https://github.com/netease-youdao/LobsterAI/pull/1323) | cowork | Narrow `input-too-long` error classification (was over-matching `max_tokens` messages) | Fixes false "context limit" UI for short inputs |

> **Note:** Three older Dependabot/feature PRs ([#1277](https://github.com/netease-youdao/LobsterAI/pull/1277), [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239), [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241)) remain open but were updated today (stale bot activity).

## 4. Community Hot Topics — Most Active Issues

| Issue | Comments | Core Need |
|-------|----------|-----------|
| [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) | 1 | **Installer broken** — "user skills could not be backed up" blocks updates on Windows (PR #2394 merged as fix) |
| [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) | 1 | **Settings UX** — unsaved API keys silently lost on modal close; PR [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) implements dirty-check confirmation but stale |
| [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | 1 | **Model failover deadlock** — rate-limited provider poisons *all* sessions; app won't restart; manual JSON rollback required |

**Underlying pattern:** Windows users hit **installer, shell, encoding, and provider-resilience** gaps simultaneously. The three new critical bugs (#2396, #2393, #2390) all authored by `woxinsj` today indicate a **power-user stress-testing Windows edge cases**.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| 🔴 **Critical (Data Loss)** | [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) | Accelerator rewrites `\f` (0x5C 0x66) → `\x0C` (form feed) in *any* written file — corrupts paths, JSON, scripts, Windows paths | ❌ No PR yet |
| 🔴 **Critical (Exec Broken)** | [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) | `exec` tool defaults to PowerShell 5.1 wrapper; Linux commands / inline scripts (`node -e`, `pwsh -Command`) silently fail | ❌ No PR yet |
| 🔴 **Critical (Encoding)** | [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) | `exec` hardcodes `powershell.exe` (5.1), breaks on Chinese usernames/paths; ignores installed `pwsh` (7+) | ❌ No PR yet |
| 🟠 **High (Installer)** | [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) | Update fails: "user skills could not be backed up" | ✅ **Fixed in #2394 (merged)** |
| 🟠 **High (Deadlock)** | [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | Rate-limited provider disables *all* model switching; app unstartable without manual config rollback | ❌ No PR |
| 🟡 **Medium (Timeout UX)** | [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | "Task timed out" error on 24h runs; unclear if task stopped or continues in background | ❌ No PR |
| 🟡 **Medium (Settings UX)** | [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) | Unsaved settings silently discarded on modal close | ✅ **PR #1241 open (stale)** |

> **Cluster alert:** #2390, #2393, #2396 are **same-root-cause** — Windows shell/encoding pipeline in `exec` tool and accelerator. A single refactor (configurable shell, UTF-8 enforcement, byte-pass-through) would resolve all three.

## 6. Feature Requests & Roadmap Signals

| Request | Issue/PR | Signal Strength | Likelihood Next Version |
|---------|----------|-----------------|-------------------------|
| **Skill rename** | [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) | New, 0 comments | Medium — low complexity, high user value |
| **Scheduled task: pick agent/skill** | [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) | New, 0 comments | Medium — extends automation |
| **Taskbar/Dock bounce on task complete** | [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | Stale PR, implementation ready | High — polished PR, cross-platform |
| **Settings dirty-check confirmation** | [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | Stale PR, implementation ready | High — addresses #1237 pain point |
| **Electron 40→43 upgrade** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Dependabot, stale | Medium — security/maintenance |

**Prediction:** Next patch will likely ship **Windows exec/encoding fixes** (cluster above) + **settings dirty-check** + **taskbar notification** — all have PRs or clear scope.

## 7. User Feedback Summary — Pain Points & Use Cases

| Theme | Evidence | User Impact |
|-------|----------|-------------|
| **Windows is a second-class platform** | #2390 (Chinese paths), #2396 (PS 5.1 default), #2393 (accelerator byte corruption), #2395 (installer backup) | Power users blocked; silent data corruption erodes trust |
| **Provider resilience missing** | #1240 — one rate-limited API bricks entire app; no graceful degradation | Production workflows fragile; manual JSON surgery required |
| **Long-running task opacity** | #2062 — 24h tasks timeout with ambiguous state | Automation reliability unclear; users can't debug |
| **Settings UX hostility** | #1237 — silent loss of API keys on accidental close | Credential re-entry friction; security risk if pasted keys logged |
| **Automation rigidity** | #2392 — scheduled tasks can't choose agent/skill | Limits "set-and-forget" use cases |

**Positive signals:** Users (`woxinsj`, `gouff98`) file **detailed, reproducible reports** with environment specs — indicates **invested developer community**.

## 8. Backlog Watch — Stale Items Needing Maintainer Attention

| Item | Age | Why It Matters | Recommended Action |
|------|-----|----------------|-------------------|
| [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) + [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | 119 days | Settings data loss is a **papercut affecting every user**; PR ready | **Merge #1241** — low risk, high UX value |
| [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | 119 days | Task completion notification — **differentiator for desktop agents**; PR complete | **Review & merge** — Windows/macOS tested |
| [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | 119 days | **Architectural gap** — provider failure isolation missing | **Design review** — needs circuit-breaker / per-session provider state |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 118 days | Electron 40→43 — **security patches, V8 updates** | **Schedule upgrade window** — test native modules |
| [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | 62 days | Long-task timeout UX — **core automation reliability** | **Clarify timeout behavior**; add "continue in background" option |

---

**Health Indicators**
- ✅ **Security hygiene**: Path traversal fixed same-day (#2389)
- ✅ **Agent stability**: Loop termination merged (#2386)
- ⚠️ **Windows quality**: 3 critical bugs in 24h from same reporter — suggests **regression window**
- ⚠️ **Stale backlog**: 4 high-value PRs idle >100 days — **review bandwidth bottleneck**
- 📈 **Community engagement**: Detailed bug reports = **healthy power-user base**

**Next 7-day watch:** Windows exec/encoding patch cluster, settings dirty-check merge, Electron upgrade test run.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-28

## 1. Today's Overview
Moltis shows **active development with zero merged changes** in the last 24 hours. Five pull requests remain open and were updated today, spanning memory backends, ACP protocol support, security hardening, observability infrastructure, and PWA notification reliability. No new releases, issues, or community discussions appeared. The project is in a **feature-development phase** with multiple parallel efforts nearing review readiness.

## 2. Releases
**No new releases** published today. The latest release information is not available in the provided data.

## 3. Project Progress
**No PRs were merged or closed today.** All five active PRs remain open:
- **#1158** — Experimental `zvec` + `redb` vector database memory backend (feature-gated)
- **#1169** — ACP agent implementation over stdio (new `crates/acp`), enabling Moltis to be consumed by ACP clients
- **#1170** — Security fix: `/sh` and privileged tools now gated behind per-account operator list
- **#1174** — Instrumentation & feedback collection infrastructure with pluggable backends
- **#1173** — PWA push notification reliability fix (renotify support, session tagging)

## 4. Community Hot Topics
**No community activity detected.** All PRs have `Comments: undefined` and `👍: 0`. No issues were opened or updated. The project appears to be driven by core maintainers without external contributor engagement in this window.

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | `/sh` command executable by any channel member (arbitrary host command execution) | Open | [#1170](https://github.com/moltis-org/moltis/pull/1170) |
| **Medium** | PWA notifications silently replace prior messages (missing `renotify`) | Open | [#1173](https://github.com/moltis-org/moltis/pull/1173) |

No crashes or regressions reported today.

## 6. Feature Requests & Roadmap Signals
| Feature | PR | Likelihood for Next Release |
|---------|-----|----------------------------|
| **ACP agent mode** (stdio transport) | [#1169](https://github.com/moltis-org/moltis/pull/1169) | High — completes bidirectional ACP support |
| **Pluggable observability/feedback** | [#1174](https://github.com/moltis-org/moltis/pull/1174) | High — foundational for telemetry |
| **zvec/redb memory backend** | [#1158](https://github.com/moltis-org/moltis/pull/1158) | Medium — experimental, feature-gated |
| **Operator-gated privileged tools** | [#1170](https://github.com/moltis-org/moltis/pull/1170) | High — security hardening |

**Prediction:** #1169, #1170, #1173, #1174 are likely to land together in a near-term release; #1158 may stay experimental longer.

## 7. User Feedback Summary
**No direct user feedback captured** in issues or PR discussions today. The PR descriptions reveal implicit pain points:
- **Security:** Need for granular authorization on privileged tools in multi-user environments (Discord guilds, group chats)
- **Reliability:** PWA notification loss in active conversations
- **Interoperability:** Demand to run Moltis as an ACP agent (not just client) for integration with Zed, buzz-acp, custom runners
- **Observability:** Desire for structured instrumentation and user feedback loops

## 8. Backlog Watch
| Item | Type | Age | Concern |
|------|------|-----|---------|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | PR | 11 days | Experimental memory backend; no review activity since 2026-07-17 — may need maintainer triage |
| [#1169](https://github.com/moltis-org/moltis/pull/1169) | PR | 2 days | New crate (`crates/acp`); significant surface area — requires design review |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | PR | 1 day | Cross-cutting observability infrastructure — early feedback needed on `ObservationSink` API |

**Recommendation:** Prioritize review of #1170 (security) and #1169 (protocol completeness). Schedule design discussion for #1174 before it expands further.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-28

## 1. Today's Overview
CoPaw shows **high development velocity** with 50 PRs updated in the last 24 hours (14 merged/closed) and 19 issues updated (4 closed). No new release was cut today. The PR pipeline is dominated by **foundational infrastructure work** — unified browser SDK, third-party agent integrations (Codex/Qoder), AG-UI protocol exposure, workspace checkpoints, and native desktop automation — signaling a push toward a more extensible, platform-grade agent runtime. Bug reports cluster around **plugin installation, response truncation, history hygiene, and shell-tool output limits**, indicating growing pains as the desktop surface expands.

## 2. Releases
**No new releases today.** The latest published version remains **2.0.1** (see issue #6473). The `main` branch is at commit `b0553ff` (issue #6501).

## 3. Project Progress — Merged / Closed PRs Today
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#6491](https://github.com/agentscope-ai/QwenPaw/pull/6491) | `fix(desktop): bundle PawApp SDK modules` | Desktop / Plugin Runtime | **CLOSED** — fixes App Center plugin install failure (`qwenpaw.pawapp` import) by collecting SDK modules into the PyInstaller bundle. Directly resolves issue [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473). |
| [#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462) | `docs(sandbox): clarify native Windows sandbox support` | Documentation / Sandbox | **CLOSED** — corrects outdated claim that Windows without WSL2 lacks sandbox; native AppContainer/restricted-token backends now exist. |
| [#6177](https://github.com/agentscope-ai/QwenPaw/issues/6177) | `cron final delivery mode still forwards every completed event` | Cron / Event Delivery | **CLOSED** — fix merged via [#6182](https://github.com/agentscope-ai/QwenPaw/pull/6182); follow-up migration PR [#6511](https://github.com/agentscope-ai/QwenPaw/pull/6511) opens today to convert existing `final`-mode jobs to `stream` on upgrade. |
| [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | Connection test fails for all models on AgentScope Platform | Backend / Model Registry | **CLOSED** — root cause not detailed in thread; likely config/registry sync. |
| [#6467](https://github.com/agentscope-ai/QwenPaw/issues/6467) | User question about VPN node setup | Support / Off-topic | **CLOSED** — non-bug, user confusion. |

*Plus 9 other PRs merged/closed (details not in feed); the merged batch focuses on desktop packaging, cron semantics, and docs hygiene.*

## 4. Community Hot Topics (Most Comments / Engagement)
| Item | Type | Comments | Core Signal |
|------|------|----------|-------------|
| [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | Bug | 4 | **OpenAI `max_output_tokens` ignored** — model responses silently truncated; affects cost control & output completeness. |
| [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) | Bug | 3 | **Official “Agent Kanban” plugin fails to install on Desktop 2.0.1** — `ModuleNotFoundError: qwenpaw.pawapp`. Fixed by #6491 (merged). |
| [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) | Bug | 3 | **LLM response cut off (MiniMax-M3)** — screenshot shows mid-sentence stop; likely token-limit or stream-handling bug. |
| [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457) | Bug | 3 | **History cluttered with hundreds of auto-generated conversations** in Task/Mission Mode — users can’t find real chats. |
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Bug | 3 | **Single Edge tab CPU ~100% on Wayland** when viewing large ComfyUI workflow sessions — suspected large-result-set rendering / WebSocket storm. |
| [#6514](https://github.com/agentscope-ai/QwenPaw/issues/6514) / [#6513](https://github.com/agentscope-ai/QwenPaw/issues/6513) / [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) | Feature (dup) | 1 each | **`execute_shell_command` truncates >30 KB output** — breaks log analysis, DB dumps, code scans; request auto-write-to-file or streaming read. |

*Underlying theme:* **Desktop/app-layer reliability** (plugin loading, history UX, rendering perf, tool output limits) now dominates user friction over core LLM logic.

## 5. Bugs & Stability — Today’s Reports (Severity Ranked)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Critical** | [#6505](https://github.com/agentscope-ai/QwenPaw/issues/6505) | Mission Mode spawns **unbounded sub-sessions**; only stops when LLM account balance exhausted — runaway cost/doS risk. | No |
| **Critical** | [#6506](https://github.com/agentscope-ai/QwenPaw/issues/6506) | Session `approval_level=OFF` **not inherited by `spawn_subagent` children** — workers still prompt, breaking automation. | **Yes: [#6508](https://github.com/agentscope-ai/QwenPaw/pull/6508)** (open) |
| **High** | [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | `max_output_tokens` **ignored for OpenAI-compatible models** — silent truncation. | No |
| **High** | [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) | **Response truncation** on MiniMax-M3 (possibly other providers). | No |
| **High** | [#6514/13/12](https://github.com/agentscope-ai/QwenPaw/issues/6514) | `execute_shell_command` **hard-truncates >30 KB** + occasional `Internal error`. | No |
| **Medium** | [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457) | History **polluted by Mission Mode sub-sessions** — usability regression. | Related: [#6507](https://github.com/agentscope-ai/QwenPaw/issues/6507) (feature request to group/filter) |
| **Medium** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | **High CPU on Edge/Wayland** with large session data — rendering/WS bottleneck. | No |
| **Medium** | [#6510](https://github.com/agentscope-ai/QwenPaw/issues/6510) | **Chinese paths URL-encoded** in Feishu channel → file-not-found (2.0 regression). | No |
| **Low** | [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) | Plugin install fails (fixed by #6491). | **Fixed** |
| **Low** | [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | Model connection test fails on Platform (closed, cause unclear). | **Closed** |

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Minor (2.0.x/2.1) | Rationale |
|---------|----------|----------------------------------------|-----------|
| **Multi-model per agent (parallel + aggregate)** | [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | 🟡 Medium | High user value for verification/fact-checking; requires orchestration layer. |
| **Sub-agent isolation (multi-user, per-session FS)** | [#6509](https://github.com/agentscope-ai/QwenPaw/issues/6509) | 🟢 High | Security/privacy blocker for team/multi-tenant use; aligns with workspace checkpoint work (#6269). |
| **Group/filter sub-agent sessions in history** | [#6507](https://github.com/agentscope-ai/QwenPaw/issues/6507) | 🟢 High | Direct UX fix for #6457; low implementation cost. |
| **Shell command large-output handling (file/stream)** | [#6514](https://github.com/agentscope-ai/QwenPaw/issues/6514) | 🟢 High | Recurring pain point; fits tool-call offload refactor (#6151). |
| **Built-in Atlas Cloud provider** | [#6498](https://github.com/agentscope-ai/QwenPaw/issues/6498) | 🟢 High | One-config DX; follows provider-extensibility pattern. |
| **Volcengine Agent Plan / Xiaomi MiMo providers** | [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) | 🟢 High | PR open today; regional cloud coverage. |
| **AG-UI protocol endpoint** | [#6337](https://github.com/agentscope-ai/QwenPaw/pull/6337) | 🟢 High | Under review; enables interop with AG-UI clients. |
| **Third-party agents (Codex, Qoder, Skills, MCP)** | [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) | 🟢 High | Major extensibility pillar; under review. |
| **Unified browser SDK (any backend)** | [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | 🟢 High | Foundational for browser-use agents; open since 7/20. |
| **Native desktop GUI automation (Windows/macOS)** | [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | 🟡 Medium | Ambitious; accessibility-first design; open since 7/24. |
| **Workspace checkpoint management (shadow Git)** | [#6269](https://github.com/agentscope-ai/QwenPaw/pull/6269) | 🟢 High | Recovery/versioning for agent workspaces; open since 7/20. |
| **Visual context compression (PawFocus)** | [#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456) | 🟡 Medium | Token-cost saver for long histories; open since 7/24. |
| **Per-agent token stats from turn metadata** | [#6503](https://github.com/agentscope-ai/QwenPaw/pull/6503) | 🟢 High | Observability; open today. |
| **Chrome extension pairing & native messaging** | [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) | 🟡 Medium | Depends on #6276; developer preview. |
| **QwenPaw Creator app (script→video)** | [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | 🟡 Medium | New app-type plugin; expands ecosystem. |

## 7. User Feedback Summary — Real Pain Points
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Plugin ecosystem broken on Desktop** | [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) — official plugin won’t install | Blocks app-center value prop; fixed in #6491 but signals packaging fragility. |
| **History unusable due to auto-spawned sessions** | [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457), [#6507](https://github.com/agentscope-ai/QwenPaw/issues/6507) | Users drown in noise; can’t find actual conversations. |
| **Tool output silently truncated** | [#6514](https://github.com/agentscope-ai/QwenPaw/issues/6514) (3 dup filings) | Breaks data-heavy workflows (logs, scans, reports); users forced to work around. |
| **Runaway Mission Mode costs** | [#6505](https://github.com/agentscope-ai/QwenPaw/issues/65

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-28

## 1. Today's Overview
ZeroClaw shows **high velocity with 68 total items updated** (18 issues, 50 PRs) in the last 24 hours, but **zero releases**. The project is in a heavy stabilization and refactoring phase: multiple P1/S1 bugs block workflows (auth profile loading, SOP cancellation, WhatsApp token leak, cron delivery), while CI flakiness plagues Windows and runtime test suites. Two RFCs (#9330, #9346) signal architectural decisions pending maintainer review. The v0.8.5 weekly release tracker (#9459) opened today, suggesting a cut is imminent once blockers clear.

## 2. Releases
**No new releases** published in the last 24 hours. The v0.8.5 weekly non-breaking release is tracked in [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459) (opened 2026-07-27, updated 2026-07-28). Current master reports `zeroclaw 0.8.3` per [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357).

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#9388](https://github.com/zeroclaw-labs/zeroclaw/pull/9388) | **docs(governance): retire CONTRIBUTORS.md** | Governance | Aligns maintainer roles with FND-003; removes stale file reference |
| [#9251](https://github.com/zeroclaw-labs/zeroclaw/pull/9251) | **feat(infra): PostgreSQL as first supported session backend** | Runtime/Infra | Reduces 5-backend matrix to single proven path; foundation for session persistence |
| [#9429](https://github.com/zeroclaw-labs/zeroclaw/issues/9429) | **Bug: zeroclaw-channels tests use fixed wall-clock timeouts** | CI/Tests | Closed; flake source identified for slow runners |
| [#9238](https://github.com/zeroclaw-labs/zeroclaw/issues/9238) | **Bug: config_save_isolation skips tests/ on Windows** | CI/Tests | Closed; Windows test gate was no-op |

**Net progress**: Two significant merges (PostgreSQL session backend, governance cleanup) and two CI-flake fixes closed. Core runtime/security bugs remain open.

## 4. Community Hot Topics (Most Active Items)
| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | Issue | 5 | **CI stability**: `cargo test -p zeroclaw-runtime --lib` fails 19/20 runs; flaky assertion poisons global mutex |
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | Issue | 3 | **Localization gap**: Config metadata (group headings, section labels) stays English in ZeroCode/web |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | Issue (RFC) | 2 | **AI-assisted review**: Use CI results to trigger LLM pre-review; keep human approval risk-based |
| [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) | Issue | 2 | **Security**: WhatsApp `request_approval` leaks live token on send failure/cancellation |
| [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) | Issue | 1 | **SOP UX gap**: Web dashboard shows running SOPs but no Stop/Cancel action |

**Pattern**: Contributors are surfacing **cross-cutting quality issues** (CI, i18n, security, UX) rather than feature requests. RFCs indicate maintainer bandwidth is the bottleneck.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S1 — Workflow Blocked** | [#9474](https://github.com/zeroclaw-labs/zeroclaw/issues/9474) Auth profile store fails to load (`model_provider` required, no migration) | Provider/Auth | Open | None yet |
| **S1 — Workflow Blocked** | [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425) Running SOP jobs have no operator cancellation path | Web/Gateway | In Progress | None linked |
| **P1 / High Risk** | [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417) WhatsApp `request_approval` leaks approval token | Channels/WhatsApp | Open | None yet |
| **P1 / High Risk** | [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) Runtime lib tests flake 95%; mutex poison cascades | CI/Runtime | Accepted | None yet |
| **P1 / High Risk** | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) CLI cron jobs discard output (`delivery.mode = "none"`) | Cron/Runtime | In Progress | None linked |
| **P2 / Medium** | [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) Config metadata untranslated in ZeroCode/web | Config/Gateway | Accepted | None yet |
| **P1 / Low Risk** | [#9429](https://github.com/zeroclaw-labs/zeroclaw/issues/9429) Channel tests flake on slow runners (fixed timeouts) | CI/Channels | **Closed** | — |
| **P2 / Low** | [#9238](https://github.com/zeroclaw-labs/zeroclaw/issues/9238) Windows test isolation gate no-op | CI/Tests | **Closed** | — |

**Critical cluster**: Auth (#9474), SOP control (#9425), WhatsApp security (#9417), and CI flakiness (#9357) are all **P1/S1 with no fix PRs visible** — likely blockers for v0.8.5.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for v0.8.5 |
|--------|--------|----------------------|
| **AI-assisted PR pre-review** | [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) (RFC) | Low — needs maintainer decision, high risk |
| **Unified package/capability/config catalog** | [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) (RFC) | Low — architectural, cross-cutting |
| **TodoWrite plan events in web dashboard** | [#9336](https://github.com/zeroclaw-labs/zeroclaw/issues/9336) | Medium — follow-up to #8639, accepted |
| **PowerShell as native Windows shell** | [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) (PR, XL) | Medium — needs author action, high risk |
| **Matrix single-message progress drafts** | [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) (PR, XL) | Low — stale candidate, trusted contributor |
| **SOP daemon control plane (5/5)** | [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) (Tracker) | Ongoing — 13 capabilities, multi-PR rollout |

**Prediction**: v0.8.5 will likely include **bugfixes only** (auth migration, SOP cancel, WhatsApp token, cron delivery, CI flakes). Feature PRs (#9182, #8443) are too large/risky for a weekly non-breaking cut.

## 7. User Feedback Summary
| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Auth broken after upgrade** | [#9474](https://github.com/zeroclaw-labs/zeroclaw/issues/9474): "Every `zeroclaw auth` subcommand fails outright" — no migration from `provider` → `model_provider` | All users upgrading from pre-rename releases |
| **Scheduled agent work is silent** | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340): Cron jobs run tools but discard output; run recorded as `ok` | CLI cron users |
| **No way to stop runaway SOPs** | [#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425): Web dashboard shows running jobs but no Stop/Cancel | Web dashboard operators |
| **WhatsApp approval tokens leak** | [#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417): Live token exposed on failure/cancel | WhatsApp Cloud API users |
| **Config UI half-translated** | [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363): Shell/pane titles translate, but config headings/labels don't | Non-English ZeroCode/web users |
| **CI unreliable on Windows/slow runners** | [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357), [#9429](https://github.com/zeroclaw-labs/zeroclaw/issues/9429) | Contributors, CI infrastructure |

**Sentiment**: Frustration with **upgrade breaks** (#9474) and **silent failures** (#9340, #9425). Contributors spend cycles on CI flakes instead of features.

## 8. Backlog Watch — Stalled High-Value Items
| Item | Type | Age | Why It Matters | Blocked By |
|------|------|-----|----------------|------------|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker | 24 days | **Maintainer decision queue** for RFCs/design — 0 movement since creation | Maintainer bandwidth |
| [#8858](https://github.com/zeroclaw-labs/zeroclaw/issues/8858) | Tracker | 20 days | **Drift audit** across codebase (docs, comments, snapshots) — prevents silent divergence | No owner assigned |
| [#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | Tracker | 34 days | **SOP 5/5 milestone** — 13 capabilities, daemon control plane | Multi-PR coordination |
| [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | RFC | 4 days | **AI-assisted review** — could reduce review load if approved | Maintainer review needed |
| [#9346](https://github.com/zeroclaw-labs/zeroclaw/issues/9346) | RFC | 4 days | **Unified catalog contract** — prerequisite for plugin/package ecosystem | Maintainer review needed |
| [#8784](https://github.com/zeroclaw-labs/zeroclaw/pull/8784) | PR (Refactor) | 21 days | **Split-history loop contract** — foundational for agent hooks | Author action needed |
| [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) | PR (Feat) | 8 days | **PowerShell native shell** — Windows UX parity | Author action needed |

**Systemic issue**: Two RFCs and three trackers sit in **maintainer decision queue** (#8692) with no movement. The project has **contributor capacity** (50 PRs updated) but **maintainer throughput** is the bottleneck.

---

### Health Indicators
| Metric | Signal |
|--------|--------|
| **Release cadence** | ⚠️ No release in 24h; v0.8.5 tracker just opened |
| **Critical bug backlog** | 🔴 4 P1/S1 bugs with no fix PRs |
| **CI reliability** | 🔴 Runtime lib tests 95% flake rate |
| **Maintainer responsiveness** | 🟡 RFCs/trackers stalled 4–34 days |
| **Contributor activity** | 🟢 High (50 PRs, 18 issues updated) |
| **Security posture** | 🔴 Live token leak in WhatsApp channel |

**Bottom line**: ZeroClaw is **feature-complete but stability-starved**. The next week must resolve auth migration, SOP cancellation, WhatsApp token leak, and CI flakiness before v0.8.5 can ship. Maintainer review bandwidth is the critical path.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*