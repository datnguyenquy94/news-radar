# AI CLI Tools Community Digest 2026-07-28

> Generated: 2026-07-28 03:19 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-07-28)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **intense platform-specific stabilization efforts** rather than headline feature launches. Every major tool—Claude Code, Codex, Gemini CLI, Copilot CLI, OpenCode, Qwen Code, DeepSeek TUI, and Kimi—is simultaneously battling **Windows desktop regressions** (GPU crashes, CRLF editing, Unicode encoding), **session/state durability bugs** (transcript loss, subagent reply truncation, config reset on crash), and **MCP/OAuth integration fragility** (token refresh failures, schema mismatches). Release cadences remain high (alpha/nightly/RC), but changelogs emphasize fixes over features. The dominant theme is **hardening the foundation**—sandbox reliability, cross-device sync, agent/subagent trustworthiness, and enterprise auth parity—before the next wave of capability expansion.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues Tracked | PRs Merged/Updated | Primary Focus Today |
|------|----------------|-------------------|---------------------|---------------------|
| **Claude Code** | 0 | 10 | 5 merged | Windows blank screen, billing incident, settings sync, plugin path fixes |
| **OpenAI Codex** | 2 alpha | 10 | 12 merged (bot batch) | MCP OAuth refresh, Windows GPU crashes, sandbox apply_patch, log bloat |
| **Gemini CLI** | 1 nightly | 10 | 10 (mixed) | Subagent reliability, CRLF diff fix, keychain hardening, auth header stripping |
| **GitHub Copilot CLI** | 1 stable (v1.0.76) | 10 | 8 (mostly stale/docs) | MCP snapshot loading, autopilot persistence, plan-mode regression, ACP parity |
| **Kimi Code CLI** | 0 | 4 | 5 merged | VS Code extension flakiness, hook GC drop, Windows Unicode, MCP schema |
| **OpenCode** | 1 stable (v1.18.7) | 10 | 10 merged | macOS fullscreen, MCP SDK v2, provider configs (Gemini/Azure/Bedrock), V2 session controllers |
| **Pi** | 0 | 10 | 10 merged | Bedrock credential_process, Anthropic request-id, extension lifecycle, TUI perf |
| **Qwen Code** | 2 benchmark pre | 7 | 10 merged | TUI execution console, Web Shell Live Voice/git/PR, channel config, session writer lease |
| **DeepSeek TUI** | 0 (v0.9.2 RC) | 10 | 10 merged | CRLF edit fix, dead-code CI ratchet, recording harness, thinking UX, fleet governance |
| **Grok Build** | 0 | — | — | No activity |

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Windows-first stability** | Claude Code, Codex, Gemini CLI, Kimi, DeepSeek TUI | GPU process crashes (Code Integrity), CRLF editing, Unicode/GBK console encoding, login loops, blank-screen regressions |
| **Cross-device settings/session sync** | Claude Code (#22648, 43👍), Codex (workspace-scoped chat #25319, 48👍), Copilot CLI (rewind without Git #1381), OpenCode (config watches) | Account-level sync of settings, memory, sessions; workspace-scoped history; VCS-agnostic rewind; config hot-reload |
| **MCP/OAuth token lifecycle robustness** | Codex (#17265, 54👍), Gemini CLI (#28481), Pi (#7170), Copilot CLI (ACP auth), OpenCode (MCP SDK v2) | Auto-refresh of stored refresh_tokens; dynamic registration refresh loops; credential_process support (Bedrock); request-id headers for session affinity |
| **Subagent/agent reliability** | Claude Code (#81838), Gemini CLI (#22323, #21409), Qwen Code (#7882), OpenCode (permission skills), Kimi (#2564) | Output-token ceiling handling; false success reporting; hang detection; hook GC protection; tool filtering for background agents |
| **Session/state durability** | Claude Code (#80662, #54186), Codex (#26990, #24948), Copilot CLI (#4183), Qwen Code (#7894, #7812), Pi (#7193) | Transcript truncation fixes; history survival across IDE restarts; CAPI body limit workarounds; writer lease/lock management; extension listener leaks |
| **Sandbox / apply_patch reliability** | Codex (#30712), OpenCode (provider fragmentation), Gemini CLI (shell tool async), DeepSeek TUI (tool sandboxing #4042) | Windows split writable roots; async FS ops; environment-level tool restrictions; ripgrep EAGAIN retries |
| **TUI/UX polish for remote/SSH** | Codex (palette cache #35649), OpenCode (clipboard SSH #16962), DeepSeek TUI (Space key capture #4925), Pi (1Hz re-render #7194) | Focus restoration; clipboard sync over SSH; keybinding interception; viewport-aware rendering; LRU caches |
| **Evaluation/observability infrastructure** | Gemini CLI (#24353), Qwen Code (Fleet Shepherd), DeepSeek TUI (cost tracking #4797), Copilot CLI (OTel billing #4224) | Component-level behavioral evals; CI health dashboards; route/token-class cost breakdown; subagent billing attribution |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Qwen Code | DeepSeek TUI | Kimi Code | Pi |
|-----------|-------------|--------------|------------|-------------|----------|-----------|--------------|-----------|-----|
| **Primary Interface** | Desktop + CLI (TUI) | Rust CLI + Desktop (TUI) | Node CLI | Node CLI + VS Code extension | Go TUI + Desktop | Web Shell + CLI (TUI) | Rust TUI | Python CLI + VS Code ext | TypeScript CLI (embeddable) |
| **Target User** | Individual devs, Anthropic subscribers | OpenAI API users, enterprise | Google Cloud / Vertex AI users | GitHub Copilot subscribers | Power users, multi-provider | Chinese enterprise, DingTalk/Feishu | Chinese devs, cost-sensitive | Moonshot/Kimi users | Framework builders, Neovim/Zed integrators |
| **Multi-Provider Support** | Anthropic-only | OpenAI + routed MCP | Gemini + Vertex + MCP | GitHub Copilot + BYOK | **Broad**: Anthropic, OpenAI, Gemini, Azure, Bedrock, Copilot, Zen, Ollama | Qwen + OpenAI-compat + MCP | DeepSeek + GLM + Kimi + StepFun + OpenCode | Moonshot + MCP | **Broad**: Anthropic, OpenAI, Gemini, Bedrock, Copilot, OpenCode, Fireworks, Z.AI |
| **Agent Architecture** | Subagents + hooks + plugins | Sub-agents + MCP + skills | Generalist + browser + skills + auto-memory | Autopilot + task tool + skills | V2 session controllers + Fleet + Router | Dynamic Workflow + daemon sessions | Work state + checklist + reasoning router | Plan mode + hooks + skills | Coding agent + extensions + scoped models |
| **Enterprise/Org Features** | Billing, SSO (implied) | Team plans, usage reset | Vertex AI integration | Org hooks, Rewind, ACP server | Azure AI Foundry, Cognitive Services | DingTalk/WeCom/Feishu channels, PR flow | Cost transparency (CNY), fleet governance | Limited | Extension API, scoped models, search index |
| **Technical Differentiator** | Plugin marketplace, hookify | Rust performance, sandbox exec | AST-aware tooling (EPIC), eval infra | GitHub-native (issues, PR, Rewind) | MCP SDK v2, provider-free test matrix | Web Shell parity (Live Voice, git PR), session writer lease | Dead-code CI ratchet, recording harness, thinking UX | Prompt cache control, Windows Unicode guards | Embeddable core, SQLite FTS5, extension lifecycle |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / Rapid Iteration** | **OpenAI Codex**, **Qwen Code**, **OpenCode**, **Gemini CLI** | Daily alpha/nightly releases; 10+ PR batches per day; bot-automated merges; active architectural refactors (MCP SDK v2, V2 session controllers, Dynamic Workflow console, eval infra) |
| **Stabilizing / Enterprise-Hardening** | **Claude Code**, **GitHub Copilot CLI**, **DeepSeek TUI** | Stable/RC releases; focus on regressions (Windows, billing, sync); high-engagement issues (50+👍) indicate large installed base; plugin/extension ecosystems maturing |
| **Niche / Regional Focus** | **Kimi Code**, **Pi** | Kimi: VS Code extension centric, Chinese locale fixes; Pi: embeddable framework, Neovim/Zed integration, extension API surface expansion |
| **Low/No Activity** | **Grok Build** | No 24h activity; unclear roadmap |

**Maturity Indicators:**
- **Claude Code** and **Copilot CLI** show highest issue engagement (50+👍) → largest active user bases.
- **Codex** and **OpenCode** demonstrate strongest engineering velocity (batch PR landings, SDK upgrades, provider matrix testing).
- **Qwen Code** uniquely invests in **Web Shell parity** (Live Voice, git/PR, channel config) and **benchmark transparency** (public SWE-bench runs).
- **DeepSeek TUI** leads on **cost observability** (CNY breakdown, cache-write pricing) and **demo-first onboarding** (recording harness).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Windows is the new Tier-1 blocker** | 6/9 tools report critical Windows regressions (GPU, CRLF, Unicode, blank screen, login, sandbox) | Any tool claiming cross-platform support must invest in Windows-specific CI, MSIX packaging, and console encoding handling. |
| **MCP is the de facto integration layer—but fragile** | Every tool has MCP-related issues (OAuth refresh, schema normalization, SDK version, tool sandboxing) | **MCP SDK v2 adoption** (OpenCode, Pi) and **routed MCP auth** (Codex, Copilot) are leading indicators; expect standardization pressure. |
| **Subagent/agent trust is the next reliability frontier** | False success, hangs, token ceiling truncation, hook GC drops across 5+ tools | **Observability** (trajectory visibility, cost attribution) and **guardrails** (output limits, auto-recovery) will differentiate enterprise-ready tools. |
| **Session durability > new features** | Transcript loss, history wipe, config reset, writer lock contention dominate backlogs | **Local-first persistence** (SQLite, file keychain, session writer leases)

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-07-28 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py` recall=0% | Core fix: `run_eval.py` reports 0% recall for every skill description, breaking the description-optimization loop (`run_loop.py`, `improve_description.py`). Also fixes Windows stream reading, trigger detection, parallel workers. | Referenced in Issues [#556](https://github.com/anthropics/skills/issues/556) (12 comments), [#1169](https://github.com/anthropics/skills/issues/1169), [#1323](https://github.com/anthropics/skills/pull/1323). 10+ independent reproductions. | **Open** |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Prevents typographic defects in AI-generated documents: orphan/widow control, numbering alignment, line-break hygiene. Triggers on any document generation request. | Addresses a universal pain point — “users rarely ask for good typography but always notice bad typography.” | **Open** |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file-existence verification → four-dimension reasoning audit (correctness, completeness, safety, clarity) in damage-severity order. Universal, stack-agnostic. | Proposed alongside Issue [#1385](https://github.com/anthropics/skills/issues/1385) (Reasoning Quality Gate Pipeline). Novel “gate” architecture. | **Open** |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, property-based testing, CI integration, flakiness detection. | Fills a gap — no existing skill covers the full testing stack with opinionated, actionable patterns. | **Open** |
| 5 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` (OpenDocument) | Create, fill, read, convert `.odt`/`.ods` files via `pyxel-mcp`. Triggers on “ODT”, “OpenDocument”, “LibreOffice”, “ISO standard format”. | First-class support for open-standard document formats; pairs with existing `docx`/`pdf` skills. | **Open** |
| 6 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security analysis (injection, permissions, secrets, supply-chain). | Enables automated skill review; directly supports the trust-boundary concern in Issue [#492](https://github.com/anthropics/skills/issues/492). | **Open** |
| 7 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` (retro game dev) | MCP server for Pyxel retro game engine: write → run_and_capture → inspect → iterate loop for 8-bit/pixel-art games. | Niche but high-engagement; demonstrates MCP-as-skill pattern. Updated recently (2026-07-15). | **Open** |
| 8 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (creation, update, archival, cleanup). Addresses Issue [#1417](https://github.com/anthropics/skills/issues/1417) — “planning artifacts accumulate with no lifecycle.” | Community-framed problem; credit to @halilxibrahim and @xg-gh-25. Fresh (created 2026-07-25). | **Open** |

> **Note:** All PRs above show `Comments: undefined` in the raw export (likely a scrape artifact), but their placement in the top-20-by-comments sort and cross-references from high-comment Issues confirm community attention.

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Trust & namespace security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 👍2): Community skills published under `anthropic/` namespace impersonate official skills. | 🔴 **Critical** — Highest engagement, direct security impact |
| **Organizational skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 👍8): Need org-wide library / direct sharing links instead of manual file transfer. | 🟠 **High** — Strong workflow demand |
| **Core infrastructure reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 👍7), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061): `run_eval.py` 0% trigger rate, Windows subprocess/encoding failures, UTF-8 panics. | 🟠 **High** — Blocks skill creation/optimization |
| **Duplicate/conflicting skill installations** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 👍9): `document-skills` and `example-skills` plugins install identical content → duplicates in context window. | 🟡 **Medium** — UX polish needed |
| **Agent governance & safety patterns** | [#412](https://github.com/anthropics/skills/issues/412) (closed, 6 comments): Proposal for `agent-governance` skill (policy enforcement, threat detection, trust scoring, audit trails). | 🟡 **Medium** — Emerging domain |
| **Reasoning quality gates** | [#1385](https://github.com/anthropics/skills/issues/1385) (3 comments): Three-gate pipeline (pre-task calibration → adversarial review → delivery verification). | 🟢 **Emerging** — Aligns with `self-audit` PR |
| **Compact memory / context efficiency** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments): `compact-memory` skill using symbolic notation to compress agent state. | 🟢 **Emerging** — Addresses context-window pressure |
| **MCP exposure** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): Expose skills as MCP servers for standard API signaling. | 🟢 **Emerging** — Architectural direction |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

| PR | Skill | Why It’s Likely to Land |
|----|-------|------------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` evaluation fix | **Blocker for all skill authors**; 10+ reproductions; multiple dependent PRs (#1323, #1099, #1050) and Issues (#556, #1169). |
| **[#538](https://github.com/anthropics/skills/pull/538)** | PDF case-sensitivity fix | Trivial 8-line fix; breaks on case-sensitive FS; no design debate. |
| **[#541](https://github.com/anthropics/skills/pull/541)** | DOCX tracked-change ID collision fix | Prevents document corruption; root-cause identified; 1-line ID-space fix. |
| **[#539](https://github.com/anthropics/skills/pull/539)** / **[#361](https://github.com/anthropics/skills/pull/361)** | YAML special-char validation | Prevents silent misparsing; pre-parse check; low risk, high value. |
| **[#362](https://github.com/anthropics/skills/pull/362)** | UTF-8 byte-length validation | Fixes Rust panic on multi-byte chars; already has helper functions. |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need; clean spec; no dependencies; addresses invisible quality gap. |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Comprehensive, opinionated, fills empty niche; aligns with engineering best practices. |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Community-framed problem; fresh; solves real accumulation pain. |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community’s most concentrated demand is hardening the skill-creation toolchain (evaluation, Windows/UTF-8/YAML reliability) and establishing trust/security primitives (namespace governance, quality analyzers) — while expanding into universal document quality, testing standards, and agent self-governance as the next capability layer.**

---

# Claude Code Community Digest — 2026-07-28

---

## 1. Today's Highlights
No new releases shipped in the last 24 hours. Community attention is concentrated on a **critical Windows Desktop blank-screen regression** (#51143, 20 👍), a **mass billing incident from July 17** (#81703) where subscribers were incorrectly charged for usage credits, and a **long-standing request for cross-device settings sync** (#22648, 43 👍) that has accumulated four duplicate issues. Five PRs merged fixes for devcontainer firewall resilience, hookify plugin path handling, and plugin documentation accuracy.

---

## 2. Releases
*No releases published in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Community Impact)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#5064](https://github.com/anthropics/claude-code/issues/5064)** Ctrl+Enter for newlines conflicts with standard app conventions (Windows TUI) | Breaks muscle memory for Windows developers; request for customizable keybindings | 30 comments, **52 👍** — highest engagement in tracker |
| **[#22648](https://github.com/anthropics/claude-code/issues/22648)** Account-level settings sync across devices | Affects every multi-machine user; four prior duplicates (#6037, #19634, #13461, #12119) | 24 comments, **43 👍** — clear product gap |
| **[#51143](https://github.com/anthropics/claude-code/issues/51143)** Claude Desktop persistent blank/white screen on Windows | Renders Desktop app unusable; survives multiple reinstalls | 18 comments, **20 👍** — critical regression |
| **[#81703](https://github.com/anthropics/claude-code/issues/81703)** July 17 mass billing incident: $704.71 disputed | Subscribers charged for usage credits despite plan allowance; financial impact | 7 comments, **acknowledged incident** — trust/revenue risk |
| **[#54186](https://github.com/anthropics/claude-code/issues/54186)** Local session history disappears after VS Code restart | Loss of context continuity in IDE workflow | 13 comments, **14 👍** |
| **[#61172](https://github.com/anthropics/claude-code/issues/61172)** `/clear` inherits previous session name, causing duplicates in `/resume` | Session management confusion; reproducible | 8 comments, **12 👍** |
| **[#79366](https://github.com/anthropics/claude-code/issues/79366)** Worktree sessions reuse stale worktree directory | Breaks isolation guarantee for git-worktree workflows | 6 comments, **4 👍** |
| **[#78946](https://github.com/anthropics/claude-code/issues/78946)** Login loop on Windows | Blocks authentication entirely for affected users | 6 comments, **3 👍** |
| **[#80662](https://github.com/anthropics/claude-code/issues/80662)** Assistant text silently dropped from transcript mid-turn (Opus 4.8) | Data-loss bug in transcript layer; regression of #41814/#14694 | 1 comment, **1 👍** — high severity |
| **[#81838](https://github.com/anthropics/claude-code/issues/81838)** Subagent replies split by output-token ceiling: only last message reaches caller | Silent truncation breaks multi-agent workflows | Filed today, **0 comments** — critical for agent users |

---

## 4. Key PR Progress (All 5 PRs Updated in Last 24h)

| PR | Type | Summary |
|----|------|---------|
| **[#81673](https://github.com/anthropics/claude-code/pull/81673)** | Fix (devcontainer) | Firewall setup no longer aborts on optional domain NXDOMAIN (e.g., `statsig.anthropic.com`); prevents half-populated ipset and default DROP policy |
| **[#81672](https://github.com/anthropics/claude-code/pull/81672)** | Fix (hookify) | Package import now independent of install directory name; enables marketplace installs where plugin dir ≠ `hookify` |
| **[#81670](https://github.com/anthropics/claude-code/pull/81670)** | Fix (plugins) | Quotes `${CLAUDE_PLUGIN_ROOT}` in hook commands (fixes paths with spaces); prefixes hookify examples |
| **[#20448](https://github.com/anthropics/claude-code/pull/20448)** | Feature (plugin) | Adds `web4-governance` plugin: T3 trust tensors, entity witnessing, R6 audit trails for AI governance |
| **[#81576](https://github.com/anthropics/claude-code/pull/81576)** | Docs (plugins) | Corrects `security-guidance` plugin entry: removes phantom `PreToolUse` hook claim, updates pattern count (9 → 25) |

---

## 5. Feature Request Trends
1. **Cross-device synchronization** — Settings, sessions, and memory (4+ duplicate issues, 43 👍 on primary)
2. **Customizable keybindings / TUI shortcuts** — Ctrl+Enter conflict (#5064), MCP toggle hotkey (#69200), CWD in prompt (#70132)
3. **Session continuity & recovery** — Survive quota exhaustion (#68284), persist history across VS Code restarts (#54186), resume from on-disk transcripts (#81835)
4. **Windows-first polish** — MSIX GPU crashes (#81398, #81836), console flash suppression (#70200), native search/Copilot key registration (#81837)
5. **Agent/subagent reliability** — Output-token ceiling handling (#81838), auto-memory consistency in worktrees (#81833), worktree isolation fixes (#79366)

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Windows Desktop instability**: Blank screen (#51143), GPU process crashes (#81398, #81836), login loops (#78946), console flashes (#70200) — multiple blockers for Windows adopters
- **Session/data loss**: Transcript truncation (#80662), history wipe on IDE restart (#54186), subagent reply dropping (#81838), session name collisions (#61172, #81813)
- **Configuration friction**: No cloud sync (#22648), hardcoded keybindings (#5064), forced tool shadowing (`find`→`bfs`, `grep`→`ugrep` #69736), inaccessible light-theme text (#77394)
- **Billing trust**: July 17 incident (#81703) shows subscribers charged for included usage; no public post-mortem yet
- **Plugin ecosystem fragility**: Path-space breaks (#78490), directory-name coupling (#69665, #81448), stale docs (#81576) — marketplace installs frequently broken

---

*Digest generated from GitHub data as of 2026-07-28. Links point to live issues/PRs on `anthropics/claude-code`.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-28

---

## 1. Today's Highlights

Two alpha releases (`0.146.0-alpha.12` and `0.146.0-alpha.13`) shipped in the last 24 hours, continuing the rapid Rust CLI iteration cycle. The issue tracker shows **Windows desktop stability** and **MCP authentication** as the two dominant pain points: multiple crashes tied to the embedded browser’s GPU process (Code Integrity failures on `vk_swiftshader.dll`), sandbox `apply_patch` breakage, and OAuth token refresh failures for routed MCP servers. Meanwhile, a wave of merged PRs from `copyberry[bot]` targets thread-history fidelity, sub-agent config preservation, and Windows exec/interrupt handling.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.146.0-alpha.13` | Alpha | Incremental alpha; see [release](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.13) |
| `rust-v0.146.0-alpha.12` | Alpha | Previous alpha; see [release](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.12) |

*No changelog details provided in the release notes; expect minor fixes and internal refactors typical of the alpha cadence.*

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#17265](https://github.com/openai/codex/issues/17265) | **MCP OAuth tokens not auto-refreshed** despite stored `refresh_token` | Blocks all routed MCP tool calls once access token expires; affects every MCP integration | 27 comments, **54 👍** — highest engagement |
| [#24948](https://github.com/openai/codex/issues/24948) | **TUI session logs balloon to 700 MB–2 GB** from compaction history & raw tool output | Disk-pressure risk for long-running sessions; indicates compaction retention bug | 24 comments |
| [#32094](https://github.com/openai/codex/issues/32094) | **Windows app crashes on WebCodecs/canvas pages** (tracked as BRWPLAT-293) | Embedded browser GPU process hits Code Integrity; makes browser tool unusable on affected pages | 18 comments |
| [#25319](https://github.com/openai/codex/issues/25319) | **Scope VS Code chats to current workspace** | UX gap: chat history leaks across projects; highly requested for multi-repo workflows | 18 comments, **48 👍** |
| [#30712](https://github.com/openai/codex/issues/30712) | **Windows sandbox injects split writable roots → `apply_patch` fails** | Forces agents to bypass sandbox via PowerShell; undermines safety model | 15 comments, **13 👍** |
| [#13852](https://github.com/openai/codex/issues/13852) | **Supabase MCP requires repeated re-auth** (OAuth refresh fails on initialize) | Specific but high-impact for Supabase users; mirrors #17265 root cause | 14 comments |
| [#11324](https://github.com/openai/codex/issues/11324) | **MCP servers leak memory during multi-tasking** | App OOMs after days of parallel worktrees; process isolation gap | 14 comments, **5 👍** |
| [#35352](https://github.com/openai/codex/issues/35352) | **Windows Desktop exits when unsigned SwiftShader fallback blocked** | Same GPU Code Integrity path as #32094; deterministic crash on browser use | 13 comments |
| [#32754](https://github.com/openai/codex/issues/32754) | **Windows app exits silently after Store update scan fails** | Background update check kills the process; no user-facing error | 8 comments |
| [#26990](https://github.com/openai/codex/issues/26990) | **Windows local state not crash-safe** (pins/projects reset, config regresses) | Power loss or crash corrupts user workspace state; data-loss risk | 8 comments |

---

## 4. Key PR Progress (Last 24 h)

| PR | Area | Summary |
|----|------|---------|
| [#35695](https://github.com/openai/codex/pull/35695) | Logging | `logs_client` now respects `sqlite_home` / `CODEX_SQLITE_HOME`; moved into `codex-cli` crate |
| [#35693](https://github.com/openai/codex/pull/35693) | TUI/Sub-agents | Sub-agent picker refreshes in background; avoids blocking terminal input on metadata locks |
| [#35691](https://github.com/openai/codex/pull/35691) | Thread history | Empty-preview threads included in spawn-graph relationships (filtered only from global list) |
| [#35689](https://github.com/openai/codex/pull/35689) | Thread history | Timestamps preserved in `ThreadHistoryItemChange` projections; fixes resume metadata loss |
| [#35688](https://github.com/openai/codex/pull/35688) | Deps | `crossterm` patch pointed to OpenAI OSS fork; lockfiles & `cargo-deny` allowlist refreshed |
| [#35685](https://github.com/openai/codex/pull/35685) | Sandbox | `codex sandbox` loads cloud-managed profiles when `--include-managed-config` passed |
| [#35678](https://github.com/openai/codex/pull/35678) | Thread history | Paginated metadata (preview, title, first user msg) preserved across cold resumes |
| [#35675](https://github.com/openai/codex/pull/35675) | MCP/Plugins | MCP discovery & plugin recommendations now run concurrently; reduces turn latency |
| [#35671](https://github.com/openai/codex/pull/35671) | Auth/Plugins | Curated plugin routing respects active auth mode (ChatGPT / remote / API) on account switch |
| [#35670](https://github.com/openai/codex/pull/35670) | Windows Exec | Initial `exec_command` yield floor raised to **10 s** on Windows; Ctrl-C test timeout extended |
| [#35655](https://github.com/openai/codex/pull/35655) | Windows Exec | Non-TTY processes now terminated via existing terminal handle on interrupt (fixes Ctrl-C no-op) |
| [#35649](https://github.com/openai/codex/pull/35649) | TUI | Palette cached on `FocusGained`; prevents input loss when terminal focus returns |

*All above PRs are **closed/merged** (bot-authored), indicating a batch landing of internal fixes.*

---

## 5. Feature Request Trends

1. **Workspace-scoped chat history** ([#25319](https://github.com/openai/codex/issues/25319), [#20115](https://github.com/openai/codex/issues/20115)) — developers want conversations bound to repos/projects, not global.
2. **Automatic retry on model capacity errors** ([#22390](https://github.com/openai/codex/issues/22390), [#32020](https://github.com/openai/codex/issues/32020)) — backoff + state retention requested across CLI, App, and Extension.
3. **Configurable default directories for projectless threads** ([#22875](https://github.com/openai/codex/issues/22875)) — reduce friction for ad-hoc tasks.
4. **Conversation archival/export as project artifacts** ([#20115](https://github.com/openai/codex/issues/20115)) — treat chat history as commit-worthy documentation.
5. **Banked reset redemption reliability** ([#34249](https://github.com/openai/codex/issues/34249)) — “Couldn't reset usage” errors erode trust in quota management.

---

## 6. Developer Pain Points (Recurring Themes)

| Theme | Representative Issues | Impact |
|-------|----------------------|--------|
| **Windows Desktop instability** | [#32094](https://github.com/openai/codex/issues/32094), [#35352](https://github.com/openai/codex/issues/35352), [#35701](https://github.com/openai/codex/issues/35701), [#32754](https://github.com/openai/codex/issues/32754), [#35311](https://github.com/openai/codex/issues/35311) | Crashes on browser GPU work, Store update scans, DOM inspection; makes Windows a second-class platform |
| **Sandbox / `apply_patch` broken on Windows** | [#30712](https://github.com/openai/codex/issues/30712), [#31511](https://github.com/openai/codex/issues/31511) | Forces unsafe fallbacks; blocks agentic editing workflows |
| **MCP OAuth token lifecycle** | [#17265](https://github.com/openai/codex/issues/17265), [#13852](https://github.com/openai/codex/issues/13852) | Silent auth failures; requires manual re-auth — breaks automation |
| **Memory / log bloat** | [#24948](https://github.com/openai/codex/issues/24948), [#11324](https://github.com/openai/codex/issues/11324) | Long sessions become unusable; no rotation/compaction controls |
| **State loss on resume/crash** | [#26990](https://github.com/openai/codex/issues/26990), [#25990](https://github.com/openai/codex/issues/25990), [#35669](https://github.com/openai/codex/issues/35669) | Pins, config, sub-agent runtime, and compaction state not durable |
| **Sub-agent / multi-agent config fragility** | [#34700](https://github.com/openai/codex/issues/34700), [#25990](https://github.com/openai/codex/issues/25990) | Model rejection, legacy runtime sticky, instruction inheritance bugs |

---

*Next digest: 2026-07-29. Track live at [github.com/openai/codex](https://github.com/openai/codex).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-28

---

## 1. Today's Highlights
The v0.54.0 nightly release ships two critical fixes: normalization of CRLF line endings in the A2A server (resolving Windows diff failures) and stricter validation of authentication tags in the file keychain. Security hardening continues with a merged PR stripping stale `Authorization` headers when using `GEMINI_API_KEY` auth, preventing `401` errors. Meanwhile, the agent subsystem remains the top source of friction—subagent recovery logic, browser agent hangs, and auto-memory retry loops dominate the issue backlog.

---

## 2. Releases
**v0.54.0-nightly.20260728.gbef611950** ([Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-nightly.20260728.gbef611950) | [PR #28552](https://github.com/google-gemini/gemini-cli/pull/28552))
- **fix(a2a-server)**: Normalize CRLF → LF in `getProposedContent` ([#28531](https://github.com/google-gemini/gemini-cli/pull/28531)) — fixes side-by-side diff highlighting on Windows.
- **fix(core)**: Enforce explicit 128-bit tag length and validation in file keychain ([#28523](https://github.com/google-gemini/gemini-cli/pull/28523)) — hardens credential storage against malformed/corrupted entries across Node runtimes.

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports `GOAL` success after hitting `MAX_TURNS` | Masks real failures; breaks trust in agent delegation. | 12 comments, 2 👍, `priority/p1`, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Blocks core workflow; users disable subagents as workaround. | 8 comments, 8 👍, `priority/p1` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations (EPIC) | 76 behavioral evals across 6 models; foundational for regression prevention. | 7 comments, `priority/p1`, `aiq/eval_infra` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads/search/mapping (EPIC) | Could reduce token noise, misaligned reads, and turn count. | 7 comments, 1 👍, `priority/p2` |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini rarely uses skills/sub-agents autonomously | Undermines extensibility model; requires explicit prompting. | 6 comments, `priority/p2` |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Wastes cycles; pollutes memory inbox with noise. | 5 comments, `priority/p2` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command hangs at "Waiting input" post-completion | Frequent UX breakage; affects simple commands. | 4 comments, 3 👍, `priority/p1`, `effort/medium` |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent lacks session takeover/lock recovery | Fail-fast on locked profiles breaks persistent sessions. | 4 comments, `priority/p3`, `kind/feature` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Platform gap for Linux/Wayland users. | 4 comments, 1 👍, `priority/p1`, `agent/browser` |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory logs secrets before redaction | Security risk: secrets enter model context & logs. | 4 comments, `priority/p2`, `area/security` |

---

## 4. Key PR Progress (10 Notable Merges/Open PRs)

| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#28546](https://github.com/google-gemini/gemini-cli/pull/28546) | **Open** | Security | Strip `Authorization` header when using `GEMINI_API_KEY` — fixes `401 ACCESS_TOKEN_TYPE_UNSUPPORTED`. |
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | **Open** | Security | Block `$VAR`/`${VAR}` variable expansion bypass (GHSA-wpqr-6v78-jr5g); hardens detection logic. |
| [#28531](https://github.com/google-gemini/gemini-cli/pull/28531) | **Closed** | A2A Server | Normalize CRLF→LF in `getProposedContent` — unblocks Windows diff view. |
| [#28523](https://github.com/google-gemini/gemini-cli/pull/28523) | **Closed** | Core | Enforce 16-byte auth tag length & validation in file keychain; handles malformed payloads. |
| [#28389](https://github.com/google-gemini/gemini-cli/pull/28389) | **Closed** | Agent | Add real-world time budget to `sendMessageStream`/`processTurn` — prevents infinite event-loop transitions. |
| [#28397](https://github.com/google-gemini/gemini-cli/pull/28397) | **Closed** | Core | Replace sync FS ops (`mkdtempSync`, `existsSync`, `statSync`) with async in shell tool — eliminates UI stutter. |
| [#28394](https://github.com/google-gemini/gemini-cli/pull/28394) | **Closed** | Core | Clean up temp dirs on background process exit — fixes resource leak. |
| [#28388](https://github.com/google-gemini/gemini-cli/pull/28388) | **Closed** | Agent | Scope `tools.core` wildcard deny to built-in tools only — restores MCP tool access. |
| [#28387](https://github.com/google-gemini/gemini-cli/pull/28387) | **Closed** | Core | Guard `customDeepMerge` against circular references — fixes settings crash (`RangeError`). |
| [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) | **Open** | CLI/macOS | Fall back to embedded Seatbelt profiles if missing — fixes sandbox (`-s`) startup crash on macOS/gMac. |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | **Open** | Security/MCP | Refresh MCP OAuth tokens with stored client ID — fixes dynamic registration refresh loop. |
| [#28485](https://github.com/google-gemini/gemini-cli/pull/28485) | **Open** | Core | Add `gemini-3.5-flash`/`3.6-flash` to model selector for all users. |

---

## 5. Feature Request Trends
1. **Agent Observability & Control** — Demand for visible subagent trajectories (`/chat share` [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), bug reports with subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and config overrides respected by browser agent ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
2. **AST-Aware Tooling** — Active investigation into AST-based read/search/map ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) to reduce turns and token waste.
3. **Memory System Hardening** — Quarantine invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and stop retrying low-signal sessions ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
4. **Evaluation Infrastructure** — Scaling behavioral evals to component level across models ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)).
5. **Self-Awareness & Safety** — Agent must know its own flags/hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) and avoid destructive commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Subagent Reliability**: Hangs (#21409), false success reporting (#22323), unauthorized activation (#22093), and ignored configs (#22267) erode trust in delegation.
- **Shell/Terminal UX**: "Waiting input" ghost state after command completion (#25166), interactive prompt stalls (Vite #22465), and external editor corruption (#24935).
- **Platform Gaps**: Wayland browser agent failure (#21983), macOS sandbox crash without embedded profiles (#28551), symlinked agent files unrecognized (#20079).
- **Model Tool Overload**: 400 errors beyond ~128 tools (#24246) — need smarter tool scoping.
- **Auto-Memory Noise**: Infinite retries on low-signal sessions (#26522), silent patch drops (#26523), and pre-redaction secret exposure (#26525).
- **Config/Escape Bugs**: `\n` escape mishandling (#22466), circular ref crashes in settings merge (#28387), and stale auth headers causing 401s (#28546).

---

*Generated from `google-gemini/gemini-cli` GitHub activity (2026-07-28). All links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-28

---

## 1. Today's Highlights

GitHub Copilot CLI v1.0.76-0 ships with faster MCP tool loading via definition-scoped snapshots and a new `stayInAutopilot` setting that keeps autopilot mode active after task completion by default. Meanwhile, the community is actively discussing a regression in plan-mode that now blocks shell commands (e.g., `gh cli`), a long-standing request for model switching between planning and execution phases, and persistent issues with ACP protocol parity (missing `usage_update` events and context-tier configuration).

---

## 2. Releases

### v1.0.76-0 (2026-07-27)
- **Improved**: MCP tools now load faster from definition-scoped snapshots; added process-wide and per-server cache opt-outs.
- **Improved**: Autopilot mode stays selected after `task_complete` by default. Set `stayInAutopilot: false` in configuration to return to interactive mode after each task.
- **Fixed**: Restored early warning when un… *(truncated in source)*

[View Release](https://github.com/github/copilot-cli/releases/tag/v1.0.76-0)

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#4118** | [`/app` command does not select CWD by default](https://github.com/github/copilot-cli/issues/4118) | High-friction UX: users must manually navigate to current directory every time they open the Copilot app. | **35 👍** (highest in dataset), 0 comments — silent but strong demand |
| **#2792** | [Automatic model switching for planning vs. execution](https://github.com/github/copilot-cli/issues/2792) | Core workflow efficiency: use cheaper/larger-context model for planning, faster model for execution. | **16 👍**, 5 comments — **CLOSED** (likely implemented or deferred) |
| **#4183** | [Auto-compaction doesn’t prevent CAPI 5 MB body limit](https://github.com/github/copilot-cli/issues/4183) | Long tool-heavy sessions hit hard 5 MB request ceiling despite token headroom; breaks continuity. | **10 👍**, 4 comments — **CLOSED** |
| **#1381** | [Rewind unavailable without Git (e.g., Jujutsu)](https://github.com/github/copilot-cli/issues/1381) | Blocks non-Git VCS users from a flagship feature; VS Code Copilot works without Git. | **9 👍**, 3 comments — **OPEN** |
| **#4188** | [Plan-mode regression: blocks shell commands](https://github.com/github/copilot-cli/issues/4188) | Breaks established workflows (e.g., `gh` for issue ops during planning); labeled regression. | **3 👍**, 6 comments — **OPEN** |
| **#1730** | [`sessionStart` hook in `.github/hooks/` not firing](https://github.com/github/copilot-cli/issues/1730) | Hooks are key for org-level automation; broken on Windows/PowerShell. | **3 👍**, 6 comments — **OPEN** |
| **#4161** | [`task_complete` unavailable after re-entering autopilot](https://github.com/github/copilot-cli/issues/4161) | Regression of #1523; breaks autopilot continuity for multi-task sessions. | **3 👍**, 2 comments — **OPEN** |
| **#4233** | [ACP mode missing `usage_update` emission](https://github.com/github/copilot-cli/issues/4233) | ACP clients (Zed, etc.) can’t show context/credit usage — parity gap with interactive CLI. | **2 👍**, 2 comments — **OPEN** |
| **#4224** | [OTel spans for subagents omit billing attributes](https://github.com/github/copilot-cli/issues/4224) | Cost accounting undercounts real usage when `task` tool delegates to subagents. | 0 👍, 1 comment — **OPEN** (observability gap) |
| **#4271** | [`glob` tool false-negatives on multi-segment patterns](https://github.com/github/copilot-cli/issues/4271) | Patterns like `2026/07/*.md` fail unless prefixed with `**/`; breaks intuitive glob usage. | 0 👍, 0 comments — **OPEN** (new, likely underreported) |

---

## 4. Key PR Progress (Noteworthy Merges & Active Work)

| PR | Title | Status | Significance |
|----|-------|--------|--------------|
| **#1598** | [Fix: add trap to clean up temp directory on unexpected exit](https://github.com/github/copilot-cli/pull/1598) | OPEN | Prevents `/tmp` leaks on install failures (network errors, 404s). |
| **#1609** | [Update instructions for adding PAT permissions](https://github.com/github/copilot-cli/pull/1609) | OPEN | Clarifies `Copilot Requests` permission location (Account tab) — reduces auth friction. |
| **#1116** | [Fix misleading doc: 0x models don’t reduce quota](https://github.com/github/copilot-cli/pull/1116) | OPEN | Corrects README; aligns docs with actual quota behavior. |
| **#988** | [Fix missing `brew` prefix in install command](https://github.com/github/copilot-cli/pull/988) | OPEN | `brew install github/copilot/copilot-cli` vs. broken `copilot-cli` formula. |
| **#1333** | [Fix minor grammar & Markdown formatting](https://github.com/github/copilot-cli/pull/1333) | OPEN | Polish — no functional change. |
| **#3928** | [Add `.gitignore` and settings configuration](https://github.com/github/copilot-cli/pull/3928) | OPEN | Project hygiene; may indicate repo restructuring. |
| **#2800** | [Add initial devcontainer configuration](https://github.com/github/copilot-cli/pull/2800) | OPEN | Enables consistent dev environments — signal of contributor onboarding investment. |
| **#4030** | [Add GitHub Actions workflow for Jekyll deployment](https://github.com/github/copilot-cli/pull/4030) | OPEN | Docs site automation. |
| *#3473, #3873, #3880, #4057* | *(spam / low-signal PRs)* | OPEN | Contain irrelevant content (marketing links, UI fragments, empty bodies) — likely auto-closed or ignored. |

> **Note**: Most PRs updated in the last 24h are stale (months old) or appear to be spam. The actionable ones above are documentation, install hygiene, and contributor experience improvements — no major feature PRs in this window.

---

## 5. Feature Request Trends (Distilled from Issues)

1. **ACP Protocol Parity** — Multiple issues (#4233, #4174, #4275) demand ACP server expose: `usage_update` events, context-tier config, token/cost metrics. Critical for Zed/editor integrations.
2. **Model Routing & Tiering** — #2792 (planning vs. execution models), #4275 (contextTier in ACP), #4272 (policy-blocked models) show demand for granular model control.
3. **Autopilot Persistence** — #3977, #4161, v1.0.76’s `stayInAutopilot` flag: users want autopilot to survive task boundaries without manual re-entry.
4. **VCS-Agnostic Features** — #1381 (Rewind without Git) reflects broader need to decouple CLI features from Git assumptions.
5. **Hook & Automation Reliability** — #1730 (`sessionStart` hook), #3264 (symlink docs for `.copilot/`) signal org-level automation investment.
6. **Observability & Cost Accounting** — #4224 (OTel billing attrs), #4183 (CAPI limits), #4233 (usage updates) — teams need accurate telemetry.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Plan-mode regressions** | #4188 (blocks `gh`, shell cmds), #1272 (UI doesn’t reflect mode switch) | 2 high-engagement issues |
| **ACP/Editor integration gaps** | #4233 (no `usage_update`), #4174 (no token usage), #4275 (no contextTier), #4258 (BYOK + `-i` broken) | 4 distinct issues |
| **Windows/Terminal rendering bugs** | #4263 (content disappears on scroll), #4159 (blank UI after prompt), #4191 (clipboard in WSL+tmux) | 3 platform-specific reports |
| **Process/resource leaks** | #4163 (zombie processes — **CLOSED**), #1598 (temp dir leak — PR open) | 2 kernel-level issues |
| **Glob/tool behavior surprises** | #4271 (multi-segment patterns fail), #1730 (hooks don’t fire) | 2 tooling reliability issues |
| **Auth/credential friction** | #4273 (macOS keychain XARA mismatch), #1609 (PAT permission hidden) | 2 auth-flow complaints |
| **Session/UX continuity** | #4266 (no exit screen), #4281 (stale “pending” badge), #4118 (CWD not default in `/app`) | 3 session-management papercuts |

---

*Digest generated from GitHub data as of 2026-07-28. Links point to live issues/PRs on github.com/github/copilot-cli.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-28

## Today's Highlights
No new releases shipped in the last 24 hours. The community is actively addressing critical reliability bugs in the VS Code extension (plan-mode clickability, approval-prompt rendering) and a silent hook-execution failure caused by GC collecting fire-and-forget tasks. Two PRs landed to fix Windows Unicode crashes on non-UTF-8 consoles.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1070](https://github.com/MoonshotAI/kimi-cli/issues/1070) | **Login failed: Cannot connect to auth.kimi.com:443** (CLOSED) | Network-level auth failure blocking all new users; 8 comments indicate widespread impact. | 👍 0 · 8 comments · Closed 2026-07-27 |
| [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) | **[VSCode] Plan mode file path not clickable in chat webview** (OPEN) | Breaks core plan-mode UX — developers can’t jump to files from the chat pane. | 👍 0 · 3 comments · Updated 2026-07-27 |
| [#2564](https://github.com/MoonshotAI/kimi-cli/issues/2564) | **PostToolUse / PostToolUseFailure hooks dropped by GC** (OPEN) | Silent, non-deterministic hook loss breaks automation pipelines and custom tooling. | 👍 0 · 0 comments · Created 2026-07-27 |
| [#2563](https://github.com/MoonshotAI/kimi-cli/issues/2563) | **[VSCode] Approval prompts intermittently never render** (OPEN) | Causes indefinite stalls or 600 s silent timeouts; blocks any tool-use requiring confirmation. | 👍 0 · 0 comments · Created 2026-07-27 |

---

## Key PR Progress
| # | PR | Type | Summary |
|---|----|------|---------|
| [#2565](https://github.com/MoonshotAI/kimi-cli/pull/2565) | **fix(hooks)** | Holds strong reference to fire-and-forget hook tasks so GC can’t collect them mid-execution. Directly fixes #2564. |
| [#2539](https://github.com/MoonshotAI/kimi-cli/pull/2539) | **fix(mcp)** | Normalizes MCP tool names for Moonshot API: stable aliases, adds missing root `object` type, distributes exact `anyOf`/required schema. |
| [#2562](https://github.com/MoonshotAI/kimi-cli/pull/2562) | **fix(llm)** | Adds `prompt_cache_key` boolean to Kimi provider config; omits session-derived cache key when `false`. Docs in EN/CN. |
| [#2561](https://github.com/MoonshotAI/kimi-cli/pull/2561) | **fix(i18n)** | Guards banner printing against `UnicodeEncodeError` on Windows (GBK/CP936) — fixes #1436. |
| [#2560](https://github.com/MoonshotAI/kimi-cli/pull/2560) | **fix(i18n)** | Same class of fix for `kimi web` banner when stdout redirected on Chinese-locale Windows — fixes #2532. |

---

## Feature Request Trends
1. **VS Code extension polish** — Clickable paths in plan mode (#2317), reliable approval prompts (#2563).  
2. **Hook reliability** — Deterministic `PostToolUse`/`PostToolUseFailure` execution (#2564).  
3. **MCP interoperability** — Stable, spec-compliant tool schemas for Moonshot API (#2539).  
4. **Prompt-cache control** — Opt-out flag for cache keys to avoid stale context (#2562).  
5. **Windows console robustness** — First-class non-UTF-8 encoding support (#2560, #2561).

---

## Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **VS Code extension flakiness** | Plan-mode links dead, approval modals vanish, 600 s timeouts | 2 critical issues in 24h |
| **Silent hook loss** | GC collects async tasks → hooks never run or die mid-way | 1 new issue + immediate fix PR |
| **Windows encoding crashes** | `UnicodeEncodeError` on startup / `kimi web` launch (GBK/CP936) | 2 PRs fixing distinct entry points |
| **Auth connectivity** | `auth.kimi.com:443` unreachable for some networks | 1 closed issue with 8 comments |
| **Prompt cache opacity** | No way to disable session-derived cache key | 1 PR adding explicit toggle |

---  
*Data sourced from `github.com/MoonshotAI/kimi-cli` (issues & PRs updated 2026-07-27 → 2026-07-28).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-28

## Today's Highlights
OpenCode shipped v1.18.7 with macOS fullscreen titlebar fixes and project selector scrolling improvements. The community is actively resolving provider integration issues (Gemini, Azure, Bedrock, Zen/Go models) and TUI configuration mismatches. A major refactor is underway to establish V2 session controllers and upgrade the MCP client SDK to v2, signaling architectural evolution toward better extensibility.

---

## Releases
### v1.18.7 (2026-07-28)
**Desktop bugfixes:**
- Removed extra titlebar inset in fullscreen mode on macOS
- Fixed command palette entries reappearing incorrectly when shadowed commands are removed
- Added scrolling to project selector dropdown for long lists (contributed by @david1gp)

[View Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.7)

---

## Hot Issues
| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#26628](https://github.com/anomalyco/opencode/issues/26628) | **TUI config schema mismatch + leader none crash** | Schema expects `keymap` but v1.14.46 rejects it; disabling leader key crashes TUI. Blocks keyboard-driven workflows. | 14 comments, active debugging |
| [#14494](https://github.com/anomalyco/opencode/issues/14494) | **Azure/Cognitive Services setup unclear** | Missing `AZURE_RESOURCE_NAME` env var breaks `opencode auth login`. Documentation gap for enterprise Azure users. | 12 comments, 3 👍, long-standing |
| [#18273](https://github.com/anomalyco/opencode/issues/18273) | **Nix flake build fails** | Building OpenCode as Nix flake input broken for home-manager users. Affects reproducible dev environments. | 10 comments, 5 👍 |
| [#21793](https://github.com/anomalyco/opencode/issues/21793) | **Permission skill pattern rules not enforced** | `permission.skill` pattern `"lark-*": "deny"` doesn't hide matching skills (lark-doc, lark-base, lark-mail). Security/access control gap. | 8 comments |
| [#29034](https://github.com/anomalyco/opencode/issues/29034) | **Free models invisible in TUI (Zen API)** | `qwen3.6-plus-free` and `minimax-m2.5-free` exist in Zen API but missing from `opencode models` TUI command. Model discovery mismatch. | 7 comments |
| [#29571](https://github.com/anomalyco/opencode/issues/29571) | **Conversation stuck after "vision not enabled" (Copilot)** | Org-managed GitHub Copilot vision error permanently blocks conversation. No recovery path. | 6 comments, 3 👍 |
| [#16962](https://github.com/anomalyco/opencode/issues/16962) | **Clipboard copy broken over SSH (Mac→Mac)** | "Copied to clipboard" notification fires but system clipboard unchanged over SSH. Remote dev workflow blocker. | 6 comments, 2 👍 |
| [#29520](https://github.com/anomalyco/opencode/issues/29520) | **/undo rolls back conversation only, not files** | Both TUI and Desktop: `/undo` reverts chat but leaves file changes intact; "Last turn changes" empty. Git-managed projects affected. | 6 comments |
| [#38830](https://github.com/anomalyco/opencode/issues/38830) | **AutoScroller depends on Scroller plugin (runtime error)** | Plugin dependency resolution failure on startup: `AutoScroller plugin depends on Scroller plugin`. Blocks UI initialization. | 5 comments, recent (Jul 25) |
| [#29200](https://github.com/anomalyco/opencode/issues/29200) | **Invalid JSONC causes cryptic "Unexpected server error"** | Any syntax/schema error in `opencode.jsonc` yields unhelpful multi-request failure message. Poor DX for config mistakes. | 5 comments, 2 👍 |

---

## Key PR Progress
| # | PR | Type | Summary |
|---|----|------|---------|
| [#39248](https://github.com/anomalyco/opencode/pull/39248) | **feat: Graph Engineering analysis & 3 design proposals** | Architecture | Comprehensive doc on Graph Engineering for OpenCode: feasibility analysis + 3 proposals (Config-Driven Plugin, Native Runtime, MCP Engine). Sets direction for plugin/runtime evolution. |
| [#39247](https://github.com/anomalyco/opencode/pull/39247) | **feat(mcp): upgrade client SDK to v2** | Infrastructure | Migrates from `@modelcontextprotocol/sdk@1.29.0` to `@modelcontextprotocol/client@2.0.0-beta.5`. Adds stateless/legacy negotiation, SDK-delegated pagination, list-change subscriptions, OAuth issuer stamping. |
| [#38924](https://github.com/anomalyco/opencode/pull/38924) | **fix(provider): omit deprecated Gemini sampling defaults** | Provider | Synthesizes sampling defaults only for supported Gemini families (2.5, 3 Flash/Pro, 3.1, 3.5 Flash); omits `temperature`/`top_p`/`top_k` for 3.5 Flash-Lite, 3.6+, unknown/future models. Fixes #38767. |
| [#39245](https://github.com/anomalyco/opencode/pull/39245) | **fix(core): refresh system prompt references** | Core | Points system prompts at live V2 docs; replaces renamed/nonexistent tool refs with current V2 names; aligns Gemini/Codex/GPT guidance with model-specific tool availability. |
| [#39240](https://github.com/anomalyco/opencode/pull/39240) | **fix(core): align Meta system prompt** | Core | Restores Meta prompt from `dev`; removes obsolete `TodoWrite` guidance; updates tool names to V2 casing; points questions at V2 docs index. |
| [#39242](https://github.com/anomalyco/opencode/pull/39242) | **fix(tui): hide background hint when all work backgrounded** | TUI | Fixes race where `ctrl+b` hint checked `state.metadata.background` before async `ctx.metadata()` populated. Resolves #36940. |
| [#39239](https://github.com/anomalyco/opencode/pull/39239) | **fix(core): keep config root watches alive, ignore vendored trees** | Core | Two watch fixes: (1) deleted config files stay watched so recreation triggers reload; (2) vendored trees inside config roots ignored. From watch-pipeline audit. |
| [#39241](https://github.com/anomalyco/opencode/pull/39241) | **fix(app): follow visual tab order** | Desktop | Derives next/prev tab traversal from visible titlebar strip order; skips unresolved tabs hidden by new layout; preserves wraparound. Unit + Playwright tests. |
| [#39223](https://github.com/anomalyco/opencode/pull/39223) | **test(core): add scoped TestLLM service** | Testing | Revives historical `TestLLM` pattern for V2 at `LLMClient.Service` seam. Provides `stop`, `text`, `textWithUsage`, `tool` response constructors. Simplifies `session-runner.test.ts`. |
| [#39224](https://github.com/anomalyco/opencode/pull/39224) | **feat(core): reload configured plugins from source edits** | Plugin System | Local plugin paths (`"plugins": ["./tools/my-plugin.ts"]`) now hot-reload on edit, matching auto-discovered `.opencode/plugin/` behavior from #39174. |

---

## Feature Request Trends
1. **Provider Model Parity & Discovery** — Multiple issues request support for new models (DeepSeek-V4-Pro on SiliconFlow, Kimi K3, Qwen variants) and fix model visibility mismatches between APIs (Zen) and TUI.
2. **Azure/Azure AI Foundry First-Class Support** — Clear demand for proper Azure Cognitive Services and Foundry partner deployment handling (quota errors, 4096 token caps, missing env vars).
3. **Session State & Undo Reliability** — `/undo` not reverting file changes, session mode inheritance bugs, and conversation stuck states indicate need for robust transactional session management.
4. **MCP Ecosystem Maturity** — Requests for HTTP response header propagation (pagination, rate-limit), SDK v2 upgrade, and remote MCP server improvements.
5. **Configuration DX** — Schema validation errors need actionable messages; config hot-reload for local plugins; TUI config schema sync.
6. **Cross-Platform Remote Development** — SSH clipboard, Nix flake builds, Windows sidecar crashes (ACCESS_VIOLATION) highlight remote/containerized dev friction.

---

## Developer Pain Points
- **Provider fragmentation**: Each provider (Gemini, Azure, Bedrock, Copilot, Zen/Go) has unique quirks—model naming, parameter support (e.g., Kimi K3 rejects `temperature`), API format compatibility (`oa-compat`), and quota/error handling.
- **Config/schema drift**: TUI config uses `keybinds` but schema expects `keymap`; invalid JSONC yields generic "Unexpected server error" instead of line/column diagnostics.
- **Session integrity**: `/undo` is conversation-only; new sessions inherit current mode instead of `default_agent`; vision errors permanently wedge conversations.
- **Remote/SSH workflows**: Clipboard sync broken Mac→Mac over SSH; Windows sidecar crashes (exit code 3221225477 = ACCESS_VIOLATION); Nix flake integration broken.
- **Plugin/runtime boundaries**: AutoScroller/Scroller dependency resolution fails at runtime; local plugin hot-reload only worked for auto-discovered paths until #39224.
- **Model discovery UX**: Free models enabled in Zen workspace but invisible in `opencode models` TUI command—users can't find available models.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-28

## Today's Highlights
The Pi codebase saw intense maintenance activity with 29 issues and 25 PRs updated in the last 24 hours. Critical fixes landed for AWS Bedrock credential handling, Anthropic request tracing, and extension lifecycle leaks. The community is actively addressing provider compatibility gaps (Fireworks/Kimi K3, OpenCode Go naming) and TUI performance regressions affecting remote-session users.

## Releases
No new releases published in the last 24 hours.

---

## Hot Issues (Top 10 by Impact & Engagement)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6768](https://github.com/earendil-works/pi/issues/6768) | **Compaction broken with Copilot Enterprise** | Blocks enterprise users on both OpenAI & Anthropic paths; 421/400 errors during context summarization. | 👍 12 • 14 comments • Active investigation |
| [#6970](https://github.com/earendil-works/pi/issues/6970) | **GitHub Copilot Plugin auth invalidates `github-copilot` provider** | Using the VS Code plugin instead of OAuth causes token collisions across devices (Neovim + Pi). | 👍 1 • 4 comments • Cross-tool conflict |
| [#7161](https://github.com/earendil-works/pi/issues/7161) | **`anthropic-messages` missing `x-client-request-id`** | Breaks session affinity in proxies/gateways that route by request ID; affects multi-account Claude setups. | 4 comments • Infra-critical |
| [#7198](https://github.com/earendil-works/pi/issues/7198) | **Markdown renderer crashes on nested email quotes** | `RangeError: Maximum call stack size exceeded` — crashes active sessions and corrupts saved transcripts. | 2 comments • Data-loss risk |
| [#7193](https://github.com/earendil-works/pi/issues/7193) | **Extension event-bus listeners leak across reloads** | Embedded Pi integrations accumulate stale listeners; memory/behavior bugs in long-running hosts. | New • Lifecycle bug |
| [#7195](https://github.com/earendil-works/pi/issues/7195) | **Extensions don't load if directory is a symlink** | Breaks dotfile-managed extension workflows; `~/.pi/agent/extensions` symlink ignored. | 1 comment • DX regression |
| [#7194](https://github.com/earendil-works/pi/issues/7194) | **Full re-render every 1s when tool card scrolls out of viewport** | Kills performance in remote sandbox/PTY-forwarded sessions; 15% CPU hotspot in `visibleWidth`. | 1 comment • Remote-user pain |
| [#7170](https://github.com/earendil-works/pi/issues/7170) | **AWS Bedrock `credential_process` unsupported** | Standard AWS profile feature (external credential commands) fails; blocks enterprise Bedrock adoption. | 2 comments • Auth gap |
| [#7157](https://github.com/earendil-works/pi/issues/7157) | **OpenCode Go provider shows as "OpenCode Zen Go"** | Misleading display name in `--list-models`; trivial fix but confusing for users. | 5 comments • Quick win |
| [#7003](https://github.com/earendil-works/pi/issues/7003) | **Update TypeBox after multi-type keyword guard fix** | Unblocks JSON Schema validation for nullable arrays with `items`; pinned at 1.1.38. | 1 comment • Dependency hygiene |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#7172](https://github.com/earendil-works/pi/pull/7172) | **fix(ai): send `x-client-request-id` on anthropic-messages** | CLOSED | Adds session-affinity header parity with OpenAI paths; fixes #7161. |
| [#7173](https://github.com/earendil-works/pi/pull/7173) | **fix(ai): rename OpenCode Zen Go → OpenCode Go** | CLOSED | One-line display-name fix; resolves #7157. |
| [#7176](https://github.com/earendil-works/pi/pull/7176) | **fix(ai): prefer configured Bedrock profile over ambient AWS keys** | OPEN | Ensures explicit Pi auth profile wins over `AWS_ACCESS_KEY_ID` env; unblocks #7170. |
| [#7184](https://github.com/earendil-works/pi/pull/7184) | **fix(ai): strip multimodal media markers from tool results** | CLOSED | Prevents tokenizer crashes when markers (`|image|`) exist without bitmaps. |
| [#7169](https://github.com/earendil-works/pi/pull/7169) | **fix(coding-agent): dedupe byte-identical context files** | CLOSED | Content-hash dedup for `AGENTS.md`/`CLAUDE.md` in worktree setups; fixes #7171. |
| [#7163](https://github.com/earendil-works/pi/pull/7163) | **feat: search index sqlite (FTS5)** | OPEN | Adds `SessionRepo.search()` with contentless FTS5 virtual table for SQLite backend. |
| [#7191](https://github.com/earendil-works/pi/pull/7191) | **feat(extensions): expose `ctx.scopedModels`** | CLOSED | Extensions can now read session-scoped model list; enables model-picker UIs (#7192). |
| [#7178](https://github.com/earendil-works/pi/pull/7178) | **feat(coding-agent): show status on tool-output toggle (Ctrl+O)** | CLOSED | Mirrors thinking-block feedback; UX consistency (#7180). |
| [#7183](https://github.com/earendil-works/pi/pull/7183) | **test(settings): regression tests for `autocompleteMaxVisible` persistence** | CLOSED | Locks down fix for #7179 (setting reset on restart). |
| [#7022](https://github.com/earendil-works/pi/pull/7022) | **fix(coding-agent): guard tree navigation during responses** | OPEN (WIP) | PoC to block `/tree` during streaming; prevents state corruption when navigating mid-turn. |

---

## Feature Request Trends
1. **Extension API surface expansion** — Scoped models (#7192), terminal color-scheme events (#7197), mouse support in composer (#7185), custom editor components (#7190).
2. **Provider parity & new model support** — Fireworks/Kimi K3 (#7199), Bedrock Opus 5 adaptive thinking (#7081), Z.AI `max_tokens` fix (#7174), OpenCode Go rename (#7157).
3. **Session/search infrastructure** — SQLite FTS5 search index (#7163), auth token introspection commands (#7168), scoped-model CLI exposure.
4. **TUI performance & reliability** — LRU `visibleWidth` cache (#7196), viewport-aware re-render reduction (#7194), markdown renderer stack safety (#7198).

---

## Developer Pain Points (Recurring Themes)
- **Auth fragmentation**: Copilot Plugin vs OAuth (#6970), Bedrock `credential_process` (#7170), ambient AWS key override (#7176), missing `x-client-request-id` for Anthropic (#7161).
- **Extension lifecycle fragility**: Symlink blind spot (#7195), failed git installs poisoning dir (#7189), event-bus listener leaks (#7193), peerDependency mismatch between `git:` vs `npm:` installs (#7182).
- **Remote/PTY-forwarded session degradation**: 1 Hz full re-renders (#7194), input readiness race (#7177), Shift+Enter handling on Windows Terminal (#7175).
- **Settings persistence bugs**: `autocompleteMaxVisible` reset (#7179), system-prompt guideline over-triggering bash calls (#7128).
- **Markdown/rendering edge cases**: Nested quote stack overflow (#7198), multimodal marker crashes (#7184/#7181), border-color bleed in custom editors (#7190).

---

*Digest generated from github.com/badlogic/pi-mono activity (2026-07-27 → 2026-07-28).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-28

---

## 1. Today's Highlights

The team shipped two DSW benchmark prereleases against `v0.20.0-nightly`, with SWE-bench Verified results showing **376/500 tasks resolved** (status: QUARANTINED). On the product side, a major TUI overhaul landed via **PR #7892**, turning the Dynamic Workflow detail view into a compact execution console with phase rail, live agent progress, and terminal errors. Meanwhile, Web Shell gained **native Live Voice (macOS, opt-in)**, **channel configuration flows** for DingTalk/WeCom/Feishu, and a **git branch picker + PR creation flow**—signaling a push toward parity with desktop IDE workflows.

---

## 2. Releases

| Release | Type | Key Notes |
|---------|------|-----------|
| `dsw-manual-poc-20260727-2` | Benchmark prerelease | Non-production; benchmarked against `v0.20.0-nightly.20260722.b98306b7e` |
| `dsw-manual-poc-20260727-1` | Benchmark prerelease | Same baseline; SWE-bench Verified: **376 resolved / 116 unresolved / 1 execut** (QUARANTINED) |

> **Note**: No user-facing CLI version was published today. The QUARANTINED status suggests the benchmark run is under review or isolation.

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Status | Why It Matters | Community Signal |
|---|-------|--------|----------------|------------------|
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | Fleet Shepherd Dashboard | OPEN | Auto-maintained CI health dashboard; shows 0 syncs/dispatches last tick—may indicate pipeline idle | 4 comments, bot-maintained |
| [#7687](https://github.com/QwenLM/qwen-code/issues/7687) | feat(dingtalk): support outbound image delivery | CLOSED | Enables agents to send screenshots/charts directly in DingTalk, not just file paths | 4 comments, implemented via PR #7893 |
| [#7383](https://github.com/QwenLM/qwen-code/issues/7383) | feat(ci): scheduled repo-hygiene skill | OPEN | Automates trivial doc/test fixes (1–9 line changes) to reduce review overhead | 3 comments, high leverage |
| [#7887](https://github.com/QwenLM/qwen-code/issues/7887) | feat(tui): Dynamic Workflow execution console | CLOSED | Duplicate of #7890; tracked in PR #7892 redesign | 3 comments |
| [#7890](https://github.com/QwenLM/qwen-code/issues/7890) | feat(tui): Dynamic Workflow execution console | OPEN | Active tracking issue for the TUI console redesign | 2 comments |
| [#7889](https://github.com/QwenLM/qwen-code/issues/7889) | Main CI failed: E2E Tests on 6a432ad | CLOSED (dup) | E2E failure on main; deduplication logic (PR #7792) would attach to existing issue | 3 comments, bot-reported |
| [#7885](https://github.com/QwenLM/qwen-code/issues/7885) | PR #7885 checks in flight | — | CI caching PR (#7885) running verification | Part of Fleet Shepherd tick |

**Trend**: TUI/UX polish (Dynamic Workflow console), channel extensibility (DingTalk images, Web Shell config), and CI hygiene automation dominate.

---

## 4. Key PR Progress (10 Important)

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#7892](https://github.com/QwenLM/qwen-code/pull/7892) | feat(cli): redesign Dynamic Workflow execution console | Feature | **Major TUI overhaul**: phase rail, live agent progress, signals, terminal errors—makes long-running workflows glanceable |
| [#7893](https://github.com/QwenLM/qwen-code/pull/7893) | feat(web-shell): add Channel configuration flows | Feature | First writable config UX for DingTalk/WeCom/Feishu; Pairing/Open access, credential-safe editing |
| [#7859](https://github.com/QwenLM/qwen-code/pull/7859) | feat(web-shell): add native Live Voice | Feature | **macOS opt-in**: double-⌘ to start voice conversation, projectless, mute/switch—brings voice UX to browser |
| [#7731](https://github.com/QwenLM/qwen-code/pull/7731) | feat(web-shell): git branch picker, commit dialog, create PR flow | Feature | IntelliJ-style branch picker (search, remote grouping, tags), commit dialog, PR creation—closes IDE parity gap |
| [#7888](https://github.com/QwenLM/qwen-code/pull/7888) | feat: robust ripgrep | Fix | Retries on `EAGAIN` worker failure (`--threads 1`); tightens error classification—improves search reliability |
| [#7484](https://github.com/QwenLM/qwen-code/pull/7484) | fix(core): bridge tool-result images for text-only models | Fix | Routes images from tool results (builtin, MCP, extensions) to text-only models via shared staging |
| [#7894](https://github.com/QwenLM/qwen-code/pull/7894) | feat: Gate session writer lease behind opt-in | Feature | Cross-process write fencing (`experimental.sessionWriterLease`), opt-in, ACP/daemon only—prevents corruption |
| [#7882](https://github.com/QwenLM/qwen-code/pull/7882) | fix(core): exclude ask_user_question from wildcard subagent tools | Fix | Prevents background subagents from hanging on `ask_user_question` (no user reachable) |
| [#7812](https://github.com/QwenLM/qwen-code/pull/7812) | fix(serve): Release managed session writer locks on shutdown | Fix | Cooperative shutdown: drains transcript work, retires locks atomically, runs `SessionEnd` hooks |
| [#7792](https://github.com/QwenLM/qwen-code/pull/7792) | feat(ci): Deduplicate E2E failure issues by commenting | CI | Reduces issue spam: searches for existing open issue by commit SHA or similar failure before creating new |

---

## 5. Feature Request Trends

| Direction | Evidence (Issues + PRs) |
|-----------|-------------------------|
| **Terminal UX / Execution Console** | #7887, #7890 → PR #7892 (phase rail, live progress, error pane) |
| **Web Shell → Desktop Parity** | PR #7859 (Live Voice), #7731 (git picker/PR flow), #7893 (channel config), #7808 (split-pane actions) |
| **Channel/Integration Extensibility** | #7687 (DingTalk images), PR #7891 (loop tools in daemon sessions), #7826 (GitHub notification routing) |
| **CI/CD Hygiene & Automation** | #7383 (scheduled repo-hygiene skill), PR #7792 (E2E issue dedup), #7885 (npm cache), #7414 (revert-pattern triage) |
| **Agent Safety & Concurrency** | PR #7894 (writer lease opt-in), #7812 (lock release on shutdown), #7821 (Todo Stop Guard hardening) |
| **Model-Tool Bridging** | PR #7484 (images for text-only models), #7882 (subagent tool filtering) |

---

## 6. Developer Pain Points (Recurring)

| Pain Point | Frequency / Evidence |
|------------|----------------------|
| **Subagent/background agent hangs** | PR #7882: `ask_user_question` blocks forever in forked agents—no user channel |
| **Writer lock contention / corruption risk** | PR #7894 (opt-in lease), #7812 (shutdown lock release), #7821 (Todo Stop Guard) |
| **E2E test flakiness & issue noise** | #7889 (CI failure), PR #7792 (deduplication), PR #7885 (npm cache for speed) |
| **Search reliability (ripgrep)** | PR #7888: `EAGAIN` worker failures mistaken for no-match |
| **Trivial PR review overhead** | #7383: 1–9 line doc/test fixes consume disproportionate review time |
| **Voice/UX parity in Web Shell** | PR #7859 (Live Voice), #7731 (git/PR), #7893 (channel config)—all addressing "browser feels second-class" |
| **Dynamic Workflow observability** | #7887/#7890 → PR #7892: users can't understand long-running multi-phase runs at a glance |

---

*Generated from `github.com/QwenLM/qwen-code` data (2026-07-28 24h window). All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-28

---

## 1. Today's Highlights

The project is in active v0.9.2 release candidate stabilization with multiple harvest PRs merging today. Key focus areas include Windows CRLF editing fixes, cost tracking overhaul, dead-code reduction with CI guardrails, and onboarding/fleet UX improvements. A recording harness for real-session demos landed to address the long-standing "show don't tell" documentation gap.

---

## 2. Releases

**No new releases in the last 24 hours.** The v0.9.2 release candidate integration (PR #4911) remains in draft/umbrella state with 82 commits ahead of `main`.

---

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Reaction |
|---|---|---|
| [#4042](https://github.com/Hmbown/CodeWhale/issues/4042) **CLOSED** — Environment-level tool sandboxing for sub-agents | Runtime enforcement of tool restrictions across sessions, sub-agents, Fleet workers, MCP servers. Critical for security/compliance. | 20 comments, high engagement; merged as part of v0.9.0 lane |
| [#998](https://github.com/Hmbown/CodeWhale/issues/998) **OPEN** — 文案展示不全 (truncated text, requests hover tooltip) | UX polish: long labels truncate without tooltip fallback; affects readability in Chinese UI. | 10 comments, 1 👍; persistent since May |
| [#4526](https://github.com/Hmbown/CodeWhale/issues/4526) **CLOSED** — StepFun Plan / OpenCode Go dedicated endpoints | Provider config gap: subscription-only endpoints missing from model provider setup. | 6 comments; closed via provider work in #4467/#4927 |
| [#3983](https://github.com/Hmbown/CodeWhale/issues/3983) **CLOSED** — v0.9.2 Runtime: make Work state model-visible | Core agent UX: checklist + strategy context must be visible to model on parent turns for continuity. | 5 comments; part of v0.9.2 "agent-ready" lane |
| [#4698](https://github.com/Hmbown/CodeWhale/issues/4698) **CLOSED** — Default skill-pack routing metadata & smoke docs | Bundled skill pack (v5) shipped in v0.9.1; follow-ups for routing metadata and live verification. | 4 comments; non-blocking follow-ups now explicit |
| [#2342](https://github.com/Hmbown/CodeWhale/issues/2342) **OPEN** — Click output files to preview | High-value workflow: avoid context-switch to file tree; directly open referenced files from transcript. | 4 comments; open since May, no movement |
| [#4764](https://github.com/Hmbown/CodeWhale/issues/4764) **OPEN** — `edit_file` fails on CRLF files (Windows) | Platform parity blocker: exact-match search breaks on `\r\n`; affects all Windows users. | 3 comments; **fix PR #4942 opened today** |
| [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) **OPEN** — 464 `#[allow(dead_code)]` hiding drift | Tech debt: compiler cannot report dead code; 143 files affected. CI ratchet needed. | 3 comments; **partial fix PR #4938 merged today** (bounded slice + budget ratchet) |
| [#3897](https://github.com/Hmbown/CodeWhale/issues/3897) **CLOSED** — O(N²) markdown re-parse on streaming | Perf: full message re-render per chunk; impacts long responses. | 3 comments; closed, likely addressed in visual slices |
| [#4906](https://github.com/Hmbown/CodeWhale/issues/4906) **OPEN** — Record real session for site/README GIF | Marketing/onboarding: terminal agent is motion-heavy; zero video evidence on landing page. | 2 comments; **recording harness PR #4940 merged today** |

---

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|---|---|---|
| [#4942](https://github.com/Hmbown/CodeWhale/pull/4942) | **OPEN** | **fix(tools): preserve CRLF edits** — Normalizes search to LF, maps spans back to CRLF bytes, preserves replacement newline style. Directly fixes #4764. |
| [#4940](https://github.com/Hmbown/CodeWhale/pull/4940) | **CLOSED** | **feat(media): executable capture harness for v0.9.2 real session** — Tooling for #4906; supplies recording pipeline (needs live creds + human taste call). |
| [#4938](https://github.com/Hmbown/CodeWhale/pull/4938) | **CLOSED** | **chore: land bounded dead-code slice + CI budget ratchet** — Removes safe subset of 464 `allow(dead_code)`; adds gate to prevent regression. Addresses #4785. |
| [#4935](https://github.com/Hmbown/CodeWhale/pull/4935) | **CLOSED** | **fix(tui): stop ambient jellyfish reading as a face** — Silhouette correction: `(v_v)`/`(v.v)` → sea-life frames, not emoji faces. |
| [#4937](https://github.com/Hmbown/CodeWhale/pull/4937) | **OPEN** | **fix(tui): finalize stale shell transcript cells** — Stops live spinner for dead PTY jobs; renders static stale status; suppresses sidebar spinner. |
| [#4912](https://github.com/Hmbown/CodeWhale/pull/4912) | **CLOSED** | **feat(web): v0.9.2 docs guide/vocabulary, getting-started path** — Routes, sitemap, homepage flow, a11y landmarks, media manifest. |
| [#4913](https://github.com/Hmbown/CodeWhale/pull/4913) | **CLOSED** | **test(preview): provider-free manifest×wire matrix** — WireMock tests for 4 benchmark routes (GLM-5.2, GLM-5-Turbo, kimi-k2, etc.). |
| [#4931](https://github.com/Hmbown/CodeWhale/pull/4931) | **OPEN** | **Migrate QA PTY test harness from vt100 to rio-vt** — Swaps terminal engine for Rio's; same `Frame` helper API, better fidelity. |
| [#4928](https://github.com/Hmbown/CodeWhale/pull/4928) | **CLOSED** | **feat(tui): add `thinking_default_expanded` setting** — Reasoning blocks expanded by default; Space still toggles. Fixes #4925 (SSH/tmux Space capture). |
| [#4924](https://github.com/Hmbown/CodeWhale/pull/4924) | **CLOSED** | **feat(fleet): saved exact Fleets + reasoning Router** — Frozen (provider,model) routes, permission/shell ceilings, role-alias canonicalization, collision detection. |

---

## 5. Feature Request Trends

1. **Provider/Subscription Endpoint Completeness** — Users need dedicated endpoints for paid tiers (StepFun Plan, OpenCode Go, Moonshot, MiniMax). Closed via #4467, #4526, #4927.
2. **Session/State Visibility for Models** — Making Work surface (checklist, strategy, fork-state) model-visible on parent turns (#3983, #3984).
3. **Click-to-Action in Transcript** — File preview (#2342), command replay, shell detach (#4930) — reducing context switches.
4. **Reasoning/Thinking UX Control** — Default expanded (#4925/#4928), SSH-friendly keybindings, per-model thinking toggles.
5. **Cost Transparency** — Route/token-class breakdown, CNY derivation, cache-write pricing (#4797, #4939).
6. **Onboarding & Demo-First Experience** — Real session recording (#4906/#4940), offline explore mode, remote mode matrix (#4926).
7. **Fleet/Sub-Agent Governance** — Saved exact Fleets, tool sandboxing (#4042), reasoning router, permission ceilings (#4924).

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|---|---|
| **Windows CRLF editing broken** | #4764 (3 comments), fix in #4942; exact-match search fails on `\r\n` files |
| **SSH/tmux key capture (Space)** | #4925, #4930; Space toggles thinking but often intercepted by terminal layer |
| **No visual proof of product** | #4906: "Nothing on codewhale.net or README shows CodeWhale running" |
| **Cost tracking understates/obscures** | #4797: two pricing systems, unpriced cache writes, single `/cost` number; #4939 follow-up |
| **Dead code wall (464 `allow(dead_code)`)** | #4785: compiler structurally unable to report drift; partial fix landed |
| **Streaming markdown O(N²) perf** | #3897: full re-parse per chunk; impacts long responses |
| **Foreground shell blocks user input** | #4930: Enter during `sleep 30`/`cargo build` fails confusingly; needs auto-detach |
| **Settings IA misplacement** | #4751: Fleet section hosts unrelated toggles; legacy fallback row should be removed |
| **Thinking level reverts on restart** | #4941: persisted `reasoning_effort` discarded by auto model on startup |
| **Missing `/rc` runner enrollment command** | #4936: website instructs `/rc` but runtime doesn't implement it |

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*