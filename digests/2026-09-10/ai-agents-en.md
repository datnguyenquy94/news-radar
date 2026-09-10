# OpenClaw Ecosystem Digest 2026-09-10

> Issues: 153 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-10 04:16 UTC

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

# OpenClaw Project Digest — 2026-09-10

---

## 1. Today's Overview

OpenClaw shows **exceptionally high development velocity** with 500 PRs and 153 issues updated in the last 24 hours. The project is in active maintenance mode with no new release today, but a heavy focus on stability fixes: zombie process leaks, session-state corruption, Windows gateway restart failures, and Codex binding regressions. The merge rate (243 PRs closed/merged) indicates strong maintainer throughput. Critical P0/P1 bugs dominate the open issue landscape, particularly around message loss, session recovery, and cross-platform runtime degradation.

---

## 2. Releases

**No new releases published today.** The latest version remains `2026.9.3` (commit `1391f7c`). Several open issues (#142585, #140162, #143580) report regressions in this version, suggesting a patch release may be imminent.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary |
|----|------|---------|
| [#141836](https://github.com/openclaw/openclaw/pull/141836) | **Deepgram/Voice** | Added Flux model support for voice-note transcription (WebSocket `/v2/listen`), replacing #129442 |
| [#142626](https://github.com/openclaw/openclaw/pull/142626) | **iMessage** | Restored typing indicators/read receipts after bridge recovery (automerge armed) |
| [#138592](https://github.com/openclaw/openclaw/pull/138592) | **Realtime/Voice** | Fixed `conversation.item.truncate` using wall-clock instead of audio played time |
| [#109443](https://github.com/openclaw/openclaw/pull/109443) | **Transcript Repair** | Fixed tool-result dropping when tool-call IDs repeat across turns |
| [#108693](https://github.com/openclaw/openclaw/pull/108693) | **iOS UI** | Fixed premature "Jump to latest" button during streaming |
| [#106564](https://github.com/openclaw/openclaw/pull/106564) | **Discord** | Fixed uncaught TypeError in `probeDiscord` on non-spec fetch body streams |
| [#129442](https://github.com/openclaw/openclaw/pull/129442) | **Deepgram** | Closed (superseded by #141836) — Flux model support |

**Pattern:** Most merged PRs are targeted bug fixes for specific regressions (voice, transcript repair, channel bridges, mobile UI). Several carry `merge-risk: 🚨` labels indicating careful review.

---

## 4. Community Hot Topics (Most Discussed Issues/PRs)

### Top Issues by Comment Count

| Issue | Comments | 👍 | Core Problem |
|-------|----------|-----|--------------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 15 | 1 | **Zombie process leak** — hook/tool child processes unreaped, causing runtime degradation over time (P1, `impact:crash-loop`, `impact:message-loss`) |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) | 12 | 0 | **Overflow retry** succeeds with toolResult but no final assistant response/delivery (P1, `impact:message-loss`) |
| [#127148](https://github.com/openclaw/openclaw/issues/127148) | 11 | 0 | **Codex sessions.compact** acquires second app-server → active-writer conflict (P1, needs product decision) |
| [#101763](https://github.com/openclaw/openclaw/issues/101763) | 10 | 1 | **Hosted Molty** model selector sends `claude-opus-4.8` (dotted) instead of `claude-opus-4-8` — API rejects (P0, `impact:ux-release-blocker`) |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) | 9 | 0 | **memory-core** Gateway reacquires reindex lock on every start → 19 GB orphaned temp DBs, index unrepairable (P1, `🐚 platinum hermit`) |

### Top PRs by Activity (All Open, Created Today)

| PR | Comments | Focus |
|----|----------|-------|
| [#143676](https://github.com/openclaw/openclaw/pull/143676) | — | Fix: distinguish interrupted dev runners from completed shutdowns |
| [#143675](https://github.com/openclaw/openclaw/pull/143675) | — | Fix: discard abandoned publication uploads (relates #134931) |
| [#143671](https://github.com/openclaw/openclaw/pull/143671) | — | Fix UI: preserve plugin request ownership (web-ui) |
| [#143615](https://github.com/openclaw/openclaw/pull/143615) | — | **Large stack**: macOS selected-conversation actions (needs proof) |
| [#143610](https://github.com/openclaw/openclaw/pull/143610) | — | **Large stack**: iOS selected-conversation actions (needs proof) |
| [#143587](https://github.com/openclaw/openclaw/pull/143587) | — | **Large stack**: Gateway profile binding (needs proof) |

**Underlying needs:** 
- **Runtime stability** (zombies, memory leaks, crash loops) is the loudest pain point
- **Session continuity** across restarts, compactions, and model switches remains fragile
- **Cross-platform parity** (Windows gateway, iOS/macOS conversation actions) is actively being built
- **Voice/realtime correctness** (truncate timing, Flux models) sees concentrated fixes

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR? | Key Impact |
|----------|-------|--------|---------|------------|
| **P0** | [#142585](https://github.com/openclaw/openclaw/issues/142585) Doctor refuses valid legacy workspace/attestation import | Open | No | Migration blocker, `impact:ux-release-blocker` |
| **P0** | [#140162](https://github.com/openclaw/openclaw/issues/140162) Windows gateway restart kills booting gateway at 181s timeout | Open | No | Full outage on slow boot, `impact:crash-loop`, `impact:ux-release-blocker` |
| **P0** | [#141191](https://github.com/openclaw/openclaw/issues/141191) System-expert probe rejects valid SecretRef on `apiKey` | Open | No | Auth failure for custom providers, `impact:ux-release-blocker` |
| **P0** | [#101763](https://github.com/openclaw/openclaw/issues/101763) Hosted Molty model ID dotted vs dashed | Closed | Likely | API rejection on every reply |
| **P1** | [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process accumulation from hooks/tools | Open | No | Runtime degradation, crash loop |
| **P1** | [#132762](https://github.com/openclaw/openclaw/issues/132762) Overflow retry ends without final delivery | Closed | Likely | Message loss |
| **P1** | [#127148](https://github.com/openclaw/openclaw/issues/127148) Codex compact → double app-server conflict | Open | No | Session-state corruption |
| **P1** | [#143640](https://github.com/openclaw/openclaw/issues/143640) Memory index publish in single IMMEDIATE TX >5s → busy timeout | Open | No | Concurrent agent DB writes fail |
| **P1** | [#143580](https://github.com/openclaw/openclaw/issues/143580) Heartbeat lane sends continuation without transcript | Open | No | Confused non-silent reply delivered |
| **P1** | [#139274](https://github.com/openclaw/openclaw/issues/139274) Native `/codex bind` drops voice-note attachments/STT | Open | No | Message loss (voice notes) |
| **P2** | [#136311](https://github.com/openclaw/openclaw/issues/136311) Memory-core reindex lock never released, 19 GB orphans | Open | No | Index unrepairable, disk exhaustion |
| **P2** | [#123792](https://github.com/openclaw/openclaw/issues/123792) Assistant turns render twice (CLI backends) | Open | [#123792 linked PR](https://github.com/openclaw/openclaw/pull/123792) | UX friction, duplicate persistence |
| **P2** | [#143646](https://github.com/openclaw/openclaw/issues/143646) Control UI: cron.sessionRetention renders 'Unsupported schema node' | Open | No | Config UI broken |
| **P2** | [#141747](https://github.com/openclaw/openclaw/issues/141747) `<system-reminder>` injects ~686 tokens/turn, no opt-out | Open | No | Token bloat, cost/latency |
| **P2** | [#90499](https://github.com/openclaw/openclaw/issues/90499) Discord DM read rejects allowlisted 1:1 channels | Open | No | Security/permission regression |

**Stability signal:** 11 P0/P1 issues open, several with `impact:crash-loop` and `impact:message-loss`. Windows, session recovery, and memory-core are current hotspots.

---

## 6. Feature Requests & Roadmap Signals

| Issue/PR | Signal | Likelihood for Next Version |
|----------|--------|----------------------------|
| [#143615](https://github.com/openclaw/openclaw/pull/143615) / [#143610](https://github.com/openclaw/openclaw/pull/143610) / [#143587](https://github.com/openclaw/openclaw/pull/143587) | **Conversation actions & profile binding** (iOS/macOS/gateway) — large coordinated stack, `status: 📣 needs proof` | High — active development, cross-platform |
| [#132453](https://github.com/openclaw/openclaw/pull/132453) / [#132454](https://github.com/openclaw/openclaw/pull/132454) | **Codex usage per saved login** — quota windows, credit balance in UI | High — `ready for maintainer look`, depends on each other |
| [#127099](https://github.com/openclaw/openclaw/pull/127099) | **Docker Sandboxes docs page** — discoverability for existing feature | High — `ready for maintainer look`, docs-only |
| [#143665](https://github.com/openclaw/openclaw/pull/143665) | **Telegram: retain observed group context with mention gating** across restarts | Medium — `ready for maintainer look`, e2e proof |
| [#130422](https://github.com/openclaw/openclaw/issues/130422) | **Exec approval prompts: description/intent field** | Medium — stale, `needs-product-decision` |
| [#112857](https://github.com/openclaw/openclaw/issues/112857) | **Safe model routing: shadow-mode candidate admission** | Low — `off-meta tidepool`, Phase 0-1, needs security review |
| [#99611](https://github.com/openclaw/openclaw/issues/99611) | **Cross-conversation memory for personal assistants** | Low — `off-meta tidepool`, needs security review |
| [#138614](https://github.com/openclaw/openclaw/issues/138614) | **iOS: hardware keyboard Return/Cmd+Return to send** | Medium — `fix-shape-clear`, `queueable-fix`, UX friction |

**Prediction:** The conversation-actions/profile-binding stack (iOS/macOS/gateway) and Codex usage UI are closest to landing. Docker Sandboxes docs will likely ship in next docs deploy. Shadow routing and cross-conversation memory remain exploratory.

---

## 7. User Feedback Summary (Real Pain Points)

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Zombie processes degrade runtime** | [#97616](https://github.com/openclaw/openclaw/issues/97616) — "Over time these accumulate as zombies... causing runtime degradation" | Operators must restart gateway periodically; silent reliability killer |
| **Windows gateway restart is broken** | [#140162](https://github.com/openclaw/openclaw/issues/140162) — "kills a gateway that is actively booting... full outage" | Windows users cannot reliably restart; 181s timeout too aggressive |
| **Session state lost on restart/compact** | [#127148](https://github.com/openclaw/openclaw/issues/127148), [#126923](https://github.com/openclaw/openclaw/issues/126923), [#132762](https://github.com/openclaw/openclaw/issues/132762) | Codex bindings, compaction, and overflow retries all break session continuity |
| **Model selector sends invalid IDs** | [#101763](https://github.com/openclaw/openclaw/issues/101763) — "API receives `claude-opus-4.8` instead of `claude-opus-4-8`" | Hosted Molty users completely blocked |
| **Memory index unrecoverable** | [#136311](https://github.com/openclaw/openclaw/issues/136311) — "19 GB orphaned temp DBs... index unrepairable" | Data loss risk, manual cleanup required |
| **Voice notes dropped in Codex bind** | [#139274](https://github.com/openclaw/openclaw/issues/139274) — "downloaded voice note can reach Codex without transcript or attachment" | Telegram/voice users lose input |
| **System-reminder token bloat** | [#141747](https://github.com/openclaw/openclaw/issues/141747) — "~686 tokens/turn injected with no opt-out" | Cost/latency concern for long sessions |
| **iOS "Jump to latest" premature** | [#108693](https://github.com/openclaw/openclaw/issues/108693) — appears while assistant still writing | Mobile UX confusion |

**Satisfaction signals:** Users file detailed repros with versions, logs, and environment specs. Several issues carry `👍` reactions (community validation). The `clawsweeper` labels show automated triage is active.

---

## 8. Backlog Watch — Long-Unanswered Important Items

| Item | Age | Status | Why It Matters |
|

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-10)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows a **bimodal maturity distribution**: a handful of projects (OpenClaw, Hermes Agent, CoPaw, NanoBot) operate at high velocity with daily merge rates of 10–250 PRs, while others (IronClaw, NanoClaw, PicoClaw, ZeroClaw) are in pre-release stabilization or architectural redesign phases. **No project shipped a release today**, indicating a sector-wide focus on bug-fix accumulation over feature delivery. Security hardening, session-state integrity, cross-platform parity, and provider-protocol compliance dominate engineering attention. The landscape is consolidating around **multi-channel gateways, plugin/extension systems, and durable memory architectures** as the primary differentiators.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged PRs | Release Status | Health Score* |
|---------|--------------|-----------|------------|----------------|---------------|
| **OpenClaw** | 153 | 500 | 243 | v2026.9.3 (stale) | 🟢 **Excellent** |
| **Hermes Agent** | 17 | 50 | 10 | v0.21.1 (stale) | 🟢 **Healthy** |
| **CoPaw** | 21 | 34 | 11 | v2.2.0 (2.2.1b2 testing) | 🟢 **Healthy** |
| **NanoBot** | 4 | 21 | 12 | Unreleased | 🟢 **Healthy** |
| **ZeroClaw** | 13 | 50 | 1 | Unreleased | 🟡 **Active/Pre-release** |
| **LobsterAI** | 20 | ~10 | 10 | Bundled OpenClaw v2026.8.1 | 🟡 **Stabilizing** |
| **IronClaw** | 1 | 4 | 0 | Unreleased | 🟡 **Pre-release** |
| **NanoClaw** | 1 | 6 | 3 | Between versions | 🟡 **Maintenance** |
| **PicoClaw** | 3 | 5 | 1 | Unreleased | 🟡 **Maintenance** |
| **NullClaw** | 0 | 0 | 0 | — | 🔴 **Inactive** |
| **Moltis** | 0 | 0 | 0 | — | 🔴 **Inactive** |
| **ZeptoClaw** | 0 | 0 | 0 | — | 🔴 **Inactive** |

*Health Score: 🟢 = high merge throughput + responsive bug fixes; 🟡 = active but pre-release or stabilizing; 🔴 = no 24h activity.

---

## 3. OpenClaw's Position

### Advantages vs Peers
- **Scale of throughput**: 500 PRs/24h vs next highest (ZeroClaw: 50, Hermes: 50) — 10× velocity
- **Maintainer capacity**: 243 merges/day indicates a large, coordinated review team
- **Breadth of surface area**: Voice/realtime, iMessage/Discord/Telegram bridges, iOS/macOS/Windows desktop, memory-core, Codex bindings — covers the full stack
- **Ecosystem gravity**: LobsterAI bundles OpenClaw; NanoClaw, PicoClaw, ZeroClaw share naming lineage suggesting fork/derivation relationships

### Technical Approach Differences
| Dimension | OpenClaw | Peers |
|-----------|----------|-------|
| **Architecture** | Monolithic gateway + plugin system | NanoBot/CoPaw: Modular plugin runtime; ZeroClaw: RFC-driven trait-based decomposition |
| **Session Model** | Centralized gateway-owned | Hermes: TUI + desktop remote; ZeroClaw: Runtime-owned session backend (RFC #9487) |
| **Sandboxing** | Implicit via tool execution | NanoBot: Seatbelt (macOS), opt-in; ZeroClaw: Granular sandbox policy RFC (#6996) |
| **Provider Model** | Built-in + plugin | Hermes: Nous proxy + multi-provider; IronClaw: MCP-first; NanoBot: OpenCode/OpenRouter headers |

### Community Size Comparison
- **OpenClaw**: 153 issues + 500 PRs updated → **~100+ active contributors** (inferred from merge rate)
- **Hermes/CoPaw/NanoBot**: 20–50 items updated → **~10–20 active contributors**
- **Others**: ≤13 items → **<5 active contributors**

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Session-state durability & recovery** | OpenClaw (#127148, #132762), Hermes (#107070), CoPaw (#7237, #7661), ZeroClaw (#9487) | Survive restarts, compaction, overflow retries, cross-channel handoff without message loss or stale turn replay |
| **Cross-platform gateway parity** | OpenClaw (Windows #140162), PicoClaw (deltachat startup), IronClaw (WebChat v2 IME), CoPaw (Windows #7363) | Windows startup timeouts, IME composition handling, event-loop blocking on desktop |
| **Provider protocol compliance** | NanoBot (#5662: OpenCode header), Hermes (#104505: Responses API), IronClaw (#8084: SEP-414), ZeroClaw (#10736: streaming fallback) | Rapid adaptation to upstream breaking changes (headers, endpoints, auth) |
| **Memory/knowledge persistence** | NanoBot (#5721: MemCode), LobsterAI (#2046, #2216), CoPaw (#7613: OpenViking), ZeroClaw (#10526) | Cross-session, cross-device, provider-agnostic long-term memory with local embedding fallback |
| **Security hardening** | NanoBot (#5536: exec sandbox), LobsterAI (4 critical: #2176, #2286, #2287, #2288), Hermes (#105774: token leak), CoPaw (#7658: backup perms) | Exec sandbox escape, credential leakage, SSRF, arbitrary file read, token proxy replay |
| **Channel reliability & threading** | OpenClaw (iMessage #142626), NanoBot (Telegram #5707, Discord #5720), CoPaw (Feishu #7011), PicoClaw (QQ #1349, IRC #3354) | Command routing, threading replies, compaction notices respecting config, rich-media parsing |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Technical Architecture |
|---------|---------------|--------------|------------------------|
| **OpenClaw** | **Full-stack reference platform** | Platform builders, enterprise deployments | Monolithic gateway + plugin registry; centralized session ownership |
| **Hermes Agent** | **Desktop-first multi-modal UX** | Power users, researchers (Nous ecosystem) | TUI + Electron desktop; plugin SDK (Radio); skill marketplace |
| **CoPaw** | **Multi-channel production agent** | Teams, self-hosters, Chinese-market integrations (Feishu, WeCom, QQ) | Rust core + TypeScript console; history DB with FTS; skill marketplace |
| **NanoBot** | **WebUI-centric, provider-agnostic** | Developers, multi-device users | Go gateway + React WebUI; plugin memory backends; OpenCode/OpenRouter optimized |
| **ZeroClaw** | **Architectural purity, RFC-governed** | Framework authors, long-term maintainers | Trait-based decomposition (session, attachment, sandbox, plugin); WASM plugin runtime |
| **IronClaw** | **MCP-first, security-isolated** | Extension authors, multi-tenant operators | Extension sandboxing; hosted MCP catalog isolation; SEP-414 attribution |
| **LobsterAI** | **Localized OpenClaw derivative** | Chinese enterprise/users (NetEase models) | OpenClaw fork + i18n, NetEase model integration, Electron hardening |
| **NanoClaw** | **Lightweight, cross-repo contract** | Edge/embedded, quota-governed deployments | Separate gateway (nanoco-gw) + CLI; SQLite threading; usage allowance surfacing |
| **PicoClaw** | **Edge/IoT messaging bot** | Ultra-low-memory devices (RISC-V, old phones) | Go; channel-rich (QQ, IRC, deltachat); worker-mode proposal for offloading |

---

## 6. Community Momentum & Maturity

### Tier 1: Rapid Iteration (Daily Merge Rate >10)
- **OpenClaw** — 243 merges/day; P0/P1 bug backlog but high throughput
- **CoPaw** — 11 merges/day; test coverage +5pp in single sprint; 2.2.1 patch imminent
- **NanoBot** — 12 merges/day; same-day fixes for user-reported regressions
- **Hermes Agent** — 10 merges/day; same-day PRs for issues filed today

### Tier 2: Stabilizing / Pre-Release (Active but <10 merges/day)
- **LobsterAI** — 10 merges today, all OpenClaw v2026.8.1 regression fixes; security backlog unaddressed
- **ZeroClaw** — 1 merge (Windows stack fix); 50 PRs open, mostly XL-sized RFC implementations
- **IronClaw** — 0 merges; 4 PRs open (security, protocol, validation, Telegram UX)
- **NanoClaw** — 3 merges (quota UX, onboarding, threading); recurrence bug unfixed

### Tier 3: Maintenance Mode (Sporadic)
- **PicoClaw** — 1 merge (QQ rich media); critical bugs closed stale without fixes

### Tier 4: Inactive
- **NullClaw, Moltis, ZeptoClaw** — Zero 24h activity

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence Across Projects | Strategic Value |
|-------|--------------------------|-----------------|
| **Memory externalization & portability** | NanoBot (#5721 MemCode), CoPaw (#7613 OpenViking, #7656 MemCode), LobsterAI (#2046), ZeroClaw (#10526) | **High** — Users demand cross-device, cross-deployment continuity; plugin memory backends becoming standard interface |
| **MCP as universal tool protocol** | IronClaw (catalog isolation #8090, SEP-414 #8084), ZeroClaw (A2A #9324), Hermes (Kimi fallback #107067), NanoBot (OpenCode header #5662) | **High** — MCP compliance is table-stakes; security isolation and caller attribution are next differentiation layer |
| **Session ownership moving to runtime** | ZeroClaw RFC #9487 (SessionBackend), OpenClaw (gateway-owned), Hermes (TUI gateway session.create) | **Medium-High** — Decoupling session lifecycle from transport enables multi-channel, multi-device seamlessness |
| **WASM plugin runtimes for extensibility** | ZeroClaw RFC #10076, Hermes (Radio SDK plugin #107072), CoPaw (memory plugins #7616) | **Medium** — Sandboxed, typed extensions replace unsafe native plugins; enables marketplace safety |
| **Provider-agnostic routing & fallback** | Hermes (auxiliary fallback #107079), ZeroClaw (#10736 streaming fallback), NanoBot (OpenRouter image gen #5718) | **High** — Users expect automatic failover; shadow routing (OpenClaw #112857) emerging |
| **Security-first defaults** | LobsterAI (4 critical advisories), NanoBot (#5536 fail-closed), Hermes (#105774 token leak), CoPaw (#7658 backup perms) | **Critical** — Local file read, token replay, SSRF are exploited; "secure by default" is a competitive requirement |
| **Cross-channel threading & identity** | OpenClaw (iMessage typing #142626), NanoBot (Telegram/Discord), CoPaw (Feishu stop leak #7011), PicoClaw (QQ/IRC threading) | **High** — Multi-channel deployments expose session/identity leaks; routing correctness is a quality gate |

---

**Bottom Line for Decision-Makers**: The ecosystem is **consolidating around three architectural pillars** — **durable session/memory layer**, **MCP-secured tool protocol**, and **plugin/WASM extensibility** — with **security hardening as a non-negotiable baseline**. Projects investing in these (ZeroClaw's RFCs, IronClaw's MCP isolation, CoPaw/NanoBot's memory plugins) are positioning for the next maturity wave. OpenClaw remains the velocity leader but carries significant P0/P1 debt; derivatives (LobsterAI, NanoClaw) inherit both its power and its regressions.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-10

## 1. Today's Overview
NanoBot shows **high maintenance velocity** with 21 PRs updated and 4 issues touched in the last 24 hours. The project is actively polishing its WebUI, channel integrations (Telegram, Discord), provider compatibility (OpenCode, OpenRouter), and execution sandboxing. No new release was cut today, but 12 PRs were merged/closed — indicating a steady stream of bug fixes, UX improvements, and security hardening. Two new feature requests emerged: durable cross-session memory (via MemCode) and OpenRouter native image generation.

---

## 2. Releases
**No new releases today.** The last release information is not provided in the dataset.

---

## 3. Project Progress — Merged/Closed PRs (12)

| PR | Area | Summary |
|----|------|---------|
| [#5710](https://github.com/HKUDS/nanobot/pull/5710) | WebUI | Reorganized sidebar: separated Projects, Topics, Automations; project-scoped navigation; topic history moved to main panel. |
| [#5707](https://github.com/HKUDS/nanobot/pull/5707) | Telegram | Fixed routing for `/compact` and `/evaluator-prompt` through command router; added to allowlist regex. |
| [#5708](https://github.com/HKUDS/nanobot/pull/5708) | Exec | Fixed UTF-8 corruption in streaming output by using incremental decoders per stdout/stderr reader. |
| [#5715](https://github.com/HKUDS/nanobot/pull/5715) | WebUI | Honored persisted `metadata.webui=true` marker for session titles after gateway restart (fixes #5647). |
| [#5704](https://github.com/HKUDS/nanobot/pull/5704) | WebUI | Expanded settings with autosave: validated mutation endpoint, feature dialogs, advanced section, explicit save for listeners/multiline. |
| [#5662](https://github.com/HKUDS/nanobot/pull/5662) | Providers | Added `x-opencode-session` header to `OpenAICompatProvider` for OpenCode Zen/Go prompt-cache optimization (closes #5661). |
| [#5628](https://github.com/HKUDS/nanobot/pull/5628) | Exec/Security | Added opt-in `seatbelt` sandbox backend for macOS using `/usr/bin/sandbox-exec`; preserves workspace RW, RO media, extra roots. |
| [#5717](https://github.com/HKUDS/nanobot/pull/5717) | WebUI | Preserved project selection when creating topic from project menu; used `history.pushState` to avoid route-event race. |
| [#5703](https://github.com/HKUDS/nanobot/pull/5703) | WebUI/Perf | Reduced repeated DOM scans, bounded history rendering, indexed prompt elements once, cached replay data. |
| [#5716](https://github.com/HKUDS/nanobot/pull/5716) | WebUI | Refreshed skill suggestions in picker on open (fixes NAN-108). |
| [#5714](https://github.com/HKUDS/nanobot/pull/5714) | WebUI | Kept edit diffs outside reasoning folds in `diff`/`collapsed_diff` modes for independent accessibility. |
| [#5720](https://github.com/HKUDS/nanobot/pull/5720) | Channels | Made automatic compaction notices respect `channels.sendProgress: false` (fixes #5719). |

**Key themes:** WebUI polish (sidebar, settings, titles, performance, diffs, skills), channel command parity (Telegram, Discord), provider header compliance (OpenCode), execution hardening (UTF-8, macOS sandbox).

---

## 4. Community Hot Topics

| Item | Type | Signal | Analysis |
|------|------|--------|----------|
| [#5721](https://github.com/HKUDS/nanobot/issues/5721) | Issue (OPEN) | **External integration proposal** — MemCode CEO Vivek Gupta proposes hosted/self-managed memory backend for cross-deployment memory sharing. | Strong signal: memory is a core differentiator; externalizing it enables multi-device, team, and ephemeral-agent workflows. Likely to influence roadmap if maintainers accept plugin architecture. |
| [#5661](https://github.com/HKUDS/nanobot/issues/5661) → [#5662](https://github.com/HKUDS/nanobot/pull/5662) | Issue+PR (CLOSED) | **Provider compliance** — OpenCode mandated `x-opencode-session` header after 2026-09-06 for prompt caching; NanoBot implemented in 5 days. | High responsiveness to upstream breaking changes; shows provider ecosystem awareness. |
| [#5719](https://github.com/HKUDS/nanobot/issues/5719) → [#5720](https://github.com/HKUDS/nanobot/pull/5720) | Issue+PR (OPEN/CLOSED) | **Discord UX** — Auto-compaction notices bypassed `sendProgress: false`; fixed same day. | Channel config consistency is a user-facing reliability concern; quick turnaround builds trust. |
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | PR (OPEN, P1) | **Security hardening** — Exec tool “fail closed” when restricted shell lacks sandbox (fixes #4072). | Long-standing path-traversal risk via symlinks/expansion; addresses defense-in-depth. Still open — needs review. |

---

## 5. Bugs & Stability — Today’s Reports & Fixes

| Severity | Issue/PR | Status | Description |
|----------|----------|--------|-------------|
| **High (P1)** | [#5536](https://github.com/HKUDS/nanobot/pull/5536) | OPEN | Exec: restricted shell could escape via symlinks/shell expansion when no sandbox present. Fix: fail closed if sandbox unavailable. |
| **High (P2)** | [#5647](https://github.com/HKUDS/nanobot/issues/5647) → [#5715](https://github.com/HKUDS/nanobot/pull/5715) | FIXED | WebUI session titles lost after restart when frontend envelope omitted `webui` flag; fixed by honoring persisted `metadata.webui`. |
| **Medium (P2)** | [#5719](https://github.com/HKUDS/nanobot/issues/5719) → [#5720](https://github.com/HKUDS/nanobot/pull/5720) | FIXED | Discord: auto-compaction messages (`Compressing context…`, `Context compacted.`) ignored `sendProgress: false`. |
| **Medium (P2)** | [#5707](https://github.com/HKUDS/nanobot/pull/5707) | FIXED | Telegram: `/compact` and `/evaluator-prompt` silently dropped by allowlist regex. |
| **Medium (P2)** | [#5708](https://github.com/HKUDS/nanobot/pull/5708) | FIXED | Exec: UTF-8 corruption in streaming output when multi-byte char split across 4KB reads. |
| **Medium (P2)** | [#5714](https://github.com/HKUDS/nanobot/pull/5714) | FIXED | WebUI: edit diffs hidden inside collapsible reasoning folds, inaccessible when collapsed. |
| **Low** | [#4819](https://github.com/HKUDS/nanobot/pull/4819) | OPEN (stale) | Memory: `WeakValueDictionary` for consolidation locks can lose locks under GC, allowing concurrent consolidation. |
| **Low** | [#4820](https://github.com/HKUDS/nanobot/pull/4820) | OPEN (stale) | Runtime: non-string `url` (e.g., `123`) coerced into cache signature `web_fetch:123`, polluting cache. |

**Note:** 6 of 8 bugs have fix PRs (5 merged, 1 open). Two older memory/runtime bugs remain unmerged.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **Durable cross-session memory backend** | [#5721](https://github.com/HKUDS/nanobot/issues/5721) (MemCode) | **Medium** | Strategic value high; requires plugin/interface design. May start as optional provider. |
| **OpenRouter native image generation API** | [#5718](https://github.com/HKUDS/nanobot/pull/5718) | **High** | PR open, follows existing provider pattern; image gen is table-stakes for multi-modal agents. |
| **Serply (Google Search API) web search provider** | [#5437](https://github.com/HKUDS/nanobot/pull/5437) | **Medium** | PR open since Aug 19; adds provider diversity. Depends on review bandwidth. |
| **macOS Seatbelt sandbox backend** | [#5628](https://github.com/HKUDS/nanobot/pull/5628) | **High** | Merged today — now available opt-in. |
| **Unified onboarding in Agent TUI** | [#5498](https://github.com/HKUDS/nanobot/pull/5498) | **Medium** | Open since Aug 23; UX alignment effort, may bundle with next config release. |
| **iOS PWA fixes (tap, status bar)** | [#5641](https://github.com/HKUDS/nanobot/pull/5641) | **High** | Mobile WebUI polish; 3 discrete fixes, likely to land soon. |

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **WebUI session titles lost on restart** | #5647, #5715 | Breaks continuity; users lose context across gateway restarts. |
| **Discord noise from auto-compaction** | #5719 | Users with `sendProgress: false` still get maintenance spam — violates config contract. |
| **Telegram commands missing from help/routing** | #5707, #5711 | Canonical command names (hyphens) vs Telegram aliases (underscores) cause confusion; `/compact` inaccessible. |
| **iOS PWA usability** | #5641 | First tap on session row swallowed; status bar overlaps content; double-tap required. |
| **Exec output encoding issues** | #5708 | Non-ASCII output corrupted in long-running commands — affects developers using UTF-8 tooling. |
| **Memory not portable across deployments** | #5721 | Power users want shared memory across devices/teams; current memory is local-only. |

**Satisfaction signals:** Rapid fixes for #5647, #5719, #5707, #5708 show maintainers responsive to user-reported regressions. WebUI iteration pace (sidebar, settings, performance, diffs) indicates investment in first-class UI.

---

## 8. Backlog Watch — Stale but Important

| Item | Age | Priority | Why It Matters |
|------|-----|----------|----------------|
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | ~67 days | P2 | Memory consolidation race condition: `WeakValueDictionary` allows lock loss → concurrent consolidation → data corruption risk. **No movement since Jul 6.** |
| [#4820](https://github.com/HKUDS/nanobot/pull/4820) | ~67 days | P2 | Web fetch cache pollution from non-string URLs; low exploitability but correctness issue. **Stalled.** |
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | ~16 days | P1 | Exec sandbox escape vector; marked P1 security. **Open, needs review.** |
| [#5437](https://github.com/HKUDS/nanobot/pull/5437) | ~22 days | P2 | Serply provider adds search diversity; ready but unmerged. |
| [#5498](https://github.com/HKUDS/nanobot/pull/5498) | ~18 days | P2 | TUI onboarding unification; UX debt. |

**Recommendation:** Prioritize #4819 (memory safety) and #5536 (security) for maintainer review. The rest are feature/completeness items.

---

**Overall Health:** 🟢 **Healthy** — High merge throughput, quick bug turnaround, active provider/channel maintenance, and strategic feature discussions. Main risks: two stale P2 memory/runtime PRs and one P1 security PR awaiting review.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-10

## 1. Today's Overview
Hermes Agent shows **high velocity with 67 total items updated** in the last 24 hours (17 issues, 50 PRs), indicating an active development cycle. No new release was cut today, but 10 PRs were merged/closed, suggesting steady integration. The issue queue is dominated by **bugs and regressions** (cron deadlocks, credential leaks, session-state corruption, provider incompatibilities) rather than new features, signaling a stabilization focus. Several P1/P2 security and session-state risks are open with active fix PRs, reflecting responsive triage. Community engagement is visible through new issue filings and feature PRs (clipboard paste, ntfy attachments, live Markdown rendering) that directly address UX pain points.

## 2. Releases
**No new releases today.** The latest version remains v0.21.1 (fad7cfca42). Several merged PRs (#107066, #107072) contain fixes that would typically ship in a patch release.

## 3. Project Progress — Merged / Closed PRs Today
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#107066](https://github.com/NousResearch/hermes-agent/pull/107066) | **Bug Fix** | TUI gateway: `session.create` now reports the named profile's model instead of a provisional mismatch | Fixes profile-model display inconsistency in desktop remote mode |
| [#107072](https://github.com/NousResearch/hermes-agent/pull/107072) | **Feature** | Ship Radio as an opt-in SDK plugin (`@hermes/plugin-sdk`, React-only) | Extensibility showcase; no core changes required |
| [#107079](https://github.com/NousResearch/hermes-agent/pull/107079) | **Bug Fix** | Auxiliary fallback: recognize parenthesized weekly quota walls (e.g., "weekly (7-day) usage limit") | Unblocks Kimi provider fallback on quota exhaustion ([#107067](https://github.com/NousResearch/hermes-agent/issues/107067)) |
| [#107047](https://github.com/NousResearch/hermes-agent/pull/107047) | **Bug Fix** | TTS: strip leading reasoning labels (`Reasoning:`, `thinking：`) before speech | Prevents spoken "Reasoning:" prefixes on Telegram/gateway auto-TTS |
| [#107077](https://github.com/NousResearch/hermes-agent/pull/107077) | **Bug Fix** | Desktop: native notification clicks now reveal the originating session tab | Improves notification UX; no more hidden chats behind Settings |
| [#107063](https://github.com/NousResearch/hermes-agent/pull/107063) | **Bug Fix** | BlueBubbles: reconcile duplicate webhook registrations across loopback aliases | Stops 6–10× duplicate message delivery on real deployments |
| [#106727](https://github.com/NousResearch/hermes-agent/pull/106727) | **Bug Fix** | Gateway: preserve original user text for automatic session titles | Titles no longer polluted by auto-loaded skills/platform metadata |
| [#107069](https://github.com/NousResearch/hermes-agent/pull/107069) | **Bug Fix** | Agent: stop background reviews creating phantom plugin sessions | Prevents `on_session_start` hooks from spawning ghost session cards ([#107062](https://github.com/NousResearch/hermes-agent/issues/107062)) |
| [#107051](https://github.com/NousResearch/hermes-agent/pull/107051) | **Bug Fix** | Plugin callbacks & child-delegation receipts now result-backed (bounded FIFO queue) | Fixes silent hook drops & lost delegation evidence ([#98382](https://github.com/NousResearch/hermes-agent/issues/98382)) |
| [#107006](https://github.com/NousResearch/hermes-agent/pull/107006) | **Bug Fix** | Dashboard: plugin discovery/management now follows selected profile (`?profile=`) | Scopes dashboard to active profile instead of process-default ([#46408](https://github.com/NousResearch/hermes-agent/issues/46408)) |

## 4. Community Hot Topics (Most Active Items)
| Item | Comments | Core Need |
|------|----------|-----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) **Skills index stale/degraded** (188 💬) | 188 | Automated freshness probe failing — index 29.8h old vs 26h limit. Blocks `/docs/skills` site. Requires workflow cron fix or manual rebuild. |
| [#100401](https://github.com/NousResearch/hermes-agent/issues/100401) **Cron fire-claim heartbeat deadlock** (11 💬) | 11 | Jobs >60s killed as "Interrupted by shutdown" due to heartbeat fence collision. P1 risk to message delivery. |
| [#98382](https://github.com/NousResearch/hermes-agent/issues/98382) **Concurrent observer-hook drops** (4 💬) | 4 | Single running-bit conflates timeout vs. healthy re-entrancy. Fix merged in [#107051](https://github.com/NousResearch/hermes-agent/pull/107051). |
| [#104505](https://github.com/NousResearch/hermes-agent/issues/104505) **Nous proxy blocks `/v1/responses`** (3 💬) | 3 | Subscription proxy rejects Responses API path though upstream supports it. Breaks OpenAI Codex CLI compatibility. |
| [#100268](https://github.com/NousResearch/hermes-agent/issues/100268) **`/proc/uptime` missing in Docker** (3 💬) | 3 | Host info scripts broken since v0.21.0; `/proc` not mounted in container. P2 security-boundary risk. |
| [#105774](https://github.com/NousResearch/hermes-agent/issues/105774) **`ANTHROPIC_AUTH_TOKEN` leaked to third-party endpoints** (2 💬) | 2 | **Security P1**: dual credentials sent (`x-api-key` + `Authorization: Bearer <env token>`). Credential leak to non-Anthropic hosts. |
| [#107070](https://github.com/NousResearch/hermes-agent/issues/107070) **Stale user turns replayed days later** (0 💬, new) | 0 | Persisted retry messages have no TTL; `repair_alternation` merges them into new turns → stale mutating requests execute. P1 session-state risk. |

**Underlying themes**:  
- **Reliability of long-running jobs** (cron, background reviews)  
- **Credential hygiene across provider boundaries**  
- **Session-state integrity** (phantom sessions, stale turn replay, title pollution)  
- **Developer experience** (live Markdown, clipboard paste, notification UX)

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **P1 Security** | [#105774](https://github.com/NousResearch/hermes-agent/issues/105774) `ANTHROPIC_AUTH_TOKEN` leaked to third-party endpoints | Open | — |
| **P1 Session/Message** | [#100401](https://github.com/NousResearch/hermes-agent/issues/100401) Cron heartbeat deadlock kills >60s jobs | Open | — |
| **P1 Session/Message** | [#107070](https://github.com/NousResearch/hermes-agent/issues/107070) Stale retry turns replayed days later → stale mutating requests | Open | — |
| **P2 Compatibility** | [#100268](https://github.com/NousResearch/hermes-agent/issues/100268) `/proc/uptime` missing in Docker terminal | Open (needs repro) | — |
| **P2 Session** | [#103362](https://github.com/NousResearch/hermes-agent/pull/103362) Second-process WAL writers corrupt `state.db` (flock gate) | **Open PR** | [#103362](https://github.com/NousResearch/hermes-agent/pull/103362) |
| **P2 Message Delivery** | [#107063](https://github.com/NousResearch/hermes-agent/pull/107063) BlueBubbles 6–10× duplicate webhook deliveries | **Merged** | [#107063](https://github.com/NousResearch/hermes-agent/pull/107063) |
| **P3 Plugin/Hook** | [#98382](https://github.com/NousResearch/hermes-agent/issues/98382) Concurrent hook invocations dropped as timeout | **Fixed** | [#107051](https://github.com/NousResearch/hermes-agent/pull/107051) |
| **P3 Provider** | [#104505](https://github.com/NousResearch/hermes-agent/issues/104505) Nous proxy blocks `/v1/responses` | Open | — |
| **P3 Provider** | [#107076](https://github.com/NousResearch/hermes-agent/issues/107076) `image_gen` hardcoded `gpt-5.5` → 404 for accounts without access | Open (duplicate) | — |
| **P3 Provider** | [#107067](https://github.com/NousResearch/hermes-agent/issues/107067) Kimi weekly quota fallback gap | **Fixed** | [#107079](https://github.com/NousResearch/hermes-agent/pull/107079) |
| **P3 Desktop** | [#107075](https://github.com/NousResearch/hermes-agent/issues/107075) Sidebar pagination (`SIDEBAR_GROUP_PAGE=5`) causes navigation disruption | Open | — |
| **P3 TTS** | [#107047](https://github.com/NousResearch/hermes-agent/pull/107047) Visible reasoning labels spoken aloud | **Merged** | [#107047](https://github.com/NousResearch/hermes-agent/pull/107047) |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Clipboard image paste into Kanban tasks** | [#107061](https://github.com/NousResearch/hermes-agent/issues/107061) + [#107071](https://github.com/NousResearch/hermes-agent/pull/107071) | **High** — PR open, addresses direct UX gap |
| **ntfy outgoing attachments (image/audio/video/file)** | [#46447](https://github.com/NousResearch/hermes-agent/issues/46447) + [#107078](https://github.com/NousResearch/hermes-agent/pull/107078) | **High** — PR implements full spec |
| **Live Markdown rendering in Python CLI** | [#107074](https://github.com/NousResearch/hermes-agent/pull/107074) | **Medium** — Needs decision; honors existing `display.final_response_markdown` setting |
| **Stacked run approvals & queued notifications (Desktop)** | [#107073](https://github.com/NousResearch/hermes-agent/pull/107073) | **Medium** — UX polish for approval-heavy workflows |
| **Opt-in conclusion-only auto-TTS debounce** | [#107065](https://github.com/NousResearch/hermes-agent/pull/107065) | **Medium** — Config-gated, low risk |
| **Bounded `pre_turn_finalize` continuation hook** | [#106461](https://github.com/NousResearch/hermes-agent/pull/106461) | **Medium** — Plugin lifecycle extension; provider-agnostic |
| **Hermes Collective Wisdom Agent V1** | [#94266](https://github.com/NousResearch/hermes-agent/pull/94266) | **Low–Medium** — Large feature, still in review since Aug 24 |
| **Radio as opt-in SDK plugin** | [#107072](https://github.com/NousResearch/hermes-agent/pull/107072) | **Done** — Merged today as showcase |

## 7. User Feedback Summary
| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Cron jobs silently killed at 60s** | [#100401](https://github.com/NousResearch/hermes-agent/issues/100401) — "killing every job that runs >60s as 'Interrupted by shutdown'" | Automation-heavy users, scheduled skill runners |
| **Credentials leaked to wrong providers** | [#105774](https://github.com/NousResearch/hermes-agent/issues/105774) — `ANTHROPIC_AUTH_TOKEN` sent to custom endpoints | Anyone using third-party Anthropic-compatible APIs |
| **Stale turns re-execute mutating actions days later** | [#107070](https://github.com/NousResearch/hermes-agent/issues/107070) — "model executes stale mutating requests" | Long-running sessions, gateway users |
| **Docker terminal loses host `/proc` access** | [#100268](https://github.com/NousResearch/hermes-agent/issues/100268) — host info scripts broken since v0.21.0 | Docker-based deployments |
| **Nous proxy blocks modern Responses API** | [#104505](https://github.com/NousResearch/hermes-agent/issues/104505) — breaks OpenAI Codex CLI | Codex CLI users, Responses API adopters |
| **Sidebar pagination unusable at scale** | [#107075](https://github.com/NousResearch/hermes-agent/issues/107075) — "dozens/hundreds of sessions → forced to click 'Show 5 more' repeatedly" | Power users with many sessions |
| **Notification clicks don't reveal session** | [#107077](https://github.com/NousResearch/hermes-agent/pull/107077) — fixed today | Desktop users |

**Positive signals**: Rapid fix turnaround (multiple same-day PRs for issues filed today), active plugin-sdk adoption (Radio), and UX polish PRs (Markdown, paste, notifications) show maintainer responsiveness.

## 8. Backlog Watch — Stale / Needs Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) **Skills index stale** | 54 days (since 2026-07-18) | 188 comments; automated doc build broken. Blocks public skills hub. Needs workflow cron repair or manual trigger. |
| [#46447](https://github.com/NousResearch/hermes-agent/issues/46447) **ntfy attachments** | 87 days (since 2026-06-15) | Long-requested feature; PR [#107078](https://github.com/NousResearch/hermes-agent/pull/107078) now open — review & merge to close. |
| [#94266](https://github.com/NousResearch/hermes-agent/pull/94266) **Collective Wisdom Agent V1** | 17 days (since 2026-08-24) | Large feature PR; "shared review copy validation" noted 2026-09-10. Needs final review/merge decision. |
| [#103362](https://github.com/NousResearch/hermes-agent/pull/103362) **flock single-writer gate for WAL** | 5 days | P2 data-corruption fix; 7 corruption events in 4 days per fleet report. Critical for multi-process stability. |
| [#96223](https://github.com/NousResearch/hermes-agent/pull/96223) **Stop injecting `clarify.timeout` into config defaults** | 14

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-10

## 1. Today's Overview
PicoClaw showed moderate maintenance activity over the last 24 hours with **3 issues closed (all marked stale)** and **5 PRs updated (1 merged, 4 open)**. No new releases were published. The closed issues address a critical agent-loop hang on MCP connection failure, a spurious deltachat gateway error, and a proposal for a lightweight edge-compute worker mode. Open PRs focus on channel reliability (QQ attachments, IRCv3 multiline, tool-feedback animation bounds) and a deltachat refactor. Overall project health appears stable with active refinement of messaging-channel integrations and agent responsiveness.

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged / Closed PRs
| PR | Title | Domain | Status | Key Changes |
|----|-------|--------|--------|-------------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | feat(qq): support parsing and replying to more attachment types | channel / Go | **Closed** | Adds parsing & sending of QQ Channel emoji, voice, image, video, file messages; prefers Markdown replies with fallback. |

*Only one PR was closed/merged today. The remaining four PRs received updates but remain open (see Backlog Watch).*

## 4. Community Hot Topics
| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Issue (BUG) | 9 | 👍 1 | **Agent-loop hang** when MCP server disconnects — chat becomes unresponsive. Highest engagement signals reliability pain point. |
| [#3265](https://github.com/sipeed/picoclaw/issues/3265) | Issue | 4 | 👍 1 | **False-positive deltachat error** on gateway startup despite no deltachat config — blocks launch. |
| [#3345](https://github.com/sipeed/picoclaw/issues/3345) | Issue (Proposal) | 2 | — | **Lightweight worker mode** for 10–20 MB edge devices (RISC-V, old phones, Pi) to offload from a central PC. |

*All three issues were closed as stale, but the underlying needs (agent resilience, config validation, edge deployment) remain relevant.*

## 5. Bugs & Stability
| Severity | Issue / PR | Summary | Fix PR? |
|----------|------------|---------|---------|
| **High** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP connection failure → agent loop hangs → chat stops replying. | No linked fix PR (issue closed stale). |
| **Medium** | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | Gateway crashes on startup with `channel deltachat has unknown type deltachat` when deltachat not configured. | No linked fix PR (issue closed stale). |
| **Low** | [#3353](https://github.com/sipeed/picoclaw/pull/3353) | Tool-feedback animations can edit a channel message indefinitely if lifecycle cleanup misses. | **PR #3353 open** — bounds animation to 5 min & stops on first edit error. |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **QQ Channel rich-media support** (emoji, voice, image, video, file) | [PR #1349](https://github.com/sipeed/picoclaw/pull/1349) (merged) | ✅ Already merged — will ship in next release. |
| **IRCv3 `draft/multiline` assembly** | [PR #3354](https://github.com/sipeed/picoclaw/pull/3354) (open) | High — targeted protocol improvement, low risk. |
| **Threaded replies in group chats** (reply to originating message) | [PR #3358](https://github.com/sipeed/picoclaw/pull/3358) (open) | High — UX fix for busy groups. |
| **Lightweight edge worker mode** | [Issue #3345](https://github.com/sipeed/picoclaw/issues/3345) (closed stale) | Medium — architectural, needs design; community interest visible. |
| **Deltachat cleanup & config simplification** (-200 LOC) | [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) (open) | Medium — ongoing refactor, reduces surface area. |

## 7. User Feedback Summary
- **Pain points**:  
  - Agent becomes completely unresponsive when MCP server drops (#3269).  
  - Gateway refuses to start with misleading deltachat error (#3265).  
  - Bot replies in groups appear disconnected from the triggering message (#3358).  
- **Use cases**:  
  - Running PicoClaw on fleets of ultra-low-memory edge devices (RISC-V boards, old Android phones) alongside a central PC (#3345).  
  - Heavy QQ Channel usage requiring native rich-media handling (#1349).  
  - IRC power-users needing proper multiline message reconstruction (#3354).  
- **Satisfaction**: Merged PR #1349 shows responsiveness to channel-specific feature requests; stale closures on critical bugs (#3269, #3265) may frustrate affected users.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) (BUG) | 52 days | Critical reliability bug; no fix PR despite 9 comments. Re-open or link fix. |
| [#3265](https://github.com/sipeed/picoclaw/issues/3265) | 53 days | Blocks gateway startup for non-deltachat users; easy config-validation fix. |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) (refactor) | 69 days | Large deltachat cleanup (-200 LOC); reduces debt but needs review & merge. |
| [#3358](https://github.com/sipeed/picoclaw/pull/3358) (fix) | 9 days | UX fix for threaded replies; small scope, high user visibility. |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) (feat) | 10 days | IRCv3 multiline support; protocol compliance, low risk. |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) (fix) | 10 days | Prevents infinite message-editing loops; safety net for all channels. |

---
*Digest generated from GitHub data as of 2026-09-09 24h window. Links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-10

## 1. Today's Overview
NanoClaw shows steady maintenance velocity with **6 PRs updated** in the last 24 hours (3 merged, 3 open) and **1 active issue**. The project is in a healthy bug-fix and polish phase — no new features or releases, but meaningful improvements across the agent runner, setup flow, WhatsApp channel, and cross-repo contract with `nanoco-gw`. Activity is concentrated in core runtime and onboarding surfaces, suggesting the team is hardening the current release line.

## 2. Releases
**No new releases** published today. The project appears to be between version cuts, with merged PRs likely accumulating for the next patch or minor release.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#3756](https://github.com/nanocoai/nanoclaw/pull/3756) | `agent-runner`, `core` | Final piece of a 3-PR chain (`nanoco-gw#152`, `nanoco#534`) — surfaces a user-facing message when a usage allowance is spent and the Gateway returns 403. | Completes cross-repo error UX for quota exhaustion; turns a silent failure into actionable feedback. |
| [#3753](https://github.com/nanocoai/nanoclaw/pull/3753) | `setup-installation`, `repository-maintenance` | Fixes community portal Echo image recording: now writes the *actual* image chosen after browser handoff, not the pre-sign-in default (`NANOCLAW_HARDENED_IMAGE=true`). | Eliminates telemetry drift between intent and reality; improves reliability of rollout analytics. |
| [#3738](https://github.com/nanocoai/nanoclaw/pull/3738) | `agent-runner`, `core`, `sessions`, `tools` | `send_message`, `send_file`, and `<message to>` replies now thread under the message being answered (via `resolveRouting` fix), instead of landing in the main channel. | Restores expected threading behavior for file sends and replies; reduces channel noise in multi-thread sessions. |

**Net progress**: Three user-visible fixes shipped — quota UX, onboarding telemetry, and message threading — all closing long-standing inconsistencies.

## 4. Community Hot Topics
Only one issue updated recently, but it signals a **scheduling correctness gap** in the CLI:

- **#3705** `ncl tasks update --recurrence` doesn't recompute `process_after`  
  → *1 comment, 0 reactions* — **Underlying need**: Users expect recurrence changes to immediately reschedule the next run; currently they must manually trigger or wait for the old schedule to fire. This is a **workflow-breaking bug** for automation-heavy users. No fix PR yet.

Among open PRs, **#3755** (sweep stale `processing_ack` rows) and **#3752** (WhatsApp pending-question liveness) touch core reliability surfaces and may attract review attention.

## 5. Bugs & Stability — Today's Reports & Fixes

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | Recurrence update leaves `process_after` stale (#3705) | **Open, unfixed** | None yet |
| **Medium** | Stale `processing_ack` rows accumulate, slowing `sqliteGetPendingMessages` | **Open** | [#3755](https://github.com/nanocoai/nanoclaw/pull/3755) (open) |
| **Medium** | WhatsApp: pending questions can become unanswerable in chat | **Open** | [#3752](https://github.com/nanocoai/nanoclaw/pull/3752) (open) |
| **Low** | Onboarding prints redundant portal link + device-code block | **Open** | [#3754](https://github.com/nanocoai/nanoclaw/pull/3754) (open) |
| **Low** | Echo image recorded at sign-in, not at actual choice | **Fixed** | [#3753](https://github.com/nanocoai/nanoclaw/pull/3753) ✅ |
| **Low** | Replies/files land in main channel instead of thread | **Fixed** | [#3738](https://github.com/nanocoai/nanoclaw/pull/3738) ✅ |

**Stability takeaway**: Two medium-severity bugs have open fix PRs awaiting review; the high-severity scheduling bug (#3705) has no PR yet — **this should be prioritized**.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests today. However, the merged PRs reveal **implicit roadmap direction**:

1. **Cross-repo contract hardening** — The 3-PR chain for usage-allowance errors (`nanoco-gw#152` → `nanoco#534` → #3756) shows investment in **platform-level quota governance**.
2. **Onboarding fidelity** — #3753 and #3754 both tighten the browser-handoff → portal → Echo flow, suggesting **setup reliability** is a near-term theme.
3. **Channel robustness** — #3752 (WhatsApp) and #3738 (threading) indicate **multi-channel message integrity** is being systematically addressed.

**Prediction**: Next version will likely be a **patch (vX.Y.Z+1)** bundling these fixes, with a possible minor bump if the recurrence bug (#3705) gets a fix merged soon.

## 7. User Feedback Summary
No direct user comments beyond the single issue (#3705). Inferred pain points from PR context:

| Pain Point | Evidence |
|------------|----------|
| **"My scheduled task didn't run after I changed its frequency"** | #3705 — recurrence update is non-atomic wrt scheduling |
| **"Files I reply with vanish into the main channel"** | #3738 — threading regression in core tools |
| **"I signed in but the portal shows the wrong image"** | #3753 — telemetry mismatch confuses support/analytics |
| **"Onboarding shows two confusing sign-in options"** | #3754 — redundant device-code block |

**Sentiment**: Neutral-to-positive — users are hitting edge cases in mature flows, not fundamental breaks. The team is responsive (3 fixes merged today).

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| **[#3705](https://github.com/nanocoai/nanoclaw/issues/3705)** Recurrence update doesn't recompute `process_after` | 7 days (created 2026-09-03) | **High** | Silent scheduling drift breaks automation trust; no PR yet. |
| **[#3755](https://github.com/nanoclaw/pull/3755)** Sweep stale `processing_ack` rows | 1 day | Medium | Unbounded `processing_ack` scan degrades pending-message latency over time. |
| **[#3752](https://github.com/nanoclaw/pull/3752)** WhatsApp pending-question liveness | 1 day | Medium | Channel-specific reliability; may block WhatsApp-heavy users. |
| **[#3754](https://github.com/nanoclaw/pull/3754)** Onboarding portal link duplication | 1 day | Low | UX polish; low risk but easy win for first-run experience. |

**Recommendation**: Assign #3705 to a core runtime owner immediately; review #3755 and #3752 this sprint to prevent accumulation of medium-severity debt.

---

*Data sourced from GitHub API (issues/PRs updated 2026-09-09 → 2026-09-10). All links point to `github.com/nanocoai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-10

## 1. Today's Overview
IronClaw shows steady maintenance activity with **1 new bug report** and **4 open pull requests** updated in the last 24 hours, but **no merged PRs or releases**. The project is in a pre-release stabilization phase — contributors are addressing MCP (Model Context Protocol) security isolation bugs, extension manifest validation inconsistencies, and a Telegram UX enhancement. The lone issue (#8091) is a regression in WebChat v2’s IME handling, suggesting recent input-layer changes need refinement. Overall health: **active development, no critical blockers, but no velocity toward a release cut**.

## 2. Releases
**No new releases** published today. The repository has not tagged a version since the last digest period.

## 3. Project Progress
**No PRs were merged or closed today.** All four updated PRs remain open:
- **#8090** (kirikov): Fixes a **critical MCP catalog isolation bug** — hosted-MCP tool catalogs were keyed per extension ID instead of per caller, causing user A’s tools to leak into user B’s session. Security/tenancy fix.
- **#8084** (kirikov): Adds **opt-in SEP-414 caller attribution** on outbound hosted-MCP calls, enabling providers to correlate calls to conversations and deduplicate retries. Protocol-level feature.
- **#8085** (kirikov): Resolves **extension manifest validation mismatch** — operator-installed packages were rejected despite being semantically equivalent to host-bundled ones. Developer-experience fix.
- **#8072** (thisisjoshford): Registers **Telegram Bot API command menu** (`/model`, `/status`, `/new`, `/stop`, `/interrupt`) at activation, clearing on deactivation. UX polish for Telegram integration.

## 4. Community Hot Topics
| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#8090](https://github.com/nearai/ironclaw/pull/8090) | PR | Updated 2026-09-10, 0 comments | **Multi-tenant MCP security** — hosted MCP servers must isolate tool catalogs per caller, not per extension. Critical for shared infra. |
| [#8084](https://github.com/nearai/ironclaw/pull/8084) | PR | Updated 2026-09-09, 0 comments | **Observability & idempotency** — providers need conversation context and retry detection on MCP calls. Enables billing, state, safety. |
| [#8085](https://github.com/nearai/ironclaw/pull/8085) | PR | Updated 2026-09-09, 0 comments | **Operator workflow parity** — operator-installed extensions should behave like host-bundled ones. Reduces friction for self-hosted deployments. |
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | PR | Updated 2026-09-09, 0 comments | **Telegram discoverability** — users need visible command menu in chat UI. Standard platform UX expectation. |

*All PRs have zero comments — review bandwidth may be a bottleneck.*

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **High** | [#8091](https://github.com/nearai/ironclaw/issues/8091) — `Enter` during IME composition sends message prematurely in WebChat v2 | **Open, 0 comments** | None yet |
| **High (Security/Tenancy)** | MCP catalog keyed per extension, not per caller — user tool leakage | **Open PR #8090** | [#8090](https://github.com/nearai/ironclaw/pull/8090) |
| **Medium** | Operator-installed packages fail validation despite valid manifests | **Open PR #8085** | [#8085](https://github.com/nearai/ironclaw/pull/8085) |

**No crashes or regressions beyond #8091 reported today.** The IME bug is a known recurrence — suggest adding a regression test in the fix.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Per-caller MCP catalog isolation** | #8090 (fix) | **High** — security fix, already implemented in PR |
| **SEP-414 caller attribution on MCP calls** | #8084 (feat) | **High** — protocol standard, opt-in, low risk |
| **Telegram command menu registration** | #8072 (feat) | **Medium** — UX polish, depends on review priority |
| **Operator package parity with host-bundled** | #8085 (fix) | **High** — removes deployment friction, fix ready |

**Prediction:** Next version will likely include #8090, #8085, and #8084 (all MCP/core). #8072 (Telegram) may slip if review capacity is limited. #8091 (IME) needs a fix authored first.

## 7. User Feedback Summary
- **Pain point (WebChat v2):** IME users (CJK, etc.) cannot compose messages without accidental sends — **regression from prior fix**, high frustration for non-Latin script users. [#8091](https://github.com/nearai/ironclaw/issues/8091)
- **Pain point (MCP operators):** Hosted MCP tool catalogs leak across users — **security/tenancy violation** in multi-user deployments. [#8090](https://github.com/nearai/ironclaw/pull/8090)
- **Pain point (Extension authors):** Operator-installed packages rejected by validator — **blocks self-hosted extension distribution**. [#8085](https://github.com/nearai/ironclaw/pull/8085)
- **Desire (Telegram users):** Visible command menu in chat — **standard platform expectation**, improves discoverability. [#8072](https://github.com/nearai/ironclaw/pull/8072)

*No positive feedback or satisfaction signals in today’s data.*

## 8. Backlog Watch
| Item | Age | Risk | Why It Needs Attention |
|------|-----|------|------------------------|
| [#8091](https://github.com/nearai/ironclaw/issues/8091) | 1 day | **High** | User-facing regression in core chat input; affects all IME users. No fix PR yet. |
| [#8090](https://github.com/nearai/ironclaw/pull/8090) | 2 days | **High** | Security fix for multi-tenant MCP — should be fast-tracked for review/merge. |
| [#8084](https://github.com/nearai/ironclaw/pull/8084) | 2 days | **Medium** | Protocol feature (SEP-414) — enables downstream provider features; low risk, high value. |
| [#8085](https://github.com/nearai/ironclaw/pull/8085) | 2 days | **Medium** | Unblocks operator extension workflows; fix is targeted, needs validation review. |
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | 6 days | **Low** | Telegram UX polish — stalled at 6 days with no review. May need maintainer nudge. |

**Action recommended:** Prioritize review of #8090 (security) and #8091 (regression). Assign reviewer to #8072 to clear 6-day stale PR.

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-10

## 1. Today's Overview
LobsterAI shows **high maintenance velocity with zero new releases**. In the last 24 hours, **10 PRs were merged/closed** (mostly OpenClaw v2026.8.1 integration fixes) while **20 issues were updated** — all 16 open issues carry the `[stale]` label, suggesting triage cleanup rather than new user reports. The project is in a **stabilization phase** post-OpenClaw upgrade, focusing on configuration migration, model-scoping bugs, security hardening, and i18n polish. No new feature work appears in today’s merged PRs.

## 2. Releases
**No new releases today.** The last release cycle appears to be OpenClaw v2026.8.1 (bundled), which triggered the regression fixes merged today.

## 3. Project Progress — Merged/Closed PRs (10)

| PR | Area | Summary | Link |
|----|------|---------|------|
| #2641 | renderer, main, openclaw, cowork | **Opt-in automatic skill review** — Adds toggle under Settings → Agent Engine → Background runtime to disable costly post-task skill reviews (CN/EN labels). | [#2641](https://github.com/netease-youdao/LobsterAI/pull/2641) |
| #2640 | docs, main, openclaw | **Session-scoped model selection** — Forces `agents.defaults.modelSelectionScope = "session"` so session switches don’t leak into agent/shared defaults. Fixes #2639 side-effect. | [#2640](https://github.com/netease-youdao/LobsterAI/pull/2640) |
| #2639 | docs, openclaw | **Keep default model out of system prompts** — Prevents `default_model` changes from rewriting reusable conversation prefixes. | [#2639](https://github.com/netease-youdao/LobsterAI/pull/2639) |
| #2638 | build, docs, main, openclaw | **Migrate legacy workspace state before gateway startup** — Runs upstream workspace migration (old setup/attestation → SQLite) before gateway launch, fixing “Legacy workspace setup state requires migration” block. | [#2638](https://github.com/netease-youdao/LobsterAI/pull/2638) |
| #2637 | build, main, openclaw | **Bundle Discord as trusted plugin origin** — Moves official Discord package to `dist/extensions/` so plugin registration passes `openKeyedStore` trust check. | [#2637](https://github.com/netease-youdao/LobsterAI/pull/2637) |
| #2636 | renderer | **i18n: refresh About update label on language switch** — Recomputes button label per render so “检查更新” / “Check for Updates” follows active language. | [#2636](https://github.com/netease-youdao/LobsterAI/pull/2636) |
| #2635 | docs, main | **Avoid gateway restarts on stale config hashes** — Adds bounded retry + re-check before fallback restart when `config.get` cache returns old hash during model switch. | [#2635](https://github.com/netease-youdao/LobsterAI/pull/2635) |
| #2634 | docs, main | **Restore QQ shutdown & desktop IM sync** — Keeps signal-triggered data flush in QQ plugin (letting OpenClaw own process exit) and re-triggers message sync after config-driven gateway restart. | [#2634](https://github.com/netease-youdao/LobsterAI/pull/2634) |
| #2166 | build | **CI: bump dorny/paths-filter 3→4** — Dependabot maintenance. | [#2166](https://github.com/netease-youdao/LobsterAI/pull/2166) |
| #2294 | docs | **Add TakoAPI directory badge** — Community directory listing. | [#2294](https://github.com/netease-youdao/LobsterAI/pull/2294) |

**Pattern:** 8/10 merged PRs target **OpenClaw v2026.8.1 regressions** (model scoping, workspace migration, plugin trust, gateway restart loops, QQ integration). Two are low-risk docs/CI.

## 4. Community Hot Topics — Most Active Issues

| Issue | Type | Comments | Core Need | Link |
|-------|------|----------|-----------|------|
| #1903 | Bug (Closed stale) | 4 | **Member login repeatedly fails** — blocks paid NetEase model access. Screenshot shows auth UI. | [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) |
| #2046 | Feature (Closed stale) | 3 | **Agent memory system** — Session titles/metadata stuck in IndexedDB, invisible to Agent; cross-session retrieval missing; long-term memory absent. Detailed 3-priority proposal. | [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) |
| #2079 | Bug (Open stale) | 3 | **Execution result window freezes when scrolled to top** — Reproducible on 2026.5.27 build. | [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) |
| #2120 | Feature (Open stale) | 3 | **Task queueing + longer runtimes + 3-col skill UI** — Borrow WorkBuddy’s pre-input next task; extend terminated timeout; fix 2560×1600 layout. | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) |
| #2121 | Bug (Open stale) | 3 | **Repeated text output eating tokens** — User suspects Claw bug causing token waste; asks root cause & fix. | [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) |
| #2216 | Bug (Open stale) | 2 | **Memory Search locked to OpenAI provider** — UI won’t allow local/other embedders; 429 quota kills memory search entirely. | [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) |
| #2176 | Security (Open stale) | 2 | **Automatic artifact loading → arbitrary local file read** — `MEDIA:` refs from assistant/tool output parsed into privileged Electron path. | [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) |
| #2181 | Security (Open stale) | 1 | **Browser defaults to ProxyCompatible + weakened SSRF guard** — Private-network access restored by default. | [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181) |
| #2286 | Security (Open stale) | 1 | **Unauthenticated local token proxy** — Loopback proxy for `lobsterai-server` lets any local process replay victim’s authenticated model calls. | [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) |
| #2287 | Security (Open stale) | 1 | **NIM outbound media exfiltration** — Assistant-generated absolute paths treated as attachments → arbitrary host file leak. | [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) |
| #2288 | Security (Open stale) | 1 | **HTML preview server follows symlinks** — Lexical `path.resolve` confinement bypass → arbitrary file disclosure. | [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) |

**Underlying themes:**  
- **Security cluster (4 issues, all from YLChen-007):** Local file read/exfil, SSRF, token proxy — suggest a dedicated security audit sprint.  
- **Memory/continuity gap:** #2046, #2120, #2216 all point to missing cross-session persistence and provider lock-in.  
- **Token efficiency:** #2121 (repeated output) + #2641 (opt-in skill review) show cost sensitivity.

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue | Status | Fix PR? | Notes |
|----------|-------|--------|---------|-------|
| **Critical (Security)** | #2176 Arbitrary local file read via `MEDIA:` | Open stale | No | Privileged Electron path exposure |
| **Critical (Security)** | #2286 Unauthenticated token proxy replay | Open stale | No | Any local process → victim’s model creds |
| **Critical (Security)** | #2287 NIM absolute-path exfiltration | Open stale | No | Assistant-controlled outbound media |
| **Critical (Security)** | #2288 Symlink bypass in preview server | Open stale | No | `path.resolve` lexical check insufficient |
| **High** | #2214 Desktop “Backup Data” freezes main process (71 MB SQLite, WAL) | Open stale | No | 100% repro on Win11; forces kill |
| **High** | #2215 Installer “Resource extraction failed” (NSIS, ERROR_BAD_ENVIRONMENT) | Open stale | No | Path confusion (C: vs G:), security tools excluded |
| **High** | #2230 **25× slowdown vs CodeBuddy** (25 min vs 2 m, 60M vs 67k tokens) | Open stale | No | Same prompt/DBX; suggests prompt/context bloat |
| **Medium** | #2079 Result window freeze on scroll-to-top | Open stale | No | Repro on 2026.5.27 |
| **Medium** | #2216 Memory Search locked to OpenAI; 429 = total outage | Open stale | No | UI provider switch disabled |
| **Medium** | #1152 Corp IMAP connection fails (closed stale) | Closed stale | — | Env-specific; may persist |

**No fix PRs exist for any open high/critical bug today.** Security cluster and backup freeze are unaddressed.

## 6. Feature Requests & Roadmap Signals

| Request | Source | Signal Strength | Likely Next Version? |
|---------|--------|-----------------|----------------------|
| **Agent memory system** (session metadata persistence, cross-session retrieval, long-term memory) | #2046 (detailed 3-priority spec) | High — structured, multi-user interest | ✅ Strong candidate; aligns with #2120 task queueing |
| **Task queue / pre-input next task** | #2120 | Medium — WorkBuddy reference | ⚠️ Needs architecture; may follow memory work |
| **Local embedding provider for Memory Search** | #2216 | High — unblocks 429 outage | ✅ Likely; config change + UI un-gate |
| **Hermes agent support** | #2131 | Low — single ask, no detail | ❌ Unlikely without spec |
| **Opt-in automatic skill review** | #2641 (merged today) | Delivered | ✅ Already in merged PR |
| **Session-scoped model selection** | #2639/#2640 (merged today) | Delivered | ✅ Already in merged PR |
| **3-column skill UI @ 2560×1600** | #2120 | Low — cosmetic | ❌ Low priority |
| **Cross-model sub-task orchestration** | #2132, #2180, #2239 | Medium — strategic (OpenClaw化 trend) | ⚠️ Long-term; #2180 has design doc |

**Prediction:** Next patch will ship **local embedding toggle** (+ #2216 fix) and **memory metadata persistence** (foundation for #2046). Security issues need dedicated sprint before major version.

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Login/auth reliability** | #1903 “member login fails frequently”, blocks paid models | 1 report, high impact |
| **Token cost anxiety** | #2121 “repeated output eating tokens”, #2230 “60M tokens vs 67k”, #2641 opt-in review | 3+ reports |
| **Memory/continuity loss** | #2046 “every session independent”, #2120 “pre-input next task”, #2216 “local embedder blocked” | 3 reports |
| **UI freezes/crashes** | #2079 scroll freeze, #2214 backup freeze (force-kill), #2215 install failure | 3 reports |
| **Performance vs alternatives** | #2230 “25× slower than CodeBuddy” | 1 report, dramatic |
| **Security distrust** | 4 detailed advisories from same researcher (YLChen-007) | 4 reports, high credibility |
| **Model scoping confusion** | #2639/#2640 fixed today — session vs agent vs shared defaults | Implicit (fixed silently) |

**Satisfaction signals:** Users invest detailed specs (#2046, #2180, #2239) → **high engagement, high expectation**. Silent merges of scoping fixes (#2639/2640) suggest friction was real.

## 8. Backlog Watch — Stale but Critical

| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| **#2176 / #2286 / #2287 / #2288** (Security cluster) | 65–93 days | Local file read, token replay, exfil, symlink bypass — **exploitable** | **Immediate triage**; assign security owner; patch before next release |
| **#2214** Backup freeze (71 MB SQLite, WAL) | 76 days | Data loss risk; users force-kill → corruption | Reproduce on Win11; async backup or VACUUM strategy |
| **#2215** NSIS install failure (ERROR_BAD_ENVIRONMENT) | 75 days | Blocks new users; path confusion (C: vs G:) | Clean installer logic; log real install path |
| **#2230** 25× token/time regression vs CodeBuddy | 72 days | Core competency — agent efficiency | Profile prompt/context diff; compare OpenClaw vs CodeBuddy orchestration |
| **#2046** Agent memory system (closed stale but detailed) | 108 days | Strategic differentiator; multiple users ask | Re-open; assign to roadmap; link #2120, #2216 |
| **#2216** Memory Search provider lock-in | 74 days | Single point of failure (OpenAI quota) | Un-gate UI; add local embedder fallback |

---

**Bottom line:** LobsterAI is **actively patching OpenClaw v2026.8.1 regressions** (10 PRs merged) but **carries a critical security backlog (4 unpatched advisories) and high-impact stability bugs (backup freeze, install failure, 25× perf gap)**. The community is sophisticated — filing architectural proposals, not just bugs. Next version should be a **security + stability patch** with **local embedding toggle**; memory system work belongs on the 2026-Q4 roadmap.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-09-10

---

## 1. Today's Overview

CoPaw shows **high velocity** with 55 total GitHub items updated in the last 24 hours (21 issues, 34 PRs). The project is in active stabilization mode for the 2.2.x series: 10 bugs were closed today, many addressing cross-session message routing races, history database corruption, and channel reliability. No new release was cut, but 11 PRs were merged/closed, including critical fixes for FTS corruption (#7596), console session races (#7237), and skill marketplace downloads (#7634). Test coverage jumped +5.02pp via a 2,475-case sprint (#7653). The backlog reflects a platform maturing toward multi-channel, multi-session production readiness.

---

## 2. Releases

**No new releases today.** The latest published version remains **2.2.0** (with 2.2.1b2 in testing per issue #7662). Several merged PRs today (#7655, #7640, #7237, #7577) contain fixes likely destined for a 2.2.1 patch.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#7655](https://github.com/agentscope-ai/QwenPaw/pull/7655) | `fix(history): repair FTS corruption and retention cleanup` | Bug fix | Resolves silent retention purge failure (`SQLITE_CORRUPT_VTAB`) caused by unindexed recall-tool rows; adds consistent FTS maintenance across updates/cleanup/duplicate removal |
| [#7640](https://github.com/agentscope-ai/QwenPaw/pull/7640) | `fix(skill): update clawhub url` | Bug fix | Fixes ClawHub skill download for skills with duplicate names (closes #7634) |
| [#7237](https://github.com/agentscope-ai/QwenPaw/pull/7237) | `fix(console): prevent session races during queued sends and switches` | Bug fix | Eliminates cross-session message misdelivery during rapid submission, navigation, agent switching, and multi-tab handoff (closes #7231) |
| [#7577](https://github.com/agentscope-ai/QwenPaw/pull/7577) | `fix(console): enqueue follow-up messages when chat task is running` | Bug fix | Changes HTTP 409 rejection to queuing for follow-up messages during active generation |
| [#7616](https://github.com/agentscope-ai/QwenPaw/pull/7616) | `refactor(memory): migrate ADBPG and PowerContext to plugins` | Refactor | Completes memory-backend plugin extraction; legacy runtime/config removed from core |
| [#7639](https://github.com/agentscope-ai/QwenPaw/pull/7639) | `perf(scroll): avoid repeated history integrity scans` | Performance | Runs `PRAGMA quick_check` once per process per DB; prevents concurrent scans |
| [#7641](https://github.com/agentscope-ai/QwenPaw/pull/7641) | `fix(release): retry and verify desktop artifact downloads` | Release engineering | Adds retry + verification for GitHub Actions artifact downloads to prevent partial-file releases |
| [#7658](https://github.com/agentscope-ai/QwenPaw/pull/7658) | `fix(backup): preserve Unix permission bits during restore` | Security/Backup | Restores `SECRET_DIR` (0o700) and `.master_key` (0o600) permissions on restore; fixes world-readable regression |
| [#6738](https://github.com/agentscope-ai/QwenPaw/pull/6738) | `feat(creator): grounding search, timeline workbench, YOLO reviews, i18n, ASR, reliability` | Feature batch | Large Creator/PawApp feature drop from `dev/creator` fork (grounding, timeline, i18n, ASR, App Center) |
| [#7653](https://github.com/agentscope-ai/QwenPaw/pull/7653) | `test(unit): coverage sprint batch 2 — 2475 cases, +5.02pp` | Testing | Raises `src/qwenpaw` statement coverage from 64.41% → 69.43% (+5,954 statements) |

---

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) **Optimize deploy homepage UX** | 8 comments, 21 days open | Mobile-first usability: move "Deploy" entry to top, reorder "Stop" button away from primary actions to prevent accidental taps |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) **Console stop cancels Feishu session** | 8 comments, closed today | **Cross-session identity leakage**: stop request from one UI session terminating another's active channel conversation — fixed in #7237 |
| [#7597](https://github.com/agentscope-ai/QwenPaw/issues/7597) **Tool binary → base64 triggers 400** | 7 comments, closed today | **File upload contract mismatch**: tools returning raw base64 (`type: "data")` rejected by provider expecting `file_id`/`file_data`; needs adapter layer |
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) **Sync calls freeze event loop, timeout失效** | 6 comments, 14 days open | **Blocking I/O in async runtime**: Windows desktop unresponsive 118–135s at startup and ~126s per message; timeout logic never fires |
| [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) **Incorrect new session creation** | 4 comments, filed today | **Session state machine bug**: creating new task → asking → asking in prior session → duplicate session created instead of continuing |

**Pattern**: Mobile/web UX polish (#7177) and **session/channel isolation correctness** (#7011, #7231, #7661) dominate discussion. Users deploying in multi-session, multi-channel environments are hitting race conditions the test suite is now catching.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) Sync calls block event loop 120s+; timeout never fires | Open | None yet |
| **Critical** | [#7662](https://github.com/agentscope-ai/QwenPaw/issues/7662) Telegram polling dies under proxy blackhole; watchdog doesn't reconnect | Closed today | None (diagnosis only) |
| **High** | [#7642](https://github.com/agentscope-ai/QwenPaw/issues/7642) Console streaming blank in Chrome until turn completes (Safari OK) | Open | None |
| **High** | [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) Duplicate session created when continuing prior session | Open | None |
| **High** | [#7507](https://github.com/agentscope-ai/QwenPaw/issues/7507) WeCom streaming 150ms throttle → character-by-character sluggishness | Open | None |
| **Medium** | [#7596](https://github.com/agentscope-ai/QwenPaw/issues/7596) FTS corruption undetected; retention purge fails silently | **Closed** | [#7655](https://github.com/agentscope-ai/QwenPaw/pull/7655) ✅ |
| **Medium** | [#3254](https://github.com/agentscope-ai/QwenPaw/issues/3254) Console backend chat UUID race with stop/delete | **Closed** | Likely addressed by #7237 |
| **Medium** | [#7634](https://github.com/agentscope-ai/QwenPaw/issues/7634) ClawHub skill install fails on duplicate names | **Closed** | [#7640](https://github.com/agentscope-ai/QwenPaw/pull/7640) ✅ |
| **Medium** | [#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997) MCP client `timeout` field silently dropped | **Closed** | No PR linked (may need config schema update) |
| **Low** | [#7601](https://github.com/agentscope-ai/QwenPaw/issues/7601) Work directory picker: no manual path entry (regression from 2.1.0) | **Closed** | No PR linked |

**Note**: #7363 (event loop freeze) and #7642 (Chrome streaming) are the most user-visible regressions without active fix PRs.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Advisor Mode** (dual-model: strong advisor + cheap worker) | [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) (open PR) | **High** — PR open, adds new loop mode like Goal/Mission |
| **OpenViking long-term memory backend** | [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) (open PR) | **High** — First-time contributor, integrates `BaseMemoryManager` |
| **ntfy channel support** (self-hosted push, 34k★) | [#7657](https://github.com/agentscope-ai/QwenPaw/issues/7657) | **Medium** — Implementation ready per author; fits self-hosted user base |
| **MCP `tls_verify` / `ca_file` config** | [#4175](https://github.com/agentscope-ai/QwenPaw/issues/4175) (4 months old) | **Medium** — Enterprise/self-hosted need; blocked on Pydantic schema |
| **Durable memory across sessions** (MemCode integration) | [#7656](https://github.com/agentscope-ai/QwenPaw/issues/7656) | **Low** — External vendor proposal; architectural decision needed |
| **Channel params → MCP passthrough** (QQ ID, phone, employee ID) | [#7650](https://github.com/agentscope-ai/QwenPaw/issues/7650) | **Medium** — Clear developer need; requires context propagation design |
| **Skill versioning & dependency metadata** | [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557) (closed) | **Medium** — Fleet management pain point; may need skill manifest spec |

**Roadmap inference**: Next minor (2.3?) will likely ship **Advisor Mode**, **OpenViking memory**, and **ntfy channel**. MCP TLS config and skill versioning are enterprise-readiness gaps.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Mobile Console UX** | #7177: "Deploy entry at bottom → hard to tap on phone"; "Stop button too close to primary actions" | 😡 Frustrated |
| **Session/channel crossing** | #7011, #7231, #7661: messages/routes land in wrong session; stop kills other channels | 😡 Critical for multi-user deployments |
| **Windows desktop latency** | #7363: 2-minute freezes at startup and per message | 😡 Blocks desktop adoption |
| **Chrome streaming broken** | #7642: "Renders nothing until turn completes (Safari works)" | 😡 Browser-specific regression |
| **Work directory picker regression** | #7601: "2.1.0 had manual path entry; 2.2.0 forces click-through" | 😐 Annoyance |
| **WeCom streaming sluggish** | #7507: 150ms throttle vs instant WeChat segments | 😐 Quality gap |
| **Skill marketplace reliability** | #7634: Duplicate names break install | 😐 Fixed quickly |
| **Backup permission security** | #7658: `.master_key` restored world-readable (0o644) | 😰 Security concern |

**Positive signals**: Quick fixes for #7596, #7634, #7231; test coverage sprint (#7653); first-time contributors landing memory/console fixes.

---

## 8. Backlog Watch — Stale Important Items

| Item | Age | Why It Matters | Blocker |
|------|-----|----------------|---------|
| [#4175](https://github.com/agentscope-ai/QwenPaw/issues/4175) **MCP `

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-10

## 1. Today's Overview
ZeroClaw shows **high architectural churn with low release velocity** — 13 active issues and 50 active PRs updated in the last 24 hours, but zero releases and only 1 PR merged/closed. The project is in a heavy **RFC-driven design phase**: 10 of 13 updated issues are RFCs (architecture, security, runtime, plugin system, session history, voting process). Two net-new bugs were filed today (#10736 provider streaming fallback, #10734 Windows stack overflow). The single merged PR (#10735) is a targeted fix for the Windows stack overflow. Overall health: **active but pre-release**, with maintainers gating large architectural changes through RFC review queues.

## 2. Releases
**No new releases** in this period.

## 3. Project Progress (Merged/Closed Today)
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#10735](https://github.com/zeroclaw-labs/zeroclaw/pull/10735) | `fix(rpc): heap-pin the largest process_line dispatch branches for Windows stack` | Bug fix (size:XS) | Resolves the Windows stack overflow in `process_line` tests (#10734) by moving large async branches to the heap. **Merged** — only closed PR today. |

> **Note:** 49 PRs remain open; many are large (size:XL) and tagged `needs-author-action` or `needs-maintainer-review`, indicating they are in active review/rebase cycles rather than ready to merge.

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | Type | Core Need |
|------|----------|------|-----------|
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) RFC: Runtime-owned conversation sessions & transport surface adapters | 37 | RFC (risk:high) | **Unify session ownership** across CLI, daemon, web, ACP channels; replace ad-hoc transport logic with a runtime-owned session model. Revision 5 — prior vote voided. |
| [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: Unified file & attachment architecture for conversation surfaces | 30 | RFC (risk:high) | **Single attachment model** for all surfaces (files, images, tool outputs). Revision 10 — prior vote voided. |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) RFC: Granular sandbox policy — filesystem restrictions | 29 | RFC (status:accepted, risk:high) | **Align app-layer path admission** with OS sandbox backends (Bubblewrap, Landlock, Seatbelt). In progress. |
| [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) RFC: Make wire protocol first-class in provider construction | 19 | RFC (needs-author-action, risk:high) | **Decouple provider onboarding** from wire protocol details; enable generic provider factories. |
| [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) RFC: Composable WASM plugin runtime architecture | 13 | RFC (risk:high) | **Typed WASM extension points** with replaceable providers; session-history scope moved to #10526. |

**Pattern:** All top-discussion items are **high-risk architectural RFCs** with multiple revisions, signaling the project is redefining core primitives (sessions, attachments, sandboxing, plugins, provider model) before the next major release.

## 5. Bugs & Stability (Reported Today)
| Issue | Severity | Component | Status | Fix PR |
|-------|----------|-----------|--------|--------|
| [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) Pre-output stream failure skips advertised non-streaming fallback | S2 (degraded) | provider | Open | — |
| [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) `process_line` stack overflow on constrained Windows thread stack | S2 (degraded) | tooling/ci | Open | **[#10735](https://github.com/zeroclaw-labs/zeroclaw/pull/10735) merged** |
| [#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) `zeroclaw service logs` prints nothing on macOS/Windows/OpenRC when daemon healthy | S2 (degraded) | runtime/daemon | Open (updated 2026-09-09) | — |

**Assessment:** Two new S2 bugs today; one already fixed (#10734 → #10735). The provider streaming fallback bug (#10736) affects reliability of custom/OpenAI-compatible endpoints. The logging bug (#10731) is cross-platform (non-systemd).

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Runtime-owned session model** (transport adapters, channel unification) | #9487 (Rev 5), #10412 (PR: `SessionBackend` contract) | High — PR #10412 implements the backend trait; RFC still in discussion |
| **Unified attachment/file architecture** | #9488 (Rev 10), #10407 (PR: persistent session prompt attachments) | High — PR #10407 adds SQLite-backed prompt attachments; file RFC broader |
| **Granular sandbox policy (FS restrictions)** | #6996 (accepted), #7821 (PR: `SandboxPolicyConfig`) | High — PR #7821 is canonical schema; both open but accepted |
| **WASM plugin runtime (core APIs, typed extension points)** | #10076 (RFC), #10526 (RFC: append-only event history) | Medium — #10526 split out session history; WASM RFC still early |
| **A2A outbound client (tools, wire model, config)** | #9324 (PR: phase 1 of #9106) | Medium — PR open, size:XL, needs-author-action |
| **Gateway SSE streaming for webhooks** | #10450 (PR: opt-in SSE on `/webhook`) | Medium — PR open, size:XL |
| **Cron/internal-principal envelope & separated outcomes** | #10425 (PR: RFC #6954 slice 1/3) | Medium — PR open, size:XL |
| **RFC process simplification (remove mandatory discussion windows)** | #10549 (RFC) | Low-Medium — process change, not user-facing |

**Prediction:** Next version will likely ship **session backend abstraction**, **attachment primitives**, and **sandbox policy v1**; WASM plugins and A2A may follow in subsequent minors.

## 7. User Feedback Summary (Pain Points & Use Cases)
| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Provider streaming reliability** — fallback not triggered on early stream error | #10736 (filed today) | Users of custom/OpenAI-compatible endpoints |
| **Windows CI/test instability** — stack overflow in dispatch tests | #10734 (filed today), fixed by #10735 | Windows contributors / CI runners |
| **Daemon log access broken on non-Linux** — `service logs` emits nothing | #10731 (filed 2026-09-09) | macOS, Windows, OpenRC operators |
| **Channel prompt misidentification** — CLI/embedder surfaces incorrectly labeled as “messaging bot” | #10049 (PR: let embedder declare channel surface) | Channel/embedder integrators |
| **SOP rename forks instead of renames** | #10233 (PR: collision-checked atomic rename) | SOP authors |
| **OpenRouter stream timeouts** — reqwest global timeout kills long streams | #10442 (PR: dedicated client, silence bounds) | OpenRouter users |
| **Shared workspace read access too permissive** — operators must hand-write allowlists | #10308 (PR: per-agent `can_use_shared_workspace` flag) | Multi-agent/team operators |

**Sentiment:** Users are **building integrations (channels, embedders, custom providers, SOPs)** and hitting **edge-case reliability gaps** (streaming, logging, sandboxing, cross-platform). The RFC volume shows contributors want **stable, well-defined primitives** before scaling.

## 8. Backlog Watch (Long-Unanswered / Needs Maintainer Attention)
| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) `feat(security): canonical sandbox_policy schema` | Opened 2026-06-17 (85 days) | Open, needs-author-action, size:XL | **Blocker for #6996 (accepted RFC)** — canonical OS sandbox model; no movement since late August. |
| [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) `feat(a2a): outbound client config, wire-model, tools` | Opened 2026-07-24 (48 days) | Open, needs-author-action, size:XL | **A2A interoperability** — first-class agent-to-agent protocol support; large PR awaiting review. |
| [#9713](https://github.com/zeroclaw-labs/zeroclaw/pull/9713) `feat(runtime): expose token accounting on history-trim` | Opened 2026-08-03 (38 days) | Open, status:blocked, size:XL | **Token observability** — blocked on stacked PR #9447; needed for cost control. |
| [#9999](https://github.com/zeroclaw-labs/zeroclaw/pull/9999) `fix(compatible): classify output-limited terminal responses` | Opened 2026-08-14 (27 days) | Open, status:blocked, size:XL | **Provider reliability** — stacked on #9447; fixes misclassification of truncated responses. |
| [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) `feat(session): extract atomic session-ownership claim` | Opened 2026-08-27 (14 days) | Open, needs-author-action, size:XL | **Core session model** — implements `SessionBackend` trait for #9487; high leverage. |
| [#10425](https://github.com/zeroclaw-labs/zeroclaw/pull/10425) `feat(runtime): internal-principal envelope & cron outcomes` | Opened 2026-08-28 (13 days) | Open, needs-maintainer-review, size:XL | **Cron/runtime provenance** — slice 1 of accepted RFC #6954. |
| [#10450](https://github.com/zeroclaw-labs/zeroclaw/pull/10450) `feat(gateway): stream webhook chat turns over SSE` | Opened 2026-08-29 (12 days) | Open, needs-maintainer-review, size:XL | **Real-time webhook consumers** — opt-in SSE streaming. |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Tracker: Maintainer decision queue for RFCs | Opened 2026-07-04 (68 days) | Open, 15 comments | **Governance backlog** — 10+ RFCs awaiting maintainer decision; process bottleneck. |

**Recommendation:** Maintainers should prioritize **#7821 (sandbox schema)**, **#10412 (session backend)**, and **#8692 (RFC queue triage)** to unblock the highest-impact architectural work.

---

*Data sourced from GitHub API (issues/PRs updated 2026-09-09 → 2026-09-10). All links point to zeroclaw-labs/zeroclaw.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*