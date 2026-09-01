# AI CLI Tools Community Digest 2026-09-01

> Generated: 2026-09-01 04:45 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-01)

---

## 1. Ecosystem Overview

The AI CLI tool landscape shows **intense competition across three dimensions**: reliability hardening, protocol interoperability, and enterprise readiness. All major tools shipped patches or nightlies in the last 24 hours, but release cadence varies—Claude Code and OpenAI Codex maintain stable weekly releases, while Gemini CLI, Qwen Code, and Pi operate on nightly cycles. A clear industry convergence is emerging around **AGENTS.md standardization**, **MCP protocol completeness**, **ACP (Agent Client Protocol) adoption**, and **cost/usage transparency**. However, each tool retains distinct architectural philosophies: Anthropic and OpenAI prioritize polished desktop/CLI parity; Google and Moonshot emphasize agent orchestration depth; OpenCode and Pi push plugin/transport extensibility; Qwen and CodeWhale invest heavily in review/audit pipelines and crate-level modularity.

---

## 2. Activity Comparison

| Tool | Repo | Issues (Hot) | PRs (24h) | Release Status | Notable Signals |
|------|------|--------------|-----------|----------------|-----------------|
| **Claude Code** | anthropics/claude-code | 10 (SEV-1 cost bug, 5K+ 👍 AGENTS.md) | 4 (all closed) | **Stable v2.1.252** | Highest community engagement; enterprise blockers |
| **OpenAI Codex** | openai/codex | 10 (Win latency 8–11×, auth loops) | **20 merged** (coordinated push) | **Stable v0.152.0** + alpha | Largest PR batch; Windows/WSL crisis |
| **Gemini CLI** | google-gemini/gemini-cli | 10 (subagent hangs, security hardening) | 10 (7 security-focused) | **Nightly v0.59.0** | Security-first PRs; agent reliability P1 |
| **GitHub Copilot CLI** | github/copilot-cli | 10 (regression cluster 1.0.81/82) | 0 | **Stable v1.0.83-0** | Regression density alarming; ACP gaps |
| **Kimi Code CLI** | MoonshotAI/kimi-cli | 3 (Win encoding, prompt queue) | 2 (migration, tool fix) | *None* | Rebrand/migration in progress; low volume |
| **OpenCode** | anomalyco/opencode | 10 (cloud IDE, core loop, billing) | 10 (plugins, ACP, browser) | *None* | Plugin/transport expansion; cloud IDE focus |
| **Pi (Codewhale)** | earendil-works/pi | 10 (session lifecycle, npm 11.16) | 10 (transports, 3 providers, compaction) | *None* | Architectural expansion (TCP/WS, Ollama) |
| **Qwen Code** | QwenLM/qwen-code | 5 (llama.cpp broken, CI flakes) | 10 (review pipeline, web shell) | **Nightly failed** gate | Review pipeline investment; release instability |
| **DeepSeek TUI / CodeWhale** | Hmbown/CodeWhale | 10 (crate decomposition, auth unification) | 10 (PKCE, app-server, brand convergence) | *None* | Major refactor + native auth; brand pivot |
| **Grok Build** | xai-org/grok-build | 0 | 0 | *None* | No public activity |

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Demanding | Specific Needs |
|-------------|-----------------|----------------|
| **Agent Instruction Portability (AGENTS.md)** | Claude Code (#6235, 5K 👍), OpenAI Codex (implied), Gemini CLI (skills sync), OpenCode (ACP runtime) | Unified, vendor-neutral agent config format; skill sync across surfaces |
| **MCP Protocol Completeness** | Claude Code (OAuth refresh, elicitation), OpenAI Codex (pagination), GitHub Copilot (legacy initialize), OpenCode (RFC 8707 resource param), Pi (custom provider wire formats) | OAuth auto-refresh, pagination, elicitation, RFC 8707 compliance, dynamic tool discovery |
| **ACP (Agent Client Protocol) Adoption** | OpenCode (Claude Code runtime, compact command), GitHub Copilot (session/new, close), Pi (transports), CodeWhale (runtime API) | Session lifecycle, compact, multi-agent roster ("Pod"), transport abstraction |
| **Cost/Usage Transparency** | Claude Code (SEV-1 72× undercount), OpenAI Codex (turn-cost telemetry, Pro Lite anomalies), Gemini CLI (token bloat), OpenCode (1M context variants), Pi (DeepSeek pricing, output reservation) | Real-time quotas, per-turn cost, model-specific accounting, anomaly alerts |
| **Windows/WSL First-Class Support** | OpenAI Codex (latency 8–11×, WSL project breaks), GitHub Copilot (herd detection, TLS proxy), Gemini CLI (NTFS short-name, symlinks), Kimi Code (gbk encoding) | Path normalization, shell performance, proxy auth, encoding safety, terminal multiplexer detection |
| **Session/State Reliability** | All 9 tools | Cross-surface sync (Claude), resume integrity (Codex, Copilot, Pi, CodeWhale), compaction safety (Claude, Pi, Qwen), session ID adoption (CodeWhale, OpenCode) |
| **Security/Supply-Chain Hardening** | Gemini CLI (GIT_* env strip, extension consent, config ACLs), Pi (npm 11.16 scripts, credential store locks), Claude Code (macOS sandbox), OpenCode (MCP auth) | Env var sanitization, extension consent, config permissions, credential isolation, sandbox escape prevention |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Enterprise reliability, cost governance, cross-surface parity | Enterprise teams, budgeted orgs, multi-surface users | Tight Anthropic model integration; proprietary protocol; heavy safeguard investment |
| **OpenAI Codex** | Windows/WSL parity, Vim/editor fidelity, real-time usage UI | Developers on Windows, Vim users, ChatGPT subscribers | Rust CLI + Electron desktop; aggressive telemetry; coordinated release trains |
| **Gemini CLI** | Agent orchestration depth, native bash alignment, security hardening | Google ecosystem users, agent-heavy workflows, security-conscious | Zero-dependency sandboxing; AST-aware tooling; subagent-first architecture |
| **GitHub Copilot CLI** | GitHub/Enterprise integration, ACP compliance, terminal multiplexer support | GitHub Enterprise, herd/kitty users, BYOK (Azure AI) | ACP-native; mTLS proxy; herd detection; session-centric state |
| **Kimi Code CLI** | Migration to new distribution, cross-platform tool safety | Chinese-market developers, migration path users | Python-based; rebrand in progress; minimal community signal |
| **OpenCode** | Plugin/transport extensibility, cloud IDE parity, local model support | Self-hosters, plugin authors, cloud IDE users | Public plugin API; browser RPC; Firecrawl search; ACP runtime for Claude |
| **Pi (Codewhale)** | Transport abstraction, provider ecosystem, TUI polish, session durability | Power users, multi-provider workflows, TUI enthusiasts | Crate decomposition; TCP/WS/Ollama transports; descriptor-driven catalogs; compaction contracts |
| **Qwen Code** | Review/audit pipeline, web shell fidelity, CI resilience | Code review automation, web-based workflows, Qwen model users | Prebuilt worktrees; coverage ledgers; fix-audit rounds; web-shell git integration |
| **CodeWhale (DeepSeek TUI)** | Crate modularity, native auth (PKCE), multi-agent roster UX, brand convergence | TUI purists, multi-provider users, open-source contributors | Rust crate decomposition; PKCE flows; "Pod" terminology; Tideline shell composition |
| **Grok Build** | *Unknown — no public activity* | *Unknown* | *Unknown* |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / High Maturity** | **Claude Code**, **OpenAI Codex** | 5K+ 👍 on top issue (Claude); 20 PRs merged in coordinated push (Codex); stable weekly releases; enterprise SEV processes |
| **High Momentum / Rapid Iteration** | **Gemini CLI**, **OpenCode**, **Pi**, **CodeWhale** | Nightly/daily commits; 10+ PRs/day; architectural refactors (Pi crate decomposition, CodeWhale EPIC-005); security-first patches |
| **Maturing / Focused Investment** | **GitHub Copilot CLI**, **Qwen Code** | Stable releases but regression clusters (Copilot); review pipeline depth (Qwen); CI instability (Qwen nightly failures) |
| **Early / Transitioning** | **Kimi Code CLI** | Rebrand/migration; low issue/PR volume; Windows encoding regressions suggest limited test coverage |
| **Dormant / Opaque** | **Grok Build** | Zero public GitHub activity in 24h |

**Key Insight**: The ecosystem splits between **productized CLIs** (Claude, Codex, Copilot) with dedicated release engineering and **platform CLIs** (

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-01 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs & Issues

| Rank | Item | Type | Status | Key Discussion Points |
|------|------|------|--------|----------------------|
| 1 | **[#492] Security: Community skills under `anthropic/` namespace enable trust boundary abuse** | Issue | 🟢 Open | **43 comments, 2👍** — Critical supply-chain concern: community skills published under official namespace impersonate Anthropic-authored skills, tricking users into granting elevated permissions. |
| 2 | **[#228] Enable org-wide skill sharing in Claude.ai** | Issue | 🟢 Open | **16 comments, 8👍** — Strong demand for native organizational skill library; current workflow requires manual file transfer via Slack/Teams and Settings upload. |
| 3 | **[#556 / #1298 / #1099 / #1050] `run_eval.py` / `skill-creator` evaluation pipeline broken (0% recall, Windows crashes)** | Issue + PRs | 🟢 Open | **12 comments (issue) + 4 related PRs** — Core skill-authoring toolchain non-functional: `claude -p` never triggers skills during eval, Windows subprocess/encoding bugs, optimization loop optimizes against noise. |
| 4 | **[#189] `document-skills` & `example-skills` install identical content → duplicates** | Issue | 🟢 Open | **6 comments, 9👍** — Plugin duplication pollutes context window; violates documented separation of concerns. |
| 5 | **[#1628] Add Hivemind: Zero-Cost Multi-Agent Orchestration Skill** | PR | 🟢 Open | Delegates mechanical work to headless **opencode** workers on free models; Claude remains planner/reviewer/merger. Addresses "expensive model context is the scarce resource." |
| 6 | **[#1367] Add `self-audit` — Mechanical verification + 4-dimension reasoning quality gate** | PR | 🟢 Open | Universal pre-delivery audit: Step 0 verifies claimed output files exist; Steps 1–4 audit reasoning across correctness, completeness, consistency, clarity (damage-severity priority). |
| 7 | **[#514] Add `document-typography` — Typographic quality control for generated docs** | PR | 🟢 Open | Prevents orphan/widow lines, heading stranding, numbering misalignment in AI-generated documents — "issues affect every document Claude generates." |
| 8 | **[#723] Add `testing-patterns` — Comprehensive testing stack skill** | PR | 🟢 Open | Covers Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing, CI integration. |
| 9 | **[#568] Add `servicenow` — Enterprise ServiceNow platform skill** | PR | 🟢 Open | Broad coverage: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, Vulnerability Response, IntegrationHub — positioned as platform assistant, not narrow scripting helper. |
| 10 | **[#1487] `claude-api` skill eagerly injects ~156k tokens, exhausting context window** | Issue | 🟢 Open | **4 comments** — Bundled skill blows context budget in single tool call; impacts all users on Claude Code 2.1.220+. |

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence | Representative Items |
|-------|----------|----------------------|
| **Skill distribution & trust infrastructure** | Highest-comment issue (#492, 43 comments); org-sharing request (#228, 16c, 8👍); duplicate plugin problem (#189, 6c, 9👍) | Namespace spoofing, lack of org library, plugin deduplication |
| **Skill authoring toolchain reliability** | Cluster of issues/PRs around `run_eval.py`, `skill-creator`, Windows compatibility (#556, #1298, #1099, #1050, #202) | 0% recall, subprocess crashes, encoding bugs, skill-creator not following best practices |
| **Meta-skills for quality & governance** | Proposals for skill-quality-analyzer (#83), agent-governance (#412), self-audit (#1367), reasoning quality gates (#1385) | Automated skill review, AI agent safety patterns, pre-delivery verification |
| **Enterprise/platform integration skills** | ServiceNow (#568), SharePoint (#1175), Bedrock (#29), claude-api token explosion (#1487) | Platform-specific assistants, cloud provider support, context-window management |
| **Document fidelity & interoperability** | Typography (#514), ODT (#486), PDF case-sensitivity (#538), DOCX tracked-changes (#541), whitespace corruption (#12) | Professional document output, format correctness, cross-tool compatibility |
| **Multi-agent / delegation architectures** | Hivemind (#1628), compact-memory (#1329), MCP exposure (#16) | Offloading to cheaper models, symbolic memory compression, skill-as-MCP |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It’s High-Potential |
|----|-------|------------------------|
| **[#1298]** | `skill-creator` eval pipeline fixes | **Critical path** — unblocks all skill authors; 4 related PRs + issue with 12 comments; active updates through June 2026 |
| **[#1628]** | `hivemind` (multi-agent orchestration) | Novel architecture (opencode delegation), addresses core cost/context constraint, recent (Aug 2026), high conceptual leverage |
| **[#1367]** | `self-audit` (mechanical + reasoning verification) | Universal applicability, four-dimension gate design, v1.3.0 suggests iteration, recent (Jun–Jul 2026) |
| **[#514]** | `document-typography` | Solves universal pain point ("every document Claude generates"), focused scope, ready for review since Mar 2026 |
| **[#723]** | `testing-patterns` | Comprehensive coverage (unit→E2E→mutation), fills gap in testing guidance, active through Apr 2026 |
| **[#568]** | `servicenow` | Enterprise breadth (9+ modules), long update window (Mar–Aug 2026) signals maintainer commitment |
| **[#486]** | `odt` (OpenDocument create/fill/parse) | Standards-based format, template filling + HTML conversion, clear triggers, active through Apr 2026 |
| **[#525]** | `pyxel` (retro game dev via MCP) | Unique niche (Pyxel engine + MCP), concrete workflow (write→run→capture→inspect), author is Pyxel-MCP creator |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community’s most concentrated demand is for a trustworthy, operable skill *lifecycle* — secure distribution namespaces, org-level sharing, deduplicated plugins, and a reliable authoring toolchain (eval/creator) — rather than any single domain skill, because without these foundations every downstream skill suffers from installation friction, verification gaps, and context-window waste.**

---

# Claude Code Community Digest — 2026-09-01

## 1. Today's Highlights

Claude Code v2.1.252 shipped with three critical fixes: resolving a macOS Bash "task output swap refused" error, fixing "always allow" persistence in projects without `.claude/settings.local.json`, and addressing Remote Control session stalls from Claude Desktop/VS Code. The community's top discussion remains **AGENTS.md standardization** (#6235, 5K+ 👍), now closed after extensive debate. A SEV-1 cost-accounting bug (#83048) reporting 72× undercounted token usage has surfaced, alongside a Fable 5 `reasoning_extraction` safeguard regression blocking legitimate sessions.

---

## 2. Releases

### v2.1.252
- **Fixed**: Bash commands failing with `"task output swap refused (tasks dir moved or linked)"` on some Macs
- **Fixed**: `"always allow"` not saving in projects lacking `.claude/settings.local.json`
- **Fixed**: Remote Control sessions hosted by Claude Desktop or VS Code stalling for minutes

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6235](https://github.com/anthropics/claude-code/issues/6235) | **Support AGENTS.md** (CLOSED) | Industry-wide push for a unified agent instruction format (Codex, Amp, Cursor adopting). CLAUDE.md seen as vendor-lock-in. | 389 comments, **5,094 👍** — highest engagement in repo history |
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | **CVP-approved org still blocked by cyber safeguards** | Verified organizations incorrectly flagged; blocks production workflows. Verification Portal shows "Under review" despite prior approval. | 168 comments, 25 👍 |
| [#20697](https://github.com/anthropics/claude-code/issues/20697) | **Sync Skills between Claude Desktop & CLI** | Skills (custom agents/workflows) siloed across surfaces; users want unified configuration. | 43 comments, **150 👍** |
| [#83048](https://github.com/anthropics/claude-code/issues/83048) | **SEV-1: `budget.spent()` underreports 72×** | Cost controls broken — weekly Max quota exhausted in 4 hours despite reporting 3–4% usage. Critical for enterprise/budgeted teams. | 3 comments, SEV-1 severity |
| [#87640](https://github.com/anthropics/claude-code/issues/87640) | **Fable 5 `reasoning_extraction` false-positive on "Hi"** | Single-word greeting triggers safeguard; blocks legitimate sessions. Regression in model guardrails. | 12 comments, 14 👍 |
| [#90922](https://github.com/anthropics/claude-code/issues/90922) | **Fable 5 `reasoning_extraction` regression blocking 100% sessions** | Since 2026-08-30, all new sessions in monitoring repo blocked. Wider impact than #87640. | 2 comments, **regression** |
| [#65036](https://github.com/anthropics/claude-code/issues/65036) | **MCP OAuth: access tokens not auto-refreshed** | Daily "Connection expired" despite valid refresh tokens; breaks long-running MCP integrations. | 10 comments, 34 👍 |
| [#86478](https://github.com/anthropics/claude-code/issues/86478) | **`bypassPermissions` mode ignored since auto-mode rollout** | Both settings file and CLI flag `--permission-mode bypassPermissions` ignored; sessions stuck in auto mode. | 4 comments, 1 👍, **regression** |
| [#88075](https://github.com/anthropics/claude-code/issues/88075) | **MCP 2026-07-28: URL-mode elicitation not advertised** | Claude Code v2.1.237 sends empty `elicitation` capability; breaks MCP servers requiring `InputRequiredResult`. | 4 comments, 1 👍, **has repro** |
| [#89639](https://github.com/anthropics/claude-code/issues/89639) | **macOS scheduled tasks wedge mid tool-call, pin concurrency slots** | WebSearch/WebFetch hang ~30s in; sessions stay "running" for days, starving global schedule. | 4 comments, **macOS, routines** |

---

## 4. Key PR Progress (All 4 Updated in Last 24h)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#75541](https://github.com/anthropics/claude-code/pull/75541) | `fix(sweep): paginate issue events and honor unlabeled when closing expired issues` | **CLOSED** | Fixes auto-close logic: paginates GitHub events (was limited to 100), respects `unlabeled` events when determining label age. |
| [#75537](https://github.com/anthropics/claude-code/pull/75537) | `fix(hook-development): recognize all five hook handler types` | **CLOSED** | Updates `plugin-dev` skill docs & `validate-hook-schema.sh` to include all 5 hook types (previously only 2 documented). |
| [#75529](https://github.com/anthropics/claude-code/pull/75529) | `docs(code-review plugin): clarify relationship to bundled /code-review skill` | **CLOSED** | Distinguishes `code-review` plugin (PR review via `gh`, namespaced `code-review:code-review`) from local `/code-review` skill. |
| [#89404](https://github.com/anthropics/claude-code/pull/89404) | `validate-agent.sh: don't abort at first warning; stop false-flagging valid agents` | **OPEN** | Fixes `set -euo pipefail` arithmetic eval bugs: `((warning_count++))` aborts on zero result; validates plugin-dev's own agents. |

---

## 5. Feature Request Trends

From the issue landscape, four clear directions dominate:

1. **Interop & Portability** — AGENTS.md adoption (#6235), skill sync across surfaces (#20697), MCP OAuth persistence across account switches (#90647). Developers want agent config to be tool-agnostic and portable.
2. **Session & State Management** — Programmatic session rename (#29355, #75733), scheduled-task reliability (#89639), Cowork telemetry identity (#88490). Need first-class session lifecycle APIs.
3. **Permission & Sandbox Control** — `bypassPermissions` regression (#86478), silent downgrade in daemons (#80412), Windows sandbox/Crostini support (#74587). Granular, predictable permission models requested.
4. **Cost & Observability** — Token accounting accuracy (#83048), image token inflation with on-prem LLMs (#86595), OTLP identity attributes (#88490). Enterprise adoption blocked by opaque metering.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Symptom | Frequency |
|------|---------|-----------|
| **Model Safeguards** | Fable 5 `reasoning_extraction` false-positives on trivial inputs ("Hi", legitimate code tasks) | 3+ issues in 48h, regression confirmed |
| **MCP Auth** | OAuth tokens not refreshed; grants lost on account switch/logout; elicitation capability missing | 3 distinct issues, breaks long-running integrations |
| **Permission System** | `bypassPermissions` ignored; auto-mode forced; silent downgrade in background sessions | Regression since 2026-08-14 auto-mode rollout |
| **Cost Accounting** | `budget.spent()` 72× undercount; image tokens 7–10× inflated on-prem; no trust in quotas | SEV-1 + confirmed bug, blocks budgeted workflows |
| **macOS Sandbox** | `EPERM` in `~/Documents` on Tahoe 26.x; Bash tool hangs; scheduled tasks wedge | Multiple reports, affects Ghostty/iTerm/Terminal.app |
| **Cross-Surface Sync** | Cowork conversations disappear; session list empty on mapped drives/non-ASCII paths; skills not synced | 4+ issues, impacts Desktop/CLI/VS Code/Web/Android parity |

---

*Digest generated from `anthropics/claude-code` GitHub data (releases, issues, PRs updated 2026-09-01).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-01

## Today's Highlights
OpenAI shipped **Codex CLI v0.152.0** with Vim-mode search (`/`, `?`, `n`, `N`) and actionable rate-limit banners, while the desktop app continues to surface Windows/WSL instability—project creation failures, shell latency regressions (8–11×), and auth loops. The community is also flagging a Pro Lite quota depletion bug and a phone-verification blocker affecting users in Indonesia.

---

## Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.152.0** | Stable | • Vim mode: `/` `?` search, highlighted matches, `n`/`N` navigation (#41586)<br>• Rate-limit banners now offer usage check, credit management, plan links (#41742)<br>• Terminal UI & `codex exec` improvements |
| **rust-v0.153.0-alpha.1** | Alpha | Pre-release for next feature cycle |
| **rust-v0.152.0-alpha.7.2 / 7** | Alpha | Iterative stabilization for 0.152.0 |

[View releases](https://github.com/openai/codex/releases)

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#25828](https://github.com/openai/codex/issues/25828) | **Phone verification broken for Indonesia** — cannot receive SMS codes | Blocks login entirely for a region; 31 comments, 5 👍 | High — auth gatekeeper issue |
| [#41942](https://github.com/openai/codex/issues/41942) | **Shell exec latency regressed 8–11× on Windows** (1.7s → 18.4s median) | Measured across 10 months of rollouts; kills productivity on Windows | 6 comments, new today |
| [#41290](https://github.com/openai/codex/issues/41290) | **WSL project create/remove fails after switching Agent Environment** | Core Windows+WSL workflow broken; 21 comments, 8 👍 | 8 👍, active discussion |
| [#40067](https://github.com/openai/codex/issues/40067) | **GPT-5.6 Plus weekly usage drained 99% → 0% in hours** | Possible usage-accounting regression; billing impact | 8 comments, 2 👍 |
| [#41969](https://github.com/openai/codex/issues/41969) | **Pro Lite: sudden quota depletion + banked reset/gpt-reserve gone** | New report today; affects Pro 5x tier users | 4 comments, filed today |
| [#39678](https://github.com/openai/codex/issues/39678) | **Remote Android→macOS “No project” chat fails with trust error** | Cross-device workflow broken; 14 comments, 10 👍 | 10 👍 — remote use case |
| [#41255](https://github.com/openai/codex/issues/41255) | **GPT-5.6 models fail `exec` tool: code-mode host exits during handshake** | Windows Desktop tool calling broken for latest models | Closed but 8 comments |
| [#32862](https://github.com/openai/codex/issues/32862) | **Desktop reverts to on-request approvals despite full-access settings** | Persistent sandbox policy regression; rehydrates wrong mode | 8 comments |
| [#28858](https://github.com/openai/codex/issues/28858) | **MCP `tools/list` pagination (`nextCursor`) not followed** | Breaks MCP servers with >1 page of tools; 4 comments, 6 👍 | 6 👍 — protocol compliance |
| [#41973](https://github.com/openai/codex/issues/41973) | **macOS: refresh token revoked after ChatGPT login → 401 in Desktop/CLI** | Auth loop on latest macOS builds; filed today | 3 comments, new today |

---

## Key PR Progress (Top 10 Merged Today)

| PR | Summary | Category |
|----|---------|----------|
| [#41941](https://github.com/openai/codex/pull/41941) | **Vim undo (`u`) in TUI composer** — restores draft state (attachments, mentions, deferred paste) as single edit | Editor UX |
| [#41921](https://github.com/openai/codex/pull/41921) | **Start fresh Vim drafts in Insert mode**; return to Insert after submit/slash-command | Editor UX |
| [#41950](https://github.com/openai/codex/pull/41950) | **Tracing for nested tool calls & exec processes** — preserves context across async callbacks | Observability |
| [#41949](https://github.com/openai/codex/pull/41949) | **Plugin reconciliation API** (`plugin/reconcile`) — syncs remote bundles, returns refresh hints | Plugin System |
| [#41944](https://github.com/openai/codex/pull/41944) | **Turn cost telemetry** (`codex.turn.cost_microusd`) for ChatGPT sessions | Cost Tracking |
| [#41931](https://github.com/openai/codex/pull/41931) | **Guardian transcript limits doubled** — 10k→20k tokens budget, 2k→5k per message | Safety/Review |
| [#41928](https://github.com/openai/codex/pull/41928) | **Executor path context for permission preapproval** — fixes cross-OS (Win↔Linux) grant matching | Permissions |
| [#41933](https://github.com/openai/codex/pull/41933) | **Consistent sandbox policy reporting** — uses configured writable roots, not runtime existence | Diagnostics |
| [#41924](https://github.com/openai/codex/pull/41924) | **Realtime conversation history recorded in Core** — consistent across all hosts | Session Persistence |
| [#41938](https://github.com/openai/codex/pull/41938) | **Clearer resume guidance** — shows exact `codex resume <thread-id>` command in exit summaries | CLI UX |

*All 20 PRs shown were authored by `copyberry[bot]` and closed today — indicating a coordinated release push.*

---

## Feature Request Trends (from Issues)

1. **Windows/WSL First-Class Support** — Project management, path normalization (`/mnt/c/...`), shell performance, app stability
2. **Auth & Session Reliability** — Phone verification, refresh-token handling, cross-device (CLI ↔ Desktop) token sync
3. **Usage Transparency** — Real-time quota dashboards, turn-cost breakdowns, anomaly alerts (sudden depletion)
4. **Remote/SSH/Mobile Polish** — Android→macOS/WSL trust, thread listing timeouts, reconnect UX
5. **Vim/Editor Parity** — Search, undo, insert-mode defaults, composer fidelity
6. **Sandbox/Permission Granularity** — Per-task approval persistence, executor-aware grants, MCP pagination
7. **Conversation Recovery** — First-party reindex tool for lost JSONL sessions (Windows)

---

## Developer Pain Points (Recurring Themes)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Windows Desktop instability** — silent closes, WSL integration breaks, composer freezes | Very High | #41290, #41059, #41472, #23814, #41845 |
| **Shell/exec latency on Windows** — 10× regression over 10 months | High | #41942 (new, measured) |
| **Auth loops & token revocation** — macOS/Windows, CLI↔Desktop sync | High | #25828, #41044, #41973, #41241 |
| **Quota/accounting opacity** — sudden drain, no breakdown, Pro Lite anomalies | High | #40067, #41969, #41965 |
| **Sandbox approval regression** — settings ignored, rehydrates to `on-request` | Medium | #32862, #41255 |
| **Remote/SSH fragility** — Android control timeouts, trust errors, thread listing | Medium | #39678, #36416 |
| **MCP protocol gaps** — pagination, tool discovery | Medium | #28858 |
| **Session/conversation loss** — UI shows empty despite JSONL on disk | Medium | #40779, #39902 |

---

*Digest generated from GitHub data as of 2026-09-01. For real-time updates, watch the [openai/codex](https://github.com/openai/codex) repository.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-01

---

## 1. Today's Highlights
- **Nightly release v0.59.0** shipped with incremental fixes; the changelog is minimal (single commit `g0bd1d4397`).
- **Security hardening** dominates PR activity: three merged/fast-tracked PRs strip dangerous `GIT_*` env vars, normalize `DEBUG` handling, and enforce strict config-file permissions on Windows/POSIX.
- **Agent reliability** remains the top pain point—subagent turn-limit reporting, generalist-agent hangs, and browser-agent Wayland failures all saw fresh discussion today.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| `v0.59.0-nightly.20260901.g0bd1d4397` | Nightly | Automated version bump; see [compare](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260831.g0bd1d4397...v0.59.0-nightly.20260901.g0bd1d4397) for single-commit diff. |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after `MAX_TURNS` reported as `GOAL` success | Masks real failures; subagents claim success despite hitting turn limits before any work. | 13 comments, 👍 2 — **P1**, needs retesting |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | Blocks all deferred work; users wait >1 hr. Workaround: disable subagents. | 8 comments, 👍 8 — **P1**, high user impact |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via zero-dependency sandboxing | Strategic: aligns CLI with Gemini 3’s native POSIX-tool training. | 8 comments, 👍 1 — **P2**, large effort |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess AST-aware file reads, search, mapping | Could cut turns & token noise via precise method-bound reads. | 7 comments, 👍 1 — **P2**, epic tracking |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini under-uses custom skills/sub-agents | Reduces automation value; explicit instruction required. | 6 comments — **P2** |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Deterministic redaction & reduce Auto Memory logging | Security: secrets enter model context before redaction. | 5 comments — **P2**, security area |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command stuck at “Waiting input” after completion | Frequent UX break; simple commands hang UI. | 4 comments, 👍 3 — **P1**, medium effort |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser agent: automatic session takeover & lock recovery | Improves resilience for persistent browser profiles. | 4 comments — **P3**, customer issue |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Platform blocker for Linux/Wayland users. | 4 comments, 👍 1 — **P1**, agent/browser |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | Symlinked agent files not recognized | Breaks dotfile/shared-config workflows. | 4 comments — **P3**, needs info |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#29008](https://github.com/google-gemini/gemini-cli/pull/29008) | `fix(core): strip execution-affecting GIT_* env vars in getSafeGitEnv` | Open, **P1**, security | Prevents `.env`-injected `GIT_*` vars from hijacking git ops. Fixes [#29003](https://github.com/google-gemini/gemini-cli/issues/29003). |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | `fix(extensions): prompt for consent on env changes & sanitize runtime-altering vars` | **Closed** | Closes extension supply-chain vector; adds consent strings & sanitizes MCP server env. |
| [#28866](https://github.com/google-gemini/gemini-cli/pull/28866) | `fix(core): ignore .gemini folder by default in file search` | **Closed** | Stops chokidar/crawlers from traversing config dir (fixes [#28826](https://github.com/google-gemini/gemini-cli/issues/28826)). |
| [#29148](https://github.com/google-gemini/gemini-cli/pull/29148) | `fix(cli): prevent background git ops from hijacking stdin` | Open, **P2** | Fixes [#23480](https://github.com/google-gemini/gemini-cli/issues/23480): background `git.listRemote`/`clone` no longer blocks on TTY prompts. |
| [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) | `fix(config): enforce strict permission/ownership checks on system-wide config paths` | Open | Windows ACL + POSIX mode verification before loading system config. |
| [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) | `fix(core): mitigate NTFS 8.3 short-name (SFN) path traversal` | Open | Normalizes `git~1`, `node_m~1` etc. in path checker & normalization. |
| [#29120](https://github.com/google-gemini/gemini-cli/pull/29120) | `fix(core): improve destination validation & connection routing in web fetch` | Open | Async DNS + Undici connector binding; preserves TLS & proxy semantics. |
| [#29022](https://github.com/google-gemini/gemini-cli/pull/29022) | `feat(tool): retain ask_user question in text history` | Open | New setting `ui.keepAskUserQuestionsInHistory` preserves prompts across sessions. |
| [#29017](https://github.com/google-gemini/gemini-cli/pull/29017) | `fix(core): dedupe symlinked/junctioned skill directories` | Open | Fixes [#28944](https://github.com/google-gemini/gemini-cli/issues/28944) for Windows junctions & POSIX symlinks. |
| [#28995](https://github.com/google-gemini/gemini-cli/pull/28995) | `fix(core): prevent formatTruncatedToolOutput inflation on negative maxChars` | Open, **P1** | Guards slice logic; fixes [#28620](https://github.com/google-gemini/gemini-cli/issues/28620) output duplication. |

---

## 5. Feature Request Trends
1. **Agent Observability & Control** — Subagent trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), bug-report context inclusion ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and settings override compliance ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
2. **AST/Structure-Aware Tooling** — Precise method reads, symbol search, and codebase mapping ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)).
3. **Native Bash/Sandbox Alignment** — Zero-dependency OS sandboxing, POSIX tool chaining, and reducing custom tool surface ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)).
4. **Memory & Context Hygiene** — Deterministic redaction, low-signal session quarantine, inbox patch validation ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
5. **Cross-Platform Robustness** — Wayland browser support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), NTFS short-name handling ([#29116](https://github.com/google-gemini/gemini-cli/pull/29116)), symlink-friendly config ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079), [#29017](https://github.com/google-gemini/gemini-cli/pull/29017)).

---

## 6. Developer Pain Points (Recurring Themes)
| Pain Point | Evidence |
|------------|----------|
| **Subagent opacity & misreporting** | Turn-limit masquerading as success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), missing subagent context in bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), trajectories not shareable ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)). |
| **Agent hangs / deadlocks** | Generalist agent stalls ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), shell “Waiting input” ghost state ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), interactive prompts block Vite/CLI init ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)). |
| **Security/Supply-chain anxiety** | Env-var injection via `.env` ([#29008](https://github.com/google-gemini/gemini-cli/pull/29008)), extension consent bypass ([#28863](https://github.com/google-gemini/gemini-cli/pull/28863)), Auto Memory secret leakage ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)). |
| **Config & FS edge cases** | Symlinked agents ignored ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), `.gemini` dir watched recursively ([#28866](https://github.com/google-gemini/gemini-cli/pull/28866)), NTFS short-name traversal ([#29116](https://github.com/google-gemini/gemini-cli/pull/29116)). |
| **Token/context bloat** | Large file reads firehose context ([#19561](https://github.com/google-gemini/gemini-cli/issues/19561)), >128/400 tools trigger 400 errors ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)), model writes temp scripts everywhere ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)). |

---

*Generated from `google-gemini/gemini-cli` GitHub data as of 2026-09-01. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-01

## Today's Highlights
Version **1.0.83-0** shipped with automatic HTTPS proxy mTLS client-certificate support and proper detection of the **herd** terminal multiplexer (fixing Kitty protocol, color-scheme sync, progress, `/copy`, and notifications in herd panes). Meanwhile, the issue tracker shows a cluster of **regressions in 1.0.81/82** affecting BYOK model selection, MCP initialization, OAuth behind TLS-inspecting proxies, session restoration loops, and memory crashes on long sessions — several filed within the last 24 hours.

---

## Releases
### v1.0.83-0 ([release](https://github.com/github/copilot-cli/releases/tag/v1.0.83-0))
- **Added**: Automatic HTTPS proxy mTLS client certificate support for model and web requests.  
- **Added**: Detection of the **herd** terminal multiplexer (no longer mistaken for tmux), enabling Kitty keyboard protocol, color-scheme following, terminal progress, `/copy`, and notifications inside herd panes.

---

## Hot Issues (10 noteworthy)

| # | Title | Why it matters | Community signal |
|---|-------|----------------|------------------|
| [#4672](https://github.com/github/copilot-cli/issues/4672) | **1.0.82 Regression: `/model` command broken with BYOK** | Blocks users who rely on `COPILOT_MODEL`/`COPILOT_MODEL_PROVIDER` env vars (Azure AI Foundry, etc.) to switch models. | 2 comments, updated today |
| [#4525](https://github.com/github/copilot-cli/issues/4525) | **MCP: legacy `initialize` sent after modern `server/discover`** | Causes `-32022` against Python MCP SDK 2.0.0 dual-era runners; breaks stdio MCP servers. | 3 comments, 👍0 |
| [#4671](https://github.com/github/copilot-cli/issues/4671) | **1.0.81: OAuth fails behind TLS-inspecting HTTP proxy** | Both device-code and web flows break; 1.0.80 works. Critical for enterprise networks. | 1 comment, 👍1 |
| [#4663](https://github.com/github/copilot-cli/issues/4663) | **Failed compaction retried every turn — unbounded billed calls** | Compaction failures loop forever with no backoff, no fallback, no user-visible error; costs accumulate silently. | 1 comment |
| [#4664](https://github.com/github/copilot-cli/issues/4664) | **OOM crash resuming long-standing session** | Node heap exhausts (~2.5 GB) during session load; users lose access to history. | 1 comment |
| [#4673](https://github.com/github/copilot-cli/issues/4673) | **Session restore auto-continues aborted work (1.0.81)** | `working` flag not cleared on user abort; model re-enters interrupted loop on resume. | 0 comments |
| [#4678](https://github.com/github/copilot-cli/issues/4678) | **ACP `session/new` blocks 192 s on single unresponsive MCP server** | No bounded startup budget; three 59 s connection attempts serialize session creation. | 0 comments |
| [#4674](https://github.com/github/copilot-cli/issues/4674) | **Resuming session loses custom agent (regression of #917)** | Agent’s `mcp-servers` and `tools` allow-list not reapplied; session continues as default agent. | 0 comments |
| [#4665](https://github.com/github/copilot-cli/issues/4665) | **`sessionStart` additionalContext duplicated every turn & passed to subagents** | Context bloat & token waste; shows in `/context` and AIC metrics. | 0 comments |
| [#4670](https://github.com/github/copilot-cli/issues/4670) | **Tool call hangs after extension startup fails during `session.resume`** | Custom tool remains exposed after extension process exits; call never resolves or errors. | 0 comments |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **Persistent context-window visibility** ([#1953](https://github.com/github/copilot-cli/issues/1953), 👍9) — users want a permanent “context used / remaining” indicator in the UI.  
2. **Complete shell-task output access** ([#4630](https://github.com/github/copilot-cli/issues/4630)) — `TaskShellProgress.recentOutput` is a lossy 10-line window; clients need the full output file path.  
3. **Explicit GitHub hostname in footer for all identities** ([#4666](https://github.com/github/copilot-cli/issues/4666)) — disambiguate GitHub.com vs. GHE vs. `gh` auth.  
4. **Bounded MCP startup & graceful degradation** ([#4678](https://github.com/github/copilot-cli/issues/4678)) — don’t let one slow server block the entire session.  
5. **Compaction resilience** ([#4663](https://github.com/github/copilot-cli/issues/4663)) — backoff, fallback, and user-visible error on repeated failures.

---

## Developer Pain Points
- **Regression density in 1.0.81/82**: BYOK model switching, MCP init, OAuth behind proxy, session restore loops, agent loss on resume, compaction retry storms — all reported in the last 48 h.  
- **Memory & performance ceilings**: OOM on large session resume (#4664), unbounded context growth from duplicated `sessionStart` context (#4665) and compaction retries (#4663).  
- **Enterprise networking gaps**: TLS-inspecting proxy breaks OAuth (#4671); managed `telemetry.headers` kills OTEL export (#4669).  
- **ACP protocol compliance**: Missing `session/close` (#4113), `session/new` blocking (#4678), spurious `message_delta` with `streaming: false` (#4677).  
- **Tooling reliability**: Hanging tool calls after extension crash (#4670), placeholder string in required `recentOutput` field (#4675), sidebar flashing deleted sessions (#4676).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-01

---

## 1. Today's Highlights
- **No new releases** in the last 24 hours.  
- Two notable PRs opened: a **migration flow** that detects deprecation notices from the CDN and guides users to Kimi Code, and a **fix for `StrReplaceFile`** to reject empty `old` strings and prevent silent corruption.  
- One fresh Windows encoding bug (`gbk` codec failure on `\\u0133`) surfaced, and two older issues were closed — one about queueing prompts during task execution, another about `Task` sub-task hangs on macOS.

---

## 2. Releases
*None in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Status | Why It Matters | Community Reaction |
|---|-------|--------|----------------|-------------------|
| [#2629](https://github.com/MoonshotAI/kimi-cli/issues/2629) | `UnicodeEncodeError: 'gbk' codec can't encode character '\\u0133'` | **OPEN** | Blocks Windows users on v1.49.0 when output contains Latin-extended characters (e.g., `ĳ`). Indicates the CLI still assumes `gbk` encoding instead of UTF-8 on Windows. | 0 comments, 0 👍 — newly filed, needs triage. |
| [#1287](https://github.com/MoonshotAI/kimi-cli/issues/1287) | Unable to write next prompt while current task executes | **CLOSED** | UX gap: developers want to *queue* or *pre-draft* the next prompt without waiting for the current agent turn to finish. | 1 comment, 0 👍 — closed without clear resolution noted; may have been addressed in a later version. |
| [#1292](https://github.com/MoonshotAI/kimi-cli/issues/1292) | `Task` sub-task sometimes hangs (macOS, v1.16.0) | **CLOSED** | Intermittent stall in multi-sub-task workflows; impacts reliability of parallel agent delegation. | 0 comments, 0 👍 — closed, but no fix reference; could regress. |

---

## 4. Key PR Progress

| # | Title | Author | Description |
|---|-------|--------|-------------|
| [#2630](https://github.com/MoonshotAI/kimi-cli/pull/2630) | `feat(shell): deprecation-aware update flow with one-key migration to Kimi Code` | jackfish212 | Adds a migration check at startup: if `https://cdn.kimi.com/kimi-code-tips/kimi_cli/migration.json` signals deprecation, the CLI marks the Python package deprecated and offers a one-key migration to the new **Kimi Code** distribution. Part of the `kimi-cli → Kimi Code` rebrand/migration. |
| [#2631](https://github.com/MoonshotAI/kimi-cli/pull/2631) | `fix(file): reject empty old string in StrReplaceFile` | rootkiller6788 | Prevents `StrReplaceFile` from silently inserting `new` at position 0 (or between every char with `replace_all=True`) when `old == ""`. Returns an error instead, avoiding mangled files from malformed agent edits. |

---

## 5. Feature Request Trends
From the open/closed issues visible:
1. **Prompt queuing / async input** — developers want to compose the next instruction while the agent is still working (#1287).
2. **Robust sub-task orchestration** — reliability of `Task` tool under parallel execution (#1292).
3. **Cross-platform encoding safety** — Windows `gbk` vs UTF-8 mismatches (#2629).

---

## 6. Developer Pain Points
- **Blocking input UX**: Inability to prepare the next prompt during long-running tasks slows iteration.
- **Flaky `Task` delegation**: Intermittent hangs on macOS erode trust in multi-agent workflows.
- **Windows encoding regressions**: Non-UTF-8 code paths still surface in 2026, breaking on common Unicode chars.
- **Silent tool corruption**: `StrReplaceFile` accepting empty `old` strings caused undetected file damage — now fixed in #2631.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — issues & PRs updated 2026-09-01.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-01

## Today's Highlights
No new releases shipped today. The issue tracker shows active debugging around **web-based VSCode clipboard failures**, **infinite loops after tool calls**, and a **macOS arm64 crash in `/compact`**. On the PR side, contributors are landing a **browser plugin with RPC integration**, **Firecrawl developer search**, and **ACP compact command support**—signaling continued expansion of the plugin ecosystem and protocol compliance.

---

## Releases
*No releases in the last 24 hours.*

---

## Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#26459](https://github.com/anomalyco/opencode/issues/26459) | **Clipboard copy fails in web-based VSCode terminals** (code-server, Codespaces, Gitpod) | Blocks a growing segment of cloud IDE users; UI shows success but clipboard stays empty. | 11 comments, 2 👍 — active investigation, workaround discussions |
| [#26220](https://github.com/anomalyco/opencode/issues/26220) | **Infinite loop after tool calls complete** (Zen/Big Pickle) | Process hangs indefinitely, unresponsive to input; affects paying "Big Pickle" tier users. | 10 comments, 4 👍 — high severity, impacts core loop |
| [#46535](https://github.com/anomalyco/opencode/issues/46535) | **`/compact` crashes with EXC_BREAKPOINT (SIGTRAP) on macOS arm64** | Reproducible crash on Apple Silicon; `/compact` is a frequent workflow command. | 1 comment, new today — PAC trap suggests pointer-auth issue |
| [#46316](https://github.com/anomalyco/opencode/issues/46316) | **MCP silent OAuth re-auth omits RFC 8707 `resource` param** | Breaks Sentry MCP and other RFC 8707-compliant servers on auto-reconnect. | 1 comment, new today — protocol compliance gap |
| [#46444](https://github.com/anomalyco/opencode/issues/46444) | **Web Home hides global-project sessions** (empty list outside git repos) | Sessions created in non-git dirs invisible in Web UI but visible in CLI; UX inconsistency. | 2 comments, new — affects web UI adoption |
| [#46527](https://github.com/anomalyco/opencode/issues/46527) | **Expose opt-in 1M context variants for GPT-5.6 OAuth** | Codex backend supports 1M tokens; OpenCode still applies lower limits. | 2 comments, new — feature parity request |
| [#35044](https://github.com/anomalyco/opencode/issues/35044) | **Read Tool extremely slow on massive files** (6.7M lines) | Performance bottleneck for agents reading large generated/log files frequently. | 3 comments, 1 👍 — ongoing pain point |
| [#33126](https://github.com/anomalyco/opencode/issues/33126) | **Local llama.cpp models slow when session title generation enabled** | Title gen adds significant latency vs direct API calls; hurts local model UX. | 3 comments — optimization opportunity |
| [#29714](https://github.com/anomalyco/opencode/issues/29714) | **Desktop GUI reopens session with wrong workspace path** after project switch | Session state corruption on Windows; points to path resolution bug in GUI. | 3 comments, 2 👍 — Desktop stability issue |
| [#46511](https://github.com/anomalyco/opencode/issues/46511) | **Subscription invalidated overnight** (billing complaint) | User reports valid Aug 31, broken Sep 1; suggests billing edge case or timezone bug. | 4 comments, new — billing reliability concern |

---

## Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#41904](https://github.com/anomalyco/opencode/pull/41904) | **feat** | Add **Claude Code ACP runtime** — run Claude Code inside OpenCode via `@agentclientprotocol/client`; addresses #5182, #20002, #24038. |
| [#44838](https://github.com/anomalyco/opencode/pull/44838) | **feat** | **Desktop browser pane** with address bar/controls, connected to browser plugin via RPC (Chromium sandboxed in Electron main). |
| [#46531](https://github.com/anomalyco/opencode/pull/46531) | **feat** | **Public-API browser plugin** — experimental `browser` tool using only public plugin interfaces (tools, hooks, permissions, RPC). |
| [#46534](https://github.com/anomalyco/opencode/pull/46534) | **feat** | **Firecrawl developer search provider** — adds `firecrawl-developer` with `categories: ["developer"]` for GitHub issues, PRs, READMEs, docs. |
| [#46530](https://github.com/anomalyco/opencode/pull/46530) | **feat** | **Expose permission assertions** — `ctx.permission.assert(input)` for Effect/Promise plugins; reuses existing engine, no new HTTP endpoint. |
| [#46539](https://github.com/anomalyco/opencode/pull/46539) | **fix** | **Preserve response reasoning items** — emit one reasoning block per provider item, retain native fields for continuation, fix summary flattening. |
| [#46537](https://github.com/anomalyco/opencode/pull/46537) | **fix** | **Show real duration for subagents >60 min** in TUI — fixes #44361 by scanning child session messages correctly. |
| [#45500](https://github.com/anomalyco/opencode/pull/45500) | **fix** | **ACP: advertise `/compact` command** — adds missing `available_commands_update` entry; fixes #37229. |
| [#46508](https://github.com/anomalyco/opencode/pull/46508) | **fix** | **Scope pane visibility to tabs** — persist terminal/review visibility & dimensions per desktop tab; clears state on tab close. |
| [#46523](https://github.com/anomalyco/opencode/pull/46523) | **fix** | **Stabilize bundled dev & process exit** — works around rolldown lazy-loading bug (#10774), backports Vite #23373. |

---

## Feature Request Trends
From the issue stream, developers are consistently asking for:

1. **Cloud IDE parity** — First-class support for code-server, Codespaces, Gitpod (clipboard, PTY, auth).
2. **Model/context expansion** — 1M token windows, new model variants (GPT-5.6, aggregate APIs), Azure OpenAI keyless auth.
3. **MCP protocol completeness** — RFC 8707 resource params, silent re-auth, broader server compatibility.
4. **Web UI session parity** — Global-project sessions visible, tab-scoped state, better project picker (nested folder search).
5. **Performance at scale** — Faster reads on huge files, local model latency reductions, subagent duration accuracy.
6. **Billing/subscription reliability** — Grace periods, timezone handling, banned-account auto-renew prevention.

---

## Developer Pain Points (Recurring Frustrations)

| Area | Signal |
|------|--------|
| **Web/Cloud IDE integration** | Clipboard broken, PTY issues, session visibility gaps — blockers for browser-based workflows. |
| **Core loop stability** | Infinite loops post-tool-call, `/compact` crashes, session continuation after network hiccups. |
| **Large-file performance** | Read tool O(n) on multi-Mb files; no streaming/partial-read API for agents. |
| **Local model UX** | Title generation adds 10s+ latency; no opt-out or async path. |
| **Desktop session state** | Workspace path corruption on project switch, pane state leaking across tabs. |
| **Billing edge cases** | Subscriptions renewing on banned accounts, overnight invalidation, refund friction. |
| **MCP auth gaps** | Silent re-auth missing `resource` param breaks compliant servers; no debug visibility. |

---

*Digest generated from github.com/anomalyco/opencode activity on 2026-09-01.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-01

## Today's Highlights
The Pi ecosystem saw a surge of provider integrations (Fireworks GLM 5.3, CoralBricks, Melious) and critical fixes for agent-session lifecycle bugs, compaction mid-loop checks, and npm 11.16.0 compatibility. A major experimental PR landed TCP/WebSocket transports with an Ollama provider, signaling a push toward remote/embedded runtimes. Meanwhile, TUI polish continues with search UX, dark-theme readability, and mouse-event exposure for extensions.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#5886](https://github.com/earendil-works/pi/issues/5886) | **AgentSession settlement/continuation & assistant-tail lifecycle bugs** | Meta-issue tracking recurring bugs where post-run logic continues from stale transcripts. Blocks reliable fork/continuation flows. | 10 comments, 4 👍 — high engagement, marked `pkg:agent`, `pkg:coding-agent` |
| [#6600](https://github.com/earendil-works/pi/issues/6600) | **`pi update --extensions` blocks npm scripts with npm 11.16.0** | npm 11.16.0 blocks install scripts by default; extension updates now fail unless users pass `--scripts-prepend-node-path` manually. | 5 comments — urgent for extension authors/users on latest npm |
| [#6552](https://github.com/earendil-works/pi/issues/6552) | **Allow extensions to request a deferred canonical reload** | Adds `ExtensionContext.requestReload()` so tools/event handlers can trigger safe reloads. Needed for interactive & RPC modes. | 5 comments, 1 👍 — `inprogress` |
| [#8061](https://github.com/earendil-works/pi/issues/8061) | **Context budget ignores maxTokens output reservation** | Requests rejected at ~78% input usage; auto-compact retry fails for same reason. Affects Gemini 1M-context models via OpenAI-compat. | 3 comments, 2 👍 — `inprogress` |
| [#8884](https://github.com/earendil-works/pi/issues/8884) | **Auto-compaction never checked mid-loop in long autonomous sessions** | `reserveTokens` setting silently ineffective; compaction check only ran post-run, not during tool-calling loops. | 3 comments — closed via [#8902](https://github.com/earendil-works/pi/pull/8902) |
| [#8935](https://github.com/earendil-works/pi/issues/8935) | **Parallel preflight abort can start an already prepared tool** | Later preflight `ctx.abort()` doesn’t stop earlier prepared tool; side effects execute with `signal.aborted=true`. | 1 comment — new, critical for parallel tool safety |
| [#8934](https://github.com/earendil-works/pi/issues/8934) | **`ExtensionUIContext.select()` unreadable on dark themes** | Non-highlighted options render near-invisible grey on dark backgrounds. | 1 comment — closed, UX fix |
| [#8933](https://github.com/earendil-works/pi/issues/8933) | **TUI crash: `renderResult` returning `undefined` on error tool result** | `undefined` component pushed to `Box` children → `uncaughtException` process exit. | 1 comment — closed, stability fix |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | **Parallel startup reports "No API key found" for ~48s with expired OAuth** | Expired credential for *another* provider blocks active provider’s auth; misleads debugging in multi-process setups. | 1 comment — closed, credential-store contention |
| [#8927](https://github.com/earendil-works/pi/issues/8927) | **Credential-store read takes exclusive lock for snapshot read** | Sync-path lock budget ~200ms; concurrent sessions hit "Lock file already held" errors. | 1 comment — closed, perf/contention fix |

---

## Key PR Progress (10 Important)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#8937](https://github.com/earendil-works/pi/pull/8937) | **fix(coding-agent): settle active turn before in-memory fork** | Moves `teardownCurrent()` before session reset/branch to prevent tool results landing in replacement session. | Open |
| [#8936](https://github.com/earendil-works/pi/pull/8936) | **fix(agent): stop prepared tools after preflight abort** | Stops prepared parallel tool calls from starting after later preflight abort; finishes as `Operation aborted` without executing. Fixes [#8935](https://github.com/earendil-works/pi/issues/8935). | Open |
| [#8901](https://github.com/earendil-works/pi/pull/8901) | **feat: TCP/WS transports, experimental server/client, Ollama provider** | Adds `createTcpTransportFactory`, `createWebSocketTransportFactory` (Node WS, zero deps), hand-rolled RFC 6455 server, `tcp://`/`ws://` transport addresses. **Major architectural expansion.** | Closed |
| [#8158](https://github.com/earendil-works/pi/pull/8158) | **feat(coding-agent): upgrade Mermaid terminal rendering** | Closes [#8157](https://github.com/earendil-works/pi/issues/8157), [#7832](https://github.com/earendil-works/pi/issues/7832). Improves diagram rendering in TUI. | Open |
| [#8931](https://github.com/earendil-works/pi/pull/8931) | **feat(ai): add thinking-level overrides for Fireworks GLM 5.3** | Adds overrides for `glm-5p3`/`glm-5p3-flash` (thinking-only models) per Fireworks API probe. Complements catalog regen from models.dev. | Closed |
| [#8925](https://github.com/earendil-works/pi/pull/8925) | **feat(ai): add CoralBricks provider** | Built-in provider for CoralBricks (GLM 5.3, Kimi K3, GPT-OSS 120B) — OpenAI-compat + Anthropic Messages, 1M ctx, cheaper (no cache charge). Catalog synced from models.dev. | Closed |
| [#8903](https://github.com/earendil-works/pi/pull/8903) | **feat(ai): add Melious provider** | European GDPR/TTDSG-compliant OpenAI-compat provider. Setup: `export MELIOUS_API_KEY=...`. Models defined in `generate-models.ts` (not on models.dev). | Closed |
| [#8915](https://github.com/earendil-works/pi/pull/8915) | **fix(ai): update DeepSeek V4 catalog pricing to average peak/off-peak** | DeepSeek V4 now bills peak/off-peak; Pi cost schema only supports flat rates → uses midpoint as pragmatic stopgap. Addresses [#8491](https://github.com/earendil-works/pi/issues/8491). | Closed |
| [#8908](https://github.com/earendil-works/pi/pull/8908) | **fix(coding-agent): preserve compaction queued prompts** | Publishes streaming continuation intent before async input hooks; waits for pending streaming preflights before settlement. Fixes race in [#5886](https://github.com/earendil-works/pi/issues/5886). | Closed |
| [#8902](https://github.com/earendil-works/pi/pull/8902) | **Route mid-loop compaction through full threshold check** | Ensures `prepareNextTurnWithContext` runs compaction check mid-loop (not just post-run). Fixes [#8884](https://github.com/earendil-works/pi/issues/8884). | Closed |

---

## Feature Request Trends
1. **Provider ecosystem expansion** — 3 new providers in 24h (Fireworks GLM, CoralBricks, Melious) + DeepSeek pricing update. Pattern: OpenAI-compat + Anthropic Messages endpoints, 1M+ context, catalog synced from models.dev where possible.
2. **TUI/UX polish for extensions** — Dark-theme readability (#8934), footer word-wrap (#8909), mouse events for fullscreen extensions (#8917), search UX (#8800), selection indicators (#8900).
3. **Agent-session reliability** — Deferred reload API (#6552), settlement before fork (#8937/#8929), compaction mid-loop (#8902), queued prompt preservation (#8908), queued message exposure (#8930).
4. **Transport & embedding flexibility** — TCP/WS transports (#8901), custom OAuth callback pages (#8924), `ANTHROPIC_BEDROCK_BASE_URL` support (#8911), remote OpenAI-compat docs (#8887).
5. **Model metadata richness** — Optional model descriptions in selector (#8922), thinking-level overrides (#8931), structured edit tool details (#8918).

---

## Developer Pain Points
| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **npm 11.16.0 breaks extension updates** | [#6600](https://github.com/earendil-works/pi/issues/6600) — scripts blocked by default, no obvious arg passthrough | All extension authors/users on npm ≥11.16.0 |
| **Agent session lifecycle fragility** | [#5886](https://github.com/earendil-works/pi/issues/5886) (meta), [#8935](https://github.com/earendil-works/pi/issues/8935), [#8937](https://github.com/earendil-works/pi/pull/8937), [#8908](https://github.com/earendil-works/pi/pull/8908) | Forks, continuations, compaction races cause lost tool results, crashes, stale state |
| **Compaction silently ineffective** | [#8884](https://github.com/earendil-works/pi/issues/8884) — `reserveTokens` ignored mid-loop; [#8061](https://github.com/earendil-works/pi/issues/8061) — output reservation ignored | Long autonomous sessions OOM or hit context limits unexpectedly |
| **TUI crashes from extension errors** | [#8933](https://github.com/earendil-works/pi/issues/8933) — `undefined` renderResult → process exit; [#8910](https://github.com/earendil-works/pi/issues/8910) — Ctrl+C dropped under load | Poor extension sandboxing; input unresponsiveness |
| **Credential store contention** | [#8927](https://github.com/earendil-works/pi/issues/8927) — exclusive lock for reads; [#8928](https://github.com/earendil-works/pi/issues/8928) — expired creds block parallel startup | Multi-session/parallel workflows hit lock timeouts & misleading errors |
| **Dark theme accessibility gaps** | [#8934](https://github.com/earendil-works/pi/issues/8934) — select dialog unreadable; [#8906](https://github.com/earendil-works/pi/issues/8906) — IME cursor flicker | Daily UX

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-01

## 1. Today's Highlights
The nightly release `v0.22.3-nightly.20260831.3a0c4c6108` ships web-shell git state hints and review emission improvements, but the follow-up nightly (`v0.22.3-nightly.20260901.a8e0d293fb`) failed its quality gate. Two high-priority bugs (#10520, #10530) block llama.cpp users on `toolSearch.threshold > 0` and specific model/sampler combinations — regressions introduced in 0.22.3. Meanwhile, the review subsystem continues rapid iteration: prebuilt worktrees, coverage ledgers, fix-audit rounds, and delta audits are all in flight across 10+ open PRs.

## 2. Releases
**v0.22.3-nightly.20260831.3a0c4c6108**  
[Release page](https://github.com/QwenLM/qwen-code/releases/tag/v0.22.3-nightly.20260831.3a0c4c6108)  
- `feat(web-shell)`: show git state hints beside branch picker actions ([#10397](https://github.com/QwenLM/qwen-code/pull/10397))  
- `feat(review)`: emit the St… (truncated in source)  

**v0.22.3-nightly.20260901.a8e0d293fb** — **FAILED**  
[Failed run](https://github.com/QwenLM/qwen-code/actions/runs/33455887802) — quality job failed; issue tracking at [#10668](https://github.com/QwenLM/qwen-code/issues/10668).

## 3. Hot Issues
| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#10520](https://github.com/QwenLM/qwen-code/issues/10520) `toolSearch.threshold > 0` breaks llama.cpp + MCP (400 grammar parse) | Blocks all MCP tool usage with non-zero threshold; regression in 0.22.3 | 5 comments, P2, `ready-for-human` |
| [#10530](https://github.com/QwenLM/qwen-code/issues/10530) 400 "failed to initialize samplers" on Qwen 3.8/3.6 in llama-server | Model-specific sampler regression; Pi/OpenCode unaffected | 4 comments, P2, `ready-for-human` |
| [#10669](https://github.com/QwenLM/qwen-code/issues/10669) Main CI failed on `4ea865acd8ca` pre-test | CI infrastructure flakiness blocking merge pipeline | Bot-tracked, `ready-for-agent` |
| [#10668](https://github.com/QwenLM/qwen-code/issues/10668) Nightly release quality gate failure | Prevents nightly publication; signals build/release pipeline issue | Bot-reported, `quality` job failed |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) Fleet Shepherd Dashboard (auto-maintained) | Operational visibility for self-hosted runner fleet | 3 comments, long-running bot issue |

## 4. Key PR Progress
| PR | Area | Summary |
|----|------|---------|
| [#10612](https://github.com/QwenLM/qwen-code/pull/10612) | Web Shell | Search conversation content (not just titles) in sidebar session search |
| [#10263](https://github.com/QwenLM/qwen-code/pull/10263) | CLI | Reload project runtime after `/cd` (settings, file watches, MCP, skills, etc.) |
| [#10423](https://github.com/QwenLM/qwen-code/pull/10423) | Review | Prebuild review worktree before any agent runs (`QWEN_REVIEW_PREBUILD=1`) |
| [#9768](https://github.com/QwenLM/qwen-code/pull/9768) | Review | Coverage as sealed, classified ledger with per-chunk identity & gap reasons |
| [#10136](https://github.com/QwenLM/qwen-code/pull/10136) | Review | Swap re-review rounds to fix-audit shape under critical posture |
| [#10169](https://github.com/QwenLM/qwen-code/pull/10169) | Review | Audit applied `--fix` for unpinned new assumptions via `fix-delta --snapshot` |
| [#10221](https://github.com/QwenLM/qwen-code/pull/10221) | Review | Add prose-execution audit & counter-frame audit lenses |
| [#10455](https://github.com/QwenLM/qwen-code/pull/10455) | CLI | Fix startup crash when output-language config file unwritable ([#10453](https://github.com/QwenLM/qwen-code/issues/10453)) |
| [#10565](https://github.com/QwenLM/qwen-code/pull/10565) | UI | Opt-in `ui.showToolCallArgs` renders full tool-call arguments inline |
| [#10636](https://github.com/QwenLM/qwen-code/pull/10636) | IPC | Per-session token auth for cross-session inbox connections |

## 5. Feature Request Trends
1. **Review pipeline hardening** — 6+ PRs evolving `/review` into a multi-lens, auditable, prebuilt-worktree system (coverage ledgers, fix-audit rounds, delta audits, prose/counter-frame lenses).
2. **Web Shell session fidelity** — Persistent session names across `/clear` ([#9260](https://github.com/QwenLM/qwen-code/pull/9260)), model/reasoning persistence ([#10489](https://github.com/QwenLM/qwen-code/pull/10489)), content search ([#10612](https://github.com/QwenLM/qwen-code/pull/10612)).
3. **CI/CD resilience** — Dedicated light lane for fast jobs ([#10575](https://github.com/QwenLM/qwen-code/pull/10575)), fleet-update failure alerting ([#10445](https://github.com/QwenLM/qwen-code/pull/10445)), bounded E2E retries ([#10572](https://github.com/QwenLM/qwen-code/pull/10572)).
4. **MCP/tooling robustness** — Auto-retry on transient EOF/network errors ([#10347](https://github.com/QwenLM/qwen-code/pull/10347)), but current threshold/sampler bugs show gaps.
5. **Cross-session communication** — Authenticated IPC inbox ([#10636](https://github.com/QwenLM/qwen-code/pull/10636)) and optional worktree support ([#10226](https://github.com/QwenLM/qwen-code/pull/10226)).

## 6. Developer Pain Points
- **llama.cpp integration broken in 0.22.3**: Two distinct sampler/grammar failures (#10520, #10530) affect local model users; threshold=0 is a workaround but disables tool search.
- **Nightly release instability**: Consecutive nightlies failing quality gates (#10668) and main CI flakes (#10669) erode confidence in bleeding-edge builds.
- **Review UX complexity**: Rapid feature addition (ledgers, audits, shapes) without consolidated docs makes adoption steep for new contributors.
- **Config file permission crashes**: Startup fails hard on unwritable home dirs ([#10455](https://github.com/QwenLM/qwen-code/pull/10455)) — common in container/CI environments.
- **Session state loss**: Manual session names, model preferences, and git context not consistently persisted across operations (`/clear`, daemon restart, `/cd`).

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-01

## 1. Today's Highlights

The CodeWhale TUI project is executing a major architectural refactor (EPIC-005: crate decomposition) while simultaneously hardening production reliability—fixing flaky tests, unifying provider authority across the stack, and delivering native ChatGPT/Codex PKCE sign-in that no longer requires the Codex CLI. A significant brand convergence is underway, replacing internal naming with the public "Codewhale" identity across docs, locales, and user-facing strings.

---

## 2. Releases

*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | Master tracking issue for the entire crate decomposition effort; all sub-EPICs and FEATs report here. 20 comments indicate active cross-team coordination. | 👍 0 • 20 comments • Updated 2026-08-31 |
| [#5605](https://github.com/Hmbown/CodeWhale/issues/5605) | **Flaky test: remote_control separate_predispatch_crashes_on_one_run_get_distinct_recovery_turn_ids** | Reproduced under full-suite parallel load; not caused by recent code moves. Critical for CI stability. | 👍 0 • 3 comments • **Closed 2026-09-01** |
| [#5713](https://github.com/Hmbown/CodeWhale/issues/5713) | **fix(custom): support wire = "responses" \| "anthropic" for kind="openai-compatible"** | Enables custom OpenAI-compatible providers to use Responses API or Anthropic Messages wire format—unlocks opencode-zen, Muse, Spark integrations. | 👍 0 • 2 comments • **Closed 2026-09-01** |
| [#5772](https://github.com/Hmbown/CodeWhale/issues/5772) | **Make provider selection explicit; stop implicit external CLI credential reuse** | Security/UX fix: prevents picker from probing disabled external CLI credentials and leaking HOME/temp paths without explicit consent. | 👍 0 • 1 comment • **Closed 2026-08-31** |
| [#5778](https://github.com/Hmbown/CodeWhale/issues/5778) | **Native ChatGPT/Codex subscription sign-in without the Codex CLI installed** | User-reported blocker: connecting ChatGPT/Codex subscription required Codex CLI. Now addressed by PR #5784 (PKCE flow). | 👍 0 • 1 comment • Updated 2026-08-31 |
| [#5755](https://github.com/Hmbown/CodeWhale/issues/5755) | **Unify provider route authority across picker, readiness, runtime, API, and CLI** | Resolves conflicting provider facts across the stack (selectable rows vs. runtime resolver vs. CLI registry). Foundational for consistent UX. | 👍 0 • 0 comments • **Closed 2026-09-01** |
| [#5767](https://github.com/Hmbown/CodeWhale/issues/5767) | **Fix public website auth links that resolve to localized 404s** | Production website routes (`/signin`, `/signup`, `/auth/callback`) returning 404 after localization—direct user impact. | 👍 0 • 0 comments • **Closed 2026-08-31** |
| [#5775](https://github.com/Hmbown/CodeWhale/issues/5775) | **Make Pod the canonical public roster command and vocabulary** | Terminology consolidation: eliminates competing nouns (`fleet`, `pod`, `saved rosters`, `durable runs`) for multi-agent rosters. | 👍 0 • 0 comments • **Closed 2026-08-31** |
| [#5768](https://github.com/Hmbown/CodeWhale/issues/5768) | **Compose and verify the Tideline shell as one coherent running TUI** | Integration verification: isolated green slices ≠ working app. Ensures startup mark, routing, composer, diagnostics, and rail compose correctly. | 👍 0 • 0 comments • **Closed 2026-08-31** |
| [#5771](https://github.com/Hmbown/CodeWhale/issues/5771) | **Give the active-session composer the shared [↑] send geometry** | UX consistency: active-session composer now matches startup Tideline composer's rounded enclosure and submit affordance. | 👍 0 • 1 comment • **Closed 2026-08-31** |

---

## 4. Key PR Progress

| # | PR | Type | Summary |
|---|----|------|---------|
| [#5711](https://github.com/Hmbown/CodeWhale/pull/5711) | `feat(runtime-api)` | Rehydrates persisted goals into hosted engines; adds host-side continuation loop so `update_goal` tool and prompt surface work on resume. |
| [#5749](https://github.com/Hmbown/CodeWhale/pull/5749) | `feat(app-server)` | Unix-socket transport + daemon/attach advertisement—Phase 0 foundation for desktop app-server. Adversarial review passed. |
| [#5782](https://github.com/Hmbown/CodeWhale/pull/5782) | `feat(compaction)` | Publishes survival contract and keeps last round (closes #4394). Ports contract onto current main with documented schema. |
| [#5742](https://github.com/Hmbown/CodeWhale/pull/5742) | `chore(brand)` | Converges all public prose on "Codewhale": ~100 doc lines, 15 locale packs (60→0 hits), 37 user-facing Rust strings, build metadata. |
| [#5750](https://github.com/Hmbown/CodeWhale/pull/5750) | `fix(session)` | Engine now adopts host session ID on resume—fixes root cause where fresh turns landed in a different session. |
| [#5751](https://github.com/Hmbown/CodeWhale/pull/5751) | `feat(protocol)` | Op/EventMsg parity between Rust core and TS surfaces with compile-enforced guard preventing silent drift. |
| [#5784](https://github.com/Hmbown/CodeWhale/pull/5784) | `feat(tui)` | **Native ChatGPT PKCE sign-in for `openai-codex`** (closes #5778). Browser PKCE with localhost callback; refreshable tokens in Codewhale-owned storage. |
| [#5792](https://github.com/Hmbown/CodeWhale/pull/5792) | `fix(engine)` | Emergency recovery trims with hysteresis; honest no-progress reporting. Fixes per-step thrash on long sessions (351 messages, ~247K tokens). |
| [#5783](https://github.com/Hmbown/CodeWhale/pull/5783) | `feat(config)` | Catalog authority shift: descriptors (how to talk to a host) replace compiled model lists. Enables live-fetch/generated offerings for Baseten, Groq, Cerebras, Command Code. |
| [#5790](https://github.com/Hmbown/CodeWhale/pull/5790) | `fix(tui)` | Isolates remote recovery lease generations—treats blank classic lease ID as fresh generation, preserves durable generation only on TurnStarted promotion. |

---

## 5. Feature Request Trends

1. **Provider & Credential Unification** — Multiple issues/PRs (#5755, #5772, #5783, #5784) converge on a single source of truth for provider routes, credentials, and model catalogs, moving away from hard-coded lists to descriptor-driven discovery.

2. **Native Authentication Flows** — Eliminating external CLI dependencies (#5778 → #5784) for ChatGPT/Codex, xAI, and other providers via PKCE/device-code flows with first-party token storage.

3. **Multi-Agent Roster UX** — Terminology and command consolidation (#5775: "Pod" as canonical noun) to reduce cognitive load across `fleet`, `pod`, saved rosters, durable runs, and sub-agents.

4. **TUI Shell Integration & Polish** — Composing isolated Tideline slices into a verified coherent app (#5768), with consistent composer geometry (#5771), startup mark (#5753), and rounded enclosures (#5758).

5. **Runtime Durability & Recovery** — Goal rehydration (#5711), session ID adoption (#5750), emergency compaction hysteresis (#5792), and lease generation isolation (#5790) all target long-session reliability.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Flaky CI under parallel load** | #5605: `remote_control` test fails only under full-suite parallel execution; not caused by code changes—infrastructure/test isolation issue. |
| **Provider authority fragmentation** | #5755: Picker, readiness, runtime RouteResolver, CLI registry, and catalog provenance all disagree on which providers/models are available. |
| **Implicit credential leakage** | #5772: Picker metadata-probes disabled external CLI credentials while presenting "no probing" posture; unkeyed rows adopt credentials on Enter without confirmation. |
| **External CLI dependency for auth** | #5778: ChatGPT/Codex subscription sign-in required Codex CLI (`~/.codex/auth.json`)—blocked users in harnesses without CLI (e.g., opencode). |
| **Terminology overload for multi-agent** | #5775: Users encounter `fleet`, `pod`, saved rosters, durable runs, sub-agents without stable boundaries—hurts learnability, docs, CLI help. |
| **Compiled model list maintenance burden** | #5783: Baseten/Groq/Cerebras rosters compiled into binary; adding Command Code same way would repeat mistake. Descriptor-driven approach needed. |
| **Emergency compaction thrash** | #5792: Long sessions (350+ messages) hit per-step emergency compaction loop with no hysteresis, no honest no-progress reporting. |
| **Brand inconsistency in user-facing copy** | #5742: 100+ doc lines, 60 locale hits, 37 Rust string literals used stale/internal names—required sweeping convergence to "Codewhale". |

---

*Digest generated from GitHub data as of 2026-09-01. All links point to `github.com/Hmbown/CodeWhale`.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*