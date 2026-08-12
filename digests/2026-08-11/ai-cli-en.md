# AI CLI Tools Community Digest 2026-08-11

> Generated: 2026-08-11 02:11 UTC | Tools covered: 10

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

# Cross-Tool AI CLI Ecosystem Comparison — 2026-08-11

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **enterprise-grade platforms** (Claude Code, GitHub Copilot CLI, OpenAI Codex) with dedicated subscription tiers and compliance programs, and **open/community-driven tools** (OpenCode, Gemini CLI, Qwen Code, Pi, DeepSeek TUI, Kimi) iterating rapidly on agent architecture, TUI/UX, and multi-provider flexibility. Today’s activity shows a clear pattern: **stability & entitlement fixes dominate commercial tools**, while **agent reliability, web parity, and modular architecture** drive open-source projects. Release cadence remains high—7 of 9 active tools shipped updates in the last 24h—indicating a maturing but still volatile ecosystem.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Today | Release Type |
|------|---------------------|-------------------|---------------|--------------|
| **Claude Code** | 10 (top) | 2 | v2.1.227 | Patch (critical fixes) |
| **OpenAI Codex** | 10 | 10 (all merged) | 0.148.0-alpha.6 / 0.147.0-alpha.6.6 | Alpha (2 builds) |
| **Gemini CLI** | 10 | 10 | v0.56.0-nightly.20260811 | Nightly |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.79 | Patch (enterprise sandbox) |
| **Kimi Code CLI** | 3 | 0 | — | — |
| **OpenCode** | 10 | 10 | v1.18.16 | Minor (config/web fixes) |
| **Pi** | 10 | 10 | — | — |
| **Qwen Code** | 2 | 10 | v0.21.9 + nightly | Stable + Nightly |
| **DeepSeek TUI** | 3 | 4 | v0.9.6 | Subtractive/minor |
| **Grok Build** | 0 | 0 | — | — |

**Note**: "Issues Updated" = hot issues highlighted in digest; "PRs Updated" = PRs with activity in window.

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Agent/Subagent Reliability** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, DeepSeek TUI | Turn-limit handling, silent failure detection, depth-budget enforcement, session resume |
| **Cross-Platform Parity (WSL/Windows/macOS/Linux)** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Pi, OpenCode | WSL git/sandbox breaks, Windows render freezes, Remote-SSH extension loads, macOS Seatbelt crashes |
| **Enterprise Policy & Model Access** | Claude Code, GitHub Copilot CLI, OpenAI Codex | Entitlement drift (Max/Team/CVP), Claude model disappearance, Azure/custom provider blocks |
| **Session/Context Management** | Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, OpenCode, Pi | Compaction replay safety, `events.jsonl` growth limits, session forking, mid-run usage streaming |
| **Web/Desktop Parity** | OpenAI Codex, OpenCode, Qwen Code, Pi | VS Code tab integration, web project picker, fullscreen TUI features, mobile↔desktop handoff |
| **Evaluation & Observability Infrastructure** | Gemini CLI, OpenCode, Qwen Code, DeepSeek TUI | Component-level evals, static validation, failure diagnostics, crate decomposition for testability |
| **MCP / Tool Protocol Hardening** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Pi | OAuth token refresh, initialize timeouts, retry/backoff, tool-call sanitization |

---

## 4. Differentiation Analysis

| Dimension | Commercial / Enterprise-Focused | Open / Community-Driven |
|-----------|--------------------------------|-------------------------|
| **Primary Users** | Enterprise teams, paid subscribers (Max/Pro/Team), orgs with compliance needs | Individual devs, OSS contributors, multi-provider enthusiasts, edge/serverless deployers |
| **Feature Focus** | Entitlement correctness, audit trails, sandbox policy, IDE integration depth | Agent architecture experimentation, TUI/UX polish, provider-agnostic core, modular crates |
| **Technical Approach** | Proprietary backends, feature-flag gating, centralized config, closed-model optimization | Pluggable provider adapters, ACP/MCP standards, subtractive releases, crate decomposition |
| **Release Strategy** | Patch-heavy, regression-first, alpha/beta channels for enterprise preview | Nightly + stable, rapid iteration, umbrella EPICs for architectural shifts |
| **Pain Points** | Silent downgrades, portal/status inconsistency, Windows/WSL second-class | Tool explosion limits, recursion budget leaks, undocumented internals, onboarding friction |

**Notable Outliers**:  
- **Qwen Code** bridges both: stable releases + aggressive Web Shell parity + plugin ecosystem (Qoder).  
- **Pi** targets Cloudflare Workers/serverless as first-class deployment target.  
- **DeepSeek TUI** pursues subtractive minimalism and crate-level modularity as explicit strategy.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / High Maturity** | **Claude Code**, **OpenAI Codex**, **GitHub Copilot CLI** | 70+ comment issues, enterprise escalation paths, dedicated security programs (CVP), multi-PR merge velocity (Codex: 10 merged/24h) |
| **High Momentum / Rapid Iteration** | **Gemini CLI**, **OpenCode**, **Qwen Code**, **Pi** | Nightly releases, 10+ PRs/day, architectural EPICs (eval infra, crate decomposition, Web Shell), new contributors |
| **Focused / Niche Momentum** | **DeepSeek TUI**, **Kimi Code CLI** | Small but sharp issue/PR sets; DeepSeek shipping subtractive releases + crate splits; Kimi stalled on memory system design |
| **Low / Dormant** | **Grok Build** | Zero activity in window |

**Velocity Leaders**: OpenAI Codex (10 merged PRs), OpenCode/Pi/Gemini/Qwen (10 PRs each), Claude Code (critical patch + active feature PR).  
**Engagement Leaders**: Claude Code (#79337: 72 comments), OpenAI Codex (#20214: 93 comments), OpenCode (#27167: 128 👍).

---

## 6. Trend Signals for Technical Decision-Makers

1. **Entitlement & Access Control Is the New Reliability Frontier**  
   Three commercial tools (Claude, Copilot, Codex) report *silent downgrades* or *policy blocks* despite valid subscriptions. **Action**: Build fallback model routing and explicit entitlement health checks into automation.

2. **Agent Orchestration Requires Explicit Contracts**  
   Recurring bugs: subagent depth-budget leaks (DeepSeek, Gemini), silent protocol switches (Claude), `spawn_agent` model rejection (Codex). **Action**: Adopt tools with typed agent interfaces (ACP) and depth-ceiling enforcement; avoid opaque delegation.

3. **Windows/WSL Is a Tier-1 Blockers, Not Edge Case**  
   Every Windows-supported tool has open stability issues (render loops, file locks, sandbox breaks). **Action**: Validate CI/CD pipelines on Windows runners; pin extension/CLI versions pre-regression.

4. **Evaluation Infrastructure Is Becoming a Competitive Moat**  
   Gemini (component evals, static validation), OpenCode (V2 parity observability), Qwen (review toolchain adapters), DeepSeek (crate decomposition for testability). **Action**: Invest in eval-as-code; prefer tools with CI-gateable evaluation.

5. **Web/Desktop Convergence Accelerating**  
   OpenCode web picker overhaul, Qwen Web Shell file uploads/workspace mgmt, Pi fullscreen TUI search/bar, Codex VS Code tab parity demand. **Action**: Expect browser-based agent UIs to reach CLI parity within 6–12 months.

6. **Subtractive/Minimalist Releases Gaining Traction**  
   DeepSeek v0.9.6 (removed guards, simplified prompts), Pi (trimmed compaction), OpenCode (config parser ignores unknown fields). **Action**: Favor tools demonstrating *removal* of complexity over feature stacking.

7. **Multi-Provider / BYOM (Bring Your Own Model) Is Table Stakes**  
   Copilot `explore` hardcodes gpt-5.4-mini (#3954), Pi case-sensitive baseUrl breaks DeepSeek (#7886), Codex Azure empty-functions regression (#37380). **Action**: Require provider-agnostic toolchains; test custom endpoint compatibility before adoption.

---

**Bottom Line**: The ecosystem is splitting into **managed platforms** (buy reliability, accept lock-in) and **composable frameworks** (build flexibility, own integration burden). For production teams: **Claude Code / Copilot CLI** lead on enterprise readiness *if* entitlement bugs are resolved; **OpenCode / Gemini CLI / Qwen Code** lead on architectural transparency and hackability. Monitor **OpenAI Codex** Windows/Remote-SSH fixes before committing to IDE workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

The user wants me to analyze the GitHub data from the anthropics/skills repository and generate a community highlights report. Let me carefully analyze the data provided.

First, I need to understand the data:
- 50 PRs total, showing top 20 by comments (though comments field shows "undefined" for all)
- 16 Issues total, showing top 15 by comments (with actual comment counts)

Since the PR comments show "undefined", I'll need to infer attention from other signals like:
- Number of updates/revisions
- Time span (created to updated)
- Whether they're referenced in issues
- The nature of the PR (fixes vs new skills)

For Issues, I have actual comment counts, so I can rank those properly.

Let me analyze the PRs first:

Top PRs by apparent activity (based on update frequency, time span, and cross-references):

1. **#1298** - fix(skill-creator): run_eval.py always reports 0% recall - Created 2026-06-10, Updated 2026-06-23 (13 days), references #556, 10+ reproductions
2. **#514** - Add document-typography skill - Created 2026-03-04, Updated 2026-03-13 (9 days)
3. **#538** - fix(pdf): correct case-sensitive file references - Created 2026-03-06, Updated 2026-04-29 (54 days)
4. **#486** - Add ODT skill - Created 2026-03-01, Updated 2026-04-14 (44 days)
5. **#210** - Improve frontend-design skill - Created 2026-01-05, Updated 2026-03-07 (61 days)
6. **#83** - Add skill-quality-analyzer and skill-security-analyzer - Created 2025-11-06, Updated 2026-01-07 (62 days)
7. **#541** - fix(docx): prevent tracked change w:id collision - Created 2026-03-06, Updated 2026-04-16 (41 days)
8. **#539** - fix(skill-creator): warn on unquoted description - Created 2026-03-06, Updated 2026-04-16 (41 days)
9. **#1367** - feat(skills): add self-audit - Created 2026-06-28, Updated 2026-07-02 (4 days) - very recent
10. **#1099** - skill-creator: fix Windows subprocess pipe - Created 2026-05-07, Updated 2026-05-24 (17 days)
11. **#1050** - skill-creator: fix Windows subprocess + encoding bugs

---

# Claude Code Community Digest — 2026-08-11

---

## 1. Today's Highlights
- **v2.1.227 released** with two critical fixes: a feature-flag regression that incorrectly prompted Max-plan users for Fable 5 usage credits, and a `claude-code-action` Bash-command failure.  
- **Fable 5 entitlement bugs dominate discussion** — the top issue (#79337, 72 comments) confirms Max-plan users were blocked on launch day (2026-07-20) and silently downgraded to Opus 4.8; a second report (#82797) shows Team Premium seats also see “Requires usage credits.”  
- **Cyber Verification Program (CVP) re-blocking** (#84352, 33 comments) reveals approved organizations are again hitting safeguard blocks, with the portal showing “Under review” despite prior approval emails.

---

## 2. Releases
### v2.1.227 (2026-08-11)
| Change | Impact |
|--------|--------|
| Fixed feature-flag evaluation without subscription tier when session starts with expired login token | Restores Fable 5 access for Max-plan users who were wrongly prompted for usage credits |
| Fixed every Bash command failing under `claude-code-action` with `allowed_no` | Unblocks CI/CD pipelines using the GitHub Action |

[Release link](https://github.com/anthropics/claude-code/releases/tag/v2.1.227)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#79337](https://github.com/anthropics/claude-code/issues/79337) | **Fable 5 prompts “usage credits required” on Max plan** (launch-day regression) | Blocks flagship model for highest-tier subscribers; silent downgrade to Opus 4.8 breaks workflows | 72 comments, 23 👍 — highest engagement in dataset |
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | **CVP-approved org receives cyber-safeguard blocks again** | Approved enterprise orgs lose tool access; portal status inconsistent with approval email | 33 comments — enterprise trust/reliability concern |
| [#71723](https://github.com/anthropics/claude-code/issues/71723) | **Agent tool `name` param silently switches to teammate protocol** | Background agent results lost when team config exists; silent failure mode | 11 comments, has repro — agent orchestration breakage |
| [#82536](https://github.com/anthropics/claude-code/issues/82536) | **`--continue` cannot find sessions created by `-p`** | Interactive resume broken for headless/non-interactive sessions | 10 comments — session lifecycle gap |
| [#82326](https://github.com/anthropics/claude-code/issues/82326) | **Opus 5 hallucinates answers Opus 4.8 did not** | Model quality regression on latest flagship | 8 comments — model reliability |
| [#78792](https://github.com/anthropics/claude-code/issues/78792) | **Published artifacts missing in mobile app** | Cross-platform artifact visibility broken; works on web/desktop | 5 comments, 20 👍 — strong user demand for mobile parity |
| [#74636](https://github.com/anthropics/claude-code/issues/74636) | **Spoofed “file was modified” system-reminder after own Write/Edit** | False system messages pollute context; erodes trust in tool-output stream | 5 comments — UX/confusion vector |
| [#78759](https://github.com/anthropics/claude-code/issues/78759) | **Argument substitution corrupts literal `$N` in skills/commands** | Prices (`$0.01`), awk fields (`$2`) rewritten inside fenced code blocks; no opt-out | 4 comments, has repro — breaks embedded shell snippets |
| [#76558](https://github.com/anthropics/claude-code/issues/76558) | **Sandbox masks deny-listed paths as unreadable device nodes (WSL)** | Breaks `git` when `extensions.worktreeConfig` enabled; `.git/config.worktree` becomes device node | 3 comments, has repro — WSL developer blocker |
| [#85138](https://github.com/anthropics/claude-code/issues/85138) | **Skills need frontmatter opt-out from post-compaction replay** | Stale `$ARGUMENTS` re-executed after compaction; caused unintended `git push` | 1 comment, 1 👍 — safety/correctness issue for automated skills |

---

## 4. Key PR Progress (All PRs Updated in Last 24h)

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#34951](https://github.com/anthropics/claude-code/pull/34951) | **feat: add automatic GitHub/GitLab detection and GitLab support for `/code-review`** | Open | Multi-platform `/code-review` command: auto-detects GitHub vs GitLab (including self-hosted), eliminates duplicated logic. Addresses #26932. |
| [#85464](https://github.com/anthropics/claude-code/pull/85464) | **plugins: add entroly-context for budget-aware context management** | Closed | Community plugin integrating [Entroly](https://github.com/juyterman1000/entroly) for context-window budgeting when codebases exceed limits. |

> Only two PRs updated in the window; #34951 is the sole active feature PR.

---

## 5. Feature Request Trends (Distilled from All Issues)

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **Model-entitlement parity** — consistent access across Max, Team Premium, CVP-approved orgs | #79337, #82797, #84352 | 3 high-profile entitlement bugs in 24h |
| **Cross-platform artifact/session parity** — mobile, desktop, CLI, web | #78792 (mobile artifacts), #85676 (agent-screen loss), #82536 (headless resume) | 20 👍 on mobile artifacts alone |
| **Explicit control over keybindings & input modes** | #74655 (Mod+Enter submit), #85013 (Enter behavior in Code tab) | Consolidates long-standing “Enter-to-send” cluster |
| **Hook/skill observability & safety** — approval awareness, replay opt-out, stale arg protection | #85606 (PreToolUse approval state), #85138 (compaction replay), #78759 (arg substitution) | Growing as automation deepens |
| **Sandbox/WSL filesystem fidelity** | #76558 (device-node masking), #85681 (connector sync stuck) | Recurring WSL/container pain points |
| **Memory/CLAUDE.md import resolution** | #85683 (ancestor `@import` + `@../` resolution) | Docs claim relative-to-file; implementation differs |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Entitlement drift** — Max/Team/CVP users hit “usage credits required” or safeguard blocks despite valid subscriptions; portal status often contradicts reality (#79337, #82797, #84352).  
2. **Silent data loss in agent workflows** — teammate-protocol hijack (#71723), session-resume gaps (#82536, #85657), agent-screen disappearance (#85676).  
3. **Uncontrollable context/compaction behavior** — thrashing (#85668), stale skill replay (#85138), false system reminders (#74636), argument corruption (#78759).  
4. **Platform parity gaps** — mobile artifact invisibility (#78792), WSL sandbox breaks git (#76558), Windows GPU crashes (#83744).  
5. **Observability deficits** — hooks can’t detect human approval (#85606), cross-session messages expire/approve without receiver notification (#85678, #85679), memory collisions (#85677).  
6. **Model quality regressions** — Opus 5 hallucinations vs 4.8 (#82326), premature compaction loops (#41984).

---

*Generated from github.com/anthropics/claude-code data as of 2026-08-11 00:00 UTC.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-11

## Today's Highlights
Two alpha CLI releases (0.148.0-alpha.6 and 0.147.0-alpha.6.6) shipped in the last 24 hours, while the issue tracker shows persistent Windows stability problems dominating community discussion. A regression in VS Code extension 26.803.41515 is blocking Remote-SSH users on Linux, and multiple reports confirm the desktop app freezes on Windows 11 despite high-end hardware.

---

## Releases
| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.148.0-alpha.6` | Alpha | Latest upstream alpha; no changelog provided in release notes |
| `rust-v0.147.0-alpha.6.6` | Alpha | Patch to the 0.147 series; likely addresses the Azure Responses empty-functions regression (#37380) and MCP OAuth issues (#37373) |

> **Note**: Both are alpha builds; production users should remain on stable 0.146.x unless testing specific fixes.

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#20214](https://github.com/openai/codex/issues/20214) | **Codex App freezes/stutters on Windows 11 Pro** | 93 comments, 81 👍 — affects Plus/Pro users on modern hardware (Ryzen 5600, 32GB RAM); renders app unusable for extended sessions | 🔥 **Highest engagement** — multiple workarounds discussed, no official fix yet |
| [#37458](https://github.com/openai/codex/issues/37458) | **VS Code extension fails to load resources (Windows)** | 32 comments — extension 26.803.41515 broken on Windows x64; blocks IDE workflow entirely | 🔴 **Critical for IDE users** |
| [#28919](https://github.com/openai/codex/issues/28919) | **Missing “Control Other Devices” tab in Windows Settings** | 28 comments, 31 👍 — remote control feature absent on Windows desktop app | 📱 **Remote workflow gap** |
| [#34700](https://github.com/openai/codex/issues/34700) | **`spawn_agent` rejects gpt-5.6-luna with multi_agent_v2** | 13 comments, 35 👍 — blocks subagent workflows on Windows app 26.715.9868.0 / CLI 0.145.0 | 🤖 **Multi-agent regression** |
| [#37380](https://github.com/openai/codex/issues/37380) | **0.147.0 regression: Azure Responses rejects empty functions namespace** | 12 comments, 27 👍 — breaks custom Azure OpenAI providers using Responses API | ☁️ **Azure/enterprise blocker** |
| [#37543](https://github.com/openai/codex/issues/37543) | **VS Code extension 26.803.41515 fails on Linux Remote-SSH** | 2 comments, 3 👍 — confirmed regression; earlier versions work | 🐧 **Remote-SSH broken** |
| [#37517](https://github.com/openai/codex/issues/37517) | **Sidebar fails with CSP font-src error on Remote-SSH** | 3 comments, 1 👍 — webview font blocked by Content Security Policy | 🔒 **CSP configuration issue** |
| [#32676](https://github.com/openai/codex/issues/32676) | **macOS Desktop crashes: CrBrowserMain EXC_BREAKPOINT in V8** | 5 comments — repeatable crash in JIT code cache path | 💥 **macOS stability** |
| [#37403](https://github.com/openai/codex/issues/37403) | **macOS: cannot resume Remote Control thread after update** | 5 comments, 4 👍 — “already has an active writer” error breaks mobile→desktop handoff | 📲 **Cross-device workflow broken** |
| [#20951](https://github.com/openai/codex/issues/20951) | **Feature: Open Codex sessions as full VS Code editor tabs** | 15 comments, 38 👍 — parity request with Claude Code UX | ✨ **Top enhancement request** |

---

## Key PR Progress (Notable Merges & Open Work)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#37908](https://github.com/openai/codex/pull/37908) | Apply refreshed cloud config bundles to later sessions | **Merged** | Fixes stale config cache: new sessions now pick up background-refreshed bundles instead of startup snapshot |
| [#37906](https://github.com/openai/codex/pull/37906) | Make gRPC code-mode notifications fire-and-forget | **Merged** | Removes client-ack wait on notifications; unblocked cell completion latency |
| [#37902](https://github.com/openai/codex/pull/37902) | Defer `view_image` processing to history insertion | **Merged** | Unified image decode/resize path; invalid images now return placeholder instead of erroring |
| [#37896](https://github.com/openai/codex/pull/37896) | Add hermetic Windows SDK & MSVC runtime repositories | **Merged** | Pinned `windows_support` repos for x64/arm64; requires explicit EULA acceptance via `--repo_env` |
| [#37895](https://github.com/openai/codex/pull/37895) | Add configurable Responses API request metadata | **Merged** | `responses_api_metadata` (≤16 entries, ASCII keys ≤64 chars) attached to every turn including subagents |
| [#37892](https://github.com/openai/codex/pull/37892) | Validate images before returning `view_image` output | **Merged** | Early decode validation + PNG re-encode for code-mode; preserves original bytes for direct calls |
| [#37891](https://github.com/openai/codex/pull/37891) | Use thread configuration for `app/read` | **Merged** | Optional `threadId` param loads thread-effective config before feature gating/policy checks |
| [#37889](https://github.com/openai/codex/pull/37889) | Ignore Unix socket proxy settings on Windows | **Merged** | Prevents misconfigured Unix socket perms from clamping Windows proxy listeners to loopback |
| [#37875](https://github.com/openai/codex/pull/37875) | Honor configured Windows sandbox level for managed networking | **Merged** | Sandbox backend now selected solely from `WindowsSandboxLevel` config (was implicitly elevated) |
| [#31901](https://github.com/openai/codex/pull/31901) | Resolve local MCP refs in Code Mode tool schemas | **Open** | Resolves `$ref` against schema root (`#/$defs/...`, `#/definitions/...`) with RFC 6901 escaping |

---

## Feature Request Trends (from Issues)

1. **VS Code tab parity** — Strong demand (#20951, 38 👍) for Codex sessions as first-class editor tabs (like Claude Code), not just sidebar panels.
2. **Remote control symmetry** — Windows missing “Control Other Devices” (#28919, 31 👍); macOS resume broken (#37403); Android pairing fails (#37897).
3. **Multi-agent / subagent stability** — `spawn_agent` model rejection (#34700), subagent status tracking (#37814), Ultra Mode issues.
4. **Rate-limit transparency** — Five-hour limit vanished from Plus (#32791), Pro weekly quota consumed by crashes (#35606), “model at capacity” spam (#37790).
5. **Custom provider persistence** — Switching OpenAI-compatible providers wipes local history (#31625).
6. **Sandbox policy granularity** — Project-scoped `approval_policy = "never"` ignored for escalation (#37914).

---

## Developer Pain Points (Recurring Frustrations)

| Area | Pattern | Representative Issues |
|------|---------|----------------------|
| **Windows Desktop Stability** | Freezes, stutters, 100% CPU/PowerShell polling, full crashes consuming quota | #20214, #36176, #35606, #30906 |
| **Extension Load Failures** | “Couldn’t load resources” on Windows, Linux Remote-SSH, older macOS — regression in 26.803.41515 | #37458, #37543, #37517, #37508 |
| **Remote/SSH Workflows** | Resource loading, CSP font blocking, font-src errors, pairing failures | #37543, #37517, #37897, #28919 |
| **Rate Limits & Quota** | Missing resets, crashes burning quota, capacity errors making Pro “unusable” | #32791, #36170, #35606, #37790 |
| **Mobile↔Desktop Handoff** | iOS can’t open running tasks (#28340), macOS resume broken (#37403), Android pairing fails (#37897) |
| **Custom Provider / Azure** | Empty functions namespace rejection (#37380), MCP issuer trailing slash stripped (#37373), history loss on provider switch (#31625) |
| **Safety False Positives** | Chinese dev prompts flagged mid-run (#28066) |

---

**Bottom line**: The 0.147/0.148 alpha cycle is shipping rapid infrastructure fixes (config refresh, gRPC perf, image validation, Windows toolchain hermeticity), but the *user-facing* surface remains rough on Windows and in Remote-SSH scenarios. Teams relying on Codex for production workflows should pin extension versions pre-26.803.41515 and monitor #20214/#37458 for fixes.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-11

## 1. Today's Highlights
The project shipped a nightly release (v0.56.0-nightly.20260811) containing a critical security fix for MCP OAuth token refresh that previously forced re-authentication on every startup. Meanwhile, the issue backlog reveals a concentrated effort on **agent reliability**—subagent turn-limit handling, browser agent stability on Wayland, shell command hangs, and auto-memory quality—alongside evaluation infrastructure hardening and SSRF mitigation in web-fetch.

## 2. Releases
**v0.56.0-nightly.20260811.geef19f25c**  
- **fix(core)**: Refresh MCP OAuth tokens with the stored client ID ([#28481](https://github.com/google-gemini/gemini-cli/pull/28481)) — resolves a regression where dynamic client registration credentials were deleted on refresh failure, forcing re-auth on every launch.  
- **New contributor**: @ParthivNaresh (first PR).

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports `GOAL` success after hitting `MAX_TURNS` | Masks real failures in `codebase_investigator`; breaks trust in agent termination reasons | 12 comments, 2 👍, P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Blocks users who rely on delegation; workaround is disabling subagents | 8 comments, 8 👍, P1 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command shows “Waiting input” after completion | Frequent UX breakage on simple commands; core reliability | 4 comments, 3 👍, P1 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Platform parity gap; Linux/Wayland users blocked | 4 comments, 1 👍, P1 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations (EPIC) | Scaling eval infra from 76 behavioral tests across 6 models; critical for release confidence | 7 comments, P1 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess AST-aware file reads/search/mapping (EPIC) | Potential token/turn reduction via precise code navigation; strategic tooling investment | 7 comments, 1 👍, P2 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Resource waste & noise in memory inbox; needs backoff/quarantine | 5 comments, P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction & reduce Auto Memory logging | Secrets may enter model context before redaction; logging exposes data | 4 comments, P2, security |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent: session takeover & lock recovery | Improves resilience for persistent browser profiles; reduces “fail-fast” friction | 4 comments, P3 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error when >128 tools available | Tool explosion breaks agent; needs smart scoping | 3 comments, P2 |

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | **fix(core): refresh MCP OAuth tokens with stored client ID** | Shipped in tonight’s nightly; fixes credential loss on refresh failure | **Closed / Released** |
| [#28764](https://github.com/google-gemini/gemini-cli/pull/28764) | **fix(vscode-ide-companion): track all `activate()` Disposables** | Prevents leaked registrations (diff accept, chat commands) in VS Code extension | Open, P2 |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | **fix(core): dynamic Cloud Workstations proxy redirect URI for OAuth** | Unblocks OAuth in Cloud Workstations VMs where browser runs locally | Open, P3 |
| [#28729](https://github.com/google-gemini/gemini-cli/pull/28729) | **fix(core): resolve swallowed directory mismatch in IDE connections** | Fixes connection failures under Cider/remote workspaces with virtual paths | Open |
| [#28730](https://github.com/google-gemini/gemini-cli/pull/28730) | **fix(core,cli): false model capacity exhaustion & quota lookup mapping** | Stops spurious “capacity exhausted” errors; preserves “Keep trying” UI | Open, P1 |
| [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) | **fix: SSRF in web-fetch via async DNS resolution** | Blocks hostnames resolving to private IPs (169.254.169.254, etc.) | Open, P1/P2, security |
| [#28734](https://github.com/google-gemini/gemini-cli/pull/28734) | **fix(core): handle `EACCES` in `resolveToRealPath`** | Prevents CLI crash on macOS Seatbelt sandbox when CWD in git repo | Open, P1 |
| [#28624](https://github.com/google-gemini/gemini-cli/pull/28624) | **fix(core): prevent boolean thought parts leaking as `[Thought: true]`** | Cleans up model output artifacts from internal thought representation | Open, P2 |
| [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) | **feat(evals): tool call formatter & failure summaries** | Adds numbered tool-call timeline with args/errors to failed eval output | Open, P3, help wanted |
| [#28344](https://github.com/google-gemini/gemini-cli/pull/28344) | **feat/eval validate: static analysis for eval sources (9 rules)** | CI-gateable `eval:validate` command; catches schema/structural issues early | Open, P3, help wanted |

## 5. Feature Request Trends
1. **Agent Observability & Control** — Subagent trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), bug-report context inclusion ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and settings.json override support for browser agent ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
2. **Evaluation Maturity** — Component-level evals ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)), static validation ([#28344](https://github.com/google-gemini/gemini-cli/pull/28344)), and failure diagnostics ([#28305](https://github.com/google-gemini/gemini-cli/pull/28305)).
3. **AST-Aware Tooling** — Precise code navigation to reduce turns/tokens ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
4. **Memory System Hardening** — Quarantine invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and retry backoff ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
5. **Platform & Sandbox Compatibility** — Wayland browser support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), macOS Seatbelt fixes ([#28734](https://github.com/google-gemini/gemini-cli/pull/28734)), Cloud Workstations OAuth ([#28688](https://github.com/google-gemini/gemini-cli/pull/28688)).

## 6. Developer Pain Points (Recurring Frustrations)
- **Agent Unreliability**: Subagents hang (#21409), misreport success (#22323), ignore permissions (#22093), and leak internal state (#28624).
- **Shell/Command Execution**: “Waiting input” ghost state after completion (#25166), interactive prompt deadlocks (#22465), and destructive git/db commands without safeguards (#22672).
- **Memory & Privacy**: Auto-memory re-processing low-signal sessions (#26522), secrets entering model context pre-redaction (#26525), and silent patch failures (#26523).
- **Tool Explosion**: 400 errors beyond ~128 tools (#24246) with no automatic scoping.
- **Terminal UX**: Resize flicker (#21924), external editor corruption (#24935), and escape-sequence bugs (#22466).
- **Configuration Gaps**: Symlinked agents not recognized (#20079), settings.json ignored by browser agent (#22267), and MCP OAuth re-auth loops (fixed in #28481).

---

*Generated from github.com/google-gemini/gemini-cli data as of 2026-08-11. All links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest – 2026-08-11

## Today's Highlights
- **v1.0.79 released** with enterprise sandbox policy improvements: the `/sandbox` dialog now shows settings.json storage location, `allow-auto-only` policy is supported so `/allow-all auto` works while full `allow-all` stays blocked, and enterprise-managed sandbox policies can enforce a proxy URL with credentials.  
- **Enterprise model access remains a top pain point**: multiple issues report Claude models (Sonnet 5, Opus 5, Haiku 4.5) disappearing from the catalogue despite being enabled in organization settings, and sporadic policy blocks preventing even `/models` listing.  
- **Windows stability regressions persist**: an infinite React/Ink render loop (fixed in v1.0.72) has returned in recent releases, and plugin updates fail with “Access denied” when VS Code holds file handles.

---

## Releases
### v1.0.79 (2026-08-10)
| Change | Impact |
|--------|--------|
| `/sandbox` configuration dialog now displays the `settings.json` path where sandbox settings are stored. | Improves discoverability for enterprise admins. |
| Enterprise `allow-auto-only` policy support: `/allow-all auto` works while full `allow-all` remains blocked. | Allows granular auto-approval without widening attack surface. |
| Enterprise-managed sandbox policy can enforce a proxy URL with credentials. | Enables centralized network egress control for sandboxed executions. |

---

## Hot Issues (10 Noteworthy)

| # | Title | Area | Why It Matters | Community Reaction |
|---|-------|------|----------------|-------------------|
| [#1595](https://github.com/github/copilot-cli/issues/1595) | Sporadic policy blocking issue retrieving models | enterprise, models | Enterprise users with valid subscriptions cannot list models (`/models` fails with “access denied by Copilot policy”) despite models being enabled. Blocks basic workflow. | 29 comments, 11 👍 – long-standing (since Feb), high engagement. |
| [#2904](https://github.com/github/copilot-cli/issues/2904) | Custom Agent YAML Frontmatter Should Support Reasoning Effort | agents, models | No per-agent `reasoningEffort` in `.agent.md` frontmatter; only global CLI flags exist. Forces one-size-fits-all reasoning. | 4 comments, 19 👍 – strong demand for granular agent control. |
| [#4095](https://github.com/github/copilot-cli/issues/4095) | Windows: plugin update fails with “Access is denied” while VS Code is running | platform-windows, plugins | VS Code’s file watchers lock `installed-plugins`, preventing `copilot plugin update`. Blocks plugin maintenance on Windows. | 1 comment, 13 👍 – high 👍 indicates widespread frustration. |
| [#4222](https://github.com/github/copilot-cli/issues/4222) | Regression: main pane freezes / output swallowed – infinite React/Ink render loop (VS Code integrated terminal, Windows) | platform-windows, terminal-rendering | UI freezes after prompt submit; “Working…” shown but no output. `/resume` dumps previous output. Regression of #2802 (fixed in v1.0.31). | 3 comments – critical regression affecting daily usability. |
| [#4325](https://github.com/github/copilot-cli/issues/4325) | Session permanently unloadable once `events.jsonl` exceeds V8 max string length | sessions | Long-lived sessions become unrecoverable; `/resume` lists session but CLI cannot load it. No recovery path. | 2 comments, 1 👍 – data-loss risk for extended sessions. |
| [#3954](https://github.com/github/copilot-cli/issues/3954) | `explore` tool hardcodes `gpt-5.4-mini`, ignoring custom/DeepSeek API config | agents, models | Custom model endpoints (e.g., DeepSeek) are bypassed; `explore` sub-agents always call hardcoded model, breaking BYOM workflows. | 2 comments, 3 👍 – undermines extensibility. |
| [#4390](https://github.com/github/copilot-cli/issues/4390) | Enabled organization models missing from catalogue (Claude Sonnet 5/Opus 5, Kimi K3) | enterprise, models | Org-enabled Anthropic & Kimi models absent from CLI catalogue; selecting them yields “disabled by your organization”. | 2 comments, 3 👍 – enterprise model rollout broken. |
| [#4422](https://github.com/github/copilot-cli/issues/4422) | All Claude models disabled under CLI model selection | enterprise, models | Personal Enterprise account loses access to all Claude models (Sonnet 5, 4.8, etc.) despite being enabled in settings. Worked yesterday. | 1 comment, 2 👍 – sudden regression, high urgency. |
| [#4416](https://github.com/github/copilot-cli/issues/4416) | Parallel explore subagent fan-out dies to per-model 429s: no backoff, no auto model switch | agents, models | Massive parallel `explore` sub-agents all hit the same lightweight model (Claude Haiku 4.5), exhausting its burst limit; no retry/backoff/model-failover. | New, 0 comments – architectural scaling bottleneck. |
| [#4421](https://github.com/github/copilot-cli/issues/4421) | MCP initialize handshake has fixed 60s budget, no retry – npx stdio servers fail ~29% of sessions | mcp | Hard-coded 60s timeout for MCP `initialize`; on timeout server is permanently marked failed for the session. No config, no retry. | New, 0 comments – reliability blocker for MCP adopters. |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **Per-agent reasoning control** – Strong demand (`#2904`, 19 👍) to declare `reasoningEffort` in `.agent.md` frontmatter instead of global flags.  
2. **Prompt caching for Claude** – `#3808` requests Anthropic prompt-caching integration to cut latency/token costs on large contexts.  
3. **Configurable HUD / session observability** – `#4418` points to community-built `copilot-hud`; users want built-in, configurable status panel (context, branch, token usage).  
4. **Floating GUI prompt composer** – `#4417` proposes an accessible, dark-themed, word-wrapped input dialog to replace terminal-only entry.  
5. **Windows path handling** – `#4426` asks `/cwd` to strip surrounding quotes from Explorer’s “Copy as path” output.  
6. **MCP resilience** – Multiple issues (`#4419`, `#4421`) seek configurable timeouts, retry/backoff, and fail-open interim policies for MCP servers.

---

## Developer Pain Points
| Area | Recurring Complaints |
|------|----------------------|
| **Enterprise policy & model access** | Models enabled in org settings disappear from CLI; sporadic “access denied” on `/models`; Claude family frequently blocked. |
| **Windows-specific breakage** | Infinite render loop regression (#4222), plugin update “Access denied” (#4095), quoted path handling (#4426). |
| **Session durability** | `events.jsonl` growth kills sessions (#4325); kickoff prompt lost on new session (#4423); `/compact` fails at 5 MB CAPI limit (#4424). |
| **Model routing & custom models** | `explore` ignores configured custom endpoints (#3954); reasoning effort unsupported for certain models (#4345); no per-model fallback on 429 (#4416). |
| **MCP reliability** | Idle connection drops (#3257), fail-closed interim policy drops user servers (#4419), 60s handshake timeout with no retry (#4421). |
| **Performance** | 100% CPU on idle/sleep (#4415); no backoff on rate limits (#4416). |

---

*Generated from github.com/github/copilot-cli data as of 2026-08-11.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-11

## 1. Today's Highlights
No new releases or pull requests in the last 24 hours. Community focus remains on **memory system improvements**—two long-standing enhancement requests (#1283, #1478) received fresh activity, and a new bug report (#2599) surfaced showing an unsettling "Autopsy" label appearing in CLI task planning output.

---

## 2. Releases
**No new releases** published in the last 24 hours.

---

## 3. Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System — Persistent context across sessions** | Requests a first-class memory layer (auto + manual) to retain project patterns, preferences, and context between runs. Critical for large-project workflows. | 31 comments, open since Feb 2026 — highest engagement of the three. |
| [#1478](https://github.com/MoonshotAI/kimi-cli/issues/1478) | **Optimize memory layer; missing docs** | User echoes #1283, notes absence of memory documentation beyond `agent.md`. Shares a proposed filesystem layout (`SOUL.md`, `USER.md`, `MEMORY.md`, daily logs). | 1 comment; reflects frustration with “painful” large-project experience. |
| [#2599](https://github.com/MoonshotAI/kimi-cli/issues/2599) | **CLI planning shows “Autopsy” in todo list** | Cosmetic but alarming bug: the planner emits a task labeled “验尸” (Autopsy). Reported on v0.34.0 / macOS Intel / kimi k3 model. | 0 comments; newly filed today — potential UX/regression issue. |

---

## 4. Key PR Progress
**No pull requests updated** in the last 24 hours.

---

## 5. Feature Request Trends
1. **Persistent, structured memory** — Both #1283 and #1478 converge on a file-based, user-controllable memory hierarchy (persona, user profile, curated long-term memory, raw daily logs).  
2. **Documentation & discoverability** — Users cannot find memory-related docs; a formal reference is requested.  
3. **Large-project ergonomics** — Current stateless behavior forces repeated re-explanation of codebase conventions.

---

## 6. Developer Pain Points
- **Context loss between sessions** forces manual re-briefing on big codebases.  
- **Undocumented memory internals** — users reverse-engineer paths like `~/.openclaw/workspace/` with no official guide.  
- **Planner output anomalies** (e.g., “Autopsy” label) erode trust in autonomous task decomposition.  
- **No official migration path** for adopting a memory system once shipped.

---

*Data source: github.com/MoonshotAI/kimi-cli — Issues & PRs updated 2026-08-10 → 2026-08-11.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-11

---

## 1. Today's Highlights

- **v1.18.16 released** with config parsing resilience (ignores unknown fields) and project registration fixes; desktop adds right-click project menu in Home.
- **Web project picker overhaul** lands across multiple PRs (#41153, #39758, #40477), fixing the "No folders found" regression that blocked first-time `opencode web` users.
- **V2 beta desktop builds** now published from the `v2` branch (#41626, #41627), signaling the next major release track is entering public beta.

---

## 2. Releases

### v1.18.16
**Core**
- Config parser now ignores unknown top-level fields instead of failing.
- Projects opened from Home are registered so they're available app-wide.

**Desktop**
- Right-click in Home now opens the project menu.
- Fallback listing restored for project discovery.

[Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.16)

---

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | **Native session goals with `/goal`** | Adds persistent, first-class goal tracking to sessions — a top-voted feature gap vs. custom slash commands. | 128 👍, 70 comments |
| [#37852](https://github.com/anomalyco/opencode/issues/37852) | **Aborted provider stream recorded as clean stop** | Silent failures mid-generation (zero tokens, `finish=unknown`) hide errors and break subagent flows. | 55 👍, 15 comments |
| [#40474](https://github.com/anomalyco/opencode/issues/40474) | **V2: agent/mode switches invisible to model** | Plan/Build switches drop `agent-switched` messages during history→context conversion; model loses mode awareness. | 1 👍, 2 comments (V2 parity gap) |
| [#39434](https://github.com/anomalyco/opencode/issues/39434) | **"Open project" dialog shows "No folders found"** | `GET /file` missing required `path` param blocks project onboarding in web UI. | 4 comments |
| [#37611](https://github.com/anomalyco/opencode/issues/37611) | **Web project picker empty until search entered** | Empty query to `/find/file` returns nothing; users must type to see folders. | 2 👍, 3 comments |
| [#37961](https://github.com/anomalyco/opencode/issues/37961) | **fff file picker refuses to index home dir** | Breaks web UI project picker when base path is `$HOME`; FFF throws "cannot run certain features". | 2 comments |
| [#26487](https://github.com/anomalyco/opencode/issues/26487) | **`chunkTimeout` broken for AWS Bedrock (EventStream)** | Timeout protection non-functional for non-SSE streaming protocols; affects reliability on Bedrock/Vertex. | 3 comments |
| [#38458](https://github.com/anomalyco/opencode/issues/38458) | **SSE stream closes mid-turn (not persistent)** | Documented persistent SSE for session monitoring fails; stream terminates unexpectedly. | 2 comments |
| [#41636](https://github.com/anomalyco/opencode/issues/41636) | **Desktop: model silent in new session for Git projects** | New sessions in Git repos produce no output in Desktop app (works in CLI); history displays correctly. | New today |
| [#41628](https://github.com/anomalyco/opencode/issues/41628) | **ACP fresh sessions ignore default agent variant** | Configured default agent variant not respected; falls back to first available model variant. | New today |

---

## 4. Key PR Progress (Top 10)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#41153](https://github.com/anomalyco/opencode/pull/41153) | **Bug fix** | Empty project search now lists base directory subfolders instead of querying `/find/file` with empty query (closes #37611). |
| [#39758](https://github.com/anomalyco/opencode/pull/39758) | **Bug fix** | Web project picker shows directories on open; fixes #39434, #37961, #37611 — enables first-time `opencode web` onboarding. |
| [#40477](https://github.com/anomalyco/opencode/pull/40477) | **Bug fix + Feature** | Fallback to directory listing in project picker; unblocks first-time users blocked since commit b9aad20 (closes #37005). |
| [#41158](https://github.com/anomalyco/opencode/pull/41158) | **Bug fix** | Preserves indexed directory results from server; falls back to home-directory listing with local fuzzy matching. |
| [#41626](https://github.com/anomalyco/opencode/pull/41626) | **Feature** | Publishes V2-based beta desktop builds: skips V1 CLI, bundles npm `next` CLI, publishes beta without V2 npm packages. |
| [#41627](https://github.com/anomalyco/opencode/pull/41627) | **Chore** | Builds beta branch from `v2` (not `dev`); includes only beta-labelled PRs targeting v2; runs V2 CLI smoke build. |
| [#41639](https://github.com/anomalyco/opencode/pull/41639) | **Feature** | Per-user workspace directories for session isolation: `DataRootConfig` service via `OPENCODE_DATA_ROOT` env (XDG default). |
| [#41629](https://github.com/anomalyco/opencode/pull/41629) | **Refactor** | Moves `AGENTS.md` filesystem acquisition to config-side plugin; `InstructionDiscovery` becomes ordered, path-keyed state store. |
| [#41634](https://github.com/anomalyco/opencode/pull/41634) | **Bug fix** | Fresh ACP sessions now respect configured default agent variant (closes #41628). |
| [#41641](https://github.com/anomalyco/opencode/pull/41641) | **Bug fix** | TUI context limit % now uses current session model (not last assistant message's model) after mid-session model switch. |

---

## 5. Feature Request Trends

1. **Session lifecycle & goals** — #27167 (`/goal` native command) leads by a wide margin; users want persistent, queryable session objectives.
2. **V2 parity & observability** — Multiple issues (#40474, #38458, #33605) highlight gaps where V2 internals (mode switches, SSE, wait endpoints) don't surface state to the model or API consumers.
3. **Web/desktop onboarding** — Cluster of project picker issues (#39434, #37611, #37961, #37005) shows first-run experience in `opencode web` is a priority.
4. **Provider reliability** — Stream handling (#37852, #26487) and model metadata accuracy (#40958) indicate growing production usage on diverse providers (Bedrock, DeepSeek, proxies).
5. **Isolation & multi-tenancy** — Per-user workspace dirs (#41639) and AGENTS.md upward discovery beyond project root (#41633) point to team/enterprise adoption patterns.

---

## 6. Developer Pain Points

| Area | Recurring Frustrations |
|------|------------------------|
| **Web UI onboarding** | "Open project" dialog broken for new users — empty picker, missing `path` param, FFF home-dir refusal; blocks evaluation. |
| **Silent provider failures** | Aborted streams logged as clean completions (`finish=unknown`, zero usage); no error surfaced, subagents return empty. |
| **V2 invisible state changes** | Agent/mode switches not communicated to model; SSE streams non-persistent; wait endpoint always unavailable. |
| **Config & timeout gaps** | `chunkTimeout` ineffective for EventStream (Bedrock/Vertex); model metadata (context window) outdated in models.dev. |
| **Desktop/CLI divergence** | Git projects stall in Desktop new sessions; Windows PATH instability for `opencode` command; ACP ignores default agent variant. |
| **I18n consistency** | Chinese locale used "令牌" (API token) for LLM "token" — reverted in #40977 → #41532; shows need for terminology governance. |

---

*Generated from GitHub data (anomalyco/opencode) as of 2026-08-11.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-11

---

## Today's Highlights

No new releases shipped in the last 24 hours, but the issue tracker shows intense activity around WSL/Copilot login reliability, Bedrock tool-call sanitization, and fullscreen TUI polish. Two high-impact bugs (#6187 WSL hang, #7782 Bedrock session corruption) have community workarounds and active fixes in review, while a cluster of PRs (#7913, #7906, #7899) are rapidly improving fullscreen keyboard handling, transcript search, and a new fixed top bar.

---

## Releases

*None in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6187](https://github.com/earendil-works/pi/issues/6187) | **Pi login hangs in WSL after browser-based GitHub Copilot device authorization** | Blocks WSL users entirely; device auth succeeds but client never detects completion. | 21 comments — highest engagement; multiple users confirming workaround (restart terminal). |
| [#7850](https://github.com/earendil-works/pi/issues/7850) | **GitHub Copilot login fails with 429 for orgs with 20+ models** | Rate-limit on model enumeration breaks login for large orgs. | 4 comments, 3 👍; reproducible with VLLM/local OpenAI-compatible APIs. |
| [#7782](https://github.com/earendil-works/pi/issues/7782) | **Invalid Bedrock tool call (`""` key) poisons session permanently** | Empty-key tool arg persists and replays, bricking the session until reset. | 4 comments; fix merged in [#7882](https://github.com/earendil-works/pi/pull/7882). |
| [#7876](https://github.com/earendil-works/pi/issues/7876) | **Alt+Enter (queue follow-up) intermittently aborts running task** | 10 ms ESC timeout splits `ESC`+`CR` in legacy keyboard mode (tmux/SSH), triggering interrupt. | 4 comments; fix in [#7899](https://github.com/earendil-works/pi/pull/7899) raises timeout to 100 ms. |
| [#7886](https://github.com/earendil-works/pi/issues/7886) | **DeepSeek `maxTokens` ignored when custom `baseUrl` uses uppercase** | Hostname case-sensitivity breaks token limiting for non-lowercase endpoints. | 4 comments; regex match needs case-insensitive flag. |
| [#7836](https://github.com/earendil-works/pi/issues/7836) | **Edit fuzzy match misses lines with whitespace-length differences** | `normalizeForFuzzyMatch` doesn’t collapse whitespace runs, causing edit rejections on semantically identical code. | 3 comments, 1 👍; affects small-model editing reliability. |
| [#7794](https://github.com/earendil-works/pi/issues/7794) | **`APPEND_SYSTEM.md` auto-discovery broken** | Two bugs: empty-array truthy check + path resolution skip auto-load from `~/.pi/agent/`. | 3 comments; straightforward fix identified. |
| [#7838](https://github.com/earendil-works/pi/issues/7838) | **Add Cloudflare Workers AI Gateway transport over AI binding** | Enables Pi apps inside Cloudflare Workers to use unified AI Gateway. | 4 comments; PR [#7901](https://github.com/earendil-works/pi/pull/7901) opened. |
| [#7846](https://github.com/earendil-works/pi/issues/7846) | **Unable to start 0.84.0/0.84.1 with Bun runtime** | `zlib.createZstdDecompress` missing in Bun’s undici; blocks Bun users. | 2 comments, 1 👍; regression in 0.84.x. |
| [#7911](https://github.com/earendil-works/pi/issues/7911) | **Delta-only `message_update` dropped `usage`; no mid-run usage on wire** | 0.84.0 fix for #7290 removed cumulative `usage` field; only `message_end` carries it now. | 1 comment; protocol regression for cost-tracking UIs. |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#7918](https://github.com/earendil-works/pi/pull/7918) | **fix(plan-mode): robust progress tracking** | CLOSED | Reads `thinking` blocks + tool results to detect `[DONE:n]` markers; steps now check off reliably. |
| [#7882](https://github.com/earendil-works/pi/pull/7882) | **fix(ai): sanitize empty Bedrock tool argument keys** | CLOSED | Strips empty keys only at replay time; preserves canonical conversation data. Fixes #7782. |
| [#7913](https://github.com/earendil-works/pi/pull/7913) | **feat(tui): fullscreen transcript search** | OPEN | `Ctrl+Shift+F` opens search over full transcript in fullscreen mode. |
| [#7906](https://github.com/earendil-works/pi/pull/7906) | **feat(coding-agent): fullscreen fixed top bar** | CLOSED | Shows cwd, git branch, context usage, auto-compaction state; preserves bottom dock. |
| [#7901](https://github.com/earendil-works/pi/pull/7901) | **feat(ai): Cloudflare AI Gateway transport over binding** | OPEN | Implements `env.AI.run` binding for Workers AI Gateway unification. Addresses #7838. |
| [#7899](https://github.com/earendil-works/pi/pull/7899) | **fix(tui): prevent split Alt+Enter from interrupting** | OPEN | Raises escape-sequence timeout to 100 ms in legacy keyboard mode. Fixes #7876. |
| [#7904](https://github.com/earendil-works/pi/pull/7904) | **fix(edit): normalize single-object edits to array** | CLOSED | Accepts `{oldText, newText}` in addition to `[{oldText, newText}]`; improves model compatibility. |
| [#7903](https://github.com/earendil-works/pi/pull/7903) | **feat(tui): unbound single-line transcript scroll actions** | OPEN | Adds `tui.altScreen.lineUp` / `lineDown` for granular scrolling; configurable via keybindings. |
| [#7905](https://github.com/earendil-works/pi/pull/7905) | **fix(config): refine pnpm detection & validate managed install** | CLOSED | Avoids false positives on `$PNPM_HOME` bins; only suggests update if truly pnpm-managed. |
| [#7879](https://github.com/earendil-works/pi/pull/7879) | **Make interactive footer responsive in narrow panes** | CLOSED | Reflows usage to second line; keeps context window visible at 40–80 columns. |

---

## Feature Request Trends

1. **Fullscreen TUI Power Features** — Search (#7913), sticky prompt header (#7802), scroll-down indicator (#7908), fixed top bar (#7906), line-scroll actions (#7903). Users want a richer, IDE-like fullscreen experience.
2. **Cloudflare Workers First-Class Support** — AI Gateway binding transport (#7838, #7901) and subagent runtime catalog (#7877) signal demand for edge/serverless deployment parity.
3. **Export/Observability Controls** — Three-state tool-output toggle (#7907), man page (#7888), mid-run usage on wire (#7911) — developers need better debugging and documentation artifacts.
4. **Plan/Task Mode Maturity** — Progress tracking hardening (#7918), step-checkoff reliability (#7919), subagent config inheritance (#7897) — planning workflows are becoming a core differentiator.
5. **Model/Provider Flexibility** — Case-insensitive baseUrl handling (#7886), cost tiers from models.dev beyond Copilot (#7912), Bedrock Mantle provider (#6216) — multi-provider parity is expanding.

---

## Developer Pain Points (Recurring Frustrations)

| Area | Symptoms | Frequency |
|------|----------|-----------|
| **WSL + Copilot Auth** | Login hangs post-browser-auth; requires terminal restart | High (21-comment issue) |
| **Keyboard Handling in tmux/SSH** | Alt+Enter splits into ESC+CR → false interrupt; 10 ms timeout too aggressive | High (multiple reports, PR fix in review) |
| **Edit Tool Fuzzy Matching** | Whitespace-length differences (tabs vs spaces, extra newlines) cause rejection | Medium (3 comments, affects small models) |
| **Terminal Viewport Stability** | Full redraw (resize, tool completion) jumps scroll position to top | Medium (reported in #7914, #7917) |
| **Streaming Protocol Gaps** | `usage` missing from `message_update` since 0.84.0; only at `message_end` | Medium (blocks real-time cost UI) |
| **Package Discovery** | `npm search` not indexing new `pi-package` keyword packages since Aug 4 | Low but visible (gallery stale) |
| **Bun Compatibility** | `zlib.createZstdDecompress` missing in Bun’s undici; blocks 0.84.x on Bun | Low (2 comments, but hard blocker) |
| **Bedrock Tool Arg Sanitization** | Empty keys persist & replay → permanent session brick | Low (fixed, but scary data-corruption class) |

---

*Data sourced from `github.com/badlogic/pi-mono` — issues/PRs updated 2026-08-10 → 2026-08-11.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-11

## 1. Today's Highlights
- **v0.21.9 released** with native Qoder plugin installation support (directories, archives, Git repos, URLs, npm) and Local Control QR-code pairing.  
- Nightly build `v0.21.9-nightly.20260811` adds a memory test for context-refresh marker carry-over.  
- Heavy PR activity around Web Shell (file uploads, workspace management, reasoning controls, session catalog) and core refactors (ACP skill management, toolchain adapters, OpenTUI renderer).

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.21.9](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.9) | Stable | • Native Qoder plugin installs from multiple sources with auto system-prompt loading ([#8661](https://github.com/QwenLM/qwen-code/pull/8661))<br>• Local Control pairing via QR code |
| [v0.21.9-nightly.20260811.8c90697ace](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.9-nightly.20260811.8c90697ace) | Nightly | • Test: context refresh marker carry-over turns ([#8809](https://github.com/QwenLM/qwen-code/pull/8809)) |

---

## 3. Hot Issues (updated last 24 h)
| Issue | Status | Why It Matters |
|-------|--------|----------------|
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) Fleet Shepherd Dashboard | Open | Automated CI/CD health dashboard; shows scan-signal age, syncs, dispatches — critical for release automation visibility. |
| [#8898](https://github.com/QwenLM/qwen-code/issues/8898) API Error: Repetitive tool calls detected | Closed | Users hit “repetitive tool call” guard; indicates prompt/loop detection logic may be too aggressive or needs clearer recovery UX. |

*Only two issues updated in the window; both reflect infra/ops and core API reliability.*

---

## 4. Key PR Progress (top 10 by relevance)
| PR | Area | Summary |
|----|------|---------|
| [#8276](https://github.com/QwenLM/qwen-code/pull/8276) | Core | Preserve prompt cache across deferred tool discovery; stabilizes tool declarations & system instruction. |
| [#8798](https://github.com/QwenLM/qwen-code/pull/8798) | Web Shell | Daemon becomes authoritative for mid-turn messages; fixes reconciliation on refresh/session switch. |
| [#8874](https://github.com/QwenLM/qwen-code/pull/8874) | Web Shell | Direct workspace file uploads (drag-drop, `@` panel), progress, cancellation, conflict renaming. |
| [#8900](https://github.com/QwenLM/qwen-code/pull/8900) | Core | Sync loaded-skill state with history eviction; adds `/unskill` user command. |
| [#8848](https://github.com/QwenLM/qwen-code/pull/8848) | Web Shell | Redesign Channel policy & workspace management (sender/group policies, allowlists, routing). |
| [#8776](https://github.com/QwenLM/qwen-code/pull/8776) | Review | Extract npm toolchain adapter for `qwen review build-test`; cleaner separation. |
| [#8844](https://github.com/QwenLM/qwen-code/pull/8844) | Web Shell | Keep workspace picker suggestions closed on blur; fixes delayed-lookup reopen bug. |
| [#8817](https://github.com/QwenLM/qwen-code/pull/8817) | Core | Support forking from any conversation message (not just latest), enabling safe branching. |
| [#8872](https://github.com/QwenLM/qwen-code/pull/8872) | Web Shell | Ctrl+O toggles thinking display; persists in localStorage; aggregates tool calls when hidden. |
| [#8677](https://github.com/QwenLM/qwen-code/pull/8677) | TUI | OpenTUI React renderer backend — flicker-free, first-class mouse support (tracking [#8662](https://github.com/QwenLM/qwen-code/issues/8662)). |

---

## 5. Feature Request Trends (from PRs & Issues)
1. **Web Shell parity with CLI** — file uploads, workspace management, session catalog, reasoning controls.  
2. **Session manipulation** — forking from arbitrary messages, session load retry, catalog scheduling.  
3. **Plugin/extension ecosystem** — Qoder plugin installs, ACP skill management refactor.  
4. **Review/evidence tooling** — TUI capture (`capture-tui`), toolchain adapters, loop detection surfacing.  
5. **Rendering quality** — OpenTUI migration, banner/flicker fixes, thinking visibility toggles.

---

## 6. Developer Pain Points
- **Repetitive tool-call detection** (#8898) — false positives block workflows; need clearer guidance or tunable thresholds.  
- **Session loading timeouts** (#8883) — watchdog leaves stale target identity; retry UX broken until fix.  
- **Workspace picker UX** (#8844) — suggestions reopen unexpectedly after blur.  
- **Banner duplication & resize flicker** (#8831) — terminal resize/wake leaves stacked banner artifacts.  
- **Cross-worktree Git mutations** (#8687) — model commands escaping session worktree; guard needed.  
- **Autofix progress visibility** (#8895) — idle watchdog couldn’t distinguish active tool work from stalls.

---

*Digest generated from GitHub data (releases, issues, PRs updated 2026-08-10 → 2026-08-11). Links point to live GitHub objects.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-11

## Today's Highlights
The project shipped **v0.9.6** — a subtractive release removing runtime guards, stabilizing the base prompt, and trimming the compaction path while preserving provider endings. A critical subagent recursion bug (#5253) was fixed: nested `max_depth` could silently widen the root session’s depth budget, now capped by the inherited ceiling. An umbrella EPIC (#5316) kicked off to decompose the TUI crate into smaller, maintainable units.

## Releases
**v0.9.6** (PR #5315) — Subtractive release: fewer runtime guards, one stable base prompt, truthful provider endings, smaller compaction path. No public issue; release state tracked in private ops ledger.

## Hot Issues
| Issue | Status | Why It Matters | Community Signal |
|-------|--------|----------------|------------------|
| **#2870** EPIC: staged command-boundary refactor for #2791 | Closed | Tracks layered refactor of command boundaries; proof PR #2851 merged. Foundation for cleaner CLI/TUI separation. | 20 comments, cross-referenced with #2791, #2851 |
| **#5253** `bug(subagents): nested max_depth can widen root session depth budget` | Closed | Security/stability: descendant subagent could bypass global `MAX_SPAWN_DEPTH_CEILING (8)` by supplying explicit `max_depth`. | 1 comment, fixed by PR #5317 same day |
| **#5316** EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella) | Open | Architectural initiative: split monolithic TUI crate into focused sub-crates. All sub-EPICs/FEATs report here; PRs logged centrally. | 0 comments (new), authored by core maintainer `aboimpinto` |

## Key PR Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| **#5317** `fix(subagents): cap nested max_depth by inherited budget` | Closed | Fixes #5253: `child_max_spawn_depth_for_spawn` now takes `inherited.min(explicit)` in explicit-`max_depth` arm, mirroring profile-hint arm. | Prevents recursion budget escalation; merged same day as issue |
| **#5300** `refactor(core): own primary request preparation` | Closed | Moves `MessageRequest` DTO family from TUI crate into `codewhale-core`; adds `prepare_primary_turn_request` constructor for provider-neutral defaults. | Decouples core from TUI; enables crate decomposition (#5316) |
| **#5315** `chore(release): ship v0.9.6` | Closed | Release prep PR; subtractive changes per highlights. | Shipped |
| **#5277** `build(deps): bump docker/login-action 4.5.2 → 4.6.0` | Open | Dependabot update; hardens login action. | Routine CI hardening |

## Feature Request Trends
1. **Modular Architecture** — Crate decomposition (EPIC-005) signals push toward smaller, independently versionable crates (core, TUI, providers, subagents).
2. **Subagent Safety** — Hardening recursion/depth budgets (#5253, #3931) shows focus on operator-controlled limits for nested agent spawns.
3. **Command-Boundary Clarity** — Ongoing refactor (#2870, #2791) to separate CLI/TUI command parsing from execution logic.
4. **Subtractive Releases** — v0.9.6 pattern: remove guards, simplify prompts, shrink compaction — favors stability over feature addition.

## Developer Pain Points
- **Recursion Budget Leaks** — Nested subagents inheriting and widening parent depth limits (#5253) — fixed but indicates fragile inheritance model.
- **Monolithic TUI Crate** — Driving EPIC-005; developers want clearer boundaries for testing, compilation speed, and contribution.
- **DTO Ownership Ambiguity** — `MessageRequest` lived in TUI but used by core; resolved by #5300 but symptomatic of crate boundary drift.
- **Release Process Opacity** — Release state tracked in private `codewhale-ops` ledger; community sees only final PR (#5315).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*