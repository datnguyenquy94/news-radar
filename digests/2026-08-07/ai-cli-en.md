# AI CLI Tools Community Digest 2026-08-07

> Generated: 2026-08-07 03:09 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Ecosystem (2026-08-07)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **mature, enterprise-grade platforms** (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI) shipping weekly releases with plugin ecosystems and collaboration features, and **rapidly iterating challengers** (OpenCode, Pi, Qwen Code, DeepSeek TUI, Kimi) focusing on TUX polish, multi-agent orchestration, and provider diversity. A clear convergence is emerging around **persistent session management, MCP/ACP protocol adoption, and terminal-native UX** as table stakes. However, stability regressions—particularly around context compaction, permission systems, and cross-platform terminal rendering—remain the dominant friction across *all* tools, indicating the ecosystem is still in a "hardening" phase rather than feature saturation.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues | Active PRs | Community Signal (Top Issue 👍) | Primary Focus |
|------|----------------|------------|------------|----------------------------------|---------------|
| **Claude Code** | 0 | 10 | 3 (plugin tooling) | 72 👍 (TUI copy-paste) | Stability regressions (WSL2, perms, Cowork) |
| **OpenAI Codex** | **1** (v0.147.0) | 10 | **18 closed** | 933 👍 (Linux desktop app) | Plugin system, conversation sections, MCP hardening |
| **Gemini CLI** | **2** (nightly + preview) | 10 | 10 | 8 👍 (generalist agent hang) | Subagent reliability, eval infra, memory system |
| **GitHub Copilot CLI** | **1** (v1.0.79-6 patch) | 10 | 0 (internal) | 7 👍 (NixOS bash broken) | MCP on non-GH remotes, session resume OOM |
| **Kimi Code CLI** | 0 | 8 | 3 (2 competing fixes) | 20 comments (memory system) | Silent file corruption, context budget, VSCode parity |
| **OpenCode** | 0 | 10 | **10** (46 issues closed) | 118 👍 (Agent Teams) | Multi-agent orchestration, desktop parity, compaction |
| **Pi** | **1** (v0.84.0 fullscreen TUI) | 10 | 10 | 15 👍 (auto-compaction failure) | TUI polish, harness v2, provider diversification |
| **Qwen Code** | **2** (v0.21.7 + live-host) | 3 | 10 | 2 comments (TUI flicker) | Review tooling, daemon isolation, terminal robustness |
| **DeepSeek TUI** | **1** (v0.9.4 via 77-commit train) | 10 | 10 | 2 comments (multi-provider keys) | Runtime API, MCP/ACP parity, subagent resilience |
| **Grok Build** | 0 | — | — | — | No activity |

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **MCP/ACP Protocol Maturity** | Codex, Copilot CLI, OpenCode, Pi, DeepSeek TUI, Qwen Code | Registry discovery, OAuth persistence, tool ordering determinism, stdio server lifecycle, cross-session isolation |
| **Persistent Session & Context Management** | *All 9 active tools* | Cross-workspace session listing (Gemini, OpenCode), resume without OOM (Copilot, OpenCode), compaction reliability (Claude, Pi, OpenCode), subagent checkpointing (DeepSeek, OpenCode) |
| **Multi-Agent / Subagent Orchestration** | Claude Code (Cowork), Codex (subagents), Gemini (subagents), OpenCode (Agent Teams #12661), DeepSeek (workflow/subagent), Pi (harness v2) | Session continuation, depth ceiling enforcement, goal-loop observability, unauthorized execution prevention |
| **Terminal-Native UX Parity** | *All tools* | Copy-paste fidelity (Claude 121 👍, Codex, Copilot), scrollback/history (Copilot, Pi, Qwen), mouse/touch support (Pi, DeepSeek), fullscreen/sticky layouts (Pi, Qwen), tmux/Windows color correctness (Copilot, Claude) |
| **Provider Diversity & Credential Management** | Codex, Copilot CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI, Kimi | Multi-key storage (DeepSeek #5250), Azure/Enterprise proxy (Codex #6060, Copilot #4374), Ollama Cloud (Pi), Qwen Token Plan (Pi), Bedrock/Vertex (Pi, Qwen) |
| **Self-Hosted / Air-Gapped Operation** | OpenCode (#31233), Pi (#7547 Windows), Copilot CLI (CI), Codex (proxy) | Offline mode, local model support (Ollama), installer mirroring (Qwen #8637), Windows-native paths |
| **Evaluation & Regression Infrastructure** | Gemini (#24353), Codex (behavioral evals), OpenCode, Qwen Code | Component-level evals, stable steering tests, automated triage (Qwen autofix), deterministic tool ordering |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Challenger/Rapid-Iteration Tools |
|-----------|---------------------------|----------------------------------|
| **Target User** | Professional developers, teams, enterprises (Copilot, Claude, Codex, Gemini) | Power users, early adopters, plugin authors, researchers (OpenCode, Pi, DeepSeek, Kimi, Qwen) |
| **Architectural Philosophy** | Managed cloud backend, proprietary models, integrated IDE/web UIs | Local-first, BYOM (Bring Your Own Model), protocol-driven (MCP/ACP), extensible cores |
| **Release Cadence** | Weekly stable + nightly (Codex, Gemini, Qwen, Copilot) | Continuous/weekly with large integration trains (OpenCode 46 issues/day, DeepSeek 77-commit train) |
| **Extension Model** | Official plugin marketplaces (Claude, Codex), `.agents/` conventions (Copilot) | Runtime API (DeepSeek), Harness v2 (Pi), ACP/MCP native (OpenCode, Pi), skill/subagent systems |
| **Differentiators** | **Claude**: Cowork collab, WSL2 focus<br>**Codex**: Agent Plugins, Conversation Sections<br>**Gemini**: Auto Memory, AST-aware tooling<br>**Copilot**: GH-native auth, PR workflow | **OpenCode**: Agent Teams, lexical path tools, session isolation<br>**Pi**: Fullscreen TUI, Harness recovery, widget factory<br>**DeepSeek**: Runtime API surface, MCP Registry-first<br>**Qwen**: `/review` evidence capture, Live Host installer<br>**Kimi**: Memory system design, binary-safe edits |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum & Maturity** | **OpenAI Codex**, **Gemini CLI**, **Qwen Code** | Regular releases, high issue/PR velocity, enterprise features (proxy, auth, eval infra), dedicated platform teams |
| **High Momentum, Hardening Phase** | **Claude Code**, **GitHub Copilot CLI** | Large user bases but stability regressions dominate (WSL2 OOM, permission bugs, session resume OOM); strong feature demand (notifications 32 👍, Linux app 933 👍) |
| **Rapid Iteration, Pre-1.0** | **OpenCode**, **Pi**, **DeepSeek TUI** | 40–50+ PRs/day, architectural refactors (command boundary, harness v2, Runtime API), strong community engagement (Agent Teams 118 👍) |
| **Early Stage / Niche** | **Kimi Code CLI** | Critical data-corruption bug, memory system design phase, VSCode integration gaps; active but smaller community |
| **Inactive** | **Grok Build** | No 24h activity |

**Key Insight**: OpenCode and Pi demonstrate the highest *developer-facing* velocity (issues closed, PRs merged), while Codex and Gemini lead in *user-facing* feature delivery (plugins, conversation UX, model capabilities).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implications |
|-------|-----------------|--------------|
| **MCP/ACP as Universal Interop Layer** | 🔴🔴🔴🔴🔴 (All tools) | Invest in MCP server development; expect protocol standardization. Tools without first-class MCP support will face integration friction. |
| **Context Compaction = Reliability Gate** | 🔴🔴🔴🔴 (Claude, Pi, OpenCode, Copilot) | Long-session workflows are blocked by compaction bugs. Evaluate tools on compaction resilience before adopting for multi-hour tasks. |
| **Terminal-Native > Web/Electron for Core Loop** | 🔴🔴🔴🔴 (Pi fullscreen, Qwen VP mode, DeepSeek TUI, OpenCode TUI) | Teams doing heavy CLI work should prioritize tools with mature TUI (Pi, Qwen, DeepSeek) over web-wrapper CLIs. |
| **Multi-Agent Orchestration Moving to Core** | 🔴🔴🔴 (OpenCode Agent Teams, DeepSeek goal-loop, Pi harness v2, Codex subagents) | Single-agent CLIs are becoming legacy. Plan for multi-agent workflows (delegation, checkpointing, goal management). |
| **Enterprise Readiness Gaps Persist** | 🔴🔴🔴 (Proxy: Codex, Copilot; Air-gap: OpenCode, Pi; Auth: all) | No tool fully satisfies enterprise sec/net requirements yet. Hybrid strategies (local CLI + cloud backend) remain necessary. |
| **Windows/WSL2 as Second-Class Citizen** | 🔴🔴🔴 (Claude WSL2 OOM, Copilot NixOS/Win, Codex Windows flashes, Pi strategy debate) | Windows developers face disproportionate friction. Validate Windows workflows before team-wide rollout. |
| **Silent Data Corruption Risks** | 🔴🔴 (Kimi StrReplaceFile, Claude copy-paste indentation) | File-editing tools require byte-level fidelity guarantees. Audit tool edit implementations before trusting automated refactors. |

---

## Recommendation Summary

| Use Case | Recommended Primary | Evaluation Candidates |
|----------|---------------------|----------------------|
| **Enterprise Team (GH-native)** | GitHub Copilot CLI | Codex, Claude Code |
| **Multi-Model / BYOM Power User** | OpenCode, Pi | DeepSeek TUI, Qwen Code |
| **Long-Running Autonomous Agents** | Pi (Harness v2), DeepSeek TUI (goal-loop) | OpenCode (subagent continuation) |
| **Code Review / Evidence Workflows** | Qwen Code (`/review`) | Pi (widget factory), OpenCode |
| **Windows/WSL2 Daily Driver** | *Wait for stability* | Test Qwen Code (WSL fixes), Copilot CLI (patch cadence) |
| **Plugin/Extension Authors** | OpenAI Codex (Agent Plugins), Claude Code | OpenCode (ACP), Pi (widget factory) |

*The ecosystem is converging on **protocol-driven, terminal-native, multi-agent** architectures. The next 6 months will likely see stabilization of compaction, MCP/ACP, and cross-platform terminal rendering as the primary differentiators shift from "feature checkboxes" to "reliability under load."*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-07 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py 0% recall` | Core fix for skill evaluation pipeline — installs eval artifact as real skill, fixes Windows stream reading, trigger detection, parallel workers | Directly addresses **Issue #556** (12 comments, 7 👍) and **#1169** — the evaluation loop has been reporting 0% recall for all skills, making description optimization ineffective | OPEN |
| 2 | **[#1099](https://github.com/anthropics/skills/pull/1099)** `skill-creator: fix run_eval.py crash on Windows` | Fixes `WinError 10038` when reading from subprocess pipe on Windows; every query recorded as "not triggered" | Windows blocker for skill-creator; related to **#556** and **#1050** | OPEN |
| 3 | **[#1323](https://github.com/anthropics/skills/pull/1323)** `fix(skill-creator): run_eval trigger detection` | Trigger eval misses real skill name, bails on first non-Skill tool — causing recall=0% for should-trigger queries | Root cause for **#556**/**#1169**; optimization loop returns original description never improving | OPEN |
| 4 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `feat: add self-audit` | Mechanical file verification + four-dimension reasoning quality gate (v1.3.0); universal across projects/stacks/models | Novel meta-skill for pre-delivery AI output auditing; Step 0 verifies claimed files exist, then reasoning audit in damage-severity order | OPEN |
| 5 | **[#514](https://github.com/anthropics/skills/pull/514)** `Add document-typography skill` | Typographic QC for AI-generated documents: orphan/widow prevention, numbering alignment, quality control | Addresses universal pain point — "users rarely ask for good typography but every document needs it" | OPEN |
| 6 | **[#723](https://github.com/anthropics/skills/pull/723)** `feat: add testing-patterns skill` | Comprehensive testing stack: Trophy model, AAA pattern, React Testing Library, contract testing, property-based, mutation testing | Full-lifecycle testing guidance; addresses gap in existing skills collection | OPEN |
| 7 | **[#83](https://github.com/anthropics/skills/pull/83)** `Add skill-quality-analyzer & skill-security-analyzer` | Meta-skills for marketplace: 5-dimension quality analysis (structure, docs, examples, resources, security) + security scanning | Enables community self-governance; security analyzer detects dangerous patterns, excessive permissions | OPEN |
| 8 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `Add plan-file-hygiene skill` | Lifecycle management for planning artifacts (addresses **#1417**); prevents accumulation of stale planning files | Community-identified gap: "planning artifacts accumulate with no lifecycle" | OPEN |

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence (Issues) | Community Signal |
|-------|-------------------|------------------|
| **Skill Distribution & Trust Security** | **#492** (43 comments, 2 👍) — Community skills masquerading as official `anthropic/` namespace; trust boundary abuse | **Highest engagement** — users demand namespace isolation, verified publisher badges, supply-chain integrity |
| **Organizational Skill Sharing** | **#228** (16 comments, 8 👍) — No org-wide sharing; manual download/upload via Slack/Teams | Strong demand for shared skill libraries, direct sharing links, team workspaces |
| **Skill Creator Toolchain Reliability** | **#556** (12 comments, 7 👍), **#1169** (3 comments, 1 👍), **#202** (8 comments, closed) — `run_eval.py` 0% recall, Windows crashes, description optimization broken | Core developer tooling is unreliable; blocks skill authoring and quality improvement |
| **Duplicate/Conflicting Skill Installations** | **#189** (6 comments, 9 👍) — `document-skills` and `example-skills` install identical content causing duplicates | Packaging/publishing model needs deduplication, clear separation of concerns |
| **Context Window Management** | **#1487** (4 comments) — `claude-api` skill injects 156k tokens in single call, exhausting context | Skills must be token-aware; lazy loading, progressive disclosure needed |
| **MCP/External Integration** | **#16** (4 comments), **#29** (4 comments) — Expose skills as MCPs; Bedrock/AWS compatibility | Demand for protocol standardization and cloud provider support |
| **Agent Governance & Safety** | **#412** (6 comments, closed), **#1175** (4 comments, closed), **#1385** (4 comments) — Policy enforcement, threat detection, reasoning quality gates | Growing interest in production-grade agent safety, audit trails, governance patterns |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval pipeline fix | **Critical infrastructure** — unblocks all skill authoring; 3 related issues (#556, #1169, #1099); multiple contributors debugging |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows compatibility for skill-creator | **Platform parity** — Windows users completely blocked; simple 1-line fixes identified |
| **[#1323](https://github.com/anthropics/skills/pull/1323)** | Trigger detection fix | **Root cause** for 0% recall; isolates the exact detection logic failure |
| **[#1261](https://github.com/anthropics/skills/pull/1261)** | Isolate trigger-eval from live registry | **Safety fix** — prevents eval pollution of user's actual `.claude/commands/` during parallel runs |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | **Universal utility** — every document generation benefits; no dependencies; clear spec |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | **Broad applicability** — fills testing guidance gap across languages/frameworks; well-structured |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | **Self-contained domain expertise** — color spaces, naming systems, accessibility; zero external deps |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | **Direct issue response** — built from community-identified pain point (#1417); practical workflow skill |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for a trustworthy, reliable skill authoring and distribution foundation — fixing the broken evaluation pipeline (0% recall), securing the supply chain (namespace impersonation), and enabling organizational sharing — before expanding the skill catalog further.**

*The top 3 issues by engagement (#492, #228, #556) all target infrastructure/trust gaps, not new domain skills. Contributors are investing heavily in `skill-creator` fixes (#1298, #1099, #1323, #1261, #1050) because the toolchain itself is the bottleneck.*

---

# Claude Code Community Digest — 2026-08-07

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker remains dominated by **WSL2 memory exhaustion** (#54394), **permission system regressions** (#6527, #76718), and **Cowork collaboration blockers** (#76248, #71307). Community sentiment is heavily focused on stability regressions in v2.1.x rather than new features.

---

## Releases
*No releases published in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Engagement)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#54394](https://github.com/anthropics/claude-code/issues/54394) | **WSL2: embedded `ugrep` wrapper triggers V8 heap OOM (8 GB ceiling)** | Regex backtracking in `grep` → `ugrep` → `claude.exe` chain amplifies memory until host freezes. Blocks WSL2 users entirely. | 24 comments, 2 👍 — critical perf regression since v2.1.117 |
| [#6527](https://github.com/anthropics/claude-code/issues/6527) | **`ask` permission list ignored when "Bash" in allow list** | Security model bypass: allowing Bash silently disables all `ask` prompts, exposing unintended command execution. | 23 comments, 19 👍 — high-severity permissions logic flaw |
| [#57371](https://github.com/anthropics/claude-code/issues/57371) | **Windows: no way to disable bundled CoworkVMService** | Background service consumes resources for users who never use Cowork; no opt-out in Desktop app. | 18 comments, **42 👍** — strongest community demand for a toggle |
| [#13378](https://github.com/anthropics/claude-code/issues/13378) | **2-space indent + 80-col hard wrap breaks copy-paste** | Rendered output padding copies as real indentation; forces manual cleanup on every paste. | 16 comments, **72 👍** — top UX annoyance across platforms |
| [#54750](https://github.com/anthropics/claude-code/issues/54750) | **Session limit shows 100% used despite low local usage** | False-positive quota exhaustion blocks work; usage accounting appears desynced from server. | 16 comments, 9 👍 — billing trust issue |
| [#76248](https://github.com/anthropics/claude-code/issues/76248) | **Cowork git proxy blocks all pushes; PAT pass-through broken** | Remote sessions cannot push to non-authorized repos even with user PATs; appeared mid-session ~Jul 10. | 14 comments, 5 👍 — collab workflow blocker |
| [#37796](https://github.com/anthropics/claude-code/issues/37796) | **Copied text includes 2-space leading indentation from TUI** | Same root cause as #13378 but specific to terminal selection rendering. | 13 comments, **49 👍** — duplicate of top UX pain point |
| [#79584](https://github.com/anthropics/claude-code/issues/79584) | **Assistant text before tool call (AskUserQuestion) intermittently not rendered** | User sees blank prompt then sudden tool UI; breaks conversational flow in plugin workflows. | 9 comments, 7 👍 — TUI streaming race condition |
| [#71307](https://github.com/anthropics/claude-code/issues/71307) | **Cowork: reserved-path overlap blocks mounting `~/Documents/Claude`** | Scheduled-task logic falsely claims path conflicts; prevents any parent folder mount. | 8 comments — macOS Cowork setup broken |
| [#26581](https://github.com/anthropics/claude-code/issues/26581) | **Feature: system notifications when Claude needs attention/completes task** | Parity with Copilot/VS Code notifications; enables multitasking without polling terminal. | 8 comments, **32 👍** — most-upvoted feature request |

---

## Key PR Progress (All 3 Open PRs)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#84600](https://github.com/anthropics/claude-code/pull/84600) | Enable `frontend-design` plugin at project scope | Registers official marketplace & auto-loads skill via `.claude/settings.json` for repo contributors. | Open, 0 comments |
| [#84427](https://github.com/anthropics/claude-code/pull/84427) | `fix(plugin-dev)`: prevent `validate-agent.sh` exiting on first warning | Bash `((count++))` returns non-zero under `set -e`; fixes validator false failures. | Open, 0 comments |
| [#84381](https://github.com/anthropics/claude-code/pull/84381) | `fix(plugin-dev)`: handle wrapped hook schemas in `validate-hook-schema.sh` | Supports top-level `"hooks"` wrapper and optional `matcher` fields in `hooks.json`. | Open, 0 comments |

*Note: All three PRs target plugin/developer tooling validation — no core runtime fixes in this batch.*

---

## Feature Request Trends (from open issues)

1. **Notification parity** — System/OS-level alerts for "needs input" and "task complete" (#26581, 32 👍)
2. **Cowork opt-out & resource control** — Disable bundled services, manage background daemons (#57371, 42 👍)
3. **Self-initiated context compaction** — Let model proactively compact before hard threshold (#33026, 15 👍)
4. **Terminal tab title reflects agent state** — Unread/active indicators for tmux/screen users (#71369)
5. **Hook decision: "handled" (not "blocked")** — Allow hooks to return output without error framing (#72327, 4 👍)
6. **Configurable output formatting** — Disable 2-space indent, 80-col wrap, or make copy-paste clean (#13378, #37796)

---

## Developer Pain Points (Recurring Themes)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Permission system over-prompts** | Compound commands trigger 700+ prompts despite allowlisted segments (#76718); `ask` list ignored when Bash allowed (#6527) | High — multiple independent reports |
| **Cowork/remote session instability** | Git proxy blocks pushes (#76248), mount conflicts (#71307), AskUserQuestion channel closes silently (#59707) | High — blocks team workflows |
| **WSL2/Linux memory regressions** | `ugrep` wrapper causes V8 OOM freeze (#54394); no workaround except downgrade | Critical for affected users |
| **TUI copy-paste fidelity** | 2-space indent + hard wrap copied as text (#13378, #37796 — **121 👍 combined**) | Universal daily annoyance |
| **Usage accounting opacity** | Session limit 100% with low local use (#54750); phantom Fable consumption (#84612) | Trust-eroding billing bugs |
| **Windows MSIX/GPU fragility** | Inline preview crashes GPU → package `NeedsRemediation` → self-bricks (#81123); plugin installs fail on virtualized FS (#84249) | Windows-specific but severe |
| **Streaming connection reliability** | ECONNRESET on Bun client (#84194); SSE reset after first chunk (#84404) | Network-layer instability |

---

*Generated from `anthropics/claude-code` GitHub data as of 2026-08-07 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-07

---

## 1. Today's Highlights

Codex shipped **v0.147.0** with two major capabilities: a **portable Agent Plugin system** that lets developers install and search plugins across local, personal, workspace, and remote catalogs, and **persistent conversation sections** for manually organizing and incrementally browsing long transcripts. Meanwhile, the TUI gained a long-requested **Markdown conversation export** (`/export` command) and consistent input placeholders, while a wave of PRs hardened sandboxing, subagent context tracking, MCP reliability, and rollout migration tooling.

---

## 2. Releases

### `rust-v0.147.0` — 2026-08-07
| Feature | Details |
|---------|---------|
| **Agent Plugins** | Install portable plugins; search across local, personal, workspace, and remote catalogs ([#36544](https://github.com/openai/codex/issues/36544), [#36409](https://github.com/openai/codex/issues/36409), [#36919](https://github.com/openai/codex/issues/36919), [#36796](https://github.com/openai/codex/issues/36796)) |
| **Conversation Sections** | Persistent, manually ordered sections; incremental transcript browsing ([#35722](https://github.com/openai/codex/issues/35722), [#36007](https://github.com/openai/codex/issues/36007), [#36380](https://github.com/openai/codex/issues/36380), [#36948](https://github.com/openai/codex/issues/36948)) |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#11023](https://github.com/openai/codex/issues/11023) | **Linux Desktop App** | Highest-voted open issue; macOS power issues drive demand for native Linux build | 203 comments, **933 👍** — massive latent demand |
| [#6060](https://github.com/openai/codex/issues/6060) | **HTTP Proxy via `config.toml`** | Enterprise/academic environments require explicit proxy config (Zscaler, PAC) | 15 comments, **68 👍** — blocks adoption in secured networks |
| [#2880](https://github.com/openai/codex/issues/2880) | **Copy/Export as Markdown** | **Now shipped in PR #37358** — enables docs/issue workflows | 28 comments, **78 👍** — closed today |
| [#21653](https://github.com/openai/codex/issues/21653) | **Multi-line Status Line** | Long status lines truncate; need wrapping for dense info | 12 comments, **58 👍** — TUI usability gap |
| [#28080](https://github.com/openai/codex/issues/28080) | **Windows: Thread Tools Lose Handlers** | "`No handler registered`" mid-session breaks tool calls | 23 comments, 2 👍 — reliability blocker on Windows |
| [#26820](https://github.com/openai/codex/issues/26820) | **CLI Can't Acquire Chrome Extension** | App UI works; CLI fails to connect to same extension | 12 comments, 9 👍 — parity gap between surfaces |
| [#24685](https://github.com/openai/codex/issues/24685) | **CLI Copy/Paste Broken** | Multi-line copies garbled; frequent daily friction | 7 comments, 3 👍 — core UX pain point |
| [#18984](https://github.com/openai/codex/issues/18984) | **Windows: PowerShell Console Flash** | Hidden `pwsh.exe` flashes visible window during headless runs | 6 comments — CI/automation annoyance |
| [#25341](https://github.com/openai/codex/issues/25341) | **Subagent Threads Pollute Recent List** | Child threads consume slots, hiding parent conversations | 6 comments, 1 👍 — history management issue |
| [#37351](https://github.com/openai/codex/issues/37351) | **MCP Tool Order Nondeterministic** | `HashMap` iteration shuffles tool order per process restart | 2 comments — debugging/reproducibility hazard |

---

## 4. Key PR Progress (Closed Today)

| PR | Area | Summary |
|----|------|---------|
| [#37358](https://github.com/openai/codex/pull/37358) | TUI | **Markdown export** — `/export` to clipboard/file with default filename prompt |
| [#37360](https://github.com/openai/codex/pull/37360) | TUI | Consistent placeholders: "Ask Codex to do anything" (main) / "Ask a follow-up question" (side) |
| [#37347](https://github.com/openai/codex/pull/37347) | Agents | Track context windows per agent; forked subagents get distinct window lineage |
| [#37344](https://github.com/openai/codex/pull/37344) | MCP | Fix subagent MCP startup status settling (clears deferred expectations) |
| [#37337](https://github.com/openai/codex/pull/37337) | MCP | Recover MCP servers after OAuth reauth without restart |
| [#37351](https://github.com/openai/codex/pull/37351) | MCP | *(Issue filed today)* — deterministic tool ordering fix needed |
| [#37349](https://github.com/openai/codex/pull/37349) | Sandbox | Mount minimal `/dev` in full-FS Bubblewrap sandboxes (device tree isolation) |
| [#37348](https://github.com/openai/codex/pull/37348) | Rollout | `codex migrate-rollouts` CLI + background paginated migration (disabled by default) |
| [#37345](https://github.com/openai/codex/pull/37345) | Backend | Send `x-codex-routing-hint` header (model + service tier) on Responses/WS/prewarm |
| [#37352](https://github.com/openai/codex/pull/37352) | Exec | Configurable `code_mode.default_exec_yield_time_ms` (default 30s) |
| [#37350](https://github.com/openai/codex/pull/37350) | Threads | `ThreadManager::with_thread_id_generator` for custom ID allocation |
| [#37339](https://github.com/openai/codex/pull/37339) | Telemetry | Reload OTel collectors after account changes |
| [#37338](https://github.com/openai/codex/pull/37338) | Connectors | Honor `CODEX_APP_SERVER_CHATGPT_BASE_URL` in connector install URLs |
| [#37342](https://github.com/openai/codex/pull/37342) | Env | Preserve foreign `cwd` URIs for turn-input contributors |
| [#37341](https://github.com/openai/codex/pull/37341) | TUI | Support content references for inline visualizations |
| [#37340](https://github.com/openai/codex/pull/37340) | Env | Consolidate deferred provisioning APIs |
| [#37343](https://github.com/openai/codex/pull/37343) | Test | Stage Bazel app-server binaries in `TEST_TMPDIR` (avoid cross-FS copies) |
| [#37354](https://github.com/openai/codex/pull/37354) | Test | Retry `ExecutableFileBusy` on app-server test spawns |
| [#37356](https://github.com/openai/codex/pull/37356) | Auth | Agent identity endpoint overrides via `CODEX_AGENT_IDENTITY_*_BASE_URL` |
| [#37357](https://github.com/openai/codex/pull/37357) | Agent | Clamp short `wait_agent` timeouts to configured minimum |

---

## 5. Feature Request Trends

1. **Platform Parity** — Linux desktop app (#11023, 933 👍) and Windows default shell config (#16579, 33 👍) top the list.
2. **Enterprise Readiness** — HTTP proxy support (#6060, 68 👍), OAuth/MCP resilience (#37337, #37351).
3. **Conversation Management** — Markdown export (delivered), persistent sections (v0.147.0), multi-line status (#21653), disable composer placeholders (#35913).
4. **Agent/Plugin Ecosystem** — Portable plugin catalogs (v0.147.0), subagent context isolation (#37347), deterministic MCP tooling.
5. **Automation/Headless** — Hidden PowerShell suppression (#18984, #20510, #36560), `codex exec` cleanliness.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **macOS Zombie Process Leaks** | 3+ issues today (#37247, #37236, #37311) — thousands of `<defunct>` children exhaust process table |
| **Windows Console Flashes** | 3 issues (#18984, #20510, #36560) — visible `pwsh.exe` during headless/hidden runs |
| **CLI Copy/Paste** | #24685 — multi-line copies garbled; daily friction for terminal users |
| **Thread Tool Handler Loss (Windows)** | #28080 — "`No handler registered`" mid-session; 23 comments |
| **Chrome Extension Backend (CLI)** | #26820 — works in App UI, fails in CLI on same machine |
| **Subagent History Pollution** | #25341 — child threads crowd out parent conversations in recent list |
| **App Crashes (macOS)** | #32676 — `EXC_BREAKPOINT` in V8 code cache (`CrBrowserMain`) |
| **Permission Dialog Unresponsive** | #36115 — "Allow once" button dead in file-edit dialog |
| **MCP Tool Nondeterminism** | #37351 — `HashMap` iteration reshuffles tool order every restart |
| **Computer Use Plugin Instability** | #37326, #37084 — native pipe fails, plugin disables after restart, PiP zombie loop on macOS 14.3 |

---

*Generated from github.com/openai/codex data as of 2026-08-07. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-07

## 1. Today's Highlights
The project shipped two releases in 24 hours: a nightly build (`v0.56.0-nightly`) and a preview patch (`v0.55.0-preview.2`) that cherry-picks a fix for capacity-exhaustion error handling. Meanwhile, the issue backlog highlights three persistent reliability themes: **subagent lifecycle bugs** (false success reporting, unauthorized execution), **agent hangs** (generalist, shell, browser), and **memory-system noise** (indefinite retries, redaction gaps). On the PR side, infrastructure hardening continues with Node 22/24 upgrades, auth-loop fixes, and a new `--list-all-sessions` CLI flag for cross-workspace session discovery.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [`v0.56.0-nightly.20260807.gd5c9a97dc`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260807.gd5c9a97dc) | Nightly | Changelog for v0.55.0-preview.1; version bump automation. |
| [`v0.55.0-preview.2`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-preview.2) | Preview Patch | Cherry-picks #28716: reclassifies **capacity exhaustion / insufficient credits as terminal errors** (non-retryable), enabling immediate model fallback. |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Masks real failures; breaks trust in agent delegation. | 12 comments, 👍2, **P1**, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks core workflows; users must disable subagents to proceed. | 8 comments, 👍8, **P1** |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** | Epic to harden the 76 behavioral evals across 6 models; foundational for regression prevention. | 7 comments, **P1**, `aiq/eval_infra` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping** | Potential to cut turns & token noise via precise method-bound reads. | 7 comments, 👍1, **P2** |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses skills & sub-agents** | Users must explicitly invoke; limits autonomous capability. | 6 comments, **P2** |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions forever** | Wastes compute & clutters inbox; no back-off or quarantine. | 5 comments, **P2** |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command stuck at “Waiting input” after completion** | Frequent UX break; simple commands (mkdir, etc.) hang the agent. | 4 comments, 👍3, **P1** |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent: session takeover & lock recovery** | Current “fail-fast” on locked profile breaks persistent sessions. | 4 comments, **P3**, `kind/feature` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform gap for Linux/Wayland users; termination reason misleading. | 4 comments, 👍1, **P1**, `agent/browser` |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction for Auto Memory** | Secrets hit model context before redaction; logging leaks skills. | 4 comments, **P2**, `area/security` |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#28716](https://github.com/google-gemini/gemini-cli/pull/28716) | CLOSED | **Capacity exhaustion → terminal error** (non-retryable), enabling fast fallback. Shipped in v0.55.0-preview.2. |
| [#28519](https://github.com/google-gemini/gemini-cli/pull/28519) | CLOSED | **Fix infinite auth loop** by awaiting `oauth_creds.json` write + forcing consent. Fixes #28430. |
| [#28718](https://github.com/google-gemini/gemini-cli/pull/28718) | OPEN | **Record usage on stream abort** — flushes `usageMetadata` caught in `generateContentStream` catch path. Fixes #28682. |
| [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) | OPEN | **Load `.env` before resolving settings placeholders** — fixes load-order race for workspace env vars. |
| [#28603](https://github.com/google-gemini/gemini-cli/pull/28603) | OPEN | **Sandbox Dockerfile → Node 22** (Node 20 EOL 2026-04-30). Security hardening for model-executed commands. |
| [#28602](https://github.com/google-gemini/gemini-cli/pull/28602) | OPEN | **CI/runtime base image → `node:24-slim`**; fixes copy step in multi-stage build. |
| [#28596](https://github.com/google-gemini/gemini-cli/pull/28596) | OPEN | **New `--list-all-sessions` flag** — lists sessions across all workspaces, grouped by path. |
| [#28592](https://github.com/google-gemini/gemini-cli/pull/28592) | OPEN | **Keep “Auto” model visible without preview access** — falls back to stable models. |
| [#28641](https://github.com/google-gemini/gemini-cli/pull/28641) | OPEN | **Fix ghost-text infinite loop at narrow widths** (CJK/emoji); adds regression test. Fixes #19985. |
| [#28640](https://github.com/google-gemini/gemini-cli/pull/28640) | OPEN | **Fix broken auth docs link** in `ProjectIdRequiredError`; adds redirect from old path. |

---

## 5. Feature Request Trends
1. **Subagent observability & control** — trajectory sharing (`/chat share`), settings.json overrides respected, unauthorized runs blocked.
2. **Evaluation infrastructure** — component-level evals, stable steering tests, behavioral eval expansion (76+ tests).
3. **AST-aware tooling** — precise reads, search, and codebase mapping to reduce turns/tokens.
4. **Memory system hardening** — deterministic redaction, inbox quarantine, back-off for low-signal sessions.
5. **Session management UX** — cross-workspace listing, resume, and sharing.
6. **Browser agent resilience** — profile lock recovery, Wayland support, configurable `maxTurns`.

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Agent hangs** — generalist, shell (`Waiting input`), browser (Wayland, profile locks) — often requiring subagent disablement.
- **False success signals** — subagents reporting `GOAL`/`success` after `MAX_TURNS` or errors.
- **Auth friction** — infinite loops, broken doc links, Project ID errors.
- **Context overflow** — unbounded search results (>128 tools, thousands of grep matches) triggering 400s.
- **Terminal rendering** — resize flicker, ghost-text wrapping loops at narrow widths.
- **Memory noise** — Auto Memory re-processing dismissed/low-signal sessions; secrets in logs.
- **Skill/sub-agent discovery** — model ignores registered capabilities unless explicitly prompted.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-07

---

## 1. Today's Highlights
A patch release **v1.0.79-6** shipped with two UX fixes: a rare internal delay no longer prints a diagnostic warning over the interactive UI, and a failed session-history load no longer leaves the transcript permanently blank. Meanwhile, the issue tracker shows active community friction around **MCP integration on non-GitHub remotes**, **session-resume OOM regressions**, and **terminal rendering glitches in tmux/Windows** — several with reproducible strace logs and memory profiles attached.

---

## 2. Releases
**v1.0.79-6** (2026-08-07)  
- **Fixed**: Rare internal delay no longer prints a diagnostic warning on top of the interactive UI.  
- **Fixed**: Failed session-history load no longer leaves the timeline permanently empty; the failure was silently discarded, leaving the transcript blank for the rest of the session.  
[Release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.79-6)

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#3392](https://github.com/github/copilot-cli/issues/3392) | **Bash tool breaks on NixOS ≥1.0.49** | Blocks all command execution on NixOS; strace shows `Failed to start bash process`. Regression since 1.0.49. | 7 👍, 3 comments, open since May |
| [#4251](https://github.com/github/copilot-cli/issues/4251) | **Resume large session OOMs / 70-min CPU grind in 1.0.74** | 3–4× memory vs 1.0.73; isolates to a single version bump. Long-lived sessions unusable. | 1 👍, 2 comments, A/B repro provided |
| [#4374](https://github.com/github/copilot-cli/issues/4374) | **`/mcp search` 400 Bad Request on Azure DevOps remotes** | Enterprise teams on Azure DevOps cannot browse MCP registry; 400 on policy fetch. | 4 👍, open, triaged |
| [#4346](https://github.com/github/copilot-cli/issues/4346) | **MCP registry policy fetch 403 for `GITHUB_TOKEN` in CI** | Blocks non-default MCP servers in GitHub Actions using the documented PAT-less auth flow. | 1 👍, 1 comment, open |
| [#4392](https://github.com/github/copilot-cli/issues/4392) | **Post-auth MCP client rebuild leaves orphaned stdio processes** | Startup spawns MCP servers, then tears down/rebuilds after auth — first gen processes leaked. | 1 comment, open, triaged |
| [#4313](https://github.com/github/copilot-cli/issues/4313) | **Allow scrolling through conversation history** | Mouse wheel / PgUp/PgDown don’t scroll transcript; basic terminal UX gap. | 4 comments, open |
| [#4311](https://github.com/github/copilot-cli/issues/4311) | **Transcript renders blank until width change or new message** | Measured-line cache invalidated without re-triggering measurement; `/resume` doesn’t recover. | 2 comments, open |
| [#4212](https://github.com/github/copilot-cli/issues/4212) | **Prompt box & highlighted items invisible in tmux (dark-on-dark)** | Works in bare iTerm2; ruled out stale config, TERM, theme. tmux-specific color negotiation bug. | 2 comments, open |
| [#4211](https://github.com/github/copilot-cli/issues/4211) | **BigInt in structured MCP response crashes CLI** | `TypeError: Do not know how to serialize a BigInt` aborts all tasks. JSON-RPC interop gap. | 2 comments, open, triaged |
| [#4345](https://github.com/github/copilot-cli/issues/4345) | **Reasoning effort 'medium' unsupported for `claude-haiku-4.5`** | Feature-flag combo (`copilot_cli_opus_medium_effort_default` + `copilot_cli_gpt_5_4_mini_for_explore`) throws repeatedly during sub-agent runs. | 4 👍, 2 comments, closed (likely config fix) |

---

## 4. Key PR Progress
**No pull requests updated in the last 24 hours.**  
All recent fixes (v1.0.79-6) appear to have landed via internal/internal-to-GitHub workflows rather than public PRs.

---

## 5. Feature Request Trends
From the issue corpus, the strongest community pull is toward:

1. **Terminal UX parity** — scrollback (#4313), tmux color correctness (#4212), Windows title handling (#4384), shell-mode Tab completion (#4387).
2. **MCP ecosystem hardening** — Azure DevOps remote support (#4374), CI token support (#4346), orphaned process cleanup (#4392), BigInt serialization (#4211).
3. **Session durability** — resume performance (#4251), model-name prefix consistency on resume (#4282), worktree cleanup on session delete (#4383).
4. **Discoverable extensibility** — `.agents/` folder convention for instructions, agents, hooks in any folder (#4204).
5. **Permission transparency** — show *which rule* triggered approval (#4386), fix stuck auto-mode (#4388, #4389).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Symptom | Frequency |
|------|---------|-----------|
| **MCP on non-GitHub remotes** | 400/403 on registry policy fetch; blocks enterprise Azure DevOps users | 2 high-signal issues (#4374, #4346) |
| **Session resume at scale** | OOM, 70-min CPU spin, 3–4× memory regression in 1.0.74 | 1 detailed perf report + modeling |
| **Terminal rendering** | Blank transcript (#4311), invisible prompt in tmux (#4212), title flips to "Windows PowerShell" (#4384) | 3 distinct rendering bugs |
| **Model/reasoning config** | Wrong effort on model switch (#3053), unsupported effort for haiku-4.5 (#4345), org-enabled models missing (#4390) | 3 model-selection bugs |
| **Permission mode state** | Stuck in auto after toggle to interactive (#4388, #4389) | 2 duplicate reports same day |
| **Message queue** | Queued messages never picked up; Ctrl-C doesn’t clear (#4373) | 1 report, severe UX block |
| **NixOS compatibility** | Bash tool completely broken since 1.0.49 (#3392) | 7 👍, 3-month-old regression |

---

*Digest generated from `github/copilot-cli` data as of 2026-08-07 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-07

## Today's Highlights
The community is actively addressing a critical data-corruption bug in `StrReplaceFile` that silently replaces non-UTF-8 bytes anywhere in a file with replacement characters (U+FFFD). Two competing fixes have been opened (#2594, #2595) to preserve raw bytes during edits. Meanwhile, demand grows for a persistent **Memory System** (#1283, 20 comments) and lazy-loading of MCP tool schemas (#2147) to reduce context bloat.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591) | **StrReplaceFile corrupts undecodable bytes outside edited region** | Silent data corruption: any invalid UTF-8 byte in the entire file (not just the edit) becomes U+FFFD on write. Affects binaries, mixed-encoding files, and embedded resources. | 3 comments, created 2026-08-05 — **active investigation** |
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System: Persistent context across sessions** | Top-voted feature request (20 comments). Users want automatic (AI-managed) + manual (user-defined) memory for project patterns, preferences, and cross-session continuity. | 20 comments, 👍0, updated 2026-08-06 — **high engagement** |
| [#2147](https://github.com/MoonshotAI/kimi-cli/issues/2147) | **Lazy-load MCP tool schemas into context** | With multiple MCP servers, thousands of tokens are consumed before first user message. Lazy injection preserves context budget. | 1 comment, 👍1, updated 2026-08-06 — **architectural impact** |
| [#2474](https://github.com/MoonshotAI/kimi-cli/issues/2474) | **UI shaking / full conversation re-render** | Linux users report constant UI jitter and unexplained full re-renders, degrading usability. | 2 comments, 👍2, updated 2026-08-06 — **UX regression** |
| [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) | **[VSCode] Plan mode file paths not clickable in chat webview** | Breaks standard IDE workflow: users can't jump to referenced files from plan-mode output. | 4 comments, 👍1, updated 2026-08-06 — **VSCode integration gap** |
| [#2593](https://github.com/MoonshotAI/kimi-cli/issues/2593) | **Quick-switch auto/yolo/manual modes in VSCode panel + token budget visibility** | Workflow efficiency: mode switching currently requires commands; users want one-click panel toggles and remaining quota display. | 0 comments, created 2026-08-06 — **fresh UX request** |
| [#621](https://github.com/MoonshotAI/kimi-cli/issues/621) | **First WriteFile fails with "Invalid path", then works with absolute path** | Long-standing bug (since Jan) where relative paths fail on first write attempt. | 2 comments, closed 2026-08-06 — **resolved/duplicate?** |
| [#821](https://github.com/MoonshotAI/kimi-cli/issues/821) | **Security: Missing auth checks + 5 dependency CVEs** | High-severity (CVSS 7–8): IDOR on session endpoints and outdated deps. Closed without public fix details. | 0 comments, closed 2026-08-06 — **security debt** |

---

## Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#2594](https://github.com/MoonshotAI/kimi-cli/pull/2594) | **fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits** | Open | **Critical fix**: Applies old/new as UTF-8 byte substrings on raw buffer, avoiding full-file decode/encode. Preserves all bytes outside edit range. |
| [#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595) | **fix(StrReplaceFile): refuse to edit files that are not valid UTF-8** | Open | **Alternative fix**: Fails fast on non-UTF-8 files instead of corrupting. Safer for text-only workflows; breaks binary-file edits. |
| [#2255](https://github.com/MoonshotAI/kimi-cli/pull/2255) | **feat(shell): support Shift+Enter for inserting newlines** | Closed | **UX polish**: Adds industry-standard Shift+Enter binding alongside Ctrl-J / Alt-Enter. Resolves #2254 and related issues. |

> **Note**: #2594 and #2595 address the same root cause (#2591) with different strategies. Review will determine merge path.

---

## Feature Request Trends
1. **Persistent Memory / Context Continuity** (#1283) — Cross-session learning, project-specific patterns, user preferences.
2. **Context Budget Optimization** (#2147) — Lazy-load MCP schemas; avoid pre-injecting thousands of tokens.
3. **VSCode Integration Parity** (#2317, #2593) — Clickable file refs, mode-switch UI, quota visibility in panel/status bar.
4. **Shell UX Refinements** (#2255 merged) — Standard keybindings, responsive input handling.
5. **Binary / Mixed-Encoding File Safety** (#2591) — Tooling must not corrupt non-UTF-8 assets.

---

## Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Silent file corruption** | #2591: `StrReplaceFile` destroys non-UTF-8 bytes globally | Critical, new |
| **Context window exhaustion** | #2147: MCP schemas consume budget before first prompt | High, architectural |
| **No cross-session memory** | #1283: 20-comment thread asking for persistent context | High, long-standing |
| **VSCode workflow friction** | #2317 (unclickable paths), #2593 (no mode-switch UI) | Medium, growing |
| **UI instability on Linux** | #2474: Shaking, full re-renders | Medium, platform-specific |
| **First-write relative path failure** | #621: Requires absolute path on initial `WriteFile` | Low, legacy bug |
| **Security hygiene** | #821: IDOR + 5 CVEs closed without transparent resolution | Low, trust concern |

---

*Generated from GitHub data (MoonshotAI/kimi-cli) as of 2026-08-07 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-07

## 1. Today's Highlights
OpenCode closed 46 issues and updated 50 PRs in the last 24 hours, with heavy focus on Desktop stability (macOS window behavior, theme regressions), MCP/OAuth persistence, and TUI/ACPolishing. The top community-requested feature—Agent Teams equivalent—was closed after 36 comments and 118 👍, signaling alignment on multi-agent orchestration. Core infrastructure PRs address session isolation for MCP tools, compaction history serialization, and token terminology fixes for Chinese locales.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#12661](https://github.com/anomalyco/opencode/issues/12661) | **Add Agent Teams Equivalent or Better** | Most-upvoted feature request (118 👍); users want Claude Code–style multi-agent orchestration. Closed—likely moved to implementation. | 36 comments, 118 👍 |
| [#11301](https://github.com/anomalyco/opencode/issues/11301) | **Processing stops after compaction EVERY time** | Critical UX blocker: agents halt after context compaction, requiring manual "continue" each time. | 13 comments, 8 👍 |
| [#13999](https://github.com/anomalyco/opencode/issues/13999) | **Azure OpenAI: Responses API missing `?api-version=`** | Blocks GPT-5/Codex models on Azure Cognitive Services endpoints; enterprise adoption blocker. | 10 comments, 9 👍 |
| [#18134](https://github.com/anomalyco/opencode/issues/18134) | **Desktop: Close button should minimize to tray** | Standard desktop-app expectation (Slack/Discord/Steam behavior); improves workflow retention. | 7 comments, 2 👍 |
| [#30344](https://github.com/anomalyco/opencode/issues/30344) | **Stuck on "Permission Required" after opening in new directory** | Keyboard navigation broken—Enter doesn't work on Allow/Reject; only "Allow always" proceeds. | 6 comments, 1 👍 |
| [#28355](https://github.com/anomalyco/opencode/issues/28355) | **Orchestration leakage during context compaction** | MiniMax M2.5 shows state leakage across compaction cycles; hints at deeper session-management bug. | 5 comments |
| [#30788](https://github.com/anomalyco/opencode/issues/30788) | **Allow external symlink targets via external_directory consent** | Two-part symlink issue: visibility in pickers + external-target consent; affects monorepo/worktree workflows. | 5 comments, 2 👍 |
| [#31242](https://github.com/anomalyco/opencode/issues/31242) | **DeepSeek provider missing from `/connect` in v1.16.2** | Regression: documented provider disappears from vendor list after upgrade. | 4 comments |
| [#31272](https://github.com/anomalyco/opencode/issues/31272) | **Web UI: Multiple regressions (wrong project, HTML response, missing tabs, broken toggle)** | Cluster of Web UI bugs affecting session creation, project init, settings, and auto-accept. | 3 comments |
| [#20440](https://github.com/anomalyco/opencode/issues/20440) | **Compaction resets agent to main branch, losing worktree** | Silent branch reset during compaction causes commits to land on main instead of worktree—data-loss risk. | 3 comments |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#40979](https://github.com/anomalyco/opencode/pull/40979) | **fix(acp): isolate session MCP tools** | Bug fix | Tracks MCP server ownership per ACP session/directory; prevents cross-session tool leakage. |
| [#40861](https://github.com/anomalyco/opencode/pull/40861) | **fix(opencode): stop storing full patch text in session summary diffs** | Bug fix | Reduces storage bloat by truncating `Snapshot.diffFull()` in summaries; addresses #32005 and prior attempts. |
| [#40931](https://github.com/anomalyco/opencode/pull/40931) | **feat(core): continue subagent sessions** | Feature | Adds optional `sessionID` to resume foreground subagent sessions with history preservation and ownership validation. |
| [#40929](https://github.com/anomalyco/opencode/pull/40929) | **feat(core): bound tool output** | Feature | Enforces configured line/byte limits on tool output; retains full text in managed files with 7-day TTL. |
| [#40962](https://github.com/anomalyco/opencode/pull/40962) | **refactor(core): simplify file tools to lexical paths** | Refactor | Aligns V2 file tools with V1: lexical path resolution, unresolved symlink listings, lossy UTF-8 decoding. |
| [#40922](https://github.com/anomalyco/opencode/pull/40922) | **feat(tui): queue prompts with Option+Enter** | Feature | Enter steers active response; Option/Alt+Enter queues prompts in a compact dock with summary. |
| [#40943](https://github.com/anomalyco/opencode/pull/40943) | **fix(ai): preserve Responses item IDs** | Bug fix | Maintains provider item IDs (reasoning, function calls, outputs) across OpenAI/Azure/OpenAI-compatible endpoints. |
| [#40965](https://github.com/anomalyco/opencode/pull/40965) | **fix(ai): support streams without finish reasons** | Bug fix | Handles providers that omit finish reasons; synthesizes `unknown` terminal finish on clean EOF. |
| [#40974](https://github.com/anomalyco/opencode/pull/40974) | **fix(desktop): preserve macOS app on window close** | Bug fix | Keeps macOS app running when last window closes; restores window on Dock activation. Windows/Linux unchanged. |
| [#40977](https://github.com/anomalyco/opencode/pull/40977) | **fix(i18n): use 词元 instead of 令牌 for token in zh locale** | Bug fix | Corrects Chinese terminology: "token" → "词元" (not "令牌" which means API credential). |

## 5. Feature Request Trends
1. **Multi-agent orchestration** — Agent Teams equivalent (#12661, 118 👍) tops demand; subagent session continuation (#40931) is the first concrete step.
2. **Desktop parity with Electron apps** — Minimize-to-tray (#18134), restore "Open Project Folder" (#31214), macOS window lifecycle (#40974).
3. **Web UI maturity** — Fix project-scoped session creation, `/project/init` JSON responses, Settings tabs, auto-accept persistence (#31272).
4. **Provider ecosystem completeness** — Azure API versioning (#13999), DeepSeek visibility (#31242), custom-model temperature forwarding (#40973).
5. **Symlink & worktree fidelity** — External symlink consent (#30788), compaction preserving worktree context (#20440), lexical path resolution (#40962).

## 6. Developer Pain Points
- **Compaction reliability** — Processing halts (#11301), branch/worktree loss (#20440), orchestration leakage (#28355) make long sessions fragile.
- **Permission UX** — Keyboard traps (#30344), stale prompts (#40960), dual hamburger icons (#31115) create friction in TUI/Desktop.
- **MCP/OAuth persistence** — Auth succeeds but state not saved on Windows (#31282); Web UI shows empty MCP list while CLI works (#30487).
- **Version skew** — Desktop shows stale server versions after upgrade (#31153), theme regression on Ubuntu only (#31243).
- **Offline/air-gapped usage** — Desktop fails with `ENOTFOUND opencode.ai` despite local Ollama (#31233); CLI works offline.

---

*Generated from GitHub data (issues/PRs updated 2026-08-07). All links point to anomalyco/opencode.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-07

## 1. Today's Highlights
Pi v0.84.0 ships a **fullscreen TUI mode** with sticky editor/footer, independently scrollable transcript, and draggable scrollbars — a major UX upgrade for terminal-centric workflows. The community is actively triaging regressions from this release (terminal width crashes, selection behavior, proxy recursion) while advancing provider support (Ollama Cloud, Qwen Token Plan, Bedrock Mantle) and hardening agent harness recovery.

## 2. Releases
### v0.84.0 — Fullscreen TUI Mode
- **New runtime-switchable fullscreen TUI** with sticky editor/footer, independent transcript scrolling, and draggable scrollbars ([UI & Display docs](https://github.com/earendil-works/pi/blob/v0.84.0/packages/coding-agent/docs/settings/ui-display.md))
- Introduces `tuiMode: "fullscreen"` setting; keyboard shortcuts for page-up/down in transcript (`tui.altScreen.pageUp/Down`)
- Known follow-up fixes already merged: multi-click selection (#7733), unwanted newlines on copy (#7721), scrollback preservation on redraw (#7718), half-page scroll keybindings (#7735)

---

## 3. Hot Issues (Top 10 by Impact/Activity)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows support strategy** — Too many run modes (WSL, native, PowerShell, Git Bash) dilute docs & bug focus | 22 comments, 1 👍 — Core maintainers seeking community input on prioritization |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **Auto-compaction never triggers past 100% context** — Only fires on provider overflow (373k tokens) | 12 comments, 15 👍 — Critical reliability gap for long agentic sessions |
| [#7128](https://github.com/earendil-works/pi/issues/7128) | **Default PI_* guideline over-encourages `env` bash calls** — Wastes tokens & latency | 10 comments, 5 👍 — Prompt engineering regression affecting all users |
| [#7738](https://github.com/earendil-works/pi/issues/7738) | **Concurrent compactions share AbortController → crash** — `Cannot read properties of undefined (reading 'signal')` | 0 comments (new) — Race condition in `AgentSession.compact()`; blocks compaction reliability |
| [#7702](https://github.com/earendil-works/pi/issues/7702) | **DeepSeek via opencode zen gateway: 400 `reasoning_content` required** — `detectCompat()` misses this shape | 4 comments — Blocks multi-turn DeepSeek usage on popular gateway |
| [#7321](https://github.com/earendil-works/pi/issues/7321) | **Multi-line paste broken on Termux (no bracketed paste)** — First `\r` submits instead of inserting | 3 comments, 1 👍 — Mobile/terminal compatibility gap |
| [#7740](https://github.com/earendil-works/pi/issues/7740) | **TUI after `/reload` ignores custom tool renderers registered on `session_start`** — Load order regression | 1 comment — Breaks MCP/extension tool rendering after reload |
| [#7736](https://github.com/earendil-works/pi/issues/7736) / [#7737](https://github.com/earendil-works/pi/issues/7737) | **TUI crashes on over-wide lines instead of truncating** — `Rendered line exceeds terminal width` fatal error | 3+2 comments, 1 👍 — v0.84.0 regression; multiple reports |
| [#7743](https://github.com/earendil-works/pi/issues/7743) | **`createInteractiveTuiReference` Proxy causes infinite recursion with pi-spark BottomFiller** — Stack overflow | 1 comment — Extension API proxy pattern breaks wrapping of `tui.render` |
| [#7739](https://github.com/earendil-works/pi/issues/7739) | **Startup-time budget targeting jcode-comparable latency/memory** — Benchmark gap vs jcode v0.9.1888-dev | 1 comment — Perf initiative; cold-start latency is a top complaint |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#7745](https://github.com/earendil-works/pi/pull/7745) | **Preserve Gemini thought signatures in OpenAI completions** — Captures `extra_content.google/vertex.thought_signature` from streamed tool calls, replays on follow-up | ✅ Merged |
| [#7742](https://github.com/earendil-works/pi/pull/7742) | **Ollama Cloud provider support** — Adds `OLLAMA_API_KEY` auth, uses models.dev for model list; hybrid local/cloud via `ollama launch pi` | 🟢 Open |
| [#7715](https://github.com/earendil-works/pi/pull/7715) | **Allow blocked tool calls to terminate** — Adds `terminate?: boolean` to `BeforeToolCallResult` / `ToolCallEventResult`; extensions can end agent turn on block | ✅ Merged |
| [#7717](https://github.com/earendil-works/pi/pull/7717) | **Reject `Agent.reset()` during active runs** — Prevents assistant-only transcript corruption; preserves state until in-flight response settles | ✅ Merged |
| [#7718](https://github.com/earendil-works/pi/pull/7718) | **Preserve scrollback on content-driven full redraws** — Fixes terminal scrollback wipe/jump during streaming markdown reflow | ✅ Merged |
| [#7721](https://github.com/earendil-works/pi/pull/7721) | **Avoid unwanted newlines when copying wrapped lines in fullscreen TUI** — Tracks visual row boundaries, copies logical lines | ✅ Merged |
| [#7733](https://github.com/earendil-works/pi/pull/7733) | **Correct multi-click text selection** — Fixes double-click including trailing whitespace, whitespace-group selection, drag extension | ✅ Merged |
| [#7686](https://github.com/earendil-works/pi/pull/7686) | **Configurable Harness factory** — Internal factory for experimental Harness v2; preserves caller tools/activation/policy, attaches prompt metadata | ✅ Merged |
| [#7659](https://github.com/earendil-works/pi/pull/7659) | **Qwen Token Plan Individual provider** — Adds 8 models via `QWEN_TOKEN_PLAN_API_KEY`; enforces Individual subscription scope | ✅ Merged |
| [#7710](https://github.com/earendil-works/pi/pull/7710) | **Restore suspended harness operations** — Implements Harness v2 recovery (R3): load harness from session with existing log entries | 🟢 Open |

---

## 5. Feature Request Trends
1. **Provider diversification** — Ollama Cloud, Qwen Token Plan, Bedrock Mantle, Baseten DeepSeek fixes; users want first-class support for emerging model APIs
2. **Harness v2 / agent recovery** — Suspended operation restore, configurable factories, session-bound harness creation — moving toward resilient long-running agents
3. **TUI polish & extensibility** — Half-page scroll, selection behavior, theme override (`--use-theme`), widget factory Proxy stability, copy/scrollback fidelity
4. **Windows-first experience** — Strategy discussion (#7547) signals push for documented, tested native/WSL paths
5. **Auth/credential DX** — Preflight `pi auth check` (#7152), Vertex/GCP metadata server sync (#5323), min-release-age respect for npm updates (#7741)
6. **Prompt hygiene** — Reducing unnecessary `env` bash calls (#7128), colocating tool prompt contributions (#7671)

---

## 6. Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **v0.84.0 TUI regressions** | Crashes on wide lines (#7736, #7737), selection bugs (#7733, #7746), Proxy recursion (#7731, #7743), scrollback wipe (#7719), copy newlines (#7721) | 8+ issues in 24h |
| **Context compaction reliability** | Auto-compaction fails past 100% (#6879), concurrent compaction crash (#7738), cold-restore overflow uncertainty (#7724) | 3 critical issues |
| **Provider compatibility gaps** | DeepSeek `reasoning_content` 400 (#7702), Gemini thought signature loss (#6733), `developer` role unsupported on OpenAI-compat (#7723), Baseten maxTokens mismatch (#7726) | 4 provider-specific bugs |
| **Extension/widget API instability** | `createInteractiveTuiReference` Proxy breaks wrapping (#7731, #7743), `/reload` breaks `session_start` tool renderers (#7740) | 3 extension-breaking issues |
| **Windows onboarding friction** | "Gazzilion developers on windows" — too many run modes, unclear supported path (#7547) | 1 meta-issue, 22 comments |
| **Startup latency** | Benchmark gap vs jcode; cold-start budget initiative (#7739) | 1 tracking issue |
| **Mobile/Termux paste** | Multi-line paste submits on first `\r` without bracketed paste (#7321) | 1 persistent issue |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-07

---

## 1. Today's Highlights

Qwen Code v0.21.7 removes the 50-turn limit for Goals, enabling unbounded task resumption, and adds inline terminal image rendering in the interactive CLI. The new Qwen Live Host v0.1.0 provides a stable installer feed for macOS, with OSS mirror support for faster downloads. Active development continues on TUI stability (flickering fixes for web terminals), daemon workspace isolation, and review tooling enhancements including evidence-image capture and remote matching.

---

## 2. Releases

### **v0.21.7** (Stable)
- **Goals unbounded**: Removed 50-turn limit, allowing tasks to resume and continue indefinitely ([#8421](https://github.com/QwenLM/qwen-code/pull/8421))
- **Inline terminal images**: Model outputs can now render images directly in the interactive CLI
- **Full changelog**: [v0.21.7](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.7)

### **v0.21.7-nightly.20260807.fca8f3c1f** (Nightly)
- CI fix: surfaces blocked autofix takeover admission ([#8410](https://github.com/QwenLM/qwen-code/pull/8410))

### **live-host-v0.1.0** / **live-host-latest**
- Stable Qwen Live Host installer feed for macOS
- Windows merge queue tests now run on ECS ([#8386](https://github.com/QwenLM/qwen-code/pull/8386))
- OSS mirror support for downloads ([#8637](https://github.com/QwenLM/qwen-code/pull/8637))

---

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#8659](https://github.com/QwenLM/qwen-code/issues/8659)** TUI flickering/tearing in web-based terminals (Alibaba Cloud Workbench, xterm, no COLORTERM) | Blocks usability in cloud IDEs; root cause is `useTerminalBuffer: true` full-screen ANSI redraws incompatible with web terminal emulators | 2 comments, `welcome-pr` label — community fix encouraged |
| **[#8653](https://github.com/QwenLM/qwen-code/issues/8653)** Daemon multi-workspace sessions inherit another workspace's harness env (`NODE_OPTIONS`/`PATH` leak) | Critical isolation bug: sessions in `qwen serve` cross-contaminate subprocess environments, breaking reproducible builds | 1 comment, `needs-triage` — high impact for team workflows |
| **[#7167](https://github.com/QwenLM/qwen-code/issues/7167)** Fleet Shepherd Dashboard (auto-maintained) | Infrastructure health monitoring; last tick 2026-08-07T02:38:37Z, zero syncs/dispatches — may indicate pipeline stall | 3 comments, bot-maintained — operational visibility |

---

## 4. Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| **[#7897](https://github.com/QwenLM/qwen-code/pull/7897)** | Fix | Skip terminal redraw optimizer on WSL/ConPTY — fixes streaming text duplication (#7634) caused by batched cursor-up sequences mishandled by ConPTY |
| **[#8274](https://github.com/QwenLM/qwen-code/pull/8274)** | Feature | Fork from any conversation: enables branching from earlier Assistant responses, not just latest state; handles tool calls, cancellations, pagination, rewinds |
| **[#8436](https://github.com/QwenLM/qwen-code/pull/8436)** | Fix | Finalize triage status comment on cancellation (not just success/failure) — prevents skipped cleanup on timeout/manual cancel |
| **[#8439](https://github.com/QwenLM/qwen-code/pull/8439)** | Feature | Ctrl+click hyperlinks & right-click context menu in VP mode — restores native terminal capabilities lost under SGR mouse tracking |
| **[#8455](https://github.com/QwenLM/qwen-code/pull/8455)** | Fix | Echo resume command to main screen on exit — quit-screen hint was discarded with alternate buffer in VP mode |
| **[#8654](https://github.com/QwenLM/qwen-code/pull/8654)** | Feature | Add qwen-code repository context manifest for `/review` — declares review domains, path scopes, recommended tests, required configs |
| **[#8553](https://github.com/QwenLM/qwen-code/pull/8553)** | Fix | Bound backward transcript pages in long single-turn sessions — caps page expansion to one additional window beyond requested size |
| **[#8637](https://github.com/QwenLM/qwen-code/pull/8637)** | Feature | Mirror Live Host downloads through OSS — prefers public mirror, falls back to GitHub; 60-min timeout, checksum/size validation |
| **[#8570](https://github.com/QwenLM/qwen-code/pull/8570)** | Fix | Report zero-height VP items so collapsed thoughts release reserved space — fixes layout jump when thinking blocks collapse |
| **[#8388](https://github.com/QwenLM/qwen-code/pull/8388)** | Feature | `qwen review capture-tui` (Phase 2) — drives code in private tmux, captures pane exactly as rendered for pixel-level evidence images |

---

## 5. Feature Request Trends

1. **Review tooling maturity** — Multiple PRs (#8388, #8390, #8654, #8658) expand `/review` with evidence capture, bundle freshness checks, repo context manifests, and deterministic remote matching
2. **TUI robustness across environments** — Fixes for WSL/ConPTY (#7897), web terminals (#8659), VP mode edge cases (#8439, #8455, #8570) indicate push for universal terminal compatibility
3. **Session/daemon isolation** — Multi-workspace env leakage (#8653) and transcript pagination bounds (#8553) show focus on reliable long-running sessions
4. **Live Host distribution** — OSS mirroring (#8637), stable feeds, and Windows CI on ECS (#8386) signal investment in install/onboarding experience
5. **Autofix/takeover workflow** — 14 PRs tagged `[autofix/takeover]` in last 24h — automated triage and PR remediation is a major internal velocity driver

---

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Terminal rendering inconsistencies** | WSL duplication (#7897), web terminal flicker (#8659), VP mode hyperlink/menu loss (#8439), quit-screen hint loss (#8455), collapsed thought layout jump (#8570) | High — 5+ PRs in 24h targeting TUI edge cases |
| **Daemon workspace contamination** | `NODE_OPTIONS`/`PATH` leak across workspaces in `qwen serve` (#8653) | Critical — breaks isolation for multi-project developers |
| **Review workflow friction** | Need for evidence images (#8388), bundle freshness checks (#8390), remote matching automation (#8658), repo context manifests (#8654) | High — 4 review PRs in 24h |
| **Long-session transcript handling** | Unbounded backward pagination expansion in single-turn sessions (#8553) | Medium — affects extended coding sessions |
| **Install/download reliability** | Live Host mirror fallback, 60-min timeout, checksum validation (#8637) | Medium — onboarding friction for macOS users |

---

*Generated from github.com/QwenLM/qwen-code data as of 2026-08-07. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-07

---

## 1. Today's Highlights
The v0.9.4 release train has landed (#5135), delivering workflow status-bar relocation, build-profile splits, and a host of reliability fixes. The command-boundary refactor advances to Layer 5.3 with palette/completion filtering (#5255), while the Runtime API surface expands rapidly—five new endpoint families (memory, goal-loop, verifier receipts, MCP lifecycle, skill lifecycle) are now in review (#5131–#5133, #5130, #5129). Critical macOS “underwater shell” breakage (#4828) and mouse-scroll routing (#5223) are resolved.

---

## 2. Releases
**No new release in the last 24 h.**  
v0.9.4 was finalized via PR #5135 (77 commits on the release train). Key user-facing changes: persistent Workflow status moved to top status bar (#5040), fat-LTO shipping profile decoupled from local dev builds (#5246), git-SHA stamp no longer triggers full rebuilds (#5245), and several workflow/subagent consistency fixes (#5035, #5046).

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | State | Why It Matters | Community Signal |
|---|-------|-------|----------------|------------------|
| [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) | Only one API key can be saved | **OPEN** | Blockers for multi-provider workflows (DeepSeek + GLM + others); forces manual key rotation | 2 comments, 0 👍 — clear unmet need |
| [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) | Unknown model IDs silently fall back to 128K context | **OPEN** | 1M-window models compact at 128K with no warning; data-loss risk | 2 comments, filed by maintainer |
| [#5253](https://github.com/Hmbown/CodeWhale/issues/5253) | Nested `max_depth` widens root session depth budget | **OPEN** | Subagent recursion ceiling (8) can be bypassed; orchestrator stability risk | 1 comment, recent regression |
| [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) | Frequent Anthropic API 400 `type` error with OpenModel | **CLOSED** | Compat layer sends invalid `type` values; intermittent failures for Anthropic-compatible providers | 6 comments, high friction |
| [#4828](https://github.com/Hmbown/CodeWhale/issues/4828) | macOS: underwater shell breaks `open`/`osascript`/launchctl (exit -54) | **CLOSED** | Default terminal shell in v0.9.0 broke macOS system commands; platform blocker | 2 comments, downgrade workaround |
| [#5223](https://github.com/Hmbown/CodeWhale/issues/5223) | Mouse wheel scrolls input history, not content area | **CLOSED** | Core TUI UX regression: long transcripts unreadable via trackpad/wheel | 1 comment, fixed in #5234 |
| [#5246](https://github.com/Hmbown/CodeWhale/issues/5246) | Split shipping profile (dist) from local release gate | **CLOSED** | Fat-LTO on every pre-push build costing CI/contributor time | 0 comments, internal perf win |
| [#5245](https://github.com/Hmbown/CodeWhale/issues/5245) | Git commit forces full rebuild of CLI/TUI | **CLOSED** | Embedded SHA watch triggers 680k-line rebuild on every commit | 0 comments, major dev-ex pain |
| [#5035](https://github.com/Hmbown/CodeWhale/issues/5035) | Workflow authoring failures inconsistent with Agent options | **CLOSED** | `task()` rejected options accepted by Agent; parallel failures masked as success | 0 comments, release-blocker |
| [#5046](https://github.com/Hmbown/CodeWhale/issues/5046) | Fleet named agents bind strictly to roles; only `general` exposes model options | **CLOSED** | Dispatch ignored fleet config, cloned operator model 5× instead of using role | 0 comments, dogfood failure |

---

## 4. Key PR Progress (10 Important)

| # | Title | State | Summary |
|---|-------|-------|---------|
| [#5255](https://github.com/Hmbown/CodeWhale/pull/5255) | Layer 5.3: Palette, completion, and discovery filtering | **OPEN** | Verifies command-boundary refactor integration in palette/slash-completion; follows Layer 5.2 (#4992) |
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | Release: CodeWhale v0.9.4 release train | **CLOSED** | 77-commit integration train; supersedes #5044; all v0.9.4 source candidates merged |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | Feat(tui/subagent): Resume interrupted children from checkpoint via followup | **CLOSED** | `agents/followup` on `interrupted_continuable` now resumes long-running tasks (doc review, multi-step search) |
| [#5238](https://github.com/Hmbown/CodeWhale/pull/5238) | Feat(mcp): MCP Registry discovery with Registry-first tool selection | **CLOSED** | Model consults public MCP Registry for zero-env stdio servers before `exec_shell`/custom code |
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | Feat(tui/shell): Surface real wait elapsed time in tool content | **CLOSED** | `duration_ms` moved from metadata → tool content; model sees actual stall duration, reduces busy-polling |
| [#5234](https://github.com/Hmbown/CodeWhale/pull/5234) | Fix(tui): Keep alternate scroll off while mouse capture active | **CLOSED** | Resolves #5223: DECSET 1006 (alternate scroll) disabled during mouse capture; wheel now scrolls transcript |
| [#5252](https://github.com/Hmbown/CodeWhale/pull/5252) | Feat(subagents): Allow embedders to isolate runtime state roots | **OPEN** | Optional `EngineConfig::subagent_state_root` for embedding hosts; child cwd/file authority unchanged |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | Feat: Runtime API memory endpoints — bounded inspection & lifecycle | **OPEN** | `GET/POST/DELETE /v1/memory` gated by `require_runtime_token`; managed clients can inspect/scope memory |
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | Feat(runtime-api): Expose persistent goal-loop state & completion controls | **OPEN** | `GET/PATCH /v1/threads/{id}/goal` — read active goal, drive lifecycle transitions |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | Feat(acp): Expose file/search/git/patch/shell tools over session/prompt | **CLOSED** | ACP `session/prompt` now executes tool calls; unblocks Zed/acp-deepseek-adapter code-editing flows |

---

## 5. Feature Request Trends
1. **Multi-provider credential management** — Single key slot (#5250) is the top friction point for polyglot model users.  
2. **Model capability transparency** — Silent fallback to legacy context windows (#5244) demands explicit warnings or auto-discovery.  
3. **Subagent/workflow resilience** — Checkpoint resume (#5242), depth-ceiling enforcement (#5253), and goal-loop observability (#5133) signal a push for production-grade orchestration.  
4. **MCP/ACP ecosystem parity** — Registry-first tool selection (#5238), ACP tool execution (#5225), and Runtime API MCP lifecycle (#5130) show concerted effort to make the TUI a first-class MCP/ACP citizen.  
5. **Runtime API as integration surface** — Five concurrent endpoint families (#5131–#5133, #5130, #5129) indicate a strategic shift toward headless/managed clients.  
6. **Build-performance hygiene** — Profile splitting (#5246) and SHA-stamp decoupling (#5245) reflect contributor fatigue from slow feedback loops.  
7. **Platform robustness** — FreeBSD support (#5254) and macOS shell fixes (#4828) broaden the supported matrix.

---

## 6. Developer Pain Points
- **API key juggling**: One global key forces

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*