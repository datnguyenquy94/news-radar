# AI CLI Tools Community Digest 2026-08-03

> Generated: 2026-08-03 03:39 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Ecosystem — 2026-08-03

---

## 1. Ecosystem Overview

The AI CLI landscape is in a **high-velocity stabilization phase** across all major tools. Every project shows intense issue/PR activity (47–77+ items updated in 24h for OpenCode/DeepSeek TUI), but **zero stable releases** shipped today—only nightlies (Gemini, Qwen) and release trains (DeepSeek). Core pain points are converging: **session/state reliability**, **token/cost observability**, **cross-platform consistency**, and **agent orchestration safety**. The ecosystem is bifurcating into **enterprise-grade platforms** (Claude Code, Codex, Copilot CLI, OpenCode) investing in governance, auditability, and offline/air-gap modes, and **experimental/agent-first tools** (DeepSeek TUI, Kimi, Pi, Qwen) pushing subagent workflows, persistent memory, and multi-device continuity.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Top Issue Engagement |
|------|---------------------|-------------------|----------------|----------------------|
| **Claude Code** | 49 | 4 (all docs/plugin) | None | 96 comments (DNS viz outage) |
| **OpenAI Codex** | ~15 hot | 5 (3 merged) | None | 115 👍 (macOS diff crash) |
| **Gemini CLI** | 10 hot | 10 (nightly + deps) | **Nightly v0.55.0** (75 deps) | 12 comments (subagent success mask) |
| **GitHub Copilot CLI** | 11 | 0 | None | 3 comments (file-path regression) |
| **Kimi Code CLI** | 4 | 1 (closed) | None | 24 👍 (Remote Control) |
| **OpenCode** | **47** | **50** | None | 14 comments (Debian crash, plugin agents) |
| **Pi** | 10 hot | 10 | None | 10 👍 (auto-compaction failure) |
| **Qwen Code** | 10 hot | 10 | **Nightly v0.21.3** | 5 comments (Ctrl+C prompt loss) |
| **DeepSeek TUI** | **15 new P0 bugs** | 10 (release train) | **v0.9.4 train** (77 commits) | 12 comments (sidebar sessions) |
| **Grok Build** | 0 | 0 | None | — |

**Key signal:** OpenCode and DeepSeek TUI show the highest raw velocity; Codex has the strongest community signal (👍 counts); Gemini and Qwen are the only ones shipping nightlies.

---

## 3. Shared Feature Directions

| Requirement | Tools Demanding It | Specific Needs |
|-------------|-------------------|----------------|
| **Session/State Persistence & Portability** | Claude Code, Codex, Gemini, Kimi, Qwen, DeepSeek TUI, Pi | Cross-device resume (Kimi #1282), session survival across restarts (Qwen #8400), in-memory/server-backed sessions (Pi #7503), sidebar session browser (DeepSeek #2934), global instruction persistence (Claude #40175) |
| **Token/Credit Observability & Control** | Codex, Claude Code, Pi, Qwen, OpenCode | In-app quota display (Codex #32195), per-turn accounting, compaction efficiency (Codex #36665), Fable 5 credit bugs (Claude #83242), auto-compaction reliability (Pi #6879), compression cache sharing (Qwen #8418) |
| **Agent Orchestration Safety & Governance** | Claude Code, Codex, Gemini, OpenCode, DeepSeek TUI, Qwen | Batch diff review (Claude #31888), interrupt hooks (Claude #9516), Plan & Review gating (Qwen #8389), exec-policy enforcement (DeepSeek #5161), MCP tool-filter gaps (DeepSeek #5157), per-MCP trust (OpenCode #40125) |
| **Cross-Platform/Terminal Consistency** | Claude Code, Codex, Gemini, Copilot CLI, Pi, Qwen | Windows CRLF (Claude #2805), macOS diff crash (Codex #35058), Wayland browser agent (Gemini #21983), WSL2 keybinding leaks (Copilot #4328), WezTerm IME/cursor (Pi #7490, #7486), ConEmu flicker (Qwen #8385) |
| **Provider/Agnostic Model Routing** | OpenCode, Qwen, Pi, DeepSeek TUI, Kimi | `chat.model` hook per-request (OpenCode #40188), OpenAI-compat cache sharing (Qwen #8418), DeepInfra/LLM Gateway providers (Pi #7501, #7480), CommandCode provider request (OpenCode #26338), multi-operator fleets (DeepSeek #5039) |
| **Air-Gap / Offline / Enterprise Readiness** | OpenCode, Claude Code, Codex, Copilot CLI | `OPENCODE_AIRGAP` flag (OpenCode #39994), OAuth reliability (Claude #77966), service tier config (Codex #2916), Unified Desktop migration fixes (Codex #36663) |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Agent-First/Experimental Tools |
|-----------|---------------------------|--------------------------------|
| **Primary Focus** | Reliability, governance, auditability, enterprise adoption | Subagent workflows, memory systems, multi-device continuity, novel UX |
| **Target Users** | Professional/enterprise dev teams, CI/automation | Power users, researchers, agent-native workflows |
| **Technical Approach** | Plugin/hook extensibility (Claude, Codex, OpenCode), ACP integration (Copilot), air-gap flags | Persistent TUI state (DeepSeek, Pi, Kimi), fork/resume chains (DeepSeek, Qwen), external wake channels (Kimi) |
| **Release Cadence** | Stable releases rare; nightly/internal dogfooding | Nightlies (Gemini, Qwen), release trains (DeepSeek) |
| **Architecture** | Client-server (Claude, Codex), daemon+transports (Qwen), desktop+CLI | Single-binary TUI with embedded agent runtime (DeepSeek, Pi, Kimi) |
| **Differentiator** | **Claude Code:** Visualization/MCP ecosystem, Fable model integration<br>**Codex:** OpenAI API integration, Pro tier economics<br>**Copilot CLI:** GitHub/ACP ecosystem, editor integration<br>**OpenCode:** Plugin hooks, air-gap, per-request model routing | **DeepSeek TUI:** Whaleflow overlay/janitor, fleet ops, security-first exec-policy<br>**Pi:** In-memory sessions, provider-agnostic gateway, IME/terminal polish<br>**Kimi:** Remote control + memory + wake channel triad<br>**Gemini:** Auto Memory, AST-aware tooling R&D, massive dep velocity<br>**Qwen:** Plan & Review DAG, daemon workspace ownership, cross-provider cache sharing |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum & Maturity** | **OpenCode**, **DeepSeek TUI** | 47 issues + 50 PRs/24h (OpenCode); 15 P0 bugs + 77-commit release train (DeepSeek); both resolving deep architectural issues (persistence rewrite, security boundaries, state migration) |
| **High Community Signal** | **OpenAI Codex**, **Claude Code** | 115 👍 on macOS diff bug (Codex); 96 comments on DNS outage (Claude); longest-standing issues (13+ months for CRLF) indicate large installed base |
| **Rapid Iteration (Nightly Cadence)** | **Gemini CLI**, **Qwen Code** | Weekly nightlies with 75+ dep bumps (Gemini); TUI shortcuts + history pagination + daemon ownership (Qwen) |
| **Early-Stage / Niche Focus** | **Kimi Code**, **Pi**, **GitHub Copilot CLI** | Kimi: 4 issues but 24 👍 on Remote Control; Pi: strong terminal/i18n focus, experimental sessions; Copilot CLI: regression-heavy 1.0.72+ line, low PR velocity |
| **No Observable Activity** | **Grok Build** | Zero updates in 24h |

---

## 6. Trend Signals for Technical Decision-Makers

1. **Session/Context Infrastructure is the New Battleground**  
   Every tool is rebuilding session persistence, compaction, and fork/resume logic. **Invest in tools with daemon architectures (Qwen, OpenCode) or explicit session contracts (Pi, DeepSeek)** if you need auditability and recovery.

2. **Token Economics Transparency is Non-Negotiable**  
   Codex Pro users hitting weekly caps in hours (Codex #36144), Claude Fable 5 billing bugs (Claude #83242), Pi compaction wasting tokens (Pi #6879). **Demand in-app quota meters, per-turn accounting, and configurable service tiers** before committing to a platform.

3. **Security Boundaries Are Leaking in Agent Orchestration**  
   DeepSeek TUI filed 3 security bypasses in one day (exec-policy, MCP ToolFilter, logout keyring). Codex agents ignore scope (Codex #36667). **Verify tool-call authorization at invocation time, not just list time**—most tools still fail here.

4. **Cross-Provider Portability is Accelerating**  
   OpenCode’s `chat.model` hook, Qwen’s OpenAI-compat cache sharing, Pi’s LLM Gateway/DeepInfra providers, DeepSeek’s multi-operator fleets. **Lock-in is decreasing; design for model-agnostic workflows.**

5. **Air-Gap/Offline Mode is Becoming a Compliance Checklist Item**  
   OpenCode’s `OPENCODE_AIRGAP`, Codex’s service tier config, Copilot’s Unified Desktop migration. **If you operate in regulated environments, prioritize tools with explicit offline flags and no telemetry phoning home.**

6. **Terminal/Platform Quirks Remain a Hidden Tax**  
   macOS diff crash (Codex), Windows CRLF (Claude), Wayland browser (Gemini), WSL2 keybindings (Copilot), WezTerm IME (Pi), ConEmu flicker (Qwen). **Test your target terminals/OSes before standardizing**—no tool is fully platform-agnostic yet.

7. **Plugin/Hook Ecosystems Are the Differentiator for Enterprise**  
   Claude’s MCP, OpenCode’s per-request model hook + per-MCP trust, Codex’s service tier, Copilot’s ACP. **Tools with granular, request-scoped extensibility will win team adoption.**

---

**Bottom Line:** For **production team adoption today**, **OpenCode** (architectural velocity + enterprise features) and **Claude Code** (ecosystem depth) lead. For **agent-native experimentation**, **DeepSeek TUI** (security-first orchestration) and **Qwen Code** (daemon governance + Plan & Review) are the sharpest. **Monitor Gemini CLI** for AST-aware tooling breakthroughs and **Pi** for session portability primitives.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-03 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **skill-creator evaluation pipeline fixes** ([#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) | Core tooling that optimizes skill descriptions via automated eval (`run_eval.py` → `run_loop.py`). | **Critical-path breakage**: `run_eval.py` reports 0% recall on all queries ([#556](https://github.com/anthropics/skills/issues/556) 12💬/7👍, [#1169](https://github.com/anthropics/skills/issues/1169) 3💬). Windows subprocess/encoding bugs block contributors ([#1061](https://github.com/anthropics/skills/issues/1061) 3💬/2👍). Multiple PRs attack trigger detection, artifact installation, and pipe reading. | 🔴 Open (cluster) |
| 2 | **self-audit** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Mechanical file-existence verification + 4-dimension reasoning audit (correctness, completeness, safety, clarity) before delivery. Universal, stack-agnostic. | Novel "damage-severity priority" audit model; positions as a pre-delivery quality gate. Referenced in proposal [#1385](https://github.com/anthropics/skills/issues/1385) (4💬). | 🔴 Open |
| 3 | **color-expert** ([#1302](https://github.com/anthropics/skills/pull/1302)) | Comprehensive color-science skill: naming systems (ISCC-NBS, Munsell, XKCD, RAL…), color-space selection guide (OKLCH, OKLAB, CAM16…), accessibility contrast, gamut mapping. | Fills a persistent gap in design/visual tasks; self-contained, no external deps. Updated 2026-07-21. | 🔴 Open |
| 4 | **plan-file-hygiene** ([#1479](https://github.com/anthropics/skills/pull/1479)) | Lifecycle management for planning artifacts (creation, expiration, archival, cleanup). Addresses [#1417](https://github.com/anthropics/skills/issues/1417) — unbounded accumulation of plan files. | Community-identified pain point; credit to @halilxibrahim & @xg-gh-25 for framing. Very recent (2026-07-25). | 🔴 Open |
| 5 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Full testing-stack coverage: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing, CI integration. | Broad utility across codebases; 30+ sub-topics. Updated 2026-04-21. | 🔴 Open |
| 6 | **pyxel** ([#525](https://github.com/anthropics/skills/pull/525)) | Retro/pixel-art/8-bit game development via Pyxel MCP server (write → run_and_capture → inspect → iterate loop). | Niche but high-engagement domain; ties to MCP ecosystem. Updated 2026-07-15. | 🔴 Open |
| 7 | **ODT (OpenDocument)** ([#486](https://github.com/anthropics/skills/pull/486)) | Create, fill, read, convert `.odt`/`.ods`; template filling, parse to HTML. ISO-standard document workflow. | Complements existing `docx`/`pdf` skills; enterprise-relevant. Updated 2026-04-14. | 🔴 Open |
| 8 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Prevents orphans/widows, numbering misalignment, widow headers in AI-generated documents. | "Affects every document Claude generates"; low-effort high-impact polish. Updated 2026-03-13. | 🔴 Open |

> **Note**: PR comment counts are not exposed in the dataset; ranking weights recent update cadence, issue cross-references, and cluster size.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issue / 💬 / 👍) | What Contributors Want |
|-------|---------------------------|------------------------|
| **Trust & namespace security** | [#492](https://github.com/anthropics/skills/issues/492) 43💬/2👍 | Community skills published under `anthropic/` namespace impersonate official skills; need verified publisher model or namespace separation. |
| **Org-wide skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) 16💬/8👍 | One-click install from shared org library; eliminate manual `.skill` file exchange via Slack/Teams. |
| **skill-creator reliability** | [#556](https://github.com/anthropics/skills/issues/556) 12💬/7👍, [#1169](https://github.com/anthropics/skills/issues/1169) 3💬, [#1061](https://github.com/anthropics/skills/issues/1061) 3💬/2👍 | `run_eval.py` broken on all platforms (0% recall); Windows subprocess/encoding/pipe issues block contributors. |
| **Duplicate skill pollution** | [#189](https://github.com/anthropics/skills/issues/189) 6💬/9👍 | `document-skills` & `example-skills` bundles install identical skills → context-window bloat. |
| **MCP / protocol integration** | [#16](https://github.com/anthropics/skills/issues/16) 4💬, [#29](https://github.com/anthropics/skills/issues/29) 4💬 | Expose skills as MCP servers; Bedrock/AWS deployment support. |
| **Context-window economics** | [#1487](https://github.com/anthropics/skills/issues/1487) 4💬 | `claude-api` skill injects ~156k tokens in one call; need lazy/streaming loading. |
| **Reasoning quality gates** | [#1385](https://github.com/anthropics/skills/issues/1385) 4💬, [#1329](https://github.com/anthropics/skills/issues/1329) 9💬 | Multi-gate pipelines (calibration → adversarial review → verification); compact symbolic memory notation. |
| **Agent governance/safety** | [#412](https://github.com/anthropics/skills/issues/412) 6💬 (closed) | Policy enforcement, threat detection, trust scoring, audit trails for multi-agent systems. |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Addresses top community ask (quality gates); universal applicability; recent v1.3.0 update. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Self-contained, no deps, fills design-system gap; active maintainer (updated 2026-07-21). |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Directly solves voiced pain point (#1417); community-coauthored; days old. |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | MCP-native, unique domain (retro games), active upstream (kitao/pyxel-mcp). |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Broad horizontal utility; comprehensive scope; maintainer responsive. |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | Enterprise document standard; complements merged `docx`/`pdf` skills. |
| [#1261](https://github.com/anthropics/skills/pull/1261) | **skill-creator isolation fix** | Unblocks eval parallelism (

---

# Claude Code Community Digest — 2026-08-03

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The issue tracker remains highly active with **49 issues updated**, led by a critical DNS failure breaking the `claude.ai visualize` feature (96 comments) and a long-standing Windows line-ending bug on Linux (44 comments). Three new Fable 5–related bugs surfaced today, highlighting model-specific regressions in credit accounting, auto-mode permissions, and premature code execution before approval.

---

## 2. Releases

*No releases published in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#34820](https://github.com/anthropics/claude-code/issues/34820) | **`claude.ai visualize` broken — `claudemcpcontent.com` DNS resolution fails** | Core visualization feature completely unavailable; blocks workflows relying on MCP content rendering. | 96 comments, 39 👍 — highest engagement in tracker; users report total outage. |
| [#2805](https://github.com/anthropics/claude-code/issues/2805) | **Claude Code writes CRLF on Linux despite `CLAUDE.md` instructions** | Breaks script execution (`No such file or directory`); persists for 13+ months across versions. | 44 comments, 33 👍 — cross-platform reliability blocker. |
| [#32870](https://github.com/anthropics/claude-code/issues/32870) | **`claude.exe` triggers Windows BSOD via `Wof.sys` during directory listing** | Kernel-level crash; potential data loss. Involves `NtQueryDirectoryFileEx` interaction. | 38 comments, 1 👍 — severe but niche (Windows-specific). |
| [#40175](https://github.com/anthropics/claude-code/issues/40175) | **Cowork: Global instructions silently revert after save** | Silent config loss undermines team standardization; affects enterprise adoption. | 32 comments, 20 👍 — high impact for collaborative workflows. |
| [#9516](https://github.com/anthropics/claude-code/issues/9516) | **Feature: User Interrupt Hook** | Enables custom handling of `Ctrl-C`/`SIGINT`; critical for graceful shutdown in automation. | 26 comments, 48 👍 — strongest enhancement demand (top 👍 count). |
| [#77966](https://github.com/anthropics/claude-code/issues/77966) | **OAuth login loop — `state` parameter dropped on "sign in again" redirect** | Blocks authentication on Linux/IntelliJ; regression in auth flow. | 20 comments, 14 👍 — blocks access for affected users. |
| [#31888](https://github.com/anthropics/claude-code/issues/31888) | **Batch diff review mode (like Cursor's native agent)** | UX parity request; current per-file approval slows large refactors. | 16 comments, 46 👍 — strong demand for review efficiency. |
| [#24537](https://github.com/anthropics/claude-code/issues/24537) | **Agent Hierarchy Dashboard — real-time multi-agent visualization (TUI + Desktop)** | Observability gap for complex multi-agent workflows; enterprise readiness. | 14 comments, 17 👍 — strategic feature for scaling usage. |
| [#83242](https://github.com/anthropics/claude-code/issues/83242) | **Fable 5 incorrectly draws from usage credits on Max 20x plan** | Billing/model-access regression; users on premium plan cannot use flagship model. | 2 comments, 0 👍 — *new today*, high severity for paying customers. |
| [#83288](https://github.com/anthropics/claude-code/issues/83288) | **Headless SDK CLI burns ~33% CPU constantly (futex/sched_yield spin)** | Resource waste in CI/automation; scales linearly with concurrent sessions. | 2 comments, 0 👍 — *new today*, infrastructure cost concern. |

---

## 4. Key PR Progress (All 4 Active PRs)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#77977](https://github.com/anthropics/claude-code/pull/77977) | **docs(plugin-dev): document `skipLfs` for marketplace sources** | Adds missing docs for GitHub/Git `skipLfs` option; helps avoid LFS bloat in plugin installs. | Open (updated 08-03) |
| [#83374](https://github.com/anthropics/claude-code/pull/83374) | **docs(plugin-dev): add `MessageDisplay` hook guidance** | Documents previously undocumented `MessageDisplay` hook event (streaming support). | Open (updated 08-02) |
| [#26056](https://github.com/anthropics/claude-code/pull/26056) | **Fix code-review plugin posting to GitHub without `--comment` flag** | Strengthens guardrails: adds behavioral rules, conditional gating, and explicit `NEVER` note. | Open (updated 08-02) |
| [#48343](https://github.com/anthropics/claude-code/pull/48343) | **fix(plugin-dev): make `skill-reviewer` frontmatter valid YAML** | Fixes YAML parsing error in bundled skill; part of #40370 cleanup. | Open (updated 08-02) |

*All PRs are documentation or plugin-tool fixes — no core CLI/runtime changes in this batch.*

---

## 5. Feature Request Trends (from all Issues)

1. **Observability & Control for Multi-Agent Workflows**  
   - Hierarchy dashboard (#24537), batch diff review (#31888), interrupt hooks (#9516) — developers want *visibility* and *governance* over parallel agents.

2. **Cross-Platform Consistency**  
   - Line endings (#2805), PowerShell policy handling (#78596), OAuth on Linux (#77966) — "works on my machine" gaps remain top friction.

3. **Model-Specific UX & Billing Transparency**  
   - Fable 5 credit accounting (#83242), scoped rate limits in statusline (#81940), per-plan tool enablement (#81317) — users need clarity on new model tiers.

4. **Hook & Automation Extensibility**  
   - Interrupt hooks (#9516), `MessageDisplay` docs (#83374), stop-hook reliability (#83266) — hooks are becoming the primary extension surface.

5. **Desktop App Parity with CLI/TUI**  
   - Sidebar persistence (#75523), plugin version sync (#83447), disconnect issues (#83443) — desktop UX lags behind terminal workflows.

---

## 6. Developer Pain Points (Recurring High-Frequency Themes)

| Pain Point | Evidence | Frequency Signal |
|------------|----------|------------------|
| **Silent config/data loss** | Global instructions revert (#40175), plugin version rollback (#83447), assistant text disappearing between tool calls (#75900) | 3+ issues, high comment counts |
| **Cross-session contamination** | Output bleed across concurrent sessions (#82491), MCP response misdelivery (#83457), transcript fork corruption (#83460) | 3 new issues today alone |
| **Auto-mode permission bypass** | Script-file execution evades classifier (#83459), Fable 5 acts before approval (#83458) | Security/reliability concern |
| **Resource inefficiency** | 33% CPU spin in headless SDK (#83288), BSOD on directory scan (#32870) | Infrastructure cost & stability |
| **Auth fragility** | OAuth loop (#77966), mobile/desktop disconnect (#80058) | Blocks onboarding & daily use |

---

*Digest generated from `anthropics/claude-code` GitHub data as of 2026-08-03. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-03

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The issue tracker is dominated by **token/credit burn bugs** across polling loops, compaction cycles, and sub-agent retries — with multiple users reporting >100M token sessions and weekly Pro allowances exhausted in hours. On the stability front, the VS Code extension’s **Diff viewer remains broken on macOS** (115 👍), while Windows users face **stream disconnects on OneDrive workspaces** and **post-migration thread association loss** in the new Unified ChatGPT Desktop. Four PRs merged today address rollout budget accounting, SQLite thread-metadata preservation, onboarding hints, and HTTP response buffering bounds.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **1** | [#35058](https://github.com/openai/codex/issues/35058) **Codex Diff crashes “Oops, an error has occurred” in VS Code on macOS** | Core review workflow broken for all macOS users; affects every repo including fresh workspaces. | 46 comments • **115 👍** • Open since 07-24 |
| **2** | [#13733](https://github.com/openai/codex/issues/13733) **Background polling wastes tokens: each `write_stdin` poll triggers full API turn with complete history** | Silent credit drain during long-running commands (cargo build/test); tokens ∝ history × polls. | 35 comments • 30 👍 • Open since 03-06 |
| **3** | [#35420](https://github.com/openai/codex/issues/35420) **Work/Codex stream repeatedly disconnects on Windows when workspace is OneDrive-backed & OneDrive degraded** | Blocks Windows users on common OneDrive setups; “stream disconnected before completion” errors. | 27 comments • Open since 07-26 |
| **4** | [#2916](https://github.com/openai/codex/issues/2916) **OpenAI service tier support (configurable `service_tier`)** | Enables cost/latency optimization via OpenAI’s tiered API; long-standing request. | 21 comments • **54 👍** • Open since 08-2025 |
| **5** | [#12098](https://github.com/openai/codex/issues/12098) **Tabbed interface for parallel chat sessions in VS Code extension** | UX gap: switching chats requires multiple steps; tabs are standard in Cursor/other AI IDEs. | 19 comments • **55 👍** • Open since 02-2026 |
| **6** | [#35259](https://github.com/openai/codex/issues/35259) **Codex Desktop repeatedly re-enters model during wait/status polling (19.8% of tokens)** | Confirms polling token burn in Desktop app; measured 19.8% of raw local token volume. | 11 comments • 2 👍 • Open since 07-24 |
| **7** | [#36144](https://github.com/openai/codex/issues/36144) **Weekly allowance drops ~1% per Luna task on ChatGPT Pro** | Pro users hitting weekly caps in hours; “unusually fast” consumption on Luna tasks. | 5 comments • 1 👍 • Open since 07-30 |
| **8** | [#22411](https://github.com/openai/codex/issues/22411) **app-server loads ALL session files on every `thread/list` — high CPU, slow startup, background token waste** | Architectural scalability issue: full deserialization per request; worsens with months of history. | 5 comments • Open since 05-13 |
| **9** | [#32195](https://github.com/openai/codex/issues/32195) **Show 5-hour & weekly usage limits in Codex App status area** | Visibility gap: CLI shows limits, Desktop does not; users fly blind on quota. | 4 comments • **8 👍** • Open since 07-10 |
| **10** | [#36665](https://github.com/openai/codex/issues/36665) **9.47M tokens + 183.9M cached in one 5.9h CLI session: 74 compactions (~every 3.7min), 95% re-read files already read** | Extreme compaction loop burning a full weekly Pro allowance; re-reads dominate token use. | 1 comment • Filed today |

> **Honorable mentions (filed today):** [#36662](https://github.com/openai/codex/issues/36662) (Windows thread unrecoverable after encrypted decode error), [#36663](https://github.com/openai/codex/issues/36663) (Unified Desktop migration drops project→thread links), [#36667](https://github.com/openai/codex/issues/36667)/[#36666](https://github.com/openai/codex/issues/36666) (agents ignore explicit scope, make destructive out-of-scope changes).

---

## 4. Key PR Progress (All 5 PRs Updated in Last 24h)

| PR | Status | Summary |
|----|--------|---------|
| [#36641](https://github.com/openai/codex/pull/36641) | **MERGED** | Capture `codex_rollout_budget_units` from Responses API usage into `TokenUsage`; kept provider-only, excluded from serialized protocol/TS. |
| [#36635](https://github.com/openai/codex/pull/36635) | **MERGED** | Expose onboarding hints (e.g., `.onboarding_entrypoint=life_sciences`) in login completion notifications; validate allowlisted suffixes. |
| [#36632](https://github.com/openai/codex/pull/36632) | **MERGED** | Preserve SQLite thread metadata (preview, etc.) during goal mutations; skip rollout reconciliation when SQLite already references same entity. |
| [#31781](https://github.com/openai/codex/pull/31781) | **OPEN** (code-reviewed) | Bound executor-controlled HTTP response buffering: remote exec-server frames could carry near-full JSON-RPC messages, causing unbounded app-server retention. Adds per-frame and aggregate byte limits with backpressure. |
| [#31817](https://github.com/openai/codex/pull/31817) | **OPEN** (automated) | Scheduled `models.json` update via github-actions[bot]. |

---

## 5. Feature Request Trends (Distilled from All Issues)

1. **Usage transparency & control** — Service tier selection (#2916), in-app quota display (#32195), per-turn token accounting, and predictable billing.
2. **Multi-session / parallel workflows** — Tabbed chat UI (#12098), better session management, project→thread persistence across migrations (#36663).
3. **Model behavior guardrails** — Scope adherence (#36667/#36666), autonomous continuation with audit trail (#36668), reasoning effort parity (Max tier missing in VS Code #35763).
4. **Platform parity** — Windows/macOS/Linux feature gaps: Diff viewer (macOS), OneDrive resilience (Windows), sandbox profiles (macOS #35437), SSH remoting (#33879).
5. **History & context hygiene** — Pagination correctness (#35746), compaction efficiency (#36665/#36664), timestamped messages (#5148), undo reliability (#12978).

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

| Pain Point | Evidence | Affected Surfaces |
|------------|----------|-------------------|
| **Silent token/credit incineration** | Polling loops (#13733, #35259), compaction re-reads (#36665), sub-agent retries (#36503), app-server full-history loads (#22411) | CLI, Desktop, app-server |
| **Unrecoverable session corruption** | Encrypted decode error kills thread (#36662), migration drops associations (#36663), stream disconnects on OneDrive (#35420) | Desktop (Windows), Web |
| **Broken core review tooling** | Diff viewer crashes on macOS (#35058 — 115 👍), blank approval prompts (#36637), missing Max reasoning (#35763) | VS Code Extension |
| **Scope violations & destructive autonomy** | Agents ignore explicit 1-item scope for 3+ days (#36667/#36666), unbounded goal retries (#36503) | Desktop, Subagents |
| **Observability vacuum** | No in-app usage meters (#32195), “Request Blocked” with no explanation (#35838), no timestamps (#5148) | All surfaces |
| **Sandbox / permission friction** | Custom profiles SIGABRT on macOS (#35437), profile overrides ignored (#33552), undo broken on Windows (#12978) | CLI, Desktop |

---

*Data sourced from `github.com/openai/codex` — Issues & PRs updated 2026-08-02 → 2026-08-03 UTC.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-03

## 1. Today's Highlights
- **Nightly v0.55.0 released** with a massive dependency update batch (75+ npm packages) including major bumps to `@google/genai` (1.x → 2.x), `undici` (security fixes), `chalk` (Node 22+ required), and `eslint` v10.  
- **Agent reliability remains the top pain point**: multiple P1 bugs around subagent hang/recovery, shell command "Waiting input" stalls, and browser agent failures on Wayland are actively discussed.  
- **Auto Memory & security hardening** are in progress: deterministic redaction, low-signal session quarantine, and symlink agent recognition fixes are tracked in a cluster of recent issues.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.55.0-nightly.20260803.gf47d6c6f7](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260803.gf47d6c6f7) | Nightly | Automated version bump. Includes 75 dependency updates (see PR #28626). Notable: `@google/genai` 2.13.0, `undici` 8.9.0 (high-severity security fix), `chalk` 6.0.0 (Node ≥22), `eslint` 10.8.0, `yargs` 18.1.0. |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Masks real failures; breaks trust in delegation. | 12 comments, 2 👍 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks core workflows; workaround = disable subagents. | 8 comments, 8 👍 — P1, high user impact |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck at "Waiting input" after completion** | Frequent false-positive stalls on trivial commands. | 4 comments, 3 👍 — P1, core UX bug |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations (76 behavioral tests)** | Foundational for regression prevention across 6 models. | 7 comments — P1, eval infra epic |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini rarely uses skills/sub-agents autonomously** | Undermines extensibility; requires explicit prompting. | 6 comments — P2, adoption blocker |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux/Wayland users cannot use browser agent. | 4 comments, 1 👍 — P1, platform gap |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions endlessly** | Wastes quota & clutters inbox; needs backoff/quarantine. | 5 comments — P2, memory quality |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory: secrets redacted *after* model context** | Security risk; content logged before redaction. | 4 comments — P2, security hardening |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools registered** | Tool explosion breaks agent; needs dynamic scoping. | 3 comments — P2, scalability limit |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file read/search/mapping** | Could cut turns & token noise; strategic exploration. | 7 comments, 1 👍 — P2, R&D epic |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#28638](https://github.com/google-gemini/gemini-cli/pull/28638) | Open | **Nightly version bump** to 0.55.0-nightly.20260803.gf47d6c6f7 |
| [#28626](https://github.com/google-gemini/gemini-cli/pull/28626) | Closed | **75 npm dependency updates** (major: `@google/genai`, `undici`, `chalk`, `eslint`, `yargs`, `marked`) |
| [#28635](https://github.com/google-gemini/gemini-cli/pull/28635) | Closed | **undici 8.9.0** — high-severity security fix |
| [#28631](https://github.com/google-gemini/gemini-cli/pull/28631) | Closed | **@google/genai 1.30.0 → 2.13.0** — breaking API changes likely |
| [#28634](https://github.com/google-gemini/gemini-cli/pull/28634) | Closed | **chalk 6.0.0** — now requires Node.js ≥22 |
| [#28632](https://github.com/google-gemini/gemini-cli/pull/28632) | Closed | **eslint 9.24.0 → 10.8.0** — new rules, config changes |
| [#28630](https://github.com/google-gemini/gemini-cli/pull/28630) | Closed | **yargs 17.7.2 → 18.1.0** — CLI parsing updates |
| [#28624](https://github.com/google-gemini/gemini-cli/pull/28624) | Open | **Fix boolean thought parts leaking as `[Thought: true]`** (fixes #23525) |
| [#28446](https://github.com/google-gemini/gemini-cli/pull/28446) | Closed | **OAuth token exchange: use native fetch** to fix "Premature close" on headless VPS (fixes #28440) |
| [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) | Open | **VS Code companion: stop leaking disposables** (fixes #27790) |

---

## 5. Feature Request Trends
1. **Agent observability & control** — Users want subagent trajectories in `/chat share` (#22598), settings.json overrides respected (#22267), and explicit agent disabling honored (#22093).  
2. **AST-aware tooling** — Multiple issues (#22745, #22746, #19873) push for structured code navigation (tilth/glyph) to reduce turns and token waste.  
3. **Memory system maturity** — Quarantine invalid patches (#26523), deterministic redaction (#26525), and low-signal backoff (#26522) show a move toward production-grade memory.  
4. **Browser agent hardening** — Session takeover/lock recovery (#22232), Wayland support (#21983), and config propagation are recurring asks.  
5. **Self-documenting CLI** — Issue #21432 requests the agent accurately describe its own flags, hotkeys, and invocation patterns.

---

## 6. Developer Pain Points (High-Frequency Frustrations)
- **Silent agent failures**: Subagents report success while hitting turn limits (#22323) or hang without logs (#21409, #21763).  
- **Shell "zombie" state**: Commands complete but UI shows "Awaiting input" (#25166) — breaks flow on simple ops.  
- **Tool explosion**: >128 tools triggers 400 errors (#24246); no automatic scoping.  
- **Platform gaps**: Wayland browser agent broken (#21983); symlink agents ignored (#20079); Windows PowerShell install undocumented (#28447).  
- **Memory noise**: Auto Memory re-processes low-signal sessions endlessly (#26522) and logs secrets pre-redaction (#26525).  
- **Interactive prompt stalls**: Vite/npm init prompts freeze the agent (#22465) — no behavioral eval coverage yet.  
- **Terminal flicker on resize** — Ink rendering path needs migration to `RenderStatic` (#21924).  

---

*Generated from github.com/google-gemini/gemini-cli data as of 2026-08-03. All links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-03

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows **11 active issues**, dominated by regressions in the 1.0.72+ line (file-path resolution, autopilot persistence, input handling) and a breaking API change where `gpt-5.6-luna` is advertised but only works via `/responses`, not the standard `/chat/completions` endpoint. Community focus remains on session-state reliability and terminal/ACP integration quirks.

## Releases
*No releases published in the last 24h.*

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4202](https://github.com/github/copilot-cli/issues/4202) | **Built-in `view` tool reports “Path does not exist” for existing files (1.0.73 regression)** | Blocks basic file-read workflows; reproducible since 1.0.72. Critical for non-interactive/automation use. | 3 comments, triaged as `area:non-interactive`, `area:tools` |
| [#4337](https://github.com/github/copilot-cli/issues/4337) | **`gpt-5.6-luna` advertised in `/models` but inaccessible via `/chat/completions`** | Breaks MoA/aggregator tooling that expects OpenAI-compatible chat completions; forces non-standard `/responses` path. | Filed today, `triage` label — high impact for SDK consumers |
| [#4336](https://github.com/github/copilot-cli/issues/4336) | **Cancelled user input still delivered to agent in autopilot mode** | Silent re-injection of aborted keystrokes corrupts conversation history and triggers unintended actions. | Filed yesterday, `triage` — security/UX risk in autopilot flows |
| [#4335](https://github.com/github/copilot-cli/issues/4335) | **ACP `toolCall.title` shows summary, not executable command** | Editor approval modals (Zed, etc.) hide the actual shell command, reducing transparency and auditability. | Filed yesterday, `triage`, `area:acp` — blocks host-editor trust |
| [#4334](https://github.com/github/copilot-cli/issues/4334) | **Stashed prompt (`Ctrl+S`) lost on session switch** | Core TUI workflow broken: stash/pop fails across sessions, losing uncommitted input. | Filed yesterday, `triage` — high-friction daily driver bug |
| [#4329](https://github.com/github/copilot-cli/issues/4329) | **Autopilot not actually enabled when resuming a session that had it on** | Status line lies; approvals still required, breaking “set-and-forget” automation expectations. | 1.0.77, `area:permissions`, `area:sessions` |
| [#4328](https://github.com/github/copilot-cli/issues/4328) | **`Ctrl+H` misinterpreted as `Ctrl+Backspace` under WSL2 (WT_SESSION leak)** | Keyboard contract violation; deletes words instead of chars. Affects all WSL2 + Windows Terminal users. | `area:input-keyboard`, `area:platform-windows` |
| [#4292](https://github.com/github/copilot-cli/issues/4292) | **Colors completely off in tmux (light theme)** | Rendering broken inside tmux; works fine outside. Impacts users on remote/containerized workflows. | `area:theming-accessibility`, `area:terminal-rendering` |
| [#4332](https://github.com/github/copilot-cli/issues/4332) | **No way to silence once-per-session “Memory is disabled” notice** | Noise for users who intentionally disable memory; no config flag to suppress. | `triage` — small UX papercut, high frequency |
| [#4333](https://github.com/github/copilot-cli/issues/4333) | **“Speed connection” / poor network handling** | Vague but signals latency/resilience concerns in low-bandwidth environments. | `triage` — may warrant offline/queueing improvements |

## Key PR Progress
*No pull requests updated in the last 24h.*

## Feature Request Trends
1. **Session-state fidelity** — Persist autopilot, stash, memory settings, and approval modes across resume/switch.
2. **ACP/editor integration parity** — Expose raw commands in `toolCall`, fix approval modals, honor keyboard contracts.
3. **API surface stability** — Models advertised in `/models` must work on `/chat/completions`; avoid forcing `/responses`.
4. **Terminal rendering robustness** — Consistent colors/themes inside tmux, screen, and WSL2.
5. **Noise reduction** — Configurable suppression of repetitive informational banners (memory, tips, etc.).

## Developer Pain Points
- **Regression fatigue**: 1.0.72+ introduced file-tool, autopilot, and input regressions that block established workflows.
- **Silent state mismatches**: UI shows autopilot/memory enabled but backend disagrees; stashed input vanishes without error.
- **Editor-host trust gap**: ACP surfaces hide executable commands, forcing blind approvals in Zed/other editors.
- **WSL2/terminal quirks**: Key-binding leaks (`WT_SESSION`) and tmux color breaks make the CLI feel fragile outside bare metal.
- **API contract drift**: New models landing in `/responses` only breaks existing OpenAI-compatible tooling chains.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-03

---

## 1. Today's Highlights
The community is actively discussing **session persistence** and **remote access** capabilities, with two major feature requests (#1283 Memory System, #1282 Remote Control) receiving significant engagement. A new operational issue (#2578) highlights reliability concerns in swarm/parallel subagent workflows when hitting quota limits or timeouts, causing partial work loss and broken state. On the tooling front, a `Monitor` tool for per-line stdout streaming was proposed but closed (#2471).

---

## 2. Releases
No new releases in the last 24 hours.

---

## 3. Hot Issues

| Issue | Type | Why It Matters | Community Reaction |
|-------|------|----------------|-------------------|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) Remote Control — Continue local sessions from any device | Enhancement | Enables seamless cross-device workflow continuity; users can hand off a running local TUI session to mobile/browser without losing context. | **24 👍**, 11 comments — strong demand for mobile/remote access. |
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) Memory System — Persistent context across sessions | Enhancement | Addresses the "goldfish memory" problem: automatic AI-managed notes + user-defined instructions (CLASSIC.md style) preserved across sessions. | 14 comments — active design discussion; zero 👍 suggests early-stage. |
| [#2578](https://github.com/MoonshotAI/kimi-cli/issues/2578) Swarm 403/timeout mid-batch: partial work lost, resume re-spends tokens | Bug / Swarm | Critical reliability gap: quota errors or timeouts leave workspace in broken state; retry logic re-spends tokens and blocks other subagents. | New (0 comments) — high severity for parallel workflow users. |
| [#2579](https://github.com/MoonshotAI/kimi-cli/issues/2579) External wake channel for running interactive sessions | Feature | Allows headless/agent-driven interaction: external agents drop Markdown into an inbox; `inotifywait` wakes the TUI to process. | New (0 comments) — niche but enables multi-agent orchestration. |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#2471](https://github.com/MoonshotAI/kimi-cli/pull/2471) `feat(tools): add Monitor tool for per-line stdout streaming` | **Closed** | Proposed a streaming `Monitor` tool complementing the existing background task tool. Closed without merge — maintainers may prefer discussion first or alternative approach. |

---

## 5. Feature Request Trends
From the active issues, three clear directions emerge:

1. **Session Continuity & Portability** — Remote Control (#1282) + Memory System (#1283) + External Wake (#2579) all point to a desire for *stateful, migratable, and interruptible* sessions across devices and actors.
2. **Resilient Parallel Execution** — Swarm reliability (#2578) is a blocker for scaling agent workflows; users need atomic checkpoints, idempotent retries, and token-aware recovery.
3. **Headless/Automation-Friendly Interfaces** — The wake channel request (#2579) signals a shift toward using Kimi CLI as an embeddable engine rather than just an interactive TUI.

---

## 6. Developer Pain Points
- **Lost work on quota/timeout** — Swarm subagents die mid-write, leaving broken file trees; retry burns tokens and blocks peers (#2578).
- **No cross-session memory** — Every session starts from zero; users manually re-inject context (#1283).
- **Tethered to one machine** — No way to hand off a live local session to phone/tablet (#1282).
- **Limited automation hooks** — No standard way for external agents to inject prompts into a running TUI (#2579).
- **Tooling gaps for streaming output** — The closed `Monitor` PR (#2471) hints at unmet need for line-by-line stdout consumption in tool chains.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — issues and PRs updated 2026-08-02 to 2026-08-03.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-03

## Today's Highlights
No new releases shipped today, but the project saw intense maintenance activity: **47 issues and 50 PRs updated in 24 hours**, signaling a rapid stabilization cycle. The standout work includes a **new `chat.model` plugin hook for per-request model routing** (closing #18793), a **critical persistence rewrite** to eliminate write amplification, and an **air-gap mode flag** (`OPENCODE_AIRGAP=1`) for offline deployments. Multiple TUI/Desktop usability bugs—clipboard, prompt stash, session rename, review panel resize—were also resolved.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#40206](https://github.com/anomalyco/opencode/issues/40206) | **grok-4.5 on OpenCode Go returning 500 since 2 Aug** | Provider-side regression blocking a major model; high visibility for users on OpenCode Go. | 2 comments, opened today |
| [#40196](https://github.com/anomalyco/opencode/issues/40196) | **Conversation history too large to compact — exceeds model context limit** | Fresh sessions hitting context limits suggests a compaction bug or token accounting error. | 2 comments, opened today |
| [#28996](https://github.com/anomalyco/opencode/issues/28996) | **Crash at start on Debian/WezTerm** | Terminal crash on launch blocks Linux users; 14 comments indicate widespread impact. | 14 comments, 👍 1 |
| [#25948](https://github.com/anomalyco/opencode/issues/25948) | **Desktop Agent dropdown doesn't show plugin-loaded agents** | Plugin agents load (logs confirm) but UI doesn't surface them — breaks extensibility UX. | 14 comments |
| [#18793](https://github.com/anomalyco/opencode/issues/18793) | **[FEATURE] `chat.model` plugin hook for pre-call model routing** | **Closed today via PR #40188** — enables dynamic model selection per request, a top-voted extensibility ask. | 10 comments, 👍 6 |
| [#26338](https://github.com/anomalyco/opencode/issues/26338) | **[FEATURE] Add CommandCode as a Provider** | High community demand (👍 30) for CommandCode.ai integration; signals provider ecosystem growth. | 8 comments, 👍 30 |
| [#12800](https://github.com/anomalyco/opencode/issues/12800) | **Add macOS-friendly clipboard fallback (pbcopy)** | Long-standing macOS clipboard gap; 8 comments, 👍 8 — affects daily workflow. | 8 comments, 👍 8 |
| [#29619](https://github.com/anomalyco/opencode/issues/29619) | **[Kimi K2.6] `reasoning_content` missing in assistant tool calls** | Provider-specific tool-call format breakage; blocks Kimi users on thinking mode. | 7 comments |
| [#24217](https://github.com/anomalyco/opencode/issues/24217) | **TUI double-ESC loops & Desktop stop button fails to interrupt** | Core UX failure: users can't reliably stop runaway agents. | 6 comments, 👍 1 |
| [#30416](https://github.com/anomalyco/opencode/issues/30416) | **`prompt_stash_pop` returns first stashed prompt (not LIFO)** | Breaks expected stash stack behavior; 4 comments, recently closed. | 4 comments |

---

## Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#40207](https://github.com/anomalyco/opencode/pull/40207) | **perf(app): fix composer lag via buffered blob draft storage** | Perf/Refactor | Moves prompt drafts/history to SQLite WAL + content-addressed blobs; persists image refs not base64. Major latency reduction for composer. |
| [#40197](https://github.com/anomalyco/opencode/pull/40197) | **fix(app): eliminate persistence write amplification** | Perf/Fix | Replaces setter-coupled writes with shared repo + 500ms checkpoint deadline; SQLite WAL for desktop, IndexedDB for web. |
| [#40188](https://github.com/anomalyco/opencode/pull/40188) | **feat(plugin): add request-scoped `chat.model` hook** | Feature | **Closes #18793**. Plugins can now replace `{providerID, modelID}` per request — enables routing by prompt complexity, cost, etc. |
| [#39994](https://github.com/anomalyco/opencode/pull/39994) | **feat: add `OPENCODE_AIRGAP` to disable automatic internet access** | Feature | Single kill-switch for air-gapped/intranet deployments; disables auto-updates, telemetry, model fetching. |
| [#40202](https://github.com/anomalyco/opencode/pull/40202) | **fix(app): search every known project in open project dialog** | Fix | **Closes #39142**. Open Project dialog now searches all projects, not just 5 most recent. |
| [#40198](https://github.com/anomalyco/opencode/pull/40198) | **fix(opencode): match canonically equivalent Unicode in patches** | Fix | **Closes #31651**. Adds Unicode NFC/NFD equivalence pass to `seekSequence()` — fixes patch apply on macOS/Windows. |
| [#40163](https://github.com/anomalyco/opencode/pull/40163) | **fix(tui): let prompt Down arrow reach end of text** | Fix | **Closes #40161**. Fixes cursor offset calculation for newlines/tabs in textarea — restores expected navigation. |
| [#40125](https://github.com/anomalyco/opencode/pull/40125) | **feat(opencode): Allow per-MCP-server trust configuration** | Feature | **Closes #40111, #23506, #14696, #26862, #1694**. Granular trust settings per MCP server — major security/enterprise win. |
| [#34841](https://github.com/anomalyco/opencode/pull/34841) | **fix(agent): remove alphabetical sort to preserve insertion order** | Fix | **Closes #7372**. Primary agents now appear in insertion order (built-ins first, then user) — restores predictable UI ordering. |
| [#35023](https://github.com/anomalyco/opencode/pull/35023) | **feat(opencode): open session list with `--resume`** | Feature | **Relates #18569**. `opencode --resume` opens session picker on startup — improves CLI session continuity. |

---

## Feature Request Trends
From the issue stream, the strongest community pulls are:

1. **Per-request model routing & dynamic provider switching** — #18793 (👍 6), #18844, #24006 all converge on "let me pick the right model for this prompt, automatically or via plugin."
2. **Provider ecosystem expansion** — #26338 (CommandCode, 👍 30), #30519 (alias Models.dev definitions), #27972 (commands in `.agents/commands`) — users want more providers and easier custom-provider authoring.
3. **Session/project management polish** — #30535 (project browser with auto-naming), #16677 (session rename in Desktop), #24744 (project edit persistence), #39142 (search all projects) — daily workflow friction.
4. **Air-gap / offline / enterprise readiness** — #39994 (`OPENCODE_AIRGAP`), #40125 (per-MCP trust), #18233 — growing demand for controlled deployments.
5. **TUI/desktop parity & usability** — clipboard (#12800, #12595), prompt stash (#30416), interrupt handling (#24217), review panel (#30560), markdown rendering (#16046) — desktop/TUI gaps remain top friction.

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Session/project UI state loss** | #24744 (edit dialog doesn't persist), #16677 (no rename in Desktop), #30560 (resize breaks layout), #24286 (version mismatch CLI vs Web) | High — core loop broken; users lose trust in UI persistence |
| **Clipboard & input handling across OSes** | #12800 (macOS pbcopy), #12595 (Win10 Ctrl+C/V), #30490 (white rect on typing) | High — basic text interaction fails on major platforms |
| **Interruption/control reliability** | #24217 (double-ESC loop, stop button fails), #30136 (permission prompt loop), #30401 (infinite agent loop) | Critical — users cannot stop runaway agents; safety/usability risk |
| **Provider-specific tool-call format breaks** | #29619 (Kimi `reasoning_content`), #30653 (orphaned tool state on interrupted stream) | Medium — blocks specific models; erodes multi-provider promise |
| **Token/context accounting bugs** | #40196 (new session exceeds context), #20269 (title generation silent fail due to `effort` param leak) | Medium — silent failures waste tokens and confuse users |
| **Plugin extensibility ceiling** | #18793, #18844, #24006, #27972 — all asking for hooks that don't exist yet | Medium — power users hit walls; ecosystem growth constrained |

---

*Digest generated from GitHub data (issues/PRs updated 2026-08-03). Links point to anomalyco/opencode.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-03

## Today's Highlights
No new releases shipped today. The community is actively triaging a critical auto-compaction bug (#6879) that lets context windows exceed 100% until provider rejection, alongside a cluster of login/catalog timeouts (#7113, #7505, #7504) that freeze the TUI for minutes when `pi.dev` is unreachable or IPv6 routes blackhole. On the feature side, experimental in-memory sessions (#7503) and a new DeepInfra provider (#7501) landed, while the switchable terminal renderer experiment was reverted (#7473).

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **Auto-compaction never triggers after context grows past 100% until provider overflow** | Core reliability bug: sessions on long-running agents (e.g., GPT-5.6-sol) silently exceed context limits, only compacting when the API rejects at ~373k tokens. Wastes tokens and risks data loss. | 10 comments, 10 👍 — highest engagement in the batch |
| [#7062](https://github.com/earendil-works/pi/issues/7062) | **fix(openai-completions): handle array content and missing finish_reason** | Breaks Databricks/Qwen3/gpt-oss reasoning models that stream typed-array `delta.content` and omit `finish_reason`. Affects any OpenAI-compatible provider with non-standard streaming. | 6 comments — active provider-compat discussion |
| [#7113](https://github.com/earendil-works/pi/issues/7113) | **TUI freezes after `/login` when pi.dev model catalog unreachable** | `ModelRuntime.login()` awaits a post-login catalog refresh with no timeout/AbortSignal. Blocks the entire TUI for ~5 min on network hiccups. | 4 comments — UX-blocking for new users |
| [#7505](https://github.com/earendil-works/pi/issues/7505) | **Remote-catalog refresh after `/login` has no timeout — login freezes ~5 min** | Duplicate of #7113 but confirmed across multiple providers (`ibm-bob`, `google`, `deepseek`). Reinforces need for a global catalog-fetch timeout. | 1 comment — validates scope |
| [#7504](https://github.com/earendil-works/pi/issues/7504) | **IPv6 blackhole hangs pi for ~5 min — undici dispatcher lacks `autoSelectFamily`** | All non-model network ops (startup sweep, `/llama`, `/scoped-models`, post-login) stall on AAAA blackholes. No IPv4 fallback. | 1 comment — infrastructure-level fix needed |
| [#7315](https://github.com/earendil-works/pi/issues/7315) | **Fireworks requests sometimes fail instantly with "Request timed out."** | Immediate failures with empty content/zero tokens; auto-retry masks but doesn't fix. Suggests connection-establishment issue, not model latency. | 4 comments — provider-specific but high impact |
| [#7413](https://github.com/earendil-works/pi/issues/7413) | **Compaction fails on GitHub Copilot GHE.com — "unknown stamp" error** | `/compact` breaks on enterprise Copilot (GHE.com) with auth error `unknown stamp "prod-cus-01"`. Normal chat works; only summarization path fails. | 3 comments — enterprise blocker |
| [#7323](https://github.com/earendil-works/pi/issues/7323) | **`pi update --models` fails entire refresh on transient catalog stall** | Single 15s timeout aborts the whole model refresh; no retry. Network blips cause spurious failures. | 3 comments — resilience gap |
| [#7490](https://github.com/earendil-works/pi/issues/7490) | **IME candidate window flickers/jumps/ghosts when typing Chinese in WezTerm** | Pi-specific regression vs. Codex CLI in same terminal. Indicates TUI input/rendering mishandling of IME composition events. | 2 comments — i18n UX blocker |
| [#7486](https://github.com/earendil-works/pi/issues/7486) | **Hardware cursor jumps between input box when `showHardwareCursor` enabled in WezTerm** | Workaround for #5200 (IME candidate position) introduces new cursor-jitter during "Working..." spinner states. Trade-off regression. | 3 comments — terminal-compat pain |

---

## Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#7503](https://github.com/earendil-works/pi/pull/7503) | feat(agent): add experimental in-memory sessions | **OPEN** | Introduces `Session`, `SessionStorage`, `SessionRepository` contracts + full in-memory backend (entries, lanes, facts, queries, forks). Exposed under `@earendil-works/pi-agent-core/experimental`. Foundation for server-backed sessions. |
| [#7501](https://github.com/earendil-works/pi/pull/7501) | Add DeepInfra provider | **CLOSED** | New built-in `openai-completions` provider for DeepInfra (~standard OpenAI endpoint, no `developer` role). Addresses #7502 / #6270. |
| [#7498](https://github.com/earendil-works/pi/pull/7498) | fix(coding-agent): defer idle compaction until next prompt | **OPEN** | Prevents wasteful mid-idle compactions that burn tokens. Related to #6879 edge case where recent GPT models grow context aggressively. |
| [#7480](https://github.com/earendil-works/pi/pull/7480) | feat(ai): add LLM Gateway provider with API key and OAuth login | **CLOSED** | Adds LLM Gateway (OpenRouter-style router, ~151 tool-capable models) as built-in provider. Includes OAuth + API key login flows. |
| [#7496](https://github.com/earendil-works/pi/pull/7496) | feat: add cycle execution duration and `/copy cycle` command | **CLOSED** | Implements REQ-046: prints wall-clock execution time per cycle (`Execution time: Xh Ym Zs`) and adds `/copy cycle` to copy last cycle's transcript. |
| [#7494](https://github.com/earendil-works/pi/pull/7494) | fix(ai): preserve Gemini 3 tool call IDs | **OPEN** | Gemini 3 requires matching function-call IDs on responses. Extends `requiresToolCallId()` to cover Gemini ≥3 (not just Claude/GPT-OSS). |
| [#7493](https://github.com/earendil-works/pi/pull/7493) | Set `AI_AGENT` for child process attribution | **OPEN** | Sets `AI_AGENT=pi` in CLI/RPC entry points (alongside `PI_CODING_AGENT=true`). Enables cross-agent observability for spawned processes. |
| [#7488](https://github.com/earendil-works/pi/pull/7488) | fix(coding-agent): respect shellPath in minimal mode example | **CLOSED** | Minimal-mode extension now reads `shellPath` from `SettingsManager` instead of defaulting to WSL on Windows. Fixes #7489. |
| [#7482](https://github.com/earendil-works/pi/pull/7482) | fix(tui): prefer iTerm2 inline images over kitty on WezTerm | **CLOSED** | WezTerm was mapped to Kitty protocol, causing progressive image erasure in scrolling transcripts. Now uses iTerm2 OSC 1337. Fixes #7481. |
| [#7473](https://github.com/earendil-works/pi/pull/7473) | Revert "feat(tui): add switchable terminal renderers" | **CLOSED** | Reverts #7440 (runtime renderer switching) — likely due to stability/complexity concerns. |

---

## Feature Request Trends
1. **Provider ecosystem expansion** — DeepInfra (#7501), LLM Gateway (#7480), DeepSeek v4 on OpenRouter (#7476), Qwen token-plan parity (#7491). Users want first-class support for every OpenAI-compatible endpoint.
2. **Session durability & portability** — In-memory sessions (#7503), server-backed sessions (#7396), symlink-aware discovery (#7497), session forking/queries. Moving beyond flat-file JSONL.
3. **Thinking/reasoning control** — Per-model thinking level in `/scoped-models` (#7487), Gemini 3 tool-call fidelity (#7494), compaction that respects reasoning tokens (#6879, #7498).
4. **Extension ergonomics** — `--exclude-extensions` flag (#7475), `askWithFrozenContext()` for review plugins (#7500), command handoff fixes (#7484).
5. **Terminal/i18n polish** — IME stability in WezTerm (#7490, #7486), hardware cursor trade-offs, Kitty vs iTerm2 image protocols (#7481, #7482).

---

## Developer Pain Points
- **Unbounded network waits** — Login, model refresh, catalog updates, and provider calls all lack timeouts/retries (#7113, #7505, #7504, #7323). Freezes TUI for minutes on flaky networks.
- **Compaction unreliability** — Auto-compaction fires too late (#6879) or too early (#7498), fails on enterprise auth (#7413), and cancellation reasons are opaque (#7492).
- **Provider streaming quirks** — Array `delta.content`, missing `finish_reason`, tool-call ID mismatches (#7062, #7494) break non-OpenAI endpoints.
- **Windows/WezTerm terminal gaps** — IME flicker (#7490), cursor jumps (#7486), image degradation (#7481), shellPath ignored (#7489).
- **Extension loading performance** — Per-extension `jiti` instances + serial load (#7483) slow startup; no per-run exclusion (#7475).
- **Silent config failures** — UTF-8 BOM in `auth.json` disables all credentials with no error (#7499).

---

*Data sourced from `github.com/badlogic/pi-mono` — Issues/PRs updated 2026-08-02 to 2026-08-03.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-03

## 1. Today's Highlights
A new nightly release (v0.21.3-nightly.20260803) shipped with TUI keyboard shortcut documentation and a history pagination fix. The issue tracker shows active triaging around session management regressions—particularly around abort handling, session persistence on Windows Desktop, and fork agent context pollution. PR velocity remains high with 50 updates in 24h, focusing on daemon workspace ownership, Plan & Review workflow gating, and cross-provider compression cache sharing.

## 2. Releases
**v0.21.3-nightly.20260803.e1e5b42ce** — Nightly build  
- `docs`: Completed TUI keyboard shortcut reference ([#8327](https://github.com/QwenLM/qwen-code/pull/8327))  
- `fix(core)`: Unblocked history pagination on an unspecified condition (truncated in release notes)  
- *Install*: `npm install @qwen-code/qwen-code@nightly`

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8316](https://github.com/QwenLM/qwen-code/issues/8316) | **Prompt not restored on Ctrl+C cancel** | Core UX regression: users lose prompt content when interrupting agent thinking, forcing retype. | 5 comments, `needs-triage` |
| [#8382](https://github.com/QwenLM/qwen-code/issues/8382) | **Duplicate provider tool call ID errors** | Breaks tool execution flow; "not recorded" errors suggest session/transcript corruption. | 4 comments, `need-information`, `need-retesting` |
| [#8356](https://github.com/QwenLM/qwen-code/issues/8356) | **Session transcript loses turns after APIUserAbortError** | Silent data loss in local session logs after user abort—critical for debugging/audit. | 3 comments, P2, `daemon` scope |
| [#8398](https://github.com/QwenLM/qwen-code/issues/8398) | **`isAbortError` doesn't recognize OpenAI SDK's `APIUserAbortError`** | Misclassifies user cancels as failures in `auth_type=openai` (most common provider path). | 3 comments, P2, core utils |
| [#8400](https://github.com/QwenLM/qwen-code/issues/8400) | **Desktop v0.0.5: sessions auto-deleted on restart (Windows)** | Workspace cwd mismatch causes silent session purge—high severity for Desktop users. | 3 comments, P1, Windows |
| [#8319](https://github.com/QwenLM/qwen-code/issues/8319) | **Agent thinking panel jitter makes content unreadable** | Dynamic thinking area resizing causes layout thrashing; blocks reading non-thinking content. | 3 comments, P2, UI/rendering |
| [#8330](https://github.com/QwenLM/qwen-code/issues/8330) | **@ completion tab switching broken in Warp (Ctrl+Tab conflict)** | Terminal-level shortcut collision blocks navigation in Warp; needs alternate binding. | 4 comments, P2, keybindings |
| [#8326](https://github.com/QwenLM/qwen-code/issues/8326) | **Fork agents inherit sibling directives via last model message** | Context pollution: parallel forks see each other's function calls, violating isolation. | 2 comments, 👍1, core architecture |
| [#8411](https://github.com/QwenLM/qwen-code/issues/8411) | **Caller-supplied session IDs not coordinated across daemon transports** | Duplicate session risk in multi-entrypoint daemon (REST, ACP, WebShell); breaks session identity. | 2 comments, P2, SDK/daemon |
| [#8385](https://github.com/QwenLM/qwen-code/issues/8385) | **ConEmu/Cmder: full output flicker on Windows** | Rendering regression in popular Windows terminals; only workaround is `CI=true`. | 3 comments, P3, Windows/terminal-ux |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|-----|------|---------|
| [#8418](https://github.com/QwenLM/qwen-code/pull/8418) | `feat(core)` | **Share compression caches with OpenAI-compatible providers** — extends prefix-preserving cache sharing beyond DashScope to all OpenAI-protocol endpoints. |
| [#8274](https://github.com/QwenLM/qwen-code/pull/8274) | `feat` | **Fork from any conversation** — enables branching from earlier assistant messages (not just latest state), with safety guards for tool calls/cancellations. |
| [#8213](https://github.com/QwenLM/qwen-code/pull/8213) | `feat(serve)` | **Establish workspace runtime ownership** — authoritative 5-state runtime snapshot, monotonic epochs, work leases, bounded startup/teardown for ACP child lifecycle. |
| [#8389](https://github.com/QwenLM/qwen-code/pull/8389) | `feat(daemon)` | **Experimental Plan & Review workflow** — opt-in DAG visualization of Todos, dependencies, agent executions; blocks mutating tools until approval. |
| [#8391](https://github.com/QwenLM/qwen-code/pull/8391) | `feat(web-shell)` | **Gate Session Workflow behind `experimental.sessionWorkflow`** — default-off flag for Plan & Review in daemon WebShell sessions. |
| [#8393](https://github.com/QwenLM/qwen-code/pull/8393) | `feat(web-shell)` | **Bind plan approval to Todo revision** — carries plan ID + tool-call ID in permission metadata; resolves approval DAG only on exact match. |
| [#8414](https://github.com/QwenLM/qwen-code/pull/8414) | `fix(webui)` | **Recover complete turns after live journal truncation** — truncation markers now carry prompt ownership; SDK consumers get validated scope/limit metadata. |
| [#8180](https://github.com/QwenLM/qwen-code/pull/8180) | `feat(telemetry)` | **Track tool execution outcomes** — adds `executionStatus` (entered/succeeded) separate from terminal call status for finer-grained observability. |
| [#8332](https://github.com/QwenLM/qwen-code/pull/8332) | `feat(cli)` | **Audio bridge for attachments** — transcribes user-supplied audio via batch voice model when primary model lacks audio support; marks as untrusted. |
| [#8386](https://github.com/QwenLM/qwen-code/pull/8386) | `ci` | **Run Windows merge queue tests on ECS** — routes to validated `ecs-win` self-hosted runner with `windows-2022` fallback; preserves check names. |

## 5. Feature Request Trends
From the issue/PR landscape, three clear directions emerge:
1. **Session & Workspace Governance** — Persistent session identity across daemon entry points ([#8411](https://github.com/QwenLM/qwen-code/issues/8411)), workspace runtime ownership ([#8213](https://github.com/QwenLM/qwen-code/pull/8213)), and session recovery after truncation ([#8414](https://github.com/QwenLM/qwen-code/pull/8414)) indicate demand for enterprise-grade session management.
2. **Structured Planning & Review** — The Plan & Review workflow ([#8389](https://github.com/QwenLM/qwen-code/issues/8389), [#8391](https://github.com/QwenLM/qwen-code/pull/8391), [#8393](https://github.com/QwenLM/qwen-code/pull/8393)) moves toward gated, auditable agent execution with Todo-DAG visualization.
3. **Cross-Provider Portability** — Compression cache sharing for all OpenAI-compatible endpoints ([#8418](https://github.com/QwenLM/qwen-code/pull/8418)), audio bridging for non-audio models ([#8332](https://github.com/QwenLM/qwen-code/pull/8332)), and private ASR allowlists ([#8350](https://github.com/QwenLM/qwen-code/pull/8350)) reduce vendor lock-in.

## 6. Developer Pain Points (Recurring Themes)
- **Abort/Cancellation Handling Fragility** — Multiple issues ([#8316](https://github.com/QwenLM/qwen-code/issues/8316), [#8356](https://github.com/QwenLM/qwen-code/issues/8356), [#8398](https://github.com/QwenLM/qwen-code/issues/8398)) reveal inconsistent abort classification, lost transcript data, and UX failures on interrupt.
- **Windows/Desktop Stability** — Session auto-deletion ([#8400](https://github.com/QwenLM/qwen-code/issues/8400)), ConEmu flicker ([#8385](https://github.com/QwenLM/qwen-code/issues/8385)), and smoke test log path bugs ([#8381](https://github.com/QwenLM/qwen-code/pull/8381)) indicate Windows as a second-class platform.
- **Terminal Integration Conflicts** — Warp keybinding collision ([#8330](https://github.com/QwenLM/qwen-code/issues/8330)), broken copy shortcut ([#8317](https://github.com/QwenLM/qwen-code/issues/8317)), and rendering jitter ([#8319](https://github.com/QwenLM/qwen-code/issues/8319)) show TUI/terminal compatibility gaps.
- **Fork/Subagent Isolation Leaks** — Sibling directive inheritance ([#8326](https://github.com/QwenLM/qwen-code/issues/8326)) and background agent turn limits ([#8171](https://github.com/QwenLM/qwen-code/pull/8171)) point to incomplete concurrency boundaries.

---

*Digest generated from GitHub data (releases, issues, PRs updated 2026-08-02 → 2026-08-03). Links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-03

## 1. Today's Highlights
The v0.9.4 release train (#5135) is actively being stabilized with 77 commits ahead of main, but 15 new release-blocker bugs were filed today alone — spanning exec-policy bypasses, state migration races, MCP tool-filter gaps, and token-budget accounting errors. Concurrently, major feature work lands: a persistent Sessions sidebar (#5141), subagent `resume_from` chains (#5142), background advisor watcher (#5139), `send_later` delayed-continuation tool (#5138), and the whaleflow cached-main overlay + janitor (#5145, #5144). CI is red on main due to source-structure budget exceedance (#5150) and a stale skills-catalog fixture (#5151).

## 2. Releases
**None published in the last 24h.** The v0.9.4 release train (PR #5135) remains in progress; no tagged release yet.

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **#5123** Agent spawn surface has too many knobs — labeled builder runs read-only and self-BLOCKED | Release-blocker dogfooded live; delegates cannot execute assigned gates due to read-only tool contract mismatch | 👍1, 1 comment, author Hmbown |
| **#5161** Exec-policy deny rules evadable via single-`&` chains and subshell wrapping | Security: shell metacharacter (`&`) not split by segmenter allows `ls & rm -rf /` to bypass deny-list | 0 comments, filed today |
| **#5157** MCP ToolFilter deny/allow bypassed at call time (exact-match path & `call_tool` never check filter) | Security: tool allow/deny lists enforced on `list_tools` but not on actual invocation paths | 0 comments, filed today |
| **#5156** Workflow token_budget frozen per worker at attach — parallel fan-out can spend ~N× the ceiling | Reliability: run-level budget not enforced on admitted children; each child gets full remaining budget | 0 comments, filed today |
| **#5155** Workflow gate handoffs never consumed — every downstream task re-receives same payloads; receipts over-claim | Correctness: `LaneGateBoard.artifacts` append-only with no consume; downstream tasks see duplicate handoffs | 0 comments, filed today |
| **#5160** State migration v0→v1 not idempotent — concurrent first-open/restore fails with duplicate column | Data integrity: `ALTER TABLE ADD COLUMN` runs unconditionally gated only by `user_version==0`; races on multi-process startup | 0 comments, filed today |
| **#5159** Logout clears config for all providers but deletes keyring secret only for active provider | Security: non-active provider secrets orphaned in keyring; error swallowed with `let _` | 0 comments, filed today |
| **#5158** MCP qualified tool names with hyphens/dots un-callable (sanitized round-trip breaks) | Interop: `my-tool` → `my_tool` sanitized on qualify, but parse does not de-sanitize; exact-match fails | 0 comments, filed today |
| **#2934** Sidebar sessions panel with auto-resume and session history browsing | UX: persistent sidebar for session switching (vs. `Ctrl+R` popup); PR #5141 now open | 12 comments, 👍0, long-running |
| **#5150** Source-structure budget ratchet exceeded — CI Lint gate red on main | Release health: largest module grew 19139 > 19125 lines; aggregate owned Rust source over budget | 0 comments, blocks CI |

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|----|--------|---------|
| **#5135** | OPEN | **v0.9.4 release train** — 77 commits ahead of main; supersedes #5044; integration branch for all v0.9.4 work |
| **#5147** | OPEN | **Stack R1: runtime truth + deletions** — 17 commits on train: config-parse warnings, execpolicy fixes, memory consolidation, #5123-class fixes, docs truth |
| **#5148** | OPEN | **Stack R3: runtime P0s** — 9 commits chaining on R1: transcript escape corruption, route inheritance (#5099), roster shadowing + trust gate |
| **#5141** | OPEN | **SidebarFocus::Sessions** — dedicated sessions sidebar panel; exposes `/sidebar sessions` command; pins sessions rail exclusively |
| **#5142** | OPEN | **Subagent `resume_from` continuation chains** — new `resume_from` param on `agent_spawn` rehydrates prior subagent transcript; preserves prefix-cache affinity |
| **#5139** | OPEN | **Background advisor watcher** — opt-in advisor fires after tool-call turns, reads bounded transcript slice, emits advisory note non-blocking |
| **#5138** | OPEN | **`send_later` model-callable tool** — one-shot delayed continuation for PR watchers, release drift checks, scheduled follow-ups |
| **#5145** | OPEN | **Whaleflow cached-main overlay** — promoted notes, workflows, tests, branch heuristics, model/cache policies, prompt patches warm future runs without touching Git main |
| **#5144** | OPEN | **Whaleflow janitor** — FIFO-capped TraceStore, MemoStore TTL + size caps, OverlayStore demotion, trace compaction preserving replayability |
| **#5143** | OPEN | **i18n: promote zh-Hant to full shipped locale** — fills 750 missing keys; now complete alongside en, ja, zh-Hans, pt-BR |

## 5. Feature Request Trends
From the 26 updated issues, the strongest demand signals cluster around:
- **Session persistence & discoverability** — sidebar sessions panel (#2934), auto-resume, history browsing
- **Subagent workflow continuity** — `resume_from` chains (#425, #5142), background advisor (#3982, #5139), delayed `send_later` (#4190, #5138)
- **Multi-operator Fleet configurations** — named durable fleets scoped to operators (#5039, #5137), role-bound agent dispatch (#5046, #5136)
- **External memory / knowledge overlay** — cached-main overlay (#2977, #5145), janitor for capacity enforcement (#2978, #5144)
- **Complete i18n coverage** — promoting partial locales to full parity (#790, #5143)

## 6. Developer Pain Points
Recurring frustrations evident in today's issue burst:
- **Release-blocker density** — 15 P0 bugs filed in a single day suggests v0.9.4 integration surface is fragile; many are dogfood-found
- **Security boundaries leaking** — exec-policy bypass (#5161), MCP ToolFilter gaps (#5157), logout keyring mismatch (#5159) all point to incomplete enforcement at call sites
- **State & migration races** — non-idempotent migration (#5160), thread resume duplicating history (#5152), `persist_thread` wiping per-thread policy (#5154)
- **Budget accounting broken** — token_budget N× overspend (#5156), source-structure ratchet exceeded (#5150), fleet memory unbounded (#3885 follow-up)
- **Test environment pollution** — fleet roster tests reading real `~/.codewhale` config (#5151), CI red on main from fixture staleness (#5149)
- **UX control-flow traps** — multi-select Enter toggles instead of submits; double-Enter submits empty set (#5162)

---

*Data source: `github.com/Hmbown/CodeWhale` (DeepSeek-TUI upstream). All links point to the respective GitHub issues/PRs.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*