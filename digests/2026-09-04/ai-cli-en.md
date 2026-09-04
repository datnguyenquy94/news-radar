# AI CLI Tools Community Digest 2026-09-04

> Generated: 2026-09-04 04:08 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-09-04)

---

## 1. Ecosystem Overview

The AI CLI landscape is consolidating around **three architectural pillars**: multi-provider model routing, worktree-based parallel agent isolation, and plugin/extensibility systems with formal permission models. All major tools shipped or staged releases in the last 24 hours, but **Windows/WSL stability** and **token/context budget transparency** remain cross-cutting pain points. Enterprise adoption is gated on VCS integration breadth (GitLab, non-GitHub), policy knobs (model allowlists, marketplace blocking), and constrained-environment compatibility (AppLocker/WDAC, ACP/MCP protocol completeness). The ecosystem is shifting from "single-agent chat" to **"agent fleet orchestration"** with observable, configurable, and secure multi-session workflows.

---

## 2. Activity Comparison (2026-09-04)

| Tool | Hot Issues Tracked | Key PRs Updated | Release Today | Release Type | Dominant Theme |
|------|-------------------|-----------------|---------------|--------------|----------------|
| **Claude Code** | 10 | 5 | v2.1.260 | Stable | Windows Desktop bugs, `/diff` panel, Function Hooks RFC |
| **OpenAI Codex** | 10 | 10 | 0.153.1 / 0.153.2 | Patch | WSL corruption, GPT-6-Astra backport, managed worktrees |
| **Gemini CLI** | 10 | 10 | v0.60.0-nightly | Nightly | Subagent reliability, Flash model gaps, security hardening |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.83-4 / -5 | Patch | System prompt token tax, MCP/OAuth, Windows enterprise |
| **Kimi Code CLI** | 7 | 1 | — | — | ACP auth gate regression, MCP/subagent resilience |
| **OpenCode** | 10 | 10 | — | — | Plugin Manager, crate decomposition, multi-agent orchestration |
| **Pi** | 10 | 10 | — | — | Token accounting, binary handling, extension widget isolation |
| **Qwen Code** | 6 | 10 | v0.23.0 | Stable | Web-shell/daemon UX, thinking-output sanitization, CI flakiness |
| **Codewhale** | 4 | 8 | 0.9.12 RC | Release Candidate | ACP completeness, Fleet UX overhaul, crate decomposition |
| **Grok Build** | 0 | 0 | — | — | No activity |

**Velocity Leaders**: Pi (31 issues / 50 PRs updated), OpenCode, Codex, Gemini (all 10+10). **Release Cadence**: Codex, Copilot CLI, Qwen, Claude Code on weekly-or-faster patch trains.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Demanding | Specific Needs |
|-------------|----------------|----------------|
| **Multi-provider model routing** | Claude Code (#38698), OpenCode (#26925), Copilot CLI (#4703), Pi (#9096) | Per-agent/subagent provider selection; profile-based isolation; local (Ollama) + cloud hybrid |
| **Worktree / parallel session isolation** | Codex (#42652), OpenCode (#35471), Qwen Code (#10643), Claude Code (#81833) | Git worktree CLI flags; daemon-managed channels; non-git project handling; session-to-worktree mapping |
| **Plugin/extensibility system maturity** | Claude Code (#91870 Function Hooks), OpenCode (#47180 Plugin Manager), Codewhale (EPIC-005), Pi (extensions), Kimi (#1313 Hooks) | Middleware-style hooks with side-effect tracking; browsable plugin catalog; permission assertions; namespace isolation |
| **ACP/MCP protocol completeness** | Codex, Copilot CLI (#4525), Codewhale (#5863, #5864), Pi, Kimi (#2633) | `session/list`/`load`; `configOptions` exposure; provider-agnostic auth; dual-era runner compatibility |
| **Token / context budget control** | Pi (#8061, #9101), Copilot CLI (#2627), Claude Code (#91971), Qwen Code (#10992) | Accurate output reservation; system prompt overhead visibility; cache-hit diagnostics; thinking-output sanitization |
| **Windows / WSL / enterprise parity** | Claude Code (#85891, #53247), Codex (#41290, #27117), Copilot CLI (#4683), Gemini (#29184, #29116) | Always-on-top fix; orphaned Job Object recovery; ConstrainedLanguage mode support; NTFS/SFN hardening |
| **Security hardening at framework level** | Gemini CLI (6 security PRs), Pi (#9105 binary), OpenCode (#33677), Claude Code (#87079) | Git arg validation; path traversal containment; permission enforcement; glob pattern correctness |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Enterprise GitHub workflows; security pattern correctness; Desktop app parity | Enterprise dev teams, security-conscious orgs | Tight Anthropic model integration; Express-style Function Hooks RFC; Windows/macOS Desktop apps |
| **OpenAI Codex** | Remote/headless execution; WSL-native; TUI polish; GPT-6-Astra tiering | Cloud-native devs, OpenAI ecosystem users | Rust core; Noise protocol; managed worktrees; model catalog API |
| **Gemini CLI** | Security-first; model-aligned tooling (bash/POSIX); AST-aware code nav | Google Cloud devs, security-sensitive projects | Zero-dependency sandboxing; Flash model lineage; strict ACL/config ownership |
| **GitHub Copilot CLI** | GitHub Enterprise integration; system prompt economics; MCP/OAuth | GitHub Enterprise orgs, Copilot subscribers | Node/TypeScript; V8 heap constraints; CIMD for MCP; Windows ConstrainedLanguage support |
| **Kimi Code CLI** | ACP protocol compliance; provider-agnostic auth; lightweight skill mgmt | Multi-provider users, OpenRouter/BYO-model devs | ACP server architecture; dynamic completion budget; minimal runtime |
| **OpenCode** | Plugin ecosystem as platform; multi-agent orchestration; crate modularity | Power users, plugin authors, agent-fleet builders | Effect/TypeScript; recursive tool namespaces; Plugin Manager UI; OpenCode-specific headers |
| **Pi** | Provider extensibility; token accounting precision; extension architecture | Advanced users, provider integrators, TUI enthusiasts | Rust; dynamic model catalogs; widget quarantine; streaming render pipeline |
| **Qwen Code** | Web-shell/daemon architecture; VS Code companion; thinking-output middleware | Qwen model users, cloud/container hosts, multi-UI workflows | Go/TypeScript hybrid; daemon-managed channels; branch-picker UX; background agent APIs |
| **Codewhale** | ACP completeness; Fleet UX design system; crate decomposition | Editor-integration authors, TUI purists | Rust; crate-per-feature; Underwater theme system; `x-opencode-session` optimization |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / Rapid Iteration** | **Pi**, **OpenCode**, **OpenAI Codex**, **Gemini CLI** | 10+ PRs/day; nightly/weekly releases; architectural refactors in flight (crate decomposition, plugin manager, sandboxing) |
| **Enterprise-Grade / Stable Cadence** | **Claude Code**, **GitHub Copilot CLI**, **Qwen Code** | Regular stable patches; enterprise issue backlogs (VCS, policy, Windows); security-focused PRs; lower PR velocity but higher impact/merge |
| **Niche / Protocol-Focused** | **Kimi Code CLI**, **Codewhale** | ACP/MCP compliance driving roadmap; smaller but sharp issue sets; release candidates staging |
| **Dormant** | **Grok Build** | No GitHub activity in period |

**Maturity Indicators**: Claude Code and Copilot CLI show enterprise-grade issue hygiene (labeled, triaged, high 👍 counts). OpenCode and Pi demonstrate platform-level thinking (plugin manager, crate decomposition, extension APIs). Codex leads on remote/headless hardening.

---

## 6. Trend Signals (Industry Direction)

1. **Agent Fleets > Single Agents** — Worktree isolation, multi-agent orchestration, background agent APIs, and session observability appear in 6/9 tools. The unit of work is shifting to *managed agent teams*.

2. **Protocol-First Integration** — ACP/MCP completeness is now a blocker for editor/IDE adoption. Tools without `session/list`, `configOptions`, or provider-agnostic auth will lose embedding surface.

3. **Token Economics as UX** — System prompt overhead (Copilot: ~29k tokens), cache diagnostics (Claude `/cost`), output reservation bugs (Pi), and thinking-output sanitization (Qwen) show **context budget visibility** becoming a competitive differentiator.

4. **Windows Is No Longer Optional** — 3 of top 5 tools have critical Windows/WSL blockers (always-on-top, Job Objects, ConstrainedLanguage, WSL corruption). Dedicated Windows engineering is now table stakes.

5. **Security at the Framework Layer** — Path traversal (Gemini, Pi), glob correctness (Claude), permission enforcement (OpenCode), binary handling (Pi) — exploits in one tool damage trust in the category. Shared hardening patterns emerging.

6. **Plugin Managers Replacing Hook Systems** — OpenCode’s Plugin Manager UI, Claude’s Function Hooks RFC, Codewhale’s crate decomposition signal a shift from *ad-hoc hooks* to *versioned, discoverable, permissioned plugin ecosystems*.

7. **Model-Agnosticism as Default** — Multi-provider routing requests span every tool. The winning CLIs will be **model routers first, model clients second**.

8. **TUI/Desktop Parity Investment** — Every tool with a UI reports render crashes, input handling bugs, or scroll performance issues. **Terminal UX quality** is now a retention metric.

---

**Bottom Line for Decision-Makers**: The ecosystem is converging on a **common feature floor** (multi-provider, worktrees, plugins, ACP/MCP, Windows, token visibility). Differentiation will come from **execution quality** on Windows/enterprise, **plugin ecosystem vitality**, and **agent fleet observability**. Tools investing in protocol completeness and framework-level security now will capture the next wave of enterprise and platform adoption.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-09-04 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Core evaluation harness for skill descriptions; installs eval artifact as real skill, fixes Windows stream reading, trigger detection, parallel workers | Directly addresses **#556** (12 comments, 7 👍) — the evaluation loop has been optimizing against noise; 10+ independent reproductions | **OPEN** (2026-06-10) |
| 2 | **[#1099](https://github.com/anthropics/skills/pull/1099)** `skill-creator`: Windows subprocess pipe crash | Fixes `claude -p` never triggering skills on Windows (WinError 10038); root cause of 0% trigger rate | Companion to #1298; same symptom as #556 but Windows-specific | **OPEN** (2026-05-07) |
| 3 | **[#1602](https://github.com/anthropics/skills/pull/1602)** Evaluation serialization & benchmark fixes | Fixes MCP result serialization, encoding, script stability across `mcp-builder`, `skill-creator`, `web-artifacts-builder` | Addresses **#1390** (4 comments) — evaluation.py scoring 0/N against real MCP servers | **OPEN** (2026-08-17) |
| 4 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` v1.3.0 | Mechanical file verification → four-dimension reasoning audit (damage-severity priority); universal, stack-agnostic | Implements the **Reasoning Quality Gate Pipeline** proposed in **#1385** (4 comments, 1 👍) | **OPEN** (2026-06-28) |
| 5 | **[#1628](https://github.com/anthropics/skills/pull/1628)** `hivemind` | Zero-cost multi-agent orchestration: delegates mechanical work to headless `opencode` workers on free models; Claude stays planner/reviewer/merger | Novel architecture — treats expensive model context as scarce resource, not intelligence | **OPEN** (2026-08-21) |
| 6 | **[#568](https://github.com/anthropics/skills/pull/568)** `servicenow` | Broad ServiceNow platform skill: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, IntegrationHub | Enterprise demand; 5-month active discussion (updated 2026-08-12) | **OPEN** (2026-03-08) |
| 7 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Trophy model, AAA, React Testing Library, contract testing, E2E, property-based, mutation testing | Fills gap in test-generation workflow; 1-month iteration | **OPEN** (2026-03-22) |
| 8 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic QC for AI-generated docs: orphan/widow prevention, numbering alignment | Addresses universal pain point — "users rarely ask for good typography but always need it" | **OPEN** (2026-03-04) |

> **Note:** PR comment counts show as "undefined" in the export; ranking inferred from issue cross-references, discussion duration, revision count, and strategic importance.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Community Signal |
|-------|-------------------|------------------|
| **Trust & Namespace Security** | **#492** (43 comments, 2 👍) — Community skills distributed under `anthropic/` namespace enable impersonation | **Highest engagement**; fundamental platform trust issue |
| **Org-Level Skill Distribution** | **#228** (16 comments, 8 👍) — No native sharing; manual `.skill` file exchange via Slack/Teams | Strong workflow friction; 8 👍 indicates broad org adoption |
| **Evaluation Infrastructure Reliability** | **#556** (12 comments, 7 👍), **#1390** (4 comments), **#1099** (Windows), **#1050** (Windows) | Core toolchain broken; blocks skill-authoring velocity |
| **Quality Gates & Self-Correction** | **#1385** (4 comments, 1 👍) → **#1367** PR; **#83** `skill-quality-analyzer`/`skill-security-analyzer` | Emerging meta-skill layer: skills that audit skills |
| **Multi-Agent / Delegation Architectures** | **#1628** `hivemind` PR; **#16** (4 comments) "Expose Skills as MCPs" | Shift from single-agent to orchestrated worker pools |
| **Enterprise Platform Integration** | **#568** ServiceNow, **#1175** SharePoint (closed), **#486** ODT, **#514** Typography | Document-centric enterprise workflows |
| **Bedrock / Cloud Provider Support** | **#29** (4 comments) — AWS Bedrock compatibility | Cloud-agnostic deployment demand |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` evaluation fix | Blocks all skill-authoring; 10+ reproductions; maintainers tagged |
| **[#1602](https://github.com/anthropics/skills/pull/1602)** | Cross-skill evaluation fixes | Resolves #1390; touches 3 skills; platform-wide impact |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Implements approved design (#1385); universal applicability |
| **[#1607](https://github.com/anthropics/skills/pull/1607)** | `claude-api` model retirement update | Fixes #1603; simple, factual, low-risk merge |
| **[#509](https://github.com/anthropics/skills/pull/509)** | `CONTRIBUTING.md` | Closes #452 (community health gap); single highest-impact doc |
| **[#538](https://github.com/anthropics/skills/pull/538)** | `pdf` case-sensitivity fix | Trivial, breaks on case-sensitive FS; 2-month old |
| **[#1595](https://github.com/anthropics/skills/pull/1595)** | `UIZZE` partner skill | Partner onboarding; expands marketplace |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is for a trustworthy, shareable, and self-validating skill authoring pipeline — fixing the broken evaluation harness (#556, #1298), securing the namespace (#492), enabling org-wide distribution (#228), and adding meta-skills that audit other skills (#1367, #83) — so that skill creation shifts from fragile trial-and-error to a reliable, governed engineering discipline.**

---

# Claude Code Community Digest — 2026-09-04

---

## 1. Today's Highlights

**v2.1.260 shipped** with a new **fullscreen diff panel** (`/diff`) that shows uncommitted changes alongside the conversation as Claude edits, plus improved prompt-cache miss diagnostics in `/cost`. Meanwhile, Windows Desktop users continue to battle a critical **always-on-top window bug** (#85891, 167 👍) and a **launch-blocking orphaned Job Object** issue (#53247), while the community debates **Function Hooks** (#91870) as a plugin extensibility leap.

---

## 2. Releases

### v2.1.260
- **Diff panel**: New `/diff` command opens a fullscreen side panel displaying uncommitted changes in real time as Claude edits files.
- **Prompt-cache diagnostics**: `/cost` now surfaces likely causes for cache misses (tool definition changes, system prompt changes, TTL expiry).
- [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.260)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#85891](https://github.com/anthropics/claude-code/issues/85891) | **Windows 11: Desktop window stuck always-on-top** | Blocks multitasking; no setting to disable. Windows counterpart to macOS #66516. | 76 comments, **167 👍** — highest engagement in dataset |
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | **Function Hooks: deep plugin extensibility** | Proposes Express/Koa-style middleware for modifying CC behavior with side-effect tracking. | 64 comments, 35 👍 — active design discussion |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | **Windows launch fails: orphaned Silo/Job Object post-crash** | Requires logoff/reboot to recover; HRESULT 0x80070020. Blocks all Windows users after any crash. | 55 comments, 25 👍 — persistent since April |
| [#12346](https://github.com/anthropics/claude-code/issues/12346) | **GitLab integration (repos, MRs, mobile)** | Top-requested VCS integration; GitHub-only support limits enterprise adoption. | 52 comments, **131 👍** — highest 👍 count |
| [#88093](https://github.com/anthropics/claude-code/issues/88093) | **Windows always-on-top (duplicate report)** | Confirms #85891 scope; additional repro details. | 17 comments, 37 👍 |
| [#38698](https://github.com/anthropics/claude-code/issues/38698) | **Per-agent model provider routing** | Enable local Ollama for subagents + Anthropic for orchestrator in same session. | 11 comments, 43 👍 — strong interest in multi-provider workflows |
| [#91650](https://github.com/anthropics/claude-code/issues/91650) | **Bash `cd` guard false-positives on Windows Git Bash** | Read deny rules trigger prompts on absolute `cd` targets; breaks workflow in 2.1.257–2.1.259. | 9 comments, **52 👍** — high 👍/comment ratio |
| [#81833](https://github.com/anthropics/claude-code/issues/81833) | **Auto-memory inconsistent in git worktrees** | Same repo/day: some sessions get full `MEMORY.md`, others get nothing. Silent data loss. | 12 comments |
| [#78569](https://github.com/anthropics/claude-code/issues/78569) | **Auto-memory write rejected by read-before-write gate** | System instructs immediate `MEMORY.md` edit but tooling deterministically blocks it. | 6 comments |
| [#91971](https://github.com/anthropics/claude-code/issues/91971) | **Prompt cache never hits across chained `-p --resume`** | Static prefix caches; conversation turns never promoted. Undermines cost optimization. | 2 comments, filed today |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#87079](https://github.com/anthropics/claude-code/pull/87079) | `fix(security-guidance): make ** glob patterns match zero-depth paths` | Open | Fixes `**/*.ts` silently excluding top-level files in security rules — `fnmatch` treats `**` as requiring literal `/`. Critical for security pattern correctness. |
| [#89404](https://github.com/anthropics/claude-code/pull/89404) | `validate-agent.sh: don't abort at first warning` | Open | Fixes `set -euo pipefail` causing arithmetic `((warn++))` to trigger exit; also stops false-flagging valid agents. Unblocks plugin-dev validation. |
| [#66416](https://github.com/anthropics/claude-code/pull/66416) | `fix(plugin-dev): validator scripts abort on first finding` | Open | Same root cause as #89404 across three validator scripts (`validate-agent.sh`, `hook-linter.sh`, `validate-hook-schema.sh`). |
| [#79150](https://github.com/anthropics/claude-code/pull/79150) | `docs: align code-review README with current validation-based command` | Open | Removes references to deleted git-blame agent, 0-100 scoring, and non-existent config threshold. |
| [#91894](https://github.com/anthropics/claude-code/pull/91894) | `Update /frontend-design SKILL.md` | **Closed** | Skill documentation update. |

> **Note**: Only 5 PRs updated in 24h — low PR velocity relative to 50 active issues. Security glob fix (#87079) and validator robustness (#89404, #66416) are the highest-impact merges pending.

---

## 5. Feature Request Trends

1. **Multi-provider model routing** (#38698, #91770) — Run subagents on local models (Ollama) while orchestrator uses Anthropic; profile-based isolation for shared machines.
2. **GitLab / non-GitHub VCS support** (#12346) — Repository connection, MR workflow, mobile access; 131 👍 signals enterprise demand.
3. **Plugin system depth** (#91870) — Function Hooks with continuation-passing, side-effect tracking, registration-order composition — moving beyond current hook limitations.
4. **Desktop app parity (Windows ↔ macOS)** — Always-on-top (#85891, #88093), screenshot masking (#88937, #91079), launch stability (#53247).
5. **Memory/worktree reliability** (#81833, #78569) — Auto-memory loading in worktrees, read-before-write gate conflicts.

---

## 6. Developer Pain Points

| Area | Recurring Themes | Representative Issues |
|------|------------------|------------------------|
| **Windows Desktop stability** | Always-on-top window, launch failure after crash (orphaned Job Object), auto-updater blocking main thread, forced re-login wiping `~/.claude` | #85891, #53247, #88072, #91980 |
| **Prompt caching opacity** | No cache hits across `--resume` chains; `/cost` only recently added miss diagnostics | #91971, v2.1.260 release notes |
| **Permission system false positives** | `cd` guard triggers on absolute paths with Read deny rules; bypass not working | #91650, #91979 |
| **Memory/worktree inconsistency** | Auto-memory silently missing in worktree sessions; system instructions conflict with tool gates | #81833, #78569 |
| **Computer use / screenshots broken** | Fully masked (gray) on Windows; black/masked on macOS with `screenshotFiltering: mask` | #91079, #88937 |
| **Claude in Chrome fragility** | Permission prompts render invisibly → "denied by user"; 1Password credential flow fails despite healthy app | #91969, #79976, #83959 |
| **Validator tooling brittleness** | `set -e` causes arithmetic ops to abort scripts; false failures on valid agents/hooks | #89404, #66416 |

---

**Next digest**: 2026-09-05 — track v2.1.260 adoption, Windows hotfix progress, and Function Hooks RFC evolution.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-04

---

## 1. Today's Highlights

The 0.153.x patch line continues stabilizing with two releases in 24 hours: **0.153.2** corrects the GPT-6-Astra Fast tier description to “2× speed, increased usage,” and **0.153.1** backports the hidden GPT-6-Astra model catalog with API-only configuration. Meanwhile, the desktop app faces a cluster of high-impact Windows issues—WSL project corruption, orphaned conversations, and pet/overlay input failures—while quota/reset bugs persist across Pro and Plus tiers.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.153.2** | Patch | Fix: GPT-6-Astra Fast tier description updated from “1.5× speed” to “2× speed, increased usage” (display only). [PR #42632](https://github.com/openai/codex/pull/42632) |
| **rust-v0.153.1** | Patch | Feature: GPT-6-Astra model catalog added (hidden, API-configurable, not in model picker). [PR #42605](https://github.com/openai/codex/pull/42605) |
| **rust-v0.154.0-alpha.1/2/3** | Alpha | Pre-release validation builds; no user-facing changelog provided. |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#41290](https://github.com/openai/codex/issues/41290) | **Windows/WSL: project creation & removal fail after switching Agent Environment to WSL** | Blocks core workflow on Windows; 26.825.31414 regression. | 30 comments, 21 👍 — active workaround discussions. |
| [#27117](https://github.com/openai/codex/issues/27117) | **Standalone update from pwsh inherits `PSModulePath`, breaking `Get-FileHash`** | Long-standing CLI update failure on Windows; affects automated installs. | 28 comments, 20 👍 — multiple repros, no fix yet. |
| [#25779](https://github.com/openai/codex/issues/25779) | **Desktop meta-bug: unbounded session/turn state → freezes, context bloat, lost turn control** | Root cause for multiple UI/performance symptoms; architectural. | 17 comments, 8 👍 — developers tracing memory growth. |
| [#39989](https://github.com/openai/codex/issues/39989) | **Windows: deleted ChatGPT conversations persist in Recents after full restart** | Data hygiene & privacy concern; Recents UI out of sync with backend. | 16 comments, 1 👍 — consistent repro across versions. |
| [#31601](https://github.com/openai/codex/issues/31601) | **Usage limit reset failed; quota gone (Pro)** | Billing/trust issue; users lose paid capacity. | 13 comments, 5 👍 — multiple accounts affected. |
| [#39121](https://github.com/openai/codex/issues/39121) | **Windows: historical local projects disappear after update; tasks remain** | Project loss after auto-update; only new projects work. | 12 comments, 1 👍 — spans 4+ versions. |
| [#31995](https://github.com/openai/codex/issues/31995) | **Long conversations show only recent turns after update; full history local but inaccessible** | Session restoration broken; history exists in rollout files. | 7 comments, 1 👍 — UI projection bug. |
| [#41535](https://github.com/openai/codex/issues/41535) | **Windows desktop pet becomes click-through, cannot be dragged** | Overlay input handling broken; pet unusable. | 6 comments, 1 👍 — paired with #42190. |
| [#42190](https://github.com/openai/codex/issues/42190) | **Windows pet hit-testing/dragging breaks after move/resize** | Same root cause as #41535; input region detaches from visual. | 6 comments, 1 👍 — regression in overlay layer. |
| [#32597](https://github.com/openai/codex/issues/32597) | **Security validation false-positive blocks personal repo** | Overzealous cyber check halts legitimate work. | 6 comments, 3 👍 — needs allowlist/override path. |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Summary | Significance |
|---|----|---------|--------------|
| [#42652](https://github.com/openai/codex/pull/42652) | **Add managed worktrees to `codex exec`** | New `--worktree` flag creates per-session Git worktrees; isolates checkouts, enables parallel agents. | Major CLI workflow upgrade for multi-tasking. |
| [#42650](https://github.com/openai/codex/pull/42650) | **Render assistant file citations as local links** | `codex-file-citation` directives become clickable local paths (handles Unicode, Windows separators, locations). | Improves TUI/desktop traceability. |
| [#42668](https://github.com/openai/codex/pull/42668) | **Cancel remote control enrollment on stdio shutdown** | Prevents hung app-server processes when stdin closes. | Fixes resource leaks in headless/remote modes. |
| [#42641](https://github.com/openai/codex/pull/42641) | **Restore inline TUI after full-screen overlays** | Invalidates viewport on alternate-screen exit; prevents stale cells & scroll loss. | Polishing TUI stability. |
| [#42640](https://github.com/openai/codex/pull/42640) | **Harden TUI parsing of assistant markup** | Shared parser for directives (quoted/unquoted attrs, escaped quotes, malformed input). | Reduces markup-related crashes. |
| [#42634](https://github.com/openai/codex/pull/42634) | **Injectable attachment store for ThreadManager** | New `codex-attachment-store` crate with async persistence interface; inline impl preserves bytes as media-typed blobs. | Foundation for file/media handling in threads. |
| [#42631](https://github.com/openai/codex/pull/42631) | **Initialize packaged GStreamer runtime in voice host** | Adds `initializeRuntime` handshake; validates native runtime before use. | Hardens voice feature startup. |
| [#42623](https://github.com/openai/codex/pull/42623) | **Bound Noise handshakes by exec-server init timeout** | Auth handshake now shares initialization timeout with JSON-RPC `initialize`. | Prevents indefinite hangs on remote connect. |
| [#42619](https://github.com/openai/codex/pull/42619) | **Add GPT-6-Astra to Amazon Bedrock catalogs** | Includes global & US cross-region variants with Bedrock-specific caps. | Expands enterprise deployment targets. |
| [#42606](https://github.com/openai/codex/pull/42606) | **Support trusted headers for remote exec WebSockets** | `RemoteEnvironmentOptions` + `upsert_environment_with_options` for header injection & preservation across reconnects. | Enables secure embedding in hosted environments. |

---

## 5. Feature Request Trends

1. **Model & Tier Transparency** — Users want accurate, visible tier descriptions (Fast/Standard) and control over hidden models (GPT-6-Astra backport shows demand for API-only models).
2. **Worktree/Parallel Session Support** — `#42652` confirms strong interest in isolated, concurrent agent workspaces.
3. **Cross-Platform Desktop Parity** — Windows-specific bugs (WSL, pet, Recents, project loss) dominate; macOS/Linux users report fewer but distinct issues (inotify exhaustion, ghost conversations).
4. **Quota/Reset Reliability** — Multiple Pro/Plus reports of broken reset flows; demand for auditable usage accounting.
5. **TUI/Overlay Polish** — Click-through pets, overlay restoration, markup parsing, startup warning noise — all point to a push for production-grade terminal UX.
6. **Security/Allowlist Controls** — False-positive blocks (#32597) drive requests for repository/project allowlists.

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows/WSL instability** | #41290 (30c), #27117 (28c), #39989 (16c), #39121 (12c), #41535 (6c), #42190 (6c), #42061 (3c), #42501 (3c) | **Very High** — 8 distinct issues in top 30 |
| **Session/history corruption** | #25779 (17c), #39989, #39121, #31995 (7c), #41987 (4c), #42027 (4c) | **High** — affects both desktop & CLI |
| **Quota/reset accounting bugs** | #31601 (13c), #37934 (5c), #37928 (4c), #35116 (3c), #42660 (2c), #42346 (2c) | **High** — spans Pro/Plus, desktop/web/CLI |
| **Overlay/input handling (pets, click-through)** | #41535, #42190, #42061, #42666 (2c), #41374 (2c) | **Medium-High** — Windows + macOS accessibility conflicts |
| **TUI roughness** | #42641, #42640, #42609, #42667 (Daybreak eligibility notices) | **Medium** — active polish PRs indicate known gaps |
| **Remote/headless reliability** | #42668 (stdio shutdown), #42623 (Noise timeout), #42606 (trusted headers), #36268 (Android auth loop) | **Medium** — growing as remote exec matures |

---

*Generated from github.com/openai/codex data as of 2026-09-04. Links point to live issues/PRs for full context.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-04

---

## 1. Today's Highlights
The project shipped a nightly release (v0.60.0-nightly) enforcing RFC 9207 issuer identification in the MCP OAuth flow. Development focus remains on agent reliability: a high-impact bug where subagents falsely report "GOAL success" after hitting turn limits (#22323) and generalist agent hangs (#21409) are actively discussed. Security hardening continues with PRs addressing Windows sandbox git validation, NTFS short-name traversal, and checkpoint path containment.

---

## 2. Releases
**v0.60.0-nightly.20260904.g87a9c71d5**  
- **fix(core):** Enforce RFC 9207 issuer identification in MCP OAuth flow ([#29117](https://github.com/google-gemini/gemini-cli/pull/29117))  
- Routine version bump by release automation.

---

## 3. Hot Issues (Top 10 by Engagement & Impact)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reported as GOAL success | **P1 bug**: Subagents silently mask turn-limit failures as successes, breaking trust in autonomous workflows. | 13 comments, 2 👍, `status/need-retesting` |
| [#29164](https://github.com/google-gemini/gemini-cli/issues/29164) 3.6/3.7 Flash missing from model picker | **P1 usability**: Latest flash models unavailable despite release; blocks adoption of newer capabilities. | 6 comments, **12 👍** |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely | **P1 reliability**: Core agent deadlocks on simple tasks (folder creation); workaround is disabling subagents. | 8 comments, **8 👍** |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command stuck at "Waiting input" after completion | **P1 UX**: CLI shows active spinner for finished commands, confusing users and stalling automation. | 4 comments, 3 👍 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory redaction happens post-context | **P2 security**: Secrets enter model context before redaction; service logs may retain sensitive data. | 5 comments |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Leverage model's bash affinity via Zero-Dependency OS Sandboxing | **P2 architectural**: Align tooling with Gemini 3’s native POSIX-tool training; large effort, high leverage. | 9 comments, 1 👍 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess AST-aware file reads, search, mapping | **P2 exploration**: EPIC to evaluate AST tooling for precise code navigation, reducing token waste. | 7 comments, 1 👍 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini underutilizes custom skills/sub-agents | **P2 agent behavior**: Model ignores registered skills unless explicitly instructed; limits extensibility value. | 6 comments |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland | **P1 platform**: Blocks browser automation on modern Linux display servers. | 4 comments, 1 👍 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent ignores `settings.json` overrides (maxTurns) | **P2 config**: Configuration layer not respected by browser agent; undermines user control. | 3 comments |

---

## 4. Key PR Progress (Top 10 by Significance)

| PR | Status | Summary |
|----|--------|---------|
| [#29172](https://github.com/google-gemini/gemini-cli/pull/29172) | Open | **feat:** Register `gemini-3.5-flash-lite`, `3.6-flash`, `3.7-flash`, `3.8-flash`; promote `3.8-flash` to default flash model. Directly addresses #29164. |
| [#29184](https://github.com/google-gemini/gemini-cli/pull/29184) | Open | **fix(security):** Validate git args in Windows sandbox to block silent `git diff --output` writes. Prevents unauthorized file truncation. |
| [#29192](https://github.com/google-gemini/gemini-cli/pull/29192) | Closed | **fix(security):** Contain legacy raw tag path traversal (`../`) inside checkpoints directory for `/chat delete`. |
| [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) | Open | **fix(checkpoint):** Degrade non-array `history` gracefully instead of crashing `/resume`. Improves resilience. |
| [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) | Open | **fix(core):** Route `read_file` through `FileSystemService` for ACP/remote FS parity with `write_file`/`replace`. |
| [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) | Open | **fix(config):** Enforce strict ownership/ACL checks on system-wide config paths (Windows + POSIX). Supply-chain hardening. |
| [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) | Open | **fix(core):** Mitigate NTFS 8.3 short-name (SFN) path traversal in normalization & allowlist checks. |
| [#28939](https://github.com/google-gemini/gemini-cli/pull/28939) | Closed | **fix(core):** Stop persisting interrupted-response placeholder (`[The previous response was interrupted...]`) as synthetic model message. |
| [#29106](https://github.com/google-gemini/gemini-cli/pull/29106) | Open | **fix(core):** Flush final SSE event on EOF without trailing blank line; prevents loss of `finishReason`/usage metadata. |
| [#29185](https://github.com/google-gemini/gemini-cli/pull/29185) | Open | **test:** Deflake slow E2E integration tests (`run_shell_command`, `file-system-interactive`). Improves CI reliability. |

---

## 5. Feature Request Trends
1. **Agent Autonomy & Reliability** — Strong demand for subagents that self-correct, respect turn limits, and accurately report status (#22323, #21409, #21968).  
2. **Model-Aligned Tooling** — Push to expose native bash/POSIX workflows via secure sandboxing (#19873) and AST-aware code navigation (#22745, #22746).  
3. **Configuration & Extensibility** — Users expect settings (maxTurns, custom skills) to be honored consistently across agents (#22267, #21968, #20079 symlink support).  
4. **Transparency & Debuggability** — Requests for subagent trajectory sharing (#22598), bug-report context inclusion (#21763), and self-documenting CLI mechanics (#21432).  
5. **Platform Parity** — Wayland support (#21983), Windows long-path handling (#28926), NTFS quirks (#29116) remain recurring themes.

---

## 6. Developer Pain Points
- **Silent Failures**: Subagents masking errors as successes (#22323), commands appearing stuck post-execution (#25166), checkpoints crashing on corrupt data (#29195).  
- **Model Lag**: Latest Flash models (3.6/3.7) absent from picker for days (#29164, 12 👍).  
- **Security Anxiety**: Auto Memory sending secrets pre-redaction (#26525), hardcoded API keys in bundles (#29158), config path traversal (#29192).  
- **Configuration Drift**: Settings ignored by browser agent (#22267), symlinks not recognized as agents (#20079).  
- **Flaky Automation**: Integration test instability (#29185), terminal resize flicker (#21924), interactive prompts stalling Vite scaffolding (#22465).  

---

*Data sourced from `google-gemini/gemini-cli` GitHub activity (issues, PRs, releases) updated 2026-09-04.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-04

## Today's Highlights
Two patch releases shipped in the last 24 hours: **v1.0.83-5** adds Windows 11 taskbar integration with live session status cards and tightens sandbox networking on macOS/Linux (blocking localhost access), while **v1.0.83-4** introduces CIMD support for MCP OAuth, removes the interrupted-session restore prompt on startup, and improves large-session resume responsiveness. The issue tracker shows a surge of new triage items—particularly around session resume performance, extension stability on large histories, and Windows enterprise environment compatibility.

---

## Releases

### v1.0.83-5 (2026-09-04)
- **Added**: Running Copilot sessions now appear in the Windows 11 taskbar with live hover status cards.
- **Improved**: Sandboxed commands on macOS and Linux can no longer reach services on the host machine; on macOS this also blocks servers the command itself starts on `127.0.0.1`.

### v1.0.83-4 (2026-09-03)
- **Added**: Client ID Metadata Document (CIMD) support for MCP OAuth sign-in.
- **Improved**: CLI starts without the interrupted-session restore prompt by default; resuming large sessions keeps the input prompt responsive sooner.
- **Fixed**: Sandboxed file tools now read the same developer-tool configuration as unsandboxed tools.

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4525](https://github.com/github/copilot-cli/issues/4525) | MCP initialization sends legacy `initialize` after modern `server/discover`, causing `-32022` | Breaks MCP stdio servers using the Python SDK 2.0 dual-era runner; blocks agent-to-server handshake. | 6 comments, 3 👍 — active investigation |
| [#3442](https://github.com/github/copilot-cli/issues/3442) | Remote sessions not enabled for enterprise users (v1.0.51) | Enterprise adopters hit a hard block on `/remote on`; requires admin action that may not exist. | 6 comments, 10 👍 — **CLOSED** but high engagement |
| [#2627](https://github.com/github/copilot-cli/issues/2627) | Configurable system prompt to reduce ~20.5k token overhead | System prompt consumes ~10% of a 200K context window before any user content; tool definitions add another ~8.5k tokens. | 4 comments, **19 👍** — strongest community demand |
| [#4218](https://github.com/github/copilot-cli/issues/4218) | Allow configuring the model pool used by Auto mode | Auto mode selects from all plan/organization models unpredictably; users want cost/behavior control. | 1 comment, **13 👍** |
| [#2861](https://github.com/github/copilot-cli/issues/2861) | Compaction fails with empty response on Opus 4.6 (3× retry) | Manual `/compact` on short sessions repeatedly fails, blocking context management. | 5 comments, 4 👍 |
| [#4699](https://github.com/github/copilot-cli/issues/4699) | OOM crash (`JavaScript heap out of memory`) on long `--resume` sessions; crash dumps written to cwd | CLI dies at 4 GiB V8 cap after ~14 hours; diagnostic reports pollute working directory. | 1 comment, 2 👍 — stability blocker |
| [#1099](https://github.com/github/copilot-cli/issues/1099) | Critical Command Injection vulnerabilities in GitHub Actions workflows | Argus Security scan found 2 critical + 3 high-severity issues in CI/CD pipelines. | 1 comment — **SECURITY** |
| [#4683](https://github.com/github/copilot-cli/issues/4683) | Every shell command emits spurious error under PowerShell ConstrainedLanguage (AppLocker/WDAC) | Enterprise Windows environments see `$host.SetShouldExit()` errors on every agent command. | 2 comments — enterprise blocker |
| [#4655](https://github.com/github/copilot-cli/issues/4655) | Agent Plugins 1.0: custom agents under `com.github.copilot/agents` not discovered | New plugin spec components invisible to CLI; stalls ecosystem adoption. | 3 comments |
| [#4710](https://github.com/github/copilot-cli/issues/4710) | Runaway `copilot-file-search` thread consumes CPU/unbounded disk while session idle | Background indexer pins a core and writes unlimited logs to `~/.copilot/logs/` during idle. | 0 comments — new, high-severity resource leak |

---

## Key PR Progress
*No pull requests were updated in the last 24 hours.*

---

## Feature Request Trends
1. **System prompt control** — Two high-signal issues ([#232](https://github.com/github/copilot-cli/issues/232), [#2627](https://github.com/github/copilot-cli/issues/2627)) request a `--system-prompt` flag or configurable prompt to slash the fixed ~20k token tax.
2. **Auto-mode model governance** — [#4218](https://github.com/github/copilot-cli/issues/4218) (13 👍) asks for an allow-list/deny-list to constrain which models Auto may select.
3. **Session scoping & discoverability** — [#4704](https://github.com/github/copilot-cli/issues/4704) wants `/resume` and `/session` filtered by current working directory; [#4714](https://github.com/github/copilot-cli/issues/4714) demands a loading indicator during slow resumes.
4. **Enterprise/organizational policy knobs** — [#4715](https://github.com/github/copilot-cli/issues/4715) requests blocking built-in marketplaces in favor of internal ones; [#3442](https://github.com/github/copilot-cli/issues/3442) shows remote-session gating confusion.
5. **Per-agent provider isolation** — [#4703](https://github.com/github/copilot-cli/issues/4703) needs `COPILOT_PROVIDER_BASE_URL` scoped per agent, not process-wide.
6. **Accessibility/UI polish** — [#4707](https://github.com/github/copilot-cli/issues/4707) asks to disable the scrollbar that pollutes copy/paste.

---

## Developer Pain Points
- **Session lifecycle instability**: OOM on long resumes ([#4699](https://github.com/github/copilot-cli/issues/4699)), slow/no-UI resume ([#4714](https://github.com/github/copilot-cli/issues/4714)), extension bootstrap failures on large histories ([#4717](https://github.com/github/copilot-cli/issues/4717)), and stuck queued prompts ([#4705](https://github.com/github/copilot-cli/issues/4705)).
- **MCP integration fragility**: Protocol version mismatch ([#4525](https://github.com/github/copilot-cli/issues/4525)) and custom agent discovery ([#4655](https://github.com/github/copilot-cli/issues/4655)) block the nascent plugin ecosystem.
- **Windows enterprise friction**: ConstrainedLanguage mode errors ([#4683](https://github.com/github/copilot-cli/issues/4683)), path-separator dedup bugs ([#4702](https://github.com/github/copilot-cli/issues/4702)), and truncated permission-gate paths ([#4701](https://github.com/github/copilot-cli/issues/4701)).
- **Resource leaks**: Unbounded file-search indexer ([#4710](https://github.com/github/copilot-cli/issues/4710)) and crash dumps landing in cwd ([#4699](https://github.com/github/copilot-cli/issues/4699)).
- **Extension/plugin reliability**: Tool calls hang after extension `joinSession()` failure ([#4670](https://github.com/github/copilot-cli/issues/4670)); subagents can’t access main-agent skills ([#4708](https://github.com/github/copilot-cli/issues/4708)).
- **Token budget anxiety**: Fixed system prompt + tool definitions consume ~29k tokens (~15% of 200K) before user input ([#2627](https://github.com/github/copilot-cli/issues/2627)).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-04

## Today's Highlights
No new releases shipped today. The community closed six issues and one pull request, primarily addressing MCP timeout crashes, subagent cleanup on interrupt, and completion-budget clamping for Kimi providers. A newly opened issue (#2633) flags that the ACP auth gate introduced in v1.17+ blocks custom providers that don't require a Kimi account—this may affect non-Kimi integrations.

## Releases
*None in the last 24 hours.*

## Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2633](https://github.com/MoonshotAI/kimi-cli/issues/2633) | **ACP auth gate (1.17+) blocks custom providers that don't need a Kimi account** | Regression for developers using custom/OpenRouter providers without Kimi OAuth; breaks `session/new`, `session/load`, `session/resume`, `session/prompt`. | Newly opened, 0 comments — early signal, watch for maintainer response. |
| [#1316](https://github.com/MoonshotAI/kimi-cli/issues/1316) | **MCP timeout causes kimi-cli to be unavailable** | Single failing MCP connection crashes the entire CLI; forces manual process kill. High impact for multi-MCP workflows. | Closed (1 comment) — fix likely in recent build. |
| [#1315](https://github.com/MoonshotAI/kimi-cli/issues/1315) | **Subagents keep running after hitting ESC** | Interrupt handling leak; background tasks persist after user abort, wasting resources and confusing state. | Closed (0 comments). |
| [#290](https://github.com/MoonshotAI/kimi-cli/issues/290) | **Use openrouter with custom model returns 401** | Auth regression for OpenRouter custom models (e.g., `openai/gpt-5.1-codex`) on Windows. | Closed (3 comments) — workaround or provider fix applied. |
| [#1320](https://github.com/MoonshotAI/kimi-cli/issues/1320) | **Smart arrow-key navigation for multiline input** | UX gap: Up/Down always cycles history, never moves cursor inside multiline editor. | Closed (0 comments) — enhancement accepted. |
| [#1319](https://github.com/MoonshotAI/kimi-cli/issues/1319) | **Add methods for local skills operation management** | Missing CRUD for user-created skills (`skills list`, `skills rm`, version/view trigger words); storage paths inconsistent. | Closed (0 comments) — management CLI likely coming. |
| [#1313](https://github.com/MoonshotAI/kimi-cli/issues/1313) | **Add Hooks System for Notifications and Lifecycle Events** | No way to get notified when long-running agent needs attention (builds, large repo analysis). Top-voted open feature (👍 3). | Closed (0 comments) — design discussion expected. |

## Key PR Progress
| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#2332](https://github.com/MoonshotAI/kimi-cli/pull/2332) | **fix(kimi): clamp completion budget dynamically** | Closed | Removes hard-coded `max_tokens = 32000`; now computes per-request `max_completion_tokens` fitting the active context window. Improves token efficiency and avoids truncation on smaller contexts. |

## Feature Request Trends
1. **Lifecycle & Observability Hooks** — Users want structured callbacks (start/end/error, long-running notifications) to integrate with external tooling or desktop notifications.
2. **First-Class Skill Management** — CLI verbs for listing, inspecting, updating, and deleting local skills; unified storage layout.
3. **Multiline Editing UX** — Cursor-aware arrow keys, history vs. navigation mode switching.
4. **Provider-Agnostic Auth** — Decouple ACP session APIs from Kimi OAuth so custom/OpenRouter providers work without a Kimi account.
5. **Resilient MCP/Subagent Supervision** — Graceful degradation (disable failing MCP, auto-reap subagents on interrupt) instead of hard crashes.

## Developer Pain Points
- **MCP fragility**: One bad MCP endpoint brings down the entire session; no isolation or retry/backoff.
- **Interrupt leakage**: ESC/Ctrl-C doesn't reliably terminate spawned subagents or background tasks.
- **Auth rigidity**: v1.17+ ACP server assumes Kimi OAuth, breaking BYO-provider workflows.
- **Skill discoverability**: No built-in way to audit, version, or clean up locally created skills.
- **Multiline editing friction**: History navigation overrides cursor movement, forcing workarounds (paste blocks, external editors).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-04

## Today's Highlights
The OpenCode ecosystem saw significant activity around **plugin architecture improvements**, **TUI stability fixes**, and **multi-agent orchestration capabilities**. A new Plugin Manager landed in the desktop app, enabling browse/install/manage workflows from Settings. Meanwhile, critical bugs in non-git project handling, model selection persistence, and authentication flows are being actively resolved.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#266](https://github.com/anomalyco/opencode/issues/266) | **Gemini edit tool failures** — "oldString not found" errors due to whitespace mismatch | High-impact provider bug affecting a major model; 39 comments, 17 👍 | Active discussion on whitespace normalization fix |
| [#17994](https://github.com/anomalyco/opencode/issues/17994) | **Multi-agent orchestration in isolated workspaces** | Foundational feature for agent teams; closed with implementation | 24 comments, 2 👍 — strong interest in built-in orchestration |
| [#28566](https://github.com/anomalyco/opencode/issues/28566) | **OpenRouter service_tier support** for cost optimization | Direct cost savings for users routing via OpenRouter | 7 comments, 2 👍 — practical feature request |
| [#24694](https://github.com/anomalyco/opencode/issues/24694) | **Non-git projects use "/" as worktree**, breaking permissions | Security/usability bug affecting all non-git workflows | 6 comments, 3 👍 — root cause identified in `Project.fromDirectory` |
| [#35493](https://github.com/anomalyco/opencode/issues/35493) | **Renderer crash** when timeline references deleted files | Desktop app stability blocker on Windows | 3 comments — crash stack trace provided |
| [#35483](https://github.com/anomalyco/opencode/issues/35483) | **API timeout / CLI connection failure** since 0:30 UTC+2 | Service availability issue affecting all users | 3 comments — screenshot included |
| [#47209](https://github.com/anomalyco/opencode/issues/47209) | **Project skills not discovered in TUI sessions** (works in headless) | Plugin/skill system regression in primary UI | 2 comments — fresh TUI process reproduces |
| [#47184](https://github.com/anomalyco/opencode/issues/47184) | **Repetitive loops** across all models after recent updates | Major regression report; "latest updates are very bad" | 2 comments — urgent quality concern |
| [#47172](https://github.com/anomalyco/opencode/issues/47172) | **`--model` silently ignored** on TUI entry path | CLI flag validation inconsistency; wrong model used without warning | 1 comment — subtle but dangerous bug |
| [#33677](https://github.com/anomalyco/opencode/issues/33677) | **`edit` permission not enforced** for edit/write tools | Security hole in permission system; other permissions work | 3 comments, 1 👍 — isolated to `permission.edit` |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#47180](https://github.com/anomalyco/opencode/pull/47180) | **Feature** | **Plugin Manager** — Browse/install/manage plugins from desktop Settings (catalog: docs, awesome-opencode, opencode.cafe + npm metadata) |
| [#46548](https://github.com/anomalyco/opencode/pull/46548) | **Feature** | **Tool namespaces** — Recursive provider-neutral `ToolEntry` definitions with `ToolNamespace` groups; budget-aware deduplication |
| [#47187](https://github.com/anomalyco/opencode/pull/47187) | **Feature** | **Shell `run_in_background`** — First-class background execution with auto-notification; solves dev server/watch mode blocking |
| [#44838](https://github.com/anomalyco/opencode/pull/44838) | **Feature** | **Browser tabs & Chromium diagnostics** — Multi-tab control from Review pane; frame inspection, snapshots, profiling |
| [#46531](https://github.com/anomalyco/opencode/pull/46531) | **Feature** | **Public-API browser plugin** — 44 namespaced Code Mode methods (`@opencode-ai/plugin-browser/rpc`) |
| [#46530](https://github.com/anomalyco/opencode/pull/46530) | **Feature** | **Plugin permission assertions** — `ctx.permission.assert()` for Effect/Promise plugins; canonical URL checks |
| [#47204](https://github.com/anomalyco/opencode/pull/47204) | **Bug Fix** | **Exponential backoff** for event-stream reconnects (fixes #47062: Basic auth prompt re-firing every second) |
| [#46726](https://github.com/anomalyco/opencode/pull/46726) | **Bug Fix** | **TUI clean exit** when startup probes fail during server election/cold-boot (fixes #36688) |
| [#47208](https://github.com/anomalyco/opencode/pull/47208) | **Bug Fix** | **Show server-known projects** in lists (fixes #43072: local-only store missed server projects) |
| [#47203](https://github.com/anomalyco/opencode/pull/47203) | **Refactor** | **Compaction scope fix** — Removed "verified facts" from Completed section to prevent over-retention |

---

## Feature Request Trends
1. **Multi-agent orchestration** — Native support for agent teams with isolated workspaces (#17994), model-per-subagent (#26925), and task tool enhancements
2. **Plugin ecosystem maturity** — Permission assertions (#46530), browser plugin API (#46531), hook expansions (#30434, #47087), and now a **Plugin Manager UI** (#47180)
3. **Cost optimization controls** — OpenRouter service tiers (#28566), model selection per agent (#47197), and model scorecards (#35436)
4. **Observability/telemetry** — OTEL environment variable docs (#35394, #47195), GitHub Copilot request classification (#47160)
5. **Workspace isolation** — Git worktree CLI flags (#35471), non-git project handling (#24694, #47198), session-to-worktree suggestions (#47202)

---

## Developer Pain Points
| Area | Recurring Issues |
|------|------------------|
| **Provider reliability** | Gemini edit tool whitespace failures (#266), API timeouts (#35483), Copilot WebSocket transport (#35456) |
| **TUI/Desktop stability** | Renderer crashes on deleted files (#35493), unresponsive TUI (#35474), model flag ignored (#47172), repetitive loops (#47184) |
| **Permission system gaps** | `edit` permission not enforced (#33677), non-git "/" worktree breaks resolution (#24694, #47198) |
| **Session state management** | Status API race conditions (#35472), silent project loss on disk eject (#35438), skill discovery inconsistency (#47209) |
| **Authentication UX** | Basic auth prompt spam (#47062), PAT git credential format (#35430), Zen refund/compliance requests (#47205) |

---

*Generated from github.com/anomalyco/opencode activity on 2026-09-04. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-04

## 1. Today's Highlights
The Pi codebase saw a surge of **bug fixes and provider integrations** over the past 24 hours, with 31 issues and 50 PRs updated. Critical fixes landed for **context-budget overflow**, **binary file corruption**, **extension widget crashes**, and **OpenRouter session affinity**. A new **Meta/Muse provider with OAuth** is in review, while the **system prompt refactor** (#8998) continues to advance toward dynamic mid-session updates.

## 2. Releases
No new releases published in the last 24 hours.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#8061](https://github.com/earendil-works/pi/issues/8061) | **Context budget ignores maxTokens output reservation** — 1M-token Gemini request rejected at 78% input; compact-and-retry fails | Blocks long-context workflows; recovery loop broken | 6 comments, 👍 2 — active investigation |
| [#9105](https://github.com/earendil-works/pi/issues/9105) | **`processFileArguments()` corrupts binary attachments** via forced UTF-8 decode (@file mention & Read tool) | Data loss for images/PDFs; affects coding-agent core | 2 comments, just filed — high severity |
| [#9103](https://github.com/earendil-works/pi/issues/9103) | **Extension widget `render()` exceptions crash entire TUI** — no component quarantine | Single bad extension kills session; stability risk | 1 comment, pinned — architectural fix needed |
| [#8822](https://github.com/earendil-works/pi/issues/8822) | **Streaming output renders late** — every delta triggers O(n²) markdown re-render on sync path | UI falls behind LLM at ~25 chunks/s; UX regression | 2 comments — perf-critical |
| [#9097](https://github.com/earendil-works/pi/issues/9097) | **DeepSeek/OpenRouter `thinkingSignature` bloats sessions** past context limits (4.5 MB session) | Session becomes unusable; requires manual cleanup | 2 comments — affects multi-day sessions |
| [#9100](https://github.com/earendil-works/pi/issues/9100) | **OpenAI-completions replays reasoning_details** providers reject → "Corrupted thought signature" | Breaks mixed-model sessions (Gemini after OpenRouter) | 1 comment, pinned — provider interop bug |
| [#9101](https://github.com/earendil-works/pi/issues/9101) | **`clampMaxTokensToContext` fixed 4096 margin** lets large windows over-request past context | 1M-window models request 873k output on 18%-full window | 1 comment, pinned — token accounting error |
| [#8810](https://github.com/earendil-works/pi/issues/8810) | **Extension-registered providers ignored** on fresh sessions — falls back to another provider | Extensions can't reliably set defaults; silent misconfig | 3 comments — extension API gap |
| [#9099](https://github.com/earendil-works/pi/issues/9099) | **pi.dev registry serves wrong OpenRouter baseUrl** (missing `/v1`) for non-batch Anthropic models | Agents 404 with HTML page; routing broken | 1 comment — registry data bug |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | **Fullscreen mode wheel scrolling 3× slower** than regular mode | UX regression for users who need fixed input box | 2 comments — scroll perf |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#9096](https://github.com/earendil-works/pi/pull/9096) | **feat: Add Meta provider with Muse subscription OAuth** — daily token re-minting, burst streaming | Open |
| [#8998](https://github.com/earendil-works/pi/pull/8998) | **System prompt refactor** — partial updates for extensions, mid-session dynamic changes | Open (draft) |
| [#8734](https://github.com/earendil-works/pi/pull/8734) | **feat(ai): Top-level `instructions` for OpenAI Responses-compatible providers** | Open |
| [#9081](https://github.com/earendil-works/pi/pull/9081) | **fix: `registerProvider` apiKey reads plugin auth files** — function resolver for file-based keys | Closed |
| [#8994](https://github.com/earendil-works/pi/pull/8994) | **fix(agent): Map signal-killed processes to non-zero exit codes** — OOM killer no longer looks like success | Closed |
| [#9070](https://github.com/earendil-works/pi/pull/9070) | **fix: Download static musl `fd`/`ripgrep` on Linux** — fixes NixOS/Alpine tool breaks | Closed |
| [#9087](https://github.com/earendil-works/pi/pull/9087) | **fix(ai): Fail fast when dynamic model API has no implementation** — stops HTML 404 on OpenRouter Anthropic models | Closed |
| [#8801](https://github.com/earendil-works/pi/pull/8801) / [#8799](https://github.com/earendil-works/pi/pull/8799) | **TUI polish: Prettier scrollbar & "Working..." spinner** with thinking-level colors | Closed |
| [#9080](https://github.com/earendil-works/pi/pull/9080) | **feat(tui): Jump-to-latest control** — new message indicator with demo videos | Closed |
| [#9084](https://github.com/earendil-works/pi/pull/9084) | **fix: Source-checkout self-update via `git pull --rebase` + `npm ci`** | Closed |

## 5. Feature Request Trends
From the issue stream, developers are pushing for:
- **Provider extensibility**: Dynamic model catalogs (#9076, #9016), OAuth flows (#9096), and extension-registered provider reliability (#8810)
- **Session resilience**: Context-budget accuracy (#8061, #9101), thinking-signature deduplication (#9097), fork without session (#9095)
- **TUI/UX polish**: Scroll performance (#9052), jump-to-latest (#9080), widget isolation (#9103)
- **Observability**: RPC prompt disposition (#9098), exported defaults (#9090, #9091)

## 6. Developer Pain Points (Recurring Themes)
1. **Token accounting mismatches** — estimator drift (~11%), fixed margins, and ignored output reservations cause 400/404 errors on large-context models
2. **Extension fragility** — widget crashes kill sessions; provider registration race conditions; auth file keys ignored
3. **Streaming render pipeline** — synchronous O(n²) markdown re-render blocks UI at high chunk rates
4. **Provider interop** — OpenRouter session affinity, reasoning-detail replay, baseUrl registry errors break mixed-model workflows
5. **Binary handling** — forced UTF-8 decode corrupts attachments in core primitives (`@file`, Read tool)

---

*Data source: github.com/badlogic/pi-mono (issues & PRs updated 2026-09-03 → 2026-09-04)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-04

---

## 1. Today's Highlights
- **v0.23.0 released** with a new branch-picker UI that surfaces git state hints (e.g., `↓3 · origin/main` or `Up to date`) next to Update Project, Commit, and Push actions.
- **Critical output-sanitization fix** landed (PR #10992) addressing two leak shapes where internal tool-result XML blocks and system-reminder scaffolding were echoed to the user—closing issue #10797.
- **Web-shell daemon authority gap identified** (#10989): the prompt-state indicator fixed in #9487 only polls where the sidebar mounts, leaving the VS Code companion without live status.

---

## 2. Releases
### v0.23.0
- **Branch picker** now shows git state hints beside Update Project, Commit, and Push buttons (e.g., `↓3 · origin/main`, `Up to date`).
- No breaking changes reported.

---

## 3. Hot Issues (All 6 updated in last 24h)

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|---------------------|
| [#10797](https://github.com/QwenLM/qwen-code/issues/10797) | **Non-thinking scaffolding tags leaked to user output** (tool-result XML, system-reminders) | Directly impacts UX credibility; two leak shapes bypass existing sanitizers. | 3 comments, P2 priority, `welcome-pr` label — fix merged in #10992. |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | **Fleet Shepherd Dashboard** (auto-maintained bot fleet status) | Operational visibility for CI fleet; tracks scan-signal age, syncs, dispatches. | Bot-maintained; 3 comments, last tick 2026-09-04T03:52:49Z. |
| [#10872](https://github.com/QwenLM/qwen-code/issues/10872) | **Pluggable middleware for language-aware rewriting of thinking output** | Enables translation/localization of reasoning traces for CLI and `qwen serve`; extensibility hook. | 3 comments, P2, `welcome-pr` — high-value extensibility request. |
| [#10247](https://github.com/QwenLM/qwen-code/issues/10247) | **Better Agent Team — stability audit follow-ups & experience backlog** | Meta-issue aggregating multi-agent quality work; tracks scattered `welcome-pr` items. | 2 comments, roadmap/multi-agent — central coordination point. |
| [#10989](https://github.com/QwenLM/qwen-code/issues/10989) | **Web-shell daemon prompt authority only polled where sidebar mounted** | #9487 fix inert in VS Code companion; breaks loading-indicator reliability. | 2 comments, P2 — regression in companion UX. |
| [#10976](https://github.com/QwenLM/qwen-code/issues/10976) | **Main CI failed: E2E Tests on 60161cb6** (OpenTUI renderer) | Blocks main-branch merges; failed before test results reported. | Bot-filed, 1 comment — infra stability signal. |

---

## 4. Key PR Progress (Top 10 by impact)

| # | Title | Type | Status | Significance |
|---|-------|------|--------|--------------|
| [#10992](https://github.com/QwenLM/qwen-code/pull/10992) | **fix(core): catch tool-result scaffolding & system-reminder echo leaks** | Bug fix | Open | Closes #10797; sanitizes two leak shapes no prior filter covered. |
| [#10991](https://github.com/QwenLM/qwen-code/pull/10991) | **refactor(daemon): decouple extension activation refresh** | Refactor | Open | Introduces `extension_activation_explicit_refresh` capability; avoids session churn. |
| [#10627](https://github.com/QwenLM/qwen-code/pull/10627) | **feat(web-shell): restore environment panel state** | Feature | Open | Makes panel a durable context entry point; adds skeletons, empty states, subagent hierarchy. |
| [#10643](https://github.com/QwenLM/qwen-code/pull/10643) | **feat(channels): add worktree-isolated named tasks** | Feature | Open | Opt-in Git worktree isolation for daemon-managed channels (`/session new --worktree`). |
| [#10942](https://github.com/QwenLM/qwen-code/pull/10942) | **feat(cli): list managed Agent View sessions in `qwen sessions ps`** | Feature | Open | Surfaces background agent sessions alongside interactive ones with activity status. |
| [#10938](https://github.com/QwenLM/qwen-code/pull/10938) | **feat(web-shell): make Session Workflow deps navigable & quiet chrome** | Feature | Open | Plan DAG leads with step (not status); improves inspector ergonomics. |
| [#10962](https://github.com/QwenLM/qwen-code/pull/10962) | **feat(web-shell): bridge browser-granted local directory into session** | Feature | Open | Allows browser user to hand a local dir to remote daemon (cloud/container hosts). |
| [#10954](https://github.com/QwenLM/qwen-code/pull/10954) | **feat(serve): expose background agents the supervisor is running** | Feature | Open | Adds `GET /background-agents` endpoint with sessionId, name, state, current task. |
| [#10915](https://github.com/QwenLM/qwen-code/pull/10915) | **ci: give every workspace shared-pool test timeout** | CI | Open | Raises vitest ceiling for 15 workspaces; prevents silent default-timeout regressions. |
| [#10919](https://github.com/QwenLM/qwen-code/pull/10919) | **ci: close guard holes round 2 found in lint lane** | CI | Open | Fixes 9 guard holes (serializer, nested `with:`/`env:` comparison) from #10756 follow-up. |

---

## 5. Feature Request Trends
1. **Thinking/Reasoning Output Control** — Strong demand for programmable middleware (#10872) and sanitization (#10797, #10992) to shape or translate model reasoning before user display.
2. **Agent/Team Observability** — Multiple PRs (#10942, #10954, #10247) push for first-class visibility into background/managed agent sessions across CLI, daemon, and web UIs.
3. **Workspace Isolation & Portability** — Worktree-isolated channels (#10643), browser-to-daemon directory bridging (#10962), and token-plan auth docs (#10993) reflect a shift toward flexible, multi-environment workflows.
4. **Session Workflow UX** — Web-shell plan DAG navigation (#10938), environment panel persistence (#10627), and daemon prompt authority (#10989) show investment in making long-running, multi-step sessions navigable.
5. **CI/Test Reliability Hardening** — Timeout parity (#10915), lint guard holes (#10919), autofix brake/gate fixes (#10188), and EOF retry logic (#10347) indicate a maturation phase for the test infrastructure.

---

## 6. Developer Pain Points
- **Internal scaffolding leaks** — Tool-result XML blocks and system reminders reaching users despite existing sanitizers (#10797, #10992).
- **Web-shell/VS Code companion divergence** — Daemon prompt state not polled in companion, breaking loading indicators fixed elsewhere (#10989).
- **Flaky CI/E2E** — OpenTUI renderer failures blocking main (#10976); test timeouts silently regressing on new workspaces (#10915).
- **Autofix regression blind spots** — Consecutive-failure brake doesn’t charge rounds that push nothing; gate weakening ships problems (#10188).
- **Lint guard false negatives** — Nested config comparison (`with:`/`env:`) evaluated as `{}` due to `JSON.stringify` array replacer semantics (#10919).
- **Auth migration gaps** — Token Plan users missed in `qwen auth` removal notice (#10993).

--- 

*Generated from QwenLM/qwen-code GitHub activity (2026-09-04). All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-04  
*Data source: github.com/Hmbown/Codewhale (Note: repository appears to be Codewhale, not DeepSeek-TUI)*

---

## 1. Today’s Highlights
The Codewhale project is finalizing its **0.9.12 “Fleet-only UX” release** (PR #5862), a sweeping UX overhaul that introduces a unified workbar, default Underwater theme, provider/settings/logo refresh, and hover/role contracts. Concurrently, the **EPIC-005 crate decomposition** (#5316) continues with FEAT-020 plugin command shapes re-landed (#5865) and FEAT-019 memory capability merged (#5833). Two ACP protocol gaps—missing `session/list`/`load` and absent `configOptions`—were filed (#5864, #5863), signaling active editor-integration work.

---

## 2. Releases
**No new releases published in the last 24 hours.**  
The 0.9.12 release candidate is staged in PR #5862 (closed, merged to `fix/0912-ux-20260902`).

---

## 3. Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#5316** | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | Master tracking issue for breaking the monolithic TUI into composable crates; governs all downstream FEAT PRs. | 21 comments, updated 2026-09-03 — active architectural discussion. |
| **#5864** | `serve --acp` missing `session/list` & `session/load` | Blocks ACP clients (e.g., VS Code extensions) from enumerating/resuming Codewhale sessions. | New, 1 comment — editor-integration blocker. |
| **#5863** | `serve --acp` lacks session config options (modes/models/configOptions) | Prevents editors from exposing or switching working modes/models at runtime. | New, 2 comments — UX parity gap. |
| **#5866** | *Medical billing CPT/ICD-10 updates* | **Irrelevant/spam** — unrelated to Codewhale; likely mis-filed. | 1 comment — ignore. |

---

## 4. Key PR Progress
| # | PR | Status | Summary |
|---|----|--------|---------|
| **#5862** | Codewhale 0.9.12: Fleet-only UX | **Closed/Merged** | 10-slice rollup: workbar rename, Underwater default theme, provider/settings/logo/hover/role retrofits. Release gate. |
| **#5833** | feat(memory): FEAT-019 memory capability | **Closed/Merged** | Adds `CommandCapabilities::MEMORY`, typed memory adapter (search/remember/get/export/reindex/delete), `/note` command conversion. |
| **#5858** | tui: collapse `ocean_treatment` → `ThemeId::Underwater` | **Closed/Merged** | Theme simplification: single picker, read-only config migration, OceanRamp keys, abyss test. |
| **#5843** | tui: align typed config & schema | **Closed/Merged** | Config truth cleanup: custom themes carried, orphan locale keys dropped, dead-code pass (425). |
| **#5865** | refactor(tui): re-land FEAT-020 plugin command shapes | **Open** | Re-applies plugin command decomposition onto `main` after integration branch drift. |
| **#5869** | fix(shell): preserve task origin in job snapshots | **Open** | Stabilizes job-origin IDs so host can correctly attribute output across concurrent shell jobs. |
| **#5868** | feat: send `x-opencode-session` header for OpenCode Go/Zen | **Open** | Enables prompt-caching & conversation attribution for OpenCode providers. |
| **#5867** | feat(config): add `[reasoning_only]` section | **Open** | Makes reasoning-only retry count & custom prompts user-configurable (was hard-coded to 2). |

---

## 5. Feature Request Trends
1. **ACP Protocol Completeness** — Two issues (#5863, #5864) demand full session lifecycle & config exposure for editor clients.  
2. **Modular Crate Architecture** — EPIC-005 (#5316) drives decomposition into reusable, testable crates (memory, plugin commands, shell, themes).  
3. **Reasoning Model Control** — PR #5867 surfaces demand for tunable reasoning-only retries & prompts.  
4. **Provider-Specific Optimizations** — `x-opencode-session` header (#5868) shows push for vendor-specific performance hooks.  
5. **Theme/UX Consolidation** — Underwater theme default, workbar unification, hover contracts indicate a “Fleet” design system push.

---

## 6. Developer Pain Points
- **ACP Integration Gaps** — Editor authors cannot list/resume sessions or switch modes/models via ACP; forces fallback to CLI or custom IPC.  
- **Job Origin Ambiguity** — Shell job snapshots lacked stable IDs, causing output mis-attribution in multi-job sessions (#5869).  
- **Hard-Coded Reasoning Retries** — No config knob for reasoning-only re-prompts; PR #5867 addresses this.  
- **Integration Branch Drift** — FEAT-020 required re-land (#5865) after merge conflicts in `codex/v0912-integration-*` branch.  
- **Config/Schema Drift** — Orphaned locale keys and untyped custom themes required a dedicated cleanup PR (#5843).

---

*Links use the `Hmbown/Codewhale` repository as provided in the data source.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*