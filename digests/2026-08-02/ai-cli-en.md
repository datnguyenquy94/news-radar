# AI CLI Tools Community Digest 2026-08-02

> Generated: 2026-08-02 03:36 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-02)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is bifurcating into **mature, enterprise-grade platforms** (Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode) and **rapidly iterating challengers** (Gemini CLI, Qwen Code, Kimi Code, Pi, DeepSeek TUI). All tools are converging on **subagent orchestration**, **MCP integration**, **session durability**, and **multi-model/BYOK support** as table-stakes features. The dominant theme across communities is **reliability over novelty** — every tracker shows critical bugs in memory management, session corruption, platform-specific regressions (especially Windows/WSL2/macOS ARM64), and safety/guardrail false positives blocking legitimate work. No major releases shipped today; the ecosystem is in a **stabilization sprint**.

---

## 2. Activity Comparison

| Tool | Issues (Hot) | PRs (24h) | Release Today | Release Type | Notable Signal |
|------|--------------|-----------|---------------|--------------|----------------|
| **Claude Code** | 10 | 3 (all closed) | ❌ | — | Safety classifier crisis (3 issues filed today) |
| **OpenAI Codex** | 10 | 10 (9 closed) | ❌ | — | Windows/OneDrive + memory leaks dominant |
| **Gemini CLI** | 10 | 10 (3 closed) | ✅ | Nightly | Subagent reliability + Auto Memory hardening |
| **GitHub Copilot CLI** | 10 | 0 | ✅ | Stable (v1.0.78-2) | BYOK maturity + session corruption (V8 limit) |
| **Kimi Code CLI** | 5 | 5 (all open) | ❌ | — | Memory system (11 comments, 5+ months) |
| **OpenCode** | 10 (9 closed) | 10 (5 open) | ✅ | Stable (v1.18.11) | 46 issues closed in 24h; unified marketplace PR |
| **Pi** | 10 | 10+ | ❌ | — | Compaction reliability + provider resilience |
| **Qwen Code** | 5 | 10+ | ✅ | Stable + Nightly | Daemon production hardening + review depth |
| **DeepSeek TUI** | 10 | 10 | ❌ | — | TUI launch failure (stop-ship) + API key portability |
| **Grok Build** | 0 | 0 | ❌ | — | No activity |

**Key Observations:**
- **OpenCode** shows highest throughput (46 issues closed, release shipped).
- **Claude Code** has highest community frustration signal (safety classifier opacity, 197 👍 on top issue).
- **Gemini CLI**, **Qwen Code**, **OpenCode** maintain active nightly/stable cadence.
- **DeepSeek TUI** and **Kimi Code** are pre-1.0 with stop-ship bugs.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Demanding | Specific Needs |
|-------------|-----------------|----------------|
| **Subagent Observability & Control** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, Qwen Code, Pi | Trajectory sharing, settings propagation, permission gating, turn-limit handling, silent failure detection |
| **MCP Ecosystem Scaling** | OpenAI Codex, GitHub Copilot CLI, Gemini CLI, OpenCode, Qwen Code, Pi | Lazy-loading (#2901 Copilot, #36534 Codex), catalog limits (2K tools), lifecycle cleanup, process leak fixes |
| **Session Durability & Recovery** | All tools except Grok Build | Compaction-not-clear (#31033 Codex, #6879 Pi, #7020 Pi), event-log bounds (#4325 Copilot, #4299 Copilot), fork/plan-mode corruption (#4324 Copilot) |
| **Multi-Model / BYOK Maturity** | GitHub Copilot CLI (#3282), OpenAI Codex (#29156), OpenCode (#20859), Qwen Code (#6579), Pi | Per-agent model selection, reasoning effort control, provider switching without restart, accurate usage reporting |
| **Safety/Guardrail Transparency** | Claude Code (#83233, #83245, #83244), OpenCode (#459), Pi | Flagged content explanation, appeal/override path, auto-fallback to another model, privacy/data collection docs |
| **Platform-Specific Reliability** | **Windows/WSL2**: Claude Code (#83243, #54394), OpenAI Codex (#35420, #25178, #28103), Copilot CLI (#4328), DeepSeek TUI (#4716 macOS) | Bash tool stability, OneDrive resilience, MSIX packaging, screenshot APIs, terminal codec handling |
| **Daemon/Server Production Hardening** | Qwen Code (#8051, #8245, #8341), Pi (#7451, #7466), OpenCode (#40108) | Configurable concurrency, memory budgets, byte-level bounds, pre-dispatch durability, unified marketplace runtime |
| **AST/Structural Code Intelligence** | Gemini CLI (#22745, #22746), Qwen Code (review lenses), OpenCode (#12522) | Method-level reads, symbol search, codebase mapping, verification lenses |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Challenger/Specialist Tools |
|-----------|---------------------------|----------------------------|
| **Primary Focus** | Reliability, enterprise integration, safety/compliance, ecosystem breadth | Iteration speed, novel workflows (video, voice, memory), developer ergonomics |
| **Target Users** | Professional developers, teams, enterprises, platform integrators | Early adopters, AI-native workflows, researchers, specific ecosystem users (Moonshot, Qwen, DeepSeek) |
| **Technical Approach** | Heavy investment in sandboxing, session integrity, telemetry, plugin marketplaces | Lightweight cores, experimental features (Auto Memory, Operate mode, video gen), community-driven |
| **Model Strategy** | Proprietary + BYOK + multi-provider (OpenAI, Anthropic, Google, Bedrock, custom) | Native model first (Kimi, Qwen, DeepSeek) + OpenAI-compatible gateways |
| **UI/UX Philosophy** | TUI + Desktop + Web + IDE extensions (full spectrum) | TUI-first, Web UI experimental (Kimi, Pi), CLI-centric |
| **Maturity Indicators** | Stable releases, SLAs, security audits, marketplace governance | Nightly-only, pre-1.0, stop-ship bugs, rapid PR turnover |
| **Key Differentiators** | **Claude Code**: Safety classifier integration, VS Code depth<br>**Codex**: Computer Use, voice parity, MCP scale<br>**Copilot CLI**: GitHub ecosystem, BYOK maturity<br>**OpenCode**: Unified marketplace, privacy-first, TUI virtualization | **Gemini CLI**: Auto Memory, AST-aware tooling, eval infra<br>**Qwen Code**: `/review` depth, daemon architecture, air-gapped support<br>**Pi**: Server/CLI composition, switchable renderers, video gen<br>**Kimi Code**: Memory system vision, OmniRoute gateway<br>**DeepSeek TUI**: Operate mode goals, Runtime API parity sprint |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Maturing** | **OpenCode**, **Qwen Code**, **Gemini CLI** | Regular releases (stable + nightly), high PR throughput, 46 issues closed/day (OpenCode), enterprise features (daemon, review, eval infra), active feature PRs |
| **High Momentum / Platform-Grade** | **OpenAI Codex**, **GitHub Copilot CLI**, **Claude Code** | Large issue volumes, dedicated platform teams, but **Claude Code** shows stagnation (no feature PRs, safety crisis), **Codex** has Windows/leak debt, **Copilot CLI** has session corruption |
| **Rapid Iteration / Pre-1.0** | **Pi**, **Kimi Code**, **DeepSeek TUI** | Daily PR batches (10+), community contributions integrated (Nix, DevContainer), but stop-ship bugs (TUI launch, compaction), no stable releases |
| **Low/No Activity** | **Grok Build** | No 24h activity |

**Community Health Signals:**
- **OpenCode** leads in closure rate and governance (privacy issue 58 👍, unified marketplace PR).
- **Claude Code** has highest frustration concentration (safety classifier, 3 issues filed today, 197 👍 on UX issue).
- **Pi** and **DeepSeek TUI** show strong community contribution integration (cherry-picked PRs with authorship preserved).
- **Qwen Code** uniquely invests in **verification infrastructure** (falsify-not-verify, drive-based review, autofix E2E proofs).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Session storage must evolve beyond JSONL** | Copilot CLI (V8 string limit), Pi (subagent transcript bloat), Codex (thread metadata unbounded), Claude Code (transcript corruption) | **Adopt structured storage (SQLite, binary logs) with bounded retention** — critical for long-running agents. |
| **Safety classifiers are becoming adoption blockers** | Claude Code: 3 issues in 24h on Fable 5/Opus 5 false positives, silent downgrade, no fallback | **Demand transparency APIs (flagged content, reason, override) and configurable guardrails** before enterprise rollout. |
| **MCP is the de facto tool protocol — but scaling hurts** | Codex (2K catalog limit), Copilot CLI (lazy-loading 14 👍), OpenCode (unified marketplace), Gemini CLI (128 tool limit) | **Invest in MCP gateway/proxy layer** for connection pooling, lazy-loading, and namespace isolation. |
| **Windows/WSL2/macOS ARM64 are tier-1 platforms** | Every major tool has platform-specific regressions (Bash, OneDrive, MSIX, screenshot, CPU, installer) | **CI must include all three platforms**; native binaries > cross-compiled. |
| **Subagent orchestration is the new "multi-file edit"** | All tools building: trajectory sharing, settings propagation, model routing, completion gates, receipts | **Design for observable, debuggable subagent hierarchies** — not just fire-and-forget. |
| **Daemon/server architectures winning for team/enterprise** | Qwen Code (`qwen serve`), Pi (`PiServer`), OpenCode (unified marketplace runtime), Codex (app-server) | **Evaluate daemon resource bounds, auth, and multi-tenancy** before adopting for shared infrastructure. |
| **Verification > Generation** | Qwen Code (falsify-not-verify, drive-based review), Gemini CLI (component evals, AST-aware), OpenCode (debug prompt) | **Shift investment from "write code" to "verify code"** — review lenses, test-plan validation, deterministic E2E proofs. |
| **BYOK is graduating from fallback to first-class** | Copilot CLI (multi-model 19 👍, per-agent reasoning 16 👍), Codex (custom providers 17 👍), OpenCode (subagent model routing) | **Build model-agnostic orchestration layer** with per-agent cost/quality controls. |

---

## Bottom Line for Decision-Makers

| If You Need... | Best Fit Today | Watch List |
|----------------|----------------|------------|
| **Enterprise stability, IDE depth, safety integration** | **Claude Code** (resolve safety classifier first) | OpenCode (privacy-first, marketplace) |
| **Computer Use, voice, massive MCP scale** | **OpenAI Codex** (fix Windows/leaks first) | Pi (server/CLI composition) |
| **GitHub ecosystem, BYOK maturity, team workflows** | **GitHub Copilot CLI** (fix session corruption first) | OpenCode |
| **Cutting-edge verification, daemon hardening, air-gapped** | **Qwen Code** | Gemini CLI (Auto Memory, eval infra) |
| **Novel memory/agent workflows, video, experimental UX** | **Pi**, **Kimi Code**, **DeepSeek TUI** | All pre-1.0 — pilot only |

**The ecosystem is consolidating around a common substrate: MCP + subagents + daemon + verification.** Tools that solve **session durability**, **platform reliability**, and **safety transparency** will win enterprise adoption in H2 2026.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-02)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[skill-creator toolchain fixes](https://github.com/anthropics/skills/pull/1298)** (PR #1298, #1099, #1050, #1323, #1261) | Core skill-authoring pipeline: `run_eval.py`, `run_loop.py`, `improve_description.py` — automated description optimization & trigger evaluation | **5+ related PRs + 3 high-comment issues** (#556, #1169, #1061). Critical bug: `run_eval.py` reports 0% recall on all queries, breaking the optimization loop. Windows subprocess/encoding failures block non-Unix contributors. | 🔴 Open (active) |
| 2 | **[document-typography](https://github.com/anthropics/skills/pull/514)** (PR #514) | Typographic QC for AI-generated docs: prevents orphans/widows, fixes numbering misalignment | 9-day discussion; addresses universal pain point — every document Claude generates suffers these issues. No user-facing config needed. | 🔴 Open |
| 3 | **[self-audit](https://github.com/anthropics/skills/pull/1367)** (PR #1367) | Pre-delivery quality gate: mechanical file verification → 4-dimension reasoning audit (correctness, completeness, clarity, safety) | Universal, stack-agnostic; prioritizes damage-severity. Complements skill-quality-analyzer (#83). | 🔴 Open |
| 4 | **[color-expert](https://github.com/anthropics/skills/pull/1302)** (PR #1302) | Comprehensive color knowledge: naming systems (ISCC-NBS, Munsell, XKCD, RAL…), color spaces, OKLCH/OKLAB/CAM16 guidance, accessibility | 41-day active discussion; fills gap for design/frontend tasks requiring precise color reasoning. | 🔴 Open |
| 5 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (PR #723) | Full testing stack: Testing Trophy, AAA pattern, React Testing Library, contract testing, property-based, mutation, E2E, CI integration | 30-day discussion; addresses repeated community requests for standardized testing guidance. | 🔴 Open |
| 6 | **[ODT skill](https://github.com/anthropics/skills/pull/486)** (PR #486) | Create/fill/read/convert OpenDocument (.odt, .ods) via pyexcel-ods3 + LibreOffice headless; template filling, HTML round-trip | 135-day discussion; only open-standard document skill. Complements existing docx/pdf skills. | 🔴 Open |
| 7 | **[plan-file-hygiene](https://github.com/anthropics/skills/pull/1479)** (PR #1479) | Lifecycle management for planning artifacts (SPEC.md, TODO.md, etc.): creation, update, archival, cleanup | Addresses #1417 (planning artifact accumulation). 2-day rapid iteration; community-validated problem framing. | 🔴 Open |
| 8 | **[pyxel](https://github.com/anthropics/skills/pull/525)** (PR #525) | Retro/pixel-art/8-bit game development via pyxel-mcp MCP server: write → run_and_capture → inspect → iterate loop | 132-day discussion; unique creative-coding niche. Author is Pyxel creator. | 🔴 Open |

> **Note:** PR comment counts are not exposed in the data; ranking combines PR recency, update frequency, issue cross-references, and topic multiplicity.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Core Ask |
|-------|-------------------|----------|
| **Skill distribution trust & security** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍) — community skills masquerading as official `anthropic/` namespace | Namespace isolation, verification badges, install-time trust signals |
| **Organizational skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍) — manual .skill file sharing via Slack/Teams | Org-wide skill library, one-click install, version sync |
| **Skill authoring tooling reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061) — `run_eval` 0% recall, Windows failures | Fix trigger detection, cross-platform subprocess, encoding |
| **Context/memory management** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 💬) — `compact-memory` symbolic notation; [#1479](https://github.com/anthropics/skills/pull/1479) — plan file hygiene | Compress agent state, lifecycle for planning artifacts |
| **Platform integration gaps** | [#29](https://github.com/anthropics/skills/issues/29) (Bedrock), [#16](https://github.com/anthropics/skills/issues/16) (MCP exposure), [#1487](https://github.com/anthropics/skills/issues/1487) (claude-api 156k token injection) | First-class Bedrock support, Skills-as-MCP, lazy-loading for bundled skills |
| **Governance & safety meta-skills** | [#412](https://github.com/anthropics/skills/issues/412) (agent-governance, closed), [#1385](https://github.com/anthropics/skills/issues/1385) (Reasoning Quality Gate Pipeline) | Policy enforcement, threat detection, multi-gate quality pipelines |
| **Document/interop completeness** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) — duplicate skills from document-skills + example-skills plugins | Deduplication, clear plugin boundaries |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Directly addresses tracked issue #1417; 2-day turnaround; problem framed by multiple community members |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Universal applicability; builds on skill-quality-analyzer (#83); 4-day active iteration |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | 41-day discussion with no blocking concerns; fills design/frontend gap; self-contained |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive scope; aligns with repeated "testing guidance" requests; 30-day discussion |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Universal value (every generated doc); no config needed; 9-day focused discussion |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator eval fixes** | Blocks all skill authors; 5+ PRs converging; 3 high-profile issues tracking it |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *reliable skill-authoring tooling* (fixing the broken `run_eval`/`run_loop` pipeline) and *trustworthy skill distribution* (namespace security, org sharing) — without these foundations, even high-quality domain skills cannot be confidently created, evaluated, or adopted at scale.**

---

# Claude Code Community Digest — 2026-08-02

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows a surge of **safety-classifier false positives** on Fable 5/Opus 5 blocking legitimate sysadmin and OS-development work, with multiple reports of silent model downgrades and no fallback path. A **Windows Bash-tool regression in v2.1.220** causes trivial commands to fail with "unexpected EOF" errors, while the embedded `ugrep` wrapper continues to trigger OOM kills on certain regex patterns (WSL/Linux). The top community ask remains a VS Code setting to disable auto-attach of open files (#24726, 197 👍).

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#24726](https://github.com/anthropics/claude-code/issues/24726) | **VS Code: add setting to disable auto-attach of open file/selection** | Long-standing UX friction; users want control over context injection. | 64 comments, **197 👍** (highest in tracker) |
| [#54394](https://github.com/anthropics/claude-code/issues/54394) | **v2.1.117 embedded ugrep wrapper amplifies regex backtracking → V8 heap OOM (8 GB) on WSL2** | Native `grep` replacement routes through `claude.exe`; pathological regexes freeze host. | 19 comments, perf:memory, platform:wsl |
| [#83233](https://github.com/anthropics/claude-code/issues/83233) | **Fable 5 guardrails false-positive on routine sysadmin → silent downgrade to Opus 5, no indication of flagged content** | Safety filter blocks legitimate automation; model switches without consent or explanation. | Filed today, 2 comments, zero 👍 yet but high severity |
| [#83245](https://github.com/anthropics/claude-code/issues/83245) | **Safety classifier false-positives block legitimate automation on Fable 5/Opus 5, no fallback** | Same theme as #83233; turns end with AUP error, no answer, no auto-fallback to another model. | Filed today |
| [#83244](https://github.com/anthropics/claude-code/issues/83244) | **API Safety Filter blocking legitimate OS development tasks** | Developer reports Fable 5 safeguards interrupting experimental OS work. | Filed today |
| [#83243](https://github.com/anthropics/claude-code/issues/83243) | **Bash tool fails on trivial commands with 'unexpected EOF...line 86' on Windows (v2.1.220)** | Regression in latest version; every Bash invocation fails, even simple commands. | Filed today, platform:windows |
| [#82230](https://github.com/anthropics/claude-code/issues/82230) | **Embedded ugrep allocates ~29 GB compiling `.{0,N}(a\|b\|c).{0,M}`, OOM-kills host** | Bounded quantifiers on both sides of alternation trigger massive allocation in embedded ugrep. | 1 comment, 1 👍, perf:memory |
| [#82466](https://github.com/anthropics/claude-code/issues/82466) | **Default model in settings.json ("claude-fable-5[1m]") not honored at session start; `/model` unreliable** | Config ignored; sessions launch on wrong model, in-session switch flaky. | 6 comments, 1 👍 |
| [#80279](https://github.com/anthropics/claude-code/issues/80279) | **Regression 2.1.217: "Last Activity" filter missing when grouping sessions by Project** | Filter disappears only in Project grouping mode; still works in flat list. | 10 comments, 13 👍 |
| [#73638](https://github.com/anthropics/claude-code/issues/73638) | **Session rename mid-server-tool-call injects synthetic user turn → permanently corrupts transcript (400 on every future prompt)** | Renaming during `server_tool_use` breaks transcript structure; unrecoverable without new session. | 8 comments, area:core |

---

## Key PR Progress
*Only 3 PRs updated in the last 24 hours, all **closed** (internal maintenance):*

| # | PR | Summary |
|---|----|---------|
| [#77442](https://github.com/anthropics/claude-code/pull/77442) | **fix: repair issue-automation telemetry and dead `days_back` input** | Corrects Statsig event timestamps (were stuck at 1970) and fixes a dead workflow input in issue-automation. |
| [#77439](https://github.com/anthropics/claude-code/pull/77439) | **docs(plugins): sync security-guidance listing with v2.0.0 plugin manifest** | Updates marketplace listing and docs to reflect rewritten v2.0.0 security-guidance plugin. |
| [#77443](https://github.com/anthropics/claude-code/pull/77443) | **fix(ralph-wiggum): make stop hook's jq error handling reachable under `set -e`** | Ensures `jq` failure branch executes despite `set -euo pipefail` in stop-hook.sh. |

*No open feature PRs or critical bug fixes merged today.*

---

## Feature Request Trends (from all Issues)

1. **Model & Safety Control**
   - Per-session/default model selection that actually persists (#82466, #83242)
   - Transparent safety-classifier decisions: what was flagged, why, and an appeal/override path (#83233, #83245, #83244)
   - Automatic fallback to another model when guardrails trigger (#83245)

2. **VS Code Integration Polish**
   - Disable auto-attach of open file/selection (#24726 — top voted)
   - Extension stability in incognito/private modes (#83219)
   - Idle CPU spin in native child processes (#75630)

3. **Session & Workspace Management**
   - Configurable worktree directory (sibling dir support) (#27282, 55 👍)
   - Restore "Last Activity" filter in Project grouping (#80279)
   - Session rename safety during tool calls (#73638)

4. **Accessibility & Alternate Interfaces**
   - TTS readback + voice mode for Remote Control (#42700, 22 👍)
   - Read-only usage scope for `claude setup-token` (#81015)

5. **Platform-Specific Reliability**
   - Windows Bash tool stability (#83243, #81306)
   - WSL2 memory safety with embedded ugrep (#54394, #82230)
   - IPv6-only host connectivity in sandbox (#83240)

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Safety classifier opacity & over-blocking** | 3+ issues filed today alone (#83233, #83244, #83245) — legitimate sysadmin/OS-dev work flagged, silent downgrade, no fallback, no explanation. |
| **Embedded `ugrep` memory explosions** | Two distinct OOM reports (#54394 WSL2, #82230 29 GB alloc) on regex patterns that are valid in standard grep. |
| **Windows Bash tool regressions** | v2.1.220 breaks all Bash invocations (#83243); MSIX package corruption on crash (#81306). |
| **Model config ignored / unreliable switching** | `settings.json` model not honored (#82466); Fable 5 incorrectly consumes usage credits on Max plan (#83242). |
| **Transcript/session corruption from UI actions** | Renaming session mid-tool-call permanently breaks transcript (#73638). |
| **Missing diagnostics** | `/status` doesn't surface `apiKeyHelper` errors it references (#83207); stalls before response headers have no short timeout (#83238). |
| **Cost-tracking doc drift** | `total_cost_usd` semantics differ between `--output-format json` vs `stream-json` (#83239). |

---

*Digest generated from GitHub data (anthropics/claude-code) as of 2026-08-02 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-02

## 1. Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows intense activity around **Windows stability** (OneDrive connectivity, screenshot failures, MSIX packaging gaps), **memory/CPU leaks** in the app-server (MCP process trees, unbounded thread metadata), and **session integrity** (context compaction destroying work, side-chat history loss). Meanwhile, the PR queue reveals a sprint on **TUI polish** (two-stroke chords, terminal-size caching), **MCP scaling** (catalog limits doubled, lifecycle cleanup), and **plugin infrastructure** (portable plugins, bundle size increases).

## 2. Releases
*None in the last 24 hours.*

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#24510](https://github.com/openai/codex/issues/24510) | **Desktop high CPU from unbounded thread metadata** | App-server spins on large local history; affects all long-term users. | 28 comments, open since May |
| [#35420](https://github.com/openai/codex/issues/35420) | **Windows/OneDrive workspace stream disconnects** | Breaks Codex Web on Windows when OneDrive is degraded; core productivity blocker. | 23 comments, recent regression |
| [#25178](https://github.com/openai/codex/issues/25178) | **Win10 22H2 Computer Use screenshot fails** | `SetIsBorderRequired` unsupported on older Win10; blocks agent vision. | 19 comments, 11 👍 |
| [#14630](https://github.com/openai/codex/issues/14630) | **Voice transcription for TUI** | High-demand parity feature; CLI dictation model is inferior to app. | 19 comments, **49 👍** |
| [#17574](https://github.com/openai/codex/issues/17574) | **Subagents leak MCP stdio process trees** | Linear memory/process growth on Linux; requires app restart. | 14 comments |
| [#31033](https://github.com/openai/codex/issues/31033) | **Context auto-compaction ruins sessions** | Labeled **CRITICAL**; users lose work mid-session after resets. | 9 comments |
| [#27716](https://github.com/openai/codex/issues/27716) | **Closed side chats unrecoverable** | History loss with no UI to reopen; breaks workflow continuity. | 7 comments, 11 👍 |
| [#28103](https://github.com/openai/codex/issues/28103) | **MSIX build missing Linux `codex` binary** | "Run agent in WSL" broken on Store install; packaging regression. | 7 comments, **23 👍** |
| [#29156](https://github.com/openai/codex/issues/29156) | **Desktop custom providers unusable** | Model picker & chat history break custom provider workflows. | 5 comments, 17 👍 |
| [#36528](https://github.com/openai/codex/issues/36528) | **Prolite weekly usage 0%→97% in one day** | Metering anomaly; possible billing/reset logic bug. | 2 comments, **URGENT** label |

## 4. Key PR Progress (Last 24h)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#36544](https://github.com/openai/codex/pull/36544) | Portable Agent Plugins | **Closed** | Schema-declared `plugin.json` roots; supports dotted names/versions; fixes legacy manifest assumptions. |
| [#36534](https://github.com/openai/codex/pull/36534) | MCP catalog limit → 2,048 | **Closed** | Doubles paginated discovery cap (tools, resources, templates) from 1,024. |
| [#30977](https://github.com/openai/codex/pull/30977) | Drop parent MCP events from forked agents | **Closed** | Excludes `McpToolCallBegin/End` from child history; prevents legacy history corruption. |
| [#36511](https://github.com/openai/codex/pull/36511) | Two-stroke TUI key chords | **Closed** | Adds `ctrl-x ctrl-s` style bindings; chord hints & cancellation in keymap. |
| [#36507](https://github.com/openai/codex/pull/36507) | Retain tool metadata across prompts | **Closed** | Reattaches `executed_tool_calls` (32 KiB cap, recent-first) to subsequent prompts. |
| [#36485](https://github.com/openai/codex/pull/36485) | Remote plugin bundle limits ↑ | **Closed** | Download 50→100 MiB; extracted 250→512 MiB. |
| [#36482](https://github.com/openai/codex/pull/36482) | Cache terminal size in TUI | **Closed** | Avoids `ioctl` per redraw; refreshes on resize/resume/exec. |
| [#36440](https://github.com/openai/codex/pull/36440) | Extract exec-server dispatcher | **Closed** | Moves JSON-RPC handling to `RequestDispatcher`; cleaner connection loop. |
| [#31817](https://github.com/openai/codex/pull/31817) | Update models.json | **Open** | Automated model catalog refresh. |
| [#31471](https://github.com/openai/codex/pull/31471) | ConnectorRuntimeManager cache extraction | **Open** | First of 4-part "faster-connectors" refactor; scopes cache by account/workspace. |

## 5. Feature Request Trends
1. **TUI parity with Desktop App** — Voice transcription (#14630, 49 👍), two-stroke chords (#36511), model picker presets (#32665).
2. **Session durability & recovery** — Compact-not-clear context (#18490), side-chat history restore (#27716), stop auto-compaction (#31033).
3. **Custom model/provider support** — Desktop model picker breaks custom providers (#29156); CLI/TUI already works.
4. **MCP ecosystem scaling** — Catalog limits (#36534), process leak fixes (#17574, #25015), lifecycle hygiene (#30977).
5. **Windows-first reliability** — OneDrive resilience (#35420), Win10 compat (#25178), MSIX packaging (#28103), crash diagnostics (#31989).

## 6. Developer Pain Points (Recurring Themes)
- **Memory/CPU leaks in long-running app-server** — Thread metadata unbounded (#24510), MCP process trees accumulate (#17574, #25015), ambient suggestions prefetch huge rollouts (#35799).
- **Session state fragility** — Auto-compaction destroys context (#31033), Full Access reverts to per-action approval on restart (#34453), stale `updatedAt` in thread summaries (#28870).
- **Windows-specific regressions** — OneDrive breaks streams (#35420), Win10 22H2 screenshot API missing (#25178), MSIX missing WSL binary (#28103), Store updates kill sessions (#31989), installer broken on PS 5.1 (#19559).
- **MCP/Subagent observability** — TUI false "startup interrupted" alerts (#36486), VS Code panel doesn't track native subagents (#33859), forked agents inherit parent MCP noise (#30977).
- **Metering opacity** — Sudden usage spikes (#36528), unclear reset windows, no transparency on token accounting.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-02

## 1. Today's Highlights
The nightly release pipeline continues with **v0.55.0-nightly.20260802**, while the issue backlog reveals deep focus on **subagent reliability** (turn-limit handling, silent hangs, settings propagation) and **Auto Memory** quality (indefinite retries, redaction safety, invalid patch quarantine). A cluster of PRs targets **core stability**: symlink-safe project resolution, massive-write corruption mitigation, and terminal resize flicker elimination.

## 2. Releases
| Version | Type | Key Notes |
|---|---|---|
| `v0.55.0-nightly.20260802.gf47d6c6f7` | Nightly | Incremental nightly build; full changelog [here](https://github.com/google-gemini/gemini-cli/compare/v0.55.0-nightly.20260801.gf47d6c6f7...v0.55.0-nightly.20260802.gf47d6c6f7). No standalone release notes published. |

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Title | Why It Matters | Community Signal |
|---|---|---|---|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after `MAX_TURNS` reported as `GOAL` success | Masks real failures; breaks trust in subagent delegation. | 12 comments, 2 👍, `priority/p1`, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Blocks all non-trivial work; workaround is disabling subagents. | 8 comments, 8 👍, `priority/p1` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command stuck at “Waiting input” after completion | Frequent false-positive hangs on trivial commands. | 4 comments, 3 👍, `priority/p1`, `effort/medium` |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations (EPIC) | 76 behavioral evals across 6 models; critical for regression prevention. | 7 comments, `priority/p1`, `aiq/eval_infra` |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Wastes quota & compute; no backoff or quarantine. | 5 comments, `priority/p2` |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction & reduce Auto Memory logging | Secrets enter model context before redaction; logging exposure. | 4 comments, `priority/p2`, `area/security` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess AST-aware file reads/search/mapping (EPIC) | Could cut turns & token noise via precise method-bound reads. | 7 comments, 1 👍, `priority/p2`, `effort/large` |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error with >128 tools | Tool explosion breaks agent; needs smarter scoping. | 3 comments, `priority/p2` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Platform gap for Linux/Wayland users. | 4 comments, 1 👍, `agent/browser`, `priority/p1` |
| [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | Surface/quarantine invalid Auto Memory inbox patches | Silent skips hide malformed/escaped patches from users. | 3 comments, `priority/p2` |

## 4. Key PR Progress (Top 10 by Significance)

| # | Title | Area | Status | Impact |
|---|---|---|---|---|
| [#28438](https://github.com/google-gemini/gemini-cli/pull/28438) | Trim tool names before registry lookup | Core/Tools | **Closed** | Fixes whitespace-padded tool-name resolution; includes regression test. |
| [#28535](https://github.com/google-gemini/gemini-cli/pull/28535) | Use `resolveRipgrepPath` in perf test setup | Core/Perf | Open (`p1`) | Unbreaks perf tests after `canUseRipgrep()` removal. |
| [#28534](https://github.com/google-gemini/gemini-cli/pull/28534) | Retry `staging-tmp` dist-tag removal after npm publish | CI/Release | Open (`p1`) | Fixes nightly publish race condition for large packages. |
| [#27351](https://github.com/google-gemini/gemini-cli/pull/27351) | Serialize conflicting parallel mutator tools | Core/Scheduler | Open (`p2`) | Prevents concurrent edits to same file (fixes #27285). |
| [#27350](https://github.com/google-gemini/gemini-cli/pull/27350) | Resolve symlinks when normalizing project paths | Core/FS | Open (`p3`) | Unifies symlinked project identities; avoids duplicate session stores. |
| [#27320](https://github.com/google-gemini/gemini-cli/pull/27320) | Mitigate data corruption on massive `write_file` blocks | Core/Tools | Open (`p1`) | Handles 6k+ char literals/base64 without truncation (fixes #27213). |
| [#27317](https://github.com/google-gemini/gemini-cli/pull/27317) | Defensively check for dirs in session/checkpoint scans | Core/Storage | Open (`p1`) | Prevents `EISDIR` crashes on pattern-matched directories (fixes #27135). |
| [#27310](https://github.com/google-gemini/gemini-cli/pull/27310) | Subagent trajectory infrastructure (Stage 1) | Agent/Infra | Open | Foundational work for `/chat share`, bug reports, eval visibility. |
| [#27091](https://github.com/google-gemini/gemini-cli/pull/27091) | Click approval-mode indicator to cycle mode | UI/UX | Open (`p2`) | Direct manipulation for approval toggling (addresses #27035). |
| [#27131](https://github.com/google-gemini/gemini-cli/pull/27131) | Route personal OAuth users to stable models for auto aliases | Core/Auth | Open (`p1`) | Prevents 404/400 on `auto-gemini-3` with `oauth-personal`. |

## 5. Feature Request Trends
1. **Subagent Observability & Control** — Trajectory sharing (#22598), settings propagation (#22267), permission gating (#22093), and self-awareness (#21432) dominate.
2. **AST/Structural Code Intelligence** — Two EPICs (#22745, #22746) push for method-level reads, symbol search, and codebase mapping to reduce turns.
3. **Auto Memory Hardening** — Redaction-before-context (#26525), retry backoff/quarantine (#26522, #26523), and quality filtering (#26516) form a cohesive hardening track.
4. **Sandbox/Container UX** — Seatbelt profile visibility (#27237), rootless hostname control (#27235), and browser-agent lock recovery (#22232).
5. **Terminal Rendering Performance** — Virtual list optimization (#27070), resize flicker elimination (#21924), external-editor corruption fix (#24935).

## 6. Developer Pain Points (Recurring Frustrations)
- **Silent Subagent Failures** — Hangs (#21409), false-success reporting (#22323), and ignored settings (#22267) erode delegation trust.
- **Shell/Tool Execution Flakiness** — “Waiting input” ghosts (#25166), interactive prompts stalling Vite (#22465), and destructive git commands (#22672).
- **Tool/Context Explosion** — 128+ tool limit (#24246), tmp-script sprawl (#23571), and massive-write corruption (#27320).
- **Platform Gaps** — Wayland browser support (#21983), symlink agent discovery (#20079), macOS sandbox visibility (#27237).
- **Memory System Opacity** — Indefinite retries (#26522), secret leakage risk (#26525), and invisible invalid patches (#26523).

---

*Generated from github.com/google-gemini/gemini-cli activity (2026-08-02 UTC). All links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-02

## Today's Highlights
The CLI shipped v1.0.78-2 with a UX polish to the split-view sidebar close confirmation. Meanwhile, the issue tracker shows growing pressure around **BYOK multi-model support** (19 👍), **per-agent reasoning effort** (16 👍), and **MCP server lazy-loading** (14 👍). A critical session-corruption bug (#4325) where `events.jsonl` exceeds V8's string limit makes long-running sessions permanently unloadable.

---

## Releases
### v1.0.78-2
- **Improved**: Split-view sidebar close confirmation now reads `x again to close` (or `x again to exit CLI` on last session) instead of `x close`, making the double-press requirement explicit.
- **Fixed**: Extension slash commands now run their handler exactly once per invocation when several extensions are installed.

[Release notes](https://github.com/github/copilot-cli/releases/tag/1.0.78-2)

---

## Hot Issues
| # | Title | Area | 👍 | Why It Matters |
|---|-------|------|----|----------------|
| [#3282](https://github.com/github/copilot-cli/issues/3282) | **Add multiple BYOK model capability** | models, configuration | 19 | Users cannot switch BYOK models inside the TUI; must restart with new env var. Blocks multi-provider workflows. |
| [#2904](https://github.com/github/copilot-cli/issues/2904) | **Custom Agent YAML Frontmatter Should Support Reasoning Effort** | agents, models | 16 | Reasoning effort is global-only today; per-agent control needed for cost/quality tuning in agent chains. |
| [#2901](https://github.com/github/copilot-cli/issues/2901) | **Lazy-load MCP servers on first tool invocation** | mcp | 14 | All MCP servers connect at startup, adding seconds per server. Critical for users with 10+ configured servers. |
| [#4325](https://github.com/github/copilot-cli/issues/4325) | **Session unloadable once events.jsonl exceeds V8 max string length** | sessions | 1 | Silent data corruption: session appears in `/resume` but fails to load. Affects any long-running autopilot session. |
| [#4305](https://github.com/github/copilot-cli/issues/4305) | **Failed to convert JavaScript value 'Undefined' into rust type 'String'** | — | 5 | Regression in 1.0.76; breaks every command. **Closed** (likely fixed in 1.0.78-2). |
| [#4327](https://github.com/github/copilot-cli/issues/4327) | **BYOK Responses streaming drops apply_patch input before execution** | models, tools | 0 | Streamed BYOK with `wireApi: "responses"` loses `apply_patch` args. Blocks patch workflows on OpenAI-compatible providers. |
| [#4306](https://github.com/github/copilot-cli/issues/4306) | **Subtasks freeze and stop responding** | agents, tools | 1 | Autopilot loops (speckit-implement → converge) deadlock mid-session. No recovery except kill. |
| [#4299](https://github.com/github/copilot-cli/issues/4299) | **Increasing typing latency over long sessions** | sessions, input-keyboard | 1 | Latency grows unbounded in background-agent sessions; eventually unusable. Suspected event-log bloat. |
| [#4323](https://github.com/github/copilot-cli/issues/4323) | **Comments in .mcp.json not supported, skipping all servers** | configuration, mcp | 0 | Strict JSON parsing rejects `//` or `/* */` comments, silently disabling every MCP server in repo config. |
| [#4317](https://github.com/github/copilot-cli/issues/4317) | **Installing specific version always installs latest** | installation | 0 | Version pinning broken in Docker sandbox; `v1.0.75` installs `latest`. Blocks rollbacks. |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **BYOK maturity** — Multi-model switching (#3282), per-agent reasoning effort (#2904), and accurate usage reporting (#2632) show users treating BYOK as a first-class workflow, not a fallback.
2. **MCP scalability** — Lazy-loading (#2901), comment support (#4323), and nested-agent tool inheritance (#4320) indicate teams are building deep MCP topologies.
3. **Session durability** — Fork/plan-mode corruption (#4324, #4319), event-log limits (#4325), and latency decay (#4299) point to a need for structured session storage (e.g., SQLite vs. JSONL).
4. **Autopilot reliability** — Task-completion override (#4318), resume-state loss (#4329), and subtask deadlocks (#4306) reveal trust gaps in long-horizon autonomy.

---

## Developer Pain Points
- **Configuration fragility**: Strict JSON in `.mcp.json` (#4323), broken version pinning (#4317), and env-var-only BYOK switching (#3282) make reproducible setups hard.
- **Platform quirks**: WSL2 `Ctrl+H` misinterpretation (#4328), Windows git-symlink handling (#2286), and WT_SESSION leakage show cross-shell rough edges.
- **Observability gaps**: Silent session corruption (#4325), no reasoning-effort visibility per agent (#2904), and misleading BYOK premium messaging (#2632) hinder debugging.
- **Input regression**: Typing latency (#4299) and keyboard-binding bugs (#4328) degrade the core REPL experience during extended use.

---

*Digest generated from github/copilot-cli data as of 2026-08-02 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-02

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The project is actively addressing a cluster of Web UI stability bugs (infinite spinner on session switch, legacy-console crash on startup banner) and a correctness fix for `StrReplaceFile` chained-edit counting. A long-standing feature request for a persistent **Memory System** (#1283) continues to gather community interest with 11 comments.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System – Persistent context across sessions** | High-impact enhancement: enables cross-session learning, project patterns, and user preferences. Core to “agentic” workflow. | 11 comments, created Feb 2026, still open — strong sustained demand. |
| [#2526](https://github.com/MoonshotAI/kimi-cli/issues/2526) | **StrReplaceFile undercounts replacements for chained edits** | Correctness bug: sequential edits that depend on prior edits’ output are miscounted, causing confusing success messages. | 1 comment; PR [#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554) already fixing it. |
| [#2576](https://github.com/MoonshotAI/kimi-cli/issues/2576) | **Document OmniRoute OpenAI-compatible provider setup** | Docs gap: users misconfigure base URL, model, env vars for OmniRoute gateway. Blocks adoption of popular proxy. | 0 comments — fresh issue, but high practical value for multi-provider users. |
| [#2574](https://github.com/MoonshotAI/kimi-cli/issues/2574) | **Kimi Code stuck on “Processing” (Unity MCP + VS Code)** | Reliability blocker: CLI hangs after successful MCP setup, no response. Affects VS Code + Unity workflow. | 0 comments — needs reproduction details; likely session/transport issue. |
| [#2573](https://github.com/MoonshotAI/kimi-cli/issues/2573) | **Web UI infinite “Connecting to session…” spinner on session switch** | UX regression in Technical Preview: session switching broken on Chrome/macOS. Blocks Web UI evaluation. | 0 comments — fresh, but visible to all Web UI testers. |

---

## 4. Key PR Progress

| # | Title | Type | Status | Impact |
|---|-------|------|--------|--------|
| [#2577](https://github.com/MoonshotAI/kimi-cli/pull/2577) | `fix(web,vis): do not crash printing startup banner on legacy console codecs` | Bugfix | Open | Prevents crash on GBK/legacy consoles (Windows CN) when banner contains `➜` (U+279C). Resolves #2532. |
| [#2572](https://github.com/MoonshotAI/kimi-cli/pull/2572) | `fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments` | Bugfix | Open | Fixes Pydantic validation failures for providers that double-encode nested arrays/objects (e.g., Moonshot API). |
| [#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554) | `fix(tools): count StrReplaceFile replacements against running content` | Bugfix | Open | Corrects replacement counting for chained edits; directly addresses #2526. |
| [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) | `fix(shell): stop blocking until timeout when detached child holds pipes` | Bugfix | Open | Resolves hang on `cmd & echo done` patterns; foreground shell no longer waits for EOF from detached children. Fixes #2468. |
| [#2575](https://github.com/MoonshotAI/kimi-cli/pull/2575) | `fix(hooks): fire PostToolUse hooks through fire_and_forget_trigger` | Bugfix | Open | Ensures `PostToolUse`/`PostToolUseFailure` hooks aren’t GC’d prematurely; uses managed task queue. Resolves #2564. |

---

## 5. Feature Request Trends

1. **Persistent Memory / Context** (#1283) — Top community ask: automatic + manual memory across sessions, project-scoped, with user control.
2. **Multi-Provider / Gateway Ergonomics** (#2576) — Demand for turnkey docs and config for OpenAI-compatible gateways (OmniRoute, LiteLLM, etc.).
3. **Web UI Maturity** (#2573) — Session management, connection stability, and parity with CLI experience.
4. **MCP / External Tool Integration** (#2574) — Reliable handoff between CLI, VS Code, and MCP servers (Unity, etc.).
5. **Hooks & Extensibility** (#2575, #2564) — Robust, fire-and-forget hook lifecycle for post-tool automation.

---

## 6. Developer Pain Points

| Pain Point | Frequency / Evidence | Typical Workaround |
|------------|---------------------|-------------------|
| **No cross-session memory** | #1283 (11 comments, 5+ months open) | Manual copy-paste, external notes |
| **StrReplaceFile miscounts chained edits** | #2526 + PR #2554 | Avoid chained edits; single large replace |
| **Web UI session switching broken** | #2573 (fresh, but blocks preview) | Restart `kimi web`; use CLI only |
| **Double-encoded JSON from providers** | #2572 (affects Moonshot, others) | Pre-process args; avoid complex nested params |
| **Shell hangs on backgrounded commands** | #2468 → PR #2530 | Use `nohup`/`disown` or tmux |
| **Hook tasks silently dropped** | #2564 → PR #2575 | Synchronous hooks; external queue |
| **Legacy console crashes on Unicode banner** | #2532 → PR #2577 | Set `PYTHONIOENCODING=utf-8` or use modern terminal |

---

*Generated from GitHub data (MoonshotAI/kimi-cli) as of 2026-08-02 00:00 UTC.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-02

---

## 1. Today's Highlights

OpenCode shipped **v1.18.11** with critical bugfixes for MCP SSE reconnection loops and provider model config handling. The community closed 46 issues in 24 hours, including long-standing TUI rendering bugs, subagent model misrouting with GitHub Copilot, and extended thinking signature loss. A major **unified marketplace PR (#40108)** opened, proposing a shared package runtime across Desktop, Web, TUI, CLI, and API clients.

---

## 2. Releases

### v1.18.11
**Core Bugfixes**
- Fixed MCP SSE connections stuck in reconnect loops after server errors
- Fixed provider model configs using interleaved reasoning fields (`reasoning_text`, custom field names)

**Desktop Bugfixes**
- External links now open in system browser (truncated in source)

[View Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.11)

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#459 Privacy & Data Collection Clarification](https://github.com/anomalyco/opencode/issues/459) | Highest community interest (58 👍); users demand explicit local-first privacy docs | 16 comments, 58 👍 — **CLOSED** |
| [#22813 Thinking block signature lost with extended thinking](https://github.com/anomalyco/opencode/issues/22813) | Breaks multi-turn conversations with Anthropic extended thinking; root cause in message parsing | 6 comments, 10 👍 — **CLOSED** |
| [#15223 Subagents view in TUI](https://github.com/anomalyco/opencode/issues/15223) | No visibility into spawned subagents during workflows; critical for debugging parallel agents | 5 comments, 10 👍 — **CLOSED** |
| [#9674 `tool_call` tag rendering failure](https://github.com/anomalyco/opencode/issues/9674) | Long conversations corrupt tool call rendering, halting automation; affects Oh My OpenCode users | 19 comments, 8 👍 — **CLOSED** |
| [#24342 Main/Sub-agents freeze indefinitely](https://github.com/anomalyco/opencode/issues/24342) | Random "thinking" freeze with no errors; LLM inference terminates prematurely | 13 comments, 4 👍 — **CLOSED** |
| [#20859 Subagent models ignored with GitHub Copilot](https://github.com/anomalyco/opencode/issues/20859) | All premium requests billed to orchestrator (Claude Opus 4.6) despite subagent model config | 7 comments, 1 👍 — **CLOSED** |
| [#30126 High CPU/Memory on macOS ARM64](https://github.com/anomalyco/opencode/issues/30126) | 100%+ CPU, ~2.5GB RAM on Apple Silicon; blocks adoption on M-series Macs | 5 comments — **CLOSED** |
| [#28844 Desktop renderer hangs on large sessions](https://github.com/anomalyco/opencode/issues/28844) | Permanent unresponsiveness (exit code 132) with many message parts; survives restarts | 3 comments — **CLOSED** |
| [#26217 TUI blank screen with external plugins](https://github.com/anomalyco/opencode/issues/26217) | Non-pure mode fails with `oh-my-opencode`; `setRawMode` errno 9 on macOS | 5 comments — **CLOSED** |
| [#33732 Desktop installer fails on Windows ARM64](https://github.com/anomalyco/opencode/issues/33732) | 7-Zip extraction incompatibility blocks ARM64 Windows installs | 2 comments — **OPEN** |

---

## 4. Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#40108 feat: unified marketplace](https://github.com/anomalyco/opencode/pull/40108) | Shared package model & runtime for skills/agents across Desktop, Web, TUI, CLI, API; closes #28696 | **OPEN** |
| [#40119 feat: native Bedrock Mantle support](https://github.com/anomalyco/opencode/pull/40119) | Adds Amazon Bedrock Mantle Chat/Responses providers with SigV4 auth & regional endpoints | **OPEN** |
| [#40077 feat: wrap native session HTTP](https://github.com/anomalyco/opencode/pull/40077) | Replaces `session.request` hook with `session.http` for full Request→Response plugin contracts | **OPEN** |
| [#39905 feat: system prompt debug command](https://github.com/anomalyco/opencode/pull/39905) | Adds `opencode debug prompt` CLI to inspect constructed system prompts | **OPEN** |
| [#26861 fix: old messages disappearing in long sessions](https://github.com/anomalyco/opencode/pull/26861) | Lazy-scroll loading (50 messages at 5px threshold); virtualized render; scroll preservation | **OPEN** |
| [#36620 fix: merge model.request.headers into SDK options](https://github.com/anomalyco/opencode/pull/36620) | Fixes header merging in `prepareOptions()` for custom provider headers | **OPEN** |
| [#40110 fix: prevent Enter on empty input](https://github.com/anomalyco/opencode/pull/40110) | Empty Enter no longer submits or interrupts; no-op in V1/V2 desktop/web | **CLOSED** |
| [#40115 fix: retry SQLITE_BUSY on parallel todowrite](https://github.com/anomalyco/opencode/pull/40115) | Retries with backoff when subagents call `todowrite` concurrently via `task(background:true)` | **CLOSED** |
| [#35696 fix: enforce grep deny rules by file path](https://github.com/anomalyco/opencode/pull/35696) | Permission check now receives matched file paths, not search regex | **CLOSED** |
| [#34785 feat: RFC 8628 device-flow OAuth for custom gateways](https://github.com/anomalyco/opencode/pull/34785) | Generic device authorization flow for self-hosted/private provider gateways | **CLOSED** |

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **TUI Session Management** | [#30489](https://github.com/anomalyco/opencode/issues/30489) (sidebar session list), [#15223](https://github.com/anomalyco/opencode/issues/15223) (subagents view), [#26625](https://github.com/anomalyco/opencode/issues/26625) (timestamps) | 3+ issues, 15+ comments |
| **Plugin/Skill Discovery** | [#21282](https://github.com/anomalyco/opencode/issues/21282) (skills not loading), [#15033](https://github.com/anomalyco/opencode/issues/15033) (file ref breaks config), [#40109](https://github.com/anomalyco/opencode/pull/40109) (marketplace plugin docs) | 3+ issues/PRs |
| **Model Picker UX** | [#15026](https://github.com/anomalyco/opencode/issues/15026) (collapsible groups), [#34764](https://github.com/anomalyco/opencode/pull/34764) (group search results), [#20859](https://github.com/anomalyco/opencode/issues/20859) (subagent model routing) | 3+ issues/PRs |
| **LSP First-Party Support** | [#12522](https://github.com/anomalyco/opencode/issues/12522) (typescript-go), [#30442](https://github.com/anomalyco/opencode/issues/30442) (clangd/pyright config) | 2 issues, 3+ comments |
| **Conversation Rollback/Versioning** | [#29005](https://github.com/anomalyco/opencode/issues/29005) (revert broken), [#30422](https://github.com/anomalyco/opencode/issues/30422) (non-Git rollback) | 2 issues, 8 comments |
| **Privacy/Compliance Transparency** | [#459](https://github.com/anomalyco/opencode/issues/459) (data collection), [#40120](https://github.com/anomalyco/opencode/pull/40120) (DeepSeek policy) | 1 issue (58 👍), 1 PR |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **TUI Rendering Instability** | 5+ issues (#26217, #26861, #10661, #29196, #26625) | Blank screens, disappearing messages, theme/keyboard protocol failures —

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-02

## Today's Highlights
The Pi ecosystem delivered a wave of reliability fixes targeting provider resilience (Google retry logic, OAuth token handling, catalog refresh timeouts) and session durability (pre-dispatch barriers, server-backed sessions). Architectural work continues on CLI/server mode composition, switchable terminal renderers, and a simplified session storage facade. New provider integrations landed for MiniMax video, Cline/ClinePass, and community demand emerged for Baseten support.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) **Auto-compaction never triggers past 100% context** | Sessions exceed context window until provider rejects request (373k tokens); compaction check only runs after agent turns, not continuously. | 9 comments, 7 👍 — Critical reliability blocker for long-running agents |
| [#7161](https://github.com/earendil-works/pi/issues/7161) **Anthropic path missing `x-client-request-id`** | Proxies/gateways relying on this header for session affinity (e.g., round-robin across Claude accounts) cannot group conversations. | 8 comments, `inprogress` — Active fix in progress |
| [#7020](https://github.com/earendil-works/pi/issues/7020) **Pi stalls after compaction** | Long-running “coordinator” sessions frequently hang post-compaction; transcript continues but agent stops responding. | 7 comments, 2 👍, `inprogress` — High impact for extended sessions |
| [#7321](https://github.com/earendil-works/pi/issues/7321) **Multi-line paste broken on Termux** | Terminals without bracketed paste (Termux, some SSH) submit on each newline instead of inserting block. | 2 comments, 1 👍 — Mobile/edge terminal compatibility gap |
| [#7405](https://github.com/earendil-works/pi/issues/7405) **Baseten provider support** | Request to add Baseten (frontier open models: DeepSeek V4 Pro, Kimi K3, GLM-5.2) as native provider. | 1 comment — Growing demand for day-0 open-model access |
| [#7470](https://github.com/earendil-works/pi/issues/7470) **Google adapters lack retry on 429/5xx** | Transient Vertex/Gemini errors immediately terminate agent turns; no retry at harness level. | Fixed by [#7471](#key-pr-progress) |
| [#7457](https://github.com/earendil-works/pi/issues/7457) **5-min OAuth tokens refresh every request** | Short-lived credentials (`expires_in: 300`) trigger refresh on every call, causing latency and rate-limit risk. | Fixed by [#7456](#key-pr-progress) |
| [#7452](https://github.com/earendil-works/pi/issues/7452) **Subagent transcripts bloat parent session** | Full child-agent transcripts stored in parent tool results → rapid JSONL growth, session hangs. | 1 comment — Storage/performance concern for heavy subagent use |
| [#7447](https://github.com/earendil-works/pi/issues/7447) **Compaction provider/model override** | Request to run summarization on a different (larger/cloud) model than the session model; needed for local/small-model sessions. | 1 comment, revives [#6442](https://github.com/earendil-works/pi/issues/6442) |
| [#7446](https://github.com/earendil-works/pi/issues/7446) **Hard-coded 30s RPC timeout** | `RpcClient.send()` applies 30s timeout to all commands, causing false failures on long operations (e.g., compaction). | 1 comment — Affects embedders and long-running tools |

---

## Key PR Progress (10 Important)

| PR | Summary | Impact |
|----|---------|--------|
| [#7471](https://github.com/earendil-works/pi/pull/7471) **Retry transient errors in Google adapters** | Adds retry logic for 429/5xx in `google-vertex` and `google-generative-ai` adapters, aligning with Anthropic/OpenAI/Azure behavior. | Fixes [#7470](#hot-issues); prevents single-throttle kills for AgentHarness users |
| [#7468](https://github.com/earendil-works/pi/pull/7468) **Accept Claude Code skill frontmatter** | Both agent and coding-agent skill loaders now parse Claude Code `SKILL.md` frontmatter reference. | Improves skill portability; reduces friction migrating from Claude Code |
| [#7467](https://github.com/earendil-works/pi/pull/7467) **Add MiniMax video generation** | New video-generation API registry + MiniMax global/CN providers (v1/v2) with create/query/download. | Expands Pi beyond text/code into multimodal video workflows |
| [#7466](https://github.com/earendil-works/pi/pull/7466) **Opt-in pre-dispatch durability barrier** | New session persists before first provider request; enables at-most-once semantics for embedders. | Critical for billing/audit integrity; prevents “provider invoked but output lost” ambiguity |
| [#7455](https://github.com/earendil-works/pi/pull/7455) **Simplify session storage composition** | Replaces `SessionReader`/`StoreSession` split with concrete `Session` facade + faceted `SessionStore`. | Architectural cleanup; preserves backend-native queries while reducing complexity |
| [#7459](https://github.com/earendil-works/pi/pull/7459) **Compose experimental CLI commands** | Unified parser for combined/server/client modes; typed dispatch; rejects legacy options. | Foundation for `PiServer` and headless/remote workflows |
| [#7411](https://github.com/earendil-works/pi/pull/7411) **Experimental CLI option parser** | Pure parser for new transport/auth args; preserves existing `parseArgs()`; repeatable `--listen`. | Enables server/client modes without breaking current CLI |
| [#7456](https://github.com/earendil-works/pi/pull/7456) **Support short-lived OAuth tokens** | Refresh only when <1 min remains; retains stricter validity for callers needing it. | Fixes [#7457](#hot-issues); eliminates per-request refresh overhead |
| [#7453](https://github.com/earendil-works/pi/pull/7453) **Add Cline API & ClinePass providers** | OpenAI-compatible gateways at `api.cline.bot`; single `CLINE_API_KEY` auth; usage + flat-rate tiers. | New provider option for cost-sensitive teams |
| [#7451](https://github.com/earendil-works/pi/pull/7451) **Bound model catalog refreshes** | Adds cancellation/queuing to fix multiple timeout issues ([#7027](https://github.com/earendil-works/pi/issues/7027), [#7113](https://github.com/earendil-works/pi/issues/7113), [#7153](https://github.com/earendil-works/pi/issues/7153), [#7418](https://github.com/earendil-works/pi/issues/7418), [#7443](https://github.com/earendil-works/pi/issues/7443)). | Resolves login freezes, `/model` hangs, and stalled refreshes on flaky networks |

*Also notable:* [#7396](https://github.com/earendil-works/pi/pull/7396) **Server session backend** (durable JSONL + locking + crash recovery), [#7440](https://github.com/earendil-works/pi/pull/7440) **Switchable terminal renderers** (runtime UI mode switching), [#7441](https://github.com/earendil-works/pi/pull/7441) **Tolerate missing `finish_reason

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-02

## 1. Today's Highlights
Qwen Code shipped **v0.21.3** with a major `/review` command overhaul adding test-plan validation, measured failure attribution, and new verification lenses for deeper code-change analysis. The nightly channel delivered a TUI keyboard-shortcut reference completion and a fix unblocking history pagination. Concurrently, the daemon (`qwen serve`) received configurable sub-session concurrency caps and memory-budget reporting to bound resource usage in multi-workspace deployments.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.21.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.3) | Stable | • `/review` enhanced with test-plan validation, failure attribution, verification lenses ([#8215](https://github.com/QwenLM/qwen-code/pull/8215), [#8218](https://github.com/QwenLM/qwen-code/pull/8218)) |
| [v0.21.3-nightly.20260802](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.3-nightly.20260802.184365390) | Nightly | • Docs: complete TUI keyboard shortcut reference ([#8327](https://github.com/QwenLM/qwen-code/pull/8327))<br>• Fix: unblock history pagination on `o` key |
| [v0.21.2-nightly.20260801](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.2-nightly.20260801.bc382c3ff) | Nightly | • Feat(hooks): include session source in lifecycle hook payloads ([#8155](https://github.com/QwenLM/qwen-code/pull/8155))<br>• Feat(review): cache identity checks |

## 3. Hot Issues (5 updated in last 24h)
| Issue | Priority | Why It Matters | Community Reaction |
|-------|----------|----------------|-------------------|
| [#7585](https://github.com/QwenLM/qwen-code/issues/7585) Direct External Context Provider Profile | P3 | Proposes a private monorepo integration with admin-bound external memory profiles for shared context across CLI processes. Enables enterprise-grade context isolation. | 11 comments, active design discussion |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) Bound Multi-Workspace Daemon Resource Usage | P2 | Tracks byte-level bounds (request bodies, WS assembly, memory) for `qwen serve` daemon — critical for production stability. | 9 comments, needs triage |
| [#8286](https://github.com/QwenLM/qwen-code/issues/8286) Trusted Private ASR Base URLs for Voice | P3 | Opt-in setting to allow internal/private ASR endpoints over HTTP in isolated networks — unblocks air-gapped deployments. | 3 comments, security-scoped |
| [#8328](https://github.com/QwenLM/qwen-code/issues/8328) Preserve Todo Compatibility Outside Session Workflow | Bug | Regression from #7580: `todo_write` now forces `planId`/workflow metadata on all sessions, breaking non-graph workflows. | 2 comments, **closed** (fix likely in PR) |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) Fleet Shepherd Dashboard | Auto | Automated fleet health dashboard — last tick 2026-08-02T02:39:45Z, zero syncs/dispatches. | 3 comments, bot-maintained |

## 4. Key PR Progress (10 notable PRs from 50 updated)
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#8332](https://github.com/QwenLM/qwen-code/pull/8332) | Open | Audio bridge for attachments: transcribes user-supplied audio via batch voice model when primary model lacks audio support. | Enables audio input for all models |
| [#8349](https://github.com/QwenLM/qwen-code/pull/8349) | **Closed** | `qwen review drive`: start → wait-until-ready → drive → capture facts. Replaces sleep-based verification with deterministic polling. | **Major review workflow upgrade** |
| [#8346](https://github.com/QwenLM/qwen-code/pull/8346) | **Closed** | Verifier learns "falsify-not-verify" asymmetry: "I couldn't verify" ≠ "it's false". Reduces false rejections. | Improves review accuracy |
| [#8341](https://github.com/QwenLM/qwen-code/pull/8341) | Open | Configurable sub-session concurrency caps for `qwen serve` (defaults raised 5→16 per caller, 20→24 total). | Scales daemon throughput |
| [#8339](https://github.com/QwenLM/qwen-code/pull/8339) | Open | Chat compression reuses main conversation prompt-cache prefix when models match (Anthropic/DashScope caching). | Cuts token cost & latency |
| [#8324](https://github.com/QwenLM/qwen-code/pull/8324) | Open | Non-interactive `/goal` commands adopt Goal v3 runtime; `stream-json` emits ordered `goal_state` events. | Unifies goal UX across modes |
| [#8342](https://github.com/QwenLM/qwen-code/pull/8342) | Open | Allow pasting sensitive extension settings (masked input preserved, control chars discarded). | Fixes Windows Terminal paste UX |
| [#8353](https://github.com/QwenLM/qwen-code/pull/8353) | Open | ESC cancels ongoing agent response before popping queued messages. | Restores intuitive cancel behavior |
| [#8245](https://github.com/QwenLM/qwen-code/pull/8245) | Open | Daemon resolves & reports memory budget (cgroup/heap limits) — enables bounded resource tracking for #8051. | Foundational for daemon hardening |
| [#8318](https://github.com/QwenLM/qwen-code/pull/8318) | Open | Autofix: requires isolated targeted E2E proof; binds approval to exact issue title/body; verifies candidate commit. | Hardens autofix reliability |

## 5. Feature Request Trends
1. **Enterprise/air-gapped deployment support** — Private ASR endpoints (#8286), external context provider profiles (#7585), daemon resource bounding (#8051, #8245).
2. **Daemon production hardening** — Configurable concurrency (#8341), memory budgets (#8245), byte-level resource limits (#8051).
3. **Review/verification depth** — Falsify-not-verify logic (#8346), drive-based verification (#8349), test-plan validation (v0.21.3).
4. **Session/goal unification** — Goal v3 in non-interactive mode (#8324), todo compatibility (#8328), session-scoped model switches (#6579).
5. **Multimodal/input flexibility** — Audio bridge for attachments (#8332), paste-friendly sensitive inputs (#8342), ESC cancel UX (#8353).

## 6. Developer Pain Points
| Pain Point | Evidence |
|------------|----------|
| **Daemon resource unpredictability** | #8051 (byte-level bounds missing), #8245 (no memory budget), #8341 (hardcoded concurrency caps) |
| **Regression in todo/session contracts** | #8328: `planId` forced on all sessions post-#7580, breaking non-workflow usage |
| **Review false negatives** | #8346: verifier rejects findings on "couldn't verify" vs. actual falsification |
| **Autofix flakiness** | #8354 (Java E2E race), #8318 (requires isolated proof), #8302 (deterministic permission E2E) |
| **Windows/terminal paste UX** | #8342: sensitive settings reject multi-char paste; #8353: ESC consumed by queue logic |
| **Model-switch scope confusion** | #6579: `/model` persisted globally by default, session-scoped now requires `--default` flag |

---

*Generated from `QwenLM/qwen-code` GitHub data (releases, issues, PRs updated 2026-08-01 → 2026-08-02).*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-02

---

## 1. Today's Highlights

No new releases in the last 24 hours. The project is in a heavy **maintenance and API-completion sprint**: 15+ enhancement issues opened today targeting Runtime API parity (goals, memory, MCP, skills, verifiers), while a batch of 8 user-facing fixes lands via PR #5063. Community contributions for Nix, DevContainer Windows, and workspace-scoped task APIs are being integrated (#5083, #5078, #5079). Critical TUI launch regression (#4716) and credential-scoping bugs (#5045, #5047) remain open.

---

## 2. Releases

**None** in the last 24 hours.

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5045](https://github.com/Hmbown/CodeWhale/issues/5045) | **API keys stored repo-scoped, not user-global** | Keys entered in one repo disappear when switching projects; plaintext in `.codewhale/config.toml` leaks secrets. | Opened by maintainer (Hmbown), 1 comment — dogfood pain point. |
| [#5047](https://github.com/Hmbown/CodeWhale/issues/5047) | **API keys silently persist only in working repo** | Duplicate of #5045 with emphasis on stranded plaintext copies; security + UX regression. | Maintainer-opened, 1 comment. |
| [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) | **464 `#[allow(dead_code)]` attributes hide compiler drift** | Compiler cannot report dead code across 143 files; technical debt blocking refactors. | Maintainer-opened, 4 comments — measured impact via `cargo check`. |
| [#4716](https://github.com/Hmbown/CodeWhale/issues/4716) | **TUI exits immediately on launch (`[Process completed]`)** | **Stop-ship** macOS regression; binary installs v0.9.1 candidate broken for fresh terminals. | Maintainer-opened, 2 comments — blocks new users. |
| [#4683](https://github.com/Hmbown/CodeWhale/issues/4683) | **Wrong DeepSeek completions URL (flaky)** | Requests to `api.deepseek.com/v1/chat/completions` fail intermittently; core provider integration broken. | 3 comments, external reporter — affects all DeepSeek users. |
| [#4684](https://github.com/Hmbown/CodeWhale/issues/4684) | **`danger-full-access` doesn't disable tools-layer boundary check** | Sandbox flag bypasses OS sandbox but not internal `read_file`/`grep_files` workspace checks; global skills broken. | 3 comments — sandbox model inconsistency. |
| [#5056](https://github.com/Hmbown/CodeWhale/issues/5056) | **Flaky verifier tests, 12 `#[ignore]` tests, workspace-sensitive fixtures** | CI reliability degradation; background verifier tests flake under parallelism. | Maintainer-opened, 1 comment — references `AGENTS.md:80`. |
| [#5055](https://github.com/Hmbown/CodeWhale/issues/5055) | **DeepSeek Pro effort mapping hardcoded, no dated source of truth** | Mapping changes early Aug 2026; inline constants in `client.rs` unmaintainable. | Maintainer-opened — precedes PR #5068. |
| [#5054](https://github.com/Hmbown/CodeWhale/issues/5054) | **Claude PR review gate permanently dark (Bun/tsconfig mismatch)** | Automated review gate produces zero verdicts since pre-#5024; CI quality gate ineffective. | Maintainer-opened — infra debt. |
| [#5052](https://github.com/Hmbown/CodeWhale/issues/5052) | **Operate mode: goal loop stops at hardcoded 10-continuation cap** | Goals should run to completion gate or budget exhaustion, not arbitrary limit. | Maintainer-opened — precedes PR #5067. |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#5063](https://github.com/Hmbown/CodeWhale/pull/5063) | **Fix batch** | 7 commits, 8 user-facing fixes: Anthropic wire strictness, sandbox, workflow, config scoping, session layer, input, TUI. Each with regression tests; diagnosed via adversarial verification. |
| [#5077](https://github.com/Hmbown/CodeWhale/pull/5077) | **Perf (prompt)** | Progressive context disclosure: keep `AGENTS.md`/`CLAUDE.md` eager, cap ambient skills at 2,400 chars, defer heavy context to `load_skill` tool. |
| [#5083](https://github.com/Hmbown/CodeWhale/pull/5083) | **Fix (nix, community)** | Integrates shiziku’s #5028: makes sandboxed `cargo check` pass (writable `HOME`, explicit library paths). Preserves contributor authorship via cherry-pick trailer. |
| [#5079](https://github.com/Hmbown/CodeWhale/pull/5079) | **Feat (runtime-api, community)** | Integrates Ben Gao’s #4985: optional `workspace` filter on `GET /v1/tasks`, includes workspace path in `TaskSummary`. |
| [#5078](https://github.com/Hmbown/CodeWhale/pull/5078) | **Fix (devcontainer, community)** | Integrates pingg02’s #4990: dedicated dev image with Rust toolchain, named volumes for Windows HOME compatibility. |
| [#5068](https://github.com/Hmbown/CodeWhale/pull/5068) | **Refactor** | Centralizes DeepSeek Pro effort mapping in `client/deepseek_effort.rs` with 2026-07-31 doc date; both Chat & Responses paths consume single table. |
| [#5067](https://github.com/Hmbown/CodeWhale/pull/5067) | **Fix (TUI)** | Removes hardcoded 10-continuation stop; goals run to completion gate / budget exhaustion. Adds `[goal] max_continuations` (default 100) as configurable backstop. |
| [#5075](https://github.com/Hmbown/CodeWhale/pull/5075) | **Fix (config)** | Rejects relative `CODEWHALE_HOME`/`CODEWHALE_CONFIG_PATH`; routes TUI config R/W through fallible path authority; refuses auto plaintext writes. Addresses #5045/#5047. |
| [#5069](https://github.com/Hmbown/CodeWhale/pull/5069) | **Feat (TUI)** | Model capability badges in Fleet setup/roster: provider-aware resolver, Models.dev provenance, seeded registry fallbacks, unknown models render no badges. |
| [#5064](https://github.com/Hmbown/CodeWhale/pull/5064) | **Feat (compaction)** | Adds deterministic **Continuation Contract** to compaction summaries: bounded working contract, active intent, decisions, verification evidence, in-flight tool calls. |

---

## 5. Feature Request Trends

1. **Runtime API Parity** — 5 enhancement issues opened today (#5070–#5074) demand canonical HTTP endpoints for: skills lifecycle (install/update/uninstall/trust/audit), MCP server management, memory inspection, verifier evidence, and goal-loop state. Managed clients (desktop/web) cannot operate without these.

2. **Multi-Worktree Developer Experience** — #5061 requests cross-worktree claim visibility, shared build cache, and branch-to-PR promotion. Parallel lane development is first-class but tooling lags.

3. **Credential & Config Security** — #5045, #5047, #5075 converge on: user-global secret storage (keychain/credential-manager), rejection of repo-scoped plaintext config, path-safe config resolution.

4. **Operate-Mode Autonomy** — #5052, #5067, #5058 push for goals that run to verified completion, compact sub-agent receipts, and friendlier scope errors — moving from “fixed iterations” to “completion-gated” loops.

5. **Observability & Debuggability** — #5059 (KV-cache prefix stability), #5056 (test reliability), #5053 (update notices), #5060 (concurrency transparency) — operators need insight into what bounds execution.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **TUI launch failure on macOS** | #4716 (stop-ship), fresh terminal → immediate `[Process completed]` | Critical, blocks onboarding |
| **API keys not portable across repos** | #5045, #5047, #5075 — plaintext in `.codewhale/config.toml`, lost on `cd` | Daily friction for multi-repo workflows |
| **Flaky DeepSeek provider requests** | #4683 — intermittent `https://api.deepseek.com/v1/chat/completions` failures | Core integration instability |
| **Sandbox model inconsistency** | #4684 — `danger-full-access` bypasses OS sandbox but not tools-layer checks | Confusing security model |
| **No proactive update notification** | #5053 — TUI never tells user updates exist; `Ctrl+U` taken | Missed upgrades, stale clients |
| **Hardcoded limits masquerading as config** | #5052 (10 continuations), #5060 (16 workers), #5055 (effort mapping) | Requires code changes for tuning |
| **CI quality gates silent** | #5054 — Claude review gate broken since before #5024 | No automated review signal |
| **Sub-agent UX opacity** | #5058 — 136 KB launch receipts, `self_report_only` results, cryptic scope errors | Debugging parallel work is painful |

---

*Generated from `Hmbown/CodeWhale` GitHub data (issues & PRs updated 2026-08-01 → 2026-08-02).*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*