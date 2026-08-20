# AI CLI Tools Community Digest 2026-08-20

> Generated: 2026-08-20 01:40 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-08-20)

---

## 1. Ecosystem Overview

The AI CLI landscape is in a **high-velocity stabilization phase**. All major tools shipped releases or prereleases in the last 24 hours, but the dominant theme is **reliability over features**: packaging regressions (Claude Code, OpenCode), silent data loss (Codex, Qwen), sandbox/config mismatches (Copilot CLI), and billing/quota bugs (OpenCode Go) dominate issue trackers. Windows support has emerged as a cross-cutting strategic priority (Claude Code, Codex, Pi, DeepSeek TUI). Multi-agent orchestration, session lifecycle management, and MCP/extension parity are the three convergent feature vectors across mature projects.

---

## 2. Activity Comparison

| Tool | Issues (24h) | PRs Merged (24h) | Release Status | Critical Regressions |
|------|--------------|------------------|----------------|---------------------|
| **Claude Code** | 50 analyzed (10 hot) | 1 (docs only) | 2 patches (v2.1.237 broken — missing native binaries) | Packaging: `latest` tag installs 500-byte stub on Linux/Win/musl |
| **OpenAI Codex** | 49 analyzed (10 hot) | 10 notable | 1 alpha (rust-v0.149.0-alpha.2) | Windows browser plugin broken; GPT-5.6 27–45% usage regression; silent migrate data loss |
| **Gemini CLI** | 10 hot | 10 high-impact | 3 releases (stable, preview, nightly) | Subagent silent failures; shell "awaiting input" hangs; tool explosion (>128) |
| **GitHub Copilot CLI** | 10 noteworthy | 0 (direct commits only) | 4 prereleases (v1.0.81-2 → -5) | Sandbox ignores `enabled=false`; MCP OAuth regression; auto-update bypasses config |
| **Kimi Code CLI** | 1 (closed) | 0 | None | ACP runtime blocks `Grep`/`Glob`; `Bash` intermittent |
| **OpenCode** | 10 hot | 15 | None (v2.0 beta) | Go tier: 42% quota in 4.5h, billing mismatch; compaction cache waste & `keep.tokens` ignored |
| **Pi** | 10 hot | 15 | None | Windows strategy unresolved; reasoning_details round-trip fixes landing |
| **Qwen Code** | 10 hot | 10 significant | 1 stable (v0.21.14), 1 nightly failed | PAT-bearing CI runner isolation gap; autofix 11 review rounds w/ rising Criticals |
| **DeepSeek TUI** | 10 noteworthy | 10 | 1 major (v0.9.10) | Emergency compaction at 85K tokens (327K window); `max_tokens=384000` regression |
| **Grok Build** | 0 | 0 | None | No activity |

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Windows-first experience** | Claude Code, Codex, Pi, DeepSeek TUI, Copilot CLI | Native binaries, terminal rendering, IME support, keybinding harmony, sandbox path grants |
| **Session lifecycle & persistence** | All except Kimi/Grok | Archive/unarchive, named sessions, cross-session notify, transcript bounds, session reuse, prompt ledgers |
| **Multi-agent orchestration & observability** | Qwen Code, Gemini CLI, OpenCode, Codex | Subagent progress streaming, token accounting per subtree, failure propagation, agent boards, delegation control |
| **MCP / extension parity for subagents** | Claude Code, Codex, Gemini CLI, OpenCode, Copilot CLI | Subagents inherit full MCP toolsets; OAuth discovery compliance; dual-era handshake correctness |
| **Config = Runtime determinism** | Copilot CLI, OpenCode, Pi, Qwen Code | Sandbox flags respected; auto-update honors channel; model selection persists; per-model compaction profiles |
| **Silent failure elimination** | Codex, Gemini CLI, Qwen Code, DeepSeek TUI, OpenCode | Error surfacing for migrate/archive/compaction; approval durability; subagent status reporting |
| **Provider catalog fidelity** | Pi, Qwen Code, OpenCode, Codex | Accurate reasoning/thinking declarations; endpoint routing; capability metadata for UI |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | Polish, enterprise reliability, model control | Professional developers, agencies | Closed-source, native binaries, proprietary model integration, opinionated UX |
| **OpenAI Codex** | Cloud IDE integration, automation, Windows desktop | OpenAI ecosystem users, Plus/Pro subscribers | Rust CLI + Electron desktop, GPT-model tight coupling, browser-based agent |
| **Gemini CLI** | Agent autonomy, evaluation infrastructure, security | Google Cloud developers, OSS adopters | TypeScript, heavy eval investment (76 behavioral tests), AST-aware tooling R&D |
| **GitHub Copilot CLI** | Enterprise governance, GitHub integration, sandbox safety | Enterprise orgs, Copilot Business/Enterprise | Node/TypeScript, policy-driven sandbox, VS Code adjacency, MCP gateway |
| **Kimi Code CLI** | ACP/Zed integration, Chinese-market optimization | Zed users, Moonshot ecosystem | Go, ACP-first architecture, limited Windows/non-interactive support |
| **OpenCode** | Web UI, subscription billing, plugin extensibility | Teams wanting hosted + self-hosted parity | Go + React web UI, SEA binaries, skill/command/agent hot-reload |
| **Pi** | Provider-agnostic, extensibility, reasoning fidelity | Power users, multi-model workflows, extension authors | Rust, capability-driven catalog, session-scoped config, extension event hooks |
| **Qwen Code** | CI/CD security, review/autofix automation, multi-agent coordination | Enterprise security teams, automated code review | Rust, ephemeral container gates, filesystem-backed agent board, convergence diagnostics |
| **DeepSeek TUI** | Terminal UX, memory efficiency, i18n | Terminal-native developers, Chinese/JP/KR users | Rust, vLLM-hosted models, dictionary-spine i18n, durable approval state |
| **Grok Build** | (Insufficient data) | — | — |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / High Maturity** | **Claude Code**, **Gemini CLI**, **Qwen Code** | Daily releases, 10+ PRs/day, structured eval/security programs, SWE-bench validation, enterprise adoption signals |
| **High Momentum / Stabilizing** | **OpenAI Codex**, **GitHub Copilot CLI**, **OpenCode**, **Pi**, **DeepSeek TUI** | Rapid iteration but regression-heavy; prerelease channels active; billing/Windows/sandbox pain indicates growing pains |
| **Low Momentum / Niche** | **Kimi Code CLI**, **Grok Build** | Minimal issue/PR activity; single-platform or single-integration focus |

**Key differentiator**: Tools with **dedicated evaluation infrastructure** (Gemini CLI's 76 behavioral tests, Qwen Code's SWE-bench/Terminal-Bench CI) and **explicit convergence diagnostics** (Qwen Code's review round analytics, OpenCode's compaction metrics) show higher maturity than those relying on user-reported regressions.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Reliability > Features** | 7/9 active tools have critical packaging/sandbox/data-loss regressions in latest releases | **Adopt prerelease channels cautiously**; pin versions; demand signed SBOMs and reproducible builds |
| **Windows is no longer optional** | 5 tools filing Windows-specific blockers in 24h; Pi debating WSL vs native vs sink-thread | **Validate Windows CI** before adopting any tool for cross-platform teams |
| **Multi-agent is the new baseline** | Qwen Code (agent board), Gemini CLI (subagent autonomy), OpenCode (skills hot-reload), Codex (async messages) | **Design workflows for delegation**; single-agent CLIs will feel legacy within 6 months |
| **MCP compliance is table stakes** | OAuth discovery failures (Copilot, Codex), subagent tool stripping (Claude), capability metadata requests (Pi) | **Audit MCP server compatibility**; prefer tools with RFC 8414 compliance and dual-era handshake support |
| **Billing/quota transparency drives trust** | OpenCode Go: 4 issues in 24h on quota mismatch; Codex usage regression 27–45% | **Demand usage APIs and real-time dashboards**; opaque metering blocks enterprise adoption |
| **Session as first-class object** | `sessions ps` (Qwen), cross-session notify (Claude), prompt ledger (Qwen), auto-sync (OpenCode) | **Build tooling around session portability**; expect session import/export, branching, and replay |
| **Provider-agnostic abstraction layers winning** | Pi's catalog-driven reasoning, OpenCode's model token limits in Core, Qwen's orchestration contract | **Avoid model-locked CLIs**; invest in tools with capability-based model selection |

---

## Summary for Decision-Makers

| If your priority is... | Best fit today | Watch list |
|------------------------|----------------|------------|
| **Zero-friction enterprise rollout** | GitHub Copilot CLI (policy sandbox, GHEC integration) | OpenCode (web UI + self-host), Qwen Code (autofix gates) |
| **Maximum model control & reasoning fidelity** | Pi (catalog-driven, per-model compaction), Claude Code (ANTHROPIC_DEFAULT_MODEL, concise style) | OpenCode (Core model limits), Gemini CLI (configurable compaction model) |
| **Multi-agent automation at scale** | Qwen Code (agent board, orchestration contract), OpenCode (skills/commands hot-reload) | Gemini CLI (subagent autonomy R&D), Codex (async user messages) |
| **Terminal-native, low-resource, i18n** | DeepSeek TUI (v0.9.10 retention fixes, Chinese docs) | Pi (Windows strategy), Kimi (ACP/Zed) |
| **Cutting-edge eval & security research** | Gemini CLI (76 behavioral tests), Qwen Code (SWE-bench + container gates) | OpenCode (compaction diagnostics), Pi (reasoning round-trip) |

**Bottom line**: The ecosystem is converging on **session-centric, multi-agent, provider-agnostic** architectures with **Windows parity** and **auditable reliability** as the new baselines. Tools that haven't solved packaging determinism, silent failure modes, and config/runtime alignment will bleed enterprise users to those that have.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-20 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs & Issues)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **Skill Creator & Evaluation Infrastructure**<br>[#1298](https://github.com/anthropics/skills/pull/1298) · [#1099](https://github.com/anthropics/skills/pull/1099) · [#1050](https://github.com/anthropics/skills/pull/1050) | Core tooling for creating, evaluating, and improving skills (`run_eval.py`, `run_loop.py`, `improve_description.py`) | **Issue #556 (12 comments, 7 👍)**: `run_eval.py` reports 0% recall on all queries—optimization loop runs against noise. Windows subprocess/encoding bugs block contributors. Multiple independent reproductions. | 🟢 Open (critical fixes) |
| 2 | **Security: Namespace Trust Boundary**<br>[Issue #492](https://github.com/anthropics/skills/issues/492) | Community skills published under `anthropic/` namespace impersonate official skills | **43 comments, 2 👍** — Highest engagement in repo. Users grant elevated permissions to community skills believing they’re official. Calls for namespace separation or verification badges. | 🟢 Open |
| 3 | **Org-Wide Skill Sharing**<br>[Issue #228](https://github.com/anthropics/skills/issues/228) | Native sharing of skills within an organization (vs. manual file transfer) | **16 comments, 8 👍** — Strong demand for shared skill library or direct install links. Current workflow: download → Slack/Teams → manual upload. | 🟢 Open |
| 4 | **Self-Audit Skill**<br>[PR #1367](https://github.com/anthropics/skills/pull/1367) | Mechanical file verification → four-dimension reasoning audit (correctness, completeness, safety, style) | Universal, stack-agnostic quality gate. Step 0 verifies claimed output files exist; Step 1–4 audit reasoning in damage-severity order. | 🟢 Open |
| 5 | **Testing Patterns Skill**<br>[PR #723](https://github.com/anthropics/skills/pull/723) | Comprehensive testing guidance: Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Fills gap in repo’s skill set—no prior skill covered systematic testing methodology. | 🟢 Open |
| 6 | **ServiceNow Platform Skill**<br>[PR #568](https://github.com/anthropics/skills/pull/568) | Broad ServiceNow assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, Vulnerability Response, IntegrationHub | Long-running PR (Mar–Aug 2026). Enterprise demand for platform-wide coverage beyond narrow scripting. | 🟢 Open |
| 7 | **Document Processing Suite**<br>[#514](https://github.com/anthropics/skills/pull/514) (typography) · [#486](https://github.com/anthropics/skills/pull/486) (ODT) · [#538](https://github.com/anthropics/skills/pull/538) (PDF case-fix) · [#541](https://github.com/anthropics/skills/pull/541) (DOCX bookmark collision) | Typography QC (orphans/widows/numbering), OpenDocument create/fill/parse, PDF reference fixes, DOCX tracked-change ID collision fix | Multiple PRs addressing document-format fidelity. Typography skill prevents issues “users rarely ask for but always need.” | 🟢 Open |
| 8 | **Skill Quality & Security Analyzers**<br>[PR #83](https://github.com/anthropics/skills/pull/83) | Meta-skills: 5-dimension quality scoring (structure, examples, resources, security, maintainability) + security pattern detection | Addresses **Issue #412** (agent-governance) and **Issue #1385** (reasoning quality gates). Community wants automated skill auditing. | 🟢 Open |

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Trust & Security Hardening** | #492 (43 comments): namespace impersonation; #1487: `claude-api` injects 156k tokens; #12: DOCX whitespace corruption | Users need **supply-chain verification**, **namespace isolation**, and **context-window guardrails** before adopting community skills at scale. |
| **Organizational Distribution** | #228 (16 comments, 8 👍): org-wide sharing; #189 (6 comments, 9 👍): duplicate skills from `document-skills` + `example-skills` plugins | Demand for **managed skill registry**, **deduplication**, and **versioned org libraries**—not just file exchange. |
| **Skill Creator Reliability** | #556 (12 comments, 7 👍): 0% recall; #202 (8 comments): skill-creator reads like docs, not ops skill; #539: YAML frontmatter validation | **Core toolchain is broken on Windows and noisy everywhere**. Contributors cannot iterate; skill quality suffers. |
| **Quality Gates & Governance** | #1385 (4 comments, 1 👍): 3-gate pipeline (calibration → adversarial review → delivery); #412: agent-governance skill; #83: quality/security analyzers | Community converging on **pre-commit / pre-delivery reasoning audits** as a standard skill pattern. |
| **Enterprise Platform Skills** | #568 (ServiceNow, 5-month discussion); #181 (SAP-RPT-1-OSS predictor); #29 (Bedrock support) | **Vertical/platform-specific skills** (ServiceNow, SAP, AWS) are top-requested new domains. |
| **Document Fidelity** | #12 (4 comments, 1 👍): DOCX whitespace; #538: PDF case-sensitivity; #541: DOCX bookmark collision; #514: typography | **Production-grade document generation** (DOCX, PDF, ODT) is a recurring pain point—skills must not corrupt files. |
| **MCP & Interop** | #16 (4 comments): expose skills as MCPs; #29: Bedrock; #1362: web-artifacts-builder pnpm 10+ breakage | Skills need **standardized tool interfaces (MCP)** and **CI/CD compatibility** for real-world pipelines. |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

| PR | Skill | Why It’s Likely to Land |
|----|-------|------------------------|
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | Universal quality gate; addresses top demand (governance, reasoning audit); recent (Jun 2026), comprehensive design. |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Fills canonical gap; testing is universal; well-scoped, no platform dependency. |
| [#568](https://github.com/anthropics/skills/pull/568) | **servicenow** | Enterprise platform skill; 5-month iteration; broad coverage (ITSM/ITOM/SecOps/SPM); active maintainer. |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Solves invisible but universal doc-quality problem; low complexity, high utility. |
| [#486](https://github.com/anthropics/skills/pull/486) | **odt** | OpenDocument support requested for ISO/FOSS compliance; MCP server (`pyxel-mcp`) already exists. |
| [#1298](https://github.com/anthropics/skills/pull/1298) · [#1099](https://github.com/anthropics/skills/pull/1099) · [#1050](https://github.com/anthropics/skills/pull/1050) | **skill-creator fixes** | **Blockers for all skill development**. Windows + eval reliability must land before new skills can be reliably authored. |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | Meta-skills the repo itself needs; directly supports governance trend; marketplace-ready. |
| [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design (improved)** | Clarifies actionability of existing high-use skill; low risk, high adoption impact. |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for trustworthy, organization-ready skill infrastructure: reliable authoring tools (skill-creator), supply-chain security (namespace isolation), managed distribution (org libraries), and automated quality gates (self-audit, analyzers)—without which domain skills (ServiceNow, testing, documents) cannot be safely adopted at scale.**

---

# Claude Code Community Digest — 2026-08-20

---

## 1. Today's Highlights

Two patch releases shipped in the last 24 hours: **v2.1.237** adds a built-in "Concise" output style (results-first, no preamble) and fixes prompt caching for LLM gateway/custom base-URL sessions; **v2.1.236** introduces `ANTHROPIC_DEFAULT_MODEL` to set the default model for new sessions while preserving `/model` overrides, plus a cross-session `notify_when_idle` flag for `SendMessage`. Meanwhile, a critical packaging bug (#88103) was filed: v2.1.237 is tagged `latest` but its Linux/Windows/musl native binaries were never published, leaving installs on a 500-byte stub.

---

## 2. Releases

### v2.1.237 — [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.237)
- **Concise output style** — New built-in style (`/config → Output style`) that leads with results and skips narration while keeping thorough reasoning.
- **Prompt-caching fix** — Restores caching for sessions routed through an LLM gateway or custom `ANTHROPIC_BASE_URL`.

### v2.1.236 — [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.236)
- **`ANTHROPIC_DEFAULT_MODEL` env var** — Sets the default model for new sessions; `/model` selections still override and persist across restarts (unlike `ANTHROPIC_MODEL`).
- **Cross-session `notify_when_idle`** — `SendMessage` can now ping another Claude Code session when it becomes idle.

> ⚠️ **Known issue**: v2.1.237’s native packages for `linux-x64`, `win32-x64`, and `linux-x64-musl` were not published (#88103). Avoid `npm install @anthropic-ai/claude-code@latest` until resolved.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#6235](https://github.com/anthropics/claude-code/issues/6235) | **Support AGENTS.md** (closed) | Industry-wide push for a universal agent-instruction format; CLAUDE.md is Claude-specific. | 362 comments, 4.7k 👍 — highest engagement in repo history. |
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | **Multi-account switching in Mobile app** | Blockers for consultants/agencies managing multiple client orgs. | 160 comments, 611 👍 — persistent auth pain point. |
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | **CVP-approved org still gets cyber-safeguard blocks** | Verified orgs shouldn’t hit safeguards; breaks production workflows. | 127 comments, 20 👍 — trust/reliability concern. |
| [#77136](https://github.com/anthropics/claude-code/issues/77136) | **Opus 4.8 toxic language / Opus 5.0 incoherence** | Model behavior regression directly impacts daily usability. | 31 comments, 198 👍 — strong signal on model quality. |
| [#80988](https://github.com/anthropics/claude-code/issues/80988) | **`heron_brook` prompt silently overrides delegation policy (Opus 5 only)** | Hidden system prompt strips user-configured agent delegation; no opt-out. | 30 comments, 57 👍 — transparency/control issue. |
| [#29017](https://github.com/anthropics/claude-code/issues/29017) | **Conversation history lost in VS Code extension** | Core IDE integration data loss; affects developer trust. | 30 comments, 20 👍. |
| [#88103](https://github.com/anthropics/claude-code/issues/88103) | **v2.1.237 native binaries missing — installs broken** | **Critical release regression**; blocks all fresh installs on 3 platforms. | 3 comments, filed today — urgent. |
| [#88041](https://github.com/anthropics/claude-code/issues/88041) | **Auto-mode “bashFirst” forces sed/heredoc over Edit/Write tools** | Hardcoded binary template teaches bad patterns; degrades code quality. | 3 comments, 2 👍 — architectural concern. |
| [#86941](https://github.com/anthropics/claude-code/issues/86941) | **Auto-update ships non-functional install on npm 12** | Silent breakage on stock Node; erodes confidence in auto-update. | 2 comments — packaging reliability. |
| [#85230](https://github.com/anthropics/claude-code/issues/85230) | **Background subagents lose MCP resource tools** | Subagent MCP integration broken by default tool filter; limits extensibility. | 1 comment — niche but high-impact for MCP users. |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#77977](https://github.com/anthropics/claude-code/pull/77977) | Open | **Docs**: Documents `skipLfs` option for `github`/`git` marketplace sources in plugin-dev guide; adds shorthand & generic Git URL examples. Ref #63035. |

*Only one PR updated in the last 24h — documentation-only.*

---

## 5. Feature Request Trends (from all 50 issues)

1. **Universal agent instruction format** — AGENTS.md adoption (#6235) reflects ecosystem pressure for portable, cross-tool agent configs.
2. **Multi-account / org management** — Mobile (#36151), desktop, and CLI all need seamless switching without shared-email hacks.
3. **Model behavior control** — Users want explicit toggles for delegation, verbosity, and toxicity filters (#77136, #80988).
4. **MCP parity for subagents** — Background agents should inherit full MCP toolsets (#85230).
5. **Session lifecycle tooling** — Archive/unarchive, named sessions (#69836), cross-session notify (#67835, v2.1.236).
6. **Reliability over features** — Packaging, auto-update, and binary distribution bugs (#88103, #86941) dominate recent filings.

---

## 6. Developer Pain Points (Recurring Themes)

| Area | Recurring Complaints |
|------|---------------------|
| **Packaging & Distribution** | Missing native binaries on `latest` tag (#88103), auto-update shipping broken builds (#86941), Windows MSIX crashes (#85199, #88093). |
| **Terminal / TUI Stability** | Windows rendering corruption (#79025), tmux `/terminal-setup` failure (#6072), 100% write-ratio freezes on macOS (#25286), GPU crashes kill all sessions (#81698). |
| **Auth & Session Persistence** | 24h `remote-control` token expiry kills sessions (#88054), VS Code history loss (#29017), mobile multi-account unsupported (#36151). |
| **Model & Prompt Opacity** | Hidden system prompts override user policy (#80988), model-specific regressions (#77136), no delegation opt-out. |
| **MCP & Extensibility Gaps** | Subagents stripped of resource tools (#85230), plugin skills invisible to model (#15178), Cowork artifact permission prompts broken (#86316). |
| **Rate Limits & Concurrency** | Highest paid tier still hits limits with 5–6 parallel instances (#62426). |

---

*Generated from github.com/anthropics/claude-code data as of 2026-08-20. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-20

---

## 1. Today's Highlights

Windows users are experiencing a critical browser plugin initialization failure (#39136, 78 comments, 41👍) where the in-app browser's trusted RPC dependency falls outside configured trusted code paths. Meanwhile, GPT-5.6's tool-calling behavior shows a 27–45% increase in weighted usage due to serializing independent Code Mode calls instead of batching (#35050, 24 comments, 40👍). On the CLI side, `migrate-rollouts` silently drops JSONL records exceeding 16 MiB while reporting success (#37673), risking undetected data loss during session migrations.

---

## 2. Releases

**rust-v0.149.0-alpha.2** — Alpha release published. No detailed changelog provided in the release notes; likely includes incremental fixes and internal improvements ahead of the next stable CLI version.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#39136](https://github.com/openai/codex/issues/39136) | **Windows: Browser plugin init fails — trusted RPC outside trusted code path** | Blocks in-app browser entirely on Windows; affects all Plus/Pro users on recent builds (26.814.x). | 78 comments, 41👍 — highest engagement in 24h |
| [#35050](https://github.com/openai/codex/issues/35050) | **GPT-5.6 serializes independent Code Mode calls; 27–45% usage regression** | Direct cost impact for Pro/Business users; suggests model-side batching regression. | 24 comments, 40👍 — strong signal from power users |
| [#39318](https://github.com/openai/codex/issues/39318) | **Windows: Browser control fails — trusted RPC dependency path mismatch** | Duplicate/related to #39136; confirms widespread Windows browser breakage. | 21 comments, 2👍 |
| [#38350](https://github.com/openai/codex/issues/38350) | **Recurring scheduled tasks auto-disable after successful runs** | Silent failure mode for automations; users unaware tasks stopped running. | 21 comments, 0👍 — web/automations impact |
| [#39239](https://github.com/openai/codex/issues/39239) | **Windows: `thread/archive` fails with os error 2 after resume (verbatim `\\?\` path)** | Path-equality mismatch breaks session archiving on Windows; data persistence risk. | 17 comments |
| [#28950](https://github.com/openai/codex/issues/28950) | **Windows: Chrome plugin install fails to create Native Messaging Host** | Long-standing (since June) blocker for browser integration on Windows. | 12 comments |
| [#38754](https://github.com/openai/codex/issues/38754) | **Windows: Local stdio MCP servers repeatedly spawned, not reaped** | Resource leak within single tasks; degrades performance over time. | 10 comments, 2👍 |
| [#37673](https://github.com/openai/codex/issues/37673) | **`migrate-rollouts` silently drops >16 MiB JSONL records** | Silent data loss during CLI migration; no error surfaced to user. | 5 comments |
| [#38517](https://github.com/openai/codex/issues/38517) | **macOS: Permanent worktree creation resolves branch as `refs/heads/HEAD`** | Git reference resolution bug breaks worktree workflow on Desktop. | 5 comments, 2👍 |
| [#39552](https://github.com/openai/codex/issues/39552) | **macOS: Restoring Google sign-in tab pins renderer at 100% CPU** | Browser tab restore causes runaway CPU; affects laptop battery/thermals. | 3 comments, new (Aug 19) |

---

## 4. Key PR Progress (Notable Merges & Fixes)

| PR | Summary | Category |
|----|---------|----------|
| [#39524](https://github.com/openai/codex/pull/39524) | **Stop treating Git commands as inherently safe** — Removes Git from known-safe classification; repo config can trigger helpers even on read-only ops. | Security/Hardening |
| [#39523](https://github.com/openai/codex/pull/39523) | **Persist thread section moves before first turn** — Ensures non-ephemeral threads appear in section-filtered lists immediately. | UX/Thread Management |
| [#39520](https://github.com/openai/codex/pull/39520) | **Isolate automatic plugin Git operations** — Prevents background marketplace/refresh from inheriting project-scoped Git config. | Reliability/Plugins |
| [#31155](https://github.com/openai/codex/pull/31155) | **Fix: release thread writer after failed shutdown** — Prevents live-writer lease leak when rollout persistence fails. | Stability/Session |
| [#39515](https://github.com/openai/codex/pull/39515) | **Use `mem::take` to drain unified exec output buffers** — Cleaner buffer reset, avoids custom drain logic. | Refactor/Performance |
| [#39514](https://github.com/openai/codex/pull/39514) | **Use stored item types when materializing turn summaries** — Falls back to JSON type for backward compatibility. | Data Integrity |
| [#39510](https://github.com/openai/codex/pull/39510) | **Track built-in control tool calls in analytics** — Adds telemetry for `request_user_input`, `update_plan`, `view_image`, goal tools. | Observability |
| [#39474](https://github.com/openai/codex/pull/39474) | **Consolidate Guardian extensions into `codex-guardian-v2`** — Single entry point for lifecycle contributor + risk scorer. | Architecture/Guardian |
| [#39452](https://github.com/openai/codex/pull/39452) | **Remove feature gate for async user messages** — Exposes `send_user_message_async` when model supports it. | Agent Capabilities |
| [#39410](https://github.com/openai/codex/pull/39410) | **Refresh expired AWS credentials for Bedrock** — Adds `aws.auth_refresh` provider config for credential recovery mid-request. | Cloud/Integrations |

---

## 5. Feature Request Trends

1. **Configurable context compaction model** ([#22486](https://github.com/openai/codex/issues/22486), 5 comments, 6👍) — Users want to decouple compaction model from active session model for cost/quality tradeoffs.
2. **Per-MCP trusted OAuth issuer override** ([#38944](https://github.com/openai/codex/issues/38944), 4 comments, 1👍) — Needed when MCP server's protected-resource metadata points to auth server with different issuer.
3. **Prevent PR workflow pushes targeting default branch** ([#39560](https://github.com/openai/codex/issues/39560), new) — Safety guard against accidental `origin/master` updates during PR creation.
4. **Async user message support** (now ungated via #39452) — Foundation for non-blocking agent↔user interaction patterns.

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Evidence | Affected Surface |
|------------|----------|------------------|
| **Windows browser/plugin stack fundamentally broken** | #39136, #39318, #28950, #39562 — trusted RPC path, Native Messaging Host, browser tools not exposed | Desktop App (Windows) |
| **Session/thread persistence failures** | #39239 (archive), #37673 (migrate), #26861 (create_thread), #38478 (subagent status) | CLI & Desktop |
| **Resource leaks & performance degradation** | #38754 (MCP spawn), #39450 (mouse lag while thinking), #39552 (100% CPU), #39563 (memory leak on resize) | Desktop App (Win/macOS) |
| **Silent failures / missing error surfacing** | #37673 (migrate success with data loss), #38350 (tasks auto-disable), #38478 (subagent UI stale) | Automations, CLI, Desktop |
| **Mobile/remote pairing instability** | #23112 (stuck pairing), #35855 (Android pairing fail), #37385 (remote chats missing from history) | Remote/Mobile |

---

*Generated from GitHub data (openai/codex) covering 2026-08-19 to 2026-08-20. 49 issues, 24 PRs, 1 release analyzed.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-20

## 1. Today's Highlights
The project shipped three releases in 24 hours: stable **v0.56.0**, preview **v0.57.0-preview.0** (fixing Cloud Workstations OAuth redirects and IDE connection directory mismatches), and a nightly build. Concurrently, the team merged critical core fixes—preserving empty text turns with tools/media, hardening subprocess security, and adding atomic Whisper model downloads—while advancing observability with GCS trajectory logging for PR generation workflows.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.56.0** | Stable | General maintenance release. [Full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.55.1...v0.56.0) |
| **v0.57.0-preview.0** | Preview | • `fix(core)`: Dynamically resolve Cloud Workstations proxy redirect URI for OAuth flows ([#28688](https://github.com/google-gemini/gemini-cli/pull/28688))<br>• `fix(core)`: Resolve swallowed directory mismatch in IDE connections ([#28688](https://github.com/google-gemini/gemini-cli/pull/28688)) |
| **v0.56.0-nightly.20260820.ge90c63fa1** | Nightly | • `fix(core)`: Preserve empty text turns with tools or media ([#28892](https://github.com/google-gemini/gemini-cli/pull/28892))<br>• Auto-generated changelog for v0.57.0-preview.0 ([#28918](https://github.com/google-gemini/gemini-cli/pull/28918)) |

## 3. Hot Issues (Top 10 by Community Signal)
| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reported as GOAL success | Silent failure mode: subagents hit turn limits but report success, masking incomplete work. P1, needs retest. | 12 comments, 2 👍 — Active discussion on detection/retesting. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely | Core usability blocker; users must disable sub-agents to proceed. P1. | 8 comments, 8 👍 — High impact, workaround known but unsatisfactory. |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component-level evaluations | Scaling eval infra (76 behavioral tests across 6 models) to catch regressions. Epic follow-up. | 7 comments — Strategic investment in reliability. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess AST-aware file reads/search/mapping | Investigating whether AST tooling reduces turns/tokens for code navigation. | 7 comments, 1 👍 — R&D direction for agent efficiency. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini under-utilizes skills/sub-agents | Agents ignore custom skills unless explicitly invoked, reducing automation value. P2. | 6 comments — UX gap in agent autonomy. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory retries low-signal sessions indefinitely | Background extractor loops on unread sessions, wasting cycles. P2. | 5 comments — Resource/performance concern. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Deterministic redaction & reduced Auto Memory logging | Secrets enter model context before redaction; logging exposes skill data. Security P2. | 4 comments — Privacy/compliance risk. |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell execution stuck at "Waiting input" post-completion | Frequent hang on simple commands; UI shows active shell incorrectly. P1. | 4 comments, 3 👍 — High-frequency UX pain point. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Browser agent: automatic session takeover/lock recovery | Fail-fast on locked profiles breaks persistent sessions; needs resilience. P3. | 4 comments — Developer workflow friction. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland | Platform-specific blocker for Linux/Wayland users. P1, agent/browser. | 4 comments, 1 👍 — Platform coverage gap. |

## 4. Key PR Progress (Top 10 by Impact)
| PR | Type | Summary |
|----|------|---------|
| [#28892](https://github.com/google-gemini/gemini-cli/pull/28892) | Fix (core) | Preserve empty text turns when they carry tool calls/media — prevents history truncation bugs. Merged to nightly. |
| [#28922](https://github.com/google-gemini/gemini-cli/pull/28922) | Feat (pr-generation) | GCS trajectory logging & artifact preservation for eval/repair loops — enables post-mortem debugging. |
| [#28898](https://github.com/google-gemini/gemini-cli/pull/28898) | Fix (security) | Harden subprocess execution: sanitize env vars, prevent credential leakage into tool environments. |
| [#28915](https://github.com/google-gemini/gemini-cli/pull/28915) | Fix (core) | Consistent symlink evaluation in `.geminiignore`/`.gitignore` — eliminates tool behavior discrepancies. |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | Fix (extensions) | Require user consent for env changes; sanitize runtime-altering vars in MCP server spawns. |
| [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) | Fix (core/cli) | Propagate `InvalidStreamError` details to UI → actionable guidance (e.g., suggest `/compress`). |
| [#28655](https://github.com/google-gemini/gemini-cli/pull/28655) | Fix (core) | Atomic Whisper model downloads: write to temp, verify length, cleanup on failure, atomic rename. |
| [#28916](https://github.com/google-gemini/gemini-cli/pull/28916) | Fix (core) | Buffer partial stdout chunks in Whisper provider — fixes split transcription lines in voice mode. |
| [#28914](https://github.com/google-gemini/gemini-cli/pull/28914) | Fix (core) | Move retry nudge into `contents` (not system prompt) to preserve prefix caching. |
| [#28910](https://github.com/google-gemini/gemini-cli/pull/28910) | Feat (core/cli) | Add Gemini 3.7 Flash, 3.6 Flash, 3.5 Flash-Lite model configs & selection. |

## 5. Feature Request Trends
1. **Agent Autonomy & Reliability** — Subagents ignoring skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), hanging ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), misreporting success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), and needing better self-awareness ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).
2. **Memory System Hardening** — Auto Memory retry loops ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), secret redaction timing ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), invalid patch handling ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
3. **Browser Agent Maturity** — Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), settings.json respect ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
4. **AST-Aware Tooling** — Exploration of `tilth`/`glyph` for precise code navigation ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
5. **Evaluation Infrastructure** — Scaling component-level behavioral evals across models ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)).

## 6. Developer Pain Points (Recurring Frustrations)
- **Silent Agent Failures**: Subagents report `GOAL` success despite hitting `MAX_TURNS` ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)) or hanging without feedback ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)).
- **Shell Integration Flakiness**: Commands complete but UI spins at "Awaiting user input" ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)); interactive prompts (e.g., `vite create`) stall agents ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).
- **Tool Explosion**: 400 errors when >128 tools registered ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)) — no smart scoping.
- **Workspace Pollution**: Model scatters temporary scripts across directories ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
- **Destructive Defaults**: Unprompted `git reset --hard`, force-pushes, DB mutations ([#22672](https://github.com/google-gemini/gemini-cli/issues/22672)).
- **Terminal Rendering**: Resize causes flicker/full-history redraw ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)).
- **Symlink Blindness**: Agent definitions via symlinks ignored ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).
- **Output Hook Crashes**: `get-shit-done` summary hook crashes CLI near completion ([#22186](https://github.com/google-gemini/gemini-cli/issues/22186)).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-20

---

## 1. Today's Highlights
The CLI shipped four rapid prereleases (v1.0.81-2 → v1.0.81-5) in 24 hours, primarily fixing a transcript duplication bug where pending prompts lingered after agent responses. Meanwhile, the issue tracker shows a cluster of regressions around **sandbox enforcement**, **MCP OAuth compatibility**, and **terminal input handling** that are blocking daily workflows for Linux and Enterprise users. Several new “triage” issues filed today indicate the prerelease channel is surfacing fresh regressions in sub-agent rendering, auto-update logic, and memory tooling.

---

## 2. Releases
| Version | Key Changes |
|---------|-------------|
| **v1.0.81-5** | Fixed: a prompt sent while the agent is working no longer leaves a duplicate `(pending)` entry at the bottom of the transcript after the response arrives. |
| **v1.0.81-4** | Fixes and changes (details not enumerated in release notes). |
| **v1.0.81-3** | Fixes and changes. |
| **v1.0.81-2** | Fixes and changes. |

> All four builds are prereleases; stable channel remains at 1.0.81-1.

---

## 3. Hot Issues (10 noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2082](https://github.com/github/copilot-cli/issues/2082) | **ctrl+shift+c no longer copies to clipboard on Linux** | Breaks muscle-memory copy in every Ubuntu terminal; regression since v1.0.4. | 24 comments, 12 👍 — long-standing, high-visibility input regression. |
| [#4390](https://github.com/github/copilot-cli/issues/4390) | **Enabled organization models missing from catalogue (Claude Sonnet 5/Opus 5, Kimi K3)** | Enterprise users cannot select models their org explicitly approved. | 15 comments, 7 👍 — **CLOSED** today; fix likely in 1.0.81 prereleases. |
| [#4480](https://github.com/github/copilot-cli/issues/4480) | **Atlassian MCP OAuth fails with “Incompatible authorization server (RFC 8414 §3.3)” on 1.0.79** | Blocks Atlassian MCP integration; regression from 1.0.71. | 6 comments, 6 👍 — OAuth discovery regression affecting a major MCP provider. |
| [#4522](https://github.com/github/copilot-cli/issues/4522) | **1.0.81 forces sandbox while managed policy is undetermined, overriding `sandbox.enabled=false`** | Enterprise devices ignore explicit user config; sandbox activates during policy fetch latency. | 2 comments, 7 👍 — policy-resolution race condition with security implications. |
| [#4521](https://github.com/github/copilot-cli/issues/4521) | **Sandbox cannot be disabled** | UI shows disabled but runtime still enforces; blocks all file operations. | 2 comments, 4 👍 — config/runtime state mismatch. |
| [#4524](https://github.com/github/copilot-cli/issues/4524) | **Sandbox won't let copilot use git anymore (Windows)** | Git operations denied even with working-directory grants; breaks commit/push workflows. | 3 comments — Windows-specific sandbox path resolution bug. |
| [#4525](https://github.com/github/copilot-cli/issues/4525) | **1.0.81-1 sends legacy `initialize` after successful modern `server/discover`, causing -32022** | Dual-era MCP handshake breaks Python SDK 2.0 servers; connection storms. | 1 comment — protocol regression in MCP client stack. |
| [#4533](https://github.com/github/copilot-cli/issues/4533) | **Terminal UI stops consuming events when a turn spawns parallel subagents** | Input + scroll dead; runtime continues but user cannot interact or see output. | 0 comments (filed today) — critical UX regression in new sub-agent parallelism. |
| [#4534](https://github.com/github/copilot-cli/issues/4534) | **`autoUpdate: false` ignored — CLI re-execs cached prerelease over stable npm install** | Users pinned to stable still get prerelease bits; documented setting ineffective. | 0 comments (filed today) — update-channel logic bypasses config. |
| [#4535](https://github.com/github/copilot-cli/issues/4535) | **`store_memory` fails in v1.0.81 prereleases: `Instance id is required`** | Memory tooling broken; native writer invoked without required instance ID. | 0 comments (filed today) — blocks agent memory persistence. |

---

## 4. Key PR Progress
**No pull requests were updated in the last 24 hours.**  
All current fixes are landing via direct commits to the prerelease branch; PR velocity appears paused while the team stabilizes the 1.0.81 line.

---

## 5. Feature Request Trends
1. **MCP maturity** — Multiple issues (#4480, #4490, #4525, #4526) demand stricter RFC 8414 compliance, dual-era handshake correctness, and provider-agnostic OAuth prompts.
2. **Sandbox configurability** — Enterprises need deterministic control (#4521, #4522, #4524); “policy undetermined” race and Windows path grants are top gaps.
3. **Terminal input fidelity** — Linux copy shortcuts (#2082), backspace word-delete (#4447), and focus-lost key drops (#4213) show the input layer needs platform-specific hardening.
4. **Context durability** — Request to preserve reasoning effort (#4530) and avoid recursive summary loss during compaction (#4441) signals appetite for richer session state.
5. **Plugin marketplace UX** — Search/filter for `copilot plugin marketplace browse` (#4523) as ecosystem grows.

---

## 6. Developer Pain Points (recurring frustrations)
- **“It worked in 1.0.71/1.0.78”** — OAuth, sandbox, and MCP regressions keep re-appearing in minor bumps; developers want a stable LTS branch.
- **Config ≠ Runtime** — Sandbox, auto-update, and model-selection settings are frequently ignored or overridden by server-side policy races.
- **Silent failures** — Hooks not discovered (#4520), memory tools crashing without UI notice (#4535), transcript duplicates (#4532) — observability gaps make debugging hard.
- **Enterprise/Windows friction** — Git blocked in sandbox (#4524), GHEC data-residency 401 in prompt mode (#4527), JVM path grants ignored (#4516) — non-macOS/non-cloud paths feel second-class.
- **Sub-agent parallelism UX** — New parallel sub-agent feature (#4533) freezes the terminal, suggesting the feature shipped without proper event-loop isolation.

---

*Digest compiled from github.com/github/copilot-cli data as of 2026-08-20 00:00 UTC. Links point to live issues; statuses may have changed since snapshot.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-20

## 1. Today's Highlights
No new releases or pull requests were merged in the last 24 hours. A single issue (#2609) was reported and closed regarding ACP runtime limitations blocking `Grep`/`Glob` tools in Zed; the issue appears to be a known constraint rather than a regression.

## 2. Releases
*No new releases published in the last 24h.*

## 3. Hot Issues
| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#2609](https://github.com/MoonshotAI/kimi-cli/issues/2609) | **[CLOSED] ACP runtime blocks `Grep`/`Glob`; `Bash` intermittently reports “ACP terminal capability is unavailable”** | Affects developers using Zed via `kimi acp`. Core search tools (`Grep`, `Glob`) are unusable in ACP sessions, and `Bash` reliability is degraded. | 0 comments, 0 👍 — closed same day; likely a known ACP runtime limitation or configuration issue. |

*Only one issue updated in the last 24h.*

## 4. Key PR Progress
*No pull requests updated in the last 24h.*

## 5. Feature Request Trends
Insufficient data from the last 24h to identify trends. Historically, the repository sees requests around:
- Expanded ACP / MCP client compatibility
- Improved tool parity (especially `Grep`, `Glob`, `Task`) in non-interactive runtimes
- Windows support and shell integration polish

## 6. Developer Pain Points
- **ACP tooling gaps**: `Grep`/`Glob` hard-fail in ACP sessions; `Bash` intermittently loses terminal capability.
- **Runtime constraints**: Error message *“ACP runtime only supports interactive Bash tool processes”* suggests architectural limits on non-interactive tool execution.
- **Observability**: No logs or diagnostics exposed to explain why `Bash` capability becomes unavailable.

---

*Data source: github.com/MoonshotAI/kimi-cli — last 24h (2026-08-19 → 2026-08-20).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-20

## 1. Today's Highlights

OpenCode's v2.0 beta continues rapid iteration with significant fixes landing for session compaction logic, plugin tool decoding, and TUI plugin loading. Meanwhile, the new **OpenCode Go** subscription tier is experiencing billing and quota reporting discrepancies affecting multiple users, with 42% monthly credit consumption reported in ~4 hours. The web UI also needs auto-sync for projects across devices—a top-voted feature request.

## 2. Releases

No new releases in the last 24 hours.

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#27906](https://github.com/anomalyco/opencode/issues/27906) v1.15.1+ Breaks Bun Installs** | Postinstall scripts required since v1.15.1 break global installs on Bun (and other non-npm managers). Blocks adoption for Bun users. | 24 comments, 14 👍 — high visibility, ongoing since May |
| **[#43409](https://github.com/anomalyco/opencode/issues/43409) Abnormal Credit Consumption on OpenCode Go** | 42% of monthly quota consumed in 4.5 hours — suggests metering bug or runaway token usage in Go tier. | 3 comments, new critical report |
| **[#43416](https://github.com/anomalyco/opencode/issues/43416) Usage-based Billing Doesn't Match Subscription Usage** | Dashboard shows ~$9 used but Go subscription bills $20 — billing logic mismatch. | 6 comments, financial impact |
| **[#43424](https://github.com/anomalyco/opencode/issues/43424) Weekly Quota Incorrectly Exhausted — Go Subscription** | New subscriber (Aug 18) shows ~$11 actual spend but quota marked exhausted. | 3 comments, same tier affected |
| **[#43364](https://github.com/anomalyco/opencode/issues/43364) Luna Session Isn't Working in OpenCode Go** | `invalid_encrypted_content` error on GPT-5.6 Luna model — provider integration regression. | 8 comments, 3 👍 |
| **[#13626](https://github.com/anomalyco/opencode/issues/13626) Auto-sync Projects in Web UI from Server** | Top feature request: projects should sync automatically when opening Web UI on new device/browser. | 12 comments, 15 👍 — long-standing (Feb 2026) |
| **[#40955](https://github.com/anomalyco/opencode/issues/40955) Queued Messages Silently Dropped on Interrupt** | TUI/headless: aborting a long turn drops queued messages without notification — data loss risk. | 2 comments, core reliability issue |
| **[#43249](https://github.com/anomalyco/opencode/issues/43249) Compaction Reuses prompt_cache_key with Divergent Prefix** | Compaction writes full-price cache entries that can never be read — wastes tokens/cost on every compaction. | 1 comment, 3 👍, technical depth |
| **[#43250](https://github.com/anomalyco/opencode/issues/43250) keep.tokens Not Honoured — Unbounded Walk-back** | Compaction retains 5–15× configured `keep.tokens` (15K default) in agent-driven sessions — context bloat. | 0 comments, severe for long sessions |
| **[#43543](https://github.com/anomalyco/opencode/issues/43543) Spurious Reasoning Variants for MiMo/Hy3 in opencode-go** | Model selector shows incorrect reasoning effort options inconsistent with catalog — UX confusion. | 1 comment, new |

## 4. Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| **[#43460](https://github.com/anomalyco/opencode/pull/43460)** | Bug fix | Fix plugin tool input decoding when plugin bundles different `effect` version than server — resolves `Invalid tool input` errors. |
| **[#43282](https://github.com/anomalyco/opencode/pull/43282)** | Bug fix | Expose valid subagent IDs in `subagent` tool schema — enables autocomplete/validation for agent selection. |
| **[#43545](https://github.com/anomalyco/opencode/pull/43545)** | Refactor | Move resolved model token limits into Core; compaction now consumes Core model directly — simplifies plumbing. |
| **[#43541](https://github.com/anomalyco/opencode/pull/43541)** | Bug fix | Default unknown models to 200k context / 32k output — prevents crashes on uncatalogued models. |
| **[#43542](https://github.com/anomalyco/opencode/pull/43542)** | Refactor | Replace hand-rolled ID generator with schema ID minting — removes duplicate encoding logic in web app. |
| **[#42681](https://github.com/anomalyco/opencode/pull/42681)** | Bug fix | Linux Wayland fallback: show window on `did-finish-load` — fixes invisible window on some compositors. |
| **[#42978](https://github.com/anomalyco/opencode/pull/42978)** | Bug fix | Show current worktree branch in Desktop new-session context — fixes branch detection for manual worktrees. |
| **[#42810](https://github.com/anomalyco/opencode/pull/42810)** | Refactor | Simplify interrupt continuation: replace state machine with 3-line post-cleanup check in `SessionExecution`. |
| **[#43345](https://github.com/anomalyco/opencode/pull/43345)** | Refactor | Modularize session rendering into `@opencode-ai/session-ui` — extracts timeline, messages, actions from App. |
| **[#43520](https://github.com/anomalyco/opencode/pull/43520)** | Feature | Optimistic prompt admission with client-minted IDs — prompts render instantly on enter, reconcile via inbox echo. |
| **[#43538](https://github.com/anomalyco/opencode/pull/43538)** | Feature | Hot-reload skills, commands, agents, config on file change (opt-in via `OPENCODE_EXPERIMENTAL_HOT_RELOAD`). |
| **[#43537](https://github.com/anomalyco/opencode/pull/43537)** | Feature | Show skills in slash autocomplete; group `/skills` dialog by source — completes #7846. |
| **[#43498](https://github.com/anomalyco/opencode/pull/43498)** | Bug fix | Preserve Vertex Anthropic tool continuations — fixes 404 when Claude tool continuation ends with system message. |
| **[#42485](https://github.com/anomalyco/opencode/pull/42485)** | Bug fix | Load local plugins via SEA-safe import — fixes TUI plugin loader for Node SEA binaries. |
| **[#43511](https://github.com/anomalyco/opencode/pull/43511)** | Bug fix | Fix cross-spawn close-event hang on Windows when grandchild inherits stdio — prevents bash tool timeout. |
| **[#28326](https://github.com/anomalyco/opencode/pull/28326)** | Feature | Add `--base-path` / `server.basePath` for reverse proxy deployments — enables OpenCode Web behind proxies. |

## 5. Feature Request Trends

1. **Project/Session Sync Across Devices** — Web UI auto-sync (#13626, 15 👍) and read-only persisted session history APIs for plugins (#43517).
2. **Model/Provider Management** — Add Qwen 3.8 27B to free tier (#43546); fix reasoning variant display (#43543); switch model for all agents at once (#3028).
3. **Hot Reload & Extensibility** — Hot-reload skills/commands/agents/config (#43538); skills in slash autocomplete (#43537); capability abstraction for skills (#43536).
4. **Billing/Usage Transparency** — Accurate quota tracking for Go tier; detailed usage breakdowns matching subscription limits.
5. **TUI/UX Polish** — Half-page scroll keybindings (#43267); inline permission prompts in subagent view (#43413); paste in "Type your own answer" field (#43516).

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **OpenCode Go billing/quota broken** | 4+ issues in 24h (#43409, #43416, #43424, #43540) reporting 42% quota in 4h, $ mismatch, quota exhaustion, payment failures. |
| **v2.0 session compaction is costly & incorrect** | #43249 (cache key reuse = wasted writes), #43250 (keep.tokens ignored = 234K vs 15K), #43257 (service crash-loops on MCP failure). |
| **Provider integration regressions** | Luna encrypted content error (#43364), Vertex tool continuation 404 (#43498), OpenAI-compatible reasoning field parsing (#43040), tool schema unsupported (#43406). |
| **TUI/Desktop stability on Linux/WSL** | Hard freeze on WSL (#43518), Wayland invisible window (#42681), crash-loop on PTY 404 (#40755), paste broken in question field (#43516). |
| **Plugin/extension distribution broken** | VSIX missing `dist/extension.js` (#41017), SEA binary can't load local plugins (#42485), GitHub Action fails on bot actors (#43532). |
| **Interrupt handling loses data** | Queued messages silently dropped on abort (#40955) — affects both TUI and headless API. |

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-20

## Today's Highlights
The Pi community is actively resolving Windows compatibility gaps and provider integration bugs. A major discussion on Windows support strategies (#7547, 31 comments) highlights the platform's growing importance, while multiple PRs landed fixes for reasoning-detail round-trips, timeout handling, and session-scoped model settings. The codebase saw 15 PRs merged in the last 24h, mostly targeted bug fixes and provider improvements.

---

## Hot Issues (Top 10 by Impact & Engagement)

| Issue | Status | Why It Matters | Community Signal |
|-------|--------|----------------|------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) Windows support strategy | OPEN | 31 comments — core team debating how to prioritize Windows (WSL vs native vs sink-thread) for the "gazillion developers on Windows" | High engagement, strategic direction |
| [#5263](https://github.com/earendil-works/pi/issues/5263) Ephemeral in-session model changes | CLOSED | 13 👍, 11 comments — changes model/thinking-level to session-scoped by default; adds explicit "Default model" in `/settings` | Strong consensus, UX improvement |
| [#8183](https://github.com/earendil-works/pi/issues/8183) Windows Terminal `Ctrl+Shift+F` conflict | OPEN | Documents keybinding collision with fullscreen transcript search; provides rebind workarounds | Practical Windows UX fix |
| [#8206](https://github.com/earendil-works/pi/issues/8206) opencode-go catalog misroutes qwen/minimax | OPEN | Models cataloged as `openai-completions` but only served on Anthropic `/v1/messages` endpoint | Provider integration correctness |
| [#3966](https://github.com/earendil-works/pi/issues/3966) Built-in `--profile` for isolated state | CLOSED | Long-requested feature (2026-04) to isolate auth/sessions/settings per project without manual `PI_CODING_AGENT_DIR` | Developer workflow isolation |
| [#7994](https://github.com/earendil-works/pi/issues/7994) `openai-completions` reasoning_details round-trip | CLOSED | Signed-text `reasoning_details` were dropped on replay; fixed encrypted-only parsing | Critical for reasoning-model fidelity |
| [#8323](https://github.com/earendil-works/pi/issues/8323) OpenAI client missing timeout | CLOSED | Default 600s SDK timeout cut off local models thinking >10min; now configurable | Local LLM reliability |
| [#8328](https://github.com/earendil-works/pi/issues/8328) Threshold compaction never fires for zero-usage providers | CLOSED | Providers omitting final `usage` block (despite `stream_options.include_usage`) blocked auto-compaction | Context-window management |
| [#8336](https://github.com/earendil-works/pi/issues/8336) `glm-5.3` zai catalog makes thinking levels no-op | CLOSED | Catalog entry had `supportsReasoningEffort: false` but UI still showed selector — cosmetic mismatch | Provider catalog accuracy |
| [#8133](https://github.com/earendil-works/pi/issues/8133) Per-model compaction settings | OPEN | Request for `compaction.profiles` map keyed by model ID; global values as fallback | Advanced context control |

---

## Key PR Progress (Top 10 Merged/Open)

| PR | Status | Description |
|----|--------|-------------|
| [#8356](https://github.com/earendil-works/pi/pull/8356) | CLOSED | **Session-scoped model/thinking changes** — addresses #5263; mutations only persist via explicit `/settings` |
| [#8246](https://github.com/earendil-works/pi/pull/8246) | CLOSED | **OpenAI completions reasoning_details round-trip** — preserves signed `reasoning.text/summary` from `delta.reasoning_details` |
| [#8321](https://github.com/earendil-works/pi/pull/8321) | CLOSED | **`streamSimple` passes `timeoutMs`** — fixes missing timeout propagation in openai-responses/completions |
| [#8322](https://github.com/earendil-works/pi/pull/8322) | CLOSED | **`isRecoverableLength` exact-limit fix** — changes `<` to `<=` so hitting `max_output_tokens` exactly triggers recovery |
| [#8314](https://github.com/earendil-works/pi/pull/8314) | CLOSED | **Bedrock redacted reasoning round-trip** — handles `redactedContent` in `reasoningContent` blocks |
| [#8361](https://github.com/earendil-works/pi/pull/8361) | CLOSED | **Pi User-Agent added to 7 API adapters** — openai-responses, anthropic-messages, google-generative-ai, etc. |
| [#8377](https://github.com/earendil-works/pi/pull/8377) | CLOSED | **Respect `npm min-release-age`** — update banner now honors npm's release-age cutoff via `npm view --json` |
| [#8365](https://github.com/earendil-works/pi/pull/8365) / [#8366](https://github.com/earendil-works/pi/pull/8366) | CLOSED | **Emit `input` event for built-in slash commands** — extensions gain visibility into `/share`, `/export`, `/settings` |
| [#8369](https://github.com/earendil-works/pi/pull/8369) | CLOSED | **`fullscreenWheelScrollLines` setting** — configurable scroll rate (1–10 lines) for fullscreen TUI mode |
| [#8383](https://github.com/earendil-works/pi/pull/8383) | OPEN | **Derive Gemini disabled-thinking from catalog** — replaces regex-based `isGemini3FlashModel` with catalog-declared level |

---

## Feature Request Trends

1. **Windows-first experience** — Multiple issues (#7547, #8183, #8372, #8375) signal demand for native Windows support, keybinding harmony, and console-window suppression.
2. **Per-model/configuration granularity** — #8133 (per-model compaction), #8376 (model selection persistence scope), #5263 (session vs global settings) show desire for hierarchical configuration.
3. **Extension observability & control** — #8364/#8365/#8366 (slash command events), #8379 (register tools inactive), #8380 (shared request IDs), #8349 (detect queued continuations) — extensions need deeper lifecycle hooks.
4. **Provider catalog fidelity** — #8206, #8336, #8381, #8359 — accurate capability declarations (reasoning, endpoints, thinking levels) are critical as provider count grows.
5. **Session isolation & profiles** — #3966 (merged), #8346 (repair unterminated tails), #7772 (memory reduction) — managing state across projects and long sessions.

---

## Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Windows friction** | Console window spam (#8375), keybinding conflicts (#8183, #8372), unclear run strategies (#7547) | 5+ issues |
| **Reasoning/reasoning_details loss** | Round-trip failures for OpenAI (#7994), Bedrock (#8314), Gemini (#8383), DeepSeek via proxy (#8359) | 5 issues |
| **Timeouts & long-running models** | 600s default cutoff (#8323), `streamSimple` dropping `timeoutMs` (#8321), local models >10min | 3 issues |
| **Compaction unreliability** | Zero-usage providers never compact (#8328), unbounded input prevents compaction past context window (#8371) | 2 issues |
| **Extension blind spots** | No events for built-in commands (#8364), can't register inactive tools (#8379), no shared request ID (#8380) | 3 issues |
| **Catalog drift** | Misrouted models (#8206), thinking-level no-ops (#8336), unsupported params sent (#8381) | 3 issues |

---

*Generated from GitHub data (last 24h) for `earendil-works/pi`*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-20

## 1. Today's Highlights

Qwen Code **v0.21.14** shipped with a new **`qwen sessions ps`** command and a live-session registry, enabling developers to list and manage running interactive sessions with JSON output — a long-requested operational tool for multi-session workflows. The release also cleared full **SWE-bench Verified (500 tasks)** and **Terminal-Bench 2.0 (89 tasks)** validation, signaling stability for agent-driven development. Meanwhile, a critical security issue (#9089) around PAT-bearing CI jobs sharing runners with untrusted code remains open, prompting a design doc for runner-level isolation (#9525).

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.21.14** | Stable | • `qwen sessions ps` + live-session registry for session management (JSON output)  <br>• SWE-bench Verified 500/500 passed  <br>• Terminal-Bench 2.0 89/89 passed  <br>• [Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.14) |
| **v0.21.11-nightly.20260819.d87b272aec** | Nightly | • Live-session registry & `sessions ps` (backported)  <br>• Daemon: attach skill-toggle  <br>• [Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260819.d87b272aec) |
| **v0.21.11-nightly.20260820.39fc769d3a** | Nightly | **❌ Failed** — `publish` job errored ([#9523](https://github.com/QwenLM/qwen-code/issues/9523)) |

---

## 3. Hot Issues (Top 10 by Impact)

| Issue | Priority | Category | Why It Matters | Community Signal |
|-------|----------|----------|----------------|------------------|
| [#9089](https://github.com/QwenLM/qwen-code/issues/9089) | **P1** | Security / CI-CD | PAT-bearing autofix jobs share runners with untrusted branch code — **fundamental isolation gap** that cannot be fixed inside Actions steps. Blocks secure autofix rollout. | 6 comments, active design discussion in #9525 |
| [#9509](https://github.com/QwenLM/qwen-code/issues/9509) | **P2** | Tools / Subagents | Agent launch failures return `status: 'failed'` but **omit `error` field**, causing scheduler to treat them as successes. Silent failure mode for subagent orchestration. | 3 comments, core reliability bug |
| [#9522](https://github.com/QwenLM/qwen-code/issues/9522) | **P2** | UI / Subagents | **Stream hierarchical subagent progress** + show self/subtree token usage. Critical for debugging deep delegation (max depth 5). | 2 comments, high user-value ask |
| [#9524](https://github.com/QwenLM/qwen-code/issues/9524) | **P3** | Security / CI-CD | Deferred Critical findings from PR #9214 (ephemeral container gate) — **11 review rounds, Criticals rising 8→15**. Signals architectural complexity. | 2 comments, blocked autofix hardening |
| [#9514](https://github.com/QwenLM/qwen-code/issues/9514) | **P3** | Docs / Tools | Agent tool params document *effects* but not *preconditions/failure modes* — **schema vs. reality mismatch** causing caller confusion. | 2 comments, SDK usability gap |
| [#9303](https://github.com/QwenLM/qwen-code/pull/9303) | — | Web Shell / Perf | **Bound daemon transcript retention** to stop renderer OOM crashes. Directly impacts web-shell stability for long sessions. | PR open, 0 comments but high severity |
| [#9441](https://github.com/QwenLM/qwen-code/pull/9441) | — | Core / UX | Show **edit/exec diffs when PreToolUse hook returns `ask`** — currently user sees only synthetic prompt, not actual diff. | PR open, UX polish for hook-driven workflows |
| [#9521](https://github.com/QwenLM/qwen-code/issues/9521) | **P3** | Docs / UI | Align follow-up suggestion copy across **TUI and Web Shell** — inconsistency confuses users switching interfaces. | 2 comments, cross-platform polish |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | — | CI-CD / Ops | **Fleet Shepherd Dashboard** auto-maintained — tracks bot fleet health (scans, syncs, dispatches). Visibility into infra automation. | 3 comments, ops visibility |
| [#9523](https://github.com/QwenLM/qwen-code/issues/9523) | — | Release / CI | **Nightly release failed** (`publish` job). Auto-filed, approved for autofix — tests release pipeline resilience. | 0 comments, infra signal |

---

## 4. Key PR Progress (Top 10 by Significance)

| PR | Status | Area | Summary |
|----|--------|------|---------|
| [#9402](https://github.com/QwenLM/qwen-code/pull/9402) | Open | **Agent Board MVP** | Filesystem-backed board for **sharing work across independently started agents** — enables multi-agent collaboration via shared task space. |
| [#9520](https://github.com/QwenLM/qwen-code/pull/9520) | Open | **Agent Orchestration Contract** | Design doc mapping **all 6 launch routes** (in-process, forks, teammates, workflow, Cursor SDK/CLI) — defines resolution, frontmatter enforcement, and lifecycle. |
| [#9214](https://github.com/QwenLM/qwen-code/pull/9214) | Open (needs-human) | **Autofix: Ephemeral Container Gate** | Runs verification gate in **ephemeral container** (not host) + structural test. 11 rounds, Criticals ↑ — **core security hardening**, blocked on convergence. |
| [#9527](https://github.com/QwenLM/qwen-code/pull/9527) | Open | **Autofix: Bind Sandbox to Digest** | Salvaged from #9214: **pins sandbox image to pulled digest** (fixes R11-1, R11-2). Supply-chain integrity for verification gate. |
| [#9221](https://github.com/QwenLM/qwen-code/pull/9221) | Open | **Review: Private Scratch Worktree** | Verifier probes run in **isolated worktree** — prevents pollution of shared review tree. Critical for pipelined review reliability. |
| [#9461](https://github.com/QwenLM/qwen-code/pull/9461) | Open | **Review: Convergence Diagnostics** | When review loop stalls, **tells author why** (round-to-round signal comparison). Reduces "why isn't this merging?" friction. |
| [#9526](https://github.com/QwenLM/qwen-code/pull/9526) | Open | **Review: Persistently-Critical Advisory** | Adds **convergence-exit advisory** when Criticals persist across rounds + posting volume window present. Land-with-residual-risk signal. |
| [#9297](https://github.com/QwenLM/qwen-code/pull/9297) | Open | **Autofix: BLOCKED Handoff as First-Class Outcome** | Makes brake's `BLOCKED` handoff a valid round outcome (was causing "missing output" failures). Fixes autofix state machine. |
| [#9361](https://github.com/QwenLM/qwen-code/pull/9361) | Open | **Scheduled Tasks: Reuse Existing Session** | Task creation accepts `sessionId` — **reuses live idle session** after validation (owner, reservation, duplicate check). Reduces cold-start latency. |
| [#9426](https://github.com/QwenLM/qwen-code/pull/9426) | Open | **Serve: Prompt Terminal Ledger** | Append-only ledger of prompt outcomes (sidecar to transcript) — enables **cold-load reconciliation** for session recovery. |

---

## 5. Feature Request Trends

| Trend | Evidence (Issues/PRs) | Trajectory |
|-------|----------------------|------------|
| **Subagent orchestration & observability** | #9522 (stream progress/subtree usage), #9509 (failure reporting), #9520 (orchestration contract), #9402 (agent board) | **High** — Multi-agent workflows maturing; need for debugging, token accounting, and coordination primitives. |
| **Session lifecycle management** | v0.21.14 (`sessions ps`), #9361 (reuse session for tasks), #9426 (prompt ledger), #9303 (transcript bounds) | **High** — Operational tooling for persistent, recoverable sessions becoming first-class. |
| **Review/autofix convergence & safety** | #9214, #9221, #9297, #9461, #9526, #9524, #9525, #9527 | **Critical** — 11+ review rounds on container gate; investment in diagnostics, isolation, and exit criteria. |
| **Cross-interface consistency (TUI ↔ Web Shell)** | #9521 (follow-up copy), #9303 (OOM fix), #9441 (hook diffs in UI) | **Medium** — Parity between terminal and browser UX. |
| **Developer-facing SDK/docs precision** | #9514 (preconditions/failure modes), #9520 (orchestration contract), #9491 (Aone Code comment API) | **Medium** — External integrators need accurate contracts. |

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Frequency | Representative Items |
|------------|-----------|----------------------|
| **Silent/ambiguous failures in agent tooling** | High | #9509 (missing `error` field → false success), #9514 (undocumented preconditions), #9297 (BLOCKED not a valid outcome) |
| **CI/CD security model gaps** | High | #9089 (runner isolation), #9524 (deferred Criticals), #9525 (design for runner-level isolation), #9498 (symlink wedge) |
| **Review loop non-convergence** | High | #9214 (11 rounds, Criticals ↑), #9461 (no diagnostics), #9526 (persistently-critical advisory) |
| **Session/transcript scalability** | Medium | #9303 (OOM from unbounded retention), #9426 (need ledger for recovery), #9361 (cold-start latency) |
| **Cross-platform UX drift** | Medium | #9521 (copy mismatch TUI/Web), #9441 (hook diffs only in TUI?), #9303 (web-shell specific) |
| **Documentation-reality gap for APIs** | Medium | #9514 (params lack failure modes), #9520 (contract needed for 6 launch routes) |

---

*Digest generated from GitHub data as of 2026-08-20. Links point to live issues/PRs on [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code).*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-20

## 1. Today's Highlights

The project shipped **v0.9.10** (PR #5513), a major release focused on memory retention fixes, session identity persistence, durable approvals, and release pipeline hardening. Simultaneously, the team resolved a critical regression where `max_tokens=384000` exceeded model limits after upgrading to v0.9.9 (#5516), and fixed the missing header status indicator that broke in v0.9.7 (#5512). Internationalization work continues with dictionary-spine migration (#5337) and Chinese documentation localization (#5482).

## 2. Releases

**CodeWhale v0.9.10** — Released via PR #5513 (76 commits, rebased over main). Key themes:
- **Retention & memory**: Addresses 1-hour stdout/stderr retention causing swap pressure (#5472)
- **Identity & first-run**: Persists approval outcomes before execution (#5491), restores `/title` as independent terminal window title (#5509)
- **Durable approvals**: Reconstructs interrupted approval state on session resume
- **Release hardening**: Bounds release-candidate and artifact workflow jobs (#5496), fixes flaky verifier tests (#5056)

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#5518](https://github.com/Hmbown/CodeWhale/issues/5518) Emergency compaction triggers at ~85K–105K tokens despite 327K context window | **Critical token budget bug** — suggests excessive output-headroom budgeting or handoff state contamination in vLLM-hosted DeepSeek-V4-Flash routes | 3 comments, 0 👍; author provides detailed config reproduction |
| [#5516](https://github.com/Hmbown/CodeWhale/issues/5516) HTTP 400: `max_tokens=384000` exceeds model limit after v0.9.9 upgrade | **Blocking regression** — every request fails post-upgrade; no manual config change by user | 1 comment, 0 👍; fixed in v0.9.10 |
| [#5512](https://github.com/Hmbown/CodeWhale/issues/5512) Header status indicator (cw/whale/dots) never renders since v0.9.7 | **UX regression** — status chip missing on Windows Terminal/PowerShell; worked in v0.8.64 | 2 comments, 0 👍; confirmed on 0.9.8/0.9.9 |
| [#5519](https://github.com/Hmbown/CodeWhale/issues/5519) `isZh` migration losing ground — 31 files now branch on locale (up from 12) | **Tech debt alert** — i18n migration (#5337) diverging; net +10 branched files in 30 days | 1 comment, 0 👍; calls for "one-way ceiling" to force convergence |
| [#5023](https://github.com/Hmbown/CodeWhale/issues/5023) IME candidate window jumps/unstable during input (Windows) | **Windows UX blocker** — Chinese/Japanese/Korean input unstable in TUI composer | 2 comments, 0 👍; affects Windows 11, cargo-installed binary |
| [#1425](https://github.com/Hmbown/CodeWhale/issues/1425) Session hangs on large-text processing (3M-char novel, 10 sub-agents) | **Scalability limit** — `agent_wait` timeout kills session; sub-agents show `Running` but never complete | 8 comments, 0 👍; root cause: session interrupted, not deadlocked |
| [#1732](https://github.com/Hmbown/CodeWhale/issues/1732) Merged report save extremely slow, low cache hit | **Performance pain point** — local doc persistence bottlenecks on large outputs | 7 comments, 0 👍; screenshots show cache miss rates |
| [#5403](https://github.com/Hmbown/CodeWhale/issues/5403) `main` red on macOS (plugin_e2e) & Windows (NSIS) across 4 completed runs | **CI reliability crisis** — both platforms failing consistently post-#5395 concurrency fix | 4 comments, 0 👍; blocks release confidence |
| [#4683](https://github.com/Hmbown/CodeWhale/issues/4683) Wrong DeepSeek completions URL (flaky network error) | **Intermittent API failure** — `api.deepseek.com/v1/chat/completions` errors after long sessions | 4 comments, 0 👍; needs investigation into URL construction |
| [#5442](https://github.com/Hmbown/CodeWhale/issues/5442) Discoverability debt: advanced commands hidden, config-only capabilities, welcome teaches governance not capability | **Product UX gap** — 34 high-value commands demoted from palette root; users can't find features | 1 comment, 0 👍; "shipped-but-invisible" audit |

## 4. Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| [#5513](https://github.com/Hmbown/CodeWhale/pull/5513) | **Release** | v0.9.10 — retention, identity, durable approvals, release hardening (76 commits) |
| [#5515](https://github.com/Hmbown/CodeWhale/pull/5515) | **Fix** | Forward MCP image results as typed content; converts standard MCP `image` to provider-neutral rich blocks, 5 MiB limit |
| [#5514](https://github.com/Hmbown/CodeWhale/pull/5514) | **Refactor** | Extract stream processing from turn loop into `process_stream`; returns `StreamOutcome` for cleaner separation |
| [#5509](https://github.com/Hmbown/CodeWhale/pull/5509) | **Fix** | Restore `/title` as independent terminal window title (split from `/rename` merged in 24c7dee) |
| [#5517](https://github.com/Hmbown/CodeWhale/pull/5517) | **I18n** | Move `docs/constitution` & `docs/runtime-api` onto dictionary spine (#5337); 14 `isZh` branches each → zero |
| [#5507](https://github.com/Hmbown/CodeWhale/pull/5507) | **Docs** | Complete Tier 1 Chinese localization (#5482); restructure docs tree with `docs/zh_hans/` per-language folders |
| [#5491](https://github.com/Hmbown/CodeWhale/pull/5491) | **Fix** | Persist approval outcomes before execution; deny if receipt can't persist; reconstruct state on resume (closes #5360) |
| [#5496](https://github.com/Hmbown/CodeWhale/pull/5496) | **CI** | Bound release-candidate & artifact workflow jobs; caps previously uncapped release paths |
| [#5455](https://github.com/Hmbown/CodeWhale/pull/5455) | **UX** | "Signal Cut" whale empty-state hero art + Whale Teams role mapping; redesigns empty-state rendering |
| [#5510](https://github.com/Hmbown/CodeWhale/pull/5510) | **Docs** | Restore star history chart to README (removed in 4bc02de due to GitHub API restrictions) |

## 5. Feature Request Trends

1. **Continuous/looping agent execution** (#5508) — Users want "infinite turn" mode for coordinator agents that gather reports, assign jobs, and sleep between cycles without manual re-prompting
2. **Windows Terminal default launch** (#1854) — Strong demand for `.bat` launcher opening Windows Terminal instead of raw `cmd.exe` for proper font/color rendering
3. **Execution output & thinking preview improvements** (#1682) — Current preview UX criticized; users want better result exploration and thought-process visibility
4. **MCP capability metadata** (#4170) — Spec-compatible capability representation for tool discovery/UI without prose scraping
5. **Chinese documentation parity** (#5482, #5507) — Growing Chinese user base demands fully localized, restructured docs (Tier 1 delivered, more planned)

## 6. Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Memory retention / swap pressure** | High | #5472 (11 GB swap), #5518 (early compaction), v0.9.10 retention focus |
| **Flaky CI / release pipeline** | High | #5403 (main red on both platforms), #5056 (flaky verifier tests), #5496 (unbounded release jobs) |
| **Windows IME / rendering issues** | Medium | #5023 (candidate window jumps), #1854 (cmd.exe vs Terminal), #1651 (VS Code crashes in YOLO) |
| **Token budget / context management** | Medium | #5518 (early compaction), #5516 (max_tokens regression), #1425 (large-context hang) |
| **i18n migration divergence** | Medium | #5519 (31 files branching, growing), #5337 (dictionary spine incomplete) |
| **Discoverability of advanced features** | Medium | #5442 (34 commands hidden), #1682 (poor output preview) |
| **Approval flow durability** | Medium | #5491 (persist before exec), #5478 (/rename leaves tool row stuck) |

---

*Data source: GitHub API — Hmbown/CodeWhale (DeepSeek TUI) | Period: 2026-08-19 to 2026-08-20*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*