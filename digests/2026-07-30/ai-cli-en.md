# AI CLI Tools Community Digest 2026-07-30

> Generated: 2026-07-30 02:54 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-07-30)

---

## 1. Ecosystem Overview

The AI CLI landscape is maturing along two parallel tracks: **platform hardening** (Windows/Linux standards compliance, process hygiene, session resilience) and **workflow orchestration** (multi-session management, subagent autonomy, hook/extension ecosystems). All major tools shipped or prepared releases in the last 24 hours except Grok Build. Windows stability dominates critical-path bugs across Claude Code, Codex, Copilot CLI, and OpenCode, while Linux/Unix standards (XDG, Wayland, ARM64) remain systemic gaps. Enterprise-readiness signals are rising: custom API gateways (Kimi), credential export for CI/CD (Pi), BearerToken auth (Copilot), and cloud-managed MCP resolution (Codex). The ecosystem is converging on **session as a first-class object** — portable, resumable, inspectable, and shareable.

---

## 2. Activity Comparison

| Tool | Hot Issues (Tracked) | Key PRs (Tracked) | Release Status (24h) | Critical Bug Themes |
|------|---------------------|-------------------|----------------------|---------------------|
| **Claude Code** | 10 | 4 | None | XDG non-compliance (406 👍), Windows GPU/MSIX corruption, silent text drops in adaptive thinking |
| **OpenAI Codex** | 10 | 10 | 4 alphas (`0.146.9.x` → `0.147.0.a2`) | Windows process storms, 165 GiB session bloat, OneDrive/Google Drive sandbox failures |
| **Gemini CLI** | 10 | 10 | Nightly `v0.55.0` (changelogs for 0.53/0.54) | `thoughtSignature` 400 errors, subagent false success, Auto Memory runaway retries |
| **GitHub Copilot CLI** | 10 | 1 | `v1.0.76` (5 pre-releases) | Linux zombie processes, silent crash on log-level≠all, typing latency degradation |
| **Kimi Code CLI** | 1 | 4 (2 merged) | None | Enterprise gateway API Base URL, hook payload fidelity, Windows `pwsh` default |
| **OpenCode** | 10 | 10 | None | Windows ARM64 TUI init, multi-param tool SchemaError, `/btw` context injection (168 👍) |
| **Pi** | 10 | 10 (all merged) | `v0.83.0` | Provider config drift (Qwen/DeepSeek/Aliyun), `/scoped-models` 5-min stall, Kitty protocol leaks |
| **Qwen Code** | 10 | 10 | Nightly `v0.21.1` | Daemon writer-lock leakage (P0), 4 simultaneous CI flakes, autofix bot silent stalls |
| **DeepSeek TUI** | 10 | 10 | None (v0.9.2 candidate) | AltGr/ABNT2 key capture, LaTeX math rendering, Skills Manager cold-FS timeout |
| **Grok Build** | 0 | 0 | No activity | — |

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|--------------------------|
| **Session Portability & Resilience** | Claude Code (#1455, #77730, #81907), Codex (#25779, #35458), Gemini (#28488), OpenCode (#39568, #39589), Pi (#7253), Qwen (#7752) | XDG-compliant storage, project-centric (not absolute-path) transcripts, resume after crash/reinstall, background agent transcript readability |
| **Windows Process & Resource Hygiene** | Claude Code (#81159, #80444), Codex (#33776, #36025, #33192), Copilot CLI (#4163, #4290), OpenCode (#39600, #19130) | GPU/MSIX corruption fixes, `taskkill`/`conhost` storm elimination, WMI input lag, ARM64 TUI initialization |
| **Subagent/Delegation Reliability** | Claude Code (#77730, #44657, #73638), Codex (#25015, #35935), Gemini (#22323, #22598), Qwen (#8070), OpenCode (#13715) | Permission prompt visibility in remote sessions, success/failure semantics (not silent MAX_TURNS), nested subagent deadlocks, filename heuristic opt-out |
| **Hook/Extension API Maturity** | Claude Code (#82451, #78266, #82146), Codex (#36055, #36039, #36031), Copilot CLI (#4204, #4283, #4298), Pi (#7293, #7163), OpenCode (#39591) | Precedence guarantees (`permissionDecision: allow`), `systemMessage` rendering parity, semantic marks for superseded drafts, CLI-managed MCP servers, command queueing |
| **Enterprise/Compliance Features** | Kimi (#2568), Copilot CLI (#4300), Pi (credential export), Codex (#36031), Claude Code (#74784) | Custom API Base URL/gateway routing, BearerToken auth for BYO-K, headless CI/CD credential export, cloud-managed MCP, accurate billing/usage UI under org caps |
| **Context/Token Management** | Codex (#35458, #34863, #35935), Gemini (#28488, #28566), OpenCode (#38851), Pi (#7253), Qwen (#8002) | Auto-compression on overflow, screenshot/base64 bloat mitigation, byte-cursor paging for large files, compaction threshold configurability |

---

## 4. Differentiation Analysis

| Dimension | Leaders / Distinct Approaches |
|-----------|-------------------------------|
| **Target User / Positioning** | **Claude Code**: Max/Team subscribers, production teams needing data integrity & Linux standards. **Codex**: Pro/Enterprise automation, Windows-heavy CI, Rust-native performance. **Gemini CLI**: Google Cloud/Vertex integrated, browser-agent workflows, AST-aware tooling. **Copilot CLI**: GitHub-native developers, git worktree orchestration, plugin/agent marketplace. **Kimi Code**: Enterprise K3 gateway consumers, Chinese-market compliance. **OpenCode**: Power-user TUX, Anthropic workflow parity (`/btw`), plugin-first architecture. **Pi**: Multi-provider aggregator, extension/platform builders, headless/SSH-first. **Qwen Code**: Autofix/self-healing CI, daemon-session architecture, deterministic testing. **DeepSeek TUI**: Terminal purists, STEM/math rendering, SEA localization. |
| **Technical Architecture** | **Rust-native**: Codex, Qwen Code, OpenCode (performance, memory control). **TypeScript/Node**: Claude Code, Copilot CLI, Gemini CLI, Pi, Kimi, DeepSeek TUI (ecosystem integration, faster iteration). **Daemon/Server**: Qwen (session writer locks), Pi (agent runs), Codex (app-server), OpenCode (supervisor socket). **Protocol Standards**: ACP adoption in Copilot, Pi, Qwen, OpenCode; MCP in Codex, Claude, Copilot, Gemini. |
| **Release Cadence** | **Rapid alpha/nightly**: Codex (4 in 24h), Qwen (nightly), Gemini (nightly), Pi (v0.83.0 + 22 PRs merged). **Batched pre-releases**: Copilot (5 in v1.0.76 series). **Stable-channel focus**: Claude Code (issues > releases), Kimi (PR-driven). |
| **Platform Priority** | **Windows-first hardening**: Codex, Copilot CLI, Claude Code, OpenCode. **Linux/Unix standards**: Claude Code (XDG), Pi (Wayland/sixel), DeepSeek TUI (keyboard layouts), OpenCode (ARM64). **macOS gaps**: Codex (bash 3.2), Pi (seatbelt profiles), Kimi (shell detection). |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum & Maturity** | **Pi**, **Codex**, **Qwen Code**, **OpenCode** | Pi: 37 issues closed + 22 PRs merged in 24h; v0.83.0 shipped. Codex: 4 alphas, 10 PRs, 874 👍 on Linux desktop. Qwen: Autofix bot maturity (round-cap visibility, push-race recovery), nightly discipline. OpenCode: 10 PRs merging perf/UX (O(1) tabs, project picker), 168 👍 on `/btw`. |
| **High Momentum, Maturing** | **Gemini CLI**, **Copilot CLI** | Gemini: Nightly cadence, core loop fixes (thoughtSignature, OAuth, compression), maintainer-only tags on P1s. Copilot: v1.0.76 feature wave (Sessions sidebar, queue manager, grok-4.5), but regressions (zombies, crashes) indicate release pressure. |
| **Stable Core, Targeted Gaps** | **Claude Code**, **Kimi Code** | Claude: 406 👍 on year-old XDG issue, critical data-loss bugs, Windows Desktop instability — enterprise users blocked. Kimi: Single enterprise gateway issue, 2 merged QoL PRs — quiet but focused on compliance. |
| **Niche / Early** | **DeepSeek TUI**, **Grok Build** | DeepSeek: v0.9.2 candidate, strong localization/STEM focus, 10 PRs but no release. Grok: No observable activity. |

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Session = Portable Artifact** | XDG compliance (Claude), project-centric storage (Claude, Codex), export/resume (OpenCode, Pi, Qwen), transcript integrity (Claude, Gemini) | **Build tooling assuming sessions move across machines/containers/CI**. Avoid absolute-path dependencies; adopt XDG/`$XDG_STATE_HOME`. |
| **Windows Is the Hardest Platform** | GPU/MSIX corruption (Claude), process storms (Codex), zombie leaks (Copilot), ARM64 TUI (OpenCode), SchemaErrors (Qwen) | **Invest in Windows CI parity now**. Process hygiene, sandbox virtual FS, GPU/renderer stability are table stakes for enterprise adoption. |
| **Autofix / Self-Healing CI Is Production-Grade** | Qwen autofix bot (per-source budgets, push-race recovery, round-cap visibility), Codex deterministic E2E fakes, Pi eval harness | **Adopt autofix bots for internal repos**; they reduce flake burden and enforce test determinism. |
| **Multi-Provider Aggregation Winning** | Pi (Qwen/DeepSeek/Kimi/Vertex/OAI), Copilot (grok-4.5 + plugin LSP), Codex (cloud-managed MCP), OpenCode (Anthropic/OAI/Gemini) | **Standardize on MCP/ACP** for tool/plugin interop. Single-provider lock-in is eroding; gateway/router patterns (Kimi #2568, Pi credential export) are emerging. |
| **Subagents Need First-Class UX, Not Heuristics** | Filename bans (Claude), invisible prompts (Claude), false success (Gemini), nested deadlocks (OpenCode), delegation flakes (Qwen) | **Design delegation as a protocol**: explicit permission scopes, trajectory observability, success/failure contracts, resumable checkpoints. |
| **Billing/Usage Transparency = Trust** | Claude "unlimited" UI lie (org cap), Codex weekly quota burn on compaction, Copilot AI credits warning, Pi usage streaming | **Expose real-time, accurate usage** in CLI/UI. Enterprise buyers will reject tools that hide overages or misreport limits. |
| **Terminal Fidelity Is a Differentiator** | Pi (sixel/tmux/Wayland clipboard), DeepSeek (AltGr/ABNT2, LaTeX Unicode), OpenCode (scrollbars, command preview), Copilot (tmux colors, iTerm2 paste) | **Invest in terminal protocol correctness** (Kitty, OSC 52, sixel, CSI). Developers notice and switch on rendering/input bugs. |

---

*Report generated from 2026-07-30 community digests across 10 AI CLI repositories. All issue/PR links point to live GitHub items; statuses may have changed.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-07-30)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py 0% recall` | Fixes the core evaluation loop that powers `run_loop.py` / `improve_description.py`; installs eval artifact as real skill, fixes Windows stream reading, trigger detection, parallel workers | Directly addresses **Issue #556** (12 comments, 7 👍) and **#1169** — the description-optimization loop has been optimizing against noise (0% recall on every query) | 🟢 Open |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic quality control for generated documents: prevents orphan/widow lines, heading stranding, numbering misalignment | "Affects every document Claude generates"; users rarely ask for good typography explicitly but notice when it's wrong | 🟢 Open |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` (v1.3.0) | Mechanical file verification → four-dimension reasoning audit (damage-severity priority); universal across projects/stacks/models | Novel "gate" approach: Step 0 verifies claimed output files exist before any reasoning audit | 🟢 Open |
| 4 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills for the marketplace: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security scanning | Addresses the **trust boundary vulnerability** raised in **Issue #492** (43 comments, 2 👍) — community skills masquerading as official | 🟢 Open |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing stack: Testing Trophy model, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing | Fills a gap — no existing skill covers the full testing philosophy + practical patterns across layers | 🟢 Open |
| 6 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` | Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility, gamut mapping | Highly specialized but broadly applicable to design, data viz, frontend, printing workflows | 🟢 Open |
| 7 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (addresses **Issue #1417**); prevents accumulation of stale plans | Community-identified pain point: "planning artifacts accumulate with no lifecycle" | 🟢 Open |
| 8 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | OpenDocument (.odt/.ods) creation, template filling, parse-to-HTML via `pyxel-mcp` | Enables ISO-standard document workflows; triggers on "ODT", "OpenDocument", "LibreOffice" mentions | 🟢 Open |

> **Note:** All PRs above are **Open** as of 2026-07-30. The `skill-creator` fixes (#1298, #1323, #1099, #1050) dominate contributor attention because they unblock the entire skill-authoring pipeline.

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Implied Skill Direction |
|-------|-------------------|-------------------------|
| **Trust & Security Hardening** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) — community skills under `anthropic/` namespace enable impersonation | Skills for **supply-chain verification**, **namespace governance**, **signed skill distribution** |
| **Organizational Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) — no native org-wide sharing; manual file transfer via Slack/Teams | **Skill registry / private marketplace**, **team skill libraries**, **one-click install links** |
| **Skill Authoring Tooling Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061) — `run_eval.py` 0% recall, Windows subprocess/encoding failures | **Cross-platform skill-creator**, **reliable trigger evaluation**, **CI-integrated skill testing** |
| **Duplicate / Conflict Resolution** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) — `document-skills` + `example-skills` install identical content | **Skill deduplication**, **namespace isolation**, **plugin composition model** |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — `claude-api` skill injects ~156k tokens in one call | **Token-efficient skill design**, **lazy-loading references**, **context-aware skill activation** |
| **Quality Gates & Self-Verification** | [#1385](https://github.com/anthropics/skills/issues/1385) (3 comments) — proposed 3-gate pipeline (Calibration → Adversarial Review → Delivery Verification) | **Meta-skills that audit other skills/outputs**, **pre-commit reasoning checks** |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fix (Windows + recall) | Unblocks *all* skill authoring; 4 related issues (#556, #1169, #1061, #1323); multiple contributors iterating |
| **[#1323](https://github.com/anthropics/skills/pull/1323)** | `skill-creator` trigger detection fix | Companion to #1298; fixes "bails on first non-Skill tool" false negatives |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Direct response to highest-comment security issue (#492); enables automated marketplace gatekeeping |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need (every generated document), low implementation risk, high user visibility |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Addresses explicit community pain point (#1417); recent (Jul 2026), active discussion |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Fills a clear catalog gap; comprehensive scope; author responsive to feedback |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | Niche but well-scoped; complete reference implementation; no conflicts |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is for *reliable, secure skill-authoring infrastructure* (fixing the broken `skill-creator` eval loop, Windows support, and trust boundaries) — without which new domain skills cannot be effectively created, validated, or distributed.**

---

# Claude Code Community Digest — 2026-07-30

## Today's Highlights
The community is heavily focused on **XDG Base Directory compliance** (Issue #1455, 406 👍), a long-standing Linux usability gap. Simultaneously, **Windows Desktop stability** dominates recent reports: GPU process crashes corrupting MSIX packages (#81159, #80444), Cowork VM service instability (#81874), and session loss on reinstall (#81907). A **critical data-loss bug** in adaptive thinking mode silently drops assistant text blocks mid-turn (#74260), affecting transcript integrity across platforms.

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1455](https://github.com/anthropics/claude-code/issues/1455) | **XDG Base Directory spec ignored** — configs/cache written to `~/.claude*` instead of `$XDG_CONFIG_HOME`/`$XDG_CACHE_HOME` | Blocks proper Linux integration; breaks backup/sync tooling; 1+ year old | 62 comments · **406 👍** (highest in repo) |
| [#74260](https://github.com/anthropics/claude-code/issues/74260) | **Assistant text blocks silently dropped** when followed by more thinking in same turn (adaptive thinking, v2.1.201) | Data loss in transcripts; affects all platforms; reproducible in TUI & bridged sessions | 20 comments · 13 👍 |
| [#44657](https://github.com/anthropics/claude-code/issues/44657) | **Subagent Write tool rejects `.md` files** named `report`/`summary`/`findings`/`analysis` — no opt-out | Breaks legitimate documentation workflows; hardcoded heuristic with no escape hatch | 8 comments · 13 👍 |
| [#77730](https://github.com/anthropics/claude-code/issues/77730) | **Background agent transcripts become unresumable** — "No transcript found," forcing full-context respawns | Token burn; breaks background agent reliability; affects Fable 5 + custom subagents | 6 comments |
| [#73638](https://github.com/anthropics/claude-code/issues/73638) | **Session rename mid-server-tool-call corrupts transcript** — injects synthetic user turn between tool_use/result | Permanent 400 errors on all future prompts; requires session abandon | 6 comments |
| [#81159](https://github.com/anthropics/claude-code/issues/81159) | **GPU process crash (exitCode 101457950) kills Desktop & corrupts MSIX** on Opus 5 in-page browser action (Win11) | App unlaunchable until Repair; data loss risk; affects paying Max subscribers | 6 comments |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | **Desktop 1.24012.1: fatal GPU crash (0x060C201E) via Browser tab** — leaves MSIX `appxState=2` | Same MSIX corruption pattern; reproduced on two driver versions | 5 comments |
| [#74784](https://github.com/anthropics/claude-code/issues/74784) | **Extra-usage banner hides API-rate billing**; `/usage-credits` falsely reports "unlimited" despite org cap | Billing transparency failure; Team plan users surprised by overages | 2 comments · 1 👍 |
| [#81874](https://github.com/anthropics/claude-code/issues/81874) | **Cowork VM service tears down on idle**; slow cold-boot; service DACL blocks external mitigation | Background agent reliability; Windows service permissions prevent workarounds | 2 comments |
| [#82451](https://github.com/anthropics/claude-code/issues/82451) | **PreToolUse hook `permissionDecision: allow` no longer overrides `permissions.ask` glob** (v2.1.220 regression) | Hooks-based permission automation broken; documented precedence violated | 0 comments (filed today) |

---

## Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#82358](https://github.com/anthropics/claude-code/pull/82358) | **MCP Guard plugin: security hardening for MCP configs** | Open | Addresses #82351 — `claude mcp get` dumps bearer tokens to terminal. Adds plugin to redact secrets from MCP server output. |
| [#82335](https://github.com/anthropics/claude-code/pull/82335) | **Fix GCP gateway `setup.sh` exiting silently when `gcloud` not installed** | Open | Command substitution under `set -euo pipefail` crashes script (exit 127) before argument checks. Adds explicit `gcloud` presence check. |
| [#82320](https://github.com/anthropics/claude-code/pull/82320) | **Fix AWS gateway `setup.sh` aborting on stock macOS bash 3.2** | Open | Uses `${VAR,,}` (bash 4 case modification) — fails on macOS default `/bin/bash`. Replaces with POSIX-compatible `tr '[:upper:]' '[:lower:]'`. |
| [#48272](https://github.com/anthropics/claude-code/pull/48272) | **[Release Notes] Enrich release titles with changelog summary** | Closed | Upstream `main` adopted this format (commits `2962ecd`, `69d7070`). Improves release discoverability in feeds. |

---

## Feature Request Trends

1. **Portable project-centric storage** — Multiple issues (#81946, #1455) request transcripts/scratch files keyed to project (not absolute path) with XDG compliance, enabling sync across machines/containers.
2. **Transparent billing/usage UI** — #74784 highlights demand for honest API-rate disclosure and accurate `/usage-credits` reporting under org caps.
3. **Hook system maturity** — #82451 (regression), #78266 (systemMessage not rendering), #82146 (semantic marks for Stop-hook verdicts) show developers building automation atop hooks but hitting platform gaps.
4. **Subagent autonomy** — #44657's filename blockade and #69482 (invisible permission prompts in remote sessions) indicate subagent workflows need first-class UX, not heuristics.
5. **Session resilience** — #77730, #73638, #81907 all center on transcripts surviving renames, background pauses, reinstalls, and crashes.

---

## Developer Pain Points

| Area | Recurring Frustrations |
|------|------------------------|
| **Windows Desktop** | GPU crashes → MSIX corruption → Repair loop; Cowork VM cold-boots; settings regressions (`bypassPermissions` ignored #75235); session list loss on reinstall (#81907). |
| **Data Integrity** | Silent text drops in adaptive thinking (#74260); transcript corruption from session rename mid-tool-call (#73638); background agent transcripts unreadable (#77730). |
| **Linux/Unix Standards** | XDG non-compliance (#1455) forces manual dotfile management; no `$XDG_STATE_HOME` support for transcripts. |
| **Hook/Automation Reliability** | `systemMessage` dropped in Desktop/VS Code (#78266); `permissionDecision: allow` precedence regression (#82451); no semantic marks for superseded drafts (#82146). |
| **Subagent UX** | Hardcoded filename bans with no opt-out (#44657); invisible permission prompts in web/remote (#69482); findings forced to text, not files. |
| **Billing Transparency** | "Unlimited" UI lies when org cap exists (#74784); extra-usage banner omits API-rate billing. |
| **Extension/Ecosystem** | Chrome extension binds to first account only (#82455); MCP SDK 2.0 breaks Desktop extensions unpinned (#82453). |

---

*Generated from GitHub data (issues/PRs updated 2026-07-30). Links point to live items; statuses may change.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-30

---

## 1. Today's Highlights

The Codex team shipped four alpha releases in the `0.146`–`0.147` series, continuing rapid iteration on the Rust codebase. Community focus remains heavily on **Windows desktop stability** — multiple high-engagement issues report process leaks (`taskkill.exe`/`conhost.exe` storms), WMI-induced input lag, sandbox hangs on virtual filesystems (OneDrive, Google Drive), and unbounded session state growth causing 100+ GiB session directories. On the CLI/TUI side, PRs show active cleanup of legacy flags (`--full-auto`), MCP catalog pagination hardening, and shared HTTP client consolidation.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.147.0-alpha.2` | Alpha | Latest in 0.147 series |
| `rust-v0.147.0-alpha.1` | Alpha | Initial 0.147 alpha |
| `rust-v0.146.0-alpha.9.2` | Alpha | Patch to 0.146 alpha 9 |
| `rust-v0.146.0-alpha.9.1` | Alpha | Patch to 0.146 alpha 9 |

> All releases are Rust crate alphas; no changelog details provided in release notes. Track via [Releases page](https://github.com/openai/codex/releases).

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#11023](https://github.com/openai/codex/issues/11023) | **Linux desktop app request** | Longest-running, highest-engagement issue (874 👍, 192 comments). Users blocked on macOS power issues need Linux native support. | ★★★★★ Critical demand |
| [#33776](https://github.com/openai/codex/issues/33776) | **Windows: `taskkill.exe`/`conhost.exe` process storms** | Spawns hundreds of orphaned processes → WMI storms, DWM degradation, system-wide slowdown. Affects 26.707.12708.0. | 23 👍, 25 comments |
| [#35458](https://github.com/openai/codex/issues/35458) | **Session storage explosion: 165 GiB of base64 screenshots** | Compaction re-persists full screenshots; subagents inherit them. Storage + memory pressure on long sessions. | 4 comments, Pro user |
| [#34863](https://github.com/openai/codex/issues/34863) | **app-server hits 27 GB RAM / 36 GB swap** | Single 10.2 GB rollout JSONL with inline PNG data URLs. Unbounded context growth. | 3 comments |
| [#25779](https://github.com/openai/codex/issues/25779) | **Meta-bug: unbounded session/turn state** | Root cause for freezes, context bloat, lost turn control. 8 👍, 12 comments. | 8 👍 |
| [#27458](https://github.com/openai/codex/issues/27458) | **CLI timeout waiting for user input** | Blocks automation/CI workflows on WSL2. 49 👍, 12 comments. | 49 👍 |
| [#35935](https://github.com/openai/codex/issues/35935) | **Context compaction loses task state, repeats work, exhausts quota** | Regression on Windows: compaction breaks continuity, burns weekly usage. | 2 comments |
| [#36025](https://github.com/openai/codex/issues/36025) | **System-wide mouse/input lag from PowerShell WMI snapshots** | Repeated process enumeration via WMI freezes input globally. | 2 comments |
| [#33192](https://github.com/openai/codex/issues/33192) | **DWM Composition handle leak after tool calls** | Handle count grows persistently (22+ in 5 calls) on Win10. | 1 👍, 5 comments |
| [#35420](https://github.com/openai/codex/issues/35420) | **OneDrive-backed workspace → stream disconnects** | Degraded OneDrive breaks Codex Web/Work connectivity. | 13 comments |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Description | Impact |
|---|----|-------------|--------|
| [#36054](https://github.com/openai/codex/pull/36054) | **Remove legacy `--full-auto` from `codex exec`** | Forces explicit `--sandbox workspace-write`; cleans hidden deprecated flag. | CLI breaking change cleanup |
| [#36055](https://github.com/openai/codex/pull/36055) | **Expose MCP `readOnlyHint` in tool calls** | Propagates read-only annotations through call events + thread history. | MCP safety/observability |
| [#36039](https://github.com/openai/codex/pull/36039) | **Limit MCP catalog pagination (100 pages / 1,024 items)** | Prevents unbounded discovery loops from misbehaving servers. | DoS protection |
| [#36037](https://github.com/openai/codex/pull/36037) | **Deny network access on allow-amendment failure** | Fail-closed: failed policy amendments don't grant host access. | Security hardening |
| [#36035](https://github.com/openai/codex/pull/36035) | **Exit stdio app-server when connection closes** | Prevents orphaned app-server processes after remote client disconnect. | Resource leak fix |
| [#36031](https://github.com/openai/codex/pull/36031) | **Load cloud-managed MCP servers in CLI commands** | `mcp list/get/login/logout` now resolve enterprise-managed servers. | Enterprise MCP support |
| [#36011](https://github.com/openai/codex/pull/36011) | **Share MCP startup grace across connection sets** | Avoids repeated 1s delays for same optional server across connections. | Startup latency reduction |
| [#36008](https://github.com/openai/codex/pull/36008) | **Route pet asset downloads via shared HTTP client** | Uses `RouteAwareClientPool` for CDN redirects + config compliance. | Network stack unification |
| [#35852](https://github.com/openai/codex/pull/35852) | **Migrate `codex-protocol` to shared HTTP types** | Replaces direct `reqwest` deps with `codex-http-client::HttpError`. | Dependency consolidation |
| [#36036](https://github.com/openai/codex/pull/36036) | **Allow naming forked chats from TUI** | `/fork <name>` support with metadata persistence. | UX improvement |

---

## 5. Feature Request Trends

| Trend | Evidence | Priority |
|-------|----------|----------|
| **Linux native desktop app** | #11023 (874 👍, 192 comments) — single highest-demand issue | ★★★★★ |
| **Plan Mode workflow improvements** | #10561: "Copy Plan" button + "Clear Context and Start Coding" (37 👍) | ★★★★ |
| **Chat tabs / multi-session in TUI** | #17291: `alt+number` tab switching (closed but shows demand) | ★★★ |
| **Cloud Project ↔ Local/SSH workspace separation** | #33723: Desktop app conflates cloud, local, SSH contexts | ★★★ |
| **MCP server management via CLI** | #36031 (merged): cloud-managed server resolution in `codex mcp` | ★★★ |
| **Subagent / Goal mode UX fixes** | #27894 (steer replay), #35641 (stuck "Thinking") | ★★ |

---

## 6. Developer Pain Points (Recurring Themes)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Windows process/resource leaks** | Very High | #33776 (taskkill storms), #36025 (WMI input lag), #33192 (DWM handles), #27334 (dual Path/PATH) |
| **Unbounded session/context growth** | High | #35458 (165 GiB screenshots), #34863 (27 GB app-server), #25779 (meta-bug), #35935 (compaction breaks state) |
| **Virtual filesystem sandbox failures** | High | #35914 (Google Drive `SetNamedSecurityInfoW: 87`), #35420 (OneDrive stream disconnects), #32855 (elevated sandbox fails) |
| **MCP instability on Windows** | Medium | #18486 (`Transport closed` via wrapper), #25015 (subagent MCP process leaks) |
| **CLI automation blocking** | Medium | #27458 (timeout on input), #16908 (`exec --sandbox` panic pre-prompt) |
| **Localization gaps** | Low | #19518 (Chinese top menu/sidebar not translated) |

---

*Generated from GitHub data as of 2026-07-30. All links point to `github.com/openai/codex`.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-30

## 1. Today's Highlights
The v0.55.0 nightly ship includes generated changelogs for v0.53.0 and v0.54.0-preview.0. Active development focuses on stabilizing core agent loops: fixing a 400 error caused by stripped `thoughtSignature` in parallel tool calls, hardening MCP OAuth token refresh, and adding auto-compression on context overflow. Multiple long-standing issues around Auto Memory quality, subagent observability, and browser-agent resilience remain open with maintainer attention.

## 2. Releases
**v0.55.0-nightly.20260730.gdc859e8e4** — Automated nightly; bundles changelogs for v0.53.0 and v0.54.0-preview.0. No user-facing features in this bump.  
🔗 [Release PR #28590](https://github.com/google-gemini/gemini-cli/pull/28590)

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#18811](https://github.com/google-gemini/gemini-cli/issues/18811) | **API Error: Invalid argument** on content generation | Core request failure blocking CLI use; persists across versions | 15 comments, 5 👍 — high urgency for daily users |
| [#19883](https://github.com/google-gemini/gemini-cli/issues/19883) | **No capacity for `gemini-3-flash-preview`** | Model availability regression; forces fallback to heavier models | 13 comments, 8 👍 — impacts cost/latency |
| [#18903](https://github.com/google-gemini/gemini-cli/issues/18903) | **“Request contains invalid argument”** (agent path) | Duplicate symptom of #18811; suggests systemic prompt/serialization bug | 13 comments, 2 👍 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS** | Silent failure hides incomplete work; breaks trust in delegation | 12 comments, 2 👍 — P1, maintainer-only |
| [#18834](https://github.com/google-gemini/gemini-cli/issues/18834) | **Sandbox image missing/pull failure** | Blocks sandboxed execution (`-s` flag); fix proposed by community | 11 comments, 1 👍 — P1, small effort |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** | Wastes quota & clutters memory; no backoff or quarantine | 5 comments — P2, maintainer-only |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell exec stuck at “Waiting input” after completion** | Frequent hang on trivial commands; disrupts interactive flow | 4 comments, 3 👍 — P1, medium effort |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | **400 error with >128 tools** | Hard tool-count limit breaks extensibility; needs dynamic scoping | 3 comments — P2, maintainer-only |
| [#22465](https://github.com/google-gemini/gemini-cli/issues/22465) | **Agent stuck at interactive prompt (Vite create)** | Behavioral eval gap; model doesn’t handle interactive CLIs | 2 comments — P2, needs eval + prompt fix |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | **`get-shit-done` output hook crashes CLI** | Crash during summary print; blocks popular automation pattern | 3 comments — P1, medium effort |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#28586](https://github.com/google-gemini/gemini-cli/pull/28586) | **Open** | **Preserve `thoughtSignature` in functionCall parts** — fixes 400 error on parallel tool calls introduced in v0.53.0 |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | **Open** | **Refresh MCP OAuth tokens with stored client ID** — prevents forced re-auth on every startup for dynamic registrations |
| [#28488](https://github.com/google-gemini/gemini-cli/pull/28488) | **Open** | **Auto-compress chat history on context overflow** — new `model.autoCompressOnOverflow` setting avoids hard stops |
| [#28581](https://github.com/google-gemini/gemini-cli/pull/28581) | **Open** | **Skip diff hunk markers during `@` processing** — eliminates recursive glob searches, prevents heap growth on large diffs |
| [#28410](https://github.com/google-gemini/gemini-cli/pull/28410) | **Closed** | **Shorten MCP `tools/list` discovery timeout** — fails fast (was 10 min hang) when server misbehaves |
| [#28406](https://github.com/google-gemini/gemini-cli/pull/28406) | **Closed** | **Apply `modelIdResolutions` to tool sub-agent configs** — fixes `INVALID_MODEL` for API-key users on `web-search`/`web-fetch` |
| [#28485](https://github.com/google-gemini/gemini-cli/pull/28485) | **Open** | **Add `gemini-3.5-flash`/`3.6-flash` to model selector** — unblocks users stuck on `gemini-2.5-flash` |
| [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) | **Open** | **Fallback to embedded macOS seatbelt profiles** — fixes sandbox startup crash on macOS/gMac when `.sb` files missing |
| [#28494](https://github.com/google-gemini/gemini-cli/pull/28494) | **Open** | **Remove comma-operator leak in VS Code companion `activate()`** — fixes disposable cleanup on deactivation |
| [#27154](https://github.com/google-gemini/gemini-cli/pull/27154) | **Closed** | **Prevent PTY memory leak in `ShellExecutionService`** — synchronous deletion of active entries stops FD leak |

## 5. Feature Request Trends
1. **Subagent Observability** — Trajectory sharing (`/chat share` for subagents), success/failure semantics, and turn-limit transparency (#22598, #22323).
2. **Auto Memory Hardening** — Deterministic redaction, quarantine of invalid patches, backoff on low-signal sessions (#26522, #26523, #26525).
3. **Browser Agent Resilience** — Session takeover, lock recovery, and `settings.json` override support (#22232, #22267).
4. **AST-Aware Tooling** — Investigation of AST-based read/search/map for precision and token efficiency (#22745, #22746).
5. **Model Selector Parity** — Surfacing latest flash models (3.5/3.6) in legacy UI paths (#28485).
6. **Context Management** — Auto-compression, compression hooks, and overflow UX (#28488, #28566).

## 6. Developer Pain Points (Recurring)
- **Silent/Incorrect Success States**: Subagents reporting `GOAL` success after hitting `MAX_TURNS`; memory patches silently skipped.
- **Model Availability & Versioning**: `gemini-3-flash-preview` capacity errors; model selector lagging behind backend releases.
- **Sandbox & Platform Friction**: macOS seatbelt profile missing; sandbox image pull failures; VS Code extension detection flakiness.
- **Shell/PTY Instability**: Hangs at “Waiting input”, PTY leaks, external editor buffer corruption.
- **Tool Explosion**: 400 errors beyond ~128 tools; no dynamic scoping or lazy loading.
- **Auto Memory Noise**: Indefinite retries, secrets in model context pre-redaction, unquarantined invalid patches.
- **Observability Gaps**: Subagent trajectories inaccessible; behavioral evals flaky; limited debug hooks for agent loops.

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-30

---

## 1. Today's Highlights

GitHub Copilot CLI **v1.0.76** shipped with a wave of iterative pre-releases (76-2 through 76-5) that introduce a **Sessions sidebar** for concurrent session management, a **directable queue manager** (`/staff`), **enable/disable toggles** for plugins/agents/hooks/LSP servers in `/plugins`, and support for the **grok-4.5 model**. Meanwhile, the community surfaced critical regressions: a **zombie-process leak on Linux** (#4163, #4290) reported unfixed on AlmaLinux, a **silent crash on startup** when log-level ≠ `all|default` (#4285, #4297), and **growing typing latency** in long-running sessions (#4299).

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.76** | 2026-07-29 | Roll-up of 76-2 → 76-5 |
| **v1.0.76-5** | 2026-07-29 | • Enable/disable controls in `/plugins` for plugins, instructions, agents, LSP servers, hooks<br>• Added **grok-4.5** model support |
| **v1.0.76-4** | 2026-07-29 | • **Sandbox denied-paths** now enforced for relative & symlinked entries on macOS/Linux (Windows unsupported) |
| **v1.0.76-3** | 2026-07-29 | • Auto-update notification suggests `/restart` (no warning color)<br>• `/diff` scrolls & syntax-highlights large multi-file diffs faster<br>• Split-view sidebar: `hoverFocus` off by default (opt-in via `sidebar.hoverFocus`) |
| **v1.0.76-2** | 2026-07-29 | • **Queue manager (`/staff`)**: reorder, edit, remove, repeat, send queued messages<br>• **Sessions sidebar** (experimental): switch, spawn, view status of concurrent sessions — enable via `/experimental` |

> **Upgrade note:** Users on 1.0.75 or earlier should restart after auto-update (`/restart`) to activate the new sidebar and queue manager.

---

## 3. Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4163](https://github.com/github/copilot-cli/issues/4163) | **Zombie child processes accumulate on Linux** (CLOSED but… | Core stability: ~2 zombies/min/session leaks under copilot PID. | 3 👍, 6 comments; **re-opened via #4290** |
| [#4290](https://github.com/github/copilot-cli/issues/4290) | **#4163 not fixed on AlmaLinux 8.10** (1.0.75) | Blockers for RHEL/CentOS-derived distros; CI/CD runners affected. | 0 👍, 1 comment (new) |
| [#1613](https://github.com/github/copilot-cli/issues/1613) | **Built-in git worktree lifecycle management** | High-value workflow: isolated, parallel task execution with auto-cleanup. | **36 👍**, 3 comments (old but hot) |
| [#4202](https://github.com/github/copilot-cli/issues/4202) | **`view` tool reports “Path does not exist” for existing files** (1.0.72+) | Regression breaking file-read tooling; 1.0.71 works. | 0 👍, 3 comments |
| [#1168](https://github.com/github/copilot-cli/issues/1168) | **Authorization fatigue** — >12 prompts per high-level request | UX blocker for autonomous flows; users disable auth to proceed. | 2 👍, 3 comments |
| [#4293](https://github.com/github/copilot-cli/issues/4293) | **Sub-agents with full tool access return empty** (no error/log) | Silent failure mode; restricted-tool agents work. | 0 👍, 2 comments (new) |
| [#4299](https://github.com/github/copilot-cli/issues/4299) | **Typing latency degrades over long sessions** (1.0.76-5) | Makes CLI unusable after hours of background-agent work. | 0 👍, 0 comments (new) |
| [#4297](https://github.com/github/copilot-cli/issues/4297) | **Crash on launch if log-level ≠ `all`/`default`** | Blocks debugging/CI; silent exit code 1. | 0 👍, 0 comments (new) |
| [#4285](https://github.com/github/copilot-cli/issues/4285) | **Silent exit 1 at session startup** (1.0.76-1, same log-levels) | Duplicate of #4297; confirms regression in 76-series. | 2 👍, 0 comments |
| [#4300](https://github.com/github/copilot-cli/issues/4300) | **BearerToken auth for BYO-K (corp compliance)** | Enterprise blocker: key-based auth disabled; needs SDK parity. | 0 👍, 0 comments (filed today) |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4100](https://github.com/github/copilot-cli/pull/4100) | **安全性** (Security) | OPEN | Author: `huangyoufeng76-debug` — no description; likely internal security hardening. Awaiting review. |

> Only one PR updated in the last 24 h. The release train appears driven by internal commits rather than community PRs.

---

## 5. Feature Request Trends

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Git worktree orchestration** | [#1613](https://github.com/github/copilot-cli/issues/1613) (36 👍) | Top-voted; users want Copilot to create/destroy worktrees per task. |
| **Session & resume UX** | [#4140](https://github.com/github/copilot-cli/issues/4140) (sort by recency), [#4282](https://github.com/github/copilot-cli/issues/4282) (model-prefix mismatch), [#4289](https://github.com/github/copilot-cli/issues/4289) (PR link confusion in multi-project) | New Sessions sidebar (76-2) addresses part; gaps remain. |
| **Plugin/agent/config discovery** | [#4204](https://github.com/github/copilot-cli/issues/4204) (`.agents` folder), [#4283](https://github.com/github/copilot-cli/issues/4283) (server-managed `enabledPlugins` persistence), [#4298](https://github.com/github/copilot-cli/issues/4298) (sandbox tool whitelist) | Push for declarative, repo-portable configuration. |
| **Enterprise auth & compliance** | [#4300](https://github.com/github/copilot-cli/issues/4300) (BearerToken), [#4295](https://github.com/github/copilot-cli/issues/4295) (AI credits warning) | Corp adoption blocked without token-based auth & quota visibility. |
| **Terminal/shell fidelity** | [#4292](https://github.com/github/copilot-cli/issues/4292) (tmux colors), [#4294](https://github.com/github/copilot-cli/issues/4294) (`COLORTERM` injection), [#4296](https://github.com/github/copilot-cli/issues/4296) (iTerm2 Cmd+V) | Cross-terminal rendering & input regressions. |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Linux process hygiene** — Zombie accumulation (#4163, #4290) makes long-running CI agents unreliable on non-Ubuntu distros.
2. **Silent crashes & regressions in 1.0.76.x** — Log-level crashes (#4285, #4297), `view` tool regression (#4202), sub-agent silent failures (#4293) erode trust in auto-updates.
3. **Authorization fatigue** — 12+ prompts per request (#1168) forces users to weaken security posture.
4. **Session bloat** — Typing latency grows unbounded (#4299); no TTL or compaction for context.
5. **Terminal compatibility** — tmux color breaks (#4292), paste broken in iTerm2 (#4296), env leakage on resume (#4294).
6. **Update nags vs. auto-update** — Yellow “update available” banner appears daily despite background auto-update (#4284).
7. **Sub-agent model inheritance broken** — General-purpose agent ignores `inherit` setting, falls back to `gpt-5.4-mini` (#4287).
8. **Streaming latency** — `tool_use` `input_json_delta` buffered until complete, causing multi-minute silences on large args (#4286).
9. **ACP protocol gaps** — `session/close` unimplemented, blocking ACP client integration (#4113).
10. **PR linking in multi-root sessions** — Short links point to original repo, not the project the PR belongs to (#4289).

---

*Generated from github.com/github/copilot-cli data as of 2026-07-30 00:00 UTC. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-30

---

## 1. Today's Highlights
No new releases shipped in the last 24 hours. The community is focused on **enterprise-readiness** (custom API Base URL for K3 gateway) and **tooling correctness** (fixes for edit counting, hook payload extraction, and Windows shell detection). Two quality-of-life PRs were merged: absolute reset timestamps in `/usage` and PowerShell 7 (`pwsh`) preference on Windows.

---

## 2. Releases
*No new releases published in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2568](https://github.com/MoonshotAI/kimi-cli/issues/2568) | **Feature Request: Support custom API Base URL to access enterprise-level K3 gateway** | Enables enterprises to route Kimi K3 (2.8T params) traffic through internal gateways—critical for rate-limit isolation, multi-region latency, failover, and centralized API-key auditing. | 👍 0 · 0 comments · Opened 2026-07-29 |

*Only one issue updated in the last 24 h; it signals strong enterprise adoption momentum post K3 open-source release.*

---

## 4. Key PR Progress

| # | Title | Type | Status | Summary |
|---|-------|------|--------|---------|
| [#2569](https://github.com/MoonshotAI/kimi-cli/pull/2569) | `fix(tools): count chained StrReplaceFile edits against intermediate content` | Bugfix | Open | `StrReplaceFile` now evaluates each replacement against the *current* file state, not the original—fixes under-counting when later edits depend on earlier ones. |
| [#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176) | `fix(hooks): extract text from ContentPart for UserPromptSubmit hook` | Bugfix | Open | Resolves #2148: `UserPromptSubmit` hook now correctly receives `prompt`/`matcher_value` when `user_input` is `list[ContentPart]` (default message format). |
| [#1790](https://github.com/MoonshotAI/kimi-cli/pull/1790) | `feat(windows): prefer pwsh over powershell.exe for Shell tool` | Feature | **Closed** | `Environment.detect()` now picks `pwsh` (PowerShell 7+) from PATH, default install, then falls back to `powershell.exe`; adds tests for both discovery paths. |
| [#2567](https://github.com/MoonshotAI/kimi-cli/pull/2567) | `feat(usage): show absolute reset datetime in /usage panel` | Feature | **Closed** | `/usage` now displays absolute local reset timestamp (from API `reset_at`) alongside relative duration—eliminates ambiguity for quota planning. |

---

## 5. Feature Request Trends
From the single fresh issue and recent PR themes, the top community asks are:
1. **Enterprise gateway integration** — custom `API_BASE_URL`, multi-region routing, failover, centralized key management.
2. **Observability & quotas** — absolute timestamps, clearer usage panels, real-time limit visibility.
3. **Cross-platform shell parity** — modern `pwsh` default on Windows, consistent behavior across OSes.
4. **Hook payload fidelity** — structured `ContentPart` support for all hook events.

---

## 6. Developer Pain Points
- **Rate-limit & latency bottlenecks** when teams share a single official API endpoint (drives #2568).
- **Silent data loss in hooks** — `UserPromptSubmit` received empty strings for non-string inputs (#2148/#2176).
- **Misleading edit counts** — chained `StrReplaceFile` operations reported wrong totals (#2569).
- **Ambiguous quota resets** — “resets in 4d” without absolute time caused scheduling confusion (#2567).
- **Legacy PowerShell default** — `powershell.exe` (5.1) lacks modules/features available in `pwsh` 7+ (#1790).

---

*Digest generated from GitHub data for `MoonshotAI/kimi-cli` covering 2026-07-29 → 2026-07-30.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-30

## Today's Highlights
The community is actively addressing Windows-specific regressions in v1.18.9 (multi-parameter tool failures, ARM64 TUI initialization) while advancing TUX polish: session tab switching is now O(1) for long transcripts, and a new project picker with crossfade transitions lands. A high-profile feature request for Anthropic-style `/btw` context injection has gathered 168 👍. Meanwhile, core utilities are being hardened—`lazy()` caching, path helpers, frontmatter sanitization, and TreeSitter filetype resolution all received fixes in the last 24 hours.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#16992](https://github.com/anomalyco/opencode/issues/16992) | **Add `/btw` command** (like Claude Code) | Lets developers inject side-context mid-session without derailing the main task. 168 👍 shows strong demand for this workflow. | 20 comments, 168 👍 |
| [#19130](https://github.com/anomalyco/opencode/issues/19130) | **Windows ARM64: TUI fails with bun:ffi TinyCC error** | Blocks native ARM64 Windows users from interactive use; non-interactive commands work. | 15 comments, 10 👍 |
| [#13715](https://github.com/anomalyco/opencode/issues/13715) | **Nested subagent permission asks hang silently** | Subagent-in-subagent permission prompts never render, deadlocking sessions. Core autonomy bug. | 9 comments, 22 👍 |
| [#39600](https://github.com/anomalyco/opencode/issues/39600) | **v1.18.9: All multi-parameter tools fail with SchemaError on Windows** | Regression affecting `bash`, `write`, `glob` etc. on Windows; single-param `read` works intermittently. | 2 comments, new today |
| [#38851](https://github.com/anomalyco/opencode/issues/38851) | **TUI compaction triggers at 30–35% with gpt-5.6-sol** | Premature compaction wastes context window; model-specific token accounting issue. | 5 comments |
| [#29330](https://github.com/anomalyco/opencode/issues/29330) | **`opencode export \| jq` produces truncated/invalid JSON when piped** | Large session exports lose data past 64 KiB in pipes; exit code 0 masks failure. | 3 comments, 1 👍 |
| [#39595](https://github.com/anomalyco/opencode/issues/39595) | **TUI context usage always shows 0% — `model.limit.context` undefined** | Context indicator broken across all models; root cause in session context build function. | 1 comment, new today |
| [#39584](https://github.com/anomalyco/opencode/issues/39584) | **MCP timeout hard-capped at 5 minutes** | Config values >5 min ignored; 1 ms setting also misbehaves. Limits long-running MCP tools. | 1 comment |
| [#39579](https://github.com/anomalyco/opencode/issues/39579) | **`session/list` violates ACP spec: empty params & `cwd` filter broken** | Protocol non-compliance: empty params should return all sessions, not just launch project. | 1 comment |
| [#36454](https://github.com/anomalyco/opencode/issues/36454) | **TreeSitter client destruction may leak memory** | `warn: TreeSitter client destroyed` stacks suggest cleanup order issue; potential leak in long sessions. | 4 comments |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#39607](https://github.com/anomalyco/opencode/pull/39607) | Bug fix | **Emit valid OpenAI cost chunks** — adds missing `id`, `object`, `created`, `model` fields to `oa-compat` cost events (closes #39061). |
| [#39577](https://github.com/anomalyco/opencode/pull/39577) | Bug fix | **Await stdout drain on piped output** — fixes truncated `export`/`db`/`session list` past 64 KiB (closes #29330). |
| [#39567](https://github.com/anomalyco/opencode/pull/39567) | Feature | **Parse shell commands with TreeSitter for permissions** — splits compound input, derives reusable command-prefix approvals, preserves V2 workdir checks. |
| [#39568](https://github.com/anomalyco/opencode/pull/39568) | Perf | **O(1) session tab switching** — mounts fixed-size tail regardless of transcript length; eliminates visible stall on long sessions. |
| [#39589](https://github.com/anomalyco/opencode/pull/39589) | Perf | **Prefetch open session tabs after connect** — warms transcript data in background; removes blank-screen delay on first tab visit. |
| [#39591](https://github.com/anomalyco/opencode/pull/39591) | Feature | **Add `ui.tabs` plugin API** — plugins can now observe/control session tabs (open, close, focus, list). |
| [#39604](https://github.com/anomalyco/opencode/pull/39604) | Bug fix | **Sanitize frontmatter keys with hyphens/dots** — fixes `allowed-tools` and similar keys in command/agent files (closes #39603). |
| [#39602](https://github.com/anomalyco/opencode/pull/39602) | Bug fix | **Case-insensitive filetype resolution** — fixes syntax highlighting for uppercase extensions (`.TSX`, `.PY`) and extensionless files (`Makefile`) (closes #39601). |
| [#39599](https://github.com/anomalyco/opencode/pull/39599) | Bug fix | **Correct path helpers for delimiter-less input** — `getDirectory()` no longer invents `"/"` parent for root files (closes #39598). |
| [#39597](https://github.com/anomalyco/opencode/pull/39597) | Bug fix | **Retry `lazy()` initializer after throw** — prevents permanent `undefined` cache when init fails (closes #39596). |

---

## Feature Request Trends
1. **Context injection ergonomics** — `/btw` command (#16992), configurable mid-run prompt delivery modes (queue/steer/break, #32157).
2. **Session fleet management** — Roster view for backgrounded sessions (#39583, recurring ask across #27746, #24451, #17838, #12548).
3. **TUI navigation & discoverability** — Scrollbars, command preview/history (#10570), project picker (#39566), tab control API (#39591).
4. **Internationalization completeness** — RTL language translations (Farsi, Urdu, Pashto, etc. #34697), Hebrew support landed (#39423).
5. **Model-specific tuning** — Compaction thresholds per-model (#38851), MCP timeout configurability (#39584).

---

## Developer Pain Points (Recurring Frustrations)
- **Windows parity gaps**: ARM64 TUI init (#19130), multi-param tool SchemaErrors in 1.18.9 (#39600), scrollbar/command history missing (#10570).
- **Subagent permission model**: Nested subagent hangs (#13715), permission escalation bypass (#39576), lack of diff previews (addressed in #39578).
- **Streaming/pipe reliability**: Truncated JSON on stdout pipes (#29330), invalid OpenAI cost chunks breaking strict clients (#39061, #39606).
- **Core utility fragility**: `lazy()` caching throws (#39596), path helpers assume delimiters (#39598), frontmatter sanitizer rejects hyphens (#39603), filetype lookup case-sensitive (#39601).
- **Observability blind spots**: Context usage stuck at 0% (#39595), TreeSitter destruction warnings (#36454), ACP spec deviations (#39579).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-30

## 1. Today's Highlights
Pi v0.83.0 ships with **credential export commands** (`pi auth print-api-key` / `print-bearer-token`) enabling headless CI/CD workflows, and **headless OpenRouter sign-in** via pasted redirect URLs for SSH-based development. The community closed 37 issues and merged 22 PRs in the last 24h, with heavy focus on provider compatibility fixes (Qwen, DeepSeek, Kimi K3, Vertex), TUI stability, and extension API ergonomics.

## 2. Releases
### v0.83.0 — 2026-07-30
- **Credential export for external clients**: `pi auth print-api-key` and `pi auth print-bearer-token` now export configured credentials with automatic OAuth refresh and minimum-validity enforcement.
- **Headless OpenRouter sign-in**: Complete `/login` flow over SSH by pasting the redirect URL—no local browser required.  
🔗 [Release Notes](https://github.com/earendil-works/pi/releases/tag/v0.83.0)

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6951](https://github.com/earendil-works/pi/issues/6951) | **Qwen3 reasoning effort map mismatch** | Qwen API expects `low/medium/xhigh` but Pi sends `minimal/low/medium/high` → broken thinking control for Qwen users. | 8 comments, 1 👍; closed with fix pending |
| [#1871](https://github.com/earendil-works/pi/issues/1871) | **Misleading "No API key" during parallel startup** | Lock contention on shared auth files surfaces as auth error, confusing users running `pi-subagents` in parallel. | 7 comments; long-standing (Mar → Jul), now closed |
| [#7199](https://github.com/earendil-works/pi/issues/7199) | **Kimi K3 on Fireworks not selectable** | New model added to models.dev (2026-07-27) but missing from Pi’s Fireworks provider; blocks early adopters. | 5 comments; in progress |
| [#6819](https://github.com/earendil-works/pi/issues/6819) | **`assistant.usage` undefined crashes session** | Providers (DeepSeek V4) sometimes omit `usage` in streams → multiple code paths crash on `undefined`. | 4 comments; critical stability issue |
| [#7153](https://github.com/earendil-works/pi/issues/7153) | **`/scoped-models` stalls 5 min on catalog refresh** | Command blocks UI synchronously awaiting model-catalog refresh; no loading indicator → perceived hang. | 4 comments, 1 👍; UX regression |
| [#7252](https://github.com/earendil-works/pi/issues/7252) | **Markdown renderer corrupts raw LaTeX** | Display-only corruption of math operators/backslashes in assistant output; session JSONL remains intact. | 3 comments; affects all users rendering math |
| [#7253](https://github.com/earendil-works/pi/issues/7253) | **`/compact` double-triggers at 90% context** | Manual + auto compaction race → infinite loop until ESC; “Compaction failed: Already compacting” error. | 3 comments; data-loss risk |
| [#6998](https://github.com/earendil-works/pi/issues/6998) | **DeepSeek on Aliyun needs `thinkingFormat=qwen`** | Generator overrides Aliyun DeepSeek config with upstream DeepSeek settings, breaking thinking parsing. | 3 comments; provider-specific config bug |
| [#5329](https://github.com/earendil-works/pi/issues/5329) | **Expose “waiting on user input” for host integrations** | Integrations (e.g., cmux) need to distinguish active turn vs. blocked-on-prompt state for proper bridging. | 3 comments, 5 👍; high integration demand |
| [#7130](https://github.com/earendil-works/pi/issues/7130) | **Backspace deletes 2 chars in Kitty** | Kitty keyboard protocol release events not filtered → double-delete in terminal. | 3 comments; terminal-compat regression |

## 4. Key PR Progress (Top 10 by Scope & Merge Status)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#7293](https://github.com/earendil-works/pi/pull/7293) | **Queue extension commands after agent runs** | Adds `pi.queueCommand()` control-plane scheduling; dispatches at non-streaming settled boundary. | ✅ Merged |
| [#7288](https://github.com/earendil-works/pi/pull/7288) | **Preserve function args with empty `custom` payload** | Fixes OpenAI-compatible providers emitting empty `custom: {}` alongside valid function calls. | ✅ Merged (fixes #7160) |
| [#7122](https://github.com/earendil-works/pi/pull/7122) | **Tool byte-count, find warning, surrogate fixes** | `write.ts` now reports UTF-8 bytes; `find` false limit warning fixed; `truncateLine` handles surrogate pairs. | ✅ Merged |
| [#7272](https://github.com/earendil-works/pi/pull/7272) | **Preserve provider raw stop reason** | Adds `AssistantMessage.rawStopReason`; improves error messages; fixes Vertex/Gemini `finishReason` collapse. | ✅ Merged (fixes #7255) |
| [#7266](https://github.com/earendil-works/pi/pull/7266) | **Show SYSTEM.md / APPEND_SYSTEM.md in startup context** | Startup [Context] banner now lists file-backed system prompts alongside AGENTS.md. | ✅ Merged (fixes #7096) |
| [#7245](https://github.com/earendil-works/pi/pull/7245) | **Inline images under tmux via sixel** | Adds sixel backend; removes blanket `TMUX` image disable. | ✅ Merged |
| [#7261](https://github.com/earendil-works/pi/pull/7261) | **Clipboard read via wl-paste (Wayland) / xclip (X11)** | Fixes Ctrl+V no-op on Wayland by preferring CLI tools over X11-only `clipboard-rs`. | ✅ Merged |
| [#7258](https://github.com/earendil-works/pi/pull/7258) | **Enable streaming usage for llama.cpp** | Sets `supportsUsageInStreaming=true`; sends `stream_options.include_usage`; fixes `/session` token stats. | ✅ Merged |
| [#7289](https://github.com/earendil-works/pi/pull/7289) | **Comparative Pi eval harness** | Seeded, repeated multi-harness runs with score lift, token/latency/cost deltas; persists artifacts to `runs.jsonl`. | 🟢 Open |
| [#7163](https://github.com/earendil-works/pi/pull/7163) | **Search index SQLite (FTS5)** | Adds `SessionRepo.search()` with contentless FTS5 virtual table for SQLite; JSONL/memory fallback. | 🟢 Open |

## 5. Feature Request Trends
1. **Provider parity & new model onboarding** — Rapid addition of Kimi K3, Qwen reasoning maps, DeepSeek/Aliyun thinking formats, Bedrock Mantle (OAI Responses). Community expects same-day model availability.
2. **Extension API surface expansion** — `queueCommand`, `navigateTree`, session flush opt-in, structured metadata exposure. Integrators want first-class control-plane primitives.
3. **Observability & debugging** — Raw stop reasons, usage streaming, eval harness, search indexing. Operators need production-grade telemetry.
4. **Terminal / TUI hardening** — Kitty protocol, tmux/sixel images, clipboard Wayland support, backspace fixes. Cross-platform terminal fidelity is a recurring theme.
5. **Session resilience** — Double-compact guard, reactive `--resume`, lock-contention messaging, graceful degradation on missing `usage`.

## 6. Developer Pain Points
- **Silent data corruption in streams**: Missing `usage` fields, empty `custom` objects, provider-specific `finishReason` mappings cause crashes or lost context (issues #6819, #7160, #7255).
- **Opaque loading states**: `/scoped-models` 5-min stall, no spinner for catalog refresh (#7153); `--mode json` O(n²) stdout growth OOMs agents (#7290).
- **Terminal protocol leaks**: Kitty key-release events pollute parent shell on exit (#7294); tmux previously blocked all images (#7245).
- **Config drift between providers**: Generator overrides (Aliyun DeepSeek #6998), reasoning effort map mismatches (Qwen #6951), thinking format defaults.
- **Extension-command race conditions**: Commands fired during streaming cause undefined behavior; new `queueCommand` API addresses this but migration needed (#7293, #7022).
- **Misleading startup errors**: Lock contention masquerading as missing API keys (#1871) erodes trust in diagnostics.

---

*Digest generated from github.com/badlogic/pi-mono activity (2026-07-29 → 2026-07-30). All links point to earendil-works/pi.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-30

---

## 1. Today's Highlights

- **Nightly release v0.21.1-nightly.20260730** shipped with CI container fixes and web-shell improvements.  
- **Four main-branch CI failures** surfaced simultaneously: subagent delegation, ACP cron streaming, dynamic model-switching, and session writer-lock leakage — all tagged `autofix/in-progress`.  
- **Autofix boting infrastructure** received major upgrades: per-source feedback budgets in critical-only mode, race-lost push recovery, and round-cap visibility on PRs.

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| [v0.21.1-nightly.20260730.1643a6c9a](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1-nightly.20260730.1643a6c9a) | 2026-07-30 | • `fix(ci)`: add default bash shell to container jobs in qwen-triage ([#7838](https://github.com/QwenLM/qwen-code/pull/7838))<br>• `fix(web-shell)`: pre-release stabilization (details in release notes) |

---

## 3. Hot Issues (10 Noteworthy)

| # | Title & Link | Labels | Why It Matters | Community Signal |
|---|--------------|--------|----------------|------------------|
| [#7752](https://github.com/QwenLM/qwen-code/issues/7752) | fix(serve): Release managed writer locks and lease daemon maintenance | `priority/P0`, `type/bug`, `category/core`, `scope/session-management`, `daemon` | Daemon replacement leaves stale writer locks → new daemon fails closed with "session already open" error. Blocking follow-up to #7164. | 2 comments, P0 priority |
| [#8070](https://github.com/QwenLM/qwen-code/issues/8070) | Main CI failed: E2E Tests — subagent delegation | `type/bug`, `scope/testing`, `status/ready-for-agent`, `autofix/in-progress` | Flaky subagent test blocks main; autofix bot already engaged ([#8073](https://github.com/QwenLM/qwen-code/pull/8073)). | 3 comments, auto-triaged |
| [#8076](https://github.com/QwenLM/qwen-code/issues/8076) | Main CI failed: E2E Tests — ACP cron job streaming | `type/bug`, `category/integration`, `scope/testing`, `autofix/in-progress` | Cron integration test fails on sessionUpdate streaming after prompt returns. | 3 comments, auto-triaged |
| [#8072](https://github.com/QwenLM/qwen-code/issues/8072) | Main CI failed: E2E Tests — dynamic model switch during streaming | `priority/P2`, `type/bug`, `category/integration`, `scope/model-switching`, `scope/sdk`, `autofix/in-progress` | `setModel` API test flakes when model changes mid-stream; autofix PR [#8075](https://github.com/QwenLM/qwen-code/pull/8075) stabilizing turn detection. | 3 comments, P2 |
| [#8079](https://github.com/QwenLM/qwen-code/issues/8079) | Workspace skill status polling triggers full skill rescans | — | 232k `SKILL_LOAD` logs in idle daemon; repeated polling re-parses all skills unnecessarily. Performance regression. | 1 comment, new today |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | Fleet Shepherd Dashboard | `status/need-information`, `scope/ci-cd` | Auto-maintained fleet health dashboard; shows PR #8064 checks in flight, #8037 idle. Operational visibility. | 4 comments, updated today |
| [#8037](https://github.com/QwenLM/qwen-code/pull/8037) | fix(core): recover XML-style tool calls from plain text | `review/self-reported` | Fallback parser for models emitting `<invoke>`/`<parameter>` XML instead of structured `tool_calls`. Improves robustness. | PR linked, updated today |
| [#8064](https://github.com/QwenLM/qwen-code/pull/8064) | fix(integration): make interactive read-then-write test deterministic | `review/self-reported` | Replaces live LLM with deterministic fake in E2E test; eliminates flakiness. | PR linked, updated today |
| [#7944](https://github.com/QwenLM/qwen-code/pull/7944) | fix(test): accept tool call OR file content in file-system-interactive | `review/self-reported` | Relaxes assertion to accept either tool call or correct file content; reduces false negatives. | PR linked, updated today |
| [#8061](https://github.com/QwenLM/qwen-code/pull/8061) | feat(github-channel): add transient working reaction | — | Adds temporary `eyes` reaction on GitHub issues/PRs while agent turn runs; removes on completion. Better UX feedback. | PR linked, updated today |

---

## 4. Key PR Progress (10 Important)

| # | Title & Link | Type | Summary |
|---|--------------|------|---------|
| [#8077](https://github.com/QwenLM/qwen-code/pull/8077) | fix(cli): hide streaming thinking preview by default, rebind toggle to Ctrl+O | Bug fix / UX | Streaming thinking block caused constant reflow (1–5 rows). Now hidden by default; toggle via `Ctrl+O`. |
| [#8074](https://github.com/QwenLM/qwen-code/pull/8074) | fix(cli): add Ctrl+Tab alternative for @ completion tab switching | Bug fix / A11y | `Ctrl+←/→` intercepted by terminals; adds `Ctrl+Tab`/`Ctrl+Shift+Tab` for all/session/mcp tabs. Fixes [#8069](https://github.com/QwenLM/qwen-code/issues/8069). |
| [#8078](https://github.com/QwenLM/qwen-code/pull/8078) | fix(web-shell): improve artifact previews | Bug fix | HTML artifacts run inline scripts in sandboxed iframe; image artifacts read via binary byte endpoint (100 KiB bound). |
| [#8002](https://github.com/QwenLM/qwen-code/pull/8002) | feat(serve): page large text files by byte cursor | Feature | Bounded byte-cursor paging across HTTP, ACP, TS SDK, MCP. Returns `hasMore` + opaque `nextCursor` for seeking. |
| [#7975](https://github.com/QwenLM/qwen-code/pull/7975) | fix(serve): Isolate daemon session maintenance writers | Bug fix / Core | Pins one absolute session runtime root per workspace; passes to managed children. Fixes writer-lease leakage ([#7752](https://github.com/QwenLM/qwen-code/issues/7752)). |
| [#7799](https://github.com/QwenLM/qwen-code/pull/7799) | feat(cli): Add agent view supervisor runtime | Feature / Foundation | Local supervisor socket, JSON-line protocol, persistent session metadata, startup/shutdown handling. Stack 1/5. |
| [#8067](https://github.com/QwenLM/qwen-code/pull/8067) | fix(autofix): answer round-cap refusals on the PR instead of only in logs | Autofix infra | Makes round-cap (10/10) pause notice visible on PR (was takeover-only). Prevents silent stalls. |
| [#8042](https://github.com/QwenLM/qwen-code/pull/8042) | fix(autofix): salvage race-lost pushes by merging moved head and retrying | Autofix infra | Recovers from `fetch first` push failures during agent run; merges moved head and retries instead of discarding run. |
| [#8071](https://github.com/QwenLM/qwen-code/pull/8071) | feat(autofix): per-source feedback budget in Critical-only mode | Autofix infra | Replaces lexical-only filtering with per-source budgets after round 5; avoids discarding valid non-critical feedback. |
| [#8020](https://github.com/QwenLM/qwen-code/pull/8020) | feat(review): statement-level mutation probes in test-efficacy | Feature / Testing | Adds deterministic single-line deletion mutants over added safety statements; runs through existing probe workflow. Part of [#7981](https://github.com/QwenLM/qwen-code/issues/7981). |

---

## 5. Feature Request Trends (Distilled from Issues & PRs)

| Direction | Evidence |
|-----------|----------|
| **Deterministic / flake-free E2E testing** | Multiple PRs replacing live LLM calls with deterministic fakes ([#8064](https://github.com/QwenLM/qwen-code/pull/8064), [#7944](https://github.com/QwenLM/qwen-code/pull/7944)), stabilizing turn detection ([#8075](https://github.com/QwenLM/qwen-code/pull/8075)), forcing delegation in prompts ([#8073](https://github.com/QwenLM/qwen-code/pull/8073)). |
| **Autofix bot maturity** | Round-cap visibility ([#8067](https://github.com/QwenLM/qwen-code/pull/8067)), push-race recovery ([#8042](https://github.com/QwenLM/qwen-code/pull/8042)), per-source feedback budgets ([#8071](https://github.com/QwenLM/qwen-code/pull/8071)), critical-only mode tuning. |
| **Daemon / session robustness** | Writer-lock isolation ([#7975](https://github.com/QwenLM/qwen-code/pull/7975)), lease maintenance ([#7752](https://github.com/QwenLM/qwen-code/issues/7752)), skill polling optimization ([#8079](https://github.com/QwenLM/qwen-code/issues/8079)). |
| **Large-file / streaming UX** | Byte-cursor paging ([#8002](https://github.com/QwenLM/qwen-code/pull/8002)), thinking preview toggle ([#8077](https://github.com/QwenLM/qwen-code/pull/8077)), artifact preview hardening ([#8078](https://github.com/QwenLM/qwen-code/pull/8078), [#8041](https://github.com/QwenLM/qwen-code/pull/8041)). |
| **Cross-platform test parity** | Windows portability PR ([#8050](https://github.com/QwenLM/qwen-code/pull/8050)) with stable locale, temp dirs, POSIX-preserving assertions. |
| **Model-switching & subagent reliability** | Dynamic `setModel` during streaming ([#8072](https://github.com/QwenLM/qwen-code/issues/8072)), subagent delegation enforcement ([#8070](https://github.com/QwenLM/qwen-code/issues/8070)). |

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Items |
|------------|-----------|----------------------|
| **Flaky E2E tests blocking main** | High (4 simultaneous CI failures today) | [#8070](https://github.com/QwenLM/qwen-code/issues/8070), [#8076](https://github.com/QwenLM/qwen-code/issues/8076), [#8072](https://github.com/QwenLM/qwen-code/issues/8072), subagent / cron / model-switch tests |
| **Daemon session corruption on restart/replace** | Critical (P0) | [#7752](https://github.com/QwenLM/qwen-code/issues/7752) — stale writer locks cause "session already open" hard failure |
| **Autofix bot silent failures / discarded work** | Medium-High | Round-cap stalls silently ([#8067](https://github.com/QwenLM/qwen-code/pull/8067)), push races discard 50-min runs ([#8042](https://github.com/QwenLM/qwen-code/pull/8042)), over-aggressive feedback filtering ([#8071](https://github.com/QwenLM/qwen-code/pull/8071)) |
| **Terminal keybinding conflicts** | Medium | `Ctrl+←/→` unusable for @-completion tabs ([#8074](https://github.com/QwenLM/qwen-code/pull/8074) fixes with `Ctrl+Tab`) |
| **Streaming UI reflow / visual noise** | Medium | Thinking preview jumps 1–5 rows on empty lines ([#8077](https://github.com/QwenLM/qwen-code/pull/8077)) |
| **Skill system performance at scale** | Emerging | 232k `SKILL_LOAD` lines from idle polling ([#8079](https://github.com/QwenLM/qwen-code/issues/8079)) |
| **Windows test parity gaps** | Ongoing | Full suite portability work ([#8050](https://github.com/QwenLM/qwen-code/pull/8050)) |

---

*Generated from GitHub data as of 2026-07-30. All links point to QwenLM/qwen-code repository.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-30

---

## 1. Today's Highlights

The project is in a heavy stabilization phase with **no new release cut today**, but 11 issues and 33 PRs saw movement in the last 24 hours. Key themes: **TUI input handling fixes** (AltGr/Windows keyboard layouts, mouse-report leaks), **LaTeX math rendering** finally landing via Unicode substitution, **Indonesian localization** reaching website parity, and a **Skills Manager performance regression** on cold Linux filesystems being resolved incrementally. Community discussion also surfaced around the Chinese translation of "Constitution" (宪法 vs 协作准则), highlighting localization nuance.

---

## 2. Releases

*No new releases published in the last 24 hours.* The v0.9.2 candidate is undergoing final CI validation (Skills Manager PTY isolation, locale matrix sync). v0.8.59 stabilization release remains tracked in #3063.

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) | **Anthropic-compatible API `type` validation error** (HTTP 400) | Blocks OpenModel/Anthropic-compatible providers; intermittent but frequent. Critical for multi-provider users. | New (0 comments), high urgency — regression in v0.9.x provider routing. |
| [#4959](https://github.com/Hmbown/CodeWhale/issues/4959) | **Proposed `/stop` command & runtime STOP-word intercept** | Addresses YOLO/autonomous mode runaway executions; safety gap for unattended agents. | 3 comments, early design discussion — strong demand for hard kill-switch. |
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | **Chinese translation of "Constitution": 宪法 vs 协作准则** | Localization policy decision with political/sensitivity implications; sets precedent for governance docs. | 2 comments, active debate among Chinese contributors — no consensus. |
| [#4723](https://github.com/Hmbown/CodeWhale/issues/4723) | **Windows AltGr+Q (ABNT2) opens help instead of typing `/`** | Keyboard layout compatibility bug affecting Brazilian Portuguese developers; input capture conflict. | 2 comments, fixed in PR #4977 — good example of layout-aware key handling. |
| [#4957](https://github.com/Hmbown/CodeWhale/issues/4957) | **LaTeX math renders as raw `$...$` source** | Major UX gap for scientific/technical users; math-heavy AI responses unreadable. | 1 comment, **closed** — resolved by PR #4973/#4974 (Unicode substitution). |
| [#4941](https://github.com/Hmbown/CodeWhale/issues/4941) | **Thinking level reverts to Auto on restart** | Persistence bug: `reasoning_effort` discarded despite settings layer working. Affects power users tuning reasoning. | 1 comment, closed — root cause in picker→startup defaults handoff. |
| [#4976](https://github.com/Hmbown/CodeWhale/issues/4976) | **Skills Manager toggle times out on cold Linux FS** | Release blocker for v0.9.2; synchronous re-audit exceeds 15s budget on slow I/O. | 0 comments, **closed** — incremental scan fix in PR #4975. |
| [#4547](https://github.com/Hmbown/CodeWhale/issues/4547) | **Transcript spinners/Stop controls stale for dead shell jobs** | UI desync: ghost spinners + Stop buttons for jobs that no longer exist; confusing UX. | 0 comments, closed — transcript/jobs registry reconciliation needed. |
| [#1186](https://github.com/Hmbown/CodeWhale/issues/1186) | **Typed persistent permission rules for execpolicy** | Security/enhancement: granular allow/deny/ask by tool, command prefix, path pattern. Foundation for policy-as-code. | 13 comments, closed — merged into v0.9.3 track; high design discussion. |
| [#3063](https://github.com/Hmbown/CodeWhale/issues/3063) | **v0.8.59 release tracker: mouse-report leak, runtime safety** | Stabilization release gate; macOS TUI input leak + maintainer queue triage. | 11 comments, closed — release coordination hub. |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#4979](https://github.com/Hmbown/CodeWhale/pull/4979) | **fix(tui)** | Detach foreground shell before steering — prevents deadlock when same-turn steer enqueued during blocking `bash` wait. Covers explicit steer + queued-message promotion. |
| [#4977](https://github.com/Hmbown/CodeWhale/pull/4977) | **fix(tui)** | **AltGr `/` fix for ABNT2** (#4723): distinguish `Ctrl+Alt` (AltGr) from true `Ctrl+/` help chord; adds AZERTY/ABNT2 layout allowlist. |
| [#4974](https://github.com/Hmbown/CodeWhale/pull/4974) | **feat(tui)** | **LaTeX math rendering** (closes #4957): Unicode substitution for `$...$`, `$$...$$`, `\(...\)`, `\[...\]`; hardened `\mathbb{R}` path, prevents markdown clobbering. |
| [#4975](https://github.com/Hmbown/CodeWhale/pull/4975) | **fix(tui)** | **Skills Manager incremental scan** (closes #4976): reuse owned inventory, scan only new external roots, recompute precedence — meets 15s PTY budget. |
| [#4973](https://github.com/Hmbown/CodeWhale/pull/4973) | **feat(tui)** | Contributor implementation of LaTeX rendering (superseded by #4974 but retains authorship). |
| [#4972](https://github.com/Hmbown/CodeWhale/pull/4972) | **feat(web)** | **Indonesian (`id`) website locale** (closes #4789): `chrome.ts` + `home.ts` dictionaries — achieves web/TUI/README parity for ID. |
| [#4971](https://github.com/Hmbown/CodeWhale/pull/4971) | **ci(tui)** | Isolate Skills Manager PTY acceptance test from flaky shared `qa_pty` runner; dedicated Unix CI process. |
| [#4970](https://github.com/Hmbown/CodeWhale/pull/4970) | **docs** | Sync localization matrices for 0.9.2: canonical + ID (1,248 keys), zh-Hant partial (499 keys), README inventory. |
| [#4942](https://github.com/Hmbown/CodeWhale/pull/4942) | **fix(tools)** | **Preserve CRLF edits**: LF-normalized search + CRLF-mapped replacement; no rewriting untouched lines. |
| [#4896](https://github.com/Hmbown/CodeWhale/pull/4896) | **fix(codex)** | **Offload clipboard (OSC 52/SSH/tmux) to background worker** (#4159): serialized queue, bounded backlog, event-loop relief. |

---

## 5. Feature Request Trends

| Direction | Evidence | Priority Signal |
|-----------|----------|-----------------|
| **Hard execution control** | `/stop` command (#4959), typed execpolicy rules (#1186), STOP-word intercept | **High** — safety/correctness for autonomous agents |
| **Math/technical content rendering** | LaTeX support (#4957, #4973, #4974) | **High** — unblocks STEM workflows |
| **Multi-provider robustness** | Anthropic-compat `type` validation (#4978), root model fallback alignment (#4852) | **High** — provider ecosystem maturity |
| **Localization depth** | ID website parity (#4972), zh-Hant partial pack (#4970), Constitution translation debate (#4949) | **Medium-High** — SEA focus + governance docs |
| **Keyboard/layout inclusivity** | AltGr/ABNT2 fix (#4977, #4723), AZERTY allowlist | **Medium** — international developer UX |
| **Plugin/skill ecosystem performance** | Cold FS scan timeout (#4976), incremental compatible scan (#4975), plugin init for all launch paths (#4519) | **Medium** — scalability for power users |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Representative Items |
|------------|-----------|----------------------|
| **Input handling quirks on non-US layouts** | 2 issues + 1 PR | AltGr+Q → help (#4723), AZERTY/ABNT2 chord conflicts (#4977) |
| **Ghost UI state for background jobs** | 1 issue + related PRs | Stale spinners/Stop buttons (#4547), transcript/jobs desync |
| **Provider API fragility** | 1 acute issue | Anthropic `type` enum rejection (#4978) — intermittent, blocks multi-provider |
| **Persistence leaks for reasoning settings** | 1 issue | `reasoning_effort` lost on restart despite settings save (#4941) |
| **Cold-start / slow-FS latency** | 1 release-blocker | Skills Manager re-audit timeout on Linux (#4976) |
| **Localization governance ambiguity** | 1 discussion | "Constitution" translation controversy (#4949) — no process for sensitive terms |

---

*Data source: `github.com/Hmbown/DeepSeek-TUI` (mirrored as `Hmbown/CodeWhale` in issue/PR links). Digest covers activity updated 2026-07-29 → 2026-07-30.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*