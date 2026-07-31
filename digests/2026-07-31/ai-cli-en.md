# AI CLI Tools Community Digest 2026-07-31

> Generated: 2026-07-31 03:37 UTC | Tools covered: 10

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

# Cross-Tool AI CLI Ecosystem Comparison — 2026-07-31

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **platform-integrated** tools (Claude Code, Codex, Copilot CLI, Gemini CLI, Qwen Code) backed by major model providers, and **independent/community-driven** tools (OpenCode, Pi, CodeWhale, Kimi CLI) optimizing for extensibility and local-first workflows. Today shows zero major releases from platform tools, while two independents shipped (OpenCode v1.18.10, CodeWhale v0.9.2). Universal pain points cluster around **cross-platform reliability** (Windows/macOS/Wayland), **context/session management**, and **provider rate-limit opacity**. Security incidents (Gemini SSRF) and architectural refactors (CodeWhale 18→1 crate, OpenCode project-identity rewrite) signal maturing engineering rigor.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Critical Severity Items |
|------|---------------------|-------------------|----------------|------------------------|
| **Claude Code** | 50 active discussions | 1 (spam/closed) | None | macOS hook failure (#6305), Windows GPU crash (#80444), sync loss (#81658) |
| **OpenAI Codex** | 10 high-signal | 10 architectural | None | VS Code crash macOS (#35058), Windows BSOD (#31035), sandbox 1920 (#20570) |
| **Gemini CLI** | 10 noteworthy | 10 (incl. security) | None | **SSRF CVSS 8.6** (#28555), agent hangs (#21409), subagent false success (#22323) |
| **Copilot CLI** | 27 recently updated | 0 | **v1.0.77** (yesterday) | Crash on launch (#4305), blank transcript (#4311), subagent empty return (#4293) |
| **Kimi CLI** | 3 updated | 1 | None | LLM 429 total block (#2571), Windows freeze (#2570) |
| **OpenCode** | 10 high-engagement | 10 significant | **v1.18.10** (today) | TUI "exiting loop" (#38801), edit regression (#28011), provider 401s |
| **Pi** | 10 active | 11 architectural | None | Catalog stall (#7153), Wayland paste (#7248), auth hang (#7027) |
| **Qwen Code** | 10 (9 Omni-tracking) | 10 infrastructure | Nightly v0.21.1; v0.21.2 **failed** | Daemon memory unbounded (#8182), release pipeline (#8181) |
| **CodeWhale** | 10 strategic | 11 (incl. release) | **v0.9.2** (today) | Config fragmentation (#2369), monolith compile (#4991), subagent 12k-line file |
| **Grok Build** | 0 | 0 | None | — |

---

## 3. Shared Feature Directions

| Requirement | Tools Demanding | Specific Needs |
|-------------|----------------|----------------|
| **Cross-platform session continuity** | Claude Code, Codex, Copilot CLI, Gemini CLI, OpenCode, Pi | Unified conversation history across Desktop/Web/CLI/Mobile; seamless handoff; reliable sync |
| **Context-window control & compaction** | Claude Code, Codex, Gemini CLI, OpenCode, Qwen Code | Programmatic compaction (`/compact` parity), configurable auto-memory, token budget visibility, model-aware limits |
| **Rate-limit transparency** | Codex, Copilot CLI, Kimi CLI, OpenCode | Real-time `resetsAt`, `balance`, `planType` in statusline/UI; bucket-level visibility; fallback strategies |
| **Windows/Wayland first-class support** | Codex, Claude Code, Copilot CLI, Pi, Qwen Code, Kimi CLI | GPU stability, clipboard (Wayland `wl-paste`), IME rendering, sandbox execution, kernel-driver conflicts |
| **Agent/subagent reliability** | Gemini CLI, Codex, Copilot CLI, OpenCode, CodeWhale | Subagent wake-up, success/failure fidelity, steering parity CLI↔TUI↔headless, permission models |
| **MCP/tooling lifecycle hygiene** | OpenCode, Pi, Codex, Claude Code | Orphan cleanup, config precedence, eager vs lazy start, protocol-neutral clients (ACP) |
| **Observability & telemetry** | OpenCode, Qwen Code, Pi, Codex | OTel spans that flush, tool execution outcomes, GenAI streaming metrics, structured error classification |
| **Extension/protocol architecture** | Pi, OpenCode, CodeWhale, Claude Code | Runtime-neutral clients (`pi-client`), wire protocols (`pi-protocol`), hot-reload plugins, skill/hook APIs |

---

## 4. Differentiation Analysis

| Dimension | Platform-Integrated (Claude, Codex, Copilot, Gemini, Qwen) | Independent/Community (OpenCode, Pi, CodeWhale, Kimi) |
|-----------|------------------------------------------------------------|------------------------------------------------------|
| **Primary Moat** | Model access, ecosystem integration, enterprise SSO/billing | Extensibility, local-first, protocol ownership, multi-provider agnosticism |
| **Target User** | Enterprise teams, existing cloud subscribers, VS Code users | Power users, self-hosters, plugin authors, multi-model workflows |
| **Technical Approach** | Managed services, proprietary protocols, gated features | Open protocols (ACP, custom), crate/binary modularity, user-controlled runtimes |
| **Release Cadence** | Slower, gated by infra/security review (0–1/week) | Faster, iterative (OpenCode daily, CodeWhale weekly) |
| **Pain Point Profile** | Platform-specific bugs (macOS hooks, Windows BSOD, BSOD), rate limits, sync | Architecture debt (monoliths, config fragmentation), contributor DX, demo/assets |
| **Security Posture** | Centralized disclosure, dedicated teams (Gemini SSRF fixed in PR same day) | Community-driven, slower CVE response, manifest validation gaps (Pi silent crash) |

**Notable outliers**:  
- **CodeWhale** uniquely invests in *visual/motion UX* (ambient ocean, LaTeX math, session recording for marketing) and *architectural convergence* (18 crates → 1 binary).  
- **Pi** leads on *protocol standardization* (`pi-protocol` CBOR wire format, `pi-client` transport-neutral) and *extension markdown mutation API*.  
- **OpenCode** uniquely solves *project-identity for worktrees/monorepos* (PR #35311 closes 14 issues).  
- **Qwen Code** bets on *Web Shell as primary UI* (lower-maintenance desktop wrapper) and *Omni multimodal stack* (9-track experiment branch).

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenCode**, **CodeWhale**, **Pi** | Daily/weekly releases; 10+ architectural PRs/day; epic refactors in flight; contributor-facing DX fixes (hot-reload, devcontainers, compile times) |
| **Steady / Enterprise-Grade** | **Claude Code**, **Codex**, **Copilot CLI**, **Gemini CLI** | High issue volume (50+ active), structured triage (P1/P2, labels), security processes, but slower visible shipping; regressions in recent releases (Copilot v1.0.76, Codex macOS crash) |
| **Early / Focused** | **Qwen Code**, **Kimi CLI** | Qwen: heavy experiment-branch investment (Omni), release pipeline instability; Kimi: small issue set, provider-quota blockers, version fragmentation |
| **Dormant** | **Grok Build** | Zero activity |

**Maturity signals**:  
- **Gemini CLI** only tool with *behavioral eval infrastructure* (76 tests × 6 models, mandatory-pass gates).  
- **CodeWhale** only tool with *formal command-boundary spec* (Gherkin ATs, layered refactor epic).  
- **OpenCode** only tool with *project-identity correctness* for monorepos/worktrees.  
- **Pi** only tool with *protocol package separation* (`pi-protocol`/`pi-client` published).

---

## 6. Trend Signals for Technical Decision-Makers

| Signal | Implication | Reference Tools |
|--------|-------------|-----------------|
| **Protocol standardization over SDK lock-in** | ACP, `pi-protocol`, `pi-client` emerging as neutral integration layers; expect MCP → ACP migration | Pi, OpenCode, CodeWhale, Codex (ACP client PR #4996) |
| **Context management = product differentiator** | Tools exposing programmatic compaction, token budgets, model-aware limits win long-session workflows | Claude Code (#35150), OpenCode (#5200), Qwen Code (#8179), Codex (#24080) |
| **Windows/Wayland is the new Linux** | Kernel-driver conflicts (Codex BSOD), GPU crashes (Claude), clipboard/IME (Pi, Qwen, Copilot) block enterprise adoption | Codex, Claude Code, Pi, Qwen Code, Copilot CLI |
| **Rate-limit opacity → churn** | Users demanding real-time telemetry (`resetsAt`, bucket breakdown); black-box limits erode trust in Plus/Pro tiers | Codex, Copilot CLI, Kimi CLI, OpenCode |
| **Architectural debt payments accelerating** | CodeWhale (18→1 crate), OpenCode (project-identity rewrite), Pi (protocol packages), Gemini (eval infra) — all investing in maintainability over features | CodeWhale, OpenCode, Pi, Gemini CLI |
| **Session durability = table stakes** | Wedged sessions (Copilot #3767), lost history (OpenCode #30054), sync failures (Claude #81658) drive migration | All platform tools |
| **Security incidents now same-day fix expectation** | Gemini SSRF (CVSS 8.6) → fix PR within hours; Pi manifest crash → guard PR; baseline for enterprise eval | Gemini CLI, Pi |

---

**Bottom line**: The ecosystem is splitting into **managed platforms** (prioritizing enterprise integration, model access, compliance) and **composable runtimes** (prioritizing protocol ownership, local control, multi-model agility). For teams evaluating tools: **OpenCode** leads on monorepo correctness and provider parity; **CodeWhale** on architectural rigor and UX polish; **Pi** on extension protocol design; **Gemini CLI** on eval maturity; **Claude/Codex/Copilot** on ecosystem integration but lag on cross-platform stability.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-31 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **skill-creator evaluation loop fixes** ([#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1261](https://github.com/anthropics/skills/pull/1261)) | Core tooling that auto-generates/optimizes Skill descriptions via `run_eval.py` → `run_loop.py` | **Critical bug**: `run_eval.py` reports 0% recall for all queries, breaking the description-optimization loop. Multiple independent reproductions (#556, #1169). Windows subprocess/encoding issues block evaluation entirely. PR #1298 installs eval artifact as real skill; #1323 fixes trigger detection; #1099/#1050 address Windows `claude.cmd` + cp1252 encoding; #1261 isolates synthetic command files from live registry. | 🟢 Open (active) |
| 2 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Prevents typographic defects in AI-generated docs: orphan/widow control, numbering alignment, page-break hygiene | Addresses a universal pain point—every document Claude generates suffers from these issues. Users rarely request good typography explicitly, so the skill must proactively enforce it. | 🟢 Open |
| 3 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Full testing stack: Testing Trophy philosophy, AAA unit patterns, React Testing Library, integration/E2E strategies, property-based testing, contract testing | Comprehensive reference skill; fills a gap in the marketplace where testing guidance was fragmented. Long discussion window (Mar–Apr) suggests thorough review. | 🟢 Open |
| 4 | **self-audit** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Mechanical file verification → four-dimension reasoning audit (correctness, completeness, consistency, clarity) in damage-severity priority order | Universal, project-agnostic quality gate. Proposes a structured "reasoning audit" pipeline that could become a default pre-delivery step. | 🟢 Open (recent, Jun–Jul) |
| 5 | **color-expert** ([#1302](https://github.com/anthropics/skills/pull/1302)) | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS), color space selection guide (OKLCH, OKLAB, CAM16), accessibility contrast, gamut mapping | Deep domain skill for any color-related task. Self-contained reference with decision tables. | 🟢 Open |
| 6 | **plan-file-hygiene** ([#1479](https://github.com/anthropics/skills/pull/1479)) | Lifecycle management for planning artifacts (creation, update, archival, deletion) — addresses accumulation of stale plans | Directly addresses Issue #1417: planning artifacts accumulate with no lifecycle. Community-validated problem framing. | 🟢 Open (very recent, Jul 25–27) |
| 7 | **skill-quality-analyzer & skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security analysis (injection, secrets, permissions) | Foundational tooling for Skill marketplace governance. Long gestation (Nov–Jan) indicates careful design. | 🟢 Open |
| 8 | **ODT / OpenDocument** ([#486](https://github.com/anthropics/skills/pull/486)) | Create, fill, read, convert `.odt`/`.ods`; template filling; parse ODT→HTML; LibreOffice integration | ISO-standard document format support; triggers on "ODT", "ODS", "OpenDocument", "LibreOffice". Extended discussion (Mar–Jul) suggests complex implementation. | 🟢 Open |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issues) | Demand Signal |
|-------|-------------------|---------------|
| **Trust & Security Hardening** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍) — community skills masquerading as official `anthropic/` namespace; [#1175](https://github.com/anthropics/skills/issues/1175) — SharePoint permission logic in SKILL.md | **Highest engagement**: Users fear supply-chain abuse. Demand for namespace isolation, skill signing, and permission scoping. |
| **Org-Level Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) — no native sharing; manual `.skill` file exchange via Slack/Teams | Strong enterprise pull: shared skill library, direct install links, team-scoped marketplace. |
| **Core Tooling Reliability (skill-creator)** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) — 0% trigger rate; [#1169](https://github.com/anthropics/skills/issues/1169) — recall=0% even for literal slash commands; [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments, 2👍) — Windows PATHEXT/encoding | Blockers for Skill authors. The evaluation loop is "optimizing against noise." Windows support is a hard requirement. |
| **Deduplication & Marketplace Hygiene** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍) — `document-skills` & `example-skills` install identical content | High 👍/comment ratio: users want clean, non-redundant bundles. |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` injects ~156k tokens in one call | Emerging concern: skills must be token-efficient; lazy-loading or chunked injection needed. |
| **MCP / Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) — expose Skills as MCPs; [#29](https://github.com/anthropics/skills/issues/29) — Bedrock support | Demand for Skills as portable, protocol-first capabilities (MCP), not Claude-Code-locked. |
| **Governance & Reasoning Quality** | [#412](https://github.com/anthropics/skills/issues/412) — agent-governance skill (closed); [#1385](https://github.com/anthropics/skills/issues/1385) — 3-gate reasoning pipeline (calibration → adversarial review → verification) | Growing interest in *meta-skills* that govern other agents/skills. |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

| PR | Skill | Why It’s Likely to Land Soon |
|----|-------|------------------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) + [#1323](https://github.com/anthropics/skills/pull/1323) | **skill-creator eval fixes** | Multiple PRs attacking same critical bug; Issue #556 has 12 comments/7👍; maintainers actively reviewing (updated Jun 23/25). |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Directly addresses a community-framed gap (#1417); recent (Jul 25), author open to handoff. |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Universal quality gate; aligns with Issue #1385's 3-gate pipeline proposal; recent momentum (Jun 28–Jul 2). |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive, well-scoped; long review window suggests thorough vetting; no blocking issues. |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Solves a universal, invisible problem; clear trigger definition; minimal dependencies. |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Self-contained, high utility for design/frontend tasks; active discussion through Jul 21. |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | Foundational for marketplace trust; addresses Issue #492's security concerns implicitly. |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT/OpenDocument** | Standards-based format; long iteration (Mar–Jul) implies near-completion. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, reusable skill infrastructure*: a reliable skill-creator toolchain that works cross-platform, a secure namespace/governance model that prevents impersonation, and org-level distribution—so that skills become shareable, auditable, first-class components rather than fragile local scripts.**

---

# Claude Code Community Digest — 2026-07-31

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The issue tracker shows **50 active discussions**, with the community coalescing around three themes: **hook system reliability** (macOS Pre/PostToolUse hooks silently failing), **cross-platform session sync** (Desktop/Web/Mobile conversations disappearing), and **context-window management** (skills saturating context, auto-memory limits, and lack of programmatic compaction). A Windows GPU-process crash in the desktop app (MSIX) is blocking launch until Repair.

---

## 2. Releases

**None** in the last 24 hours.

---

## 3. Hot Issues (Top 10 by Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6305](https://github.com/anthropics/claude-code/issues/6305) | **Pre/PostToolUse hooks not executing on macOS** | Core automation broken; hooks are the primary extensibility mechanism for CI, linting, and policy enforcement. | 38 comments · 16 👍 · `bug, has repro, platform:macos, area:core` |
| [#13843](https://github.com/anthropics/claude-code/issues/13843) | **Share conversation context from Claude.ai → Claude Code** | Top-voted enhancement; enables seamless handoff between web planning and CLI execution. | 26 comments · 103 👍 · `enhancement, area:core, area:api` |
| [#81658](https://github.com/anthropics/claude-code/issues/81658) | **Cross-platform sync failure — Cowork conversations disappearing** | Suspected server-side incident; breaks multi-device workflow for teams. | 1 comment · 1 👍 · `bug` (new, high severity) |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Windows desktop app 1.24012.1: fatal GPU-process crash (MSIX unlaunchable)** | App bricks until Repair; affects all Windows Store users on Electron 42.7.0. | 10 comments · 1 👍 · `Windows` |
| [#64624](https://github.com/anthropics/claude-code/issues/64624) | **Real-time steering — send message mid-generation without queueing** | UX gap: “Interrupt and steer” documented but unimplemented; Escape discards work. | 9 comments · 17 👍 · `duplicate, enhancement, area:tui, area:core` |
| [#79824](https://github.com/anthropics/claude-code/issues/79824) | **Artifact sharing fails: “This version can’t be shared publicly” persists** | Blocks public sharing of published artifacts (Markdown + Mermaid). | 8 comments · 15 👍 · `bug` |
| [#42050](https://github.com/anthropics/claude-code/issues/42050) | **Unified sessions, settings & projects across Desktop, Mobile, CLI** | High-demand unification; sessions/projects currently siloed per surface. | 6 comments · 27 👍 · `enhancement` |
| [#77846](https://github.com/anthropics/claude-code/issues/77846) | **Expose `rate_limits.model_scoped` in statusLine stdin** | Custom statuslines need per-model weekly windows (e.g., Fable) for accurate usage display. | 6 comments · 6 👍 · `enhancement, area:statusline` |
| [#63566](https://github.com/anthropics/claude-code/issues/63566) | **`/claude-api` bundled skill saturates context (~77% spike from neutral question)** | Skill blows context budget unconditionally; renders long sessions unusable. | 6 comments · 7 👍 · `bug, platform:windows, area:skills` |
| [#35150](https://github.com/anthropics/claude-code/issues/35150) | **Allow tools/skills to programmatically clear context + inject continuation prompt** | Closed as stale, but addresses critical need: selective context compaction without losing decisions/progress. | 13 comments · 3 👍 · `enhancement, area:hooks, area:skills, stale` |

---

## 4. Key PR Progress

Only **one PR** updated in the last 24h: [#82555](https://github.com/anthropics/claude-code/pull/82555) — titled “Claude/youtube instagram mcp yn2u6s”, closed without merge. Appears to be spam/low-quality; no substantive engineering movement.

---

## 5. Feature Request Trends (Distilled from All Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Cross-platform session continuity** | #42050, #13843, #81658, #71616 | 130+ 👍 combined; users expect single source of truth |
| **Hook/skill programmability** | #6305, #72404, #35150, #63566 | Core extensibility blocked by execution bugs & missing APIs |
| **Real-time interaction control** | #64624, #79575 | “Steer mid-stream” and `/fork` permission parity |
| **Context-window tooling** | #35150, #79217, #80787, #82748 | Configurable auto-memory, programmatic compaction, model denominator fixes |
| **Status-line / observability richness** | #77846, #82408 | Per-model rate limits, actionable auto-update diagnostics |
| **Artifact & sharing polish** | #79824, #82758 | Public sharing reliability, LaTeX rendering in VS Code extension |
| **Windows/Desktop stability** | #80444, #80584, #70955, #74055 | GPU crashes, HCS service loss, IME overlap, scheduler ghosts |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Hooks silently fail on macOS** — Pre/PostToolUse not firing breaks lint/CI/policy automation; no visible error, just no-op ([#6305](https://github.com/anthropics/claude-code/issues/6305)).
2. **Cross-device sync is unreliable** — Conversations vanish across Desktop/Web/Android; iOS auto-archives new sessions ([#81658](https://github.com/anthropics/claude-code/issues/81658), [#71616](https://github.com/anthropics/claude-code/issues/71616)).
3. **Windows desktop app instability** — GPU crash bricks MSIX package; HCS services missing even after OS repair; IME candidate window overlaps input ([#80444](https://github.com/anthropics/claude-code/issues/80444), [#80584](https://github.com/anthropics/claude-code/issues/80584), [#70955](https://github.com/anthropics/claude-code/issues/70955)).
4. **Context management lacks control** — Skills blow context budget; auto-memory capped at 200 lines/25 KB non-configurable; no programmatic “compact & continue” ([#63566](https://github.com/anthropics/claude-code/issues/63566), [#79217](https://github.com/anthropics/claude-code/issues/79217), [#35150](https://github.com/anthropics/claude-code/issues/35150)).
5. **Artifact sharing broken** — “Can’t share publicly” error persists across republish/new artifacts ([#79824](https://github.com/anthropics/claude-code/issues/79824)).
6. **Misleading auto-update status** — “Run `claude doctor`” suggests fix but doctor reports clean ([#82408](https://github.com/anthropics/claude-code/issues/82408)).
7. **Subagent tool labeling inverted** — `tools: []` shows as “All tools” in parent listing ([#82562](https://github.com/anthropics/claude-code/issues/82562)).
8. **No mid-generation steering** — Typing queues; Escape discards work; documented “Interrupt and steer” missing ([#64624](https://github.com/anthropics/claude-code/issues/64624)).

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-07-31 23:59 UTC.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-31

## 1. Today's Highlights
No new releases shipped in the last 24 hours. The community is focused on three critical stability fronts: a **VS Code extension crash** (Codex Diff) blocking macOS users, **Windows kernel-level BSODs** tied to SysmonDrv reinstallation, and **persistent rate-limit opacity** fueling user frustration. Meanwhile, the codebase saw a wave of internal hardening PRs—protocol exports, sandbox permissions, Enterprise plan support, and a new tool-free thread mode—signaling preparation for broader platform maturity.

## 2. Releases
*No releases published in the last 24 hours.*

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#35058](https://github.com/openai/codex/issues/35058) | **Codex Diff crashes VS Code on macOS** — “Oops, an error has occurred” on every repo, fresh workspaces included. | Blocks core review workflow for all macOS Apple Silicon users on VS Code 1.128.0 + extension 26.721.30844. | **39 comments, 100 👍** — Highest engagement in the set; users report total inability to review diffs. |
| [#31035](https://github.com/openai/codex/issues/31035) | **Windows Codex Desktop reinstall SysmonDrv v13.22 → BSODs** (WinDbg confirms `SysmonDrv.sys`). | Kernel driver reinstalls after forced uninstall, causing repeated crashes; severe safety/stability risk. | **22 comments** — Multiple kernel dumps analyzed; users call it a “showstopper” for Windows adoption. |
| [#25453](https://github.com/openai/codex/issues/25453) | **Windows Desktop spawns `powershell.exe` every second** → sustained high CPU. | Continuous process polling drains battery/CPU; observed on Win 10.0.26200, app v26.527.31326. | **21 comments, 5 👍** — Long-standing (since May); users share ProcMon traces. |
| [#35420](https://github.com/openai/codex/issues/35420) | **Codex stream disconnects on OneDrive-backed workspaces** when OneDrive degraded. | Breaks ChatGPT Work/Codex surface on Windows; “stream disconnected before completion” errors. | **17 comments** — Two request IDs provided; correlates with OneDrive sync health. |
| [#20570](https://github.com/openai/codex/issues/20570) | **Windows sandbox: `CreateProcessAsUserW failed: 1920`** after CLI upgrade (0.128.0). | Prevents any sandboxed execution; regression on Win 10.0.26200, affects Plus subscribers. | **15 comments, 11 👍** — Blocks local development entirely for affected users. |
| [#15723](https://github.com/openai/codex/issues/15723) | **Background subagents don’t wake calling agent on completion** (Linux, CLI 0.116.0). | Breaks delegation/continuation patterns; agent stalls waiting for subagent finish. | **13 comments, 7 👍** — Core orchestration bug; impacts complex multi-step workflows. |
| [#35552](https://github.com/openai/codex/issues/35552) | **Rate-limit outrage** — “FUCK YOU OPENAI” (CLI v144). | Raw expression of Plus-tier frustration with GPT-SOL 5.6 limits; no template data filled. | **13 comments** — Signals sentiment peak; see also #36213. |
| [#32177](https://github.com/openai/codex/issues/32177) | **Text-log attachment triggers “Request blocked”** and poisons subsequent turns (macOS, App 26.707.31428). | Attaching plain logs breaks the entire session; requires new thread to recover. | **12 comments, 12 👍** — “Session poisoning” pattern; high severity for debugging workflows. |
| [#24080](https://github.com/openai/codex/issues/24080) | **Expose rate-limit reset times, balance, plan as `status_line` tokens** (enhancement). | Backend returns rich data (`resetsAt`, `credits.balance`, `planType`) but CLI only shows percentages. | **11 comments** — Top-voted enhancement; developers building custom dashboards need this. |
| [#32707](https://github.com/openai/codex/issues/32707) | **Pro 5-hour usage bucket vanished** from App & `account/rateLimits/read` (Win, App 26.707.8168.0). | Usage telemetry regression; Pro users blind to short-term bucket consumption. | **8 comments, 3 👍** — Confirmed on multiple machines; related to #24080. |

## 4. Key PR Progress (Top 10 by Architectural Significance)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#31817](https://github.com/openai/codex/pull/31817) | **Automated `models.json` update** (github-actions[bot]) | Keeps model registry current; enables new model rollout without code changes. |
| [#36239](https://github.com/openai/codex/pull/36239) | **Refresh precomputed app-server protocol exports** | Adds connector candidates to `ExternalAgentConfigDetectResponse`; new `enterprise_cbp_automation` plan type; `LegacyAppPathString` adoption. |
| [#36237](https://github.com/openai/codex/pull/36237) | **Ignore symbolic `/tmp` permissions on Windows** | Fixes sandbox policy false positives; `:slash_tmp` is Unix-only, should not affect Windows decisions. |
| [#36228](https://github.com/openai/codex/pull/36228) | **Support Enterprise automation account plans** | Recognizes `enterprise_cbp_automation` across auth, backend, app-server, rate-limit APIs; exposed in protocol schemas. |
| [#36223](https://github.com/openai/codex/pull/36223) | **Preserve executor paths in read command actions** | Ensures file references use executor’s filesystem, not host-interpreted paths; critical for remote/heterogeneous environments. |
| [#36221](https://github.com/openai/codex/pull/36221) | **Ignore passthrough metadata when reconciling rollout items** | Prevents `internal_chat_message_metadata_passthrough` from corrupting replayed tool calls/outputs. |
| [#36218](https://github.com/openai/codex/pull/36218) | **Expose connector candidates in external agent detection** | Adds `connectors[]` with normalized name, session count, detection source (remote MCP, session history) to detection response. |
| [#36217](https://github.com/openai/codex/pull/36217) | **Run code mode exclusively through standalone host** | Moves V8 runtime to dedicated `codex-code-mode-runtime` crate; removes embedded fallback; resolves host from active installation. |
| [#31458](https://github.com/openai/codex/pull/31458) | **exec-server: route remote network policy decisions** | Routes proxy policy misses to process-scoped core decider; preserves attribution; fails closed on disconnect/mismatch. |
| [#31922](https://github.com/openai/codex/pull/31922) | **core: add tool-free thread mode** | Opt-in `tool_free` feature skips MCP startup, skill/plugin enumeration, enforces empty tool router; for lightweight helper turns (e.g., title generation). |

## 5. Feature Request Trends
1. **Rate-limit transparency** — Developers demand real-time access to `resetsAt`, `balance`, `planType`, and bucket-level visibility (both CLI `status_line` and App UI). Issues #24080, #32707, #36213.
2. **Windows-first stability** — Sandbox execution, CPU polling, kernel driver conflicts, and OneDrive integration dominate Windows feedback. Issues #31035, #25453, #20570, #35420, #35803.
3. **Session/thread lifecycle control** — Fork storage amplification (#35647), subagent wake-up (#15723), reasoning-level reset (#26930), compacting loops (#20983), symlink identity (#31895).
4. **Cross-device workspace continuity** — Remote session persistence, project list sync, and seamless handoff between machines (#34804, #23152).
5. **Model selector & extension reliability** — Duplicate model entries (#35066), diff viewer crashes (#35058), Chrome extension false positives (#34118).

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)
- **“Windows is a second-class platform”** — BSODs, runaway PowerShell spawns, sandbox permission errors (1920), corrupted dependency bundles that survive reinstall, and OneDrive-induced stream drops create a perception of neglect.
- **“Rate limits are a black box”** — Plus/Pro users cannot programmatically or visually track consumption, reset windows, or plan entitlements; the new GPT-SOL 5.6 tier exacerbated the gap.
- **“Core editing tools break silently”** — Codex Diff crash (macOS), session poisoning via log attachment, subagent coordination failure, and reasoning-level regression erode trust in daily workflows.
- **“Sandbox/permissions model is opaque and brittle”** — Unelevated sandbox rejects valid writable roots (#35864), symlink handling splits projects (#31895), and filesystem override checks fail without actionable diagnostics.
- **“Extension parity lags behind CLI/App”** — VS Code diff viewer, Chrome extension blocking, and project sorting controls (#33077) show inconsistent investment across surfaces.

---

*Data sourced from `github.com/openai/codex` — issues and PRs updated 2026-07-30 → 2026-07-31.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-31

## 1. Today's Highlights
A critical **SSRF vulnerability (CVSS 8.6)** in the `web-fetch` tool was disclosed and a fix PR opened, addressing DNS resolution bypass that could expose internal services. Concurrently, multiple high-priority agent stability bugs persist—subagents incorrectly reporting success after hitting turn limits, generalist agent hangs, and shell execution stalls—indicating ongoing reliability challenges in the agent orchestration layer. The team is also advancing evaluation infrastructure with 76 behavioral eval tests now running across 6 supported models.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (Top 10 Noteworthy)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#28555](https://github.com/google-gemini/gemini-cli/issues/28555) | **SSRF via DNS Resolution Bypass in web-fetch Tool (CVSS 8.6)** | Critical security flaw: synchronous `isPrivateIp()` check allows domains resolving to private IPs (e.g., metadata endpoints) to bypass SSRF protection. | 2 comments, newly filed (2026-07-28), fix PR [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) already open. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS reported as GOAL success** | `codebase_investigator` subagent returns `status: "success"` + `Termination Reason: "GOAL"` despite hitting turn limit before any analysis—masks failures in automated workflows. | 12 comments, 👍 2, P1, needs retesting. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs forever** | Deferring to generalist agent causes indefinite hangs (up to 1hr) on simple tasks like folder creation; disabling subagents works around it. | 8 comments, 👍 8, P1, high user impact. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command execution stuck at "Waiting input" after completion** | CLI shows shell command as active/"Awaiting user input" after command finishes; affects simple non-interactive commands. | 4 comments, 👍 3, P1, effort/medium. |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component level evaluations (EPIC)** | Tracking 76 behavioral eval tests across 6 models; follow-up to #15300 to harden evaluation infrastructure. | 7 comments, P1, tied to AIQ/eval infra. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Background extractor re-surfaces unprocessed sessions it skipped (low-signal), causing infinite retry loops. | 5 comments, P2, memory system quality. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Add deterministic redaction & reduce Auto Memory logging** | Secrets redacted *after* entering model context; service logs skill data—privacy/compliance risk. | 4 comments, P2, security-labeled. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess impact of AST-aware file reads, search, mapping (EPIC)** | Investigating whether AST-aware tooling (method-bound reads, code navigation) reduces turns/token noise. | 7 comments, 👍 1, P2, customer-issue. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini does not use skills/sub-agents autonomously** | Model rarely invokes custom skills/sub-agents unless explicitly instructed; limits composability. | 6 comments, P2, agent behavior. |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | **(Sub)agents running without permission since v0.33.0** | Subagents (e.g., generalist) activate despite `agents.mode: disabled` in all configs; regression in v0.33.0. | 3 comments, P2, needs retesting. |

## 4. Key PR Progress (Top 10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) | **Security Fix** | Resolves #28555: replaces synchronous `isPrivateIp()` with async DNS resolution (`isPrivateIpAsync`) in `web-fetch.ts` to block domains resolving to private IP ranges. |
| [#28586](https://github.com/google-gemini/gemini-cli/pull/28586) | **Bug Fix (P2)** | Preserves `thoughtSignature` in `functionCall` parts during parallel tool calls; fixes 400 Bad Request regression introduced in v0.53.0. |
| [#28519](https://github.com/google-gemini/gemini-cli/pull/28519) | **Bug Fix (P1)** | Awaits `oauth_creds.json` write and forces consent to prevent infinite auth loop (#28430). |
| [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) | **UX Improvement (P1)** | Propagates `InvalidStreamError` details (type/message) to CLI UI for actionable guidance (e.g., suggest `/compress` for context exhaustion). |
| [#28581](https://github.com/google-gemini/gemini-cli/pull/28581) | **Perf Fix (P2)** | Skips diff hunk markers (`@@ ... @@`) during `@` file reference processing; avoids recursive glob searches causing heap growth on large diffs. |
| [#28603](https://github.com/google-gemini/gemini-cli/pull/28603) | **Security/Dep (P1)** | Upgrades sandbox Dockerfile from Node 20 (EOL 2026-04-30) to Node 22; mitigates supply-chain risk in model-executed runtime. |
| [#28599](https://github.com/google-gemini/gemini-cli/pull/28599) | **Bug Fix (Closed)** | Classifies `MODEL_CAPACITY_EXHAUSTED` (429) as terminal error when no retry delay specified; prevents client hang on preview model capacity limits. |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | **Bug Fix (P1)** | Fixes MCP OAuth token refresh for dynamically registered clients; uses stored `client_id` instead of failing locally and deleting credentials. |
| [#28596](https://github.com/google-gemini/gemini-cli/pull/28596) | **Feature (P3)** | Adds `--list-all-sessions` flag to list chat sessions across all workspaces, grouped by path—addresses session discoverability. |
| [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) | **Bug Fix** | Loads `.env` files *before* resolving settings placeholders; fixes race where env vars weren't available during settings expansion. |

## 5. Feature Request Trends
From the issue corpus, three clear directions emerge:
1. **AST-aware tooling** (#22745, #22746): Multiple EPICs investigate whether method-level reads, structural search, and codebase mapping via AST reduce turn count and token waste.
2. **Agent autonomy & observability** (#21968, #22598, #21763): Requests for models to proactively use skills/sub-agents, plus tooling to inspect/subagent trajectories (`/chat share`) and include subagent context in bug reports.
3. **Evaluation hardening** (#24353, #23166, #23313): Investment in behavioral eval stability (76 tests, 6 models), flake reduction, and mandatory-pass gates for steering evals.

## 6. Developer Pain Points (Recurring Frustrations)
- **Agent reliability**: Generalist/subagent hangs (#21409, #22093), false success reporting (#22323), and permission bypasses erode trust in delegation.
- **Shell integration fragility**: "Waiting input" ghost states (#25166), interactive prompt deadlocks (#22465), and tmp script sprawl (#23571) disrupt flow.
- **Memory system opacity**: Auto Memory retry loops (#26522), silent patch drops (#26523), and post-hoc redaction (#26525) create debugging blind spots.
- **Configuration drift**: Browser agent ignoring `settings.json` (#22267), 400 errors at >128 tools (#24246), and `\n` escaping bugs (#22466) suggest settings/tool plumbing needs hardening.
- **Terminal UX**: Resize flicker (#21924), external editor corruption (#24935), and output hook crashes (#22186) affect daily interactive use.

---

*Digest generated from `google-gemini/gemini-cli` GitHub activity (2026-07-31). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-31

## Today's Highlights

Version **1.0.77** shipped yesterday with a browser-based OAuth login flow (now default for local interactive terminals), the ability to edit `ask_user` freeform answers in `$EDITOR` via **Ctrl+G**, and unconditional autopilot approval now disabling the sandbox for the current session. The issue tracker shows 27 recently updated items, with notable regressions in v1.0.76 around "Undefined" string conversion crashes, transcript rendering blanks, and sub-agent failures with full tool access.

---

## Releases

### v1.0.77 (2026-07-30)
- **Web OAuth login flow** — `copilot login` now opens a browser by default on local interactive terminals (device code remains default for remote/headless). Force with `--web-flow` / `--device-code` or choose via `/login`.  
- **Ctrl+G edits `ask_user` answers** — Opens your `$EDITOR` to edit freeform responses without closing the prompt.  
- **Autopilot sandbox bypass** — Unconditional approval now disables sandbox for the current session when bypass is allowed.  
🔗 [Release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.77)

---

## Hot Issues (Top 10 by Impact/Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#4305** | **Crash: "Failed to convert JavaScript value 'Undefined' into rust type 'String'"** | Regression in v1.0.76 breaking *all* commands immediately on launch. | 🔥 **Blocker** — 1 comment, immediate rollback reports |
| **#4311** | **Transcript renders blank until width change / new message** | Interactive sessions become unreadable; `/resume` doesn't recover. | 🔥 **High-visibility UX regression** — new issue, 0 comments but critical |
| **#4293** | **Sub-agents with full tool access return empty (no error)** | `task` tool silently fails for unrestricted agents; restricted agents work. | 🔴 **Core agent workflow broken** — 2 comments |
| **#3767** | **Oversized attachment permanently wedges session (CAPI 5 MB limit)** | No recovery path; session stuck after large attachment error. | 👍 1 • 13 comments • open since Jun 11 |
| **#4295** | **AI Credits near-limit warning (parity with VS Code)** | Feature request for subscription visibility in CLI. | 💬 8 comments • active discussion |
| **#1381** | **Rewind requires git (blocks jj/other VCS users)** | Long-standing request; works in VS Code without git. | 👍 10 • 4 comments • open since Feb |
| **#4299** | **Typing latency degrades over long sessions** | Background agents make CLI unusable after extended use. | 👍 1 • performance regression |
| **#4306** | **Subtasks freeze in autopilot loops (speckit agents)** | Fleet/autopilot workflows stall mid-loop with no output. | 🔴 **Autopilot reliability** |
| **#4297** | **Crash on launch if `--log-level` ≠ "all"/"default"** | Configurable logging broken; crashes on `error`, `warn`, `info`, `debug`. | 🔴 **Config regression** |
| **#4310** | **Engine falls back to 128K token budget for unknown models** | Silent truncation for large-context models (e.g., 1M Anthropic). | 🔴 **Context window misconfiguration** |

---

## Key PR Progress

*No pull requests updated in the last 24 hours.*  
🔗 [PR list](https://github.com/github/copilot-cli/pulls)

---

## Feature Request Trends

| Theme | Representative Issues | Frequency |
|-------|----------------------|-----------|
| **Authentication flexibility** | #4300 (bearerToken for BYOK), #4295 (credit warnings) | High — enterprise/compliance needs |
| **VCS-agnostic session features** | #1381 (rewind without git) | Persistent — 5+ months open |
| **Sandbox granularity** | #4298 (selective tool enablement in `settings.json`) | Emerging — security/compliance |
| **Model/provider extensibility** | #4300 (bearerToken), #4301 (MCP union schemas) | Growing — BYOK/MCP adoption |
| **Session observability** | #4295 (credit warnings), #4308/4309 (phantom credit burn) | Rising — cost transparency |

---

## Developer Pain Points (Recurring Frustrations)

1. **v1.0.76 regression cluster** — Multiple crash/blank-rendering issues (#4305, #4311, #4297) suggest insufficient pre-release validation. Developers report immediate rollbacks.
2. **Silent failures in agent/tool chains** — #4293 (empty sub-agent returns), #4306 (frozen subtasks), #4301 (MCP schema mangling) erode trust in autopilot/fleet workflows.
3. **Session durability** — #3767 (wedged by oversized attachment), #4311 (transcript loss), #1381 (rewind gatekept by git) make long-running sessions fragile.
4. **Terminal compatibility gaps** — #2841 (MobaXterm scroll), #4296 (iTerm2 Cmd+V), #4294 (COLORTERM injection on resume) fragment the experience across environments.
5. **Configuration fragility** — #4297 (log-level crash), #4310 (hardcoded 128K fallback) indicate config paths lack defensive defaults.

---

*Generated from github.com/github/copilot-cli data as of 2026-07-31 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-31

## Today's Highlights
No new releases in the past 24 hours. The community is actively discussing a long-standing **Memory System** feature request (#1283) that gained renewed traction, while two fresh bugs surfaced: an **LLM 429 overload error** blocking usage entirely (#2571) and a **CLI freeze on Windows** correlated with browser tab state (#2570). A hook-management fix (#2565) addresses a fire-and-forget task leak in the asyncio layer.

---

## Releases
*No releases published in the last 24 hours.*

---

## Hot Issues (3 updated in last 24h)

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Feature: Memory System — Persistent context across sessions** | High-impact request for both automatic (AI-managed) and manual (user-defined) memory to retain project patterns, preferences, and context between sessions. Core to "agentic" workflow continuity. | 7 comments since Feb 2026; updated 2026-07-30 — indicates sustained interest and ongoing design discussion. |
| [#2571](https://github.com/MoonshotAI/kimi-cli/issues/2571) | **Bug: LLM Overloaded (429) — Can't use Kimi at all** | Blocks all usage for the reporter on v1.49.0 (Moderato, Kimi K3, macOS Tahoe). Points to provider-side rate limiting or quota exhaustion. | 1 comment; critical severity — immediate usability blocker. |
| [#2570](https://github.com/MoonshotAI/kimi-cli/issues/2570) | **Bug: CLI intermittently freezes with spinning moon; correlated with browser tab state** | Unresponsive UI on Windows 11 (v0.29.2, KIMI Login, K3 HIGH). Suggests a cross-process or WebView/resource contention issue. | 0 comments yet; needs reproduction details — potential platform-specific regression. |

---

## Key PR Progress (1 updated in last 24h)

| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#2565](https://github.com/MoonshotAI/kimi-cli/pull/2565) | **fix(hooks): keep a strong reference to fire-and-forget hook triggers** | Prevents premature GC of `asyncio.create_task()` calls by storing a strong reference; adds done-callback for exception logging. Fixes #2564 (hook tasks silently dropped). | Open; updated 2026-07-30 — awaits review/merge. |

---

## Feature Request Trends
From the active issue set, the dominant direction is **persistent, cross-session intelligence**:
- **Memory/Context Persistence** (#1283): Users want the CLI to "remember" project conventions, codebase patterns, and personal preferences without manual re-injection each session.
- **Reliability over novelty**: The two new bugs (#2571, #2570) highlight that stability (provider quotas, UI responsiveness) is a prerequisite for advanced features.

---

## Developer Pain Points
1. **Provider Rate Limits** — 429 errors render the tool unusable; no clear fallback or retry/backoff guidance surfaced in the issue.
2. **UI Freezes on Windows** — Spinning-moon hang correlates with browser state, suggesting Electron/WebView resource contention or main-thread blocking.
3. **Hook Task Leaks** — Fire-and-forget async hooks were being garbage-collected before completion (#2564), causing silent failures in custom tooling.
4. **Version Fragmentation** — Reports span v0.29.2 to v1.49.0; users on older builds may miss fixes already landed.

---

*Digest generated from GitHub data as of 2026-07-31 00:00 UTC. For real-time updates, watch the [kimi-cli repository](https://github.com/MoonshotAI/kimi-cli).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-31

## Today's Highlights
OpenCode shipped **v1.18.10** with automatic Modal model discovery and a slate of desktop UX polish (toast stacking, attachment dedup, persistent new-session button). The issue tracker shows a cluster of high-engagement bugs around the TUI "exiting loop" message, edit-tool regressions since v1.15.x, and provider compatibility (qwen, GLM, ZAI). PR velocity is heavy on model-provider internals: input-limit enforcement, Gemini thinking levels, Codex encapsulation, and xAI option mapping.

---

## Releases
### v1.18.10 (2026-07-31)
| Area | Changes |
|------|---------|
| **Core** | Automatic discovery of available Modal models ([@devennavani](https://github.com/devennavani)) |
| **Desktop** | Prevent duplicate attachments; always show New Session button; improved toast notifications (stacking, dismissal, mobile layout); refined tab hover/active states |

[Release notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.10)

---

## Hot Issues (Top 10 by Engagement & Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#38801](https://github.com/anomalyco/opencode/issues/38801) | **"exiting loop" message breaks TUI usability** | Core TUI loop emits noisy message that drives users away; blocks adoption for OpenAI-compatible API users | 17 comments, 0 👍 — active discussion, no workaround |
| [#5200](https://github.com/anomalyco/opencode/issues/5200) | **/compact should support OpenAI Responses API compaction** | High-demand feature for GPT-5/Codex users; enables cheaper context management | 11 comments, **28 👍** — strongest community vote in this batch |
| [#29754](https://github.com/anomalyco/opencode/issues/29754) | **qwen3.7-max 401 via oa-compat (`response_format.type`)** | Provider compat regression; blocks popular model via OpenAI-compatible layer | 8 comments — closed but signals broader oa-compat fragility |
| [#28011](https://github.com/anomalyco/opencode/issues/28011) | **Edit tool "interrupted" on consecutive calls (v1.15.x regression)** | Core editing workflow broken; worked in v1.14.x | 6 comments — regression, high workflow impact |
| [#29334](https://github.com/anomalyco/opencode/issues/29334) | **GLM-5.1 ZAI "Invalid API parameter"** | Sudden breakage without config changes; affects paid subscribers | 6 comments, 3 👍 — provider-specific but user-facing |
| [#26907](https://github.com/anomalyco/opencode/issues/26907) | **Permission prompt stuck after child-session approval** | Web UI permission flow leaves zombie prompt; requires manual dismiss | 5 comments — UX papercut in subagent workflows |
| [#30038](https://github.com/anomalyco/opencode/issues/30038) | **Global MCP config ignored when project `.opencode/` exists** | Config precedence surprise; breaks multi-project MCP sharing | 4 comments, 1 👍 — config-system design issue |
| [#29963](https://github.com/anomalyco/opencode/issues/29963) | **Linux PRIMARY selection (middle-click paste) support** | Missing standard Linux clipboard behavior; TUI only uses CLIPBOARD | 4 comments, **4 👍** — clear Linux-user demand |
| [#13438](https://github.com/anomalyco/opencode/issues/13438) | **`opencode run` emits no OTLP traces despite `experimental.openTelemetry`** | Observability broken for CLI runs; spans lost at process exit | 4 comments, 2 👍 — infra/ops blocker |
| [#30101](https://github.com/anomalyco/opencode/issues/30101) | **Session becomes extremely laggy after extended conversation** | Progressive slowdown over long sessions; only fixed by new session | 2 comments, **2 👍** — memory/state leak suspicion |

---

## Key PR Progress (Top 10 by Scope & Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#35311](https://github.com/anomalyco/opencode/pull/35311) | Bug fix + Refactor | **Multiple clones of same repo = different projects** — closes 14 issues; fixes project-identity collision for worktrees/monorepos |
| [#39797](https://github.com/anomalyco/opencode/pull/39797) | Bug fix | **Respect model input limits** — propagates `input` limits through catalog → provider → compaction budget; aligns GPT-5.4/5.5 eligibility |
| [#39796](https://github.com/anomalyco/opencode/pull/39796) | Feature | **Gemini thinking levels** — maps `thinkingBudget`, `includeThoughts`, `thinkingLevel` natively; stops forwarding unrelated Google settings |
| [#39795](https://github.com/anomalyco/opencode/pull/39795) | Bug fix | **Spawn configured POSIX shell directly on Windows** — fixes `bash` tool when `shell` points to MSYS/Git Bash (`cmd()` was wrapping incorrectly) |
| [#39257](https://github.com/anomalyco/opencode/pull/39257) | Bug fix | **Preserve custom Codex endpoints** — keeps ChatGPT/Codex routing inside OpenAI plugin; lets user config override plugin defaults |
| [#39734](https://github.com/anomalyco/opencode/pull/39734) | Refactor | **Contain Codex in OpenAI plugin** — moves all ChatGPT/Codex logic out of generic resolver; applies subscription/eligibility checks in-plugin |
| [#39787](https://github.com/anomalyco/opencode/pull/39787) | Bug fix | **Map xAI native options** — validates/forwards `reasoning_effort`, `storage`, `prompt_cache_key`; drops unsupported keys silently |
| [#39776](https://github.com/anomalyco/opencode/pull/39776) | Feature | **Hot-reload local TUI plugins** — edit plugin file → live update in running TUI; crashed plugins isolated, no app restart needed |
| [#39792](https://github.com/anomalyco/opencode/pull/39792) | Docs | **Document V1 plugin export format** — clarifies `export default { id, server }` is required for file-based plugins (legacy format unsupported) |
| [#39791](https://github.com/anomalyco/opencode/pull/39791) | Bug fix | **Stop retrying fixed-window usage quotas** — avoids pointless retries on 5-hour/weekly/monthly 429s where backoff cannot help |

---

## Feature Request Trends (Distilled from Issues)

| Direction | Representative Issues | Signal |
|-----------|----------------------|--------|
| **Provider extensibility & discovery** | [#5200](https://github.com/anomalyco/opencode/issues/5200) (Responses API compact), [#30071](https://github.com/anomalyco/opencode/issues/30071) (modalities config), [#27554](https://github.com/anomalyco/opencode/pull/27554) (LAN discovery), [#29885](https://github.com/anomalyco/opencode/issues/29885) (provider mgmt UI) | Users want **first-class support for OpenAI-compatible APIs** — not just "it works" but feature parity (compaction, vision, modalities, thinking) |
| **Session & context control** | [#5200](https://github.com/anomalyco/opencode/issues/5200), [#30101](https://github.com/anomalyco/opencode/issues/30101) (lag), [#30054](https://github.com/anomalyco/opencode/issues/30054) (history loss on upgrade) | **Long-session stability** and **portable context management** are top pain points |
| **Linux/desktop parity** | [#29963](https://github.com/anomalyco/opencode/issues/29963) (PRIMARY selection), [#27743](https://github.com/anomalyco/opencode/issues/27743) (git in Docker), [#30132](https://github.com/anomalyco/opencode/issues/30132) (permission dialog layout) | **Linux TUI/Desktop UX gaps** — clipboard, packaging, dialog scrolling |
| **MCP & tooling hygiene** | [#30123](https://github.com/anomalyco/opencode/issues/30123) (orphan processes), [#30073](https://github.com/anomalyco/opencode/issues/30073) (restart orphans), [#30038](https://github.com/anomalyco/opencode/issues/30038) (config precedence) | **MCP lifecycle management** — eager start, orphan cleanup, config layering |
| **Observability & debugging** | [#13438](https://github.com/anomalyco/opencode/issues/13438) (OTel), [#30087](https://github.com/anomalyco/opencode/issues/30087) (span flush), [#28358](https://github.com/anomalyco/opencode/issues/28358) (mouse noise) | **Telemetry that works out of the box** — especially for `opencode run` |

---

## Developer Pain Points (Recurring Frustrations)

1. **TUI "exiting loop" spam** — The single most mentioned blocker for TUI adoption; users abandon OpenCode because of it ([#38801](https://github.com/anomalyco/opencode/issues/38801)).
2. **Edit-tool regression (v1.15.x+)** — Consecutive edits to same file fail with "interrupted"; worked in v1.14.x ([#28011](https://github.com/anomalyco/opencode/issues/28011)).
3. **Provider compat fragility** — qwen, GLM, ZAI, Ollama subagents all hit 401/parameter errors via oa-compat or native paths ([#29754](https://github.com/anomalyco/opencode/issues/29754), [#29334](https://github.com/anomalyco/opencode/issues/29334), [#21181](https://github.com/anomalyco/opencode/issues/21181)).
4. **MCP process leaks** — Orphaned `node.exe`/`blender-mcp` processes accumulate on exit/restart; eager start wastes resources ([#30123](https://github.com/anomalyco/opencode/issues/30123), [#30073](https://github.com/anomalyco/opencode/issues/30073)).
5. **Session state loss on upgrade** — v1.15.11 → v1.15.13 wiped Web UI history ([#30054](https://github.com/anomalyco/opencode/issues/30054)).
6. **OTel/observability broken for CLI** — Spans never flush due to `process.exit()` before processor shutdown ([#13438](https://github.com/anomalyco/opencode/issues/13438), [#30087](https://github.com/anomalyco/opencode/issues/30087)).
7. **Permission-prompt UX** — Stuck dialogs after subagent approval ([#26907](https://github.com/anomalyco/opencode/issues/26907)); long messages push buttons off-screen ([#30132](https://github.com/anomalyco/opencode/issues/30132)).
8. **Config precedence surprises** — Global MCP ignored when project `.opencode/` exists ([#30038](https://github.com/anomalyco/opencode/issues/30038)).

---

*Digest generated from GitHub data (issues/PRs updated 2026-07-31). Links point to live items on `anomalyco/opencode`.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-31

## Today's Highlights
The Pi ecosystem is advancing its **extension and protocol architecture** with new runtime-neutral client (`pi-client`) and wire protocol (`pi-protocol`) packages, enabling stateful remote sessions and ACP agent backends. Simultaneously, **provider integration stability** remains a focus—fixes landed for Anthropic stream parsing, OpenAI array-content handling, Bedrock error schemas, and Wayland clipboard support. A silent-crash vector from malformed package manifests was also patched.

## Releases
No new releases in the last 24 hours.

## Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7153](https://github.com/earendil-works/pi/issues/7153) | `/scoped-models` stalls ~5 min awaiting catalog refresh | Blocks model selection UX; synchronous catalog refresh freezes REPL | 6 comments, 1 👍 |
| [#7161](https://github.com/earendil-works/pi/issues/7161) | Anthropic path omits `x-client-request-id` | Breaks gateway session affinity for multi-account proxies | 6 comments |
| [#7248](https://github.com/earendil-works/pi/issues/7248) | Ctrl+V paste fails on Wayland (X11-only clipboard) | Linux/Wayland users cannot paste text; regression for non-X11 desktops | 4 comments |
| [#7027](https://github.com/earendil-works/pi/issues/7027) | API-key login hangs when model catalog stalls | Credential saved but TUI never returns; requires process restart | 3 comments, 4 👍 |
| [#7187](https://github.com/earendil-works/pi/issues/7187) | Silent crash from package manifest typo | One bad third-party package kills all chats/sessions for a user | 4 comments |
| [#7334](https://github.com/earendil-works/pi/issues/7334) | Skill install dir treated as project dir | Breaks skill invocation with `disable-model-invocation: true` | 3 comments |
| [#7283](https://github.com/earendil-works/pi/issues/7283) | Anthropic stream parser discards initial content block | First streaming chunk lost if non-empty; affects all Anthropic-compatible providers | 2 comments |
| [#7337](https://github.com/earendil-works/pi/issues/7337) | Tool-result images never resized | Oversized screenshots from tools/MCP brick the session (provider validation fails) | 1 comment |
| [#7336](https://github.com/earendil-works/pi/issues/7336) | Agent turn wedges after tool result (RPC mode) | Turn stuck in "streaming" despite tool completion; no `agent_end` emitted | 1 comment |
| [#6747](https://github.com/earendil-works/pi/issues/6747) | API for extensions to mutate agent message markdown | ✅ **Closed** — enables best-effort formula rendering without altering LLM context | 12 comments, 2 👍 |

## Key PR Progress
| # | PR | Type | Summary |
|---|----|------|---------|
| [#7163](https://github.com/earendil-works/pi/pull/7163) | Feature | Adds `SessionRepo.search()` with SQLite FTS5 virtual table; JSONL/memory fall back to in-memory scan |
| [#7348](https://github.com/earendil-works/pi/pull/7348) | Feature | New `@earendil-works/pi-client` package: transport-neutral session client with discriminated-union lifecycle, typed requests, multi-session handles |
| [#7344](https://github.com/earendil-works/pi/pull/7344) | Feature | New `@earendil-works/pi-protocol` package: validated remote-session commands/events/snapshots, CBOR encoding, length-prefixed framing |
| [#7346](https://github.com/earendil-works/pi/pull/7346) | Refactor | Shares TypeBox schemas between `pi-ai` and `pi-protocol`; aligns tool-call/stop-reason values |
| [#7343](https://github.com/earendil-works/pi/pull/7343) | Feature | Adds idempotent `AgentHarness.shutdown()`: aborts active turns/compaction, prevents new work, retains durable session |
| [#7231](https://github.com/earendil-works/pi/pull/7231) | Feature | **Closes #6747** — Markdown API for extensions to enhance agent message rendering |
| [#7261](https://github.com/earendil-works/pi/pull/7261) | Fix | **Closes #7248** — Wayland clipboard via `wl-paste`, X11 via `xclip`/`xsel`; mirrors copy path |
| [#7011](https://github.com/earendil-works/pi/pull/7011) | Fix | Intercepts native ESM imports so extensions reuse host Pi modules; prevents module-state divergence |
| [#7148](https://github.com/earendil-works/pi/pull/7148) | Feature (draft) | Experimental `/loadout` command to enable/disable extensions mid-session; persisted in session for resumption |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | Feature | Amazon Bedrock Mantle OpenAI Responses provider (supersedes earlier Bedrock work) |
| [#7309](https://github.com/earendil-works/pi/pull/7309) | Fix | Guards `JSON.parse` in RPC stdout handler; prevents stray log lines from crashing the RPC child |
| [#7340](https://github.com/earendil-works/pi/pull/7340) | Fix | Bold markdown invisible on light terminals (ANSI bold interpreted as bright); adds explicit foreground color |

## Feature Request Trends
1. **Extension surface expansion** — Markdown mutation API (#6747), runtime-neutral session client (#7348), loadout management (#7148), custom editor autocomplete forwarding (#7333), ACP agent backends (#7320).
2. **Provider diversity & parity** — OpenAI Responses background mode (#7339), Bedrock Mantle (#6216), Fireworks reliability (#7315), Vancine (Chinese models) (#7341), Anthropic request-ID parity (#7161).
3. **Session lifecycle & search** — SQLite FTS search (#7163), session duration in `/resume` (#7349), harness shutdown (#7343), global AGENTS.md from session logs (#7351).
4. **Protocol standardization** — Wire protocol for remote sessions (#7344), shared schemas (#7346), developer message role (#6534).

## Developer Pain Points
| Area | Recurring Frustrations |
|------|------------------------|
| **Platform compatibility** | Wayland clipboard broken (#7248), terminal scrollback destroyed by `ESC[3J` (#7352), Devnagri text breaks harness UI (#6124), grapheme width estimation hacks (#6987). |
| **Provider quirks** | Anthropic missing headers (#7161) & dropped first stream block (#7283); OpenAI array `delta.content` stringified to `[object Object]` (#7061); Bedrock V3 error parsing (#7342); Fireworks instant timeouts (#7315). |
| **Extension friction** | Native ESM imports bypass alias/virtual modules causing duplicate Pi instances (#7011); custom editors lack `autocompleteMaxVisible` (#7333); RPC mode turns wedge silently (#7336); skill paths misresolved (#7334). |
| **Session stability** | Silent crashes from package manifest typos (#7187); auth flow hangs on catalog stall (#7027); oversized tool images brick sessions (#7337); concurrent inline prompts deadlock (#7007). |
| **Onboarding gaps** | No installation section in README (#6907); SDK examples use deprecated `getModel` (#7306); OAuth HTML helpers not public for extension branding (#6930). |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-31

## Today's Highlights
The **Omni multimodal integration experiment** dominates today's activity with 9 new tracking issues covering the full stack: media recognition, managed storage, upload delivery, policy orchestration, token estimation, and E2E validation — all targeting the protected `omni-experiment` branch. Meanwhile, a **daemon memory budgeting bug** (#8182) reveals each ACP child receives 50% of host memory without division, and the **v0.21.2 release failed** during publish (#8181). Nightly v0.21.1 shipped with CI and web-shell fixes.

## Releases
**v0.21.1-nightly.20260731.702932cc7**  
- `fix(ci)`: Added default bash shell to container jobs in qwen-triage (#7838)  
- `fix(web-shell)`: Partial notes — pre-release web-shell adjustments  
[Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1-nightly.20260731.702932cc7)

**v0.21.2 Release Failed** — Publish job errored; investigation underway (#8181)  
[Failed Run](https://github.com/QwenLM/qwen-code/actions/runs/30599138025)

## Hot Issues
| # | Title | Why It Matters | Community |
|---|-------|----------------|-----------|
| [#8186](https://github.com/QwenLM/qwen-code/issues/8186) | **[Omni] MediaRecognitionService: unified recognition, dual normalization triggers, metadata extraction** | Core M2 milestone — defines how all media enters the pipeline (sniff → probe → sha256) and where normalization hooks (user input & tool result) | 2 comments, new |
| [#8184](https://github.com/QwenLM/qwen-code/issues/8184) | **[Omni] Managed media storage: directory layout, atomic writes, startup recovery** | M1 foundation — `.qwen/omni/` layout with content-addressed `objects/`, staging, quarantine; 0700 perms, symlink rejection | 2 comments, new |
| [#8189](https://github.com/QwenLM/qwen-code/issues/8189) | **[Omni] DashScope temp upload service: getPolicy cache + OSS form upload** | M3 delivery — 240s credential cache, 100 QPS `getPolicy`, multipart OSS POST → `oss://` URLs | 2 comments, new |
| [#8182](https://github.com/QwenLM/qwen-code/issues/8182) | **bug(serve): daemon gives each ACP child 50% host memory, never divided** | Critical resource bug — daemon permits unbounded aggregate V8 old-space across children; OOM risk | 2 comments, new |
| [#8092](https://github.com/QwenLM/qwen-code/issues/8092) | **Build lower-maintenance desktop app around Web Shell** | Platform strategy — reuse Web Shell as primary UI instead of separate desktop implementation; Tauri/Electron wrapper discussion | 4 comments, 👍0 |
| [#8177](https://github.com/QwenLM/qwen-code/issues/8177) | **Cursor misalignment/garbled input: macOS + tmux + IME** | UX blocker — Chinese input in tmux causes cursor ghosts, pinyin leakage, candidate-window overlap | 2 comments, new |
| [#8179](https://github.com/QwenLM/qwen-code/issues/8179) | **feat(telemetry): distinguish tool execution outcomes from terminal call status** | Observability gap — adds `executionStatus` (entered/succeeded/failed) separate from terminal `status` (success/error/cancelled) | 2 comments, new |
| [#7966](https://github.com/QwenLM/qwen-code/issues/7966) | **How to get files created in a session? (direct writes vs code-generated)** | Developer workflow — no current way to attribute workspace files to sessions; impacts audit/reproducibility | 6 comments, 👍0 |
| [#8133](https://github.com/QwenLM/qwen-code/issues/8133) | **Main CI failed: E2E permission-control.test.ts flaky (yolo→plan mode)** | CI stability — autofix in-progress; SDK permission-mode transitions non-deterministic | 3 comments, autofix/approved |
| [#8181](https://github.com/QwenLM/qwen-code/issues/8181) | **Release Failed for v0.21.2 on 2026-07-31** | Release blocker — publish job failed; tags v0.21.2 | 1 comment, autofix/skip |

## Key PR Progress
| # | Title | Type | Status |
|---|-------|------|--------|
| [#8088](https://github.com/QwenLM/qwen-code/pull/8088) | **fix(cli): prevent silent VP-mode crash — uncaughtException handler + error visibility** | Bug fix / Reliability | Open, autofix/takeover |
| [#8093](https://github.com/QwenLM/qwen-code/pull/8093) | **feat(serve): daemon resource budgeting foundations** | Feature / Infrastructure | Open |
| [#8056](https://github.com/QwenLM/qwen-code/pull/8056) | **fix(serve): isolate managed memory by selected workspace** | Bug fix / Memory | Open, autofix/takeover |
| [#8178](https://github.com/QwenLM/qwen-code/pull/8178) | **feat(channels): isolate daemon adapter state by workspace** | Feature / Multi-tenancy | Open |
| [#8180](https://github.com/QwenLM/qwen-code/pull/8180) | **feat(telemetry): track tool execution outcomes** | Feature / Observability | Open, review/self-reported |
| [#8150](https://github.com/QwenLM/qwen-code/pull/8150) | **feat(core): add GenAI time-to-first-chunk tracing (OTel v1.41)** | Feature / Telemetry | Open, autofix/takeover |
| [#8005](https://github.com/QwenLM/qwen-code/pull/8005) | **feat(cli): adopt Goal v3 in interactive TUI** | Feature / UX | Open, autofix/takeover |
| [#7799](https://github.com/QwenLM/qwen-code/pull/7799) | **feat(cli): add agent view supervisor runtime (1/5)** | Feature / Architecture | Open, autofix/takeover |
| [#8057](https://github.com/QwenLM/qwen-code/pull/8057) | **feat(skills): add disabled skill levels (project/user/extension/bundled)** | Feature / Config | Open, autofix/takeover |
| [#8147](https://github.com/QwenLM/qwen-code/pull/8147) | **fix(triage): render verify report as sanitized markdown, not escaped pre dump** | UX / CI | Open, autofix/takeover |

## Feature Request Trends
1. **Omni Multimodal Stack** (9 issues) — Full end-to-end design: recognition → storage → upload → policy → memory → E2E. All work on `omni-experiment` branch with 2-approval gate.
2. **Daemon & Workspace Isolation** — Memory budgeting (#8093, #8182), per-workspace managed memory (#8056), per-channel adapter state (#8178).
3. **Telemetry & Observability Granularity** — Tool execution outcomes (#8179, #8180), GenAI streaming metrics (#8150), standardized error classification (#8175).
4. **Desktop Distribution via Web Shell** — Lower-maintenance wrapper (#8092) instead of parallel UI codebase.
5. **Session & File Attribution** — Tracking which session created which files (#7966), session delete hooks (#8059).
6. **Cross-Platform Polish** — Windows test portability (#8050), Windows file paste (#7957), macOS+tmux IME fix (#8177).

## Developer Pain Points
- **Daemon resource model broken**: Each ACP child gets 50% host memory unbounded (#8182) — OOM risk in multi-child scenarios.
- **Release pipeline instability**: v0.21.2 publish failed (#8181); CI flakes in permission-mode E2E (#8133).
- **Session opacity**: No API to list files created during a session, nor distinguish direct writes from code-generated artifacts (#7966).
- **IME/terminal rendering on macOS+tmux**: Cursor ghosts, pinyin leakage, candidate-window overlap make Chinese input unusable (#8177).
- **Telemetry ambiguity**: Tool call `status` conflates terminal result with execution result; no machine-readable `error_type` for soft failures (#8175, #8179).
- **CI/CD noise**: Fleet Shepherd dashboard auto-issue shows 0 syncs/dispatches across 5 PRs (#7167) — possible automation stall.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-07-31

---

## 1. Today's Highlights

The project has officially rebranded from **DeepSeek TUI** to **CodeWhale** (Shannon Labs' public product), with the legacy `deepseek-tui` npm package deprecated. Version **v0.9.2** shipped today, finalizing handoff fixes across permissions, Fleet persistence, sub-agent supervision, compaction errors, and ambient UI. Meanwhile, the **v0.9.3** umbrella refactor is accelerating: 18 Rust crates / 771k lines are being consolidated into a single executable, with epic-level work on command-boundary refactors, subagent parity, config-path unification, and a protocol-neutral ACP client.

---

## 2. Releases

### **v0.9.2** (2026-07-30)  
[Release Notes](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.2)  
- **Rebrand**: `codewhale` command, npm package, and release assets now lowercase; legacy `deepseek-tui` deprecated.  
- **Fixes**: permission authorization order published & locked (#4980), foreground-shell detach before steering (#4979), provider credential UX (#4987), compaction failure receipts (#4988), subagent steering canonical targets (#4989), ambient jellyfish silhouette (#4807).  
- **Cleanup**: superseded code removed, sub-agent worktree isolation extracted.  
- **Migration note**: config paths now unified across Windows/Cygwin (#2369).

---

## 3. Hot Issues (Top 10 by Noteworthiness)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | **EPIC: Staged command-boundary refactor** | Core architecture cleanup for slash-command dispatch; 19 comments, tracking 5+ mergeable layers. | High engagement; blocked on #2851 proof PR. |
| [#2369](https://github.com/Hmbown/CodeWhale/issues/2369) | **Config paths fragmented across OS/Cygwin + silent migration bug** | Affects every Windows/Cygwin user; patch attached, 7 comments. | Practical blocker for cross-platform installs. |
| [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) | **CLI/TUI parity for subagent & runtime control surfaces** | Ensures subagent status/cancel works outside TUI (cloud, remote, headless). | 7 comments; parent of #4989, #4997. |
| [#3306](https://github.com/Hmbown/CodeWhale/issues/3306) | **v0.9.3 Refactor: converge runtime ownership, delete duplication, ship one executable** | 18 crates → 1 binary; 87% code in `codewhale-tui`; umbrella for all v0.9.3 work. | 4 comments; high strategic visibility. |
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | **Chinese translation of "Constitution": 宪法 vs 协作准则** | Cultural/political sensitivity; impacts all Chinese-language docs & UI. | 4 comments; active bilingual debate. |
| [#4906](https://github.com/Hmbown/CodeWhale/issues/4906) | **Record real Codewhale session for site/README GIF** | Product is visual/motion-heavy; zero demo assets currently. | 3 comments; marketing & onboarding gap. |
| [#3950](https://github.com/Hmbown/CodeWhale/issues/3950) | **Split agent tool runtime from schema/routing/worktree** | 6,970-line `subagent/mod.rs` + 5,511-line test file; major maintenance burden. | 2 comments; part of v0.9.3 decomposition. |
| [#5000](https://github.com/Hmbown/CodeWhale/issues/5000) | **Preserve visible partial assistant text after interrupt** | Streaming UX bug: interrupted text stays in TUI but dropped from Engine context. | Filed today; critical for conversation fidelity. |
| [#4991](https://github.com/Hmbown/CodeWhale/issues/4991) | **Compilation times & TUI crate monolith pain** | Contributors report slow builds; 14.8k-line `main.rs` hot path. | 1 comment; developer-experience signal. |
| [#4599](https://github.com/Hmbown/CodeWhale/issues/4599) | **Single source of truth for per-model facts (context window, max output, capabilities)** | Constants scattered across `models`, `config`, route overrides, tests. | 0 comments; v0.9.2 reliability debt. |

---

## 4. Key PR Progress (Top 10)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4993](https://github.com/Hmbown/CodeWhale/pull/4993) | **v0.9.3 local integration train** | Open | 37 commits: protocol truth, doctor/paths, PDF-chain deletion, ocean rendering, measurement ratchets. Built locally on `main@df3bfc7`. |
| [#4992](https://github.com/Hmbown/CodeWhale/pull/4992) | **Layer 5.2: User command dispatch precedence** | Open | Gherkin acceptance tests for shadowing/fallback/error semantics (AT-004–007). Part of #2870 epic. |
| [#4990](https://github.com/Hmbown/CodeWhale/pull/4990) | **fix(devcontainer): Windows development support** | Open | Dedicated dev image with Rust toolchain, named volumes for HOME/Cargo, fixes Windows HOME expansion. |
| [#4980](https://github.com/Hmbown/CodeWhale/pull/4980) | **docs(permissions): publish & lock authorization order** | **Closed** | Reference doc + engine contract tests for tool admission → hooks → requirements → auto-review → repo law → approval → sandbox. |
| [#4979](https://github.com/Hmbown/CodeWhale/pull/4979) | **fix(tui): detach foreground shell before steering** | **Closed** | Fixes #4930: moves blocking Bash to `/jobs` before enqueueing steer; covers all steer paths. |
| [#4981](https://github.com/Hmbown/CodeWhale/pull/4981) | **feat(tui): LaTeX environments/commands for math rendering** | Open | Full environment-block support, inline/accent commands, case-insensitive matching. |
| [#4984](https://github.com/Hmbown/CodeWhale/pull/4984) | **fix runtime config persistence & workspace task scoping** | **Closed** | Rebases GUI-facing API; `GET /v1/tasks` accepts `workspace` filter, includes path in summary. |
| [#4985](https://github.com/Hmbown/CodeWhale/pull/4985) | **feat(runtime-api): scope task listing by workspace** | Open | Companion to #4984; adds regression test for workspace filtering before limit truncation. |
| [#4983](https://github.com/Hmbown/CodeWhale/pull/4983) | **test(tui): remove skills viewport ordering assumption** | **Closed** | Flaky test fix: waits for owned-scan receipt instead of assuming row position. Release-blocking. |
| [#4982](https://github.com/Hmbown/CodeWhale/pull/4982) | **release: finalize Codewhale v0.9.2** | **Closed** | The v0.9.2 handoff PR: permissions, Fleet, reasoning, compaction, sub-agent, sandbox, credentials, ambient. |
| [#4977](https://github.com/Hmbown/CodeWhale/pull/4977) | **fix(tui): AltGr-typed "/" reaches composer** | Open | Fixes #4723: Windows AltGr (Ctrl+Alt) no longer triggers `Ctrl-/` help chord on ABNT2/AZERTY layouts. |

---

## 5. Feature Request Trends

1. **Architecture Consolidation** — Single binary, crate reduction, runtime ownership convergence (#3306, #3948, #3950, #3957).  
2. **Subagent & Runtime Parity** — CLI/TUI/cloud parity for steering, status, cancellation (#4022, #4989, #4997).  
3. **Protocol-Neutral Integrations** — ACP client (#4996), GitHub Copilot as external ACP worker (#4997), headless OAuth/PKCE (#4998).  
4. **Desktop/UX Polish** — First-class desktop app (#4986), session recording for marketing (#4906), LaTeX math (#4981), ambient ocean realism (#4807).  
5. **Config & Credential Unification** — One home-scoped store, shared modals, explicit credential handoff (#2369, #4987, #4994).  
6. **Compaction & Context Reliability** — Structured survival contract (#4394), failure receipts (#4988), partial-text preservation (#5000).  
7. **Benchmark/Determinism Gates** — Fail-closed, provenance-exact evaluation harness (#4999).  
8. **Developer Experience** — Faster compiles, thinner `main.rs`, deterministic verification surfaces (#4991, #4910).

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Monolithic TUI crate & slow compiles** | 14.8k-line `main.rs`, 771k total Rust lines, 18 crates; contributors explicitly discuss build-time frustration (#4991). |
| **Fragmented config/credential paths on Windows/Cygwin** | Silent migration bugs, divergent `HOME` resolution, UI doesn’t surface store distinction (#2369, #4987). |
| **Subagent tool runtime is a 12k-line spaghetti file** | `subagent/mod.rs` + test file = 12k+ lines; 122 commits YTD; mixing schema, routing, worktree, supervision (#3950). |
| **No visual demo assets for a motion-heavy product** | Zero GIFs/video on site/README; onboarding relies on prose (#4906). |
| **Compaction failures are opaque** | No structured trigger/failure receipt; can’t distinguish quota, context, malformed transcript, summarizer errors (#4394, #4988). |
| **Interrupted streaming loses authoritative context** | Visible partial text kept in TUI but dropped from Engine session (#5000). |
| **Per-model constants scattered & duplicated** | Hardcoded in `models`, `config`, route overrides, tests; no single source of truth (#4599). |
| **AltGr/keyboard-layout conflicts** | Brazilian ABNT2 `/` triggers help overlay; Windows reports AltGr as `Ctrl+Alt` (#4977). |
| **Flaky tests from viewport/ordering assumptions** | Skills test assumed row position; fixed by waiting for receipt (#4983). |
| **Headless/SSH/container OAuth impossible** | No PKCE/manual-redirect fallback for browserless installs (#4998). |

---

*Generated from GitHub data as of 2026-07-31. All links point to `Hmbown/CodeWhale` (formerly `Hmbown/DeepSeek-TUI`).*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*