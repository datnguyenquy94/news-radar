# AI CLI Tools Community Digest 2026-05-01

> Generated: 2026-05-01 00:21 UTC | Tools covered: 8

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## Cross-Tool Comparison

# Cross-Tool AI CLI Ecosystem Report — 2026-05-01

## 1. Ecosystem Overview

The AI CLI tools landscape has matured into a competitive multi-polar market with seven actively developed tools serving distinct user segments. Billing transparency and cost control have emerged as universal trust infrastructure, while agentic autonomy—write permissions, sub-agent observability, and session persistence—represents the next capability frontier. Rust and TypeScript dominate implementation languages, reflecting performance and terminal UI ecosystem choices. Enterprise readiness (SSO, audit logging, gateway support) increasingly separates production contenders from hobbyist tools. The pace of releases varies dramatically, from GitHub Copilot CLI's rapid patch cadence to OpenCode's feature-heavy but less frequent ships.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Releases (24h) | Release Velocity Pattern |
|:---|:---:|:---:|:---:|:---|
| **Claude Code** | 50 | 4 | 0 | Irregular; quality-gated, no nightly |
| **OpenAI Codex** | ~15 | 10 | 4 (1 stable, 3 pre) | Aggressive: stable + alpha + nightly tiers |
| **Gemini CLI** | ~10 | 10 | 2 (bot-authored patches) | Patch-driven; preview/stable branches |
| **GitHub Copilot CLI** | ~10 | 1 | 3 (rapid patches) | Highest patch cadence; direct-commit culture |
| **Kimi Code CLI** | ~8 | 10 | 1 | Regular minor releases; community PR friendly |
| **OpenCode** | ~15 | 10 | 0 | Feature-heavy PRs; vouched contributor system |
| **Pi** | 20+ closed, ~5 new | 10 | 1 (breaking) | Bursty; security-focused closure patterns |
| **Qwen Code** | ~12 | 10 | 3 (stable + preview + nightly) | Structured channels; nightly versioning issues |

*Note: Issue/PR counts are approximate based on digest scope; tools with internal workflows (Copilot) undercount public PR activity.*

---

## 3. Shared Feature Directions

| Requirement | Tools | Specific Needs |
|:---|:---|:---|
| **Cost/usage transparency** | Claude Code, Kimi, OpenCode, Qwen | Sub-agent token counting (#55121), cache visibility (#55133), quota reset predictability (#55150), usage calculation disputes (#1994), model cost estimation (#3631) |
| **Session persistence & mobility** | Claude Code, Kimi, OpenCode, Qwen, Gemini | Working directory changes (#3473), cross-session memory (#1283), ACP session replay (#2132), `/chat` save/load (#3190), background agent resume (#3739) |
| **Permission granularity** | Copilot, Claude Code, Kimi | Tool whitelists (#1973), per-tool persistent approvals (#1995/#2114), escape from binary approve-all/approve-each |
| **Undo/recovery mechanisms** | Codex, Qwen, OpenCode | `/undo` restoration (#9203), conversation edit/rewind (#3762), `/rewind` stale state fixes (#26286) |
| **Reasoning content lifecycle** | OpenCode, Qwen, Claude Code | Preserve/strip/replay reasoning tokens (#25184, #25185, #23927, #3750/#3772), thinking trace visibility (#24285) |
| **Enterprise auth & deployment** | Pi, Copilot, Codex, Gemini | Headless OAuth (#1968), SSO without phone gating (#20161), Cloudflare/Bedrock gateways (#3856, #3462), ephemeral CI credentials (#4025) |
| **Voice mode maturity** | Gemini, (emerging elsewhere) | Cursor-aware transcription (#26287), auth unification (#26301), visual feedback (#26284) |

---

## 4. Differentiation Analysis

| Dimension | Leaders | Distinctive Approach |
|:---|:---|:---|
| **Target user** | | |
| *Enterprise/team* | Copilot, Codex, Pi | Deep IDE integration (Copilot), persisted goal workflows (Codex), gateway/caching infrastructure (Pi) |
| *Power user/automation* | Claude Code, Kimi, Qwen | Maximal agent autonomy, shell-native workflows, long-running background tasks |
| *Model-agnostic flexibility* | OpenCode, Pi | 15+ providers (OpenCode), extensible provider factory (Pi) |
| **Technical architecture** | | |
| *Rust performance* | Codex, (partial Kimi) | Memory safety, TUI responsiveness, MSIX sandboxing |
| *TypeScript/Node ecosystem* | Claude Code, Gemini, OpenCode, Pi | Rapid iteration, rich terminal UI libraries (Ink, blessed) |
| *Python SDK expansion* | Qwen | PyPI distribution (#3685), Jupyter-adjacent workflows |
| **Agent philosophy** | | |
| *Human-in-the-loop* | Copilot, Claude Code | Explicit approvals, plan mode, tool-call review |
| *Autonomous delegation* | Qwen, Kimi | Background agents, auto-skill extraction, sub-agent orchestration |
| *Goal-centric persistence* | Codex | `/goal` workflows with pause/resume across sessions |

**Critical gaps creating switching friction:**
- Claude Code: write permission restrictions (#16550) block full automation vs. competitors
- Codex: removed `/undo` (#9203) leaves safety gap vs. Claude/Qwen rewind
- Gemini: 2,342 open issues suggest triage capacity constraints vs. focused competitors
- OpenCode: memory leaks (#20695) and provider whack-a-mole threaten long-session reliability

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|:---|:---|:---|
| **High momentum, maturing** | OpenAI Codex, Kimi Code CLI | Codex: 10 PRs, 4 releases, Vim mode merged, goal workflows shipped. Kimi: 10 PRs including performance fixes, ACP protocol completion, rapid 1.41.0 release with cross-product bug fix |
| **Stable, large-scale** | Claude Code, GitHub Copilot CLI | Claude: 50 issues tracked, intense billing investigation, but slow release cadence. Copilot: 3 patches in 24h, direct-commit culture, enterprise feature depth |
| **Active, finding product-market fit** | Pi, Qwen Code, OpenCode | Pi: 20+ issues closed, security-focused, breaking changes (v0.71.0). Qwen: structured release channels, desktop app expansion (#3778). OpenCode: vouched contributor system, memory optimization community analysis |
| **Scaling challenges** | Gemini CLI | 2,342 open issues, 440 open PRs, bot-authored patches, backlog health PR (#26304) suggests metrics-driven triage needed |

**Velocity vs. stability tradeoff:** Codex ships fastest but accumulates regressions (input handling, macOS CPU). Claude Code moves slower but triggers deeper investigation when issues emerge (HERMES.md billing bug: 81 comments). Pi's bursty closure pattern risks community fatigue from breaking changes.

---

## 6. Trend Signals

| Signal | Evidence | Strategic Implication |
|:---|:---|:---|
| **Billing as trust infrastructure** | Claude Code's HERMES.md bug (#53262), sub-agent undercounting (#55121), Kimi quota disputes (#1994) | Cost transparency is now table stakes; tools without granular, real-time usage visibility will lose enterprise adoption |
| **Agent observability gap** | Hidden thinking traces (#24285), sub-agent token omission (#55121), subagent success misreporting (#22323) | As agents delegate to sub-agents, recursive observability becomes critical for debugging and cost control |
| **Session as unit of work** | Codex `/goal` persistence, Qwen background resume (#3739), Kimi ACP replay (#2132), Claude cwd change requests (#3473) | Users expect AI sessions to match their multi-day, multi-repo workflows; session mobility is the new "save file" |
| **Provider abstraction strain** | DeepSeek reasoning_content breaks (#3750/#3772), Bedrock switching (#24648), OpenRouter caps (#25148), hardcoded GPT limits (#24751) | Multi-model flexibility creates combinatorial test burden; unified provider abstraction is competitive moat |
| **Terminal UI as differentiated surface** | Vim composer mode (Codex), wave animations (Gemini), context progress bars (Kimi), color corruption fixes (OpenCode) | TUI polish signals maturity; power users increasingly choose tools based on flow-state ergonomics |
| **Security model evolution** | Pi's credential sandboxing (#4035), Copilot's headless OAuth, Claude's permission fatigue (#1973) | Extension/plugin ecosystems require principled security boundaries; auth flexibility vs. exfiltration risk is tension point |
| **Windows persistent underinvestment** | Defender false-positives (Codex #20315), clipboard failures (Kimi #1617, Pi #2469), quit hangs (Qwen #3185), path resolution (Codex #19562) | Cross-platform parity remains aspirational; dedicated Windows QA resource is differentiator |

---

*Report compiled from community digest data through 2026-05-01. For tool-specific deep dives, reference individual digest sections.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
**Data as of 2026-05-01 | Repository: [anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. Top Skills Ranking

| Rank | Skill | PR | Status | Description |
|:---|:---|:---|:---|:---|
| 1 | **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | 🟡 Open | Typographic quality control for AI-generated documents—prevents orphans, widows, and numbering misalignment. Addresses universal pain point in Claude's document output. |
| 2 | **ODT / OpenDocument** | [#486](https://github.com/anthropics/skills/pull/486) | 🟡 Open | Create, fill, read, and convert ODT/ODS files. Targets open-source/ISO standard document workflows, enterprise interoperability. |
| 3 | **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 🟡 Open | Full testing stack coverage—Testing Trophy philosophy, AAA pattern, React Testing Library, component vs. integration testing strategy. |
| 4 | **Frontend Design** | [#210](https://github.com/anthropics/skills/pull/210) | 🟡 Open | Revised for clarity and actionability; ensures every instruction is executable within a single conversation. |
| 5 | **Skill Quality & Security Analyzers** | [#83](https://github.com/anthropics/skills/pull/83) | 🟡 Open | Meta-skills for evaluating other Skills across 5 dimensions (structure, documentation, security, performance, maintainability). |
| 6 | **Sensory (macOS Automation)** | [#806](https://github.com/anthropics/skills/pull/806) | 🟡 Open | Native macOS automation via AppleScript/osascript—tiered permission system, alternative to screenshot-based computer use. |
| 7 | **ServiceNow Platform** | [#568](https://github.com/anthropics/skills/pull/568) | 🟡 Open | Broad enterprise platform coverage: ITSM, ITOM, ITAM, SecOps, FSM, SPM, CSDM, IntegrationHub. |
| 8 | **SAP-RPT-1-OSS Predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 🟡 Open | SAP's open-source tabular foundation model for predictive analytics on SAP business data. |

**Note:** All top PRs show `Comments: undefined` in metadata—likely indicating high view/engagement activity rather than threaded discussion. No merged Skills appear in the top engagement tier; community attention concentrates on **pending submissions**.

---

## 2. Community Demand Trends

From Issues analysis (by comment volume + 👍 reactions):

| Demand Area | Evidence | Intensity |
|:---|:---|:---:|
| **Org-wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (9 comments, 7 👍) | 🔥🔥🔥 |
| **Enterprise/SSO Compatibility** | [#532](https://github.com/anthropics/skills/issues/532), [#29](https://github.com/anthropics/skills/issues/29) | 🔥🔥🔥 |
| **Skill Reliability & Debugging** | [#556](https://github.com/anthropics/skills/issues/556) (6 comments, 6 👍), [#62](https://github.com/anthropics/skills/issues/62) (10 comments) | 🔥🔥🔥 |
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (4 comments, 2 👍) | 🔥🔥 |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) | 🔥🔥 |
| **Skill Lifecycle Management** | [#406](https://github.com/anthropics/skills/issues/406), [#403](https://github.com/anthropics/skills/issues/403), [#189](https://github.com/anthropics/skills/issues/189) | 🔥🔥 |

**Emerging themes:**
- **Workflow automation** (Obsidian/Git reporting, memory persistence, macOS scripting)
- **Enterprise governance** (agent safety, audit trails, org sharing)
- **Document fidelity** (typography, ODT, DOCX tracked changes, PDF correctness)
- **Meta-quality** (skills that evaluate/improve other skills)

---

## 3. High-Potential Pending Skills

Active PRs with strong technical merit, likely to merge with maintainer review:

| Skill | PR | Why It Lands |
|:---|:---|:---|
| **Document Typography** | [#514](https://github.com/anthropics/skills/pull/514) | Universal problem, zero dependencies, immediately improves all document output |
| **Testing Patterns** | [#723](https://github.com/anthropics/skills/pull/723) | Fills critical gap in Claude's code generation; aligns with industry Testing Trophy model |
| **ODT / OpenDocument** | [#486](https://github.com/anthropics/skills/pull/486) | Enterprise procurement requirement; only open standard alternative to proprietary formats |
| **Sensory (macOS)** | [#806](https://github.com/anthropics/skills/pull/806) | Enables accessibility-focused automation; reduces API costs vs. vision-based approaches |
| **ServiceNow** | [#568](https://github.com/anthropics/skills/pull/568) | Largest enterprise ITSM platform; broad coverage reduces fragmentation |

**Quality-of-life fixes also pending:**
- [PDF case-sensitivity fix #538](https://github.com/anthropics/skills/pull/538), [DOCX bookmark collision fix #541](https://github.com/anthropics/skills/pull/541), [YAML validation #539](https://github.com/anthropics/skills/pull/539) — all by contributor `Lubrsy706`, indicating concentrated maintenance effort.

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for enterprise-grade document fidelity and workflow automation—specifically, Skills that transform Claude from a conversational assistant into a reliable production system with deterministic output quality, organizational sharing, and integration with existing enterprise toolchains (ServiceNow, SAP, ODT, macOS automation).**

---

*Report generated from public GitHub data. PR/Issue links verified against `anthropics/skills` repository.*

---

# Claude Code Community Digest — 2026-05-01

---

## 1. Today's Highlights

The community is reeling from a bizarre billing bug where the string `HERMES.md` in git commit history silently reroutes API requests to extra usage billing, burning through $200+ in credits. Meanwhile, cost transparency remains a dominant theme with multiple new issues exposing hidden token consumption from sub-agents and cache operations. No new releases shipped in the last 24 hours.

---

## 2. Releases

*No releases in the past 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| [#53262](https://github.com/anthropics/claude-code/issues/53262) | **HERMES.md in git commits triggers extra usage billing instead of plan quota** — closed after 81 comments | Most bizarre bug in recent memory: a case-sensitive string in commit history silently bypasses Max plan quota. Exposes deep routing logic vulnerabilities in billing infrastructure. | 177 👍, intense investigation, user burned $200 before detection |
| [#41581](https://github.com/anthropics/claude-code/issues/41581) | **Max subscription auto-downgraded to Free without user action** | Subscription integrity bug affecting paid users' access; strikes at core trust in billing system. | 35 comments, multiple reports, no resolution yet |
| [#3473](https://github.com/anthropics/claude-code/issues/3473) | **Feature Request: Change working directory during session** | Fundamental workflow limitation — developers work across multiple repos and microservices; session restart is friction. | 71 👍, 23 comments, long-running since July 2025 |
| [#16550](https://github.com/anthropics/claude-code/issues/16550) | **Allow Claude to Write/Update Project Files** | Core capability gap — Claude Code reads extensively but write permissions are restricted; blocks full automation workflows. | 38 👍, 21 comments, repeatedly requested |
| [#53872](https://github.com/anthropics/claude-code/issues/53872) | **Opus 4.7 1M context capped at 500K on Max x20 — stale org flag** | Server-side enforcement bug preventing paid users from accessing advertised context limits; "org_level_disabled" flag persists incorrectly. | 11 comments, fresh install doesn't fix |
| [#24285](https://github.com/anthropics/claude-code/issues/24285) | **Can't see Claude's thinking anymore** | Transparency regression — developers rely on thinking traces for debugging prompt behavior and trust. Cross-platform (Windows/Linux). | 26 👍, 7 comments, ongoing frustration |
| [#54200](https://github.com/anthropics/claude-code/issues/54200) | **Memory leak: 10GB RAM in 30 seconds since v2.1.118** | Severe performance regression, project-specific — suggests indexing or context loading pathology. | 5 comments, needs diagnostic tooling |
| [#55121](https://github.com/anthropics/claude-code/issues/55121) | **Token counter omits sub-agent consumption (10× undercount)** | Cost transparency failure — sub-agent API calls invisible to running counter, making budgeting impossible. | 4 comments, fresh report, critical for agent-heavy workflows |
| [#55150](https://github.com/anthropics/claude-code/issues/55150) | **Weekly usage limit reset day drifted Thu→Sat with timer rebase** | Quota system unpredictability — users cannot plan usage when reset timing shifts dynamically. | 3 comments, Max 5x affected |
| [#55149](https://github.com/anthropics/claude-code/issues/55149) | **Windows Desktop: 88MB LocalStorage sync causes 200ms+ input lag** | Performance regression on renderer thread — typing latency destroys flow state. Detailed profiling attached. | 2 comments, well-documented |

---

## 4. Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#55098](https://github.com/anthropics/claude-code/pull/55098) | **Statusline script with context window + rate limit bars** | Community-contributed Bash/Node.js statusline showing model, directory, color-coded context bar, session cost, and 5-hour rate limit visualization | Open |
| [#54873](https://github.com/anthropics/claude-code/pull/54873) | **fix(hookify): replace hand-rolled YAML parser + fix `new_text` field** | Fixes double-escaped backslashes in custom YAML parser and incorrect `new_text` field on Write operations; 39-test regression harness | Open |
| [#19871](https://github.com/anthropics/claude-code/pull/19871) | **Prevent ipset duplicate entry error in devcontainer firewall** | Adds `-exist` flag to `ipset add` for duplicate IP tolerance; fixes postStartCommand failures when DNS returns duplicates | Open |
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | **Add web4-governance plugin for AI governance with R6 workflow** | External plugin for "trust-native internet infrastructure" — cryptographic provenance, T3 trust tensors, entity witnessing | Open |

*Only 4 PRs updated in the last 24 hours; selection covers all active contributions.*

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Cost/usage transparency** | #55121 (sub-agent tokens), #55133 (cache read/write display), #55150 (reset drift), #44098 (configurable memory paths) | 🔥 Critical mass — billing trust eroding |
| **Session/workspace flexibility** | #3473 (cwd change), #16550 (write permissions), #37849 (auto-rename tabs), #37777 (session naming) | Strong — fundamental workflow |
| **Hook system maturity** | #29820 (Stop hooks switch permissions), #39508 (hooks inject at context threshold), #30170 (SessionStart HTTP hooks), #54873 (hookify parser fixes) | Active — infrastructure being built |
| **Cowork mode configurability** | #44098 (memory/CLAUDE.md paths), #55123 (Dispatch pairing state), #40587 (Dispatch rate limit handling) | Growing — enterprise/team use |
| **IDE integration depth** | #31178 (native IDE notifications), #37777 (VS Code rename) | Steady — editor ecosystem expansion |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Severity | Representative Issues |
|------------|-----------|----------|----------------------|
| **Billing/quota opacity** | Very high | 🔴 Critical | #53262, #55121, #55150, #55062, #41581 |
| **Context window limitations & enforcement bugs** | High | 🔴 Critical | #53872 (500K cap), #54200 (memory leak), #39508 (context threshold hooks) |
| **Authentication fragility** | High | 🟡 High | #54443 (OAuth refresh 400), #52871 (MCP OAuth trailing slash), #44297 (git required false positive) |
| **Desktop app performance** | Medium | 🟡 High | #55149 (LocalStorage lag), #52814 (multi-user /tmp collision), #50466 (SIGILL on older Intel) |
| **Agent/sub-agent observability** | Rising | 🟡 High | #55121 (token undercount), #55133 (cache invisible), #24285 (thinking hidden) |
| **Session mobility & persistence** | Medium | 🟡 Medium | #3473 (cwd change), #40587 (Dispatch wedge), #55123 (pairing stuck) |

---

*Digest compiled from 50 issues and 4 PRs updated 2026-04-30 to 2026-05-01.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-05-01

## 1. Today's Highlights

The v0.128.0 stable release ships **persisted `/goal` workflows**—a major UX upgrade letting users create, pause, resume, and clear long-running objectives across sessions via TUI controls and app-server APIs. Meanwhile, the team is aggressively deprecating legacy surfaces (`notify` hooks, workspace-owner nudge gates) and instrumenting deeper analytics (tool-item lifecycle events, terminal reviews). Windows remains the dominant pain point, with Defender false-positives on browser-use skills and automation stalls generating the most noise.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| **[rust-v0.128.0](https://github.com/openai/codex/releases/tag/rust-v0.128.0)** | **Stable release.** Core addition: persisted `/goal` workflows with full app-server API support, model tools, runtime continuation, and TUI controls. Also adds `codex update` self-updater, configurable TUI keymaps, plan-mode nudges, and action-required terminal indicators. |
| [rust-v0.129.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.129.0-alpha.1) | Early alpha; no detailed notes yet. |
| [rust-v0.128.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.128.0-alpha.1) | Pre-release for v0.128.0. |
| [rust-v0.126.0-alpha.17](https://github.com/openai/codex/releases/tag/rust-v0.126.0-alpha.17) | Continuation of 0.126 alpha line. |

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **[#16231](https://github.com/openai/codex/issues/16231)** | **High CPU usage on macOS after VS Code extension update** (M5 Pro, macOS Tahoe). Regression affecting daily productivity; thermal throttling reported. | 🔥 64 comments, 59 👍. Active troubleshooting; users comparing builds. |
| **[#18258](https://github.com/openai/codex/issues/18258)** | **"Computer Use plugin unavailable" despite bundled files existing** on macOS. Blocks core agentic functionality. | 32 comments, 36 👍. Community-derived workaround (`features.apps = true`, cache repair) keeping users unblocked. |
| **[#9203](https://github.com/openai/codex/issues/9203)** | **"/undo" removed—users lose recovery path** for untracked file deletions and uncommitted modifications. | 31 comments, **168 👍** (top-voted open issue). Recurring pain; no official response on restoration timeline. |
| **[#18341](https://github.com/openai/codex/issues/18341)** | **Persistent blurred overlay below composer on Intel Macs** (0.122.0-alpha.1). Renders UI unusable for legacy hardware. | 23 comments, 9 👍. Platform-specific rendering bug; no fix confirmed. |
| **[#20161](https://github.com/openai/codex/issues/20161)** | **SSO re-auth demands phone number** not registered to account. Blocks cross-device login entirely. | 14 comments, 6 👍. Auth policy friction; enterprise users particularly affected. |
| **[#4218](https://github.com/openai/codex/issues/4218)** | **Shift+Enter regression: sends instead of newline** (macOS). Reopens previously fixed #545. | 13 comments, 13 👍. Input ergonomics broken; power users frustrated. |
| **[#19563](https://github.com/openai/codex/issues/19563)** | **Desktop thrashes resume/unsubscribe with >4 heartbeat automations** targeting `target_thread_id`. Automation reliability degrades at scale. | 13 comments. Niche but critical for automation-heavy workflows; no 👍 yet indicates limited user base. |
| **[#18450](https://github.com/openai/codex/issues/18450)** | **Remote compact task fails: stream disconnected** from `chatgpt.com/backend-api`. Context window management breaks mid-session. | 10 comments, 6 👍. Connectivity fragility undermining long sessions. |
| **[#20315](https://github.com/openai/codex/issues/20315)** | **Windows Defender flags `browser-client.mjs` as trojan**. Blocks browser-use skill via security software. | 6 comments, 3 👍. Code-signing/telemetry issue; users must manually whitelist. |
| **[#19271](https://github.com/openai/codex/issues/19271)** | **Bundled `node.exe` fails with "Access is denied" on Windows**, breaking Node REPL and Browser Use plugin. | 6 comments, 6 👍. MSIX sandboxing permissions; skills ecosystem crippled on Windows. |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| **[#20257](https://github.com/openai/codex/pull/20257)** | **Thread metadata: `execution_environment` tagging** for remote-host identification in `thread/start`, `resume`, `fork`. Enables analytics differentiation of local vs. remote sessions. | Open |
| **[#18595](https://github.com/openai/codex/pull/18595)** | **Vim composer mode** for TUI. Modal editing in prompt draft area; exposes Vim-specific actions in keymap picker. | **Merged** |
| **[#20509](https://github.com/openai/codex/pull/20509)** | **Remove workspace owner usage nudge gate**. Unconditional nudge handling + backward-compat flag removal. | Open |
| **[#20524](https://github.com/openai/codex/pull/20524)** | **Deprecate legacy `notify` hooks**. Steers users to lifecycle hook engine; adds migration warning. | Open |
| **[#18748](https://github.com/openai/codex/pull/18748)** + **[#18747](https://github.com/openai/codex/pull/18747)** | **Terminal tool review events + schema** for analytics. Completes instrumentation of human-in-the-loop tool approvals. | Open (stacked) |
| **[#20535](https://github.com/openai/codex/pull/20535)** | **Alt+Enter newline alias** in TUI. Fixes regression where Alt+Enter failed to insert newline (companion to #20501). | Open |
| **[#20534](https://github.com/openai/codex/pull/20534)** | **Graceful exec-server shutdown**. SIGINT/SIGTERM drain, config loading from `$CODEX_HOME/exec-server.toml`, timeout force-kill. | Open |
| **[#19193](https://github.com/openai/codex/pull/19193)** | **Codex Apps auth elicitations**. Routes MCP connector auth failures into TUI app-link flow for URL-mode OAuth. | Open |
| **[#20265](https://github.com/openai/codex/pull/20265)** | **Account-scoped remote plugin cache**. Eliminates auth threading through every plugin call; fixes stale-cache races. | Open |
| **[#20533](https://github.com/openai/codex/pull/20533)** | **Exec-server status endpoints** (`/healthz`, `/readyz`, `/status`, `/metrics`). Observability for production deployments. | Open |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Undo / recovery mechanisms** | [#9203](https://github.com/openai/codex/issues/9203) (168 👍), mid-turn compaction data loss in [#19910](https://github.com/openai/codex/issues/19910) | Very high—longstanding gap in safety UX |
| **Runtime configurability** | [#20477](https://github.com/openai/codex/issues/20477) (reasoning effort slash command), configurable keymaps in v0.128.0 | Growing—users resist CLI restarts for parameter tweaks |
| **Dark mode / system appearance** | [#20491](https://github.com/openai/codex/issues/20491) | Baseline expectation for desktop apps |
| **Windows-native experience** | ARM64 emulation [#17491](https://github.com/openai/codex/issues/17491), performance [#20214](https://github.com/openai/codex/issues/20214), freezes | Platform parity treated as second-class |

---

## 6. Developer Pain Points

| Theme | Frequency | Severity | Representative Issues |
|-------|-----------|----------|----------------------|
| **Windows as second-class citizen** | 🔴 Critical | High | Defender false-positives [#20315](https://github.com/openai/codex/issues/20315), `node.exe` permissions [#19271](https://github.com/openai/codex/issues/19271), automation stalls [#16994](https://github.com/openai/codex/issues/16994) [#19011](https://github.com/openai/codex/issues/19011) [#19969](https://github.com/openai/codex/issues/19969), path resolution [#19562](https://github.com/openai/codex/issues/19562) [#20206](https://github.com/openai/codex/issues/20206), ARM64 emulation [#17491](https://github.com/openai/codex/issues/17491) |
| **Automation reliability** | 🟡 High | High | Heartbeat thrashing [#19563](https://github.com/openai/codex/issues/19563), schedule advancement without execution [#17893](https://github.com/openai/codex/issues/17893), empty sessions [#19969](https://github.com/openai/codex/issues/19969) |
| **Auth / identity friction** | 🟡 High | Medium-High | Phone-number gating [#20161](https://github.com/openai/codex/issues/20161), OAuth scope step-up missing [#20518](https://github.com/openai/codex/issues/20518) |
| **Input regressions** | 🟡 High | Medium | Shift+Enter [#4218](https://github.com/openai/codex/issues/4218), Alt+Enter [#20501](https://github.com/openai/codex/issues/20501) |
| **Safety flag false positives** | 🟢 Moderate | Medium | Cybersecurity overflagging [#19601](https://github.com/openai/codex/issues/19601), usage policy blocks [#7250](https://github.com/openai/codex/issues/7250) |
| **Context / compaction fragility** | 🟢 Moderate | Medium | Remote compact disconnects [#18450](https://github.com/openai/codex/issues/18450), goal state loss after compaction [#19910](https://github.com/openai/codex/issues/19910) |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-05-01

---

## 1. Today's Highlights

The team shipped two patch releases (v0.40.1 and v0.41.0-preview.1) addressing a critical cherry-picked fix, while community-driven backlog health PRs surfaced concerns about 2,342 open issues and 440 open PRs creating survivorship bias in metrics. Voice mode continues to mature with UI polish and cursor-aware transcription, though a new authentication gap between OAuth and API key requirements emerged as an immediate friction point.

---

## 2. Releases

| Version | Notes |
|--------|-------|
| **v0.41.0-preview.1** | Patch release cherry-picking fix `2194da2` to the v0.41.0 preview branch. [Changelog](https://github.com/google-gemini/gemini-cli/pull/26269) |
| **v0.40.1** | Same critical patch applied to stable v0.40.0 branch. [Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.40.0...v0.40.1) |

Both releases were bot-authored, indicating automated patch propagation for a security or stability fix.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware file reads, search, and mapping** | EPIC-level investigation into precision tooling that could reduce token waste and misaligned reads. Directly impacts agent efficiency at scale. | 5 comments, maintainer-driven |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent falsely reports GOAL success after MAX_TURNS** | Silent failures in `codebase_investigator` undermine trust in agent autonomy. Misleading status codes break downstream orchestration. | 4 comments, P1 priority |
| [#24916](https://github.com/google-gemini/gemini-cli/issues/24916) | **Permission prompts repeat for same file** | UX friction breaking flow state; "allow for all future sessions" appears non-deterministic. | 3 comments, user-reported |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** | Follow-up to behavioral evals framework; 76 tests running across 6 model configurations need hardening for production reliability. | 3 comments, engineering quality |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution hangs with "Waiting input"** | Terminal state desync—commands complete but UI remains blocked. Affects basic CLI reliability. | 2 comments, 3 upvotes |
| [#26301](https://github.com/google-gemini/gemini-cli/issues/26301) | **Voice mode requires GEMINI_API_KEY, ignores OAuth** | *New today.* Cloud voice backend forces API key even for authenticated OAuth users, creating a dual-credential burden. | Fresh, needs triage |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | **Model scatters tmp scripts across workspace** | Cleanup burden for users restricting shell execution; violates principle of least surprise for workspace hygiene. | 2 comments |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores settings.json overrides** | Configuration system partially broken for browser subagent; `maxTurns` and other overrides silently dropped. | 2 comments |
| [#22819](https://github.com/google-gemini/gemini-cli/issues/22819) | **Memory routing: global vs. project** | Foundational UX design for persistent memory—determines whether preferences travel with user or repository. | 1 comment, 2 upvotes |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Hard API limit hit by agent tool proliferation; needs intelligent tool scope narrowing. | 1 comment |

---

## 4. Key PR Progress

| # | PR | Status | What It Does |
|---|-----|--------|-------------|
| [#26304](https://github.com/google-gemini/gemini-cli/pull/26304) | **Backlog Health & Stale Policy Optimization** | 🟢 Open | Addresses metrics survivorship bias from 2,342 open issues; proposes new `backlog_size` and `stale_rate` metrics. Bot-authored. |
| [#26303](https://github.com/google-gemini/gemini-cli/pull/26303) | **Nuanced conflict detection in system prompts** | 🟢 Open | Improves bot brain prompts to identify architectural conflicts without deleting complementary workflows; adds critique agent validation. |
| [#26073](https://github.com/google-gemini/gemini-cli/pull/26073) | **Fix bulk of remaining generalist profile issues** | 🟢 Open | Closes [#26072](https://github.com/google-gemini/gemini-cli/issues/26072); targets the default agent profile stability. |
| [#26292](https://github.com/google-gemini/gemini-cli/pull/26292) | **Behavioral eval for file creation/tool selection** | 🟢 Open | Adds eval coverage for `write_file` tool selection, closing [#24806](https://github.com/google-gemini/gemini-cli/issues/24806). |
| [#26286](https://github.com/google-gemini/gemini-cli/pull/26286) | **Fix stale state in `/rewind`** | 🟢 Open | Resets state corruption on rewind command; fixes [#25646](https://github.com/google-gemini/gemini-cli/issues/25646). |
| [#26287](https://github.com/google-gemini/gemini-cli/pull/26287) | **Voice transcription at cursor position** | 🟢 Open | Fixes voice input always appending to end of buffer; now respects `getOffset()` cursor position. |
| [#26284](https://github.com/google-gemini/gemini-cli/pull/26284) | **Wave animation for voice mode** | 🟢 Open | Replaces "Listening..." text with visual wave UI during voice input. |
| [#26285](https://github.com/google-gemini/gemini-cli/pull/26285) | **Resolved sandbox state for auto-update** | 🔴 Closed | Fixed self-update failure when sandbox configured but disabled via CLI flags. |
| [#26289](https://github.com/google-gemini/gemini-cli/pull/26289) | **Checkout PR branch in bot workflow** | 🔴 Closed | Fixes bot brain workflow checking out `main` instead of feature branch on PR comments. |
| [#23608](https://github.com/google-gemini/gemini-cli/pull/23608) | **Subagents aware of active approval modes** | 🟢 Open | Injects Plan Mode/Auto-Edit context into subagents to prevent failure loops; long-running since March. |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **AST-aware codebase intelligence** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) | High — dual EPICs investigating `tilth`/`glyph` integration for precise method-bound reads and codebase mapping |
| **Persistent memory architecture** | [#22819](https://github.com/google-gemini/gemini-cli/issues/22819), [#22809](https://github.com/google-gemini/gemini-cli/issues/22809) | Medium — global vs. project routing and proactive memory writes being designed |
| **Voice mode hardening** | [#26287](https://github.com/google-gemini/gemini-cli/pull/26287), [#26284](https://github.com/google-gemini/gemini-cli/pull/26284), [#26301](https://github.com/google-gemini/gemini-cli/issues/26301) | Active — UI polish and auth unification in parallel |
| **Evaluation & safety infrastructure** | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#23897](https://github.com/google-gemini/gemini-cli/issues/23897), [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Sustained — behavioral evals expanding to subagent rejection handling and destructive behavior prevention |
| **Terminal/rendering robustness** | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#25218](https://github.com/google-gemini/gemini-cli/issues/25218), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935), [#24470](https://github.com/google-gemini/gemini-cli/issues/24470) | Recurring — SSH, screen reader, scrolling, and external editor corruption patterns |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Authentication fragmentation** | Emerging | Voice mode requiring `GEMINI_API_KEY` despite OAuth login forces users to manage dual credentials ([#26301](https://github.com/google-gemini/gemini-cli/issues/26301)) |
| **Agent state misrepresentation** | Recurring | Subagents reporting success on interruption ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) and stale state in `/rewind` ([#26286](https://github.com/google-gemini/gemini-cli/pull/26286)) erode trust |
| **Permission fatigue** | Persistent | Repeated prompts for same file despite "allow for all future sessions" selection ([#24916](https://github.com/google-gemini/gemini-cli/issues/24916)) |
| **Terminal environment fragility** | High | SSH sessions scramble output ([#24202](https://github.com/google-gemini/gemini-cli/issues/24202)), shell hangs ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), scroll jumping ([#24470](https://github.com/google-gemini/gemini-cli/issues/24470)) — suggests Ink/renderer needs systematic hardening |
| **Workspace pollution** | Moderate | Temporary scripts scattered by restricted-shell fallback ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)) |
| **Configuration system inconsistency** | Moderate | Browser agent ignores `settings.json` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), env var string/boolean coercion was patched multiple times ([#25641](https://github.com/google-gemini/gemini-cli/pull/25641), [#25608](https://github.com/google-gemini/gemini-cli/pull/25608)) |

---

*Digest compiled from google-gemini/gemini-cli public repository activity. For full details, visit [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-05-01

## Today's Highlights

GitHub shipped three rapid-fire patch releases (v1.0.40-1 through v1.0.40-3) bringing headless OAuth for MCP servers, universal access to session history and the `/chronicle` command, and improved shutdown UX. The community is actively debating permission granularity with multiple highly-upvoted feature requests for tool whitelisting and per-tool permissions, while a critical segmentation fault on Alpine Linux remains unresolved with significant engagement.

---

## Releases

### [v1.0.40-3](https://github.com/github/copilot-cli/releases/tag/v1.0.40-3)
- **Added:** `client_credentials` OAuth grant type for MCP servers, enabling fully headless authentication without browser interaction
- **Improved:** Immediate "Exiting…" stderr feedback on Ctrl+C during prompt mode; `/research` now uses an orchestrator/subagent model

### [v1.0.40-2](https://github.com/github/copilot-cli/releases/tag/v1.0.40-2)
- **Fixed:** `/update` no longer re-submits the original `-i` prompt after restarting

### [v1.0.40-1](https://github.com/github/copilot-cli/releases/tag/v1.0.40-1)
- **Added:** Azure DevOps repo detection with auto-disabling of GitHub MCP server; session history, file tracking, and `/chronicle` command now GA; skills available as slash commands in ACP clients
- **Improved:** CLI startup speed optimizations

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|------------------|
| [#107](https://github.com/github/copilot-cli/issues/107) | **Segmentation Fault on Alpine Linux** — Tool calls crash CLI in Docker containers using `alpine:latest` | Blocks containerized/CI workflows; Alpine is foundational for minimal Docker images | 🔥 14 comments, 4 👍 — highest engagement, unresolved since Sept 2025 |
| [#1973](https://github.com/github/copilot-cli/issues/1973) | **Tool Whitelist for Interactive Mode** — Request for middle ground between per-call approval and `/allow-all` | Addresses core UX friction: read-only tools (grep, cat, git log) shouldn't require manual approval | 9 comments, 13 👍 — top-voted open feature request |
| [#1455](https://github.com/github/copilot-cli/issues/1455) | **Auto-inject "Co-authored by Copilot"** — Closed as completed; matches Claude's attribution pattern | Git provenance/AI attribution is increasingly important for compliance and transparency | 10 comments, 2 👍; resolved via parallel issue [#975](https://github.com/github/copilot-cli/issues/975) |
| [#1799](https://github.com/github/copilot-cli/issues/1799) | **Turn off alt-screen views** — Users want escape hatch from problematic alt-screen terminal mode | Terminal rendering regressions break workflows; configurability requested | 8 comments, 4 👍 |
| [#1322](https://github.com/github/copilot-cli/issues/1322) | **Show subagent tool call details** — CLI hides subagent internals vs. VS Code Chat's drill-down | Transparency gap between CLI and IDE experience; debugging agent orchestration is hard | 3 comments, 10 👍 |
| [#1995](https://github.com/github/copilot-cli/issues/1995) | **Per-Tool Permission Settings** — Persistent approval for specific tools (e.g., `read_file`) | Complements #1973; users want fine-grained, durable permission policies | 1 comment, 7 👍 |
| [#1082](https://github.com/github/copilot-cli/issues/1082) | **Hangs on sudo commands** — No password prompt for elevated permissions | Breaks system administration workflows; security-sensitive handling needed | 2 comments, 10 👍 |
| [#2795](https://github.com/github/copilot-cli/issues/2795) | **`--agent` fails with `--plugin-dir` in non-interactive mode** | Plugin system inconsistency between TUI and `-p` batch mode | 3 comments, 7 👍 |
| [#2995](https://github.com/github/copilot-cli/issues/2995) | **Can't use DeepSeek API** — Provider configuration fails for DeepSeek via OpenAI-compatible endpoint | Third-party model flexibility increasingly demanded by power users | 2 comments, 5 👍 |
| [#1381](https://github.com/github/copilot-cli/issues/1381) | **Rewind requires git repository** — Excludes users of alternative VCS (e.g., jj) | Accessibility of core features shouldn't be git-exclusive; VS Code copilot works without git | 1 comment, 4 👍 |

---

## Key PR Progress

| # | PR | Description | Status |
|---|-----|-------------|--------|
| [#1968](https://github.com/github/copilot-cli/pull/1968) | **Retry install without token when authenticated requests fail** | Fixes SAML/SSO auth blocking public repo installs by falling back to unauthenticated download | Open, updated 2026-04-30 |

*Note: Only 1 PR updated in the last 24h. The repository appears to prioritize direct commits or internal workflows for most changes.*

---

## Feature Request Trends

1. **Permission Granularity** — The dominant theme. Users reject the binary choice of "approve everything every time" vs. `/allow-all`. Requests span whitelists (#1973), per-tool persistent approvals (#1995), and MCP server-specific controls (#3028). Expect this to drive roadmap prioritization.

2. **Non-Interactive Mode Parity** — Multiple gaps between interactive and `-p` batch mode: MCP sampling denied (#2882), `--agent` + `--plugin-dir` broken (#2795), missing subagent observability (#1322). Headless/automation use cases are underserved.

3. **Git-Optional Workflows** — Core features (rewind #1381, memory storage #3060) assume GitHub/Git remotes. Enterprise and alternative-VCS users are explicitly excluded.

4. **Terminal Rendering Control** — Alt-screen (#1799), OSC 52 clipboard encoding (#3062), and general TTY behavior customization requests indicate terminal UX remains fragile across platforms.

5. **Plugin Ecosystem Maturity** — Skill metadata extensions (temperature #3056), agent inheritance/composition (#3061), hook async behavior (#3063), and config sync (#3058) show plugin system growing pains.

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Crash on Alpine Linux** | #107 — 14 comments, unresolved for 7+ months | 🔴 Critical — blocks Docker workflows |
| **Permission fatigue in interactive mode** | #1973 (13 👍), #1995 (7 👍), #3028, #3049 | 🔴 High — daily UX friction |
| **Authentication instability** | #3057 (re-auth every session), #1968 (SSO install failures) | 🟡 High — trust/retention risk |
| **Rate limiting transparency** | #2769, #2828 — unclear reset timing, no mitigation guidance | 🟡 Moderate — Pro+ subscribers affected |
| **Cross-platform terminal bugs** | #1799, #3062 (Windows/WSL CJK corruption), #1082 (sudo hangs) | 🟡 Moderate — platform parity gaps |
| **MCP configuration churn** | #3059 (`.vscode/mcp.json` deprecation backlash), #2882 | 🟡 Moderate — ecosystem coordination |

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-05-01

## Today's Highlights

Version 1.41.0 shipped with critical fixes for remote Linux development and plugin distribution, while a flurry of shell-mode PRs from community member `bugkeep` targets input latency and UI polish. The ACP protocol gaps blocking Zed IDE integration remain a live concern with an active fix in flight.

---

## Releases

**[v1.41.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.41.0)** — Released 2026-04-30
- **Remote clipboard fix**: Enables `Ctrl+V` paste on headless Linux over SSH where `DISPLAY` is unavailable ([#2115](https://github.com/MoonshotAI/kimi-cli/pull/2115))
- **Plugin zip installs**: `kimi plugin install` now accepts direct `.zip` URLs (e.g., GitHub archive links), streaming via `httpx` before extraction ([#2126](https://github.com/MoonshotAI/kimi-cli/pull/2126))

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|--------------|----------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System — Persistent context across sessions** | The most upvoted long-standing enhancement; would eliminate repetitive project onboarding and let Kimi learn user patterns. No 👍 yet but 5 comments show sustained interest. | Active discussion, no official timeline |
| [#1617](https://github.com/MoonshotAI/kimi-cli/issues/1617) | **Ctrl-V cannot paste pictures in Windows Terminal** | Image paste is broken on Windows Terminal despite working elsewhere; blocks visual debugging workflows. 3 comments, no resolution. | Frustration with platform inconsistency |
| [#2131](https://github.com/MoonshotAI/kimi-cli/issues/2131) | **kimi-cli pollutes env vars, crashes Kimi desktop** ⚠️ *Closed* | Critical cross-product bug where CLI session vars broke Electron desktop startup. Rapidly closed suggests fix shipped in 1.41.0. | Fast response, good |
| [#2127](https://github.com/MoonshotAI/kimi-cli/issues/2127) | **ACP `session/list`, `session/get` unimplemented — Zed can't load history** | Blocks third-party IDE adoption; Zed users lose session continuity. Zero comments suggests under-triaged. | **Needs attention** |
| [#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) | **kimiCode usage calculation allegedly wrong** | User claims 2-hour quota exhausted in 2 tasks due to K2.6's long CoT; disputes "300-1200 requests" marketing. 4 👍 indicates shared concern. | Trust/cost anxiety |
| [#2122](https://github.com/MoonshotAI/kimi-cli/issues/2122) | **Shell mode (Ctrl+X) hardcodes `/bin/sh`** | Breaks zsh/fish aliases, functions, and env expectations for power users. Fresh issue, no traction yet. | Shell fidelity gap |
| [#2121](https://github.com/MoonshotAI/kimi-cli/issues/2121) | **Shift+Enter for line breaks** | Standard UX expectation (Claude Code, others use it); current `Ctrl+J` feels alien. Just filed. | UX parity request |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#2136](https://github.com/MoonshotAI/kimi-cli/pull/2136) | **fix(shell): reduce hidden modal input latency** | Skips completion startup when prompt hides input; uses idle refresh for hidden modals unless fast-refresh explicitly requested. Performance win for password prompts, etc. | Open |
| [#2135](https://github.com/MoonshotAI/kimi-cli/pull/2135) | **fix(shell): throttle toolbar git metadata** | Caches git branch/status per prompt session; stops spawning git subprocesses on every keystroke redraw. Addresses visible lag in large repos. | Open |
| [#2134](https://github.com/MoonshotAI/kimi-cli/pull/2134) | **fix(shell): ignore xterm focus events** | Consumes `ESC [ I` / `ESC [ O` focus reports instead of leaking `[I`/`[O` into user input. Terminal compatibility fix. | Open |
| [#2133](https://github.com/MoonshotAI/kimi-cli/pull/2133) | **fix(agent): include AGENTS.md for custom prompts** | Ensures custom agent prompts inherit `AGENTS.md` instructions without duplication. Fixes agent context consistency. | Open |
| [#2132](https://github.com/MoonshotAI/kimi-cli/pull/2132) | **fix(acp): replay session history on load** | Persists wire history for ACP runs; replays user/assistant/thought/tool events on `session/load`. **Directly addresses #2127's Zed history gap.** | Open |
| [#2114](https://github.com/MoonshotAI/kimi-cli/pull/2114) | **feat(config): granular auto-approval rules** | Ports Claude Code-style configurable auto-approval (per-tool, per-directory) to `config.toml`. Working locally, seeks merge. | Open |
| [#2129](https://github.com/MoonshotAI/kimi-cli/pull/2129) | **fix(plan): respect KIMI_SHARE_DIR for plan files** | Moves plan storage from hardcoded `~/.kimi/plans` to `get_share_dir() / "plans"`; includes migration. Supersedes earlier #2064. | Open |
| [#1972](https://github.com/MoonshotAI/kimi-cli/pull/1972) | **feat(shell): visual context progress bar** | Replaces `context: 0.0%` text with color-coded Unicode block bar (claude-hud style). Polish/feature differentiation. | Open |
| [#2130](https://github.com/MoonshotAI/kimi-cli/pull/2130) | **chore(release): bump to 1.41.0** | Release orchestration PR. Closed with merge. | **Merged** |
| [#2126](https://github.com/MoonshotAI/kimi-cli/pull/2126) | **fix(plugin): support installing from .zip URL** | Enables plugin distribution without git repos. Shipped in 1.41.0. | **Merged** |

---

## Feature Request Trends

1. **Memory / Persistence** — Cross-session context (#1283) and now ACP session replay (#2132) dominate the long-term roadmap. Users want Kimi to be stateful, not a fresh chat each time.

2. **IDE Protocol Completeness** — ACP gaps (`session/list`, `session/get`) block Zed and likely other LSP-style integrations. Third-party tooling is a growth vector but needs fuller API surface.

3. **UX Convergence with Competitors** — Shift+Enter (#2121), visual context bars (#1972), and granular auto-approval (#2114) all mirror Claude Code patterns. Community expects parity.

4. **Environment Respect** — Shell mode should honor `$SHELL` (#2122); plan files should honor `KIMI_SHARE_DIR` (#2129). Users expect CLI tools to integrate, not override, their setups.

---

## Developer Pain Points

| Theme | Evidence | Severity |
|-------|----------|----------|
| **Token economics opacity** | #1994: Quota consumption feels unpredictable with thinking models; marketing claims don't match user experience. Marketing says "300-1200 requests" but K2.6's CoT burns through 2-hour quotas in 2 tasks. | 🔴 High |
| **Windows as second-class** | #1617 (image paste broken), #2132 (ACP test fixture needed Windows fix). Linux/SSH got clipboard fix; Windows Terminal did not. | 🟡 Medium |
| **Shell fidelity gaps** | Hardcoded `/bin/sh` (#2122), git subprocess spam (#2135), focus event leakage (#2134). The interactive shell layer needs systemic hardening. | 🟡 Medium |
| **ACP/IDE integration fragility** | #2127 + #2132 show protocol incompleteness breaks real workflows. Zed adoption is a canary for broader IDE strategy. | 🟡 Medium |
| **Input ergonomics** | #2121 (Shift+Enter) reflects accumulated UX debt. Small friction, high daily impact. | 🟢 Lower |

---

*Digest compiled from github.com/MoonshotAI/kimi-cli activity through 2026-04-30.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-05-01

## Today's Highlights

The team shipped a rapid-fire series of fixes for DeepSeek V4 reasoning replay bugs and provider routing issues, while contributor **kitlangton** landed six vouched PRs refactoring the HttpApi layer for better type safety and auth coverage. Meanwhile, a memory optimization discussion gained significant traction, with one contributor identifying ~90% of compaction cost as avoidable cache misses.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Reaction |
|---|-------|--------------|----------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** — Centralized tracking for memory leaks, requesting heap snapshots from community | Long-running agent sessions are a core use case; unbounded memory growth blocks production adoption | 70 comments, 41 👍; maintainers explicitly banned LLM-generated "solutions" due to noise |
| [#25148](https://github.com/anomalyco/opencode/issues/25148) | **Free BYOK cap exceeded on Kimi k2.6** — OpenRouter free tier blocking requests | Affects OpenCode Go subscribers using BYOK models; unclear if billing or routing bug | 16 comments, 14 👍; closed same day but [#25151](https://github.com/anomalyco/opencode/issues/25151) reports recurrence across *all* models for same user |
| [#14194](https://github.com/anomalyco/opencode/issues/14194) | **SQLite corruption when sharing config between local and Docker** | Common dev setup (host + container workflows); data loss risk | 16 comments; no resolution since February, indicates persistent edge case in state management |
| [#24751](https://github.com/anomalyco/opencode/issues/24751) | **GPT 5.5 context limits hardcoded, ignoring `opencode.jsonc`** | Users paying for larger windows can't access them; regression from PR #24212 | 8 comments; closed after fix, but pattern suggests codex-specific overrides need audit |
| [#24648](https://github.com/anomalyco/opencode/issues/24648) | **AWS Bedrock model switching breaks conversations** | Multi-model workflows (Opus plan → Sonnet build) fail with `undefined` error | 7 comments; active, no fix yet — impacts enterprise Bedrock users |
| [#20261](https://github.com/anomalyco/opencode/issues/20261) | **TUI color corruption after editor mode** | Visual regression affecting daily UX; terminal state management bug | 7 comments; open since March, version 1.3.9 |
| [#25125](https://github.com/anomalyco/opencode/issues/25125) | **Local Ollama missing from GUI providers** | "OpenCode" branding implies local-first; GUI gap forces CLI workarounds | 4 comments; frustration evident — "without any stupid console hacking" |
| [#25120](https://github.com/anomalyco/opencode/issues/25120) | **~90% of compaction cost is avoidable cache miss** | Performance optimization with quantified impact; could reduce long-session latency dramatically | 4 comments; contributor-provided analysis, awaiting maintainer review |
| [#9296](https://github.com/anomalyco/opencode/issues/9296) | **Plan mode handover uses wrong model** | Experimental plan/build split feature broken; cost and quality implications | 4 comments, 10 👍; open since January, indicates architectural debt in agent routing |
| [#24713](https://github.com/anomalyco/opencode/issues/24713) | **Copy-to-clipboard fails silently on Linux** | Basic UX broken; "copied" toast is misleading | 6 comments; terminal-specific (Linux), suggests clipboard abstraction gap |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#25186](https://github.com/anomalyco/opencode/pull/25186) | **Split Bedrock Claude into 200K and 1M context entries** | Prevents users from accidentally selecting wrong context window; adds beta header handling | Open — needs title/compliance |
| [#25185](https://github.com/anomalyco/opencode/pull/25185) | **Synthesize `reasoning-start` when stream omits it** | Fixes UI ordering bugs from malformed reasoning streams; defensive normalization | Open — needs title/compliance |
| [#25184](https://github.com/anomalyco/opencode/pull/25184) | **Optional `stripReasoning` for compaction/cross-model safety** | Prevents reasoning data leakage between models during summarization or model switches | Open — needs title/compliance |
| [#25183](https://github.com/anomalyco/opencode/pull/25183) | **Refactor tool/read to yield `InstanceState.context`** | Migrates off async-local storage reads toward Effect-style context; architectural cleanup | Open — vouched contributor |
| [#25181](https://github.com/anomalyco/opencode/pull/25181) | **Preserve typed errors in session prompt handlers** | Eliminates silent defect conversion at HttpApi bridge; better error observability | **Merged** |
| [#25165](https://github.com/anomalyco/opencode/pull/25165) | **Route child session events to parent ACP session** | Fixes Task tool subagent visibility in ACP clients; closes #21802 | **Merged** |
| [#23612](https://github.com/anomalyco/opencode/pull/23612) | **LSP sync range for Roslyn + fix workspaceSymbol query** | Unblocks C#/Roslyn users; fixes empty query bug making symbol search useless | Open |
| [#23927](https://github.com/anomalyco/opencode/pull/23927) | **Preserve Bedrock Claude reasoning replay** | Fixes interleaved reasoning content loss in Bedrock provider transforms | Open |
| [#25180](https://github.com/anomalyco/opencode/pull/25180) | **Auto-compaction for sub-agents + context overflow detection** | Sub-agents currently hang indefinitely on overflow; brings parity with main agent recovery | Open — needs issue/compliance |
| [#25145](https://github.com/anomalyco/opencode/pull/25145) | **Split `providerOptions` key on dot for OpenAI/Anthropic providers** | Fixes `wafer.ai`-style dotted provider IDs breaking option passing | **Merged** |

---

## Feature Request Trends

1. **Reasoning content lifecycle management** — Multiple PRs (#25184, #25185, #23927) and issues (#24803, #25134) around preserving, stripping, or replaying model reasoning tokens. DeepSeek V4 and Claude variants are the primary drivers.

2. **TUI/UX polish** — Requests for configurable content width (#25142), markdown preview toggle (#13705), copy-to-clipboard reliability (#24713), and color stability (#20261). Suggests terminal UI maturation phase.

3. **LSP and language support gaps** — Vue syntax highlighting (#6273), Java/Gradle timeout extension (#23982), Roslyn fixes (#23612), and docs claiming LSP auto-enabled (#23566). Enterprise language ecosystem coverage is lagging.

4. **Workspace and session management** — Enhanced workspace settings (#13593), session unarchiving (#12393), archive button UX (#25176), and cross-session config sharing (#14194).

---

## Developer Pain Points

| Pain Point | Evidence | Severity |
|-----------|----------|----------|
| **Provider routing and model-specific quirks** | Hardcoded GPT 5.5 limits (#24751), DeepSeek reasoning replay failures (#24803, #25134), Bedrock switching bugs (#24648), MiniMax Windows-only issues (#11091) | **High** — Core value proposition is model flexibility; each provider adds combinatorial test surface |
| **Silent failures and misleading UI** | Copy "succeeds" but doesn't (#24713), config PATCH returns 200 but doesn't apply (#24949), sub-agents hang without error (#25180) | **High** — Erodes trust in automation; users can't debug opaque systems |
| **State management fragility** | SQLite corruption with shared paths (#14194), Zed DB access without clear opt-in (#25164), plan/build model handover broken (#9296) | **Medium-High** — Suggests architectural assumptions about single-process ownership |
| **Documentation drift** | LSP docs claim auto-enable (#23566), actual behavior disabled by default; MCP integration questions (#11391) | **Medium** — Gap between shipped behavior and documented promises |
| **Performance at scale** | Memory megathread (#20695), compaction optimization (#25120), Java LSP timeouts (#23982) | **Medium** — Long-session durability is competitive differentiator; currently resource-intensive |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-05-01

## Today's Highlights

Pi v0.71.0 shipped with a significant breaking change: built-in Google Gemini CLI and Google Antigravity support have been removed, forcing users to migrate to alternative providers. The release also introduces Cloudflare AI Gateway as a new first-class provider, expanding enterprise deployment options. Meanwhile, the community closed 20+ issues in 24 hours, with heavy focus on security hardening, auth flexibility, and provider compatibility fixes.

---

## Releases

### [v0.71.0](https://github.com/badlogic/pi-mono/releases/tag/v0.71.0)

| | |
|:---|:---|
| **Breaking** | Removed built-in Google Gemini CLI and Google Antigravity providers. Existing configurations **must switch** to another supported provider. |
| **New** | Cloudflare AI Gateway provider support via `CLOUDFLARE_API_KEY` / `CLOUDFLARE_ACCOUNT_ID` / `CLOUDFLARE_GATEWAY_ID` |

> ⚠️ **Action required**: Users on Gemini CLI or Antigravity need to reconfigure before next session.

---

## Hot Issues

| # | Issue | Why It Matters | Status |
|---|-------|--------------|--------|
| [#3959](https://github.com/badlogic/pi-mono/issues/3959) | Mistral API 404 errors across all models | Provider-wide breakage affecting multiple model tiers and API keys; indicates upstream API change or routing regression | 🔒 Closed |
| [#3462](https://github.com/badlogic/pi-mono/issues/3462) | Auto-refreshing Bedrock bearer tokens | Critical for enterprise AWS deployments where static tokens expire mid-session; enables long-running CI/agent workflows | 🔒 Closed |
| [#3941](https://github.com/badlogic/pi-mono/issues/3941) | `pi.dev` copy button broken on Firefox | Cross-browser UX regression on marketing/docs site; affects package discovery workflow | 🔒 Closed |
| [#4035](https://github.com/badlogic/pi-mono/issues/4035) | Restrict auth credentials access from context (opt-in) | Security hardening for extensions: prevents malicious or buggy extensions from exfiltrating stored API keys | 🔒 Closed |
| [#3942](https://github.com/badlogic/pi-mono/issues/3942) | `pi update --self` fails with npm `--prefix` | Nix/homebrew-style installations broken by self-updater; affects non-standard Node environments | 🟢 Open |
| [#4018](https://github.com/badlogic/pi-mono/issues/4018) | `grep` tool RCE via argument injection | **Security**: `--pre` flag injection allows arbitrary code execution; severe for untrusted codebases | 🔒 Closed |
| [#3575](https://github.com/badlogic/pi-mono/issues/3575) | Anthropic proxy regression: `eager_input_streaming` causes 400 | Compatibility break with Fireworks and other Anthropic-compatible proxies; tool-calling completely broken | 🔒 Closed |
| [#4026](https://github.com/badlogic/pi-mono/issues/4026) | OpenAI Codex verbosity default regresses tool-calling | `text.verbosity = "low"` causes gpt-5.3-codex to emit commentary instead of tool calls; tasks halt mid-run | 🔒 Closed |
| [#4001](https://github.com/badlogic/pi-mono/issues/4001) | Agent steering not observable at tool boundaries | Embedded safety issue: user corrections queue while stale tool calls execute; latency in human-in-the-loop control | 🔒 Closed |
| [#2469](https://github.com/badlogic/pi-mono/issues/2469) | Clipboard image paste silently fails in WSL | Long-standing Windows/WSL integration pain point; breaks screenshot-to-prompt workflow | 🔒 Closed |

---

## Key PR Progress

| # | PR | What It Does | Status |
|---|-----|-------------|--------|
| [#4037](https://github.com/badlogic/pi-mono/pull/4037) | Handle Shift+Enter in legacy terminals | Fixes SS3 M sequence interpretation; adds regression tests for terminal key handling | 🔒 Merged |
| [#3856](https://github.com/badlogic/pi-mono/pull/3856) | Add Cloudflare AI Gateway provider | Enterprise gateway with caching, analytics, rate limiting, fallbacks; closes #3850 | 🔒 Merged |
| [#4025](https://github.com/badlogic/pi-mono/pull/4025) | Support in-memory auth via `PI_CODING_AGENT_AUTH_JSON` | Ephemeral credentials for CI/ephemeral environments; zero disk persistence | 🔒 Merged |
| [#4024](https://github.com/badlogic/pi-mono/pull/4024) | Support `PI_CODING_AGENT_SESSION_DIR` env var | Runtime session directory override without CLI flags | 🔒 Merged |
| [#4013](https://github.com/badlogic/pi-mono/pull/4013) | Fix PowerShell shellPath on Windows | Removes `detached: true` breaking `pwsh.exe` stdout/stderr pipes | 🔒 Merged |
| [#4007](https://github.com/badlogic/pi-mono/pull/4007) | Official local-LLM provider extensions | Ships `llamacpp`, `lmstudio`, `vllm`, `ollama` async-factory providers as reference implementations | 🔒 Merged |
| [#4000](https://github.com/badlogic/pi-mono/pull/4000) | Compress skill blocks during compaction | Token optimization: ~500-2500 token skill injections compressed to save context window | 🔒 Merged |
| [#3991](https://github.com/badlogic/pi-mono/pull/3991) | Handle duplicate session entries | Fixes `/tree` hangs; deduplicates persisted session records on reload | 🔒 Merged |
| [#3998](https://github.com/badlogic/pi-mono/pull/3998) | Redo Bun package manager `node_modules` handling | Corrects runtime-vs-package-manager detection; fixes tarball distro edge case | 🔒 Merged |
| [#4005](https://github.com/badlogic/pi-mono/pull/4005) | Add Xiaomi MiMo provider | New OpenAI-completions-compatible provider; expands Chinese model ecosystem | 🟢 Open |

---

## Feature Request Trends

| Trend | Evidence | Momentum |
|-------|----------|----------|
| **Ephemeral / CI-friendly auth** | `PI_CODING_AGENT_AUTH_JSON`, restricted auth context (#4035, #4030, PR #4025) | 🔥 High — 3 implementations in 24h |
| **Enterprise AWS/Cloudflare gateway support** | Bedrock token refresh, Cloudflare AI Gateway (#3462, PR #3856) | 🔥 High — production deployment focus |
| **Local/offline LLM ergonomics** | Official local provider extensions (PR #4007), existing Ollama/LM Studio community work | 📈 Growing — privacy + cost drivers |
| **Fine-grained security controls** | Auth restriction opt-in, credential sandboxing (#4035) | 📈 Growing — extension ecosystem maturation |
| **Session portability / state management** | `PI_CODING_AGENT_SESSION_DIR`, duplicate entry handling, resume cwd fixes (PR #4024, #4006, PR #3991) | 📊 Steady — multi-machine workflows |

---

## Developer Pain Points

| Pain Point | Frequency | Impact | Tracking |
|------------|-----------|--------|----------|
| **Self-updater fragility** | 3+ issues | 🔴 High | npm `--prefix`, Bun install, tarball distros all broken (#3942, #3980, PR #3998) |
| **Provider compatibility whack-a-mole** | 5+ issues | 🔴 High | Fireworks Anthropic compat, Mistral 404, Qwen 404, Gemini Vertex JSON validation (#3575, #3959, #3828, #4032) |
| **Cross-platform terminal/clipboard** | 3+ issues | 🟡 Medium | WSL paste, Firefox copy, Shift+Enter legacy terminals (#2469, #3941, PR #4037) |
| **Extension auth/credential model** | 3+ issues | 🟡 Medium | Hardcoded pricing, auth access scope, in-memory vs. disk credentials (#3982, #4035, #4030) |
| **Model registry staleness** | 2+ issues | 🟡 Medium | Missing `compat` flags, deprecated packages in registry (#4016, #3950) |

---

*Digest compiled from [badlogic/pi-mono](https://github.com/badlogic/pi-mono) activity 2026-04-30 to 2026-05-01.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-05-01

---

## 1. Today's Highlights

Qwen Code shipped **v0.15.6** with critical CLI stability fixes for SubAgent display flickering and sticky TODO panels. The community is actively debating architecture changes around **auto-memory recall latency** (#3759, #3761) and **fastModel configuration isolation** (#3760, #3765), signaling growing maturity in production deployments. A major new desktop application package with Qwen ACP SDK integration landed in PR review, expanding beyond CLI/VSCode into standalone application territory.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **[v0.15.6](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6)** | 2026-04-30 | Fix memory transcript path for dream feature; bound SubAgent display by visual height to eliminate flicker; preserve sticky TODO panel state |
| **[v0.15.6-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.6-preview.0)** | 2026-04-30 | Same fixes as stable, pre-release channel |
| **[v0.15.3-nightly.20260430.da2936336](https://github.com/QwenLM/qwen-code/releases/tag/v0.15.3-nightly.20260430.da2936336)** | 2026-04-30 | Nightly build with same patches (note: semver ordering issue flagged in #3756) |

**Notable**: The nightly versioning scheme (`0.15.3-nightly` < `0.15.5` stable) created confusion—fixed in release process discussions.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|--------------|-------------------|
| **[#3652](https://github.com/QwenLM/qwen-code/issues/3652)** | Input length 400 error: `Range of input length should be [1, 983616]` | Hard ceiling on context window breaking long conversations; blocks sustained development workflows | 8 comments, active triage; PR #3698 proposes auto-compression fix |
| **[#3759](https://github.com/QwenLM/qwen-code/issues/3759)** | Auto-memory recall blocks every turn for ~5s | Core latency regression in interactive flow; directly impacts perceived responsiveness | Spawned follow-up #3761 for architectural decoupling; P0-level attention |
| **[#3730](https://github.com/QwenLM/qwen-code/issues/3730)** | Auto-stop interrupts long-running tasks without user input | Regression from v0.15.x breaking week-long agent tasks; reliability concern for power users | P1 priority; user reports "even heavy tasks for more than a week" now fail |
| **[#3772](https://github.com/QwenLM/qwen-code/issues/3772)** / **[#3750](https://github.com/QwenLM/qwen-code/issues/3750)** | DeepSeek V4 Pro + thinking mode: 400 error on `reasoning_content` | Cross-provider compatibility breakage; reasoning content not relayed in multi-turn | Closed #3750, but #3772 reports persistence—needs deeper fix |
| **[#3765](https://github.com/QwenLM/qwen-code/issues/3765)** | fastModel inherits main model's per-model settings | Configuration leak causing unintended reasoning/thinking on lightweight side queries; cost/performance impact | Filed same day as #3760; pair of issues driving fastModel architecture rethink |
| **[#3748](https://github.com/QwenLM/qwen-code/issues/3748)** | Non-interactive mode triple-prints API errors with double-wrapping | CI/CD and scripting use cases degraded; error parsing broken | PR #3749 already open with fix |
| **[#3426](https://github.com/QwenLM/qwen-code/issues/3426)** | VSCode plugin ignores `contextPercentageThreshold` / `contextWindowSize` | Memory/compression config not honored in IDE extension; silent context growth until hard failure | Long-running; affects IDE parity with CLI |
| **[#3678](https://github.com/QwenLM/qwen-code/issues/3678)** | `/export` HTML lacks light theme / toggle | Accessibility and eye strain concern; 3 upvotes show demand | Well-scoped feature request; community PR welcome |
| **[#3185](https://github.com/QwenLM/qwen-code/issues/3185)** | Windows `/quit` hangs with `ansiRegex3 is not a function` | Platform-specific exit bug; force-close required | Windows user pain point; regex dependency issue |
| **[#3757](https://github.com/QwenLM/qwen-code/issues/3757)** | JetBrains AI 401 auth error | IDE expansion growing; auth/config confusion between platforms | New platform, new integration friction |

---

## 4. Key PR Progress

| # | PR | Feature / Fix | Status |
|---|-----|-------------|--------|
| **[#3778](https://github.com/QwenLM/qwen-code/pull/3778)** | Desktop app package with Qwen ACP SDK integration | New distribution channel: standalone Electron/Tauri-style app beyond CLI/VSCode | Open, seeking review |
| **[#3774](https://github.com/QwenLM/qwen-code/pull/3774)** | Enforce prior read before Edit/WriteFile mutations | Safety-critical: prevents blind file overwrites by requiring model to have seen current bytes | Open; builds on #3717 FileReadCache |
| **[#3762](https://github.com/QwenLM/qwen-code/pull/3762)** | VSCode: message edit/rewind + metadata UI | Brings CLI-style conversation control to IDE extension | Open |
| **[#3739](https://github.com/QwenLM/qwen-code/pull/3739)** | Background agent resume and continuation | Reliability for long tasks: recover interrupted background agents, transcript-first fork resume | Open |
| **[#3698](https://github.com/QwenLM/qwen-code/pull/3698)** | Run auto compression before ACP model sends | Direct fix for #3652 context length crashes; covers ACP, tool responses, slash commands | Open |
| **[#3684](https://github.com/QwenLM/qwen-code/pull/3684)** | Event monitor tool with throttled stdout streaming | New long-running shell monitoring with token-bucket backpressure (burst=5, sustain=1/sec) | Open; Phase C of larger effort |
| **[#3685](https://github.com/QwenLM/qwen-code/pull/3685)** | PyPI release workflow for Python SDK | Official Python SDK distribution; version parity with Node releases | Open |
| **[#3604](https://github.com/QwenLM/qwen-code/pull/3604)** | Parallelize skill loading + path-conditional activation | 3x perf improvement on cold-start; skills activate based on file path patterns | Open; multi-commit |
| **[#3749](https://github.com/QwenLM/qwen-code/pull/3749)** | Fix non-interactive error double-wrapping | Clean single-line stderr output for `-p` mode; proper exit codes | Open |
| **[#3673](https://github.com/QwenLM/qwen-code/pull/3673)** | AutoSkill: automatic project skill extraction from conversations | Background review agent distills reusable workflows into `.qwen/skills/` after threshold tool calls | Open; default-off, opt-in |

---

## 5. Feature Request Trends

| Direction | Evidence | Momentum |
|-----------|----------|----------|
| **Theme/accessibility customization** | #3678 (light theme for exports), implicit demand for IDE theming | Moderate; scoped, implementable |
| **Conversation lifecycle management** | #3190 (`/chat` save/load), #3739 (background resume), #3762 (edit/rewind) | Strong; core UX maturation |
| **Cost/performance optimization** | #3631 (model cost estimation), #2791→#3760→#3765 (fastModel tiering), #3761 (decouple memory recall) | Very strong; production scaling focus |
| **Multi-platform IDE parity** | #3762 (VSCode), #3757 (JetBrains), #2251/#2394 (VSCode historical) | Growing; beyond CLI-first |
| **Observability & diagnostics** | #3000 (memory diagnostics), #3758 (verbose SubAgent display), #3684 (monitor tool) | Emerging; agent debugging at scale |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Manifestations | Mitigation in Progress |
|------------|-----------|---------------|----------------------|
| **Context window management** | Very high | #3652 (hard crash), #3426 (ignored thresholds), #2986 (cache misses) | PR #3698 (auto-compression); architecture discussions on compression triggers |
| **Agent interruption & recovery** | High | #3730 (auto-stop), #1775 (observation loops), #3759/#3761 (memory recall timeout) | PR #3739 (resume); #3761 (decoupling) |
| **Cross-provider compatibility** | High | #3750/#3772 (DeepSeek reasoning_content), #3748 (OpenAI error formatting) | Provider-specific fixes; no unified abstraction yet |
| **Configuration model sprawl** | Medium-High | #3765 (fastModel inherits main settings), #3742 (proxy key ignored), #3746 (`/directory` not persisting) | Settings schema stabilization needed |
| **Windows platform friction** | Medium | #3185 (quit hang), #3773 (generic crash report) | Less attention than Unix; needs dedicated QA |
| **Versioning & release clarity** | Medium | #3756 (nightly < stable semver) | Process fix; installer improvements in #3776 |

---

*Digest compiled from github.com/QwenLM/qwen-code public activity 2026-04-30.*

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/duanyytop/agents-radar).*