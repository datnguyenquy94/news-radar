# AI CLI Tools Community Digest 2026-08-09

> Generated: 2026-08-09 02:14 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-09)

---

## 1. Ecosystem Overview

The AI CLI tools landscape shows **high fragmentation with convergent architectural pressures**. All major tools are simultaneously tackling session reliability, context management, and provider abstraction—yet each pursues distinct technical strategies. Anthropic (Claude Code) and OpenAI (Codex) lead on enterprise integration and Windows stability challenges; Google (Gemini CLI) and Qwen Code invest heavily in agent orchestration runtime unification; CodeWhale and OpenCode prioritize TUX (terminal UX) depth and plugin extensibility; while Copilot CLI and Kimi remain early in hardening core loops. Release cadences vary from nightly (Gemini, Qwen) to sporadic patches (Claude, Copilot), reflecting differing maturity stages. A clear industry shift toward **multi-session orchestration, deterministic workflow engines, and provider-neutral abstractions** is visible across 7 of 9 active tools.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs (24h) | Release Status | Top Community Signal |
|------|--------------|-----------|----------------|---------------------|
| **Claude Code** | 10 hot | 1 | v2.1.226 (patch) | #79337: 70 comments, 23👍 (Fable 5 Max blocked) |
| **OpenAI Codex** | 10 hot | 10 closed | v0.148.0-alpha.5 (pre) | #21653: 59👍 (TUI multi-line status) |
| **Gemini CLI** | 10 hot | 10 | v0.56.0-nightly (nightly) | #21409: 8👍 (agent hangs) |
| **GitHub Copilot CLI** | 10 hot | 0 | None | #4285: 2👍 (Windows silent exit) |
| **Kimi Code CLI** | 2 hot | 0 | None | #1283: 25 comments (memory system) |
| **OpenCode** | 10 hot | 10 | None | #13984: 27👍, 55 comments (copy/paste broken 6mo) |
| **Pi** | 10 hot | 10 (4 merged) | None | #4945: 76 comments, 31👍 (openai-codex reliability) |
| **Qwen Code** | 5 hot | 10 | v0.21.8 (stable) | #8766: CI blocker, autofix in progress |
| **CodeWhale** | 10 hot | 10 (5 merged) | v0.9.5 (public, rebrand) | #4785: 6 comments (dead-code sweep) |
| **Grok Build** | 0 | 0 | None | — |

**Key Observations**: OpenAI Codex, OpenCode, Pi, Qwen Code, and CodeWhale show highest PR velocity (10+/day). Claude Code and Copilot CLI have notably low PR throughput relative to issue volume. Kimi and Grok Build show minimal activity.

---

## 3. Shared Feature Directions

| Direction | Tools | Specific Needs |
|-----------|-------|----------------|
| **Session/Context Continuity** | Claude Code (#50246), Copilot CLI (#4397), Gemini CLI (#22323), OpenCode (#41338), Pi (#7815), Qwen Code (#8728), CodeWhale (#5271) | Message queuing, resume with model/context fidelity, cross-session memory, session peek/registry |
| **Provider Abstraction & Multi-Model Orchestration** | Claude Code (#85082), Codex (gRPC host #37530), Gemini CLI (#22745), Qwen Code (#8714, #8765), CodeWhale (#5295, #5103), Pi (#7610) | Native provider integrations (DashScope, Mistral), workflow engine for model fan-out, OpenRouter-style gateways |
| **Windows Parity & Desktop Stability** | Claude Code (5+ GPU/MSIX crashes), Codex (5+ Computer Use bugs, extension load), Copilot CLI (#4285, #4399), CodeWhale (#41334, #41337) | GPU crash fixes, MSIX/UNC path support, Bun stack trace suppression, extension load reliability |
| **Agent Delegation & Hierarchical Runtime** | Gemini CLI (#28738 recursive), OpenCode (subagent recovery), Qwen Code (#8775 unification), CodeWhale (#5270 unified tasks), Pi (#7823 subagent tools) | Recursive sub-agents, single reasoning loop runtime, durable worker orchestration |
| **Context Compaction & Token Management** | Pi (#6879, #7821), Qwen Code (compression cache sharing), CodeWhale (#5300 pressure-aware), Gemini CLI (eval infra) | Pressure-aware auto-compaction, survival contracts, cross-provider cache sharing |
| **TUI/Terminal UX Polish** | Codex (#21653), Claude Code (#84029), OpenCode (#13984), CodeWhale (#5268, #5267), Pi (#7837, #7830) | Multi-line status, copy/paste, mid-turn control, clipboard handling, scroll granularity |
| **Permission/Sandbox Model Hardening** | Codex (#33479, #37648), Claude Code (#83362), Gemini CLI (#26525), Copilot CLI (#4398), Pi (#7782) | Rule expansion bounds, allow-rule enforcement, pre-redaction security, MCP auth flows |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | CodeWhale | OpenCode | Pi | Qwen Code |
|-----------|-------------|--------------|------------|-------------|-----------|----------|-----|-----------|
| **Core Focus** | Enterprise reliability, Max plan entitlements | Hook system, gRPC host, workload identity | Agent architecture stability, eval infra | ACP parity, auto-mode granularity | TUI depth, monolith→modular, Fleet | Plugin SDK v2, session branches, migration | Provider reliability, compaction logic, extension API | Session runtime unification, workflow engine, CI resilience |
| **Target User** | Enterprise teams, Max subscribers | Power users, automation builders | Agentic workflow developers | GitHub ecosystem users, ACP clients | Terminal power users, Fleet operators | Plugin authors, multi-session devs | Multi-provider hackers, extension authors | CI/CD integration, multi-language repos |
| **Technical Approach** | Closed-core, desktop app + CLI | Rust core, hook engine, gRPC services | Nightly iterations, hierarchical agents | TypeScript, ACP protocol, npm shim | Single binary, runtime API, compiled | Rust, plugin slots, SDK dual-track | TypeScript, extension-first, stream rules | TypeScript, deterministic gates, label routing |
| **Differentiator** | Anthropic model integration, Dispatch/Cowork | Async hooks, workload identity tokens | Recursive delegation, AST-aware tooling | GitHub Enterprise MCP, cache_control | Prompt-scoped recovery, mid-turn control | Session branches, vertical tabs, SDK v2 | LLM Gateway, cross-session memory, verifier receipts | Native DashScope, Maven/Gradle adapters, live session registry |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Rapid Iteration** | **OpenAI Codex, Qwen Code, CodeWhale, OpenCode, Pi** | 10+ PRs/day, nightly/weekly releases, architectural RFCs active, multi-contributor merges |
| **Enterprise Stabilization** | **Claude Code** | Patch releases, high-impact entitlement bugs, low PR velocity but high issue severity |
| **Early Hardening** | **GitHub Copilot CLI, Gemini CLI** | Gemini: nightly cadence but P1 agent hangs; Copilot: zero PRs/day, Windows/ACP gaps |
| **Niche / Low Activity** | **Kimi Code CLI, Grok Build** | Kimi: 2 issues/24h, no PRs; Grok: zero activity |

**Maturity Signals**: CodeWhale v0.9.5 marks a major rebrand+consolidation milestone. Qwen Code v0.21.8 shows production CI hardening. Claude Code's Max plan regression (#79337) indicates scaling pain at paid tier. OpenCode's 6-month copy/paste bug (#13984) reveals technical debt accumulation.

---

## 6. Trend Signals for Technical Decision-Makers

1. **Deterministic Workflow Engines > Pure LLM Orchestration**  
   Qwen Code (#8769), Gemini CLI (#24353), and Codex (gRPC host) are replacing model-driven fan-out with explicit workflow engines. *Implication*: Invest in toolchains that expose structured execution graphs, not just prompt chains.

2. **Session Runtime Unification Is the Next Platform Battle**  
   4 tools (Qwen, Gemini, OpenCode, CodeWhale) explicitly target a single reasoning loop across TUI/headless/ACP/subagent surfaces. *Implication*: Tools with fragmented runtimes will accumulate integration debt; standardize on ACP or equivalent protocol early.

3. **Windows Is the Differentiation Frontier**  
   5 tools report critical Windows bugs (GPU crashes, extension loads, Bun noise, UNC paths, silent exits). *Implication*: Windows-native runtime investment (MSIX, Bun alternatives, PTY handling) correlates with enterprise adoption velocity.

4. **Provider Abstraction Layers Are Hardening into Gateways**  
   Pi's LLM Gateway (#7610), CodeWhale's provider-neutral types (#5103), Qwen's native DashScope (#8714), Codex's workload identity (#37610). *Implication*: Avoid hardcoding provider SDKs; build against OpenAI-compatible + gateway interfaces.

5. **Compaction/Context Survival Contracts Are Becoming Explicit Requirements**  
   Pi (#6879), CodeWhale (#4394), Qwen (compression cache), Gemini (eval infra). *Implication*: Tools without documented compaction survival semantics (what persists: intent? evidence? tool calls?) will lose long-running agent trust.

6. **Plugin/Extension Ecosystems Are Standardizing on Structured Slot Systems**  
   OpenCode (#41189 region structure), CodeWhale (runtime API endpoints), Pi (extension-side turn termination #

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-09)

---

## 1. Top Skills Ranking — Most-Discussed PRs by Community Attention

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **skill-creator Evaluation Pipeline Fixes** ([#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1323](https://github.com/anthropics/skills/pull/1323), [#1261](https://github.com/anthropics/skills/pull/1261)) | Core infrastructure: fixes `run_eval.py` reporting 0% recall on Windows/Linux, trigger detection failures, subprocess pipe crashes, and test isolation bugs | **Highest cross-referenced issue (#556: 12 comments, 7 👍)**; 5 concurrent PRs tackling same root cause; blocks description-optimization loop | **Open** (critical path) |
| 2 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Prevents orphan/widow lines, header stranding, numbering misalignment in AI-generated docs | Addresses "every document Claude generates"; universal pain point; no 👍 but long-lived discussion | **Open** |
| 3 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Full testing stack: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Comprehensive reference skill; fills gap in existing collection | **Open** |
| 4 | **self-audit** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Mechanical file verification → 4-dimension reasoning audit (correctness, completeness, clarity, safety) | Proposes universal quality gate; v1.3.0; ties to Issue #1385 (Reasoning Quality Gate Pipeline) | **Open** |
| 5 | **color-expert** ([#1302](https://github.com/anthropics/skills/pull/1302)) | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL…), color spaces (OKLCH, OKLAB, CAM16), accessibility, harmonies | Niche but deep; self-contained expertise skill; active iteration (updated 2026-07-21) | **Open** |
| 6 | **ODT (OpenDocument) Skill** ([#486](https://github.com/anthropics/skills/pull/486)) | Create/fill/read/convert `.odt`/`.ods` via `pyxel-mcp`; template filling, parse to HTML | ISO-standard format support; MCP-backed; author is Pyxel maintainer | **Open** |
| 7 | **plan-file-hygiene** ([#1479](https://github.com/anthropics/skills/pull/1479)) | Lifecycle management for planning artifacts (creation, review, archival, cleanup) | Addresses Issue #1417; community-validated problem framing; recent (Jul 2026) | **Open** |
| 8 | **skill-quality-analyzer / skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | Meta-skills: 5-dim quality scoring (structure, examples, resources, triggers, maintainability) + security scanning | Enables marketplace quality gates; "example-skills" collection | **Open** |

---

## 2. Community Demand Trends — From Issues (Top Signals)

| Trend | Evidence | Community Signal |
|-------|----------|------------------|
| **Trust & Security Boundaries** | [Issue #492](https://github.com/anthropics/skills/issues/492): Community skills distributed under `anthropic/` namespace impersonate official skills | **43 comments, 2 👍** — highest engagement; critical vulnerability |
| **Organizational Skill Sharing** | [Issue #228](https://github.com/anthropics/skills/issues/228): Native org-wide skill library vs. manual file sharing | **16 comments, 8 👍** — strong workflow demand |
| **Evaluation Reliability** | [Issue #556](https://github.com/anthropics/skills/issues/556): `run_eval.py` 0% trigger rate blocks skill-creator loop | **12 comments, 7 👍** — blocks core contributor tooling |
| **Duplicate Skill Pollution** | [Issue #189](https://github.com/anthropics/skills/issues/189): `document-skills` + `example-skills` install identical content | **6 comments, 9 👍** — high 👍/comment ratio = clear pain |
| **MCP Integration** | [Issue #16](https://github.com/anthropics/skills/issues/16): Expose Skills as MCPs for standard API surface | 4 comments — architectural direction |
| **Enterprise/Cloud Compatibility** | [Issue #29](https://github.com/anthropics/skills/issues/29): Bedrock support; [#1175](https://github.com/anthropics/skills/issues/1175): SharePoint Online | 4 comments each — deployment gaps |
| **Agent Governance & Quality Gates** | [Issue #412](https://github.com/anthropics/skills/issues/412) (closed), [#1385](https://github.com/anthropics/skills/issues/1385): Reasoning pipelines, policy enforcement | Emerging meta-skill category |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It’s Poised to Merge |
|----|-------|---------------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator eval fixes (consolidated)** | Fixes 5+ reproducing bugs; unblocks contributor workflow; multiple authors converging |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Universal quality gate; aligns with Issue #1385 proposal; v1.3.0 maturity |
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | Directly addresses filed issue (#1417); community-named problem; recent momentum |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Fills glaring gap; comprehensive scope; no competing PR |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Universal applicability; long-standing (Mar 2026); no blockers |
| [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | Complete self-contained domain; active iteration; niche-but-deep fit |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** | MCP-backed; standards-based; author is upstream maintainer |
| [#525](https://github.com/anthropics/skills/pull/525) | **pyxel (retro game dev)** | MCP integration; unique creative domain; active maintainer |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community’s most concentrated demand is fixing the broken skill-creator evaluation pipeline (0% recall, Windows crashes, trigger detection) to unblock reliable skill authoring, while simultaneously demanding trust boundaries (namespace security), organizational sharing, and quality gates — signaling a shift from *skill accumulation* to *skill engineering infrastructure*.**

---

# Claude Code Community Digest — 2026-08-09

---

## 1. Today's Highlights

- **v2.1.226 released** with bug fixes and reliability improvements — a maintenance patch addressing recent stability concerns.
- **Fable 5 Max-plan rollout is broken**: Issue #79337 (70 comments, 23 👍) shows Max subscribers are silently downgraded to Opus 4.8 with "usage credits required" errors on Fable 5's launch day.
- **Desktop app instability cluster**: Multiple Windows GPU crashes (#81698, #83028), MSIX connection failures (#84818), and Dispatch pairing issues (#67303, #84035) indicate platform-specific regression waves.

---

## 2. Releases

### v2.1.226
**Bug fixes and reliability improvements** — No detailed changelog provided. Likely addresses recent crash regressions and model-switching bugs reported in the past week.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#79337](https://github.com/anthropics/claude-code/issues/79337) | **Fable 5 blocked on Max plan — silent downgrade to Opus 4.8** | Launch-day regression for flagship model on paid tier; affects all Max subscribers. | 70 comments, 23 👍 — highest engagement in 24h |
| [#50246](https://github.com/anthropics/claude-code/issues/50246) | **Message queue mode — queue follow-ups instead of interrupting** | Core UX gap: no way to stage instructions mid-task without derailing active work. | 50 comments, 184 👍 — top feature request by votes |
| [#29006](https://github.com/anthropics/claude-code/issues/29006) | **Remote Control for Claude Code in Desktop App** | Enables mobile→desktop session control; critical for Cowork/Dispatch workflow. | 36 comments, 119 👍 |
| [#19054](https://github.com/anthropics/claude-code/issues/19054) | **VS Code extension ignores MCP servers entirely** | Breaks primary extensibility path for VS Code users; MCP is core to agent workflows. | 24 comments, 26 👍 |
| [#81698](https://github.com/anthropics/claude-code/issues/81698) | **Windows GPU process crash (exit code 101457950) kills all sessions** | Hard crash on RTX 5080; loses all running work. No workaround. | 15 comments, new (2026-07-27) |
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | **CVP-approved org still gets cyber safeguard blocks** | Verified orgs incorrectly flagged; blocks legitimate enterprise work. | 13 comments, 3 days old |
| [#83436](https://github.com/anthropics/claude-code/issues/83436) | **Cyber-safeguard false positives on scientific computing (IR spectrometer)** | Over-blocking on legitimate research workloads; affects both Opus 5 & 4.8. | 11 comments |
| [#81693](https://github.com/anthropics/claude-code/issues/81693) | **Opus 5 context window reported as 200k vs actual 1M** | Breaks statusline gauges, `/compact`, and context-aware tooling. | 4 comments, confirmed bug |
| [#84029](https://github.com/anthropics/claude-code/issues/84029) | **Crash leaves terminal in mouse-tracking mode** | Post-crash terminal corruption; restore handler only on graceful exit. | 1 comment, architectural flaw |
| [#83362](https://github.com/anthropics/claude-code/issues/83362) | **`ask` permission rules silently ignored; `deny` rules work** | Security policy bypass: allow-rules non-functional in interactive sessions. | 1 comment, security-relevant |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#77492](https://github.com/anthropics/claude-code/pull/77492) | `fix(hookify): match Write and prompt rules` | Open | Fixes hook rule matching for `Write` tool content and `UserPromptSubmit` payload mapping; adds regression tests for Write/Edit/prompt rules. |

> **Note**: Only 1 PR updated in the last 24h. The repository shows low PR velocity relative to issue volume.

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Non-interruptive task queuing** | [#50246](https://github.com/anthropics/claude-code/issues/50246) (184 👍) | Highest-voted open request; users want "message queue mode" to stage follow-ups |
| **Mobile↔Desktop session control** | [#29006](https://github.com/anthropics/claude-code/issues/29006) (119 👍), [#79410](https://github.com/anthropics/claude-code/issues/79410) | Dispatch/Cowork workflow gaps; model-lock on Fable 5 blocks mobile users |
| **MCP parity in VS Code** | [#19054](https://github.com/anthropics/claude-code/issues/19054) (26 👍) | Extension lacks core MCP support available in CLI |
| **Development history out of code comments** | [#85130](https://github.com/anthropics/claude-code/issues/85130) | New request: keep git history in git, not docstrings/comments |
| **Multi-model orchestration patterns** | [#85082](https://github.com/anthropics/claude-code/issues/85082) | Community sharing advanced workflows (Fable 5 orchestrating 6 models) |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Model access/entitlement bugs** | Fable 5 blocked on Max (#79337), Opus 5 context misreport (#81693), Dispatch model-lock (#79410) | 3+ critical issues in 24h |
| **Desktop app instability (Windows)** | GPU crashes (#81698, #83028), MSIX ECONNRESET (#84818), Dispatch sidebar unmount (#84035), BSOD (#80912) | 5+ Windows-specific crashes |
| **Cyber-safeguard over-blocking** | CVP-approved orgs blocked (#84352), scientific computing false positives (#83436) | 2 enterprise-impacting cases |
| **Terminal/TUI state corruption** | Mouse-tracking mode leak on crash (#84029), copy-paste/scrollbar broken (#68602), fullscreen resize bug (#70688) | Multiple TUI regression reports |
| **Permission system gaps** | `ask` rules ignored (#83362), plugin commands missing in background (#70596) | Security & workflow gaps |
| **Draft/message loss** | Android discards typed message on conversation switch (#85131), no message queue (#50246) | Data loss in mobile & CLI |

---

## Quick Links
- **Repository**: [anthropics/claude-code](https://github.com/anthropics/claude-code)
- **All Issues (last 24h)**: [GitHub Issues](https://github.com/anthropics/claude-code/issues?q=updated%3A%3E2026-08-08)
- **Release v2.1.226**: [Tag](https://github.com/anthropics/claude-code/releases/tag/v2.1.226)

*Digest generated from GitHub data as of 2026-08-09 00:00 UTC. Community signals (comments, 👍) reflect real-time engagement.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-09

---

## 1. Today's Highlights

The Codex team shipped **v0.148.0-alpha.5** while closing 10 PRs in the last 24 hours, focusing on hook system hardening (async support, timeouts, execution modes), workload identity token exchange, and gRPC code-mode host implementation. On the issue front, **Windows Computer Use** remains the top pain area with 5+ open bugs around stale `node_repl` contexts, missing approval prompts, and sandbox token failures. The community's most-upvoted ask (#21653, 59 👍) is a **multi-line status line for the TUI** — still open since May.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| **rust-v0.148.0-alpha.5** | Pre-release | Incremental alpha; no changelog published yet. Track via [Release 0.148.0-alpha.5](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.5). |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#21653](https://github.com/openai/codex/issues/21653) | **TUI: Multi-line status line support** | Long status lines truncate; no wrapping. Blocks power users who stack many status items. | 59 👍, 13 comments — highest engagement in backlog |
| [#27284](https://github.com/openai/codex/issues/27284) | **SSH remote: "No chats" despite existing threads** | Desktop app fails to surface remote threads stored in state DB; breaks remote workflow trust. | 5 👍, 12 comments |
| [#37013](https://github.com/openai/codex/issues/37013) | **Windows Computer Use: stale `node_repl` context reuse** | JS exec context not reset between calls; breaks multi-step Computer Use on Windows. | 3 👍, 11 comments |
| [#37458](https://github.com/openai/codex/issues/37458) | **Windows extension: "couldn't load resources"** | Extension fails to start on VS Code 1.132 + Windows; blocks all Windows IDE users. | 11 comments, 0 👍 (new, high urgency) |
| [#37180](https://github.com/openai/codex/issues/37180) | **Windows Computer Use: approval prompt never appears** | `launch_app` fails with `node_repl exec context not found`; approval flow broken. | 2 👍, 8 comments |
| [#33074](https://github.com/openai/codex/issues/33074) | **Windows app: mouse stutter on startup/task switch** | System-wide input lag during Codex launch; severe enough to affect OS usability. | 9 👍, 6 comments |
| [#37649](https://github.com/openai/codex/issues/37649) | **CLI/macOS: frequent reconnect loops & stream disconnects** | Simple prompts trigger "stream disconnected before completion"; hurts reliability perception. | 6 comments, filed today |
| [#34076](https://github.com/openai/codex/issues/34076) | **Desktop loses local project registrations** | Sidebar hides active threads while CLI DB is healthy; UI↔core sync bug. | 6 comments |
| [#33479](https://github.com/openai/codex/issues/33479) | **Sandbox: relative write rules expand recursively until E2BIG** | Write rules under `:workspace_roots` grow unbounded across turns; process spawn fails. | 3 👍, 5 comments |
| [#35292](https://github.com/openai/codex/issues/35292) | **TUI: Esc-Esc resume downgrades gpt-5.6-sol Ultra → xhigh** | Model tier silently changes on resume; unexpected quality drop. | 4 comments |

---

## 4. Key PR Progress (Last 24h)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#37644](https://github.com/openai/codex/pull/37644) | Generalize hook handler execution | **Closed** | Route all handlers through hooks engine; reject MCP inputs with `null` (unrepresentable in TOML for trust hashing). |
| [#37533](https://github.com/openai/codex/pull/37533) | Support asynchronous command hooks | **Closed** | Run `async` command hooks in background with per-session concurrency limit; `SessionEnd` still sync. |
| [#37527](https://github.com/openai/codex/pull/37527) | Terminate timed-out hook process trees | **Closed** | Unix: process groups; Windows: job objects. Full tree killed on timeout. |
| [#37538](https://github.com/openai/codex/pull/37538) | Expose execution mode in hook listings | **Closed** | `hooks/list` now returns `executionMode` (`sync`/`async`); propagated via app-server protocol. |
| [#37610](https://github.com/openai/codex/pull/37610) | Add workload identity token exchange | **Closed** | New `codex-workload-identity` crate: file-backed JWT + federation rule → short-lived ChatGPT creds; cached & auto-refreshed. |
| [#37530](https://github.com/openai/codex/pull/37530) | Implement gRPC code-mode host service | **Closed** | `GrpcCodeModeHost`: leased sessions, exec/wait lifecycle, filtered tool-call subscriptions, completions, notifications. |
| [#37607](https://github.com/openai/codex/pull/37607) | Prevent launch context reaching child processes | **Closed** | `OPENAI_FEDERATION_RULE_ID`, `OPENAI_IDENTITY_TOKEN_FILE` marked non-inheritable (case-insensitive). |
| [#37618](https://github.com/openai/codex/pull/37618) | Use step environments for Guardian approval reviews | **Closed** | Approval reviews now use step's environment (not stale turn snapshot) for correct working dir/permissions. |
| [#37641](https://github.com/openai/codex/pull/37641) | Use step context for command approval prefix rules | **Closed** | `allow_prefix_rules` read from active step context when building exec approval requests. |
| [#37622](https://github.com/openai/codex/pull/37622) | Include buffered turns when editing prompts | **Closed** | Reconstruct buffered turns from notifications before locating prompt to edit. |

---

## 5. Feature Request Trends

| Trend | Evidence (Issues) | Signal |
|-------|-------------------|--------|
| **TUI polish & customization** | #21653 (multi-line status, 59 👍), #17103 (Ctrl+V text paste) | High — core daily-driver UX |
| **Windows parity for Computer Use** | #37013, #37180, #37281, #37509, #37595 (5+ open bugs) | Critical — blocking Windows adoption |
| **Remote/SSH workflow reliability** | #27284 (thread visibility), #29335 (host discovery), #34767 (dual active turns) | Growing — team/enterprise usage |
| **Sandbox & permission model fixes** | #33479 (rule expansion), #36328 (token error 1344), #37648 (browser sandbox) | Foundational — affects all platforms |
| **Extension stability on Windows** | #37458, #35479, #35182 (all "extension won't load") | Acute — IDE users blocked |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Windows Computer Use is fundamentally broken** — stale exec contexts, missing approval prompts, screenshot failures, sandbox token errors (1344/0x80070424). Multiple independent reports across CLI, App, and sandbox modes.

2. **Extension load failures on Windows** — three separate issues (#37458, #35479, #35182) with "Oops, an error has occurred" / "couldn't load resources" on VS Code 1.132+. Zero-workaround blockers.

3. **Reconnect/stream instability on macOS** — #37649 (filed today) describes frequent "stream disconnected before completion" even for trivial prompts; erodes trust in CLI reliability.

4. **UI↔Core state desync** — Desktop app loses project registrations (#34076), hides remote threads (#27284), and shows "No chats" despite healthy DB. Users can't trust the sidebar.

5. **Mouse/input regression on Windows** — #33074 (9 👍) reports system-wide mouse stutter during Codex startup/task switching *without* CPU/disk pressure; affects whole OS.

6. **Silent model tier changes** — #35292: Esc-Esc resume downgrades `gpt-5.6-sol` Ultra → `xhigh` with no user consent or notification.

---

*Generated from github.com/openai/codex data as of 2026-08-09. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-09

## 1. Today's Highlights
The project shipped nightly **v0.56.0-nightly.20260809** with routine version bumps. Active development centers on **agent architecture stability** — fixing sub-agent hang/recovery bugs, memory system reliability, and sandbox crashes — while a notable PR enables **recursive agent delegation** (agents calling agents). Several P1 bugs around shell hangs, browser agent failures on Wayland, and OAuth timeout leaks are being addressed.

## 2. Releases
**v0.56.0-nightly.20260809.gcf22ac7e8** — Automated nightly build.  
[Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260808.gcf22ac7e8...v0.56.0-nightly.20260809.gcf22ac7e8) shows incremental changes since previous nightly.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports `GOAL` success after hitting `MAX_TURNS`** | Masks real failures; breaks trust in agent delegation. | 12 comments, 2 👍, P1, `status/need-retesting` |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks core workflows; workaround is disabling sub-agents. | 8 comments, 8 👍, P1 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations (EPIC)** | Scaling eval infra for 76+ behavioral tests across 6 models. | 7 comments, P1, `aiq/eval_infra` |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file tools for codebase mapping** | Could reduce token waste & misaligned reads via precise method bounds. | 7 comments, 1 👍, P2, EPIC |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini underuses skills/sub-agents autonomously** | Limits "agentic" value; requires explicit user prompting. | 6 comments, P2 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions endlessly** | Wastes compute; clutters memory inbox. | 5 comments, P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory redaction happens post-model-context** | Security risk: secrets enter model context before redaction. | 4 comments, P2, `area/security` |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck at "Waiting input" after completion** | Frequent UI freeze on simple commands; breaks flow. | 4 comments, 3 👍, P1 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent fails on locked profile (persistent mode)** | Fail-fast on profile lock; needs auto-recovery/takeover. | 4 comments, P3, `kind/feature` |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform regression; blocks Linux/Wayland users. | 4 comments, 1 👍, P1, `agent/browser` |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#28738](https://github.com/google-gemini/gemini-cli/pull/28738) | **Allow agents to call agents** (recursive delegation) | Enables sub-agents to spawn further sub-agents via `tools:` frontmatter. Fixes #22092. | Open, `size/l`, `help wanted` |
| [#28739](https://github.com/google-gemini/gemini-cli/pull/28739) | **chore: bump to v0.56.0-nightly.20260809** | Automated nightly version bump. | Open |
| [#28735](https://github.com/google-gemini/gemini-cli/pull/28735) | **fix(core): guard `formatTruncatedToolOutput` for non-positive `maxChars`** | Prevents output inflation bug (#28620). | Open, `priority/p1`, `size/xs` |
| [#28736](https://github.com/google-gemini/gemini-cli/pull/28736) | **fix(core): clear OAuth callback timeout on flow completion** | Stops dangling timeouts after auth (#28652). | Open, `area/security`, `size/s` |
| [#28734](https://github.com/google-gemini/gemini-cli/pull/28734) | **fix(core): handle `EACCES` in `resolveToRealPath` (macOS Seatbelt)** | Prevents CLI crash on startup in sandboxed git repos. | Open, `priority/p1`, `area/platform` |
| [#28679](https://github.com/google-gemini/gemini-cli/pull/28679) | **fix(auth): improve Vertex AI 401 error with API key** | Clearer guidance when standard key used for Vertex. | Open, `priority/p2`, `area/security` |
| [#28619](https://github.com/google-gemini/gemini-cli/pull/28619) | **Update `.gitignore` for `.env`/`.ai`; add unit tests** | Hygiene + test coverage. | Open, `priority/p1`, `size/m` |
| [#28608](https://github.com/google-gemini/gemini-cli/pull/28608) | **fix(core): fallback to stable models on preview 404 (Gemini API key)** | Handles missing preview access gracefully (#28600). | Open, `priority/p1`, `size/l` |
| [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) | **fix(vscode-ide): stop leaking disposables** | Fixes memory leak in VS Code extension (#27790). | **Closed** |
| [#28606](https://github.com/google-gemini/gemini-cli/pull/28606) | **Setapart** (large refactor) | Details sparse; likely internal restructuring. | Open, `priority/p1`, `size/l` |

## 5. Feature Request Trends
1. **Deeper agent composition** — Recursive delegation (#28738), sub-agent visibility in `/chat share` (#22598), and autonomous skill usage (#21968) point toward a **hierarchical agent runtime**.
2. **AST-aware tooling** — Two linked issues (#22745, #22746) explore structured code navigation (Tilth/Glyph) to replace grep/glob-heavy reads.
3. **Memory system hardening** — Three concurrent issues (#26522, #26523, #26525) target Auto Memory reliability, security, and observability.
4. **Eval infrastructure scaling** — #24353 (EPIC) aims to productionize 76+ behavioral evals across model versions.
5. **Browser agent resilience** — Profile takeover (#22232), Wayland support (#21983), and settings propagation (#22267) are parallel hardening efforts.

## 6. Developer Pain Points (Recurring Themes)
- **Agent opacity & unreliability**: Hangs (#21409), false success reports (#22323), ignored configs (#22267), and unauthorized runs (#22093) erode trust.
- **Shell/terminal friction**: "Waiting input" ghost state (#25166), interactive prompt stalls (#22465), resize flicker (#21924), and editor exit corruption (#24935).
- **Security/privacy gaps**: Auto Memory sends secrets pre-redaction (#26525), symlinked agents ignored (#20079), and `.env` not gitignored by default (#28619).
- **Tool overload**: 400 errors >128 tools (#24246) — no smart scoping.
- **Platform-specific breaks**: Wayland browser agent (#21983), macOS Seatbelt sandbox crash (#28734).
- **Debuggability**: Bug reports lack sub-agent context (#21763); sub-agent trajectories not shareable (#22598).

---

*Generated from `google-gemini/gemini-cli` GitHub data (2026-08-09). All links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-09

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The issue tracker shows active triage across **session stability**, **Windows compatibility**, **authentication flows**, and **model/context configuration parity** between interactive CLI and ACP. Several high-impact bugs—silent startup exits on Windows, session resume losing model selection, and missing `allowed_directories` loading—are drawing developer attention. Feature requests cluster around **Auto-mode granularity**, **localization**, and **keyboard shortcut customization**.

---

## 2. Releases

*No new releases published in the last 24 hours.*

---

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4285](https://github.com/github/copilot-cli/issues/4285) | **Silent exit (code 1) on Windows when log level ≠ `all`/`default`** | Blocks all Windows users on non-verbose log levels; zero stdout/stderr makes debugging impossible. | 👍 2 • 1 comment |
| [#4256](https://github.com/github/copilot-cli/issues/4256) | **Add `cache_control` breakpoints for Anthropic requests** | Avoids re-processing expensive static context (system prompt, tools, repo files) on every turn—major cost/latency win. | 👍 3 • 1 comment |
| [#4299](https://github.com/github/copilot-cli/issues/4299) | **Typing latency degrades over long sessions** | Renders CLI unusable in long-running/background-agent sessions; affects core developer loop. | 👍 1 • 2 comments • **Closed** |
| [#4397](https://github.com/github/copilot-cli/issues/4397) | **Resume session switches back to default model** | Breaks workflow continuity; users must re-select model after every resume. | 0 👍 • New (Aug 7) |
| [#4398](https://github.com/github/copilot-cli/issues/4398) | **`allowed_directories` in permissions.config never loaded** | Permissions system silently ignores configured directories; `/list-dirs` shows nothing. | 0 👍 • New (Aug 7) |
| [#4402](https://github.com/github/copilot-cli/issues/4402) | **npm `bin/copilot` is a loader, not a version pin** | Same path serves different versions seconds apart; `--prefer-version` undocumented. | 0 👍 • New (Aug 7) |
| [#4408](https://github.com/github/copilot-cli/issues/4408) | **github-mcp-server `/mcp authenticate` fails on Enterprise** | Cross-origin resource identifier breaks OAuth discovery; blocks Enterprise MCP adoption. | 0 👍 • New (Aug 8) |
| [#4409](https://github.com/github/copilot-cli/issues/4409) | **No UI indication when `cli_remote_control_enabled: false`** | Desktop/Mobile settings appear functional but fail opaquely (HTTP 422); poor UX. | 0 👍 • New (Aug 8) |
| [#4394](https://github.com/github/copilot-cli/issues/4394) | **Allow disabling/remapping “Ctrl+C twice to exit”** | Conflicts with muscle memory (cancel/copy); no config escape hatch. | 0 👍 • New (Aug 7) |
| [#4275](https://github.com/github/copilot-cli/issues/4275) | **ACP: expose `contextTier` as session config (parity with `/model`)** | Interactive CLI allows mid-session context-tier change; ACP clients locked to spawn-time only. | 0 👍 • 1 comment |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

| Theme | Representative Issues | Direction |
|-------|----------------------|-----------|
| **Auto-mode granularity** | [#4411](https://github.com/github/copilot-cli/issues/4411), [#4412](https://github.com/github/copilot-cli/issues/4412) | Users want min/max model strength, bias knobs, and local wiring—moving beyond binary on/off. |
| **Localization** | [#4407](https://github.com/github/copilot-cli/issues/4407) | First-class Chinese (zh-CN) UI support requested for desktop app & CLI. |
| **Keyboard/UX customization** | [#4394](https://github.com/github/copilot-cli/issues/4394), [#4129](https://github.com/github/copilot-cli/issues/4129) | Remappable shortcuts (Ctrl+C), banner behavior (`once` vs `always`) respecting config. |
| **Session & model persistence** | [#4397](https://github.com/github/copilot-cli/issues/4397), [#4329](https://github.com/github/copilot-cli/issues/4329) | Resume should restore model + autopilot state; currently both reset. |
| **ACP ↔ Interactive parity** | [#4275](https://github.com/github/copilot-cli/issues/4275) | `contextTier` and other session configs must be mutable at runtime via ACP. |
| **Cross-tool config compatibility** | [#4399](https://github.com/github/copilot-cli/issues/4399) | Support `.claude/settings*.json` hooks with POSIX shell operators on Windows PowerShell. |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Windows-specific regressions** — Silent exits (#4285), hook execution failures (#4399), skill discovery broken (#4401).  
2. **Session state loss on resume** — Model selection (#4397), autopilot enablement (#4329) not persisted.  
3. **Permissions system opacity** — `allowed_directories` ignored (#4398), no feedback when remote control disabled (#4409).  
4. **Versioning/Installation confusion** — npm shim loads arbitrary versions (#4402); `--prefer-version` hidden.  
5. **Authentication UX gaps** — Browser login URL wrapping (#4400), Enterprise MCP OAuth broken (#4408).  
6. **Cost/latency optimization missing** — No `cache_control` for Anthropic (#4256) despite repeated context.  
7. **Keyboard shortcut rigidity** — Double-Ctrl+C exit conflicts with copy/cancel habits (#4394).  

---

*Digest generated from github.com/github/copilot-cli data as of 2026-08-09 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-09

## Today's Highlights
- **No new releases** in the past 24 hours.  
- A long-standing **Memory System feature request (#1283)** resurfaced with 25 comments, indicating sustained community demand for persistent cross-session context.  
- A critical **runaway generation bug (#2597)** was filed: a single LLM step emitted 88k tokens of gibberish over 53 minutes, highlighting a severe token-generation guardrail gap.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **[#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)** | **Feature Request: Memory System — Persistent context across sessions** | Enables Kimi to retain project patterns, user preferences, and AI-managed notes between sessions—core for agentic workflows. | 25 comments since Feb 2026; updated 2026-08-08. High engagement signals strong, ongoing demand. |
| **[#2597](https://github.com/MoonshotAI/kimi-cli/issues/2597)** | **Bug: Runaway garbled generation — 88k tokens of gibberish in one LLM step** | A single step ran 3,214 s and produced 88,114 tokens of incoherent output. Exposes missing token-budget/time guards and streaming sanity checks. | Filed 2026-08-08; 0 comments yet. Severity warrants immediate triage. |

*Only two issues updated in the last 24 h; both are high-impact.*

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **Persistent Memory / Cross-Session Context** — The dominant ask (#1283). Developers want both automatic (AI-summarized) and manual (user-defined) memory with project-scoped storage.  
2. **Guardrails for Generation** — Implied by #2597: hard token limits, per-step timeouts, and coherence detectors are now perceived as essential safety features.  
3. **Session Portability** — Closely tied to memory: export/import of session state for handoff between machines or CI pipelines.

---

## Developer Pain Points
- **Unbounded Generation** — Runaway tokens waste cost, time, and context window; no built-in circuit breaker observed.  
- **Context Amnesia** — Every session starts from zero; users manually re-inject project docs, conventions, and preferences.  
- **Observability Gap** — No real-time token/step metrics surfaced in CLI; runaway events discovered only post-hoc.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` (issues & PRs updated 2026-08-08 → 2026-08-09).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-09

## Today's Highlights
No new releases shipped today. The v2 migration effort dominates activity: multiple SQLite migration failures block V1→V2 session imports, while a compliance audit revealed 8 stale agent files with outdated toolchain knowledge. On the UX front, copy/paste remains broken in the CLI (27👍, 55 comments), and Windows users face verbose Bun stack traces on every startup.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#13984](https://github.com/anomalyco/opencode/issues/13984) | **Cannot copy/paste in CLI** | Core UX broken for 6+ months; clipboard shows "copied" but paste yields nothing | 27👍, 55 comments — highest engagement |
| [#41346](https://github.com/anomalyco/opencode/issues/41346) | **V1→V2 migration fails with SQLite syntax error on every start** | Blocks all V2 upgrades; legacy sessions never imported | Fresh today, 1 comment |
| [#41341](https://github.com/anomalyco/opencode/issues/41341) | **V1→V2 migration fails when previous channel DB lacks `fork_boundary`** | Schema mismatch prevents migration; stuck at `phase: sessions` | Fresh today |
| [#41351](https://github.com/anomalyco/opencode/issues/41351) | **Stale toolchain knowledge in 254 agents (8 files flagged)** | Compliance risk: agents reference EOL versions, outdated regulatory claims | Tagged `needs:compliance`, fresh today |
| [#41349](https://github.com/anomalyco/opencode/issues/41349) | **Desktop: empty session list for UNC network paths (Windows)** | Breaks team workflows on shared drives | Tagged `needs:compliance`, fresh today |
| [#41345](https://github.com/anomalyco/opencode/issues/41345) | **Models not responding / interface freezes on any prompt** | Complete app freeze regardless of model (GPT-5.6 Luna shown) | Fresh today |
| [#41337](https://github.com/anomalyco/opencode/issues/41337) | **Bun CPU spike after hibernation restart (v1.18.15, Windows)** | Post-hibernation Bun process consumes high CPU; upstream Bun issue #37224 | Fresh today |
| [#35649](https://github.com/anomalyco/opencode/issues/35649) | **Links wrapped across lines not clickable in Kitty terminal** | OSC 8 hyperlink rendering broken for long URLs | 2👍, 4 comments |
| [#32548](https://github.com/anomalyco/opencode/issues/32548) | **Step-cap assistant message causes 400 on Claude with thinking enabled** | "MAXIMUM STEPS REACHED" message sent as assistant role → Anthropic rejects as prefill | 5 comments |
| [#41334](https://github.com/anomalyco/opencode/issues/41334) | **Windows: Verbose Bun stack traces on every startup** | Noisy debug output cannot be suppressed via config | Fresh today |

---

## Key PR Progress

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#40997](https://github.com/anomalyco/opencode/pull/40997) | **refactor(core): replace integration prompts with forms** | Refactor | Unifies OAuth/key validation via `Form.Fields`; migrates GitHub Copilot, Azure, Cloudflare |
| [#40427](https://github.com/anomalyco/opencode/pull/40427) | **[beta] experimental perf improvements** | Perf | Renderer memory: 7.45 MB → 1.82 MB (-75.5%) on immutable DB snapshot |
| [#41347](https://github.com/anomalyco/opencode/pull/41347) | **fix(tui): sync Mermaid renderer fixes** | Bug fix | Fixes corrupted state diagrams, HTML entity decoding, spatial routing |
| [#40861](https://github.com/anomalyco/opencode/pull/40861) | **fix(opencode): stop storing full patch text in session summary diffs** | Bug fix | Fixes #32005; reduces session summary bloat by storing only metadata |
| [#41344](https://github.com/anomalyco/opencode/pull/41344) | **fix(tui): undo latest pending prompt** | Bug fix | Fixes #39736; `/undo` now removes newest queued/steering prompt before history revert |
| [#41342](https://github.com/anomalyco/opencode/pull/41342) | **feat(tui): show session branches in vertical tabs** | Feature | Non-default VCS branches shown as `project:branch`; default branches hidden |
| [#41189](https://github.com/anomalyco/opencode/pull/41189) | **feat(tui): region structure for plugin slot placement** | Feature | Plugins claim slots relative to named host parts (tree structure) instead of position-encoded names |
| [#41202](https://github.com/anomalyco/opencode/pull/41202) | **fix(core): authorize file mutations before locking** | Bug fix | Permission check before acquiring file-mutation lock; avoids deadlocks |
| [#12042](https://github.com/anomalyco/opencode/pull/12042) | **feat(plugin): provide SDK v2** | Feature | Dual SDK clients (v1/v2) for backward compatibility; incremental migration path |
| [#41350](https://github.com/anomalyco/opencode/pull/41350) | **feat(app): add animated BusyWave loading indicator** | UX | Replaces shimmering "Thinking" label with persistent TUI-inspired wave animation |

---

## Feature Request Trends
1. **Session resilience & continuity** — Subagent recovery after crashes/hibernation ([#41338](https://github.com/anomalyco/opencode/issues/41338)), undo pending prompts ([#41344](https://github.com/anomalyco/opencode/pull/41344)), session branch visibility ([#41342](https://github.com/anomalyco/opencode/pull/41342)).
2. **Desktop/web UX hardening** — Guard against accidental refresh ([#41348](https://github.com/anomalyco/opencode/issues/41348)), drag-and-drop Office files ([#27689](https://github.com/anomalyco/opencode/issues/27689)), UNC path support ([#41349](https://github.com/anomalyco/opencode/issues/41349)).
3. **Plugin extensibility** — Structured slot regions ([#41189](https://github.com/anomalyco/opencode/pull/41189)), SDK v2 dual support ([#12042](https://github.com/anomalyco/opencode/pull/12042)), ECC plugin CLI/Desktop parity ([#34776](https://github.com/anomalyco/opencode/issues/34776)).
4. **Migration & data integrity** — V1→V2 SQLite fixes ([#41346](https://github.com/anomalyco/opencode/issues/41346), [#41341](https://github.com/anomalyco/opencode/issues/41341)), agent knowledge freshness audit ([#41351](https://github.com/anomalyco/opencode/issues/41351)).

---

## Developer Pain Points
- **CLI copy/paste fundamentally broken** — 6-month-old issue with high community frustration (27👍, 55 comments).
- **V2 migration unreliable** — Multiple SQLite schema errors block upgrades; migrations re-run and fail on every startup.
- **Windows/Bun integration noisy** — Verbose stack traces on every launch ([#41334](https://github.com/anomalyco/opencode/issues/41334)), CPU spikes post-hibernation ([#41337](https://github.com/anomalyco/opencode/issues/41337)).
- **Desktop regressions** — Plugin slash commands pass as raw text ([#41339](https://github.com/anomalyco/opencode/issues/41339)), ECC plugin breaks `/commands` ([#34776](https://github.com/anomalyco/opencode/issues/34776)), UNC paths invisible ([#41349](https://github.com/anomalyco/opencode/issues/41349)).
- **Model integration fragility** — Step-cap message format breaks Claude thinking ([#32548](https://github.com/anomalyco/opencode/issues/32548)), complete UI freeze on any prompt ([#41345](https://github.com/anomalyco/opencode/issues/41345)).
- **Terminal rendering gaps** — Kitty hyperlink wrapping ([#35649](https://github.com/anomalyco/opencode/issues/35649)), Mermaid diagram corruption (fixed in [#41347](https://github.com/anomalyco/opencode/pull/41347)).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-09

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The community remains focused on stabilizing the `openai-codex` provider (persistent connection reliability issues with 76 comments on #4945) and fixing auto-compaction logic that fails to trigger until provider overflow (#6879). A significant PR (#7823) merged A-level capabilities from oh-my-pi—stream rules, subagent tools, advisor, and cross-session memory—into core.

---

## 2. Releases

*None in the last 24h.*

---

## 3. Hot Issues (Top 10 by Impact)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) **openai-codex Connection Reliability** | `gpt-5.5` streams stall at `Working…` with no output, no tool call, no error—only Escape recovers. Blocks long-running agentic sessions. | 76 comments, 31 👍 — highest engagement in repo |
| [#6879](https://github.com/earendil-works/pi/issues/6879) **Auto-compaction Never Triggers Past 100%** | Context grew to 373k tokens before API rejection; compaction only ran on provider error, not at configured threshold. | 15 comments, 15 👍 — critical reliability gap |
| [#7821](https://github.com/earendil-works/pi/issues/7821) **Compaction Waits for `agent_end` During Long Tool Loops** | Root cause of #6879: compaction check deferred until entire agent loop emits `agent_end`, allowing unbounded growth during multi-hour tool chains. | 3 comments — design-level fix needed |
| [#7820](https://github.com/earendil-works/pi/issues/7820) **openai-codex: No Retry Wrapper on Stream Requests** | ~30% of long streaming turns die with transport errors (WebSocket 1006, ECONNRESET) because mid-stream disconnects lack `retryProviderRequest`. | 2 comments — directly compounds #4945 |
| [#7782](https://github.com/earendil-works/pi/issues/7782) **Invalid Bedrock Tool Call Poisons Session** | Empty-key arg (`"": ""`) accepted, persisted, replayed on every turn; Bedrock rejects replay, bricking session permanently. | 2 comments — validation/sanitization gap |
| [#7837](https://github.com/earendil-works/pi/issues/7837) **Fullscreen TUI: Mouse Selection Overwrites System Clipboard (OSC 52, target `c`)** | Every drag-select writes to clipboard with no modifier, no setting, no opt-out—breaks user workflow expectations. | 2 comments — UX regression |
| [#7734](https://github.com/earendil-works/pi/issues/7734) **Print Mode Hangs at Exit When Subagent Spawned** | With 14 extensions + `pi-subagents`, process finishes task, prints answer, then hangs at 0% CPU—blocks CI/automation. | 2 comments — extension lifecycle bug |
| [#7836](https://github.com/earendil-works/pi/issues/7836) **Edit Fuzzy Match Fails on Whitespace-Length Differences** | `normalizeForFuzzyMatch` doesn’t collapse whitespace runs; `oldText` fails match despite identical content—hurts small models. | 2 comments, 1 👍 — core editing reliability |
| [#7816](https://github.com/earendil-works/pi/issues/7816) **Reload Reports Stale Context from In-Flight Commands** | Reloading while extension command runs causes stale-context error on resume—breaks hot-reload workflow. | 2 comments — extension dev pain point |
| [#7814](https://github.com/earendil-works/pi/issues/7814) **Allow Multiple Logins for One Provider** | Users with multiple ChatGPT Plus subscriptions cannot use them concurrently without custom provider extensions. | 2 comments — frequent power-user request |

---

## 4. Key PR Progress (Top 10)

| PR | Status | Summary |
|----|--------|---------|
| [#7823](https://github.com/earendil-works/pi/pull/7823) | **Merged** | **Major feature port from oh-my-pi**: stream rules (pattern-match abort + retry), subagent tools, advisor, cross-session memory — four A-level capabilities landed in core. |
| [#7610](https://github.com/earendil-works/pi/pull/7610) | **Open** | Adds **LLM Gateway** (OpenRouter-style router) as built-in `openai-completions` providers — expands provider ecosystem. |
| [#7713](https://github.com/earendil-works/pi/pull/7713) | **Open** | Implements `StreamAssistant` + `StreamAssistantConfig` with `telemetryContext` for Harness v2 — foundation for observability. |
| [#7810](https://github.com/earendil-works/pi/pull/7810) | **Merged** | Fixes concurrent compaction crash (`Cannot read properties of undefined (reading 'signal')`) by rejecting duplicate `compact()` calls. |
| [#7811](https://github.com/earendil-works/pi/pull/7811) | **Merged** | Sends `max_tokens` (not `max_completion_tokens`) to native DeepSeek — DeepSeek ignores the latter, causing unbounded output. |
| [#7817](https://github.com/earendil-works/pi/pull/7817) | **Merged** | Treats `incomplete_details.reason = 'length'` as normal length stop (not error) for OpenAI-compatible providers (Doubao, Volcengine Ark). |
| [#7834](https://github.com/earendil-works/pi/pull/7834) | **Merged** | `pi --version` now annotates runtime: `0.84.1 (node)`, `0.84.1 (bun)`, `0.84.1 (deno)` — aids diagnostics. |
| [#7721](https://github.com/earendil-works/pi/pull/7721) | **Merged** | Fixes fullscreen TUI copy: wrapped lines no longer inject spurious newlines via OSC 52 — tracks visual row ownership. |
| [#7801](https://github.com/earendil-works/pi/pull/7801) | **Open** | Lazily loads uncommon syntax grammars — reduces startup bundle, minor UI invalidation on load. |
| [#7840](https://github.com/earendil-works/pi/pull/7840) | **Merged** | Docs: adds **Aliyun Model Studio CLI (`bailian-cli`)** to Related Tools — official DashScope CLI for Chinese cloud ecosystem. |

---

## 5. Feature Request Trends

1. **Multi-account / multi-profile support** — #7814 (multiple logins per provider), #7813 (multiple settings profiles via CLI/env/per-project), #7818 (delete active session, return to home screen).
2. **Provider ecosystem expansion** — #7543 (Meta Model API), #7838 (Cloudflare Workers AI Gateway), #7610 (LLM Gateway), #7840 (Aliyun `bailian-cli`).
3. **TUI fine-grained control** — #7830 (line-by-line scroll), #7765 (configurable mouse-wheel step), #7827 (horizontal scroll in slash autocomplete), #7837 (clipboard opt-out).
4. **Extension API depth** — #7824 (extension-side turn termination, caller-controlled RPC timeout), #7828 (message identity in markdown transformer), #7819 (immediate user message display).
5. **Session / goal management** — #7815 (goal replace/resume semantics), #7831 (RPC double-bind fix), #7816 (reload during in-flight commands).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Symptoms | Representative Issues |
|------|----------|----------------------|
| **openai-codex reliability** | Streams stall silently; mid-stream disconnects fatal; no retry; TUI stuck at `Working…` | #4945 (76 comments), #7820 |
| **Auto-compaction logic** | Threshold ignored until provider rejects; only checked at `agent_end`; concurrent compaction crashes | #6879, #7821, #7810 |
| **TUI clipboard & selection** | OSC 52 target `c` overwrites system clipboard on every drag; wrapped-line copy injects newlines; no scroll granularity | #7837, #7721, #7830, #7765 |
| **Edit tool fuzzy matching** | Whitespace-length differences break `oldText` match; single-object `edits` arg rejected | #7836, #7835 |
| **Extension lifecycle** | Print mode hangs with subagents; RPC double-binds extensions; reload breaks in-flight commands; malicious extension delays | #7734, #7831, #7816, #7825 |
| **Provider argument validation** | Bedrock empty-key arg accepted → session bricked; DeepSeek `max_tokens` vs `max_completion_tokens` mismatch | #7782, #7811 |
| **Settings / config UX** | Invalid JSON (unescaped backslashes) silently ignored → misleading `bash not found` on Windows | #7829 |
| **Rendering bugs** | Mermaid `:::className` syntax dropped; regular-mode TUI duplicates rows after transcript growth | #7832, #7839 |

---

*Digest generated from `earendil-works/pi` GitHub activity (2026-08-08 → 2026-08-09). All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-09

## 1. Today's Highlights
- **v0.21.8 released** with restored real-time autofix support for pull requests opened from forks and new compression cache sharing for OpenAI, Gemini, and Vertex AI providers.  
- **CI resilience improvements** dominate today's activity: deterministic gate rejections, spam blocklist enforcement, and label mutation routing fixes aim to stabilize the release pipeline.  
- **Architectural refactoring** is underway on the `/review` skill (toolchain adapter boundary, Maven multi-module verification) and session runtime unification across TUI, headless, ACP, and subagent surfaces.

---

## 2. Releases
### v0.21.8 — 2026-08-09
- **Real-time autofix for fork PRs**: Review events from forked repositories now bridge to credentialed workflows, restoring automated fix generation. ([#8676](https://github.com/QwenLM/qwen-code/pull/8676))
- **Compression cache sharing**: OpenAI, Gemini, and Vertex AI providers can now share compression caches, reducing token costs and latency for repeated context.
- **Release notes tag**: `<!-- qwen-release-notes:v1 -->`

---

## 3. Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8766](https://github.com/QwenLM/qwen-code/issues/8766) | **Main CI failed: E2E test `installs a local Qoder plugin`** | Blocks merge queue; labeled `autofix/in-progress` + `autofix/approved` — agent is actively attempting repair. | 4 comments, P1 priority, `status/ready-for-agent` |
| [#8771](https://github.com/QwenLM/qwen-code/issues/8771) | **Release failed for v0.21.8-nightly** | Integration jobs (`integration_none`, `integration_docker`) failed on nightly; signals flakiness in release pipeline. | 2 comments, `autofix/skip` — manual triage needed |
| [#8775](https://github.com/QwenLM/qwen-code/issues/8775) | **Proposal: unify session reasoning loops on Turn-based SessionRuntime** | Core architectural RFC: 6+ independent implementations (TUI, headless, ACP, serve, AgentCore) → single runtime. | 2 comments, `need-discussion`, `roadmap/session-management` |
| [#8769](https://github.com/QwenLM/qwen-code/issues/8769) | **Proposal: rebuild `/review` Step 3–5 on workflow engine** | Moves agent fan-out, verification, reverse audit from model-driven to deterministic workflow engine (`QWEN_CODE_ENABLE_WORKFLOWS`). | 2 comments, `need-discussion`, `roadmap/multi-agent` |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | **Fleet Shepherd Dashboard** | Auto-maintained fleet sync dashboard; tracks 2 active PRs (#8768, #8739) with checks in flight. | 3 comments, `scope/ci-cd`, bot-maintained |

---

## 4. Key PR Progress
| # | Title | Type | Status | Impact |
|---|-------|------|--------|--------|
| [#8765](https://github.com/QwenLM/qwen-code/pull/8765) | **A/B deterministic gate rejections against pre-round ref** | CI fix | Open | Re-runs failing check at `origin/<branch>` baseline; marks pre-existing failures, cuts 18-min retry loops. |
| [#8767](https://github.com/QwenLM/qwen-code/pull/8767) | **Make spam blocklist enforcement actually work** | CI fix | Open | Deletes blocklisted users' comments & closes their PRs via REST; replaces ineffective auto-minimize workflow. |
| [#8691](https://github.com/QwenLM/qwen-code/pull/8691) | **Make session restore timeouts safe and observable** | Core fix | Open | Dedicated 60s restore deadline for ACP session load/resume; decoupled from 10s child init budget. |
| [#8777](https://github.com/QwenLM/qwen-code/pull/8777) | **Add Maven multi-module verification to `/review`** | Feature | Open | Registers Maven adapter on toolchain boundary; maps changed files to deepest reactor module, prefers incremental test. |
| [#8776](https://github.com/QwenLM/qwen-code/pull/8776) | **Extract toolchain adapter boundary for `/review build-test`** | Refactor | Open | Splits npm detection/verification algo into `lib/npm-toolchain.ts`; enables Maven, Gradle, Bazel adapters. |
| [#8714](https://github.com/QwenLM/qwen-code/pull/8714) | **Add native DashScope integration** | Feature | Open | First-class `dashscope` auth type using Alibaba ModelStudio native API (not OpenAI-compat); built-in fetch transport. |
| [#8761](https://github.com/QwenLM/qwen-code/pull/8761) | **Route workflow label mutations through REST** | CI fix | Open | Replaces 5 `gh pr edit` label calls with REST `issues/labels`; adds repo-wide guard test. |
| [#8675](https://github.com/QwenLM/qwen-code/pull/8675) | **Add model-specific reasoning controls (Web Shell)** | Feature | Open | Registry for Thinking/Effort controls per model; first registration `qwen3`; spans Core, ACP, daemon, SDK, WebShell. |
| [#8728](https://github.com/QwenLM/qwen-code/pull/8728) | **Add live-session registry + `qwen sessions ps`** | Feature | Open | Each interactive session registers at `~/.qwen/sessions/<pid>.json`; enables cross-session messaging (#8730). |
| [#8743](https://github.com/QwenLM/qwen-code/pull/8743) | **Design doc: selective session restore** | Docs | Open | Performance-focused slice of #8678; defines cold restore projection with preloaded frozen mode. |

---

## 5. Feature Request Trends
1. **Session Runtime Unification** — Strong push to consolidate 6+ reasoning loop implementations into a single `Turn-based SessionRuntime` (#8775).
2. **Workflow Engine Adoption** — Moving `/review` orchestration and other multi-agent flows onto deterministic workflow engine (#8769, `QWEN_CODE_ENABLE_WORKFLOWS`).
3. **Multi-Language Build Verification** — Maven adapter landed (#8777), Gradle/Bazel adapters anticipated via toolchain boundary (#8776).
4. **Native Provider Integrations** — DashScope native API (#8714) follows pattern of first-class auth types beyond OpenAI-compat.
5. **Cross-Session Communication** — Live session registry (#8728) + inbound gating (#8730) enable multi-session workflows on same machine.

---

## 6. Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Flaky CI / Release Pipeline** | Nightly release failed (#8771), E2E test failure blocking main (#8766), label mutation via `gh pr edit` broken (#8761) | High — 3+ CI-related issues/PRs in 24h |
| **Session Restore Reliability** | Dedicated timeout PR (#8691), selective restore design (#8743), session registry (#8728) all target restore robustness | Medium — 3 PRs in 48h |
| **Spam/Abuse in PRs** | Blocklist enforcement was ineffective; new PR deletes comments & closes PRs (#8767) | Medium — explicit fix deployed |
| **Fragmented Reasoning Loop Logic** | 6 independent implementations called out in RFC (#8775); each surface (TUI, headless, ACP, etc.) maintains own loop | High — architectural debt flagged for unification |
| **Model Control Granularity** | Per-model reasoning controls (Thinking/Effort) needed across all interfaces (#8675) | Medium — registry pattern implemented |

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-09

---

## 1. Today's Highlights

CodeWhale v0.9.5 has been publicly released, completing the rebrand from the legacy `deepseek-tui` npm package to the Shannon Labs `codewhale` product. The release consolidates the terminal app into a single compiled runtime, removes default turn ceilings that interrupted long-running agent work, and aligns installers, updaters, and release assets around the new `codewhale`/`codew` command surface. Concurrently, the v0.9.5 milestone tracker (Issue #5266) has opened with 10+ self-contained engineering tasks spanning prompt-scoped file recovery, unified task surfaces, session peek, durable plan artifacts, and mid-turn control — signaling the next development cycle is already structured and underway.

---

## 2. Releases

### v0.9.5 (2026-08-08) — Public Release
- **Rebrand complete**: `codewhale` CLI command, npm package, and release assets now canonical; legacy `deepseek-tui` deprecated.
- **Runtime consolidation**: Single compiled binary; `codewhale` and `codew` commands preserved.
- **Turn ceilings removed**: Default limits that interrupted long agent sessions eliminated.
- **Updater/installer alignment**: All distribution channels (GitHub Releases, CNB, website, package managers) now publish v0.9.5 assets.
- **Release PR**: [#5292](https://github.com/Hmbown/CodeWhale/pull/5292) | **Assets**: 34/34 verified on GitHub Release

### v0.9.4 (2026-08-08) — Pre-release / RC
- Same rebrand notes as v0.9.5; appears to be the release candidate promoted to stable.

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) | **Dead-code sweep: 464 `#[allow(dead_code)]` hiding drift** | 464 suppressions across 143 files prevent compiler from catching unused code; stripping them reveals true drift. Foundational hygiene for v0.9.5+. | 6 comments, author-driven, high technical weight |
| [#4326](https://github.com/Hmbown/CodeWhale/issues/4326) | **Perf: bound RSS after cancelling 32-worker storm** | High fan-out PTY benchmark shows RSS *increases* post-cancellation — need to distinguish allocator retention from real leaks. Critical for Fleet/subagent reliability. | 6 comments, perf-focused, v0.9.5 tagged |
| [#4416](https://github.com/Hmbown/CodeWhale/issues/4416) | **Isolate stale failed-agent state between sessions** | Second TUI instance in same workspace renders failed agents from prior session — UX/reliability bug in multi-session workflows. | 4 comments, visible dogfood pain |
| [#5034](https://github.com/Hmbown/CodeWhale/issues/5034) | **Switching providers retains unrelated default model** | Provider/model resolution not atomic; switching to OpenAI can leave `gpt-5.5` default from prior route. Multi-provider UX gap. | 3 comments, recent (Aug 1) |
| [#5272](https://github.com/Hmbown/CodeWhale/issues/5272) | **Prompt-scoped file recovery (restore workspace from prior prompt)** | Restore files agent *wrote* (session snapshots), not just transcript. Git-cooperative, confirmation-gated. High-value recovery UX. | 2 comments, v0.9.5 milestone, enhancement |
| [#5270](https://github.com/Hmbown/CodeWhale/issues/5270) | **Unified tasks surface (shell + subagents + durable workers)** | Single operator-facing list of all background work: shells, subagents, Fleet workers, workflow runs. Eliminates fragmented task panels. | 2 comments, v0.9.5 milestone, UX unification |
| [#5271](https://github.com/Hmbown/CodeWhale/issues/5271) | **Session peek (list/peek/answer approvals without full attach)** | Multi-session control beyond resume picker: peek pending approvals, answer safely, pin/dispatch/stop without losing composer context. | 2 comments, v0.9.5 milestone, power-user UX |
| [#5269](https://github.com/Hmbown/CodeWhale/issues/5269) | **Durable plan artifact + line comments (fold #4390)** | Plan mode leaves commentable, persistent artifact without weakening write gate. Folds long-standing #4390. | 2 comments, v0.9.5 milestone, folds prior work |
| [#5268](https://github.com/Hmbown/CodeWhale/issues/5268) | **Mid-turn control (queue/send-now/Esc-keep-draft) + named waits** | Composer stays useful during turn; status chrome names what agent waits on. Replaces "fighting locked chat bubble" feel. | 2 comments, v0.9.5 milestone, core UX |
| [#5267](https://github.com/Hmbown/CodeWhale/issues/5267) | **Turn-stop honesty (status that says ending must end)** | Footer says "ending/stopping" but model keeps talking. Four resume paths cause trust erosion. Delete false guards over prose. | 2 comments, v0.9.5 milestone, reliability |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#5292](https://github.com/Hmbown/CodeWhale/pull/5292) | `chore(release): prepare v0.9.5` | **Closed** | Release consolidation: single runtime, turn ceilings removed, updater/installer/website/assets aligned to `codewhale` brand. |
| [#5301](https://github.com/Hmbown/CodeWhale/pull/5301) | `fix(tui): make compaction live and pressure-aware` | **Closed** | Manual `/compact` now non-blocking with typed lifecycle IDs; auto-compaction thresholds (128K/272K/1M) aligned with conservative request pressure. |
| [#5300](https://github.com/Hmbown/CodeWhale/pull/5300) | `refactor(core): own primary request preparation` | **Open** | Moves production `MessageRequest` DTO family from TUI → `codewhale-core`; adds pure `prepare_primary_turn_request` for provider-neutral defaults. |
| [#5295](https://github.com/Hmbown/CodeWhale/pull/5295) | `feat: add Mistral AI as first-class provider route` | **Closed** | First-time contributor @xavierpestel-ai adds Mistral (la Plateforme) provider; defaults to `mistral-code-latest`, supports `provider=mistral`. |
| [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) | `feat(runtime-api): expose persistent goal-loop state` | **Closed** | New `/v1/threads/{id}/goal` GET/PATCH/POST endpoints for managed clients to read/drive goal lifecycle. |
| [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) | `Runtime API: expose verifier receipts and evidence` | **Closed** | Three new Fleet run endpoints: `GET receipts`, `GET evidence`, `GET summary` — beyond aggregate `verifier_failed` counter. |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | `feat: Runtime API memory endpoints` | **Closed** | Full memory resource CRUD under `/v1/memory` with scope/provenance inspection and lifecycle controls. |
| [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) | `feat(runtime-api): bounded MCP server configuration` | **Closed** | POST/PATCH/DELETE `/v1/apps/mcp/servers` — managed clients no longer edit TOML directly. |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) | `feat(runtime-api): add skill lifecycle endpoints` | **Closed** | Install/update/uninstall/trust/audit skills via HTTP; parity with TUI skill management. |
| [#5205](https://github.com/Hmbown/CodeWhale/pull/5205) | `Stabilize IME candidate positioning in Tabby` | **Closed** | Detects `TERM_PROGRAM=Tabby`; enables low-motion rendering, bounded redraw cadence, disables cursor-shape escape sequences for Chinese IME stability. |

---

## 5. Feature Request Trends (From All Issues)

1. **Multi-session & Multi-agent Orchestration** — Unified task surface (#5270), session peek (#5271), Fleet/workflow integration, subagent output contracts (#5189). Developers want a single pane of glass for all background work.
2. **Recovery & Undo at Prompt Granularity** — Prompt-scoped file restore (#5272), durable plan artifacts (#5269), compaction survival contracts (#4394, #5043). Moving beyond `git` archaeology.
3. **Composer UX During Active Turns** — Mid-turn control (#5268), turn-stop honesty (#5267), queue vs send-now vs cancel-keep-draft semantics. "Fighting a locked chat bubble" is a recurring metaphor.
4. **Provider/Model Abstraction Hardening** — Provider-neutral types (#5103), Responses dialect selection (#5094, #5093, #5092), unknown-model fallback transparency (#5244). Legacy `DeepSeekClient` naming still pervasive.
5. **Build & Release Velocity** — Monolith crate tax (#5249: 682K-line `codewhale-tui` crate = 86% of workspace), publication order validation (#5306), CNB asset URLs (#5308). Edit-compile-test-release loops are painfully slow.
6. **Observability & Telemetry** — Process fixture serialization (#5296), shutdown-only flush (#5294), structured verifier receipts (#5132). Telemetry becoming first-class for managed clients.
7. **Automation & Scheduling Gaps** — Cron-watcher completion (#5181: one-shot reminders, 5-field cron, lightweight watchers), web admin i18n fix (#5177).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Monolith crate recompilation on every edit** | `codewhale-tui` = 682K lines, 620 files, 86% of workspace; invalidated on every commit via build-SHA stamp | High (Issue #5249, multiple PRs) |
| **Stale state leaking across sessions** | Failed agents from prior session render in new instance (#4416); provider switch retains wrong default model (#5034) | High (multiple issues, recent) |
| **Compaction behavior is opaque & lossy** | No structured survival contract (#4394); silent 128K fallback for unknown models (#5244); intent/evidence loss (#5043) | High (4+ issues) |
| **Composer locked during agent turns** | "Fighting locked chat bubble" (#5268); turn-stop status lies (#5267); no queue/send-now/keep-draft clarity | High (v0.9.5 milestone cluster) |
| **Legacy naming blocks provider extensibility** | `DeepSeekClient`, `deepseek_client` fields, `ProviderKind` enum (31 variants), 81 hardcoded models (#4173, #5103) | Medium (architectural debt) |
| **Notification system unactionable & inconsistent** | Toasts don't explain what changed/why/what to do; controls hard to discover (#5041) | Medium |
| **Web search/fetch feels fragmented** | Search, fetch, citations, fallback not a coherent retrieval path (#5037) | Medium |
| **Subagent ceremony too heavy for small tasks** | Mandatory `SUMMARY/EVIDENCE/CHANGES/RISKS/BLOCKERS` + sentinel for every child (#5189) | Low (but explicit) |

---

*Digest generated from GitHub data for Hmbown/CodeWhale (formerly DeepSeek-TUI) as of 2026-08-09. All links point to live GitHub issues/PRs.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*