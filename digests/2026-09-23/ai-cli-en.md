# AI CLI Tools Community Digest 2026-09-23

> Generated: 2026-09-23 04:26 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem Cross-Tool Comparison — 2026-09-23

---

## 1. Ecosystem Overview

The AI CLI landscape is in a **high-velocity consolidation and hardening phase**. All major tools shipped model updates (Opus 5.5, GPT-6 Sol/Luna, Gemini 3.8 Flash, Grok 4.7) within hours of each other, signaling a new frontier-model generation. Simultaneously, every project is tackling **core reliability regressions**—Windows stability, session durability, subagent orchestration, and context/compaction correctness—rather than chasing net-new features. Two tools (Kimi CLI, DeepSeek TUI) completed major runtime rebrands/migrations, while Qwen Code and Pi demonstrated the fastest release cadences (5 and 1 releases respectively in 24h). The ecosystem is converging on **multi-agent workflows, persistent memory, and provider-agnostic model routing** as the next differentiators.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues (Top 10) | PRs Merged/Updated (24h) | Notable Signals |
|------|----------------|---------------------|---------------------------|-----------------|
| **Claude Code** | 1 (v2.1.280) | 10 — #53247 (102 comments, 35 👍) | 1 (agents-md mod, closed) | Windows crisis dominates; low PR velocity |
| **OpenAI Codex** | 2 + alphas (v0.156.1, v0.156.0) | 10 — #25826 (30c, 20👍), #42987 (27c, 17👍) | **20+** (high velocity) | TUI + voice shipped; Windows + rate-limit fires |
| **Gemini CLI** | 1 nightly (v0.62.0-nightly) | 10 — #22323 (13c), #21409 (8c, 8👍) | 10 (security, fixes, models) | Subagent maturity & AST-aware nav prioritized |
| **GitHub Copilot CLI** | 3 (v1.0.89-0, v1.0.88, v1.0.88-2) | 10 — #4438 (7c, 9👍), #4755 (3c) | 1 (doc only) | Session stability & enterprise config gaps |
| **Kimi Code CLI** | 1 (v1.52.0 migration) | 2 — #2336 (2c), #1547 (closed) | 4 (2 merged, 2 open) | **Archived** — migration to TS CLI complete |
| **OpenCode** | 0 | 10 — #49014 (8c), #17471 (5c, 13👍) | 10 (Windows, health probes, providers) | V2 migration regressions; Go quota cascade |
| **Pi** | 1 (v0.87.1) | 10 — #7885 (13c closed), #9843 (10c open) | 10 (Yolo-Auto, compaction, TUI, i18n) | Frontier models + provider abstraction focus |
| **Qwen Code** | **5** (v0.24.5-preview, v0.24.4, 2 nightlies, desktop) | 10 — #11795 (P1 deadlock), #12505 (P2 clipboard) | 10 (tool panels, batch API, worktrees, channels) | Highest release cadence; daemon/Web Shell push |
| **Codewhale** | 1 (v0.10.0 rebrand) | 10 — #6011 (9c), #5586 (8c) | 10 (i18n, Chromewhale, Yolo-Auto, MCP) | Rebrand + architectural refactor (mega-files, dual MCP) |
| **Grok Build** | 0 | — | 0 | No activity |

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Subagent / Multi-Agent Orchestration** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Qwen Code, Pi | Reliable delegation, permission propagation, visible trajectories, autonomous skill usage, free-tier unblocking (OpenCode #50806), false-success masking (Gemini #22323), parent-session wedge (OpenCode #44747) |
| **Session Durability & Resume** | All except Kimi (archived) | Compaction correctness (Claude #65796, Pi #9652, OpenCode #50816), auth-loop recovery (Gemini #29448, Copilot #4929), transcript integrity (Pi #9930, Qwen #12257), state loss on auto-update (Claude #92321, Codex #32789) |
| **Windows Desktop Reliability** | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode, Pi | Orphaned Job Objects (Claude #53247), multi-monitor spill (Codex #25826), sandbox/renderer crashes (Codex #43373, #32789), upgrade hangs (OpenCode #50819), clipboard/IME (Pi #9052, Qwen #12505, Codewhale #2323) |
| **Provider-Agnostic Model Routing** | Pi, OpenCode, Qwen Code, Codewhale, GitHub Copilot CLI | Custom provider save (OpenCode #50650), model catalog sync (Codex #47412), Yolo-Auto gateway (Pi #9934, Codewhale #6408), BYO endpoint parity (Copilot #4003) |
| **Cost / Token Observability** | Claude Code, OpenAI Codex, Codewhale, Pi | Cache hit/miss visibility (Claude #93490, #82056), rate-limit transparency (Codex #42987, #43118), per-component accounting (Codewhale #6011), compaction cost tracking (Pi #9652) |
| **MCP / Tool Ecosystem Integration** | GitHub Copilot CLI, OpenCode, Qwen Code, Pi, Codewhale | MCP server stability (Copilot #4602, #4931), dual-stack reconciliation (Codewhale #6142), tool-call parsing (Pi #9569, #9852), batch tool APIs (Qwen #12492) |
| **IDE / Editor Integration Depth** | Gemini CLI, Qwen Code, Pi, GitHub Copilot CLI | Tool confirmation deadlock (Gemini #29452), Web Shell Git worktrees (Qwen #12154), VS Code extension lint (Qwen #12486), pendant/VS Code parity (Pi #9843) |

---

## 4. Differentiation Analysis

| Dimension | Leaders / Approaches |
|-----------|----------------------|
| **Target User** | **Enterprise/Teams**: GitHub Copilot CLI (managed settings, connector consent, OSC 777), OpenCode (Go subscriptions, fleet management). **Individual Power Users**: Codex (TUI + voice, reasoning transparency), Claude Code (skills/mods, AGENTS.md), Qwen Code (daemon + Web Shell + batch API). **Platform Integrators**: Pi (extension spine, provider abstraction), Codewhale (Chromewhale side-panel, agent SDK). |
| **Technical Architecture** | **Rust TUI + Backend**: Codex, OpenCode, Codewhale (GPUI). **TypeScript/Node**: Claude Code, Gemini CLI, Qwen Code, Pi, GitHub Copilot CLI. **Python → TS Migration**: Kimi (complete). **Daemon-First**: Qwen Code (multi-session daemon, batch snapshots), OpenCode (fleet/agent separation). **Extension/Plugin Spine**: Pi (dictionary spine, loadout management), Codewhale (MCP 2026-07-28 conformance). |
| **Model Strategy** | **First-Party Lock-in**: Codex (GPT-6 family), Gemini CLI (Gemini 3.x), Grok Build (xAI). **Multi-Provider Agnostic**: Pi, OpenCode, Codewhale, GitHub Copilot CLI (supports Opus 5.5), Qwen Code. **Hybrid**: Claude Code (Anthropic default + plugins). |
| **Differentiation Bets** | **Codex**: Voice-first TUI, reasoning transparency. **Claude Code**: Skills/mods marketplace, AGENTS.md pattern. **Gemini CLI**: AST-aware code nav, bash-native agentic workflows. **Qwen Code**: Daemon orchestration, Web Shell as Live Host, batch async API. **Pi**: Provider abstraction layer, extension dictionary spine. **Codewhale**: Fleet/agent unification, Chromewhale browser agent, runtime perf gates. **OpenCode**: Subagent permission model, Go tier management. |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **Qwen Code**, **Pi**, **OpenAI Codex**, **Codewhale** | Qwen: 5 releases/24h, 10 PRs, daemon + Web Shell + batch API. Pi: v0.87.1 + 10 PRs (Yolo-Auto, compaction, i18n). Codex: 20+ PRs, TUI + voice + GPT-6 shipped. Codewhale: rebrand + 10 PRs (architectural refactor, Chromewhale). |
| **Stabilizing / Enterprise-Focused** | **GitHub Copilot CLI**, **Gemini CLI** | Copilot: 3 patches, enterprise config gaps, low PR velocity. Gemini: nightly cadence, 10 PRs (security hardening), subagent maturity push. |
| **Crisis Mode / Structural Debt** | **Claude Code**, **OpenCode** | Claude: Windows orphaned Job Object (102 comments), auto-update kills state, Termux broken since v2.1.113. OpenCode: V2 migration regressions (

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-23 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking — Most-Discussed PRs & Issues

| Rank | Item | Type | Status | Comments/Attention | Description |
|------|------|------|--------|-------------------|-------------|
| 1 | **[#492 Security: Community skills under `anthropic/` namespace](https://github.com/anthropics/skills/issues/492)** | Issue | 🟢 Open | 43 comments, 2 👍 | Critical trust boundary vulnerability: community skills distributed under Anthropic's namespace, enabling impersonation and permission abuse. |
| 2 | **[#228 Enable org-wide skill sharing in Claude.ai](https://github.com/anthropics/skills/issues/228)** | Issue | 🟢 Open | 16 comments, 8 👍 | Demand for native organizational skill library — eliminate manual `.skill` file sharing via Slack/Teams. |
| 3 | **[#556 run_eval.py: 0% trigger rate for skills](https://github.com/anthropics/skills/issues/556)** | Issue | 🟢 Open | 12 comments, 7 👍 | Evaluation harness fundamentally broken — `claude -p` never triggers skills, blocking skill validation. |
| 4 | **[#189 Duplicate skills from document-skills & example-skills](https://github.com/anthropics/skills/issues/189)** | Issue | 🟢 Open | 6 comments, 9 👍 | Two plugins install identical skills, polluting context window with duplicates. |
| 5 | **[#1771 proofcore-contract-auditor](https://github.com/anthropics/skills/pull/1771)** | PR | 🟢 Open | Recent (Sep 15-16) | Web3 skill: static analysis of Solidity/Rust contracts + cryptographic audit proofs anchored to TON blockchain via ProofCore. |
| 6 | **[#1703 md2video-audio](https://github.com/anthropics/skills/pull/1703)** | PR | 🟢 Open | Recent (Sep 1-15) | Zero-cost Markdown → professional MP4 with human-like voiceovers (Marp slides + TTS). |
| 7 | **[#822 AWT (AI Watch Tester)](https://github.com/anthropics/skills/pull/822)** | PR | 🟢 Open | Long-running (Mar-Sep) | Vision + browser control for zero-code E2E test generation; auto-healing selectors; CI/CD integration. |
| 8 | **[#723 testing-patterns](https://github.com/anthropics/skills/pull/723)** | PR | 🟢 Open | Long-running (Mar-Sep) | Comprehensive testing skill: Testing Trophy, AAA pattern, React Testing Library, contract testing, property-based, mutation testing. |
| 9 | **[#1298 fix(skill-creator): isolate trigger evals](https://github.com/anthropics/skills/pull/1298)** | PR | 🟢 Open | Recent (Jun-Sep) | Fixes false trigger scores: Windows `select()` failures, worker probe contention, runtime failures misclassified as non-triggers. |
| 10 | **[#1769 Fix skill-creator 0% recall](https://github.com/anthropics/skills/pull/1769)** | PR | 🟢 Open | Recent (Sep 14-15) | Trigger evaluation reports `precision=100% recall=0%` for all skills — silent failure corrupting optimization loop. |

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence | Signal Strength |
|-------|----------|-----------------|
| **Trust & Security Hardening** | #492 (43 comments) — namespace impersonation; #1487 — 156k token injection exhaustion | 🔥 **Critical** |
| **Organizational Workflow Integration** | #228 (16 comments, 8 👍) — org-wide sharing; #189 (6 comments, 9 👍) — duplicate cleanup | 🔥 **High** |
| **Evaluation & Quality Infrastructure** | #556 (12 comments, 7 👍) — broken trigger eval; #1390 (4 comments) — MCP eval scores 0/N; #202 (8 comments) — skill-creator best practices | 🔥 **High** |
| **Agent Governance & Safety** | #412 (6 comments) — policy enforcement, threat detection, audit trails (closed but referenced) | 📈 **Emerging** |
| **Context & Memory Optimization** | #1329 (9 comments) — compact-memory symbolic notation; #1487 — token exhaustion | 📈 **Emerging** |
| **Document Processing Reliability** | #538, #541, #1765, #1790 — multiple DOCX/PDF/Office fixes for case-sensitivity, ID collisions, UTF-8, missing rels | 🔧 **Maintenance** |

---

## 3. High-Potential Pending Skills (Active Open PRs Likely to Land)

| PR | Skill | Category | Why It's Poised to Merge |
|----|-------|----------|--------------------------|
| **[#1771](https://github.com/anthropics/skills/pull/1771)** | `proofcore-contract-auditor` | Web3/Security | Novel cryptographic audit trail on TON; addresses high-value smart contract niche; recent author engagement |
| **[#1703](https://github.com/anthropics/skills/pull/1703)** | `md2video-audio` | Content Creation | Zero-cost video generation from Markdown; strong demo appeal; Marp + TTS pipeline well-scoped |
| **[#822](https://github.com/anthropics/skills/pull/822)** | `awt` (AI Watch Tester) | Testing/QA | Vision-based E2E testing fills major gap; auto-healing selectors; 6-month iteration suggests maturity |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Testing/QA | Comprehensive reference skill; covers full stack (unit → mutation); educational + practical value |
| **[#1776](https://github.com/anthropics/skills/pull/1776)** | `blast-radius` | Safety/Ops | Pre-destructive-operation checklist; unique "safety moment" pattern; low complexity, high utility |
| **[#1615](https://github.com/anthropics/skills/pull/1615)** | `scnet-hpc` | HPC/Infra | Profile-based SSH/Slurm workflows; niche but well-defined for cluster operators |
| **[#525](https://github.com/anthropics/skills/pull/525)** | `pyxel` | Game Dev | Retro game dev skill with headless verification; 6-month iteration; author `kitao` is Pyxel creator |
| **[#486](https://github.com/anthropics/skills/pull/486)** | `odt` | Document Processing | OpenDocument create/fill/parse; ISO standard coverage; multiple format support (.odt, .ods) |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, evaluatable, and organizationally shareable skills* — not just new capabilities, but the infrastructure to safely distribute, validate, and govern them at scale.**

---

*Report generated from GitHub data (50 PRs, 13 Issues). All links point to live GitHub items.*

---

# Claude Code Community Digest — 2026-09-23

---

## 1. Today's Highlights

- **Claude Opus 5.5 is now the default Opus model** in v2.1.280, bringing a 1M-token context window at $4/$20 per Mtok (input/output) with $0.20/Mtok cache reads.  
- **Windows stability remains a top pain point**: a critical orphaned Job Object bug (#53247, 102 comments) prevents Claude Desktop from launching after a crash, requiring logoff/reboot to recover.  
- **Auto-update "stealth relaunches" on macOS/Windows** are silently killing Remote Control sessions and background agents, with multiple reports of worktree locks and scheduled tasks failing to recover.

---

## 2. Releases

### v2.1.280 — 2026-09-23
| Change | Details |
|--------|---------|
| **New default model** | `claude-opus-5-5` (Opus 5.5) — 1M context, $4/$20 per Mtok, $0.20/Mtok cache reads |
| **Mouse support** | Wheel scrolling in `/skills` list; clickable skill state options in `/plugin` (fullscreen mode) |

[View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.280)

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | **Windows: orphaned Silo/Job Object blocks launch after crash** (HRESULT 0x80070020) | Only logoff or reboot recovers; affects all Windows Desktop users post-crash | 👍 35 · 102 comments |
| [#50270](https://github.com/anthropics/claude-code/issues/50270) | **Termux/Android broken since v2.1.113** — native glibc binary, no JS fallback | `process.platform === 'android'` rejected; blocks mobile/edge developers | 👍 62 · 71 comments |
| [#82056](https://github.com/anthropics/claude-code/issues/82056) | **Auto-memory index load status opaque** — cannot tell if loaded whole, truncated, or not at all | Critical for long-running agent workflows relying on persistent memory | 👍 1 · 52 comments |
| [#65796](https://github.com/anthropics/claude-code/issues/65796) | **Workflow resume restarts from start after auto-compaction** — silently re-runs completed agents | Wastes compute & breaks idempotency in multi-agent pipelines | 👍 0 · 16 comments |
| [#95326](https://github.com/anthropics/claude-code/issues/95326) | **Chrome extension: all tools blocked on reddit.com/redd.it** since 2026-09-18 | Sudden regression; "safety restrictions" false positive on popular site | 👍 11 · 10 comments |
| [#91495](https://github.com/anthropics/claude-code/issues/91495) | **Desktop: "Allow all websites" ignored by built-in browser** | Permissions UI non-functional; breaks browsing-dependent workflows | 👍 11 · 9 comments |
| [#93490](https://github.com/anthropics/claude-code/issues/93490) | **`--resume` misses prompt cache on Fable 5.1** — session-start replayed as plain string | Increases cost/latency; Opus 5 works, Fable 5.1 regressed | 👍 0 · 7 comments |
| [#82165](https://github.com/anthropics/claude-code/issues/82165) | **Catastrophic data loss: agent expanded to `rm -rf /*`**; safety classifier blocked kill attempts | Safety layer failed to intercept destructive command; kill blocked | 👍 0 · 6 comments |
| [#76841](https://github.com/anthropics/claude-code/issues/76841) | **Mobile app: no way to list/reopen routine's session after notification dismissed** | Routines UX broken on mobile; no session recovery path | 👍 5 · 6 comments |
| [#93231](https://github.com/anthropics/claude-code/issues/93231) | **VS Code window close leaks git worktree lock** — dead PID never reaped | Blocks subsequent sessions; requires manual `git worktree unlock` | 👍 0 · 5 comments |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#95409](https://github.com/anthropics/claude-code/pull/95409) | `mods/agents-md`: AGENTS.md project-instructions mod | **Closed** | Adds `agents-md` mod (manifest, hooks, tests, README) — reads `AGENTS.md` like `CLAUDE.md` via `instructionFiles` option. |

> Only 1 PR updated in the last 24h. The `agents-md` mod enables project-level instruction files, aligning with the `CLAUDE.md` pattern.

---

## 5. Feature Request Trends (from Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Auto-memory observability** | #82056, #89840 | Need in-session API to inspect load state (whole/truncated/missing) and schedule durability |
| **Remote Control resilience** | #92321, #95364, #76841 | Auto-update relaunches kill bridges; `rcAutoEnable` only recovers on local turn; mobile lacks session list |
| **Scheduled task durability** | #90533, #89840 | Single malformed `fireAt` string poisons entire registry; prompts survive wipe but schedules don't |
| **Per-model effort/guardrail config** | #87789, #96141, #96139 | Request for model-keyed `effortLevel` maps; Opus 5.5 false-positive safeguards on benign tasks |
| **Hook/plugin lifecycle guarantees** | #90135, #95833 | Marketplace plugin re-materialization kills pinned hooks silently; PreToolUse hooks don't fire in Desktop "Code" tab |

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows Desktop instability** | #53247 (102 comments), #95264 (always-on-top), #93231 (worktree lock leak), #91855 (MCP approval broken) | Daily driver unusable after crash; requires reboot; VS Code integration leaks resources |
| **Auto-update "stealth relaunch" destroys state** | #92321, #95364, #90533 (scheduled tasks stop 55h) | Background agents, Remote Control, and routines die silently; no graceful shutdown hook |
| **Safety classifier false positives & blind spots** | #96141, #96139 (Opus 5.5 flags benign work), #82165 (missed `rm -rf /*`), #95326 (Reddit blocked) | Both over-blocking (productivity loss) and under-blocking (data loss) reported same week |
| **Mobile/Termux second-class support** | #50270 (71 comments, 62 👍), #76841 (mobile routine UX) | Android/Termux users blocked by glibc binary; mobile app lacks session management |
| **Multi-agent workflow reliability** | #65796 (resume restarts), #75438 (notifications lost), #88462 (auto-mode `rm -rf $HOME`) | Compaction, restart, and auto-mode combine to lose progress or execute destructively |
| **Cost/cache regressions on new models** | #93490 (Fable 5.1 misses cache), #96141 (Opus 5.5 safeguard flags) | New models introduce prompt-cache misses and overzealous guardrails, raising effective cost |

---

*Digest generated from GitHub data (anthropics/claude-code) as of 2026-09-23 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-23

## 1. Today's Highlights

OpenAI shipped **v0.156.0** with two major UX upgrades: an optional fullscreen TUI (`/tui`) featuring transcript search, mouse selection, and right-click copying, plus **voice conversations enabled by default** (F8 toggle, `/voice settings` picker, bundled audio). A quick hotfix **v0.156.1** followed hours later adding **GPT-6 Sol and GPT-6 Luna** to the model picker, with the rate-limit switch prompt now recommending GPT-6 Luna. Meanwhile, the community is sharply focused on Windows stability (multi-monitor spills, sandbox failures, renderer crashes) and a critical rate-limit regression where **GPT-6 Astra Medium consumed a Plus user's entire 5-hour quota in two turns**.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.156.1** | Hotfix | Added GPT-6 Sol & Luna to model catalog; rate-limit switch prompt recommends GPT-6 Luna. [Compare](https://github.com/openai/codex/compare/rust-v0.156.0...rust-v0.156.1) |
| **rust-v0.156.0** | Feature | **Fullscreen TUI** via `/tui` (transcript search, mouse selection, right-click copy); **Voice conversations enabled by default** — F8 toggle, `/voice settings` picker, bundled audio. [Compare](https://github.com/openai/codex/compare/rust-v0.155.0...rust-v0.156.0) |
| **rust-v0.155.0-alpha.16.3** | Alpha | Iteration on 0.155 alpha branch |
| **rust-v0.157.0-alpha.9–5** | Alpha | Rapid alpha cadence for next minor |

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#25826](https://github.com/openai/codex/issues/25826)** Windows: maximized window spills onto adjacent monitors | Long-standing multi-monitor UX breakage on Windows Desktop; affects daily workflow | 30 comments, **20 👍** — high visibility, 3+ months open |
| **[#42987](https://github.com/openai/codex/issues/42987)** GPT-6 Astra Medium depleted Plus 5-hr quota in 2 turns | **Critical rate-limit regression**; suggests token accounting or model pricing bug for new GPT-6 family | 27 comments, **17 👍** — Plus users alarmed |
| **[#14630](https://github.com/openai/codex/issues/14630)** Voice transcription for TUI (enhancement) | Top-voted feature request; CLI lacks App-quality voice input | 23 comments, **60 👍** — strongest community demand |
| **[#19821](https://github.com/openai/codex/issues/19821)** WebSocket retries exhaust before HTTP fallback (proxy/CN users) | Blocks users behind proxies (esp. mainland China); 5-retry delay adds ~30s latency per turn | 13 comments, 2 👍 — workaround exists but fragile |
| **[#34873](https://github.com/openai/codex/issues/34873)** `model_reasoning_summary="detailed"` returns heading-only, no prose | Degrades debugging/observability for reasoning models; affects `codex exec --json` consumers | 11 comments, **12 👍** |
| **[#43373](https://github.com/openai/codex/issues/43373)** Windows Computer Use fails after Node exit; sandbox broken | Computer Use (agentic browser/OS control) unstable on Windows; "setup refresh had errors" | 9 comments |
| **[#32789](https://github.com/openai/codex/issues/32789)** Concurrent subagents flood renderers → AppX container crash | Subagent concurrency kills Windows Desktop process; data loss risk | 9 comments, 2 👍 |
| **[#47412](https://github.com/openai/codex/issues/47412)** **NEW** 404: `gpt-6-sol` does not exist / no access | **Day-0 regression** from v0.156.1 hotfix; model catalog update not propagated to backend | 8 comments, 2 👍 — blocks GPT-6 Sol users |
| **[#43118](https://github.com/openai/codex/issues/43118)** Desktop agent spent Full reset credit without confirmation | Billing trust issue: agent consumed irreplaceable "Full reset" credit silently | 7 comments |
| **[#43140](https://github.com/openai/codex/issues/43140)** HTTP SSE hangs on `response.failed` until EOF/idle timeout | SSE consumer doesn't terminate on terminal error event; wastes timeouts | 6 comments |

---

## 4. Key PR Progress (Last 24h)

| PR | Status | Description |
|----|--------|-------------|
| **[#47405](https://github.com/openai/codex/pull/47405)** | Merged | **Hotfix 0.156.0**: Backport GPT-6 Sol/Luna to model catalog, update migrations, recommend Luna in rate-limit prompt |
| **[#47401](https://github.com/openai/codex/pull/47401)** | Merged | Same hotfix for 0.155.0-alpha16.1 branch |
| **[#47385](https://github.com/openai/codex/pull/47385)** | Merged | Original hotfix for 0.156.0 (conflict resolutions preserved) |
| **[#47447](https://github.com/openai/codex/pull/47447)** | Merged | Extract WebSocket auth into `codex-websocket-auth` crate (shared `http` types) |
| **[#47435](https://github.com/openai/codex/pull/47435)** | Merged | Allow environment selection updates mid-turn via `TurnSettingsUpdate` |
| **[#47428](https://github.com/openai/codex/pull/47428)** | Merged | Apply inherited env settings at turn boundaries (not mid-turn) |
| **[#47424](https://github.com/openai/codex/pull/47424)** | Merged | Clear pending async question notifications on turn end (prevents suppression of completion notice) |
| **[#47422](https://github.com/openai/codex/pull/47422)** | Merged | Recover unsent question drafts when TUI turns end → append to composer |
| **[#47414](https://github.com/openai/codex/pull/47414)** | Merged | **Shift-click to extend transcript selections** (preserves anchor, supports word-selection) |
| **[#47417](https://github.com/openai/codex/pull/47417)** | Merged | Use native Terminal.app scrollback over SSH in auto mode |
| **[#31644](https://github.com/openai/codex/pull/31644)** | Merged | Linux sandbox: route DNS through managed proxy (opt-in `enable_dns`) |
| **[#47408](https://github.com/openai/codex/pull/47408)** | Merged | Enforce app network policy for AWS auth & telemetry clients |
| **[#47410](https://github.com/openai/codex/pull/47410)** | Merged | Honor network policy in remote control / recover remote execution |
| **[#47411](https://github.com/openai/codex/pull/47411)** | Merged | Apply shared network policy throughout embedded Codex startup |
| **[#47413](https://github.com/openai/codex/pull/47413)** | Merged | Cache decrypted gateway OAuth secrets per backend (perf) |
| **[#47423](https://github.com/openai/codex/pull/47423)** | Merged | Preserve `Ctrl+R` history search during background draft recovery |
| **[#47437](https://github.com/openai/codex/pull/47437)** | Merged | Stabilize retry timing & WebSocket tests (flake reduction) |
| **[#47441](https://github.com/openai/codex/pull/47441)** | Merged | Secondary text styling for transcript footer shortcut hint (readability) |
| **[#31334](https://github.com/openai/codex/pull/31334)** | Merged | Align skill creator paths: `.agents/skills`, `$HOME/.agents/skills`, `/etc/codex/skills` |
| **[#15261](https://github.com/openai/codex/pull/15261)** | Merged | Store guardian transcript boundary on review session (evidence slicing) |

---

## 5. Feature Request Trends

| Trend | Evidence |
|-------|----------|
| **Voice-first CLI/TUI** | [#14630](https://github.com/openai/codex/issues/14630) (60 👍) — parity with Desktop App voice transcription |
| **Cost-aware orchestration** | [#45362](https://github.com/openai/codex/issues/45362) — adaptive single→cascade→critique routing to optimize spend |
| **Model picker UX** | [#45608](https://github.com/openai/codex/issues/45608) — separate recent models from full catalog; keyboard-driven |
| **Subagent observability** | [#32789](https://github.com/openai/codex/issues/32789), [#32609](https://github.com/openai/codex/issues/32609) — heartbeat visibility, automation tooling |
| **Network/proxy resilience** | [#19821](https://github.com/openai/codex/issues/19821), [#31644](https://github.com/openai/codex/pull/31644) — DNS-over-proxy, faster HTTP fallback |
| **Reasoning transparency** | [#34873](https://github.com/openai/codex/issues/34873) — detailed summaries must include prose, not just headings |

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Windows Desktop instability** | Very High | Window spill (#25826), sandbox creation (#47418), renderer spawn failure (#46764), subagent crash (#32789), Computer Use broken (#43373), HWND unclickable (#40772) |
| **Rate-limit opacity & surprises** | High | Astra quota burn (#42987), Full reset credit spent silently (#43118), banked reset redemption fails (#46854), 20× Pro usage "insanely fast" (#47442) |
| **Model access / catalog sync** | High | Day-0 404 on `gpt-6-sol` (#47412), retired models not migrated cleanly |
| **Connectivity behind proxies / CN** | Medium | WebSocket retry waterfall (#19821), reconnect loops (#43899), npm tarball `ECONNRESET` (#41283) |
| **TUI/CLI parity with Desktop App** | Medium | Voice transcription (#14630), annotation mode on localhost (#38988), pending question persistence (#43057) |
| **Sandbox / execution reliability** | Medium | Early denial omits `command_execution` in JSON (#47433), destructive actions without approval (#42253) |
| **Session/state bugs** | Medium | Stale writer lock (#38876), "Open in ChatGPT" flashes sidebar (#44681), thinking disclosure stuck collapsed (#43679) |

---

*Digest generated from `github.com/openai/codex` data as of 2026-09-23. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-23

---

## 1. Today's Highlights
- **New model support landed**: The nightly release `v0.62.0-nightly.20260923` adds **Gemini 3.8 Flash** (`gemini-3.8-flash`) and **Gemini 3.5 Flash Lite** (`gemini-3.5-flash-lite`) as the latest GA models in their respective tiers.
- **Security hardening by default**: PR #29458 flips `ui.escapePastedAtSymbols` to `true` by default, preventing accidental `@path` file uploads when pasting shell snippets.
- **Core reliability fixes**: Multiple P1 PRs address cancellation propagation in shell injections, atomic file writes, auth-loop resolution on Windows/WSL, and tool-output memory bounding for long-running agent loops.

---

## 2. Releases
### `v0.62.0-nightly.20260923.g62364cb20` (2026-09-23)
- **Added**: Gemini 3.8 Flash (`gemini-3.8-flash`) and Gemini 3.5 Flash Lite (`gemini-3.5-flash-lite`) as GA models.  
- **Promoted**: `gemini-3.5-flash` → stable Flash tier; `gemini-3.5-flash-lite` → stable Flash Lite tier.  
- **Changelog**: [compare v0.62.0-nightly.20260922…v0.62.0-nightly.20260923](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260922.gd5b3e3acc...v0.62.0-nightly.20260923.g62364cb20)  
- **PR**: [#29443](https://github.com/google-gemini/gemini-cli/pull/29443) (closed, merged)

---

## 3. Hot Issues (Top 10 by community signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Masks real failures; breaks trust in subagent delegation. | 13 comments, 2 👍 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks workflows; workaround is disabling subagents. | 8 comments, 8 👍 — P1, needs retest |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity via zero-dep sandboxing** | Strategic: align CLI with Gemini 3’s native POSIX toolchain strength. | 9 comments, 1 👍 — P2, large effort |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping** | Could cut token waste & turns via precise code navigation. | 7 comments, 1 👍 — P2, epic tracking |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini under-uses skills & sub-agents autonomously** | Reduces value of custom skill investment. | 6 comments — P2, needs retest |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory: deterministic redaction & less logging** | Security: secrets hit model context before redaction. | 5 comments — P2, security |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions forever** | Wastes compute & clutters inbox. | 4 comments — P2 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` overrides (maxTurns)** | Configuration drift; users can’t tune browser agent. | 4 comments — P2 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Blocks Linux/Wayland users from browser automation. | 4 comments, 1 👍 — P1, needs retest |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Hard limit breaks large monorepo setups. | 3 comments — P2, needs info |

---

## 4. Key PR Progress (Top 10 by impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#29443](https://github.com/google-gemini/gemini-cli/pull/29443) | **Feature** | Adds Gemini 3.8 Flash & 3.5 Flash Lite GA models (merged → nightly). |
| [#29458](https://github.com/google-gemini/gemini-cli/pull/29458) | **Security** | Defaults `ui.escapePastedAtSymbols=true` to block accidental `@path` expansion on paste. |
| [#29459](https://github.com/google-gemini/gemini-cli/pull/29459) | **Fix (P1)** | Propagates cancellation signal into `!{...}` shell injections in custom commands. |
| [#29420](https://github.com/google-gemini/gemini-cli/pull/29420) | **Fix (P2)** | Preserves explicit `--model gemini-3-pro-preview` pins; only `auto`/`pro` aliases follow rollout. |
| [#29244](https://github.com/google-gemini/gemini-cli/pull/29244) | **Fix (P1)** | Makes tool file writes atomic & serializes same-path writes to prevent silent edit loss. |
| [#29249](https://github.com/google-gemini/gemini-cli/pull/29249) | **Fix (P1)** | Closes sibling-prefix path-traversal bypass in `get_internal_docs` tool. |
| [#29448](https://github.com/google-gemini/gemini-cli/pull/29448) | **Fix (P1)** | Resolves infinite auth loop on Windows/WSL/headless via file-contention fixes & keyring fallback. |
| [#29451](https://github.com/google-gemini/gemini-cli/pull/29451) | **Fix (P1)** | Bounds tool output size & optimizes memory lifecycle in long agent loops. |
| [#29452](https://github.com/google-gemini/gemini-cli/pull/29452) | **Fix (P1)** | Decouples tool confirmation from IDE diff RPCs to prevent UI freeze in integrated terminals. |
| [#29457](https://github.com/google-gemini/gemini-cli/pull/29457) | **Fix (P1)** | Replaces fuzzy `includes()` with glob matching in `read-many-files` to stop binary assets from being treated as explicitly requested (context-bloat bug). |

---

## 5. Feature Request Trends
1. **Subagent maturity** — Reliable delegation, visible trajectories (`/chat share`), settings compliance, and autonomous skill usage.
2. **Bash-native agentic workflows** — Zero-dependency sandboxing, POSIX tool chaining, and post-execution intent routing (#19873).
3. **AST-aware code navigation** — Precision reads, symbol-level search, and codebase mapping to reduce token spend (#22745, #22746).
4. **Persistent, file-based task tracking** — Replace in-context `WriteToDo` with CRUD task files surviving session resumption (#18836, #21000).
5. **Auto Memory hardening** — Deterministic redaction, bounded retries, and invalid-patch quarantine (#26525, #26522, #26523).
6. **Browser agent robustness** — Wayland support, session takeover/lock recovery, and config override respect (#21983, #22232, #22267).
7. **Tool scaling** — Smarter tool scoping to avoid 128+/400-tool limits (#24246).

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Subagent opacity**: Hangs (#21409), false success reports (#22323), missing context in bug reports (#21763), and ignored configs (#22267).
- **Session durability**: `/compress` not persisting across resume (#21335), auth loops on Windows/WSL (#28341 → #29448), and duplicate history/telemetry (#29248).
- **Context bloat**: Binary assets misclassified as explicit reads (#29457), large file “firehose” reads (#19561), and unbounded tool output memory (#29451).
- **IDE integration friction**: Tool confirmation freezes when IDE diff RPCs block (#23297 → #29452).
- **Platform gaps**: Wayland browser agent failure (#21983), Windows case-sensitivity bugs (#29247), and symlinked agent files not recognized (#20079).
- **Safety guardrails**: Model occasionally runs destructive git/DB commands (#22672) and spawns temp scripts in random locations (#23571).

---

*Generated from `google-gemini/gemini-cli` GitHub data (releases, issues, PRs updated 2026-09-23).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-23

## Today's Highlights
Two patch releases landed in the last 24 hours: **v1.0.89-0** adds support for the new `claude-opus-5.5` model, while **v1.0.88/88-2** improves connector consent UX (copyable auth URLs), enables text selection in bottom-anchored dialogs, adds optional OSC 777 notifications for Ghostty/WezTerm, and preserves `/allow-all` during managed-settings refresh failures. Meanwhile, the issue tracker shows a cluster of critical stability bugs—session wedging, compaction OOMs, auth token staleness, and config corruption under concurrency—that are blocking long-running workflows.

## Releases
| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.89-0** | 2026-09-23 | **Added**: `claude-opus-5.5` model support. |
| **v1.0.88** | 2026-09-22 | **Improved**: Managed Connector consent now shows a copyable authorization URL during connect/reconnect. Optional OSC 777 terminal notifications for direct Ghostty/WezTerm sessions. Text selection works in bottom-anchored dialogs (including login device codes). Preserves `/allow-all` during managed-settings refresh failures; remembers exact session approvals for missing paths. |
| **v1.0.88-2** | 2026-09-22 | **Fixed**: Text selection in bottom-anchored dialogs (regression fix). |

## Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4438](https://github.com/github/copilot-cli/issues/4438) | `disable-model-invocation: true` makes a skill unreachable, not manual-only | Skills marked manual-only become completely invisible to the model’s `skill()` tool, breaking explicit invocation workflows. | 7 comments, 9 👍 — high impact for skill authors. |
| [#4755](https://github.com/github/copilot-cli/issues/4755) | Session wedges permanently when a queued-lane message lands at turn end | Session enters a zombie state (neither idle nor running), accepts no input, requires process kill. | 3 comments — data-loss risk for long sessions. |
| [#4780](https://github.com/github/copilot-cli/issues/4780) | Session compaction OOMs and never completes, leaving session permanently unresumable | Compaction triggers heap exhaustion (~4.3 GB cap); every `--resume` re-enters crash loop. | 3 comments, 3 👍 — blocks recovery of long contexts. |
| [#4639](https://github.com/github/copilot-cli/issues/4639) | Event-storage exhaustion retry storm drives session into GC/compaction loop and Node OOM | Remote storage exhaustion causes unbounded 500-event flush retries, forced GC, thousands of bridge acks. | 3 comments — resource leak under back-pressure. |
| [#4900](https://github.com/github/copilot-cli/issues/4900) | `config.json` `trustedFolders` (and other managed state) lost when concurrent sessions overwrite on exit | Each session holds in-memory copy; last writer wins, silently dropping concurrent changes. | 2 comments — silent config corruption. |
| [#4602](https://github.com/github/copilot-cli/issues/4602) | `store_memory` fails, all MCP servers stripped — managedSettings fails closed on serverFetchFailed flap | Transient server fetch failure cascades: memory tool breaks, MCP servers disappear for entire session. | 2 comments — enterprise/reliability blocker. |
| [#4929](https://github.com/github/copilot-cli/issues/4929) | Process-local auth token stops refreshing; all prompts fail until restart | Long-running process permanently loses auth; `/login` doesn’t recover; only restart works. | 2 comments — forces disruptive restarts. |
| [#4556](https://github.com/github/copilot-cli/issues/4556) | Server-managed `extraKnownMarketplaces` fetched but never registers a marketplace | Marketplace config parses correctly but never merges into plugin code path; only defaults appear. | 4 comments, 2 👍 — breaks custom marketplace discovery. |
| [#4663](https://github.com/github/copilot-cli/issues/4663) | Failed compaction retried unchanged on every turn: unbounded billed retries, monotonic context growth | Compaction failure re-issued every turn with no backoff/fallback; each retry is a billed call. | 2 comments — cost & context explosion. |
| [#4946](https://github.com/github/copilot-cli/issues/4946) | HTTP 400 `content[].thinking` after a background shell completion notification | Background shell completion delivers `system.notification` at start of new turn, triggers 400 on thinking block. | 1 comment, filed today — new regression in v1.0.88+. |

## Key PR Progress
| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#4770](https://github.com/github/copilot-cli/pull/4770) | Document the WebSocket responses opt-out | OPEN | Documents the `COPILOT_WEBSOCKET_RESPONSES=0` escape hatch for models that advertise WebSocket transport but hit network blocks or `400 input item ID does not belong to this connection` errors. |

*Note: Only one PR updated in the last 24h.*

## Feature Request Trends
1. **Custom model endpoints** ([#4003](https://github.com/github/copilot-cli/issues/4003)) — parity with VS Code’s Language Models panel for local/private models (3 comments).
2. **AutoPilot pause-for-confirmation** ([#3595](https://github.com/github/copilot-cli/issues/3595)) — interactive approval gate in autonomous mode for code-review workflows (2 comments, 2 👍).
3. **BYOK thinking-token visibility** ([#3736](https://github.com/github/copilot-cli/issues/3736)) — expose reasoning traces for custom endpoints (closed, but recurring theme).
4. **Light-theme accessibility** ([#3750](https://github.com/github/copilot-cli/issues/3750)) — remove hardcoded dark colors (closed, 2 👍).
5. **File reference `@` CWD support** ([#3092](https://github.com/github/copilot-cli/issues/3092)) — show current-directory files (closed).

## Developer Pain Points
| Area | Recurring Frustration | Representative Issues |
|------|----------------------|----------------------|
| **Session stability** | Long-running sessions wedge, OOM on compaction, auth tokens stale, config corruption under concurrency | #4755, #4780, #4639, #4929, #4900 |
| **Managed settings / enterprise** | Server-side config fetches fail closed, stripping MCP servers & breaking `store_memory`; marketplace registration silent failure | #4602, #4556 |
| **Compaction reliability** | Failures retry unboundedly (billed), no backoff/fallback, custom-model tool-choice errors | #4663, #4646 |
| **Permission UX** | Edit-permission timeouts overnight; AutoPilot lacks pause-for-approval | #4486, #3595 |
| **Background agent / queue handling** | Messages stranded in “Queued” UI; queued-lane messages at turn end wedge session | #3344 (closed), #4755 |
| **Platform-specific perf** | macOS `tls.getCACertificates("system")` adds 5+ s/call (mitigated) | #3330 (closed) |
| **Cloud agent / MCP** | Playwright MCP session closed immediately; Azure MCP registry validation broken | #4931, #4851 (5 👍) |

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-23

## 1. Today's Highlights
The Python-based `kimi-cli` package has been officially archived with v1.52.0, which now serves solely as a migration shim pointing users to the new TypeScript-based **Kimi Code CLI**. This marks the completion of the language runtime transition. Meanwhile, a WebKit IME composition guard was merged to prevent premature form submission during CJK input, and OpenCode Go compatibility was improved via the `x-opencode-session` header.

## 2. Releases
### v1.52.0 — Migration Release
- **Change**: `kimi-cli` entry point now short-circuits to the Kimi Code installer (TypeScript successor).
- **Context**: Complements #2659 which archived the repo and tombstoned the `kimi-code` PyPI package.
- **Action required**: Users installing via `uv tool install kimi-cli` will be redirected to the new CLI.
- [Full Changelog](https://github.com/MoonshotAI/kimi-cli/compare/1.51.0...1.52.0) | [PR #2666](https://github.com/MoonshotAI/kimi-cli/pull/2666)

## 3. Hot Issues
| Issue | Status | Why It Matters | Community Signal |
|-------|--------|----------------|------------------|
| [#2336](https://github.com/MoonshotAI/kimi-cli/issues/2336) Session corruption under memory pressure: lost conversation + 400 `tool_call` error on resume | **OPEN** (since May 21) | Critical data-loss bug: long sessions under memory pressure corrupt state, breaking resume with a 400 on `tool_call`. Affects reliability for extended coding tasks. | 2 comments, 0 👍 — low visibility but high severity |
| [#1547](https://github.com/MoonshotAI/kimi-cli/issues/1547) Repeated "Authorization failed" mid-generation | **CLOSED** (updated today) | Intermittent auth failures during streaming generation disrupted workflows. Closure suggests fix landed in newer versions (reporter was on v1.24.0). | 0 comments — likely resolved by auth/token refresh improvements in later releases |

## 4. Key PR Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#2666](https://github.com/MoonshotAI/kimi-cli/pull/2666) `feat(cli): short-circuit entry points to a Kimi Code installer` | **MERGED** | v1.52.0 release: Python package becomes a thin wrapper invoking the TypeScript CLI installer. | **Migration complete** — end of Python CLI lifecycle. |
| [#2667](https://github.com/MoonshotAI/kimi-cli/pull/2667) `fix(web): guard IME composition Enter keydowns` | **MERGED** | Adds WebKit-compatible guard (`keyCode === 229` + `isComposing` check) in `PromptInputTextarea` to prevent submitting incomplete CJK composition. | Fixes IME input regression for Chinese/Japanese/Korean users on WebKit-based frontends. |
| [#2656](https://github.com/MoonshotAI/kimi-cli/pull/2656) `fix(llm): send x-opencode-session for OpenCode Go hosts` | **OPEN** | Detects `opencode.ai` / `*.opencode.ai` hosts and sends stable `x-opencode-session` header (current Kimi session ID) for `openai_legacy` compatible endpoints. Resolves #2653 (400 errors). | Unblocks OpenCode Go integration; required for session continuity. |
| [#2664](https://github.com/MoonshotAI/kimi-cli/pull/2664) `chore(deps): bump agent-client-protocol 0.8.0 → 0.12.1` | **OPEN** (Dependabot) | Major ACP SDK upgrade (0.8 → 0.12). Includes protocol changes, new message types, and breaking API shifts. | **High risk** — needs thorough testing; may affect agent interop. |
| [#884](https://github.com/MoonshotAI/kimi-cli/pull/884) `chore(deps-dev): bump ruff 0.14.14 → 0.15.0` | **OPEN** (Dependabot, stale) | Linter upgrade; includes new rules and fixes. Low priority given archived status. | Maintenance only; unlikely to be merged. |

## 5. Feature Request Trends
> **No new feature issues in the last 24h.** Historical patterns (from archived repo) show demand for:
- **Multi-session / workspace isolation** — run parallel coding tasks without context bleed.
- **Better token/usage accounting** — real-time cost tracking per session.
- **Plugin/extension API** — community tooling around the agent loop.
- **Offline/local model support** — run without cloud dependency.

With the repo archived, new feature requests should target the **TypeScript Kimi Code CLI** repository.

## 6. Developer Pain Points
| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Session state loss / corruption** | High (critical) | #2336: memory pressure → lost conversation + 400 on resume; blocks long-running tasks. |
| **Auth instability during streaming** | Medium (resolved?) | #1547: "Authorization failed" mid-generation; closed but root cause unclear. |
| **IME/input method regressions** | Medium | #2667: WebKit Enter keydown during CJK composition submitted partial text. |
| **Third-party host compatibility (OpenCode Go)** | Medium | #2656: 400 errors without `x-opencode-session` header; fix in review. |
| **Dependency drift (ACP SDK major bump)** | Low (latent) | #2664: 0.8 → 0.12 is breaking; archived repo may not absorb it. |

---

**Bottom line**: The Python `kimi-cli` is end-of-life. All engineering focus has shifted to the TypeScript **Kimi Code CLI**. Developers should migrate immediately via `uv tool install kimi-cli` (now a redirector) or install the new CLI directly. Outstanding bugs in the archived codebase (#2336, #2656) are unlikely to receive fixes unless backported to the successor.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-23

## 1. Today's Highlights
No new releases shipped today. The issue tracker shows **active regression fallout from the V2 migration** — notably a Go usage-limit cascade (#49014), stale compaction state propagating to handoffs (#50816), and subagent permission drops leaving parent sessions stuck busy (#44747). On the PR side, Windows upgrade reliability (#50819) and server health-probe preservation (#50824) are the standout fixes landing today.

---

## 2. Releases
*No releases published in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#49014](https://github.com/anomalyco/opencode/issues/49014)** Go: 5-hour usage limit blocks *all* models after one model hits its limit | A single model hitting its quota poisons the entire Go model catalog — switching models doesn’t recover. Blocks paid Go users completely. | 8 comments, 0 👍 — active debugging thread; users report total work stoppage. |
| **[#17471](https://github.com/anomalyco/opencode/issues/17471)** Auto-continue on `finish_reason: "length"` | Critical for large-context models (Opus 4.6, 1M input). Without auto-continue, long generations silently truncate. | 5 comments, **13 👍** — highest upvote count; strong demand for seamless long-output handling. |
| **[#36117](https://github.com/anomalyco/opencode/issues/36117)** Server: await catalog readiness for model/provider reads | Post-restart, catalog endpoints return incomplete snapshots while plugins activate, causing TUI model-picker delays/thousands of unready entries. | 5 comments, 1 👍 — affects every managed-service restart; UX regression. |
| **[#44747](https://github.com/anomalyco/opencode/issues/44747)** Subagent permission request silently dropped → parent stuck `busy` forever | Subagent `external_directory` permission requests never reach UI/API; parent session hangs indefinitely, survives client restart. | 4 comments, 1 👍 — **data-loss risk**; “stop/interrupt are no-ops.” |
| **[#50201](https://github.com/anomalyco/opencode/issues/50201)** OpenCode account lost in dashboard migration | Paid Go workspace disappeared after Console migration; new empty org created, subscription/invoices gone. | 4 comments, **4 👍** — billing/account integrity issue; multiple users affected. |
| **[#50816](https://github.com/anomalyco/opencode/issues/50816)** Compaction summary reports stale Work State (completed ~19h earlier) | Auto-compaction injects false active/pending state into handoffs; agent hallucinates unfinished work and re-executes. | 2 comments — **silent correctness bug**; undermines trust in session continuity. |
| **[#50650](https://github.com/anomalyco/opencode/issues/50650)** Desktop: custom provider save always throws `provider.custom.unavailable` | Custom OpenAI-compatible provider form is exposed but save handler unconditionally fails — feature completely broken on all servers. | 2 comments — regression in desktop settings; blocks BYO-provider workflows. |
| **[#50598](https://github.com/anomalyco/opencode/issues/50598)** Agents: V2 markdown frontmatter `permissions` parsed but never applied | Custom agent `permissions:` allow/deny rules ignored; subagents inherit default allow-all. Security boundary bypass. | 2 comments — **permission system regression** in 2.0.12. |
| **[#50809](https://github.com/anomalyco/opencode/issues/50809)** Web UI stays on “Working” indefinitely; TUI works | Browser UI hangs on all providers (OpenAI, DeepSeek); TUI on same backend succeeds. Frontend-specific regression. | 1 comment — blocks web users entirely. |
| **[#50806](https://github.com/anomalyco/opencode/issues/50806)** Subagent: custom agent spawn fails with “free tier can only be used from within OpenCode” | Free-tier users cannot spawn custom subagents at all — child session never starts. | 1 comment — **tier-enforcement bug** blocking core agent composition feature. |

---

## 4. Key PR Progress (Top 10 by Impact)

| PR | Type | Summary |
|----|------|---------|
| **[#50824](https://github.com/anomalyco/opencode/pull/50824)** | Bug fix | **Preserve historical service health probes** — prevents TUI from terminating a healthy new background server on reconnect after `/api/status` → `/api/info` rename. |
| **[#50819](https://github.com/anomalyco/opencode/pull/50819)** | Bug fix | **Windows upgrade/uninstall no longer fights running binary** — fixes 5-min hang + “Failed to update with bun” by deferring file replacement until process exit. |
| **[#50742](https://github.com/anomalyco/opencode/pull/50742)** | Dependency | **Bump `gitlab-ai-provider` to 6.16.0** (adds Claude Opus 5.5) — merged to `dev`. |
| **[#50802](https://github.com/anomalyco/opencode/pull/50802)** | Bug fix | **Codemode parity fixes**: coerce non-regex `match`/`search` args, allow any `for...in` target, bind last duplicate parameter — matches JS semantics. |
| **[#50318](https://github.com/anomalyco/opencode/pull/50318)** | Dependency | **Bump `gitlab-ai-provider` 6.12.1 → 6.16.0** on main (includes Opus 5.5). |
| **[#50515](https://github.com/anomalyco/opencode/pull/50515)** | Bug fix | **Flush missed parts when `run` goes idle** — fixes intermittent empty output in non-interactive `opencode run` (#50514). |
| **[#50813](https://github.com/anomalyco/opencode/pull/50813)** | Bug fix | **Instant grouped tooltip handoffs** — eliminates repeated fade/hover delay when moving between nearby model/attachment tooltips. |
| **[#50572](https://github.com/anomalyco/opencode/pull/50572)** | Feature | **Space Bunny promotion** — anonymous Go upsell banner across web, docs, localized content. |
| **[#50162](https://github.com/anomalyco/opencode/pull/50162)** | Bug fix | **LSP `workspace/symbol` no longer swallows errors** — was returning `[]` for all queries due to caught exception. |
| **[#50810](https://github.com/anomalyco/opencode/pull/50810)** | Bug fix | **Retain MCP timeout entries** during V2→V1 config normalization — preserves per-server and global numeric timeouts. |

---

## 5. Feature Request Trends
From the issue stream, three clear directions dominate community asks:

1. **Session Continuity & Recovery** — Auto-continue on token limits (#17471, 13 👍), always-visible Continue button (#50663), stale compaction state (#50816). Users want *uninterrupted* long-running agentic workflows.
2. **Subagent First-Class Support** — Permission propagation (#44747, #50598, #50149), model visibility (#50798), free-tier unblocking (#50806). Subagents are treated as second-class; parity gaps are piling up.
3. **Desktop/Web Parity & Polish** — Custom provider save broken (#50650), Web UI hang (#50809), Ctrl+O on Windows (#49159), font-family input (#48259), review-pane tabs (#50803). Desktop/Web lag behind TUI in reliability and UX.

*Secondary signals*: i18n/Simplified Chinese (#50820), multi-checkout git handling (#50821), V1→V2 migration completeness (#50800).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **V2 migration regressions** | Stale compaction state (#50816), missing V1 sessions in non-git dirs (#50800), permission rules ignored (#50598), subagent model visibility (#50798), catalog readiness (#36117). |
| **Go quota cascade failure** | One model’s limit blocks *all* models (#49014) — no isolation, no fallback. |
| **Subagent fragility** | Permission drops (#44747), free-tier block (#50806), global deny wins over agent allow (#50149), background job loss on restart (#50774). |
| **Windows desktop reliability** | Upgrade hangs (#50819), Ctrl+O broken for screen readers (#49159), relaunch crash (0x80000003, #50817). |
| **Billing/account opacity** | Migration loses paid workspace (#50201), Console shows “Subscribe” despite active invoice (#50804), credits not applied (#50812). |
| **Silent failures** | Empty `run` output (#50515), LSP symbol returns `[]` on error (#50162), Web UI “Working” forever (#50809), custom provider save throws generic error (#50650). |
| **Config drift** | MCP timeouts lost in normalization (#50810), V1/V2 project resolution mismatch (#50821). |

---

*Digest compiled from GitHub data as of 2026-09-23 00:00 UTC. All links point to anomalyco/opencode.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-23

## Today's Highlights
Pi v0.87.1 ships with the latest frontier models—Claude Opus 5.5, GPT-6 Sol, GPT-6 Luna, and Grok 4.7 as the new default—available across supported providers including GitHub Copilot. The community is actively triaging a 0.86.x regression causing mid-stream `APIConnectionError` on longer requests via LiteLLM/OpenAI-compatible proxies, while multiple fixes landed for Anthropic Fable compaction refusals, Codex empty-answer replays, and TUI cursor/scrolling regressions.

---

## Releases
### v0.87.1 — Frontier Model Support
- **New models**: Claude Opus 5.5, GPT-6 Sol, GPT-6 Luna now selectable via `Choose a Model` docs.
- **Default changed**: Grok 4.7 is now the default model.
- **Provider coverage**: Works with all supported providers including GitHub Copilot.
- **Release link**: [v0.87.1](https://github.com/earendil-works/pi/releases/tag/v0.87.1)

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Status | Reaction |
|---|-------|----------------|--------|----------|
| [#7885](https://github.com/earendil-works/pi/issues/7885) | npm search not indexing newly published pi-packages | Blocks package discovery on pi.dev/packages; 49/50 packages mirror npm search. Root cause: `pi-affix-prompt` published but invisible to `npm search`. | CLOSED | 13 comments |
| [#9843](https://github.com/earendil-works/pi/issues/9843) | **0.86.x regression**: mid-stream `APIConnectionError` on longer requests via LiteLLM proxy | Affects both TUI and Pendant (VS Code) on Windows; blocks users on custom OpenAI-compatible providers. Regression from 0.85.1. | OPEN | 10 comments |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | Fullscreen mode wheel scrolling 3× slower than regular mode | UX regression: fixed input box is great but scroll performance makes fullscreen unusable for long sessions. | CLOSED | 10 comments, 6👍 |
| [#9652](https://github.com/earendil-works/pi/issues/9652) | Compaction refused by Anthropic Claude Fable (transcribed thinking blocks) | `/compact` fails because `serializeConversation` includes thinking blocks that Anthropic's `reasoning_extraction` classifier rejects. | CLOSED | 7 comments, 2👍 |
| [#9690](https://github.com/earendil-works/pi/issues/9690) | OpenCode Zen rejects Pi session IDs | Pi-generated `x-opencode-session` headers not recognized; breaks built-in OpenCode provider integration. | CLOSED | 6 comments, 2👍 |
| [#9884](https://github.com/earendil-works/pi/issues/9884) | Configured default model sometimes replaced by fallback at startup | Race condition: extension-registered provider catalog (gateway-discovered) loses to built-in fallback (`deepseek-v4-pro`) in ~20% of startups. | OPEN | 4 comments |
| [#9858](https://github.com/earendil-works/pi/issues/9858) | Ollama models unrecognized after 0.86.0/0.87.0 upgrade | File paths/editing rejected despite correct project directory; rollback to 0.85.1 works. Suggests tool-call or context regression. | CLOSED | 3 comments |
| [#9930](https://github.com/earendil-works/pi/issues/9930) | session-manager: metadata entry becomes leaf → silent transcript truncation | Data-loss risk: `session_info` as last line causes transcript to truncate on resume. AI-drafted but human-verified. | CLOSED | 3 comments |
| [#9759](https://github.com/earendil-works/pi/issues/9759) | `node-domexception` deprecation warning on every install | Transitive via `@google/genai`; pollutes CI logs and developer terminals. | CLOSED | 3 comments |
| [#9852](https://github.com/earendil-works/pi/issues/9852) | `openai-responses`: function_call name not sanitized → 400 on MCP-style names (`mcp:server:tool`) | Blocks MCP tool usage via OpenAI Responses adapter; tool names with `:` violate API regex `^[a-zA-Z0-9_-]+$`. | OPEN | 2 comments |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Summary | Link |
|---|----|---------|------|
| 1 | **#9937** | Responsive grid for startup extension labels; reflows on terminal resize. | [PR #9937](https://github.com/earendil-works/pi/pull/9937) |
| 2 | **#9934** | New built-in **Yolo-Auto** provider: OpenAI-compatible gateway with plan-bounded `/v1/models` auto-discovery (serves `qwen3.8-flash`, `yolo`, `yolo-small`). | [PR #9934](https://github.com/earendil-works/pi/pull/9934) |
| 3 | **#9569** | `validateToolArguments` now coerces JSON-encoded string → object/array for nested params (fixes double-encoding from vLLM/LiteLLM at high temp). | [PR #9569](https://github.com/earendil-works/pi/pull/9569) |
| 4 | **#9570** | Maps Gemini `TOO_MANY_TOOL_CALLS` finish reason to error stop reason (exhaustive switch fix for `@google/genai@2.21.0`). | [PR #9570](https://github.com/earendil-works/pi/pull/9570) |
| 5 | **#9889** | Unified manifest/resource discovery pipeline; supports dot-relative globs/exclusions for direct & package-managed loading. | [PR #9889](https://github.com/earendil-works/pi/pull/9889) |
| 6 | **#9908** | **Fixes #9652**: Separates conversation content from instructions in compaction prompt; uses continuation-oriented wording to avoid Fable refusals. | [PR #9908](https://github.com/earendil-works/pi/pull/9908) |
| 7 | **#9926** | Custom provider display names in `models.json` (`"providers": { "openai": { "name": "foobar" } }`); shown in status bar. | [PR #9926](https://github.com/earendil-works/pi/pull/9926) |
| 8 | **#9924** | **Fixes #9925**: Respects `showHardwareCursor: true`; stops forcing block cursor (e.g., Kitty `cursor_shape beam` now honored). | [PR #9924](https://github.com/earendil-works/pi/pull/9924) |
| 9 | **#9921** | New `enableShareCommand` setting (default `true`); set `false` in settings.json to hide `/share` from autocomplete & error on invoke. | [PR #9921](https://github.com/earendil-works/pi/pull/9921) |
| 10 | **#9920** | **Fixes #9918**: Omits empty Codex final answers from replay; cleans orphaned reasoning & WebSocket continuation state. | [PR #9920](https://github.com/earendil-works/pi/pull/9920) |

---

## Feature Request Trends
1. **Provider UX polish** — Custom display names (#9927, #9926), Yolo-Auto gateway with auto-discovery (#9934), remote catalog overlay persistence (#9922).
2. **Extension lifecycle hooks** — Uninstall cleanup hooks requested in #5024 and #9919; loadout management (enable/disable extensions mid-session) in PR #7148.
3. **Skills & tooling visibility** — Skills manifest incorrectly gated on `read`/`bash` tool presence (#9874); `@` file-chooser paths sent literally to model (#9923).
4. **Theme/color system overhaul** — PR #8398 exposes color values directly for agent-driven styling and non-terminal UIs.
5. **Session/state resilience** — Session ID compatibility (OpenCode #9690), transcript integrity (#9930), model config persistence (#9884).

---

## Developer Pain Points (Recurring)
- **Provider/proxy instability**: 0.86.x broke LiteLLM/OpenAI-compatible streams on long requests (#9843); MCP tool names rejected by OpenAI Responses (#9852).
- **Model management friction**: Default model fallback race (#9884), remote catalog lost on provider recomposition (#9922), Ollama regressions post-0.85 (#9858).
- **TUI regressions**: Fullscreen scroll 3× slower (#9052), dialog bodies push options off-screen (#9933), forced block cursor (#9925).
- **Session integrity**: Silent transcript truncation (#9930), Codex empty-answer replay (#9918), compaction refusals (#9652).
- **Tool-call parsing**: Double-encoded nested args from vLLM/LiteLLM (#9569, #9931), blank tool-call names from some models (#9907).
- **Dependency noise**: `node-domexception` deprecation spam on every install (#9759).
- **Packaging issues**: `pi package remove` fails on relative local paths (#9913), npm search doesn't index new pi-packages (#7885).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-23

## 1. Today's Highlights
Qwen Code shipped five releases in 24 hours (v0.24.5-preview.0, v0.24.4, two nightlies, and Desktop v0.24.4), focusing on deferred-tool bridge fixes, a new `monitor` tool in system prompts, and review-coverage accuracy. The daemon and Web Shell saw rapid iteration: permission-queue serialization, channel-restore logic, batch session snapshots, and worktree management in the Git dialog. Clipboard reliability on Linux/WSL remains a hot topic with two follow-up issues filed after an initial fix.

## 2. Releases
| Version | Key Changes |
|---------|-------------|
| **v0.24.5-preview.0** | Fix deferred-tool bridge staleness; docs updates for plans |
| **v0.24.4** | `feat(core)`: add `monitor` tool to system prompt guidance ([#12408](https://github.com/QwenLM/qwen-code/pull/12408)); `feat(daemon)`: batched workspace operations; `fix(review)`: exclude unplanned chunks from coverage |
| **v0.24.4-nightly.20260922** | Same as v0.24.4 plus deferred-tool bridge fix |
| **v0.24.3-nightly.20260922** | `monitor` tool guidance; batched workspace daemon work |
| **desktop-v0.24.4** | Desktop build aligning with v0.24.4 CLI changes |

> **No breaking changes** reported across any release.

## 3. Hot Issues (10 Noteworthy)

| Issue | Priority | Status | Why It Matters |
|-------|----------|--------|----------------|
| [#11795](https://github.com/QwenLM/qwen-code/issues/11795) Permission queue keyed on ACP connection | P1 | OPEN | One idle session’s unanswered prompt blocks **all** sessions on the daemon — silent, indefinite deadlock. Fix 3 (serialization) in [#11802](https://github.com/QwenLM/qwen-code/pull/11802); fixes 2, 4, 5 still open. |
| [#12505](https://github.com/QwenLM/qwen-code/issues/12505) Clipboard image paste silent failures (tool found but query fails / native module throws / OpenTUI) | P2 | OPEN | Follow-up to [#12488](https://github.com/QwenLM/qwen-code/issues/12488); three code paths still swallow paste errors. Critical for Linux/WSL daily drivers. |
| [#12514](https://github.com/QwenLM/qwen-code/issues/12514) Session-commit registration gaps (false “not made by agent” amend block) | P2 | OPEN | Auto-mode `git commit --amend` guard misses commit paths/spellings; flagged in review threads on [#12463](https://github.com/QwenLM/qwen-code/pull/12463). |
| [#12432](https://github.com/QwenLM/qwen-code/issues/12432) Late-registration channel restore: visibility, isolation, stopped-channel memory | P2 | OPEN | Deliberately split from [#12396](https://github.com/QwenLM/qwen-code/pull/12396); needs contract decisions on failure surfacing, per-name isolation, and persisted stopped-channel state. |
| [#12512](https://github.com/QwenLM/qwen-code/issues/12512) Channels: split access control into admission / speaker / operator layers | P2 | OPEN | Redesigns shared-session operator rule left inconsistent by [#12475](https://github.com/QwenLM/qwen-code/pull/12475); adds explicit `operators` list. |
| [#12257](https://github.com/QwenLM/qwen-code/issues/12257) Local notes-based compaction & session history recovery | P2 | OPEN | Opt-in strategy to continue long tasks across context windows via working checkpoints + on-demand history replay. High community interest (roadmap/context-performance). |
| [#12511](https://github.com/QwenLM/qwen-code/issues/12511) Batch workspace session live-state snapshots | P3 | OPEN | New read-only daemon API + TS SDK method to fetch authoritative live snapshots for 1–20 workspaces in one request. PR [#12513](https://github.com/QwenLM/qwen-code/pull/12513) opened same day. |
| [#12164](https://github.com/QwenLM/qwen-code/issues/12164) Web Shell as browser Live Host for realtime voice | P2 | CLOSED | Enables realtime voice (`qwen3.5-omni-plus-realtime`) from any browser without native Mac app. Moved to implementation. |
| [#12240](https://github.com/QwenLM/qwen-code/issues/12240) Publish Chrome extension to Chrome Web Store with release workflow | P2 | CLOSED | Automates extension distribution; workflow triggers on release/manual dispatch. |
| [#12486](https://github.com/QwenLM/qwen-code/issues/12486) Main CI failure (Lint & Static, VS Code extension check) | — | CLOSED | Bot-tracked CI failure on `main`; resolved in subsequent runs. |

## 4. Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| [#12466](https://github.com/QwenLM/qwen-code/pull/12466) | feat | Web Shell: session-scoped **Tool Calls panel** opened from a user message — prompt selector, refresh, tool-type filter, localized names, MCP badges, timing, JSON args/results on expand. |
| [#12517](https://github.com/QwenLM/qwen-code/pull/12517) | feat | Core: every tool call now records `startedAt` (optional ISO timestamp); paged transcript replay surfaces it as frame `startedAt`. Previously only request frames had start times. |
| [#12154](https://github.com/QwenLM/qwen-code/pull/12154) | feat | Web Shell Git dialog: new **Worktrees tab** listing all worktrees with badges (main, current, locked, missing), branch/HEAD, short SHA, and actions (add/remove/prune). |
| [#12515](https://github.com/QwenLM/qwen-code/pull/12515) | fix | Channels: single operator rule for shared sessions + explicit `operators` list; covers `/approve`, `/deny`, `/cancel`, `/clear`, `/who`, `/status`, `/leave`. |
| [#12513](https://github.com/QwenLM/qwen-code/pull/12513) | feat | Serve: `POST /batch-session-snapshots` — returns live snapshots for 1–20 explicitly selected workspaces; each retains canonical identity, catalog version, independent success/error. |
| [#12492](https://github.com/QwenLM/qwen-code/pull/12492) | feat | CLI: **agent-prepared Batch API workflow** (`/batch-api <task>`). Agent judges task fit, prepares requests, submits, polls, fetches, and aggregates results. |
| [#12455](https://github.com/QwenLM/qwen-code/pull/12455) | feat | CUA: unify App workflows across macOS/Windows/Linux for SDK 0.20.11 — stable short numeric element IDs, focus management, window/dialog tracking. |
| [#12360](https://github.com/QwenLM/qwen-code/pull/12360) | fix | Core: simplify system prompts — consolidate overlapping conventions, tone, tool-use, interaction guidance; reduce five tool-call examples to one each; remove headless-inappropriate follow-up questions. |
| [#12183](https://github.com/QwenLM/qwen-code/pull/12183) | feat | Extensions: `--managed-extensions <root>` discovers complete extensions in direct child dirs, reads contributions in-place, works with fresh user home; deployment-managed contents. |
| [#12463](https://github.com/QwenLM/qwen-code/pull/12463) | fix | Core: wire producer half of session-commit registry for Auto-mode `git commit --amend` guard + documented teardown. Addresses `registerSessionCommit`, `unregisterSessionCommit`, `isSessionCommit`. |

## 5. Feature Request Trends
1. **Session persistence & continuity** — Notes-based compaction ([#12257](https://github.com/QwenLM/qwen-code/issues/12257)), Goal runtime slimming ([#12053](https://github.com/QwenLM/qwen-code/issues/12053)), batch snapshots ([#12511](https://github.com/QwenLM/qwen-code/issues/12511)).
2. **Multi-session / multi-workspace daemon ergonomics** — Permission queue isolation ([#11795](https://github.com/QwenLM/qwen-code/issues/11795)), channel restore semantics ([#12432](https://github.com/QwenLM/qwen-code/issues/12432)), operator-layer access control ([#12512](https://github.com/QwenLM/qwen-code/issues/12512)).
3. **Platform distribution automation** — Chrome Web Store workflow ([#12240](https://github.com/QwenLM/qwen-code/issues/12240)), managed extensions directory ([#12183](https://github.com/QwenLM/qwen-code/pull/12183)).
4. **Realtime / voice integration** — Web Shell as Live Host ([#12164](https://github.com/QwenLM/qwen-code/issues/12164)), batch API for async workloads ([#12492](https://github.com/QwenLM/qwen-code/pull/12492)).
5. **Observability & debugging** — Tool-call inspection panel ([#12466](https://github.com/QwenLM/qwen-code/pull/12466)), tool-call start timestamps ([#12517](https://github.com/QwenLM/qwen-code/pull/12517)), background-agent exposure ([#10954](https://github.com/QwenLM/qwen-code/pull/10954)).

## 6. Developer Pain Points
- **Clipboard on Linux/WSL** — Two issues ([#12488](https://github.com/QwenLM/qwen-code/issues/12488), [#12505](https://github.com/QwenLM/qwen-code/issues/12505)) in 24 h: missing `wl-paste`/`xclip` swallows `Ctrl+V` silently; even when tools exist, query failures, native-module throws, and OpenTUI renderer paths produce zero feedback.
- **Daemon-wide permission queue blocking** — Single idle session’s prompt freezes every other session ([#11795](https://github.com/QwenLM/qwen-code/issues/11795)); partial fix merged, but visibility, TTL, and intra-session caveats remain.
- **Session-commit tracking gaps** — Amend guard misses legitimate agent commits due to incomplete registration ([#12514](https://github.com/QwenLM/qwen-code/issues/12514)), causing false “not made by agent” blocks.
- **Mobile Web Shell composer** — Soft keyboard overlaps controls; PR [#12462](https://github.com/QwenLM/qwen-code/pull/12462) addresses height measurement and wrapping.
- **CI flakiness** — Bot-tracked main-branch failure ([#12486](https://github.com/QwenLM/qwen-code/issues/12486)) in VS Code extension lint step; indicates release-pipeline brittleness.

---

*Generated from github.com/QwenLM/qwen-code data as of 2026-09-23. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (Codewhale) Community Digest — 2026-09-23

---

## 1. Today's Highlights

The project has officially rebranded from **DeepSeek TUI** to **Codewhale** (Shannon Labs' public product), with v0.10.0 marking the first release under the new identity. The legacy `deepseek-tui` npm package is deprecated. Development velocity remains high: 42 issues and 13 PRs updated in the last 24 hours, focused on architectural refactoring (mega-file decomposition, MCP client consolidation, config unification), agent/fleet system redesign, and runtime performance instrumentation.

---

## 2. Releases

### **v0.10.0** — *Codewhale rebrand & legacy deprecation*
- **Product rename**: `deepseek-tui` → `codewhale` (binary, npm package, release assets all lowercase)
- **Breaking**: Legacy `deepseek-tui` npm package receives no further updates; users on v0.8.x must migrate
- **Links**: [Release v0.10.0](https://github.com/Hmbown/Codewhale/releases/tag/v0.10.0)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#6011](https://github.com/Hmbown/Codewhale/issues/6011) | **Token accounting & tool-call diagnostics** (per-component, per-model, cache hit rate, compaction cost) | Core observability for cost/performance tuning; part of Core Execution Plan C11 | 9 comments, active design discussion |
| [#5586](https://github.com/Hmbown/Codewhale/issues/5586) | **Decompose mega-files**: `lib.rs` (18.7k), `config.rs` (12.3k), `client.rs` (11.1k), `runtime_threads.rs` (9.3k) | Critical maintainability blocker; enables parallel workstreams | 8 comments, founder-owned (C09) |
| [#6050](https://github.com/Hmbown/Codewhale/issues/6050) | **Pluggable agent memory** — generic backend seam (causal-memory, mem0 refs) | Unlocks external memory providers; currently hardcoded `Native`/`Off` only | 6 comments, external contributor (`idling11`) |
| [#6142](https://github.com/Hmbown/Codewhale/issues/6142) | **Reconcile two MCP client stacks** (`tui/src/mcp` vs `crates/mcp`) | Duplicate ~17.7k lines; app-server and engine use different stacks | 5 comments, from 0.9.14 refactor backlog |
| [#2342](https://github.com/Hmbown/Codewhale/issues/2342) | **Clickable file references in output** → open preview | High-impact UX for code navigation; long-standing request (May 2026) | 5 comments, 👍 1 |
| [#6036](https://github.com/Hmbown/Codewhale/issues/6036) | **Fleet vs Agent duplication** — same concept stored twice, mixed roles/model pins | Data model confusion affecting sub-agent routing; founder-acknowledged | 5 comments |
| [#6086](https://github.com/Hmbown/Codewhale/issues/6086) | **Session scratchpad + unified addressing** (workshop / scratchpad / Agent Mail) | Founder-directed unification of three disjoint stores; scratchpad doesn't exist yet | 4 comments |
| [#5915](https://github.com/Hmbown/Codewhale/issues/5915) | **Fleet models**: provider → model → shortlist → role with save-in-role | UX for model routing to sub-agents; operator-aware assignment | 4 comments |
| [#5479](https://github.com/Hmbown/Codewhale/issues/5479) | **First-class sub-agent/fleet management in TUI** (live list, status, tokens, focus, stop, history) | Core Execution Plan C01; enables multi-agent observability in UI | 3 comments, founder-owned |
| [#2323](https://github.com/Hmbown/Codewhale/issues/2323) | **Chinese IME support broken** — candidate window leaks, pinyin bleeds into model input | Blocks non-Latin users; affects config/modal inputs | 3 comments, 👍 1 |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#6417](https://github.com/Hmbown/Codewhale/pull/6417) | **feat(web)** | Move `legal/terms` & `legal/privacy` onto dictionary spine (i18n cleanup) |
| [#6407](https://github.com/Hmbown/Codewhale/pull/6407) | **integration** | Website wave 1 + v0.10.1 CI/automation slices (globals.css split, GPUI role tokens, CI-gated merges) |
| [#6408](https://github.com/Hmbown/Codewhale/pull/6408) | **feat(providers)** | Add **Yolo-Auto** as data-driven compatible host (OpenAI Chat Completions gateway) |
| [#6406](https://github.com/Hmbown/Codewhale/pull/6406) | **fix(tui)** | **Closed** — Stop `resume`/`fork` from duplicating threads & sessions (identity bugs) |
| [#6404](https://github.com/Hmbown/Codewhale/pull/6404) | **fix(api)** | **Closed** — Expose user-defined `[providers.<name>]` routes to native clients (picker catalog) |
| [#6405](https://github.com/Hmbown/Codewhale/pull/6405) | **feat(web)** | **Closed** — Move `docs/work` onto dictionary spine (i18n) |
| [#6403](https://github.com/Hmbown/Codewhale/pull/6403) | **test(web)** | **Closed** — Lower `isZh` ceiling 28→18 (9 files migrated off branching) |
| [#6402](https://github.com/Hmbown/Codewhale/pull/6402) | **refactor(tui)** | **Closed** — Remove unused feature stages (`Deprecated`/`Removed`) and blanket `allow(dead_code)` |
| [#6400](https://github.com/Hmbown/Codewhale/pull/6400) | **fix(config)** | **Closed** — Ingest namespaced `catalog.models` entries (provider-owned rows take precedence) |
| [#6398](https://github.com/Hmbown/Codewhale/pull/6398) | **feat(chrome)** | **Closed** — Add **Chromewhale**: Manifest V3 side-panel client with 5 Chrome-tab tools |

---

## 5. Feature Request Trends (Distilled from All Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Agent/Fleet System Overhaul** | #5479, #5915, #6036, #6086, #6148, #6254 | 8+ issues; unified data model, routing, memory, observability |
| **MCP 2026-07-28 Spec Conformance** | #6142, #6280, #5637 | 3+ issues; protocolVersion negotiation, rmcp lifecycle, secret scoping |
| **Pluggable/Extensible Architecture** | #6050 (memory), #6029 (provider routes), #6133 (SDK contracts), #6203 (AST edits) | 5+ issues; backend seams, dialect conformance, tool expansion |
| **Runtime Performance Gates** | #6193 (no perf benchmarks), #6146 (event-loop wake-driven), #6295 (test hangs) | 3+ issues; zero runtime perf CI, polling → multiplexing |
| **Code Navigation & Editor Integration** | #2342 (clickable files), #6220 (open_in_editor), #6325 (artifact editor column) | 3+ issues; bidirectional editor↔agent links |
| **Internationalization & IME** | #2323 (Chinese IME), #6417/#6405/#6403 (dictionary spine) | 4+ issues; CJK input, i18n infrastructure |
| **Tool Surface Expansion** | #6216 (http_request), #6203 (edit_symbol), #6011 (diagnostics), #6013 (goal gates) | 4+ issues; API calls, semantic edits, verification |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Mega-file monoliths block refactoring** | `lib.rs` 18.7k, `config.rs` 12.3k, `event_loop.rs` multi-k match, `app.rs` monolith | 4+ issues (#5586, #5580, #6146, #6143) |
| **Duplicate/conflicting subsystems** | Two MCP stacks (~17.7k lines), Fleet+Agent dual stores, dual config hierarchies (`tui/src/config*` vs `crates/config`) | 3+ issues (#6142, #6036, #6143) |
| **No runtime performance safety net** | Zero benches, no criterion/iai/divan, no perf budgets, no regression gate | 1 issue (#6193) but founder-called "every claim unchecked" |
| **Event-loop polling wastes CPU & adds latency** | `try_recv()` spin loop with adaptive timeouts; idle CPU never zero | 1 issue (#6146) but core to TUI responsiveness |
| **Chinese/IME input fundamentally broken** | Candidate window persists, pinyin leaks into model input/modals | 1 issue (#2323) with 👍, open since May |
| **Tool anchoring failures dominate edit failures** | `edit_file` `old_string` not found/not unique/stale whitespace | 1 issue (#6203) but "dominant failure mode" per tool survey |
| **Session/thread identity bugs** | Resume/fork duplicate threads; user routes invisible to native clients | 2 PRs fixed today (#6406, #6404) |

---

*Digest generated from GitHub data (Hmbown/Codewhale) as of 2026-09-23. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*