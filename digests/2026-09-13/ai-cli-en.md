# AI CLI Tools Community Digest 2026-09-13

> Generated: 2026-09-13 04:27 UTC | Tools covered: 10

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

# Cross-Tool AI CLI Ecosystem Comparison Report — 2026-09-13

---

## 1. Ecosystem Overview

The AI CLI tool landscape shows **intense parallel evolution** across 8 active projects (Grok Build inactive). All tools are converging on **agentic workflows with subagent delegation, MCP integration, and session persistence** as table-stakes features. However, differentiation is sharpening: Anthropic and OpenAI focus on **enterprise-grade reliability and cost governance**; Google and Qwen prioritize **sandboxing, web-native clients, and multi-vendor model routing**; community-driven projects (OpenCode, Pi, DeepSeek TUI) push **extensibility, observability, and protocol completeness**. A clear split is emerging between **vendor-backed tools** (tight model integration, slower community feedback loops) and **open-core tools** (rapid iteration, plugin-first architectures). Windows and Linux desktop stability remain systemic weak points across the board.

---

## 2. Activity Comparison (2026-09-13)

| Tool | Issues Updated | PRs Updated | Release Today | High-Signal Issues (≥10 👍/comments) |
|------|----------------|-------------|---------------|--------------------------------------|
| **Claude Code** | 10 | 5 | v2.1.270 (patch) | 4 (auto-closure 26👍, session handoff 25👍, MCP draft-07 52 comments, plan mode scroll 13👍) |
| **OpenAI Codex** | 10 | 10 | — | 3 (context loss 86 comments/64👍, Windows send button 38 comments, ghost conversations 22 comments) |
| **Gemini CLI** | 10 | 10 | v0.61.0-nightly | 2 (agent hangs 8👍, subagent false success 13 comments) |
| **GitHub Copilot CLI** | 7 | 3 (deps) | — | 1 (Linux OOM 4 comments/1👍) |
| **Kimi Code CLI** | 1 | 0 | — | 0 |
| **OpenCode** | 10 | 10 | — | 3 (session memory 15 comments/4👍, Go provider outage 14 comments, MCP subagent 11 comments/5👍) |
| **Pi** | 10 | 10 | — | 1 (Codex transport 78 comments/33👍) |
| **Qwen Code** | 5 | 10 | v0.23.3-nightly (breaking) | 1 (metadata vendor break 4 comments/P1) |
| **DeepSeek TUI** | 10 | 10 | — | 2 (V4 Pro sunset 5 comments, context pressure 18 comments) |

**Key observation**: OpenCode, Pi, Gemini CLI, and DeepSeek TUI show the highest **PR velocity** (10 PRs each), indicating active refactoring/feature work. Claude Code and OpenAI Codex have the **highest community friction** (auto-closure backlash, conversation logic bugs). Qwen Code shipped a **breaking nightly** with sandbox/PWA features.

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Demanding It | Specific Needs |
|-------------|-------------------|----------------|
| **Session Persistence & Portability** | Claude Code (#11455 25👍), OpenAI Codex (#45126, #28113), OpenCode (#16077 15 comments), DeepSeek TUI (#6102), Pi (#9243, #9533) | Cross-device resume, state export/import, transcript persistence, model fidelity on restore |
| **Subagent Cost Guardrails & Observability** | Claude Code (#66023, #87815), GitHub Copilot CLI (#4829), OpenAI Codex (#44970), DeepSeek TUI (#6011), Qwen Code (#11692) | Per-invocation confirmation, token budgets, model-tier visibility, cache-hit accounting, compaction cost tracking |
| **MCP Ecosystem Maturity** | Claude Code (#86142, #88731), OpenAI Codex (#21984), OpenCode (#16491, #48743), Gemini CLI (implied), DeepSeek TUI (#6030) | Draft-07/structured output support, lazy/on-demand server spawn, subagent tool execution, cancellation protocol, warm-up for many servers |
| **Sandboxing / Isolation** | Qwen Code (#11614 bwrap), Gemini CLI (#29214), OpenCode (implied), DeepSeek TUI (permissions.toml) | Rootless, container-free (bwrap), filesystem boundary hardening, deny-rule enforcement in subagents, symlink-safe config loading |
| **Web / PWA Client Parity** | Qwen Code (#11722 PWA, #11751 perms), Pi (RPC completeness #9527, #9098), OpenCode (#48755 browser tool), Gemini CLI (#21983 Wayland) | Installable offline-capable shell, credential-free daemon access, permission revocation UI, visual verification via browser tool |
| **Internationalization / RTL** | OpenCode (#48753 Arabic/RTL), Pi (implied via embeddability), DeepSeek TUI (status-line extensibility) | Native bidi rendering, locale-aware TUI, font shaping |
| **Provider/Model Abstraction & Fallback** | OpenAI Codex (#43755 404, #43163 invalid_prompt), Qwen Code (#11590 metadata break), OpenCode (#37231, #42950, #48741), DeepSeek TUI (#6025 V4 Pro sunset) | Graceful degradation when model missing/rejected, multi-vendor gateway compatibility, config-driven model pinning, hot provider swap |

---

## 4. Differentiation Analysis

| Dimension | Vendor-Backed (Opinionated) | Open-Core / Community-Driven (Extensible) |
|-----------|------------------------------|-------------------------------------------|
| **Primary Focus** | Model integration quality, enterprise guardrails, UX polish | Protocol completeness, hackability, observability, edge-platform support |
| **Target User** | Professional developers/teams on vendor's model stack | Power users, tool builders, multi-model workflows, self-hosters |
| **Technical Approach** | Closed-core, first-party plugins/mods, centralized telemetry | Plugin-first, RPC/extension APIs, local-first, transparent token accounting |
| **Release Cadence** | Stable + nightly (Claude, Codex, Gemini, Qwen) | Continuous PR-driven, no formal releases (OpenCode, Pi, DeepSeek TUI, Copilot CLI) |
| **Notable Differentiators** | • Claude: Mods framework, cost guardrails (emerging)<br>• Codex: Command center cost UI, recap engine<br>• Gemini: AST-aware tools, browser agent<br>• Qwen: bwrap sandbox, PWA Web Shell, multi-vendor gateway | • OpenCode: Capability-shaped commands, plugin marketplace API, FreeBSD<br>• Pi: Loop-guard extension, OAuth provider SDK, session tree surgery<br>• DeepSeek TUI: Runtime API for workspace search, compaction survival contract, Serply search<br>• Copilot CLI: GitHub Actions supply-chain hardening, `/add-dir` symmetry gap |

**Strategic positioning**: Vendor tools optimize for **time-to-value on their models**; open-core tools optimize for **composability across models and environments**.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenCode, Pi, DeepSeek TUI, Gemini CLI** | 10 PRs/day each; structural refactors (capability shapes, plugin marketplace, RTL, sandbox backends); issues closed same-day; nightly cuts |
| **High Engagement / Friction Visible** | **Claude Code, OpenAI Codex** | Highest 👍/comment counts on pain points (auto-closure 26👍, context loss 64👍); maintainer response visible but policy gaps persist |
| **Steady / Feature-Complete Core** | **Qwen Code** | Breaking nightly with sandbox/PWA; multi-vendor gateway focus; CI hardening; fewer but P1 issues |
| **Low Velocity / Maintenance Mode** | **GitHub Copilot CLI, Kimi Code CLI** | Only dependabot/security PRs; 1-2 community issues; Linux OOM unresolved for weeks; Kimi Web UI request untriaged 3.5 months |
| **Inactive** | **Grok Build** | Zero activity |

**Maturity signals**: OpenCode and Pi now expose **plugin marketplaces and RPC surfaces** — platforms, not just CLIs. DeepSeek TUI's **compaction survival contract** and **Runtime API** indicate production hardening. Qwen Code's **bwrap backend** is a rare Linux-first sandbox primitive.

---

## 6. Trend Signals (Developer Decision Value)

| Trend | Signal Strength | Implication for Developers |
|-------|-----------------|----------------------------|
| **MCP is the de facto agent-tool protocol** but **fragmented implementation** | ★★★★★ (8/9 tools actively fixing MCP gaps) | Invest in MCP server authoring; expect subagent tool execution to stabilize in 1-2 quarters. Vendor tools lag on cancellation/lazy-start. |
| **Cost observability moving from "nice-to-have" to "blocker"** | ★★★★★ (5 tools with explicit token-cost PRs/issues) | Demand per-invocation budgets, model-tier visibility, and cache-hit reporting before adopting agent fleets in production. |
| **Session continuity = table stakes for team adoption** | ★★★★★ (6 tools with active work) | Evaluate export/import fidelity, cross-device resume, and model-pinning on restore before standardizing. |
| **Sandboxing shifting from containers → kernel primitives (bwrap, seccomp)** | ★★★★☆ (Qwen, Gemini, DeepSeek) | Rootless, daemon-free isolation is becoming portable; expect Windows equivalents (Job Objects, Win32 AppContainer) next. |
| **Web/PWA clients achieving CLI parity** | ★★★★☆ (Qwen PWA, Pi RPC, OpenCode browser tool) | Offline-capable, credential-free browser access enables new

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-13 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs & Issues

| Rank | Skill / Topic | Type | Status | Discussion Highlights | Link |
|------|---------------|------|--------|----------------------|------|
| 1 | **Security: Namespace Trust Boundary** | Issue #492 | OPEN | 43 comments — Community skills published under `anthropic/` namespace impersonate official skills, enabling privilege escalation. Core governance concern. | [#492](https://github.com/anthropics/skills/issues/492) |
| 2 | **Org-Wide Skill Sharing** | Issue #228 | OPEN | 16 comments, 8 👍 — Users need native org-level skill distribution (vs. manual file sharing via Slack/Teams). High workflow demand. | [#228](https://github.com/anthropics/skills/issues/228) |
| 3 | **skill-creator: run_eval.py 0% Recall** | Issue #556 / PR #1298 | OPEN | 12 comments, 7 👍 + active PR — `claude -p` never triggers skills during evaluation; optimization loop trains on noise. Blocks skill-authoring workflow. | [#556](https://github.com/anthropics/skills/issues/556) • [#1298](https://github.com/anthropics/skills/pull/1298) |
| 4 | **Hivemind: Zero-Cost Multi-Agent Orchestration** | PR #1628 | OPEN | Novel architecture — delegates mechanical work to headless `opencode` workers on free models; Claude remains planner/reviewer. Addresses context-cost bottleneck. | [#1628](https://github.com/anthropics/skills/pull/1628) |
| 5 | **self-audit: Mechanical + Reasoning Quality Gate** | PR #1367 | OPEN | Two-stage audit: (0) verify every claimed output file exists; (1) four-dimension reasoning audit by damage severity. Universal, stack-agnostic. | [#1367](https://github.com/anthropics/skills/pull/1367) |
| 6 | **claude-api Skill Token Explosion** | Issue #1487 | OPEN | 4 comments — Skill eagerly injects ~156k tokens in one tool call, exhausting context window. Critical for production use. | [#1487](https://github.com/anthropics/skills/issues/1487) |
| 7 | **mcp-builder: MCP ≥2.0 Compatibility** | PR #1742 / Issue #1390 | OPEN | 4 comments — `streamablehttp_client` renamed to `streamable_http_client`; custom headers API changed. Evaluation harness scores 0/N against real servers. | [#1742](https://github.com/anthropics/skills/pull/1742) • [#1390](https://github.com/anthropics/skills/issues/1390) |
| 8 | **Document Typography / ODT / PDF Fixes** | PRs #514, #486, #538 | OPEN | Long-standing document-quality skills: typography (orphans/widows), OpenDocument support, case-sensitivity fixes for cross-platform reliability. | [#514](https://github.com/anthropics/skills/pull/514) • [#486](https://github.com/anthropics/skills/pull/486) • [#538](https://github.com/anthropics/skills/pull/538) |

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Governance & Trust** | #492 (43 comments): namespace impersonation; #189 (9 👍): duplicate skills from bundled plugins | Community demands **official vs. community skill separation**, signed/verified skills, and plugin deduplication |
| **Organizational Workflow** | #228 (16 comments, 8 👍): org-wide sharing; #62 (10 comments): skills disappearing | Need **native skill registry, versioning, and team distribution** — not file-based manual install |
| **Skill Authoring Toolchain Reliability** | #556 (12 comments, 7 👍), #1099, #1050: `run_eval.py` broken on Windows; 0% trigger rate | **Core developer experience is blocked** — evaluation harness, Windows support, and YAML parsing need stabilization |
| **Multi-Agent / Delegation Patterns** | #1628 (Hivemind), #1385 (Reasoning Quality Gate), #412 (agent-governance, closed) | Strong appetite for **agent orchestration, quality gates, and governance skills** — meta-skills that manage other agents |
| **Platform & Integration Gaps** | #29 (Bedrock), #16 (Expose Skills as MCPs), #1175 (SharePoint) | Demand for **cloud-provider parity (Bedrock), MCP exposure, and enterprise integrations** |
| **Context Window Management** | #1487 (claude-api 156k tokens), #1329 (compact-memory) | **Token efficiency** is a cross-cutting concern — skills must be lazy-loaded or compressed |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

| PR | Skill | Category | Why It’s High-Potential |
|----|-------|----------|------------------------|
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | Multi-Agent Orchestration | Zero-cost delegation to free-model workers; solves context-cost bottleneck; novel architecture |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Quality Assurance | Universal pre-delivery gate: mechanical verification → reasoning audit; stack-agnostic |
| [#1627](https://github.com/anthropics/skills/pull/1627) | **buffer-api** | Agent Skill / Integration | Portable Buffer GraphQL skill usable by any agent (Claude, Cursor, Codex, n8n, etc.) |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Document Quality | Prevents orphans, widows, numbering misalignment — affects every generated document |
| [#486](https://github.com/anthropics/skills/pull/486) | **odt** | Document Format | OpenDocument (ODT/ODS) creation, template filling, parsing — ISO standard, LibreOffice native |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | Meta-Skills | Automated skill review across 5 dimensions (structure, security, maintainability, etc.) |
| [#1724](https://github.com/anthropics/skills/pull/1724) | **mcp-builder: claude-sonnet-5 default** | Tooling Maintenance | Updates evaluation harness to current flagship model; unblocks MCP skill development |
| [#1602](https://github.com/anthropics/skills/pull/1602) | **Evaluation Serialization & Metrics Fixes** | Tooling Reliability | Fixes MCP result serialization, benchmark metrics, encoding, script stability across platforms |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for *trustworthy, composable skill infrastructure*: verified skill provenance, org-native distribution, reliable authoring tooling, and meta-skills that orchestrate or audit other agents — moving beyond individual task skills toward a governed, scalable agent ecosystem.**

---

# Claude Code Community Digest — 2026-09-13

---

## 1. Today's Highlights

- **v2.1.270 released** fixing a regression from 2.1.269 where read-only git commands in Bash would unexpectedly prompt for permission after long-running sessions.
- **MCP draft-07 compatibility crisis** (#86142, 52 comments) was closed — servers declaring the new `outputSchema` were entirely unusable due to client-side dialect rejection before dispatch.
- **Community backlash over auto-closure policy** (#87647, 26 👍): 6,000+ issues labeled "has repro" have been auto-closed since March 2026, raising concerns about valid bug reports being discarded.

---

## 2. Releases

### v2.1.270
**Fixed:** Read-only git commands in Bash unexpectedly asking for permission after a session had been running for a while (regression introduced in 2.1.269).  
[Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.270)

---

## 3. Hot Issues

| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|----------------|-------------------|
| [#86142](https://github.com/anthropics/claude-code/issues/86142) MCP servers with draft-07 `outputSchema` rejected client-side | **Closed** | Broke all MCP servers adopting the new spec; blocked ecosystem adoption of structured outputs | 52 comments, 14 👍 — high urgency, rapid resolution |
| [#11455](https://github.com/anthropics/claude-code/issues/11455) Session Handoff / Continuity Support | **Open** | Long-standing request (since Nov 2025) to persist/resume sessions across devices/restarts; critical for team workflows | 31 comments, 25 👍 — top-voted enhancement |
| [#51847](https://github.com/anthropics/claude-code/issues/51847) Windows file lock after update ("Another program is using this file") | **Closed** | Recurring Windows update failure; blocks auto-updates for desktop users | 30 comments, 16 👍 |
| [#12953](https://github.com/anthropics/claude-code/issues/12953) Mousewheel scrolls input history instead of chat history (Windows TUI) | **Open** | UX regression making chat navigation frustrating; affects all Windows terminal users | 24 comments, 21 👍 |
| [#66023](https://github.com/anthropics/claude-code/issues/66023) Workflow tool spawned 46 Opus subagents (~3M tokens) with no cost confirmation | **Open** | Cost runaway risk: single invocation burned ~$150+ in tokens; no guardrails or user consent | 9 comments, 1 👍 — high severity, low visibility |
| [#87647](https://github.com/anthropics/claude-code/issues/87647) 6,000+ "has repro" issues auto-closed since March 2026 | **Open** | Policy silently discarding reproducible bug reports; undermines trust in issue tracker | 4 comments, 26 👍 — strongest community signal |
| [#93562](https://github.com/anthropics/claude-code/issues/93562) Egress allowlist ignores "All domains" — regression 2026-09-10→11 | **Open** | Network regression: all external hosts get 403 on CONNECT; breaks remote MCP, API calls | 7 comments, 6 👍 |
| [#66026](https://github.com/anthropics/claude-code/issues/66026) Plan mode scrolling broken (Windows, regression) | **Open** | Plan mode unusable on Windows; scrolling doesn't work in the primary review interface | 7 comments, 13 👍 |
| [#87815](https://github.com/anthropics/claude-code/issues/87815) Parallel subagent fleets silently inherit session model tier — burned weekly Opus allocation | **Open** | Subagents inherit parent's model (Opus 4.8) without visibility; cost explosion risk | 4 comments, 1 👍 |
| [#88731](https://github.com/anthropics/claude-code/issues/88731) Artifact tool absent in `claude remote-control` spawned sessions | **Open** | Feature parity gap: server-mode sessions lack Artifact tool despite same account/machine | 2 comments, 2 👍 |

---

## 4. Key PR Progress

| PR | Status | Description |
|----|--------|-------------|
| [#93951](https://github.com/anthropics/claude-code/pull/93951) | **Open** | Mods refactor: diff, sec-default, and telemetry tests moved alongside their mods under `mods/<mod>/tests/`; run via `claude plugin test` |
| [#93932](https://github.com/anthropics/claude-code/pull/93932) | **Closed** | Fixed telemetry mod's `types` path in `plugin.json` to use `./`-relative path (`./types/index.d.ts`), aligning with manifest schema |
| [#93452](https://github.com/anthropics/claude-code/pull/93452) | **Closed** | `/diff` mod parity: pane now matches built-in diff panel (hunks via engine code element, close ✕, row spacing, empty-state, narrow-terminal resize, single probe in-flight) |
| [#93912](https://github.com/anthropics/claude-code/pull/93912) | **Closed** | Unit tests for diff, sec-default, telemetry mods — typed against plugin declarations; run via `claude plugin test <dir>` with engine's `$` and hooks |
| [#61716](https://github.com/anthropics/claude-code/pull/61716) | **Open** | Docs: troubleshooting for false "usage limit reached" caused by context overflow (misattributed when `/compact` fails); closes #50321 |

---

## 5. Feature Request Trends

1. **Session Continuity & Portability** — #11455 (25 👍) leads a cluster of requests for session handoff, state export/import, and cross-device resume.
2. **Cost Guardrails for Subagents** — #66023, #87815: users demand explicit confirmation, budgets, and model-tier visibility before spawning fleets.
3. **MCP Ecosystem Maturity** — #86142, #74329, #88731, #93946: draft-07 support, stdio resilience, remote-control parity, binary resource handling.
4. **TUI/UX Polish** — #12953 (mousewheel), #66026 (plan mode scroll), #93952 (verbose debug spam), #48181 (GDScript highlighting).
5. **Plugin/Mods Framework** — PRs #93951, #93912, #93452 show active investment in first-class plugin testing and parity.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Silent cost explosions** | Subagents inheriting Opus tier without consent (#66023, #87815); no per-invocation confirmation |
| **Windows desktop reliability** | File locks on update (#51847), mousewheel UX (#12953), plan mode scroll (#66026), Bun launch regression (#93943) |
| **MCP fragility** | Draft-07 rejection (#86142), stdio respawn leaks (#74329), remote-control tool gaps (#88731), binary resource schema (#93946) |
| **Issue tracker trust erosion** | 6,000+ "has repro" issues auto-closed (#87647, 26 👍); users feel valid bugs are discarded |
| **Debug noise in terminal** | #93952: verbose output scrolls relevant content away; no log-file option |
| **Model safeguard failures** | #77058: model repeatedly violates own documented safeguards in long sessions (worktree confusion, unverified edits) |
| **Git hook false positives** | #82624: stop hook rewrites history on correct commits; prescribed amend loop never converges |

---

*Data sourced from `github.com/anthropics/claude-code` — issues/PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-13

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows a cluster of high-impact desktop app regressions on Windows (send-button hangs, follow-up message failures, sandbox setup failures) and cross-platform "ghost conversation" UI bugs. Meanwhile, the CLI/TUI received a batch of UX polish PRs—streaming prose previews, recap improvements, and token-cost visibility in the command center.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8648](https://github.com/openai/codex/issues/8648) | **Codex replies to earlier messages instead of latest** | Core conversation logic broken; assistant loses context in multi-turn chats. | 86 comments, 64 👍 — highest engagement in tracker |
| [#40968](https://github.com/openai/codex/issues/40968) | **Windows: Send button spins forever, prompts never submit** | Blocks all follow-up interaction on Windows desktop. | 38 comments, 6 👍 |
| [#44102](https://github.com/openai/codex/issues/44102) | **Windows 26.903.61454: follow-up messages fail after first turn** | Regression in latest Windows build; breaks multi-turn workflows. | 15 comments |
| [#39897](https://github.com/openai/codex/issues/39897) | **macOS: Deleted conversations remain in sidebar (“ghost” entries)** | UI state desync; users cannot clean up history. | 22 comments, 4 👍 |
| [#41987](https://github.com/openai/codex/issues/41987) | **macOS: “Ghost” conversations persist after deletion** | Duplicate of #39897, confirms cross-user impact. | 13 comments, 3 👍 |
| [#43163](https://github.com/openai/codex/issues/43163) | **GPT-6 Astra returns `invalid_prompt` for harmless prompts** | Model-level false positives blocking legitimate work across machines. | 12 comments, 3 👍 |
| [#42963](https://github.com/openai/codex/issues/42963) | **Windows: Composer disappears after assistant response** | Input UI vanishes mid-session; requires restart. | 11 comments, 3 👍 |
| [#21984](https://github.com/openai/codex/issues/21984) | **MCP servers eagerly start per session, leaking headed browser processes** | Resource leak; each session spawns visible browser instances. | 16 comments, 5 👍 |
| [#43755](https://github.com/openai/codex/issues/43755) | **GPT-5.5 selected but backend returns 404 “Model not found”** | Model catalog ↔ backend mismatch; silent failure for Plus users. | 8 comments |
| [#28113](https://github.com/openai/codex/issues/28113) | **CLI ignores `model_reasoning_effort` on new session startup** | Config not respected; affects reasoning budget control. | 7 comments, 6 👍 |

---

## Key PR Progress (10 Notable Changes)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#45135](https://github.com/openai/codex/pull/45135) | **Feature** | **Preview streaming prose before newline arrives in TUI** — long single-line responses now visible while streaming. |
| [#45090](https://github.com/openai/codex/pull/45090) | **Feature** | **Preserve conversation context & separate next actions in recaps** — richer summaries with completed/pending split. |
| [#45089](https://github.com/openai/codex/pull/45089) | **UX** | **Delay automatic recaps (3→30 min) & compact TUI layout** — less intrusive, cleaner visual hierarchy. |
| [#44970](https://github.com/openai/codex/pull/44970) | **Feature** | **Show task tokens & usage estimates (credits/USD) in agent command center** — live cost visibility. |
| [#44969](https://github.com/openai/codex/pull/44969) | **UX** | **Open externally-managed tasks as read-only history** — unblocks viewing cross-app history. |
| [#45137](https://github.com/openai/codex/pull/45137) | **Cleanup** | **Remove Astra sparkle animation from TUI composer** — reduces visual noise. |
| [#45116](https://github.com/openai/codex/pull/45116) | **Bug Fix** | **Prevent multiline report notes from submitting early** — `PasteBurst` handling for rapid paste. |
| [#45108](https://github.com/openai/codex/pull/45108) | **Bug Fix** | **Cancel pending thread title generation after manual rename** — stops stale indicator. |
| [#45094](https://github.com/openai/codex/pull/45094) | **Perf** | **Estimate history tokens from content, not serialized envelopes** — accurate token accounting. |
| [#31471](https://github.com/openai/codex/pull/31471) | **Refactor** | **Extract apps cache logic into `ConnectorRuntimeManager`** (1/4) — groundwork for faster connector startup. |

---

## Feature Request Trends
1. **MCP lifecycle control** — Users want lazy/on-demand MCP server startup (#21984) and per-session isolation to avoid browser-process leaks.
2. **Session/resume reliability** — Pagination-aware `codex resume` (#45126), config persistence (`model_reasoning_effort` #28113), and tier transparency (#32191).
3. **Cross-device conversation sync** — Ghost-conversation bugs (#39897, #41987) reveal demand for robust local↔cloud state reconciliation.
4. **Model-selection robustness** — Fallback handling when selected model returns 404 (#43755) or `invalid_prompt` false positives (#43163).
5. **Cost/token observability** — PRs #44970, #45094 show product direction toward real-time usage dashboards.

---

## Developer Pain Points (Recurring Themes)
- **Windows desktop instability** — Send-button hangs, composer loss, sandbox `Access Denied`, follow-up regression in 26.903.x builds.
- **Conversation UI desync** — Deleted threads “haunt” sidebar on both macOS and Windows; manual rename doesn’t cancel auto-title jobs.
- **MCP/resource leaks** — Headed browser processes accumulate per session; no idle shutdown or lazy-start option.
- **Model catalog ↔ backend drift** — Selected models (GPT-5.5, Astra) missing or rejected by API; no graceful fallback or user-facing explanation.
- **CLI config ignored on cold start** — `model_reasoning_effort`, service-tier flags not applied until after first interaction.
- **Rate-limit opacity** — Plus users see only weekly limit after 5-hour limit reintroduction (#41553); no per-model breakdown.

---

*Data sourced from `github.com/openai/codex` — Issues & PRs updated 2026-09-12 → 2026-09-13.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-13

## 1. Today's Highlights
The project shipped nightly **v0.61.0-nightly.20260913** while maintainers performed a large-scale triage pass—50 issues updated today, most dating back to Q1–Q2 2026. The PR queue shows a focus on **stability hardening**: fixing hook migration bugs, sandbox isolation, terminal flicker, and model-pinning regressions. Subagent reliability (hangs, max-turn recovery, settings propagation) remains the top open risk area.

## 2. Releases
| Version | Type | Notes |
|---------|------|-------|
| `v0.61.0-nightly.20260913.g9c1b0a610` | Nightly | Automated version bump. [Full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260912.g9c1b0a610...v0.61.0-nightly.20260913.g9c1b0a610) |

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** (folder creation, simple tasks) | Blocks core workflows; workaround is disabling subagents. | 8 comments, 👍 8 — high frustration. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Masks real failures; undermines trust in delegation. | 13 comments, 👍 2 — P1, needs retest. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck at “Waiting input” after command completes** | Frequent, affects simple commands; UX breaker. | 4 comments, 👍 3 — P1, medium effort. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Model rarely uses custom skills/sub-agents autonomously** | Reduces value of extensibility framework. | 6 comments — P2, anecdotal but widespread. |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error when >128/400 tools available** | Hard limit breaks large workspaces; needs smarter tool scoping. | 3 comments — P2. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Platform gap for Linux users. | 4 comments, 👍 1 — P1, needs info. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`)** | Configuration not respected; limits customization. | 3 comments — P2, needs retest. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory: secrets redacted *after* model context insertion** | Security risk; redaction must be deterministic & pre-context. | 5 comments — P2, security-labeled. |
| [#21335](https://github.com/google-gemini/gemini-cli/issues/21335) | **`/compress` not persistent across session resume** | Token-saving feature lost on restart. | 2 comments, 👍 2 — P2, small effort. |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | **Symlinked agent files in `~/.gemini/agents/` not recognized** | Breaks dotfile management workflows. | 4 comments — P3. |

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#29300](https://github.com/google-gemini/gemini-cli/pull/29300) | `chore/release: bump version to 0.61.0-nightly.20260913.g9c1b0a610` | **Open** | Automated nightly cut. |
| [#29294](https://github.com/google-gemini/gemini-cli/pull/29294) | `fix(cli): prevent terminal flickering caused by stdout contention and cursor focus` | **Open** | Addresses aggressive flicker during background command output + fast typing (Ink reconciler fix). Closes #29295. |
| [#29287](https://github.com/google-gemini/gemini-cli/pull/29287) | `feat(policy): map --yolo to allowedTools wildcard policy` | **Closed** | Removes `ApprovalMode.YOLO`; maps `--yolo` → `allowedTools: ["*"]`. Fulfills #11303. |
| [#29222](https://github.com/google-gemini/gemini-cli/pull/29222) | `fix(config): prevent rewriting explicitly pinned flash models` | **Open** | Stops silent rewrite of `--model gemini-2.5-flash` → `gemini-3.5-flash` on Vertex/GCP backends. P1/P2. |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | `fix(sandbox): harden filesystem boundaries and isolate runtime state` | **Closed** | Replaces host directory mounts with sanitized configs; realpath resolution for path checks. Large refactor. |
| [#29208](https://github.com/google-gemini/gemini-cli/pull/29208) | `fix(core): fall back to empty on malformed agents.json shape` | **Open** | Validates `agents.json` shape (null/scalar/array) to prevent crashes on corrupt config. Closes #29207. |
| [#29125](https://github.com/google-gemini/gemini-cli/pull/29125) | `fix(cli): convert hook timeout from seconds to milliseconds in hooks migration` | **Closed** | Fixes Claude Code → Gemini migration: timeout `30` (seconds) was interpreted as 30 ms. Closes #29122. |
| [#29124](https://github.com/google-gemini/gemini-cli/pull/29124) | `fix(cli): correct SubagentStop event key in hooks migration` | **Closed** | Casing fix: `SubagentStop` (Claude) vs `SubAgentStop` (migration map). Closes #29123. |
| [#29292](https://github.com/google-gemini/gemini-cli/pull/29292) | `fix(checkpoint): validate history is an array in loadCheckpoint` | **Open** | Guards against non-array `history` in checkpoint JSON (corruption/partial writes). Closes #29194. |
| [#29230](https://github.com/google-gemini/gemini-cli/pull/29230) | `docs: fix dead anchors across guides` | **Open** | Fixes 7 docs pages with broken cross-reference anchors (stale numbered headings). |

## 5. Feature Request Trends
1. **Subagent observability & control** — Trajectory sharing (`/chat share` #22598), settings propagation (#22267), self-awareness (#21432), persistent task tracking (#18836, #21000).
2. **AST-aware code navigation** — Precision reads, search, mapping to reduce token noise & turns (#22745, #22746).
3. **Zero-dependency OS sandboxing** — Leverage model’s native bash affinity safely (#19873).
4. **Memory system hardening** — Deterministic redaction, quarantine invalid patches, stop low-signal retries (#26525, #26523, #26522).
5. **Browser agent resilience** — Session takeover, lock recovery, Wayland support (#22232, #21983).

## 6. Developer Pain Points (Recurring Themes)
- **Agent reliability**: Hangs (#21409), false success on max-turns (#22323), ignored config (#22267), missing subagent context in bug reports (#21763).
- **Shell integration**: Stuck “awaiting input” post-execution (#25166), destructive git/db commands (#22672), interactive prompt deadlocks (#22465).
- **Tool explosion**: 400 errors beyond ~128 tools (#24246); need dynamic scoping.
- **Terminal UX**: Flicker on resize/typing (#21924, #29294), `/compress` loss on resume (#21335).
- **Config fragility**: Symlinked agents ignored (#20079), model pinning overridden (#29222), corrupt `agents.json` crashes (#29208).
- **Security/privacy**: Auto Memory redaction timing (#26525), sandbox boundary leaks (#29214).

---

*Data sourced from `google-gemini/gemini-cli` GitHub activity (2026-09-13). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-13

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows active triage on Linux memory stability, MCP cancellation compliance, and subagent token-management regressions. Dependabot and security automation closed three dependency-update PRs, pinning GitHub Actions to immutable SHAs.

## Releases
*No new releases published in the last 24 hours.*

## Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4725](https://github.com/github/copilot-cli/issues/4725) | **Frequent JavaScript heap out of memory (Linux)** | Recurring OOM crashes every few minutes on Linux; V8 logs show repeated mark-compact cycles failing to reclaim memory. Blocks daily workflow for Linux users. | 👍 1 · 4 comments · Updated 2026-09-12 |
| [#4829](https://github.com/github/copilot-cli/issues/4829) | **Subagents executing long tool-call sequences fail prompt caching & compound token consumption** | Autonomous subagents (via `task` tool) run hundreds of tool calls in one turn, busting prompt-cache budgets and inflating token costs. Affects cost predictability for agent-heavy workflows. | 👍 0 · 0 comments · Created 2026-09-12 |
| [#4759](https://github.com/github/copilot-cli/issues/4759) | **Copilot CLI should send MCP cancellation requests** | Missing MCP cancellation support leaves in-flight URL-mode elicitations dangling when users abort tool calls. Compliance gap vs. MCP 2026-07-28 spec. | 👍 0 · 1 comment · Closed 2026-09-12 |
| [#4831](https://github.com/github/copilot-cli/issues/4831) | **One pasted image and claude-opus-5 won’t look at any more images** | After a single screenshot paste, subsequent `view` calls hit “maximum images (1)” limit. Image-context management appears broken for Opus 5. | 👍 0 · 0 comments · Created 2026-09-12 |
| [#4824](https://github.com/github/copilot-cli/issues/4824) | **ctrl-t enqueue prompt doesn’t work** | Queued prompts spin indefinitely on “Working” after prior agent turn finishes. UX regression for multi-prompt chaining. | 👍 0 · 1 comment · Created 2026-09-11 |
| [#4830](https://github.com/github/copilot-cli/issues/4830) | **Add `/remove-dir` command to revoke directory access** | Symmetry gap: `/add-dir` and `/list-dirs` exist but no removal path. Forces session restart to reduce filesystem scope. | 👍 0 · 0 comments · Created 2026-09-12 |
| [#2147](https://github.com/github/copilot-cli/issues/2147) | **CAIP 400: input item ID does not belong to this connection** | WebSocket protocol mismatch (gpt-5.4 xhigh) causing hard failures. Closed but root-cause clarity needed for future model upgrades. | 👍 1 · 7 comments · Closed 2026-09-12 |

## Key PR Progress
| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#4808](https://github.com/github/copilot-cli/pull/4808) | **Pin GitHub Actions to commit SHAs** | Closed · Merged 2026-09-12 | Supply-chain hardening: 3 workflow refs pinned across 4 files. Zero warnings/errors. |
| [#4827](https://github.com/github/copilot-cli/pull/4827) | **build(deps): bump actions/stale 9.1.0 → 11.0.0** | Closed · Merged 2026-09-13 | Major version bump; includes breaking changes to stale-bot config. Auto-merged by dependabot. |
| [#4828](https://github.com/github/copilot-cli/pull/4828) | **build(deps): bump actions/github-script 7.1.0 → 9.0.0** | Closed · Merged 2026-09-13 | Major update; drops Node 16 support, adds ESM entrypoints. Auto-merged by dependabot. |

## Feature Request Trends
1. **Session-scoped filesystem control** — `/remove-dir` (#4830) signals demand for dynamic, granular directory permissions without session reset.
2. **MCP protocol completeness** — Cancellation support (#4759) and elicitation handling are recurring themes as MCP adoption grows.
3. **Multi-turn prompt queuing** — Reliable `ctrl-t` chaining (#4824) is expected for interactive agent loops.
4. **Image-context lifecycle** — Per-model image quotas (#4831) need transparent management or user-configurable limits.

## Developer Pain Points
- **Linux memory instability** (#4725) remains the highest-impact reliability blocker; V8 heap pressure suggests a leak or missing GC tuning in the Electron/Node host.
- **Subagent cost explosions** (#4829) — unbounded tool-call sequences in a single turn break prompt-caching economics and surprise users on billing.
- **Model-specific quirks** (Opus 5 image limit, gpt-5.4 WebSocket errors) require per-model guardrails or fallback logic in the CLI.
- **Missing symmetry in CLI commands** — `/add-dir` without `/remove-dir` forces disruptive workarounds (session restart).

---

*Digest generated from github/copilot-cli activity 2026-09-12 → 2026-09-13. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-13

## Today's Highlights
No new releases or pull requests in the last 24 hours. Community activity centers on a single feature request (#2370) to add a **Steer (⚡) button** to the Web UI queue panel, enabling users to interrupt or redirect queued follow-up messages during AI execution. The issue has garnered 2 upvotes and 1 comment since its creation in May, indicating sustained but low-volume interest.

---

## Releases
*No new releases published in the last 24 hours.*

---

## Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|---------------------|
| [#2370](https://github.com/MoonshotAI/kimi-cli/issues/2370) | **Add Steer (⚡) button to Web UI queue panel** | Addresses a UX gap: when the AI is running, pressing `Enter` queues follow-ups with no way to cancel or redirect them. A "Steer" button would let users intervene mid-stream—critical for iterative coding workflows. | 2 👍, 1 comment (author clarifying use case). Open since May; no maintainer response yet. |

*Only one issue updated in the last 24h. No other issues met the recency threshold.*

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
From the single active issue and historical context, the most visible request direction is **Web UI controllability**:
- **Interrupt/redirect queued inputs** during AI execution (Steer button)
- Implied need: **real-time queue management** (pause, reorder, drop messages)
- No other feature trends visible in the last 24h data slice.

---

## Developer Pain Points
1. **No mid-execution control in Web UI** — Users cannot cancel or steer follow-up messages once queued, forcing them to wait for completion or kill the session.
2. **Low maintainer engagement on UI/UX issues** — #2370 has been open for ~3.5 months without triage or response, suggesting a backlog or prioritization gap for Web UI enhancements.
3. **Limited visibility into queue state** — The current queue panel shows pending items but lacks actionable controls, reducing confidence in multi-turn interactions.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` (last 24h). Digest covers only items updated in this window; broader trends require longer analysis.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-13

## Today's Highlights
No new releases in the last 24 hours. The project saw significant PR activity with **7 new PRs opened today**, including a browser tool for visual UI verification, Bedrock document label normalization, native Arabic/RTL support for the TUI, and FreeBSD build support. Critical provider stability issues persist with `big-pickle` and Zen (Muse Spark models), while the community continues pushing for persistent session memory and better MCP tool integration in subagents.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues (Top 10 by Community Engagement)

| Issue | Status | Comments | 👍 | Why It Matters |
|-------|--------|----------|-----|----------------|
| **[#16077] Persistent Session Memory** | OPEN | 15 | 4 | Highest-engagement feature request: users want CLI/desktop continuity across sessions via local context file loading. |
| **[#37231] Provider Error: Upstream Request Failed (Console Go)** | CLOSED | 14 | 0 | Widespread outage affecting CLI, desktop, and VSCode — all Go models returning upstream failures despite normal limits. |
| **[#16491] Subagents Can't Execute MCP Tools** | CLOSED | 11 | 5 | MCP tools appear in subagent registry but fail at execution due to missing session permissions — blocks agent delegation workflows. |
| **[#42950] big-pickle: Intermittent Socket Disconnects** | OPEN | 6 | 1 | Built-in provider drops mid-stream with socket errors; UI loses response silently (no error shown). WSL2/Linux. |
| **[#35431] Devstral Model Missing from OpenRouter** | CLOSED | 5 | 0 | `mistralai/devstral-2512` disappeared from OpenCode's model list only; still accessible elsewhere. |
| **[#23058] Anthropic "Advisor Strategy" Support** | CLOSED | 5 | 1 | Request to adopt Claude Code's new advisor pattern (pair programming with user-in-the-loop). |
| **[#48741] Zen Critical Errors on Muse Spark Models** | OPEN | 4 | 0 | **New today.** `invalid_request_error: reasoning encrypted_content not issued to this caller` on image/tool calls with Muse Spark family. |
| **[#38644] Silent 500 Errors from opencode Provider** | OPEN | 4 | 0 | 500 responses from `big-pickle` cause agent to stop without error message — spinner hangs then cuts. |
| **[#46030] big-pickle Enters Text Loop, No Tool Calls** | OPEN | 4 | 0 | Model narrates intent repeatedly instead of emitting tool calls; degrades into dozens of consecutive text turns. |
| **[#48743] MCP Warm-Up/Pre-Spawn Mechanism Needed** | OPEN | 2 | 0 | **New today.** 14+ local stdio MCPs all marked `failed` at session start due to concurrent cold-starts; manual restart required. |

---

## Key PR Progress (Top 10 by Impact)

| PR | Status | Type | Summary |
|----|--------|------|---------|
| **[#48755] feat(opencode): add browser tool for visual UI verification** | OPEN | Feature | **New today.** Adds built-in `browser` tool (`open`, `screenshot`, `click`, `type`, `scroll`, `wait`) for agent-driven visual verification. Closes #48377. |
| **[#48756] fix(ai): normalize Bedrock document labels** | OPEN | Bug Fix | **New today.** Sanitizes labels (dots, underscores, whitespace, length >200, duplicates) to satisfy Bedrock Converse constraints. |
| **[#48753] feat(tui): native Arabic and RTL (bidi) support** | OPEN | Feature | **New today.** Implements bidirectional text rendering for prompts/messages across 4 linked issues (#38524, #40004, #39525, #32984). |
| **[#48750] fix(ai): sanitize replayed Bedrock tool names** | CLOSED | Bug Fix | **New today.** Prevents historical failed tool calls (e.g., `browser.tabs.open`) from breaking subsequent Bedrock requests. |
| **[#48749] fix(core): shape compaction/generate requests with context hooks** | CLOSED | Bug Fix | **New today.** Fixes missing hook registration for compaction/generate after context hook split (#48212). |
| **[#48505] feat(opencode): add browser tool for visual UI verification** | CLOSED | Feature | Superseded by #48755; same implementation closed by compliance bot before description update. |
| **[#48655] feat(core): support FreeBSD source builds** | OPEN | Bug Fix | Replaces static import of `@ff-labs/fff-bun` (no FreeBSD entry) with dynamic require to prevent CLI crash on `bun install`. |
| **[#48729] fix(session): keep todo list current for non-Claude models** | CLOSED | Bug Fix | Ensures todo updates fire for all models (Qwen3, Gemini, GPT, etc.), not just Claude — items were stuck `in_progress`. |
| **[#46690] feat(plugin): expose session forms, list, and global event stream** | OPEN | Feature | Enables plugin authors (e.g., Telegram bots) to drive sessions, list sessions, and subscribe to events. |
| **[#48638] fix(core): eliminate durable event write amplification from turn diffs** | OPEN | Bug Fix | Stops forking full git patch text into user message `summary.diffs` on every turn — reduces DB write volume. |

---

## Feature Request Trends (Distilled from All Issues)

1. **Session Continuity & Memory** — Persistent context across restarts (#16077), transcript persistence extraction (#36809), import Codex chats (#36782).
2. **MCP Ecosystem Maturity** — Subagent tool execution (#16491), warm-up/pre-spawn for many servers (#48743), reconnect paths, better failure surfacing.
3. **Visual/UI Verification** — Browser tool for screenshots/interaction (#48755, #48505, #48377), agent list visibility in TUI/desktop (#36989), built-in file explorer with change indicators (#36829).
4. **Internationalization** — Native RTL/Bidi for Arabic/Hebrew (#48753, #48587, #48590), Persian README (#47783).
5. **Provider/Model Reliability** — Bedrock fixes (#48756, #48750, #31749, #34089), OpenRouter model sync (#35431), new provider support (Maple #36789).
6. **Agent Control & Safety** — Advisor strategy (#23058), prevent unapproved commits/pushes (#48751), plan mode safety (#33301).

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Provider instability & silent failures** | #37231 (Go), #42950 (big-pickle socket), #38644 (silent 500), #48741/48742 (Zen Muse Spark), #35431 (model disappearance) | **Critical** — 6+ issues in 24h |
| **MCP tools broken in subagents** | #16491 (tools visible but unexecutable), #48743 (cold-start cascade failure) | High — blocks delegation |
| **No session persistence** | #16077 (15 comments), #36809 (transcript extraction) | High — top feature ask |
| **Windows desktop crashes** | #48747 (GPU/renderer crash -2147483645 on AMD), #35334 (single-user installer) | Medium — new today |
| **Bedrock integration friction** | #31749 (reasoning variants), #34089 (compaction toolConfig), #48756/48750 (label/tool sanitization) | Medium — multiple PRs fixing |
| **Performance regressions** | #36815 (slow thinking v1.17.20), #36804 (serve mode stuck busy), #36795 (bash output race) | Medium |
| **Agent autonomy vs. user control** | #48751 (commits/pushes without approval), #33301 (plan mode runs destructive cmds) | Medium — safety concern |

---

*Data sourced from `anomalyco/opencode` GitHub issues and PRs updated 2026-09-13. Digest compiled for technical developers tracking AI developer tooling evolution.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-13

## 1. Today's Highlights
The community is actively resolving a wave of streaming and UX bugs uncovered in v0.85.1, with **5 closed issues/PRs today alone** addressing duplicate thinking tokens, missing mouse events in ScrollView, OAuth provider additions, and prompt lifecycle events. The highest-engagement issue remains **#4945 (78 comments)** — intermittent `openai-codex` connection stalls leaving the TUI stuck on "Working..." — signaling ongoing reliability concerns with the Codex transport. A new `loop-guard` extension example was merged to help developers break infinite tool-call loops, a common agent failure mode.

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **openai-codex Connection Reliability** — TUI freezes on "Working..." with no streamed output; only Escape recovers | Core workflow blocker for Codex users; 78 comments, 33 👍 — highest engagement by far | **Critical** — users report daily occurrences; root cause likely in SSE/WS stall handling |
| [#9311](https://github.com/earendil-works/pi/issues/9311) | **Fullscreen mouse selection persists across session switch** | UX polish; selection state leaks between sessions in fullscreen TUI mode | 6 comments; clear fix identified (clear selection on session switch) |
| [#5372](https://github.com/earendil-works/pi/issues/5372) | **Custom OAuth callback page rendering** | Embedders need to brand the OAuth success/error page; currently hardcoded | 5 comments; requested by SDK integrators |
| [#9098](https://github.com/earendil-works/pi/issues/9098) | **Expose prompt disposition in RPC responses** | RPC consumers can't distinguish "handled" vs "queued" vs "started" prompts | 4 comments; needed for accurate UI state in extensions |
| [#9243](https://github.com/earendil-works/pi/issues/9243) | **Session resume restores wrong model** — uses echoed provider name instead of `model_change` | Model mismatch on resume breaks continuity; affects all providers that echo different names | 3 comments, 1 👍; fix in `getSessionContextSettings` |
| [#9542](https://github.com/earendil-works/pi/issues/9542) | **Streaming UIs render first thinking token twice** — `message_start` snapshot shares mutable content | **Closed today**; causes visible duplication ("TheThe user...") in thinking-enabled streams | 2 comments; fixed by copying snapshot content |
| [#9538](https://github.com/earendil-works/pi/issues/9538) | **ScrollView never forwards mouse events to content** | **Closed today**; breaks click/scroll in scrollable TUI regions | 2 comments; added `handleMouse` with viewport mapping |
| [#9354](https://github.com/earendil-works/pi/issues/9354) | **Prompt templates with invalid frontmatter silently dropped** | Inconsistent with skills (which warn); templates vanish from `/` autocomplete | 2 comments; parity request |
| [#9013](https://github.com/earendil-works/pi/issues/9013) | **False-positive cache miss notices on local vLLM after cloud model** | `showCacheMissNotices` misreports on local models that don't report cache metrics | 2 comments; session-state bleed between providers |
| [#9068](https://github.com/earendil-works/pi/issues/9068) | **user_bash silently falls back to host on extension routing failure** | Security/isolation risk: Gondolin VM commands run locally if extension throws | 2 comments; silent fallback hides failures |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#9541](https://github.com/earendil-works/pi/pull/9541) | **fix(tui): show human model labels** | Closed | Model pickers now render friendly `name` as primary label instead of raw IDs; uses governed catalog metadata |
| [#9539](https://github.com/earendil-works/pi/pull/9539) | **examples: add loop-guard extension** | Closed | New `examples/extensions/loop-guard.ts` detects repeated identical tool calls (same tool + args) and breaks the loop |
| [#9096](https://github.com/earendil-works/pi/pull/9096) | **feat(ai,coding-agent): add Meta provider with Muse OAuth** | Open | Adds Meta Muse subscription provider; unusual daily token re-minting, burst-style "fake" streaming |
| [#9531](https://github.com/earendil-works/pi/pull/9531) | **feat(tree): add permanent branch deletion from session tree** | Closed | Implements `/tree` branch deletion (`Shift+D`); protects active path, re-chains labels, updates compactions |
| [#9529](https://github.com/earendil-works/pi/pull/9529) | **feat(ai): add Google Antigravity & Cursor Pro OAuth providers** | Closed | Two new subscription-backed providers (no API keys); Antigravity uses `daily-cloudcode-pa.googleapis.com` streaming API |
| [#8635](https://github.com/earendil-works/pi/pull/8635) | **fix(ai): preserve aborted stop reason during lazy setup** | Open | Passes abort signal through lazy stream setup; reports setup failures as aborted if request already cancelled |
| [#9523](https://github.com/earendil-works/pi/pull/9523) | **Fix #9522: Pi's own prompts emit ui_prompt_start/end** | Closed | Internal selectors (model picker, resume, tree) now fire prompt lifecycle events for status integrations |
| [#9517](https://github.com/earendil-works/pi/pull/9517) | **feat(tui): group long tool-call runs** | Closed | Collapses ≥6 consecutive tool calls into aggregate row with click-to-expand; retains failed calls visible |
| [#9527](https://github.com/earendil-works/pi/issues/9527) | **RPC: get_available_models exposes no configured default** | Closed (issue) | RPC model list lacks `isDefault` flag; integrations fall back to `models[0]` |
| [#9533](https://github.com/earendil-works/pi/issues/9533) | **/fork should allow forking from current point** | Closed (issue) | Users want to fork *from here* (not earlier message) when agent finds multiple issues to split |

---

## 5. Feature Request Trends
From the issue corpus, four clear directions emerge:

1. **OAuth Provider Expansion** — #5372 (custom callback), #9529 (Antigravity/Cursor Pro), #9096 (Meta Muse) show a push for **subscription-backed, keyless auth** across major AI vendors.
2. **Session/Tree Manipulation** — #9531 (branch deletion), #9533 (fork from current), #9521 (Ctrl+F fork in resume list), #9243 (model restore fix) indicate demand for **richer session surgery** (fork, prune, resume fidelity).
3. **Streaming/Thinking UX Polish** — #9542 (double token), #9519 (iTerm2 image stacking), #9517 (tool-call grouping), #9474 (Codex deadline) reflect maturation of **long-running, thinking-heavy streams**.
4. **Embeddability & RPC Completeness** — #5372 (OAuth callback), #9537 (custom agentDir in status), #9527 (default model in RPC), #9098 (prompt disposition) signal **SDK users need parity with CLI**.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Codex transport unreliability** | #4945 (78 comments), #9474 (no per-request deadline), #9481 (turn-attribution gaps) | **Daily** — multiple users, high 👍 |
| **Silent failures / missing observability** | #9068 (bash fallback), #9354 (template drop), #9522 (prompt events), #9520 (stream_read_error no retry) | **High** — 4+ issues in 24h about silent drops |
| **Model/provider identity confusion** | #9243 (resume wrong model), #9527 (RPC no default), #9481 (Codex turn IDs), #9541 (raw IDs in picker) | **Medium** — affects embedders & multi-model users |
| **TUI input/rendering edge cases** | #9311 (selection leak), #9538 (ScrollView mouse), #9519 (image stacking), #9517 (tool-call collapse) | **Medium** — surfacing in long sessions |
| **Extension API gaps** | #9462 (notify racy), #9522 (prompt events), #9098 (RPC disposition), #9540 (loader eager imports) | **Medium** — extension authors hit walls |

---

*Data sourced from `github.com/badlogic/pi-mono` (earendil-works/pi) — issues/PRs updated 2026-09-12 to 2026-09-13.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-13

---

## 1. Today's Highlights
- **Nightly v0.23.3** shipped with a breaking change removing the `me` channel and a DingTalk refactor.
- Critical compatibility bug (#11590) closed: auto-injected `metadata` field broke non-Qwen models on DashScope's OpenAI-compatible gateway.
- New Linux kernel sandbox backend (`bwrap`) landed in PR #11614, enabling container-free, rootless agent confinement.
- PWA install support added to Web Shell (PR #11722), allowing offline-capable, credential-free daemon access.

---

## 2. Releases
**v0.23.3-nightly.20260912.54aa66834b**  
- `refactor(dingtalk)`: removed obsolete background response aggregation (PR #11570)  
- `feat(channels)!`: **breaking** — removed `me` channel  
[Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260912.54aa66834b)

---

## 3. Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#11590](https://github.com/QwenLM/qwen-code/issues/11590) | **Closed** — `metadata` field breaks non-Qwen models on DashScope gateway | Auto-injected `metadata` (object) clashes with vendors expecting `string`; caused universal 400 errors for models like ZHIPU/GLM-5.3-Flash. Fix restores multi-vendor compatibility. | 4 comments, P1 priority, `status/ready-for-human` |
| [#11747](https://github.com/QwenLM/qwen-code/issues/11747) | TUI crashes on RHEL 10 due to missing `Intl.Segmenter` (ICU) | No startup diagnostic; silent crash leaves users confused. Affects enterprise Linux distros with minimal Node.js ICU data. | 3 comments, P2, `category/platform` |
| [#11749](https://github.com/QwenLM/qwen-code/issues/11749) | **Closed** — Windows nightly test fails after no-follow open fallback | Deterministic session-storage test regression on Windows CI; blocks nightly pipeline. | 2 comments, P3, `status/in-review` |
| [#11751](https://github.com/QwenLM/qwen-code/issues/11751) | Web Shell: per-daemon `FileSystemDirectoryHandle` grants cannot be revoked/enumerated | After switching daemons, stale permissions persist in IndexedDB with no UI to manage them — security/privacy risk. | 2 comments, P3, `status/blocked`, `category/security` |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | Fleet Shepherd Dashboard (auto-maintained) | Bot fleet health monitor; shows PR scan/sync/release status. Not a user-facing bug but indicates CI automation health. | 3 comments, `status/need-information` |

> Only 5 issues updated in the last 24h; all shown above.

---

## 4. Key PR Progress
| # | Title | Type | Impact |
|---|-------|------|--------|
| [#11614](https://github.com/QwenLM/qwen-code/pull/11614) | **feat(cli): add `bwrap` kernel sandbox backend for Linux** | Feature | Opt-in, rootless, container-free sandbox using `bubblewrap`; no daemon/image required. Linux only; macOS/container backends untouched. |
| [#11722](https://github.com/QwenLM/qwen-code/pull/11722) | **feat(web-shell): add installable PWA support** | Feature | Web Shell becomes installable PWA with service worker; launches without embedded credentials/session. Offline root load supported. |
| [#11565](https://github.com/QwenLM/qwen-code/pull/11565) | **fix(cli): break Ink `useBoxMetrics` commit-phase `setState` loop (React #185)** | Bugfix | Patches Ink 7.0.3 to fix "Maximum update depth exceeded" crash in TUI. Critical for stability on React 18+. |
| [#11692](https://github.com/QwenLM/qwen-code/pull/11692) | **feat(core): make `web_search` budget configurable & bound extractor fallback** | Feature | `tools.webSearch.timeoutMs` (env `WEB_SEARCH_TIMEOUT_MS`) now configurable; default raised to 120s; extractor output bounded on timeout. |
| [#11727](https://github.com/QwenLM/qwen-code/pull/11727) | **fix(core): let producer's budget decide shell output size** | Bugfix | Removes double-truncation conflict: tool truncation + scheduler re-truncation. Preserves tail (exit code, signal, error summary). |
| [#11291](https://github.com/QwenLM/qwen-code/pull/11291) | **fix(core): retry status-less upstream errors instead of ending turn** | Bugfix | Handles gateway errors pushed into SSE stream after 200 OK (no HTTP status). Retries instead of ending turn. |
| [#11686](https://github.com/QwenLM/qwen-code/pull/11686) | **feat(review): record default deadline in plan** | Feature | Every `/review` run gets a wall-clock deadline (default scaled by diff topology). CI and local runs now consistent. |
| [#11731](https://github.com/QwenLM/qwen-code/pull/11731) | **fix(ci): retry transient `npm ci` failures in E2E install steps** | CI | Adds 3-attempt bounded retry to `npm ci` in E2E workflow; reduces flaky red jobs from network hiccups. |
| [#11750](https://github.com/QwenLM/qwen-code/pull/11750) | **test(core): account for extra Windows `fstat` in tail-growth mocks** | Test Fix | Fixes 2 session-storage unit tests broken by Windows no-follow open path adding an extra `fstat` call. |
| [#11635](https://github.com/QwenLM/qwen-code/pull/11635) | **feat(web-shell): show fixed scheduled tasks in session sidebar** | Feature | Scheduled-task controllers now appear in session list with structured run cards; per-run/stale entries hidden. |

---

## 5. Feature Request Trends
From the issue/PR stream, the strongest community pull directions are:

1. **Multi-vendor model compatibility** — First-class support for non-Qwen models on aggregated gateways (DashScope, etc.), including automatic field sanitization.
2. **Web Shell as a first-class client** — PWA install, persistent permissions management, scheduled-task visibility, shell/monitor output streaming.
3. **Sandboxing without containers** — `bwrap` backend signals demand for lightweight, rootless isolation on Linux CI/workstations.
4. **Configurable tool budgets** — Timeouts, output sizes, and retry policies exposed via config/env (e.g., `WEB_SEARCH_TIMEOUT_MS`).
5. **Resilient CI/CD** — Retry logic for flaky installs, macOS E2E shard recovery, Windows test parity.
6. **TUI robustness on minimal runtimes** — Graceful degradation / actionable diagnostics when ICU, `Intl.Segmenter`, or other globals are missing.

---

## 6. Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Silent TUI crashes on minimal Node/ICU** | #11747: no diagnostic, hard crash on RHEL 10 | High (blocks enterprise Linux adoption) |
| **Auto-injected fields breaking vendor APIs** | #11590: `metadata` object vs. vendor `string` expectation | Critical (P1, multi-vendor blocker) |
| **Stale permissions in Web Shell after daemon switch** | #11751: `FileSystemDirectoryHandle` grants unrecoverable | Medium (security/UX) |
| **Windows CI flakiness from filesystem semantics** | #11749: extra `fstat` breaks tail-growth test | Recurring (nightly regressions) |
| **Double-truncation of shell output losing exit context** | #11727: tool + scheduler both truncate, tail lost | Medium (debugging impact) |
| **React 18 + Ink commit-phase loops** | #11565: minified error #185 crashes TUI | High (UI stability) |
| **No visibility into Fleet Shepherd bot fleet health** | #7167: dashboard is auto-maintained but opaque | Low (ops visibility) |

---

*Generated from `github.com/QwenLM/qwen-code` data as of 2026-09-13. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-13

## 1. Today's Highlights
The project continues rapid iteration on core TUI stability and agent runtime correctness. Critical fixes landed for context compaction reliability, sub-agent profile inheritance, and symlinked context file handling. The DeepSeek V4 Pro deprecation notice (effective 2026-09-14) has triggered urgent provider routing updates. A new Runtime API endpoint for workspace file search addresses a key integration gap for non-TUI clients.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#6025](https://github.com/Hmbown/Codewhale/issues/6025)** DeepSeek V4 Pro discontinuation (2026-09-14) | **Urgent:** All Pro requests will route to V4.1 Flash at Flash pricing. Requires immediate provider config updates for production users. | 5 comments, closed (tracking) |
| **[#5620](https://github.com/Hmbown/Codewhale/issues/5620)** Context pressure warning is transient, agent doesn't react | Silent context degradation — safety signal fires but agent continues until OOM/compaction failure. Medium severity, high impact. | 18 comments, closed (fix in progress) |
| **[#6011](https://github.com/Hmbown/Codewhale/issues/6011)** Token accounting & tool diagnostics (per-component, cache hits, compaction cost) | Core observability gap: no visibility into token burn per model/tool/compaction. Blocks cost optimization and debugging. | 6 comments, open (C11 execution plan) |
| **[#6102](https://github.com/Hmbown/Codewhale/issues/6102)** Session resume fails with ENOENT on runtime store dir | Session recovery broken — mismatched session IDs (`ac262444...` vs `40e203d7...`) prevent resuming interrupted work. | 5 comments, closed (fix merged) |
| **[#6045](https://github.com/Hmbown/Codewhale/issues/6045)** User-input modal clips options, hides typed input | UX regression on real terminals: 22-row hard cap, no scroll, no back-navigation. Blocks interactive workflows. | 5 comments, closed (fix merged) |
| **[#6117](https://github.com/Hmbown/Codewhale/issues/6117)** Agent profiles ignored when spawning sub-agents via `agent()` | Sub-agents silently fall back to session default model/provider, defeating profile-based routing (e.g., specialist models). | 1 comment, closed (fix merged) |
| **[#6097](https://github.com/Hmbown/Codewhale/issues/6097)** Deny rules from `permissions.toml` not enforced in sub-agent loops | Security hole: explicitly denied commands execute in child agents. Parent-only enforcement is insufficient. | 2 comments, closed (fix merged) |
| **[#6030](https://github.com/Hmbown/Codewhale/issues/6030)** MCP server auth mid-session deadlock (start_mcp_server name/credential-key) | OAuth-completed MCP servers unusable in running sessions — no hot-reload, agent burns turns on workarounds. | 2 comments, closed (fix merged) |
| **[#6098](https://github.com/Hmbown/Codewhale/issues/6098)** Deny rules match heredoc body text, blocking valid file writes | Over-eager policy: `cat >> file <<'EOF'` rejected if heredoc *mentions* a denied command. False positives break workflows. | 2 comments, closed (fix merged) |
| **[#6119](https://github.com/Hmbown/Codewhale/issues/6119)** Compaction survival contract should reject orphaned tool_results | Data integrity: compaction can drop tool_result IDs across replacement boundary, breaking history validity. | 0 comments, open (new) |

## 4. Key PR Progress (10 Important)

| PR | Summary | Impact |
|----|---------|--------|
| **[#6120](https://github.com/Hmbown/Codewhale/pull/6120)** `feat(runtime-api): expose workspace file suggestions` | Adds `GET /v1/workspace/files/search?query=&limit=` — enables non-TUI clients to use `@file` fuzzy search. Closes #6095. | **Integration unblock** for API clients |
| **[#6114](https://github.com/Hmbown/Codewhale/pull/6114)** `fix(tui): follow symlinked user-level context files` | User-level `AGENTS.md` now resolves symlinks (was refused silently). Fixes #6115. | **Config reliability** for shared dotfiles |
| **[#6111](https://github.com/Hmbown/Codewhale/pull/6111)** `feat(tui): add file-scoped restore endpoint, gate whole-tree rollback` | Restores per-file revert (GUI requirement) + fixes two whole-tree rollback defects. | **Editor integration** parity |
| **[#6100](https://github.com/Hmbown/Codewhale/pull/6100)** `feat(web_search): add Serply search provider` | New `[search]` provider `serply` via `GET https://api.serply.io/v1/search` with `X-Api-Key`. | **Search diversity** beyond Sofya |
| **[#6096](https://github.com/Hmbown/Codewhale/pull/6096)** `feat(commands): adopt capability shapes in TUI session-export (FEAT-025)` | Rewires `/export` through portable command contract. Structural migration, no behavior change. | **Architecture cleanup** (EPIC-006) |
| **[#5842](https://github.com/Hmbown/Codewhale/pull/5842)** `feat(runtime-api): plugin + marketplace management over /v1/apps` | Engine-side gated local plugin system. App-side follows. Full CI matrix. | **Plugin ecosystem** foundation |
| **[#5996](https://github.com/Hmbown/Codewhale/pull/5996)** `docs(config): document R1 turn budgets and [goal] example` | Documents `max_model_steps`, `turn_wall_clock_secs` in `CONFIGURATION.md`; adds `[goal]` example. | **Config discoverability** |
| **[#5984](https://github.com/Hmbown/Codewhale/pull/5984)** `docs: correct legacy project name to DeepSeek-TUI` | Fixes copyright attribution from "DeepSeek CLI Contributors" → "DeepSeek-TUI". | **Project identity** accuracy |
| **[#6104](https://github.com/Hmbown/Codewhale/pull/6104)** `chore(deps): bump encoding_rs 0.8.35 → 0.8.41` | Dependency update with version bump. | **Maintenance** |
| **[#6103](https://github.com/Hmbown/Codewhale/pull/6103)** `chore(deps): bump dirs 6.0.0 → 7.0.0` | Major version bump for directory resolution crate. | **Maintenance** (breaking changes possible) |

## 5. Feature Request Trends
From issue patterns, the top community asks cluster around:

1. **Observability & Cost Control** — Per-model/per-tool token accounting, cache hit rates, compaction cost visibility (#6011, #6047)
2. **Agent Composition Reliability** — Profile inheritance in sub-agents, provider pinning across resume/followup (#6117, #6046, #6108)
3. **Policy & Security Enforcement** — Consistent deny-rule evaluation in all tool loops, heredoc-aware matching (#6097, #6098)
4. **Session & State Resilience** — Symlink-safe context loading, session resume integrity, MCP hot-reload (#6115, #6102, #6030)
5. **TUI UX Polish** — Modal input fixes, status-line extensibility (workspace/git branch), copy/paste parity (#6045, #6112, #6116)
6. **API Surface Expansion** — Workspace file search for external clients, plugin marketplace API (#6095, #5842)

## 6. Developer Pain Points
Recurring frustrations surfaced in recent issues:

- **Silent failures** — Context pressure warnings ignored, symlinked configs dropped, profile pins lost on resume, deny rules bypassed in sub-agents. No errors, just wrong behavior.
- **Provider churn** — DeepSeek V4 Pro sunset (24h notice) forces急迫 config migrations; per-model `context_window` overrides still missing for custom gateways (#6108).
- **Compaction unpredictability** — Auto-compact gate reads stale billed tokens, not live counts; can miss 80% threshold mid-turn (#6047). Orphaned tool_results risk history corruption (#6119).
- **Windows-specific hangs** — `toggle_pin` blocks TUI thread on host terminal message pump (#5923); test flakes under parallel load (#5929, #5990).
- **Automation deadlocks** — Approval-required tool calls in headless automations timeout silently as idle cancels (#6118).
- **Markdown rendering bugs** — Underscore emphasis breaks math subscripts (`τ_p^{...}`) without opening-delimiter guard (#6042).

---

*Data source: [github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI) — Issues/PRs updated 2026-09-12 to 2026-09-13*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*