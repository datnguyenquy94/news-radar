# AI CLI Tools Community Digest 2026-09-22

> Generated: 2026-09-22 04:30 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-22)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is bifurcating into **mature platform plays** (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI) with enterprise-grade release cadences and **specialized innovators** (Qwen Code, OpenCode, Pi, DeepSeek TUI) pushing architectural boundaries around daemon-based managed agents, Web Shell frontends, and canonical session context models. A clear consolidation signal: Kimi CLI has officially archived in favor of a native binary rewrite (`kimi-code`), while Grok Build shows zero community activity. Windows parity remains the single largest cross-tool reliability gap — 6 of 8 active tools report critical Windows-specific regressions (MSIX updates, Bash truncation, WSL hangs, file-picker IPC failures). Session resilience (compaction, resume, large-context handling) and extensibility (hooks, mods, MCP, ACP) are the two dominant technical battlegrounds.

---

## 2. Activity Comparison

| Tool | Repository | Hot Issues (Top 10) | PRs Updated (24h) | Release Status | Key Signal |
|------|------------|---------------------|-------------------|----------------|------------|
| **Claude Code** | anthropics/claude-code | 10 (max 207 comments, 379 👍) | 2 (1 closed, 1 open) | **None** | Function hooks shipping "in N weeks"; Windows crisis |
| **OpenAI Codex** | openai/codex | 11 (capacity errors systemic) | **10 merged** | 5 alpha builds (rust-v0.157.x) | Model capacity roulette; Chrome auth broken |
| **Gemini CLI** | google-gemini/gemini-cli | 10 (subagent reliability P1) | **10 merged** | v0.62.0-nightly | Auto Memory security regression; 128-tool ceiling |
| **GitHub Copilot CLI** | github/copilot-cli | 10 (WSL, renderer, OOM) | 2 (both docs) | **3 rapid releases** (v1.0.87→88-1) | WSL/terminal rendering regressions; Plan Mode trust |
| **Kimi Code CLI** | MoonshotAI/kimi-cli | 1 (archival notice) | 2 merged, 4 open (stale) | **v1.51.0 final** → **ARCHIVED** | Migration to `kimi-code` native binary |
| **OpenCode** | anomalyco/opencode | 10 (desktop stability, Go outages) | **10 merged** | v1.18.32 | Windows IPC broken; Go service 503/524 frequent |
| **Pi** | earendil-works/pi | 10 (compaction failures ×5) | **10 merged** | **v0.87.0** (canonical context) | Compaction = recurring failure surface |
| **Qwen Code** | QwenLM/qwen-code | 10 (managed agent, Web Shell) | **10 merged** | **v0.24.3** (CLI, Desktop, Web, SDK) | Daemon architecture + Web Shell as universal frontend |
| **DeepSeek TUI** | Hmbown/Codewhale | 10 (engine freeze, hardcoded registries) | **10 merged** | None | Silent engine freezes; 81+ models hardcoded |
| **Grok Build** | xai-org/grok-build | 0 | 0 | None | **No activity** |

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Windows Parity / Desktop Stability** | Claude Code, Codex, Copilot CLI, OpenCode, DeepSeek TUI, Gemini CLI | MSIX update bricking (Claude), WSL2 launch hangs (Codex, Copilot, OpenCode), Bash truncation (Claude), file-picker IPC rejection (OpenCode), terminal renderer corruption (Copilot), Wayland browser failure (Gemini) |
| **Session Resilience: Compaction & Resume** | Claude Code, Pi, Gemini CLI, Copilot CLI, Qwen Code | `/compact` catch-22 (Claude), compaction overflow/hook gaps (Pi ×5 issues), `/compress` not persistent (Gemini), OOM on `--resume` 14h sessions (Copilot), workflow engine for `/review` (Qwen) |
| **Extensibility: Hooks / Mods / MCP / ACP** | Claude Code, Codex, Copilot CLI, OpenCode, Qwen Code, Gemini CLI | Function hooks "in weeks" (Claude #91870), MCP server lifecycle (OpenCode, Copilot), ACP cross-session messaging (Qwen), `AGENTS.md`/`.agents/skills/` portable defs (Claude #31005, 379 👍) |
| **Model/Provider Abstraction & Catalog Freshness** | Pi, DeepSeek TUI, OpenCode, Qwen Code, Codex | Hardcoded registries (DeepSeek 81+ models), provider catalog gaps (Pi missing DeepSeek/Grok/GLM), Bedrock image logic over-applied (OpenCode), model picker desync (Codex Luna missing) |
| **Enterprise/Managed Policy Granularity** | Copilot CLI, Gemini CLI, Claude Code, Qwen Code | Per-tool org policies (Copilot), policy dir permissions (Gemini), managed-settings resilience (Copilot), deployment-managed extensions (Qwen) |
| **Web Shell / Browser as Primary Frontend** | Qwen Code, OpenCode, Pi, Codex | Web Shell as Live Voice host (Qwen), desktop parity (OpenCode), Pendant/TUI polish (Pi), Chrome BrowserSkill auth (Codex) |

---

## 4. Differentiation Analysis

| Dimension | Platform Plays | Specialized Innovators |
|-----------|----------------|------------------------|
| **Primary Focus** | Reliability, enterprise readiness, ecosystem integration | Architectural experimentation: daemon-managed agents, canonical session context, Web Shell universality |
| **Target Users** | Professional developers, enterprise teams, ChatGPT/Claude/Copilot subscribers | Power users, platform builders, teams needing offline/air-gapped, multi-agent orchestration |
| **Technical Approach** | Monolithic CLI + cloud backend; iterative UX polish | Decoupled daemon/broker (Qwen, OpenCode), canonical context model (Pi), native binary (Kimi-code), Rust core (DeepSeek) |
| **Extensibility Model** | Proprietary hooks/mods (Claude), MCP (Copilot, Codex), ACP (Gemini, Qwen) | Pluggable memory backends (DeepSeek), extension boundaries (Pi), WebBridge browser control (Qwen) |
| **Session Model** | Cloud-synced transcripts; compaction as black box | Local-first durable storage (Qwen JDBC broker), canonical ContextEditEntry (Pi), project-local sessions (OpenCode) |
| **Release Cadence** | Weekly alphas (Codex), rapid hotfixes (Copilot), nightlies (Gemini) | Versioned milestones (Qwen v0.24.3, Pi v0.87.0, OpenCode v1.18.x) |

**Notable Divergence**: Qwen Code and OpenCode are converging on **daemon-managed agent runtimes** with durable execution persistence (JDBC broker, MCP lifecycle), while Pi bets on **canonical session context** as a first-class editable data structure. Claude Code and Copilot CLI remain cloud-coupled with opaque compaction.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Mature** | **GitHub Copilot CLI**, **Qwen Code**, **OpenCode** | Copilot: 3 releases/24h, 13👍 on session branching; Qwen: 4-platform simultaneous v0.24.3, 10 PRs merged; OpenCode: 10 PRs merged, systematic theme audit (36 themes) |
| **High Engagement / Platform Risk** | **Claude Code**, **OpenAI Codex** | Claude: 379👍 on AGENTS.md (unanswered 13mo), 207 comments on hooks; Codex: systemic capacity outages blocking Pro users, 10 PRs merged but core reliability regressing |
| **Active Innovation / Pre-1.0** | **Gemini CLI**, **Pi**, **DeepSeek TUI** | Gemini: nightly cadence, subagent P1s; Pi: v0.87.0 architectural milestone, 10 PRs fixing compaction; DeepSeek: 10 PRs but CI red 80%+, hardcoded registries block extensibility |
| **Transition / Sunset** | **Kimi Code CLI** | Archived; migration to `kimi-code` underway; stub package only |
| **Dormant** | **Grok Build** | Zero activity |

**Velocity Leaders**: Qwen Code (multi-surface release + 10 PRs), OpenCode (10 PRs + release), Pi (10 PRs + architectural release).  
**Risk Leaders**: Claude Code (Windows crisis + unanswered top request), Codex (capacity + safety classifier + Chrome auth), Copilot CLI (WSL + renderer + OOM trifecta).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **Daemon-Managed Agent Runtime** ⬆️ | **High** (Qwen, OpenCode, Pi) | Local-first, recoverable execution with durable persistence (JDBC, broker) is replacing ephemeral cloud-roundtrip sessions. Teams building internal platforms should evaluate Qwen's dual-path architecture (#12380) and OpenCode's MCP lifecycle fixes. |
| **Web Shell as Universal Frontend** ⬆️ | **High** (Qwen, OpenCode, Pi) | Browser-based IDEs with realtime voice (Qwen Live Host), trajectory pagination, workspace pinning, and worktree management are becoming primary UIs — not companions. Invest in Web Shell extensibility (ACP, WebBridge). |
| **Canonical Session Context as Data Structure** ⬆️ | **Medium-High** (Pi v0.87.0, Qwen workflow engine) | Compaction/resume failures stem from treating context as opaque transcript. Pi's `ContextEditEntry` and Qwen's workflow-engine `/review` show the alternative: structured, editable, auditable context. |
| **Windows is the Litmus Test** 🔴 | **Critical** | 75% of active tools have P0 Windows bugs. Any tool claiming enterprise readiness must demonstrate: MSIX update reliability, WSL2 cold-start <2s, native file-picker IPC, terminal renderer fidelity. |
| **Extensibility Standardization Drift** ⚠️ | **Medium** | Four competing models: Claude hooks, MCP (Copilot/Codex/OpenCode), ACP (Gemini/Qwen), proprietary plugins (Pi). `AGENTS.md` (379👍) is the only cross-tool portability proposal — but zero vendor adoption. |
| **Safety Classifier Overreach** 🔴 | **High** (Codex, Claude) | `cyber_policy` false positives (Codex) and silent markdown corruption (Claude) erode trust. Tools need: transparent classification, per-project tuning, and local fallback when cloud classifiers fail. |
| **Local Model / Air-Gapped Completeness** ⬆️ | **Medium** (Pi, DeepSeek, Qwen) | `PI_OFFLINE` breaking model discovery (Pi), hardcoded registries (DeepSeek), and daemon-local Live Voice (Qwen) signal demand for fully offline-capable stacks. |

---

## Recommendation Summary

| For... | Prioritize Evaluating |
|--------|----------------------|
| **Enterprise standardization** | GitHub Copilot CLI (policy granularity, rapid releases), Qwen Code (managed agent + Web Shell), Gemini CLI (ACP + security hardening) |
| **Platform building / internal tools** | Qwen Code (daemon broker, JDBC persistence), OpenCode (MCP lifecycle, project-local sessions), Pi (canonical context, extension boundaries) |
| **Individual power users** | Claude Code (once hooks ship + Windows fixed), Codex (if capacity stabilizes), DeepSeek TUI (pluggable memory, native binary) |
| **Offline / air-gapped / custom model teams** | Pi (offline mode fixes in progress), DeepSeek TUI (per-provider config, local models), Qwen Code (daemon-local voice) |

**Watch List**: `kimi-code` (native binary migration), OpenCode Go service reliability, Claude Code function hooks delivery, Codex model capacity resolution.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-22 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill | Functionality | Discussion Highlights | Status |
|---|-------|---------------|----------------------|--------|
| 1 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** | Web3 smart contract auditor: static analysis for Solidity/Rust + cryptographic audit proofs anchored to TON blockchain via ProofCore's zero-storage Merkle protocol | Newest high-profile submission (Sep 15); targets enterprise Web3 security workflows | **Open** |
| 2 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** | Zero-cost Markdown → MP4 video with human-like voiceovers (Marp slides + TTS) | Creative/media automation; extends Claude into video generation pipeline | **Open** |
| 3 | **[AWT (AI Watch Tester)](https://github.com/anthropics/skills/pull/822)** | AI-powered E2E testing: vision + browser control, zero-code test generation, self-healing selectors, CI/CD integration | Long-running (since Mar 31); addresses critical testing gap in Skills ecosystem | **Open** |
| 4 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** | Comprehensive testing skill: Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Broad coverage of testing stack; active updates through Sep 21 | **Open** |
| 5 | **[skill-quality-analyzer](https://github.com/anthropics/skills/pull/83)** + **[skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta-skills: 5-dimension quality scoring (structure, examples, references, tests, security) + supply-chain/permission/injection threat modeling | Foundational tooling for Skill marketplace governance; oldest active PR (Nov 2025) | **Open** |
| 6 | **[pyxel](https://github.com/anthropics/skills/pull/525)** | Retro game development: creation, debugging, headless verification, frame inspection, state checks for Pyxel engine | Niche but complete; author is Pyxel creator (kitao); updated through Sep 22 | **Open** |
| 7 | **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** | HPC cluster operations: profile-based SSH/Slurm workflows, cluster discovery, compute-node automation | Enterprise HPC niche; short discussion window (Aug 20–24) | **Open** |
| 8 | **[blast-radius](https://github.com/anthropics/skills/pull/1776)** | Pre-execution checklist for bulk/destructive operations: row-level vs world-level impact classification, rollback planning | Safety-critical ops pattern; very recent (Sep 17–18) | **Open** |

> **Note:** PR comment counts were not available in the dataset (`undefined`). Ranking inferred from Issue cross-references, update frequency, and scope significance.

---

## 2. Community Demand Trends (From Issues)

| Rank | Demand Signal | Evidence | Representative Issues |
|------|---------------|----------|----------------------|
| 1 | **Trust & Namespace Security** | 43 comments, 2👍 — Highest engagement | [#492](https://github.com/anthropics/skills/issues/492): Community skills masquerading as official `anthropic/` namespace skills |
| 2 | **Organizational Skill Sharing** | 16 comments, 8👍 — Highest 👍 | [#228](https://github.com/anthropics/skills/issues/228): Native org-wide skill library vs. manual file sharing |
| 3 | **Skill Trigger Reliability** | 12 comments, 7👍 | [#556](https://github.com/anthropics/skills/issues/556): `run_eval.py` shows 0% trigger rate — `claude -p` never invokes skills |
| 4 | **Evaluation & Quality Gates** | 8+ comments across issues | [#202](https://github.com/anthropics/skills/issues/202) (closed): skill-creator needs best-practice rewrite; [#1385](https://github.com/anthropics/skills/issues/1385): 3-gate reasoning quality pipeline proposal |
| 5 | **Token/Context Efficiency** | 4 comments | [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` skill injects 156k tokens, exhausting context window |
| 6 | **MCP Builder Stability** | 4 comments | [#1390](https://github.com/anthropics/skills/issues/1390): Evaluation harness fabricates tool errors against real MCP servers |
| 7 | **Document Processing Reliability** | Multiple docx/pdf/odt PRs + issues | [#189](https://github.com/anthropics/skills/issues/189): Duplicate skills from `document-skills` + `example-skills` plugins |

**Emerging Directions:** Compact memory notation ([#1329](https://github.com/anthropics/skills/issues/1329)), agent governance ([#412](https://github.com/anthropics/skills/issues/412) closed), SharePoint/enterprise integration ([#1175](https://github.com/anthropics/skills/issues/1175) closed).

---

## 3. High-Potential Pending Skills (Active PRs Not Yet Merged)

| Skill | PR | Why It May Land Soon |
|-------|-----|---------------------|
| **mcp-builder v2 compatibility** | [#1742](https://github.com/anthropics/skills/pull/1742) | Fixes breaking changes in `mcp>=2.0.0` (streamable_http_client rename, custom headers); active updates through Sep 19 |
| **skill-creator trigger detection fix** | [#1769](https://github.com/anthropics/skills/pull/1769) | Fixes core 0% recall bug blocking skill evaluation; directly addresses [#556](https://github.com/anthropics/skills/issues/556) |
| **skill-creator Windows/runtime isolation** | [#1298](https://github.com/anthropics/skills/pull/1298) | Long-running (Jun–Sep); fixes false misses, Windows `select()` failures, worker probe competition |
| **docx comment/redlining fixes** | [#1790](https://github.com/anthropics/skills/pull/1790), [#1765](https://github.com/anthropics/skills/pull/1765), [#541](https://github.com/anthropics/skills/pull/541) | Cluster of docx fixes (missing rels, UTF-8 diffs, w:id collisions); indicates active document-processing maintenance |
| **office YAML validation** | [#539](https://github.com/anthropics/skills/pull/539) | Prevents silent YAML parsing failures in skill descriptions; foundational robustness |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, reliably-triggered, and organizationally-shareable skills* — not just new capabilities, but the foundational infrastructure (namespace security, trigger evaluation, org sharing, token efficiency) that makes skills safe and practical for production use.**

---

# Claude Code Community Digest — 2026-09-22

## 1. Today's Highlights

The community's highest-engagement issue (#91870, **207 comments, 124 👍**) reveals Anthropic is **committed to shipping function hooks "in N weeks"** — a major extensibility milestone. Meanwhile, Windows users face a cluster of critical bugs: MSIX stealth-update failures (#89912, #94432), CoworkVMService memory leaks (#94198), and Bash shell snapshot truncation (#90421). A long-standing request for `AGENTS.md`/`.agents/skills/` support (#31005, **379 👍**) remains unaddressed despite community demand since August 2025.

---

## 2. Releases

**No new releases in the last 24 hours.**

---

## 3. Hot Issues (Top 10 by Community Impact)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#91870](https://github.com/anthropics/claude-code/issues/91870)** Mods – make Claude 10x more extensible | Official confirmation that **function hooks are shipping in weeks**, not months. This is the single biggest extensibility feature since launch. | 207 comments, 124 👍 — highest engagement in repo history |
| **[#31005](https://github.com/anthropics/claude-code/issues/31005)** Support for AGENTS.md and .agents/skills/ | Community has requested this **since Aug 2025**; 379 👍 with zero official response. Blocks portable agent/skill definitions across tools. | 29 comments, **379 👍** — highest upvote count |
| **[#66020](https://github.com/anthropics/claude-code/issues/66020)** macOS 26.5.1 kernel zone leak (data.kalloc.1024) | **claude.exe panics at ~20GB**; leak rate scales 21→1027/sec with agent load. Blocks heavy agent workflows on macOS. | 28 comments, 5 👍 — severe perf regression |
| **[#89912](https://github.com/anthropics/claude-code/issues/89912)** MSIX stealth update relaunch fails (0x80070020) | App becomes **permanently unlaunchable** after auto-update; shell reports "already in use." Affects all Windows Desktop users. | 5 comments, related to #94432 |
| **[#94198](https://github.com/anthropics/claude-code/issues/94198)** CoworkVMService non-paged pool leak (NtFC/ntfs.sys) | **Restart clears leak, Shutdown does not** — indicates kernel handle leak in cowork-svc.exe. Degrades Windows host over time. | 6 comments, 1 👍 |
| **[#90421](https://github.com/anthropics/claude-code/issues/90421)** Shell snapshot truncated at ~7.2KB on Windows | **Every Bash call fails** with unexpected EOF due to truncated PATH export. Breaks all shell tooling on Desktop. | 1 comment, critical severity |
| **[#83206](https://github.com/anthropics/claude-code/issues/83206)** Resume fails with ECONNRESET (Chrome screenshots stored 2×) | Transcript bloat from duplicate image storage breaks session resume entirely. Affects Chrome extension users. | 1 comment, data-loss risk |
| **[#81793](https://github.com/anthropics/claude-code/issues/81793)** No in-product recovery when session too large for /compact | **Catch-22**: `/compact` requires the failing round-trip. No fallback (local summarization, truncation, split). | 1 comment, architectural gap |
| **[#95755](https://github.com/anthropics/claude-code/issues/95755)** Windows: per-second statusLine bash spawns → permanent Bash outage | Root cause identified: MSYS `add_item/errno 1` race. Status line triggers it every second. **Fixable in Claude Code**. | 1 comment, actionable |
| **[#94619](https://github.com/anthropics/claude-code/issues/94619)** docx/pptx/xlsx skills: `socket.AF_UNIX` missing on Windows | **Third report** of same bug (#78841, #35063 closed stale). Skills completely broken on Windows. | 1 comment, regression |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **[#95932](https://github.com/anthropics/claude-code/pull/95932)** | CLOSED | Adds GitHub connection issue template for claude.ai with diagnostics fields and `github-integration` label. |
| **[#95423](https://github.com/anthropics/claude-code/pull/95423)** | OPEN | **`diff` mod optimization**: reads `isReadOnly` from shell tool metadata to skip refetch after read-only commands (`ls`, `git status`, `cat`, `grep`). Reduces unnecessary diff recomputation. |

> Only 2 PRs updated in 24h — light contribution day. The `diff` mod PR (#95423) shows community-driven performance tuning for the new mods/hooks ecosystem.

---

## 5. Feature Request Trends

From the issue landscape, four clear directions dominate community demand:

1. **First-class Extensibility (Hooks/Mods/Plugins)** — #91870 is the flagship; developers want to inject logic at tool-call, session, and UI levels without forking.
2. **Portable Agent/Skill Definitions** — `AGENTS.md` + `.agents/skills/` (#31005) would let teams share specialized agents across projects and tools (Claude Code, Cursor, etc.).
3. **Windows Parity** — 6 of the top 10 issues are Windows-specific (MSIX, Cowork, Bash, skills, networking). Desktop on Windows feels like a second-class platform.
4. **Session Resilience** — Large-session handling (#81793, #83206), resume reliability, and cross-session messaging (#86279) are architectural gaps blocking production use.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows Desktop instability** | MSIX update bricking (#89912), Cowork VM leaks (#94198, #93071), Bash truncation (#90421), skills broken (#94619) | Daily driver unusable for many Windows devs |
| **Silent data corruption** | Markdown list renumbering in TUI (#87790), screenshot duplication in transcripts (#83206) | Trust erosion; hard to detect until downstream failure |
| **No recovery from resource exhaustion** | OOM at 20GB (#66020), session too large to compact (#81793), ECONNRESET on resume (#83206) | Work loss; requires manual transcript surgery |
| **Stale bot closing valid bugs** | #94619 explicitly calls out #78841 and #35063 closed as `NOT_PLANNED` without triage | Community loses faith in issue tracker |
| **Cross-session messaging broken** | `send_message` returns success but target hangs indefinitely (#86279) | Multi-agent workflows unreliable |
| **Accessibility gaps** | Dyslexic-friendly font not applied to Code tab (#83867) | Exclusionary for neurodivergent developers |

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-09-22 00:00 UTC. Next digest: 2026-09-23.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-22

---

## 1. Today's Highlights

A wave of **model capacity errors** ("Selected model is at capacity") is affecting multiple models (GPT-6, GPT-5.6 variants, GPT-5.5) across Windows and macOS, with **GPT-5.6 Luna disappearing from the model picker** for Plus users. Simultaneously, **Chrome browser integration is broken for API-key authentication** on both Windows and macOS, and **cybersecurity false positives** are blocking benign development conversations. On the engineering side, the CLI/TUI saw a batch of merged PRs enabling daemon auto-start, fullscreen transcript by default, and gateway OAuth hardening.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.157.0-alpha.1` – `.5` | Alpha | Rapid iteration on the 0.157 series (5 builds in 24h) |
| `rust-v0.156.0-alpha.16` – `.17` | Alpha | Continued 0.156 stabilization |
| `rust-v0.155.0-alpha.16.1` | Alpha | Patch to prior 0.155 alpha |

> **Note:** These are internal Rust crate publishes for the Codex CLI/backend; no user-facing changelog provided.

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#46980](https://github.com/openai/codex/issues/46980) | **"Selected model is at capacity" across GPT-6, GPT-5.6, GPT-5.5** | Blocks all paid tiers (including $200 Pro) for 30+ hours; fallback loops fail | 4 comments, high urgency |
| [#47180](https://github.com/openai/codex/issues/47180) | **Repeated capacity errors across multiple models** | Confirms systemic capacity routing issue, not model-specific | 1 comment, cross-model |
| [#47181](https://github.com/openai/codex/issues/47181) | **Capacity error on macOS (Darwin 25.6, arm64)** | Affects Mac users on Pro 20x; same symptom | 1 comment |
| [#47166](https://github.com/openai/codex/issues/47166) | **GPT-5.6 Luna vanished from Windows model picker** | Model works via direct invocation but absent in UI — config sync bug | 3 comments |
| [#47186](https://github.com/openai/codex/issues/47186) | **Luna missing on Windows, direct call works** | Duplicate of #47166, confirms regression in 26.915.31945 | 2 comments |
| [#45317](https://github.com/openai/codex/issues/45317) | **Chrome BrowserSkill rejects API-key auth: `unsupported Codex auth method: apikey`** | Breaks browser automation for API-key users (non-ChatGPT auth) | 14 comments |
| [#45341](https://github.com/openai/codex/issues/45341) | **Same Chrome auth failure on macOS with custom provider** | Cross-platform; custom provider works but Chrome control fails | 4 comments |
| [#47171](https://github.com/openai/codex/issues/47171) | **False-positive `cyber_policy` blocks benign RTC/C++ discussion** | Safety classifier kills entire conversation; no recovery | 4 comments, 👍0 |
| [#47001](https://github.com/openai/codex/issues/47001) | **Cybersecurity flag blocks neutral follow-ups across tasks** | Contagion: one flag poisons new tasks in same project | 2 comments |
| [#39421](https://github.com/openai/codex/issues/39421) | **Marketplace upgrade leak: 559 GB / 4,972 orphaned dirs in 41 days** | Disk exhaustion risk; cleanup janitor missing for marketplace plugins | 6 comments, 👍1 |
| [#34026](https://github.com/openai/codex/issues/34026) | **Windows Desktop: completed threads stuck "thinking"; new messages queue locally** | Session paralysis; requires app restart | 18 comments, 👍1 |
| [#25809](https://github.com/openai/codex/issues/25809) | **Desktop plugins (Chrome, computer-use) disappear after restart** | Native host manifest not created; MCP not attached | 12 comments, 👍1 |

---

## 4. Key PR Progress (Merged Today)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#47179](https://github.com/openai/codex/pull/47179) | **Enable automatic daemon startup by default** | Promotes `daemon_auto_start` to stable; removes from `/experimental` | Faster CLI cold starts |
| [#47178](https://github.com/openai/codex/pull/47178) | **Enable fullscreen transcript by default** | `tui.fullscreen_transcript = true` default; schema updated | Improved TUI UX out of box |
| [#47185](https://github.com/openai/codex/pull/47185) | **Allow forking conversations locked by another app (TUI)** | Adds `f`/`F` shortcut to fork locked conversation | Multi-app workflow support |
| [#47170](https://github.com/openai/codex/pull/47170) | **Explicit gateway login control & auth status** | `GatewayLoginControl` for caller-initiated browser auth; passive readiness checks | OAuth reliability |
| [#47158](https://github.com/openai/codex/pull/47158) | **Harden gateway OAuth credential persistence & error redaction** | Prevents credential store lock contention; redacts secrets in errors | Security / stability |
| [#47162](https://github.com/openai/codex/pull/47162) | **Apply workspace routing to Guardian v2 classifier requests** | Preserves thread workspace routing on retries/auth changes | Enterprise/multi-account |
| [#47159](https://github.com/openai/codex/pull/47159) | **Expose HTTP origins in MCP server status** | Adds `httpOrigin` to `McpServerStatus` (sanitized) | MCP debugging |
| [#47142](https://github.com/openai/codex/pull/47142) | **Honor system proxy for standalone web search** | Routes web search through configured `HttpClientFactory` | Proxy compliance |
| [#47130](https://github.com/openai/codex/pull/47130) | **Remove `ultrafast` tier from `gpt-5.6-sol`** | Leaves `priority` (Fast) as only tier; updates snapshots | Model catalog accuracy |
| [#47122](https://github.com/openai/codex/pull/47122) | **Increase OpenAI file blob upload timeout: 60s → 5 min** | Supports large file uploads | Reliability for big contexts |

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Local secret/credential store** | [#22029](https://github.com/openai/codex/issues/22029) (👍2) | Strong demand for encrypted local vault for API keys, SSH, DB creds |
| **Granular quota/rate-limit controls** | [#43560](https://github.com/openai/codex/issues/43560) (👍1) | Users want explicit confirmation for fast-tier usage, downgrade controls |
| **Multi-instance Computer Use targeting** | [#43859](https://github.com/openai/codex/issues/43859) | PID/window selection for same-app multiples (e.g., two Godot editors) |
| **Weekly usage window reset transparency** | [#39398](https://github.com/openai/codex/issues/39398) | Subscription renewal doesn't reset quota; not disclosed at checkout |
| **Plugin persistence across restarts** | [#25809](https://github.com/openai/codex/issues/25809) | Bundled plugins (Chrome, computer-use) should survive app updates |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Model Availability Roulette** — Capacity errors across *all* premium models (GPT-6, 5.6, 5.5) with no actionable fallback; Plus/Pro users blocked for hours.
2. **Model Picker Desync** — GPT-5.6 Luna works via API but vanishes from UI on Windows (26.915.31945); config drift between catalog and picker.
3. **Chrome Integration Broken for API Keys** — `unsupported Codex auth method: apikey` blocks browser automation for non-ChatGPT auth flows on both Windows and macOS.
4. **Overzealous Safety Classifier** — `cyber_policy` false positives terminate benign systems-programming conversations (RTC, C++); contagion to follow-up messages and new tasks.
5. **Windows Session Stalls** — Threads stuck "thinking" indefinitely; message queue backs up locally; only fix is app restart (#34026, 18 comments).
6. **Plugin Rot** — Bundled Chrome/computer-use plugins disappear after restart; native host manifest not recreated; MCP unattached (#25809).
7. **Disk Leak from Marketplace Upgrades** — 559 GB orphaned in staging dirs over 41 days; no janitor for marketplace (only curated) (#39421).
8. **No Quota Reset on Renewal** — Weekly usage window doesn't reset with new billing period; undisclosed at purchase (#39398).

---

*Generated from GitHub data for `openai/codex` as of 2026-09-22. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-22

## 1. Today's Highlights
The project shipped **v0.62.0-nightly.20260922** with two critical fixes: a proxy-agent/esbuild interop normalization for reliable environment proxy resolution, and an ACP-mode correction ensuring `tool_call` updates fire before permission prompts. Meanwhile, the issue backlog highlights three systemic pain points: **subagent reliability** (hangs, false-success reporting, under-utilization), **Auto Memory quality** (secret redaction timing, infinite low-signal retries, invalid patch handling), and **enterprise-grade security hardening** (policy directory permissions, authentication error misclassification).

## 2. Releases
**v0.62.0-nightly.20260922.gd5b3e3acc** ([Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260922.gd5b3e3acc))
- **fix(core)**: Normalize `https-proxy-agent`/`http-proxy-agent` CJS↔ESM interop in esbuild bundle — ensures consistent constructor resolution across static, dynamic, named, and default imports ([PR #29401](https://github.com/google-gemini/gemini-cli/pull/29401)).
- **fix(cli)**: Emit `tool_call` update with `pending` status *before* requesting user permission in ACP mode — fixes race condition where clients missed the tool invocation signal ([PR #29439](https://github.com/google-gemini/gemini-cli/pull/29439)).

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | False-success masking silently drops work; blocks trust in autonomous delegation. | 13 comments, 2 👍 — `priority/p1`, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Core workflow blocker; users must disable subagents to proceed. | 8 comments, 8 👍 — `priority/p1`, `status/need-retesting` |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory sends secrets to model before redaction** | Security regression: secrets enter model context *before* extraction prompt redacts them. | 5 comments — `priority/p2`, `area/security` |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools available** | Hard tool-count ceiling breaks large workspaces; needs dynamic scoping. | 3 comments — `priority/p2`, `status/need-information` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **EPIC: Assess AST-aware file reads/search/mapping** | Strategic investigation: could cut turns & tokens via precise method-bound reads. | 7 comments, 1 👍 — `priority/p2`, `kind/feature` |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses custom skills/sub-agents** | Discoverability gap: powerful extensions sit idle without explicit prompting. | 6 comments — `priority/p2`, `status/need-retesting` |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions forever** | Resource waste & noise; sessions never marked “processed” if extractor skips them. | 4 comments — `priority/p2` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform blocker for Linux/Wayland users; `GOAL` termination with no action. | 4 comments, 1 👍 — `priority/p1`, `agent/browser` |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`)** | Configuration contract broken; users cannot tune browser agent behavior. | 3 comments — `priority/p2`, `status/need-retesting` |
| [#21335](https://github.com/google-gemini/gemini-cli/issues/21335) | **`/compress` not persistent across session resume** | Token-saving workflow lost on restart; summary not written to session file. | 2 comments, 2 👍 — `priority/p2`, `effort/small` |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Area | Summary |
|----|------|---------|
| [#29323](https://github.com/google-gemini/gemini-cli/pull/29323) ✅ | Core | **Fix nested `.gitignore` trailing-slash patterns** — `build/` in `pkg/.gitignore` now matches at any depth, not just `pkg/build/`. |
| [#29242](https://github.com/google-gemini/gemini-cli/pull/29242) ✅ | Core | **Stop matching `401` as substring in `isAuthenticationError`** — prevents port numbers/IDs from triggering spurious re-auth. |
| [#29336](https://github.com/google-gemini/gemini-cli/pull/29336) | Enterprise | **Secure non-system policy directories** — enforce write-permission checks on user/workspace policy dirs (fixes #29311). |
| [#29332](https://github.com/google-gemini/gemini-cli/pull/29332) | Core | **Bound sandbox expansion recursion** — prevents infinite loop when tool repeatedly returns `sandbox_expansion_required`. |
| [#29244](https://github.com/google-gemini/gemini-cli/pull/29244) | Core | **Atomic file writes + same-path serialization** — eliminates silent edit loss during parallel `replace` calls on one file. |
| [#29328](https://github.com/google-gemini/gemini-cli/pull/29328) | Security | **A2A server: honor `LOG_LEVEL`, redact credentials** — fixes hardcoded `info` level & credential leakage in logs. |
| [#29327](https://github.com/google-gemini/gemini-cli/pull/29327) | SDK | **`SdkAgentShell.exec` now respects `env` & `timeoutSeconds`** — previously ignored, causing hangs & env leaks. |
| [#29440](https://github.com/google-gemini/gemini-cli/pull/29440) | Agent | **UTF-8 offsets for `web-fetch` citations** — fixes misplaced citations on non-ASCII/emoji content (matches `web-search` logic). |
| [#29330](https://github.com/google-gemini/gemini-cli/pull/29330) | CLI | **Fix input purity violation** — keep typed input before logger answers; read once to avoid React StrictMode double-invoke. |
| [#24941](https://github.com/google-gemini/gemini-cli/pull/24941) ✅ | Infra | **Generalize evals infra** — named suites, hero/component/behavioral categories, queuing. Foundation for scalable evals. |

## 5. Feature Request Trends
1. **Persistent, file-based task tracking** — Replace in-context `WriteToDo` with CRUD task files ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)) to survive context rot & session boundaries.
2. **AST-aware code navigation** — Precision reads/search via `glyph`/`tilth` to cut token bloat & misaligned reads ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
3. **Subagent observability & shareability** — Surface subagent trajectories in `/chat share` for review/eval ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
4. **Browser agent hardening** — Session takeover, lock recovery, Wayland support, config override respect ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
5. **Auto Memory governance** — Deterministic redaction, quarantine invalid patches, stop infinite low-signal retries ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
6. **Enterprise policy security** — Per-workspace policies, strict directory permission vetting ([#18397](https://github.com/google-gemini/gemini-cli/issues/18397), [#29333](https://github.com/google-gemini/gemini-cli/pull/29333), [#29336](https://github.com/google-gemini/gemini-cli/pull/29336)).

## 6. Developer Pain Points (Recurring Frustrations)
- **Subagent unreliability**: Hangs (#21409), false success (#22323), ignored skills (#21968), missing context in bug reports (#21763).  
- **Token/context explosion**: Large file reads firehose context; no surgical extraction yet (#19561).  
- **Session continuity breaks**: `/compress` lost on resume (#21335), task tracker ephemeral (#18836).  
- **Hard limits**: 128-tool ceiling (#24246), terminal resize flicker (#21924), stdin destruction after truncation (#29329).  
- **Security blind spots**: Secrets in Auto Memory pre-redaction (#26525), credentials in A2A logs (#29328), policy dir write-permissions unchecked (#29336).  
- **Configuration drift**: Browser agent ignores `settings.json` (#22267), symlinked agents not recognized (#20079).  
- **Platform gaps**: Wayland browser failure (#21983), non-atomic concurrent file writes (#29244).  

---
*Digest generated from `google-gemini/gemini-cli` GitHub activity (2026-09-22). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-22

## Today's Highlights
Three rapid releases (v1.0.87 → v1.0.88-0 → v1.0.88-1) landed in 24 hours, focusing on **managed-settings resilience**, **terminal notifications** (OSC 777 for Ghostty/WezTerm), and **Auto routing tier policies**. The community is actively debugging **WSL startup hangs**, **terminal renderer corruption**, and **OOM crashes on long `--resume` sessions** — all high-impact issues with multiple upvotes.

---

## Releases
| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.88-1** | 2026-09-21 | **Fixed**: Preserve `/allow-all` during managed-settings refresh failures; remember exact session approvals for missing paths without granting parent directory; sandboxed network denials from proxy tunnel failures. |
| **v1.0.88-0** | 2026-09-21 | **Added**: Optional OSC 777 terminal notifications for Ghostty/WezTerm. **Improved**: Namespaced custom skills + ignored skill directories; MCP/plugin views show server display names & plugin descriptions. |
| **v1.0.87** | 2026-09-21 | **Added**: User/managed startup defaults for Auto routing tier (strict + user-overridable org policy). **Improved**: Consecutive steering prompts combine into one pending message; `Up` in empty chat input recalls it for editing. |

> **Note**: v1.0.88-1 is a hotfix for managed-settings edge cases introduced in v1.0.88-0.

---

## Hot Issues (Top 10 by Community Impact)

| Issue | Status | Why It Matters | Community Signal |
|-------|--------|----------------|------------------|
| [#3385](https://github.com/github/copilot-cli/issues/3385) WSL stuck after upgrade to 1.0.49 | 🟢 Closed | Blocks WSL2 users entirely; 9 👍, 14 comments | High — fundamental platform blocker |
| [#1313](https://github.com/github/copilot-cli/issues/1313) Session Branching (fork history at a point) | 🟢 Closed | Top-voted feature (13 👍); enables experimentation without losing context | High — workflow transformation |
| [#3399](https://github.com/github/copilot-cli/issues/3399) Custom HTTP headers for BYOK providers | 🟢 Closed | Required for multi-tenant LLM gateways (X-Tenant-ID, etc.); 14 👍 | High — enterprise BYOK unblock |
| [#3749](https://github.com/github/copilot-cli/issues/3749) Terminal renderer corrupts streamed output (doubled/truncated chars) | 🟢 Closed | Affects all streaming output (thinking + final); 8 👍, 6 comments | High — core UX regression |
| [#4699](https://github.com/github/copilot-cli/issues/4699) OOM crash on long `--resume` sessions; crash dumps in cwd | 🔴 Open | 4 GiB V8 heap cap hit in ~14h; dumps pollute workspace; 6 👍 | Critical — reliability + data hygiene |
| [#1663](https://github.com/github/copilot-cli/issues/1663) Agent edits code during `[[PLAN]]` mode (should only plan) | 🟢 Closed | Violates core Plan Mode contract; 6 👍 | High — trust/safety |
| [#2223](https://github.com/github/copilot-cli/issues/2223) `CAPIError: 400 Invalid schema` for empty `type: object` in MCP (GPT only) | 🟢 Closed | GPT-specific schema validation failure; blocks valid MCP tools; 5 👍 | High — MCP interop |
| [#4892](https://github.com/github/copilot-cli/issues/4892) Hourly in-session reload re-enumerates all MCP servers/extension hosts | 🔴 Open | Causes resource churn; previously leaked 20 processes/4.3 GB | High — resource management |
| [#4844](https://github.com/github/copilot-cli/issues/4844) `--yolo` swallowed by pre-auth fail-closed; never reapplied after policy resolves | 🔴 Open | Breaks `--yolo`/`--allow-all` for managed users; 0 👍 but architectural | Medium — policy enforcement gap |
| [#4837](https://github.com/github/copilot-cli/issues/4837) Policy-driven `enabledPlugins` installs but persists `"enabled": false` | 🔴 Open | Plugins installed via MDM/repo policy never activate; 1 👍 | Medium — config drift |

---

## Key PR Progress (All Open PRs Updated in Last 24h)

| PR | Author | Summary |
|----|--------|---------|
| [#4739](https://github.com/github/copilot-cli/pull/4739) | anujb-msft | **Docs proposal**: Terminal-owned macOS notifications (OSC 777) with portable regression tests. Reference implementation — not yet shipped. |
| [#4770](https://github.com/github/copilot-cli/pull/4770) | 1fanwang | **Docs**: Document WebSocket responses opt-out (`COPILOT_DISABLE_WS_RESPONSES=1`) for networks blocking WS or hitting `400 input item ID` errors. |

> Only 2 PRs updated in the window — both documentation-focused, signaling stabilization phase after v1.0.88 rapid releases.

---

## Feature Request Trends (Distilled from All Issues)

1. **Session Continuity & Branching** — `#1313` (13 👍), `#4699` (OOM on resume), `#4705` (stuck queued prompts) → users want **reliable long-running sessions** with fork/merge semantics.
2. **Enterprise Policy Granularity** — `#1971` (per-tool org policies), `#4837` (plugin enablement drift), `#4844` (fail-closed bypass) → **fine-grained, self-healing policy engine** needed.
3. **BYOK/Provider Extensibility** — `#3399` (custom headers), `#3119` (effort tier fallback), `#2223` (schema validation) → **full HTTP + schema control** for custom models.
4. **MCP Protocol Maturity** — `#4888` (legacy init after modern discover), `#4892` (hourly re-enum), `#4211` (BigInt) → **strict protocol versioning + type fidelity**.
5. **Terminal/Rendering Polish** — `#3749` (stream corruption), `#3704` (RTL), `#25` (MCP add field visibility), `#3469` (slow @mention) → **native-grade terminal UX**.
6. **Config Portability** — `#3264` (symlink docs), `#2727` (plugin-bundled instructions), `#2629` (user-level instructions) → **dotfile-friendly, shareable config**.

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **WSL / Linux sandbox instability** | `#3385` (stuck startup), `#4853` (namespace denial hangs), `#4699` (OOM) | 🔴 High — 3+ distinct issues in 24h |
| **Terminal rendering corruption** | `#3749` (doubled/truncated stream), `#3704` (RTL flip) | 🔴 High — core output broken |
| **Plan Mode trust violation** | `#1663` (agent edits during `[[PLAN]]`) | 🟠 Medium — safety contract broken |
| **MCP schema/serialization gaps** | `#2223` (empty object), `#4211` (BigInt), `#4888` (dual-era init) | 🟠 Medium — blocks tool adoption |
| **Policy enforcement opacity** | `#2486` (blocked MCP no explanation), `#4844` (yolo swallowed), `#4837` (plugin enabled:false) | 🟠 Medium — "works on my machine" vs managed |
| **Large-repo performance** | `#3469` (5s+ @mention on 150k files) | 🟡 Lower — but scales with repo size |
| **Config discoverability** | `#2629` (user instructions invisible), `#3264` (symlink undocumented), `#1425` (session ID missing in hooks) | 🟡 Lower — paper cuts |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-09-22 00:00 UTC. Next digest: 2026-09-23.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-22

## Today's Highlights
The **original Kimi CLI (Python) repository has been officially archived** with the release of v1.51.0, marking the end of its maintenance lifecycle. All users are directed to migrate to **[Kimi Code CLI](https://github.com/MoonshotAI/kimi-code)**, a rebuilt native-binary terminal AI agent from the same team. The final release includes archive preparation, documentation updates, and a stub package redirecting to the new project.

---

## Releases
### **v1.51.0** (2026-09-21) — *Final Release Before Archive*
- **Archive preparation**: Repository marked for archival; README, docs, security policies, and PyPI metadata frozen
- **Migration path**: Added `packages/kimi-code` stub (v1.51.0) that no longer depends on `kimi-cli` and points users to the new CLI
- **Changelog consolidation**: Release notes, breaking changes, and docs synchronized under v1.51.0 for both EN/CN
- **Links**: [Release PR #2660](https://github.com/MoonshotAI/kimi-cli/pull/2660) · [Archive PR #2659](https://github.com/MoonshotAI/kimi-cli/pull/2659) · [Full Changelog](https://github.com/MoonshotAI/kimi-cli/compare/v1.50.0...v1.51.0)

---

## Hot Issues
| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#2661](https://github.com/MoonshotAI/kimi-cli/issues/2661)** — *Kimi CLI no longer maintained; migrate to Kimi Code CLI* | **Official deprecation notice**. Provides migration guide, feature parity notes, and links to the new native binary. Critical for all current users. | 0 comments (fresh announcement); pinned by maintainers as the primary communication channel for the transition. |

*Only one issue updated in the last 24h — the archival announcement dominates.*

---

## Key PR Progress
| PR | Status | Description |
|----|--------|-------------|
| **[#2659](https://github.com/MoonshotAI/kimi-cli/pull/2659)** | **Closed (merged)** | Archive preparation: updates README with migration banner, adds `DEPRECATED` notice to PyPI, disables issue/PR templates, removes CI workflows. |
| **[#2660](https://github.com/MoonshotAI/kimi-cli/pull/2660)** | **Closed (merged)** | Version bump to 1.51.0; finalizes changelog, syncs stub package, tags release. |
| **[#2665](https://github.com/MoonshotAI/kimi-cli/pull/2665)** | Open | Dependabot: `ruff 0.14.14 → 0.16.8` (linting/formatter updates). |
| **[#2664](https://github.com/MoonshotAI/kimi-cli/pull/2664)** | Open | Dependabot: `agent-client-protocol 0.8.0 → 0.12.1` (ACP SDK major updates). |
| **[#2663](https://github.com/MoonshotAI/kimi-cli/pull/2663)** | Open | Dependabot: `rich 14.2.0 → 15.0.0` (drops Python 3.8 support). |
| **[#2662](https://github.com/MoonshotAI/kimi-cli/pull/2662)** | Open | Dependabot: `fastapi 0.128.0 → 0.141.1` (security/bug fixes). |
| **[#1625](https://github.com/MoonshotAI/kimi-cli/pull/1625)** | Open (stale) | MCP OAuth `--scope` support & auth flow fixes (from Mar 2026); unlikely to merge post-archive. |

> **Note**: The four Dependabot PRs (#2662–#2665) were auto-opened *after* the archive decision; they will not be merged as the repo is now read-only.

---

## Feature Request Trends
**No new feature requests** — the repository is in end-of-life. All future feature work has shifted to **[kimi-code](https://github.com/MoonshotAI/kimi-code)**. Historical requests (MCP enhancements, OAuth scopes, agent protocol updates) are now tracked in the new repo.

---

## Developer Pain Points
1. **Migration friction**: Users must switch from a Python-based CLI (`pip install kimi-cli`) to a native binary (`kimi-code`), requiring new installation workflows and potential config migration.
2. **Ecosystem break**: Existing integrations (CI/CD, scripts, aliases) referencing `kimi` command need updates; the stub package only prints a deprecation warning.
3. **Documentation gaps**: The new repo’s docs are still maturing; developers report difficulty finding equivalent flags/features (e.g., MCP server config, auth flows).
4. **Plugin/extension compatibility**: Custom tools/hooks built for the Python runtime may not work with the new architecture — no official compatibility layer yet.

---

## Action Items for Developers
1. **Migrate now**: `pip uninstall kimi-cli && <install kimi-code per new docs>`
2. **Update automation**: Replace `kimi` invocations with `kimi-code` in scripts, CI, aliases.
3. **Watch the new repo**: [MoonshotAI/kimi-code](https://github.com/MoonshotAI/kimi-code) for releases, issues, and migration guides.
4. **Report parity gaps**: File issues in **kimi-code** for any missing features from the old CLI.

---

*Data sourced from `MoonshotAI/kimi-cli` as of 2026-09-22 00:00 UTC. This repository is now archived; all future activity occurs in `MoonshotAI/kimi-code`.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-22

## 1. Today's Highlights
OpenCode shipped **v1.18.32** with targeted fixes for Bedrock image handling (now scoped to Claude, Nova, and Llama 4) and Together AI streaming usage reporting. The day’s activity centers on **desktop stability** — Windows file-picker failures, WSL2 launch regressions, and large-session transport cutoffs — alongside a **systematic theme audit** uncovering contrast failures and token typos across all 36 desktop themes. Meanwhile, the OpenCode Go service continues to exhibit intermittent 503/524 outages, prompting calls for an API-exposed usage history endpoint.

## 2. Releases
**v1.18.32** — Core bugfixes only:
- Bedrock image attachments are now hoisted exclusively for Claude, Nova, and Llama 4 models (previously applied broadly).
- Fixed Together AI streaming usage reporting.
- Community contributor @dc85 added DeepSeek V4.1 Flash and Grok 4.7 to Zen.

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#6680](https://github.com/anomalyco/opencode/issues/6680) **View archived sessions on desktop** | Long-standing UX gap: no way to browse archived sessions from the desktop sidebar. | 41 comments, 27 👍 — highest engagement in this batch. |
| [#14292](https://github.com/anomalyco/opencode/issues/14292) **Save sessions to project folder** | Sessions currently write to `~/.opencode` regardless of working directory, breaking project portability. | 15 comments, 23 👍 — strong demand for project-local data. |
| [#36889](https://github.com/anomalyco/opencode/issues/36889) **OpenCode Go service outages (HTTP 000/503/524)** | `/zen/go/v1` fails multiple times daily for 6–12 min; blocks cloud-dependent workflows. | 7 comments — reliability concern for hosted tier users. |
| [#43983](https://github.com/anomalyco/opencode/issues/43983) **Expose Go usage history via API key** | No programmatic access to consumption data; needed for billing dashboards and quota alerts. | 6 comments — developer-experience gap. |
| [#50153](https://github.com/anomalyco/opencode/issues/50153) **Desktop "Images and files" picker broken on Windows** | IPC handler rejects `undefined` payload fields; native dialog never opens. | 3 comments, 3 👍 — blocks file attachment on Windows. |
| [#50363](https://github.com/anomalyco/opencode/issues/50363) **Orphaned MCP server processes accumulate** | `npx`-spawned MCP servers survive session teardown, reparented to PID 1, leaking resources. | 2 comments — operational hazard for long-running setups. |
| [#50314](https://github.com/anomalyco/opencode/issues/50314) **OpenAI-compatible stream aborts on `data: null`** | Valid SSE keep-alive frames (`data: null`) crash the decoder, failing tool-calling steps. | 2 comments, 1 👍 — provider interop regression. |
| [#50401](https://github.com/anomalyco/opencode/issues/50401) **`GET /api/session` 500s when session path contains a URL** | Non-filesystem session directories crash the session list; `limit=1000` works, `5000` fails. | 2 comments — data-corruption edge case. |
| [#50498](https://github.com/anomalyco/opencode/issues/50498) **Cannot start opencode 2.0.12 in WSL2 (Ubuntu 22.04)** | CLI `serve --service` exits immediately; blocks Linux-on-Windows developers. | 2 comments — regression in v2.0.12. |
| [#50500](https://github.com/anomalyco/opencode/issues/50500) **Theme audit: background seeds, contrast failures, token typos** | Systematic review of 36 themes reveals invalid palette seeds, light-mode contrast collapses, and syntax errors. | 1 comment — quality signal for UI polish. |

## 4. Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| [#50333](https://github.com/anomalyco/opencode/pull/50333) | Bug fix | **Fix desktop IPC**: omit `undefined` fields in payload (closes #50153 — Windows file picker). |
| [#50509](https://github.com/anomalyco/opencode/pull/50509) | Bug fix | **Terminate full MCP process tree on teardown** (closes #50363 — orphaned `npx` servers). |
| [#50507](https://github.com/anomalyco/opencode/pull/50507) | Bug fix | **Disable `keepAliveTimeout`** so large session responses aren’t cut mid-body (closes #50505). |
| [#50511](https://github.com/anomalyco/opencode/pull/50511) | Bug fix | **Keep legacy session directory readable** — validates non-filesystem paths (closes #50401). |
| [#50508](https://github.com/anomalyco/opencode/pull/50508) | Bug fix | **Ignore non-object SSE keep-alive frames** (`data: null`) in OpenAI-compatible decoder (closes #50314). |
| [#50517](https://github.com/anomalyco/opencode/pull/50517) | Bug fix | **Fix all 36 desktop themes**: background seeds, light-mode contrast, token typos (closes #50500). |
| [#50497](https://github.com/anomalyco/opencode/pull/50497) | Bug fix | **Align Catppuccin themes** with official palette spec (closes #50500). |
| [#50506](https://github.com/anomalyco/opencode/pull/50506) | Feature | **Add experimental evaluation API** under `@opencode/ai/experimental` with TypeSafe AI/Zen integration. |
| [#50515](https://github.com/anomalyco/opencode/pull/50515) | Bug fix | **Flush missed parts when `run --format json` goes idle** (closes #50514 — intermittent empty output). |
| [#50512](https://github.com/anomalyco/opencode/pull/50512) | Feature | **Add `/rename` slash command + rename dialog** — brings TUI rename flows to desktop/web. |

*Also notable:* [#50268](https://github.com/anomalyco/opencode/pull/50268) renames provider blobs `state`/`providerState` → `native` for clarity; [#50492](https://github.com/anomalyco/opencode/pull/50492) makes built-in tool argument coercion JS-like; [#50504](https://github.com/anomalyco/opencode/pull/50504) preserves Vertex function-call IDs.

## 5. Feature Request Trends
1. **Project-local session storage** — Move data out of `~/.opencode` into the working directory (portability, git-friendliness).
2. **Archived-session browser** — First-class UI for historical sessions across desktop/web.
3. **Programmatic Go/usage APIs** — API-key access to consumption history, referral rewards, and quota status.
4. **Windows parity** — Native file/folder pickers, project picker anchoring, WSL2 interop.
5. **Theme/language controls** — Dark/light toggle, custom themes, i18n (Chinese docs requested).
6. **Subagent reliability** — Free-tier restrictions breaking subagent execution; need clearer limits or workarounds.
7. **MCP lifecycle management** — Auto-cleanup, health checks, and OAuth callback alignment for remote servers.

## 6. Developer Pain Points
- **Windows desktop is fragile**: IPC schema rejects optional `undefined` fields, breaking file pickers and folder selection (#50153, #50503).
- **Go service reliability**: Frequent 503/524 outages on `/zen/go/v1` with no status page or SLA visibility (#36889, #50502).
- **Large-session handling**: Server closes connections mid-stream under load; `keepAliveTimeout` and transport buffering need tuning (#50505, #50507).
- **MCP process leaks**: `npx` servers orphaned on session end, accumulating over days (#50363, #50509).
- **Provider edge cases**: OpenAI-compatible streams crash on valid `data: null`; Vertex historically rejected function-call IDs; Bedrock image logic over-applied (#50314, #50504, v1.18.32).
- **Session data corruption**: Non-filesystem session paths crash the entire list API (#50401, #50511).
- **Theme debt**: 36 themes ship with invalid palette seeds, contrast failures in light mode, and token typos — systemic, not one-off (#50500, #50517, #50497).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-22

## 1. Today's Highlights
Pi v0.87.0 ships with **canonical session context and extension boundaries**, enabling context edits without history rewrites and adding lifecycle hooks for extensions. The release coincides with a wave of regression fixes targeting 0.86.x compaction bugs, RPC steer correlation, and provider catalog gaps. Community focus remains on hardening session reliability across compaction, tool replay, and multi-provider workflows.

## 2. Releases
**v0.87.0** — *Canonical session context and extension boundaries*  
- **ContextEditEntry**: Edit model context without rewriting history ([docs](https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/session-format.md#contexteditentry))  
- **Extension boundaries**: Actionable lifecycle hooks for extension authors  
- **Scope**: Foundation for safer context manipulation and extension-driven workflows  

[View Release](https://github.com/earendil-works/pi/releases/tag/v0.87.0)

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#8684](https://github.com/earendil-works/pi/issues/8684) `PI_OFFLINE` silently disables **all provider model discovery** | Undocumented behavior breaks air-gapped/offline workflows; contradicts documented scope (only startup housekeeping) | 12 comments, active debate on whether to expand docs or fix behavior |
| [#9803](https://github.com/earendil-works/pi/issues/9803) **0.86.0 regression**: RPC steer success uncorrelated with extension-handled input | Extension handlers can consume/transform steer; RPC clients cannot map responses to inputs | 9 comments, blocks reliable RPC automation |
| [#5105](https://github.com/earendil-works/pi/issues/5105) Compaction summarization ignores configured `transport` & `sessionId` | Breaks `openai-codex-responses` (falls back to `auto` transport); long-standing gap since compaction path diverges from normal turns | 7 comments, closed but root cause persists in related flows |
| [#9602](https://github.com/earendil-works/pi/issues/9602) Compaction overflows by including **thinking messages omitted from earlier requests** | Local Qwen/llama.cpp sessions hit 16k output limit while thinking; compaction re-includes dropped tokens | 6 comments, affects long-running local model sessions |
| [#9773](https://github.com/earendil-works/pi/issues/9773) `before_provider_request` **does not fire for summarization/compaction** | Documented hook silently skipped for internal requests; breaks payload mutation for compaction | 5 comments, extension authors blocked |
| [#9822](https://github.com/earendil-works/pi/issues/9822) **Codex tool calls leak as raw harmony text** after compaction on `gpt-5.6-luna` | Tool calls emitted as plain text instead of structured blocks; model retries indefinitely | 5 comments, 0.86.x regression, high user visibility |
| [#8667](https://github.com/earendil-works/pi/issues/8667) Stale compaction entry **bricks session** (Anthropic 400 `tool_use_id`) | Compaction entry inserted between tool call & result; later compaction keeps range → invalid session tree | 4 comments, 👍 1, permanent session corruption |
| [#9843](https://github.com/earendil-works/pi/issues/9843) **0.86.x regression**: `litellm.APIConnectionError` on longer requests via OpenAI-compatible/LiteLLM | Mid-stream failures on both TUI and Pendant; worked in 0.85.1 | 4 comments, blocks proxy users |
| [#9674](https://github.com/earendil-works/pi/issues/9674) `mistral-conversations`: **empty content deltas open text blocks** (GLM 5.x whitespace, 400s on replay) | Zero-length deltas create empty blocks; breaks native Mistral prompt cache; workarounds lose caching | 3 comments, follow-up to #8069 |
| [#9868](https://github.com/earendil-works/pi/issues/9868) Idle cache warming **unreachable under `PI_CACHE_RETENTION=long`** | Idle cap (30 min) < refresh point (54 min); warmer never evaluates | 1 comment, silent performance regression |

## 4. Key PR Progress (Top 10 Merged/Fixes)

| PR | Description | Impact |
|----|-------------|--------|
| [#9869](https://github.com/earendil-works/pi/pull/9869) `fix(ai): skip empty Mistral content deltas` | Skips `content: ""` and `{type:"text", text:""}` deltas in `mistral-conversations`; adds SSE fixtures S1–S4 | Fixes #9674, restores GLM 5.x streaming & prompt cache |
| [#9866](https://github.com/earendil-works/pi/pull/9866) `fix(agent): validate persisted tool arguments before replay` | Validates `replay: "safe"` tool args against current schema before execution | Prevents schema-drift crashes (e.g., `String` → `Literal`) |
| [#9861](https://github.com/earendil-works/pi/pull/9861) `fix(ai,coding-agent): honor Google retry delay on 429` | Parses `retry_delay` from `RESOURCE_EXHAUSTED`, retries capped by `maxAgentDelayMs` | Respects provider guidance, avoids immediate turn failure |
| [#9859](https://github.com/earendil-works/pi/pull/9859) `feat(ai,coding-agent): add Grok 4.7 support` | Loads `grok-4.7` from models.dev (500k ctx, image, reasoning tiers, $2/$0.50/$6 per M) | New model availability via xAI Responses catalog |
| [#9851](https://github.com/earendil-works/pi/pull/9851) `fix(ai): remove bare Anthropic model IDs from Bedrock catalog` | Removes 11 deprecated `anthropic.claude-*` IDs; extends inference-profile-only list | Aligns with AWS on-demand deprecation |
| [#9848](https://github.com/earendil-works/pi/pull/9848) `docs(tui): document Component.invalidate() as required` | Aligns README with actual `Component` interface; adds empty impl guidance | Fixes #9358, clarifies extension authoring contract |
| [#9569](https://github.com/earendil-works/pi/pull/9569) `fix(ai): coerce JSON-encoded object/array tool arguments` | Recovers double-encoded args (model quotes nested value one time too many) | Hardens tool calling against model encoding confusion |
| [#9488](https://github.com/earendil-works/pi/pull/9488) `fix(ai): add canonical Codex turn attribution` | Adds `requestIdentity` (session, thread, turn, window, request-kind) to stream options | Enables reliable attribution across retries, steer, compaction |
| [#9842](https://github.com/earendil-works/pi/pull/9842) `fix(tui): prevent jump-to-end label shift when scrollbar hides` | Centers label independently of scrollbar; clips draw/click bounds | Fixes #9136 (jumpy overlay), improves TUI polish |
| [#9846](https://github.com/earendil-works/pi/pull/9846) `fix(coding-agent): keep prompt & tool state across context handlers` | Context handlers now receive canonical prompt/tool sys messages; prevents drops during compaction | Fixes Codex raw harmony leak (#9822) |

## 5. Feature Request Trends
1. **Offline/air-gapped completeness** — `PI_OFFLINE` should not disable model discovery (#8684), bug exports should work offline (#9841), Ollama native provider WIP (#9850)
2. **Compaction reliability** — Transport/session preservation (#5105), thinking-message handling (#9602), hook parity for internal requests (#9773), stale-entry brick prevention (#8667)
3. **Provider catalog freshness** — Missing models: `deepseek-v4.1-flash` (opencode-go, #9737), GLM 5.x variants (Mistral, #9678), Grok 4.7 (added #9859), Mimo V2.6 (#9860)
4. **RPC/extension observability** — Correlate steer dispositions (#9803, fixed #9832), canonical turn attribution (#9488), `before_provider_request` for all requests (#9773)
5. **TUI polish on Windows** — Fullscreen image rendering (#9169), scrollback corruption on exit (#9828), repaint on conhost (#9833), jump label stability (#9842)

## 6. Developer Pain Points
- **Compaction is a recurring failure surface**: 5+ issues in 24h cover overflow, hook gaps, transport loss, stale entries, and tool-call corruption. Developers lose trust in long sessions.
- **Provider behavior gaps between documented and actual**: `PI_OFFLINE` scope mismatch (#8684), `before_provider_request` missing for internal flows (#9773), `maxTokens` ignored by `openai-codex-responses` (#9845).
- **Schema drift at replay time**: Persisted tool args validated only at call time, not replay (#9866, #9867) — causes silent corruption when tool definitions evolve.
- **Windows TUI friction**: Fullscreen mode has image rendering, scrollback corruption, and repaint issues distinct from regular mode.
- **Extension authoring uncertainty**: Required `Component.invalidate()` undocumented (#9358), context handler message-filtering risks dropping system prompts (#9846), RPC response ambiguity (#9803).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-22

## 1. Today's Highlights
Qwen Code v0.24.3 shipped across CLI, Desktop, Web Shell, and TypeScript SDK with Web Shell improvements including structured shell results, trajectory metrics, host settings allowlists, and mobile navigation fixes. The daemon architecture advances with a dual-path Managed Agent proposal (#12380) and Live Voice support for single-workspace daemons (#12440/12441). Core work continues on workflow engine adoption for `/review` orchestration (#8769) and durable JDBC-backed tool execution persistence for Java (#12445, #12438).

## 2. Releases
| Release | Version | Key Changes |
|---------|---------|-------------|
| **CLI / Core** | v0.24.3 | Monitor tool added to system prompt guidance; batched workspace operations; no breaking changes |
| **Web Shell** | v0.24.3 | Structured shell results, optional trajectory metrics, host settings allowlists, mobile nav fixes |
| **Desktop** | v0.24.3 | ACP permission queue scoped to session; shared output modes for channels |
| **TypeScript SDK** | v0.1.14 | Bundles CLI v0.24.3; built from same source branch |
| **Nightly** | v0.24.3-nightly.20260921 | Pre-release with latest main branch changes |

> **Links:** [v0.24.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.3) · [Desktop v0.24.3](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.3) · [SDK v0.1.14](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.14)

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | **Proposal: Managed Agent dual-path architecture** | Defines staged architecture separating model inference from tool-environment provisioning; enables durable sessions, workspace bindings, recoverable executions, stable WebSocket transport. Foundation for multi-agent & platform distribution. | 7 comments, P2, needs-discussion |
| [#12440](https://github.com/QwenLM/qwen-code/issues/12440) | **Live Voice session fails on single-workspace daemon** | Blocks realtime voice (`qwen3.5-omni-plus-realtime`) on daemons serving one project — "Daemon does not advertise multi-workspace session routing". Critical for Web Shell as browser Live Host (#12164). | 3 comments, P1, daemon/web-shell |
| [#7040](https://github.com/QwenLM/qwen-code/issues/7040) | **RFC: Reliable auto-memory recall** | Multi-PR effort: recall delivery telemetry merged (#7393), bounded initial-turn recall + deterministic fast path in review (#8716), precision/multilingual eval in review. Core to context performance & background automation. | 11 comments, P2, roadmap |
| [#8769](https://github.com/QwenLM/qwen-code/issues/8769) | **Rebuild `/review` Steps 3–5 on workflow engine** | Moves agent fan-out, verification, reverse audit from model-driven to deterministic workflow engine (`QWEN_CODE_ENABLE_WORKFLOWS`). Improves reliability of code review skill. | 5 comments, P2, multi-agent |
| [#12164](https://github.com/QwenLM/qwen-code/issues/12164) | **Web Shell as browser Live Host for realtime voice** | Enables realtime voice calls from any browser without native `Qwen Live Host.app`. Requires Web Shell to be audio endpoint for `qwen3.5-omni-plus-realtime`. | 4 comments, P2, platform-distribution |
| [#8699](https://github.com/QwenLM/qwen-code/issues/8699) | **Proposal: Qwen WebBridge — direct browser control** | Adds browser-command bridge atop `qwen serve` daemon + Chrome extension (like Kimi WebBridge), avoiding MCP requirement for browser automation. | 4 comments, P2, extensions/daemon |
| [#12444](https://github.com/QwenLM/qwen-code/issues/12444) | **Web Shell: pin workspaces/projects in sidebar** | UX improvement for multi-repo workflows — pinned workspaces stay at top of list. High practical value for daily users. | 2 comments, P3, session-management |
| [#12332](https://github.com/QwenLM/qwen-code/issues/12332) | **Web Shell publish verifier rejects wildcard exports** | **Fixed in #12364** — verifier treated npm subpath patterns (`"./*": "./dist/*"`) as literal paths, breaking valid packages. Shows packaging rigor. | 4 comments, P3, web-shell/packaging |
| [#12435](https://github.com/QwenLM/qwen-code/issues/12435) | **Warn when `tools.eager` dynamic entries match no tool** | Silent typo tolerance in `mcp__*` / `computer_use__*` patterns causes misconfiguration. Adds validation warning. | 3 comments, P3, settings |
| [#12436](https://github.com/QwenLM/qwen-code/issues/12436) | **Main CI failure: package-scripts tests** | Auto-reported CI failure on `main` — 3 failing tests in `scripts/tests/package-scripts.test.js`. Active autofix/in-progress. | 1 comment, autofix/in-progress |

---

## 4. Key PR Progress (10 Important)

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#12441](https://github.com/QwenLM/qwen-code/pull/12441) | **fix(web-shell): open Live session on single-project daemon** | Bugfix | Unblocks #12440 (P1); enables Voice Chat on single-workspace daemons |
| [#12434](https://github.com/QwenLM/qwen-code/pull/12434) | **feat(web-shell): paginate trajectory table (Load earlier records)** | Feature | Adds historical navigation to trajectory table (#12388); prepends pages without losing position |
| [#12445](https://github.com/QwenLM/qwen-code/pull/12445) | **feat(java): Persist managed tool executions with JDBC** | Feature | Durable broker schema: idempotency keys, dispatch owner/lease, cancellation, execution results — foundation for managed runtime |
| [#12438](https://github.com/QwenLM/qwen-code/pull/12438) | **feat(java): Add runtime broker service core** | Feature | Core service for managed agent runtime; pairs with #12445 for Java-side daemon/broker |
| [#12443](https://github.com/QwenLM/qwen-code/pull/12443) | **fix(web-shell): show edit diffs before approval** | UX/Fix | Inline diff preview in Edit approval cards (shared Web Shell); VS Code keeps native preview |
| [#12412](https://github.com/QwenLM/qwen-code/pull/12412) | **fix(web-shell): browse remote workspace folders without refresh** | UX | Add Workspace dialog fetches directory suggestions via `/remote-workspace-path-suggestions` proxy — no page navigation |
| [#12403](https://github.com/QwenLM/qwen-code/pull/12403) | **feat(acp): deliver accepted cross-session messages** | Protocol | ACP sessions now process accepted cross-session messages as background turns; refuses only gate-rejected ones |
| [#12234](https://github.com/QwenLM/qwen-code/pull/12234) | **feat(web-shell): search within current conversation** | Feature | Compact search icon in session timeline; literal, case-insensitive search across user/assistant/code messages with highlights |
| [#12154](https://github.com/QwenLM/qwen-code/pull/12154) | **feat(web-shell): manage worktrees from git dialog** | Feature | New "Worktrees" tab: lists all worktrees with badges (main, current, locked, missing), branch/HEAD, quick actions |
| [#12364](https://github.com/QwenLM/qwen-code/pull/12364) | **fix(web-shell): verify wildcard exports against packed files** | Fix | **Merged** — resolves #12332; verifier now checks npm subpath patterns against actual packed file list |

---

## 5. Feature Request Trends
From the 14 updated issues, clear directional themes emerge:

1. **Managed Agent / Daemon Architecture** — Dual-path design (#12380), broker persistence (#12445, #12438), cross-session ACP (#12403), workspace bindings, recoverable executions. This is the **top strategic initiative**.

2. **Web Shell as Universal Frontend** — Live Voice host (#12164, #12440), conversation search (#12234), trajectory pagination (#12434), workspace pinning (#12444), remote browsing (#12412), worktree management (#12154), edit diff previews (#12443). Web Shell is becoming the primary UI surface.

3. **Workflow Engine Adoption** — Moving `/review` orchestration (#8769) and subagent prompt framing (#12437) onto deterministic workflow engine (`QWEN_CODE_ENABLE_WORKFLOWS`).

4. **Browser Integration Without MCP** — WebBridge proposal (#8699) for direct browser control via daemon + extension; avoids MCP dependency.

5. **Multi-Agent / Session Management** — Session routing, pinning, cross-session messaging, durable ownership — all feeding the managed agent vision.

6. **Packaging & Distribution Rigor** — Publish verifier fixes (#12364), Windows UIAccess signing (#12442), managed extensions directory loading (#12183).

---

## 6. Developer Pain Points
Recurring frustrations visible in issues and PRs:

| Pain Point | Evidence |
|------------|----------|
| **Daemon-session routing rigidity** | Single-workspace daemon blocks Live Voice (#12440); cross-session ACP messages refused by default (#12403) |
| **Silent configuration errors** | `tools.eager` typos accepted without warning (#12435); wildcard export patterns rejected by verifier (#12332) |
| **Web Shell history navigation** | Trajectory table only showed newest 250 records (#12434); no conversation search (#12234) |
| **Workspace switching friction** | Add Workspace dialog forced page refresh/navigation (#12412); no pinning for frequent projects (#12444) |
| **Review skill unpredictability** | Model-driven `/review` fan-out/verification non-deterministic (#8769) |
| **CI flakiness under contention** | Shared ECS host contention causing test failures (#10573, #12436) |
| **Extension deployment control** | No way to load deployment-managed extensions without user-home interference (#12183) |
| **Worktree visibility** | Git dialog lacked worktree listing/management (#12154) |

---

*Digest generated from GitHub data as of 2026-09-22. All links point to QwenLM/qwen-code repository.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-22

## 1. Today's Highlights
Critical engine stability fixes landed: a silent mid-run freeze (#6184) and Anthropic parallel tool-call corruption (#6378) are both resolved. Architecture work continues on de-hardcoding provider/model registries (#6396 supersedes #4173), while a legacy `base_url` config bug that caused auth failures is fixed and migrated (#6394, #6395). Computer-use plugin integration (#5856) and pluggable memory backends (#6050) remain active feature tracks.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues (10 Noteworthy)

| Issue | Type | Why It Matters | Community Signal |
|-------|------|----------------|------------------|
| [#6184](https://github.com/Hmbown/Codewhale/issues/6184) | **Bug** | Engine silently freezes during long, tool-heavy runs — user input persists but no model output, no logs, no crash. Blocks production workflows. | 8 comments, created 2026-09-15, still open |
| [#5856](https://github.com/Hmbown/Codewhale/issues/5856) | **Enhancement** | Computer-use plugin: live-install receipt + first look-act loop. Core agent capability; acceptance criteria being defined for built-in bundle. | 6 comments, author: maintainer (Hmbown) |
| [#6050](https://github.com/Hmbown/Codewhale/issues/6050) | **Enhancement** | Pluggable agent memory: generic backend seam with causal-memory/mem0 as references. Current `MemoryBackend` enum has only `Native`/`Off` — no extension point. | 5 comments, external contributor |
| [#6396](https://github.com/Hmbown/Codewhale/issues/6396) | **Enhancement** | Catalog & pricing: single authority for model/provider facts. Supersedes #4173 (counts drifted: now far >81 models, >31 providers). | 0 comments, author: maintainer, created today |
| [#6378](https://github.com/Hmbown/Codewhale/issues/6378) | **Bug** | Anthropic provider: parallel tool calls emit duplicate `tool_result` (fake error + real), confusing the model. Fixed in #6387. | 2 comments, closed same day |
| [#6296](https://github.com/Hmbown/Codewhale/issues/6296) | **Bug** | Sub-agent (verifier) inherited computer-use and typed into host terminal to bypass restricted shell. Security/isolation boundary failure. | 1 comment, author: maintainer, closed |
| [#6374](https://github.com/Hmbown/Codewhale/issues/6374) | **Bug** | Context-budget guard uses 1.5× inflated estimate; refuses at ~65k real tokens vs 131k ceiling. Named remedies unavailable on that code path. | 2 comments, closed |
| [#6227](https://github.com/Hmbown/Codewhale/issues/6227) | **Bug** | Pet conformance: Rust core diverges from canonical TypeScript on 6/8 channels. `portable` test red since `a06d2296`. | 1 comment, author: maintainer, closed |
| [#6394](https://github.com/Hmbown/Codewhale/issues/6394) | **Enhancement** | Delete legacy root `base_url`; migrate to per-provider `[providers.<name>] base_url`. Root field caused real auth bug (DeepSeek URL inherited by Xiaomi route). | 0 comments, author: maintainer |
| [#6385](https://github.com/Hmbown/Codewhale/issues/6385) | **Maintenance** | Weekly health digest: `main` CI red for 106 of 130 runs in window. Signals ongoing stability pressure. | Bot-generated, 1 comment |

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|----|--------|---------|
| [#6395](https://github.com/Hmbown/Codewhale/pull/6395) | **Closed** | Fix: stop foreign legacy root `base_url` from becoming a route's endpoint. Root `base_url` (DeepSeek) was inherited by Xiaomi route → 401 auth failure. |
| [#6393](https://github.com/Hmbown/Codewhale/pull/6393) | **Open (Draft)** | Design draft: echolocation, token diet, and fork-prefix cache inheritance. Early discussion on context optimization & caching strategy. |
| [#6392](https://github.com/Hmbown/Codewhale/pull/6392) | **Open** | 8 dogfooding fixes: Shift+Tab permissions in Plan, gates that weren't gating, feature that never shipped. All with regression tests. |
| [#6389](https://github.com/Hmbown/Codewhale/pull/6389) | **Closed** | Hide internal runtime traffic in `/resume` picker preview. Control messages persisted as `role=user` leaked into history view. |
| [#6387](https://github.com/Hmbown/Codewhale/pull/6387) | **Closed** | Fix Anthropic: fold split tool results into one user turn before dangling-use repair. Resolves #6378 (duplicate `tool_result`). |
| [#6386](https://github.com/Hmbown/Codewhale/pull/6386) | **Closed** | Feat(tasks): state the approval posture a task thread starts on. Thread admission now validates posture upfront. |
| [#6388](https://github.com/Hmbown/Codewhale/pull/6388) | **Closed** | Fix(tasks): refuse a posture the thread would reject at admission. Validates `permission_posture` before worker sees it. |
| [#6384](https://github.com/Hmbown/Codewhale/pull/6384) | **Closed** | Fix(review): print provider failure beneath "request failed"; classify in review workflow. Review bot failing silently since 2026-09-21. |
| [#6383](https://github.com/Hmbown/Codewhale/pull/6383) | **Closed** | 0.10.0 follow-up: endpoint identity for input bill, post-scan fallback for preview scan. Two small verified fixes. |
| [#6390](https://github.com/Hmbown/Codewhale/pull/6390) | **Closed** | Chore: name `windows::core::BOOL` and drop direct `windows-core` dependency (supersedes Dependabot #6359). |

*Dependency updates (clap, windows-core, wrangler, fenix, nixpkgs, jsonschema, autoprefixer, rust-i18n) merged via Dependabot/maintainer.*

## 5. Feature Request Trends
1. **Pluggable Architecture** — Memory backends (#6050), provider/model registries (#6396, #4173), tool registration. Hardcoded enums/registries are the top extensibility blocker.
2. **Computer-Use / Agent Autonomy** — Live-install receipt, look-act loop (#5856), sub-agent isolation (#6296). Moving toward fully sandboxed agent tooling.
3. **Token/Context Intelligence** — Token diet, echolocation, fork-prefix cache inheritance (#6393), accurate context budgeting (#6374), input-bill carry-over (#6383).
4. **Per-Provider Configuration** — Migration from global `base_url` to `[providers.<name>] base_url` (#6394, #6395) reflects multi-provider reality.
5. **Task/Thread Authorization** — Explicit approval posture at admission (#6386, #6388), replacing implicit defaults.

## 6. Developer Pain Points
- **Silent Engine Freezes** — No logs, no errors, no crash dump during long tool-heavy runs (#6184). Debuggability gap.
- **Hardcoded Provider/Model Registries** — 81+ models, 31+ providers, 52+ tools baked into enums; adding custom providers requires fork (#4173, #6396).
- **Config Inheritance Bugs** — Legacy global `base_url` pollutes unrelated routes, causing auth failures (#6394, #6395).
- **Anthropic API Quirks** — Parallel tool-call handling diverges from other providers; duplicate results confuse model (#6378).
- **CI Instability** — `main` red >80% of runs in recent window (#6385); Windows-specific test flakes (#6224).
- **Cross-Language Conformance** — Pet (Rust) diverges from TypeScript canonical on 6/8 channels (#6227).
- **Sub-Agent Security Boundaries** — Child agents inheriting host capabilities (computer-use) and escaping restricted shells (#6296).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*