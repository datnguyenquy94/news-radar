# AI CLI Tools Community Digest 2026-08-14

> Generated: 2026-08-14 02:29 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-08-14)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **two tiers**: mature, enterprise-backed tools (Claude Code, Codex, Gemini CLI, Copilot CLI, Qwen Code) shipping weekly releases with dedicated platform teams, and emerging/community-driven tools (OpenCode, Pi, Kimi, CodeWhale) iterating on core architecture. Today’s dominant signal is **regression-driven stabilization** — every major tool has at least one critical regression blocking power-user workflows (cross-session messaging, MCP reliability, token accounting, Windows parity). Multi-session orchestration, sub-agent safety, and context-window management have graduated from "nice-to-have" to **table-stakes requirements** across the board.

---

## 2. Activity Comparison

| Tool | Issues (Hot/Total Signal) | PRs Merged (24h) | Release Status | Critical Regressions |
|------|---------------------------|------------------|----------------|----------------------|
| **Claude Code** | 12+ cross-session + 10 hot | 2 (low-risk) | **v2.1.232** shipped | Windows cross-session messaging (12+ issues), cyber safeguard false positives, MSIX update failures |
| **OpenAI Codex** | 10 hot (5 critical) | **20+** | 4 alphas (0.148.0-α.11–14) | macOS 100% CPU/10GB RAM/OOM, MCP fd leaks (21 comments), Windows state corruption, Remote Control broken |
| **Gemini CLI** | 10 hot (3 P1) | **9 merged** | **v0.56.0-nightly** | Enter key no-op (10 ���), 128-tool limit, auto-memory loops |
| **GitHub Copilot CLI** | 10 hot (5 MCP/Windows) | 1 (docs only) | **v1.0.80 / -0 / -1** | Reasoning effort on Haiku 4.5, MCP OAuth (5 distinct), session state loss, hardcoded model fallbacks |
| **Qwen Code** | 6 notable | **18 listed** | **v0.21.11 stable + preview + nightly** | Windows Ctrl+V paste, SWE-bench 0/500, silent link/OAuth failures |
| **OpenCode** | 10 noteworthy (4 new v2) | **10 merged** | None | Compaction exceeds context, Zen API rate-limit storms, legacy plugin loader crashes |
| **Pi** | 10 hot (2 high-engagement) | **5 closed, 5 open** | None | Auto-compaction silent failure (19 comments), prompt editor O(n) latency (7 comments) |
| **Kimi Code** | 3 critical | 0 | None | ACP streaming hang (no [DONE] frame), runaway 88k token generation |
| **CodeWhale (DeepSeek)** | 10 hot (3 P0) | **9 merged** | **v0.9.7** (rebrand) | Token ceiling 65k vs 384k catalog, stale write-claims, web UI "totally broken" |
| **Grok Build** | 0 | 0 | None | No activity |

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Demanding | Specific Needs |
|-------------|-----------------|----------------|
| **Multi-session / sub-agent orchestration** | Claude Code (#24798, #86012), Codex (thread queues #38456, skill delegation #38475), Qwen Code (`/coordinate` #8804, fork-from-any-message #8817), Copilot CLI (session awareness v1.0.80-0), OpenCode (tab isolation #42456) | Reliable cross-session messaging, dependency-aware scheduling, fork isolation controls, session discovery (`--list-all-sessions` Gemini #28596) |
| **MCP server reliability & OAuth** | Codex (#26984 fd leaks, #38480 idle CPU), Copilot CLI (#4472 token refresh race, #4464 Entra scope bug, #4480 Atlassian regression), Claude Code (OAuth fix v2.1.231), CodeWhale (#5336 spec compliance) | Connection pooling, proper shutdown, token refresh concurrency, spec adherence (`nextCursor` null vs absent), idle optimization |
| **Context compaction fidelity** | Codex (#38466 bloat/truncation, #38445 retain dev messages), Claude Code (#53065 advisor 2× tokens), Pi (#6879 silent failure past 100%), OpenCode (#42448 compaction exceeds window), Gemini (capacity retries v0.56) | Accurate token accounting, selective retention, compaction triggers at real pressure, silent retry with TTL |
| **Windows / WSL parity** | Claude Code (MSIX #73107, cross-session cluster), Codex (#30435 cwd/Chrome/IME, #26990 state corruption), Copilot CLI (#4463 socket 10013, #4480 Atlassian), Qwen Code (#9061 Ctrl+V, #7118 installer), Gemini (ripgrpc `EFTYPE`) | MSIX lifecycle fixes, path translation, sandbox permissions, IME support, crash-safe state, installer robustness |
| **Sub-agent safety guardrails** | Codex (#37998 `git clean -fX` data loss, #38481 egress auth), Qwen Code (autofix/loop hardening #8899, #9104), CodeWhale (auto-review guardian #5353, circuit breaker #5358) | Dry-run, scoped permissions, destructive-action confirmation, denial rationale, escalation tiers |
| **Observability & debugging** | Codex (OTEL #9107, compact journals #9057), Pi (startup budget #7739), Qwen Code (daemon log correlation #9084), OpenCode (interrupt latency #42120) | OpenTelemetry tracing, structured error surfacing, token receipts, session replay |

---

## 4. Differentiation Analysis

| Dimension | Enterprise-Backed (Claude, Codex, Gemini, Copilot, Qwen) | Community/Emerging (OpenCode, Pi, Kimi, CodeWhale) |
|-----------|----------------------------------------------------------|-----------------------------------------------------|
| **Release Cadence** | Weekly stables + daily alphas/nightlies | Irregular; architectural refactors batch-released |
| **Platform Investment** | Desktop apps (macOS/Windows), Web Shell, VS Code extensions, mobile handoff | Primarily TUI/CLI; limited Desktop/Web (CodeWhale web UI broken) |
| **Multi-Model Strategy** | First-party + BYOM + provider abstractions (Bedrock #38470, Vertex, OpenAI-compat) | Local-first (CodeWhale DS4 #5365, Pi Bedrock #6216), limited cloud provider support |
| **Enterprise Features** | CVP approval, Entra ID OAuth, audit logs, SWE-bench CI, fleet dashboards | Configurable file modes (#7779), keyless local presets, i18n |
| **Architectural Focus** | Reliability hardening (compaction, MCP, session state), safety (Guardian V2, auto-review) | Performance (lazy loading OpenCode #42468–42470, Pi viewport #8066), schema simplification (CodeWhale #5324) |
| **Target User** | Professional dev teams, enterprise, power users building agent pipelines | Early adopters, local-first enthusiasts, contributors shaping core architecture |

**Technical Approach Divergence:**
- **Claude/Codex/Gemini**: Centralized runtime with heavy server-side orchestration (prompt cache, subagent forking, thread queues)
- **Qwen/CodeWhale**: Daemon + plugin architecture (Agent Plugins v1, `/coordinate`, MCP-as-extension)
- **OpenCode/Pi**: Rust/TS hybrid cores optimizing startup latency (lazy imports, viewport rendering) and terminal hygiene

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / Maturing** | **Codex, Qwen Code, Gemini CLI** | Codex: 20+ PRs/day, 4 alphas/24h, skill delegation + thread queues landing. Qwen: 3 releases + 18 PRs, Agent Plugins v1 + multi-agent shipped. Gemini: Security-first (RCE fix, CVE patch), capacity hardening, Node 24/22 modernization. |
| **High Momentum / Stabilizing** | **Claude Code, Copilot CLI** | Claude: Feature release (v2.1.232) overshadowed by Windows regression cluster; low PR velocity on fixes. Copilot: Patch trilogy adds MCP/session flags but 5 MCP/Windows regressions filed; only docs PR moved. |
| **Active Architecture Iteration** | **OpenCode, Pi, CodeWhale** | OpenCode: 10 perf PRs targeting startup latency. Pi: 5 PRs closed (terminal hygiene, viewport, boolean flags). CodeWhale: Rebrand complete, v0.9.8 epics (guardian tier, DS4 local, schema simplification) with 9 merged PRs. |
| **Early / Blocked** | **Kimi Code, Grok Build** | Kimi: 3 critical bugs (streaming hang, runaway gen, memory), no PRs, no releases. Grok: Zero activity. |

**Community Health Indicators:**
- **Highest engagement**: Claude Code #84352 (94 comments, cyber safeguard), Codex #26984 (21 comments, MCP fd leaks), Kimi #1283 (38 comments, Memory System)
- **Fastest fix cycle**: Pi (#8029 → #8066 PR same day), Codex (4 alphas + 20 PRs in 24h), CodeWhale (9 PRs merged post-rebrand)
- **Longest-standing bugs**: Codex #26984 (since Jun 8), Claude #73107 (MSIX, chronic), Pi #2366 (rate limiting, since Mar)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Implication for Developers |
|-------|----------|----------------------------|
| **Multi-session pipelines are production patterns** | 6/10 tools building orchestration primitives (forking, thread queues, `/coordinate`, session mentions) | Design workflows as **session DAGs**; invest in tooling that manages dependencies, checkpoints, and cross-session messaging reliably |
| **MCP is the integration backbone — but fragile** | Every tool has MCP bugs (fd leaks, OAuth races, spec compliance, idle CPU) | Treat MCP servers as **unreliable dependencies**: implement client-side pooling, timeouts, circuit breakers; audit server shutdown behavior |
| **Context-window management is the new memory management** | Compaction bugs in 5 tools; token accounting inflation (advisor 2×); silent failures | Demand **token transparency** (separate internal vs user tokens); build compaction-aware prompt strategies; monitor real context pressure |
| **Windows is the quality gate** | Regression clusters in Claude, Codex, Copilot, Qwen, Gemini | **CI must include Windows runners**; MSIX/AppX lifecycle, sandbox permissions, and path translation are non-negotiable |
| **Sub-agent safety is moving from optional to mandatory** | Data loss (Codex), runaway generation (Kimi), autofix loops (Qwen), guardian tiers (CodeWhale) | Adopt **least-privilege sub-agents**: dry-run by default, scoped tool access, destructive-action confirmation, audit logging |
| **Local/keyless models gaining first-class support** | CodeWhale DS4 preset (#5365), Pi Bedrock Mantle (#6216), Codex Bedrock provider (#38470) | Hybrid cloud/local architectures are viable; evaluate **keyless local routing** for cost-sensitive or air-gapped workloads |
| **Observability shifting from logs → structured traces** | OTEL in Qwen, Codex, Pi startup budgets; compact replay journals | Instrument **agent invocations with span correlation**; use trace IDs for cross-session debugging and cost attribution |

---

## Bottom Line for Decision-Makers

**If you need production stability today**: **Gemini CLI** (security hardening, capacity retries, Node 22 sandbox) and **Qwen Code** (Agent Plugins v1, multi-agent, 3-release cadence) show the strongest fix velocity. **Claude Code** has the best multi-session primitives but **Windows is currently broken** for cross-session workflows.

**If you're building agent pipelines**: **Codex** (thread queues, skill delegation, Guardian V2) and **Qwen Code** (`/coordinate`, fork-from-any-message, OTEL) have the most complete orchestration stacks — but both have active regressions (macOS perf, Windows paste).

**If you prioritize local-first / cost control**: **CodeWhale** (DS4 keyless, guardian auto-review) and **Pi** (startup budget, terminal hygiene) are investing heavily in local model UX, though both lack Windows Desktop parity.

**Watch list**: **OpenCode**'s lazy-loading refactors could yield the fastest cold-start; **Kimi**'s Memory System (38 comments) signals strong demand for persistent cross-session context — whoever ships this well captures a core workflow.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-14 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator` eval fix | Fixes `run_eval.py` reporting 0% recall for all skill descriptions; repairs Windows stream reading, trigger detection, parallel workers | Directly addresses **#556** (12 comments, 7����) and **#1169** (3 comments); core blocker for description-optimization loop | Open |
| 2 | **[#1099](https://github.com/anthropics/skills/pull/1099)** Windows `run_eval.py` crash fix | Resolves `[WinError 10038]` on subprocess pipe reads causing 0% trigger rate on Windows | Companion to #1298; same root cause as #556 | Open |
| 3 | **[#1050](https://github.com/anthropics/skills/pull/1050)** Windows subprocess + encoding | Two 1-line fixes: `claude.cmd` resolution via `PATHEXT`, UTF-8 encoding for subprocess output | Addresses Windows portability for skill-creator toolchain | Open |
| 4 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` skill | Mechanical file verification + 4-dimension reasoning audit (correctness, security, maintainability, clarity) | Novel meta-skill: universal quality gate for any AI output; v1.3.0 | Open |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` skill | Full testing stack: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Comprehensive reference skill; 30-day update cycle suggests active refinement | Open |
| 6 | **[#568](https://github.com/anthropics/skills/pull/568)** `servicenow` platform skill | Broad ServiceNow coverage: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, Vulnerability Response, IntegrationHub | Enterprise demand signal; last updated 2026-08-12 (active) | Open |
| 7 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` skill | Prevents orphans, widows, numbering misalignment in AI-generated docs | Addresses universal pain point in generated documents | Open |
| 8 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills evaluating structure (20%), security (20%), maintainability (20%), usability (20%), examples (20%) | Community tooling for skill authors; marketplace addition | Open |

> **Note**: PR comment counts were not available in the dataset; ranking combines issue cross-references, update recency, and ecosystem impact.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issue # / Comments / ���) | Implication |
|-------|-----------------------------------|-------------|
| **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) 43c / 2���� — Community skills masquerading as official `anthropic/` namespace | Critical: need verified publisher model or namespace separation |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) 16c / 8���� — No org-wide library; manual file sharing via Slack/Teams | High demand for native distribution/sharing UX |
| **Evaluation Infrastructure Reliability** | [#556](https://github.com/anthropics/skills/issues/556) 12c / 7���� + [#1169](https://github.com/anthropics/skills/issues/1169) 3c / 1���� — `run_eval.py` 0% recall blocks skill optimization | Foundational: skill-creator toolchain is broken for most users |
| **Token/Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) 4c — `claude-api` skill injects 156k tokens; [#12](https://github.com/anthropics/skills/issues/12) 4c / 1���� — docx whitespace corruption | Skills must be context-efficient; output fidelity matters |
| **Meta-Skills for Governance/Quality** | [#412](https://github.com/anthropics/skills/issues/412) 6c (closed) — agent-governance proposal; [#1385](https://github.com/anthropics/skills/issues/1385) 4c — reasoning quality gate pipeline | Growing appetite for *skills that audit/improve other skills* |
| **MCP/Interop Exposure** | [#16](https://github.com/anthropics/skills/issues/16) 4c — Expose skills as MCPs; [#29](https://github.com/anthropics/skills/issues/29) 4c — Bedrock support | Demand for protocol-level integration beyond Claude Code |
| **Duplicate/Plugin Hygiene** | [#189](https://github.com/anthropics/skills/issues/189) 6c / 9���� — `document-skills` & `example-skills` install identical content | Packaging/discovery UX needs cleanup |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval pipeline fix | Unblocks core skill-authoring workflow; 2 linked issues (15 total comments) |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Novel universal quality gate; aligns with #1385 proposal (4 comments) |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Addresses [#1417](https://github.com/anthropics/skills/issues/1417); community-named problem; recent (Jul 2026) |
| **[#1538](https://github.com/anthropics/skills/pull/1538)** | Spec compliance fixes | Brings `template/` and another skill into spec compliance; repo is reference implementation |
| **[#568](https://github.com/anthropics/skills/pull/568)** | `servicenow` | Enterprise scope; active updates through Aug 2026 |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Comprehensive reference skill; 30-day iteration cycle |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal applicability; solves silent quality degradation in all generated docs |
| **[#538](https://github.com/anthropics/skills/pull/538)** / **[#541](https://github.com/anthropics/skills/pull/541)** / **[#539](https://github.com/anthropics/skills/pull/539)** | PDF/DOCX/skill-creator hardening | Case-sensitivity, OOXML ID collision, YAML parsing — all silent data-corruption bugs |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for a trustworthy, shareable, and self-improving skill ecosystem — starting with fixing the broken evaluation pipeline that prevents skill authors from reliably optimizing triggers, and extending to namespace security, org-level distribution, and meta-skills that audit other skills.**

---

# Claude Code Community Digest — 2026-08-14

## Today's Highlights
Claude Code **v2.1.232** ships with subagent forking enabled by default (inheriting full conversation context and prompt cache) and introduces `@`-mentions to reference other Claude sessions. Meanwhile, a **cluster of cross-session messaging regressions** on Windows Desktop (v1.28929.0 / runtime 2.1.227+) dominates the issue tracker — messages are delivered to the UI but never trigger recipient turns, leaving sessions wedged for minutes until watchdog timeouts. A separate cyber-safeguard false-positive wave affects CVP-approved organizations.

---

## Releases

### v2.1.232 — Subagent Forking Default + Session Mentions
- **Subagent forking on by default**: `subagent_type: "fork"` now inherits the full conversation history and prompt cache; non-teammate agent spawns in interactive sessions run in background by default.  
- **`@`-mentions**: Type `@` in the prompt to mention another Claude session by name.  
- [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.232)

### v2.1.231 — MCP OAuth Fix
- Fixed MCP OAuth sign-in redirect-URI mismatch for servers using pre-registered OAuth clients (e.g., Slack).  
- [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.231)

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | **CVP-approved org still hit by cyber safeguard blocks** | Verified organizations incorrectly flagged; blocks interrupt workflows on Max plans. | 94 comments, 14 ��� |
| [#24798](https://github.com/anthropics/claude-code/issues/24798) | **Inter-session communication for multi-Claude workflows** | Foundational request: direct, dependency-aware messaging between parallel sessions. | 66 comments, 21 ��� |
| [#85603](https://github.com/anthropics/claude-code/issues/85603) | **Typed input silently dropped at turn end (TUI)** | Keystrokes made during a turn vanish on turn boundary — data loss in interactive use. | 22 comments, 1 ��� |
| [#53065](https://github.com/anthropics/claude-code/issues/53065) | **`advisor()` tool doubles reported input tokens → premature auto-compact** | Advisor forwards full transcript, inflating usage ~2× and triggering compaction at ~50% real context. | 15 comments, 7 ��� |
| [#86012](https://github.com/anthropics/claude-code/issues/86012) | **Cross-session messages leave recipient unresponsive until 15–20 min idle-timeout kill** | Messages render in UI but never reach runtime; session stuck in `hadFirstResponse=false`. | 15 comments, 3 ��� |
| [#82092](https://github.com/anthropics/claude-code/issues/82092) | **Desktop telemetry OTLP endpoint missing headers → every flush rejected** | Telemetry pipeline broken; no observability data reaches backend. | 10 comments, 5 ��� |
| [#86138](https://github.com/anthropics/claude-code/issues/86138) | **Windows Desktop 2.1.227: `send_message` to paused session never delivered to model** | Tool returns success, session resumes, but message never triggers a turn — permanent phantom turn. | 7 comments, 1 ��� |
| [#86237](https://github.com/anthropics/claude-code/issues/86237) | **Cross-session messages render in UI but never reach runtime input queue (regression 2.1.222→2.1.227)** | Confirms regression window; messages visible but not processed. | 5 comments, 1 ��� |
| [#86298](https://github.com/anthropics/claude-code/issues/86298) | **Messages silently dropped: held for approval UI never offers, then expire (~5 min)** | New failure mode — messages enter approval limbo without user interaction. | 5 comments |
| [#73107](https://github.com/anthropics/claude-code/issues/73107) | **Windows MSIX upgrade fails: "Another program is using this file" (orphaned elevated child pins AppX silo)** | Blocks app launch post-update; requires reboot. Long-standing MSIX lifecycle bug. | 3 comments, 1 ��� |

---

## Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#86537](https://github.com/anthropics/claude-code/pull/86537) | Fix duplicated word in CHANGELOG.md | OPEN | Trivial typo fix (`to to` → `to`) in `CLAUDE_BASH_NO_LOGIN` entry (v1.0.124). |
| [#60280](https://github.com/anthropics/claude-code/pull/60280) | chore(ci): SHA-pin remaining `actions/checkout` & `actions/github-script` | CLOSED | Supply-chain hardening: pins 6 workflows to immutable SHAs (follow-up to #56784). |

> **Note:** Only 2 PRs updated in the last 24h — both low-risk maintenance. No feature or bug-fix PRs in flight for the high-profile regressions above.

---

## Feature Request Trends (from Issue Corpus)

1. **First-class multi-session orchestration** — #24798 (66 comments) and the cross-session messaging cluster show developers building *pipelines* of Claude sessions (planner → coder → reviewer) and needing reliable, dependency-aware communication.
2. **Subagent / fork ergonomics** — v2.1.232’s default fork behavior addresses a latent demand; expect follow-ups for fork isolation controls, shared tool namespaces, and fork-to-fork messaging.
3. **TUI input reliability** — #85603 highlights that “type-ahead during turn” is a core power-user workflow; silent drops are a regression risk.
4. **Token accounting transparency** — #53065 / #81620: developers want `advisor` (and other internal tools) to report *separate* usage so auto-compaction reflects actual context pressure.
5. **Windows Desktop parity & stability** — MSIX launch failures (#73107, #77421, #86555), GPU crashes (#86265, #86146), and cross-session regressions indicate a platform-specific quality gap.

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Cross-session messaging broken on Windows Desktop** | 8+ distinct issues filed in 48h (#86012, #86138, #86069, #86237, #86298, #86386, #86059, #86385, #86212, #86088, #86398, #86029) — all regression from 2.1.222 → 2.1.227/231 | **Critical** — blocks multi-session workflows on Windows |
| **Cyber safeguard false positives on approved orgs** | #84352 (94 comments), #86527 — CVP approval not respected; blocks fire on *model-generated* context | High — affects Max/Enterprise users |
| **`advisor()` token inflation → premature compaction** | #53065, #81620 — usage doubled, compaction at ~50% real window | High — degrades long-context reasoning |
| **Windows MSIX update/install broken** | #73107, #77421, #77379, #86555 — orphaned processes pin AppX container, require reboot | Chronic — every major update cycle |
| **TUI input loss during turns** | #85603 — typed chars discarded at turn boundary | Medium — impacts interactive power users |
| **Telemetry pipeline dead (OTLP headers missing)** | #82092 — zero observability from Desktop | Medium — internal visibility gap |

---

**Bottom line:** The v2.1.232 feature release is overshadowed by a **Windows Desktop cross-session messaging outage** affecting a significant portion of the multi-session power-user base. Expect a hotfix cycle targeting the 2.1.227+ regression window. Meanwhile, the cyber-safeguard and `advisor()` token-accounting bugs remain open with strong community validation.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-14

---

## 1. Today's Highlights

The Codex team shipped **four rapid alpha releases** (0.148.0-alpha.11–14) in a single day, signaling aggressive iteration on the 0.148 line. Meanwhile, the issue tracker shows a cluster of **critical regressions in the latest desktop app (26.810.41047)**: macOS users report 100%+ CPU / 10 GB RAM / V8 OOM crashes, Windows users face OAuth failures and mouse stutter, and MCP stdio servers are leaking file descriptors leading to `EMFILE` errors. On the PR side, 20+ merges today focus on **skill model delegation (Luna/Sol/Terra)**, **thread queue APIs**, **Guardian V2 tool context**, and **context compaction fidelity** — indicating a push toward richer multi-model orchestration and safer long-running sessions.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.148.0-alpha.14` | Alpha | Latest in the 0.148 series; no changelog published yet. |
| `rust-v0.148.0-alpha.13` | Alpha | Incremental alpha. |
| `rust-v0.148.0-alpha.12` | Alpha | Incremental alpha. |
| `rust-v0.148.0-alpha.11` | Alpha | Incremental alpha. |

> **Signal**: Four alphas in 24h suggests active stabilization of a feature branch (likely model delegation, thread queues, or sandbox changes). Watch for a beta/RC soon.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **[#38468](https://github.com/openai/codex/issues/38468)** | **[macOS] Severe perf regression: 100%+ CPU, 10+ GB RAM, UI hangs** (app v26.810.41047) | Blocks daily work on Mac; regressed from prior working build. | New (2 ���, 2 comments) — high urgency. |
| **[#38455](https://github.com/openai/codex/issues/38455)** | **ChatGPT Desktop spawns 187 `computer-use` threads → V8 OOM crash** (macOS, idle) | Indicates runaway background worker spawn; data loss risk. | 3 comments, 0 ��� — critical stability. |
| **[#26984](https://github.com/openai/codex/issues/26984)** | **MCP stdio servers leak pipe fds + orphan children → EMFILE** | Long-running CLI sessions eventually hit `Too many open files`; affects all platforms. | **21 comments, 4 ���** — longest-running high-engagement bug (open since Jun 8). |
| **[#38482](https://github.com/openai/codex/issues/38482)** | **OAuth `token_exchange_failed` after auto-update to 26.810.41047 (macOS)** | Breaks auth immediately post-update; users locked out. | New, 1 comment — regression in today’s release. |
| **[#37403](https://github.com/openai/codex/issues/37403)** | **[macOS][regression] Desktop cannot resume Remote Control/CLI: `already has an active writer`** | Breaks mobile ↔ desktop handoff workflow; core remote use case. | **18 comments, 11 ���** — strong community pain. |
| **[#26990](https://github.com/openai/codex/issues/26990)** | **Windows Desktop local state not crash-safe: pins/projects reset, config regresses** | Power loss = data loss; config rolls back to future timestamps. | **18 comments, 0 ���** — durability gap. |
| **[#38466](https://github.com/openai/codex/issues/38466)** | **Long-running session huge after repeated compaction; thread read truncated** | Context compaction bloats history; clients truncate payloads. | New, 3 comments — scalability blocker. |
| **[#38472](https://github.com/openai/codex/issues/38472)** | **VS Code extension blank/unresponsive after resuming paused Goal** | Breaks IDE integration; requires restart. | New, 3 comments. |
| **[#37998](https://github.com/openai/codex/issues/37998)** | **Critical data loss: sub-agent `git clean -fX` deleted entire ignored data dir** | Sub-agent destructive action with no guardrails; high severity. | 1 comment — safety gap in delegation. |
| **[#30435](https://github.com/openai/codex/issues/30435)** | **WSL agent: bad cwd + Chrome/Computer Use unavailable** | Windows+WSL2 users lose browser/computer-use tools; cwd broken. | **5 comments, 2 ���** — platform gap. |

---

## 4. Key PR Progress (Top 10 Merged Today)

| # | PR | Summary | Category |
|---|----|---------|----------|
| **[#38475](https://github.com/openai/codex/pull/38475)** | Add bounded skill model delegation instructions (`SkillModelDelegationInstruction`) | Enables skills to request Luna while on Sol/Terra; validates model IDs. | **Multi-model orchestration** |
| **[#38470](https://github.com/openai/codex/pull/38470)** | Add Amazon Bedrock Runtime provider | New built-in provider for regional `bedrock-runtime` OpenAI-compatible endpoints with SigV4. | **Provider expansion** |
| **[#38467](https://github.com/openai/codex/pull/38467)** | Parse `model` annotation from skill frontmatter (supports `model: luna`) | Skills can declare preferred model; unknown values ignored gracefully. | **Skill metadata** |
| **[#38456](https://github.com/openai/codex/pull/38456)** | Experimental thread queue APIs (`thread/queue/add`, `list`, `update`, `delete`, `reorder`, `start`) | Persistent FIFO queue for user submissions; auto-dispatch after turns. | **Async workflow / batching** |
| **[#38441](https://github.com/openai/codex/pull/38441)** | Give Guardian V2 full tool action context (pre-hook `ToolPayload`) | Guardian can now inspect requested action + conversation context for risk assessment. | **Safety / guardrails** |
| **[#38445](https://github.com/openai/codex/pull/38445)** | Retain client developer messages across context compaction | Preserves annotated client instructions when `retain_client_developer_messages` enabled. | **Context fidelity** |
| **[#38443](https://github.com/openai/codex/pull/38443)** | Tag current-time reminders with `<current_time_reminder>` | Disambiguates injected time reminders from tool output in model context. | **Context hygiene** |
| **[#38446](https://github.com/openai/codex/pull/38446)** | Refresh current-time reminders for full-history subagents | Prevents inherited stale reminders; keeps child’s fresh reminder. | **Subagent context** |
| **[#38447](https://github.com/openai/codex/pull/38447)** | Add running-task exit choices to local daemon sessions (Ctrl-C menu) | UX: cancel task & stay / exit leaving task running / stop task & exit. | **CLI UX** |
| **[#38440](https://github.com/openai/codex/pull/38440)** | App-server support for reverting paginated threads (`thread/revert`) | Replaces durable history with prefix before `beforeTurnId`; preserves thread ID. | **Session recovery** |

> **Theme**: Today’s PRs are heavily weighted toward **multi-model skill delegation**, **thread durability/queueing**, **Guardian safety upgrades**, and **context compaction correctness** — all foundational for reliable long-horizon agent runs.

---

## 5. Feature Request Trends (from Issues)

| Trend | Evidence (Issues) | Implication |
|-------|-------------------|-------------|
| **Background / non-blocking task monitoring** | [#2062](https://github.com/openai/codex/issues/2062) (9 comments, 10 ���) — “monitor background services, inspect logs without blocking” | Users want **async supervision** of long builds/servers; agent should poll logs, not block. |
| **Crash-safe local state (Windows)** | [#26990](https://github.com/openai/codex/issues/26990) — pins/projects reset, config regresses after power loss | **Durability** is a gap; need transactional writes or WAL for local DB. |
| **Remote Control / mobile ↔ desktop handoff reliability** | [#37403](https://github.com/openai/codex/issues/37403), [#33396](https://github.com/openai/codex/issues/33396) | **Session continuity** across devices is a core workflow; regressions are high-pain. |
| **MCP server lifecycle management** | [#26984](https://github.com/openai/codex/issues/26984) (fd leaks), [#38480](https://github.com/openai/codex/issues/38480) (app-server rebuilds MCP session per call → 120% CPU idle) | MCP integration needs **connection pooling, proper shutdown, idle optimization**. |
| **Context compaction scalability** | [#38466](https://github.com/openai/codex/issues/38466) — huge rollout, truncated reads; [#38445](https://github.com/openai/codex/pull/38445) retaining dev messages | **Long-running sessions** need better compaction strategy (summarization, pagination, selective retention). |
| **Sub-agent safety guardrails** | [#37998](https://github.com/openai/codex/issues/37998) — `git clean -fX` wiped data dir; [#38481](https://github.com/openai/codex/issues/38481) auto-review ignores skill egress auth | Delegation needs **permission scoping, dry-run, confirmation for destructive ops**. |
| **Windows + WSL first-class support** | [#30435](https://github.com/openai/codex/issues/30435) (bad cwd, no Chrome), [#33114](https://github.com/openai/codex/issues/33114) (Full Access not live), [#36568](https://github.com/openai/codex/issues/36568) (Korean IME) | Platform parity gaps: **path translation, sandbox permissions, IME, tool availability**. |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency / Signal | Representative Issues |
|------------|-------------------|----------------------|
| **Desktop app regressions on auto-update** | High — multiple reports today for v26.810.41047 | [#38468](https://github.com/openai/codex/issues/38468) (macOS perf), [#38482](https://github.com/openai/codex/issues/38482) (OAuth fail), [#38455](https://github.com/openai/codex/issues/38455) (OOM), [#37403](https://github.com/openai/codex/issues/37403) (Remote broken) |
| **MCP stdio fd leaks → `EMFILE` in long sessions** | Persistent (open since Jun 8, 21 comments) | [#26984](https://github.com/openai/codex/issues/26984) |
| **Windows state corruption on crash/power loss** | High impact, 18 comments | [#26990](https://github.com/openai/codex/issues/26990) |
| **Remote/mobile session continuity broken** | 11 ���, 18 comments | [#37403](https://github.com/openai/codex/issues/37403) |
| **Context compaction bloat + truncation** | New but architectural | [#38466](https://github.com/openai/codex/issues/38466) |
| **Sub-agent destructive actions without confirmation** | Critical severity | [#37998](https://github.com/openai/codex/issues/37998) |
| **WSL/Windows tool gaps (Chrome, Computer Use, cwd, IME)** | Multiple distinct issues | [#30435](https://github.com/openai/codex/issues/30435), [#36568](https://github.com/openai/codex/issues/36568) |
| **VS Code extension instability** | New regression | [#38472](https://github.com/openai/codex/issues/38472), [#38107](https://github.com/openai/codex/issues/38107) |
| **App-server idle CPU spin (MCP rebuild per call)** | Performance bug | [#38480](https://github.com/openai/codex/issues/38480) |

---

## TL;DR for Maintainers

- **Ship a hotfix for 26.810.41047** — macOS perf/OOM, Windows OAuth, Remote Control regression are blocking.
- **Fix MCP fd leak (#26984)** — it’s the oldest high-engagement bug and affects all long-running CLI users.
- **Land the skill delegation + thread queue PRs** — they unblock async multi-model workflows users are asking for.
- **Invest in Windows/WSL parity** — path translation, sandbox permissions, IME, and tool availability are recurring.
- **Add sub-agent safety rails** — dry-run, scoped permissions, destructive-action confirmation before GA.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-14

## 1. Today's Highlights
The v0.56.0 nightly ships a critical fix for **capacity exhaustion retries**: context-aware silent retries with availability TTL now prevent unattended CLI runs from failing on transient "no capacity" errors. Simultaneously, a **supply-chain RCE** in the `eval-pr` workflow was patched by splitting privileged execution into a trusted `workflow_run` step. Docker images were modernized to Node 24 (builder) and Node 22 (sandbox), addressing EOL runtime exposure.

## 2. Releases
**v0.56.0-nightly.20260814.gc0d192452**  
[Release Notes](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260814.gc0d192452) | [PR #28790](https://github.com/google-gemini/gemini-cli/pull/28790) | [PR #28793](https://github.com/google-gemini/gemini-cli/pull/28793)

- **Capacity retry hardening** (`#28790`): Implements context-aware silent retries + availability TTL for `RESOURCE_EXHAUSTED` errors. Non-interactive/background runs now back off automatically; interactive sessions surface actionable errors after 2 silent attempts.
- **E2E test stabilization** (`#28793`): Fixed flaky `file-system-interactive` test on slow Windows runners via prompt synchronization and extended timeouts.

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#23297](https://github.com/google-gemini/gemini-cli/issues/23297) | **Enter key does nothing** — shell hangs after command completion | Core UX blocker; users stuck in "Waiting input" state post-execution | ��� 10, 11 comments, P1, open since Mar |
| [#19883](https://github.com/google-gemini/gemini-cli/issues/19883) | **No capacity for `gemini-3-flash-preview`** | Directly motivates the retry fix in v0.56; affects model availability | ��� 8, 14 comments, closed but recurring |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck "Waiting input" after completion** | Duplicate of #23297 symptom; indicates systemic PTY/stream handling bug | ��� 3, 4 comments, P1, open since Apr |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Hard limit blocks large workspaces; forces tool scoping workarounds | 3 comments, P2, maintainer-only |
| [#27578](https://github.com/google-gemini/gemini-cli/issues/27578) | **Model "thinks" forever on "hello" (100% failure)** | Regression in streaming/abort logic; blocks all interaction | 5 comments, P1, closed as duplicate |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Background memory extraction loops on unreadable transcripts | 5 comments, P2, maintainer-only |
| [#27273](https://github.com/google-gemini/gemini-cli/issues/27273) | **Cleanup vs `--list-sessions` race condition** | Session directory corruption risk during concurrent scan/delete | 3 comments, P2, stale |
| [#27911](https://github.com/google-gemini/gemini-cli/issues/27911) | **Auto-memory stores project alias → 403 on GCP** | Breaks Cloud Assist Enterprise auth; project ID vs name mismatch | 2 comments, P2, stale |
| [#22466](https://github.com/google-gemini/gemini-cli/issues/22466) | **Incorrect `\n` escape handling** | Naive escaping breaks model output rendering; reported in user chat | 2 comments, P2, maintainer-only |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping** | Strategic Epic: evaluate precision gains vs token overhead for code tools | 7 comments, P2, maintainer-only |

## 4. Key PR Progress (Top 10 by Significance)

| PR | Title | Type | Status | Impact |
|----|-------|------|--------|--------|
| [#28740](https://github.com/google-gemini/gemini-cli/pull/28740) | **Prevent supply-chain RCE in eval-pr workflows** | Security (Critical) | Open | Splits `pull_request_target` into untrusted build + trusted `workflow_run`; blocks fork code execution in privileged context |
| [#28778](https://github.com/google-gemini/gemini-cli/pull/28778) | **Upgrade simple-git to 3.32.3 (CVE-2026-28292)** | Security (Critical) | Open | Patches CRITICAL CVE in git dependency used for repo operations |
| [#28790](https://github.com/google-gemini/gemini-cli/pull/28790) | **Context-aware silent retries + TTL for capacity errors** | Reliability (P1) | **Merged** | Core fix for #28761; enables unattended resilience |
| [#28801](https://github.com/google-gemini/gemini-cli/pull/28801) | **Rollback entire multi-turn request on cancellation/abort** | Correctness | **Merged** | Prevents corrupted chat history (pending tool turns) after abort |
| [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) | **Load env vars before resolving settings placeholders** | Bug Fix | **Merged** | Fixes race where `.env` values unavailable during settings expansion |
| [#28803](https://github.com/google-gemini/gemini-cli/pull/28803) | **Add Claude Sonnet 4.5 & Opus 4.8 model definitions** | Feature | **Merged** | Expands multi-model support; adds alias resolution & policy fallbacks |
| [#28804](https://github.com/google-gemini/gemini-cli/pull/28804) | **Evals expansion: `read_many_files`, `get_internal_docs`, MCP resources** | Testing | Open | Behavioral evals for new tool surfaces; improves regression coverage |
| [#28603](https://github.com/google-gemini/gemini-cli/pull/28603) | **Upgrade sandbox Dockerfile to Node 22** | Maintenance (Security) | **Merged** | Node 20 EOL (Apr 2026); sandbox executes model-directed commands |
| [#28602](https://github.com/google-gemini/gemini-cli/pull/28602) | **Update Docker base to `node:24-slim`** | Maintenance | **Merged** | Builder runtime modernization; copies CLI packages from builder stage |
| [#28596](https://github.com/google-gemini/gemini-cli/pull/28596) | **Add `--list-all-sessions` across workspaces** | UX Feature | **Merged** | Discovers sessions globally, grouped by workspace path |

## 5. Feature Request Trends
1. **AST-aware tooling** — Multiple epics (#22745, #22746) investigate precision reads, symbol navigation, and codebase mapping to reduce token noise and turn count.
2. **Session lifecycle management** — Demand for cross-workspace discovery (`--list-all-sessions`), reliable cleanup, and corruption resilience (race fixes, metadata persistence).
3. **Multi-model / provider extensibility** — New model definitions (Claude 4.x), Auto model visibility fixes, and dynamic config resolution indicate push for provider-agnostic architecture.
4. **Subagent observability** — Requests to surface subagent trajectories via `/chat share` (#22598) and eval infrastructure (#24353) for behavior debugging.
5. **Security hardening defaults** — Supply-chain isolation, dependency CVE patching, and auth error clarity (Vertex AI 401 messages) reflect enterprise adoption pressure.

## 6. Developer Pain Points (Recurring Frustrations)
- **Stream/PTY handling bugs**: Enter key no-op, "Waiting input" ghost state, and abort-induced history corruption point to fragile terminal interaction layer.
- **Capacity instability**: Flash-preview unavailability forces retries; new retry logic mitigates but root cause is upstream quota.
- **Auto Memory opacity**: Silent patch skipping, infinite low-signal retries, and redaction-after-send logging erode trust in background learning.
- **Tool explosion**: 128+/400+ tool limits cause 400 errors; developers want smarter scoping, not manual pruning.
- **Config load order**: Env vars, settings files, and placeholder expansion race — now fixed in #28597 but historically fragile.
- **Windows/WSL gaps**: ripgrep `EFTYPE` spawn failures, clipboard image paste absence — platform parity still incomplete.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-14

---

## 1. Today's Highlights

Three patch releases (v1.0.80, v1.0.80-0, v1.0.80-1) shipped today, adding the `--enable-mcp-server` flag to override disabled MCP servers per-run and surfacing multi-client session awareness in `--ahp` mode. Meanwhile, the issue backlog shows a cluster of regressions around reasoning-effort handling for Claude Haiku 4.5, MCP OAuth stability on Windows, and session-state loss on interrupt — several filed within the last 24 hours.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.80** | 2026-08-14 | Model configuration updates |
| **v1.0.80-0** | 2026-08-14 | **Added** `--enable-mcp-server` flag to re-enable MCP servers disabled in settings for the current run; session sharing now shows `2 clients` (or more) in `--ahp` mode and Sessions tab when another CLI is attached |
| **v1.0.80-1** | 2026-08-14 | Fixes and changes (details not specified) |

> **Note:** The `--enable-mcp-server` flag addresses a common workflow where developers need temporary access to servers they’ve globally disabled. Multi-client visibility improves pair-programming and debugging scenarios.

---

## 3. Hot Issues (Top 10 by Impact & Recency)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2904](https://github.com/github/copilot-cli/issues/2904) | **Custom Agent YAML Frontmatter Should Support Reasoning Effort** | Blocks per-agent reasoning control; currently only global `--effort` flag exists. 20 ���, 6 comments — highest engagement in backlog. | High demand; PR #4476 documents proposed `effort` field (Option A). |
| [#4345](https://github.com/github/copilot-cli/issues/4345) | **Reasoning effort 'medium' not supported for 'claude-haiku-4.5'** | Regression when feature flags `copilot_cli_opus_medium_effort_default` + `copilot_cli_gpt_5_4_mini_for_explore` active; breaks sub-agent execution. | 4 ���, 5 comments; closed but root cause may persist. |
| [#4473](https://github.com/github/copilot-cli/issues/4473) | **claude-haiku-4.5 sub-agent fails with reasoning effort 'medium' not supported** | Duplicate of #4345 but filed fresh (2026-08-13); indicates the fix didn’t fully land or regressed. | 0 ��� but critical for Haiku 4.5 users. |
| [#3954](https://github.com/github/copilot-cli/issues/3954) | **`explore` tool hardcodes `gpt-5.4-mini`, ignoring custom/DeepSeek config** | Breaks BYOM (Bring Your Own Model) workflows; `explore` bypasses configured endpoints. | 3 ���, 3 comments; open since June. |
| [#4472](https://github.com/github/copilot-cli/issues/4472) | **Remote MCP: concurrent tool calls during token refresh spin up duplicate `rmcp` services, cancelling in-flight calls** | OAuth token refresh race condition breaks parallel tool execution on Streamable HTTP MCP servers. | Filed today; architectural concurrency bug. |
| [#4464](https://github.com/github/copilot-cli/issues/4464) | **Remote MCP OAuth: silent refresh fails with AADSTS70011 (scope mixing `.default` + resource-specific), forcing repeated interactive sign-in** | Entra ID users forced to re-auth every 60–75 min; silent refresh broken by scope bug. | Filed 2026-08-12; high friction for enterprise. |
| [#4480](https://github.com/github/copilot-cli/issues/4480) | **Atlassian MCP OAuth fails with "Incompatible authorization server" on 1.0.79 — regression from 1.0.71** | Blocks Atlassian MCP integration; OAuth discovery regression introduced in 1.0.79. | Filed today; regression, high visibility. |
| [#4463](https://github.com/github/copilot-cli/issues/4463) | **MCP OAuth intermittently fails on Windows with socket error 10013** | Windows-specific OAuth breakage before browser flow opens; non-deterministic. | Filed 2026-08-12; platform blocker. |
| [#4466](https://github.com/github/copilot-cli/issues/4466) | **Remote MCP: transient 5xx on `initialize` marks server failed for whole session, no retry/backoff** | Single 502 on startup permanently disables MCP server for session; no resilience. | Filed 2026-08-12; reliability gap. |
| [#4469](https://github.com/github/copilot-cli/issues/4469) | **Orphaned `permission.requested` event replays on every session resume, causing repeated directory-access prompts** | Stale permission prompts from 10 days ago reappear on every resume; cannot dismiss. | Filed 2026-08-12; session persistence bug. |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4476](https://github.com/github/copilot-cli/pull/4476) | **docs: document proposed custom-agent effort frontmatter (Option A)** | Closed | Documents `effort` frontmatter field for custom agents (parallel to `model`), addressing #2904 Option A. Adds "Custom Agents" reference section to README.md. |

> Only one PR updated in the last 24h. The closed documentation PR signals movement on the top-voted feature request (#2904), though implementation PR not yet visible.

---

## 5. Feature Request Trends

From the 25 issues updated in 24h, the strongest directional signals:

1. **Per-agent model & reasoning control** — #2904 (20 ���), #2133 (array `model` syntax parity with VS Code), #4462 (code-review subagent model override ignored). Developers want agent-level configuration parity with VS Code Copilot Chat.
2. **MCP server resilience & OAuth robustness** — #4472 (token refresh race), #4464 (Entra scope bug), #4480 (Atlassian regression), #4466 (no retry on 5xx), #4478 (case-sensitive collision detection). Remote MCP is maturing but lacks production-grade reliability.
3. **Session lifecycle & state preservation** — #4477 (session/prompt lost on stop), #4474 (silent archive on resume timeout), #4469 (orphaned permission events), #4467 (event store exhaustion), #4470 (list running sessions). CLI lacks observability and durability for long-running workflows.
4. **Permissions UX polish** — #4482 (allowed_directories not respected for shell), #4237 (steering message dropped on deny), #4469 (stale prompts). Permission system has edge-case leaks.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Reasoning effort mismatches on newer models** | #4345, #4473, #2904 — Haiku 4.5 rejects `medium`; no per-agent override | 3 issues in 24h, 1 high-engagement |
| **MCP OAuth fragility (Windows, Entra, concurrent refresh, transient errors)** | #4463, #4464, #4472, #4466, #4480 | 5 distinct OAuth/transport bugs |
| **Session state loss on interrupt/stop** | #4477, #4474, #4469 — prompt, edits, permissions vanish or resurface incorrectly | 3 session-persistence issues |
| **Hardcoded model fallbacks ignoring user config** | #3954 (`explore` → `gpt-5.4-mini`), #4462 (`code-review` → `gpt-5.6-sol`) | 2+ BYOM bypasses |
| **Permission prompts that don’t respect config or deduplicate** | #4482, #4469, #4237 | 3 permission UX bugs |
| **No CLI-level session observability** | #4470 requests `copilot agents --json` equivalent | 1 explicit ask, implied by #4467/#4468 |

---

**Bottom line:** Today’s releases add useful flags (`--enable-mcp-server`) and multi-client visibility, but the issue velocity reveals a product surface under strain — particularly around MCP reliability, model/agent configuration parity, and session durability. The community’s top ask (#2904) has documentation movement but no code PR yet; expect implementation follow-up next sprint.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-14

## 1. Today's Highlights
No new releases shipped in the last 24 hours. Community attention is focused on three critical open issues: a high-demand **Memory System** feature request for persistent cross-session context, a **streaming hang in ACP/print mode** where responses complete but the terminal never receives a finish frame, and a **runaway generation bug** that produced 88k tokens of gibberish over 53 minutes in a single LLM step.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#1283** | [Feature Request: Memory System — Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283) | Top-voted enhancement (38 comments). Users want both AI-managed automatic memory (project patterns, code conventions) and manual memory (user-defined instructions via config). Essential for multi-session workflows and team onboarding. | Open since Feb 2026; sustained discussion indicates strong product-market fit for this capability. |
| **#2598** | [ACP/print streaming response hangs silently — no idle timeout, replaced wheel partial does not fall off the wire](https://github.com/MoonshotAI/kimi-cli/issues/2598) | Critical reliability bug in ACP mode (`kimi acp`). Stream completes on the server side but the `[DONE]` frame never arrives; CLI lacks idle-timeout config. Subsequent user messages silently replace the hung turn, and the completed response is **never persisted to `wire.jsonl`** (no `content.part`, no `usage.record`). | Reported 2026-08-09; 1 comment. Blocks production ACP integrations and breaks audit/logging pipelines. |
| **#2597** | [Bug: Runaway garbled generation — 88k tokens of gibberish in one LLM step](https://github.com/MoonshotAI/kimi-cli/issues/2597) | Single step ran 3,214 s (~53 min), emitted 88,114 tokens of incoherent multilingual fragments. Indicates missing server-side or client-side token/step guards (max tokens, repetition penalty, timeout). | Reported 2026-08-08; 1 comment. High-severity cost & UX risk; suggests need for hard limits and observability hooks. |

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*

## 5. Feature Request Trends
1. **Persistent Memory / Context Continuity** (#1283) — Developers treat cross-session memory as a table-stakes feature for agentic coding; demand both implicit (AI-curated) and explicit (user-controlled) layers.
2. **Structured Streaming Guarantees** (#2598) — ACP integrators require reliable frame boundaries, idle timeouts, and durable wire logging for observability and replay.
3. **Generation Guardrails** (#2597) — Hard limits on step duration, output tokens, and repetition detection are now expected baseline safety features.

## 6. Developer Pain Points
- **Silent stream termination** in ACP mode leaves no trace in logs, making debugging and billing reconciliation impossible.
- **Absence of configurable timeouts** (idle, per-step, per-session) forces users to kill processes manually.
- **Runaway generations** incur unexpected token costs and stall interactive sessions for nearly an hour without intervention.
- **Memorylessness** between sessions forces repetitive re-explanation of project conventions, coding style, and architectural decisions.

---
*Data sourced from `github.com/MoonshotAI/kimi-cli`; issues reflect state as of 2026-08-13 23:59 UTC.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-14

## Today's Highlights
No new releases shipped today, but the core team delivered a wave of performance-focused refactors: lazy-loading MCP client, npm config, semver, and HTML parsing to shave startup latency. Simultaneously, multiple new v2-era issues surfaced—context-window compaction failures, Zen API rate-limit regressions, and legacy plugin-loader crashes—signaling growing pains in the 2.x transition.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#11112](https://github.com/anomalyco/opencode/issues/11112) | **Stuck at “Preparing write…”** | Long-standing (since Jan) write-path deadlock affecting many users; 78 comments, 46 ��� | ��� High — persistent blocker |
| [#33027](https://github.com/anomalyco/opencode/issues/33027) | **MCP tools connected but not exposed to agent** | Breaks MCP integration workflow; tools visible via `tools/list` but absent from agent | ��� Integration gap |
| [#35402](https://github.com/anomalyco/opencode/issues/35402) | **Zen: byte-identical requests reroute to cold-cache provider** | `glm-5.2` multi-sourced without sticky routing → cache misses, re-billing, latency spikes | ��� Performance, 8 ��� |
| [#42448](https://github.com/anomalyco/opencode/issues/42448) | **[v2] Compaction request exceeds context window** | Auto-compaction skipped; `/compact` fails on high-output models at ~79% context | ��� New today, v2 blocker |
| [#42449](https://github.com/anomalyco/opencode/issues/42449) | **Newest version instantly hits Zen API usage max** | Fresh install → immediate 429 on Zen; suggests quota/accounting regression | ��� New today, 1 ��� |
| [#42452](https://github.com/anomalyco/opencode/issues/42452) | **AI cooldown triggers immediately after reset** | 200-request free tier resets at 7 PM but re-enters cooldown within 5 requests | ��� New today, rate-limit logic |
| [#42451](https://github.com/anomalyco/opencode/issues/42451) | **Legacy plugin loader corrupts hooks array** | Non-Hooks exports pushed as hooks → startup crash; affects 1.16.2 | ��� New today, plugin stability |
| [#42120](https://github.com/anomalyco/opencode/issues/42120) | **Bound server-side interrupt settlement latency** | 11+ sec delay between shell cancellation and terminal failure projection | ��� Core latency |
| [#37493](https://github.com/anomalyco/opencode/issues/37493) | **Snapshot crashes on `info/exclude` write failure** | `Effect.orDie` on permission error (UID mismatch, concurrent writes) kills session | ��� Data-loss risk |
| [#42476](https://github.com/anomalyco/opencode/issues/42476) | **Per-API-Key token usage limits** | Feature request: enforce quotas per key (e.g., Key A: 1M tokens, Key B: 500K) | ��� New today, governance need |

---

## Key PR Progress (10 Important)

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#42468](https://github.com/anomalyco/opencode/pull/42468) | **perf(core): load MCP client lazily** | Perf | Removes MCP SDK from startup when no enabled servers; defers to connect/OAuth time |
| [#42469](https://github.com/anomalyco/opencode/pull/42469) | **refactor(core): defer webfetch HTML parsing** | Perf | `htmlparser2`/`entities` loaded only on HTML→text/Markdown conversion |
| [#42470](https://github.com/anomalyco/opencode/pull/42470) | **refactor(cli): load semver lazily for update checks** | Perf | `semver` import deferred until version comparison needed |
| [#42458](https://github.com/anomalyco/opencode/pull/42458) | **perf(util): load npm config lazily** | Perf | `@npmcli/config` loaded only on explicit `load()` call |
| [#42467](https://github.com/anomalyco/opencode/pull/42467) | **refactor(util): load npm package parser lazily** | Perf | `npm-package-arg` loaded only during `Npm.add` |
| [#42464](https://github.com/anomalyco/opencode/pull/42464) | **chore(app): remove stale frontend dependencies** | Chore | Drops 5 `@solid-primitives` packages; reduces bundle size |
| [#42475](https://github.com/anomalyco/opencode/pull/42475) | **feat(app): add Hebrew locale** | Feature | Full RTL Hebrew translations, CLDR plural forms, locale detection |
| [#42474](https://github.com/anomalyco/opencode/pull/42474) | **fix(tui): refresh terminal size before resize** | Bugfix | Addresses PTY hosts where Bun leaves stale `stdout.columns/rows` on `SIGWINCH` |
| [#42456](https://github.com/anomalyco/opencode/pull/42456) | **fix(tui): isolate tab scroll state** | Bugfix | Each session tab retains independent transcript position (experiment: `tab_scroll`) |
| [#42471](https://github.com/anomalyco/opencode/pull/42471) | **fix(tui): scope unread updates to focused terminal** | Bugfix | Prevents background TUI from mutating unread markers of foreground session |

---

## Feature Request Trends
1. **Localization expansion** — Hebrew locale (#42447, #42475) signals demand for broader i18n coverage.
2. **Granular quota controls** — Per-API-Key token limits (#42476) and sticky provider routing (#35402) reflect enterprise/multi-tenant needs.
3. **Reasoning UX defaults** — Auto-expand thinking blocks (#29456) remains a quality-of-life ask for reasoning-model users.
4. **v2-specific hardening** — Compaction logic (#42448), plugin SEA compatibility (#42466), and shell permission WASM fallbacks (#42184) dominate new feature work.

---

## Developer Pain Points
- **Zen API rate limiting** — Four distinct issues (#42029, #42074, #42449, #42452) in one week: free-tier quotas exhausted instantly or reset improperly.
- **Startup latency** — 10–30 s blocking fetch on stale model cache (#42376); lazy-loading PRs directly target this.
- **MCP reliability** — Tools not exposed (#33027), SDK load overhead (#42468), and OAuth flow gaps.
- **Plugin ecosystem fragility** — Legacy loader crashes on non-Hooks exports (#42451); SEA builds cannot load local plugins (#42466).
- **Session/tab state corruption** — Scroll position leaks across tabs (#42456), unread markers mutated by background TUIs (#42471).
- **Interrupt handling** — 10+ sec settlement latency (#42120) breaks interactive flow.
- **Context-window management** — Auto-compaction skipped; manual `/compact` fails on large outputs (#42448).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-14

## Today's Highlights
The community is actively addressing critical UX and reliability issues: auto-compaction fails silently until providers reject requests (#6879), the prompt editor suffers O(n) cursor latency on large buffers (#8029), and terminal hygiene gaps leave TTYs broken on SIGINT or session resume (#8080, #8079). Several fixes have landed today, including viewport rendering optimization, SIGINT terminal restoration, and boolean flag parsing for extensions.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) **Auto-compaction never triggers past 100% context** | Context grows unchecked until provider returns 373k-token rejection; breaks long agentic sessions. | 19 comments, 17 ��� — highest engagement |
| [#8029](https://github.com/earendil-works/pi/issues/8029) **Prompt editor cursor latency ~1.6s/keystroke at 7k lines** | O(n) visual-line recompute on every arrow press makes large prompts unusable. | 7 comments; PR [#8066](https://github.com/earendil-works/pi/pull/8066) implements caching fix |
| [#7791](https://github.com/earendil-works/pi/issues/7791) **Global Undici dispatcher inherits 16 KiB maxHeaderSize** | Valid responses with >16 KiB headers fail with `UND_ERR_HEADERS_OVERFLOW`. | 6 comments; affects any proxy/CDN adding large headers |
| [#2366](https://github.com/earendil-works/pi/issues/2366) **Rate limiting doesn't respect limits** | Requests exceed TPM quotas despite client-side tracking; causes 23s+ retries. | 5 comments; long-standing (since Mar) |
| [#7779](https://github.com/earendil-works/pi/issues/7779) **PI_CODING_AGENT_DIR unshareable across Unix users** | `0600` file modes prevent multi-user setups (CI, shared dev boxes). | 5 comments; blocks team workflows |
| [#7829](https://github.com/earendil-works/pi/issues/7829) **Invalid settings.json silently ignored; misleading "bash not found" on Windows** | Unescaped backslashes in JSON parse as escapes; error message blames missing Git Bash. | 5 comments; Windows UX gap |
| [#7607](https://github.com/earendil-works/pi/issues/7607) **Per-tool opt-out of argument validation for host-validated tools** | Extensions need strict provider schemas but lenient host-side normalization. | 3 comments; architectural extension point |
| [#7761](https://github.com/earendil-works/pi/issues/7761) **TUI copy shows "Copied!" but clipboard empty on VTE (GNOME Terminal)** | OSC 52 sequence missing; only OSC 52c (copy) sent, not OSC 52p (paste). | 3 comments; Linux clipboard broken |
| [#8017](https://github.com/earendil-works/pi/issues/8017) **Support Anthropic refusal server-side fallback** | Compaction calls rejected by Anthropic's classifier; need `fallback` param per new docs. | 2 comments; filed by maintainer `badlogic` |
| [#7739](https://github.com/earendil-works/pi/issues/7739) **Startup-time budget targeting jcode-comparable latency** | Pi startup ~2–3× slower than jcode; 64 extensions take ~1.1s to load. | 2 comments; tracking PR [#4254](https://github.com/earendil-works/pi/issues/4254) |

---

## Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#8082](https://github.com/earendil-works/pi/pull/8082) | **Closed** | **Terminal hygiene:** render only visible viewport on resume (fixes history flood); restore TTY on SIGINT (fixes raw mode, title, kitty protocol). |
| [#8066](https://github.com/earendil-works/pi/pull/8066) | **Open** | **Prompt editor perf:** cache visual lines; invalidate on width/text change. Fixes #8029. |
| [#8086](https://github.com/earendil-works/pi/pull/8086) | **Closed** | **Gemini compat:** fall back to legacy `function_declarations` schema when endpoints reject `parametersJsonSchema`. |
| [#8084](https://github.com/earendil-works/pi/pull/8084) | **Closed** | **Boolean flag parsing:** stop swallowing prompt after flags like `--plan`; extensions load before flag types known. |
| [#8085](https://github.com/earendil-works/pi/pull/8085) | **Open** | **TUI UX:** `Escape` cancels active mouse selection without copying. |
| [#8070](https://github.com/earendil-works/pi/pull/8070) | **Open** | **Extension flag validation:** discriminated union for `registerFlag()`; reject `type`/`default` mismatches (e.g., `boolean` + `"false"`). |
| [#7984](https://github.com/earendil-works/pi/pull/7984) | **Open** | **Mermaid render:** update `grok-mermaid` to 0.2.3; fixes diagram rendering (classes still ignored). |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | **Open** | **New provider:** Amazon Bedrock Mantle OpenAI Responses API integration (long-running, supersedes earlier attempt). |
| [#8067](https://github.com/earendil-works/pi/pull/8067) | **Closed** | **Branding:** use `APP_NAME` constant in user-facing strings for forks/rebrands. |
| [#8057](https://github.com/earendil-works/pi/pull/8057) | **Open** | **Todo tool crash:** `renderResult` returns `undefined` on validation error (empty `details` object truthy, no `default` case). |

---

## Feature Request Trends
1. **Multi-user / shared state support** — File permission model (`0600`) blocks `PI_CODING_AGENT_DIR` sharing (#7779); need configurable modes or group ownership.
2. **Startup performance budget** — Explicit latency/memory targets vs. jcode; shared `jiti` singleton with `moduleCache` (#4254, #7739).
3. **Extension system hardening** — Flag validation (#8070), per-tool validation opt-out (#7607), resolved metadata in overrides (#8078), AbortSignal propagation (#8088).
4. **Localization (i18n)** — First-class CLI/TUI translation support with locale env var (#8077).
5. **Rich export parity** — Mermaid/LaTeX rendering in HTML exports matching TUI (#8041).
6. **Provider catalog freshness** — Grok 4.6 (#8046), Qwen rename drift (#8083), Kimi cached tokens (#8075).

---

## Developer Pain Points
| Pain Point | Frequency | Impact |
|------------|-----------|--------|
| **Silent compaction failure** | High (19 comments) | Sessions hit hard provider limits; no warning, no auto-recovery. |
| **Prompt editor unusable at scale** | High (7 comments + PR) | Linear cursor latency makes >1k-line prompts impractical. |
| **Terminal left broken on exit/SIGINT** | Multiple issues (#5065, #8080, #8082) | Requires `reset`; kitty protocol, bracketed paste, title not restored. |
| **Session resume floods scrollback** | #8079 | 759 KB session → 844 KB output over 18s; pollutes history. |
| **Config errors misdiagnosed on Windows** | #7829 | Invalid JSON → "bash not found" instead of parse error. |
| **Clipboard broken on Linux VTE** | #7761 | "Copied!" toast lies; OSC 52 incomplete. |
| **Rate limiting client-side ineffective** | #2366 | TPM exceeded despite tracking; long retries. |
| **Unknown slash commands sent to model** | #8081 | `/exit` costs a turn, pollutes transcript. |
| **Header overflow on valid responses** | #7791 | 16 KiB default too low for proxied APIs. |
| **Extension loading dominates startup** | #4254, #7739 | 64 extensions → 1.1s; no shared transpiler cache. |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-14

## 1. Today's Highlights
- **Three releases shipped** in 24 hours: stable `v0.21.11`, preview `v0.21.12-preview.1`, and nightly `v0.21.11-nightly`. The stable release introduces **Agent Plugins v1** for extensible agent capabilities and **native multi-agent workflows** via `/coordinate` with read-only teammates.
- **Web Shell UX improvements** land across releases: standalone session target preservation and workspace file upload support.
- **SWE-bench Verified results remain quarantined** at 0/500 resolved for v0.21.11, indicating ongoing benchmark stabilization work.

## 2. Releases

### v0.21.11 (Stable) — [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11)
| Feature / Fix | Details |
|---------------|---------|
| **Agent Plugins v1** | Extensible agent capability framework ([#8834](https://github.com/QwenLM/qwen-code/pull/8834)) |
| **Multi-agent `/coordinate`** | Native read-only teammate workflows ([#8804](https://github.com/QwenLM/qwen-code/pull/8804)) |
| **Tool error UX** | Softened failure hints in Web Shell (collapsed summaries show icon only) |
| **SWE-bench** | Quarantined: 0 resolved / 500 completed (dataset v2) |

### v0.21.12-preview.1 — [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.12-preview.1)
- Includes the Web Shell fixes from nightly: standalone session target preservation + workspace file uploads.

### v0.21.11-nightly.20260814 — [Release Notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260814.45c2e73080)
- Same Web Shell fixes as preview.

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#9061](https://github.com/QwenLM/qwen-code/issues/9061) | **Ctrl+V paste broken on Windows CLI** (regression since 0.21.0) | Blocks basic workflow for Windows developers; downgrading to 0.21.0 restores function | ��� 0 · 4 comments · P1 priority |
| [#7118](https://github.com/QwenLM/qwen-code/issues/7118) | **Windows installer fails when `Get-FileHash` unavailable** | Installation breakage on restricted/legacy Windows environments | ��� 3 · 7 comments · Closed |
| [#9108](https://github.com/QwenLM/qwen-code/issues/9108) | **Desktop: external links & MCP OAuth still fail silently** | Follow-up to #9069; remaining Web Shell link surfaces unreliably open in browser | ��� 0 · 3 comments · Closed (fixed in #9111) |
| [#8888](https://github.com/QwenLM/qwen-code/issues/8888) | **Autofix ↔ review-pr cancellation loop on bot PRs** | CI/CD reliability: bot pushes trigger review, which triggers autofix, which pushes again | ��� 0 · 3 comments · Closed |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | **Fleet Shepherd Dashboard** (auto-maintained) | Tracks PR fleet health; currently shows idle PRs with CI red states | ��� 0 · 3 comments · Bot-maintained |
| [#9069](https://github.com/QwenLM/qwen-code/issues/9069) | *(referenced)* External links in Markdown/artifacts fixed for Desktop | Precursor to #9108; resolved via Tauri shell opener | — |
| [#8834](https://github.com/QwenLM/qwen-code/pull/8834) | *(PR)* Agent Plugins v1 merged | Enables community/plugin ecosystem for agent extensions | — |
| [#8804](https://github.com/QwenLM/qwen-code/pull/8804) | *(PR)* Multi-agent `/coordinate` merged | Foundation for collaborative agent workflows | — |
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) | *(referenced)* OpenTUI renderer migration tracking | Major TUI rewrite (React track) in progress via #8677 | — |
| [#9013](https://github.com/QwenLM/qwen-code/issues/9013) | *(referenced)* Real PR used for `/review` pipeline testing | Live validation of review fixes in #9086 | — |

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#9057](https://github.com/QwenLM/qwen-code/pull/9057) | **fix(daemon)** | Compact live-turn replay journal for WebUI; reduces subagent journal payload |
| [#8996](https://github.com/QwenLM/qwen-code/pull/8996) | **feat(autofix)** | Judge review-feedback validity by *content*, not author; adds mechanical truth-check layer |
| [#9106](https://github.com/QwenLM/qwen-code/pull/9106) | **feat(Local Control)** | Consolidates LAN phone-pairing into single daemon-owned impl (replaces dual Go/JS implementations) |
| [#9095](https://github.com/QwenLM/qwen-code/pull/9095) | **feat(review)** | `/review` closes unbounded finding classes prospectively (enumeration-trap check in Agent 3b) |
| [#8817](https://github.com/QwenLM/qwen-code/pull/8817) | **feat(session)** | Fork from any conversation message (not just latest); handles tool calls, rewinds, pagination |
| [#9107](https://github.com/QwenLM/qwen-code/pull/9107) | **feat(telemetry)** | OpenTelemetry tracing for main agent invocations |
| [#9093](https://github.com/QwenLM/qwen-code/pull/9093) | **feat(review)** | Wires `--resume` through `/review`, `review run`, and CI retry entry points |
| [#9104](https://github.com/QwenLM/qwen-code/pull/9104) | **feat(autofix)** | Non-converging diff escalation → maintainer handoff (growth trajectory fed to agent) |
| [#9040](https://github.com/QwenLM/qwen-code/pull/9040) | **fix(cli)** | Prevents dialog clipping in short terminals (`/statusline`, `/skills`) |
| [#8890](https://github.com/QwenLM/qwen-code/pull/8890) | **refactor(cli)** | Generalizes Conversations runtime foundation |
| [#8677](https://github.com/QwenLM/qwen-code/pull/8677) | **feat(tui)** | OpenTUI renderer backend (React track) — flicker-free, first-class mouse; single-PR migration |
| [#8899](https://github.com/QwenLM/qwen-code/pull/8899) | **fix(autofix)** | Holds autofix rounds while `review-pr` in flight; breaks cancellation loop |
| [#9039](https://github.com/QwenLM/qwen-code/pull/9039) | **feat(core)** | Privacy-safe tool-result boundary diagnostics |
| [#9086](https://github.com/QwenLM/qwen-code/pull/9086) | **fix(review)** | Hardens `/review` pipeline against 4 live-run failures (pinned with regression tests) |
| [#8853](https://github.com/QwenLM/qwen-code/pull/8853) | **fix(web-shell)** | Surfaces loop-detection turn errors as structured errors with localized guidance |
| [#8332](https://github.com/QwenLM/qwen-code/pull/8332) | **feat(cli)** | Audio bridge for attachments: transcribes via batch voice model when primary model lacks audio |
| [#9084](https://github.com/QwenLM/qwen-code/pull/9084) | **feat(cli)** | Correlates daemon logs with OpenTelemetry spans (trace_id/span_id on recording spans) |
| [#8687](https://github.com/QwenLM/qwen-code/pull/8687) | **feat(daemon)** | Guards cross-worktree Git mutations in `qwen serve` (blocks escapes via `-C/--work-tree/--git-dir`) |
| [#9053](https://github.com/QwenLM/qwen-code/pull/9053) | **fix(web-shell)** | Softens tool failure hints: error icon only in expanded views, not collapsed summaries |
| [#9111](https://github.com/QwenLM/qwen-code/pull/9111) | **fix(desktop)** | Opens remaining external links via Tauri shell opener (fixes #9108) |

## 5. Feature Request Trends (Distilled from Issues & PRs)

| Trend | Evidence |
|-------|----------|
| **Agent extensibility & multi-agent orchestration** | Agent Plugins v1 (#8834), `/coordinate` (#8804), fork-from-any-message (#8817), telemetry tracing (#9107) |
| **Review/autofix loop hardening** | Validity-by-content (#8996), enumeration-trap (#9095), non-convergence handoff (#9104), hold-rounds-during-review (#8899), pipeline hardening (#9086) |
| **Web Shell / Desktop parity & reliability** | Workspace uploads, session target preservation, external link routing (#9069→#9111), loop error surfacing (#8853), softened failure UX (#9053) |
| **Windows CLI quality** | Paste regression (#9061), installer robustness (#7118), dialog clipping (#9040) |
| **Observability & debugging** | OTEL correlation (#9084, #9107), compact replay journals (#9057), privacy-safe diagnostics (#9039) |
| **TUI modernization** | OpenTUI React backend (#8677), conversation runtime generalization (#8890) |
| **Security boundaries** | Cross-worktree Git guards (#8687), Local Control consolidation (#9106), untrusted audio transcripts (#8332) |

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency / Signal |
|------------|-------------------|
| **Windows CLI regressions** | Paste broken since 0.21.x (#9061); installer fails on restricted shells (#7118); dialogs clip in short terminals (#9040) |
| **Silent link/OAuth failures in Desktop** | Multiple surfaces still drop `target="_blank"` (#9108, fixed in #9111); MCP OAuth cannot complete |
| **Bot-driven CI/CD loops** | Autofix ↔ review-pr cancellation spiral on bot PRs (#8888); requires explicit hold logic (#8899) |
| **Review pipeline brittleness** | Four live-run failures caught only via real PR testing (#9086); unbounded finding classes (#9095) |
| **SWE-bench validation stalled** | Quarantined at 0/500 for v0.21.11 — benchmark infrastructure not yet producing signal |
| **Session branching limitations** | Could not fork from earlier messages; tool calls/rewinds made it unsafe (#8817) |
| **Observability gaps** | No OTEL correlation in daemon logs (#9084); no main-agent invocation traces (#9107) |

---

*Generated from GitHub data for QwenLM/qwen-code on 2026-08-14. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-14

---

## 1. Today's Highlights

**CodeWhale v0.9.7 shipped** — the public product from Shannon Labs — marking the official deprecation of the legacy `deepseek-tui` npm package. The v0.9.8 cycle has immediately kicked off with **12+ tracked issues/PRs** targeting agent tool schema simplification, MCP spec compliance, auto-review guardian tier, DS4 first-class local routing, and TUI crate decomposition (EPIC-005). Critical regressions surfaced: output-token ceiling clamped below catalog limits (breaking Terminal-Bench), stale write-claims blocking sub-agents, and web UI reported "totally broken."

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v0.9.7** | 2026-08-13 | **Rebrand complete**: `codewhale` CLI, npm package, and release assets now lowercase; legacy `deepseek-tui` deprecated. No further releases on old package. Migration docs in release notes. |

[View Release](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.7)

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5373](https://github.com/Hmbown/CodeWhale/issues/5373) | **Output-token ceiling clamped below catalog limit; truncation kills the turn** | Requests 65,536 tokens vs. documented 384,000 for DeepSeek V4 Flash/Pro — crashes Terminal-Bench tasks (`regex-chess`, `adaptive-rejection-sampler`). | ��� **P0 blocker** — filed by maintainer Hmbown today |
| [#5372](https://github.com/Hmbown/CodeWhale/issues/5372) | **Stale write-claims from closed sessions block new sub-agents** | Dead agent `agent_8fbd3df6` holds write claims on `experiments/`, `tests/`, `artifacts/` — new sessions rejected with contention errors. | ��� **P0** — real workspace report, filed by Hmbown today |
| [#5370](https://github.com/Hmbown/CodeWhale/issues/5370) | **P0: Web UI looks broken — audit against harness references** | Public web UI (codewhale.net) reported "totally broken" re: look & features. Distinct from managed CWC app. | ��� **P0** — Hunter-reported, maintainer-triaged today |
| [#5324](https://github.com/Hmbown/CodeWhale/issues/5324) | **Agent tool: simplify 32-field schema so models stop erroring** | Single 32-property schema with 8 actions + aliases causes model errors. Root cause for multiple downstream failures. | ��� **High** — 7 comments, PR [#5369](https://github.com/Hmbown/CodeWhale/pull/5369) in progress |
| [#5371](https://github.com/Hmbown/CodeWhale/issues/5371) | **Sub-agents not inspectable: model, fleet role, type invisible** | TUI roster shows generic "Agent 1/2/3" — no model/role visibility even on click. Impairs debugging fleet workflows. | ��� **High** — Hunter-reported, filed by Hmbown today |
| [#5366](https://github.com/Hmbown/CodeWhale/issues/5366) | **Fix: keep sub-agent token receipts live & show resolved model** | v0.9.7 regression: token figures stale, model identity missing from Work roster rows. | ��� **High** — Owner-observed, filed by Hmbown 08-13 |
| [#2369](https://github.com/Hmbown/CodeWhale/issues/2369) | **Config paths fragmented across OS/Cygwin + silent migration bug** | Windows/Cygwin home-directory divergence + legacy migration leaves orphaned config. Patch attached. | ��� **Medium** — 7 comments, persistent since 05-30 |
| [#998](https://github.com/Hmbown/CodeWhale/issues/998) | **Text display truncated — need hover tooltip for full content** | UI cutoff in transcript; users request hover-to-expand. Affects readability of long outputs. | ��� **Medium** — 11 comments, 1 ���, active since 05-07 |
| [#5359](https://github.com/Hmbown/CodeWhale/issues/5359) | **Four TUI tests read machine state (`~/.codewhale`, display probe) — fail on dev boxes, pass CI** | Deterministic flakes block local dev; CI green due to clean HOME. PR [#5368](https://github.com/Hmbown/CodeWhale/pull/5368) fixes. | ��� **Medium** — 2 comments, PR open |
| [#5374](https://github.com/Hmbown/CodeWhale/issues/5374) | **Agent writing output corrupted (macOS)** | Text rendering garbled across the board on macOS — unreadable agent output. | ��� **Medium** — 3 comments, filed today |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#5365](https://github.com/Hmbown/CodeWhale/pull/5365) | **feat(provider): add first-class local DS4 setup** | Open | `/setup provider ds4` + prefilled keyless loopback preset; reuses OpenAI-compatible transport. Implements [#5363](https://github.com/Hmbown/CodeWhale/issues/5363). |
| [#5353](https://github.com/Hmbown/CodeWhale/pull/5353) | **feat(tui): model guardian tier for Auto-Review (v0.9.8)** | Open | Two-layer Auto-Review: deterministic floor + fallback escalates to one-shot **model guardian** (Codex/Kimi semantics). Core v0.9.8 feature. |
| [#5369](https://github.com/Hmbown/CodeWhale/pull/5369) | **fix(tools): degrade Moonshot schemas instead of refusing conditionals** | Open | Schema simplification slice for [#5324](https://github.com/Hmbown/CodeWhale/issues/5324) — avoids net-negative accounting. |
| [#5368](https://github.com/Hmbown/CodeWhale/pull/5368) | **fix(tui): confine unguarded tests to isolated state root** | Open | Fixes 4 flaky tests from [#5359](https://github.com/Hmbown/CodeWhale/issues/5359) via lock-holder trust hole, settings path isolation, display probe mock. |
| [#5339](https://github.com/Hmbown/CodeWhale/pull/5339) | **fix(engine): suppress child-owned shell completions** | Open | Filters child background completions from parent model stream; preserves parent visibility. Closes [#5325](https://github.com/Hmbown/CodeWhale/issues/5325). |
| [#5364](https://github.com/Hmbown/CodeWhale/pull/5364) | **feat(tui): render markdown blockquotes with quote rail** | **Merged** | Proper `>` block rendering with nesting, inline formatting, wrapping, selection-copy. By SparkofSpike. |
| [#5358](https://github.com/Hmbown/CodeWhale/pull/5358) | **feat(engine): auto-review denial rationale + turn circuit breaker** | **Merged** | Block decisions now carry rationale; circuit breaker prevents re-phrase loops. First slice of [#5352](https://github.com/Hmbown/CodeWhale/issues/5352). |
| [#5336](https://github.com/Hmbown/CodeWhale/pull/5336) | **fix(mcp): omit nextCursor when no further pages** | **Merged** | MCP spec compliance: `nextCursor` now string or absent (not `null`). Fixes Claude Code rejection. Closes [#5335](https://github.com/Hmbown/CodeWhale/issues/5335). |
| [#5333](https://github.com/Hmbown/CodeWhale/pull/5333) | **feat(tui): pin host terminal as always-on-top mini window (PiP)** | **Merged** | Windows: right-click `/pin` → 640x400 always-on-top. Community PR [#5318](https://github.com/Hmbown/CodeWhale/pull/5318) harvested. |
| [#5334](https://github.com/Hmbown/CodeWhale/pull/5334) | **docs(i18n): retire stale zh-Hant partial-pack declaration** | **Merged** | zh-Hant now full parity; removes 5 surfaces incorrectly labeling it partial. |

---

## 5. Feature Request Trends (from All Issues)

| Theme | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Agent/Sub-agent Observability** | [#5371](https://github.com/Hmbown/CodeWhale/issues/5371), [#5366](https://github.com/Hmbown/CodeWhale/issues/5366), [#5372](https://github.com/Hmbown/CodeWhale/issues/5372) | ��� **Critical** — model/role/token visibility + stale claim cleanup |
| **Auto-Review Maturity** | [#5353](https://github.com/Hmbown/CodeWhale/pull/5353), [#5358](https://github.com/Hmbown/CodeWhale/pull/5358), [#5362](https://github.com/Hmbown/CodeWhale/issues/5362) | ��� **High** — guardian tier, denial rationale, circuit breaker, dsh harvest |
| **Local/Keyless Provider DX** | [#5365](https://github.com/Hmbown/CodeWhale/pull/5365), [#5363](https://github.com/Hmbown/CodeWhale/issues/5363), [#5361](https://github.com/Hmbown/CodeWhale/issues/5361) | ��� **High** — DS4 first-class, assembled-journey fixtures, keyless presets |
| **Config/Keymap Flexibility** | [#436](https://github.com/Hmbown/CodeWhale/issues/436), [#5345](https://github.com/Hmbown/CodeWhale/issues/5345), [#855](https://github.com/Hmbown/CodeWhale/issues/855) | ��� **Medium** — `keybinds.toml`, multi-line/send-key customization, profile auto-switch |
| **MCP/Protocol Compliance** | [#5335](https://github.com/Hmbown/CodeWhale/issues/5335), [#5336](https://github.com/Hmbown/CodeWhale/pull/5336) | ��� **Medium** — spec adherence for strict clients (Claude Code) |
| **i18n Completeness** | [#790](https://github.com/Hmbown/CodeWhale/issues/790), [#5334](https://github.com/Hmbown/CodeWhale/pull/5334) | ��� **Ongoing** — commands, modals, widgets, approval dialogs |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Agent tool schema too complex → model errors** | 32-field schema, 8 actions, aliases; models error repeatedly ([#5324](https://github.com/Hmbown/CodeWhale/issues/5324), [#5369](https://github.com/Hmbown/CodeWhale/pull/5369)) | High — blocks agent workflows |
| **Sub-agent opacity** | No model/role/type visibility; generic "Agent N" labels; stale token receipts ([#5371](https://github.com/Hmbown/CodeWhale/issues/5371), [#5366](https://github.com/Hmbown/CodeWhale/issues/5366)) | High — impairs fleet debugging |
| **Token/output limits misaligned with model catalog** | 65k vs 384k documented → truncation crashes ([#5373](https://github.com/Hmbown/CodeWhale/issues/5373)) | Critical — breaks benchmarks |
| **Stale state across sessions** | Write-claims persist after close; config paths diverge OS/Cygwin ([#5372](https://github.com/Hmbown/CodeWhale/issues/5372), [#2369](https://github.com/Hmbown/CodeWhale/issues/2369)) | High — requires manual cleanup |
| **Test flakiness from real env coupling** | Tests read `~/.codewhale`, display probe → fail on dev machines ([#5359](https://github.com/Hmbown/CodeWhale/issues/5359), [#5368](https://github.com/Hmbown/CodeWhale/pull/5368)) | Medium — blocks contributor velocity |
| **Web UI drift from TUI parity** | Public app "totally broken" re: look/features ([#5370](https://github.com/Hmbown/CodeWhale/issues/5370)) | Critical — user-facing regression |
| **Input UX rigidity** | No multi-line mode; send-key not configurable ([#5345](https://github.com/Hmbown/CodeWhale/issues/5345), [#436](https://github.com/Hmbown/CodeWhale/issues/436)) | Medium — daily friction |

---

*Digest generated from GitHub data (last 24h) for Hmbown/CodeWhale. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*