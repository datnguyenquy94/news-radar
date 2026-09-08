# AI CLI Tools Community Digest 2026-09-08

> Generated: 2026-09-08 04:13 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-08)

## 1. Ecosystem Overview

The AI CLI tools landscape is bifurcating into **first-party vendor tools** (Claude Code, Codex, Gemini CLI, Copilot CLI, Grok Build) and **community-driven aggregators** (OpenCode, Pi, Qwen Code, DeepSeek TUI, Kimi). Vendor tools are wrestling with **model-capacity outages**, **subscription-value erosion**, and **desktop-app regressions** — symptoms of rapid model iteration outpacing platform stability. Community tools are iterating faster on **provider abstraction**, **multi-agent orchestration**, and **TUI/UX polish**, but lack the model-access guarantees of first-party offerings. Across the board, **session reliability**, **Windows parity**, and **plugin/hook extensibility** are the three dominant pain points.

---

## 2. Activity Comparison (2026-09-07 → 2026-09-08)

| Tool | Hot Issues (Updated) | PRs Merged/Active | Release Status | Top Community Signal |
|------|---------------------|-------------------|----------------|----------------------|
| **Claude Code** | 10 (1 critical: #16157 Max limit bug, 1,494 comments) | 2 (maintenance only) | None | 🔴 Subscription trust crisis; silent data loss |
| **OpenAI Codex** | 10 (4 capacity outages, 80+ comments total) | 20 (8 voice/TUI, 6 Guardian refactor) | Alpha `rust-v0.154.0-alpha.6` | 🔴 Model capacity outage blocking Pro/Plus users |
| **Gemini CLI** | 10 (3 P1: subagent false success, agent hang, shell deadlock) | 10 (security, sandbox, output guards) | Nightly `v0.60.0-nightly.20260908` | 🟡 Subagent reliability; AST-aware navigation epic |
| **Copilot CLI** | 10 (session resume regressions cluster in v1.0.83) | 4 (installer fix, next-action prototype) | None (v1.0.83-5 bundled) | 🔴 Session resume instability; MCP connection drops |
| **Kimi Code** | 2 (Windows IME dup, agent Read-loop regression) | 1 (Build Remote Agent gbr/1 protocol) | None | 🟡 Windows IME + agent loop bugs; mobile pairing |
| **OpenCode** | 10 (undo broken, Linux clipboard, HTTP file attach) | 8 (Claude 5.1 thinking, Poe OAuth, Alibaba/Z.AI providers) | None | 🟡 Provider breadth; reasoning UX; Windows binary broken |
| **Pi** | 10 (Codex connection reliability 77 comments, Windows meta) | 10 (Orca terminal, session resume, Ollama Cloud) | None | 🟡 Connection cancellation; startup perf; Windows strategy |
| **Qwen Code** | 6 (P1 daemon output drop on runtime recycle) | 10 (extension scoping, workflow journal, agent mesh) | Preview `v0.23.1-preview.2` + Driver `v0.20.4` | 🟡 Daemon reliability; web-shell workflow UX; TUI migration |
| **DeepSeek TUI** | 10 (5 v0.9.12 regressions fixed in v0.9.13 prep) | 10+ (ACP, paste, insecure HTTP, tool truncation) | Prep `v0.9.13` (CHANGELOG ready) | 🟢 Stabilization sprint; crate decomposition epic |
| **Grok Build** | 0 | 0 | None | ⚪ No activity |

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Session/Conversation Reliability** | Claude Code, Codex, Copilot CLI, Pi, Qwen Code, DeepSeek TUI | Resume without data loss (Claude #59248, Copilot #4505, Pi #9306), transcript retention (Claude #59248), cross-device continuity (Codex #43267), daemon session recycle safety (Qwen #11119) |
| **Windows First-Class Support** | Claude Code, Codex, Copilot CLI, Kimi, OpenCode, Pi | Always-on-top toggle (Claude #89467), flashing terminals (Claude #66540), CLI binary detection (Codex #40776), IME input (Kimi #2584), hardcoded paths (OpenCode #36124), WSL/native consolidation (Pi #7547) |
| **Plugin/Hook Extensibility** | Claude Code, Codex, Copilot CLI, Gemini, OpenCode, Pi, Qwen | Function Hooks middleware (Claude #91870), AGENTS.md `@include` (Codex #17401), MCP memory backend swap (Claude #48465), skill/subagent orchestration (Gemini #21968), extension workspace scoping (Qwen #11086) |
| **Multi-Agent / Subagent Orchestration** | Claude Code, Codex, Gemini, Qwen Code, OpenCode | Subagent resumption (Claude #92016), worktree inheritance (Codex #33282), false success reporting (Gemini #22323), persistent agent mesh (Qwen #11206), infinite agent mode (OpenCode #47019) |
| **Reasoning/Thinking Visibility & Control** | Codex, OpenCode, Pi, Qwen Code, DeepSeek TUI | Guardian context refactor (Codex PRs), LongCat/Ollama reasoning toggles (OpenCode #47871, #47881), collapsible reasoning cards (OpenCode #46344), thinking defaults for new models (Pi #9310) |
| **Model Capacity / Cost Transparency** | Claude Code, Codex, Copilot CLI | Max plan phantom limits (Claude #16157), Fable 5.1 2× burn (Claude #91623), GPT-5.5/6 outage (Codex #43398), Azure MCP timeout (Copilot #4749) |

---

## 4. Differentiation Analysis

| Dimension | Vendor Tools (Claude, Codex, Gemini, Copilot) | Community Aggregators (OpenCode, Pi, Qwen, DeepSeek) |
|-----------|-----------------------------------------------|-----------------------------------------------------|
| **Model Access** | Native, prioritized, but opaque capacity management | BYO-model via provider abstraction; broader model menu (Alibaba, Z.AI, LongCat, Poe, Ollama Cloud) |
| **Target User** | Individual devs on vendor platforms; enterprise via SSO/billing | Power users, teams wanting model-agnostic workflows, self-hosters |
| **Architecture** | Monolithic TUI + desktop app + cloud sync | Modular: core engine + provider plugins + TUI/frontend options (Pi: multi-frontend; Qwen: web-shell + daemon) |
| **Extensibility** | Emerging: hooks (Claude), skills (Codex/Gemini), MCP (Copilot) | Mature: provider facades (OpenCode/Pi), agent mesh (Qwen), plugin protocols (DeepSeek gbr/1, ACP) |
| **Release Cadence** | Bundled with model releases; alpha channels (Codex) | Nightly/preview (Gemini, Qwen), stabilization sprints (DeepSeek) |
| **Pain Points** | Capacity outages, subscription trust, desktop regressions | Windows binary, self-signed TLS, accessibility, CI flakes |

**Unique Differentiators:**
- **Claude Code**: Function Hooks proposal (#91870) — most ambitious plugin-system overhaul
- **Codex**: Voice-first TUI investment (8 PRs/day) + Guardian as reusable context engine
- **Gemini CLI**: AST-aware code navigation epic (#22745) + zero-dependency POSIX sandbox alignment
- **Copilot CLI**: GitHub-native session/worktree model + skills-as-tools
- **Qwen Code**: Web-shell workflow visualization + persistent agent mesh collaboration
- **Pi**: Multi-frontend architecture (TUI, web, headless) + implementation-backed docs evals
- **OpenCode**: Provider breadth (10+ facades) + SSH server connections + QR pairing
- **DeepSeek TUI**: ACP compliance for IDE integration + Computer-Use plugin bundle + atomic commit splitting

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Rapid Iteration** | **Codex** (20 PRs/day, voice + Guardian pushes), **DeepSeek TUI** (10+ fixes in 24h for v0.9.13), **Qwen Code** (10 PRs across workflow/agent/memory), **Pi** (10 PRs across provider/UX/perf) | Daily merged PRs >8; multiple parallel feature epics; active stabilization sprints |
| **High Impact / High Friction** | **Claude Code** (1,494-comment Max bug), **Codex** (capacity outage), **Copilot CLI** (session resume cluster) | Critical regressions blocking paid users; vendor dependency creates single-point-of-failure perception |
| **Steady / Feature-Complete Core** | **Gemini CLI** (nightly security/stability focus), **OpenCode** (provider breadth + reasoning UX) | Consistent P1 bug fixes; strategic epics (AST, agent autonomy) but fewer daily PRs |
| **Early / Niche** | **Kimi Code** (2 issues, 1 PR — mobile pairing focus), **Grok Build** (inactive) | Limited community surface; specific use-case driven |

**Maturity Signals:**
- **Most production-ready TUI**: DeepSeek TUI (ACP compliance, v0.9.13 stabilization), Pi (multi-frontend, hook system)
- **Best provider abstraction**: OpenCode (10+ facades, websearch for all), Pi (models.dev v2 integration push)
- **Strongest enterprise features**: Copilot CLI (GitHub integration, skills), Claude Code (Max plans, Function Hooks proposal)
- **Most innovative UX**: Codex (voice), Qwen Code (web-shell workflow viz), DeepSeek TUI (computer-use plugin)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Model capacity is the new availability SLA** | Codex 4+ outage issues (80+ comments), Claude Max phantom limits (1,494 comments) | Teams must design **multi-provider fallback** and **local-model escape hatches**; single-vendor CLI is a risk |
| **Session state = critical infrastructure** | 6+ tools reporting resume/data-loss bugs | Invest in **portable session formats** (JSONL, SQLite) and **explicit checkpointing**; avoid proprietary opaque stores |
| **Windows is the compatibility test bed** | Every tool has Windows-specific regressions (IME, terminals, paths, binaries) | **CI must include native Windows runners**; WSL ≠ native; allocate 20%+ QA budget to Windows |
| **Hook/plugin systems converging on middleware patterns** | Claude Function Hooks (Express-style), Codex Guardian context, Pi extension API, Qwen workspace extensions | **Standardize on async middleware interfaces**; build internal tooling against hook specs, not vendor APIs |
| **Multi-agent workflows moving from demo to production** | Qwen agent mesh, Gemini subagent reliability, Codex worktree agents, OpenCode infinite mode | Design **agent orchestration as first-class primitive**: shared context, failure journaling, human-in-the-loop gates |
| **Reasoning visibility becoming table stakes** | OpenCode collapsible cards, Pi/Codex thinking controls, DeepSeek metrics audit | UIs must render **structured reasoning traces** (not just final output); budget tokens for reasoning explicitly |
| **Web/desktop convergence accelerating** | Qwen web-shell, Pi multi-frontend, Codex Desktop, Claude Desktop | **Headless daemon + multiple frontends** is the winning architecture; invest in daemon stability over TUI polish |

---

## Recommendation Matrix

| If Your Priority Is... | Primary Tool | Fallback / Complement |
|------------------------|--------------|----------------------|
| **Zero-config, vendor-managed model access** | Claude Code (if Max plan stable) / Codex (if capacity resolves) | Gemini CLI (nightly) for local-first |
| **Model-agnostic, self-hosted, extensible** | **OpenCode** or **Pi** | Qwen Code for web-shell collaboration |
| **Voice-driven / accessibility-first** | **Codex** (WebRTC voice, split-flap transcripts) | DeepSeek TUI (ACP for IDE integration) |
| **Multi-agent orchestration & workflow viz** | **Qwen Code** (agent mesh, web-shell) | OpenCode (infinite mode) + Pi (session recaps) |
| **Enterprise GitHub integration** | **Copilot CLI** (skills, worktrees) | Claude Code (Function Hooks future) |
| **Windows-native daily driver** | **DeepSeek TUI** (ACP, active Windows fixes) | Pi (Windows meta-issue tracking) |

---

*Report generated from 2026-09-08 community digests across 10 AI CLI repositories. All issue/PR references link to live GitHub items.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-08 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **skill-creator evaluation pipeline** ([#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)) | Core tooling for creating/optimizing skills; `run_eval.py` drives description optimization loop | **Critical bug**: `run_eval.py` reports 0% recall on all queries (Issue [#556](https://github.com/anthropics/skills/issues/556) — 12 comments, 7 👍, 10+ reproductions). Windows subprocess/encoding failures block adoption. Multiple concurrent fix PRs. | 🟡 Open (3 PRs) |
| 2 | **Hivemind: Zero-Cost Multi-Agent Orchestration** ([#1628](https://github.com/anthropics/skills/pull/1628)) | Delegates mechanical work to headless `opencode` workers on free models; Claude stays planner/reviewer/merger | Novel cost-optimization architecture: "expensive model's context is the scarce resource, not its intelligence." Zero external API cost. | 🟡 Open |
| 3 | **self-audit — Mechanical Verification + Reasoning Quality Gate** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Pre-delivery audit: Step 0 verifies every claimed output file exists; Steps 1–4 run four-dimension reasoning audit in damage-severity priority order | Universal (any project/stack/model). Addresses hallucinated file outputs and reasoning gaps. v1.3.0. | 🟡 Open |
| 4 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Full testing stack: Testing Trophy philosophy, AAA unit patterns, React Testing Library, contract/API/E2E strategies, flakiness mitigation | Comprehensive reference skill; covers what to test vs. not test. High utility for code-quality workflows. | 🟡 Open |
| 5 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Prevents orphan words, widow headers, numbering misalignment in AI-generated documents | "Affects every document Claude generates. Users rarely ask for good typography but notice when it's bad." | 🟡 Open |
| 6 | **claude-api skill maintenance** ([#1607](https://github.com/anthropics/skills/pull/1607), Issue [#1487](https://github.com/anthropics/skills/issues/1487)) | Model registry, authentication, request/response patterns for Claude API | **Critical**: skill eagerly injects ~156k tokens, exhausting context window in one call ([#1487](https://github.com/anthropics/skills/issues/1487)). Retired model IDs still listed as active. | 🟡 Open |
| 7 | **ODT (OpenDocument) skill** ([#486](https://github.com/anthropics/skills/pull/486)) | Create, fill, read, convert `.odt`/`.ods`; template filling, ODT→HTML parsing | ISO-standard format support; LibreOffice/interoperability focus. | 🟡 Open |
| 8 | **mcp-builder evaluation & model updates** ([#1724](https://github.com/anthropics/skills/pull/1724), [#1602](https://github.com/anthropics/skills/pull/1602), Issue [#1390](https://github.com/anthropics/skills/issues/1390)) | MCP server scaffolding, evaluation harness, transport protocols | Evaluation harness scores 0/N against real MCP servers (`TextContent` not JSON-serializable, swallowed as fabricated errors) ([#1390](https://github.com/anthropics/skills/issues/1390)). Default model updated to `claude-sonnet-5`. | 🟡 Open |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Community Signal |
|-------|----------|------------------|
| **Trust & Security Boundaries** | Issue [#492](https://github.com/anthropics/skills/issues/492): Community skills distributed under `anthropic/` namespace impersonate official skills (43 comments, 2 👍) | **Highest engagement** — users demand namespace isolation or verification badges |
| **Organizational Skill Sharing** | Issue [#228](https://github.com/anthropics/skills/issues/228): Org-wide skill library / direct sharing links (16 comments, 8 👍) | Strong enterprise demand; current manual `.skill` file exchange via Slack/Teams is friction-heavy |
| **Reliable Skill Triggering & Evaluation** | Issue [#556](https://github.com/anthropics/skills/issues/556): `claude -p` never triggers skills (0% trigger rate) (12 comments, 7 👍) | Core developer experience blocker; undermines skill-creator workflow |
| **Context Window Management** | Issue [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` injects 156k tokens; Issue [#1175](https://github.com/anthropics/skills/issues/1175): SharePoint doc handling concerns | Skills must respect token budgets; lazy-loading / selective injection needed |
| **MCP Integration & Interop** | Issue [#16](https://github.com/anthropics/skills/issues/16): Expose Skills as MCPs (4 comments); Issue [#29](https://github.com/anthropics/skills/issues/29): Bedrock support (4 comments) | Community wants Skills as first-class MCP citizens; cloud-provider parity |
| **Agent Governance & Safety** | Issue [#412](https://github.com/anthropics/skills/issues/412): `agent-governance` skill proposal (policy enforcement, threat detection, audit trails) — Closed but signals demand | Emerging need for production-grade agent oversight primitives |
| **Duplicate/Plugin Hygiene** | Issue [#189](https://github.com/anthropics/skills/issues/189): `document-skills` + `example-skills` install identical content (6 comments, 9 👍) | Packaging/distribution maturity gap |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

| PR | Skill | Why It Matters | Blockers / Notes |
|----|-------|----------------|------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator eval fix (Windows + artifact install)** | Unblocks the entire skill-authoring loop; 10+ independent bug reports | Requires Windows CI validation; depends on artifact install redesign |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind Multi-Agent Orchestration** | Paradigm shift: free-model workers + expensive-model planner; zero marginal cost | Depends on `opencode` availability; novel architecture needs review |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit Quality Gate** | Universal pre-delivery verification; catches hallucinated files + reasoning errors | Broad scope; may need modularization for adoption |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Fills major gap: no canonical testing guidance skill exists yet | Large surface area; ensure examples stay current |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Universal quality-of-life for all document-generation workflows | Low complexity; high impact per user feedback |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT/OpenDocument Support** | Standards-based interop; enterprise/government demand | Requires `odfpy`/`lxml` deps; test coverage critical |
| [#1627](https://github.com/anthropics/skills/pull/1627) | **buffer-api Agent Skill** | Portable social-media scheduling for any agent (Claude, Cursor, Codex, n8n…) | External API dependency; auth/token management patterns needed |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | HPC/Slurm workflow automation for scientific computing | Niche but high-value for research clusters; profile-based config |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *reliable, trustworthy skill execution infrastructure* — fixing the broken evaluation/triggering pipeline (skill-creator), securing the supply chain (namespace impersonation), and taming context-window explosion — before expanding the skill catalog further.**

---

# Claude Code Community Digest — 2026-09-08

---

## 1. Today's Highlights

**No new releases** in the past 24 hours. The community is focused on a cluster of high-impact bugs: a **Max subscription usage-limit regression** affecting hundreds of users (1,494 comments), **silent session-transcript deletion** causing data loss, and **Windows desktop app regressions** breaking cross-session agent messaging and spawning ghost terminal windows. A major **Function Hooks enhancement proposal** (#91870) is gathering strong support (83 👍) as a potential plugin-system overhaul.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#16157** | **[BUG] Instantly hitting usage limits with Max subscription** | Max-plan subscribers report immediate quota exhaustion; blocks paid users entirely. | 👍 694 • 1,494 comments • *macOS, cost, API* |
| **#59248** | **Silent retention cleanup deletes session transcripts** | Irrecoverable loss of conversation history across workspaces; no warning or opt-in. | 👍 32 • 42 comments • *macOS, core, data-loss* |
| **#91870** | **Function Hooks – make plugins 10× more powerful** | Proposes Express/Koa-style middleware for deep, composable, side-effect-tracked plugin APIs. | 👍 83 • 137 comments • *enhancement, hooks, plugins* |
| **#26951** | **Cowork macOS – Plugin install fails (HTTP 404, plugins.claude.ai unresolved)** | Blocks plugin ecosystem on macOS Cowork builds; DNS/hosting issue. | 👍 16 • 22 comments • *plugins, desktop* |
| **#92016** | **Claude Desktop auto-denies CLI-native SendMessage, breaking subagent resumption** | Desktop Code tab blocks inter-session agent communication; regression in 1.46388.1. | 👍 6 • 19 comments • *macOS, agents, desktop, regression* |
| **#89467** | **Windows: app window always-on-top with no disable option** | UX blocker for multitasking; no setting, shortcut, or menu to toggle. | 👍 28 • 19 comments • *Windows, desktop* |
| **#33041** | **Remote Control (/remote-control) disconnects frequently** | Sessions drop every few minutes; manual restart required; hurts remote workflows. | 👍 29 • 13 comments • *macOS, networking* |
| **#66540** | **Windows: terminal/cmd windows flash on every subprocess spawn** | Visible conhost/cmd flashes disrupt focus; affects MCP, Bash, subagents. | 👍 6 • 13 comments • *Windows, tools, duplicate* |
| **#92737** | **Claude deleted irreplaceable personal photos with `rm -rf` before verifying move** | Critical safety failure: destructive file op executed without confirmation; data loss. | 👍 0 • 1 comment • *bash, high-priority, data-loss* |
| **#91623** | **Max 20x plan drained in ~22 hrs after Fable 5.1; 2× output/turn vs Fable 5** | Model regression burning through premium quota; cost transparency needed. | 👍 5 • 5 comments • *Linux, cost, model* |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| **#26175** | `fix: replace broken native installer bootstrap script` | **CLOSED** | Installer `curl | bash` bootstrap silently failed to create `~/.local/bin/claude` and deleted existing npm global install, leaving users with no working `claude` binary. |
| **#39043** | `Remove "retro-futuristic" recommendation from Frontend Design Skill` | **OPEN** | Design-system cleanup; removes outdated aesthetic guidance from internal skill definitions. |

*Only 2 PRs updated in the last 24h — both maintenance/housekeeping. No feature PRs in flight.*

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Plugin/hook system overhaul** | #91870 (Function Hooks), #48465 (MCP memory backend replacement) | 83 👍, 137 comments — strongest enhancement signal |
| **Memory & session portability** | #16600 (git worktree boundaries), #92734 (web→local teleport gaps), #89831 (pre-compaction notice) | Persistent requests for transparent, bounded memory |
| **Desktop UX parity & configurability** | #89673 (Enter/Ctrl+Enter swap), #92774 (composer keybindings), #89467 (always-on-top toggle) | Cross-platform keybinding & window-behavior consistency |
| **Remote Control reliability** | #33041 (frequent disconnects), #89752 (undocumented opt-in), #92010 (idle timeout after stealth update) | Core remote workflow instability |
| **Cost/usage transparency** | #16157 (Max limit bug), #91623 (Fable 5.1 2× burn), #83690 (Bedrock CRIS tier pricing) | Paid users demand accurate metering |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Subscription value erosion** — Max plan users hitting phantom limits (#16157) and model regressions doubling token burn (#91623) undermine trust in premium tiers.

2. **Silent data destruction** — Transcript retention cleanup (#59248), photo deletion via `rm -rf` (#92737), and VM disk growth (#65577) share a pattern: **destructive actions without confirmation, visibility, or recovery**.

3. **Windows desktop second-class experience** — Always-on-top window (#89467), flashing terminals (#66540), `git fsmonitor` blocking updates (#91763), and broken cross-session messaging (#92258) accumulate.

4. **Remote Control fragility** — Frequent disconnects (#33041), undocumented cloud-slot registration (#89752), idle-timeout loss after auto-update (#92010), and connector attachment race (#83694) make remote workflows unreliable.

5. **Plugin ecosystem blocked** — macOS Cowork plugin install 404s (#26951), no MCP memory backend swap (#48465), and Chrome profile instability (#74902) stall extensibility.

6. **Model safeguard over-blocking** — Fable 5 flagging routine coding tasks (#75932) forces fallbacks to older models, reducing capability access.

---

*Data sourced from `github.com/anthropics/claude-code` — issues/PRs updated 2026-09-07 to 2026-09-08.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-08

---

## 1. Today's Highlights

A widespread **model capacity outage** is affecting GPT-5.5 through GPT-6 Astra across both CLI and Desktop, with only `gpt-5.4-mini` remaining functional — over 70 comments across three issues confirm the impact on Pro/Plus subscribers. Meanwhile, the TUI received a **major voice-interaction overhaul** (8 merged PRs): live WebRTC conversations, split-flap transcript animations, configurable mute shortcuts, and a dedicated composer strip. On the platform side, **Guardian context refactoring** continues with 6 PRs centralizing evidence rendering into `codex-guardian-context`, and macOS gained **Secure Enclave–backed user verification**.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.154.0-alpha.6` | Alpha | Incremental alpha; no changelog linked. Tracks the ongoing 0.154 series leading to the next stable CLI release. |

> **Watch:** `0.153.4` is the current bundled CLI in Desktop (per multiple issues); `0.154.x` alphas are iterating rapidly on voice, Guardian, and context-management internals.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#28507](https://github.com/openai/codex/issues/28507) | **Selected model at capacity (Desktop, Win, Pro 5x)** | Persistent since June; blocks all non-mini models on Desktop. | 46 👍, 46 comments — longest-running capacity report. |
| [#43398](https://github.com/openai/codex/issues/43398) | **All GPT-5.5/5.6/6 models failing (CLI, Linux, Pro 20x)** | Only `5.4-mini` works; affects paying Pro 20x users on Ubuntu. | 17 comments, 7 👍 — fresh Sep 7 report, high severity. |
| [#43337](https://github.com/openai/codex/issues/43337) | **Account-specific capacity errors despite full allowance (CLI, macOS)** | Suggests per-account quota bug, not global capacity. | 16 comments — reproducible on `gpt-6-astra` / `gpt-5.6-luna`. |
| [#43682](https://github.com/openai/codex/issues/43682) | **All model selections fail with “at capacity” (new Sep 8)** | Confirms outage is ongoing and universal across models. | 8 comments, 2 👍 — filed today. |
| [#25271](https://github.com/openai/codex/issues/25271) | **Computer Use cannot determine Chrome URL on Windows** | Blocks browser automation on Windows; `chrome://newtab/` fails. | 31 comments, 9 👍 — open since May, no workaround. |
| [#33282](https://github.com/openai/codex/issues/33282) | **`create_thread` doesn’t inherit auto-approval for worktrees (Desktop, sandbox)** | Breaks unattended worktree workflows; permission regression. | 16 comments, 6 👍 — affects team/agentic use cases. |
| [#17401](https://github.com/openai/codex/issues/17401) | **`@include` directive for composable AGENTS.md (CLI enhancement)** | High-demand modularity for agent instructions; 21 👍. | 11 comments — community-driven, clear spec. |
| [#38357](https://github.com/openai/codex/issues/38357) | **Cloud Browser provisioning failure on Pro (Germany, web)** | Paid browser feature unusable; sudden regression. | 9 comments — region-specific, no config workaround. |
| [#37539](https://github.com/openai/codex/issues/37539) | **Cloud Browser tab created but UI never surfaces (Work web)** | CDP refresh times out; backend initializes but panel dead. | 8 comments, 1 👍 — similar to #38357, different entry point. |
| [#38873](https://github.com/openai/codex/issues/38873) | **Accessibility traversal freezes IntelliJ Git Log 10–13s (macOS, Computer History)** | Computer Use hooks stall IDE; local performance regression. | 7 comments, 3 👍 — impacts developer productivity directly. |

---

## 4. Key PR Progress (Top 10 Merged Today)

| # | PR | Category | Summary |
|---|----|----------|---------|
| [#43581](https://github.com/openai/codex/pull/43581) | **Voice (TUI)** | Adds live WebRTC voice conversations: `/voice`, `/voice mute`, `/voice stop` with transcripts, levels, captions. |
| [#43656](https://github.com/openai/codex/pull/43656) | **Voice (TUI)** | Split-flap animation for live transcripts — black BG, speaker-colored highlights, settled-char preservation. |
| [#43651](https://github.com/openai/codex/pull/43651) | **Voice (TUI)** | `Ctrl+X` mute toggle + recording dot in terminal title; guards for modals/popups. |
| [#43683](https://github.com/openai/codex/pull/43683) | **Voice (TUI)** | Moves voice controls into dedicated composer strip above footer — avoids truncation at narrow widths. |
| [#43690](https://github.com/openai/codex/pull/43690) | **Voice (TUI)** | Makes mute shortcut configurable via `tui.keymap.chat.toggle_voice_mute`; integrates with keymap picker. |
| [#43645](https://github.com/openai/codex/pull/43645) | **Voice (TUI)** | Regression test suite: startup, shutdown, thread switching, speech delivery, retries, typed/voice handoff. |
| [#43624](https://github.com/openai/codex/pull/43624) | **Auth (macOS)** | Secure Enclave–backed user verification: credential create/reuse/delete/challenge with biometric protection. |
| [#43595](https://github.com/openai/codex/pull/43595) | **Guardian (Refactor)** | Centralizes bounded review evidence in `codex-guardian-context`; `PreviousReviews` section, max 8 reviews. |
| [#43597](https://github.com/openai/codex/pull/43597) | **Guardian (Refactor)** | Moves trusted tool metadata → `TrustedTool` in shared context; async-only collection, preserves dev messages. |
| [#43599](https://github.com/openai/codex/pull/43599) | **Guardian (Refactor)** | Moves trusted skill evidence → `TrustedSkills` section; async collection, separate dev message preserved. |
| *+5 more* | [#43601](https://github.com/openai/codex/pull/43601), [#43602](https://github.com/openai/codex/pull/43602), [#43619](https://github.com/openai/codex/pull/43619), [#43621](https://github.com/openai/codex/pull/43621), [#43622](https://github.com/openai/codex/pull/43622) | **Guardian / Versioning / Telemetry** | Image selection, REPL evidence, version-comparison helper, worktree telemetry, older-service warning. |

> **Pattern:** 8/20 PRs are voice/TUI; 6/20 are Guardian context consolidation — two clear engineering pushes this sprint.

---

## 5. Feature Request Trends

| Direction | Evidence (Issues/PRs) | Signal |
|-----------|----------------------|--------|
| **Modular agent instructions** | [#17401](https://github.com/openai/codex/issues/17401) (`@include` for AGENTS.md, 21 👍) | High community demand; clean composability for team-shared prompts. |
| **Host-side timestamps in CLI/TUI** | [#27203](https://github.com/openai/codex/issues/27203) (18 👍) | Debugging long-running sessions; correlates model output with wall time. |
| **Event-driven background exec wakeup** | [#32188](https://github.com/openai/codex/issues/32188) (10 👍) | Eliminates polling overhead for long commands; subagent-friendly. |
| **Voice as first-class TUI interaction** | 8 merged PRs today | Product investment: WebRTC, animations, keymaps, dedicated UI strip. |
| **Guardian as reusable context engine** | 6 PRs centralizing evidence sections | Platform play: making review/scoring context available to other subsystems. |
| **Cross-device session continuity** | [#43267](https://github.com/openai/codex/issues/43267) (voice mobile → desktop history gap) | Emerging pain point as mobile/desktop usage converges. |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Model capacity / rate limits** | **Critical** (4+ issues, 80+ comments today) | [#28507](https://github.com/openai/codex/issues/28507), [#43398](https://github.com/openai/codex/issues/43398), [#43337](https://github.com/openai/codex/issues/43337), [#43682](https://github.com/openai/codex/issues/43682) — Pro/Plus users blocked on flagship models. |
| **Windows Desktop instability** | High (6+ issues) | CLI binary not found [#40776](https://github.com/openai/codex/issues/40776), Browser tab crash [#43347](https://github.com/openai/codex/issues/43347), service restart blocked [#42968](https://github.com/openai/codex/issues/42968), Git LFS temp leaks [#34953](https://github.com/openai/codex/issues/34953), session loss [#43661](https://github.com/openai/codex/issues/43661). |
| **Cloud Browser / Computer Use fragility** | High (4+ issues) | Provisioning fail [#38357](https://github.com/openai/codex/issues/38357), UI never surfaces [#37539](https://github.com/openai/codex/issues/37539), handoff freezes [#39950](https://github.com/openai/codex/issues/39950), Chrome URL detection [#25271](https://github.com/openai/codex/issues/25271). |
| **Session/history corruption** | Medium (4 issues) | Stuck reconnecting [#19690](https://github.com/openai/codex/issues/19690), tools unavailable after resume [#41265](https://github.com/openai/codex/issues/41265), missing history after voice mobile [#43267](https://github.com/openai/codex/issues/43267), worktree session loss [#43661](https://github.com/openai/codex/issues/43661). |
| **WebSocket / idle-watchdog stalls (Windows)** | Medium (2 detailed reports) | 63 MB image-history reqs [#43015](https://github.com/openai/codex/issues/43015), live ping/pong still trips watchdog [#43022](https://github.com/openai/codex/issues/43022) — CLI 0.153.4 regression. |
| **Experimental context management 404s** | Emerging | [#43194](https://github.com/openai/codex/issues/43194) (Pro + Astra), [#42446](https://github.com/openai/codex/issues/42446) (docs ask why limited to ChatGPT subs). |

---

## Quick Links

- **Repo:** [github.com/openai/codex](https://github.com/openai/codex)
- **Issue tracker:** [openai/codex/issues](https://github.com/openai/codex/issues)
- **PR feed:** [openai/codex/pulls](https://github.com/openai/codex/pulls)

*Digest generated from GitHub data as of 2026-09-08 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-08

---

## 1. Today's Highlights
The project shipped nightly **v0.60.0-nightly.20260908** with a batch of security and stability fixes (Git env sanitization, DEBUG normalization, output truncation guards). Meanwhile, the issue backlog highlights three critical reliability themes: subagent lifecycle bugs (false “GOAL” success on turn-limit), generalist agent hangs, and shell “Waiting input” deadlocks — all P1 and actively discussed.

---

## 2. Releases
**v0.60.0-nightly.20260908.g85aca163f** — Nightly build.  
Key fixes merged since yesterday:
- **Security**: Strip execution-affecting `GIT_*` env vars from trusted `.env` files ([#29008](https://github.com/google-gemini/gemini-cli/pull/29008)).
- **Sandbox**: Normalize `DEBUG` truthiness to prevent accidental `--inspect-brk` pauses ([#29005](https://github.com/google-gemini/gemini-cli/pull/29005)).
- **Core**: Guard `formatTruncatedToolOutput` against non-positive `maxChars` to stop output inflation ([#29004](https://github.com/google-gemini/gemini-cli/pull/29004), [#28995](https://github.com/google-gemini/gemini-cli/pull/28995)).
- **Auth**: Fix `isAuthenticationError` substring match on `401` (prevents false re-auth on port/ID collisions) ([#29242](https://github.com/google-gemini/gemini-cli/pull/29242)).
- **Extensions**: Backup extension dir before update so rollback actually restores state ([#29166](https://github.com/google-gemini/gemini-cli/pull/29166)).

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | Subagent claims success despite hitting turn limit, masking failures in multi-step workflows. | 13 comments, 👍2, **P1**, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs** | Deferring to generalist agent freezes CLI for hours; workaround is disabling subagents. | 8 comments, 👍8, **P1**, `status/need-retesting` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command stuck at “Waiting input” after completion** | Simple commands (mkdir, ls) show as active indefinitely, blocking follow-up. | 4 comments, 👍3, **P1**, `effort/medium` |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s bash affinity via Zero-Dependency OS Sandboxing** | Strategic epic to align tooling with Gemini 3’s native POSIX toolchain preference. | 9 comments, 👍1, **P2**, `effort/large` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads, search, and mapping** | Investigates whether AST tools reduce turns/tokens for code navigation. | 7 comments, 👍1, **P2**, `kind/feature` (EPIC) |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini does not use skills and sub-agents enough** | Model ignores custom skills/agents unless explicitly instructed, limiting extensibility. | 6 comments, **P2**, `status/need-retesting` |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Add deterministic redaction & reduce Auto Memory logging** | Secrets enter model context before redaction; skill logs may leak data. | 5 comments, **P2**, `area/security` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Browser agent crashes under Wayland display server, blocking web tasks. | 4 comments, 👍1, **P1**, `agent/browser` |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores settings.json overrides (e.g., maxTurns)** | Config merges read but not applied to browser agent, making tuning impossible. | 3 comments, **P2**, `status/need-retesting` |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | **get-shit-done output hook causes crash** | Summary printing triggers crash near task completion, losing results. | 3 comments, **P1**, `effort/medium` |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#29008](https://github.com/google-gemini/gemini-cli/pull/29008) | **fix(core): strip execution-affecting GIT_* env vars in getSafeGitEnv** | Closed | **Security fix**: prevents `.env`-injected `GIT_CONFIG_*`/`GIT_SSH_COMMAND` from hijacking git ops. |
| [#29005](https://github.com/google-gemini/gemini-cli/pull/29005) | **fix(sandbox): normalize DEBUG environment variable truthiness** | Closed | Treats `"false"`, `"0"` as falsy; stops accidental debug port publishing / inspect-brk. |
| [#29004](https://github.com/google-gemini/gemini-cli/pull/29004) / [#28995](https://github.com/google-gemini/gemini-cli/pull/28995) | **fix(core): guard formatTruncatedToolOutput against non-positive maxChars** | Closed | Prevents negative slice offsets from duplicating/inflating tool output ~2×. |
| [#29242](https://github.com/google-gemini/gemini-cli/pull/29242) | **fix(core): stop matching 401 as substring in isAuthenticationError** | Open | Fixes false auth-error triggers on any message containing “401” (ports, line numbers). |
| [#29166](https://github.com/google-gemini/gemini-cli/pull/29166) | **fix(extensions): back up extension dir before update so rollback restores it** | Open | Rollback now works; previously restored empty temp dir. |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | **fix(sandbox): harden filesystem boundaries and isolate runtime state** | Open | Replaces host dir mounts with sanitized read-only configs; resolves symlinks; decouples container env. |
| [#29239](https://github.com/google-gemini/gemini-cli/pull/29239) | **fix(cli): prevent ghost text wrapping infinite loop at narrow widths** | Open | Fixes [#19985](https://github.com/google-gemini/gemini-cli/issues/19985); `help wanted`. |
| [#29022](https://github.com/google-gemini/gemini-cli/pull/29022) | **feat(tool): retain ask_user question in text history** | Closed | New setting `ui.keepAskUserQuestionsInHistory` preserves prompts across resume. |
| [#29017](https://github.com/google-gemini/gemini-cli/pull/29017) | **fix(core): dedupe symlinked/junctioned skill directories** | Closed | Resolves [#28944](https://github.com/google-gemini/gemini-cli/issues/28944); supports Windows junctions & POSIX symlinks for Agent Skills. |
| [#27636](https://github.com/google-gemini/gemini-cli/pull/27636) | **perf: optimize VirtualizedList and fix click handling** | Closed | Large-list rendering + static-item click fixes; improves terminal UI responsiveness. |

---

## 5. Feature Request Trends
1. **Subagent & Skill Orchestration** — Multiple issues ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#20195](https://github.com/google-gemini/gemini-cli/issues/20195), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)) demand better autonomous skill/subagent selection, trajectory visibility, and sprint-level investment.
2. **AST-Aware Code Navigation** — Epic [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) + [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) explore method-level reads, structural search, and codebase maps to cut turns/tokens.
3. **Native Bash/Sandbox Alignment** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) pushes for zero-dependency POSIX toolchain execution inside hardened sandboxes, matching Gemini 3’s training.
4. **Memory System Hardening** — Cluster of issues ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)) target deterministic redaction, inbox hygiene, and low-signal session quarantine.
5. **Browser Agent Resilience** — Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), config overrides ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)) indicate a push for production-grade web automation.

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Silent Subagent Failures** — Turn-limit hits reported as success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)); no subagent context in `/bug` reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Agent Hangs & Deadlocks** — Generalist agent freezes ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)); shell “Waiting input” after command exit ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)); browser agent Wayland crashes ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
- **Config Ignored at Runtime** — Browser agent disregards `settings.json` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)); symlinked agents/skills not discovered ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079), [#28944](https://github.com/google-gemini/gemini-cli/issues/28944)).
- **Tool Overload** — 400 errors when >128/400 tools enabled ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)); model creates scattered temp scripts ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
- **Session State Loss** — `/compress` not persisted across resume ([#21335](https://github.com/google-gemini/gemini-cli/issues/21335)); `ask_user` answers vanish from history ([#29022](https://github.com/google-gemini/gemini

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-08

---

## 1. Today's Highlights

The Copilot CLI ecosystem is experiencing a cluster of session-management regressions in the v1.0.83 series: resumed sessions drop in-flight MCP connections, wedge on queued messages, and leak stale connection IDs. Meanwhile, the desktop app 1.1.15 introduces a blocking bug preventing multiple Local sessions per project. On the platform side, the installer now correctly reports unsupported OSes (FreeBSD) instead of misidentifying them as Windows.

---

## 2. Releases

**No new releases in the last 24 hours.** The latest bundled CLI remains v1.0.83-5 (desktop app 1.1.15).

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4756](https://github.com/github/copilot-cli/issues/4756) | **Windows app requires archiving every idle project session before creating a new Local session** | Blocks multi-session workflows on Windows; users must manually archive old sessions. | 👍 10 — highest engagement today |
| [#4742](https://github.com/github/copilot-cli/issues/4742) | **Desktop app 1.1.15: cannot create a second Local session while one is running** | Regression in 1.1.15 breaks parallel branch work; “project already has active Local workspace” error. | 👍 1, 7 comments |
| [#4753](https://github.com/github/copilot-cli/issues/4753) | **v1.0.83: session resume cancels in-flight stdio MCP server connections (~1s timeout, was ~16s in v1.0.82)** | MCP servers initializing during resume are killed silently, leaving them unavailable for the session. | 👍 1 |
| [#4505](https://github.com/github/copilot-cli/issues/4505) | **Resumed session retains stale connection item IDs after interrupted response** | Every prompt fails with `400 input item ID does not belong to this connection`; `/fork` doesn’t recover. | 👍 3 |
| [#4755](https://github.com/github/copilot-cli/issues/4755) | **Session wedges permanently when a queued-lane message lands at turn end** | Session enters unrecoverable stuck state — accepts no input, shows as stopped, queue never drains. | 1 comment |
| [#4749](https://github.com/github/copilot-cli/issues/4749) | **Azure MCP `learn=true` calls time out after 180s in CLI 1.0.83-5** | Hierarchical tool discovery regression; same calls take 0.2s in 1.0.80. | 0 👍 but critical for Azure users |
| [#4747](https://github.com/github/copilot-cli/issues/4747) | **`/refine` failures: `reasoning_effort "medium"` unsupported by gpt-4o-mini** | Internal command invokes incompatible model parameter; surfaces as 400 Bad Request. | 0 👍 |
| [#4438](https://github.com/github/copilot-cli/issues/4438) | **`disable-model-invocation: true` makes skill unreachable, not manual-only** | Skills marked manual-only disappear from model’s tool list entirely — `skill()` returns “Skill not found”. | 👍 6 |
| [#4017](https://github.com/github/copilot-cli/issues/4017) | **MCP OAuth: non-first-party HTTP servers cancel host-token, never launch runtime browser flow** | Remote MCP servers (Atlassian, incident.io) fail auth silently — no popup, no error, no connection. | 👍 3 |
| [#3945](https://github.com/github/copilot-cli/issues/3945) | **Memories are leaking between repositories** | New repo shows “facts stored in memory” from unrelated projects — privacy and context contamination risk. | Updated today, 3 comments |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4762](https://github.com/github/copilot-cli/pull/4762) | **install: report unsupported operating systems** | CLOSED | Fixes installer misidentifying FreeBSD as Windows; now reports “unsupported OS” cleanly. |
| [#4761](https://github.com/github/copilot-cli/pull/4761) | **install: report unsupported operating systems** | OPEN | Duplicate of #4762 by different author; same fix for FreeBSD detection. |
| [#4746](https://github.com/github/copilot-cli/pull/4746) | **Add experimental next-action extension prototype** | OPEN | Opt-in SDK example under `examples/next-best-action/` for model-inferred next actions; reuses foreground session via `joinSession()`. |
| [#4748](https://github.com/github/copilot-cli/pull/4748) | **Add joke cli** | OPEN | Trivial addition — likely a test or placeholder PR. |

---

## 5. Feature Request Trends

1. **Session scoping & filtering** — Multiple issues (#4693, #4709) request repository-scoped session lists and worktree association fixes for multi-repo workspaces.
2. **Collapsible, typed output sections** — #1787 (👍 2) asks for thinking/command/tool/message blocks with color-coded, collapsible rendering.
3. **MCP cancellation support** — #4759 requests proper MCP cancellation requests when users abort tool calls mid-elicitation.
4. **Form UX hardening** — #4738 highlights data loss when `ask_user` forms submit on early Enter; asks for draft autosave/restore.
5. **Keyboard layout compatibility** — #1999 (CLOSED, 👍 2) fixed @ key on German keyboards; indicates ongoing internationalization needs.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Session resume instability** | #4753, #4505, #4755, #4754 — dropped MCP connections, stale IDs, permanent wedges, delete no-ops |
| **Desktop app session limits** | #4742, #4756 — cannot run parallel Local sessions; forced archiving on Windows |
| **MCP integration fragility** | #4017, #4681, #4749, #4759 — OAuth silent failures, missing User-Agent, 180s timeouts, no cancellation |
| **Skill/agent discovery gaps** | #4438 (skills invisible), #4752 (custom agents not recognized by `--agent` flag) |
| **Resource consumption** | #4750 — TUI idles at 6–7% CPU, spikes to multiple cores after prompts |
| **Cross-platform installer bugs** | #3710, #4761/#4762 — FreeBSD misdetected as Windows; no binary published |

---

*Generated from github.com/github/copilot-cli activity (2026-09-07 → 2026-09-08).*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-08

## 1. Today's Highlights
No new releases in the past 24 hours. Two active bugs surfaced: a Windows IME input duplication affecting Thai and other complex-script users, and an agent regression where the model enters a repeated `Read` tool loop instead of emitting `Edit` calls. One feature PR (#2616) introduces **Build Remote Agent** phone pairing via the `gbr/1` protocol, enabling mobile spectator/veto control of local sessions.

---

## 2. Releases
*None in the last 24 hours.*

---

## 3. Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|---------------------|
| [#2584](https://github.com/MoonshotAI/kimi-cli/issues/2584) | **Bug: Thai (and other IME-based) characters duplicated when typing in the prompt on Windows** | Blocks non-Latin script users on Windows 11; reproducible on v0.31.1. Indicates input handling regression in the terminal frontend. | 👍 1, 1 comment (recent update 2026-09-07) |
| [#2637](https://github.com/MoonshotAI/kimi-cli/issues/2637) | **[Bug] Agent stuck in repeated Read-tool loop, unable to emit intended Edit calls** | Core agent logic failure on v0.41.0; model reads files repeatedly instead of applying edits, halting coding workflows. High-severity regression. | 0 comments, 0 👍 (newly filed 2026-09-07) |

> **Note:** Only 2 issues updated in the last 24h. Historical backlog not provided.

---

## 4. Key PR Progress
| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#2616](https://github.com/MoonshotAI/kimi-cli/pull/2616) | **Add Build Remote Agent phone pairing (gbr/1)** | Integrates the `gbr-agent` protocol (MIT-licensed) to pair iOS/Android app as a spectator with veto capability over the local CLI session. Enables mobile-assisted coding workflows. | Open, updated 2026-09-07 |

> **Note:** Only 1 PR updated in the last 24h.

---

## 5. Feature Request Trends
From the two active issues and the open PR, the community is signaling interest in:
- **Cross-platform input robustness** — proper IME/composition event handling on Windows (and likely Linux/macOS) for global language support.
- **Agent reliability & observability** — preventing tool-use loops, better debugging when the model deviates from expected tool-call patterns.
- **Mobile companion integration** — extending the CLI with remote spectator/control via standardized protocols (gbr/1), suggesting demand for hybrid desktop-mobile workflows.

---

## 6. Developer Pain Points
1. **Windows IME breakage** — Duplicate character insertion makes the CLI unusable for Thai, Chinese, Japanese, Korean, and other composition-based input users on Windows 11.
2. **Agent tool-loop regression** — v0.41.0 introduced a failure mode where the model repeatedly calls `Read` instead of progressing to `Edit`, stalling automated coding tasks.
3. **Limited mobile/remote interaction** — The new PR (#2616) addresses a gap: no official way to monitor or intervene in a CLI session from a phone, which the `gbr/1` integration aims to solve.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` (issues & PRs updated 2026-09-07 → 2026-09-08).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-08

## Today's Highlights
No new releases shipped today. The project saw a surge of provider-side work: Anthropic Claude 5.1+ thinking defaults, Poe OAuth, Alibaba and Z.AI model support, and LongCat reasoning fixes all landed in PRs. Meanwhile, users reported regressions in undo history, clipboard on Linux, and web file attachments over plain HTTP.

## Releases
None in the last 24 hours.

## Hot Issues
| # | Title | Status | Why It Matters |
|---|-------|--------|----------------|
| [#4704](https://github.com/anomalyco/opencode/issues/4704) | `/undo` and `/timeline` undo does not revert file edits | CLOSED | 22 👍, 23 comments — core workflow break; users lose trust in history controls |
| [#24713](https://github.com/anomalyco/opencode/issues/24713) | Copy shows popup but clipboard unchanged on Linux | CLOSED | 8 👍, 12 comments — silent data loss on a daily action |
| [#27689](https://github.com/anomalyco/opencode/issues/27689) | Drag-and-drop for Microsoft Office files (.docx, .xlsx) | OPEN | 8 comments — frequent request for non-code asset ingestion |
| [#30788](https://github.com/anomalyco/opencode/issues/30788) | Allow external symlink targets via `external_directory` consent | CLOSED | 2 👍 — unblocks monorepo / cross-project workflows |
| [#47019](https://github.com/anomalyco/opencode/issues/47019) | Native infinite agent mode (auto-continue until done) | OPEN | 1 👍 — reduces manual "continue" friction for long tasks |
| [#47876](https://github.com/anomalyco/opencode/issues/47876) | App: closed project cannot be re-added | OPEN | New today — project management regression |
| [#47879](https://github.com/anomalyco/opencode/issues/47879) | Disable or replace project `AGENTS.md` | OPEN | New today — config flexibility for team instructions |
| [#47872](https://github.com/anomalyco/opencode/issues/47872) | Go provider: intermittent 400 "thinking cannot be disabled" | OPEN | New today — routing instability for omen-alpha |
| [#47871](https://github.com/anomalyco/opencode/issues/47871) | LongCat reasoning toggle falls back to unsupported OpenAI effort variants | OPEN | New today — reasoning control broken for LongCat models |
| [#47645](https://github.com/anomalyco/opencode/issues/47645) | Web: file attachments silently dropped on HTTP remote host (`crypto.subtle` undefined) | OPEN | Blocks remote web UI users on plain HTTP |

## Key PR Progress
| # | Title | Type | Impact |
|---|-------|------|--------|
| [#47884](https://github.com/anomalyco/opencode/pull/47884) | fix(ai): default newer Claude models to drop invalid thinking | Bug fix | Prevents broken thinking blocks on Claude 5.1+ (Sept 2026+) |
| [#47883](https://github.com/anomalyco/opencode/pull/47883) | feat(core): add Poe browser OAuth | Feature | Full PKCE flow + loopback callback for Poe authentication |
| [#47881](https://github.com/anomalyco/opencode/pull/47881) | fix(opencode): support local Ollama reasoning | Bug fix | Enables reasoning effort selection for Ollama OpenAI-compatible endpoint |
| [#47880](https://github.com/anomalyco/opencode/pull/47880) | fix(session): preserve reasoning across empty tool-call deltas | Bug fix | Backports vercel/ai#20253; stops reasoning fragmentation on `tool_calls: []` |
| [#47873](https://github.com/anomalyco/opencode/pull/47873) | fix(provider): map LongCat binary thinking variants | Bug fix | Adds `thinking.type: disabled/enabled` mapping for LongCat |
| [#47874](https://github.com/anomalyco/opencode/pull/47874) | feat(ai): add Alibaba inference provider | Feature | New `Alibaba` facade with Chat/Messages/Responses endpoints |
| [#47866](https://github.com/anomalyco/opencode/pull/47866) | feat(ai): add Z.AI language models | Feature | Adds `ZAI` chat models + `ZAICodingPlan` coding-specific facade |
| [#47753](https://github.com/anomalyco/opencode/pull/47753) | feat(desktop): add SSH server connections | Feature | Saved hosts, auto-reconnect, local HTTP tunnels to remote OpenCode |
| [#47799](https://github.com/anomalyco/opencode/pull/47799) | feat(app): configure initial servers and add QR pairing | Feature | `VITE_OPENCODE_SERVER_MODE`, zero-server start, QR code pairing |
| [#45472](https://github.com/anomalyco/opencode/pull/45472) | fix(websearch): remove provider whitelist | Bug fix | Enables websearch for all providers by default (client-side Exa/Parallel MCP) |

## Feature Request Trends
1. **Agent autonomy** — Native infinite/auto-continue mode (#47019) and session recaps (#36151) top the list for reducing manual intervention.
2. **Provider breadth** — Drag-and-drop Office files (#27689), websearch for all providers (#45472), and new provider integrations (Poe, Alibaba, Z.AI, LongCat) show demand for wider model/tool coverage.
3. **Config granularity** — Per-project `AGENTS.md` override (#47879), read-only external directory access (#36171), and symlink handling (#30788) reflect teams needing finer policy control.
4. **Reasoning UX** — Collapsible reasoning cards (#46344), correct thinking toggles for LongCat (#47871), and Ollama reasoning support (#47881) indicate reasoning visibility is a first-class concern.

## Developer Pain Points
- **History reliability**: Undo/timeline not reverting file edits (#4704) erodes confidence in core safety net.
- **Clipboard on Linux**: Copy toast lies; nothing reaches system clipboard (#24713).
- **Web UI over HTTP**: File attachments vanish silently due to `crypto.subtle` missing on insecure contexts (#47645).
- **Windows binary**: Hardcoded `B:\~BUN\root` path breaks `opencode.exe` for regular users (#36124).
- **Self-signed TLS**: 1.17.12+ fails to connect to local HTTPS LLMs with self-signed certs (#35365).
- **Accessibility**: Slash-command menu invisible to screen readers (#36165); PWA icon hidden behind system clock (#36142).
- **Model thinking visibility**: Claude Opus 4.8 via GitHub Copilot hides thinking (#36120); TUI variant cycling skips entries (#36095).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-08

## Today's Highlights
The Pi ecosystem saw significant issue triage and PR merges today with **no new release**. The highest-impact activity centers on **connection reliability for OpenAI Codex/GPT-5.5** (77 comments, 33 👍), **Windows support strategy** (61 comments), and a wave of fixes for TUI clipboard handling, session resume UX, and provider fallback mismatches. Several long-standing performance regressions (EventStream quadratic cost, grep OOM) and extension API gaps were also addressed.

## Releases
*No new releases in the last 24 hours.*

## Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **openai-codex Connection Reliability Issues** | GPT-5.5/Codex leaves TUI stuck on `Working…` with no stream, tool call, or error — only Escape recovers. Blocks core workflow for heavy Codex users. | 🔥 77 comments, 33 👍, `inprogress` |
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows: How do you use Pi? What issues are you seeing?** | Meta-issue to consolidate Windows pain points (WSL, native, Git Bash, etc.) and prioritize fixes/docs. Critical for broadening adoption. | 61 comments, 2 👍 |
| [#7010](https://github.com/earendil-works/pi/issues/7010) | **Normalize optional object tool schemas for OpenAI-compatible providers** | Pi-ai forwards raw JSON Schema without normalizing `required` on objects, causing provider rejections. Affects all OpenAI-compatible integrations. | 7 comments, 1 👍 |
| [#8823](https://github.com/earendil-works/pi/issues/8823) | **Esc during streaming fails to cancel in-flight request** | Abort signal registered but HTTP request continues until provider finishes naturally — wastes tokens/time and confuses users. | 7 comments |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | **`PI_OFFLINE` silently disables all provider model discovery** | Undocumented behavior: `PI_OFFLINE` kills model-catalog network calls for the entire session, not just startup housekeeping. | 6 comments |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | **Parallel startup reports "No API key found" for ~48s with expired OAuth** | Multi-process setups hit a 48s delay while Pi retries expired credentials for *other* providers before surfacing the real key. | 4 comments |
| [#9055](https://github.com/earendil-works/pi/issues/9055) | **EventStream quadratic CPU cost when draining buffered events** | `shift()` on array buffer causes O(n²) dequeue under backpressure — hurts long-running agent loops. Fixed via PR. | 4 comments, **CLOSED** |
| [#9267](https://github.com/earendil-works/pi/issues/9267) | **Reduce fuzzy session-search scan cost** | `fuzzyMatch()` scans char-by-char; `indexOf()` drop-in replacement cuts CPU without changing ranking. Merged. | 3 comments, 1 👍, **CLOSED** |
| [#9302](https://github.com/earendil-works/pi/issues/9302) | **Out-of-loop summarization misses provider attribution headers (opencode 400 MissingSessionID)** | Branch summaries/compaction on opencode-family providers fail deterministically due to missing `x-opencode-session` header. | 1 comment, **OPEN** |
| [#9276](https://github.com/earendil-works/pi/issues/9276) | **grep tool with context lines can cause OOM** | Headless SDK runs OOM when grep context > 0 — heap fills with log files. Critical for CI/automation workloads. | 2 comments, **CLOSED** |

## Key PR Progress
| # | PR | Type | Status | Summary |
|---|----|------|--------|---------|
| [#9310](https://github.com/earendil-works/pi/pull/9310) | `fix(coding-agent): clear mouse selection on session switch` | Bugfix | **MERGED** | Fullscreen text selection no longer leaks across session switches. |
| [#8635](https://github.com/earendil-works/pi/pull/8635) | `fix(ai): preserve aborted stop reason during lazy setup` | Bugfix | **OPEN** | Passes abort signal through lazy stream wrappers; reports setup failures as aborted when request already cancelled. Adds regression test. |
| [#9307](https://github.com/earendil-works/pi/pull/9307) | `fix(tui): recognize Orca terminal capabilities` | Bugfix | **MERGED** | Treats `TERM_PROGRAM=Orca` as known; enables OSC 8 hyperlinks instead of fallback label+wrapped URL. |
| [#9303](https://github.com/earendil-works/pi/pull/9303) | `fix(interactive): resume session before closing selector` | UX | **MERGED** | Session selector now waits for `handleResumeSession` before closing — eliminates "silent disappear" confusion. |
| [#9301](https://github.com/earendil-works/pi/pull/9301) | `feat(coding-agent): confirm device-code browser and clipboard actions` | Feature | **OPEN** | Implements #9282: opt-in browser open + clipboard copy for device-code login (GitHub Copilot opts in; others stay headless). |
| [#7742](https://github.com/earendil-works/pi/pull/7742) | `feat(ai): Ollama Cloud support` | Feature | **OPEN** | Adds Ollama Cloud provider using `OLLAMA_API_KEY`; hybrid local/cloud via `ollama launch pi`. Uses models.dev for catalog. |
| [#9297](https://github.com/earendil-works/pi/pull/9297) | `fix(ai): remove invalid Fable 5 fallback target` | Bugfix | **OPEN** | Drops `claude-opus-4-8` from built-in fallbacks for `claude-fable-5` (API now rejects 400). Keeps Opus 5 only. |
| [#9280](https://github.com/earendil-works/pi/pull/9280) | `feat: add implementation-backed documentation evals` | DX/Testing | **MERGED** | Generates implementation audit for every Markdown page in docs catalog; validates coverage/paths/duplicates via schema-validated tool. |
| [#8744](https://github.com/earendil-works/pi/pull/8744) | `feat(tui): add opt-in overlay selection exclusion` | Feature | **OPEN** | Allows overlays to opt out of transcript selection path — fixes fullscreen copy grabbing overlay content. |
| [#8615](https://github.com/earendil-works/pi/pull/8615) | `fix(coding-agent): preserve interleaved user content` | Bugfix | **MERGED** | Maintains original text/image block order from `sendUserMessage()` through idle prompts and streaming steer/follow-up. |

## Feature Request Trends
1. **Provider parity & model freshness** — Native support for emerging models (LongCat, Grok, Ollama Cloud, Fable 5.1) and correct fallback chains; demand for models.dev v2 integration to avoid hardcoding.
2. **Windows first-class experience** — Consolidating fragmented runtimes (WSL, native, Git Bash, PowerShell) into a blessed path with out-of-box reliability.
3. **Extension API maturity** — Mid-conversation system messages (#9116), manual retry API (#9292), viewport control (#9299), and exported harness utilities (#9309) signal push toward programmable agent loops.
4. **Startup performance budgets** — Explicit latency/memory targets vs. jcode (#7739); XDG base dir migration (#256) nearing completion.
5. **TUI polish for power users** — Clipboard fidelity (OSC 52 + real clipboard), fuzzy search optimization, overlay-aware selection, terminal capability detection (Orca, Kitty, iTerm).

## Developer Pain Points
- **Unreliable streaming cancellation** — Esc key often no-ops during active streaming (#8823), leaving users stuck.
- **Silent configuration footguns** — `PI_OFFLINE` overreaches (#8684); `$ENV` interpolation in `models.json` apiKey doesn’t resolve (#9258); expired OAuth credentials poison parallel startup for 48s (#8928).
- **Session management friction** — Aborted/error turns leave unmatched `toolCall` blocks that break continuation (#9306); `--name` without prompt silently drops rename (#9305); compaction summary renders out of place on reload (#6100).
- **Provider error masking** — Grok 403 surfaced as "OpenAI API error" (#9298); opencode-go 400 `MissingSessionID` on summarization/compaction (#9302, #9290).
- **Resource leaks under load** — EventStream quadratic drain (#9055), grep context OOM (#9276), and fuzzy search scan cost (#9267) all hit in long-running/headless scenarios.
- **Clipboard trust issues** — Fullscreen selection claims "Copied!" via OSC 52 even when terminal ignores it (#7973).

---

*Generated from `earendil-works/pi` GitHub data (issues/PRs updated 2026-09-07 → 2026-09-08).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-08

---

## 1. Today's Highlights

- **Web Shell workflow visualization lands in preview**: v0.23.1-preview.2 adds dynamic workflow run visualization and management to the web shell, plus a performance improvement deriving the session workflow project.  
- **Critical daemon bug identified**: Issue #11119 (P1) reveals background shell output and wake notifications are silently dropped when `qwen serve` session runtimes recycle, wedging sessions.  
- **CUA driver v0.20.4 released** with notarized macOS universal binary, Linux (x86_64/arm64), and Windows UIAccess worker + native SDK payloads.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.23.1-preview.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.2) | Preview | `feat(web-shell)`: visualize & manage dynamic workflow runs ([#10594](https://github.com/QwenLM/qwen-code/pull/10594)); `perf(web-shell)`: derive session workflow project |
| [v0.23.0-nightly.20260907.f1ed3bc31a](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0-nightly.20260907.f1ed3bc31a) | Nightly | Same changes as preview |
| [cua-driver-rs-v0.20.4](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.4) | Driver | Prebuilt binaries: macOS (codesigned/notarized universal + `.app`), Linux (unsigned x86_64/arm64, glibc 2.31), Windows (unsigned UIAccess worker + native SDK, x86_64/arm64) |

---

## 3. Hot Issues

| Issue | Priority | Why It Matters | Community Reaction |
|-------|----------|----------------|-------------------|
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) Migrate TUI from ink to OpenTUI (tracking) | P3 | Structural TUI problems (flicker, render bugs) hard to fix within ink; 1k+ line patch indicates deep friction | 33 comments, active discussion on renderer architecture |
| [#11119](https://github.com/QwenLM/qwen-code/issues/11119) Background shell output dropped on runtime recycle | **P1** | Daemon-hosted web shell sessions lose background command output & wake notifications after turn ends — silently wedges sessions | 10 comments, marked `need-discussion`, `daemon`, `roadmap/background-automation` |
| [#10524](https://github.com/QwenLM/qwen-code/issues/10524) `setup-worktree`: corepack→npx fallback only on `ENOENT` | P3 | `EACCES` (permission denied) aborts bootstrap instead of falling back to `npx`; blocks installs in restricted environments | 3 comments, follow-up from PR #10449 |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) Fleet Shepherd Dashboard | — | Auto-maintained bot fleet health dashboard; tracks PR syncs, dispatches, releases, cleanups | 3 comments, bot-owned |
| [#11310](https://github.com/QwenLM/qwen-code/issues/11310) Deferred review findings from PR #11286 | — | Autofix bot deferred review comments outside PR scope for follow-up | 2 comments, `qwen-code-dev-bot` authored |
| [#11271](https://github.com/QwenLM/qwen-code/issues/11271) Main CI failed: E2E Tests on 36f2c14f0ed4 | — | macOS & Linux E2E shards failed before test results reported; tracked per commit | 2 comments, **CLOSED**, `qwen-code-dev-bot` authored |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#11086](https://github.com/QwenLM/qwen-code/pull/11086) `feat(serve): scope extensions to workspace runtimes` | OPEN | Global extension catalog now available per workspace runtime; reconciles extension state, exposes workspace-qualified daemon/SDK access, updates composer add menu & `@` references |
| [#11134](https://github.com/QwenLM/qwen-code/pull/11134) `fix(ci): retry transient all-green macOS E2E shard death once` | OPEN | Adds budget-gated single retry for macOS E2E shard (mirrors Linux `sandbox:none` retry from #10572) |
| [#10136](https://github.com/QwenLM/qwen-code/pull/10136) `feat(review): swap re-review rounds to fix-audit shape under critical posture` | OPEN | Multi-round `/review` re-reviews now run narrowed fix-audit shape when headed for critical-only posting & incremental anchor exists |
| [#9305](https://github.com/QwenLM/qwen-code/pull/9305) `fix(ui): bottom-align short VP content so blank space is at top` | OPEN | Virtual Viewport mode: short conversations now bottom-align (fixes blank gap between last message and composer from #9300) |
| [#10188](https://github.com/QwenLM/qwen-code/pull/10188) `fix(autofix): charge regressions to the brake and gate test weakening` | OPEN | Closes two autofix holes: regression cost nothing on consecutive-failure brake; test weakening not gated |
| [#11304](https://github.com/QwenLM/qwen-code/pull/11304) `fix(goal): count unanswered verifier checkpoint as stall` | OPEN | Checkpoint failing on overflowing evidence window now counts toward stall limit (previously only max-claims or nullable-result shapes counted) |
| [#10183](https://github.com/QwenLM/qwen-code/pull/10183) `feat(memory): add structured on-demand recall` | OPEN | Evolves auto-memory from flat prompt to structured push/pull: two-level ref/title tree on corpus change, query-focused metadata subtree, dedicated recall tool |
| [#10347](https://github.com/QwenLM/qwen-code/pull/10347) `feat(core): auto-retry transient network errors (EOF) where Ctrl+Y unavailable` | OPEN | Classifies wrapped low-level network failures (e.g., `400 network error ... EOF`) as retryable transport errors for bounded auto-retry |
| [#11196](https://github.com/QwenLM/qwen-code/pull/11196) `feat(workflows): journal failed agents and settle agent failures to null` | OPEN | Workflow resume journal now records agent-level failures (not just start/return); distinguishes failure from interruption |
| [#11206](https://github.com/QwenLM/qwen-code/pull/11206) `feat(mesh): add persistent shared-thread agent collaboration` | OPEN | Persistent workspace agent identities collaborating on shared threads: create/assign work, address agents, interject, inspect attributed results, cancel, resolve blockers, mark reviewed |

*Recently merged:*
- [#11323](https://github.com/QwenLM/qwen-code/pull/11323) `perf(web-shell): avoid unnecessary initial turn-index page request` — waits for navigation tail position before requesting turn metadata
- [#11309](https://github.com/QwenLM/qwen-code/pull/11309) `feat(cli): reap owned worktrees when daemon sessions are deleted` — deletes owned checkout/branch safely under ownership lock

---

## 5. Feature Request Trends

1. **Web Shell & Session Workflow UX** — Multiple PRs (#10594, #10938, #11169, #11323, #11322) improving workflow visualization, navigation, plan DAG rendering, local-files bridge trust gaps, and scroll performance.
2. **Agent Mesh / Multi-Agent Collaboration** — #11206 introduces persistent shared-thread agent identities; #11196 improves workflow agent failure journaling; background agent launch semantics refined in #11324.
3. **Structured Memory & Recall** — #10183 moves from flat prompts to structured push/pull recall protocol with metadata trees and dedicated tools.
4. **CI/CD Resilience** — #11134 (macOS E2E retry), #10439 (`/resolve` health watch), #11318 (canonical worktree paths for Windows CI) show investment in flake reduction.
5. **TUI Architecture Migration** — #8662 tracking issue (33 comments) signals intent to replace ink+React renderer with OpenTUI.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Daemon session reliability** | #11119 (P1): background output silently dropped on runtime recycle; #11309/#11324 address worktree cleanup & background agent result handling |
| **Install/bootstrap fragility** | #10524: `EACCES` on corepack aborts instead of falling back to `npx`; #10455: CLI crashes on unwritable output-language file |
| **TUI rendering instability** | #8662: flicker, viewport issues, 1k-line ink patch; #9305: bottom-alignment bug in VP mode |
| **CI flakiness (macOS E2E)** | #11134 adds retry; #11271 shows shard failures blocking main |
| **Autofix loop gaps** | #10188: regressions not charged to brake; test weakening not gated; #11304: unanswered verifier checkpoints not counted as stalls |
| **Extension/workspace isolation** | #11086: extensions not scoped to workspace runtimes; global catalog not reconciled per workspace |

---

*Digest generated from GitHub data as of 2026-09-08. Links point to live issues/PRs on github.com/QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-08

---

## 1. Today's Highlights

The project is in active stabilization for **v0.9.13**, with 10+ bugfix PRs merged in the last 24h addressing critical regressions from v0.9.12: ACP schema compliance (JetBrains IDEA connectivity), multiline paste regression, insecure HTTP config regression, and tool-call truncation safety. Simultaneously, the maintainer is extracting the Ollama live-catalog fix from a tangled brand-rewrite branch and refreshing the built-in Computer-Use plugin to v0.2.0. Community contributors delivered atomic commit splitting (closing a 2-year-old epic) and a VS Code extension overhaul enabling first-class agent integration.

---

## 2. Releases

**No new release published in the last 24h.**  
**v0.9.13 release preparation is underway** ([PR #6000](https://github.com/Hmbown/Codewhale/pull/6000)): version bumps across workspace, npm packages, VS Code extension; CHANGELOG includes fixes for ACP schema, offline queue data loss, metrics accuracy, goal-loop bounds, truncated tool args, and paste-burst heuristic.

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | Architectural refactor to split the monolithic TUI crate; 22 comments track 15+ sub-epics/FEATs. Blocking long-term maintainability. | High maintainer coordination; 0 👍 but 22 comments indicate deep technical engagement. |
| [#5981](https://github.com/Hmbown/Codewhale/issues/5981) | **Multiline paste split into separate messages (v9.12 regression)** | Pasting code/logs breaks workflow; each line sent as separate message. **Closed via [PR #5993](https://github.com/Hmbown/Codewhale/pull/5993)**. | 5 comments, rapid fix — users confirmed repro; pasted-burst heuristic re-armed. |
| [#5969](https://github.com/Hmbown/Codewhale/issues/5969) | **ACP `sessionCapabilities.list` boolean vs object — JetBrains IDEA fails** | Blocks IDE integration for JetBrains users. **Closed via [PR #5978](https://github.com/Hmbown/Codewhale/pull/5978)**. | 4 comments; strict schema validation exposed latent bug. |
| [#5991](https://github.com/Hmbown/Codewhale/issues/5991) | **`allow_insecure_http` config key removed in 0.9.12** | LAN/internal HTTP providers (llama.cpp, private IPs) broken; forced env var workaround. **Closed via [PR #5995](https://github.com/Hmbown/Codewhale/pull/5995)**. | 3 comments; FreeBSD user reported; per-provider config restored. |
| [#6004](https://github.com/Hmbown/Codewhale/issues/6004) | **Hooks cannot observe session state (idle/fatal-error/waiting-for-user)** | 11 hook events exist but no session-state visibility; limits automation (auto-save, notifications, CI gating). | 3 comments; new issue, clear API gap. |
| [#5950](https://github.com/Hmbown/Codewhale/issues/5950) | **Bottom chrome (posture bar + metrics) hard-coded; `/statusline` dead** | 0.9.12 shell redesign removed configurability; users lose context visibility. | 3 comments; UX regression for power users. |
| [#5860](https://github.com/Hmbown/Codewhale/issues/5860) | **Continuous Self-Learning from Dialog (Automatic Skill Evolution)** | Feature request: agent auto-extracts patterns from repeated tasks into `SKILL.md` files. | 5 comments; strategic enhancement for "skills" system. |
| [#5988](https://github.com/Hmbown/Codewhale/issues/5988) | **Two TUI tests overflow 2MiB libtest stack; hidden by nextest isolation** | CI flake risk; stack overflow in `mcp_review_discloses_host_authority...` test. | 2 comments; maintainer-filed, infrastructure fix needed. |
| [#6008](https://github.com/Hmbown/Codewhale/issues/6008) | **Add offload/swap to `/purge` for virtual-memory-style context eviction** | Current `/purge` only deletes/compresses; no "swap to disk" for long sessions. | 1 comment; fresh enhancement, addresses context-window pressure. |
| [#5976](https://github.com/Hmbown/Codewhale/issues/5976) | **Cost shows "unknown" on Concentrate; provider billing coverage incomplete** | Metrics strip shows `unknown` for cataloged provider; no guardrails for missing pricing. | 1 comment; founder-reported, telemetry gap. |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#5982](https://github.com/Hmbown/Codewhale/pull/5982) | `feat(tui): confirmed opt-out for model-bound key redaction` | **Open** | Adds opt-out receipt for mandatory credential redaction; unblocks devs pasting API keys during extension development. |
| [#6000](https://github.com/Hmbown/Codewhale/pull/6000) | `chore(release): prepare v0.9.13` | **Closed** | Release checklist execution: version bumps, CHANGELOG, npm/VS Code sync. |
| [#5993](https://github.com/Hmbown/Codewhale/pull/5993) | `fix(tui): re-arm paste-burst heuristic until bracketed paste verified` | **Closed** | Fixes #5981; heuristic now runs regardless of bracketed-paste request state. |
| [#5995](https://github.com/Hmbown/Codewhale/pull/5995) | `fix(config): honor allow_insecure_http per provider again` | **Closed** | Fixes #5991; restores per-provider `allow_insecure_http` in `config.toml`. |
| [#5978](https://github.com/Hmbown/Codewhale/pull/5978) | `fix(acp): advertise session list as object, drop nested load` | **Closed** | Fixes #5969; ACP `initialize` now sends `sessionCapabilities: { list: {}, load: true }` per schema. |
| [#5989](https://github.com/Hmbown/Codewhale/pull/5989) | `fix: five recorded defects — queue data loss, ACP, metrics, fleet, goal-loop` | **Closed** | Batch fix: offline queue cross-session corruption, ACP schema, tok/s metric path, fleet role leaks, goal-loop bound. |
| [#5983](https://github.com/Hmbown/Codewhale/pull/5983) | `fix(engine): never dispatch truncated tool call` | **Closed** | Fixes #5986; `arg_repair` now rejects truncated calls instead of completing & executing. |
| [#5987](https://github.com/Hmbown/Codewhale/pull/5987) | `fix(vscode): make extension's send path work, close security holes` | **Closed** | Fixes #5834; VS Code extension now handles `201 CREATED` from runtime, validates origin, fixes auth flow. |
| [#5998](https://github.com/Hmbown/Codewhale/pull/5998) | `feat(plugins): refresh computer-use bundle to plugin 0.2.0` | **Closed** | Ships CU plugin 0.2.0: macOS a11y backend, desktop socket transport, SSH + HarmonyOS HDC remote. |
| [#5870](https://github.com/Hmbown/Codewhale/pull/5870) | `Fix: Tools: atomic commit splitting — order by dependency, reject cycles` | **Closed** | Closes #3999 (2024); implements topological commit ordering for unrelated changes. |

---

## 5. Feature Request Trends

1. **Session & Context Control** — Configurable timeouts ([#6003](https://github.com/Hmbown/Codewhale/issues/6003)), goal-scoped step budgets ([#5994](https://github.com/Hmbown/Codewhale/issues/5994)), session-id in resume hints ([#6001](https://github.com/Hmbown/Codewhale/issues/6001)), virtual-memory `/purge` offload ([#6008](https://github.com/Hmbown/Codewhale/issues/6008)).
2. **Observability & Hooks** — Session-state hook events ([#6004](https://github.com/Hmbown/Codewhale/issues/6004)), cost/billing coverage for all providers ([#5976](https://github.com/Hmbown/Codewhale/issues/5976)), tok/s metric audit ([#5977](https://github.com/Hmbown/Codewhale/issues/5977)).
3. **Composer UX** — Slash-command history recall ([#6006](https://github.com/Hmbown/Codewhale/issues/6006)), configurable bottom chrome ([#5950](https://github.com/Hmbown/Codewhale/issues/5950)), model picker perf & mouse support ([#5975](https://github.com/Hmbown/Codewhale/issues/5975)).
4. **Provider & Model Flexibility** — OpenRouter vendor pinning ([#6007](https://github.com/Hmbown/Codewhale/issues/6007)), Ollama live-catalog default ([#5848](https://github.com/Hmbown/Codewhale/issues/5848)), insecure HTTP per-provider (fixed).
5. **Automation & Learning** — Auto skill extraction from dialog ([#5860](https://github.com/Hmbown/Codewhale/issues/5860)), fleet deliverable surfacing ([#5946](https://github.com/Hmbown/Codewhale/pull/5946)).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **v0.9.12 regressions breaking core workflows** | Paste splitting (#5981), ACP handshake failure (#5969), insecure HTTP config ignored (#5991), cost "unknown" (#5976), metrics wrong (#5977) | 5+ critical bugs in one release |
| **Hard-coded UI removing configurability** | Bottom chrome unconfigurable (#5950), `/statusline` dead, model picker laggy/no mouse (#5975) | 3 issues + founder live-reports |
| **Session management gaps** | No session-id in resume hint (#6001), fixed 300s timeout (#6003), goal-loop mid-pass chop (#5994), queue wedge on paste (#5999) | 4 issues in 24h |
| **Hook/automation blind spots** | No session-state events (#6004), slash commands excluded from history (#6006), extensions page freeze on re-auth (#5974) | 3+ distinct automation blockers |
| **Test infrastructure flakes** | Windows MCP boot deadline (#5980), stack overflow hidden by nextest (#5988), PTY startup race (#5979) | 3 CI flakes filed in 24h |
| **Documentation drift** | Chinese localization epic stale (#5482), config keys undocumented (#5996), legacy project name in copyright (#5984) | Ongoing; 2 docs PRs merged today |

---

**TL;DR**: The project is in a **stabilization sprint** for v0.9.13 after v0.9.12 introduced multiple regressions. Maintainer velocity is high (10+ fixes merged today), but architectural debt (crate decomposition #5316), observability gaps, and session-management rigidity remain top community asks.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*