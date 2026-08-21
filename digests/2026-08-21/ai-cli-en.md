# AI CLI Tools Community Digest 2026-08-21

> Generated: 2026-08-21 01:46 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-21)

---

## 1. Ecosystem Overview

The AI CLI landscape is fragmenting into **three tiers**: mature enterprise-grade tools (Claude Code, Codex, Copilot CLI) shipping weekly releases with dedicated platform teams; **mid-tier contenders** (Gemini CLI, OpenCode, Qwen Code) investing heavily in automation, review loops, and provider ecosystems; and **emerging/niche players** (Kimi, Pi, CodeWhale) focusing on UX polish, localization, and architectural refactors. Across the board, **session durability, multi-agent orchestration, and MCP/plugin ecosystem stability** are the dominant technical battlegrounds. Windows support remains a systemic weakness for non-Microsoft tools, while model-provider parity (Bedrock, Vertex, Aone, custom gateways) drives significant engineering investment.

---

## 2. Activity Comparison

| Tool | Issues (Hot/Total) | PRs Updated | Release Status | Key Release Notes |
|------|-------------------|-------------|----------------|-------------------|
| **Claude Code** | 10 / 10+ | 0 | **v2.1.238** (stable) | `keybindingFlavor: "readline"`, `headersHelper` for plugin marketplaces; regression: empty thinking blocks persisted |
| **OpenAI Codex** | 10 / 10+ | 10 (mostly bot-authored) | **v0.149.0** (stable) + **v0.150.0-alpha.1** | `codex agents` dashboard, `/cd` `/pwd` `/cwd`, Windows path/auth fixes |
| **Gemini CLI** | 10 / 10+ | 10 | **v0.56.0-nightly** | Symlink ignore fix, `shellExecutionService` type safety; heavy PR automation (orchestrator, Antigravity runner) |
| **GitHub Copilot CLI** | 10 / 10+ | 1 | **v1.0.81-6** (pre-release) | `defaultMode`/`defaultPermissionMode`, `login --with-token`; enterprise model access regressions |
| **Kimi Code CLI** | 1 / 1 | 1 | *None* | Only workspace memory proposal (#2613) + plugin security docs (#2614) |
| **OpenCode** | 10 / 26 | 10 | **v1.18.19** (stable) | Cloudflare AI Gateway passthroughs, Codex rate-limit alignment, **+88% SSE throughput / −48% CPU** on Windows |
| **Pi** | 10 / 10+ | 12 | *None* | `/exit` alias merged (6+ issues), Bedrock Mantle, Kimi reasoning normalization, color API refactor |
| **Qwen Code** | 10 / 10+ | 10 | **v0.21.15** (stable) + nightlies | Web Shell file attachments, `/review` convergence advisory, Aone Code branch MRs, dedup, self-PR detection |
| **DeepSeek TUI (CodeWhale)** | 6 / 6 | 5 | **v0.9.10** (rebrand complete) | `deepseek-tui` deprecated → `codewhale`; crate decomposition (EPIC-005), `read_lints` tool, progressive onboarding |

> **Note**: Issue/PR counts reflect "hot" items highlighted in digests; actual repo totals are higher.

---

## 3. Shared Feature Directions

| Direction | Tools Affected | Specific Community Needs |
|-----------|----------------|--------------------------|
| **Headless / Remote-First Architecture** | Codex (#23200 49👍), Copilot CLI (#4529, #4539), Claude Code (#88197), OpenCode (#43698) | Persistent Linux daemon, mobile/web control, session resurrection, QR pairing reliability |
| **Multi-Agent Orchestration & Cost Control** | Codex (#39808, #37674), Claude Code (#88412), Gemini CLI (#22323, #21409), OpenCode (#43675), Qwen Code (#9190) | Subagent budgets, cache inheritance on fork, convergence detection, token/turn optimization |
| **MCP / Plugin Ecosystem Hardening** | Claude Code (#88370, #86459), Copilot CLI (#4096, #4439, #3162), Gemini CLI (#28863), Kimi (#2613), Pi (#8390) | OAuth token bridging, workspace config auto-connect, stdio leak fixes, registry validation, persistent storage APIs |
| **Windows Parity & Path Handling** | Claude Code (#87879, #42776), Codex (#39150, #39189), Copilot CLI (#4524, #4540), OpenCode (#42980), Pi (#7547) | MSIX silo leaks, `\\?\` extended paths, sandbox git access, WSL/ConPTY keybindings, native vs MSYS2 strategy |
| **Session Durability & Recovery** | Codex (#28276, #33493), Claude Code (#86012, #88383), Copilot CLI (#4543), Gemini CLI (#25166), OpenCode (#43734) | Archival/compaction loops, cross-session messaging deadlocks, prompt history scoping, transcript bounding |
| **Provider-Aware Reasoning & Model Controls** | Qwen Code (#9590), Pi (#8383, #8405), Codex (#37674), Gemini CLI (#28828), OpenCode (#43736) | Per-model thinking levels (toggle-only, mandatory), reasoning effort tiers, cache controls, base64url signatures |
| **AST-Aware / Surgical Code Tooling** | Gemini CLI (#22745, #19873), Qwen Code (#9273), OpenCode (skill loading), Pi (theme/color API) | Symbol-level reads/grep/mapping, TUI capture rendering, incremental context anchoring |

---

## 4. Differentiation Analysis

| Dimension | Enterprise-First (Claude, Codex, Copilot) | Contender / OSS-First (Gemini, OpenCode, Qwen, Pi) | Niche / Emerging (Kimi, CodeWhale) |
|-----------|-------------------------------------------|---------------------------------------------------|------------------------------------|
| **Target User** | Professional devs, enterprises, teams | Power users, OSS contributors, automation builders | Regional (CN), early adopters, tinkerers |
| **Release Cadence** | Weekly stable + alpha channels | Nightly + periodic stable | Irregular; rebrand/architectural milestones |
| **Architecture** | Monolithic binaries + embedded runtimes | Modular crates (OpenCode, CodeWhale), plugin-first (Gemini, Pi) | Single-binary TUI (CodeWhale), plugin-stdio (Kimi) |
| **Platform Priority** | macOS/Linux first; Windows lagging | Linux-first; Windows via WSL/convergence | Linux/macOS; Windows explicitly debated (Pi) |
| **Model Integration** | Proprietary + select partners (Bedrock, Vertex) | Multi-provider abstraction (OpenCode, Pi, Qwen) | Single-provider (Kimi) or gateway-agnostic (CodeWhale) |
| **Automation Focus** | Non-interactive modes, CI/CD auth, enterprise policy | Headless daemons, SDK/HTTP triggers, eval harnesses | Limited; first-run UX, localization |
| **Trust & Transparency** | Server-side experiment overrides (#75607) | Config-driven, explicit fallbacks (#28828), open evals | Community-driven; less telemetry opacity |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / Maturing** | **OpenAI Codex**, **OpenCode**, **Qwen Code** | Codex: 49👍 on headless request, bot-driven PR velocity; OpenCode: +88% throughput fix, V2 parity push; Qwen: 7 Aone issues in 24h, review-loop observability investment |
| **High Activity / Enterprise-Grade** | **Claude Code**, **GitHub Copilot CLI** | Claude: 621👍 on multi-account, deep Windows/ model regressions; Copilot: Enterprise model drift, MCP OAuth gaps, but steady pre-releases |
| **Active Refactor / Platform Building** | **Gemini CLI**, **Pi**, **CodeWhale** | Gemini: PR automation (orchestrator, Antigravity), sandbox hardening; Pi: 6+ quit-alias issues, color API, provider expansion; CodeWhale: crate decomposition, rebrand, LSP tooling |
| **Low Activity / Early Stage** | **Kimi Code CLI** | Single issue/PR in 24h; memory plugin proposal only; plugin security docs suggest pre-1.0 stabilization |

**Velocity Leaders**: OpenCode (perf fix + V2), Qwen Code (provider parity sprint), Codex (automated PR pipeline).  
**Risk Concentration**: Claude Code (Windows + model quality + trust), Copilot CLI (Enterprise model access + MCP), Codex (macOS V8 OOM + session fragility).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Daemon/Background Session = Table Stakes** | Codex #23200 (49👍), Claude #88197, Copilot #4529, OpenCode #43698 | Tools without persistent headless mode will lose mobile/remote workflows; invest in session serialization + resurrection |
| **Multi-Agent Economics Drive Architecture** | Subagent cache forfeiture (Claude #88412), overhead budgets (Codex #39808), convergence advisories (Qwen #9623) | Per-agent token budgets, shared context pools, and deterministic compaction are competitive differentiators |
| **MCP is the New Plugin Standard — But Fragile** | 5+ tools reporting OAuth bridging, registry validation, stdio leaks | Standardize on MCP 2025-06-18+ spec; build gateway-side token exchange; treat workspace `.mcp.json` as first-class config |
| **Windows Is a Strategic Liability for Non-MS Tools** | Claude (MSIX silos), Codex (`\\?\` paths), Copilot (sandbox git), Pi (runtime matrix debate) | Either invest in native Windows (MSIX/AppX) or make WSL/ConPTY first-class; half-measures generate recurring regressions |
| **Model-Provider Abstraction Layers Are Maturing** | OpenCode (Cloudflare Gateway), Pi (Bedrock Mantle, Umans, Concentrate), Qwen (Aone, Kimi, MiMo), Gemini (Vertex) | Build provider-agnostic reasoning/config surfaces; avoid hardcoding model-specific logic in core loops |
| **Observability > Raw Features** | Qwen review capture-TUI, Codex case-insensitive history, OpenCode per-tab history, Pi OSC 133 correctness | Debuggable agent loops (convergence, diff rendering, transcript bounds) outweigh raw capability additions |
| **Localization & Onboarding as Moats** | CodeWhale progressive first-run, Pi Chinese docs restructure, Kimi CN/Intl auth presets | Non-English markets (CN, JP, KR) reward tools that invest in native UX, not just translated strings |

---

## Bottom Line for Decision-Makers

- **For Enterprise Adoption**: **GitHub Copilot CLI** leads on org policy integration but has acute Enterprise model-access bugs; **Claude Code** has deepest model quality but Windows/trust regressions; **Codex** has strongest remote/headless demand signal.
- **For Automation/Headless Pipelines**: **OpenCode** (perf + V2 SDK), **Qwen Code** (review-loop observability), **Codex** (agents dashboard) are investing heavily.
- **For OSS/Community Extensibility**: **Gemini CLI** (plugin sandbox, eval infra), **Pi** (extension runtime, theme API), **OpenCode** (plugin API) offer the cleanest surfaces.
- **Watch List**: **CodeWhale** (crate decomposition → library reuse), **Kimi** (workspace memory plugin → potential differentiation), **Pi** (Windows strategy resolution → platform commitment).

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-21)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Fixes the core evaluation pipeline that powers skill description optimization; resolves Windows stream reading, trigger detection, and parallel worker issues | References **Issue #556** (12 comments, 7 👍) — "10+ independent reproductions" of 0% trigger rate; blocks the entire description-optimization loop | **Open** (updated 2026-06-23) |
| 2 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` — mechanical verification + 4-dimension reasoning gate | Universal pre-delivery audit: Step 0 verifies claimed output files exist; Steps 1–4 audit reasoning across correctness, completeness, safety, clarity in damage-severity order | Proposes a **quality gate pipeline** (mirrors **Issue #1385**, 4 comments); aims to be stack-agnostic | **Open** (updated 2026-07-02) |
| 3 | **[#568](https://github.com/anthropics/skills/pull/568)** `servicenow` — ServiceNow platform skill | Broad platform assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, Vulnerability Response, IntegrationHub | Long-lived PR (created 2026-03-08, updated 2026-08-12); enterprise demand for governed platform automation | **Open** |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` — comprehensive testing stack | Testing Trophy philosophy, AAA pattern, React Testing Library, API/contract testing, E2E (Playwright/Cypress), test data management, CI integration | Addresses a **recurring community gap**: no canonical testing skill despite heavy agent-assisted test generation usage | **Open** (updated 2026-04-21) |
| 5 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` — typographic quality control | Prevents orphans/widows, numbering misalignment, widow headers in AI-generated documents (PDF, DOCX, HTML) | "Affects every document Claude generates"; high practical value for professional output | **Open** (updated 2026-03-13) |
| 6 | **[#1099](https://github.com/anthropics/skills/pull/1099)** & **[#1050](https://github.com/anthropics/skills/pull/1050)** `skill-creator`: Windows compatibility | Fixes `claude.cmd` vs `claude` executable resolution, subprocess pipe reading (WinError 10038), encoding bugs | **Critical for Windows adopters**; both PRs reference the same `run_eval.py` crash symptom | **Open** (updated 2026-05-24) |
| 7 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` — OpenDocument creation & template filling | Create, fill, read, convert `.odt`/`.ods`; triggers on "ODT", "OpenDocument", "LibreOffice", ISO-standard requests | Open-format alternative to DOCX; niche but persistent demand in gov/edu/enterprise | **Open** (updated 2026-04-14) |
| 8 | **[#210](https://github.com/anthropics/skills/pull/210)** `frontend-design` — clarity & actionability overhaul | Rewrites skill to be executable (not educational); ensures every instruction is followable in a single conversation | Meta-improvement: demonstrates **skill-authoring best practices** the community wants standardized | **Open** (updated 2026-03-07) |

> **Note**: PR comment counts show as `undefined` in the data export; ranking above weighs issue cross-references, update recency, and scope of impact.

---

## 2. Community Demand Trends — From Issues (Ranked by Comments + 👍)

| Rank | Issue | Core Demand | Signal Strength |
|------|-------|-------------|-----------------|
| 1 | **[#492](https://github.com/anthropics/skills/issues/492)** Security: `anthropic/` namespace trust abuse | **Namespace governance** — community skills masquerade as official; users grant elevated permissions incorrectly | 43 comments, 2 👍 — **highest engagement** |
| 2 | **[#189](https://github.com/anthropics/skills/issues/189)** Duplicate skills from `document-skills` + `example-skills` | **Plugin hygiene** — identical skills installed twice, polluting context window | 6 comments, **9 👍** — strongest upvote signal |
| 3 | **[#228](https://github.com/anthropics/skills/issues/228)** Org-wide skill sharing in Claude.ai | **Distribution UX** — replace manual `.skill` file sharing via Slack/Teams with shared library or link | 16 comments, 8 👍 |
| 4 | **[#556](https://github.com/anthropics/skills/issues/556)** `run_eval.py` 0% trigger rate | **Evaluation reliability** — skill-creator's optimization loop optimizes against noise | 12 comments, 7 👍 — blocks skill quality |
| 5 | **[#1487](https://github.com/anthropics/skills/issues/1487)** `claude-api` skill injects ~156k tokens | **Context-window discipline** — eager injection exhausts window in one tool call | 4 comments — **critical for bundled skills** |
| 6 | **[#1385](https://github.com/anthropics/skills/issues/1385)** Reasoning Quality Gate Pipeline (3-gate) | **Structured quality assurance** — pre-task calibration → adversarial review → delivery verification | 4 comments, 1 👍 — aligns with PR #1367 |
| 7 | **[#1329](https://github.com/anthropics/skills/issues/1329)** `compact-memory` — symbolic notation for agent state | **Context compression** — replace prose memory with symbolic notation for long-running agents | 9 comments |
| 8 | **[#16](https://github.com/anthropics/skills/issues/16)** Expose Skills as MCPs | **Interoperability** — standardize skill I/O as MCP tools for cross-agent use | 4 comments |
| 9 | **[#29](https://github.com/anthropics/skills/issues/29)** Bedrock / AWS support | **Cloud provider parity** — run skills on Anthropic models via Bedrock | 4 comments |
| 10 | **[#12](https://github.com/anthropics/skills/issues/12)** Whitespace reformatting in DOCX/OOXML | **Document fidelity** — skill corrupts Word files by injecting whitespace | 4 comments, 1 👍 |

**Emerging Themes**:
- **Trust & Distribution** (#492, #189, #228) — the top 3 issues are about *how skills are packaged, named, and shared*, not what they do
- **Evaluation & Quality Gates** (#556, #1385, #1367) — community building tooling to *verify skills work* before shipping
- **Context Efficiency** (#1487, #1329) — skills must respect token budgets; compact representations wanted
- **Enterprise/Platform Skills** (#568 ServiceNow, #181 SAP, #723 testing) — demand for governed, platform-specific automation

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land Soon

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fixes | **Unblocks the entire skill-authoring pipeline**; 10+ reproductions; Windows fixes in companion PRs #1099/#1050 |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Implements the **Quality Gate Pipeline** proposed in Issue #1385; universal, stack-agnostic, high leverage |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Fills a **canonical gap**; testing is the #1 agent-assisted workflow with no official skill |
| **[#568](https://github.com/anthropics/skills/pull/568)** | `servicenow` | Enterprise platform skill; **recently updated (2026-08-12)**; broad coverage (ITSM/ITOM/SecOps/ITAM) |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | High practical ROI — "affects every document"; low complexity, high visibility |
| **[#486](https://github.com/anthropics/skills/pull/486)** | `odt` | Open-format demand; feature-complete implementation; awaiting review |
| **[#210](https://github.com/anthropics/skills/pull/210)** | `frontend-design` (rewrite) | Demonstrates **skill-authoring best practices**; serves as template for future skills |
| **[#525](https://github.com/anthropics/skills/pull/525)** | `pyxel` (retro game dev) | Novel domain; MCP-backed; shows ecosystem extending beyond enterprise/web |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community’s most concentrated demand is not for new domain skills, but for trustworthy skill infrastructure: reliable evaluation, namespace governance, context-efficient distribution, and quality gates that make skills safe to share and depend on at scale.**

---

# Claude Code Community Digest — 2026-08-21

---

## 1. Today's Highlights

- **v2.1.238 shipped** with a new `keybindingFlavor: "readline"` option (Ctrl+W deletes to previous whitespace, Bash-style) and `headersHelper` support for plugin marketplaces.
- **Regression in 2.1.238**: Interactive CLI sessions now persist empty thinking blocks (`thinking: ""` with signature only), mirroring a prior SDK/print-mode bug (#87947).
- **Windows desktop instability persists**: MSIX in-place updates leak container silos (unlaunchable until reboot, #87879), and orphaned process locks still block relaunch (#42776, 125 comments).

---

## 2. Releases

### v2.1.238
- **`keybindingFlavor` setting**: Set to `"readline"` for Bash-style Ctrl+W (delete to previous whitespace); default remains `"classic"`.
- **Plugin marketplaces**: `headersHelper` on a URL marketplace or catalog entry now runs a command to generate request headers (enables dynamic auth tokens, custom headers).

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | **Multi-account switching in mobile app** (no shared email) | Top-voted feature request (621 👍); blocks users with multiple Anthropic accounts on mobile. | 161 comments, 621 👍 |
| [#42776](https://github.com/anthropics/claude-code/issues/42776) | **Windows desktop fails to relaunch** (orphaned process file lock) | Daily blocker for Windows users; requires manual process kill. | 125 comments, 62 👍 |
| [#77136](https://github.com/anthropics/claude-code/issues/77136) | **Model quality regression** (Claude 4.7/4.8/5.0/Fable: repetitive tics, incoherent prose) | Affects all recent model tiers; explicit style instructions ignored. | 50 comments, 316 👍 |
| [#86012](https://github.com/anthropics/claude-code/issues/86012) | **Cross-session messages leave recipient unresponsive** (15–20 min until idle-timeout kill) | Breaks agent-to-agent messaging; session stuck with `hadFirstResponse=false`. | 31 comments, 6 👍 |
| [#25286](https://github.com/anthropics/claude-code/issues/25286) | **CLI freezes/hangs** (100% write ratio in terminal renderer) | Hard freeze—no input accepted, only `kill` recovers. Recurs 5+ times for reporter. | 19 comments, 18 👍 |
| [#75607](https://github.com/anthropics/claude-code/issues/75607) | **Server-side experiment (`x-cc-atis`) silently removed Opus 4.8 thinking summaries**; CLI auto-updated despite `autoUpdates: false` | Settings overridden without notice/opt-in; trust/transparency concern. | 8 comments, 12 👍 |
| [#88383](https://github.com/anthropics/claude-code/issues/88383) | **2.1.238 regression**: CLI entrypoint sessions persist empty thinking husks | New in today’s release; pollutes session JSONL, breaks tooling that parses thinking blocks. | 2 comments, 1 👍 |
| [#88370](https://github.com/anthropics/claude-code/issues/88370) | **MCP Apps widgets stopped rendering** after staged `server/discover` version negotiation rollout (2.1.234) | No client/server change on user side; staged server rollout broke `_meta.ui.resourceUri` widgets. | 5 comments |
| [#87491](https://github.com/anthropics/claude-code/issues/87491) | **Opus 5 treats direct instructions as negotiations**; injects self-referential content | Regression vs. prior models; undermines instruction following. | 4 comments, 1 👍 |
| [#88412](https://github.com/anthropics/claude-code/issues/88412) | **Waking idle agent fork forfeits inherited prompt cache** (`cache_read` pinned to fixed boundary, not TTL) | Cost/performance hit for fork-based agents; cache not TTL-based. | 1 comment (filed today) |

---

## 4. Key PR Progress

*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends

1. **Multi-account / identity management** — #36151 (mobile), plus desktop OAuth refresh token expiry (#78037) forcing daily `/login`.
2. **Daemon / background session persistence** — #88197 requests Codex-style daemon with session resurrection; #86092 shows `--resume --bg` incorrectly forks.
3. **Cross-session / agent messaging parity** — Windows lacks cross-session messaging enabled on Linux (#87870); cross-session messages currently break recipients (#86012).
4. **Worktree isolation usability** — #87959: Bash guard rejects all compound commands (heredocs, `&&`, `;`) even without git usage.
5. **MCP widget / app ecosystem stability** — Version negotiation rollouts breaking rendering (#88370), tool param stringification (#86459), approval UI missing in routines (#61044).
6. **Symlink & config portability** — `.claude/rules/` symlinks not auto-loaded despite docs claiming support (#88405); hookify example files missing required prefix (#79143).

---

## 6. Developer Pain Points (Recurring Themes)

| Area | Pain Point | Representative Issues |
|------|------------|----------------------|
| **Windows Desktop (MSIX)** | In-place updates leak silos → unlaunchable until reboot; orphaned process locks block relaunch; Cowork VM handle leaks. | #87879, #42776, #87607 |
| **Model Behavior** | Repetitive rhetorical tics, negotiation-style responses, ignored style instructions across 4.7/4.8/5.0/Fable/Opus 5. | #77136, #87491 |
| **Session / State Corruption** | Empty thinking blocks persisted (2.1.238), cross-session messages deadlock recipients, `--resume --bg` forks unexpectedly, agent fork cache forfeited on wake. | #88383, #86012, #86092, #88412 |
| **MCP Ecosystem** | Widgets break on server rollout, tool params silently stringified, approval UI absent in routines, version negotiation instability. | #88370, #86459, #61044 |
| **Autonomy / Transparency** | Server-side experiments override settings (`autoUpdates: false` ignored, thinking summaries removed) without notice/opt-in. | #75607 |
| **CLI Reliability** | Hard freezes (100% write ratio), bash 3.2 compat (`FLAGS[@]` unbound), symlink config not loaded. | #25286, #79128, #88405 |

---

*Generated from github.com/anthropics/claude-code data as of 2026-08-21.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-21

---

## 1. Today's Highlights

The team shipped **v0.149.0** with a major new **interactive `codex agents` dashboard** for managing tasks (search, start, open, rename, stop) plus `/cd`, `/pwd`, `/cwd` commands for working-directory control in TUI sessions. A wave of Windows-specific fixes landed addressing archiving failures with `\\?\` paths, sandbox `WINDIR` preservation, and auth loss after app-server restarts. Meanwhile, critical macOS issues persist: runaway `computer-use` threads causing V8 OOM crashes and in-app browser initialization regressions.

---

## 2. Releases

### **rust-v0.149.0** (Stable)
- **New `codex agents` dashboard** — Interactive TUI for searching, starting, opening, renaming, and stopping agent tasks with configurable shortcuts (#39094, #39112, #39114, #39142)
- **Working-directory commands** — Added `/cd`, `/pwd`, `/cwd` for managing CWD in TUI sessions (#38894)
- **Bundled in Desktop 26.818.2441.0** (Windows) and 26.814.x line (macOS)

### **rust-v0.150.0-alpha.1** (Pre-release)
- Early alpha for next minor version; no detailed changelog yet

### **Alpha Series (0.149.0-alpha.3 → alpha.7)**
- Iterative pre-release validation for 0.149.0 stabilisation

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#23200](https://github.com/openai/codex/issues/23200) | **Headless remote Linux hosts for mobile** | Enables mobile control of always-on Linux dev servers without desktop app online | 49 👍, 20 comments — highest community demand |
| [#28276](https://github.com/openai/codex/issues/28276) | **Failed to archive conversations + ghost threads** | Core session management broken; users lose history | 5 👍, 23 comments — Pro users blocked |
| [#33493](https://github.com/openai/codex/issues/33493) | **Local compaction v2 retains unbounded `input_image` payloads** | Image-heavy sessions enter infinite auto-compaction loops | 4 👍, 19 comments — macOS Desktop regression |
| [#39189](https://github.com/openai/codex/issues/39189) | **Windows: opening thread signs out Pro account after 401** | Auth state corruption on workspace-only settings | 3 👍, 16 comments — Windows 26.814 regression |
| [#20930](https://github.com/openai/codex/issues/20930) | **Remote notifications don't fire** | Mobile/remote users miss turn completions | 18 👍, 12 comments — long-standing gap |
| [#31973](https://github.com/openai/codex/issues/31973) | **Windows Remote Control stuck in "Reconnecting..."** | Remote session unrecoverable without host access | 1 👍, 12 comments — QR pairing broken |
| [#39150](https://github.com/openai/codex/issues/39150) | **Windows: cannot archive when rollout paths use `\\?\` prefix** | Extended-length paths break archival | 2 👍, 12 comments — path-handling bug |
| [#34026](https://github.com/openai/codex/issues/34026) | **Windows Desktop: completed threads remain "thinking"** | New messages queue locally, turns won't start | 0 👍, 11 comments — 26.715 regression |
| [#37674](https://github.com/openai/codex/issues/37674) | **Bedrock GPT-5.6 Sol lacks explicit cache controls** | High cache-write spend on agentic workloads | 7 👍, 7 comments — cost impact for AWS users |
| [#38939](https://github.com/openai/codex/issues/38939) | **CRITICAL: macOS runaway computer-use threads → V8 OOM** | App becomes unusable; dispatch thread exhaustion | 0 👍, 5 comments — severity: app-unusable |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#39827](https://github.com/openai/codex/pull/39827) | **Add history & notes tools for token-budget sessions** | Enables context recovery & state preservation across context-window transitions | Closed |
| [#39825](https://github.com/openai/codex/pull/39825) | **Use Responses compaction for Amazon Bedrock** | Switches Bedrock to `/v1/responses` compaction; drops legacy protocol | Closed |
| [#39822](https://github.com/openai/codex/pull/39822) | **Preserve uncapped Guardian classifier instructions** | Removes implicit token limit on classifier policy rendering | Closed |
| [#39813](https://github.com/openai/codex/pull/39813) | **Defer legacy filesystem policy projection** | Avoids redundant policy rebuild on non-cwd settings updates | Closed |
| [#39812](https://github.com/openai/codex/pull/39812) | **Avoid materializing writable-root carveouts for presence checks** | Optimises sandbox policy classification; adds `has_writable_roots_with_cwd` | Closed |
| [#39811](https://github.com/openai/codex/pull/39811) | **Restrict macOS preference reads to full-disk policies** | Prevents sandbox escape via `cfprefsd`/Seatbelt preference access | Closed |
| [#39809](https://github.com/openai/codex/pull/39809) | **Preserve `WINDIR` in core Windows shell environments** | Fixes sandbox environment variable inheritance for Windows system paths | Closed |
| [#39804](https://github.com/openai/codex/pull/39804) | **Use multi-agent V1 for Amazon Bedrock models** | Bedrock doesn't support V2 response items; normalises catalogs to V1 | Closed |
| [#39802](https://github.com/openai/codex/pull/39802) | **Optimize case-insensitive thread history matching** | Monotonic span cursors avoid rescanning; preserves byte ranges | Closed |
| [#39795](https://github.com/openai/codex/pull/39795) | **Add hostname to configurable TUI status line** | Shows normalized OS hostname in status bar (no DNS resolution) | Closed |

> **Note**: Most high-impact PRs were authored by `copyberry[bot]` and merged same-day — indicating automated/internal tooling driving rapid iteration on sandbox, compaction, and multi-agent internals.

---

## 5. Feature Request Trends

| Direction | Evidence from Issues |
|-----------|---------------------|
| **True headless/remote-first architecture** | #23200 (49 👍), #20930, #31973, #38023 — users want mobile/web control of persistent Linux servers without desktop dependency |
| **Multi-agent cost & context control** | #39808 (subagent overhead), #37674 (Bedrock caching), #33120 (delegated task archival) — need per-agent budgeting and shared context |
| **Windows parity & path handling** | #39150, #39705, #38425, #35914, #39829 — extended paths, sandbox exec, auth persistence, Google Drive FS |
| **Session durability & recovery** | #28276, #33120, #39823, #34971 — archival failures, resume errors, context reprocessing loops |
| **Mobile/remote UX polish** | #20930 (notifications), #31973 (reconnection), #38023 (turn start timeout) — remote control feels second-class |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Windows is a second-class platform** — Path prefix bugs (`\\?\`), sandbox/AppX exec failures, auth loss on app-server restart, remote control unreliability. Multiple regressions per release.

2. **Session management is fragile** — Archiving fails silently (#28276, #33120, #39150), resume breaks with "active writer" errors (#39823), ghost threads persist (#28276), compaction loops on images (#33493).

3. **Remote/mobile workflows are incomplete** — No headless server mode (#23200), notifications don't fire (#20930), reconnection unrecoverable (#31973), turn timeouts on large tasks (#38023).

4. **Cost unpredictability with multi-agent** — Subagents pay fixed context/tool overhead (#39808), Bedrock lacks cache controls (#37674), context reprocessing inflates credits (#34971).

5. **macOS stability regressions** — Runaway `computer-use` threads OOM the process (#38939), in-app browser crashes on init (#39591), MCP login doesn't open browser (#38938).

6. **Sandbox escape / permission surprises** — `apply_patch` modifies outside writable roots without prompt (#31434), macOS prefs readable outside sandbox (#39811), Windows launcher targets inaccessible AppX (#38425).

---

*Digest generated from `github.com/openai/codex` data as of 2026-08-21. All links point to live GitHub issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-21

## 1. Today's Highlights
The v0.56.0 nightly ships a fix for symlink handling in ignore-path evaluation and a refactor of `shellExecutionService` to remove unsafe type assertions. Meanwhile, the PR queue shows heavy investment in **PR-generation automation** (orchestrator state machine, Antigravity agent runner, triage-eval hardening) and **sandbox hardening** (macOS Seatbelt isolation for Docker sockets). Several high-priority agent bugs—subagent recovery misreporting, generalist-agent hangs, and shell “Waiting input” stalls—remain open and actively discussed.

## 2. Releases
### v0.56.0-nightly.20260821.g30573d2e4
- **fix(core)**: Consistent symlink evaluation in `.geminiignore`/`.gitignore` handling ([#28915](https://github.com/google-gemini/gemini-cli/pull/28915)) — resolves tool behavior differences between literal and canonical paths.  
- **refactor(core)**: Removed `eslint-disable` comments and unsafe type assertions from `shellExecutionService` ([#28862](https://github.com/google-gemini/gemini-cli/pull/28862)) — improves type safety and maintainability.

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS misreported as GOAL success | Masks real failures; breaks trust in subagent delegation. | 12 comments, 2 👍, P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs indefinitely | Blocks core workflow; users must disable subagents to proceed. | 8 comments, 8 👍, P1 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell execution stuck at “Waiting input” after command completes | Recurring UX breakage for simple commands; erodes reliability perception. | 4 comments, 3 👍, P1 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory retries low-signal sessions endlessly | Wastes quota & cycles; pollutes memory with noise. | 5 comments, P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory redaction happens post-model-context | Security risk: secrets enter model context before redaction. | 4 comments, P2, area/security |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 400 error when >128 tools available | Hard limit blocks power users with many skills/extensions. | 3 comments, P1 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent fails on Wayland | Platform gap for Linux/Wayland adopters. | 4 comments, 1 👍, P1 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-aware file reads/search/mapping evaluation | Strategic: could cut turns & token spend significantly. | 7 comments, 1 👍, P2, epic |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component-level evaluations | Quality gate for 76+ behavioral evals across 6 models. | 7 comments, P1, aiq/eval_infra |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) Symlinked agent files not recognized | Blocks dotfile-management workflows (stow, chezmoi, etc.). | 4 comments, P3 |

## 4. Key PR Progress (Top 10 by Scope & Risk)

| PR | Type | Summary |
|----|------|---------|
| [#28934](https://github.com/google-gemini/gemini-cli/pull/28934) | **Fix/Perf** (L) | History rollback on tool cancellation + retry nudge optimization → reduces context bloat & API calls, improves prefix caching. |
| [#28940](https://github.com/google-gemini/gemini-cli/pull/28940) | **Fix** (L) | Clears stale cancellation error on new A2A message turns — fixes GCA “Execution aborted” crash loop. |
| [#28938](https://github.com/google-gemini/gemini-cli/pull/28938) | **Fix** (L, P1) | Keeps `GIT_CONFIG_*` env triplets internally consistent; prevents git 2.50+ parse failures in sanitized env. |
| [#28939](https://github.com/google-gemini/gemini-cli/pull/28939) | **Fix** (L) | Stops persisting “[The previous response was interrupted…]” as synthetic model response — avoids history pollution. |
| [#28933](https://github.com/google-gemini/gemini-cli/pull/28933) | **Feat** (L) | Iterative orchestrator state machine for PR generation: bug-fix loops, sandbox isolation, ESLint analysis, trajectory logging. |
| [#28932](https://github.com/google-gemini/gemini-cli/pull/28932) | **Feat** (M/L) | Antigravity agent runner with async stream resolution, turn timeouts, GCS trajectory export. |
| [#28935](https://github.com/google-gemini/gemini-cli/pull/28935) | **Security** (L) | macOS Seatbelt: denies Docker/container sockets, binaries, Mach/XPC lookups, POSIX shm — blocks sandbox escape via VirtioFS. |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | **Fix/Security** (M) | Extensions: prompts consent for env changes; sanitizes runtime-altering vars in MCP server spawns. |
| [#28828](https://github.com/google-gemini/gemini-cli/pull/28828) | **Fix** (M, P1/P2) | Warns when preview model silently falls back to `auto-gemini-2.5` — restores transparency. |
| [#28910](https://github.com/google-gemini/gemini-cli/pull/28910) | **Feat** (XL, closed) | Adds Gemini 3.7 Flash, 3.6 Flash, 3.5 Flash-Lite model configs & resolution across core/CLI. |

## 5. Feature Request Trends
1. **AST-aware tooling** — Multiple epics (#19873, #22745, #22746) explore surgical code reads, grep, and mapping to cut token/turn overhead.  
2. **Subagent observability** — Requests to surface subagent trajectories in `/chat share` (#22598) and include subagent context in `/bug` reports (#21763).  
3. **Agent self-awareness** — Accurate CLI flags, hotkeys, and self-execution docs (#21432).  
4. **Memory system hardening** — Deterministic redaction, quarantine of invalid patches, retry backoff (#26522, #26523, #26525).  
5. **Browser agent resilience** — Session takeover, lock recovery, settings.json override respect (#22232, #22267).  
6. **Windows long-path support** — Contributor onboarding docs added (#28926); test skipping for env-dependent failures (#28832).

## 6. Developer Pain Points (Recurring Frustrations)
- **Subagent opacity**: Success reported despite MAX_TURNS hit (#22323); generalist agent hangs silently (#21409); skills/agents ignored unless explicitly invoked (#21968).  
- **Shell execution flakiness**: “Waiting input” ghost state after trivial commands (#25166); interactive prompts (Vite, etc.) stall the agent (#22465).  
- **Tool-count ceiling**: Hard 128/400-tool limit triggers 400 errors (#24246).  
- **Auto Memory noise**: Infinite low-signal retries (#26522), post-hoc redaction (#26525), silent invalid-patch drops (#26523).  
- **Platform gaps**: Wayland browser agent failure (#21983); Windows MAX_PATH breaks clones (#28926).  
- **Config drift**: Browser agent ignores `settings.json` overrides (#22267); preview model fallback without warning (#28825 → #28828).  

---
*Generated from github.com/google-gemini/gemini-cli data as of 2026-08-21. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-21

## 1. Today's Highlights
- **v1.0.81-6 released** with new startup configuration: `defaultMode` and `defaultPermissionMode` settings let users choose their preferred interactive session mode and approval behavior out of the box; `copilot login --with-token` now accepts an auth token via stdin for CI/CD automation.
- **Enterprise/Org model access issues dominate** — multiple reports of enabled Anthropic (Claude Sonnet 5/Opus 5) and Kimi models missing from the CLI catalogue despite being enabled in org settings, plus Claude models disabled for personal Enterprise accounts.
- **MCP integration stability remains a focus** — OAuth token bridging failures, registry validation false-positives, stdio server process leaks, and workspace `.mcp.json` servers detected but not connected in sessions.

## 2. Releases
### v1.0.81-6 (Pre-release)
| Category | Changes |
|----------|---------|
| **Added** | `defaultMode` & `defaultPermissionMode` settings for default interactive session mode and approval behavior; `copilot login --with-token` to read auth token from stdin |
| **Improved** | ACP clients now receive subagent IDs, raw event subscriptions, and live title/mod updates |

[View Release](https://github.com/github/copilot-cli/releases/tag/v1.0.81-6)

## 3. Hot Issues (Top 10 by Impact & Community Reaction)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **#1481** | **[CLOSED] SHIFT+ENTER executes prompt instead of line break** | Violates universal chat UX convention; forces users to relearn `CTRL+ENTER` for newlines. | 28 comments, 17 👍 — high friction for daily users |
| **#4390** | **[CLOSED] Org-enabled models (Claude 5, Kimi K3) missing from catalogue** | Enterprise customers cannot use models they pay for; blocks adoption of newer Anthropic models. | 15 comments, 7 👍 — direct revenue impact |
| **#4422** | **[CLOSED] All Claude models disabled under CLI for personal Enterprise** | Sudden regression; models worked yesterday, now blocked despite enabled settings. | 4 comments, 3 👍 — urgent for Enterprise users |
| **#3162** | **[CLOSED] Custom MCP servers falsely reported as "blocked by policy"** | False-negative registry validation prevents legitimate custom MCP servers from working. | 7 comments, 1 👍 — MCP ecosystem blocker |
| **#4096** | **[CLOSED] Third-party OAuth MCP shows "Connected" but tools missing** | OAuth token never bridged to CLI sessions; UI lies about connection state. | 6 comments, 2 👍 — trust/reliability issue |
| **#4439** | **[CLOSED] GitLab MCP OAuth rejected: RFC 8414 issuer mismatch** | Standards-compliant GitLab Self-Managed MCP servers fail auth; blocks enterprise GitLab users. | 5 comments, 3 👍 — standards compliance gap |
| **#4206** | **[CLOSED] Env footer stuck on "Loading:" forever under org MCP policy** | UI never transitions to ready state despite successful load; confuses users. | 4 comments, 3 👍 — UX polish |
| **#4038** | **[CLOSED] Non-interactive mode: late MCP injects empty user message** | Model echoes system prompt tool lists instead of answering; breaks automation with 7+ tool MCP servers. | 3 comments — automation reliability |
| **#4524** | **[CLOSED] Sandbox blocks git even with full directory access** | Overly restrictive sandbox breaks basic git operations; regression in enforced-sandbox mode. | 3 comments — developer productivity |
| **#4535** | **[OPEN] `store_memory` fails in v1.0.81 prereleases: "Instance id is required"** | Native memory writer invoked without required instance ID; breaks agent memory persistence. | 3 comments — new regression in prerelease |

## 4. Key PR Progress
| # | PR | Status | Summary |
|---|----|--------|---------|
| **#4510** | [Remove GitHub Copilot CLI documentation from README](https://github.com/github/copilot-cli/pull/4510) | OPEN | Removes installation instructions and usage guidelines from README — likely migrating docs to a dedicated site. |

*Only 1 PR updated in the last 24h; focus remains on issue triage and hotfixes.*

## 5. Feature Request Trends
From the issue corpus, the most-requested directions are:

1. **MCP Ecosystem Maturity** — Reliable OAuth token bridging, workspace `.mcp.json` auto-connection, stdio server leak fixes, registry validation accuracy.
2. **Enterprise/Org Model Parity** — CLI catalogue must reflect org-enabled models in real-time; no drift between settings UI and CLI.
3. **Session Persistence & Portability** — WSL/Windows/SSH session anchoring, session-store.db unification, surviving Ctrl+Z/restart, Remote-SSH reconnect transcript recovery.
4. **Non-Interactive Mode Robustness** — Respect managed `disableBypassPermissionsMode`, handle late MCP connections gracefully, multi-turn `/ask` conversations.
5. **Sandbox Usability** — Git access, VS Code remote tunneling, WSL path resolution without breaking developer workflows.
6. **Memory & Context Continuity** — Persist reasoning effort, fix `store_memory` instance ID bug, personal skills discovery (`~/.copilot/skills/`).
7. **Input UX Polish** — SHIFT+ENTER for line breaks, paste images in freeform prompts, queue editor enhancements.

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Model access mismatch** — Org/personal settings show enabled but CLI says disabled | 3+ issues | #4390, #4422, #4528 |
| **MCP servers "connected" but unusable** — OAuth token not bridged, workspace config ignored, false policy blocks | 5+ issues | #4096, #4349, #4439, #4542, #3162 |
| **Sandbox over-restriction** — Blocks git, VS Code, WSL paths despite explicit allowlists | 2+ issues | #4524, #4546 |
| **Session fragmentation** — Windows vs WSL vs SSH split stores, lost history on reconnect/suspend | 3+ issues | #4543, #4529, #4539 |
| **Non-interactive mode regressions** — Bypasses enterprise policy, empty message injection, no multi-turn | 3+ issues | #4038, #4528, #4538 |
| **Prerelease regressions** — `store_memory` broken, memory writer missing instance ID | 1 critical | #4535 |
| **Windows-specific path/quoting bugs** — `wta.exe` launch fails at "Program Files" | 1 issue | #4540 |
| **Desktop app instability** — WebView2 renderer crashes, scheduled workflows re-enabled silently | 2 issues | #4492, #4547 |

---

*Digest generated from github.com/github/copilot-cli data as of 2026-08-21. All links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-21

## 1. Today's Highlights
No new releases in the past 24 hours. Community activity centers on a proposal for **workspace-scoped long-term memory** (Issue #2613) and a documentation PR (#2614) that clarifies plugin security boundaries, credential handling, and persistent data semantics.

---

## 2. Releases
*No releases published in the last 24 hours.*

---

## 3. Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2613](https://github.com/MoonshotAI/kimi-cli/issues/2613) | **Proposal: Kimi Memory Plus — workspace-scoped long-term memory plugin** | Introduces a persistent, workspace-local memory layer that survives sessions, enabling agents to recall context across invocations. The author notes current CLI can register explicit-memory tools via stdio MCP but doesn’t yet recognize this plugin format. | Opened 2026-08-20, 0 comments / 0 👍 — early-stage proposal awaiting maintainer feedback. |

*Only one issue updated in the last 24h; no other noteworthy issues in this window.*

---

## 4. Key PR Progress
| # | Title | Description | Status |
|---|-------|-------------|--------|
| [#2614](https://github.com/MoonshotAI/kimi-cli/pull/2614) | **docs(plugins): document security and persistent data** | • States plugin tools run as local subprocesses with full user file/network access<br>• Documents credential handling for `inject`; warns against logging/committing injected values<br>• Clarifies that reinstalling a plugin replaces its installed directory<br>• Recommends separate persistent directories per plugin | Open, 0 comments — awaiting review. |

*Only one PR updated in the last 24h.*

---

## 5. Feature Request Trends (from recent issues)
With only one fresh issue, the dominant signal is **persistent, workspace-scoped memory** for agents. This aligns with earlier community asks for:
- Cross-session context retention without manual file I/O
- Plugin-native storage APIs (vs. ad-hoc file writes)
- Memory isolation per workspace/project

---

## 6. Developer Pain Points (recurring themes)
| Pain Point | Evidence |
|------------|----------|
| **Plugin security opacity** | PR #2614 explicitly documents that plugins run with full user privileges and that `inject` credentials must not be logged — indicating developers have been unsure of the trust boundary. |
| **Lack of standardized persistent storage** | Issue #2613’s proposal exists because no built-in, plugin-friendly way to persist data across sessions currently exists. |
| **MCP integration gaps** | The issue notes the CLI can register explicit-memory tools as stdio MCP servers but doesn’t recognize the proposed plugin format, suggesting friction in extending the MCP surface. |

---

*Digest compiled from GitHub data as of 2026-08-21 00:00 UTC. Next digest will cover the following 24-hour window.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-21

## Today's Highlights
OpenCode v1.18.19 shipped with native Cloudflare AI Gateway passthroughs for OpenAI/Anthropic models and aligned Codex rate limits with ChatGPT subscriptions. The Windows parallel-session CPU bottleneck was resolved (+88% SSE throughput, -48% CPU), and a critical `filesystem_move_file` race condition causing silent data loss was patched. V2 development continues with session-scoped prompt history, Bedrock AWS profile support, and plugin API expansions.

---

## Releases

### v1.18.19
- **Core**: Added native OpenAI and Anthropic passthroughs for Cloudflare AI Gateway models.
- **Rate limits**: Matched Codex limits more closely to ChatGPT subscription tiers (thanks @GameOn223).
- **Bugfix**: Removed built-in Qwen sampling defaults that could send unsupported settings.

---

## Hot Issues (Top 10 by Impact & Activity)

| # | Issue | Status | Why It Matters | Community Signal |
|---|-------|--------|----------------|------------------|
| [#30086](https://github.com/anomalyco/opencode/issues/30086) | High CPU usage in newer versions | OPEN | Blocks multi-session workflows; users dropped from 10→3 concurrent sessions. Regression ~7 days ago. | 48 comments, 24 👍 — highest engagement |
| [#4754](https://github.com/anomalyco/opencode/issues/4754) | Copy/Paste behaviour under Linux | CLOSED | Dual clipboard buffers (primary vs clipboard) cause inconsistent paste behavior in terminals. | 17 comments, 18 👍 — long-standing Linux pain point |
| [#27875](https://github.com/anomalyco/opencode/issues/27875) | Stuck at permission granting; Enter key not working | OPEN | Sub-agent permission prompts ignore Enter; only Ctrl+Enter works. Blocks automated workflows. | 9 comments, 1 👍 |
| [#43179](https://github.com/anomalyco/opencode/issues/43179) | V2: Primary-agent switches silently keep previous agent's model | OPEN | Agent switch changes prompt/permissions but retains old model/variant — silent misconfiguration risk. | 3 comments |
| [#43591](https://github.com/anomalyco/opencode/issues/43591) | V2 TUI crash: segmentation fault in Windows PowerShell | OPEN | Hard crash during agent run; blocks Windows V2 adoption. | 3 comments |
| [#43051](https://github.com/anomalyco/opencode/issues/43051) | Backspace broken in Warp since v0.2026.08.12 | OPEN | Warp's CSI-u backspace (\x1b[127u) unhandled; Ctrl+H workaround. Affects all CSI-u terminals. | 2 comments, 1 👍 |
| [#43739](https://github.com/anomalyco/opencode/issues/43739) | Feature: Option to hide diffs in TUI output | OPEN | Inline diffs add noise for users reviewing via `git diff`; request for toggle. | 2 comments |
| [#34878](https://github.com/anomalyco/opencode/issues/34878) | Backspace unresponsive in herdr (Windows ConPTY) | OPEN | ConPTY multiplexer breaks Backspace; Ctrl+H works. Niche but blocks specific workflow. | 2 comments, 1 👍 |
| [#43726](https://github.com/anomalyco/opencode/issues/43726) | CRITICAL: `filesystem_move_file` race condition → data loss | CLOSED | `source == destination` triggers silent wipe (3/10 repro). Fixed in v1.18.19. | 2 comments — severity CRITICAL |
| [#43281](https://github.com/anomalyco/opencode/issues/43281) | Feature: Refresh provider credentials without CLI restart | OPEN | Token rotation for custom providers requires full restart; needs refresh command/interval config. | 2 comments |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#42980](https://github.com/anomalyco/opencode/pull/42980) | fix(core): reduce Windows server CPU under parallel sessions | CLOSED | **+88% SSE throughput** (77k→145k events/s), **−48% CPU** via process-start caching & executable resolution dedup. |
| [#43736](https://github.com/anomalyco/opencode/pull/43736) / [#43715](https://github.com/anomalyco/opencode/pull/43715) | fix: preserve Cerebras completion limit | CLOSED | Native Cerebras plugin suppresses generic `max_tokens` when `max_completion_tokens` set; avoids API rejection. |
| [#43733](https://github.com/anomalyco/opencode/pull/43733) | fix(core): avoid deep cloning session parts | CLOSED | Eliminates deep-clone of large text/reasoning/tool-output strings in `Session.updatePart`; fixes #35107. |
| [#43735](https://github.com/anomalyco/opencode/pull/43735) | fix(client): authenticate PTY websocket connections | CLOSED | Single-use connect tickets for PTY WebSockets; removes unauthenticated raw-fetch in desktop terminal. |
| [#43734](https://github.com/anomalyco/opencode/pull/43734) | fix(tui): scope prompt history by session | OPEN | Per-tab prompt history with independent cursors; migrates legacy unscoped entries. Addresses #43729. |
| [#43681](https://github.com/anomalyco/opencode/pull/43681) | fix(core): resolve Bedrock AWS profile credentials for V2 | OPEN | Enables Bedrock auth via AWS profiles (not just env vars); tested 1.5 weeks internally at Amazon One Medical. |
| [#32370](https://github.com/anomalyco/opencode/pull/32370) | feat(tui): add `linux_clipboard_selection` config | OPEN | New config (`clipboard` | `primary` | `both`) for Linux primary/clipboard buffer selection. Closes #43176. |
| [#43724](https://github.com/anomalyco/opencode/pull/43724) | fix(core): steer manual compaction by default | OPEN | `/compact` now runs at next step boundary (was queued behind full turn); respects `delivery: "steer"`. |
| [#43675](https://github.com/anomalyco/opencode/pull/43675) | fix(opencode): answer subagent permissions in run | CLOSED | Tracks child session tree for non-interactive runs; auto-approves/rejects permissions scoped to that run. |
| [#43718](https://github.com/anomalyco/opencode/pull/43718) | feat(plugin): expose session selection methods | CLOSED | Plugins gain `session.switchAgent` / `session.switchModel` via Effect & Promise APIs. |

---

## Feature Request Trends

1. **V2 Parity & Migration** — Multiple issues (#43179, #43591, #43742, #43729, #43731) highlight gaps: agent-switch model retention, TUI crashes, skill loading from `~/.agents/skills`, per-tab history, context-hook persistence semantics.
2. **Credential/Token Management** — #43281 (credential refresh without restart), #43732 (Zen Go gateway `truncation` enum bug), #43716 (Cerebras dual-token conflict) show demand for robust provider auth lifecycles.
3. **TUI/UX Polish** — #43739 (hide diffs), #43222 (Shift+Enter newline), #43729 (scoped history), #43737 (inline code copy), #43051/#34878 (backspace fixes) — consistent push for terminal UX parity.
4. **Headless/Automation** — #43698 (HTTP/SDK trigger for config hot-reload in `serve` mode), #43675 (subagent permissions in non-interactive runs) — enabling CI/CD and scripted workflows.
5. **Model/Provider Visibility** — #43743 (DeepSeek V4 Flash Free missing), #31433 (local model context window GUI), #40125 (per-MCP trust) — better model discovery and trust controls.

---

## Developer Pain Points

| Area | Recurring Themes |
|------|------------------|
| **Performance & Stability** | CPU regression in multi-session (#30086), V2 segfaults (#43591), TUI cold-start latency (#41078), shell eviction loops (#43650). |
| **Terminal Compatibility** | Backspace/keybinding breaks in Warp, herdr/ConPTY, Linux primary clipboard — 4+ issues in 24h. |
| **V2 Migration Friction** | Silent model retention on agent switch, missing compat skill paths, crashed TUI, unscoped history — early adopters hitting rough edges. |
| **Provider Integration** | Credential rotation, dual-token conflicts (Cerebras), invalid gateway responses (Zen Go), Bedrock profile auth, model visibility. |
| **Data Safety** | `filesystem_move_file` race condition (fixed), context-hook mutations persisting unexpectedly (#43731) — trust-critical bugs. |
| **Automation Gaps** | No credential refresh without restart, no headless config reload trigger, subagent permission handling in scripts. |

---

*Generated from github.com/anomalyco/opencode data (releases, 26 issues, 50 PRs updated 2026-08-20/21).*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-21

## Today's Highlights
The community is converging on a long-requested UX fix: **`/exit` as an alias for `/quit`** has six duplicate issues and multiple PRs, with `#4537` and `#5160` now merged. Meanwhile, a major discussion on **Windows support strategy** (`#7547`, 36 comments) highlights the fragmentation across WSL, native, and MSYS2 runtimes. On the provider front, **Amazon Bedrock Mantle** (`#8302`) and **Kimi reasoning signature normalization** (`#8405`) expand model compatibility.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues (Top 10 by Engagement & Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows support strategy** — “gazzilion developers on windows… too many ways pi can be run” | Core architectural question: invest in native, WSL, MSYS2, or delegate? Affects onboarding, CI, and bug surface. | 36 comments, 1👍 — longest thread in period |
| [#8157](https://github.com/earendil-works/pi/issues/8157) | **Migrate `grok-mermaid` → `lovely-mermaid`** | Technical debt: `grok-mermaid` is an unmaintained port with corner cases; `lovely-mermaid` has active parsers. | 7 comments, 1👍 — maintainer-authored |
| [#8133](https://github.com/earendil-works/pi/issues/8133) | **Per-model compaction settings** | Allows `reserveTokens`/`threshold` per model ID (e.g., larger context for `gpt-5`, smaller for flash). | 3 comments, 3👍 — open, clear demand |
| [#8409](https://github.com/earendil-works/pi/issues/8409) | **Regression: aborted turns show `stopReason: "error"`** | Breaks tooling that relies on `"aborted"`; timing-dependent, seen after tool-call abort. | 3 comments — untriaged bug in 0.84.2 |
| [#8344](https://github.com/earendil-works/pi/issues/8344) | **Per-tool output expansion in fullscreen TUI** | UX: click individual tool blocks to expand/collapse; keeps `Ctrl+O` as global. | 4 comments — closed as `no-action` |
| [#8417](https://github.com/earendil-works/pi/issues/8417) | **SSH passphrase prompt overlays TUI on startup** | Background git update check triggers `ssh` prompt *on top of* the TUI, breaking rendering. | 2 comments — SSH/terminal integration pain |
| [#8370](https://github.com/earendil-works/pi/issues/8370) | **`fullscreenWheelScrollLines` setting** | Adds configurable scroll speed (1–10 lines) for mouse wheel in fullscreen TUI; persists in settings. | 2 comments — closed, shipped |
| [#8390](https://github.com/earendil-works/pi/issues/8390) | **Expose settled-safe session control to `agent_settled` extensions** | Enables extensions to compact/navigate tree *after* run is idle — currently only on `ExtensionCommandContext`. | 2 comments — extension API gap |
| [#8415](https://github.com/earendil-works/pi/issues/8415) | **OSC 133 busy markers follow transcript rendering, not agent lifecycle** | Spurious `OSC 133` `C` markers on passive redraws (`pi -c`, resize) confuse shell prompts. | 1 comment — terminal protocol correctness |
| [#8081](https://github.com/earendil-works/pi/issues/8081) | **Unknown slash commands (e.g. `/exit`) silently sent to model** | Muscle memory from Claude/Codex wastes tokens & pollutes transcript; should warn instead. | 2 comments — UX footgun |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4537](https://github.com/earendil-works/pi/pull/4537) | `feat: Exit alias` | **Closed** | Adds `/exit` alias for `/quit` with identical behavior & docs. Closes `#4538`. |
| [#5160](https://github.com/earendil-works/pi/pull/5160) | `feat: add /exit and /bye as alternative quit commands` | **Closed** | Implements `/exit`, `/bye`, `/quit` all triggering shutdown. Merged. |
| [#8416](https://github.com/earendil-works/pi/pull/8416) | `fix: hold triggerTurn-false custom messages until tool batch ends` | **Closed** | Prevents custom messages from landing between `toolCall`/`toolResult`, avoiding provider rejections. |
| [#8118](https://github.com/earendil-works/pi/pull/8118) | `feat(ai): add requiresNonNullAssistantContent compat flag` | **Open** | Some gateways reject `null` assistant content (tool-call-only); this flag forces `""` without inserting extra messages. |
| [#8405](https://github.com/earendil-works/pi/pull/8405) | `FD-2120: Normalize kimi-coding thinking signatures to base64url` | **Closed** | Fixes 400 “malformed encrypted reasoning content” on 2nd+ turn with reasoning enabled. |
| [#8407](https://github.com/earendil-works/pi/pull/8407) | `fix(tui): preserve logical lines when copying soft-wrapped text` | **Closed** | Mouse selection copy now respects logical line boundaries (not visual wraps), fixing broken URLs/lists. |
| [#8363](https://github.com/earendil-works/pi/pull/8363) | `fix(tui): prevent wrapped table link color leaks` | **Closed** | Resets link colors before table padding/borders; adds tests. Fixes `#8335`. |
| [#5268](https://github.com/earendil-works/pi/pull/5268) | `fix(tui): render hardware cursor by default so prompt cursor hollows on blur` | **Closed** | Fixes `#3896`: unfocused Pi window no longer shows filled-block cursor (looked active). |
| [#8302](https://github.com/earendil-works/pi/pull/8302) | `feat(ai): amazon bedrock mantle` | **Open** (WIP) | Adds Mantle API surface for Bedrock (GPT-5.x models routed via Mantle, not Converse). Addresses `#5363`. |
| [#8398](https://github.com/earendil-works/pi/pull/8398) | `feat: add color values and theme styling` | **Open** | Major refactor: exposes colors directly, enables color math, supports non-terminal UIs later. Back-compat kept. |
| [#8395](https://github.com/earendil-works/pi/pull/8395) | `fix(coding-agent): prevent TUI crash on large diffs` | **Closed** | Replaces `lines.push(...contentLines)` with loop to avoid V8 stack overflow on ~14.5 MB diffs (`#8036`). |
| [#8383](https://github.com/earendil-works/pi/pull/8383) | `fix(ai): send LOW to disable thinking on gemini-3.7-flash` | **Open** | `MINIMAL` thinking level unsupported; sends `LOW` instead for `gemini-3.7-flash`. |

---

## Feature Request Trends
1. **Unified quit aliases** — `/exit`, `/bye`, `/quit` convergence (6+ issues, 3 PRs merged/closed). Highest-frequency UX ask.
2. **Per-model configuration** — Compaction (`#8133`), thinking levels, provider params. Moving away from global defaults.
3. **TUI polish & power-user controls** — Scroll speed (`#8370`), per-block expansion (`#8344`), copy fidelity (`#8407`), theme events (`#4427`), color API (`#8398`).
4. **Provider ecosystem expansion** — Umans AI (`#8404`), Concentrate (`#8412`), Amazon Bedrock Mantle (`#8302`), OpenAI Daybreak (`#8126`), Kimi fixes (`#8405`).
5. **Extension runtime improvements** — Concurrent session safety (`#8408`), settled-safe APIs (`#8390`), theme-change events (`#4427`).
6. **Windows-first strategy** — Explicit discussion on runtime matrix (native/WSL/MSYS2) and doc/bug investment priorities (`#7547`).

---

## Developer Pain Points (Recurring Frustrations)
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Muscle-memory quit commands** | 6 issues (`#4538`, `#5161`, `#5340`, `#5863`, `#6193`, `#8081`) + 3 PRs — users type `/exit`/`/bye`, waste tokens, get no feedback. | Very High |
| **Windows runtime fragmentation** | `#7547` (36 comments) — unclear which runtime to support, docs scattered, bugs differ per environment. | High |
| **TUI rendering crashes/glitches** | Large diff crash (`#8036`/`#8395`), color leaks (`#8363`), kitty image z-index (`#6995`), copy soft-wrap (`#8407`), SSH escape seq (`#8419`). | High |
| **Provider compatibility edge cases** | Anthropic scoped keys (`#6093`), Kimi base64url (`#8405`), Gemini thinking levels (`#8383`), OpenAI WebSocket (`#3442`), Bedrock Mantle (`#8302`). | Medium-High |
| **Terminal/SSH integration quirks** | SSH passphrase on TUI (`#8417`), Ctrl+D escape leak (`#8419`), OSC 133 spurious markers (`#8415`), focus events (`#8414`). | Medium |
| **Extension system limitations** | No concurrent-session loader (`#8408`), no settled-safe control (`#8390`), no theme-change event (`#4427`). | Medium |
| **Auto-retry state corruption** | `#8396` — persisted session branch retains superseded assistant errors after retry. | Low-Medium |

---

*Digest generated from GitHub data (earendil-works/pi) covering 2026-08-20 → 2026-08-21. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-21

---

## 1. Today's Highlights

Qwen Code shipped **v0.21.15** with a major Web Shell upgrade: file attachments can now be inserted via the composer or `@` selection, streaming performance is improved, and the sidebar synchronizes immediately. The `/review` subsystem continues its convergence hardening — a new machine-readable advisory lets automation detect when a review loop stalls on Critical findings, and the Aone Code provider gains branch-based MR support, cross-round comment deduplication, and self-PR detection. Nightly validation pipelines (SWE-bench Verified + Terminal-Bench 2.0) are passing end-to-end on restored sandbox caches.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.21.15** | Stable | Web Shell: file attachments via composer/`@` selection; improved streaming; instant sidebar sync ([#9405](https://github.com/QwenLM/qwen-code/pull/9405), [#9477](https://github.com/QwenLM/qwen-code/pull/9477)). |
| **v0.21.14-nightly.20260821.9f2342d323** | Nightly | `/review`: convergence advisory now tells *why* a loop isn’t settling ([#9461](https://github.com/QwenLM/qwen-code/pull/9461)); CI fallback fix. |
| **v0.21.11-nightly.20260820.b414f135fa** | Nightly | Web Shell: approval/ask-user dialogs as in-flow sheets; background-agent false-failure fix ([#9303](https://github.com/QwenLM/qwen-code/pull/9303)). |
| **dsw-eas-tb-smoke-20260820-r1/r2/r3** | Benchmark | SWE-bench Verified (1/1) + Terminal-Bench 2.0 smoke passing on restored immutable cache manifests. |

---

## 3. Hot Issues (Top 10 by Impact & Activity)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#9278](https://github.com/QwenLM/qwen-code/issues/9278)** `/review` publish-time convergence advisory — telemetry, diagnosis, operator-owned posting surfaces | Design doc tracking the full loop: push → review → fix → diff grows → more findings. Gain >1; only damping is “~5 rounds then Criticals only” prose in AGENTS.md. 8 comments, active design iteration. | 🔥 **In-progress**, P2, 8 comments — core to review reliability. |
| **[#9620](https://github.com/QwenLM/qwen-code/issues/9620)** Aone Code: branch-based MRs break write path (`sourceBranch` ≠ SHA outside AGit-Flow) | Blocks normal Aone workflow (branch-based MRs) — provider assumes single-commit CR model. | 🐛 P2, fresh (created today), 2 comments — integration blocker. |
| **[#9611](https://github.com/QwenLM/qwen-code/issues/9611)** Web Shell: `AskUserQuestion` focus grab steals input while user types | UX regression sibling to #9571 (fixed for tool-approval in #9609). Focus effect in `AskUserQuestion.tsx` needs same yield-when-editing logic. | 🐛 P2, 2 comments — direct user-facing annoyance. |
| **[#9613](https://github.com/QwenLM/qwen-code/issues/9613)** Aone Code: cross-round comment dedup (comment-status/presubmit backing) | Second `/review --comment` round re-posts everything instead of seeing existing MR comments. Needs `comment-status` + presubmit backing. | ✨ P2, 2 comments — reduces noise & API spam. |
| **[#9616](https://github.com/QwenLM/qwen-code/issues/9616)** Aone Code: self-PR detection (verdict downgrade parity with GitHub) | Reviewing your own MR silently gets full scrutiny; GitHub path downgrades verdict. No Aone backing yet. | ✨ P2, 2 comments — fairness/consistency. |
| **[#9618](https://github.com/QwenLM/qwen-code/issues/9618)** Aone Code: incremental cache for single-commit AGit-Flow CRs | Amending the single commit orphans old head SHA; ancestry test (`merge-base --is-ancestor`) fails. | ⚡ P2, 2 comments — performance/cost saver. |
| **[#9614](https://github.com/QwenLM/qwen-code/issues/9614)** Aone Code: mark qwen-posted comments as AI comments (ai_comment merge gate) | Unverified if comments carry AI flag; if not, they block merge via generic gate instead of dedicated `ai_comment` gate. | 🔒 P2, 2 comments — merge-pipeline integration. |
| **[#9615](https://github.com/QwenLM/qwen-code/issues/9615)** Aone Code: inline anchoring for removed/old-side lines | Write path posts inline comments only at new-side lines; open Q2 in provider design. | ✨ P3, 2 comments — review precision. |
| **[#9617](https://github.com/QwenLM/qwen-code/issues/9617)** Aone Code: cleanup bypass audit (Step 9 tripwire) | GitHub cleanup scans for off-path comments by reviewer account; Aone needs equivalent detection layer. | 🔒 P3, 2 comments — security/compliance. |
| **[#7167](https://github.com/QwenLM/qwen-code/issues/7167)** Fleet Shepherd Dashboard (auto-maintained) | Bot fleet health: last tick 2026-08-21T01:30:54Z, scan-signal age 39m, 0 syncs/dispatches/releases/cleanups. | 🤖 Ongoing infra observability. |

---

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| **[#9623](https://github.com/QwenLM/qwen-code/pull/9623)** `feat(review): give the convergence observation a machine-readable half` | Open | Adds machine-readable half to convergence advisory; round reports on its own machinery. Complements #9461 (human-readable diagnosis). |
| **[#9621](https://github.com/QwenLM/qwen-code/pull/9621)** `feat(review): back pr-context on Aone Code targets` | Open | Ports `pr-context` subcommand (fetches target metadata + discussion into context file) to Aone; was GitHub-only, skip cascaded. |
| **[#9609](https://github.com/QwenLM/qwen-code/pull/9609)** `fix(web-shell): don't steal approval focus while the user is typing` | Open | Tool-approval dialog yields focus when active element is editable (composer). Fixes #9571 pattern for `AskUserQuestion` (#9611). |
| **[#9604](https://github.com/QwenLM/qwen-code/pull/9604)** `fix(review): clear the deferred Round-5 findings from the Aone write path` | Open | Cleans up deferred Critical-only findings from round 5 on Aone `--comment` posting (tracked under “~5 rounds then Criticals” rule). |
| **[#9590](https://github.com/QwenLM/qwen-code/pull/9590)** `feat: support provider-aware reasoning controls` | Open | Adds WebShell reasoning controls for DeepSeek V4, GLM 5.2, Kimi: toggle-only hybrids, canonical effort tiers, mandatory-thinking models. |
| **[#9572](https://github.com/QwenLM/qwen-code/pull/9572)** `fix(review): pin the verified git identity across the residue probe` | Open | `worktreeResidue` verified tree identity once, then re-discovered repo 5× via same `.git` file (writable). Now pins identity. |
| **[#9543](https://github.com/QwenLM/qwen-code/pull/9543)** `feat(web-shell): Bind GitHub PRs to sessions with sidebar badge and search` | Open | PR created from Web Shell Git dialog binds number/URL to session (bounded list of 10, oldest dropped). Sidebar badge + search. |
| **[#9303](https://github.com/QwenLM/qwen-code/pull/9303)** `fix(web-shell): bound daemon transcript retention to stop renderer OOM crashes` | Open | Bounds daemon session history in browser; releases raw replay snapshot after injection; replay rebuilds under same block cap. |
| **[#9273](https://github.com/QwenLM/qwen-code/pull/9273)** `feat(review): capture-tui — rendering claims get pixels, not prose` | Open | Adds `qwen review capture-tui`: drives cmd in private tmux, captures pane text (`.ans`), renders `.png` with `freeze`, writes JSON report. |
| **[#9190](https://github.com/QwenLM/qwen-code/pull/9190)** `feat(review): content-anchored incremental rounds for local review-fix loop` | Open | Local/file-path review flow now incremental: builds scope from PR’s own diff (via #9267), not full dirty tree re-capture. |

---

## 5. Feature Request Trends

1. **Aone Code Provider Parity** — 7/12 new issues target Aone gaps: branch-based MRs, comment dedup, self-PR detection, incremental cache, inline anchoring, AI-comment flag, cleanup audit, `composeUrl`, test-plan routing, version floor. Clear push to match GitHub provider maturity.
2. **Review Loop Convergence & Observability** — Machine-readable convergence advisory (#9623), capture-tui rendering evidence (#9273), content-anchored incremental rounds (#9190), per-file verdict transfer across rebases (#9191). Making review loops *debuggable* and *resumable*.
3. **Web Shell UX Polish** — Focus management (approval/ask dialogs), file attachments, PR binding to sessions, daemon transcript bounding, reasoning controls per provider. Session-centric workflow is maturing.
4. **Provider-Aware Reasoning Controls** — First-class support for hybrid/mandatory-thinking models (DeepSeek V4, GLM 5.2, Kimi) with correct UI toggles per endpoint.
5. **Auth/Provider Expansion** — Kimi (Coding Plan, CN/Intl API keys) and Xiaomi MiMo (pay-as-you-go, multi-region) presets in `/auth` (#8368).

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Review loop divergence** | #9278 design doc: “gain >1, only damping is prose in AGENTS.md”; multiple PRs (#9461, #9526, #9623) adding telemetry/advisories. |
| **Aone Code as second-class citizen** | 7 fresh issues in 24h covering MR model mismatch, comment dedup, cache, anchoring, merge gates, cleanup audit. |
| **Web Shell focus stealing** | #9571 (tool-approval), #9611 (ask-user), #9609 (fix) — modal dialogs grabbing keyboard focus mid-typing. |
| **Daemon transcript OOM** | #9303: unbounded history crashes renderer; requires manual bounds + replay cleanup. |
| **Incremental review cache fragility** | #9190 (local flow had *zero* incremental), #9191 (rebase kills commit anchor), #9618 (Aone amends orphan SHA). |
| **Nightly release flakiness** | #9553: v0.21.11-nightly publish job failed; CI fallback fix in v0.21.14-nightly. |

---

*Generated from `github.com/QwenLM/qwen-code` data as of 2026-08-21. All links point to live GitHub items.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-21

## Today's Highlights
CodeWhale v0.9.10 completes the rebrand from `deepseek-tui`, deprecating the legacy npm package. The core team is advancing two major architectural efforts: crate decomposition (EPIC-005) to modularize the TUI, and a new `read_lints` tool enabling on-demand LSP diagnostics. First-run UX is being overhauled to reduce configuration friction for non-English users.

---

## Releases
### v0.9.10 — CodeWhale Rebrand Complete
- **Legacy package `deepseek-tui` deprecated**; no further releases under that name
- CLI command, npm package, and release assets standardized to lowercase `codewhale`
- Migration path documented for v0.8.x users (`deepseek`/`d` commands → `codewhale`)
- [Release notes](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.10)

---

## Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | Top-level tracking for splitting the monolithic TUI crate into independent, reusable crates. Enables better testability, compile times, and potential library reuse. | 10 comments, active coordination hub |
| [#4070](https://github.com/Hmbown/CodeWhale/issues/4070) | **feat: standalone `read_lints` tool for on-demand diagnostics** | Unblocks agent workflows needing lint/type errors for unedited files — critical for autonomous code review and refactoring. | 2 comments, PR #5524 implementing |
| [#5522](https://github.com/Hmbown/CodeWhale/issues/5522) | **v0.9.10: make first run progressive instead of front-loading configuration** | Direct user feedback: current onboarding overwhelms non-English users with telemetry disclosure + settings wall before productive work. | 0 comments, authored by maintainer Hmbown |
| [#5345](https://github.com/Hmbown/CodeWhale/issues/5345) | **Add multi-line mode / customizable send keybinding** | Parity with Grok Build, Codex, web chat: users expect `Enter`=newline, `Shift+Enter`/`Ctrl+Enter`=send. High UX friction for structured prompts. | 2 comments, Chinese user request |
| [#5482](https://github.com/Hmbown/CodeWhale/issues/5482) | **EPIC(docs): restructure & fully localize documentation to Chinese** | Growing Chinese user base; current docs are English-only, stale, or machine-translated. Localization is a strategic adoption lever. | 1 comment, umbrella tracking issue |
| [#5526](https://github.com/Hmbown/CodeWhale/issues/5526) | **Deprecated shell completion (pwsh)** | Generated completions reference old `codewhale-tui` command; no docs or repo location to update. Blocks PowerShell users. | 1 comment, recent regression |

---

## Key PR Progress
| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#5524](https://github.com/Hmbown/CodeWhale/pull/5524) | **feat(tui): add multi-file `read_lints` operation** | OPEN | Implements #4070: agent can now request LSP diagnostics for arbitrary workspace files via `lsp` tool, reusing existing `LspManager` pool. |
| [#5525](https://github.com/Hmbown/CodeWhale/pull/5525) | **refactor(tui): adopt command shapes in utility group (FEAT-018)** | OPEN | Converts 7 utility commands to external command shapes (FEAT-014/015) without moving files — execution boundary shift for crate decomposition. |
| [#5523](https://github.com/Hmbown/CodeWhale/pull/5523) | **refactor(tui): extract tool call stages from turn loop** | OPEN | Decomposes monolithic turn loop into `plan_tool_calls` → `execute_planned_tools` → `process_tool_results`. Improves testability and cancellation handling. |
| [#5520](https://github.com/Hmbown/CodeWhale/pull/5520) | **feat(web): move docs/sandbox & docs/web onto dictionary spine** | CLOSED | Eliminates 29 `isZh` branches; wires `types.ts`/`index.ts` dictionaries into locale checker. Part of #5337 localization infrastructure. |
| [#5521](https://github.com/Hmbown/CodeWhale/pull/5521) | **chore(tui): drop single-argument `concat!`** | CLOSED | Fixes clippy `useless-concat` warning blocking CI. Trivial but unblocks merge pipeline. |

---

## Feature Request Trends
1. **Input UX Parity** — Multi-line editing, customizable send keys (Enter vs Shift/Ctrl+Enter) matching Codex/Grok/web conventions (#5345)
2. **Agent Tooling Expansion** — On-demand LSP diagnostics (`read_lints`), file-scoped operations, richer tool metadata (#4070, #5524)
3. **Progressive Onboarding** — Deferred configuration, localized first-run flow, reduced cognitive load (#5522)
4. **Documentation Localization** — Full Chinese translation, restructured IA, automated locale validation (#5482, #5520)
5. **Shell Integration Polish** — Accurate completions for modern shells (pwsh, fish, nushell) post-rebrand (#5526)

---

## Developer Pain Points
| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Onboarding friction for non-English users** | High | #5522: telemetry disclosure + settings wall before first productive action; English-only barriers |
| **Input mode mismatch with muscle memory** | High | #5345: users expect Codex/Grok-style multi-line; current single-line default breaks structured prompting |
| **Stale/broken shell completions** | Medium | #5526: `codewhale-tui` reference persists in generated completions; no update path documented |
| **Monolithic crate compile times & testability** | Medium | #5316: EPIC-005 decomposition driven by developer velocity concerns |
| **Agent blindness to pre-existing diagnostics** | Medium | #4070: no way to read lints for files not just edited; limits autonomous workflows |
| **Documentation drift & localization gaps** | Medium | #5482: English-only docs, machine-translation errors, stale content for growing Chinese user base |

---

*Data source: [Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) — Issues & PRs updated 2026-08-20 to 2026-08-21*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*