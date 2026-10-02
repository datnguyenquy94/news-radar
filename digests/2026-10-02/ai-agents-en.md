# OpenClaw Ecosystem Digest 2026-10-02

> Issues: 150 | PRs: 500 | Projects covered: 12 | Generated: 2026-10-02 05:15 UTC

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

# OpenClaw Project Digest — 2026-10-02

## 1. Today's Overview
OpenClaw shows **very high velocity** with 500 PRs and 150 issues updated in 24 hours. The project released **v2026.8.34** (extended-stable/LTS gateway-only build) with security updates, reliability fixes, and new model support. Open PR count (312) exceeds merged/closed (188), indicating a growing review backlog. Critical P0/P1 bugs dominate open issues: zombie process leaks, gateway crashes under load, startup regression with plugins, and session-state corruption. The codebase is actively refactoring legacy migrations (pre-July 2026), hardening container deployments, and stabilizing recovery flows.

---

## 2. Releases
### v2026.8.34 — Extended-Stable Gateway Release
- **Type**: Gateway-only `extended-stable` (LTS equivalent)
- **Base**: OpenClaw from end of August 2026
- **Includes**: Critical security updates, reliability & performance fixes, new model support
- **Target**: Operators needing a stable, long-term-supported gateway build
- **Migration**: Drop-in replacement for prior gateway versions; no breaking changes noted
- **Link**: [Release v2026.8.34](https://github.com/openclaw/openclaw/releases/tag/v2026.8.34)

---

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Change |
|----|------|--------|
| [#163257](https://github.com/openclaw/openclaw/pull/163257) | CI | Fix test DB cleanup race (close connections before deleting WAL files) |
| [#163104](https://github.com/openclaw/openclaw/pull/163104) | Compat | Retire pre-July `metadata.clawdbot` skill alias; canonicalize to `metadata.openclaw` |
| [#163271](https://github.com/openclaw/openclaw/pull/163271) | State | Drop obsolete pre-July-2026 memory-index rebuild migration |
| [#141206](https://github.com/openclaw/openclaw/pull/141206) | Agents | Withhold internal recovery-nudge quotes from final user reply (fixes #137915) |
| [#115735](https://github.com/openclaw/openclaw/pull/115735) | Skills | Honor Codex `agents/openai.yaml` invocation policy (not just SKILL.md frontmatter) |
| [#163259](https://github.com/openclaw/openclaw/pull/163259) | Commands | Sanitize cache hit-rate calc against negative/non-finite usage counters |
| [#161035](https://github.com/openclaw/openclaw/pull/161035) | Gateway | Recognize Windows gateways with quoted log redirection (`>> "%PATH%" 2>&1`) |
| [#135362](https://github.com/openclaw/openclaw/pull/135362) | macOS | Restore app builds with Xcode 27; fix MLX TTS resource-bundle omission |

**Themes**: Legacy cleanup (pre-July 2026 schemas), Windows/container hardening, recovery-flow correctness, CI reliability.

---

## 4. Community Hot Topics (Most-Commented Issues/PRs)

| Item | Comments | Reactions | Status | Core Need |
|------|----------|-----------|--------|-----------|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) Zombie process leak | 16 | 1 👍 | **Open P1** | Hook/tool child processes (`openclaw-hooks`, `bash`, `codex`) not reaped → zombie accumulation → runtime degradation |
| [#96857](https://github.com/openclaw/openclaw/issues/96857) Tool output → "(see attached image)" | 15 | 4 👍 | Closed (stale) | Normal text outputs replaced by image placeholders in agent context → agent blindness |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) Gateway crash: DB read-admission seal | 12 | 0 | **Open P0** | `Worker environment inventory has closed` → unhandled rejection in `reconcileActive` on large sessions (11.5k turns) |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) Gateway startup ∝ plugin count | 11 | 0 | **Open P0** | Discord, Codex, Weixin plugins add 10s+ each; 120s publication budget exceeded |
| [#108182](https://github.com/openclaw/openclaw/issues/108182) Control UI regression | 10 | 2 👍 | Closed | Skill Proposals, Dreaming pages no longer accessible after 2026.7.1 upgrade |
| [#84037](https://github.com/openclaw/openclaw/issues/84037) Codex steady-state CPU | 10 | 1 👍 | **Open P1** | Gateway + Codex app-server + short-lived helpers consume high CPU at idle |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) Restart recovery claim changed | 9 | 0 | **Open P0** | Regression reappeared on 2026.7.2-beta.7 despite prior fix; WebChat → Telegram session |
| [#151962](https://github.com/openclaw/openclaw/issues/151962) Phantom user messages | 9 | 0 | **Open P2** | Internal runtime strings (heartbeat, async completion) submitted as user prompts; no transcript row |

**Underlying needs**: Process lifecycle management, session stability at scale, plugin architecture performance, UI feature parity, and preventing internal leakage into user context.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Summary | Fix PR? |
|----------|-------|---------|---------|
| **P0** | [#160521](https://github.com/openclaw/openclaw/issues/160521) | Gateway crash: DB read-admission seal → unhandled rejection in `reconcileActive` (large session) | No |
| **P0** | [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway startup wall-time scales with enabled plugins; 120s budget exceeded | No |
| **P0** | [#115424](https://github.com/openclaw/openclaw/issues/115424) | V8 heap OOM during turn → restart-recovery converts to 7-core-dump loop | No |
| **P0** | [#115256](https://github.com/openclaw/openclaw/issues/115256) | Desktop app boot-loops gateway; `doctor` recommends fix that app reverts | No |
| **P0** | [#114967](https://github.com/openclaw/openclaw/issues/114967) | Agent-driven live update left `launchctl submit` keepalive restarting gateway every ~2 min | No |
| **P0** | [#157818](https://github.com/openclaw/openclaw/issues/157818) | `openclaw update` 9.4→9.6 fails `doctor-failed` at 300s canary cap (7-agent install) | No |
| **P0** | [#158390](https://github.com/openclaw/openclaw/issues/158390) | `plugin-captures` tmp dirs never GC'd → disk fills indefinitely | No |
| **P1** | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Unreaped hook/tool child processes → zombie accumulation & degradation | No |
| **P1** | [#160522](https://github.com/openclaw/openclaw/issues/160522) | `prepared-model-catalog` worker at 1.15 GB despite `maxOldGenerationSizeMb: 512` | No |
| **P1** | [#84037](https://github.com/openclaw/openclaw/issues/84037) | Codex app-server steady-state CPU + helper process overhead | No |
| **P1** | [#118839](https://github.com/openclaw/openclaw/issues/118839) | Restart recovery claim changed before agent adoption (regression) | No |
| **P1** | [#140738](https://github.com/openclaw/openclaw/issues/140738) | Talk confirmations repeatedly superseded; cross-session actions never execute | No |
| **P1** | [#153417](https://github.com/openclaw/openclaw/issues/153417) | Subagent completion announce retries indefinitely when requester yields no visible reply | No |
| **P1** | [#155119](https://github.com/openclaw/openclaw/issues/155119) | Subagent final answer lost (`truncated-by-retention`) + duplicate settle events | No |
| **P1** | [#125284](https://github.com/openclaw/openclaw/issues/125284) | Ask-mode approval prompt doesn't block exec in containerized gateway (command runs before approval) | No |
| **P1** | [#130209](https://github.com/openclaw/openclaw/issues/130209) | Sensitive-value redaction masks browser `key` param → agent sees `Unknown key: "***"` | No |
| **P1** | [#115653](https://github.com/openclaw/openclaw/issues/115653) | Per-chat queue eviction doesn't cancel ACP agent → orphan replies | No |
| **P1** | [#115547](https://github.com/openclaw/openclaw/issues/115547) | Wake-dispatch failure terminalizes TaskFlow as failed without probing session liveness | No |
| **P2** | [#151962](https://github.com/openclaw/openclaw/issues/151962) | Phantom user messages (internal strings as prompts, not in transcript) | No |
| **P2** | [#53783](https://github.com/openclaw/openclaw/issues/53783) | Telegram group: cross-agent `sessions_list` visibility mismatch → one-way `sessions_send` failure | No |
| **P2** | [#115575](https://github.com/openclaw/openclaw/issues/115575) | Codex sandbox bridge misses env/info & mishandles `PathUri` cwd | No |
| **P2** | [#141973](https://github.com/openclaw/openclaw/issues/141973) | `tools.exec.notifyOnExit`: needs failure-only mode, stop relaying SIGTERM-at-drain | No |
| **P2** | [#47002](https://github.com/openclaw/openclaw/issues/47002) | Config validator rejects `mediaLocalRoots` despite TS types supporting it (Telegram outbound) | No |
| **P2** | [#128859](https://github.com/openclaw/openclaw/issues/128859) | Code Mode `wait` dead-ends with backgrounded shell `sessionId` | No |
| **P2** | [#115400](https://github.com/openclaw/openclaw/issues/115400) | `sessions_send`: no sync wait + duplicate delivery via async announce | No |

**Observation**: 18 P0/P1 bugs open with **no linked fix PRs** — stability backlog is significant. Several are regressions in 2026.9.x releases.

---

## 6. Feature Requests & Roadmap Signals

| Issue | Signal | Likelihood for Next Version |
|-------|--------|----------------------------|
| [#155115](https://github.com/openclaw/openclaw/issues/155115) Provider-neutral `decision_evaluate` tool | High — provider-agnostic capability discovery aligns with multi-model strategy | Medium (P2, needs product decision) |
| [#115876](https://github.com/openclaw/openclaw/issues/115876) Localize hardcoded approval UI strings | High — i18n gap in compiled dist files | Medium (P2, off-meta) |
| [#70266](https://github.com/openclaw/openclaw/issues/70266) Use assistant avatar in macOS Talk Mode | Medium — fits existing `ui.assistant.avatar` config | Low (P3, off-meta) |
| [#89871](https://github.com/openclaw/openclaw/issues/89871) `replyInThread` for Slack/Discord | Closed — implemented? (P3, diamond

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem
*Data as of 2026-10-02*

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows **bimodal maturity**: a top tier of 5 projects (OpenClaw, NanoBot, Hermes Agent, PicoClaw, NanoClaw, CoPaw, ZeroClaw) executing at high velocity with daily PR volumes of 15–500, and a long tail of 5 projects with minimal or zero recent activity. **No project released a stable version today**—OpenClaw shipped an LTS gateway build, while others accumulate fixes for imminent patch releases. Critical production blockers persist across multiple projects (TLS expiry, Windows install failures, Discord/Telegram channel breakage, session corruption), indicating the ecosystem is in a **stabilization sprint** rather than feature expansion. Multi-provider support, gateway/plugin architecture hardening, and session integrity are the dominant cross-cutting concerns.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed (24h) | Release Today | Health Score |
|---------|---------------------|-------------------|------------------------|---------------|--------------|
| **OpenClaw** | 150 | 500 | 188 | ✅ v2026.8.34 (LTS gateway) | 🟡 High velocity, large P0/P1 backlog (18 unfixed) |
| **NanoBot** | 1 | 17 | 4 | ❌ | 🟢 Active, rapid issue→fix turnaround, security fixes in flight |
| **Hermes Agent** | 14 | 50 | 6 | ❌ | 🟡 High velocity, Windows install broken, update bricking |
| **PicoClaw** | 2 | 14 | 2 | ❌ | 🟡 **Critical infra issue**: TLS cert expired 22+ days |
| **NanoClaw** | 4 | 26 | 15 | ❌ | 🟢 Security hardening strong, Discord approval broken |
| **IronClaw** | 2 | 1 | 0 | ❌ | 🟢 Stable core, incremental feature work |
| **LobsterAI** | 7 (stale) | 0 | 7 (stale, from Mar) | ❌ | 🔴 **Stagnant**: critical bugs from March unfixed |
| **Moltis** | 0 | 2 (maintainer) | 0 | ❌ | 🟢 Low external activity, targeted correctness fixes |
| **CoPaw** | 10 | 7 | 2 | ❌ (beta v2.2.2b4) | 🟡 Provider-specific debt accumulating |
| **ZeroClaw** | 0 | 50 | 0 | ❌ (v0.8.6 imminent) | 🟡 Pre-release crunch, stacked PRs, zero merges |
| **NullClaw** | 0 | 0 | 0 | ❌ | ⚫ Inactive |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | ⚫ Inactive |

**Key**: 🟢 Healthy • 🟡 Caution • 🔴 Critical • ⚫ Dormant

---

## 3. OpenClaw's Position

**Advantages vs Peers:**
- **Scale & Velocity**: 10–30× higher PR throughput than next project (500 PRs/24h vs NanoBot's 17)
- **Release Discipline**: Only project shipping a versioned LTS build today (`v2026.8.34` extended-stable gateway)
- **Enterprise Readiness**: Gateway-only LTS target, Windows/container hardening, migration drop-in guarantees
- **Community Breadth**: 312 open PRs, 150 issues updated—largest active contributor base by far

**Technical Approach Differences:**
- **Gateway-centric architecture**: Separates gateway (long-lived, multi-session) from agents (ephemeral), enabling LTS gateway builds without agent coupling
- **Legacy migration discipline**: Actively retiring pre-July 2026 schemas (skill aliases, memory-index rebuilds) via dedicated PRs
- **Recovery-flow correctness**: Unique focus on restart/recovery claims, session-state corruption, subagent completion semantics

**Community Size**: OpenClaw's 500 PRs/24h dwarfs the **combined total of all other projects (~567 PRs/24h)**. It operates at a different order of magnitude—more comparable to Kubernetes or VS Code than peer agent projects.

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Multi-provider normalization** | NanoBot, Hermes Agent, CoPaw, PicoClaw, NanoClaw | Provider-agnostic tool schemas (NanoBot #5825), vision auto-detect (Hermes #131208), formatter restrictions per provider (CoPaw #8069, #8074) |
| **Gateway/plugin architecture hardening** | OpenClaw, NanoClaw, ZeroClaw, PicoClaw | Plugin startup latency (OpenClaw #155859), channel reload nil-safety (PicoClaw #3401), WASM plugin host shipping (ZeroClaw #11347), webhook admission/dedup (ZeroClaw #11319) |
| **Session integrity & recovery** | OpenClaw, Hermes Agent, PicoClaw, CoPaw, NanoBot | Zombie process reaping (OpenClaw #97616), restart recovery claims (OpenClaw #118839, Hermes), async tool result routing (PicoClaw #3403), cross-session message splitting (CoPaw #8078), deleted session recreation (NanoBot #5483) |
| **Security & supply chain** | NanoClaw, NanoBot, ZeroClaw, IronClaw | Pinned deps/CVE gates (NanoClaw #3982, #3981, #3968), sandbox fail-closed (NanoBot #5536), auth config propagation (ZeroClaw #11313), encrypted browser profile storage (IronClaw #2358) |
| **Windows/container compatibility** | OpenClaw, Hermes Agent, LobsterAI, NanoClaw | Windows gateway log redirection (OpenClaw #161035), Windows install broken (Hermes #131199), PowerShell Constrained Language Mode (LobsterAI #2709), proxy support (NanoClaw #3901) |
| **Channel reliability (Discord/Telegram/IM)** | NanoClaw, CoPaw, PicoClaw, LobsterAI, Hermes Agent | Discord approval corruption (NanoClaw #3456), Telegram URL delivery (NanoClaw #3570), Weixin plugin injection (LobsterAI #918), QQBot/Feishu MIME handling (Hermes #131200) |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target Users | Architectural Signature |
|---------|---------------|--------------|-------------------------|
| **OpenClaw** | Enterprise gateway platform | Operators, infra teams, multi-tenant deployments | Gateway/agent separation, LTS gateway builds, session multiplexing |
| **NanoBot** | Web-first multi-agent UI | Developers, power users, remote access | WebUI remote connect, binary attachment upload, subagent session ownership |
| **Hermes Agent** | Research-driven agent reliability | Researchers, advanced users, multi-gateway federation | CAVE-Bench reversal gate, subagent failure disclosure, Group Chat cross-gateway |
| **PicoClaw** | Lightweight embedded/edge | IoT, mobile, resource-constrained | ARM32 support, Delta Chat channel, per-turn wall-clock budget |
| **NanoClaw** | Operator tooling & compliance | DevOps, platform teams, security-conscious | Security-audit skill, update channels, approval TTL, supply-chain hardening |
| **IronClaw** | Browser-integrated agents | Web automation, identity management | BrowserProfileStore, IdentyClaw Passport host integration |
| **LobsterAI** | Enterprise IM integration (Youdao) | Internal teams, Chinese enterprise | Cowork engine (OpenClaw-only), local plugin install, Windows compat |
| **Moltis** | Protocol correctness (MCP/TLS) | Infrastructure integrators | TLS ALPN control, MCP session lifecycle, RFC 8441 awareness |
| **CoPaw** | Multi-provider chat UX | Chinese developers, BYOM users | Advisor Mode (dual-model), CJK markdown, provider-specific formatters |
| **ZeroClaw** | WASM plugin ecosystem | Plugin authors, extensibility-focused | WASM plugin host, typed tool inventory, session generation fencing |

**Clear Stratification**: 
- **Platform plays**: OpenClaw (gateway), ZeroClaw (WASM plugins), NanoClaw (operator tooling)
- **UI/UX plays**: NanoBot (WebUI), CoPaw (chat UX), Hermes (desktop + federation)
- **Specialized**: IronClaw (browser), PicoClaw (edge), Moltis (protocol), LobsterAI (IM)

---

## 6. Community Momentum & Maturity

### **Rapidly Iterating (High Velocity + Active Fixes)**
| Project | Signal |
|---------|--------|
| **NanoBot** | Same-day issue→fix (#6000→#6001), 7 fix PRs for today's bugs, security-first |
| **ZeroClaw** | 50 PRs staged for v0.8.6, but **zero merges**—pre-release bottleneck |
| **CoPaw** | Beta iterating fast, provider fixes merged daily, Advisor Mode (XXXL PR) nearing |

### **Stabilizing (High Velocity + Release Discipline)**
| Project | Signal |
|---------|--------|
| **OpenClaw** | LTS gateway released, but 18 P0/P1 bugs unfixed—stabilization incomplete |
| **NanoClaw** | 15 PRs merged (security, CI, tests), Discord breakage blocks user trust |

### **Maintenance Mode (Low Velocity, Targeted Fixes)**
| Project | Signal |
|---------|--------|
| **IronClaw** | 6-month browser persistence epic, benchmark monitoring, XL PR from new contributor |
| **Moltis** | Maintainer-only PRs for TLS/MCP correctness, no community issues |

### **Stagnant / At Risk**
| Project | Signal |
|---------|--------|
| **LobsterAI** | 6-month-old critical bugs (crash on shutdown, Anthropic data loss), only debt-removal PRs merged |
| **PicoClaw** | **Site down 22+ days** (TLS), active bug fixes but no release path |
| **NullClaw / ZeptoClaw** | Zero activity—likely archived or dormant |

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Gateway/agent separation is winning** | OpenClaw LTS gateway, ZeroClaw core↔gateway RPC, NanoClaw gateway refresh on skill change | **Design for gateway as stable platform**; agents as ephemeral workloads |
| **WASM plugins emerging as standard extension model** | ZeroClaw shipping WASM host in artifacts, NanoBot subagent session ownership, OpenClaw skill alias canonicalization | **Invest in WASM toolchain**; expect sandboxed, language-agnostic plugins |
| **Session integrity > raw model capabilities** | 5+ projects fixing session corruption, recovery claims, cross-session leakage | **Session state machine correctness** is table stakes; model switching is secondary |
| **Multi-provider normalization layer required** | Every active project has provider-specific formatter/token/stream bugs | **Build/adopt a provider abstraction** (like NanoBot's structured decision client) |
| **Security hardening moving from "nice" to "blocking"** | NanoClaw supply-chain pins, NanoBot sandbox fail-closed, ZeroClaw auth propagation, IronClaw encrypted profiles | **Fail-closed defaults, pinned deps, credential hygiene** are now release gates |
| **Windows is the #1 platform gap** | OpenClaw, Hermes, LobsterAI, NanoClaw all have Windows-specific blockers | **CI on Windows is non-negotiable**; PowerShell Constrained Language Mode, launchd vs service managers |
| **Research-to-production pipeline shortening** | Hermes implementing CAVE-Bench (arXiv:2609.32616) and subagent disclosure (arXiv:2609.36139) in PRs | **Benchmark-driven agent reliability** (reversal gates, failure disclosure) becoming product features |

---

## Summary for Decision-Makers

- **OpenClaw** is the de facto reference platform—highest velocity, only LTS release, but carries largest stability debt.
- **NanoBot** and **NanoClaw** demonstrate best **operational hygiene** (security, CI, rapid fixes).
- **Hermes Agent** leads on **agent reliability research integration**—watch for CAVE-Bench patterns.
- **ZeroClaw**'s WASM plugin architecture is the most ambitious extensibility bet—v0.8.6 will validate it.
- **Avoid LobsterAI, NullClaw, ZeptoClaw** for production dependencies.
- **PicoClaw** needs infra rescue (TLS) before code merits evaluation.

**Recommendation**: For new agent deployments, **OpenClaw gateway + NanoBot WebUI + ZeroClaw plugins** (once v0.8.6 ships) covers the emerging best-of-breed stack.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-10-02

---

## 1. Today's Overview

NanoBot shows **high development velocity** with 17 PRs updated in the last 24 hours, though only 4 were merged/closed (all on older branches). The project is in active maintenance mode with significant WebUI, provider, and security work in flight. A new issue (#6000) was filed today regarding `sendProgress` behavior contradiction, with an immediate fix PR (#6001) opened by the same author. No new releases were published, suggesting the team is accumulating changes for a future batch release. The backlog contains several long-running PRs (some >6 months old) that may need maintainer attention.

---

## 2. Releases

**No new releases** published today. The latest release data is not available in the provided dataset.

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Type | Significance |
|----|-------|------|--------------|
| [#5941](https://github.com/HKUDS/nanobot/pull/5941) | feat(webui): connect to existing remote nanobot instances | Feature | **Closed** — Enables WebUI to connect to remote nanobot servers without port-forwarding; conversations, models, channels, tools remain on server |
| [#2095](https://github.com/HKUDS/nanobot/pull/2095) | feat: add read_image tool for local multimodal inspection | Feature | **Closed** — Adds `read_image` tool for multimodal model inspection of local image files; registered in main agent loop |
| [#2094](https://github.com/HKUDS/nanobot/pull/2094) | feat: add explicit subagent model config and in-process runtime reload | Feature | **Closed** — Adds `agents.defaults.subagent_model` config; enables explicit subagent model selection and in-process reload |
| [#5999](https://github.com/HKUDS/nanobot/pull/5999) | refactor: remove unused runtime and WebUI helpers | Refactor | **Closed** — Removes obsolete settings routes, Weixin GET wrapper, diff/title/sidebar test wrappers, and CSS custom properties |

> **Note**: All 4 closed PRs were created months ago (Mar–Sep 2026) and closed today, suggesting a maintainer cleanup pass rather than same-day merges.

---

## 4. Community Hot Topics

### Most Active Items (by recent update activity)

| Item | Type | Status | Updated | Key Signal |
|------|------|--------|---------|------------|
| [#6000 / #6001](https://github.com/HKUDS/nanobot/issues/6000) | Issue + PR | OPEN | 2026-10-02 | **New today** — `sendProgress: true` defaults to true but delivers nothing; docs contradict implementation. Fix PR opens same day. |
| [#5698](https://github.com/HKUDS/nanobot/pull/5698) | PR | OPEN | 2026-10-02 | WebUI: preserve explicit API types across search toggles (OpenAI Responses API ↔ search interaction) |
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) | PR | OPEN | 2026-10-02 | Subagent: session-owned messaging + targeted cancellation (follow-up to #5976) |
| [#5980](https://github.com/HKUDS/nanobot/pull/5980) | PR | OPEN | 2026-10-02 | **Critical UX fix**: TUI/WebUI attachment upload via binary HTTP (fixes 1009 WebSocket close on >1MiB Base64 frames) |
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | PR | OPEN | 2026-10-02 | **Security P1**: Fail closed when restricted shell lacks sandbox (fixes #4072) |

### Underlying Needs Analysis
- **WebUI reliability** dominates: 5/13 open PRs target WebUI (attachments, search toggles, temp chats, rejected messages, remote connect)
- **Security hardening** is active: sandbox enforcement (#5536), SSRF guards (#5678), atomic file writes (#5953)
- **Subagent maturity**: session-owned tasks, cancellation, model config (#5985, #2094) signal push toward production-grade multi-agent workflows
- **Provider expansion**: DashScope native protocol (#5398), structured decision client (#5825) show multi-provider strategy

---

## 5. Bugs & Stability — Today's Reports & Fixes

| Severity | Item | Description | Fix Status |
|----------|------|-------------|------------|
| **P0 (Critical)** | [#5953](https://github.com/HKUDS/nanobot/pull/5953) | File tools (`WriteFileTool`, `EditFileTool`, `ApplyPatchTool`) use in-place truncation → torn reads & crash-window loss | **Fix PR open** (atomic writes via temp file + rename) |
| **P1 (High)** | [#5536](https://github.com/HKUDS/nanobot/pull/5536) | Restricted shell bypass via symlinks/shell expansion when no sandbox available | **Fix PR open** (fail closed without sandbox) |
| **P1 (High)** | [#5980](https://github.com/HKUDS/nanobot/pull/5980) | TUI/WebUI attachment failure: >1MiB Base64 frames → gateway 1009 close → draft loss on reconnect | **Fix PR open** (binary HTTP upload) |
| **P2 (Medium)** | [#6000](https://github.com/HKUDS/nanobot/issues/6000) | `sendProgress: true` default delivers nothing; `tool_contract.md` contradicts itself | **Fix PR #6001 open** (authorize progress text delivery) |
| **P2 (Medium)** | [#5483](https://github.com/HKUDS/nanobot/pull/5483) | Deleted sessions recreated by delayed cross-session messages/subagent results | **Fix PR open** (require existing session for delivery) |
| **P2 (Medium)** | [#5678](https://github.com/HKUDS/nanobot/pull/5678) | Empty DNS results accepted → SSRF guard bypass | **Fix PR open** (reject empty/invalid DNS before loopback check) |
| **P2 (Medium)** | [#5601](https://github.com/HKUDS/nanobot/pull/5601) | Rejected WebUI messages leave orphaned attachments, subscriptions, history | **Fix PR open** (rollback side effects) |
| **P2 (Medium)** | [#5339](https://github.com/HKUDS/nanobot/pull/5339) | Temporary chat messages discarded during wait can persist after connection cleanup | **Fix PR open** (reject before publish/persist) |

> **Observation**: All reported bugs have corresponding fix PRs open. The P0 atomic writes fix (#5953) and P1 sandbox enforcement (#5536) are the most critical for data integrity and security.

---

## 6. Feature Requests & Roadmap Signals

| Feature Area | PR/Issue | Signal Strength | Likelihood for Next Release |
|--------------|----------|-----------------|----------------------------|
| **Remote WebUI connection** | [#5941](https://github.com/HKUDS/nanobot/pull/5941) (closed) | High — closed today, solves real deployment pain | ✅ Likely (already merged/closed) |
| **Subagent session ownership & cancellation** | [#5985](https://github.com/HKUDS/nanobot/pull/5985) | High — builds on #5976, enables production multi-agent | 🟡 Probable (active, updated today) |
| **DashScope native protocol** | [#5398](https://github.com/HKUDS/nanobot/pull/5398) | Medium — Chinese provider, full param surface, thinking mode | 🟡 Probable (conflict label, updated today) |
| **Provider-neutral structured decisions** | [#5825](https://github.com/HKUDS/nanobot/pull/5825) | Medium — replaces JEV-specific client, OpenRouter/System One backend | 🟡 Probable (updated today) |
| **Explicit subagent model config** | [#2094](https://github.com/HKUDS/nanobot/pull/2094) (closed) | Medium — closed today, in-process reload path | ✅ Likely (already merged/closed) |
| **Read image tool (multimodal)** | [#2095](https://github.com/HKUDS/nanobot/pull/2095) (closed) | Medium — closed today, local file inspection | ✅ Likely (already merged/closed) |
| **Binary attachment upload** | [#5980](https://github.com/HKUDS/nanobot/pull/5980) | High — fixes data loss, UX blocker for large files | 🟡 Probable (conflict label, updated today) |

**Roadmap prediction**: Next release will likely include the 4 closed PRs (#5941, #2095, #2094, #5999) plus high-priority fixes (#5953, #5536, #5980). Subagent maturity (#5985) and provider expansion (#5398, #5825) are tracking for subsequent releases.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Large file uploads break WebUI/TUI** | #5980: >1MiB Base64 → WebSocket 1009 → draft loss on reconnect | High — data loss, workflow interruption |
| **Progress streaming broken by default** | #6000: `sendProgress: true` delivers nothing; docs contradict | Medium — confusing UX, docs trust erosion |
| **Session state corruption** | #5483: deleted sessions recreated by delayed messages | Medium — state inconsistency |
| **Security gaps in restricted execution** | #5536: symlink/shell expansion bypasses workspace boundary | High — potential sandbox escape |
| **Orphaned resources from rejected messages** | #5601: attachments, subscriptions, history leak | Medium — resource bloat, cleanup burden |
| **File write races/corruption** | #5953: torn reads, crash-window loss | High — data integrity risk |

**Positive signals**: Users/contributors are filing detailed issues with root-cause analysis (#6000) and opening fix PRs immediately. The WebUI remote connect feature (#5941) addresses a clear deployment friction point.

---

## 8. Backlog Watch — Stale & High-Impact Items Needing Attention

| Item | Age | Type | Why It Matters | Blockers |
|------|-----|------|----------------|----------|
| [#5398](https://github.com/HKUDS/nanobot/pull/5398) | ~7 weeks | Feature | DashScope native protocol — unlocks thinking mode, full params for Chinese market | `conflict` label, needs rebase/review |
| [#5412](https://github.com/HKUDS/nanobot/pull/5412) | ~7 weeks | Fix | Gateway log buffering — startup output lost in background processes | Simple fix (`PYTHONUNBUFFERED=1`), low risk |
| [#5698](https://github.com/HKUDS/nanobot/pull/5698) | ~4 weeks | Fix | WebUI search toggle API type preservation — UX consistency | `priority: p2`, needs test validation |
| [#5825](https://github.com/HKUDS/nanobot/pull/5825) | ~2 weeks | Feature | Structured decision client abstraction — foundation for agentic workflows | New abstraction, needs design review |
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) | ~2 days | Feature | Subagent session messaging/cancellation — core multi-agent UX | Depends on #5976, `priority: p2` |
| [#2095](https://github.com/HKUDS/nanobot/pull/2095) | ~6.5 months | Feature | **Closed today** — was stale multimodal support | Resolved |
| [#2094](https://github.com/HKUDS/nanobot/pull/2094) | ~6.5 months | Feature | **Closed today** — was stale subagent model config | Resolved |

> **Maintainer action recommended**: Prioritize review of #5953 (P0 atomic writes), #5536 (P1 sandbox), #5980 (P1 attachment upload), and #5398 (stale provider feature). The two 6-month-old PRs were closed today — good cleanup signal.

---

## Summary Metrics

| Metric | Value |
|--------|-------|
| Issues updated (24h) | 1 |
| PRs updated (24h) | 17 |
| PRs merged/closed (24h) | 4 |
| Open PRs with fixes for today's bugs | 7 |
| Critical/High severity bugs with fixes | 3 (P0: 1, P1: 2) |
| Stale PRs (>4 weeks, still open) | 5 |

**Health indicator**: 🟢 **Active development** — high PR velocity, rapid issue-to-fix turnaround (#6000→#6001 same day), security fixes in progress. Backlog contains several merge-ready items awaiting review bandwidth.

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-10-02

## 1. Today's Overview

Hermes Agent shows **high development velocity** with 64 total updates (14 issues + 50 PRs) in the last 24 hours. The project is in active feature development phase with **no new releases** but significant progress on Group Chat cross-gateway collaboration, desktop stability, and plugin/message delivery fixes. Six PRs were merged/closed, indicating steady integration cadence. The issue backlog spans platform-specific bugs (Windows install, launchd gateway detection), agent delegation improvements, and emerging research-driven features (CAVE-Bench reversal gate, vision auto-detection).

---

## 2. Releases

**No new releases published today.** The latest version remains v0.21.5 (referenced in issues #131200, #131208).

---

## 3. Project Progress — Merged/Closed PRs Today

| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#130635](https://github.com/NousResearch/hermes-agent/issues/130635) | Bug Fix (Closed) | Desktop renderer migration from `file://` to `http://127.0.0.1:47891` reset localStorage (glass settings, 35+ persisted settings). Fixed via migration logic. | **High** — affects all desktop users on update |
| [#79130](https://github.com/NousResearch/hermes-agent/issues/79130) | Bug Fix (Closed) | `credential_pool._seed_custom_pool()` ignored `key_env` for custom providers, only reading inline `api_key`. Now resolves env var references. | **Medium** — blocks custom provider auth via env vars |

*Note: 4 additional PRs merged/closed (details not in top-20 by comments).*

---

## 4. Community Hot Topics

### Most Active Issues (by comments + reactions)

| Issue | Comments | 👍 | Core Need |
|-------|----------|-----|-----------|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) *Let Bots collaborate across gateways* | 30 | 4 | **Cross-gateway bot federation** — blocked on unified gateway runtime (#106742); desktop continuity deferred until Group Chat stabilizes on `main`. Multi-gateway agent orchestration is a strategic priority. |
| [#124120](https://github.com/NousResearch/hermes-agent/issues/124120) *launchd gateway migration fails* | 7 | 0 | **Process detection for launchd-managed gateways** — `looks_like_gateway_runtime_command_line()` fails on inline `-c` launcher, breaking `gateway migrate --multiplex`. Affects macOS service installs. |

### Most Active PRs (by engagement signals)

| PR | Focus | Significance |
|----|-------|--------------|
| [#131213](https://github.com/NousResearch/hermes-agent/pull/131213) *Subagent summaries disclose failures* | Implements arXiv:2609.36139 — forces subagents to surface failures/skipped steps/unverified claims (+9.8pp flaw disclosure on weak models). | **Agent reliability** — addresses silent failure burial in delegation. |
| [#131214](https://github.com/NousResearch/hermes-agent/pull/131214) *Verified-work reversal gate (CAVE-Bench)* | Implements defense against agents reverting correct work when falsely accused (arXiv:2609.32616). Prompt-only A/B test showed null effect; structural fix needed. | **Long-horizon agent integrity** — critical for compaction/handoff scenarios. |
| [#131217](https://github.com/NousResearch/hermes-agent/pull/131217) *`hermes status --full` platform deduplication* | Lists each messaging platform once using gateway config verdict, not duplicate registry entries. | **CLI clarity** — reduces noise in multi-platform setups. |

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **P1** | [#130836](https://github.com/NousResearch/hermes-agent/issues/130836) | Exact dependency pins without `exclude-newer` exemption brick `hermes update` after release (rolling 14-day window). | — |
| **P2** | [#131199](https://github.com/NousResearch/hermes-agent/issues/131199) | **Windows first-run install fails** at Python deps stage — "INSTALL DIDN'T FINISH / dependency install failed". Blocks new Windows users entirely. | — |
| **P2** | [#124120](https://github.com/NousResearch/hermes-agent/issues/124120) | `gateway migrate --multiplex` hangs on launchd gateways (pid detection fails on inline `-c` launcher). Migration manifest never closes. | — |
| **P2** | [#131200](https://github.com/NousResearch/hermes-agent/issues/131200) | Mislabeled media (`.dxf` as `image/*`) rejected by image cache, silently dropped. Affects QQBot/Feishu/Weixin adapters. | [#131201](https://github.com/NousResearch/hermes-agent/pull/131201) ✅ |
| **P2** | [#59052](https://github.com/NousResearch/hermes-agent/issues/59052) | OPTIONS preflight returns 401 on `/api/*` — auth middleware runs before CORS. Blocks cross-origin dashboard calls. | — |
| **P2** | [#131210](https://github.com/NousResearch/hermes-agent/pull/131210) | Anthropic OAuth sends **two User-Agent headers** (lowercase `user-agent` + SDK default), causing duplicate headers. | [#131210](https://github.com/NousResearch/hermes-agent/pull/131210) ✅ |
| **P3** | [#131205](https://github.com/NousResearch/hermes-agent/issues/131205) | Desktop shows "stream_drop" error card when user intentionally interrupts turn (Stop/new prompt) — false alarm. | [#131206](https://github.com/NousResearch/hermes-agent/pull/131206) ✅ |
| **P3** | [#131212](https://github.com/NousResearch/hermes-agent/pull/131212) | TTS sentence chunker cuts inside fenced code blocks (speaks code periods before closing fence). | [#131212](https://github.com/NousResearch/hermes-agent/pull/131212) ✅ |

---

## 6. Feature Requests & Roadmap Signals

| Feature | Source | Likelihood for Next Version | Rationale |
|---------|--------|-----------------------------|-----------|
| **Cross-gateway bot collaboration** | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681), [#131022](https://github.com/NousResearch/hermes-agent/pull/131022) | Medium (blocked on #106742) | Strategic priority; PR #131022 delivers document delivery to remote bots via Group Chat. |
| **Task-scoped approval (between `once` and `session`)** | [#96158](https://github.com/NousResearch/hermes-agent/issues/96158) | Medium | Reduces stacked approval cards for multi-step tasks; labeled `needs-decision`. |
| **Vision auto-detection for unknown models** | [#131208](https://github.com/NousResearch/hermes-agent/issues/131208), [#131209](https://github.com/NousResearch/hermes-agent/pull/131209) | High | Live probe detects vision support instead of defaulting to text path; PR ready. |
| **Subagent SOUL.md inheritance (opt-in)** | [#131211](https://github.com/NousResearch/hermes-agent/pull/131211) | High | `delegation.inherit_soul` config gives subagents user persona/constraints; low-risk opt-in. |
| **Kanban blocked-task actions & review handoff** | [#131203](https://github.com/NousResearch/hermes-agent/pull/131203), [#131207](https://github.com/NousResearch/hermes-agent/pull/131207) | High | Deterministic blocked-task contract + explicit review handoff for completed cards; PRs open. |
| **Gateway notify: separate first-ack from repeat interval** | [#131204](https://github.com/NousResearch/hermes-agent/pull/131204) | High | Splits `agent.gateway_notify_interval` into two knobs; closes #125887. |

---

## 7. User Feedback Summary

### Pain Points (from issue reports)
- **Windows install broken** (#131199): Fresh installs fail at Python deps — blocks onboarding.
- **Settings loss on desktop update** (#130635): Glass/tint/fade settings reset due to origin change (`file://` → `http://`) without localStorage migration.
- **Silent media drops** (#131200): Misreported MIME types (CAD as image) cause files to vanish with no user feedback.
- **False "stream dropped" alarms** (#131205): Intentional interruptions (Stop, new prompt) show error cards.
- **Update bricking** (#130836): Exact pins + rolling `exclude-newer` break `hermes update` post-release.
- **Launchd gateway invisible to CLI** (#124120): Service-managed gateways not detected for migration.

### Positive Signals
- Active PR engagement on research-backed features (CAVE-Bench, subagent failure disclosure).
- Desktop UX polish: right-click context menus fixed (#131215), turn interruption handling improved (#131206).
- TTS code-block awareness (#131212) shows attention to streaming quality.

---

## 8. Backlog Watch — Stale High-Impact Items

| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| [#16357](https://github.com/NousResearch/hermes-agent/issues/16357) *Subagent side-effect verification* | 5 months | Open, P2 | Delegation trust gap: subagents report success but deliver empty results. Structural mechanism needed beyond tool-description warning. |
| [#98307](https://github.com/NousResearch/hermes-agent/pull/98307) *Group Chat integration draft* | 1 month | Draft PR | Permanent integration draft composing all Group Chat layers; merge blocked on #97846, #98072. Critical path for multi-gateway. |
| [#104199](https://github.com/NousResearch/hermes-agent/pull/104199) *Desktop Group Chat file retrieval* | 3 weeks | Open | Desktop Files view for Group Chat; depends on #97846, #98072. User-visible feature. |
| [#59052](https://github.com/NousResearch/hermes-agent/issues/59052) *CORS preflight 401* | 3 months | Open, P2 | Dashboard auth middleware breaks cross-origin API calls; architectural fix needed (middleware ordering). |
| [#96158](https://github.com/NousResearch/hermes-agent/issues/96158) *Task-scoped approval* | 1 month | Open, P3 | UX gap between `once` and `session` approval; `needs-decision` for design. |

---

## Project Health Assessment

| Dimension | Signal |
|-----------|--------|
| **Velocity** | 🟢 High (64 updates/24h, 6 merges) |
| **Release Cadence** | 🟡 Stalled (no release today, v0.21.5 referenced) |
| **Bug Inflow vs Fix** | 🟢 Balanced (7 new bugs, 4+ with PRs) |
| **Platform Coverage** | 🟡 Windows install broken; macOS launchd issues |
| **Architectural Progress** | 🟢 Strong (Group Chat federation, delegation hardening, vision auto-detect) |
| **Community Engagement** | 🟢 High (30-comment strategic issue, research-driven PRs) |

**Bottom line**: Hermes Agent is in a **feature-heavy stabilization sprint** — desktop/platform bugs are being fixed rapidly, but Windows install regression and update bricking are user-facing blockers. Cross-gateway bot federation remains the flagship unreleased capability, gated on unified gateway runtime.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-10-02

## 1. Today's Overview
PicoClaw shows **high maintenance activity** with 14 PRs updated in the last 24 hours (12 open, 2 closed), but **zero new releases**. The project is in a bug-fix and dependency-update phase: 8 of the 14 PRs are dependency bumps (Dependabot), while the remaining 6 address critical runtime bugs (agent session routing, channel reload panics, config persistence, ARM32 updater). Two open issues highlight a **production-blocking TLS certificate expiry** (site down since 2026-09-10) and a UX regression in the Pico mobile client splitting multi-line pastes. No feature work merged today; the only new feature PR (#3414) adds an optional per-turn wall-clock budget.

## 2. Releases
**No new releases** published today or in the recent window. The project appears to be accumulating fixes on `main` without cutting a version.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Title | Impact |
|----|-------|--------|
| [#1544](https://github.com/sipeed/picoclaw/pull/1544) | **fix: merge PR #1514 #1513 #1512 #1510 #1509** | Bulk-merged five older fixes (author: xuwei-xy). No details in summary; likely backlog clearance. |
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | **fix(deltachat): initialize as custom channel to solve config validation error** | Resolves startup panic `channel "deltachat" has unknown type "deltachat"` (#3265). Registers Delta Chat as a custom channel type. |

**Net effect**: Two long-standing config/startup bugs closed; main branch now includes Delta Chat support and five unspecified fixes from March.

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [Issue #3377](https://github.com/sipeed/picoclaw/issues/3377) **CRITICAL: TLS cert expired 2026-09-10 — site down** | 3 comments, 2 👍, updated 2026-10-01 | **Immediate ops action**: renew/deploy cert for `picoclaw.io`. Blocks all web visitors, docs, onboarding. |
| [PR #3403](https://github.com/sipeed/picoclaw/pull/3403) **fix(agent): deliver async tool results to originating session** | 0 comments, updated 2026-10-01 | **Correctness**: async tool (`spawn`) results were routed to default agent session, causing cross-chat leakage. Critical for multi-user deployments. |
| [PR #3401](https://github.com/sipeed/picoclaw/pull/3401) **fix(channels): make Reload synchronous and nil-safe** | 0 comments, updated 2026-10-01 | **Stability**: nil-pointer panic on gateway reload when enabled channel fails readiness (e.g., Telegram without token). |
| [PR #3414](https://github.com/sipeed/picoclaw/pull/3414) **feat(agent): add wall-clock turn time budget** | 0 comments, created 2026-10-01 | **Operational control**: optional per-turn deadline (`turn_time_budget_seconds`) to prevent runaway agent loops. |

**Signal**: Community focus is on **production reliability** (cert, panics, session isolation) over new features.

## 5. Bugs & Stability (Reported/Active Today)
| Severity | Issue/PR | Description | Fix PR? |
|----------|----------|-------------|---------|
| **Critical (Site Down)** | [#3377](https://github.com/sipeed/picoclaw/issues/3377) | TLS cert expired 2026-09-10; `picoclaw.io` inaccessible in all browsers. | ❌ No PR (ops task) |
| **High (Data Leakage)** | [#3403](https://github.com/sipeed/picoclaw/pull/3403) | Async tool results delivered to wrong session (default agent), mixing user chats. | ✅ PR #3403 (open) |
| **High (Crash)** | [#3401](https://github.com/sipeed/picoclaw/pull/3401) | `Manager.Reload` panics on nil channel when enabled channel fails factory (e.g., missing token). | ✅ PR #3401 (open) |
| **Medium (Config Loss)** | [#3400](https://github.com/sipeed/picoclaw/pull/3400) | Multi-key model config save drops `Enabled` flag & extra keys; breaks on every auto-migration save. | ✅ PR #3400 (open) |
| **Medium (Wrong Binary)** | [#3399](https://github.com/sipeed/picoclaw/pull/3399) | `picoclaw update` on 32-bit ARM installs arm64 binary (substring match bug). | ✅ PR #3399 (open) |
| **Low (UX)** | [#3391](https://github.com/sipeed/picoclaw/issues/3391) | Pico mobile TUI splits multi-line paste into separate messages. | ❌ No PR yet |

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Per-turn wall-clock budget** (`turn_time_budget_seconds`) | [PR #3414](https://github.com/sipeed/picoclaw/pull/3414) (new, 2026-10-01) | **High** — small, self-contained, addresses runaway agent cost/latency. |
| **OpenCode Go provider with session header** | [PR #3371](https://github.com/sipeed/picoclaw/pull/3371) (stale, 2026-09-08) | **Medium** — provider integration, but stale; needs rebase/review. |
| **Delta Chat channel support** | [PR #3376](https://github.com/sipeed/picoclaw/pull/3376) (merged today) | **Done** — shipped in today's merge. |
| **Multi-line paste preservation in Pico client** | [Issue #3391](https://github.com/sipeed/picoclaw/issues/3391) | **Medium** — UX polish; no PR yet, but clear reproduction steps. |

**Prediction**: Next release will likely bundle the 6 open bug-fix PRs (#3400–3403, #3399, #3401) + #3414 feature. Dependency PRs (#3385–#3389) may be batched or held for CI validation.

## 7. User Feedback Summary
- **Pain**: **Site completely down** for 22+ days (cert expiry) — blocks new users, docs access, trust.  
- **Pain**: **Mobile TUI unusable for code/poetry pastes** — splits lines into spammy messages.  
- **Pain**: **Gateway crashes on reload** if any channel misconfigured (e.g., Telegram enabled pre-token).  
- **Pain**: **Multi-key model config silently corrupted** on every save/migration.  
- **Positive**: Delta Chat channel now works (merged fix).  
- **Ask**: Turn-level timeout budget to control agent cost/latency (PR #3414).

## 8. Backlog Watch (Stale / Needs Maintainer Attention)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [Issue #3377](https://github.com/sipeed/picoclaw/issues/3377) **TLS cert expiry** | 20 days (created 2026-09-12) | **Highest priority** — public face of project down. Requires infra access, not code. |
| [PR #3371](https://github.com/sipeed/picoclaw/pull/3371) **OpenCode Go provider** | 24 days (created 2026-09-08) | New provider integration; stalled "stale" label. May need rebase + review. |
| [PR #3385–#3389](https://github.com/sipeed/picoclaw/pull/3385) **5 Dependabot bumps** | 8 days (created 2026-09-24) | Crypto, MCP SDK, Anthropic SDK, Mautrix, LINE SDK. Low risk but need CI pass. |
| [Issue #3391](https://github.com/sipeed/picoclaw/issues/3391) **Multi-line paste split** | 8 days (created 2026-09-24) | Clear bug, good reproduction, no PR. Good "good first issue" candidate. |

---

**Health Score**: 🟡 **Caution** — Active development on correctness/stability, but **critical infrastructure issue (TLS) unresolved for 3 weeks** and no release cadence. Recommend: (1) renew cert immediately, (2) merge/open the 6 bug-fix PRs, (3) cut a patch release.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-10-02

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 15 PRs merged/closed and 11 still open in the last 24 hours, but **no new releases** published. The project is actively hardening security (credential handling, dependency pins, CI supply-chain), fixing stability regressions (update logic, logging, agent-runner message handling), and addressing a critical Discord approval-card breakage. Four new issues were filed today—two bugs, one feature request, and one hook failure—indicating ongoing friction in the update/install path and Discord integration. Overall health: **active development, stable core, but user-facing bugs accumulating in channels and CLI tooling**.

---

## 2. Releases
**No new releases today.** The latest published version remains **2.4.0** (commit `d249c0fb`). Several merged PRs (#3986, #3988, #3987) modify the update/release pipeline, suggesting a **2.4.1 or 2.5.0** cut is imminent.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#3982](https://github.com/nanocoai/nanoclaw/pull/3982) | Pin Iron Proxy to v0.52.0 | skills, security | Clears 30 dependency advisories; supply-chain hardening |
| [#3981](https://github.com/nanocoai/nanoclaw/pull/3981) | Bump grpc to 1.83.2 in Iron front-proxy | skills, security | Fixes 6 CVEs in gRPC before Dependabot enablement |
| [#3979](https://github.com/nanocoai/nanoclaw/pull/3979) | Make OneCLI unsafe-directory test umask-independent | skills, test | Fixes flaky test on restrictive umask (077) |
| [#3977](https://github.com/nanocoai/nanoclaw/pull/3977) | Bump tsx to 4.23 (Node 26 `module.register` warning) | repo-maintenance | Eliminates stderr noise on every `ncl` run |
| [#3968](https://github.com/nanocoai/nanoclaw/pull/3968) | Pin all GitHub Actions & cosign to exact SHAs | CI, security | Supply-chain integrity; prevents tag-mutation attacks |
| [#3963](https://github.com/nanocoai/nanoclaw/pull/3963) | Fix update e2e test symlink handling on Node 24 | setup-installation, test | Unblocks `/update-nanoclaw` validation on Node 24.x |
| [#3901](https://github.com/nanocoai/nanoclaw/pull/3901) | Allow host service to reach internet via HTTPS proxy | setup-installation, skills | Enables corporate/proxied installs; credentials no longer leaked to service files (follow-up #3985) |
| [#3208](https://github.com/nanocoai/nanoclaw/pull/3208) | Publish agent image to Docker Hub with CVE gates | CI, containers | Automated multi-arch image publishing + vulnerability gate |

**Net effect**: Security posture significantly improved (pinned deps, CVE gates, proxy credential hygiene), CI hardened, and several flaky tests stabilized. User-facing fixes for update logic and proxy support are staged but not yet released.

---

## 4. Community Hot Topics

| Item | Type | Comments | Signal |
|------|------|----------|--------|
| [#3456](https://github.com/nanocoai/nanoclaw/issues/3456) | **Issue** | 6 | **Critical Discord UX breakage** — every approval click resolves to wrong option; “silent-reject + duplicate resend”. High severity, open since Aug 23, no fix PR yet. |
| [#3833](https://github.com/nanocoai/nanoclaw/pull/3833) | **PR** | (activity) | **Approval-card TTL & reject-by-id** — addresses stale pending approvals; open since Sep 16, still under review. |
| [#3570](https://github.com/nanocoai/nanoclaw/pull/3570) | **PR** | (activity) | **Telegram URL delivery fix** — odd underscore counts break MarkdownV2; blocks OneCLI connect links. Open since Aug 27. |
| [#3991](https://github.com/nanocoai/nanoclaw/issues/3991) | **Issue** | 0 (new) | **OneCLI pagination default** — `list` commands silently truncate at 20 rows; users unaware unless `--max` passed. Filed today. |
| [#3990](https://github.com/nanocoai/nanoclaw/issues/3990) | **Issue** | 0 (new) | **Security-audit skill request** — read-only check of live install isolation/patch state; reflects operator demand for compliance tooling. |

**Underlying needs**:  
- **Discord & Telegram channel reliability** — core chat UX broken for approvals and link delivery.  
- **Operator visibility** — pagination defaults hide data; no built-in audit surface for isolation drift.  
- **Approval lifecycle** — cards hang forever; no expiry or programmatic rejection.

---

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **Critical** | [#3456](https://github.com/nanocoai/nanoclaw/issues/3456) Discord approval cards corrupt `custom_id` → wrong option selected, silent reject, duplicate resend | Open | No |
| **High** | [#3984](https://github.com/nanocoai/nanoclaw/issues/3984) PreCompact hook crashes: `getAllDestinations()` called without registered mailbox | Open | No |
| **Medium** | [#3991](https://github.com/nanocoai/nanoclaw/issues/3991) OneCLI `list` commands silently cap at 20 rows | Open (filed today) | No |
| **Medium** | [#3570](https://github.com/nanocoai/nanoclaw/pull/3570) Telegram drops messages with odd underscore counts (OneCLI links) | PR open | Yes (#3570) |
| **Low** | [#3980](https://github.com/nanocoai/nanoclaw/pull/3980) Setup first-chat ping misclassifies “run failed” notice as success | PR open | Yes (#3980) |
| **Low** | [#3983](https://github.com/nanocoai/nanoclaw/pull/3983) Logger loses nested `toJSON` redaction on BigInt/cycle | PR open | Yes (#3983) |

**Note**: #3456 (Discord) and #3984 (compact hook) are **user-visible crashes/breakage** with no fix in flight. Prioritize these for next patch.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Release |
|---------|--------|-----------------------------|
| **Security-audit skill** — read-only isolation/patch check | [#3990](https://github.com/nanocoai/nanoclaw/issues/3990) (new) | Medium — aligns with hardening trend; skill-based, low risk |
| **Approval card TTL + reject-by-id** | [#3833](https://github.com/nanocoai/nanoclaw/pull/3833) (PR open) | High — PR exists, addresses operational pain |
| **Update channels (stable/beta/rc)** | [#3986](https://github.com/nanocoai/nanoclaw/pull/3986) (PR open) | High — merged-adjacent, changes default update behavior |
| **Gateway refresh on skill-payload change** | [#3988](https://github.com/nanocoai/nanoclaw/pull/3988) (PR open) | High — fixes stale gateway after skill-only updates |
| **Self-approved RC pre-releases** | [#3987](https://github.com/nanocoai/nanoclaw/pull/3987) (PR open) | Medium — release-process improvement |
| **Dependabot for GitHub Actions** | [#3978](https://github.com/nanocoai/nanoclaw/pull/3978) (PR open) | High — replaces inert Renovate; supply-chain hygiene |

**Prediction**: Next version (likely **2.4.1**) will ship update-channel logic (#3986), gateway refresh fix (#3988), approval TTL (#3833), and the security-audit skill may land as a follow-up skill PR.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Discord approvals unusable** | #3456: “every click resolves to wrong option”, “silent-reject + duplicate resend” | Single report, high severity, 6 comments (active discussion) |
| **OneCLI list truncation surprise** | #3991: “output gives no sign that there are more rows” | New today; affects all `list` subcommands |
| **Telegram link delivery broken** | #3570: “OneCLI connect links never arrive on Telegram” | Known since Aug, PR stalled |
| **Proxy credentials leaked to world-readable service files** | #3985 (fix PR) — confirmed by user report in #3901 | Fixed in PR, not released |
| **Update wizard false success on bad key** | #3980: “agent run failed… treated as ok” | Fix PR open |
| **Compact hook crashes on every compaction** | #3984: “exits with: No agent mailbox registered” | New, blocks compaction |

**Sentiment**: Frustration around **channel reliability (Discord/Telegram)** and **silent CLI defaults** (pagination, update channel). Positive signal on **security hardening** and **proxy support** — users notice and value supply-chain work.

---

## 8. Backlog Watch — Stale High-Impact Items

| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#3456](https://github.com/nanocoai/nanoclaw/issues/3456) Discord `value` param corrupts approval `custom_id` | 40 days | Breaks core approval flow on Discord; high severity, no fix PR | Assign owner; minimal fix: drop redundant `value` in button builder |
| [#3570](https://github.com/nanocoai/nanoclaw/pull/3570) Telegram underscore-count URL drop | 36 days | Blocks OneCLI connect links on Telegram; PR ready but stale | Review/merge; bump chat adapters to 4.38.1 |
| [#3833](https://github.com/nanocoai/nanoclaw/pull/3833) Approval TTL & reject-by-id | 16 days | Operational must-have; prevents stuck agents | Review; merge to unblock approval lifecycle |
| [#1343](https://github.com/nanocoai/nanoclaw/pull/1343) `/add-cli-backend` skill (Claude CLI vs SDK) | 194 days | Addresses TOS violation with subscription tokens; community skill | Long-stalled; needs core-team decision on SDK vs CLI strategy |
| [#3984](https://github.com/nanocoai/nanoclaw/issues/3984) PreCompact hook mailbox crash | 1 day | Blocks compaction entirely; new regression | Urgent fix — guard `getAllDestinations()` or ensure mailbox registration |

---

## Quick Links
- **All issues updated today**: [GitHub Issues](https://github.com/nanocoai/nanoclaw/issues?q=updated%3A2026-10-02)
- **All PRs updated today**: [GitHub PRs](https://github.com/nanocoai/nanoclaw/pulls?q=updated%3A2026-10-02)
- **Security hardening tracker**: #3982, #3981, #3968, #3978
- **Update/release pipeline**: #3986, #3988, #3987

---

*Digest generated from GitHub API data as of 2026-10-02 00:00 UTC. Next digest: 2026-10-03.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-10-02

## 1. Today's Overview
IronClaw shows low but focused activity over the last 24 hours: two issues updated (both open) and one open pull request updated. No releases were published. The work centers on browser-session persistence (encrypted tarball storage for Chromium user-data directories), a daily benchmark failure taxonomy highlighting a recurring workspace-seeding defect, and a large documentation/dependencies PR introducing a host-mediated IdentyClaw Passport integration for processless agents. Overall project health appears stable with incremental feature work and continuous benchmark monitoring.

## 2. Releases
No new releases in the last 24 hours.

## 3. Project Progress
No PRs were merged or closed today. The single active PR (#7499) remains open and was last updated 2026-10-01; it adds a host seam (`builtin.idcp` + policy grant/AskAlways exemption) and a practitioner host kit under `deploy/identyclaw/` for IdentyClaw Passport integration. This PR is labeled `size: XL`, `risk: low`, and `contributor: new`, indicating a substantial but low-risk documentation and dependency update from a first-time contributor.

## 4. Community Hot Topics
| Item | Type | Activity | Link |
|------|------|----------|------|
| #2358 | Issue (enhancement) | 1 comment, 0 👍 | [nearai/ironclaw#2358](https://github.com/nearai/ironclaw/issues/2358) |
| #7499 | Pull Request | Comments: undefined, 0 👍 | [nearai/ironclaw#7499](https://github.com/nearai/ironclaw/pull/7499) |
| #8121 | Issue (benchmark taxonomy) | 0 comments, 0 👍 | [nearai/ironclaw#8121](https://github.com/nearai/ironclaw/issues/8121) |

**Analysis**: The browser-profile persistence issue (#2358) addresses a core UX pain point—re-authentication across agent runs—and has a parent tracking issue (#2355), suggesting it is part of a planned epic. The daily failure taxonomy (#8121) is an automated or recurring report; its zero comments indicate it serves as a visibility tool rather than a discussion thread. The IdentyClaw Passport PR (#7499) is the largest open change and may attract review attention once maintainers cycle through the XL-sized diff.

## 5. Bugs & Stability
No new bug reports or crash issues were filed or updated in the last 24 hours. The failure taxonomy (#8121) notes 128 non-passing tests in the `clawbench` suite, dominated by a **benchmark-side broken-workspace-seeding defect** (recurring). This is classified as a benchmark infrastructure issue rather than an IronClaw regression, but it blocks reliable CI signal. No fix PR is linked in the issue.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| Encrypted tarball persistence for browser profiles (cookies, localStorage, IndexedDB, service workers) | #2358 (enhancement, parent #2355) | High — explicit parent epic, security-sensitive, directly improves agent continuity |
| Host-mediated IdentyClaw Passport (`builtin.idcp` + policy grant, practitioner host kit) | #7499 (PR, XL, new contributor) | Medium — large PR, low risk, but depends on review bandwidth; extends identity integration without shell/extension |
| Benchmark workspace-seeding reliability | #8121 (taxonomy) | Medium — recurring defect, may spawn a dedicated fix PR if it continues to dominate non-passes |

## 7. User Feedback Summary
No direct user feedback (support requests, satisfaction comments, or use-case reports) appears in the last 24 hours. The two issues reflect **internal engineering priorities** (session persistence, benchmark health) and a **contributor-driven feature** (IdentyClaw host integration). The absence of end-user issues suggests either stable core functionality or feedback captured elsewhere.

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| #2358 — BrowserProfileStore trait with encrypted tarball persistence | Created 2026-04-12 (~6 months) | Open, 1 comment | Long-standing enhancement tied to parent epic #2355; security-sensitive (bearer tokens), large data (50-200 MB); likely blocked on design review or crypto implementation |
| #7499 — IdentyClaw host-mediated Passport | Created 2026-08-11 (~2 months) | Open, XL, new contributor | Large PR awaiting review; adds new host seam and deploy kit; low risk but high review surface; contributor is new, may need mentorship |
| #8121 — Daily failure taxonomy (workspace-seeding defect) | Created 2026-10-01 (1 day) | Open, 0 comments | Recurring benchmark defect masking real signal; should be triaged to benchmark team or converted to a fix PR |

---
*Data sourced from GitHub API for nearai/ironclaw; covers activity updated 2026-10-01 → 2026-10-02.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-10-02

## 1. Today's Overview
LobsterAI shows **zero new releases** and **no open pull requests** in the last 24 hours. All activity consists of **7 stale issues** (created in March 2026, last updated 2026-10-01) and **7 merged/closed PRs** (also from March 2026, closed 2026-10-01). The project appears to be in a **maintenance/cleanup phase**—maintainers are closing out a backlog of older PRs while long-standing issues remain unresolved. No fresh feature work or bug reports emerged today.

## 2. Releases
**No new releases** published in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs (7 total)

| PR | Area | Summary | Link |
|----|------|---------|------|
| #2709 | docs, main, openclaw | Windows SQLite staging fallback when PowerShell `Add-Type` is blocked by security software / Constrained Language Mode | [#2709](https://github.com/netease-youdao/LobsterAI/pull/2709) |
| #2788 | renderer, main | Auth: reload public pricing catalog on signed-out paths; show login prompt in model selector instead of empty state | [#2788](https://github.com/netease-youdao/LobsterAI/pull/2788) |
| #915 | sidebar, UI | Sidebar collapse transition animation restored; macOS warning banner text clipping fixed | [#915](https://github.com/netease-youdao/LobsterAI/pull/915) |
| #917 | cowork, openclaw | Restore sandbox execution mode from UI to OpenClaw config (was hardcoded to `local`) | [#917](https://github.com/netease-youdao/LobsterAI/pull/917) |
| #920 | build, perf | Enable esbuild minification for production builds (was disabled on all three Vite targets) | [#920](https://github.com/netease-youdao/LobsterAI/pull/920) |
| #921 | openclaw, plugin | Add local plugin install support for OpenClaw (previously only public repo or `openclaw-extensions` source) | [#921](https://github.com/netease-youdao/LobsterAI/pull/921) |
| #941 | cowork, refactor | Remove dead `yd_cowork` engine (Claude Agent SDK) — 3 files, 3100+ lines; narrow `CoworkAgentEngine` to `'openclaw'` only | [#941](https://github.com/netease-youdao/LobsterAI/pull/941) |

**Key takeaway:** The merged PRs address **Windows compatibility**, **auth/UX polish**, **build performance**, **plugin extensibility**, and **technical debt removal** (deleting the unused Claude Agent SDK integration). This batch suggests a focused effort to unblock Windows users, shrink bundle size, and simplify the cowork engine surface.

## 4. Community Hot Topics
All 7 issues carry the `[stale]` label and have **1 comment each**, **0 reactions** — indicating low recent engagement. The most technically substantive issues:

| Issue | Topic | Underlying Need |
|-------|-------|-----------------|
| [#922](https://github.com/netease-youdao/LobsterAI/issues/922) | Anthropic SSE streaming parser lacks line buffering → data loss under high throughput / network congestion | **Reliability**: Streaming parity with OpenAI path; prevent silent token loss |
| [#926](https://github.com/netease-youdao/LobsterAI/issues/926) | `destroy()` calls non-existent `reject` → crash on app exit / IM handler rebuild / gateway reconnect | **Stability**: Crash loop during shutdown/reconnection; resource cleanup interruption |
| [#943](https://github.com/netease-youdao/LobsterAI/issues/943) | Model priority / fallback when a model becomes unavailable | **Resilience**: Automatic failover to improve uptime; priority ordering in UI |
| [#918](https://github.com/netease-youdao/LobsterAI/issues/918) | `openclaw doctor` auto-adds unknown `openclaw-weixin` channel (plugin version mismatch) | **Plugin hygiene**: Version compatibility checks; prevent phantom config injection |

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#926](https://github.com/netease-youdao/LobsterAI/issues/926) | `accumulator.reject` missing optional chaining → `TypeError` on every app exit, IM handler rebuild, gateway reconnect. Blocks clean shutdown. | ❌ No PR linked |
| **High** | [#922](https://github.com/netease-youdao/LobsterAI/issues/922) | Anthropic SSE parser splits chunks without buffering → `JSON.parse` fails silently → streamed text fragments lost under load. | ❌ No PR linked |
| **Medium** | [#918](https://github.com/netease-youdao/LobsterAI/issues/918) | `openclaw doctor` injects `openclaw-weixin` with unknown channel ID (plugin/runtime version skew). | ❌ No PR linked |
| **Medium** | [#928](https://github.com/netease-youdao/LobsterAI/issues/928) | Login component fails on employee login flow at `c.youdao.com/dict/hardware/octopus/lobsterai-portal.html#/login` | ❌ No PR linked |
| **Low** | [#927](https://github.com/netease-youdao/LobsterAI/issues/927) | Model/provider/IM bot dropdowns lack keyboard arrow navigation | ❌ No PR linked |
| **Low** | [#925](https://github.com/netease-youdao/LobsterAI/issues/925) | No documented security reporting channel | ❌ No PR linked |

**Note:** Despite 7 PRs merged today, **none address the two critical/high-severity bugs** (#926, #922). These remain open and unassigned.

## 6. Feature Requests & Roadmap Signals

| Request | Issue | Likelihood for Next Version |
|---------|-------|----------------------------|
| Model priority/fallback with drag-to-reorder UI | [#943](https://github.com/netease-youdao/LobsterAI/issues/943) | **High** — detailed spec + mockup provided; aligns with merged auth catalog reload (#2788) |
| Keyboard navigation for dropdowns (models, providers, IM bots) | [#927](https://github.com/netease-youdao/LobsterAI/issues/927) | **Medium** — low-effort UX polish; matches sidebar animation fix (#915) |
| Security vulnerability reporting channel | [#925](https://github.com/netease-youdao/LobsterAI/issues/925) | **Medium** — process/documentation only; no code change needed |
| Local OpenClaw plugin installation | [#921](https://github.com/netease-youdao/LobsterAI/pull/921) | **Done** — merged today; enables private plugin repos |

## 7. User Feedback Summary
- **Pain points:** Crashes on shutdown/reconnect (#926), silent data loss in Anthropic streams (#922), login flow breakage (#928), phantom Weixin plugin injection (#918).
- **Use cases:** Teams relying on IM gateway reliability (cowork), Windows users with strict security policies, plugin developers needing local installs.
- **Sentiment:** Issues are **stale (6+ months old)** with minimal maintainer interaction (1 comment each, no reactions). Users reporting critical bugs have received acknowledgment but no fixes. The merged PRs show maintainers *are* active but prioritizing different work (Windows compat, build perf, debt removal).

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#926](https://github.com/netease-youdao/LobsterAI/issues/926) `destroy()` crash | 6+ months | **Crash on every shutdown/reconnect** — blocks reliable deployment; trivial fix (`?.reject`) |
| [#922](https://github.com/netease-youdao/LobsterAI/issues/922) Anthropic SSE buffering | 6+ months | **Silent data loss** in production streaming; parity fix exists in OpenAI path |
| [#928](https://github.com/netease-youdao/LobsterAI/issues/928) Login component failure | 6+ months | **Blocks employee authentication** — core auth path broken |
| [#943](https://github.com/netease-youdao/LobsterAI/issues/943) Model fallback priority | 6+ months | **High-value resilience feature** with detailed design; no movement |
| [#925](https://github.com/netease-youdao/LobsterAI/issues/925) Security reporting channel | 6+ months | **Process gap** — no secure disclosure path for a product handling user data |

---

**Bottom line:** LobsterAI is clearing technical debt (dead code removal, minification, Windows compat) but **critical runtime bugs from March remain unfixed**. The next release should prioritize #926 and #922 to restore stability, then #943 for resilience. The merged local-plugin support (#921) and auth catalog reload (#2788) are positive incremental improvements.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis Project Digest — 2026-10-02

## 1. Today's Overview
Moltis shows **low external contribution activity** over the past 24 hours: zero issue updates, zero merged or closed PRs, and no new releases. Two pull requests were opened by core maintainer **Harbor404**, both targeting correctness and reliability fixes — one for TLS ALPN negotiation (PR #1291) and one for MCP server startup/session recovery (PR #1290). The project appears to be in a **maintenance and stabilization phase**, with maintainers addressing edge cases in protocol handling rather than shipping new features. No community discussions or bug reports surfaced today.

## 2. Releases
**No new releases** published today. The latest release remains prior to 2026-10-01.

## 3. Project Progress
**No PRs were merged or closed today.** Both open PRs (#1291, #1290) are in early review and represent targeted fixes:
- **#1291** restricts TLS ALPN to `http/1.1` to prevent premature HTTP/2 negotiation that breaks WebSocket upgrades (Moltis lacks RFC 8441 extended CONNECT support).
- **#1290** improves MCP server resilience by tracking failed startups as `dead` (retryable) and treating `404` responses with `Mcp-Session-Id` as lost sessions, triggering reconnection with exponential backoff (max 5 attempts).

## 4. Community Hot Topics
**No community-driven issues or PRs with comments/reactions today.** Both active PRs are authored by a maintainer (Harbor404) and have **0 comments, 0 reactions**. This indicates internal maintenance work rather than community-driven discussion.  
→ *Underlying need*: Protocol correctness (TLS/HTTP/2 interoperability) and MCP protocol robustness (session lifecycle, retry semantics).

## 5. Bugs & Stability
**No new bug reports or crashes filed today.** The two open PRs address **pre-existing correctness gaps**:
| PR | Area | Severity | Fix Status |
|----|------|----------|------------|
| [#1291](https://github.com/moltis-org/moltis/pull/1291) | TLS/HTTP/2 ALPN → WebSocket upgrade failure (405) | **High** (breaks WebSocket over TLS) | Open — fix proposed |
| [#1290](https://github.com/moltis-org/moltis/pull/1290) | MCP server startup failure & session expiry handling | **Medium** (affects MCP reliability) | Open — fix proposed |

No regressions reported.

## 6. Feature Requests & Roadmap Signals
**No new feature requests today.** The two PRs signal near-term roadmap priorities:
1. **HTTP/2 & WebSocket support** — PR #1291 is a stopgap (disable h2); full HTTP/2 + RFC 8441 implementation likely needed later.
2. **MCP protocol hardening** — PR #1290 adds retry/backoff for startup failures and session loss detection; suggests ongoing investment in MCP as a first-class integration target.

*Prediction*: Next version may include these fixes plus potential HTTP/2 groundwork or MCP spec alignment.

## 7. User Feedback Summary
**No direct user feedback (issues, discussions, support threads) captured in last 24h.** The absence of external reports suggests either:
- Stable current usage with no blocking issues, or
- Low community visibility / reporting friction.

Pain points inferred from PRs:
- WebSocket over TLS fails silently (405) due to unwanted h2 negotiation.
- MCP servers that crash on startup or lose sessions require manual intervention.

## 8. Backlog Watch
**No long-unanswered issues or PRs in today’s data.** However, the two open PRs (#1291, #1290) are **fresh (created 2026-10-01)** and have **zero review activity** — they need maintainer attention for review, testing, and merge to avoid stalling.  
→ *Action*: Prioritize review of both PRs; they address concrete correctness bugs with clear fixes.

---

*Data source: GitHub API (moltis-org/moltis), 2026-10-02 00:00 UTC — 2026-10-02 23:59 UTC*  
*Digest generated by AI analyst • [View repo](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-10-02

## 1. Today's Overview
CoPaw shows **high maintenance velocity** with 17 total issue/PR updates in the last 24 hours (10 issues, 7 PRs). The project is in active beta (v2.2.2b4) with no stable release today. Activity clusters around **provider compatibility fixes** (DeepSeek, OpenAI gpt-6, Codex SDK), **UI/UX polish** (CJK markdown rendering, user message markdown, conversation page regression), and **core architecture** (background task notification, reload handling, Advisor Mode). Two PRs were closed/merged today — both provider/formatter fixes — indicating rapid triage of regression bugs. Community engagement remains developer-driven (AI-assisted issue authoring visible in #8078).

## 2. Releases
**No new releases today.** Current latest appears to be v2.2.2b4 (beta). Users on v2.2.1 report a regression blocking LAN access to conversation page (#8073).

## 3. Project Progress — Merged/Closed PRs Today
| PR | Title | Type | Impact |
|----|-------|------|--------|
| [#8069](https://github.com/agentscope-ai/QwenPaw/pull/8069) | `fix(agents): restrict deepseek formatters to image media` | Bug fix (closed) | Stops DeepSeek API 400 errors when PDF/audio blocks sent; duplicates #8070 |
| [#8068](https://github.com/agentscope-ai/QwenPaw/pull/8068) | `fix(console): repair CJK emphasis boundaries in chat Markdown` | Bug fix (closed) | Fixes markdown bold/italic breaking on CJK punctuation (e.g., `**没有改动任何设置。**`) |

**Open PRs advancing features:**
- [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063) — Wake parent session on background task completion (first-time contributor)
- [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) — **Advisor Mode** (XXXL): dual-model loop (advisor + worker) with opening plan, checkpointing, cost controls
- [#8072](https://github.com/agentscope-ai/QwenPaw/pull/8072) — E2E test isolation (XL): fixes flaky CI by seeding/restoring fixtures
- [#8070](https://github.com/agentscope-ai/QwenPaw/pull/8070) — DeepSeek formatter restriction (duplicate of merged #8069)
- [#8067](https://github.com/agentscope-ai/QwenPaw/pull/8067) — CJK emphasis boundaries at channel level (complements #8068)

## 4. Community Hot Topics
| Issue/PR | Comments | Core Need |
|----------|----------|-----------|
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | 6 | **Message editing/retraction + workspace rollback** — users want Git-like "amend" for chat: edit prior message, truncate downstream history, optionally revert file snapshots. High UX value for iterative coding. |
| [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) | 4 | **User-message markdown rendering** — parity with AI response rendering; critical for code snippets, structured input. Open since Apr 2026. |
| [#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078) | 2 | **Cross-session message splitting** — `chat_with_agent` calls create separate UI sessions, fragmenting single logical conversation. Core backend/frontend sync bug. |
| [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) | 2 | **DeepSeek PDF upload breaks session permanently** — `send_file_to_user` with PDF poisons context; all subsequent requests 400. Provider-specific formatter gap. |
| [#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077) | 1 | **Qoder third-party agent: custom models invisible + context meter hidden** — 3 defects in harnesses/UI; blocks BYOM (bring your own model) for Qoder users. |

**Pattern:** Users hit **provider edge cases** (DeepSeek, OpenAI gpt-6, Codex, Qoder) and **chat UX gaps** (markdown, history editing, session integrity) — signs of rapid multi-provider expansion outpacing normalization layer.

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) | DeepSeek + PDF → permanent session break (400 `file must have file_id or file_data` on all subsequent requests) | Yes: [#8069](https://github.com/agentscope-ai/QwenPaw/pull/8069) merged, [#8070](https://github.com/agentscope-ai/QwenPaw/pull/8070) open |
| **High** | [#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078) | `chat_with_agent` splits single session into multiple UI pages — conversation history fragmented | No |
| **High** | [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | v2.2.2b4: LAN devices cannot open conversation page (works locally) — regression from v2.2.1 | No |
| **High** | [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) | OpenAI provider: connection test fails for `gpt-6*` models — `_uses_max_completion_tokens` regex only matches `gpt-5*`/`o<digit>*` | No |
| **Medium** | [#8076](https://github.com/agentscope-ai/QwenPaw/issues/8076) | Reload: 24h drain timeout abandons in-flight turns silently — no room notification, no cancellation | No |
| **Medium** | [#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077) | Qoder agent: custom models unusable (harness drops `backend`), context meter hidden | No |
| **Low** | [#8075](https://github.com/agentscope-ai/QwenPaw/issues/8075) | Bundled Codex SDK pinned to 0.144.4 — misses new models (gpt-5.6-*, gpt-5.5) | No (dependency bump) |

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Message edit/retract + workspace rollback** | [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) (6 comments) | **High** — strong UX demand, aligns with "Advisor Mode" checkpointing in [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) |
| **User-message markdown rendering** | [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) (4 comments, 6mo old) | **Medium** — parity feature; blocked by markdown pipeline shared with AI responses |
| **Advisor Mode (dual-model loop)** | [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) (XXXL PR, open since Sep 5) | **High** — large feature near completion; adds cost/quality tradeoff knob |
| **Plugin theme extension (semantic tokens)** | [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) | **Medium** — extends #7741 theme system; plugin ecosystem maturing |
| **Background task completion notification** | [#8063](https://github.com/agentscope-ai/QwenPaw/pull/8063) | **High** — first-time contributor PR; fixes silent background task completion |

**Roadmap inference:** Next release (likely v2.2.2 stable) will prioritize **provider stability** (DeepSeek, OpenAI gpt-6, Codex SDK), **session integrity** (LAN access, cross-session split), and **Advisor Mode** merge. Message editing (#7997) may slip to v2.3.

## 7. User Feedback Summary
| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **Session fragmentation** | #8078: "`chat_with_agent` registered as independent chat" | Breaks mental model of single conversation; forces manual context stitching |
| **Silent failures** | #8076: 24h drain timeout "abandoned silently"; #8063: background tasks "complete silently" | No visibility into async operations; debuggability loss |
| **Provider-specific breakage** | #8064 (DeepSeek+PDF), #8074 (OpenAI gpt-6), #8077 (Qoder custom models) | BYOM workflows unreliable; each provider needs bespoke fixes |
| **Markdown asymmetry** | #2975: user messages plain-text only; #8067/#8068: CJK emphasis broken | Authoring friction for code/docs; rendering bugs in CJK locales |
| **LAN regression** | #8073: v2.2.2b4 breaks remote conversation page access | Blocks team/remote usage; rollback to v2.2.1 required |

**Satisfaction signal:** Users file detailed, reproducible bugs (often with AI-assisted authoring) — indicates **invested user base** but **friction in multi-provider/chat UX paths**.

## 8. Backlog Watch — Stale/Needing Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) — User message markdown | 179 days | High comment count (4), basic parity feature; blocked by shared markdown pipeline |
| [#7569](https://github.com/agentscope-ai/QwenPaw/pull/7569) — Advisor Mode | 27 days | XXXL PR; architectural addition; needs review bandwidth |
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) — Message edit/rollback | 5 days | 6 comments; high UX value; may require snapshot/storage changes |
| [#8076](https://github.com/agentscope-ai/QwenPaw/issues/8076) — Reload drain timeout | 1 day | Silent 24h abandonment; reliability risk for long-running agents |
| [#8071](https://github.com/agentscope-ai/QwenPaw/issues/8071) — Plugin theme tokens | 1 day | Extensibility gap; plugin authors limited to single color knob |

---

**Project Health Indicator:** 🟡 **Active but accumulating provider-specific debt** — rapid multi-provider expansion (DeepSeek, OpenAI gpt-6, Codex, Qoder) creates formatter/normalization gaps. Core chat UX (markdown, history, session integrity) has known regressions. **Advisor Mode** and **background task notification** are positive velocity signals. Recommend: stabilize v2.2.2 with provider fixes + LAN regression before merging Advisor Mode.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-10-02

## 1. Today's Overview
ZeroClaw showed **intense development activity** with **50 open pull requests updated** in the last 24 hours, but **zero merged/closed PRs, zero issues, and zero new releases**. The entire PR queue appears to be in active review or staging—most are stacked dependencies targeting the upcoming **v0.8.6 release**. Work is heavily concentrated on the **WASM plugin subsystem** (host runtime, channel health, webhook ingress, artifact shipping), **authorization/session integrity**, and **gateway↔core RPC plumbing**. No community-reported issues or user feedback surfaced today; the project is in a pre-release hardening phase driven by maintainers.

## 2. Releases
**No new releases published today.** The `release:v0.8.6` label on 6+ PRs indicates a release cut is imminent once the stacked plugin/RPC work lands.

## 3. Project Progress (Merged/Closed Today)
**None.** All 50 PRs remain open. The velocity is in *preparation*, not *delivery*—maintainers are stacking dependent changes (e.g., #11319 → #11320 → #11322; #11348 → #11356; #11311 → #11347) and gating them behind `release-gate` CI.

## 4. Community Hot Topics
| PR | Title | Labels | Why It Matters |
|----|-------|--------|----------------|
| [#11219](https://github.com/zeroclaw-labs/zeroclaw/pull/11219) | `fix(zerocode): start fresh local sessions in the launch directory` | `bug, docs, zerocode, release:v0.8.6` | Restores expected `cwd` behavior for local ZeroCode sessions—user-facing UX fix. |
| [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | `feat(release): ship the WASM plugin host in supported release artifacts` | `ci, release-gate, release:v0.8.6` | **Blocker for v0.8.6**: ensures distributed binaries include the WASM plugin runtime. |
| [#11322](https://github.com/zeroclaw-labs/zeroclaw/pull/11322) | `feat(gateway): forward plugin webhooks to the core over RPC` | `core, gateway, runtime, risk:high, size:XL` | Core integration for plugin webhooks—depends on #11320/#11186; high risk, large scope. |
| [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | `fix(cli): publish authorization edits from config set/patch into the running daemon` | `domain:security, priority:p1, risk:high` | **Security-critical**: closes a gap where daemon kept enforcing stale auth policy after config changes. |
| [#11356](https://github.com/zeroclaw-labs/zeroclaw/pull/11356) | `fix(plugins): replace a channel plugin's instance after a trap` | `runtime:wasm, release-gate, release:v0.8.6` | Addresses Wasmtime 48 trap semantics—prevents permanently broken plugin channels. |

*All PRs show 0 comments/👍; discussion likely occurs in stacked review threads or internal channels.*

## 5. Bugs & Stability
| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **High** | Daemon enforces stale authorization policy after `config set/patch` | [#11313](https://github.com/zeroclaw-labs/zeroclaw/pull/11313) | Open, `needs-author-action` |
| **High** | Wasmtime 48 marks store `trapped` on any error, breaking subsequent plugin calls | [#11356](https://github.com/zeroclaw-labs/zeroclaw/pull/11356), [#11402](https://github.com/zeroclaw-labs/zeroclaw/pull/11402) | Open, stacked on #11348 |
| **Medium** | Local ZeroCode sessions sent `"cwd": null` instead of launch directory | [#11219](https://github.com/zeroclaw-labs/zeroclaw/pull/11219) | Open, `needs-author-action` |
| **Medium** | Plugin channel health check not reported in `/health` endpoint | [#11348](https://github.com/zeroclaw-labs/zeroclaw/pull/11348) | Open, `release-gate` |
| **Low** | Scoped principals could read persisted logs via `logs/query`, `logs/get` | [#11326](https://github.com/zeroclaw-labs/zeroclaw/pull/11326) | Open, `domain:security, priority:p1` |

*No crashes or regressions reported from users today—all bugs are maintainer-identified during v0.8.6 prep.*

## 6. Feature Requests & Roadmap Signals
| Signal | PR(s) | Likelihood for v0.8.6 |
|--------|-------|------------------------|
| **WASM plugin host in default artifacts** | [#11347](https://github.com/zeroclaw-labs/zeroclaw/pull/11347) | **High** – `release-gate`, `dist_extra_features` change |
| **Plugin webhook admission/dedup in core ingress** | [#11319](https://github.com/zeroclaw-labs/zeroclaw/pull/11319), [#11320](https://github.com/zeroclaw-labs/zeroclaw/pull/11320), [#11322](https://github.com/zeroclaw-labs/zeroclaw/pull/11322) | **High** – stacked, `release-gate`, `risk:high` |
| **Typed built-in tool inventory with tier ratchets** | [#11308](https://github.com/zeroclaw-labs/zeroclaw/pull/11308) | **Medium** – `release-gate`, stacked on #11305 |
| **Quickstart installs/activates tool plugins** | [#11309](https://github.com/zeroclaw-labs/zeroclaw/pull/11309) | **Medium** – `release-gate`, implements RFC #5574 Phase 2 D4 |
| **Discord plugin documentation + acceptance run** | [#11329](https://github.com/zeroclaw-labs/zeroclaw/pull/11329) | **Medium** – `release-gate`, draft until plugin published |
| **Session generation fencing on `session/configure`** | [#11330](https://github.com/zeroclaw-labs/zeroclaw/pull/11330) | **High** – `priority:p2`, security hardening |

## 7. User Feedback Summary
**No user-reported issues, discussions, or feedback captured in the last 24h.** The project is operating in a maintainer-driven pre-release window. Real-world operator pain points (e.g., plugin installation UX, webhook reliability, auth policy propagation) are being addressed proactively via the stacked PRs above.

## 8. Backlog Watch
| Item | Age / Context | Why It Needs Attention |
|------|---------------|------------------------|
| **Stacked plugin/RPC chain** (#11319 → #11320 → #11322 → #11347) | Created 2026-10-01, all `release-gate` | 4 large, interdependent PRs blocking v0.8.6; merge order and CI gating require maintainer orchestration. |
| **Wasmtime 48 trap handling** (#11348 → #11356 → #11402) | Created 2026-10-01 | Fundamental plugin stability fix; must land before artifact ship (#11347). |
| **Authorization config propagation** (#11313) | Created 2026-10-01, `needs-author-action`, `priority:p1` | Security regression; daemon ignores config changes until reload. |
| **ZeroCode cwd regression** (#11219) | Created 2026-09-29, `needs-author-action` | User-facing UX bug since #11044; tagged for v0.8.6. |
| **Plugin artifact smoke harness** (#11311) | Created 2026-10-01, `release-gate` | New CI leg required for release validation; must pass before ship. |

---

**Health Indicator**: 🟡 **Pre-release crunch** — High PR volume, zero merges, all critical-path work stacked and gated. Risk of merge conflicts and CI bottlenecks is elevated. Next 48h should see maintainers prioritize landing the Wasmtime trap fixes (#11348/#11356/#11402) and the artifact ship (#11347) to unblock v0.8.6.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*