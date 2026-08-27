# AI CLI Tools Community Digest 2026-08-27

> Generated: 2026-08-27 06:13 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-27)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **consolidation and hardening phase** rather than feature expansion. All major tools shipped patch-level releases or prereleases focused on stability, security, and architectural refactoring. A clear pattern emerges: **MCP (Model Context Protocol) integration is the universal interoperability layer**, but every tool struggles with transport reliability, schema compatibility, and credential handling. Windows/WSL2 remains a second-class platform across the board, with multiple tools reporting critical regressions in their latest desktop app updates. Token/cost observability and subagent governance have become table-stakes requirements.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs Updated (24h) | Release Status | Critical Regressions |
|------|--------------|-------------------|----------------|---------------------|
| **Claude Code** | 10 high-impact | 2 (older drafts) | v2.1.247 stable | Windows MSIX update loop, OAuth token leak, grep OOM |
| **OpenAI Codex** | 46 active (8/10 Windows) | 10 closed | v0.150.1 patch + v0.151 alpha | Windows 26.820.x startup/MCP/WSL/CLI relocation |
| **Gemini CLI** | 10 high-signal | 10 active | v0.59.0-nightly (security) | License/auth break, agent hangs, subagent false success |
| **GitHub Copilot CLI** | 10 high-impact | 0 | 3 prereleases (v1.0.81-12/13/14) | MCP schema 354K tokens, FileWatch 13GB loop, Gemini 400s |
| **Kimi Code CLI** | 2 | 1 open | None | Cron overwrites transcript, version mismatch |
| **OpenCode** | 10 (megathread 138 comments) | 10 active | None | Subagent runaway loops, TUI 97% CPU, memory pressure |
| **Pi** | 10 | 11 active | None | Auto-compaction failure, proxy crash, PowerShell/WSL breaks |
| **Qwen Code** | 10 | 10 active | v0.22.2 (breaking: REPL→MCP) | Web shell bugs, multi-agent roster corruption, BYOM schema |
| **DeepSeek TUI** | 10 | 10 active | None | Mega-files (>9k lines), multi-session lock, transient warnings |
| **Grok Build** | 0 | 0 | None | No activity |

**Key Observation**: OpenAI Codex and GitHub Copilot CLI show the highest *regression-driven* issue volume due to recent desktop app releases. OpenCode, Pi, Qwen Code, and DeepSeek TUI demonstrate healthy PR velocity (10+ active PRs each) indicating active development cycles. Kimi and Grok are notably quiet.

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **MCP Transport & Schema Reliability** | Codex, Copilot, Claude, Gemini, Qwen, Pi, DeepSeek | Stable stdio/HTTP transports; union-type array schema support (Gemini 400s); deferred/lazy schema injection (Copilot 354K tokens); credential scoping per runtime (DeepSeek, Pi) |
| **Subagent Governance** | OpenCode, Copilot, Gemini, Qwen, Claude | Loop detection/timeouts (OpenCode 364 greps); parent notification on completion (OpenCode); spawn atomicity/roster consistency (Qwen); recursive skill discovery (Claude) |
| **Token/Context Observability** | DeepSeek, Pi, OpenCode, Copilot, Qwen | Live token totals (DeepSeek); persisted context-pressure warnings (DeepSeek, Pi); compaction trigger reliability (Pi auto-compaction failure); usage dashboards (OpenCode) |
| **Session Durability & Resumption** | Copilot, Qwen, Pi, Claude, Gemini | Hook/plugin loading on resume (Copilot); headless/ACP parity (Qwen); cold restore integrity (Pi); archived chat recovery (Claude) |
| **Multi-Account / Identity** | Codex, Claude, Copilot, Gemini | Gmail/GitHub/Workspace multi-account MCP (Claude); Entra ID/WAM for MCP (Copilot); Advanced Account Security login loop (Codex); license/auth regression (Gemini) |
| **Windows/WSL2 Parity** | Codex, Copilot, Claude, Pi, Gemini | MSIX update reliability (Claude); CLI bundling/relocation (Codex); PowerShell version consistency (Pi); WSL MCP transport (Codex) |
| **Security Hardening** | All | OAuth token leakage (Claude); SSRF in MCP OAuth (Gemini); encrypted tool args (Codex); fail-closed workspace trust (Gemini); secret scoping (DeepSeek) |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Enterprise workflow integration, skill/agent ecosystem, feedback loops | Teams using Anthropic models, enterprise ops | Plugin/skill architecture; `AGENTS.md` standard; SendFeedback auto-draft; tips system |
| **OpenAI Codex** | Multi-modal agent orchestration, remote/SSH collaboration, web automation | OpenAI ecosystem users, Pro/Plus subscribers | Task delegation (`@` mentions); remote threads; browser/computer-use via MCP; Code Mode |
| **Gemini CLI** | Model-native tooling (bash/POSIX affinity), zero-dep sandboxing, memory system | Google Cloud/Gemini users, automation-heavy workflows | AST-aware reads; Whisper voice; Auto Memory; browser agent; subagent orchestration |
| **GitHub Copilot CLI** | GitHub ecosystem integration, enterprise policy, TUI/UX polish | GitHub Enterprise, Copilot subscribers | ACP protocol; plugin marketplace; WAM auth; OpenTelemetry hooks; global config demand |
| **Qwen Code** | Multi-agent teams, embeddable web shell, pluggable memory | Alibaba Cloud/Qwen users, iframe/portal embedders | Agent Team roster; MCP-hosted REPL; Mem0 extensions; headless/ACP hosts; responsive web UI |
| **OpenCode** | Subagent reliability, TUI parity, durable sessions, plugin extensibility | Power users, self-hosters, Rust/TypeScript devs | WebSocket RPC HTTP API; durable session lifecycle; localization hooks; permission rule inheritance |
| **Pi** | Context-window management, provider/model agility, terminal UX | Polyglot model users, long-running agentic tasks | Configurable summarization models; auto-compaction; GLM/DeepSeek/NVIDIA providers; OSC 8 links |
| **DeepSeek TUI** | Enterprise embedding, supervised operation, cost observability | Enterprise/embedded, CI/automation, Tailscale shops | Per-session control sockets; tsnet/Tailscale; per-thread usage API; mega-file refactor |
| **Kimi Code** | Session transcript integrity, cancellation correctness | Moonshot/Kimi users, Chinese-market devs | Soul subsystem; cron reminders; async cancellation propagation |
| **Grok Build** | *Insufficient data* | *Insufficient data* | *Insufficient data* |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Active Hardening** | **OpenCode, Pi, Qwen Code, DeepSeek TUI** | 10+ PRs/24h; architectural refactors (WebSocket RPC, REPL→MCP, mega-file decomposition); megathreads with 100+ comments; rapid security fixes |
| **High Volume / Regression-Driven** | **OpenAI Codex, GitHub Copilot CLI** | 46/10 issues driven by recent desktop app releases; high 👍 on blockers; prerelease patch cadence |
| **Enterprise/Platform Integration Focus** | **Claude Code, Gemini CLI** | Long-standing feature requests (AGENTS.md, multi-account); security incidents (token leak, SSRF); plugin/skill ecosystem investment |
| **Early / Niche** | **Kimi Code CLI** | Low issue volume; version confusion; cancellation fix only PR; language barrier may limit visibility |
| **Dormant / Unknown** | **Grok Build** | Zero activity in 24h; no community signals |

**Maturity Signals**: Tools with breaking architectural changes (Qwen REPL→MCP, DeepSeek mega-file refactor, Pi configurable summarization) are investing in 2.0 foundations. Tools shipping only patches (Claude, Codex, Copilot) are stabilizing 1.x lines.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **MCP is the de facto standard, but implementations diverge** | Every tool reports MCP transport/schema/auth issues; Copilot eager-loads schemas (354K tokens), DeepSeek scopes secrets per runtime, Gemini enforces HTTPS/OAuth RFC compliance | **Adopt MCP but budget for adapter layers**; expect vendor-specific quirks in tool schemas, auth flows, and transport reliability for 6-12 months |
| **Subagent runaway is the #1 reliability risk** | OpenCode (364 greps/50min), Gemini (false GOAL success), Copilot (TUI freeze), Qwen (roster corruption), Claude (background task fragility) | **Require loop detection, timeout guards, and parent notification** in any production agent workflow; treat subagents as untrusted by default |
| **Windows/WSL2 is a strategic liability** | 8/10 Codex issues Windows; Claude MSIX reboot loops; Pi PowerShell injection; Copilot CLI relocation; Gemini Wayland failures | **Validate Windows support in CI/CD**; consider Linux-first development with Windows as secondary target; WSL2 ≠ native Linux parity |
| **Token/cost observability moving from nice-to-have to requirement** | DeepSeek live totals, Pi compaction failure, OpenCode usage dashboards, Copilot token bloat, Qwen structured recall | **Budget for token accounting infrastructure**; model-agnostic cost tracking will be a procurement criterion |
| **Session durability = enterprise readiness** | Copilot hooks missing on resume, Qwen headless/ACP parity, Pi cold restore corruption, Claude archived chat loss | **Session state must survive process death, host restart, and version upgrades** — this is now a competitive differentiator |
| **Security incidents shifting from theoretical to exploitable** | Claude OAuth tokens in transcripts, Gemini SSRF in MCP OAuth, Codex encrypted tool args, DeepSeek scoped secrets, Pi proxy constructor crash | **Audit MCP/credential flows in your stack**; assume any tool with network access can leak secrets via transcripts or logs |
| **Web/embeddable shells are the next frontier** | Qwen `qwen serve` embedding, DeepSeek Tailscale web, Pi terminal UX, OpenCode mobile/QR remote | **CLI-only tools will lose enterprise deals**; evaluate embeddability and multi-tenant isolation now |

---

## Recommendation Summary

| If You Need... | Prioritize |
|----------------|------------|
| **Enterprise GitHub integration, policy compliance** | GitHub Copilot CLI (despite current regressions) |
| **Multi-model flexibility, long-running agents, cost control** | Pi or OpenCode |
| **Embeddable web UI, multi-agent teams, Chinese-model ecosystem** | Qwen Code |
| **

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-27 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py always reports 0% recall` | Core evaluation infrastructure — fixes the skill-description optimizer that was silently scoring every skill at 0% recall, breaking the entire improvement loop. | Directly addresses **Issue #556 (12 comments, 7👍)** — the highest-engagement bug report. Multiple independent reproductions; blocks skill-quality iteration. | Open (updated 2026-06-23) |
| 2 | **[#1099](https://github.com/anthropics/skills/pull/1099)** `skill-creator: fix run_eval.py crash on Windows` | Windows compatibility for the evaluation harness — resolves `WinError 10038` when reading from subprocess pipes. | Companion fix for **#556**; Windows users completely blocked from skill-creator workflow. | Open (updated 2026-05-24) |
| 3 | **[#1050](https://github.com/anthropics/skills/pull/1050)** `skill-creator: fix Windows subprocess + encoding bugs` | Two 1-line fixes: `claude.cmd` invocation and UTF-8 encoding for subprocess output. | Same root cause as #1099; community-validated on Windows 11. | Open (updated 2026-05-24) |
| 4 | **[#1602](https://github.com/anthropics/skills/pull/1602)** `fix: resolve evaluation serialization, benchmark metrics, encoding, and script stability` | Cross-cutting reliability fixes: MCP result serialization, benchmark metric calculation, encoding, and script stability across `mcp-builder`, `skill-creator`, and eval scripts. | Addresses **Issue #1390 (4 comments)** — evaluation harness fabricating tool errors against real MCP servers. | Open (updated 2026-08-24) |
| 5 | **[#1607](https://github.com/anthropics/skills/pull/1607)** `Update claude-api skill: mark four retired model IDs as retired` | Updates bundled `claude-api` skill to remove retired models (`claude-opus-4-1`, `claude-sonnet-4-0`, `claude-opus-4-0`, `claude-3-haiku-20240307`). | Fixes **Issue #1487 (4 comments)** — skill eagerly injects ~156k tokens, exhausting context window. | Open (updated 2026-08-26) |
| 6 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate` | New meta-skill: pre-delivery audit that mechanically verifies file existence, then runs a 4-dimension reasoning review (correctness, completeness, safety, clarity) in severity order. | Embodies the pipeline proposed in **Issue #1385 (4 comments, 1👍)**; universal, stack-agnostic quality gate. | Open (updated 2026-07-02) |
| 7 | **[#1628](https://github.com/anthropics/skills/pull/1628)** `Add Hivemind: Zero-Cost Multi-Agent Orchestration Skill` | Delegates mechanical coding tasks to headless `opencode` workers on free models; Claude Code remains planner/reviewer/merger. | Novel cost-optimization pattern: expensive model context as scarce resource, not intelligence. High community novelty factor. | Open (updated 2026-08-24) |
| 8 | **[#514](https://github.com/anthropics/skills/pull/514)** `Add document-typography skill` | Typographic quality control for generated documents: prevents orphans, widows, numbering misalignment in AI output. | Addresses a universal pain point — every document Claude generates suffers these issues; users rarely ask explicitly. | Open (updated 2026-03-13) |

> **Note:** PR comment counts are not exposed in the dataset; ranking prioritizes PRs linked to high-engagement Issues, recent update activity, and ecosystem-wide impact (core infra > niche domain skills).

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍) — community skills masquerading as official `anthropic/` namespace; trust boundary abuse. | 🔴 Critical |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) — no org-wide skill library; manual file transfer via Slack/Teams. | 🟠 High |
| **Evaluation & Skill-Creator Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍), [#202](https://github.com/anthropics/skills/issues/202) (8 comments) — `run_eval.py` fundamentally broken; skill-creator reads like docs, not an executable skill. | 🟠 High |
| **Quality Gates & Self-Audit** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1👍), [#1367](https://github.com/anthropics/skills/pull/1367) — three-gate pipeline (calibration → adversarial review → delivery verification) gaining traction. | 🟡 Emerging |
| **Token/Context Efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — `claude-api` skill injects 156k tokens in one call; [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) — `compact-memory` symbolic notation for agent state. | 🟡 Emerging |
| **MCP Interoperability** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) — expose Skills as MCPs; [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments) — MCP builder eval broken. | 🟡 Emerging |
| **Enterprise Platform Skills** | [#568](https://github.com/anthropics/skills/pull/568) ServiceNow (ITSM/ITOM/SecOps/ITAM), [#1615](https://github.com/anthropics/skills/pull/1615) SCNet HPC — demand for deep platform-specific skills. | 🟢 Steady |
| **Document Fidelity** | [#12](https://github.com/anthropics/skills/issues/12) (4 comments, 1👍) docx whitespace corruption; [#514](https://github.com/anthropics/skills/pull/514) typography; [#486](https://github.com/anthropics/skills/pull/486) ODT — professional document output. | 🟢 Steady |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` evaluation fix | Unblocks the entire skill-quality loop; 10+ independent reproductions of the bug. |
| **[#1602](https://github.com/anthropics/skills/pull/1602)** | Cross-cutting eval/serialization fixes | Resolves silent 0/N scoring against real MCP servers (#1390); touches 3+ subsystems. |
| **[#1607](https://github.com/anthropics/skills/pull/1607)** | `claude-api` model retirement update | Directly fixes context-window exhaustion (156k tokens) in bundled skill; trivial, high-impact. |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` meta-skill | Implements the community-proposed quality-gate pipeline (#1385); universal applicability. |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Solves a universal, invisible pain point (orphans/widows) for every document-generating workflow. |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Comprehensive testing skill (Trophy model, React, contract, E2E, property-based); broad developer appeal. |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills for skill authors; addresses the "how do I know my skill is good?" gap. |
| **[#538](https://github.com/anthropics/skills/pull/538)**, **[#541](https://github.com/anthropics/skills/pull/541)**, **[#539](https://github.com/anthropics/skills/pull/539)** | `pdf`/`docx`/`skill-creator` hardening fixes | Small, surgical fixes for case-sensitivity, OOXML ID collision, YAML parsing — high merge probability. |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for trustworthy, reliable skill-authoring infrastructure — fixing the broken evaluation loop, securing the namespace, and enabling organizational sharing — so that domain skills (document fidelity, platform automation, quality gates) can be built, verified, and distributed with confidence.**

---

# Claude Code Community Digest — 2026-08-27

---

## 1. Today's Highlights

- **v2.1.247 released** with a new `SendFeedback` tool that auto-drafts feedback reports when sessions encounter issues, plus enhancements to the tips system (`tipsFile`, `label`, cooldown/priority controls).
- **Windows MSIX update failures dominate new reports** — multiple users report the desktop app wedging on every auto-update, requiring reboots (issues #89692, #76357, #90007).
- **Security regression**: The `security-guidance` plugin is leaking raw OAuth tokens (`accessToken`, `refreshToken`) into transcripts during stop-time reviews (#90010).

---

## 2. Releases

### v2.1.247
- **`SendFeedback` tool**: When a session hits an error, Claude can now draft a feedback report for user review/send via `/feedback` (disable via `feedbackDrafts` setting).
- **Tips system enhancements**: Added structured tip entries with `{id, text, cooldownSessions, priority}`, plus `tipsFile` and `label` fields for richer in-product guidance.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#31005](https://github.com/anthropics/claude-code/issues/31005) | **Support for `AGENTS.md` and `.agents/skills/`** | Long-standing community request (since Aug 2025) for standardized agent/skill discovery; 332 👍, 22 comments | High frustration — "zero official response" despite multiple requests |
| [#36024](https://github.com/anthropics/claude-code/issues/36024) | **Multiple Gmail accounts in MCP** | Critical for users with personal + work Google Workspace accounts; 79 👍, 32 comments | Strong demand — single-account limit blocks real workflows |
| [#18192](https://github.com/anthropics/claude-code/issues/18192) | **Recursive skill discovery in `~/.claude/skills/`** | Currently only top-level dirs scanned; subdir organization (e.g., `skills/spec-system/spec-creator/`) ignored; 63 👍, 43 comments | Closed but high engagement — signals desire for hierarchical skill management |
| [#22931](https://github.com/anthropics/claude-code/issues/22931) | **Archived Cowork chats disappear** | Data-loss risk: archived chats not recoverable; 38 👍, 38 comments | macOS users affected; no clear recovery path |
| [#76357](https://github.com/anthropics/claude-code/issues/76357) | **Windows MSIX: update fails, app unlaunchable until reboot** | Every update breaks; 12 👍, 32 comments | **Closed** but pattern repeats in #89692, #90007 — systemic MSIX issue |
| [#89854](https://github.com/anthropics/claude-code/issues/89854) | **[P0 CRITICAL] False-positive "cybersecurity" blocks on legit ops work (Opus 4.7)** | Safety layer over-blocking commercial ops involving Grokbot/xAI; 0 👍 but P0 severity | New (Aug 26), high urgency — blocks legitimate work |
| [#90010](https://github.com/anthropics/claude-code/issues/90010) | **`security-guidance` plugin leaks OAuth tokens into transcript** | **Security incident**: raw `accessToken`/`refreshToken` from `~/.claude/.credentials.json` echoed verbatim | New (Aug 27), critical — credentials exposure |
| [#74143](https://github.com/anthropics/claude-code/issues/74143) | **grep shim OOM on ERE bounded quantifiers `{m,n}`** | Unbounded memory growth (~100–120 MB/s) until OOM; 3 👍, 6 comments | Linux perf regression; reproducer provided |
| [#88307](https://github.com/anthropics/claude-code/issues/88307) | **Daemon deletes `settings.json` when symlink to read-only dir (nix/home-manager)** | Silent data loss for NixOS/home-manager users; 3 👍, 1 comment | Niche but severe for declarative config users |
| [#84253](https://github.com/anthropics/claude-code/issues/84253) | **Prompt-cache TTL regression: no 1h TTL since 2.1.218** | Every 5+ min gap forces full cache rewrite → cost/latency impact; 0 👍, 2 comments | Quiet but costly regression for heavy users |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#13437](https://github.com/anthropics/claude-code/pull/13437) | `fix(hookify): use relative imports for Python module resolution` | Open (Dec 2025) | Fixes `No module named hookify` on all platforms by converting absolute → relative imports in hookify plugin |
| [#58673](https://github.com/anthropics/claude-code/pull/58673) | `s` | Open (May 2026) | Minimal/incomplete PR — appears to be a draft or test submission |

> **Note**: Only 2 PRs updated in last 24h; both are older drafts. No major feature/fix PRs merged recently.

---

## 5. Feature Request Trends (from Issues)

1. **Hierarchical skill/agent discovery** — Recursive scanning (`~/.claude/skills/**`), `AGENTS.md`/`AGENTS/` standard (#31005, #18192)
2. **Multi-account MCP support** — Gmail, GitHub, Google Workspace, etc. (#36024)
3. **Cowork/chat persistence & recovery** — Archive restore, cross-session continuity (#22931)
4. **Windows/MSIX reliability** — Update mechanism, file locking, background task survival (#76357, #89692, #90007)
5. **Prompt cache control** — Explicit TTL management, cache warming (#84253)
6. **Hook/permission system hardening** — Hook decision validation, per-capability feature flags (#90014, #85298)
7. **Plugin/skill isolation** — Background session skill loading reliability (#89319)

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence |
|------------|----------|
| **Windows MSIX update loop** | 3+ issues (#76357, #89692, #90007) reporting crash-loops, forced reboots, EPERM on old version cleanup |
| **Credential leakage** | #90010 (OAuth tokens in transcript), #90002 (UI metadata in transcript JSONL causing API 400s) |
| **Background task fragility** | #90007 (host exits kill live tasks), #75574 (duplicate MCP process generations), #85408 (notifications cancel permission prompts) |
| **Sandbox/namespace incompatibility** | #89478 (nested user namespace seccomp failure), #74143 (grep shim OOM), #72715 (WSL preview toolchain broken) |
| **Skill/plugin discovery gaps** | #31005 (AGENTS.md), #18192 (recursive skills), #89319 (background sessions lose plugin skills) |
| **Safety over-blocking** | #89854 (false cyber flags on legit ops), #86384 (allowed sites still prompt in Auto mode) |
| **No per-capability feature flags** | #85298 (`DISABLE_GROWTHBOOK` forces all-or-nothing tradeoff) |

---

*Generated from `anthropics/claude-code` GitHub data (releases, issues, PRs updated 2026-08-26 → 2026-08-27).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-27

## Today's Highlights
The 0.150 stable line received a patch release (v0.150.1) backporting retained-image compaction budgeting, while 0.151 alpha continues advancing. The Windows desktop app update (26.820.x) has triggered a wave of critical regressions—startup failures, MCP transport errors in WSL, and CLI relocation issues—dominating today's issue tracker with 46 active items and high community engagement.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.150.1** | Patch | Backports `#40994`: remote compaction now counts retained images toward token budget by default, trimming older images as needed ([#41003](https://github.com/openai/codex/pull/41003)) |
| **rust-v0.151.0-alpha.4** | Alpha | Iteration on 0.151 development line |
| **rust-v0.150.0** | Minor (stable) | **Major features**: `@` mentions to reference other Codex tasks; `/copy` picker for full responses/code blocks/blockquotes; unnamed terminal tasks get descriptive titles ([#40308](https://github.com/openai/codex/pull/40308), [#40315](https://github.com/openai/codex/pull/40315), [#39997](https://github.com/openai/codex/pull/39997)) |

---

## Hot Issues (Top 10 by Impact & Community Reaction)

| Issue | Area | Why It Matters | Community Signal |
|-------|------|----------------|------------------|
| [#40752](https://github.com/openai/codex/issues/40752) | Windows, App | Desktop app v26.820.60940 fails to start: "Unable to locate Codex CLI" + `spawn EINVAL` on `.cmd` wrapper | **79 comments, 48👍** — highest engagement; blocks all Windows users |
| [#40715](https://github.com/openai/codex/issues/40715) | Windows, MCP | Stable 26.820.60940 breaks MCP with "invalid transport in mcp_servers.codex_app"; beta 26.727.40816 works | **68 comments, 78👍** — MCP regression affecting Pro users |
| [#40819](https://github.com/openai/codex/issues/40819) | Windows, WSL, MCP | Resuming WSL-hosted threads fails with same MCP transport error on 26.820.7780.0 | **60 comments, 53👍** — breaks WSL workflow |
| [#40700](https://github.com/openai/codex/issues/40700) | Windows, App | Bundled `codex.exe` relocation from WindowsApps fails; app cannot start | **29 comments** — fundamental packaging issue |
| [#40881](https://github.com/openai/codex/issues/40881) | Windows, WSL, MCP | New chats in WSL mode fail with "invalid transport in mcp_servers.codex_app" | **26 comments, 7👍** — WSL + MCP combo broken |
| [#38350](https://github.com/openai/codex/issues/38350) | Web, Automations | Recurring scheduled tasks disable themselves after successful runs without user action | **47 comments** — silent data loss risk for automation users |
| [#40867](https://github.com/openai/codex/issues/40867) | Windows, App | Bundled CLI binary exists but cannot be executed on Windows 11 | **7 comments, 6👍** — permission/execution policy issue |
| [#40865](https://github.com/openai/codex/issues/40865) | Remote, SSH, MCP | Inter-task tools stopped working pre-update; 0.148 lacks `codex_app` MCP replacement | **7 comments, 6👍** — remote collaboration regression |
| [#39841](https://github.com/openai/codex/issues/39841) | Windows, Terminal | Workspace terminal fails with "setup refresh had errors" | **19 comments, 2👍** — terminal unusable on Windows |
| [#40611](https://github.com/openai/codex/issues/40611) | Auth, macOS | Advanced Account Security enrollment traps app in login/logout loop | **10 comments** — security feature breaks app entirely |

**Pattern**: 8/10 top issues are Windows desktop app regressions from the 26.820.x release, specifically around MCP transport, WSL integration, and CLI bundling.

---

## Key PR Progress (Top 10 by Significance)

| PR | Status | Description |
|----|--------|-------------|
| [#41003](https://github.com/openai/codex/pull/41003) | **Closed** | Backport retained-image compaction budgeting to 0.150 stable (shipped in v0.150.1) |
| [#40994](https://github.com/openai/codex/pull/40994) | **Closed** | Enable `compaction_image_budget` by default — charges retained images against remote compaction budget |
| [#41058](https://github.com/openai/codex/pull/41058) | **Closed** | Track Code Mode tool call metadata completeness across `exec`/`wait` spans |
| [#41046](https://github.com/openai/codex/pull/41046) | **Closed** | Preserve tool authority for TUI delegation prompts (delegated turns retain originating tool authority) |
| [#41041](https://github.com/openai/codex/pull/41041) | **Closed** | Encrypt sensitive history/notes tool arguments; send `x-openai-encrypted-tool-arguments: true` header |
| [#41017](https://github.com/openai/codex/pull/41017) | **Closed** | Propagate W3C `traceparent` through gRPC code mode for distributed tracing |
| [#41011](https://github.com/openai/codex/pull/41011) | **Closed** | Reduce skill catalog prompt size via path aliases (budget optimization) |
| [#41006](https://github.com/openai/codex/pull/41006) | **Closed** | Trust invoked user skills in Guardian reviews — record explicit/implicit invocations as auth evidence |
| [#41005](https://github.com/openai/codex/pull/41005) | **Closed** | Attach verified access context (`cyber_trusted_access`) to eligible plugin MCP calls |
| [#40991](https://github.com/openai/codex/pull/40991) | **Closed** | Support standalone function outputs in turn routing (start/steer turns with `function_call_output` sans `call_id`) |

**Theme**: Heavy investment in observability (tracing, metadata), security (encryption, trusted access), and agent orchestration (delegation, skill trust, turn routing).

---

## Feature Request Trends

From the issue corpus, developers are consistently asking for:

1. **Usage visibility** — Persistent UI for 5-hour/weekly rate limits ([#24182](https://github.com/openai/codex/issues/24182), 13 comments, 10👍)
2. **Terminal theming sync** — TUI should respect in-place theme changes via `DECSET 2031` ([#38575](https://github.com/openai/codex/issues/38575))
3. **Project context reliability** — Windows: new local chats in ChatGPT projects fail to sync context ([#35127](https://github.com/openai/codex/issues/35127))
4. **Remote session fidelity** — Mobile/remote must maintain task/goal state, approvals, and stop controls ([#25606](https://github.com/openai/codex/issues/25606))
5. **Copy/paste round-tripping** — Skill and `@` mentions survive copy/paste intact ([#39905](https://github.com/openai/codex/issues/39905))

---

## Developer Pain Points

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows 26.820.x is fundamentally broken** | 8 critical issues in 24h: startup failure, MCP transport, WSL, CLI relocation, terminal, 8-min hang | Blocks entire Windows user base; high Pro/Plus subscription impact |
| **MCP transport instability** | `#40715`, `#40819`, `#40881`, `#40865` — all "invalid transport in mcp_servers.codex_app" | Breaks agent-tool bridging, browser/computer-use, inter-task coordination |
| **Silent automation failures** | `#38350`: scheduled tasks self-disable without notification | Undermines trust in "set and forget" workflows |
| **Token burn without progress** | `#38495`: code-mode `exec` degrades to 34.6M-token polling loop after task completes | Direct financial cost; model spins uselessly |
| **Auth/security features break app** | `#40611`: Advanced Account Security → login loop | Security hardening renders app unusable |
| **Remote state desync** | `#25606`, `#40865`: mobile/SSH loses approvals, progress, stop control | Remote workflows unreliable |

---

## Quick Links
- **Full changelog**: [v0.150.0 → v0.150.1](https://github.com/openai/codex/compare/rust-v0.150.0...rust-v0.150.1)
- **All issues updated today**: [GitHub Issues](https://github.com/openai/codex/issues?q=updated%3A2026-08-27)
- **All PRs updated today**: [GitHub PRs](https://github.com/openai/codex/pulls?q=updated%3A2026-08-27)

*Digest generated from github.com/openai/codex data as of 2026-08-27*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-27

## 1. Today's Highlights
- **Security fix shipped**: Nightly `v0.59.0-nightly.20260827` patches an SSRF vulnerability in MCP OAuth metadata discovery and authentication (PR #29081), enforcing HTTPS for remote endpoints and validating origin matching per RFC 9728/8414.
- **License/authentication regression**: Issue #28912 (44 comments, 9 👍) reports users hitting "You do not have a valid license of this product" on sign-in, suggesting a widespread auth/licensing breakage affecting non-enterprise users.
- **Core stability work continues**: Multiple PRs address fail-open configs, sandbox DEBUG flag normalization, Whisper atomic downloads, and bash variable-expansion bypasses — indicating a hardening sprint across config, sandbox, and voice pipelines.

## 2. Releases
| Version | Date | Key Changes |
|---------|------|-------------|
| `v0.59.0-nightly.20260827.g3c311beac` | 2026-08-27 | **Security**: Prevent SSRF in MCP OAuth metadata discovery & authentication (PR [#29081](https://github.com/google-gemini/gemini-cli/pull/29081)). Enforces HTTPS for remote OAuth endpoints, validates origin matching, and restricts loopback HTTP to local MCP servers only. |

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#28912](https://github.com/google-gemini/gemini-cli/issues/28912) | **"You do not have a valid license" on sign-in** | Blocks all non-enterprise users from authenticating; likely a backend/config regression. | 44 comments, 9 👍 — highest engagement in 24h. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS** | Masks real failures; subagent claims success despite hitting turn limit before any work. | 13 comments, 2 👍 — P1, needs retest. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Core agent delegation path broken; folder creation hangs for >1hr. Workaround: disable subagents. | 8 comments, 8 👍 — P1, blocks workflows. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell exec stuck at "Waiting input" after completion** | Frequent false "awaiting user input" state on simple commands; breaks automation flow. | 4 comments, 3 👍 — P1, medium effort. |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model's bash affinity via zero-dep sandboxing** | Strategic: align tooling with model's native POSIX strengths (grep/sed/awk) for faster, cheaper ops. | 8 comments, 1 👍 — P2, large effort, enhancement. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping** | Could reduce token noise & turns via precise method-bound reads; eval needed for ROI. | 7 comments, 1 👍 — P2, customer issue. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Model underuses skills & sub-agents** | Custom skills (gradle, git) ignored unless explicitly invoked; hurts discoverability. | 6 comments — P2, needs retest. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Wastes cycles re-processing unreadable transcripts; needs quarantine/backoff. | 5 comments — P2. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory: deterministic redaction & reduce logging** | Secrets sent to model before redaction; service logs skill data — privacy/ops risk. | 4 comments — P2, security. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent: session takeover & lock recovery** | Fail-fast on locked profile breaks persistent sessions; needs graceful recovery. | 4 comments — P3, customer issue. |

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#29081](https://github.com/google-gemini/gemini-cli/pull/29081) | **CLOSED** | **Security**: SSRF fix in MCP OAuth discovery — enforces HTTPS, validates origins, allows loopback HTTP only for local servers. Shipped in tonight’s nightly. |
| [#28902](https://github.com/google-gemini/gemini-cli/pull/28902) | **OPEN** | **Security**: Blocks `$VAR` / `${VAR}` variable-expansion bypass (GHSA-wpqr-6v78-jr5g); hardens issue-dedup workflow. P1. |
| [#28787](https://github.com/google-gemini/gemini-cli/pull/28787) / [#28794](https://github.com/google-gemini/gemini-cli/pull/28794) | **CLOSED** | **Core**: Fix fail-open & data-loss on corrupt MCP enablement config (`mcp-server-enablement.json`). JSON parse errors no longer treated as empty config. P1. |
| [#28914](https://github.com/google-gemini/gemini-cli/pull/28914) | **OPEN** | **Core**: Move on-retry nudge from `systemInstruction` → `contents` suffix to preserve prefix caching; ensures model sees recovery hint. |
| [#28917](https://github.com/google-gemini/gemini-cli/pull/28917) | **OPEN** | **Core**: Atomic Whisper model downloads (`.downloading` temp file), backpressure handling, length verification, cleanup on failure. Fixes #28644. |
| [#28916](https://github.com/google-gemini/gemini-cli/pull/28916) | **OPEN** | **Core**: Line-buffer Whisper stdout chunks to reassemble split timestamped lines; fixes dropped transcriptions in voice mode (#28648). |
| [#28911](https://github.com/google-gemini/gemini-cli/pull/28911) / [#28904](https://github.com/google-gemini/gemini-cli/pull/28904) | **OPEN** | **Platform**: Normalize sandbox `DEBUG` flag semantics — only `true`/`1` enabled; `false`/`0` disabled. Aligns launcher, container entrypoint, CLI config. |
| [#28903](https://github.com/google-gemini/gemini-cli/pull/28903) | **OPEN** | **CLI**: Ignore escaped `@` (`\@`) in completion trigger detection; prevents false `@` completion activation. P1. |
| [#28905](https://github.com/google-gemini/gemini-cli/pull/28905) | **OPEN** | **Docs**: Correct auth guidance — remove stale individual Google account sign-in rec; point free/Pro/Ultra users to Antigravity CLI for subscription-backed terminal access. |
| [#29099](https://github.com/google-gemini/gemini-cli/pull/29099) | **OPEN** | **Security/Core**: Fail-closed workspace trust; filter repo-defined `mcpServers` in restricted mode (A2A server). Prevents unintended process execution. |

## 5. Feature Request Trends (from Issues)
1. **Model-native tooling alignment** — Strong push to leverage Gemini’s bash/POSIX affinity (grep, sed, awk) via zero-dependency sandboxing (#19873) and AST-aware reads (#22745, #22746) to cut tokens/turns.
2. **Subagent & skill orchestration** — Requests for automatic skill/subagent invocation (#21968), trajectory visibility in `/chat share` (#22598), and local subagent sprint (#20195).
3. **Memory system hardening** — Quarantine invalid patches (#26523), stop indefinite low-signal retries (#26522), deterministic redaction pre-model (#26525).
4. **Browser agent resilience** — Session takeover, lock recovery (#22232), Wayland support (#21983), settings.json override respect (#22267).
5. **Configurable routing & evals** — Numeric complexity→model mapping (#27406), behavioral evals for skills/fetch (#28788), steering eval stabilization (#23313).

## 6. Developer Pain Points (Recurring Frustrations)
- **Authentication/licensing breaks** — #28912 shows a critical auth path regression affecting non-enterprise users; high urgency.
- **Agent hangs & false success** — Generalist agent hangs (#21409), subagents report GOAL success after turn limits (#22323), shell commands stuck at "Waiting input" (#25166).
- **Tool sprawl & 400 errors** — >128/400 tools causes 400 errors (#24246); model creates temp scripts in random dirs (#23571), destructive git ops (#22672).
- **Observability gaps** — Bug reports lack subagent context (#21763); subagent trajectories not shareable (#22598); Auto Memory logging leaks secrets (#26525).
- **Platform friction** — Wayland browser agent failure (#21983), terminal resize flicker (#21924), symlinked agents not recognized (#20079), escaped `@` breaking completion (#28903).

---

*Generated from `google-gemini/gemini-cli` GitHub data (releases, issues, PRs updated 2026-08-26 → 2026-08-27).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-27

---

## 1. Today's Highlights

Three prerelease builds (v1.0.81-12 through -14) landed in the last 24 hours, delivering faster session resumption, OpenTelemetry trace context for hooks, and Windows WAM authentication for Entra-ID–protected MCP servers. Meanwhile, the issue tracker shows a cluster of high-impact regressions in the 1.0.80+ line: MCP schema eager-loading inflating prompt tokens by ~350K, a runaway FileWatch loop freezing the TUI and bloating logs to 13 GB, and Gemini models rejecting valid MCP tool schemas with union-type array items. No PRs were updated today, indicating the team is in a rapid-fire patch cycle rather than feature development.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v1.0.81-14** | **Improved**: Large sessions resume faster by streaming recent history first while older messages load in background.<br>**Fixed**: Repeated `read_agent` calls now consistently return full turn history unless `since_turn` is specified. |
| **v1.0.81-13** | **Added**: Hooks receive OpenTelemetry trace context (`traceparent`, `tracestate`) and emit correlated spans; command hooks also get env vars.<br>**Fixed**: Hook lifecycle events (`hook.start`/`hook.end`) from hooks inside subagents now fire correctly. |
| **v1.0.81-12** | **Added (Windows)**: Remote MCP servers protected by Microsoft Entra ID can sign in via the OS authentication broker (WAM), usually without a prompt. Other platforms retain browser/device-code flow.<br>**Fixed**: Repeated resumin… *(truncated in feed)* |

> All three builds are on the **prerelease** channel. Run `copilot update prerelease` to test.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4613](https://github.com/github/copilot-cli/issues/4613) | **High-severity 1.0.80+ regression: MCP schemas eagerly injected, adding 354K startup tokens** | Every session now sends the full ambient MCP catalog on the first request, even for trivial prompts. Massive token cost & latency hit. | 👍 0 · 2 comments · **Critical regression** |
| [#4612](https://github.com/github/copilot-cli/issues/4612) | **Runaway FileWatch host-event loop freezes TUI and grows debug log to 13 GB** | Long-running/resumed sessions enter a tight `FileWatch` loop, making the UI unresponsive and consuming disk. | 👍 1 · 4 comments · **Data-loss risk** |
| [#4623](https://github.com/github/copilot-cli/issues/4623) | **Gemini models fail with 400 for any MCP tool whose array `items` has a union type (e.g. `["object","null"]`)** | Blocks all Gemini usage with common MCP schemas; GPT/Claude unaffected. Includes reproducible test case. | 👍 0 · 0 comments · **Model-specific blocker** |
| [#4533](https://github.com/github/copilot-cli/issues/4533) | **Terminal UI stops consuming events when a turn spawns parallel subagents** | TUI freezes (input + scroll dead) while Rust runtime continues; subagents keep working for minutes. | 👍 0 · 3 comments · **UX regression** |
| [#4605](https://github.com/github/copilot-cli/issues/4605) | **`latest-prerelease` lookup strands users on 1.0.81-9** | GitHub API returns releases with identical `created_at`; CLI picks the first (older) build, blocking auto-updates. | 👍 3 · 1 comment · **Update channel broken** |
| [#4485](https://github.com/github/copilot-cli/issues/4485) | **Theme turns light over night (macOS)** | Dark theme flips to light after sleep/wake cycle, tracking system appearance instead of user setting. | 👍 2 · 3 comments · **Persistent annoyance** |
| [#4103](https://github.com/github/copilot-cli/issues/4103) | **Plugin marketplace clone disables Git credential helpers, breaking private HTTPS repos** | Regression from v1.0.70 “fail fast” change; manual clone works but marketplace install fails. | 👍 3 · 3 comments · **Enterprise blocker** |
| [#4629](https://github.com/github/copilot-cli/issues/4629) | **Plugin hooks not loaded when a session is resumed via `--resume`** | Fresh sessions fire all hooks; resumed sessions fire none. `loadDeferredRepoHooks()` runs but hooks missing. | 👍 0 · 0 comments · **New today, high visibility** |
| [#4628](https://github.com/github/copilot-cli/issues/4628) | **Autopilot background-task timeout exits active parent after subagent completes** | 600s timeout starts when parent goes idle, not when subagent finishes; kills whole process mid-work. | 👍 0 · 0 comments · **New today, autopilot users affected** |
| [#252](https://github.com/github/copilot-cli/issues/252) | **Global Instructions File Support** (CLOSED) | Long-standing request for a single global instructions file instead of per-repo duplication. | 👍 12 · 11 comments · **High demand, now closed** |

---

## 4. Key PR Progress

*No pull requests were updated in the last 24 hours.* The project appears to be shipping fixes directly via prerelease tags rather than merging PRs at this moment.

---

## 5. Feature Request Trends

1. **Global/shared configuration** — #252 (global instructions), #4622 (configurable user-level discovery paths for agents/skills/hooks/instructions), #407 (`/tools` slash command). Developers want portable, cross-repo settings.
2. **MCP ergonomics** — #3889 (stdio transport in ACP mode), #4525 (legacy `initialize` after modern `server/discover`), #4613 (defer schema injection). The ecosystem is standardizing on MCP; CLI must keep pace.
3. **Session durability & auditability** — #4621 (verifiable rubber-duck review records), #4629 (hooks on resume), #4433 (non-interactive permission persistence). Teams need replayable, auditable sessions.
4. **Model-agnostic tooling** — #4155 (Gemini 400s), #4623 (Gemini union-type arrays), #4588 (tool search disabled for non-Anthropic models). Multi-model support is uneven.
5. **TUI/UX polish** — #1785 (input-bar shortcuts), #4485 (theme persistence), #4624 (“Open in VS Code” discoverability), #4615 (`/copy` on Wayland). Daily-driver friction.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Affected Versions |
|------------|----------|-------------------|
| **Token bloat from eager MCP schema injection** | #4613 (354K tokens), #4588 (47k vs 21k tokens) | 1.0.80+ |
| **Session resumption broken for plugins/hooks** | #4629 (hooks missing), #4433 (permissions revoked mid-session) | 1.0.81 prereleases |
| **TUI freezes under parallel subagents or FileWatch loops** | #4533 (parallel subagents), #4612 (FileWatch loop) | 1.0.81-4/5, long sessions |
| **Gemini model compatibility regressions** | #4155 (400 Bad Request), #4623 (union-type arrays), #4588 (no tool search) | All recent |
| **Authentication & credential helper regressions** | #4103 (marketplace disables helpers), #4627 (quota validation null), #3889 (stdio MCP rejected) | 1.0.70+, 1.0.81-9/12 |
| **Update channel unreliable** | #4605 (stranded on 1.0.81-9) | prerelease |
| **Platform-specific clipboard/Wayland issues** | #4615 (`/copy` fails on GNOME/Mutter) | 1.0.80+ |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-08-27. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-27

## 1. Today's Highlights
No new releases in the past 24 hours. Community activity centers on a critical UI bug where scheduled cron reminders overwrite in-progress assistant replies (Issue #2620), and a version-discrepancy question (Issue #2618). A cancellation-propagation fix for the `soul` subsystem landed in PR #2619, addressing a nested-task leak.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues
| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **#2620** | [Cron fire mid-reply swallows the previous assistant reply; unrecoverable via Ctrl+O](https://github.com/MoonshotAI/kimi-cli/issues/2620) | **High-severity UX regression**: scheduled reminders silently replace the visible assistant turn, breaking transcript integrity and making prior context irretrievable. Affects any workflow using cron reminders. | 0 comments / 0 👍 (new, needs triage) |
| **#2618** | [官方脚本安装的最新版本是0.38，这个怎么是1.49](https://github.com/MoonshotAI/kimi-cli/issues/2618) | **Versioning confusion**: users report a mismatch between the official install script (v0.38) and the CLI’s self-reported version (v1.49), suggesting inconsistent release channels or tagging. | 0 comments / 0 👍 (language barrier may limit visibility) |

## 4. Key PR Progress
| # | PR | Status | Summary |
|---|----|--------|---------|
| **#2619** | [fix(soul): cancel nested task on outer cancellation](https://github.com/MoonshotAI/kimi-cli/pull/2619) | Open | Ensures `asyncio.wait()` in `run_soul` participates in lifecycle cleanup; cancels & awaits nested soul/cancel-event tasks when the outer coroutine is cancelled. Includes a regression test for mid-execution cancellation. Fixes #2615. |

## 5. Feature Request Trends
*Insufficient issue volume in the last 24h to infer trends. Historically, the repo sees requests around:*
- **Session persistence & transcript reliability** (e.g., #2620)
- **Installation / versioning clarity** (e.g., #2618)
- **Cancellation & concurrency robustness** (e.g., #2615 → #2619)

## 6. Developer Pain Points
1. **Transcript loss under async events** — Cron reminders overwrite assistant output without recovery path (Ctrl+O fails).  
2. **Version mismatch between install script and binary** — Creates uncertainty about which build is “official.”  
3. **Cancellation propagation gaps** — Nested async tasks survive outer cancellation, risking resource leaks (addressed in #2619).

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` (issues & PRs updated 2026-08-26 → 2026-08-27).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-27

## 1. Today's Highlights
No new releases today, but the issue tracker reveals two critical stability themes: **subagent runaway loops** burning tokens for 50+ minutes without protection, and **TUI render-thread saturation** (97% CPU) during multi-subagent sessions. A massive **Memory Megathread** (#20695, 138 comments) continues aggregating heap snapshots to diagnose scattered OOM reports. On the PR side, a WebSocket RPC layer for the HTTP API (#45488) and durable-session lifecycle fixes (#45482, #45481) signal 2.0 infrastructure hardening.

## 2. Releases
None in the last 24 hours.

## 3. Hot Issues (10 noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | Central clearinghouse for all OOM/heap reports; explicit request for heap snapshots, not LLM guesses. | 138 comments, 105 👍 — highest engagement in repo |
| [#45442 Subagent infinite loop: 364 identical `grep` calls over ~50 min](https://github.com/anomalyco/opencode/issues/45442) | No loop detection → uncontrolled token burn; background `general` subagent stuck repeating same tool call. | New today, 3 comments — critical reliability gap |
| [#43603 Agent lacks no-progress/loop detection during repeated file investigation](https://github.com/anomalyco/opencode/issues/43603) | Agent re-tries missing paths indefinitely instead of stopping or asking for clarification. | 3 comments, mirrors #45442 pattern |
| [#43673 Agent non-terminating loop, repeats identical tool calls](https://github.com/anomalyco/opencode/issues/43673) | Same symptom: dozens of identical `grep` calls, zero progress, manual abort required. | 3 comments — recurring loop class |
| [#42657 TUI lag with multi-subagent sessions (97% CPU on render thread)](https://github.com/anomalyco/opencode/issues/42657) | 1–3 s typing delay, spinner freezes across Warp/Windows Terminal/WezTerm; profiled render thread saturation. | 4 comments — UX blocker for parallel work |
| [#37314 Orphan sub-sessions not cleaned up when parent aborts](https://github.com/anomalyco/opencode/issues/37314) | Sub-agents stay in `tool-calls` state indefinitely, leaking resources after parent timeout/cancel/error. | 3 comments — resource leak |
| [#35066 Subagent sessions should notify parent on finish](https://github.com/anomalyco/opencode/issues/35066) | Missing synthetic result message back to parent; only foreground `task` calls propagate output. | 3 comments — breaks composition |
| [#44958 Refusal response hidden, conversation history disappears (OpenCode Go)](https://github.com/anomalyco/opencode/issues/44958) | Runs finish with no UI response/error; stream completes but UI shows nothing. | 5 comments — SaaS user impact |
| [#37216 i18n support for TUI (terminal interface)](https://github.com/anomalyco/opencode/issues/37216) | TUI hardcoded English while desktop/console have 17+ locales; blocks non-English users. | 3 comments — long-standing gap |
| [#45496 `opencode agent list` prints 8,600+ lines of expanded permission rules](https://github.com/anomalyco/opencode/issues/45496) | Inventory command dumps full inherited rulesets per agent, overflowing terminals/CI logs. | New today — CLI usability regression |

## 4. Key PR Progress (10 important)

| PR | Type | Summary |
|----|------|---------|
| [#45491 fix(opencode): edit tool reports fuzzy matches as exact success](https://github.com/anomalyco/opencode/pull/45491) | Bug fix | Addresses #34424 points 2/3; stops `edit.txt` from misreporting fuzzy matches. |
| [#45497 fix(app): prevent renderer OOM on multiline paste](https://github.com/anomalyco/opencode/pull/45497) | Bug fix | 1k-line paste → 2k input events → reparse/serialize storm; guards heap exhaustion. |
| [#45488 feat(server): expose HTTP API over WebSocket RPC](https://github.com/anomalyco/opencode/pull/45488) | Feature (2.0) | Authenticated Effect RPC at `/api/rpc`; 131 contracts derived from HTTP schemas. |
| [#45482 fix(task): make async subagent tasks answer honestly, once, in order, and stop](https://github.com/anomalyco/opencode/pull/45482) | Bug fix | Closes #45480; ensures trailing confirmation message, stops runaway async children. |
| [#45481 feat(core): open durable sessions with live capabilities](https://github.com/anomalyco/opencode/pull/45481) | Feature | Host can supply executable tools/model directly; avoids directory-discovered config drift on resume. |
| [#45381 refactor(ai): consolidate provider error diagnostics](https://github.com/anomalyco/opencode/pull/45381) | Refactor | `AIError` wraps tagged reason errors with cause, HTTP context, original body — removes duplicate diagnostics. |
| [#45494 fix(app): stop shimmer when background shells finish](https://github.com/anomalyco/opencode/pull/45494) | Bug fix | Uses live shell registry; prevents perpetual shimmer after background completion. |
| [#45495 fix(app): precache complete builds before serving cached HTML](https://github.com/anomalyco/opencode/pull/45495) | Perf | Service worker precaches full build; avoids serving partial HTML on subsequent navigations. |
| [#45476 fix(core): apply plugin environment to v2 bash](https://github.com/anomalyco/opencode/pull/45476) | Feature | V2 Bash now invokes `shell.env` plugin hook — plugin-provided env vars finally work. |
| [#45485 fix(provider): update Mistral SDK for streaming tool calls](https://github.com/anomalyco/opencode/pull/45485) | Bug fix | `@ai-sdk/mistral` 3.0.51 → 3.0.59; accumulates streaming tool-call args, reuses IDs across fragments. |

## 5. Feature Request Trends
1. **Subagent governance** — Loop detection, timeout guards, parent notification, orphan cleanup (issues #45442, #43603, #43673, #37314, #35066, #45480).
2. **TUI parity with desktop** — i18n (#37216, #45490), font rendering (#45350), crash on `/` in branch names (#45493), mobile/QR remote control (#45437).
3. **Multi-account & provider UX** — Web UI account switcher (#45484), usage/cost for OpenAI-compatible providers (#45483), Codex Fast tier parity (#39864).
4. **Plugin extensibility** — Localization hooks for built-in TUI strings (#45490), config authority for embedded runtimes (#45492), tool-call repair before lookup (#45453).
5. **Observability** — Token/cost visibility everywhere, structured error diagnostics (#45381), session timeline truncation (#45479).

## 6. Developer Pain Points
- **Runaway subagents** are the top reliability complaint: identical tool calls loop for minutes/hours with zero progress, no built-in circuit breaker, and tokens burn unchecked.
- **Memory pressure** is pervasive enough to warrant a dedicated megathread; developers are asked to supply heap snapshots manually.
- **TUI render thread** becomes a bottleneck at 2–4 concurrent subagents, making the terminal unusable across all major terminal emulators.
- **Orphaned resources** — aborted parents leave sub-sessions, task calls, and shells dangling; no automatic cleanup or parent notification.
- **CLI output explosions** — `agent list` dumps 8k+ lines of permission rules; no summary/inventory mode.
- **Web UI feature gap** — Multi-account management, provider usage metrics, and session recovery are CLI-only.
- **Localization absent from TUI** — Hardcoded English strings despite mature i18n in sibling packages.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-27

## 1. Today's Highlights
The Pi ecosystem saw a surge of rapid-fire fixes addressing regressions in v0.84.3, including a critical proxy-agent constructor crash, a Windows PowerShell command-injection bug, and a TUI rendering regression that broke text wrapping. Meanwhile, the long-standing auto-compaction failure (#6879) remains open with high community engagement (24 comments, 19 👍), signaling persistent context-window pressure in agentic workflows. Provider support expanded with GLM-5.3 Flash on Z.AI/OpenRouter and NVIDIA InferenceHub promoted to a first-class built-in provider.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **Auto-compaction never triggers past 100% context until provider overflow** | Agents can run for hours past the compaction threshold, only compacting when the API rejects the request (373k tokens). Blocks long-running agentic tasks. | 24 comments, 19 👍 — highest engagement in dataset |
| [#8610](https://github.com/earendil-works/pi/issues/8610) | **Regression v0.84.3: `HttpsProxyAgent is not a constructor` with google-vertex + proxy** | Code-splitting bundle change broke proxy support for Vertex/Gemini; immediate blocker for corp networks. | 4 comments, rapid PR fix (#8707 adjacent) |
| [#8582](https://github.com/earendil-works/pi/issues/8582) | **Built-in powershell tool uses WinPS 5.1 in interactive mode, but pwsh in `-p` mode** | Inconsistent shell behavior confuses users; PowerShell 7 features unavailable interactively. | 7 comments, Windows-specific pain point |
| [#8688](https://github.com/earendil-works/pi/issues/8688) | **[Windows] Stray `.` prepended to every powershell command breaks first word** | `.Get-ChildItem` parsed as member access; silently corrupts every command. | 3 comments, critical UX break |
| [#7724](https://github.com/earendil-works/pi/issues/7724) | **Cold restore replays overflow assistant removed by live recovery** | Session reload re-injects truncated/failed assistant messages, polluting history. | 4 comments, data-integrity issue |
| [#8675](https://github.com/earendil-works/pi/issues/8675) | **TUI renders text one word per line (WSL2/Windows Terminal)** | Markdown paragraphs and thinking blocks become unreadable vertical lists. | 2 comments, 2 👍, visual regression |
| [#8705](https://github.com/earendil-works/pi/issues/8705) | **Unhandled rejection in agentLoop leaves EventStream hanging** | Uncaught promise rejections stall the event stream indefinitely; requires process restart. | 2 comments, core stability |
| [#8706](https://github.com/earendil-works/pi/issues/8706) | **zai thinking handler leaks reasoning into output for forced-thinking models** | `glm-5.3/5.3-flash` with thinking=off still sends `thinking: {type:"disabled"}`, causing provider to emit reasoning tokens. | 2 comments, provider-compat bug |
| [#8665](https://github.com/earendil-works/pi/issues/8665) | **Escape hatch to force OSC 8 hyperlinks (detection fails behind PTY proxies)** | Users behind proxies (tmux, ssh, CI) cannot enable clickable links; no override exists. | 3 comments, accessibility/UX |
| [#8391](https://github.com/earendil-works/pi/issues/8391) | **Reliable system prompt customization** | Three existing methods all have flaws; impossible to reliably override parts of the default prompt while preserving plugin additions. | 2 comments, 1 👍, extensibility gap |

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#7602](https://github.com/earendil-works/pi/pull/7602) | **feat(coding-agent): configurable summarization models** | Adds per-task model/thinking selection for compaction & branch summaries; handles provider context-window errors. Closes #7553. | Open |
| [#8708](https://github.com/earendil-works/pi/pull/8708) | **fix(coding-agent): resolve fd/rg versions without GitHub API** | Eliminates anonymous API quota exhaustion (60 req/hr/IP) on shared egress by using static version manifests. Fixes #8594. | Open |
| [#8707](https://github.com/earendil-works/pi/pull/8707) | **fix(ai): keep zai thinking enabled for forced-thinking models** | When `reasoningEffort=undefined` (thinking=off), stops sending `thinking:{type:"disabled"}` for models where `thinkingLevelMap.off===null` (GLM-5.3/5.3-flash). | Closed |
| [#5268](https://github.com/earendil-works/pi/pull/5268) | **fix(tui): render hardware cursor by default** | Prompt cursor now hollows on blur (fixes #3896); unfocused windows no longer appear active. Long-standing UX polish. | Closed |
| [#8704](https://github.com/earendil-works/pi/pull/8704) | **fix(agent): end event stream on unhandled loop rejection** | Adds `.catch()` to `agentLoop`/`agentLoopContinue` promise chains to terminate `EventStream` on rejection. Fixes #8705. | Closed |
| [#8690](https://github.com/earendil-works/pi/pull/8690) | **feat(ai): add GLM-5.3 Flash to Z.AI catalogs** | Durable override for both Z.AI Coding Plan catalogs; preserves 1M context, 131k output, reasoning compat. | Closed |
| [#8699](https://github.com/earendil-works/pi/pull/8699) | **fix(tui): remove coding-agent config reads from pi-tui** | Decouples TUI from agent config; uses `getAgentDir()` passed at construction. Fixes #8698. | Closed |
| [#8696](https://github.com/earendil-works/pi/pull/8696) | **fix(tui): handle Apple Terminal meta arrows** | Recognizes `ESC ESC [A-D` (Option+arrows) as Alt+arrows; buffers double-ESC for fragmented stdin. Fixes #8697. | Closed |
| [#8694](https://github.com/earendil-works/pi/pull/8694) | **fix(ai): expose low reasoning effort for DeepSeek V4 Pro** | Enables `low` thinking level for `deepseek-v4-pro` on native/opencode providers, matching `v4-flash`. Fixes #8695. | Closed |
| [#8346](https://github.com/earendil-works/pi/pull/8346) | **fix(coding-agent): repair unterminated session tails** | Detects malformed JSONL tails at load; truncates invalid fragments or adds missing delimiter before next append. Fixes #8345. | Closed |
| [#8627](https://github.com/earendil-works/pi/pull/8627) | **[pkg:coding-agent] Use ctx.cwd for cwd-sensitive tools** | `read`/`write`/`edit`/`grep`/`find`/`ls` now resolve paths against `ExtensionContext.cwd` at execution time. Fixes #8679. | Closed |
| [#8671](https://github.com/earendil-works/pi/pull/8671) | **fix(ai): serialize thinking signature once** | Eliminates O(n²) re-serialization of accumulated `reasoning_details` during streaming; accumulates in memory, serializes once. Fixes #8648. | Closed |

## 5. Feature Request Trends
From the issue corpus, four clear directions emerge:
1. **Prompt & System Prompt Control** — Users want granular, reliable overrides of the default system prompt without fighting plugin injection (#8391, #8712).
2. **Session & History Management** — Demand for faster `/resume` (lazy parsing, #8710), cleaner cold restores (#7724), and repair of corrupted session tails (#8346).
3. **Provider & Model Parity** — Rapid onboarding of new models (GLM-5.3 Flash #8690/#8692, Qwen3.8-flash #8709, DeepSeek V4 Pro low thinking #8694) and built-in provider promotion (NVIDIA InferenceHub #8664).
4. **Terminal UX Polish** — Mouse cursor positioning (#8701, #8547), text selection semantics (#8676, #8674), hyperlink forcing (#8665), and key-binding completeness (#8696).

## 6. Developer Pain Points
- **Context-window runaway**: Auto-compaction silently fails past 100% (#6879), forcing API-level crashes as the only backstop.
- **Proxy/Network fragility**: `PI_OFFLINE` over-disables model discovery (#8684); proxy agent constructor regression (#8610); GitHub API quota exhaustion for tool downloads (#8708).
- **Windows/WSL2 second-class experience**: PowerShell version mismatch (#8582), command-injection bug (#8688), TUI word-wrapping breakage (#8675), transcript "reload" flicker in long sessions (#8685).
- **Extension API gaps**: No way to terminate a turn from a tool result (#7824), inconsistent `before_agent_start` emission (#8712), and TUI reading agent config directly (#8699).
- **Streaming performance**: O(n²) thinking-signature serialization (#8671) and per-token `reasoning_details` objects pegging CPU at 100% (#8711).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-27

---

## 1. Today's Highlights

Qwen Code **v0.22.2** ships a breaking architectural change: the persistent Node REPL is now delivered as a standalone MCP server ([#9499](https://github.com/QwenLM/qwen-code/pull/9499)), decoupling runtime execution from the core CLI. The release also includes **Desktop v0.2.2** and **cua-driver-rs v0.20.1** with notarized macOS binaries. Meanwhile, the web shell (`qwen serve`) sees active stability work—DingTalk channel routing, session rename hangs, and multi-agent roster persistence are all under investigation.

---

## 2. Releases

| Version | Key Changes |
|---------|-------------|
| **v0.22.2** | **Breaking**: `refactor(node-repl)!` — Persistent Node REPL extracted to a standalone MCP server ([#9499](https://github.com/QwenLM/qwen-code/pull/9499)). Improves isolation and enables independent versioning. |
| **desktop-v0.2.2** | Desktop app update (details in [release.yml](https://github.com/QwenLM/qwen-code/blob/7b69293266441dc60846d6d8a50efa1b2cad1eb4/.github/release.yml)). |
| **cua-driver-rs-v0.20.1** | Prebuilt binaries for macOS (codesigned + notarized universal + `.app`), Linux (x86_64/arm64, glibc 2.31), Windows (x86_64/arm64), and Node.js (`@qwen-code/cua-driver`). Vendored under `packages/cua-driver`. |

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#10227](https://github.com/QwenLM/qwen-code/issues/10227) | **Custom model provider fails: invalid JSON schema for tools** | Blocks BYOM (Bring Your Own Model) workflows; schema validation rejects Moonshot-flavored function definitions. | 5 comments, P2 bug, `scope/content-generation` — active triage. |
| [#10248](https://github.com/QwenLM/qwen-code/issues/10248) | **DingTalk messages land in Tasks tab instead of Channels** | Web shell channel routing broken for a major enterprise integration; affects dogfooding. | 2 comments, P2, `dogfooding` — high visibility internally. |
| [#10246](https://github.com/QwenLM/qwen-code/issues/10246) | **Session rename in web UI spins indefinitely** | Core UX regression in `qwen serve`; rename never completes, loading indicator stuck. | 2 comments, P2, `scope/session-management` — reproducible with screenshot. |
| [#10247](https://github.com/QwenLM/qwen-code/issues/10247) | **Better Agent Team — stability audit follow-ups & backlog** | Tracking issue for multi-agent reliability; consolidates lifecycle races, spawn failures, and UX gaps. | 2 comments, `roadmap/multi-agent` — strategic priority. |
| [#10172](https://github.com/QwenLM/qwen-code/issues/10172) | **Headless/ACP hosts don’t stamp tool results → Goals evidence broken** | Goal-based verification fails in non-interactive modes; evidence builder requires turn permit. | Closed via [#10175](https://github.com/QwenLM/qwen-code/pull/10175) — fix merged. |
| [#10070](https://github.com/QwenLM/qwen-code/issues/10070) | **Web shell: allow hosts to hide session source switch** | Embedding use case: hosts need to lock UI to Tasks only, prevent Channels leakage. | Closed via [#10079](https://github.com/QwenLM/qwen-code/pull/10079) — feature delivered. |
| [#10250](https://github.com/QwenLM/qwen-code/issues/10250) | **Deferred autofix findings from PR #10230** | Automated review surfaced out-of-scope fixes; maintainers must triage manually. | Bot-created, 0 comments — process hygiene. |
| [#10223](https://github.com/QwenLM/qwen-code/issues/10223) | **Ghost teammates persist in roster after failed concurrent spawn** | Multi-agent roster corruption; config.json drifts from in-memory state. | PR [#10223](https://github.com/QwenLM/qwen-code/pull/10223) open with fix. |
| [#10149](https://github.com/QwenLM/qwen-code/issues/10149) | **Add configurable Mem0 extension skeleton** | First step toward pluggable long-term memory (Mem0 provider); retrieval-only stdio extension. | PR [#10149](https://github.com/QwenLM/qwen-code/pull/10149) open, part of [#10113](https://github.com/QwenLM/qwen-code/issues/10113). |
| [#10156](https://github.com/QwenLM/qwen-code/issues/10156) | **Stop enforcing public-only extension network policy in `qwen serve`** | Allows private/air-gapped extension installs; removes unnecessary restriction. | PR [#10156](https://github.com/QwenLM/qwen-code/pull/10156) open. |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#9499](https://github.com/QwenLM/qwen-code/pull/9499) | **Breaking Refactor** | Node REPL → standalone MCP server. Enables independent scaling, debugging, and language-agnostic tool calling. |
| [#10175](https://github.com/QwenLM/qwen-code/pull/10175) | **Bug Fix** | Stamps tool results with Goal turn permit in headless/ACP hosts → unblocks Goal evidence in non-TUI modes. |
| [#10079](https://github.com/QwenLM/qwen-code/pull/10079) | **Feature** | Web shell: `hideSessionSourceSwitch` option pins sidebar to Tasks, hides Channels toggle for embedded hosts. |
| [#10183](https://github.com/QwenLM/qwen-code/pull/10183) | **Feature** | Memory: structured on-demand recall — two-level ref/title tree, query-focused metadata subtree, dedicated recall tool. |
| [#10115](https://github.com/QwenLM/qwen-code/pull/10115) | **UI Polish** | Session Overview → responsive data table: proportional cols, horizontal scroll, fixed edges, sorting, workspace filter, persisted pagination. |
| [#10119](https://github.com/QwenLM/qwen-code/pull/10119) | **Feature** | `qwen review emit-workflow` — deterministic script generating Step 3A agent fan-out (roster, brief, prompts, deliverables). |
| [#10169](https://github.com/QwenLM/qwen-code/pull/10169) | **Quality** | `/review --fix` now audits its own applied edits via `qwen review fix-delta --snapshot` (git tree diff, bounded agent). |
| [#10098](https://github.com/QwenLM/qwen-code/pull/10098) | **Architecture** | Decouples `permissions.allow` (pure auto-approval) from `tools.eager` (registration-time enablement) — resolves trade-off from #9829. |
| [#10100](https://github.com/QwenLM/qwen-code/pull/10100) | **Reliability** | Command hooks own POSIX process groups; bounded SIGTERM→SIGKILL reclaim on timeout/cancel. Windows uses absolute `taskkill.exe /F /T`. |
| [#10223](https://github.com/QwenLM/qwen-code/pull/10223) | **Bug Fix** | Compensating `writeTeamFile()` in `spawnTeammate()` catch block — prevents ghost members in persisted roster after failed concurrent spawn. |

---

## 5. Feature Request Trends

1. **Multi-Agent / Agent Team Maturity** — #10247, #10223, #10183: roster stability, structured memory, spawn reliability, and lifecycle audits are the dominant theme.
2. **Embeddable Web Shell Customization** — #10070/#10079, #10115: hosts need granular UI control (hide switches, override routing, responsive tables) for iframe/portal embedding.
3. **Pluggable Memory & Context Providers** — #10149 (Mem0), #10183 (structured recall): demand for vendor-neutral, configurable long-term memory extensions.
4. **Goal/Verification in Headless Modes** — #10172/#10175: parity between interactive and headless/ACP hosts for evidence-based task completion.
5. **BYOM Schema Compatibility** — #10227: custom providers (Moonshot, etc.) hit strict JSON Schema validation; need adapter layer or relaxed validation.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Web shell session management bugs** | Rename hangs (#10246), channel routing broken for DingTalk (#10248), source-switch hiding needed for embeds (#10070). |
| **Multi-agent roster corruption** | Ghost teammates persist after failed spawns (#10223); concurrent operations not transactional. |
| **Headless/ACP parity gaps** | Tool results unstamped → Goals evidence unusable (#10172); fixed but reveals systemic host divergence. |
| **Custom model integration friction** | Schema validation rejects valid provider formats (#10227); no documented adapter pattern. |
| **Extension network policy too restrictive** | `qwen serve` forced public-only installs (#10156); blocks air-gapped/private registry workflows. |
| **Autofix review opacity** | Guard refusals only in run-logs, not on PR (#10117); self-targeted asset publishing warnings missing (#10251). |
| **Startup reliability** | Goal-runtime wait unbounded (fixed in #10128); Bun memory relaunch no-op on non-Bun. |

---

*Digest generated from GitHub API data (releases, issues, PRs updated 2026-08-27). Links point to live GitHub objects.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-27

## 1. Today's Highlights
The project is in a heavy refactoring and stabilization phase ahead of v0.9.12. Core work includes decomposing four mega-files (>10k lines each), fixing a runtime store lock that blocked multi-session use, and persisting context-pressure warnings in the UI. Enterprise launch readiness docs and Tailscale embedding for the web server are also landing.

## 2. Releases
**No new releases in the last 24 hours.**

## 3. Hot Issues (10 noteworthy)

| # | Issue | Why it matters | Community signal |
|---|-------|----------------|------------------|
| [#5586](https://github.com/Hmbown/CodeWhale/issues/5586) | **Decompose mega files** (lib.rs 18.7k, config.rs 12.3k, client.rs 11.1k, runtime_threads.rs 9.3k) | Technical debt cleanup lane for v0.9.12; unblocks review velocity and onboarding. | 5 comments, author-driven, no 👍 yet — internal priority. |
| [#5620](https://github.com/Hmbown/CodeWhale/issues/5620) | **Context pressure warning is transient; agent doesn’t react** | Silent degradation of safety signal; medium severity but affects trust in long sessions. | 4 comments, recent (created/updated today), design discussion active. |
| [#5533](https://github.com/Hmbown/CodeWhale/issues/5533) | **Control surface for supervised operation** (per-session socket + `External` backend) | Enables CI/automation/multiplexer supervision — key for enterprise/embedded workflows. | 4 comments, author M-Maciej (core contributor), updated today. |
| [#5630](https://github.com/Hmbown/CodeWhale/issues/5630) | **Runtime store owner lock blocks multiple sessions** (v0.9.12 regression) | Hard-fails 2nd+ CodeWhale process on same machine; blocks parallel dev/CI. | Closed via PR #5638/#5634; 1 comment, fast fix. |
| [#5637](https://github.com/Hmbown/CodeWhale/issues/5637) | **Scope MCP secret providers to owning runtime** | Security: avoids process-global env mutation; needed for embedded hosts with keyrings. | Fresh (created today), 0 comments — design-stage. |
| [#5633](https://github.com/Hmbown/CodeWhale/issues/5633) | **Unify route-specific tool projection before dispatch** | Reduces duplication across request builders; improves tool compat & diagnostics. | Fresh (created today), 0 comments — architecture cleanup. |
| [#5625](https://github.com/Hmbown/CodeWhale/issues/5625) | **Non-blocking “pending user input” peek tool** | Human-in-the-loop: lets agent peek for mid-turn guidance without blocking. | 1 comment, proposal stage, tagged enhancement. |
| [#5627](https://github.com/Hmbown/CodeWhale/issues/5627) | **Add Xquik to reviewed MCP recommendations** | UX: users currently must manually add endpoint; catalog discoverability gap. | Closed (merged), 2 comments — quick doc/catalog fix. |
| [#5624](https://github.com/Hmbown/CodeWhale/pull/5624) | **Show live session token totals** (PR, linked to #5581) | Cost transparency: streaming input/output/cache token breakdown per turn. | Closed, merged today — user-facing observability win. |
| [#5629](https://github.com/Hmbown/CodeWhale/pull/5629) | **Persist context pressure warnings** (PR, addresses #5620 display slice) | UX: sticky status for warning/high/critical pressure instead of scrolling away. | Closed, merged today — direct mitigation for #5620. |

## 4. Key PR Progress (10 important)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#5632](https://github.com/Hmbown/CodeWhale/pull/5632) | OPEN | **One worker system; retire Keychain product path** — fleet/sub-agents unified; `CODEWHALE_SECRET_BACKEND=system|keyring` no-op; secrets via `~/.codewhale/auth/*`. |
| [#5638](https://github.com/Hmbown/CodeWhale/pull/5638) | CLOSED | **Fix runtime store per session** (#5630) — default store root now `$CODEWHALE_HOME/sessions/<id>/runtime`; `CODEWHALE_RUNTIME_DIR` still allows shared root. |
| [#5634](https://github.com/Hmbown/CodeWhale/pull/5634) | CLOSED | Duplicate of #5638 (same fix, merged). |
| [#5626](https://github.com/Hmbown/CodeWhale/pull/5626) | OPEN | **Per-thread usage endpoint** (`GET /v1/threads/{id}/usage`) + session cost persistence — feeds GUI cost surface from canonical accumulation. |
| [#5631](https://github.com/Hmbown/CodeWhale/pull/5631) | OPEN | **Add OpenRouter qwen3.8-flash (1M ctx, priced)** — first-class catalog row; text+image+video input. |
| [#5635](https://github.com/Hmbown/CodeWhale/pull/5635) | OPEN | **Embed tsnet for `codewhale web --tailscale`** — opt-in Tailscale exposure; default stays loopback-only. |
| [#5636](https://github.com/Hmbown/CodeWhale/pull/5636) | OPEN | **Degrade incompatible Moonshot tools per request** — retain compatible tools, omit `tools`/`tool_choice` if none left, local reject on named choice. |
| [#5629](https://github.com/Hmbown/CodeWhale/pull/5629) | CLOSED | **Persist context pressure warnings** — sticky status for warning/high/critical; updates without redraw. |
| [#5624](https://github.com/Hmbown/CodeWhale/pull/5624) | CLOSED | **Live session token totals** — pending ledger (input/output/total/cache-hit/miss/write) during turn. |
| [#5628](https://github.com/Hmbown/CodeWhale/pull/5628) | OPEN | **Enterprise launch readiness** — `docs/ENTERPRISE.md` (operator/security packet), closes #5585/#5617. |

## 5. Feature Request Trends
1. **Supervised/embedded operation** — per-session control sockets, external runtime backend, scoped secret providers (#5533, #5637).
2. **Human-in-the-loop tooling** — non-blocking input peek, focused transcript actions (copy/expand), edit-last-turn boundaries (#5625, #5608, #5621).
3. **Cost & context observability** — live token totals, persisted pressure warnings, per-thread usage API, post-compaction token reporting (#5624, #5629, #5626, #5623).
4. **MCP ecosystem polish** — catalog recommendations (Xquik), tool projection unification, per-runtime secret scoping (#5627, #5633, #5637).
5. **Enterprise hardening** — launch docs, Tailscale web exposure, multi-session runtime isolation (#5628, #5635, #5630).

## 6. Developer Pain Points
- **Mega-file maintenance burden** — four core files >9k lines each; refactor tracked as v0.9.12 cleanup lane (#5586).
- **Multi-session lock regression** — v0.9.12 introduced machine-global owner lock; blocked parallel runs until #5638/#5634.
- **Transient safety signals** — context pressure warnings vanished into scrollback; agent didn’t react (#5620, partially fixed by #5629).
- **MCP discoverability** — recommended servers (e.g., Xquik) missing from `/mcp add recommended` (#5627).
- **Secret handling in embedded hosts** — process-global env mutation unsafe with threads; need runtime-scoped providers (#5637).
- **Tool compat fragmentation** — route-specific schema subsets handled in scattered request builders (#5633).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*