# AI CLI Tools Community Digest 2026-08-23

> Generated: 2026-08-23 01:49 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-23)

---

## 1. Ecosystem Overview

The AI CLI tools landscape shows a **bifurcated maturity pattern**: established tools (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI) are deep in **stabilization and platform-integration work**—fixing Desktop/IDE wrapper bugs, auth flows, and cross-device session portability—while newer entrants (OpenCode, Pi, Qwen Code, DeepSeek TUI, Kimi) iterate rapidly on **core architecture** (memory systems, provider abstraction, TUI crate decomposition, review-loop automation). Windows parity, silent-failure observability, and multi-model/BYOK orchestration are universal pain points. No major feature releases shipped today; the ecosystem is in a **patch-and-harden phase**.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues Tracked | PRs Updated (24h) | Top Community Signal |
|------|----------------|-------------------|-------------------|---------------------|
| **Claude Code** | 2 patches (v2.1.240/241) | 10 | 0 | #45596 "Bring Back Buddy" — **1,171 👍** (largest mobilization) |
| **OpenAI Codex** | 2 alphas (0.150/0.149) | 10 | **6 merged** | #25719 macOS `syspolicyd` runaway — **394 👍** |
| **Gemini CLI** | 1 nightly (v0.56.0) | 10 | **10 open** | Subagent reliability cluster (P1, multiple issues) |
| **GitHub Copilot CLI** | 0 | 10 | 0 | #3282/#3709 Multi-model BYOK — **26-27 👍** |
| **Kimi Code CLI** | 0 | 3 | 2 (1 closed) | #1283 Memory persistence — **40 comments** |
| **OpenCode** | 0 | 10 | **10 updated** | #20695 Memory Megathread — **135 comments, 104 👍** |
| **Pi** | 0 | 10 | **8 updated** | #7547 Windows mega-thread — **39 comments** |
| **Qwen Code** | **1 stable (v0.22.0) + 1 nightly** | 3 | **10 updated** | #8102 Deterministic tool boundaries (security design) |
| **DeepSeek TUI** | 0 (v0.9.11 RC staged) | 3 | **8 updated** | #5316 Crate decomposition — **12 comments** |
| **Grok Build** | 0 | 0 | 0 | No activity |

**Observation**: Qwen Code is the only tool shipping a **stable release** today. OpenAI Codex, OpenCode, Pi, and DeepSeek TUI show the highest PR velocity. Claude Code has by far the strongest single-issue community mobilization.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Session Portability & Cross-Device Resume** | OpenAI Codex (#37403, #39954), GitHub Copilot CLI (#4514), Qwen Code (#9576, #9729), Pi (#8464) | Seamless CLI↔Desktop↔Mobile handoff; cloud session rehydration; cross-session messaging with policy gates |
| **Multi-Model / BYOK Orchestration** | GitHub Copilot CLI (#3282, #3709), OpenCode (provider config), Pi (#8489, #8450, #8438), DeepSeek TUI (#5406) | In-session model switching (`/model`), multiple custom providers, prefab templates, OpenAI-compatible gateway aggregation |
| **Memory / Context Persistence Across Sessions** | Claude Code (#82056, #84021), Gemini CLI (#26522), Kimi Code (#1283, #1478), OpenCode (#20695, #44264), Qwen Code (#8927) | Auto + manual layers, project-scoped retention, compaction modes (suffix/prepend), observable load status, retry backoff |
| **Windows Parity & Native Reliability** | Claude Code (#19637, #77832, #88600), OpenAI Codex (#40163, #34724, #4111), Gemini CLI (#21983), Pi (#7547, #8485), GitHub Copilot CLI (#4111) | cmd/ConPTY rendering, hook firing in git BASH, Defender I/O mitigation, auto-update orphan processes, WSL path normalization |
| **Hook / Tool Observability & Silent-Failure Elimination** | Claude Code (#84021, #77832, #82056), Gemini CLI (#28902, #28968), OpenCode (#44267, #44285), Qwen Code (#9602) | Output truncation alerts, hook firing guarantees, tool-display race fixes, audit lenses for review loops |
| **Provider Abstraction & Protocol Robustness** | OpenCode (#44281, #38767), Pi (#8489, #8479), DeepSeek TUI (#5406, #5543), Qwen Code (#9607) | Anthropic slug translation, deprecated param filtering, durable approval receipts, llama.cpp preset visibility |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI | Kimi Code |
|-----------|-------------|--------------|------------|-------------------|----------|-----|-----------|--------------|-----------|
| **Primary Focus** | Desktop/IDE wrapper stability; companion skill ecosystem | macOS Desktop reliability; Remote Control; TUI polish | Subagent architecture; tool-scoping; security hardening | Enterprise auth; BYOK multi-model; cloud workflow | Memory mgmt; live config reload; TUI power-tools | Windows/ConPTY; provider gateway; compaction automation | Review-loop automation; secure agent runtime; Web Shell | Crate modularity; supervision stack; TZ-aware billing | Memory persistence; enterprise proxy; plugin security |
| **Target User** | Professional devs using Anthropic models daily; Desktop app users | OpenAI ecosystem users; cross-device (mobile↔desktop) | Google Cloud / Vertex AI teams; extensibility-focused devs | GitHub Enterprise orgs; Copilot seat holders | Power users building custom agents/skills; OSS hackers | Windows-first terminal users; multi-provider aggregators | Enterprise/security teams; code-review automation | DeepSeek model users; orchestrator/CI integrators | Large-project devs needing cross-session context; Chinese enterprise |
| **Technical Approach** | Proprietary Desktop wrapper (Electron/Tauri); skill system | Rust TUI + Desktop app; App Server backend; MCP integration | Node.js/TypeScript; A2A server; Seatbelt sandbox | Go CLI; GitHub API deep integration; OTLP telemetry | Rust; event-sourced session state; Zig-based TUI components | Rust; ConPTY/PTY abstraction; provider registry pattern | Go/TypeScript; tmux-based rendering verification; UNIX sockets | Rust; JSONL outbox/webhook supervision; crate decomposition | Python/Node hybrid; plugin JSON contract; `~/.openclaw` convention |
| **Unique Differentiator** | `/buddy` companion skill (community demand) | Remote Control (mobile↔desktop); `codex exec --thread-source` | 128-tool hard limit; AST-aware tooling R&D; A2A protocol | `/model` BYOK switching; enterprise policy enforcement | Hot-reload agents/skills; suffix compaction; `LocationActivity` TTL | MindsHub/Parasail gateway; `/loadout` per-session extensions | `qwen review capture-tui` (pixel evidence); deferred suggestion recovery | Lifecycle outbox + control socket; Beijing-time billing logic | `~/.openclaw/workspace/` community memory convention |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenCode, Pi, DeepSeek TUI, Qwen Code** | 8-10 PRs/day; architectural refactors (Astro site, crate decomposition, supervision stack); nightly/RC cadence |
| **Stabilization Phase (High Engagement, Lower PR Velocity)** | **Claude Code, OpenAI Codex, Gemini CLI** | Massive issue engagement (1,171 👍, 394 👍); patch/alpha releases; focus on regressions & platform bugs |
| **Enterprise/Platform Integration Focus** | **GitHub Copilot CLI** | BYOK/auth issues dominate; 0 PRs but high-impact feature requests; tied to GitHub release train |
| **Early / Niche Community** | **Kimi Code, Grok Build** | <5 hot issues; memory/proxy pain points; Grok inactive |

**Maturity Indicators**:
- **Qwen Code** shipped the only **stable release** (v0.22.0) with OOM hardening and review-loop diagnostics.
- **OpenAI Codex** merged **6 PRs in one day**—focused sprint on TUI, thread metadata, MCP observability.
- **Claude Code**'s #45596 (1,171 👍) signals **deepest user attachment** to a specific feature.
- **OpenCode**'s Memory Megathread (135 comments) shows **community-driven debugging culture**.

---

## 6. Trend Signals (Industry Implications)

| Trend | Signal Strength | Reference Value for Developers |
|-------|-----------------|--------------------------------|
| **Desktop/IDE wrappers are the new reliability frontier** | 🔴 Critical | CLI cores are stable; Electron/Tauri/ConPTY wrappers (Claude, Codex, Pi, Copilot) leak memory, mis-handle auth, and break on Windows. Invest in wrapper testing or prefer pure-TUI tools (OpenCode, DeepSeek, Qwen). |
| **Session portability > raw model quality** | 🟠 High | Every major tool has cross-device resume failures. Tools solving this (Qwen's UNIX sockets, Codex's `thread_source`, Pi's continuation automation) will win enterprise adoption. |
| **Memory systems converging on "auto + manual + compaction modes"** | 🟠 High | Claude (auto-memory), Gemini (Auto Memory), Kimi (SOUL/USER/MEMORY.md), OpenCode (suffix compaction), Qwen (session rotation bounds). Expect standardization around **observable, configurable compaction**. |
| **Provider aggregation via OpenAI-compatible gateways** | 🟢 Emerging | Pi (MindsHub), DeepSeek (prefab templates), OpenCode (provider config), Copilot (BYOK). Reduces vendor lock-in; developers should design for **provider-agnostic tool calling**. |
| **Security hardening moving from "nice-to-have" to release gate** | 🟢 Emerging | Gemini (bash var bypass, Seatbelt, env sanitization), Qwen (deterministic tool boundaries, policy-gated messaging), DeepSeek (durable approval receipts). **Audit trails and sandboxing are becoming table stakes**. |
| **Windows is no longer an afterthought—it's a blocker** | 🔴 Critical | 5/9 tools list Windows regressions in top pain points. ConPTY drift, Defender I/O, hook failures, path separators. **CI must include Windows TUI rendering tests**. |
| **Silent data loss erodes trust faster than crashes** | 🔴 Critical | Hook output dropped (Claude), queued text discarded (Claude), PostCompact not firing (Claude), Auto Memory retries (Gemini), redacted tokens (DeepSeek). **Observability hooks must be first-class, not afterthoughts**. |

---

**Bottom Line for Technical Decision-Makers**:  
- **For stability today**: Qwen Code (stable release, review automation) or Gemini CLI (security hardening, A2A protocol).  
- **For extensibility & control**: OpenCode (hot-reload, memory architecture) or DeepSeek TUI (modular crate, supervision stack).  
- **For enterprise Windows fleets**: Pi (ConPTY fixes, Defender mitigation) or wait for Claude Code/Copilot CLI Windows patches.  
- **For cross-device workflows**: OpenAI Codex (Remote Control) or Qwen Code (cross-session messaging)—but expect friction.  

The ecosystem is **consolidating around three pillars**: **observable memory**, **provider-agnostic orchestration**, and **wrapper reliability**. Tools that ship fixes in these areas this quarter will define the 2027 baseline.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-23 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator: fix run_eval.py 0% recall` | Fixes the core evaluation pipeline (`run_eval.py`, `run_loop.py`, `improve_description.py`) that incorrectly reports 0% recall for all skill descriptions, breaking the description-optimization loop. | 10+ independent reproductions; blocks automated skill improvement; Windows stream-reading & parallel-worker fixes bundled. | **Open** (updated 2026-06-23) |
| 2 | **[#556](https://github.com/anthropics/skills/issues/556)** `run_eval.py: 0% trigger rate` (Issue) | Same root cause as #1298: `claude -p` never triggers skills/commands during evaluation, making precision/recall metrics meaningless. | 12 comments, 7 👍; confirmed blocker for skill-creator workflow. | **Open** (updated 2026-06-10) |
| 3 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Prevents orphan words, widow paragraphs, and numbering misalignment in AI-generated documents (PDF, DOCX, HTML). | Addresses a universal pain point—users rarely request good typography but always suffer from bad output. | **Open** (updated 2026-03-13) |
| 4 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills that evaluate any skill across 5 dimensions (structure, examples, resources, triggers, maintainability) and scan for security issues (secrets, injection, permissions). | First “skills that audit skills” proposal; enables marketplace quality gates. | **Open** (updated 2026-01-07) |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing, CI integration. | Covers full stack; high demand for standardized testing guidance. | **Open** (updated 2026-04-21) |
| 6 | **[#568](https://github.com/anthropics/skills/pull/568)** `servicenow` | Broad ServiceNow platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, Vulnerability Response, IntegrationHub. | Enterprise-focused; 4-month active discussion; large surface area. | **Open** (updated 2026-08-12) |
| 7 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file-existence verification → four-dimension reasoning audit (correctness, completeness, consistency, safety) in damage-severity priority order. | Universal, stack-agnostic quality gate; v1.3.0; ties to Issue #1385 pipeline proposal. | **Open** (updated 2026-07-02) |
| 8 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | Create, fill, read, convert OpenDocument Format (.odt, .ods) via pyexcel-ods3 / lxml; triggers on “ODT”, “LibreOffice”, “ISO standard”. | Open-standard document alternative to DOCX; active maintainer (kitao). | **Open** (updated 2026-04-14) |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Trust & Security Hardening** | #492 (43 comments, 2 👍) — community skills masquerading as official `anthropic/` namespace; #1175 — SharePoint permission logic in SKILL.md; #1487 — 156k token injection exhausting context window. | 🔴 **Critical** — Highest-comment issue is a namespace spoofing vulnerability. |
| **Organizational Skill Sharing** | #228 (16 comments, 8 👍) — org-wide library / direct sharing links instead of manual file transfer. | 🟠 **High** — Clear workflow pain point for teams. |
| **Evaluation & Quality Gates** | #556 (12 comments, 7 👍) — eval pipeline broken; #1385 (4 comments, 1 👍) — three-gate pipeline proposal (calibration → adversarial review → delivery verification); #1367 PR implements self-audit. | 🟠 **High** — Multiple converging threads on “skills that verify skills.” |
| **Platform Compatibility (Windows / Bedrock / MCP)** | #1099, #1050 — Windows subprocess/encoding bugs; #29 — Bedrock support; #16 — Expose skills as MCPs. | 🟡 **Medium** — Recurring friction for non-macOS/Linux users. |
| **Meta-Skills & Governance** | #412 (agent-governance proposal), #1329 (compact-memory), #202 (skill-creator rewrite), #189 (duplicate plugin content). | 🟡 **Medium** — Growing need for skill lifecycle tooling. |
| **Enterprise / Domain-Specific Skills** | #568 (ServiceNow), #181 (SAP-RPT-1-OSS), #12 (docx whitespace), #1362 (web-artifacts-builder). | 🟢 **Emerging** — Steady trickle of vertical-domain contributions. |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It’s Poised to Merge |
|----|-------|--------------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fixes | Blocks the entire skill-improvement loop; 10+ reproductions; includes Windows fixes. |
| **[#538](https://github.com/anthropics/skills/pull/538)** | `pdf` case-sensitivity fix | Trivial 8-line fix; breaks on Linux/CI; stale since April. |
| **[#541](https://github.com/anthropics/skills/pull/541)** | `docx` w:id collision fix | Prevents document corruption; root cause identified; 1-line ID-space fix. |
| **[#539](https://github.com/anthropics/skills/pull/539)** | `skill-creator` YAML validation | Prevents silent frontmatter corruption; early validation saves debugging time. |
| **[#1050](https://github.com/anthropics/skills/pull/1050)** | Windows `claude.cmd` + encoding | Two 1-line changes; unblocks Windows contributors. |
| **[#509](https://github.com/anthropics/skills/pull/509)** | `CONTRIBUTING.md` | Closes community-health gap (Issue #452); single highest-impact doc addition. |
| **[#1538](https://github.com/anthropics/skills/pull/1538)** | Spec compliance for `template/` skills | Fails `skills-ref validate`; required for reference-implementation credibility. |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for trustworthy, self-verifying skill infrastructure—secure namespacing, reliable evaluation pipelines, and meta-skills that audit other skills—before expanding the skill catalog further.**

---

# Claude Code Community Digest — 2026-08-23

---

## 1. Today's Highlights

Two patch releases (v2.1.240, v2.1.241) shipped with bug fixes and reliability improvements. The community's top signal remains the **#45596 "Bring Back Buddy" campaign** (1,171 👍, 268 comments), demanding restoration of the `/buddy` skill removed silently in April. Meanwhile, Desktop app stability issues—**SIGTERM kills every 5 minutes** (#62202) and **multi-account switching** (#18435, 748 👍)—dominate high-engagement discussions.

---

## 2. Releases

| Version | Summary |
|---------|---------|
| **v2.1.241** | Bug fixes and reliability improvements |
| **v2.1.240** | Bug fixes and reliability improvements |

*No feature changes or breaking changes noted in either release.*

---

## 3. Hot Issues (Top 10 by Community Impact)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#45596](https://github.com/anthropics/claude-code/issues/45596) Bring Back Buddy** | `/buddy` skill removed without notice in v2.1.97; developers lost a daily companion workflow | **1,171 👍, 268 comments** — largest community mobilization in repo history |
| **[#18435](https://github.com/anthropics/claude-code/issues/18435) Multi-account switching in Desktop** | No way to manage multiple Claude identities; forces logout/login for org/personal separation | **748 👍, 168 comments** — persistent request since Jan 2026 |
| **[#19637](https://github.com/anthropics/claude-code/issues/19637) Windows cmd rendering garbled** | Text overlapping/garbled in Command Prompt since v2.1.3–v2.1.5; blocks Windows CLI users | 18 👍, 25 comments — regression persisting 7+ months |
| **[#64630](https://github.com/anthropics/claude-code/issues/64630) macOS ignores default browser for login** | Auth flow opens non-default browser; breaks SSO/password-manager workflows | 26 👍, 18 comments — macOS Desktop app friction |
| **[#51267](https://github.com/anthropics/claude-code/issues/51267) Remote Control session hangs** | Mobile session silently stalls mid-execution; only local `Esc` recovers — no remote unstick | 17 👍, 17 comments — mobile reliability blocker |
| **[#62202](https://github.com/anthropics/claude-code/issues/62202) SIGTERM every 300s in Desktop/VS Code** | Child process killed at exact 5-min intervals; CLI unaffected — wrapper-specific | 3 👍, 7 comments — critical Desktop/IDE stability bug |
| **[#84021](https://github.com/anthropics/claude-code/issues/84021) Hook output >10K silently dropped** | `additionalContext` >10K chars persisted to temp file but never injected; no error/warning | 5 comments — silent data loss for memory plugins |
| **[#77832](https://github.com/anthropics/claude-code/issues/77832) PostCompact hook misses on Windows/git BASH** | Hook configured in settings fails to fire on compaction (0/3 observed); no reliability | 6 comments — hook system trust erosion on Windows |
| **[#82056](https://github.com/anthropics/claude-code/issues/82056) Auto-memory load visibility** | No in-session API to know if memory index loaded whole/truncated/failed | 1 👍, 9 comments — debugging opacity for long-context workflows |
| **[#85924](https://github.com/anthropics/claude-code/issues/85924) Mobile queued composer text discarded** | Typed feedback during "Queue feedback…" mode lost on response render or app background | 2 👍, 5 comments — mobile UX data loss |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Multi-profile / account management** | [#18435](https://github.com/anthropics/claude-code/issues/18435) (748 👍), [#88884](https://github.com/anthropics/claude-code/issues/88884) Docker onboarding loop | **Very High** — 748 👍 + recurring Docker/CI pain |
| **Skill/companion system restoration** | [#45596](https://github.com/anthropics/claude-code/issues/45596) (1,171 👍) | **Extreme** — largest single-issue mobilization |
| **Windows parity (rendering, hooks, paths)** | [#19637](https://github.com/anthropics/claude-code/issues/19637), [#77832](https://github.com/anthropics/claude-code/issues/77832), [#88600](https://github.com/anthropics/claude-code/issues/88600) | **High** — multiple distinct Windows regressions |
| **Mobile reliability (remote control, composer, queue)** | [#51267](https://github.com/anthropics/claude-code/issues/51267), [#85924](https://github.com/anthropics/claude-code/issues/85924) | **Medium-High** — mobile becoming daily-driver platform |
| **Hook/system observability** | [#84021](https://github.com/anthropics/claude-code/issues/84021), [#82056](https://github.com/anthropics/claude-code/issues/82056), [#77832](https://github.com/anthropics/claude-code/issues/77832) | **Medium** — plugin/memory authors need debuggability |
| **Agent/team panel UX improvements** | [#88907](https://github.com/anthropics/claude-code/issues/88907) (active-first sorting) | **Emerging** — scaling subagent workflows |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Silent failures without observability** — Hook output dropped (>10K), PostCompact not firing, auto-memory load status invisible, queued mobile text discarded. Developers cannot trust the platform when it discards data silently.

2. **Desktop app instability vs. CLI reliability** — SIGTERM every 5 min (#62202), CoworkVMService crashes requiring Task Manager kill (#88600), auth browser mismatch (#64630). The Desktop/IDE wrappers feel like second-class citizens.

3. **Windows as an afterthought** — cmd rendering broken 7+ months (#19637), hook failures in git BASH (#77832), SCM recovery access denied (#88600), Docker onboarding loops (#88884). Windows developers report consistent regression neglect.

4. **Model behavior regressions** — Cluster of `[MODEL]` issues (#85253–#85256, #88416) describing: inferred claims as facts, private deliberation leaking to GitHub, multi-part request truncation, `reasoning_extraction` false positives on benign code. Eroding trust in autonomous coding.

5. **Onboarding/credential friction** — Docker `--agent` flag triggers full 9-step onboarding every restart (#88884), auto-mode circuit breaker cached and poisons subsequent sessions (#75977). "Works on my machine" doesn't hold for containerized/CI workflows.

---

*Data sourced from `github.com/anthropics/claude-code` — issues/pulls updated 2026-08-22 to 2026-08-23.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-23

---

## 1. Today's Highlights

Two alpha releases shipped today (`rust-v0.150.0-alpha.7` and `rust-v0.149.0-alpha.7.2`), while the issue tracker shows **macOS stability regressions dominating community attention** — a persistent `syspolicyd`/`trustd` runaway (85 comments, 394 👍) and a new auth-invalidating regression when reopening conversations (38 comments, 27 👍). Six PRs landed today, focused on TUI cursor correctness, thread-source classification for `codex exec`, and MCP runtime status reporting.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.150.0-alpha.7` | Alpha | Latest 0.150 series alpha; no changelog in release notes. |
| `rust-v0.149.0-alpha.7.2` | Alpha | Patch to 0.149 series; likely addresses regressions from 0.149.0 (see #39883). |

> **Note:** Both are alpha builds; production users should await stable channel updates.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#25719](https://github.com/openai/codex/issues/25719) | **macOS: `syspolicyd`/`trustd` CPU & memory runaway** | Core desktop instability on macOS; makes Codex unusable for extended sessions. Open since June. | 85 comments, **394 👍** — highest engagement in tracker. |
| [#39162](https://github.com/openai/codex/issues/39162) | **macOS: Opening existing conversation invalidates ChatGPT auth** | Regression in 26.814.41407; forces re-sign-in on every session resume. Blocks daily workflow. | 38 comments, 27 👍; last known good: 26.810.52044. |
| [#29532](https://github.com/openai/codex/issues/29532) | **macOS: Persistent SQLite TRACE log churn post-0.142.0** | Disk I/O & log noise remain after partial fix; affects `~/.codex/logs_2.sqlite`. | 46 comments, 9 👍; ongoing since June. |
| [#37403](https://github.com/openai/codex/issues/37403) | **macOS: Desktop cannot resume Remote Control/CLI thread — `already has an active writer`** | Breaks cross-device workflow (mobile → desktop); regression from Aug 7 update. | 27 comments, 24 👍. |
| [#33685](https://github.com/openai/codex/issues/33685) | **Weekly limit draining at old 5-hour limit speed** | Rate-limit accounting appears broken; users hit caps unexpectedly on normal usage. | 28 comments, 15 👍; open since July. |
| [#39954](https://github.com/openai/codex/issues/39954) | **Windows + Android Remote Control: reconnect loop after initialize** | Remote Control unusable on Windows/Android combo; 409 Conflict → reconnect storm. | 10 comments; new Aug 21. |
| [#40163](https://github.com/openai/codex/issues/40163) | **Windows: ChatGPT/Codex process consumes 50+ GB RAM and crashes** | Critical memory leak/corruption in bundled `codex.exe`; immediate crash. | 3 comments; **filed today**. |
| [#39803](https://github.com/openai/codex/issues/39803) | **Repeated sign-in screen after completing response / opening session** | Auth flow loops; distinct from #39162 but same symptom class. | 8 comments; filed Aug 20. |
| [#34724](https://github.com/openai/codex/issues/34724) | **Windows CLI/TUI: blank terminal when resuming long threads (0.145.0)** | TUI fails to render transcript on resume; blocks CLI users on Windows. | 7 comments, 3 👍; open since July. |
| [#40140](https://github.com/openai/codex/issues/40140) | **`thread/realtime/start` fails: `Field session.model not allowed`** | Realtime WebRTC sessions broken since Aug 22 ~15:30Z; affects voice/conversation features. | 1 comment, 1 👍; **filed yesterday**. |

---

## 4. Key PR Progress (All 6 PRs Updated in Last 24h)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#40169](https://github.com/openai/codex/pull/40169) | Test | **Regression coverage for patch approval paging** — covers live/replayed approvals, scrolling, resize, dismiss/reopen, accept/cancel once. |
| [#40166](https://github.com/openai/codex/pull/40166) | Fix | **Move TUI cursor before showing it** — prevents brief cursor flash at stale position during draw; adds regression test. |
| [#40161](https://github.com/openai/codex/pull/40161) | Feature | **Allow `codex exec` callers to classify new threads** — adds `--thread-source <SOURCE>` (default `user`), propagated to forks; exposed as `threadSource` in TS SDK. |
| [#40155](https://github.com/openai/codex/pull/40155) | Feature | **Expose thread source in CLI & TS SDK** — enables integrations to attribute agent work to initiating feature; aligns with app-server/Python SDK. |
| [#40150](https://github.com/openai/codex/pull/40150) | Refactor | **Use thread source metadata for Guardian classifiers** — replaces `request_kind`/`is_guardian_mode` with `thread_source: guardian_classifier` in turn metadata. |
| [#40068](https://github.com/openai/codex/pull/40068) | Feature | **Report runtime MCP connection status** — adds nullable `runtimeStatus` to `mcpServerStatus/list` for thread-scoped live connection state. |

> All six PRs were **closed/merged today**, indicating a focused sprint on TUI polish, thread metadata, and MCP observability.

---

## 5. Feature Request Trends

From the issue corpus, the most-requested directions are:

1. **Session Portability** — Transfer sessions seamlessly between CLI, Desktop, and Remote Control ([#40055](https://github.com/openai/codex/issues/40055), [#37403](https://github.com/openai/codex/issues/37403), [#39954](https://github.com/openai/codex/issues/39954)).
2. **Granular Rate-Limit Visibility & Control** — Users want per-bucket accounting, restore 5-hour bucket, and configurable alerts ([#33685](https://github.com/openai/codex/issues/33685), [#32707](https://github.com/openai/codex/issues/32707)).
3. **Skill/Configuration Management** — Fix skill discovery paths, stop rewriting imported Claude paths, allow repo-level skill config ([#14941](https://github.com/openai/codex/issues/14941), [#40147](https://github.com/openai/codex/issues/40147)).
4. **Security Review Decoupling** — Enable Code Review without Security Review ([#38110](https://github.com/openai/codex/issues/38110), [#13597](https://github.com/openai/codex/issues/13597)).
5. **Branch-Selective Code Review** — Limit auto-review to default/allowed branches ([#13597](https://github.com/openai/codex/issues/13597)).

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

| Pain Point | Evidence | Affected Surfaces |
|------------|----------|-------------------|
| **macOS Desktop Instability** | #25719 (runaway daemons), #39162 (auth loss), #29532 (log churn), #40153 (SkyComputerUseService spawn storm), #37403 (Remote Control resume) | Desktop App, App Server |
| **Auth/Session Fragility** | #39162, #39803, #39883 (0.149.0 401), #40140 (realtime auth) | CLI, Desktop, App Server |
| **Windows-Specific Regressions** | #40163 (50 GB RAM), #34724 (blank TUI), #26199 (double paste), #24453 (hooks not firing), #34928 (sandbox helper 0xc0000142), #40100 (WSL path normalization), #40151 (transcript backfill) | Desktop, CLI, Sandbox |
| **Remote Control Reliability** | #37403 (macOS resume), #39954 (Windows/Android loop), #40167 (iOS not working) | Mobile ↔ Desktop, App Server |
| **Rate-Limit Opacity** | #33685 (weekly ≈ 5-hr), #32707 (bucket disappeared) | App, App Server, Billing |
| **CLI Boot Hard-Fail on DB Lock** | #35555 (flat 5s `busy_timeout`, no retry on `logs_2.sqlite`) | CLI |

---

**Next Digest:** 2026-08-24 — tracking 0.150 alpha progression, macOS regression fixes, and Remote Control stability.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-23

## 1. Today's Highlights
The project shipped nightly **v0.56.0-nightly.20260823** with a batch of stabilization fixes: symlink/junction deduplication for skills discovery, a security hardening for bash variable-expansion bypasses, and a terminal scrollback regression fix. Meanwhile, the issue backlog highlights systemic subagent reliability gaps—MAX_TURNS misreporting, generalist-agent hangs, and under-utilization of custom skills—plus Auto Memory extraction loops and a hard 128-tool limit triggering 400 errors.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [`v0.56.0-nightly.20260823.g5411f113c`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260823.g5411f113c) | Nightly | Automated version bump; includes PRs for symlink deduplication (#28968), security fix for `$VAR`/`${VAR}` bypass (#28902), terminal scrollback preservation (#28967), and `excludeTools` doc corrections (#28966, #28963). |

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS** | Masks real failures; investigators think work completed when it was cut off. | 13 comments, 👍2, P1, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks all delegated work; workaround is disabling subagents entirely. | 8 comments, 👍8, P1, `status/need-retesting` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command stuck at "Waiting input" after completion** | Frequent UX breakage on trivial commands; erodes trust in tool execution. | 4 comments, 👍3, P1, `effort/medium` |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions endlessly** | Wastes cycles & clutters inbox; no backoff or quarantine. | 5 comments, P2 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128 tools registered** | Hard ceiling blocks large workspaces/extensions; needs dynamic scoping. | 3 comments, P2 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21409) | **Browser subagent fails on Wayland** | Linux/Wayland users cannot use browser automation; P1 blocker. | 4 comments, 👍1, P1, `agent/browser` |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` (e.g., `maxTurns`)** | Configuration drift; users can’t tune subagent behavior. | 3 comments, P2, `status/need-retesting` |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Model rarely invokes custom skills/sub-agents autonomously** | Undermines extensibility investment; requires explicit prompting. | 6 comments, P2 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file read/search/mapping** | Strategic R&D: could cut turns & token noise for large codebases. | 7 comments, 👍1, P2, `kind/feature` |
| [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) | **CLI hangs at interactive prompt creating Vite app** | Common onboarding flow broken; needs behavioral eval + prompt fix. | 2 comments, P2, `status/need-information` |

## 4. Key PR Progress (Top 10 by Significance)

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#28902](https://github.com/google-gemini/gemini-cli/pull/28902) | **Security: block `$VAR`/`${VAR}` expansion bypass (GHSA-wpqr-6v78-jr5g)** | Open | Hardens shell injection defense; defense-in-depth for dedup workflow. |
| [#28968](https://github.com/google-gemini/gemini-cli/pull/28968) | **Dedupe symlinked/junctioned skills dirs during discovery** | Open | Fixes Windows junction/symlink double-scan (#28944); enables Agent Skills standard compliance. |
| [#28967](https://github.com/google-gemini/gemini-cli/pull/28967) | **Prevent clearing terminal scrollback on static refresh** | Open | Restores scrollback history in standard terminal mode (Linux/Unix). |
| [#28966](https://github.com/google-gemini/gemini-cli/pull/28966) / [#28963](https://github.com/google-gemini/gemini-cli/pull/28963) | **Correct `excludeTools` docs/examples (bare tool names only)** | Open | Fixes misleading docs that implied glob/command matching; points to policy engine for command-level blocking. |
| [#27862](https://github.com/google-gemini/gemini-cli/pull/27862) | **Preserve executing subagent tool calls in UI** | Open | Subagent calls no longer disappear while active (#22589). |
| [#27860](https://github.com/google-gemini/gemini-cli/pull/27860) | **Reset slash-command conflict dedupe when conflicts reappear** | Open | Re-notifies users if a resolved conflict returns (#24333). |
| [#27754](https://github.com/google-gemini/gemini-cli/pull/27754) | **A2A server: add missing `return` after 501 in GET /tasks/metadata** | Open | Prevents `ERR_HTTP_HEADERS_SENT` crash (#21729). |
| [#28940](https://github.com/google-gemini/gemini-cli/pull/28940) | **A2A server: clear stale cancellation error on new turns** | Open | Fixes “Execution aborted” on subsequent prompts after abort/cancel. |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | **Prompt for consent on extension env changes; sanitize runtime-altering vars** | Open | Closes MCP server env-injection bypass; enforces user consent. |
| [#28935](https://github.com/google-gemini/gemini-cli/pull/28935) | **Isolate Docker/container sockets & binaries in macOS Seatbelt** | Closed | Sandbox escape hardening: denies container daemon sockets, CLI binaries, Mach/XPC lookups. |

## 5. Feature Request Trends
1. **Subagent Observability & Control** — Trajectory sharing (`/chat share` #22598), config overrides (#22267), bug-report context (#21763), and autonomous skill invocation (#21968).
2. **AST-Aware Tooling** — Precision reads, symbol navigation, and codebase mapping to reduce turn/token overhead (#22745, #22746, #19561).
3. **Memory System Hardening** — Deterministic redaction, invalid-patch quarantine, retry backoff, and logging reduction (#26522, #26523, #26525, #26516).
4. **Sandbox & Runtime Isolation** — Zero-dependency OS sandboxing, post-execution intent routing (#19873), and macOS Seatbelt hardening (#28935).
5. **Terminal UX Polish** — Flicker-free resize (#21924), scrollback preservation (#28967), and interactive-prompt handling (#22465).

## 6. Developer Pain Points
- **Subagent reliability**: Hangs, false success reports, ignored configs, and Wayland incompatibility make delegation feel fragile.
- **Tool explosion**: Hard 128-tool limit forces manual scoping; no dynamic pruning or namespace isolation.
- **Auto Memory noise**: Infinite retries on low-signal sessions, post-hoc redaction, and silent patch drops create maintenance burden.
- **Shell execution UX**: “Waiting input” ghost state on completed commands; interactive prompts (Vite, etc.) not auto-handled.
- **Documentation trust**: `excludeTools` examples were wrong for months; developers built non-functional allow-lists.
- **Onboarding friction**: Symlinked agent/skill dirs not recognized (#20079, #28944); Windows junctions require workarounds.

---

*Generated from `google-gemini/gemini-cli` GitHub data (issues/PRs updated 2026-08-23). Links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-23

## Today's Highlights
No new releases shipped in the past 24 hours. The issue tracker shows active discussion around **multi-model BYOK support** (two high-engagement issues), a **Windows auto-update CPU spin bug**, and **MCP initialization failures** with FastMCP servers. Three new triage issues were filed today covering agent execution stalls, `--cloud` owner picker hangs, and insecure OTLP endpoint handling.

---

## Releases
*No releases published in the last 24 hours.*

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#3282](https://github.com/github/copilot-cli/issues/3282) | **Add multiple BYOK model capability** | Enables switching between multiple custom models in a single session without restarting; critical for teams evaluating local/self-hosted LLMs. | 26 👍, 9 comments — strong demand for multi-provider workflows. |
| [#3709](https://github.com/github/copilot-cli/issues/3709) | **Allow `/model` to switch between BYOK/local providers** | Extends the in-session model picker to include locally served models, removing the need for env-var juggling. | 27 👍, 5 comments — mirrors VS Code’s model-switching UX. |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | **MCP init fails on `server/discover` -32602** | Blocks integration with FastMCP (popular Python MCP framework); CLI treats missing method as fatal error. | 1 👍, 2 comments — actionable protocol compatibility fix. |
| [#4111](https://github.com/github/copilot-cli/issues/4111) | **Windows auto-update leaves orphaned 100% CPU processes** | Long-running sessions survive in-place updates, executing from `copilot.exe.old` and spinning a thread indefinitely. | 0 👍, 1 comment — high-severity Windows reliability bug. |
| [#4514](https://github.com/github/copilot-cli/issues/4514) | **Unable to restore remote session locally** | `/resume` fails to rehydrate cloud sessions on local machine, breaking cross-device workflow. | 1 👍, 1 comment — impacts developer mobility. |
| [#2306](https://github.com/github/copilot-cli/issues/2306) | **Intermittent “not authorized” enterprise policy error** | Recurring auth failure 2–3×/week; `/context` shows policy enabled but CLI rejects requests. | 3 👍, 7 comments — flaky enterprise auth erodes trust. |
| [#4566](https://github.com/github/copilot-cli/issues/4566) | **Agent acknowledges work but executes no tools** | Agent loops verbal confirmations without invoking tools (v1.0.80, gpt-5.3-codex). | 0 👍, 1 comment — new regression in agent execution loop. |
| [#4568](https://github.com/github/copilot-cli/issues/4568) | **`--cloud` owner picker hangs, 429 on task polling** | Multiple connected symptoms: picker stall, provisioning timeout, rate-limited polling. | 0 👍, 0 comments — blocks cloud workflow entirely. |
| [#4567](https://github.com/github/copilot-cli/issues/4567) | **Trust insecure HTTP OTLP endpoint** | Aligns CLI with VS Code/Copilot default OTLP behavior for local collectors (e.g., `http://localhost:4318`). | 0 👍, 0 comments — parity request for observability stack. |
| [#4565](https://github.com/github/copilot-cli/issues/4565) | **App config problems in copilot-runtime-bazel-cache** | Automated scan flags deployment-risk config issues in a related repo. | 0 👍, 0 comments — internal hygiene, low direct CLI impact. |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **Multi-model BYOK orchestration** — Users want first-class support for multiple custom models (local, self-hosted, alternative providers) within a single CLI session, including dynamic switching via `/model`.  
2. **Session portability** — Seamless resume/restore of cloud sessions across devices and platforms.  
3. **Protocol robustness** — Graceful handling of optional MCP methods (`server/discover`) and alignment with ecosystem defaults (OTLP HTTP).  
4. **Enterprise auth stability** — Eliminate intermittent policy-enforcement failures that disrupt daily workflows.

---

## Developer Pain Points
- **Windows update hygiene**: Orphaned processes consuming 100% CPU after auto-update is a silent productivity killer.  
- **Agent execution regression**: New “acknowledge-only” loop in v1.0.80 suggests a regression in tool-calling logic.  
- **Cloud workflow fragility**: `--cloud` hangs at owner discovery, provisioning timeouts, and 429 polling indicate unreliable backend integration.  
- **Observability friction**: Inability to use local HTTP OTLP collectors without disabling telemetry forces workarounds.  
- **Auth flakiness**: Enterprise users hit policy errors despite correct configuration, requiring repeated re-auth or waiting for self-resolution.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-23

---

## 1. Today's Highlights
No new releases in the last 24 hours. Community focus remains on **persistent memory across sessions** — two high-engagement issues (#1283, #1478) request a robust memory layer for large-project workflows. A critical SSL proxy bug (#760) was closed, and a UTF-8 corruption fix in `StrReplaceFile` (#2594) merged. Plugin documentation for security and persistent data (#2614) is under review.

---

## 2. Releases
*No releases published in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|----------------|-------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Feature Request: Memory System — Persistent context across sessions** | OPEN | Proposes a comprehensive memory system (auto + manual) to retain project patterns, user preferences, and context between sessions — essential for large codebases. | **40 comments** — highest engagement in recent history; strong signal this is a top pain point. |
| [#1478](https://github.com/MoonshotAI/kimi-cli/issues/1478) | **Optimize memory layer; no memory docs found — painful on big projects** | OPEN | User echoes #1283, notes absence of memory documentation (only `agent.md` visible), references a `~/.openclaw/workspace/` structure (SOUL.md, USER.md, MEMORY.md, daily memory files). | **3 comments** — validates demand; suggests community has reverse-engineered a memory convention. |
| [#760](https://github.com/MoonshotAI/kimi-cli/issues/760) | **SSL certificate verification fails behind corporate proxy (Zscaler)** | CLOSED | Login fails with `CERTIFICATE_VERIFY_FAILED` due to corporate MITM proxies. Blocks enterprise adoption. | **3 comments** — resolved; fix likely involves cert bundle configuration or `REQUESTS_CA_BUNDLE` support. |

---

## 4. Key PR Progress

| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#2614](https://github.com/MoonshotAI/kimi-cli/pull/2614) | **docs(plugins): document security and persistent data** | OPEN | Documents plugin contract: `plugin.json`, command-based tools, `inject`, install path `~/.kimi/plugins/`. Clarifies security boundaries and persistent data handling for plugin authors. |
| [#2594](https://github.com/MoonshotAI/kimi-cli/pull/2594) | **fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits** | CLOSED | Fixed corruption where `StrReplaceFile` decoded entire file with `errors="replace"`, turning invalid UTF-8 outside edits into U+FFFD. Now applies `old`/`new` as UTF-8 byte substrings on raw buffer. |

---

## 5. Feature Request Trends
**Dominant theme: Persistent, structured memory.**  
- Automatic (AI-managed) + manual (user-defined) memory layers  
- Project-scoped context retention (patterns, conventions, decisions)  
- Cross-session continuity for large, multi-file projects  
- Documentation and discoverability of memory features (currently undocumented)  
- File-based memory layout (`MEMORY.md`, daily logs) already informally adopted by users

Secondary: **Enterprise readiness** — proxy/cert support, plugin security model, data persistence guarantees.

---

## 6. Developer Pain Points
1. **No memory persistence** — Context lost every session; large projects require re-explaining architecture, conventions, and decisions.
2. **Undocumented memory internals** — Users discover `~/.openclaw/workspace/` by inspection; no official guide on memory management.
3. **Corporate network blocks** — SSL verification fails behind MITM proxies (Zscaler), preventing login/usage in enterprise.
4. **Binary/encoding corruption risk** — `StrReplaceFile` previously mangled non-UTF-8 files (now fixed in #2594).
5. **Plugin security opacity** — Unclear what plugins can persist/access; #2614 addresses this.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — issues/PRs updated 2026-08-22 to 2026-08-23.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-23

## Today's Highlights
No new releases shipped in the last 24 hours. The community is heavily focused on stabilizing the 2.0 beta: a major website rewrite to Astro landed, memory/location leaks are being systematically plugged, and several provider-compatibility bugs (Anthropic via Cloudflare AI Gateway, Gemini via OpenRouter) received fixes. The long-running Memory Megathread (#20695) remains the top community coordination point with 135 comments.

---

## Releases
*No new releases published in the last 24h.*

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** | Central tracking for scattered OOM/heap reports; team requests heap snapshots, not LLM guesses. | 135 comments, 104 👍 — highest engagement in repo |
| [#8751](https://github.com/anomalyco/opencode/issues/8751) | **Hot-reload agents, skills, commands** | Eliminates restarts when editing configs; critical for agent/skill authors. | 21 comments, 95 👍 — clear top feature ask |
| [#4714](https://github.com/anomalyco/opencode/issues/4714) | **TUI: Search/find in session buffer** | Editor-like find in agent output; improves debuggability of long sessions. | 33 comments, 45 👍 |
| [#43277](https://github.com/anomalyco/opencode/issues/43277) | **Sessions permanently stuck (survive reboots)** | Corrupt session state blocks all new messages; survives full system reboot. | 4 comments — severe reliability blocker |
| [#30662](https://github.com/anomalyco/opencode/issues/30662) | **Auto title generation fails for opencode provider models** | Titles stay “New session” for internal models (e.g., `big-pickle`); works for others. | 15 comments — UX regression for first-party models |
| [#35376](https://github.com/anomalyco/opencode/issues/35376) | **Lazy-load MCP tool definitions** | 9 MCP servers inject all tools into every prompt → massive token waste. | 8 comments — architectural scaling pain |
| [#38767](https://github.com/anomalyco/opencode/issues/38767) | **Gemini 3.6 Flash sends deprecated params via OpenRouter** | `temperature`/`top_p`/`top_k` rejected by Google; breaks model use. | 6 comments — provider config mismatch |
| [#23362](https://github.com/anomalyco/opencode/issues/23362) | **TUI hangs on large file diffs (formatPatch blocks event loop)** | Deterministic freeze when resuming sessions with many diffs; no ESC recovery. | 5 comments, 3 👍 — event-loop blocking bug |
| [#34644](https://github.com/anomalyco/opencode/issues/34644) | **GitHub Copilot provider missing for Student (Auto-only) plan** | OAuth succeeds but provider absent from selector; blocks EDU users. | 3 comments, 17 👍 |
| [#44283](https://github.com/anomalyco/opencode/issues/44283) | **v1.18.21: “unknown finish reason” still stops early** | Prior fix incomplete; tasks abort mid-stream frequently on recent versions. | 1 comment — regression on streaming stability |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#44274](https://github.com/anomalyco/opencode/pull/44274) | **feat(www): rebuild site with Astro** | Major refactor | Replaces Blume with Astro; adds Pagefind search, base-aware links, client nav, link validation. Self-contained `src/docs`. |
| [#44282](https://github.com/anomalyco/opencode/pull/44282) | **fix(core): skip models.dev refresh when catalog unchanged** | Perf fix | Stops 5-min KV rewrites + memo invalidation + event spam when catalog identical. |
| [#44275](https://github.com/anomalyco/opencode/pull/44275) | **fix(core): expire locations from session activity** | Resource mgmt | Adds `LocationActivity` service with 60-min idle TTL; retains infinite TTL for valid dirs. |
| [#44281](https://github.com/anomalyco/opencode/pull/44281) | **fix(provider): send Anthropic dashed slug via AI Gateway** | Bug fix | Fixes #44280 — `claude-haiku-4.5` → `claude-haiku-4-5` translation for Cloudflare AI Gateway. |
| [#40226](https://github.com/anomalyco/opencode/pull/40226) | **fix(session-ui): bound prompt editor DOM growth** | Perf fix | Stops full contenteditable re-walk on every keystroke; closes #40225. |
| [#44264](https://github.com/anomalyco/opencode/pull/44264) | **feat(session): add suffix compaction** | New feature | Experimental `compaction.mode: "suffix"` (keeps recent context); prepend remains default. |
| [#44271](https://github.com/anomalyco/opencode/pull/44271) | **fix(ai): preserve raw provider error payload** | Observability | Adds `body: string` to `OpenResponses.providerFailure`; retains `code`/`param`/`type`/`headers`. |
| [#44269](https://github.com/anomalyco/opencode/pull/44269) | **fix(console): proxy inference without parsing** | Perf fix | Streams legacy `/zen` → `/inference` without `request.json()`; keeps headers. |
| [#44279](https://github.com/anomalyco/opencode/pull/44279) | **fix(core): extend FFF home protection to descendants** | FS fix | Uses nearest worktree root for FFF eligibility; prevents 33k+ inotify watches under `~`. |
| [#44106](https://github.com/anomalyco/opencode/pull/44106) | **fix(ui): preserve clipped text ink** | UI polish | Adds 2px block padding + negative margin to stop Inter descender clipping in truncation boxes. |

---

## Feature Request Trends
1. **Live config reloading** — Hot-reload agents/skills/commands (#8751, 95 👍) is the clear #1 ask; users want zero-restart iteration.
2. **TUI power-user tools** — Find-in-buffer (#4714), autocomplete UX (#44261), theme resilience (#44263) show investment in terminal UX depth.
3. **MCP scalability** — Lazy-loading tool definitions (#35376) and reduced token overhead are requested as server counts grow.
4. **Session intelligence** — Suffix compaction (#44264), reliable title generation (#30662), and stuck-session recovery (#43277) point to demand for smarter context management.
5. **Windows/Desktop parity** — Winget ownership (#5121), hardware acceleration toggle (#44071), input window bugs (#44287) highlight desktop gaps.

---

## Developer Pain Points (Recurring Frustrations)
- **Memory/leak anxiety** — Megathread (#20695) shows widespread uncertainty; heap snapshots requested but tooling not obvious.
- **Silent failures** — Empty final message on auto-rejected perms (#44267), “unknown error” toast (#44285), theme load silently kills all themes (#44263).
- **Provider config drift** — Anthropic slug mismatch (#44280), Gemini deprecated params (#38767), Copilot Student plan invisibility (#34644) — each requires code changes, not config.
- **Event-loop blocking** — `formatPatch` freezes TUI (#23362); DOM re-walks on keystroke (#40226) — synchronous work on UI thread.
- **Session corruption persistence** — Stuck state survives reboots (#43277) implies on-disk state machine bugs; no recovery CLI exists.
- **Non-interactive opacity** — `opencode run` exits 0 with zero-byte output on permission denial (#44267); CI/CD users get no actionable signal.

---

*Generated from github.com/anomalyco/opencode data as of 2026-08-23 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-23

## Today's Highlights
The Pi ecosystem is heavily focused on **Windows reliability** and **provider flexibility** today. A critical auto-compaction bug (#6879) that lets context grow past 100% until API rejection has 18 👍 and 20 comments, while the Windows support mega-thread (#7547) continues at 39 comments. Meanwhile, three new provider integrations (MindsHub, Parasail, DeepSeek V4 Flash Vision) and a Node runtime bundling PR aim to improve startup performance and model access.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#7547] Windows: How do you use Pi on Windows?** | Meta-issue collecting Windows pain points (WSL, native, ConPTY, key bindings, Defender). Directs core team focus. | 39 comments, 2 👍 — *highest engagement* |
| **[#6879] Auto-compaction never triggers past 100% context** | Compaction only fires on API rejection (373k tokens), not at configured threshold. Breaks long agentic sessions. | 20 comments, **18 👍** — *top-voted bug* |
| **[#7130] Backspace deletes 2 chars in Kitty** | Kitty keyboard protocol release events not filtered; breaks editing in popular terminal. | 11 comments, 1 👍 |
| **[#8167] Cannot pick model with built-in llama.cpp support** | Models from `llama-server` router mode invisible in `/model` selector despite being loadable via `/llama`. | 9 comments — *closed, fix in #8479* |
| **[#8468] GitHub Copilot login timeout** | Auth fails with “operation aborted due to timeout”; blocks Copilot users on unreleased code. | 5 comments — *closed* |
| **[#8376] Model selection persistence scope** | Request to persist `/model` choices by `session`, `directory`, or `global` via config. | 5 comments |
| **[#8442] Backspace ignored in herdr pane (Kitty KKP)** | Plain Backspace sends `0x7f` (legacy) while KKP active; Ctrl+Backspace works. Terminal-layer bug. | 4 comments |
| **[#8464] Output-limit continuation & mid-turn compaction** | Autonomous runs should auto-continue on output-token limit and compact between tool turns. | 4 comments |
| **[#8489] Add MindsHub as built-in provider** | OpenAI-compatible gateway (Claude, GPT, Gemini, Kimi, DeepSeek, Qwen, GLM…) via single endpoint. | 3 comments — *PR #8488 merged* |
| **[#8452] Improve default compaction prompt for continuation fidelity** | Current prompt favors readable prose; coding sessions need deduplicated, observation-aware checkpoints. | 3 comments |

---

## Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **[#8474] feat(coding-agent): bundle Node runtime** | CLOSED | Bundles fewer files for `pi-coding-agent`; targets Windows Defender I/O slowdowns. |
| **[#8488] feat(ai): add MindsHub provider** | CLOSED | Adds MindsHub (`https://api.mindshub.ai/v1`) as built-in OpenAI-compatible provider. |
| **[#8487] fix(coding-agent): expose finish reason compatibility override** | OPEN | Exposes existing API for finish-reason handling; closes #8460. |
| **[#8486] feat(tui): add editor-scroll capture & verification tooling** | CLOSED | Scriptable TUI test harness (`editor-scroll-demo.ts`) for reproducing scroll bugs (#8484). |
| **[#8485] fix(tui): disable autowrap around main-screen renders (ConPTY drift)** | CLOSED | Prevents ConPTY eager wrap on full-width lines; fixes editor “scroll to top” illusion on Windows. |
| **[#8482] docs(coding-agent): point custom footer docs at `ctx.getContextUsage()`** | OPEN | Corrects documentation for custom footer API. |
| **[#8479] fix: expose unloaded llama.cpp presets** | CLOSED | Makes `llama-server --models-preset` presets selectable in `/model` without auto-loading. |
| **[#7148] feat(coding-agent): Experimental loadout management** | OPEN | `/loadout` command to enable/disable extensions mid-session; persists in session state. |
| **[#8295] feat(coding-agent,tui): add locale switching via `/settings`** | CLOSED | English/Simplified Chinese selector; persists via `SettingsManager.setLocale()`. |

---

## Feature Request Trends
1. **Provider expansion** — MindsHub, Parasail (#8450), DeepSeek V4 Flash Vision (#8438), OpenRouter catalog freshness (#8497).
2. **Compaction/continuation automation** — Mid-turn compaction (#8464), output-limit auto-continue, smarter default prompts (#8452).
3. **Extension/loadout control** — Per-session loadout management (#7148), exclusion flags (#8431), persistence scopes (#8376).
4. **Terminal protocol hardening** — Kitty KKP filtering (#7130, #8442), ConPTY autowrap drift (#8484/#8485), Windows key-binding conflicts (#8372).
5. **Internationalization** — Locale switching via `/settings` (#8295) now merged; more languages expected.

---

## Developer Pain Points
- **Windows friction**: ConPTY rendering drift, Windows Defender scanning bottlenecks, key-binding collisions in Windows Terminal/WSL, path-separator mismatches (#8441).
- **Compaction unreliability**: Threshold ignored until hard API failure (#6879); trailing tool-result turns retained past `keepRecentTokens` (#8498).
- **Terminal protocol bugs**: Kitty backspace double-delete (#7130) and legacy-code leakage under KKP (#8442).
- **Provider model visibility**: llama.cpp presets hidden (#8167/#8479), OpenRouter `stealth/*` models missing or failing silently on tools (#8499, #8454), Copilot auth timeouts (#8468).
- **Extension rigidity**: All-or-nothing loading; no per-session toggle or exclusion without `--no-extensions` (#8431, #7148).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-23

## 1. Today's Highlights
- **v0.22.0 stable released** with Web Shell OOM protection (bounded transcript retention, oversized replay trimming) and review-loop instability diagnostics that cite specific files with recurring findings.
- **Nightly v0.22.0-nightly.20260823** ships a fix for Web Shell session workspace CWD propagation from the overview panel.
- Review subsystem advances: deferred suggestions become recoverable off the PR page, content-anchored incremental rounds land for the local review-fix loop, and two new audit lenses (prose-execution, counter-frame) are added.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.22.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.0) | Stable | • Web Shell OOM prevention via transcript bounding & replay trimming ([#9303](https://github.com/QwenLM/qwen-code/pull/9303))<br>• Review loops now explain instability by citing files with recurring findings |
| [v0.22.0-nightly.20260823.1007bcacfc](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.0-nightly.20260823.1007bcacfc) | Nightly | • Fix: pass session workspace CWD when opening Web Shell from overview panel ([#9730](https://github.com/QwenLM/qwen-code/pull/9730)) |

## 3. Hot Issues (Top 3 Updated in Last 24h)
| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) **Deterministic tool-execution boundaries for trustworthy agent runtime** | Proposes keeping LLM outside trust boundary; runtime would constrain, authorize, observe, and evaluate model actions. Foundational for enterprise/security adoption. | 17 comments, `need-discussion`, `priority/P3`, `category/security` — active design debate. |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) **Fleet Shepherd Dashboard** | Auto-maintained fleet health dashboard; shows bot fleet PR states, syncs, dispatches, releases. Operational visibility for maintainers. | Updated by `qwen-code-dev-bot`; 3 comments — infra monitoring signal. |
| [#9751](https://github.com/QwenLM/qwen-code/issues/9751) **Deferred review findings from PR #9741** | Autofix-deferred findings outside PR footprint; maintainers can promote to issues/PRs. Tracks review debt systematically. | 1 comment; bot-maintained — reflects review-loop maturity. |

## 4. Key PR Progress (Top 10 by Activity/Impact)
| PR | Area | Summary |
|----|------|---------|
| [#9761](https://github.com/QwenLM/qwen-code/pull/9761) | Review | Deferred suggestions (post-convergence) become recoverable off PR page via tooling. |
| [#9273](https://github.com/QwenLM/qwen-code/pull/9273) | Review/TUI | `qwen review capture-tui`: verifier produces rendering evidence (pixels) via private tmux; outputs `.ans`, `.png`, `.json`. |
| [#9576](https://github.com/QwenLM/qwen-code/pull/9576) | Core | Cross-session messaging via UNIX domain sockets; inbound gate with policy control; messages marked non-user. |
| [#9626](https://github.com/QwenLM/qwen-code/pull/9626) | Serve | Persisted session lifecycle repair: delete/archive/unarchive handle empty/torn/legacy transcripts. |
| [#9744](https://github.com/QwenLM/qwen-code/pull/9744) | Review | Fix-induced re-reports counted as first-time work; prevents stale IDs from masking new issues. |
| [#9581](https://github.com/QwenLM/qwen-code/pull/9581) | Goal | Single core renderer (`renderGoalContinuationPrompt`) for Goal continuation prompts across TUI, ACP, CLI. |
| [#9729](https://github.com/QwenLM/qwen-code/pull/9729) | Serve | Backfills session↔PR bindings for pre-feature sessions; refreshes merge state via daemon route. |
| [#9760](https://github.com/QwenLM/qwen-code/pull/9760) | Web Shell | Preview Markdown/HTML/safe images before generic `document` classification; MIME normalization. |
| [#9607](https://github.com/QwenLM/qwen-code/pull/9607) | Core | Demote balanced inline thinking blocks instead of failing turn on OpenAI-compatible endpoints. |
| [#9602](https://github.com/QwenLM/qwen-code/pull/9602) | Core | Clear tool display list *before* completion callback (not in `finally`); adds regression test. |

## 5. Feature Request Trends (Distilled from Issues & PRs)
1. **Trustworthy/Secure Agent Runtime** — Deterministic tool boundaries, policy-gated cross-session messaging, session rotation bounds ([#8102](https://github.com/QwenLM/qwen-code/issues/8102), [#8927](https://github.com/QwenLM/qwen-code/pull/8927), [#9576](https://github.com/QwenLM/qwen-code/pull/9576)).
2. **Review Loop Maturity** — Content-anchored incremental rounds, deferred suggestion recovery, new audit lenses (prose-execution, counter-frame), approach-vs-patch detection ([#9659](https://github.com/QwenLM/qwen-code/pull/9659), [#9761](https://github.com/QwenLM/qwen-code/pull/9761), [#9717](https://github.com/QwenLM/qwen-code/pull/9717), [#9340](https://github.com/QwenLM/qwen-code/pull/9340)).
3. **Multi-Session & Channel Ops** — Session↔PR binding backfill, DingTalk Workspace channel, session lifetime bounds, cross-session messaging ([#9729](https://github.com/QwenLM/qwen-code/pull/9729), [#9394](https://github.com/QwenLM/qwen-code/pull/9394), [#8927](https://github.com/QwenLM/qwen-code/pull/8927)).
4. **Web Shell & VS Code Parity** — Transcript as default timeline, artifact preview, OOM hardening, CWD propagation ([#9719](https://github.com/QwenLM/qwen-code/pull/9719), [#9760](https://github.com/QwenLM/qwen-code/pull/9760), [#9303](https://github.com/QwenLM/qwen-code/pull/9303), [#9730](https://github.com/QwenLM/qwen-code/pull/9730)).
5. **Telemetry & Observability** — Replay undo (snapshot/restore), Fleet Shepherd dashboard, bottom-aligned VP content ([#9582](https://github.com/QwenLM/qwen-code/pull/9582), [#7167](https://github.com/QwenLM/qwen-code/issues/7167), [#9305](https://github.com/QwenLM/qwen-code/pull/9305)).

## 6. Developer Pain Points (Recurring Themes)
| Pain Point | Evidence |
|------------|----------|
| **Review loop noise & convergence** | Multiple PRs addressing deferred suggestions, re-report counting, approach-vs-patch detection, incremental rounds — indicates reviewers struggle with signal/noise in long review cycles. |
| **Session state corruption** | Fixes for empty/torn transcripts, legacy orphans, session swap telemetry rollback, tool-display race conditions — persists as operational burden. |
| **Cross-session/channel isolation** | Demand for deterministic boundaries, policy-gated messaging, session rotation, PR binding backfill — developers need predictable multi-session workflows. |
| **Web Shell resource limits** | OOM crashes from unbounded transcripts; nightly fix for CWD propagation — UI reliability gaps in long-running shells. |
| **Rendering verification gap** | New `capture-tui` command (pixels over prose) — developers can't reliably assert TUI output in CI/review. |

---

*Data sourced from `github.com/QwenLM/qwen-code` (releases, issues, PRs updated 2026-08-23). Links point to live GitHub objects.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-23

## 1. Today's Highlights
- **v0.9.11 release candidate prepared** (PR #5542) — non-benchmark release cut from `main`, excluding the pi-agent-parity benchmark lane.  
- **Pricing fix for DeepSeek V4 Beijing-time weekends** (PR #5545) — corrects peak/off-peak billing logic to respect Beijing Time weekends effective 2026-08-23.  
- **Supervised operation stack landed** (PR #5535) — adds lifecycle outbox (JSONL + webhook), `/relaunch`, per-session control socket, and a goal-continuation quiet-period fix for machine-readable supervision of long-lived sessions.

## 2. Releases
No new releases published in the last 24 hours.  
Release candidate **v0.9.11** staged via PR #5542; expect tag once CI gates pass.

## 3. Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | Master tracking issue for splitting the monolithic TUI crate; 12 comments show active design discussion. | 0 👍, 12 comments — high internal engagement |
| [#5546](https://github.com/Hmbown/CodeWhale/issues/5546) | **[bug] “redacted” output from tools impairs editing** | User reports new “redacted” tokens appearing in tool output after updating to HEAD, breaking editing workflows. Filed today, 1 comment. | Fresh regression, blocks editing |
| [#5543](https://github.com/Hmbown/CodeWhale/issues/5543) | **Persist child tool approvals through durable receipt path** | Child agents bypass durable approval receipt path, risking lost approvals on restart. No comments yet — likely internal triage. | 0 👍, 0 comments — architecture debt |

## 4. Key PR Progress
| # | PR | Type | Summary |
|---|----|------|---------|
| [#5545](https://github.com/Hmbown/CodeWhale/pull/5545) | **fix(pricing)** | Beijing-time weekend off-peak billing for DeepSeek V4 (UTC-hour-only logic → TZ-aware). |
| [#5535](https://github.com/Hmbown/CodeWhale/pull/5535) | **feat(supervision)** | Lifecycle outbox (JSONL/webhook), `/relaunch`, per-session control socket, quiet-period fix. |
| [#5544](https://github.com/Hmbown/CodeWhale/pull/5544) | **feat(web/i18n)** | Moves `docs/subagents` & `docs/mcp` onto dictionary spine; eliminates 34 `isZh` branches. |
| [#5406](https://github.com/Hmbown/CodeWhale/pull/5406) | **feat(tui)** | **CLOSED** — Prefab provider templates (OpenCode Zen/Go, Agnes, SenseNova) + test-connection. |
| [#5530](https://github.com/Hmbown/CodeWhale/pull/5530) | **fix(cli)** | **CLOSED** — Legacy `completions` routed through public binary, not TUI runtime. |
| [#5538](https://github.com/Hmbown/CodeWhale/pull/5538) | **chore(deps)** | Bumps `jsonschema` 0.46.10 → 0.49.9 (Python releases, schema validation fixes). |
| [#5542](https://github.com/Hmbown/CodeWhale/pull/5542) | **release** | **CLOSED** — Prepares v0.9.11 RC (excludes benchmark lane). |
| [#5523](https://github.com/Hmbown/CodeWhale/pull/5523) | **refactor(tui)** | **CLOSED** — Extracts tool-call planning/approval/execution/projection from turn loop. |
| [#5524](https://github.com/Hmbown/CodeWhale/pull/5524) | **feat(tui/lsp)** | Multi-file `read_lints` operation reusing session `LspManager` pool. |
| [#5525](https://github.com/Hmbown/CodeWhale/pull/5525) | **refactor(tui)** | Adopts external command shapes (FEAT-014/015) for utility command group (7 commands). |

## 5. Feature Request Trends
1. **Modular crate architecture** — EPIC-005 (#5316) and follow-on PRs (#5523, #5525) show sustained push to decompose the TUI crate into swappable, testable units.  
2. **First-class provider onboarding** — Prefab templates (#5406) and dictionary-spine i18n (#5544) indicate demand for zero-config third-party LLM integration.  
3. **Machine-readable session supervision** — PR #5535’s outbox/webhook/socket stack targets CI/CD and orchestrator integrations.  
4. **Durable approval flows** — Issue #5543 and related refactors highlight need for restart-safe human-in-the-loop tool approvals.

## 6. Developer Pain Points
- **“Redacted” token leakage in tool output** (#5546) — recent regression degrading editing experience; no workaround yet.  
- **Legacy completion routing** — resolved in #5530 but signals friction between CLI and TUI command surfaces.  
- **Child-agent approval durability** — #5543 reveals gaps in receipt persistence for nested agent hierarchies.  
- **Time-zone-aware billing** — #5545 shows UTC-only assumptions breaking for Asia-Pacific users; fixed but a reminder to audit all TZ-sensitive paths.  

---

*Generated from Hmbown/CodeWhale GitHub activity (2026-08-22 → 2026-08-23). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*