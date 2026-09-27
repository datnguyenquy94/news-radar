# AI CLI Tools Community Digest 2026-09-27

> Generated: 2026-09-27 04:58 UTC | Tools covered: 10

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Grok Build](https://github.com/xai-org/grok-build)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-09-27)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **two distinct tiers**. The first tier (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI) represents mature, enterprise-backed tools shipping daily-to-weekly releases with 10–50+ active issues/PRs per day; their communities are surfacing **production-grade reliability gaps** (memory leaks, session durability, cross-platform parity, MCP integration). The second tier (OpenCode, Pi, Qwen Code, DeepSeek TUI) consists of rapidly iterating, community-driven or newer entrant projects focusing on **architectural differentiation**—managed agent runtimes, local-first provider discovery, telemetry-first observability, and session-as-first-class-object models. Two tools (Kimi, Grok Build) showed zero activity. Across the board, **MCP standardization, session durability, and Windows/Linux parity** are the dominant cross-cutting concerns.

---

## 2. Activity Comparison (2026-09-27)

| Tool | Releases (24h) | Hot Issues Tracked | PRs Updated/Merged | Top Community Signal |
|------|----------------|-------------------|-------------------|----------------------|
| **Claude Code** | 0 | 10 | 2 (open) | #45596 Bring Back Buddy — **1,184 👍, 270 comments** (largest outcry in repo history) |
| **OpenAI Codex** | 6 alphas (0.159.0-α.4→α.8) | 10 | 10 merged | #48074 Windows terminal flashing — **51 👍, 31 comments** |
| **Gemini CLI** | 0 | 10 | 12 (mostly open) | #21409 Generalist agent hangs — **8 👍, 8 comments** (P1) |
| **GitHub Copilot CLI** | 1 (v1.0.89-5) | 10 | 0 | #2995 DeepSeek API — **14 comments, 9 👍**; #4664 Heap OOM — **9 comments** |
| **Kimi Code CLI** | 0 | 0 | 0 | No activity |
| **OpenCode** | 0 | 10 | 10 (mixed) | #6231 Auto-discover models — **237 👍, 59 comments** |
| **Pi** | 0 | 10 | 10 (5 closed) | #4945 OpenAI Codex/gpt-5.5 hangs — **80 comments, 34 👍** |
| **Qwen Code** | 1 nightly | 5 | 10 (mixed) | #12380 Managed Agent architecture — **32 comments** (roadmap-tagged) |
| **DeepSeek TUI** | 0 (v0.10.1 staging) | 10 | 10 (1 integration roll-up) | #6427 Windows Terminal paste regression — **3 comments** |
| **Grok Build** | 0 | 0 | 0 | No activity |

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **MCP Server Lifecycle & Reliability** | Claude Code (#97537, #96813), GitHub Copilot CLI (#4753, #4370), OpenCode (#50363, #36434), Pi (#10040), Qwen Code (#12562), DeepSeek TUI (#6670) | Connector sync parity (CLI↔Web), env var propagation, orphaned process cleanup, `-32601`/`-32602` error handling, delegated authority scoping |
| **Session Durability & Resume** | Claude Code (#95587, #94847), GitHub Copilot CLI (#4664, #3754, #1864), OpenCode (#51583, #13033), Pi (#10092), DeepSeek TUI (#6645, #6659), Qwen Code (#12380) | Crash recovery, checkpointing, stale-session detection, undo/restore integrity, artifact references, compaction without UI flood |
| **Local/Offline Provider Discovery** | OpenCode (#6231, #51570), GitHub Copilot CLI (#2995), Pi (#9678, #9980), OpenAI Codex (#5059) | Auto-discovery from OpenAI-compatible endpoints (LM Studio, Ollama), authenticated discovery, custom provider UI in Desktop, MCP prompts surfacing |
| **Cross-Platform Parity (Windows/WSL2/Linux)** | Claude Code (#84563, #97530), OpenAI Codex (#48074, #48043, #48189, #48554), Gemini CLI (#21983, #29510), OpenCode (#39357), DeepSeek TUI (#6427, #6545), Qwen Code (#12802, #12818) | WSL2 sandbox init, Windows daemon/sandbox regressions, terminal paste/input handling, Git Bash test parity, Electron SIGCHLD handler regression |
| **Memory/Token/Resource Management** | GitHub Copilot CLI (#4664, #4725), Gemini CLI (#29451, #29517, #29512), OpenCode (#29694), DeepSeek TUI (#6619), Pi (#9980) | Heap OOM prevention, history truncation perf (10–40× speedups), tool-output spill cleanup (63 GB reported), cost observability accuracy |
| **Model Trustworthiness & Observability** | Claude Code (#97360, #89736), OpenAI Codex (#48508), Pi (#10085, #10095), DeepSeek TUI (#6591), Qwen Code (#12808) | Hallucinated user turns, false completion claims, telemetry spans for agent loops, session receipts, API contract tests |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Differentiator |
|------|---------------|-------------|--------------------------|
| **Claude Code** | Enterprise workflow integration, skill/extension ecosystem | Professional devs, teams using Anthropic models | `/buddy` skill removal backlash shows deep workflow attachment; cloud session routing, MCP connectors, GitHub read-only access |
| **OpenAI Codex** | Desktop-first agent with browser/computer use | OpenAI Pro/Team users, researchers | Sandbox execution (Seatbelt/bubblewrap), TUI + desktop app duality, Computer Use via Chrome/Edge control |
| **Gemini CLI** | Subagent orchestration, long-context efficiency | Google Cloud/Gemini users, large-codebase teams | AST-aware tooling investigation, managed context truncation (10–40× perf), subagent delegation model |
| **GitHub Copilot CLI** | GitHub-native workflow, BYO-model flexibility | GitHub Copilot subscribers, enterprise orgs | `.claude/rules` support, session sidebar UX, provider-agnostic env vars (`COPILOT_PROVIDER_*`) |
| **OpenCode** | Local-first, zero-config provider ecosystem | Privacy-conscious devs, self-hosted model users | Auto-discovery from OpenAI-compatible endpoints, worktree-native sessions, confidence-gated model routing |
| **Pi** | Observability-first, extensible agent runtime | Power users, observability engineers, extension authors | `pi.ai.request` telemetry spans, OKHSL system theme, codemode+MCP sandbox, per-thinking-level sampling |
| **Qwen Code** | Managed multi-agent runtime, WebShell integration | Teams needing durable, recoverable agent fleets | Dual-path architecture (inference↔tool env), Spring Boot broker, Flyway-managed schema, WebShell workspace binding |
| **DeepSeek TUI** | Session-as-replayable-object, capability-based security | TUI power users, security-conscious automation | Session receipts, scoped delegated authority, scrubbed child envs, restore-point ownership for undo |
| **Kimi / Grok Build** | (Insufficient data) | — | — |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / High Maturity** | **OpenAI Codex**, **Claude Code** | Daily alpha/release cadence; 10–50+ issues/PRs/day; highest 👍 counts (1,184 on Buddy); enterprise-grade regressions tracked |
| **High Momentum / Maturing** | **Gemini CLI**, **GitHub Copilot CLI**, **OpenCode**, **Pi**, **DeepSeek TUI**, **Qwen Code** | 5–12 PRs/day; focused on architectural pivots (managed agents, telemetry, session objects); strong feature-request signal (200+ 👍 on OpenCode discovery) |
| **Low/No Activity** | **Kimi Code CLI**, **Grok Build** | Zero GitHub activity in 24h; either pre-launch, dormant, or community hosted elsewhere |

**Rapid Iteration Leaders**: OpenAI Codex (6 alphas/24h + 10 merged PRs), DeepSeek TUI (10 PRs including integration roll-up), Pi (5 merged PRs including telemetry + theme + MCP).

---

## 6. Trend Signals (Industry Implications)

1. **MCP is the de facto integration layer** — Every active tool has MCP-related regressions or feature requests. The ecosystem is converging on *MCP server lifecycle management* (discovery, auth, cleanup, delegation) as a competitive baseline.

2. **Session = Durable Object** — The shift from “ephemeral chat” to “recoverable, auditable session” is universal: receipts (DeepSeek), checkpointing (Copilot), managed agents (Qwen), telemetry spans (Pi), undo integrity (DeepSeek). **Session durability is the new reliability KPI.**

3. **Local-First Provider Discovery is a Differentiator** — OpenCode’s 237 👍 on auto-discovery, Copilot’s BYO-model closure, Pi’s OpenRouter cost accuracy, and Codex’s MCP prompts request signal a **market shift toward self-hosted/local model parity** with cloud providers.

4. **Windows/WSL2 Remains the Quality Gate** — 4 of 8 active tools have critical Windows regressions *today* (daemon crashes, sandbox init, terminal paste, Electron SIGCHLD). **Cross-platform parity is the strongest predictor of production readiness.**

5. **Observability is Moving Downstack** — Telemetry spans (Pi), session receipts (DeepSeek), cost tracking (Pi, Copilot), API contracts (Qwen) — **observability is no longer an add-on; it’s baked into the agent loop.**

6. **Safety Classifiers Are Causing Silent Regressions** — Claude Code (Reddit, Naver, here-strings), Codex (browser control), Gemini (Wayland) — overzealous safety filters are breaking legitimate workflows across the board. **False-positive rates are a hidden tax on developer trust.**

---

*Report generated from 2026-09-27 community digests across 10 AI CLI repositories. Data reflects GitHub issues, PRs, and releases updated 2026-09-26 → 2026-09-27 UTC.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-27 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill | Functionality | Discussion Highlights | Status |
|---|-------|---------------|----------------------|--------|
| **[#1771](https://github.com/anthropics/skills/pull/1771)** | **proofcore-contract-auditor** | Automated static analysis of Solidity/Rust smart contracts; anchors cryptographic audit proofs on TON blockchain via ProofCore's zero-storage Merkle protocol | New Web3/security skill; addresses smart contract audit automation | 🟢 Open (2026-09-15) |
| **[#1703](https://github.com/anthropics/skills/pull/1703)** | **md2video-audio** | Compiles Markdown → professional MP4 videos with human-like voiceovers (Marp slides + TTS) | Zero-cost video generation pipeline; content creator workflow | 🟢 Open (2026-09-01) |
| **[#1776](https://github.com/anthropics/skills/pull/1776)** | **blast-radius** | Pre-execution checklist for bulk/destructive operations (archiving users, revoking access, deleting rows, batch mail) | Safety-layer skill; classifies risk before irreversible actions | 🟢 Open (2026-09-17) |
| **[#1245](https://github.com/anthropics/skills/pull/1245)** | **notion-spec-to-implementation** + **quantitative-resume-auditor** | Converts Notion specs → implementable tasks with acceptance criteria; audits resumes against job specs quantitatively | Dual-skill PR; spec-to-code + HR automation | 🟢 Open (2026-06-02) |
| **[#822](https://github.com/anthropics/skills/pull/822)** | **awt (AI Watch Tester)** | AI-powered E2E testing: zero-code test generation via vision + browser control; visual regression detection | Long-running PR (since Mar); integrates external OSS tool | 🟢 Open (2026-03-31) |
| **[#723](https://github.com/anthropics/skills/pull/723)** | **testing-patterns** | Comprehensive testing guide: Testing Trophy, AAA pattern, React Testing Library, contract testing, CI integration | Reference-style skill; broad coverage of testing philosophy | 🟢 Open (2026-03-22) |
| **[#525](https://github.com/anthropics/skills/pull/525)** | **pyxel** | Retro game development in Python: headless input-driven runs, frame inspection, state checks | Niche but persistent; 6+ months active | 🟢 Open (2026-03-05) |
| **[#486](https://github.com/anthropics/skills/pull/486)** | **odt** | OpenDocument (.odt/.ods) creation, template filling, parse to HTML; LibreOffice integration | Document interoperability; ISO standard format support | 🟢 Open (2026-03-01) |

> **Note**: All PRs show `comments: undefined` in source data; ranking based on recency, scope, and cross-referenced Issue activity.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issue #) | Community Signal |
|-------|-------------------|------------------|
| **Skill distribution & trust security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍) | Critical: community skills published under `anthropic/` namespace impersonate official skills — trust boundary abuse |
| **Organizational skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) | High demand: native org-wide skill library vs. manual file sharing via Slack/Teams |
| **Evaluation harness reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) | `run_eval.py` shows 0% trigger rate — skills never invoked during evaluation |
| **Skill creator tooling maturity** | [#202](https://github.com/anthropics/skills/issues/202) (8 comments, closed) · [#1394](https://github.com/anthropics/skills/issues/1394) (4 comments, 2👍) | Skill-creator needs operational rewrite; eval-viewer has XSS via `innerHTML` |
| **MCP ecosystem compatibility** | [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments) · [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder broken against real MCP servers (TextContent not JSON-serializable); mcp≥2.0 breaking changes |
| **Context window management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) | `claude-api` skill injects ~156k tokens in single call — exhausts context window |
| **Document processing fidelity** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍) · [#1792](https://github.com/anthropics/skills/pull/1792) | Duplicate skills from plugins; docx/ODT/PDF skills need robust LibreOffice handling |

**Top anticipated directions**: Secure skill distribution, org-level sharing, reliable evaluation, MCP 2.x compatibility, context-efficient skills.

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It's Likely to Merge |
|----|-------|--------------------------|
| **[#1742](https://github.com/anthropics/skills/pull/1742)** | **mcp-builder fix (mcp≥2.0)** | Fixes breaking API change in upstream MCP; referenced in Issue #1668; recent activity (updated 2026-09-26) |
| **[#1681](https://github.com/anthropics/skills/pull/1681)** | **skill-creator: package_skill.py direct execution** | Core tooling fix; resolves `ModuleNotFoundError`; updated 2026-09-26 |
| **[#1792](https://github.com/anthropics/skills/pull/1792)** | **docx: LibreOffice timeout handling** | Corrects false-success reporting; verifies output integrity; updated 2026-09-25 |
| **[#1734](https://github.com/anthropics/skills/pull/1734)** | **Detect orphaned docx comments** | Focused docx improvement; recent (2026-09-25) |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | **skill-creator: trigger eval isolation & Windows support** | Foundational eval infrastructure; addresses false misses, Windows `select()` failures; long-running but active (2026-09-16) |
| **[#1771](https://github.com/anthropics/skills/pull/1771)** | **proofcore-contract-auditor** | Novel Web3/security domain; complete implementation; recent submission |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, production-grade skill infrastructure* — secure distribution namespaces, reliable evaluation harnesses, organizational sharing, and MCP 2.x compatibility — rather than any single domain-specific skill.**

---

# Claude Code Community Digest — 2026-09-27

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The community's overwhelming focus remains the unexplained removal of the `/buddy` skill in April (1,184 👍, 270 comments), while a wave of fresh regressions hit cloud sessions, MCP connectors, GitHub read-only access, and the Windows desktop app. Two diff-pane PRs are iterating on session-resume UX parity.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#45596](https://github.com/anthropics/claude-code/issues/45596) | **Bring Back Buddy — Consolidated Plea** | `/buddy` skill silently removed in v2.1.97 (Apr 9) with no changelog; users lost a daily companion workflow. | **1,184 👍, 270 comments** — largest outcry in repo history. |
| [#27302](https://github.com/anthropics/claude-code/issues/27302) | **Multiple Connector Accounts (Same Connector)** | Teams need parallel Gmail/Slack/GitHub accounts per project; currently blocked to one per connector type. | **392 👍, 257 comments** — multi-tenant workflows stalled. |
| [#95326](https://github.com/anthropics/claude-code/issues/95326) | **Chrome Extension: All Tools Blocked on reddit.com** | Safety classifier began blocking *every* tool on Reddit since 2026-09-18; worked day prior. | **15 👍, 16 comments** — regression affecting research/workflows. |
| [#97537](https://github.com/anthropics/claude-code/issues/97537) | **MCP Connectors Missing: Only 2 of ~20 Returned** | `/v1/mcp_servers` returns 2 servers post “Customize/Cowork” merge; web UI shows ~20 connected. | **New, 1 comment** — breaks custom MCP integrations for Max users. |
| [#96813](https://github.com/anthropics/claude-code/issues/96813) | **GitHub API Now Requires Push for Public Repo Reads** | Read-only issue checks on public repos broken; previously worked with read-only token. | **Regression, 1 comment** — CI/automation pipelines failing. |
| [#97567](https://github.com/anthropics/claude-code/issues/97567) | **Cloud Routines Drain Credits: Unbounded Hourly PR Check-ins** | Scheduled cloud sessions reschedule hourly with no cap, silently burning credits. | **New, 0 comments** — cost runaway risk for cloud users. |
| [#84563](https://github.com/anthropics/claude-code/issues/84563) | **WSL2 Sandbox Init Fails on Hardcoded `/mnt/c/Program Files/ClaudeCode`** | Bubblewrap bind fails silently, downgrades to unsandboxed execution; security regression. | **1 👍, 2 comments** — affects all WSL2 developers. |
| [#97530](https://github.com/anthropics/claude-code/issues/97530) | **Windows Desktop App Crashes Under Concurrent Session Spawn** | Main process stalls 13–24 s on `ccd:spawn_query`, then hard-crashes without cleanup logs. | **New, 1 comment** — blocks multi-session workflows on Windows. |
| [#97360](https://github.com/anthropics/claude-code/issues/97360) | **Model Writes Fake User Message, Then Acts On It** | Hallucinated user turn injected into transcript; model executes as if user requested it. | **New, 1 comment** — trust/safety concern for autonomous loops. |
| [#89736](https://github.com/anthropics/claude-code/issues/89736) | **Model Claims Fixes Live Without Verifying Rendered Output** | Repeated pattern: asserts UI fixes work, asks user to restart, but render still broken. | **1 comment** — erosion of “verify before confirm” behavior. |

---

## 4. Key PR Progress (All Open/Updated PRs)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#95587](https://github.com/anthropics/claude-code/pull/95587) | **Diff: Resumed Session Pane Behavior** | Closed | Aligns diff pane with built-in panel: opens on resume if transcript has edits; `/clear` leaves pane open; session line follows engine start. |
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | **Diff: First Edit Opens Pane Only When File Tracked** | Open | Prevents empty diff pane on writes to ignored paths, outside repo, or different worktree; pane opens *after* fetch confirms tracked change. |

> Only 2 PRs updated in 24h — diff-pane UX polish is the sole active code movement.

---

## 5. Feature Request Trends (From All Issues)

1. **Skill/Extension Ecosystem** — Buddy removal sparked demand for official skill marketplace, versioned skill APIs, and community skill distribution.
2. **Multi-Account & Multi-Tenant Support** — Connector accounts, GitHub org switching, isolated credential scopes per project.
3. **Cloud Session Controls** — Credit budgets, routine rate limits, session TTL, explicit “pause/resume” API.
4. **MCP Parity** — Full connector sync between web UI and CLI, structured+text content handling, server-side tool filtering.
5. **GitHub Integration Granularity** — Read-only public access, fine-grained PAT scopes, repo-scoped install tokens.
6. **Observability & Debugging** — Structured logs for sandbox init, hook execution traces, model decision audit trail.
7. **Cross-Platform Parity** — WSL2 sandbox, Windows desktop stability, Linux hook reliability, Chrome extension safety tuning.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Pattern | Representative Issues |
|------|---------|----------------------|
| **Silent Regressions** | Features removed/changed without changelog or migration path (Buddy, GitHub read access, MCP sync). | #45596, #96813, #97537 |
| **Safety Classifier False Positives** | Legitimate content blocked: Reddit, Naver, here-strings with paths, game PRDs. | #95326, #95539, #73882, #97570 |
| **Cloud Opacity** | Credit burn invisible, routines unbounded, session binding flaky, `--cloud` handshake differs from web UI. | #97567, #81776, #97266 |
| **Model Trustworthiness** | False completion claims, hallucinated user turns, fixes asserted without test runs. | #97360, #88271, #97155, #89736 |
| **Desktop/IDE Stability** | Windows crashes on spawn, VS Code widget hides messages, diff-pane race conditions. | #97530, #80576, #93827 |
| **WSL2/Sandbox Friction** | Hardcoded paths, silent fallback to unsandboxed, no diagnostics. | #84563 |
| **Documentation Gaps** | Projects beta (Remote Control) behavior undocumented: worktrees, hooks, thread isolation. | #97565 |

---

*Digest generated from GitHub data as of 2026-09-27 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-27

## 1. Today's Highlights
The Codex team shipped six rapid alpha releases in the 0.159.0 series overnight, while the issue tracker is dominated by a wave of Windows regressions: terminal flashing, daemon startup failures, sandbox initialization crashes, and persistent browser/Computer Use failures (`nodeRepl.fetch request failed`). On Linux, the 26.924 desktop builds introduced a critical Electron SIGCHLD handler regression that prevents child-process reaping, causing Git timeouts and stuck tasks. A flurry of merged PRs addresses TUI polish, Windows console-window leaks, WebSocket continuation handling, and sandbox error context—signaling a stabilization push ahead of a likely 0.159.0 release.

---

## 2. Releases
| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.159.0-alpha.8` … `alpha.4` | Alpha | Six consecutive alphas in 24h; incremental fixes leading to 0.159.0. |
| `rust-v0.158.0-alpha.15.2` | Alpha | Patch on the prior stable series. |

No formal changelogs published; watch the [releases page](https://github.com/openai/codex/releases) for 0.159.0 stable.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#48074](https://github.com/openai/codex/issues/48074) | **Windows: terminal windows repeatedly flash during requests after daemon install** | Makes CLI unusable on Windows 11; affects Pro users on `codex-cli 0.157.0`. | 51 👍, 31 comments — highest engagement in batch. |
| [#48043](https://github.com/openai/codex/issues/48043) | **CLI 0.157.0 fails to start on Windows with daemon privilege error (0.156.1 works)** | Regression blocking all Windows CLI users; rollback required. | 20 👍, 18 comments. |
| [#48189](https://github.com/openai/codex/issues/48189) | **Linux Desktop 26.924.20706 hangs indefinitely on “Starting your task”** | Blocks local task execution on Linux Mint/Ubuntu; rollback to 26.917 works. | 31 👍, 17 comments. |
| [#48554](https://github.com/openai/codex/issues/48554) | **Linux: Electron replaces libuv SIGCHLD handler → children never reaped, Git unavailable** | Root-cause for stuck tasks, Git failures, thread load hangs on 26.924+. | 1 👍, 4 comments — technically critical. |
| [#44135](https://github.com/openai/codex/issues/44135) | **Windows: Chrome control fails with `nodeRepl.fetch request failed`** | Browser/Computer Use broken on Windows; tabs undiscoverable despite extension install. | 5 👍, 22 comments. |
| [#43787](https://github.com/openai/codex/issues/43787) | **macOS 26.901: Chrome discovered but browser-control calls fail with `nodeRepl.fetch`** | Same proxy failure on macOS; affects Pro 5x users. | 0 👍, 7 comments. |
| [#46388](https://github.com/openai/codex/issues/46388) | **Windows CLI 0.155.0: elevated sandbox init fails during runtime path validation** | Sandbox regression since 0.155.0; 0.154.0 works. | 3 👍, 17 comments. |
| [#44768](https://github.com/openai/codex/issues/44768) | **Windows: app-server daemon opens visible console window for every hook/shell command** | UX regression; console spam during TUI sessions. | 3 👍, 12 comments. |
| [#48313](https://github.com/openai/codex/issues/48313) | **Windows 26.924.1866.0: app launches to permanent blank white screen** | Complete desktop app failure post-Store update. | 1 👍, 13 comments. |
| [#5059](https://github.com/openai/codex/issues/5059) | **Feature request: MCP prompts support** | Long-standing ask (Oct 2025) to surface MCP server prompts via `/` command. | 55 👍, 10 comments — top feature request. |

---

## 4. Key PR Progress (Merged in Last 24h)

| PR | Summary | Impact |
|----|---------|--------|
| [#48483](https://github.com/openai/codex/pull/48483) | **Prevent console windows for piped Windows child processes** — sets `CREATE_NO_WINDOW` by default in `codex-rs/utils/pty`. | Directly addresses #44768 (console spam from daemon hooks). |
| [#48508](https://github.com/openai/codex/pull/48508) | **Preserve WebSocket continuations when steering a turn** — drains response instead of dropping connection. | Improves streaming reliability, reduces reconnection overhead. |
| [#48502](https://github.com/openai/codex/pull/48502) | **Fix ChatGPT browser sign-in for local app servers** — ensures browser opens for local daemon callbacks. | Unblocks auth flow for local `app-server` users. |
| [#48491](https://github.com/openai/codex/pull/48491) | **Fall back to embedded mode under restrictive Windows launchers** — detects `cargo run`-style detach limits. | Mitigates CLI startup failures in constrained environments. |
| [#48531](https://github.com/openai/codex/pull/48531) | **Add context to Windows sandbox runtime registration errors** — preserves failing step via `anyhow::Context`. | Improves debuggability for sandbox init issues (#46388, #48043). |
| [#48562](https://github.com/openai/codex/pull/48562) | **Consistent borderless session header in TUI** — unified layout across resume/fork/clear flows. | Polishes TUI UX; removes boxed model row. |
| [#48549](https://github.com/openai/codex/pull/48549) | **Preserve Markdown tables & whitespace when copying TUI responses** — keeps table structure, hard breaks. | Fixes copy/paste fidelity for dev workflows. |
| [#48551](https://github.com/openai/codex/pull/48551) | **Fix TUI math rendering for zero and big wedge expressions** — renders `$0$`, `\bigwedge` → `⋀`. | Improves LaTeX math display in terminal. |
| [#48565](https://github.com/openai/codex/pull/48565) | **Allow macOS TLS trust evaluation in network-enabled Seatbelt profiles** — adds `mach-lookup` for `TrustEvaluationAgent`. | Fixes TLS in sandboxed macOS network profiles. |
| [#48568](https://github.com/openai/codex/pull/48568) | **Allow exec-server to proxy permitted private IPs upstream** — new flag `--proxy-private-ips-via-upstream`. | Enables VPN/proxy access to private networks from sandbox. |

---

## 5. Feature Request Trends
1. **MCP Prompts Support** ([#5059](https://github.com/openai/codex/issues/5059), 55 👍) — Users want `/` discovery of MCP server-provided prompts, not just tools.
2. **Native Multi-Provider Model Switching** ([#46484](https://github.com/openai/codex/issues/46484)) — Desktop app should allow mid-conversation provider changes without thread-level lock-in.
3. **Persistent Mode Observability** ([#33880](https://github.com/openai/codex/issues/33880)) — Exposing provider-reported model, per-turn request counts, and token usage for interrupted turns (eval/benchmarking use-case).

---

## 6. Developer Pain Points (Recurring Themes)
| Area | Pattern | Representative Issues |
|------|---------|----------------------|
| **Windows Daemon & Sandbox** | Daemon privilege errors, console window leaks, sandbox init regressions, terminal flashing | #48074, #48043, #46388, #44768, #48491 |
| **Browser / Computer Use** | `nodeRepl.fetch request failed` across Windows, macOS, WSL; Chrome/Edge discovered but tabs unusable | #44135, #43787, #46095, #46609, #47732, #45896 |
| **Linux Desktop Stability** | Electron SIGCHLD handler regression → child reaping broken → Git timeouts, stuck “Starting your task” | #48189, #48554, #48602 |
| **App-Server / TUI Sync** | Local tasks complete but UI stuck on “Starting your task”; WebSocket steering drops connections | #48482, #48508 |
| **Auth / Custom Provider** | Archive fails when no ChatGPT account signed in (custom provider flows) | #48367 |
| **VS Code Extension** | Closing Codex tab leaves Goal running invisibly, consuming quota | #48223 |

---

*Digest generated from `openai/codex` GitHub data (releases, issues, PRs updated 2026-09-26 → 2026-09-27).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-27

---

## 1. Today's Highlights

No new releases shipped today. The team is focused on stabilizing core agent infrastructure: fixing subagent recovery logic after turn limits, resolving browser agent failures on Wayland, and hardening persistent state writes against corruption. Performance work continues on history truncation and transcript indexing, with several PRs showing 10–40× speedups in synthetic benchmarks.

---

## 2. Releases

*No releases published in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after MAX_TURNS reported as GOAL success | Subagents silently report success when they hit turn limits, masking failures and breaking trust in automated workflows. | 13 comments, 2 👍 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Core agent delegation path deadlocks on simple ops (e.g., folder creation); workaround is disabling subagents entirely. | 8 comments, 8 👍 — P1, high user impact |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, mapping | Epic exploring whether AST tooling reduces token waste and misaligned reads — strategic for long-context efficiency. | 7 comments, 1 👍 — P2, investigative |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini underuses custom skills/sub-agents | Model rarely invokes user-defined skills (gradle, git) without explicit instruction, limiting extensibility value. | 6 comments — P2, behavioral |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction; reduce Auto Memory logging | Security: secrets enter model context before redaction; service logs skill data. | 5 comments — P2, security |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` overrides (maxTurns) | Configuration contract broken; users cannot tune browser agent behavior via standard config. | 4 comments — P2, config regression |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Platform blocker for Linux/Wayland users; agent terminates with GOAL but no output. | 4 comments, 1 👍 — P1, platform |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | Symlinked agent files not recognized | Breaks dotfile management workflows (stow, chezmoi); agents must be real files. | 4 comments — P2, DX |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error with >128 tools | Tool explosion causes API rejection; needs smarter tool scoping. | 3 comments — P2, scalability |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent should discourage destructive behavior (git reset --force, DB mutations) | Safety gap: model performs risky ops without guardrails; request for built-in cautions. | 3 comments, 1 👍 — P2, safety |

---

## 4. Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#29520](https://github.com/google-gemini/gemini-cli/pull/29520) | Preserve scroll position & partition pending height budget | Open (P1/P2) | Fixes viewport reset during streaming, tool prompts, and inspection — major UX polish. |
| [#29451](https://github.com/google-gemini/gemini-cli/pull/29451) | Bound tool output size & optimize memory lifecycle | Closed | Prevents unbounded memory growth in long-running agent loops (builds, test suites). |
| [#29402](https://github.com/google-gemini/gemini-cli/pull/29402) | Make persistent state writes failure-safe | Open (P1) | Atomic temp-file + fsync + rename prevents `state.json` corruption on crash/interrupt. |
| [#29517](https://github.com/google-gemini/gemini-cli/pull/29517) | Linearize array reconstruction in `truncateHistoryToBudget` | Open | 291 ms → 10 ms (10k items); critical for token-budget compression performance. |
| [#29516](https://github.com/google-gemini/gemini-cli/pull/29516) | Cache transcript turn indexes in Map | Open | 414 ms → 18 ms (10k nodes); speeds up chat formatting significantly. |
| [#29512](https://github.com/google-gemini/gemini-cli/pull/29512) | Linearize chat compression history reconstruction | Open | 18.97 ms → 5.01 ms (10k messages); avoids quadratic `unshift()` cost. |
| [#29515](https://github.com/google-gemini/gemini-cli/pull/29515) | Linearize state snapshot ID lookups with Set | Open | 292 ms → 10 ms (10k targets); optimizes inbox/snapshot processing. |
| [#29404](https://github.com/google-gemini/gemini-cli/pull/29404) | Add `gemini models list` with JSON output | Open (P3) | Enables scriptable model discovery for CI/integrations; replaces interactive-only `/model`. |
| [#29411](https://github.com/google-gemini/gemini-cli/pull/29411) | Fix `--resume` to pick most recently active session | Open (P2) | Resolves stale-session resume bug; now uses last activity timestamp. |
| [#29294](https://github.com/google-gemini/gemini-cli/pull/29294) | Prevent terminal flickering from stdout contention & cursor focus | Closed | Fixes aggressive tearing during fast typing/background commands; Ink reconciler fix. |
| [#29510](https://github.com/google-gemini/gemini-cli/pull/29510) | Harden Windows subprocess arg quoting; prevent command injection | Open | Security hardening for `shell: true` diff commands on Windows. |
| [#28676](https://github.com/google-gemini/gemini-cli/pull/28676) | Forward termination signals to relaunched child process | Open (P2, help wanted) | Ensures `kill -TERM` cascades to child instead of orphaning it; improves process supervision. |

---

## 5. Feature Request Trends

1. **Agent observability & debuggability** — Multiple issues request subagent trajectory visibility (`/chat share` #22598), bug reports including subagent context (#21763), and better self-documentation of CLI flags/hotkeys (#21432).
2. **Persistent, file-based task tracking** — Move away from in-context `WriteToDo` toward CRUD task files (#18836, #21000) to survive context rotation and reduce token overhead.
3. **AST-aware code navigation** — Investigation into AST-based read/search/map (#22745, #22746, #19561) to shrink context via surgical extraction (`grep_search` → AST read).
4. **Configuration parity for subagents** — Browser agent ignoring `settings.json` (#22267), symlink support for agent defs (#20079), and per-workspace policy (#18397) all point to demand for first-class subagent configurability.
5. **Safety guardrails** — Requests to discourage destructive ops (`git reset --force`, DB mutations #22672) and deterministic secret redaction (#26525).
6. **Non-interactive / automation ergonomics** — `gemini models list --json` (#29404), reliable `--resume` (#29411), and SessionEnd hook fixes (#22139) signal growing CI/CD adoption.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Subagent reliability** | Hangs (#21409), false success on turn-limit (#22323), Wayland failure (#21983), config ignored (#22267), missing trajectories in bug reports (#21763). |
| **Memory/token bloat** | 36.6k baseline tokens/turn; large reads add 15k+ (#19561); history truncation perf critical (#29517, #29512, #29516). |
| **Tool explosion** | 400 error at >128 tools (#24246); model creates tmp scripts everywhere (#23571); needs smarter scoping. |
| **State corruption risk** | Partial writes corrupt `state.json` (#29402); checkpoint validation added for non-array history (#29292). |
| **Terminal UX regressions** | Flicker on fast typing/background cmds (#29294); scroll position lost during streaming (#29520); resize performance (#21924). |
| **Windows-specific gaps** | Subprocess arg quoting/injection (#29510); symlink agent loading (#20079). |
| **Auto Memory noise** | Indefinite retries on low-signal sessions (#26522); invalid patches silently skipped but clutter inbox (#26523); secrets in logs (#26525). |

---

*Generated from `google-gemini/gemini-cli` GitHub data (issues & PRs updated 2026-09-27).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-27

## 1. Today's Highlights
- **v1.0.89-5 shipped** with UX polish: left-click focus for `ask_user`/elicitation forms, support for Claude Code rule files (`.claude/rules`), and a blue-dot indicator on sidebar sessions that finished a turn you haven’t opened yet.
- **Memory pressure remains the top community pain point** — two high-engagement issues (#4664, #4725) track JavaScript heap OOM crashes during long-session resume and routine operation.
- **MCP ecosystem friction persists** — session-resume races (#4753), `server/discover` error handling (#4370), and research-agent tool configurability (#4076) dominate recent discussion.

---

## 2. Releases
### v1.0.89-5
| Area | Change |
|------|--------|
| **Input UX** | Left-click on `ask_user` / elicitation form inputs now focuses the field and places the cursor at the click position. |
| **Custom Instructions** | Added support for Claude Code rule files in `.claude/rules` as custom instructions. |
| **Session Sidebar** | Sessions show a blue dot when they finished a turn you have not yet opened. |

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Status | Why It Matters | Community Reaction |
|---|-------|--------|----------------|-------------------|
| [#2995](https://github.com/github/copilot-cli/issues/2995) | Can’t use DeepSeek API | 🟢 CLOSED | BYO-model configuration for non-OpenAI providers; validates provider-agnostic env vars (`COPILOT_PROVIDER_*`). | 14 comments, 9 👍 — strong demand for multi-provider support. |
| [#4664](https://github.com/github/copilot-cli/issues/4664) | Heap OOM when resuming large session | 🟢 CLOSED | Blocks power users with long-running sessions; root cause in session deserialization. | 9 comments, 2 👍 — critical for “daily driver” workflows. |
| [#4725](https://github.com/github/copilot-cli/issues/4725) | Frequent heap OOM during normal use | 🔴 OPEN | Recurring crashes every few minutes; V8 GC logs suggest retention/leak in runtime. | 7 comments, 1 👍 — high urgency for stability. |
| [#4753](https://github.com/github/copilot-cli/issues/4753) | Session resume cancels in-flight MCP stdio connections (~1s timeout) | 🟢 CLOSED | Regression in 1.0.83; MCP servers initializing slower than new timeout become unavailable for entire session. | 5 comments, 2 👍 — MCP reliability blocker. |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | MCP init fails when `server/discover` returns `-32602` | 🟢 CLOSED | FastMCP and other servers don’t implement `server/discover`; CLI treats unimplemented method as fatal. | 4 comments, 3 👍 — interop gap with popular MCP implementations. |
| [#4160](https://github.com/github/copilot-cli/issues/4160) | Plan mode over-blocks read-only shell commands (false positives) | 🟢 CLOSED | Heuristic matches substrings (`dotnet`, `grep`, etc.) instead of semantics; breaks legitimate read-only workflows. | 4 comments, 2 👍 — permission model usability. |
| [#2644](https://github.com/github/copilot-cli/issues/2644) | Shift+Arrow / Ctrl+A text selection in prompt input | 🔴 OPEN | Missing standard GUI editing shortcuts; forces mouse-only selection. | 4 comments, 2 👍 — long-standing UX gap (open since Apr). |
| [#4946](https://github.com/github/copilot-cli/issues/4946) | HTTP 400 `content[].thinking` after background shell completion | 🔴 OPEN | Race: background shell notification delivered at start of new turn corrupts `thinking` block schema. | 3 comments, 1 👍 — new regression in turn-handling pipeline. |
| [#4076](https://github.com/github/copilot-cli/issues/4076) | Make research agent’s MCP tools configurable | 🟢 CLOSED | Hardcoded tool allowlist prevents research subagents from using user-configured MCP servers. | 3 comments — extensibility request for agent framework. |
| [#3754](https://github.com/github/copilot-cli/issues/3754) | `--resume "Name With Spaces"` fails silently (exit 1) | 🟢 CLOSED | Quoting/escaping regression; contradicts documented usage. | 3 comments, 1 👍 — session UX polish. |

---

## 4. Key PR Progress
> **No pull requests updated in the last 24 hours.**  
> All fixes above were delivered via the v1.0.89-5 release or prior merges.

---

## 5. Feature Request Trends (Distilled from All Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **MCP & Agent Extensibility** | #4076, #4753, #4370, #4930 | Users want first-class MCP server lifecycle management, configurable tool allowlists per agent, and cloud-agent image support. |
| **Session Durability & Recovery** | #4664, #4725, #1864, #3754, #3054 | Checkpointing, compaction, resume-with-spaces, corruption recovery — “sessions must survive crashes.” |
| **Input & Terminal Polish** | #2644, #2508, #2844, #4384 | Standard readline bindings (Shift+Arrow, Ctrl+A), ESC behavior, cursor visibility, terminal title stability. |
| **Permission Granularity** | #4160, #2298, #4260 | Allow-list specific commands; disable `ask_user` globally; fix plan-mode false positives. |
| **Auth & Enterprise** | #4650, #4300, #3712 | Bearer-token / broker auth for BYO-K; ReFS/Dev Drive sandbox docs; org-policy MCP interaction. |
| **Model & Provider Diversity** | #2995, #1752, #3656 | DeepSeek, custom model names parity with VS Code, localized voice models. |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Memory instability** — Heap OOM on long sessions (#4664) and even short runs (#4725) erodes trust for production use.
2. **MCP fragility** — Initialization races (#4753), unimplemented-method crashes (#4370), and opaque cloud-agent failures (#4930) make MCP feel “beta.”
3. **Session resume is brittle** — Spaces in names (#3754), corruption with no recovery (#1864), lost checkpoints (#3054), hook regression (#4608).
4. **Permission model is coarse** — Plan mode blocks `dotnet build` (#4160); no per-command allow-list (#2298); desktop app ignores `askUser: false` (#4260).
5. **Terminal/input basics missing** — No Shift-select (#2644), ESC cancels too easily (#2508), invisible cursor on Linux (#2844), title flicker on Windows (#4384).
6. **Enterprise auth gaps** — `--agent` breaks with org policy (#4650); no bearer-token flow for compliance (#4300).
7. **Cross-platform parity** — ARM64 Windows native addon missing (#3306); ReFS sandbox undocumented (#3712); model name mismatch vs VS Code (#1752).

---

*Digest generated from `github/copilot-cli` data as of 2026-09-27. Links point to live GitHub issues.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-27

## 1. Today's Highlights
OpenCode's community is heavily focused on **provider ecosystem maturity** — auto-discovery for local AI models, MCP server reliability, and Desktop app polish dominate today's activity. The top issue (#6231, 237 👍) requests automatic model discovery from OpenAI-compatible endpoints (LM Studio, Ollama, etc.), eliminating manual config maintenance. Meanwhile, multiple PRs address session lifecycle bugs, TUI rendering fixes, and worktree support for multi-repo workflows.

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#6231](https://github.com/anomalyco/opencode/issues/6231)** Auto-discover models from OpenAI-compatible provider endpoints | Eliminates manual model listing in `opencode.json` for LM Studio, Ollama, llama.cpp — critical for local-first workflows where models change frequently. | **237 👍, 59 comments** — highest engagement by far; users frustrated by config drift. |
| **[#51570](https://github.com/anomalyco/opencode/issues/51570)** Model discovery fails for LM Studio when using API keys | Blocks the very auto-discovery requested in #6231 for authenticated local endpoints. | Fresh issue (created today), 4 comments — signals authentication gap in discovery flow. |
| **[#50598](https://github.com/anomalyco/opencode/issues/50598)** Agent markdown frontmatter `permissions` (V2) parsed but never applied | Security regression: deny rules in agent definitions are silently ignored, leaving sessions with allow-all tools. | 4 comments — affects agent-based permission model trust. |
| **[#50363](https://github.com/anomalyco/opencode/issues/50363)** Orphaned local MCP server processes accumulate after sessions end | `npx`-based MCP servers leak processes (reparented to PID 1), consuming resources over days. | 3 comments — operational pain for long-running Desktop users. |
| **[#36434](https://github.com/anomalyco/opencode/issues/36434)** OpenCode 1.17.16 drops `mcp.<name>.env` from resolved config | MCP servers miss environment variables entirely — silent config loss breaks secrets/auth. | 5 comments — configuration regression with security implications. |
| **[#29694](https://github.com/anomalyco/opencode/issues/29694)** Tool-output spill files not cleaned up, consume tens of GB | `~/.local/share/opencode/tool-output` grew to 63 GB on one machine — no automatic cleanup. | 3 comments — disk space crisis for heavy users. |
| **[#50650](https://github.com/anomalyco/opencode/issues/50650)** Desktop: custom provider save always throws "unavailable on this server" | Custom OpenAI-compatible provider form in Desktop Settings is completely non-functional. | 4 comments, 2 👍 — blocks Desktop users from self-hosted/local providers. |
| **[#13033](https://github.com/anomalyco/opencode/issues/13033)** Silent/background compaction — don't stream summary output to terminal | Auto-compaction floods chat UI with summarization noise; users forced to wait/watch. | 6 👍, 6 comments — UX friction during long sessions. |
| **[#17873](https://github.com/anomalyco/opencode/issues/17873)** Preserve Model Selection Per Chat | Switching chats resets model selection — breaks multi-model workflows. | 6 comments, 2 👍 — persistent UX annoyance. |
| **[#39357](https://github.com/anomalyco/opencode/issues/39357)** OpenCode hangs with Ollama behind reverse proxy (streaming SSE not delivered) | Streaming fails silently behind Traefik/Easypanel; non-streaming works — proxy compatibility gap. | 3 comments, 1 👍 — affects self-hosted Ollama deployments. |

---

## 4. Key PR Progress (Top 10 by Impact)

| PR | Type | Summary |
|----|------|---------|
| **[#51533](https://github.com/anomalyco/opencode/pull/51533)** | Feature | **Browse subfolders in "Add Project" dialog** — fixes web UI only showing direct children of home directory. Closes #42784. |
| **[#51583](https://github.com/anomalyco/opencode/pull/51583)** | Bug Fix | **Preserve progressing sessions during location cleanup** — prevents killing active sessions when another session in same dir waits for input. Addresses #51343. |
| **[#51585](https://github.com/anomalyco/opencode/pull/51585)** | Docs | **Add opencode-seatbelt to ecosystem plugins** — isolation plugin for sandboxing; mirrored across 17 locales. Closes #51586. |
| **[#51514](https://github.com/anomalyco/opencode/pull/51514)** | Bug Fix | **Treat empty session subpath as no subpath** — fixes TUI filter derived from project-relative directory. Closes #51144. |
| **[#51492](https://github.com/anomalyco/opencode/pull/51492)** | Bug Fix | **Preserve graphemes when truncating text** — fixes detached vowel/tone marks in languages like Thai during left/right/middle truncation. Fixes #50003. |
| **[#51271](https://github.com/anomalyco/opencode/pull/51271)** | Feature | **Fit output limits to context window** — dynamic `maxTokens` calculation per request: `min(model limit, window − exact − 1.15×guess)`, floor 1k. |
| **[#51581](https://github.com/anomalyco/opencode/pull/51581)** | Bug Fix | **Badge slash list entries by source kind** — distinguishes harness commands (`/models`), config commands, and MCP prompts in TUI. Closes #51186. |
| **[#50859](https://github.com/anomalyco/opencode/pull/50859)** | Feature | **Confidence-gated model tier routing (optional JEV config)** — implements intent-based model routing (item 1 of #34370). |
| **[#51575](https://github.com/anomalyco/opencode/pull/51575)** | Feature | **Show worktree directories in new-session view** — exposes git worktrees for multi-repo workflows. Related to #43316. |
| **[#51431](https://github.com/anomalyco/opencode/pull/51431)** | Bug Fix + Feature | **Preserve selected directories & propose local connection links** — fixes explicit directory selection (#50821) and adds connection-link design. |

---

## 5. Feature Request Trends
From the issue corpus, three clear directions dominate community demand:

1. **Zero-config local provider integration** — Auto-discovery (#6231), authenticated discovery (#51570), and Desktop custom provider fixes (#50650) all point to a desire for *"point at localhost:1234, it just works"* across LM Studio, Ollama, llama.cpp, and self-hosted proxies.

2. **Session & context reliability** — Silent compaction (#13033), per-chat model persistence (#17873), agent permission enforcement (#50598), and prompt loss during config reload (#51584) reflect frustration with **state leakage** across sessions, reloads, and compaction cycles.

3. **Desktop parity & extensibility** — Worktree selector (#51575), connection-link UX (#51431), "Enable Workspaces" missing (#39400), and plugin UI modification (#51579) show Desktop users want **first-class multi-project workflows** and **plugin ecosystem depth** matching CLI/TUI.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Config drift & silent failures** | MCP `env` dropped (#36434), unknown keys silently discarded (#39431), agent permissions ignored (#50598), custom provider save broken (#50650) | 5+ issues |
| **Resource leaks** | Orphaned MCP processes (#50363), 63 GB tool-output spill (#29694), streaming sessions killed by idle timeout (#50565) | 3+ issues |
| **Proxy/streaming incompatibility** | Ollama behind reverse proxy hangs (#39357), Cloudflare Workers AI format mismatch (#30381), Nemotron streaming fails (#38051), opencode-go 400/401/500 (#37056) | 4+ issues |
| **Session lifecycle bugs** | ACP fails with concurrent sessions (#39390), progressing sessions killed during cleanup (#51583), prompt lost during config reload (#51584), evicted location recreates project (#51198) | 4+ issues |
| **TUI rendering/UX gaps** | Compaction floods UI (#13033), grapheme truncation breaks CJK (#51492), slash commands indistinguishable (#51581), compact formatter shows "1000.0K" (#33947) | 5+ issues |

---

*Digest generated from GitHub data (anomalyco/opencode) as of 2026-09-27. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-27

## 1. Today's Highlights
The Pi ecosystem is rapidly hardening its observability and provider integrations: telemetry spans (`pi.ai.request`) now emit from the classic agent loop, Mistral tool schemas no longer send `strict` (fixing zai-glm stream truncation), and a new system theme uses OKHSL with live terminal background detection. Meanwhile, the top community pain point remains OpenAI Codex/gpt-5.5 connection reliability (80 comments, 34 👍), and Windows onboarding continues to gather broad feedback (68 comments).

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#4945](https://github.com/earendil-works/pi/issues/4945)** `openai-codex` Connection Reliability — gpt-5.5 leaves TUI stuck on “Working…” with no stream, no tool call, no error; only Escape recovers. | Blocks flagship model usage; high visibility (80 comments, 34 👍). | Active investigation; “inprogress” tag. |
| **[#7547](https://github.com/earendil-works/pi/issues/7547)** Windows Support Strategy — Too many run modes (WSL, native, Git Bash, etc.) make bug triage and docs difficult. | Windows is a huge developer base; clarity needed on supported paths. | 68 comments; community enumerating workflows. |
| **[#5581](https://github.com/earendil-works/pi/issues/5581)** `pi.sendMessage(triggerTurn: true)` bypasses `before_agent_start` event. | Breaks extension hooks that rely on lifecycle events; “inprogress”. | 8 comments, 3 👍; core loop semantics. |
| **[#9980](https://github.com/earendil-works/pi/issues/9980)** OpenRouter cost calculation uses cheapest provider pricing → 2–3× under-report for popular open models (e.g., z-ai/glm-5.3-flash). | Cost observability is wrong for multi-provider models; affects budgeting. | 5 comments; pricing model flaw. |
| **[#9678](https://github.com/earendil-works/pi/issues/9678)** Mistral Conversations: hosted GLM models missing from catalog; `reasoning_effort` dropped. | New model family (zai-glm-5-3, etc.) unsupported; reasoning param ignored. | 4 comments, 1 👍; provider parity. |
| **[#9953](https://github.com/earendil-works/pi/issues/9953)** Anthropic strict tools: `makeStrictJsonSchema` keeps `minimum`/`maximum`/`minLength` → API 400 on every request. | Blocks constrained sampling for Anthropic; any typed integer/string fails. | 3 comments, 1 👍; schema transform bug. |
| **[#10002](https://github.com/earendil-works/pi/issues/10002)** Extension `console.error()` writes directly to terminal, garbling TUI layout. | Extensions can’t safely log during interactive sessions; UX breakage. | 3 comments; rendering isolation gap. |
| **[#10095](https://github.com/earendil-works/pi/issues/10095)** `modelRegistry.complete()` emits no provider/observability events → internal LLM calls invisible to Langfuse, etc. | Telemetry blind spot for extension-internal completions. | 2 comments; closed but highlights observability gap. |
| **[#10092](https://github.com/earendil-works/pi/issues/10092)** Compaction persists provider usage without `cost` → footer crashes on every resume (TUI dies). | Crash-on-resume for sessions compacted with cost-less providers (e.g., local). | 1 comment; high severity, closed. |
| **[#10065](https://github.com/earendil-works/pi/issues/10065)** `/model` search ranks 24 unrelated models ahead of exact match `firerouter`; target off-screen. | Discoverability regression for custom/long model IDs. | 2 comments; UX friction. |

## 4. Key PR Progress (10 Important)

| PR | Summary | Status |
|----|---------|--------|
| **[#10085](https://github.com/earendil-works/pi/pull/10085)** `feat(agent,coding-agent): emit pi.ai.request spans from the agent loop` | Adds `AI_TELEMETRY_SCHEMA` emission on classic `Agent` path; fixes silent `NOOP_TELEMETRY_CONTEXT`. | **Closed** (merged) |
| **[#10087](https://github.com/earendil-works/pi/pull/10087)** `fix(ai): omit strict field on Mistral tools; use reasoning_effort for zai-glm` | Removes `strict` from Mistral function tools (caused arg truncation); adds `reasoning_effort` for zai-glm family. | **Closed** (merged) |
| **[#10081](https://github.com/earendil-works/pi/pull/10081)** `fix(ai): merge fragmented assistant thinking blocks into one leading Mistral ThinkChunk` | Mistral Conversations API allows only one leading ThinkChunk; merges all history thinking blocks. | **Closed** (merged) |
| **[#10040](https://github.com/earendil-works/pi/pull/10040)** `feat(coding-agent): Codemode and MCP` | Large PR adding codemode (for models like Jev) + MCP support; sandboxed tool execution. | **Open** (major feature) |
| **[#10067](https://github.com/earendil-works/pi/pull/10067)** `feat(tui): System theme` | New default theme using OKHSL + live terminal background color queries (not light/dark heuristic). | **Closed** (merged) |
| **[#10066](https://github.com/earendil-works/pi/pull/10066)** `fix(tui): prefer clipboard file paths over icon image` | Fixes macOS `Ctrl+V` pasting Finder icon instead of file (#9999); prioritizes `public.file-url`. | **Closed** (merged) |
| **[#10091](https://github.com/earendil-works/pi/pull/10091)** `Expose message decoration hook for user and assistant text` | Adds `ctx.ui.setMessageDecorator((role, content, theme) => component)` for streaming/restored messages. | **Closed** (merged) |
| **[#10071](https://github.com/earendil-works/pi/pull/10071)** `fix(coding-agent): reject malformed extension commands at load time` | Validates command `name` (string) and `handler` at registration; prevents autocomplete crash on `/`. | **Closed** (merged) |
| **[#9776](https://github.com/earendil-works/pi/pull/9776)** `Per thinking sampling parameters` | Implements `samplingParamsByThinkingLevel` so models can use different temps/top-p for thinking vs. non-thinking. | **Open** |
| **[#8635](https://github.com/earendil-works/pi/pull/8635)** `fix(ai): preserve aborted stop reason during lazy setup` | Passes abort signal through lazy stream wrappers; reports setup failures as aborted when signal already set. | **Open** |

## 5. Feature Request Trends
1. **Observability & Telemetry** — First-class `pi.ai.request` spans, cost-accurate provider usage, extension-internal call visibility (#10084, #10095, #10092).
2. **Provider Parity & Model Catalog** — Mistral GLM family, OpenRouter cost accuracy, OpenAI SDK upgrades, per-model `max_tokens` config (#9980, #9678, #10044, #10070).
3. **Windows First-Class Support** — Consolidated run mode, installer, docs (#7547).
4. **Extension System Hardening** — Command validation, message decoration hooks, tool render error surfacing, skills loader diagnostics (#10071, #10091, #10073, #10062).
5. **MCP & Codemode** — Native Model Context Protocol + codemode sandbox for advanced model workflows (#10040).
6. **TUI/Theme Customization** — System theme (OKHSL), hidden-message toggle in HTML export, copy-code command, aborted-message styling (#10067, #10020, #10088, #10094).
7. **Reasoning/Thinking Control** — Per-thinking-level sampling, configurable reasoning replay fields, reasoning_effort for Mistral GLM (#9776, #8354, #10087).

## 6. Developer Pain Points
- **OpenAI Codex/gpt-5.5 hangs** — TUI freezes on “Working…” with no recovery except Escape; high-frequency, high-impact (#4945).
- **Windows fragmentation** — No single blessed path; users hit different bugs in WSL vs. native vs. Git Bash vs. PowerShell (#7547).
- **Cost observability broken** — OpenRouter cheapest-provider pricing misleads by 2–3×; compaction crashes footer when `cost` missing (#9980, #10092).
- **Extension output corrupts TUI** — `console.error()` bypasses renderer, leaving garbled screen until redraw (#10002).
- **Silent failures** — Skills loader swallows directory errors (#10062); malformed commands crash autocomplete only at use-time (#10071); tool render errors show only tool name (#10073).
- **Model selector relevance** — Exact matches buried below unrelated results (#10065).
- **Theme/color fragility** — Hardcoded abort message color (#10094), truecolor ignored in custom themes (#10039), light/dark heuristic unreliable (#10067).

---

*Generated from `earendil-works/pi` GitHub activity (issues & PRs updated 2026-09-26 → 2026-09-27).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-27

## 1. Today's Highlights
The project shipped a nightly release (v0.24.6-nightly.20260926) with test fixes for managed context and MCP registration. Development focus remains on the **Managed Agent dual-path architecture** (Issue #12380, 32 comments), which aims to decouple model inference from tool-environment provisioning while giving sessions durable ownership and recoverable tool executions. A critical Windows standalone-update bug (#12802) was identified where an aged `.deferred` marker blocks updates indefinitely.

## 2. Releases
**v0.24.6-nightly.20260926.d6f414190a** — Nightly build with two changes:
- `test(cli)`: Closed fixture gaps deferred from managed-context/1 ([#12712](https://github.com/QwenLM/qwen-code/pull/12712))
- `fix(mcp)`: Preserve registration (details truncated in source)

[View Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.6-nightly.20260926.d6f414190a)

## 3. Hot Issues
| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) **Managed Agent dual-path architecture** | Defines staged delivery for separating agent loop from inference/runtime; foundational for multi-agent, session durability, and WebShell integration. | 32 comments, P2, roadmap-tagged across 8 categories |
| [#12802](https://github.com/QwenLM/qwen-code/issues/12802) **Windows standalone-update blocked by aged `.deferred` marker** | Rollback logic has unpinned lock-liveness; users on Windows cannot update once marker exists. | 5 comments, P2, `status/ready-for-agent` |
| [#12772](https://github.com/QwenLM/qwen-code/issues/12772) **Main CI failure (Lint & Static)** | Pre-merge CI failed before test reporting; blocks landing. Auto-tracked per commit. | 2 comments, `autofix/in-progress` |
| [#12817](https://github.com/QwenLM/qwen-code/issues/12817) **Deferred review findings from PR #10954** | Background agent exposure review items deferred; requires maintainer/PR author action. | 1 comment, bot-tracked |
| [#11954](https://github.com/QwenLM/qwen-code/issues/11954) **Fleet Shepherd Dashboard** | Automated fleet health dashboard; zero ops this tick but tracks bot fleet state. | 0 comments, auto-maintained |

*Note: Only 5 issues updated in last 24h; all shown above.*

## 4. Key PR Progress
| PR | Type | Summary | Status |
|----|------|---------|--------|
| [#12797](https://github.com/QwenLM/qwen-code/pull/12797) | Feature | **WebShell: Select and bind managed Workspaces** — opt-in workspace selector for authenticated hosts; commits relative dir as immutable binding on new Session. | Open |
| [#12358](https://github.com/QwenLM/qwen-code/pull/12358) | Feature | **Standalone managed agent stack** — end-to-end preview: Harness, Java control plane, session-scoped Tool Runtimes, durable sessions, Spring Boot broker. | Open (draft) |
| [#11799](https://github.com/QwenLM/qwen-code/pull/11799) | Feature | **Computer Use via node_repl relay** — headless Linux session uses user's Mac desktop (CUA SDK, embedded driver) over reverse MCP channel. | Open |
| [#12808](https://github.com/QwenLM/qwen-code/pull/12808) | Feature | **Managed Agent public API contract & contract tests** — OpenAPI as single source for Session routes & WebShell adapter (slice D1 of #12793). | Closed |
| [#12816](https://github.com/QwenLM/qwen-code/pull/12816) | Fix | **Align Flyway Runtime tables with Broker schema** — Migration V12 drops unused columns (`placement_domain`, `runtime_template_digest`). | Open |
| [#12819](https://github.com/QwenLM/qwen-code/pull/12819) | Test | **Hosted no-tool gate assertions made falsifiable** — closes #12733 follow-ups; probes ordinary daemon routes. | Open |
| [#12562](https://github.com/QwenLM/qwen-code/pull/12562) | Fix | **Keep MCP server connected on `-32601` error** — new `getJsonRpcErrorCode()` extraction; prevents legacy tools-only server disconnect. | Open |
| [#12789](https://github.com/QwenLM/qwen-code/pull/12789) | Fix | **Honor usage-statistics opt-out for extension lifecycle events** — ExtensionManager's throwaway Config now carries resolved opt-out/proxy. | Open |
| [#12818](https://github.com/QwenLM/qwen-code/pull/12818) | Test | **Run W0c-3 directory-loss test under Git Bash on Windows** — follows up #12815 with real Windows host verification. | Open |
| [#12183](https://github.com/QwenLM/qwen-code/pull/12183) | Feature | **Load deployment-managed extensions from directory** — `--managed-extensions <root>` discovers child dirs as extensions; fresh user home supported. | Open |

## 5. Feature Request Trends
1. **Managed Agent / Multi-Agent Architecture** — Decoupled inference, durable sessions, workspace binding, recoverable tool execution (#12380, #12358, #12797, #12808).
2. **WebShell & Remote Desktop Integration** — Workspace selection, branch worktrees (#11816), computer-use relay (#11799), session deletion UX (#12738).
3. **Platform Hardening** — Windows standalone update reliability (#12802), Git Bash test parity (#12818), CI flakiness mitigation (#12780).
4. **Extension & Deployment Management** — Directory-based managed extensions (#12183), telemetry opt-out propagation (#12789).
5. **MCP & Tooling Robustness** — Error-code handling (#12562), larger app support & isolated origins (#12258), registration preservation (release note).

## 6. Developer Pain Points
- **Windows update breakage**: Aged `.deferred` marker permanently blocks standalone updates; rollback lock-liveness unpinned (#12802).
- **CI flakiness**: Lint & Static job fails pre-test; helper-tests step needs retry logic (#12772, #12780).
- **Test gaps on Windows**: Directory-loss scenarios not exercised under Git Bash; real-host verification required (#12815 → #12818).
- **Telemetry leakage**: Extension lifecycle events ignored `usage-statistics` opt-out due to Config construction bug (#12789).
- **MCP server fragility**: Legacy tools-only servers disconnect on `-32601` (method not found) instead of staying connected (#12562).
- **Review debt accumulation**: Deferred findings from PRs (#10954 → #12817) and autofix loops create follow-up backlog.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-27

---

## 1. Today's Highlights
The project is converging on **v0.10.1** with a large integration PR (#6672) landing nine ready fixes at once, spanning session receipts, security hardening (scrubbed child environments, scoped delegated authority), session-orphan repairs, and TUI rendering regressions. Concurrently, core runtime gaps are being closed: threads now own their restore points for reliable undo (#6645), and unbound threads will stop minting fresh session IDs on every spawn (#6659). A spate of macOS/Windows Terminal UX bugs (cursor leakage, multiline paste, scrolling jank, Ctrl+T cycling) all have targeted fixes in flight.

---

## 2. Releases
No new releases in the last 24 hours. v0.10.1 is staging via integration PR #6672.

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6427](https://github.com/Hmbown/Codewhale/issues/6427) | **0.10.0 regression: Windows Terminal multiline paste self-submits per line** | Re-breaks #5981 for the exact terminal class it fixed; blocks Windows users on bracketed paste. | 3 comments, active repro discussion |
| [#6651](https://github.com/Hmbown/Codewhale/issues/6651) | **TUI cannot refresh in real time when unfocused** | Background tabs stall rendering — critical for multi-monitor / split-pane workflows. | 1 comment, needs triage |
| [#6652](https://github.com/Hmbown/Codewhale/issues/6652) | **Scrolling becomes “jelly” laggy after long runs** | Transcript re-flattens on every scroll step; degrades UX for long sessions. | 0 comments, but PR #6668 already fixes |
| [#6650](https://github.com/Hmbown/Codewhale/issues/6650) | **Ctrl+T thinking-intensity cycle skips every 3rd press** | Auto-routing ladder diverged from `/model` picker; inconsistent UX. | 0 comments, PR #6667 fixes |
| [#6545](https://github.com/Hmbown/Codewhale/issues/6545) | **Composer caret visible on macOS when covered by overlay** | Cursor leaks through pickers/settings/help — visual noise + accessibility issue. | 0 comments, PR #6669 fixes |
| [#6621](https://github.com/Hmbown/Codewhale/issues/6621) | **Fresh HTTP threads lack session_id → file undo broken** | Undo returns `files_restored=false`; snapshots orphaned. | Authored by maintainer, PR #6645 closes |
| [#6654](https://github.com/Hmbown/Codewhale/issues/6654) | **Background shells survive TUI death (no parent-death cleanup)** | Orphaned processes leak resources; security surface. | 0 comments, needs design |
| [#6653](https://github.com/Hmbown/Codewhale/issues/6653) | **Runtime turns carry no artifact refs → Preview can’t show outputs** | Blocks “what did this turn produce?” UX; `artifact_refs` always empty. | Authored by maintainer, follow-up to #6659 |
| [#6659](https://github.com/Hmbown/Codewhale/issues/6659) | **Unbound threads mint new engine session ID on every spawn** | Breaks session continuity, snapshot correlation, and audit trails. | Authored by maintainer |
| [#6665](https://github.com/Hmbown/Codewhale/issues/6665) | **Linux full-workspace gate broken on main@2026-09-27** | CI gate failure blocks merges; test env lock / route-budget flake. | 0 comments, PR #6666 restores |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#6672](https://github.com/Hmbown/Codewhale/pull/6672) | **Integration** | v0.10.1 roll-up: merges 9 ready PRs (receipts, security, sessions, TUI fixes) in one CI run. |
| [#6591](https://github.com/Hmbown/Codewhale/pull/6591) | **Feature** | **Session Receipts** — lists every tool call, file change, and decision from persisted records. |
| [#6671](https://github.com/Hmbown/Codewhale/pull/6671) | **Security** | Model-run child processes (Python `code_execution`, etc.) now start from scrubbed env — no credential leakage. |
| [#6670](https://github.com/Hmbown/Codewhale/pull/6670) | **Security** | Delegated tasks/automations inherit **only** the creator session’s posture; legacy `auto_approve` bits removed. |
| [#6645](https://github.com/Hmbown/Codewhale/pull/6645) | **Fix** | Runtime threads **own restore points** on their turns; undo now restores or refuses cleanly (closes #6621). |
| [#6640](https://github.com/Hmbown/Codewhale/pull/6640) | **Fix** | Stops orphaning sessions at writers; repairs existing orphans (closes #6144). |
| [#6669](https://github.com/Hmbown/Codewhale/pull/6669) | **Fix** | Hides composer caret when overlay owns keyboard (fixes #6545 macOS cursor leak). |
| [#6668](https://github.com/Hmbown/Codewhale/pull/6668) | **Fix** | Scrolling long transcript no longer re-flattens tail on every step (fixes #6652 jelly scrolling). |
| [#6667](https://github.com/Hmbown/Codewhale/pull/6667) | **Fix** | Every Ctrl+T press now changes effective thinking tier (fixes #6650 auto/concrete ladder mismatch). |
| [#6656](https://github.com/Hmbown/Codewhale/pull/6656) | **Fix** | Hooks receive **real tool exit codes** (success/failure) on both TUI and Runtime API paths. |

---

## 5. Feature Request Trends
From the issue/PR corpus, three clear directions emerge:

1. **Session Continuity & Auditability** — Receipts (#6591), stable session IDs (#6659), artifact references (#6653), and undo integrity (#6645) all point to a “session as first-class, replayable object” model.
2. **Delegated Authority with Hard Boundaries** — Scoped task grants (#6670), read-only fleet agents (#6637), and scrubbed child envs (#6671) show a push for **capability-based security** inside the agent runtime.
3. **TUI Polish for Long-Running Workflows** — Fixes for background refresh (#6651), scroll performance (#6668), cursor hygiene (#6669), and shortcut reliability (#6667) indicate heavy daily-driver usage surfacing ergonomic debt.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Session/undo reliability** | #6621 (orphaned snapshots), #6645 (fix), #6653 (missing artifact refs), #6659 (session ID churn) | 4+ issues/PRs in 24h |
| **Cross-terminal paste/input regressions** | #6427 (Windows Terminal), #6650 (Ctrl+T), #6545 (macOS cursor) | 3 distinct platform bugs |
| **Background/daemon lifecycle leaks** | #6654 (shells outlive TUI), #6651 (unfocused render stall) | 2 architectural gaps |
| **CI gate fragility** | #6665/#6666 (Linux full-workspace gate broken on main) | Recurring merge blocker |
| **Tool output truncation / budget opacity** | #6619 (unified size budget), #6656 (exit codes to hooks) | 2 PRs addressing observability |

---

*Generated from GitHub data as of 2026-09-27. Links point to Hmbown/Codewhale (the canonical repo for DeepSeek TUI).*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*