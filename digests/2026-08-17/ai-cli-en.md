# AI CLI Tools Community Digest 2026-08-17

> Generated: 2026-08-17 01:45 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-17)

---

## 1. Ecosystem Overview

The AI CLI tools landscape remains highly active but fragmented, with **9 of 10 tracked tools** showing meaningful development velocity. A clear bifurcation is emerging: **enterprise-grade platforms** (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI) prioritize multi-tenancy, cost governance, and IDE/desktop integration, while **developer-centric/TUI-first tools** (OpenCode, Pi, Qwen Code, CodeWhale) focus on session reliability, streaming pipeline hardening, and extensibility. **No major stable releases shipped today** — all activity is in nightly/preview channels or PR queues. Critical regressions (OpenCode ID overflow, Codex macOS CPU spike, Claude Code iPadOS crash) underscore that **stability at scale remains the primary differentiator**.

---

## 2. Activity Comparison

| Tool | Issues (Hot) | PRs Updated | Release Today | Critical Regressions |
|------|--------------|-------------|---------------|----------------------|
| **Claude Code** | 10 | 3 | ❌ | iPadOS Code tab crash (#70144), tmux TUI garbled (#74122) |
| **OpenAI Codex** | 10 | 10 | ❌ | Windows system-wide input lag (#20214, #38546), macOS `mds_stores` 700% CPU (#38929 P0) |
| **Gemini CLI** | 10 | 10 | ✅ v0.56.0-nightly | Subagent hangs/false success (#21409, #22323) |
| **GitHub Copilot CLI** | 10 | 1 (spam) | ❌ | Memory watchdog force-compacts at 23% context → OOM loops (#4506) |
| **Kimi Code CLI** | 4 | 3 | ❌ | PowerShell 7 path resolution (#2600) |
| **OpenCode** | 10 | 10 | ❌ | **48-bit ID overflow breaks ALL pre-2026-08-14 sessions** (#42955) |
| **Pi** | 10 | 10 | ❌ | pi.dev catalog global timeouts (#8198), orphaned provider processes (#8223) |
| **Qwen Code** | 10 | 17 | ✅ v0.21.11-nightly | HEIC MIME crashes Responses sessions (#9291), agent-tab render crashes (#9290) |
| **CodeWhale** | 10 | 10 | ✅ v0.9.8 (rebrand) | Flaky verifier tests (#5056), docs drift (#5447) |
| **Grok Build** | 0 | 0 | ❌ | No activity |

**Key insight**: Qwen Code leads in PR throughput (17) and ships nightlies with benchmark validation. OpenCode’s ID overflow is the most severe single regression — silent data corruption across all existing sessions.

---

## 3. Shared Feature Directions (Cross-Tool Consensus)

| Requirement | Tools Requesting | Specific Needs |
|-------------|------------------|----------------|
| **Multi-account / profile switching** | Claude Code (#18435, 730👍), OpenCode (#13626), Kimi Code | Profile isolation, credential separation, quick switching without logout |
| **Cost governance & circuit breakers** | Claude Code (#85422), OpenAI Codex (#35463), GitHub Copilot CLI (#4506) | Hard spend caps (not warnings), per-source attribution (hooks/subagents), quota visibility |
| **Session lifecycle reliability** | All 9 active tools | Resume/restore without data loss, stale ID handling, archive/un-archive, cross-device sync |
| **MCP / protocol parity** | Claude Code (#86142), OpenAI Codex, CodeWhale (#5445), Pi | Draft-07 `outputSchema`, Responses API dialect, catalog correctness |
| **TUI/terminal robustness** | Claude Code (#74122), OpenCode (#40468, #36370), Pi (#8036), CodeWhale (#5446) | tmux/focus events, large diff rendering, wide-terminal layout, crash containment |
| **Non-interactive / CI/CD ergonomics** | Gemini CLI (#28848, #28812), GitHub Copilot CLI (#4507), Qwen Code, Kimi Code | Headless auth error codes, JSON output, `--starting-prompt`, config parity |
| **Subagent observability & control** | Gemini CLI (#22323, #22267), OpenCode (#42944), Qwen Code (#9289), CodeWhale (#5458) | Termination reason fidelity, config adherence, schema simplification, task dispatch |
| **Security hardening** | Claude Code (#87079, #72156), GitHub Copilot CLI (#4490), CodeWhale (#5459) | Glob pattern correctness, feedback PII redaction, OAuth RFC compliance, honest capability reporting |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Developer/TUI-First Tools |
|-----------|---------------------------|---------------------------|
| **Primary Focus** | Multi-tenancy, IDE/desktop integration, enterprise policy, cost control | Session reliability, streaming pipeline, extensibility, keyboard-centric UX |
| **Target Users** | Teams, consultants, enterprises, IDE users | Solo devs, power users, terminal-native workflows, automation builders |
| **Technical Approach** | Managed runtimes, sandboxed execution, desktop Electron/Tauri apps, cloud sync | Local-first, self-hostable, WebSocket/stdio transports, plugin/scriptable cores |
| **Release Cadence** | Stable + nightly (Claude, Codex, Copilot, Gemini) | Nightly/rolling (OpenCode, Pi, Q

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-17 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator` eval fix | Fixes `run_eval.py` reporting 0% recall for all skill descriptions — breaks the description-optimization loop | Referenced in Issue #556 (12 comments, 7👍); 10+ independent reproductions; blocks skill quality validation | **Open** (Jun 10 – Jun 23) |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Prevents orphan words, widow paragraphs, numbering misalignment in AI-generated documents | Addresses universal pain point: "users rarely ask for good typography but always notice bad typography" | **Open** (Mar 4 – Mar 13) |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file verification → four-dimension reasoning audit (damage-severity priority); universal, stack-agnostic | Proposes pre-delivery quality gate; ties to Issue #1385 (Reasoning Quality Gate Pipeline) | **Open** (Jun 28 – Jul 2) |
| 4 | **[#568](https://github.com/anthropics/skills/pull/568)** `servicenow` | Broad ServiceNow platform assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, IntegrationHub | Long-lived PR (Mar 8 – Aug 12); enterprise demand for platform-wide coverage vs. narrow scripting | **Open** |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Full testing stack: Testing Trophy, AAA pattern, React Testing Library, contract testing, E2E, property-based | Comprehensive reference skill; fills gap in test-generation guidance | **Open** (Mar 22 – Apr 21) |
| 6 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | Create, fill, read, convert OpenDocument (.odt, .ods); parse ODT→HTML | ISO-standard format support; triggers on "ODT", "OpenDocument", "LibreOffice" mentions | **Open** (Mar 1 – Apr 14) |
| 7 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security scanning | Addresses marketplace quality control; security analyzer detects prompt injection, secret leakage | **Open** (Nov 6 – Jan 7) |
| 8 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (addresses #1417: "planning artifacts accumulate with no lifecycle") | Community-identified gap; credit to @halilxibrahim and @xg-gh-25 for framing | **Open** (Jul 25 – Jul 27) |

> **Note:** PR comment counts show as "undefined" in source data; ranking derives from issue cross-references, update frequency, and community engagement signals.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Core Ask |
|-------|-------------------|----------|
| **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍) | Community skills published under `anthropic/` namespace impersonate official skills — enable trust boundary abuse |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) | Native org-wide skill library / sharing links; eliminate manual download → Slack → Settings upload workflow |
| **Skill Creator Tooling Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍), [#1419](https://github.com/anthropics/skills/issues/1419), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) | `run_eval.py` broken on Windows (0% trigger rate); subprocess/encoding bugs; parallel worker detection failures |
| **Duplicate / Packaging Hygiene** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍) | `document-skills` and `example-skills` plugins install identical content → duplicate skills in context window |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (closed), [#1385](https://github.com/anthropics/skills/issues/1385), [#1175](https://github.com/anthropics/skills/issues/1175) | Policy enforcement, threat detection, trust scoring, audit trails for multi-agent systems |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments), [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) | `claude-api` skill injects ~156k tokens; need `compact-memory` (symbolic notation) for long-running agents |
| **MCP / Bedrock Integration** | [#16](https://github.com/anthropics/skills/issues/16), [#29](https://github.com/anthropics/skills/issues/29) | Expose skills as MCP endpoints; enable AWS Bedrock compatibility |
| **Document Fidelity** | [#12](https://github.com/anthropics/skills/issues/12) (4 comments, 1👍), [#541](https://github.com/anthropics/skills/pull/541) | Whitespace reformatting corrupts DOCX/OOXML; tracked-change `w:id` collisions with bookmarks |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval infrastructure fix | Blocks all skill quality validation; 10+ reproductions; referenced in multiple issues |
| **[#538](https://github.com/anthropics/skills/pull/538)** | `pdf` case-sensitivity fix | 8 concrete file-reference mismatches; breaks on case-sensitive FS; trivial fix |
| **[#541](https://github.com/anthropics/skills/pull/541)** | `docx` tracked-change collision fix | Root cause identified (shared `w:id` space); prevents document corruption |
| **[#539](https://github.com/anthropics/skills/pull/539)** | `skill-creator` YAML validation | Pre-parse check for unquoted `description` with `:` — prevents silent truncation |
| **[#1099](https://github.com/anthropics/skills/pull/1099)** / **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows `skill-creator` compat | Two 1-line fixes (`claude.cmd`, encoding); unblocks Windows contributors |
| **[#1538](https://github.com/anthropics/skills/pull/1538)** | Spec compliance for `template/` + one other | Fails `skills-ref validate`; reference implementation must conform |
| **[#509](https://github.com/anthropics/skills/pull/509)** | `CONTRIBUTING.md` | Closes #452; single biggest lift for community health score (25% → ?) |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Directly addresses community-identified lifecycle gap (#1417); recent, focused scope |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is for trustworthy, production-ready skill infrastructure: fixing the broken evaluation pipeline that validates skill quality, securing the namespace against impersonation, and enabling organizational sharing — so that skill *authors* can reliably build, and skill *users* can confidently adopt.**

---

# Claude Code Community Digest — 2026-08-17

## Today's Highlights
No new releases shipped in the last 24 hours. Community focus remains on **multi-account support** (730 👍, 167 comments) and a **critical iPadOS regression** crashing the Code tab. Three security/usability PRs landed: glob pattern fixes for security rules, YAML frontmatter repairs for agents, and a new Conda packaging workflow.

---

## Releases
*No releases published in the last 24h.*

---

## Hot Issues

| Issue | Type | Why It Matters | Community Signal |
|-------|------|----------------|------------------|
| [#18435](https://github.com/anthropics/claude-code/issues/18435) | Enhancement (auth, IDE) | **Top community ask**: manage multiple Claude accounts in Desktop with easy profile switching. Impacts teams sharing machines and consultants juggling client orgs. | 730 👍 · 167 comments |
| [#70144](https://github.com/anthropics/claude-code/issues/70144) | Bug (iOS, regression) | iPadOS v1.260618.0 crashes on opening any session in Code tab — main-thread SwiftUI stack overflow. Blocks mobile workflows entirely. | 22 👍 · 28 comments |
| [#86142](https://github.com/anthropics/claude-code/issues/86142) | Bug (MCP, desktop) | MCP servers declaring `draft-07 outputSchema` rejected client-side with "unsupported dialect" before dispatch. Breaks newest MCP spec compliance. | 5 👍 · 11 comments *(Closed)* |
| [#74122](https://github.com/anthropics/claude-code/issues/74122) | Bug (TUI, tmux, regression) | Since v2.1.200, TUI renders garbled inside tmux — only repaints on forced redraw (pane switch/resize). Clean regression from v2.1.199. | 2 👍 · 8 comments |
| [#72156](https://github.com/anthropics/claude-code/issues/72156) | Enhancement (security) | `/feedback` submissions lack PII/secret redaction/audit. Risk of leaking credentials, API keys, or customer data in feedback payloads. | 2 👍 · 9 comments |
| [#77212](https://github.com/anthropics/claude-code/issues/77212) | Bug (hooks, permissions) | `PreToolUse` hook returning `permissionDecision: "ask"` is **silently auto-approved** under `bypassPermissions` mode — `deny` works correctly. Security bypass. | 6 comments |
| [#85422](https://github.com/anthropics/claude-code/issues/85422) | Enhancement (cost) | **Token-burn circuit breaker**: runtime-enforced spend caps with per-source attribution (hooks, plugins, subagents). Current warnings don’t stop runaway consumption. | 6 comments |
| [#71803](https://github.com/anthropics/claude-code/issues/71803) | Enhancement (core) | Agent-invokable `/compact`: let the agent trigger compaction itself. Critical for long-running autonomous workflows that hit context limits. | 3 👍 · 6 comments |
| [#76870](https://github.com/anthropics/claude-code/issues/76870) | Bug (LSP) | LSP tool returns silently incomplete results: cold-index race (first query before index ready) + stale file state. Affects code navigation reliability. | 6 comments *(Reproduced)* |
| [#72126](https://github.com/anthropics/claude-code/issues/72126) | Enhancement (desktop) | Manual sidebar group reordering in Desktop app. Groups currently sorted by metadata only — no drag-to-reorder. High UX friction for multi-project users. | 19 👍 · 3 comments |

---

## Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#87079](https://github.com/anthropics/claude-code/pull/87079) | Open | **Security fix**: `**` glob patterns now match zero-depth paths in `security-patterns.json`. Previously `**/*.ts` required a literal `/`, silently excluding top-level files — violating documented behavior. |
| [#87077](https://github.com/anthropics/claude-code/pull/87077) | Open | **Agent YAML frontmatter repair**: All agent definitions had invalid unquoted scalars containing dialogue lines (`Daisy: "..."`), causing empty frontmatter on load. Now properly quoted. |
| [#87125](https://github.com/anthropics/claude-code/pull/87125) | Open | **Packaging**: Adds `python-package-conda.yml` workflow for Conda distribution. Expands install options beyond pip/Homebrew. |

---

## Feature Request Trends
1. **Multi-tenancy & account management** — #18435 dominates; users need profile switching, not just project switching.
2. **Cost governance** — Circuit breakers (#85422), per-source attribution, and hard limits (not warnings) are repeatedly requested.
3. **Session lifecycle control** — Agent-invoked compaction (#71803), configurable auto-compact thresholds (#72062), session title i18n (#72004), search/rename/delete (#72185).
4. **MCP protocol parity** — Draft-07 support (#86142), outputSchema handling, and bidirectional Dispatch integration (#85467).
5. **Terminal/TUI robustness** — tmux focus events (#72067), garbled rendering (#74122), focus-out re-render side effects.
6. **Security hardening** — Feedback sanitization (#72156), glob pattern correctness (#87079), hook permission semantics (#77212).

---

## Developer Pain Points
- **No multi-account workflow**: Consultants and agencies cannot switch identities without logging out/in or using separate browser profiles.
- **Mobile instability**: iPadOS Code tab crash (#70144) makes tablet development unusable on latest version.
- **TUI/tmux friction**: Garbled output (#74122) and forced focus-events-off notice (#72067) degrade terminal-centric workflows.
- **Plugin system fragility**: `--scope project` overwrites instead of merges (#75392); glob patterns in permissions don’t match root files (#72138, #87079).
- **LSP unreliability**: Cold-index races and stale state return incomplete symbols silently (#76870) — no error, just missing results.
- **Cost surprise**: No runtime enforcement; Max plan users report accelerated limit consumption (#71810) with no visibility tooling.
- **Session UX gaps**: No recent-folder cleanup (#72181), no sidebar reorder (#72126), `claude resume` vs `--resume` footgun (#72118).

---

*Data sourced from `anthropics/claude-code` GitHub activity (issues/PRs updated 2026-08-17).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-17

## 1. Today's Highlights
Windows stability dominates community attention: two high-engagement issues (#20214, #38546) report system-wide input lag and app freezes on Windows 11, while a new P0 macOS issue (#38929) describes the desktop app spiking `mds_stores` to 250–700% CPU on launch. On the CLI/TUI front, the team merged a batch of quality-of-life improvements including compact command rendering, Vim-style history editing, working-directory commands (`/cd`), and hardened sandbox isolation for external editor buffers.

## 2. Releases
No new releases published in the last 24 hours.

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#20214](https://github.com/openai/codex/issues/20214) | **Codex App frequently freezes/stutters on Windows 11 Pro** | Long-standing (since Apr) regression affecting Plus/Pro users on capable hardware; 106 comments, 85 👍 | 🔥 **Top engagement** — users report workarounds (disabling hardware acceleration, downgrading) but no fix |
| [#38546](https://github.com/openai/codex/issues/38546) | **[Windows] ChatGPT/Codex desktop app causes system-wide mouse stutter without elevation** | Fresh report (Aug 14) with clear repro: non-elevated app steals input focus; 31 comments, 13 👍 | High urgency — affects all Windows users; elevation workaround breaks sandbox |
| [#25319](https://github.com/openai/codex/issues/25319) | **Scope Codex VS Code chats to current workspace/project** | Top enhancement request (62 👍); users lose context when switching repos in multi-root workspaces | 29 comments — strong demand for per-workspace chat isolation |
| [#20864](https://github.com/openai/codex/issues/20864) | **Desktop App laggy: scans all `~/.codex/sessions` instead of using index** | Performance regression on macOS/Win; app-server reads entire session history on startup | 21 comments, 6 👍 — architectural fix needed in session loading |
| [#28855](https://github.com/openai/codex/issues/28855) | **Windows Codex Desktop causes intermittent system input lag** | Separate from #38546: occurs despite clean logs/plugins disabled; 20 comments, 20 👍 | Suggests deeper Electron/Windows integration issue |
| [#34306](https://github.com/openai/codex/issues/34306) | **Safety check blocks cybersecurity requests (CLI)** | Legitimate security research flagged; affects `gpt-5.6-sol-xhigh` on Linux | 15 comments, 9 👍 — false-positive rate concerns for pro users |
| [#35463](https://github.com/openai/codex/issues/35463) | **Subagents drain full week quota overnight — usage counting broken** | Billing-critical: Pro 20x users hit weekly limit in hours via subagents | 11 comments — potential meter leak in agent orchestration |
| [#28248](https://github.com/openai/codex/issues/28248) | **Windows sandbox fails reads with "apply deny-read ACLs" after power outage** | Data-loss adjacent: sandbox ACLs corrupted on unclean shutdown; requires manual reset | 11 comments, 6 👍 — resilience gap in Windows sandbox |
| [#38917](https://github.com/openai/codex/issues/38917) | **Documented 1M context window unavailable in Codex CLI/Desktop** | Docs claim 1M tokens for GPT-5.6-sol but CLI/Desktop enforce lower limits | New (Aug 17) — API vs. product parity gap |
| [#38929](https://github.com/openai/codex/issues/38929) | **[P0][macOS] Launching app spikes mds_stores to 250–700% CPU; host unusable** | Launch-time Spotlight indexing storm freezes entire Mac; force-quit required | New (Aug 17), P0 severity — macOS launch regression |

## 4. Key PR Progress

| # | PR | Type | Summary |
|---|----|------|---------|
| [#38921](https://github.com/openai/codex/pull/38921) | **Feature** | Compact successful command runs in TUI into `Ran N commands` groups (flushes on interaction/failure/32-completion threshold) |
| [#38918](https://github.com/openai/codex/pull/38918) | **Feature** | `codex doctor` now probes configured inference endpoint with route-aware HTTP client; classifies TLS/proxy/DNS/timeout failures |
| [#38916](https://github.com/openai/codex/pull/38916) | **Fix** | Honor legacy `:project_roots` permission entries (pre-rename to `:workspace_roots`) to avoid silently dropping filesystem restrictions |
| [#38907](https://github.com/openai/codex/pull/38907) | **Feature** | Vim `history-up` in normal mode restores latest queued follow-up for editing; removes from queue on submit |
| [#38894](https://github.com/openai/codex/pull/38894) | **Feature** | Add `/cd [path]` to TUI: change idle local session working directory, reloads project config/instructions |
| [#38830](https://github.com/openai/codex/pull/38830) | **Security** | Isolate external editor buffers from sandbox-writable paths (create under protected `editor/` subdir) |
| [#38827](https://github.com/openai/codex/pull/38827) | **Feature** | `codex doctor` detects endpoint protection products (macOS/Windows) and advises exclusion paths |
| [#38899](https://github.com/openai/codex/pull/38899) | **Refactor** | Move `RequirementsExecPolicy` to `codex-execpolicy` crate; preserve config API via re-export |
| [#38893](https://github.com/openai/codex/pull/38893) | **Fix** | Restore `updated_at_ms` and `recency_at_ms` maxima independently during state init (fixes cross-thread timestamp corruption) |
| [#38840](https://github.com/openai/codex/pull/38840) | **Feature** | Remote handshake sends `x-codex-host-device-kind: mac_mini` when hardware profile matches; cached detection |

## 5. Feature Request Trends
1. **Workspace-aware context** — #25319 (62 👍) and #32519 request per-workspace chat scoping and ChatGPT↔Codex context handoff.
2. **Model/reasoning hotkeys** — #26819 asks for keyboard shortcuts to switch reasoning effort/model without UI navigation.
3. **TUI power-user ergonomics** — Undo/redo in composer (#2379, 32 👍), Vim history editing (#38907), `/cd` command (#38894).
4. **Remote/SSH parity** — #34652 (approval buttons broken in Remote SSH), #38927 (chat loss with dual SSH+Remote).
5. **Session/history management** — Pagination migration bugs (#38928), session indexing (#20864), workspace-scoped history.

## 6. Developer Pain Points
- **Windows desktop stability** — System-wide input lag (#20214, #38546, #28855), sandbox ACL corruption (#28248), MSIX update loops (#38843), approval UI broken in Remote SSH (#34652).
- **macOS resource storms** — Launch-time `mds_stores` CPU spike (#38929), session scanning lag (#20864).
- **Quota/accounting opacity** — Subagent quota drain (#35463), weekly limit not consuming credits (#18018), 1M context window missing (#38917).
- **Safety false positives** — Legitimate cybersecurity work blocked (#34306, #34367) with no override path.
- **Migration friction** — History migration leaving chats invisible (#38928), legacy permission fields silently ignored (#38916).

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-17

## 1. Today's Highlights
- **Nightly v0.56.0** shipped with a critical TypeScript composite flag fix (PR #28813) unblocking root-level builds.  
- **Security & reliability** dominated PR activity: non-interactive auth failure handling (#28848), 73 dependency updates, and multiple SSR Agent fixes for subagent termination fidelity (#28815) and TUI hang timeouts (#28812).  
- **Community pain points** center on subagent reliability (hanging, false success reporting, permission bypass) and Auto Memory quality — both marked P1/P2 with active maintainer triage.

---

## 2. Releases
| Version | Key Changes |
|---------|-------------|
| **v0.56.0-nightly.20260817.g9a15c45fb** | • **SSR Agent Fix #21911**: Added `composite: true` to `packages/cli/tsconfig.json` enabling root workspace type-checks (PR [#28813](https://github.com/google-gemini/gemini-cli/pull/28813)). |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS hit** — masks true interruption | P1, 12 comments, 2 👍; blocks trust in subagent completion signals | Active retesting; PR [#28815](https://github.com/google-gemini/gemini-cli/pull/28815) preserves original termination reason |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** on simple ops (folder creation) | P1, 8 comments, 8 👍; core usability blocker | Workaround: disable subagents; root cause under investigation |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations epic** (76 behavioral evals across 6 models) | P1, 7 comments; foundational for regression prevention | Tracking eval infrastructure maturity |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file read/search/mapping** for precision & token efficiency | P2, 7 comments, 1 👍; strategic tooling investment | Linked to #22746 (tooling prototypes: tilth/glyph) |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck at “Waiting input” after command completes** | P1, 4 comments, 3 👍; breaks non-interactive workflows | Medium effort; needs reproduction |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | P2, 5 comments; wastes cycles & pollutes memory | Extraction logic gap |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | P1, 4 comments, 1 👍; platform parity gap | Needs Wayland-specific debugging |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory redaction happens post-model-context** — secret leak risk | P2, 4 comments; security hardening | Requires deterministic pre-flight redaction |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` overrides (maxTurns, etc.)** | P2, 3 comments; config authority broken | Registry merge logic defect |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | **get-shit-done output hook crashes CLI near completion** | P1, 3 comments; stability regression | Crash logs needed; medium effort |

---

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#28848](https://github.com/google-gemini/gemini-cli/pull/28848) | Open | Security / Core | **Handle `refreshAuth` failures gracefully in non-interactive mode** — returns clean auth error code instead of raw stack trace (P2). |
| [#28815](https://github.com/google-gemini/gemini-cli/pull/28815) | Open | Agent / P1 | **Preserve original termination reason during subagent recovery** — fixes false GOAL success on MAX_TURNS/timeout (closes #22323). |
| [#28812](https://github.com/google-gemini/gemini-cli/pull/28812) | Open | Core / P1 | **Add execution timeouts to prevent indefinite TUI hang** on bare Linux terminals (fixes #21477). |
| [#28843](https://github.com/google-gemini/gemini-cli/pull/28843) | **Closed** | CLI / Feat | **Add `--list-models` flag** — prints available models as JSON for programmatic discovery (early-exit pattern). |
| [#28844](https://github.com/google-gemini/gemini-cli/pull/28844) | **Closed** | Docs / Install | **Homebrew deprecation notice** — redirects users to npm; updates update-available message. |
| [#28820](https://github.com/google-gemini/gemini-cli/pull/28820) | Open | Extensions / P2 | **Clarify privacy notice wording & selection options** — fixes misleading opt-out language (fixes #26120). |
| [#28814](https://github.com/google-gemini/gemini-cli/pull/28814) | Open | Platform / P2 | **Fix TS strict-null errors in integration tests** — unblocks CI type-checks (fixes #21919). |
| [#28847](https://github.com/google-gemini/gemini-cli/pull/28847) | Open | Agent / P3 | **Update `/clear` command docs** — now notes context reset, not just screen clear (fixes #19239). |
| [#28813](https://github.com/google-gemini/gemini-cli/pull/28813) | **Closed** | Platform / P1 | **Add composite flag to CLI tsconfig** — enables root build (shipped in tonight’s nightly). |
| [#28849](https://github.com/google-gemini/gemini-cli/pull/28849) | **Closed** | Deps / XL | **73 npm dependency updates** — includes `@modelcontextprotocol/sdk 1.30.0`, `puppeteer-core 25.5.0`, `@google/genai 2.16.0`. |

---

## 5. Feature Request Trends
1. **Subagent Observability & Control** — Trajectory sharing (#22598), config adherence (#22267), permission gating (#22093), and skill discovery (#21968) signal demand for **first-class subagent governance**.
2. **AST-Aware Code Navigation** — Epic #22745 + prototype issue #22746 show strategic investment in **semantic tooling** (method-level reads, call-graph mapping).
3. **Evaluation Infrastructure Maturity** — #24353 (76 behavioral evals) and flaky test stabilization (#23313) indicate **eval-as-a-product** priority.
4. **Memory System Hardening** — Auto Memory retries (#26522), redaction timing (#26525), patch validation (#26523) cluster around **trustworthy long-term context**.
5. **Non-Interactive / CI/CD Ergonomics** — `--list-models` (#28843), auth error codes (#28848), TUI timeout (#28812) reflect **headless automation** needs.

---

## 6. Developer Pain Points (Recurring Frustrations)
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Subagents silently hang or misreport success** | #21409 (1h+ hangs), #22323 (false GOAL), #22093 (unauthorized spawn) | 5+ P1/P2 issues |
| **Shell/terminal integration fragility** | #25166 (stuck “awaiting input”), #22465 (Vite interactive prompt), #21924 (resize flicker) | 4+ core issues |
| **Auto Memory noise & security** | #26522 (infinite retry), #26525 (late redaction), #26523 (invalid patches) | 3 dedicated P2s |
| **Browser agent platform gaps** | #21983 (Wayland fail), #22232 (lock recovery), #22267 (config ignored) | 3 agent/browser issues |
| **Configuration authority not respected** | #22267 (settings.json), #20079 (symlink agents), #21968 (skill discovery) | Cross-cutting |
| **Destructive ops without guardrails** | #22672 (git reset --force), #23571 (random tmp scripts) | Safety concerns |

---

*Data sourced from `google-gemini/gemini-cli` GitHub activity (2026-08-17 00:00–23:59 UTC). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-17

## 1. Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows a cluster of authentication regressions (Atlassian MCP OAuth, Windows socket errors, concurrent token refresh storms) and a critical memory-pressure watchdog bug that force-compacts conversations at only 23% context usage, driving sessions into OOM loops. Session-resume reliability remains fragile across multiple vectors: stale connection IDs, ignored repository plugin settings in non-interactive mode, and silent chat archival without restore UI.

## 2. Releases
*None in the last 24 hours.*

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4506](https://github.com/github/copilot-cli/issues/4506) | Memory-pressure watchdog force-compacts at 23% context, recovers 0.003% tokens, loops to OOM | **Critical performance regression** — watchdog triggers on process memory, not context pressure, causing aggressive compaction that frees negligible tokens and spins until OOM. Blocks long-running sessions. | 0 👍, 0 comments (new, high severity) |
| [#4490](https://github.com/github/copilot-cli/issues/4490) | Atlassian MCP OAuth broken in 1.0.80 (RFC 8414 §3.3 regression) | **Auth regression** — OAuth metadata issuer mismatch blocks all Atlassian MCP integrations. Worked in 1.0.78, broken in 1.0.80. | 0 👍, 1 comment |
| [#4472](https://github.com/github/copilot-cli/issues/4472) | Concurrent tool calls during token refresh each spin new `rmcp` service, cancelling in-flight calls | **Concurrency bug** — parallel calls to same OAuth-protected MCP server each trigger independent refresh, creating duplicate services that kill each other’s transports. | 0 👍, 0 comments |
| [#4463](https://github.com/github/copilot-cli/issues/4463) | MCP OAuth intermittently fails on Windows with socket error 10013 | **Windows-specific auth blocker** — “access forbidden” socket error before browser flow opens. Intermittent but recurring. | 0 👍, 1 comment |
| [#4505](https://github.com/github/copilot-cli/issues/4505) | Resumed session retains stale connection item IDs → `CAPIError: 400 input item ID does not belong to this connection` | **Session resume broken** — every prompt fails after resume; `/fork` doesn’t recover. Data loss risk for long-lived sessions. | 0 👍, 0 comments |
| [#4507](https://github.com/github/copilot-cli/issues/4507) | Repo-level `enabledPlugins` in `.github/copilot/settings.json` ignored in `copilot -p` mode | **Config inconsistency** — same settings work in interactive mode and `plugins list`, but not in non-interactive prompt mode. Breaks CI/automation workflows. | 0 👍, 0 comments |
| [#4474](https://github.com/github/copilot-cli/issues/4474) | General Chat silently archived after 60s resume timeout, no restore UI | **Silent data loss** — long-running chat auto-archived on resume failure; original disappears with no recovery path. Windows-reported. | 0 👍, 0 comments |
| [#4488](https://github.com/github/copilot-cli/issues/4488) | Plugin updates fail with “Access is denied” when other Copilot/VS Code sessions open | **Windows file-locking contention** — unrelated processes hold locks, blocking plugin updates even when plugin not in use. | 0 👍, 1 comment |
| [#4473](https://github.com/github/copilot-cli/issues/4473) | `claude-haiku-4.5` sub-agent fails: reasoning effort ‘medium’ not supported | **Model routing bug** — CLI hard-codes unsupported reasoning level for this model, causing immediate execution failure. | 0 👍, 0 comments |
| [#4503](https://github.com/github/copilot-cli/issues/4503) | SDK server reports ready without auth, Slack session creation fails generically | **Closed** — SDK server started without `COPILOT_SDK_AUTH_TOKEN`, reported ready, then failed Slack session creation with opaque error. Fixed in recent change. | 0 👍, 5 comments |

## 4. Key PR Progress
Only one PR updated in the last 24h, but it appears unrelated to the CLI codebase:

| # | PR | Status | Note |
|---|----|--------|------|
| [#3163](https://github.com/github/copilot-cli/pull/3163) | ViewSonic monitor | Open (created 2026-05-06) | Appears to be a test/spam PR referencing hardware; no code changes relevant to Copilot CLI. |

*No meaningful CLI feature or fix PRs updated today.*

## 5. Feature Request Trends
From the open issues, the community is signaling demand for:

1. **Robust session lifecycle** — un-archive/restore (`#4502`), resume with agent/plugins preserved (`#4489`, `#4507`), no silent archival (`#4474`).
2. **Plugin dependency management** — declarative inter/intra-marketplace dependencies with auto-install (`#4487`).
3. **Non-interactive parity** — repository settings (`enabledPlugins`, etc.) honored in `copilot -p` (`#4507`).
4. **Observable quota/reset metadata** — correct `resetDate` in `account.getQuota` (`#4504`).
5. **Permission-request UX** — eliminate arbitrary timeouts on edit confirmations (`#4486`).

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Pain Point | Frequency in Last 24h |
|------|------------|----------------------|
| **Authentication** | OAuth regressions (RFC 8414, Windows sockets, concurrent refresh storms) | 3 issues |
| **Session Reliability** | Resume breaks (stale IDs, lost agent/plugins, silent archive) | 4 issues |
| **Memory/Performance** | Watchdog misfires at low context usage → OOM loops | 1 critical issue |
| **Windows Platform** | File locks block plugin updates; socket errors during OAuth | 2 issues |
| **Configuration Drift** | Settings work in interactive but not non-interactive mode | 1 issue |
| **Model Routing** | Hard-coded unsupported parameters for specific models | 1 issue |
| **UX Gaps** | No un-archive; permission timeouts; no archived-chat UI | 3 issues |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-08-17 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-17

## 1. Today's Highlights
No new releases shipped in the last 24 hours. Community focus remains on **session lifecycle management** (delete command), **Windows/PowerShell 7 path resolution**, **memory-layer scalability for large projects**, and **cron-task discoverability**. Three PRs address web-runner stability, string utilities, and a new `--starting-prompt` CLI flag.

---

## 2. Releases
*No releases published in the last 24 hours.*

---

## 3. Hot Issues (Top 4 from last 24h)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1783](https://github.com/MoonshotAI/kimi-cli/issues/1783) | **Feature: `/delete` command to remove sessions** | Users currently must manually delete `~/.kimi/sessions/` folders. A CLI command improves UX, security (sensitive data cleanup), and disk hygiene. | 6 comments, 1 👍 — active discussion on UX details (confirmation prompt, bulk delete). |
| [#2600](https://github.com/MoonshotAI/kimi-cli/issues/2600) | **Bug: PowerShell 7 default D: drive breaks path resolution** | On Windows, if PowerShell 7 starts from a non-system drive, Kimi Code fails to locate its working directory. Blocks adoption for Windows devs using custom profiles. | 5 comments, 0 👍 — repro steps provided; likely a `process.cwd()` vs. `process.env.USERPROFILE` mismatch. |
| [#1478](https://github.com/MoonshotAI/kimi-cli/issues/1478) | **Enhancement: Optimize memory layer & document it** | Large-project users hit context limits; memory system (SOUL/USER/MEMORY.md + daily logs) is undocumented and opaque. Critical for enterprise/long-running tasks. | 4 comments, 0 👍 — user shared a reference memory architecture; requests explicit docs + tuning knobs. |
| [#2605](https://github.com/MoonshotAI/kimi-cli/issues/2605) | **Bug: Cron tasks invisible in TUI (no `/cron`, `/tasks` ignores them)** | Model-created scheduled tasks persist to `~/.kimi-code/cron/` but have zero user-facing management. Silent failure mode; users cannot list/edit/delete cron jobs. | 1 comment, 0 👍 — closed same day (likely duplicate or wontfix), but highlights a genuine UX gap. |

---

## 4. Key PR Progress (3 updated in last 24h)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#864](https://github.com/MoonshotAI/kimi-cli/pull/864) | `feat: --starting-prompt flag to prompt without exit` | **Closed** (merged 2026-08-17) | Adds `--starting-prompt` / `-s` to send an initial prompt *without* exiting after response. Closes #887. Useful for scripting/CI pipelines. |
| [#2324](https://github.com/MoonshotAI/kimi-cli/pull/2324) | `fix(web): handle BrokenPipeError in SessionProcess.send_message` | **Open** | Guards `stdin.write`/`drain()` against subprocess exit race in `src/kimi_cli/web/runner/process.py`. Prevents unhandled `BrokenPipeError` crashes in web runner. |
| [#2449](https://github.com/MoonshotAI/kimi-cli/pull/2449) | `fix(string): strip newlines in shorten_middle before length check` | **Open** | `shorten_middle()` now collapses newlines *before* width check, ensuring single-line tool-call summaries stay on one line. Fixes rendering glitches in TUI. |

---

## 5. Feature Request Trends (from all open issues)
1. **Session & State Management** — Delete/rename/archive sessions, export/import, per-project isolation.
2. **Memory/Context Scaling** — Persistent, queryable long-term memory; config knobs for retention/summarization; docs.
3. **Scheduler/UI for Background Work** — First-class `/cron`, `/tasks` integration, notifications, log streaming.
4. **Cross-Platform Robustness** — Windows path handling, shell detection, PowerShell 7+, WSL interop.
5. **Extensibility** — Plugin/hooks system, custom slash commands, MCP/tool registry improvements.

---

## 6. Developer Pain Points (recurring themes)
- **“Invisible state”** — Sessions, cron jobs, memory files live in hidden dirs with no CLI/TUI affordances.
- **Windows friction** — Path resolution, shell startup dirs, line-ending quirks, missing native binaries.
- **Large-project context collapse** — No documented strategy for >100k token codebases; memory layer feels like a black box.
- **Scripting/Automation gaps** — Lack of non-interactive flags (partially addressed by `--starting-prompt`), JSON output modes, headless CI support.
- **Documentation drift** — Features (memory, cron, agents) exist but are absent from official slash-command docs.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — issues & PRs updated 2026-08-16 → 2026-08-17.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-17

## 1. Today's Highlights
A critical **48-bit ID overflow** (#42955) silently broke all pre-existing sessions since 2026-08-14 — new message IDs now sort *before* old ones, causing prompt storage without model execution. Meanwhile, clipboard failures in VSCode Server/Docker (#41470) and the long-standing **Ctrl+C exit conflict** (#7957, 49 👍) remain top usability blockers. Paid Zen models continue failing with "Upstream request failed" (#36506) while free models work.

---

## 2. Releases
No new releases in the last 24 hours.

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#42955](https://github.com/anomalyco/opencode/issues/42955) | **48-bit ID overflow (2026-08-14) silently breaks every pre-existing session** | Timestamp truncation + counter overflow causes new `msg_00cc…` IDs to sort before old `msg_fec1…`; `SessionPrompt.run` uses lexicographic ordering → prompt stored, loop exits, model never runs. **All sessions created before 2026-08-14 11:19:55 UTC are now broken.** | 🆕 Critical regression, 1 comment, 0 👍 (just filed) |
| [#7957](https://github.com/anomalyco/opencode/issues/7957) | **Ctrl+C should not exit OpenCode — conflicts with universal copy shortcut** | On Windows/Linux, `Ctrl+C` is copy; users accidentally kill the app. 49 👍, 16 comments — highest engagement in this batch. | 49 👍, 16 comments, open since Jan |
| [#41470](https://github.com/anomalyco/opencode/issues/41470) | **“Copied to clipboard” doesn't work in VSCode Server (Docker)** | Toast says copied but system clipboard empty. Blocks remote/container workflows. | 1 👍, 16 comments |
| [#36506](https://github.com/anomalyco/opencode/issues/36506) | **All paid Zen models fail with “Upstream request failed” — free models work** | Paid models (`MiniMax-M3`, `deepseek-v4-flash`) error; free (`big-pickle`, `deepseek-v4-flash-free`) and Go models work. Billing/credits enabled but unusable. | 3 👍, 11 comments |
| [#32366](https://github.com/anomalyco/opencode/issues/32366) | **UI stuck on “thinking” indefinitely after stream error, no error displayed or state recovery** | `AI_APICallError` / socket close → permanent spinner, no error UI, session unusable without restart. | 0 👍, 6 comments |
| [#38644](https://github.com/anomalyco/opencode/issues/38644) | **Silent failure: provider returns 500 but client drops response without showing error** | `opencode/big-pickle` intermittent 500s → spinner hangs then flow cuts, no output/error. | 0 👍, 3 comments |
| [#40468](https://github.com/anomalyco/opencode/issues/40468) | **Stuck in busy forever after toolcall** | TUI “ping pong” animation persists; `ESC`×2 does nothing. Logs end at `loop session.id=… step=N`. | 0 👍, 5 comments |
| [#36370](https://github.com/anomalyco/opencode/issues/36370) | **Desktop stuck in “thinking” mode — sidecar stream never completes (Windows, v1.17.18)** | Electron app enters permanent thinking state on any message. Platform-specific regression. | 0 👍, 3 comments |
| [#41469](https://github.com/anomalyco/opencode/issues/41469) | **Session silently stops on empty LLM response (finish: unknown, 0 tokens)** | Empty completion treated as normal turn; loop exits silently in `prompt.ts`. No user-visible error. | 0 👍, 4 comments |
| [#13626](https://github.com/anomalyco/opencode/issues/13626) | **Auto-sync projects in web UI from server** | Top feature request: new device/browser should fetch projects from server automatically. | 15 👍, 11 comments |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#42766](https://github.com/anomalyco/opencode/pull/42766) | Refactor | **Desktop: use current session messages** — removes legacy `Message`/`Part` transcript, keeps only V2 session message stream. |
| [#42952](https://github.com/anomalyco/opencode/pull/42952) | Perf (Closed) | **Reduce session spinner CPU usage** — replaces 25 per-dot CSS opacity animations with one shared pre-rendered APNG timeline; preserves reduced-motion, `currentColor`, SVG props. |
| [#42949](https://github.com/anomalyco/opencode/pull/42949) | Feature | **Render Code Mode executions** — dedicated Desktop renderer for child tool progress, input summaries, failed-call states, runtime errors + metadata parsing tests. |
| [#42947](https://github.com/anomalyco/opencode/pull/42947) | Docs (Closed) | **Reorganize V2 documentation** — focused CLI pages for config, providers, themes, keybinds, plugins; layout/typography/branding/nav refresh; `terminal.copy_on_select` → `terminal.copy`. |
| [#42944](https://github.com/anomalyco/opencode/pull/42944) | Fix (Closed) | **Correct background subagent status** — classify V2 background subagents only after parent tool completes with running child result; preserve legacy `task` metadata; animate from child session state. |
| [#42945](https://github.com/anomalyco/opencode/pull/42945) | Polish (Closed) | **Clarify skill timeline presentation** — icon, label, separator, resolved skill name in timeline tool rows; muted text for details/notices; regression coverage. |
| [#42951](https://github.com/anomalyco/opencode/pull/42951) | Docs | **Add ClawMetry to ecosystem page** — local dashboard reading OpenCode session history (sessions, tokens, costs, tool calls). |
| [#42049](https://github.com/anomalyco/opencode/pull/42049) | Fix (Closed) | **Hide background badge on interrupted shells** — render `Background` badge only when completed tool explicitly reports detached running state; shared predicate for shell/subagent. |
| [#41144](https://github.com/anomalyco/opencode/pull/41144) | Fix (Closed) | **Clarify saved permission copy** — “Allow always” → “Always allow”; explain rules apply to current project; remove claim rules disappear on restart. |
| [#37374](https://github.com/anomalyco/opencode/pull/37374) | Fix (Closed) | **Stream shell progress tail** — publish latest 25 output lines as replacement snapshot; prepend truncation notice with full-output path; final settlement unchanged. |

---

## 5. Feature Request Trends
1. **Session persistence & sync** — Auto-sync projects across devices/browsers (#13626, 15 👍); session favorites/pinning for quick access (#42940).
2. **Discoverability & sharing** — QR code for session deep links in web/remote output (#42942).
3. **Keyboard shortcut sanity** — Fix `Ctrl+C` conflict (copy vs. exit) (#7957, 49 👍); zsh completion for top-level flags (#42913).
4. **Input ergonomics** — Restore `Cmd/Ctrl+A` select-all in input field (#25637); Wispr Flow dictation support in VS Code terminal (#34499, 2 👍).
5. **V2 architecture clarity** — Define restart semantics for foreground/background shells (#36348).

---

## 6. Developer Pain Points
- **Silent/stuck failures dominate**: Multiple issues report UI freezing on “thinking” with no error surfacing — stream errors (#32366), 500s (#38644), toolcall hangs (#40468), Windows sidecar stalls (#36370), empty LLM responses (#41469), unstable net (#40625). Common theme: **no recovery, no visible error, restart required**.
- **Clipboard & input broken in container/remote setups**: VSCode Server + Docker clipboard fails (#41470); `Cmd/Ctrl+A` selects wrong region (#25637); Wispr Flow dictation not inserted (#34499).
- **Paid model reliability**: Zen paid models consistently fail while free tiers work (#36506, #33318) — billing enabled but unusable.
- **V2 CLI bloat**: Headless commands (`--version`, `--help`, `service status`, `api`) load OpenTUI native lib (`libopentui.so`, 13 MiB) and leak temp files (#37671).
- **ID generation regression**: 48-bit timestamp overflow on 2026-08-14 broke sort order for all existing sessions (#42955) — a time-bomb that went off in production.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-17

## 1. Today's Highlights
The Pi team closed a high-impact TUI stability fix (#8209) that prevented custom messages injected mid-stream from corrupting the `tool_calls`→`tool` message adjacency — a root cause of permanent 400 errors on Moonshot/DeepSeek. Simultaneously, the `pi.dev` catalog refresh gained retry logic with per-attempt timeouts (#8204) to mitigate the intermittent TLS hangs reported in #8198. A correctness fix to `AgentSession.getStats()` now excludes cache tokens from `tokens.total` (#8218), preventing premature compaction triggers that inflated token counts ~120×.

---

## 2. Releases
**No new releases in the last 24 hours.**

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5023](https://github.com/earendil-works/pi/issues/5023) | **Terminal randomly scrolls to buffer start** | Long-standing UX regression; occurs during model streaming without user input. 14 comments, 2 👍 — high visibility. | 🔴 **High** — affects daily workflow |
| [#8029](https://github.com/earendil-works/pi/issues/8029) | **Prompt editor O(n) lag with large buffers** | 7k lines → 1.6s/keystroke; blocks prompt engineering workflows. Labeled `inprogress`. | 🟠 **High** — perf blocker for power users |
| [#7683](https://github.com/earendil-works/pi/issues/7683) | **Components can’t receive mouse events on own rows** | Blocks rich TUI extensions (e.g., clickable file trees, inline actions). 10 comments, design discussion active. | 🟡 **Medium-High** — extension ecosystem enabler |
| [#8198](https://github.com/earendil-works/pi/issues/8198) | **pi.dev catalog endpoint times out globally** | `pi update --models` fails consistently; blocks model discovery. Multiple networks affected. | 🔴 **High** — infra reliability |
| [#8036](https://github.com/earendil-works/pi/issues/8036) | **Edit tool crashes TUI on 14.5 MB diff** | Large HTML diffs with long lines OOM the renderer; session resume re-crashes. | 🟠 **High** — data-loss risk |
| [#7994](https://github.com/earendil-works/pi/issues/7994) | **openai-completions drops non-encrypted reasoning_details** | Breaks round-trip for OpenRouter benchmarks; signed-text replay impossible. | 🟡 **Medium** — provider interop |
| [#7870](https://github.com/earendil-works/pi/issues/7870) | **Remote catalog overrides glm-5.2 contextWindow (262k → 1M)** | Silent downgrade from pi.dev catalog; model capped at 25% capacity. Labeled `inprogress`. | 🟠 **High** — silent capability loss |
| [#5581](https://github.com/earendil-works/pi/issues/5581) | **Custom messages bypass `before_agent_start` event** | `triggerTurn: true` skips extension hooks; breaks audit/guardrail extensions. | 🟡 **Medium** — extension contract violation |
| [#8166](https://github.com/earendil-works/pi/issues/8166) | **Mid-turn custom message wedges tool_calls adjacency** | **Fixed by #8209** — caused permanent 400 on subsequent turns. 2 comments, confirmed by #8210. | ✅ **Resolved** — critical streaming bug |
| [#8223](https://github.com/earendil-works/pi/issues/8223) | **Quit leaves orphaned pi process holding provider request** | Local model servers (llama-swap) keep generating after UI close; GPU pegged 16 min. | 🟠 **High** — resource leak / cost risk |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#8209](https://github.com/earendil-works/pi/pull/8209) | **Fix** | Defers `sendCustomMessage(triggerTurn:false)` to end of turn while streaming — fixes #8166/#8210 tool_calls corruption. |
| [#8218](https://github.com/earendil-works/pi/pull/8218) | **Fix** | `getStats().tokens.total` now excludes cache tokens (billed 1/120×); prevents premature compaction budgets. |
| [#8204](https://github.com/earendil-works/pi/pull/8204) | **Fix** | Adds per-attempt timeout + retry to `pi.dev` catalog refresh; mitigates #8065/#8198 TLS hangs. |
| [#8119](https://github.com/earendil-works/pi/pull/8119) | **Fix** | Tracks Kimi `usage.cached_tokens` as cache-read input — addresses #8075. |
| [#5849](https://github.com/earendil-works/pi/pull/5849) | **Feature** | New `azure-foundry` provider for Anthropic Claude with Entra ID auth; full Python SDK parity. |
| [#8217](https://github.com/earendil-works/pi/pull/8217) | **Feature** | Kiro OAuth device-code login + provider/catalog/runtime registration. |
| [#8124](https://github.com/earendil-works/pi/pull/8124) | **Feature** | Routes xAI models through Responses API; defaults to Grok 4.6; sends Pi user-agent. |
| [#8193](https://github.com/earendil-works/pi/pull/8193) | **Feature** | Adds MiniMax image-to-image backend for image generation endpoint. |
| [#5850](https://github.com/earendil-works/pi/pull/5850) | **Chore** | Bumps vitest 3.2.6, overrides esbuild 0.28.1; closes 5/6 `npm audit` high advisories. |
| [#8076](https://github.com/earendil-works/pi/pull/8076) | **Draft** | Dev branch with new test harness — groundwork for broader test infrastructure. |

---

## 5. Feature Request Trends
From the issue stream, three clear directions dominate community asks:

1. **TUI Extensibility & Rich Interactions** — #7683 (component mouse events), #8214 (RPC slash-command completions), #8213 (blockable `agent_end` veto), #8211 (IME/dictation live re-layout). Developers want first-class extension surfaces that match built-in component capabilities.
2. **Provider Catalog Correctness & Resilience** — #7870 (silent contextWindow downgrade), #8198 (catalog timeouts), #8206 (wrong endpoint routing), #8194/#8220 (missing models). The remote catalog is a single point of failure for model metadata.
3. **Streaming & Message Pipeline Hardening** — #8166/#8210 (mid-turn injection corruption), #5581 (event bypass), #8208 (orphaned reasoning items), #7994 (reasoning_details round-trip). The agent message queue is a frequent source of protocol-level bugs.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Silent catalog mismatches** | #7870 (contextWindow), #8206 (wrong endpoint), #8190 (missing thinkingLevelMap), #8220 (missing vision model) | 4+ issues/week |
| **Streaming message queue fragility** | #8166, #8210, #5581, #8208 — all involve mid-turn injection or replay corruption | 3+ issues/week |
| **TUI performance at scale** | #8029 (prompt editor O(n)), #8036 (diff render crash), #5023 (scroll jump), #8212 (theme stale colors) | Persistent |
| **Extension API gaps** | #7683 (mouse), #8213 (veto), #8214 (completions), #8222 (schema validation), #8195 (subagent depth) | Growing |
| **Orphaned processes / resource leaks** | #8223 (quit leaves provider request), #8215 (package race), #8216 (malicious package) | Emerging |

> **Bottom line**: The project is stabilizing the streaming pipeline (#8209) and catalog reliability (#8204) this week, but the backlog shows a structural need for: (1) a **contract-test suite for provider catalogs**, (2) **formal message-queue invariants** enforced in CI, and (3) **extension API parity** with built-in components.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-17

---

## 1. Today's Highlights

- **Nightly v0.21.11** shipped with a deny-by-default footprint gate for autofix and positional window censuses, plus a full DSW EAS end-to-end rerun (SWE-bench Verified 500, Terminal-Bench 2.0 89) after scoping the package proxy to verifier-only egress.  
- **Critical stability fixes landing**: PR #9295 contains unsupported image MIME types (HEIC/TIFF) that were aborting Responses-compatible sessions; PR #9292 wraps agent-tab render errors instead of crashing the entire interactive session.  
- **Review system hardening continues**: worktree lease locking (#9211), severity-floor enforcement at posting boundary (#9279), and incremental scope built from PR diff rather than containment checks (#9267) all merged or in final review.

---

## 2. Releases

### v0.21.11-nightly.20260817.195128a17a
- **feat(autofix)**: Deny-by-default footprint gate and positional window censuses ([#9156](https://github.com/QwenLM/qwen-code/pull/9156)) — prevents unbounded diff growth during automated fix rounds.  
- **fix(web-shell)**: DSW EAS full E2E rerun (r3) — benchmark pipeline re-scoped to verifier-only dependency egress; SWE-bench Verified (500) + Terminal-Bench 2.0 (89) passed.  
- **Published**: `release/v0.21.11-nightly.20260817.195128a17a` ([release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260817.195128a17a))

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#9291](https://github.com/QwenLM/qwen-code/issues/9291) | Unsupported image MIME (HEIC) aborts Responses-compatible session | Real-world `.heic` uploads crashed the session; endpoint rejected `image/heic` data URI during validation. Blocks multimodal workflows on iOS/macOS. | 3 comments, P2 bug, active fix in #9295 |
| [#9290](https://github.com/QwenLM/qwen-code/issues/9290) | Interactive session crashes on errored agent-team tab | Selecting a tab whose teammate errored exits the whole UI. High-impact for multi-agent debugging. | 3 comments, P2, welcome-pr, roadmap/multi-agent |
| [#9278](https://github.com/QwenLM/qwen-code/issues/9278) | Design: `/review` publish-time convergence advisory | Documents the “runaway loop” where review → fix → larger diff → more findings; proposes telemetry + operator-owned posting surfaces to dampen gain >1. | 3 comments, P2 feature, in-progress, core to review quality |
| [#9205](https://github.com/QwenLM/qwen-code/issues/9205) | `/review`: concurrent same-PR reviews race on fixed worktree path | Worktree `.qwen/tmp/review-pr-<n>` deleted mid-run by another session reviewing same PR. Root cause for flaky CI. | 2 comments, P2, **closed** via #9211 |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | Fleet Shepherd Dashboard (auto-maintained) | Bot fleet health monitor: last tick 2026-08-17T01:14:48Z, 0 syncs/dispatches/releases/cleanups. Signal for infra health. | 3 comments, status/need-information |
| [#9294](https://github.com/QwenLM/qwen-code/issues/9294) | Add ClawMetry to Ecosystem section | Local observability dashboard with Qwen Code adapter (`pip install clawmetry`). Community integration request. | 2 comments, P3, status/ready-for-human |
| [#9259](https://github.com/QwenLM/qwen-code/issues/9259) | (Referenced in #9272) Deferred suggestions from 7-round review | Tracks findings frozen at Critical-only after round 7; ensures nothing silently dropped. | Linked from #9272 |
| [#9222](https://github.com/QwenLM/qwen-code/issues/9222) | (Referenced in #9270) Leftover findings from review | Four findings posted in final rounds before merge; now closed via #9270. | Linked from #9270 |
| [#8084](https://github.com/QwenLM/qwen-code/issues/8084) | (Referenced in #9144) ACP-integration boundary cleanup | Refactor to keep `acp-integration` off `serve/` internals; ESLint guard added. | Linked from #9144 |
| [#7906](https://github.com/QwenLM/qwen-code/issues/7906) | (Referenced in #7925) Stale worktree project snapshots | Worktree sessions register snapshots never cleaned on shutdown/crash. Fix in #7925. | Linked from #7925 |

---

## 4. Key PR Progress

| # | Title | Type | Status | Impact |
|---|-------|------|--------|--------|
| [#9295](https://github.com/QwenLM/qwen-code/pull/9295) | fix(cli): omit image media the model endpoint cannot safely consume | Bug fix | **Open** | Prevents HEIC/TIFF/unknown MIME from crashing Responses-compatible sessions; validates & filters before forwarding. |
| [#9292](https://github.com/QwenLM/qwen-code/pull/9292) | fix(cli): contain agent-tab render errors instead of exiting the session | Bug fix | **Open** | Adds non-fatal error boundary per agent tab; degrades gracefully instead of `[FATAL_RENDER_ERROR]` + session exit. |
| [#9279](https://github.com/QwenLM/qwen-code/pull/9279) | feat(review): enforce the resolved severity floor at the posting boundary | Feature | **Open** | Moves non-Critical suggestions to deferral list when floor = Critical (explicit or round ≥6); stops noise in posted reviews. |
| [#9211](https://github.com/QwenLM/qwen-code/pull/9211) | fix(review): lock the PR review worktree lease against concurrent sessions | Bug fix | **Closed** | Worktree lease now acts as mutex; prevents mid-run deletion (#9205). Checked before destructive ops. |
| [#9267](https://github.com/QwenLM/qwen-code/pull/9267) | refactor(review): build the incremental scope from the PR's diff, not a check | Refactor | **Open** | Replaces containment oracle with narrowing step; scope = PR's `base..head` diff directly, no post-hoc proof needed. |
| [#9272](https://github.com/QwenLM/qwen-code/pull/9272) | fix(review): name each certification bar and defer degrade notes past admission | Bug fix | **Open** | Addresses deferred suggestions from #9259 (7-round Critical-only freeze); three changes in reverse-audit retirement path. |
| [#9263](https://github.com/QwenLM/qwen-code/pull/9263) | feat(review): review shell and CI scripts against the lanes that run them | Feature | **Open** | New skill rule for shell/workflow/scripts; asks for lane inventory (which CI jobs execute the file) before reviewing. |
| [#9226](https://github.com/QwenLM/qwen-code/pull/9226) | feat(review): Aone Code read path (second review-platform provider) | Feature | **Open** | Adds GitLab Alibaba (`gitlab.alibaba-inc.com`) read support behind review-platform seam (#9096); meta, issues, comments, changes. |
| [#9284](https://github.com/QwenLM/qwen-code/pull/9284) | fix(core): align agent-team prompts and TeamCreate description with actual delivery | Bug fix | **Open** | Fixes mismatch: runtime already forwards unreported final answer on IDLE, but prompts/docs said otherwise. |
| [#9289](https://github.com/QwenLM/qwen-code/pull/9289) | fix(core): dispatch manually assigned team tasks to their owner | Bug fix | **Open** | `task_update(owner='alice')` now delivers directly; auto-claim scan only handled unowned tasks. |
| [#9122](https://github.com/QwenLM/qwen-code/pull/9122) | feat(web-shell): improve sidebar session management | Feature | **Open** | Hover details, folder preview (5 rows), overflow-aware title fade/scroll, running-session indicators. |
| [#9254](https://github.com/QwenLM/qwen-code/pull/9254) | fix(web-shell): show a boot fallback instead of a white screen | Bug fix | **Closed** | Dependency-free watchdog in `index.html`; renders bilingual error + reload button on script/CSS load failure. |
| [#9228](https://github.com/QwenLM/qwen-code/pull/9228) | fix(ci): narrow serve-ab's self-hosted wipe to A/B checkout dirs | CI fix | **Open** | Prevents wiping entire shared workspace (including `.git` ~900 MB) on self-hosted ECS; only A/B dirs cleaned. |
| [#7925](https://github.com/QwenLM/qwen-code/pull/7925) | fix(core): sweep stale worktree project snapshots on startup | Bug fix | **Open** | Removes `.qwen/projects/<sanitized-worktree-path>` on startup; fixes leak from crash/force-kill paths. |
| [#8613](https://github.com/QwenLM/qwen-code/pull/8613) | feat(web-shell): tmux-backed interactive terminal sub-agent | Feature | **Closed** | Agent can run interactive CLI (REPL, TUI) in tmux on daemon host; Web Shell shows live terminal view. |
| [#9144](https://github.com/QwenLM/qwen-code/pull/9144) | refactor(cli): keep acp-integration off serve internals | Refactor | **Open** | Completes #8084 boundary: moves 4 Live Voice helpers under `acp-integration/`, adds ESLint guard. |
| [#9262](https://github.com/QwenLM/qwen-code/pull/9262) | feat(autofix): audit the approach instead of stopping on growth-budget breach | Feature | **Open** | Growth-budget breach → maintainer-decision handoff **with code changes continuing** (audit mode), not hard stop. |
| [#9270](https://github.com/QwenLM/qwen-code/pull/9270) | fix(review): close out the four leftover findings from the #9222 review | Bug fix | **Closed** | Resolves findings blocking resolver-input path collision, etc., posted in final rounds of #9222. |
| [#9181](https://github.com/QwenLM/qwen-code/pull/9181) | feat(daemon): Isolate the Conversations runtime boundary | Feature | **Closed** | Single-owner arbitration, shared listener lifecycle, internal state isolation — enables standalone Conversations. |
| [#8169](https://github.com/QwenLM/qwen-code/pull/8169) | feat(core): add OpenAI Responses API content generator | Feature | **Open** | New content generator for OpenAI Responses API; prioritized with reviewer test plan. |

---

## 5. Feature Request Trends

1. **Review system maturity** — Convergence advisory (#9278), severity-floor enforcement (#9279), lane-aware script review (#9263), multi-platform read paths (GitHub + Aone/GitLab #9226), worktree locking (#9211), incremental scope from PR diff (#9267).  
2. **Multi-agent / agent-team robustness** — Tab crash containment (#9292), prompt/reality alignment (#9284), manual task dispatch (#9289), tmux-backed sub-agents (#8613).  
3. **Multimodal input hardening** — MIME validation & filtering for Responses API (#9295/#9291), HEIC/TIFF support.  
4. **Web Shell UX polish** — Boot fallback (#9254), sidebar session management (#9122), live terminal view (#8613).  
5. **Observability & ecosystem** — Local dashboard integration (ClawMetry #9294), Fleet Shepherd telemetry (#7167).  
6. **Autofix policy evolution** — Growth-budget audit mode (#9262), deny-by-default footprint gate (release), positional window censuses.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Concurrent review races** | Worktree deleted mid-run by another session (#9205 → #9211) | High (CI flakes) |
| **Session crashes on render errors** | Single fatal boundary exits entire interactive session (#9290 → #9292) | High (multi-agent tabs) |
| **Unsupported image MIME crashes** | HEIC/TIFF forwarded verbatim → endpoint rejection → abort (#9291 → #9295) | Medium (iOS/macOS users) |
| **Stale worktree snapshot leak** | `.qwen/projects/` entries never cleaned on crash/shutdown (#7906 → #7925) | Medium (disk growth) |
| **Review noise from non-Critical findings** | Round ≥6 still posts Suggestions; no floor enforcement at boundary (#9278 → #9279) | Medium (review quality) |
| **Autofix hard-stop on growth budget** | Automation stops cold; no code changes continue (#9262) | Medium (automation stall) |
| **Web Shell white-screen on load failure** | No fallback when script/CSS fails (#9254) | Low (but visible) |
| **ACP/serve boundary leakage** | `acp-integration` imports `serve/` internals (#8084 → #9144) | Low (architectural) |
| **Manual task assignment not delivered** | `owner` set but only auto-claim scan delivers (#9289) | Low (multi-agent) |
| **Agent-team prompt/reality drift** | Docs say one thing, runtime does another (#9284) | Low (confusion) |

---

*Generated from github.com/QwenLM/qwen-code data as of 2026-08-17. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-17

---

## 1. Today's Highlights

The project continues its **rebrand from `deepseek-tui` to `codewhale`** with v0.9.8, deprecating the legacy npm package. A major **honesty initiative** is underway across three PRs (#5459, #5440, #5441) to stop presenting guessed model capabilities (context windows, output ceilings, telemetry defaults) as verified facts. Meanwhile, **i18n expansion** adds 8 new languages (fr, de, ca, hi, tr, it, pl, ar with RTL) to both the TUI and website, and a **sandbox overhaul** introduces proper bwrap container essentials with configurable bind roots.

---

## 2. Releases

### v0.9.8 — Codewhale Rebrand Complete
- **Legacy `deepseek-tui` npm package deprecated** — no further releases; users migrate to `codewhale`
- **Command, package, and release assets standardized** on lowercase `codewhale` identifier
- Migration guide: `deepseek`/`d` commands → `codewhale`/`cw`; config/storage keys tiered migration per #5443

[Release v0.9.8](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.8)

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Status / Reaction |
|---|-------|----------------|-------------------|
| [#5056](https://github.com/Hmbown/CodeWhale/issues/5056) | **Flaky verifier background tests** — 2 tests flake under full-suite parallelism; 12 `#[ignore]` tests untriaged; `/workspace`-sensitive fixtures | Blocks CI reliability; signals test architecture debt in `verifier.rs` | **OPEN** — 5 comments, authored by Hmbown |
| [#5443](https://github.com/Hmbown/CodeWhale/issues/5443) | **Epic: retire `deepseek-tui` identifiers** — tiered migration (internals now, env aliases deprecated to 0.10, storage keys via explicit migration) | Defines the rebrand scope; separates provider credentials (`DEEPSEEK_API_KEY`) from internal identifiers | **OPEN** — 0 comments, authored by Hmbown |
| [#5442](https://github.com/Hmbown/CodeWhale/issues/5442) | **Discoverability debt** — 34 high-value commands demoted from palette root; config-only capabilities invisible; welcome screen teaches governance not capability | UX gap: shipped features unusable without prior knowledge | **OPEN** — 0 comments, authored by Hmbown |
| [#5441](https://github.com/Hmbown/CodeWhale/issues/5441) | **Honesty: `_Nk` suffix presented as verified context window; telemetry default-on invisible** | Model context hints derived from name parsing, not docs; telemetry opt-out not surfaced | **OPEN** — 0 comments, authored by Hmbown |
| [#5440](https://github.com/Hmbown/CodeWhale/issues/5440) | **Honesty: unknown-model output ceilings fabricated as "documented"** — Anthropic 64K floor, Codex OAuth 4096 hardcoded as verified | Silent fallbacks masquerade as capabilities; affects token budgeting | **OPEN** — 0 comments, authored by Hmbown |
| [#5439](https://github.com/Hmbown/CodeWhale/issues/5439) | **Workflows/goal/auto modes shipped but buried** — orchestration trio lacks palette visibility and one-keystroke access | Feature parity with Claude Code exists but undiscoverable | **OPEN** — 0 comments, authored by Hmbown |
| [#5447](https://github.com/Hmbown/CodeWhale/issues/5447) | **Docs drift from code** — `max_depth` ceiling 8 vs 3, `max_subagents` 1-20 vs 64/128, scout contract mismatch, checklist/todo replay contradiction | v0.9.9 docs scout found 4 verified mismatches; erodes trust in documentation | **OPEN** — 0 comments, authored by Hmbown |
| [#5453](https://github.com/Hmbown/CodeWhale/issues/5453) | **i18n(web): route 8 languages + ar RTL on codewhale.net** | Website lags TUI locale packs (v0.9.2); missing major languages + RTL | **OPEN** — 0 comments, authored by Hmbown |
| [#5434](https://github.com/Hmbown/CodeWhale/issues/5434) | **integrations dsh: default DeepSeek route refused** — Responses dialect cannot be carried | Blocked `@deepseek-ai/dsh@0.1.0-rc.6` integration; fixed in #5445 | **CLOSED** — fixed by #5445 |
| [#5436](https://github.com/Hmbown/CodeWhale/issues/5436) | **Prose wraps at ~105 columns while tool cells run full-width** | Wide-terminal transcript feels left-oriented; fixed in #5446 | **CLOSED** — fixed by #5446 |

---

## 4. Key PR Progress (10 Important)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#5459](https://github.com/Hmbown/CodeWhale/pull/5459) | **fix(tui): honest context-window, output-ceiling, telemetry provenance** (#5239, #5440, #5441) | Unverified numbers still drive budgets but now marked + paired with config keys to fix them | **OPEN** — Core honesty pass |
| [#5458](https://github.com/Hmbown/CodeWhale/pull/5458) | **feat(subagent): slim agent tool schema to 12 advertised fields** (#5324) | Reduced from 33 fields; aliases remain parse-accepted for transcript compatibility | **OPEN** — Model-facing API simplification |
| [#5456](https://github.com/Hmbown/CodeWhale/pull/5456) | **feat(sandbox): bwrap container essentials + configurable extra roots** (#5410) | Mounts `--dev /dev`, `--proc /proc`, `--tmpfs /tmp` by default; fixes `EROFS` on `/dev/null`; adds `bwrap_ro_roots`/`bwrap_rw_roots` config | **OPEN** — Linux sandbox hardening |
| [#5450](https://github.com/Hmbown/CodeWhale/pull/5450) | **fix(tui): restore session cost when live pricing unverifiable** (#5241) | Session cost no longer stays `unverified_live_pricing` forever on 503/control-plane errors | **OPEN** — Cost tracking reliability |
| [#5445](https://github.com/Hmbown/CodeWhale/pull/5445) | **fix(integrations): carry Responses-dialect DSH routes via pi-ai openai-responses** (#5434) | Enables `deepseek/deepseek-v4-flash` with `endpoint_key: "responses"` through DSH | **CLOSED** — Unblocks dsh integration |
| [#5446](https://github.com/Hmbown/CodeWhale/pull/5446) | **fix(tui): prose fills full content width; add `transcript.prose_measure` cap** (#5436) | Removes hardcoded `PROSE_MAX_MEASURE=105`; adds user-configurable cap | **CLOSED** — Wide-terminal UX fix |
| [#5454](https://github.com/Hmbown/CodeWhale/pull/5454) | **feat(web/i18n): add 8 dictionaries + ar with RTL plumbing** (#5453) | Full `chrome.ts`+`home.ts`+`docs-guide.ts` parity for fr/de/ca/hi/tr/it/pl; ar with RTL | **OPEN** — Website i18n parity |
| [#5452](https://github.com/Hmbown/CodeWhale/pull/5452) | **docs(i18n): add 8 README translations** (#5451) | Adds fr, de, zh-TW, hi, tr, it, pl, ar README files | **OPEN** — Documentation i18n |
| [#5448](https://github.com/Hmbown/CodeWhale/pull/5448) | **docs: fix config/subagent/tool-lifecycle truth drift** (#5447) | Corrects 4 scout findings: `max_depth`, `max_subagents`, scout contract, checklist/todo replay | **OPEN** — Docs accuracy |
| [#5444](https://github.com/Hmbown/CodeWhale/pull/5444) | **fix(session): let `/rename` and `/title` apply mid-first-turn** (#5430) | Session file created at dispatch checkpoint; rename now works before first turn autosave | **OPEN** — Session management fix |

---

## 5. Feature Request Trends

From the open issues and PRs, the community is pushing toward:

1. **Discoverability over parity** — Features exist (workflows, goal, auto modes, advanced commands) but are buried; demand for palette-root visibility and one-keystroke access (#5442, #5439)
2. **Honesty/transparency as a product feature** — Systematic removal of "guessed as verified" presentations across context windows, output ceilings, telemetry defaults (#5440, #5441, #5459)
3. **Internationalization completeness** — Website catching up to TUI locale packs; RTL support for Arabic; README parity (#5453, #5451, #5454, #5452)
4. **Sandbox configurability** — Moving from hardcoded bwrap mounts to user-configurable bind roots (`bwrap_ro_roots`, `bwrap_rw_roots`) (#5456)
5. **Subagent/schema simplification** — Reducing advertised tool surface from 33→12 fields while maintaining backward compatibility (#5458)
6. **Rebrand completion** — Tiered migration off `deepseek-tui` identifiers with explicit storage migration (#5443)

---

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Flaky CI / test reliability** | #5056 (verifier background tests), #4669 (coalesced raw-read), #5457 (agent_focus auto-review receipt) | High — multiple flake-fix PRs in flight |
| **Undiscoverable advanced features** | #5442 (34 commands demoted), #5439 (workflow trio buried), #1708 (tui_help tool requested) | High — product audit found systemic gaps |
| **Documentation drift** | #5447 (4 verified mismatches), #5448 (config/subagent/tool-lifecycle fixes) | Medium — v0.9.9 docs scout caught regressions |
| **Model capability misrepresentation** | #5440 (fabricated output ceilings), #5441 (context window hints), #5239 (context windows) | Medium — honesty initiative spans 3 PRs |
| **Session cost tracking failures** | #5241, #5402, #5450 (live pricing 503 → unverified forever) | Medium — 3 PRs addressing same root cause |
| **Wide-terminal layout imbalance** | #5436 (prose capped at 105 cols), fixed by #5446 | Low — single but visible UX regression |
| **Rebrand migration friction** | #5443 (tiered migration epic), legacy npm deprecation in v0.9.8 | Low — planned, not yet painful for users |

---

*Generated from github.com/Hmbown/CodeWhale data as of 2026-08-17. All links point to the CodeWhale repository (successor to DeepSeek-TUI).*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*