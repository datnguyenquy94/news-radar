# AI CLI Tools Community Digest 2026-09-06

> Generated: 2026-09-06 04:12 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-06)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **consolidation and hardening phase**. Major players (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI) are shipping fewer new features and focusing on reliability—Windows stability, session/history integrity, plugin/hook system maturity, and provider gateway interoperability. Mid-tier tools (Qwen Code, OpenCode, Pi, Codewhale) are differentiating through architectural bets: composable agent runtimes, workspace-scoped extensions, crate decomposition, and external agent delegation (ACP). Across the board, **Windows Desktop parity**, **multi-process/concurrent session correctness**, and **provider-agnostic model routing** are the dominant cross-cutting concerns. Release cadences remain high (nightlies/previews daily), but changelogs emphasize fixes over features.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues (Updated) | PRs Updated | Top Community Signal |
|------|----------------|----------------------|-------------|----------------------|
| **Claude Code** | 1 (v2.1.263, patch) | 10 | 3 (all maintenance) | Function Hooks RFC: 112 💬, 72 👍 |
| **OpenAI Codex** | 0 | 10 | 10 (voice infra focus) | History pagination bug: 39 💬; Shell config: 45 👍 |
| **Gemini CLI** | 1 (nightly) | 10 | 10 (crash/encoding fixes) | Subagent turn-limit misreport: P1, 13 💬 |
| **GitHub Copilot CLI** | 0 | 10 | 0 | Cancel enqueued messages: 28 👍 (open since Mar 2025) |
| **Kimi Code CLI** | 0 | 4 (3 closed) | 1 | VS Code char loss: fresh, 0 💬 |
| **OpenCode** | 0 | 10 | 16 (resilience/fixes) | Go billing bug + SQLite contention: new, blocking |
| **Pi** | 1 (v0.85.1, GPT-6 Astra) | 10 | 10 (gateway/packaging fixes) | Windows patterns meta-issue: 52 💬 |
| **Qwen Code** | 3 (preview + 2 nightlies) | 6 | 10 (architectural: ACP delegation, workspace extensions) | Daemon/VS Code desync: 3 💬 |
| **Codewhale** | 1 (v0.9.12, rebrand) | 10 | 10 (Windows fixes, crate decomposition) | Crate decomposition epic: 22 💬 |
| **Grok Build** | 0 | 0 | 0 | — |

**Key observation:** OpenCode and Qwen Code show the highest PR velocity (16 and 10 respectively) with architectural scope; Claude Code and Copilot CLI are unusually quiet on PRs, suggesting release stabilization windows.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Windows Desktop parity & stability** | Claude Code, OpenAI Codex, Gemini CLI, Pi, Codewhale | Orphaned kernel objects (Claude #53247), launch failures (Codex #42501), Seatbelt sandbox crashes (Gemini #29163), IME/input leaks (Codewhale #2323), SIGKILL on large args (Pi #9200) |
| **Session/history integrity & navigation** | OpenAI Codex, Gemini CLI, Qwen Code, OpenCode, Pi | Pagination corruption (Codex #35746), rewind fragility (Qwen #9466), auto-compaction stalls (Pi #9216), transcript concurrency races (Qwen #11144), stale file index (OpenCode #32747) |
| **Plugin/hook system maturity & cross-surface sync** | Claude Code, Gemini CLI, OpenCode, Qwen Code | Function Hooks RFC (Claude #91870), CLI vs Desktop plugin identity mismatch (Claude #92427), workspace-scoped extensions (Qwen #11086), crate decomposition for modularity (Codewhale #5316) |
| **Provider gateway / model routing correctness** | Pi, OpenAI Codex, OpenCode, Qwen Code, Kimi | Copilot GPT-6 Astra wrong endpoint (Pi #9209), cache billing mismatches (Pi #9210), kimi-k3 `n` param rejection (OpenCode #47568), model picker parity (Codex #42853), auth fragility (Kimi #1350) |
| **Multi-agent / external agent interop (ACP)** | Qwen Code, OpenCode, Codewhale, Gemini CLI | ACP delegation to Claude Code (Qwen #11003), OpenCode `x-opencode-session` header (Codewhale #5868), subagent observability (Gemini #22323), Fleet claim lifecycle (Codewhale #5906) |
| **Resource control & operational hygiene** | OpenCode, OpenAI Codex, Pi, Codewhale | 95 GB heartbeat logs (OpenCode #47563), git.exe OOM storms (Codex #41982), V8 heap 4 GB (Copilot #4725), web fetch cache-dependent failures (Codewhale #5904) |

---

## 4. Differentiation Analysis

| Tool | Primary Differentiation | Target User / Use Case | Technical Approach |
|------|------------------------|------------------------|-------------------|
| **Claude Code** | Deep Anthropic model integration; enterprise-grade security tooling (glob fixes, agent validation) | Professional developers in Anthropic ecosystem; security-conscious orgs | Monolithic TypeScript/Node; Express-style middleware RFC for plugins; heavy Windows desktop investment |
| **OpenAI Codex** | Realtime voice infrastructure; GPT-6 Astra access; remote/SSH development | Voice-first developers; remote/SSH workflows; Pro/Enterprise subscribers | Rust CLI + TypeScript desktop; Bazel hermetic builds; WebRTC/Opus audio pipeline; heavy native voice investment |
| **Gemini CLI** | Model-native POSIX tool affinity; AST-aware code navigation; memory system hardening | Developers wanting "model-first" tool chaining; security-sensitive memory workflows | Go/TypeScript hybrid; zero-dependency sandboxing; deterministic redaction; skill/subagent system |
| **GitHub Copilot CLI** | GitHub ecosystem integration (Copilot Enterprise, Actions, Mobile); worktree-backed sessions | GitHub-centric teams; enterprise policy-gated model access | TypeScript/Node; bundled CLI in Desktop app; tight coupling causes cross-component breakage (auto-update #4728) |
| **Kimi Code CLI** | Moonshot model optimization; IDE-first integration (Zed, VS Code) | Chinese-market developers; Moonshot model users | TypeScript; ACP protocol for IDE embeddings; focus on render fidelity over core CLI |
| **OpenCode** | Provider-agnostic runtime; Go subscription billing; multi-surface (TUI/Web/Desktop) parity | Polyglot model users; self-hosted/privacy-first; fleet/orchestration workloads | Go core; SQLite session store; plugin architecture for providers; aggressive connection resilience work |
| **Pi** | Provider gateway ecosystem (OpenRouter, Vercel AI Gateway, Meta, Ollama); extension runtime | Power users routing across many providers; extension authors; local-model enthusiasts | TypeScript monorepo; coding-agent package; heavy gateway adapter layer; packaging defects recurring |
| **Qwen Code** | Composable agent runtime; ACP delegation to external agents; workflow visualization | Multi-agent orchestration; IDE parity (VS Code, JetBrains); session time-travel UX | TypeScript daemon + web-shell; workspace-scoped extensions; transcript anchor-based rewind; CI as product |
| **Codewhale** | Crate decomposition for modularity; Windows computer-use backend; Fleet multi-agent orchestration | Rust/TUI enthusiasts; Windows power users; agent fleet operators | Rust crate workspace; Win32 computer-use; HarmonyOS support; command-shape abstraction for pluggability |
| **Grok Build** | (No data — inactive) | — | — |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Rapid Iteration** | **Qwen Code**, **OpenCode**, **Codewhale** | Daily architectural PRs (ACP delegation, crate decomposition, workspace extensions); multi-release cadence; CI/infra treated as product; founder-level engagement in issues |
| **Stabilization / Enterprise Hardening** | **Claude Code**, **OpenAI Codex**, **Gemini CLI** | Patch-only releases; high-signal RFCs (Function Hooks); Windows/desktop pain points dominate; voice infra (Codex) and memory hardening (Gemini) as strategic bets |
| **Platform-Coupled / Slower Core Velocity** | **GitHub Copilot CLI**, **Kimi Code CLI** | Copilot: cross-component regressions (auto-update breaks bundled CLI), 0 PRs/24h, long-standing UX asks (cancel queue #1857 open 18mo); Kimi: low issue volume, IDE-layer focus, auth/render bugs |
| **Niche / Gateway-Focused** | **Pi** | Active gateway/provider expansion (Meta, Requesty, LLM Gateway); but packaging defects erode trust (missing deps in 0.85.0 and 0.85.1); TUI edge cases on Windows/WezTerm |
| **Inactive** | **Grok Build** | No activity in 24h; no community signal |

**Maturity signals:** Tools with **public RFC processes** (Claude Code #91870), **architectural epics** (Codewhale EPIC-005, Qwen workspace extensions), and **CI-as-product investment** (Qwen #11134, #11103) show higher engineering maturity. Tools where **cross-component coupling causes user-facing breakage** (Copilot CLI auto-update, Pi packaging) indicate integration debt.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **ACP (Agent Client Protocol) emerging as interop standard** | Qwen Code delegates to Claude Code via ACP (#11003); Codewhale implements OpenCode `x-opencode-session` header (#5868); Gemini CLI evaluates ACP for IDE integration | **Adopt ACP early** for multi-agent/orchestration workloads; expect IDE vendors to standardize on it |
| **Workspace-scoped, hermetic extension/runtime isolation** | Qwen Code #11086 (workspace runtimes); OpenCode plugin architecture; Codewhale crate decomposition; Gemini CLI sandboxing | **Monorepo/multi-project teams** should prefer tools with workspace isolation; global extension models are becoming legacy |
| **Provider gateway layer abstraction** | Pi (Vercel AI Gateway, OpenRouter, LLM Gateway, Meta); OpenCode (Bedrock IMDS, Minimax, Kimi); Codex (Copilot, Azure) | **Avoid vendor lock-in**: tools with gateway adapters + model routing config (Pi `vercelGatewayRouting`, OpenCode provider plugins) reduce switching cost |
| **Windows is the differentiator, not the afterthought** | 4+ active Windows issues per major tool today; Codewhale Win32 computer-use; Codex MSVC Bazel targets; Gemini Seatbelt fixes | **Evaluate Windows native support** (not just WSL) for team adoption; tools investing in native backends (Codewhale, Codex) will win enterprise Windows seats |
| **Session durability = competitive moat** | Codex pagination corruption, Qwen rewind anchors, Pi auto-compaction stalls, OpenCode stale index, Gemini subagent turn limits | **Long-running agent workflows** demand transcript integrity, reliable rewind, and cross-process session sync — prioritize tools with visible investment here |
| **Voice/realtime as next UX frontier** | Codex 7/10 PRs on WebRTC/Opus/CPAL/WASAPI; Pi async tool calling (#9113); OpenCode event stream stall detection | **Voice-enabled coding** is arriving in CLI; teams exploring hands-free/accessibility workflows should track Codex and Pi |
| **Release pipeline integrity is a quality signal** | Pi missing deps in consecutive releases; Codewhale crate tarball verification gate (#5893); Qwen CI retry budgets | **Automated publish guards** (dependency presence, asset verification, dry-run) correlate with user trust — audit your tool's release workflow |

---

## Summary for Decision-Makers

- **For enterprise standardization**: Claude Code (security tooling), OpenAI Codex (voice/remote), GitHub Copilot CLI (GitHub ecosystem) — but verify Windows Desktop stability and cross-component coupling risks.
- **For polyglot/model-agnostic

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-06 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | PR | Skill | Functionality | Discussion Highlights | Status |
|------|-----|-------|---------------|----------------------|--------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator (core fix)** | Fixes `run_eval.py` reporting 0% recall for all skill descriptions — breaks the description-optimization loop. Addresses Windows stream reading, trigger detection, and parallel workers. | Tied to **Issue #556** (12 comments, 7👍): "claude -p never triggers skills/commands (0% trigger rate across all queries)" — fundamental blocker for skill evaluation. | 🟢 Open (updated 2026-06-23) |
| 2 | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | Zero-cost multi-agent orchestration: delegates mechanical work to headless `opencode` workers on free models; Claude Code remains planner/reviewer/merger. | Novel architecture — "expensive model's context is the scarce resource, not its intelligence." High novelty factor. | 🟢 Open (updated 2026-08-24) |
| 3 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Mechanical file verification → four-dimension reasoning audit (damage-severity priority). Universal, stack-agnostic quality gate. | v1.3.0; targets "output quality across full session lifecycle." Complements Issue #1385 (Reasoning Quality Gate Pipeline, 4 comments). | 🟢 Open (updated 2026-07-02) |
| 4 | [#568](https://github.com/anthropics/skills/pull/568) | **servicenow** | Broad ServiceNow platform assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, Vulnerability Response, IntegrationHub. | Long-running (created Mar, updated Aug); enterprise demand signal. Covers entire platform, not just scripting. | 🟢 Open (updated 2026-08-12) |
| 5 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Full testing stack: Testing Trophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing. | Comprehensive reference skill; addresses gap in test-generation workflows. | 🟢 Open (updated 2026-04-21) |
| 6 | [#1627](https://github.com/anthropics/skills/pull/1627) | **buffer-api** | Portable Agent Skill for Buffer GraphQL API — schedule/manage/analyze social posts from any agent (Claude, Cursor, Codex, OpenClaw, Hermes, n8n). | Cross-agent portability emphasis; recent activity (updated Sep 5). | 🟢 Open (updated 2026-09-05) |
| 7 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Typographic QC for AI-generated docs: prevents orphans, widows, numbering misalignment. "Issues affect every document Claude generates." | High utility/low visibility problem; user pain point rarely explicitly requested. | 🟢 Open (updated 2026-03-13) |
| 8 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | Meta-skills: 5-dimension quality analysis (structure, examples, resources, triggers, security) + security scanning for injection, secrets, permissions. | Foundational tooling for skill marketplace quality control. | 🟢 Open (updated 2026-01-07) |

> **Note:** All PRs show `Comments: undefined` in the raw data; ranking inferred from issue cross-references, description depth, update recency, and architectural significance.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Signal Strength |
|-------|----------|-----------------|
| **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills distributed under `anthropic/` namespace enable impersonation/trust abuse. | 🔴 Critical |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): Native org-wide sharing vs. manual file transfer via Slack/Teams. | 🟠 High |
| **Skill Evaluation Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `run_eval.py` 0% trigger rate; [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments): MCP builder eval scores 0/N. | 🟠 High |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` injects 156k tokens; [#1175](https://github.com/anthropics/skills/issues/1175): SPO document handling concerns. | 🟡 Medium |
| **Quality Gates & Reasoning Audits** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1👍): 3-gate pipeline (Calibration → Adversarial Review → Delivery Verification); [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments): `compact-memory` for symbolic state compression. | 🟡 Medium |
| **Cross-Platform/Cloud Compatibility** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments): AWS Bedrock support; [#1050](https://github.com/anthropics/skills/pull/1050)/[#1099](https://github.com/anthropics/skills/pull/1099): Windows subprocess/encoding fixes. | 🟡 Medium |
| **Skill-as-MCP Exposure** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments): Expose skills as MCPs for uniform API signaling. | 🟢 Emerging |

---

## 3. High-Potential Pending Skills (Active PRs Not Yet Merged)

| PR | Skill | Why It May Land Soon |
|----|-------|---------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator core fix** | Blocks all skill evaluation; tied to highest-comment issue (#556); multiple independent reproductions. |
| [#1602](https://github.com/anthropics/skills/pull/1602) | **Evaluation/benchmark stability fixes** | Resolves serialization, metrics, encoding, script stability across mcp-builder, skill-creator, web-artifacts-builder. Broad reliability impact. |
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api model retirement update** | Simple, factual update (marks 4 retired model IDs); fixes #1603; low risk, high maintenance value. |
| [#538](https://github.com/anthropics/skills/pull/538) | **PDF case-sensitivity fix** | 8 concrete file-reference mismatches; breaks on case-sensitive FS; trivial fix, high breakage potential. |
| [#541](https://github.com/anthropics/skills/pull/541) | **DOCX w:id collision fix** | Document corruption bug; root cause identified (shared ID space); 1-line fix pattern. |
| [#1050](https://github.com/anthropics/skills/pull/1050) / [#1099](https://github.com/anthropics/skills/pull/1099) | **Windows compatibility (skill-creator)** | Two 1-line fixes for `claude.cmd` vs `claude` and pipe reading; unblocks Windows contributors. |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | High novelty, solves context-scarcity problem; recent (Aug 21), active discussion. |
| [#1627](https://github.com/anthropics/skills/pull/1627) | **buffer-api** | Cross-agent portable; recent updates (Sep 5); practical integration use case. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *reliable skill authoring & evaluation infrastructure* (skill-creator, run_eval, evaluation harnesses) and *trust-safe distribution mechanisms* — not new domain skills. Without a working feedback loop to validate skill triggers and a secure namespace, the marketplace cannot scale.**

---

*Report generated from GitHub API data. PR comment counts were not fully populated in source; rankings weight issue cross-references, update recency, and architectural impact.*

---

# Claude Code Community Digest — 2026-09-06

---

## 1. Today's Highlights

- **v2.1.263 released** with only "bug fixes and reliability improvements" — a quiet patch after several weeks of heavier feature work.
- **Function Hooks proposal (#91870)** dominates discussion (112 comments, 72 👍), proposing an Express/Koa-style middleware system to make plugins "10x more powerful" with side-effect tracking and continuation-passing composition.
- **Windows Desktop stability** remains a pain point: a years-old orphaned Silo/Job Object crash (#53247, 66 comments) and a new "freeze-then-vanish" crash (#89679) both updated today, plus a fresh MSIX updater regression (#92432).

---

## 2. Releases

| Version | Date | Summary |
|---------|------|---------|
| **v2.1.263** | 2026-09-06 | Bug fixes and reliability improvements only. No detailed changelog provided. |

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Area | Signal | Why It Matters |
|-------|------|--------|----------------|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) **Function Hooks — make plugins 10x more powerful** | `hooks`, `plugins` | 112 💬, 72 👍 | Proposes a parameterized `$` object with side-effect tracking + Express-style `next()` continuation chain. Would enable deep, composable, safe plugin modifications — the most ambitious plugin-system RFC in months. |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) **Windows: orphaned Silo/Job Object after crash — requires logoff/reboot** | `windows`, `desktop`, `cowork` | 66 💬, 29 👍 | Open since April. App crash leaves a kernel job object locked; only full logoff or reboot recovers. Blocks daily workflow for Windows users. |
| [#87895](https://github.com/anthropics/claude-code/issues/87895) **Windows: Desktop window stays always-on-top** | `windows`, `desktop` | 17 💬, 72 👍 | **CLOSED (invalid)** but high 👍 suggests widespread frustration. Duplicate of macOS issue #66516 (also closed invalid). Users want a toggle. |
| [#85111](https://github.com/anthropics/claude-code/issues/85111) **Bash tool silently truncates commands > ~8 KB, reports as quoting error** | `tools` | 5 💬 | Silent truncation masquerades as a quoting error — dangerous for long generated scripts. No warning, no config. |
| [#86875](https://github.com/anthropics/claude-code/issues/86875) **HTTP-transport MCP tools unreachable despite `/mcp` showing connected** | `mcp`, `linux` | 4 💬 | Tools listed in `/mcp` detail view but calls fail with "No such tool available." Persists across restarts. Breaks remote MCP workflows. |
| [#74311](https://github.com/anthropics/claude-code/issues/74311) **Configurable Fable 5 classifier fallback model & effort** | `model`, `windows` | 3 💬, 6 👍 | Safety classifier forces Opus fallback; users want to choose model/effort (especially for API-cost control). |
| [#92426](https://github.com/anthropics/claude-code/issues/92426) **Agent tool ignores subagent definition — inherits dispatcher's prompt/tools** | `agents`, `macos` | 0 💬 (new today) | Critical agent regression: dispatched subagents get parent's full tool surface instead of their own definition. |
| [#92427](https://github.com/anthropics/claude-code/issues/92427) **CLI and Desktop resolve different plugin identities** | `plugins`, `desktop`, `macos` | 0 💬 (new today) | Same plugin loads with different identities in CLI vs Desktop — breaks state, config, and MCP sharing. |
| [#92432](https://github.com/anthropics/claude-code/issues/92432) **Updater misdetects sideloaded MSIX as Store install → hangs on launch** | `windows`, `desktop` | 0 💬 (new today) | Fresh regression: sideloaded builds treated as Store installs, triggering broken update flow that hangs the app. |
| [#91102](https://github.com/anthropics/claude-code/issues/91102) **Fullscreen: sticky "last prompt" banner missing since 2.1.247** | `tui`, `macos`, `regression` | 1 💬, 1 👍 | Scroll-refactor regression removed the sticky prompt banner — a key navigation aid for long sessions. |

---

## 4. Key PR Progress

| PR | Area | Status | Summary |
|----|------|--------|---------|
| [#87077](https://github.com/anthropics/claude-code/pull/87077) | `agents`, `security` | OPEN | Fixes invalid YAML frontmatter in all agents: unquoted scalars with `key: value` lines were parsed as nested mappings, causing empty frontmatter loads. |
| [#87079](https://github.com/anthropics/claude-code/pull/87079) | `security`, `glob` | OPEN | `**` glob patterns now match zero-depth paths (top-level files). Previously `**/*.ts` required a literal `/`, silently excluding root-level files from security rules. |
| [#89404](https://github.com/anthropics/claude-code/pull/89404) | `plugins`, `validation` | OPEN | `validate-agent.sh`: removes `set -e` abort-on-warning, fixes arithmetic `((x++))` false failures, stops false-flagging valid agents (fixes #83803). |

> Only 3 PRs updated in the last 24h — all are maintenance/fixes, no new features.

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Plugin/hook system overhaul** | #91870 (Function Hooks), #92427 (plugin identity sync) | 112 💬, high 👍 |
| **Cross-machine config sync** | #66303 (sync `~/.claude/`), #92427 (CLI/Desktop parity) | Recurring, duplicate-closed but persistent |
| **Model/fallback configurability** | #74311 (Fable 5 fallback model/effort), #92428 (auto-fix instead of fallback) | Cost & control focus |
| **Windows Desktop parity/stability** | #53247 (Silo crash), #87895 (always-on-top), #92432 (MSIX updater), #92337 (WS_EX_TOPMOST) | 4 active Windows issues today |
| **MCP reliability** | #86875 (HTTP transport broken), #91898 (misleading timeout) | Remote MCP workflows fragile |
| **Agent/subagent correctness** | #92426 (ignores definition), #92134 (missing `SendMessage` tool) | New regressions in agent tooling |

---

## 6. Developer Pain Points (High-Frequency Frustrations)

1. **Windows Desktop is unstable** — orphaned kernel objects requiring reboot (#53247), silent crashes (#89679), always-on-top window bugs (#87895, #92337), and now a broken updater for sideloaded builds (#92432). Windows users report daily friction.

2. **Plugin system feels underpowered and inconsistent** — The Function Hooks RFC (#91870) exists because current hooks can't do deep modifications safely. CLI vs Desktop plugin identity mismatch (#92427) breaks sharing. No cross-machine sync (#66303).

3. **Silent failures with misleading errors** — Bash truncation reported as quoting error (#85111), MCP tools "connected" but unreachable (#86875), classifier fallback dialog says "not included in plan" with no action (#91488).

4. **Agent/subagent regressions** — Two new issues today: subagents inherit parent prompt/tools (#92426), and built-in tool docs reference a `SendMessage` tool that doesn't exist (#92134).

5. **Security tooling has silent gaps** — `**` glob patterns didn't match root files (#87079), agent validation script aborted on warnings and false-flagged valid agents (#89404).

6. **No "mark all read" / notification control in Cowork web** — #92430 requests turning off unread dots on Recents; no UI exists today.

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-09-06. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-06

## Today's Highlights
No new releases shipped in the last 24 hours. The issue backlog is dominated by Windows Desktop app regressions (launch failures, missing GPT-6 Astra model, git.exe crash storms) and session-history corruption bugs affecting both CLI and desktop apps. A large batch of PRs landed today focused on native voice runtime infrastructure—Bazel targets for Windows MSVC, WebRTC session APIs, and audio device handling—signaling continued investment in realtime voice capabilities.

## Releases
*No releases published in the last 24 hours.*

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#35746](https://github.com/openai/codex/issues/35746)** Paginated history drops valid flattened rollout records and reuses ordinals | Core CLI session integrity bug: history pagination corrupts rollout records, breaking conversation continuity. Affects `0.146.0-alpha.10.1` through current `rust-v0.146.0-alpha.14`. | 39 comments, 3 👍 — active technical discussion with reproduction steps and source-path analysis. |
| **[#42853](https://github.com/openai/codex/issues/42853)** GPT-6 Astra missing from model picker for eligible Pro accounts (Windows) | Flagship model unavailable in Desktop app despite bundled CLI (`0.153.1`) supporting it. Blocks Pro users on Windows. | 10 comments, 1 👍 — multiple Pro subscribers confirming; catalog refresh not picking up bundled model. |
| **[#42501](https://github.com/openai/codex/issues/42501)** Windows app fails to launch UI when `cua_node` staging cannot copy `node_repl.exe` | App spawns hidden `ChatGPT.exe` processes but never shows window (`MainWindowHandle=0`). Regression in Store update `26.901.1978.0`. | 9 comments — root cause identified in `cua_node` runtime staging logic; workaround sought. |
| **[#41922](https://github.com/openai/codex/issues/41922)** Chats unusable after context compaction; internal validation errors printed | Context compaction breaks chat state on Windows Desktop (`26.825.51511`), surfacing internal errors to users. | 7 comments — affects Plus subscribers; compaction logic appears to invalidate local transcript. |
| **[#16579](https://github.com/openai/codex/issues/16579)** Windows: allow configuring default session shell via config | High-demand enhancement: Codex defaults to PowerShell; Git Bash/WSL users need configurable shell. PR ready. | 7 comments, **45 👍** — strongest community signal in this batch; config schema change proposed. |
| **[#41849](https://github.com/openai/codex/issues/41849)** VS Code Remote-SSH: stale `app-server` blocks new sessions with “open in another app” | Remote disconnect leaves orphaned `app-server` holding thread writer; reconnect spawns duplicate server. | 6 comments, 4 👍 — impacts Remote-SSH workflows; requires server-side cleanup on disconnect. |
| **[#41661](https://github.com/openai/codex/issues/41661)** Deleted conversations stuck in Recents on macOS Desktop | Server-deleted conversations persist locally; all actions return `404 conversation_deleted`. | 6 comments — macOS-specific sync bug; Recents view out of sync with server state. |
| **[#41267](https://github.com/openai/codex/issues/41267)** Pet animations stopped working after `26.825.31414` on Windows 11 | User-facing feature regression; Pet interactions broken post-update. | 6 comments, 5 👍 — visible UI regression; likely related to animation pipeline changes. |
| **[#41982](https://github.com/openai/codex/issues/41982)** Windows Remote: opening task from Android triggers `git.exe` crash storm + OOM | Critical remote-control bug: mobile-initiated task spawns runaway `git.exe` processes, exhausting system memory. | 4 comments — Pro user on Windows 11 `26200.0`; suggests resource leak in remote bridge. |
| **[#43129](https://github.com/openai/codex/issues/43129)** macOS: newest-first thread lookup returns 2-day-old in-progress turn despite newer messages | Local conversation lookup broken; UI shows stale turn while newer messages exist in transcript. | 3 comments — fresh report (created today); indicates index/projection mismatch in history layer. |

## Key PR Progress

| PR | Summary | Impact |
|----|---------|--------|
| **[#43147](https://github.com/openai/codex/pull/43147)** Gate experimental context by model capability at session startup | Fixes child sessions incorrectly inheriting token-budget activation from parent when model doesn’t support it. | Prevents context misconfiguration on model switch; session-correctness fix. |
| **[#43120](https://github.com/openai/codex/pull/43120)** Add managed worktree creation to TUI session commands (`/worktree`, `/new`, `/fork`) | Enables git worktree-backed session forking directly from CLI TUI. | Major UX improvement for parallel task workflows; native git integration. |
| **[#43144](https://github.com/openai/codex/pull/43144)** Add Windows MSVC Bazel targets for native voice libraries | Explicit x64/ARM64 targets for voice runtime builds on Windows. | Unblocks native voice on Windows; prerequisite for realtime audio features. |
| **[#43126](https://github.com/openai/codex/pull/43126)** Expose native Windows build tools through Bazel targets | Patches `windows_support` to retain MSVC tools/SDK files for Bazel consumers. | Foundational infra for Windows native builds; enables hermetic toolchains. |
| **[#43097](https://github.com/openai/codex/pull/43097)** Add helper-backed realtime WebRTC session API | `RealtimeWebrtcSession` with startup, negotiation, audio controls, level meters. | Core realtime voice infrastructure; enables low-latency audio streaming. |
| **[#43079](https://github.com/openai/codex/pull/43079)** Add opt-in local audio devices to voice helper | `openDevices`/`setAudioControls` via CPAL (macOS/Linux) and WASAPI (Windows). | Cross-platform audio I/O for voice features; opt-in per session. |
| **[#43100](https://github.com/openai/codex/pull/43100)** Add bounded incoming Opus RTP handling to voice host | Limits: 64 packets, 2 MiB outstanding, 64 KiB/packet; preserves timestamps. | Hardens realtime audio pipeline against DoS/memory pressure. |
| **[#43113](https://github.com/openai/codex/pull/43113)** Save subagent and memory opt-ins through app server | Persists TUI opt-in prompts via server config writes for new threads. | Syncs user preferences across clients; enables persistent subagent/memory settings. |
| **[#43110](https://github.com/openai/codex/pull/43110)** Record reasoning effort changes in conversation history behind flag | Appends `configuration_update` when reasoning effort overridden (disabled by default). | Audit trail for model behavior; useful for debugging/provenance. |
| **[#43104](https://github.com/openai/codex/pull/43104)** Move Guardian thread context into `guardianv2` configuration | Renames `features.guardian_thread_context` → `features.guardianv2.thread_context`. | Config consolidation for Guardian v2; prepares for async/sync unification. |

## Feature Request Trends
1. **Windows shell configurability** (#16579, 45 👍) — developers want Git Bash/WSL/PowerShell choice without workarounds.
2. **Remote/SSH reliability** (#41849, #31110, #40167) — stale server processes, Cloudflare challenges, and iOS remote control failures indicate demand for robust remote development.
3. **Session history integrity** (#35746, #43142, #43129) — multiple reports of pagination/resume bugs corrupting conversation state across platforms.
4. **Model access parity** (#42853, #43143) — Pro users expect bundled models (GPT-6 Astra) to appear immediately in Desktop app picker.
5. **Voice/realtime infrastructure** — PR batch shows heavy investment in WebRTC, Opus RTP, and cross-platform audio device support.

## Developer Pain Points
- **Windows Desktop app instability**: Launch failures (#42501), missing models (#42853), git.exe OOM storms (#41982), Pet regression (#41267), image preview loss (#38858).
- **Session/history corruption**: Pagination drops records (#35746), resume reuses ordinals (#43142), compaction breaks chats (#41922), stale Recents (#41661), lookup returns stale turns (#43129).
- **Remote development friction**: Orphaned `app-server` on SSH disconnect (#41849), Cloudflare HTML challenges blocking auth (#31110), iOS remote control broken (#40167).
- **Permission prompt fatigue**: “Full Access” setting doesn’t suppress prompts (#16759) — users want true “yolo” mode.
- **Safety-check false positives**: GPT-6 Astra pauses on ordinary code tasks (#43042, #43131) — `cyber_policy` triggers during authorized bug triage.
- **Credit consumption bugs**: WebSocket reconnect loop burns purchased credits (#43045); weekly limit drops to 0% with no usage (#42765).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-06

## Today's Highlights
The project shipped **v0.60.0-nightly** with critical stability fixes: a startup crash in Git repositories under macOS Seatbelt, an MCP prompt encoding regression, and a hook timeout unit mismatch (seconds vs milliseconds). High-priority issues dominate community attention—subagent turn-limit misreporting, generalist agent hangs, and shell commands falsely showing "Waiting input" are the top pain points. Memory system hardening (redaction, retry logic) and AST-aware tooling evaluation are active investment areas.

---

## Releases
### v0.60.0-nightly.20260906.g85aca163f
Automated nightly release. No manual changelog provided; see [compare view](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260905.g85aca163f...v0.60.0-nightly.20260906.g85aca163f) for incremental changes since yesterday’s nightly.

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Subagents silently claim success when they actually hit turn limits, masking failures in multi-agent workflows. | 🔴 P1, 13 comments, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Core agent stalls on simple ops (e.g., folder creation); workaround is disabling subagents. | 🔴 P1, 8 comments, 8 👍 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity via Zero-Dependency OS Sandboxing** | Strategic effort to align CLI with model’s native POSIX-tool chaining strengths securely. | 🟡 P2, 9 comments, 1 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess impact of AST-aware file reads, search, mapping** | Epic to evaluate precision gains (method-bound reads, reduced token noise) via tools like `tilth`/`glyph`. | 🟡 P2, 7 comments, 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini underuses skills and sub-agents** | Model rarely invokes custom skills/subagents autonomously despite relevant context. | 🟡 P2, 6 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction & reduced Auto Memory logging** | Security: secrets enter model context before redaction; service logs skill data. | 🟡 P2, 5 comments |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command stuck at "Waiting input" after completion** | Frequent false-positive hang on trivial commands; breaks trust in tool execution. | 🔴 P1, 4 comments, 3 👍 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform blocker for Linux/Wayland users; terminates with `GOAL` but no output. | 🔴 P1, 4 comments, 1 👍 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools available** | Tool explosion from skills/extensions breaks API requests; needs smarter scoping. | 🟡 P2, 3 comments |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **Agent should discourage destructive behavior** | Model uses `git reset --force`, destructive DB ops; needs safer defaults/guardrails. | 🟡 P2, 3 comments, 1 👍 |

---

## Key PR Progress (Top 10 Merged/Open Fixes)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#29163](https://github.com/google-gemini/gemini-cli/pull/29163) | **Prevent crash during auth in Git repos (macOS Seatbelt)** | Fixes `useGitBranchName` hook crash when `.git` access is sandboxed. | 🟢 Open (P1) |
| [#29205](https://github.com/google-gemini/gemini-cli/pull/29205) | **Submit MCP prompt text without JSON encoding** | Preserves raw quotes/newlines from MCP servers; adds regression test. | 🟢 Open (P2) |
| [#29125](https://github.com/google-gemini/gemini-cli/pull/29125) | **Convert hook timeout from seconds → milliseconds** | Aligns migrated Claude Code hooks (seconds) with Gemini’s ms-based runner. | 🟢 Open (P2) |
| [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) | **Degrade non-array checkpoint history instead of crashing resume** | `/resume` now handles malformed checkpoints gracefully. | 🟢 Open (P2) |
| [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) | **Don’t rewrite explicit `gemini-2.5-flash` to 3.5 Flash** | Fixes over-eager `endsWith('flash')` match that silently upgraded pinned models. | 🟢 Open (P1/P2) |
| [#29222](https://github.com/google-gemini/gemini-cli/pull/29222) | **Prevent rewriting explicitly pinned flash models** | Companion fix ensuring `--model gemini-2.5-flash` respects user intent. | 🟢 Open (P1/P2) |
| [#29211](https://github.com/google-gemini/gemini-cli/pull/29211) | **Stop scheduling state updates inside a state updater** | Fixes React anti-pattern in `useInputHistoryStore` causing double renders/warnings. | 🟢 Open (P2) |
| [#29126](https://github.com/google-gemini/gemini-cli/pull/29126) | **Mount `express.json()` before A2A SDK routes** | Fixes `req.body === undefined` breaking JSON-RPC parsing on A2A server. | 🟢 Open (P2) |
| [#29124](https://github.com/google-gemini/gemini-cli/pull/29124) | **Correct `SubagentStop` event key in hooks migration** | Fixes case-sensitivity mismatch (`SubagentStop` vs `SubAgentStop`) dropping hooks. | 🟢 Open (P2) |
| [#28967](https://github.com/google-gemini/gemini-cli/pull/28967) | **Prevent clearing terminal scrollback on static refresh** | Removes `ansiEscapes.clearTerminal` call that wiped scrollback in standard buffer mode. | ✅ Closed (P2) |

---

## Feature Request Trends (Distilled from Issues)

1. **Subagent Observability & Control** — Trajectory sharing (`/chat share`), settings propagation (`maxTurns`), symlink support, and failure-mode transparency are recurring asks.
2. **AST-Aware Code Navigation** — Multiple epics (#22745, #22746, #19561) explore method-level reads, grep-first workflows, and token-frugal "tactful extraction."
3. **Native Bash/Tool Affinity** — First-class POSIX tool chaining (`grep`/`sed`/`awk`) with sandboxing (#19873) to match model training.
4. **Memory System Hardening** — Deterministic redaction, inbox quarantine, retry limits, and patch validation (#26525, #26523, #26522, #26516).
5. **Agent

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-06

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows **21 active items**, with a cluster of regressions following recent runtime/desktop updates (worktree loss, auto-update breaking the bundled CLI, memory pressure on Linux). Community attention remains highest on the long-standing request to **cancel enqueued messages** (#1857, 28 👍), while several fresh triage items point to MCP/tooling fragility and model-selection policy confusion.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues (10 Noteworthy)

| # | Title & Link | Area | Why It Matters | Community Signal |
|---|--------------|------|----------------|------------------|
| **#1857** | [Allow users to cancel or remove enqueued messages before they are executed](https://github.com/github/copilot-cli/issues/1857) | input-keyboard | Users cannot abort `Ctrl+Q`/`Ctrl+Enter` queued prompts while the agent is busy or during `/compact`; messages execute automatically on agent idle. High workflow disruption. | **28 👍**, 11 comments, open since Mar 2025 |
| **#4734** | [Bug: "Worktree missing" on all project sessions after upgrade to desktop 2.98.0 / runtime 1.1.15](https://github.com/github/copilot-cli/issues/4734) | sessions, installation | Post-update, **every** worktree-backed session fails with “Worktree missing”. Blocks all existing and new sessions. | 0 👍, filed yesterday, critical regression |
| **#4728** | [Auto-update rewrites the `copilot.exe` it was launched from, breaking the GitHub Copilot app's bundled CLI](https://github.com/github/copilot-cli/issues/4728) | sessions, installation | Running CLI from terminal silently corrupts the desktop app’s bundled binary; **all sessions become unrecoverable** (“Session unavailable”). | 0 👍, filed yesterday, severe cross-component breakage |
| **#4725** | [Frequent JavaScript heap out of memory](https://github.com/github/copilot-cli/issues/4725) | platform-linux | CLI crashes every few minutes with V8 heap ~4 GB; GC logs show allocation failure. Renders tool unusable on Linux. | 0 👍, filed 2 days ago, high-severity stability issue |
| **#4731** | [A tools/list refresh dispatched into a server still blocked by a just-cancelled tool call times out and permanently strips that server's tools](https://github.com/github/copilot-cli/issues/4731) | mcp, tools | Cancelled MCP tool call leaves server busy; immediate `tools/list` refresh times out and **permanently disables that server’s tools** for the process lifetime. | 0 👍, filed yesterday, MCP reliability blocker |
| **#4729** | [Built-in research agent tells subagents to call unavailable `github/get_me` tool](https://github.com/github/copilot-cli/issues/4729) | agents, mcp | Research subagent prompt references a tool the bundled GitHub MCP server doesn’t expose; subagent visibly fails and leaks reasoning. | 0 👍, filed yesterday, shipped agent prompt bug |
| **#4721** | [Canvas `open_canvas` arguments corrupted by CLI — JSON-RPC serialization bug](https://github.com/github/copilot-cli/issues/4721) | mcp, tools | Tool-call arguments get a trailing `}{}` suffix, producing malformed JSON and “Unexpected end of JSON input”. Breaks canvas extensions. | 0 👍, filed yesterday, tooling protocol corruption |
| **#4272** | [New models are greyed out and can't be selected](https://github.com/github/copilot-cli/issues/4272) | enterprise, models | Users see “This model is disabled by your organization's policy” with no actionable settings link. **Closed** but indicates policy/docs gap. | 3 👍, 2 comments, closed yesterday |
| **#3498** | [Remote session UI does not render on GitHub Mobile app (Android)](https://github.com/github/copilot-cli/issues/3498) | sessions | WebSocket connects and push works, but mobile UI shows only static placeholder. Blocks mobile session monitoring. | 3 👍, open since May, platform gap |
| **#4736** | [Make Ctrl+E accept inline autocomplete suggestions](https://github.com/github/copilot-cli/issues/4736) | input-keyboard | Emacs/Readline users expect `Ctrl+E` to accept inline suggestion; currently moves cursor to line end. Small UX polish with high muscle-memory impact. | 0 👍, filed today, fresh triage |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **Queue control & interruption** — #1857 (cancel enqueued messages) leads by a wide margin; users want granular control over prompt pipeline.
2. **Model access transparency** — #4272 shows confusion around org policy vs. CLI model picker; demand for clearer enablement paths.
3. **Mobile session parity** — #3498 highlights expectation that remote sessions render fully on GitHub Mobile.
4. **Idle-context optimization** — #4724 requests auto-compaction aligned to prompt-cache TTL (~5 min) to avoid cold-context latency.
5. **Terminal key-binding parity** — #4736 (Ctrl+E) and #4722 (underscore Markdown parsing) reflect desire for standard shell/UIs behavior.

---

## Developer Pain Points
| Pattern | Evidence |
|---------|----------|
| **Post-update regressions breaking core workflows** | #4734 (worktree loss), #4728 (auto-update breaks desktop app), #4725 (OOM on Linux) all filed within 48 h of runtime 1.1.15 / desktop 2.98.0. |
| **MCP/tooling protocol fragility** | #4731 (tools/list refresh race), #4729 (missing tool in agent prompt), #4721 (JSON-RPC corruption) — three distinct MCP bugs in one day. |
| **Session durability & cross-component coupling** | Auto-update mutating the very binary the desktop app bundles (#4728); remote session UI broken on mobile (#3498); OTel spans missing input after reload (#4726). |
| **Memory/GC pressure on long-running Linux sessions** | #4725 shows 4 GB heap with allocation failure; no user workaround. |
| **Policy/model gating opacity** | #4732 (sudden switch to GPT-5 mini, mid-task stops) and #4272 (greyed-out models) indicate poor visibility into model routing and org policy. |

---

*Digest generated from `github/copilot-cli` issue/PR data as of 2026-09-06 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-06

## 1. Today's Highlights
No new releases in the past 24 hours. Four issues were updated — three closed (Windows Zed IDE launch, auth failures on Debian, missing shell prompt context) and one new open issue reporting character loss in the VS Code extension chat renderer. One open PR addresses double-encoded tool-call arguments from the Moonshot API.

## 2. Releases
*No releases published in the last 24 hours.*

## 3. Hot Issues
All issues updated in the last 24 hours (4 total):

| Issue | Status | Why It Matters |
|-------|--------|----------------|
| [#1284](https://github.com/MoonshotAI/kimi-cli/issues/1284) | **Closed** | Zed IDE ACP panel fails to launch on Windows 11 (build 26200). Blocks Windows users adopting Zed integration. |
| [#1350](https://github.com/MoonshotAI/kimi-cli/issues/1350) | **Closed** | Frequent `Authorization failed` on Debian 12 after `/login`. Indicates token refresh or session persistence regression. |
| [#1349](https://github.com/MoonshotAI/kimi-cli/issues/1349) | **Closed** | Shell prompt lost cwd & git branch display. Reduces situational awareness during interactive sessions; users request configurable prompt. |
| [#2635](https://github.com/MoonshotAI/kimi-cli/issues/2635) | **Open** | VS Code extension drops individual characters in streamed assistant messages. Wire logs confirm model output is intact — loss occurs at render/copy layer. High visibility for VS Code users. |

*Community reaction: All closed issues have 0 👍 and minimal comments, suggesting they may have been resolved quietly or affect niche setups. #2635 is fresh (created 2026-09-05) with no discussion yet.*

## 4. Key PR Progress
Only one PR updated in the last 24 hours:

| PR | Status | Description |
|----|--------|-------------|
| [#2513](https://github.com/MoonshotAI/kimi-cli/pull/2513) | **Open** | **fix(kosong): recursively decode double-encoded tool-call arguments**. Moonshot API sometimes returns `function.arguments` with nested arrays/objects as JSON strings (double-encoded). Single `json.loads` leaves values as strings, failing Pydantic validation. Adds shared `decode_tool_arguments` utility to recursively parse. Critical for tool-calling reliability. |

## 5. Feature Request Trends
From the current issue set, two recurring themes emerge:

1. **IDE Integration Polish** — Zed (Windows ACP) and VS Code (stream rendering) both show integration-layer bugs, not core CLI issues. Developers expect first-class, reliable editor embeddings.
2. **Shell UX Configurability** — Request for configurable prompt (cwd, git branch, symbols) signals demand for a more informative, customizable REPL experience.

## 6. Developer Pain Points
- **Authentication fragility** — Token/session handling on Linux (Debian) still causes repeated `Authorization failed` errors.
- **Windows-specific launch failures** — Zed ACP panel non-functional on Windows 11, limiting cross-platform adoption.
- **Streaming render fidelity** — Character loss in VS Code chat panel undermines trust in streamed output; copy-paste also affected.
- **Opaque prompt defaults** — Removal of cwd/git info without configuration option forces users to lose context or fork.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — Issues & PRs updated 2026-09-05 to 2026-09-06.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-06

## Today's Highlights

No new releases today, but the project saw significant bug-fix activity across TUI, Desktop, and Go provider integrations. Critical issues include a **Go subscription billing calculation bug** blocking users at "100% usage" despite available quota, and **SQLite lock contention** causing failures when multiple opencode processes share a database. The team also merged several PRs improving connection resilience (stall detection, request timeouts, CORS preflight caching) and Desktop UX polish.

---

## Releases

*No releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#47547](https://github.com/anomalyco/opencode/issues/47547) **Go subscription blocked — Monthly Usage shows 100% via sum of per-model percentages, not actual dollars vs $60 limit** | Billing logic incorrectly aggregates per-model percentages instead of comparing actual spend to the $60 cap, blocking active subscribers. | 3 comments, 0 👍 — newly filed, high urgency for Go users |
| [#47566](https://github.com/anomalyco/opencode/issues/47566) **Concurrent opencode processes on one database fail prompts with "Failed to execute statement" (SQLITE_BUSY)** | Multiple processes sharing a data directory contend for SQLite write lock; statements time out after 5s and fail fatally. | 2 comments — PR [#47567](https://github.com/anomalyco/opencode/pull/47567) already submitted with retry logic |
| [#32747](https://github.com/anomalyco/opencode/issues/32747) **@ file mentions do not include files created after startup** | New files missing from `@` picker until restart; stale search state in TUI. Long-standing (opened June), affects daily workflow. | 15 comments, 13 👍 — high community interest |
| [#35009](https://github.com/anomalyco/opencode/issues/35009) **High resource usage after updating from 1.17.11 to 1.17.13** | RAM ~1GB RSS, 75GB virtual, 22% CPU during normal sessions. Regression in recent versions. | 10 comments, 2 👍 — closed but indicates performance regression |
| [#47568](https://github.com/anomalyco/opencode/issues/47568) **Go endpoint: kimi-k3 rejects 'n' parameter (400: n: Input should be None)** | Go API returns 400 for kimi-k3 when `n` parameter (even default `n: 1`) is sent. Breaks compatibility. | 1 comment — provider-specific bug |
| [#47558](https://github.com/anomalyco/opencode/issues/47558) **TUI converts pasted image file paths to attachments even when active model has no image input** | Text-only models (e.g., glm-5.3) receive unwanted image attachments; no way to disable. | 1 comment — UX friction for non-vision models |
| [#35791](https://github.com/anomalyco/opencode/issues/35791) **fff over-indexes Jujutsu (jj) workspaces — .gitignore silently dropped when no colocated .git** | Multi-GB indexing, sustained high CPU on jj repos without `.git`; `.gitignore` not respected. | 1 comment — niche but severe for jj users |
| [#47563](https://github.com/anomalyco/opencode/issues/47563) **SSE /global/event heartbeat floods shared opencode.log at INFO level — 816M lines / 95 GB over 34 days** | Heartbeat logging at INFO level creates massive log files (95 GB in 34 days). | 0 comments — operational burden for long-running servers |
| [#47562](https://github.com/anomalyco/opencode/issues/47562) **[Go] "Allow models that train on request data" toggle reverts to off** | Privacy setting doesn't persist; toggles back to disabled immediately. | 0 comments — settings persistence bug |
| [#47557](https://github.com/anomalyco/opencode/issues/47557) **Web/Desktop model picker permanently hides catalog models that lack a family field (e.g. opencode-go/omen-alpha)** | Models without `family` field invisible in Web/Desktop picker but work in TUI/API. Inconsistent UX. | 0 comments — catalog display bug |

---

## Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| [#47567](https://github.com/anomalyco/opencode/pull/47567) | Bug fix | **Retry SQLite statements on lock timeout** — adds retry logic with backoff for `SQLITE_BUSY` when multiple processes share a DB (closes #47566). |
| [#47571](https://github.com/anomalyco/opencode/pull/47571) | Bug fix | **Detect stalled event streams and resync on foreground** — fixes frozen sessions when phone wakes from sleep; browser never reported hung `reader.read()`. |
| [#47572](https://github.com/anomalyco/opencode/pull/47572) | Bug fix | **Time out requests the server never answers** — adds request-level timeout to prevent dead sockets wedging the 4-slot request queue. |
| [#47573](https://github.com/anomalyco/opencode/pull/47573) | Bug fix | **Refresh queued inputs when connection returns** — ensures `session.pending` reloads after reconnect, not just on initial mount. |
| [#47574](https://github.com/anomalyco/opencode/pull/47574) | Feature | **Pulse status dot while event stream reconnects** — visual feedback during reconnection (complements #47571 stall detection). |
| [#47565](https://github.com/anomalyco/opencode/pull/47565) | Bug fix | **Pace directory re-sync after reconnect** — prevents bypassing the 2-at-a-time refresh queue on reconnect (was causing 192 fetches in 7s). |
| [#47564](https://github.com/anomalyco/opencode/pull/47564) | Bug fix | **Keep slow git reads from filling the request queue** — git API calls (p50 1.8s) were occupying all 4 queue slots, blocking other requests. |
| [#47560](https://github.com/anomalyco/opencode/pull/47560) | Bug fix | **Keep server CORS headers so preflights cache** — eliminated 759 redundant OPTIONS calls (50% of traffic) in Desktop. |
| [#47561](https://github.com/anomalyco/opencode/pull/47561) | Bug fix | **Coalesce catalog refetches from event bursts** — batches `mcp.status.changed` events to avoid 192 redundant `/api/mcp` fetches in 7s. |
| [#47548](https://github.com/anomalyco/opencode/pull/47548) | Feature | **Discover Bedrock credentials in provider plugin** — wires AWS default credential chain so Bedrock provider works with EC2 instance roles (follow-up to #47436). |
| [#47559](https://github.com/anomalyco/opencode/pull/47559) | Feature | **Independent GPT and Claude tool optimization** — separates model prompt selection from tool optimization with independent plugin registrations. |
| [#47570](https://github.com/anomalyco/opencode/pull/47570) | Feature | **Manage recently closed projects** — expands home sidebar "Recently closed" beyond 5 entries, adds actions (reopen, remove), persists across sessions (closes #47569). |
| [#47555](https://github.com/anomalyco/opencode/pull/47555) | Bug fix | **Stop fetching placeholder session id on `--continue`** — fixes 400 error when TUI seeds `sessionID: "dummy"` (closes #47556). |
| [#47394](https://github.com/anomalyco/opencode/pull/47394) | Bug fix | **Lighten dark contrast icon buttons** — dark-mode styling refinement for desktop prompt submit button. |
| [#47224](https://github.com/anomalyco/opencode/pull/47224) | Bug fix | **Retain Zen discovery transport metadata** — fixes merging endpoint-only IDs into empty provider model entries (closes #47120). |

---

## Feature Request Trends

1. **Session & Project Management** — Multiple requests for better session lifecycle hooks ([#28695](https://github.com/anomalyco/opencode/issues/28695)), recently closed project management ([#47569](https://github.com/anomalyco/opencode/issues/47569)), and orthogonal permission profiles decoupled from agent identity ([#35830](https://github.com/anomalyco/opencode/issues/35830)).

2. **Model/Provider Flexibility** — Demand for sub-agent model selection in Desktop UI ([#35805](https://github.com/anomalyco/opencode/issues/35805)), third-party Copilot Enterprise model support ([#34030](https://github.com/anomalyco/opencode/issues/34030)), and catalog visibility for models without `family` field ([#47557](https://github.com/anomalyco/opencode/issues/47557)).

3. **Cross-Platform Remote Work** — Desktop remote server on Windows with macOS client needs project/session sync fixes ([#42627](https://github.com/anomalyco/opencode/issues/42627)).

4. **Performance & Resource Control** — Recurring themes: indexing scope control (jj workspaces #35791), log volume reduction ([#47563](https://github.com/anomalyco/opencode/issues/47563)), and memory/CPU regressions ([#35009](https://github.com/anomalyco/opencode/issues/35009)).

---

## Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Stale file index / `@` mentions** | High (13 👍 on #32747) | Daily workflow interruption; requires restart to see new files |
| **SQLite contention in multi-process setups** | New but critical | Blocks concurrent opencode instances sharing data dir |
| **Go subscription billing calculation** | New, blocking | Users incorrectly locked out despite available quota |
| **Event stream fragility on mobile/background** | Multiple PRs (#47571-74) | Sessions freeze on phone wake; no visual feedback during reconnect |
| **Excessive logging / API chatter** | #47563 (95 GB logs), #47561 (192 fetches/7s) | Operational burden, wasted bandwidth |
| **Desktop ↔ TUI feature parity gaps** | Model picker (#47557), image handling (#47558), CORS (#47560) | Inconsistent experience across interfaces |
| **Provider integration edge cases** | Bedrock IMDS (#35798), kimi-k3 `n` param (#47568), Minimax cost (#35792) | Fragmented provider reliability |

---

*Digest generated from GitHub data for anomalyco/opencode. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-06

## Today's Highlights
Pi v0.85.1 shipped with **GPT-6 Astra** support via OpenAI API keys and Codex subscriptions. The community is actively triaging regressions in the 0.85.x line — notably a packaging defect that omits `@earendil-works/pi-server` and `@earendil-works/pi-client` from the published coding agent, breaking subagent execution. Meanwhile, Windows usage patterns and provider gateway integrations (Vercel AI Gateway, OpenRouter, LLM Gateway) are driving concentrated discussion.

---

## Releases
### v0.85.1 — GPT-6 Astra & Patch Fixes
- **New provider model**: GPT-6 Astra now available through OpenAI API keys and OpenAI Codex subscriptions ([provider docs](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md#api-keys))
- This is a patch release on the 0.85.x branch; no breaking changes noted in the release summary.

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows usage patterns & pain points** | 52 comments, 2👍 — Largest thread; core team seeking data on how developers run Pi on Windows (WSL, native, Git Bash, etc.) to prioritize fixes and docs. | High engagement; developers reporting varied environments and breakage. |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | **`PI_OFFLINE` silently disables provider model discovery** | 5 comments — Undocumented behavior: `PI_OFFLINE` (meant for update checks) also blocks *all* model catalog fetching, breaking offline-capable workflows. | Developers surprised; contradicts documented scope. |
| [#9209](https://github.com/earendil-works/pi/issues/9209) | **GitHub Copilot GPT-6 Astra routed to wrong endpoint** | 3 comments — Pi sends `github-copilot/gpt-6-astra` to `/chat/completions`; Copilot rejects with `unsupported_api_for_model`. Blocks Copilot users on new model. | Clear regression; needs provider routing fix. |
| [#9212](https://github.com/earendil-works/pi/issues/9212) | **Sonnet-5 via gateway: 13% edit tool calls truncated** | 3 comments — `edits:[{}]` truncation on 18/134 calls via Vercel AI Gateway; fable shows 0%. Points to gateway transport or schema validation issue. | Data-driven report; affects reliability of tool use. |
| [#9210](https://github.com/earendil-works/pi/issues/9210) | **Anthropic via gateway: `cacheWrite1h` never set, billed at 5m rate** | 2 comments — 1h cache TTL honored by gateway but Pi records `cacheWrite1h: 0`, causing overbilling at 5m rate (1.25×). | Billing impact; gateway integration gap. |
| [#9211](https://github.com/earendil-works/pi/issues/9211) | **`vercelGatewayRouting` inert on vercel-ai-gateway provider** | 2 comments — Config only applied in `openai-completions` adapter; gateway catalog uses `anthropic-messages`, so routing (`only`, `order`) is ignored. | Feature gap; provider config not respected. |
| [#9216](https://github.com/earendil-works/pi/issues/9216) | **Ollama qwen3.8:27b: stream 'terminated' errors + auto-compaction stall** | 2 comments — Clean 0.84.x→0.85.x regression: repeated `stopReason: "error"` and later `stopReason: "length"`; auto-compaction stops re-triggering. | Regression report; affects local model users. |
| [#8457](https://github.com/earendil-works/pi/issues/8457) | **Invoke skills mid-sentence like prompt templates** | 3 comments, 4👍 — Skills only expand at line start (`/skill:name args`); prompt templates support mid-line (`/template args`). Consistency request. | 4👍; UX parity issue. |
| [#9218](https://github.com/earendil-works/pi/issues/9218) | **`npm install -g pi-coding-agent@0.85.1`: subagents fail — missing pi-server/pi-client deps** | 1 comment — Published package omits runtime dependencies; subagent child processes cannot import `@earendil-works/pi-server` / `@earendil-works/pi-client`. | **Critical packaging defect**; blocks subagent feature. |
| [#9200](https://github.com/earendil-works/pi/issues/9200) | **SIGKILL on positional message arg ≥ ~993 bytes** | 1 comment — Process killed by SIGKILL (exit 137, no output) before model resolution; sharp threshold at ~993 bytes. | Severe CLI crash; likely arg parsing / buffer limit. |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#9224](https://github.com/earendil-works/pi/pull/9224) | **fix(ai): clamp OpenRouter :free maxTokens to base model** | CLOSED | OpenRouter `:free` catalog entries advertise inflated `maxTokens`; Pi now clamps to base model limit (e.g., 524288) to avoid 400 errors. |
| [#9222](https://github.com/earendil-works/pi/pull/9222) | **fix(coding-agent): reject reload during active session operations** | OPEN | Prevents extension-triggered reload while a tool runs; checks `isStreaming` and `isProcessingTool` to avoid invalidated runner access. |
| [#9096](https://github.com/earendil-works/pi/pull/9096) | **feat(ai,coding-agent): add Meta provider with Muse subscription OAuth** | OPEN | New built-in Meta provider; unusual daily token re-minting from identity token; streaming is "fake" (burst output). Resolves [#7543](https://github.com/earendil-works/pi/issues/7543). |
| [#9219](https://github.com/earendil-works/pi/pull/9219) | **fix(coding-agent): preserve host UI prototype methods & Proxy traps** | CLOSED | `wrapUIPromptContext` used object spread, dropping prototype methods/Proxy traps from embedder-provided UI contexts. Now preserves them. |
| [#9214](https://github.com/earendil-works/pi/pull/9214) | **Invoke skills and prompt templates mid-sentence** | CLOSED | Implements [#8457](https://github.com/earendil-works/pi/issues/8457): `/skill:name args` and `/template args` now expand anywhere in input, not just line start. |
| [#9215](https://github.com/earendil-works/pi/pull/9215) | **fix(tui): allow zero-row custom footers** | CLOSED | Fixes [#8919](https://github.com/earendil-works/pi/issues/8919): custom footer dock slot `minSize: 1` → `0`; no blank row when footer renders `[]`. |
| [#9170](https://github.com/earendil-works/pi/pull/9170) | **fix(coding-agent): declare pi-server runtime dependency** | CLOSED | Adds missing `@earendil-works/pi-server` to `dependencies` (was peer-only); fixes fresh install import failure in 0.85.0. |
| [#9172](https://github.com/earendil-works/pi/pull/9172) | **fix(coding-agent): prevent broken package root publication** | CLOSED | Follow-up to #9170; adds guard to prevent publishing without required runtime deps. |
| [#9182](https://github.com/earendil-works/pi/pull/9182) | **fix(coding-agent): skip session events on invalidated extension runners** | CLOSED | Fixes race during `/new` or Ctrl+C: teardown disposes session, invalidating extension runtime; second teardown now skips events on invalidated runners. |
| [#9208](https://github.com/earendil-works/pi/pull/9208) | **fix(coding-agent): use `--no-extensions` flag in RPC example** | CLOSED | Example used unrecognized `--no-extension`; corrected to `--no-extensions` so example runs. |

---

## Feature Request Trends
From the issue stream, the strongest directional requests are:

1. **Provider gateway ecosystem expansion** — Native support for Requesty ([#5473](https://github.com/earendil-works/pi/issues/5473)), The Grid ([#9198](https://github.com/earendil-works/pi/issues/9198)), LLM Gateway ([#7610](https://github.com/earendil-works/pi/pull/7610)), Meta ([#9096](https://github.com/earendil-works/pi/pull/9096)). Developers want more "OpenRouter-style" routers as first-class providers.
2. **OpenAI Responses API parity** — Server-side compaction (`previous_response_id`, `/responses/compact`) ([#7317](https://github.com/earendil-works/pi/issues/7317), [#6676](https://github.com/earendil-works/pi/issues/6676)), async tool calling ([#9113](https://github.com/earendil-works/pi/issues/9113)), top-level `instructions` ([#8734](https://github.com/earendil-works/pi/pull/8734)).
3. **Windows first-class experience** — [#7547](https://github.com/earendil-works/pi/issues/7547) is a meta-issue to catalog and prioritize Windows-specific paths (WSL, native, Git Bash, WezTerm).
4. **Extension / runtime extensibility** — Expose `ModelRuntime` to extensions ([#8791](https://github.com/earendil-works/pi/issues/8791)), package namespace for skills/templates ([#8834](https://github.com/earendil-works/pi/issues/8834)), `--env-file` CLI flag ([#9197](https://github.com/earendil-works/pi/issues/9197)).
5. **Session & context management** — Clean up harness projections ([#6451](https://github.com/earendil-works/pi/issues/6451)), system message deltas for prompt/tool changes ([#9117](https://github.com/earendil-works/pi/pull/9117)), configurable "jump to latest" button ([#9202](https://github.com/earendil-works/pi/issues/9202)).

---

## Developer Pain Points (Recurring Frustrations)

| Area | Evidence | Impact |
|------|----------|--------|
| **Packaging / dependency integrity** | [#9218](https://github.com/earendil-works/pi/issues/9218) (missing `pi-server`/`pi-client` in 0.85.1), [#9170](https://github.com/earendil-works/pi/pull/9170) (same in 0.85.0), [#9223](https://github.com/earendil-works/pi/issues/9223) (`bun run eval` recursive invocation) | Breaks fresh installs, subagents, CI; erodes trust in releases. |
| **Provider gateway mismatches** | [#9209](https://github.com/earendil-works/pi/issues/9209) (Copilot GPT-6 Astra wrong endpoint), [#9210](https://github.com/earendil-works/pi/issues/9210) (cache billing), [#9211](https://github.com/earendil-works/pi/issues/9211) (routing ignored), [#9212](https://github.com/earendil-works/pi/issues/9212) (tool truncation) | Silent failures, overbilling, unreliable tool use — hard to debug. |
| **TUI / terminal edge cases** | [#5200](https://github.com/earendil-works/pi/issues/5200) (IME candidate window stuck in WezTerm/WSL), [#9169](https://github.com/earendil-works/pi/issues/9169) (images broken in fullscreen), [#9220](https://github.com/earendil-works/pi/issues/9220) (slash-command race with IME/fast typing), [#9202](https://github.com/earendil-works/pi/issues/9202) (unwanted "jump to latest" button) | Daily UX friction for terminal-heavy users; Windows/WezTerm combos especially brittle. |
| **Undocumented / surprising flags** | [#8684](https://github.com/earendil-works/pi/issues/8684) (`PI_OFFLINE` disables model discovery), [#9200](https://github.com/earendil-works/pi/issues/9200) (SIGKILL at 993-byte arg) | Developers hit invisible walls; no error messages, just crashes or silent degradation. |
| **Session compaction / context reliability** | [#9216](https://github.com/earendil-works/pi/issues/9216) (auto-compaction stops), [#9051](https://github.com/earendil-works/pi/issues/9051) (custom compact message misses retry), [#7317](https://github.com/earendil-works/pi/issues/7317) (no server-side compaction) | Long-running agent sessions degrade or stall; critical for coding workflows. |

---

*Digest generated from github.com/badlogic/pi-mono data as of 2026-09-06. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-06

## Today's Highlights
Three preview/nightly releases shipped the same core improvement: a web-shell feature to **visualize and manage dynamic workflow runs** (#10594), plus session-workflow performance work. Meanwhile, the core team is hardening CI reliability (macOS E2E retries, vitest flake classification) and fixing subtle concurrency bugs in transcript handling and tool scheduling. A notable integration PR enables **subagent delegation to external ACP agents (Claude Code first)**.

---

## Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| `v0.23.1-preview.0` | Preview | • `feat(web-shell)`: visualize & manage dynamic workflow runs ([#10594](https://github.com/QwenLM/qwen-code/pull/10594))<br>• `perf(web-shell)`: derive session workflow project |
| `v0.23.0-nightly.20260905.0c945a6136` | Nightly | Same changes as preview |
| `v0.23.0-nightly.20260905.e3d26283e6` | Nightly | Same changes as preview |

> All three releases share the same changelog — the workflow-run visualization is the headline user-facing feature.

---

## Hot Issues (Top 10 by Impact/Activity)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#10989](https://github.com/QwenLM/qwen-code/issues/10989) | **Daemon prompt authority only polled where sidebar mounted — #9487 fix inert in VS Code companion** | The loading-indicator fix for long tasks doesn't propagate to the VS Code extension because the daemon state is only fetched in the web-shell sidebar. Blocks parity between UIs. | 3 comments, P2 priority |
| [#11146](https://github.com/QwenLM/qwen-code/issues/11146) | **Pre-aborted tool requests can wait behind unrelated active batch** | Scheduler bug: cancelled requests remain queued behind an unrelated batch, wasting capacity and potentially blocking subsequent work. Core throughput issue. | 2 comments, P2, `waiting-for-feedback` |
| [#9645](https://github.com/QwenLM/qwen-code/issues/9645) | **Web shell: left-sidebar session spinner drops mid-turn on long tasks** | **Closed** — fixed by grounding indicator in daemon's `hasActivePrompt` (see #9487, #10941). Validates the new authority model. | 4 comments, was P2 |
| [#11141](https://github.com/QwenLM/qwen-code/issues/11141) | **ACP in IDEA 26.1.1: questions not answered/displayed** | Windows/IDEA integration regression — ACP client fails to render or respond. Blocks JetBrains users on latest IDE. | 3 comments, P2, `need-information` |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | **Fleet Shepherd Dashboard** | Auto-maintained fleet health tracker; shows bot fleet state, scan age, syncs. Useful for infra observability. | Bot-maintained, updated today |
| [#11147](https://github.com/QwenLM/qwen-code/issues/11147) | **Deferred review findings from PR #11134** | Autofix-deferred items from macOS E2E retry PR — technical debt tracking for maintainers. | 0 comments, bot-created |
| [#11145](https://github.com/QwenLM/qwen-code/pull/11145) | **fix(serve): load persisted MCP config after ACP preheat at startup** | PR filed as issue (auto-linked) — ensures MCP servers are ready immediately at daemon startup, not on manual reload. | 0 comments, just opened |

> **Note:** Only 6 issues updated in last 24h; the list above covers all of them with context.

---

## Key PR Progress (Top 10 by Significance)

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#11003](https://github.com/QwenLM/qwen-code/pull/11003) | Open | **Delegate subagent turn to external ACP agent (Claude Code first)** — `executor` block in subagent definition runs turn over ACP in external process; results re-published as subagent output. | **Major extensibility** — enables polyglot agent workflows, first-class Claude Code bridge. |
| [#11015](https://github.com/QwenLM/qwen-code/pull/11015) | Open | **Named-session worktree reset (Part 4B)** — `/clear`, `/new`, `/reset` now work on selected worktree-isolated task, preserving daemon-attested worktree/files/branch. | Completes owner-scoped channel sessions (#10103); safer session hygiene. |
| [#11086](https://github.com/QwenLM/qwen-code/pull/11086) | Open | **Scope extensions to workspace runtimes** — global extension catalog available per workspace runtime; reconciles extension state into live runtimes, exposes workspace-qualified daemon/SDK access. | **Multi-workspace extension isolation** — critical for monorepos and shared environments. |
| [#10938](https://github.com/QwenLM/qwen-code/pull/10938) | Open | **Session Workflow: navigable dependencies, quieter chrome** — plan DAG leads with step (not status), adds navigation, docs, inspector polish. Closes gaps from #8583. | UX maturation for workflow visualization (ties to release feature). |
| [#11054](https://github.com/QwenLM/qwen-code/pull/11054) / [#11053](https://github.com/QwenLM/qwen-code/pull/11053) | Open | **Global turn navigation Phase 2** — headless data layer (bounded metadata, transcript caches, exact locators, reconciliation, React hooks) + client data layer (provider-owned fetch slices, explicit value ranges). | Foundation for **session-wide time-travel/rewind UI** — high-leverage UX work. |
| [#9466](https://github.com/QwenLM/qwen-code/pull/9466) | Open | **Anchor rewind mapping to stable prompt identity** — rewind resolves target via persisted prompt ID, survives turn renumber/reorder (resume, headless `-p --resume`). | Fixes rewind fragility across session boundaries. |
| [#11144](https://github.com/QwenLM/qwen-code/pull/11144) | Open | **Barrier live transcript reads behind tool-result writes** — prevents half-written tool turns during concurrent session loads; routes restore through shared `finalizeDanglingForRestore`. | Concurrency hardening for ACP agent path. |
| [#11145](https://github.com/QwenLM/qwen-code/pull/11145) | Open | **Load persisted MCP config after ACP preheat at startup** — immediate `reconcileMcpConfiguration()` so MCP servers ready at daemon start. | Removes manual reload step; faster startup for MCP users. |
| [#11134](https://github.com/QwenLM/qwen-code/pull/11134) | Open | **Retry transient all-green macOS E2E shard death once** — budget-gated single retry (mirrors Linux `sandbox:none` fix #10572). | CI stability: reduces false-red macOS shards. |
| [#11103](https://github.com/QwenLM/qwen-code/pull/11103) | Open | **Stop failing Test job on starved vitest worker RPC alone** — classifies vitest IPC flakes as infra warnings, not hard failures. | CI noise reduction; faster signal on real failures. |

---

## Feature Request Trends (from Issues & PRs)
1. **Multi-agent / external agent interop** — #11003 (ACP delegation), #11086 (workspace-scoped extensions), #11015 (channel sessions) point to a **composable agent runtime** where Qwen Code orchestrates specialized sub-agents.
2. **Session durability & navigation** — #9466, #11054, #11053, #11015: users want **reliable rewind, reset, and cross-session history** that survives process boundaries.
3. **IDE parity (VS Code, JetBrains)** — #10989 (daemon state sync), #11141 (IDEA ACP breakage): consistent UX across editors is a recurring theme.
4. **Workflow visualization & management** — release feature (#10594) + #10938 polish: **dynamic workflow runs as first-class UI objects**.
5. **CI/CD reliability as a feature** — #11134, #11103, #10921, #10439: the team treats flake suppression, retry budgets, and health dashboards as product work.

---

## Developer Pain Points (Recurring Frustrations)
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Flaky CI / slow feedback loops** | #10921 (60-min ECS wait), #11134 (macOS shard death), #11103 (vitest IPC), #10439 (/resolve watcher) | High — multiple PRs this week |
| **UI state desync between web-shell & VS Code** | #10989 (daemon authority not polled in companion), #9645 (spinner drop) | Medium — 2+ issues in 24h |
| **ACP integration fragility in IDEs** | #11141 (IDEA 26.1.1 broken), #11145 (MCP config load timing) | Medium — new reports daily |
| **Concurrency races in transcript/tool scheduling** | #11146 (aborted request queueing), #11144 (half-written turns) | Medium — core-path bugs |
| **Rewind/navigation losing context on resume** | #9466 (positional mapping breaks), #11054/53 (new nav layer) | Ongoing — multi-PR effort |

---

*Digest generated from GitHub data (releases, issues, PRs updated 2026-09-05 → 2026-09-06). Links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) Community Digest — 2026-09-06

## 1. Today's Highlights
The project has fully transitioned to the **Codewhale** brand (Shannon Labs), with v0.9.12 released and the legacy `deepseek-tui` npm package deprecated. Active development focuses on **crate decomposition** (EPIC-005), **Windows computer-use reliability**, **MCP startup visibility**, and **Fleet menu simplification**. Multiple critical Windows backend bugs were fixed and merged today, including truthful PowerShell failure reporting and CRLF preservation in `write_file`.

---

## 2. Releases
**v0.9.12** — Brand transition release. The `codewhale` command, npm package, and release assets are now the canonical identifiers. Legacy `deepseek-tui` package receives no further updates. Migration guide and operator handoff docs are tracked in [#5573](https://github.com/Hmbown/Codewhale/issues/5573).

---

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#5573](https://github.com/Hmbown/Codewhale/issues/5573)** Milestone tracker for v0.9.12 | Central coordination issue for the release; slices, gates, PR/reinstall/self-test steps. Founder decisions documented. | 24 comments, updated today — active release orchestration |
| **[#5316](https://github.com/Hmbown/Codewhale/issues/5316)** EPIC-005: Crate Decomposition (Umbrella) | Architectural refactor splitting the monolithic TUI crate; all sub-EPICs and FEATs report here. | 22 comments, ongoing — core structural work |
| **[#5620](https://github.com/Hmbown/Codewhale/issues/5620)** Context pressure warning is transient; agent doesn't react | Silent context degradation defeats a safety signal; medium severity, affects runtime/agent turn metadata. | 12 comments, updated today — reliability concern |
| **[#5906](https://github.com/Hmbown/Codewhale/issues/5906)** Fleet claims: parked/cancelled agents hold write claims indefinitely | Blocks sibling work on overlapping scopes; no release path for claims after parent cancellation. | Filed today, 0 comments — critical concurrency bug |
| **[#5904](https://github.com/Hmbown/Codewhale/issues/5904)** Web fetch: JS-shell 200s fail extraction, no retry/escalation | Cache-state dependent failures; explorers/scouts report false "unfetchable" errors. | Filed today — impacts web research agents |
| **[#5909](https://github.com/Hmbown/Codewhale/issues/5909)** `write_file` converts CRLF→LF on overwrite; `edit_file` preserves | Inconsistent line-ending handling between tools; Windows developers hit silent corruption. | Filed today, PR [#5911](https://github.com/Hmbown/Codewhale/pull/5911) already open |
| **[#5908](https://github.com/Hmbown/Codewhale/issues/5908)** Win32 computer-use: false success on PowerShell failure; mouse-down drops press | Three defects in Windows backend; input actions report success when they never ran. | Filed today, fixed in [#5910](https://github.com/Hmbown/Codewhale/pull/5910) & [#5903](https://github.com/Hmbown/Codewhale/pull/5903) |
| **[#5887](https://github.com/Hmbown/Codewhale/issues/5887)** MCP startup stuck on "20 connecting" | No progress visibility; users can't distinguish stalled servers from slow startup. | Founder-reported during dogfooding; PR [#5897](https://github.com/Hmbown/Codewhale/pull/5897) in progress |
| **[#5846](https://github.com/Hmbown/Codewhale/issues/5846)** Voice input: on-device STT default, API-key fallback, keybinding | Accessibility/UX feature parity with reasoning blocks; inline pattern, keyboard-triggered. | 1 comment, founder-initiated — UX investment |
| **[#2323](https://github.com/Hmbown/Codewhale/issues/2323)** Chinese IME not adapted (👍:1) | Long-standing CJK input issues: pinyin hints not hidden, characters leak into model/slash input. | 3 comments, updated today — i18n gap affecting non-Latin users |

---

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|----|--------|---------|
| **[#5897](https://github.com/Hmbown/Codewhale/pull/5897)** `fix(mcp): show startup progress as each server connects` | OPEN | Consumes each MCP connection task as it completes; updates engine pool incrementally instead of buffering all. Addresses [#5887](https://github.com/Hmbown/Codewhale/issues/5887). |
| **[#5911](https://github.com/Hmbown/Codewhale/pull/5911)** `fix(tools): write_file preserves existing file's line-ending style (CRLF)` | OPEN | Mirrors `edit_file` behavior: detects prior ending via `contract_line_ending`, restores with `restore_contract_line_endings`. Fixes [#5909](https://github.com/Hmbown/Codewhale/issues/5909). |
| **[#5910](https://github.com/Hmbown/Codewhale/pull/5910)** `fix(computer-use): win32 input actions fail truthfully; targeted mouse-down presses` | CLOSED | Fixes all three root causes in `win32.mjs`: loads User32 type per-action, returns actual PowerShell exit codes, implements proper `left_mouse_down`. Closes [#5908](https://github.com/Hmbown/Codewhale/issues/5908)/[#5896](https://github.com/Hmbown/Codewhale/issues/5896). |
| **[#5903](https://github.com/Hmbown/Codewhale/pull/5903)** `fix(computer-use): win32 backend reports PowerShell failures truthfully` | CLOSED | Alternative fix path for same Windows backend defects; merged. |
| **[#5905](https://github.com/Hmbown/Codewhale/pull/5905)** `feat(tui): prioritize the Fleet menu surface` | OPEN | Reduces `/fleet` verbs from 14→5 (`members\|setup\|teams\|workers\|help`); others nested under `/fleet help` groups. Closes [#5888](https://github.com/Hmbown/Codewhale/issues/5888). |
| **[#5907](https://github.com/Hmbown/Codewhale/pull/5907)** `feat(tui): list custom themes in picker` | OPEN | `/theme` picker now discovers `$CODEWHALE_HOME/themes/*.json`, appends custom overlays after built-ins, preserves `custom:<name>` selector. Closes [#5901](https://github.com/Hmbown/Codewhale/issues/5901). |
| **[#5899](https://github.com/Hmbown/Codewhale/pull/5899)** `fix(version): show published Cargo sources without the dev marker` | OPEN | Published crates.io packages no longer show `(dev)`; only unpackaged checkouts retain it. Fixes [#5891](https://github.com/Hmbown/Codewhale/issues/5891). |
| **[#5895](https://github.com/Hmbown/Codewhale/pull/5895)** `fix(computer-use): scope HarmonyOS cleanup to owned temporary files` | CLOSED | Downloads into unique owned directory; removes only that directory on success/failure. Prevents collateral temp-file deletion. Closes [#5894](https://github.com/Hmbown/Codewhale/issues/5894). |
| **[#5893](https://github.com/Hmbown/Codewhale/pull/5893)** `fix(release): verify all crate tarballs before first upload` | CLOSED | Adds full-workspace Cargo publication dry-run gate; prevents broken crate publication (root cause of v0.9.12 TUI crate failure). Closes [#5892](https://github.com/Hmbown/Codewhale/issues/5892). |
| **[#5902](https://github.com/Hmbown/Codewhale/pull/5902)** `refactor(tui): adopt command shapes in session lifecycle slice (FEAT-023)` | OPEN | Converts 9 session commands (`/branch`, `/compact`, `/fork`, `/load`, `/new`, `/purge`, `/save`, `/sessions`, `/tree`) to portable command shapes. Part of crate decomposition. |

---

## 5. Feature Request Trends
From the issue landscape, the strongest directional requests are:

1. **Modular Architecture** — Crate decomposition (EPIC-005) and command-shape adoption (FEAT-023) signal a push toward pluggable, independently versioned components.
2. **Windows First-Class Support** — Computer-use backend fixes, CRLF preservation, IME handling, and PowerShell-aware shell guidance all target Windows parity.
3. **Agent Fleet UX** — Simplifying Fleet menu ([#5888](https://github.com/Hmbown/Codewhale/issues/5888)), fixing claim lifecycle ([#5906](https://github.com/Hmbown/Codewhale/issues/5906)), and MCP progress visibility ([#5887](https://github.com/Hmbown/Codewhale/issues/5887)) show investment in multi-agent orchestration.
4. **Protocol Interop** — ACP `session/list`/`load` ([#5864](https://github.com/Hmbown/Codewhale/issues/5864)), OpenCode `x-opencode-session` header ([#5868](https://github.com/Hmbown/Codewhale/pull/5868)), and live model catalog resolution ([#5849](https://github.com/Hmbown/Codewhale/issues/5849)) indicate editor/IDE integration priority.
5. **Customization Surfacing** — Theme picker for user overlays ([#5901](https://github.com/Hmbown/Codewhale/issues/5901)/[#5907](https://github.com/Hmbown/Codewhale/pull/5907)), reasoning-only retry config ([#5867](https://github.com/Hmbown/Codewhale/pull/5867)), and voice input keybinding ([#5846](https://github.com/Hmbown/Codewhale/issues/5846)) reflect "power-user control" theme.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows-Specific Tool Failures** | False success on input actions ([#5908](https://github.com/Hmbown/Codewhale/issues/5908)), CRLF mangling ([#5909](https://github.com/Hmbown/Codewhale/issues/5909)), IME leaks ([#2323](https://github.com/Hmbown/Codewhale/issues/2323)), PowerShell vs Bash guidance mismatch ([#5900](https://github.com/Hmbown/Codewhale/pull/5900)) | Silent data corruption, broken automation, non-Latin input broken |
| **Opaque Startup/Connection State** | MCP "20 connecting" indefinitely ([#5887](https://github.com/Hmbown/Codewhale/issues/5887)), no progress for individual servers | Users cannot diagnose stalls vs slowness; erodes trust |
| **Agent Lifecycle Leaks** | Parked agents hold write claims forever ([#5906](https://github.com/Hmbown/Codewhale/issues/5906)), context pressure warnings ignored ([#5620](https://github.com/Hmbown/Codewhale/issues/5620)) | Resource contention, silent degradation, no recovery path |
| **Release Pipeline Gaps** | Published crate missing embedded assets ([#5892](https://github.com/Hmbown/Codewhale/issues/5892)), `(dev)` version marker on crates.io installs ([#5891](https://github.com/Hmbown/Codewhale/issues/5891)) | Broken installs, misleading version reporting |
| **Web Fetch Unreliability** | JS-shell 200s fail extraction, no retry/browser fallback, cache-dependent ([#5904](https://github.com/Hmbown/Codewhale/issues/5904)) | Research agents fail non-deterministically |

---

*Digest generated from github.com/Hmbown/Codewhale (formerly DeepSeek-TUI) — data as of 2026-09-06 00:00 UTC.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*