# OpenClaw Ecosystem Digest 2026-09-25

> Issues: 194 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-25 04:35 UTC

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

# OpenClaw Project Digest — 2026-09-25

---

## 1. Today's Overview

OpenClaw shows **very high development velocity** with 500 PRs and 194 issues updated in the last 24 hours. The project is in active maintenance mode with 122 PRs merged/closed today, indicating strong throughput. However, the 107 open/active issues (many P0/P1 severity) and zero new releases suggest the team is prioritizing stability fixes over feature delivery. Critical themes today include: **update/release pipeline failures** (multiple reports of `openclaw update` failing at "global install swap"), **gateway startup performance regressions** on v2026.9.5, **zombie process leaks** from hook/tool execution, and **database locking issues** under load. The PR queue shows heavy focus on plugin reliability, update mechanism hardening, and UI/UX polish.

---

## 2. Releases

**No new releases published today.** The latest version appears to be v2026.9.6 (referenced in issue #157325), but no formal release was cut in the last 24h. Several issues (#156112, #152804, #138934) indicate the in-place updater is broken on v2026.9.5+, forcing manual `npm install -g` workarounds.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary |
|----|------|---------|
| [#157741](https://github.com/openclaw/openclaw/pull/157741) | Gateway/Plugins | Fix: Keep runtime usable when plugin reload is refused — prevents active work from becoming inaccessible |
| [#157721](https://github.com/openclaw/openclaw/pull/157721) | Web UI | Fix: Clarify plugin installation failures with "Retry install" action and clear status messaging |
| [#157879](https://github.com/openclaw/openclaw/pull/157879) | Memory Core | Fix: Stop re-ingesting nested inline dreaming output as user daily notes |
| [#157884](https://github.com/openclaw/openclaw/pull/157884) | CLI | Fix: Let CLI commands exit during cache maintenance (run maintenance in unreferenced worker) |
| [#157329](https://github.com/openclaw/openclaw/pull/157329) | Update/CLI | Fix: Show progress after Gateway startup check during update validation |
| [#157875](https://github.com/openclaw/openclaw/pull/157875) | Gateway/Tests | Fix: Seed worktree lifecycle creator profile for test reliability |
| [#157838](https://github.com/openclaw/openclaw/pull/157838) | Usage | Refactor: Capture hosted pricing once per operation for catalog update safety |
| [#157777](https://github.com/openclaw/openclaw/pull/157777) | Signal Channel | Refactor: Consolidate pending transport migration results |
| [#157822](https://github.com/openclaw/openclaw/pull/157822) | Media | Fix: Stop smearing singular legacy `MediaUrl` onto later attachment slots in multi-media messages |
| [#157717](https://github.com/openclaw/openclaw/pull/157717) | Web UI | Fix: Plugin sidebar selection sync when navigating between pages/filters |
| [#157836](https://github.com/openclaw/openclaw/pull/157836) | Plugins | Fix: Report retained-work settlement once (deduplicate reload receipt diagnostics) |
| [#157890](https://github.com/openclaw/openclaw/pull/157890) | Web UI | Fix: Keep sidebar navigation and counts aligned after Workboard filters |
| [#156681](https://github.com/openclaw/openclaw/pull/156681) | Agents/Subagents | Fix: Report capacity waits as queued execution (not running) for subagents |
| [#155959](https://github.com/openclaw/openclaw/pull/155959) | Scripts/State | Fix: Reuse one staging directory across retries for read-only state snapshots |
| [#142556](https://github.com/openclaw/openclaw/pull/142556) | Sandbox/Linux | Fix: Keep sandbox transports out of Linux OOM adjustment |

**Key progress areas:** Plugin reload safety, update UX transparency, memory-core correctness, CLI responsiveness, and Web UI polish.

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Issue/PR | Comments | 👍 | Core Issue |
|----------|----------|-----|------------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 16 | 1 | **Zombie process leak** — Hook/tool child processes (`openclaw-hooks`, `bash`, `codex`) accumulate as zombies under main process, causing runtime degradation |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | 10 | 0 | **Update pipeline broken** — `openclaw update` fails at "global install swap" while manual `npm install -g` succeeds |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | 10 | 4 | **Dynamic model discovery** — Need fully dynamic model catalog for OpenRouter/fast-moving providers (currently static generated catalog) |
| [#145309](https://github.com/openclaw/openclaw/issues/145309) | 9 | 0 | **claude-cli backend ignores `CLAUDE_CONFIG_DIR`** — Looks only in `$HOME/.claude`, breaks multi-login scenarios |
| [#110346](https://github.com/openclaw/openclaw/issues/110346) | 9 | 1 | **Inconsistent media allowlist** — `--media` path validation differs between WhatsApp (accepts) and Telegram (rejects same path) |
| [#152804](https://github.com/openclaw/openclaw/issues/152804) | 9 | 0 | **Regression: minimax-portal model catalog lost after upgrade** — Heartbeat fails with "Unknown model" |
| [#151467](https://github.com/openclaw/openclaw/issues/151467) | 8 | 0 | **Self-upgrade deadlock & rollback cron failure** — v6.33 → v9.4 auto-update deadlocked, auto-reverted |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | 8 | 0 | **Gateway startup scales with plugin count** — Discord, Codex, weixin plugins add 10s+ each, exceeding 120s budget |

**Underlying needs:** Users are blocked by **release quality regressions** (updater, model catalog, startup time) and **observability gaps** (silent auth profile skipping, no logging for fallback behavior). The zombie leak (#97616, open since June) suggests a systemic process-management issue needing architectural attention.

---

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 Critical (P0 — Release Blockers / Crash Loops / Data Loss)

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | P0 — **All agents fail** with generic error until gateway restart (stuck agent-DB resource) | Open | No |
| [#148307](https://github.com/openclaw/openclaw/issues/148307) | P0 — **Database locked** on agent DB (464MB, zero freelist, reclamation 9-47s > 5s timeout) | Open | No |
| [#142701](https://github.com/openclaw/openclaw/issues/142701) | P0 — **Gateway unkillable** during memory reindex; `systemctl restart` fails, requires `sudo reboot` | Open | No |
| [#151467](https://github.com/openclaw/openclaw/issues/151467) | P0 — **Self-upgrade deadlock** + rollback cron failure (auto-reverted) | Open | No |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | P0 — **Update fails** at global install swap (manual npm works) | Open | No |
| [#152804](https://github.com/openclaw/openclaw/issues/152804) | P0 — **minimax-portal model catalog lost** post-upgrade | Open | No |
| [#139170](https://github.com/openclaw/openclaw/issues/139170) | P0 — **Inference verification drift** blocks chat RPC after config/secrets changes | Open | No |

### 🟠 High (P1 — Major Functionality Broken)

| Issue | Severity | Status | Fix PR? |
|-------|----------|--------|---------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1 — **Zombie process accumulation** (hook/tool children unreaped) | Open | No |
| [#145309](https://github.com/openclaw/openclaw/issues/145309) | P1 — **claude-cli ignores `CLAUDE_CONFIG_DIR`** → transcript missing → session reset | Open | Linked PR open |
| [#143640](https://github.com/openclaw/openclaw/issues/143640) | P1 — **Memory index publish** runs in single IMMEDIATE TX >5s → blocks agent DB writes | Open | No |
| [#138644](https://github.com/openclaw/openclaw/issues/138644) | P1 — **CLI no-output watchdog kills turn** during Claude Code auto-compaction (no defer signal) | Open | No |
| [#141213](https://github.com/openclaw/openclaw/issues/141213) | P1 — **Runtime-context envelope leaks** into visible Telegram turns | Open | No |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | P1 — **Gateway startup wall-time scales with plugins** (discord/codex/weixin dominate) | Open | No |

### 🟡 Medium (P2/P3 — Degraded UX / Observability)

| Issue | Severity | Status |
|-------|----------|--------|
| [#140723](https://github.com/openclaw/openclaw/issues/140723) | P2 — WebChat assistant text duplicated ×2–×3 (reasoning retries re-stream) | Open |
| [#132616](https://github.com/openclaw/openclaw/issues/132616) | P2 — `configure` crashes after write: `state.reclaimGuards is not iterable` | Open |
| [#142313](https://github.com/openclaw/openclaw/issues/142313) | P2 — No-caption image over offload threshold dropped by empty-turn guard | Open |
| [#131877](https://github.com/openclaw/openclaw/issues/131877) | P2 — **Auth profile first in order skipped silently** — selection undiagnosable | Open |
| [#99659](https://github.com/openclaw/openclaw/issues/99659) | P2 — OOM killed after companion app connects (memory spike) | Open |

**Pattern:** Database contention (locking, long transactions), update/release pipeline fragility, and process lifecycle management are the top stability risks.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Priority | Signal | Likelihood for Next Version |
|-------|----------|--------|----------------------------|
| [#10687](https://github.com/openclaw/openclaw/issues/10687) | P3 | **Dynamic model discovery** for OpenRouter+ — 10 comments, 4👍, needs product decision | Medium — high community interest, but "needs product decision" |
| [#81960](https://github.com/openclaw/openclaw/issues/81960) | P3 | **Multiple providers/models in onboarding** — 7 comments, 1👍 | Low — "needs product decision", not urgent |
| [#107686](https://github.com/openclaw/openclaw/issues/107686) | P3 | **Intelligent multi-LLM router** for cost optimization (vision/debug/agentic/cheap) | Low — feature request, no maintainer traction |
| [#9986](https://github.com/openclaw/openclaw/issues/9986) | P2 | **Model fallback on context length exceeded** (not just API errors) — 5 comments | Medium — logical gap in existing fallback config |
| [#43564](https://github.com/openclaw/openclaw/issues/43564) | P2 | **ACP Session Skill Context Injection** — skills injected into ACP agents | Low — closed stale, but concept persists |
| [#79281](https://github.com/openclaw/openclaw/issues/79281) | P2 | **Default ACP thread-binding preset** — third-party channels reimplement 870 LOC each | Medium — strong pain point for plugin authors |
| [#113440](https://github.com/openclaw/openclaw/issues/113440) | P2 | **Pre-effect hook for nested tool operations** — authorize resolved/dispatched effects | Low — closed stale, but has scout patch provenance |
| [#139188](https://github.com/openclaw/openclaw/issues/139188) | P2 | **Expose provider subscription usage windows** via Prometheus metrics | Medium — observability need, privacy-safe design |
| [#86534](https://github.com/openclaw/openclaw/issues/86534) | P3 | **TUI competitive analysis** — 15 gaps vs Claude Code, Aider, Codex CLI, Kimi, Goose | Low — research doc, not actionable yet |
| [#71216](https://github.com/openclaw/openclaw/issues/71216) | P2 | **Config schema: `sandbox`, `routing.rules`, `instances`, `gateway.nodes.denyPaths`** | Medium — architectural, needs product decision |

**Prediction:** Next version will likely address **release pipeline fixes** (updater, model catalog sync) and **database contention** before new features. Dynamic model discovery (#10687) and ACP thread-binding (#79281) have strongest maintainer engagement signals.

---

## 7. User Feedback Summary

### Pain Points (from issue descriptions)
- **"Every update fails at global install swap"** — Multiple users (#156112, #152804, #138934) forced to manual `npm install -g`
- **"Gateway takes 120s+ to start"** with normal plugin set (#155859) — blocks deployments
- **"All agents stop responding"** until full gateway restart (#157325, #148307) — production outages
- **"Zombie processes accumulate"** over days (#97616) — requires manual cleanup
- **"Model catalog disappears after upgrade"** (#152804) — silent failure, no migration
- **"WebChat shows duplicate messages"** (#140723) — reasoning retries re-stream committed text
- **"Auth profile selection is silent/undiagnosable"** (#131877) — first profile skipped, no logs

### Use Cases Revealed
- **Multi-login Claude Code** via `CLAUDE_CONFIG_DIR` (#145309) — team/shared host scenarios
- **Large-scale memory/index workloads** (300-400MB DBs, thousands of chunks) (#142701, #148307)
- **Plugin-heavy deployments** (Discord, Codex, Weixin, Feishu, Signal, WeCom) (#155859, #137177)
- **Windows Scheduled Task / system

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Agent Ecosystem (2026-09-25)

---

## 1. Ecosystem Overview

The open-source personal AI assistant landscape shows **bimodal maturity**: a tier of large, high-velocity platforms (OpenClaw, ZeroClaw, Hermes Agent, NanoBot, CoPaw) pushing 20–500 PRs/day with dedicated teams, and a tier of specialized or earlier-stage projects (PicoClaw, IronClaw, NullClaw, NanoClaw) maintaining steady but lower throughput. **No project cut a stable release today**—three published release candidates (Hermes v0.21.5, IronClaw v1.4.1-rc.2, CoPaw v2.2.2b3) and the rest are in stabilization sprints. The dominant theme across the ecosystem is **operational hardening**: fixing update pipelines, database contention, process leaks, provider wire-format mismatches, and CI flakiness rather than shipping new capabilities. Security posture is under active scrutiny (LobsterAI, ZeroClaw), and multi-tenant/Hub architectures are emerging as the next strategic frontier (CoPaw, ZeroClaw).

---

## 2. Activity Comparison

| Project | Issues Updated | PRs Updated | PRs Merged | Release Status | Health Score* |
|---------|----------------|-------------|------------|----------------|---------------|
| **OpenClaw** | 194 | 500 | 122 | None (v2026.9.6 ref'd) | 🟡 High velocity, critical backlog |
| **ZeroClaw** | ~2 | 50 | 2 | None (master-based) | 🟢 Active, review bottleneck |
| **Hermes Agent** | 9 | 50 | 1 | **v0.21.5 released** | 🟢 Stable cadence, rapid triage |
| **NanoBot** | 14 | 37 | 24 | None (v0.3.5, v0.3.6 imminent) | 🟢 High merge rate, 2 critical bugs |
| **CoPaw (QwenPaw)** | 19 | 17 | 2 | None (v2.2.2b3) | 🟡 High churn, strategic pivot |
| **NullClaw** | 12 | 25 | 8 | None | 🟢 Healthy fix throughput |
| **NanoClaw** | 2 | 13 | 3 | None | 🟢 Focused hardening sprint |
| **LobsterAI** | 16 closed | 6 merged | 6 | None (2026.6.1) | 🔴 Security debt, stale closures |
| **IronClaw** | 1 (auto) | 1 | 0 | **v1.4.1-rc.2** | 🟢 Steady, low community signal |
| **PicoClaw** | 2 | 8 | 0 | None | 🟡 Stalled features, dep-driven |

*Health Score: 🟢=Healthy velocity & resolution, 🟡=High activity with structural risks, 🔴=Process/quality concerns

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale of throughput**: 10× PR volume of next project (500 vs 50), indicating largest dedicated team and broadest contributor base
- **Architectural breadth**: Only project with simultaneous gateway, plugin runtime, memory core, CLI, Web UI, and sandbox subsystems under active development
- **Ecosystem gravity**: Referenced as upstream/core by NanoClaw, LobsterAI, and others; plugin/channel protocols de facto standards

**Technical Approach Differences:**
- **Monolithic gateway + plugin runtime** vs. NanoBot/NullClaw's lighter agent-core + channel model
- **In-process SQLite + custom memory/index** vs. ZeroClaw's Qdrant/PostgreSQL, Hermes' OpenViking
- **Self-update via global npm swap** (currently broken) vs. Docker/container-first (IronClaw, ZeroClaw) or binary (Hermes)
- **P0/P1 bug density** (14 critical/high open) reflects scale of deployed surface area, not necessarily worse quality

**Community Size**: Largest by GitHub metrics (issues/PRs/contributors), but also highest **open P0 count**—users are blocked on updater, startup time, and DB locking. Peer projects resolve critical bugs faster (Hermes: 6/9 issues have fix PRs same day; NanoBot: 24 merges/day).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Need |
|-------------|-------------------|---------------|
| **Provider wire-format parity** (Responses API, tool-result images, extended thinking) | NanoBot (#5896, #1387), ZeroClaw (#10502), LobsterAI (#2761), PicoClaw (#3381) | OpenAI-compatible endpoints diverge; agents need per-provider adapters for `/responses`, `image_url` in tool messages, thinking tokens |
| **Update/release pipeline reliability** | OpenClaw (#156112, #151467), Hermes (#122277), LobsterAI (#2215), PicoClaw (dep bumps) | In-place updaters fail; container/binary delivery preferred; semantic versioning + migration scripts needed |
| **Database contention & long transactions** | OpenClaw (#148307, #143640), LobsterAI (#2214, #2216), ZeroClaw (#11035) | SQLite locking under load; WAL mode, connection pooling, async reclaim, time-bound vector recall |
| **Process lifecycle / zombie management** | OpenClaw (#97616), NanoBot (#5806), Hermes (#122263), CoPaw (#7857) | Hook/tool/MCP child processes unreaped; need structured concurrency, timeout guards, reap on shutdown |
| **Multi-session / multi-tenant isolation** | ZeroClaw (#10263 stack), CoPaw (#7318, #7978), NanoBot (#5838), IronClaw (extensions) | API gateway routing, principal-owned memory, RBAC, audit logs—critical for Hub/enterprise adoption |
| **ARM64 / heterogeneous compute support** | NanoClaw (#3888), NullClaw (#976), ZeroClaw (CI), PicoClaw (deps) | Multi-arch images, aarch64 stack sizes, WSL2 scheduler quirks, DGX Spark/Apple Silicon/Graviton |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | NanoBot | CoPaw/QwenPaw | NanoClaw | NullClaw | IronClaw | LobsterAI | PicoClaw |
|-----------|----------|----------|--------------|---------|---------------|----------|----------|----------|-----------|----------|
| **Primary Target** | Power users, devs, self-hosters | Enterprise/operator deployments | Desktop-first, voice, local-first | Hackers, multi-channel bots | Teams, Hub/multi-tenant | Operator/skill-driven workflows | Edge/low-resource, privacy | NEAR ecosystem, agent eval | Chinese-market, Electron UI | Embedded/mobile (Pico HW) |
| **Architecture** | Monolithic gateway + plugin runtime | Modular, policy-driven, PKI identity | Electron + Rust core, TUI/voice | Python async, channel adapters | Electron + Go backend, Console UI | Iron Proxy gateway + skills | Go, SQLite, MCP stdio | Rust, WASM plugins, benchmark CI | Electron + OpenClaw fork | Go, DeltaChat/Pico channels |
| **Memory/Context** | Custom SQLite + vector (dreaming) | Qdrant + PostgreSQL, time-bound | OpenViking (vector), CliffCompaction | SQLite + file workspace | ReMe (Redis/SQLite), compaction | Iron Control DB, session shards | SQLite, configurable recall | Benchmark-driven, graph refresh | OpenClaw fork + Memory Search | Not detailed |
| **Provider Model** | Static catalog + dynamic discovery (req) | OpenAI-compat + MCP + custom | Multi-provider, inferred routing | OpenAI-compat, Anthropic, OpenCode | Qwen-first, OpenAI-compat | OpenAI-compat, OrcaRouter | OpenAI-compat, Ollama, local | DeepSeek-v4, OCR eval | Locked to OpenAI (Memory Search) | OpenAI, opencode-go, Responses API |
| **Deployment** | npm global, Docker, self-update | Container, relay frontdoor, OIDC | Desktop (Win/Mac/Linux), Docker | Docker, systemd, bare metal | Desktop, Hub (multi-tenant) | Docker, Iron Proxy, CLI | Binary, Termux, SBCs | Container, Web UI | Electron installer, Windows | Pico hardware, mobile TUI |
| **Unique Focus** | Plugin ecosystem, dreaming, sandbox | Security/identity stack, egress policy | Voice, TUI, compaction research | Channel breadth (Discord, Matrix, TG) | Hub roadmap, Console redesign | Skill auto-approval, arm64 | Low-resource, MCP stdio, symlinks | Agent eval, Treasury OCR benchmark | UI theming, Cowork collab | DeltaChat, Pico channel |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Signals |
|------|----------|---------|
| **Rapidly Iterating (High Velocity + Active Triage)** | OpenClaw, ZeroClaw, Hermes Agent, NanoBot, NullClaw | Daily merges >20, critical bugs get fix PRs within hours, release candidates frequent |
| **Strategic Pivot / Stabilizing** | CoPaw, NanoClaw, IronClaw | CoPaw: Hub multi-tenant redesign (v2.2.2b3 regressions); NanoClaw: arm64 + approval hardening; IronClaw: patch RC, benchmark observability |
| **Maintenance Mode / Stalled Features** | PicoClaw, LobsterAI | PicoClaw: only dependency bumps, feature PRs stale 8–17 days; LobsterAI: security issues closed stale, no fixes, power-user frustration |
| **Low Signal / Dormant** | Moltis, ZeptoClaw | Zero activity in 24h |

**Maturity Indicators:**
- **Release discipline**: Hermes (tagged patch today), IronClaw (RC), NanoBot (imminent v0.3.6) > OpenClaw/ZeroClaw (master-based, no tags)
- **Security responsiveness**: ZeroClaw (stacked auth PRs), NullClaw (fixed SIGSEGV in days) > LobsterAI (4 critical vulns closed stale)
- **Contributor breadth**: OpenClaw, ZeroClaw, Hermes show 15+ distinct authors in recent merges

---

## 7. Trend Signals for AI Agent Developers

1. **Container/Binary Delivery > Self-Updating Binaries**  
   Every project with a broken updater (OpenClaw, Hermes, LobsterAI) is moving toward Docker images, signed binaries, or relay-based enrollment (ZeroClaw, IronClaw). *Action: Invest in reproducible container builds and OTA via registry, not npm/global swap.*

2. **MCP as the Universal Tool Protocol**  
   NullClaw (stdio fixes), ZeroClaw (image relocation), NanoBot (server lifecycle), CoPaw (plugin compatibility) all investing in MCP stdio/SSE. *Action: Implement MCP client with timeout bounds, tool-result image handling, and capability negotiation.*

3. **Multi-Tenant / Hub Architecture is the Next Moat**  
   CoPaw Hub (32-comment discussion), ZeroClaw principal-owned sessions, IronClaw extensions, NanoClaw skill auto-approval all point to **shared infrastructure with isolation**. *Action: Design for principal-scoped memory, RBAC, audit logs from day one.*

4. **Provider Wire-Format Fragmentation is Accelerating**  
   OpenAI Responses API, Anthropic extended thinking, OpenCode Go `/responses`, Cheaper Inference, OrcaRouter—each needs a tailored adapter. *Action: Build a provider abstraction layer with per-vendor capability matrix and fallback chains.*

5. **Observability Gaps Drive User Churn**  
   Silent auth-profile skipping (OpenClaw #131877), missing compaction logs (NanoBot #5900), invisible provider errors (NullClaw #1000), misleading 429s (Hermes #122272). *Action: Structured logging for every fallback, timeout, and routing decision; expose via Prometheus/OTel.*

6. **ARM64 / Edge is No Longer Optional**  
   NanoClaw (DGX Spark), NullClaw (aarch64 SIGSEGV), ZeroClaw (CI), PicoClaw (mobile) all hitting ARM blockers. *Action: Multi-arch CI, stack-size tuning, WSL2 scheduler validation in every release.*

7. **Compaction/Context Management is the New Scaling Frontier**  
   CliffCompaction (Hermes #122274), agent-autonomous compaction (CoPaw #7733), budget-aware recall (NullClaw #979, ZeroClaw #11035). *Action: Make compaction pluggable, expose token-budget hooks, support re-derivation from source turns.*

---

**Bottom Line for Decision-Makers**: The ecosystem is consolidating around **operator-grade reliability** (update pipelines, multi-arch, security, observability) and **multi-tenant readiness**. Projects that treat these as first-class—Hermes, ZeroClaw, NullClaw—are pulling ahead in production trust despite lower raw velocity than OpenClaw. The next 6 months will separate **platforms you can run in production** from **sandboxes you hack on**.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-25

## 1. Today's Overview
NanoBot shows **high velocity** with 51 total GitHub items updated in the last 24 hours (14 issues, 37 PRs). The project is in active maintenance mode: 24 PRs were merged/closed today, addressing bugs across providers, channels (Discord, Telegram, Matrix), WebUI, and core agent infrastructure. No new release was cut, but the volume of merged fixes suggests a **v0.3.6 patch release is imminent**. Community engagement is healthy—multiple "good first issue" items are being picked up, and several contributors are driving concurrent workstreams (provider routing, WebUI polish, channel reliability).

---

## 2. Releases
**No new releases today.** The latest published version remains **v0.3.5**. Given 24 merged PRs since the last release—including critical fixes for Discord runtime leaks, Matrix reply threading, provider SSE parsing, and WebUI URL hygiene—a patch release (v0.3.6) is expected within days.

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary |
|----|------|---------|
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | WebUI, i18n | **Localize Agent activity text** across all 10 supported languages; live/replayed activity updates on language change. Closes #5366. |
| [#5724](https://github.com/HKUDS/nanobot/pull/5724) | Agent core | **Retrieve & log background-task exceptions** (post-turn consolidation, archival, title generation). Fixes silent failures from `schedule_background`. Closes #5429. |
| [#5807](https://github.com/HKUDS/nanobot/pull/5807) / [#5864](https://github.com/HKUDS/nanobot/pull/5864) | Discord | **Clean up reaction/emoji tasks on runtime reset**; cancel pending work, drain in-flight callbacks. Closes #5806. |
| [#5292](https://github.com/HKUDS/nanobot/pull/5292) | Matrix | **Reply to the user event that started the turn** using `m.in_reply_to`. Closes #5274. |
| [#5905](https://github.com/HKUDS/nanobot/pull/5905) | WebUI, perf | **Keep global page URLs clean**; defer chat mounting, avoid unnecessary catalog fetches, fix settings-return navigation. |
| [#5904](https://github.com/HKUDS/nanobot/pull/5904) | WebUI, perf | **Faster chat refresh** via tab-local cache, quiet placeholders, lazy app-catalog loading. |
| [#5431](https://github.com/HKUDS/nanobot/pull/5431) | Agent core | **Report background task failures** with lifecycle-aware handler, preserving shutdown ordering. |
| [#5780](https://github.com/HKUDS/nanobot/pull/5780) | Channels | **Silence auto-compaction notifications** (retain for manual `/compact`). Addresses #5900 pain point. |
| [#5902](https://github.com/HKUDS/nanobot/pull/5902) | Telegram, WebUI | **Shared session-title generation**; rename private Telegram forum topics from generated titles. |
| [#5865](https://github.com/HKUDS/nanobot/pull/5865) | WebUI, context | **Preserve primary context window**; smaller fallbacks no longer shrink primary budget. |
| [#1387](https://github.com/HKUDS/nanobot/pull/1387) | Providers | **Anthropic extended thinking support** alongside `reasoning_effort` (long-standing PR, now merged). |
| [#5907](https://github.com/HKUDS/nanobot/pull/5907) | Test infra | **Consolidate 703 lines of redundant test coverage** across 34 files; parameterize 46 Python groups. |

**Net effect**: Stability ↑ (background tasks, channel cleanup), UX ↑ (WebUI i18n, perf, URLs), Provider parity ↑ (Anthropic thinking, OpenCode Go routing).

---

## 4. Community Hot Topics (Most Active Items)
| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#5838](https://github.com/HKUDS/nanobot/pull/5838) | PR (conflict) | High (conflict label) | **API session routing bug**: all OpenAI-compat requests forced to `chat_id="default"`, breaking multi-session isolation. Critical for API users. |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | PR (open, 50+ days) | Ongoing | **Sustained-goal continuation bound**: prevent infinite auto-continue loops when model waits for user input. Long review cycle suggests design sensitivity. |
| [#5260](https://github.com/HKUDS/nanobot/pull/5260) | PR (open, 50+ days) | Ongoing | **Memory: ignore runtime files in workspace**; touches `.gitignore` generation, workspace tracking—high risk for user data. |
| [#5896](https://github.com/HKUDS/nanobot/issues/5896) / [#5906](https://github.com/HKUDS/nanobot/pull/5906) | Issue + PR | 1 each | **OpenCode Go `muse-spark` models require Responses API** (`/responses` endpoint); current Chat Completions route returns 500. Active provider integration work. |
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | Issue | 1 | **Auto-compaction deadlock**: `summarize_transcript` sends full history without token-budget guard; can never recover once budget exceeded. **Severity: High** — silent data loss risk. |
| [#5900](https://github.com/HKUDS/nanobot/issues/5900) | Issue | 0 | **Silent compaction + log verbosity**: Users annoyed by channel notifications on idle compaction; WeChat polling logs too noisy. Partially addressed by #5780. |

**Underlying needs**: Multi-session API correctness, provider wire-format parity (Responses API), compaction reliability, and quieter background operations.

---

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#5849](https://github.com/HKUDS/nanobot/issues/5849) Auto-compaction deadlock — no token-budget guard in `summarize_transcript` | Open | None yet |
| **High** | [#5838](https://github.com/HKUDS/nanobot/pull/5838) API routes all sessions to `chat_id="default"` — breaks isolation | Open (conflict) | #5838 (WIP) |
| **High** | [#5881](https://github.com/HKUDS/nanobot/issues/5881) v0.3.5 regression: `_nanobot` must be outside workspace; blocks startup | Closed (config validation) | Config fix implied |
| **Medium** | [#5806](https://github.com/HKUDS/nanobot/issues/5806) Discord leaves reaction tasks alive after stop | Closed | [#5807](https://github.com/HKUDS/nanobot/pull/5807), [#5864](https://github.com/HKUDS/nanobot/pull/5864) ✅ |
| **Medium** | [#5429](https://github.com/HKUDS/nanobot/issues/5429) AgentLoop drops background task exceptions | Closed | [#5724](https://github.com/HKUDS/nanobot/pull/5724), [#5431](https://github.com/HKUDS/nanobot/pull/5431) ✅ |
| **Medium** | [#5903](https://github.com/HKUDS/nanobot/issues/5903) Feishu: internal checkpoint marker leaked to user after idle compaction | Open | None yet |
| **Medium** | [#5898](https://github.com/HKUDS/nanobot/issues/5898) `gpt-6` series via GitHub Copilot unsupported (500 on provider) | Open | None yet |
| **Low** | [#5366](https://github.com/HKUDS/nanobot/issues/5366) WebUI Agent activity not localized | Closed | [#5367](https://github.com/HKUDS/nanobot/pull/5367) ✅ |
| **Low** | [#5111](https://github.com/HKUDS/nanobot/pull/5111) Telegram tilde/long code-fence rendering broken | Closed | [#5911](https://github.com/HKUDS/nanobot/pull/5911) ✅ |

**Watchlist**: #5849 (compaction deadlock) and #5838 (API session routing) are the highest-impact unfixed bugs.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **OpenAI Responses API support for OpenCode Go (`muse-spark`)** | [#5896](https://github.com/HKUDS/nanobot/issues/5896) + [#5906](https://github.com/HKUDS/nanobot/pull/5906) | **Very High** — PR open, targeted fix for 500 errors |
| **Server-side message queue ("waiting room") while agent busy** | [#5909](https://github.com/HKUDS/nanobot/issues/5909) | **High** — clear UX gap for long-running tasks; API-level feature |
| **Persist WebUI composer draft per conversation** | [#5910](https://github.com/HKUDS/nanobot/issues/5910) | **High** — low complexity, high user visibility |
| **Live tokens/sec indicator during streaming** | [#5908](https://github.com/HKUDS/nanobot/issues/5908) | **Medium** — WebUI-only, nice-to-have |
| **Silent context compaction (no channel notification)** | [#5900](https://github.com/HKUDS/nanobot/issues/5900) | **High** — #5780 merged (hides auto-compact notices); config toggle may follow |
| **Reduce WeChat channel polling log verbosity** | [#5900](https://github.com/HKUDS/nanobot/issues/5900) | **Medium** — logging config change |
| **WebUI session-end notification sound (opt-in)** | [#5524](https://github.com/HKUDS/nanobot/issues/5524) | **Medium** — closed but feature merged? (issue closed, no PR linked) |
| **Opper as built-in gateway provider** | [#5845](https://github.com/HKUDS/nanobot/pull/5845) | **Medium** — PR open, follows Eden AI/OrcaRouter pattern |

**Prediction**: v0.3.6 will ship OpenCode Go Responses routing (#5906), silent compaction (#5780), and the merged WebUI/channel fixes. The message queue (#5909) and composer persistence (#5910) are strong candidates for v0.4.0.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Compaction notifications spam channels** | #5900, #5780 | Users find auto-compact messages "annoying"; want silent background operation |
| **Composer draft lost on conversation switch/refresh** | #5910 | Direct UX friction in WebUI; pure in-memory state |
| **No follow-up messaging while agent busy** | #5909 | Blocks workflow for long tasks (browser automation, etc.) |
| **Feishu shows internal "Continue the active task…" marker** | #5903 | Leaks implementation detail to end user |
| **WeChat polling logs too verbose** | #5900 | Operational noise for self-hosters |
| **Discord bot leaves zombie reaction tasks** | #5806 | Resource leak, fixed in #5807/#5864 |
| **Matrix replies not threaded** | #5274, #5292 | Broke conversational UX; fixed |
| **API multi-session broken (all route to `default`)** | #5838 | Breaks programmatic multi-user use cases |
| **OpenCode Go `muse-spark` models unusable (500)** | #5896 | Provider integration gap for popular models |

**Satisfaction signals**: Quick turnaround on Discord leak, Matrix replies, WebUI i18n, and URL hygiene shows responsive maintenance. Frustration clusters around **compaction reliability** and **provider wire-format mismatches**.

---

## 8. Backlog Watch (Stale but Important)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) `fix(agent): bound sustained-goal continuation` | 51 days | Prevents infinite auto-continue loops; core agent behavior. Stuck in review/conflict. |
| [#5260](https://github.com/HKUDS/nanobot/pull/5260) `fix(memory): ignore runtime files inside tracked workspace dirs` | 51 days | Workspace hygiene; affects `.gitignore` generation and user file tracking. High risk if wrong. |
| [#5838](https://github.com/HKUDS/nanobot/pull/5838) `fix(api): route each session_id to its own chat` | 5 days (but conflict) | **API correctness blocker** — all sessions share `chat_id="default"`. Needs maintainer resolution. |
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) Auto-compaction deadlock | 4 days | **Data-loss risk**; no token-budget guard in automatic path. No PR yet. |
| [#1387](https://github.com/HKUDS/nanobot/pull/1387) Anthropic extended thinking | 208 days | **Finally merged today** — was the oldest open PR. Removes a long-standing provider parity gap. |

**Action needed**: Maintainer attention on #5838 (API routing) and #5849 (compaction deadlock) is urgent. #5257/#5260 need final review decisions to unblock contributors.

---

## Health Indicators
| Metric | Status |
|--------|--------|
| **Merge rate** | 24 PRs merged/closed in 24h — **very high** |
| **Issue closure rate** | 6/14 closed — **healthy** |
| **Critical bugs open** | 2 (compaction deadlock, API session routing) — **needs action** |
| **Contributor breadth** | 15+ distinct authors in merged PRs — **good** |
| **Release cadence** | No release since v0.3.5; patch backlog building — **release soon** |

**Overall**: **Strong maintenance velocity**, but two high-severity bugs (#5849, #5838) should gate the next patch release. The project is trending toward a stable v0.3.6 with significant quality-of-life improvements.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-25

## 1. Today's Overview
Hermes Agent released v0.21.5 (v2026.9.24) today, a patch roll-up tagging ~460 merged PRs since v0.21.4 for downstream Docker images and hosted deployments. The project shows high velocity: 50 PRs updated in the last 24 hours (49 open, 1 closed) and 9 active issues. Activity is heavily focused on bug fixes across the desktop updater, Discord/Slack gateways, provider routing, Kanban scheduling, memory isolation, and Windows compatibility. The release cadence and PR volume indicate a mature, actively maintained codebase with a strong emphasis on operational stability.

## 2. Releases
### v2026.9.24 — Hermes Agent v0.21.5 (2026-09-24)
**Type:** Patch roll-up release  
**Scope:** Tags ~460 PRs merged since v0.21.4 into a stable tag for Docker images, Hermes Cloud, and hosted deployments.  
**Notes:** Full curated release notes are deferred; this is a stabilization tag rather than a feature release. No breaking changes or migration steps are documented. Downstream consumers (Docker, Cloud) should pull the new tag for the latest fixes.  
**Link:** [Release v2026.9.24](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.9.24)

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary |
|----|------|---------|
| [#122288](https://github.com/NousResearch/hermes-agent/pull/122288) | Gateway / Windows | **CLOSED** — Fixes Windows login prompt appearing when stdout is captured; addresses update hand-off hang for pre-#122234 commits. |

**Key advancement:** The closed PR resolves a Windows desktop update regression where the hand-off script would hang on older commits. The 49 open PRs form a large fix sweep covering: desktop update reliability (Windows), provider alias normalization, session/kernel cleanup, streaming hook delivery, OpenViking memory isolation, Kanban unblocking, gateway 429 messaging, TUI reasoning display, Docker cwd remapping, timestamp corruption guards, ffmpeg asset repinning, SSH auth overlay latching, TTS AudioContext recovery, sudo flag detection, browser supervisor cleanup, and inferred-provider persistence guards.

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Type | Comments | Signals |
|------|------|----------|---------|
| [#67249](https://github.com/NousResearch/hermes-agent/issues/67249) | Issue (Bug) | 6 | `active_pr` respawn guard blocks worker respawn on any PR URL in comments; needs operator override. Affects kanban/dispatcher reliability. |
| [#45188](https://github.com/NousResearch/hermes-agent/issues/45188) | Issue (Bug) | 2 | Discord adapter misses embed-only messages, thread starters, and forwards — breaks bot-to-bot and thread workflows. |
| [#115079](https://github.com/NousResearch/hermes-agent/issues/115079) | Issue (Bug) | 2 | Environment-derived credentials silently set `alibaba-cn` as default provider, routing all 15 roles (main + 14 aux) to DashScope without user consent. |

**Underlying needs:** Operators want explicit control over respawn guards and provider selection; Discord integrations require full inbound fidelity (embeds, threads, forwards); credential inference must be opt-in with clear user confirmation to avoid silent provider hijacking.

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Severity | Issue | Component | Fix PR | Status |
|----------|-------|-----------|--------|--------|
| **P2** | [#115079](https://github.com/NousResearch/hermes-agent/issues/115079) — Env credentials silently set unconfigured `alibaba-cn` as default route for all roles | Provider routing / Config | [#122279](https://github.com/NousResearch/hermes-agent/pull/122279) | Open |
| **P2** | [#122272](https://github.com/NousResearch/hermes-agent/issues/122272) — Gateway 429 reply always blames model provider, even for Discord/unidentified 429s | Gateway / Discord | — | Open |
| **P2** | [#122277](https://github.com/NousResearch/hermes-agent/issues/122277) — Desktop updates take "insane" time; UX suggests OS reinstall | Desktop / Install-Update / Windows | [#122261](https://github.com/NousResearch/hermes-agent/pull/122261), [#122288](https://github.com/NousResearch/hermes-agent/pull/122288) | Open / Closed |
| **P2** | [#122263](https://github.com/NousResearch/hermes-agent/pull/122263) — TUI-owned session end doesn't reap `execute_code` kernels | TUI / Sessions / Code-exec | [#122263](https://github.com/NousResearch/hermes-agent/pull/122263) | Open (PR) |
| **P2** | [#122278](https://github.com/NousResearch/hermes-agent/pull/122278) — Continuous voice breaks after mic meter `AudioContext` error | Desktop / TTS | [#122278](https://github.com/NousResearch/hermes-agent/pull/122278) | Open (PR) |
| **P2** | [#122267](https://github.com/NousResearch/hermes-agent/pull/122267) — Sudo short-flag detection crosses subcommand boundary | Approval / Terminal | [#122267](https://github.com/NousResearch/hermes-agent/pull/122267) | Open (PR) |
| **P3** | [#122286](https://github.com/NousResearch/hermes-agent/issues/122286) — OpenViking memory provider writes from cron/subagent/flush contexts | Plugins / Memory / OpenViking | [#122287](https://github.com/NousResearch/hermes-agent/pull/122287) | Open (PR) |
| **P3** | [#122271](https://github.com/NousResearch/hermes-agent/issues/122271) — Kanban: card auto-routed to triage after block loop cannot be requeued with `unblock` | CLI / Kanban / Cron | — | Open |
| **P3** | [#67249](https://github.com/NousResearch/hermes-agent/issues/67249) — `active_pr` respawn guard lacks operator override | CLI / Kanban / Cron | — | Open |
| **P3** | [#45188](https://github.com/NousResearch/hermes-agent/issues/45188) — Discord embed-only/thread/forward messages invisible | Gateway / Discord | — | Open |

**Observation:** 7 of 9 new/updated issues are P2/P3; 6 have associated fix PRs already open, showing rapid triage-to-fix cycle. The desktop update experience (#122277) is the most user-visible regression.

## 6. Feature Requests & Roadmap Signals
| Issue | Area | Description | Likelihood for Next Version |
|-------|------|-------------|----------------------------|
| [#122274](https://github.com/NousResearch/hermes-agent/issues/122274) | Compaction / Sessions | Opt-in `summary_source=original`: re-derive summary from persisted turns instead of folding previous summary (CliffCompaction, arXiv:2609.26779) | High — labeled `from-harness-scout`, P3, innovation |
| [#122275](https://github.com/NousResearch/hermes-agent/issues/122275) | Providers / OpenAI / Usage-Cost | Opt-in OpenAI prompt-cache diagnostics on Responses wire (`comparison_response_id` → cache-miss reason in logs/usage) | High — labeled `from-harness-scout`, P3 |
| [#122279](https://github.com/NousResearch/hermes-agent/pull/122279) | Config / Providers | Never persist inferred provider route without explicit user selection (session switch still works) | High — P2 fix PR open, addresses #115079 root cause |

**Prediction:** The two `from-harness-scout` features (compaction re-derivation, OpenAI cache diagnostics) are likely candidates for v0.22.x given explicit tagging and opt-in design. Provider inference guard (#122279) will likely land in the next patch given P2 severity.

## 7. User Feedback Summary
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Desktop update UX** | [#122277](https://github.com/NousResearch/hermes-agent/issues/122277): "Am I installing an OS? I could reinstall Windows faster" — screenshot shows multi-minute update | High user frustration; blocks adoption on Windows |
| **Silent provider hijacking** | [#115079](https://github.com/NousResearch/hermes-agent/issues/115079): All 15 roles routed to Alibaba/DashScope without user config | Trust/security concern; users lose control over model routing |
| **Discord integration gaps** | [#45188](https://github.com/NousResearch/hermes-agent/issues/45188): Embed-only, thread starters, forwards invisible — hit in production within an hour | Breaks bot-to-bot and thread workflows; limits Discord utility |
| **Kanban workflow rigidity** | [#122271](https://github.com/NousResearch/hermes-agent/issues/122271): No supported way to requeue triaged card after block loop resolved | Operators cannot recover automated triage decisions |
| **Misleading 429 errors** | [#122272](https://github.com/NousResearch/hermes-agent/issues/122272): Gateway blames model provider for Discord/platform 429s | Debugging difficulty; wrong remediation path |

**Positive signals:** Rapid PR response to reported bugs (6/9 issues have fix PRs same day), active `from-harness-scout` innovation pipeline, and comprehensive fix sweep across desktop, gateway, providers, and sessions.

## 8. Backlog Watch (Long-Unanswered Important Items)
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#67249](https://github.com/NousResearch/hermes-agent/issues/67249) | Created 2026-07-19 (68 days) | Kanban respawn guard lacks operator override; blocks workflow automation | Open, 6 comments, needs-decision |
| [#45188](https://github.com/NousResearch/hermes-agent/issues/45188) | Created 2026-06-12 (105 days) | Discord inbound context gaps (embeds, threads, forwards) — production-breaking | Open, 2 comments, P3 |
| [#115079](https://github.com/NousResearch/hermes-agent/issues/115079) | Created 2026-09-18 (7 days) | Silent provider hijacking via env credentials — P2, needs-repro, needs-decision | Open, 2 comments, fix PR [#122279](https://github.com/NousResearch/hermes-agent/pull/122279) open |

**Maintainer attention needed:** #67249 and #45188 have been open >2 months with low comment activity but high operational impact. #115079 has a fix PR but needs decision on the inference-persistence policy. The `needs-decision` label on #67249 and #115079 suggests architectural choices are pending.

---

**Overall Health:** 🟢 **Healthy** — High velocity, rapid bug-to-fix turnaround, clear innovation pipeline, and a stabilization release today. Primary risks are Windows desktop update UX and silent provider inference; both have active P2 fix PRs.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-25

---

## 1. Today's Overview
PicoClaw showed **moderate maintenance activity** with 8 PRs updated (all dependency bumps or stale feature work) and 2 issue updates (one closed duplicate). No releases shipped. The project is in a **dependency-upgrade cycle** with Dependabot driving most recent PR traffic, while a user-facing bug in the Pico channel (multi-line message splitting) surfaced twice in 24h. Core feature PRs (#3381, #3376, #3371) remain open and marked stale, indicating slower feature velocity.

---

## 2. Releases
**No new releases** published today.

---

## 3. Project Progress
**No PRs merged or closed today.** All 8 updated PRs remain open:
| PR | Type | Status | Summary |
|----|------|--------|---------|
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Feature | Open (stale) | Switch OpenAI provider to Responses API |
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | Fix | Open (stale) | Register DeltaChat as custom channel to resolve config validation error |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | Feature | Open | Add `opencode-go` provider with session header support |
| [#3389](https://github.com/sipeed/picoclaw/pull/3389) | Chore | Open | Bump `golang.org/x/crypto` 0.53.0 → 0.57.0 |
| [#3388](https://github.com/sipeed/picoclaw/pull/3388) | Chore | Open | Bump `modelcontextprotocol/go-sdk` 1.6.1 → 1.8.0 |
| [#3387](https://github.com/sipeed/picoclaw/pull/3387) | Chore | Open | Bump `anthropic-sdk-go` 1.55.1 → 1.74.0 |
| [#3386](https://github.com/sipeed/picoclaw/pull/3386) | Chore | Open | Bump `mautrix` 0.27.0 → 0.31.0 (min Go 1.22) |
| [#3385](https://github.com/sipeed/picoclaw/pull/3385) | Chore | Open | Bump `line-bot-sdk-go/v8` 8.20.1 → 8.22.0 |

*Signal:* Dependency hygiene is active; feature work is stalled.

---

## 4. Community Hot Topics
| Item | Link | Activity | Analysis |
|------|------|----------|----------|
| **Bug: Pico channel splits multi-line input** | [#3390](https://github.com/sipeed/picoclaw/issues/3390) (closed) / [#3391](https://github.com/sipeed/picoclaw/issues/3391) (open) | 2 issues, 1 comment, 0 👍 | **High user impact** — pasting code/poetry in mobile TUI breaks message semantics. Duplicate filing suggests urgency. No fix PR yet. |
| **DeltaChat config validation error** | [#3376](https://github.com/sipeed/picoclaw/pull/3376) | Referenced in #3265, stale since Sep 10 | Blocking DeltaChat channel enablement; fix exists but unmerged. |
| **OpenAI Responses API migration** | [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Stale since Sep 17 | Strategic upgrade for OpenAI compatibility; needs review. |

*Underlying need:* **Reliability of core channels (Pico, DeltaChat)** and **keeping provider integrations current**.

---

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High** | Pico channel splits multi-line paste into separate messages ([#3391](https://github.com/sipeed/picoclaw/issues/3391)) | Open | ❌ No |
| **Medium** | DeltaChat channel fails config validation (`unknown type "deltachat"`) ([#3265](https://github.com/sipeed/picoclaw/issues/3265) → [#3376](https://github.com/sipeed/picoclaw/pull/3376)) | Fix PR open (stale) | ✅ [#3376](https://github.com/sipeed/picoclaw/pull/3376) |
| **Low** | Dependency updates may introduce breaking changes (e.g., `mautrix` v0.31.0 requires Go 1.22+) | PRs open | ⚠️ Review needed |

*No crashes or regressions reported today.*

---

## 6. Feature Requests & Roadmap Signals
| Feature | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| OpenAI Responses API support | [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Medium — PR exists but stale; strategic |
| `opencode-go` provider with session headers | [#3371](https://github.com/sipeed/picoclaw/pull/3371) | Medium — niche but complete PR |
| DeltaChat channel stabilization | [#3376](https://github.com/sipeed/picoclaw/pull/3376) | High — unblocks existing users |
| Multi-line paste preservation in Pico client | [#3391](https://github.com/sipeed/picoclaw/issues/3391) | High — user-facing regression |

*Prediction:* Next release will likely bundle dependency updates + DeltaChat fix + Pico multi-line fix. OpenAI Responses API may slip unless prioritized.

---

## 7. User Feedback Summary
- **Pain point:** Mobile TUI (Pico client) unusable for code/poetry pastes — each newline becomes a separate message ([#3391](https://github.com/sipeed/picoclaw/issues/3391)).
- **Blocker:** DeltaChat users cannot enable the channel due to config validation error ([#3265](https://github.com/sipeed/picoclaw/issues/3265)).
- **Sentiment:** Neutral-to-frustrated on core channel reliability; no positive feedback signals in last 24h.
- **Use case:** Developers pasting code blocks, writers sharing formatted text — both broken on Pico channel.

---

## 8. Backlog Watch
| Item | Link | Age | Why It Needs Attention |
|------|------|-----|------------------------|
| **DeltaChat config fix** | [#3376](https://github.com/sipeed/picoclaw/pull/3376) | 15 days (stale) | Blocks a whole channel type; fix is trivial (custom channel registration) |
| **OpenAI Responses API** | [#3381](https://github.com/sipeed/picoclaw/pull/3381) | 8 days (stale) | Future-proofs largest LLM provider integration |
| **opencode-go provider** | [#3371](https://github.com/sipeed/picoclaw/pull/3371) | 17 days | Expands provider ecosystem; complete implementation |
| **Pico multi-line bug** | [#3391](https://github.com/sipeed/picoclaw/issues/3391) | 1 day | Fresh, high-impact, no PR — needs triage & fix |

---

*Digest generated from GitHub data as of 2026-09-25. All links point to live GitHub items.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-25

---

## 1. Today's Overview

NanoClaw saw **high maintenance velocity** in the last 24 hours: 13 PRs updated (3 merged, 10 open) and 2 new issues filed. The activity centers on **Iron Proxy stabilization** (arm64 support, DB recovery, auto-approval rules), **setup/install hardening**, and **CI/test flake elimination**. No release was cut. The project is in a **bug-fix and platform-hardening sprint** ahead of a likely 2.4.x patch, with core-team members (glifocat, Koshkoshinsk) driving most changes.

---

## 2. Releases

**None** — no new tags or releases published today.

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#3890](https://github.com/nanocoai/nanoclaw/pull/3890) | agent-runner | Added explanatory text for inbound message blocks (`<message>`, `<dm-history>`, `<cross-session-context>`) in the chat system prompt. | Improves agent comprehension of context blocks; reduces confusion from sibling echo rows. |
| [#3885](https://github.com/nanocoai/nanoclaw/pull/3885) | setup/install | Fixed Claude CLI offer logic: no longer offered when run fails *before* runtime picker (fresh Standard run). | Prevents misleading install prompts for Codex/OpenCode/no-runtime-yet runs. |
| [#3882](https://github.com/nanocoai/nanoclaw/pull/3882) | CLI/core | Expanded `ncl approvals help` / `ncl dropped-messages help` enums to include every status/reason the host actually writes (e.g., `rejected`, `unknown_sender_*`). | CLI help now matches runtime behavior; aids debugging approval/drop flows. |

**Net effect**: Three user-facing polish fixes — prompt clarity, setup UX, CLI accuracy — all merged without breaking changes.

---

## 4. Community Hot Topics

| Item | Type | Comments | Reactions | Core Need |
|------|------|----------|-----------|-----------|
| [#3888](https://github.com/nanocoai/nanoclaw/issues/3888) | Issue | 0 | 0 | **arm64 support for Iron Proxy** — `exec format error` on NVIDIA DGX Spark because `ironsh/iron-control` image is amd64-only. |
| [#3881](https://github.com/nanocoai/nanoclaw/issues/3881) | Issue | 0 | 0 | **Per-host auto-approval for tool skills** — operators want to whitelist hosts so skills can call them without per-request approval cards. |
| [#3891](https://github.com/nanocoai/nanoclaw/pull/3891) | PR (open) | 0 | 0 | Direct fix for #3888: builds/publishes multi-arch `iron-control` image and pins it in `versions.json`. |
| [#3883](https://github.com/nanocoai/nanoclaw/pull/3883) | PR (open) | 0 | 0 | Recovers orphaned Iron Control DB volume on re-install after failed/abandoned install. |

**Analysis**: The two new issues (#3888, #3881) and their companion PRs (#3891, #3883) reveal a **platform-expansion push**: arm64 is now a first-class target (DGX Spark, Apple Silicon, Graviton), and the Iron Proxy gateway needs **policy granularity** for skill-driven tool calls. Both are operator pain points blocking production use on non-amd64 and in skill-heavy workflows.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Item | Status | Fix PR |
|----------|------|--------|--------|
| **High** | [#3888](https://github.com/nanocoai/nanoclaw/issues/3888) Iron Proxy `exec format error` on arm64 — blocks install entirely on arm64 hosts. | Open | [#3891](https://github.com/nanocoai/nanoclaw/pull/3891) (open, multi-arch image) |
| **Medium** | [#3883](https://github.com/nanocoai/nanoclaw/pull/3883) Orphaned Iron Control DB volume prevents re-install after failed setup. | Open (PR) | #3883 itself (recovers volume on re-install) |
| **Medium** | [#3884](https://github.com/nanocoai/nanoclaw/pull/3884) / [#3885](https://github.com/nanocoai/nanoclaw/pull/3885) Setup incorrectly offers Claude CLI for non-Claude runs / pre-picker failures. | #3885 merged, #3884 open | #3885 merged; #3884 refines the fix |
| **Low** | [#3887](https://github.com/nanocoai/nanoclaw/pull/3887) CI flakes: readiness probe clipped to deadline; delivery-poll drain test budget. | Open (PR) | #3887 (test hardening) |
| **Low** | [#3892](https://github.com/nanocoai/nanoclaw/pull/3892) Portal runtime test flake: fixed sleep → wait-for-journal. | Open (PR) | #3892 |
| **Low** | [#3889](https://github.com/nanocoai/nanoclaw/pull/3889) CLI help listed non-existent drop reason `unknown_sender_public`. | Open (PR) | #3889 (cosmetic) |

**Stability signal**: The arm64 blocker (#3888) is the only **install-breaking** bug; a fix PR exists and is straightforward (multi-arch image). Other items are UX polish or CI reliability.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Per-host auto-approval rules for Iron Proxy** | [#3881](https://github.com/nanocoai/nanoclaw/issues/3881) | **High** — direct operator need for skill-driven tool calls; minimal scope (gateway config). |
| **arm64-native Iron Control image** | [#3888](https://github.com/nanocoai/nanoclaw/issues/3888) → [#3891](https://github.com/nanocoai/nanoclaw/pull/3891) | **High** — blocker for arm64 adoption; PR ready. |
| **Sender label in shared WhatsApp mode** | [#3509](https://github.com/nanocoai/nanoclaw/pull/3509), [#3510](https://github.com/nanocoai/nanoclaw/pull/3510) (Aug 25, updated today) | **Medium** — long-open, multi-PR effort; improves multi-agent UX on shared identity. |
| **Release-note enforcement in PR template** | [#3886](https://github.com/nanocoai/nanoclaw/pull/3886) | **High** — process fix; 59/91 PRs in 2.4.0 lacked notes. Likely to merge soon. |

**Prediction**: Next patch (2.4.1) will ship arm64 Iron Proxy, auto-approval rules, and the three merged fixes. Sender-label WhatsApp work may slip to 2.5.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **Cannot install Iron Proxy on arm64** | #3888 — "exec format error on NVIDIA DGX Spark" | arm64 server/edge users (DGX Spark, Mac, Graviton) |
| **Skill tool calls require manual approval per request** | #3881 — "every other request raises a human card" | Operators using Iron Proxy + tool skills (API integrations) |
| **Failed Iron Proxy install leaves orphaned DB blocking retry** | #3883 — "volume and containers remain after checkout deleted" | Anyone with flaky installs or cleanup needs |
| **Misleading Claude CLI offer during non-Claude setup failures** | #3884, #3885 — Codex/OpenCode/pre-picker runs | New users, multi-runtime evaluators |
| **CI flakes waste developer time** | #3887, #3892 — timing-dependent test failures | Core team / contributors |

**Sentiment**: Operators are hitting **platform gaps (arm64)** and **workflow friction (approvals, re-install)** — both are "paper cuts" that block production adoption. The team is responding same-day with fix PRs, indicating strong maintainership.

---

## 8. Backlog Watch (Stale / Needs Attention)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#3509](https://github.com/nanocoai/nanoclaw/pull/3509) / [#3510](https://github.com/nanocoai/nanoclaw/pull/3510) | 31 days (updated today) | Multi-agent WhatsApp shared-mode UX — enables distinguishing agent replies on one number. Large refactor (core + channel). | Open, no recent core-team review. |
| [#3886](https://github.com/nanocoai/nanoclaw/pull/3886) | 1 day | Release-note enforcement — process debt from 2.4.0 (59/91 PRs missing notes). | Open, CI gate; needs core-team merge. |
| [#3887](https://github.com/nanocoai/nanoclaw/pull/3887) | 1 day | Real diagnostic bug in restart readiness wait (clipped socket timeout). | Open, test hardening; should merge before next release. |

**Recommendation**: Prioritize #3886 (process) and #3887 (real bug) for merge this week. Schedule review for #3509/#3510 — they’ve been idle a month despite recent updates.

---

*Digest generated from GitHub data as of 2026-09-25 00:00 UTC. All links point to `github.com/nanocoai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-25

## 1. Today's Overview
NullClaw shows **high maintenance velocity** with 25 PRs and 12 issues updated in the last 24 hours. The project is in a **stabilization and documentation phase**: 8 PRs were merged/closed, addressing critical crashes (SIGSEGV on Telegram, gateway CPU busy loop), MCP stdio hangs, and memory recall regressions. A wave of documentation PRs (7+) is modernizing guides for MCP, subagents, skills, voice, and hardware. Two issues remain open: an Ollama tool-support notification request (#1000) and skills symlink support (#995). No new release was cut today.

## 2. Releases
**None** — no new versions published in the last 24h.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#996](https://github.com/nullclaw/nullclaw/pull/996) | **Bug Fix** | Bounded stdio MCP response waits; kills server process group on timeout; fixes init cleanup. Closes #991. | **High** — eliminates indefinite hangs when gateway owns the MCP server. |
| [#978](https://github.com/nullclaw/nullclaw/pull/978) | **Bug Fix** | Moves Discord typing thread to 2 MiB `HEAVY_RUNTIME_STACK_SIZE`; prevents TLS stack overflow. | **High** — stops process abort on every typing indicator (aarch64). |
| [#1002](https://github.com/nullclaw/nullclaw/pull/1002) | **Bug Fix** | Re-applies the typing-stack fix from #978 on a clean branch. | **High** — ensures the crash fix is mergable. |
| [#986](https://github.com/nullclaw/nullclaw/pull/986) | **Feature** | Adds configurable `memory.database_path` for SQLite memory; supports read-only workspace deployments. | **Medium** — enables persistent/portable memory layouts. |
| [#979](https://github.com/nullclaw/nullclaw/pull/979) / [#1001](https://github.com/nullclaw/nullclaw/pull/1001) | **Feature** | Adds `memory.auto_recall`, `recall_limit`, `max_context_bytes` config keys (re-applied in #1001 after fork deletion). | **Medium** — gives users control over context injection costs. |
| [#1003](https://github.com/nullclaw/nullclaw/pull/1003) | **Feature** | `nullclaw skills list` now follows symlinked skill directories (skips broken/non-dir targets). Closes #995. | **Medium** — improves skill management workflows. |
| [#1005](https://github.com/nullclaw/nullclaw/pull/1005) | **Bug Fix** | Prevents archived conversation shards from polluting live recall; fixes session-filter ordering. | **Medium** — restores correct memory context. |
| [#1004](https://github.com/nullclaw/nullclaw/pull/1004) | **Observability** | Logs scrubbed provider error bodies on non-2xx (e.g., model lacks tool support). | **Medium** — makes Ollama/tool errors visible without packet capture. |
| [#1006](https://github.com/nullclaw/nullclaw/pull/1006) | **Bug Fix** | Fixes streamed CLI stdout overwrite-on-offset-0 corruption on macOS. | **Low** — cosmetic CLI output fix. |
| [#1007](https://github.com/nullclaw/nullclaw/pull/1007), [#1008](https://github.com/nullclaw/nullclaw/pull/1008), [#774](https://github.com/nullclaw/nullclaw/pull/774), [#775](https://github.com/nullclaw/nullclaw/pull/775), [#776](https://github.com/nullclaw/nullclaw/pull/776), [#777](https://github.com/nullclaw/nullclaw/pull/777) | **Docs** | Landing-page prefix cleanup; diagnostics flags docs; MCP/subagents/skills/voice/hardware guides; stats refresh; CLAUDE/AGENTS dedup; archive stale planning docs. | **Low** — significantly improves onboarding and reference material. |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) **Critical: web_search impractical on low-resource devices** (9 comments, 👍0) | Highest comment count among issues. Closed but discussion reveals demand for **local/offline search** or **DuckDuckGo HTML fallback** without API keys. | Users on cheap hardware (SBCs, old phones) need search that doesn’t require paid APIs or heavy containers. |
| [#867](https://github.com/nullclaw/nullclaw/issues/867) **Provide fully working example config.json** (1 comment, 👍3) | Most upvoted issue. Closed, but the 👍3 signals **strong onboarding pain** — default config is “crippled.” | New users cannot get a working setup without trial-and-error; a heavily-commented reference config is requested. |
| [#976](https://github.com/nullclaw/nullclaw/issues/976) **SIGSEGV on every inbound Telegram message** (4 comments) | Critical crash on aarch64; gateway crash-loops, messages lost. Fixed by #978/#1002. | **Reliability blocker** for ARM deployments (common in home-lab/edge). |
| [#870](https://github.com/nullclaw/nullclaw/issues/870) **Gateway accept4 busy loop (100% CPU) on WSL2** (3 comments) | Idle gateway burns a core on WSL2. Closed (likely fixed in recent scheduler work). | **Resource efficiency** on Windows dev machines. |
| [#1000](https://github.com/nullclaw/nullclaw/issues/1000) **Ollama incompatibility notification** (3 comments, **OPEN**) | User spent hours with Wireshark to discover model lacks tool support; only sees “adapter error.” | **Actionable error messages** when provider/model mismatches occur. |
| [#995](https://github.com/nullclaw/nullclaw/issues/995) **Support Skills Symlinks** (1 comment, **OPEN**) | `skills list` ignores symlinks; users want to share/version skills via dotfiles or sync tools. | **Workflow flexibility** for skill development and sharing. Addressed by #1003 (open). |

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#976](https://github.com/nullclaw/nullclaw/issues/976) SIGSEGV on every Telegram message (aarch64, 512 KB stack overflow) | **Closed** | [#978](https://github.com/nullclaw/nullclaw/pull/978), [#1002](https://github.com/nullclaw/nullclaw/pull/1002) |
| **Critical** | [#991](https://github.com/nullclaw/nullclaw/issues/991) MCP stdio calls hang indefinitely behind Proxmox launcher lock | **Closed** | [#996](https://github.com/nullclaw/nullclaw/pull/996) |
| **High** | [#870](https://github.com/nullclaw/nullclaw/issues/870) Gateway 100% CPU busy loop on WSL2 | **Closed** | (likely in recent scheduler/runtime PRs) |
| **Medium** | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) Archived shards recalled into live turns, corrupting context | **Fixed** (PR open) | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) |
| **Medium** | [#1004](https://github.com/nullclaw/nullclaw/pull/1004) Provider error bodies lost on non-2xx (Ollama tool-support errors invisible) | **Fixed** (PR open) | [#1004](https://github.com/nullclaw/nullclaw/pull/1004) |
| **Low** | [#1006](https://github.com/nullclaw/nullclaw/pull/1006) Streamed stdout corruption on macOS (offset-0 write) | **Fixed** (PR open) | [#1006](https://github.com/nullclaw/nullclaw/pull/1006) |

## 6. Feature Requests & Roadmap Signals
| Request | Issue/PR | Likelihood for Next Release |
|---------|----------|-----------------------------|
| **Ollama tool-support detection & friendly error** | [#1000](https://github.com/nullclaw/nullclaw/issues/1000) (open) | **High** — #1004 already logs scrubbed error bodies; a user-facing notification is a small step. |
| **Skills symlink support** | [#995](https://github.com/nullclaw/nullclaw/issues/995) / [#1003](https://github.com/nullclaw/nullclaw/pull/1003) (open) | **High** — PR #1003 implements it and adds docs; awaiting review. |
| **Configurable memory recall (auto_recall, recall_limit, max_context_bytes)** | [#979](https://github.com/nullclaw/nullclaw/pull/979) / [#1001](https://github.com/nullclaw/nullclaw/pull/1001) (open) | **High** — already coded, tested, and re-applied; just needs merge. |
| **Configurable SQLite memory path** | [#986](https://github.com/nullclaw/nullclaw/pull/986) (closed/merged) | **Done** — will appear in next cut. |
| **Vision pipeline (image/file → base64 for multimodal LLMs)** | [#624](https://github.com/nullclaw/nullclaw/issues/624) (closed) | **Medium** — closed but no PR linked; may be pending implementation. |
| **GET /status endpoint for agent monitoring** | [#631](https://github.com/nullclaw/nullclaw/issues/631) (closed, 👍1) | **Medium** — useful for dashboards; no PR yet. |
| **Subagent spawn with per-agent provider** | [#190](https://github.com/nullclaw/nullclaw/issues/190) (closed) | **Low** — closed without resolution; may be deferred. |
| **Web UI behind Cloudflare/nginx tunnels** | [#495](https://github.com/nullclaw/nullclaw/issues/495) (closed) | **Low** — closed; likely works now with reverse-proxy config. |

## 7. User Feedback Summary
- **Pain Points**
  - **Onboarding friction**: Default `config.json` is near-unusable (#867 👍3).
  - **Opacity of provider errors**: Ollama “adapter error” gives zero clue about missing tool support (#1000).
  - **ARM/WSL2 stability**: SIGSEGV on Telegram (#976) and 100% CPU on WSL2 (#870) block edge/Windows users.
  - **Resource constraints**: `web_search` requires heavy external APIs; no lightweight fallback (#871).
  - **Skill management rigidity**: Symlinks ignored, hindering dotfile/sync workflows (#995).
- **Positive Signals**
  - Quick turnaround on critical crashes (Telegram SIGSEGV fixed in days).
  - Documentation overhaul underway (7+ PRs) — maintainers investing in usability.
  - Memory subsystem gaining user-facing knobs (`auto_recall`, `recall_limit`, `max_context_bytes`, `database_path`).
  - MCP stdio timeout fix shows attention to integration reliability.

## 8. Backlog Watch (Stale/Unanswered Important Items)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#871](https://github.com/nullclaw/nullclaw/issues/871) **web_search on low-resource devices** | 5 months (created 2026-04-25) | Core feature unusable on target hardware (SBCs, cheap VPS); no PR yet. |
| [#624](https://github.com/nullclaw/nullclaw/issues/624) **Vision pipeline (multimodal file→base64)** | 6 months | High-demand capability (image analysis); closed but no implementation tracked. |
| [#631](https://github.com/nullclaw/nullclaw/issues/631) **GET /status endpoint** | 6 months | Enables external monitoring/dashboards; 👍1, no PR. |
| [#886](https://github.com/nullclaw/nullclaw/issues/886) **Show reasoning/thinking during long tasks** | 4.5 months | UX gap: users can’t tell if agent is stuck or working (30-min Outlook MCP example). |
| [#411](https://github.com/nullclaw/nullclaw/pull/411) **Tool customization system (trigger-based prioritization)** | 6.5 months | Large feature PR (71908bd..7c2422a) — **closed** but not merged; may need rebase/review. |
| [#966](https://github.com/nullclaw/nullclaw/pull/966) **Secure buffered curl fallback on Android (Termux)** | 3 months | Fixes DNS resolution on Android; open, no recent movement. |

---

**Health Indicator**: 🟢 **Healthy** — High merge rate on critical fixes, active documentation sprint, and feature PRs ready for next release. Main risk: **stale UX/onboarding issues** (#871, #867, #886) that affect first-time and edge-device users but lack assigned PRs.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-25

## 1. Today's Overview
IronClaw shows light but focused activity in the past 24 hours: one release candidate published (v1.4.1-rc.2), one new issue opened documenting daily test failures, and one long-running maintenance PR updated. The release candidate addresses a specific OAuth activation bug for Google extensions when credentials are supplied via the Web UI rather than environment variables. No PRs were merged today, indicating a stabilization phase. Overall project health appears steady with routine CI maintenance and quality tracking.

## 2. Releases
**ironclaw-v1.4.1-rc.2** (2026-09-24) — Second patch candidate over `1.4.0`, carrying the same fix as RC1.

### Fixed
- **Google extensions (Gmail, Google Calendar) activation**: Can now be activated on a deployment whose operator supplies the Google OAuth client through the Web UI rather than environment variables. Authorization code flow now works correctly in this configuration.

> **Migration notes**: No breaking changes. This is a patch-level fix for a specific deployment scenario. Operators using Web UI–provided Google OAuth credentials should validate this RC before upgrading.

## 3. Project Progress
No PRs were merged or closed in the last 24 hours. The only PR updated is a routine maintenance task:

| PR | Title | Status | Notes |
|----|-------|--------|-------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | `chore(agents): refresh codebase knowledge graph` | Open (updated 2026-09-25) | Nightly CI workflow refresh of the committed codebase-memory bootstrap snapshot. Low-risk, XS-sized infrastructure change. Awaiting review/merge. |

## 4. Community Hot Topics
Only one issue was created/updated today, with zero comments or reactions:

| Item | Activity | Analysis |
|------|----------|----------|
| [Issue #8111](https://github.com/nearai/ironclaw/issues/8111) — *Daily ironclaw failure taxonomy — 2026-09-24* | 0 comments, 0 👍 | Automated daily report categorizing 38 non-passing tasks in the `officeqa` benchmark suite. All failures attributed to model-quality issues (deepseek-v4-flash over OCR-digitized Treasury documents). Signals ongoing investment in benchmark observability and model evaluation pipelines. No immediate action required; serves as a quality trend tracker. |

## 5. Bugs & Stability
No new bug reports, crashes, or regressions were filed today. The only issue (#8111) is a scheduled failure taxonomy report, not a defect. The release candidate (v1.4.1-rc.2) addresses a previously known OAuth activation bug for Google extensions — a fix now in validation.

## 6. Feature Requests & Roadmap Signals
No explicit feature requests appeared today. The failure taxonomy issue (#8111) indirectly signals continued emphasis on:
- **Benchmark reliability** — Automated daily runs with categorized failures
- **Model evaluation** — Tracking model-quality regressions (deepseek-v4-flash on OCR tasks)
- **Observability** — Structured failure reporting for QA triage

Predicted next-version focus: polishing v1.4.1 GA release, then likely incremental improvements to agent memory/graph refresh pipelines (per PR #7988 pattern).

## 7. User Feedback Summary
No direct user feedback, pain points, or satisfaction signals in today's data. The sole issue is an automated CI report. Community engagement (comments, reactions) is absent on both the issue and PR.

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [PR #7988](https://github.com/nearai/ironclaw/pull/7988) | 28 days (created 2026-08-29) | Open, updated today | Routine knowledge-graph refresh stalled for ~4 weeks. Low risk but blocks CI bootstrap freshness. Should be reviewed/merged to keep nightly graph current. |
| [Issue #8111](https://github.com/nearai/ironclaw/issues/8111) | 1 day | Open | Automated report — no action needed, but monitor for failure-pattern shifts indicating model or OCR pipeline regressions. |

---

*Data sourced from GitHub API: issues, PRs, and releases updated 2026-09-24 through 2026-09-25. All links point to nearai/ironclaw repository.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-25

## 1. Today's Overview
LobsterAI shows **high maintenance activity but low new feature velocity** today. The project closed 16 stale issues and merged 6 PRs in the last 24 hours, indicating a focused housekeeping sprint rather than active feature development. No new release was published. The open PR queue (7) centers on OpenClaw runtime stability, UI theming, and provider integrations. Two long-standing bugs remain open: image attachment handling during model switches (#1861) and missing folder attachment support (#2385). Security posture is under active scrutiny with four detailed vulnerability reports filed this week.

## 2. Releases
**No new releases** in the last 24 hours. The latest version remains **2026.6.1** (referenced in issues #2214, #2216). The current PR pipeline suggests a forthcoming patch targeting OpenClaw v2026.8.1 compatibility, token-length fixes, and hot-reloadable gateway policies.

## 3. Project Progress — Merged/Closed PRs Today
| PR | Area | Summary | Impact |
|----|------|---------|--------|
| [#2761](https://github.com/netease-youdao/LobsterAI/pull/2761) | renderer, main, openclaw | Fix model output-length truncation for GLM-5.3 and third-party providers (volcengine, zai, deepseek) by correcting `max_tokens` default and scanning `third-party-extensions` | **High** — restores full completions for affected models |
| [#2762](https://github.com/netease-youdao/LobsterAI/pull/2762) | renderer, main, cowork | UI theme overhaul: neutral gray palette, edge-to-edge content, pill-style sidebar nav, independent window sizing | **Medium** — visual polish, no functional change |
| [#2759](https://github.com/netease-youdao/LobsterAI/pull/2759) | docs, main, openclaw | Repair malformed OpenAI-compatible tool calls (raw control chars, invalid escapes) with up to two internal continuations | **High** — prevents silent turn drops after tool execution |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | renderer | Show localized feedback when Cowork session rename fails (fixes #670) | **Low** — UX improvement |
| [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) | renderer, cowork | Sync image attachments with model vision capability on model switch — clears stale `dataUrl` when moving to non-vision models | **High** — directly addresses open issue #1861 |
| [#2760](https://github.com/netease-youdao/LobsterAI/pull/2760) | renderer, main, cowork | Duplicate of #2762 (UI theme alignment) | — |

**Net advancement**: Critical OpenClaw stability fixes (token truncation, tool-call repair) and a long-awaited image-attachment sync fix landed. UI theming work is iterative.

## 4. Community Hot Topics
| Item | Type | Comments | 👍 | Core Signal |
|------|------|----------|----|-------------|
| [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) | Security Issue | 3 | 0 | **Arbitrary local file read via `MEDIA:` artifact parsing** — assistant/tool output can inject paths read by privileged Electron process |
| [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) | Security Issue | 2 | 0 | **Unauthenticated local token proxy** — any local process can replay victim's `lobsterai-server` model credentials |
| [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) | Security Issue | 2 | 0 | **NIM media exfiltration** — assistant-generated absolute paths treated as outbound attachments |
| [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) | Security Issue | 2 | 0 | **HTML preview symlink traversal** — lexical `path.resolve` confinement bypassed by in-root symlinks |
| [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) | Bug (Open) | 3 | 0 | **Image attachment `supportsImage` state desync on model switch** — base64/file-path handling not updated |
| [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) | Bug (Closed stale) | 3 | 0 | **Memory Search provider locked to OpenAI** — UI prevents switching to local embeddings; 429 quota kills feature |

**Analysis**: Security researcher **YLChen-007** filed four distinct vulnerability reports (all closed stale today), indicating a coordinated audit. The common theme: **privileged Electron/main-process trust boundaries are too permissive** — artifact parsing, token proxies, media flows, and static servers all accept unvalidated paths or unauthenticated local connections. Meanwhile, users are blocked by **embedding provider lock-in** (#2216) and **attachment handling bugs** (#1861).

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) Arbitrary local file read via `MEDIA:` | Closed (stale) | ❌ No fix PR |
| **Critical** | [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) Unauthenticated token proxy replay | Closed (stale) | ❌ No fix PR |
| **High** | [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) NIM outbound file exfiltration | Closed (stale) | ❌ No fix PR |
| **High** | [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) HTML preview symlink disclosure | Closed (stale) | ❌ No fix PR |
| **High** | [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) Desktop "Data Backup" freezes main process (100% repro, 71 MB DB) | Closed (stale) | ❌ No fix PR |
| **High** | [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) Image attachment `supportsImage` desync on model switch | **Open** | ✅ [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) merged |
| **Medium** | [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) Execution result window freeze on scroll-to-top | Closed (stale) | ❌ No fix PR |
| **Medium** | [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) Memory Search provider locked to OpenAI, DB lock (EBUSY) on reindex | Closed (stale) | ❌ No fix PR |
| **Medium** | [#2230](https://github.com/netease-youdao/LobsterAI/issues/2230) 10× slower than CodeBuddy, 60M vs 67K tokens | Closed (stale) | ❌ No fix PR |

**Note**: All security and high-severity bugs were marked `[stale]` and closed today without fix PRs — this is a **process smell**. The only high-severity bug with a fix is #1861 (merged in #2373).

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Task queuing / pre-input next task** (WorkBuddy-style) | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | Medium — aligns with "AI Collaborator" vision |
| **Extend single-task timeout** (monitoring scripts terminated early) | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | High — simple config change |
| **Skills UI: 3-column layout for wide screens** | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | Medium — UI tweak |
| **Hermes Agent support** | [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131) | Low — no maintainer response |
| **Memory Search: allow local embedding provider** | [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) | High — user pain (429 quota), but issue closed stale |
| **AI Collaborator platform: NL command bar, task dispatch, cross-model orchestration** | [#2180](https://github.com/netease-youdao/LobsterAI/issues/2180) | Medium — strategic, long-term |
| **Skills watch: manual toggle, fix persistence bug, perf** | [#2243](https://github.com/netease-youdao/LobsterAI/issues/2243) | Medium — 174 skills cause startup I/O storm |
| **Folder attachment support (`@folder`)** | [#2385](https://github.com/netease-youdao/LobsterAI/issues/2385) | **Open** — direct parity with competing agents |
| **OrcaRouter provider integration** | [#2504](https://github.com/netease-youdao/LobsterAI/pull/2504) | High — PR open, mirrors OpenRouter wiring |
| **Permanent sidebar ad-banner hide setting** | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | High — PR open, addresses #2342 |

**Predicted next version scope**: OpenClaw v2026.8.1 stabilization (token length, tool-call repair, hot-reload policies), OrcaRouter provider, ad-banner toggle, image-attachment sync. Security fixes and Memory Search provider unlock are **overdue but not yet scheduled**.

## 7. User Feedback Summary
| Pain Point | Frequency | Representative Quote |
|------------|-----------|----------------------|
| **Security anxiety** | 4 detailed reports | "LobsterAI automatically parses `MEDIA:` file references… forwards into privileged Electron" ([#2176](https://github.com/netease-youdao/LobsterAI/issues/2176)) |
| **Model-switch attachment breakage** | 1 open issue + 1 merged fix | "Attachments don't update `dataUrl` when switching vision↔non-vision models" ([#1861](https://github.com/netease-youdao/LobsterAI/issues/1861)) |
| **Memory Search vendor lock-in** | 1 closed issue | "Provider locked to OpenAI; 429 quota makes feature unusable" ([#2216](https://github.com/netease-youdao/LobsterAI/issues/2216)) |
| **Backup freezes app** | 1 closed issue | "Main window turns white, 'Not Responding' — must force kill" ([#2214](https://github.com/netease-youdao/LobsterAI/issues/2214)) |
| **Performance vs. CodeBuddy** | 1 closed issue | "25 min / 60M tokens vs 2 min / 67K tokens for same task" ([#2230](https://github.com/netease-youdao/LobsterAI/issues/2230)) |
| **Skills watch overhead** | 1 closed issue | "174 skills → startup scan + fs watch on every editor save, wastes tokens & I/O" ([#2243](https://github.com/netease-youdao/LobsterAI/issues/2243)) |
| **Missing folder drag-drop** | 1 open issue | "Can't @folder like other agents" ([#2385](https://github.com/netease-youdao/LobsterAI/issues/2385)) |
| **Installer extraction failures** | 1 closed issue | "ERROR_BAD_ENVIRONMENT (-2147450726) — clean machine, no AV" ([#2215](https://github.com/netease-youdao/LobsterAI/issues/2215)) |

**Sentiment**: **Frustrated power users**. Heavy LobsterAI adopters (174 skills, 71 MB DB, daily hundreds of messages) hit hard limits: security, performance, backup reliability, and vendor lock-in. They file detailed, reproducible reports — but see them closed as `[stale]` without resolution.

## 8. Backlog Watch — Items Needing Maintainer Attention
| Item | Age | Why It Matters | Suggested Action |
|------|-----|----------------|------------------|
| [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) Security: `MEDIA:` arbitrary file read | 69 days | **Critical RCE-adjacent vector**; closed stale without fix | Reopen, assign security label, patch artifact parser |
| [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) Security: unauthenticated token proxy | 80 days | **Credential leakage** to any local process | Reopen, add loopback auth token |
| [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) Security: NIM file exfiltration | 80 days | **Data exfil** via assistant-injected paths | Reopen, validate outbound paths |
| [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) Security: symlink traversal in preview | 80 days | **Local file disclosure** via lexical bypass | Reopen, use `fs.realpath` + allowlist |
| [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) Backup main-process freeze | 89 days | **Data-loss risk**; users cannot backup large DBs | Move backup to worker thread, add progress/cancel |
| [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) Memory Search provider lock + EBUSY | 89 days | **Feature unavailable** when OpenAI quota exhausted | Unlock provider selector, fix DB lock during reindex |
| [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) Image attachment desync | 150 days | **Core multimodal broken** on model switch | **Fixed in #2373** — verify release inclusion |
| [#2385](https://github.com/netease-youdao/LobsterAI/issues/2385) Folder attachment support | 62 days | **Parity gap** vs. Cursor, CodeBuddy, etc. | Add directory picker, recursive file expansion |
| [#2243](https://github.com/netease-youdao/LobsterAI/issues/2243) Skills watch perf/persistence/UI | 86 days | **Startup I/O storm** for power users | Add manual toggle, fix `reloadKind: "none"` persistence |
| [#2504](https://github.com/netease-youdao/LobsterAI/pull/2504) OrcaRouter provider | 39 days | **New provider integration** ready for review | Review & merge — low risk, high user value |

---

**Bottom line**: LobsterAI is in a **consolidation phase** — merging overdue stability fixes for OpenClaw and UI, but **security debt and power-user blockers remain unaddressed** despite detailed reports. The `[stale]` closure of critical issues without fixes is the single biggest risk signal. Next release should prioritize: (1) security patches for the four YLChen-007 advisories, (2) Memory Search provider unlock, (3) backup async migration, (4) folder attachments.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-25

## 1. Today's Overview
The project shows **high velocity** with 19 issues and 17 PRs updated in the last 24 hours. No new release was cut today. Activity is heavily skewed toward **bug triage and stabilization** across context management, provider integration, plugin compatibility, and the new Console sidebar redesign (v2.2.2b3). Two PRs were merged—both quick console fixes—while 15 PRs remain open, including significant features like realtime voice chat, durable transcript history, and a multi-tab terminal. The community is actively debating the roadmap for the newly released **QwenPaw Hub (multi-tenant edition, v2.2.0)**.

---

## 2. Releases
**No new releases today.**  
The latest referenced version is **v2.2.2-beta.3** (Desktop) and backend **2.2.2b2**, which introduced the Console sidebar redesign that broke chat groups/folders ([#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968), closed) and surfaced provider-switch media-URL regressions ([#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966)).

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#7972](https://github.com/agentscope-ai/QwenPaw/pull/7972) | `fix(console): default session list grouping to source` | Console/UI | Restores usable default grouping after sidebar redesign; follows up on [#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968). |
| [#7971](https://github.com/agentscope-ai/QwenPaw/pull/7971) | `fix(console): gate tool-call lifecycle queries on execution start` | Console/Tooling | Prevents premature polling of tool-call status before backend registration, eliminating console errors. |

Both are **hotfixes for v2.2.2b3 regressions**.

---

## 4. Community Hot Topics (Most Active Issues/PRs)
| Item | Comments | 👍 | Core Signal |
|------|----------|----|-------------|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) **Discussion: QwenPaw Hub — what next?** | 32 | 4 | Community wants **team/workspace features**: RBAC, shared skill catalog, audit logs, centralized billing, and on-prem deployment guides. Strong signal that multi-tenant is the strategic pivot. |
| [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) **Hardcoded 32k context_size fallback** (CLOSED) | 6 | 0 | Affected all models in v2.1.0–v2.2.0; fix likely in `RetryChatModel`. High visibility because it silently truncated long contexts. |
| [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) **Context compaction exceeds provider budget** | 6 | 0 | Compaction logic doesn’t account for full request payload (system prompt, tools, etc.), causing mid-turn failures. |
| [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) **Agent Loop mode not persisted in Console** | 5 | 0 | UX regression: user-selected loop mode resets to “Default” after each task run. |

**Underlying need**: Users are hitting **context-window and session-management limits** in real long-running workloads, and they expect the new Hub edition to solve multi-user coordination—not just single-player scaling.

---

## 5. Bugs & Stability (Reported Today, Ranked by Severity)
| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **Critical** | [#7979](https://github.com/agentscope-ai/QwenPaw/issues/7979) | Local `llama.cpp` server (32k) misidentified as cloud `qwen3.8` (1M) → compaction never fires, OOM/context errors. | No |
| **High** | [#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966) | Provider switch leaves `file://` media URLs in history → `invalid_parameter_error` on every subsequent turn; session unrecoverable. | [#7973](https://github.com/agentscope-ai/QwenPaw/pull/7973) (open) |
| **High** | [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) | `DriverManager.reload_driver()` race: background reload overwrites concurrent policy write → lost updates. | No |
| **High** | [#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857) | ACP shutdown fallback skips session cleanup + leaks event loop. | No |
| **Medium** | [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) | Scroll eviction drops **user turns** bracketing large tool-output spans; history.db retains them but live window loses context. | [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) (open) |
| **Medium** | [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | Daily Paper cron fails silently when `arxiv.org` unreachable; no proxy/endpoint config; error message misleading. | No |
| **Medium** | [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | Feishu DM session queue consumer stalls after high-priority card; new messages never spawn new consumer. | No |
| **Medium** | [#7767](https://github.com/agentscope-ai/QwenPaw/issues/7767) | Guardrail-plugin build reports 4 bugs: stale image blobs, cron misfire, console tail-drop, `on_acting` never fires. | No |
| **Low** | [#7970](https://github.com/agentscope-ai/QwenPaw/pull/7970) | Browser module-level `return` in `finally` block compiles incorrectly (syntax-level). | [#7970](https://github.com/agentscope-ai/QwenPaw/pull/7970) (open) |
| **Low** | [#7969](https://github.com/agentscope-ai/QwenPaw/pull/7969) | Cron delete optimistic UI rollback restores at wrong index. | [#7969](https://github.com/agentscope-ai/QwenPaw/pull/7969) (open) |

**Closed today**: [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) (hardcoded context_size), [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) (plugin `qwenpaw-pet` drops `actor` arg), [#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968) (sidebar redesign broke groups), [#4450](https://github.com/agentscope-ai/QwenPaw/issues/4450) (approval command aliases — old, finally closed).

---

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Multi-tenant Hub roadmap** (RBAC, shared skills, audit, on-prem) | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) (32 comments) | **Very High** — strategic focus; maintainers actively soliciting input. |
| **Agent-autonomous context management** (agent controls compaction trigger/warning) | [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | High — aligns with current compaction pain points ([#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628), [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836)). |
| **Cross-agent “Recent Sessions” panel** (sidebar, live status, unread) | [#7978](https://github.com/agentscope-ai/QwenPaw/issues/7978) | Medium — natural extension of Hub multi-session UX. |
| **Realtime voice chat** (speech I/O, interruption, model selection) | [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) (PR open) | High — PR is large, active, and integrates with existing chat pipeline. |
| **Durable paginated transcript history** (SQLite, catalog routing, deduplication) | [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) (PR open) | High — addresses session recovery & long-history needs. |
| **Authenticated multi-tab terminal** (xterm, per-tab CWD, lazy-loaded) | [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) (PR open) | Medium — power-user feature; depends on Hub auth model. |
| **Official mobile app (Android)** | [#7976](https://github.com/agentscope-ai/QwenPaw/issues/7976) | Low-Medium — community request; no PR yet; Hub auth would be prerequisite. |
| **Separate model for ReMe memory writing** | [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) (PR open) | Medium — cost optimization for long-running agents. |

---

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Context/window management is fragile** | [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628), [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836), [#7979](https://github.com/agentscope-ai/QwenPaw/issues/7979), [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | 😡 Frustrated — silent data loss, 400 errors, compaction misfires. |
| **Session recovery after provider/model switch is broken** | [#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966) | 😡 Blocking — “session permanently broken.” |
| **Console UX regressions in v2.2.2b3** | [#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968) (groups gone), [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) (loop mode reset) | 😕 Disappointed — basic features removed/reset. |
| **Plugin/integration reliability** | [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) (Feishu), [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) (Daily Paper), [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) (qwenpaw-pet) | 😟 Wary — “silent failures,” misleading errors. |
| **Desire for team/Hub features** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) (32 comments) | 😃 Hopeful — community engaged, willing to co-design. |
| **Mobile access needed** | [#7976](https://github.com/agentscope-ai/QwenPaw/issues/7976) | 😐 Patient but expectant. |

---

## 8. Backlog Watch (Stale/Important Items Needing Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) **Tool_call structure lost during context compaction** | ~2.5 months | Root cause of 400 errors & message-count mismatch; blocks reliable long-running tool use. No PR yet. |
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) **Hub roadmap discussion** | 1 month | 32 comments — community waiting for direction; should be converted to tracked epics. |
| [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) **Compaction budget mismatch** | 17 days | Core stability issue; affects all long-context users. |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) **Daily Paper needs proxy/endpoint config** | 13 days | Silent cron failures; easy config fix but unaddressed. |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) **Feishu consumer stall** | 22 days | Enterprise channel blocked; needs concurrency/queue redesign. |
| [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) **Driver card lost-update race** | 7 days | Data-loss risk in multi-user Hub; needs locking or optimistic concurrency. |

---

**Overall Health**: 🟡 **Caution** — High feature velocity (voice, terminal, transcripts, Hub) but **st

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-25

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 50 PRs updated in the last 24 hours (48 open, 2 merged/closed), though no new releases were cut. The project is in a heavy feature-development phase, dominated by a large stacked security/identity-access initiative (PRs #10263–#10321) and plugin architecture work (#8923, #9142, #9584, #10752). Two new issues surfaced: a CI flakiness bug in Apple preflight tests (#11094) and a provider-request for Cheaper Inference (#11103), the latter already having a companion PR (#11104). Overall health is **active but with significant review backlog** — many XL-sized PRs have been open for weeks awaiting maintainer bandwidth.

## 2. Releases
**No new releases** in the last 24 hours. The project appears to be on a `master`-based continuous delivery model; the last tagged release is not visible in the provided data.

## 3. Project Progress (Merged/Closed Today)
Only **2 PRs merged/closed** in the last 24h (details not provided in the feed). The bulk of movement is **review activity on long-running stacks**:
- **Security/Identity stack (#10263–#10321)**: 9 stacked PRs advancing principal-owned sessions, private memory, browserless OIDC, gateway auth routing, and PKCE enrollment — all updated today, indicating active review cycles.
- **Plugin egress & sockets (#8923, #9142, #9584, #10752)**: Host-mediated TCP/TLS, named TLS profiles, install-time egress grants, and plugin load verification — all XL-sized, high-risk, still open.
- **CI fix for Apple preflight tests (#11101)**: Opened yesterday, already addressing the flaky test reported in #11094.
- **Memory/Qdrant fix (#11035)**: Corrects time-bound filtering order in vector recall (medium risk).
- **MCP tool-result image relocation (#10502)**: Workaround for OpenAI-compatible 400 errors (needs author action).

## 4. Community Hot Topics
| Item | Type | Signals | Underlying Need |
|------|------|---------|-----------------|
| [#10263–#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10263) (stack) | PRs (9) | 34+ commits, stacked since Aug 22, all updated today, `risk:high`, `size:XL`, `status:accepted` | **Enterprise-grade auth/identity**: multi-IdP, principal isolation, browserless enrollment, cross-surface session mgmt — critical for production deployments. |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | PR | Open since Jul 31, `domain:security`, `risk:high` | **Plugin supply-chain security**: egress grants at install time, non-widening upgrades — operators need auditability. |
| [#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) / [#11104](https://github.com/zeroclaw-labs/zeroclaw/pull/11104) | Issue+PR | Created yesterday, immediate PR, `provider:compatible` | **Provider ecosystem expansion**: Cheaper Inference is a fast-growing OpenAI-compatible gateway; users want first-class config support. |
| [#11094](https://github.com/zeroclaw-labs/zeroclaw/issues/11094) / [#11101](https://github.com/zeroclaw-labs/zeroclaw/pull/11101) | Issue+PR | CI flakiness blocking unrelated PRs (docs-only #11084 failed) | **CI reliability**: Mock leakage in test harness breaking subprocess polling — affects all contributors. |

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **S2 – Degraded behavior** | [#11094](https://github.com/zeroclaw-labs/zeroclaw/issues/11094): Apple preflight test mock intercepts `time.sleep` used by `subprocess` polling, causing intermittent CI failures | **Open** (created 2026-09-24) | [#11101](https://github.com/zeroclaw-labs/zeroclaw/pull/11101) (open, targets the exact test) |
| **Medium** | [#11035](https://github.com/zeroclaw-labs/zeroclaw/pull/11035): Qdrant recall applies time bounds *after* limit, dropping in-window results | **Open** (needs author action) | PR #11035 (open) |
| **Medium** | [#10502](https://github.com/zeroclaw-labs/zeroclaw/pull/10502): OpenAI-compatible endpoints reject `image_url` inside `role:tool` messages | **Open** (needs author action) | PR #10502 (open, relocates images to user message) |
| **Low** | [#10967](https://github.com/zeroclaw-labs/zeroclaw/pull/10967): Test flakiness — `trim_history_log` treats `Empty` as stream end under load | **Open** | PR #10967 (open, waits for log event) |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Cheaper Inference provider** | [#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) + [#11104](https://github.com/zeroclaw-labs/zeroclaw/pull/11104) | **High** — PR is small (size:S), follows existing OpenAI-compatible pattern, immediate community contribution. |
| **You.com MCP search example** | [#11039](https://github.com/zeroclaw-labs/zeroclaw/pull/11039) | **High** — docs-only (XS), mirrors existing Parallel Search example, ready to merge. |
| **Plugin load verification (`plugin list --verify`)** | [#10752](https://github.com/zeroclaw-labs/zeroclaw/pull/10752) | **Medium** — stacked on approved #10746, XL but distinguished contributor, addresses operator visibility gap. |
| **Relay frontdoor link + QR for enrollment** | [#11099](https://github.com/zeroclaw-labs/zeroclaw/pull/11099) | **Medium** — depends on #11089, improves UX for device pairing. |
| **Agent-facing config authoring with policy previews** | [#10551](https://github.com/zeroclaw-labs/zeroclaw/pull/10551) | **Low–Medium** — XL, high risk, moves config engine to `zeroclaw-config`; foundational but needs extensive review. |

## 7. User Feedback Summary
- **CI pain**: Contributors hit flaky Apple preflight tests on unrelated changes (e.g., docs-only PR #11084) — erodes trust in CI gate.
- **Provider gap**: Users actively request new OpenAI-compatible gateways (Cheaper Inference); community contributes PRs quickly when patterns are clear.
- **Plugin opacity**: Operators cannot verify if installed plugins actually load or what egress they use — driving the egress-grant and `--verify` work.
- **Memory correctness**: Qdrant time-bound bug (#11035) affects recall accuracy for time-windowed queries — a correctness issue for RAG workloads.
- **MCP compatibility**: Tool-result image handling breaks on strict OpenAI-compatible endpoints — workaround exists but requires config flag (`tool_result_image_policy`).

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#8923](https://github.com/zeroclaw-labs/zeroclaw/pull/8923) / [#9142](https://github.com/zeroclaw-labs/zeroclaw/pull/9142) | ~2.5 months | High | **Plugin sockets/TLS foundation** — blocked on each other, marked `status:parking-lot`, `needs-author-action`; unblocks host-mediated networking for plugins. |
| [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) | ~2 months | High | **Plugin install egress grants** — security-critical, XL, no recent review movement. |
| [#10502](https://github.com/zeroclaw-labs/zeroclaw/pull/10502) | ~3.5 weeks | Medium | **MCP image handling** — `needs-author-action`, affects all OpenAI-compatible provider users. |
| [#11035](https://github.com/zeroclaw-labs/zeroclaw/pull/11035) | ~4 days | Medium | **Qdrant recall correctness** — `needs-author-action`, data-quality bug. |
| [#10652](https://github.com/zeroclaw-labs/zeroclaw/pull/10652) | ~3 weeks | Medium | **CLI memory factory routing** — `stale-candidate`, blocks PostgreSQL/Qdrant CLI ops. |

---

**Health Indicators**
- 🟢 **Velocity**: Very high (50 PR updates/day)
- 🟡 **Review throughput**: Low relative to XL PR volume — stacked security work consumes bandwidth
- 🟢 **Community contributions**: Active (new provider, docs, test fixes from non-core)
- 🔴 **CI stability**: Degraded (flaky test blocking merges)
- 🟡 **Release cadence**: Unknown — no tags in feed; may need scheduled cut

**Recommendation**: Prioritize merging #11101 (CI fix) and #11104 (Cheaper Inference) to unblock contributors and land easy value. Assign reviewers to the security stack (#10263–#10321) and plugin egress (#9584) to prevent further stalling.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*