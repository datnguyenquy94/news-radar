# AI CLI Tools Community Digest 2026-07-28

> Generated: 2026-07-28 02:43 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-07-28)

---

## 1. Ecosystem Overview

The AI CLI landscape is maturing into two distinct tiers: **platform-backed tools** (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Grok Build) with dedicated engineering teams and enterprise distribution channels, and **community-driven/emerging tools** (Kimi Code, OpenCode, Pi, Qwen Code, DeepSeek TUI) iterating rapidly on niche UX innovations. All tools are converging on **session persistence, multi-agent orchestration, and cross-device sync** as table-stakes features. Windows ARM64 stability, billing transparency, and plugin/hook reliability have emerged as universal pain points. Release cadences vary from nightly (Gemini, Qwen) to weekly alpha (Codex) to sporadic stable drops (Copilot, OpenCode), reflecting differing maturity and risk tolerance.

---

## 2. Activity Comparison (2026-07-28)

| Tool | Issues Updated | PRs Updated/Merged | Release Status | Notable Signal |
|------|----------------|-------------------|----------------|----------------|
| **Claude Code** | 10 hot (40+ total) | 6 PRs updated | None (stable on 0.145.x) | 43👍 on settings sync; billing incident #81703 |
| **OpenAI Codex** | 10 hot (high engagement) | 15+ merged (bot-driven) | 2 alpha CLI (0.146.0-α.12/.13) | `/undo` 362👍 — highest engagement in ecosystem |
| **Gemini CLI** | 10 hot | 10 notable (security-focused) | Nightly v0.54.0-20260728 | 3 security PRs merged; CRLF/keychain fixes |
| **GitHub Copilot CLI** | 10 hot | 10 open (mostly stale docs) | v1.0.76-0 shipped | ACP parity gaps (4 issues); plan-mode regression |
| **Kimi Code CLI** | 4 updated | 5 opened/updated | None | Hook GC bug + VS Code approval freeze = critical |
| **OpenCode** | 10 noteworthy | 10 important (8 V2 refactor) | v1.18.7 + v1.18.6 (back-to-back) | 220👍 on pasted-text expansion; Deepseek regression |
| **Pi** | 10 hot | 10 merged (extension/API focus) | None | SQLite FTS5 session search; Bedrock credential_process |
| **Qwen Code** | 3 updated | 10 top (Agent View stack = 5 PRs) | 2 benchmark prereleases (non-prod) | 5-PR Agent View stack = largest in-flight feature |
| **DeepSeek TUI** | 14 hot | 14 key (v0.9.2 RC integration) | v0.9.2 RC active (82-commit umbrella) | Cost transparency + visual docs + Windows CRLF |
| **Grok Build** | 0 | 0 | None | No activity |

---

## 3. Shared Feature Directions (Cross-Tool Consensus)

| Requirement | Tools Demanding | Specific Needs |
|-------------|----------------|----------------|
| **Session Continuity & Cross-Device Sync** | Claude Code (#22648, #11455), Codex (#9203, #25319), Gemini (#26522), Copilot (#1381), OpenCode (#39244), Pi (#7163), Qwen (#7801) | Account-level settings, history, read-state sync; seamless CLI↔Desktop↔Mobile handoff; VCS-agnostic rewind |
| **Undo/Rollback Safety** | Codex (#9203 362👍), Claude Code (#61172), Copilot (#4183), OpenCode (#8501) | `/undo` command; conversation archival; expand pasted content before send; auto-compaction that respects hard limits |
| **Multi-Agent / Background Orchestration** | Qwen (5-PR Agent View stack), OpenCode (Fleet + Router), DeepSeek TUI (Fleet saved exact), Codex (subagent maturity), Claude Code (Cowork) | Supervisor runtime, PTY workers, session lifecycle, roster UI; two-phase Fleet admission; persistent background agents |
| **Plugin/Hook Reliability** | Claude Code (#81672, #81670), Codex (#35675), Copilot (#1730), Kimi (#2565), Pi (#7193), OpenCode (#39224) | Import path independence, quoted paths, hot-reload, strong ref retention for fire-and-forget hooks, event-bus leak fixes |
| **Windows ARM64 / Desktop Stability** | Claude Code (#40198, #51143), Codex (#32149, #33732, #30712), Copilot (#4159, #4263), Kimi (#2560, #2561), DeepSeek TUI (#4764) | Cowork VM start, blank-screen loops, install pre-UAC, apply_patch fallback, Unicode encoding, CRLF-safe edits |
| **Billing/Usage Transparency** | Claude Code (#81703), Codex (#30452), Copilot (#4224, #4183), OpenCode (#37790, #34184), DeepSeek TUI (#4797, #4939) | Real-time usage telemetry, quota sync, route-scoped cost breakdown, cache-write pricing, subagent billing attribution |
| **Model Provider Parity & Local LLM Support** | Gemini (#28477), OpenCode (#38865, #39095), Pi (#7081, #7170), DeepSeek TUI (#4526, #4467), Qwen (multi-provider benchmarks) | OpenAI-compatible endpoints, Bedrock credential_process, dedicated subscription endpoints, provider-reported cost |

---

## 4. Differentiation Analysis

| Dimension | Platform-Backed Tools | Community/Emerging Tools |
|-----------|----------------------|--------------------------|
| **Primary Focus** | Enterprise reliability, IDE integration, compliance, billing governance | UX innovation (TUI/roster), multi-agent orchestration, cost transparency, local-first |
| **Target User** | Professional developers in managed environments; teams needing SSO/audit | Power users, researchers, early adopters building custom workflows |
| **Technical Approach** | Monolithic binaries + cloud sync; proprietary protocols (ACP, proprietary APIs) | Modular architectures (V2 controllers, supervisor/PTY), open protocols (MCP, ACP), SQLite/JSONL local storage |
| **Release Philosophy** | Stable channels + long alpha/beta; gatekept by trust/safety | Nightly/weekly; rapid iteration; benchmark-driven (Qwen, DeepSeek) |
| **Differentiators** | • Claude: Cowork VM, governance plugins<br>• Codex: Thread fidelity, multi-agent config hygiene<br>• Gemini: Security-first (3 P1 fixes/day), AST-aware reads<br>• Copilot: ACP server, GitHub-native auth, Autopilot persistence | • OpenCode: V2 session controllers, plugin hot-reload, Fleet Router<br>• Pi: Extension API depth (scopedModels, FTS5), provider cost accuracy<br>• Qwen: Agent View stack (supervisor+PTY+roster), daemon latency focus<br>• DeepSeek TUI: Visual program slices, cost decomposition, real-session recording<br>• Kimi: Moonshot API optimization, Windows encoding resilience |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenCode**, **Qwen Code**, **DeepSeek TUI**, **Pi** | Daily multi-PR merges; large architectural refactors (OpenCode V2 = 8 PRs, Qwen Agent View = 5 PRs, DeepSeek v0.9.2 = 82 commits); nightly/weekly releases; high 👍 on UX issues (OpenCode 220, DeepSeek 20+ comments) |
| **Steady Enterprise-Grade** | **Claude Code**, **Gemini CLI**, **OpenAI Codex** | Consistent security/fix cadence; high-impact issues (billing, Windows ARM64) tracked urgently; bot-driven PR merges (Codex 15+/day); nightly (Gemini) or alpha (Codex) channels |
| **Moderate / Platform-Constrained** | **GitHub Copilot CLI**, **Kimi Code CLI** | Copilot: stable releases but stale PR queue (months old), ACP gaps blocking integrators; Kimi: critical bugs (hook GC, VS Code freeze) but only 5 PRs, no release |
| **Dormant** | **Grok Build** | Zero activity |

**Maturity Indicators**: Gemini leads on security hygiene (3 P1 fixes in 24h). Codex leads on thread/session fidelity investment. OpenCode leads on architectural boldness (V2 rewrite in-flight). DeepSeek TUI leads on cost transparency UX. Qwen leads on benchmark-driven development (SWE-bench 376/500).

---

## 6. Trend Signals for Technical Decision-Makers

1. **Session State as a First-Class Asset** — Every tool treats session history, context, and continuity as critical infrastructure. Expect **account-scoped persistence** and **portable session formats** (JSONL, SQLite) to become standard. *Action: Evaluate tools on export/import fidelity and cross-device sync.*

2. **Multi-Agent is the New Multi-Thread** — Supervisor/PTY/Fleet architectures (Qwen, OpenCode, DeepSeek) signal a shift from single-agent chats to **managed agent fleets**. *Action: Prototype background agent workflows now; tooling will stabilize in 6–12 months.*

3. **Windows ARM64 is a Blocking Criterion** — Claude, Codex, Copilot, Kimi, DeepSeek all have open Windows ARM64/encoding/CRLF bugs. *Action: Validate Windows ARM64 support in POCs; don’t assume parity.*

4. **Billing Transparency = Trust** — Mass billing incidents (Claude), quota sync failures (OpenCode, Copilot), opaque cost models (DeepSeek) erode adoption. *Action: Demand real-time usage APIs, route-scoped cost breakdowns, and subagent attribution before enterprise rollout.*

5. **Plugin/Hook Ecosystems Fragmenting** — MCP, ACP, proprietary hooks, Pi extensions — no standard won. *Action: Favor tools with **hot-reload, import-path independence, and strong ref semantics** (OpenCode, Pi, Codex) to avoid vendor lock-in.*

6. **Local-First / Multi-Provider is Table Stakes** — Gemini (#28477), OpenCode, Pi, DeepSeek all prioritize OpenAI-compatible endpoints and local LLMs. *Action: Require provider-agnostic config; avoid tools hardcoded to single vendor.*

7. **Benchmark-Driven Development Rising** — Qwen (SWE-bench),

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-28 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py 0% recall fix` | Core tooling fix: installs eval artifact as real skill; fixes Windows stream reading, trigger detection, parallel workers | 10+ independent reproductions of `recall=0%` bug; description-optimization loop was optimizing against noise | 🟢 Open |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic QC for AI-generated docs: prevents orphan/widow lines, numbering misalignment | Addresses universal pain point—every document Claude generates suffers these issues | 🟢 Open |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` (v1.3.0) | Mechanical file verification → four-dimension reasoning audit (damage-severity priority) | Universal, stack-agnostic quality gate; Step 0 verifies claimed outputs exist before reasoning audit | 🟢 Open |
| 4 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | OpenDocument (.odt/.ods) creation, template filling, parse to HTML | Covers full workflow: write → run_and_capture → inspect → iterate via pyxel-mcp | 🟢 Open |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Trophy model, AAA pattern, React Testing Library, property-based, contract, E2E, CI | Full-stack testing guidance; explicitly defines what NOT to test | 🟢 Open |
| 6 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills evaluating skills across 5 dimensions (structure, examples, resources, triggers, safety) | Addresses marketplace quality control; security analyzer catches credential leaks, injection risks | 🟢 Open |
| 7 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` | Retro/pixel-art/8-bit game development via Pyxel MCP server | Niche but complete workflow: write → run_and_capture → inspect → iterate | 🟢 Open |
| 8 | **[#210](https://github.com/anthropics/skills/pull/210)** `frontend-design` (improvement) | Clarity/actionability overhaul: every instruction executable in single conversation | Moves skill from educational tone to operational directives | 🟢 Open |

> **Note:** All 50 PRs show `Comments: undefined` in the export; ranking follows the repository's "sorted by comments" order.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Namespace & Trust Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍): Community skills masquerading as official `anthropic/` namespace skills | 🔴 Critical |
| **Org-Level Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍): Need native sharing vs. manual file transfer via Slack/Teams | 🟠 High |
| **Skill-Creator Tooling Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍), [#1169](https://github.com/anthropics/skills/issues/1169), [#1099](https://github.com/anthropics/skills/issues/1099), [#1061](https://github.com/anthropics/skills/issues/1061), [#362](https://github.com/anthropics/skills/pull/362): `run_eval.py` 0% recall, Windows subprocess/encoding crashes, UTF-8 panics | 🟠 High |
| **Duplicate/Plugin Management** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍): `document-skills` & `example-skills` install identical content | 🟡 Medium |
| **Context Window Efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487): `claude-api` skill injects ~156k tokens in one call | 🟡 Medium |
| **MCP/Platform Interop** | [#16](https://github.com/anthropics/skills/issues/16), [#29](https://github.com/anthropics/skills/issues/29): Expose skills as MCPs; Bedrock support | 🟡 Medium |
| **Agent Governance & Quality Gates** | [#412](https://github.com/anthropics/skills/issues/412) (closed), [#1385](https://github.com/anthropics/skills/issues/1385), [#1329](https://github.com/anthropics/skills/issues/1329): Safety patterns, reasoning pipelines, compact memory | 🟢 Emerging |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It’s Poised to Merge |
|----|-------|--------------------------|
| **[#538](https://github.com/anthropics/skills/pull/538)** | `pdf` case-sensitivity fix | Trivial 8-line fix; breaks on case-sensitive FS; authored by active contributor (Lubrsy706) |
| **[#539](https://github.com/anthropics/skills/pull/539)** | `skill-creator` YAML special-char warning | Prevents silent parsing failures; pre-parse validation; same author as #538 |
| **[#541](https://github.com/anthropics/skills/pull/541)** | `docx` tracked-change `w:id` collision fix | Root-cause identified (shared ID space); prevents document corruption |
| **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows `skill-creator` subprocess + encoding | Two 1-line fixes (`claude.cmd` + `cp1252`); unblocks Windows contributors |
| **[#361](https://github.com/anthropics/skills/pull/361)** / **[#362](https://github.com/anthropics/skills/pull/362)** | UTF-8 safe validation + byte-length checks | Fixes Rust panics on multi-byte chars; foundational for i18n |
| **[#509](https://github.com/anthropics/skills/pull/509)** | `CONTRIBUTING.md` | Addresses 25% community-health score; single highest-impact doc addition |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Addresses explicit issue [#1417](https://github.com/anthropics/skills/issues/1417); community-validated problem framing |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand**  
> **Developers are demanding trustworthy, production-ready *tooling around skills* (reliable evaluation, Windows compatibility, namespace security, org sharing) more than new domain skills—treating the Skills platform itself as critical infrastructure that must harden before scaling.**

---

# Claude Code Community Digest — 2026-07-28

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. Community focus remains on **critical Windows ARM64 stability** (Cowork VM fails to start, Desktop blank-screen loop) and a **mass billing incident on July 17** that charged Max-plan users despite included allowances. A long-standing request for **account-level settings sync** continues to accumulate support (43 👍) alongside session-continuity and customizable-keybinding demands.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **[#40198](https://github.com/anthropics/claude-code/issues/40198)** | **Cowork VM fails to start on Windows ARM64** (Snapdragon Galaxy Book4 Edge) | Blocks entire Cowork feature on fast-growing ARM64 Windows install base. | 66 comments, 13 👍 — active troubleshooting, no workaround yet. |
| **[#5064](https://github.com/anthropics/claude-code/issues/5064)** | **Ctrl+Enter for newlines conflicts with standard conventions** — request customizable shortcuts | Core TUI UX friction; muscle-memory clash across editors/terminals. | 31 comments, **52 👍** — highest upvote count in this batch. |
| **[#22648](https://github.com/anthropics/claude-code/issues/22648)** | **Account-level settings sync across devices** | Eliminates manual `~/.claude/` replication for multi-machine developers. | 24 comments, 43 👍 — references 4 prior duplicate issues. |
| **[#11455](https://github.com/anthropics/claude-code/issues/11455)** | **Session Handoff / Continuity Support** | Enables seamless CLI↔Desktop↔Mobile workflow; critical for team collaboration. | 23 comments, 24 👍 — detailed spec proposal attached. |
| **[#51143](https://github.com/anthropics/claude-code/issues/51143)** | **Claude Desktop persistent blank/white screen on Windows** — Cowork unusable | Complete Desktop app failure; survives reinstalls. | 18 comments, 20 👍 — multiple users confirm same symptom. |
| **[#54186](https://github.com/anthropics/claude-code/issues/54186)** | **Local session history disappears after VS Code restart** | Data-loss risk for IDE-integrated workflows. | 13 comments, 14 👍 — macOS + VS Code specific. |
| **[#81703](https://github.com/anthropics/claude-code/issues/81703)** | **July 17 mass billing incident**: usage credits charged despite plan allowance ($704.71 disputed) | Direct financial impact; trust/customer-trust issue; Anthropic acknowledged root cause. | 7 comments — urgent, billing-critical. |
| **[#61172](https://github.com/anthropics/claude-code/issues/61172)** | **`/clear` inherits previous session name** → duplicate-named sessions in `/resume` | Breaks session management hygiene; regression. | 8 comments, 12 👍 — clean repro provided. |
| **[#79366](https://github.com/anthropics/claude-code/issues/79366)** | **Worktree sessions reuse existing worktree directory** instead of fresh clone | Corrupts isolation guarantee; cross-contaminates tasks. | 6 comments, 4 👍 — macOS Desktop app, worktree isolation enabled. |
| **[#81463](https://github.com/anthropics/claude-code/issues/81463)** | **Claude “flips” to role-playing abuser/narcissist in long conversations** | Alarming model-behavior regression; safety/UX concern. | 9 comments, 1 👍 — attributed to LCR (Long Context Recall) side-effect. |

---

## 4. Key PR Progress (All 6 PRs Updated in Last 24h)

| # | PR | Type | Summary |
|---|----|------|---------|
| **[#81673](https://github.com/anthropics/claude-code/pull/81673)** | Fix | **DevContainer firewall**: don’t abort `init-firewall.sh` on optional NXDOMAIN (e.g., `statsig.anthropic.com`); prevents half-populated ipset + default DROP policy. |
| **[#81672](https://github.com/anthropics/claude-code/pull/81672)** | Fix | **Hookify plugin**: make package import independent of install directory name; fixes marketplace installs where dir ≠ `hookify`. |
| **[#81670](https://github.com/anthropics/claude-code/pull/81670)** | Fix | **Plugins**: quote `${CLAUDE_PLUGIN_ROOT}` in hook commands (fixes paths with spaces); prefix hookify examples. |
| **[#20448](https://github.com/anthropics/claude-code/pull/20448)** | Feature | **Web4-governance plugin**: AI governance with T3 trust tensors, entity witnessing, R6 audit trails (cryptographic provenance). |
| **[#81576](https://github.com/anthropics/claude-code/pull/81576)** | Docs | **Security-guidance plugin README**: corrects hook count (25 patterns, not 9) and trigger types (3 distinct, not 1 `PreToolUse`). |
| **[#81540](https://github.com/anthropics/claude-code/pull/81540)** | Fix | **Usage leak** (#80705): automated Atlas contribution; closes billing-discrepancy bug. |

---

## 5. Feature Request Trends (Distilled from Open Issues)

1. **Cross-device state sync** — Settings, session read/unread state (#81568), and history (#54186) remain device-local; users demand account-scoped persistence.
2. **Session continuity & handoff** — Seamless resume across CLI/Desktop/Mobile (#11455), plus reliable naming (`/clear` regression #61172, duplicate names #81813).
3. **Customizable keybindings & i18n** — Ctrl+Enter conflict (#5064), MCP toggle shortcut (#69200), CLI prompt CWD display (#70132), full UI localization (#65963).
4. **Markdown rendering polish** — Heading-level visual distinction (#70368), light-theme accessibility (#77394).
5. **MCP/Plugin UX** — One-click enable/disable (#69200), robust hook installation (#81672, #81670), connector status accuracy (#79319).
6. **Governance & audit tooling** — Emerging interest in verifiable AI-agent workflows (#20448).

---

## 6. Developer Pain Points (Recurring High-Frequency Complaints)

| Area | Representative Issues | Frequency Signal |
|------|----------------------|------------------|
| **Windows ARM64 / Desktop stability** | #40198 (Cowork VM), #51143 (blank screen), #70200 (console flashes), #81398 (GPU crash) | 4+ distinct bugs, high 👍, no workarounds |
| **Session/history data integrity** | #54186 (VS Code history loss), #80662 (transcript text dropped mid-turn), #61172/#81813 (naming collisions), #79366 (worktree reuse) | 5+ issues, data-loss anxiety |
| **Billing & usage accounting** | #81703 (Jul 17 mass charge), #79773 (Max 20x not reflected), #81540 (usage leak) | Financial impact, trust erosion |
| **Plugin/hook fragility** | #81672 (import path), #81670 (unquoted paths), #66741 (MCP tab window reuse) | Blocks extensibility adoption |
| **Auth/sync loops** | #78946 (login loop), #81830 (Cowork/Code 403), #81568 (per-device read state) | Core auth/sync reliability |
| **Performance / resource leaks** | #81804 (VS Code extension OOM: 3.2 GB heap), #81398 (GPU process crash) | Blocker for long-running sessions |

---

*Digest generated from `anthropics/claude-code` GitHub data (issues & PRs updated 2026-07-28). Links point directly to GitHub for context.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-28

---

## 1. Today's Highlights

The Codex team shipped two alpha CLI releases (0.146.0-alpha.12/13) while the community rallied around the `/undo` feature request (#9203, 362 👍), now the top-voted open issue. Windows Desktop stability dominates recent bug reports—installation failures, sandbox hangs, browser crashes, and `apply_patch` regressions—while model capacity errors continue to disrupt long-running tasks across platforms. A batch of 15+ merged PRs from the internal `copyberry` bot addresses thread history fidelity, Windows exec reliability, MCP/plugin concurrency, and multi-agent config persistence.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.146.0-alpha.13` | Alpha CLI | Incremental alpha; follows alpha.12 by hours. No changelog linked—expect minor fixes and compaction/runtime tweaks. |
| `rust-v0.146.0-alpha.12` | Alpha CLI | Prior alpha in the 0.146 series. |

> **Action**: Alpha users should update to `.13` for latest sandbox/TUI fixes. Stable channel remains on 0.145.x.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#9203](https://github.com/openai/codex/issues/9203) | **Restore `/undo` command** | Critical safety net for untracked file deletions/modifications; users report repeated data loss. | **65 comments, 362 👍** — highest engagement in tracker |
| [#32149](https://github.com/openai/codex/issues/32149) | **Windows setup fails pre-UAC** | Blocks fresh installs on Windows; both setup paths broken. | 27 comments, 6 👍 — recent regression |
| [#24948](https://github.com/openai/codex/issues/24948) | **Session logs grow to 2 GB** | Compaction history + raw tool output bloat disk; affects long sessions. | 24 comments, 1 👍 — persistent since v0.118 |
| [#32094](https://github.com/openai/codex/issues/32094) | **App crashes on WebCodecs/canvas pages** | Embedded browser GPU integrity failure; tracked internally as BRWPLAT-293. | 18 comments, 2 👍 |
| [#25319](https://github.com/openai/codex/issues/25319) | **Scope VS Code chats to workspace** | Chat history leaks across projects; breaks context isolation. | 18 comments, **48 👍** |
| [#30712](https://github.com/openai/codex/issues/30712) | **Windows `apply_patch` fails, forces PowerShell fallback** | Sandbox injects split writable roots; safe edit path unusable. | 15 comments, 13 👍 |
| [#11324](https://github.com/openai/codex/issues/11324) | **MCP servers leak memory during multi-tasking** | Multi-day, multi-worktree usage drives OOM; Business tier impact. | 14 comments, 5 👍 |
| [#34027](https://github.com/openai/codex/issues/34027) | **`gpt-5.6-sol` unsupported on ChatGPT accounts** | Model silently dropped in latest update; capacity routing broken. | 5 comments, 5 👍 — **CLOSED** but signals release regression |
| [#35669](https://github.com/openai/codex/issues/35669) | **RemoteCompactionV2 loop loses state in side conversations** | Repeated auto-compaction corrupts ephemeral thread context. | 3 comments, new (Jul 27) |
| [#33732](https://github.com/openai/codex/issues/33732) | **Elevated Windows sandbox hangs after ACL setup** | Regression from #24098 fix; unelevated works, elevated stalls. | 2 comments, 1 👍 |

---

## 4. Key PR Progress (Merged Last 24h)

| # | PR | Area | Summary |
|---|----|------|---------|
| [#35695](https://github.com/openai/codex/pull/35695) | Logs client | Honors `sqlite_home`/`CODEX_SQLITE_HOME` config; fixes wrong DB reads. |
| [#35693](https://github.com/openai/codex/pull/35693) | TUI / Subagents | Background refresh of subagent picker; avoids input-blocking metadata locks. |
| [#35691](https://github.com/openai/codex/pull/35691) | Thread history | Includes empty-preview threads in spawn-graph listings; preserves relationships. |
| [#35689](https://github.com/openai/codex/pull/35689) | Thread history | Preserves item timestamps in projections; fixes zero-completion-timestamp handling. |
| [#35688](https://github.com/openai/codex/pull/35688) | Deps / Windows | Points `crossterm` patch to OpenAI OSS fork; refreshes lockfiles. |
| [#35685](https://github.com/openai/codex/pull/35685) | Sandbox / Config | Loads cloud-managed profiles for `codex sandbox --include-managed-config`. |
| [#35678](https://github.com/openai/codex/pull/35678) | Thread resume | Preserves paginated metadata (preview, title, first message) across resumes. |
| [#35675](https://github.com/openai/codex/pull/35675) | MCP / Plugins | Concurrent MCP discovery + plugin recommendations; cuts turn-prep latency. |
| [#35670](https://github.com/openai/codex/pull/35670) | Windows exec | Raises `exec_command` yield floor to 10s; stabilizes Ctrl-C integration tests. |
| [#35656](https://github.com/openai/codex/pull/35656) | Multi-agent config | Preserves `features.multi_agent_v2` across boolean/table config representations. |
| [#35655](https://github.com/openai/codex/pull/35655) | Windows exec | Terminates non-TTY processes on interrupt via existing termination path. |
| [#35653](https://github.com/openai/codex/pull/35653) | Multi-agent | Tests developer instruction inheritance for roleless workers on cold resume. |
| [#35652](https://github.com/openai/codex/pull/35652) | Network / Remote | Enables policy callbacks for remote exec with Guardian review timeouts. |
| [#35649](https://github.com/openai/codex/pull/35649) | TUI input | Caches palette on `FocusGained`; prevents keystroke loss during focus return. |
| [#31817](https://github.com/openai/codex/pull/31817) | Models | Automated `models.json` update (bot). |

> **Theme**: Heavy investment in thread/session fidelity, Windows exec reliability, and multi-agent config hygiene—mostly internal bot-driven merges.

---

## 5. Feature Request Trends

1. **Undo / Rollback Safety** — `/undo` (#9203) and conversation archival (#20115) top the wishlist; developers treat session history as project artifact.
2. **Workspace-Scoped Context** — VS Code extension needs per-workspace chat isolation (#25319, #15807 multi-window).
3. **Capacity-Aware Resilience** — Auto-retry with backoff on model capacity errors (#22390, #31278, #32020, #33878); users want intent preservation, not manual model switching.
4. **Configurable Defaults** — Projectless thread workspace directory (#22875), usage limit visibility (#30452).
5. **Multi-Agent / Subagent Maturity** — Tool inheritance (#25990), spawn_agent model support (#34700), developer instruction propagation (#35653).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Affected Surface |
|------------|----------|------------------|
| **Windows install & sandbox fragility** | #32149 (setup), #33732 (elevated hang), #30712 (apply_patch), #35311 (crash loop) | Desktop App |
| **Model capacity = hard stop** | #34027, #33878, #31278, #32020 — no auto-retry, loses task state | CLI, App, Extension |
| **Session bloat & compaction bugs** | #24948 (2 GB logs), #25619 (silent turn failure), #35669 (compaction loop) | CLI, App Server |
| **Browser/embedded Chrome leaks** | #32094 (WebCodecs crash), #34178 (orphaned 400% CPU processes) | Desktop App |
| **MCP memory growth** | #11324 — multi-day multi-worktree OOM | Desktop App |
| **Config/state loss on crash** | #26990 (pins/projects reset, future timestamps) | Windows Desktop |
| **TUI input/focus regressions** | #35649 (keystroke loss), #35693 (picker blocks input) | CLI TUI |

---

**Next Watch**: `/undo` implementation decision, Windows 0.146 stable promotion, and whether capacity-error auto-retry lands before next major release.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-28

## 1. Today's Highlights
The nightly release **v0.54.0-nightly.20260728** delivers two targeted fixes: normalizing CRLF line endings in the A2A server to restore Windows diff highlighting, and hardening the file-based keychain with explicit authentication tag validation. Meanwhile, the PR queue shows a strong security focus — patches for variable-expansion bypasses, stray `Authorization` headers, and MCP OAuth token refresh regressions — alongside core stability work eliminating synchronous I/O on the shell critical path and a circular-reference guard in settings merge.

## 2. Releases
**v0.54.0-nightly.20260728.gbef611950** ([release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-nightly.20260728.gbef611950))
- **fix(a2a-server)**: Normalize CRLF → LF in `getProposedContent` ([#28531](https://github.com/google-gemini/gemini-cli/pull/28531)) — restores side-by-side diff highlighting in Gemini Code Assist on Windows.
- **fix(core)**: Enforce explicit 128-bit tag length & validation in file keychain ([#28523](https://github.com/google-gemini/gemini-cli/pull/28523)) — prevents malformed/truncated auth tags across Node runtimes.

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports `GOAL` success after hitting `MAX_TURNS` | Masks real failures; breaks trust in subagent automation | 12 comments, 2 👍 — **P1, needs retest** |
| [#26911](https://github.com/google-gemini/gemini-cli/issues/26911) | 429 Too Many Requests at <10% quota | Renders CLI unusable for 5–60 min; only visible in debug logs | 11 comments, 2 👍 — **P2, Stale** |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations (EPIC) | Scaling behavioral evals from 76 tests across 6 models | 7 comments — **P1, maintainer-only** |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads/search/mapping (EPIC) | Potential to cut turns & token noise via precise method-bound reads | 7 comments, 1 👍 — **P2** |
| [#28477](https://github.com/google-gemini/gemini-cli/issues/28477) | Support OpenAI-compatible & local LLM providers | Unlocks multi-provider workflows; high community demand | 6 comments — **needs triage** |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini rarely auto-uses skills/sub-agents | Forces explicit invocation; reduces agent autonomy | 6 comments — **P2, maintainer-only** |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Wastes cycles & clutters inbox; no backoff/quarantine | 5 comments — **P2, maintainer-only** |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell execution stuck at “Waiting input” post-completion | Frequent hang on trivial commands; blocks interactive use | 4 comments, 3 👍 — **P1, effort/medium** |
| [#28278](https://github.com/google-gemini/gemini-cli/issues/28278) | TOCTOU race in IDE server auth token creation (CLOSED) | Token written before `chmod 600`; local privilege escalation risk | 3 comments — **P2, security** |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error when >128 tools available | Hard tool-count limit; forces manual tool scoping | 3 comments — **P1, effort/medium** |

## 4. Key PR Progress (10 Notable Merges/Open)

| PR | Area | Summary |
|----|------|---------|
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | **Security** | Blocks `$VAR`/`${VAR}` expansion bypass (GHSA-wpqr-6v78-jr5g); hardens dedup workflow. **P1** |
| [#28546](https://github.com/google-gemini/gemini-cli/pull/28546) | **Security** | Strips `Authorization` header when using `GEMINI_API_KEY` auth; prevents header leakage to Google endpoints. **P1** |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | **Security/MCP** | Refreshes MCP OAuth tokens with stored client ID; fixes forced re-auth on every startup. **P1** |
| [#28397](https://github.com/google-gemini/gemini-cli/pull/28397) | **Core Perf** | Replaces sync `fs` calls in `shell.ts` with async promises; eliminates UI stutter during background commands. **P2** |
| [#28394](https://github.com/google-gemini/gemini-cli/pull/28394) | **Core** | Cleans temp directories on background process exit; fixes permanent temp-folder leak. **P1** |
| [#28389](https://github.com/google-gemini/gemini-cli/pull/28389) | **Agent** | Adds real-world time budget to `sendMessageStream`/`processTurn`; prevents infinite event-loop transitions. **P1** |
| [#28387](https://github.com/google-gemini/gemini-cli/pull/28387) | **Core** | Guards `customDeepMerge` against circular references (fixes #28270 crash). **P2** |
| [#28388](https://github.com/google-gemini/gemini-cli/pull/28388) | **Core/Policy** | Scopes `tools.core` wildcard deny to built-in tools only; stops MCP tools from being silently disabled. **P2** |
| [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) | **macOS/Sandbox** | Falls back to embedded Seatbelt profiles if static `.sb` files missing; fixes sandbox startup crash. **Open** |
| [#28485](https://github.com/google-gemini/gemini-cli/pull/28485) | **Core/Models** | Adds `gemini-3.5-flash`/`3.6-flash` to model selector for all users (fixes #28483). **P2** |

## 5. Feature Request Trends
1. **Multi-provider LLM support** — Strong demand for OpenAI-compatible & local model integration ([#28477](https://github.com/google-gemini/gemini-cli/issues/28477)), reflecting desire to avoid vendor lock-in.
2. **AST-aware code navigation** — Ongoing EPIC ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) to reduce token waste via precise method-level reads.
3. **Subagent observability & control** — Requests for trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), config adherence ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), and auto-invocation ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)).
4. **Memory system hardening** — Quarantine invalid patches ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), and retry backoff ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
5. **Browser agent resilience** — Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), session takeover ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), and settings propagation.

## 6. Developer Pain Points
- **Rate-limiting opacity** — 429 errors surface only in debug logs, stall sessions for up to an hour ([#26911](https://github.com/google-gemini/gemini-cli/issues/26911)).
- **Shell tool hangs** — “Waiting input” state persists after command completion, blocking interactive flows ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)).
- **Tool-count ceiling** — Hard 128-tool limit triggers 400 errors; no automatic scoping ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)).
- **Subagent trust issues** — False `GOAL` success on turn-limit exhaustion ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), missing context in bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Auto Memory noise** — Indefinite retry of low-signal sessions clutters inbox; no quarantine for malformed patches ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
- **Platform gaps** — Browser agent broken on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)); macOS sandbox crashes without embedded profiles ([#28551](https://github.com/google-gemini/gemini-cli/pull/28551)).

---

*Generated from `google-gemini/gemini-cli` GitHub data (issues, PRs, releases) updated 2026-07-28.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-28

## Today's Highlights
- **v1.0.76-0 released** with faster MCP tool loading via definition-scoped snapshots and a new `stayInAutopilot` setting that keeps Autopilot mode active after task completion by default.  
- **Plan-mode regression** (#4188) blocks shell commands (e.g., `gh` CLI) during planning, breaking workflows that enrich plans with live data.  
- **Zombie process leak** (#4163, closed) fixed in recent builds — child processes no longer accumulate under the Copilot PID on Linux.  
- **ACP parity gaps** surface across multiple issues: missing `usage_update` emissions (#4233), no context-tier config at runtime (#4275), and absent token/cost telemetry (#4174, #4224).

---

## Releases
### v1.0.76-0
| Category | Changes |
|----------|---------|
| **Improved** | MCP tools load faster from definition-scoped snapshots; process-wide and per-server cache opt-outs added. |
| **Improved** | Autopilot stays selected after `task_complete` by default; set `stayInAutopilot: false` to return to interactive mode. |
| **Fixed** | Early warning restored when [truncated in source — see release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.76-0). |

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4188](https://github.com/github/copilot-cli/issues/4188) | **Plan-mode regression: shell commands blocked** | Breaks planning workflows that use `gh`, `git`, or other CLIs to fetch context (issues, PRs, repo state). | 6 comments, 3 👍 — active discussion on workarounds. |
| [#1730](https://github.com/github/copilot-cli/issues/1730) | **`sessionStart` hook not firing** | Hooks in `.github/hooks/` are a key extensibility point; silent failure undermines automation. | 6 comments, 3 👍 — Windows/PowerShell specific. |
| [#4163](https://github.com/github/copilot-cli/issues/4163) | **Zombie process accumulation (Linux)** | ~2 zombies/min leak per session; fixed in recent builds but validates stability focus. | 5 comments, 3 👍 — closed with fix. |
| [#4183](https://github.com/github/copilot-cli/issues/4183) | **Auto-compaction doesn’t prevent 5 MB CAPI limit** | Long tool-heavy sessions hit hard body limit despite token headroom; breaks continued use. | 4 comments, 10 👍 — high pain for power users. |
| [#1381](https://github.com/github/copilot-cli/issues/1381) | **Rewind requires git (blocks jj, etc.)** | Rewind is essential but tied to git; VS Code Copilot works without git. | 3 comments, 9 👍 — strong demand for VCS-agnostic rewind. |
| [#4233](https://github.com/github/copilot-cli/issues/4233) | **ACP missing `usage_update` emission** | ACP clients (Zed, etc.) can’t show context-window/credit usage — parity gap with interactive CLI. | 2 comments, 2 👍 — blocking for ACP integrators. |
| [#4161](https://github.com/github/copilot-cli/issues/4161) | **`task_complete` unavailable after re-entering Autopilot** | Regression of #1523; breaks multi-task Autopilot flows. | 2 comments, 3 👍 — confirmed on v1.0.75. |
| [#4224](https://github.com/github/copilot-cli/issues/4224) | **OTel spans for subagents omit billing attributes** | Subagent (`task` tool) calls consume credits but lack `github.copilot.nano_aiu`/`cost` attrs — undercounts billing. | 1 comment — observability/cost-accounting blocker. |
| [#4159](https://github.com/github/copilot-cli/issues/4159) | **Windows Terminal: UI goes blank after prompt submit** | Interactive mode unusable on Windows Terminal; `-p` mode works. | 1 comment, 3 👍 — platform-specific regression. |
| [#4118](https://github.com/github/copilot-cli/issues/4118) | **`/app` doesn’t default to CWD** | Minor UX but high friction; 35 👍 shows broad annoyance. | 0 comments, 35 👍 — simple fix, high visibility. |

---

## Key PR Progress (Notable Open PRs Updated Today)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#1598](https://github.com/github/copilot-cli/pull/1598) | **`install.sh`: trap to clean temp dir on unexpected exit** | Prevents `/tmp` leaks on download/network failures. | Open, stale (Feb) |
| [#1116](https://github.com/github/copilot-cli/pull/1116) | **Docs: 0x models don’t reduce quota** | Corrects misleading README claim. | Open, stale (Jan) |
| [#988](https://github.com/github/copilot-cli/pull/988) | **README: fix `brew install` formula name** | `copilot-cli` formula doesn’t exist; needs correct name. | Open, stale (Jan) |
| [#1609](https://github.com/github/copilot-cli/pull/1609) | **PAT permissions: clarify `Copilot Requests` location** | Helps users find the right permission tab. | Open, stale (Feb) |
| [#1333](https://github.com/github/copilot-cli/pull/1333) | **Minor grammar/Markdown fixes** | Cosmetic. | Open, stale (Feb) |
| [#2800](https://github.com/github/copilot-cli/pull/2800) | **Initial devcontainer config** | Enables consistent dev environment. | Open, stale (Apr) |
| [#3928](https://github.com/github/copilot-cli/pull/3928) | **Add `.gitignore` and settings config** | Project hygiene. | Open, recent (Jun) |
| [#4030](https://github.com/github/copilot-cli/pull/4030) | **GitHub Actions workflow for Jekyll deployment** | Docs site automation. | Open, recent (Jul) |
| [#3473](https://github.com/github/copilot-cli/pull/3473) | **Spam/malicious content** | Irrelevant — likely spam. | Open |
| [#3880](https://github.com/github/copilot-cli/pull/3880) | **Spam/malicious content** | Irrelevant — likely spam. | Open |

> **Note:** Most PRs are stale (months old) or low-impact docs/hygiene. No major feature/fix PRs merged in last 24h.

---

## Feature Request Trends (from Issues)

1. **ACP Protocol Parity** — Multiple issues (#4233, #4174, #4275, #4224) demand feature parity between interactive CLI and ACP server: usage telemetry, context-tier switching, billing attributes, token/cost exposure.
2. **Autopilot Persistence** — #3977, #4161, #4188: users want Autopilot to stay active across tasks, retain `task_complete`, and not block shell commands in plan mode.
3. **VCS-Agnostic Rewind** — #1381: rewind should work with jj, fossil, etc., not just git.
4. **Model/Context Control** — #2792 (auto-switch planning vs. execution models), #4272 (org policy blocking new models), #4275 (runtime context-tier in ACP).
5. **Hook Reliability** — #1730: `sessionStart` and other hooks must fire consistently across platforms/shells.
6. **Windows Terminal Stability** — #4159, #4263: rendering issues (blank UI, content disappearance) in split panes/scrolling.
7. **Subagent Observability** — #4224: OTel spans for delegated work must include billing attrs for accurate cost tracking.

---

## Developer Pain Points (Recurring Frustrations)

| Area | Pain Point | Frequency Signals |
|------|------------|-------------------|
| **ACP Integration** | Missing telemetry (`usage_update`, token usage, cost), no runtime config (contextTier), subagent billing blind spots | 4+ issues, high 👍 on #4183 (10), #1381 (9) |
| **Autopilot/Plan Mode** | Mode reverts after task, `task_complete` disappears, plan mode blocks shell tools | 3+ issues, active discussion on #4188 |
| **Windows Terminal** | UI blank after prompt, content vanishes in splits, clipboard broken in tmux/screen/WSL | 3 issues (#4159, #4263, #4191) |
| **Process/Resource Leaks** | Zombie processes (fixed), temp dir leaks (PR #1598), CAPI 5 MB hard limit despite compaction | #4163 closed, #4183 open |
| **Hooks & Extensibility** | `sessionStart` not firing, symlink behavior undocumented | #1730, #3264 |
| **Model Access** | New models greyed out by org policy with no self-serve enable path | #4272 |
| **UX Paper Cuts** | `/app` doesn’t default to CWD (35 👍), rewind git-only, pending message stale | #4118, #1381, #4281 |

---

*Digest generated from GitHub data as of 2026-07-28. Links point to live issues/PRs for full context.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-28

## Today's Highlights
The project saw no new releases in the past 24 hours, but five pull requests were opened or updated addressing critical bugs: a race condition in hook execution (PR #2565), MCP tool normalization for Moonshot API (PR #2539), prompt cache key configurability (PR #2562), and two Unicode encoding fixes for Windows environments (PRs #2560, #2561). Meanwhile, four issues were updated, highlighting ongoing instability in VS Code extension approval flows, hook lifecycle management, and network connectivity during login.

---

## Releases
*No new releases published in the last 24 hours.*

---

## Hot Issues
| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2564](https://github.com/MoonshotAI/kimi-cli/issues/2564) | **PostToolUse / PostToolUseFailure hooks garbage-collected before completion** | Core hook subsystem unreliable; fire-and-forget tasks silently dropped due to weak references in asyncio. Affects automation, logging, and custom tooling workflows. | 0 👍, 0 comments — newly filed, but root cause identified in `toolset.py`. |
| [#2563](https://github.com/MoonshotAI/kimi-cli/issues/2563) | **VS Code extension: approval prompts intermittently never render** | Blocks interactive coding sessions; users experience indefinite stalls or 600s silent timeouts on `ExitPlanMode` / tool permission prompts. | 0 👍, 0 comments — high-severity UX regression in v0.6.4 (darwin-arm64). |
| [#2317](https://github.com/MoonshotAI/kimi-cli/issues/2317) | **Plan mode file paths not clickable in chat webview** | Reduces developer velocity; cannot jump to referenced files from plan output in VS Code webview. | 0 👍, 3 comments — persists since May, affects plan-mode usability. |
| [#1070](https://github.com/MoonshotAI/kimi-cli/issues/1070) | **Login failed: Cannot connect to auth.kimi.com:443 (network unreachable)** | Authentication broken for users in restricted networks; SSL/TLS handshake fails despite valid credentials. | 0 👍, 8 comments — closed but unresolved for some; suggests proxy/VPN sensitivity. |

---

## Key PR Progress
| # | PR | Description | Status |
|---|----|-------------|--------|
| [#2565](https://github.com/MoonshotAI/kimi-cli/pull/2565) | **fix(hooks): keep strong reference to fire-and-forget hook triggers** | Stores `asyncio.Task` in a `list` to prevent GC; adds done-callback for error logging. Direct fix for #2564. | Open |
| [#2539](https://github.com/MoonshotAI/kimi-cli/pull/2539) | **fix(mcp): normalize tools for Moonshot API** | Generates stable aliases for MCP tool names; adds missing root `object` type; fixes `anyOf`/required schema propagation. | Open (updated 2026-07-27) |
| [#2562](https://github.com/MoonshotAI/kimi-cli/pull/2562) | **fix(llm): allow disabling prompt cache key** | Adds `prompt_cache_key` boolean to `kimi` provider config; omits session-derived key when `false`. Documented in EN/CN. | Open |
| [#2561](https://github.com/MoonshotAI/kimi-cli/pull/2561) | **Fix UnicodeEncodeError on startup (non-UTF-8 stdio, Windows)** | Guards banner printing with encoding-safe fallback; fixes crash in Git Bash (codepage 936/GBK). Resolves #1436. | Open |
| [#2560](https://github.com/MoonshotAI/kimi-cli/pull/2560) | **Fix UnicodeEncodeError in web banner (Windows, redirected stdout)** | Handles `print_banner` encoding for `kimi web` under Chinese locale; prevents pre-bind crash. Resolves #2532. | Open |

---

## Feature Request Trends
From the active issues and PRs, the community is implicitly requesting:
1. **Reliable hook execution guarantees** — developers depend on `PostToolUse`/`PostToolUseFailure` for observability and cleanup; current fire-and-forget semantics are unsafe.
2. **First-class VS Code extension stability** — approval flow rendering, clickable references, and timeout handling are baseline expectations for IDE integration.
3. **Cross-platform encoding resilience** — Windows (GBK/CP936), Git Bash, and redirected stdout scenarios must not crash on Unicode logos or banners.
4. **Configurable LLM caching behavior** — explicit control over `prompt_cache_key` enables cost/latency tuning for enterprise and self-hosted deployments.

---

## Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Hook tasks silently dropped** | #2564 + #2565: `asyncio` weak-ref GC kills `PostToolUse` hooks non-deterministically | High (core automation broken) |
| **VS Code approval UI freezes** | #2563: `ExitPlanMode`/permission prompts never appear, causing 600s hangs | High (blocks interactive use) |
| **Windows encoding crashes** | #2560, #2561, #1436: banner/logo Unicode kills process on GBK/CP936 consoles | Medium (Windows-onboarding blocker) |
| **Login fails in restricted networks** | #1070: `auth.kimi.com:443` unreachable despite valid creds; SSL/TLS issues | Medium (recurring, 8 comments) |
| **Plan-mode UX gaps** | #2317: file paths in webview not clickable since May | Low (usability, not blocking) |

---  
*Digest generated from GitHub data as of 2026-07-28. All links point to live items on `MoonshotAI/kimi-cli`.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-28

## Today's Highlights
OpenCode shipped **v1.18.7** and **v1.18.6** back-to-back, addressing macOS fullscreen titlebar insets, command palette regressions, project selector scrolling, and a core branch-cache bug. The issue tracker shows a surge of **Deepseek V4 Flash regressions** post-1.18.4 (multiple reports of incomplete responses), plus a recurring **AutoScroller/Scroller plugin dependency error** breaking desktop dev builds. Meanwhile, the core team is actively refreshing **system prompts across providers** (Meta, Gemini, Codex, GPT) and refactoring the desktop app into V2 session controllers.

---

## Releases
### v1.18.7 (Desktop)
- **macOS fullscreen**: Removed extra titlebar inset.
- **Command palette**: Fixed shadowed-command reappearance bug.
- **Project selector**: Added scrolling for long project lists.  
  👤 *Contributor: @david1gp*

### v1.18.6 (Core + Desktop)
- **Core**: Fixed branch-specific repository cache invalidation (refreshing one ref no longer moves another branch checkout).
- **Desktop**: Improved compatibility with newer client API across directory, project, session, and terminal flows; fixed legacy MCP issues.

---

## Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8501](https://github.com/anomalyco/opencode/issues/8501) | **Allow expanding pasted text summaries** (`[Pasted ~1 lines]`) | Highest engagement (220 👍, 31 comments); users want to edit/inspect pasted content before sending. | 🔥 Top feature request since 2026-01 |
| [#25270](https://github.com/anomalyco/opencode/issues/25270) | **Model generates identical response twice** | Visual evidence of duplicate output; suggests streaming/turn-handling bug. | 23 comments, 4 👍 |
| [#37790](https://github.com/anomalyco/opencode/issues/37790) | **OpenCode Go paid but shows "Insufficient balance"** | Billing/subscription sync failure blocking paid users. | 11 comments |
| [#34184](https://github.com/anomalyco/opencode/issues/34184) | **Auto-renewed subscription but quota not reset** | Same billing domain; quota refresh lag after Stripe renewal. | 8 comments |
| [#38107](https://github.com/anomalyco/opencode/issues/38107) | **Fatal renderer error: `AutoScroller plugin depends on Scroller plugin`** | Blocks desktop dev builds (`bun run --cwd packages/desktop dev`). | 4 comments, 2 duplicate reports ([#38830](https://github.com/anomalyco/opencode/issues/38830)) |
| [#38598](https://github.com/anomalyco/opencode/issues/38598) / [#39219](https://github.com/anomalyco/opencode/issues/39219) | **Deepseek V4 Flash (FREE) not finishing tasks post-1.18.4** | Multiple users report model "becomes lazy", terminates early; regression tied to 1.18.4. | 2+2 comments |
| [#39205](https://github.com/anomalyco/opencode/issues/39205) | **Desktop: can only change theme once per settings page** | UX regression in settings persistence. | 2 comments |
| [#39218](https://github.com/anomalyco/opencode/issues/39218) | **Web UI: patch accordion text not selectable/copyable** | Blocks copying filenames & diff content from patches. | New, 0 comments but high utility impact |
| [#39221](https://github.com/anomalyco/opencode/issues/39221) | **Retry pre-output HTTP 408 from OpenAI-compatible streams** | Stream timeout handling: OpenCode terminates turn instead of retrying on 408 before first event. | New, affects proxy users |
| [#37429](https://github.com/anomalyco/opencode/issues/37429) | **Config dir changes don't trigger reloads (V2)** | Core config hot-reload gap for nested config directories. | 2 comments, linked to #8751/#10899 |

---

## Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#39245](https://github.com/anomalyco/opencode/pull/39245) | **fix(core): refresh system prompt references** | Prompt overhaul | Points system prompts at live V2 docs; updates tool names for Gemini, Codex, GPT; aligns managed background execution guidance. |
| [#39240](https://github.com/anomalyco/opencode/pull/39240) / [#39237](https://github.com/anomalyco/opencode/pull/39237) | **fix(core): align/refresh Meta system prompt** | Prompt sync | Restores `dev` wording, removes obsolete `TodoWrite`, updates V2 doc links & tool casing. |
| [#39239](https://github.com/anomalyco/opencode/pull/39239) | **fix(core): keep config root watches alive, ignore vendored trees** | Config hot-reload | Watch-once reconciliation (like plugin supervisor); ignores vendored trees inside config roots. Fixes [#37429](https://github.com/anomalyco/opencode/issues/37429). |
| [#39224](https://github.com/anomalyco/opencode/pull/39224) | **feat(core): reload configured plugins from source edits** | Plugin DX | Local plugins (`"./tools/my-plugin.ts"`) now hot-reload, matching auto-discovered `.opencode/plugin/` behavior. |
| [#39238](https://github.com/anomalyco/opencode/pull/39238) / [#39225](https://github.com/anomalyco/opencode/pull/39225) | **fix(core): bound search tool execution (30s deadline)** | Stability | Adds wall-clock deadline to glob/grep; returns focused error to narrow path/pattern. Fixes [#39208](https://github.com/anomalyco/opencode/issues/39208). |
| [#39242](https://github.com/anomalyco/opencode/pull/39242) | **fix(tui): hide background hint when all work backgrounded** | TUI polish | Fixes race where `state.metadata.background` checked before async `ctx.metadata()` resolves. Fixes [#36940](https://github.com/anomalyco/opencode/issues/36940). |
| [#39241](https://github.com/anomalyco/opencode/pull/39241) | **fix(app): follow visual tab order** | Desktop UX | Tab traversal derives from visible titlebar strip; skips hidden/unresolved tabs; Playwright regressions added. |
| [#39223](https://github.com/anomalyco/opencode/pull/39223) | **test(core): add scoped TestLLM service** | Test infra | Revives `TestLLM` pattern at `LLMClient.Service` seam; simplifies `session-runner.test.ts`. |
| [#39234](https://github.com/anomalyco/opencode/pull/39234) | **docs: forbid type-position import references** | Code style | New style rule; aliased type imports allowed only as last resort for name collisions. |
| [#39233](https://github.com/anomalyco/opencode/pull/39233) + [#39232](https://github.com/anomalyco/opencode/pull/39232) + [#39231](https://github.com/anomalyco/opencode/pull/39231) + [#39230](https://github.com/anomalyco/opencode/pull/39230) + [#39229](https://github.com/anomalyco/opencode/pull/39229) + [#39228](https://github.com/anomalyco/opencode/pull/39228) + [#39227](https://github.com/anomalyco/opencode/pull/39227) + [#39226](https://github.com/anomalyco/opencode/pull/39226) | **refactor(app): V2 controller extraction (8 PRs)** | Architecture | Massive desktop refactor: session controller, timeline, side panel, provider connection, server management, settings, keybinds, new-session composition. |

---

## Feature Request Trends
1. **Pasted content control** — Expand/summarize/edit pasted blocks before submission ([#8501](https://github.com/anomalyco/opencode/issues/8501)).
2. **Subscription & billing reliability** — Quota sync, payment verification, renewal handling ([#37790](https://github.com/anomalyco/opencode/issues/37790), [#34184](https://github.com/anomalyco/opencode/issues/34184)).
3. **Model provider parity** — Nvidia Nim models, newer provider versions (GitLab AI → Claude Opus 5) ([#38865](https://github.com/anomalyco/opencode/issues/38865), [#39095](https://github.com/anomalyco/opencode/issues/39095)).
4. **Session flexibility** — Change working directory mid-session ([#39199](https://github.com/anomalyco/opencode/issues/39199)), resume visibility in parent harness ([#39244](https://github.com/anomalyco/opencode/issues/39244)).
5. **Plugin/extension ergonomics** — Raw text generation without full agent pipeline ([#39243](https://github.com/anomalyco/opencode/issues/39243)), hot-reload for configured plugins (shipped in [#39224](https://github.com/anomalyco/opencode/pull/39224)).

---

## Developer Pain Points
- **Desktop dev environment broken**: AutoScroller/Scroller plugin dependency error prevents `bun run dev` in `packages/desktop` ([#38107](https://github.com/anomalyco/opencode/issues/38107), [#38830](https://github.com/anomalyco/opencode/issues/38830)).
- **Deepseek V4 Flash regression**: Model stops mid-task after 1.18.4; multiple independent reports ([#38598](https://github.com/anomalyco/opencode/issues/38598), [#39219](https://github.com/anomalyco/opencode/issues/39219)).
- **Streaming resilience**: HTTP 408 before first event kills turn instead of retrying ([#39221](https://github.com/anomalyco/opencode/issues/39221)).
- **Config hot-reload gaps**: Nested config dir changes not triggering reloads; vendored trees polluting watches ([#37429](https://github.com/anomalyco/opencode/issues/37429) — fixed in [#39239](https://github.com/anomalyco/opencode/pull/39239)).
- **Web UI copyability**: Patch accordion text unselectable, blocking diff/filename copy ([#39218](https://github.com/anomalyco/opencode/issues/39218)).
- **Settings persistence**: Theme change only works once per settings page open ([#39205](https://github.com/anomalyco/opencode/issues/39205)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-28

## Today's Highlights
The Pi ecosystem saw a flurry of bug fixes and extension API improvements over the last 24 hours. Critical crashes in the markdown renderer and terminal scrolling were resolved, while the extension system gained `ctx.scopedModels` exposure and fixed event-bus listener leaks. Provider-side work focused on Anthropic request-ID headers, Bedrock credential_process support, and OpenCode Go display-name correction.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5023](https://github.com/earendil-works/pi/issues/5023) | **Terminal randomly scrolls to session start** | Long-standing UX bug disrupting active coding sessions; 10 comments indicate widespread impact. | 🔴 High — 10 comments, open since May |
| [#6747](https://github.com/earendil-works/pi/issues/6747) | **API for mutating agent message markdown** | Enables extensions to add rich rendering (e.g., LaTeX formulas) without altering LLM context. | 🟢 In Progress — 8 comments, 2 👍 |
| [#6970](https://github.com/earendil-works/pi/issues/6970) | **GitHub Copilot auth invalidated by Pi’s plugin usage** | Root-caused token clobbering when Pi and `copilot-lsp`/Neovim run concurrently. | ✅ Closed — 4 comments, 1 👍 |
| [#7161](https://github.com/earendil-works/pi/issues/7161) | **Anthropic path missing `x-client-request-id`** | Breaks gateway session affinity for multi-account Claude proxies (e.g., round-robin). | 🟡 Open — 4 comments |
| [#7157](https://github.com/earendil-works/pi/issues/7157) | **OpenCode Go shows as “OpenCode Zen Go”** | Cosmetic but confusing in `--list-models`; quick fix merged. | ✅ Fixed via [#7173](https://github.com/earendil-works/pi/pull/7173) |
| [#7198](https://github.com/earendil-works/pi/issues/7198) | **Markdown renderer stack overflow on nested email quotes** | Crashes active sessions and corrupts saved transcripts; security-adjacent. | ✅ Closed — 2 comments |
| [#7193](https://github.com/earendil-works/pi/issues/7193) | **Extension event-bus listeners leak across reloads** | Memory/behavior leak when embedding `pi-coding-agent`; old listeners fire unexpectedly. | 🟡 Open — 0 comments, high severity |
| [#7194](https://github.com/earendil-works/pi/issues/7194) | **Full re-render every 1s when tool card scrolls OOB** | Major perf hit for remote/WS-forwarded sessions; 15% CPU in `visibleWidth`. | ✅ Closed — 1 comment |
| [#7196](https://github.com/earendil-works/pi/issues/7196) | **`visibleWidth` cache thrashing on large buffers** | LRU eviction PR reduces CPU hotspot from 15% → negligible. | ✅ Closed — 1 comment |
| [#7170](https://github.com/earendil-works/pi/issues/7170) | **AWS Bedrock `credential_process` unsupported** | Blocks enterprise AWS profiles using external credential helpers. | ✅ Closed — 2 comments |

---

## Key PR Progress (Top 10)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#7022](https://github.com/earendil-works/pi/pull/7022) | **Guard tree navigation during streaming responses** | Prevents state corruption when `/tree` is invoked mid-stream. | 🟡 WIP / In Progress |
| [#7163](https://github.com/earendil-works/pi/pull/7163) | **SQLite FTS5 search index for sessions** | Adds contentless virtual table for fast full-text session search; JSONL/memory fallbacks remain. | 🟢 Open |
| [#7191](https://github.com/earendil-works/pi/pull/7191) | **Expose `ctx.scopedModels` to extensions** | Read-only `ScopedModel[]` for model-picker UIs in companion apps. | ✅ Merged |
| [#7081](https://github.com/earendil-works/pi/pull/7081) | **Claude Opus 5 on Bedrock + adaptive thinking** | Configures required thinking mode; sanitizes Bedrock error payloads. | ✅ Merged |
| [#7184](https://github.com/earendil-works/pi/pull/7184) / [#7181](https://github.com/earendil-works/pi/pull/7181) | **Strip orphan multimodal markers from tool results** | Prevents tokenizer crashes (`mtmd_tokenize: media markers > bitmaps`). | ✅ Merged |
| [#7117](https://github.com/earendil-works/pi/pull/7117) | **Extension creation eval harness** | Adds `vitest-evals` adapter + isolated smoke test for create/reload/invoke cycle. | ✅ Merged |
| [#7178](https://github.com/earendil-works/pi/pull/7178) | **Status line for tool-output expansion toggle (Ctrl+O)** | Mirrors existing thinking-block feedback; improves discoverability. | ✅ Merged |
| [#7168](https://github.com/earendil-works/pi/pull/7168) | **`auth print-api-key` / `print-bearer-token` commands** | CLI helpers to inspect resolved credentials per provider/model. | ✅ Merged |
| [#7176](https://github.com/earendil-works/pi/pull/7176) | **Prefer explicit Bedrock profile over ambient AWS keys** | Fixes SDK credential precedence so named profiles win. | 🟢 Open |
| [#6881](https://github.com/earendil-works/pi/pull/6881) | **Use provider-reported cost when available** | Reads `usage.cost` / `cost_details.upstream_inference_cost` from OpenAI/Responses; falls back to catalog. | 🟡 In Progress |

---

## Feature Request Trends
1. **Extension API depth** — Repeated asks for `ctx.scopedModels`, terminal color-scheme events, custom editor component borders, and event-bus lifecycle hooks indicate developers are building sophisticated companion tooling.
2. **Provider parity & observability** — Anthropic request IDs, Bedrock credential_process, Z.AI `max_tokens`, OpenCode naming, and provider-reported cost all point to a push for production-grade multi-provider routing.
3. **Session search & indexing** — The SQLite FTS5 PR (#7163) and earlier JSONL search issues show demand for local session retrieval at scale.
4. **Authentication UX** — `auth print-*` commands and GitHub Copilot token isolation reflect needs for debugging and multi-device workflows.
5. **Settings persistence & feedback** — `autocompleteMaxVisible` regression, status-line toggles, and project-trust transitions highlight focus on reliable config UX.

---

## Developer Pain Points
- **Terminal rendering instability** — Random scroll-to-top (#5023), 1-second full re-renders (#7194), and cache thrashing (#7196) degrade remote/WS-forwarded sessions.
- **Extension lifecycle leaks** — Event-bus listeners surviving reloads (#7193), symlinked extension dirs ignored (#7195), and failed git installs poisoning dirs (#7189) make extension authoring fragile.
- **Auth token clobbering** — Pi’s GitHub Copilot Plugin usage invalidates tokens used by `copilot-lsp`/Neovim (#6970), a sharp edge for dual-editor users.
- **Markdown renderer crashes** — Nested email quotes cause stack overflow (#7198), losing session continuity.
- **Settings not persisting** — `autocompleteMaxVisible` resets on restart despite disk write (#7179), eroding trust in the settings UI.
- **Provider config gotchas** — Ambient AWS keys overriding explicit Bedrock profiles (#7176), missing `x-client-request-id` on Anthropic (#7161), and Z.AI ignoring `max_completion_tokens` (#7174) cause silent misbehavior.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-28

## 1. Today's Highlights
The project shipped two non-production DSW benchmark prereleases tied to the `v0.20.0-nightly.20260722` baseline, with SWE-bench Verified results showing 376/500 tasks resolved (status: **QUARANTINED**). Core development momentum remains high: 50 PRs updated in the last 24h, dominated by the stacked Agent View rollout (supervisor runtime, PTY workers, session lifecycle, CLI commands, and roster TUI) and a wave of correctness fixes for grep/ripgrep, memory rendering, and git guards. A main-branch E2E CI failure (#7889) was triaged and closed as a duplicate.

## 2. Releases
| Release | Type | Key Notes |
|---------|------|-----------|
| `dsw-manual-poc-20260727-2` | Benchmark prerelease | SWE-bench Verified: 376 resolved, 116 unresolved, 1 exec error (500/500 completed). Benchmark ref: `v0.20.0-nightly.20260722.b98306b7e`. |
| `dsw-manual-poc-20260727-1` | Benchmark prerelease | Same baseline; earlier POC run. |

> Both are **non-production** benchmark artifacts; no user-facing CLI release today.

## 3. Hot Issues (All 3 updated in last 24h)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7889](https://github.com/QwenLM/qwen-code/issues/7889) | **Main CI failed: E2E Tests on 6a432ad2ebce** (CLOSED, duplicate) | CI health gate; quick duplicate resolution shows mature triage. | 3 comments, bot-authored, auto-labeled. |
| [#7887](https://github.com/QwenLM/qwen-code/issues/7887) | **feat(tui): make Dynamic Workflow runs readable as an execution console** (OPEN, P2) | UX gap: long-running, multi-phase workflows are opaque; terminal-native console would improve observability. | 2 comments, roadmap/terminal-ux label. |
| [#7757](https://github.com/QwenLM/qwen-code/issues/7757) | **perf(serve): Measure and optimize daemon first-model-output latency** (OPEN, P2) | Cold-start improved (#7264), but *first token* latency still includes hidden work; critical for perceived responsiveness. | 2 comments, daemon + core scope. |

## 4. Key PR Progress (Top 10 by impact/complexity)

| # | Title | Type | Summary |
|---|-------|------|---------|
| [#7799](https://github.com/QwenLM/qwen-code/pull/7799) | **feat(cli): Add agent view supervisor runtime** | Feature (stack 1/5) | Authenticated local supervisor socket, JSON-line control protocol, persistent session metadata store, startup/shutdown handling. Foundation for managed background agents. |
| [#7800](https://github.com/QwenLM/qwen-code/pull/7800) | **feat(cli): Add agent view PTY workers** | Feature (stack 2/5) | PTY host layer for managed sessions: launches terminal hosts, exposes authenticated control, forwards attach streams, retains bounded recent output. |
| [#7801](https://github.com/QwenLM/qwen-code/pull/7801) | **feat(cli): Manage agent view session lifecycle** | Feature (stack 3/5) | Dispatch, adoption from resume, follow-up prompts, needs-input answers, attach recovery, stale host handling. |
| [#7802](https://github.com/QwenLM/qwen-code/pull/7802) | **feat(cli): Expose agent view commands** | Feature (stack 4/5) | CLI/slash-command entrypoints: background dispatch, managed resume, attach, list, logs, stop, kill, remove, daemon status. |
| [#7803](https://github.com/QwenLM/qwen-code/pull/7803) | **feat(cli): Add agent view roster UI** | Feature (stack 5/5) | TUI roster: sessions grouped by Needs input / Working / Completed; filtering, peek, attach, follow-up replies, blocking answers, pin, rename, stop/remove. |
| [#7863](https://github.com/QwenLM/qwen-code/pull/7863) | **fix(core): pass Grep pattern behind `-e`** | Bugfix | Prevents patterns starting with `-` from being interpreted as CLI options by external search binaries. |
| [#7888](https://github.com/QwenLM/qwen-code/pull/7888) | **Feat/robust ripgrep** | Reliability | Retries once with `--threads 1` on confirmed `EAGAIN` worker-thread failures; tightens error classification so true no-match ≠ failed search. |
| [#7867](https://github.com/QwenLM/qwen-code/pull/7867) | **fix(core): stop reporting "[0 lines truncated]"** | Bugfix | Replaces misleading truncation notice with accurate “unknown number of matches dropped” when ripgrep hits its output limit. |
| [#7851](https://github.com/QwenLM/qwen-code/pull/7851) | **fix(core): apply maxDepth to flat-format memory imports** | Bugfix | `processFlat` now respects `maxDepth` (previously tracked but never enforced), preventing runaway recursion in flat memory imports. |
| [#7885](https://github.com/QwenLM/qwen-code/pull/7885) | **ci: cache npm downloads for verify and tmux build steps** | CI perf | Adds `actions/cache@v4` keyed by `package-lock.json` hash; uses `npm ci --cache` to speed up verify/tmux jobs. |

## 5. Feature Request Trends
1. **Agent/Background Work Orchestration** — The 5-PR Agent View stack (supervisor, PTY workers, lifecycle, commands, roster) is the single largest in-flight feature, enabling managed, persistent, multi-session coding agents.
2. **Terminal-Native Observability** — #7887 requests a live execution console for Dynamic Workflows; roster UI (#7803) and PTY attach streams (#7800) point to a broader push for *glanceable* runtime visibility.
3. **Voice/Native Desktop Integration** — #7859 adds opt-in macOS Live Voice (global hotkey, projectless conversations), signaling investment in hands-free and cross-app workflows.
4. **Git-Centric Developer Flow** — #7731 introduces IntelliJ-style branch picker, commit dialog, and PR creation inside the web shell.

## 6. Developer Pain Points (Recurring Themes)
| Pain Point | Evidence |
|------------|----------|
| **Grep/ripgrep edge cases** | Three PRs in 24h: leading-dash patterns (#7863), `EAGAIN` worker retries (#7888), misleading truncation messages (#7867). |
| **Memory/import depth limits silently ignored** | #7851: `maxDepth` enforced only for tree-format, not flat-format imports. |
| **Destructive git commands slipping through guards** | #7531: `git clean`/`git checkout` force-flag and checkout gaps in AUTO guard. |
| **Subagent `ask_user_question` deadlocks** | #7882: background subagents hang indefinitely when calling `ask_user_question` (no user reachable). |
| **First-model-output latency after cold start** | #7757: session creation fast, but first *useful* output still slow; work shifted into first prompt. |
| **CI flakiness / E2E reliability** | #7889 (duplicate) + #7885 (caching to stabilize npm installs) show ongoing CI friction. |

---

*Digest generated from GitHub data (releases, issues, PRs updated 2026-07-27 → 2026-07-28). Links point to QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-28

## Today's Highlights
The v0.9.2 release candidate integration is underway with an umbrella PR (#4911) consolidating 82 commits across onboarding, fleet management, session persistence, visual systems, and billing fixes. A major dead-code remediation effort landed a bounded slice with CI ratcheting (PR #4938), while tooling for recording a real-session demo—critical for the new website and README—was merged (PR #4940). Cost-tracking accuracy continues to improve with route-scoped decomposition and cache-write pricing now enforced.

---

## Releases
*No new releases in the last 24 hours.*  
v0.9.2 release candidate integration is active on branch `codex/v092-integration-direct-main` (PR #4911).

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4042](https://github.com/Hmbown/CodeWhale/issues/4042) | **Environment-level tool sandboxing for sub-agents** | Enforces `tool_restrictions` across sessions, sub-agents, Fleet workers, and MCP servers—critical for secure multi-agent workflows. | 20 comments; closed, tracking runtime enforcement. |
| [#998](https://github.com/Hmbown/CodeWhale/issues/998) | **Incomplete text display — needs hover tooltip** | UX gap: truncated copy lacks full hover preview, hurting readability in dense transcripts. | 10 comments, 1 👍; open since May. |
| [#4526](https://github.com/Hmbown/CodeWhale/issues/4526) | **Add StepFun Plan & OpenCode Go endpoint configs** | Users on dedicated subscription endpoints (e.g., `api.stepfun.com/step_plan/v1`) cannot configure them. | 6 comments; closed, config gap addressed. |
| [#3983](https://github.com/Hmbown/CodeWhale/issues/3983) | **Make Work state model-visible on parent turns** | Hardens the Work surface (checklist + strategy) so sub-agent forks inherit correct state. | 5 comments; closed, part of v0.9.2. |
| [#4698](https://github.com/Hmbown/CodeWhale/issues/4698) | **Complete default skill-pack routing metadata** | Follow-up to bundled skill pack (v5); ensures opt-in live smoke docs and routing metadata. | 4 comments; closed, non-blocking follow-ups tracked. |
| [#2342](https://github.com/Hmbown/CodeWhale/issues/2342) | **Click output files to preview** | High-value UX: avoid manual directory navigation when agent emits file paths. | 4 comments; open since May. |
| [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) | **Dead-code sweep: 464 `#[allow(dead_code)]` across 143 files** | Compiler-blind technical debt; blocks drift detection. Stripping reveals 1,200+ dead items. | 3 comments; open, v0.9.3 sweep planned. |
| [#4797](https://github.com/Hmbown/CodeWhale/issues/4797) | **Cost system: dual pricing, unpriced cache writes, opaque `/cost`** | 2,003-line hand-maintained pricing table; cache writes unpriced; CNY derived incorrectly. | 3 comments; closed, two of three fixes landed. |
| [#3897](https://github.com/Hmbown/CodeWhale/issues/3897) | **O(N²) markdown re-parse on every streaming chunk** | Full message re-rendered per chunk; major perf bottleneck for long responses. | 3 comments; closed, fix in progress. |
| [#4906](https://github.com/Hmbown/CodeWhale/issues/4906) | **Record real session for site & README** | Zero visual demos exist; terminal agent is motion-heavy—first-time visitors must imagine it. | 2 comments; open, recording harness merged (PR #4940). |
| [#4764](https://github.com/Hmbown/CodeWhale/issues/4764) | **`edit_file` fails on CRLF files (Windows)** | Exact-match search breaks on `\r\n` line endings; blocks Windows users. | 2 comments; open. |
| [#4925](https://github.com/Hmbown/CodeWhale/issues/4925) | **`thinking_default_expanded` setting** | Space key captured by SSH/tmux; users want reasoning blocks expanded by default. | 1 comment; closed, implemented in PR #4928. |
| [#4930](https://github.com/Hmbown/CodeWhale/issues/4930) | **Enter during foreground shell should detach first** | Natural user impulse to type mid-command fails confusingly; needs auto-detach. | 1 comment; open. |
| [#4939](https://github.com/Hmbown/CodeWhale/issues/4939) | **`/cost`: decompose by route/token class, derive CNY** | Successor to #4797; demands granular, honest spend breakdown. | 0 comments; open. |
| [#4936](https://github.com/Hmbown/CodeWhale/issues/4936) | **Implement `/rc` command (docs say it exists, runtime doesn’t)** | Product instructs users to run `/rc` for runner enrollment; command missing. | 0 comments; open, critical docs/runtime gap. |

---

## Key PR Progress

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#4940](https://github.com/Hmbown/CodeWhale/pull/4940) | **Executable capture harness for real v0.9.2 session** | Supplies recording tooling for #4906; human-gated credential & taste call remain. | Closed |
| [#4938](https://github.com/Hmbown/CodeWhale/pull/4938) | **Bounded dead-code slice + CI ratchet** | Lands safe removals; adds gate (`dead_code_budget`) to prevent regression. | Closed |
| [#4935](https://github.com/Hmbown/CodeWhale/pull/4935) | **Fix ambient jellyfish silhouette** | `(v_v)`/`(v.v)` read as a face under dome; corrected to non-anthropomorphic frames. | Closed |
| [#4937](https://github.com/Hmbown/CodeWhale/pull/4937) | **Finalize stale shell transcript cells** | Stops live spinner on dead PTYs; renders static “stale/no-output” status instead. | Open |
| [#4912](https://github.com/Hmbown/CodeWhale/pull/4912) | **v0.9.2 docs: guide/vocab, getting-started, media manifest** | Harvests web-maturity lane: new routes, a11y landmarks, real-session media manifest. | Closed |
| [#4913](https://github.com/Hmbown/CodeWhale/pull/4913) | **Provider-free manifest×wire matrix for 4 benchmark routes** | WireMock tests for GLM-5.2, GLM-5-Turbo, kimi-k2, Qwen3-Coder—no live calls. | Closed |
| [#4931](https://github.com/Hmbown/CodeWhale/pull/4931) | **Migrate QA PTY harness from vt100 to rio-vt** | Swaps to Rio’s terminal engine for more accurate cell/color assertions. | Open |
| [#4904](https://github.com/Hmbown/CodeWhale/pull/4904) | **Fix composer: respect menu limit, resolve git mentions once** | Regression fix: `mention_menu_limit=0` now disables popup; dedupes mention resolution. | Closed |
| [#4929](https://github.com/Hmbown/CodeWhale/pull/4929) | **ACP: preserve numeric JSON-RPC IDs for avante.nvim** | String coercion broke Lua key distinction (`1` vs `"1"`); now preserves request ID type. | Closed |
| [#4928](https://github.com/Hmbown/CodeWhale/pull/4928) | **Add `thinking_default_expanded` setting** | Thinking blocks render expanded by default; Space still toggles per block. | Closed |
| [#4932](https://github.com/Hmbown/CodeWhale/pull/4932) | **Satisfy strict all-target clippy** | Fixes `clippy::useless_vec` in lane descriptor test; required for release gate. | Closed |
| [#4467](https://github.com/Hmbown/CodeWhale/pull/4467) | **OpenCode Zen provider** | Adds Zen models across Responses/Anthropic/Chat Completions; fixes `x-api-key` auth. | Closed |
| [#4911](https://github.com/Hmbown/CodeWhale/pull/4911) | **v0.9.2 RC integration (umbrella, draft)** | 82 commits ahead of main; focused harvest PRs target this branch for narrow review. | Closed |
| [#4908](https://github.com/Hmbown/CodeWhale/pull/4908) | **zh-Hans translations: 1,134 keys adversarially reviewed** | Second round quality pass; verified against en.json & AGENTS.md conventions. | Closed |
| [#4927](https://github.com/Hmbown/CodeWhale/pull/4927) | **Billing: dispatch-receipt classification, Moonshot/MiniMax truth, honest ceilings** | Bills from dispatch receipt (immutable mid-turn); splits Moonshot direct vs. router; route-scoped env URLs. | Closed |
| [#4926](https://github.com/Hmbown/CodeWhale/pull/4926) | **Onboarding: remote mode matrix, offline explore, appearance step, contributor skill** | Status from env vars only; `NeedsAction` never blocks; Ctrl+O exit; hostile-secret tests. | Closed |
| [#4924](https://github.com/Hmbown/CodeWhale/pull/4924) | **Fleet: saved exact Fleets + reasoning Router (two-phase admission)** | Frozen (provider,model) routes; permission/shell ceilings; role-alias canonicalization; collision detection. | Closed |
| [#4923](https://github.com/Hmbown/CodeWhale/pull/4923) | **Visual program slices: luminance audit, selection vocab, focus texture, opt-in sound, jellyfish** | 3:1 contrast floor; single-sourced `menu_style`; glyph+word `StatusKind`; ambient life opt-in. | Closed |
| [#4922](https://github.com/Hmbown/CodeWhale/pull/4922) | **Sessions: persistent rail, opt-in auto-resume, dashboard peek** | Durable archived flag; single-writer lifecycle; `/sessions` commands; typed auto-resume decisions. | Closed |

---

## Feature Request Trends
1. **Visual documentation** — Real-session recordings for website/README (#4906) to replace prose-only onboarding.  
2. **Cost transparency** — Granular, route-scoped spend breakdown with honest cache-write pricing (#4797, #4939).  
3. **Windows parity** — CRLF-safe `edit_file` (#4764), SSH/tmux key-binding workarounds (#4925).  
4. **Session & fleet persistence** — Archived sessions rail, opt-in auto-resume, saved exact Fleets with ceilings (#4922, #4924).  
5. **Provider endpoint completeness** — Dedicated endpoints for StepFun Plan, OpenCode Go (#4526), OpenCode Zen (#4467).  
6. **Reasoning UX** — Default-expanded thinking blocks, per-block

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*