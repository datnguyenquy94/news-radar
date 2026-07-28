# OpenClaw Ecosystem Digest 2026-07-28

> Issues: 143 | PRs: 500 | Projects covered: 12 | Generated: 2026-07-28 03:19 UTC

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

OpenClaw shows **extremely high velocity** with 643 total items updated in 24 hours (143 issues, 500 PRs). The 220 merged/closed PRs indicate strong maintainer throughput, while 65 open issues and 280 open PRs signal a growing backlog requiring triage. No new releases today, but the volume of P1/P2 fixes in progress (session-state, memory leaks, gateway crashes, delivery regressions) suggests a stabilization-focused cycle. The project is actively addressing cross-cutting reliability concerns: session lifecycle, memory management, message delivery guarantees, and multi-channel consistency.

---

## 2. Releases

**No new releases** published today. The latest version remains `2026.7.2-beta.4` (referenced in #113434). Given the volume of merged fixes targeting stability, a patch or beta release is likely imminent.

---

## 3. Project Progress — Merged/Closed PRs (220 today)

Key merged fixes advancing core reliability:

| PR | Area | Impact |
|----|------|--------|
| [#114865](https://github.com/openclaw/openclaw/pull/114865) | Cron, Workboard, Web UI, Gateway | Prevents cron/Workboard lifecycle regressions — card order, archived-card handling, session capture |
| [#114584](https://github.com/openclaw/openclaw/pull/114584) | Skills | Lazy snapshot cache key — avoids hashing full runtime config on every call |
| [#113062](https://github.com/openclaw/openclaw/pull/113062) | iOS | Suppresses stale delayed UI actions (Voice Wake toast, camera flash) |
| [#98548](https://github.com/openclaw/openclaw/pull/98548) | macOS | Aligns remote URL validation copy for `ws://` local targets |
| [#112069](https://github.com/openclaw/openclaw/pull/112069) | WebChat | Fixes tool outputs rendering as images at low threshold |
| [#111870](https://github.com/openclaw/openclaw/pull/111870) | Codex plugin | Fixes `TypeError: undefined 'openSyncKeyedStore'` in CLI context |
| [#84918](https://github.com/openclaw/openclaw/pull/84918) | OpenWebUI | Addresses empty image payloads via `/v1/chat/completions` |
| [#78885](https://github.com/openclaw/openclaw/pull/78885) | WebChat | Fixes duplicate message delivery from `MEDIA:` directive |

**Pattern**: Heavy focus on delivery-path correctness (WebChat, Slack, iOS, Codex), session/cron lifecycle, and plugin/runtime initialization bugs.

---

## 4. Community Hot Topics — Most Active Issues/PRs

### Top Issues by Comment Count

| Issue | Comments | 👍 | Core Need |
|-------|----------|-----|-----------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 22 | 0 | **Security architecture**: Tag memory by origin (user, web, skills) to prevent poisoning — 6 labels including `impact:security`, `clawsweeper:needs-security-review` |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) Second message fails with "reply session initialization conflicted" | 16 | 1 | **Session lifecycle**: Cross-channel, position-dependent regression blocking multi-turn conversations |
| [#74484](https://github.com/openclaw/openclaw/issues/74484) Gateway pairing scope deadlock | 13 | 2 | **Auth/CLI**: CLI lacks scope to approve/reject auto-reissued repair requests — deadlock |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) SQLite snapshot restore lacks crash/identity guarantees | 12 | 0 | **Data integrity**: Restore reports success without durable parent-dir linking |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) Session context bloat: bootstrap files re-injected every turn | 10 | 2 | **Token efficiency**: 20-30% context wasted re-injecting MEMORY.md, SOUL.md, etc. on every turn |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway heap grows to 1073MB+ at idle on macOS | 9 | 1 | **Memory leak**: Cron jobs silently fail under memory pressure; 12h repro cycle |
| [#113434](https://github.com/openclaw/openclaw/issues/113434) Codex sessions.reset reuses retired session ID; catalog scans exhaust RAM | 8 | 0 | **Codex integration**: Gateway-wide RAM exhaustion from catalog/file scans |
| [#110067](https://github.com/openclaw/openclaw/issues/110067) claude-cli: mid-turn assistant text never delivered durably | 6 | 1 | **Streaming delivery**: Block streaming not wired for CLI backends — only final `result` reaches channel |

### Top PRs by Activity (all opened/updated today)

| PR | Status | Focus |
|----|--------|-------|
| [#114890](https://github.com/openclaw/openclaw/pull/114890) | OPEN | Slack QA merge candidate for native table delivery |
| [#114557](https://github.com/openclaw/openclaw/pull/114557) | OPEN | Fix session cap enforcement deleting all removable entries |
| [#114889](https://github.com/openclaw/openclaw/pull/114889) | OPEN | Split oversized Control UI e2e suites (4.5k+ lines each) |
| [#114842](https://github.com/openclaw/openclaw/pull/114842) | OPEN | Perf: watermark-cache derived titles, single-pass list filtering |
| [#114282](https://github.com/openclaw/openclaw/pull/114282) | OPEN | GitHub Copilot: accept fine-grained PATs |
| [#82572](https://github.com/openclaw/openclaw/pull/82572) | OPEN | Persist followup queues across gateway restarts (SQLite) |
| [#114887](https://github.com/openclaw/openclaw/pull/114887) | OPEN | Google invalid keys no longer stop model fallback |
| [#114884](https://github.com/openclaw/openclaw/pull/114884) | OPEN | Code-mode: preserve concurrent tool execution safely |
| [#114882](https://github.com/openclaw/openclaw/pull/114882) | OPEN | Codex: prevent long conversations slowing on thread resume |

**Underlying needs**: 
- **Security hardening** (memory trust, auth scopes, credential handling)
- **Session durability** (persistence, recovery, crash guarantees)
- **Resource efficiency** (memory leaks, token bloat, SQLite perf)
- **Multi-channel parity** (Slack tables, WebChat media, iOS attachments, Codex streaming)

---

## 5. Bugs & Stability — Today's Critical Reports

### P1 / Crash-Loop / Data-Loss (Highest Severity)

| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#113434](https://github.com/openclaw/openclaw/issues/113434) | 🔴 Gateway RAM exhaustion → crash | No | Codex `sessions.reset` reuses retired ID; catalog scans leak memory until OOM |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | 🔴 Data-loss risk | No | SQLite snapshot restore succeeds without durable identity guards |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | 🔴 Cache permanently frozen | No | Usage-cost refresh lock unreleasable after container restart (PID reuse) |
| [#103917](https://github.com/openclaw/openclaw/issues/103917) | 🔴 Gateway crash | **Closed** | Unhandled `FsSafeError` when subagent spawns after workspace dir deleted |
| [#95750](https://github.com/openclaw/openclaw/issues/95750) | 🔴 Death-loop across reboots | **Closed** | Main-session restart-recovery has no cross-boot retry budget |
| [#89766](https://github.com/openclaw/openclaw/issues/89766) | 🔴 Lane leak → restart | **Closed** | Isolated cron lanes leak on claude-cli; `released=0` accumulates until restart |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | 🔴 Silent cron failures | No | Gateway heap 1073MB+ at idle; cron jobs starve event loop, fail silently |
| [#113323](https://github.com/openclaw/openclaw/issues/113323) | 🔴 Agent abort during reasoning | No | LLM idle timeout kills local reasoning model mid-stream |
| [#91892](https://github.com/openclaw/openclaw/issues/91892) | 🔴 Cron stalls on model calls | No | `model_call:stream_progress` never completes |
| [#89228](https://github.com/openclaw/openclaw/issues/89228) | 🔴 Regression: `exec` unavailable in isolated cron | No | Three bugs cause silent failures (was fixed in 2026.4.1) |

### P1 / Message-Loss / Session-State

| Issue | Fix PR? | Summary |
|-------|---------|---------|
| [#102020](https://github.com/openclaw/openclaw/issues/102020) | **Closed** | Second message fails "reply session initialization conflicted" (cross-channel) |
| [#90178](https://github.com/openclaw/openclaw/issues/90178) | **Closed** | Subagent announce give-up leaves parent deadlocked on `sessions_yield` |
| [#106483](https://github.com/openclaw/openclaw/issues/106483) | **Closed** | Steered group-turn replies dropped; only newest turn reaches channel |
| [#110067](https://github.com/openclaw/openclaw/issues/110067) | No | claude-cli mid-turn text never delivered — block streaming not wired |
| [#112027](https://github.com/openclaw/openclaw/issues/112027) | **Closed** | `reply_payload_sending` hook never fires for session replies (only routed) |
| [#100367](https://github.com/openclaw/openclaw/issues/100367) | **Closed** | `message_tool_only`: delivery reminder loses to recency on long tool chains |
| [#85743](https://github.com/openclaw/openclaw/issues/85743) | **Closed** | `pendingFinalDelivery` heartbeat replay loops forever (no attempt cap/TTL) |
| [#114690](https://github.com/openclaw/openclaw/issues/114690) | No | Discord reply sent again after Codex compaction in same turn |

### P2 / UX-Friction / Availability

| Issue | Fix PR? | Summary |
|-------|---------|---------|
| [#113754](https://github.com/openclaw/openclaw/issues/113754) | No | Internal runtime markers leak verbatim to all channels (Telegram, Discord, Control UI) |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) | No | Large attachments overflow stack (full data URLs + regex parsing) |
| [#10118](https://github.com/openclaw/openclaw/issues/10118) | No | TUI: No Shift+Enter for newline (Enter sends immediately) |
| [#112135](https://github.com/openclaw/openclaw/issues/112135) | **Closed** | `planTool=false` still advertises `update_plan` to model |
| [#103162](https://github.com/openclaw/openclaw/issues/103162) | **Closed** | Telegram docs document `streaming.preview.toolProgress` but schema rejects it |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood Next Version |
|-------|----------|--------|-------------------------|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | P2 | **Security architecture** — 6 labels, needs security review, product decision | 🟡 Medium (needs design) |
| [#112682](https://github.com/openclaw/openclaw/issues/112682) Config-defined reusable tool profiles | P2 | **Operator ergonomics** — avoid copying allow/deny lists | 🟢 High (clear scope, maintainer-labeled) |
| [#9764](https://github.com/openclaw/openclaw/issues/9764) Google Chat: User OAuth for reactions/media | P2 | **Channel parity** — service account limits functionality | 🟡 Medium (OAuth flow complexity) |
| [#113251](https://github.com/openclaw/openclaw/issues/113251) Image viewing in webchat file viewer | P2 | **UX polish** — screenshots attached, visible demand | 🟢 High (frontend-only) |
| [#13968](https://github.com/openclaw/openclaw/issues/13968) On-demand HEARTBEAT.md loading | P3 | **Token optimization** — 380 tokens every message vs 30min heartbeat | 🟢 High (low risk, high impact) |
| [#76159](https://github.com/openclaw/openclaw/issues/76159) Per-job `acceptSilentStop` flag | P2 | **Cron UX** — intentional no-output jobs marked error | 🟢 High (closed, likely merged) |
| [#114852](https://github.com/openclaw/openclaw/pull/114852) Rename "cron" → "automations" | P3 | **Terminology RFC** — model-facing strings still say "cron" | 🟢 High (part of RFC stack) |

**Predicted next version focus**: Session durability fixes (P1 crashes), memory leak containment, token efficiency (bootstrap lazy-load), and channel parity (Slack tables, WebChat images, Google Chat OAuth).

---

## 7. User Feedback Summary — Pain Points & Use Cases

### Real User Pain Points (from issue descriptions)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Session instability across restarts** | #95750 "death-loop across reboots", #89766 "lanes accumulate until restart", #114234 "container PID reuse freezes cache" | High (5+ issues) |
| **Silent failures** | #87109 "cron tasks **silently fail**—no output, no push, no error", #89228 "fail silently", #91892 "stall during AI model calls" | High |
| **Memory/resource leaks** | #87109 1073MB heap at idle, #113434 "RAM exhausted and Gateway crashed", #89766 "leaked lanes accumulate" | High |
| **Message delivery broken** | #102020 "second message fails", #110067 "mid-turn text never delivered", #106483 "steered replies dropped", #112027 "hook never fires" | High |
| **Token waste** | #67419 "20-30% context consumed by bootstrap files re-injected every turn", #13968 "HEARTBEAT.md loaded every message (~380 tokens)" | Medium |
| **Internal leakage to users** | #1

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Open-Source Ecosystem (2026-07-28)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape is **highly fragmented but intensely active**, with 12 tracked projects spanning enterprise-grade platforms (OpenClaw, IronClaw), research-oriented runtimes (Hermes Agent, NanoBot), niche/edge deployments (PicoClaw, NanoClaw, Moltis), and emerging multi-agent orchestration layers (CoPaw, ZeroClaw). **No dominant standard has emerged**—each project pursues distinct architectural bets: OpenClaw on session/memory durability at scale, IronClaw on hermetic extension platforms, Hermes on voice-first UX, CoPaw on agent isolation. The ecosystem is in a **post-1.0 stabilization phase** for mature projects (IronClaw v1.0.0 shipped yesterday) while newer entrants iterate rapidly on integration parity (channels, MCP, browser automation). Community engagement correlates with production deployment friction: projects with real-world channel operators (OpenClaw, NanoBot, CoPaw) surface the most acute reliability bugs.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs | Release Status | Health Score* |
|---------|--------------|-----------|-------------------|----------------|---------------|
| **OpenClaw** | 143 | 500 | 220 | Beta (2026.7.2-beta.4) | 🟢 **9/10** |
| **IronClaw** | 20 | 50 | 19 | **v1.0.0 released 2026-07-27** | 🟢 **9/10** |
| **CoPaw** | 18 | 48 | ~13 | 2.0.1 stable | 🟢 **8/10** |
| **ZeroClaw** | 10 | 50 | 2 | v0.8.4 prep (PR #9376) | 🟡 **7/10** |
| **Hermes Agent** | 29 | 50 | 8 | Pre-release | 🟡 **7/10** |
| **NanoBot** | 62 closed | 21 merged | 21 | Pre-release | 🟡 **7/10** |
| **LobsterAI** | 9 | 6 closed | 6 | Pre-release | 🟡 **6/10** |
| **NanoClaw** | 0 | 10 | 1 | Pre-release | 🟡 **6/10** |
| **PicoClaw** | 6 | 6 | 0 | v0.3.1 | 🟠 **5/10** |
| **Moltis** | 0 | 5 | 0 | Pre-release | 🟠 **5/10** |
| **NullClaw** | 0 | 1 (dependabot) | 0 | Stagnant | 🔴 **2/10** |
| **ZeptoClaw** | 0 | 0 | 0 | No activity | 🔴 **1/10** |

*Health Score: Composite of velocity, merge throughput, release cadence, bug severity, and community responsiveness (1–10 scale).

---

## 3. OpenClaw's Position

### Advantages vs. Peers
- **Scale & Throughput**: 643 items/24h dwarfs all peers (next: IronClaw 70, CoPaw 66). 220 merged PRs/day indicates **industrial-grade maintainer capacity**.
- **Reliability Depth**: Systematic attack on cross-cutting concerns—session lifecycle, memory leaks, message delivery guarantees, multi-channel consistency—unmatched in breadth.
- **Security Architecture**: Explicit memory trust tagging (#7707, 6 security labels), auth scope hardening, credential isolation—few peers treat this as P0.
- **Channel Parity**: Active fixes across Slack, WebChat, iOS, Codex, Discord, Telegram, OpenWebUI simultaneously.

### Technical Approach Differences
| Dimension | OpenClaw | IronClaw | Hermes | CoPaw | NanoBot |
|-----------|----------|----------|--------|-------|---------|
| **Core Architecture** | Monolithic gateway + plugin runtime | Microkernel + extension host (Manifest V3) | Electron desktop + gateway pool | Multi-agent isolation + third-party backends | Skill/App/MCP + Dream agent |
| **Session/State** | SQLite snapshots, cron lanes, bootstrap injection | Process journal + lifecycle DB | Gateway FIFO queues | Per-agent memory/workspace isolation | GitStore + consolidation |
| **Extensibility** | Skills, Codex plugin, MCP | Manifest-driven extensions (tools, channels, auth) | Plugins, wake-word SDK | Apps, Skills, MCP, AG-UI protocol | Skills, Apps, MCP, Extensions |
| **Delivery Model** | Multi-channel gateway (push/pull) | Capability layer (provider-neutral) | Desktop-first, CLI/TUI parity | Channel adapters + webhook | Channel adapters + cron |

### Community Size Comparison
- **OpenClaw**: Largest visible contributor base (500 PRs/24h implies dozens of active committers), enterprise adoption signals (Slack, Discord, Codex integrations).
- **IronClaw**: Smaller but highly disciplined team (epic-driven, mutation testing, hermetic CI).
- **CoPaw/NanoBot**: Active user communities deploying to production channels (QQ, Feishu, LINE, WhatsApp)—surfaces real-world integration bugs.
- **Others**: Single-maintainer or low-engagement (PicoClaw, Moltis, NullClaw, ZeptoClaw).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session Durability & Recovery** | OpenClaw (#102020, #113306), IronClaw (#6696), Hermes (#73060), ZeroClaw (#9320), CoPaw (#6505) | Crash-safe snapshot/restore, cross-boot retry budgets, queue persistence, sub-agent session grouping |
| **Memory/Token Efficiency** | OpenClaw (#67419, #13968), NanoBot (#1174), CoPaw (#6456), Moltis (#1158) | Lazy bootstrap loading (HEARTBEAT.md), vector backends (zvec/redb), visual context compression, consolidation reliability |
| **Multi-Channel Parity** | OpenClaw (Slack tables, WebChat media, iOS, Codex), NanoBot (LINE, Feishu, Discord, WhatsApp), IronClaw (Telegram, Shared Messaging Layer), CoPaw (Feishu, QQ), LobsterAI (Windows installer) | Attachment handling, streaming delivery, OAuth vs service account, proactive push architecture |
| **Agent Isolation & Multi-Tenancy** | CoPaw (#6461, #6509), OpenClaw (#7707 memory trust), IronClaw (#6481 manifest platform), ZeroClaw (#9319 ScopedToolRegistry) | Per-agent memory/workspace/tools, privilege gating (/sh), skill sandboxing, cross-agent leakage prevention |
| **Observability & Debugging** | IronClaw (#8966 provider identity), Moltis (#1174 instrumentation), ZeroClaw (#8966), Hermes (#73031 watchdog) | Usage event attribution, structured tracing, session watchdogs, feedback collection pipelines |
| **Local Model Onboarding** | NanoBot (#2570, #1947, #1174), PicoClaw (implied), LobsterAI (#1240) | Ollama/LM Studio config gaps, gateway port discovery, consolidation with local LLMs |
| **Desktop/Client Stability** | Hermes (#73077, #73083, #73082), LobsterAI (#2395, #2396), CoPaw (#6491), PicoClaw (#3281) | Startup crashes (macOS/Windows), CPU spin, shell execution defaults, input lag, installer backup logic |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architectural Signature |
|---------|---------------|--------------|-------------------------|
| **OpenClaw** | **Production-grade gateway** — reliability at scale across channels | Enterprises, power users running multi-channel bots | Centralized gateway + plugin runtime; session/cron as first-class; SQLite durability |
| **IronClaw** | **Hermetic extension platform** — manifest-driven, testable, auditable | Platform builders, security-sensitive deployments | Microkernel + capability layer; process journal; mutation-tested failure vocabulary |
| **Hermes Agent** | **Voice-first desktop UX** — local wake words, cross-surface continuity | Developers wanting hands-free, privacy-preserving assistant | Electron + gateway pool; on-device audio pipeline; CLI/TUI/Desktop parity |
| **CoPaw** | **Multi-agent orchestration** — isolation, third-party backends, browser automation | Teams deploying agent swarms (QQ, enterprise), researchers | Per-agent sandbox; Codex/Qoder/MCP backends; unified browser SDK; AG-UI protocol |
| **NanoBot** | **Channel-rich personal agent** — Dream autonomy, skills marketplace | Individual power users, channel operators (Feishu, LINE, Discord) | GitStore memory; Dream agent; Skills.sh marketplace; ACP client + agent |
| **ZeroClaw** | **Rust microkernel + weekly cadence** — operational hardening | Rust enthusiasts, CLI-first operators | Workspace crates; SOP jobs; scoped tool registry; cargo-installable |
| **LobsterAI** | **Windows-native desktop app** — artifact sharing, installer UX | Windows users, non-technical knowledge workers | Electron + accelerator; Artifact publish/deploy; Windows sandbox |
| **PicoClaw** | **Lightweight embedded/edge** — systemd coexistence, i18n | Raspberry Pi, edge devices, Japanese users | Launcher + gateway; minimal deps; WebUI i18n |
| **Moltis** | **ACP-native interoperable runtime** — protocol-first | ACP ecosystem participants (Zed, buzz-acp) | ACP agent/server; pluggable memory; PWA; operator-gated tools |
| **NanoClaw** | **Secure webhook/Signal integration** — operator self-serve | Signal/Telegram power users, privacy-focused | Configurable bind addresses; engagement policy introspection; mounted inbox |
| **NullClaw / ZeptoClaw** | Dormant / experimental | — | — |

---

## 6. Community Momentum & Maturity

### **Tier 1: Industrial Velocity & Maturing (Weekly/Monthly Releases)**
- **OpenClaw** — Highest throughput; stabilization cycle imminent (beta.4 → patch)
- **IronClaw** — **v1.0.0 shipped**; epic-driven post-launch hardening (reliability, extension platform, WebUI UX)
- **ZeroClaw** — Weekly non-breaking cadence established (v0.8.4 this week, v0.8.5 tracked)

### **Tier 2: Rapid Feature Iteration (Pre-1.0, High PR Velocity)**
- **CoPaw** — 48 PRs/24h; third-party backends, native automation, isolation in review
- **Hermes Agent** — Voice UX + desktop regressions; wake-word PR (#70509) near-land
- **NanoBot** — Bug-bash phase; 62 issues closed, LINE channel + Skills.sh marketplace ready

### **Tier 3: Steady Maintenance / Niche Focus**
- **LobsterAI** — Windows installer/artifact UX; data-corruption bug (#2393) critical
- **NanoClaw** — Webhook/Signal hardening; core-team driven
- **PicoClaw** — Review bottleneck (6 PRs, 0 merged); critical bugs untriaged
- **Moltis** — 5 maintainer PRs, 0 reviews; ACP agent + security + observability stack

### **Tier 4: Stalled / Dormant**
- **NullClaw** — Dependabot only (43 days)
- **ZeptoClaw** — Zero activity

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Implication |
|-------|--------------------------|----------------------|
| **Session/State Durability is the #1 Reliability Blockers** | OpenClaw (5+ P1 session bugs), IronClaw (process journal), Hermes (queue semantics), ZeroClaw (SOP cancellation), CoPaw (sub-agent grouping) | **Invest in crash-safe checkpointing, cross-boot recovery, and queue persistence** — users equate session loss with product failure. |
| **Multi-Agent Isolation > Single-Agent Performance** | CoPaw (complete isolation #6461), OpenClaw (memory trust #7707), IronClaw (ScopedToolRegistry #9319), ZeroClaw (engine tool registry) | **Architect for tenancy from day one**: per-agent memory, tools, workspace, approval policies. Single-agent assumptions leak in production. |
| **Channel Parity Requires Protocol Abstraction, Not Adapters** | IronClaw (Shared Messaging Capability Layer #6484), NanoBot (WebSocket vs webhook #3559), OpenClaw (gateway delivery paths), CoPaw (AG-UI #6337) | **Build a provider-neutral messaging capability layer** (send/edit/delete/react/thread) — adapter-per-channel doesn't scale. |
| **Local Model Onboarding Remains a Chasm** | NanoBot (Ollama 404, gateway port), LobsterAI (model lock-in), PicoClaw (implied) | **Auto-discovery + zero-config local model integration** is a competitive differentiator; most projects treat it as afterthought. |
| **Desktop Client Quality Gates Are Weak** | Hermes (5/7 new bugs = desktop regressions), LobsterAI (installer, shell, encoding), CoPaw (plugin SDK bundling) | **Electron/Tauri apps need dedicated CI: startup perf, GPU/CPU idle, installer upgrade paths, shell execution matrices.** |
| **Observability Shifting from Logs → Structured Event Streams** | IronClaw (provider identity #8966), Moltis (instrumentation #1174), ZeroClaw (usage events), Hermes (watchdog #73031) | **Emit structured spans/metrics per turn/tool/provider** — enables eval pipelines, cost attribution, and automated regression detection. |
| **Extension Platforms Converging on Manifest-Driven + Capability Declarations** | IronClaw (Manifest V3 #6481), OpenClaw (skills/Codex), NanoBot (Extensions #5098), CoPaw (Apps/Skills/MCP), Moltis (ACP) | **Standardize on declarative manifests declaring: tools, channels, auth, ingress, delivery, runtime** — avoids plugin boundaries — enables marketplace, sandboxing, audit. |
| **Security Hardening Moving Up the Stack** | OpenClaw (memory trust, auth scopes), Moltis (operator-gated /sh #1170), IronClaw (credential firewall #6723), ZeroClaw (vi_verify removal #9472) | **Default-deny for host execution, credential isolation per agent, supply-chain verification** — no longer optional for multi-user deployments. |

---

## Summary for Decision-Makers

- **OpenClaw** sets the pace for **production reliability at scale** — reference implementation for session durability, multi-channel delivery, and security architecture.
- **IronClaw v1.0.0** demonstrates **microkernel + capability layer** as a viable path for auditable, testable agent platforms.
- **CoPaw** leads on **

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-07-28

## 1. Today's Overview
NanoBot shows **intense maintenance and stabilization activity** with 62 issues closed and 21 PRs merged/closed in the last 24 hours, while only 1 issue and 13 PRs remain open. No new release was published. The velocity suggests a focused sprint to clear technical debt, fix regressions, and harden core subsystems (memory, git store, session consolidation, channel integrations) ahead of a likely upcoming release. The project is in a healthy "bug-bash" phase with maintainers actively resolving long-standing pain points across CLI, WebUI, channels, and the agent runtime.

## 2. Releases
**No new releases today.** The last release data is not provided in the 24h window. Given the volume of merged fixes (especially P1 regressions in gitstore, session consolidation, and Dream memory), a patch or minor release is probable in the near term.

## 3. Project Progress — Key Merged/Closed PRs (Last 24h)

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5127](https://github.com/HKUDS/nanobot/pull/5127) | Refactor (P1) | Remove redundant runtime scaffolding: simplify prompt construction, explicit task tracking, remove no-op microcompaction, avoid provider preset re-resolution | Core runtime cleanup; reduces complexity and potential bugs |
| [#5124](https://github.com/HKUDS/nanobot/pull/5124) | Regression Fix (P1) | **Critical**: `GitStore` was double-encoding git object IDs (hex-of-hex), breaking memory persistence | Fixes memory/history corruption; high severity |
| [#5114](https://github.com/HKUDS/nanobot/pull/5114) | Fix (P1) | Preserve Dream input integrity; allow Dream `write_file` to update canonical memory files (`SOUL.md`, `USER.md`, `MEMORY.md`) | Stabilizes Dream agent memory writes |
| [#5120](https://github.com/HKUDS/nanobot/pull/5120) | Fix (P1) | Session consolidation no longer drops uploaded media paths carried only in `media[]` field | Fixes data loss for file attachments during compaction |
| [#5113](https://github.com/HKUDS/nanobot/pull/5113) | Fix (P1) | Stabilize repeated model preset rows in WebUI (unique React keys) | UI reliability for model switching |
| [#5121](https://github.com/HKUDS/nanobot/pull/5121) | Fix (P1) | Prevent composer resize scroll jitter in WebUI | UX polish |
| [#5119](https://github.com/HKUDS/nanobot/pull/5119) | Fix | Soften model selector emphasis (typography tokens) | UI consistency |
| [#5123](https://github.com/HKUDS/nanobot/pull/5123) | Docs (P2) | Improve README landing page: clear H1, star CTA, concrete use cases, actionable contribution paths | Onboarding & contributor experience |

**Open PRs of Note** (13 open):
- [#5111](https://github.com/HKUDS/nanobot/pull/5111) **feat(sdk)**: Host integration extension points — exposes per-turn runtime context providers, typed `SessionTurnPersisted` event
- [#5110](https://github.com/HKUDS/nanobot/pull/5110) **feat(config)**: `nanobot status` now includes offline Agent-readiness check (env refs, model resolution, provider construction)
- [#5122](https://github.com/HKUDS/nanobot/pull/5122) **fix(agent)**: Read document attachments on demand (PDF, DOCX, XLSX, PPTX) — lazy parsing
- [#5112](https://github.com/HKUDS/nanobot/pull/5112) **feat(webui)**: Expose Dream runs as read-only sessions with full replay
- [#5116](https://github.com/HKUDS/nanobot/pull/5116) **feat(webui)**: Skills.sh marketplace & skill management (Discover view, install history, CLI-backed installs)
- [#5115](https://github.com/HKUDS/nanobot/pull/5115) **feat(channels)**: **LINE Messaging API channel** (webhook, HMAC-SHA256, allowFrom, proactive push)
- [#5098](https://github.com/HKUDS/nanobot/pull/5098) **feat(extensions)**: Unified extension platform — native Python boundary for capabilities beyond skills/Apps/MCP
- [#4667](https://github.com/HKUDS/nanobot/pull/4667) **fix(security)**: Protect user skills from Dream writes (requires `dream_managed: true` frontmatter)

## 4. Community Hot Topics — Most Active Issues (by comments)

| Issue | Comments | Summary | Underlying Need |
|-------|----------|---------|-----------------|
| [#1991](https://github.com/HKUDS/nanobot/issues/1991) | 9 | **Multiple custom model providers** — user wants `custom2`, `custom3` to switch models freely | Multi-provider workflow; avoid config churn |
| [#3123](https://github.com/HKUDS/nanobot/issues/3123) | 8 | Cron/scheduled tasks send via cron session → users can't reply/ask corrections about sent content | **Cross-session continuity** for proactive messages |
| [#2570](https://github.com/HKUDS/nanobot/issues/2570) | 7 | Local Ollama 404 / gateway not listening on 18790 | **Local model onboarding friction**; config/docs gap |
| [#2329](https://github.com/HKUDS/nanobot/issues/2329) | 6 | Custom provider works on CLI but breaks on Feishu channel (401 invalid_model) | **Channel-provider parity**; consistent auth routing |
| [#1174](https://github.com/HKUDS/nanobot/issues/1174) | 5 (👍2) | Memory consolidation hangs/fails with local models; blocks new sessions | **Reliability of memory pipeline** for local LLMs |
| [#4792](https://github.com/HKUDS/nanobot/issues/4792) | 3 | `/stop` silently discards pending queue messages — permanent loss | **Message durability** during shutdown |
| [#3559](https://github.com/HKUDS/nanobot/issues/3559) | 3 | WebSocket channel cannot replace webhooks for proactive delivery in multi-tenant | **Proactive push architecture** for channels |
| [#3074](https://github.com/HKUDS/nanobot/issues/3074) | 3 | Message tool reports success but nothing received cross-channel | **Inter-channel messaging reliability** |

**Pattern**: Users struggle with **multi-provider/config flexibility**, **channel parity**, **memory reliability with local models**, and **cross-session/message durability** — all architectural concerns for production deployments.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#5124](https://github.com/HKUDS/nanobot/pull/5124) (merged) | GitStore double-encodes object IDs → memory corruption | ✅ Merged |
| **Critical** | [#4792](https://github.com/HKUDS/nanobot/issues/4792) | `/stop` drains pending queue without re-publishing → message loss | ❌ Open |
| **High** | [#5120](https://github.com/HKUDS/nanobot/pull/5120) (open) | Session consolidation drops media paths only in `media[]` | 🟡 PR Open |
| **High** | [#4805](https://github.com/HKUDS/nanobot/issues/4805) | `suppress(Exception)` in `prepare_call` swallows tool validation errors | ❌ Open |
| **High** | [#2549](https://github.com/HKUDS/nanobot/issues/2549) | Regression: `_sent_in_turn` overwritten cross-channel → final response discarded | ❌ Closed (no fix linked) |
| **Medium** | [#3166](https://github.com/HKUDS/nanobot/issues/3166) | Feishu channel no progress notifications despite `send_progress: true` | ❌ Closed (no fix linked) |
| **Medium** | [#2373](https://github.com/HKUDS/nanobot/issues/2373) | MiniMax API: invalid function arguments JSON string | ❌ Closed (no fix linked) |
| **Medium** | [#1487](https://github.com/HKUDS/nanobot/issues/1487) | Qwen/Dashscope: `function.arguments` must be JSON format | ❌ Closed (no fix linked) |
| **Medium** | [#1401](https://github.com/HKUDS/nanobot/issues/1401) | `TypeError: type 'Choice' is not subscriptable` on startup | ❌ Closed (no fix linked) |
| **Low** | [#2747](https://github.com/HKUDS/nanobot/issues/2747) | Hardcoded 🐈 emoji in system prompt — wants config option | ❌ Closed (no fix linked) |

**Note**: 62 issues closed today — many appear to be stale/duplicate cleanup. The critical GitStore fix (#5124) is merged; the message-loss bug (#4792) and silent-error-swallow (#4805) remain open and high-risk.

## 6. Feature Requests & Roadmap Signals

| Feature Request | Issue/PR | Signal Strength | Likelihood Next Version |
|-----------------|----------|-----------------|-------------------------|
| **Multiple custom model providers** | [#1991](https://github.com/HKUDS/nanobot/issues/1991) (9 comments) | High — recurring ask | Medium (architectural) |
| **Cross-session message continuity for cron/proactive** | [#3123](https://github.com/HKUDS/nanobot/issues/3123), [#3559](https://github.com/HKUDS/nanobot/issues/3559) | High — multi-tenant blocker | High (PR #5111 SDK hooks enable this) |
| **LINE Messaging API channel** | [#5115](https://github.com/HKUDS/nanobot/pull/5115) (open PR) | Medium — new channel | High (PR ready, tests included) |
| **Skills.sh marketplace in WebUI** | [#5116](https://github.com/HKUDS/nanobot/pull/5116) (open PR) | Medium — ecosystem growth | High (PR ready) |
| **Unified extension platform (native Python)** | [#5098](https://github.com/HKUDS/nanobot/pull/5098) (open PR) | High — strategic | Medium (foundational, needs review) |
| **Dream runs as read-only WebUI sessions** | [#5112](https://github.com/HKUDS/nanobot/pull/5112) (open PR) | Medium — UX polish | High (PR ready) |
| **Agent-readiness `nanobot status` check** | [#5110](https://github.com/HKUDS/nanobot/pull/5110) (open PR) | Medium — ops/tooling | High (PR ready) |
| **Lazy document attachment parsing** | [#5122](https://github.com/HKUDS/nanobot/pull/5122) (open PR) | Medium — perf/memory | High (PR ready) |
| **Configurable/removable 🐈 emoji** | [#2747](https://github.com/HKUDS/nanobot/issues/2747) | Low — cosmetic | Low |
| **Optional memory/tool registration** | [#1881](https://github.com/HKUDS/nanobot/issues/1881) | Medium — local model users | Medium |

**Predictions for next version**: LINE channel, Skills.sh marketplace, Dream session replay, `nanobot status` readiness check, lazy attachment parsing, and SDK host-integration hooks are all in review-ready PRs. Multi-custom-provider and cross-session continuity are deeper architectural items likely for a minor version.

## 7. User Feedback Summary — Pain Points & Use Cases

| Theme | Representative Voices | Sentiment |
|-------|----------------------|-----------|
| **Local model onboarding** | #2570 (Ollama 404, gateway port), #1947 (API key confusion), #1590 (3-step Ollama fix), #1478 (LM Studio "No API key") | 😡 Frustrated — docs/config gaps |
| **Channel parity & reliability** | #2329 (custom provider works CLI not Feishu), #3166 (Feishu no progress), #1672 (WhatsApp self-message), #1315 (Discord slash commands) | 😕 Inconsistent — "works here not there" |
| **Memory & consolidation** | #1174 (local model consolidation fails, blocks sessions), #2358 (workspace switch doesn't stop old CRONs) | 😰 Anxious — data loss risk |
| **Proactive/cross-channel messaging** | #3123 (cron session isolation), #3074 (message tool silent fail), #3559 (WebSocket vs webhook), #4792 (stop loses queue) | 😤 Blocked — production use cases broken |
| **Developer experience** | #2091 (dead TYPE_CHECKING imports), #1683 (LLM_LOGGING debug), #2747 (hardcoded emoji), #5123 (README stale) | 😐 Mixed — some polish, some neglect |
| **Dream/agent autonomy** | #4667 (Dream overwriting skills), #2853 (Gemini sub-agent completion), #5114 (Dream memory integrity) | 🧪 Experimental — early adopters testing boundaries |

**Overall**: Power users deploying to production channels (Feishu, Discord, WhatsApp, WebSocket) hit **integration parity bugs**. Local-model users face **onboarding friction**. Dream/autonomy features are **experimental but actively stabilized**.

## 8. Backlog Watch — Stale Important Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#4792](https://github.com/HKUDS/nanobot/issues/4792) `/stop` message loss | 22 days (created 2026-07-06) | **Data loss on shutdown** — critical for production | Open, no fix PR |
| [#4805](https://github.com/HKUDS/nanobot/issues/4805) `suppress(Exception)` swallows tool errors | 22 days | **Silent failures** — debugging nightmare | Open, no fix PR |
| [#3559](https://github.com/HKUDS/nanobot/issues/3559) WebSocket proactive delivery | 89 days | **Multi-tenant architecture blocker** | Closed (maintainer said "use WebSocket") but user disagrees |
| [#3123](https://github.com/HKUDS/nanobot/issues/3123) Cron session isolation | 105 days | **Proactive message UX** — can't reply to bot-initiated | Closed, no fix |
| [#1174](https://github.com/HKUDS/nanobot/issues/1174) Memory consolidation blocks sessions | 154 days | **Local model usability** — 👍2 | Closed, no fix linked |
| [#1033](https://github.com/HKUDS/nanobot/issues/1033) Inter-instance cache staleness | 156 days | **Multi-channel consistency** — each channel has own CronService cache | Closed, no fix linked |
| [#1328](https://github.com/HKUDS/nanobot/issues/1328) Agent/gateway skill sharing | 151 days | **Dev/prod

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-07-28

## 1. Today's Overview
Hermes Agent shows **very high development velocity** with 79 total updates (29 issues, 50 PRs) in the last 24 hours and zero releases. The project is in an active stabilization phase: 8 PRs were merged/closed today, mostly desktop UI polish and gateway queue fixes. A cluster of **7 new desktop bugs** were filed today (Windows GIL stall, macOS white screen, CPU spin, redundant UI elements), indicating recent regression risk in the Electron app. Gateway message-queue semantics are being actively corrected via two parallel PRs (#73076, #73081). No new version shipped; the team appears focused on hardening before a release.

## 2. Releases
**None today.** Latest release data not provided in feed.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#73074](https://github.com/NousResearch/hermes-agent/pull/73074) | Bug fix | Slash completion now works after leading command (e.g., `/work /cle`) | Desktop UX polish |
| [#73073](https://github.com/NousResearch/hermes-agent/pull/73073) | Bug fix | Composer image attachments open in lightbox, not file rail | Desktop UX polish |
| [#73062](https://github.com/NousResearch/hermes-agent/pull/73062) | Bug fix | Removed redundant tooltip wrapping on obvious chrome (kebabs, close buttons) | Desktop UX cleanup |
| [#73047](https://github.com/NousResearch/hermes-agent/pull/73047) | Feature | Brand icons on links to known domains (GitHub, etc.) | Desktop visual polish |
| [#66880](https://github.com/NousResearch/hermes-agent/pull/66880) | Bug fix | Sidebar selection of most recent session now works when full-page route active | Desktop navigation fix |
| [#73081](https://github.com/NousResearch/hermes-agent/pull/73081) | Bug fix | `/stop` now clears full FIFO queue, not just head (fixes #73060) | Gateway reliability |
| *Two additional closed PRs* | — | Auto-format bot (#73064) and one unlisted | Maintenance |

**Net progress**: Desktop composer/navigation fixes landed; gateway queue semantics corrected; codebase auto-formatted.

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#70509](https://github.com/NousResearch/hermes-agent/pull/70509) — **On-device wake words** (open-vocabulary, multi-profile) | Created 2026-07-24, updated today; author `teknium1` (core) | Hands-free voice UX across CLI/TUI/Desktop without cloud dependency |
| [#73031](https://github.com/NousResearch/hermes-agent/pull/73031) — **Gateway session activity watchdog** (P1, re-landed after revert) | Created today; tags: risk-session-state, risk-message-delivery | Detect silent agent-loop stalls; auto-notify/recover |
| [#71298](https://github.com/NousResearch/hermes-agent/issues/71298) — **providers vs custom_providers dual storage mismatch** | 9 comments, P2, needs-repro | Single source of truth for provider config across CLI & GUI |
| [#62142](https://github.com/NousResearch/hermes-agent/issues/62142) — **verification-stop discards streamed final answers** | 2 comments, P2, needs-repro | Durable transcript integrity for streaming responses & cron reports |
| [#73060](https://github.com/NousResearch/hermes-agent/issues/73060) + [#73076](https://github.com/NousResearch/hermes-agent/pull/73076) + [#73081](https://github.com/NousResearch/hermes-agent/pull/73081) — **`/stop` queue semantics** | Issue + 2 PRs created today | Users expect `/stop` to cancel entire queued backlog, not just head |

**Signal**: Voice UX and gateway reliability are top cross-cutting concerns; desktop config sync remains a friction point.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0 (Crash/Unusable)** | [#73077](https://github.com/NousResearch/hermes-agent/issues/73077) | macOS Desktop: stuck white screen; remote OAuth expired / WS ticket loop + renderer crashes | No |
| **P0 (Crash/Unusable)** | [#73083](https://github.com/NousResearch/hermes-agent/issues/73083) | Windows Desktop startup fails: GIL stall in `_warm_gateway_module()` blocks event loop 15–22s | No |
| **P1 (Major regression)** | [#73082](https://github.com/NousResearch/hermes-agent/issues/73082) | Desktop renderer/GPU processes spin 50–90% CPU at idle; high energy use | No |
| **P1 (Data loss risk)** | [#73060](https://github.com/NousResearch/hermes-agent/issues/73060) | Gateway `/stop` discards only queue head; FIFO overflow continues executing | **Yes** — [#73081](https://github.com/NousResearch/hermes-agent/pull/73081), [#73076](https://github.com/NousResearch/hermes-agent/pull/73076) |
| **P2 (Functional)** | [#73079](https://github.com/NousResearch/hermes-agent/issues/73079) | “Home” project flashes post-update then vanishes | No |
| **P2 (Functional)** | [#73078](https://github.com/NousResearch/hermes-agent/issues/73078) | Spurious “Last week” date section on tiny project lists | No |
| **P3 (UX)** | [#73080](https://github.com/NousResearch/hermes-agent/issues/73080) | Top session tab bar redundant with sidebar; no setting to disable | No |

**Pattern**: 5/7 new bugs are Desktop/Electron regressions (startup, rendering, CPU, UI duplication). Gateway queue bug has immediate fix PRs.

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **On-device wake words (open-vocabulary, multi-profile)** | [#70509](https://github.com/NousResearch/hermes-agent/pull/70509) (core-authored PR) | **High** — large PR, active, spans all surfaces |
| **Gateway session activity watchdog** | [#73031](https://github.com/NousResearch/hermes-agent/pull/73031) (P1, re-landed) | **High** — critical reliability, already reviewed once |
| **Default no-API-key web_extract plugin** | [#72364](https://github.com/NousResearch/hermes-agent/issues/72364) | Medium — clear user pain, scoped tooling gap |
| **Brand icons on known-domain links** | [#73047](https://github.com/NousResearch/hermes-agent/pull/73047) (merged) | **Shipped today** |
| **Research Protocol bounded planner tools** | [#64699](https://github.com/NousResearch/hermes-agent/pull/64699) | Medium — opt-in plugin, security-review heavy |
| **Snapshot channel context files for sessions** | [#50680](https://github.com/NousResearch/hermes-agent/pull/50680) | Medium — gateway/sessions enhancement |

**Prediction**: Next release will likely include wake-word system, watchdog, and desktop polish fixes merged today.

## 7. User Feedback Summary
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Desktop startup/render failures on macOS & Windows** | #73077, #73083 — “stuck white screen”, “could not connect to gateway” | 2 new P0s today |
| **Excessive CPU/battery drain at idle** | #73082 — “highest energy consumer”, “machine gets hot” | 1 new P1 today |
| **Config divergence between CLI (`hermes setup model`) and GUI Settings** | #71298 — dual `providers`/`custom_providers` storage | Ongoing (9 comments) |
| **`/stop` not clearing full queue** | #73060 — “discards only queue head” | New today, fix PRs open |
| **Redundant UI chrome (tab bar, tooltips, date sections)** | #73080, #73078, #73062 (fixed) | 3 new today |
| **Voice UX gaps (no local wake-word)** | #70509 — “Hey Siri pattern” request | Active PR |
| **Credential pool not reflected in `hermes status`** | #60106 — OpenRouter in auth pool but status says not set | Open since Jul 7 |

**Satisfaction signal**: Users encounter regressions in basics (startup, idle CPU, config sync) while advanced features (voice, watchdog) are in flight. Desktop stability is the loudest complaint.

## 8. Backlog Watch — Stale Important Items Needing Maintainer Attention
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#71298](https://github.com/NousResearch/hermes-agent/issues/71298) — providers vs custom_providers mismatch | 3 days (updated today) | Config single-source-of-truth; blocks reliable CLI↔GUI sync | Open, needs repro, 9 comments |
| [#62142](https://github.com/NousResearch/hermes-agent/issues/62142) — verification-stop loses streamed answers | 18 days | Transcript integrity for streaming & cron | Open, needs repro |
| [#46778](https://github.com/NousResearch/hermes-agent/issues/46778) — Desktop pool backends orphaned (PPID=1 leak) | 43 days | Process leak per profile per idle-reap | Open |
| [#51127](https://github.com/NousResearch/hermes-agent/issues/51127) — Windows bootstrap installer progress bar never completes | 35 days | Update UX broken on Windows | Open |
| [#25848](https://github.com/NousResearch/hermes-agent/issues/25848) — LiteLLM proxy admin-gated `/v1/models/{model}` probe | 75 days | Breaks context-length resolution on LiteLLM | Open |
| [#10877](https://github.com/NousResearch/hermes-agent/issues/10877) — memory_tool load_from_disk skips char-limit validation | 103 days | External files can exceed memory cap silently | Open |
| [#6716](https://github.com/NousResearch/hermes-agent/issues/6716) — `install.sh` mutates `package-lock.json` on fresh installs | 110 days | Non-reproducible installs | Open, 1 👍 |
| [#14687](https://github.com/NousResearch/hermes-agent/issues/14687) — ContextCompressor should accept Anthropic usage schema | 96 days | Usage-cost tracking broken for Anthropic-compat | Open |

**Recommendation**: Prioritize #71298 (config sync), #62142 (streaming data loss), and #46778 (process leak) — all affect core reliability and have persisted >2 weeks.

---

*Digest generated from GitHub API data for 2026-07-28. All links point to live GitHub items.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-07-28

## 1. Today's Overview
PicoClaw shows **moderate community activity with zero merges** in the last 24 hours. Six issues and six PRs were updated, but all PRs remain open (some stale for weeks), indicating a **review bottleneck**. No new release was cut. The issue backlog highlights three stability-critical bugs (MCP hang, chat input lag, `read_file`-induced deadlock) and two usability features (systemd gateway integration, Japanese i18n). Project health is **“active but congested”** — contributors are submitting fixes, but maintainer throughput appears limited.

---

## 2. Releases
**No new releases today.**  
Latest published version remains **v0.3.1** (per issue #3281). Nightly users are on commit `2cf030d2`.

---

## 3. Project Progress
**No PRs merged or closed today.** All six tracked PRs are open and marked `[stale]` or untouched for days/weeks:

| PR | Title | Author | Age | Status |
|----|-------|--------|-----|--------|
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) | Move installation scripts from docs repo | lc6464 | 4 months | Open |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | Configurable default fallback chain for models | lc6464 | 27 days | Open |
| [#3259](https://github.com/sipeed/picoclaw/pull/3259) | Update description for parallelization | developerisnow | 13 days | Open |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) | Add DashScope TTS provider & WeChat audio | MrTreasure | 8 days | Open |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) | Update default model names to 2026-07 latest | LeaderOnePro | 8 days | Open |
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) | Add Japanese (ja) localization to WebUI | honbou | 8 days | Open |

**Signal:** A backlog of **feature-complete PRs awaits review** — especially #3273 (i18n), #3271 (model refresh), and #3270 (TTS), which are user-facing enhancements ready to ship.

---

## 4. Community Hot Topics
Top issues by engagement (comments + recency):

| Issue | Type | Comments | Core Need |
|-------|------|----------|-----------|
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) | Feature (systemd) | 1 | **Production deployment**: Launcher must detect/coexist with externally managed gateway (systemd), not hard-fail on unknown channel types. |
| [#3272](https://github.com/sipeed/picoclaw/issues/3272) / [#3273](https://github.com/sipeed/picoclaw/pull/3273) | Feature (i18n) | 1 | **Japanese UI** — docs already translated; WebUI missing. PR #3273 is complete (968-line `ja.json`). |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | **Bug (hang)** | 1 | **MCP connection failure freezes agent loop** — chat stops replying. High severity for reliability. |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **Bug (perf)** | 1 | **Chat input lag with long history** — regression in WebUI v0.3.1. |
| [#3300](https://github.com/sipeed/picoclaw/issues/3300) | **Bug (deadlock)** | 0 | **Missing `read_file` tool** causes deadlock when `AGENT.md` instructs AI to read `RULES.md` first. |
| [#3268](https://github.com/sipeed/picoclaw/issues/3268) | Bug (tool default) | 1 | `exec` tool requires `action: "run"` explicitly — LLMs often omit it. |

**Underlying themes:**  
- **Ops readiness** (systemd, gateway lifecycle)  
- **Internationalization** (Japanese demand is concrete, PR ready)  
- **Core stability** (MCP hang, input lag, tool deadlock) — all block daily usage.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Critical** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server connection failure → agent loop hangs → chat UI freezes completely. Affects all MCP users. | ❌ No PR yet |
| **Critical** | [#3300](https://github.com/sipeed/picoclaw/issues/3300) | Missing `read_file` tool → AI instructed to read `RULES.md` → deadlock every turn. Blocks rule-based workflows. | ❌ No PR yet |
| **High** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | WebUI chat input becomes very laggy with moderate history length (v0.3.1). UX regression. | ❌ No PR yet |
| **Medium** | [#3268](https://github.com/sipeed/picoclaw/issues/3268) | `exec` tool requires `action` param (no default `"run"`). LLM calls fail unpredictably. | ❌ No PR yet |
| **Medium** | [#3276](https://github.com/sipeed/picoclaw/issues/3276) | Launcher hard-fails on unknown channel types; assumes it owns gateway lifecycle (conflicts with systemd). | ❌ No PR yet |

**Note:** Zero bug-fix PRs in the current queue. All open PRs are enhancements.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Evidence | Likelihood for Next Release |
|---------|----------|-----------------------------|
| **Japanese localization** | Issue #3272 + complete PR #3273 (968 lines, dayjs integration) | **Very High** — PR is review-ready |
| **Model list refresh (2026-07)** | PR #3271 updates 9 providers (OpenAI gpt-5.6*, Anthropic, etc.) | **High** — maintenance-critical |
| **DashScope TTS + WeChat audio** | PR #3270 adds new provider + platform integration | **Medium-High** — feature-complete |
| **Configurable model fallback chain** | PR #3200 adds UI + API for default/fallback ordering | **Medium** — UX improvement, 27 days open |
| **Systemd-friendly gateway management** | Issue #3276 requests detection/coexistence, no hard-fail | **Medium** — ops need, no PR yet |
| **Installation scripts consolidation** | PR #1951 moves scripts from docs repo | **Low** — housekeeping, 4 months stale |

**Prediction:** Next patch (v0.3.2 or v0.4.0) will likely ship **Japanese i18n, model refresh, and DashScope TTS** if maintainers clear the review queue. Critical bugs (#3269, #3300, #3281) need urgent triage.

---

## 7. User Feedback Summary

| Pain Point | User Context | Sentiment |
|------------|--------------|-----------|
| **Chat freezes on MCP failure** | Headless server, Qwen3, nightly build | 😡 Blocking |
| **Input lag with history** | WebUI v0.3.1, moderate session length | 😡 Regression |
| **Deadlock from missing `read_file`** | Linux amd64, rule-file workflow (`RULES.md`) | 😡 Workflow broken |
| **`exec` tool requires explicit `action`** | LLM agents omitting common param | 😐 Annoying |
| **Launcher vs systemd conflict** | Production VM, both gateway & launcher as services | 😐 Ops friction |
| **No Japanese UI** | Docs translated, WebUI not | 😐 Missing parity |

**Overall:** Users are **hitting show-stopper bugs in core loops** (MCP, tooling, UI perf) while requesting **polish features** (i18n, model updates) that already have PRs. Frustration is rising on stability issues.

---

## 8. Backlog Watch — Needs Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP hang | 8 days | **Critical stability** — no fix, no PR, affects all MCP users |
| [#3300](https://github.com/sipeed/picoclaw/issues/3300) `read_file` deadlock | 0 days (new) | **New critical** — breaks rule-based agent workflows |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) Chat input lag | 7 days | **UX regression** — no PR, likely frontend rendering issue |
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) Japanese i18n | 8 days | **Complete PR** — 968 lines, ready to merge, user demand confirmed |
| [#3271](https://github.com/sipeed/picoclaw/pull/3271) Model refresh | 8 days | **Time-sensitive** — model IDs drift, 9 providers updated |
| [#3270](https://github.com/sipeed/picoclaw/pull/3270) DashScope TTS | 8 days | **Feature-complete** — new provider + WeChat integration |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) Fallback chain | 27 days | **Stale enhancement** — UI + API done, lingering |
| [#1951](https://github.com/sipeed/picoclaw/pull/1951) Install scripts | 126 days | **Ancient housekeeping** — blocks docs repo cleanup |

**Recommendation:** Prioritize **bug triage (#3269, #3300, #3281)** and **merge-ready PRs (#3273, #3271, #3270)**. Consider a **bug-fix sprint** before new features.

---

*Digest generated from GitHub data as of 2026-07-28. Links point to live issues/PRs on github.com/sipeed/picoclaw.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-07-28

## 1. Today's Overview
NanoClaw shows **active development velocity** with 10 pull requests updated in the last 24 hours, though only one PR (#2598) was merged/closed. The project continues its pattern of incremental improvements across webhook configuration, Signal adapter reliability, skill system enhancements, and core agent behavior fixes. No new releases or issues were recorded today, indicating a maintenance-and-refinement phase rather than major feature launches. The open PR backlog (9 active) spans webhook binding, Signal attachment handling, engagement policy controls, and CLI tooling — suggesting the team is polishing integration surfaces and developer experience.

---

## 2. Releases
**No new releases published today.** The project remains on its current version. Monitor the [releases page](https://github.com/nanocoai/nanoclaw/releases) for upcoming tags.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#2598](https://github.com/nanocoai/nanoclaw/pull/2598) | **fix: load per-group CLAUDE.local.md by adding 'local' to settingSources** | Bug Fix / Config | Enables group-scoped local configuration files (`CLAUDE.local.md`) to be loaded correctly. Resolves a gap where per-group overrides were ignored. Merged after 2+ months in review. |

**Net progress**: One long-standing configuration bug resolved; 9 PRs remain open and actively updated.

---

## 4. Community Hot Topics (Most Active PRs)

| PR | Activity Signal | Underlying Need |
|----|-----------------|-----------------|
| [#3144](https://github.com/nanocoai/nanoclaw/pull/3144) *feat(webhook): configurable bind address via WEBHOOK_HOST* | Created & updated today; new feature | **Deployment hardening** — operators need to restrict webhook listeners to specific interfaces (e.g., internal-only) instead of default `0.0.0.0`. Critical for secure/production deployments. |
| [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) *[core-team] Fix engagement consistency and expose self-serve wiring controls* | Core-team authored; updated yesterday | **Agent autonomy & observability** — agents must inspect/adjust their own engagement policies (regex, warm-container behavior) without operator intervention. Signals maturing multi-agent orchestration. |
| [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) *fix(signal): forward image/file attachments through mounted inbox* | Created & updated today; fixes data loss | **Signal integration reliability** — attachments were written to unmapped container paths, making them unreadable. Blocks real-world file/image handling in Signal groups/DMs. |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) *feat(setup): add Dial to channel picker + wizard/skills* | Open since Jul 14; feature skill | **Channel expansion** — adding Dial (a messaging platform) as a first-class integration with setup wizard support. Indicates push for broader protocol coverage. |

**Pattern**: Security/posture (webhook bind), agent self-governance (engagement policies), and integration correctness (Signal attachments) dominate current discourse.

---

## 5. Bugs & Stability (Reported/Fixed Today)

| Severity | Issue | PR Fix | Status |
|----------|-------|--------|--------|
| **High** | Signal attachments saved to unmapped container path (`/workspace/extra/signal-attachments/...`) — Read tool fails | [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) | **Open fix** — attaches files via mounted inbox path |
| **Medium** | Unknown slash commands misclassified as `passthrough`, causing silent response drops | [#2346](https://github.com/nanoclaw/pull/2346) | **Open fix** (stale since May) — falls back to `category: 'none'` |
| **Medium** | `compose` ignores `container.json` skill selection for `CLAUDE.md` fragments | [#3141](https://github.com/nanoclaw/pull/3141) | **Open fix** — respects skill-scoped config composition |
| **Low** | Resolved approval cards lost title/request details on render | [#3143](https://github.com/nanoclaw/pull/3143) | **Open fix** — preserves original body, mutes buttons |

**No new bug issues opened today** — all tracked via PRs. The Signal attachment bug (#3142) is the most user-impacting active defect.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|-----------------------------|
| **Configurable webhook bind address** (`WEBHOOK_HOST`) | [#3144](https://github.com/nanoclaw/pull/3144) | **High** — trivial, backward-compatible, security-relevant |
| **Agent self-serve engagement policy inspection/update** | [#3137](https://github.com/nanoclaw/pull/3137) | **High** — core-team authored, addresses architectural gap |
| **Dial channel integration + setup wizard** | [#3050](https://github.com/nanoclaw/pull/3050) | **Medium** — feature skill with wizard; depends on review bandwidth |
| **ncc CLI utility skill (host/health ops)** | [#2971](https://github.com/nanoclaw/pull/2971) | **Medium** — utility skill, no core changes; good DX addition |
| **Group typing indicators & outbound reactions (Signal)** | [#2685](https://github.com/nanoclaw/pull/2685) | **Low-Medium** — docs-only PR; implementation likely done, docs catching up |

**Roadmap inference**: Next version will likely ship webhook hardening, agent policy introspection, and Signal attachment fix. Dial and ncc CLI are strong candidates if review capacity allows.

---

## 7. User Feedback Summary
*No direct user issues/comments in last 24h.* Inferred pain points from PR activity:

| Pain Point | Evidence |
|------------|----------|
| **Webhook exposure risk** | Operators cannot restrict bind address; defaults to all interfaces ([#3144](https://github.com/nanoclaw/pull/3144)) |
| **Signal file handling broken** | Attachments unreadable in container — blocks document/image workflows ([#3142](https://github.com/nanoclaw/pull/3142)) |
| **Agent opacity** | Agents cannot view/modify their own engagement rules; regex validation missing ([#3137](https://github.com/nanoclaw/pull/3137)) |
| **Config fragmentation** | `container.json` skill selection ignored during `CLAUDE.md` composition ([#3141](https://github.com/nanoclaw/pull/3141)) |
| **Silent command failures** | Unknown slash commands dropped without feedback ([#2346](https://github.com/nanoclaw/pull/2346)) |

**Sentiment**: Developers/operators are hitting **integration edges** (webhook, Signal, config composition) and **agent observability limits** — not core chat failures. Project health: **stable core, active edge hardening**.

---

## 8. Backlog Watch (Stale / Needing Maintainer Attention)

| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| [#2346](https://github.com/nanoclaw/pull/2346) *fix(formatter): treat unknown slash commands as normal chat* | **81 days** (opened May 8) | Medium — silent UX failure for custom commands | **Review/merge** — simple fallback logic, tests likely passing |
| [#2685](https://github.com/nanoclaw/pull/2685) *docs(signal): group typing, outbound reactions, quote-reply fix* | **54 days** (opened Jun 4) | Low — docs only, but signals undocumented features | **Merge if implementation complete** — verify features work, then ship docs |
| [#2971](https://github.com/nanoclaw/pull/2971) *Add ncc utility skill: host operational and health CLI* | **21 days** (opened Jul 7) | Low — standalone skill, no core risk | **Review for skill guidelines compliance** — good candidate for quick win |
| [#3050](https://github.com/nanoclaw/pull/3050) *feat(setup): add Dial to channel picker + wizard/skills* | **14 days** (opened Jul 14) | Medium — new integration surface | **Core-team review** — ensure wizard/skill patterns consistent |

**Recommendation**: Prioritize #2346 (oldest, user-facing bug) and #3142 (active data-loss bug). Schedule #3137 and #3144 for next release train.

---

*Data sourced from GitHub API (issues, PRs, releases) for nanocoai/nanoclaw on 2026-07-28. All links point to live GitHub resources.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-07-28

## 1. Today's Overview
NullClaw shows minimal activity over the past 24 hours with zero issue updates and only one automated dependency pull request. The project appears to be in a maintenance-only phase with no active feature development, bug triage, or community discussion occurring today. The single PR is a Dependabot-generated Docker base image update (Alpine 3.23 → 3.24), indicating routine infrastructure upkeep rather than product evolution. Overall project health signals low velocity and limited contributor engagement at this time.

## 2. Releases
No new releases published today or in the recent period covered by this data.

## 3. Project Progress
No PRs were merged or closed today. The only open PR (#956) remains in review/pending state — it updates the Alpine Linux base image in Docker images from 3.23 to 3.24. This is a routine security and maintenance update with no functional changes to NullClaw itself.

## 4. Community Hot Topics
No active issues or PRs with community discussion (comments/reactions) in the last 24 hours. The sole PR (#956) has zero comments and zero reactions, indicating no human review or engagement yet.  
**Link:** [PR #956](https://github.com/nullclaw/nullclaw/pull/956)

## 5. Bugs & Stability
No bug reports, crash reports, or regressions filed or updated today. No fix PRs are present.

## 6. Feature Requests & Roadmap Signals
No feature requests or roadmap-related issues were created or updated today. The absence of any user-driven issues or enhancement proposals suggests either stable satisfaction with current functionality or low community visibility/engagement.

## 7. User Feedback Summary
No user feedback, pain points, use cases, or satisfaction signals captured in issues or PR discussions today. Zero community interaction implies no direct user input is being surfaced through GitHub at this time.

## 8. Backlog Watch
No long-unanswered issues or PRs requiring maintainer attention were identified in today's data. The only open PR (#956) was created on 2026-06-15 and updated 2026-07-27 — it has been open for 43 days without review. While low-risk, this Dependabot PR should be merged or closed to avoid staleness.  
**Link:** [PR #956](https://github.com/nullclaw/nullclaw/pull/956) — Alpine 3.23 → 3.24 Docker base image bump (43 days open, no review)

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-07-28

## 1. Today's Overview
IronClaw shipped its **v1.0.0 "Reborn" release** yesterday (2026-07-27), marking a ground-up rewrite of the agent runtime, storage, extension host, and WebUI. The project is in a high-velocity post-release stabilization phase: **50 PRs** and **20 issues** saw activity in the last 24 hours, with 19 PRs merged/closed. The focus has shifted from the monolithic v0.29.x line to the new `ironclaw` binary, while `ironclaw-legacy` preserves the old monolith. Current work centers on hardening the extension platform, memory provider contracts, sandbox isolation, and hermetic testing infrastructure — all tracked through large, well-scoped epics.

---

## 2. Releases

### **ironclaw-v1.0.0** (2026-07-27)
**First stable release of the rearchitected "Reborn" codebase.**

| Aspect | Details |
|--------|---------|
| **Binary** | `ironclaw` (new CLI); `ironclaw-legacy` (v0.29.x monolith) |
| **Scope** | Agent runtime, storage, extension host, WebUI — all rebuilt |
| **Breaking Changes** | Complete API/infrastructure break from 0.29.x; not an increment |
| **Migration** | Issue [#6725](https://github.com/nearai/ironclaw/issues/6725) tracks the legacy → v1 migration path (design doc TBD) |
| **Docs** | PR [#6692](https://github.com/nearai/ironclaw/pull/6692) restructured public docs around the shipped 1.0 binary; previously 33 internal engineering docs were inadvertently public |

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Scope | Outcome |
|----|-------|---------|
| [#6684](https://github.com/nearai/ironclaw/pull/6684) | **Failure vocabulary unification** (epic #6284) | Collapsed 5 overlapping `FailureKind` enums into one closed `host_api::FailureKind` (36 variants); fixed 6 wrongful-terminal/mis-retry bugs with red-verified regression tests |
| [#6723](https://github.com/nearai/ironclaw/pull/6723) | **Sandbox credential firewall primitives** | Added `SandboxCertificateAuthority` (in-memory root + short-lived leaf certs) and obligation staging — unwired primitives for the persistent-sandbox program |
| [#6692](https://github.com/nearai/ironclaw/pull/6692) | **Docs restructure** | Moved internal engineering docs out of public site; `docs/.mintignore` now excludes all non-public paths |
| [#6687](https://github.com/nearai/ironclaw/pull/6687) | **Dependabot: everything-else group** | 31 dependency updates (async-trait, thiserror, uuid, etc.) |
| [#6696](https://github.com/nearai/ironclaw/pull/6696) | **DB migration: lifecycle state → process journal** | `ironclaw_processes` becomes lifecycle authority; turn state as journal projections; transactional cursors, durable observers, bounded claim pagination, lease-recovery policy |
| [#6691](https://github.com/nearai/ironclaw/pull/6691) | **Composition assembly refactor** | Reduced `ironclaw_reborn_composition` by 9,394 lines; split factory/runtime monoliths into focused builders; deleted duplicate adapters |

*Plus 13 other merged/closed PRs (mostly dependency bumps, test hardening, and small fixes).*

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | **Epic** | 14 | **Error-recoverability endgame**: Every mid-run error must survive, be visible to the model with cause+remediation, give the model a turn, and never report non-success as success. Drives PRs [#6684](https://github.com/nearai/ironclaw/pull/6684), [#6697](https://github.com/nearai/ironclaw/pull/6697). |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | **Epic** | 3 | **Hermetic capability/journey testing platform**: Mechanical answer to "does every capability/journey have deterministic coverage?" Drives PRs [#6738](https://github.com/nearai/ironclaw/pull/6738), [#6728](https://github.com/nearai/ironclaw/pull/6728). |
| [#6741](https://github.com/nearai/ironclaw/issues/6741) | **Bug** | 0 (new today) | **OAuth connection fails for Gmail/Calendar** after sign-in flow — blocks extension onboarding for hosted WebUI users. |
| [#6641](https://github.com/nearai/ironclaw/issues/6641) | **Design Doc** | 0 | **Skill Self-Creation**: Hot-swappable, manifest-based skill creation module (benchmark: 86 SkillsBench + SkillLearnBench tasks). |
| [#6481](https://github.com/nearai/ironclaw/issues/6481) | **Epic** | 0 | **Unified Manifest-Driven Extension Platform**: One coherent package declaring tool, channel, auth, ingress, delivery, skill, runtime surfaces. Manifest V3 target. |

> **Signal**: The project runs on **large, cross-cutting epics** with explicit acceptance criteria. Most "hot" items are internal engineering epics, not user-reported bugs — indicating a team-driven, architecture-first roadmap.

---

## 5. Bugs & Stability — Reported Today

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#6741](https://github.com/nearai/ironclaw/issues/6741) | **OAuth connection fails for Gmail/Calendar** after completing sign-in flow on hosted WebUI. Blocks extension onboarding. | No PR yet |
| **Medium** | [#6060](https://github.com/nearai/ironclaw/issues/6060) *(closed today)* | Routine delivery target leaked globally — setting one routine to Slack changed all routines. Fixed via per-routine resolution. | Implied fixed |
| **Low** | [#6726](https://github.com/nearai/ironclaw/issues/6726) | `register_generic_channel_outbound_targets` can be a no-op with all tests green (sole surviving mutant from #6681 audit). | No PR; test gap |

> **Stability note**: The v1.0.0 release is <48h old; early adopter bugs (OAuth, WebUI UX) are surfacing. The team's mutation-testing discipline (#6726) suggests strong test hygiene.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **In-app feedback/bug-report widget** | [#6743](https://github.com/nearai/ironclaw/issues/6743) (new today) | High — low-effort UX win for hosted WebUI |
| **User profile details view in WebUI** | [#6742](https://github.com/nearai/ironclaw/issues/6742) (new today) | High — basic account visibility missing |
| **Custom/arbitrary MCP server support** | [#6727](https://github.com/nearai/ironclaw/issues/6727) | Medium — only 2 hardcoded MCP servers today; extensibility gap |
| **IronHub integration (tool/skill marketplace)** | [#6731](https://github.com/nearai/ironclaw/issues/6731) | Medium — strategic but requires provenance/signing infra |
| **Agent access to own documentation** | [#6734](https://github.com/nearai/ironclaw/issues/6734) | Medium — dogfood opportunity; reduces hallucinated config advice |
| **Shared Messaging Capability Layer** | [#6484](https://github.com/nearai/ironclaw/issues/6484) | High — active epic; provider-neutral ops (send/edit/delete/react/thread) |
| **Telegram completeness & production hardening** | [#6483](https://github.com/nearai/ironclaw/issues/6483) | High — active epic; pairing, attachments, delivery config, WebUI coherence |
| **Pluggable Memory Providers** | [#6482](https://github.com/nearai/ironclaw/issues/6482) | High — PR [#6724](https://github.com/nearai/ironclaw/pull/6724) rebuilds contract around declared capabilities |

> **Prediction**: Next patch (v1.0.x) will address WebUI UX gaps (#6741, #6742, #6743) and OAuth. v1.1 will land the extension platform unification (#6481), memory provider contract (#6482/#6724), and messaging layer (#6483/#6484).

---

## 7. User Feedback Summary

| Pain Point | Evidence |
|------------|----------|
| **OAuth broken for Google extensions** | [#6741](https://github.com/nearai/ironclaw/issues/6741) — "connection fails with an error instead of successfully linking the tool" on hosted instance |
| **No in-app feedback channel** | [#6743](https://github.com/nearai/ironclaw/issues/6743) — users must leave app for Slack/GitHub |
| **No account visibility in WebUI** | [#6742](https://github.com/nearai/ironclaw/issues/6742) — profile menu shows non-functional "IronClaw" item; can't tell which account is active |
| **Legacy → v1 migration path unclear** | [#6725](https://github.com/nearai/ironclaw/issues/6725) — tracking issue created, design doc TBD |
| **Agent hallucinates its own config** | [#6734](https://github.com/nearai/ironclaw/issues/6734) — agent can't accurately guide tool/channel/extension setup |

> **Sentiment**: Early v1.0 adopters are hitting **onboarding/UX gaps** (OAuth, profile, feedback) rather than core agent failures. The team is responsive — 3 UX issues filed today, all acknowledged.

---

## 8. Backlog Watch — Long-Unanswered / Needs Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) | 9 days | **Core reliability epic**; 14 comments, drives multiple PRs. Items 1-7 done; item 8 (provider finish reason) in PR [#6697](https://github.com/nearai/ironclaw/pull/6697). Needs final push to "100% recoverability". |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) | 6 days | **Testing platform epic**; blocks confidence in capability coverage. Workstreams 1-3 in flight (PRs [#6738](https://github.com/nearai/ironclaw/pull/6738), [#6728](https://github.com/nearai/ironclaw/pull/6728)). |
| [#6481](https://github.com/nearai/ironclaw/issues/6481) | 6 days | **Extension platform unification**; PR [#6655](https://github.com/nearai/ironclaw/pull/6655) normalizes filesystem records, but manifest V3 schema and composition policy still open. |
| [#6482](https://github.com/nearai/ironclaw/issues/6482) | 6 days | **Pluggable memory providers**; PR [#6724](https://github.com/nearai/ironclaw/pull/6724) rebuilds contract — needs review/merge to unblock mem0/self-hosted providers. |
| [#6725](https://github.com/nearai/ironclaw/issues/6725) | 1 day | **Migration path legacy → v1**; zero comments, no design doc. Critical for existing 0.29.x users. |
| [#6691](https://github.com/nearai/ironclaw/pull/6691) | 1 day | **Composition refactor** (-9,394 lines); XL, low risk. Large surface area — needs thorough review before merge. |
| [#6696](https://github.com/nearai/ironclaw/pull/6696) | 1 day | **DB migration** (lifecycle → process journal); XL, medium risk. Schema change — requires migration plan review. |

---

## Health Indicators

| Metric | Signal |
|--------|--------|
| **Release cadence** | ✅ v1.0.0 shipped; major rearchitecture complete |
| **PR throughput** | ✅ 50 PRs/24h, 19 merged — high velocity |
| **Epic-driven planning** | ✅ All major work tracked via epics with acceptance criteria |
| **Test discipline** | ✅ Mutation testing (#6726), hermetic journey testing (#6524), regression tests for every failure-vocab bug (#6684) |
| **Dependency hygiene** | ✅ Dependabot groups (tokio, wasm, serialization, everything-else) updated regularly |
| **Docs hygiene** | ✅ Internal docs leak fixed (#6692); public site restructured for v1 |
| **User-facing gaps** | ⚠️ OAuth, profile, feedback — but all filed + acknowledged in <24h |

**Overall**: **Healthy post-launch stabilization**. The rearchitecture is shipped; the team is systematically closing reliability epics, hardening the extension platform, and addressing early-adopter UX friction.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-07-28

---

## 1. Today's Overview
LobsterAI saw **high issue intake** (9 new/updated issues) and **strong PR throughput** (6 PRs closed/merged, 3 open) in the last 24 hours with **no new release**. Activity centers on **Windows installer reliability**, **exec-tool shell defaults**, **data-corruption bugs in the accelerator**, and **settings UX gaps**. Several long-stale issues/PRs (April 2026) remain open, indicating a backlog of UX polish and dependency updates. Overall project health: **active development, but growing bug backlog on Windows-specific paths and shell handling**.

---

## 2. Releases
**None published today.**

---

## 3. Project Progress — Merged / Closed PRs (Last 24h)

| PR | Area | Summary | Link |
|----|------|---------|------|
| #2394 | docs, windows | Fixed Windows installer “manual overwrite blocked” error (user skills backup failure) | [#2394](https://github.com/netease-youdao/LobsterAI/pull/2394) |
| #2389 | skills, security | Sanitized email-attachment filenames; enforced download-directory boundaries; added cross-platform tests; bumped email skill version | [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) |
| #2388 | renderer, artifacts | Added share/deploy buttons to Artifact preview toolbar; extracted publishing-target logic + unit tests; added telemetry sources; new design doc | [#2388](https://github.com/netease-youdao/LobsterAI/pull/2388) |
| #2386 | agentEngine, main, openclaw | Terminated no-progress tool loops before token-budget exhaustion | [#2386](https://github.com/netease-youdao/LobsterAI/pull/2386) |
| #2387 | renderer, sites | “2026.7.20 sites” feature bundle (details sparse in PR body) | [#2387](https://github.com/netease-youdao/LobsterAI/pull/2387) |
| #1323 | cowork | Narrowed `input-too-long` error classification to avoid false “context limit” UI | [#1323](https://github.com/netease-youdao/LobsterAI/pull/1323) |

**Net effect:** Installer robustness ✅, attachment security ✅, artifact sharing UX ✅, agent-loop safety ✅, error-message accuracy ✅.

---

## 4. Community Hot Topics (Most Comments / Reactions)

| Item | Type | Comments | 👍 | Core Need | Link |
|------|------|----------|----|-----------|------|
| #2395 | Issue | 1 | 0 | **Installer fails** with “user skills could not be backed up” — blocks updates on Windows | [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) |
| #1237 / #1241 | Issue + PR | 1 / — | 0 | **Settings dialog loses unsaved API keys silently** — PR #1241 implements dirty-check + confirmation modal (stale since Apr) | [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) · [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) |
| #2393 | Issue | 0 | 0 | **Accelerator corrupts `\f` (0x5C66) → form-feed (0x0C)** — silent file-data corruption, 100% reproducible | [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) |
| #2396 / #2390 | Issues | 0 / 0 | 0 | **exec tool hard-codes PowerShell 5.1** — breaks Linux commands, inline scripts, Chinese-path encoding | [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) · [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) |

**Pattern:** Windows shell defaults, installer backup logic, and settings persistence are the top friction points.

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| 🔴 **Critical (Data Integrity)** | [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) | Accelerator rewrites `\f` byte-pair to form-feed → silent file corruption (Windows paths, JSON, scripts) | ❌ |
| 🟠 **High (Installer Block)** | [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) | Update aborts: “user skills could not be backed up” — previous install not replaced | ✅ **#2394** (closed today, doc/workaround) |
| 🟠 **High (Shell Execution)** | [#2396](https://github.com/netease-youdao/LobsterAI/issues/2396) / [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) | exec tool forces PowerShell 5.1; Linux commands, `node -e`, `pwsh -Command`, Chinese usernames all fail | ❌ |
| 🟡 **Medium (Task Timeout)** | [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | 24h tasks auto-stop with “exceeded maximum allowed duration” — unclear if background continues | ❌ |
| 🟡 **Medium (Model Lock-in)** | [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | One rate-limited provider disables **all** model switching; app fails to start until manual config revert | ❌ |
| 🟢 **Low (UX)** | [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) | Settings modal discards unsaved changes on any close action without warning | ✅ **#1241** (open, stale) |

---

## 6. Feature Requests & Roadmap Signals

| Request | Issue / PR | Signal Strength | Likelihood Next Version |
|---------|------------|-----------------|-------------------------|
| **Skill rename** | [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) | New (1 day), clear user ask | Medium — low complexity |
| **Scheduled-task agent/skill selector** | [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) | New (1 day), workflow gap | Medium — fits artifact/share work |
| **Taskbar/Dock flash on task done** | [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | Stale PR (Apr), complete impl | Low — needs maintainer review |
| **Settings dirty-check + confirm** | [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | Stale PR (Apr), closes #1237 | Medium — PR ready, awaiting merge |
| **Electron 40 → 43 bump** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Dependabot, 3 months old | Low — blocked by test matrix? |

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Theme | Representative Voices |
|-------|------------------------|
| **Windows installer fragility** | “Update stopped because user skills could not be backed up” (#2395) — blocks all updates |
| **Shell execution broken on Windows** | “Default shell wrapper = PowerShell 5.1 → Linux commands / inline scripts silently fail” (#2396, #2390) — Chinese usernames exacerbate encoding |
| **Silent data corruption** | “Accelerator turns `\firecrawl` into form-feed bytes — file save corrupts” (#2393) — 100% repro, high trust impact |
| **Model provider lock-in** | “One rate-limited API disables *all* models; app won’t start” (#1240) — forces manual JSON edit |
| **Settings UX hostility** | “Close settings → lose API key changes, no warning” (#1237) — PR exists but stale |
| **Long-running task opacity** | “24h task says ‘timed out’, unsure if still running” (#2062) — needs clearer state UI |

**Sentiment:** Frustration with Windows-specific regressions (shell, installer, encoding) and silent data loss; appreciation for artifact/share features (#2388) and security fixes (#2389).

---

## 8. Backlog Watch — Stale / Unanswered Items Needing Maintainer Attention

| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) + [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | 119 days | Settings data loss on every close; PR ready with dirty-check + modal | **Merge #1241** or rebase + CI |
| [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | 119 days | Task-complete notification (taskbar/Dock flash) — complete cross-platform impl | Review & merge; low risk |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | 118 days | Electron 40 → 43 (security, perf, Wayland) | Run test suite; unblock dependency updates |
| [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | 119 days | Single provider rate-limit bricks entire app + model switching | Design isolation / fallback logic |
| [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | 62 days | Long-task timeout UX unclear — users don’t know if work continues | Add “continue in background” state + progress persistence |

---

*Digest generated from GitHub data as of 2026-07-28. Links point to live issues/PRs for traceability.*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-07-28

## 1. Today's Overview
Moltis shows **active development with zero merged changes** in the last 24 hours. Five pull requests are currently open and under review, spanning memory backends, ACP protocol support, security hardening, observability infrastructure, and PWA notification reliability. No new issues were filed or updated, and no releases were published. The project is in a **feature-development phase** with multiple substantial PRs awaiting maintainer attention.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress
**No PRs were merged or closed today.** All five tracked PRs remain open and were updated within the last 1–2 days:

| PR | Title | Author | Status | Last Update |
|----|-------|--------|--------|-------------|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | feat(memory): add zvec vector database memory backend | demyanrogozhin | OPEN | 2026-07-28 |
| [#1169](https://github.com/moltis-org/moltis/pull/1169) | feat(acp): expose Moltis as an ACP agent over stdio | penso | OPEN | 2026-07-27 |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | fix(channels): gate /sh and privileged tools behind a per-account operators list | penso | OPEN | 2026-07-27 |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | Add instrumentation and feedback collection infrastructure | penso | OPEN | 2026-07-27 |
| [#1173](https://github.com/moltis-org/moltis/pull/1173) | feat(pwa): make push notifications reliable and non-disruptive | penso | OPEN | 2026-07-27 |

## 4. Community Hot Topics
All five open PRs have **zero comments and zero reactions** as of this snapshot, indicating they are either **early in review** or **awaiting triage**. The most architecturally significant are:

- **#1169 (ACP agent exposure)** — Enables Moltis to act as an ACP *agent* (not just client), unlocking integration with Zed, `buzz-acp`, and custom runners. This is a **protocol-level expansion** of Moltis's interoperability surface.
- **#1170 (Privileged tool gating)** — Security hardening: `/sh` and similar host-execution tools now require explicit per-account operator authorization. Critical for multi-user deployments (Discord, group chats).
- **#1174 (Instrumentation & feedback)** — Foundational observability layer with pluggable backends and export profiles. Enables telemetry, eval pipelines, and user feedback loops — key for production hardening.

## 5. Bugs & Stability
**No new bug reports or crash issues** filed in the last 24 hours. However, two open PRs address known stability/security gaps:

| PR | Issue Addressed | Severity | Fix Status |
|----|-----------------|----------|------------|
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | `/sh` command executable by any channel member — arbitrary host command execution in group chats | **High** (RCE vector in multi-user settings) | Fix PR open, awaiting review |
| [#1173](https://github.com/moltis-org/moltis/pull/1173) | PWA push notifications silently replace prior messages (missing `renotify`) — lost alerts, no sound | **Medium** (UX/reliability) | Fix PR open, awaiting review |

## 6. Feature Requests & Roadmap Signals
The open PRs reveal **four strategic directions** likely to land in the next release cycle:

1. **Alternative memory backends** (#1158) — `zvec` + `redb` vector store behind a feature gate. Signals intent to support **pluggable, local-first vector storage** without heavy dependencies.
2. **ACP agent mode** (#1169) — Moltis becomes a first-class ACP *server*. Positions Moltis as a **universal agent runtime** consumable by any ACP client.
3. **Observability & feedback platform** (#1174) — Structured instrumentation with export profiles (traces, metrics, user feedback). Foundation for **eval-driven development** and production monitoring.
4. **PWA reliability** (#1173) — Fixes notification deduplication and disruption. Required for **credible mobile/desktop PWA experience**.

**Prediction**: #1170 (security) and #1173 (PWA bug) will likely merge first; #1169 and #1174 are larger architectural additions that may require design review.

## 7. User Feedback Summary
**No direct user feedback** (issues, discussions, or reactions) captured in the last 24 hours. The PR authors (`penso`, `demyanrogozhin`) appear to be **core maintainers** implementing planned work rather than responding to external reports. This suggests:
- Development is **internally driven** by roadmap
- Community surface area (Discord, issues) may be quiet or siloed
- No visible friction points from end users today

## 8. Backlog Watch
**No stale issues** (zero issues updated). However, **five open PRs** — all authored by maintainers — have **zero review activity** (no comments, approvals, or CI status visible in data). These represent **review debt**:

| PR | Age (days) | Risk if Stalled |
|----|------------|-----------------|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | 11 | Low — experimental backend behind feature flag |
| [#1169](https://github.com/moltis-org/moltis/pull/1169) | 2 | Medium — protocol expansion, needs design sign-off |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | 2 | **High** — security fix for RCE vector in group chats |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | 1 | Medium — foundational infra, blocks future observability work |
| [#1173](https://github.com/moltis-org/moltis/pull/1173) | 2 | Medium — PWA UX regression fix |

**Action recommended**: Prioritize review of **#1170 (security)** and **#1173 (PWA bug)**. Assign reviewers to #1169 and #1174 for architectural alignment.

---

*Data sourced from GitHub API for moltis-org/moltis. Timestamp: 2026-07-28. All links point to live GitHub objects.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-07-28

## 1. Today's Overview
The project shows **high velocity** with 48 PRs and 18 issues updated in the last 24 hours. The merge rate (~27%) indicates active review cycles. Major development themes include **third-party agent integrations** (Codex, Qoder), **native desktop automation** (computer-use tool for Windows/macOS), **unified browser automation**, **cron job fixes**, and **multi-agent isolation** — signaling a push toward enterprise-grade multi-agent orchestration. No release cut today; the codebase appears in active feature-development phase.

---

## 2. Releases
**No new releases** in the last 24 hours. Current stable version remains **2.0.1** (AgentScope 2.0.4.post1).

---

## 3. Project Progress — Merged / Closed PRs Today
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#6511](https://github.com/agentscope-ai/QwenPaw/pull/6511) | fix(crons): migrate existing final-mode jobs to stream on upgrade | Bug fix / Migration | Fixes cron `dispatch.mode=final` behavior; adds upgrade migration for existing jobs |
| [#6491](https://github.com/agentscope-ai/QwenPaw/pull/6491) | fix(desktop): bundle PawApp SDK modules | Bug fix (Desktop) | Resolves plugin install failure (`ModuleNotFoundError: qwenpaw.pawapp`) — unblocks Agent Kanban plugin |
| [#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462) | docs(sandbox): clarify native Windows sandbox support | Documentation | Corrects outdated docs; confirms native Windows sandbox (AppContainer/restricted token) |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | feat(apps): add qwenpaw-creator app | Feature | New `app`-type plugin: script → assets → storyboard → video workflow |
| [#6177](https://github.com/agentscope-ai/QwenPaw/issues/6177) | cron final delivery mode still forwards every completed event | Bug fix (closed via PR #6182) | Cron `mode=final` now suppresses intermediate events |

**Key advancement**: Cron subsystem now honors `dispatch.mode`; desktop plugin SDK bundling fixed; video-creation app added.

---

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461) | 2 👍, 2 comments | Feature | **Complete agent isolation** — prevent cross-agent memory/data leakage in multi-user deployments (QQ bots) |
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | 3 comments | Bug | **High CPU in Edge/Wayland** — large result-set rendering / WebSocket push causing tab CPU spike |
| [#6512/#6513/#6514](https://github.com/agentscope-ai/QwenPaw/issues/6512) | 1 comment each | Feature | **`execute_shell_command` output truncation** (>30 KB) — request auto-file-write or streaming |
| [#6506](https://github.com/agentscope-ai/QwenPaw/issues/6506) | 1 comment | Bug | **Sub-agent inherits `approval_level=OFF`** — child sessions still prompt despite parent setting |
| [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) | Under review | Feature | **Third-party agent architecture** — Codex, Qoder, Skills, MCP integration (extensible backend) |

**Underlying signal**: Users deploying multi-agent, multi-user systems (bots, shared servers) hit **isolation boundaries** — memory, approval, session history, workspace. This is the #1 architectural pressure.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473) Plugin "Agent Kanban" fails to install: `No module named 'qwenpaw.pawapp'` | ✅ Closed | [#6491](https://github.com/agentscope-ai/QwenPaw/pull/6491) merged — SDK bundling fixed |
| **High** | [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) Model connection fails on AgentScope Platform (v2.0.1) — empty model dropdown | 🔴 Open | None yet |
| **High** | [#6505](https://github.com/agentscope-ai/QwenPaw/issues/6505) Mission Mode: unbounded sub-sessions, no server-side iteration cap | 🔴 Open | None yet |
| **High** | [#6506](https://github.com/agentscope-ai/QwenPaw/issues/6506) Sub-agent ignores parent `approval_level=OFF` | 🔴 Open | [#6508](https://github.com/agentscope-ai/QwenPaw/pull/6508) open — fix in review |
| **Medium** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) Edge/Wayland single-tab high CPU (large results/WebSocket) | 🔴 Open | None yet |
| **Medium** | [#6510](https://github.com/github.com/agentscope-ai/QwenPaw/issues/6510) Feishu channel: Chinese paths URL-encoded → file not found | 🔴 Open | None yet |
| **Medium** | [#6512/13/14](https://github.com/agentscope-ai/QwenPaw/issues/6512) `execute_shell_command` truncates >30 KB output | 🔴 Open (3 dupes) | None yet |
| **Low** | [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) LLM response truncation (MiniMax-M3) | 🔴 Open | None yet |
| **Low** | [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457) Task mode: excessive history entries in chat list | 🔴 Open | Related: [#6507](https://github.com/agentscope-ai/QwenPaw/issues/6507) requests filtering |

---

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Version |
|---------|----------|----------------------------|
| **Complete agent isolation** (memory, tools, workspace per agent) | [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461), [#6509](https://github.com/agentscope-ai/QwenPaw/issues/6509) | 🔥 High — 2+ 👍, multi-user deployments blocked |
| **Sub-agent session grouping/filtering in history** | [#6507](https://github.com/agentscope-ai/QwenPaw/issues/6507) | 🔥 High — UX pain for Mission Mode users |
| **Multi-model per agent (parallel runs + aggregation)** | [#6505](https://github.com/agentscope-ai/QwenPaw/issues/6505) | ⚡ Medium — clear workflow need (fact-check, code review) |
| **`execute_shell_command` large-output handling (file/stream)** | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) | ⚡ Medium — 3 duplicate reports in 24h |
| **Sub-agent inherits parent `approval_level`** | [#6506](https://github.com/agentscope-ai/QwenPaw/issues/6506) + [#6508](https://github.com/agentscope-ai/QwenPaw/pull/6508) | ✅ Likely — PR open, targeted fix |
| **Native desktop GUI automation (Windows/macOS)** | [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | 🚀 In progress — large PR, accessibility-first |
| **Unified browser automation (one SDK, any backend)** | [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | 🚀 In progress — foundational refactor |
| **Third-party agent backends (Codex, Qoder, MCP)** | [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) | 🚀 In review — extensible architecture |
| **AG-UI protocol exposure (`/protocol/agui/chat`)** | [#6337](https://github.com/agentscope-ai/QwenPaw/pull/6337) | 🚀 In review — interop standard |
| **Visual context compression (PawFocus)** | [#6456](https://github.com/agentscope-ai/QwenPaw/pull/6456) | 🚀 In review — long-history optimization |
| **Volcengine / Xiaomi MiMo providers** | [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) | ✅ Likely — new built-in providers |
| **QwenPaw Creator app (video workflow)** | [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | ✅ Merged — shipped |

---

## 7. User Feedback Summary
| Pain Point | Evidence | User Context |
|------------|----------|--------------|
| **Cross-agent data leakage** | [#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461): Group bot accesses private 1-on-1 agent memory | Multi-bot QQ deployment; privacy violation |
| **Sub-session pollution in history** | [#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457), [#6507](https://github.com/agentscope-ai/QwenPaw/issues/6507): "So many conversations in history" | Mission Mode users overwhelmed |
| **Approval setting not inherited** | [#6506](https://github.com/agentscope-ai/QwenPaw/issues/6506): Workers still prompt despite `OFF` | Automation workflows broken |
| **Large command output lost** | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512): 500+ line reports truncated | Data analysis, log inspection, DB queries |
| **Chinese path encoding in Feishu** | [#6510](https://github.com/agentscope-ai/QwenPaw/issues/6510): `%E7%81%B5%E9%AD%82...` paths | Enterprise Feishu integration |
| **High CPU on Wayland/Edge** | [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460): Fan spin on dashboard tabs | Linux desktop users, ComfyUI workflows |
| **Plugin install broken** | [#6473](https://github.com/agentscope-ai/QwenPaw/issues/6473): `ModuleNotFoundError` | Desktop App Center users — **now fixed** |

**Satisfaction signal**: Users are pushing **production multi-agent deployments** (bots, servers, team workflows) and hitting architectural gaps. The fixed plugin issue (#6473) shows responsiveness; isolation bugs remain the top blocker.

---

## 8. Backlog Watch — Stale / High-Impact Items Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) LLM response truncation (MiniMax-M3) | 6 days | Provider-specific bug; affects streaming UX |
| [#6177](https://github.com/agentscope-ai/QwenPaw/issues/6177) Cron `mode=final` ignored | 12 days | **Fixed in #6182**, but migration PR #6511 just merged — verify rollout |
| [#5514](https://github.com/agentscope-ai/QwenPaw/pull/5514) Chat input queue session ID migration | 33 days | Core chat reliability; "codex" label suggests Codex integration dependency |
| [#6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) Background tool call offload refactor | 13 days | Fixes 3 bugs from #6056; foundational for long-running tools |
| [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) Scroll history migration preserves session IDs | 15 days | Data integrity for history import |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) Unified browser — one SDK, any backend | 8 days | Blocking [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) Chrome extension plugin |
| [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) Third-party agent architecture (Codex, Qoder, MCP) | 5 days | **Under review** — major extensibility feature |
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) Native desktop GUI automation (Windows/macOS) | 4 days | **Large PR** — computer-use tool, accessibility-first |

---

## Health Indicators
| Metric | Status |
|--------|--------|
| **Issue throughput** | 18 updated / 6 closed (33% closure rate) |
| **PR throughput** | 48 updated / 13 merged (27% merge rate) |
| **Critical bug fix latency** | Plugin install bug fixed in <48h (#6473 → #6491) |
| **Community engagement** | Multi-comment issues on isolation, CPU, truncation — real production usage |
| **Architectural direction** | Clear: multi-agent isolation, third-party backends, native automation, protocol interop |

**Verdict**: Project is **healthy and accelerating** toward a multi-agent platform release. The next version will likely center on **agent isolation boundaries**, **sub-agent UX**, and **third-party backend GA**.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-07-28

---

## 1. Today's Overview

ZeroClaw is in a **high-velocity stabilization phase** with 60 total items updated in the last 24 hours (10 issues, 50 PRs). No new release was cut today, but **PR #9376 (v0.8.4 release preparation)** is actively being readied for crates.io publishing — the first publishable workspace since the microkernel split. Two critical **S1 workflow-blocking bugs** dominate the issue queue: auth profile migration failure (#9474) and missing SOP job cancellation (#9425). A flaky test suite (#9357, P1/high risk) continues to poison CI reliability. The project shows strong maintainer engagement with multiple P1 fixes in review, but the open PR count (44) signals a growing review backlog.

---

## 2. Releases

**No new releases published today.**  
**Upcoming:** PR **#9376** (`chore(release): cut v0.8.4`) is open and targets `master`. It includes:
- Workspace renamed `zeroclawlabs` → `zeroclaw` so `cargo install zeroclaw` matches binary name
- 18 crates published to crates.io; 5 remain private
- Changelog generation and crate removals
- First publishable release since microkernel split (#5811)

**Migration note:** Users installing via `cargo install` will see the new package name; no breaking API changes reported for v0.8.4 (non-breaking weekly cadence per #9459 tracker).

---

## 3. Project Progress — Merged/Closed Today

| PR / Issue | Type | Summary | Impact |
|------------|------|---------|--------|
| **#9429** | Bug fix (closed) | Fixed flaky `zeroclaw-channels` tests using fixed wall-clock timeouts; moved to advisory timeouts | CI stability (macOS) |
| **#9238** | Bug fix (closed) | `config_save_isolation` test gate now inspects Windows test files | Windows test coverage restored |
| **#9476** | Feature (open, created today) | **Authenticated operator cancellation for running SOP jobs** — addresses #9425 (S1) | Unblocks web dashboard SOP control |
| **#9376** | Release prep (open) | v0.8.4 crates.io publishing, renaming, changelog | Enables `cargo install zeroclaw` |
| **#9377** | Enhancement (open) | **Complete Chinese (zh) translations** — 1,457 UI keys + CLI + TUI | i18n milestone |
| **#9398** | CI (open) | Advisory macOS & Windows test jobs added to Quality Gate | Cross-platform visibility |
| **#9439** | Test fix (open) | Heap-pin large futures to fit Windows test-thread stack | Windows CI reliability |
| **#9424** | Bug fix (open, in-progress) | Reject semantic-empty terminal completions (incl. Reliable fallback) | Prevents blank successful responses |

> **Note:** Only 2 issues/PRs closed in last 24h; most progress is in open PRs under review.

---

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| **#9474** [Bug] Auth profile store fails to load — `model_provider` required, no migration | 1 comment, updated today, **S1 workflow blocked** | Users on older profiles cannot run any `zeroclaw auth` command; needs automatic migration or compat layer |
| **#9425** [Bug] Running SOP jobs have no operator cancellation path | 1 comment, **S1 workflow blocked** | Web dashboard shows running SOPs but no Stop/Cancel; PR #9476 opened today to fix |
| **#9357** [Bug] `cargo test -p zeroclaw-runtime --lib` flakes 19/20 runs, poisons global mutex | 5 comments, **P1 high risk**, created 2026-07-25 | CI reliability crisis; flaky assertion cascades into further failures |
| **#9459** [Tracker] v0.8.5 weekly non-breaking release | 0 comments, updated today | Release coordination; scope/routing decisions needed |
| **#8966** [Feature] Carry live provider identity on usage events, resolve context window from serving provider | Long-running (created 2026-07-11), **XL size, high risk** | Observability & cost tracking across provider fallbacks (Reliable, Anthropic, etc.) |

**Underlying theme:** **Operational reliability** — auth migration, SOP control, test flakes, and provider observability are all blockers for production-grade usage.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **S1 — Workflow Blocked** | **#9474** Auth profile store fails to load (`provider` → `model_provider` rename, no migration) | Open | None yet |
| **S1 — Workflow Blocked** | **#9425** No operator cancellation for running SOP jobs | Open | **#9476** (opened today) |
| **P1 / High Risk** | **#9357** `zeroclaw-runtime` lib tests flake 95%, poison global mutex | Open | None yet |
| **P1 / High Risk** | **#9320** Cron agent jobs lack wall-clock timeout → lock held forever | Open | **#9320** (PR open, needs author action) |
| **P1 / High Risk** | **#9304** OpenAI-compatible providers reject `reasoning_effort` on tool-bearing requests (HTTP 400) | Open | **#9304** (PR open, needs author action) |
| **P2 / Medium Risk** | **#9321** Telegram: unauthorized media messages (voice, photo, doc) produce no notice | Open | **#9321** (PR open) |
| **P2 / Medium Risk** | **#9291** `zeroclaw desktop` fails to detect AppImage / uses broken download URL | Open | **#9291** (PR open) |
| **P2 / Medium Risk** | **#9296** `zeroclaw config patch --json` emits bare errors instead of JSON envelopes for 2 paths | Open | **#9296** (PR open) |
| **Low Risk** | **#9429** Fixed wall-clock timeouts in channel tests flake on slow runners | **Closed** | Fixed |
| **Low Risk** | **#9238** Windows test gate skips all `tests/` files | **Closed** | Fixed |

> **Critical gap:** #9474 (auth migration) has **no fix PR yet** despite being S1. #9357 (test flake) remains open with no PR after 3 days.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source: Issues/PRs |
|-----------------------------------------------|
| **v0.8.5 weekly release** (#9459 tracker) — non-breaking cadence established; scope being finalized |
| **Chinese i18n completion** (#9377) — 100% UI/CLI/TUI keys; signals i18n maturity for other locales |
| **Provider identity in usage events** (#8966, XL) — enables cost attribution, context-window awareness across fallbacks; likely v0.9+ |
| **Operator cancellation for SOPs** (#9476) — now in PR; unblocks web dashboard for production SOP runs |
| **Windows/macOS advisory CI** (#9398) — platform parity investment; may become required gates |
| **ScopedToolRegistry refactor** (#9319, L) — engine tool registry sealed; enables better isolation/testing |
| **Cron job timeouts** (#9320) — operational hardening for scheduled agents |
| **vi_verify tool removal** (#9472) — security hardening: model-callable tool with unsigned credentials removed |

**Prediction:** v0.8.4 lands this week (PR #9376). v0.8.5 will include SOP cancellation, cron timeouts, provider reasoning_effort fix, and i18n. Provider identity observability (#8966) is too large for weekly cadence — target v0.9.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Auth broken after upgrade** | #9474: "Every `zeroclaw auth` subcommand fails outright" — no migration from `provider` → `model_provider` | All users with pre-rename config stores |
| **Cannot stop runaway SOP jobs** | #9425: Web dashboard shows running SOPs but "no Stop or Cancel action" | Web dashboard operators |
| **CI flakes block merges** | #9357: 19/20 test runs fail; "one flaky assertion poisons a global mutex" | Contributors, maintainers |
| **Tool-bearing reasoning models fail** | #9304: OpenAI-compatible providers return HTTP 400 on `reasoning_effort` + tools | Users of reasoning models (o1, etc.) via compatible providers |
| **Cron jobs hang indefinitely** | #9320: "hung run never returned… lock held until daemon restart" | Users of scheduled agents |
| **Windows test coverage blind** | #9238 (closed): gate skipped all `tests/` files on Windows | Windows developers |
| **Telegram media from unauthorized users silent** | #9321: voice/audio/document/photo produce no notice | Telegram channel operators |
| **Desktop install broken on Linux** | #9291: AppImage detection fails, download URL broken | Linux desktop users |

**Satisfaction signal:** High engagement on fixes (multiple P1 PRs in review), but **auth migration gap (#9474) is a regression** that will frustrate existing users immediately on upgrade.

---

## 8. Backlog Watch — Stale High-Value Items Needing Maintainer Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| **#8966** feat(agent): carry live provider identity on usage events | 17 days | **XL, high risk** — foundational for observability, cost tracking, context-window awareness; touches provider, runtime, agent, channel, web, zerocode | Open, needs author action |
| **#9319** refactor(runtime): seal engine tool registry as ScopedToolRegistry | 5 days | **L refactor** — architectural cleanup enabling testability & isolation; touches agent, channel, skills, tools | Open, needs author action |
| **#9376** chore(release): cut v0.8.4 — crates.io publishing | 2 days | **Release blocker** — first publishable workspace since microkernel split; 18 crates, rename, changelog | Open, needs author action |
| **#9304** fix(providers): omit reasoning_effort on tool-bearing requests | 5 days | **P1, high risk** — breaks tool use with reasoning models on all OpenAI-compatible providers | Open, needs author action |
| **#9320** fix(cron): bound agent job runs with wall-clock timeout | 5 days | **P1, high risk** — prevents daemon lockup on hung scheduled jobs | Open, needs author action |
| **#9474** [Bug] Auth profile migration missing | 1 day | **S1** — zero-day for upgrading users; no PR yet | Open, **no fix PR** |
| **#9357** [Bug] Runtime lib test flake poisons mutex | 3 days | **P1, high risk** — CI reliability; 19/20 failure rate | Open, **no fix PR** |
| **#8692** [Tracker] Maintainer decision queue for RFCs/design | 24 days | **Process tracker** — 1 comment; may indicate decision backlog | Open |

> **Action items for maintainers:**  
> 1. **Triage #9474 immediately** — write migration or compat shim.  
> 2. **Assign #9357** — flake is poisoning CI for all contributors.  
> 3. **Review #9304, #9320, #9376** — all P1/release-critical with "needs-author-action".  
> 4. **Decide on #8966 scope** — XL PR open 17 days; either split or schedule for v0.9.

---

## Links Reference

- Issues: #9357, #9474, #9425, #8692, #9429, #9238, #9459, #9473, #9471, #9470  
- PRs: #9476, #9304, #9320, #9319, #9369, #9376, #9377, #9398, #9296, #9321, #9291, #9292, #9317, #9439, #9416, #9412, #9407, #8966, #9472, #9424

*Digest generated 2026-07-28 from GitHub data (issues/PRs updated in last 24h).*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*