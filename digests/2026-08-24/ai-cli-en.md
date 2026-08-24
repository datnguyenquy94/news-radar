# AI CLI Tools Community Digest 2026-08-24

> Generated: 2026-08-24 01:46 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Ecosystem (2026-08-24)

---

## 1. Ecosystem Overview

The AI CLI landscape is in a **stabilization-and-hardening phase** rather than feature expansion. Across 9 active tools, zero major releases shipped today—only patch/nightly builds and prereleases. The dominant signal is **regression remediation**: model quality collapses (Claude Code), platform-specific crashes (Windows GPU on Claude Code, macOS thread explosions on Codex, Windows network stack on OpenCode), silent data loss during compaction (Copilot CLI, Pi), and auth/sandbox fragility (Codex, Copilot). Meanwhile, **protocol standardization** (ACP v2 in OpenCode, gbr/1 remote pairing in Kimi/Pi/CodeWhale), **structured review systems** (Qwen Code, CodeWhale), and **provider-neutral abstractions** (CodeWhale's 18-gate audit, Qwen's live model discovery) indicate maturing architectural priorities. Communities are vocal on billing transparency (Kimi, Codex) and cross-session memory (Claude, Gemini, Kimi, OpenCode).

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated/Merged (24h) | Release Status | Highest Community Signal (👍) |
|------|---------------------|--------------------------|----------------|-------------------------------|
| **Claude Code** | 10 hot + 9 pain-point themes | 1 (doc-only) | None | 351👍 (#77136 model quality) |
| **OpenAI Codex** | 10 hot + 8 pain-point patterns | 10 (substantial) | **rust-v0.149.1** (patch) | 27👍 (#39903 TUI output control) |
| **Gemini CLI** | 10 hot + 6 pain-point themes | 10 (7 merged) | **v0.56.0-nightly** | 8👍 (#21409 generalist agent hang) |
| **GitHub Copilot CLI** | 10 hot + 6 pain-point themes | 1 (trivial) | **v1.0.81-8** (prerelease) | 3👍 (#2306 enterprise auth) |
| **Kimi Code CLI** | 4 hot | 2 (open) | None | 7👍 (#1994 usage metering) |
| **OpenCode** | 10 hot + 5 pain-point themes | **19** (11 closed) | None | 6👍 (#31137 auto-accept permissions) |
| **Pi** | 10 hot + 6 pain-point themes | **10 merged** | None | 2👍 (multiple) |
| **Qwen Code** | 3 hot | 10 (open) | **v0.22.0-nightly** | Low (few comments) |
| **CodeWhale** | 10 hot + 9 pain-point themes | 10 (3 closed) | **v0.9.11** (rebrand) | 10 comments (#1004 /dryrun) |
| **Grok Build** | 0 | 0 | None | — |

**Observations**: OpenCode and Pi show highest PR throughput (19 and 10 merged respectively). Codex leads in substantive PR scope (sandbox, persistence, context engineering). Claude Code has highest single-issue engagement but zero code PRs. Copilot CLI and Kimi show low PR velocity relative to issue severity.

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Cross-session persistent memory/identity** | Claude Code (#87834), Gemini CLI (#1283), Kimi Code (#1283), OpenCode (#44539 merged), Pi (compaction contract #4394) | Shared project context, AI-managed + user-defined notes, survival across compaction/restore |
| **Remote/mobile collaboration (spectator + veto)** | Kimi Code (#2616), Pi (#8538), CodeWhale (#5574), Gemini CLI (#28982) | `gbr/1` protocol pairing via QR/8-char code; phone as spectator, not orchestrator |
| **Structured review/approval systems** | Qwen Code (#9659, #9794), CodeWhale (#5583, #4394), Copilot CLI (#4563), OpenCode (ACP v2 #44524) | Typed finding contracts, incremental rounds, content-anchored verdicts, ACP compliance |
| **Provider-neutral abstraction layer** | CodeWhale (#5588 18 gates), Qwen Code (#9389 live discovery, #9590 reasoning controls), OpenCode (provider stream hardening #44570), Pi (timeout/retry config #3627) | Live model endpoints, reasoning-effort parity, timeout/retry per provider, no hardcoded gates |
| **Headless/automation hardening** | OpenCode (#44557 `--no-stdin`, #44558 DB serialization, #44559 deny-rules parity), Codex (#38350 scheduled tasks), CodeWhale (#5591–5594 control socket, lifecycle outbox, relaunch) | CI/CD reliability, supervised operation, non-interactive deny rules, external orchestration |
| **Billing/quota transparency** | Kimi Code (#1994, #2604 3–5× metering), Codex (#37445 6%/background run), Claude Code (#87966 59M excess cache tokens) | Predictable token accounting, no silent background consumption, cache efficiency alerting |
| **Windows platform parity** | Claude Code (#81698 GPU crash, #88323 MSIX), Codex (#39170 auth, #38290 sandbox), Copilot CLI (#4570 file locks), Qwen Code (#9775 MCP case-sensitivity), OpenCode (#44528 network, #44576 IDE) | GPU stability, MSIX integrity, auth persistence, file-lock coexistence, case-insensitive paths |

---

## 4. Differentiation Analysis

| Dimension | Tools Leading / Differentiating |
|-----------|--------------------------------|
| **Model provider integration** | **Codex**: First-party OpenAI models + Responses API, Computer Use, MongoDB thread store. **Qwen Code**: Live provider model discovery, per-provider reasoning controls. **CodeWhale**: Systematic provider-neutral audit (18 gates), multi-provider parity as explicit goal. |
| **Sandbox / execution isolation** | **Codex**: bubblewrap hardening (#40302), MongoDB-backed persistence. **Claude Code**: Sandbox localhost block (#28018 75👍), Windows GPU crashes. **Gemini CLI**: Symlink path-traversal fix (#2677 CVE-class), glob symlink respect. **OpenCode**: Workspace-aware FS layer (#44553, #44562, #44568). |
| **Agent orchestration model** | **Gemini CLI**: Subagent-heavy (generalist, browser, shell) but unreliable. **CodeWhale**: Fleet/subagent as first-class with role posture SoT (#5575), approval receipts (#5584). **OpenCode**: ACP v2 for multi-agent protocol. **Qwen Code**: Nested sub-agent approval surfacing (#9793), audit fallback dirs (#9776). |
| **UI / TUI architecture** | **CodeWhale**: Supervised stack (control socket, lifecycle outbox, `/relaunch`). **Qwen Code**: OpenTUI React backend (#8677) for flicker-free streaming. **Pi**: TUI component model (mouse delegation, markdown transformer context). **Codex**: TUI output folding toggle demand (#39903 27👍). |
| **Target user / deployment** | **Claude Code**: Desktop app + Cowork cloud sessions (broken). **Codex**: Desktop + CLI + Remote (Android/Windows pairing broken). **Copilot CLI**: Enterprise GitHub integration, VS Code lock contention. **Kimi Code**: Subscription-based, mobile pairing focus. **OpenCode**: Headless/automation-first, CI/CD hardening. |
| **Extensibility model** | **Pi**: Extension factory staging/rollback (#8424), `navigateTree()` API demand. **Gemini CLI**: Agent/skill symlinks ignored (#20079). **Copilot CLI**: Local plugin hot-reload (v1.0.81-8), MCP live-reload broken. **CodeWhale**: Package gallery indexing broken (#7885). |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenCode**, **Pi**, **CodeWhale** | OpenCode: 19 PRs/24h (11 closed), ACP v2 WIP, DB race fixes. Pi: 10 merged PRs, 30+ issues closed, llama.cpp UX fix. CodeWhale: 5-PR supervised stack, rebrand complete, v0.9.12 P0 sprint. |
| **Substantive Engineering Velocity** | **OpenAI Codex**, **Qwen Code** | Codex: 10 PRs covering sandbox, persistence, context engineering, content-kind taxonomy. Qwen: 10 PRs on review system, OpenTUI React, provider reasoning, output styles. |
| **High Engagement / Stalled Delivery** | **Claude Code**, **GitHub Copilot CLI** | Claude: 351👍 on model quality, 75👍 on sandbox, but 1 doc PR. Copilot: 10 regressions in prerelease, 1 trivial PR, enterprise auth flapping since March. |
| **Niche / Early Stage** | **Kimi Code CLI**, **Gemini CLI** | Kimi: Billing controversy dominates, 2 PRs (remote pairing, plugin docs). Gemini: Nightly cadence, security fixes landed, but subagent/shell reliability P1 blockers persist. |
| **Inactive** | **Grok Build** | No activity in 24h. |

**Maturity signals**: Tools with **merged PRs addressing root causes** (Pi's symlink CVE, OpenCode's DB serialization, Codex's bubblewrap hardening) outpace those with **open PRs only** (Qwen, CodeWhale integration PRs). **Nightly/prerelease channels** (Gemini, Qwen, Copilot, Codex) indicate CI/CD maturity; Claude Code lacks this.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **Protocol standardization over proprietary APIs** | ACP v2 (OpenCode), gbr/1 (Kimi/Pi/CodeWhale), typed review contracts (Qwen/CodeWhale) | **Invest in ACP/gbr/1 compatibility**; vendor lock-in risk decreasing for orchestration layer. |
| **Compaction/session survival as correctness criterion** | Pi (#4394), CodeWhale (#4394), Copilot CLI (#4572), Claude Code (#87966), OpenCode (memory layer #44539) | **Demand structured compaction contracts** before adopting for long-running automation. |
| **Windows as a first-class blocker, not afterthought** | 5/9 tools have critical Windows regressions (GPU, auth, sandbox, file locks, case-sensitivity) | **Validate Windows CI lanes** before enterprise rollout; expect 6–12 month parity lag. |
| **Billing opacity eroding trust** | Kimi (3–5× metering), Codex (silent background quota), Claude (cache miss inflation) | **Require token accounting APIs + alerting**; negotiate enterprise SLAs with observability clauses. |
| **Model quality regressions accepted as "shipping" risk** | Claude Code (4.7→5.0 collapse), Codex (GPT-5.6-luna 403), OpenCode (Ox Alpha Free spin) | **Pin model versions in automation**; treat model upgrades as breaking changes requiring validation. |
| **Local-first / self-hosted demand rising** | Pi (llama.cpp unloaded models, timeout config), CodeWhale (provider-neutral), OpenCode (Ollama/Go relay) | **Evaluate tools on local model ergonomics**; cloud-only tools (Claude, Codex desktop) less suitable for air-gapped

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-24)

---

## 1. Top Skills Ranking — Most-Discussed Skill PRs

| # | Skill | Functionality | Discussion Highlights | Status |
|---|-------|---------------|----------------------|--------|
| **[#514](https://github.com/anthropics/skills/pull/514)** | **document-typography** | Prevents orphan/widow lines, heading stranding, and numbering misalignment in AI-generated documents (PDF, DOCX, HTML). Universal trigger — "every document Claude generates." | Addresses a pervasive invisible-quality problem; no direct issue linkage but solves a universal pain point. | **OPEN** (Mar 2026) |
| **[#486](https://github.com/anthropics/skills/pull/486)** | **odt** (OpenDocument) | Create, fill, read, convert `.odt`/`.ods` files; template filling; parse ODT→HTML. Triggers on "ODT", "OpenDocument", "LibreOffice", ISO-standard requests. | Long-running PR (Mar–Apr 2026); fills a gap for open-standard document workflows. | **OPEN** |
| **[#83](https://github.com/anthropics/skills/pull/83)** | **skill-quality-analyzer** / **skill-security-analyzer** | Meta-skills: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security scanning (secrets, injection, permissions, supply-chain). | Directly supports the repository's own quality gate; referenced in contributor onboarding discussions. | **OPEN** (Nov 2025–Jan 2026) |
| **[#1628](https://github.com/anthropics/skills/pull/1628)** | **Hivemind** | Delegates mechanical coding tasks to headless **opencode** workers (free models) while Claude stays planner/reviewer/merger. Zero-cost multi-agent orchestration. | Novel architecture: expensive model context as scarce resource; very recent (Aug 2026), high novelty. | **OPEN** |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | **self-audit** | Pre-delivery audit: Step 0 mechanical file verification → 4-dimension reasoning audit (correctness, completeness, safety, clarity) in damage-severity priority. Universal, stack-agnostic. | Embodies the "reasoning quality gate" proposal (#1385); v1.3.0 suggests iteration. | **OPEN** (Jun–Jul 2026) |
| **[#723](https://github.com/anthropics/skills/pull/723)** | **testing-patterns** | Full testing stack: Trophy model philosophy, AAA unit patterns, React Testing Library, integration/contract/E2E, property-based, mutation testing, CI/CD integration. | Comprehensive reference skill; addresses a top community need (test generation discipline). | **OPEN** (Mar–Apr 2026) |
| **[#568](https://github.com/anthropics/skills/pull/568)** | **servicenow** | Broad ServiceNow platform assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, SPM, SecOps, Vuln Response, IntegrationHub, Flow Designer, App Engine. | Enterprise-demand skill; long review cycle (Mar–Aug 2026) signals thorough vetting. | **OPEN** |
| **[#525](https://github.com/anthropics/skills/pull/525)** | **pyxel** | Retro/pixel-art/8-bit game development via `pyxel-mcp` MCP server: write → run_and_capture → inspect → iterate loop. | Niche but complete MCP-integrated workflow; author is Pyxel maintainer (kitao). | **OPEN** (Mar–Jul 2026) |

> **Note**: PR comment counts are unavailable (`undefined` in source data). Ranking combines: (a) connection to high-engagement Issues, (b) recency/update frequency, (c) scope/novelty, (d) maintainer involvement.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issue / Comments / 👍) | Implied Skill Direction |
|-------|----------------------------------|-------------------------|
| **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) – 43 comments, 2 👍 | Skills registry governance, signed/verified skills, namespace isolation |
| **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) – 16 comments, 8 👍 | Shared skill library, one-click install, team workspaces, versioned distribution |
| **Broken Evaluation Infrastructure** | [#556](https://github.com/anthropics/skills/issues/556) – 12 comments, 7 👍 + [#1298](https://github.com/anthropics/skills/pull/1298), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) | Reliable `run_eval.py`, Windows-compatible skill-creator, CI-integrated skill testing |
| **Duplicate/Conflicting Bundles** | [#189](https://github.com/anthropics/skills/issues/189) – 6 comments, 9 👍 | Plugin deduplication, dependency resolution, skill conflict detection |
| **Context Window / Token Efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) – 4 comments | Lazy-loading skills, token-budget-aware injection, skill summarization |
| **MCP / Protocol Integration** | [#16](https://github.com/anthropics/skills/issues/16) – 4 comments | Skills as MCP servers, standardized tool schemas, cross-agent interop |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) (closed), [#1385](https://github.com/anthropics/skills/issues/1385) – 4 comments, 1 👍 | Policy enforcement, adversarial review, audit trails, pre-task calibration |
| **Cloud/Enterprise Platform Support** | [#29](https://github.com/anthropics/skills/issues/29) – 4 comments (Bedrock), [#568](https://github.com/anthropics/skills/pull/568) (ServiceNow) | AWS Bedrock, Azure, GCP integrations; ERP/CRM platform skills |
| **Quality Gate / Self-Correction** | [#1329](https://github.com/anthropics/skills/issues/1329) – 9 comments (compact-memory), [#1385](https://github.com/anthropics/skills/issues/1385) | Symbolic memory compression, multi-gate reasoning pipelines, pre/post-task verification |
| **Windows First-Class Support** | [#556](https://github.com/anthropics/skills/issues/556), [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050) | Native `claude.cmd` handling, encoding fixes, pipe I/O stability |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | **skill-creator: run_eval.py fix** | Critical path: unblocks *all* skill description optimization; 10+ independent reproductions; fixes Windows + parallel workers; updated Jun 23 |
| **[#1602](https://github.com/anthropics/skills/pull/1602)** | **Evaluation serialization & benchmark fixes** | Multi-skill reliability sweep (mcp-builder, encoding, metrics, stability); updated Aug 23 |
| **[#1628](https://github.com/anthropics/skills/pull/1628)** | **Hivemind** | High novelty, addresses cost/context pressure; author engaged (Aug 21–23) |
| **[#1615](https://github.com/anthropics/skills/pull/1615)** | **scnet-hpc** | Niche but complete: SSH/Slurm/profile workflows for HPC clusters; recent (Aug 20–23) |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | **self-audit v1.3.0** | Implements the exact pipeline proposed in #1385; iterative versioning shows maturity |
| **[#568](https://github.com/anthropics/skills/pull/568)** | **servicenow** | Enterprise breadth (9+ modules); 5-month review suggests deep validation |
| **[#723](https://github.com/anthropics/skills/pull/723)** | **testing-patterns** | Comprehensive, methodology-first; aligns with "test generation" demand trend |
| **[#514](https://github.com/anthropics/skills/pull/514)** | **document-typography** | Universal applicability; solves silent quality degradation in every doc output |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *trustworthy, shareable, and self-validating skill infrastructure* — not just new domain skills, but the meta-layer that makes skills secure (namespace governance), distributable (org-wide sharing), testable (fixed evaluation pipeline), and composable (MCP/token-efficient, deduplicated, quality-gated).**

---

*Data source: `anthropics/skills` PRs (top 20 by comments) & Issues (top 15 by comments) as of 2026-08-24. PR comment counts unavailable; ranking weights Issue engagement, recency, scope, and maintainer signals.*

---

# Claude Code Community Digest — 2026-08-24

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker is dominated by **model quality regressions** (Claude 4.7–5.0/Fable producing repetitive, incoherent output) and **Windows desktop instability** (GPU crashes, MSIX package corruption). A long-standing sandbox enhancement for localhost access has resurfaced with 75👍, while Cowork/remote sessions are broken by a git proxy change blocking PAT-authenticated pushes.

---

## Releases
**None** in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#77136](https://github.com/anthropics/claude-code/issues/77136) **Model quality collapse** — Claude 4.7, 4.8, 5.0, Fable default to repetitive rhetorical tics; struggle with coherent prose despite style instructions | Affects all users on latest models; core product value proposition undermined | **93 comments, 351👍** — Highest engagement in tracker; users report "unusable" output |
| [#81698](https://github.com/anthropics/claude-code/issues/81698) **Windows GPU process crash** (exit code 101457950) kills entire app + sessions on RTX 5080 | Blocks Windows power users; data loss risk from session termination | **54 comments, 5👍** — Active investigation; driver/app interaction suspected |
| [#76248](https://github.com/anthropics/claude-code/issues/76248) **Cowork git proxy blocks all pushes** — PAT pass-through broken; "not in authorized repository set" | Breaks remote/cloud workflows; appeared mid-session without notice | **29 comments, 9👍** — `CCR_TEST_GITPROXY` rollout suspected; no workaround |
| [#68780](https://github.com/anthropics/claude-code/issues/68780) **Opus 4.8/5.0 reasoning degradation** — Severe downgrade even on Max effort | Paid tier customers experiencing regressions; EU consumer law concerns raised | **29 comments, 35👍** — Long-running; "deceptive practices" allegations |
| [#28018](https://github.com/anthropics/claude-code/issues/28018) **Sandbox blocks localhost** — `EPERM` on `sock.connect()` even with `allowedDomains` | Blocks local Docker/test infra; fundamental sandbox limitation | **8 comments, 75👍** — 6-month-old request; high developer demand |
| [#87966](https://github.com/anthropics/claude-code/issues/87966) **Prompt cache lookup fails mid-session** — 89 full-context rewrites, ~59M excess `cache_creation` tokens over 9 days | Direct cost impact; silent cache misses inflate token usage | **7 comments** — Technical repro; `cache_read` pinned at stable-prefix boundary |
| [#88323](https://github.com/anthropics/claude-code/issues/88323) **Windows MSIX bricks itself** — Code Integrity blocks `vk_swiftshader.dll`, flags package "Modified" | App becomes unlaunchable; requires full reinstall; affects sideloaded installs | **6 comments** — Critical for Windows distribution channel |
| [#76616](https://github.com/anthropics/claude-code/issues/76616) **AskUserQuestion UI: focus click triggers selection** — First click to focus window registers as option pick | UX papercut in TUI; disrupts confirmation flows | **5 comments, 11👍** — Simple fix: ignore focus-click or add setting |
| [#77704](https://github.com/anthropics/claude-code/issues/77704) **Custom MCP connectors lose tools / capped at 256** — Regression since mid-July | Breaks multi-server MCP setups; hard limit undocumented | **4 comments** — Intermittent; affects org + personal accounts |
| [#88747](https://github.com/anthropics/claude-code/issues/88747) **Worktree creation writes absolute `core.hooksPath`** — Worktrees run main checkout's hooks | Git workflow corruption; hooks fire in wrong context | **3 comments** — Variant of #27474/#72714/#85039 not previously covered |

---

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| [#83374](https://github.com/anthropics/claude-code/pull/83374) **docs(plugin-dev): Document `MessageDisplay` streaming semantics** | Adds missing `MessageDisplay` hook event to bundled plugin-dev skill (trigger descriptions, event guidance, quick-reference table) | Open; authored 2026-08-02, updated 2026-08-23 |

*Only 1 PR updated in the last 24h — documentation-only change.*

---

## Feature Request Trends
1. **Sandbox localhost access** (#28018, 75👍) — Developers need to run integration tests against local services (Docker, databases) from sandboxed sessions.
2. **Cross-session persistent memory/identity** (#87834) — Shared context across multiple Claude sessions for long-running projects.
3. **Terminal UX parity** (#87438) — Inline images, consistent clickable-text affordances, schemeless markdown link handling.
4. **Remote control persistence** (#88725) — `remoteControlAtStartup` setting not reapplied to restored sessions after app restart.

---

## Developer Pain Points
| Area | Recurring Themes |
|------|------------------|
| **Model quality** | Repetitive tics, incoherent prose, reasoning degradation across 4.7→5.0; users feel models are "dumber" despite version bumps |
| **Windows reliability** | GPU crashes (RTX 5000 series), MSIX self-corruption, Bun binary masquerading as `claude.exe` (#69884), install script failures |
| **Cowork/remote sessions** | Git proxy breaking PAT auth, worktree reaping during active leases (#78350), session restore bugs |
| **MCP ecosystem** | Tool list capped at 256, connectors intermittently disappearing, no visibility into aggregation logic |
| **Subagent/background tasks** | Notification races (#86365, #88741, #88742), missing UI for resumed agents (#73095), garbled transcript rendering (#76602) |
| **Rules/memory system** | Path-scoped rules fail outside project root (#88945), user-scope `paths:` silently disables rules (#87217), auto-memory directory unreachable |
| **Cost observability** | Silent cache misses generating millions of excess tokens (#87966), no alerting for cache inefficiency |

---

*Data sourced from `anthropics/claude-code` GitHub issues/PRs updated 2026-08-23 → 2026-08-24.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-24

## 1. Today's Highlights
The 0.149.1 patch release lands with sandbox hardening and package smoke tests, while the desktop app faces a cluster of critical regressions: Windows authentication instability after Advanced Account Security enablement, macOS runaway thread crashes from Computer Use, and background app activity silently consuming weekly rate limits. Meanwhile, the CLI introduces persistent configuration friction by retiring `approval_policy="untrusted"` without deprecation.

## 2. Releases
**rust-v0.149.1** — Patch release following 0.149.0-alpha.4.3. Key changes include bubblewrap synthetic mount registry hardening (#40302), MongoDB thread store migration tooling (#31175), cross-platform package smoke tests (#40292), and extensive content-kind annotation preservation across compaction, forking, and model-switch rollbacks (#40264–#40281). Business Pro Lite plans now display as "Business Premium" (#40301). Full changelog: [compare](https://github.com/openai/codex/compare/rust-v0.149.0...rust-v0.149.1)

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#38350](https://github.com/openai/codex/issues/38350)** Recurring scheduled tasks disable themselves after successful runs | Silent task pausing breaks automation reliability; no user action or notification | 35 comments — high urgency for scheduled-task users |
| **[#37445](https://github.com/openai/codex/issues/37445)** ChatGPT desktop app consumes 6% weekly limit per background run | Background suggestions silently burn quota; reproducible, fixed deduction | 14 comments, **10 👍** — direct billing impact |
| **[#39170](https://github.com/openai/codex/issues/39170)** Windows desktop app loses auth within 15–40s after Advanced Account Security | Auth state collapses post-security upgrade; CLI unaffected — platform-specific regression | 14 comments, **15 👍** — blocks Windows Pro/Plus users |
| **[#39903](https://github.com/openai/codex/issues/39903)** Option to disable “Ran N commands” collapsing in TUI | CLI output folding hides executed commands; no toggle exists | 13 comments, **27 👍** — strong UX demand |
| **[#39850](https://github.com/openai/codex/issues/39850)** Cached account-settings 401 drops token without refresh (Windows/Remote) | Remote control stays functional while auth silently fails; caching bug | 11 comments — affects Remote workflows |
| **[#38290](https://github.com/openai/codex/issues/38290)** `CreateProcess: Rejected` helper_unknown_error on Windows sandbox | Sandbox helper setup fails; blocks all tool execution on Windows desktop | 10 comments — platform blocker |
| **[#38792](https://github.com/openai/codex/issues/38792)** Resume opens thread at first turn — desynced cursors since 0.146.1 | Thread history projection corruption persists across versions; breaks session resume | 9 comments — reported by AI fleet operator |
| **[#38939](https://github.com/openai/codex/issues/38939)** macOS runaway `SkyComputerUseService` threads → V8 OOM crash | Computer Use spawns unbounded threads until fatal crash; app unusable on launch | 6 comments — **CRITICAL** severity, macOS blocker |
| **[#39151](https://github.com/openai/codex/issues/39151)** macOS Computer Use spawns unbounded threads → CPU peg + SIGABRT | Same root cause as #38939; reproduces across 3 builds | 4 comments — confirms regression persistence |
| **[#39973](https://github.com/openai/codex/issues/39973)** Retiring `approval_policy="untrusted"` without deprecation weakens approval boundary | Config fails to start; no migration path; removes explicit untrusted mode | 4 comments, **9 👍** — config breakage concern |

## 4. Key PR Progress (Top 10 by Scope)

| PR | Description | Category |
|----|-------------|----------|
| **[#40302](https://github.com/openai/codex/pull/40302)** | Harden bubblewrap synthetic mount registry isolation — prevents writable bind overlap & symlink redirect | Security / Sandbox |
| **[#31175](https://github.com/openai/codex/pull/31175)** | Add MongoDB thread store + `codex sessions migrate-to-mongo` with streaming migration, verification, namespace clearing | Infrastructure / Persistence |
| **[#40292](https://github.com/openai/codex/pull/40292)** | Cross-platform pytest smoke tests for assembled CLI/app-server packages (discovery, code-mode, bundled `rg`) | CI / Release Quality |
| **[#40264–#40281](https://github.com/openai/codex/pull/40264)** | Series preserving content-kind annotations across truncation, fork filtering, model-switch rollback, image prep, compaction, unsupported media | Core / Context Engineering |
| **[#40297](https://github.com/openai/codex/pull/40297)** | Preserve developer instruction annotations in subagent forks via dedicated contextual fragment | Multi-Agent / Context |
| **[#40296](https://github.com/openai/codex/pull/40296)** | Annotate Responses Lite base instructions with `model.base_instructions` content kind | Model Integration |
| **[#40295](https://github.com/openai/codex/pull/40295)** | Reclassify permission instructions to `permissions.instructions` namespace | Permissions / Types |
| **[#40294](https://github.com/openai/codex/pull/40294)** | Derive `InternalModelContextFragment` kinds from source (`<source>.internal_context`) | Observability / Types |
| **[#40257](https://github.com/openai/codex/pull/40257)** | Support `cua_repl` as Node REPL-backed MCP server (Guardian review, policy, transcripts) | MCP / Computer Use |
| **[#40200](https://github.com/openai/codex/pull/40200)** | Remove Plan mode composer nudge; keep normal footer visible | UX / Composer |

## 5. Feature Request Trends
- **Persistent background monitors** (#32993): Self-healing CLI workflows that survive disconnects and resume threads
- **Bidirectional ChatGPT↔Codex context sharing** (#32519): Mobile ideation → desktop implementation handoff with shared project state
- **Subagent cost transparency** (#39808, #40037): Evidence-driven escalation graphs; per-agent overhead budgeting
- **TUI output control** (#39903, #27203): Disable command collapsing; optional host-side timestamps per output block
- **Remote pairing reliability** (#39915): Android↔Windows transport fixes; WebSocket connected but attach fails
- **Browser/Computer Use stability** (#36674, #39543): Tab-close crash on Windows; browser plugin non-functional post-update

## 6. Developer Pain Points
| Pattern | Frequency | Examples |
|---------|-----------|----------|
| **Windows auth/sandbox regressions** | 6+ issues | #39170, #39850, #38290, #40242, #36674, #40163 |
| **macOS Computer Use runaway threads** | 2 critical | #38939, #39151 — app unusable on launch |
| **Silent quota consumption** | 1 high-impact | #37445 — 6%/background run, no user action |
| **Config breaking changes without migration** | 1 | #39973 — `approval_policy="untrusted"` removed |
| **Session resume corruption** | 2 | #38792 (desynced cursors), #40303 (deleted workspace restored) |
| **Subagent lifecycle unreliability** | 2 | #40299 (premature close), #37495 (lost `spawn_agent`) |
| **Remote/Android transport failures** | 1 | #39915 — paired but `Transport unavailable` |
| **VS Code extension 401 errors** | 1 | #40073 — auth regression in 26.818.41509 |

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-24

---

## 1. Today's Highlights
- **Nightly release v0.56.0** shipped with dependency updates (google-auth-library 11.x, puppeteer-core 25.7, @google/genai 2.17) and a critical symlink path-traversal fix merged after 14 months.
- **Security & data-loss fixes landed**: PR #28981 resolves session-retention deletion on short-ID collisions; PR #28980 clears OAuth callback timeouts; PR #2677 prevents workspace escape via symlinks.
- **Agent reliability remains the top pain point**: 49 issues updated today, dominated by subagent recovery bugs, generalist agent hangs, browser-agent Wayland failures, and Auto Memory quality regressions.

---

## 2. Releases
**v0.56.0-nightly.20260824.g5411f113c**  
Automated nightly bump. Notable dependency upgrades:
- `google-auth-library` 10.9 → 11.0.2 (breaking changes possible)
- `puppeteer-core` 24.0 → 25.7.0 (Chromium 131 support)
- `@google/genai` 1.30 → 2.17.1 (Gemini API SDK v2)
- 76-package bulk update via dependabot (#28984)  
[Full changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260823.g5411f113c...v0.56.0-nightly.20260824.g5411f113c)

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS hit** | Silent failure masking; subagent claims completion despite zero work done. | 13 comments, 2 👍, P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** | Core usability blocker; simple folder creation stalls for hours. Workaround: disable subagents. | 8 comments, 8 👍, P1 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell execution stuck at "Waiting input" after completion** | Frequent false-positive interactive prompt detection; breaks automation flows. | 4 comments, 3 👍, P1 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions forever** | Background extractor loops on unreadable transcripts, wasting cycles & API quota. | 5 comments, P2 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** | Linux/Wayland users cannot use browser automation; termination reason misleadingly shows GOAL. | 4 comments, 1 👍, P1 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Tool-count explosion breaks agent; needs smarter scoping. | 3 comments, P2 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` (maxTurns, etc.)** | Configuration overrides silently dropped; limits customization. | 3 comments, P2 |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | **Symlinked agent files not recognized** | Breaks dotfile/shared-config workflows; symlinks in `~/.gemini/agents/` ignored. | 4 comments, P3 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **EPIC: Assess AST-aware file reads/search/mapping** | Strategic investigation: could reduce turns & token noise via precise code navigation. | 7 comments, 1 👍, P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory: redaction happens post-context, logging leaks** | Secrets enter model context before redaction; service logs may retain sensitive data. | 4 comments, P2, security |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#2677](https://github.com/google-gemini/gemini-cli/pull/2677) | **Security** | **Critical fix**: Resolves symlink-based path traversal (CVE-class). Realpath validation before workspace checks. Closed after 14 months. |
| [#28981](https://github.com/google-gemini/gemini-cli/pull/28981) | **Bugfix** | Stops session-retention cleanup from deleting unrelated sessions on 8-char short-ID collision. Fixes user data loss (#28643). |
| [#28980](https://github.com/google-gemini/gemini-cli/pull/28980) | **Bugfix** | Clears OAuth callback timeout on server close; prevents dangling timer callbacks after auth flow completes (#28652). |
| [#28975](https://github.com/google-gemini/gemini-cli/pull/28975) | **Bugfix** | `glob` now respects symlinked workspace roots (macOS `/tmp` → `/private/tmp`). Fixes "No files found" false negatives (#28416). |
| [#28983](https://github.com/google-gemini/gemini-cli/pull/28983) | **Bugfix** | `detectLineEnding()` now requires mixed CRLF/LF to flag CRLF; single `\r\n` no longer misclassifies entire file. |
| [#28982](https://github.com/google-gemini/gemini-cli/pull/28982) | **Feature** | **Example extension**: Build Remote Agent phone pairing (gbr/1 protocol). QR + 8-char code pairing; spectates desktop session via local bot API. |
| [#28985](https://github.com/google-gemini/gemini-cli/pull/28985) | **Deps** | `google-auth-library` 10.9 → 11.0.2 (breaking auth changes; test thoroughly). |
| [#28986](https://github.com/google-gemini/gemini-cli/pull/28986) | **Deps** | `puppeteer-core` 24.0 → 25.7.0 (Chromium 131, new APIs, dropped Node 18). |
| [#28988](https://github.com/google-gemini/gemini-cli/pull/28988) | **Deps** | `@google/genai` 1.30 → 2.17.1 (GenAI SDK v2; major version bump). |
| [#28069](https://github.com/google-gemini/gemini-cli/pull/28069) | **Bugfix** | Strips trailing periods from error URLs (fixes malformed links in diagnostics). |

---

## 5. Feature Request Trends
1. **Agent observability & control** — Subagent trajectories visible in `/chat share` (#22598), bug reports including subagent context (#21763), settings.json overrides respected (#22267).
2. **AST-aware tooling** — Precise method-bound reads, symbol navigation, reduced token noise (#22745, #22746, #19561 "Tactful Extraction").
3. **Memory system hardening** — Deterministic redaction, invalid-patch quarantine, low-signal session backoff (#26522, #26523, #26525, #26516).
4. **Browser agent resilience** — Session takeover, lock recovery, Wayland support, config adherence (#22232, #21983, #22267).
5. **Self-awareness & UX** — Accurate CLI flag/hotkey knowledge (#21432), symlink support for agents (#20079), terminal resize performance (#21924).

---

## 6. Developer Pain Points (Recurring)
- **Subagent unreliability**: Silent MAX_TURNS failures (#22323), generalist hangs (#21409), underutilized skills/agents (#21968), destructive git/DB commands (#22672).
- **Shell/exec flakiness**: False "awaiting input" hangs (#25166), interactive prompt deadlocks (Vite, #22465), tmp script litter (#23571).
- **Tool explosion**: 400 errors beyond ~128 tools (#24246); no automatic scoping.
- **Auto Memory noise**: Infinite retries (#26522), secret leakage risk (#26525), invalid patches polluting inbox (#26523).
- **Platform gaps**: Wayland browser agent broken (#21983), symlink handling inconsistent (#20079, #28975), terminal resize flicker (#21924).
- **Configuration opacity**: Settings.json ignored by browser agent (#22267), agent self-documentation inaccurate (#21432).

---

*Generated from GitHub data (issues/PRs updated 2026-08-24). Links point to live items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-24

---

## 1. Today's Highlights

The v1.0.81-8 prerelease adds **xhigh reasoning effort for Grok 4.6** and makes local plugin development frictionless: path-sourced plugins now hot-reload on `/restart` without requiring `/plugin update`. Meanwhile, the issue queue shows a cluster of regressions in the 1.0.80–81 line—memory storage failures, compaction-related tool-result loss, Windows file-lock conflicts with VS Code, and broken ACP cancellation semantics—suggesting the current prerelease train needs stabilization before GA.

---

## 2. Releases

### v1.0.81-8 (Prerelease)
| Change | Impact |
|--------|--------|
| **Added**: xhigh reasoning effort for Grok 4.6 | Unlocks maximum “thinking budget” for Grok 4.6 users |
| **Improved**: Local (directory-source) plugins load live from source directory | Edit → `/restart` workflow; no more `/plugin update` cycle |
| **Improved**: Skills & custom agents discoverability | Easier discovery of user-defined agents/skills (details truncated in notes) |

> **Note**: This is a prerelease; several open issues (#4535, #4572, #4570) report regressions introduced in the 1.0.81 series.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2306](https://github.com/github/copilot-cli/issues/2306) | **Enterprise auth flapping**: “Not authorized” error appears 2–3×/week then self-resolves | Blocks enterprise users intermittently; policy config appears correct but enforcement is unstable | 👍 3, 9 comments, open since Mar |
| [#4535](https://github.com/github/copilot-cli/issues/4535) | **`store_memory` fails in 1.0.81 prereleases**: “Instance id is required” | Breaks long-term context/memory feature—core to agentic workflows | 5 comments, repro from Femi’s GPT-5.6 agent |
| [#4572](https://github.com/github/copilot-cli/issues/4572) | **Background compaction loses completed GPT tool results → HTTP 400** | Silent data loss in long autopilot sessions; tool ran but result vanished during compaction | New, 1 comment, JSONL evidence provided |
| [#4570](https://github.com/github/copilot-cli/issues/4570) | **Windows: plugin install/update fails with “Access denied” while VS Code runs** | File-lock contention makes plugin mgmt impossible without closing VS Code—major DX hit on Windows | New, affects every plugin |
| [#4566](https://github.com/github/copilot-cli/issues/4566) | **Agent acknowledges work but executes no tool actions** | False-positive progress reporting; user thinks task is done while nothing happens | 👍 1, on gpt-5.3-codex |
| [#4560](https://github.com/github/copilot-cli/issues/4560) | **Model `auto` forces `reasoningEffort: null`, ignores config** | Auto-router silently disables reasoning; users cannot opt in to effort levels | New, affects all auto-model users |
| [#4561](https://github.com/github/copilot-cli/issues/4561) | **ACP `session/cancel` returns `stopReason: "end_turn"` instead of `"cancelled"`** | Violates ACP spec; clients can’t distinguish cancellation from completion | New, blocks proper ACP integration |
| [#4562](https://github.com/github/copilot-cli/issues/4562) | **MCP reload reuses stale workspace config after `.github/mcp.json` edits** | Config changes require full session restart; defeats live-reload intent | New, workspace-scoped MCP broken |
| [#4568](https://github.com/github/copilot-cli/issues/4568) | **`--cloud` owner picker hangs, reconnect crashes, task polling hits 429** | Cloud CLI path largely unusable: hang → timeout → rate-limit cascade | New, multiple coupled failures |
| [#4571](https://github.com/github/copilot-cli/issues/4571) | **Compaction triggers at 50% context with GPT-5.6 Luna Max** | Premature compaction breaks small-task flows; may be model-specific heuristic bug | New, Luna Max specific |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| [#4573](https://github.com/github/copilot-cli/pull/4573) | Open | **Rename `README.md` → `README.mdmain`** — appears to be a typo/low-quality contribution; no functional change. No other PRs updated in the last 24 h. |

> **Observation**: Zero substantive PRs merged or reviewed in the window. The team appears focused on triaging the issue backlog rather than landing features.

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Reasoning-effort control** | #4560 (auto-model disables effort), #4571 (compaction threshold), v1.0.81-8 adds xhigh for Grok | Users want granular, per-model effort knobs—not binary on/off |
| **ACP / protocol compliance** | #4561 (cancel semantics), #4569 (Mobile sync) | Growing demand for first-class ACP support & cross-client consistency |
| **MCP / tooling ergonomics** | #4562 (live config reload), #4570 (Windows file locks), #4567 (insecure OTLP trust) | “Works on my machine” gaps: Windows, local dev, telemetry |
| **Plan/annotation UX** | #4563 (inline plan annotations) | Shift from chat-only to structured review workflows |
| **Cloud CLI reliability** | #4568 (owner picker, 429s), #4569 (Mobile desync) | Remote/cloud workflows still feel beta |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Prerelease instability** – 1.0.81 series introduced memory loss (#4535), compaction bugs (#4572), and reasoning-effort regression (#4560) in rapid succession. Developers treat prereleases as “broken by default.”
2. **Windows + VS Code lock contention** – Plugin management fails whenever VS Code holds a handle (#4570). Workaround: close editor. Unacceptable for daily drivers.
3. **Silent data loss during compaction** – Tool results vanish without warning (#4572). Trust in autopilot sessions erodes.
4. **Enterprise auth flakiness** – Same config works today, fails tomorrow (#2306). Policy propagation latency or cache invalidation bug suspected.
5. **ACP spec deviations** – Cancellation, Mobile sync, and cloud task polling all diverge from expected behavior (#4561, #4568, #4569).
6. **Config hot-reload gaps** – MCP, plugins, and skills require restarts instead of live updates (#4562, v1.0.81-8 only fixes plugins).

---

*Generated from github.com/github/copilot-cli data as of 2026-08-24 00:00 UTC.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-24

---

## 1. Today's Highlights
- **Usage metering controversy dominates discussion**: Two high-engagement issues (#1994, #2604) allege that token-based billing consumes allowances 3–5× faster than advertised, with users reporting only 2–3 queries per 2-hour subscription window.  
- **Memory system feature request gains traction**: Issue #1283 (27 comments) pushes for persistent cross-session context — both AI-managed notes and user-defined instructions — signaling strong demand for long-term agent memory.  
- **New remote-agent pairing PR**: #2616 introduces `gbr/1` protocol support, enabling a mobile spectator/veto client for desktop sessions.

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994) | **Usage calculation problem — 2 tasks exhaust 2-hour quota** | Users report token metering (incl. K2.6 CoT) drains subscription far faster than the advertised “300–1200 API requests per 5h.” Directly impacts paying members. | 👍 7, 8 comments — high frustration; users feel misled by marketing vs. reality. |
| [#2604](https://github.com/MoonshotAI/kimi-cli/issues/2604) | **Weekly allowance reduced ~3–5× without announcement** | Instrumented before/after data suggests a silent metering regression or terms change. Raises trust/billing transparency concerns. | 3 comments, data-driven evidence; author is a Vivace-tier member. |
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System — persistent context across sessions** | Top feature request: automatic (AI-managed) + manual (user-defined) memory for project patterns, preferences, and context. | 27 comments, sustained since Feb; strong community interest in long-term agent continuity. |
| [#2484](https://github.com/MoonshotAI/kimi-cli/issues/2484) | **(Closed) Empty issue** | Placeholder/no content; closed without action. | No discussion. |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#2616](https://github.com/MoonshotAI/kimi-cli/pull/2616) | **Add Build Remote Agent phone pairing (gbr/1)** | Open | Adds `gbr/1` protocol to pair with the `gbr-agent` mobile app (iOS/Android). Phone acts as spectator + veto, not orchestrator. Extends CLI to mobile-assisted workflows. |
| [#2614](https://github.com/MoonshotAI/kimi-cli/pull/2614) | **docs(plugins): document security and persistent data** | Open | Clarifies plugin contract: `plugin.json`, command-based tools, `inject`, and `~/.kimi/plugins/` installation. Addresses security boundaries and data persistence for plugin authors. |

---

## 5. Feature Request Trends
From the active issue set, the clearest recurring themes are:

1. **Persistent / cross-session memory** — Both automatic (AI-summarized) and manual (user-injected) context retention. (#1283)
2. **Transparent, predictable metering** — Users want token accounting aligned with advertised quotas, or a switch to request-based billing. (#1994, #2604)
3. **Remote / mobile collaboration** — Spectator + veto pairing via phone (already in PR #2616).
4. **Plugin ecosystem hardening** — Security model, persistent storage, and installation conventions documented in #2614.

---

## 6. Developer Pain Points
- **Billing opacity**: Multiple paying users report actual consumption 3–5× higher than marketing claims; no official response yet.  
- **Token hunger of K2.6 CoT**: Long chain-of-thought traces eat quota rapidly, making agentic coding expensive.  
- **No session continuity**: Every CLI start is amnesic — users must re-explain project context, conventions, and preferences.  
- **Plugin security uncertainty**: Lack of documented sandbox boundaries and data persistence rules slows third-party tooling.

---

*Digest generated from GitHub data as of 2026-08-24. Links point to live issues/PRs on `MoonshotAI/kimi-cli`.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-24

## Today's Highlights
No new releases shipped today. The core team is focused on stabilizing v1.18.x while advancing ACP v2 support and fixing a cluster of Windows-specific regressions. Notable progress includes serialization of database initialization to eliminate "database is locked" races, hardening of AI provider stream parsing against malformed deltas, and a WIP implementation of the ACP v2 draft specification.

---

## Releases
*No releases published in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#44528](https://github.com/anomalyco/opencode/issues/44528)** Network error on Windows 10 (v1.18.21) | Fresh regression breaking all model calls via OpenCode Go/Ollama Cloud on Windows; 8 comments indicate active debugging | 8 comments, users confirming similar symptoms |
| **[#41518](https://github.com/anomalyco/opencode/issues/41518)** `gpt-5.6-luna` returns 403 via OpenCode Go relay | Regional availability block on a flagship model; affects relay users globally | 8 comments, workarounds discussed |
| **[#31137](https://github.com/anomalyco/opencode/issues/31137)** "Auto-accept permissions" disabled in new layout | UX regression in the redesigned Web UI; blocks a key productivity feature | 6 comments, **6 👍** — high visibility |
| **[#33884](https://github.com/anomalyco/opencode/issues/33884)** TUI plugins via npm spec silently fail (OpenTUI 0.4.2) | Dual-entry regression in v1.17.10; reverted on `dev` but root cause unfixed | 6 comments, 1 👍 |
| **[#44347](https://github.com/anomalyco/opencode/issues/44347)** App bricked — "Interrupted" on every session | Post-update catastrophe: all sessions (old/new) dead, no logs | 3 comments, urgent tone |
| **[#44556](https://github.com/anomalyco/opencode/issues/44556)** `run --session` hangs on `question` tool for resumed sessions | Headless automation deadlock when resuming API-created sessions; no timeout | 2 comments, PR **#44559** fixes |
| **[#44332](https://github.com/anomalyco/opencode/issues/44332)** Ox Alpha Free (Unlimited) spins without output | Free tier model regression; worked yesterday, now hangs at "thinking" | 2 comments |
| **[#44553](https://github.com/anomalyco/opencode/issues/44553)** `FileSystemSearch` ignores workspace placement | Core filesystem layer picks implementation via process-local facts, breaking remote workspaces | 1 comment, technical depth |
| **[#44486](https://github.com/anomalyco/opencode/issues/44486)** OpenAI rejects PDF in tool-result replay (v2.0) | PDF `read` tool output breaks subsequent OpenAI Responses turns — **CLOSED** via PR | 1 comment |
| **[#44576](https://github.com/anomalyco/opencode/issues/44576)** Windows IDE: input fields gray out, remote server add broken | Two severe Windows UX bugs reported together; settings and remote config unusable | 0 comments, just filed |

---

## Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| **[#44570](https://github.com/anomalyco/opencode/pull/44570)** | Fix | Drop unknown/malformed provider stream parts in Gemini & Anthropic Messages — forward-compat without weakening known schemas |
| **[#44535](https://github.com/anomalyco/opencode/pull/44535)** | Fix | Stop creating phantom `unknown` tool parts on re-emitted deltas (closes **#33618**) |
| **[#43894](https://github.com/anomalyco/opencode/pull/43894)** | Fix | Degrade photon resizer load failure to typed error on `workerd` — prevents permanent session wedge (HTTP 500 loop) — **CLOSED** |
| **[#44575](https://github.com/anomalyco/opencode/pull/44575)** | Fix | Ignore orphan response deltas (text/refusal/reasoning/function args) until output item exists; tighten delta validation |
| **[#44573](https://github.com/anomalyco/opencode/pull/44573)** | Chore | Upgrade `drizzle-orm` to `1.0.0-rc.5` + compatible `drizzle-kit`; drop Effect v4 patch; adapt SQLite/PlanetScale consumers |
| **[#44558](https://github.com/anomalyco/opencode/pull/44558)** | Fix | Serialize DB init & migrations across processes (closes **#33320**); eliminates "database is locked" race under parallel `opencode run` |
| **[#44557](https://github.com/anomalyco/opencode/pull/44557)** | Fix | Add `--no-stdin` to skip reading piped stdin (closes **#42064**); prevents hangs in CI/supervisor environments |
| **[#44524](https://github.com/anomalyco/opencode/pull/44524)** | Feat | **WIP**: ACP v2 draft support per migration guide — draft PR tracking progress |
| **[#44559](https://github.com/anomalyco/opencode/pull/44559)** | Fix | Apply non-interactive deny rules (`question`, `plan_enter`, `plan_exit`) to resumed sessions (closes **#44556**) |
| **[#44562](https://github.com/anomalyco/opencode/pull/44562)** | Fix | Resolve external paths through location environment (not server host fs) for workspace-backed Locations |
| **[#44566](https://github.com/anomalyco/opencode/pull/44566)** | Fix | TUI: show effective default model when session stored with `model: null` (was "No provider selected") |
| **[#44569](https://github.com/anomalyco/opencode/pull/44569)** | Fix | Fail loudly on missing Anthropic `tool_use.id` — was fabricating `String(index)`, hiding gateway bugs |
| **[#44567](https://github.com/anomalyco/opencode/pull/44567)** | Fix | Accept `null` as "omitted" for optional tool inputs where JSON Schema permits null but Effect expects `undefined` |
| **[#44372](https://github.com/anomalyco/opencode/pull/44372)** | Fix | Report skipped plugins when no server entrypoint found (closes **#44367**) — adds visibility to silent npm plugin drops |
| **[#44539](https://github.com/anomalyco/opencode/pull/44539)** | Feat | Project memory layer (tool + system context source) — `memory` tool with namespaced storage — **CLOSED** |
| **[#44545](https://github.com/anomalyco/opencode/pull/44545)** | Feat | TUI: discoverable queue controls with terminal-safe keybinds (leader-chord fallbacks for VS Code terminal) — **CLOSED** |
| **[#44492](https://github.com/anomalyco/opencode/pull/44492)** | Feat | `disabled_plugins` config + plugin management CLI commands (closes **#7687**) |
| **[#44572](https://github.com/anomalyco/opencode/pull/44572)** | Fix | Stream Bun runtime downloads to disk — avoids `Bun.write` GC hang causing 30-min CI timeouts — **CLOSED** |
| **[#44547](https://github.com/anomalyco/opencode/pull/44547)** | Docs | Add Bee by HEOSSI provider to directory — **CLOSED** |
| **[#44549](https://github.com/anomalyco/opencode/pull/44549)** | Test | Skip platform-neutral shell retention test on Windows (27 PowerShell processes hit 5s timeout) — **CLOSED** |

---

## Feature Request Trends
1. **ACP v2 Adoption** — Active WIP implementation (#44524) plus doc updates (#44574) signal protocol upgrade priority.
2. **Plugin Lifecycle Control** — `disabled_plugins` config (#44492), skipped-plugin reporting (#44372), and npm-spec TUI plugin support (#33884) show demand for granular plugin management.
3. **Workspace-Aware Filesystem** — Four issues (#44553, #44568, #44561, #44555) converge on making Location/FS operations respect remote sandbox boundaries instead of probing host FS.
4. **Headless/Automation Hardening** — `--no-stdin` (#44557), deny-rule parity for resumed sessions (#44559), DB race fixes (#44558) target CI/CD reliability.
5. **Memory/Context Persistence** — Merged memory layer (#44539) enables cross-session knowledge; likely to expand.
6. **TUI Discoverability** — Queue controls (#44545), effective model display (#44566) improve keyboard-driven UX.

---

## Developer Pain Points
- **Windows fragility**: Network stack breaks (#44528), IDE input fields gray out (#44576), test timeouts (#44549), shell retention flakiness — Windows remains a second-class platform.
- **Provider relay opacity**: 403 errors (#41518), silent free-tier failures (#44332, #44542), no visibility into relay health or regional routing.
- **Session corruption after updates**: "Interrupted" brick (#44347), phantom tool parts (#33618), orphan deltas wedge sessions — upgrade risk is high.
- **Silent plugin failures**: npm-spec TUI plugins drop without logs (#33884, #44372); developers waste hours debugging config.
- **Remote workspace friction**: Filesystem ops probe host FS instead of sandbox (#44553, #44568, #44561, #44555), breaking path resolution, permissions, and search in containerized/remote setups.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-24

## Today's Highlights
The Pi ecosystem saw a wave of bug fixes and polish over the last 24 hours, with 30+ issues closed and 16 PRs merged. The biggest user-facing improvements are **llama.cpp unloaded models now appearing in `/model`** (no manual `/llama load` needed), **Windows Terminal key-binding conflicts documented**, and **strict OpenAI-compatible providers (Kimi/Moonshot) now handling replayed tool history correctly**. Several core reliability fixes landed: edit-tool control-character parsing, grep/find output capping, and agent retry backoff capping.

---

## Releases
*No new releases in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#8167](https://github.com/earendil-works/pi/issues/8167)** Cannot pick a model with built-in llama.cpp support | **10 comments** — Blocked users on llama-server router mode; models invisible in `/model` despite being loadable via `/llama`. | High frustration; config-sharing in thread. **Fixed by #8535/#8479**. |
| **[#3627](https://github.com/earendil-works/pi/issues/3627)** Expose timeout/retry settings on openai-* providers | **7 comments, 2 👍** — 10-min default timeout breaks local inference; long-standing (refs #3159, #3589). | Persistent pain point for self-hosted model users. |
| **[#7885](https://github.com/earendil-works/pi/issues/7885)** npm search not indexing new pi-packages | **7 comments** — New packages (e.g. `pi-affix-prompt`) invisible on pi.dev/packages gallery. | Blocks package discoverability; 49/50 listed packages found via search. |
| **[#5932](https://github.com/earendil-works/pi/issues/5932)** Expose `ctx.navigateTree()` to agents | **7 comments, 2 👍** — Needed for custom `/goal` implementations; exists on `ExtensionCommandContext` only. | Extension authors blocked on tree navigation API. |
| **[#7740](https://github.com/earendil-works/pi/issues/7740)** TUI after `/reload` breaks custom tool rendering | **4 comments** — Tools registered on `session_start` (e.g. MCP) render incorrectly post-reload due to load order. | Affects extension developers using dynamic tool registration. |
| **[#7724](https://github.com/earendil-works/pi/issues/7724)** Cold restore replays overflow assistant removed by live recovery | **4 comments** — Session restore re-adds truncated assistant response, polluting history. | Data integrity issue for long-running sessions. |
| **[#8452](https://github.com/earendil-works/pi/issues/8452)** Improve default compaction prompt for continuation-state fidelity | **5 comments** — Current prompt preserves prose over structured state; hurts coding session checkpoints. | Request for smarter summarization (merge/deduplicate/reconcile). |
| **[#8537](https://github.com/earendil-works/pi/issues/8537)** Kimi 400s on replayed tool history (orphaned tools, duplicate IDs) | **2 comments** — Strict providers reject history that lenient ones accept; blocks Moonshot/Kimi users. | **Fixed by #8536**. |
| **[#8531](https://github.com/earendil-works/pi/issues/8531)** Auto-retry stalls after provider timeouts; paused workflows can't consume signals | **1 comment** — 7-step unattended workflow exposed: retry exhaustion, signal consumption, intervention force-advance. | Deep workflow reliability concern. |
| **[#8522](https://github.com/earendil-works/pi/issues/8522)** Agent operates outside session cwd — modifies unrelated projects | **1 comment** — Agent scans from `~/`, edits files across projects; workspace boundary not enforced. | Security/usability risk; unexpected file mutations. |

---

## Key PR Progress (Top 10 Merged/Updated)

| PR | Summary | Impact |
|----|---------|--------|
| **[#8535](https://github.com/earendil-works/pi/pull/8535)** feat: show unloaded llama.cpp models in `/model` | llama.cpp router exposes unloaded models; auto-loads on prompt. Removes manual `/llama` step. | **Closes #8167, #8539**. Major UX win for local LLM users. |
| **[#8536](https://github.com/earendil-works/pi/pull/8536)** fix: normalize tool-result history for strict OpenAI-compatible providers | Strips orphaned tool messages, fixes interleaved user messages, deduplicates `tool_call_id`. | **Closes #8537**. Unblocks Kimi/Moonshot via `openai-completions`. |
| **[#8513](https://github.com/earendil-works/pi/pull/8513)** fix: repair raw control chars in stringified edit args | Handles real newlines/tabs inside JSON-stringified `edits` (follow-up to #3370). | **Closes #8521**. Prevents silent edit-tool failures. |
| **[#8532](https://github.com/earendil-works/pi/pull/8532)** fix: cap grep/find child output to prevent `RangeError` | `readline` buffer unbounded; single massive line crashes parent. Adds line-length cap. | **Closes #8532**. Hardens tool execution against pathological output. |
| **[#8509](https://github.com/earendil-works/pi/pull/8509)** fix: surface stream errors & support toolless models | Treats `native_finish_reason: "network_error"` as error (not clean stop); handles 0-token responses. | **Closes #8499**. Prevents silent mid-task session termination. |
| **[#8505](https://github.com/earendil-works/pi/pull/8505)** fix: cap agent retry backoff (`maxAgentDelayMs`) | Adds configurable cap (default 30s) to exponential backoff; prevents runaway waits. | **Closes #8505**. Improves unattended workflow predictability. |
| **[#8487](https://github.com/earendil-works/pi/pull/8487)** fix: expose finish reason compatibility override | Types now expose existing API for provider-specific finish-reason handling. | **Closes #8460**. Extensibility for custom providers. |
| **[#8424](https://github.com/earendil-works/pi/pull/8424)** fix: discard failed extension factory state | Stages factory state; rolls back listeners/API on throw/reject. Prevents zombie extensions. | **Closes #8424**. Extension system stability. |
| **[#8500](https://github.com/earendil-works/pi/pull/8500)** fix: eliminate plan-mode false positives (bash guard, plan extraction) | Fixes `\bcode\b` blocking legitimate paths; hardens plan extractor against demo text. | **Closes #8500**. Restores plan-mode usability. |
| **[#8538](https://github.com/earendil-works/pi/pull/8538)** feat: Build Remote Agent phone pairing (gbr/1) | Adds pairing protocol for Linespotting's Build Remote Agent (spectator+veto, local HTTP attach). | New remote-collaboration surface; experimental. |

---

## Feature Request Trends (from Issues)

1. **Provider parity & configurability** — Timeouts, retries, thinking-level maps, unloaded model visibility, custom provider docs. Users want first-class control over every provider knobs.
2. **Extension API depth** — `navigateTree()`, skill visibility, `user_bash_complete` event, mid-sentence skill invocation. Extension authors need richer, narrower hooks.
3. **Session/history fidelity** — Compaction prompt quality, cold-restore correctness, tool-history normalization for strict providers. Trust in session persistence is paramount.
4. **Windows/terminal compatibility** — Key-binding conflicts, drive-letter `@` autocomplete, PowerShell tool, trailing-space copy artifacts. Windows is a first-class target now.
5. **TUI component model** — Mouse event delegation, markdown transformer context (`messageId`, `timestamp`), symbol highlighting. Polishing the native UI layer.

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Silent failures / opaque errors** | #8541 (429 → `ERROR`), #8509 (network_error → clean stop), #8527 (TypeError on undefined), #8526 (Vertex array errors dropped) | 5+ issues |
| **Workspace boundary violations** | #8522 (agent scans `~/`, edits unrelated projects), #8523 (drive-letter autocomplete broken) | 2 issues, high severity |
| **Session restore corruption** | #7724 (overflow replay), #8525 (abort misparents tool result), #8537 (history invalid for strict providers) | 3 issues |
| **Tool argument parsing brittleness** | #8521 (control chars in edits), #8532 (grep/find buffer overflow), #8529 (todo toggle non-idempotent) | 3 issues |
| **Extension lifecycle fragility** | #7740 (reload breaks `session_start` tools), #8424 (failed factory leaves listeners), #5932 (missing context APIs) | 3 issues |
| **Provider-specific quirks unhandled** | #8537 (Kimi strict validation), #8519 (OpenRouter thinking map), #8526 (Vertex array errors), #3627 (timeout defaults) | 4+ issues |

---

*Generated from github.com/badlogic/pi-mono — 38 issues & 16 PRs updated 2026-08-23 → 2026-08-24.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-24

## 1. Today's Highlights
The v0.22.0 nightly release delivers a fix for web-shell session workspace handling when opening from the overview panel. Active development continues on the review system overhaul (incremental rounds, typed findings contracts), provider-aware reasoning controls, and a new OpenTUI React-based renderer backend. A Windows-specific MCP approval case-sensitivity bug was identified and closed, while CI test lane failures on Windows/macOS are being repaired.

## 2. Releases
### v0.22.0-nightly.20260824.3a1f86d805
**Changes:** Fixes web-shell to pass session workspace `cwd` when opening from the overview panel ([#9730](https://github.com/QwenLM/qwen-code/pull/9730)). Additional fixes included but truncated in release notes.

## 3. Hot Issues
| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#9775](https://github.com/QwenLM/qwen-code/issues/9775) **MCP approval path case sensitivity on Windows** (CLOSED) | Blocked VS Code extension from recognizing CLI-approved project-scoped MCP servers on Windows due to filesystem case-insensitivity mismatch. | 2 comments; priority/P2 bug affecting cross-platform workflow. |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) **Fleet Shepherd Dashboard** (OPEN) | Auto-maintained bot fleet status dashboard; shows scan-signal age, syncs, dispatches, releases, cleanups. | 3 comments; operational visibility for maintainers. |
| [#9750](https://github.com/QwenLM/qwen-code/issues/9750) **Deferred review findings from PR #9742** (OPEN) | Autofix loop deferred verified review findings outside PR scope for follow-up; maintainers can convert to issues/PRs. | 1 comment; technical debt tracking. |

## 4. Key PR Progress
| PR | Title | Type | Significance |
|----|-------|------|--------------|
| [#9565](https://github.com/QwenLM/qwen-code/pull/9565) | feat(core): add output-style layer to system prompt | Feature | Introduces 4 built-in output styles (Concise, Proactive, etc.) chosen per session. |
| [#9793](https://github.com/QwenLM/qwen-code/pull/9793) | fix(core): surface nested sub-agent approvals under background parents | Bug Fix | Fixes hanging nested sub-agent tool confirmations (#9782). |
| [#9659](https://github.com/QwenLM/qwen-code/pull/9659) | feat(review): content-anchored incremental rounds for local review-fix loop | Feature | Part 1 of review system overhaul; enables per-file verdicts surviving rebase. |
| [#9794](https://github.com/QwenLM/qwen-code/pull/9794) | feat(review): report findings to clients as typed contract | Feature | Adds `report_findings` core tool; replaces Markdown convention with typed `{level, findings[]}` payload. |
| [#9776](https://github.com/QwenLM/qwen-code/pull/9776) | feat(core): add per-project outside-repo artifact landing | Feature | Adds `Storage.getAuditFallbackDir()` for artifacts that must not reach audited repo (0700, project-hash keyed). |
| [#9389](https://github.com/QwenLM/qwen-code/pull/9389) | feat(providers): recommend live model list in setup wizard | Feature | Wizard now queries provider's `/models` endpoint for current recommendations instead of static list. |
| [#8677](https://github.com/QwenLM/qwen-code/pull/8677) | feat(tui): OpenTUI renderer backend (React track) | Feature | New default TUI: flicker-free, first-class mouse, streaming markdown/tool/thinking/sub-agent support. |
| [#9590](https://github.com/QwenLM/qwen-code/pull/9590) | feat: support provider-aware reasoning controls | Feature | Adds WebShell reasoning controls for DeepSeek V4, GLM 5.2, Kimi; matches documented routes per provider. |
| [#9728](https://github.com/QwenLM/qwen-code/pull/9728) | fix: repair Windows and macOS test lane failures | CI/Infra | Fixes product bugs, test fixtures, and CI harness to revive platform lanes (#9370). |
| [#9657](https://github.com/QwenLM/qwen-code/pull/9657) | feat(web-shell): compact agent activity summaries | UX | Folds adjacent thinking/tool/parallel agents into expandable summary rows. |

## 5. Feature Request Trends
1. **Review System Modernization** — Multiple PRs (#9340, #9659, #9794) converging on incremental, content-anchored review rounds with typed finding contracts.
2. **Provider-Aware Model Capabilities** — Live model discovery (#9389), reasoning control parity per provider (#9590), effort-tier capping per endpoint (#9501).
3. **TUI/UX Overhaul** — OpenTUI React backend (#8677), compact activity summaries (#9657), WSL/ConPTY rendering fixes (#7897).
4. **Sub-Agent/Background Work Orchestration** — Nested approval surfacing (#9793), `create_sub_session` scoped to `qwen serve` (#9425), audit fallback dirs (#9776).
5. **Cross-Platform Parity** — Windows MCP case-sensitivity (#9775), macOS/Windows CI lane repairs (#9727), file link preservation in exports (#8953).

## 6. Developer Pain Points
- **Windows Path/Case Sensitivity** — MCP approval paths, filesystem assumptions causing VS Code/CLI divergence (#9775).
- **WSL/ConPTY Rendering Bugs** — Streaming text duplication due to terminal redraw optimizer misbehavior (#7897, #7634).
- **Review Loop Scalability** — Legacy review system couldn't handle rebases or large PR growth; driving typed contract + incremental rounds work.
- **Multi-Session Daemon Log Leakage** — Debug logs crossing session boundaries in ACP mode (#9535/#9538).
- **CI Platform Instability** — Windows/macOS test lanes frequently red, requiring dedicated repair PRs (#9728, #9370).
- **Sub-Agent Approval Deadlocks** — Nested background agents hanging on un-surfaced confirmations (#9782/#9793).

---

*Data sourced from github.com/QwenLM/qwen-code — releases, issues, and PRs updated 2026-08-24.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-24

---

## 1. Today's Highlights

The project has officially rebranded from `deepseek-tui` to **CodeWhale** (Shannon Labs' public product), with the legacy npm package deprecated. The v0.9.12 milestone is actively tracking 10+ P0/P1 fixes spanning spend bounding, cache control for Anthropic routes, workflow schema repair, and subagent lifecycle bugs. A new supervised-operation stack (control socket, lifecycle outbox, `/relaunch`) landed in review, enabling machine-readable session management for long-running agents.

---

## 2. Releases

**v0.9.11** — *Released*  
- **Rebrand complete**: `codewhale` binary, npm package, and release assets now lowercase; `deepseek-tui` npm package deprecated, no further releases  
- **Migration note**: Users on v0.8.x (`deepseek`/`d` commands) must migrate to `codewhale`  
- **Release page**: [v0.9.11](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.11)

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1004](https://github.com/Hmbown/CodeWhale/issues/1004) | **`/dryrun` — preview next chat completion request** | Critical for V4 Pro users iterating on long turns (large context, cached files, tools); avoids costly blind sends | 10 comments, closed (shipped) |
| [#4326](https://github.com/Hmbown/CodeWhale/issues/4326) | **Perf: bound RSS after cancelling 32-worker storm** | High fan-out PTY benchmark shows RSS growth post-cancellation; need to distinguish allocator retention vs. leak | 6 comments, open |
| [#5583](https://github.com/Hmbown/CodeWhale/issues/5583) | **Workflow `responseSchema` failures need bounded repair & raw receipts** | Schema failures discard malformed output instead of enabling repair; blocks reliable structured workflows | 3 comments, open (v0.9.12) |
| [#5582](https://github.com/Hmbown/CodeWhale/issues/5582) | **Workflow owner snapshots collapse `Degraded` into `Completed`** | Misrepresents degraded runs as healthy; breaks observability for multi-step workflows | 3 comments, open (v0.9.12) |
| [#5595](https://github.com/Hmbown/CodeWhale/issues/5595) | **Read-only children reject `git -C <workspace>` at execute time** | Reviewer subagent burned 347k tokens unable to run canonical repo inspection; classifier allows but executor blocks | 1 comment, open (v0.9.12) |
| [#5575](https://github.com/Hmbown/CodeWhale/issues/5575) | **Fleet/subagent role posture has no single source of truth** | Role permissions defined in 5+ places (verifier contradiction was symptom); drift causes silent misbehavior | 1 comment, open (v0.9.12) |
| [#5588](https://github.com/Hmbown/CodeWhale/issues/5588) | **18 DeepSeek-exclusive gates that should be provider-neutral** | Audit found 18 suspect gates; 1 fixed (NVIDIA NIM env leak); blocks multi-provider parity | 0 comments, open |
| [#5586](https://github.com/Hmbown/CodeWhale/issues/5586) | **Decompose mega files: lib.rs (18.7k), config.rs (12.3k), client.rs (11.1k), runtime_threads.rs (9.3k)** | 10k+ line files cause review pain, merge conflicts, and cognitive load; requested for 0.9.12 cleanup | 0 comments, open |
| [#5596](https://github.com/Hmbown/CodeWhale/issues/5596) | **Turn end silently cancels turn-owned subagents, destroys resumable work** | Long-running reviewers lose all work when parent turn ends; UI claims children continue | 0 comments, open (v0.9.12) |
| [#4394](https://github.com/Hmbown/CodeWhale/issues/4394) | **Compaction: publish & enforce structured survival contract** | Compaction has implementation but no explicit contract for what state survives; risks silent context loss | 3 comments, open |

---

## 4. Key PR Progress (Top 10 by Scope & Readiness)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#5576](https://github.com/Hmbown/CodeWhale/pull/5576) | **0.9.12 integration: must-fix + UX fixes (WIP)** | Open | 24 commits: R2 approval-scope fix, R3 SSE error frames, R4 tool budget, R5 subagent receipts, UX polish; awaits remaining P0/P1 |
| [#5594](https://github.com/Hmbown/CodeWhale/pull/5594) | **Control socket — part d (final)** | Open | Opt-in Unix JSON-RPC socket per session for supervised operation; enables external orchestration |
| [#5593](https://github.com/Hmbown/CodeWhale/pull/5593) | **`/relaunch` command — part c** | Open | Self-relaunch after `/update`: saves session, restores terminal, flushes telemetry, emits `session_end` |
| [#5591](https://github.com/Hmbown/CodeWhale/pull/5591) | **Goal continuation cadence fix — part a** | Open | `[goal] continuation_delay_seconds` now applied to both dispatch paths (was missing in within-turn hook) |
| [#5592](https://github.com/Hmbown/CodeWhale/pull/5592) | **Lifecycle outbox — part b** | Open | Opt-in JSONL/webhook per lifecycle event (`turn_start`, `subagent_spawn`, `session_end`, …) for TUI + headless |
| [#5590](https://github.com/Hmbown/CodeWhale/pull/5590) | **CI: run Linux workspace tests on PRs** | **Closed** | Fixes #5547 — runs Rust test/clippy/doctests on Ubuntu regardless of branch prefix (not just mirrored branches) |
| [#5584](https://github.com/Hmbown/CodeWhale/pull/5584) | **Fix(subagents): persist child approval receipts** | Open | Inherits session approval store in child runtimes; commits `Asked` before prompt, terminal outcome before close |
| [#5574](https://github.com/Hmbown/CodeWhale/pull/5574) | **Add Build Remote Agent phone pairing (gbr/1)** | Open | Optional phone spectator via `gbr-agent` v0.6+; QR + 8-char code; reuses existing `gbr/1` protocol |
| [#5561](https://github.com/Hmbown/CodeWhale/pull/5561) | **Fix(engine): auto-retry reasoning-only clean-stop** | **Closed** | Reasoning-only clean stop (no answer/tool call) now auto-retries instead of dead-ending turn with error |
| [#5545](https://github.com/Hmbown/CodeWhale/pull/5545) | **Fix(pricing): bill whole Beijing weekends off-peak for DeepSeek V4** | **Closed** | Aligns `deepseek_is_peak` with new pricing: off-peak all day Sat/Sun Beijing time (effective 2026-08-23) |

---

## 5. Feature Request Trends (from Issues)

| Direction | Representative Issues | Signal Strength |
|-----------|----------------------|-----------------|
| **Provider neutrality / multi-provider parity** | [#5588](https://github.com/Hmbown/CodeWhale/issues/5588) (18 gates), [#5103](https://github.com/Hmbown/CodeWhale/issues/5103) (rename `DeepSeekClient`), [#5092-5094](https://github.com/Hmbown/CodeWhale/issues/5092) (Responses API dialect profiling) | Very High — systematic audit underway |
| **Subagent / Fleet first-class support** | [#5575](https://github.com/Hmbown/CodeWhale/issues/5575) (role posture SoT), [#5596](https://github.com/Hmbown/CodeWhale/issues/5596) (turn-end cancellation), [#5589](https://github.com/Hmbown/CodeWhale/issues/5589) (fleet config UX), [#5263](https://github.com/Hmbown/CodeWhale/issues/5263) (prompt assembly in core) | High — multiple v0.9.12 P0 items |
| **Workflow reliability & observability** | [#5583](https://github.com/Hmbown/CodeWhale/issues/5583) (schema repair), [#5582](https://github.com/Hmbown/CodeWhale/issues/5582) (degraded state), [#4394](https://github.com/Hmbown/CodeWhale/issues/4394) (compaction contract) | High — blocking structured agent workflows |
| **Supervised/headless operation primitives** | [#5535](https://github.com/Hmbown/CodeWhale/pull/5535) (lifecycle outbox, control socket, `/relaunch`), [#5590](https://github.com/Hmbown/CodeWhale/pull/5590) (CI for headless) | Rising — 5-PR stack in review |
| **Performance & resource bounding** | [#4326](https://github.com/Hmbown/CodeWhale/issues/4326) (RSS after cancel), [#5566](https://github.com/Hmbown/CodeWhale/issues/5566) (bounded spend), [#5581](https://github.com/Hmbown/CodeWhale/issues/5581) (per-step cost granularity) | High — money/safety category |
| **Codebase modularization** | [#5586](https://github.com/Hmbown/CodeWhale/issues/5586) (mega files), [#5587](https://github.com/Hmbown/CodeWhale/issues/5587) (dead code), [#4173](https://github.com/Hmbown/CodeWhale/issues/4173) (de-hardcode registries), [#5580](https://github.com/Hmbown/CodeWhale/issues/5580) (event_loop reducers) | Medium — tech debt sprint for 0.9.12 |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Silent subagent work loss** | #5596: turn end destroys resumable children; #5584: approval receipts not persisted | 2+ issues, v0.9.12 P0 |
| **No visibility into pending request payload** | #1004: `/dryrun` shipped after users burned tokens on blind sends | High (10 comments) |
| **Role/permission drift across 5+ definition sites** | #5575: verifier contradiction was symptom; fleet config UX broken (#5589) | Multiple issues |
| **DeepSeek-hardcoded gates blocking custom providers** | #5588: 18 suspect gates; #5103: `DeepSeekClient` name leaks everywhere | Audit complete, fixes pending |
| **Mega files impede contribution & review** | #5586: 4 files >10k lines; #5580: monolithic `event_loop.rs`/`app.rs` | Explicit user ask for 0.9.12 |
| **CI gaps for non-mirrored branches** | #5547/#5590: Linux tests skipped on `codex/*`, `release/*` PRs | Fixed in #5590 |
| **Compaction/context survival undefined** | #4394: no contract for what survives compaction; heuristic-only | Long-standing, now prioritized |
| **Weekend pricing misbilling** | #5545: UTC-hour logic vs. Beijing-time weekend off-peak | Fixed, but shows config drift risk |
| **Non-English route interaction bugs** | #5290: clickable controls broken on localized routes | Open, needs browser matrix |

---

*Digest generated from GitHub data (Hmbown/CodeWhale) as of 2026-08-24. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*