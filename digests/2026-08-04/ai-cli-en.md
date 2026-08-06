# AI CLI Tools Community Digest 2026-08-04

> Generated: 2026-08-04 03:22 UTC | Tools covered: 10

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

The user wants a cross-tool comparison report based on the 2026-08-04 community digests for 9 AI CLI tools. I need to analyze all the provided data and create a structured report with the 6 specified sections.

Let me first organize the data from each tool:

1. **Claude Code** (anthropics/claude-code)
   - Release: v2.1.221 (VS Code Focus view, sandbox credential masking)
   - Hot issues: 10 issues, top ones: network egress allowlist (#30112, 54 comments, 51👍), real-time steering (#30492, 60👍), Opus 4.8 confabulation (#67606), heron_brook prompt override (#80988, 33👍), sandbox regression (#79997), Stop hook verdict discarded (#83687), background agent hangs (#83705), connector attachment delay (#83694), RemoteTrigger blocks (#82090), terminal corruption (#83701)
   - PRs: 1 updated (#83374 - docs)
   - Pain points: silent policy overrides, network egress opacity, background agent fragility, model regression without rollback, sandbox/permission regressions, cost/billing blind spots

2. **OpenAI Codex** (openai/codex)
   - Releases: 2 alpha releases (rust-v0.147.0-alpha.6, rust-v0.147.0-alpha.1.2)
   - Hot issues: 10 issues, top: Windows freezes (#20214, 88 comments, 78👍), ask_user_question tool (#9926, 48👍), weekly limit regression (#33685), tabbed interface (#12098, 55👍), WSL custom pets (#20730, 23👍), memory growth (#21134), unbounded session state (#25779), multi-account (#12029, 62👍), handler loss (#28080), slow thread switching (#29187)
   - PRs: 10 merged (all by copyberry[bot] - internal refactor sprint)
   - Pain points: Windows Desktop instability, unbounded memory/context, rate-limit opacity, WSL/Windows path issues, multi-agent V2/Luna bugs, MCP OAuth refresh, session state corruption

3. **Gemini CLI** (google-gemini/gemini-cli)
   - Releases: None in last 24h
   - Hot issues: 10 issues, top: subagent false success (#22323, 12 comments), generalist agent hangs (#21409, 8 comments, 8👍), robust evals EPIC (#24353), AST-aware tooling (#22745), skill adoption (#21968), Auto Memory retries (#26522), Auto Memory redaction after model sees secrets (#26525), shell command stuck (#25166), browser agent lock recovery (#22232), Wayland browser subagent (#21983)
   - PRs: 10 open (security fixes, model configs, context corruption fixes, extension hardening)
   - Pain points: agent hangs/silent failures, false success signals, security/privacy leaks, context corruption, extension fragility, tool explosion, terminal UX

4. **GitHub Copilot CLI** (github/copilot-cli)
   - Releases: v1.0.78 (stable), v1.0.78-3 (pre-release) - timeline headers, plugin auto-update, /new-worktree command
   - Hot issues: 10 issues, top: project-scoped plugins (#1665, 18👍), multiple BYOK models (#3282, 20👍), /model picker for local models (#3709, 20👍), skill truncation at 32 (#1464, 7👍), WSL2 Ctrl+H bug (#4328), toggle plugins (#2714, 11👍), custom themes (#2830, 6👍), sandbox config (#4298), MCP registry 403 (#4346), accidental compact (#4353)
   - PRs: None updated
   - Pain points: Windows/WSL2 keybindings, model switching rigidity, skill discoverability cap, session durability, CI/CD integration gaps, accessibility/UI limitations

5. **Kimi Code CLI** (MoonshotAI/kimi-cli)
   - Releases: None
   - Hot issues: 3 issues - Memory System (#1283, 15 comments), Web UI session switch hang (#2573), CLI stream deadlock Windows (#2582)
   - PRs: 8 (6 open, 2 closed) - encoding fixes, hook execution, shell pipes, ACP protocol, dependency bumps
   - Pain points: session state loss, Web UI session switching, CLI Windows deadlock, legacy console encoding, hook leakage, shell background job hangs

6. **OpenCode** (anomalyco/opencode)
   - Release: v1.18.12 (Azure GPT-5.5+ fix, desktop composer lag fix)
   - Hot issues: 10 issues, top: model loops (#16218, 19 comments), "model not supported" Copilot Claude (#12789, 17 comments, 10👍), mouse capture breaks tmux (#7926, 23👍), all Copilot models unusable (#20954, 9 comments), $ triggers LaTeX (#15892, 9 comments, 5👍), subagent model variants ignored (#21632, 7 comments), --attach/--model conflict (#29968), startup error (#30668), Desktop bootstrap fail (#30751), @file mentions fail symlinked dirs (#29080, 3👍)
   - PRs: 10 notable (session HTTP middleware, per-MCP trust, CN localization, 11 new locales, xAI OAuth, retry cap, web fork full session, bounded event log)
   - Pain points: provider reliability, session bootstrap failures, terminal multiplexer incompatibility, markdown/TUI rendering bugs, Windows Desktop issues, subagent/config regression

7. **Pi** (badlogic/pi-mono / earendil-works/pi)
   - Releases: None
   - Hot issues: 10 issues, top: WSL login hangs (#6187, 20 comments), compaction fails Copilot Enterprise (#6768, 17 comments, 18👍), missing x-client-request-id (#7161, 9 comments), stalls after compaction (#7020, 9 comments), Windows pain points meta (#7547, 6 comments), Kitty backspace (#7130, 5 comments), OSC 8 hyperlink truncation (#7399, 5 comments), find corrupts Windows paths (#6104, 4 comments), iTerm2 inline images (#7465, 4 comments), taskkill ENOENT Node 24 (#6596, 4 comments)
   - PRs: 10 notable (Harness v2 session storage, bounded model catalog, OpenAI background responses, Cortecs provider, find path fix, generic sampling params, durable server backend, Anthropic fallback, symlink session discovery, JSON streaming delta-only)
   - Pain points: WSL auth deadlock, JSON mode OOM, compaction reliability, Windows find tool broken, terminal protocol gaps, TUI scalability, Node 24 compatibility

8. **Qwen Code** (QwenLM/qwen-code)
   - Releases: v0.21.5 (failed quality job), v0.21.4-nightly, v0.21.4 (Web Shell desktop ready)
   - Hot issues: 6 issues - deterministic tool boundaries (#8102, 14 comments), cancelled file tools mutate FS (#8493, 5 comments), provider update prompt repeats (#8504, 3 comments), goal completion locked by truncation (#8458, 3 comments), fleet dashboard (#7167), release failed (#8483)
   - PRs: 10 open (self-hosted ECS runners, retire dry chunks, evidence images, persist provider version, clear tool results low watermark, channel sessions Web Shell, Windows merge-queue, batch setup calls, Git diff sources, hook trust boundaries)
   - Pain points: release workflow fragility, cancellation ≠ rollback, config update noise, evidence truncation, CI queue times, review latency, hook trust-boundary gaps

9. **DeepSeek TUI** (Hmbown/DeepSeek-TUI / CodeWhale)
   - Releases: None (v0.9.4 train in progress, 77 commits)
   - Hot issues: 4 issues - Anthropic-compat provider 400 error (#4978, 4 comments), no stop for autonomous agents (#4959, 7 comments), Constitution translation debate (#4949, 7 comments), settings spine architecture (#5226)
   - PRs: 12 notable (v0.9.4 train, Runtime API: goals, MCP, memory, skills, verifier receipts, clippy cleanup, ratatui pin, Model Studio reasoning, Minimax China, ACP tool execution, rail unification)
   - Pain points: Anthropic-compat instability, no runaway agent escape, TUI startup races, manual TOML editing, localization ambiguity, Windows path issues

10. **Grok Build** (xai-org/grok-build): No activity

Now I need to create the comparison report with the 6 sections.

Let me build the Activity Comparison table first with counts I can extract:

| Tool | Issues (Hot/Active) | PRs (Updated) | Release Status |
|------|---------------------|---------------|----------------|
| Claude Code | 10 hot issues (54-0 comments) | 1 | v2.1.221 released |
| OpenAI Codex | 10 hot issues (88-4 comments) | 10 merged | 2 alpha releases |
| Gemini CLI | 10 hot issues (12-4 comments) | 10 open | None |
| GitHub Copilot CLI | 10 hot issues (18-0 👍) | 0 | v1.0.78 + pre-release |
| Kimi Code CLI | 3 hot issues (15-0 comments) | 8 (6 open, 2 closed) | None |
| OpenCode | 10 hot issues (19-3 comments) | 10 notable | v1.18.12 released |
| Pi | 10 hot issues (20-4 comments) | 10 notable | None |
| Qwen Code | 6 hot issues (14-2 comments) | 10 open | v0.21.5 (failed), v0.21.4 |
| DeepSeek TUI | 4 hot issues (7-4 comments) | 12 notable | v0.9.4 train (77 commits) |
| Grok Build | 0 | 0 | No activity |

Now for Shared Feature Directions - I need to find common themes across multiple tools:

1. **Human-in-the-loop / Interactive steering** - Claude Code (#30492), OpenAI Codex (#9926), GitHub Copilot CLI (session control), OpenCode (session management), DeepSeek TUI (#4959 stop command)
2. **Multi-account / Multi-provider support** - Claude Code (delegation policy), OpenAI Codex (#12029, #3282), GitHub Copilot CLI (#3282, #3709), OpenCode (#12789, #20954), Pi (Cortecs provider), Qwen Code (provider update), DeepSeek TUI (Minimax, Model Studio)
3. **Background agents / Subagent reliability** - Claude Code (#83366, #83694, #83705), Gemini CLI (#22323, #21409), OpenCode (#21632), DeepSeek TUI (goal lifecycle), Pi (Harness v2)
4. **Session durability / Context management** - Claude Code (context corruption), OpenAI Codex (#25779, #36642), Gemini CLI (#28672, #28671), GitHub Copilot CLI (#4353, #4078), OpenCode (#37054, #36710), Pi (#7503, #7396), Qwen Code (#8458, #8464)
5. **Windows/WSL compatibility** - Claude Code (#79997, #83701), OpenAI Codex (#20214, #20730, #28080, #29187), GitHub Copilot CLI (#4328, #2286), Kimi Code CLI (#2577, #2582, #2530), OpenCode (#29932, #30517), Pi (#6104, #6187, #6596, #7547), Qwen Code (#8386)
6. **Security / Trust boundaries** - Claude Code (sandbox masking, heron_brook), OpenAI Codex (MCP OAuth), Gemini CLI (#28546, #28481, #26525), GitHub Copilot CLI (#4298), OpenCode (#40125), Pi (Harness v2), Qwen Code (#8102, #8396), DeepSeek TUI (settings spine)
7. **Terminal/TUI rendering fixes** - Claude Code (#83701), OpenAI Codex (memory growth), GitHub Copilot CLI (themes, tables), OpenCode (#15892, #7926), Pi (#7130, #7399, #7465), DeepSeek TUI (#5192, #5228)
8. **Model version control / Rollback** - Claude Code (#83683, #67606), OpenAI Codex (Luna vs Sol), GitHub Copilot CLI (#3282), OpenCode (#21632), Qwen Code (provider update)
9. **Plugin/Extension ecosystem** - Claude Code (hooks), OpenAI Codex (MCP, Agent Plugins), Gemini CLI (skills), GitHub Copilot CLI (#1665, #2714), OpenCode (#40327, #40109), Pi (Cortecs), DeepSeek TUI (ACP, skills)
10. **Internationalization/Localization** - OpenCode (#40351, #40362), DeepSeek TUI (#4949), Qwen Code (DingTalk/Feishu/WeCom)

Differentiation Analysis - key differences:

- **Claude Code**: Enterprise-focused, strong on sandbox/security, VS Code integration, delegation policy, but suffering from silent policy overrides and network egress opacity
- **OpenAI Codex**: Heavy internal refactor sprint (10 PRs by bot), Windows Desktop instability major pain point, strong on multimodal (audio), multi-agent V2 emerging
- **Gemini CLI**: Evaluation infrastructure investment (76 evals), AST-aware tooling focus, Auto Memory system, browser agent, but agent autonomy low
- **GitHub Copilot CLI**: GitHub ecosystem integration, worktree support, plugin auto-update, but rigid model switching, skill cap, Windows keybinding issues
- **Kimi Code CLI**: Memory system as top request, Web UI preview, Windows CLI deadlock, ACP protocol focus, smaller community
- **OpenCode**: High velocity (45 issues, 50 PRs, 1 release), strong terminal multiplexer focus, per-MCP trust, internationalization push, but provider reliability issues
- **Pi**: Harness v2 architecture (session storage/backend), JSON streaming optimization, Cortecs provider, durable server backend, WSL auth deadlock
- **Qwen Code**: Electron→Tauri migration, Web Shell as desktop app, trust-boundary security focus, self-hosted CI, release workflow fragility
- **DeepSeek TUI**: Runtime API completeness (goals, MCP, memory, skills), ACP protocol maturity, provider ecosystem expansion (China), v0.9.4 major release train, localization sensitivity
- **Grok Build**: Inactive

Community Momentum & Maturity:
- Highest activity: OpenCode (45 issues, 50 PRs, 1 release in 24h), OpenAI Codex (10 merged PRs, 2 releases), Pi (10 notable PRs)
- Most community engagement: Claude Code (#30112 54 comments, 51👍), OpenAI Codex (#20214 88 comments, 78👍), OpenCode (#7926 23👍)
- Rapid iteration: OpenCode, OpenAI Codex (alpha releases), DeepSeek TUI (77-commit train), Qwen Code (nightly + stable)
- Enterprise signals: Claude Code (network egress, sandbox), GitHub Copilot CLI (CI/CD, managed settings), Qwen Code (trust boundaries), Pi (Harness v2 server)
- Maturity indicators: GitHub Copilot CLI (v1.0.78 stable), OpenCode (v1.18.12), Qwen Code (v0.21.x), Claude Code (v2.1.x) vs alpha/preview: OpenAI Codex (alpha), Kimi Code (preview Web

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-04)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| Rank | PR | Skill / Focus | Functionality | Discussion Highlights | Status |
|------|-----|---------------|---------------|----------------------|--------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: run_eval.py fix** | Fixes `run_eval.py` reporting 0% recall for all skill descriptions; addresses Windows stream reading, trigger detection, and parallel workers | Core blocker for description-optimization loop; 10+ independent reproductions of the 0% recall bug (#556) | **Open** (updated 2026-06-23) |
| 2 | [#556](https://github.com/anthropics/skills/issues/556) | **run_eval.py trigger detection failure** (Issue) | `claude -p` never triggers skills/commands → 0% trigger rate across all queries | 12 comments, 7 👍; root cause for #1298, #1323, #1169 | **Open** |
| 3 | [#1323](https://github.com/anthropics/skills/pull/1323) | **skill-creator: trigger-eval detection** | `run_single_query` misses real skill name, bails on first non-Skill tool → recall=0% | Directly blocks `run_loop.py` optimization; tied to #556 | **Open** (updated 2026-06-25) |
| 4 | [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) / [#1061](https://github.com/anthropics/skills/issues/1061) | **Windows compatibility for skill-creator** | Fixes `claude.cmd` PATHEXT, cp1252 encoding, `select()` on pipes | 3 related items; blocks Windows contributors entirely | **Open** |
| 5 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Typographic quality control: prevents orphan/widow lines, numbering misalignment in AI-generated docs | Addresses universal pain point in generated documents; 9-day active discussion | **Open** (updated 2026-03-13) |
| 6 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Mechanical file verification + 4-dimension reasoning quality gate (v1.3.0); universal across projects/stacks | Novel "pre-delivery audit" paradigm; recent active discussion | **Open** (updated 2026-07-02) |
| 7 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing skill: Trophy model, AAA, React Testing Library, integration/E2E, contract, property-based | Broad coverage of modern testing stack; 30-day discussion window | **Open** (updated 2026-04-21) |
| 8 | [#492](https://github.com/anthropics/skills/issues/492) | **Security: namespace trust boundary** (Issue) | Community skills distributed under `anthropic/` namespace → impersonation risk | **Highest engagement: 43 comments, 2 👍**; critical supply-chain concern | **Open** (updated 2026-07-20) |

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence | Representative Items |
|-------|----------|----------------------|
| **Skill distribution & trust infrastructure** | 43 comments on namespace impersonation; 16 comments on org-wide sharing; 9 👍 on duplicate plugin content | [#492](https://github.com/anthropics/skills/issues/492), [#228](https://github.com/anthropics/skills/issues/228), [#189](https://github.com/anthropics/skills/issues/189) |
| **skill-creator toolchain reliability** | 3 Issues + 5 PRs on `run_eval.py`/`run_loop.py` failures; Windows blockers; 0% recall systemic | [#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061) |
| **Quality gates & self-verification** | Proposals for reasoning pipelines, skill analyzers, self-audit skills | [#1385](https://github.com/anthropics/skills/issues/1385), [#83](https://github.com/anthropics/skills/pull/83), [#1367](https://github.com/anthropics/skills/pull/1367) |
| **Document/format interoperability** | ODT, DOCX, PDF, typography skills proposed; case-sensitivity & corruption fixes | [#486](https://github.com/anthropics/skills/pull/486), [#514](https://github.com/anthropics/skills/pull/514), [#538](https://github.com/anthropics/skills/pull/538), [#541](https://github.com/anthropics/skills/pull/541) |
| **MCP / API integration** | Requests to expose Skills as MCPs; Bedrock compatibility; `claude-api` token explosion | [#16](https://github.com/anthropics/skills/issues/16), [#29](https://github.com/anthropics/skills/issues/29), [#1487](https://github.com/anthropics/skills/issues/1487) |
| **Agent governance & safety** | Agent-governance proposal; SharePoint security concerns | [#412](https://github.com/anthropics/skills/issues/412), [#1175](https://github.com/anthropics/skills/issues/1175) |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

| PR | Skill | Why It’s High-Potential | Latest Activity |
|----|-------|------------------------|-----------------|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Universal quality gate: mechanical verification → reasoning audit; addresses hallucination/delivery gaps | 2026-07-02 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Solves identified lifecycle gap: planning artifacts accumulate with no cleanup; community-framed problem | 2026-07-27 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Self-contained color expertise (naming systems, spaces, accessibility, gradients); broad design/dev applicability | 2026-07-21 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing stack coverage; fills gap in current skills collection | 2026-04-21 |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Universal need: every generated document suffers orphan/widow/numbering issues; no existing skill covers this | 2026-03-13 |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | Retro game dev via MCP; niche but demonstrates MCP+skill composition pattern | 2026-07-15 |
| [#486](https://github.com/anthropics/skills/pull/486) | **odt** | OpenDocument create/fill/read/convert; ISO standard format support | 2026-04-14 |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | Meta-skills for evaluating other skills; 5-dimension quality + security scoring | 2026-01-07 |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for a trustworthy, cross-platform skill authoring toolchain (`skill-creator`/`run_eval.py`) and a secure distribution namespace — without which new skills cannot be reliably created, validated, or safely consumed.**

---

# Claude Code Community Digest — 2026-08-04

## Today's Highlights
- **v2.1.221** shipped with a new VS Code **Focus view** (`Ctrl+Alt+F`) that collapses tool activity into per-turn summaries with a live running-tool indicator, plus a `mode: "mask"` option for sandbox credential files on Linux.
- Community attention is concentrated on **network egress allowlist failures** blocking custom domains (54 comments, 51 👍), **Opus 4.8 confabulation bugs** in long sessions, and a **silent system-prompt injection** (`heron_brook`) overriding delegation policy for Opus 5.
- Several regressions in **sandbox/background-agent workflows** (tmux pane creation hangs, Stop hook verdicts dropped, connector attachment delays) surfaced in the last 48h, indicating instability in the new agent orchestration layer.

---

## Releases

### v2.1.221
| Change | Details |
|--------|---------|
| **VS Code Focus view** | New chat-menu toggle (`Ctrl+Alt+F` / `Claude Code: Toggle Focus view`) hides tool activity behind expandable per-turn summaries with a live running-tool indicator. |
| **Sandbox credential masking** | Added `mode: "mask"` for sandbox credential files on Linux (prevents secrets from appearing in plaintext on disk). |

[Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.221)

---

## Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#30112](https://github.com/anthropics/claude-code/issues/30112) | **Cowork network egress allowlist blocks custom domains (403)** | Breaks enterprise workflows that rely on private/allowlisted endpoints; 54 comments, 51 👍 — highest engagement in dataset. | 🔥 Critical for teams using private APIs, artifact registries, or internal services. |
| [#30492](https://github.com/anthropics/claude-code/issues/30492) | **Real-time steering: priority message channel mid-execution** | Enables human-in-the-loop redirection during long pipelines/refactors; 60 👍, 31 comments — strong demand for interactive control. | 🎯 High-value UX for complex multi-step workflows. |
| [#67606](https://github.com/anthropics/claude-code/issues/67606) | **Opus 4.8 confabulates user messages & fabricates tool facts** | Model hallucinates entire conversation history and tool outputs in long sessions (JSONL-verified); undermines trust in autonomous agents. | ⚠️ 15 comments, 4 👍 — severe reliability regression. |
| [#80988](https://github.com/anthropics/claude-code/issues/80988) | **`heron_brook` prompt silently overrides delegation policy for Opus 5** | System prompt injects "Do not call AgentTool unless user requested" with no opt-out, breaking configured delegation; 33 👍, 15 comments. | 🚨 Policy override without visibility/control — governance concern. |
| [#79997](https://github.com/anthropics/claude-code/issues/79997) | **Sandbox regression: `bwrap: Can't mkdir /opt/.claude` on non-root installs** | Ancestor-walk denyWrite mountpoints fail-closed under root-owned dirs; kills every Bash tool call. Separate from #79606. | 🐛 4 comments, 2 👍 — blocks CLI usage on shared/managed hosts. |
| [#83687](https://github.com/anthropics/claude-code/issues/83687) | **Stop hook exit-2 verdict silently discarded with pending ScheduleWakeup** | Hook enforcement disappears when turn ends on tool result + wakeup; no `stop_hook_summary` logged. Silent policy bypass. | 🔴 New (08-04), 2 comments — critical for compliance/guardrail users. |
| [#83705](https://github.com/anthropics/claude-code/issues/83705) | **Background agent thread hangs on AskUserQuestion (ignores `tempo`/`block`)** | Attach guard checks only `state`, not `tempo`/`block`; indefinite hang requiring terminal kill. | 🔴 New (08-04), 1 comment — breaks background agent UX. |
| [#83694](https://github.com/anthropics/claude-code/issues/83694) | **claude.ai connectors not attached until first inbound message** | Remote MCP tools unavailable in autonomous background sessions until user message arrives; breaks scheduled/triggered workflows. | 🔴 New (08-04), 1 comment — impacts RemoteTrigger/scheduler users. |
| [#82090](https://github.com/anthropics/claude-code/issues/82090) | **RemoteTrigger egress blocks legitimate domains (Openverse, Wikimedia)** | 4+ days of consistent blocks on open-license image banks; same root cause family as #30112. | 🌐 1 comment — affects content-automation pipelines. |
| [#83701](https://github.com/anthropics/claude-code/issues/83701) | **Terminal corruption + crosshair cursor after trust dialog (Kitty DECSET 2031)** | Kitty rejects unsupported screen mode; display corruption on folder-trust transition in v2.1.221. | 🖥️ 1 comment — terminal-compat regression in latest release. |

---

## Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#83374](https://github.com/anthropics/claude-code/pull/83374) | `docs(plugin-dev): document MessageDisplay streaming semantics` | Open | Adds missing `MessageDisplay` hook event to bundled Hook Development skill docs (trigger description, event guidance, quick-reference table). |

*Note: Only 1 PR updated in the last 24h — light contribution day.*

---

## Feature Request Trends (from Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Interactive steering / human-in-the-loop control** | [#30492](https://github.com/anthropics/claude-code/issues/30492) (priority channel), [#10621](https://github.com/anthropics/claude-code/issues/10621) (double-ESC in Vim Plan Mode) | 60+ 👍 combined — developers want *mid-execution* intervention, not just pre/post. |
| **Desktop app diff/UX polish** | [#61280](https://github.com/anthropics/claude-code/issues/61280) (auto-expand diffs), [#81063](https://github.com/anthropics/claude-code/issues/81063) (custom sidebar project names) | 20+ 👍 — desktop parity with CLI workflow expectations. |
| **Token/scope granularity for automation** | [#81015](https://github.com/anthropics/claude-code/issues/81015) (read-only `usage:read` scope for `setup-token`) | Security/least-privilege demand for CI/CD integrations. |
| **Background agent reliability** | [#83366](https://github.com/anthropics/claude-code/issues/83366) (tmux pane spawn), [#83694](https://github.com/anthropics/claude-code/issues/83694) (connector attach), [#83705](https://github.com/anthropics/claude-code/issues/83705) (AskUserQuestion hang) | Cluster of 08-02/08-04 reports — orchestration layer needs hardening. |
| **Model access / variant control** | [#83683](https://github.com/anthropics/claude-code/issues/83683) (restore Opus 4.8 access) | Frustration over forced model upgrades without opt-out. |

---

## Developer Pain Points (Recurring Frustrations)

1. **Silent policy/behavior overrides** — System prompts (`heron_brook`), hook failures (#82323, #75081), and Stop hook verdicts (#83687) disappearing without logs or opt-outs erode trust in guardrails.
2. **Network egress allowlist opacity** — Custom domains blocked with generic 403s (#30112, #82090); no diagnostic visibility into which rule triggered or how to audit.
3. **Background agent orchestration fragility** — tmux pane creation, connector attachment, AskUserQuestion state machine, and ScheduleWakeup interactions produce silent hangs or dropped events (#83366, #83694, #83705, #83687).
4. **Model regression without rollback path** — Opus 4.8 confabulation (#67606) and forced Opus 5 migration (#83683) leave teams stuck on broken versions.
5. **Sandbox/permission regressions on non-standard hosts** — Root-owned dir installs, WSL2, Kitty terminal, Windows tmux — edge cases breaking core tool execution (#79997, #83701, #83366).
6. **Cost/billing transition blind spots** — Subscription→API switch lacks budget enforcement (#70225), skill-creator burns 50% window in minutes (#71633), Max usage accounting bugs (#82506).

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-08-04 00:00 UTC. Links point to live GitHub issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-04

---

## 1. Today's Highlights

Two alpha Rust CLI releases (0.147.0-alpha.6 and 0.147.0-alpha.1.2) landed overnight. The issue tracker is dominated by Windows Desktop stability complaints—freezes, memory bloat on long threads, and slow thread switching—while the community continues to push for multi-account support, tabbed parallel sessions, and structured user-question tooling. On the PR side, the team merged a wave of internal hardening: dual-WebSocket transport for code mode, MCP conformance regression gates, SQLite-backed session archives, and a new audio utility crate.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.147.0-alpha.6` | Alpha | Incremental alpha; no changelog published yet. |
| `rust-v0.147.0-alpha.1.2` | Alpha | Patch on the alpha.1 branch; likely hotfixes for the 0.147 series. |

> **Links:** [rust-v0.147.0-alpha.6](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6) · [rust-v0.147.0-alpha.1.2](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.1.2)

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#20214](https://github.com/openai/codex/issues/20214) | **Codex App frequently freezes/stutters on Windows 11** | Core usability blocker on the most popular desktop OS; 88 comments, 78 👍 | 🔥 **Highest engagement** — users report 32 GB RAM / Ryzen 5 still stuttering |
| [#9926](https://github.com/openai/codex/issues/9926) | **Interactive `ask_user_question` tool (tabbed questionnaire UI)** | Would replace fragile free-form chat for clarifications; 48 👍 | Strong demand for structured agent↔human hand-off |
| [#33685](https://github.com/openai/codex/issues/33685) | **Weekly limit draining like the old 5-hour limit** | Rate-limit regression after 5-hr bucket removal; 25 comments | Plus/Pro users seeing unexpected quota burn |
| [#12098](https://github.com/openai/codex/issues/12098) | **Tabbed interface for parallel chat sessions (VS Code/Cursor)** | 55 👍 — top UX ask for IDE extension; current chat switching is multi-step | Directly impacts daily workflow efficiency |
| [#20730](https://github.com/openai/codex/issues/20730) | **Custom pets fail to load in WSL (path normalization)** | Blocks custom agent configs on Windows+WSL; 23 👍 | Recurring Windows/WSL filesystem friction |
| [#21134](https://github.com/openai/codex/issues/21134) | **Desktop unusable on long threads: app-server/renderer memory + TRACE log churn** | Meta-performance bug; memory grows unbounded, logs flood | 15 comments, confirmed by multiple Pro users |
| [#25779](https://github.com/openai/codex/issues/25779) | **Unbounded session/turn state causes freezes, context bloat, lost turn control** | Root-cause umbrella for #21134; 8 👍 | Architectural — needs session state pruning strategy |
| [#12029](https://github.com/openai/codex/issues/12029) | **Ability to use more than one account (personal + corporate)** | 62 👍 — #1 auth pain point; blocks BYOD / multi-org workflows | Long-standing, cross-surface (CLI, Desktop, IDE) |
| [#28080](https://github.com/openai/codex/issues/28080) | **Desktop thread tools intermittently lose handlers (`No handler registered`)** | Breaks tool-calling mid-session on Windows; 12 comments | Silent failure mode, hard to debug |
| [#29187](https://github.com/openai/codex/issues/29187) | **Codex Desktop thread switching consistently slow on Windows** | 10 comments, 4 👍 — compounds #20214 frustration | Users avoid switching threads entirely |

---

## 4. Key PR Progress (10 Notable Merges)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#36812](https://github.com/openai/codex/pull/36812) | **Add dual-WebSocket transport for code mode** | Architecture | Prevents large nested-tool callbacks from blocking unrelated session ops |
| [#36810](https://github.com/openai/codex/pull/36810) | **Add MCP client conformance regression gates** | Quality/Testing | Runs pinned official MCP suite across protocol versions, transports, OAuth |
| [#36809](https://github.com/openai/codex/pull/36809) | **Prefer state DB for `exec resume --last`** | Performance | Avoids scanning all rollout files; faster, reliable session resume |
| [#36808](https://github.com/openai/codex/pull/36808) | **Prefer SQLite names for local session archive commands** | Data Integrity | Archive/delete/unarchive now resolve via SQLite first, then rollout fallback |
| [#36807](https://github.com/openai/codex/pull/36807) | **Extract audio preparation into utility crate (`codex-utils-audio`)** | Modularity | Canonical audio input handling + token estimation; shared across surfaces |
| [#36815](https://github.com/openai/codex/pull/36815) | **Identify agents by name in token budget context** | Multi-agent | `<context_window>` now emits canonical agent path (`/root`, `/subagent/...`) |
| [#36811](https://github.com/openai/codex/pull/36811) | **Honor per-environment login shell policy** | Security/UX | Login shell allowed only when env policy permits; surfaced to shell tools |
| [#36800](https://github.com/openai/codex/pull/36800) | **Avoid reinjecting permissions after command approvals** | Performance | Tracks approved prefixes separately; stops full permissions blob re-send |
| [#36796](https://github.com/openai/codex/pull/36796) | **Add Agent Plugins MCP config parsing** | Extensibility | Translates `mcp.json` → Codex MCP config; supports `PLUGIN_ROOT/DATA` expansion |
| [#36793](https://github.com/openai/codex/pull/36793) | **Terminate timed-out Git process trees** | Reliability | Unix process groups / Windows Job Objects ensure clean Git metadata timeout cleanup |

> All PRs above were authored by `copyberry[bot]` and merged 2026-08-03/04 — indicative of a heavy internal refactor/reliability sprint.

---

## 5. Feature Request Trends (Distilled from Issues)

1. **Parallelism & Multitasking** — Tabbed chat sessions ([#12098](https://github.com/openai/codex/issues/12098), 55 👍), multi-account ([#12029](https://github.com/openai/codex/issues/12029), 62 👍), and sub-agent orchestration ([#36294](https://github.com/openai/codex/issues/36294)) all point to developers running *multiple concurrent Codex workflows* and needing first-class isolation/switching.
2. **Structured Human-in-the-Loop** — The `ask_user_question` tool ([#9926](https://github.com/openai/codex/issues/9926), 48 👍) signals a shift from "chat the agent" to "agent asks constrained questions."
3. **Rate-Limit Transparency** — Three issues ([#33685](https://github.com/openai/codex/issues/33685), [#32791](https://github.com/openai/codex/issues/32791), [#36801](https://github.com/openai/codex/issues/36801)) show confusion over quota accounting post-5-hr-bucket removal; users want per-model, per-session visibility.
4. **Cross-Platform Parity** — WSL path fixes ([#20730](https://github.com/openai/codex/issues/20730)), Windows sandbox helpers ([#28457](https://github.com/openai/codex/issues/28457)), and macOS session restore ([#34453](https://github.com/openai/codex/issues/34453)) indicate Desktop/CLI parity is still a work in progress.
5. **Audio/Multimodal Workflows** — New issue [#36819](https://github.com/openai/codex/issues/36819) (Arabic audio → Excel) plus the merged audio utility crate ([#36807](https://github.com/openai/codex/pull/36807)) suggest growing multimodal expectations.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows Desktop instability** | Freezes (#20214), slow thread switch (#29187), handler loss (#28080), orphaned processes (#35393) | 5+ issues, 100+ combined comments |
| **Unbounded memory/context growth on long sessions** | App-server/renderer bloat (#21134), meta-bug (#25779), auto-compaction discarding history (#36642) | 3 high-profile issues, Pro users blocked |
| **Rate-limit opacity & regression** | Weekly limit burning at 5-hr speed (#33685), 5-hr bucket gone (#32791), Luna vs Sol parity (#36801) | 3 issues updated today |
| **WSL / Windows path & sandbox failures** | Custom pets (#20730), sandbox helper not found (#28457), spawn_agent path issues | Persistent since early 2026 |
| **Multi-agent V2 / Luna model integration bugs** | `spawn_agent` rejects Luna ([#34700](https://github.com/openai/codex/issues/34700), [#34964](https://github.com/openai/codex/issues/34964)), V2 parent filters Luna as V1 ([#36294](https://github.com/openai/codex/issues/36294)), child stalls ([#36826](https://github.com/openai/codex/issues/36826), [#36012](https://github.com/openai/codex/issues/36012)) | 5 issues in 2 weeks — new runtime surface |
| **MCP OAuth token refresh breaks after expiry** | RFC 8707 `resource` param omitted ([#33403](https://github.com/openai/codex/issues/33403)) | Blocks long-running authenticated MCP servers |
| **Session state / index corruption** | Full Access → per-action revert on restart ([#34453](https://github.com/openai/codex/issues/34453)), `exec resume` doesn't update Desktop UI ([#28259](https://github.com/openai/codex/issues/28259)), thread opens on early history ([#36828](https://github.com/openai/codex/issues/36828)) | Cross-surface sync gaps |

---

*Digest generated from GitHub data as of 2026-08-04 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-04

## 1. Today's Highlights
No new releases shipped in the last 24 hours. Development focus is heavily concentrated on **agent reliability** (subagent hangs, turn-limit recovery, skill adoption) and **Auto Memory robustness** (indefinite retries, secret redaction, patch validation). A batch of PRs hardens extension download streams, adds Gemini 3.6 Flash / 3.5 Flash-Lite model configs, and fixes context-corruption bugs around `/compress` and quota fallbacks.

## 2. Releases
*None in the last 24 h.*

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports `GOAL` success after hitting `MAX_TURNS`** | Masks real failures; downstream tooling trusts false success. | 12 comments, 2 👍 — P1, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks all deferred work; workaround is disabling subagents entirely. | 8 comments, 8 👍 — P1, `status/need-retesting` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations (EPIC)** | 76 behavioral evals across 6 models need stabilization for CI trust. | 7 comments — P1, `aiq/eval_infra` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping (EPIC)** | Could cut turns & token noise via precise method-bound reads. | 7 comments, 1 👍 — P2, `kind/feature` |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini rarely uses custom skills/sub-agents autonomously** | Reduces value of skill system; requires explicit prompting. | 6 comments — P2 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions forever** | Wastes quota & compute; no back-off or quarantine. | 5 comments — P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory redaction happens *after* model sees secrets** | Security gap; logs may also leak raw transcripts. | 4 comments — P2, `area/security` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell commands stick at “Waiting input” after completion** | Frequent UX breakage on trivial commands (`mkdir`, etc.). | 4 comments, 3 👍 — P1, `effort/medium` |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22322) | **Browser agent needs automatic lock/session recovery** | Persistent profile mode fails fast on orphaned locks. | 4 comments — P3, `kind/feature` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux/Wayland users blocked from browser automation. | 4 comments, 1 👍 — P1, `agent/browser` |

## 4. Key PR Progress (Top 10 by Scope & Risk)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#28676](https://github.com/google-gemini/gemini-cli/pull/28676) | Forward termination signals to relaunched child process | Prevents orphaned children on `kill -TERM`. | Open |
| [#28546](https://github.com/google-gemini/gemini-cli/pull/28546) | **Security**: Strip `Authorization` header for `GEMINI_API_KEY` auth | Fixes 401 `ACCESS_TOKEN_TYPE_UNSUPPORTED`. | Open (P1) |
| [#28549](https://github.com/google-gemini/gemini-cli/pull/28549) | MCP Plan Mode: disclose read-only is a *server claim* | Stops blind trust of `readOnlyHint`. | Open |
| [#28657](https://github.com/google-gemini/gemini-cli/pull/28657) / [#28663](https://github.com/google-gemini/gemini-cli/pull/28663) | Harden `fetchJson` against malformed JSON & stream failures | Stops extension crashes on truncated GitHub responses. | Open (P2) |
| [#28673](https://github.com/google-gemini/gemini-cli/pull/28673) | Add **Gemini 3.6 Flash** & **3.5 Flash-Lite** model configs | New aliases, capabilities (`thinking`, `multimodalToolUse`). | Open |
| [#28671](https://github.com/google-gemini/gemini-cli/pull/28671) | Fix context corruption & quota-fallback “autocomplete” behavior | Defensive history hardening + last-mile protection. | Open |
| [#28658](https://github.com/google-gemini/gemini-cli/pull/28658) | Delay voice recording until transcription provider ready | Avoids recording against dead Whisper/Live socket. | Open (P2) |
| [#28660](https://github.com/google-gemini/gemini-cli/pull/28660) | SDK `sendStream`: survive malformed tool arguments | Structured `functionResponse` errors instead of crashes. | Open (P2) |
| [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) | Repair `/compress` session reload & quota-fallback tool loss | Two independent context-corruption fixes. | Open |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | **Security**: Refresh MCP OAuth tokens with stored client ID | Stops credential wipe & forced re-auth on refresh. | Open (P1) |

## 5. Feature Request Trends
1. **AST-aware tooling** — Precise code navigation (read method bounds, symbol search) to reduce turns & token waste ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
2. **Agent self-awareness & autonomy** — Model should invoke skills/sub-agents without explicit prompting ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) and know its own CLI flags/hotkeys ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).
3. **Observability for subagents** — Shareable subagent trajectories via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) and bug reports that include subagent context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
4. **Evaluation infrastructure** — Stabilize 76 behavioral evals, add component-level evals, fix flaky steering tests ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#23166](https://github.com/google-gemini/gemini-cli/issues/23166), [#23313](https://github.com/google-gemini/gemini-cli/issues/23313)).
5. **Browser agent resilience** — Automatic lock recovery, Wayland support, settings.json override respect ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

## 6. Developer Pain Points (Recurring Frustrations)
- **Agent hangs & silent failures** — Generalist/subagent stalls (#21409), shell “awaiting input” ghosts (#25166), browser Wayland crashes (#21983).
- **False success signals** — Subagent reports `GOAL` after `MAX_TURNS` (#22323); Auto Memory marks low-signal sessions processed only on read (#26522).
- **Security/privacy leaks** — Auto Memory redaction *post*-model (#26525), stale `Authorization` header causing 401s (#28546), MCP OAuth credential wipe (#28481).
- **Context corruption** — `/compress` reload failures (#28672), quota-fallback tool response loss (#28671), history corruption on interruption.
- **Extension fragility** — GitHub JSON/stream errors crash extension installs (#28645, #28657, #28663).
- **Tool explosion** — 400 errors when >128 tools registered (#24246); model spawns temp scripts everywhere (#23571).
- **Terminal UX** — Resize flicker (#21924), external editor buffer corruption (#24935).

---

*Data sourced from `google-gemini/gemini-cli` GitHub activity (issues & PRs updated 2026-08-04).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-04

---

## 1. Today's Highlights

GitHub Copilot CLI v1.0.78 shipped with live tool-duration headers, automatic first-party plugin updates at session start, and an experimental `/new-worktree` command for parallel development workflows. The community surfaced 32 active issues in the last 24 hours, with top discussions around project-scoped plugins, multi-model BYOK support, and Windows/WSL2 keyboard handling regressions. No pull requests were updated yesterday.

---

## 2. Releases

### v1.0.78 (2026-08-03) — Stable
- **Timeline headers** now show live, right-aligned durations for tool calls ≥5 s (disable via `/settings showToolDurations`).
- **First-party plugins** auto-update to latest at session start.
- **Interactive shell shortcut** launches on `Enter` with inline hint when `$` is armed.
- **Copilot login** defaults to browser flow on local desktop.

### v1.0.78-3 (2026-08-03) — Pre-release
- **Added**: Experimental `/new-worktree` command to create a git worktree and start a fresh conversation in it.
- **Fixed**: Interactive shell shortcut behavior; login flow default.

> **Links**: [v1.0.78](https://github.com/github/copilot-cli/releases/tag/v1.0.78) · [v1.0.78-3](https://github.com/github/copilot-cli/releases/tag/v1.0.78-3)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1665](https://github.com/github/copilot-cli/issues/1665) | **Project-scoped plugins** | Enables repo-specific plugin configs instead of global per-user installs — critical for team standards & CI. | 18 👍, 14 comments (closed, likely shipped) |
| [#3282](https://github.com/github/copilot-cli/issues/3282) | **Multiple BYOK models** | Users cannot switch BYOK models mid-session; must restart with new `COPILOT_MODEL`. Blocks multi-provider workflows. | 20 👍, 7 comments |
| [#3709](https://github.com/github/copilot-cli/issues/3709) | **`/model` picker for local/BYOK models** | `/model` only lists GitHub-hosted models; local BYOK models invisible. | 20 👍, 3 comments |
| [#1464](https://github.com/github/copilot-cli/issues/1464) | **Skill truncation at 32** | System prompt caps at 32 skills; alphabetically-late skills never reach the model. | 7 👍, 6 comments |
| [#4328](https://github.com/github/copilot-cli/issues/4328) | **Ctrl+H → Ctrl+Backspace in WSL2** | `WT_SESSION` leak makes `Ctrl+H` delete words instead of chars. Breaks documented keybindings. | 3 comments, fresh regression |
| [#2714](https://github.com/github/copilot-cli/issues/2714) | **Toggle plugins enabled/disabled** | No way to disable a plugin without uninstalling; parity gap vs. Gemini CLI / Claude Code. | 11 👍, 2 comments |
| [#2830](https://github.com/github/copilot-cli/issues/2830) | **Custom color themes** | Only `auto/dark/light` supported; teams want branded palettes for multi-terminal setups. | 6 👍, 2 comments |
| [#4298](https://github.com/github/copilot-cli/issues/4298) | **Sandbox config for selective tool enable** | Request to whitelist/blacklist tools in `settings.json` for least-privilege agent runs. | 1 👍, 1 comment |
| [#4346](https://github.com/github/copilot-cli/issues/4346) | **MCP registry 403 with `GITHUB_TOKEN` in Actions** | CI workflows using built-in token blocked from non-default MCP servers. | 0 👍, fresh blocker |
| [#4353](https://github.com/github/copilot-cli/issues/4353) | **Accidental Compact with no confirmation/undo** | Context-compaction destroys history silently — data-loss risk. | 0 👍, filed today |

---

## 4. Key PR Progress

*No pull requests were updated in the last 24 hours.*

---

## 5. Feature Request Trends

1. **Plugin granularity** — Project/repo-scoped installs (#1665), enable/disable toggles (#2714), Windows symlink support (#2286).
2. **Multi-model flexibility** — Multiple BYOK providers per session (#3282, #3709), reasoning-effort parity across models (#4345).
3. **Session & context control** — Persistent prompt queues across scheduled prompts (#4078), stash/restore reliability (#4334), compaction safeguards (#4353).
4. **Terminal fidelity** — Custom themes (#2830), table rendering (#2412), OSC 9;4 opt-out (#4352), URL hyperlink wrapping (#4348).
5. **Enterprise/CI hardening** — Managed-settings enum validation (#4349), MCP registry auth in Actions (#4346), sandbox tool allow-lists (#4298).

---

## 6. Developer Pain Points

| Area | Recurring Friction |
|------|-------------------|
| **Windows/WSL2** | Keybinding misinterpretation (#4328), DA1 escape-sequence leak in zellij (#4267), git symlink handling (#2286). |
| **Model switching** | BYOK pins session to one model; no in-TUI switch; local models hidden from `/model`. |
| **Skill discoverability** | Hard 32-skill cap silently drops later skills; no pagination or prioritization UI. |
| **Session durability** | Stashed prompts lost on session switch; scheduled prompts kill queue; compaction irreversible. |
| **CI/CD integration** | `GITHUB_TOKEN` works for Copilot but not MCP registry; managed-settings validator rejects valid `enable` enum. |
| **Accessibility/UI** | No custom themes; table reflow on streaming links; wrapped URLs partially hyperlinked; progress-bar spam in Kitty. |

---

*Generated from github.com/github/copilot-cli data as of 2026-08-04 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-04

## Today's Highlights
No new releases shipped in the last 24 hours. The community is actively discussing a **persistent Memory System** (Issue #1283) as the top feature request, while two critical bugs surfaced: a **Web UI session-switching hang** (#2573) and a **CLI stream deadlock on Windows** (#2582). Eight PRs advanced, mostly targeting stability fixes for encoding, hook execution, shell pipe handling, and ACP protocol compliance.

---

## Releases
*No new releases published in the last 24 hours.*

---

## Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System — Persistent context across sessions** | Long-standing enhancement (open since Feb) requesting both AI-managed automatic memory and user-defined manual memory (`CLASSIFY.md`-style). Would fundamentally change how developers reuse context across projects. | 15 comments, sustained interest over 5 months; no 👍 count but high engagement signals strong demand. |
| [#2573](https://github.com/MoonshotAI/kimi-cli/issues/2573) | **Web UI: infinite "Connecting to session..." spinner on session switch** | Blocks the Technical Preview Web UI (`kimi web`) on macOS/Chrome. Users cannot switch sessions without browser refresh — a core UX regression in 1.48.0. | 1 comment, fresh report (Aug 1), likely underreported due to preview status. |
| [#2582](https://github.com/MoonshotAI/kimi-cli/issues/2582) | **CLI stream hangs indefinitely during generation (Windows, v0.31.1)** | Renders CLI unusable mid-session on Windows with Moonshot Platform API / `kimi-k2.7-code`. No workaround reported; session becomes permanently stuck. | 0 comments, just filed (Aug 3); critical severity for Windows developers. |

---

## Key PR Progress
| # | Title | Type | Status | Impact |
|---|-------|------|--------|--------|
| [#2577](https://github.com/MoonshotAI/kimi-cli/pull/2577) | `fix(web,vis): do not crash printing startup banner on legacy console codecs` | Bug fix | Open | Prevents crash on GBK/legacy Windows consoles when banner contains `➜` (U+279C). Resolves #2532. |
| [#2575](https://github.com/MoonshotAI/kimi-cli/pull/2575) | `fix(hooks): fire PostToolUse hooks through fire_and_forget_trigger` | Bug fix | Open | Ensures `PostToolUse`/`PostToolUseFailure` hooks aren't garbage-collected prematurely. Resolves #2564. |
| [#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554) | `fix(tools): count StrReplaceFile replacements against running content` | Correctness fix | Open | Fixes off-by-count in success message when multiple replacements occur in same file. |
| [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) | `fix(shell): stop blocking until timeout when detached child holds pipes` | Bug fix | Open | Prevents `some_daemon & echo done` from hanging foreground shell until timeout. Resolves #2468. |
| [#2507](https://github.com/MoonshotAI/kimi-cli/pull/2507) | `fix(acp): signal QuestionNotSupported instead of resolving empty answers` | Protocol fix | Open | Distinguishes "user dismissed" from "question not supported" in ACP server mode. Resolves #2495. |
| [#2581](https://github.com/MoonshotAI/kimi-cli/pull/2581) | `chore(release): bump kosong to 0.56.0` | Dependency bump | **Closed** | Updates internal `kosong` library; includes version-tag validation scripts. |
| [#2580](https://github.com/MoonshotAI/kimi-cli/pull/2580) | `fix(kosong): omit empty anthropic-beta header when no beta features declared` | Protocol fix | **Closed** | Stops sending empty `anthropic-beta` header ( Anthropic API compliance). |
| [#2535](https://github.com/MoonshotAI/kimi-cli/pull/2535) | `fix(llm): scope prompt cache keys to Moonshot APIs` | Optimization | Open | Restricts `prompt_cache_key` to official Moonshot/Kimi endpoints; avoids errors on third-party compatibles. Resolves #2534. |

---

## Feature Request Trends
1. **Persistent Memory / Context Continuity** (#1283) — Dominant ask: developers want project patterns, preferences, and AI-discovered facts to survive session restarts. Suggests a `CLASSIFY.md`-like manual layer + automatic summarization.
2. **Web UI Maturity** — Multiple issues around `kimi web` (session switching, rendering, stability) indicate growing adoption of the preview UI and pressure to reach parity with CLI.
3. **Windows-First Reliability** — Encoding crashes (#2577), stream hangs (#2582), shell pipe bugs (#2530) show Windows is a friction surface; fixes are prioritized but regressions persist.
4. **Protocol & Integration Hardening** — ACP fixes (#2507, #2535) and hook execution guarantees (#2575) reflect demand for reliable embedding in agent workflows and third-party tools.

---

## Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Session state loss on restart** | #1283 (15 comments, 5 months open) | High — top voted enhancement |
| **Web UI session switching broken** | #2573 (infinite spinner, macOS/Chrome) | New, blocking for preview users |
| **CLI stream deadlock on Windows** | #2582 (unrecoverable hang, v0.31.1) | New, critical for Windows devs |
| **Legacy console encoding crashes** | #2577 / #2532 (GBK banner crash) | Recurring, affects CN/Windows users |
| **Hook/task leakage in async code** | #2575 / #2564 (PostToolUse GC'd) | Subtle but breaks automation reliability |
| **Shell command hangs with background jobs** | #2530 / #2468 (pipe EOF wait) | Common pattern (`daemon &`) breaks |

---

*Digest generated from GitHub data (issues/PRs updated 2026-08-03 → 2026-08-04). Links point to live GitHub items.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-04

## Today's Highlights

OpenCode released **v1.18.12** with critical fixes for Azure GPT-5.5+ reasoning requests and desktop composer lag with large images. The community closed 45 issues and advanced 50 PRs in the last 24 hours, with major focus on session reliability, model provider compatibility, and TUI/Desktop parity. Notable progress includes session HTTP middleware for plugins, Simplified Chinese TUI localization, and per-MCP-server trust configuration.

---

## Releases

### v1.18.12
| Area | Changes |
|------|---------|
| **Core** | Fixed Azure GPT-5.5+ completion failures when reasoning is enabled ([@frederiknsgo](https://github.com/frederiknsgo)) |
| **Desktop** | Reduced composer lag with large pasted images/attachments; project search now matches any known recent project (not just first five) |

[Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.12)

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#16218](https://github.com/anomalyco/opencode/issues/16218) | **Model loops same response repeatedly** | Core UX breakage with GitHub Copilot; 19 comments indicate widespread impact | 🔥 19 comments, closed |
| [#12789](https://github.com/anomalyco/opencode/issues/12789) | **"Model not supported" error for Copilot Claude** | Provider integration fragility; 10 👍 shows user frustration | 17 comments, 10 👍 |
| [#7926](https://github.com/anomalyco/opencode/issues/7926) | **Mouse capture breaks tmux/Zellij copy** | Terminal multiplexer compatibility; 23 👍 = high demand | 10 comments, 23 👍 |
| [#20954](https://github.com/anomalyco/opencode/issues/20954) | **All Copilot models unusable despite valid sub** | Blocks paid subscribers; multi-model failure (GPT, Claude, Gemini) | 9 comments |
| [#15892](https://github.com/anomalyco/opencode/issues/15892) | **$ triggers LaTeX rendering in TUI (macOS)** | Markdown rendering bug breaking currency/price display | 9 comments, 5 👍 |
| [#21632](https://github.com/anomalyco/opencode/issues/21632) | **Subagent model variants ignored at runtime v1.4.0+** | Regression in agent configuration; config parses but not applied | 7 comments, 3 👍 |
| [#29968](https://github.com/anomalyco/opencode/issues/29968) | **`--attach` and `--model` conflict in `opencode run`** | CLI workflow breakage for custom model + attachment combos | 6 comments |
| [#30668](https://github.com/anomalyco/opencode/issues/30668) | **Startup "Unexpected server error" (CLI & Desktop)** | App won't start; 4/5 bootstrap requests fail | 4 comments, 1 👍 |
| [#30751](https://github.com/anomalyco/opencode/issues/30751) | **Desktop v1.15.13 fails bootstrap after clean reinstall** | Installation reliability; sidecar server never starts | 3 comments |
| [#29080](https://github.com/anomalyco/opencode/issues/29080) | **`@file` mentions fail in symlinked directories** | Workspace reference broken for common monorepo/symlink setups | 3 comments, 3 👍 |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#40359](https://github.com/anomalyco/opencode/pull/40359) | **Fix** | Execute tools renamed by context hooks — preserves canonical registration for execution |
| [#40327](https://github.com/anomalyco/opencode/pull/40327) | **Feature** | **Session HTTP middleware** for plugins — Effect-native seam in `packages/ai` with `ctx.session.http()` |
| [#40356](https://github.com/anomalyco/opencode/pull/40356) | **Fix** | Move markdown parsing to worker — upgrades Marked to 18.0.7, offloads KaTeX/Shiki to session worker |
| [#40125](https://github.com/anomalyco/opencode/pull/40125) | **Feature** | **Per-MCP-server trust configuration** — closes 5 related issues (#40111, #23506, #14696, #26862, #1694) |
| [#40351](https://github.com/anomalyco/opencode/pull/40351) | **Feature** | **Simplified Chinese TUI localization** — full coverage: home, palette, dialogs, sidebar, diff viewer, which-key |
| [#40362](https://github.com/anomalyco/opencode/pull/40362) | **Feature** | **Priority locale translations** — adds 11 languages (AZ, FI, HI, ID, IT, NL, PA, SV, ZGH, UR, VI) + enables TR |
| [#40358](https://github.com/anomalyco/opencode/pull/40358) | **Fix** | Default xAI OAuth to device flow — uses Grok Build code; loopback as fallback |
| [#40357](https://github.com/anomalyco/opencode/pull/40357) | **Fix** | Cap free-tier retry delay at 5-hour window — addresses #32391 (61722s retry-after) |
| [#37054](https://github.com/anomalyco/opencode/pull/37054) | **Feature** | Full session option in web fork dialog — fork entire conversation, not just to selected message |
| [#36710](https://github.com/anomalyco/opencode/pull/36710) | **Fix** | Bounded event log compaction — read-only status + dry-run `--session`/`--all` with max-size limits |

---

## Feature Request Trends

| Trend | Evidence | Priority |
|-------|----------|----------|
| **Session organization & management** | #21590 (status: Todo/Done/Backlog), #18569 (`--resume <session>`), #16562 (missing sessions), #37054 (full fork) | High |
| **MCP server usability** | #27771 (local stdio broken on Windows), #30704 (official MCP Registry), #40125 (per-server trust), #27752 (MemPalace plugin) | High |
| **Terminal/TUI parity with Desktop** | #7926 (mouse capture), #40351 (CN localization), #30754 (command search in diff), #35915 (stale docs removal) | Medium |
| **Model/provider flexibility** | #12789, #20954, #21632, #29968, #40358 (xAI device flow) | High |
| **Internationalization** | #40362 (11 new locales), #40351 (CN TUI) | Medium |
| **Plugin ecosystem extensibility** | #40327 (HTTP middleware), #40109 (oc-supermemory-redux), #27752 (MemPalace), #27231 (edit connected providers) | Medium |

---

## Developer Pain Points

1. **Provider reliability** — Copilot integration fails across models (GPT, Claude, Gemini) despite valid subscriptions; Azure reasoning breaks; xAI OAuth flow needs device-code fallback. *Recurring in #12789, #20954, #21632, #40358.*

2. **Session bootstrap failures** — "Unexpected server error" on startup affects CLI and Desktop; sidecar server exits; config with unsupported skills blocks launch. *Cluster: #30668, #30751, #30825, #30667.*

3. **Terminal multiplexer incompatibility** — Mouse capture prevents native copy in tmux/Zellij; Ctrl+C exits instead of copying. *High engagement (23 👍) on #7926.*

4. **Markdown/TUI rendering bugs** — `$` triggers LaTeX (breaks currency); command search captures keys under Diff Viewer; glob tool fails on symlinked paths. *#15892, #30754, #29080.*

5. **Windows-specific Desktop issues** — Sidecar server exits, models/providers missing, Questions tool broken in PowerShell, installation conflicts. *#29932, #30517, #20572.*

6. **Subagent/config regression** — Model variants parsed but not applied at runtime since v1.4.0; duplicate assistant messages when IDs out of order. *#21632, #30809.*

---

*Generated from github.com/anomalyco/opencode — 45 issues, 50 PRs, 1 release in last 24h*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-04

## Today's Highlights
The Pi codebase saw intense bug-fixing activity around Windows compatibility, JSON streaming performance, and session management. Critical fixes landed for WSL login hangs, `find` tool path corruption on Windows, and O(n²) JSON output that caused OOM in long sessions. The team also merged Harness v2 in-memory session storage and a new Cortecs provider, signaling continued investment in backend extensibility.

## Releases
No new releases in the last 24 hours.

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#6187](https://github.com/earendil-works/pi/issues/6187) **WSL login hangs after GitHub Copilot device auth** | Blocks WSL users entirely; browser auth completes but Pi never detects it. 20 comments indicate widespread impact. | 🔥 20 comments, open since Jun 30 |
| [#6768](https://github.com/earendil-works/pi/issues/6768) **Compaction fails with Copilot Enterprise (421 Misdirected Request)** | Enterprise users cannot compact context; affects both OpenAI and Anthropic paths. 18 👍 shows strong demand. | 17 comments, 18 👍 |
| [#7161](https://github.com/earendil-works/pi/issues/7161) **anthropic-messages missing `x-client-request-id`** | Breaks session affinity in proxies/load-balancers; prevents multi-account Claude routing. | 9 comments, in progress |
| [#7020](https://github.com/earendil-works/pi/issues/7020) **Pi stalls after compaction in long-running sessions** | Coordinator-style sessions frequently hang post-compaction; impacts productivity for power users. | 9 comments, 2 👍, closed |
| [#7547](https://github.com/earendil-works/pi/issues/7547) **Windows usage patterns & pain points** | Meta-issue to prioritize Windows support across WSL, PowerShell, Git Bash, native. 6 comments, just opened. | 6 comments, new |
| [#7130](https://github.com/earendil-works/pi/issues/7130) **Backspace deletes 2 chars in Kitty** | Terminal protocol bug; Kitty key release events not filtered. Affects daily editing. | 5 comments |
| [#7399](https://github.com/earendil-works/pi/issues/7399) **`truncateToWidth()` leaves dangling OSC 8 hyperlinks** | Truncation mid-hyperlink corrupts terminal output; reproducible without extensions. | 5 comments |
| [#6104](https://github.com/earendil-works/pi/issues/6104) **`find` corrupts paths on bare Windows drive roots** | `C:\` searches drop first char and double trailing slashes; fundamental Windows FS bug. | 4 comments, closed |
| [#7465](https://github.com/earendil-works/pi/issues/7465) **iTerm2 inline images missing `size` param** | Blocks image rendering in xterm.js-based terminals (VS Code, web UIs). | 4 comments |
| [#6596](https://github.com/earendil-works/pi/issues/6596) **`taskkill` ENOENT on Node.js 24** | Process cleanup breaks on Node 24; requires absolute System32 path + error handling. | 4 comments |

## Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| [#7503](https://github.com/earendil-works/pi/pull/7503) | **Feature** | Harness v2: in-memory `SessionStorage`/`SessionRepo` APIs + backend-neutral session model (entries, lanes, checkpoints). Foundation for durable server backend. |
| [#7451](https://github.com/earendil-works/pi/pull/7451) | **Fix** | Bounded model catalog refreshes; fixes 5 issues (#7027, #7113, #7153, #7418, #7443) around cancellation/queuing races. |
| [#7339](https://github.com/earendil-works/pi/pull/7339) | **Feature (Draft)** | OpenAI Responses API `background: true` mode support; follows harness-v2 spec. Seeking design feedback. |
| [#7571](https://github.com/earendil-works/pi/pull/7571) | **Feature** | Built-in **Cortecs** provider (European OpenRouter-like router); backed by models.dev. Merged. |
| [#7569](https://github.com/earendil-works/pi/pull/7569) | **Fix** | `find` path normalization: uses `path.relative()` consistently, fixes Windows root/path-separator bugs. Merged. |
| [#7568](https://github.com/earendil-works/pi/pull/7568) | **Feature** | Generic `samplingParameters` in `models.json` for llama.cpp/vLLM (dry_multiplier, xtc_probability, repetition_penalty, etc.). Merged. |
| [#7396](https://github.com/earendil-works/pi/pull/7396) | **Feature** | Durable `@earendil-works/pi-coding-agent/server` backend: JSONL persistence, cross-process locking, crash recovery, live transcript projection. |
| [#7562](https://github.com/earendil-works/pi/pull/7562) | **Feature** | Anthropic server-side fallback payload + beta header; preserves fallback transitions for replay. Merged. |
| [#7552](https://github.com/earendil-works/pi/pull/7552) | **Fix** | Session discovery now follows symlinked directories under `~/.pi/agent/sessions/`; fixes #7497. Merged. |
| [#7394](https://github.com/earendil-works/pi/pull/7394) | **Fix (Breaking)** | JSON streaming now emits **delta-only** `message_update`; fixes O(n²) stdout growth (also #7561, #7290). Includes backpressure. Merged. |

## Feature Request Trends
1. **Windows-first experience** — #7547 meta-issue, plus #6104, #6817, #6596, #7427 show demand for native PowerShell/Git Bash/WSL parity.
2. **Compaction configurability** — #7553 requests separate thinking level/model for compaction vs. normal turns; #6768 shows Enterprise compaction broken.
3. **Session durability & server mode** — Harness v2 (#7503), server backend (#7396), symlink session discovery (#7552) point to multi-device/team workflows.
4. **Provider extensibility** — Generic sampling params (#7568), Cortecs provider (#7571), opaque API keys for custom Codex gateways (#7546).
5. **TUI performance at scale** — Virtualization (#7573), retained rendering (#7541), input latency in long/image-heavy sessions.
6. **Background/async model execution** — OpenAI background responses (#7339), Anthropic server-side fallbacks (#7562).

## Developer Pain Points
- **WSL auth deadlock** (#6187): Browser device flow completes but Pi never resumes; 20-comment thread, month-old.
- **JSON mode OOM** (#7290, #7395, #7561): Cumulative assistant message serialized on every delta → quadratic stdout → agent OOM on 64KB writes.
- **Compaction reliability** (#7020, #6768, #7370): Stalls after compaction, Enterprise 421 errors, auto/manual compaction races.
- **Windows `find` tool broken** (#6104, #6817, #7427): Path corruption on drive roots, `**` patterns fail, ignore lib throws on recursive skill dirs.
- **Terminal protocol gaps** (#7130, #7399, #7465): Kitty backspace, OSC 8 hyperlink truncation, missing iTerm2 `size` param.
- **TUI scalability** (#7573, #7574, #7541): Full transcript in memory, keybindings swallowed in fullscreen, input lag in long sessions.
- **Node 24 compatibility** (#6596): `taskkill` ENOENT breaks process cleanup; needs absolute paths.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-04

---

## 1. Today's Highlights

- **v0.21.5 shipped** with an opt-in macOS migration bridge from Electron to Tauri, plus detailed execution-outcome tracking for tool calls; however, the release workflow failed on the `quality` job ([#8483](https://github.com/QwenLM/qwen-code/issues/8483)).  
- **v0.21.4** graduated Web Shell to a release-ready desktop app with native lifecycle management, single-instance behavior, and automatic updates ([#8132](https://github.com/QwenLM/qwen-code/pull/8132)).  
- A **security-focused proposal** (#8102) advocates deterministic tool-execution boundaries to keep the LLM outside the trust boundary—a signal the community is prioritizing runtime hardening.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.21.5** | Stable | • Opt-in one-time update bridge for macOS users migrating from Electron to Tauri ([#8392](https://github.com/QwenLM/qwen-code/pull/8392))<br>• Detailed execution-specific outcome tracking for tool calls |
| **v0.21.4-nightly.20260804.d6f55a1c9** | Nightly | • Electron→Tauri bridge backport<br>• Web Shell table-dialog fix |
| **v0.21.4** | Stable | • Web Shell now a release-ready desktop app (native lifecycle, single-instance, auto-updates) ([#8132](https://github.com/QwenLM/qwen-code/pull/8132))<br>• History pagination handles oversized turns gracefully |

> ⚠️ **Note**: v0.21.5 release workflow failed on the `quality` job; see [#8483](https://github.com/QwenLM/qwen-code/issues/8483).

---

## 3. Hot Issues

| Issue | Priority/Type | Why It Matters | Community Reaction |
|-------|---------------|----------------|-------------------|
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) Deterministic tool-execution boundaries for trustworthy agent runtime | P3, feature-request, security | Proposes keeping the LLM outside the trust boundary; runtime would authorize, constrain, and observe all model-produced actions. Foundational for enterprise/security-sensitive use. | 14 comments, active discussion |
| [#8493](https://github.com/QwenLM/qwen-code/issues/8493) Cancelled file tools (`write_file`, `edit`) still mutate filesystem | P2, bug, file-operations | Async prep work continues after abort signal fires, violating cancellation semantics. Data-loss/corruption risk. | 5 comments, high urgency |
| [#8504](https://github.com/QwenLM/qwen-code/issues/8504) Provider update prompt repeats when custom models preserved | P2, bug, configuration | UX regression: users see “Built-in Provider Update” prompt repeatedly after successful update if config contains user-added custom models. | 3 comments, reproducible on v0.21.4 |
| [#8458](https://github.com/QwenLM/qwen-code/issues/8458) Goal completion channel locked due to evidence directory truncation | P2, bug, core | Evidence directory size limit truncates data, locking the goal-acceptance channel. Blocks workflow completion. | 3 comments, needs retesting |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) Fleet Shepherd Dashboard (auto-maintained) | need-information, ci-cd | Liveness dashboard for fleet automation; shows scan-signal age, syncs, dispatches. Operational visibility for maintainers. | 3 comments, bot-maintained |
| [#8483](https://github.com/QwenLM/qwen-code/issues/8483) Release Failed for v0.21.5 on 2026-08-03 | bug, autofix/skip | `quality` job failed in release workflow. Blocked stable release; requires investigation before re-tagging. | 2 comments, closed but actionable |

---

## 4. Key PR Progress

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#8502](https://github.com/QwenLM/qwen-code/pull/8502) | Open | Route trusted-author fork PRs & no-checkout jobs to self-hosted ECS pool (behind `MAINTAINER_ECS_RUNNER_DISABLED`). | CI cost reduction, faster trusted builds |
| [#8498](https://github.com/QwenLM/qwen-code/pull/8498) | Open | Retire dry chunks & pipeline verification in reverse-audit review loop (stacked on #8468). Cuts large-PR review latency. | Review performance ↑ |
| [#8454](https://github.com/QwenLM/qwen-code/pull/8454) | Open | Prepare evidence-image tooling for GitHub-triggered `/review` (tmux + freeze install, asset hosting). | Enables visual evidence in automated reviews |
| [#8506](https://github.com/QwenLM/qwen-code/pull/8506) | Open | Persist built-in provider update version; keep custom models during refresh. Fixes #8504. | Stops repeated update prompts |
| [#8464](https://github.com/QwenLM/qwen-code/pull/8464) | Open | Clear tool results to a low watermark (½ threshold) instead of just-below-threshold, preserving prompt cache longer. | Token efficiency ↑, context retention ↑ |
| [#8457](https://github.com/QwenLM/qwen-code/pull/8457) | Open | Expose channel sessions (DingTalk, Feishu, WeCom) in Web Shell sidebar & settings with Tasks/Channels switch. | Multi-channel UX parity |
| [#8386](https://github.com/QwenLM/qwen-code/pull/8386) | Open | Run Windows merge-queue tests on validated `ecs-win` runner; fallback to `windows-2022`. | Windows CI reliability ↑, queue time ↓ |
| [#8487](https://github.com/QwenLM/qwen-code/pull/8487) | Open | Batch independent setup calls (fetch-pr, pr-context, comment-status, rules load) into one model round-trip. | Review startup latency ↓ (~7 min → ?) |
| [#8467](https://github.com/QwenLM/qwen-code/pull/8467) | Open | Add Git diff sources (Uncommitted/Staged/Committed/Branch) + searchable commit/branch selectors in Web Shell. | Git workflow completeness |
| [#8396](https://github.com/QwenLM/qwen-code/pull/8396) | Open | Close four trust-boundary holes in hook execution: no HTTP redirects, stricter SSRF, config validation, sandboxed exec. | Security hardening for repo-controlled hooks |

---

## 5. Feature Request Trends

1. **Trustworthy Agent Runtime** — Explicit boundaries between LLM and execution environment (#8102, #8396).  
2. **Web Shell Desktop Parity** — Native lifecycle, multi-channel sessions, Git tooling, auth persistence (#8132, #8457, #8467, #8445).  
3. **CI/CD Self-Hosting Expansion** — ECS runners for Linux/Windows, fork PR routing, Java SDK optimization (#8502, #8386, #8441).  
4. **External Context / Memory Integrations** — Mem0 write support, generic HTTP context providers (#8507).  
5. **Review System Scalability** — Batching setup calls, retiring expensive audit loops, evidence-image pipeline (#8487, #8498, #8454, #8459).  
6. **Provider/Config UX** — Persist update version, avoid prompt spam, custom-model preservation (#8506, #8504).

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Release workflow fragility** | v0.21.5 failed on `quality` job (#8483); nightly cut same day. |
| **Cancellation ≠ rollback** | `write_file`/`edit` mutate FS after abort (#8493). |
| **Config update noise** | Provider update prompt loops with custom models (#8504). |
| **Evidence truncation blocks workflows** | Goal acceptance locked by directory size limit (#8458). |
| **CI queue times on GitHub-hosted runners** | Multiple PRs routing to ECS (#8502, #8386, #8441). |
| **Review latency on large PRs** | 7-min setup phase, 5-round audit cap hit (#8487, #8498). |
| **Hook trust-boundary gaps** | Four independent holes in repo-controlled hook execution (#8396). |

---

*Generated from `github.com/QwenLM/qwen-code` data as of 2026-08-04. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-04

## 1. Today's Highlights
The v0.9.4 release train is actively advancing with 77 commits staged across multiple PRs, focusing on Runtime API expansion (goals, memory, MCP servers, skills, verifier receipts), TUI stabilization (ratatui pin, clippy lint cleanup), and provider ecosystem growth (Minimax China routes, Model Studio reasoning support). A critical Anthropic-compatible provider bug (#4978) causing intermittent HTTP 400 errors remains unresolved. The community is also debating the Chinese translation of "Constitution" (宪法 vs 协作准则), reflecting localization sensitivity.

## 2. Releases
**No new releases in the last 24 hours.**  
The v0.9.4 release train (PR #5135) is in progress with 77 commits ahead of `main`, integrating 18 train commits plus feature branches for Runtime API, provider fixes, and TUI hygiene.

## 3. Hot Issues

| Issue | Type | Why It Matters | Community Reaction |
|-------|------|----------------|-------------------|
| [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) | Bug | **Critical provider bug**: Anthropic-compatible providers (OpenModel) return `HTTP 400: 'type' must be in ["enabled", "disabled", "auto"]` intermittently. Blocks users on non-Anthropic endpoints. | 4 comments, updated today. Root cause likely in request payload serialization for `thinking`/`tool_choice` fields. |
| [#4959](https://github.com/Hmbown/CodeWhale/issues/4959) | Enhancement | **Runtime control gap**: No way to stop autonomous/Yolo-mode agents via text command (`+ stop` ignored). Safety/usability issue for long-running workflows. | 7 comments. Consensus on needing a `STOP` signal intercept at runtime layer, not just UI. |
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | Discussion | **Localization policy**: Debate over translating "Constitution" as "宪法" (constitution) vs "协作准则" (collaboration guidelines). Political sensitivity vs semantic accuracy. | 7 comments. Chinese contributors split; no consensus. Affects all UI/docs strings. |
| [#5226](https://github.com/Hmbown/CodeWhale/issues/5226) | Feature | **Settings spine architecture**: Runtime-side account layer for cloud settings sync, keyring-backed token custody. Foundational for multi-device/team workflows. | 0 comments (new). Authored by maintainer Hmbown; tracks control-plane contract from `cwc#169`. |

## 4. Key PR Progress

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | Open | **v0.9.4 release train** — 77 commits integrating Runtime API, provider fixes, TUI hygiene, docs. | Major release; supersedes #5044. |
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | Open | **Runtime API: Goal lifecycle** — `GET/POST /v1/threads/{id}/goal` for persistent goal-loop state & completion controls. | Enables managed clients to drive autonomous workflows. |
| [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) | Open | **Runtime API: MCP server CRUD** — `POST/GET/PATCH/DELETE /v1/apps/mcp/servers` for bounded config management. | Removes need for direct TOML edits; enables UI-based MCP mgmt. |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | Open | **Runtime API: Memory endpoints** — `/v1/memory` for inspection, scope/provenance, lifecycle controls. | First-class memory API for agents/clients. |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) | Open | **Runtime API: Skill lifecycle** — install, update, uninstall, trust, audit endpoints. | Completes skill management via HTTP (previously TUI-only). |
| [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) | Open | **Runtime API: Verifier receipts** — `/v1/fleet/runs/{id}/receipts`, `evidence`, `failures` for granular debugging. | Replaces single `verifier_failed` counter with actionable data. |
| [#5231](https://github.com/Hmbown/CodeWhale/pull/5231) | Closed | **TUI: Clippy deny-lint cleanup** — Fixed 30 deny-level lints (16 unique sites) blocking v0.9.4 train. | Unblocks CI; improves code quality baseline. |
| [#5192](https://github.com/Hmbown/CodeWhale/pull/5192) | Open | **TUI: Pin ratatui=0.30.0** — Avoids `Terminal::clear()` CPR query race in ratatui-core 0.1.1+. | Stabilizes startup; prevents event-loop deadlock. |
| [#5233](https://github.com/Hmbown/CodeWhale/pull/5233) | Open | **Provider: Model Studio reasoning** — Surfaces `reasoning_content` as Thinking stream on verified Alibaba routes. | Adds reasoning support for Qwen/DeepSeek-V4/GLM on Model Studio. |
| [#4686](https://github.com/Hmbown/CodeWhale/pull/4686) | Closed | **Provider: Minimax China routes** — Adds `minimax-cn`, `minimax-anthropic-cn` for api.minimaxi.com (Token Plan). | Expands China-region provider coverage. |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | Open | **ACP: Tool execution over session/prompt** — Implements file/search/git/patch/shell tools for ACP clients (Zed, adapters). | Turns ACP from chat-only to full code-editing agent. |
| [#5228](https://github.com/Hmbown/CodeWhale/pull/5228) | Open | **TUI: Rail unification stack** — 12-commit rebase unifying panel/rail architecture onto train. | Major UI refactor; improves layout consistency. |

## 5. Feature Request Trends
From issues and PRs, the top community-driven directions are:

1. **Runtime API Completeness** — 6 PRs (#5130–5133, #5129, #5132) adding goal, MCP, memory, skill, verifier endpoints. Goal: full headless/managed operation parity with TUI.
2. **Provider Ecosystem Expansion** — Minimax China (#4686), Model Studio reasoning (#5233), Anthropic-compat bugfix (#4978). Focus on regional/compatible endpoints.
3. **ACP Protocol Maturity** — #5225 implements tool execution over ACP, enabling Zed/editor integrations to act as full agents.
4. **Autonomous Workflow Controls** — #4959 (stop command), goal-loop API (#5133), verifier receipts (#5132) — all address "fire-and-forget" safety.
5. **Settings/Account Cloud Sync** — #5226 (settings spine), keyring token custody — foundational for team/multi-device use.

## 6. Developer Pain Points
Recurring frustrations from issues and PR context:

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Anthropic-compat provider instability** | #4978: intermittent 400 errors on `type` field; retries work randomly | High (blocks non-Anthropic endpoints) |
| **No escape hatch for runaway agents** | #4959: `+ stop` ignored in YOLO mode; 7 comments discussing workarounds | Medium (safety/cost concern) |
| **TUI startup races / dependency drift** | #5192: ratatui-core 0.1.1+ breaks `clear()`; #5231: 30 deny-level clippy lints | Medium (CI/TUI stability) |
| **Manual TOML editing for MCP/skills** | #5130, #5129: no HTTP mutation surface until now | Medium (workflow friction) |
| **Localization ambiguity** | #4949: "Constitution" translation deadlock; political sensitivity | Low but persistent (affects all CN strings) |
| **Windows path/linker issues** | #5095: OpenHarmony SDK spaced paths break linker args | Niche but blocking for OHOS devs |

---

*Data sourced from `Hmbown/CodeWhale` GitHub activity (issues/PRs updated 2026-08-03 to 2026-08-04). Links point to live GitHub items.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*