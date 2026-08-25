# AI CLI Tools Community Digest 2026-08-25

> Generated: 2026-08-25 01:41 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-25)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into two tiers: **mature, enterprise-backed tools** (Claude Code, Codex, Copilot CLI, Gemini CLI) shipping weekly releases with dedicated platform teams, and **community-driven innovators** (OpenCode, Pi, Qwen Code, DeepSeek TUI) iterating rapidly on UX primitives like persistent terminals, multi-provider neutrality, and agent orchestration. A critical regression in Claude Code (glibc 2.44 segfault) and systemic auth instability in Codex highlight growing pains as tools scale beyond early adopters. Meanwhile, OpenCode’s TUI v2 overhaul and DeepSeek TUI’s provider-neutrality audit signal a shift from “model wrappers” to **full-shell environments** with session resilience, cost observability, and cross-platform parity as table stakes.

---

## 2. Activity Comparison (2026-08-25)

| Tool | Hot Issues (Top 10) | Key PRs Updated | Release Status | Critical Blockers |
|------|---------------------|-----------------|----------------|-------------------|
| **Claude Code** | 10 (7+ segfault dupes) | 3 | v2.1.243 shipped; **v2.1.241 stable** | Linux glibc 2.44 segfault (mimalloc) |
| **OpenAI Codex** | 10 (5 auth-loop issues) | 10 | rust-v0.150.0-alpha.8 | Desktop auth loops (macOS/Win), token invalidation |
| **Gemini CLI** | 10 | 10 | v0.56.0-nightly + v0.57.0-preview.1 | Subagent hangs, browser agent Wayland breakage |
| **GitHub Copilot CLI** | 10 | 1 (no-op) | v1.0.81-9 | MCP handshake failures, Windows file-locking |
| **Kimi Code CLI** | 0 | 1 | — | UTF-8 validation in StrReplaceFile |
| **OpenCode** | 10 | 10 | v1.18.22 | Free-tier tool support broken (Zen/Go) |
| **Pi** | 10 | 10 (6 merged) | v0.84.3 | Windows fragmentation, stream stalls |
| **Qwen Code** | 3 | 10 | v0.22.0-nightly | Review pipeline trust, session state sync |
| **DeepSeek TUI** | 10 | 10 | v0.9.12 RC (integration branch) | Mega-file decomposition, provider lock-in |
| **Grok Build** | 0 | 0 | — | No activity |

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Direction | Tools Affected | Specific Needs |
|-----------|----------------|----------------|
| **Session/Thread Persistence & Resume** | Claude Code, Codex, OpenCode, Pi, Qwen Code, DeepSeek TUI | Durable artifacts (Codex), replayable transcripts (Pi), session rotation bounds (Qwen), `/relaunch` (DeepSeek) |
| **MCP/OAuth Reliability & Enterprise Auth** | Codex, Copilot CLI, OpenCode, Pi, Qwen Code, DeepSeek TUI | Entra ID scope support (Copilot), RFC 8414 compliance (Copilot), handshake retries (Copilot), OAuth2.1 for MCP (DeepSeek) |
| **TUI as Primary Shell (not CLI wrapper)** | OpenCode, Pi, Qwen Code, DeepSeek TUI, Codex | Persistent PTY panes (OpenCode), bottom-aligned viewport (Qwen), per-block actions (DeepSeek), mouse/OSC support (Pi) |
| **Subagent/Agent Lifecycle Management** | Claude Code, Codex, Gemini CLI, OpenCode, Pi | Recovery after MAX_TURNS (Gemini), thread reclamation (Codex), approval receipts (DeepSeek), compaction profiles (Pi) |
| **Cost/Token Observability** | Copilot CLI, OpenCode, DeepSeek TUI, Qwen Code, Pi | Per-tool/MCP token attribution (DeepSeek, Qwen), OTel billing spans (Copilot), compaction thresholds (Pi, OpenCode) |
| **Provider/Model Neutrality** | OpenCode, Pi, DeepSeek TUI, Qwen Code, Gemini CLI | 18 DeepSeek gates removal (DeepSeek), Bedrock/Mantle/Cloudflare gateway (OpenCode, Pi), OpenAI-compat layer fixes (Gemini) |
| **Windows as First-Class Platform** | Claude Code, Codex, Copilot CLI, Pi, OpenCode | glibc 2.44 fix (Claude), VS Code file-lock conflict (Copilot), PowerShell tool (Pi), worktree locking (Copilot, OpenCode) |
| **Auto-Memory/Compaction Quality** | Claude Code, Gemini CLI, Pi, OpenCode | Configurable limits (Claude), low-signal quarantine (Gemini), per-model profiles (Pi), idle watchdogs (OpenCode) |

---

## 4. Differentiation Analysis

| Tool | Feature Focus | Target Users | Technical Approach |
|------|---------------|--------------|-------------------|
| **Claude Code** | Enterprise memory system, `/loop` observability, model curation | Professional devs, teams needing audit trails | Bundled Node + mimalloc; native installer; auto-memory index |
| **OpenAI Codex** | Desktop app parity, thread artifacts, realtime events | ChatGPT Pro/Enterprise users, desktop-first workflows | Rust core + TypeScript TUI; SQLite thread store; WebSocket prewarm |
| **Gemini CLI** | Subagent delegation, browser agents, AST-aware tooling, eval infra | Google Cloud devs, agentic workflow builders | Go core; Zero-Dependency Sandboxing epic; containerized review execution |
| **GitHub Copilot CLI** | Interactive-mode ergonomics, enterprise OAuth, GitHub MCP | GitHub Enterprise orgs, Copilot seat holders | TypeScript; VS Code extension host integration; RFC-compliant OAuth |
| **Kimi Code CLI** | File-mutation safety, minimal surface | Security-conscious devs, binary-file editors | Rust; strict UTF-8 validation; single-tool focus |
| **OpenCode** | **TUI v2 as terminal IDE**: persistent panes, PTY daemon, follow-up queue | Power users wanting tmux-like agent shell | Go + Bun SEA bundles; embedded `opencode-pty` sidecar; Figma-driven UX |
| **Pi** | Provider ecosystem breadth, compaction granularity, session portability | Multi-cloud/model users, local-model adopters | TypeScript; per-model compaction profiles; PowerShell native; musl builds |
| **Qwen Code** | Review pipeline hardening, channel integrations (DingTalk), containerized verification | Chinese enterprise, code-review automation | Rust; container-boundary execution; workflow-driven fan-out; session rotation |
| **DeepSeek TUI** | Provider neutrality, codebase health, supervision primitives | OSS contributors, multi-provider power users | Rust; mega-file decomposition; control socket/JSON-RPC; lifecycle outbox |
| **Grok Build** | (No signal) | — | — |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / Rapid Iteration** | **OpenCode** (6 TUI v2 PRs in 24h), **Pi** (6 merged PRs + release), **DeepSeek TUI** (integration branch, 10 PRs), **Qwen Code** (review pipeline velocity) | Daily structural PRs; architectural refactors; release candidates |
| **Active Community / High Engagement** | **Codex** (100+ comments on auth), **Claude Code** (7+ segfault reports, 24 comments), **Copilot CLI** (27 👍 on whitelist), **Gemini** (8 👍 on subagent hangs) | User-reported regressions block workflows; strong 👍 on UX gaps |
| **Mature / Stable Cadence** | **Claude Code** (v2.1.x), **Copilot CLI** (v1.0.x), **OpenCode** (v1.18.x), **Pi** (v0.84.x) | Semantic versioning; patch releases; enterprise focus |
| **Early / Niche** | **Kimi Code** (single PR), **Grok Build** (silent) | Low issue velocity; limited community surface |

**Maturity insight**: Tools backed by foundation-model providers (Anthropic, OpenAI, Google, GitHub, xAI, Moonshot, Alibaba) ship faster but carry platform-specific lock-in. Community-driven tools (OpenCode, Pi, DeepSeek TUI) innovate on **shell-level UX** and **provider abstraction**—areas where vendor tools underinvest.

---

## 6. Trend Signals (Industry Direction)

1. **Multi-Provider Neutrality is Non-Negotiable**  
   DeepSeek TUI’s 18-gate audit, OpenCode’s Cloudflare AI Gateway support, Pi’s Bedrock/Mantle/Eden AI additions, and Gemini’s OpenAI-compat fixes converge: **no tool can assume a single provider**. Developers expect BYOM (Bring Your Own Model) with first-class OAuth/MCP.

2. **Session Persistence = Table Stakes**  
   Codex’s `thread_artifacts` table, Pi’s torn-JSONL recovery, Qwen’s session rotation, DeepSeek’s `/relaunch`, and OpenCode’s PTY snapshots all address: **survive crashes, updates, and device switches without context loss**.

3. **TUI Displaces Raw CLI as Default Interface**  
   OpenCode’s persistent panes, Qwen’s virtual viewport, DeepSeek’s per-block actions, Pi’s OSC-133 markers, and Codex’s collapsed-command UX show **terminal UI is the product**, not a thin wrapper.

4. **Subagent Orchestration Requires First-Class Lifecycle**  
   Silent failures (Gemini MAX_TURNS masking, Codex thread leaks, DeepSeek turn-end cancellation) prove **ad-hoc subagents don’t scale**. Tools are building: approval receipts, usage rollups, compaction awareness, and reclamation guarantees.

5. **Enterprise Auth (Entra ID, RFC 8414, MCP OAuth) Blocks Adoption**  
   Copilot’s Entra scope bug, Codex’s token rotation, Pi’s Codex thread-affinity, and DeepSeek’s OAuth2.1 work reveal: **SSO integration depth determines enterprise viability**.

6. **Cost Observability Moves from Nice-to-Have to Required**  
   Copilot’s OTel spans, DeepSeek’s `/context` tool costs, Qwen’s execution-grade verification, and Pi’s per-model compaction show **token budgets are now operational metrics**.

7. **Windows Parity Lag Persists but Narrows**  
   Claude’s glibc segfault (Linux), Copilot’s VS Code file locks, Codex’s terminal helper errors, Pi’s PowerShell 5.1 vs 7 split—**Windows remains the buggiest surface**, but native tooling (PowerShell, worktree fixes) is landing.

8. **Containerized/Sandboxed Execution for Safety**  
   Qwen’s review containers, Gemini’s Zero-Dependency Sandboxing, OpenCode’s PTY daemon isolation, and Pi’s extension env sanitization reflect **“run reviewed code in a box” becoming standard**.

---

### Decision-Maker Takeaways

- **For enterprise standardization**: Claude Code (memory audit), Copilot CLI (GitHub ecosystem), Codex (OpenAI stack) lead on compliance but carry platform lock-in.
- **For developer experience innovation**: OpenCode (TUI v2), Pi (provider breadth), DeepSeek TUI (architecture health) are where shell-level UX advances fastest.
- **For multi-cloud/model strategies**: Pi, OpenCode, Qwen Code, DeepSeek TUI offer the least vendor coupling.
- **Watch**: OpenCode’s PTY daemon (could become shared infra), Pi’s musl builds (Alpine/container deploy), DeepSeek’s control socket (agent supervision standard).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-25 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **skill-creator evaluation fix** ([#1298](https://github.com/anthropics/skills/pull/1298)) | Fixes `run_eval.py` reporting 0% recall for all skill descriptions; addresses Windows stream reading, trigger detection, parallel workers | References **Issue #556** (12 comments, 7 👍) — 10+ independent reproductions; core blocker for description-optimization loop | **Open** (Jun 10 → Jun 23) |
| 2 | **Hivemind: Zero-Cost Multi-Agent Orchestration** ([#1628](https://github.com/anthropics/skills/pull/1628)) | Delegates mechanical work to headless `opencode` workers on free models; Claude stays planner/reviewer/merger | Novel cost-optimization architecture; "expensive model's context is the scarce resource" | **Open** (Aug 21 → Aug 24) |
| 3 | **scnet-hpc** ([#1615](https://github.com/anthropics/skills/pull/1615)) | Profile-based SSH/Slurm workflows for SCNet HPC clusters: connection, partition, module, accelerator guidance | Niche but complete HPC integration; profile refresh & compute-node discovery | **Open** (Aug 20 → Aug 24) |
| 4 | **Evaluation & benchmarking stability fixes** ([#1602](https://github.com/anthropics/skills/pull/1602)) | Resolves MCP-builder serialization, benchmark metrics, encoding, script stability across platform | Broad reliability sweep; touches multiple skills' eval pipelines | **Open** (Aug 17 → Aug 24) |
| 5 | **self-audit: mechanical verification + 4-dim reasoning gate** ([#1367](https://github.com/anthropics/skills/pull/1367)) | Pre-delivery audit: Step 0 verifies every output file exists; Steps 1–4 audit reasoning in damage-severity order | Universal, stack-agnostic quality gate; v1.3.0 | **Open** (Jun 28 → Jul 2) |
| 6 | **ServiceNow platform skill** ([#568](https://github.com/anthropics/skills/pull/568)) | Broad ServiceNow assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, IntegrationHub | Longest-running active PR (5 months); enterprise demand signal | **Open** (Mar 8 → Aug 12) |
| 7 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Full testing stack: Trophy model, AAA, React Testing Library, contract, E2E, performance, CI/CD | Comprehensive reference skill; addresses "what to test vs. not test" | **Open** (Mar 22 → Apr 21) |
| 8 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | Prevents orphan/widow lines, heading stranding, numbering misalignment in generated docs | "Affects every document Claude generates"; quality-of-life for all doc workflows | **Open** (Mar 4 → Mar 13) |

> **Note:** PR comment counts are not exposed in the dataset; ranking combines issue cross-references (e.g., #556), update recency, and scope breadth.

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Trust & namespace security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) — community skills published under `anthropic/` namespace impersonate official skills | 🔥 **Critical** |
| **Organizational skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) — need org-wide library vs. manual file transfer | 🔥 **High** |
| **Evaluation/trigger reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍) — `claude -p` never triggers skills (0% trigger rate) | 🔥 **High** |
| **Windows compatibility** | [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) — subprocess/encoding bugs block skill-creator on Windows | 🔶 **Medium** |
| **Context-window efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — `claude-api` injects 156k tokens in one call | 🔶 **Medium** |
| **Quality/self-governance meta-skills** | [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1 👍), [#83](https://github.com/anthropics/skills/pull/83) — reasoning quality gates, skill-quality-analyzer | 🔶 **Medium** |
| **MCP exposure / interop** | [#16](https://github.com/anthropics/skills/issues/16) (4 comments) — expose skills as MCP endpoints | 🔶 **Medium** |
| **Enterprise/platform skills** | [#568](https://github.com/anthropics/skills/pull/568) ServiceNow, [#181](https://github.com/anthropics/skills/pull/181) SAP-RPT-1-OSS, [#486](https://github.com/anthropics/skills/pull/486) ODT | 🔶 **Medium** |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land Soon)

| PR | Skill | Why It’s Poised to Merge |
|----|-------|--------------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator eval fix** | Directly unblocks the description-optimization loop; 10+ reproductions; referenced by core issue #556 |
| [#1602](https://github.com/anthropics/skills/pull/1602) | **Evaluation stability sweep** | Broad reliability fixes across serialization, metrics, encoding — maintainers prioritize CI health |
| [#538](https://github.com/anthropics/skills/pull/538), [#539](https://github.com/anthropics/skills/pull/539), [#541](https://github.com/anthropics/skills/pull/541) | **docx/pdf case-sensitivity, YAML validation, w:id collision** | Small, targeted fixes by same author (Lubrsy706); low risk, high correctness value |
| [#509](https://github.com/anthropics/skills/pull/509) | **CONTRIBUTING.md** | Addresses community-health gap (Issue #452); single highest-impact repo-health addition |
| [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design clarity** | Improves actionability of an existing core skill; maintainers favor clarity refinements |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | Universal quality-of-life skill; no controversial dependencies; clear user pain point |

---

## 4. Skills Ecosystem Insight (One-Sentence Summary)

> **The community’s most concentrated demand is making the skill *authoring and evaluation pipeline trustworthy and platform-agnostic* — fixing the broken trigger/eval loop (0% recall), Windows incompatibilities, and namespace spoofing — so that higher-level skills (multi-agent orchestration, enterprise integrations, quality gates) can be reliably built, shared, and adopted at organizational scale.**

---

# Claude Code Community Digest — 2026-08-25

---

## 1. Today's Highlights

**Critical regression in v2.1.242/243**: A Linux-only segmentation fault on startup (affecting even `claude --version`) has been reported by **7+ users** across CachyOS, Arch, and other glibc 2.44 systems. Root cause: bundled mimalloc exports versioned glibc allocator symbols, causing `free(NULL)` crashes in `newlocale` pre-`main`. v2.1.241 remains stable. Meanwhile, v2.1.243 adds a **Loops breakdown to `/usage`** and a **`modelPicker` setting** for curated model lists.

---

## 2. Releases

### v2.1.243 (2026-08-25)
| Change | Impact |
|--------|--------|
| **Loops breakdown in `/usage`** | Per-loop run count, total tokens, tokens/run, last run — makes runaway `/loop` tasks visible |
| **`modelPicker` setting** | Curate `/model` picker with ordered, labeled list of models (accepts any ID spelling) |

[Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.243)

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#89360](https://github.com/anthropics/claude-code/issues/89360) | **v2.1.243 Segmentation fault (Linux)** | Blocks all Linux users on glibc 2.44; 8👍, 24 comments | Urgent; multiple duplicates filed |
| [#89334](https://github.com/anthropics/claude-code/issues/89334) | **v2.1.242 segfaults on every launch — mimalloc `free` lacks NULL check** | Root-cause analysis: interposed mimalloc crashes in `newlocale` pre-`main`; 7👍, 7 comments | Technical deep-dive; v2.1.241 unaffected |
| [#89371](https://github.com/anthropics/claude-code/issues/89371) | **Native installer 2.1.243 segfaults on glibc 2.44 (CachyOS)** | Confirms regression persists in 2.1.243; 6👍, 6 comments | Same root cause as #89334 |
| [#89366](https://github.com/anthropics/claude-code/issues/89366) | **Deterministic SIGSEGV on CLI startup (`free`/`__newlocale`/`pthread_once`)** | 100% repro; includes stack trace; 1👍, 6 comments | Helps pinpoint exact crash site |
| [#89370](https://github.com/anthropics/claude-code/issues/89370) | **claude segfaults, so does install.sh** | Installer also broken; 9👍, 7 comments | Blocks fresh installs |
| [#82056](https://github.com/anthropics/claude-code/issues/82056) | **Auto-memory index load status not exposed in-session** | Users can't tell if MEMORY.md loaded whole, truncated, or not at all; 1👍, 26 comments | Long-standing visibility gap |
| [#54461](https://github.com/anthropics/claude-code/issues/54461) | **Desktop app: cannot change primary working directory or open new chat** | Windows desktop UX regression; 13👍, 22 comments | High engagement, months open |
| [#85592](https://github.com/anthropics/claude-code/issues/85592) | **`CLAUDE_CODE_SUBAGENT_MODEL` silently discards per-call model since v2.1.223** | Env var overrides explicit subagent model; warning never fires; metadata lies | Silent behavior change, breaks workflows |
| [#79217](https://github.com/anthropics/claude-code/issues/79217) | **Make auto-memory MEMORY.md size limit (200 lines/25KB) configurable** | Hardcoded limit truncates context; 2👍, 4 comments | Simple config request, high utility |
| [#85021](https://github.com/anthropics/claude-code/issues/85021) | **Permission-mode indicator uses U+23F5 (⏵) — renders as tofu in common fonts** | Reported 5× over 6 months; replace with U+25B6 (▶); 1👍, 2 comments | Trivial fix, long-standing annoyance |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#79898](https://github.com/anthropics/claude-code/pull/79898) | Add Claude apps gateway on AWS example deployment assets | **Closed** | Reference deployment for Claude Apps Gateway on AWS/Bedrock; companion to GCP example |
| [#75252](https://github.com/anthropics/claude-code/pull/75252) | docs: clarify plugin MCP configuration scope | **Closed** | Distinguishes plugin-bundled MCP servers from user-level allow/deny list |
| [#83890](https://github.com/anthropics/claude-code/pull/83890) | Create pylint.yml | **Open** | Adds pylint config (early stage) |

> Only 3 PRs updated in 24h — focus appears on stabilizing v2.1.243 regression.

---

## 5. Feature Request Trends

1. **Memory system transparency & control** — Users want visibility into auto-memory load status (#82056), configurable index limits (#79217), and persistent memory that actually works across projects (#88579).
2. **Model selection ergonomics** — `modelPicker` (shipped in 2.1.243) addresses curation; subagent model override behavior (#85592) needs fix.
3. **Cross-platform desktop parity** — Windows desktop app lacks basic directory/chat management (#54461).
4. **Sandbox & permission usability** — Glob re-expansion overhead (#84681), silent deny-rule failures (#84697), sandbox artifacts polluting git (#84662).
5. **Theme/customization completeness** — Diff color overrides ignored (#85660), Unicode rendering issues (#85021).

---

## 6. Developer Pain Points

| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Linux startup crashes (glibc 2.44 + mimalloc)** | Critical, 7+ reports in 24h | #89334, #89360, #89366, #89369, #89370, #89371, #89377 |
| **Auto-memory opacity** | Recurring | #82056 (26 comments), #79217, #88579, #87825 |
| **Silent config/behavior changes** | Multiple | #85592 (subagent model), #84697 (deny rules), #86171 (Monitor tool disabled by telemetry flags) |
| **Sandbox performance & side effects** | Persistent | #84681 (1.6s/glob), #84662 (git noise), #85046 (update loop) |
| **Windows desktop app gaps** | Long-standing | #54461 (4 months, 13👍), #74643 (VS Code extension load fail) |
| **Unicode/font rendering in TUI** | Repeatedly reported | #85021 (5 prior dupes), #85660 (theme diff colors) |

---

**Actionable takeaway**: If you're on Linux with glibc 2.44 (CachyOS, Arch, Fedora Rawhide), **stay on v2.1.241** until a hotfix lands. The mimalloc symbol interposition issue is well-understood and should be fixable by either guarding `free(NULL)` or avoiding versioned allocator exports.

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-25

---

## 1. Today's Highlights

Authentication instability dominates the past 24 hours: multiple macOS and Windows users report forced sign-out loops when resuming threads, with refresh tokens invalidated server-side within seconds. Concurrently, the CLI/TUI layer is seeing rapid iteration on thread persistence (artifacts, realtime events, title generation) and a new alpha release (0.150.0-alpha.8) ships with incremental Rust toolchain updates.

---

## 2. Releases

| Version | Notes |
|---------|-------|
| **rust-v0.150.0-alpha.8** | Alpha release; no detailed changelog published. Likely contains internal Rust dependency bumps and minor CLI/runtime fixes ahead of a stable 0.150.0. |

[View release](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#39162](https://github.com/openai/codex/issues/39162) | **macOS: Opening existing conversation invalidates ChatGPT auth, redirects to sign-in** (v26.814.41407) | Core auth regression blocking desktop users on macOS; regression since v26.810. | 53 comments, 31 👍 — highest engagement in period |
| [#39903](https://github.com/openai/codex/issues/39903) | **Add option to disable “Ran N commands” collapsing in TUI** | UX pain point: developers lose visibility into executed commands during long sessions. | 21 comments, 36 👍 — strong demand for configurable verbosity |
| [#39189](https://github.com/openai/codex/issues/39189) | **Windows 26.814: Opening thread signs out Pro account after workspace-only settings 401** | Mirrors macOS auth failure on Windows; affects Pro subscribers. | 20 comments, 4 👍 |
| [#34227](https://github.com/openai/codex/issues/34227) | **Windows pet overlay hit region desynchronizes from visible mascot over time** | Long-standing UI bug in desktop pet feature; hit-testing drifts. | 17 comments, 1 👍 |
| [#39803](https://github.com/openai/codex/issues/39803) | **Repeated sign-in screen after completing response or opening session** | Auth loop variant; appears across macOS builds 26.818+. | 12 comments |
| [#39841](https://github.com/openai/codex/issues/39841) | **Windows workspace terminal fails with “setup refresh had errors”** | Blocks terminal tooling on Windows desktop app. | 9 comments |
| [#39933](https://github.com/openai/codex/issues/39933) | **VS Code extension on Windows: helper_unknown_error / setup refresh had errors** | Same root cause as #39841 but surfaces in IDE extension. | 7 comments |
| [#40267](https://github.com/openai/codex/issues/40267) | **macOS 26.818.41705: Thread resume signs out — rotated refresh token never persisted** | Deep dive: `auth.json` not updated after OAuth refresh; fresh login invalidated in ~76 s. | 7 comments |
| [#39694](https://github.com/openai/codex/issues/39694) | **Completed subagent threads not reclaimed → false “agent thread limit reached”** | Resource leak in multi-agent runs; limits effective concurrency. | 5 comments |
| [#35209](https://github.com/openai/codex/issues/35209) | **Codex App: completed subagents remain “Active/Working” after task_complete** | UI state desync; confuses users about actual agent capacity. | 5 comments, 2 👍 |

---

## 4. Key PR Progress (Notable Merges/Updates)

| PR | Summary | Impact |
|----|---------|--------|
| [#40511](https://github.com/openai/codex/pull/40511) | **Add hooks for interrupted turns** — emits `Interrupt` event before abort, flushes transcript. | Enables custom cleanup/telemetry when turns are cancelled. |
| [#40509](https://github.com/openai/codex/pull/40509) | **Persisted thread artifact models** — new `thread_artifacts` SQLite table with typed payloads, cascade delete, pagination. | Foundation for durable, queryable per-thread artifacts (files, outputs, metadata). |
| [#40508](https://github.com/openai/codex/pull/40508) | **Persist realtime events in thread timeline** — stores session boundaries, transcript segments, turn lifecycle. | Powers bounded history views without full thread loads. |
| [#40504](https://github.com/openai/codex/pull/40504) | **Route cyber Trusted Access links by plan type** — Free/Go/Plus/Pro → individual page; Enterprise → org page. | Improves error-flow UX for policy-blocked turns. |
| [#40502](https://github.com/openai/codex/pull/40502) | **Collapse home paths in `/status` AGENTS.md summaries** — shows `~` instead of full home path. | Reduces PII leakage in status output. |
| [#40501](https://github.com/openai/codex/pull/40501) | **Deduplicate plugin skills in unified mentions** — adds `pluginId` to `SkillMetadata`. | Cleaner `@` search results when plugins expose multiple skills. |
| [#40499](https://github.com/openai/codex/pull/40499) | **Harden startup rollout migration against concurrent updates** — waits for rollout quiescence. | Fixes race conditions during concurrent Codex process starts. |
| [#30621](https://github.com/openai/codex/pull/30621) | **Trace startup WebSocket prewarm** — preserves trace context, adds spans. | Improves observability of cold-start latency. |
| [#30690](https://github.com/openai/codex/pull/30690) | **Retry compressed requests uncompressed** — honors `x-openai-retry-uncompressed: true` on 400. | Resilience against edge-case API compression failures. |
| [#30765](https://github.com/openai/codex/pull/30765) | **Enable tool search for fallback models** — synthesizes `tool_search` capability for unknown models. | Ensures tool-calling works even when model catalog lags. |

---

## 5. Feature Request Trends

1. **Configurable TUI verbosity** — #39903 (36 👍) shows strong demand for per-user control over command-collapse, log density, and status detail.
2. **Auth-session portability** — Multiple issues (#39162, #39189, #40267, #40029) implicitly request better cross-surface session sharing (CLI ↔ Desktop ↔ Web) and refresh-token durability.
3. **Subagent lifecycle management** — #39694, #35209, #32353 highlight need for automatic reclamation, accurate UI state, and residency-slot hygiene.
4. **Windows sandbox/terminal reliability** — #39841, #39933, #34928 cluster around helper-process launch failures and UAC interactions.
5. **MCP/OAuth consistency across surfaces** — #40506, #40505 report Desktop vs CLI auth-state divergence for external MCP servers.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Signal | Representative Issues |
|------|--------|----------------------|
| **Desktop auth loops** | 5+ distinct issues in 24h, 100+ combined comments | #39162, #39189, #39803, #40267, #40029, #39718, #39886 |
| **Windows terminal/sandbox breaks** | 3 issues, same error string (`setup refresh had errors`) | #39841, #39933, #34928 |
| **Subagent resource leaks** | 3 open issues spanning 5+ weeks | #39694, #35209, #32353 |
| **TUI opacity** | High 👍 on visibility requests | #39903 (36 👍), #40289 (collapsed paths) |
| **Model routing surprises** | Users report silent downgrades (5.6 → 5.5) | #40510 |
| **Extension/IDE parity** | Windows VS Code extension mirrors desktop bugs | #39933, #38351 (GitHub @codex push failure) |

---

*Digest compiled from GitHub API data (issues, PRs, releases) for `openai/codex` as of 2026-08-25 00:00 UTC. All links point to live GitHub entries.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-25

## 1. Today's Highlights
Two releases shipped: a nightly build (v0.56.0-nightly) and a preview patch (v0.57.0-preview.1), both delivering a critical fix for A2A server state corruption that caused immediate crashes on subsequent prompts after cancellation. Core stability work continues around history rollback optimizations, retry nudge handling, and shell execution reliability. The issue backlog shows persistent pain points in subagent lifecycle management, browser agent stability, and Auto Memory quality.

## 2. Releases

### v0.56.0-nightly.20260825.g812f7a2bc
- **fix(a2a-server)**: Clear stale cancellation error on new message turns ([#28940](https://github.com/google-gemini/gemini-cli/pull/28940)) — resolves “Execution aborted” crashes after aborted requests.
- **fix(core)**: Declare top-level safety checkers in write policy configuration ([#28961](https://github.com/google-gemini/gemini-cli/pull/28961)) — ensures `AllowedPathChecker` registers correctly for `write_file`/`replace` tools.

### v0.57.0-preview.1
- Patch release cherry-picking the A2A server cancellation fix ([#29024](https://github.com/google-gemini/gemini-cli/pull/29024)) into the preview branch.

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reported as GOAL success | Subagents silently mask turn-limit exhaustion as success, breaking trust in autonomous workflows. | 13 comments, 2 👍 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs | Generalist delegation causes indefinite hangs on simple ops (folder creation); workaround is disabling subagents. | 8 comments, 8 👍 — P1, high user impact |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Leverage model’s bash affinity via Zero-Dependency OS Sandboxing | Strategic epic to align tooling with model’s native POSIX workflow (grep/sed/awk) for token efficiency. | 8 comments, 1 👍 — P2, large effort |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess AST-aware file reads, search, mapping | Investigates whether AST tooling (tilth/glyph) reduces misaligned reads and token noise. | 7 comments, 1 👍 — P2, customer issue |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini does not use skills/sub-agents enough | Model rarely invokes custom skills/subagents autonomously despite relevant descriptions. | 6 comments — P2, needs retest |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Stop Auto Memory retrying low-signal sessions | Background extractor re-queues unread low-signal sessions indefinitely, wasting cycles. | 5 comments — P2 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command execution stuck at “Waiting input” | Completed commands show as active awaiting input; blocks flow on simple CLI ops. | 4 comments, 3 👍 — P1, medium effort |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Enhance browser_agent resilience: session takeover & lock recovery | BrowserManager fails fast on locked profiles; needs automatic recovery for persistent sessions. | 4 comments — P3, customer issue |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails in Wayland | Platform-specific breakage on Wayland; blocks browser agent adoption on Linux. | 4 comments, 1 👍 — P1, agent/browser |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Deterministic redaction & reduce Auto Memory logging | Secrets sent to model before redaction; service logs skill content — security surface. | 4 comments — P2, security |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#28934](https://github.com/google-gemini/gemini-cli/pull/28934) | Closed | History rollback & retry nudge optimizations: roll back on tool cancellation instead of appending synthetic messages; inject retry nudge into `contents` to preserve prefix caching. |
| [#28940](https://github.com/google-gemini/gemini-cli/pull/28940) | Closed | **Critical fix**: Clear stale cancellation error on new A2A message turns — shipped in both nightly and preview. |
| [#28914](https://github.com/google-gemini/gemini-cli/pull/28914) | Open | Move on-retry nudge from `systemInstruction` to `contents` suffix to preserve static prompt prefix caching. |
| [#28939](https://github.com/google-gemini/gemini-cli/pull/28939) | Open | Avoid persisting interrupted response placeholder (`[The previous response was interrupted…]`) as synthetic model output. |
| [#28938](https://github.com/google-gemini/gemini-cli/pull/28938) | Open | Keep `GIT_CONFIG_*` env triplets internally consistent; prevent sanitized halves from becoming unparsable by Git. |
| [#29022](https://github.com/google-gemini/gemini-cli/pull/29022) | Open | `ui.keepAskUserQuestionsInHistory` setting — retain `ask_user` questions in text history for session resume/debugging. |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | Open | Extensions: prompt for consent on environment changes; sanitize runtime-altering env vars injected into MCP servers. |
| [#29019](https://github.com/google-gemini/gemini-cli/pull/29019) | Open | `eval:from-log` — turn real session logs into reviewable behavioral eval drafts (help wanted, XL). |
| [#29018](https://github.com/google-gemini/gemini-cli/pull/29018) | Open | Remove misleading `securitySchemes` and hardcoded credentials from A2A agent card; reflect unauthenticated local design. |
| [#29017](https://github.com/google-gemini/gemini-cli/pull/29017) | Open | Dedupe symlinked/junctioned skill directories during discovery (Windows `mklink /J`, POSIX symlinks). |

## 5. Feature Request Trends
1. **Subagent First-Class Support** — Reliable lifecycle (recovery, visibility via `/chat share` [#22598](https://github.com/google-gemini/gemini-cli/issues/22598), autonomous invocation [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), trajectory debugging.
2. **Browser Agent Hardening** — Wayland support [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), lock recovery [#22232](https://github.com/google-gemini/gemini-cli/issues/22232), settings override respect [#22267](https://github.com/google-gemini/gemini-cli/issues/22267).
3. **AST-Aware Tooling** — Precision reads, search, and codebase mapping to cut token waste and misaligned reads [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746).
4. **Memory System Quality** — Deterministic redaction, low-signal quarantine, patch validation [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525).
5. **Evaluation Infrastructure** — Stabilize internal project evals [#23166](https://github.com/google-gemini/gemini-cli/issues/23166), log-to-eval pipeline [#29019](https://github.com/google-gemini/gemini-cli/pull/29019).

## 6. Developer Pain Points
- **Agent Hangs & Silent Failures** — Generalist agent hangs [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), browser agent Wayland crashes [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), subagent success masking [#22323](https://github.com/google-gemini/gemini-cli/issues/22323).
- **Shell Execution Unreliability** — “Waiting input” phantom state after command completion [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), interactive prompt stalls (Vite) [#22465](https://github.com/google-gemini/gemini-cli/issues/22465).
- **Configuration & Environment Leaks** — Symlinked agents not recognized [#20079](https://github.com/google-gemini/gemini-cli/issues/20079), `GIT_CONFIG_*` sanitization breaking Git [#28938](https://github.com/google-gemini/gemini-cli/pull/28938), extension env var injection without consent [#28863](https://github.com/google-gemini/gemini-cli/pull/28863).
- **Auto Memory Noise** — Indefinite low-signal retries [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), invalid patches surfaced silently [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), secrets in model context/logs [#26525](https://github.com/google-gemini/gemini-cli/issues/26525).
- **Tool Scaling Limits** — 400+ tools trigger 400 errors [#24246](https://github.com/google-gemini/gemini-cli/issues/24246); model creates temp scripts散落工作区 [#23571](https://github.com/google-gemini/gemini-cli/issues/23571).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-25

---

## 1. Today's Highlights

The CLI shipped **v1.0.81-9** with a targeted UX improvement: model-picker now surfaces data-retention warnings with links, helping enterprise users stay compliant. Meanwhile, the issue tracker shows a cluster of **MCP/OAuth regressions** (Entra ID, Atlassian, agentgateway) and **Windows-specific reliability gaps** (worktree locking, plugin installs blocked by VS Code). Community energy is concentrated on **interactive-mode ergonomics** — tool whitelists, multi-turn `/ask`, and `/fork` terminal management — signaling a push to make the CLI a first-class daily driver rather than an occasional assistant.

---

## 2. Releases

### v1.0.81-9
**Improved** — Model picker now displays data-retention warnings with documentation links, giving teams visibility into how long each model retains prompt data.  
🔗 [Release v1.0.81-9](https://github.com/github/copilot-cli/releases/tag/v1.0.81-9)

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#1274** | [CLI constantly getting 400 errors for invalid request body](https://github.com/github/copilot-cli/issues/1274) | Core reliability blocker: ~95% of code-review prompts fail with 400s; debug logs suggest CLI may be crafting malformed requests. | 27 comments, 11 👍 — open since Feb, still unresolved |
| **#1973** | [Feature Request: Tool whitelist for Interactive Mode](https://github.com/github/copilot-cli/issues/1973) | Current binary choice (`/allow-all` vs per-call approval) forces users to approve safe read-only ops (grep, cat, git) manually. | 12 comments, **27 👍** — highest reaction count in batch |
| **#4421** | [MCP initialize handshake: fixed 60s budget, no retry](https://github.com/github/copilot-cli/issues/4421) | npx-launched stdio servers fail ~29% of sessions and **never respawn** for the session lifetime; no backoff or config knob. | 2 comments — architectural gap affecting MCP reliability |
| **#4588** | [Tool search (MCP deferral) disabled for all non-Anthropic models](https://github.com/github/copilot-cli/issues/4588) | Non-Claude models send **all tool schemas every turn** — 21.6k tokens for `"hi"` on Claude vs 47k on others; major cost/latency hit. | 0 comments, new — silent but high-impact regression |
| **#4572** | [Background compaction loses completed parallel GPT tool result → HTTP 400](https://github.com/github/copilot-cli/issues/4572) | Long-context autopilot sessions crash post-compaction with `No tool output found for function call`; tool *did* execute. | 1 comment — data-loss bug in core context logic |
| **#4582** | [MCP OAuth authorize omits `scope` for Entra ID with static `oauthClientId`](https://github.com/github/copilot-cli/issues/4582) | Entra ID returns `AADSTS900144`; blocks enterprise MCP adoption. Related to #4490 (closed but #4584 says persists). | 2 comments — OAuth spec compliance gap |
| **#4593** | [Archiving worktree session fails on Windows (os error 32)](https://github.com/github/copilot-cli/issues/4593) | Process tree rooted in worktree isn’t stopped before removal; archive *almost* completes then fails. | 1 comment — Windows-specific session lifecycle bug |
| **#4570** | [Windows: plugin install/update fails with “Access denied” while VS Code runs](https://github.com/github/copilot-cli/issues/4570) | Affects **every plugin**; closing VS Code unblocks. File-locking conflict with VS Code’s extension host. | 1 comment — daily friction for Windows devs |
| **#4590** | [Extension SDK reconnects dispose session hook processor](https://github.com/github/copilot-cli/issues/4590) | Multi-extension reloads tear down hook processor on each `session.resume`; breaks extension ecosystem stability. | 1 comment — SDK architecture issue |
| **#4408** | [github-mcp-server `/mcp authenticate` fails on Copilot Enterprise](https://github.com/github/copilot-cli/issues/4408) | Enterprise-routed accounts hit cross-origin resource identifier error; built-in GitHub MCP server unusable. | 0 comments, 1 👍 — enterprise blocker |

---

## 4. Key PR Progress

Only **one PR** updated in the last 24h:

| # | PR | Status | Note |
|---|----|--------|------|
| **#4573** | [Rename README.md to README.mdmain](https://github.com/github/copilot-cli/pull/4573) | OPEN | Appears to be a mistaken/no-op rename; no functional change. Likely to be closed. |

> **Note:** No substantive feature/fix PRs in this window. Core work appears to be landing via direct commits or internal branches.

---

## 5. Feature Request Trends (Distilled from All Issues)

1. **Interactive-mode granularity** — Tool whitelists (#1973), multi-turn `/ask` (#4577, #4538), `/fork` terminal spawning (#4578, #4580). Users want IDE-like control without leaving the terminal.
2. **MCP/OAuth hardening** — Entra ID scope handling (#4582), RFC 8414 compliance (#4490, #4584), tool deferral for all models (#4588), configurable handshake timeouts (#4421).
3. **Observability & cost transparency** — OTel billing attributes for subagents (#4224), raw token counts in status line (#4589), session usage accuracy (#4207 ref).
4. **Windows parity** — Worktree locking (#3255, #4593), plugin installs vs VS Code (#4570), path truncation options (#4591).
5. **Asset generation** — PDF upload (#4583), image generation for icons/OG/favicons (#4581) — extending CLI beyond text/code.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Unreliable MCP server lifecycle** | High | #4421 (no retry), #4590 (hook processor disposal), #4588 (tool deferral missing) |
| **OAuth/Auth regressions on enterprise IdPs** | High | #4490, #4582, #4584, #4408 — Entra ID, Atlassian, agentgateway all broken |
| **Windows file-locking & process management** | Medium | #4570 (VS Code conflict), #4593 (worktree archive), #3255 (stale locks) |
| **Context/compaction data loss** | Medium | #4572 (lost tool results), #4224 (missing billing spans) |
| **Interactive mode friction** | High | #1973 (no whitelist), #4577/#4538 (single-turn `/ask`), #4578/#4580 (fork UX) |
| **Silent cost inflation** | Emerging | #4588 (47k vs 21k tokens), #4224 (uncounted subagent spend) |

---

*Digest generated from GitHub data as of 2026-08-25 00:00 UTC. Links point to live issues/PRs for full context.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-25

## 1. Today's Highlights
No new releases or issues were recorded in the last 24 hours. The only activity is **PR #2595**, which addresses a data-corruption risk in `StrReplaceFile` by refusing to edit files containing invalid UTF-8 sequences. This fix prevents silent replacement of binary or malformed content with U+FFFD characters.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues
*No issues were created or updated in the last 24 hours.*

## 4. Key PR Progress
| PR | Title | Status | Summary |
|----|-------|--------|---------|
| [#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595) | `fix(StrReplaceFile): refuse to edit files that are not valid UTF-8` | **Open** (updated 2026-08-24) | Fixes **#2591**. `StrReplaceFile` previously decoded entire files with `errors="replace"`, causing *any* invalid UTF-8 byte—even far from the edit—to become U+FFFD on write. The PR adds a pre-flight UTF-8 validation and aborts with a clear error if the file is not valid UTF-8, preventing silent data corruption. Author: @shoemoney. |

## 5. Feature Request Trends
*Insufficient recent issue data to identify trends. Historically, the repo sees requests around:*
- **Multi-file / project-wide refactoring** tooling
- **Better LSP integration** for go-to-definition and diagnostics
- **Configurable approval policies** for destructive operations
- **Windows path/encoding compatibility** improvements

## 6. Developer Pain Points
*Based on the single active PR and its linked issue (#2591):*
- **Silent data corruption** when editing non-UTF-8 files (binary assets, legacy encodings, corrupted text) — the tool currently mangles content without warning.
- **Lack of guardrails** around file-system mutations; developers expect explicit failures over best-effort repairs.

---

*Data source: `github.com/MoonshotAI/kimi-cli` — 24h window ending 2026-08-25.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-25

---

## 1. Today's Highlights

OpenCode shipped **v1.18.22** with three targeted bugfixes: removal of stale Go pricing messaging, device-login URL handling for relative/base-path servers, and a provider-compatibility fix for `textVerbosity`. Meanwhile, the TUI v2 effort accelerates—multiple PRs land persistent terminal panes, workspaces, and PTY daemon infrastructure. A critical regression surfaces: **Zen/Go free models reject any request containing `tools`** (#44300), blocking agent workflows for free-tier users.

---

## 2. Releases

### v1.18.22 (2026-08-25)
| Area | Change |
|------|--------|
| Core | Removed outdated OpenCode Go first-month discount messaging and pricing |
| Auth | Fixed device login links when servers return relative verification URLs or use a base path |
| Providers | Fixed `textVerbosity` being sent to OpenAI-compatible providers that don’t support it ([@j...](https://github.com/anomalyco/opencode/pull/44683)) |

[Release link](https://github.com/anomalyco/opencode/releases/tag/v1.18.22)

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#44300](https://github.com/anomalyco/opencode/issues/44300) | **Zen API: free models fail on any request with `tools`** | Blocks agent/tool use for free-tier users on both Zen (`x-preview-f-free`) and Go (`ox-alpha-free`) routes. Regression since ~2026-08-23. | 7 comments, 1 👍 — active discussion, workarounds sought |
| [#32852](https://github.com/anomalyco/opencode/issues/32852) | **TUI sidebar “Modified Files” empty after session edits** | Core diff visibility broken; users can’t track session changes in sidebar. Confirmed on disk but not rendered. | 5 comments, 3 👍 — high visibility, affects daily workflow |
| [#17797](https://github.com/anomalyco/opencode/issues/17797) | **TUI: Modified files no longer shown (v1.2.27+)** | Long-standing regression; right-panel diff summary missing entirely. | 6 comments, 1 👍 — persists across versions |
| [#44646](https://github.com/anomalyco/opencode/issues/44646) | **Desktop app freezes after sending query (v1.18.21)** | App becomes unresponsive with both Go and Zen models; survives restarts. | 4 comments — potential blocker for desktop users |
| [#44577](https://github.com/anomalyco/opencode/issues/44577) | **DeepSeek: “API key invalid” for some models; missing GPT-5.6 Luna, GLM-5.3, Qwen3.8 Max** | Provider integration gaps; model catalog outdated for DeepSeek and other vendors. | 4 comments — international user impact |
| [#43938](https://github.com/anomalyco/opencode/issues/43938) | **TUI: directory indicator stale after `/move` in new session** | UX regression: worktree switch doesn’t update UI until activity occurs. | 2 comments, 2 👍 — PR #44829 targets fix |
| [#38986](https://github.com/anomalyco/opencode/issues/38986) | **SIGILL crash on AMD Ryzen Zen 3 (no AVX-512)** | Binary ships AVX-512 instructions; crashes on Zen 3 CPUs (e.g., 5600H). | 2 comments — architecture compatibility gap |
| [#39632](https://github.com/anomalyco/opencode/issues/39632) | **IME composition breaks on first keystroke in v2 prompt input** | CJK/input-method users can’t compose text in new prompt input; old layout works. | 2 comments, 2 👍 — i18n regression |
| [#44827](https://github.com/anomalyco/opencode/issues/44827) | **Cloudflare AI Gateway: non-OpenAI/Anthropic providers fail “Invalid provider”** | Google, xAI, Alibaba, DeepSeek, Moonshot all blocked by provider routing logic. | 1 comment, tagged `needs:compliance` |
| [#44821](https://github.com/anomalyco/opencode/issues/44821) | **OAuth transform treats Codex budget as endpoint context limit** | Causes premature compaction (hundreds of K tokens early) for ChatGPT OAuth users. | 1 comment — distinct from #38851 |

---

## 4. Key PR Progress (10 Important)

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#44683](https://github.com/anomalyco/opencode/pull/44683) | **feat(app): queue and steer follow-up prompts** | Feature | Implements Figma-designed follow-up delivery: Enter = queue/steer, Ctrl/Cmd+Enter = immediate. Adds durable inbox for reordering. |
| [#44838](https://github.com/anomalyco/opencode/pull/44838) | **feat(browser): add experimental desktop browser** | Feature | On-demand, opt-out Desktop browser + public Node host SDK. Chromium attaches only when pane visible; isolated WebContentsView + proxy networking. Replaces #39270/#39277/#39278. |
| [#42654](https://github.com/anomalyco/opencode/pull/42654) | **feat(tui): add persistent terminal panes** | Feature | Persistent PTY backend via `opencode-pty` sidecar; multi-client terminal workspaces in V2 TUI. Stale-registration recovery, global keybindings. |
| [#44837](https://github.com/anomalyco/opencode/pull/44837) | **feat(tui): refine persistent terminal panes** | Refinement | Layout, headers, focus ownership, render timing, live process labels, pane nav keybindings, BSP model removal. |
| [#44836](https://github.com/anomalyco/opencode/pull/44836) | **feat(tui): add persistent terminal workspaces** | Feature | Embedded terminals beside sessions + terminal-only tabs; snapshot/replay, controller sync, slash commands, home entry points. |
| [#44831](https://github.com/anomalyco/opencode/pull/44831) | **feat(core): add persistent terminal groups** | Core | Ordered session/terminal group schemas, ephemeral membership events, KV persistence with serialized mutations. |
| [#44832](https://github.com/anomalyco/opencode/pull/44832) | **feat(server): add persistent PTY daemon API** | Core | Authenticated client for `opencode-pty` daemon (protocol v6); group/terminal lifecycle, snapshots, replay, WS streams. |
| [#44834](https://github.com/anomalyco/opencode/pull/44834) | **feat(cli): embed persistent PTY service binaries** | Infra | Pins `opencode-pty v0.1.4` with SHA-256 checksums (6 archives); embeds in Bun/Node SEA bundles; content-addressed cache extraction. |
| [#44829](https://github.com/anomalyco/opencode/pull/44829) | **fix(tui): refresh directory after `/move` [v2]** | Bugfix | One-line fix for #43938: updates directory indicator immediately when `/move` selects existing worktree. |
| [#44830](https://github.com/anomalyco/opencode/pull/44830) | **feat(ai): parse partial tool input** | Core | Exposes cumulative best-effort parsed input on native tool deltas; retains raw delta + strict final parsing; 274 focused tests. |

---

## 5. Feature Request Trends

| Direction | Evidence |
|-----------|----------|
| **Persistent, multi-terminal workspaces in TUI** | #42654, #44836, #44837, #44831, #44832, #44834 — 6 PRs in 24h building PTY daemon, groups, embedded terminals, CLI embedding |
| **Follow-up/continuation UX** | #44683 (queue/steer), #44839 (in-tab new session button) — streamlining multi-turn flows |
| **Desktop browser integration** | #44838, #39270, #39277, #39278 — experimental browser pane + host SDK for web automation |
| **Agent/config extensibility** | #44842 (AGENTS.override.md support à la Codex), #44840 (materialize `@skill` mentions on prompt) |
| **Provider/model coverage expansion** | #44577 (DeepSeek, GPT-5.6 Luna, GLM-5.3, Qwen3.8 Max), #44827 (Cloudflare AI Gateway for non-OpenAI/Anthropic) |

---

## 6. Developer Pain Points (Recurring)

| Pain Point | Frequency / Signals |
|------------|---------------------|
| **Free-tier model tool support broken** | #44300 — `tools` array causes 404 on Zen/Go free routes; blocks agent use for non-paying users |
| **TUI diff/session visibility regressions** | #32852, #17797, #34620 — modified files, session diffs, change tracking missing since v1.16.x |
| **Desktop app instability** | #44646 (freeze on query), #38986 (SIGILL on AMD Zen 3), #39632 (IME breakage in v2 input) |
| **Provider integration gaps** | #44577 (DeepSeek auth + missing models), #44827 (Cloudflare gateway routing), #43824 (Bedrock Grok validation), #44821 (OAuth budget misinterpretation) |
| **Core filesystem/session sync issues** | #44568 (FS reads probe server for workspace locations), #43938 (stale directory after `/move`) |
| **Prompt/context limit surprises** | #44823 (“Prompt exceeds max length” mid-conversation), #44821 (premature compaction from Codex budget) |

---

*Generated from GitHub data (anomalyco/opencode) for 2026-08-25. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-25

## Today's Highlights
Pi v0.84.3 ships a native **PowerShell tool** for Windows and **safer managed updates** with staging, verification, and atomic activation. The community is actively debating Windows support strategy (#7547, 44 comments) while critical bugs around auto-compaction thresholds (#6879), Gemini 3.x `thought_signature` handling (#6996), and provider stream stalls (#8331) receive fixes in today's PRs.

---

## Releases
### v0.84.3
- **PowerShell tool (Windows)**: Optional native PowerShell command execution via `pwsh`; see [Windows docs](https://github.com/earendil-works/pi/blob/v0.84.3/packages/coding-agent/docs/windows.md#powershell-tool).
- **Safer managed updates**: Updates are now staged, verified, and atomically activated to reduce broken installs.
- **Full release notes**: [v0.84.3](https://github.com/earendil-works/pi/releases/tag/v0.84.3)

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows strategy**: Too many ways to run Pi on Windows; need focus on docs, bugs, out-of-box experience | 44 comments, 2 👍 — Highest engagement; maintainers asking community to prioritize supported paths |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **Auto-compaction never triggers past 100%** until provider overflow (373k tokens) | 22 comments, 19 👍 — Critical reliability bug; affects long-running agentic sessions |
| [#6996](https://github.com/earendil-works/pi/issues/6996) | **Gemini 3.x fails on tool use** — missing `thought_signature` in history via OpenAI-compatible endpoints | 6 comments — Blocks Gemini 3.x on OpenRouter/Copilot/gateways; fix merged today (#8590) |
| [#8331](https://github.com/earendil-works/pi/issues/8331) | **Agent loop hangs forever** when provider SSE stream stalls mid-response (Anthropic 529) | 3 comments — Causes frozen sessions; fix merged today (#8593) with idle timeout |
| [#8133](https://github.com/earendil-works/pi/issues/8133) | **Per-model compaction settings** — global `reserveTokens` doesn't fit mixed context windows (200K vs 1M) | 4 comments, 3 👍 — Important for multi-model workflows; implemented in #8592 |
| [#6922](https://github.com/earendil-works/pi/issues/6922) | **Default model cannot be llama.cpp** — shows "No models available" on startup | 11 comments, 14 👍 — Blocks local-model-first workflows; closed/fixed |
| [#7444](https://github.com/earendil-works/pi/issues/7444) | **WebSocket retry only handles 2 error codes**; other transient `response.failed` hard-stop turns | 9 comments — Reliability gap in OpenAI Codex Responses path |
| [#8584](https://github.com/earendil-works/pi/issues/8584) | **TUI row corruption**: assistant text renders one word per line after long tool output | 1 comment, 1 👍 — Visual regression affecting readability |
| [#8586](https://github.com/earendil-works/pi/issues/8586) | **OpenAI streams ignore abort signal mid-turn** — RPC aborts don't cancel in-flight responses | 1 comment — Unlike Anthropic path; fix merged in #8585 |
| [#8591](https://github.com/earendil-works/pi/issues/8591) | **Request musl-linked builds** for Alpine Linux (linux-musl-arm64/x64) | 1 comment — Deployment friction for container/Alpine users |

---

## Key PR Progress (Top 10 Merged/Open)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#8593](https://github.com/earendil-works/pi/pull/8593) | **fix(agent)** | **Merged** — Adds idle timeout to end stalled provider SSE streams (closes #8331) |
| [#8592](https://github.com/earendil-works/pi/pull/8592) | **feat(coding-agent)** | **Merged** — Per-model compaction profiles via `compaction.profiles` map in settings (closes #8133) |
| [#8590](https://github.com/earendil-works/pi/pull/8590) | **fix(ai)** | **Merged** — Round-trips Gemini `thought_signature` through OpenAI-compatible layer (closes #6996) |
| [#8585](https://github.com/earendil-works/pi/pull/8585) | **fix(ai)** | **Merged** — Abort OpenAI streams immediately on signal fire (closes #8586) |
| [#8580](https://github.com/earendil-works/pi/pull/8580) | **feat(coding-agent)** | **Merged** — Drops extra vertical padding on tool rows; reduces transcript bloat |
| [#8575](https://github.com/earendil-works/pi/pull/8575) | **fix(coding-agent)** | **Merged** — Surfaces & bounds torn-append replay loss in session JSONL (silent data loss) |
| [#8573](https://github.com/earendil-works/pi/pull/8573) | **feat(ai)** | **Open** — Amazon Bedrock Mantle Anthropic Messages routing (follow-up to #8572) |
| [#8572](https://github.com/earendil-works/pi/pull/8572) | **feat(ai)** | **Open** — Amazon Bedrock Mantle support for new GPT models via Mantle API |
| [#8570](https://github.com/earendil-works/pi/pull/8570) | **fix(ai)** | **Merged** — Preserves Codex `thread-id` affinity header for session continuity |
| [#8512](https://github.com/earendil-works/pi/pull/8512) | **feat(coding-agent)** | **Merged** — Adds optional PowerShell tool (shipped in v0.84.3) |

---

## Feature Request Trends
1. **Provider ecosystem expansion** — 5+ issues/PRs requesting new providers: SiliconFlow (#4742), Eden AI (#6403), Parasail (#8450), Merge Gateway (#5986), Bedrock Mantle (#8572).
2. **Model catalog freshness** — Rapid addition of new models (DeepSeek vision #8546, Gemini 3.x, GPT-5.x via Bedrock) and llama.cpp preset handling (#8479, #8558).
3. **Session/agent portability** — Presets export/import (`pi preset` #8588), shared session UX fixes (#8569, #8574).
4. **Compaction granularity** — Per-model profiles (#8133 ✓), extension-provided compaction hooks (#8589).
5. **TUI/UX polish** — Mouse cursor positioning (#8547), OSC-133 jump markers for tool-call messages (#8410), fullscreen overlay policies (#8475).
6. **Platform support** — musl/Alpine builds (#8591), Windows PowerShell parity (#8512 ✓, #8582).

---

## Developer Pain Points
- **Windows fragmentation** — "Gazzilion ways to run Pi on Windows" (#7547); path handling breaks unix/Windows tools; PowerShell 5.1 vs 7 inconsistency (#8582).
- **Stream reliability** — Provider SSE stalls hang agent loop indefinitely (#8331); OpenAI streams ignore abort signals (#8586); WebSocket retry gaps (#7444).
- **Compaction unpredictability** — Global threshold fails for mixed context windows (#8133); compaction triggers only at provider overflow (#6879); Anthropic refusal classifier breaks compaction (#8017).
- **Extension/schema overhead** — Heavy tool schemas bloat startup context (#8583); no lazy-loading mechanism.
- **Session data integrity** — Torn JSONL lines silently drop two entries (#8575); concurrent `/share` overwrites exports (#8574); partial image conversions overwrite finals (#8577).
- **Model compatibility** — llama.cpp default model blocked (#6922); Gemini 3.x `thought_signature` dropped (#6996); DeepSeek vision missing from catalog (#8546).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-25

---

## 1. Today's Highlights
- **Nightly v0.22.0** shipped with a web-shell fix for session workspace CWD handling and the **cua-driver-rs v0.20.0** prebuilt binaries (macOS notarized, Linux/Windows unsigned, Node.js bundled).  
- **Review subsystem** sees heavy investment: containerized execution for reviewed repos, execution-grade Step 4 verification, content-anchored incremental rounds, and recoverable deferred suggestions.  
- **MCP/channel reliability** improved: HTTP MCP server restart recovery, DingTalk rich-text multi-image preservation, and session-rotation bounds for channel lifetimes.

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| `v0.22.0-nightly.20260825.22bb5e8b9f` | Nightly | • `fix(web-shell)`: pass session workspace CWD when opening from overview panel ([#9730](https://github.com/QwenLM/qwen-code/pull/9730))<br>• **cua-driver-rs v0.20.0** vendored: macOS codesigned/notarized universal binary + `QwenCuaDriver.app`; Linux (x86_64/arm64, glibc 2.31); Windows (x86_64/arm64); Node.js single workflow publish |

---

## 3. Hot Issues (3 updated in last 24h — all shown)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#6094](https://github.com/QwenLM/qwen-code/issues/6094)** `[P2, bug, integration, session-management]` Cron/blockStreaming duplicate messages + botOpenId timing | Core bot integration flaw: `blockStreaming: 'on'` breaks `streamState` population, causing duplicate chunks in cron handlers; deferred from PR #5902. | 5 comments, created 2026-07-01, still open — indicates non-trivial fix. |
| **[#7167](https://github.com/QwenLM/qwen-code/issues/7167)** `[status/need-information, ci-cd]` Fleet Shepherd Dashboard | Auto-maintained bot fleet health dashboard; shows CI red on PR #9305, zero syncs/dispatches/releases/cleanups this tick. | 3 comments; bot-authored — reflects infra observability investment. |
| **[#9968](https://github.com/QwenLM/qwen-code/issues/9968)** Deferred review findings from PR #9350 | Autofix loop surfaced verified but out-of-scope review findings; maintainers can promote to issues/PRs or ready-for-agent flow. | 0 comments; brand new — tracks technical debt from review pipeline. |

---

## 4. Key PR Progress (10 selected for impact)

| PR | Area | Summary |
|----|------|---------|
| **[#9970](https://github.com/QwenLM/qwen-code/pull/9970)** | `perf(cli)` | Reduces TUI render overhead via incremental terminal output in virtual-viewport mode + memoized history slice; legacy rendering untouched. |
| **[#9813](https://github.com/QwenLM/qwen-code/pull/9813)** | `feat(triage)` | Assigns a single accountable owner on PR open and on deferral — replaces noisy `@mentions` with actionable `Assigned` filter visibility. |
| **[#9945](https://github.com/QwenLM/qwen-code/pull/9945)** | `fix(core)` | Adds idle + lifetime watchdogs to Anthropic streams (mirroring OpenAI wire), preventing silent 200 responses or endless low-content `thinking_delta` frames. |
| **[#9723](https://github.com/QwenLM/qwen-code/pull/9723)** | `feat(review)` | Runs reviewed repo’s own commands inside a container boundary; execution becomes operator policy, not ambient environment dependency. |
| **[#9962](https://github.com/QwenLM/qwen-code/pull/9962)** | `fix(mcp)` | Recovers restarted HTTP MCP servers in-session/CLI by repairing `mcp-session-id` on tool-call failure — fixes 4 stacked defects. |
| **[#9740](https://github.com/QwenLM/qwen-code/pull/9740)** | `feat(review)` | Makes `/review` Step 4 execution-grade: new `qwen review ab-drive` runs one script against PR and base trees, reporting paired captures. |
| **[#8943](https://github.com/QwenLM/qwen-code/pull/8943)** | `feat(review)` | Dispatches Step 3A fan-out via generated workflow script (`qwen review emit-workflow`); legacy path preserved, single switch to revert. |
| **[#9394](https://github.com/QwenLM/qwen-code/pull/9394)** | `feat(channels)` | Adds built-in **DingTalk Workspace** channel: DMs, @mentions, ambient groups, document-mention notifications, native todos, source-scoped sessions. |
| **[#8927](https://github.com/QwenLM/qwen-code/pull/8927)** | `feat(channels)` | Per-channel `sessionRotation` bounds session lifetime via `maxTurns` or `maxAge`; auto-starts fresh session when bound exceeded. |
| **[#9969](https://github.com/QwenLM/qwen-code/pull/9969)** | `fix(core)` | Older-Git archive fallback (pre-2.37) now accepts contained symlinks (targets resolving inside archive); rejects absolute/Windows-drive targets. |

---

## 5. Feature Request Trends (distilled from Issues + PRs)
1. **Review pipeline hardening** — container isolation, execution-grade verification, incremental rounds, recoverable deferrals, workflow-driven fan-out.  
2. **Channel/integration maturity** — DingTalk Workspace support, session-rotation bounds, rich-media preservation, MCP restart resilience.  
3. **Developer experience polish** — TUI render performance, bottom-aligned viewport, instant sidebar session state sync, accountable triage assignment.  
4. **Observability & reliability** — stream watchdogs (idle/lifetime), telemetry aggregate correctness on session swap failure, CI command neutralization.  
5. **Backward-compat escapes** — older-Git symlink handling, legacy terminal rendering path preserved, opt-in new workflow dispatch.

---

## 6. Developer Pain Points (recurring themes)
- **Stream reliability**: Silent/hanging Anthropic/OpenAI streams causing stalled sessions → watchdog PRs (#9945) directly address this.  
- **Session state fragmentation**: Pin/archive not reflecting instantly (#9598), session swap telemetry double-counting (#9844), MCP session-id loss on restart (#9962).  
- **Review trust gaps**: Running reviewed code in host env (#9723), verification lacking execution evidence (#9740), deferred suggestions disappearing (#9761).  
- **Bot/integration noise**: Triage `@mentions` lost in notifications (#9813), cron+blockStreaming duplicate emissions (#6094), legacy CI command leakage (#9871).  
- **Viewport ergonomics**: Short conversations top-aligned leaving composer gap (#9305) — fixed by bottom-align.  

---

*Generated from `github.com/QwenLM/qwen-code` data as of 2026-08-25. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-25

## Today's Highlights
The v0.9.12 release cycle is in its final integration phase with all P0 blockers resolved; PR #5576 marks the branch code-complete pending version bump and release gates. Concurrently, a major provider-neutrality audit (#5588) identified 18 DeepSeek-hardcoded gates slated for removal, and a structural refactor (#5586) targets four 10k+-line files to reduce maintenance friction. Windows shell decoding reliability (#5602) and supervised-operation primitives (control socket, `/relaunch`, lifecycle outbox) are landing in parallel.

## Releases
*No new releases in the last 24 hours.* The v0.9.12 milestone tracker (#5573) indicates a ship target once version bump, changelog, and publish gates (crates.io, npm, website) are green.

---

## Hot Issues (10 Noteworthy)

| # | Title | State | Why It Matters | Community Signal |
|---|-------|-------|----------------|------------------|
| [#5588](https://github.com/Hmbown/CodeWhale/issues/5588) | Provider neutrality: 18 DeepSeek-exclusive gates | OPEN | Systematic audit of 2,281 lines across 279 files; removes provider lock-in for NVIDIA NIM, OpenRouter, etc. | Authored by maintainer Hmbown; 4 comments; blocks multi-provider parity |
| [#5586](https://github.com/Hmbown/CodeWhale/issues/5586) | Decompose mega files: lib.rs (18.7k), config.rs (12.3k), client.rs (11.1k), runtime_threads.rs (9.3k) | OPEN | Directly addresses maintainability pain; enables PR-sized reviews and test isolation. | Maintainer-tracked; 3 comments; linked to v0.9.12 cleanup lane |
| [#5573](https://github.com/Hmbown/CodeWhale/issues/5573) | v0.9.12 milestone tracker — start here | OPEN | Single source of truth for release blockers (P0 money/safety items), integration branch status, and ship gates. | 3 comments; actively updated as PRs land |
| [#5585](https://github.com/Hmbown/CodeWhale/issues/5585) | Test stack overflow: `setup_confirm_toast_names_secret_store_and_global_scope` | OPEN | Pre-existing SIGABRT on macOS under nextest; blocks CI confidence for unrelated changes. | Bisected to 12553c5; 3 comments; needs stack-size or recursion fix |
| [#5551](https://github.com/Hmbown/CodeWhale/issues/5551) | TUI: focused-block actions (y/Y/Enter/r) | OPEN | Adds per-message copy, fullscreen, raw markdown — core UX gap in transcript interaction. | 2 comments; keybindings to be catalogued in `docs/KEYBINDINGS.md` |
| [#5589](https://github.com/Hmbown/CodeWhale/issues/5589) | Fleet config view: Enter loops, model switching buried | OPEN | User-reported UX regression in fleet role editing; impacts multi-model workflow discoverability. | Screenshot attached; 2 comments; PR #5604 addresses focused slice |
| [#5601](https://github.com/Hmbown/CodeWhale/issues/5601) | Fresh install: MiniMax/Xiaomi 404 on API key entry | OPEN | Provider endpoint misconfiguration blocks non-DeepSeek models out of the box. | 2 comments; user forced to v0.6 workaround; high impact for new users |
| [#5553](https://github.com/Hmbown/CodeWhale/issues/5553) | `/context`: attribute token cost to tool definitions & MCP servers | OPEN | Cost transparency for tool catalog and MCP announcements; helps users trim context bloat. | 2 comments; display-only, KV-cache rules unchanged; PR #5603 implements |
| [#5596](https://github.com/Hmbown/CodeWhale/issues/5596) | Turn end silently cancels turn-owned subagents | CLOSED | Critical data-loss bug: background reviewers destroyed without warning on parent turn end. | 1 comment; fixed in v0.9.12 integration branch |
| [#5597](https://github.com/Hmbown/CodeWhale/issues/5597) | Detached agents lose post-turn usage from session totals | OPEN | Cost accounting gap: usage after `TurnComplete` not rolled up to session projection. | 1 comment; affects billing/observability for long-running children |

---

## Key PR Progress (10 Important)

| # | Title | State | Description |
|---|-------|-------|-------------|
| [#5576](https://github.com/Hmbown/CodeWhale/pull/5576) | 0.9.12 integration: must-fix + UX fixes (WIP) | OPEN | **Integration branch** (72 commits) — all P0 blockers done; gated on version bump/changelog/release gates. |
| [#5602](https://github.com/Hmbown/CodeWhale/pull/5602) | fix(shell): decode Windows output reliably | OPEN | Preserves UTF-8/ANSI across shell reads; strict UTF-8 first, fallback to ACP; covers sync, detached, tail paths. |
| [#5594](https://github.com/Hmbown/CodeWhale/pull/5594) | control socket — part d (final) | OPEN | Opt-in Unix JSON-RPC socket per session (`[control_socket] enabled = true`); enables machine supervision. |
| [#5593](https://github.com/Hmbown/CodeWhale/pull/5593) | `/relaunch` command — part c | OPEN | Self-relaunch after `/update`: persists session, restores terminal, flushes telemetry, emits `session_end`. |
| [#5592](https://github.com/Hmbown/CodeWhale/pull/5592) | lifecycle outbox — part b | OPEN | Opt-in `[lifecycle_outbox]` JSONL/webhook for turn/subagent/session events; works in TUI and `exec` headless. |
| [#5606](https://github.com/Hmbown/CodeWhale/pull/5606) | feat(runtime): 0.9.12 relay integration | CLOSED | Unifies managed Chat with native runtime threads (idempotency), R2 approval fix, `doctor --fix` with consent. |
| [#5584](https://github.com/Hmbown/CodeWhale/pull/5584) | fix(subagents): persist child approval receipts | OPEN | Inherits session approval store in children; commits `Asked` before prompt, terminal outcomes before close. |
| [#5604](https://github.com/Hmbown/CodeWhale/pull/5604) | feat(tui): make Fleet roster editing discoverable | OPEN | Adds `[edit]` affordance on selected members, `m model` footer hint, opens fleet detail editor directly. |
| [#5603](https://github.com/Hmbown/CodeWhale/pull/5603) | feat(tui): show tool and MCP schema costs | OPEN | Context inspector now shows catalog total, per-tool rows (sorted by cost), MCP server rows with omitted-count summary. |
| [#5599](https://github.com/Hmbown/CodeWhale/pull/5599) | feat(tui): add capability-gated cursor accent | CLOSED | OSC 12/112 cursor accent on start/exit; guarded by terminal capability, disabled in reduced-motion/plain mode. |

---

## Feature Request Trends
1. **Provider neutrality & multi-provider parity** — Systematic removal of DeepSeek-only gates (#5588), fixes for NVIDIA NIM/OpenRouter/MiniMax/Xiaomi endpoint configs (#1482, #5601), OAuth2.1 for MCP (#1409).
2. **TUI transcript interactivity** — Per-block actions (copy, fullscreen, raw markdown) (#5551), fleet roster discoverability (#5589, #5604), cursor accent theming (#5554, #5599).
3. **Cost & context observability** — Token attribution for tools/MCP in `/context` (#5553, #5603), session cost rollup for detached agents (#5597), cache-prefix debugging (#5571).
4. **Session resilience & supervision** — Control socket, lifecycle outbox, `/relaunch`, goal-continuation cadence fix (#5591, #5592, #5593, #5594), cross-session memory (#2492).
5. **Codebase health** — Mega-file decomposition (#5586), dead-code sweep (#5587), stale branch cleanup (#5057), dependency bumps (jsonschema, rmcp).

---

## Developer Pain Points
- **Monolithic files** — Four core files >10k lines each impede reviews, testing, and onboarding (#5586).
- **Provider lock-in** — 18+ hardcoded DeepSeek gates break NVIDIA NIM, OpenRouter, MiniMax, Xiaomi out of the box (#5588, #1482, #5601).
- **Flaky CI** — Stack overflow in toast test (#5585), remote_control race under parallel load (#5605) erode confidence.
- **Subagent lifecycle gaps** — Silent cancellation on turn end (#5596), usage accounting loss for detached children (#5597), approval receipt durability (#5584).
- **Configuration friction** — Fresh-install 404s for non-DeepSeek providers (#5601), no cross-session memory (#2492), fleet model switching buried (#5589).
- **Windows shell encoding** — ANSI/UTF-8 splits across reads corrupt output (#5602).
- **Documentation drift** — Release runbook gaps for unpublished-tag recovery (#5565), credit-check scope bugs (#5598).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*