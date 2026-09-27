# OpenClaw Ecosystem Digest 2026-09-27

> Issues: 195 | PRs: 500 | Projects covered: 12 | Generated: 2026-09-27 04:58 UTC

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

# OpenClaw Project Digest — 2026-09-27

## 1. Today's Overview
OpenClaw shows **extremely high velocity** with 695 total updates (195 issues, 500 PRs) in 24 hours, but zero new releases. The project is in a **stabilization crisis**: multiple P0 crash-loop regressions landed in versions 2026.9.5 and 2026.9.6 (native memory leaks, plugin capture disk exhaustion, worker heap blowup, gateway restart failures). Maintainers are responding with massive refactoring "deslop" passes across channels, agents, SDK, and state layers while simultaneously fixing critical regressions. The ratio of open to closed PRs (374:126) suggests review capacity is strained.

## 2. Releases
**No new releases today.** The last versions (2026.9.5, 2026.9.6) introduced severe regressions documented in multiple P0 issues. Users report 8-hour recovery sessions, gigabytes of disk fills per hour, and gateway restart failures.

## 3. Project Progress (Merged/Closed PRs Today: 126)
Key merged work focuses on **stabilization and refactoring**:

| PR | Area | Impact |
|----|------|--------|
| [#159416](https://github.com/openclaw/openclaw/pull/159416) | Message delivery | Fixes side answers disappearing during active tasks (Discord/Slack) |
| [#159388](https://github.com/openclaw/openclaw/pull/159388) | Web UI | Hides finished tasks from running-task preview |
| [#159428](https://github.com/openclaw/openclaw/pull/159428) | Web UI | Fixes chat jump when scrolling up during lazy load |
| [#159414](https://github.com/openclaw/openclaw/pull/159414) | Web UI | Recovers unsaved file edits after server updates |
| [#157413](https://github.com/openclaw/openclaw/pull/157413) | Core/Infra | Prevents temp-file exhaustion from SQLite coordination |
| [#159401](https://github.com/openclaw/openclaw/pull/159401) | Dependencies | Refreshes deps through Sep 19 cutoff |
| [#159247](https://github.com/openclaw/openclaw/pull/159247) | Testing | Deslops E2E harness duplication |

**Pattern**: Heavy investment in internal cleanup ("deslop" passes) and UI polish while critical backend regressions remain open.

## 4. Community Hot Topics

### Most Commented Issues (Signal: User Pain)
| Issue | Comments | Core Problem |
|-------|----------|--------------|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 40 👍1 | **2026.9.5 turned stable env into 8-hr recovery** — P0, crash-loop, UX release blocker |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 23 | Session transcript projection **livelocks under sustained writes**, blocks main thread |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 23 👍1 | **Per-agent cost budget enforcement** at gateway level (feature request, 6 months old) |
| [#157842](https://github.com/openclaw/openclaw/issues/157842) | 17 | **2026.9.6: prepared-model-catalog worker retains ~77 MB/turn**, exceeds 512 MB limit |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) | 16 👍1 | **Second message fails** with "reply session initialization conflicted" (cross-channel) |

**Underlying needs**: 
- **Reliability over features** — Users upgrading from stable versions hit showstopper regressions
- **Observability** — Cost budgets (#42475), provider error surfacing (#51336) requested for months
- **Recoverability** — Multiple issues about gateway becoming permanently unstartable after interrupted migrations

## 5. Bugs & Stability (Ranked by Severity)

### 🔴 P0 — Crash Loops & Data Loss (Fix PRs: Partial)
| Issue | Status | Fix PR? | Description |
|-------|--------|---------|-------------|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | Open | No | 2026.9.5: 8-hour failure recovery, crash-loop |
| [#157842](https://github.com/openclaw/openclaw/issues/157842) | Closed | Likely | 2026.9.6: model-catalog worker 77 MB/turn leak |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | Open | No | Stuck agent-DB resource fails all agent replies |
| [#156571](https://github.com/openclaw/openclaw/issues/156571) | Open | No | 2026.9.5: plugin captures 1-3 GB/min filling disk |
| [#155191](https://github.com/openclaw/openclaw/issues/155191) | Open | No | 2026.9.5: Native RSS leak ~1 GiB/30s, V8 heap stable |
| [#158114](https://github.com/openclaw/openclaw/issues/158114) | Closed | Likely | Interrupted startup migration → permanently unstartable |
| [#154679](https://github.com/openclaw/openclaw/issues/154679) | Open | No | Interrupted 6.5→9.5 update: gateway exit 78, doctor can't recover |
| [#158126](https://github.com/openclaw/openclaw/issues/158126) | Open | No | Gateway shutdown fails: "Worker environment inventory has closed" |
| [#159356](https://github.com/openclaw/openclaw/issues/159356) | Open | No | llama.cpp manager reports ready while embedding child exits → HTTP 500 |
| [#102020](https://github.com/openclaw/openclaw/issues/102020) | Closed | Likely | 2nd message fails: "reply session initialization conflicted" |

### 🟠 P1 — Message Loss & Session Corruption
| Issue | Status | Description |
|-------|--------|-------------|
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | Open | Billing cooldown outlives outage — 5hr fixed window, no probe recovery |
| [#112698](https://github.com/openclaw/openclaw/issues/112698) | Open | Codex app-server starves main thread ~22s (quadratic snapshot rebuild) |
| [#108409](https://github.com/openclaw/openclaw/issues/108409) | Open | Discord inbound treats internal context wrapper as user content |
| [#89766](https://github.com/openclaw/openclaw/issues/89766) | Closed | Isolated cron lanes leak on claude-cli backend |

### 🟡 P2 — Resource Leaks & Degradation
| Issue | Status | Description |
|-------|--------|-------------|
| [#71335](https://github.com/openclaw/openclaw/issues/71335) | Open | `sync.watch` defaults true in gateway mode → 1,292 chokidar watchers leak |
| [#69242](https://github.com/openclaw/openclaw/issues/69242) | Open | `exec` tool SIGKILLs broad find/grep on Linux without OOM evidence |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | Open | Plugin source capture rewrites 1.1-6.5 GB per command/start (SSD wear) |

## 6. Feature Requests & Roadmap Signals

| Issue | Votes | Age | Likelihood for Next Version |
|-------|-------|-----|----------------------------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) Per-agent cost budgets | 👍1 | 6 months | Medium — gateway-level enforcement aligns with current operator focus |
| [#76159](https://github.com/openclaw/openclaw/issues/76159) Per-job `acceptSilentStop` flag | 👍1 | 5 months | High — small, well-scoped, cron reliability |
| [#51336](https://github.com/openclaw/openclaw/issues/51336) Surface provider name in errors | 👍1 | 6 months | High — trivial UX win, reduces support burden |
| [#76247](https://github.com/openclaw/openclaw/issues/76247) Native dispatch ACK telemetry | 👍1 | 5 months | Low — requires cross-surface coordination |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) Billing cooldown probe recovery | 0 | 2 months | High — P0, subscription users blocked |
| [#159117](https://github.com/openclaw/openclaw/pull/159117) Agents query online people/device activity | — | New | High — PR open, adds `presence` tool, fleet-ready |

**Prediction**: Next patch (2026.9.7) will prioritize crash-loop fixes + `acceptSilentStop` + provider error surfacing. Cost budgets and dispatch telemetry need design decisions.

## 7. User Feedback Summary

### Pain Points (from issue narratives)
- **"I genuinely regret upgrading"** — Multiple users on 2026.9.5/9.6 regressions
- **"Gateway permanently unstartable"** — Interrupted migrations leave no recovery path (`doctor --fix` fails)
- **"8-hour failure recovery session"** — Crash loops require manual intervention
- **"Disk fills at 1-3 GB/min"** — Plugin capture cleanup broken since 9.5
- **"Silently down ~24h"** — macOS LaunchAgent left installed but not loaded after restart drain
- **"Unknown model" errors after hot reload** — Include-defined models dropped from registry

### Use Cases Revealed
- **Multi-channel gateways**: 9 Feishu + WhatsApp accounts (#157325), Signal + Discord + Telegram + Matrix + Feishu + Slack
- **Cron-heavy workloads**: Isolated jobs, lane management, silent-stop semantics
- **Local model stacks**: Ollama, llama.cpp embeddings, Bun + Node mixed runtimes
- **Enterprise fleets**: Windows Server, WSL2, macOS LaunchAgents, systemd
- **Plugin ecosystem**: Heavy external plugin usage (native binaries, large captures)

### Satisfaction Signals
- **Negative**: P0 regression cluster in consecutive releases erodes trust
- **Positive**: Maintainers responding same-day with diagnosis PRs (e.g., #159347 for Windows SQLite sharing, #159403 for Bun/macOS plugin capture)
- **Neutral**: Heavy refactoring ("deslop") suggests technical debt paydown but delays user-facing fixes

## 8. Backlog Watch (Stale/Blocked High-Value Items)

| Item | Age | Blockers | Why It Matters |
|------|-----|----------|----------------|
| [#42475](https://github.com/openclaw/openclaw/issues/42475) Cost budgets | 6 mo | Needs product decision | Operator demand, prevents runaway spend |
| [#71335](https://github.com/openclaw/openclaw/issues/71335) `sync.watch` default | 5 mo | Needs maintainer review | Causes FD leaks on every multi-agent gateway |
| [#112475](https://github.com/openclaw/openclaw/issues/112475) Device pairing recovery | 2 mo | Stale, needs security review | Admin scope deadlock — CLI can't approve repair requests |
| [#74484](https://github.com/openclaw/openclaw/issues/74484) Gateway pairing scope deadlock | 5 mo | Needs security review + live repro | CLI stuck with `operator.read` only |
| [#113701](https://github.com/openclaw/openclaw/issues/113701) Context overflow compaction | 2 mo | Needs live repro | Large tool outputs → failure loop, no recovery |
| [#42591](https://github.com/openclaw/openclaw/issues/42591) `install.sh` modularization | 6 mo | Needs product decision | 79KB/2498 lines — blocks contributor onboarding |
| [#159347](https://github.com/openclaw/openclaw/pull/159347) Windows SQLite sharing fix | New | **Draft, merge conflict, unresolved P1** | Critical for Windows gateway restarts |

---

**Health Assessment**: 🟡 **Degraded** — High velocity but concentrated on crisis response. Three consecutive releases (9.4, 9.5, 9.6) introduced P0 regressions. The "deslop" refactoring wave is necessary long-term but competes with urgent stabilization. Recommend: **pause feature work, ship 2026.9.7 with only crash-loop fixes + regression tests**, then resume refactoring.

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-09-27)

---

## 1. Ecosystem Overview

The personal AI agent ecosystem shows a **bifurcated landscape**: a few high-velocity "core" projects (OpenClaw, ZeroClaw, NanoClaw, Hermes Agent) are investing heavily in stabilization, security hardening, and infrastructure refactoring, while a longer tail of specialized forks (PicoClaw, NanoBot, CoPaw, LobsterAI, NullClaw, IronClaw) focus on channel-specific compatibility, UI polish, and niche integrations. **No project shipped a release today**—the entire ecosystem is in a "fix-forward" mode, with maintainers prioritizing regression resolution over feature delivery. Security and memory-safety concerns (credential leaks, sandbox escapes, supply-chain integrity) have surfaced simultaneously across multiple codebases, suggesting a maturation phase where production deployment realities are forcing architectural rigor. Community engagement remains developer-centric; user-facing feedback loops are largely mediated through GitHub issues rather than dedicated forums or telemetry.

---

## 2. Activity Comparison

| Project | Issues Updated (24h) | PRs Updated (24h) | PRs Merged/Closed | Release Status | Health Score |
|---------|----------------------|-------------------|-------------------|----------------|--------------|
| **OpenClaw** | 195 | 500 | 126 | No release (last 9.5/9.6 have P0 regressions) | 🟡 **Degraded** |
| **ZeroClaw** | 18 | 50 | 11 | No release | 🟢 **Hardening** |
| **NanoClaw** | 4 | 27 | 4 | No release (v2.4.0 on main, update pipeline broken) | 🟠 **Fragile** |
| **Hermes Agent** | 8 | 50 | 0 | No release | 🟡 **Constrained** |
| **NanoBot** | 4 | 14 | 2 | No release | 🟢 **Good** (with 🔴 P1 risk) |
| **LobsterAI** | 6 (closed) | 12 (merged) | 12 | No release | 🟢 **Stabilizing** |
| **CoPaw** | 6 | 4 | 0 | No release (2.2.3b) | 🟡 **Yellow** |
| **NullClaw** | 0 | 5 | 0 | No release | 🔵 **Quiet** |
| **PicoClaw** | 1 (new) | 3 | 2 | No release | 🟢 **Stable** |
| **IronClaw** | 1 (new) | 1 | 0 | No release | 🟢 **Steady** |
| **Moltis** | 0 | 0 | 0 | — | ⚪ **Inactive** |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚪ **Inactive** |

*Notes: "PRs Updated" includes opens, updates, and merges. Health scores synthesize digest assessments: **Hardening** = active security/infra investment; **Fragile** = feature velocity outpacing release discipline; **Constrained** = high WIP, low merge throughput; **Stabilizing** = high-severity bugs resolved in batch.*

---

## 3. OpenClaw's Position

**Advantages vs. Peers**
- **Scale of deployment**: Only project reporting multi-channel gateway fleets (9+ Feishu/WhatsApp accounts, Signal+Discord+Telegram+Matrix+Feishu+Slack), Windows Server/WSL2/macOS LaunchAgents/systemd, and plugin ecosystems with native binaries.
- **Operator tooling demand**: Unique feature requests for per-agent cost budgets (#42475, 6mo), provider error surfacing (#51336), and dispatch telemetry (#76247) reveal production-scale operational needs absent in smaller projects.
- **Refactoring capacity**: 374 open PRs and "deslop" passes across channels, agents, SDK, and state layers indicate sustained engineering investment few peers can match.

**Technical Approach Differences**
- **Monolithic gateway architecture**: Centralized gateway managing multi-channel, multi-agent, multi-tenant workloads—contrast with ZeroClaw's RPC sandbox model, Hermes's desktop-first TUI/dashboard split, or NanoBot's single-binary channel integrations.
- **SQLite coordination layer**: Uses temp-file-based SQLite for cross-process coordination (source of #157413 fix), whereas ZeroClaw uses Qdrant/principal-isolated memory, and NanoClaw relies on pnpm-lock integrity.
- **Release cadence pressure**: Date-based versions (2026.9.x) with consecutive P0 regressions suggest a release-train model that peers avoid (most ship on merge or milestone).

**Community Size Comparison**
- **OpenClaw**: Highest raw activity (695 updates/24h), but strained review capacity (374:126 open:closed PR ratio). Issues show deep, multi-month discussions (e.g., #42475 6mo, #71335 5mo).
- **ZeroClaw**: 50 PRs/18 issues with 22% merge rate—smaller but more efficient.
- **NanoBot/Hermes/LobsterAI**: 10–50 PRs/day with focused merges; communities appear tighter, more responsive.
- **Specialized forks (PicoClaw, CoPaw, IronClaw)**: Single-digit daily activity, maintainer-driven, niche user bases (QQ/WeCom, NEAR ecosystem).

---

## 4. Shared Technical Focus Areas

| Requirement | Projects Affected | Specific Needs |
|-------------|-------------------|----------------|
| **Update/release pipeline reliability** | OpenClaw (#153257, #154679), NanoClaw (#3943, #3941, #3942), Hermes (#123430, #124807), LobsterAI (#2768) | Atomic upgrades, rollback safety, dependency integrity (lockfile hashes), vulnerable dep pinning, gateway PID management |
| **Memory/subsystem leaks & resource exhaustion** | OpenClaw (#155191 native RSS, #156571 plugin capture, #71335 chokidar), ZeroClaw (#1011 tool-call parse leak), NanoBot (#5921 RotatingTextOutput), NullClaw (#1011) | Native memory profiling, FD/watchers accounting, bounded caches, allocation hygiene on error paths |
| **Multi-surface session synchronization** | OpenClaw (#102020 cross-channel), Hermes (#112028 Desktop+mobile), ZeroClaw (RPC workspace confinement #11110), LobsterAI (#1052 gateway races) | Session lease/ownership models, concurrent access protocols, state reconciliation after interrupt |
| **Provider error observability** | OpenClaw (#51336), NullClaw (#1004), ZeroClaw (#11147/#11153 web-search redaction), NanoBot (#5928 email charset) | Scrubbed error bodies, provider identity in errors, structured error taxonomy, retry/fallback visibility |
| **Security hardening: credentials & sandbox** | ZeroClaw (8 stacked auth PRs, #11112 RPC confinement), NanoClaw (#2520 Signal keys in logs, #3941 baileys CVE), Hermes (#124790 credential timestamps), NullClaw (#1004) | Principal isolation, secret redaction, supply-chain integrity, workspace confinement, auth provider stack completion |
| **Channel/platform API drift** | PicoClaw (#3394 QQ API), NanoBot (#5903 Feishu checkpoint leak, #5929 bot-to-bot), CoPaw (#7992 WeCom markdown), OpenClaw (multi-channel gateway) | Adapter maintenance burden, upstream change detection, backward-compatible shims, platform-specific semantics preservation |

---

## 5. Differentiation Analysis

| Dimension | OpenClaw | ZeroClaw | Hermes Agent | NanoClaw | NanoBot | LobsterAI | CoPaw | PicoClaw | IronClaw | NullClaw |
|-----------|----------|----------|--------------|----------|---------|-----------|-------|----------|----------|----------|
| **Primary Focus** | Multi-tenant gateway, enterprise fleets | Security-first sandbox, RPC parity, memory correctness | Desktop TUI + dashboard, Windows/Linux install robustness | Skill ecosystem expansion, operational autonomy | Channel integrations (Feishu, Telegram, Linear), UI polish | Desktop app (Electron), artifact editing, scheduled tasks | Qwen-based, console/settings UX, WeCom/enterprise | QQ/WeChat channel richness, Chinese community | NEAR blockchain agent tooling, knowledge graph | Minimalist core, CLI REPL quality, memory safety |
| **Target User** | Operators running fleets, plugin authors | Security-conscious developers, multi-user deployments | Power users wanting local desktop agent | Developers extending agent skills, self-hosters | Teams using Feishu/Linear/Telegram, Chinese enterprise | Knowledge workers needing doc editing + automation | Qwen ecosystem users, Chinese enterprise | QQ/WeChat bot operators, Chinese devs | NEAR/Web3 developers, token-launchpad ops | Minimalist CLI users, Rust-adjacent devs |
| **Architecture** | Monolithic Node/Bun gateway, SQLite coord, plugin SDK | Capability-based RPC, Qdrant memory, WASM sandbox, principal isolation | Rust/TypeScript, git-native updates, TUI + Web dashboard | Skill-based (pnpm workspaces), OpenCode provider wrapper | Single-binary Go? (channel adapters), MCP integration | Electron + React, OpenClaw gateway embedded, Vite renderer | TypeScript/Vue, modular console, channel plugins | Python? (sipeed), QQ Channel API focus | Python, knowledge graph CI, MCP server model | Rust, async runtime, XML tool-call parsing |
| **Release Model** | Date-based (2026.9.x), currently broken | Merge-to-main, version tags infrequent | Version tags (v0.21.5+), git-smart HTTP upgrades | Branch-based (main/channels), update command broken | Beta versions (2.2.3b), PR-driven | Milestone-based, bulk stale closures | Beta versions, design-doc driven | Ad-hoc, no recent release | CI-driven knowledge graph, no app releases | No recent releases, PR-driven |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration / Crisis Response** | **OpenClaw, ZeroClaw, NanoClaw** | >25 PRs/day; OpenClaw in stabilization crisis (3 consecutive P0 releases); ZeroClaw merging stacked security PRs; NanoClaw feature-wave (15 skill PRs) but update pipeline broken. High maintainer bandwidth but review bottlenecks. |
| **Steady Stabilization** | **NanoBot, LobsterAI, Hermes Agent** | 10–50 PRs/day with high merge rates (NanoBot 2/14, LobsterAI 12/12, Hermes 0/50 but 50 updated). Focus on bug fixes with regression tests, UI polish, install reliability. Hermes constrained by review capacity. |
| **Niche / Maintainer-Driven** | **CoPaw, PicoClaw, IronClaw, NullClaw** | <10 PRs/day; single maintainer or small core; feature work tied to specific platforms (QQ, WeCom, NEAR) or UX preferences (CLI REPL, console design). Low external contribution. |
| **Inactive** | **Moltis, ZeptoClaw** | Zero activity in 24h; likely archived or dormant. |

**Maturity Indicators**:
- **Production hardening**: ZeroClaw (auth stack, sandbox), OpenClaw (cost budgets requested 6mo), NanoClaw (turn traces, error reports) show operator-grade features.
- **Technical debt paydown**: OpenClaw "deslop", Hermes git-safety, Lob

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-09-27

## 1. Today's Overview
NanoBot shows **high development velocity** with 14 pull requests and 4 issues updated in the last 24 hours. The project is in active maintenance mode with a strong focus on bug fixes and stability improvements — 12 of 14 PRs are bug fixes, most with regression tests. Two PRs were merged today (#5916, #5919), addressing MCP tool pagination and Linear workspace member management. No new releases were published. The issue backlog includes a critical P1 agent sudo loop regression (#5924) and a Feishu bot-to-bot messaging gap (#5929).

## 2. Releases
**No new releases** in the last 24 hours.

## 3. Project Progress — Merged/Closed PRs Today

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#5916](https://github.com/HKUDS/nanobot/pull/5916) | **fix(mcp): load all pages of server tools before registration** | Bug fix, MCP | **High** — Fixes incomplete tool discovery when MCP servers paginate `tools/list` responses. Previously only first page was registered, making subsequent-page tools unavailable even when explicitly enabled. |
| [#5919](https://github.com/HKUDS/nanobot/pull/5919) | **feat(linear): manage member access and simplify workspace connections** | Feature, Linear integration | **Medium** — Adds WebUI admin controls for Linear member access (search, avatars, access switches). Removes need for teammates to exchange pairing codes. Only active human members in app-visible teams are eligible. |

## 4. Community Hot Topics

| Item | Type | Comments | 👍 | Analysis |
|------|------|----------|-----|----------|
| [#5908](https://github.com/HKUDS/nanobot/issues/5908) | Issue | 4 | 0 | **WebUI UX enhancement**: Users want live `tokens/sec` indicator during streaming replies to detect stalls. Active discussion (4 comments) suggests strong demand for real-time performance visibility. |
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | Issue | 3 | 0 | **Feishu regression**: Internal session-checkpoint marker ("Continue the active task...") leaks to users after idle auto-compaction. Message is persisted with `"_hidden": true` but still delivered. Affects Feishu/Lark channel reliability. |
| [#5929](https://github.com/HKUDS/nanobot/issues/5929) | Issue | 0 | 0 | **Feishu bot-to-bot messaging**: Platform delivers bot-authored @mentions when app has `im:message.group_at_msg.include_bot:readonly`, but channel drops them unconditionally. PR [#5930](https://github.com/HKUDS/nanobot/pull/5930) addresses group side. |
| [#5924](https://github.com/HKUDS/nanobot/issues/5924) | Issue | 0 | 0 | **Critical agent regression**: Sudo authorization closes before agent can execute command, causing infinite loop. Agent becomes "obsessed" with failed command even after max iterations. **P1 severity**, no fix PR yet. |

## 5. Bugs & Stability — Ranked by Severity

| Severity | Issue / PR | Summary | Fix Status |
|----------|------------|---------|------------|
| **P1 (Critical)** | [#5924](https://github.com/HKUDS/nanobot/issues/5924) | Agent stuck in sudo loop — authorization expires mid-turn, agent loops indefinitely, becomes unusable | ❌ No fix PR |
| **P2 (High)** | [#5916](https://github.com/HKUDS/nanobot/pull/5916) | MCP tool discovery misses paginated tools | ✅ **Merged** |
| **P2** | [#5931](https://github.com/HKUDS/nanobot/pull/5931) | Telegram command parsing loses newline/tab-separated args and email params | 🟢 Open, 12 regression tests |
| **P2** | [#5928](https://github.com/HKUDS/nanobot/pull/5928) | Email body decoding crashes on unknown charset (`LookupError` escapes polling loop) | 🟢 Open, MIME regression tests |
| **P2** | [#5927](https://github.com/HKUDS/nanobot/pull/5927) | Notification evaluator treats string `"false"` as truthy, sends unwanted notifications | 🟢 Open, param tests |
| **P2** | [#5926](https://github.com/HKUDS/nanobot/pull/5926) | Web fetch deduplication lowercases URLs, incorrectly blocks case-sensitive paths/query params | 🟢 Open, AgentRunner tests |
| **P2** | [#5925](https://github.com/HKUDS/nanobot/pull/5925) | Windows `write_file`/`edit_file` adds duplicate `\r` (CRLF → CRCR LF) | 🟢 Open, param tests |
| **P2** | [#5923](https://github.com/HKUDS/nanobot/pull/5923) | Image base64 decoding misses `ValueError` for non-ASCII chars, breaks MCP error handling | 🟢 Open |
| **P1** | [#5922](https://github.com/HKUDS/nanobot/pull/5922) | Cron next-run time uses current UTC offset only, ignores DST rules → off-by-one-hour in seasonal transitions | 🟢 Open, uses `detect_system_timezone()` |
| **P2** | [#5921](https://github.com/HKUDS/nanobot/pull/5921) | Closed `RotatingTextOutput` log stream reopens file on write, violates `closed` contract | 🟢 Open |
| **P2** | [#5920](https://github.com/HKUDS/nanobot/pull/5920) | `truncate_text_to_tokens()` produces replacement chars (`�`) when truncation splits multi-token Unicode | 🟢 Open |
| **P2** | [#5914](https://github.com/HKUDS/nanobot/pull/5914) | Napcat image download rejects non-numeric `file_size` prematurely | 🟢 Open |
| **P2** | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | Sustained-goal continuation loops on idle turns, exhausts iteration budget | 🟢 Open (old PR, updated today) |

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|----------------------------|
| **Live tokens/sec in WebUI streaming** | [#5908](https://github.com/HKUDS/nanobot/issues/5908) | High — Active discussion, clear UX value, low complexity |
| **Feishu bot-to-bot messaging in groups (allowlist + hop limit)** | [#5929](https://github.com/HKUDS/nanobot/issues/5929) + [#5930](https://github.com/HKUDS/nanobot/pull/5930) | High — PR already open with implementation, addresses platform capability gap |
| **Linear member access management via WebUI** | [#5919](https://github.com/HKUDS/nanobot/pull/5919) | **Done** — Merged today |
| **MCP full pagination support** | [#5916](https://github.com/HKUDS/nanobot/pull/5916) | **Done** — Merged today |

**Prediction**: Next patch release will likely include the Feishu bot-to-bot fix (#5930), Telegram command parsing fix (#5931), and the batch of encoding/decoding stability fixes (#5920, #5922, #5923, #5925–5928). The P1 sudo loop (#5924) needs urgent triage.

## 7. User Feedback Summary

| Pain Point | Evidence | Affected Users |
|------------|----------|----------------|
| **No streaming performance visibility** | #5908: "no way to see how fast it is generating... tell whether the model is working normally or stalling" | WebUI users on slow/large models |
| **Feishu internal messages leak to users** | #5903: Session checkpoint marker delivered as ordinary chat message after idle compaction | Feishu/Lark channel users |
| **Agent unusable due to sudo loop** | #5924: "Agent gets stuck in a loop trying to get sudo... becomes unusable" | Any user using sudo-requiring tools |
| **Telegram commands break with multiline/email args** | #5931: Parameters lost when using newlines/tabs or email addresses | Telegram power users |
| **Email polling crashes on unknown charsets** | #5928: `LookupError` escapes polling loop instead of best-effort decode | Email channel users |
| **Cron jobs run at wrong time during DST transitions** | #5922: Winter host computing summer 09:00 runs at 10:00 local | Scheduled task users in DST zones |

**Satisfaction signals**: High PR throughput with tests suggests maintainers are responsive. The merged Linear feature (#5919) shows investment in admin/team UX.

## 8. Backlog Watch — Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | ~53 days | Open, updated today | **Sustained-goal idle loop** — bounds automatic "continue" nudges to prevent iteration budget exhaustion. Long-open but recently updated; needs review/merge. |
| [#5924](https://github.com/HKUDS/nanobot/issues/5924) | 1 day | Open, **P1**, no PR | **Agent sudo loop** — Critical regression making agent unusable for privileged commands. Zero comments but highest severity. |
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | 3 days | Open, 3 comments | **Feishu message leak** — User-visible bug with hidden marker delivery. Root cause in idle auto-compaction path. |
| [#5908](https://github.com/HKUDS/nanobot/issues/5908) | 3 days | Open, 4 comments | **WebUI tokens/sec** — Most discussed issue. Low-hanging UX win for streaming transparency. |

---

**Health Indicators**: 🟢 **Good** — High fix throughput (12 bug-fix PRs with tests in 24h), 2 merges, no release pressure. 🟡 **Watch** — One P1 with no fix (#5924), one month-old PR (#5257) still open. 🔴 **Risk** — Agent sudo loop could block users on privileged workflows until patched.

*Data source: GitHub API snapshot for HKUDS/nanobot, 2026-09-27 00:00–23:59 UTC.*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-09-27

## 1. Today's Overview
Hermes Agent shows **high development velocity** with 50 open PRs updated in the last 24 hours and 8 active issues, but **zero merged PRs or new releases** — indicating a heavy "work in progress" day focused on stabilization, Windows compatibility, and session-state correctness. The issue backlog is dominated by **install/update regressions on Windows and Linux**, **TUI/gateway session synchronization bugs**, and **credential/security boundary fixes**. No PRs were merged today, suggesting maintainers are in review/iteration mode rather than shipping.

## 2. Releases
**No new releases today.** The latest version remains whatever was current before 2026-09-27 (based on issue #123430 referencing `v0.21.5+2451.g11e22f2`).

## 3. Project Progress
**Merged/Closed PRs today: 0**  
**Closed Issues today: 1**  
- [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) — Debian installation script fixed (uv.lock & npm install failures). Closed after 29 comments.

**Active PR themes (50 open, all updated today):**
| Theme | Representative PRs |
|-------|-------------------|
| **Windows install/update E2E testing** | [#124779](https://github.com/NousResearch/hermes-agent/pull/124779) (18-cell Windows journey), [#124692](https://github.com/NousResearch/hermes-agent/pull/124692) (git smart-HTTP upgrade tests) |
| **Session state / history reconciliation** | [#124800](https://github.com/NousResearch/hermes-agent/pull/124800), [#124805](https://github.com/NousResearch/hermes-agent/pull/124805), [#124802](https://github.com/NousResearch/hermes-agent/pull/124802) |
| **Updater/git safety** | [#124799](https://github.com/NousResearch/hermes-agent/pull/124799) (rescue refs for detached HEAD), [#110059](https://github.com/NousResearch/hermes-agent/pull/110059) (stream fetch progress) |
| **Cron/kanban worker lifecycle** | [#124775](https://github.com/NousResearch/hermes-agent/pull/124775), [#124803](https://github.com/NousResearch/hermes-agent/pull/124803), [#122290](https://github.com/NousResearch/hermes-agent/pull/122290) |
| **Desktop/UX fixes** | [#124788](https://github.com/NousResearch/hermes-agent/pull/124788) (long HERMES_HOME), [#112174](https://github.com/NousResearch/hermes-agent/pull/112174) (Bot profile picker), [#124789](https://github.com/NousResearch/hermes-agent/pull/124789) (stale resume) |
| **Security/auth boundaries** | [#124790](https://github.com/NousResearch/hermes-agent/pull/124790) (credential pool timestamp parsing), [#123306](https://github.com/NousResearch/hermes-agent/pull/123306) (MCP device-flow registration) |

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) **Debian install broken** | 29 comments, 👍4, **CLOSED** | Reliable one-line install on Debian; uv/npm toolchain friction |
| [#103410](https://github.com/NousResearch/hermes-agent/issues/103410) **TUI live compression crashes on LCM** | 10 comments | External context engine (LCM) compatibility with hot-reload compression |
| [#123430](https://github.com/NousResearch/hermes-agent/issues/123430) **Windows updater loses gateway.pid** | 4 comments | `--replace` relaunch leaves no PID file → subsequent updates abort |
| [#112028](https://github.com/NousResearch/hermes-agent/issues/112028) **Multi-surface session access** | 3 comments | Desktop + mobile dashboard concurrent access to same session |
| [#124794](https://github.com/NousResearch/hermes-agent/issues/124794) **Git partial clone recursive fetch explosion** | 2 comments | `tree:0` + git <2.44 → unbounded process tree, OOM |

**Underlying pattern:** Users hit **install/update fragility on non-macOS platforms** and **session-state races** when multiple surfaces (Desktop, TUI, Dashboard) interact with the same gateway.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **P0** | [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) Debian install broken (uv.lock, npm) | **CLOSED** | Likely fixed in main |
| **P1** | [#124799](https://github.com/NousResearch/hermes-agent/pull/124799) Updater loses commits on detached HEAD | OPEN (PR) | **Yes — #124799** |
| **P2** | [#123430](https://github.com/NousResearch/hermes-agent/issues/123430) Windows `--replace` loses gateway.pid | OPEN | No PR yet |
| **P2** | [#124807](https://github.com/NousResearch/hermes-agent/issues/124807) Windows `hermes update` WinError 5 deleting libcrypto DLL | OPEN | No PR yet |
| **P2** | [#124794](https://github.com/NousResearch/hermes-agent/issues/124794) Git partial clone recursive fetch OOM | OPEN | No PR yet |
| **P2** | [#124790](https://github.com/NousResearch/hermes-agent/issues/124790) Credential pool naive ISO-8601 parsed as local time | OPEN | No PR yet |
| **P2** | [#124800](https://github.com/NousResearch/hermes-agent/pull/124800) History reconciliation gap under native turn admission | OPEN (PR, draft) | **Yes — #124800** |
| **P2** | [#124805](https://github.com/NousResearch/hermes-agent/pull/124805) TUI live record loses row IDs | OPEN (PR) | **Yes — #124805** |
| **P2** | [#124804](https://github.com/NousResearch/hermes-agent/pull/124804) Slack tool progress continues after quota refusal | OPEN (PR) | **Yes — #124804** |
| **P3** | [#103410](https://github.com/NousResearch/hermes-agent/issues/103410) TUI compression hot-reload crashes on LCMEngine | OPEN | No PR yet |
| **P3** | [#124784](https://github.com/NousResearch/hermes-agent/issues/124784) Desktop "Install from Git" plugin consent needs TTY | OPEN | No PR yet |

**Cluster:** Windows update path has **three concurrent P2 blockers** (PID file, DLL delete, git fetch) — high risk for Windows users.

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for Next Version |
|---------|-------|----------------------------|
| **Multi-surface session access** (Desktop + mobile) | [#112028](https://github.com/NousResearch/hermes-agent/issues/112028) | Medium — requires gateway session lease redesign; PR #124800 is a related draft |
| **Estop/pause with allowlist & auto-expiry** | [#121054](https://github.com/NousResearch/hermes-agent/pull/121054) | High — PR open, addresses operator pain point |
| **Bot profile model picker provider-aware** | [#112174](https://github.com/NousResearch/hermes-agent/pull/112174) | High — PR open, UX polish |
| **Dashboard PTY marker cleanup** | [#124798](https://github.com/NousResearch/hermes-agent/pull/124798) | High — small fix, stale file accumulation |

**Prediction:** Next patch will likely bundle Windows update fixes, session-state reconciliation, and the estop/pause improvement. Multi-surface access needs more design work.

## 7. User Feedback Summary
**Pain points (from issue comments):**
- **Windows users:** "hermes update reports success then dies" ([#122455](https://github.com/NousResearch/hermes-agent/issues/122455) referenced in PR #122469), "gateway.pid missing after update" ([#123430](https://github.com/NousResearch/hermes-agent/issues/123430)), "Access denied deleting libcrypto" ([#124807](https://github.com/NousResearch/hermes-agent/issues/124807))
- **Debian users:** Install script fails on uv.lock/npm ([#87093](https://github.com/NousResearch/hermes-agent/issues/87093) — now closed)
- **Power users:** Git partial clones on older git cause system freeze ([#124794](https://github.com/NousResearch/hermes-agent/issues/124794))
- **Multi-device users:** Can't continue a session from mobile if open on Desktop ([#112028](https://github.com/NousResearch/hermes-agent/issues/112028))
- **Plugin authors:** Desktop "Install from Git" blocks on TTY consent gate ([#124784](https://github.com/NousResearch/hermes-agent/issues/124784))

**Positive signals:** Active PR review culture (50 PRs updated), investment in E2E test infrastructure for Windows/git upgrades, detailed root-cause analyses in PR descriptions.

## 8. Backlog Watch (Stale/High-Impact Items Needing Attention)
| Item | Age | Risk | Why It Matters |
|------|-----|------|----------------|
| [#121054](https://github.com/NousResearch/hermes-agent/pull/121054) `feat(estop): allowlist + bound pause` | 3 days | Medium | Operator safety feature; blocks all-or-nothing pause |
| [#112174](https://github.com/NousResearch/hermes-agent/pull/112174) Bot profile provider-aware picker | 12 days | Low | UX polish; PR ready but unmerged |
| [#110059](https://github.com/NousResearch/hermes-agent/pull/110059) Stream fetch progress + cleanup | 14 days | Medium | User-visible update UX; prevents "is it hung?" confusion |
| [#122290](https://github.com/NousResearch/hermes-agent/pull/122290) Cron worker site-packages restore | 2 days | High | **All cron jobs fail on self-managed installs** — P1 compat |
| [#124692](https://github.com/NousResearch/hermes-agent/pull/124692) Git smart-HTTP upgrade E2E | 0 days | Medium | Critical test infrastructure for update reliability |

**Maintainer attention needed:** The **Windows update cluster** (3 P2 issues + 2 test PRs) and **cron worker regression** (#122290) are the highest-impact unblocked items. No PRs merged today suggests review bandwidth may be constrained.

---

*Digest generated from GitHub data as of 2026-09-27. All links point to NousResearch/hermes-agent.*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-09-27

## 1. Today's Overview
PicoClaw saw low but focused activity in the last 24 hours: one new issue filed and three pull requests updated (one open, two closed). No new releases were published. The open issue (#3394) reports a breaking change in the QQ bot API that the QQ chat channel has not yet adapted to, indicating a compatibility regression for a major messaging platform. The merged PRs include a long-standing enhancement for QQ Channel attachment handling (#1349) and an automated PR (#3310), while a performance fix for UI lag (#3347) remains open and marked stale. Overall project health appears stable with incremental improvements, though the QQ API breakage warrants prompt attention.

## 2. Releases
No new releases published today.

## 3. Project Progress
**Merged / Closed PRs (2)**
- **#1349** — `feat(qq): support parsing and replying to more attachment types` (closed 2026-09-26)  
  Adds support for QQ Channel emoji structures, incoming voice/image/video/file messages, and replying with local attachments (upload-before-send). Falls back from Markdown to plain text if needed. This significantly expands media richness for QQ Channel users.  
  🔗 https://github.com/sipeed/picoclaw/pull/1349

- **#3310** — `Feat/auto pr` (closed 2026-09-26)  
  Automated pull request generated by `picoclanker`; purpose unspecified but likely a routine dependency or configuration update.  
  🔗 https://github.com/sipeed/picoclaw/pull/3310

**Open PR (1)**
- **#3347** — `fix laggy interface` (open, stale since 2026-08-27, updated 2026-09-26)  
  Addresses web UI lag when chat history grows large. Author reports successful testing on desktop and mobile browsers. Awaiting maintainer review.  
  🔗 https://github.com/sipeed/picoclaw/pull/3347

## 4. Community Hot Topics
| Item | Type | Activity | Summary |
|------|------|----------|---------|
| **#3394** | Issue | Created & updated today, 0 comments, 0 👍 | **QQ bot API changed; QQ chat channel not updated** — User reports upstream API breakage affecting a primary chat channel. No discussion yet, but high impact for QQ-based deployments. |
| **#3347** | PR | Open since Aug, updated today, 0 👍 | **Web UI lag fix** — Performance improvement for long chat histories. Stale label suggests it needs triage. |
| **#1349** | PR | Closed today after 6+ months | **QQ Channel rich media support** — Major feature for media handling in QQ Channel; community waited long for this. |

**Underlying need**: Users rely on QQ (both bot and Channel) as a primary transport. API stability and media parity are critical for adoption in Chinese-language communities.

## 5. Bugs & Stability
| Severity | Item | Description | Fix PR? |
|----------|------|-------------|---------|
| **High** | **#3394** | QQ bot API updated; QQ chat channel adapter broken. Blocks all QQ bot interactions. | No fix PR yet. |
| **Medium** | **#3347** | Web UI becomes laggy with large chat history. Affects usability on desktop & mobile. | PR #3347 exists (open, stale). |

No crashes or regressions reported today beyond the QQ API incompatibility.

## 6. Feature Requests & Roadmap Signals
- **QQ Channel media parity** — #1349 (now merged) shows strong demand for full attachment support (voice, video, file, emoji) in QQ Channel. Expect follow-ups for other channels (WeChat, Telegram, Discord) to reach similar richness.
- **Web UI performance** — #3347 indicates growing usage of the web frontend with long conversations; virtualized rendering or pagination may become a roadmap item.
- **Automated maintenance** — #3310 (auto PR) suggests the project uses bot-driven dependency/license updates; expect more such PRs.

**Likely next version**: QQ API compatibility patch + merge of #3347 (UI lag fix) + incremental channel enhancements.

## 7. User Feedback Summary
- **Pain point**: QQ bot users cannot send/receive messages due to upstream API change (#3394). Zero comments so far, but impact is immediate and widespread for that user segment.
- **Use case**: Heavy reliance on QQ Channel for rich media (voice, video, files) — validated by the 6-month effort on #1349.
- **Satisfaction**: Web UI users experience lag with long histories (#3347); fix is ready but unmerged.
- **No explicit dissatisfaction** beyond the two issues above; community appears patient with long review cycles.

## 8. Backlog Watch
| Item | Age | Status | Why It Needs Attention |
|------|-----|--------|------------------------|
| **#3347** | ~1 month (opened 2026-08-27) | Open, stale | Performance fix for core web UI; tested by contributor. Low risk, high UX value. |
| **#3394** | 1 day | Open, no triage | **Urgent** — QQ bot channel broken. Should be prioritized for API adapter update. |
| **#1349** | 6+ months | Just closed | Long review cycle suggests bottleneck in channel-related PRs; consider streamlining. |

**Recommendation**: Maintainers should triage #3394 immediately, merge #3347 after quick review, and evaluate whether channel adapters need a shared compatibility layer to reduce future API-breakage response time.

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-09-27

---

## 1. Today's Overview

NanoClaw shows **high development velocity** with 27 PRs updated and 4 issues active in the last 24 hours, but **no new releases** since the last cycle. The project is in a heavy feature-development phase: a cluster of 15+ new skill PRs (voice replies, turn traces, error reports, scheduled updates, flows, lean tasks, self-edit, upstream contribution) landed simultaneously from contributor `barnuri`, suggesting a coordinated push to expand the skill ecosystem. Meanwhile, three critical issues filed today by `bmultini` expose **regressions in the update pipeline** (`/update-nanoclaw` crashes on missing deps, drops git-dep integrity hashes, and re-pins a vulnerable `baileys` version). A security issue (#2520) from May remains open: Signal private keys are being written to logs. Overall health: **active but fragile** — rapid feature growth is outpacing release discipline and regression testing.

---

## 2. Releases

**No new releases today.**  
Last release data not provided in snapshot. The `main` branch is at `d4ff64f4` (v2.4.0 per issues), `channels` branch at `224827b9`. Users updating from v2.3.0 are hitting breakage (see Issues).

---

## 3. Project Progress (Merged/Closed PRs Today)

| PR | Type | Summary |
|----|------|---------|
| [#3025](https://github.com/nanocoai/nanoclaw/pull/3025) | **Fix/Container** | Raised agent SDK output-token cap from 32k to model max (follows guidelines). |
| [#2949](https://github.com/nanocoai/nanoclaw/pull/2949) | **Skill** | Added `/add-litellm` — minimal model router for local servers + optional cloud fallback. |
| [#3895](https://github.com/nanocoai/nanoclaw/pull/3895) | **Bug/Agent-Runner** | Fixed `send_card` URL pattern (`\s`/`\S` escapes) breaking llama.cpp grammar parsing. |
| [#3848] (referenced in #3944) | **Skill** | Base branch for `/add-typesafe-tool` Jev/OpenRouter integration (not yet merged). |

**Net:** 4 PRs closed (2 features, 1 bugfix, 1 container tweak). The bulk of today’s movement is **23 open PRs**, nearly all new skills or refactors enabling skills.

---

## 4. Community Hot Topics

| Item | Activity | Core Need |
|------|----------|-----------|
| [#2520](https://github.com/nanocoai/nanoclaw/issues/2520) *(May 17, updated Sep 26)* | 1 comment, 0 👍 | **Security**: `logs/nanoclaw.log` leaks Signal `privKey`/`rootKey`/`chainKey` on every WhatsApp session close. Fix requested at host startup, not transitive dep. |
| [#3943](https://github.com/nanocoai/nanoclaw/issues/3943) *(Sep 26)* | 0 comments | **Regression**: `/update-nanoclaw` crashes with `MODULE_NOT_FOUND` — controller imports `setup/gateways/` not provided by documented extraction (post-#3750). Blocks updates from v2.3.x. |
| [#3942](https://github.com/nanocoai/nanoclaw/issues/3942) *(Sep 26)* | 0 comments | **Integrity**: Skill refresh during `/update-nanoclaw validate` rewrites `pnpm-lock.yaml`, dropping `integrity` hashes of git-hosted deps (e.g., `libsignal-node`). Supply-chain risk. |
| [#3941](https://github.com/nanocoai/nanoclaw/issues/3941) *(Sep 26)* | 0 comments | **Vulnerability**: `channels` pins `@whiskeysockets/baileys@7.0.0-rc.9` (GHSA-qvv5-jq5g-4cgg, message spoofing). Every `/update-nanoclaw` re-pins it. |

**Pattern:** Three fresh issues from the same reporter (`bmultini`) all target the **update pipeline** — extraction completeness, lockfile integrity, and vulnerable dependency pinning. This is the community’s loudest signal: **“updates are broken and unsafe.”**

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Fix PR? |
|----------|-------|---------|
| **Critical** | [#3941](https://github.com/nanocoai/nanoclaw/issues/3941) — Pinned vulnerable `baileys@7.0.0-rc.9` (message spoofing CVE). Re-pinned on every update. | No |
| **Critical** | [#2520](https://github.com/nanocoai/nanoclaw/issues/2520) — Signal private keys (`privKey`/`rootKey`/`chainKey`) written to plaintext logs. | No |
| **High** | [#3943](https://github.com/nanocoai/nanoclaw/issues/3943) — `/update-nanoclaw` crashes `MODULE_NOT_FOUND` on `setup/gateways/` imports missing from extraction. Blocks all v2.3→v2.4 updates. | No |
| **High** | [#3942](https://github.com/nanocoai/nanoclaw/issues/3942) — `pnpm-lock.yaml` integrity hashes stripped for git deps during skill refresh. Supply-chain integrity loss. | No |
| **Medium** | [#3895](https://github.com/nanocoai/nanoclaw/pull/3895) **FIXED** — `send_card` URL regex (`\s`/`\S`) broke llama.cpp grammar parsing. Merged. | ✅ Merged |

**No fix PRs exist for the four critical/high issues filed today.** The vulnerable `baileys` pin (#3941) and log leak (#2520) are especially dangerous for production WhatsApp deployments.

---

## 6. Feature Requests & Roadmap Signals

The **15+ skill PRs opened today** (mostly by `barnuri`) reveal a clear roadmap direction: **operational autonomy & observability**.

| PR | Skill | Purpose | Likely Next Release? |
|----|-------|---------|---------------------|
| [#3939](https://github.com/nanocoai/nanoclaw/pull/3939) | `/add-turn-traces` | Per-turn agent traces in central DB (tools called, inputs, outputs). | High — core observability |
| [#3935](https://github.com/nanoclaw/pull/3935) | `/add-error-reports` | Reports host failures (crash loops, task backoffs) to a chat. | High — ops critical |
| [#3929](https://github.com/nanoclaw/pull/3929) | `/add-scheduled-update` | Unattended `/update-nanoclaw` on schedule from host. | High — addresses update pain |
| [#3938](https://github.com/nanoclaw/pull/3938) | `/add-voice-replies` | Agents reply with speech (offline TTS). | Medium — niche but requested |
| [#3937](https://github.com/nanoclaw/pull/3937) | `/add-repo-self-edit` | Admin-approved agent edits to NanoClaw source as git patches. | Medium — experimental |
| [#3933](https://github.com/nanoclaw/pull/3933) | `/add-flows` | Graph-shaped pre-task scripts for scheduled tasks. | Medium — DX improvement |
| [#3932](https://github.com/nanoclaw/pull/3932) | `/add-lean-tasks` | Minimal-context scheduled task runs (small/local models). | High — cost/latency win |
| [#3931](https://github.com/nanoclaw/pull/3931) | Refactor: `minimalContext` provider option | Enables lean tasks (supports #3932). | High — infra for above |
| [#3925](https://github.com/nanoclaw/pull/3925) | Provider-wrapper seam | Retry/fallback on backup model/credentials without editing provider. | High — resilience |
| [#3930](https://github.com/nanoclaw/pull/3930) | OpenCode: single env for config/key/runtime | Prevents config/credential drift. | Medium — stability |
| [#3928](https://github.com/nanoclaw/pull/3928) | `/contribute-upstream` | Helps forks push features back as skills/seams. | Low — meta |
| [#3927](https://github.com/nanoclaw/pull/3927) | `send_card` collapsible sections | Long logs/traces in cards without flooding. | High — UX (depends on #3926) |
| [#3926](https://github.com/nanoclaw/pull/3926) | `postCard` hook for channels | Channel skills render rich cards natively. | High — enables #3927, #3940 |
| [#3940](https://github.com/nanoclaw/pull/3940) | Slack: Block Kit collapsible containers | Native Slack rendering for collapsible sections. | Medium — channel-specific |
| [#3944](https://github.com/nanoclaw/pull/3944) | `/add-typesafe-tool` → Jev via OpenRouter | TypeSafe-compatible endpoint for Jev. | Medium — provider expansion |

**Prediction:** The next release (v2.5.0?) will likely bundle **turn traces, error reports, scheduled updates, lean tasks, provider wrapper, and collapsible cards** — these form a cohesive “observability + autonomy + resilience” theme. The vulnerable `baileys` pin and update crashes *must* be fixed first, or the release will ship broken.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Update pipeline is broken** | #3943 (crash), #3942 (integrity loss), #3941 (vuln re-pin) — all filed same day by experienced user | Users cannot safely update; v2.3→v2.4 blocked |
| **Secrets in logs** | #2520 open since May; Signal private keys in `nanoclaw.log` | Compliance/security blocker for WhatsApp users |
| **No visibility into agent actions** | Motivation for #3939 (turn traces), #3935 (error reports) | Operators fly blind; silent failures |
| **Long turns feel stuck** | Motivation for #3936 (Telegram progress message) | UX anxiety on slow models |
| **Card rendering limits** | #3927, #3940, #3895 — walls of text, llama.cpp breaks | Rich channels (Slack) and local models underserved |
| **Scheduled tasks too heavy** | #3932 (lean tasks), #3931 (minimalContext) | Cost/latency on small models |

**Satisfaction signal:** The reporter of the three update issues (`bmultini`) is deeply familiar with the codebase (references specific commits, branches, pnpm versions) — this is a **power user hitting regressions**, not a novice. Their silence on reactions/comments suggests frustration, not engagement.

---

## 8. Backlog Watch (Stale & Critical)

| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2520](https://github.com/nanocoai/nanoclaw/issues/2520) | **4.5 months** (May 17) | **Signal private keys in logs** — security/compliance blocker. No fix, no assignee, 1 comment. |
| [#3941](https://github.com/nanocoai/nanoclaw/issues/3941) | 1 day | **CVE-pinned dependency** re-pinned on every update. Requires `channels` branch bump + release. |
| [#3943](https://github.com/nanocoai/nanoclaw/issues/3943) | 1 day | **Update crash** — blocks all v2.3 users. Extraction docs vs. reality mismatch. |
| [#3942](https://github.com/nanoclaw/issues/3942) | 1 day | **Lockfile integrity loss** — supply-chain risk for git deps. |
| [#3848] (referenced in #3944) | ~1 week | Base for `/add-typesafe-tool` Jev integration; stacked PR #3944 depends on it. |
| [#3926](https://github.com/nanoclaw/pull/3926) + [#3927](https://github.com/nanoclaw/pull/3927) + [#3940](https://github.com/nanoclaw/pull/3940) | 1 day | **Card rendering overhaul** — 3 PRs with merge-order dependency. Block Slack rich cards & collapsible sections. |

**Maintainer action needed:**  
1. **Triage the 3 update-critical issues (#3941, #3943, #3942)** — consider a hotfix branch or v2.4.1.  
2. **Assign #2520** — 4 months is too long for a key-leak bug.  
3. **Review the skill PR cluster** — 15 PRs at once risks review bottleneck; consider batching into a “skills wave” milestone.

---

## Summary Health Indicators

| Metric | Status |
|--------|--------|
| **Release Cadence** | ❌ Stalled (no release despite v2.4.0 on `main`) |
| **Security Hygiene** | ⚠️ Poor (key leak + CVE pin open) |
| **Update Reliability** | ❌ Broken (3 regressions in one day) |
| **Feature Velocity** | ✅ Very High (15+ skill PRs in 24h) |
| **Review Capacity** | ⚠️ At Risk (23 open PRs, few reviewers visible) |
| **Community Trust** | ⚠️ Eroded (power users hit regressions, no fixes) |

**Recommendation:** Pause new skill merges until the update pipeline (#3941, #3943, #3942) and log leak (#2520) are resolved. Ship a v2.4.1 hotfix, then resume the skills wave.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw Project Digest — 2026-09-27

---

## 1. Today's Overview

NullClaw shows **low community engagement** but **active maintenance** in the last 24 hours. Zero issues were created or updated, and no PRs were merged or closed. However, five pull requests—all authored by core maintainer **vernonstinebaker**—were updated, indicating ongoing internal development focused on stability and correctness. The work targets memory handling, provider error visibility, CLI usability, memory-safety in tool-call parsing, and a Discord bot loop regression. No releases were published today.

---

## 2. Releases

**No new releases** in the last 24 hours. The project’s latest published version remains whatever was shipped prior to this date.

---

## 3. Project Progress

**Merged/Closed PRs today: 0**  
All five updated PRs remain **open**. No features were formally delivered to `main` today. The open PRs represent incremental fixes that, once merged, will improve:

- **Memory correctness** (#1005): prevents archived conversation shards from polluting live context.
- **Observability** (#1004): surfaces provider error bodies (scrubbed) on non-2xx responses.
- **CLI ergonomics** (#970): adds a raw-mode line editor with full arrow-key, history, and word-navigation support in the agent REPL.
- **Memory safety** (#1011): plugs allocation leaks in `parseXmlToolCalls` on partial failure.
- **Discord loop prevention** (#1010): stops the bot from ingesting its own messages when `allow_bots = true`.

---

## 4. Community Hot Topics

| PR | Title | Activity | Link |
|----|-------|----------|------|
| #1005 | fix(memory): keep archived conversation shards out of live turns | 0 comments, 0 👍 | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) |
| #1004 | fix(providers): log scrubbed provider error bodies on non-2xx | 0 comments, 0 👍 | [#1004](https://github.com/nullclaw/nullclaw/pull/1004) |
| #970 | fix(cli): handle arrow keys in agent REPL | 0 comments, 0 👍 | [#970](https://github.com/nullclaw/nullclaw/pull/970) |
| #1011 | fix(agent): free parsed tool call when a later allocation fails | 0 comments, 0 👍 | [#1011](https://github.com/nullclaw/nullclaw/pull/1011) |
| #1010 | fix(discord): ignore messages the bot itself posted | 0 comments, 0 👍 | [#1010](https://github.com/nullclaw/nullclaw/pull/1010) |

**Analysis**: Zero external discussion on any PR. All activity is internal. The absence of community comments or reactions suggests either a small user base, limited visibility, or that these are pre-merge maintenance patches not yet surfaced to users.

---

## 5. Bugs & Stability

| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **High** | Discord bot enters infinite reply loop when `allow_bots = true` and bot mentions itself | [#1010](https://github.com/nullclaw/nullclaw/pull/1010) | Open |
| **High** | Memory leak in `parseXmlToolCalls` on allocation failure (tool call `name`/`arguments` + `tool_call_id` leaked) | [#1011](https://github.com/nullclaw/nullclaw/pull/1011) | Open |
| **Medium** | Archived conversation shards incorrectly recalled into live prompt/`memory_recall` tool | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) | Open |
| **Medium** | Provider error bodies lost on non-2xx (hinders debugging unsupported tools, auth errors, etc.) | [#1004](https://github.com/nullclaw/nullclaw/pull/1004) | Open |
| **Low** | Arrow keys and common line-editing keys print as control chars in `nullclaw agent` REPL | [#970](https://github.com/nullclaw/nullclaw/pull/970) | Open (since 2026-06-29) |

**Note**: All bugs have associated fix PRs, but none are merged. The Discord loop and memory leak are the most severe—both can cause runaway behavior or OOM in production.

---

## 6. Feature Requests & Roadmap Signals

**No new feature requests** (issues) in the last 24 hours. The current PR queue signals the near-term roadmap is **stability & polish**, not new capabilities:

1. **Memory subsystem hardening** (#1005) — likely prerequisite for any long-context or multi-session features.
2. **Provider observability** (#1004) — foundational for multi-provider routing and fallback logic.
3. **CLI quality-of-life** (#970) — suggests investment in local developer experience.
4. **Memory-safety discipline** (#1011) — indicates a push toward stricter allocation hygiene, possibly ahead of a Rust rewrite or fuzzing campaign.
5. **Discord integration robustness** (#1010) — points to ongoing support for chat-platform bots as a first-class deployment target.

**Prediction**: Next release will be a **patch/bugfix release** bundling these five fixes. No signals of major new features (e.g., plugin system, voice, RAG) in current activity.

---

## 7. User Feedback Summary

**No user-reported issues, discussions, or reactions** in the last 24 hours. The project appears to be in a **quiet period** externally. Pain points inferred from fix PRs:

- Developers using the CLI REPL suffer from broken line editing (arrow keys, history).
- Operators debugging provider failures lack error-body visibility.
- Discord bot deployments with `allow_bots = true` risk runaway loops.
- Long-running agents may leak memory during tool-call parsing failures.
- Users with archived conversations see “ghost” history in live turns.

No satisfaction/dissatisfaction signals available today.

---

## 8. Backlog Watch

| Item | Age | Concern | Link |
|------|-----|---------|------|
| **#970** — CLI arrow-key support | **91 days** (opened 2026-06-29) | Longest-open PR; basic REPL usability blocked. No review/comment activity. | [#970](https://github.com/nullclaw/nullclaw/pull/970) |
| **#1005** — Memory archive recall bug | 3 days | Affects correctness of conversation context; test coverage unclear. | [#1005](https://github.com/nullclaw/nullclaw/pull/1005) |
| **#1004** — Provider error body logging | 3 days | Observability gap; impacts multi-provider debugging. | [#1004](https://github.com/nullclaw/nullclaw/pull/1004) |
| **#1011** — Tool-call parse leak | 1 day | Memory safety; could cause OOM under load. | [#1011](https://github.com/nullclaw/nullclaw/pull/1011) |
| **#1010** — Discord self-reply loop | 1 day | Production incident risk for bot deployments. | [#1010](https://github.com/nullclaw/nullclaw/pull/1010) |

**Maintainer action needed**: Review and merge the five open PRs—especially #970 (stale) and the two high-severity fixes (#1010, #1011). Consider tagging a patch release once merged. No stale issues to triage (zero open issues total).

---

*Generated from GitHub data as of 2026-09-27. All links point to `github.com/nullclaw/nullclaw`.*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest — 2026-09-27

---

## 1. Today's Overview
IronClaw shows **low but focused activity** over the last 24 hours: one new feature issue opened and one long-running maintenance PR updated. No releases, merged PRs, or closed issues were recorded. The project appears to be in a **steady maintenance phase** with a single new strategic feature request targeting NEAR ecosystem integration. Overall project health looks stable — CI-driven knowledge-graph refreshes continue on schedule, and the new issue signals intentional expansion into NEAR token-launchpad tooling.

---

## 2. Releases
**No new releases** published today. The latest published version remains whatever was shipped prior to this reporting window.

---

## 3. Project Progress
**No PRs merged or closed today.** The only PR movement is an update to an existing maintenance PR:

| PR | Title | Status | Age | Notes |
|----|-------|--------|-----|-------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | `chore(agents): refresh codebase knowledge graph` | **Open** (updated today) | 29 days | Nightly CI-generated snapshot refresh; awaits review/merge. No functional changes — infrastructure upkeep only. |

---

## 4. Community Hot Topics
Only one issue received activity today; it is also the sole new issue.

| Item | Type | Activity | Summary | Underlying Need |
|------|------|----------|---------|-----------------|
| [#8112](https://github.com/nearai/ironclaw/issues/8112) | **Issue (Feature)** | Created 2026-09-26, 0 comments, 0 👍 | **NEARA hosted-MCP extension** — enable IronClaw agents to list/quote/launch/trade tokens on NEARA (NEAR mainnet launchpad, 1B fixed-supply tokens, locked concentrated-liquidity pools on Rhea DCL). | **Ecosystem parity**: Users want IronClaw agents to operate natively on NEAR’s emerging token-launchpad infrastructure, mirroring capabilities that exist for other chains. This is a strategic integration request, not a bug report. |

*No other issues or PRs attracted comments or reactions in the last 24h.*

---

## 5. Bugs & Stability
**No bugs, crashes, or regressions reported today.** The issue tracker shows zero new defect reports and zero updates to existing defect issues in the window.

---

## 6. Feature Requests & Roadmap Signals
The single new issue is a **clear roadmap signal**:

| Issue | Feature Area | Likelihood of Near-Term Inclusion |
|-------|--------------|-----------------------------------|
| [#8112](https://github.com/nearai/ironclaw/issues/8112) | NEARA / NEAR token-launchpad MCP tools (listing, quoting, launching, trading) | **High** — authored by a core contributor (`iwaterheater`), targets a live mainnet launchpad, and aligns with IronClaw’s agent-tool extensibility model. Expect a design discussion followed by an MCP server implementation PR within 1–2 sprints. |

No other feature requests surfaced today.

---

## 7. User Feedback Summary
**No direct user feedback** (comments, reactions, or reproduction reports) captured in the last 24 hours. The only signal is the proactive feature request from a core contributor, indicating *internal* demand for NEAR launchpad support rather than external user pain points.

---

## 8. Backlog Watch
Items that have lingered without maintainer action and may need attention:

| Item | Type | Stale Since | Why It Matters |
|------|------|-------------|----------------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | PR (chore) | 2026-08-29 (29 days) | Nightly CI artifact; merges keep the agent knowledge graph current. Low risk, but stale PRs dilute signal-to-noise in review queues. |
| *(No other issues/PRs meet “long-unanswered + important” criteria in current data.)* | | | |

> **Recommendation**: Merge #7988 promptly (it passes tests per description) to clear the maintenance backlog. Triaging #8112 for design review next sprint would capitalize on contributor momentum.

---

*Data sourced from GitHub API (issues/PRs updated 2026-09-26 → 2026-09-27). Links point to live GitHub objects.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-09-27

## 1. Today's Overview
LobsterAI saw a **maintenance-focused day** with no new releases but significant housekeeping: 6 stale issues and 12 pull requests were closed/merged in bulk on 2026-09-26–27. The activity centers on resolving long-standing concurrency bugs in authentication and the OpenClaw gateway, UI regressions in modal dialogs, and a feature addition for Word document editing. No new issues or feature requests were opened today, indicating a stabilization phase rather than active feature development.

## 2. Releases
**None** — No new versions published today.

## 3. Project Progress (Merged/Closed PRs Today)
| PR | Area | Summary | Link |
|----|------|---------|------|
| #2770 | renderer, build, docs, main, openclaw, skills, artifacts | **Feat: Word document editing** — Major feature enabling in-app .docx creation/editing. | [#2770](https://github.com/netease-youdao/LobsterAI/pull/2770) |
| #2769 | renderer | **Fix: Vite watch ignoring artifact sources** — Corrected over-broad `artifacts/**` exclusion that prevented hot-reload of the artifact panel and Markdown editor. | [#2769](https://github.com/netease-youdao/LobsterAI/pull/2769) |
| #2768 | main, openclaw | **Fix: OpenClaw gateway startup timeout extension** — Increases tolerance for slow gateway initialization. | [#2768](https://github.com/netease-youdao/LobsterAI/pull/2768) |
| #2767 | renderer, docs, artifacts | **Refactor: Markdown live-editing engine** — Split monolithic `markdownLivePreview` into `markdownLiveStructure`, `markdownEditorCommands`, `markdownLiveWidgets` for maintainability. | [#2767](https://github.com/netease-youdao/LobsterAI/pull/2767) |
| #1049 | auth | **Fix: `fetchWithAuth` concurrent 401 double-consumes `refreshToken`** — Introduces `sharedRefreshOnce` slot so all concurrent 401 retries share a single in-flight refresh, preventing forced logouts. | [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049) |
| #1052 | openclaw | **Fix: Two race conditions causing permanent AI session failure** — (1) `ensureGatewayClientReady` waiters now verify `gatewayClient` readiness after lock; (2) `ensureActiveTurn` no longer creates turn for manually stopped sessions. | [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) |
| #1054 | modal | **Fix: Modal close button unclickable when overlapping title-bar drag region** — Added `-webkit-app-region: no-drag` to `.fixed`/`.modal-backdrop` so Electron drag region doesn’t intercept clicks. | [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054) |
| #1056 | cowork | **Chore: Remove debug `console.log` from production code** — Cleaned three verbose log statements in `cowork.ts`. | [#1056](https://github.com/netease-youdao/LobsterAI/pull/1056) |
| #1057 | memory | **Fix: Filter `thinking` blocks from LLM judge response** — `extractTextFromAnthropicResponse` now skips `type="thinking"` blocks when extended thinking is enabled. | [#1057](https://github.com/netease-youdao/LobsterAI/pull/1057) |
| #1058 | scheduled-task | **Fix: Prevent data loss when run-history JSONL write fails** — Migration now only marks completion after all `appendFileSync` calls succeed. | [#1058](https://github.com/netease-youdao/LobsterAI/pull/1058) |
| #1059 | main | **Fix: Windows default browser detection** — Ensures LobsterAI launches the actual default browser (Edge) instead of hard-coded Chrome. | [#1059](https://github.com/netease-youdao/LobsterAI/pull/1059) |
| #1065 | scheduled-task | **Feat: Bind scheduled task to existing cowork session** — Adds searchable session selector to create/edit form, allowing reuse of persistent sessions instead of spawning new ones each run. | [#1065](https://github.com/netease-youdao/LobsterAI/pull/1065) |

## 4. Community Hot Topics
All six issues updated today were **stale issues closed without recent discussion** (2 comments each, 0 reactions). The underlying needs they reveal:
- **Auth reliability** (#1048/#1049): Users hit forced logouts under concurrent IPC calls at startup — critical for multi-tab/multi-agent workflows.
- **OpenClaw session resilience** (#1051/#1052): Gateway init races leave sessions permanently broken, requiring app restart — a top stability pain point.
- **Modal usability** (#1053/#1054): Drag-region interception makes modals unusable when tall — affects every modal in the app.
- **Scheduled-task UX** (#1062, #1065): Time-display drift and inability to bind persistent sessions reduce trust in automation.

No new community-driven issues or debates emerged today.

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Fix PR | Status |
|----------|-------|--------|--------|
| **Critical** | Concurrent 401 handling double-consumes refreshToken → forced logout | #1049 | ✅ Merged |
| **Critical** | OpenClaw gateway init race → permanent session failure (requires restart) | #1052 | ✅ Merged |
| **High** | Modal close button unclickable when overlapping draggable header | #1054 | ✅ Merged |
| **High** | Scheduled-task migration marks success even if JSONL write fails → data loss | #1058 | ✅ Merged |
| **Medium** | LLM judge includes `thinking` blocks in extracted text (Anthropic extended thinking) | #1057 | ✅ Merged |
| **Medium** | Windows default browser detection launches Chrome instead of Edge | #1059 | ✅ Merged |
| **Low** | Debug logs left in production `cowork.ts` | #1056 | ✅ Merged |
| **Low** | Scheduled-task title shows stale time after edit | #1062 | ❌ Closed stale (no fix PR linked) |

> **Note:** #1062 (scheduled-task time/title mismatch) was closed as stale without a fix PR — may resurface.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|------------------------------|
| **Word document editing** (full .docx create/edit) | PR #2770 (merged today) | ✅ **Already merged** — will ship in next release |
| **Bind scheduled tasks to persistent cowork sessions** | PR #1065 (merged today) | ✅ **Already merged** |
| **Gateway port configurability** (avoid OpenClaw conflict) | Issue #1061 (closed stale) | ⚠️ **Deferred** — no PR, but real user need |
| **Heartbeat/system-dialog filtering from chat history** | Issue #1066 (closed stale) | ⚠️ **Deferred** — UX polish, no PR |

The two merged features (#2770, #1065) suggest the next release will emphasize **document-centric workflows** and **automation flexibility**.

## 7. User Feedback Summary
- **Pain points**: Forced logouts on startup, sessions that brick permanently, unclickable modals, scheduled-task time drift, system noise in chat.
- **Workarounds reported**: App restart for bricked sessions; manual browser selection on Windows.
- **Satisfaction signals**: No new complaints today; bulk closure of stale issues suggests maintainers are clearing backlog, but absence of new issues may also reflect low visibility or reporting friction.

## 8. Backlog Watch
| Item | Age | Risk | Action Needed |
|------|-----|------|---------------|
| **#1061 Gateway port modification** | Opened 2026-03-30, closed stale 2026-09-26 | Medium — users hit port conflicts with OpenClaw; no config option exists | Reopen or track as feature request; add `gatewayPort` config |
| **#1066 Heartbeat dialog filtering** | Same | Low — UX clutter | Add filter in chat history renderer |
| **#1062 Scheduled-task title/time mismatch** | Same | Medium — data integrity perception | Root-cause the title-sync logic; reopen if reproducible |
| **Open PRs** | None today | — | Monitor for new submissions post-stale-sweep |

---

**Health Indicator**: 🟢 **Stabilizing** — High-severity concurrency and UI bugs resolved; major feature (Word editing) landed. Risk: stale closures may hide unresolved user friction (#1061, #1062, #1066). Next release likely to be feature-rich (Word, session binding) but watch for regression in auth/gateway paths.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-09-27

---

## 1. Today's Overview
CoPaw shows **moderate maintenance activity** with 6 issue updates and 4 open PRs in the last 24 hours, but **zero merges or releases**. The project is in a **feature refinement and bug-fix phase** — three PRs address concrete UI/UX and i18n defects, while one larger PR (#7956) attempts a settings/console overhaul. No critical security or data-loss bugs surfaced today. The backlog contains several long-standing enhancement requests (cron script execution, pre-made model management) that remain unaddressed, suggesting maintainer bandwidth is focused on stabilization over new capabilities.

---

## 2. Releases
**No new releases** published today. The latest version remains **2.2.3b** (per issue #7994). Users on beta channels should expect iterative fixes via PR merges rather than versioned drops.

---

## 3. Project Progress
**Merged/Closed PRs today: 0** — all four PRs remain open.  
**Notable advances in open PRs:**
- **#7996** (iluv7): Fixes Files panel refresh for expanded folders (#7995) — preserves expansion state, handles nested dirs, guards against stale responses. *Ready for review.*
- **#7993** (Bruce-Yii): Adds two missing i18n keys (`common.operationFailed`, `voiceTranscription.loadFailed`) used in 7 call sites — eliminates raw key leakage in toasts. *Low-risk, high-impact.*
- **#7992** (Bruce-Yii): Stops WeCom channel from misclassifying prose containing `|` as markdown tables — prevents content corruption. *Channel-specific but user-visible.*
- **#7956** (rayrayraykk): Large console/settings UX unification per `design.md` — reusable controls, localized labels, workspace-picker overflow fix, welcome-screen flash elimination. *Design-heavy; needs careful review for regressions.*

---

## 4. Community Hot Topics
| Item | Activity | Core Need |
|------|----------|-----------|
| **#4963** Cron: direct script/shell execution | 4 comments, created Jun 2026, updated today | **Automation without AI overhead** — users want to run shell/scripts on schedule (backups, sync, CI triggers) without routing through an agent. High practical value for ops workflows. |
| **#7957** Disable pre-made models/channels | 3 comments, created Sep 23 | **UI decluttering / OCD-driven UX** — users request manual toggle to hide unused built-ins. Low dev effort, high perceived polish. |
| **#7991** TaskTracker zombie entries inflate running count | 1 comment, created Sep 26 | **Dashboard accuracy** — global counter disagrees with `/api/chats`; impacts monitoring trust. Likely state-sync bug in `TaskTracker`. |

*No issue has 👍 reactions, suggesting community engagement is discussion-driven rather than vote-driven.*

---

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Medium** | **#7995** Files panel refresh doesn't update expanded folders (new files invisible until full reload) | Open | **#7996** (open, targets this) |
| **Medium** | **#7994** Context token circle stale across conversations; compression fails despite threshold exceeded | Closed (Close-and-review-later) | None |
| **Medium** | **#7991** `TaskTracker` global running count ≠ chat list API (zombie entries) | Open | None |
| **Low** | **#7993** Missing i18n keys render raw keys in toasts (7 sites) | Open | **#7993** (open) |
| **Low** | **#7992** WeCom markdown table parser corrupts prose with `|` | Open | **#7992** (open) |

**No crashes, data loss, or security issues reported today.** The Files panel bug (#7995) is the most user-visible regression; its fix (#7996) is ready and should be prioritized.

---

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for Next Version |
|---------|-------|-----------------------------|
| Cron: direct script/shell task type | #4963 (100+ days old) | **Low** — no PR, no maintainer comment; requires backend task-runner changes. |
| Toggle visibility of pre-made models/channels | #7957 | **Medium** — simple UI toggle, strong user sentiment, low risk. Could land if PR submitted. |
| Settings/console UX unification (design.md) | #7956 (PR) | **High** — active PR, design-approved, addresses multiple UX pain points (overflow, flash, consistency). |
| TaskTracker accuracy fix | #7991 | **Medium** — core metric reliability; needs investigation but no PR yet. |

**Prediction:** Next beta (2.2.4b) will likely include #7996, #7993, #7992, and possibly #7956 if review completes. #4963 and #7957 remain backlog candidates.

---

## 7. User Feedback Summary
- **Pain points:**  
  - Files panel refresh broken for expanded folders (devs using agent-generated files hit this daily).  
  - Dashboard "running tasks" count untrustworthy (#7991).  
  - Context UI shows stale data; compression silently fails (#7994).  
  - Clutter from unremovable built-in models/channels (#7957).  
- **Use cases revealed:**  
  - Scheduled shell/script execution for infra automation (#4963).  
  - Multi-conversation workflows where context switching must be instant (#7994).  
  - Enterprise channel (WeCom) markdown rendering fidelity (#7992).  
- **Sentiment:** Constructive but frustrated on long-standing gaps (cron, clutter). Beta users file precise, reproducible bugs — indicates engaged technical audience.

---

## 8. Backlog Watch
| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| **#4963** Cron script execution | 115 days | Enables non-AI automation; high utility for power users. | Maintainer triage: scope effort, decide if in roadmap. |
| **#7804** Management (vague, multi-component) | 11 days | Closed but touches Core, Console, Channels, Skills, CLI, Docs — may hide scope creep. | Verify closure reason; ensure no orphaned work. |
| **#7957** Disable pre-made models/channels | 4 days | Simple, high user satisfaction ROI. | Accept community PR or assign trivial fix. |
| **#7991** TaskTracker zombie entries | 1 day | Undermines dashboard credibility; may indicate deeper state leak. | Assign investigation; add integration test for counter consistency. |

---

**Health Indicator:** 🟡 **Yellow** — Active bug fixes and UX polish in flight, but zero merges today and two high-value enhancements (#4963, #7957) stalled without maintainer signal. Recommend: merge #7996/#7993/#7992 this week, review #7956, and triage #4963/#7957 for next sprint.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-09-27

## 1. Today's Overview
ZeroClaw shows **high development velocity** with 50 PRs and 18 issues updated in the last 24 hours. No new releases were published. Activity centers on **security hardening** (RPC workspace confinement, auth provider stack), **memory subsystem correctness** (Qdrant time-bounded recall), **tool semantics preservation** (browser/search vs shell mapping), and **runtime stability** (stream recovery, stall watchdog, REPL IUTF8). The project is in a heavy bug-fix and infrastructure-hardening phase, with multiple stacked PRs landing auth/security work from July–August.

---

## 2. Releases
**No new releases** in the last 24 hours.

---

## 3. Project Progress — Merged/Closed PRs (11 total)
| PR | Title | Area | Status |
|----|-------|------|--------|
| [#11112](https://github.com/zeroclaw-labs/zeroclaw/pull/11112) | fix(security): bind RPC sessions to the canonical authorized workspace | Security/Sandbox | **Closed** (fixes S0 bug #11110) |
| [#8855](https://github.com/zeroclaw-labs/zeroclaw/pull/8855) | feat(channels): mirror built-in channels via plugin `provides` | Channels/Plugins | **Closed** (XL, stacked since Jul) |
| [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) | feat(security): multi-user auth providers, permission profiles, principal isolation | Auth/Security | **Closed** (XL, RFC #7141) |
| [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) | feat(security): browser PKCE & cross-surface enrollment API | Auth/Gateway | **Closed** (stage 5, supersedes #8672) |
| [#10275](https://github.com/zeroclaw-labs/zeroclaw/pull/10275) | refactor(security): retire Nevis/iam_policy with config shim | Auth/Config | **Closed** (stage 6) |
| [#10274](https://github.com/zeroclaw-labs/zeroclaw/pull/10274) | feat(gateway): route-layer auth with principal consumption | Gateway/Auth | **Closed** (stage 5) |
| [#10270](https://github.com/zeroclaw-labs/zeroclaw/pull/10270) | feat(cli): browserless OIDC enrollment via device grant | CLI/Auth | **Closed** (stage 5) |
| [#10268](https://github.com/zeroclaw-labs/zeroclaw/pull/10268) | feat(security): private principal memory with plane isolation | Memory/Security | **Closed** (stage 4) |

**Key advances**: The multi-user auth stack (peercred, native pairing, ssh-key, OIDC) and principal-isolated memory are now on `master`. RPC workspace confinement (S0 fix) landed via #11112. Channel plugin `provides` contract enables mirroring built-in channels.

---

## 4. Community Hot Topics — Most Active Issues
| Issue | Comments | Area | Core Need |
|-------|----------|------|-----------|
| [#10919](https://github.com/zeroclaw-labs/zeroclaw/issues/10919) | 4 | CI/Tools/Tests | **Test flakiness**: A2A and HTTP tool tests use separate locks for global proxy state → race conditions in CI. |
| [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) | 3 | Memory/Architecture (RFC) | **Knowledge graph as first-class memory**: Currently a tool; users want autonomous capture/surfacing without agent invocation. |
| [#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108) | 3 | Tools/Browser/Search | **Preserve browser/search semantics**: `map_tool_name_alias()` rewrites `browser_open`, `web_search` → `shell`, losing built-in tool behavior. |
| [#10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909) | 3 | ZeroCode/UX | **Standard text editing in composer**: Ctrl+Z, selection, cut/copy/paste broken; need reusable component vs extend debate. |
| [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) | 3 | Provider/Anthropic | **Multimodal image eviction corrupts history**: Cache prefix invalidated when images evicted, rewriting earlier messages. |
| [#10921](https://github.com/zeroclaw-labs/zeroclaw/issues/10921) | 3 | Memory/Qdrant | **Time-bounded recall omits eligible results**: `since`/`until` applied post-retrieval, high-score out-of-window points consume limit. |

**Underlying theme**: Developers are hitting **correctness boundaries** in memory, tool routing, and provider integration — signaling maturation from "feature complete" to "production reliable."

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **S0 (Security/Data Loss)** | [#11110](https://github.com/zeroclaw-labs/zeroclaw/issues/11110) | RPC workspace confinement retains retargetable cwd symlink → sandbox escape | [#11112](https://github.com/zeroclaw-labs/zeroclaw/pull/11112) ✅ **Closed** |
| **S1 (Workflow Blocked)** | [#11180](https://github.com/zeroclaw-labs/zeroclaw/issues/11180) | Flaky test: payload capture tests share hardcoded `turn_id` → cross-talk under parallel gate | [#11192](https://github.com/zeroclaw-labs/zeroclaw/pull/11192) (open) |
| **S2 (Degraded Behavior)** | [#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108) | Browser/search tools mapped to `shell`, losing semantics | — |
| **S2** | [#10921](https://github.com/zeroclaw-labs/zeroclaw/issues/10921) | Qdrant time-bounded recall drops eligible results | [#11035](https://github.com/zeroclaw-labs/zeroclaw/pull/11035), [#11143](https://github.com/zeroclaw-labs/zeroclaw/pull/11143) (open) |
| **S2** | [#10757](https://github.com/zeroclaw-labs/zeroclaw/issues/10757) | Browser probe timeout indistinguishable from missing CLI | — |
| **S2** | [#10919](https://github.com/zeroclaw-labs/zeroclaw/issues/10919) | A2A/HTTP tool tests use separate proxy locks → CI flakes | — |
| **S2** | [#11129](https://github.com/zeroclaw-labs/zeroclaw/issues/11129) | Memory content scan blocks SOP audit for text containing URL+secret-like word | — |
| **S3 (Minor/Cost)** | [#11145](https://github.com/zeroclaw-labs/zeroclaw/issues/11145) | Stream recovery skips primary after connect failure → cold-cache fallback | — |
| **P1/High** | [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) | Multimodal image eviction rewrites history, invalidates cache prefix | — |
| **P1/High** | [#10008](https://github.com/zeroclaw-labs/zeroclaw/issues/10008) | Prove wasi:http hook dials pinned address set (egress mutation test gap) | — |

**Note**: 3 S2+ bugs have open fix PRs (#11035, #11143, #11192). The S0 sandbox escape is resolved.

---

## 6. Feature Requests & Roadmap Signals
| Signal | Issue/PR | Likelihood for Next Version |
|--------|----------|----------------------------|
| **Knowledge graph as first-class memory layer** | [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) (RFC) | Medium — architectural shift, needs design consensus |
| **Enable stall watchdog by default** (`stall_timeout_secs`) | [#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) | High — conservative default, accepted, low risk |
| **Discord channel opt-out of built-in `/ask`** | [#11150](https://github.com/zeroclaw-labs/zeroclaw/issues/11150) | High — small config flag, clear use case |
| **Standard text editing in ZeroCode composer** | [#10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909) | Medium — UX polish, design comparison needed |
| **RPC parity: cron, memory, skills, personality, quickstart** | [#11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176) | High — active PR, part of v0.9.0 core-parity lane |
| **Web-search transport error redaction** | [#11147](https://github.com/zeroclaw-labs/zeroclaw/pull/11147), [#11153](https://github.com/zeroclaw-labs/zeroclaw/pull/11153) | High — security/privacy, tests ready |

**Prediction**: Next version will likely include stall watchdog default, Discord slash command opt-out, RPC parity (cron/memory/skills), and web-search error redaction. Knowledge graph RFC will remain in design.

---

## 7. User Feedback Summary — Pain Points & Use Cases
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **REPL backspace breaks on multi-byte chars** | [#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795) | CLI interactive users (CJK, emoji) — degraded daily UX |
| **ZeroCode composer lacks basic editing** | [#10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909) | Web UI users — no undo, select-all, cut; blocks adoption |
| **Browser/search tools silently become shell** | [#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108) | Agent developers — unexpected tool behavior, broken workflows |
| **Memory writes blocked by false-positive URL+secret scan** | [#11129](https://github.com/zeroclaw-labs/zeroclaw/issues/11129) | SOP authors — legitimate content rejected |
| **Multimodal history corruption with images** | [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) | Anthropic users with screenshots — cache breaks, context loss |
| **Cron jobs bypass shell approval via RPC** | [#11149](https://github.com/zeroclaw-labs/zeroclaw/pull/11149) | Security-conscious ops — pre-approval bypass fixed in PR |

**Satisfaction signals**: Auth/security stack completion (8 stacked PRs merged) addresses long-standing multi-user requests. **Dissatisfaction**: Tool routing, composer UX, and REPL encoding are daily friction points.

---

## 8. Backlog Watch — Stale but Important
| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#10008](https://github.com/zeroclaw-labs/zeroclaw/issues/10008) | 43 days | **Egress security proof**: wasi:http hook must dial pinned addresses; mutation testing gap | Open, P1, no PR |
| [#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) | 38 days | **Stall watchdog default**: prevents indefinite hangs; accepted, low risk | Open, P2, no PR |
| [#10212](https://github.com/zeroclaw-labs/zeroclaw/issues/10212) | 37 days | **Docs gap**: `switch` SOP step undocumented in book | Open, P3, no PR |
| [#10280](https://github.com/zeroclaw-labs/zeroclaw/issues/10280) | 35 days | **Web-search error normalization**: transport errors leak query URLs to model | Open, P2, test PR [#11153](https://github.com/zeroclaw-labs/zeroclaw/pull/11153) ready |
| [#10757](https://github.com/zeroclaw-labs/zeroclaw/issues/10757) | 17 days | **Browser probe error distinction**: timeout vs missing CLI — diagnostic gap | Open, medium risk |
| [#10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909) | 11 days | **ZeroCode text editing**: core UX, in-progress but design undecided | Open, P2, in-progress |

**Maintainer attention needed**: #10008 (security proof), #10168 (simple default change), #10280 (privacy fix with test ready). All are >2 weeks old with clear paths.

---

## Project Health Indicators
| Metric | Signal |
|--------|--------|
| **PR merge rate** | 11/50 (22%) closed in 24h — healthy throughput |
| **Security focus** | 8 stacked auth PRs merged + S0 fix — strong hardening |
| **Test investment** | 3 test-only PRs (#11153, #11192, #11143) — regression prevention |
| **Documentation debt** | 3 doc issues open >2 weeks — low priority but accumulating

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*