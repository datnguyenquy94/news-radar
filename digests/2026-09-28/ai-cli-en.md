# AI CLI Tools Community Digest 2026-09-28

> Generated: 2026-09-28 05:00 UTC | Tools covered: 10

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

# Cross-Tool AI CLI Ecosystem Comparison — 2026-09-28

---

## 1. Ecosystem Overview

The AI CLI landscape remains highly fragmented but intensely active: **8 of 10 tracked tools shipped code or fixed critical bugs in the last 24 hours**. Big-tech-backed tools (Codex, Gemini, Claude, Copilot) operate on rapid alpha/nightly cadences with dedicated Windows/Linux/macOS teams, while community-driven projects (OpenCode, Qwen, Pi, DeepSeek TUI) iterate faster on architectural experiments—particularly **managed-agent orchestration, durable session state, and provider-agnostic tool calling**. A clear bifurcation is emerging: *productivity assistants* (Claude, Copilot, Gemini) optimizing for interactive polish and enterprise governance, versus *agent runtimes* (Qwen, OpenCode, Pi) building persistence, recovery, and multi-agent primitives. Windows stability, memory leaks in headless modes, and MCP ecosystem fragility are universal pain points.

---

## 2. Activity Comparison

| Tool | Hot Issues (Top 10) | Key PRs (Last 24h) | Release Status |
|------|---------------------|-------------------|----------------|
| **Claude Code** | 10 (3 critical regressions) | 1 (security/telemetry) | None |
| **OpenAI Codex** | 10 (8 Windows-specific) | 10 (all merged by bot) | 6 alphas (0.158/0.159 series) |
| **Gemini CLI** | 10 (subagent, memory, browser) | 12 (quota, sandbox, model pinning) | Nightly v0.63.0 |
| **GitHub Copilot CLI** | 10 (auth, permissions, worktree) | 1 (placeholder) | None |
| **Kimi Code CLI** | 0 | 0 | None (inactive) |
| **OpenCode** | 10 (V2 memory, provider, mobile) | 10 (Cloudflare, LSP, mobile, recovery) | v1.18.33 + V2 beta fixes |
| **Pi** | 10 (session lifecycle, reasoning models) | 5 (codemode/MCP, Bedrock, compaction) | None |
| **Qwen Code** | 10 (install, managed-agent, schema) | 10 (durable state, A2A, Broker, recovery) | None (managed-agent sprint) |
| **DeepSeek TUI** | 6 (v0.10.0 regressions, concurrency) | 14 (v0.10.1 integration + fixes) | v0.10.1 in integration PR |
| **Grok Build** | 0 | 0 | None (inactive) |

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Direction | Tools Demanding | Specific Needs |
|-----------|----------------|----------------|
| **Windows daemon/subprocess invisibility** | Codex (#48074, #48422), Copilot (#4905), Claude (#76185) | `CREATE_NO_WINDOW` for daemon hooks, MCP stdio, sandbox provisioning; eliminate `conhost.exe` flash |
| **Session durability & recovery** | Claude (#86092, #94252), Codex (#48828), Gemini (#22323), OpenCode (#51746, #51213), Pi (#10092), Qwen (#12839, #12854) | Crash-safe resume, compaction without data loss, multi-server session conflict resolution, inbox message persistence |
| **MCP/tool ecosystem reliability** | Claude (#76238, #76239, #97616), Gemini (#21968, #22267), OpenCode (#51545, #51726), Qwen (#12216), Copilot (#4907) | Allowlist persistence, stdio startup races, prompt caching, tool-call schema validation, lifecycle hooks |
| **Memory/performance in headless modes** | Claude (#76185: 10–15 GB RSS), OpenCode (#51761: 24–28 GB OOM), Pi (#9010: compaction duplication), Gemini (#21409: hangs) | Bounded RSS, GC sawtooth restoration, streaming compaction, orphaned background process cleanup |
| **Model/provider flexibility & pinning** | Copilot (#3709, #4950), Gemini (#29420, #29422), OpenCode (#51726, #50833), Pi (#8810, #9905), DeepSeek (#6690, #6694), Qwen (#12886) | BYOK/local model parity, explicit version pinning, reasoning-field handling, proxy-aware downloads, thinking-display control |
| **Token/context transparency** | Claude (#97398, #95721), Gemini (#29429, #24246), Copilot (#2627), Qwen (#12886) | Weekly limit accounting, quota reset timestamps, system prompt overhead reduction, 32K context budget guidance |
| **Cross-platform UX parity** | Claude (#97744), Codex (#25826, #48827), Gemini (#21983), Copilot (#4924, #4905), OpenCode (#51770) | Mobile/web/desktop session sync, Wayland support, terminal viewport stability, multi-monitor window management |

---

## 4. Differentiation Analysis

| Dimension | Productivity Assistants (Claude, Copilot, Gemini, Codex) | Agent Runtimes (Qwen, OpenCode, Pi, DeepSeek TUI) |
|-----------|----------------------------------------------------------|---------------------------------------------------|
| **Core Focus** | Interactive coding, enterprise governance, IDE integration | Durable multi-agent orchestration, workspace persistence, protocol standardization |
| **Architecture** | TypeScript/Node (Claude, Copilot, Gemini, Pi), Rust (Codex) | Rust (OpenCode, Qwen), Go (DeepSeek TUI), TypeScript (Pi) |
| **Session Model** | Ephemeral, user-attached, cloud-synced | Persistent, server-managed, project-scoped, recoverable |
| **Extensibility** | MCP servers, custom agents (Copilot), skills (Gemini) | A2A protocol (Qwen), Broker provider controls (Qwen), LSP/formatter plugins (OpenCode), extension API (Pi) |
| **Target User** | Individual devs, enterprise teams, IDE users | AI-native workflow builders, platform engineers, self-hosted deployments |
| **Maturity Signals** | Stable commands regressing (#92007), quota opacity (#97398) | V2 rewrites in progress (OpenCode), managed-agent contracts hardening (Qwen), compaction redesign (Pi) |

**Notable outliers**: 
- **Codex** straddles both—Rust CLI with desktop app, heavy Windows investment, but also `serve` mode for headless.
- **Copilot CLI** uniquely tied to GitHub ecosystem (worktrees, MCP server catalog, org policies).
- **DeepSeek TUI** focuses on terminal-first UX with git/artifact versioning as first-class primitives.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Velocity / Rapid Iteration** | **Codex** (6 alphas/24h, 10 bot-merged PRs), **Qwen** (10 managed-agent PRs in sprint), **OpenCode** (v1.18.33 + 10 V2 fixes), **Gemini** (nightly + 12 PRs) | Daily releases, structured sprint themes, automated merge pipelines |
| **Stable but Regression-Prone** | **Claude Code** | 3 critical regressions post-reset (quota, memory, model command); high-engagement issues but slow fix cadence |
| **Growing / Pain-Point Driven** | **Copilot CLI** (auth/permission workflow gaps), **Pi** (session lifecycle, reasoning models), **DeepSeek TUI** (v0.10.1 regression batch) | High-👍 issues on workflow blockers; maintainers responsive but backlog-heavy |
| **Quiet / Unclear** | **Kimi Code**, **Grok Build** | No GitHub activity in 24h; possible private development or wind-down |

**Community health indicators**: Codex and Qwen show *structured sprint discipline* (bot merges, integration PRs). OpenCode and Gemini demonstrate *breadth*—fixing provider, UI, mobile, and core bugs simultaneously. Claude’s issue volume is high but fix throughput appears low (1 PR/24h).

---

## 6. Trend Signals for Technical Decision-Makers

1. **Managed-agent infrastructure is the new differentiator**  
   Qwen’s durable workspace state (#12854), A2A access (#12851), terminal recovery fences (#12839), and Broker provider controls (#12868) signal a shift from *chat assistants* to *agent operating systems*. OpenCode’s V2 session recovery (#51746, #51213) and Pi’s codemode/MCP PR (#10040) confirm the direction.

2. **Windows is no longer a second-class target—it’s a blocker**  
   8/10 top Codex issues are Windows-specific (daemon console flash, multi-monitor, privilege errors). Copilot and Claude also report Windows desktop crashes and worktree failures. **Any tool targeting enterprise adoption must invest in Windows-native subprocess/daemon management now.**

3. **Session durability == table stakes**  
   Every active tool has open issues on compaction crashes, resume failures, or message loss. The winners will offer *provable* guarantees: idempotency receipts (Qwen), inbox message persistence (OpenCode), quota metadata surfacing (Gemini), and compaction footer crash fixes (Pi).

4. **MCP standardization is stalling on lifecycle basics**  
   Allowlist persistence (Claude #76238), stdio startup races (Claude #76239), prompt caching (OpenCode #51726), tool-call schema validation (Qwen #12889)—all tools hit the same gaps. **A cross-vendor MCP lifecycle spec (startup, health, caching, auth) is overdue.**

5. **Reasoning-model support requires new primitives**  
   Thinking-block handling (Pi #10033, #10100), signature preservation (Gemini #29432, DeepSeek #6686), effort-tier rendering (DeepSeek #6686), and temperature control (Copilot #4950) are *not* backward-compatible. Tools that treat reasoning as a first-class stream (not text) will win agent workflows.

6. **Telemetry/privacy compliance is becoming explicit product work**  
   Claude (#97688: org-tier collector), Qwen (#12789, #12857: opt-out propagation), Pi (#7658: extension secret storage). **Privacy-by-default config propagation across all code paths is now a checklist item, not an afterthought.**

7. **Mobile/web companions are converging on session parity**  
   Claude (#97744), OpenCode (#51770), Codex (desktop focus) all track cross-device session sync. **Expect “local vs cloud” session indicators and project-scoped tabs to become standard UI.**

---

**Bottom line**: The ecosystem is consolidating around **three pillars**—*session durability*, *provider-agnostic tool calling*, and *managed-agent orchestration*. Tools that ship these as composable primitives (not monolithic features) will define the next generation of AI-native development workflows. For teams evaluating CLIs: prioritize **Windows stability**, **session recovery guarantees**, and **MCP lifecycle maturity** over raw model benchmarks.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-28 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** (#1771) | Automated static analysis of Solidity/Rust smart contracts; anchors cryptographic audit proofs on TON Blockchain via ProofCore's zero-storage Merkle protocol. | Novel Web3 security primitive; introduces blockchain-anchored audit trail to Skills ecosystem. | 🟢 Open |
| 2 | **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** (#1703) | Zero-cost Markdown → MP4 video pipeline with human-like TTS voiceovers via Marp slides. | Addresses high-demand content-repurposing workflow; "direct compile" architecture avoids intermediate rendering steps. | 🟢 Open |
| 3 | **[notion-spec-to-implementation](https://github.com/anthropics/skills/pull/1245)** + **quantitative-resume-auditor** (#1245) | Two skills: (a) transforms Notion specs into implementable Claude Code tasks with acceptance criteria; (b) audits resumes against quantitative benchmarks. | Long-running PR (Jun–Sep); dual-skill submission reflects product/eng workflow automation demand. | 🟢 Open |
| 4 | **[AWT (AI Watch Tester)](https://github.com/anthropics/skills/pull/822)** (#822) | AI-powered E2E testing: zero-code test generation via browser vision, auto-healing selectors, CI/CD integration. | 6-month discussion; addresses "testing gap" for AI-generated UIs; references external OSS project. | 🟢 Open |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (#723) | Comprehensive testing methodology skill: Trophy model, AAA pattern, React Testing Library, contract testing, E2E strategies. | Broad applicability; positions as foundational "testing literacy" skill for all Claude Code users. | 🟢 Open |
| 6 | **[pyxel](https://github.com/anthropics/skills/pull/525)** (#525) | Retro game development in Python: headless input-driven runs, frame inspection, state verification. | Niche but well-scoped; demonstrates Skills extending into creative coding/education. | 🟢 Open |
| 7 | **[document-typography](https://github.com/anthropics/skills/pull/514)** (#514) | Prevents typographic defects in AI-generated docs: orphan/widow control, numbering alignment. | Targets universal pain point (every document Claude generates); high leverage per token. | 🟢 Open |
| 8 | **[blast-radius](https://github.com/anthropics/skills/pull/1776)** (#1776) | Pre-execution checklist for bulk/destructive ops: classifies impact, enforces confirmation gates, archives state. | Safety-critical pattern; fills "query correctness ≠ operational correctness" gap. | 🟢 Open |

> **Note:** PR comment counts were not exported in the source data; ranking reflects repository maintainer sort order (claimed "sorted by comments") and Issue cross-references.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Top Issues) | Implication |
|-------|----------------------|-------------|
| **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills masquerading as official `anthropic/` namespace skills | **Critical** — Users cannot distinguish official vs. community skills; enables permission escalation |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): No org-wide skill library; manual file sharing via Slack/Teams | **High** — Enterprise adoption blocked by distribution friction |
| **Evaluation Infrastructure Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `run_eval.py` 0% trigger rate; [#1383](https://github.com/anthropics/skills/issues/1383) (4 comments): silent benchmark failures, Windows trigger eval breaks | **High** — Skill authors cannot validate triggers; CI/CD integration broken |
| **Skill Creator Tooling Maturity** | [#202](https://github.com/anthropics/skills/issues/202) (8 comments, CLOSED): skill-creator reads like docs not ops skill; [#1681](https://github.com/anthropics/skills/pull/1681), [#1298](https://github.com/anthropics/skills/pull/1298) | **Medium** — Meta-toolchain needs dogfooding; Windows support gaps |
| **Duplicate/Conflicting Skill Packs** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): `document-skills` + `example-skills` install identical content | **Medium** — Packaging confusion wastes context window |
| **Context Window Explosion** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` skill injects 156k tokens in one call | **Emerging** — Skills must optimize token budgets |
| **Governance & Safety Patterns** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments, CLOSED): Agent governance skill proposal; [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments): Reasoning Quality Gate pipeline | **Emerging** — Demand for AI agent safety/ops skills |

---

## 3. High-Potential Pending Skills (Active Discussion, Not Merged)

| Skill / PR | Category | Why It May Land Soon |
|------------|----------|----------------------|
| **[proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** (#1771) | Web3 / Security | Unique blockchain-anchored audit primitive; no existing Skill covers smart contract notarization |
| **[md2video-audio](https://github.com/anthropics/skills/pull/1703)** (#1703) | Content / Media | Zero-cost video generation aligns with "Claude as content pipeline" vision; Marp+TTS stack is production-ready |
| **[AWT (AI Watch Tester)](https://github.com/anthropics/skills/pull/822)** (#822) | Testing / QA | 6-month gestation; solves E2E testing for AI-generated UIs (high pain point); references battle-tested OSS |
| **[notion-spec-to-implementation](https://github.com/anthropics/skills/pull/1245)** (#1245) | Workflow Automation | Directly enables "spec → code" loop in Notion-centric orgs; paired with resume auditor shows practical scope |
| **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (#723) | Engineering Fundamentals | Broad horizontal utility; could become default "testing 101" skill for all users |
| **[blast-radius](https://github.com/anthropics/skills/pull/1776)** (#1776) | Safety / Ops | Addresses production safety gap; checklist pattern is immediately adoptable |
| **[scnet-hpc](https://github.com/anthropics/skills/pull/1615)** (#1615) | HPC / Infrastructure | Profile-based SSH/Slurm workflows for cluster ops; niche but high-value for research computing |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, shareable, and evaluatable Skills* — not just new capabilities. The top signals (namespace spoofing #492, org sharing #228, broken evals #556/#1383) reveal a maturing ecosystem where *distribution security*, *team collaboration*, and *author tooling reliability* are prerequisites for any new Skill to deliver value at scale.**

---

# Claude Code Community Digest — 2026-09-28

## Today's Highlights

No new releases shipped today. Community attention centers on **three critical regressions**: a 3.6× spike in weekly usage-limit consumption post-September 25 reset (#97398), headless sessions leaking 10–15 GB RSS on Linux (#76185), and the `/model opusplan` command suddenly failing with "Unsupported model" after months of working (#92007). A security-focused PR (#97688) extends collector telemetry past the user tier for org-seated `sec-default` configurations.

---

## Releases

*No new releases in the last 24 hours.*

---

## Hot Issues (Top 10 by Community Impact)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#76555](https://github.com/anthropics/claude-code/issues/76555)** `Waiting for API response every reply` (Linux, perf) | Persistent latency on every turn; blocks interactive workflows. | 14 👍, 11 comments — high frustration on Linux |
| **[#92007](https://github.com/anthropics/claude-code/issues/92007)** `/model opusplan` fails “Unsupported model” (Windows) | Regression breaking a stable workflow since Sept 4. | 12 👍, 7 comments — worked for months |
| **[#97398](https://github.com/anthropics/claude-code/issues/97398)** Weekly limit drains ~3.6× faster post-reset | Direct billing/quota impact; 93 → 26 responses per 1%. | New, 3 comments — urgent for heavy users |
| **[#78985](https://github.com/anthropics/claude-code/issues/78985)** Prohibited-actions blocks sandboxed login/account-creation testing | Security rule over-reach prevents legitimate dev/QA flows. | 7 👍, 5 comments — affects agent-based testing |
| **[#68083](https://github.com/anthropics/claude-code/issues/68083)** Desktop “Auto-fix CI” toggle doesn’t apply to local `gh` PRs | Config persistence + cross-platform gap (desktop vs CLI). | 8 👍, 5 comments — workflow breakage |
| **[#94252](https://github.com/anthropics/claude-code/issues/94252)** Turn goes permanently idle on macOS (Bedrock, 2.1.268–2.1.283) | Session stall with zero errors; requires restart. | 4 comments — silent failure mode |
| **[#76185](https://github.com/anthropics/claude-code/issues/76185)** Headless `-p` leaks 10–15 GB RSS on Linux (v2.1.205) | OOM-kills servers; swap thrash at 68 load avg. | 4 comments — severity: production blocker |
| **[#86092](https://github.com/anthropics/claude-code/issues/86092)** `--resume <id> --bg` forks session unexpectedly | Breaks session continuity; docs say `--fork-session` opts in. | 5 👍, 4 comments — CLI contract violation |
| **[#76238](https://github.com/anthropics/claude-code/issues/76238)** Allowlisted MCP tools still prompt on fresh session (macOS) | Permission fatigue; allowlist not honored at session start. | 3 👍, 5 comments — reproduced, closed but pain remains |
| **[#97744](https://github.com/anthropics/claude-code/issues/97744)** Sessions/groups inconsistent across mobile, web, desktop | Cross-platform UX fracture; custom sidebar groups missing. | New, 2 comments — multi-device workflow break |

---

## Key PR Progress

| PR | Summary | Status |
|----|---------|--------|
| **[#97688](https://github.com/anthropics/claude-code/pull/97688)** `sec-default: collector records continue past the user tier` | Extends telemetry collector stream (`classic.*`, `settings.read`) beyond user tier for org-seated `sec-default`; prevents plugin from dropping/rewriting records. | Open (author: poteat) |

*Only one PR updated in the last 24h — a security/telemetry hardening change.*

---

## Feature Request Trends (from all Issues)

1. **MCP Reliability & Ergonomics** — Allowlist persistence (#76238), stdio startup races (#76239), tool-name length limits (#97616), connector deduplication (#97677), cache-hint protocol compliance (#88128).
2. **Cross-Platform Session Sync** — Sidebar groups, session identity, and “local vs cloud” indicators diverge across desktop/web/mobile (#97744, #97734).
3. **Usage Transparency & Control** — Weekly limit accounting (#97398), context/usage toolbar as a menu not a trigger (#95721), cost attribution per session.
4. **RTL / i18n Polish** — Logical CSS properties, mixed LTR/RTL rendering in code blocks (#95850, #83969).
5. **Sandbox / CI Hardening** — `CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` breaking default GH Actions runners (#97730), Linux Cowork enclave key missing (#97685).
6. **Agent/Sub-agent Lifecycle** — Background process orphan/SIGHUP on turn-end (#76461), `--resume --bg` forking semantics (#86092), prohibited-actions in dev sandboxes (#78985).

---

## Developer Pain Points (Recurring Themes)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Silent session stalls / idle event loops** | High (macOS Bedrock) | #94252, #94335, #94261 |
| **Memory leaks in headless/background modes** | High (Linux) | #76185 (10–15 GB RSS), #76461 (orphaned bg procs) |
| **MCP tooling fragility** | High | #76238, #76239, #88128, #97616, #97677, #97707 |
| **Quota/usage accounting opacity** | Rising | #97398 (3.6× spike), no breakdown tooling |
| **Cross-platform UX divergence** | Rising | #97744 (mobile/web/desktop), #97734 (iPad local vs cloud) |
| **Regression on stable commands** | Notable | #92007 (`/model opusplan`), #76239 (SDK MCP startup) |
| **Windows-specific desktop crashes** | Persistent | #49551 (blank screen, Task Manager kill required) |

---

*Digest generated from GitHub data as of 2026-09-28. Links point to live issues/PRs for full context.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-28

---

## 1. Today's Highlights

The project shipped **six alpha releases** across the 0.158.0 and 0.159.0 series in the last 24 hours, indicating rapid iteration on the Rust CLI. Community attention remains heavily focused on **Windows stability**: the top three issues (80, 36, and 25 comments) all involve terminal flashing, daemon console windows, or multi-monitor window management regressions introduced in 0.157.x. A critical Linux regression (#48554) reveals Electron replacing libuv's SIGCHLD handler, causing child-process leaks and "Git unavailable" errors in 26.924 desktop builds.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `0.159.0-alpha.9` → `alpha.12` | Rust CLI alpha | Four incremental alphas in 24h; likely hotfixes for Windows daemon/sandbox issues surfaced in 0.157.x |
| `0.158.0-alpha.15.3` → `alpha.15.4` | Rust CLI alpha | Maintenance track receiving parallel fixes |

> **No changelogs linked** in release notes; watch the [releases page](https://github.com/openai/codex/releases) for formal notes.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#48074](https://github.com/openai/codex/issues/48074) | **Windows: terminal windows repeatedly flash during requests after installing Codex daemon** | Blocks daily workflow; daemon install triggers persistent conhost.exe spam | 80 👍, 42 comments — highest engagement in dataset |
| [#25826](https://github.com/openai/codex/issues/25826) | **Windows Desktop: maximized window spills onto adjacent monitors** | Long-standing multi-monitor UX regression (open since Jun) | 22 👍, 36 comments |
| [#48554](https://github.com/openai/codex/issues/48554) | **Linux Desktop 26.924: Electron replaces libuv SIGCHLD handler → child leaks, "Git unavailable"** | Breaks Git/terminal integration on Linux; root cause identified in Electron runtime | 15 👍, 25 comments |
| [#48043](https://github.com/openai/codex/issues/48043) | **Windows: CLI 0.157.0 fails to start with daemon privilege error (0.156.1 works)** | Regression blocking upgrade; daemon permissions broken | 23 👍, 24 comments |
| [#44736](https://github.com/openai/codex/issues/44736) | **Windows: ChatGPT project prewarming locks local mirrors; startup erases node_repl cwd workaround** | Filesystem locking breaks Node REPL workflows; related to #42215, #34499 | 20 comments, 0 👍 (technical depth) |
| [#48422](https://github.com/openai/codex/issues/48422) | **Windows: visible console windows flash for shell process children on every session/turn** | Companion to #48074; every hook/shell spawn flashes a window | 23 👍, 19 comments |
| [#44768](https://github.com/openai/codex/issues/44768) | **Windows: app-server daemon opens visible console for every hook/shell command** | Same root cause as #48422; daemon stdio handling broken | 4 👍, 15 comments |
| [#48324](https://github.com/openai/codex/issues/48324) | **Windows Desktop: "Unable to load organization settings" blocks Codex composer** | Hard failure preventing any Codex session in desktop app | 3 👍, 14 comments |
| [#48120](https://github.com/openai/codex/issues/48120) | **Windows: CLI 0.157.0 spawns blank Windows Terminal windows during sandbox setup** | Sandbox provisioning UI leak; closed but indicates pattern | 7 👍, 12 comments |
| [#47996](https://github.com/openai/codex/issues/47996) | **macOS CLI 0.157.0: Cmd+C no longer copies selected transcript in iTerm2** | Regression in TUI key handling; affects core copy workflow | 10 👍, 12 comments |

**Pattern**: 8/10 are Windows-specific; daemon/subprocess console management is the dominant failure mode.

---

## 4. Key PR Progress (Recent Merges/Closures)

| # | PR | Category | Summary |
|---|----|----------|---------|
| [#48830](https://github.com/openai/codex/pull/48830) | TUI UX | Short, neutral interruption notice; removes "tell model what to do differently" hint |
| [#48829](https://github.com/openai/codex/pull/48829) | Windows Sandbox | Waits up to 5s for provisioning service start; avoids blocking desktop readiness |
| [#48828](https://github.com/openai/codex/pull/48828) | Threads | Allows archiving threads before first turn (persists non-ephemeral threads early) |
| [#48827](https://github.com/openai/codex/pull/48827) | TUI Terminal | Hand pointer over transcript links in Ghostty/Kitty (excludes multiplexers) |
| [#48824](https://github.com/openai/codex/pull/48824) | Voice/Audio | Aligns RTP timestamps to 20ms packets; fixes jitter/mute receiver rejection |
| [#48819](https://github.com/openai/codex/pull/48819) | Observability | Explicit histogram buckets for tool/skill context metrics (logarithmic + integer bounds) |
| [#48814](https://github.com/openai/codex/pull/48814) | Mermaid Rendering | Preserves punctuation/semicolons in labels; fixes `A["Go []; &"]` class |
| [#48812](https://github.com/openai/codex/pull/48812) | Prewarming | History-aware prewarming for idle threads via `prewarm_with_history()` |
| [#48807](https://github.com/openai/codex/pull/48807) | TUI UX | Shows all turn durations in completion footers (sub-second as `Worked Xms`) |
| [#48805](https://github.com/openai/codex/pull/48805) | TUI UX | Allows transcript wheel scrolling while modal (e.g., "Implement this plan?") is open |

> All 10 PRs closed today by `copyberry[bot]` — indicates automated merge pipeline for pre-approved changes.

---

## 5. Feature Request Trends (Distilled from Issue Themes)

| Direction | Evidence |
|-----------|----------|
| **Windows daemon invisibility** | #48074, #48422, #44768, #48023 — consistent demand for zero-console daemon/spawn |
| **Multi-monitor desktop polish** | #25826 (4mo old), #44702 (update loop) — desktop window management neglected |
| **MCP server lifecycle control** | #48023, #29376, #44736 — timeout/blocking on startup, stdio console leaks |
| **Sandbox provisioning UX** | #48120, #48829 — blank windows, service startup races |
| **Cross-platform TUI parity** | #47996 (macOS copy), #48827 (Ghostty/Kitty), #48800 (list markers) |
| **Thread/session management** | #48828 (archive empty), #48742 (project chats in recents), #39489 (local project chats) |

---

## 6. Developer Pain Points (High-Frequency Frustrations)

1. **Windows Console Spam** — Every daemon hook, MCP stdio server, sandbox refresh, or shell command spawns a visible `conhost.exe`/`powershell` window (issues #48074, #48422, #44768, #48023, #48120, #48869). *Root cause appears to be `CREATE_NO_WINDOW` flag missing in daemon subprocess creation.*

2. **Daemon Upgrade Breakage** — 0.157.0 introduced privilege errors (#48043) and flashing regressions; 0.156.1 remains last stable for many Windows users.

3. **Linux Desktop Child Process Leaks** — Electron 26.924 breaks libuv SIGCHLD handling (#48554), causing "Git unavailable" and thread hangs; workaround requires downgrade.

4. **MCP Startup Blocking** — Remote MCP servers block thread creation for 40s+ (#29376); no async/optional discovery.

5. **Sandbox/Provisioning Opacity** — No visibility into Windows sandbox service state; users see blank terminals or timeouts (#48120, #48829).

6. **TUI Regression Velocity** — Copy broken in iTerm2 (#47996), link selection broken in Windows (#48193), scrolling blocked by modals (#48805) — core editing affordances degrading per release.

---

*Digest generated from GitHub data as of 2026-09-28 00:00 UTC. Next digest: 2026-09-29.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-28

---

## 1. Today's Highlights

- **Nightly v0.63.0 released** with a critical fix for quota error classification that was incorrectly treating zero-delay retries as terminal errors, plus surrogate-pair-safe text truncation for emoji rendering.
- **Subagent reliability remains the top pain point**: multiple P1/P2 issues track silent failures, configuration ignores, hang conditions, and missing observability — affecting both generalist and browser agents.
- **Auto Memory subsystem** is undergoing hardening: three new issues address secret redaction timing, indefinite retry loops on low-signal sessions, and silent patch validation failures.

---

## 2. Releases

### v0.63.0-nightly.20260928.g2fe7c2d3f
**Full Changelog**: [Compare v0.63.0-nightly.20260926...v0.63.0-nightly.20260928](https://github.com/google-gemini/gemini-cli/compare/v0.63.0-nightly.20260926.g2fe7c2d3f...v0.63.0-nightly.20260928.g2fe7c2d3f)

Key changes in this nightly:
- **Quota error classification fix** (#29532): `RetryInfo` delay of zero is now honored, preventing misclassification of routine rate limits as terminal quota exhaustion.
- **Surrogate pair preservation** (#29303, #29304): `ExpandableText` and `sanitizeForDisplay` no longer split UTF-16 surrogate pairs during truncation, fixing emoji rendering in the TUI.
- **SDK JSON parse guard** (#29319): Malformed tool-call arguments no longer crash the streaming session.
- **A2A server middleware order** (#29320): `express.json()` now registers before A2A routes so request bodies parse correctly.
- **Folder trust persistence in sandbox** (#29423): Trust decisions in podman/docker now write to host `trustedFolders.json`.
- **Explicit model ID preservation** (#29420, #29422): Pinned model IDs (e.g., `gemini-3-pro-preview`) no longer silently remap during rollout promotions.
- **Quota metadata surfacing** (#29429): Server-reported `quotaResetTimeStamp`, `quotaResetDelay`, and `uiMessage` now exposed to callers.

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reports GOAL success** | Subagents falsely report success when hitting turn limits, masking failures in multi-agent workflows. P1, needs retest. | 13 comments, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Core agent hangs on simple ops (folder creation); workaround is disabling subagents. High user impact. | 8 comments, 8 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model's bash affinity via zero-dependency sandboxing** | Strategic: align CLI with Gemini 3's native POSIX toolchain training for performance/security. Large effort. | 9 comments, 1 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping** | Epic evaluating tools (tilth/glyph) for surgical code reads — could reduce tokens/turns significantly. | 7 comments, 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini underuses skills & sub-agents** | Models ignore custom skills/subagents unless explicitly invoked; defeats extensibility design. | 6 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory: deterministic redaction & reduced logging** | Secrets sent to model before redaction; service logs skill data. Security/compliance risk. | 5 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Unread low-signal sessions never marked processed, causing repeated re-surfacing. | 4 comments |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` overrides (maxTurns)** | Configuration merging broken for browser subagent; user settings silently dropped. | 4 comments |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform blocker for Linux/Wayland users; termination reason misleading (GOAL). | 4 comments, 1 👍 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Tool explosion (400+) hits API limit; needs smarter scoping. | 3 comments |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#29532](https://github.com/google-gemini/gemini-cli/pull/29532) | **Fix** | Honor `RetryInfo` delay=0 in quota error classification — prevents false terminal errors. |
| [#29527](https://github.com/google-gemini/gemini-cli/pull/29527) | **Fix** | Ensure request contents don't end with a model turn (fixes 400 after `/rewind`/interruption). |
| [#29429](https://github.com/google-gemini/gemini-cli/pull/29429) | **Fix** | Surface server-reported quota limits & reset windows (`quotaResetTimeStamp`, `quotaResetDelay`, `uiMessage`). |
| [#29423](https://github.com/google-gemini/gemini-cli/pull/29423) | **Fix** | Persist folder trust decisions from sandbox to host `trustedFolders.json`. |
| [#29420](https://github.com/google-gemini/gemini-cli/pull/29420) | **Fix** | Preserve explicit `gemini-3-pro-preview` model IDs; only `auto`/`pro` aliases follow rollout. |
| [#29422](https://github.com/google-gemini/gemini-cli/pull/29422) | **Fix** | Extend explicit versioned model ID preservation (fixes Vertex AI 3.5 Flash inaccessibility). |
| [#29432](https://github.com/google-gemini/gemini-cli/pull/29432) | **Fix** | Settle queued tool calls on scheduler disposal — prevents pending callers & post-disposal execution. |
| [#29431](https://github.com/google-gemini/gemini-cli/pull/29431) | **Fix** | Skip invalid TOML policy rules at startup (empty tool names, conflicting shell fields). |
| [#29303](https://github.com/google-gemini/gemini-cli/pull/29303) | **Fix** | Keep surrogate pairs intact at `ExpandableText` truncation boundaries (emoji rendering). |
| [#29304](https://github.com/google-gemini/gemini-cli/pull/29304) | **Fix** | Avoid splitting surrogate pairs in `sanitizeForDisplay` truncation. |
| [#29319](https://github.com/google-gemini/gemini-cli/pull/29319) | **Fix** | Guard `JSON.parse` on tool-call args in SDK stream — malformed JSON no longer kills session. |
| [#29320](https://github.com/google-gemini/gemini-cli/pull/29320) | **Fix** | Register `express.json()` before A2A routes so `req.body` parses for JSON-RPC. |

---

## 5. Feature Request Trends

1. **Subagent Observability & Control** — Trajectory sharing (`/chat share` for subagents #22598), config overrides (#22267), browser session takeover (#22232), and bug report context inclusion (#21763).
2. **AST-Aware Code Navigation** — Precision reads, search, and mapping to cut token waste (#22745, #22746, #19561 "Tactful Extraction").
3. **Persistent Task Tracking** — Replace in-context `WriteToDo` with file-based CRUD (#18836, #21000 experiment with native file tools).
4. **Model Self-Awareness** — Accurate CLI flags, hotkeys, and self-execution knowledge (#21432).
5. **Sandbox-Native Workflows** — Zero-dependency OS sandboxing leveraging model's bash affinity (#19873).
6. **Enterprise/Quota Transparency** — Exposed reset windows, explicit model pinning, folder trust persistence.

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence |
|------------|----------|
| **Subagent opacity & unreliability** | Silent success-on-failure (#22323), hangs (#21409), ignored config (#22267), missing bug context (#21763), underutilization (#21968). |
| **Auto Memory trust & safety gaps** | Post-hoc redaction (#26525), infinite retry loops (#26522), silent invalid patch drops (#26523). |
| **Browser agent platform gaps** | Wayland failure (#21983), lock recovery (#22232), config ignore (#22267). |
| **Token/context bloat** | Large file reads firehose context (+15k tokens/turn per #19561); 400 errors at >128 tools (#24246). |
| **Model version pinning instability** | Explicit IDs silently remapped during rollouts (#29420, #29422). |
| **Sandbox trust UX** | Folder trust lost on container restart (#29423). |
| **Terminal rendering regressions** | Emoji truncation bugs (#29303, #29304), resize flicker (#21924). |
| **Interactive prompt handling** | Vite/app creation stalls at prompts (#22465). |

---

*Digest generated from `google-gemini/gemini-cli` GitHub data (issues/PRs updated 2026-09-28).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-28

---

## 1. Today's Highlights

No new releases were published in the last 24 hours. The issue tracker shows continued community focus on **authentication stability** (long-running process token refresh failures), **permission granularity** (tool whitelists for interactive mode), and **model flexibility** (BYOK/local provider switching within a session). A critical regression affecting desktop app worktree sessions—missing custom agents on fresh spawns—also resurfaced.

---

## 2. Releases

*No releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1973](https://github.com/github/copilot-cli/issues/1973) | **Tool whitelist for Interactive Mode** | Interactive mode forces approval for every tool call—including safe read-only ops (grep, cat, git log). Users want a middle ground between per-call approval and `/allow-all`. | 29 👍, 13 comments — high demand for granular permission control |
| [#1857](https://github.com/github/copilot-cli/issues/1857) | **Cancel/remove enqueued messages** | No way to purge queued messages (Ctrl+Q / Ctrl+Enter) while agent is busy or during `/compact`. Messages execute automatically on agent idle. | 29 👍, 12 comments — workflow disruption for power users |
| [#4929](https://github.com/github/copilot-cli/issues/4929) | **Process-local auth token stops refreshing** | Long-running CLI process permanently loses auth; `/login` doesn't recover it. Requires full restart. Blocks unattended/long sessions. | 9 comments, updated today — critical reliability blocker |
| [#3709](https://github.com/github/copilot-cli/issues/3709) | **Switch models mid-session (incl. BYOK/local)** | `/model` only lists GitHub-hosted models; BYOK pins session to single model via `COPILOT_MODEL`. Prevents local model selection. | 33 👍, 8 comments — key for BYOK/self-hosted adopters |
| [#1613](https://github.com/github/copilot-cli/issues/1613) | **Built-in git worktree lifecycle management** | Request: CLI creates/destroys worktrees as part of problem-solving workflow—safer parallel task isolation. | 38 👍, 4 comments — strong interest in native git workflow integration |
| [#179](https://github.com/github/copilot-cli/issues/179) | **Globally configurable allowed tools** | Mirror Claude Code's global `permissions.allow` in `config.json` to avoid per-session approvals for trusted tools. | 43 👍, 4 comments — highest 👍 count; config-driven security model desired |
| [#4905](https://github.com/github/copilot-cli/issues/4905) | **Desktop app: sessions die — credential registration stale** | Worktree sessions fail with "GitHub credential registration no longer available"; `github-mcp-server` catalog goes stale/fatal. | 4 👍, 6 comments — desktop app reliability issue |
| [#2627](https://github.com/github/copilot-cli/issues/2627) | **Configurable system prompt (reduce token overhead)** | System prompt consumes ~20.5K tokens at start (~10% of 200K window). Tool definitions add ~8.5K. Users want to slim fixed overhead. | 21 👍, 6 comments — context-window pressure for large tasks |
| [#4924](https://github.com/github/copilot-cli/issues/4924) | **Custom agents missing in fresh worktree sessions** | New worktree sessions only show 7 built-in agents; `.github/agents/*.agent.md` not re-scanned after deferred checkout. | 2 comments, updated today — breaks custom agent workflows in worktrees |
| [#4950](https://github.com/github/copilot-cli/issues/4950) | **BYOK forces temperature=0 causing reasoning degeneration** | CLI 1.0.81+ sends `temperature:0` to custom providers, breaking small thinking models (qwen-27b/vLLM) and causing silent hangs on context overflow. | 2 comments, updated today — regression for self-hosted reasoning models |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#3817](https://github.com/github/copilot-cli/pull/3817) | **kCreate "#"** | Open (updated 2026-09-27) | Minimal description ("aquellos"); appears to be a placeholder or test PR. No review activity visible. |

*Only 1 PR updated in the last 24 hours. No substantive feature/fix PRs with review momentum.*

---

## 5. Feature Request Trends

From the issue landscape, five clear directions emerge:

1. **Granular Permission Models** — Users want config-driven tool allowlists (global + per-session), moving beyond binary `/allow-all` vs. per-call approval (#179, #1973).
2. **Session & Context Control** — Compaction reliability (#1571, #3703), message queue management (#1857), and session forking (#1697) indicate demand for finer conversation lifecycle management.
3. **Model Agnosticism & BYOK Parity** — Mid-session model switching (#3709), reasoning-field handling (#3195), and sampling parameter control (#4950) show BYOK users need first-class parity with hosted models.
4. **Native Git Worktree Integration** — Both CLI (#1613) and Desktop (#4924, #4905) users want worktrees as a first-class primitive for parallel, isolated task execution.
5. **Token/Context Efficiency** — Configurable system prompts (#2627) and tool definition overhead reduction reflect pressure on 200K context windows during complex multi-step tasks.

---

## 6. Developer Pain Points

| Pain Point | Frequency Indicators | Impact |
|------------|---------------------|--------|
| **Authentication fragility in long-running processes** | #4929 (updated today), #4905 (desktop credential stall) | Forces restarts; breaks unattended automation and desktop app worktree sessions |
| **Interactive mode approval fatigue** | #1973 (29 👍), #179 (43 👍), #1857 (29 👍) | No middle ground between "approve everything" and "approve every read-only call" |
| **Context loss on compaction** | #1571, #3703, #3335 (subagent output blocked) | Requires manual context reconstruction; undermines trust in long sessions |
| **BYOK/custom provider regressions** | #4950 (temp=0 forced), #3195 (reasoning field ignored), #4623 (Gemini + MCP union types) | Self-hosted model users hit silent failures, hangs, or 400 errors |
| **Worktree/desktop app integration gaps** | #4924 (custom agents missing), #4905 (session death), #4531 (VS Code launch breaks Git) | Desktop + worktree workflow—the promoted modern flow—is unreliable |
| **MCP lifecycle noise** | #4907 (periodic reconnect spam), #3125 (tools/list_changed not reflected mid-turn) | Pollutes history; delays tool availability |

---

*Digest generated from GitHub data as of 2026-09-28. Links point to live issues/PRs for full context.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-28

## 1. Today's Highlights
OpenCode shipped **v1.18.33** with critical provider fixes (Cloudflare AI Gateway timeouts, MCP launch reporting, credential redaction in debug output). The V2 track saw rapid issue resolution: 11 bugs closed today covering PID reuse races, Windows hardlink failures, compaction validation gaps, and inbox message loss. Community focus remains on V2 stability — TUI memory leaks, session recovery races, and mobile UX regressions dominate new reports.

## 2. Releases
**v1.18.33** — Core bugfixes only:
- Cloudflare AI Gateway models now honor `headerTimeout`, `chunkTimeout`, and `timeout` provider options ([#51545](https://github.com/anomalyco/opencode/issues/51545), [#51549](https://github.com/anomalyco/opencode/pull/51549))
- MCP browser launcher exits are now reported when they fail immediately
- Debug configuration output redacts credentials and sensitive headers
- Gemini thinking improvements (details truncated in release notes)

## 3. Hot Issues
| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#17648](https://github.com/anomalyco/opencode/issues/17648) **Session processor infinite retry loop** (CLOSED) | Unbounded exponential backoff with no max retries/circuit breaker — could DoS providers or hang sessions indefinitely | 9 comments, 6 👍; fixed in v1.18.33 |
| [#42950](https://github.com/anomalyco/opencode/issues/42950) **big-pickle socket disconnects silently drop UI** | Built-in provider loses mid-stream connections without UI error; users see "lost" responses | 8 comments, 1 👍; WSL2/Linux, intermittent |
| [#51761](https://github.com/anomalyco/opencode/issues/51761) **TUI OOM: 24–28 GB memory exhaustion in V2** | Linear leak ~500 MB–1 GB/s, no GC sawtooth; process OOM-killed in <1 min; no reliable trigger | 1 comment; critical V2 blocker |
| [#44094](https://github.com/anomalyco/opencode/issues/44094) **Compaction ignores `agents.compaction.model`** | Post-refactor, manual compaction silently uses session model instead of configured compaction model | 4 comments, 2 👍; V2 beta regression |
| [#45856](https://github.com/anomalyco/opencode/issues/45856) **`opencode2 serve` Basic Auth always returns 401** | Configured credentials rejected; browser shows endless login prompt | 5 comments; blocks `serve` with fixed auth |
| [#51726](https://github.com/anomalyco/opencode/issues/51726) **OpenRouter Anthropic models lack prompt caching in `opencode run`** | #39009 fix incomplete — zero cache reads/writes on every step, increasing costs | 2 comments; follow-up to prior fix |
| [#51764](https://github.com/anomalyco/opencode/issues/51764) **Anthropic system updates reject valid tool history** | Chronological system updates between tool call/result rejected; breaks resumption | 2 comments; PR [#51765](https://github.com/anomalyco/opencode/pull/51765) opened |
| [#51213](https://github.com/anomalyco/opencode/issues/51213) **Background service resumes sessions running on another server** | Shared DB causes dual-server session conflict; in-flight calls aborted, duplicate steps run | 1 comment; multi-server deployment hazard |
| [#48520](https://github.com/anomalyco/opencode/issues/48520) **TUI alternate screen corrupted by library console output** | Ajv/schema compilation warnings land inside TUI alternate screen, corrupting display | 3 comments, 1 👍; relates to [#31002](https://github.com/anomalyco/opencode/issues/31002) |
| [#51770](https://github.com/anomalyco/opencode/issues/51770) **Mobile: question controls cut off (Next/Submit inaccessible)** | Long prompts push controls below viewport on iPhone 15 Pro (393×852); users cannot complete agent questions | 2 comments; PR [#51771](https://github.com/anomalyco/opencode/pull/51771) opened |

## 4. Key PR Progress
| PR | Type | Description |
|----|------|-------------|
| [#51549](https://github.com/anomalyco/opencode/pull/51549) | Bugfix | **Apply provider timeouts to Cloudflare AI Gateway models** — fixes #51545; timeouts now propagate through gateway loader |
| [#51765](https://github.com/anomalyco/opencode/pull/51765) | Bugfix | **Defer Anthropic system updates until local tool results emitted** — fixes #51764; handles interrupted/resumed history |
| [#51768](https://github.com/anomalyco/opencode/pull/51768) | Bugfix | **Preserve Gemini `thought_signature` on OpenAI Chat tool calls** — fixes #50833; replayed tool calls now include required signatures |
| [#51757](https://github.com/anomalyco/opencode/pull/51757) | Bugfix | **Leave modified hyperlink clicks to terminal** — fixes #51756; prevents duplicate browser tabs on OSC-8 links |
| [#51771](https://github.com/anomalyco/opencode/pull/51771) | Bugfix | **Keep mobile question controls visible** — fixes #51770; sticky footer for Next/Submit on small viewports |
| [#51766](https://github.com/anomalyco/opencode/pull/51766) | Feature | **Expand collapsed paste placeholder on re-paste** — fixes #8501; `[Pasted ~N lines]` expands back to original text |
| [#51775](https://github.com/anomalyco/opencode/pull/51775) | Feature | **LSP symbol operations** — adds `symbols`, `members`, `refs`, `callers`, `implementations`, `rename` (dry-run) to `lsp` tool |
| [#51767](https://github.com/anomalyco/opencode/pull/51767) | Feature | **Record overflow as compaction reason** — distinguishes provider-rejected-too-long from auto/manual compaction |
| [#51577](https://github.com/anomalyco/opencode/pull/51577) | Bugfix | **Reject relative path segments in repository hosts** — fixes #51576; blocks `..:docs` escaping cache directory |
| [#51769](https://github.com/anomalyco/opencode/pull/51769) | Bugfix | **Distinguish background shell from interrupted command** — shows Background badge only on completed handoff |

## 5. Feature Request Trends
1. **Project-scoped session management** — [#51759](https://github.com/anomalyco/opencode/issues/51759) requests project-level tabs with per-project session lists (flat strip mixes projects today).
2. **Authentication modernization** — [#51763](https://github.com/anomalyco/opencode/issues/51763) asks for Web UI passkey login; [#45856](https://github.com/anomalyco/opencode/issues/45856) shows Basic Auth broken in V2 serve.
3. **Plugin extensibility** — [#51754](https://github.com/anomalyco/opencode/issues/51754) (closed) wanted account credit balance exposed to plugins/API; [#51778](https://github.com/anomalyco/opencode/pull/51778) adds community paste-expand plugin to ecosystem.
4. **V2 parity for V1 services** — [#38528](https://github.com/anomalyco/opencode/issues/38528) tracks LSP/formatter port to V2 core (2 👍).
5. **Mobile-first UX** — [#51770](https://github.com/anomalyco/opencode/issues/51770) and shortcut focus loss [#49815](https://github.com/anomalyco/opencode/pull/49815) show mobile web app gaps.

## 6. Developer Pain Points
| Pain Point | Evidence |
|------------|----------|
| **V2 session recovery races** | #51746 (inbox messages lost between enqueue/claim), #51213 (dual-server resume conflict), #51747 (incomplete compaction advances boundary) |
| **Provider integration fragility** | #51545 (Cloudflare timeouts ignored), #51726 (OpenRouter caching broken), #50833 (Gemini thought signatures dropped), #48180 (DeepSeek reasoning combo rejects) |
| **TUI memory/rendering instability** | #51761 (24–28 GB OOM), #48520 (console output corrupts alt screen), #51756 (duplicate tabs on link click) |
| **Windows-specific CLI/file bugs** | #51745 (hardlink failure disables install protection silently), #51199 (JSON with spaces rejected), #51744 (PID reuse kills wrong process) |
| **Mobile/web UX regressions** | #51770 (question controls off-screen), #49815 (shortcut filter loses focus), #51762 (non-English locale crashes on `todowrite`) |

---

*Digest generated from GitHub data (anomalyco/opencode) covering 2026-09-28 activity. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-28

## Today's Highlights
No new releases shipped today, but the issue tracker shows intense focus on **session lifecycle stability** (startup latency, extension reloading, compaction crashes) and **provider integration correctness** (tool-call handling, auth persistence, thinking-mode rendering). Several high-impact bugs were closed in the last 24h, including a compaction-time footer crash (#10092), session-creation regression (#10105), and missing `AGENTS.md` injection (#10101).

---

## Releases
*None in the last 24h.*

---

## Hot Issues (Top 10)

| # | Title | Status | Why It Matters | Community Signal |
|---|-------|--------|----------------|------------------|
| [#10031](https://github.com/earendil-works/pi/issues/10031) | Pi stuck in "Working..." when thinking stopped with ESC | **CLOSED** | Core UX regression since ~v0.84.0; forces hard restart (`ctrl+c` + `pi -c`) multiple times daily for reasoning-model users. | 16 comments, 2 👍 |
| [#7739](https://github.com/earendil-works/pi/issues/7739) | Set startup-time budget targeting jcode-comparable latency | **OPEN** | Strategic performance goal: close measured gap vs. jcode (median PTY launch). Blocks perception of Pi as "fast" for interactive use. | 10 comments |
| [#8810](https://github.com/earendil-works/pi/issues/8810) | Extension providers ignore `defaultProvider`/`defaultModel` on fresh sessions | **OPEN** | Silent fallback breaks reproducibility for extension authors and users who rely on custom provider registration. | 7 comments, 2 👍 |
| [#10033](https://github.com/earendil-works/pi/issues/10033) | Compaction prompt includes all thinking text, exceeds context window | **OPEN** | Auto-compaction *never succeeds* for reasoning models (DeepSeek V4.1, self-hosted) because thinking blocks are serialized in full. | 6 comments, 1 👍 |
| [#9974](https://github.com/earendil-works/pi/issues/9974) | Mishandles Responses API tool calls from llama.cpp (duplicated/corrupted) | **OPEN** | Breaks local-model workflows; tool-call IDs and arguments get corrupted in SSE stream parsing. | 6 comments |
| [#7658](https://github.com/earendil-works/pi/issues/7658) | Extension API for persisting API-key credentials to `auth.json` | **OPEN** | Critical gap: extensions can register providers but cannot store secrets programmatically, forcing manual user steps. | 5 comments |
| [#9905](https://github.com/earendil-works/pi/issues/9905) | Anthropic `thinking.display` hardcoded to `"summarized"` | **OPEN** | No CLI flag to omit or change thinking display; limits cost/latency control for Anthropic users. | 5 comments |
| [#9946](https://github.com/earendil-works/pi/issues/9946) | CMD mode (`!`) ignores `outputPad: 0` setting | **OPEN** | Inconsistent UX: chat respects padding, shell commands don’t. Small but visible polish issue. | 4 comments |
| [#9010](https://github.com/earendil-works/pi/issues/9010) | Compaction causes memory spikes with local LLMs (in-process string duplication) | **OPEN** | Main-process compaction copies huge conversation strings repeatedly; OOM risk for long sessions with local models. | 3 comments |
| [#10092](https://github.com/earendil-works/pi/issues/10092) | Compaction persists provider usage without `cost` → footer crash on resume | **CLOSED** | Crash-on-resume for any session compacted with a provider omitting `usage.cost` (common with local/custom providers). | 2 comments |

---

## Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#10113](https://github.com/earendil-works/pi/pull/10113) | Keep useful lines when shell output is tail-truncated | **CLOSED** | Preserves relevant lines above the 2k-line/50KB tail when `SUPERCOMPRESS_API_KEY` is set; sends compressed file to model instead of truncating blindly. |
| [#10040](https://github.com/earendil-works/pi/pull/10040) | feat(coding-agent): Codemode and MCP | **OPEN** | Large feature PR adding **Codemode** (for models like Jev) and **MCP** (Model Context Protocol) support in one shot. High strategic value for agent sandboxing. |
| [#8572](https://github.com/earendil-works/pi/pull/8572) | feat(ai): Amazon Bedrock Mantle | **OPEN** | Adds support for Bedrock’s new Mantle API surface (GPT-5.x models), fixing misrouting via Converse API. Blocked on API key perms for e2e test. |
| [#10100](https://github.com/earendil-works/pi/pull/10100) | fix(ai): preserve signature-only reasoning details deltas | **CLOSED** | Fixes dropped reasoning signatures from Claude via OpenRouter (`reasoning.text` delta with `signature` but no `text`). |
| [#10099](https://github.com/earendil-works/pi/pull/10099) | First Git experiment homework | **CLOSED** | Appears to be a contributor onboarding/test PR (modifies `members/jiaqitang-1/README.md` only). |

---

## Feature Request Trends
1. **Extension-first provider/auth model** — Multiple issues (#7658, #8810) demand programmatic credential storage and reliable default-provider selection for extension-registered providers.
2. **Reasoning-model-native compaction** — #10033 and #9010 reveal compaction is not designed for thinking-block-heavy transcripts (context overflow, memory spikes).
3. **Startup/latency budgets** — #7739 and #10104/#10105 show growing demand for measurable, bounded session-creation and extension-loading latency.
4. **Provider-agnostic tool-call handling** — #9974, #10106 highlight fragile assumptions about tool-call ID formats across providers (OpenAI Responses vs. Gemini vs. llama.cpp).
5. **Observability for plan-level errors** — #9408 requests surfacing quota/retired-model errors in `/model` with badges and recovery hints.

---

## Developer Pain Points
- **Session resurrection is fragile**: Compaction crashes on resume (#10092), extensions reload fully per session (#10105), and latency degrades cumulatively (#10104).
- **Reasoning models break core loops**: Thinking text blows up compaction (#10033), streaming signatures are dropped (#10100), and ESC handling hangs the UI (#10031).
- **Extension authoring is second-class**: No secret persistence (#7658), provider defaults ignored (#8810), and no auth-context threading (#10112).
- **Local/self-hosted model gaps**: llama.cpp tool-call corruption (#9974), compaction OOM (#9010), and missing catalog defaults (#10108).
- **Terminal-edge crashes**: EIO on stdin read (#10110), OSC 52 skipped after native copy (#10114), and bash approval false positives (#10109).

---

*Generated from `github.com/badlogic/pi-mono` issue/PR activity (2026-09-27 → 2026-09-28).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-28

## 1. Today's Highlights
The project is heavily focused on **managed-agent infrastructure** and **core reliability fixes**. Multiple PRs landed or advanced today around durable workspace collaboration, terminal recovery fences, remote shell result delivery, and Broker provider controls — signaling a push toward production-grade multi-agent workflows. Simultaneously, two high-priority bugs were addressed: a **vendored ripgrep executable-bit regression** (affecting fresh global installs) and a **tool-call schema gap allowing empty arguments for required fields**. The Batch API workflow (`/batch-api`) closed after maintainer verification, with follow-up test/robustness items tracked separately.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (10 Noteworthy)

| Issue | Priority | Category | Why It Matters | Community Reaction |
|-------|----------|----------|----------------|-------------------|
| [#12679](https://github.com/QwenLM/qwen-code/issues/12679) Fresh global install ships vendored ripgrep at 0644 — no path restores the exec bit | P1 | Bug (installation/packaging) | **Critical install breakage**: fresh `npm i -g @qwen-code/qwen-code` yields non-executable ripgrep; self-update doesn’t heal it. Blocks users on Linux/macOS. | 5 comments, active investigation; PR [#12892](https://github.com/QwenLM/qwen-code/pull/12892) opened today to fix at resolution time. |
| [#12829](https://github.com/QwenLM/qwen-code/issues/12829) fix(cua-sdk): honor proxy configuration when downloading native payload | P2 | Bug (integration/installation) | **Proxy support gap** for `@qwen-code/cua-sdk` native binary downloads — blocks enterprise/air-gapped Mac installs. Follow-up from PR [#11799](https://github.com/QwenLM/qwen-code/pull/11799) macOS verification. | 5 comments; tracked as follow-up item 5 from computer-use relay work. |
| [#12889](https://github.com/QwenLM/qwen-code/issues/12889) Deferred `tool_call` schema allows empty arguments for tools with required fields | P2 | Bug (tools/core) | **Schema validation hole**: model can invoke tools with `{}` args even when fields are required, causing confusing downstream errors (e.g., `web_search` with empty query). | 3 comments; ready for human review. |
| [#12886](https://github.com/QwenLM/qwen-code/issues/12886) Custom-provider guidance for models with a 32K context budget | P3 | Feature (configuration/token-management) | **Custom-provider ergonomics**: users need documented way to reduce tool/system payload or get preflight warning when tool set exceeds 32K context. | 4 comments; roadmap-tagged for context-performance. |
| [#12890](https://github.com/QwenLM/qwen-code/issues/12890) Uncomfortable view, Screen shifting | P3 | Feature (ui/rendering) | **Terminal UX regression**: viewport shifts as bottom boundary changes during execution; contrasts with stable-bottom behavior in Open Code. Affects menus, tool output, composer. | 3 comments; waiting for feedback, roadmap-tagged terminal-ux. |
| [#12707](https://github.com/QwenLM/qwen-code/issues/12707) qwen batch: follow-ups deferred from #12492 maintainer verification | P3 | Bug (cli/commands) | **Batch API hardening**: execution-verified gaps from PR [#12492](https://github.com/QwenLM/qwen-code/pull/12492) (now closed) — non-critical but affect robustness. | 4 comments; blocked, linked to [#12677](https://github.com/QwenLM/qwen-code/issues/12677) test gaps. |
| [#12677](https://github.com/QwenLM/qwen-code/issues/12677) follow-up(batch-api): test gaps and robustness items deferred from #12492 | P3 | Feature (cli/testing) | **Test coverage debt**: deliberate deferral of test gaps from Batch API launch; none affect billing/delivery safety. | 3 comments; blocked, tracker for [#12707](https://github.com/QwenLM/qwen-code/issues/12707). |
| [#12887](https://github.com/QwenLM/qwen-code/issues/12887) test(managed-agent): Close H0b record contract follow-ups deferred in #12863 | P2 | Enhancement (development/testing) | **Managed-agent contract closure**: finalizes H0b record contract audit items from [#12863](https://github.com/QwenLM/qwen-code/issues/12863); only critical findings blocked that PR. | 3 comments; part of managed-agent hardening sprint. |
| [#12216](https://github.com/QwenLM/qwen-code/issues/12216) bug(lsp): MCP workspace-discovery starts second unused LSP server set per ACP process | P2 | Bug (core/mcp) | **Resource leak**: `--experimental-lsp` (default for `qwen serve` ACP children) spawns duplicate LSP server sets per process. **Closed today**. | 3 comments; fixed via PR (not listed in top 20). |
| [#11954](https://github.com/QwenLM/qwen-code/issues/11954) Fleet Shepherd Dashboard | — | Bot-maintained | **Fleet health telemetry**: auto-updated dashboard showing bot fleet status, scan signals, syncs, releases. Last tick 2026-09-28T04:58:10Z. | 0 comments; operational visibility. |

## 4. Key PR Progress (10 Important)

| PR | Status | Summary | Significance |
|----|--------|---------|--------------|
| [#12892](https://github.com/QwenLM/qwen-code/pull/12892) fix(core): restore vendored ripgrep exec bit at resolution time | Open | **Fixes #12679**: `resolveRipgrep()` now `chmod 0755` the bundled binary if exec bit missing (no-op on Windows). Runs at runtime selection, not just managed-update path. | **Unblocks fresh global installs** immediately; targeted, low-risk fix. |
| [#12839](https://github.com/QwenLM/qwen-code/pull/12839) feat(managed-agent): Add W0e terminal recovery fences | Open | Implements `ABANDONED` terminal state for executions with authoritatively lost runtime journal — retains request, idempotency receipt, execution identity without inventing results. | **Durability primitive** for managed-agent recovery; enables safe replay/abandon decisions. |
| [#12894](https://github.com/QwenLM/qwen-code/pull/12894) feat(managed-agent): Add durable remote Shell result delivery | Open | O2 remote result path: bounded stdout/stderr publication, immutable catalog/object storage, fixed-version range reads, Session receipt admission, Broker + worker Tool v3 routing, Hosted recovery. | **Core infrastructure** for persistent, auditable remote shell execution in managed workspaces. |
| [#12868](https://github.com/QwenLM/qwen-code/pull/12868) feat(serve): implement generic Broker provider controls | Open | Connects Broker to versioned worker contract (manifest, turn/tool prep, approval, preflight, file history). Durable 7-field reference, starts against original prepared state, no tool assumptions. | **Extensibility backbone** for multi-provider orchestration in `qwen serve`. |
| [#12854](https://github.com/QwenLM/qwen-code/pull/12854) feat(agents): add durable workspace collaboration state | Open | First durable state layer for persistent workspace-agent collaboration: identities, threads, messages, runs, dispatch admission, close obligations, token/turn accounting, fs locking, migration, stranded-run reconciliation. | **Foundation for multi-agent workspace persistence**; enables long-running collaborative workflows. |
| [#12848](https://github.com/QwenLM/qwen-code/pull/12848) feat(serve): add gated Hosted foreground Shell turns | Open | Adds foreground Shell turns under `hosted-workspace-shell/1` profile: existing file tools, commands run in saved Workspace, full stdout/stderr in SQL Session Store, model gets bounded terminal. | **Hosted workspace interactivity** — brings REPL-like shell to managed agents with full audit trail. |
| [#12851](https://github.com/QwenLM/qwen-code/pull/12851) feat(agents): add A2A access and sharing for workspace agents | Open | A2A 1.0 JSON-RPC access: discover agent, send work, query/cancel tasks, retry without duplicate work. Web Shell sharing issues one-time token, expires after use. Extracted from [#12582](https://github.com/QwenLM/qwen-code/issues/12582). | **Agent-to-agent protocol** enablement; critical for composable multi-agent systems. |
| [#12883](https://github.com/QwenLM/qwen-code/pull/12883) feat(managed-agent): Add strict configuration snapshot & Managed compatibility evaluation (M3) | **Closed** | Implements M3 slice of ordinary-host Managed engine: strict read-only config snapshot + compatibility evaluation required before session runs on Managed. | **Safety gate** for managed execution; prevents config drift at runtime. |
| [#12789](https://github.com/QwenLM/qwen-code/pull/12789) fix(core): honor usage-statistics opt-out for extension lifecycle events | Open | Extension lifecycle events (install/uninstall/update/enable/disable) were logged via throwaway `Config` missing `usageStatisticsEnabled`/`proxy` — now passes resolved opt-out. | **Privacy compliance**: ensures telemetry opt-out respected for extension manager operations. |
| [#12857](https://github.com/QwenLM/qwen-code/pull/12857) fix(cli): honor usage-statistics opt-out and proxy in `qwen mcp reconnect` | Open | `qwen mcp reconnect` used `createMinimalConfig()` without `usageStatisticsEnabled`/`proxy`, silently defaulting telemetry on. Now propagates both. | **Consistent privacy posture** across CLI commands; closes proxy gap for MCP reconnect. |

## 5. Feature Request Trends
From the open issues and PR themes, three clear directions emerge:

1. **Managed-agent / multi-agent orchestration** — Durable state (#12854), A2A access (#12851), terminal recovery (#12839), remote shell delivery (#12894), Broker provider controls (#12868), configuration snapshots (#12883). The project is building a **production-grade agent runtime** with persistence, sharing, and recovery.
2. **Custom-provider flexibility & context management** — #12886 (32K context guidance), plus ongoing work on token accounting (#12854) and memory recall (#10183). Users need **predictable context budgets** for non-Qwen models.
3. **Terminal/UX stability** — #12890 (screen shifting), #9305 (bottom-align VP content), #12876 (macOS titlebar drag region). **Viewport stability** during streaming output is a recurring pain point.

## 6. Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Install/packaging reliability** | #12679 (ripgrep exec bit lost on fresh global install), #12829 (proxy ignored for native payload downloads) | High — blocks onboarding |
| **Telemetry/privacy leaks** | #12789 (extension lifecycle ignores opt-out), #12857 (`qwen mcp reconnect` ignores opt-out + proxy) | Medium — multiple code paths bypass config |
| **Tool-call schema laxity** | #12889 (empty args allowed for required fields) | Medium — causes silent/confusing failures |
| **Terminal viewport instability** | #12890 (screen shifts), #9305 (top-aligned VP content), #12876 (macOS panel close button under titlebar) | Medium — UX friction in daily use |
| **LSP resource duplication** | #12216 (duplicate LSP servers per ACP process) — now closed | Resolved — but indicates config propagation bugs |
| **Batch API test/robustness gaps** | #12677, #12707 (deferred from #12492 verification) | Low — post-launch hardening |

---

*Generated from `github.com/QwenLM/qwen-code` data as of 2026-09-28. Links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-28

## 1. Today's Highlights
The project is preparing **v0.10.1** with a batch integration PR (#6672) that merges multiple ready fixes. Critical bugs in the v0.10.0 release are being addressed rapidly: OpenRouter pricing is broken (#6690/#6691), `exec` fails on large prompts (>128 KiB) due to `E2BIG` (#6688/#6692), and first-launch provider selection ignores configured defaults (#6687/#6694). A CPU spin-loop under concurrent TUI sessions (#6573) remains under triage.

## 2. Releases
No new releases in the last 24 hours. The `v0.10.1` integration PR (#6672) is open and aggregates fixes for the issues above.

## 3. Hot Issues

| Issue | Type | Why It Matters | Community Reaction |
|-------|------|----------------|-------------------|
| [#6573](https://github.com/Hmbown/Codewhale/issues/6573) | Bug | **CPU spin-loop** when multiple TUI sessions contend on the subagents store; affects FreeBSD 15 and likely cross-platform. Idle processes pin CPU cores. | 1 comment, 0 👍 — under triage, no workaround yet |
| [#6688](https://github.com/Hmbown/Codewhale/issues/6688) | Bug | `codewhale exec` only accepts prompt via `argv`; kernel limit (~128 KiB/arg) causes `E2BIG` before startup. Blocks large-context automation. | 0 comments — **fixed by #6692** (adds `--prompt-file`/stdin) |
| [#6690](https://github.com/Hmbown/Codewhale/issues/6690) | Bug | OpenRouter turns show "rate unavailable" in v0.10.0; `~`-alias IDs break provider-lake refresh and `custom_models` overrides are ignored. | 0 comments — **fixed by #6691** |
| [#6689](https://github.com/Hmbown/Codewhale/issues/6689) | Enhancement | `tool_call_after` hooks lack the **effective command** after admission/rewrites, making post-execution auditing unreliable. | 0 comments — design discussion needed |
| [#6546](https://github.com/Hmbown/Codewhale/issues/6546) | Enhancement | Todo list has **no delete/clear action** in known menus; tasks persist indefinitely. UX gap for task management. | 0 comments — persistent since v0.9.x |
| [#6695](https://github.com/Hmbown/Codewhale/issues/6695) | Enhancement | Request to add a **Tsubasa provider descriptor** via existing compatible transport, avoiding custom provider boilerplate. | 0 comments — awaiting maintainer sign-off |

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#6672](https://github.com/Hmbown/Codewhale/pull/6672) | Open | **v0.10.1 integration PR** — merges ready PRs in one CI run to avoid CHANGELOG conflicts. |
| [#6692](https://github.com/Hmbown/Codewhale/pull/6692) | Closed | **Fix `exec` large prompts** — adds `--prompt-file <PATH>` and stdin (`-`) support; resolves #6688. |
| [#6691](https://github.com/Hmbown/Codewhale/pull/6691) | Closed | **Fix OpenRouter pricing** — tolerates bad rows in `/v1/models`, uses declared rates fallback; resolves #6690. |
| [#6694](https://github.com/Hmbown/Codewhale/pull/6694) | Closed | **First launch respects configured provider** — stops defaulting to Ollama when a provider+key is set; follows up #6687. |
| [#6693](https://github.com/Hmbown/Codewhale/pull/6693) | Closed | **Root default model stays with its provider** — prevents misrouting when config has root `default_text_model` but provider lacks explicit model. |
| [#6696](https://github.com/Hmbown/Codewhale/pull/6696) | Closed | **Clear missing-key state on keyed provider switch** — fixes first-launch picker showing "needs key" despite env vars. |
| [#6686](https://github.com/Hmbown/Codewhale/pull/6686) | Open | **Footer thinking label at all effort tiers** — scales min column width 24→32 so `xhigh`/`ultra` labels don't truncate at 80 cols. |
| [#6684](https://github.com/Hmbown/Codewhale/pull/6684) | Open | **Bound RLM turns by wall-clock budget** — prevents indefinite stalls; returns partial result in `[rlm_query incomplete: …]` form. |
| [#6685](https://github.com/Hmbown/Codewhale/pull/6685) | Open | **Confined reads for anchors/notes/registry** — single helper with no-follow, containment checks; trusted-workspace only for pinned anchors. |
| [#6682](https://github.com/Hmbown/Codewhale/pull/6682) | Open | **Scope `/undo` to changed paths** — replaces whole-tree restore with path-scoped revert; stacked on thread-snapshot ownership (#6645). |
| [#6660](https://github.com/Hmbown/Codewhale/pull/6660) | Open | **Typed artifact references on turns** — items, turn aggregate, workspace delta, read routes; stacked on #6645. |
| [#6648](https://github.com/Hmbown/Codewhale/pull/6648) | Open | **Git write preconditions** — optional `expect_*` fields on stage/unstage/discard/commit to prevent races. |
| [#6635](https://github.com/Hmbown/Codewhale/pull/6635) | Open | **Background work completion notifications** — tells user when/why it ends; builds on #6634. |
| [#6663](https://github.com/Hmbown/Codewhale/pull/6663) / [#6662](https://github.com/Hmbown/Codewhale/pull/6662) | Open | **Chinese i18n Tier-2/3 docs** — 30 developer/user docs translated under `docs/zh_hans/` with cross-links. |

## 5. Feature Request Trends
1. **Provider ecosystem expansion** — First-class descriptors for compatible providers (Tsubasa #6695) instead of custom provider configs.
2. **Hook observability** — Richer post-admission execution context (#6689) for audit/debug tooling.
3. **Todo/task management** — Basic CRUD (especially delete/clear) for the built-in todo list (#6546).
4. **Large-input ergonomics** — File/stdin prompt passing for `exec` (#6688) and likely TUI paste handling.
5. **Internationalization** — Systematic Chinese localization (Tier-2/3 complete, EPIC #5482).

## 6. Developer Pain Points
- **v0.10.0 regressions**: OpenRouter pricing broken, `exec` prompt size limit, first-launch provider misselection, missing-key UI state leak — all hit within days of release.
- **Concurrency hazards**: Subagent store contention causes CPU spin-loops (#6573); git write races (#6648); undo restoring whole tree (#6682).
- **Hook blindness**: `tool_call_after` cannot see the actual executed command after admission rewrites (#6689).
- **RLM unbounded turns**: No wall-clock timeout led to stuck turns (#6684).
- **Todo list immutability**: No documented way to remove tasks (#6546).
- **Large prompt workflow**: `E2BIG` blocks automation pipelines (#6688).

---

*Data source: [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) — Issues & PRs updated 2026-09-27 to 2026-09-28.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*