# AI CLI Tools Community Digest 2026-08-10

> Generated: 2026-08-10 02:21 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-10)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **stabilization and hardening phase** rather than feature expansion. Across 9 active projects, zero major version releases shipped in the last 24 hours; instead, teams are shipping nightly builds (Gemini, Qwen, DeepSeek) and closing high-impact reliability bugs. The dominant theme is **session durability** — resume, persistence, compaction, and multi-device continuity — reflecting that developers now treat these tools as daily drivers for long-running engineering work, not chat novelties. Windows remains a second-class platform for most tools (Codex, Copilot, Gemini), while enterprise readiness (MCP, auth, model governance) is a cross-cutting concern. Community engagement is high on pain-point issues (memory leaks, clipboard, safety false positives), signaling production adoption friction.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Top Community Signal |
|------|---------------------|-------------------|----------------|----------------------|
| **Claude Code** | 10 hot + cluster of 5 safety issues | 5 | None | #28745: 76 👍 (resume across dirs) |
| **OpenAI Codex** | 10 hot + 4 Windows Computer Use cluster | 8 (6 closed) | None | #4003: 74 👍 (line-endings, fixed) |
| **Gemini CLI** | 10 hot | 10 | **v0.56.0-nightly** | #22323: 12 comments (subagent false success) |
| **GitHub Copilot CLI** | 25 updated (16 new today) | 0 | None | #1857: 26 👍 (cancel queued msgs) |
| **Kimi Code CLI** | 2 updated | 1 | None | #1283: 27 comments (memory system) |
| **OpenCode** | 10 hot | 50 | None | #20695: 124 comments/96 👍 (memory leaks) |
| **Pi** | 10 hot (6 closed) | 11 (11 closed) | None | #6922: 14 👍 (llama.cpp default model, fixed) |
| **Qwen Code** | 4 updated | 10 | **v0.21.8-nightly** | #8718: 8 comments (multi-agent RFC) |
| **DeepSeek TUI** | 10 hot | 3 (2 merged) | **v0.9.6** | #5239: compaction at 128K vs 1M models |
| **Grok Build** | 0 | 0 | None | No activity |

> **Note**: Issue/PR counts reflect *updated* items in the last 24h per digest methodology, not total backlog.

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Session Portability & Resume** | Claude Code (#28745), Gemini CLI (#27373, #28744), OpenCode (#39358), Qwen Code (#8728), DeepSeek (#4394), Kimi (#1283) | Resume across directories/machines; survive auto-updates; durable archival; structured survival contracts for compaction |
| **MCP / Tool Protocol Hardening** | Codex (#15299, #36211), Copilot CLI (#4421, #4370), Pi (#7344), OpenCode (#41459) | Inbound notifications; retry/timeout config; unimplemented-method fallback; sequential policy enabling |
| **Multi-Agent / Subagent Orchestration** | Qwen Code (#8718, #8804), Gemini CLI (#28738), OpenCode (#13715), DeepSeek (#5270, #5287), Copilot CLI (#4306) | Recursive agent calls; unified task surfaces; stable display identity; permission prompt rendering for nested agents |
| **Model Control & Fallback** | Claude Code (#67246), OpenCode (#7602), Pi (#785), DeepSeek (#5034), Copilot CLI (#4422, #4416) | Override safety downgrades; cross-model failover; disable streaming for proxies; atomic provider+model switch |
| **Windows Parity** | Codex (#37043, #37752), Copilot CLI (#4415), Gemini CLI (#21983), OpenCode (#41284) | Computer Use (EnumWindows); app crash loops; sandbox ACL hangs; TUI startup freezes |
| **Observability & Debuggability** | Claude Code (#85416, #83913), OpenCode (#41450), Qwen Code (#8728), DeepSeek (#5096), Pi (#7868) | Subagent effort visibility; cache invalidation signals; live session registry; compaction gain visibility; structured error payloads |
| **Enterprise/Auth Reliability** | Copilot CLI (#4422, #4409), Codex (#21594), Pi (#7851), OpenCode (#40997) | Model entitlement visibility; OAuth/device auth stability; BYOK/Custom provider support; integration prompt validation |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | Safety-governed enterprise coding | Enterprise teams, security-sensitive orgs | Proprietary models (Opus/Sonnet/Fable); heavy safety classifiers; Desktop + CLI dual track |
| **OpenAI Codex** | Cloud-integrated agent platform | OpenAI ecosystem users, Codespaces/VS Code devs | Sandboxed execution; gRPC hosts; Computer Use; MCP-first integration |
| **Gemini CLI** | Google ecosystem & eval-driven reliability | Google Cloud devs, eval-heavy teams | Nightly cadence; massive dep updates; component-level evals (76 tests × 6 models); ACP protocol |
| **GitHub Copilot CLI** | GitHub-native workflow & Enterprise | GitHub Enterprise orgs, Copilot subscribers | Deep GH integration (remote, PRs); MCP servers; fleet/autopilot modes; VS Code extension |
| **Kimi Code CLI** | Lightweight, memory-first agent | Individual devs, automation scripts | ACP/print streaming; Google GenAI provider; minimal config; memory system as differentiator |
| **OpenCode** | Hackable, local-first TUI power user | TUI enthusiasts, local-model users, hackers | v2 rewrite (React/RTL); provider-agnostic; deep customization; memory leak hunting via community |
| **Pi** | Extensible coding agent platform | Extension authors, multi-provider users | Protocol-first (pi-protocol); llama.cpp native; extension command routing; TUI polish |
| **Qwen Code** | Multi-agent orchestration & cloud IDE | Alibaba Cloud users, agent-team builders | Native agent teams; Web Shell daemon; OpenTUI/React renderer; Goal v3 unification |
| **DeepSeek TUI** | Subtractive runtime & Fleet ops | Power users running long fleet sessions | Single-provider compaction; committed successor handoff; unified tasks surface; whale-themed UX |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenCode**, **Pi**, **Qwen Code**, **Gemini CLI** | 50 PRs/24h (OpenCode); 11 PRs closed/24h (Pi); nightly releases + 10 PRs (Qwen, Gemini); massive dep bumps (Gemini 74 pkgs) |
| **High Engagement / Production Pain** | **Claude Code**, **OpenAI Codex**, **GitHub Copilot CLI** | 76 👍 on resume issue (Claude); 74 👍 on line-endings (Codex); 25 issues updated/24h with 16 new (Copilot); enterprise-blocking regressions |
| **Niche / Focused Community** | **DeepSeek TUI**, **Kimi Code CLI** | DeepSeek: v0.9.6 subtractive release, strong UX design discourse; Kimi: 27-comment memory thread, but low overall volume |
| **Dormant / Early** | **Grok Build** | Zero activity in 24h; no digest data |

**Maturity signals**: Tools with nightly releases (Gemini, Qwen, DeepSeek) show release automation maturity. Tools with protocol packages (Pi's `pi-protocol`, Qwen's ACP, Codex's MCP) show platform ambition. Enterprise-focused tools (Claude, Copilot) show auth/entitlement complexity as maturity tax.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication for Developers |
|-------|----------------|----------------------------|
| **Session durability > raw model capability** | ★★★★★ (9/9 tools) | Choose tools with proven resume/archival; evaluate compaction contracts before committing to long-running workflows |
| **MCP becoming the universal tool ABI** | ★★★★☆ (5/9 tools active) | Invest in MCP server development; expect CLI vendors to compete on MCP reliability (timeouts, retries, notifications) |
| **Multi-agent is the next UX frontier** | ★★★★☆ (6/9 tools) | Prototype with Qwen/OpenCode/Gemini native teams; watch for standardization of agent-to-agent protocols |
| **Windows is a blocker, not a target** | ★★★★☆ (4/9 tools with critical Windows bugs) | If on Windows: Codex (Computer Use broken), Copilot (app crashes), Gemini (Wayland/browser), OpenCode (TUI freeze) — validate your workflow before standardizing |
| **Safety/enterprise filters causing false positives** | ★★★☆☆ (Claude, Copilot, Codex) | Budget time for safety override workflows; negotiate model governance policies early in enterprise adoption |
| **Local-first / provider-agnostic gaining traction** | ★★★☆☆ (OpenCode, Pi, DeepSeek, Kimi) | Evaluate OpenCode/Pi for air-gapped or multi-provider strategies; avoid vendor lock-in via protocol-layer tools |
| **Observability as differentiator** | ★★★☆☆ (Claude, OpenCode, Qwen, DeepSeek) | Demand session registries, compaction visibility, structured errors — these reduce debug time 10× in production |

---

## Recommendation Summary

| If your priority is... | Primary Candidate | Secondary Candidate |
|------------------------|-------------------|---------------------|
| **Enterprise safety & compliance** | Claude Code | GitHub Copilot CLI |
| **GitHub-native workflow** | GitHub Copilot CLI | OpenAI Codex |
| **Multi-agent orchestration** | Qwen Code | OpenCode / Gemini CLI |
| **Local-first / hackable TUI** | OpenCode | Pi / DeepSeek TUI |
| **Cloud IDE / Web Shell** | Qwen Code | OpenAI Codex / Gemini CLI |
| **Minimal config / memory-first** | Kimi Code CLI | DeepSeek TUI |
| **Windows reliability** | *None fully mature* | Test Codex CLI (not Desktop) / Gemini CLI with WSL |

> **Bottom line**: The ecosystem is converging on **session durability, MCP, and multi-agent** as table stakes. Differentiation now lies in *reliability execution* (not feature lists). Validate your specific workflow (Windows? Enterprise auth? Long sessions? Local models?) against current pain points before standardizing.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-10 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **skill-creator evaluation pipeline fixes** (#1298, #1323, #1099, #1050, #1261) | Tooling that auto-generates/optimizes skill descriptions via `run_eval.py` → `run_loop.py` | Core bug: **0% recall on every query** (Issue #556, 12 comments; Issue #1169). Windows subprocess/encoding crashes. Trigger detection fails to recognize skill names. Parallel workers pollute live `.claude/commands/`. | 🟢 Open (5 related PRs) |
| 2 | **document-typography** (#514) | Prevents orphans/widows, heading-stranding, numbering misalignment in AI-generated docs | Addresses universal pain point: “Users rarely ask for good typography but always notice bad typography.” | 🟢 Open |
| 3 | **self-audit** (#1367) | Mechanical file verification → 4-dimension reasoning audit (correctness, completeness, clarity, safety) | Universal, stack-agnostic quality gate. Proposes “damage-severity priority order” for findings. | 🟢 Open |
| 4 | **testing-patterns** (#723) | Full testing stack: Trophy model, AAA, React Testing Library, contract testing, E2E, property-based, mutation testing | Comprehensive reference skill; fills gap in current collection. | 🟢 Open |
| 5 | **skill-quality-analyzer / skill-security-analyzer** (#83) | Meta-skills scoring skills across 5 dimensions (structure, examples, resources, triggers, maintainability) + threat modeling | Enables marketplace quality governance. | 🟢 Open |
| 6 | **color-expert** (#1302) | Color naming systems (ISCC-NBS, Munsell, XKCD, RAL…), space selection guide (OKLCH, OKLAB, CAM16), accessibility contrast, gamut mapping | Deep domain skill for any color-related task. | 🟢 Open |
| 7 | **ODT (OpenDocument)** (#486) | Create/fill/read/convert .odt/.ods via pyexcel-ods3, lxml; template filling, HTML round-trip | ISO-standard alternative to DOCX; requested for open-source workflows. | 🟢 Open |
| 8 | **plan-file-hygiene** (#1479) | Lifecycle management for planning artifacts (creation, review, archival, deletion) | Addresses #1417: “planning artifacts accumulate with no lifecycle.” | 🟢 Open |

> **Note:** All PRs above are **Open** as of 2026-08-10. None have been merged yet.

---

## 2. Community Demand Trends (from Issues)

| Trend | Evidence (Issues) | Community Signal |
|-------|-------------------|------------------|
| **Trust & Namespace Security** | #492 (43 comments, 2 👍) — Community skills masquerading as official `anthropic/` namespace | **Highest engagement**; users demand clear provenance & install-time warnings |
| **Organizational Skill Sharing** | #228 (16 comments, 8 👍) — No native org-wide library; manual file transfer via Slack/Teams | Strong 👍/comment ratio → latent enterprise demand |
| **Skill Creator Reliability** | #556 (12 comments, 7 👍), #1169 (3 comments, 1 👍) — `run_eval.py` 0% recall blocks description optimization | Core tooling broken; blocks new skill authoring |
| **Duplicate/Conflicting Bundles** | #189 (6 comments, 9 👍) — `document-skills` & `example-skills` install identical content | Packaging hygiene issue; wastes context window |
| **Context Window Pressure** | #1487 (4 comments) — `claude-api` skill injects ~156k tokens in one call | Skills must become token-aware |
| **MCP/External Integration** | #16 (4 comments) — Expose skills as MCPs; #29 (4 comments) — Bedrock support | Demand for **portability beyond Claude Code** |
| **Governance & Safety Skills** | #412 (closed, 6 comments) — Agent governance (policy, threat detection, audit trails) | Niche but articulated need; no active PR yet |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land Soon)

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **#1298 / #1323 / #1099 / #1050 / #1261** | skill-creator evaluation pipeline fixes | 5 PRs + 2 high-comment issues (#556, #1169); blocks all new skill authoring; Windows fixes are trivial |
| **#514** | document-typography | Universal need, well-scoped, no dependencies |
| **#1367** | self-audit | Meta-skill; aligns with #1385 (Reasoning Quality Gate proposal, 4 comments) |
| **#723** | testing-patterns | Comprehensive, reference-quality; fills documented gap |
| **#83** | skill-quality-analyzer / skill-security-analyzer | Enables marketplace governance; referenced in #492 trust discussion |
| **#1479** | plan-file-hygiene | Directly addresses filed issue (#1417); community-credited design |
| **#538 / #541 / #539** | pdf/docx/skill-creator YAML fixes | Targeted bug fixes; low risk, high utility |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for *reliable skill authoring tooling* (fixing the broken `skill-creator` evaluation loop) and *trustworthy skill distribution* (namespace security, org sharing, deduplication) — not for new domain skills.**  

The top 3 issues by engagement (#492, #228, #556) are all **infrastructure/governance** concerns. Domain skills (typography, testing, color, ODT) are well-represented in PRs but generate far less discussion than the meta-problems of *creating, sharing, and trusting* skills.

---

## Quick Links

- **Repository**: https://github.com/anthropics/skills
- **Top Issue (Trust)**: #492
- **Top Issue (Sharing)**: #228
- **Core Tooling Bug**: #556
- **Skill Creator Fixes**: #1298, #1323, #1099, #1050, #1261
- **Document Typography**: #514
- **Self-Audit**: #1367
- **Testing Patterns**: #723
- **Quality Analyzers**: #83
- **Plan Hygiene**: #1479

---

# Claude Code Community Digest — 2026-08-10

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The issue tracker shows **heavy friction around model safety classifiers** — multiple reports of Fable 5 incorrectly flagging benign engineering content (defensive security audits, routine CI hardening) and forcibly downgrading sessions to Opus 4.8 without override capability. Concurrently, developers are vocal about **session continuity gaps**: resume-from-different-directory (#28745, 76 👍), background-task 30-minute kill timer (#84981), and auto-update killing live Desktop sessions (#85413). A cluster of new cybersecurity false-positive reports (#85375, #85392, #85414) suggests the Opus 4.8 safety filter is over-triggering on legitimate defensive work.

---

## 2. Releases

*None in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#28745](https://github.com/anthropics/claude-code/issues/28745) | **Allow resuming conversations from different directories** | Worktree deletion, directory renames, or machine migration break session continuity — no recovery path exists. | **76 👍**, 11 comments — highest engagement in tracker |
| [#67246](https://github.com/anthropics/claude-code/issues/67246) | **Safety-classifier model switch (Fable 5 → Opus 4.8) fires on benign content; `/model` override ignored** | Mid-session silent downgrade breaks workflow; users cannot reclaim requested model. | 12 comments, 3 👍 — multiple confirmations of false positives |
| [#31413](https://github.com/anthropics/claude-code/issues/31413) | **UI language localization support** | Blockers for non-English teams; no i18n framework in CLI or Desktop. | 13 comments, 8 👍 — active design discussion |
| [#72248](https://github.com/anthropics/claude-code/issues/72248) | **Workflow tool delivers JSON args as string, not parsed object** | Violates documented "verbatim" contract; breaks structured-input workflows. | 10 comments, 1 👍 — has repro, macOS |
| [#83913](https://github.com/anthropics/claude-code/issues/83913) | **Prompt cache invalidated when `additionalContext` changes during history rebuild** | Unnecessary cache rewrites increase latency and cost on every turn. | 5 comments, 4 👍 — performance regression |
| [#84981](https://github.com/anthropics/claude-code/issues/84981) | **Background tasks SIGTERMed on exact 30-min timer (exit 144), undocumented** | Long-running background jobs (builds, tests, syncs) killed silently; no config to extend. | 3 comments — macOS CLI, precise 1800s interval |
| [#85413](https://github.com/anthropics/claude-code/issues/85413) | **Desktop auto-update relaunches app, kills live session hosts — no disable option** | Remote/headless sessions (days-long) terminated without warning on update. | New today — critical for unattended workloads |
| [#85417](https://github.com/anthropics/claude-code/issues/85417) | **Claude forgets outstanding to-do list items after multi-turn compactions** | Task tracking collapses during long sessions; items vanish from displayed list. | New today — core UX regression |
| [#85375](https://github.com/anthropics/claude-code/issues/85375) / [#85392](https://github.com/anthropics/claude-code/issues/85392) / [#85414](https://github.com/anthropics/claude-code/issues/85414) | **ClAudit/Opus 4.8 false positives on defensive security audit output** | Legitimate hardening work (CI gates, container config) blocked as "cybersecurity"; session-halted severity. | 3 new issues today — pattern suggests systemic over-filtering |
| [#81100](https://github.com/anthropics/claude-code/issues/81100) | **Desktop 30-day retention sweep deletes only transcript copy → ghost session entries** | Data loss + UI corruption; related to #59248 (CLI) but Desktop-specific mechanism. | 2 comments — distinct from prior stale closure |

---

## 4. Key PR Progress (All 5 Updated PRs)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#85409](https://github.com/anthropics/claude-code/pull/85409) | `security-guidance`: update default model refs Opus 4.7/Sonnet 4.6 → Opus 5/Sonnet 5 | **Open** | Updates hardcoded model constants in README and `llm.py` (`SECURITY_REVIEW_MODEL`, fallback) to current flagship models. |
| [#85323](https://github.com/anthropics/claude-code/pull/85323) | `fix(plugin-dev)`: parse block scalar agent descriptions | **Open** | Fixes YAML `|` / `>` block-scalar parsing in `validate-agent.sh` — multiline descriptions now read from indented content, not scalar marker. |
| [#85243](https://github.com/anthropics/claude-code/pull/85243) | `fix(skills)`: use spec-conformant names in plugin-dev & hookify skills | **Open** | Renames 8 bundled skill `name:` fields from title-cased-with-spaces to kebab-case (e.g., `Writing Hookify Rules` → `writing-hookify-rules`). |
| [#17395](https://github.com/anthropics/claude-code/pull/17395) | `[Plugin] Add agent-session-commit plugin` | **Closed** | Introduces `AGENTS.md` as authoritative project instructions, `CLAUDE.md` as pointer, and `/session-commit` + Stop-hook auto-commit plugin. |
| [#9262](https://github.com/anthropics/claude-code/pull/9262) | `docs`: enforce task tool and model metadata | **Closed** | Documents `claude-3-5-haiku-latest` via `model` param; mandates Task tool in commit workflows for context isolation. |

---

## 5. Feature Request Trends (from Issue Corpus)

1. **Session Portability & Persistence** — Resume across directories/machines (#28745), survive auto-updates (#85413), survive retention sweeps (#81100), background-task longevity (#84981).
2. **Model Control & Transparency** — Override safety-classifier downgrades (#67246), observe subagent effort levels (#85416), prevent silent model switches (#85415).
3. **Localization & Accessibility** — UI i18n framework (#31413), IME/full-width character support (#83762 closed but related).
4. **Developer Experience Polish** — Workflow tool contract compliance (#72248), fork/tab attachment in VSCode (#85008), pinned-session protection (#62104 closed).
5. **Enterprise/Team Workflows** — GitHub Integration write permissions (#80874), cross-session messaging reliability (#85412), plugin versioning stability (#82712).

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Safety classifier overreach on legitimate engineering work** | #67246, #85375, #85392, #85414, #85415 — 5+ issues in 24h, all `cyber`/`model` tagged, `session-halted` severity | Blocks authorized defensive security, CI hardening, container audits; no override; erodes trust in Fable 5 |
| **Session state fragility** | #28745 (76 👍), #84981 (30-min kill), #85413 (auto-update kill), #85417 (todo loss), #81100 (retention sweep) | Long-running work unreliable; no recovery UX; data loss perceived as silent |
| **Tool contract violations** | #72248 (Workflow args as string), #83760 (denied tool executed), #66084 (tools/list_changed stale), #83957 (MessageDisplay hook ignored) | Breaks automation, plugins, and hook-based workflows; "works in docs, not in prod" |
| **Desktop/CLI parity gaps** | #81306 (MSIX crash recovery), #85008 (VSCode fork broken), #84880 (Chrome upload regression), #83762 (IME Enter key) | Windows/Desktop users hit distinct, unreproducible-on-macOS bugs |
| **Observability black boxes** | #85416 (subagent effort unobservable), #83913 (cache invalidation silent), #84981 (undocumented 30-min timer) | Developers cannot debug or optimize what they cannot see |

---

*Generated from github.com/anthropics/claude-code data as of 2026-08-10 00:00 UTC. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-10

---

## 1. Today's Highlights

- **Windows line-ending corruption fixed**: The high-impact bug (#4003, 74 👍) where `apply_patch` normalized line endings on Windows has been resolved via PRs #37757/#37758, introducing an opt-in `PreserveLineEndings` mode.
- **Windows Computer Use systematically broken**: Four separate issues (#37043, #37383, #37595, #37734) report `EnumWindows` failing with `0x80070003` across app and CLI, blocking the Computer Use feature entirely on Windows 11 24H2+.
- **New critical regression**: Desktop app on Windows silently exits ~25 s after launch in a crash loop (#37752), reproducing even with a blank profile while the CLI works normally.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4003](https://github.com/openai/codex/issues/4003) | **Patched files have mixed line endings on Windows** (CLOSED) | Core file-editing corruption on Windows; affected every patch apply. | 33 comments, 74 👍 — highest engagement in this batch. |
| [#25928](https://github.com/openai/codex/issues/25928) | **VS Code/Cursor Extension: Submitted Prompts Randomly Disappear Before Entering Queue** | Breaks prompt workflow in the most-used IDE integration. | 25 comments, 17 👍 — ongoing since June. |
| [#37458](https://github.com/openai/codex/issues/37458) | **Extension fails to start: "The extension couldn't load its resources"** | Complete extension breakdown on Windows VS Code 1.132. | 24 comments — zero 👍 suggests acute, recent onset. |
| [#11011](https://github.com/openai/codex/issues/11011) | **Switching between threads is very slow** | Major UX regression in desktop app; affects multi-tasking. | 22 comments, 19 👍 — reported Feb, still open. |
| [#37043](https://github.com/openai/codex/issues/37043) / [#37383](https://github.com/openai/codex/issues/37383) / [#37595](https://github.com/openai/codex/issues/37595) / [#37734](https://github.com/openai/codex/issues/37734) | **Windows Computer Use: EnumWindows fails with 0x80070003** (cluster) | Entire Computer Use feature non-functional on modern Windows; blocks automation workflows. | 4 issues, 48 combined comments — systemic platform blocker. |
| [#15299](https://github.com/openai/codex/issues/15299) | **Support inbound MCP notifications into active CLI session** | Enables event-driven agent workflows; key for MCP adoption. | 15 comments, 14 👍 — strong community pull. |
| [#5609](https://github.com/openai/codex/issues/5609) | **Sync chats/history across ChatGPT web, VS Code, Codespaces** | Top-voted feature request; addresses fragmented conversation state. | 6 comments, **63 👍** — highest upvote count in dataset. |
| [#34889](https://github.com/openai/codex/issues/34889) | **Windows sandbox ACL repair re-runs on inherited writable-root; >60 s spawn hang** | Deterministic test timeouts; blocks CI and local dev on Windows. | 5 comments, 3 👍 — infrastructure pain point. |
| [#37752](https://github.com/openai/codex/issues/37752) | **Desktop app silently exits ~25 s after launch on Windows (crash loop)** | New regression; app unusable on Windows while CLI works. | 2 comments, filed today — high severity. |
| [#33885](https://github.com/openai/codex/issues/33885) | **MultiAgentV2: Allow child threads to accept corrections/steering** | Unlocks iterative multi-agent workflows; currently parent-owned threads are read-only. | 2 comments, 6 👍 — architectural request. |

---

## 4. Key PR Progress

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#37757](https://github.com/openai/codex/pull/37757) / [#37758](https://github.com/openai/codex/pull/37758) | **Add line-ending preservation mode to `apply_patch`** (CLOSED) | Introduces `PreserveLineEndings` update mode; fixes #4003. Opt-in via feature flag `apply_patch_preserve_line_endings`. | Resolves top Windows corruption bug. |
| [#37747](https://github.com/openai/codex/pull/37747) | **Bound Cursor project path resolution** (CLOSED) | Replaces recursive directory walk with bounded candidate probes for Cursor project paths. | Fixes potential hangs on large workspaces. |
| [#37745](https://github.com/openai/codex/pull/37745) | **Add gRPC TCP transport to code-mode host** (CLOSED) | Accepts `grpc://IP:PORT` via `--listen`; prints bound HTTP endpoint for port discovery. | Enables remote/containerized code-mode hosts. |
| [#37723](https://github.com/openai/codex/pull/37723) | **Report I/O subtypes for session config import failures** (CLOSED) | Adds `std::io::ErrorKind` categories (`invalid_data`, `not_found`, `permission_denied`) to error payloads. | Improves debuggability of config load failures. |
| [#37709](https://github.com/openai/codex/pull/37709) | **Keep wrapped composer whitespace with following text** (CLOSED) | Grapheme-safe TUI composer wrapping; prevents orphan blank rows. | Polishes terminal UX. |
| [#37654](https://github.com/openai/codex/pull/37654) | **Advertise environment config read support** (CLOSED) | Adds `environmentConfigRead` capability to exec-server; defaults false for legacy executors. | Foundation for env-aware tooling. |
| [#31817](https://github.com/openai/codex/pull/31817) | **Automated `models.json` update** (OPEN) | Scheduled model metadata refresh. | Keeps model registry current. |
| [#37759](https://github.com/openai/codex/issues/37759) | *Related fix in progress* | TUI replays full scrollback on Markdown hard break (issue filed today). | Regression in 0.146.0+ on Windows. |

---

## 5. Feature Request Trends

1. **MCP as a first-class integration surface** — Inbound notifications (#15299), model alias mapping for enterprise gateways (#21594), and tighter tool schema coverage (#36211 `close_agent` missing).
2. **Cross-platform conversation continuity** — Sync across web, VS Code, Codespaces, and desktop (#5609, 63 👍) remains the most-upvoted ask.
3. **Multi-agent controllability** — Steering child agents (#33885), auto-approval inheritance for worktree tasks (#33282), and residency slot management (#32353).
4. **Windows parity** — Line-endings fixed, but Computer Use, sandbox ACL, Terminal popup (#37599), and app stability (#37752) show Windows remains a secondary platform in practice.

---

## 6. Developer Pain Points

| Area | Recurring Themes | Representative Issues |
|------|------------------|------------------------|
| **Windows reliability** | Line-endings (fixed), Computer Use `EnumWindows` failures, sandbox ACL timeouts, visible Terminal popup, app crash loop | #4003, #37043, #34889, #37599, #37752 |
| **Performance & latency** | Thread switching slow (Win/macOS), WSL

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-10

## Today's Highlights
The project shipped a new nightly release (v0.56.0-nightly) alongside a massive dependency update batch (74 packages), signaling ongoing stabilization work. Critical bugs in session resume (`--resume`) and shell execution continue to surface, while the team advances agent architecture with PRs enabling recursive agent delegation and fixing ACP session poisoning. Auto Memory reliability and subagent observability remain active focus areas.

## Releases
**v0.56.0-nightly.20260810.gcf22ac7e8** — Nightly build with automated version bump ([#28758](https://github.com/google-gemini/gemini-cli/pull/28758)). Includes a grouped dependency update of 74 npm packages ([#28746](https://github.com/google-gemini/gemini-cli/pull/28746)), notably `@google/genai` 1.30.0 → 2.15.0, `puppeteer-core` 24 → 25.4, and `execa` 9.6 → 10.0.

## Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports `GOAL` success after hitting `MAX_TURNS` | Masks real failures in `codebase_investigator`; undermines trust in autonomous workflows | 12 comments, P1, needs retest |
| [#27373](https://github.com/google-gemini/gemini-cli/issues/27373) | `gemini --resume` crashes with `ioctl(2) failed, EBADF` | Blocks session recovery; terminal resize handling broken in `node-pty` | 11 comments, P1, closed stale |
| [#27764](https://github.com/google-gemini/gemini-cli/issues/27764) | Terminal resize error on `--resume` | Duplicate of #27373; confirms regression in non-interactive shell bridge | 5 comments, P2 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell execution stuck at "Waiting input" after command completes | Frequent hang on simple commands; breaks agent loops | 4 comments, 3 👍, P1 |
| [#27419](https://github.com/google-gemini/gemini-cli/issues/27419) | `ShellExecutionService` ignores `enableInteractiveShell: false` | Hangs in automated loops; non-UTF-8 and buffer overflow risks | 6 comments, P1, large effort |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations (EPIC) | Scaling behavioral evals from 76 tests across 6 models; critical for release confidence | 7 comments, P1 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Wastes compute; inbox never clears skipped sessions | 5 comments, P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory redaction happens post-model-context; excessive logging | Security risk (secrets in context) + noise | 4 comments, P2, security |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess AST-aware file reads/search/mapping (EPIC) | Potential to reduce turns/tokens via precise code navigation | 7 comments, 1 👍, P2 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error with >128 tools (reported as >400) | Tool explosion breaks agent; needs smarter scoping | 3 comments, P2 |

## Key PR Progress
| # | PR | Type | Impact |
|---|----|------|--------|
| [#28744](https://github.com/google-gemini/gemini-cli/pull/28744) | Fix ACP: don’t start fresh chat before resume | Bug fix (P1) | Prevents session file poisoning during `resumeChat`; unblocks reliable session restore |
| [#28738](https://github.com/google-gemini/gemini-cli/pull/28738) | Allow agents to call agents | Feature (P2, help wanted) | Enables recursive subagent delegation via `tools:` frontmatter; fixes #22092 |
| [#28743](https://github.com/google-gemini/gemini-cli/pull/28743) | Preserve resolved model config `systemInstruction`/`tools` | Bug fix | Stops chat-level config from overwriting model-specific resolved config |
| [#28624](https://github.com/google-gemini/gemini-cli/pull/28624) | Prevent boolean thought parts leaking as `[Thought: true]` | Bug fix (P2) | Cleans model output representation; fixes #23525 |
| [#28742](https://github.com/google-gemini/gemini-cli/pull/28742) | Fix caretaker-agent skill names (underscores → spec-valid) | Bug fix | Aligns with Agent Skills spec; avoids validation failures |
| [#28758](https://github.com/google-gemini/gemini-cli/pull/28758) | Bump version to 0.56.0-nightly.20260810 | Release automation | Nightly cut |
| [#28749](https://github.com/google-gemini/gemini-cli/pull/28749) | Bump `@google/genai` 1.30.0 → 2.15.0 | Dependency update | Major genai SDK upgrade; may bring new model features |
| [#28752](https://github.com/google-gemini/gemini-cli/pull/28752) | Bump `puppeteer-core` 24.0.0 → 25.4.0 | Dependency update | Browser agent stability/performance |
| [#28753](https://github.com/google-gemini/gemini-cli/pull/28753) | Bump `execa` 9.6.1 → 10.0.1 | Dependency update | Shell execution improvements |
| [#28746](https://github.com/google-gemini/gemini-cli/pull/28746) | Grouped npm-dependencies update (74 packages) | Maintenance | Broad supply-chain refresh |

## Feature Request Trends
1. **Agent composability** — Recursive agent calls (#28738), subagent trajectories in `/chat share` (#22598), and skill discovery (#27370) point to a push for deeper multi-agent orchestration.
2. **Observability & evals** — Component-level eval infrastructure (#24353), AST-aware tooling investigation (#22745), and browser agent resilience (#22232) reflect investment in measurable reliability.
3. **Memory system hardening** — Deterministic redaction, inbox quarantine, and retry limits (#26522, #26523, #26525) show maturing Auto Memory into a production-grade feature.
4. **Non-interactive/headless stability** — Explicit `enableInteractiveShell: false` support (#27419) and Wayland browser support (#21983) target CI/automation environments.
5. **Tool scoping intelligence** — Dynamic tool limiting to avoid 400 errors (#24246) and AST-aware navigation (#22745) aim to scale tool surface without context explosion.

## Developer Pain Points
- **Session resume is fragile** — `ioctl EBADF` on resize (#27373, #27764) and ACP session poisoning (#28744) make `--resume` unreliable for daily workflows.
- **Shell execution hangs** — "Waiting input" ghost state (#25166) and ignored `enableInteractiveShell: false` (#27419) break automated agent loops.
- **Subagent opacity** — Silent activation (#22093), false success reporting (#22323), and invisible trajectories (#22598) erode debuggability.
- **Auto Memory noise & risk** — Indefinite retries (#26522), unquarantined invalid patches (#26523), and post-hoc redaction (#26525) create both reliability and security friction.
- **Tool explosion** — Hard 128/400 tool limits (#24246) force manual config; developers want automatic scoping.
- **Browser agent platform gaps** — Wayland failures (#21983), profile lock rigidity (#22232), and ignored `settings.json` (#22267) limit headless/CI usage.

---

*Generated from google-gemini/gemini-cli GitHub data (2026-08-10). Links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-10

## Today's Highlights
No new releases in the last 24 hours, but **25 issues were updated** — including **16 new issues filed today** (mostly triage-labeled regressions). The surge surfaces systemic pain points around **MCP handshake reliability, model access regressions for Enterprise users, agent/subagent stability, and session initialization bugs**. Enterprise and authentication-related failures dominate the new reports.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1857](https://github.com/github/copilot-cli/issues/1857) | **Allow canceling enqueued messages** (`Ctrl+Q`/`Ctrl+Enter` queue) | Long-standing UX gap: users cannot abort queued commands while agent is busy or during `/compact`. | 👍 26 · 9 comments · Open since Mar |
| [#2751](https://github.com/github/copilot-cli/issues/2751) | **`/remote` fails on organization repos** — “could not resolve repository” | Blocks Enterprise teams from using remote sessions on org-owned repos. | 👍 13 · 8 comments · Open since Apr |
| [#4422](https://github.com/github/copilot-cli/issues/4422) | **All Claude models disabled** for personal Enterprise accounts (worked yesterday) | Sudden regression cutting off access to Sonnet 5/Opus 5 despite enabled settings. | 👍 0 · Filed today · Triage |
| [#4421](https://github.com/github/copilot-cli/issues/4421) | **MCP `initialize` has hard 60s timeout, no retry** — npx stdio servers fail ~29% | Fundamental reliability flaw: failed handshake permanently disables the server for the session. | 👍 0 · Filed today · Triage |
| [#4423](https://github.com/github/copilot-cli/issues/4423) | **Kickoff prompt silently dropped** on new session creation | Worktree/branch/CLI provisioned but agent never receives initial prompt — session stalls. | 👍 0 · Filed today · Triage |
| [#4306](https://github.com/github/copilot-cli/issues/4306) | **Subtasks freeze in autopilot mode** (fleet/converge loops) | Agent orchestration breaks down during multi-agent skill loops; no recovery. | 👍 2 · 2 comments · Open since Jul |
| [#4420](https://github.com/github/copilot-cli/issues/4420) | **Parallel tool calls lose request–response correlation** | Harness returns responses without original request IDs, confusing agent logic. | 👍 0 · Filed today · Triage |
| [#4416](https://github.com/github/copilot-cli/issues/4416) | **Parallel explore subagents hit 429s** on single rate-limited model (haiku-4.5) | No backoff, no auto-model-switch despite `eligibleForAutoSwitch` flag. | 👍 0 · Filed today · Triage |
| [#4370](https://github.com/github/copilot-cli/issues/4370) | **MCP init fails when `server/discover` returns `-32602`** (FastMCP) | CLI treats unimplemented method as fatal instead of falling back. | 👍 1 · 2 comments · Open since Aug 4 |
| [#2922](https://github.com/github/copilot-cli/issues/2922) | **`/remote` should support non-GitHub git hosts** (GitLab, Bitbucket) | Feature request: decouple remote session from GitHub-hosted repos. | 👍 2 · 1 comment · Open since Apr |

---

## Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## Feature Request Trends
1. **Configurable MCP timeouts & retries** — developers want control over handshake budgets (#4421) and resilient reconnection.
2. **Model-selection granularity** — bias/strength ranges for auto-mode (#4412), plus visibility into why org-enabled models disappear (#4390, #4422).
3. **Session & queue control** — cancel queued input (#1857), inspect/resume session state (#4418), reliable kickoff delivery (#4423).
4. **Multi-host `/remote`** — first-class support for GitLab/Bitbucket remotes (#2922).
5. **Observability HUD** — community-built `copilot-hud` referenced as desired built-in (#4418).
6. **Localization** — Chinese UI support requested (#4407).

---

## Developer Pain Points (Recurring Frustrations)
- **Enterprise auth/entitlement opacity**: settings appear enabled but fail silently (Claude models #4422, `cli_remote_control_enabled` #4409, github-mcp-server OAuth #4408).
- **MCP fragility**: fixed timeouts, no retry, fail-closed interim policies dropping user servers (#4421, #4419), unimplemented-method crashes (#4370), OAuth 3LO unsupported (#4371).
- **Agent orchestration instability**: subtask freezes (#4306), parallel tool-call correlation loss (#4420), rate-limit fan-out without backoff (#4416).
- **Session lifecycle bugs**: prompts dropped on create (#4423), warm resume corrupts reasoning metadata (#4413), hooks don’t fire (#1730).
- **Performance regressions**: 100% CPU idle (#4415), missing Anthropic `cache_control` (closed #4256 but highlights ongoing cost concerns).
- **BYOK / custom provider breakage**: local 403 before reaching provider (#4414).

---

*Digest generated from github.com/github/copilot-cli issue tracker (last 24h). Links point directly to GitHub issues.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-10

---

## 1. Today's Highlights
No new releases shipped in the last 24 hours. The community spotlight falls on two critical issues: a long-standing **Memory System** feature request (#1283) with 27 comments signaling strong demand for persistent cross-session context, and a **silent streaming hang in ACP/print mode** (#2598) where completed responses never emit a `[DONE]` frame, leaving sessions blocked and wire logs incomplete. A single PR (#739) addresses a Google GenAI/MCP compatibility bug by stripping JSON Schema metadata from tool parameters.

---

## 2. Releases
*No new releases published in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System — Persistent context across sessions** | Enables Kimi to retain project patterns, user preferences, and AI-managed notes between sessions — a foundational capability for agentic workflows and long-running tasks. | 27 comments since Feb 2026; sustained engagement indicates high priority for power users and automation scenarios. |
| [#2598](https://github.com/MoonshotAI/kimi-cli/issues/2598) | **ACP/print streaming response hangs silently (no idle timeout, partial frames lost)** | Critical reliability bug: streams complete on the wire but the finish frame never arrives, CLI waits indefinitely, subsequent messages silently replace the stuck turn, and *nothing is written to `wire.jsonl`* — breaking auditability and debugging. | Filed hours ago; zero comments yet but severity is high (data loss, session stall, no config knob to mitigate). |

---

## 4. Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#739](https://github.com/MoonshotAI/kimi-cli/pull/739) | **fix(kosong): strip JSON Schema metadata from Google GenAI tool parameters** | Open (updated 2026-08-09) | Unblocks MCP tools (e.g., Exa MCP) on the Google GenAI provider by removing `$schema`, `additionalProperties`, etc. that trigger validation errors. Resolves #734. |

---

## 5. Feature Request Trends
From the two recently updated issues, the dominant asks are:

1. **Long-term memory / statefulness** — Users want Kimi to *remember* across invocations (project conventions, coding style, prior decisions). This is the single most commented-on enhancement in the window.
2. **Streaming reliability & observability** — The ACP hang exposes a gap: no idle timeout, no guaranteed terminal frame, and no wire logging for completed-but-unclosed turns. Developers expect first-class streaming contracts (timeouts, retries, durable logs).

---

## 6. Developer Pain Points
- **Silent session stalls** — Streaming calls that *appear* finished but never terminate, with no timeout config and no error surface.  
- **Lost telemetry** — Completed responses vanish from `wire.jsonl` when the finish frame is missing, breaking post-hoc analysis and replay.  
- **Provider–tool mismatches** — JSON Schema metadata leaked into Google GenAI tool calls causes hard validation failures, requiring manual patches per provider.  
- **No cross-session continuity** — Every `kimi` invocation starts from zero; users manually re-inject context via files or prompts.

---

*Digest generated from GitHub data (last 24h). Links point to live issues/PRs on `MoonshotAI/kimi-cli`.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-10

## Today's Highlights
The OpenCode v2 development cycle remains highly active with **50 PRs updated** in the last 24 hours, focusing on core stability (tool-calling fixes, session compaction bounds, provider error handling) and UX polish (BusyWave indicator, deep-link docs). The community is rallying around the **Memory Megathread (#20695)** — now at 124 comments and 96 👍 — to systematically collect heap snapshots for persistent memory leaks. Meanwhile, a critical TUI freeze-on-startup bug (#41284) and copy-to-clipboard regression (#4283, 110 👍) remain unresolved high-pain items.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread** — central collection point for heap snapshots to debug scattered memory leaks | Long-standing stability blocker; affects all long-running sessions; explicit call for *manual* heap snapshots (not LLM suggestions) | 124 comments, 96 👍, updated today |
| [#4283](https://github.com/anomalyco/opencode/issues/4283) | **Copy to Clipboard broken** — selected response text fails to copy (v1.0.62) | Basic UX regression; blocks workflow for sharing/debugging output | 122 comments, 110 👍 |
| [#7602](https://github.com/anomalyco/opencode/issues/7602) | **Native Model Fallback/Failover** — automatic retry with different model on error/rate-limit | Critical for production agents; current fallback only works for *same* model ID | 29 comments, 107 👍 |
| [#785](https://github.com/anomalyco/opencode/issues/785) | **Disable Streaming Mode** — proxy providers (e.g., Credal) don't support streaming | Blocks enterprise/proxy users; hard failure with `AI_APICallError` | 29 comments, 38 👍 |
| [#13715](https://github.com/anomalyco/opencode/issues/13715) | **Nested Subagent Permission Hang** — permission prompts from grandchild agents never render | Silent deadlock in multi-agent workflows; TUI `children()` memo misses nested sessions | 11 comments, 24 👍 |
| [#41284](https://github.com/anomalyco/opencode/issues/41284) | **TUI Freezes on Blank Screen at Startup** (macOS M1, v1.18.14/15) | Complete launch failure; requires force-kill; no error logs | 2 comments, 1 👍, *fresh critical bug* |
| [#41464](https://github.com/anomalyco/opencode/issues/41464) | **Tool Definitions Sent to Non-Tool-Calling Models** (Vertex Gemini image) | Provider rejects *every* request; `capabilities.toolcall` ignored in request builder | 1 comment, *fresh, blocks image models* |
| [#41458](https://github.com/anomalyco/opencode/issues/41458) | **Text Rendering: Duplicated/Stale Content** | Chat output unreliable; blocks overlap, stale text appears; makes conversation hard to follow | 1 comment, *fresh UX regression* |
| [#41457](https://github.com/anomalyco/opencode/issues/41457) | **`@` Autocomplete: Files Missing on First Open** | Files only appear after typing a char or second `@`; same root cause as #6618 | 1 comment, *fresh, breaks file referencing* |
| [#41456](https://github.com/anomalyco/opencode/issues/41456) | **`@` File Search Returns Nothing When CWD = Home Dir** — `fff` init fails, no ripgrep fallback | Entire file search broken in home/root directories; empty stub left behind | 1 comment, *fresh, env-specific breakage* |

---

## Key PR Progress (Top 10 by Technical Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#41463](https://github.com/anomalyco/opencode/pull/41463) | **Fix** | Omit tool definitions for models that cannot call tools (closes #41464); reads `capabilities.toolcall` at request build time |
| [#41460](https://github.com/anomalyco/opencode/pull/41460) | **Chore** | Merge `dev` → `v2`: preserves V2 App/Desktop/Core/TUI/SDK/server architecture, RTL/localization, chronological ordering, native session export |
| [#37584](https://github.com/anomalyco/opencode/pull/37584) | **Fix** | Bound consecutive overflow compaction cycles in prompt loop (closes #27924); prevents infinite retries on context overflow |
| [#40427](https://github.com/anomalyco/opencode/pull/40427) | **Perf (Beta)** | Experimental renderer perf: initial entry **7.45 MB → 1.82 MB (-75.5%)** via immutable partial DB snapshot + fixed 24h corpus |
| [#38067](https://github.com/anomalyco/opencode/pull/38067) | **Fix** | Edge-trigger build-switch reminder instead of scanning full session history (closes #38066); O(1) vs O(n) session scan |
| [#39358](https://github.com/anomalyco/opencode/pull/39358) | **Feature** | Durable session archival: records `session.archived` fact, projects timestamp to `Session.Info.time.archived`; idempotent, separate from delete |
| [#41455](https://github.com/anomalyco/opencode/pull/41455) | **Fix** | Include attachment path in model context (closes #41454); preserves `source.path` as text part before binary image |
| [#41450](https://github.com/anomalyco/opencode/pull/41450) | **Fix** | Derive fallback message for empty AI SDK provider errors; surfaces `statusCode`, `data.error.code`, rate-limit headers to TUI |
| [#40997](https://github.com/anomalyco/opencode/pull/40997) | **Refactor** | Replace integration prompts with shared `Form.Fields`/`Form.Answer`; validates OAuth/key answers in Core; migrates Copilot, Azure, Cloudflare |
| [#41350](https://github.com/anomalyco/opencode/pull/41350) | **Refactor** | Animated BusyWave loading indicator (from TUI); persists when "show thinking" enabled |

---

## Feature Request Trends (from Issues & PRs)

1. **Model Resilience & Flexibility** — Native fallback between *different* models (#7602), disable streaming for proxy compatibility (#785), Vertex Gemini image model support (#41464).
2. **Session Persistence & Control** — Durable archival (#39358), revert/undo question answers (#25555), persistent daemon with zero-tool-call memory recall (#41453).
3. **UX Polish for Power Users** — Code block folding (#41462), edit approval with Shift+feedback (#41461), deep-link documentation (#41400), BusyWave indicator (#41350).
4. **Workspace & Multi-Repo** — Worktree-based switching with stash warp (#36052), `--dir` for `web/serve` (#35976).
5. **Provider/Integration DX** — LM Studio local guidance (#36139), Ollama reasoning field support (#36068), Gemini caching via OpenRouter (#36070), Copilot response alignment (#41452).

---

## Developer Pain Points (Recurring High-Frequency Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Memory Leaks / High RAM** | Megathread #20695 (124 comments), explicit request for heap snapshots | Chronic, cross-version |
| **Clipboard Broken** | #4283 (110 👍, 122 comments) — basic copy fails | Regression, high visibility |
| **TUI Instability** | Freeze on startup (#41284), nested subagent hang (#13715), rendering duplicates (#41458) | Multiple fresh reports |
| **Model/Provider Rigidity** | No cross-model fallback (#7602), streaming mandatory (#785), tool defs sent to non-tool models (#41464) | Architectural limitation |
| **File Search/Autocomplete Failures** | `@` missing files on first open (#41457), home-dir search broken (#41456), branch highlight bug (#36110) | Core workflow blocker |
| **Error Opacity** | Empty AI SDK errors (#41450), silent plugin crashes (#36102), no timeout on MCP registration (#41459) | Debugging difficulty |
| **Subagent/Permission Model Gaps** | Grandchild permission prompts never render (#13715), no undo for question answers (#25555) | Multi-agent workflow breaks |

---

*Digest generated from GitHub data (anomalyco/opencode) for 2026-08-10. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-10

## Today's Highlights
The Pi ecosystem saw a wave of TUI stability fixes and provider integrations merged today, with **11 PRs closed** addressing critical crashes (renderer hard-crash on wide lines, EPIPE on pipe close), Mac CPU regressions, and GitHub Copilot rate-limiting. A new **remote session wire protocol** (`@earendil-works/pi-protocol`) landed, enabling transport-neutral session control. The llama.cpp default-model race condition (#6922, #6948) is now resolved via catalog caching.

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (Top 10 by Impact & Community Signal)

| Issue | Status | Why It Matters | Community Signal |
|-------|--------|----------------|------------------|
| [#6922](https://github.com/earendil-works/pi/issues/6922) Default model cannot be a llama.cpp model: startup shows "No models available" | **CLOSED** | Blocked all llama.cpp users from setting a default model; root cause was async model-refresh race. | 10 comments, 14 👍 |
| [#7730](https://github.com/earendil-works/pi/issues/7730) High CPU usage on Mac OS with long session | **OPEN** | 50–110% CPU on macOS during extended sessions; memory 600–800 MB. Likely context-length related. | 6 comments, 6 👍 |
| [#6948](https://github.com/earendil-works/pi/issues/6948) llama.cpp defaultProvider/defaultModel not applied at startup (race condition) | **CLOSED** | Duplicate of #6922; fixed by caching llama.cpp catalog (PR #7072). | 4 comments |
| [#7323](https://github.com/earendil-works/pi/issues/7323) `pi update --models` fails entire refresh on transient catalog stall | **CLOSED** | Single network hiccup aborted full model refresh; no retry logic. | 4 comments |
| [#7720](https://github.com/earendil-works/pi/issues/7720) Allow disabling select-to-copy in fullscreen TUI mode | **OPEN** | Users accidentally overwrite clipboard when highlighting text in TUI. | 4 comments |
| [#7616](https://github.com/earendil-works/pi/issues/7616) TUI chat scroll jumps when tool blocks grow above viewport | **CLOSED** | Differential renderer cleared entire screen on tall tool blocks, losing scroll position. | 3 comments |
| [#7740](https://github.com/earendil-works/pi/issues/7740) TUI after `/reload` ignores custom tool renderCall/renderResult | **OPEN** | Extensions registering tools on `session_start` lose rendering after reload. | 3 comments |
| [#7868](https://github.com/earendil-works/pi/issues/7868) Renderer hard-crashes when any rendered line exceeds terminal width | **CLOSED** | **Critical**: single wide line aborted entire agent session instead of truncating. | 1 comment |
| [#7860](https://github.com/earendil-works/pi/issues/7860) EPIPE crash when desktop host closes stdout pipe (0.84.1) | **CLOSED** | Breaks embedding Pi in desktop hosts; fix from PR #5183 never merged. | 1 comment |
| [#7848](https://github.com/earendil-works/pi/issues/7848) Auto-compaction stops active task instead of resuming | **CLOSED** | Compaction during tool execution left agent idle, awaiting user input. | 1 comment |

---

## Key PR Progress (Top 10 by Scope & Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#7872](https://github.com/earendil-works/pi/pull/7872) | **CLOSED** (today) | **feat(coding-agent)**: expose loaded `AGENTS`/`CLAUDE` context files on `session_start` event; adds docs & tests. |
| [#7072](https://github.com/earendil-works/pi/pull/7072) | **CLOSED** | **fix(coding-agent)**: cache llama.cpp model catalog → resolves #6948/#6922 race condition. |
| [#7344](https://github.com/earendil-works/pi/pull/7344) | **CLOSED** | **feat(protocol)**: new `@earendil-works/pi-protocol` package — validated remote-session commands, events, snapshots, CBOR framing, browser-safe. |
| [#7866](https://github.com/earendil-works/pi/pull/7866) | **CLOSED** | **feat(tui)**: `copyOnSelect` option in `TuiAltScreenOptions` (defaults `true`) → addresses #7720. |
| [#7865](https://github.com/earendil-works/pi/pull/7865) | **CLOSED** | **fix(tui)**: add `pageUp`/`pageDown` keybindings to base `SelectList` and model selector → fixes #7616. |
| [#7858](https://github.com/earendil-works/pi/pull/7858) | **CLOSED** | **fix(coding-agent)**: route extension commands even when `expandPromptTemplates: false` → restores documented `sendUserMessage` pattern (#7859). |
| [#7857](https://github.com/earendil-works/pi/pull/7857) | **OPEN** | **feat(agent)**: expose `expandPromptTemplates` in `sendUserMessage` for extension command triggering. |
| [#7856](https://github.com/earendil-works/pi/pull/7856) | **CLOSED** | **fix(ai)**: handle double-serialized (stringified) structured tool args during validation; avoids hard-fail on object params. |
| [#7851](https://github.com/earendil-works/pi/pull/7851) | **CLOSED** | **fix(provider)**: enable GitHub Copilot model policies **sequentially** after device auth → avoids 429 on orgs with 20+ models (#7850). |
| [#7844](https://github.com/earendil-works/pi/pull/7844) | **CLOSED** | **fix(provider)**: remove bulk model enabling from Copilot login; models enabled explicitly via Copilot Chat. |

---

## Feature Request Trends
1. **TUI Polish** — Copy-on-select toggle, page-up/down in selectors, mouse-click positioning in textarea, scroll stability during streaming.
2. **llama.cpp First-Class Support** — Default model persistence, catalog caching, startup race elimination.
3. **Extension System Maturity** — Reliable `sendUserMessage` command routing, `session_start` render hooks surviving `/reload`, structured tool arg validation.
4. **Remote Session Protocol** — Transport-neutral wire protocol (`pi-protocol`) for embedding/automation.
5. **Provider Resilience** — Retry logic for catalog fetches, sequential policy enabling, graceful API deprecation handling (AI21).

---

## Developer Pain Points
- **llama.cpp Startup Race**: Default model ignored until async refresh completes — now fixed via caching.
- **Mac CPU Spikes**: Unexplained 100%+ CPU during long sessions; no clear fix yet.
- **TUI Fragility**: Wide-line crashes, scroll jumps, selector navigation gaps — actively being patched.
- **Extension Command Reliability**: `sendUserMessage` silently dropped commands when templates disabled.
- **Network Brittleness**: Single stalled request fails entire model refresh; no backoff/retry.
- **Provider Churn**: AI21 API retirement, Copilot rate limits, OpenRouter context-window drift require constant maintenance.
- **Auto-Compaction Interruption**: Compaction mid-task halts agent instead of resuming.
- **Bun Runtime Incompat**: `zlib.createZstdDecompress` missing in Bun’s undici bundle.

---

*Generated from `earendil-works/pi` GitHub activity (2026-08-09 → 2026-08-10). All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-10

---

## 1. Today's Highlights

The project shipped a nightly release (v0.21.8-nightly) adding **Qoder plugin extension support** and automated issue triage routing. Meanwhile, the multi-agent roadmap advances: a live-session registry (`qwen sessions ps`) landed, and a draft PR introduces native in-process agent-team coordination. On the reliability front, multiple PRs address CI flakiness (sandbox hangs, test isolation, triage timeouts) and harden the Web Shell daemon against mid-turn message loss and credential leaks.

---

## 2. Releases

**v0.21.8-nightly.20260810.55e20db328**  
[Release notes](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.8-nightly.20260810.55e20db328)

| Change | Author | PR |
|--------|--------|-----|
| feat(core): support Qoder plugin extensions | @callmeYe | [#8661](https://github.com/QwenLM/qwen-code/pull/8661) |
| feat(ci): auto-assign issues to area owners | — | — |

*Nightly builds are published daily; this cut includes the Qoder integration and triage automation.*

---

## 3. Hot Issues

| # | Title | Category | Why It Matters | Community Signal |
|---|-------|----------|----------------|------------------|
| [#8718](https://github.com/QwenLM/qwen-code/issues/8718) | RFC: Native coordination for independent Qwen sessions | core / multi-agent / background-automation | Proposes a leader/worker session model with structured dispatch, observation, and result collection — foundational for scalable agent workflows. | 8 comments, active design discussion |
| [#8557](https://github.com/QwenLM/qwen-code/issues/8557) | Terminal shrink reprints transcript blocks (macOS/Warp) | ui / rendering | Duplicate scrollback output degrades UX in popular terminal emulators; affects daily interactive use. | 7 comments, needs reproduction |
| [#8659](https://github.com/QwenLM/qwen-code/issues/8659) | TUI flickering/tearing in web-based terminals (Alibaba Cloud Workbench) | ui / rendering | Blocks cloud IDE adoption; root cause linked to `useTerminalBuffer: true` full-screen ANSI redraws. | 4 comments, welcome-pr |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | Fleet Shepherd Dashboard | ci-cd / automation | Auto-maintained fleet health dashboard; tracks PR scan-signal age, syncs, dispatches. | Bot-maintained, 3 comments |

*Only 4 issues updated in the last 24h — the backlog is quiet, suggesting focus on PR execution.*

---

## 4. Key PR Progress

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#8677](https://github.com/QwenLM/qwen-code/pull/8677) | **feat(tui): OpenTUI renderer backend (React track) — flicker-free, first-class mouse** | Feature | Complete TUI rewrite using OpenTUI/React; eliminates flicker, adds mouse support. Tracking [#8662](https://github.com/QwenLM/qwen-code/issues/8662). |
| [#8804](https://github.com/QwenLM/qwen-code/pull/8804) | **feat(cli): add native multi-agent coordination** | Feature | Exposes in-process Agent Team workflow (draft for #8718). No persistent-session dispatch yet. |
| [#8728](https://github.com/QwenLM/qwen-code/pull/8728) | **feat(core): add live-session registry and `qwen sessions ps`** | Feature | Sessions self-register at `~/.qwen/sessions/<pid>.json`; enables tooling/observability. First step of [#8724](https://github.com/QwenLM/qwen-code/issues/8724). |
| [#8732](https://github.com/QwenLM/qwen-code/pull/8732) | **feat(cli): adopt Goal v3 in ACP sessions** | Feature | Unifies `/goal` command across CLI and ACP/Web Shell with full CRUD, pause/resume, persistence. |
| [#8798](https://github.com/QwenLM/qwen-code/pull/8798) | **fix(web-shell): reconcile mid-turn messages with daemon state** | Fix | Daemon becomes authoritative for mid-turn messages; survives refresh/session switch, stops duplicate resubmission. |
| [#8818](https://github.com/QwenLM/qwen-code/pull/8818) | **fix(core): catch content-only thinking-tag leaks on all OpenAI-compatible providers** | Fix | Extends thinking-tag leak defense to all OpenAI-compat endpoints; closes two bypasses. |
| [#8816](https://github.com/QwenLM/qwen-code/pull/8816) | **fix(ci): watchdog silent sandbox hangs and reap leaked containers** | Fix | Adds 20-min idle watchdog (`QWEN_IDLE_TIMEOUT_MS`) + container reaper; mitigates 2-hr silent hangs eating autofix rounds. |
| [#8810](https://github.com/QwenLM/qwen-code/pull/8810) | **perf(ci): make triage budget operator-tunable and raise it** | Perf | `QWEN_TRIAGE_TIMEOUT_MINUTES` repo variable (default 60min) replaces fixed 30-min cap that killed large PR triage. |
| [#8795](https://github.com/QwenLM/qwen-code/pull/8795) | **fix(core): deflake shell-registry fixtures, share display-strip helper** | Fix | Per-test temp output paths keyed by `shellId`; eliminates `/tmp/s1.output` collisions across workers/CI jobs. |
| [#8802](https://github.com/QwenLM/qwen-code/pull/8802) | **fix(desktop): restore macOS window after closing it** | Fix | Close → hide; reopen via Dock/Finder restores same window. Avoids focus steal from Local Control. |

---

## 5. Feature Request Trends

From the active issues and PRs, three clear directions emerge:

1. **Multi-agent / session orchestration** — #8718 (RFC), #8804 (draft impl), #8728 (registry), #8732 (Goal v3 in ACP) all point toward first-class support for running, observing, and coordinating multiple Qwen sessions as a team.
2. **Web/Cloud IDE parity** — #8659 (Workbench flicker), #8798 (Web Shell daemon sync), #8780 (subagent UI rows) show investment in making the browser-based experience match the local TUI.
3. **Observability & debuggability** — `qwen sessions ps`, Fleet Shepherd dashboard, structured review bodies (#8825), and live-session registry all serve the need to *see what the agent is doing* across environments.

---

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **CI flakiness & resource leaks** | Sandbox hangs (#8816), test fixture collisions (#8795, #8813), triage timeouts (#8810) | High — 4+ PRs in 24h targeting CI stability |
| **Terminal rendering bugs** | Transcript duplication on resize (#8557), TUI flicker in web terminals (#8659), OpenTUI rewrite underway (#8677) | High — affects core interactive loop |
| **Credential/secret leakage in logs** | Provider warning sanitizer fixes (#8408, #8524), thinking-tag leaks (#8818) | Medium — recurring security hardening |
| **Session lifecycle fragility** | Web Shell mid-turn message loss (#8798), macOS window destroy-on-close (#8802), no session registry (now fixed by #8728) | Medium — impacts reliability of long-running workflows |
| **Multi-agent coordination gaps** | No native dispatch/collect (#8718), ACP/CLI feature parity (#8732), subagent UI affordances (#8780) | Growing — explicit RFC and multiple PRs in flight |

---

*Data sourced from `github.com/QwenLM/qwen-code` (releases, issues, PRs updated 2026-08-09 → 2026-08-10). All links point to live GitHub objects.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-10

## 1. Today's Highlights
**v0.9.6 shipped** — a subtractive runtime release that rebuilds compaction around a single provider summary with a committed successor handoff, removes harness obstructions, and preserves explicit budgets, deadlines, and truthful provider state. Simultaneously, the community is converging on three high-impact pain points: context compaction incorrectly triggering at 128K despite 1M-capable models, API keys only persisting per-repo instead of globally per-provider, and subagent/Fleet UX inconsistencies (display identity, unified tasks surface, config layering).

## 2. Releases
**v0.9.6** (PR [#5313](https://github.com/Hmbown/CodeWhale/pull/5313), released today)  
- Rebuilds compaction: one provider summary + committed successor handoff; removes mailbox freezing and transcript slicing.  
- Removes harness-created obstruction while keeping explicit budgets, deadlines, cancellation, and truthful provider state.  
- Accompanied by PR [#5308](https://github.com/Hmbown/CodeWhale/pull/5308) fixing CNB asset download URLs for the updater.

## 3. Hot Issues (10 noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#5034](https://github.com/Hmbown/CodeWhale/issues/5034) **Switching providers retains unrelated default model** | Provider/model resolution not updated atomically; OpenAI switch leaves `gpt-5.5` default from prior route. | 4 comments, updated today — core reliability bug. |
| [#5096](https://github.com/Hmbown/CodeWhale/issues/5096) **Compaction gain not visible** | `/compact` reports success but token counter (e.g., 37K/128K) doesn’t reflect freed space. | 4 comments, updated today — undermines trust in compaction. |
| [#5239](https://github.com/Hmbown/CodeWhale/issues/5239) **1M-context model compacts at 128K** | Model supports 1M tokens but tool triggers compaction at legacy 128K default; no user-facing override. | 2 comments, updated today — repeated by multiple users. |
| [#5293](https://github.com/Hmbown/CodeWhale/issues/5293) **Deny-by-default approval selection changed** | v0.9.4 altered default highlighted button in permission dialog, breaking muscle memory; users accidentally deny. | 4 comments, 1 👍, updated yesterday — UX regression. |
| [#5209](https://github.com/Hmbown/CodeWhale/issues/5209) **File edit silently accepts wrong param names** | `action=edit` accepts `new_str` instead of `replace`, returns fake “Replaced” success, requires 3–5 retries. | 3 comments — tool reliability blocker. |
| [#5270](https://github.com/Hmbown/CodeWhale/issues/5270) **v0.9.5: Unified tasks surface** | Single operator-facing list for background shells, subagents, Fleet workers, workflow runs; idle chrome shows live work. | 3 comments — major UX unification tracked for v0.9.5. |
| [#4394](https://github.com/Hmbown/CodeWhale/issues/4394) **Compaction: structured survival contract** | Need explicit contract for what survives compaction (intent, decisions, evidence, tool/worker continuity). | 3 comments — foundational for long sessions. |
| [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) **Only one API key saved globally** | Switching providers (DeepSeek ↔ GLM) overwrites key; no per-provider secret storage. | 2 comments — daily workflow friction. |
| [#5023](https://github.com/Hmbown/CodeWhale/issues/5023) **IME candidate window jumps on Windows** | Input method editor candidate window position unstable during typing in TUI (v0.9.3, Windows 11). | 2 comments — blocks non-Latin input users. |
| [#5287](https://github.com/Hmbown/CodeWhale/issues/5287) **Sub-agent display identity inconsistent** | Same child shown as `agent_<hex>`, whale nickname (“Amazon River”), or dispatch name; operators need stable identity. | 2 comments — Fleet/TUI alignment. |

*Closed but high-signal:* [#3205](https://github.com/Hmbown/CodeWhale/issues/3205) (13 comments) — Fleet model classes/loadout auto/semantic route roles; [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) (9 comments) — CLI/TUI parity for subagent control surfaces; [#576](https://github.com/Hmbown/CodeWhale/issues/576) (6 comments) — Fork UX inside TUI.

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#5313](https://github.com/Hmbown/CodeWhale/pull/5313) | **Closed (merged)** | **v0.9.6 release** — subtractive runtime: rebuilt compaction, removed harness obstruction, preserved budgets/deadlines/cancellation/truthful provider state. |
| [#5308](https://github.com/Hmbown/CodeWhale/pull/5308) | **Closed (merged)** | Fix release: use canonical CNB `codewhale.net/codewhale` slug and `/-/releases/download/vX.Y.Z/` path for asset downloads in both updaters. |
| [#5281](https://github.com/Hmbown/CodeWhale/pull/5281) | **Open** | Dependabot: bump `jsonschema` 0.46.10 → 0.49.6 (Python schema validation dependency). |

## 5. Feature Request Trends
1. **Context compaction overhaul** — visibility of gain, 1M-window support, structured survival contract, preservation of intent/decisions/tool continuity ([#5096](https://github.com/Hmbown/CodeWhale/issues/5096), [#5239](https://github.com/Hmbown/CodeWhale/issues/5239), [#4394](https://github.com/Hmbown/CodeWhale/issues/4394), [#5043](https://github.com/Hmbown/CodeWhale/issues/5043)).
2. **Multi-provider secret management** — per-provider API key storage, durable global store, no repo-local plaintext leakage ([#5250](https://github.com/Hmbown/CodeWhale/issues/5250), [#5047](https://github.com/Hmbown/CodeWhale/issues/5047)).
3. **Subagent/Fleet UX unification** — unified tasks panel, stable display identity (session name > nickname > hex), config layer simplification ([#5270](https://github.com/Hmbown/CodeWhale/issues/5270), [#5287](https://github.com/Hmbown/CodeWhale/issues/5287), [#5098](https://github.com/Hmbown/CodeWhale/issues/5098)).
4. **TUI interaction polish** — in-TUI fork picker ([#576](https://github.com/Hmbown/CodeWhale/issues/576)), IME stability ([#5023](https://github.com/Hmbown/CodeWhale/issues/5023)), deny-by-default configurability ([#5293](https://github.com/Hmbown/CodeWhale/issues/5293)), rail-clean copy ([#5314](https://github.com/Hmbown/CodeWhale/issues/5314)).
5. **Provider/model resolution coherence** — atomic provider+model switch, unknown-model fallback surfacing ([#5034](https://github.com/Hmbown/CodeWhale/issues/5034), [#5244](https://github.com/Hmbown/CodeWhale/issues/5244)).

## 6. Developer Pain Points
- **Compaction at 128K despite 1M models** — silent fallback to legacy window, no user control, gain invisible in UI.
- **API key juggling** — single global slot forces re-entry on provider switch; keys leak into repo `.codewhale/config.toml`.
- **File edit tool deception** — accepts invalid param names, returns fake success, wastes cycles.
- **IME instability on Windows** — candidate window jumps, breaks CJK input workflow.
- **Subagent identity chaos** — three different names for same worker across TUI surfaces.
- **Fork workflow requires TUI exit** — no `/fork` interactive picker inside terminal.
- **Provider switch leaves stale default model** — resolution not atomic.
- **Permission dialog muscle-memory break** — deny-by-default default changed without config.
- **Test flakiness** — verifier background tests, workspace-sensitive fixtures, 12 ignored tests.
- **Interrupted assistant output lost** — no engine-owned durable representation for partial output.

---

*Data sourced from `github.com/Hmbown/CodeWhale` (issues/PRs updated 2026-08-09 to 2026-08-10). All links point to live GitHub items.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*