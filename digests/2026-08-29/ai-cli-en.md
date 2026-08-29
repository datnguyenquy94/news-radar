# AI CLI Tools Community Digest 2026-08-29

> Generated: 2026-08-29 06:48 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-29)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **intense platform-specific stabilization efforts** over new feature development. All major tools report critical regressions on Windows (Claude Code, Codex, Copilot CLI, OpenCode) and macOS arm64 (OpenCode Bun segfaults), while Linux/Wayland gaps persist (Gemini browser agent, Pi Kitty quirks). Security hardening dominates Gemini and Kimi Code cycles. Release cadences bifurcate: mature tools (Claude Code, Pi, Qwen Code) ship patch/minor releases; rapidly iterating tools (Codex, OpenCode, DeepSeek TUI) operate in alpha/pre-release with daily builds. Enterprise readiness—data residency, GHE parity, local-first memory, auditability—emerges as a cross-cutting differentiator.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Critical Blockers |
|------|---------------------|-------------------|----------------|-------------------|
| **Claude Code** | ~10 (4 new cyber safeguard reports) | 1 (#87079) | **v2.1.251** stable | Cyber safeguard false positives (4+), Windows desktop instability (6 vectors), plugin headless regression |
| **OpenAI Codex** | 10+ (6 Windows-specific) | 20+ (infra-focused) | **5 alphas** in 24h (0.151.0-alpha.7.1–.12) | Windows app launch failure (86 comments), WSL terminal, sandbox ownership, Computer Use SIGTRAP |
| **Gemini CLI** | 10 noteworthy | 10 (5 security) | **v0.59.0-nightly** (security) | Subagent hangs/false success, shell "awaiting input" ghost, >128 tool limit, Wayland browser |
| **GitHub Copilot CLI** | 10 | 1 | **v1.0.82-1** patch | Windows resume hang, MCP/OAuth breaks, TUI FileWatch loop (13 GB logs), GHE endpoint mismatch |
| **Kimi Code CLI** | 2 | 1 | None | MCP secret-file guard bypass (closed), quota amplification (cache_read ×10) |
| **OpenCode** | 14 new/updated | 50 | None (v2.0 prep) | Quadratic streaming message growth, Windows plugin cache poisoning, Bun macOS arm64 segfault |
| **Pi** | 10 | 10 | **v0.84.4** stable | TUI row corruption, bundled CLI extension load failure, narrow-terminal crash (fixed) |
| **Qwen Code** | 6+ (CI auto-filed) | 10+ | **v0.22.3** stable + nightly | Flaky E2E (6 failures/24h), Windows FS semantics, silent agent teardown failures |
| **DeepSeek TUI** | 5 | 10+ | **v0.9.12** in prep (milestone #5573) | Release chain fragility, monolithic TUI crate, third-party provider config fragmentation |
| **Grok Build** | 0 | 0 | None | No activity |

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Windows Parity & Stability** | Claude Code, Codex, Copilot CLI, OpenCode, Qwen Code, Pi | Job Object cleanup (Claude), MSIX install (Claude), app launch (Codex), WSL PTY (Codex), sandbox ownership (Codex), resume hang (Copilot), plugin cache poisoning (OpenCode), FS identity semantics (Qwen), narrow-terminal crash (Pi) |
| **Session Continuity & Resume** | Claude Code, Codex, Copilot CLI, OpenCode, Pi, Qwen Code | SessionStart staleness metadata (Claude), resume race conditions (Codex), `--resume` hang (Copilot), ECONNRESET after file reads (OpenCode), `/scoped-models` stall (Pi), Channels named sessions (Qwen) |
| **Model/Provider Flexibility (BYOM)** | Codex, Gemini, Copilot CLI, Qwen Code, DeepSeek TUI | Subagent orchestration with custom providers (Codex), native bash/POSIX toolchain (Gemini), provider-aware reasoning controls (Qwen), native web search for CN providers (DeepSeek), model config templates (DeepSeek) |
| **Enterprise/GHE/Data Residency** | Copilot CLI, Codex, Claude Code, Qwen Code | GHEC endpoint routing (Copilot), CVP-approved org unblocked (Claude), data residency compliance (Copilot), tenant model-catalog endpoints (Copilot) |
| **Local-First Memory & Context** | Copilot CLI, Gemini, Pi, Qwen Code | Local auto-memory (Copilot), persistent file-based tasks (Gemini), artifact verification gate (Pi), reasoning effort persistence (Qwen) |
| **MCP/Plugin Ecosystem Hardening** | All tools | Secret-file guard parity (Kimi, Gemini), OAuth persistence (Codex, Copilot), plugin hot-reload/discovery (DeepSeek, Copilot), daemon extension path validation (Qwen), extension provider registration flush (Pi) |
| **Observability & Debuggability** | Codex, Copilot CLI, Gemini, OpenCode, Pi | Command collapsing toggle (Codex), host request durations (Codex), TUI FileWatch loop visibility (Copilot), subagent trajectory sharing (Gemini), ACP usage reporting (OpenCode), search/UX polish (Pi) |
| **Security Hardening (Supply Chain/Auth)** | Gemini, Kimi, Pi, DeepSeek | Fail-closed workspace trust (Gemini), NTFS short-name traversal (Gemini), OAuth IdP mix-up (Gemini), MCP secret bypass (Kimi), asyncssh CVEs (Kimi), artifact verification (Pi), GitHub App auth (DeepSeek) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------------|-----------|----------|-----|-----------|--------------|
| **Primary Focus** | Enterprise reliability, hook extensibility | Rapid iteration, multi-agent orchestration, Computer Use | Security-first, subagent reliability, native POSIX | Enterprise/GHE integration, local-first memory | Security auditing, quota transparency | v2.0 core correctness, cross-platform TUI | Terminal capability control, extension UI events | Multi-agent Channels, WebShell as primary UI | PR review automation, cloud-agent dispatch, Tideline UI system |
| **Target Users** | Enterprise devs, plugin authors | Power users, automation builders, BYOM adopters | Security-conscious teams, Linux/Wayland users | Enterprise/GHE orgs, compliance-heavy teams | Security researchers, cost-sensitive subscribers | TUI enthusiasts, plugin developers, Linux power users | Terminal purists, extension authors, reasoning-model users | Web-first teams, multi-agent workflow builders, VS Code migrators | Code review automators, cloud-offload users, CN provider users |
| **Technical Approach** | Hook-based interception, remote subagent streaming | Rust CLI + Desktop app, catalog-driven behavior, executor hooks | Nightly security patches, fail-closed defaults, AST-aware tooling | TypeScript CLI, GitHub API deep integration, MCP-first | Python/Node hybrid, MCP guard parity, cache metering | Rust/Bun, layered architecture, ACP compliance, ratatui TUI | Zig/TypeScript, capability overrides, composer-based startup | TypeScript/Go/Rust, Channels abstraction, WebShell + daemon | Rust/TypeScript, Tideline/ratatui, GitHub App + Daytona integration |
| **Release Cadence** | Stable patches (v2.1.x) | Daily alphas (0.151 branch) | Nightly security releases | Patch releases (v1.0.8x) | Ad-hoc (security-driven) | Pre-release (v2.0 milestone) | Minor stable (v0.84.x) | Stable + nightly (v0.22.x) | Milestone-gated (v0.9.12 prep) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Rapid Iteration** | **OpenAI Codex**, **OpenCode**, **DeepSeek TUI** | Codex: 5 alphas + 20 PRs/24h; OpenCode: 50 PR updates, 14 issues; DeepSeek: Next.js 16/TS 7/Tailwind 4 migration + Tideline rollout + GitHub App automation |
| **Mature / Stabilizing** | **Claude Code**, **Pi**, **Qwen Code** | Claude: stable patches, enterprise escalation paths; Pi: v0.84.4 with capability overrides, 18 PRs; Qwen: stable + nightly, CI watchdogs, WebShell cutover complete |
| **Security-Driven / Niche** | **Gemini CLI**, **Kimi Code** | Gemini: 5 security PRs/nightly, subagent P1s; Kimi: critical vuln disclosure + patch, quota transparency focus |
| **Enterprise-Integration Focused** | **GitHub Copilot CLI** | GHE parity gaps dominate, local-memory demand, auth opacity fixes |
| **Low Activity** | **Grok Build** | Zero GitHub activity in 24h |

**Community Health Signals:**
- **Highest engagement**: Claude Code #84352 (164 comments, CVP-approved org blocked), Codex #40752 (86 comments, Windows launch failure)
- **Silent majority upvotes**: Codex #39903 (65 👍, command collapsing), Claude #10018 (86 👍, branch-aware sessions), Pi #7128 (13 👍, system prompt noise)
- **Enterprise friction**: Copilot CLI (4+ GHE/data residency issues), Claude Code (CVP portal "Under review"), Codex (sandbox ownership EPERM)

---

## 6. Trend Signals for Technical Decision-Makers

### **Immediate Action Items (This Week)**
1. **Windows users**: Defer Codex Desktop update (v26.820.60940), monitor Claude Code MSIX/Job Object fixes, test Copilot CLI v1.0.82-1 auth errors
2. **Security teams**: Audit MCP server permissions (Kimi bypass, Gemini fail-closed), review Gemini nightly v0.59.0 for workspace trust enforcement
3. **Enterprise admins**: Validate Copilot CLI GHEC endpoint routing, track Claude Code CVP portal resolution, test Qwen Code daemon extension path restrictions

### **Strategic Shifts (Next 30–90 Days)**
| Trend | Evidence | Implication |
|-------|----------|-------------|
| **WebShell/TUI convergence as primary UI** | Qwen (WebShell cutover), Pi (capability overrides), OpenCode (beta web deploy), DeepSeek (Tideline/ratatui) | CLI-only tools losing relevance; invest in terminal-capability-aware frontends |
| **Catalog-driven model behavior** | Codex (

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-29)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| Rank | PR | Skill / Focus | Functionality | Discussion Highlights | Status |
|------|-----|---------------|---------------|----------------------|--------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: run_eval.py fix** | Fixes `run_eval.py` reporting 0% recall for all skill descriptions; addresses Windows stream reading, trigger detection, parallel workers | Directly resolves [Issue #556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) — the evaluation loop was optimizing against noise | **Open** (updated 2026-06-23) |
| 2 | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind: Zero-Cost Multi-Agent Orchestration** | Delegates mechanical work to headless `opencode` workers on free models; Claude Code remains planner/reviewer/merger | Novel cost-optimization architecture; addresses "expensive model context is scarce resource" | **Open** (updated 2026-08-24) |
| 3 | [#1602](https://github.com/anthropics/skills/pull/1602) | **Evaluation & Benchmark Stability Fixes** | Fixes MCP builder serialization, benchmark metrics, encoding, script stability across `mcp-builder`, `skill-creator`, `claude-api` | Resolves [Issue #1390](https://github.com/anthropics/skills/issues/1390) (4 comments) — evaluation harness fabricating tool errors | **Open** (updated 2026-08-24) |
| 4 | [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow Platform Skill** | Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, IntegrationHub | Enterprise demand; 5+ month active discussion (updated 2026-08-12) | **Open** |
| 5 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit: Mechanical Verification + 4-Dimension Reasoning Gate** | Pre-delivery audit: mechanical file verification → reasoning quality gate (correctness, completeness, safety, clarity) | Universal, stack-agnostic quality gate; v1.3.0 | **Open** (updated 2026-07-02) |
| 6 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive testing skill: Testing Trophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Fills major gap in test-generation workflow skills | **Open** (updated 2026-04-21) |
| 7 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Typographic quality control: orphan/widow prevention, numbering alignment for AI-generated documents | Addresses "every document Claude generates" pain point | **Open** (updated 2026-03-13) |
| 8 | [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api: Retired Model IDs Update** | Marks `claude-opus-4-1`, `claude-sonnet-4-0`, `claude-opus-4-0`, `claude-3-haiku-20240307` as retired | Fixes [Issue #1603](https://github.com/anthropics/skills/issues/1603); critical for token efficiency (relates to [#1487](https://github.com/anthropics/skills/issues/1487) — 156k token injection) | **Open** (updated 2026-08-26) |

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issue / Comments / 👍) | Implication |
|-------|----------------------------------|-------------|
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) — Community skills distributed under `anthropic/` namespace enable impersonation | Urgent need for namespace governance / official vs. community skill separation |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) — No org-wide skill library; manual file transfer via Slack/Teams | Strong demand for native skill distribution & versioning within teams |
| **Evaluation Infrastructure Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) — `run_eval.py` 0% trigger rate; [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments) — MCP evaluation fabricates errors | Skill creation tooling is broken; blocks community contribution velocity |
| **Token/Context Window Efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — `claude-api` injects 156k tokens; [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) — `compact-memory` symbolic notation proposal | Skills must be context-aware; lazy-loading & compression are priorities |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments) — Agent governance skill proposal (closed); [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1 👍) — Reasoning Quality Gate Pipeline | Growing interest in meta-skills for agent oversight, policy enforcement, audit trails |
| **Duplicate/Plugin Hygiene** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) — `document-skills` & `example-skills` install identical content | Plugin packaging needs deduplication & clear scope boundaries |
| **Cross-Platform (Windows) Support** | [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) — Windows subprocess/encoding bugs in skill-creator | Windows compatibility is a blocker for contributor onboarding |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why High Potential | Target Merge Signal |
|-----|-------|-------------------|---------------------|
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api: Retired Model IDs** | Trivial fix; resolves active token-exhaustion issue ([#1487](https://github.com/anthropics/skills/issues/1487)); updated 2026-08-26 | **Days** — maintenance fix |
| [#1602](https://github.com/anthropics/skills/pull/1602) | **Evaluation Serialization & Metrics Fixes** | Unblocks skill-creator & MCP builder evaluation; addresses multiple open issues; recent active updates | **1-2 weeks** — infrastructure critical |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator: run_eval.py Windows/Trigger Fix** | Fixes the core evaluation loop (0% recall); 10+ independent reproductions; enables skill optimization | **1-2 weeks** — highest-impact tooling fix |
| [#538](https://github.com/anthropics/skills/pull/538) | **pdf: Case-Sensitive File Reference Fix** | 8 concrete case-sensitivity bugs; breaks on Linux/CI; simple, verifiable fix | **Days** — trivial merge |
| [#541](https://github.com/anthropics/skills/pull/541) | **docx: Tracked Change w:id Collision Fix** | Prevents document corruption; root cause identified (shared OOXML ID space); 1-line fix pattern | **Days** — high-impact bug fix |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind: Multi-Agent Orchestration** | Novel architecture; addresses cost/context pressure; aligns with "agent delegation" trend | **2-4 weeks** — needs design review |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Comprehensive, well-scoped; fills universal developer need; no blocking dependencies | **2-4 weeks** — ready for review |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Addresses universal document-quality pain point; self-contained; clear trigger conditions | **2-4 weeks** — high utility |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is for trustworthy, evaluatable, and context-efficient skills — specifically: fixing the broken skill-creation toolchain (evaluation/triggering), establishing security boundaries for skill distribution, and enabling organizational skill sharing — while new skill contributions cluster around enterprise platforms (ServiceNow), quality gates (self-audit, testing-patterns), and multi-agent cost optimization (Hivemind).**

---

# Claude Code Community Digest — 2026-08-29

---

## 1. Today's Highlights

- **v2.1.251 released** with new hook events for model-switch interception (`PreModelSwitch`/`PostModelSwitch`), enriched `SessionStart` resume metadata (staleness + re-cache cost estimates), and live streaming of foreground subagent tool calls to Remote Con.  
- **Cyber safeguard false positives** dominate community chatter: four separate reports today alone describe authorized work being halted by Opus 4.8’s safety filter, while a CVP-approved org (#84352, 164 comments) remains blocked despite prior clearance.  
- **Windows desktop stability** continues to regress: orphaned Job Objects after crashes (#53247), MSIX install failures (#74170), stealth restarts destroying sessions (#90172), link-click crashes (#90353), and IME composition floods (#90512) all updated today.

---

## 2. Releases

### v2.1.251
- **Hooks**: `PreModelSwitch` / `PostModelSwitch` — block, confirm, or annotate model switches.  
- **SessionStart resume hooks** now receive `sessionStaleness` and `estimatedReCacheCost`.  
- **Remote Con**: live stream of foreground subagent tool calls & results.  
→ [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.251)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | CVP-approved org still blocked by cyber safeguards | Enterprise workflows halted despite verified approval; portal shows “Under review” | 164 comments, 25 👍 — highest engagement in 24h |
| [#10018](https://github.com/anthropics/claude-code/issues/10018) | **CLOSED** — Web: start sessions from non-default branches | Unblocks trunk-based / feature-branch workflows in Claude Code Web | 59 comments, 86 👍 — strong demand, now shipped |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | Windows: orphaned Silo/Job Object after crash → requires logoff/reboot | Makes Desktop unusable after any crash; no clean recovery | 31 comments, 19 👍 — persistent since April |
| [#11627](https://github.com/anthropics/claude-code/issues/11627) | **CLOSED** — .NET 9/10 SDK support in web runtime | Unblocks modern .NET projects in browser-based sessions | 15 comments, 75 👍 — high upvote/low comment ratio = silent majority |
| [#77071](https://github.com/anthropics/claude-code/issues/77071) | Dispatch tab missing from Desktop sidebar (Win11, Pro) | Removes mobile→desktop control surface for affected users | 18 comments, 2 👍 |
| [#74170](https://github.com/anthropics/claude-code/issues/74170) | MSIX install fails with `0x80073CF9` | Blocks fresh installs / updates on Windows | 10 comments, 1 👍 |
| [#78229](https://github.com/anthropics/claude-code/issues/78229) | Scheduled-task sessions missing from Recents & unpinnable | Breaks discoverability for automated/recurring workflows | 9 comments |
| [#88405](https://github.com/anthropics/claude-code/issues/88405) | Symlinked files in `.claude/rules/` not auto-loaded (docs claim they are) | Shared rule sets broken; documentation mismatch | 7 comments, 4 👍 |
| [#88094](https://github.com/anthropics/claude-code/issues/88094) | Remote Control enabled by default (Windows) | Privacy/security surprise; unexpected remote access surface | 6 comments, 8 👍 |
| [#90515](https://github.com/anthropics/claude-code/issues/90515) | **REGRESSION** (v2.1.251): plugin slash-commands fail in headless `-p` mode | Breaks CI/automation using custom commands; built-ins still work | 0 comments (filed today) — critical for plugin authors |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#87079](https://github.com/anthropics/claude-code/pull/87079) | Open | **Security fix**: `**` glob patterns in `security-patterns.json` now correctly match zero-depth paths (top-level files). Previously `**/*.ts` required a literal `/`, silently excluding root files from protection rules. |

*Only one PR updated in the last 24h — focus remains on runtime stability over new features.*

---

## 5. Feature Request Trends

1. **Branch-aware session starts** (#10018 ✅, 86 👍) — now delivered for Web; CLI parity expected next.  
2. **Modern runtime support** (#11627 ✅, 75 👍) — .NET 9/10 in web runtime shipped; Node/Python version bumps frequently requested.  
3. **Usage visibility** (#83092) — “usage bars” / token budget UI; ties into model-limit pain (#79410).  
4. **Terminal UX upgrades** (#87769) — mouse support, click-to-navigate in TUI.  
5. **Session hierarchy & grouping** (#82788) — auto-assign child/spawned sessions to parent’s sidebar group.  
6. **Time-tracking / automation hooks** (#90513) — programmatic clock-in/out via CLI.

---

## 6. Developer Pain Points (Recurring Themes)

| Category | Representative Issues | Frequency |
|----------|----------------------|-----------|
| **Cyber safeguard false positives** | #84352, #90501, #90499, #88927 | 4+ reports today; “session-halted” severity blocks legitimate work |
| **Windows Desktop instability** | #53247, #74170, #90353, #90172, #87659, #90512 | 6 distinct crash/hang/install vectors; stealth restarts destroy sessions |
| **Model-switch friction** | #79410 (Dispatch locked to Fable 5), #88778 (Opus 5 suppresses Agent tool), #90514 (Opus 5 “lazy” behavior) | Model limits + silent prompt injections break workflows |
| **Session/context loss** | #67840 (600s phantom deny on sleep), #86688 (agent context lost on return), #85285 (live session invisible to iOS/Dispatch) | Remote/desktop sync gaps; no recovery path |
| **Symlink & config loading** | #88405 (rules symlinks ignored) | Docs/runtime mismatch erodes trust in `.claude/` conventions |
| **Remote Control / IME bugs** | #88094 (enabled by default), #90512 (IME composition flood) | Platform-specific input handling regressions |
| **Plugin/headless regression** | #90515 (slash-commands broken in `-p` on 2.1.251) | Zero-day regression in latest release |

---

*Digest compiled from GitHub data as of 2026-08-29 00:00 UTC. Links point to live issues/PRs for full context.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-29

## Today's Highlights
A critical Windows regression in v26.820.60940 prevents the Desktop app from launching ("Unable to locate Codex CLI"), generating 86 comments and 51 upvotes in hours. Meanwhile, the Rust CLI shipped five alpha releases (0.151.0-alpha.7.1 through .12) in 24 hours, and 20+ PRs landed — mostly internal refactors around model catalog integration, executor hooks, and session metadata preservation.

---

## Releases
| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.151.0-alpha.12` | Alpha | Latest in rapid alpha series (5 releases in 24h) |
| `rust-v0.151.0-alpha.11` | Alpha | |
| `rust-v0.151.0-alpha.10` | Alpha | |
| `rust-v0.151.0-alpha.9` | Alpha | |
| `rust-v0.151.0-alpha.7.1` | Alpha | |

> **Note**: No stable release. The alpha cadence suggests active iteration on the 0.151 branch ahead of a beta.

---

## Hot Issues (Top 10 by Community Signal)

| Issue | Title | Signal | Why It Matters |
|-------|-------|--------|----------------|
| [#40752](https://github.com/openai/codex/issues/40752) | Windows Desktop app fails to start after update to v26.820.60940 | 🔥 86 comments, 51 👍 | **Critical regression**: app won't launch post-update; "Unable to locate Codex CLI" + `spawn EINVAL` on `.cmd` wrapper. Blocks all Windows users on latest build. |
| [#38350](https://github.com/openai/codex/issues/38350) | Recurring scheduled tasks disable themselves after successful runs | 55 comments | Silent auto-disable of recurring web tasks breaks automation workflows; no user action or notification. |
| [#39903](https://github.com/openai/codex/issues/39903) | Add option to disable "Ran N commands" collapsing | 44 comments, 65 👍 | High-demand UX fix: command collapsing hides executed commands; users want full visibility for debugging/audit. |
| [#37104](https://github.com/openai/codex/issues/37104) | Windows/WSL: integrated terminal silently fails before PTY startup | 23 comments, 9 👍 | WSL terminal broken in 26.730.8199.0; bottom/side panels unusable. Long-standing Windows/WSL integration gap. |
| [#34227](https://github.com/openai/codex/issues/34227) | Windows pet overlay hit region desynchronizes from visible mascot | 21 comments | UI polish issue: click targets drift over time, making pet interactions unreliable. |
| [#17598](https://github.com/openai/codex/issues/17598) | Native subagent orchestration broken with non-OpenAI custom providers | 16 comments, 4 👍 | Blocks BYOM (bring your own model) multi-agent workflows; core extensibility gap. |
| [#15122](https://github.com/openai/codex/issues/15122) | MCP OAuth login doesn't persist across restarts | 12 comments, 7 👍 | Remote MCP servers require re-auth on every launch; breaks unattended/automated use. |
| [#39823](https://github.com/openai/codex/issues/39823) | Session resume fails with "already has an active writer" | 10 comments | Race condition in TUI/CLI session resume after approval-mode use or switching; corrupts session state. |
| [#17179](https://github.com/openai/codex/issues/17179) | Windows sandbox changes project ownership to CodexSandboxOffline | 10 comments, 6 👍 | Sandbox writes take ownership, causing persistent EPERM on subsequent non-sandbox operations. |
| [#41326](https://github.com/openai/codex/issues/41326) | Computer Use helper SIGTRAPs on every click after get_app_state | 9 comments | Computer Use feature crashes on first UI action post-inspection; blocks new automation capability. |

---

## Key PR Progress (Top 10 by Impact)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#41477](https://github.com/openai/codex/pull/41477) | Organize bundled Rust resources under asset directories | Build/Infra | Clean separation of compile-time data vs. runtime resources; improves Bazel caching and binary size. |
| [#41476](https://github.com/openai/codex/pull/41476) | Use rules_rs platforms for release binaries | Build/Infra | Standardizes cross-compilation via `rules_rs`; replaces ad-hoc LLVM platform defs. |
| [#41467](https://github.com/openai/codex/pull/41467) | Refresh TUI model picker from app server | TUI/Models | Fixes stale model catalog in picker; now fetches live list on open with cached fallback. |
| [#41464](https://github.com/openai/codex/pull/41464) | Preserve permissions when updating session metadata | Session/Sandbox | Prevents permission loss on client name/version updates; defers sandbox rebind until working-dir change. |
| [#41461](https://github.com/openai/codex/pull/41461) | Source async user message descriptions from model catalog | Models/Catalog | Centralizes tool descriptions; respects mid-turn model changes. |
| [#41457](https://github.com/openai/codex/pull/41457) | Source proactive multi-agent instructions from model catalog | Multi-agent | Moves "proactive" prompts into catalog metadata; enables per-model tuning without code changes. |
| [#41456](https://github.com/openai/codex/pull/41456) | Support app targets in executor plugin hooks | Plugins/Executor | Allows browser/computer-use plugins to register `Stop`/`SubagentStop` hooks for app-routed executions. |
| [#41454](https://github.com/openai/codex/pull/41454) | Block goals after repeated execution host failures | Reliability | Auto-blocks goals after 3 failed `exec` turns; resets on success. Prevents runaway failure loops. |
| [#41452](https://github.com/openai/codex/pull/41452) | Report code mode host request durations | Observability | Measures host-side wall time (execute/wait/terminate) excluding client idle time. |
| [#41447](https://github.com/openai/codex/pull/41447) | Support `openai/elicitation` form requests | MCP/Protocol | Implements new elicitation/forms spec; advertises capability when client declares object-valued `form`. |

> **Pattern**: Today's PRs are almost entirely internal infrastructure — catalog-driven behavior, executor hook plumbing, session hygiene, and build modernization. No user-facing features shipped today.

---

## Feature Request Trends (from Issues)

1. **Windows parity** — 6 of top 10 issues are Windows-specific (app launch, WSL terminal, sandbox ownership, pet overlay, updater loop, WebSocket proxy). Windows remains the roughest platform.
2. **Session continuity** — Resume failures (#39823), OAuth persistence (#15122), thread-store ordinal mismatches (#40630) point to fragile session state management.
3. **Model/Provider flexibility** — Subagent orchestration with custom providers (#17598), model picker freshness (#41467), catalog-driven prompts (#41457/#41461) show demand for BYOM and dynamic model configs.
4. **Visibility/debuggability** — Command collapsing toggle (#39903), host request durations (#41452), Guardian transcripts (#41422) — developers want observability into agent actions.
5. **MCP/Plugin maturity** — OAuth persistence, per-tool output limits (#41421), elicitation forms (#41447), executor hooks (#41456/#41432) — plugin ecosystem hardening.

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows app instability post-update** | #40752 (86c), #40776, #41339, #41241, #40972, #38843 | **Critical** — 6+ issues in 24h around v26.820+ |
| **Session loss / resume failure** | #39823, #40630, #15122, #34894 | High — multiple vectors (CLI, Desktop, SSH, OAuth) |
| **Silent failures / no feedback** | #37104 (silent terminal fail), #38350 (tasks auto-disable), #36596 (autonomous work terminated) | High — users discover breakage after the fact |
| **Sandbox/permission friction** | #17179 (ownership change), #41237 (EPERM on profile dir), #41464 (permission preservation) | Medium — Windows sandbox especially problematic |
| **Computer Use / Computer Vision reliability** | #41326 (SIGTRAP on click), #41435 (cleanup hooks) | Emerging — new feature, brittle on Windows |

---

## Quick Links
- **Critical Windows regression**: [#40752](https://github.com/openai/codex/issues/40752) — track for hotfix
- **Alpha release stream**: [rust-v0.151.0-alpha.12](https://github.com/openai/codex/releases/tag/rust-v0.151.0-alpha.12)
- **All 20 PRs merged today**: [PR list](https://github.com/openai/codex/pulls?q=is%3Apr+updated%3A2026-08-29+is%3Aclosed) (filter by date)

---

*Digest generated from GitHub data as of 2026-08-29 23:59 UTC. "Comments" = total comments on issue/PR; "👍" = upvote reactions.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-29

## 1. Today's Highlights
- **Security-first nightly release** (v0.59.0-nightly) ships a critical fix enforcing fail-closed workspace trust and filtering `mcpServers` in restricted mode, preventing unintended process execution during server startup.  
- **Active security hardening** across the codebase: five security-focused PRs landed or updated today covering OAuth IdP mix-up mitigation, NTFS short-name path traversal, insecure system-wide config loading, SSE stream parsing, and duplicate exit-handler guards.  
- **Subagent reliability remains the top pain point** — multiple P1 issues track hangs, incorrect success reporting after `MAX_TURNS`, and under-utilisation of custom skills, signalling a need for deeper agent orchestration work.

## 2. Releases
| Version | Key Changes | Link |
|---------|-------------|------|
| `v0.59.0-nightly.20260829.g0bd1d4397` | **Security**: Enforce fail-closed workspace trust resolution; filter repository-defined `mcpServers` in restricted/untrusted environments. | [Release notes](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260828.g3c311beac...v0.59.0-nightly.20260829.g0bd1d4397) |

## 3. Hot Issues (10 Noteworthy)

| # | Title | Priority / Area | Why It Matters | Community Signal |
|---|-------|-----------------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports `GOAL` success after hitting `MAX_TURNS` | P1, agent | Masks real failures; breaks trust in autonomous delegation. | 13 comments, 2 👍 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely on simple tasks | P1, agent | Blocks core workflow; users must disable sub-agents to proceed. | 8 comments, 8 👍 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command stuck at “Waiting input” after completion | P1, core | Frequent UX breakage; affects even trivial commands. | 4 comments, 3 👍 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error when >128 tools registered | P2, agent | Hard limit surprises power users loading many MCP servers/skills. | 3 comments |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26526) | Auto Memory retries low-signal sessions indefinitely | P2, agent | Wastes quota & latency; no back-off or quarantine. | 5 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory redaction happens *after* model sees secrets | P2, security | Secrets transiently enter model context; logging risk. | 4 comments |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | P1, agent/browser | Linux/Wayland users blocked from browser automation. | 4 comments, 1 👍 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` (`maxTurns`, etc.) | P2, agent | Configuration drift; users can’t tune browser behaviour. | 3 comments |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via zero-dependency sandboxing | P2, agent (enhancement) | Strategic direction: native POSIX tool chains vs. custom tools. | 8 comments, 1 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess AST-aware file reads, search, mapping (EPIC) | P2, agent | Could cut token usage & turn count for large codebases. | 7 comments, 1 👍 |

## 4. Key PR Progress (10 Important)

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#29099](https://github.com/google-gemini/gemini-cli/pull/29099) | **fix(core): enforce fail-closed workspace trust & filter mcpServers in restricted mode** | **MERGED** (in nightly) | Core security fix; prevents supply-chain risk from untrusted workspace configs. |
| [#29117](https://github.com/google-gemini/gemini-cli/pull/29117) | **fix(core): prevent OAuth IdP mix-up in MCP authentication** (RFC 9207) | Open | Closes auth-confusion vector; validates `iss` in callback. |
| [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) | **fix(core): mitigate NTFS 8.3 short-name (SFN) path traversal** | Open | Hardens Windows path normalization & allow-list checks. |
| [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) | **fix(config): prevent insecure system-wide configuration loading** | Open | Blocks local privilege escalation via malicious global config (Win/POSIX). |
| [#29106](https://github.com/google-gemini/gemini-cli/pull/29106) | **fix(core): flush final SSE event on EOF without trailing blank line** | Open | Recovers `finishReason`/usage metadata lost on truncated streams. |
| [#29114](https://github.com/google-gemini/gemini-cli/pull/29114) | **fix(core): prevent duplicate `handleExit` on spawn failure** | Open | Eliminates double-cleanup race in shell execution service. |
| [#28971](https://github.com/google-gemini/gemini-cli/pull/28971) | **fix(core): keep truncated MCP tool names unique** | Open | Solves registry collision when long names share 30-char prefix/suffix. |
| [#29120](https://github.com/google-gemini/gemini-cli/pull/29120) | **fix(core): improve destination validation & connection routing in web fetch** | Open | Async DNS + Undici connector binding; tighter SSRF protection. |
| [#29118](https://github.com/google-gemini/gemini-cli/pull/29118) | **fix(extensions): only strip trailing `.git` suffix** | Open | Fixes repo parsing for names like `blog.github.io`. |
| [#28955](https://github.com/google-gemini/gemini-cli/pull/28955) | **chore: update deps, add MCP config, integrate ECC bundles** | Open (XL) | Large dependency refresh; enables new MCP & enterprise features. |

## 5. Feature Request Trends
1. **Native bash / POSIX toolchain integration** — Issues [#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561) push for AST-aware, token-frugal file ops that match model’s training.  
2. **Persistent, file-based task tracking** — [#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) want CRUD task storage outside context window.  
3. **Subagent observability & sharing** — [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) demand trajectory visibility in `/chat share` and bug reports.  
4. **Browser agent hardening** — Session takeover ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), config respect ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).  
5. **Auto Memory quality & safety** — Redaction timing ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), retry back-off ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), patch quarantine ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).

## 6. Developer Pain Points (Recurring)
- **Agent hangs / false successes** — Generalist & subagents stall or misreport `GOAL`; users disable delegation to work around.  
- **Shell “awaiting input” ghost state** — Commands finish but UI never clears; high frequency across simple and complex commands.  
- **Tool explosion** — >128 tools triggers 400 errors; no automatic scoping or lazy loading.  
- **Configuration friction** — Symlinked agents ignored ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), browser settings ignored, insecure global config loads.  
- **Terminal render jank on resize** — Full-history redraw causes flicker; migration to `RenderStatic`/batch updates tracked in [#21924](https://github.com/google-gemini/gemini-cli/issues/21924).  
- **Auto Memory opacity** — Silent skips, no visibility into invalid patches, indefinite retries erode trust in background learning.

---

*Generated from `google-gemini/gemini-cli` GitHub activity (2026-08-29). All links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-29

## 1. Today's Highlights
A new patch release **v1.0.82-1** shipped with improved authentication error reporting, surfacing specific failures (e.g., 401 Bad credentials) instead of generic `/login` prompts. Meanwhile, the issue tracker shows a surge of regression reports across Windows resume hangs, MCP/OAuth compatibility breaks, TUI freezes from runaway FileWatch loops, and enterprise/GHE endpoint mismatches — indicating v1.0.81 introduced multiple cross-platform regressions.

## 2. Releases
**v1.0.82-1** (2026-08-28)  
- **Fixed**: Authentication failures now display the specific error (e.g., `401 Bad credentials`) rather than only prompting `/login`.  
[Release v1.0.82-1](https://github.com/github/copilot-cli/releases/tag/v1.0.82-1)

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4612](https://github.com/github/copilot-cli/issues/4612) | **Runaway FileWatch loop freezes TUI, grows debug log to 13 GB** | Long-running sessions enter tight `FileWatch` event loop, making UI unresponsive and consuming disk. Blockers for persistent agent workflows. | 7 comments, 👍 1 — active triage discussion |
| [#4480](https://github.com/github/copilot-cli/issues/4480) | **Atlassian MCP OAuth fails with RFC 8414 issuer mismatch (regression from 1.0.71)** | Breaks Atlassian MCP integration for enterprise users; OAuth discovery fails due to issuer URL validation. | 7 comments, 👍 6 — high enterprise impact |
| [#4165](https://github.com/github/copilot-cli/issues/4165) | **`copilot --resume` hangs at "Resuming session" on Windows cold start** | Windows users cannot resume sessions directly from PowerShell; workaround requires extra steps. | 4 comments, 👍 1 — platform-specific blocker |
| [#4533](https://github.com/github/copilot-cli/issues/4533) | **TUI stops consuming events when parallel subagents spawn** | Runtime continues but UI deadlocks on input/scroll during parallel agent execution. Affects prerelease 1.0.81-4/5. | 4 comments — rendering pipeline issue |
| [#4527](https://github.com/github/copilot-cli/issues/4527) | **`copilot -p` fails with 401 on GHEC data residency (wrong model-catalog endpoint)** | Prompt mode hits `api.githubcopilot.com` instead of tenant endpoint; interactive mode works. Enterprise data-residency blocker. | 2 comments, 👍 4 |
| [#1392](https://github.com/github/copilot-cli/issues/1392) | **OmniSharp LSP needs configurable `initializeTimeout` for large C# solutions** | Default timeout too short for large projects; language-aware analysis fails repeatedly. Long-standing (since Feb). | 3 comments, 👍 5 — configuration gap |
| [#2930](https://github.com/github/copilot-cli/issues/2930) | **Feature: Local auto-memory (agent-initiated, no remote storage)** | Enterprises disabling remote Copilot Memory lose all context accumulation; need local-only alternative. | 2 comments, 👍 3 — security/compliance driver |
| [#4647](https://github.com/github/copilot-cli/issues/4647) | **v1.0.81 broke compatibility with chroma-mcp** | MCP server ecosystem regression; config that worked in 1.0.80 fails in 1.0.81. | 1 comment — MCP stability concern |
| [#4658](https://github.com/github/copilot-cli/issues/4658) | **Shell completions reinstalled on every launch, including headless `--server`** | Unnecessary I/O and PATH assumptions break editor-integrated stdio sessions. | 0 comments — developer experience friction |
| [#4657](https://github.com/github/copilot-cli/issues/4657) | **`/delegate` fails with 403 on UncommittedChangesCheck despite valid auth** | Pre-flight check fails via CLI but succeeds via `curl`/`gh api`; suggests token scope or header issue. | 0 comments — delegation workflow blocked |

## 4. Key PR Progress
| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4497](https://github.com/github/copilot-cli/pull/4497) | Handle fork PR associations in invalid-label writer | **Closed** | Fixes trusted invalid-label writer for fork PR workflows where GitHub doesn't populate run-PR association; falls back to workflow-run metadata search. |

*Note: Only 1 PR updated in the last 24h. The low PR velocity alongside high issue volume suggests focus on triage/bugfix over new features.*

## 5. Feature Request Trends
From the issue set, three clear directions emerge:
1. **Local-first memory & context** — #2930 (local auto-memory), #3904 (cloud query fallback), #4189 (accurate deferred tool cost reporting) all point to demand for **offline-capable, transparent context management** without mandatory cloud sync.
2. **Enterprise/GHE parity** — #4527, #4548, #4650, #4654 show repeated **endpoint mismatches, data-residency routing failures, and policy enforcement gaps** for enterprise tenants.
3. **Configurable timeouts & limits** — #1392 (LSP initialize), plus implicit needs in #4612 (FileWatch loop) and #4533 (subagent parallelism) indicate developers want **knobs to tune resource bounds** for large-scale workloads.

## 6. Developer Pain Points (Recurring Themes)
- **Windows-specific regressions**: Resume hangs (#4165), AltGr key swallowing (#4653), sandbox support false positives (#4652) — Windows QA coverage appears insufficient.
- **MCP ecosystem fragility**: Atlassian OAuth (#4480), chroma-mcp breakage (#4647), tool-search deferral inconsistencies (#4649) — MCP integration lacks stability guarantees across releases.
- **TUI reliability under load**: FileWatch loop (#4612), parallel subagent deadlock (#4533), input field rendering corruption (#4648) — terminal UI struggles with async runtime events.
- **Authentication opacity**: Generic errors masking root cause (fixed in v1.0.82-1), but enterprise flows still hit 401/403 mismatches (#4527, #4650, #4657).
- **Headless/CI friction**: Completion reinstall on every `--server` launch (#4658), model parameter ignored on resume (#4645) — automation scenarios treated as second-class.

---

*Digest generated from github.com/github/copilot-cli data as of 2026-08-29. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-29

## 1. Today's Highlights
A critical security vulnerability (#2625) was disclosed and closed: MCP tool calls bypass built-in secret-file guards, enabling arbitrary file reads (`.env`, SSH keys) when auto-approve mode is enabled. Separately, a paying subscriber reports severe quota amplification (#2626) — `cache_read` tokens billed every turn with zero `cache_creation`, draining ~40% of a 5-hour window in minutes. A dependency update (PR #2622) patches two `asyncssh` CVEs in the `pykaos` package.

## 2. Releases
No new releases published in the last 24 hours.

## 3. Hot Issues
| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|----------------|-------------------|
| **[#2625](https://github.com/MoonshotAI/kimi-cli/issues/2625)** Security: MCP tool calls bypass the built-in secret-file guards (arbitrary file read demonstrated) | **CLOSED** | MCP servers accepting file paths can read sensitive files (`.env`, SSH keys, credential stores) because MCP calls skip the content-level guard applied to built-in `Read` tools. In auto-approve mode, the approval prompt is also skipped, creating a direct path for credential exfiltration. | 1 comment; author demonstrated exploit. Closed quickly — likely patched or mitigated internally. |
| **[#2626](https://github.com/MoonshotAI/kimi-cli/issues/2626)** Abnormal quota consumption: cache_read billed every turn with cache_creation always 0 (>10x amplification) | **OPEN** | Subscriber on annual plan observes `cache_read` charged every turn while `cache_creation` stays at 0, implying cache never warms. 40% quota lost in minutes of light use. Suggests either a metering bug or broken caching layer — high impact for paid users. | 0 comments yet; urgent for billing credibility. |

## 4. Key PR Progress
| PR | Status | Description |
|----|--------|-------------|
| **[#2622](https://github.com/MoonshotAI/kimi-cli/pull/2622)** deps: bump asyncssh to 2.23.1 in pykaos (GHSA-2wxc-x7rj-hg8f) | **OPEN** | Updates `asyncssh` from 2.21.1 → 2.23.1 in `packages/kaos/pyproject.toml` to address **GHSA-2wxc-x7rj-hg8f** and **GHSA-qr67-gv47-xwwh** (CVEs in SSH client library). Low-risk dependency patch; awaiting review/merge. |

## 5. Feature Request Trends
No new feature requests in the last 24h. The two issues reflect **security hardening** (MCP guard parity) and **billing transparency** (cache metering accuracy) — both infrastructure-level concerns rather than user-facing features.

## 6. Developer Pain Points
1. **MCP security surface**: Developers using auto-approve mode with MCP servers are exposed to silent credential leakage. Need built-in guard parity or explicit warnings.
2. **Quota unpredictability**: `cache_read` billing without corresponding `cache_creation` breaks mental model of prompt caching. Users cannot estimate costs or trust metering.
3. **Dependency lag**: Security patches (e.g., `asyncssh`) require manual PRs; automated dependabot/renovate coverage appears limited for workspace packages.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-29

## Today's Highlights
No new releases today, but the project saw a surge of 14 new/updated issues and 50 PR updates — heavily focused on v2.0 core stability (streaming message growth, plugin caching, tool-call identity), Windows TUI polish (panel outlines, plugin paths, scroll accessibility), and Linux clipboard/primary-selection support. Contributor `kitlangton` led a wave of internal refactors targeting performance and correctness in the core, codemode, and utility layers.

---

## Releases
*No releases published in the last 24 hours.*

---

## Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#46094](https://github.com/anomalyco/opencode/issues/46094) **Reasoning delta appends empty part → quadratic message growth** | Core v2 streaming bug: every reasoning delta duplicates full `reasoningDetails`, causing O(n²) JSON bloat and subagent throughput collapse. | New, 1 comment, 0 👍 — critical perf regression. |
| [#46095](https://github.com/anomalyco/opencode/issues/46095) **Transient plugin import failure permanently poisons resolution (Windows)** | First-load race caches failure for process lifetime; subsequent fixes don't recover without restart. Blocks plugin dev on Windows. | New, 1 comment, 0 👍. |
| [#36766](https://github.com/anomalyco/opencode/issues/36766) **Truncated OpenAI tool arguments crash execution** | Native Responses path finalizes malformed JSON; v2 rejects but terminates without diagnostics to distinguish provider vs adapter fault. | 5 comments, open since Jul 13 — ongoing debugging. |
| [#38366](https://github.com/anomalyco/opencode/issues/38366) **Bun segfault on concurrent macOS arm64 launches** | 6–8 simultaneous TUI instances reliably crash at startup (SIGTRAP). Blocks CI/parallel workflows on Apple Silicon. | 2 comments, open since Jul 22. |
| [#23461](https://github.com/anomalyco/opencode/issues/23461) **`opencode upgrade` 403 behind proxy/VPN (ignores GITHUB_TOKEN)** | Unauthenticated GitHub API hits rate limit; tool doesn't use provided token. Affects corporate/air-gapped users. | 5 comments, 2 👍, open since Apr 20. |
| [#46088](https://github.com/anomalyco/opencode/issues/46088) **ECONNRESET with custom models after reading files** | New sessions succeed then fail consistently after file reads, well under context limit. Suggests connection pooling/timeout issue. | New, 3 comments. |
| [#46101](https://github.com/anomalyco/opencode/issues/46101) **TUI /status shows full Windows path instead of plugin name** | `file://` plugins display `C:\Users\...` not `rtk`. Cosmetic but confuses plugin debugging. | New, 1 comment. |
| [#46093](https://github.com/anomalyco/opencode/issues/46093) **Multi-select question dialog lacks Space keybind** | Enter toggles on option page but submits on review page — ambiguous UX; no Space to toggle. Accessibility gap. | New, 1 comment, tagged `needs:compliance`. |
| [#46092](https://github.com/anomalyco/opencode/issues/46092) **ACP `PromptResponse.usage` reports only final LLM request** | Under-reports tokens for multi-step turns; violates ACP schema expectation of session-cumulative or per-turn totals. | New, 1 comment. |
| [#46096](https://github.com/anomalyco/opencode/issues/46096) **`question` tool cannot be removed from agent tool list (v2)** | `tools: { question: false }` removed; `deny` permission doesn't hide tool from list. Limits agent customization. | New, 0 comments. |

---

## Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| [#46098](https://github.com/anomalyco/opencode/pull/46098) | Feat + Fix | **QR code server pairing** for V2 web/desktop clients via `opencode2 pair`. |
| [#46086](https://github.com/anomalyco/opencode/pull/46086) | Feat (Closed) | **Beta web app deployment** (`beta.opencode.ai`) via SST when v2 promoted. |
| [#46090](https://github.com/anomalyco/opencode/pull/46090) | Fix (Closed) | **Preserve Windows panel top outlines** — 1px CSS clearance prevents clipping of outward half-pixel shadow. |
| [#6370](https://github.com/anomalyco/opencode/pull/6370) | Fix | **Enable primary clipboard copy on Linux** (Wayland/X11) via `clipboard.linux.enablePrimaryCopy` — fixes middle-click paste. |
| [#32370](https://github.com/anomalyco/opencode/pull/32370) | Feat | **Linux clipboard selection config** — primary/both modes, primary-read support, `wl-copy` MIME fix; supersedes #6370. |
| [#44938](https://github.com/anomalyco/opencode/pull/44938) | Feat (Closed) | **Middle-click paste primary selection** on Linux — adds `readPrimary()` with `wl-paste`→`xclip`→`xsel` fallback. |
| [#46089](https://github.com/anomalyco/opencode/pull/46089) | Refactor | **Opaque, composable layer graphs** — fixes service-replacement relationship loss in `LayerNode` override APIs. |
| [#46085](https://github.com/anomalyco/opencode/pull/46085) | Fix | **Bound Windows post-exit pipe draining** — prevents descendant processes holding stdout/stderr open (e.g., `bunx agent-browser`). |
| [#46087](https://github.com/anomalyco/opencode/pull/46087) | Fix | **Bound consumed job history** — global registry capped at 100 jobs / 16 MiB UTF-8, evicting oldest completions. |
| [#46084](https://github.com/anomalyco/opencode/pull/46084) | Fix | **Isolate response tool-call identities** — stops keying pending accumulators on optional/unstable item IDs/output indexes. |

---

## Feature Request Trends
1. **v2.0 Core Hardening** — Streaming integrity (reasoning deltas, tool-call IDs), plugin loading resilience, job-history bounds, and config/permission model completeness.
2. **Cross-Platform TUI Parity** — Windows visual bugs (outlines, paths), Linux clipboard/primary selection, accessibility (scroll, keybinds).
3. **ACP Compliance** — Usage reporting, tool visibility, and session semantics alignment with spec.
4. **Developer Experience** — QR pairing, beta web deployment, upgrade auth, and plugin dev ergonomics (Windows cache poisoning).

---

## Developer Pain Points
- **Windows plugin caching** breaks iterative development; requires full restart after any transient failure.
- **Streaming message explosion** (quadratic growth) kills subagent performance — likely affects any long-running reasoning task.
- **Upgrade command ignores `GITHUB_TOKEN`** — blocks automated/CI upgrades behind proxies.
- **Bun crashes on macOS arm64 concurrency** — prevents parallel agent runs in CI or local multi-terminal workflows.
- **Accessibility gaps** — missing scrollbars in settings, no Space keybind for multi-select, ambiguous Enter behavior.
- **Custom model instability** — ECONNRESET after file reads suggests connection lifecycle bugs with non-default providers.
- **ACP usage under-reporting** — breaks cost tracking and quota enforcement for multi-turn tool-use agents.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-29

## Today's Highlights
Pi v0.84.4 shipped with **terminal capability overrides** (hyperlink, image, truecolor) and new **extension UI prompt events**. The team closed a critical compaction regression (#6879) where context would exceed 100% before triggering, and fixed a startup crash on narrow terminals (80–88 cols). Extension developers should note: provider registrations now flush before initial model resolution (#8812), resolving intermittent wrong-provider starts.

---

## Releases
### v0.84.4
- **Terminal capability overrides** — Force-enable/disable hyperlink, image, and truecolor support regardless of terminal detection. [Docs](https://github.com/earendil-works/pi/blob/v0.84.4/packages/coding-agent/docs/terminal-setup.md#capability-overrides)
- **Extension UI prompt events** — New hooks for extensions to react to UI dialog lifecycle.

---

## Hot Issues (Top 10 by Community Signal)

| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|----------------|-------------------|
| [#8584](https://github.com/earendil-works/pi/issues/8584) TUI row corruption during streaming | OPEN | Assistant text renders **one word per line** after long tool output — breaks readability in long sessions. | 24 comments, 9 👍 — high visibility, no workaround yet. |
| [#6879](https://github.com/earendil-works/pi/issues/6879) Auto-compaction never triggers past 100% | CLOSED | Context grew to 373k tokens before API rejection; compaction only ran on provider overflow. Fixed in #8782. | 24 comments, 20 👍 — major pain point for long-running agentic tasks. |
| [#7128](https://github.com/earendil-works/pi/issues/7128) System prompt over-encourages `bash env` calls | OPEN | Default guideline “Inspect PI_* env vars” biases agent to run unnecessary `bash` commands. | 11 comments, 13 👍 — strong consensus to remove or gate the hint. |
| [#8620](https://github.com/earendil-works/pi/issues/8620) Bundled CLI: global extensions fail to load | OPEN | v0.84.3 broke all extensions importing `@earendil-works/pi-*` packages (module resolution). | 6 comments — blocks extension ecosystem on bundled CLI. |
| [#7130](https://github.com/earendil-works/pi/issues/7130) Backspace deletes 2 chars in Kitty | CLOSED | Kitty protocol release events not filtered; fixed in #8786. | 12 comments — niche but sharp UX regression for Kitty users. |
| [#7553](https://github.com/earendil-works/pi/issues/7553) Configurable thinking level for compaction | OPEN | Compaction reuses session thinking budget; users want separate budget for summarization on reasoning models. | 9 comments — growing demand as reasoning models proliferate. |
| [#7153](https://github.com/earendil-works/pi/issues/7153) `/scoped-models` stalls ~5 min on catalog refresh | CLOSED | Command synchronously awaits catalog refresh before rendering any UI. | 8 comments, 4 👍 — UX dead zone during model switching. |
| [#8806](https://github.com/earendil-works/pi/issues/8806) TUI crashes on narrow terminals (80–88 cols) | CLOSED | Startup box + skill lines exceed width → hard crash. Fixed in #8805 (adaptive truncate). | 2 comments — critical for laptop/SSH users. |
| [#8808](https://github.com/earendil-works/pi/issues/8808) Prompt image attachments bypass resize pipeline | CLOSED | 4832×2756 Retina screenshot stored at full size; >20 images bricks Anthropic requests. | 1 comment — silent session killer for image-heavy workflows. |
| [#8814](https://github.com/earendil-works/pi/issues/8814) `pi -p` never exits with extensions/MCP loaded | CLOSED | Print mode hangs on shutdown when extensions or MCP servers present. | 1 comment — blocks CI/automation use cases. |

---

## Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#8812](https://github.com/earendil-works/pi/pull/8812) | CLOSED | **Flush extension provider registrations before initial model resolution** — fixes intermittent wrong-provider starts. |
| [#8811](https://github.com/earendil-works/pi/pull/8811) | CLOSED | **Startup composer** — accepts input during startup, carries state into interactive mode; enables trust checks & dialogs on shared UI. |
| [#8805](https://github.com/earendil-works/pi/pull/8805) | CLOSED | **Adaptive truncate on narrow terminals** — replaces hard crash with line truncation; fixes #8806. |
| [#8782](https://github.com/earendil-works/pi/pull/8782) | CLOSED | **Compact before post-tool model requests** — runs threshold compaction *before* next provider call; closes #6879. |
| [#8786](https://github.com/earendil-works/pi/pull/8786) | CLOSED | **Match skill commands by bare name in slash autocomplete** — fixes `/idea` ranking `skill:deep-research` over `skill:research-idea` (#8813). |
| [#8784](https://github.com/earendil-works/pi/pull/8784) | CLOSED | **Per-model `max_tokens` cap for MiniMax-M3** — OpenRouter/GMICloud rejects >524,288 tokens; now capped per model. |
| [#8795](https://github.com/earendil-works/pi/pull/8795) | CLOSED | **Artifact verification repair gate** — opt-in extension withholds success token until deterministic verification passes; feeds failures back as bounded repair turns. |
| [#8800](https://github.com/earendil-works/pi/pull/8800) | OPEN | **Search improvements** — `Ctrl+Shift+F` toggles search, `Esc` closes, polished alt-mode UI. |
| [#8799](https://github.com/earendil-works/pi/pull/8799) | OPEN | **Prettier “Working…” spinner** — moves to input border, matches thinking-level color, handles retry state. |
| [#6848](https://github.com/earendil-works/pi/pull/6848) | CLOSED | **Retry logic for compaction summarization** — exponential backoff on transient stream failures; fixes #6647. |

---

## Feature Request Trends
1. **Terminal/TUI hardening** — Narrow-terminal support, autocomplete ranking, search UX, scrollbar polish, spinner redesign.
2. **Extension system maturity** — Provider registration timing, UI dialog events, changelog integration, artifact verification hooks, model runtime exposure.
3. **Model management granularity** — Vision-model separation, per-model token caps, configurable compaction thinking level, scoped-model default filtering.
4. **Compaction reliability** — Pre-request compaction, retry on stream failure, configurable thinking budget.
5. **Windows parity** — Path normalization, `windowsHide: true` on child processes, console flash elimination.
6. **Autocomplete intelligence** — Fuzzy matching on bare names, abbreviated nested paths (`@bmsfepa` → `@bms-fe/package.json`).

---

## Developer Pain Points
- **Extension loading broken on bundled CLI** (#8620) — module resolution fails for `@earendil-works/pi-*` imports; blocks ecosystem.
- **Compaction silence** — Auto-compaction not triggering until provider rejects request (#6879); now fixed but trust rebuilding.
- **TUI fragility** — Startup crashes on common terminal widths (80–88 cols), row corruption after tool output, Kitty backspace quirks.
- **Model selection friction** — `/model` and `/scoped-models` show all catalog models, not user-configured ones; 5-min stall on refresh.
- **Session lifecycle leaks** — `pi -p` hangs with extensions/MCP; `/reload` drops editor history; print mode exit logic incomplete.
- **Image handling gaps** — No resize pipeline for pasted images; oversized images + volume brick Anthropic sessions silently.
- **System prompt noise** — Default `PI_*` env hint causes unnecessary `bash` invocations; users want it opt-in or removed.

---

*Generated from github.com/badlogic/pi-mono — 34 issues, 18 PRs updated in last 24h.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-29

## 1. Today's Highlights
Qwen Code shipped v0.22.3 with **owner-scoped named sessions in Channels** (up to 8 persistent tasks per chat) and hardened daemon Extension installs to accept absolute local paths only. The nightly v0.22.3-nightly adds Web Shell git-state hints beside branch actions and a fix for the review emitter. Meanwhile, CI stability dominates today’s activity: 6 main-branch E2E failures were auto-filed, and multiple PRs target CI hardening (resolve-health watchdog, vitest timeout exemptions, Windows filesystem semantics).

## 2. Releases
| Version | Key Changes |
|---------|-------------|
| **v0.22.3** | • **Channels**: owner-scoped named sessions (#10198) — manage ≤8 persistent tasks per chat<br>• **Daemon Extensions**: absolute local paths allowed; relative paths rejected<br>• **cua-driver-rs v0.20.2**: macOS codesigned/notarized universal binary + `QwenCuaDriver.app`; Linux (x86_64/arm64, glibc≥2.31); Windows (x86_64/arm64); Node.js `@qwen-code/cua-driver` published |
| **v0.22.3-nightly.20260829.e5cb60ad48** | • **Web Shell**: git-state hints beside branch picker actions (#10397)<br>• **Review**: emitter fix (truncated in notes) |

## 3. Hot Issues (Top 10 by Impact & Recency)
| # | Title | Status | Why It Matters |
|---|-------|--------|----------------|
| [#10210](https://github.com/QwenLM/qwen-code/issues/10210) | Agent Team: `team_delete` reports success after filesystem cleanup fails | **CLOSED** | Silent data-loss risk in multi-agent teardown; fix ensures cleanup errors surface |
| [#10071](https://github.com/QwenLM/qwen-code/issues/10071) | Named teammates ignore custom model routes from agent definitions | **CLOSED** | Breaks model-routing contracts for Agent Team members; fixed routing parity |
| [#10467](https://github.com/QwenLM/qwen-code/issues/10467) | Main CI failed: E2E Tests on `ad0061442b76` | OPEN | Auto-filed; signals flaky E2E suite — blocks merge confidence |
| [#10473](https://github.com/QwenLM/qwen-code/issues/10473) | Main CI failed: E2E Tests on `bae26843a078` | OPEN | Same pattern; 3rd failure in 24h — CI reliability focus area |
| [#10453](https://github.com/QwenLM/qwen-code/issues/10453) | Main CI failed: E2E Tests on `48ec00834542` | **CLOSED** | Auto-resolved after fix; shows autofix loop working |
| [#10463](https://github.com/QwenLM/qwen-code/issues/10463) | Main CI failed: E2E Tests on `5c47cf95bc16` | OPEN | `autofix/skip` — human triage needed; possible env-specific flake |
| [#9886](https://github.com/QwenLM/qwen-code/issues/9886) | Refactor: centralize JSON tag-char escape used by 5 model-facing envelopes | **CLOSED** | Security hardening: prevents tag-injection in model payloads; reduces duplicate code |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | Fleet Shepherd Dashboard (auto-maintained) | OPEN | Bot fleet health monitor; 1 sync, 0 releases — low churn signal |
| [#10456](https://github.com/QwenLM/qwen-code/pull/10456) | Fix test: probe native directory picker once at daemon spawn | **CLOSED** | Eliminates flaky capability detection in E2E |
| [#10440](https://github.com/QwenLM/qwen-code/pull/10440) | Fix CLI: handle Windows filesystem identity semantics | OPEN | Unblocks Windows unit-test lane; normalizes unverifiable file IDs to `0` |

## 4. Key PR Progress (Top 10 by Feature Impact & Review Activity)
| # | Title | Author | Status | Summary |
|---|-------|--------|--------|---------|
| [#10429](https://github.com/QwenLM/qwen-code/pull/10429) | Fix CI: recover `/resolve` requests lost to moved heads, fork pushes, 503s, drafts | wenshao | OPEN | **Critical CI reliability**: replays on moved heads, tolerates 503s, handles draft PRs, recovers fork pushes |
| [#10471](https://github.com/QwenLM/qwen-code/pull/10471) | Fix serve: advertise native directory picker during bootstrap | wenshao | OPEN | Exposes `native_directory_picker` in bootstrap envelopes (`/capabilities`, `/daemon/status`) for faster UI init |
| [#10282](https://github.com/QwenLM/qwen-code/pull/10282) | Feat core: remind model of active output style every turn | qqqys | OPEN | Injects `<system-reminder>` per turn when non-default style active (e.g., “Concise output style is active…”) |
| [#9590](https://github.com/QwenLM/qwen-code/pull/9590) | Feat: provider-aware reasoning controls | callmeYe | OPEN | WebShell controls for DeepSeek V4, GLM 5.2, Kimi — toggle-only, effort tiers, mandatory-thinking modes |
| [#10418](https://github.com/QwenLM/qwen-code/pull/10418) | Feat web-shell: explicit daemon session contexts | doudouOUC | OPEN | Adds session-scoped contexts to WebShell; improves multi-session isolation |
| [#9811](https://github.com/QwenLM/qwen-code/pull/9811) | Refactor vscode-ide-companion: complete WebShell UI cutover | yiliang114 | OPEN | Moves VS Code companion from legacy WebUI → WebShell; mounts `WebShellWithProviders` on loopback daemon |
| [#10439](https://github.com/QwenLM/qwen-code/pull/10439) | CI: watch `/resolve` for consecutive failures & file tracking issue | wenshao | OPEN | Scheduled health check; opens/updates/closes tracking issue automatically |
| [#10011](https://github.com/QwenLM/qwen-code/pull/10011) | Feat web-shell: persist reasoning effort | callmeYe | OPEN | Reasoning selections update session immediately + persist as global `model.reasoningEffort` default |
| [#10024](https://github.com/QwenLM/qwen-code/pull/10024) | Feat web-shell: share HTML artifacts via managed hosting (Cloudflare/Vercel/Netlify) | qqqys | OPEN | Guided provider flow with Prepare→Authorize→Connect→Ready; compact default view |
| [#10215](https://github.com/QwenLM/qwen-code/pull/10215) | Fix web-shell: replace boot white screen with recoverable error state | harjothkhara | OPEN | Adds boot fallback UI + retry; eliminates blank-tab dead end |

## 5. Feature Request Trends
| Trend | Evidence (Issues/PRs) | Signal Strength |
|-------|----------------------|-----------------|
| **Multi-agent / Agent Team maturity** | #10210, #10071, #10198 (Channels named sessions) | 🔥 High — core roadmap item |
| **WebShell as primary UI surface** | #10397, #10418, #10011, #10024, #10215, #9811, #8583 | 🔥 High — VS Code cutover + artifact sharing + session cockpit |
| **Provider-aware model controls** | #9590, #10011 (reasoning effort per provider) | 📈 Rising — DeepSeek/GLM/Kimi first-class support |
| **CI/CD resilience & observability** | #10429, #10439, #10443, #10036, #10456, #10467/73/53/63 | 🔥 High — 6 E2E failures in 24h drove automated watchdogs |
| **Cross-platform parity (Windows/macOS)** | #10440 (FS identity), #10443 (vitest timeout), #10036 (ECS runners) | 📈 Rising — Windows lane unblocking prioritized |
| **Session/workflow persistence** | #10198 (Channels), #8583 (workflow cockpit), #10011 (reasoning persist) | 📈 Rising — “persistent tasks per chat” + workflow projection |

## 6. Developer Pain Points
| Pain Point | Frequency | Representative Items |
|------------|-----------|----------------------|
| **Flaky E2E tests blocking merges** | 6 auto-filed issues in 24h | #10467, #10473, #10453, #10463 — “main CI failed before any test result reported” |
| **Windows filesystem semantics differ** | 1 PR + CI lane blocked | #10440 — inode normalization, unverifiable file IDs → `0` |
| **Vitest RPC timeout on non-Linux** | 1 PR expanding exemption | #10443 — 60s worker→main `onTaskUpdate` budget exceeded on Windows/macOS |
| **Silent failures in agent teardown** | 1 closed bug | #10210 — `team_delete` success despite `fs.rm` failure |
| **Model routing ignored for named teammates** | 1 closed bug | #10071 — custom agent model routes not honored in Agent Team |
| **WebShell boot failure = blank tab** | 1 PR fixing UX | #10215 — no error boundary coverage during bootstrap |
| **Reasoning/config not persisted across sessions** | 1 PR addressing | #10011 — reasoning effort now persists globally |

---

**TL;DR**: v0.22.3 lands Channels named sessions + cua-driver binaries; nightly adds git-state hints. CI flakiness is the loudest signal today — 6 E2E failures triggered automated watchdogs and timeout exemptions. WebShell continues absorbing features (artifact sharing, reasoning persist, session contexts, boot recovery) while the VS Code companion completes its cutover. Multi-agent routing bugs are fixed, but Windows/macOS test parity remains a drag.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-29

## Today's Highlights
The project is in full **v0.9.12 release preparation** with a tracked milestone (Issue #5573) covering must-fix items across safety, money, and correctness. Simultaneously, the team is landing **GitHub App–based PR review automation** (headless review + bot posting), **Daytona cloud-agent dispatch**, and a major **Tideline UI component rollout** for ratatui. Dependency modernization is aggressive: Next.js 16, TypeScript 7, Tailwind 4, and multiple Rust crate bumps all landed today.

---

## Releases
**None in the last 24 hours.** v0.9.12 is in final validation on branch `codex/v0912-integration-20260823` (see #5573).

---

## Hot Issues (Noteworthy Updates)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#5573] v0.9.12: milestone tracker** | Central release checklist: P0 fixes (billing, auth, token leaks), P1 UX, docs/tag/assets/npm/website green. 22 comments in 6 days — active coordination. | High — release gate |
| **[#5316] EPIC-005: TUI Crate Decomposition** | Architectural refactor splitting the monolithic TUI crate; tracks sub-EPICs and FEATs. 18 comments, ongoing since Aug 10. | High — long-term maintainability |
| **[#5681] Extend provider-native web search to DeepSeek, Qwen, Kimi, Z.AI, MiMo** | Users on first-party routes currently fall back to separate search backends; this adds native support for 5 major CN providers. | Medium — expands provider parity |
| **[#5350] Simplify third-party model config with pre‑built templates** *(CLOSED)* | Adds templates for OpenCode Zen/Go, Agnes, Sensenova; one-click key entry, embedded docs, “Test Connection” button. Fixes `not checked`/`cache failed` states. | Medium — onboarding UX win |
| **[#5579] Plugin UX parity with Claude Code** *(CLOSED)* | Proactive plugin recommendations, hot-reload, discoverability. Partially delivered via #5663 (prompt-based suggestions). | Medium — developer ergonomics |

*Only 5 issues updated in 24h; the above covers all.*

---

## Key PR Progress (Top 10 by Impact)

| PR | Type | Summary |
|----|------|---------|
| **[#5707] docs: GitHub App setup guide** | Docs | Step-by-step guide to configure `codewhale-agent[bot]` for `codewhale review --pr --post` — permissions, secrets (`CODEWHALE_APP_ID`, `CODEWHALE_APP_PRIVATE_KEY`), repo settings. |
| **[#5706] feat(tui): headless PR review with GitHub posting** | Feature | `codewhale review --pr N [--post]` runs advisory review locally or posts a single COMMENT review (summary + inline comments) anchored to PR head SHA via GitHub App. |
| **[#5701] feat(cli): Daytona cloud-agent dispatch** | Feature | New `codewhale dispatch` (alias `cloud-agent`) offloads work to Daytona agent against GitHub/CNB/Gitee remotes. Confirmation-gated; credentials stay in env/keyring. |
| **[#5708] feat(tui): Tideline components per ratatui translation spec** | Feature | Implements 12 remaining Tideline components as standalone render modules + golden buffers (spec §5a). Follows topbar pattern; enables consistent, testable UI. |
| **[#5704] fix(auth): one login path storing session + Daytona slot** | Fix | Unified login: persists CodeWhale account session + Daytona token; adds `/login` command; logout now clears all auth state (previously left session/token). |
| **[#5686] feat(web): add Moonshot and Kimi native search** | Feature | Native web search for Kimi K3/K2.6 and Kimi Code `/search`; bounds to 4 rounds / 8 tool calls, validates tools, recovers citations. Addresses #5681 partially. |
| **[#5663] feat(tui): suggest plugins from the prompt** | Feature | Toast-style proactive plugin suggestion when prompt mentions a known plugin (e.g., Supabase). Delivers part of #5579 UX; ranking is local metadata only. |
| **[#5705] chore: remove verified-dead code & unused deps** | Maintenance | **-143 lines**, 2 deps, 9 dead functions across 13 files. Verified via `deny(warnings)` + `allow(dead_code)` audit. |
| **[#5700] feat(web): local GT pipeline for website/docs** | Infra | Adopts General Translation as single i18n pipeline into `web/lib/i18n/dictionaries`; seeds `web/gt-catalog/{en,zh}.json` from live dicts. |
| **[#5699] fix(tui): first-class shells on the work strip** | UX | Background shells appear as navigable `▾ Shells N` group alongside subagents; rows show output, `shell_*` IDs cancellable via `/jobs cancel`. |

*Dependabot PRs (#5695, #5694, #5671, #5673, #5670) omitted for brevity — all routine version bumps.*

---

## Feature Request Trends (from Issues & PRs)

1. **Provider-native tooling parity** — Web search, function calling, and model config templates for non-OpenAI/Anthropic providers (DeepSeek, Qwen, Kimi, Z.AI, MiMo, Moonshot).
2. **Plugin ecosystem maturity** — Proactive discovery, hot-reload, marketplace integration, prompt-aware suggestions (matching Claude Code UX).
3. **Cloud execution offload** — First-class Daytona dispatch, GitHub App–based CI agents, headless review posting.
4. **UI component systemization** — Tideline/ratatui translation spec, golden-buffer testing, work-strip unification (shells = subagents).
5. **Onboarding friction reduction** — Pre-built provider templates, embedded docs, one-click connection test, unified login/logout.

---

## Developer Pain Points (Recurring Themes)

| Pain Point | Evidence |
|------------|----------|
| **Fragmented third-party provider config** | Manual Base URL / model / env var entry; no templates; cache failures leave models in `not checked` state (#5350). |
| **Plugin discoverability & reload friction** | Users must type `/plugin suggest`; no hot-reload; no proactive context-aware recommendations (#5579, #5663). |
| **Auth/session leakage on logout** | Logout cleared only API keys, leaving account session + Daytona token; no `/login` command in TUI (#5704). |
| **Web search fallback for native routes** | First-party CN providers fall through to separate search backends instead of using provider-native tools (#5681, #5686). |
| **Monolithic TUI crate blocking modularity** | Ongoing EPIC-005 decomposition (#5316) indicates coupling pain for contributors and testability. |
| **Release chain fragility** | v0.9.12 tracker (#5573) explicitly calls out “full release chain green (docs/tag/assets/npm/website)” as a gate — implies past breakage. |

---

*Data sourced from `github.com/Hmbown/DeepSeek-TUI` (CodeWhale repo) — Issues & PRs updated 2026-08-28 to 2026-08-29.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*