# AI CLI Tools Community Digest 2026-09-19

> Generated: 2026-09-19 04:17 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-19)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is entering a **consolidation and hardening phase** after rapid feature expansion. All major tools are prioritizing **reliability, sandbox safety, and extensibility** over raw capability additions. Cross-tool standardization is accelerating around **AGENTS.md** (instruction portability), **ACP** (editor integration), and **MCP** (tool ecosystem). Windows stability and session/data integrity have emerged as universal blockers. The market is splitting between **enterprise-grade platforms** (Claude Code, Copilot CLI, Codex) investing in governance, multi-account, and policy controls, and **developer-first tools** (Gemini CLI, OpenCode, Qwen Code, Codewhale) pushing architectural innovation in subagents, sandboxing, and provider neutrality.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Merged (24h) | Release Status | Key Signal |
|------|---------------------|------------------|----------------|------------|
| **Claude Code** | 10 hot issues (5,169 👍 top) | 9 significant PRs | **v2.1.278** stable | Highest community engagement; AGENTS.md shipped |
| **OpenAI Codex** | 10 critical issues | 20 PRs (batched by bot) | **7 alphas** + 1 stable patch | Rapid stabilization sprint; critical safety incidents |
| **Gemini CLI** | 10 high-impact issues | 10 major PRs | **v0.62.0-nightly** | Architectural investments (AST, task tracker, ConPTY) |
| **GitHub Copilot CLI** | 10 issues (mostly MCP/session) | 0 PRs | **v1.0.87-0** | Enterprise MCP integration pain; config fragility |
| **Kimi Code CLI** | 10 issues (Linux headers, regressions) | 1 PR | **None** | Go rewrite regressions; provider fragmentation |
| **OpenCode** | 10 issues (migration, provider, session) | 10 significant PRs | **None** | v2.0 migration gaps; desktop startup perf focus |
| **Pi** | 10 issues (edit tool, CPU, catalog drift) | 10 PRs | **None** | Provider catalog freshness; silent failure modes |
| **Qwen Code** | 10 issues (macOS P1, LSP, permissions) | 10 PRs | **v0.24.1-preview + nightly** | Sandbox foundation (bwrap); granular permissions |
| **DeepSeek TUI (Codewhale)** | 10 issues (ACP, sub-agent, MCP) | 10 PRs | **None** (v0.9.13 stable) | Provider-neutral rewrite; ACP maturity push |
| **Grok Build** | 0 | 0 | **None** | Dormant |

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Cross-agent instruction portability** | Claude Code, OpenCode, Gemini CLI, Copilot CLI, Qwen Code | AGENTS.md adoption (#6235 5,169 👍); portable session/link handling; unified config discovery |
| **Subagent/orchestration maturity** | Gemini CLI, OpenCode, Codewhale, Claude Code, Qwen Code | Reliable delegation, recovery from turn limits, observability (tokens, status), name lifecycle, autonomous invocation |
| **Sandboxing & isolation** | Qwen Code (bwrap), OpenAI Codex (Seatbelt/Windows), OpenCode, Claude Code, Gemini CLI | Tool-level confinement, Windows Job Object fixes, macOS Seatbelt hardening, non-paged pool leak resolution |
| **ACP/IDE integration** | Codewhale, Qwen Code, OpenCode, Gemini CLI, Copilot CLI | Headless ACP session support, sandbox policy respect, YOLO mode, MCP connection supervision, thread/turn runtime |
| **Provider neutrality & catalog freshness** | Codewhale, Pi, Kimi Code, Qwen Code, OpenCode | Automated model catalog sync, OpenAI-compatible abstraction, multi-provider routing, header/session abstraction |
| **Session/state durability** | All tools | Compaction validation, session import/export, resume fidelity, config persistence, metadata sync |
| **Windows/Linux parity** | Codex, Claude Code, Copilot CLI, Kimi Code, OpenCode, Qwen Code | ConPTY stability, cmd/PowerShell choice, WSL detection, clipboard, non-UTF-8 encoding, kernel object leaks |
| **Extensibility frameworks** | Claude Code (Mods), Codewhale, Gemini CLI, OpenCode, Copilot CLI | Function hooks, skill/plugin systems, MCP server management, custom tool registration |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Developer-First Tools |
|-----------|---------------------------|----------------------|
| **Primary Focus** | Governance, multi-account, policy controls, compliance | Architectural innovation, composability, hackability |
| **Key Tools** | Claude Code, GitHub Copilot CLI, OpenAI Codex | Gemini CLI, OpenCode, Qwen Code, Codewhale, Pi |
| **Extensibility Model** | Managed Mods/Plugins (Claude Code), MCP (Copilot), Guardian (Codex) | First-class function hooks, SubAgent classes, ACP-native, provider-neutral core |
| **Sandbox Approach** | Server-side classifier (Claude), Seatbelt/Win32 (Codex), Org policies | bwrap (Qwen), custom ConPTY (Gemini), process supervision (OpenCode) |
| **Session Model** | Cloud-synced, multi-device, enterprise SSO | Local-first, file-based, git-aware, worktree-aware |
| **Target User** | Teams, enterprises, regulated environments | Individual devs, power users, OSS contributors, researchers |
| **Release Cadence** | Stable + controlled alphas | Nightly + preview, rapid iteration |
| **Pain Point Profile** | Auth races, multi-account, Desktop parity, token opacity | Subagent reliability, memory leaks, catalog drift, silent failures |

**Unique Technical Bets:**
- **Claude Code**: Server-side classifier eliminating token charges; Mods as distributable extensions
- **Codex**: Guardian safety layer; turn-trigger observability; network proxy binary
- **Gemini CLI**: AST-aware tooling (structural search); persistent file-based task tracker; ConPTY hardening
- **Qwen Code**: bwrap sandbox foundation; byte-length LSP framing; background Agent View sessions
- **Codewhale**: Provider-neutral client architecture; terminal byte stream protocol; fleet/sub-agent dashboard
- **OpenCode**: Desktop startup decoupling (shell before servers); rich artifact tabs; non-UTF-8 encoding support
- **Pi**: Meta provider with OAuth token re-minting; extension system prompt appends; TUI performance at scale

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / High Maturity** | **Claude Code**, **OpenAI Codex** | 5,000+ 👍 issues; 7 alphas/24h; enterprise adoption signals; dedicated security/sandbox teams |
| **High Momentum / Rapid Iteration** | **Gemini CLI**, **Qwen Code**, **OpenCode**, **Codewhale** | Nightly releases; architectural PRs (AST, bwrap, provider-neutral); active subagent/eval investment |
| **Stabilizing / Enterprise-Focused** | **GitHub Copilot CLI** | Stable releases; MCP ecosystem pain; config/session fragility; org-agent visibility gaps |
| **Transition / Technical Debt** | **Kimi Code**, **Pi** | Go/Python rewrite regressions; catalog drift; silent failure modes; Linux header bugs |
| **Dormant** | **Grok Build** | Zero activity |

**Community Health Signals:**
- **Claude Code** leads in raw engagement (AGENTS.md = highest 👍 in repo history)
- **Codex** shows highest *velocity* (20 PRs batched + 7 alphas) but driven by critical safety regressions
- **Gemini CLI** and **Qwen Code** demonstrate strongest *architectural discipline* (foundational PRs: AST, bwrap, byte-length LSP, ConPTY)
- **Codewhale** uniquely investing in *protocol-level* work (terminal byte stream, ACP thread/turn runtime, provider-neutral core)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Standardization on AGENTS.md** | 5,169 👍 on Claude Code; adopted/referenced by Codex, Amp, Cursor, Gemini, OpenCode | **Adopt AGENTS.md now** — it's becoming the Dockerfile of agent instructions. Tools without support will face integration friction. |
| **ACP > MCP for editor integration** | Codewhale, Qwen Code, Gemini CLI, OpenCode all investing in ACP thread/turn runtime | **ACP is the emerging standard** for IDE↔CLI communication. MCP remains for tool servers; ACP for session control. |
| **Sandboxing moving to kernel/OS level** | Codex (Seatbelt/XPC), Qwen (bwrap), Claude (Job Objects), Gemini (ConPTY) | **Expect tool-level isolation** as default. Tools without sandbox foundations will accumulate CVEs. |
| **Subagents becoming first-class primitives** | Gemini (SubAgent class), Codewhale (fleet dashboard), OpenCode (delegation), Claude (Mods) | **Design for delegation** — single-agent workflows are legacy. Token accounting, recovery, and observability for subagents are table stakes. |
| **Provider neutrality as competitive moat** | Codewhale (complete rewrite), Pi (catalog drift pain), Kimi (OpenCode Go 400s), Qwen (multi-provider) | **Lock-in is a liability**. Tools abstraction layers over provider APIs will win multi-model workflows. |
| **Windows is the quality gate** | Every tool has critical Windows issues (pool leaks, Job Objects, ConPTY, WSL, cmd) | **Windows CI investment correlates with enterprise readiness**. Tools ignoring Windows lose org adoption. |
| **Silent data loss = trust crisis** | Codex (home dir deletion), Gemini (compaction), Pi (compaction no-ops), OpenCode (session leaks) | **Observability > features**. Compaction validation, session audit trails, and deterministic replay are now differentiators. |
| **Desktop apps diverging from CLI** | Codex (unified app), Copilot (VS Code parity), Claude (Desktop parity gaps), OpenCode (startup decoupling) | **Two distinct UX paradigms**: CLI-first (scriptable, ssh-friendly) vs Desktop-first (GUI, multi-pane). Choose based on team workflow. |

---

## Recommendation Summary

| If Your Priority Is... | Recommended Primary Tool | Watch List |
|------------------------|-------------------------|------------|
| **Enterprise governance, multi-account, compliance** | Claude Code | Copilot CLI (org agents), Codex (Guardian) |
| **Architectural innovation, hackability, local-first** | Gemini CLI, OpenCode | Qwen Code (sandbox), Codewhale (ACP) |
| **Multi-model/provider workflows** | Codewhale, Pi | Qwen Code, OpenCode |
| **IDE/editor integration depth** | Codewhale (ACP), Qwen Code (web-shell), Copilot CLI (VS Code) | Gemini CLI (ACP), OpenCode |
| **Windows stability** | *Wait for fixes* — all tools have critical gaps | Claude Code (Job Objects), Codex (sandbox), Gemini (ConPTY nightly) |
| **Long-running autonomous agents** | Gemini CLI (task tracker), OpenCode (background), Qwen Code (Agent View) | Codewhale (fleet), Claude Code (Mods) |

**Bottom Line**: The ecosystem is converging on **AGENTS.md + ACP + sandboxed subagents** as the baseline. Tools investing in these three pillars (Claude Code, Gemini CLI, Qwen Code, Codewhale, OpenCode) are best positioned for 2027. Enterprises should standardize on AGENTS.md today and evaluate ACP-capable CLIs for IDE integration.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-19 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most Discussed PRs

| Rank | Skill | Functionality | Discussion Highlights | Status |
|------|-------|---------------|----------------------|--------|
| 1 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** | Automated static analysis for Solidity/Rust smart contracts; anchors cryptographic audit proofs on TON blockchain via ProofCore's zero-storage Merkle protocol | First Web3 security skill in the collection; targets Web3 developers needing notarized audit trails | `OPEN` (created 2026-09-15) |
| 2 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** | Zero-cost Markdown → MP4 pipeline with realistic voiceovers via Marp + TTS; includes slide generation, audio synthesis, video compilation | Content-creation workflow automation; "zero-cost" positioning appeals to creators | `OPEN` (updated 2026-09-15) |
| 3 | **[mcp-builder](https://github.com/anthropics/skills/pull/1742)** | Fixes MCP ≥2.0 compatibility: `streamable_http_client` rename, custom headers via `create_mcp_http_client` | Addresses breaking changes in MCP 2.0; unblocks server builders | `OPEN` (updated 2026-09-17) |
| 4 | **[blast-radius](https://github.com/anthropics/skills/pull/1776)** | Pre-execution checklist for bulk/destructive operations (user archival, access revocation, mass deletion, batch mail) — classifies risk beyond row-level correctness | Safety-first skill for ops/DBAs; fills "query right, operation wrong" gap | `OPEN` (created 2026-09-17) |
| 5 | **[Hivemind](https://github.com/anthropics/skills/pull/1628)** | Zero-cost multi-agent orchestration: delegates mechanical work to headless `opencode` workers on free models; Claude remains planner/reviewer/merger | Cost-optimization pattern; "expensive model context is scarce resource" thesis resonates | `OPEN` (updated 2026-08-24) |
| 6 | **[AWT (AI Watch Tester)](https://github.com/anthropics/skills/pull/822)** | AI-powered E2E testing: zero-code test generation via browser control + vision; auto-healing selectors; CI/CD integration | Brings visual testing into skill ecosystem; active iteration (updated 2026-09-19) | `OPEN` |
| 7 | **[skill-creator trigger fixes](https://github.com/anthropics/skills/pull/1298)** | Isolates trigger evaluations, handles Windows `select()` failures, prevents unrelated tools from stopping scans, fixes false-negative runtime failures | Core infrastructure fix; affects all skill authoring; long-running (open since June) | `OPEN` (updated 2026-09-16) |
| 8 | **[pyxel](https://github.com/anthropics/skills/pull/525)** | Retro game development in Python: deterministic headless runs, frame inspection, state checks, presentation defaults | Niche but passionate community; includes verification tooling | `OPEN` (updated 2026-09-16) |

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Top Issues) | Signal Strength |
|-------|----------------------|-----------------|
| **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills distributed under `anthropic/` namespace impersonate official skills, enabling trust-boundary abuse | 🔴 Critical |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): No native org-wide sharing; manual `.skill` file distribution via Slack/Teams | 🟠 High |
| **Evaluation Infrastructure Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `run_eval.py` + `claude -p` yields 0% trigger rate; [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments): `mcp-builder` evaluation scores 0/N due to swallowed `TextContent` errors | 🟠 High |
| **Duplicate/Conflicting Skill Packs** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): `document-skills` and `example-skills` install identical content → context window bloat | 🟡 Medium |
| **Context Window Pressure** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` skill eagerly injects ~156k tokens, exhausting context in one call | 🟡 Medium |
| **New Domain Expansion** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments): `compact-memory` proposal (symbolic notation for agent state); [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1👍): Reasoning Quality Gate Pipeline (calibration → adversarial review → verification) | 🟡 Medium |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It's Poised to Merge |
|----|-------|--------------------------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder MCP 2.0 fix** | Fixes concrete breaking change; references [#1668](https://github.com/anthropics/skills/issues/1668); recent activity (Sept 17) |
| [#1769](https://github.com/anthropics/skills/pull/1769) | **skill-creator trigger detection (0% recall fix)** | Fixes [#1721](https://github.com/anthropics/skills/issues/1721); core tooling bug affecting all skill authors; minimal scope |
| [#1765](https://github.com/anthropics/skills/pull/1765) | **office: UTF-8 decode for redlining diffs** | Fixes [#1707](https://github.com/anthropics/skills/issues/1707); Windows/non-UTF-8 locale support; single-file change |
| [#1724](https://github.com/anthropics/skills/pull/1724) | **mcp-builder: default model → claude-sonnet-5** | Updates outdated default (`claude-3-7-sonnet-20250219`); documentation alignment; low risk |
| [#538](https://github.com/anthropics/skills/pull/538) | **pdf: case-sensitive file references** | 8 filename case mismatches (`REFERENCE.md`→`reference.md`); breaks on Linux; trivial fix, open since March |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: isolate trigger evals + Windows fixes** | Longest-running active infra PR (June→Sept); addresses Windows CI failures; high impact |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is for trustworthy skill distribution (namespace security, org sharing) and reliable evaluation infrastructure, while actively expanding into Web3 auditing, AI-driven content creation (Markdown→video), multi-agent cost optimization, and safety-critical operation guardrails.**

---

# Claude Code Community Digest — 2026-09-19

## Today's Highlights
Claude Code v2.1.277–278 shipped **AGENTS.md support** (the community's #1 request with 5,169 👍) and switched auto-mode to a **server-side classifier** that eliminates classifier overhead charges for API/Enterprise/Bedrock/Vertex/Foundry users. The diff pane received a series of UX polish PRs, and the `agents-md` mod source landed, signaling a modular extensibility direction.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **v2.1.278** | Auto mode now defaults to server-side classifier (no classifier token charges) for Claude API, Enterprise, Bedrock, Vertex, Foundry, and gateways. Opt-out: `CLAUDE_CODE_AUTO_MODE_SERVER=0`. |
| **v2.1.277** | **AGENTS.md support**: reads `AGENTS.md` as project instructions when no `CLAUDE.md` exists (configurable in `/config` → "Project instructions"). Added `CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1` for gateway egress boundaries. Not yet on Bedrock/Vertex/Foundry. |

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#6235](https://github.com/anthropics/claude-code/issues/6235) | **AGENTS.md support** (CLOSED) | Unified agent instruction format across Codex, Amp, Cursor, et al. | **5,169 👍**, 401 comments — highest engagement in repo history |
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | **Mods: extensibility framework** (OPEN) | Function hooks to make Claude "10× more extensible"; shipping in weeks | 121 👍, 201 comments — active design discussion |
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | **Multi-account management in Desktop** (OPEN) | Switch between personal/enterprise profiles without re-auth | 815 👍, 192 comments — long-standing workflow blocker |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | **Windows launch failure: orphaned Silo/Job Object** (OPEN) | App crash leaves kernel objects; only logoff/reboot recovers | 35 👍, 98 comments — critical Windows stability issue |
| [#87647](https://github.com/anthropics/claude-code/issues/87647) | **6,000+ "has repro" issues auto-closed since Mar 2026** (OPEN) | Auto-closer may be discarding valid, reproducible bugs | 49 👍, 7 comments — process/trust concern |
| [#81472](https://github.com/anthropics/claude-code/issues/81472) | **Copy/paste broken across all surfaces** (OPEN) | 42 open issues trace to a handful of root causes in TUI/VS Code/Desktop | 11 👍, 6 comments — daily friction for all users |
| [#77651](https://github.com/anthropics/claude-code/issues/77651) | **Assistant text between tool calls silently lost** (OPEN) | Interleaved thinking blocks not rendered, not in Ctrl+O, not in `.jsonl` | 11 comments — data loss / observability gap |
| [#94198](https://github.com/anthropics/claude-code/issues/94198) | **CoworkVMService non-paged pool leak (Windows)** (OPEN) | ~230 MB/min leak in `ntfs.sys`; restart clears, shutdown doesn't | 5 comments — kernel resource exhaustion |
| [#95489](https://github.com/anthropics/claude-code/issues/95489) | **fswatch-probe retry storm: 38k opens/sec, 230 MB/min pool leak** (OPEN) | Bundled engine spins on failing file watch; workaround `CLAUDE_CODE_TMPDIR` | 2 comments — severe regression on Windows |
| [#47579](https://github.com/anthropics/claude-code/issues/47579) | **Co-Authored-By added without consent/opt-out** (CLOSED, duplicate) | Git commits permanently modified; no disclosure or setting | 4 👍, 11 comments — privacy/attribution concern |

---

## Key PR Progress

| # | PR | Description |
|---|----|-------------|
| [#95409](https://github.com/anthropics/claude-code/pull/95409) | **`mods/agents-md`: the AGENTS.md project-instructions mod** | Source for the new AGENTS.md mod (manifest, hooks, tests, README) — reads `AGENTS.md` like engine reads `CLAUDE.md`, controlled by `instructionFiles` option. |
| [#95417](https://github.com/anthropics/claude-code/pull/95417) | **`mods/agents-md`: Read attaches no nested AGENTS.md when engine attaches nothing** | Respects `--bare` / `CLAUDE_CODE_SIMPLE` / `CLAUDE_CODE_DISABLE_ATTACHMENTS` flags on every Read. |
| [#95488](https://github.com/anthropics/claude-code/pull/95488) | **Diff: docked pane reads repo before opening** | Eliminates "Loading diff…" flash; pane lands filled (rows / "No changes" / "Diff unavailable"). |
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | **Diff: first edit opens pane only when it has a file to list** | Prevents empty pane on writes outside repo, ignored files, or different worktrees. |
| [#95476](https://github.com/anthropics/claude-code/pull/95476) | **Diff: first edit opens pane only from main loop with checkpointing on** | Subagent edits or checkpointing-off sessions don't auto-open; narrow-terminal waits withdrawn. |
| [#95423](https://github.com/anthropics/claude-code/pull/95423) | **Diff: shell commands held read-only fetch nothing** | Skips refetch after `ls`, `git status`, `cat`, grep — reads `isReadOnly` from shell tool. |
| [#95198](https://github.com/anthropics/claude-code/pull/95198) | **Mods/diff: type `openPane` as `unknown`** | Prepares for richer `$.ui.open` result object; no behavioral change. |
| [#51452](https://github.com/anthropics/claude-code/pull/51452) | **Update README.md** | Rewrote for clarity, removed AI-style filler, fixed npm badge, tightened headers/privacy section. |

---

## Feature Request Trends (from Issues)

1. **Extensibility & Mods** — #91870 (function hooks), #95507 (LSP diagnostic filtering), community building custom mods
2. **Multi-account / Profile Management** — #18435 (Desktop), #91708 (Windows/VS Code OAuth race)
3. **Cross-Agent Standards** — AGENTS.md adoption (#6235), portable session/link handling (#95478)
4. **Desktop App Parity** — Linux tab visibility (#94673), Routines UX (#95472, #93544), Remote Control reliability (#94735, #95407, #95491)
5. **Token Efficiency** — #95507 (hint-severity diagnostics flooding context), classifier overhead elimination (v2.1.278)
6. **Theme / UI Customization** — #89606 (transparent terminal backgrounds), #95508 (markdown link/abbr hover hints)

---

## Developer Pain Points (Recurring High-Frequency Frustrations)

| Area | Symptoms |
|------|----------|
| **Windows Stability** | Orphaned Job Objects blocking launch (#53247), sandbox breaking Gradle/JVM loopback (#77508), non-paged pool leaks (#94198, #95489), always-on-top window glitch (#95264), folder picker regression (#95472) |
| **Session / Remote Control Reliability** | Sessions dropped on auto-update (#95407, #95491), iOS deep links open app not session (#95478), scheduled tasks not syncing to iOS (#94735), sidebar entries stale after deletion (#93544) |
| **Copy/Paste & Text Handling** | Broken across TUI, VS Code, Desktop (#81472 — 42 open issues); assistant text lost between tool calls (#77651) |
| **Auth / Credential Store** | Concurrent OAuth refresh races on Windows file store (#91708), forced re-login loops |
| **Observability / Debugging** | Auto-closer hiding valid repros (#87647), missing Glob/Grep in palette (regression #52004), Co-Authored-By injected silently (#47579) |
| **Linux Desktop Gaps** | Code/Settings tabs missing (#94673), scratch workspace disabling SessionStart hooks (#95485), GrowthBook flag thrash |

---

*Data sourced from `github.com/anthropics/claude-code` — releases, issues, and PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-19

---

## 1. Today's Highlights

- **Rapid alpha iteration**: Seven `0.156.0-alpha` releases pushed in 24 hours, signaling active stabilization work ahead of the next stable release. The sole stable patch `0.155.1` disables reasoning summaries by default for local TUI sessions to fix provider rejections.
- **Critical Windows data-loss incident** (#46022) and **home-directory deletion risk** (#33624) dominate community attention, underscoring sandbox safety as the top concern.
- **Desktop app instability on Windows** clusters across multiple issues: send-button hangs (#40968), project sidebar disappearance (#42739), unresponsive tasks (#46479), and browser connector failures (#45625).

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| `0.156.0-alpha.2` → `alpha.7` | Alpha | Seven consecutive alpha cuts (no individual changelogs published); likely incremental fixes for sandbox, Windows, and TUI regressions. |
| `0.155.1` | Stable patch | **Bug fix**: New local TUI sessions now leave reasoning summaries disabled by default, preventing request rejection by providers that don’t support them. Explicit `reasoning-summary` settings remain respected. ([#46467](https://github.com/openai/codex/pull/46467)) |

> Full changelog: [rust-v0.155.1 → rust-v0.156.0-alpha.7](https://github.com/openai/codex/compare/rust-v0.155.1...rust-v0.156.0-alpha.7)

---

## 3. Hot Issues (Top 10 by Impact & Community Reaction)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#26](https://github.com/openai/codex/issues/26) | **Support for local / other LLMs** | Long-standing request (52 comments, 113 👍) to run Codex fully offline or with self-hosted models—key for enterprise/air-gapped use. | Highest engagement; closed but reflects persistent demand. |
| [#33624](https://github.com/openai/codex/issues/33624) | **Safety: hard confirmation for bulk/home-directory deletion** | GPT-5.6 Ultra-mode subagent recursively deleted user’s home directory under Full Access. Proposes mandatory confirmation gate. | 43 comments; critical safety gap in sandbox model. |
| [#46022](https://github.com/openai/codex/issues/46022) | **[CRITICAL DATA LOSS][Windows] Mass deletion outside project scope** | Hundreds of GB deleted—unrelated projects, apps, Windows components. Indicates sandbox escape on Windows. | 27 comments; severity: production-blocking. |
| [#40968](https://github.com/openai/codex/issues/40968) | **Windows Desktop: Send button spins forever** | Follow-up prompts never submit in ChatGPT/Codex unified app (v26.820.7780.0). | 42 comments, 16 👍; core workflow broken. |
| [#45119](https://github.com/openai/codex/issues/45119) | **macOS 14.2: sandbox startup fails (unbound `TIOCSTI`)** | Bundled CLI 0.154.0-alpha.6.2 crashes on sandbox init; affects Apple Silicon. | 22 comments; macOS regression. |
| [#40865](https://github.com/openai/codex/issues/40865) | **Desktop Remote SSH: inter-task tools broken after update** | Remote coordination stopped pre-update; updating to 0.148.0 didn’t restore it. | 18 comments, 15 👍; remote dev workflow impacted. |
| [#42739](https://github.com/openai/codex/issues/42739) | **Windows: Local projects disappear from sidebar after update** | Projects section shows “No projects”; folders exist on disk. | 15 comments; data-visibility bug. |
| [#31925](https://github.com/openai/codex/issues/31925) | **Restore Option+Space Quick Chat on macOS** | Unified app removed global shortcut; 33 👍 shows strong muscle-memory dependency. | 14 comments, 33 👍; UX regression. |
| [#34764](https://github.com/openai/codex/issues/34764) | **Computer Use unavailable on Windows: App-protected files fail to copy** | `WindowsApps` protection blocks runtime relocation. | 12 comments; blocks Computer Use feature entirely on Windows. |
| [#41942](https://github.com/openai/codex/issues/41942) | **Lifecycle hooks add 17–25s per `exec_command` on Windows** | 10–16× slowdown concentrated after shell exit; authored by autonomous Claude Code agent. | 10 comments; severe perf regression. |

---

## 4. Key PR Progress (Top 10 Merged Today)

All 20 PRs shown were **closed/merged today** by `copyberry[bot]`—indicating a large automated or batched landing. Notable changes:

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#46583](https://github.com/openai/codex/pull/46583) | Deny XPC service lookups in macOS Seatbelt profiles | **Security/Sandbox** | Hardens macOS sandbox against XPC-based escapes. |
| [#46575](https://github.com/openai/codex/pull/46575) | Preserve Windows package identity for sandboxed descendants | **Windows/Sandbox** | Fixes identity propagation for non-`codex-command-runner` packaged callers. |
| [#46571](https://github.com/openai/codex/pull/46571) | Preserve macOS Seatbelt exclusions in scratch directories | **Security/Sandbox** | Prevents temp-dir grants from bypassing filesystem restrictions. |
| [#46580](https://github.com/openai/codex/pull/46580) | Keep Guardian reviews on the applied instruction snapshot | **Safety/Guardian** | Ensures Guardian reviews the exact instructions used at action generation time. |
| [#46577](https://github.com/openai/codex/pull/46577) | Allow thread instruction providers to share updates with subagents | **Architecture** | Enables instruction propagation down agent trees. |
| [#46574](https://github.com/openai/codex/pull/46574) | Notify users when asynchronous questions arrive in the TUI | **UX/TUI** | Adds `async-question` notification with priority over turn completion. |
| [#46573](https://github.com/openai/codex/pull/46573) | Add standalone network proxy binary with JSON config | **Networking** | Runs policy proxy without full Codex permissions profile. |
| [#46572](https://github.com/openai/codex/pull/46572) | Add turn-start cloud plugin discovery to MCP extension | **Extensibility** | Refreshes plugin catalog per turn; supports cloud provider metadata. |
| [#46569](https://github.com/openai/codex/pull/46569) | Set explicit turn triggers for exec and TUI requests | **Observability** | Tags `turn_trigger` (`exec`/`user`) in `turn/start` requests. |
| [#46562](https://github.com/openai/codex/pull/46562) | Add system proxy fallback for login/startup requests | **Networking** | Unblocks login/bootstrap when endpoints require system proxy. |

---

## 5. Feature Request Trends (from Issues)

1. **Local/offline LLM support** (#26, #35679) — Run Codex without cloud dependency; attach to self-hosted models.
2. **Multi-instance Desktop attachment** (#35679) — Connect one Desktop app to multiple CLI/VS Code/remote sessions.
3. **Unified workspace UX** (#35367) — Separate ChatGPT/Work/Codex projects; allow Chat + Codex + terminal in one pane.
4. **Mobile Remote Control + Codex Live** (#35248) — Voice mode on mobile attaching to Linux-hosted sessions.
5. **Explicit MCP/server configuration** (#28858, #42454) — Pagination support, stable env overrides for `cua_repl`.
6. **Granular permission profiles** (#42659, #44964) — Prevent silent escalation from read-only to Full Access; fix rule bypass via `zsh -c`.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Symptoms | Frequency |
|------|----------|-----------|
| **Windows Desktop stability** | Send-button hang, project sidebar loss, unresponsive tasks, browser connector returning HTML, 10–16× `exec_command` slowdown | 6+ issues |
| **Sandbox safety & scope escapes** | Home-directory deletion, mass data loss outside project, read-only → Full Access silent switch, rule bypass via nested shells | 4 critical issues |
| **Remote/SSH workflow breaks** | Inter-task tools lost after update, headless SSH loses delegation, thread messaging regression | 3 issues |
| **macOS regressions** | Quick Chat shortcut removed, `TIOCSTI` sandbox crash, browser ghost tabs, crash on `FSEvents` close | 4 issues |
| **Token/rate-limit opacity** | Unexplained usage spikes, voice chat ignoring mode selection | 2 issues |
| **Code review noise** | Spurious “model not available” comments on successful reviews | 1 issue |

---

## Quick Links
- **Repo**: [github.com/openai/codex](https://github.com/openai/codex)
- **Releases**: [Tags](https://github.com/openai/codex/tags)
- **Issue tracker**: [Issues](https://github.com/openai/codex/issues)
- **PR tracker**: [Pull Requests](https://github.com/openai/codex/pulls)

*Digest generated from GitHub data as of 2026-09-19 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-19

## Today's Highlights
The project shipped **v0.62.0-nightly** with a critical ConPTY hardening fix for Windows terminal stability. Two major feature PRs landed: an **AST-aware structural search tool** (#29396) enabling precise symbol navigation, and a **persistent file-based task tracker** (#29393) replacing the in-context `WriteToDo` tool. The backlog shows heavy focus on subagent reliability, memory system hardening, and evaluation infrastructure.

---

## Releases
**v0.62.0-nightly.20260919.gcfbcaa8df** ([PR #29403](https://github.com/google-gemini/gemini-cli/pull/29403))
- **Fix**: Synchronized ConPTY process exit lifecycle and hardened PTY output finalization ([#29383](https://github.com/google-gemini/gemini-cli/pull/29383)) — resolves Windows terminal hangs and output truncation on process termination.
- Automated nightly version bump.

---

## Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#3132](https://github.com/google-gemini/gemini-cli/issues/3132)** `[P3] Post V1.0 Work: SubAgent class` | Core architecture request: reusable `SubAgent` component for LLM-driven tool orchestration. Enables iterative problem-solving within tools (e.g., `EditTool` self-correction). | 46 comments, **50 👍** — highest engagement; signals strong demand for composable agent primitives. |
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** `[P1] Subagent recovery after MAX_TURNS reported as GOAL success` | Subagents falsely report `status: "success"` + `Termination Reason: "GOAL"` when hitting turn limits, masking failures. | 13 comments, 2 👍 — critical reliability bug; blocks trust in delegation. |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** `[P1] Generalist agent hangs` | Delegation to `generalist` agent causes indefinite hangs (up to 1hr) on simple tasks; workaround is disabling subagents. | 8 comments, **8 👍** — high-impact regression; makes default behavior unusable for some. |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** `[P2] AST-aware file reads, search, mapping` | Epic tracking AST-aware tooling to reduce token noise, misaligned reads, and improve codebase navigation precision. | 7 comments, 1 👍 — strategic direction; PR #29396 delivers first implementation. |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** `[P2] Gemini does not use skills/sub-agents autonomously` | Model rarely invokes custom skills/sub-agents without explicit instruction, limiting utility of extensions. | 6 comments — adoption blocker for skill ecosystem. |
| **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** `[P2] Deterministic redaction & reduce Auto Memory logging` | Auto Memory sends transcripts to extraction model *before* redaction; secrets enter model context. | 5 comments — security hardening for enterprise/memory features. |
| **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** `[P2] 400 error with > 128 tools` | CLI fails when tool count exceeds ~128; needs smarter tool scoping. | 3 comments — scalability limit for large workspaces. |
| **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** `[P2] Agent should discourage destructive behavior` | Model uses `git reset --force`, destructive DB ops without safeguards. | 3 comments, 1 👍 — safety guardrails needed for autonomous ops. |
| **[#21335](https://github.com/google-gemini/gemini-cli/issues/21335)** `[P2] /compress not persistent across session resume` | Chat compression lost on exit/resume; summary not written to session file. | 2 comments, **2 👍** — UX papercut for long sessions. |
| **[#23166](https://github.com/google-gemini/gemini-cli/issues/23166)** `[P2] Stabilize internal project evaluations` | Internal evals are flaky ("bleed"), making quality trends untrustworthy. | 1 comment — foundational for release confidence. |

---

## Key PR Progress (Top 10 by Impact)

| PR | Type | Summary |
|----|------|---------|
| **[#29396](https://github.com/google-gemini/gemini-cli/pull/29396)** | `feat` `size/xl` | **AST-aware structural search tool** — introduces regex-based AST analysis service + `ast_search` tool for precise symbol navigation (addresses #22745). |
| **[#29393](https://github.com/google-gemini/gemini-cli/pull/29393)** | `feat` `size/xl` | **Persistent file-based task tracker** — replaces in-context `WriteToDo` with `TrackerService` backed by CRUD file storage; fixes context rot, token bloat, and memory loss on resume (fixes #18836). |
| **[#29404](https://github.com/google-gemini/gemini-cli/pull/29404)** | `feat` | **`gemini models list` with JSON output** — enables programmatic model discovery for integrations; replaces unparsable interactive `/model` dialog. |
| **[#29400](https://github.com/google-gemini/gemini-cli/pull/29400)** | `fix` `P1` | **Duplicate tool responses on session resume** — deduplicates `functionResponse` messages persisted both in `toolCalls[].result` and as durable `user` messages. |
| **[#29402](https://github.com/google-gemini/gemini-cli/pull/29402)** | `fix` `P1` | **Failure-safe persistent state writes** — atomic temp-file + `fsync` + rename pattern prevents truncated `state.json` on interrupted saves. |
| **[#29368](https://github.com/google-gemini/gemini-cli/pull/29368)** | `fix` `P1` | **ACP session/load by ID without resumable content** — fixes session restoration when header exists but body is missing. |
| **[#29286](https://github.com/google-gemini/gemini-cli/pull/29286)** | `feat` `P1` | **Google Search tool in RobustAutonomousAgent** — adds web search capability to autonomous agent loop. |
| **[#29343](https://github.com/google-gemini/gemini-cli/pull/29343)** | `fix` | **Suppress uncaught `AbortError` logs on cancellation** — prevents hard crash on Node 23+ when user aborts stream. |
| **[#29217](https://github.com/google-gemini/gemini-cli/pull/29217)** | `fix` `P1/P2` | **Don't rewrite explicit `gemini-2.5-flash` selection** — `isFlashModel()` broad match was auto-upgrading pinned models. |
| **[#29201](https://github.com/google-gemini/gemini-cli/pull/29201)** | `fix` `P1` | **Preserve approved shell commands across confirmation retries** — fixes infinite permission loop for TOML commands with multiple `!{...}` injections. |

---

## Feature Request Trends
1. **Subagent/Delegation Maturity** — #3132, #22323, #21409, #21968, #20195: Community wants reliable, observable, and composable subagent primitives (recovery, tracing, autonomous invocation).
2. **Structured Code Intelligence** — #22745, #22746, #29396: Shift from line/glob-based tools to AST-aware symbol operations (search, read, mapping).
3. **Memory & Context Persistence** — #26525, #26522, #26523, #26516, #21335: Hardening Auto Memory (redaction, deduplication, quarantine) and session state (`/compress` persistence).
4. **Evaluation & Observability** — #23166, #23313, #21763, #22598: Stabilize evals, surface subagent trajectories in `/chat share`, include subagent context in bug reports.
5. **Enterprise/Non-Interactive Ops** — #3716 (Docker for PRs), #29404 (model list JSON), #29200 (MCP policy enforcement), #29368 (ACP session load).

---

## Developer Pain Points (Recurring Frustrations)
- **Subagent Unreliability**: Hangs (#21409), false success reporting (#22323), ignored configs (#22267), missing context in debugging (#21763).
- **Memory System Leakiness**: Secrets in model context (#26525), infinite retry loops (#26522), silent patch drops (#26523), lost compression (#21335).
- **Tool Scaling Limits**: 128-tool cap causing 400 errors (#24246); model creates temp scripts scattershot (#23571).
- **Destructive Defaults**: Model reaches for `git reset --force`, raw shell wrappers bypassing policy (#22672, #29203).
- **Terminal/UX Friction**: ConPTY hangs (fixed in nightly), Wayland browser agent failure (#21983), resize flicker (#21924), `\n` escaping bugs (#22466), interactive prompt stalls (#22465).
- **Documentation Gaps**: Missing CLI flags in reference (#29012), agent self-awareness of own flags/hotkeys (#21432).

---

*Generated from `google-gemini/gemini-cli` GitHub data (2026-09-19). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-19

## Today's Highlights
The v1.0.87-0 release introduces managed startup defaults for the Auto routing tier and improves steering prompt handling in chat. Community focus remains on MCP integration stability (Figma, Atlassian OAuth failures), session management bugs (config loss, stale metadata), and UX gaps like subfolder skill organization and Windows keyboard shortcuts.

---

## Releases
### v1.0.87-0
- **Auto routing tier policies**: Added user and managed startup defaults with strict/org-overridable organization policy controls.
- **Steering prompt UX**: Consecutive steering prompts in the same mode now combine into a single pending message; press `Up` in an empty input to recall and edit (including pasted text).

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1632](https://github.com/github/copilot-cli/issues/1632) | **Subfolder support for skills organization** | Enables scalable skill libraries; flat structure becomes unmanageable beyond ~10 skills. | 24 👍, 12 comments — **Closed** (likely shipped or deferred) |
| [#1285](https://github.com/github/copilot-cli/issues/1285) | **Org-level agents not appearing in CLI/VS Code** | Blocks enterprise adoption of custom agents hosted in `.github-private` repos. | 13 👍, 10 comments — **Open** |
| [#4870](https://github.com/github/copilot-cli/issues/4870) | **Figma MCP server fails on `-32601` from `server/discover`** | High-profile MCP integration broken in CLI but works in VS Code; indicates CLI-specific discovery bug. | 11 👍, 6 comments — **Open** |
| [#1824](https://github.com/github/copilot-cli/issues/1824) | **Default model selection missing** | Users forced to Claude Sonnet; no config to set preferred default model. | 3 👍, 6 comments — **Closed** |
| [#4765](https://github.com/github/copilot-cli/issues/4765) | **Config not read from non-repo-root workspace directories** | Breaks monorepo/multi-repo workflows where `.mcp.json` lives in parent workspace. | 4 comments — **Open** |
| [#1086](https://github.com/github/copilot-cli/issues/1086) | **PowerShell enforced on Windows; `cmd` unsupported** | Prevents running batch scripts (e.g., `gradlew`) in native `cmd` shells. | 2 👍, 4 comments — **Closed** |
| [#4839](https://github.com/github/copilot-cli/issues/4839) | **Option to disable taskbar icon requested** | Multi-session users get cluttered taskbar; no off switch. | 2 👍, 3 comments — **Open** |
| [#4886](https://github.com/github/copilot-cli/issues/4886) | **`--plugin-dir` skills missing from `/skills` and `/env`** | Plugin-loaded skills work functionally but invisible in UIs, causing confusion. | 3 comments — **Open** |
| [#4905](https://github.com/github/copilot-cli/issues/4905) | **Desktop sessions die after minutes: "GitHub credential registration no longer available"** | Session instability tied to `github-mcp-server` catalog staleness; blocks long-running work. | 2 👍, 3 comments — **Open** |
| [#2892](https://github.com/github/copilot-cli/issues/2892) | **MCP stdio transport closes ~4s after sub-agent spawn** | Sub-agents lose MCP access mid-task; transport lifecycle mismatch. | 3 comments — **Closed** |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **MCP Ecosystem Maturity** — OAuth fixes (Figma, Atlassian), DCR client_name allowlisting, transport stability for sub-agents, and discovery error handling.
2. **Configuration & Workspace Flexibility** — Non-root config loading, symlink-aware `AGENTS.md` discovery respecting git boundaries, trustedFolders merge on concurrent exits.
3. **Skill/Plugin Management** — Subfolder organization, `--plugin-dir` visibility parity, tool-callable `cwd` for dynamic rescans.
4. **Session & State Reliability** — Compaction failures, metadata staleness across sub-sessions, branch-session `updated_at` spam, periodic MCP reconnect noise.
5. **Platform Parity** — Windows `cmd` support, Ctrl+Backspace, Linux PRIMARY selection clipboard, taskbar icon toggle.

---

## Developer Pain Points
- **MCP fragility**: Multiple OAuth/transport bugs (Figma `-32601`, Atlassian redirect_uri, DCR name rejection, stdio early close) make external toolchains unreliable in CLI vs. VS Code.
- **Config/state corruption**: Concurrent sessions overwrite `config.json` (trustedFolders loss); workspace metadata floods sidebar on git checkout; session compaction fails silently.
- **Discovery overreach**: `AGENTS.md` walks resolved symlinks across unrelated repos; skill/plugin loading inconsistent between CLI flags and UI commands.
- **Windows/ Linux gaps**: Forced PowerShell, missing Ctrl+Backspace, no PRIMARY clipboard target — basic shell UX parity still lacking.
- **Enterprise agent visibility**: Org-hosted agents in `.github-private` simply don’t appear, blocking team-level adoption.

---

*Digest generated from github.com/github/copilot-cli data as of 2026-09-19. Links point to live issues.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-19

## 1. Today's Highlights
No new releases in the past 24 hours. The issue tracker shows active maintenance on long-standing HTTP header validation bugs affecting Linux users (issues #1266, #1364, #1368), while a new regression in v2.0.0 breaks intermittent image paste on macOS (#2652). A fresh compatibility issue with OpenCode Go surfaced today (#2653), indicating provider integration work remains ongoing.

## 2. Releases
*None in the last 24h.*

## 3. Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1266](https://github.com/MoonshotAI/kimi-cli/issues/1266) | **HTTP header validation error: trailing whitespace in `platform.version()`** | Root cause for Linux connection failures; affects Ubuntu 22.04+ kernels. Fixed in later versions but still impacting users on 1.15.0. | 👍 2, 2 comments, closed 2026-09-19 |
| [#1364](https://github.com/MoonshotAI/kimi-cli/issues/1364) | **Connection error on Ubuntu due to illegal HTTP header value** | Duplicate of #1266; confirms widespread Linux header sanitization issue in v1.17.0. | 1 comment, closed 2026-09-19 |
| [#1368](https://github.com/MoonshotAI/kimi-cli/issues/1368) | **Connection error on Linux when `platform.version()` contains `#` character** | Same class of bug—special chars in kernel version break HTTP headers. | 1 comment, closed 2026-09-19 |
| [#1371](https://github.com/MoonshotAI/kimi-cli/issues/1371) | **LLM provider error: Connection error (IPv6 related)** | Suggests IPv6 stack interaction may compound header issues on Linux. | 1 comment, closed 2026-09-19 |
| [#2653](https://github.com/MoonshotAI/kimi-cli/issues/2653) | **OpenCode Go returns 400: missing `x-opencode-session` header** | New provider integration gap; blocks OpenCode Go users entirely. Filed today. | 0 comments, **OPEN** |
| [#2652](https://github.com/MoonshotAI/kimi-cli/issues/2652) | **macOS 2.0.0: Ctrl+V paste image intermittently silent fails** | Regression from Python (0.43.x) → Go (2.0.0) rewrite; core UX break for macOS users. | Filed 2026-09-18, **OPEN** |
| [#1680](https://github.com/MoonshotAI/kimi-cli/issues/1680) | **VS Code: independent font size for Kimi panel** | High-value UX request; users forced to zoom entire IDE to resize chat. | 👍 2, 2 comments, **OPEN** |
| [#1442](https://github.com/MoonshotAI/kimi-cli/issues/1442) | **Invoicing / billing window missing** | Indicates gaps in commercial/enterprise workflow (China market). | 2 comments, closed 2026-09-19 |
| [#1495](https://github.com/MoonshotAI/kimi-cli/issues/1495) | **Configurable Plan Mode output directory** | Small but frequent request for workspace hygiene. | 0 comments, closed 2026-09-19 |
| [#2148](https://github.com/MoonshotAI/kimi-cli/issues/2148) | *(referenced in PR #2176)* **Hook `UserPromptSubmit` receives empty prompt for `list[ContentPart]`** | Breaks custom hook logic for multimodal inputs; fixed in pending PR. | 0 comments, **OPEN** |

## 4. Key PR Progress
| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176) | `fix(hooks): extract text from ContentPart for UserPromptSubmit hook` | **OPEN** (updated 2026-09-18) | Restores hook functionality for multimodal (`list[ContentPart]`) inputs; unblocks automation relying on `UserPromptSubmit`. |

## 5. Feature Request Trends
1. **IDE Integration Polish** — Independent panel font sizing (#1680), configurable plan output paths (#1495).
2. **Provider Ecosystem** — OpenCode Go support (#2653), robust header handling across platforms (#1266, #1364, #1368).
3. **Multimodal Reliability** — Image paste stability on macOS (#2652), hook support for `ContentPart` (#2148/#2176).
4. **Enterprise/Commercial Tooling** — Invoicing UI (#1442), suggesting growing B2B adoption.

## 6. Developer Pain Points
- **Linux HTTP header sanitization** remains a top crash vector (3+ closed issues same root cause); kernel version strings with whitespace/`#` break requests.
- **Go rewrite regressions**: macOS image paste (#2652) and hook handling (#2148) worked in Python version, now broken in 2.0.0.
- **Provider fragmentation**: Each new backend (OpenCode Go, etc.) requires custom header/session logic—no unified abstraction visible.
- **VS Code UX gaps**: No per-panel font control forces global zoom workarounds; plan file location hardcoded.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` issues/PRs updated 2026-09-18 – 2026-09-19.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-19

## Today's Highlights
The OpenCode community is actively addressing **v2.0 migration gaps** (session import skipping post-migration sessions, WSL detection failures) and **provider reliability issues** (Console provider free-tier restrictions, encrypted_content errors). On the performance front, the desktop team is restructuring startup sequencing to show UI earlier while servers initialize in the background. Several long-standing TUI/clipboard bugs and session data-loss scenarios were closed in the past 24h.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#48973](https://github.com/anomalyco/opencode/issues/48973) | **Console provider: `encrypted_content` not issued to caller** | Blocks Muse Spark 1.3 users on v1.18.30; upstream provider error suggests auth/token scope mismatch. | 8 comments, 8 👍 — **OPEN** |
| [#49588](https://github.com/anomalyco/opencode/issues/49588) | **Desktop free-tier: "can only be used from within OpenCode"** | Default `opencode/big-pickle` model fails in Desktop app v1.18.31; suggests client identification bug. | 7 comments — **CLOSED** |
| [#44080](https://github.com/anomalyco/opencode/issues/44080) | **`/compact` lands empty reasoning-only summaries → irrecoverable context loss** | Silent data destruction when compaction model returns only reasoning parts; no validation before epoch replacement. | 2 comments — **OPEN** |
| [#49641](https://github.com/anomalyco/opencode/issues/49641) | **V1→V2 importer skips sessions created after first V2 launch** | One-shot migration leaves post-migration v1 sessions invisible in v2; affects users who kept v1 running. | 2 comments — **OPEN** |
| [#48640](https://github.com/anomalyco/opencode/issues/48640) | **WSL detection/install fails: `wsl.exe` re-expands `$VAR` in script args** | Desktop 2.0.2 cannot detect/connect to WSL Debian; script argument expansion breaks installation verification. | 2 comments — **OPEN** |
| [#38008](https://github.com/anomalyco/opencode/issues/38008) | **Sessions leaking messages across instances** | Messages mix between concurrent OpenCode instances regardless of provider; suggests shared state bug. | 3 comments, 1 👍 — **CLOSED** |
| [#33364](https://github.com/anomalyco/opencode/issues/33364) | **Child-spawning tool executes after cancellation** | SIGINT delivered but tool spawns child process anyway; violates bounded-run guarantees. | 3 comments — **CLOSED** |
| [#49751](https://github.com/anomalyco/opencode/issues/49751) | **New Console lost 30 days of inference logs** | Migration to new Console UI wiped historical inference logs; only new logs appear. | 1 comment, 1 👍 — **OPEN** |
| [#37988](https://github.com/anomalyco/opencode/issues/37988) | **Cannot leave Plan mode** | `/new` session traps user in read-only Plan mode; `OPENCODE_EXPERIMENTAL_PLAN_MODE=false` ineffective. | 2 comments, 1 👍 — **CLOSED** |
| [#49895](https://github.com/anomalyco/opencode/issues/49895) | **WSL2: image paste fails silently without clipboard tools** | `Ctrl+V` no-ops when `wl-clipboard`/`xclip` missing; no error or install hint. | 0 comments — **OPEN** |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Type | Description |
|---|----|------|-------------|
| [#49882](https://github.com/anomalyco/opencode/pull/49882) | **feat** | **Open agent-referenced files as rich artifact tabs** — screenshots, recordings, CSVs, generated pages now render as interactive tabs instead of dead `file://` links. |
| [#49896](https://github.com/anomalyco/opencode/pull/49896) | **perf** | **Mount shell before servers known** — restructure startup: shell no longer waits for server resolution; first paint decoupled from sidecar/WSL/SSH handshake. |
| [#49890](https://github.com/anomalyco/opencode/pull/49890) | **perf** | **Show previous shell while renderer boots** — reuses last-run shell snapshot during cold start; eliminates blank-window delay. |
| [#49881](https://github.com/anomalyco/opencode/pull/49881) | **feat** | **Support non-UTF-8 file encodings** (GBK, Shift-JIS, Big5) in `edit`/`write`/`apply_patch`; fixes corruption on legacy codebases. Closes #45924. |
| [#48894](https://github.com/anomalyco/opencode/pull/48894) | **fix** | **Exclude hidden files from glob results** — `**/*.ts` no longer returns `.hidden.ts`; aligns with developer expectations. Closes #47421. |
| [#49886](https://github.com/anomalyco/opencode/pull/49886) | **fix** | **CLI: report version mismatch on startup connect failure** — surfaces underlying connection error (e.g., URL accessibility) instead of generic `UnknownError`. |
| [#49875](https://github.com/anomalyco/opencode/pull/49875) | **fix** | **Route `opencode://new-session` to draft under new layout** — fixes deep-link session creation; supersedes #49657. Closes #44160, #35225. |
| [#49850](https://github.com/anomalyco/opencode/pull/49850) | **refactor** | **Separate provider and model settings** — distinct public contracts for provider vs model config; preserves open-ended provider options. |
| [#49876](https://github.com/anomalyco/opencode/pull/49876) | **perf** | **Drop Luxon (68 KB) from renderer** — replaces three date ops with native JS; reduces main chunk size and boot-time locale init. |
| [#49897](https://github.com/anomalyco/opencode/pull/49897) | **docs** | **Add DeepSeek V4.1 Flash to Zen** — model/pricing tables updated across all localized docs. |

---

## Feature Request Trends
1. **Network resilience** — Built-in proxy with auto start/stop (#37993), WSL/SSH detection improvements (#48640), clipboard fallback for WSL (#49895).
2. **Session continuity** — Cross-device sync via GitHub (#38011), robust V1→V2 import (#49641), message timestamp visibility (#49742), active-session delete protection (#37975).
3. **Desktop↔CLI integration** -- `--desktop` flag to launch desktop app from terminal (#38009), `opencode://` URL handling (#49875).
4. **Observability** — Expand reasoning/thinking indicators in real time (#38002), preserve inference logs across Console migrations (#49751).
5. **Plan mode control** — Opt-out persistence (#37988), show-agent toggle persistence (#37966), disable auto-compaction by default (#38018).

---

## Developer Pain Points
- **Provider instability**: Console provider free-tier errors (#49588), `encrypted_content` auth failures (#48973), Nemotron streaming failures (#38024), subscription deactivation bugs (#38025).
- **Session data integrity**: Silent context loss during compaction (#44080), message leakage across instances (#38008), sessions vanishing post-migration (#49641), log history wiped (#49751).
- **TUI/CLI rough edges**: Paste+Enter loses text (#31246), image paste silent failure on WSL (#49895), menu broken in VS Code detached terminal (#35889), TUI crash on `data().resetsStr` (#49679).
- **Desktop app quirks**: WSL detection broken (#48640), updater false positives (#37977), window resize/stuck state (#37969), git sign rendering glitch (#38012).
- **Windows-specific**: npm plugin entry point resolved as raw path not `file://` URL (#38021), non-UTF-8 encoding support missing until #49881.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-19

## Today's Highlights
No new releases shipped in the last 24 hours, but the community surfaced several high-impact bugs: new Claude models break Pi's edit tool (~20% failure rate), Mac users report sustained 100%+ CPU usage on long sessions, and parallel startup can misreport missing API keys for ~48s when expired OAuth credentials exist. Multiple provider catalogs (zai-coding-cn, opencode-go) are out of sync with upstream model lineups.

---

## Releases
*No new versions published in the last 24h.*

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#6278](https://github.com/earendil-works/pi/issues/6278) | **Claude edit tool failing ~20%** — LLMs invent extra keys (`new_text_x`, `type`, `in_file`, `closeenough`) causing validation errors | **25 comments, 10 👍** — Core editing workflow broken for latest Claude models |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **High CPU on Mac (100%+)** — Correlates with session/context length; memory 600–800 MB | **16 comments, 10 👍** — Mac developers blocked on long-running sessions |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | **Parallel startup false "No API key" for ~48s** — Expired OAuth cred for another provider confuses active provider | **11 comments** — Deterministic repro; wastes hours debugging in multi-process setups |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **npm search not indexing new pi-packages** — Gallery stuck since Aug 4; `pi-affix-prompt` invisible | **9 comments** — Package discovery broken; gallery mirrors broken npm search |
| [#9652](https://github.com/earendil-works/pi/issues/9652) | **Compaction refused by Claude Fable** — Transcribed thinking blocks trigger `reasoning_extraction` classifier block | **6 comments, 2 👍** — `/compact` fails on `claude-fable-5`; blocks long-session workflows |
| [#9616](https://github.com/earendil-works/pi/issues/9616) | **zai-coding-cn catalog lists 8 dead models** — GLM Coding Plan now serves only GLM-5.3/Flash; requests silently rerouted | **6 comments** — Users unknowingly hit deprecated endpoints |
| [#9725](https://github.com/earendil-works/pi/issues/9725) | **openrouter baseUrl override regression (0.85.1)** — Commit 4e69b0c breaks documented simple override method | **6 comments** — Config override now applies indiscriminately to all models |
| [#8827](https://github.com/earendil-works/pi/issues/8827) | **TUI LaTeX: legacy font switches (`\rm`, `\bf`, `\it`) force raw fallback** | **6 comments** — Math rendering broken for common legacy TeX commands |
| [#7987](https://github.com/earendil-works/pi/issues/7987) | **Package absent from gallery after republish** — Valid `pi-package` metadata, install works, but gallery missing | **5 comments, 2 👍** — Gallery sync unreliable despite correct npm publish |
| [#9737](https://github.com/earendil-works/pi/issues/9737) | **opencode-go catalog missing `deepseek-v4.1-flash`** — Model published upstream but absent in 0.85.1 | **5 comments** — Built-in catalog drift from provider updates |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#9096](https://github.com/earendil-works/pi/pull/9096) | **Meta provider with Muse subscription OAuth** — New provider; daily token re-minting, burst streaming | Open |
| [#8158](https://github.com/earendil-works/pi/pull/8158) | **Upgrade Mermaid terminal rendering** — Closes #8157, #7832 | Open |
| [#9483](https://github.com/earendil-works/pi/pull/9483) | **Fix tool cwd resolution** — Opt-in `customCwd` with `ctx.cwd` fallback; restores backwards compat | Closed |
| [#9763](https://github.com/earendil-works/pi/pull/9763) | **pi.dev compatibility check** — Dispatch approved PR commits to internal workflow; stable commit status | Open |
| [#9762](https://github.com/earendil-works/pi/pull/9762) | **Guard TUI against tool results without `content` array** — Fixes #9761 uncaught TypeError on non-conforming results | Closed |
| [#9434](https://github.com/earendil-works/pi/pull/9434) | **Extensions can append to session system prompt** — `systemPromptAppend` from `session_start` handlers | Open |
| [#9754](https://github.com/earendil-works/pi/pull/9754) | **Treat same-repo worktrees as one project** — Resolves #9753; symlink-resolved session-dir comparison | Closed |
| [#9488](https://github.com/earendil-works/pi/pull/9488) | **Canonical Codex turn attribution** — Provider-neutral `requestIdentity` for session/thread/turn/window metadata | Open |
| [#9749](https://github.com/earendil-works/pi/pull/9749) | **SDK: customize interactive resume command** — `formatResumeCommand` callback for embeddings (e.g., `npm start`) | Closed |
| [#9746](https://github.com/earendil-works/pi/pull/9746) | **Handle CJK punctuation in file autocomplete** — Treat CJK punctuation as boundary for path completion | Open |

---

## Feature Request Trends
1. **Provider catalog freshness** — Multiple issues (#9616, #9737, #7989) demand automated sync of built-in model catalogs with upstream provider lineups.
2. **Session/compaction reliability** — Compaction failures (#9652, #9740), threshold compaction silent no-ops, and `--print` exit-code ambiguity (#9718) indicate a need for robust long-session guarantees.
3. **Extension API depth** — Requests for context-file invalidation (#9760), system-prompt appends (#9434), and tool-result normalization (#9762) show extensions hitting platform limits.
4. **TUI performance at scale** — Large transcript re-renders (#9549), Ctrl+O freeze (#9767), and fuzzy-search scan cost (#9267) point to O(n) bottlenecks in rendering/search.
5. **Cross-platform shell/process hygiene** — Windows orphaned processes on timeout (#9129), macOS Terminal env leak (#9766), and hardware-cursor option (#9748) reflect platform-specific UX gaps.

---

## Developer Pain Points
- **Edit tool brittleness** — LLM hallucinated schema keys break the primary code-modification loop; no defensive parsing/fallback.
- **Mac CPU saturation** — No observability into what drives 100%+ CPU; suspected transcript/context growth without incremental rendering.
- **Auth/startup flakiness** — Expired creds for *unused* providers block parallel startup for ~48s with misleading error messages.
- **Gallery/package discovery broken** — npm search index lag makes new packages invisible for weeks; no manual refresh or fallback.
- **Silent failures** — Compaction no-ops (#9740), dropped prompt templates (#9354), and `--print` empty success (#9718) leave users unaware of degraded operation.
- **Catalog drift** — Built-in provider catalogs (zai, opencode-go, openrouter) lag upstream model changes by weeks, causing 400s or silent reroutes.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-19

---

## 1. Today's Highlights

- **Two releases shipped** (v0.24.1-preview.0 and nightly v0.24.0) focusing on CI hardening and ACP boundary acceptance documentation.  
- **Critical macOS packaging bug** (#11872) blocks web-terminal PTY due to missing `@lydell/node-pty` bundle and code-signing restrictions.  
- **LSP non-ASCII regression fixed** (#12210): frame parsing now uses byte length instead of UTF-16 code units, restoring CJK symbol support.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.24.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.1-preview.0) | Preview | • Docs: record merged ACP boundary acceptance (#12024)<br>• CI: wait for published export renderer before pack |
| [v0.24.0-nightly.20260918](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.0-nightly.20260918.537311b8a5) | Nightly | Same changes as preview; early validation build |

---

## 3. Hot Issues (Top 10 by Impact)

| Issue | Priority | Category | Why It Matters | Community Signal |
|-------|----------|----------|----------------|------------------|
| [#11872](https://github.com/QwenLM/qwen-code/issues/11872) Web Terminal PTY missing on macOS | P1 | Platform / Packaging | Blocks `qwen serve` / Desktop web-shell on macOS; `@lydell/node-pty` declared but not bundled, code-signing blocks local prebuilds | 10 comments, active investigation |
| [#12224](https://github.com/QwenLM/qwen-code/issues/12224) `/cd` fails after v0.24.0 | P1 | CLI / Commands | Regression: “response or tool call in progress” error even with no active sessions; breaks basic navigation | 5 comments, recent regression |
| [#12206](https://github.com/QwenLM/qwen-code/issues/12206) LSP drops non-ASCII responses | P1 | Core | **Fixed by #12210** — Content-Length (bytes) vs UTF-16 length mismatch silently discarded CJK responses | 4 comments, closed with fix |
| [#12216](https://github.com/QwenLM/qwen-code/issues/12216) MCP spawns duplicate LSP servers | P2 | Core / MCP | Each ACP child gets two LSP sets when `--experimental-lsp` enabled; wastes resources, causes conflicts | 3 comments, architectural bug |
| [#12230](https://github.com/QwenLM/qwen-code/issues/12230) Web-shell live-journal repair drops prompt settlement | P2 | Web-shell / Daemon | Successful repair permanently loses settlement for prompts client never admitted; asymmetry in publish gates | 2 comments, known pre-existing |
| [#12223](https://github.com/QwenLM/qwen-code/issues/12223) Project-local permission override | P3 | Security / Settings | **Closed** — requested scope-specific precedence (project > user) instead of flat `deny > ask > allow` | 4 comments, design discussion |
| [#12226](https://github.com/QwenLM/qwen-code/issues/12226) Filesystem-scoped permission authority | P3 | Security / Settings | Proposes per-repo `.qwen` configs governing only their directory tree; central rule management | 3 comments, early design |
| [#12067](https://github.com/QwenLM/qwen-code/pull/12067) bwrap execution foundation (PR) | — | Core / Sandbox | **Feature PR** — adds Linux sandbox foundation (bwrap adapter, process supervision, confined workers) for tool-level isolation | 0 comments, foundational work |
| [#11954](https://github.com/QwenLM/qwen-code/issues/11954) Fleet Shepherd Dashboard | — | Infra | Bot-maintained fleet health dashboard; shows PR states, syncs, releases | 0 comments, operational visibility |
| [#12225](https://github.com/QwenLM/qwen-code/pull/12225) Stage node-pty prebuild into Desktop runtime (PR) | — | Desktop / Packaging | **Direct fix for #11872** — bundles `@lydell/node-pty` + prebuild into Desktop `lib/node_modules` with smoke test | 0 comments, unblocks macOS |

---

## 4. Key PR Progress (Top 10 by Significance)

| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#12210](https://github.com/QwenLM/qwen-code/pull/12210) | **Closed** | Core / LSP | Parse LSP frames by **byte length** — fixes non-ASCII (CJK) response loss (#12206) |
| [#12225](https://github.com/QwenLM/qwen-code/pull/12225) | Open | Desktop / Packaging | Bundle `@lydell/node-pty` prebuild into Desktop runtime; adds PTY spawn smoke test — **unblocks #11872** |
| [#12085](https://github.com/QwenLM/qwen-code/pull/12085) | Open | Web-shell | Restore **remote workspace add flow** (Codex-style): Settings → Connections manages verified daemon origins |
| [#12198](https://github.com/QwenLM/qwen-code/pull/12198) | Open | CLI / Security | Require **explicit trust** for undecided workspaces; untrusted = project settings/env/hooks disabled |
| [#11251](https://github.com/QwenLM/qwen-code/pull/11251) | Open | Web-shell / Daemon | Expose **assistant turn settlement lifecycle** via host callback (session/prompt ID, outcome, stop reason, final message) |
| [#12228](https://github.com/QwenLM/qwen-code/pull/12228) | Open | CLI / Editor | Vim mode: operators (`d`, `c`, `y`) now compose with find (`t`, `f`, `T`, `F`) and line motions (`$`, `0`, `^`); dot-repeat works |
| [#12229](https://github.com/QwenLM/qwen-code/pull/12229) | Open | Browser-use | **Concurrent sessions sharing Chrome profile** — each gets own tabs/tab group; ownership conflict detection |
| [#12119](https://github.com/QwenLM/qwen-code/pull/12119) | Open | CLI / Context | `/context` breakdown rows now **partition request by content and sum to provider total**; skills row includes exact `<available_skills>` |
| [#12067](https://github.com/QwenLM/qwen-code/pull/12067) | Open | Core / Sandbox | **bwrap execution foundation** — structured launches, trusted completion evidence, process supervision, confined binary worker |
| [#10943](https://github.com/QwenLM/qwen-code/pull/10943) | Open | CLI / Agent | `qwen --bg "<prompt>"` starts **background Agent View session** — outlives shell, listed via `qwen sessions` |

---

## 5. Feature Request Trends

1. **Granular permission model** — Multiple issues/PRs (#12223, #12226, #12198) push for **scope-aware precedence** (project > user > global) and filesystem-scoped rules with central management.
2. **Remote / multi-session workflows** — #12085 (remote workspace add), #12229 (concurrent Chrome sessions), #10943 (background agents) signal demand for **distributed, long-running agent orchestration**.
3. **Editor parity & power-user UX** — #12228 (vim motions), #12119 (accurate context accounting), #11251 (settlement lifecycle) show focus on **CLI/Web-shell feature parity and transparency**.
4. **Sandboxing & isolation** — #12067 (bwrap foundation) and MCP/LSP duplicate-server fix (#12216) indicate **tool-level sandboxing and resource isolation** as strategic direction.

---

## 6. Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **macOS Desktop/web-shell broken** | High | #11872 (P1, 10 comments) — PTY unavailable due to missing bundle + code-signing |
| **Regression in basic CLI commands** | High | #12224 (P1, 5 comments) — `/cd` fails post-v0.24.0 with spurious “in progress” error |
| **LSP silent failures with non-ASCII** | Medium | #12206 (P1, fixed) — CJK responses dropped due to byte/UTF-16 mismatch |
| **Permission system rigidity** | Medium | #12223, #12226, #12198 — flat precedence forces over-permissioning or workarounds |
| **MCP/LSP resource duplication** | Medium | #12216 — double LSP servers per ACP process when `--experimental-lsp` enabled |
| **Web-shell session state asymmetry** | Low | #12230 — live-journal repair drops settlements client never acknowledged |

---

*Digest generated from GitHub data (releases, issues, PRs updated 2026-09-18 → 2026-09-19).*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-19

## 1. Today's Highlights
The project is actively transitioning to a **provider-neutral architecture** (renaming `DeepSeekClient` → `CodewhaleClient`, removing DeepSeek-specific config keys), while simultaneously hardening **ACP (Agent Client Protocol) integration** for headless editor usage. A cluster of bugs around sub-agent session management, token accounting, and MCP connection supervision were closed today, and CI stability on Windows was restored via stack-size increases and path canonicalization fixes.

---

## 2. Releases
**No new releases in the last 24 hours.** Current stable remains `v0.9.13` (build `a0b81f6`).

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#6310](https://github.com/Hmbown/Codewhale/issues/6310) | `serve --acp` ignores `config.toml` sandbox_mode/ask — ACP sessions stuck in Work posture | Blocks unattended ACP usage in editors (Paseo, Zed, VS Code); sandbox policy not respected | 4 comments, active debugging |
| [#6187](https://github.com/Hmbown/Codewhale/issues/6187) | MCP: no connection supervision — dead servers stay 'ready' until call fails | No auto-reconnect or `list_changed` notifications; stale connections silently break tool calls | 5 comments, closed with fix |
| [#6337](https://github.com/Hmbown/Codewhale/issues/6337) | v0.9.14: ACP adapter ignores `--yolo`/approval policy — unattended sessions stall | Headless ACP clients never answer permission prompts; `--yolo --danger-full-access` not honored | 1 comment, closed with fix |
| [#6309](https://github.com/Hmbown/Codewhale/issues/6309) | I want YOLO mode back | Users frustrated by per-action approval clicks; deepseek V4 flash scores high on TerminalBench | 3 comments, community demand |
| [#5479](https://github.com/Hmbown/Codewhale/issues/5479) | Fleet/agents: first-class sub-agent management in TUI (live list, status, tokens, focus, stop, history) | Core C01 milestone; enables multi-agent orchestration visibility in TUI | 3 comments, ongoing |
| [#6011](https://github.com/Hmbown/Codewhale/issues/6011) | Usage & tool diagnostics — token accounting (per-component, per-model, cache hit rate, compaction cost) | Core C11; observability for cost/performance tuning | 9 comments, design phase |
| [#6315](https://github.com/Hmbown/Codewhale/issues/6315) | Sub-agents section in `codewhale metrics` shows "(no data)" — child usage never persisted | 593 agent tool calls across 33 days unaccounted; two independent data pipeline holes | 2 comments, closed with fix |
| [#6313](https://github.com/Hmbown/Codewhale/issues/6313) | Settled child agent keeps session name reserved — retry fails "already in use" | Name collision blocks agent retries; `Cancelled`/`Completed`/`Failed` records not released | 2 comments, closed with fix |
| [#6312](https://github.com/Hmbown/Codewhale/issues/6312) | `[workflow] max_parallel_writes_without_worktree` documented but no code reads it | Config option parsed, defaulted, reported in `/config`, but completely unimplemented | 2 comments, closed with fix |
| [#5587](https://github.com/Hmbown/Codewhale/issues/5587) | Dead-code sweep phases 2-4: 75 test-only markers, ~242 stale allows, blanket-allow conversions | Ongoing codebase hygiene; 379 `allow(dead_code)` sites audited in `crates/tui/src` | 9 comments, phased work |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#6361](https://github.com/Hmbown/Codewhale/pull/6361) | **Feature** | Terminal byte stream (authenticated I/O, resize, exit, bounded replay), stream resume + idempotent submit, pet agent-count pin — unblocks Core tracker items #34, #76, #12 |
| [#6353](https://github.com/Hmbown/Codewhale/pull/6353) | **Feature** | Adds CSDN 星图 (StarMap) as first-class provider with Coding Plan billing (`glm_for_coding` default, OpenAI-compatible endpoint) |
| [#6350](https://github.com/Hmbown/Codewhale/pull/6350) | **Refactor** | Retires DeepSeek fossils: `DeepSeekClient`→`CodewhaleClient`, `deepseek_base_url`→`active_route_base_url`, provider-neutral machinery cleanup |
| [#6352](https://github.com/Hmbown/Codewhale/pull/6352) | **Feature** | Web: resolve GPUI mirror from generated Shoreline tokens (eliminates hand-maintained `--gpui-*` CSS drift) |
| [#6351](https://github.com/Hmbown/Codewhale/pull/6351) | **Feature** | Web: export Shoreline palettes to site tokens (enables TUI/GPUI theme parity on web) |
| [#6347](https://github.com/Hmbown/Codewhale/pull/6347) | **Fix** | Double `codewhale-main` stack to 32 MiB for debug poll chains — fixes Ubuntu test hangs in plugin MCP acceptance test |
| [#6348](https://github.com/Hmbown/Codewhale/pull/6348) | **Fix** | Windows test fix: compare test_runner scoped dir against canonical form (handles `\\?\` verbatim prefix) |
| [#6354](https://github.com/Hmbown/Codewhale/pull/6354) | **CI Fix** | Unred main's Lint; stop MCP stdio marker read race (advisory-on-PR, fatal-on-push `check-blocking-calls-budget`) |
| [#6349](https://github.com/Hmbown/Codewhale/pull/6349) | **Chore** | Group windows crate bumps; apply docker action SHA pins (setup-qemu v4.4, setup-buildx v4.4, build-push v7.4) |
| [#5752](https://github.com/Hmbown/Codewhale/pull/5752) | **Feature** | Cloud facts channel (slice 1): signed, versioned, cached facts (model catalog, provider defaults, release truth) behind flag |

---

## 5. Feature Request Trends
1. **Provider-neutral multi-LLM support** — First-class CSDN 星图, OpenAI-compatible abstraction, removal of DeepSeek-specific code paths
2. **ACP/IDE integration maturity** — Full thread/turn runtime in ACP, sandbox policy respect, YOLO mode for headless, MCP connection supervision
3. **Fleet/sub-agent orchestration** — Live TUI dashboard (status, tokens, focus, stop, history), per-agent metrics persistence, name lifecycle management
4. **Observability & cost control** — Per-component/model token accounting, cache hit rates, compaction costs, tool-call error patterns, goal gates with verification
5. **Workflow safety defaults** — Adaptive anti-stall, wider read-only shell grammar (defaults, not per-user config), parallel-write isolation

---

## 6. Developer Pain Points
| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **ACP headless sessions stall on permission prompts** despite `--yolo` | High | #6337, #6309, #6310 — multiple issues/PRs in 24h |
| **MCP servers silently die** — no supervision, no auto-reconnect | Medium | #6187 (closed), user reports of "connected" stale state |
| **Sub-agent metrics invisible** — `codewhale metrics` shows "(no data)" for 593 calls | Medium | #6315, #6313 (name reservation), #6312 (unimplemented config) |
| **Windows path verbatim prefix (`\\?\`)** breaks test assertions | Recurring | #6346, #6348 — canonicalization mismatch |
| **Debug stack overflow** in plugin/MCP acceptance tests on Ubuntu | Recurring | #6347 — 32 MiB stack fix needed |
| **Config options documented but unimplemented** (e.g., `max_parallel_writes_without_worktree`) | Medium | #6312 — parsed, defaulted, reported, but unread |
| **Stale documentation** — `SUBAGENTS.md` references retired `token_budget` in 6 places | Low | #6316 — drift from `a7a8bdb33` retirement |

---

*Digest generated from GitHub data (issues/PRs updated 2026-09-18 to 2026-09-19). Links point to Hmbown/Codewhale repository.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*