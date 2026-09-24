# OpenClaw Ecosystem Digest 2026-09-24

> Issues: 235 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-24 04:23 UTC

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

# OpenClaw Project Digest — 2026-09-24

## 1. Today's Overview

OpenClaw shows **extremely high activity** with 235 issues and 500 PRs updated in the last 24 hours, indicating a project in active maintenance and rapid iteration. However, the latest release **v2026.9.6 has a critical macOS regression** causing app crashes on every launch after in-app update — the build has been withdrawn from the Sparkle feed and a hotfix v2026.9.7 is in progress. The issue backlog reveals systemic stability concerns: memory subsystem deadlocks, gateway CPU spikes on ARM64, session corruption races, and config hot-reload aborting in-flight turns. Despite 115 PRs merged/closed today, the open PR count (385) and issue count (176 active) suggest maintainer throughput is stretched.

## 2. Releases

### v2026.9.6 — **WITHDRAWN** (Critical macOS Regression)
- **Status**: Pulled from Sparkle update feed; do not update macOS app
- **Critical Bug**: macOS app crashes on every launch after in-app update ([#156861](https://github.com/openclaw/openclaw/issues/156861))
- **Workaround**: Reinstall v2026.9.5 macOS build from [releases](https://github.com/openclaw/openclaw/releases/tag/v2026.9.5)
- **Hotfix**: v2026.9.7 in progress
- **Note**: Other platforms (Linux, Windows) appear unaffected

## 3. Project Progress (Merged/Closed Today)

| PR | Area | Change |
|----|------|--------|
| [#156954](https://github.com/openclaw/openclaw/pull/156954) | CI/Docker | Fixed Docker image mirroring to VCR under 2GB layer cap (blocked since v2026.9.1) |
| [#156994](https://github.com/openclaw/openclaw/pull/156994) | Security | Demo: lockfile cleanup after main advances (not for merge) |
| [#156993](https://github.com/openclaw/openclaw/pull/156993) | Security | Demo: security approval revocation on unchanged external-author PR (not for merge) |
| [#60398](https://github.com/openclaw/openclaw/issues/60398) | Gateway | Gateway install on external APFS volume — still open, but linked PR exists |

**Key movement**: CI pipeline unblocked for Docker releases; security review automation validated; several high-priority fix PRs in "ready for maintainer look" state.

## 4. Community Hot Topics (Most Discussed)

| Issue | Comments | Priority | Core Need |
|-------|----------|----------|-----------|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered bootstrap file loading | 19 | P2 | **Context budget control** — users with large workspaces waste tokens loading unused bootstrap files into every session/sub-agent/cron |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) Memory file watcher never reindexes | 11 | P1 | **Memory reliability** — index silently freezes; `memory status` reports `Dirty: no` while indexed count < on-disk count |
| [#129314](https://github.com/openclaw/openclaw/issues/129314) Runtime context leaks as visible turn | 9 | P1 | **Message integrity** — internal metadata envelope (`<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>...`) intermittently renders to user |
| [#53008](https://github.com/openclaw/openclaw/issues/53008) Memory compaction blocks main lane 10+ min | 8 | P1 | **Availability** — `memoryFlush` hangs gateway, queues all inbound messages (Telegram bot unresponsive) |
| [#134925](https://github.com/openclaw/openclaw/issues/134925) Gateway 100% CPU on ARM64/Pi | 8 | P1 | **ARM64 viability** — every agent turn pegs CPU on Raspberry Pi since v2026.8.1 |
| [#139215](https://github.com/openclaw/openclaw/issues/139215) Cron scheduler swallows ticks silently | 7 | P1 | **Scheduler reliability** — jobs don't fire, no error, no run entry since v2026.9.1 |
| [#144291](https://github.com/openclaw/openclaw/issues/144291) Config hot-reload aborts in-flight turns | 5 | P1 | **Operational safety** — any `openclaw config set` on hot-reloadable path kills active agent turns |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) `openclaw update` fails at global install swap | 6 | P0 | **Self-update reliability** — CLI update fails deterministically while `npm install -g` succeeds |

**Pattern**: Users are hitting **core infrastructure regressions** (memory, scheduler, config, update) introduced in recent 2026.8.x–2026.9.x releases. The "silent failure" theme (no errors, no logs, just broken behavior) appears repeatedly.

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P0 / Release Blockers)
| Issue | Symptom | Fix PR? |
|-------|---------|---------|
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` fails at global install swap (npm global) | No |
| [#60398](https://github.com/openclaw/openclaw/issues/60398) | Gateway install fails with error 5 on external APFS volume (macOS) | Linked PR open |
| [#140443](https://github.com/openclaw/openclaw/issues/140443) | Gateway RSS growth → OOM restart cycle recurs on v2026.9.2 (macOS, non-cgroup) despite prior fixes | No |
| [#139960](https://github.com/openclaw/openclaw/issues/139960) | Session reset racing live turn flush persists corrupted row, bricks agent on all surfaces | No |

### 🟠 High (P1 — Data Loss / Availability / Security)
| Issue | Symptom | Fix PR? |
|-------|---------|---------|
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | Memory file watcher never reindexes; index silently stale | No |
| [#129314](https://github.com/openclaw/openclaw/issues/129314) | Internal runtime context leaks as visible message | No |
| [#53008](https://github.com/openclaw/openclaw/issues/53008) | Memory compaction blocks main lane 10+ min, bot unresponsive | No |
| [#134925](https://github.com/openclaw/openclaw/issues/134925) | Gateway 100% CPU on ARM64/Pi every agent turn | No |
| [#139215](https://github.com/openclaw/openclaw/issues/139215) | Cron scheduler silently swallows scheduled ticks | No |
| [#144291](https://github.com/openclaw/openclaw/issues/144291) | Config hot-reload aborts every in-flight agent turn | No |
| [#141129](https://github.com/openclaw/openclaw/issues/141129) | SSH sessions SIGTSTP/SIGTERM on long commands since 8.x | No |
| [#138644](https://github.com/openclaw/openclaw/issues/138644) | CLI no-output watchdog kills turn during Claude Code auto-compaction | No |
| [#139672](https://github.com/openclaw/openclaw/issues/139672) | claude-cli agentRuntime: subagent spawn fails with authority mismatch | No |
| [#135510](https://github.com/openclaw/openclaw/issues/135510) | In-process gateway tool dispatch dies after prompt-tools resume | No |
| [#134215](https://github.com/openclaw/openclaw/issues/134215) | `openclaw backup create` hangs/deadlocks while gateway running | No |
| [#138775](https://github.com/openclaw/openclaw/issues/138775) | Memory search livelock: every search triggers failing full reindex | No |
| [#139066](https://github.com/openclaw/openclaw/issues/139066) | Voice call `sendDtmf` tears down realtime media stream | No |

### 🟡 Medium (P2 — UX / Correctness)
| Issue | Symptom | Fix PR? |
|-------|---------|---------|
| [#49205](https://github.com/openclaw/openclaw/issues/49205) | Control UI messages reach context but not Open WebUI history | No |
| [#139217](https://github.com/openclaw/openclaw/issues/139217) | Codex commentary stored but never reaches Discord progress draft | No |
| [#137922](https://github.com/openclaw/openclaw/issues/137922) | Attachment previews show "Unavailable" in all WebKitGTK clients | No |
| [#132616](https://github.com/openclaw/openclaw/issues/132616) | `configure` crashes after write: `state.reclaimGuards is not iterable` | No |
| [#129716](https://github.com/openclaw/openclaw/issues/129716) | TUI renders all output at once, jumps to top (regression since 2026.7.1) | No |
| [#123886](https://github.com/openclaw/openclaw/issues/123886) | Telegram model picker overlaps stale rich text after legacy edit | No |
| [#156930](https://github.com/openclaw/openclaw/issues/156930) | Codex resident catalog `PLUGIN_STATE_OPEN_FAILED` every 30s on v2026.9.6 | No |
| [#141581](https://github.com/openclaw/openclaw/issues/141581) | `llm_output.usage` undefined for google/gemini models | No |
| [#140464](https://github.com/openclaw/openclaw/issues/140464) | Usage tab counts cron prompt twice | No |

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) Tiered bootstrap loading | **High demand** — progressive context control for large workspaces; linked PR open | Medium (P2, needs product decision) |
| [#47320](https://github.com/openclaw/openclaw/issues/47320) Recursive subagent listing (`--depth/--recursive`) | Orchestrator pattern users need visibility into depth-2 workers | Medium (P3, needs product decision) |
| [#138323](https://github.com/openclaw/openclaw/issues/138323) Evolve Quick Chat into universal HUD | Strategic UX direction — context/action surface across apps | Low (P2, early design) |
| [#138279](https://github.com/openclaw/openclaw/issues/138279) Linux aarch64 companion builds (deb + AppImage) | Parity with Windows ARM64 companion; ARM Linux desktop growing | High (P3, clear ask, Windows already ships) |
| [#42373](https://github.com/openclaw/openclaw/issues/42373) `costCurrency` config option | Internationalization — display costs in local currency (¥, €, etc.) | Medium (P3, simple config add) |
| [#129327](https://github.com/openclaw/openclaw/issues/129327) Proactive quota/usage alerts at 80/85/90/95% | Observability — prevent silent exhaustion failures | Medium (P3, needs product decision) |
| [#154208](https://github.com/openclaw/openclaw/pull/154208) Agents API: add OpenClaw tool support | **Active PR** — extends Agents API beyond MVP to use gateway tools (memory, plugins) | High (P2, ready for maintainer look) |

**Roadmap prediction**: Next stable (v2026.9.7+) will likely include macOS hotfix + ARM64 Linux builds. Tiered bootstrap, recursive subagents, and cost currency are strong candidates for 2026.10.x. Agents API tool support is actively being built.

## 7. User Feedback Summary

### Pain Points (Direct from Issues)
- **"Silent failures are the worst"** — memory index freezes, cron jobs don't fire, config reload kills turns — all without errors or logs ([#119411](https://github.com/openclaw/openclaw/issues/119411), [#139215](https://github.com/openclaw/openclaw/issues/139215), [#144291](https://github.com/openclaw/openclaw/issues/144291))
- **"Update mechanism is broken"** — `openclaw update` fails while `npm install -g` works; macOS app crashes post-update ([#156112](https://github.com/openclaw/openclaw/issues/156112), v2026.9.6 release note)
- **"ARM64 is second-class"** — 100% CPU on Pi, no Linux ARM64 companion builds ([#134925](https://github.com/openclaw/openclaw/issues/134925), [#138279](https://github.com/openclaw/openclaw/issues/138279))
- **"Memory subsystem is unreliable"** — compaction blocks gateway, search livelocks, watcher doesn't reindex ([#53008](https://github.com/openclaw/openclaw/issues/53008), [#138775](https://github.com/openclaw/openclaw/issues/138775), [#119411](https://github.com/openclaw/openclaw/issues/119411))
- **"Session corruption is catastrophic"** — race conditions brick agents across all surfaces ([#139960](https://github.com/openclaw/openclaw/issues/139960), [#129314](https://github.com/openclaw/openclaw/issues/129314))

### Use Cases Emer

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: AI Agent & Personal AI Assistant Open-Source Ecosystem (2026-09-24)

---

## 1. Ecosystem Overview

The personal AI agent open-source landscape is **highly fragmented but technically convergent**, with 12 active projects showing divergent maturity levels. A clear split exists between **high-velocity core frameworks** (OpenClaw, ZeroClaw, CoPaw, NanoClaw, NullClaw, LobsterAI) shipping weekly-to-daily iterations, and **specialized/early-stage projects** (IronClaw, Moltis, PicoClaw, Hermes Agent) in stabilization or niche hardening phases. **Context/window management, sandbox security, multi-channel reliability, and provider extensibility** emerge as universal technical preoccupations. Release cadences range from weekly dated releases (LobsterAI) to month-long RC cycles (IronClaw), with several projects (OpenClaw, PicoClaw) experiencing critical regressions that expose gaps in pre-release validation.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed | Release Status | Health Score* |
|---------|--------------|-----------|---------------|----------------|---------------|
| **OpenClaw** | 235 | 500 | 115 | **v2026.9.6 WITHDRAWN** (macOS crash); v2026.9.7 hotfix in progress | 🟡 **Stressed** — high throughput but critical regressions, maintainer throughput stretched |
| **ZeroClaw** | 5 | 50 | 3 | v0.8.5 (Sep); RFCs active, release-efficiency tracker open | 🟢 **Hardening** — security-focused, architectural RFCs, review bottleneck on XL PRs |
| **CoPaw** | 28 | 29 | 13 | v2.2.0 (Hub); v2.2.2b4 pre-release; patch imminent | 🟡 **Stabilizing** — critical context/window bugs open, Hub driving roadmap |
| **NanoClaw** | 2 | 27 | 17 | **v2.4.0 released today** (gateway skills, Iron Proxy, Mattermost) | 🟢 **Healthy** — major refactor shipped, update pipeline hardened, clear roadmap |
| **NullClaw** | 18 | 21 | 8 | v2026.5.29 (4mo old); fixes merged for next cut | 🟢 **Stabilizing** — low-resource focus, crash-loop fixes merged, config gaps closing |
| **LobsterAI** | 0 | 50 | 50 | **2026.9.23 released** (weekly cadence); Jev model, live progress | 🟢 **Mature Cadence** — predictable weekly releases, zero public issues, enterprise focus |
| **NanoBot** | 6 | 41 | 20 | v0.3.5 (Aug); 0.3.6 patch imminent | 🟢 **Steady** — P0 race fixed same day, provider/contributor growth |
| **Hermes Agent** | 8 | 50 | 7 | v2026.9.21 (3d ago); same-day fixes for today's regressions | 🟡 **Stabilizing** — zero GitHub discussion, responsive triage, WhatsApp/Docker gaps persist |
| **IronClaw** | 0 | 3 updated | 0 | 1.4.1-rc.2 (security patches); docs hardening | 🟡 **Quiet** — core-team only, dependency/security focus, no community signals |
| **PicoClaw** | 1 | 2 | 1 | None; **homepage down 14+ days (TLS expiry)** | 🔴 **Critical Infra** — code advancing, credibility blocked by unaddressed cert renewal |
| **Moltis** | 0 | 1 open | 0 | None recent; sandbox customization PR open | ⚪ **Early** — minimal signals, single feature branch |
| **ZeptoClaw** | 0 | 0 | 0 | None | ⚪ **Dormant** — no 24h activity |

*Health Score: 🟢 Healthy/Stable | 🟡 Stressed/Stabilizing | 🔴 Critical | ⚪ Low Signal*

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Largest scale & throughput**: 500 PRs/24h dwarfs all others (next: ZeroClaw/Hermes at 50)
- **Broadest surface coverage**: Gateway, memory, scheduler, config, update, sessions, multi-platform (macOS/Linux/Windows/ARM64), multi-channel (Telegram, Discord, WebUI, CLI, TUI)
- **Reference implementation status**: Other projects (NanoClaw, NullClaw, CoPaw) implicitly or explicitly track OpenClaw patterns

**Technical Approach Differences:**
- **Monolithic gateway architecture** vs. NanoClaw's skill-based gateway extraction, ZeroClaw's sandbox-first delegation, IronClaw's WASM runtime
- **In-process tool dispatch** vs. LobsterAI/NullClaw's containerized/isolated execution
- **Sparkle-based macOS updates** (currently broken) vs. NanoClaw's container-cutover, CoPaw's Hub-managed updates

**Community Size Comparison:**
- **Issues/PRs volume** suggests largest contributor/maintainer base, but **maintainer throughput is visibly stretched** (385 open PRs, 176 active issues)
- **Silent-failure regression pattern** (memory, scheduler, config, update) indicates test/observability gaps at scale
- **No public discussion metrics** (comments/reactions) provided — unlike CoPaw (33 comments on Hub roadmap) or NanoBot (external provider contributions)

---

## 4. Shared Technical Focus Areas

| Requirement | Projects | Specific Needs |
|-------------|----------|----------------|
| **Context/Window Management** | OpenClaw (#22438, #129314), CoPaw (#7576, #7853, #7628), NullClaw (#9368), ZeroClaw (#9368) | Tiered bootstrap loading, base64 pruning, compaction budget accuracy, turn-based history counting |
| **Sandbox & Execution Security** | ZeroClaw (#10381, #10391, #11061), NanoClaw (#3872, #3873), IronClaw (scoped skill roots), Moltis (#1272), CoPaw (#2978, #4361) | Host launcher ordering, delegate workspace isolation, allowlist bypass prevention, per-agent mounts/UID |
| **Multi-Channel Reliability** | OpenClaw (#139215, #141129), NullClaw (#972, #915), CoPaw (#3037, #5558), Hermes (#80056, #80066) | Cron/scheduler delivery, Telegram/WhatsApp/Feishu idempotency, read-receipt parity, long-poll recovery |
| **Provider Extensibility & Identity** | NanoBot (#5875, #5886), ZeroClaw (#10172), NullClaw (#981), CoPaw (#7959), Hermes (#120069) | Profile semantics preservation (`family.alias`), streaming tool calls, MCP schema validation, OAuth parity |
| **Update/Self-Upgrade Reliability** | OpenClaw (#156112, v2026.9.6), NanoClaw (#3869, #3828, #3750), CoPaw (Hub), LobsterAI (Windows installer) | Atomic cutover, transitive import capture, container drain ordering, rollback safety |
| **Low-Resource/Edge Deployment** | NullClaw (#871, #976, #870), PicoClaw (ARM focus), Hermes (Windows/Wayland), ZeroClaw (#10970) | Stack-size tuning, CPU busy-loop fixes, lightweight search, per-agent resource bounds |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architectural Signature |
|---------|---------------|--------------|-------------------------|
| **OpenClaw** | Universal gateway/runtime | Power users, developers, self-hosters | Monolithic gateway, in-process tools, multi-surface (CLI/TUI/Web/IM) |
| **ZeroClaw** | Multi-agent governance & security | Operators running fleets, multi-tenant | Sandbox-first, delegate tools, admission control RFC, resource bounds |
| **NanoClaw** | Gateway-as-skill, enterprise channels | Teams, Slack/Mattermost/Teams shops | Skill-based gateway contract, managed Slack app, containerized agents |
| **CoPaw** | Multi-tenant Hub, Chinese IM ecosystem | Enterprise WeChat/Feishu/DingTalk users | Hub multi-tenancy, Ark Responses API, OpenViking memory plugin |
| **NullClaw** | Low-resource edge, privacy | Raspberry Pi, Termux, cheap VPS, WSL2 | Configurable memory recall, SQLite path, aarch64 stack tuning |
| **LobsterAI** | Enterprise desktop & collaboration | Windows enterprise, Team Edition customers | Weekly release train, Cowork real-time, DeepSeek Harness runtime |
| **Hermes Agent** | Desktop + local models, federation | Local-first, Wayland/Windows, Bitwarden users | Unified package manager RFC, federated failure learning, cron reliability |
| **NanoBot** | Provider/skill ecosystem, Linear/WhatsApp | Developers extending via skills | Provider plugins (io.net, Fish Audio), manual-only skills, Langfuse tracing |
| **IronClaw** | WASM runtime, Nix/tenant isolation | NixOS, security-conscious, multi-tenant | Scoped virtual skill roots, nightly codebase-graph, rustls/wasmtime pins |
| **PicoClaw** | Remote pairing, search providers | Build Remote Agent users, ARM edge | gbr/1 protocol, Keenable search, homepage-dependent distribution |
| **Moltis** | Per-agent sandbox policy | Compliance/tenant isolation | Mounts/run_as/force per agent preset |
| **ZeptoClaw** | — | — | No signal |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (Daily/Weekly Releases)** | LobsterAI, NanoClaw, OpenClaw | Automated release trains, high PR merge rates, but OpenClaw shows regression debt |
| **Active Stabilization (Patch Imminent)** | CoPaw, NullClaw, NanoBot, Hermes Agent | Critical bugs fixed same-day, patch releases queued, context/window/scheduler focus |
| **Architectural Hardening (RFC/RC Phase)** | ZeroClaw, IronClaw, Hermes Agent | Security/modeling RFCs, dependency patches, design decisions blocking merges |
| **Niche/Specialized** | Moltis, PicoClaw | Single-feature PRs, low community engagement, infra or review gaps |
| **Dormant/Inactive** | ZeptoClaw | No 24h activity |

**Key Insight**: The ecosystem is **bimodal** — mature products (LobsterAI, NanoClaw) ship predictable increments, while reference-scale projects (OpenClaw, ZeroClaw) absorb regression risk at high velocity. Mid-tier projects (CoPaw, NullClaw, NanoBot) are aggressively closing stability gaps.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Gateway/Tool Contract Standardization** | NanoClaw skill extraction, ZeroClaw `SandboxPolicyConfig`, OpenClaw config hot-reload failures, Moltis per-agent sandbox | **High** — Interoperable gateway skills emerging as de facto plugin model; invest in contract testing |
| **Context as Explicit Resource** | Tiered bootstrap (OpenClaw), base64 pruning (CoPaw), turn-counting (ZeroClaw/NullClaw), recall limits (NullClaw) | **High** — Context budgeting replacing implicit limits; build observability into context pipelines |
| **Multi-Agent Governance Primitives** | ZeroClaw admission control + A2A messaging RFCs, CoPaw Hub RBAC/audit requests, Hermes federated learning | **Medium-High** — Early but converging; design for agent identity, resource quotas, cross-session messaging |
| **Edge/Low-Resource as First-Class Target** | NullClaw aarch64/Termux/WSL2 fixes, PicoClaw ARM, Hermes Windows/Wayland, ZeroClaw per-agent bounds | **Medium** — "Runs on Pi" becoming credibility signal; optimize stack, CPU, binary size |
| **Update/Deployment as Product Feature** | NanoClaw cutover hardening, OpenClaw Sparkle failure, CoPaw Hub, LobsterAI Windows installer, IronClaw Nix | **High** — Self-update reliability directly impacts retention; treat update path as critical UX |
| **Provider Identity Fidelity** | ZeroClaw `family.alias` preservation, NanoBot provider plugins, CoPaw Moonshot schema, Hermes Anthropic 400s | **Medium** — Profile-aware routing breaking silently; build provider abstraction with identity guarantees |
| **Observability Gaps** | Silent failures across OpenClaw/NullClaw/Hermes/CoPaw; LobsterAI privacy analytics; NullClaw `/status` request | **High** — "No errors, just broken behavior" is the dominant failure mode; invest in structured telemetry |

---

## Summary for Decision-Makers

- **If building on a framework**: **NanoClaw** offers the cleanest gateway-skill architecture with recent major release; **NullClaw** for edge/privacy; **ZeroClaw** for multi-agent governance (track RFCs).
- **If contributing**: **NanoBot** and **CoPaw** show strong external contributor merges (providers, skills, memory); **OpenClaw** needs maintainer bandwidth more than code.
- **If evaluating maturity**: **LobsterAI** demonstrates enterprise-grade release discipline; **IronClaw** shows security-first WASM/Nix path; **PicoClaw**/ **Moltis** are too early for production dependency.
- **Critical Watch**: OpenClaw's v2026.9.7 hotfix and PicoClaw's TLS resolution will signal maintainer capacity for the two most widely referenced projects.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-24

## 1. Today's Overview
NanoBot shows **high development velocity** with 41 pull requests and 6 issues updated in the last 24 hours. The merge rate is strong: 20 PRs were closed/merged versus 21 still open, indicating steady progress on both bug fixes and feature work. No new release was published today, but the volume of merged PRs (including provider fixes, WebUI refactors, memory-safety patches, and a new provider integration) suggests a **0.3.6 patch release is imminent**. Community engagement remains modest on issues (max 3 comments), but contributor activity on PRs is robust.

## 2. Releases
**No new releases today.** The last published version remains **0.3.5** (which introduced the `runtime_data_dir` validation that triggered issue #5881).

## 3. Project Progress — Key Merged/Closed PRs (20 total)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#5889](https://github.com/HKUDS/nanobot/pull/5889) | refactor/perf | DingTalk: use streaming media downloads in tests & runtime; 41 tests pass | Removes buffered fallback, improves memory use |
| [#5886](https://github.com/HKUDS/nanobot/pull/5886) | bugfix | Providers: preserve image inputs for `deepseek-flash` | Fixes silent image loss in multimodal calls |
| [#5883](https://github.com/HKUDS/nanobot/pull/5883) | bugfix | Agent: preserve state for required Codex compaction | Prevents premature history summarization before native Codex compaction |
| [#5871](https://github.com/HKUDS/nanobot/pull/5871) | feature | Linear: improve native agent UX (mentions, OAuth, health checks) | Major UX upgrade for Linear integration |
| [#5875](https://github.com/HKUDS/nanobot/pull/5875) | feature | Providers: add **IO Intelligence (io.net)** provider | Official io.net contribution; new inference backend |
| [#5780](https://github.com/HKUDS/nanobot/pull/5780) | bugfix | Stop sending context compaction notifications (auto) | Addresses user annoyance from #5870; retains `/compact` notices |
| [#5884](https://github.com/HKUDS/nanobot/pull/5884) | bugfix (p0) | Memory: prevent compaction overwriting concurrent appends | Critical race-condition fix in `MemoryStore` |
| [#5890](https://github.com/HKUDS/nanobot/pull/5890) | security/fix | WebUI: require handshake headers for Full Access eligibility | Closes auth-bypass vector in WS channel |
| [#5892](https://github.com/HKUDS/nanobot/pull/5892) | refactor | API: use typed application state consistently | Removes legacy string-key protocol; 44 tests pass |
| [#5891](https://github.com/HKUDS/nanobot/pull/5891) | refactor | WebUI: clear turns only through owner registry | Eliminates alternate cleanup path; improves reliability |

*Other merged PRs include tokenizer warm-up (#5861), idle-summary cache bounding (#5664), and CLI onboarding fixes (#5887, #5888).*

## 4. Community Hot Topics
| Item | Comments | Reactions | Core Need |
|------|----------|-----------|-----------|
| [#5870](https://github.com/HKUDS/nanobot/issues/5870) (Closed) | 3 | 0 | **Stop spammy compaction notices** — users saw 6+ “Context compacted.” messages per conversation; fixed by #5780 |
| [#2152](https://github.com/HKUDS/nanobot/issues/2152) (Closed) | 2 | 2 | **Native WhatsApp voice (STT+TTS)** — external skill exists but requires bridge patching; users want built-in support |
| [#5879](https://github.com/HKUDS/nanobot/issues/5879) (Open) | 2 | 0 | **Large `read_file` results break compaction** — tool output outside history prefix survives summarization and exceeds budget |
| [#5881](https://github.com/HKUDS/nanobot/issues/5881) (Open) | 0 | 0 | **0.3.5 config validation forces `_nanobot` outside workspace** — breaking change for multi-instance setups; needs migration path |

*PR comment counts are not exposed in the feed; the above reflects issue discussion heat.*

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue / PR | Status | Description |
|----------|------------|--------|-------------|
| **P0** | [#5884](https://github.com/HKUDS/nanobot/pull/5884) | Merged | Race: `compact_history()` didn’t hold `_append_lock`, could overwrite concurrent appends |
| **P1** | [#5870](https://github.com/HKUDS/nanobot/issues/5870) | Fixed (#5780 merged) | Telegram: auto-compaction notice repeated many times per conversation |
| **P1** | [#5861](https://github.com/HKUDS/nanobot/pull/5861) | Open | Tokenizer: fallback tokenizer not warmed at startup → UTF-8 byte estimates used until ready |
| **P2** | [#5879](https://github.com/HKUDS/nanobot/issues/5879) | Open | Large `read_file` results survive compaction as unsummarized delta, abort turn |
| **P2** | [#5881](https://github.com/HKUDS/nanobot/issues/5881) | Open | 0.3.5 validation rejects `_nanobot/sessions` inside workspace — blocks multi-instance users |
| **P2** | [#5886](https://github.com/HKUDS/nanobot/pull/5886) | Merged | `deepseek-flash` silently dropped image inputs |
| **P2** | [#5890](https://github.com/HKUDS/nanobot/pull/5890) | Open | WebUI: Full Access eligibility fell back to peer address without handshake headers |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Native WhatsApp voice (STT+TTS)** | [#2152](https://github.com/HKUDS/nanobot/issues/2152) (2 👍) | Medium — external skill works; core integration would eliminate patching |
| **Boot notification via WhatsApp** | [#2160](https://github.com/HKUDS/nanobot/issues/2160) | Low — standalone skill exists; not core |
| **Manual-only skill invocation** | [#5405](https://github.com/HKUDS/nanobot/pull/5405) | High — PR open since Aug, adds `disable-model-invocation: true` for side-effect skills |
| **Langfuse tracing for Codex** | [#5520](https://github.com/HKUDS/nanobot/pull/5520) | Medium — PR open since Aug, conflict label; observability push |
| **IO Intelligence provider** | [#5875](https://github.com/HKUDS/nanobot/pull/5875) | **Done** — merged today, official io.net contribution |
| **Unified file/website previews in WebUI** | [#5847](https://github.com/HKUDS/nanobot/pull/5847) | High — active PR consolidating #5850 & #5852 |

## 7. User Feedback Summary
- **Pain points**:  
  - **Spammy notifications** (#5870) — users found auto-compaction alerts “quite annoying.”  
  - **Breaking config change** (#5881) — 0.3.5 forces `_nanobot` outside workspace, breaking existing multi-instance deployments without clear migration.  
  - **Large file handling** (#5879) — `read_file` output can exceed token budget post-compaction, aborting turns.  
- **Positive signals**:  
  - Community contributes **full provider integrations** (io.net, Fish Audio for WhatsApp voice).  
  - **Skill ecosystem** growing (boot notification, Linear UX).  
  - Users willing to maintain external skills but prefer upstream support.

## 8. Backlog Watch — Stale / Needs Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | 31 days | Langfuse tracing for Codex; conflict label blocks merge — observability gap for Codex users |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) | 39 days | Manual-only skill invocation; important for deployment/publishing skills safety |
| [#5664](https://github.com/HKUDS/nanobot/pull/5664) | 20 days | Bounds idle-summary cache; prevents unbounded memory growth from abandoned sessions |
| [#5861](https://github.com/HKUDS/nanobot/pull/5861) | 2 days (but conflict) | Tokenizer warm-up; conflicts with other refactors — perf/correctness for token counting |
| [#5290](https://github.com/HKUDS/nanobot/issues/5290) | 48 days | Deduplicate atomic JSONL write idiom (3 copies); tech-debt reduction |

---

**Health Indicators**  
- 🟢 **Merge throughput**: 20 PRs/24h  
- 🟢 **Critical bug turnaround**: P0 race fixed same day (#5884)  
- 🟡 **Release cadence**: No cut since 0.3.5; patch backlog growing  
- 🟡 **Config migration**: Breaking change in 0.3.5 (#5881) lacks documented upgrade path  
- 🟢 **Community contributions**: 2 external provider/skill integrations merged/accepted  

*Next expected milestone: **0.3.6** patch addressing #5881 migration, #5879 large-file compaction, and merging queued features (#5405, #5847).*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-24

## 1. Today's Overview
Hermes Agent shows **high velocity with zero releases** — 50 PRs and 8 issues updated in 24 hours, indicating intense maintenance and bug-fix cycles rather than feature delivery. Seven PRs were merged/closed today, mostly targeted fixes for regressions and security issues. Notably, **three issues opened today already have corresponding fix PRs** (Anthropic 400 error, Docker sandbox spillover, Rich markup injection), suggesting a responsive triage process. The project is in a stabilization phase addressing platform-specific bugs (WhatsApp, Windows, Wayland), provider compatibility (Anthropic Opus 5.5), and security boundaries.

## 2. Releases
**No new releases today.** The latest version remains v2026.9.21 (commit `d337b736aa`). Several merged PRs today (#115808, #94973) contain fixes that would typically ship in a patch release.

## 3. Project Progress — Merged/Closed PRs Today (7)
| PR | Title | Impact |
|----|-------|--------|
| [#115808](https://github.com/NousResearch/hermes-agent/pull/115808) | **fix(cron)**: deliver=origin from api_server reaches home channel instead of failing silently | Fixes cron job delivery regression for API server sessions (refs #69304, #69384) |
| [#94973](https://github.com/NousResearch/hermes-agent/pull/94973) | **fix(desktop)**: keep fullscreen chat windows unthrottled (Wayland white screen) | Resolves Hyprland/Wayland fullscreen white-screen after idle; superseded by #121020 |
| *5 others* | Various bug fixes | Includes session compression, CLI resize, pricing validation, auth preservation |

**Key advancement**: Cron job reliability for headless/API-driven sessions restored; Wayland desktop rendering stabilized.

## 4. Community Hot Topics
*No issues/PRs have comments or reactions in this dataset (all show `Comments: 0` or `undefined`).* This suggests either:
- Very recent activity (many items created/updated today)
- Discussion happens elsewhere (Discord, internal channels)
- Low community engagement on GitHub proper

**Most structurally significant open threads** (by scope/risk labels):
1. **[#111200](https://github.com/NousResearch/hermes-agent/issues/111200)** — *Failure-pattern exchange across Hermes instances (human-gated)* — **Feature, P3, needs-decision** — Proposes federated learning from failures; architectural shift toward collective intelligence.
2. **[#102765](https://github.com/NousResearch/hermes-agent/pull/102765)** — *Bundles & unified package manager* — **Feature, P3, needs-decision, ci-reviewed** — Unifies tool installation, dependencies, packaging, updaters across Docker/Nix/desktop/Windows; 20-day-old PR awaiting decision.
3. **[#74440](https://github.com/NousResearch/hermes-agent/pull/74440)** — *Quarantine open-policy platform instead of aborting gateway startup* — **Bug, P2, needs-decision, multiple risk sweepers** — Single misconfigured transport no longer kills entire gateway; 57 days open.

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **Critical (Security)** | [#121021](https://github.com/NousResearch/hermes-agent/issues/121021) | **Rich markup injection via Bitwarden endpoint** — Server-controlled `bws` stderr interpolated into `console.print(f"[red]{err}[/red]")` allows console escape injection | [#121022](https://github.com/NousResearch/hermes-agent/pull/121022) ✅ |
| **Critical (Data Loss)** | [#121024](https://github.com/NousResearch/hermes-agent/issues/121024) | **Docker sandbox spillover path mismatch** — Host path announced when container bind mount not ready; `read_file`/`execute_code` fail | *No PR yet* |
| **High (Provider Breakage)** | [#120069](https://github.com/NousResearch/hermes-agent/issues/120069) | **Claude Opus 5.5 rejects `thinking.type=disabled`** — Title generation, `/reasoning none`, compression fast lane all HTTP 400 | [#121016](https://github.com/NousResearch/hermes-agent/pull/121016) ✅ |
| **High (Message Delivery)** | [#80056](https://github.com/NousResearch/hermes-agent/issues/80056) | **WhatsApp Cloud delivery failures only debug-logged** — `failed` statuses with error details never surfaced to user/app | *No PR yet* |
| **Medium (Windows)** | [#121015](https://github.com/NousResearch/hermes-agent/issues/121015) | **AGENTS.md chain uses `\` on Windows** — System prompt shows `## ..\AGENTS.md` breaking provenance display | *No PR yet* |
| **Medium (Session State)** | [#74329](https://github.com/NousResearch/hermes-agent/issues/74329) | **Wake-spawned sessions discard `--model/--provider` flags** — `new_session(silent=True)` re-derives from config, ignores CLI overrides | *No PR yet* |
| **Low (Config Drift)** | [#80066](https://github.com/NousResearch/hermes-agent/issues/80066) | **WhatsApp read-receipt defaults diverge** — Baileys opt-in OFF vs Cloud API always-on | *No PR yet* |

**Pattern**: 3/8 issues opened today; 2 already have fix PRs (same-day turnaround). WhatsApp Cloud API gaps persist since August.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Federated failure learning** | [#111200](https://github.com/NousResearch/hermes-agent/issues/111200) (Feature, needs-decision) | Low — Requires architecture review, privacy model, governance |
| **Unified package manager (pm/)** | [#102765](https://github.com/NousResearch/hermes-agent/pull/102765) (Feature, ci-reviewed) | **High** — 20 days old, CI reviewed, touches install/update/docker/nix/Windows/desktop; blocked only by `needs-decision` |
| **Gateway platform quarantine** | [#74440](https://github.com/NousResearch/hermes-agent/pull/74440) (Bug fix, needs-decision) | **High** — 57 days, multiple risk sweepers, improves availability; decision likely on blast-radius tradeoff |
| **WhatsApp Cloud parity** | [#80056](https://github.com/NousResearch/hermes-agent/issues/80056), [#80066](https://github.com/NousResearch/hermes-agent/issues/80066) | Medium — Delivery-failure surfacing and read-receipt alignment are incremental |
| **Session compression atomicity** | [#120821](https://github.com/NousResearch/hermes-agent/pull/120821) (Bug fix) | **High** — Fixes data-corruption risk at persistence boundary; PR open today |

**Prediction**: Next release will bundle package-manager unification (#102765), gateway quarantine (#74440), and today's critical fixes (Anthropic, secrets, cron, desktop). Federated learning remains exploratory.

## 7. User Feedback Summary
*No direct user comments in issues/PRs today.* Inferred pain points from bug reports:
- **WhatsApp Cloud users** silently lose failed-message visibility (#80056) and face inconsistent read-receipt behavior (#80066)
- **Anthropic Opus 5.5 adopters** completely blocked on title generation, reasoning control, compression (#120069)
- **Docker sandbox users** hit "file not found" on tool execution after restart (#121024)
- **Windows users** see malformed `AGENTS.md` paths in system prompts (#121015)
- **Wake-word users** lose model/provider intent on each wake (#74329)
- **Self-hosted Bitwarden users** exposed to terminal injection (#121021)
- **Wayland/Hyprland desktop users** faced white-screen fullscreen (#94865 → #94973 → #121020)

**Satisfaction signal**: Rapid same-day fixes for today's regressions suggest maintainers prioritize user-blocking bugs.

## 8. Backlog Watch — Stale High-Impact Items
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| **[#74440](https://github.com/NousResearch/hermes-agent/pull/74440)** Quarantine open-policy platform | 57 days | **Gateway availability** — Single bad platform config kills all transports | `needs-decision` on whether quarantine semantics are sufficient vs. hard-fail |
| **[#102765](https://github.com/NousResearch/hermes-agent/pull/102765)** Unified package manager | 20 days | **Distribution & maintenance** — Touches every install path (Docker, Nix, desktop, Windows, local models) | `ci-reviewed` but `needs-decision`; unblocks consistent updates, bundling, dependency pinning |
| **[#80056](https://github.com/NousResearch/hermes-agent/issues/80056)** WhatsApp Cloud delivery-failure surfacing | 49 days | **Message reliability** — Failed deliveries invisible to app/user | No PR; requires webhook payload parsing + user-facing error channel |
| **[#53684](https://github.com/NousResearch/hermes-agent/pull/53684)** Delete compression lineage together | 89 days | **Session integrity** — Orphaned compression branches cause duplicate turns | Marked `duplicate` but still open; related to #120821 (atomic rewrites) |
| **[#45317](https://github.com/NousResearch/hermes-agent/pull/45317)** BlueBubbles duplicate turns & delivery | 103 days | **iMessage bridge reliability** | Longest-open PR; multiple risk sweepers; may need rebase |

**Maintainer attention needed**: Decisions on #74440 and #102765 unblock major reliability and distribution improvements. WhatsApp Cloud gaps (#80056, #80066) need dedicated platform review.

---

*Digest generated from GitHub API data for NousResearch/hermes-agent on 2026-09-24. All links point to live GitHub items.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-24

---

## 1. Today's Overview
PicoClaw shows **low routine development velocity** but faces a **critical infrastructure outage**. In the last 24 hours only one issue and two pull requests saw updates. The dominant signal is **Issue #3377**: the project’s public homepage (picoclaw.io) has been completely inaccessible since 2026-09-10 due to an expired TLS certificate — a blocking, user-facing regression with no mitigation in place. On the feature side, a new web-search provider (Keenable) is under review (#3370), while a phone-pairing adapter for the Build Remote Agent was merged (#3344), extending the desktop agent’s remote-control surface. No new releases were published.

---

## 2. Releases
**No new releases in the last 24 hours.** The latest published version remains whatever was current before 2026-09-24.

---

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | **Closed / Merged** (2026-09-23) | Adds **Build Remote Agent** pairing-device adapter (`gbr/1` protocol). Enables phone spectating via `gbr-agent pair` (QR + 8-char code) connecting to `http://127.0.0.1:8788` or stdio. Requires `gbr-agent` v0.6.0+. | Expands remote-access / collaboration workflow; new protocol adapter added to codebase. |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | **Open** (updated 2026-09-23) | Introduces **Keenable** (`keenable.ai`) as a zero-API-key `web_search` provider. Config: `tools.web.keenable.enabled = true`; calls `POST /v1/search/public` with `X-Keenable-Title` header. | Adds a free, no-key web-search option; diversifies provider ecosystem. Awaits review/merge. |

---

## 4. Community Hot Topics
| Item | Type | Activity | Core Need / Signal |
|------|------|----------|---------------------|
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | **Issue** (CRITICAL) | 2 comments, 1 👍, updated 2026-09-23 | **Immediate restoration of the project homepage**. The expired certificate makes `https://picoclaw.io` unreachable for all browsers/TLS clients, cutting off documentation, onboarding, and credibility. Time-sensitive — every day down increases user loss and SEO damage. |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | **PR** (feat) | 0 comments, 0 👍, updated 2026-09-23 | Community contribution adding a **free web-search provider**. Signals demand for pluggable, zero-cost search tooling. Low discussion so far — may need maintainer triage. |

---

## 5. Bugs & Stability
| Severity | Item | Status | Fix PR? |
|----------|------|--------|---------|
| **Critical (Infrastructure)** | [#3377](https://github.com/sipeed/picoclaw/issues/3377) — TLS cert expired 2026-09-10; picoclaw.io down for all visitors | **Open, unassigned** | **No fix PR yet**. Requires ops action (cert renewal / ACME automation), not a code change. |
| *None reported in codebase today* | — | — | — |

> **Note**: The only “bug” surfaced in the last 24 h is the infra-level cert expiry. No application crashes, regressions, or runtime bugs were filed.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|------------------------------|
| **Pluggable web-search providers** (Keenable added) | [#3370](https://github.com/sipeed/picoclaw/pull/3370) | **High** — PR is open, implements clean provider interface; aligns with existing `tools.web.*` architecture. |
| **Remote-agent pairing / phone spectating** | [#3344](https://github.com/sipeed/picoclaw/pull/3344) (merged) | **Already landed** — `gbr/1` adapter merged; expect docs / examples in next release. |
| **Automated TLS / cert management** | Implied by #3377 | **High urgency** — maintainers will likely add cert-automation (Let’s Encrypt / ACME) to CI/CD or hosting config to prevent recurrence. |

---

## 7. User Feedback Summary
- **Pain point (acute)**: *“The project website is completely dead — browsers refuse to connect.”* (Issue #3377)  
  - Affects **all** visitors: docs, download links, onboarding, SEO.  
  - User sentiment: urgency, frustration (“time-sensitive”, “effectively down for all visitors”).
- **Positive signal**: Community member contributed a **new search provider** requiring no API key (#3370), indicating appetite for **extensible, low-friction tooling**.
- **No direct usability complaints** about the core agent in the last 24 h — feedback is dominated by the homepage outage.

---

## 8. Backlog Watch
| Item | Age | Why It Needs Attention |
|------|-----|------------------------|
| [#3377](https://github.com/sipeed/picoclaw/issues/3377) | **12 days** (since 2026-09-12) | **Critical infra debt**. No assignee, no linked PR. Every day unresolved compounds reputational & onboarding damage. Should be treated as a **P0 incident** — cert renewal + post-mortem + automation. |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | **17 days** (opened 2026-09-07) | Feature PR with **zero review activity**. Low-risk, additive change; merging it would reward contributor and expand provider matrix. |
| *(No other stale high-priority items surfaced in the 24-h window)* | | |

---

### Health Indicators (2026-09-24)
| Metric | Signal |
|--------|--------|
| **Infra reliability** | 🔴 **Critical** — homepage down 14+ days |
| **Code velocity** | 🟡 Low — 1 merged PR, 1 open feature PR |
| **Community engagement** | 🟢 Moderate — external contributor submitted feature; users reported infra issue promptly |
| **Release cadence** | ⚪ None in window |

**Bottom line**: PicoClaw’s codebase is quietly advancing (remote-agent pairing, search-provider extensibility), but **project credibility is blocked by an unaddressed TLS expiry**. The highest-leverage action for maintainers today is resolving #3377 and automating cert renewal; merging #3370 is a quick win to show community responsiveness.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-24

---

## 1. Today's Overview

NanoClaw shipped **v2.4.0** today, a major feature release that restructures credential management around installable gateway skills (OneCLI remains default; Iron Proxy is new), adds a managed Slack app and Mattermost channel, introduces per-group model/speed controls, and reworks the OpenCode provider. The project shows **high velocity**: 27 PRs updated in 24h (17 merged/closed), including 8 PRs directly tied to the v2.4.0 gateway refactor and 3 fixing the `/update-nanoclaw` pipeline. Two new issues surfaced—one blocking update runs due to missing transitive imports, another a long-standing transcript-rotation gap for long-lived containers—both acknowledged but not yet fixed. Overall health is strong: core maintainers are merging rapidly, the release process is automated, and the backlog of critical bugs is shrinking.

---

## 2. Releases

### **v2.4.0** — *Released 2026-09-23*  
**PR:** [#3877](https://github.com/nanocoai/nanoclaw/pull/3877) (chore/release)

| Category | Changes |
|----------|---------|
| **⚠️ Before you update** | • Gateway selection is now skill-based; existing OneCLI installs are preserved but migration to the new skill is recommended.<br>• Iron Proxy gateway requires separate skill install (`/add-iron-proxy`).<br>• OpenCode provider rewritten to use shared credential-connection interface. |
| **✨ New** | • **Credential Gateway Skills**: OneCLI extracted to skill ([#3816](https://github.com/nanocoai/nanoclaw/pull/3816)); Iron Proxy added as new gateway skill ([#3817](https://github.com/nanocoai/nanoclaw/pull/3817)).<br>• **Centralized Gateway Contract** ([#3815](https://github.com/nanocoai/nanoclaw/pull/3815)): unified approval lifecycle, session leases, provider-owned domains.<br>• **Setup Gateway Selection** ([#3818](https://github.com/nanocoai/nanoclaw/pull/3818)): advanced setup exposes gateway choice; provider login decoupled.<br>• **OpenCode + Iron Proxy Auth** ([#3825](https://github.com/nanocoai/nanoclaw/pull/3825)): API keys & native ChatGPT sign-in via Iron Control.<br>• **Community Portal & Managed Slack App** for Echo's hardened image.<br>• **Install-wide & Per-group Model/Speed Controls**.<br>• **Mattermost Channel** support.<br>• **TypeSafe Jev Tool Skill** ([#3848](https://github.com/nanocoai/nanoclaw/pull/3848)): `/add-typesafe-tool` for structured judgments. |
| **🛠️ Fixes** | • `/update-nanoclaw` cutover now stops local containers instead of waiting indefinitely ([#3873](https://github.com/nanocoai/nanoclaw/pull/3873), fixes [#3828](https://github.com/nanocoai/nanoclaw/issues/3828)).<br>• OpenCode memory hook uses async spawn to avoid Bun test wedge ([#3841](https://github.com/nanocoai/nanoclaw/pull/3841)).<br>• Sweep timers (`ABSOLUTE_CEILING_MS`, `CLAIM_STUCK_MS`) now configurable via env ([#3646](https://github.com/nanocoai/nanoclaw/pull/3646)).<br>• Teams bot display name sourced from inbound activities ([#3876](https://github.com/nanocoai/nanoclaw/pull/3876)).<br>• Prompt name follows bot display name when `assistant_name` unset ([#3875](https://github.com/nanocoai/nanoclaw/pull/3875)).<br>• Codex through Iron Proxy works after rejected WS upgrade ([#3872](https://github.com/nanocoai/nanoclaw/pull/3872)).<br>• Ping agent container stopped before folder deletion ([#3878](https://github.com/nanocoai/nanoclaw/pull/3878)).<br>• `rebuild-native.mjs` detects broken `better-sqlite3`, not just missing ([#3879](https://github.com/nanocoai/nanoclaw/pull/3879)).<br>• Container images bumped: Claude Code 2.1.280, Agent SDK 0.3.280 ([#3868](https://github.com/nanocoai/nanoclaw/pull/3868)). |

**Migration Notes**  
- No breaking config changes; existing installations keep their gateway.  
- To adopt Iron Proxy: run `/add-iron-proxy` skill, then select it in advanced setup.  
- OpenCode users should re-run provider login after update to pick up new credential flow.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary |
|----|------|---------|
| [#3877](https://github.com/nanocoai/nanoclaw/pull/3877) | release | v2.4.0 release automation |
| [#3873](https://github.com/nanocoai/nanoclaw/pull/3873) | update/install | Fix cutover: stop install's containers at cutover (resolves [#3828](https://github.com/nanocoai/nanoclaw/issues/3828)) |
| [#3872](https://github.com/nanocoai/nanoclaw/pull/3872) | providers/skills | Iron Proxy: keep Codex working after rejected WS upgrade |
| [#3876](https://github.com/nanocoai/nanoclaw/pull/3876) | channels | Teams: pass bot display name from inbound activities |
| [#3875](https://github.com/nanocoai/nanoclaw/pull/3875) | channels/config | Prompt name follows bot display name when `assistant_name` unset |
| [#3815](https://github.com/nanocoai/nanoclaw/pull/3815) | gateway/credentials | Centralize credential gateway contract & approval lifecycle |
| [#3816](https://github.com/nanocoai/nanoclaw/pull/3816) | gateway/skills | Extract OneCLI into installable skill |
| [#3817](https://github.com/nanocoai/nanoclaw/pull/3817) | gateway/skills | Add Iron Proxy gateway skill |
| [#3818](https://github.com/nanocoai/nanoclaw/pull/3818) | setup | Gateway selection without changing provider login |
| [#3825](https://github.com/nanocoai/nanoclaw/pull/3825) | providers | OpenCode auth via Iron Proxy (API keys / ChatGPT OAuth) |
| [#3841](https://github.com/nanocoai/nanoclaw/pull/3841) | providers/skills | OpenCode memory hook: async spawn to avoid Bun test wedge |
| [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) | sweep/containers | Global env overrides for `ABSOLUTE_CEILING_MS` / `CLAIM_STUCK_MS` |
| [#3868](https://github.com/nanocoai/nanoclaw/pull/3868) | containers | Bump Claude Code 2.1.280 / Agent SDK 0.3.280 |
| [#3879](https://github.com/nanocoai/nanoclaw/pull/3879) | setup | Detect broken `better-sqlite3` in `rebuild-native.mjs` |
| [#3878](https://github.com/nanocoai/nanoclaw/pull/3878) | setup/skills | Stop ping agent container before deleting folder |
| [#3750](https://github.com/nanocoai/nanoclaw/pull/3750) | update/skills | Extract whole `scripts/` tree for update controller (fixes missing `provider-contract-verifier.ts`) |
| [#3494](https://github.com/nanocoai/nanoclaw/pull/3494) | channels | Build Remote Agent phone pairing (gbr/1 protocol) |
| [#12](https://github.com/nanocoai/nanoclaw/pull/12) | agent-runner | Only update `lastAgentTimestamp` on agent success |

**Key Themes**  
- **Gateway architecture overhaul** (5 PRs) — the largest single refactor in recent history.  
- **Update pipeline hardening** (3 PRs) — cutover reliability, transitive imports, controller extraction.  
- **Provider stability** — OpenCode async fixes, Codex/Iron Proxy race conditions, Claude Code version pin.  
- **Channel polish** — Teams/Slack bot identity, Build Remote Agent pairing.

---

## 4. Community Hot Topics

| Item | Type | Activity | Underlying Need |
|------|------|----------|-----------------|
| [#3869](https://github.com/nanocoai/nanoclaw/issues/3869) | Issue (CLOSED) | 1 comment, 0 👍 | **Update pipeline broken**: `update-nanoclaw prepare` crashes—`git archive` list misses 3 transitive imports. Fixed by [#3750](https://github.com/nanocoai/nanoclaw/pull/3750) (extract whole `scripts/`). |
| [#3732](https://github.com/nanoclaw/issues/3732) | Issue (OPEN) | 1 comment, 0 👍 | **Transcript rotation never runs** for tasks keeping containers alive >30 min. `maybeRotateContinuation()` only called at container start. Affects long-running scheduled tasks. No fix PR yet. |
| [#3874](https://github.com/nanoclaw/issues/3874) | Issue (OPEN) | 0 comments, 0 👍 | **OneCLI gateway ownership check** uses group existence, not installation identity—potential cross-group credential leakage. Security-adjacent, needs maintainer triage. |
| [#3503](https://github.com/nanoclaw/pull/3503) | PR (OPEN) | 0 comments, 0 👍 | **Apple Container support** (macOS): run sessions in microVMs instead of Docker. Large feature skill, open since Aug 24, awaiting review. |
| [#3848](https://github.com/nanoclaw/pull/3848) | PR (OPEN) | 0 comments, 0 👍 | **TypeSafe Jev tool skill**: structured classification/ranking as container tool. Core-team labeled, ready for merge. |

**Analysis**: The two open issues (#3732, #3874) are stability/security concerns with no active fix PRs. The Apple Container PR (#3503) represents a significant platform expansion but has been stagnant for a month—likely needs maintainer bandwidth or CI validation.

---

## 5. Bugs & Stability (Reported/Fixed Today)

| Severity | Issue | Status | Fix PR | Notes |
|----------|-------|--------|--------|-------|
| **High** | [#3869](https://github.com/nanoclaw/issues/3869) `update-nanoclaw prepare` crashes: `MODULE_NOT_FOUND` for transitive imports | CLOSED | [#3750](https://github.com/nanoclaw/pull/3750) (merged) | Blocked all updates; fixed by expanding `git archive` to full `scripts/` tree. |
| **High** | [#3828](https://github.com/nanoclaw/issues/3828) Cutover drain never succeeds—host stopped before containers | CLOSED | [#3873](https://github.com/nanoclaw/pull/3873) (merged) | Deadlock: host stops idle containers, but host is stopped first. Fix: cutover stops containers directly. |
| **Medium** | [#3874](https://github.com/nanoclaw/issues/3874) OneCLI gateway ownership check uses group existence, not install identity | OPEN | — | Potential credential cross-contamination between groups sharing a gateway. |
| **Medium** | [#3732](https://github.com/nanoclaw/issues/3732) Transcript rotation never runs for long-lived task containers | OPEN | — | Rotation logic only at container start; tasks with recurrence <30 min never rotate. |
| **Low** | [#3875](https://github.com/nanoclaw/pull/3875) Prompt name used group name instead of bot display name | FIXED | [#3875](https://github.com/nanoclaw/pull/3875) (merged) | UX polish for shared-bot setups. |
| **Low** | [#3872](https://github.com/nanoclaw/pull/3872) Codex 0.155.1 fails through Iron Proxy after rejected WS upgrade | FIXED | [#3872](https://github.com/nanoclaw/pull/3872) (merged) | Race in credential store + token refresh; both fixed. |

**Stability Trend**: Critical update-path bugs resolved in this release cycle. Remaining open bugs are narrower (transcript rotation, gateway identity) and don't block core workflows.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Release |
|--------|--------|----------------------------|
| **Apple Container (macOS microVMs)** | [#3503](https://github.com/nanoclaw/pull/3503) (open 1 mo) | Medium — large surface area, needs CI on macOS runners; may target v2.5. |
| **TypeSafe Jev Tool Skill** | [#3848](https://github.com/nanoclaw/pull/3848) (core-team label) | High — ready, follows skill pattern, minimal risk. |
| **Per-group model/speed controls** | v2.4.0 release notes | Delivered — now in v2.4.0. |
| **Mattermost channel support** | v2.4.0 release notes | Delivered — now in v2.4.0. |
| **Build Remote Agent phone pairing (gbr/1)** | [#3494](https://github.com/nanoclaw/pull/3494) (merged) | Delivered — merged today. |
| **Sweep timer configurability** | [#3646](https://github.com/nanoclaw/pull/3646) (merged) | Delivered — env vars for `ABSOLUTE_CEILING_MS` / `CLAIM_STUCK_MS`. |
| **Transcript rotation for long tasks** | [#3732](https://github.com/nanoclaw/issues/3732) | Medium — known gap, no PR yet; may be addressed in v2.4.1. |
| **Gateway ownership hardening** | [#3874](https://github.com/nanoclaw/issues/3874) | High — security-adjacent; likely fast-track fix. |

**Prediction**: v2.4.1 will likely include fixes for #3732 and #3874, plus TypeSafe Jev skill merge. Apple Container may slip to v2.5 pending macOS CI investment.

---

## 7. User Feedback Summary

| Pain Point / Use Case | Evidence | Sentiment |
|------------------------|----------|-----------|
| **Update reliability** | [#3869](https://github.com/nanoclaw/issues/3869), [#3828](https://github.com/nanoclaw/issues/3828) — both blocked updates | 😡 Frustrated (blocked workflows) → 😊 Resolved in v2.4.0 |
| **Long-running task transcript bloat** | [#3732](https://github.com/nanoclaw/issues/3732) — containers alive >30 min never rotate | 😟 Concerned (disk growth, debuggability) |
| **Gateway flexibility** | v2.4.0 gateway skills (OneCLI + Iron Proxy) + [#3818](https://github.com/nanoclaw/pull/3818) decoupling provider login | 👍 Positive — addresses multi-provider / enterprise needs |
| **Shared bot identity confusion** | [#3875](https://github.com/n

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-24

## 1. Today's Overview
NullClaw shows **high maintenance velocity** with 18 active issues and 21 PRs updated in the last 24 hours (8 merged/closed). No new release was cut, but the merged PRs address critical stability bugs (Telegram crash-loop, scheduler auth, MCP hang, cron use-after-free, CLI arrow keys, Discord TLS stack overflow) and deliver long-requested configurability (memory recall, native Anthropic provider, Grok CLI provider, streaming tool calls). The project is in a **bug-stabilization + feature-hardening phase** targeting low-resource devices, multi-channel reliability, and provider extensibility.

## 2. Releases
**No new releases** in the last 24 hours. The latest published version remains **v2026.5.29** (referenced in issue #976). Several merged PRs (#978, #980, #981, #985, #986, #996) are release-candidates for the next cut.

## 3. Project Progress — Merged/Closed PRs (8)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#965](https://github.com/nullclaw/nullclaw/pull/965) | Structured streaming tool-call support for SSE parser | Agent/Streaming | Enables native `tools[]` + `tool_choice: "auto"` during streaming; unblocks providers that emit XML in `delta.content`. |
| [#978](https://github.com/nullclaw/nullclaw/pull/978) | Discord: run typing thread on heavy runtime stack | Channels/Discord | Fixes TLS stack overflow (512 KB → 2 MiB) that crashed gateway on typing indicator. |
| [#980](https://github.com/nullclaw/nullclaw/pull/980) | Fix scheduler: persist paired token to disk during `/pair` | Scheduler/Auth | Writes paired token to `{config_dir}/paired_token`; unblocks cron/schedule tool authentication. |
| [#981](https://github.com/nullclaw/nullclaw/pull/981) | Feat: add `grok-cli` provider for xAI Grok CLI | Providers | New optional CLI-based provider following `codex-cli`/`gemini-cli` pattern. |
| [#985](https://github.com/nullclaw/nullclaw/pull/985) | Fix: give agent turn path a 16 MiB stack | Runtime/Stability | **Closes #976** — raises `SESSION_TURN_STACK_SIZE` from 2 MiB to 16 MiB, eliminating SIGSEGV on aarch64 Telegram inbound. |
| [#986](https://github.com/nullclaw/nullclaw/pull/986) | Make SQLite memory database path configurable | Memory/Config | Adds `memory.database_path`; supports read-only workspace deployments. |
| [#996](https://github.com/nullclaw/nullclaw/pull/996) | Fix MCP: bound stdio response waits | MCP/Channels | **Fixes #991** — applies `timeout_ms` to stdio reads, kills process group on timeout, cleans up failed init. |
| [#979](https://github.com/nullclaw/nullclaw/pull/979) | Feat: configurable auto-recall, recall_limit, max_context_bytes | Memory/Config | Adds `memory.auto_recall`, `recall_limit`, `max_context_bytes`; addresses #919. |

## 4. Community Hot Topics (Most Comments/Reactions)
| Item | Comments | 👍 | Core Need |
|------|----------|----|-----------|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) *web_search impractical on low-resource devices* | 8 | 0 | **Lightweight search without external API keys** — users need ddgs/HTML scrape fallback for cheap hardware. |
| [#972](https://github.com/nullclaw/nullclaw/issues/972) *Telegram channel stops responding after idle* | 5 | 1 | **Long-polling resilience** — gateway supervisor fails to detect dead polling threads; fixed by [#984](https://github.com/nullclaw/nullclaw/pull/984) (open). |
| [#915](https://github.com/nullclaw/nullclaw/issues/915) *Scheduler unauthorized* | 5 | 1 | **Cron/schedule tool auth** — paired token not persisted; fixed by [#980](https://github.com/nullclaw/nullclaw/pull/980) (merged) & [#959](https://github.com/nullclaw/nullclaw/pull/959) (open). |
| [#865](https://github.com/nullclaw/nullclaw/issues/865) *CLI shows ctrl characters for arrow keys* | 4 | 0 | **REPL usability** — raw-mode line editor; PR [#970](https://github.com/nullclaw/nullclaw/pull/970) open. |
| [#976](https://github.com/nullclaw/nullclaw/issues/976) *SIGSEGV on every inbound Telegram message (aarch64)* | 4 | 0 | **Stack overflow** — 512 KB stack for turn path; fixed by [#985](https://github.com/nullclaw/nullclaw/pull/985) (merged). |
| [#631](https://github.com/nullclaw/nullclaw/issues/631) *GET /status endpoint for agent monitoring* | 2 | 1 | **Observability** — HTTP health endpoint for external dashboards. |

**Underlying theme**: Users run NullClaw on **heterogeneous, resource-constrained edge devices** (aarch64, WSL2, Proxmox CT, Termux) and need **reliable multi-channel uptime** (Telegram, Discord, WeChat) with **minimal external dependencies**.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical (Crash-loop)** | [#976](https://github.com/nullclaw/nullclaw/issues/976) SIGSEGV on every Telegram inbound (aarch64) | **Fixed** | [#985](https://github.com/nullclaw/nullclaw/pull/985) merged |
| **Critical (Silent data loss)** | [#954](https://github.com/nullclaw/nullclaw/issues/954) One-shot cron jobs silently fail (use-after-free) | Open | [#954](https://github.com/nullclaw/nullclaw/pull/954) open |
| **High (Channel outage)** | [#972](https://github.com/nullclaw/nullclaw/issues/972) Telegram/Matrix go silent after idle night | Open | [#984](https://github.com/nullclaw/nullclaw/pull/984) open |
| **High (Scheduler broken)** | [#915](https://github.com/nullclaw/nullclaw/issues/915) / [#839](https://github.com/nullclaw/nullclaw/issues/839) Scheduler unauthorized — paired token not persisted | **Fixed** | [#980](https://github.com/nullclaw/nullclaw/pull/980) merged, [#959](https://github.com/nullclaw/nullclaw/pull/959) open |
| **High (MCP hang)** | [#991](https://github.com/nullclaw/nullclaw/issues/991) MCP stdio calls hang behind Proxmox launcher lock | **Fixed** | [#996](https://github.com/nullclaw/nullclaw/pull/996) merged |
| **Medium (CPU burn)** | [#870](https://github.com/nullclaw/nullclaw/issues/870) Gateway `accept4` busy loop (100% CPU) on WSL2 | Open | — |
| **Medium (CLI broken)** | [#865](https://github.com/nullclaw/nullclaw/issues/865) Arrow keys print control chars in REPL | Open | [#970](https://github.com/nullclaw/nullclaw/pull/970) open |
| **Medium (Discord crash)** | Discord TLS stack overflow on typing indicator | **Fixed** | [#978](https://github.com/nullclaw/nullclaw/pull/978) merged |

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Signal | Likelihood for Next Version |
|---------|-------|--------|-----------------------------|
| **Lightweight web search (ddgs/HTML)** | [#871](https://github.com/nullclaw/nullclaw/issues/871), [#623](https://github.com/nullclaw/nullclaw/issues/623) | High — 8 comments, core to low-resource vision | High — PR [#965](https://github.com/nullclaw/nullclaw/pull/965) lays streaming groundwork |
| **Configurable memory recall (disable/limit)** | [#919](https://github.com/nullclaw/nullclaw/issues/919) | High — privacy/performance demand | **Done** — [#979](https://github.com/nullclaw/nullclaw/pull/979) merged |
| **Native Anthropic API key / OAuth support** | [#767](https://github.com/nullclaw/nullclaw/issues/767) | Medium — docs only | **Docs merged** — [#962](https://github.com/nullclaw/nullclaw/pull/962) open |
| **WeChat/Weixin iLink QR login** | [#817](https://github.com/nullclaw/nullclaw/issues/817) | Medium — China deployment | **Docs + hardening** — [#963](https://github.com/nullclaw/nullclaw/pull/963) open |
| **GET /status HTTP endpoint** | [#631](https://github.com/nullclaw/nullclaw/issues/631) | Medium — ops tooling | Open — no PR yet |
| **Subagent spawn / multi-provider agents** | [#190](https://github.com/nullclaw/nullclaw/issues/190) | Low — architectural | Long-term |
| **Vision pipeline (image→base64→LLM)** | [#624](https://github.com/nullclaw/nullclaw/issues/624) | Low — niche | No PR |
| **Local web channel behind Cloudflare/Nginx** | [#495](https://github.com/nullclaw/nullclaw/issues/495) | Low — tunneling | No PR |
| **Ollama tool-support incompatibility notification** | [#1000](https://github.com/nullclaw/nullclaw/issues/1000) | New — UX gap | Likely quick fix |

**Predicted next version (v2026.10.x)**: Stack-size fix, scheduler auth, MCP timeout, memory recall config, Discord TLS fix, SQLite path config, Grok CLI provider, streaming tool calls, CLI line editor (if #970 lands), Telegram poll recovery (#984).

## 7. User Feedback Summary
| Pain Point | Evidence | User Context |
|------------|----------|--------------|
| **Low-resource device support** | #871, #976 (aarch64), #870 (WSL2), #966 (Android/Termux) | Raspberry Pi, cheap VPS, Termux phones, WSL2 dev boxes |
| **Telegram reliability** | #972 (idle death), #976 (crash-loop), #954 (cron silent fail) | 24/7 bots on gateway; expected "set and forget" |
| **Scheduler/cron broken** | #915, #839, #954 | Automation via `/schedule` tool; paired token missing |
| **CLI UX** | #865 (arrow keys), #970 (PR) | Interactive `nullclaw agent` REPL daily drivers |
| **Documentation gaps** | #932 (Zig 0.1

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-24

## 1. Today's Overview
IronClaw shows **low but focused maintenance activity** over the last 24 hours. Zero issues were opened or updated, and no PRs were merged or closed. Three open PRs received updates: a nightly CI-driven codebase knowledge-graph refresh (#7988), a release-candidate bump to `1.4.1-rc.2` with dependency patches (#8110), and a documentation clarification for scoped virtual skill roots (#8109). The project appears to be in a **stabilization and documentation-hardening phase** ahead of a 1.4.1 release, with core contributors and automation driving the changes.

## 2. Releases
**No new releases published today.** The latest release candidate in progress is `1.4.1-rc.2` (see PR #8110), which updates `wasmtime` to 47.0.4 and `rustls` to 0.23.45 to address current security advisories. No breaking changes or migration notes are indicated for this RC.

## 3. Project Progress
**No PRs merged or closed today.** All three updated PRs remain open:
- **#7988** – Nightly CI job refreshed the committed codebase-memory bootstrap snapshot (routine maintenance).
- **#8110** – Cut `1.4.1-rc.2`; patches transitive dependencies for security compliance.
- **#8109** – Docs-only: clarifies scoped virtual skill roots (`/skills`, `/system/skills`, `/tenant-shared/skills`) replacing legacy host-directory discovery guidance.

## 4. Community Hot Topics
| PR | Activity | Underlying Need |
|----|----------|-----------------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | Updated 2026-09-24 (bot) | Automated knowledge-graph freshness for agent reasoning accuracy |
| [#8110](https://github.com/nearai/ironclaw/pull/8110) | Created/updated 2026-09-23 | Secure, advisory-compliant dependency chain before 1.4.1 GA |
| [#8109](https://github.com/nearai/ironclaw/pull/8109) | Created/updated 2026-09-23 | Clear developer onboarding for the new skill-root architecture |

No issues or discussions with comments/reactions were recorded in the last 24 h.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** The dependency updates in #8110 are proactive security patches rather than reactions to observed failures.

## 6. Feature Requests & Roadmap Signals
- **Scoped virtual skill roots** (#8109) — formalizing a multi-tenant skill namespace; likely to stabilize in 1.4.1 and become the default discovery mechanism.
- **OAuth readiness for Google extension** (mentioned in #8110) — suggests an upcoming integration feature targeting Google Workspace/Cloud connectivity.
- **Automated codebase-graph refresh** (#7988) — indicates continued investment in agent memory/knowledge tooling; expect further enhancements to the nightly pipeline.

## 7. User Feedback Summary
No direct user feedback (issues, discussions, or reactions) captured in the last 24 h. The current signal comes exclusively from core contributors and CI automation.

## 8. Backlog Watch
No long-unanswered issues or PRs surfaced in today’s data slice. The three open PRs are all < 2 days old and have clear ownership (core team / bots). If the `1.4.1-rc.2` validation passes, the next actionable milestone is cutting `1.4.1` GA and closing the RC branch.

---
*Data source: GitHub REST API snapshots for nearai/ironclaw (issues, PRs, releases) covering 2026-09-23 → 2026-09-24.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-24

---

## 1. Today's Overview
LobsterAI shows **high release velocity** with **zero new issues** but **50 PRs merged/closed** in the last 24 hours — all appearing to be release branch merges consolidated into `main`. A new version **2026.9.23** was published, adding an experimental Jev decision model tool and live per-step progress streaming for cowork sessions. The project is in a **stable, rapid-iteration cadence** with frequent dated releases (roughly weekly), suggesting a mature CI/CD pipeline and a focus on incremental UX/runtime improvements over major feature drops.

---

## 2. Releases

### 📦 **LobsterAI 2026.9.23** (Published 2026-09-23)
| Change | Type | Details |
|--------|------|---------|
| **Experimental Jev Decision Model Tool** | Feature | New decision-model integration for agent reasoning (PR [#2753](https://github.com/netease-youdao/LobsterAI/pull/2753)) |
| **Live Per-Step Turn Progress & Diff Stats** | Feature | Real-time streaming of cowork step progress and diff statistics (PR [#2749](https://github.com/netease-youdao/LobsterAI/pull/2749)) |

> **Breaking Changes**: None documented in the truncated changelog.  
> **Migration Notes**: No migration guide referenced; likely backward-compatible incremental update.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)
All 50 PRs updated today are **release merge PRs** dating from July–September 2026, now merged into `main`. Key thematic advances across these releases:

| Area | Advances (from release PR summaries) |
|------|--------------------------------------|
| **Cowork / Collaboration** | In-conversation search, live per-step progress, scheduled-task identification, artifact auto-preview control |
| **OpenClaw / Agent Runtime** | Configurable model thinking levels, plugin installation reliability, DeepSeek Harness integration (opt-in, experimental) |
| **Windows** | Installer recovery, update reliability, native credit-reward activities, first-run login streamlining |
| **Renderer / UI** | Sidebar library icon redesign, math rendering improvements, settings interactions |
| **Analytics / Privacy** | Privacy-conscious analytics for DSH enablement, IM analytics, workbench usage |
| **Team Edition** | Account & quota flows, Skills & Connectors experience refresh |

> **Note**: The bulk merge of 50 release PRs in one day suggests a **monorepo-style release train** where dated release branches are periodically squashed into `main`.

---

## 4. Community Hot Topics
**No issues or PRs with comments/reactions** in the last 24h (all PRs show `Comments: undefined`, `👍: 0`).  
The 50 merged PRs are internal release merges — **no community discussion visible** in this window.

| Item | Link | Signal |
|------|------|--------|
| Release/2026.9.16 | [#2699](https://github.com/netease-youdao/LobsterAI/pull/2699) | Latest pre-2026.9.23 release train |
| Release/2026.9.4 | [#2618](https://github.com/netease-youdao/LobsterAI/pull/2618) | Prior weekly release |
| Release/2026.8.31 | [#2600](https://github.com/netease-youdao/LobsterAI/pull/2600) | Guided first-run, Library browsing, video sharing |

> **Underlying Need**: The release cadence indicates **internal stakeholder demand for frequent, predictable ship cycles** — likely driven by enterprise/Team Edition customers.

---

## 5. Bugs & Stability
**No bug reports, crashes, or regressions** filed or updated in the last 24h.  
The only revert in recent history (PR [#2403](https://github.com/netease-youdao/LobsterAI/pull/2403)) was a **proactive revert of a safety-gate feature** (`run-safety-contract`) due to release-blocking issues (receipt identity keying, false-success followups, compaction runId handling, byte-accounting mismatches) — caught in review, not in production.

---

## 6. Feature Requests & Roadmap Signals
**No new feature requests** in issues today. Signals from merged releases:

| Signal | Likelihood for Next Version |
|--------|-----------------------------|
| **DeepSeek Harness (DSH) runtime maturation** | High — version bumps (0.1.1-rc.1), privacy analytics, opt-in experimental flag |
| **Cowork real-time collaboration** | High — live progress, diff stats, in-conversation search, artifact control |
| **Windows installer robustness** | High — repeated mentions across 5+ releases |
| **Team Edition account/quota flows** | Medium — introduced in 2026.7.30, likely iterating |
| **Model thinking-level configuration** | Medium — server-driven, added 2026.8.10 |

> **Prediction**: Next release (≈2026.9.30) will likely include **DSH stability fixes**, **Cowork UX polish**, and **Windows installer edge-case fixes**.

---

## 7. User Feedback Summary
**No direct user feedback** (issues, discussions, reactions) captured in the last 24h.  
Indirect signals from release notes:

| Pain Point Addressed | Release | Evidence |
|----------------------|---------|----------|
| **First-run friction** | 2026.8.31, 2026.8.3 | "Guided first-run experience", "streamlines first-run login" |
| **Library browsing speed/reliability** | 2026.8.31 | "Faster and more reliable Library browsing" |
| **Windows install/update failures** | 2026.8.31, 2026.8.5, 2026.8.3, 2026.8.10 | Repeated "installer reliability", "update reliability" |
| **Model error opacity** | 2026.8.3 | "Improves model-error handling" |
| **Artifact preview control** | 2026.8.3 | "Control over Artifact auto-preview" |

> **Satisfaction Signal**: Frequent releases addressing the same Windows/onboarding areas suggest **active listening to enterprise desktop users**.

---

## 8. Backlog Watch
**No open issues or draft PRs** in the provided data. All 50 PRs are closed/merged.  
**Maintainer Attention Needed**:

| Item | Status | Why It Matters |
|------|--------|----------------|
| **Experimental Jev Decision Model** | Just merged (#2753) | New decision-model surface — monitor for stability/telemetry |
| **DeepSeek Harness (DSH) Integration** | Ongoing since 2026.8.17 | Opt-in experimental; 0.1.1-rc.1 runtime; privacy analytics added — needs graduation path |
| **Run Safety Contract Revert** | Reverted (#2403) | Safety gate removed; verify no regression in token-burn protection |
| **Windows Installer Recovery** | Recurring across 6+ releases | Persistent investment — ensure telemetry captures failure rates |

---

## 📊 Project Health Snapshot (2026-09-24)

| Metric | Status |
|--------|--------|
| **Release Cadence** | 🟢 Weekly (6 releases in ~50 days) |
| **Issue Velocity** | 🟡 0 new/updated issues today |
| **PR Throughput** | 🟢 50 merged in 24h (bulk release train) |
| **Community Engagement** | 🔴 No visible discussion/reactions |
| **Stability Focus** | 🟢 Proactive revert, Windows reliability repeats |
| **Experimental Features** | 🟡 Jev model, DSH — both opt-in/flagged |

> **Bottom Line**: LobsterAI is **shipping fast and predictably** with a clear focus on **enterprise desktop UX (Windows), collaboration (Cowork), and agent runtime extensibility (OpenClaw/DSH)**. The lack of public issue activity suggests either a **private issue tracker** or a **mature product with low external friction**. Watch for DSH graduation and Jev model adoption metrics in coming weeks.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-09-24

## 1. Today's Overview
Moltis shows minimal daily activity with **zero issue updates** and **one open pull request** receiving a recent commit. The sole active PR (#1272) introduces significant sandbox customization features, indicating ongoing work on agent isolation and security hardening. No releases, bug reports, or community discussions surfaced in the last 24 hours, suggesting a quiet maintenance period focused on a single feature branch.

## 2. Releases
**No new releases** published today. The project’s latest version remains unchanged; monitor the [Releases page](https://github.com/moltis-org/moltis/releases) for future tags.

## 3. Project Progress
**No PRs merged or closed today.** The only movement is on **PR #1272** ([feat(sandbox): per-agent mounts, run_as and a forced sandbox](https://github.com/moltis-org/moltis/pull/1272)), which remains open and was last updated 2026-09-23. This PR adds three per-agent sandbox controls (`mounts`, `run_as`, `force`) to agent presets, advancing the roadmap toward fine-grained container isolation.

## 4. Community Hot Topics
**PR #1272** is the only active thread (0 comments, 0 reactions). While not yet discussed, the feature addresses a clear operator need: **per-agent sandbox policy** without global configuration changes. Expect discussion once maintainers review—particularly around UID/GID mapping safety and forced-sandbox enforcement semantics.

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** The issue tracker shows zero new or updated entries in the last 24h. Stability appears nominal based on available signals.

## 6. Feature Requests & Roadmap Signals
The sandbox enhancements in **PR #1272** are the strongest roadmap signal:
- **Per-agent bind mounts** → enables agent-specific tooling/data access.
- **Per-agent `run_as` (UID:GID)** → supports least-privilege execution per workload.
- **`force` sandbox flag** → guarantees an agent never runs unsandboxed (compliance/tenant isolation).

These align with enterprise/multi-tenant deployment patterns and are likely candidates for the next minor release once reviewed and tested.

## 7. User Feedback Summary
**No user feedback captured today**—no issues, discussions, or PR comments. The absence of pain-point reports may reflect either a stable experience or low community engagement this cycle. Continue monitoring [Discussions](https://github.com/moltis-org/moltis/discussions) and issue intake for qualitative signals.

## 8. Backlog Watch
- **PR #1272** (open since 2026-09-16, updated 2026-09-23) — **awaiting maintainer review**. The scope touches security-sensitive sandbox internals; timely review is recommended to unblock merging and avoid stale-branch drift.
- No stale issues detected (zero open issues updated recently).

---

*Data source: GitHub REST API (issues, PRs, releases) for moltis-org/moltis, 24h window ending 2026-09-24.*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw Project Digest — 2026-09-24

## 1. Today's Overview
CoPaw (QwenPaw) shows **high maintenance velocity** with 57 total GitHub items updated in the last 24 hours (28 issues, 29 PRs). The project is in active bug-fix and stabilization mode post-v2.2.0, with 13 PRs merged/closed and 17 issues resolved today. No new release was cut, but the volume of merged fixes suggests a **patch release (v2.2.x)** is imminent. Community discussion is centered on the newly released **QwenPaw Hub (multi-tenant edition)** and persistent context/window management bugs.

## 2. Releases
**No new releases today.**  
Latest release remains **v2.2.0** (includes QwenPaw Hub multi-tenant edition). The current `main` branch is at `v2.2.2b4` (pre-release), with multiple critical fixes merged since v2.2.0.

---

## 3. Project Progress — Merged/Closed PRs Today (13)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#7960](https://github.com/agentscope-ai/QwenPaw/pull/7960) | `fix(providers): recover after stalled stream cleanup` | Providers/Streaming | **Critical**: Bounds provider quarantine to 60s monotonic deadline; prevents permanent request failures after stalled streams |
| [#5659](https://github.com/agentscope-ai/QwenPaw/pull/5659) | `fix(chat): allow sending attachments without text` | Console/Chat UI | **UX Fix**: Resolves #5558 — enables attachment-only sends in WeCom/Enterprise WeChat |
| [#2978](https://github.com/agentscope-ai/QwenPaw/pull/2978) | `fix: shell file-guard path detection for fallback commands` | Security/File Guard | **Security**: Fixes #2967 — prevents `execute_shell_command` bypassing File Guard via Windows/redirect paths |
| [#4361](https://github.com/agentscope-ai/QwenPaw/pull/4361) | `fix(security): guard shell file access bypasses` | Security/File Guard | **Security**: Complements #2978 — expands shell variable expansion before sensitive path checks |
| [#7409](https://github.com/agentscope-ai/QwenPaw/pull/7409) | `fix(agents): drop empty assistant text blocks` | Agents/Session | **Stability**: Fixes #7402 — prevents empty `output_text` blocks poisoning Ark Responses API requests |
| [#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) | `add localized approval purpose descriptions` | Console/Approvals | **UX**: Adds human-readable purpose to guarded tool approval prompts |
| [#7955](https://github.com/agentscope-ai/QwenPaw/pull/7955) | `docs(website): add download provenance and usage policy` | Website/Docs | **Compliance**: Clarifies Apache 2.0 provenance, adds Usage Policy page |
| [#7952](https://github.com/agentscope-ai/QwenPaw/pull/7952) | `fix(hub): distinguish invitation redemption failure reasons` | Hub/Auth | **Operations**: Splits 5 failure causes into distinct errors for better support triage |
| [#7941](https://github.com/agentscope-ai/QwenPaw/pull/7941) | `test(unit): batch-3 lock and portability tests cross-platform` | Testing | **Quality**: +47 test files, +2720 cases, coverage 70.51% → 73.79% |
| [#4244](https://github.com/agentscope-ai/QwenPaw/pull/4244) | `fix: shell_evasion_checks.newlines=True silently blocks multiline commands` | Security/Shell | **Bug Fix**: Resolves silent blocking of multiline shell commands (default config) |
| [#4227](https://github.com/agentscope-ai/QwenPaw/pull/4227) | `fix: MCP streamable_http 401 blocks until timeout` | MCP/Networking | **Stability**: Fixes MCP client hang on 401 (and other non-404 errors) |
| [#3037](https://github.com/agentscope-ai/QwenPaw/pull/3037) | `fix: Feishu channel filter_thinking/filter_tool_messages not working` | Channels/Feishu | **Bug Fix**: Config flags now respected for Feishu/Lark output filtering |
| [#1559](https://github.com/agentscope-ai/QwenPaw/pull/1559) | `fix: Heartbeat query handler cleanup on cancel` | Core/Query Handler | **Stability**: Prevents infinite retry loops from orphaned tool calls on cancellation |

**Net progress**: Strong focus on **security hardening (shell/File Guard)**, **provider resilience (streaming, MCP, Ark)**, **session hygiene (empty blocks, compaction)**, and **multi-tenant Hub operability**.

---

## 4. Community Hot Topics

| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | Issue (Discussion) | 33 | 4 | **Post-Hub roadmap**: Community voting on what to build next after multi-tenant Hub release (skills marketplace, RBAC, audit logs, plugin sharing) |
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | Issue (Question) | 8 | 0 | **Agent memory/forgetting**: User reports agent repeatedly forgets path constraints and workspace rules — signals weak persistent memory / instruction adherence |
| [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | Issue (Bug) | 8 | 0 | **Hardcoded 32768 context fallback**: `RetryChatModel` forces 32k context on ALL models → `CONTEXT_UNFIT` errors for larger contexts |
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | Issue (Bug) | 8 | 0 | **Base64 image accumulation**: `ToolResultPruner` skips `type="data"` blocks → unbounded base64 growth in context window |
| [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | Issue (Enhancement/Bug) | 7 | 0 | **Context compaction budget mismatch**: Compaction triggers on visible context only, not full provider request → still exceeds budget |

**Underlying themes**:  
- **Context/window management** is the #1 pain point (3 of top 5 issues)  
- **Hub adoption** driving feature prioritization discussion  
- **Agent reliability** (memory, instruction following) remains a gap for power users

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR | Description |
|----------|-------|--------|--------|-------------|
| **Critical** | [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | Open | — | Hardcoded 32768 `context_size` fallback breaks ALL models with >32k context (v2.1.0–v2.2.0) |
| **Critical** | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | Open | — | `ToolResultPruner` skips `type="data"` → base64 images accumulate unbounded → context OOM |
| **High** | [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | Open | — | Context compaction uses visible context budget, not full provider request → active turns fail |
| **High** | [#7959](https://github.com/agentscope-ai/QwenPaw/issues/7959) | Open | [#7962](https://github.com/agentscope-ai/QwenPaw/pull/7962) | Moonshot (kimi-k3) rejects MCP tool schemas with untyped `anyOf` unions → 400 before model call |
| **High** | [#7943](https://github.com/agentscope-ai/QwenPaw/issues/7943) | Open | — | Windows sandbox ACL on drive-root workspace (`C:\`) locks entire volume |
| **High** | [#7963](https://github.com/agentscope-ai/QwenPaw/issues/7963) | Open | — | Langfuse tool observations never record `output` — coordinator short-circuits update |
| **Medium** | [#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857) | Open | — | ACP shutdown fallback skips session cleanup + leaks event loop |
| **Medium** | [#4244](https://github.com/agentscope-ai/QwenPaw/issues/4244) | **Closed** | [#4244](https://github.com/agentscope-ai/QwenPaw/pull/4244) | `shell_evasion_checks.newlines=True` (default) silently blocks multiline commands → agent thought chain chaos |
| **Medium** | [#4227](https://github.com/agentscope-ai/QwenPaw/issues/4227) | **Closed** | [#4227](https://github.com/agentscope-ai/QwenPaw/pull/4227) | MCP `streamable_http` 401 (non-404) blocks client until timeout |
| **Medium** | [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402) | **Closed** | [#7409](https://github.com/agentscope-ai/QwenPaw/pull/7409) | Empty assistant `output_text` blocks persist → Ark Responses API 400 "MissingParameter" |

**Note**: 6 of 10 high/critical bugs are **still open** — only 4 have fix PRs (2 merged, 2 open). Context/window bugs dominate.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version | Notes |
|---------|--------|----------------------------|-------|
| **A2A Server Support** (expose agents as A2A v1.0 peers) | [#7958](https://github.com/agentscope-ai/QwenPaw/issues/7958), [#7484](https://github.com/agentscope-ai/QwenPaw/issues/7484) | **High** | Complementary client/server ask; architecture docs promise unified Driver for MCP/A2A/ACP |
| **Disable Pre-made Models/Channels** | [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | **Medium** | Low-effort UI/config toggle; reduces clutter for OCD/power users |
| **OpenViking Memory Plugin** | [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) (PR) | **High** | PR open, adds automatic recall + `memory_search` tool; addresses #7571-style forgetting |
| **Authenticated Multi-tab Terminal** | [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) (PR) | **High** | Console UX upgrade; lazy-loaded xterm with conversation-scoped workdirs |
| **PawApp SDK Redesign** | [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) (PR) | **Medium** | Host control plane for apps — public/private actions, durable tasks, idempotent dispatch |
| **Custom Browser Tab Title** | [#7914](https://github.com/agentscope-ai/QwenPaw/pull/7914) (PR) | **Low** | Minor Console polish; localStorage per origin |

**Prediction**: Next patch (v2.2.2) will bundle critical fixes (#7576, #7853, #7959, #7943). Next minor (v2.3) likely includes **A2A server**, **OpenViking memory**, and **multi-tab terminal** — all have active PRs.

---

## 7. User Feedback Summary

### Pain Points (Real User Quotes)
> **"Agent forgets path constraints after 2 days — repeatedly writes TODO files everywhere despite explicit rules"** — [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)  
> **"Base64 images from `view_image` never get pruned — context explodes until every request fails"** — [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853)  
> **"Hardcoded 32k context breaks all models with larger windows — been broken since v2.1.0"** — [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576)  
> **"MCP 401 hangs client forever — no auto-reconnect, session permanently skipped"** — [#5900](https://github.com/agentscope-ai/QwenPaw/issues/5900) (closed today via #4227)  
> **"WeCom send button stays gray after upload — must type text to send files"** — [#5558](https://github.com/agentscope-ai/QwenPaw/issues/5558) (fixed in #5659)

### Positive Signals
- **Hub launch (#7318)** generated 33 comments — community engaged on multi-tenant roadmap
- **First-time contributors** landing meaningful fixes (#7962, #6854, #7613, #7914)
- **Test coverage sprint** (#7941) shows maintainer investment in stability

### Dissatisfaction Clusters
1. **Context management** (window sizing, pruning, compaction) — 3+ open critical bugs
2. **Agent memory/instruction adherence** — power users hit walls on complex workflows
3. **Windows edge cases** (drive-root sandbox, shell path parsing) — recurring security/stability issues

---

## 8. Backlog Watch — Stale/High-Impact Items Needing Attention

| Item | Age | Type | Why It Matters |
|------|-----|------|----------------|
| [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | 19 days | Bug (Critical) | **Hardcoded 32k context** affects ALL models >32k; no fix PR yet; blocks production use of large-context models |
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | 6 days | Bug (Critical) | **Unbounded base64 accumulation** — silent context killer for vision workflows; no fix PR |
| [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | 16 days | Bug (High) | **Compaction budget mismatch** — root cause of "active turns fail" reports; needs architectural fix |
| [#7943](https://github.com/agentscope-ai/QwenPaw/issues/7943) | 2 days | Bug (High) | **Windows drive-root sandbox locks volume** — data loss risk; needs workspace validation + ACL guard |
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 29 days | Discussion | **Hub roadmap** — 33 comments of community input; maintainers should synthesize & publish direction |
| [#7613](https://github.com/agentscope-ai/QwenPaw/pull/7613) | 17 days | PR (Feature) | **OpenViking Memory Plugin** — addresses core forgetting complaints; under review, needs merge decision |
| [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | 6 days | PR (Feature) | **Multi-tab Terminal** — major Console UX upgrade; ready for review |
| [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) | 5 days | PR (Feature) | **PawApp SDK Redesign** — foundational for app ecosystem; large scope, needs architecture review |

---

## Project Health Assessment
| Dimension | Score | Trend |
|-----------|-------|-------|
|

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-24

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 50 PRs and 5 issues updated in the last 24 hours. The project is in a heavy **security hardening and runtime stabilization phase** — multiple PRs address sandbox policy enforcement, shell command blocking, host launcher resolution, and provider profile semantics. Two new RFCs (#10970, #11027) signal architectural expansion toward multi-agent resource governance and inter-agent messaging. No releases today; the release-efficiency tracker (#10814) remains open post-v0.8.5.

---

## 2. Releases
**None today.** The last release was v0.8.5. Issue #10814 tracks release-efficiency improvements (reducing repeated builds, shortening preparation/recovery) for the next cycle.

---

## 3. Project Progress — Merged/Closed PRs Today
| PR | Type | Summary |
|----|------|---------|
| [#9817](https://github.com/zeroclaw-labs/zeroclaw/pull/9817) | **Docs (Closed)** | Updated RFC intake guidance: "route by what the author knows" — PR-first for known implementations, issue-first for design exploration. Added explicit RFC trigger gating. |

*Note: Data shows 3 merged/closed PRs total; only #9817 appears in the provided list with `CLOSED` status. Two others may have been merged without appearing in the top-20 comment list.*

---

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** Tracker: Maintainer decision queue for RFCs | 15 comments, open since Jul 4 | **Governance scaling** — Centralized queue for RFC/design decisions needing maintainer/code-owner attention before acceptance/rejection. |
| **[#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)** RFC: Host-scoped admission control & per-agent resource bounds | 5 comments, high risk/priority | **Multi-tenant stability** — Bound concurrent turns, tool executions, and memory *per agent* on machines running many agents; degrade latency not stability. |
| **[#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027)** RFC: Agent-to-agent session messaging | 3 comments, high risk | **Agent coordination** — Allow agents in separate sessions to exchange findings/questions without merging histories or operator copy-paste. |
| **[#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)** Fix: Delegate filesystem tools respect target workspace | XL, high risk, needs-author-action | **Sandbox correctness** — Bounded delegate tools must resolve paths relative to *target agent's* workspace, not caller's. |
| **[#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172)** Fix: Preserve provider profile semantics (`<family>.<alias>`) | XL, high risk, parking-lot | **Provider identity fidelity** — Stop collapsing dotted profile identities through runtime switching, RPC, gateway, Zerocode. |

**Underlying theme:** The project is hardening **security boundaries** (sandbox, shell, provider identity) while designing **multi-agent governance primitives** (admission control, inter-agent messaging).

---

## 5. Bugs & Stability — Active Issues (Ranked by Severity)
| Severity | Item | Status | Fix PR? |
|----------|------|--------|---------|
| **High** | [#11061](https://github.com/zeroclaw-labs/zeroclaw/pull/11061) `validate_command_execution_for_shell` skips `block_high_risk_commands` when command is literally allowlisted (e.g., `rm` in allowlist bypasses `rm -rf /` block) | Open PR, needs-maintainer-review | **Yes** — #11061 |
| **High** | [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) Host launchers resolved *after* workspace cwd applied, breaking sandbox launches (Firejail, Bubblewrap, Docker) | Open PR, needs-maintainer-review | **Yes** — #10381 |
| **High** | [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) Delegate filesystem tools use caller's workspace, not target's | Open PR, needs-author-action | **Yes** — #10391 |
| **High** | [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) Corrupt images pass header sniffing, fail at provider requests | Open PR, needs-maintainer-review | **Yes** — #9819 |
| **Medium** | [#11080](https://github.com/zeroclaw-labs/zeroclaw/pull/11080) Hailo connection-failure test fails on macOS (error message mismatch) | Open PR (new today) | **Yes** — #11080 |
| **Medium** | [#11050](https://github.com/zeroclaw-labs/zeroclaw/issues/11050) WhatsApp native polls bypass per-recipient pacing queue | Open issue | No PR yet |
| **Medium** | [#9368](https://github.com/zeroclaw-labs/zeroclaw/pull/9368) `max_history_messages` counted messages not turns, causing premature truncation | Open PR, needs-maintainer-review | **Yes** — #9368 |

---

## 6. Feature Requests & Roadmap Signals
| Signal | Likelihood for Next Version | Rationale |
|--------|----------------------------|-----------|
| **Host-scoped admission control & per-agent resource bounds** ([#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)) | **High** — RFC accepted for design, high priority, addresses multi-agent deployment pain | Critical for operators running many agents on shared hardware; tracker exists for implementation |
| **Agent-to-agent session messaging** ([#11027](https://github.com/zeroclaw-labs/zeroclaw/issues/11027)) | **Medium-High** — RFC stage, capability boundary trigger met | Enables multi-agent workflows without history merging; fits "agent loop" roadmap |
| **WhatsApp poll pacing** ([#11050](https://github.com/zeroclaw-labs/zeroclaw/issues/11050)) | **High** — Small scope (P3), follow-up to #10984 (native polls merged) | Quick win; pacing inconsistency is a regression from recent feature |
| **Nix-packaged Web UI** ([#11041](https://github.com/zeroclaw-labs/zeroclaw/pull/11041)) | **High** — PR open, integrates with NixOS module | Completes Nix deployment story for dashboard |
| **Plugin load-verify at install** ([#10746](https://github.com/zeroclaw-labs/zeroclaw/pull/10746)) | **High** — Security hardening, WASM ABI verification | Prevents silent plugin skip at daemon startup |
| **Canonical `SandboxPolicyConfig` schema** ([#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)) | **Medium** — XL, open since Jun 17, needs-author-action | Foundational security model; blocked on design consensus |

---

## 7. User Feedback Summary
*No direct user issues/comments in today's data (all 👍: 0). Inferred pain points from PR/issue content:*

| Pain Point | Evidence |
|------------|----------|
| **"My agent's delegate tools write to the wrong workspace"** | #10391 — bounded delegate FS tools used caller's cwd |
| **"`rm -rf /` executes despite `block_high_risk_commands=true` because `rm` is allowlisted"** | #11061 — allowlist literal bypasses risk gate |
| **"Provider profile aliases (`openai.my-profile`) get collapsed to `openai` silently"** | #10172 — breaks model switching, RPC, Zerocode |
| **"WhatsApp polls send in bursts, triggering rate limits"** | #11050 — polls bypass pacing queue |
| **"Corrupt images crash provider calls instead of being rejected early"** | #9819 — header sniffing insufficient |
| **"RFC process unclear: when to open issue vs PR?"** | #9817, #11079 — new routing rule added today |

---

## 8. Backlog Watch — Stale High-Value Items Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| **[#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)** Canonical `SandboxPolicyConfig` schema | 99 days (since Jun 17) | **Foundational security model** — Unblocks consistent filesystem policy across runtimes; marked `needs-author-action`, `risk:high`, `size:XL` |
| **[#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172)** Preserve provider profile semantics | 35 days (since Aug 20) | **Breaks Zerocode/gateway/RPC** — Dotted identities (`family.alias`) collapsed; parked but high impact |
| **[#9839](https://github.com/zeroclaw-labs/zeroclaw/pull/9839)** Block irreversible destructive commands | 48 days (since Aug 7) | **Security hardening** — Allowlist `*` short-circuits risk gate; `needs-author-action` |
| **[#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259)** Enforce authenticated principals on RPC (Stage 3) | 33 days (since Aug 22) | **Zero-trust RPC** — Supersedes #8672; depends on Stage 2 (#10248) and OIDC provider (merged) |
| **[#9368](https://github.com/zeroclaw-labs/zeroclaw/pull/9368)** Count retained history in whole turns | 61 days (since Jul 25) | **Context window correctness** — Tool call/result pairs split across `max_history_messages` limit |
| **[#10814](https://github.com/zeroclaw-labs/zeroclaw/issues/10814)** Release efficiency tracker | 11 days (since Sep 13) | **Release velocity** — Post-v0.8.5 workflow improvements; no comments yet, needs kickoff |

---

## Project Health Indicators
| Metric | Signal |
|--------|--------|
| **PR throughput** | 50 PRs updated/24h — very high |
| **Security focus** | 8+ high-risk security PRs open (sandbox, shell, auth, multimodal) |
| **RFC pipeline** | 2 new RFCs this week (#10970, #11027) — active architectural evolution |
| **Review bottleneck** | Multiple XL PRs awaiting maintainer review (>30 days) |
| **Test stability** | Platform-specific flakes (#11080 macOS) being addressed |
| **Documentation debt** | RFC/contributing guidance updated today (#11079, #11078) |

**Bottom line:** ZeroClaw is in a **consolidation + hardening sprint** — securing runtime boundaries, fixing delegate/sandbox correctness, and designing multi-agent governance. The next release will likely ship the security fixes (#

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*