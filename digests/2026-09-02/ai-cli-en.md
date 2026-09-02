# AI CLI Tools Community Digest 2026-09-02

> Generated: 2026-09-02 04:06 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-09-02)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **mature, enterprise-grade platforms** (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI) shipping weekly patches with dedicated stability teams, and **rapidly iterating challengers** (OpenCode, DeepSeek TUI, Qwen Code, Pi, Kimi Code) pursuing aggressive TUX polish, protocol completeness, and niche differentiation (design-to-code, fleet management, local-first architectures). Across the board, **multi-platform Desktop apps (Windows/macOS/Linux) are the primary source of regressions** — GPU crashes, path-handling bugs, and process-leakage dominate issue backlogs. A second universal theme is **billing/quota transparency**: users demand real-time cost attribution, session-limit visibility, and protection against silent model upgrades. The **MCP/ACP protocol layer** is maturing unevenly — draft-07 schema support, OAuth hardening, and provider-agnostic auth are active frontlines.

---

## 2. Activity Comparison (2026-09-01 → 2026-09-02)

| Tool | Releases (24h) | Hot Issues Tracked | PRs Updated | Community Signal (Top Issue 👍) | Maturity Indicator |
|------|----------------|-------------------|-------------|----------------------------------|---------------------|
| **Claude Code** | 2 patch (v2.1.258, v2.1.257) | 10 | 2 | 476 👍 (#38335 — Max plan quota bug, open since Mar) | **High** — stable channel, enterprise billing, long-standing regressions |
| **OpenAI Codex** | 5 alpha + 1 bugfix (0.153.0-α.1–5, 0.152.1) | 10 | 10 | 52 👍 (#16857 — macOS GPU drain, open since Apr) | **High** — rapid alpha cadence, heavy infra PRs (Guardian V2, worktrees) |
| **Gemini CLI** | 1 preview + 1 nightly (v0.59.0) | 10 | 10 | 8 👍 (#21409 — subagent hang) | **Medium-High** — security-first hardening, sub-agent reliability focus |
| **GitHub Copilot CLI** | 1 stable (v1.0.83-1) | 10 | 0 | 75 👍 (#13 — vim mode, closed) | **Medium** — enterprise features shipping, but session/MCP/BYOK fragility |
| **OpenCode** | 1 stable (v1.18.26) | 10 (15+ path-corruption issues closed) | 10 | 2 👍 (#40986 — rename breaks binding) | **Medium** — systemic SQLite/project-identity flaw, rapid TUI/refactor PRs |
| **DeepSeek TUI** | 0 (v0.9.12 "shell wave" PR stack) | 10 (1 new/open) | 14 (by maintainer) | 3 👍 (#3751 — Neuralwatt provider) | **Medium** — coordinated UX/runtime push, provider ecosystem gaps |
| **Qwen Code** | 1 component (cua-driver-rs v0.20.3) | 4 (2 CI failures) | 10 | — | **Medium** — CI hardening focus, deferred tooling & review automation |
| **Pi** | 0 | 10 | 10 | 54 👍 (#2870 — XDG compliance, closed) | **Medium** — proxy/enterprise networking pain, tool-call reliability |
| **Kimi Code CLI** | 1 major (v1.50.0 — migration release) | 3 (all closed) | 4 | 1 👍 (#1294 — XDG) | **Low-Medium** — deprecating Python CLI, migrating to "Kimi Code" binary |
| **Grok Build** | 0 | 0 | 0 | — | **Inactive** — no 24h activity |

---

## 3. Shared Feature Directions (Cross-Tool Consensus)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Project/Workspace Resilience** | OpenCode (critical), GitHub Copilot CLI, OpenAI Codex, Pi, DeepSeek TUI | Filesystem watchers for move/rename/delete; composite project identity (remote + local path); stale `worktree` cleanup; WSL↔Windows path normalization |
| **Billing/Quota Transparency** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI | Real-time session-limit UI; per-model cost attribution; quota-aware task planning; baseline disclosure for "boosted" limits; banked-hours accounting |
| **MCP/ACP Protocol Maturity** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI, OpenCode, DeepSeek TUI, Pi, Qwen Code | draft-07 `outputSchema` support; `requiresUserInteraction` UX; OAuth issuer validation; header propagation; provider-agnostic auth; ACP+MCP tool bridging |
| **Windows Desktop Parity** | Claude Code, OpenAI Codex, GitHub Copilot CLI, OpenCode, DeepSeek TUI, Pi | GPU crash fixes; always-on-top toggle; `codex.exe` relocation; WSL2 path handling; PowerShell ConstrainedLanguage support; flag parsing |
| **Session Continuity & Sync** | OpenAI Codex, GitHub Copilot CLI, OpenCode, Pi, DeepSeek TUI | Remote Control thread resume; VS Code thread ownership; checkpoint restore; in-memory session forking; headless-session filtering |
| **Sub-Agent/Delegation Reliability** | Claude Code, OpenAI Codex, Gemini CLI, OpenCode, DeepSeek TUI, Qwen Code | Turn-limit transparency; trajectory observability; backgrounding; model/thinking overrides per sub-agent; false-success masking |
| **Security/Supply-Chain Hardening** | Gemini CLI, Pi, Qwen Code, Kimi Code, OpenCode | XDG Base Directory; plugin sandboxing; NTFS 8.3 traversal mitigation; Seatbelt/macOS sandbox guards; PID-file reuse guards; autofix regression gates |

---

## 4. Differentiation Analysis

| Tool | Primary Differentiator | Target User / Positioning | Technical Approach |
|------|------------------------|---------------------------|---------------------|
| **Claude Code** | Anthropic model integration + Max plan billing | Enterprise/pro developers on Anthropic stack | Proprietary CLI + Desktop apps; heavy quota/entitlement logic; Fable/Opus/Haiku model routing |
| **OpenAI Codex** | Guardian approval + Rust TUI + managed worktrees | Power users wanting local-first, auditable agents | Rust TUI; Guardian V2 safety layer; Bazel schema bundles; Vim replace mode; quota-aware warnings |
| **Gemini CLI** | Security-first Auto Memory + AST-aware tooling vision | Google Cloud / security-conscious teams | Deterministic redaction; MCP OAuth RFC 9207; extension consent; AST-aware read/search epic |
| **GitHub Copilot CLI** | GitHub enterprise integration (`forceLoginOrgs`) + BYOK | GitHub Enterprise orgs + custom model users | TypeScript/Node; session sidebar; skill/agent discovery; MCP dual-era support; enterprise policy pins |
| **OpenCode** | SQLite-backed project state + TUI/Web/Desktop parity | Developers wanting local DB transparency & multi-client | Go + SQLite; project identity via git remote (flawed); optimistic UI; plugin registry hydration |
| **DeepSeek TUI** | Model fleet UX + design-to-code (OpenDesign) + native PKCE auth | Design-system engineers + multi-provider power users | Rust TUI; "shell wave" UX slices; model fleet = user-added models first; OpenDesign MCP adapter |
| **Qwen Code** | Computer Use Agent (CUA) driver + review automation maturity | Automation/QA engineers + long-context reviewers | `cua-driver-rs` signed binaries; CodeModeOnly deferred tools; fix-audit review rounds; Mem0 providers |
| **Pi** | Extension API maturity + proxy/corporate networking | Embedded/headless agents + air-gapped deployments | In-memory session forking; sub-agent model overrides; CWD-sensitive tools; OAuth env vars |
| **Kimi Code CLI** | Deprecation-aware migration + plugin security contracts | MoonshotAI ecosystem users migrating from Python | CDN `migration.json` polling; one-key migration; XDG compliance; plugin persistent-data docs |
| **Grok Build** | (Inactive / no signal) | — | — |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Mature** | **Claude Code, OpenAI Codex** | Highest issue engagement (476👍, 52👍); weekly stable/alpha cadence; dedicated infra PRs (Guardian V2, schema bundles, worktrees); enterprise billing surfaces |
| **High Momentum / Maturing** | **Gemini CLI, GitHub Copilot CLI, OpenCode** | 10+ PRs/day; security/enterprise features shipping; but systemic bugs (project-path, session OOM, MCP fragility) indicate growing pains |
| **Rapid Iteration / Pre-1.0 Feel** | **DeepSeek TUI, Qwen Code, Pi** | Coordinated PR stacks (14 PRs/day for DeepSeek); component releases (cua-driver-rs); CI hardening focus; protocol gaps (ACP/MCP) still open |
| **Transition / Pivot** | **Kimi Code CLI** | Major version = migration release; closing legacy issues; plugin docs over features |
| **Dormant** | **Grok Build** | Zero 24h activity |

**Key Signal**: The **top 3 tools by community friction** (Claude Code #38335, OpenAI Codex #37403, GitHub Copilot CLI #4664) all center on **trust-breaking silent failures** — quota drain, remote sync breakage, OOM on resume. This suggests the next competitive frontier is **observability & recoverability**, not raw model capability.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|------------------------|
| **Desktop App Quality Gate** | 5/9 tools report Windows/macOS GPU crashes, launch failures, or process leaks as top issues | **Invest in native app testing infra** (GPU telemetry, MSIX/Seatbelt validation, WSL2 matrix) before shipping Desktop — regressions here block entire platforms. |
| **Quota as a First-Class UX Primitive** | Claude Code, Codex, Copilot CLI all building quota-aware warnings, planning constraints, real-time limits UI | **Treat token/session budgets as runtime constraints** — expose to agents for self-pacing; integrate with CI/CD gates. |
| **MCP → ACP Convergence** | 7 tools actively fixing MCP draft-07, OAuth, header propagation; DeepSeek TUI & Pi explicitly bridging ACP+MCP | **Standardize on ACP for transport, MCP for tools** — build provider-agnostic auth & schema validation layers now. |
| **Project Identity Crisis** | OpenCode (15+ issues), Copilot CLI (#3688), Codex (#41463), Pi — all struggle with move/rename/clone identity | **Adopt composite keys (git remote + canonical path + workspace ID)** + filesystem watchers; deprecate remote-only identity. |
| **Deferred/Dynamic Tooling** | Qwen Code (CodeModeOnly), Codex (prompt-cache-preserving deferred tools), Gemini (AST-aware reads) | **Minimal stable tool surface + lazy capability expansion** reduces attack surface and token waste — design for this pattern. |
| **Security-Left Shift** | Gemini (NTFS traversal, Seatbelt, RFC 9207), Pi (seccomp SIGWINCH), Qwen (PID reuse), Kimi (plugin sandbox) | **Sandbox-by-default for plugins/extensions**; validate all provider metadata; treat config dirs as untrusted. |
| **Local-First / Air-Gapped Demand** | Pi (proxy HTTP providers), DeepSeek TUI (WSL2), Codex (WSL2), Copilot CLI (ConstrainedLanguage) | **Offline-capable, proxy-transparent architectures** are enterprise requirements — not edge cases. |

---

## Bottom Line for Developers

- **For stability today**: **Claude Code** (if on Anthropic) or **GitHub Copilot CLI** (if in GitHub Enterprise) have the most mature enterprise surfaces — but both have unresolved trust bugs (quota, session OOM).
- **For hackability & local-first**: **OpenAI Codex** (Rust TUI, Guardian, worktrees) and **OpenCode** (SQLite transparency, optimistic UI) lead — if you can tolerate alpha/edge churn.
- **For security/compliance**: **Gemini CLI** is furthest on deterministic redaction, supply-chain hardening, and OAuth standards.
- **For design-to-code / multi-provider fleets**: **DeepSeek TUI** (OpenDesign, model fleet) and **Pi** (extension API, proxy support) are differentiated bets.
- **Watch**: **Qwen Code**'s CUA driver maturation and review automation; **Kimi Code**'s migration completion; **Grok Build** for any signal.

*The ecosystem is converging on **MCP/ACP + quota transparency + project resilience** as the baseline. Tools that solve the "silent failure" triad (quota, sync

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-09-02 | Repository: [anthropics/skills](https://github.com/anthropics/skills)*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[Hivemind: Zero-Cost Multi-Agent Orchestration](https://github.com/anthropics/skills/pull/1628)** (#1628) | Delegates mechanical work to headless *opencode* workers on free models; Claude Code remains planner/reviewer/merger. | Novel cost-optimization architecture; addresses "expensive model context is the scarce resource." | `OPEN` |
| 2 | **[self-audit: Mechanical Verification + 4-Dimension Reasoning Gate](https://github.com/anthropics/skills/pull/1367)** (#1367) | Pre-delivery audit: Step 0 verifies claimed output files exist; Steps 1–4 run reasoning audit in damage-severity priority. | Universal, stack-agnostic; aligns with Issue [#1385](https://github.com/anthropics/skills/issues/1385) (Reasoning Quality Gate Pipeline). | `OPEN` |
| 3 | **[testing-patterns](https://github.com/anthropics/skills/pull/723)** (#723) | Full testing stack: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing. | Comprehensive reference skill; fills gap in "how to test" guidance for Claude Code. | `OPEN` |
| 4 | **[ServiceNow Platform](https://github.com/anthropics/skills/pull/568)** (#568) | Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, IntegrationHub. | Enterprise demand; 5-month active discussion (updated 2026-08-12). | `OPEN` |
| 5 | **[document-typography](https://github.com/anthropics/skills/pull/514)** (#514) | Prevents orphans, widows, numbering misalignment in AI-generated documents. | Addresses "every document Claude generates" pain point; high practical value. | `OPEN` |
| 6 | **[ODT Skill (OpenDocument)](https://github.com/anthropics/skills/pull/486)** (#486) | Create, fill, read, convert `.odt`/`.ods`; parse ODT→HTML. | Open-standard document workflow; complements existing DOCX/PDF skills. | `OPEN` |
| 7 | **[skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** (#83) | Meta-skills evaluating structure/docs (20%), behavior (25%), safety (25%), maintainability (15%), usability (15%). | Direct response to trust-boundary concerns (Issue [#492](https://github.com/anthropics/skills/issues/492)). | `OPEN` |
| 8 | **[pyxel Retro Game Development](https://github.com/anthropics/skills/pull/525)** (#525) | MCP server for Pyxel retro engine; write → run_and_capture → inspect → iterate loop. | Niche but high-engagement; demonstrates MCP + skill composition pattern. | `OPEN` |

> **Note:** PR comment counts are not exposed in the dataset; ranking weighs Issue cross-references, update recency, and scope breadth.

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence (Top Issues) | Implication |
|-------|----------------------|-------------|
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍): Community skills masquerading as official `anthropic/` namespace; [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍): Duplicate skills from `document-skills`/`example-skills` plugins. | Urgent need for namespacing, provenance verification, and curated registry. |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍): No native org-wide sharing; manual `.skill` file distribution via Slack/Teams. | Product-gap: shared skill library or installable links required. |
| **Evaluation Infrastructure Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍): `run_eval.py` 0% trigger rate; [#1390](https://github.com/anthropics/skills/issues/1390) (4 💬): `mcp-builder` evaluation scores 0/N; PRs [#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1602](https://github.com/anthropics/skills/pull/1602) all target eval/Windows fixes. | Skill-authoring loop is broken; blocking community contributions. |
| **Token Efficiency & Context Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 💬): `claude-api` injects ~156k tokens in one call; [#1329](https://github.com/anthropics/skills/issues/1329) (9 💬): `compact-memory` proposal for symbolic state notation. | Skills must become context-aware; compression/compaction primitives needed. |
| **Quality Gates & Self-Correction** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 💬, 1 👍): 3-gate pipeline (Calibration → Adversarial Review → Delivery Verification); PR [#1367](https://github.com/anthropics/skills/pull/1367) implements self-audit. | Shift from "generate" to "generate → verify → remediate" workflows. |
| **MCP-Native Skills** | [#16](https://github.com/anthropics/skills/issues/16) (4 💬): Expose skills as MCPs; PR [#525](https://github.com/anthropics/skills/pull/525) (pyxel) and [#1615](https://github.com/anthropics/skills/pull/1615) (scnet-hpc) already use MCP servers. | Skills evolving into MCP-backed tools; interoperability becoming standard. |
| **Enterprise/Platform Coverage** | [#568](https://github.com/anthropics/skills/pull/568) (ServiceNow), [#412](https://github.com/anthropics/skills/issues/412) (agent-governance, closed), [#1175](https://github.com/anthropics/skills/issues/1175) (SharePoint). | Demand for deep platform-specific skills with governance/compliance baked in. |

---

## 3. High-Potential Pending Skills (Active, Unmerged PRs)

| PR | Skill | Why It’s Poised to Land |
|----|-------|-------------------------|
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | Unique cost/architecture innovation; addresses core Claude Code constraint (context cost). |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Directly implements top-voted Issue [#1385](https://github.com/anthropics/skills/issues/1385); universal applicability. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Fills foundational gap; referenced in multiple skill-authoring discussions. |
| [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow** | Enterprise pull; 5-month iteration signals serious maintainer commitment. |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | High practical ROI; solves universal document-quality problem. |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | Completes open-document triad (DOCX/PDF/ODT); standards-compliant. |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | Mitigates #492 trust issue; enables automated skill review at scale. |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | HPC/SSH/Slurm workflow automation; niche but high-value for research clusters. |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for *trustworthy, composable, and self-verifying skills* that solve the **evaluation-authoring loop**, **namespace security**, and **context-window economics**—turning skills from fragile prompts into auditable, shareable, MCP-native capabilities.**

---

# Claude Code Community Digest — 2026-09-02

---

## 1. Today's Highlights

Two patch releases shipped in the last 24 hours: **v2.1.258** fixes a macOS 12 (Monterey) launch regression and a remote/scheduled session failure, while **v2.1.257** introduces **Claude Fable 5.1** as the default Fable model (1M context, $10/$50 per Mtok) and adds configurable time-format/time-zone settings. The community's most heated discussion remains the **Max plan session-limit exhaustion bug** (#38335, 842 comments, 476 👍), ongoing since March.

---

## 2. Releases

### v2.1.258 ([link](https://github.com/anthropics/claude-code/releases/tag/v2.1.258))
- **Fixed**: Claude Code failing to launch on macOS 12 (Monterey) — regression from v2.1.255
- **Fixed**: Remote/scheduled sessions failing with `"user messages must have non-empty content"` after a re-sent permission approval could not be applied

### v2.1.257 ([link](https://github.com/anthropics/claude-code/releases/tag/v2.1.257))
- **New model**: Claude Fable 5.1 (`claude-fable-5-1`) — now default Fable model; 1M context, $10/$50 per Mtok with $0.25/Mtok cache reads
- **New settings**: `timeFormat` (12-hour, 24-hour, 24-hour UTC, or strftime pattern) and `timeZone` for the turn-end clock and transcript timestamps

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | **Max plan session limits exhausted abnormally fast** (since Mar 23) | Core billing/quota bug affecting Max subscribers; CLI usage drains limits unexpectedly | **842 comments, 476 👍** — highest engagement in repo history |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Windows Desktop GPU-process crash (0x060C201E)** via in-app Browser tab; leaves MSIX unlaunchable until Repair | Blocks Windows desktop users; reproducible across driver versions | 100 comments, 16 👍 |
| [#79337](https://github.com/anthropics/claude-code/issues/79337) | **Fable 5 prompts "usage credits required" on Max plan** — silently downgrades to Opus 4.8 | Day-one Max plan regression for Fable 5 launch; billing/entitlement mismatch | 76 comments, 23 👍 (CLOSED) |
| [#85891](https://github.com/anthropics/claude-code/issues/85891) | **Windows Desktop: window stays always-on-top**, no setting to disable | UX-breaking behavior; Windows counterpart to macOS #66516 | 58 comments, **128 👍** |
| [#86142](https://github.com/anthropics/claude-code/issues/86142) | **MCP servers with draft-07 outputSchema rejected client-side** ("unsupported dialect") | Blocks MCP ecosystem adoption of new schema dialect | 44 comments, 13 👍 (CLOSED) |
| [#66020](https://github.com/anthropics/claude-code/issues/66020) | **macOS kernel zone leak (data.kalloc.1024)** — claude.exe panics at ~20GB, leak scales with agent load | Stability/crash risk for long-running agent workloads on macOS | 26 comments, 5 👍 |
| [#27474](https://github.com/anthropics/claude-code/issues/27474) | **`claude --worktree` overwrites `core.hooksPath`** in `$GIT_COMMON_DIR/config` | Git workflow corruption for worktree users | 14 comments, 16 👍 |
| [#62659](https://github.com/anthropics/claude-code/issues/62659) | **Windows Bash tool children survive as unkillable orphans** — no per-command Job Object | Process leakage, resource exhaustion on Windows | 11 comments, 1 👍 (CLOSED) |
| [#91345](https://github.com/anthropics/claude-code/issues/91345) | **Fable 5.1 requires unstable release** of Claude Code | New default model not usable on stable channel | 4 comments, 0 👍 (filed yesterday) |
| [#91386](https://github.com/anthropics/claude-code/issues/91386) | **Agent silently ran 10× more expensive model** (Fable 5 vs Haiku 4.5) and reported cheaper one | Billing transparency/trust issue; ~$98 vs ~$10 actual cost | 0 comments, 0 👍 (filed today) |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | **Add web4-governance plugin** | OPEN | AI governance plugin with T3 trust tensors, entity witnessing, R6 audit trails; "trust-native internet infrastructure for AI agent era" |
| [#78371](https://github.com/anthropics/claude-code/pull/78371) | **Harden ralph-wiggum plugin** | CLOSED | Safety hardening: bounded iterations, push/publish guard, stop-hook fixes to prevent unattended loops from deploying half-finished work |

> Only 2 PRs updated in the last 24h — both plugin-related. Core CLI changes appear to be shipping via direct releases.

---

## 5. Feature Request Trends

From the issue stream, the most-requested directions are:

1. **Usage transparency & quota clarity** — Real numbers/dates in limits UI (#91282), baseline disclosure for "boosted" limits, per-model cost attribution (#91386)
2. **Windows desktop parity** — Always-on-top toggle (#85891, #87895), GPU crash fixes (#80444), artifact viewer zoom scoping (#91377)
3. **MCP protocol maturity** — draft-07 outputSchema support (#86142), `requiresUserInteraction` suppressing "don't ask again" (#89063), browser name resolution (#90153)
4. **Scheduling & concurrency control** — User-configurable concurrent session limit for scheduled tasks (#91387, currently hardcoded to 3 via GrowthBook flag)
5. **Security/governance hooks** — Unbypassable PreCommit adversarial review gate (#90887), hook reliability for `ExitPlanMode` (#74256)
6. **Context/window management** — Context ring warning restoration (#91385), rewind command output completeness (#89440)

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Pattern | Representative Issues |
|------|---------|----------------------|
| **Billing/Quota Trust** | Silent model upgrades, opaque limit math, credits consumed with zero output | #38335, #79337, #91386, #87203, #91282 |
| **Windows Desktop Stability** | GPU crashes, always-on-top window, file-lock crashes under memory pressure, zoom misrouting | #80444, #85891, #87895, #90389, #91377 |
| **macOS Kernel/Resource Leaks** | `data.kalloc.1024` zone exhaustion → kernel panic, FD/kqueue leaks in long sessions | #66020, #82941 |
| **MCP Ecosystem Friction** | Client-side dialect rejection, permission UX gaps, generic browser identifiers | #86142, #89063, #90153 |
| **Hook/Automation Reliability** | `ExitPlanMode` allow ignored, `requiresUserInteraction` not respected, PreCommit bypassable | #74256, #89063, #90887 |
| **Model/Channel Mismatch** | New default model (Fable 5.1) requires unstable CLI; version gating unclear | #91345 |

---

*Generated from `anthropics/claude-code` GitHub data (releases, issues, PRs updated 2026-09-01 → 2026-09-02).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-02

---

## 1. Today's Highlights

The Codex team shipped five rapid alpha releases in the `0.153.0` series alongside a `0.152.1` bug fix that restores Guardian approval compatibility with Node REPL policies. Meanwhile, the community is reporting a cluster of high-impact regressions: macOS Remote Control sessions failing with "already has an active writer" (#37403, 50 comments), Windows Desktop failing to launch due to `codex.exe` relocation issues (#40700, 43 comments), and widespread "model at capacity" errors interrupting Pro/Pro Lite users (#41790, #41810). On the engineering side, 20 PRs landed in 24 hours covering Guardian V2 analytics, Vim replace mode, managed worktrees, and quota-aware warnings for Plus/Team plans.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.153.0-alpha.5** | Alpha | Incremental alpha in the 0.153.0 series |
| **rust-v0.153.0-alpha.4** | Alpha | Incremental alpha in the 0.153.0 series |
| **rust-v0.153.0-alpha.2** | Alpha | Incremental alpha in the 0.153.0 series |
| **rust-v0.153.0-alpha.1** | Alpha | Incremental alpha in the 0.153.0 series |
| **rust-v0.152.1** | Bug Fix | Guardian approval now honors Node REPL policies from model metadata ([compare](https://github.com/openai/codex/compare/rust-v0.152.0...rust-v0.152.1)) |

> **Note**: No stable release in the last 24h. The `0.153.0-alpha.*` cadence suggests active pre-release validation.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#37403](https://github.com/openai/codex/issues/37403) | **macOS Remote Control broken**: "already has an active writer" after Aug 7 update | Blocks cross-device workflow (mobile → desktop thread resume); regression in core sync logic | 50 comments, 34 👍 — high urgency for remote developers |
| [#16857](https://github.com/openai/codex/issues/16857) | **High GPU usage from tiny animation** while "thinking" | Sustained GPU drain on macOS; impacts battery/thermals on laptops | 43 comments, 52 👍 — long-standing (since Apr), easy visual repro |
| [#40700](https://github.com/openai/codex/issues/40700) | **Windows Desktop won't start**: `codex.exe` relocation from WindowsApps fails | Complete launch failure on Windows 26.820+; affects Store installs | 43 comments, 2 👍 — blocking for Windows users |
| [#41463](https://github.com/openai/codex/issues/41463) | **Windows + WSL: AbsolutePathBuf deserialization fails** on project creation | Blocks WSL2 workflows; path handling regression in 26.825+ | 16 comments, 7 👍 |
| [#41790](https://github.com/openai/codex/issues/41790) | **Pro users hit "model at capacity" repeatedly** mid-task (since Aug 31) | Service-side capacity crunch; interrupts long-running agent tasks | 14 comments, 9 👍 — affects paying Pro tier |
| [#26011](https://github.com/openai/codex/issues/26011) | **config.toml MCP paths stale after Windows auto-update** → `node_repl` fails (os error 3) | Auto-update breaks MCP server config; requires manual path fix | 14 comments, 7 👍 — persistent since Jun |
| [#37856](https://github.com/openai/codex/issues/37856) | **VS Code extension: stale thread owner blocks chat** after renderer reload | "Open in another app" false positive; requires manual thread cleanup | 9 comments, 7 👍 |
| [#30464](https://github.com/openai/codex/issues/30464) | **macOS: visible window → sustained high GPU/WindowServer CPU**, MacBook overheating | Thermal throttling risk; correlates with renderer area (#40330) | 9 comments, 6 👍 |
| [#41439](https://github.com/openai/codex/issues/41439) | **macOS Desktop 26.825.32147: local project loses shell/filesystem tools**, terminal can't attach | Tool loss mid-session; suggests app-server/sandbox handshake failure | 6 comments, 1 👍 |
| [#41969](https://github.com/openai/codex/issues/41969) | **Pro Lite: sudden weekly quota depletion**, banked reset & gpt-reserve gone | Billing/quota accounting bug; users lose banked hours without redemption | 5 comments — new (Sep 1), high business impact |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Description | Impact |
|---|----|-------------|--------|
| [#42199](https://github.com/openai/codex/pull/42199) | **Refactor shared TUI input routing** | Centralizes keymap dispatcher; isolates transcript input handling; adds regression tests | Foundation for composer/editor UX improvements |
| [#42196](https://github.com/openai/codex/pull/42196) | **Add managed worktree creation** | `WorktreeManager::create` for detached, Desktop-compatible worktrees from `HEAD` or base | Enables safer parallel agent sessions |
| [#42194](https://github.com/openai/codex/pull/42194) | **Add Vim replace mode to TUI composer** | `R` enters replace mode (overwrite graphemes, append at EOL); Backspace restores; undo/dot-repeat support | Major Vim parity win for CLI power users |
| [#42192](https://github.com/openai/codex/pull/42192) | **Native spawning for bare macOS MCP commands** | Extends launcher to resolve bare commands via child's `PATH` (incl. empty entries/default) | Fixes MCP server spawn reliability on macOS |
| [#42178](https://github.com/openai/codex/pull/42178) | **Structured async user input requests** | Replaces `send_user_message_async` with `request_user_input_async` (questions + suggested answers) | Enables richer human-in-the-loop flows |
| [#42174](https://github.com/openai/codex/pull/42174) | **Cacheable Bazel app-server schema bundle** | `schema_bundle` rule generates stable/experimental schemas; bundles `zstd` for JSON normalization | Faster, reproducible schema distribution |
| [#42173](https://github.com/openai/codex/pull/42173) | **Header injections in network requirements** | Parses `experimental_network.header_injections` (host/method/path-prefix/header mappings) | Enterprise proxy/auth header support |
| [#42164](https://github.com/openai/codex/pull/42164) | **Record result sources in app tool analytics** | Per-tool `analytics_result_source` (e.g., `detailed_message_search_v1`); attaches host-generated source IDs | Observability for tool result provenance |
| [#42147](https://github.com/openai/codex/pull/42147) | **Skip Guardian reviews in Full Access** | Detects Full Access (approvalPolicy=never + unrestricted perms) → bypasses confirmation-only model review | Reduces latency for trusted environments |
| [#42142](https://github.com/openai/codex/pull/42142) | **Early rate-limit warnings for Plus/Team** | Warns at <50% of ~5hr window remaining (vs. 75/90/95% for others); deduplicated | Proactive quota UX for mid-tier plans |

---

## 5. Feature Request Trends

From the issue corpus, three clear directions emerge:

1. **Quota-aware task planning** — #42182 explicitly requests Codex to model remaining 5-hour/weekly quotas as planning constraints to avoid mid-task interruption. Related: #41790, #41810, #41969 show capacity/quota errors are a top pain point.

2. **Remote/sync reliability** — #37403, #41849, #41463, #40907 all center on thread state corruption across device switches (Remote Control, VS Code Remote-SSH, Windows↔WSL, checkpoint restore). Users need deterministic session continuity.

3. **Resource efficiency on macOS** — #16857, #26736, #30464, #40330, #41038 form a consistent cluster: GPU/CPU scales with window visibility/area, minimized=near-zero. Request: idle renderer throttle or "headless" mode.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Frequency | Representative Issues |
|------|-----------|----------------------|
| **Windows Desktop launch/startup failures** | High (5+ issues) | #40700 (relocation), #25886 ("failed to start"), #41252 (app-server unavailable), #41850 (headless startup hang), #41960/42061/41535 (pet overlay input) |
| **Model capacity / quota interruptions** | High (4+ issues) | #41790, #41810, #41969, #42182 (feature req) — affects Pro, Pro Lite, Plus |
| **macOS GPU/thermal regression** | High (5 issues) | #16857, #26736, #30464, #40330, #41038 — all report GPU ∝ window visibility |
| **Config drift after auto-update** | Medium | #26011 (MCP paths), #31265 (deny-read ACL ignored on Windows), #41463 (WSL path deserialize) |
| **Thread ownership / sync conflicts** | Medium | #37403 (Remote Control), #37856 (VS Code), #41849 (Remote-SSH), #42027 (side-chat fork ordinal mismatch) |
| **WSL2 / cross-platform path handling** | Medium | #41463 (AbsolutePathBuf), #31265 (ACL), #26011 (config.toml paths) |

> **Signal**: Windows and macOS Desktop apps are experiencing concurrent regression waves (launch, GPU, sync). The `0.153.0-alpha` sprint appears focused on infra (Guardian V2, worktrees, schema bundles, Vim UX) while Desktop stability issues accumulate in the backlog.

---

*Digest generated from `github.com/openai/codex` data as of 2026-09-02. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-02

---

## 1. Today's Highlights
The project shipped **v0.59.0-preview.0** and a new nightly build (`v0.59.0-nightly.20260902.g4963a4456`), both focusing on stability fixes for web-fetch routing, authentication crashes in restricted environments, and NTFS path-traversal mitigations. Meanwhile, the issue backlog reveals persistent pain points around **sub-agent reliability** (hangs, false-success reporting, Wayland failures) and **Auto Memory security/quality** (redaction timing, inbox pollution, retry loops). Security hardening continues across MCP OAuth, extension installs, and A2A server metadata.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [`v0.59.0-nightly.20260902.g4963a4456`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260902.g4963a4456) | Nightly | `fix(core)`: improved destination validation & connection routing in web fetch utilities ([#29120](https://github.com/google-gemini/gemini-cli/pull/29120)). First contribution from **@diegogodinezr**. |
| [`v0.59.0-preview.0`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-preview.0) | Preview | Changelog for v0.58.0; version bump; includes fixes for symlink evaluation in ignore paths ([#28915](https://github.com/google-gemini/gemini-cli/pull/28915)). |
| [`v0.58.0`](https://github.com/google-gemini/gemini-cli/releases/tag/v0.58.0) | Stable | Changelog for v0.57.0; consistent symlink evaluation; assorted refactors. |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** | Masks real failures; breaks trust in autonomous delegation. | 13 comments, 2 👍 — **P1, needs retest** |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Blocks all deferred work; users must disable sub-agents to proceed. | 8 comments, 8 👍 — **P1, needs retest** |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping** | Epic tracking potential for precise, token-efficient code navigation. | 7 comments, 1 👍 — **P2, investigation** |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21409) | **Gemini under-uses custom skills & sub-agents** | Reduces value of extensibility surface; requires explicit prompting. | 6 comments — **P2, needs retest** |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction & reduce Auto Memory logging** | Secrets enter model context before redaction; logging exposes skills. | 5 comments — **P2, security** |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell command stuck at “Waiting input” after completion** | Frequent UI freeze on trivial commands; breaks non-interactive flows. | 4 comments, 3 👍 — **P1, medium effort** |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent: automatic session takeover & lock recovery** | Persistent profiles fail fast on lock; no graceful recovery. | 4 comments — **P3, feature** |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Blocks Linux/Wayland users from browser automation. | 4 comments, 1 👍 — **P1, needs retest** |
| [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) | **Native file tools for task tracker** | Explore replacing custom tracker with OS-level tooling for reliability. | 4 comments — **P3, experiment** |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | **Symlinked agent files not recognized** | Breaks dotfile management workflows; symlinks ignored in `~/.gemini/agents/`. | 4 comments — **P3, needs info** |

---

## 4. Key PR Progress (Top 10 by Activity)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) | OPEN | **Mitigate NTFS 8.3 short-name (SFN) path traversal** — normalizes `git~1`, `env~1`, etc. in path checker & blocklist. |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | OPEN | **Extension consent for env changes & sanitize runtime-altering vars** — prevents unauthorized MCP server env injection. |
| [#29163](https://github.com/google-gemini/gemini-cli/pull/29163) | OPEN | **Prevent startup crash in git repos under macOS Seatbelt** — guards `useGitBranchName` hook against restricted FS access. |
| [#29117](https://github.com/google-gemini/gemini-cli/pull/29117) | OPEN | **Enforce RFC 9207 issuer identification in MCP OAuth** — validates `iss` claim to prevent token misrouting. |
| [#29067](https://github.com/google-gemini/gemini-cli/pull/29067) | OPEN | **Remove misleading security schemes & hardcoded creds from A2A server** — aligns metadata with unauthenticated local-dev design. |
| [#28888](https://github.com/google-gemini/gemini-cli/pull/28888) | CLOSED | **Allow launcher workspace outside home** — uses `CODER_AGENT_WORKSPACE_PATH` as confinement root. |
| [#29165](https://github.com/google-gemini/gemini-cli/pull/29165) | OPEN | **Automated nightly version bump** to `0.59.0-nightly.20260902.g4963a4456`. |
| [#28889](https://github.com/google-gemini/gemini-cli/pull/28889) | CLOSED | **Restore paused stdin after capability detection** — fixes terminal flow-state regression. |
| [#28893](https://github.com/google-gemini/gemini-cli/pull/28893) | CLOSED | **Preserve explicit flash model IDs** — stops rollout rewrite from mangling `gemini-3.6-flash`, `gemini-3.7-flash`, etc. |
| [#28895](https://github.com/google-gemini/gemini-cli/pull/28895) | CLOSED | **Recognize mixed function-call turns** — corrects turn-classification logic. |

---

## 5. Feature Request Trends
1. **AST-aware tooling** — Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747)) push for syntax-tree-based read/search/map to cut token waste and misaligned reads.
2. **Sub-agent observability & control** — Requests for trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), backgrounding ([#22741](https://github.com/google-gemini/gemini-cli/issues/22741)), and bug-report context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
3. **Auto Memory hardening** — Deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), inbox quarantine ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and retry quotas ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
4. **Non-interactive reliability** — Plan Mode hang fixes ([#29063](https://github.com/google-gemini/gemini-cli/pull/29063)), shell “waiting input” ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)).
5. **Cross-platform browser agent** — Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), session takeover ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), settings propagation ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

---

## 6. Developer Pain Points (Recurring Themes)
- **Sub-agent trust issues**: False “GOAL success” on timeout ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), silent hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), and missing trajectory data ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)) make delegation feel unsafe.
- **Shell/terminal flakiness**: “Waiting input” ghost state ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)), stdin flow bugs ([#28889](https://github.com/google-gemini/gemini-cli/pull/28889)), interactive prompts blocking automation ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).
- **Security/privacy gaps in Auto Memory**: Secrets logged pre-redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), inbox pollution ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), unbounded retries ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
- **Extension & MCP hardening**: Consent bypasses ([#28863](https://github.com/google-gemini/gemini-cli/pull/28863)), install races ([#29087](https://github.com/google-gemini/gemini-cli/pull/29087)), OAuth issuer spoofing ([#29117](https://github.com/google-gemini/gemini-cli/pull/29117)).
- **Model behavior drift**: Under-use of skills/agents ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), destructive commands ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)), temp-file sprawl ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).

---

*Digest generated from `google-gemini/gemini-cli` GitHub data as of 2026-09-02. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-02

## 1. Today's Highlights
The v1.0.83-1 release adds session sidebar sorting options (Recent, Created, Name) with persistence across restarts and introduces an enterprise `forceLoginOrgs` setting to pin sign-in to approved GitHub organizations. Meanwhile, the issue tracker reveals a cluster of critical regressions: Node.js OOM crashes from leaked libuv handles (~37 min uptime), MCP initialization protocol mismatches, BYOK `/model` command breakage, and OAuth token refresh failures forcing interactive re-auth. No PRs were updated in the last 24 hours.

## 2. Releases
### v1.0.83-1
**Added**
- Session sidebar sorting: Recent, Created, Name, and classic None — selection persists across restarts
- Enterprise `forceLoginOrgs` managed setting to restrict sign-in to approved GitHub organizations

**Improved**
- `/mcp config` and MCP add/edit workflows

[Release link](https://github.com/github/copilot-cli/releases/tag/v1.0.83-1)

## 3. Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#13](https://github.com/github/copilot-cli/issues/13) | **CLI needs vi/vim input mode** | Long-standing request (75 👍) for modal editing in interactive CLI — blocks Vim users from efficient navigation | 9 comments, 75 👍, **CLOSED** (likely shipped or wontfix) |
| [#4664](https://github.com/github/copilot-cli/issues/4664) | **OOM crash resuming large sessions** | Fatal `JavaScript heap out of memory` when loading long-standing sessions; blocks session continuity for heavy users | 5 comments, 0 👍, **OPEN** |
| [#4525](https://github.com/github/copilot-cli/issues/4525) | **MCP legacy `initialize` sent after modern `server/discover`** | Protocol mismatch causes `-32022` errors against Python MCP SDK 2.0.0 dual-era runner; breaks MCP server connectivity | 4 comments, 0 👍, **OPEN** |
| [#3074](https://github.com/github/copilot-cli/issues/3074) | **Add `/effort` command for reasoning effort** | UX pain: switching reasoning effort via `/model` is multi-step; developers want quick toggle for performance/quality tradeoff | 3 comments, 9 👍, **CLOSED** |
| [#3688](https://github.com/github/copilot-cli/issues/3688) | **Inconsistent base dirs: agents (git root) vs skills/.mcp.json (cwd)** | Repository-scoped customizations resolve from different roots, causing confusing discovery failures in monorepos/submodules | 3 comments, 3 👍, **OPEN** |
| [#3421](https://github.com/github/copilot-cli/issues/3421) | **Azure DevOps MCP works in VS Code but fails in CLI with "Dangerous Request.Path"** | Same MCP server works in VS Code but CLI rejects requests; blocks enterprise ADO workflows in CLI | 3 comments, 0 👍, **OPEN** |
| [#4438](https://github.com/github/copilot-cli/issues/4438) | **`disable-model-invocation: true` makes skill unreachable, not manual-only** | Skills marked manual-only become completely invisible to `skill()` tool, breaking explicit invocation | 3 comments, 6 👍, **OPEN** |
| [#4681](https://github.com/github/copilot-cli/issues/4681) | **MCP OAuth: `initialize` request omits User-Agent & custom headers** | Post-OAuth `initialize` drops configured headers, causing server-side rejection or missing telemetry | 2 comments, 0 👍, **OPEN** |
| [#4680](https://github.com/github/copilot-cli/issues/4680) | **CLI sends wrong model ID (`gpt-5.4-nano`) to custom OpenAI-compatible endpoint** | BYOK with non-OpenAI models fails because CLI hardcodes wrong model name in request body | 2 comments, 0 👍, **OPEN** |
| [#4414](https://github.com/github/copilot-cli/issues/4414) | **BYOK custom providers return local 403 before reaching provider** | Requests fail with 403 locally, never hit the configured provider; `/login` misleadingly suggested | 2 comments, 2 👍, **CLOSED** |

## 4. Key PR Progress
*No pull requests were updated in the last 24 hours.*

## 5. Feature Request Trends
From the issue corpus, the strongest directional signals are:

1. **Session resilience & scale** — OOM on large sessions (#4664, #4686), session resume model persistence (#4645), repo instructions lost on `/compact` (#4687), file attribution gaps after `apply_patch` (#4691)
2. **MCP protocol maturity** — Dual-era initialization race (#4525), OAuth refresh vs interactive re-auth (#4203), header propagation (#4681), startup timeout budgets (#4678)
3. **BYOK / custom provider parity** — Model switching broken (#4672), wrong model ID sent (#4680), local 403 interception (#4414), reasoning effort quick-toggle (#3074)
4. **Enterprise & constrained environments** — PowerShell ConstrainedLanguage errors (#4683), `forceLoginOrgs` (shipped in 1.0.83-1), fork-aware issue/PR panels (#4689)
5. **Agent/skill discovery consistency** — Base directory unification (#3688), plugin agent discovery (#4655), skill invocation semantics (#4438, #4637)

## 6. Developer Pain Points
| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Session stability at scale** | High | #4664 (OOM resume), #4686 (31k libuv handle leak), #4687 (instructions lost on compact), #4691 (missing file attribution) |
| **MCP integration fragility** | High | #4525 (protocol mismatch), #4203 (OAuth refresh ignored), #4681 (headers dropped), #4678 (192s startup block), #3421 (ADO path rejection) |
| **BYOK / custom model breakage** | Medium | #4672 (`/model` broken), #4680 (wrong model ID), #4414 (local 403), #3074 (no quick effort toggle) |
| **Enterprise environment friction** | Medium | #4683 (ConstrainedLanguage PowerShell), #4689 (fork-ignoring panels), `forceLoginOrgs` (now shipped) |
| **Skill/agent discovery inconsistencies** | Medium | #3688 (git root vs cwd), #4438 (disable-model-invocation = unreachable), #4655 (plugin agents not found), #4637 (duplicate lookup) |
| **Shell/UX rough edges** | Low-Medium | #13 (vim mode, closed), #4633 (8.6 KB "too large"), #4679 (sandbox.enabled:false ignored), #4690 (long paths in marketplace clone) |

---
*Generated from github/copilot-cli data as of 2026-09-02. Links point to live GitHub issues.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-02

---

## 1. Today's Highlights

- **v1.50.0 released** with a deprecation-aware update flow that detects migration notices from the CDN and guides users to the new "Kimi Code" CLI with a one-key migration path.  
- The release also fixes an Anthropic beta header omission in the `kosong` dependency (bumped to 0.56.0) and documents plugin security/persistent-data contracts.  
- Three long-standing issues (yolo-mode shell visibility, Escape-key subagent cancellation, XDG Base Directory compliance) were closed today, signaling cleanup of legacy feedback.

---

## 2. Releases

### v1.50.0 ([PR #2632](https://github.com/MoonshotAI/kimi-cli/pull/2632))
| Change | Description |
|--------|-------------|
| `fix(kosong)` | Omit empty `anthropic-beta` header when no beta features declared ([#2580](https://github.com/MoonshotAI/kimi-cli/pull/2580)) |
| `chore(deps)` | Bump `kosong` to 0.56.0 ([#2581](https://github.com/MoonshotAI/kimi-cli/pull/2581)) |
| `feat(shell)` | **Deprecation-aware update flow** — CLI now polls `https://cdn.kimi.com/kimi-code-tips/kimi_cli/migration.json`; if a deprecation notice exists, it treats the Python release as deprecated and drives a one-key migration to "Kimi Code" ([#2630](https://github.com/MoonshotAI/kimi-cli/pull/2630)) |
| `docs(plugins)` | Document security model and persistent data handling for plugins ([#2614](https://github.com/MoonshotAI/kimi-cli/pull/2614)) |

---

## 3. Hot Issues (All Closed Today)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#1298](https://github.com/MoonshotAI/kimi-cli/issues/1298) **Yolo mode: show full shell commands & file writes** | Users running autonomous agents need full visibility to interrupt dangerous operations; truncated `...` output was a blind spot. | 👍 0 • 0 comments (closed without fix — likely superseded by new streaming output in Kimi Code) |
| [#1297](https://github.com/MoonshotAI/kimi-cli/issues/1297) **Escape key cancels subagents but throws unhandled exception** | Keyboard interruption during multi-agent runs crashed the CLI instead of cleanly aborting. | 👍 1 • 0 comments (fixed in upstream refactor) |
| [#1294](https://github.com/MoonshotAI/kimi-cli/issues/1294) **Follow XDG Base Directory (`~/.config/kimi`)** | Reduces home-directory clutter; aligns with Linux/Freedesktop standards. | 👍 1 • 0 comments (migration path added in v1.50.0) |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#2630](https://github.com/MoonshotAI/kimi-cli/pull/2630) | **Closed** | **Deprecation-aware update flow + one-key migration to Kimi Code** — Core migration infrastructure; checks CDN for `migration.json` and auto-offers switch. |
| [#2632](https://github.com/MoonshotAI/kimi-cli/pull/2632) | **Closed** | Release chore: version bump, changelog sync, Python wrapper pin. |
| [#2614](https://github.com/MoonshotAI/kimi-cli/pull/2614) | **Open** | **Plugin security docs** — Clarifies sandbox, persistent data scope, and installation under `~/.kimi/plugins/`. |
| [#742](https://github.com/MoonshotAI/kimi-cli/pull/742) | **Closed** | **`$ list skills` command** — Parity with Codex CLI for discoverability of built-in skills. |

---

## 5. Feature Request Trends (from closed issues + PRs)

1. **Migration & Deprecation UX** — First-class support for sunsetting the Python CLI in favor of the new "Kimi Code" binary (auto-detect, one-key migrate).  
2. **Standards Compliance** — XDG Base Directory, plugin sandboxing, persistent-data contracts.  
3. **Observability in Autonomous Modes** — Full command/file-output streaming (yolo/agent modes) to enable safe interruption.  
4. **Discoverability** — `$ list skills` parity with competitor CLIs.  
5. **Graceful Signal Handling** — Clean shutdown on `SIGINT`/`Escape` during multi-agent runs.

---

## 6. Developer Pain Points (Recurring)

| Pain Point | Evidence |
|------------|----------|
| **Opaque autonomous execution** | #1298 — truncated shell output prevents timely intervention. |
| **Unclean interruption** | #1297 — Escape key crashes instead of aborting cleanly. |
| **Config pollution** | #1294 — dotfiles in `$HOME` instead of `~/.config/`. |
| **Migration friction** | PR #2630 — need for automated, guided transition to new CLI brand. |
| **Plugin trust boundaries** | #2614 — unclear security model for third-party plugins. |

---

*Digest generated from GitHub data (releases, issues, PRs updated 2026-09-01 → 2026-09-02). All links point to `github.com/MoonshotAI/kimi-cli`.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-02

## 1. Today's Highlights
OpenCode released **v1.18.26** with critical stability fixes for Claude 5 sessions, Bedrock GPT-5.6 reasoning, and tool-call timing accuracy. The issue tracker reveals a **systemic pattern of project-path corruption** when directories are moved or renamed — 15+ closed issues in the last 24h alone describe phantom projects, stale `worktree` entries, and 500 errors caused by mismatched paths. Meanwhile, PR activity shows rapid iteration on TUI robustness, plugin registry hydration, and optimistic UI state management.

---

## 2. Releases
**v1.18.26** — Core bugfixes:
- Claude 5 sessions now tolerate stale thinking blocks instead of failing after prompt/tool changes
- Bedrock GPT-5.6 models accept `none` reasoning effort
- Bedrock reasoning and replay handling reliability improved (@pengzh1)
- Tool call timing accuracy maintained during edge cases

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#36413](https://github.com/anomalyco/opencode/issues/36413) | `opencode run` exits 0 with empty stdout when tool call auto-rejected and no final message | **Silent failure in automation pipelines** — no machine-detectable signal on stdout/stderr; breaks CI/CD reliability | 5 comments, open since Jul 11 |
| [#39471](https://github.com/anomalyco/opencode/issues/39471) | Desktop silently returns empty response when saved project directory no longer exists | **Data-loss-adjacent UX failure** — prompt submitted, completion sound plays, but zero output or error | 5 comments, closed Sep 2 |
| [#33704](https://github.com/anomalyco/opencode/issues/33704) | GUI options to edit custom providers & manage model lists | **High-demand extensibility gap** — users managing LM Studio/Jan AI must edit config files manually | 4 comments, 2 👍, open since Jun 24 |
| [#44538](https://github.com/anomalyco/opencode/issues/44538) | Sessions disappear after renaming project folder — case-sensitive path matching with inconsistent normalization | **Windows path-handling regression** — folder rename breaks session binding permanently | 4 comments, closed Sep 2 |
| [#44101](https://github.com/anomalyco/opencode/issues/44101) | Two clones of same repo show wrong project name/path — identity from git remote | **Fundamental project identity flaw** — git remote URL used as sole key collides parallel worktrees | 4 comments, closed Sep 2 |
| [#42263](https://github.com/anomalyco/opencode/issues/42263) | Memory leak: PDF attachments base64-encoded without size limit, re-encoded every turn → OOM | **Critical resource exhaustion** — large PDFs crash sessions; no streaming/chunking | 3 comments, 1 👍, open since Aug 13 |
| [#46330](https://github.com/anomalyco/opencode/issues/46330) | Moving project directory leaves stale `worktree` in DB — project shows "no git", all prompts fail ENOENT | **SQLite state corruption** — manual DB edit required to recover; blocks all project operations | 3 comments, closed Sep 2 |
| [#45392](https://github.com/anomalyco/opencode/issues/45392) | Windows Desktop + WSL: model selection, path persistence, stale directory refs | **Cross-platform integration pain** — WSL backend + Windows frontend path mismatch | 3 comments, closed Sep 2 |
| [#42315](https://github.com/anomalyco/opencode/issues/42315) | Same git remote URL → identical project_id for different clones → only one visible | **Duplicate of #44101/#35873** — confirms systemic project identity design issue | 3 comments, closed Sep 2 |
| [#40986](https://github.com/anomalyco/opencode/issues/40986) | Renaming project folder breaks binding — phantom project, sessions fall back to global | **macOS Finder rename not detected** — 2 👍, closed Sep 2 | 3 comments, 2 👍, closed Sep 2 |

**Pattern:** 12+ issues in 24h describe **project-path desync** after move/rename/delete — affecting Desktop, Web, TUI, and CLI. Root cause: `worktree` column in SQLite `project` table not updated, no filesystem watcher, and git-remote-based identity collides parallel checkouts.

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Type | Description |
|---|-----|------|-------------|
| [#46726](https://github.com/anomalyco/opencode/pull/46726) | Bug fix | **TUI exits cleanly when startup probes can't reach server** (fixes #36688) — prevents hung TUI during server cold-boot/election |
| [#46682](https://github.com/anomalyco/opencode/pull/46682) | Bug fix | **Await plugin activation before caching ACP catalog** — prevents partial model/agent catalog from being pinned for connection lifetime |
| [#46725](https://github.com/anomalyco/opencode/pull/46725) | Bug fix | **Rebuild registry state on read** — fixes OAuth credential refresh race during plugin startup that dropped account-specific models |
| [#46721](https://github.com/anomalyco/opencode/pull/46721) | Refactor | **Carry typed job outcomes for stops** — Ctrl+D on background shell no longer reported as failure; subagent interrupt no longer generic "cancelled" |
| [#46717](https://github.com/anomalyco/opencode/pull/46717) | Feature | **Timeline detail presets & placement controls** — 5 presets (Everything → Text only), separate Placement (Separate/Grouped/Hidden) from Details |
| [#46650](https://github.com/anomalyco/opencode/pull/46650) | Feature | **Show session scrollbar by default for long chats** — improves mouse/trackpad navigation in TUI |
| [#46720](https://github.com/anomalyco/opencode/pull/46720) | Refactor | **Isolate optimistic submission lifecycle** — separates optimistic prompts from server-confirmed data to simplify rollback/retry logic |
| [#46723](https://github.com/anomalyco/opencode/pull/46723) | Bug fix | **Stabilize optimistic prompt position** — measures row sizes pre-paint, prevents prompt jump during virtualizer updates |
| [#46710](https://github.com/anomalyco/opencode/pull/46710) | Perf | **Copy models.dev snapshot without `structuredClone`** — eliminates 6,300 clones/3.6MB → ~40ms saved per catalog call |
| [#46716](https://github.com/anomalyco/opencode/pull/46716) | Feature | **Add grep matching options** — `literal` (fixed-string) and `caseSensitive` flags mapped to ripgrep |

---

## 5. Feature Request Trends
From issues updated in the last 24h, three clear directions emerge:

1. **Project workspace resilience** — Users expect OpenCode to detect folder moves/renames/deletions and either auto-update bindings or show clear recovery UI (issues #40596, #40986, #43192, #45559). Current behavior: silent corruption.
2. **Multi-root / parallel checkout support** — Git-remote-based project identity fails for worktrees and parallel clones (#35674, #35873, #42315, #44101). Need path-aware identity with remote as fallback.
3. **Custom provider/model management UI** — #33704 (2 👍) requests GUI for LM Studio, Jan AI, local inference — currently config-file-only.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Stale project paths after move/rename** | **Critical** — 15+ issues in 24h | #36004, #37697, #38013, #38151, #38578, #39836, #40222, #40336, #40677, #40699, #40986, #41420, #43192, #44073, #44538, #45559, #46330 |
| **Git-remote collision for parallel clones/worktrees** | **High** — 5+ issues | #35674, #35873, #36150, #42315, #44101 |
| **Silent failures in headless/automation mode** | **High** — 2+ issues | #36413 (exit 0, empty stdout), #36764 (@agent mentions ignored, --agent fallback) |
| **PDF memory exhaustion** | **Medium** — 1 issue, severe impact | #42263 (unbounded base64, re-encoded per turn) |
| **WSL ↔ Windows path mismatch** | **Medium** — 1 detailed report | #45392 (model selection, persistence, stale refs) |
| **No GUI for custom provider config** | **Medium** — 1 feature request, 2 👍 | #33704 |

**Bottom line:** The project-path desync issue is the single largest source of user-reported breakage. A filesystem watcher + path normalization layer + composite project identity (remote + local path) would resolve the majority of Desktop/Web/TUI issues in one stroke.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-02

## Today's Highlights
The Pi team closed a high-impact Linux standards issue (#2870, 54 👍) enforcing XDG Base Directory compliance, eliminating home-directory clutter. Meanwhile, two regressions surfaced: the agent stalls after the first tool call when a plain-HTTP provider sits behind a forward proxy (#8134), and Grok 4.6 enters an infinite tool-call loop under the new xAI Responses routing (#8973). On the UX front, a batch of TUI polish PRs landed—prettier spinners, fixed theme markers, and a two-column selector layout—while extension APIs gained sub-agent model/thinking overrides and fresher in-memory session handling.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2870](https://github.com/earendil-works/pi/issues/2870) | **[CLOSED] Follow XDG Base Directory** | Long-standing Linux hygiene fix: config/state now lives under `$XDG_CONFIG_HOME`/`$XDG_STATE_HOME` instead of `~/.pi`. Affects every Linux user. | 21 comments · **54 👍** |
| [#8134](https://github.com/earendil-works/pi/issues/8134) | **[OPEN] Agent stops after first tool call with plain-HTTP provider via forward proxy** | Regression since **v0.84.0**; breaks corporate/air-gapped setups that route through HTTP proxies. First call succeeds, follow-up hangs. | 7 comments · 0 👍 |
| [#6996](https://github.com/earendil-works/pi/issues/6996) | **[OPEN] Gemini 3.x models fail during tool use (missing `thought_signature`)** | Blocks Gemini 3.5/3.6 Flash users from tool workflows. Root cause: history serialization omits required field. | 7 comments · 0 👍 |
| [#4338](https://github.com/earendil-works/pi/issues/4338) | **[CLOSED] Agent “working” but makes no progress** | Common “stuck agent” report; closed as weekend/refactor but signals ongoing reliability perception issues. | 8 comments · 2 👍 |
| [#5931](https://github.com/earendil-works/pi/issues/5931) | **[CLOSED] Copy-paste from TUI adds extra spaces/line breaks** | UX papercut for anyone copying long outputs; fixed in recent TUI refactor. | 8 comments · 1 👍 |
| [#8938](https://github.com/earendil-works/pi/issues/8938) | **[OPEN] Wide, short inline images stretched vertically** | Rendering math error: 615×86 PNG → 60×5 cells (6:1) vs. source 7.15:1. Visible in v0.84.4 without extensions. | 3 comments · 0 👍 |
| [#8700](https://github.com/earendil-works/pi/issues/8700) | **[OPEN] Mistral Medium rejects “Reasoning prompt mode not enabled”** | Model-capability mismatch: Pi sends reasoning hint but Mistral Medium doesn’t support it. Needs provider-side guard. | 2 comments · 0 👍 |
| [#8797](https://github.com/earendil-works/pi/issues/8797) | **[OPEN] Rebinding `app.models.save` ignored in `/model` & thinking selector** | Hardcoded `ctrl+s` in two components; keybinding config not respected. Affects power-user workflows. | 2 comments · 0 👍 |
| [#8973](https://github.com/earendil-works/pi/issues/8973) | **[CLOSED] Grok 4.6 re-issues identical tool call indefinitely** | Regression in **xAI Responses routing (v0.84.3+)**; tool results recorded but never influence next request. | 2 comments · 0 👍 |
| [#8979](https://github.com/earendil-works/pi/issues/8979) | **[CLOSED] Write tools report UTF-16 code units as byte counts** | `String.length` ≠ byte length; `你好🙂` reports 4 “bytes” vs. actual 10. Affects token accounting & quotas. | 1 comment · 0 👍 |

---

## Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#8969](https://github.com/earendil-works/pi/pull/8969) | **feat** | **Sub-agent tool gains `model` & `thinking` overrides** — callers can now spawn scouts on cheap models and planners on heavy ones without new sessions. |
| [#8980](https://github.com/earendil-works/pi/pull/8980) | **feat** | **In-memory sessions ingest external entries** — follows #8885; enables richer session forking/resume for extensions & RPC. |
| [#8966](https://github.com/earendil-works/pi/pull/8966) | **fix** | **`--provider` without `--model` now selects provider default**; auth failures surface the failing provider name — improves CLI debugging. |
| [#8936](https://github.com/earendil-works/pi/pull/8936) | **fix** | **Stop prepared parallel tools after preflight abort** — prevents orphan tool execution; adds regression coverage for lifecycle events. |
| [#8937](https://github.com/earendil-works/pi/pull/8937) | **fix** | **Settle active turn before in-memory fork** — avoids `toolResult` landing in replacement session and double-dispose races. |
| [#8941](https://github.com/earendil-works/pi/pull/8941) | **fix** | **`supportsMaxOutputTokens` compat flag for `openai-responses`** — lets Codex-protocol proxies opt out of rejected `max_output_tokens`. |
| [#8900](https://github.com/earendil-works/pi/pull/8900) | **feat** | **Two-column selector layout (`→ ✓ xhigh`)** for `/thinking`, `/model`, `/scoped-model` — active option marked with check, per @dgtlntv design. |
| [#8799](https://github.com/earendil-works/pi/pull/8799) | **feat** | **Prettier “Working…” spinner** — moves into input editor border, matches thinking-level color, handles retry state. |
| [#8898](https://github.com/earendil-works/pi/pull/8898) | **fix** | **Wrap SIGWINCH self-signal** — avoids seccomp policy violations in restricted containers (fixes #8897). |
| [#8627](https://github.com/earendil-works/pi/pull/8627) | **fix** | **CWD-sensitive tools (`read`, `write`, `edit`, `glob`, `grep`, `bash`) now use `ctx.cwd`** — extensions get correct working directory at call time. |

---

## Feature Request Trends
1. **Session & context granularity** — Users want *fresh context windows without full session reset* (#8972), *in-memory fork fidelity* (#8937, #8980), and *headless-session filtering* in `/resume` (#8951).
2. **Sub-agent composability** — Demand for per-sub-agent model/thinking selection (#8969, #8970) and explicit spawn control.
3. **Extension API maturity** — Callbacks for preflight results (#8975), authoritative `pi.setModel()` docs (#8976), and CWD-aware tool contexts (#8627).
4. **Provider-agnostic auth** — OAuth token env vars (#3591, #8982), proxy-supplied credentials, and version-pinning fixes (#8981).
5. **TUI as a first-class UI** — Whole-document scrolling (#8953), footer collapse (#8919), keybinding honored everywhere (#8797), and image rendering fidelity (#8938).

---

## Developer Pain Points
| Area | Recurring Friction | Evidence |
|------|-------------------|----------|
| **Proxy / corporate networking** | Plain-HTTP providers stall behind forward proxies; `NO_PROXY` wildcard parsing broken until #8737. | #8134 (open), #8737 (fixed) |
| **Model catalog trustworthiness** | Providers vanish silently when API key missing (#8968); reasoning-level metadata conflicts (#6374); llama.cpp empty under `--cap-drop ALL` (#8977). | #8968, #6374, #8977 |
| **Tool-call reliability** | Infinite loops (Grok #8973), stalled agents (#4338), aborted preflight not cleaning prepared tools (#8936), thought_signature missing for Gemini (#6996). | #8973, #4338, #8936, #6996 |
| **TUI rendering edge cases** | Copy-paste artifacts (#5931), image stretch (#8938), focus-in repaint loss (#8923), footer blank line (#8919), spinner/layout polish (#8799, #8801, #8900). | #5931, #8938, #8923,

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-02

---

## 1. Today's Highlights

The project shipped **cua-driver-rs v0.20.3** with signed/notarized macOS binaries and expanded Linux/Windows support, signaling maturation of the Computer Use Agent (CUA) driver stack. CI stability remains a focus: two main-branch E2E test failures triggered automated tracking issues (#10766, #10768), while PR #10765 isolates release validation onto dedicated infrastructure. The CLI/TUI layer saw active refinement—output-style picker parity (#10767), render overhead reduction (#9970), and PID-file reuse guards (#10687).

---

## 2. Releases

### `cua-driver-rs` v0.20.3 ([release](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.3))
Prebuilt binaries for the Qwen CUA Driver (vendored under `packages/cua-driver`):
- **macOS**: Codesigned + notarized universal binary + `QwenCuaDriver.app`
- **Linux**: Unsigned x86_64 & arm64 (glibc ≥ 2.31)
- **Windows**: Unsigned UIAccess worker + native SDK payload (x86_64 & arm64)

This release hardens cross-platform distribution for the computer-use automation layer.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#10767](https://github.com/QwenLM/qwen-code/issues/10767) | **fix(cli): align OpenTUI output-style picker state and transcript behavior** | Restores parity for `/output-style` in OpenTUI after CLI rebuild; addresses initial selection drift and transcript sync gaps. | 2 comments, P2 priority, `type/bug` |
| [#10768](https://github.com/QwenLM/qwen-code/issues/10768) | **Main CI failed: E2E Tests on edfdbda8** | Automated tracking of main-branch E2E failure; blocks merge confidence until root-caused. | Bot-filed, `autofix/in-progress` |
| [#10766](https://github.com/QwenLM/qwen-code/issues/10766) | **Main CI failed: E2E Tests on 3de2e67** | Second E2E failure in same window; suggests flaky or systemic test/env issue. | Bot-filed, `autofix/approved` |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | **Fleet Shepherd Dashboard** | Long-running fleet-health tracker; last tick shows 0 syncs/dispatches/releases—may indicate bot fleet idle or misconfig. | 3 comments, `status/need-information` |

> Only 4 issues updated in the last 24h; all are listed above.

---

## 4. Key PR Progress

| PR | Author | Status | Summary |
|----|--------|--------|---------|
| [#10765](https://github.com/QwenLM/qwen-code/pull/10765) | yiliang114 | Open | **CI: isolate release validation onto dedicated `ecs-qwen-hk4-host` label**; removes contention with shared runners. |
| [#9970](https://github.com/QwenLM/qwen-code/pull/9970) | DragonnZhang | Open, `autofix/takeover` | **Perf: reduce TUI render overhead** via incremental virtual-viewport output and memoized history slice. |
| [#10607](https://github.com/QwenLM/qwen-code/pull/10607) | DragonnZhang | Open | **Feat: CodeModeOnly tool execution**—opt-in mode giving model a single `exec({source})` + control-plane tools. |
| [#10687](https://github.com/QwenLM/qwen-code/pull/10687) | BenGuanRan | Open, `autofix/takeover` | **Fix: guard channel pidfiles against PID reuse** using Linux process-start tokens; avoids signalling recycled PIDs. |
| [#9466](https://github.com/QwenLM/qwen-code/pull/9466) | yiliang114 | Open, `review/self-reported` | **Refactor: anchor rewind mapping to stable `promptId`**—persists identity across user turn ↔ model history. |
| [#10410](https://github.com/QwenLM/qwen-code/pull/10410) | DragonnZhang | Open | **Feat: preserve prompt cache for deferred tools** via `tool_search`/`tool_call` bridge; avoids schema re-declaration. |
| [#9952](https://github.com/QwenLM/qwen-code/pull/9952) | yiliang114 | Open | **Feat: configurable Mem0 providers** for External Context—versioned presets for Mem0 Platform V3, local, etc. |
| [#10136](https://github.com/QwenLM/qwen-code/pull/10136) | wenshao | Open, `autofix/takeover` | **Feat: swap re-review rounds to fix-audit shape** under critical posture when incremental anchor exists. |
| [#10169](https://github.com/QwenLM/qwen-code/pull/10169) | wenshao | Open, `autofix/takeover` | **Feat: audit applied `--fix` for unpinned assumptions** via `qwen review fix-delta --snapshot` pre-edit baseline. |
| [#10347](https://github.com/QwenLM/qwen-code/pull/10347) | qwen-code-dev-bot | Open | **Fix: auto-retry transient EOF/network errors** classified as retryable transport errors (was fail-fast). |

---

## 5. Feature Request Trends

1. **Deferred / Dynamic Tooling** — Multiple PRs (#10607, #10410, #8331) converge on *opt-in CodeModeOnly*, *prompt-cache-preserving deferred tools*, and *ToolSearch-by-default for DeepSeek*. The direction: give models a minimal, stable tool surface while lazily expanding capability.

2. **Review Automation Maturity** — A cluster of PRs (#10136, #10169, #10221, #9940, #10458) evolves `/review` into a multi-round, fix-auditing, thread-aware workflow with posture-aware shapes and delta snapshots.

3. **External Context / Memory Providers** — #9952 introduces pluggable Mem0-compatible providers with versioned wire contracts, indicating demand for *configurable, long-term context backends*.

4. **CI/CD Hardening** — #10765, #10527, #10672, #10758 all target *test flakiness, timeout bounds, and dedicated validation lanes*—investment in signal-to-noise for the main branch.

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **E2E test flakiness on shared runners** | Two main-branch CI failures in 24h (#10766, #10768); PR #10765 explicitly isolates release validation. |
| **TUI/OpenTUI parity gaps** | #10767 tracks picker/transcript drift after CLI rebuild; #9970 targets render overhead. |
| **PID-file reuse in long-lived channel services** | #10687 adds process-start tokens to prevent signalling recycled PIDs. |
| **CI timeouts under contention** | #10672 (webview bundle), #10532 (UTF-16 exhaustive test), #10527 (heartbeat mint) all raise per-test timeouts. |
| **Startup crashes on unwritable config dirs** | #10455 guards output-language file write at CLI init. |
| **Autofix regression blindness** | #10188 identifies two holes where autofix ships new problems without brake/gate cost. |

---

*Digest generated from GitHub data as of 2026-09-02. Links point to live issues/PRs on `github.com/QwenLM/qwen-code`.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-02

---

## 1. Today's Highlights

The project is in a heavy **internal "shell wave" iteration cycle** (v0.9.12), with 15+ PRs landed today focused on TUI polish: diff rendering improvements, composer/layout restructuring, settings panel redesign, model fleet management, and goal persistence for the runtime API. A critical web dependency conflict (React/React-DOM version mismatch) was resolved. The sole new open issue proposes **OpenDesign (nexu-io/open-design) compatibility** via MCP and native runtime adapters, signaling expansion into design-to-code workflows.

---

## 2. Releases

**No new releases in the last 24 hours.** The team is iterating on the `0.9.12` "shell wave" branch via stacked PRs.

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5806](https://github.com/Hmbown/CodeWhale/issues/5806) | **OpenDesign compatibility — MCP today, native adapter upstream** | First-class integration with a 93k★ design-to-code platform; opens agent-driven UI generation, design systems, and multi-format export. | 🆕 Open, 0 comments — strategic direction signal |
| [#4956](https://github.com/Hmbown/CodeWhale/issues/4956) | **Provider network error in WSL2** | Connection failures on WSL2 after restart; blocks Linux-on-Windows developers. | 4 comments, stale/needs-info — env-specific reliability |
| [#4564](https://github.com/Hmbown/CodeWhale/issues/4564) | **Windows flag parsing bug (`--model`/`--toolsets` consumed as single arg)** | Breaks CLI usability on Windows; workaround requires env vars or flag reordering. | 4 comments, stale/needs-info — Windows DX gap |
| [#4568](https://github.com/Hmbown/CodeWhale/issues/4568) | **Slash command (`/xxx`) latency regression on Windows** | User-perceived performance regression; slash commands "noticeably laggy" vs prior version. | 3 comments — perf regression in TUI input path |
| [#3751](https://github.com/Hmbown/CodeWhale/issues/3751) | **Neuralwatt provider support (GLM 5.2, non-token pricing)** | Popular alternative provider with novel pricing; community demand for model diversity. | 3 comments — provider ecosystem expansion |
| [#1330](https://github.com/Hmbown/CodeWhale/issues/1330) | **ZenMux as first-class provider for DeepSeek-V4-Pro/Flash** | Request to elevate ZenMux from generic OpenAI-compatible to native provider. | 3 comments — provider UX parity |
| [#5519](https://github.com/Hmbown/CodeWhale/issues/5519) | **`isZh` branching migration not converging (web i18n)** | Technical debt: Chinese locale branches growing (12→31 files in 90d); ceiling test added via #5805. | 2 comments — i18n architecture hygiene |
| [#5735](https://github.com/Hmbown/CodeWhale/issues/5735) | **Flaky CI test: `runtime_chat_relay` owner-lock conflict under parallel load** | CI reliability blocker; same class as #5605. Affects merge velocity. | 2 comments — test infrastructure |
| [#4720](https://github.com/Hmbown/CodeWhale/issues/4720) | **Provider/model auto-switching feels under-baked** | Runtime silently switches providers (deepseek→zai) without clear user intent surfacing. | 2 comments — agent transparency/control |
| [#2535](https://github.com/Hmbown/CodeWhale/issues/2535) | **ACP + MCP support & exec streaming + role separation** | Backend integration gap: ACP transport can't use MCP tools; blocks Feishu/Web chat integrations. | 2 comments — protocol completeness |

> **Note:** 26 of 27 updated issues are **CLOSED** (many stale/needs-info), indicating a cleanup pass. Only **#5806** is new/open.

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#5817](https://github.com/Hmbown/CodeWhale/pull/5817) | **Fix** | Align `react` to 19.2.8 (matching `react-dom`); unbreaks `npm ci` in `web/` — **release blocker**. |
| [#5813](https://github.com/Hmbown/CodeWhale/pull/5813) | **Feat (TUI)** | Diff cards now **emphasize changed words within a line** (bold + reversed) — finer-grained code review UX. |
| [#5811](https://github.com/Hmbown/CodeWhale/pull/5811) | **Feat (TUI)** | **"Honest info line" moved under composer** (owner/repo · branch · model · context% · Ctrl+/ help) — cleaner transcript top. |
| [#5814](https://github.com/Hmbown/CodeWhale/pull/5814) | **Feat (TUI)** | **`/fullscreen` and `/inline` runtime screen switching** — inline mode preserves terminal scrollback across sessions. |
| [#5816](https://github.com/Hmbown/CodeWhale/pull/5816) | **Feat (Runtime API)** | **Rehydrate persisted goals + host-managed continuation loop** (re-land of #5711) — goals survive host restart, auto-resume. |
| [#5812](https://github.com/Hmbown/CodeWhale/pull/5812) | **Feat (TUI)** | **Preserve ANSI colors in tool output** (cargo, git, PTY) — no more stripped color in shell results. |
| [#5810](https://github.com/Hmbown/CodeWhale/pull/5810) | **Feat (Settings)** | **Unified settings schema**; `/settings` now matches `SHELL-DESIGN-20260901` §2.0 (tabs, groups, preview, descriptions). |
| [#5815](https://github.com/Hmbown/CodeWhale/pull/5815) | **Feat (Fleet)** | **Model fleet = user-added models, shown first in picker**; `⇧F` to add/remove — personal model registry UX. |
| [#5809](https://github.com/Hmbown/CodeWhale/pull/5809) | **Feat (TUI)** | **Work surface (tasks/agents/todos) moves under composer by default**; `/rail on` restores bottom rail. |
| [#5784](https://github.com/Hmbown/CodeWhale/pull/5784) | **Feat (Auth)** | **Native ChatGPT/Codex PKCE sign-in** for `openai-codex` route — no Codex CLI or `~/.codex/auth.json` required. |

> **Pattern:** 14 PRs opened/closed today by `Hmbown` tagged "internal 0.9.12 shell wave slice" — coordinated UX/runtime push.

---

## 5. Feature Request Trends

| Trend | Evidence (Issues) | Implication |
|-------|-------------------|-------------|
| **Provider ecosystem breadth** | #3751 (Neuralwatt), #1330 (ZenMux), #4956 (WSL2 connectivity) | Users want *more providers, more reliably* — first-class configs > generic OpenAI-compatible hacks. |
| **Protocol completeness (ACP/MCP)** | #2535 (ACP+MCP), #5759 (MCP boot noise) | Backend integrators need *full tool access over ACP*; MCP diagnostics polluting chat is a UX bug. |
| **Model/route transparency & control** | #4720 (auto-switch opacity), #5815 (fleet = my models), #5094 (Responses dialect selection) | "Magic" switching erodes trust; users want *explicit, inspectable, editable* model routing. |
| **First-run / onboarding friction** | #5522 (progressive first run), #5761 (startup screen), #5754 (brand mark) | High psychological cost for new users; progressive disclosure + polished startup are priorities. |
| **Design-to-code / agent studio integration** | #5806 (OpenDesign), #1569 (RTK filtering) | Agents moving beyond code gen into *design systems, prototypes, exports* — new integration surface. |
| **Windows / WSL2 parity** | #4564 (flag parsing), #4568 (slash lag), #4956 (WSL2 connect) | Non-Linux environments still have paper cuts blocking adoption. |

---

## 6. Developer Pain Points (Recurring)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Provider connectivity flakiness (WSL2, Windows, auth)** | High | #4956 (WSL2), #4564 (Windows flags), #5778/#5784 (Codex auth), #4720 (silent switching) |
| **TUI performance regressions (input latency, render)** | Medium | #4568 (slash command lag), #5757 (composer chrome), #5735 (flaky tests under load) |
| **Configuration front-loading / onboarding overwhelm** | Medium | #5522 (progressive first run), #4721 (settings audit), #5761 (bypass startup) |
| **Protocol gaps for headless/embedded use (ACP, MCP)** | Medium | #2535 (ACP+MCP), #5759 (MCP noise in chat), #5062 (device-flow dogfood) |
| **i18n / locale technical debt** | Low but growing | #5519 (`isZh` branching divergence), #5805 (ceiling test) |
| **CI/test reliability blocking merges** | Low | #5735 (owner-lock flake), #5605 (same class) |

---

## Quick Links

- **Repo:** [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) (DeepSeek TUI)
- **Open Issues:** [All](https://github.com/Hmbown/CodeWhale/issues?q=is%3Aissue+is%3Aopen)
- **Open PRs:** [All](https://github.com/Hmbown/CodeWhale/pulls?q=is%3Apr+is%3Aopen)
- **v0.9.12 Shell Wave Tracking:** Search "shell wave slice" in PR titles

--- 

*Digest generated from GitHub data as of 2026-09-02 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*