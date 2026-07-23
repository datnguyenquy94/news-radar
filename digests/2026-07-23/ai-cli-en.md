# AI CLI Tools Community Digest 2026-07-23

> Generated: 2026-07-23 04:18 UTC | Tools covered: 10

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

# Cross-Tool AI CLI Ecosystem Comparison Report
**Date: 2026-07-23** | **Tools Analyzed: 9** (Grok Build inactive)

---

## 1. Ecosystem Overview

The AI CLI landscape is in a **high-velocity stabilization phase** across all major players. Every active tool shipped releases or release candidates in the last 24 hours, but regression density is elevated—particularly around sandboxing, authentication, and multi-agent orchestration. Three distinct architectural patterns are crystallizing: **Anthropic/OpenAI/Google** pursue polished commercial products with enterprise billing integrations; **OpenCode/Pi/Qwen** emphasize protocol-level extensibility (ACP, MCP) and self-hosted flexibility; **Kimi/DeepSeek** focus on provider-agnostic model routing and skill/plugin ecosystems. The common denominator: **background agent reliability** and **cross-surface context continuity** are the top unmet demands across all communities.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues | Key PRs | Release Status | Critical Regressions |
|------|----------------|------------|---------|----------------|---------------------|
| **Claude Code** | 1 (v2.1.218) | 10 | 9 | Stable | Sandbox `bwrap` mkdir, Task tools gated off, Fable 5 billing |
| **OpenAI Codex** | 4 (α.1–α.4) | 10 | 10 | Alpha stabilization | OAuth failures (Win/macOS), weekly rate-limit accounting, SQLite log churn |
| **Gemini CLI** | 3 (stable + preview + nightly) | 10 | 10 | Active tri-channel | Subagent `GOAL` false success, generalist agent hangs, shell "Waiting input" |
| **GitHub Copilot CLI** | 3 patches (v1.0.74-1..3) | 10 | 2 (1 withdrawn) | Patch cadence | Windows/WSL2 crashes, infinite Ink render loop, zombie processes |
| **Kimi Code** | 0 | 3 | 3 | Pre-release fix | `prompt_cache_key` sent to 3rd-party APIs (400 errors), TPD miscalculation |
| **OpenCode** | 0 (API wave in PRs) | 10 | 12 | API expansion | Desktop background disconnect, session list truncation, edit tool stale reads |
| **Pi** | 0 | 10 | 10 | Stability fixes | Copilot Enterprise compaction 421/400, GitHub auth logout, SDK retry ignores AbortSignal |
| **Qwen Code** | 1 POC (benchmark) | 10 | 10 | CI crisis | Nightly fails (quality + Docker), E2E flakes, 17MB cold-start eager load |
| **DeepSeek TUI** | 0 (v0.9.1 gated) | 10 | 10 | Security gate | Composer byte-corruption, immediate TUI exit on macOS, 17 Dependabot alerts |

**Signal**: Codex and Copilot CLI show highest release frequency; Qwen and DeepSeek TUI face release-blocking CI/security gates; OpenCode leads PR volume with coordinated API surface expansion.

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Demanding | Specific Needs |
|-------------|-----------------|----------------|
| **Multi-account / profile isolation** | Claude Code (#80326 PR), OpenCode (project metadata), Pi (session metadata), Copilot CLI (enterprise MCP) | Isolated `CLAUDE_CONFIG_DIR` per account; project-scoped config; org policy handshake visibility |
| **Background agent / Task tool reliability** | Claude Code (3 issues), OpenAI Codex (multi-agent v2 UX), Gemini CLI (subagent autonomy), Copilot CLI (subagent UX), Qwen Code (Goal v3 lifecycle) | Persistent subagent state, model pinning on resume, dismissible/completable agents, tool-only usage telemetry |
| **Cross-surface context sync** | Claude Code (#13843, 99 👍), OpenAI Codex (workspace-scoped chats), OpenCode (session archival), Pi (compaction) | Claude.ai ↔ CLI conversation continuity; workspace-isolated chat history; durable session archive/restore |
| **Model routing & cost governance** | Kimi Code (#2533), Copilot CLI (#4218, #4207), Pi (constrained sampling), Qwen Code (provider thinking retry), DeepSeek TUI (context diet) | Per-sub-agent model selection; Auto-mode allow-list; per-subagent credit breakdown; provider capability negotiation |
| **ACP / MCP protocol maturity** | OpenCode (ACP client support), Gemini CLI (MCP timeout fixes), Pi (OpenRouter OAuth), Qwen Code (workspace ACP child), Codex (RFC 8707) | ACP client (not just server) consumption; MCP discovery resilience; OAuth 2.1/PKCE for provider auth |
| **Compaction / context management** | Claude Code (auto-compact never triggers), OpenAI Codex (rate limit opacity), Pi (auto-compact past 100%), Copilot CLI (configurable threshold) | Proactive compaction before provider overflow; user-defined thresholds; cache-preserving compaction |
| **Windows / WSL2 parity** | Copilot CLI (5+ issues), Codex (webview, SSH, taskkill storms), Gemini CLI (PowerShell docs), DeepSeek TUI (ConPTY arrows) | Native clipboard, stable webview, background update survival, ConPTY arrow keys, ARM64 support |

---

## 4. Differentiation Analysis

| Dimension | Commercial SaaS-Led (Anthropic, OpenAI, Google, GitHub) | Protocol/Extensibility-Led (OpenCode, Pi, Qwen) | Provider-Agnostic / Skill-Led (Kimi, DeepSeek) |
|-----------|----------------------------------------------------------|--------------------------------------------------|------------------------------------------------|
| **Core Focus** | Polish, billing integration, enterprise SSO, safety guardrails | ACP/MCP protocol compliance, self-hostable server, plugin composability | Model routing across providers, skill pack ecosystem, unified settings |
| **Target User** | Enterprise developers, paid tier subscribers, IDE-integrated workflows | Power users, self-hosters, tool builders, protocol implementers | Multi-provider users, cost-optimizers, skill authors |
| **Technical Approach** | Proprietary sandbox (bwrap), closed model endpoints, managed auth | Open protocol servers (ACP), local-first, provider-agnostic SDKs | OpenAI-compatible abstraction layer, skill registry, provider capability detection |
| **Release Cadence** | Stable + alpha channels, rapid patches (Copilot 3 in 24h) | PR-driven API waves, no fixed schedule, verification videos | Pre-release gates, security scans, dependency patch cycles |
| **Pain Point Profile** | Billing entitlement bugs, sandbox regressions, auth loops | Desktop background stability, session history, edit tool races | Provider param leakage, rate-limit opacity, composer reliability |
| **Differentiator** | `/code-review` backgrounding (Claude), customizable status line demand (Codex), caretaker-triage orchestrator (Gemini), Auto-mode model pool (Copilot) | Durable session archival (OpenCode), abortable provider retries (Pi), Goal v3 lifecycle (Qwen), unified `/skills` manager (DeepSeek) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Commercial Maturity** | **Claude Code**, **OpenAI Codex**, **Gemini CLI**, **GitHub Copilot CLI** | • 100+ 👍 on top issues (Claude #13843, Codex #17827)<br>• Daily/alpha releases with dedicated triage<br>• Automated PR agents landing fixes (Claude `emirhanempi5285-glitch`, Codex `copyberry[bot]`)<br>• Enterprise billing/auth integrations live |
| **High Momentum / Protocol Maturity** | **OpenCode**, **Pi** | • Coordinated API surface expansion (12 PRs in 24h for OpenCode)<br>• Deep protocol work (ACP client, MCP, OAuth 2.1)<br>• Active security/perf PRs (abortable retries, temp-dir isolation) |
| **Rapid Iteration / Pre-Release** | **Qwen Code**, **DeepSeek TUI**, **Kimi Code** | • Qwen: Autofix CI bots, Goal v3 protocol design, nightly pipeline (though failing)<br>• DeepSeek: v0.9.1 security gate, context diet initiative (7 sub-issues), skill pack v5<br>• Kimi: Immediate hotfix for provider param leakage, per-sub-agent model routing demand |
| **Early / Niche** | **Grok Build** | No public activity in window |

**Maturity Signal**: Commercial tools lead on polish/billing but carry regression debt from sandbox/auth complexity. Protocol-led tools lead on architectural coherence (ACP/MCP) but struggle with Desktop background stability. Qwen/DeepSeek show strongest *process* investment (autofix bots, security gates, context diet).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Background agents are the new concurrency primitive** | 5+ tools investing in subagent lifecycle, tool-only telemetry, dismissible agents | **Adopt now**: Design workflows around persistent, interruptible background agents; demand model pinning on resume |
| **Protocol standardization > proprietary APIs** | ACP/MCP adoption across OpenCode, Pi, Qwen, Gemini, Codex (RFC 8707) | **Bet on ACP/MCP**: Tools implementing ACP *client* consumption (not just serving) will compose best |
| **Compaction is a reliability feature, not UX** | 4 tools report compaction failures at 100%+ context (Claude, Pi, Copilot, Codex rate limits) | **Require**: Proactive compaction with cache preservation; configurable thresholds; token accounting transparency |
| **Windows/WSL2 is the compatibility litmus test** | Copilot (5 issues), Codex (webview/SSH), Gemini (PowerShell), DeepSeek (ConPTY) | **Validate**: Any tool claiming cross-platform must pass ARM64 WSL2 clipboard, ConPTY arrows, background update survival |
| **Multi-account isolation is table stakes for enterprise** | Claude (PR #80326), Copilot (MCP policy), OpenCode (project metadata), Pi (session metadata) | **Mandate**: Per-account config dirs, org policy handshake visibility, workspace-scoped auth |
| **Provider-agnostic parameter handling is breaking** | Kimi (prompt_cache_key leakage), DeepSeek (provider-opaque settings), Codex (custom provider flags) | **Demand**: Capability negotiation / feature detection at provider connect; automatic param scoping |
| **Automated CI resilience is a competitive advantage** | Qwen (autofix retry + base update bots), Claude (autonomous PR agents), Codex (copyberry[bot] platform hardening) | **Invest**: Auto-retry on infra failure, auto-merge base fixes, automated model catalog sync |

---

## Recommendation Summary

| For... | Prioritize Tools |
|--------|------------------|
| **Enterprise deployment (SSO, billing, audit)** | Claude Code, GitHub Copilot CLI, Gemini CLI |
| **Self-hosted / air-gapped / protocol control** | OpenCode, Pi, Qwen Code |
| **Multi-provider cost optimization** | Kimi Code, DeepSeek TUI, Pi (constrained sampling) |
| **Cutting-edge agent orchestration** | Qwen Code (Goal v3), OpenCode (durable sessions), Claude Code (Task tools) |
| **Windows-native daily driver** | *Wait*: Copilot CLI & Codex have active regressions; Gemini CLI PowerShell docs just landed |
| **Extensibility / plugin ecosystem** | DeepSeek TUI (unified `/skills`), OpenCode (ACP client), Pi (extension gallery) |

**Bottom Line**: The ecosystem is converging on **ACP/MCP protocols**, **background agent reliability**, and **cross-surface context** as the three pillars of 2026 H2 differentiation. Tools that solve the "compaction at 100%" and "Windows parity" gaps while delivering protocol-compliant agent orchestration will lead the next maturity wave.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-07-23)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **#1298** `fix(skill-creator): run_eval.py recall=0%` | Fixes the skill-creator evaluation pipeline (`run_eval.py`, `run_loop.py`, `improve_description.py`) which incorrectly reports 0% recall for all skill descriptions, breaking the description-optimization loop. | Core infrastructure bug affecting all skill authors; 10+ independent reproductions cited (#556). Fixes Windows stream reading, trigger detection, and parallel workers. | 🟢 **OPEN** — [PR #1298](https://github.com/anthropics/skills/pull/1298) |
| 2 | **#514** `document-typography` | Typographic quality control for AI-generated documents: prevents orphan words, widow paragraphs, numbering misalignment. | Addresses a universal pain point in every document Claude generates; users rarely request good typography explicitly. | 🟢 **OPEN** — [PR #514](https://github.com/anthropics/skills/pull/514) |
| 3 | **#1367** `self-audit` (v1.3.0) | Mechanical file verification + four-dimension reasoning quality gate (correctness, completeness, consistency, clarity). Universal across projects/stacks/models. | Meta-skill for output quality assurance; combines mechanical checks with structured reasoning audit in damage-severity priority. | 🟢 **OPEN** — [PR #1367](https://github.com/anthropics/skills/pull/1367) |
| 4 | **#486** `odt` (OpenDocument Text) | Create, fill, read, convert ODT/ODS files; triggers on "ODT", "OpenDocument", "LibreOffice", ISO-standard document requests. | Fills open-format document gap; complements existing DOCX/PDF skills. | 🟢 **OPEN** — [PR #486](https://github.com/anthropics/skills/pull/486) |
| 5 | **#723** `testing-patterns` | Comprehensive testing skill: Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing. | Broad coverage of modern testing stack; addresses "what to test vs. what NOT to test" — a frequent developer pain point. | 🟢 **OPEN** — [PR #723](https://github.com/anthropics/skills/pull/723) |
| 6 | **#1302** `color-expert` | Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL, CSS), color spaces (OKLCH, OKLAB, CAM16), accessibility, harmonies. | Niche but deep domain skill; useful for design systems, data viz, branding, UI work. | 🟢 **OPEN** — [PR #1302](https://github.com/anthropics/skills/pull/1302) |
| 7 | **#525** `pyxel` (retro game dev) | MCP server for Pyxel retro game engine; write → run_and_capture → inspect → iterate workflow for 8-bit/pixel-art games. | Novel creative domain; leverages MCP integration for interactive game development loop. | 🟢 **OPEN** — [PR #525](https://github.com/anthropics/skills/pull/525) |
| 8 | **#210** `frontend-design` (improvement) | Revises clarity, actionability, internal coherence; ensures every instruction is followable in a single conversation. | Quality-of-life improvement for an existing high-use skill; focuses on token efficiency and behavioral steerability. | 🟢 **OPEN** — [PR #210](https://github.com/anthropics/skills/pull/210) |

> **Note:** All top PRs remain **OPEN** as of 2026-07-23, indicating a review bottleneck or maintainer capacity constraint.

---

## 2. Community Demand Trends — From Issues (Ranked by Comments)

| Rank | Issue | Theme | Signal Strength |
|------|-------|-------|-----------------|
| 1 | **#492** Security: Community skills under `anthropic/` namespace enable trust abuse | **Supply-chain security / namespace governance** | 43 comments, 2 👍 — *Highest engagement; critical trust boundary concern* |
| 2 | **#228** Enable org-wide skill sharing in Claude.ai | **Distribution / collaboration UX** | 14 comments, 7 👍 — *Strong demand for team-level skill management* |
| 3 | **#556** `run_eval.py`: 0% trigger rate across all queries | **Skill-creator tooling reliability** | 12 comments, 7 👍 — *Blocks skill authoring workflow; root cause of #1298* |
| 4 | **#189** `document-skills` & `example-skills` install identical content → duplicates | **Packaging / deduplication** | 6 comments, 9 👍 — *High 👍/comment ratio signals widespread annoyance* |
| 5 | **#1329** Proposal: `compact-memory` (symbolic notation for agent state) | **Context compression / long-running agents** | 9 comments — *Emerging pattern for persistent agent memory* |
| 6 | **#202** (CLOSED) `skill-creator` should follow best practices | **Skill-authoring UX / token efficiency** | 8 comments — *Resolved but signals desire for opinionated skill templates* |
| 7 | **#1061** Windows compatibility: skill-creator scripts fail (PATHEXT, cp1252, select) | **Cross-platform support** | 3 comments, 2 👍 — *Recurring theme across #362, #1050, #1099, #1298, #1323* |
| 8 | **#16** Expose Skills as MCPs | **Interoperability / protocol standardization** | 4 comments — *Architectural request for MCP-first skill exposure* |

**Trend Synthesis:**
1. **Trust & Security** (#492) — Community demands clear provenance boundaries between official and community skills.
2. **Authoring Tooling Reliability** (#556, #1298, #1061, #1323) — The skill-creator pipeline is fundamentally broken on Windows and reports false metrics, blocking contribution.
3. **Distribution & Sharing** (#228, #189) — Teams need org-level skill libraries and deduplicated plugin packs.
4. **Cross-Platform Parity** — Windows support is a systemic gap across multiple PRs/issues.
5. **Agent Memory & Context Management** (#1329) — Growing interest in skills that manage long-running agent state efficiently.

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval pipeline fix | **Critical infrastructure**; blocks all skill authoring; 10+ reproductions; multiple dependent PRs (#1099, #1050, #1323, #362, #361) address same root cause. |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal utility (every document); no existing skill covers this; high user-value/low-complexity. |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Broad developer appeal; comprehensive scope; aligns with "testing trophy" modern best practices. |
| **[#486](https://github.com/anthropics/skills/pull/486)** | `odt` | Completes open-format document triad (DOCX/PDF/ODT); clear trigger definitions; active maintenance (updated 2026-04-14). |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | Self-contained, no external deps; deep domain coverage; recent activity (updated 2026-07-21). |
| **[#525](https://github.com/anthropics/skills/pull/525)** | `pyxel` | Novel MCP-integrated creative workflow; author (kitao) is Pyxel maintainer; long update history (updated 2026-07-15). |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is for a trustworthy, cross-platform skill authoring and distribution pipeline — fixing the broken `skill-creator` evaluation loop, establishing secure namespace governance, and enabling org-level skill sharing — so that domain-specific skills (typography, testing, ODT, color, retro gaming) can be reliably created, validated, and adopted at scale.**

---

# Claude Code Community Digest — 2026-07-23

---

## 1. Today's Highlights

- **v2.1.218 released**: `/code-review` now runs as a background subagent, keeping the main conversation clean and preserving stacked slash commands as review targets. Accessibility improved with screen-reader announcements for deleted text.
- **Fable 5 billing regression on Max plans** (#79337, 35 comments) dominates discussion: users report being silently downgraded to Opus 4.8 with "usage credits required" errors on the very day Fable 5 became standard for Max.
- **Critical sandbox regressions** in 2.1.216/217 continue to surface: `bwrap` mkdir failures on non-root installs (#79997), Bash `E2BIG` spawn errors scaling with repo size (#78253), and Task tools intermittently disappearing mid-session (#80401, #80305).

---

## 2. Releases

### v2.1.218
| Change | Impact |
|--------|--------|
| `/code-review` → background subagent | Review output no longer clutters main conversation; stacked slash commands preserved as review target |
| Screen-reader announcements for deletions (`Option+Delete`, `Ctrl+W`, `Cmd+Backspace`) | Accessibility improvement for visually impaired developers |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#80002](https://github.com/anthropics/claude-code/issues/80002) | **macOS: Filesystem extension `tools/call` never dispatched** (tools/list works) | Blocks first-party MCP filesystem access on Desktop; 57 comments, 25 👍 | High — core Desktop integration broken |
| [#79337](https://github.com/anthropics/claude-code/issues/79337) | **Fable 5 "usage credits required" on Max plan** (silent downgrade to Opus 4.8) | Billing regression on launch day of Max-included Fable 5; 35 comments, 9 👍 | Critical — paid feature unusable |
| [#13843](https://github.com/anthropics/claude-code/issues/13843) | **Share conversation context: Claude.ai → Claude Code** | Long-standing request (99 👍) for cross-platform context continuity | High — workflow friction for multi-surface users |
| [#79997](https://github.com/anthropics/claude-code/issues/79997) | **2.1.216 sandbox: `bwrap: Can't mkdir /opt/.claude`** on non-root installs under root-owned dirs | Regression killing every Bash tool call before command runs; 3 comments, 2 👍 | High — blocks CLI usage on common permission setups |
| [#80404](https://github.com/anthropics/claude-code/issues/80404) | **Windows: ~200% CPU spin after hibernate/resume** (libuv `uv_backend_timeout()==0`) | Event-loop starvation; same root cause as closed macOS #62308; 4 comments | Medium — laptop users hit daily |
| [#78253](https://github.com/anthropics/claude-code/issues/78253) | **Bash `spawn E2BIG`** — sandbox profile size scales with git repo file count | Large repos (>10k files) fail Bash tool; gated by git-repo detection; 1 comment, 5 👍 | Medium — monorepo teams blocked |
| [#80305](https://github.com/anthropics/claude-code/issues/80305) | **Task tools gated OFF in real-TTY CLI**; `CLAUDE_CODE_ENABLE_TASKS=1` ineffective | Background agent workflows broken in terminal; only workaround disables paid entitlements; 1 comment, 1 👍 | High — power users lose core feature |
| [#80401](https://github.com/anthropics/claude-code/issues/80401) | **Built-in Task tools intermittently unregister mid-session** (2.1.217→2.1.218) | Live task display breaks; tools vanish during active work; 1 comment | High — regression in latest release |
| [#77966](https://github.com/anthropics/claude-code/issues/77966) | **OAuth login loop on Linux/IntelliJ** — state param dropped after "sign in again" redirect | Blocks authentication on Linux IDE integrations; 8 comments, 6 👍 | Medium — IDE users stuck |
| [#80055](https://github.com/anthropics/claude-code/issues/80055) | **Cannot purchase API credits** — card auth succeeds, purchase fails (Japan, multiple cards) | Billing pipeline broken for Japanese users; 3 comments | Medium — regional revenue impact |

---

## 4. Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| [#18217](https://github.com/anthropics/claude-code/pull/18217) | **Feature** | `/planwith <prompt>` — inline plan mode prompts (avoids two-step `/plan` → prompt workflow) |
| [#80326](https://github.com/anthropics/claude-code/pull/80326) | **Feature** | `account-profiles` plugin — isolated `CLAUDE_CONFIG_DIR` per account (personal/work/client) |
| [#80196](https://github.com/anthropics/claude-code/pull/80196) | **Fix** | Auto-compact never triggers despite "100% context used" statusline (v2.1.153, 200K mode) |
| [#80195](https://github.com/anthropics/claude-code/pull/80195) | **Fix** | Instant usage-limit hit with Max subscription (billing metering bug) |
| [#80241](https://github.com/anthropics/claude-code/pull/80241) | **Fix** | Console scrolls to top of history when Claude adds text (TUI regression) |
| [#80353](https://github.com/anthropics/claude-code/pull/80353) | **Fix** | GCP gateway: stop deployment on checksum mismatch; preserve cleanup |
| [#80112](https://github.com/anthropics/claude-code/pull/80112) | **Fix** | Devcontainer firewall init resilient to transient DNS failures |
| [#80294](https://github.com/anthropics/claude-code/pull/80294) | **Docs** | Fix broken npmjs.com link via Wayback Machine |
| [#80229](https://github.com/anthropics/claude-code/pull/80229) | **Docs** | Fix broken npmjs.com link via Wayback Machine (duplicate) |

> **Note**: Several PRs (#80196, #80195, #80241) are from `emirhanempi5285-glitch` marked as "EMP_Agent Autonomous PR Contribution" — automated fix generation appears active.

---

## 5. Feature Request Trends (from Issues)

| Trend | Evidence | Priority Signal |
|-------|----------|-----------------|
| **Cross-surface context sync** | #13843 (99 👍, 25 comments) — share Claude.ai ↔ Claude Code context | ★★★★★ |
| **Agent/session lifecycle control** | #66202 (9 👍) — mark agent sessions complete/dismiss; #77724 — steer in-progress turns immediately | ★★★★☆ |
| **Model pinning on resume** | #76363 — `--resume` should pin or warn on model change (cost/quality routing) | ★★★★☆ |
| **Multi-account / profile isolation** | #80326 (PR) — account-profiles plugin; recurring auth/session collision reports | ★★★★☆ |
| **Plan-mode UX improvements** | #18217 (PR) — `/planwith` inline args; #77724 — interruptible turns | ★★★☆☆ |
| **Plugin directory reliability** | #80263, #80423 — published plugins not propagating; name-collision bugs | ★★★☆☆ |

---

## 6. Developer Pain Points (High-Frequency Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Sandbox / bwrap regressions** | 4+ issues in 24h | #79997 (mkdir), #78253 (E2BIG), #79606 (uid_map), #80432 (EnterWorktree prompts) |
| **Task/background agent instability** | 3+ issues | #80305 (gated off), #80401 (unregister mid-session), #66202 (no dismiss) |
| **Billing / entitlement mismatches** | 3+ issues | #79337 (Fable 5 on Max), #80195 (instant limit), #80055 (credit purchase) |
| **Auth/OAuth loops** | 3+ issues | #77966 (Linux/IntelliJ), #79688 (VS Code expired token), #56897 (Max→Free downgrade) |
| **Prompt suggestions / ghost text broken** | 3+ issues | #77144 (Win dead), #79919 (GUI never), #72495 (rate-limit suppresses) |
| **Session fork/resume corruption** | 2+ issues | #80427 (fork on multi-window resume), #80431 (restores after `/clear`) |
| **Windows Desktop/MSIX instability** | 2+ issues | #80403 (webview white screen), #80426 (race condition on start) |

---

**TL;DR**: v2.1.218 ships a solid UX improvement (`/code-review` backgrounding), but the last 24h reveal a cluster of **sandbox regressions**, **Task tool instability**, and a **day-one Fable 5 billing failure** on Max plans. Multi-account workflows and cross-surface context remain the top unmet feature demands.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-23

## 1. Today's Highlights

The team shipped four rapid alpha releases (`0.146.0-alpha.1` through `alpha.4`) in a single day, signaling an active stabilization push. Community attention remains concentrated on three persistent pain points: **macOS SQLite log churn** (44 comments, ongoing since v0.142.0), **OAuth authentication failures** on multiple platforms (45 👍), and a **weekly rate-limit regression** that mimics the old 5-hour cap. On the feature side, a **customizable status line** request has garnered 119 👍 — the highest engagement in the backlog — while RTL support for Arabic/Hebrew and VS Code workspace-scoped chats both exceed 40 👍.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.146.0-alpha.4` | Alpha | Latest in a same-day quartet of alpha cuts; no changelog published yet. |
| `rust-v0.146.0-alpha.3` | Alpha |  |
| `rust-v0.146.0-alpha.2` | Alpha |  |
| `rust-v0.146.0-alpha.1` | Alpha |  |

> **Takeaway:** Four alphas in 24h suggests either a regression hunt or a feature branch landing. Watch for a beta tag or release notes in the next cycle.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#29532](https://github.com/openai/codex/issues/29532) | **macOS: Persistent SQLite TRACE log churn** | Logs fill `~/.codex/logs_2.sqlite` continuously after v0.142.0; partial fixes landed but root cause remains. | 44 comments · 8 👍 |
| [#17827](https://github.com/openai/codex/issues/17827) | **Customizable status line (TUI)** | Parity with Claude Code’s scriptable status bar (tokens, model, git branch, rate limits). Highest-voted open enhancement. | 31 comments · **119 👍** |
| [#31573](https://github.com/openai/codex/issues/31573) | **OAuth issuer validation fails** | Blocks CLI login for Free-tier users; `token_exchange_failed` on `auth.openai.com`. | 19 comments · 45 👍 |
| [#33685](https://github.com/openai/codex/issues/33685) | **Weekly limit draining at 5-hour-limit speed** | Post-5-hour-limit removal, weekly quota burns at same rate — possible accounting bug. | 19 comments · 9 👍 |
| [#25319](https://github.com/openai/codex/issues/25319) | **Scope VS Code chats to current workspace** | Chat history leaks across projects; critical for multi-repo workflows. | 17 comments · 47 👍 |
| [#19504](https://github.com/openai/codex/issues/19504) | **Full RTL support for Arabic/Hebrew** | Text alignment, punctuation, and reading direction broken in both Chat and Codex panels. | 20 comments · 19 👍 |
| [#27597](https://github.com/openai/codex/issues/27597) | **IDE extension fails in VS Code Remote-SSH** | Extension won’t load over SSH while CLI works; Linux host, ChatGPT Plus. | 16 comments · 4 👍 |
| [#26764](https://github.com/openai/codex/issues/26764) | **Windows login: token exchange failed** | `https://auth.openai.com/oauth/token` request fails on Windows Desktop app. | 15 comments |
| [#14745](https://github.com/openai/codex/issues/14745) | **Windows webview ServiceWorker error** | Extension webview fails to load on Windows 10/Server 2016 (v26.x). | 13 comments · 6 👍 |
| [#32031](https://github.com/openai/codex/issues/32031) | **Multi-agent v2 hides model overrides** | Sub-agent model selection undiscoverable; natural override call shape rejected. UX regression for `gpt-5.6-sol/terra`. | 5 comments · 14 👍 |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Area | Summary |
|---|----|------|---------|
| [#34852](https://github.com/openai/codex/pull/34852) | **Wake sleeping threads for queued agent mail** | Multi-agent | Idle threads with durable sleeps now resume when agent work arrives, even if message would stay queued. |
| [#34851](https://github.com/openai/codex/pull/34851) | **Batch metadata for plugin app summaries** | Plugins | Loads app metadata via authenticated batch API (100/batch), caches on failure, preserves all declared apps. |
| [#34850](https://github.com/openai/codex/pull/34850) | **Disable image generation for Free-plan accounts** | Auth/Billing | Skips `image_generation` tool registration when cached auth shows Free plan; other checks unchanged. |
| [#34849](https://github.com/openai/codex/pull/34849) | **Cache remote plugin catalogs by scope** | Plugins | Disk-caches global/user/workspace catalogs (3h TTL, scope+account keys), background refresh, warm at startup. |
| [#31817](https://github.com/openai/codex/pull/31817) | **Update models.json** | Models | Automated model catalog sync (github-actions[bot]). |
| [#34847](https://github.com/openai/codex/pull/34847) | **Guardian model limits for review sessions** | Multi-agent | Clears `model_context_window`/`model_auto_compact_token_limit` when Guardian model differs from parent. |
| [#34846](https://github.com/openai/codex/pull/34846) | **Custom providers opt into standalone web search** | Providers | Adds `supports_standalone_web_search` flag (default false); enables `web.run` for opted-in Responses providers. |
| [#34845](https://github.com/openai/codex/pull/34845) | **Track multi-agent mode in world state** | Multi-agent | New `multi_agent_mode` world-state section diffs/retains/restores effective mode across history changes. |
| [#34840](https://github.com/openai/codex/pull/34840) | **Persisted thread pinning in app server** | Threads | Adds `isPinned` to thread responses, `thread/metadata/update` to toggle, filter + cursor pagination on `thread/list`. |
| [#34839](https://github.com/openai/codex/pull/34839) | **Preserve user input on MCP startup interrupt** | MCP | Builds/retains MCP tool list & router in step snapshots so interrupted turns don’t lose submitted input. |

> **Pattern:** The `copyberry[bot]` PRs dominate — internal automation landing platform hardening (caching, auth gating, multi-agent state, plugin infra). Few community-authored PRs in this window.

---

## 5. Feature Request Trends

| Cluster | Representative Issues | Signal |
|---------|----------------------|--------|
| **TUI/CLI Customization** | [#17827](https://github.com/openai/codex/issues/17827) status line, [#26311](https://github.com/openai/codex/issues/26311) pinned input, [#34310](https://github.com/openai/codex/issues/34310) disable `autoResolutionMs` | 130+ 👍 combined; developers want scriptable, persistent UI chrome |
| **Workspace/Context Scoping** | [#25319](https://github.com/openai/codex/issues/25319) VS Code workspace chats, [#33727](https://github.com/openai/codex/issues/33727) missing sidebar projects | 48 👍; multi-repo and project isolation critical |
| **Internationalization** | [#19504](https://github.com/openai/codex/issues/19504) RTL support | 19 👍; Arabic/Hebrew users blocked |
| **Desktop App Parity** | [#24513](https://github.com/openai/codex/issues/24513) inline diffs, [#19645](https://github.com/openai/codex/issues/19645) scrollable output | CLI shows diffs/scroll; Desktop does not |
| **MCP/Plugin Ecosystem** | [#33403](https://github.com/openai/codex/issues/33403) RFC 8707 resource param, [#29122](https://github.com/openai/codex/issues/29122) prerelease CLI in stable ext | OAuth + versioning friction for server authors |
| **Rate Limit Transparency** | [#33685](https://github.com/openai/codex/issues/33685) weekly limit regression, [#34743](https://github.com/openai/codex/issues/34743) Ultra mode waste | Users cannot predict or audit consumption |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Authentication Instability** — OAuth/token exchange fails on Windows ([#26764](https://github.com/openai/codex/issues/26764)), macOS ([#31573](https://github.com/openai/codex/issues/31573)), and MCP refresh ([#33403](https://github.com/openai/codex/issues/33403)). Cross-platform auth remains fragile.

2. **Windows Desktop App Quality** — ServiceWorker webview crashes ([#14745](https://github.com/openai/codex/issues/14745)), WSL path mapping broken ([#29639](https://github.com/openai/codex/issues/29639)), `taskkill.exe`/`conhost.exe` storms ([#33778](https://github.com/openai/codex/issues/33778)), background updates kill tray without relaunch ([#33321](https://github.com/openai/codex/issues/33321)).

3. **Rate Limit Opacity** — Weekly quota burns at legacy 5-hour velocity ([#33685](https://github.com/openai/codex/issues/33685)); Ultra mode “wastes usage” with no visible work ([#34743](https://github.com/openai/codex/issues/34743)). No dashboard or CLI flag to inspect consumption.

4. **Multi-Agent v2 UX Regression** — Model overrides hidden/rejected ([#32031](https://github.com/openai/codex/issues/32031)); Guardian review uses wrong context window ([#34847](https://github.com/openai/codex/pull/34847)). Sub-agent workflows feel unfinished.

5. **Extension/Remote Gaps** — Remote-SSH load failure ([#27597](https://github.com/openai/codex/issues/27597)), Codespace crashes ([#27892](https://github.com/openai/codex/issues/27892)), Chrome sandbox errors ([#32876](https://github.com/openai/codex/issues/32876)), new chat creation broken on Windows ([#23209](https://github.com/openai/codex/issues/23209)).

6. **macOS Log Churn** — SQLite tracing writes continuously post-v0.142.0 ([#29532](https://github.com/openai/codex/issues/29532)), surviving multiple “fix” attempts. Disk I/O and noise concern for long-running sessions.

---

*Generated from GitHub data as of 2026-07-23. Links point to live issues/PRs on `openai/codex`.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-23

## 1. Today's Highlights
Three releases shipped in the last 24 hours: stable **v0.52.0**, preview **v0.53.0-preview.0**, and a nightly build. The preview introduces a critical fix for A2A tool-response handling that prevented 400 Bad Request errors, while the stable release adds foundational modules for the new "caretaker-triage" LLM orchestrator. Security hardening landed in `v0.53.0-preview.0` to block shell-variable expansion bypasses (GHSA-wpqr-6v78-jr5g).

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.52.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0)** | Stable | • Exclude transient CI configs from workspace context ([#28216](https://github.com/google-gemini/gemini-cli/pull/28216))<br>• Caretaker-triage worker core modules ([#28472](https://github.com/google-gemini/gemini-cli/pull/28472)) |
| **[v0.53.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0-preview.0)** | Preview | • Group cancelled tool responses & coalesce roles to prevent 400 errors ([#28407](https://github.com/google-gemini/gemini-cli/pull/28407))<br>• Caretaker-triage LLM orchestrator & container build ([#28472](https://github.com/google-gemini/gemini-cli/pull/28472)) |
| **v0.52.0-nightly.20260723** | Nightly | • Sequentially verify cached credentials & restore `GOOGLE_APPLICATION_CREDENTIALS` fallback ([#28472](https://github.com/google-gemini/gemini-cli/pull/28472))<br>• Add `eval:coverage` command for built-in tool coverage reporting ([#28169](https://github.com/google-gemini/gemini-cli/pull/28169)) |

## 3. Hot Issues (Top 10 by Community Signal)
| Issue | Priority | Why It Matters | Community Reaction |
|-------|----------|----------------|-------------------|
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent reports `GOAL` success after hitting `MAX_TURNS` | P1 | Masks real failures; breaks trust in subagent autonomy | 12 comments, 2 👍 — “need-retesting” |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs indefinitely on simple tasks | P1 | Blocks core workflow; users disable subagents as workaround | 8 comments, 8 👍 — high pain |
| **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** Robust component-level evaluations (76 behavioral evals across 6 models) | P1 | Foundation for regression prevention; eval infra maturity | 7 comments — Epic tracking |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** Assess AST-aware file reads/search/mapping value | P2 | Could reduce turns, token noise, improve code navigation | 7 comments, 1 👍 — investigation Epic |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Gemini rarely invokes custom skills/sub-agents autonomously | P2 | Undermines extensibility model; requires explicit prompting | 6 comments |
| **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory retries low-signal sessions forever | P2 | Wastes quota, pollutes memory, no back-off | 5 comments |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell commands stuck at “Waiting input” after completion | P1 | Frequent UI freeze; affects basic CLI usage | 4 comments, 3 👍 |
| **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** Browser agent: no session takeover/lock recovery | P3 | Persistent profile lock blocks reuse; fail-fast only | 4 comments |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent fails on Wayland | P1 | Platform gap for Linux/Wayland users | 4 comments, 1 👍 |
| **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)** Symlinked agent files in `~/.gemini/agents/` not recognized | P2 | Breaks dotfile management workflows | 4 comments |

## 4. Key PR Progress (Top 10 by Impact/Recency)
| PR | Status | Summary |
|----|--------|---------|
| **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403)** | Open (P1, Security) | Block `$VAR`/`${VAR}` expansion bypass (GHSA-wpqr-6v78-jr5g); harden dedup workflow |
| **[#28410](https://github.com/google-gemini/gemini-cli/pull/28410)** | Open (P1) | Shorten MCP `tools/list` discovery timeout → fail fast on unresponsive servers |
| **[#28406](https://github.com/google-gemini/gemini-cli/pull/28406)** | Open (P1) | Apply `modelIdResolutions` to tool sub-agent configs (fixes preview-model access for API-key users) |
| **[#28485](https://github.com/google-gemini/gemini-cli/pull/28485)** | Open (P2) | Add `gemini-3.5-flash` to model selector for all users (legacy path fix) |
| **[#28469](https://github.com/google-gemini/gemini-cli/pull/28469)** | Open | Rotate session ID on model fallback → prevents stateful API errors on retry |
| **[#28509](https://github.com/google-gemini/gemini-cli/pull/28509)** | Open | Filter `thought:true` parts from `getHistoryTurns` when context management disabled |
| **[#28309](https://github.com/google-gemini/gemini-cli/pull/28309)** | **Closed** | Fix CJK hard line-wrapping & `__bold__` syntax in terminal Markdown renderer |
| **[#28447](https://github.com/google-gemini/gemini-cli/pull/28447)** | Open (P2, Docs) | Add Windows PowerShell troubleshooting for `gemini` command post-install |
| **[#28169](https://github.com/google-gemini/gemini-cli/pull/28169)** | **Closed** | Add `eval:coverage` CLI command (cross-references eval inventory ↔ tool registry) |
| **[#28431](https://github.com/google-gemini/gemini-cli/pull/28431)** | Open | Cloud Run Job, Workflows, Dockerfile for SSR Code Generation Pipeline infra |

## 5. Feature Request Trends
1. **Subagent/skill autonomy** — Multiple issues (#21968, #22093, #20195) ask for smarter, opt-in subagent invocation and better skill discovery.
2. **AST-aware tooling** — Epic #22745/#22746 explores structured code navigation (method-level reads, symbol search) to cut turns and tokens.
3. **Evaluation maturity** — #24353 pushes component-level evals beyond behavioral tests; coverage reporting (#28169) now automated.
4. **Memory system hardening** — Auto Memory needs deterministic redaction (#26525), invalid-patch quarantine (#26523), and retry back-off (#26522).
5. **Browser agent resilience** — Session takeover (#22232), Wayland support (#21983), settings.json compliance (#22267) form a cluster.
6. **Cross-platform polish** — Windows PowerShell docs (#28447), symlink agent loading (#20079), terminal resize performance (#21924).

## 6. Developer Pain Points (High-Frequency Frustrations)
- **Agent hangs/freezes** — Generalist agent stalls (#21409), shell “Waiting input” ghost state (#25166), browser agent lock-ups (#22232).
- **Silent misreporting** — Subagent claims `GOAL` success after `MAX_TURNS` (#22323); Auto Memory silently skips bad patches (#26523).
- **Configuration ignored** — Browser agent disregards `settings.json` overrides (#22267); subagents activate despite `disabled` config (#22093).
- **Platform gaps** — Wayland browser failure (#21983), Windows PowerShell install friction (#28447), symlink agent discovery (#20079).
- **Token/turn waste** — Model scatters tmp scripts (#23571), 400 errors at >128 tools (#24246), no AST precision (#22745).
- **Security anxiety** — Variable-expansion bypass (GHSA-wpqr-6v78-jr5g), Auto Memory sending secrets to model before redaction (#26525).

---

*Data sourced from `github.com/google-gemini/gemini-cli` — releases, issues, and PRs updated 2026-07-23.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-23

## Today's Highlights
Three patch releases (v1.0.74-1 through -3) landed in the last 24 hours, introducing first-run sandbox opt-in, Gemini 3.6 Flash support, and fixes for session multiplexing dialog leaks. Meanwhile, the issue tracker shows a spike in Windows/WSL2 regressions (clipboard, resume, crashes), a resurgence of the infinite React/Ink render loop, and growing demand for observability around subagent credit usage and Auto-mode model selection.

---

## Releases
| Version | Key Changes |
|---------|-------------|
| **v1.0.74-1** | • First-run splash screen to opt into default sandbox<br>• Added support for `gemini-3.6-flash` model<br>• Session multiplexing: open dialogs no longer leak across sessions; pickers reopen on switch<br>• `$` interactive shell shortcut improved |
| **v1.0.74-2** | Fixes and changes (details in changelog) |
| **v1.0.74-3** | Fixes and changes (details in changelog) |

> **Note:** Rapid patch cadence suggests active stabilization after v1.0.73.

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#443](https://github.com/github/copilot-cli/issues/443) | **Built-in PDF Reading Support** | High-demand feature for academic/technical workflows; avoids manual `pdftotext` installs. | 33 👍, 6 comments — top-voted open issue |
| [#3534](https://github.com/github/copilot-cli/issues/3534) | **WSL2 ARM64: `/copy` fails via `clip.exe` quoting bug** | Blocks clipboard on ARM64 WSL2; affects growing developer segment. | 4 👍, 5 comments; PR #4228 withdrawn (wrong scope) |
| [#4016](https://github.com/github/copilot-cli/issues/4016) | **BYOK (`COPILOT_PROVIDER_*`) rejected in `--acp` mode** | Regression (1.0.61–1.0.68) breaks enterprise/custom-provider auth in ACP. | 4 👍, 5 comments; same class as #3048, #3902 |
| [#4163](https://github.com/github/copilot-cli/issues/4163) | **Zombie child processes accumulate (~2/min)** | Resource leak degrades long-running sessions; signals process-management bug. | 2 👍, 3 comments |
| [#4206](https://github.com/github/copilot-cli/issues/4206) | **Env footer stuck “Loading:” under org MCP policy** | Enterprise MCP handshake stall masks ready state; confuses users. | 2 👍, 2 comments |
| [#1688](https://github.com/github/copilot-cli/issues/1688) | **Configurable auto-compaction threshold** | Critical for high-capacity models (Opus 4.6) where latency spikes at 45–60% context. | 5 👍, 2 comments; open since Feb |
| [#4218](https://github.com/github/copilot-cli/issues/4218) | **Configure model pool for Auto mode** | Cost/behavior unpredictability; users want allow-list for Auto model selection. | 6 👍, 0 comments (new, high signal) |
| [#4207](https://github.com/github/copilot-cli/issues/4207) | **Per-subagent AI credit breakdown in `/usage`** | Observability gap: subagent costs hidden in cumulative total. | 6 👍, 0 comments |
| [#4222](https://github.com/github/copilot-cli/issues/4222) | **Regression: Infinite React/Ink render loop (v1.0.72+)** | Main pane freezes, output swallowed; previously fixed in #2802 (v1.0.31). | 0 👍, 0 comments — **critical stability regression** |
| [#4219](https://github.com/github/copilot-cli/issues/4219) | **Windows crash when `notifications` enabled** | Hard crash (access violation) on native toast path; blocks Windows users. | 0 👍, 0 comments — **crash severity** |

---

## Key PR Progress
Only two PRs updated in the last 24h; one is a withdrawn attempt at #3534.

| PR | Status | Summary |
|----|--------|---------|
| [#4228](https://github.com/github/copilot-cli/pull/4228) | **Closed (Withdrawn)** | Attempted doc fix for #3534; withdrawn because change needed in private clipboard runtime, not docs. |
| [#3163](https://github.com/github/copilot-cli/pull/3163) | **Open** | Appears unrelated/spam (“ViewSonic monitor”, references GitHub Actions runners). No meaningful code change. |

> **Takeaway:** Core fixes for today’s hot issues (zombies, render loop, Windows crashes, BYOK auth) are not yet visible in open PRs — likely landing via internal branches or pending triage.

---

## Feature Request Trends
From the full issue set, the strongest community pull is toward **control & observability**:

1. **Model & Cost Governance** — Allow-list for Auto mode (#4218), per-subagent usage breakdown (#4207), configurable retry counts (#4210).
2. **Context Management** — User-defined compaction thresholds (#1688), accurate MCP tool schema reporting (#4189).
3. **Extensibility** — PDF ingestion (#443), explicit inline custom-agent invocation (#4208), `skill` tool alias for agents (#4209).
4. **Shell Integration** — OSC 133 sequences for prompt navigation (#3428), tmux-compatible completion detection (#4223).
5. **Enterprise/ACP** — Reliable BYOK in ACP (#4016), MCP policy handshake visibility (#4206).

---

## Developer Pain Points (Recurring Frustrations)

| Area | Symptoms | Frequency |
|------|----------|-----------|
| **Windows/WSL2 Stability** | Crashes on exit (#4217), crashes with notifications (#4219), `--resume` hangs (#4165), clipboard failure on ARM64 (#3534) | 5+ distinct issues in 24h |
| **Render Loop Regressions** | Infinite Ink/React loop freezes main pane (#4222, regression of #2802); tmux dark-on-dark invisibility (#4212) | 2 critical UI bugs |
| **Process & Resource Leaks** | Zombie accumulation (#4163), subagent OTel spans missing billing attrs (#4224) | 2 resource/observability gaps |
| **Auth & Enterprise** | BYOK rejection in ACP (#4016), MCP handshake stall (#4206), plan-mode false positives on read-only `gh api` (#4220) | 3 enterprise-blocking issues |
| **Subagent UX** | `task_complete` unavailable after mode switch (#4161), coordinator stuck “Working” (#4225), server error spam (#4226) | 3 orchestration complaints |

---

**Next Watch:** v1.0.74-4+ for Windows/WSL2 crash fixes and render-loop regression; PRs addressing zombie reaping and BYOK-in-ACP. Community sentiment favors **configuration over convention** — expect more “make X configurable” requests” until knobs exist.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-23

## Today's Highlights
A critical regression in third-party API compatibility was reported and immediately addressed: the CLI now incorrectly sends Moonshot-specific `prompt_cache_key` parameters to non-Moonshot endpoints, causing 400 validation errors. A fix scoping cache keys to official Moonshot APIs is under review (#2535). Separately, a feature request for per-sub-agent model selection (#2533) signals growing demand for cost-optimized multi-agent workflows.

## Releases
No new releases in the last 24 hours.

## Hot Issues

| Issue | Type | Significance | Community Reaction |
|-------|------|--------------|-------------------|
| [#2534](https://github.com/MoonshotAI/kimi-cli/issues/2534) | **Bug** — `prompt_cache_key` sent to incompatible 3rd-party APIs (NVIDIA NIM) causing 400 errors | **High**: Breaks all non-Moonshot provider integrations after recent update; affects Windows users on v0.29.0 | New (0 comments), but blocks alternative provider workflows |
| [#2318](https://github.com/MoonshotAI/kimi-cli/issues/2318) | **Bug** — Incorrect TPD rate-limit calculation on Moonshot platform | **High**: Reports inflated token counts (1.5M+), causing premature rate limits; Windows 10, kimi 2.6 | 1 comment, 2 👍; persistent since May, suggests metering logic flaw |
| [#2533](https://github.com/MoonshotAI/kimi-cli/issues/2533) | **Feature** — Per-sub-agent model selection | **Medium**: Enables cost-tiered agent workflows (cheap models for simple tasks, capable models for complex ones) | New, 0 comments; aligns with multi-agent architecture trends |

## Key PR Progress

| PR | Status | Description |
|----|--------|-------------|
| [#2535](https://github.com/MoonshotAI/kimi-cli/pull/2535) | **Open** | **Fix for #2534**: Scopes `prompt_cache_key` parameter to official Moonshot/Kimi APIs only; third-party compatible endpoints no longer receive it. Ready for review. |
| [#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524) | **Open** | **Fix for #2526**: `StrReplaceFile` now counts replacements against *running* file content (not original), fixing chained-edit undercounts. |
| [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) | **Open** | **Fix for #2468**: Shell execution no longer blocks on pipe EOF when detached children hold pipes (e.g., `daemon & echo done`); exits once foreground process completes. |

## Feature Request Trends
1. **Multi-agent model routing** (#2533): Explicit per-sub-agent model selection to optimize cost/performance.
2. **Provider-agnostic parameter handling** (implied by #2534): Need for automatic feature detection or capability negotiation with third-party OpenAI-compatible endpoints.

## Developer Pain Points
- **Third-party API breakage**: Moonshot-specific parameters leaked to compatible endpoints, causing immediate 400 failures post-update.
- **Rate-limit opacity**: TPD calculation appears inaccurate (#2318), leading to unexpected quota exhaustion without clear diagnostics.
- **Tool execution reliability**: Shell command handling edge cases (detached processes, chained file edits) require ongoing fixes (#2524, #2530).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-23

## 1. Today's Highlights
The OpenCode team shipped a wave of API surface expansions today—project metadata updates, VCS branch exposure, PTY shell/token endpoints, durable session archival, command source identification, and server location paths—all landing in a single PR stack. Meanwhile, the desktop app continues to struggle with background connection stability (local server turning red after idle), and the TUI gained per-turn token usage diagnostics with cache-bust warnings. A long-standing request for custom system prompts (#7101, 123 👍) was finally closed after extensive discussion.

## 2. Releases
**PR #38252 verification videos** — Before/after verification recordings for PR #38252. No new version tag published in the last 24h.

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7101](https://github.com/anomalyco/opencode/issues/7101) | **Allow custom system prompts in global, project or custom directories** | Long-requested flexibility for prompt management across scopes; enables team-shared and per-project prompts. | 35 comments, 123 👍 — **CLOSED** |
| [#6231](https://github.com/anomalyco/opencode/issues/6231) | **Auto-discover models from OpenAI-compatible provider endpoints** | Eliminates manual model listing for local providers (Ollama, LM Studio, llama.cpp); high-impact DX improvement. | 30 comments, 185 👍 — **OPEN** |
| [#38378](https://github.com/anomalyco/opencode/issues/38378) | **kimi-k3 fails on `/v1/messages` (Anthropic endpoint) while `/v1/chat/completions` works** | Reveals a provider-gateway routing bug affecting Anthropic-compatible models; blocks users on Moonshot/Kimi. | 2 comments — **OPEN** |
| [#38419](https://github.com/anomalyco/opencode/issues/38419) | **Desktop 1.18.4 loses local server connection unexpectedly** | Regression: local server indicator turns red mid-session; app becomes unresponsive. | 2 comments — **OPEN** |
| [#37233](https://github.com/anomalyco/opencode/issues/37233) | **Local Server turns red after placing Desktop in background for long time** | Background idle kills server connection; agents stop responding. Affects daily workflow on macOS/Windows. | 2 comments — **OPEN** |
| [#29060](https://github.com/anomalyco/opencode/issues/29060) | **`opencode session list` only shows 2 of 238 historical sessions** | Session history retrieval broken; users cannot find/resume old work. | 2 comments, 1 👍 — **CLOSED** |
| [#25637](https://github.com/anomalyco/opencode/issues/25637) | **Cmd/Ctrl+A no longer selects all in input field (since 1.2.x)** | Basic text editing regression; selects entire screen or bottom half instead of input. | 3 comments — **CLOSED** |
| [#29007](https://github.com/anomalyco/opencode/issues/29007) | **CJK characters disappear from TUI background when dialog overlay open** | Rendering bug: double-width CJK chars hidden under dialog overlay (RGBA background). | 2 comments — **CLOSED** |
| [#28991](https://github.com/anomalyco/opencode/issues/28991) | **Support ACP-backed agents in opencode** | Opencode can *serve* ACP but cannot *consume* other ACP agents; limits composability. | 3 comments, 1 👍 — **CLOSED** |
| [#38450](https://github.com/anomalyco/opencode/issues/38450) | **Edit tool reads stale file content (ignores concurrent external edits)** | Race condition: agent edits based on outdated file state when user modifies file mid-session. | 1 comment — **OPEN** |

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#38443](https://github.com/anomalyco/opencode/pull/38443) | feat(project): support project metadata updates | **Feature** | API for updating project names/icons; persisted via project store. |
| [#38442](https://github.com/anomalyco/opencode/pull/38442) | feat(vcs): expose repository branch metadata | **Feature** | Git/Hg branch info added to VCS API projections; clients can show active branch. |
| [#38441](https://github.com/anomalyco/opencode/pull/38441) | feat(pty): expose shells and connect tokens | **Feature** | Lists available shells + issues short-lived PTY auth tokens for client connections. |
| [#38440](https://github.com/anomalyco/opencode/pull/38440) | feat(session): add durable session archival | **Feature** | Archive/unarchive operations recorded in session history; projected into session list. |
| [#38438](https://github.com/anomalyco/opencode/pull/38438) | feat(command): identify command sources | **Feature** | Commands now carry source metadata (config, plugin, MCP) for client-side filtering. |
| [#38437](https://github.com/anomalyco/opencode/pull/38437) | feat(server): expose location paths | **Feature** | New endpoint for home, state, config, worktree, and location directory paths. |
| [#38398](https://github.com/anomalyco/opencode/pull/38398) | feat(tui): add turn token usage diagnostics | **Feature** | Per-turn token summaries (new/cached/total), cache-read drop detection, cache-bust warnings. |
| [#38423](https://github.com/anomalyco/opencode/pull/38423) | feat(ai): preserve raw finish reasons | **Feature** | `finishReason` now `{ normalized, raw }` on step-finish/finish events; covers OpenAI, Anthropic, Gemini, Bedrock. |
| [#38367](https://github.com/anomalyco/opencode/pull/38367) | refactor(core): canonicalize tool outcomes | **Refactor** | Single canonical execution outcome replaces parallel V2 representations; clarifies `output` vs `content`. |
| [#37973](https://github.com/anomalyco/opencode/pull/37973) | fix(opencode): make mini resize replay opt-in | **Bug Fix** | Stops `--mini` mode from wiping screen + refetching entire session on every SIGWINCH. |
| [#38449](https://github.com/anomalyco/opencode/pull/38449) | fix(core): default custom model capabilities | **Bug Fix** | Custom models default to tool support, text+image input, text output; preserves catalog overrides. |
| [#38424](https://github.com/anomalyco/opencode/pull/38424) | fix(provider): select prompt cache keys by SDK | **Bug Fix** | Corrects cache key param naming per provider SDK (OpenAI/Azure/xAI/Venice/Mistral → `promptCacheKey`; DeepInfra/Cerebras → `prompt_cache_key`). |

## 5. Feature Request Trends
From the issue volume and engagement, the strongest community demand clusters around:

1. **Provider & Model DX** — Auto-discovery for local/OpenAI-compatible providers (#6231, 185 👍), custom system prompt scoping (#7101, 123 👍), and fixing Anthropic-endpoint routing for models like Kimi (#38378).
2. **Session & History Management** — Durable archival (now shipping in #38440), session list reliability (#29060), configurable auto-rename after N messages (#29002), and fork-from-message in Desktop (#25582).
3. **Desktop App Stability** — Background connection loss (#37233, #38419), input field selection regression (#25637), and CJK rendering under overlays (#29007).
4. **Extensibility & Composability** — ACP client support (#28991), plugin access to message bodies (#22831), and hiding agents from tab cycle (#29012).
5. **Core Editing Reliability** — Edit tool reading stale files (#38450), generic stripping in TS (#21911), and patch verification failures on Windows (#27282).

## 6. Developer Pain Points
Recurring frustrations surfacing in the last 24h:

- **Desktop background disconnection** — Two separate issues (#37233, #38419) report the local server turning red after idle; agents become unresponsive until manual restart. High daily-impact for Desktop users.
- **Session history invisibility** — `session list` returns only 2 sessions despite hundreds in DB (#29060); users cannot recover prior work.
- **Edit tool race conditions** — Agent reads file at start of turn, ignores concurrent external edits, overwrites them (#38450). Also: generic type stripping in TS (#21911) and patch verification failures on Windows (#27282).
- **Input field regressions** — Cmd/Ctrl+A selects wrong region (#25637); Home/End keys broken when side panel open (#29053).
- **Provider configuration friction** — Manual model listing for local providers (#6231), Anthropic-endpoint failures for certain models (#38378, #16560, #20813), and webfetch permission object syntax crashing server on startup (#29041).
- **CJK rendering in TUI** — Dialog overlay hides double-width characters (#29007), a blocker for Asian-language users.

---

*Digest generated from GitHub data (anomalyco/opencode) covering 2026-07-23. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-23

## Today's Highlights
No new releases in the last 24 hours. The community focused on stability fixes: a critical retry/abort regression in provider SDKs was patched, external editor launch performance was improved via temp-directory isolation, and Windows extension-path display bugs were resolved. Several provider integrations advanced (Bedrock Mantle, OpenRouter OAuth, StepFun), while compaction reliability and TUI rendering correctness remain active discussion areas.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6768](https://github.com/earendil-works/pi/issues/6768) | **Compaction broken with Copilot Enterprise** (OpenAPI 421, Anthropic 400) | Blocks enterprise users on managed Copilot licenses; compaction is core to long-running sessions. | 9 👍, 9 comments — high visibility |
| [#6686](https://github.com/earendil-works/pi/issues/6686) | **Pi auto-logs out of GitHub** (regression from #2725) | Auth instability disrupts workflows; affects multi-device users. | 10 comments, closed but linked to active pain |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **Auto-compaction never triggers past 100% context** | Session crashes at provider overflow instead of compacting proactively; data-loss risk. | 4 comments, open |
| [#6911](https://github.com/earendil-works/pi/issues/6911) | **OpenAI SDK retries sleep full `Retry-After` (days), ignores AbortSignal** | Uninterruptible hangs on rate limits; blocks Escape cancellation. | 5 comments, fixed in [#6980](https://github.com/earendil-works/pi/pull/6980) |
| [#6210](https://github.com/earendil-works/pi/issues/6210) | **`/scoped-models` fails on model IDs with brackets** | Breaks custom model selection for bracketed names (e.g., `model[1m]`). | 8 comments, open |
| [#6774](https://github.com/earendil-works/pi/issues/6774) | **Ctrl+G external editor slow when `os.tmpdir()` crowded** | Temp-file contention degrades UX; fixed via private `mkdtemp` in [#6903](https://github.com/earendil-works/pi/pull/6903). | 7 comments, closed |
| [#6619](https://github.com/earendil-works/pi/issues/6619) | **Windows: dependent npm extensions show absolute paths in banner** | Confusing UX for extension authors/users; fixed in [#6964](https://github.com/earendil-works/pi/pull/6964). | 5 comments, closed |
| [#6459](https://github.com/earendil-works/pi/issues/6459) | **Custom keybindings require `/reload` on first session** | Affects power users with custom editors (e.g., pi-powerline-footer). | 7 comments, closed |
| [#6621](https://github.com/earendil-works/pi/issues/6621) | **Dynamic system prompt causes accidental cache invalidation** | Hurts prefill performance on unified-memory hardware (AMD Strix Halo). | 6 comments, 1 👍, closed |
| [#5592](https://github.com/earendil-works/pi/issues/5592) | **Anthropic streams wait for EOF after `message_stop`** | Proxies/gateways keeping SSE open stall response finalization. | 4 comments, closed |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#6980](https://github.com/earendil-works/pi/pull/6980) | **fix(ai): make provider retries abortable** | Replaces OpenAI/Anthropic SDK retries with a common helper that enforces `maxRetryDelayMS` and respects `AbortSignal` (fixes #6911). | Open |
| [#6903](https://github.com/earendil-works/pi/pull/6903) | **fix(coding-agent): speed up external editor launch** | Moves temp files into a dedicated `mkdtemp` subdirectory to avoid `/tmp` contention (fixes #6774). | Closed |
| [#6964](https://github.com/earendil-works/pi/pull/6964) | **fix(coding-agent): display path of sibling dependent extensions** | Resolves Windows absolute-path display for npm-dependent extensions (fixes #6619). | Closed |
| [#6927](https://github.com/earendil-works/pi/pull/6927) | **Add native OpenRouter OAuth support** | Implements PKCE S256 browser flow with ephemeral localhost callback; keys work for text & image models. | Closed |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | **feat: Add Amazon Bedrock Mantle OpenAI Responses provider** | New provider for AWS Bedrock Mantle via OpenAI-compatible API; supersedes prior attempt. | Open |
| [#6341](https://github.com/earendil-works/pi/pull/6341) | **[to-discuss] feat(ai): support constrained sampling** | Adds opt-in `constrainedSampling` config for JSON-schema/grammar-constrained tool arguments (OpenAI `strict`, xAI, etc.). | Open |
| [#6987](https://github.com/earendil-works/pi/pull/6987) | **fix(tui): align grapheme widths with terminal cells** | Addresses long-standing cell-width estimation issues for wide/emoji characters. | Open |
| [#6960](https://github.com/earendil-works/pi/pull/6960) | **feat(ai): add StepFun providers** | Four new providers (China/global/prepaid/router) sourced from models.dev. | Closed |
| [#6967](https://github.com/earendil-works/pi/pull/6967) | **feat(coding-agent): expose session metadata to bash tools** | Injects session ID, file, provider, model, reasoning level into bash tool env for subprocess awareness. | Closed |
| [#6881](https://github.com/earendil-works/pi/pull/6881) | **[inprogress] feat(ai): use provider-reported cost when available** | Reads `usage.cost` / `cost_details.upstream_inference_cost` from responses; falls back to catalog rates. | Open |

---

## Feature Request Trends
1. **Compaction & Context Management** — Multiple issues/PRs around auto-compaction triggers (#6879, #6993), output-token-limit compaction, and cache preservation (#6621).
2. **Provider Flexibility & OAuth** — Native OAuth for OpenRouter (#6927), Bedrock Mantle (#6216), StepFun (#6960), and Copilot Enterprise support (#6768) show demand for diverse auth/models.
3. **Model/Thinking Control** — MRU model switching (#6982), thinking-level cycling (#6974), `get_available_thinking_levels` RPC (#6865), and forced adaptive thinking (#6986).
4. **Extension Ecosystem** — Package gallery visibility (#6991), structured approval API (#5954), session metadata exposure (#6967), and dependent-extension UX (#6619, #6964).
5. **TUI Polish** — Grapheme width correctness (#6987), keybinding persistence (#6459), external editor perf (#6774), and Windows terminal compat (#6973).

---

## Developer Pain Points
- **Auth Fragility**: GitHub/Copilot logout loops (#6686, #6970) and Copilot Enterprise compaction failures (#6768) disrupt enterprise workflows.
- **Retry/Abort Broken**: SDK retries ignoring `AbortSignal` and sleeping unbounded `Retry-After` values cause unkillable hangs (#6911, fixed in #6980).
- **Windows-Specific Bugs**: Absolute paths in extension banners (#6619), ConPTY arrow-key breaks (#6973), and temp-dir contention (#6774).
- **Compaction Reliability**: Silent failure past 100% context (#6879) and missing output-token-limit triggers (#6993) risk session loss.
- **Extension DX**: Gallery indexing delays (#6991), dependent-extension resolution (#6619), and missing structured approval primitives (#5954) slow extension authors.

---

*Generated from GitHub data for `badlogic/pi-mono` (issues/PRs updated 2026-07-22 → 2026-07-23).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-23

## 1. Today's Highlights
The project continues its rapid iteration cycle with **multiple nightly release failures** (quality checks and Docker integration) surfacing CI stability concerns, while **cold-start performance optimization** remains a priority with lazy-loading follow-ups from the ACP eager-closure audit. A notable **autofix infrastructure resilience** effort landed two PRs to auto-retry failed checks and auto-update stale PR bases, reducing maintainer toil.

---

## 2. Releases
| Version | Date | Type | Notes |
|---------|------|------|-------|
| `v0.0.0-benchmark-poc.20260722.1` | 2026-07-22 | Pre-release (POC) | Validates GitHub Actions → ECS benchmark worker → GitHub result publication pipeline. **Not a product release.** |

> No stable or nightly product releases in the last 24h. Two nightly release attempts (`v0.20.1-nightly.20260723.d064bd7dc`, `v0.20.1-nightly.20260723.83b97ec79`) failed on `quality` and `integration_docker` jobs respectively.

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7559](https://github.com/QwenLM/qwen-code/issues/7559) | **Main CI failed: E2E Tests on 95fc7ca152c8** | Latest main-branch E2E failure; `autofix/in-progress` suggests bot is attempting repair. | 2 comments, bot-driven triage |
| [#7549](https://github.com/QwenLM/qwen-code/issues/7549) | **Release Failed: v0.20.1-nightly.20260723.d064bd7dc (quality job)** | Nightly blocked on quality gate; indicates flaky or new lint/test regressions. | Closed same day |
| [#7555](https://github.com/QwenLM/qwen-code/issues/7555) | **Release Failed: v0.20.1-nightly.20260723.83b97ec79 (integration_docker)** | Docker integration failure — may reflect environment or dependency drift. | Open, 1 comment |
| [#7516](https://github.com/QwenLM/qwen-code/issues/7516) | **Main CI failed: E2E Tests on d064bd7dcf98** | Prior E2E failure on same commit as failed nightly; `autofix/skip` suggests known flake. | Closed, 5 comments |
| [#7264](https://github.com/QwenLM/qwen-code/issues/7264) | **Cold-start follow-ups: lazy-loading candidates from ACP audit** | **Performance-critical**: 17.24 MiB / 2420 modules eagerly loaded on every cold start. | P2, 4 comments, active |
| [#7525](https://github.com/QwenLM/qwen-code/issues/7525) | **Visualize ordinary-session plan DAG & link Todos to subagents** | **UX/observability**: connects planning (Todos) to execution (subagents) — key for multi-agent workflows. | P2, feature-request, 1 comment |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | **Fleet Shepherd Dashboard** | Infra health monitoring; auto-maintained, last tick 808m ago with 0 syncs/dispatches — possible stall. | Bot-maintained, 3 comments |
| [#7557](https://github.com/QwenLM/qwen-code/issues/7557) | *(Implied from PR #7557)* **Persist usage for tool-only subagent rounds** | Telemetry completeness: ensures token accounting for tool-only model turns. | Via PR activity |
| [#7534](https://github.com/QwenLM/qwen-code/issues/7534) | *(Implied from PR #7534)* **Retry requests when providers require thinking** | Provider compatibility: handles `enable_thinking: false` → 400 → retry with `true`. | Via PR activity |
| [#7487](https://github.com/QwenLM/qwen-code/issues/7487) | *(Implied from PR #7487)* **Publish benchmark results to GitHub** | Closes the benchmark loop: results → Release + Check Run. Enables perf tracking. | Via PR activity |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#7562](https://github.com/QwenLM/qwen-code/pull/7562) | `feat(autofix): auto-rerun check on infra death` | **CI Resilience** | Auto-retries once when runner/server/disk fails — not code. Prevents stuck PRs from ephemeral infra. |
| [#7554](https://github.com/QwenLM/qwen-code/pull/7554) | `feat(autofix): auto-update PR red from stale base` | **CI Resilience** | Merges current `main` into PR if red only due to since-fixed base breakage. Gated for safety. |
| [#7558](https://github.com/QwenLM/qwen-code/pull/7558) | `perf(cli): Defer ACP telemetry initialization` | **Cold-start Perf** | Delays telemetry SDK init until post-`initialize` response. Directly addresses #7264 eager-load audit. |
| [#7494](https://github.com/QwenLM/qwen-code/pull/7494) | `feat(goal): redesign goal lifecycle across clients` | **Core Architecture** | **Closed.** Replaces hook-driven Goal loop with versioned, durable lifecycle (create/replace/edit/pause/resume/clear/complete/blocked) shared by TUI, CLI, ACP, WebShell, Desktop. |
| [#7517](https://github.com/QwenLM/qwen-code/pull/7517) | `feat(core): add Goal v3 state protocol` | **Core Architecture** | First slice of #7494: defines lifecycle, optimistic concurrency, deterministic transitions, wire parsing, turn-boundary persistence, legacy migration. |
| [#7552](https://github.com/QwenLM/qwen-code/pull/7552) | `feat(serve): add workspace-level generation` | **Server/ACP** | Stateless, tool-free generation via SSE → workspace ACP child. No live session required. Capability-advertised. |
| [#7551](https://github.com/QwenLM/qwen-code/pull/7551) | `feat(web-shell): add selective Shadow DOM isolation` | **Web/UX** | **Closed.** Opt-in isolation for plugin manager body & portal tree. Styles installed sync into shadow roots. |
| [#7536](https://github.com/QwenLM/qwen-code/pull/7536) | `feat(core): Align GenAI telemetry with ARMS` | **Observability** | Aligns LLM/tool/agent span attrs with OpenTelemetry GenAI + Alibaba Cloud ARMS. Canonical operation/provider/client attrs. |
| [#7557](https://github.com/QwenLM/qwen-code/pull/7557) | `fix(core): persist usage for tool-only subagent rounds` | **Telemetry** | Writes usage-only rounds as assistant records with empty message — enables token accounting in trajectories. |
| [#7534](https://github.com/QwenLM/qwen-code/pull/7534) | `fix(core): retry requests when providers require thinking` | **Provider Compat** | Retries once on 400 when `enable_thinking: false` rejected. Remembers model capability for session. |

---

## 5. Feature Request Trends (from Issues & PRs)

| Direction | Evidence | Maturity |
|-----------|----------|----------|
| **Multi-agent / Subagent Observability** | #7525 (plan DAG + Todo↔subagent linking), #7494/#7517 (Goal v3 lifecycle), #7557 (tool-only usage persistence) | **Active design** — core protocol (Goal v3) merged, UI visualization proposed |
| **Cold-start & Runtime Performance** | #7264 (lazy-loading audit follow-ups), #7558 (deferred telemetry), #7536 (telemetry alignment) | **In progress** — measurable 17MB eager load target, incremental PRs landing |
| **CI/CD Resilience & Automation** | #7562, #7554 (autofix infra retry + base update), #7549/#7555 (nightly failures), #7167 (Fleet Shepherd stall) | **High investment** — autofix bots taking over failure classification & remediation |
| **Provider-Agnostic Compatibility** | #7534 (thinking retry), #7528 (npm view vs update-notifier), #7536 (OTel/ARMS alignment) | **Ongoing** — abstracting provider quirks, standardizing telemetry |
| **Web/Shell UX Hardening** | #7551 (Shadow DOM isolation), #7561 (background agent status sync), #7381 (queued message styling) | **Shipping** — WebShell getting production-grade isolation & state sync |

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Frequency | Representative Artifacts |
|------------|-----------|--------------------------|
| **Flaky/Unreliable CI → Blocked Releases** | High (3+ failures in 24h) | #7549 (quality), #7555 (docker), #7516/#7559 (E2E), #7562/#7554 (autofix mitigation) |
| **Cold-start Latency (ACP Child)** | High (dedicated epic #7264) | 17.24 MiB / 2420 modules eager-loaded; #7558 defers telemetry, more lazy-loading PRs expected |
| **Subagent/Tool Telemetry Gaps** | Medium | #7557 (tool-only rounds), #7536 (OTel alignment), #7558 (deferred init) — incomplete token accounting |
| **Nightly Release Pipeline Fragility** | Medium | Two consecutive nightlies failed on different jobs; no green nightly in window |
| **WebShell State Sync & Isolation** | Medium | #7561 (background agent status), #7551 (Shadow DOM), #7381 (queued msg styling) — UX polish backlog |
| **Goal/Plan Lifecycle Fragmentation** | Medium | #7494/#7517 unify across 5+ clients; but #7525 shows ordinary sessions still lack DAG visualization |

---

**Digest compiled from** `github.com/QwenLM/qwen-code` **data as of 2026-07-23T00:00:00Z.**  
**Next digest:** 2026-07-24.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-23

## 1. Today's Highlights
The project is in final v0.9.1 release stabilization: 17 Dependabot alerts are being patched, a default skill pack (v5) has shipped, and the `/skills` unified manager landed. Simultaneously, v0.9.2 planning is underway with a major "context diet" initiative to minimize model-facing payloads across prompts, tools, and schemas. Two stop-ship bugs emerged today: composer byte-corruption on large pastes and immediate TUI exit on fresh macOS terminals.

## 2. Releases
No new releases published in the last 24 hours. v0.9.1 is in pre-release gate (#4713 security scan, #4714 dependency patches).

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) EPIC: staged command-boundary refactor | Core architecture refactor for command routing; 17 comments show deep design debate | High engagement; tracks #2791/#2851 |
| [#4713](https://github.com/Hmbown/CodeWhale/issues/4713) v0.9.1 security gate | Release blocker: 17 open Dependabot alerts (7 high) must be dispositioned before tag | 3 comments; active remediation via #4714 |
| [#4716](https://github.com/Hmbown/CodeWhale/issues/4716) TUI exits immediately on launch **[stop-ship]** | Critical regression: `codew`/`codewhale` returns `[Process completed]` instantly on fresh macOS terminal | 1 comment; blocks dogfooding |
| [#4719](https://github.com/Hmbown/CodeWhale/issues/4719) Composer: large pasted prompts get byte-corrupted | Data-loss bug: paths truncated, lines mangled, chars dropped before model receipt | 2 comments; downstream agent failures |
| [#4717](https://github.com/Hmbown/CodeWhale/issues/4717) Legacy "DeepSeek fallback model" shown on non-DeepSeek providers | UX polish: settings surface shows irrelevant DeepSeek row when using Z.ai/GLM-5.2 | New; reflects provider-agnostic cleanup |
| [#4720](https://github.com/Hmbown/CodeWhale/issues/4720) Provider/model auto-switching feels under-baked | Runtime silently switched `deepseek→zai`; switches not surfaced clearly | New; trust/transparency concern |
| [#4718](https://github.com/Hmbown/CodeWhale/issues/4718) TUI transcript: information density too high | Repeated "Option+V" hints, stacked reasoning states clutter transcript | New; UX density complaint |
| [#4704](https://github.com/Hmbown/CodeWhale/issues/4704) Context diet: minimize every model-facing prompt/schema/payload | v0.9.2 flagship: reduce tokens while preserving task quality across model families | 0 comments; 7 sub-issues spawned |
| [#4691](https://github.com/Hmbown/CodeWhale/issues/4691) Ship model-invoked default CodeWhale skill pack | Product parity: first-party skill pack comparable to Kimi Code/Devin/Claude Code | 4 comments; delivered via #4695 |
| [#2889](https://github.com/Hmbown/CodeWhale/issues/2889) Work Agent rows: real sub-agent details & structured activity | Restored community-owned slice for sidebar Work/Activity/Agents panels | 8 comments; closed via #4711 |

## 4. Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| [#4679](https://github.com/Hmbown/CodeWhale/pull/4679) | **Feature** | Unified `/skills` manager: inventory, audit, install/import, update, remove, trust across CodeWhale-owned & compatible roots |
| [#4695](https://github.com/Hmbown/CodeWhale/pull/4695) | **Feature** | Default CodeWhale skill pack v5 bundled: 13 end-user skills (interview, plan, implement, debug, test, review, security-review, simplify, verify, research, ...) |
| [#4714](https://github.com/Hmbown/CodeWhale/pull/4714) | **Security** | `npm audit fix --package-lock-only` across workspaces: resolves 17 Dependabot alerts (axios, protobufjs, brace-expansion, fast-uri, linkify-it, js-yaml) |
| [#4711](https://github.com/Hmbown/CodeWhale/pull/4711) | **UX** | v0.9.1 chrome: top bar shows only active To-dos + Sub-agents; draggable dividers; theme-native composer permission/mode rails |
| [#4696](https://github.com/Hmbown/CodeWhale/pull/4696) | **Feature** | Staged `/uwu` theme shipped (aliases: `owo`, `kawaii`); soft-classic idle whale mark; color shimmer only |
| [#4694](https://github.com/Hmbown/CodeWhale/pull/4694) | **Bugfix** | Fail closed on Kimi K3 model-ID cross-pairings: `api.kimi.com` requires `k3`, `api.moonshot.ai` requires `kimi-k3` |
| [#4693](https://github.com/Hmbown/CodeWhale/pull/4693) | **Bugfix** | Work summary lifecycle: recent-only expires after 4s/next turn; durable rows persist; actionable titles; top-area hierarchy |
| [#4722](https://github.com/Hmbown/CodeWhale/pull/4722) | **Bugfix** | Complete edit previews in Alt+V details pager; compact approval card bounded; regression test added |
| [#4610](https://github.com/Hmbown/CodeWhale/pull/4610) | **Feature** | Configurable session token header: `tui.header_items = ["tokens"]` shows cumulative input/cache-hit/output counts |
| [#4087](https://github.com/Hmbown/CodeWhale/pull/4087) | **Refactor** | Split `hooks.rs` → `hooks/config.rs` (definitions) + `hooks/executor.rs` (runtime); v0.9.3 target |

## 5. Feature Request Trends
1. **Context minimization** — 7 linked issues (#4704–#4710) targeting prompt/schema/payload reduction for v0.9.2
2. **Provider-agnostic settings** — Remove DeepSeek-specific UI when using other providers (#4717, #4720, #4721)
3. **Composer interaction clarity** — Make "steer vs queue" obvious and configurable (#4703)
4. **Skill ecosystem** — Unified manager (#4679), default pack (#4695), audit/install/update/remove flows
5. **Theme system maturity** — Theme-native rails (#4699), staged themes (#4696), screenshot parity (#4508)
6. **Work surface redesign** — To-do + Sub-agent bar replacing generic Work chrome (#4700, #4711)

## 6. Developer Pain Points
- **Composer reliability**: Byte corruption on large pastes (#4719), immediate TUI exit on launch (#4716)
- **Settings noise**: Legacy DeepSeek fallback row shown on non-DeepSeek providers (#4717), density/labeling audit needed (#4721)
- **Transcript clutter**: Repeated "Option+V" hints, stacked reasoning states, clipped previews (#4718, #4701)
- **Provider opacity**: Silent auto-switching without user intent/visibility (#4720)
- **Security debt**: 17 Dependabot alerts (7 high) blocking v0.9.1 release (#4713, #4714)
- **Work surface pollution**: Non-durable shell failures persist as "Needs input" (#4702), empty coordination chrome (#4697)

---

*Data source: `github.com/Hmbown/DeepSeek-TUI` (CodeWhale) — Issues/PRs updated 2026-07-22 to 2026-07-23*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>