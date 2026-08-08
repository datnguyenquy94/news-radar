# AI CLI Tools Community Digest 2026-08-08

> Generated: 2026-08-08 02:04 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-08)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **rapid, multi-track iteration** across 9 active projects. Major vendors (Anthropic, OpenAI, Google, GitHub, Alibaba/Qwen) ship daily patches alongside alpha/nightly channels, while community-driven tools (OpenCode, Pi, DeepSeek TUI, Kimi) pursue architectural overhauls (v2 rewrites, background subagent orchestration, daemon/serve platforms). A clear convergence is emerging around **cross-agent interoperability (AGENTS.md)**, **self-hosted/enterprise execution environments**, **MCP standardization**, and **session persistence/memory systems**. Windows parity remains a systemic weakness across proprietary tools, while open-source projects struggle with release velocity vs. technical debt trade-offs.

---

## 2. Activity Comparison (Last 24 Hours)

| Tool | Releases | Hot Issues (Tracked) | PRs Merged/Updated | Notable Signal |
|------|----------|----------------------|---------------------|----------------|
| **Claude Code** | 2 (v2.1.225, v2.1.224) | 10 | 3 | #6235 AGENTS.md: 4.5k 👍 — strongest cross-tool signal |
| **OpenAI Codex** | 3 alphas (0.148.0-α.1–α.4) | 10 | 10 | #8648 context bug: 82 comments — core regression |
| **Gemini CLI** | 4 (2 nightly, 1 preview, 1 stable) | 10 | 10 | SSRF CVE patched same-day; Caretaker bot maturing |
| **GitHub Copilot CLI** | 3 patches (v1.0.79-7–9) | 10 | 0 (direct releases) | #1632 skill subfolders: 23 👍 — org-scale demand |
| **Kimi Code CLI** | 0 | 2 | 2 | #2596 YOLO `rm -rf` escape — safety incident |
| **OpenCode** | 1 (v1.18.15) | 10 | 10 | #3176 git abuse: 10👍; v2: Modal VM, background subagents |
| **Pi** | 1 (v0.84.1) | 10 | 10 | #6879 compaction failure: 15👍; Cursor CLI bridge |
| **Qwen Code** | 1 nightly (v0.21.7) | 6 (4 closed) | 10 | Rapid triage-to-fix; daemon/serve platform expanding |
| **DeepSeek TUI** | 0 (v0.9.4 blocked) | 10 | 10 (8 dependabot) | #5123 release blocker; session amnesia pain |
| **Grok Build** | 0 | 0 | 0 | No activity |

**Total**: 15 releases, 78 issues tracked, 65 PRs — **high throughput across the board**.

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Cross-agent config standard (AGENTS.md)** | Claude Code (#6235, 4.5k👍), OpenAI Codex (implied by MCP push), Gemini CLI (subagent interop), OpenCode (v2 orchestration) | Single portable agent definition replacing CLAUDE.md/CODEX.md/GEMINI.md fragmentation; skill/tool/capability declaration |
| **Self-hosted / enterprise runners** | Claude Code (v2.1.224 `self-hosted-runner`), GitHub Copilot CLI (enterprise sandbox/allow-auto policies), OpenCode (Modal VM runtime), Qwen Code (daemon/serve) | On-prem/air-gapped execution; GPU/CPU fleet management; policy-enforced sandboxing |
| **MCP standardization & hot-reload** | OpenAI Codex (#26234 namespace tools), Gemini CLI (Caretaker MCP ingestion), OpenCode (#41176 config-file servers), Qwen Code (#8522 metadata refresh), Pi (LM Studio/Bedrock providers) | Dynamic tool discovery without reconnect; trust/include/exclude toolsets; provider-agnostic transport |
| **Session persistence & memory** | Kimi Code (#1283, 21 comments), DeepSeek TUI (#2492, #2934), Pi (#6879 compaction, #5886 lifecycle), OpenCode (#41175 DB bloat), Claude Code (#50884 stale envs) | Cross-session context retention; compact/summarize without loss; memory quarantine/validation; session resume fidelity |
| **Background/subagent orchestration** | OpenCode (v2 `Task(background: true)`), Pi (harness recovery #7710), Qwen Code (daemon turn polling #8682), DeepSeek TUI (#425 resume chains), GitHub Copilot CLI (`--plan` + autopilot) | Fire-and-forget delegation; auto-continue on transient errors; turn-status polling; subagent state isolation |
| **Windows parity & sandbox reliability** | Claude Code (#59750 TUI deadlock, #84072 ECONNRESET), OpenAI Codex (#10090 CreateProcessAsUserW:5, #37415 EPERM), GitHub Copilot CLI (#3622 clipboard, #4222 render loop, #4219 crash), DeepSeek TUI (FreeBSD fix #5254) | Native process spawning; terminal rendering stability; clipboard/notification paths; ACL/AppContainer fixes |
| **IDE/ACP integration depth** | Qwen Code (#8513 usage_update for JetBrains), OpenAI Codex (VS Code extension load failures #37458), Pi (Cursor CLI bridge #7792), Gemini CLI (IDE connection #28729) | Context usage telemetry; seamless auth bridging; virtual FS support; ACP protocol compliance |

---

## 4. Differentiation Analysis

| Dimension | Proprietary/Vendor Tools | Community/Open-Core Tools |
|-----------|--------------------------|---------------------------|
| **Primary Focus** | Enterprise readiness, governance, provider lock-in mitigation | Architectural innovation, extensibility, local-first |
| **Target Users** | Professional teams, regulated industries, multi-cloud shops | Power users, researchers, hobbyists, custom workflow builders |
| **Release Cadence** | Daily patches + weekly minors; alpha/nightly channels | Irregular; v2 rewrites dominate (OpenCode, DeepSeek TUI, Pi) |
| **Technical Approach** | Managed services (gateway, runners, sandbox); closed-core with plugin APIs | Local-first daemons; SQLite/CRDT state; modular crate architectures |
| **Governance** | Centralized; security patches same-day (Gemini SSRF, Claude hookify) | Community-driven; dependabot-heavy (DeepSeek TUI 8/10 PRs) |
| **Key Differentiators** | • Claude: Gateway spend limits, archive plugin source<br>• Codex: Auto-review governance, code-mode gRPC protocol<br>• Copilot: Enterprise policy granularity, Agent Plugin extensions<br>• Gemini: Caretaker automated triage, LLM-as-Judge evals<br>• Qwen: Daemon/serve as platform, WebBridge browser control | • OpenCode: Modal full-VM runtime, Mermaid TUI, synthetic web search<br>• Pi: Cursor CLI bridge, lazy grammar loading, harness recovery<br>• DeepSeek TUI: Mixed fleet model routing, subagent state roots<br>• Kimi: Memory system demand, UTF-8 safety hardening<br>• Grok: (Inactive) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Maturing** | **Claude Code**, **OpenAI Codex**, **Gemini CLI**, **GitHub Copilot CLI** | • Daily releases + high issue/PR volume<br>• Enterprise features shipping (runners, policies, governance)<br>• Strong community signals (4.5k👍 AGENTS.md, 82-comment context bug)<br>• Security responsiveness (same-day CVE patches) |
| **Rapid Iteration / Architectural Pivot** | **OpenCode**, **Pi**, **Qwen Code** | • v2 rewrites in progress (background subagents, daemon platform, harness recovery)<br>• High PR velocity (10+/day) with structural changes<br>• Innovating on local-first orchestration (Modal VM, Mermaid TUI, WebBridge) |
| **Early Stage / Niche Focus** | **Kimi Code CLI**, **DeepSeek TUI** | • Lower issue volume but high-severity items (YOLO data loss, release blockers)<br>• Focus on memory/session continuity and fleet ergonomics<br>• Dependabot-heavy maintenance signals small core teams |
| **Inactive** | **Grok Build** | No GitHub activity in 24h window |

**Maturity Indicators**: Proprietary tools lead on enterprise hardening (audit logs, policy enforcement, gateway integration). Community tools lead on architectural experimentation (VM runtimes, CRDT session state, multi-model fleets).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Developer Actionability |
|-------|-----------------|-------------------------|
| **AGENTS.md will become the universal agent manifest** | ★★★★★ (Claude 4.5k👍; Codex MCP push; Gemini/OpenCode adoption) | **Adopt now** — define skills/tools/capabilities in AGENTS.md; pressure vendors for native support |
| **Self-hosted runners are the new enterprise baseline** | ★★★★☆ (Claude, Copilot, OpenCode, Qwen all shipping) | **Evaluate** — test Claude `self-hosted-runner`, Copilot enterprise sandbox, OpenCode Modal VM for air-gapped/GPU workloads |
| **Daemon/serve mode → platform primitive** | ★★★★☆ (Qwen daemon APIs, OpenCode background subagents, Pi harness, DeepSeek fleet) | **Prototype** — build internal tooling on daemon turn-polling (`/session/:id/turns`), batch skill toggles, WebBridge |
| **MCP hot-reload & provider-agnostic transport maturing** | ★★★★☆ (Qwen #8522, OpenCode #41176, Codex #26234, Pi LM Studio) | **Standardize** — migrate custom tooling to MCP; demand config-file server loading from vendors |
| **Session memory = competitive differentiator** | ★★★★☆ (Kimi #1283, DeepSeek #2492, Pi #6879, OpenCode #41175) | **Invest** — implement memory quarantine, compaction validation, cross-session resume; avoid tools with "session amnesia" |
| **Windows is a liability for proprietary CLIs** | ★★★★☆ (Claude, Codex, Copilot all have critical Windows bugs) | **Mitigate** — use WSL2/Linux containers for production; factor Windows support into vendor selection |
| **Automated triage/eval bots entering mainstream** | ★★★☆☆ (Gemini Caretaker LLM-as-Judge, Pi Caretaker, OpenCode Fleet Shepherd) | **Adopt** — deploy Caretaker-style issue triage; integrate LLM-as-Judge evals into CI for agent behavior regression |
| **Model reasoning controls standardizing per-model** | ★★★☆☆ (Qwen #8675 registry, Codex effort levels, Copilot reasoning effort flags) | **Configure** — centralize reasoning_effort/thinking_budget per model in AGENTS.md; avoid hardcoded prompts |

---

## Bottom Line for Developers

1. **Standardize on AGENTS.md** immediately — it’s the only path to portable agent definitions across Codex, Claude, Cursor, Amp, and emerging tools.
2. **Pilot self-hosted runners** (Claude, Copilot) or **local daemon platforms** (OpenCode Modal, Qwen serve) for data-sensitive workloads.
3. **Treat Windows as a compatibility layer** — run CLIs in WSL2/Linux containers until vendors resolve sandbox/process-spawning regressions.
4. **Bet on daemon/serve architectures** for automation — turn-polling APIs, batch skill management, and browser bridges (Qwen WebBridge) enable headless agent fleets.
5. **Audit session memory handling** — tools that lose context on compaction/restart (Pi, DeepSeek TUI, OpenCode DB bloat) will impede long-running agentic workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-08 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py recall=0%` | Fixes the skill-creator evaluation pipeline: installs eval artifact as real skill, fixes Windows stream reading, trigger detection, parallel workers | Core blocker for description-optimization loop; 10+ independent reproductions of 0% recall; impacts `run_loop.py` and `improve_description.py` | **Open** |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic quality control for AI-generated documents: prevents orphan words, widow paragraphs, numbering misalignment | Addresses universal pain point in every document Claude generates; users rarely request good typography explicitly | **Open** |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` (v1.3.0) | Mechanical file verification + four-dimension reasoning quality gate (pre-task → adversarial review → delivery) | Universal skill for any project/stack/model; step-0 mechanical check prevents hallucinated outputs | **Open** |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Testing Trophy, AAA pattern, React Testing Library, contract testing, property-based, mutation testing | Covers full stack from philosophy to CI integration; addresses "what NOT to test" gap | **Open** |
| 5 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` | Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility | Fills domain-specific gap for design/frontend tasks involving color | **Open** |
| 6 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | OpenDocument (.odt/.ods) creation, template filling, parsing to HTML; MCP server integration via pyxel-mcp | ISO-standard document format support; triggers on "ODT", "OpenDocument", "LibreOffice" | **Open** |
| 7 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` | Retro game development skill for Pyxel engine via MCP server; workflow: write → run_and_capture → inspect → iterate | Niche but active community; updated through 2026-07-15 | **Open** |
| 8 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (addresses #1417); prevents accumulation of stale plans | Community-identified gap: "planning artifacts accumulate with no lifecycle" | **Open** |

> **Note**: All top PRs remain **Open** as of data cutoff. The `skill-creator` evaluation pipeline fixes (#1298, #1099, #1050, #1323, #1261) dominate discussion volume, indicating a systemic tooling crisis.

---

## 2. Community Demand Trends — From Issues

| Rank | Theme | Evidence (Issues) | Signal Strength |
|------|-------|-------------------|-----------------|
| 1 | **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43💬, 2👍): Community skills masquerading under `anthropic/` namespace; [#1175](https://github.com/anthropics/skills/issues/1175): SharePoint permission logic in SKILL.md | 🔴 Critical |
| 2 | **Skill Discovery & Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16💬, 8👍): Org-wide sharing in Claude.ai; [#189](https://github.com/anthropics/skills/issues/189) (6💬, 9👍): Duplicate skills from `document-skills`/`example-skills` plugins | 🟠 High |
| 3 | **Skill Creator Tooling Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12💬, 7👍): `run_eval.py` 0% trigger rate; [#1169](https://github.com/anthropics/skills/issues/1169): Recall=0% even for literal slash-commands; [#202](https://github.com/anthropics/skills/issues/202): skill-creator reads like docs not ops | 🟠 High |
| 4 | **Platform Compatibility** | [#29](https://github.com/anthropics/skills/issues/29): AWS Bedrock support; [#16](https://github.com/anthropics/skills/issues/16): Expose Skills as MCPs; Windows subprocess fixes in multiple PRs | 🟡 Medium |
| 5 | **Governance & Quality Meta-Skills** | [#412](https://github.com/anthropics/skills/issues/412): Agent governance (policy, threat detection, audit); [#1385](https://github.com/anthropics/skills/issues/1385): Reasoning Quality Gate Pipeline; [#83](https://github.com/anthropics/skills/pull/83): skill-quality-analyzer | 🟡 Medium |
| 6 | **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` skill injects 156k tokens; [#1329](https://github.com/anthropics/skills/issues/1329): `compact-memory` for symbolic state compression | 🟡 Medium |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land

| PR | Skill | Why It's Poised to Merge |
|----|-------|--------------------------|
| **[#538](https://github.com/anthropics/skills/pull/538)** | `fix(pdf): case-sensitive file references` | Trivial 8-line fix; breaks on case-sensitive FS; zero controversy |
| **[#539](https://github.com/anthropics/skills/pull/539)** | `fix(skill-creator): unquoted YAML description warning` | Prevents silent parsing failures; pre-parse validation; low risk |
| **[#541](https://github.com/anthropics/skills/pull/541)** | `fix(docx): w:id collision with bookmarks` | Fixes document corruption; root cause identified; 1-line ID space fix |
| **[#1050](https://github.com/anthropics/skills/pull/1050)** | `skill-creator: Windows subprocess + encoding` | Two 1-line fixes; unblocks Windows users; `claude.cmd` vs `claude` |
| **[#1261](https://github.com/anthropics/skills/pull/1261)** | `fix(skill-creator): isolate trigger-eval from live registry` | Prevents pollution of user's `.claude/commands/` during parallel eval; architectural fix |
| **[#509](https://github.com/anthropics/skills/pull/509)** | `docs: CONTRIBUTING.md` | Addresses 25% community health score; single highest-impact doc addition |
| **[#210](https://github.com/anthropics/skills/pull/210)** | `Improve frontend-design skill clarity` | Actionable rewrite; ensures every instruction is followable in single conversation |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is fixing the broken skill-creator evaluation pipeline (0% recall on Windows/Linux) and establishing trust boundaries for community-contributed skills, while simultaneously expanding into domain-specific expertise (typography, color, testing, ODT) and meta-governance capabilities (self-audit, quality gates, agent governance).**

---

# Claude Code Community Digest — 2026-08-08

---

## 1. Today's Highlights

Two releases shipped in the past 24 hours: **v2.1.225** adds gateway spend-limit awareness to usage warnings (cap name, reset time, operator message) and a workspace trust prompt for `claude agents` in untrusted directories; **v2.1.224** introduces self-hosted runners (`claude self-hosted-runner`) for Team/Enterprise plans and an `archive` plugin source for installing plugins from HTTPS-hosted ZIPs without Git. The community's top discussion remains **#6235** (4.5k 👍, 347 comments) requesting native `AGENTS.md` support to align with the emerging cross-agent standard.

---

## 2. Releases

### v2.1.225
- **Gateway spend-limit support**: Usage warning now surfaces the configured cap, its reset timestamp, and the gateway operator's custom message (requires gateway 2.1.225+).
- **Workspace trust prompt**: `claude agents` now prompts for trust confirmation when run in an untrusted directory, matching the behavior of other entry points.

### v2.1.224
- **Self-hosted runners** (`claude self-hosted-runner`): Turn your own machines or containers into execution targets for Claude Code web, mobile, and desktop sessions (Team/Enterprise only).
- **Archive plugin source**: Install plugins directly from a ZIP served over HTTPS—no Git dependency required.

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6235](https://github.com/anthropics/claude-code/issues/6235) | **Support AGENTS.md** (enhancement, core, memory) | Cross-agent standard adopted by Codex, Amp, Cursor; CLAUDE.md is Claude-specific and hinders collaboration. | 4,526 👍 · 347 comments · Open since 2025-08-21 |
| [#14920](https://github.com/anthropics/claude-code/issues/14920) | **Disable individual plugin skills** (enhancement, macOS, core) | Users want granular control—e.g., keep `:commit` but drop `:commit-push-pr` and `:clean_gone`. | 83 👍 · 14 comments |
| [#64706](https://github.com/anthropics/claude-code/issues/64706) | **Agent tool ignores `effort:` frontmatter** (bug, agents) | Subagents inherit global `effortLevel` instead of respecting per-agent `effort:` in frontmatter, breaking cost/quality tuning. | 5 👍 · 7 comments |
| [#59750](https://github.com/anthropics/claude-code/issues/59750) | **claude agents TUI unresponsive on Windows Terminal** (bug, Windows, TUI, stale) | Full render/input deadlock on Windows Terminal since v2.1.143; blocks Windows adopters. | 8 👍 · 7 comments |
| [#50884](https://github.com/anthropics/claude-code/issues/50884) | **Remove stale Remote Control environments from claude.ai/code** (enhancement, web, CLI) | Orphaned environments accumulate; no UI to clean them up. | 26 👍 · 7 comments |
| [#83744](https://github.com/anthropics/claude-code/issues/83744) | **Claude Desktop GPU process crash (exitCode 101457950)** (bug, Windows) | Whole app terminates; affects Desktop 1.24012.11.0 on Windows. | 0 👍 · 5 comments (new, 2026-08-04) |
| [#72495](https://github.com/anthropics/claude-code/issues/72495) | **Prompt suggestions suppressed at `allowed_warning` rate-limit** (bug, Linux, TUI) | Strict-equality gate in shipped binary silently kills suggestions; self-resolves when status clears. | 0 👍 · 4 comments |
| [#84689](https://github.com/anthropics/claude-code/issues/84689) | **CVP-approved org blocked by cyber safeguards; appeal form empty** (bug) | Legitimate org incorrectly flagged; appeal flow broken—no fields rendered. | 0 👍 · 4 comments (new, 2026-08-07) |
| [#84945](https://github.com/anthropics/claude-code/issues/84945) | **Local peer-messaging socket bind failure (one-way cross-session messaging)** (bug, macOS) | One of two identical sessions fails to bind `/tmp/cc-socks`; breaks `SendMessage`/`ListAgents`. | 0 👍 · 3 comments (new, 2026-08-07) |
| [#84072](https://github.com/anthropics/claude-code/issues/84072) | **ECONNRESET on Windows after first API stream chunk** (bug, Windows) | Stream dies post-first-chunk in both VS Code extension and terminal; repro on v2.1.222. | 0 👍 · 3 comments (new, 2026-08-05) |

---

## 4. Key PR Progress (Last 24h)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#84854](https://github.com/anthropics/claude-code/pull/84854) | **docs: fix stale hooks documentation link** in `bash_command_validator_example.py` | Updates 1 of 46 doc links to `code.claude.com/docs/...` (others already current). | Open |
| [#84747](https://github.com/anthropics/claude-code/pull/84747) | **fix(hookify): enforce proper rule evaluation scope & secure file read** | Prevents `load_rules()` from bypassing event filter when `event=null`; restricts `Read`/`Browser` to `all`-scoped rules. | Open |
| [#84711](https://github.com/anthropics/claude-code/pull/84711) | **fix(security): address YAML injection & symlink credential overwrites** in plugin scripts | Defensive checks added; closes #76580. | Open |

---

## 5. Feature Request Trends (from all Issues)

1. **Cross-agent interoperability** — `AGENTS.md` adoption (#6235) is the single strongest signal; developers want one config file that works across Codex, Cursor, Amp, and Claude Code.
2. **Granular plugin/skill control** — Disable individual skills (#14920), per-agent `effort:` frontmatter (#64706), and per-session tool allow-lists.
3. **Remote/self-hosted workflow gaps** — Cleanup of stale Remote Control envs (#50884), outbound SSH from web sessions (#84967), and self-hosted runner ergonomics.
4. **Session/UX persistence** — Rename session titles (#51791, closed), pin responses for reference (#70987), raise `/goal` character limit or allow file refs (#84953).
5. **Windows/Linux parity** — TUI stability (#59750), Glob Unicode paths (#84966), MSIX auto-update corruption (#84851), ECONNRESET streaming (#84072).
6. **Authorization/permission polish** — `:*` glob bug in Bash rules (#84969), WebSearch allow-rule ignored (#84956, closed), worktree isolation false positives (#84720).

---

## 6. Developer Pain Points (Recurring Frustrations)

- **Configuration fragmentation**: CLAUDE.md vs. AGENTS.md split forces dual maintenance; teams using multiple agents lose portability.
- **Opaque rate-limit/safeguard behavior**: Prompt suggestions silently dropped at `allowed_warning` (#72495); safeguards downgrade models mid-task with no actionable error (#84952); CVP-approved orgs blocked with broken appeal flow (#84689).
- **Windows as a second-class platform**: TUI deadlock (#59750), streaming resets (#84072), MSIX corruption (#84851), Unicode Glob failure (#84966), Desktop GPU crashes (#83744, #84951).
- **Plugin/extension opacity**: Silent `bun install`/`npm ci` during plugin install (#84939); artifact tool missing on Linux despite same account working on macOS (#84677); `hookify` security gaps (#84747, #84711).
- **Cross-session/remote inconsistencies**: Peer socket bind races (#84945), fenced code block rendering divergence between desktop and remote (#84965), connectors not attaching until first user message (#83694).
- **Documentation drift**: Stale links persist in examples (#84854); `ScheduleWakeup` tool claims 5-min TTL but subscription sessions use 1-hour (#74149).

---

*Data sourced from `github.com/anthropics/claude-code` — releases, issues, and PRs updated in the last 24 hours (2026-08-08).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-08

## 1. Today's Highlights

The Codex team shipped three rapid-fire alpha releases (0.148.0-alpha.1 through alpha.4) while the community surfaced critical regressions in v0.147.0 affecting Azure Responses, LiteLLM providers, and Windows Computer Use. A high-severity data-loss incident (pinned task rollout files deleted) and persistent Windows sandbox ACL failures (`CreateProcessAsUserW failed: 5`) dominate developer discussions, with 82+ comments on the conversation context bug (#8648) indicating widespread impact.

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.148.0-alpha.4` | Alpha | Latest in the 0.148.0-alpha series; incremental updates following alpha.1–alpha.3 |
| `rust-v0.148.0-alpha.2` | Alpha | Mid-series alpha release |
| `rust-v0.148.0-alpha.1` | Alpha | Series opener for 0.148.0 |

> **Note**: All three are Rust-component alphas; no CLI/Desktop changelog published yet. Watch for consolidated release notes.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8648](https://github.com/openai/codex/issues/8648) | **Agent replies to earlier messages instead of latest** | Core conversation integrity bug; breaks multi-turn workflows | 82 comments, 58 👍 — highest engagement |
| [#26234](https://github.com/openai/codex/issues/26234) | **MCP namespace tools not callable on non-OpenAI providers** | Blocks Ollama, LM Studio, OpenRouter, Bedrock users from MCP tooling | 32 comments, 41 👍 |
| [#37515](https://github.com/openai/codex/issues/37515) | **Urgent data loss: cleanup deleted pinned task rollouts** | Task integrity incident; orphaned threads, lost work | 1 comment, newly filed — severity: *Urgent* |
| [#37380](https://github.com/openai/codex/issues/37380) | **v0.147.0 regression: Azure rejects empty functions namespace** | Blocks Azure API Management / custom Responses deployments | 9 comments, 19 👍 |
| [#37425](https://github.com/openai/codex/issues/37425) | **v0.147.0 regression: LiteLLM streaming consistently fails** | Breaks custom provider workflows; streaming is core UX | 4 comments, 3 👍 |
| [#10090](https://github.com/openai/codex/issues/10090) | **`elevated_windows_sandbox` fails with `CreateProcessAsUserW: 5`** | Windows sandbox fundamentally broken for Business users | 24 comments, 7 👍 |
| [#37415](https://github.com/openai/codex/issues/37415) | **Windows Computer Use spawn EPERM; WindowsApps ACL failure** | Computer Use non-functional on Windows; sandbox ACL regression | 4 comments, 2 👍 |
| [#37043](https://github.com/openai/codex/issues/37043) | **Windows Computer Use `EnumWindows` fails with 0x80070003** | Helper binary fails to enumerate windows; persists across restarts | 17 comments, 3 👍 |
| [#29908](https://github.com/openai/codex/issues/29908) | **`apply_patch`/sandbox fail: Bubblewrap loopback/userns on Ubuntu 24.04** | Linux managed sandbox broken on current LTS kernel | 14 comments |
| [#14599](https://github.com/openai/codex/issues/14599) | **Allow `trust_level = "trusted"` for any projects** | Top QoL request: eliminate repeated approval prompts | 16 comments, 57 👍 |

## 4. Key PR Progress (Top 10 Merged/Closed in Last 24h)

| # | PR | Category | Summary |
|---|----|----------|---------|
| [#37519](https://github.com/openai/codex/pull/37519) | Config | Expose `auto_review.ignore_rules` in app-server v2 protocol & config requirements |
| [#37516](https://github.com/openai/codex/pull/37516) | Security | Filter reusable command approvals for cyber-specialized models & `auto_review.ignore_rules` |
| [#37513](https://github.com/openai/codex/pull/37513) | Architecture | Reuse parent compactions in Guardian review sessions; seed with latest encrypted compaction |
| [#37511](https://github.com/openai/codex/pull/37511) | Governance | Enforce automatic review for managed models via `auto_review.required_on_models` |
| [#37510](https://github.com/openai/codex/pull/37510) | Protocol | Define `codex.code_mode.v1` gRPC API (sessions, executions, tool callbacks, notifications) |
| [#37507](https://github.com/openai/codex/pull/37507) | Observability | Include effective `sandbox_mode` in turn metadata for all request types |
| [#37505](https://github.com/openai/codex/pull/37505) | Refactor | Remove `codex-core-skills` crate; consolidate into `codex-skills-extension` |
| [#37504](https://github.com/openai/codex/pull/37504) | Performance | Disable Nagle's algorithm (`TCP_NODELAY`) on code-mode WebSocket connections |
| [#37503](https://github.com/openai/codex/pull/37503) | Skills | Move host skill prompt injection into skills extension (`HostSkillsSnapshot::load_skill_prompts`) |
| [#37500](https://github.com/openai/codex/pull/37500) | Cleanup | Remove legacy `code_mode_tool_names` metadata; reserve key, use opt-in `tool_namespaces_info` |

> **Pattern**: Heavy investment in **auto-review governance**, **code-mode protocol formalization**, **skills architecture consolidation**, and **latency/observability hardening**.

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Trusted project mode / persistent approvals** | [#14599](https://github.com/openai/codex/issues/14599) (57 👍), [#34812](https://github.com/openai/codex/issues/34812) | High 👍, recurring across CLI & Desktop |
| **MCP interoperability beyond OpenAI Responses API** | [#26234](https://github.com/openai/codex/issues/26234) (41 👍), [#35486](https://github.com/openai/codex/issues/35486), [#24401](https://github.com/openai/codex/issues/24401) | 3+ issues, cross-platform ask |
| **Voice mode flexibility in existing tasks** | [#35500](https://github.com/openai/codex/issues/35500) (3 👍) | UX gap: text→voice transition loses context |
| **Session resume optimization** | [#34663](https://github.com/openai/codex/issues/34663) (5 👍), [#25990](https://github.com/openai/codex/issues/25990) | Full history re-render vs. bootstrap latest turn |
| **Cross-platform Computer Use parity** | [#37043](https://github.com/openai/codex/issues/37043), [#37415](https://github.com/openai/codex/issues/37415), [#24437](https://github.com/openai/codex/issues/24437), [#26842](https://github.com/openai/codex/issues/26842) | Windows + Intel macOS gaps |

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

1. **Windows Sandbox & Process Spawning Failures** — `CreateProcessAsUserW failed: 5` appears in [#10090](https://github.com/openai/codex/issues/10090), [#13965](https://github.com/openai/codex/issues/13965), [#14211](https://github.com/openai/codex/issues/14211), [#37415](https://github.com/openai/codex/issues/37415). Root cause: WindowsApps ACL / AppContainer isolation breaking `codex.exe` spawn. Affects `apply_patch`, elevated sandbox, Computer Use.

2. **v0.147.0 Regressions on Custom Providers** — Azure Responses ([#37380](https://github.com/openai/codex/issues/37380)), LiteLLM ([#37425](https://github.com/openai/codex/issues/37425)) both broken by empty namespace description / streaming changes. Blocks enterprise & self-hosted workflows.

3. **Computer Use Helper Missing or Broken** — Windows: `EnumWindows` 0x80070003 ([#37043](https://github.com/openai/codex/issues/37043)), spawn EPERM ([#37415](https://github.com/openai/codex/issues/37415)); Intel macOS: helper binary absent for 3+ releases ([#24437](https://github.com/openai/codex/issues/24437), [#26842](https://github.com/openai/codex/issues/26842)).

4. **Conversation Context Corruption** — Agent replies to wrong message ([#8648](https://github.com/openai/codex/issues/8648), 82 comments), resumed threads missing tools/subagent runtime ([#25990](https://github.com/openai/codex/issues/25990)), full history re-render on resume ([#34663](https://github.com/openai/codex/issues/34663)).

5. **Extension Load Failures (VS Code)** — "Couldn't load resources" on Windows ([#37458](https://github.com/openai/codex/issues/37458)), macOS ([#37508](https://github.com/openai/codex/issues/37508)), Remote-SSH CSP font-src blocked ([#37517](https://github.com/openai/codex/issues/37517)). Multiple platforms, recent versions.

6. **Data Integrity / Task Loss** — Cleanup deleting pinned rollouts ([#37515](https://github.com/openai/codex/issues/37515)), ambient suggestions prefetching crashing Desktop with 646MB rollout ([#35799](https://github.com/openai/codex/issues/35799)).

---

**Next Watch**: 0.148.0 stabilization (will it fix 0.147.0 regressions?), Windows sandbox ACL root-cause fix, Computer Use helper shipping for Intel macOS, and auto-review governance rollout to managed models.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-08

## 1. Today's Highlights
The project shipped two nightly releases (v0.56.0-nightly) and a preview patch (v0.55.0-preview.2), headlined by a critical fix reclassifying **capacity exhaustion as a terminal error** to prevent silent retries. Meanwhile, the **Caretaker Agent**—the automated triage bot—received a suite of merged PRs adding Firestore schema upgrades, Cloud Run deployment scripts, and a full LLM-as-a-Judge evaluation framework. A high-severity **SSRF vulnerability (CVSS 8.6) in `web-fetch`** was patched, blocking DNS-rebinding attacks against internal metadata endpoints.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [`v0.56.0-nightly.20260808.gcf22ac7e8`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260808.gcf22ac7e8) | Nightly | • Capacity exhaustion → terminal error ([#28716](https://github.com/google-gemini/gemini-cli/pull/28716))<br>• Firestore schema: `error`, `pr_number` fields for Caretaker ([#28467](https://github.com/google-gemini/gemini-cli/pull/28467)) |
| [`v0.55.0-preview.2`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-preview.2) | Preview Patch | • Cherry-pick fix for capacity exhaustion into preview branch ([#28719](https://github.com/google-gemini/gemini-cli/pull/28719)) |
| [`v0.54.4`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.4) | Stable Patch | • Incremental bug fixes backported to v0.54 line ([#28710](https://github.com/google-gemini/gemini-cli/pull/28710)) |

## 3. Hot Issues (Top 10 by Community Signal)
| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent reports `GOAL` success after hitting `MAX_TURNS` | Masks real failures; breaks trust in agent delegation | 12 comments, 👍2 — **P1, needs retest** |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely | Renders subagent delegation unusable for simple tasks | 8 comments, 👍8 — **P1, workaround: disable subagents** |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell commands stuck at “Waiting input” post-completion | Core UX breakage; affects every CLI interaction | 4 comments, 👍3 — **P1, effort/medium** |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory retries low-signal sessions forever | Wastes quota, pollutes memory with noise | 5 comments — **P2** |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 error when >128 tools registered | Hard limit blocks large workspaces / MCP servers | 3 comments — **P2** |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland | Linux desktop parity gap | 4 comments, 👍1 — **P1, agent/browser** |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent ignores `settings.json` (e.g., `maxTurns`) | Configuration drift; can’t tune browser behavior | 3 comments — **P2** |
| [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) Stuck at interactive prompt creating Vite app | Behavioral eval gap; common onboarding flow broken | 2 comments — **P2** |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Leverage model’s bash affinity via zero-dep sandbox | Strategic: align tooling with model’s native strengths | 8 comments, 👍1 — **P2, effort/large** |
| [#28555](https://github.com/google-gemini/gemini-cli/issues/28555) SSRF via DNS bypass in `web-fetch` (fixed in [#28725](https://github.com/google-gemini/gemini-cli/pull/28725)) | Critical security; private IP exposure | Patched same day — **CVSS 8.6** |

## 4. Key PR Progress (Top 10 by Impact)
| PR | Status | Summary |
|----|--------|---------|
| [#28725](https://github.com/google-gemini/gemini-cli/pull/28725) | **Open** | **Security**: SSRF fix — validate resolved IPs against private ranges before fetch |
| [#28673](https://github.com/google-gemini/gemini-cli/pull/28673) | **Open** | **Feature**: Add Gemini 3.6 Flash & 3.5 Flash-Lite model configs (thinking, multimodal tools) |
| [#28730](https://github.com/google-gemini/gemini-cli/pull/28730) | **Open** | **Fix**: False capacity-exhaustion errors; preserve “Keep trying” UI; correct quota model mapping |
| [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) | **Open** | **Fix**: Load `.env` *before* expanding settings placeholders (resolves startup race) |
| [#28729](https://github.com/google-gemini/gemini-cli/pull/28729) | **Open** | **Fix**: IDE connection works under Cider/VS Code forks (virtual FUSE paths) |
| [#28581](https://github.com/google-gemini/gemini-cli/pull/28581) | **Open** | **Perf**: Skip `@` processing inside diff hunks — avoids O(n) glob searches on large diffs |
| [#28690](https://github.com/google-gemini/gemini-cli/pull/28690) | **Closed** | **Caretaker**: Issue comment ingestion + `/caretaker triage` slash command for re-triage |
| [#28530](https://github.com/google-gemini/gemini-cli/pull/28530) | **Closed** | **Caretaker Evals**: LLM-as-a-Judge framework + parallel git-worktree benchmark runner |
| [#28529](https://github.com/google-gemini/gemini-cli/pull/28529) | **Closed** | **Infra**: GCP Cloud Run deploy script for Caretaker ingestion/triage/egress services |
| [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) | **Open** | **DX**: `npm run eval:report` — aggregate pass rates by model from Vitest JSON |

## 5. Feature Request Trends
1. **AST-Aware Tooling** ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) — Precision reads, symbol navigation, reduced token noise.
2. **Subagent Observability** ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) — Share/inspect subagent trajectories via `/chat share` and `/bug`.
3. **Agent Self-Awareness** ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)) — Accurate CLI flags, hotkeys, self-execution docs.
4. **Memory System Hardening** ([#26516](https://github.com/google-gemini/gemini-cli/issues/26516), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)) — Quarantine invalid patches, deterministic redaction, stop low-signal retries.
5. **Browser Agent Resilience** ([#22232](https://github.com/google-gemini/gem<unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk><unk>

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-08

## Today's Highlights
Three patch releases (v1.0.79-7 through v1.0.79-9) shipped in the last 24 hours, adding **Agent Plugin extensions**, **kimi-k3 model support**, **enterprise sandbox/allow-auto policies**, and a `--plan` + `--mode autopilot` combo for plan-then-execute workflows. Meanwhile, the issue tracker shows active regressions on Windows (clipboard, terminal rendering, notifications) and authentication flows, plus growing demand for skill subfolder organization and session workspace defaults.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **v1.0.79-9** | `/sandbox` config dialog now shows where sandbox settings are stored in `settings.json`. |
| **v1.0.79-8** | Enterprise `allow-auto-only` policy support (allows `/allow-all auto` while blocking full `allow-all`); enterprise-managed sandbox policy can enforce a proxy URL while keeping credentials user-controlled. `/sandbox` dialog groups `git`, `gh` settings. |
| **v1.0.79-7** | Agent Plugins can now ship extensions under `com.github.copilot/extensions/`; added **kimi-k3** model; combine `--plan` with `--mode autopilot` to plan first then implement without waiting for approval. Multi-select prompts improved. |

> All three releases are patch-level; no breaking changes noted.

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2494](https://github.com/github/copilot-cli/issues/2494) | `copilot login` auto-enters 'y/N' keychain prompt (regression in v1.0.16) | Blocks authentication on systems without keychain access; CLI proceeds without user consent. | 11 comments, 1 👍 — ongoing since April, still open. |
| [#1632](https://github.com/github/copilot-cli/issues/1632) | Support subfolders for skills organization | Users with 10+ custom skills need hierarchical organization; flat structure doesn't scale. | 10 comments, **23 👍** — highest upvote count in this batch. |
| [#3622](https://github.com/github/copilot-cli/issues/3622) | Copy to clipboard silently fails on Windows (since v1.0.48) | Core workflow broken on Windows; copy appears to succeed but clipboard unchanged. | 5 comments, 4 👍 — regression persisting across versions. |
| [#4311](https://github.com/github/copilot-cli/issues/4311) | Transcript renders blank until width change / new message (React/Ink cache invalidation) | Interactive mode UX broken; content exists but invisible until repaint trigger. | 3 comments — technical deep-dive suggests Ink/React render loop issue. |
| [#1409](https://github.com/github/copilot-cli/issues/1409) | `--add-dir` converts dashes to underscores → permission loop for OneDrive paths | Windows OneDrive paths contain dashes; internal conversion breaks path matching. | 2 comments, 4 👍 — long-standing (Feb), affects enterprise Windows users. |
| [#4345](https://github.com/github/copilot-cli/issues/4345) | Reasoning effort 'medium' not supported for `claude-haiku-4.5` (feature flag combo) | Server-side feature flags (`copilot_cli_opus_medium_effort_default` + `copilot_cli_gpt_5_4_mini_for_explore`) cause sub-agent dispatch failures. | 2 comments, 4 👍 — closed but reveals flag interaction bugs. |
| [#4222](https://github.com/github/copilot-cli/issues/4222) | **Regression of #2802**: Main pane freezes / infinite React/Ink render loop on Windows (v1.0.72+) | Same "Maximum update depth exceeded" bug from v1.0.31 has returned; UI freezes, output swallowed. | 1 comment — critical regression on native Windows terminals. |
| [#4219](https://github.com/github/copilot-cli/issues/4219) | CLI hard-crashes on Windows when `notifications` enabled (native toast path) | Access violation crash; blocks desktop notification feature entirely on Windows. | 1 comment — native code path instability. |
| [#4185](https://github.com/github/copilot-cli/issues/4185) | `--add-dir` causes Claude sub-agent dispatch to fail: 400 "max 4 cache_control blocks, found 5" | Every sub-agent call on Anthropic models fails when `--add-dir` used; blocks multi-dir workflows. | 1 comment — Anthropic API constraint interaction. |
| [#4118](https://github.com/github/copilot-cli/issues/4118) | `/app` command doesn't select CWD by default | Friction for daily workflow; 35 👍 shows strong demand for sensible default. | 1 comment, **35 👍** — highest engagement on a UX papercut. |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*  
All recent changes appear to have been released directly via the three patch versions above.

---

## Feature Request Trends (from Issues)

1. **Skill/agent organization at scale** — Subfolders for skills ([#1632](https://github.com/github/copilot-cli/issues/1632), 23 👍), skill tool alias for custom agents ([#4209](https://github.com/github/copilot-cli/issues/4209)), persisted default workspace type (branch vs worktree) ([#4396](https://github.com/github/copilot-cli/issues/4396)).
2. **Session continuity & observability** — Token usage reporting per session ([#2947](https://github.com/github/copilot-cli/issues/2947), 7 👍), resume session preserving model selection ([#4397](https://github.com/github/copilot-cli/issues/4397)), quick delete in sessions view ([#4395](https://github.com/github/copilot-cli/issues/4395)).
3. **Windows-first parity** — Clipboard reliability ([#3622](https://github.com/github/copilot-cli/issues/3622)), terminal rendering stability ([#4311](https://github.com/github/copilot-cli/issues/4311), [#4222](https://github.com/github/copilot-cli/issues/4222)), notification crashes ([#4219](https://github.com/github/copilot-cli/issues/4219)), codepage-specific copy bugs ([#4391](https://github.com/github/copilot-cli/issues/4391)).
4. **Enterprise policy granularity** — Allow-auto-only ([v1.0.79-8](https://github.com/github/copilot-cli/releases/tag/1.0.79-8)), sandbox proxy enforcement with user credentials, MCP registry header merging ([#4205](https://github.com/github/copilot-cli/issues/4205)).
5. **Model & planning flexibility** — `--plan` + autopilot combo (shipped in v1.0.79-7), new model additions (kimi-k3), reasoning effort per-model compatibility.

---

## Developer Pain Points (Recurring Frustrations)

| Area | Symptom | Frequency |
|------|---------|-----------|
| **Windows terminal/clipboard** | Silent copy failure, screen clear on copy, render freezes, notification crashes | 5+ issues in 24h window |
| **Authentication flow** | Auto-accept on keychain prompt, browser login URL wrapping, device code vs browser flow inconsistency | 3 issues (one open since April) |
| **Permission system** | Path normalization bugs (dashes→underscores), `allowed_directories` not loaded ([#4398](https://github.com/github/copilot-cli/issues/4398)), `--add-dir` breaking Claude cache blocks | 3 distinct path-handling bugs |
| **MCP lifecycle** | Orphaned stdio processes on auth rebuild ([#4392](https://github.com/github/copilot-cli/issues/4392)), false-positive "working" status on failed npx init ([#1129](https://github.com/github/copilot-cli/issues/1129)) | 2 issues, both involve process cleanup |
| **Version pinning** | npm shim is a loader, not a pin; same path serves different versions minutes apart ([#4402](https://github.com/github/copilot-cli/issues/4402)) | Newly reported, impacts reproducibility |
| **Skill discovery regression** | `skill` tool can't find valid skills in `~/.agents/skills` ([#4401](https://github.com/github/copilot-cli/issues/4401)) | Regression after #2230 fix |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-08-08. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-08

## 1. Today's Highlights
No new releases shipped today. The community is focused on two critical areas: a long-standing **Memory System** feature request (#1283, 21 comments) to persist context across sessions, and a **safety incident** (#2596) where the agent executed `rm -rf` on a directory outside the workspace in YOLO mode, deleting user session data. Two concurrent PRs (#2594, #2595) address UTF-8 handling bugs in `StrReplaceFile` that could corrupt binary or non-UTF-8 files.

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **#1283** [Feature Request: Memory System](https://github.com/MoonshotAI/kimi-cli/issues/1283) | Requests persistent context (project patterns, user preferences, AI-managed notes) across CLI sessions — a foundational capability for agentic workflows. | **21 comments** since Feb 2026; sustained interest signals high demand for long-term memory. |
| **#2596** [Agent ran `rm -rf` outside workspace](https://github.com/MoonshotAI/kimi-cli/issues/2596) | In YOLO permission mode, the agent deleted `~/.pi/agent/sessions` (a real directory, not the intended symlink), destroying user session data. Highlights sandbox/escaping risks. | **0 comments** (filed yesterday); severity warrants immediate triage and potential YOLO-mode guardrails. |

*Only 2 issues updated in the last 24h; both are shown above.*

## 4. Key PR Progress

| PR | Type | Description |
|----|------|-------------|
| **#2594** [fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits](https://github.com/MoonshotAI/kimi-cli/pull/2594) | Bug fix | Applies `old`/`new` as UTF-8 byte substrings on the raw buffer, avoiding full-file decode/re-encode that corrupted non-UTF-8 bytes (replaced with U+FFFD). |
| **#2595** [fix(StrReplaceFile): refuse to edit files that are not valid UTF-8](https://github.com/MoonshotAI/kimi-cli/pull/2595) | Bug fix / Safety | Rejects edits on files containing invalid UTF-8 sequences (resolves #2591), preventing silent corruption. Complementary to #2594 — one preserves bytes, the other refuses risky edits. |

*Only 2 PRs updated in the last 24h; both are shown above.*

## 5. Feature Request Trends
From the active issue landscape, the dominant theme is **agent persistence & safety**:
- **Cross-session memory** (#1283) — developers want the CLI to “remember” project conventions, code style, and prior decisions without manual re-injection.
- **Workspace confinement** (#2596) — demand for stricter filesystem boundaries, especially in autonomous (YOLO) modes, to prevent destructive operations outside the project root.
- **Tool robustness** (PRs #2594/#2595) — handling of binary/mixed-encoding files is a recurring pain point for code-editing agents.

## 6. Developer Pain Points
1. **Stateless CLI sessions** — No built-in mechanism to retain context; users manually re-provide instructions each run.
2. **YOLO mode hazards** — Autonomous file operations can escape the workspace (symlink resolution, path traversal), causing data loss.
3. **Encoding fragility** — `StrReplaceFile` corrupts non-UTF-8 files (images, minified assets, legacy encodings), forcing workarounds or avoidance of the tool.
4. **Limited observability** — Issue #2596 notes the agent “did not notice” a failed symlink creation, suggesting a need for better pre-flight checks and operation verification.

---

*Data sourced from `MoonshotAI/kimi-cli` GitHub activity (issues & PRs updated 2026-08-07 to 2026-08-08).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-08

## Today's Highlights

OpenCode v1.18.15 shipped with critical bugfixes for message chronology, revert/fork actions, and truncation cleanup. The community is actively debating **excessive git operations** (#3176, 10👍) and **database bloat from full message snapshots** (#41175). Meanwhile, v2 development accelerates with native background subagents, Modal VM runtime adoption, and Mermaid diagram rendering in TUI.

---

## Releases

### v1.18.15
**Core bugfixes:**
- **Chronological message ordering** now stays correct even with imported/legacy out-of-order message IDs
- **Revert and fork actions** use real message chronology instead of message ID ordering
- **Truncation cleanup** removes stale files by file timestamp more reliably

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#3176](https://github.com/anomalyco/opencode/issues/3176) **OpenCode massively abusing git** | Runs `git add .` on 45GB/54K file directories for session snapshots — destroys performance and repo integrity | 18 comments, **10👍** — highest engagement; users report broken workflows |
| [#41175](https://github.com/anomalyco/opencode/issues/41175) **Excessive storage: event table stores full message snapshots per streaming update** | `opencode.db` grows to GBs; event table = ~90% of DB size; community tool provided for cleanup | 1 comment; architectural concern for heavy users |
| [#41174](https://github.com/anomalyco/opencode/issues/41174) **Output stuck in infinite loop with Qwen/DeepSeek** | Model responses loop indefinitely; affects v1.17.9 and 1.18.3 | 1 comment; needs compliance review |
| [#41176](https://github.com/anomalyco/opencode/issues/41176) **[2.0] MCP config-file servers not loaded by background service** | Only runtime HTTP API registration works; config-file MCP servers ignored on startup | 0 comments; blocks v2 MCP adoption |
| [#41168](https://github.com/anomalyco/opencode/issues/41168) **LSP root detection falls back for wildcard markers** | Haskell (`*.cabal`), Terraform (`*.tf`), Julia (`*.jl`), Swift (`*.xcodeproj`) fail root detection | 0 comments; affects multiple language ecosystems |
| [#41165](https://github.com/anomalyco/opencode/issues/41165) **[2.0] DeepSeek relay sends assistant message missing `content` key** | HTTP 400 `Invalid assistant message` after `next-16998`+; breaks long agentic sessions | 1 comment; relay/serializer bug |
| [#41163](https://github.com/anomalyco/opencode/issues/41163) **Tool-result media 400s for models without attachment capability** | `supportsMediaInToolResult` returns `true` unconditionally for Anthropic/OpenAI SDKs; breaks non-vision models | 1 comment; model compatibility regression |
| [#41162](https://github.com/anomalyco/opencode/issues/41162) **Config provider-level npm override dropped for inherited models** | `provider.synthetic.npm = "@ai-sdk/anthropic"` silently ignored for models.dev-inherited models | 1 comment; config merge bug |
| [#41093](https://github.com/anomalyco/opencode/issues/41093) **Kimi K3 prompt caching stops after sending image** | Cache misses on every subsequent prompt → huge cost/limit usage; K2.7 works fine | 1 comment; provider-specific caching bug |
| [#41068](https://github.com/anomalyco/opencode/issues/41068) **Cannot delete projects/sessions; recreated folder brings back old sessions** | No UI delete; right-click missing; data persists unexpectedly on Windows 11 v1.18.15 | 2 comments, 1👍; UX/data hygiene issue |

---

## Key PR Progress

| PR | Type | Description |
|----|------|-------------|
| [#41177](https://github.com/anomalyco/opencode/pull/41177) | **Feature** | Modal sandboxes now run on **Full-VM runtime** (beta) instead of gVisor; real kernel (6.12.8), fixed kill mechanism — "one runtime, no knob" |
| [#40923](https://github.com/anomalyco/opencode/pull/40923) | **Feature** | **Native background subagents** (`Task(background: true)`) + **auto-continue for transient provider errors** — core orchestration for v2 |
| [#41173](https://github.com/anomalyco/opencode/pull/41173) | **Refactor** | Remove **legacy V2 Core Account subsystem** — drops 3 orphaned SQLite tables (`account`, `account_state`, `control_account`); auth now via `credential` |
| [#41113](https://github.com/anomalyco/opencode/pull/41113) | **Feature** | **Mermaid diagram rendering in TUI** — flowcharts, sequence, state diagrams via private `@opencode-ai/merman` package; activated as built-in TUI plugin |
| [#41169](https://github.com/anomalyco/opencode/pull/41169) | **Bugfix** | Fix LSP root detection for **wildcard markers** (`*.cabal`, `*.tf`, `*.jl`, `*.xcodeproj`); closes #41168 |
| [#41160](https://github.com/anomalyco/opencode/pull/41160) | **Feature** | Add **Synthetic web search backend** to `websearch` tool (joins `exa`, `parallel`); zero-data-retention API |
| [#41161](https://github.com/anomalyco/opencode/pull/41161) | **Bugfix** | Extract tool-result media for **models without attachment capability** (e.g., GLM-5.2 via Anthropic-compatible endpoint); closes #41163 |
| [#41159](https://github.com/anomalyco/opencode/pull/41159) | **Bugfix** | Propagate **config-level npm override** to inherited models; closes #41162 |
| [#41158](https://github.com/anomalyco/opencode/pull/41158) | **Bugfix** | Populate project picker from home — preserve indexed empty-search results, fallback to listing current home directory |
| [#41167](https://github.com/anomalyco/opencode/pull/41167) | **Feature** | Add `opencode web --no-open` to start web UI **without auto-launching browser** |

---

## Feature Request Trends

1. **Subagent/background orchestration** — Native background tasks (`Task(background: true)`), auto-continue on transient errors (#40923, #41172)
2. **MCP v2 maturity** — Config-file server loading, background service integration (#41176)
3. **Model provider extensibility** — Synthetic web search (#41160, #41164), npm override propagation (#41159, #41162), media handling for non-vision models (#41161, #41163)
4. **Web/Desktop UX parity** — `--no-open` flag (#41167), project picker fixes (#41158, #41153, #41154), settings redesign (#40845), server connect links (#41152)
5. **Observability/debugging** — Global event API docs (#41157), Mermaid rendering (#41113), workspace unblock endpoint (#41170)

---

## Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Git operations destroying performance** | #3176: `git add .` on 45GB/54K files for session snapshots; 10👍, 18 comments |
| **Database bloat from full message snapshots** | #41175: Event table = 90% of DB; GB-scale growth per week of heavy use |
| **Model compatibility regressions** | #41163, #41165, #41093: DeepSeek relay 400s, media 400s on non-vision models, Kimi K3 cache breakage |
| **Config system silently dropping overrides** | #41162: Provider-level `npm` override ignored for inherited models |
| **MCP servers not loading from config** | #41176: Only HTTP API registration works; background service ignores config-file servers |
| **Web UI fresh-session blindness** | #41156, #41155: "Nothing here yet" / "No folders found" until bookmarks exist |
| **Desktop app data hygiene** | #41068, #41069: Can't delete projects/sessions; auto-approve toggle broken; deleted paths reopen |
| **LSP root detection gaps** | #41168: Wildcard markers (`*.cabal`, `*.tf`, etc.) fall back to workspace root |

---

*Digest generated from GitHub data (anomalyco/opencode) for 2026-08-08. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-08

---

## 1. Today's Highlights

Pi v0.84.1 shipped with Qwen Individual token-plan support and authentication readiness checks, while the community surfaced a critical **auto-compaction failure** that lets context exceed 100% until the provider rejects the request. Meanwhile, a flurry of TUI fixes (theme rendering, custom tool renderers after `/reload`, performance) and a new Cursor CLI bridge landed in the same cycle.

---

## 2. Releases

### v0.84.1
- **Qwen Token Plan Individual** — Built-in provider for models documented under Individual subscriptions ([API Keys docs](https://github.com/earendil-works/pi/blob/v0.84.1/packages/coding-agent/docs/providers.md#api-keys)).
- **Authentication readiness checks** — `pi auth` now validates credentials before use.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **Auto-compaction never triggers past 100% context** | Context grows until provider rejects (373k tokens); compaction only fires on API error. Breaks long-running agentic sessions. | 13 comments, 15 👍 — **Highest engagement** |
| [#7128](https://github.com/earendil-works/pi/issues/7128) | **Default PI_* guideline over-triggers `env` bash calls** | System prompt biases agents to run `env` inspection on every turn, wasting tokens & prompting permission dialogs. | 11 comments, 7 👍 |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | **High CPU (50–110%) on macOS with long sessions** | TUI becomes unresponsive; correlates with context/session length. Affects daily-drive usability on Mac. | 4 comments, 5 👍 |
| [#7020](https://github.com/earendil-works/pi/issues/7020) | **Pi sometimes stalls after compaction** | Coordinator-style long sessions hit “warts in compaction” — agent stops continuing. | 10 comments, 2 👍 (CLOSED) |
| [#5886](https://github.com/earendil-works/pi/issues/5886) | **AgentSession settlement/continuation lifecycle bugs** | Meta-issue for recurring bugs where post-run logic resumes from stale transcripts. | 6 comments, 4 👍 |
| [#7053](https://github.com/earendil-works/pi/issues/7053) | **Parallel tool batches drop completed results on sibling stall** | `Promise.all` settles only after full batch; orphaned toolCalls → “No result provided”. Follow-up to #3503. | 4 comments (IN PROGRESS) |
| [#7771](https://github.com/earendil-works/pi/issues/7771) | **v0.84.1 fails to start: `zlib.createZstdDecompress` missing** | Node 23 lacks Zstd; blocks upgrade. | 5 comments (CLOSED) |
| [#7702](https://github.com/earendil-works/pi/issues/7702) | **DeepSeek via opencode zen gateway: `reasoning_content` must round-trip** | 400 errors on multi-turn/tool-call conversations. Root cause in `detectCompat()`. | 6 comments (CLOSED) |
| [#7740](https://github.com/earendil-works/pi/issues/7740) | **Custom tool renderers lost after `/reload` if registered on `session_start`** | MCP & other extensions break rendering until full restart. | 2 comments |
| [#7787](https://github.com/earendil-works/pi/issues/7787) | **Bash PI_* guideline triggers unnecessary permission prompts** | Duplicate of #7128 symptom; models run `env` on unrelated tasks, spawning permission dialogs. | 1 comment (CLOSED) |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#7784](https://github.com/earendil-works/pi/pull/7784) | `refactor(agent): derive recovery state from record queries` | OPEN | Removes recovery-specific query APIs; derives state via bounded `findRecords()`. Simplifies SQLite indexes & enforces write-side invariants. |
| [#7801](https://github.com/earendil-works/pi/pull/7801) | `feat(coding-agent): lazily load uncommon syntax grammars` | OPEN | Experimental: defers heavy grammar loads; minor UI invalidation on load. Preserves public `highlight` API. |
| [#7792](https://github.com/earendil-works/pi/pull/7792) | `feat(coding-agent): bridge Cursor CLI auth via local agent session` | CLOSED | Hidden `cursor-agent` extension: `pi cursor status`, model discovery, `pi -p --provider cursor` — no `CURSOR_API_KEY` needed. |
| [#7780](https://github.com/earendil-works/pi/pull/7780) | `TUI performance improvement` | CLOSED | Incremental markdown parsing + lazy render invalidation; partial old-content parsing on startup. |
| [#7749](https://github.com/earendil-works/pi/pull/7749) | `fix(coding-agent): preserve custom tool renderers after reload` | CLOSED | Emits `session_start` **before** rebuilding history so tools registered there are available for render. |
| [#7710](https://github.com/earendil-works/pi/pull/7710) | `feat(agent): restore suspended harness operations` | CLOSED | Implements harness v2 recovery (R3): `AgentHarness.create` loads from existing session log. |
| [#7762](https://github.com/earendil-works/pi/pull/7762) | `feat(provider): Introduce LM Studio provider` | OPEN | New local-model provider; tests gated by `LM_STUDIO_BASE_URL`. |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | `feat: Add Amazon Bedrock Mantle OpenAI Responses provider` | OPEN | Uses OpenAI’s Bedrock provider; supersedes earlier attempt. |
| [#7722](https://github.com/earendil-works/pi/pull/7722) | `feat(coding-agent): add theme override` | OPEN | `--use-theme dark` or `--use-theme dayowl/nightowl` overrides stored theme for current run. |
| [#7758](https://github.com/earendil-works/pi/pull/7758) | `feat(coding-agent): add exit foreground task and ctx.version` | CLOSED | Extensions can spawn long-running foreground server (e.g., `/web` UI) on Pi exit while keeping terminal. |

---

## 5. Feature Request Trends

1. **Provider & Model Ecosystem Expansion** — LM Studio (#7762), Bedrock Mantle (#6216), Cursor CLI bridge (#7792), Qwen Individual (v0.84.1), DeepSeek gateway fixes (#7702).  
2. **Extension & Tooling Ergonomics** — Agent Plugins spec support (#7776), safe session replacement API (#5952), tool renderer persistence (#7749), `getAllTools()` exposing `execute`/renderers (#7800).  
3. **TUI/UX Polish** — Theme override CLI (#7722), sticky last-prompt header (#7802), copy-on-select toggle (#7757), fullscreen menu positioning (#7786), auto-theme reliability (#7770, #7595).  
4. **Session & Context Reliability** — Compaction correctness (#6879, #7020), harness recovery (#7710, #7784), parallel tool result preservation (#7053).  
5. **Performance & Resource Efficiency** — Lazy grammar loading (#7801), incremental markdown parsing (#7780), CPU usage on long sessions (#7730).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Compaction unreliability** | #6879 (15 👍), #7020, #5886 — context overflows, agent stalls, or resumes from wrong transcript. |
| **System prompt side-effects** | #7128, #7787 — default `PI_*` guideline causes spurious `env` calls & permission prompts. |
| **TUI fragility on long sessions** | #7730 (CPU), #7740 (renderer loss), #7595 (theme repaint), #7798 (crash on resume). |
| **Extension API gaps** | #5952 (session replacement), #7800 (tool decoration), #7783 (agent_end sendMessage), #7760 (LaTeX rendering). |
| **Environment/dependency assumptions** | #7771 (Node 23 Zstd), #7796 (`which` vs `command -v`), #7791 (Undici header limit). |
| **Provider-specific quirks** | #7702 (DeepSeek reasoning_content), #7709 (OpenAI Responses namespace), #7782 (Bedrock empty-key validation). |

---

*Generated from `earendil-works/pi` GitHub data (releases, issues, PRs updated 2026-08-07 → 2026-08-08).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-08

## Today's Highlights
- **Nightly release v0.21.7** shipped with CI autofix improvements and new documentation for `serve` sub-session concurrency.
- **Major MCP stability fixes** landed: hot-reload metadata now refreshes without reconnecting, and timeout error wrapping preserves original codes for proper retry logic.
- **Daemon/serve layer expanding rapidly** — new batch skill toggle API, pollable turn-status endpoints, cross-worktree Git guards, and Qoder plugin compatibility layer all in active PRs.

---

## Releases
### v0.21.7-nightly.20260808.4ec0371e6
- **CI fix**: autofix takeover now surfaces blocked admission (#8410)
- **Docs**: documented `serve` sub-session concurrency behavior  
🔗 [Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.7-nightly.20260808.4ec0371e6)

---

## Hot Issues (Top 10 by relevance)
| # | Title | Why it matters | Status | Reaction |
|---|-------|----------------|--------|----------|
| [#8527](https://github.com/QwenLM/qwen-code/issues/8527) | Wrapped timeout errors drop original error code → no auto-retry | Core reliability: streaming requests with thinking enabled fail silently instead of retrying transport errors | **CLOSED** (fixed in #8531) | 3 comments |
| [#8492](https://github.com/QwenLM/qwen-code/issues/8492) | MCP metadata hot reload leaves stale session registrations | Changing `trust`/`includeTools`/`excludeTools` without transport change left tools/prompts/resources stale | **CLOSED** (fixed in #8522) | 3 comments |
| [#8513](https://github.com/QwenLM/qwen-code/issues/8513) | [ACP] Emit `usage_update` for JetBrains context-usage indicator | IDE integration gap: JetBrains AI Assistant shows no context usage while Codex ACP does | **CLOSED** | 3 comments |
| [#8495](https://github.com/QwenLM/qwen-code/issues/8495) | `stream-json` interrupt aborts reusable session controls | Non-interactive mode: Ctrl-C kills control dispatcher, making session unusable for subsequent turns | **CLOSED** | 3 comments |
| [#8296](https://github.com/QwenLM/qwen-code/issues/8296) | qqbot sender openid prompt-handling follow-ups | Deferred gaps from PR #8233: username-less fallback, positional-rule hole, surrogate mock, dedup key cap | **CLOSED** | 1 comment |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | Fleet Shepherd Dashboard (auto-maintained) | CI fleet health tracking — shows idle PRs (#8667, #8665) and scan signals | **OPEN** | 3 comments |

> **Note**: 4/6 issues updated today are now **closed** with fixes merged — strong signal of rapid triage-to-fix cycle.

---

## Key PR Progress (Top 10 by impact)
| # | Title | Type | Impact |
|---|-------|------|--------|
| [#8531](https://github.com/QwenLM/qwen-code/pull/8531) | fix(core): preserve timeout retry metadata | **Bug fix** | Restores transport-retry path for OpenAI-compatible timeouts; wraps original error in `cause`, normalizes HTTP status |
| [#8522](https://github.com/QwenLM/qwen-code/pull/8522) | fix(core): refresh MCP session metadata without reconnecting | **Bug fix** | Separates handle lifecycle from transport identity; re-projects `trust`/`includeTools`/`excludeTools` on change |
| [#8525](https://github.com/QwenLM/qwen-code/pull/8525) | fix(core): resolve Qwen 3.8 reasoning budget conflicts | **Bug fix** | Prevents conflicting `reasoning_effort` + `thinking_budget` in DashScope requests; enforces config precedence |
| [#8663](https://github.com/QwenLM/qwen-code/pull/8663) | fix(cli): scrub inherited loader env vars from daemon subprocesses | **Security/Stability** | Strips `NODE_OPTIONS`, `NODE_PATH`, `LD_*`, `BASH_ENV` etc. from `qwen serve` child processes |
| [#8645](https://github.com/QwenLM/qwen-code/pull/8645) | fix(core): confirm read-only git commands when repo config executes programs | **Security** | Git read-only allowlist now accounts for repo-local config that can exec programs (e.g., `git diff` → pager) |
| [#7948](https://github.com/QwenLM/qwen-code/pull/7948) | fix(core): separate hook context from transcript display | **Architecture** | Wraps sanitized hook context in `<qwen:user-prompt-submit-context>`; clean display text retained |
| [#8675](https://github.com/QwenLM/qwen-code/pull/8675) | feat(web-shell): add model-specific reasoning controls | **Feature** | Built-in registry for Thinking/Effort controls per model; first registration: `qwen3` |
| [#8664](https://github.com/QwenLM/qwen-code/pull/8664) | feat(daemon): add batch skill toggle API | **Feature** | Enable/disable up to 100 skills in one request; partial success preserved, per-target errors reported |
| [#8707](https://github.com/QwenLM/qwen-code/pull/8707) | feat(chrome): add Qwen WebBridge direct browser control | **Feature** | Kimi-compatible `/command` + `/status` endpoints; 17-action surface; task-scoped tab ownership |
| [#8682](https://github.com/QwenLM/qwen-code/pull/8682) | feat(serve): add pollable turn-status endpoints for daemon sessions | **Feature** | `GET /session/:id/turns/:promptId` & `/turns/current` for external turn lifecycle polling |

---

## Feature Request Trends (from Issues + PRs)
1. **ACP/IDE integration parity** — `usage_update` emission (#8513), JetBrains context indicators
2. **Daemon/serve as first-class platform** — batch skill API (#8664), turn polling (#8682), WebBridge (#8707), cross-worktree guards (#8687)
3. **Model reasoning control standardization** — per-model registry for thinking/effort (#8675), Qwen 3.8 budget conflict resolution (#8525)
4. **Extension/plugin ecosystem expansion** — Qoder compatibility layer (#8661), archive-based WebShell extension install (#8621)
5. **Observability/telemetry alignment** — OpenTelemetry session lifecycle events (#8616), Fleet Shepherd dashboard (#7167)

---

## Developer Pain Points (recurring themes)
| Area | Symptom | Frequency |
|------|---------|-----------|
| **Streaming/timeout handling** | Wrapped errors lose retry metadata; thinking-enabled streams hit 60s+ timeouts | 2 issues + 1 fix PR today |
| **MCP session consistency** | Metadata changes (tools/trust) not reflected without full reconnect | 1 issue + 1 fix PR today |
| **Non-interactive CLI robustness** | `stream-json` interrupt kills session controls; WebSearch config UX unclear | 1 issue + 1 fix PR + 1 UX PR |
| **Environment leakage in daemon** | Loader env vars (`NODE_OPTIONS`, `LD_PRELOAD`) inherited from launch shell | 1 security PR today |
| **Git command safety** | Repo-local config can exec programs during "read-only" ops (`git diff`, `git log`) | 1 security PR today |
| **Integration test maintainability** | `tsc` couldn't run on integration-tests; blocking cleanup waits | 2 PRs fixing test infra today |

---

*Generated from QwenLM/qwen-code GitHub activity (2026-08-08 00:00–23:59 UTC). All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-08

## 1. Today's Highlights
The v0.9.4 release train is actively clearing final CI blockers (#5282) while merging key usability fixes: subagent shared-checkout logic corrected (#5284), session title caching fixed (#5258), and MCP registry sync made incremental (#5256). A new UX issue (#5286) surfaces the need for persistent background-task indicators near the composer line. Dependency hygiene continues with 8 dependabot PRs updating Rust crates and GitHub Actions.

## 2. Releases
No new releases in the last 24 hours. v0.9.4 remains in pre-release stabilization (see #5282).

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Status | Why It Matters | Community Signal |
|-------|--------|----------------|------------------|
| [#2934](https://github.com/Hmbown/CodeWhale/issues/2934) Sidebar sessions panel with auto-resume | **CLOSED** | Adds persistent session history sidebar — eliminates `Ctrl+R` friction for session switching | 13 comments; high UX demand |
| [#1425](https://github.com/Hmbown/CodeWhale/issues/1425) Large-text processing (3M chars) hangs on subagent timeout | **OPEN** | Exposes orchestration fragility at scale; 10 subagents spawn but `agent_wait` deadlocks | 6 comments; critical for long-context workflows |
| [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) 464 `#[allow(dead_code)]` hiding compiler drift detection | **OPEN** | Technical debt wall: compiler cannot report dead code across 143 files | 5 comments; maintainability blocker |
| [#2492](https://github.com/Hmbown/CodeWhale/issues/2492) No cross-session memory persistence | **OPEN** | Sessions forget context on restart; memory writes not read on reload | 5 comments; core UX gap |
| [#425](https://github.com/Hmbown/CodeWhale/issues/425) Subagent `resume_from` continuation chains | **CLOSED** | Enables durable subagent recovery via `task_id` — key for reliability | 5 comments, 1 👍; shipped in v0.9.4 |
| [#3306](https://github.com/Hmbown/CodeWhale/issues/3306) v0.9.3 Refactor: converge runtime ownership, single executable | **OPEN** | 18 crates, 771k lines; 87% in `codewhale-tui` — duplication hurts velocity | 4 comments; architectural umbrella |
| [#5123](https://github.com/Hmbown/CodeWhale/issues/5123) **Release blocker**: agent spawn surface over-parameterized | **OPEN** | Builder delegates hit read-only tool contract; self-BLOCKED on valid writes | 3 comments; blocks v0.9.4 |
| [#790](https://github.com/Hmbown/CodeWhale/issues/790) i18n coverage for commands, modals, widgets | **OPEN** | Hardcoded English strings remain after zh-Hant core support | 3 comments; polish gap |
| [#4416](https://github.com/Hmbown/CodeWhale/issues/4416) Stale failed-agent state leaks across sessions | **OPEN** | New workspace instance shows red failed rows from prior session | 3 comments; confusing UX |
| [#5286](https://github.com/Hmbown/CodeWhale/issues/5286) Surface background tasks/subagents near composer line | **OPEN (NEW)** | No glanceable indicator when main turn blocks on background work | 0 comments; fresh UX pain point |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#5282](https://github.com/Hmbown/CodeWhale/pull/5282) | **CLOSED** | Clears 4 CI blockers holding v0.9.4 release; CHANGELOG dated, pins synced |
| [#5284](https://github.com/Hmbown/CodeWhale/pull/5284) | **CLOSED** | Fixes subagent shared-checkout false positives — finished children no longer counted as contenders |
| [#5283](https://github.com/Hmbown/CodeWhale/pull/5283) | **CLOSED** | README rewrite: leads with "mixed fleets — any model in any role" (not just switching) |
| [#5258](https://github.com/Hmbown/CodeWhale/pull/5258) | **OPEN** | Fixes session title stuck at "New Session" — stale in-memory cache overwrote computed title |
| [#5256](https://github.com/Hmbown/CodeWhale/pull/5256) | **OPEN** | MCP registry sync now incremental: cache-first fast return, background download via `tokio::spawn` |
| [#5255](https://github.com/Hmbown/CodeWhale/pull/5255) | **OPEN** | Layer 5.3: Command palette, completion, discovery filtering verification |
| [#5257](https://github.com/Hmbown/CodeWhale/pull/5257) | **OPEN** | Adds `model = "auto"` — selects v4-pro/v4-flash based on prompt complexity |
| [#5252](https://github.com/Hmbown/CodeWhale/pull/5252) | **CLOSED** | Embedders can isolate subagent runtime state roots via `EngineConfig::subagent_state_root` |
| [#5254](https://github.com/Hmbown/CodeWhale/pull/5254) | **CLOSED** | FreeBSD build fix: works around missing rquickjs bindings |
| [#5281–5274](https://github.com/Hmbown/CodeWhale/pulls?q=dependabot) | **OPEN** | 8 dependabot PRs: `jsonschema`, `thiserror`, `clap`, `async-trait`, `serde_json`, docker/login-action, sccache-action, rust-toolchain |

## 5. Feature Request Trends (Distilled from Issues)

1. **Session Continuity & Memory** — Persistent cross-session memory (#2492), sidebar history (#2934), subagent resume (#425), stale state isolation (#4416)
2. **Fleet/Subagent Ergonomics** — Multi-operator fleet configs (#5039), capability-aware role assignment (#5038), advisor watcher (#3982), spawn surface simplification (#5123)
3. **Runtime Observability** — Background task indicators near composer (#5286), structured compaction survival contract (#4394), model-callable `send-later` (#4190)
4. **Configuration Discoverability** — TUI-editable config keys (#3303), i18n coverage (#790), provider/model coherence (#5034), `model=auto` tier selection (#5257)
5. **Reliability Hardenings** — Read-before-edit guardrails (#3364), exec-policy bypass fixes (#5161), credential precedence unification (#5197), MCP hot-reload (#4068)

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Session amnesia** — Context lost on restart; memory writes ignored | #2492, #2934, #4416 | High (3+ issues) |
| **Subagent orchestration fragility** — Timeouts, deadlocks, state leaks at scale | #1425, #425, #3982, #5123 | High (4+ issues) |
| **Config opacity** — Documented keys not editable in TUI; provider/model drift | #3303, #5034, #790 | Medium (3 issues) |
| **Background work invisibility** — No composer-line indicator when blocked | #5286 (new), #4190 | Emerging |
| **Release velocity blocked by CI/flakes** — v0.9.4 held by red lane | #5282, #5151 | Acute (release blocker) |
| **Dead code / technical debt** — 464 `allow(dead_code)` suppressing drift signals | #4785, #3306 | Structural |

---

*Data sourced from github.com/Hmbown/DeepSeek-TUI (CodeWhale) — Issues & PRs updated 2026-08-07 to 2026-08-08.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*