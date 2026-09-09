# AI CLI Tools Community Digest 2026-09-09

> Generated: 2026-09-09 04:19 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-09)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **stabilization-to-hardening phase** across major players. Anthropic, OpenAI, Google, and GitHub are shipping frequent patch releases focused on regression fixes, security hardening, and platform parity (especially Windows/WSL). A clear **convergence on cross-agent interoperability** (`AGENTS.md`, shared session context) and **team/collaboration primitives** (pooled quotas, multi-user contexts) is emerging. Meanwhile, newer entrants (Kimi, DeepSeek TUI, OpenCode) iterate rapidly on provider integration, cost observability, and fleet/sub-agent reliability. The ecosystem is bifurcating: **enterprise-grade platforms** (Claude Code, Codex, Copilot CLI, Gemini CLI) prioritize stability, security, and team workflows; **specialized/emerging tools** (OpenCode, DeepSeek TUI, Pi, Qwen Code) push architectural boundaries on token accounting, provider abstraction, and TUI modernization.

---

## 2. Activity Comparison (2026-09-09)

| Tool | Issues Updated | PRs Updated | Releases (24h) | Top Community Signal |
|------|----------------|-------------|----------------|----------------------|
| **Claude Code** | 10 hot (50 recent) | 1 | 2 patches (v2.1.266, v2.1.265) | #6235 `AGENTS.md`: **5,126 👍** |
| **OpenAI Codex** | 10 hot | 10 merged | 2 alphas (rust-v0.154.0-alpha.7/8) | #16857 GPU usage: **52 👍** |
| **Gemini CLI** | 10 hot | 11 | 3 (stable v0.59.0, preview, nightly) | #21409 Agent hangs: **8 👍** |
| **GitHub Copilot CLI** | 10 hot | 3 | 2 patches (v1.0.84-3, v1.0.84-2) | #13 Vim mode: **76 👍** (now closed) |
| **Kimi Code CLI** | 1 | 1 | 0 | #1270 VSCode `@` UX: **0 👍** |
| **OpenCode** | 10 noteworthy | 10 | 1 (v1.18.30) | #33356 13GB SQLite: **28 comments** |
| **Pi** | 10 noteworthy | 10 | 0 | #9230 OpenCode header: **6 comments** |
| **Qwen Code** | 10 noteworthy | 10 | 2 (v0.23.2-preview, v0.23.1 stable) | #8662 TUI migration: **33 comments** |
| **DeepSeek TUI** | 9 | 3 open | 0 (0.9.13 in PR #6002) | #5976 Cost unknown: **owner-reported** |
| **Grok Build** | 0 | 0 | 0 | — |

**Observation**: Top-tier tools (Claude, Codex, Gemini, Copilot) show **high release velocity + high community engagement**. Mid-tier (OpenCode, Pi, Qwen) demonstrate **strong PR throughput** but lower issue upvote counts. Kimi and DeepSeek TUI are in **early community-building phases**.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Requesting | Specific Needs |
|-------------|------------------|----------------|
| **Cross-agent interoperability / `AGENTS.md`** | Claude Code (#6235), Codex (implied via Amp/Cursor adoption), OpenCode (session context), Gemini CLI (subagent observability) | Standardized agent context format; shared session state across tools; portable agent definitions |
| **Team/collaboration primitives** | Claude Code (#92517 pooled quotas), Copilot CLI (Mission Control), OpenCode (global session commands), Gemini CLI (persistent task tracking) | Shared quota pools; multi-user project contexts; remote session navigation; persistent task files |
| **Provider abstraction & multi-model routing** | Codex (OpenRouter #2943), OpenCode (Alibaba provider #47874), Pi (provider capability matrix), DeepSeek TUI (OpenRouter vendor pinning #6007), Qwen Code (provider-agnostic reasoning #11328) | Unified model registry; vendor pinning for OpenRouter; runtime model switching; cost/latency-aware routing |
| **Token/cost observability** | DeepSeek TUI (#6011, #5976), OpenCode (tok/s TUI #48067), Pi (provider-reported cost #6881), Copilot CLI (compaction reliability) | Real-time tok/s in TUI; historical token/cost analytics; cache hit rates; compaction cost breakdown |
| **Session/history reliability** | Codex (history freeze #41079, #43124), Gemini CLI (compress persistence #21335), Copilot CLI (OOM resume #4664), OpenCode (13GB event table #33356), Qwen Code (SQLite persistence #11433) | Bounded storage; ordinal consistency; crash recovery; external DB option for self-hosted |
| **Windows/WSL parity** | Claude Code (5+ Windows issues), Codex (3+ WSL blockers), Copilot CLI (Local session concurrency #4756), Pi (CapsLock #9362, shell resolution #9361), OpenCode (MCP OAuth #44700) | Native symlink support; MSIX virtualization; concurrent sessions; MCP OAuth flow; terminal input handling |
| **Plugin/hook extensibility depth** | Claude Code (Function Hooks #91870), Gemini CLI (skill precedence #29151), Copilot CLI (MCP profiles #2235), OpenCode (message mutation API removal #48043), Pi (extension hooks #9236) | Middleware-style hooks; side-effect tracking; skill/agent lifecycle; hot-reload; capability discovery |

---

## 4. Differentiation Analysis

| Dimension | Enterprise/Platform Tools | Specialized/Emerging Tools |
|-----------|---------------------------|----------------------------|
| **Core Focus** | **Claude Code**: Enterprise governance, gateway telemetry, plugin marketplace<br>**Codex**: Thread lifecycle, credential security, multimodal agents<br>**Gemini CLI**: Sandbox security, AST-aware tooling, auto-memory<br>**Copilot CLI**: Editor integration (Vim mode), Mission Control, GitHub-native auth | **OpenCode**: Event-sourcing architecture, provider SDK abstraction, fleet sub-agents<br>**Pi**: Extension-first architecture, provider conformance, startup latency budgets<br>**Qwen Code**: Web-shell parity, TUI modernization (OpenTUI), structured memory recall<br>**DeepSeek TUI**: Cost transparency, OpenRouter vendor control, goal-gated autonomy |
| **Target Users** | Professional dev teams, enterprises, security-conscious orgs | Power users, self-hosters, cost-sensitive teams, TUI enthusiasts |
| **Technical Approach** | Monolithic binaries; managed cloud gateways; strict release trains (stable/preview/nightly); heavy telemetry | Modular provider SDKs; embedded SQLite/event stores; aggressive nightly iteration; opt-in telemetry |
| **Platform Strategy** | Desktop apps (Electron/Tauri) + CLI + IDE extensions; Windows/macOS/Linux parity as baseline | CLI-first; TUI as primary UI; web-shell as secondary; Windows often second-class |
| **Extensibility Model** | Plugin directories (Claude), MCP servers (all), skill systems (Gemini), hook proposals (Claude) | Provider catalogs (OpenCode/DeepSeek), extension packages (Pi), user-defined models (DeepSeek), A2A server (Gemini) |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / High Maturity** | **Claude Code**, **OpenAI Codex**, **Gemini CLI**, **GitHub Copilot CLI** | • 5k+ 👍 on top issues (Claude)<br>• 10+ PRs merged/day (Codex, Gemini)<br>• Multi-channel releases (stable/preview/nightly)<br>• Dedicated Windows/macOS/Linux teams<br>• Enterprise features (SSO, gateway, audit logs) |
| **High Momentum / Rapid Iteration** | **OpenCode**, **Pi**, **Qwen Code** | • 10+ PRs/day despite smaller communities<br>• Architectural refactors in-flight (OpenCode interpreter, Pi lazy loading, Qwen TUI migration)<br>• Active external contributors on core features |
| **Early Community / Niche Focus** | **DeepSeek TUI**, **Kimi Code CLI** | • Owner-driven development<br>• Feature requests from single contributors<br>• No stable release cadence<br>• DeepSeek TUI shows strong external PR engagement on cost/provider features |
| **Inactive / Unclear** | **Grok Build** | No public activity in 24h window |

**Key Insight**: The **gap between Tier 1 and Tier 2 is narrowing** on technical sophistication (OpenCode's provider SDKs, Pi's extension architecture, Qwen's web-shell rival IDE extensions), but **Tier 1 maintains massive lead in community trust signals** (upvotes, issue depth, enterprise adoption evidence).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **`AGENTS.md` becoming de facto standard** | Claude #6235 (5.1k 👍), Codex/Amp/Cursor adoption cited, Gemini subagent skills, OpenCode session context | **Adopt `AGENTS.md` now** for portable agent definitions; expect tooling convergence within 6 months |
| **Cost governance moving from nice-to-have to requirement** | DeepSeek TUI cost unknown (#5976), tok/s demand (OpenCode, DeepSeek), Pi provider cost API, Copilot compaction reliability | **Budget token/cost observability** into tool selection criteria; demand historical analytics, not just live panels |
| **Windows/WSL is the critical parity battleground** | 5+ tools with active Windows blockers; Copilot CLI regression on Local sessions; Claude orphaned Silo objects; Codex WSL project creation broken | **Validate Windows workflows in CI**; treat Windows as Tier-1 platform, not afterthought |
| **Event-sourcing / SQLite storage hitting scale limits** | OpenCode 13GB unbounded table, Qwen Code SQLite persistence design, Gemini Auto Memory logging, Pi compaction bugs | **Demand retention policies & external DB options** for self-hosted deployments; evaluate storage architecture before scaling |
| **Provider abstraction layer hardening** | OpenCode Alibaba provider, Pi capability matrix, DeepSeek OpenRouter vendor pinning, Qwen provider-agnostic reasoning | **Multi-model routing is table stakes**; evaluate tools on vendor pinning, cost-aware routing, and schema compatibility |
| **TUI modernization wave** | Qwen Code ink→OpenTUI migration, DeepSeek TUI session picker UX, OpenCode tok/s status bar, Pi fullscreen performance | **TUI is becoming a differentiator**, not a fallback; expect rich diagnostics, session management, and keyboard-first UX in CLI tools |
| **Security/credential hygiene as competitive feature** | Codex shell snapshot hardening (3 PRs), Claude gateway telemetry expansion, Pi OAuth usage reports, DeepSeek redaction opt-out | **Credential handling and audit trails** are now productized features; evaluate tools on supply-chain security posture |

---

## Recommendation Summary

| For... | Recommended Primary Tool(s) | Rationale |
|--------|----------------------------|-----------|
| **Enterprise teams needing governance & stability** | **Claude Code** + **GitHub Copilot CLI** | Mature release trains, gateway/telemetry, GitHub-native auth, Windows parity investment |
| **Teams prioritizing multi-model flexibility & cost control** | **OpenCode** + **DeepSeek TUI** | Provider SDK abstraction, OpenRouter vendor pinning, cost observability, self-hosted friendly |
| **Developers wanting cutting-edge TUI & web-shell experience** | **Qwen Code** + **Pi** | OpenTUI migration, web-shell parity, extension architecture, startup latency focus |
| **Organizations standardizing on agent interoperability** | **Claude Code** (early adopter) + **monitor Codex/Gemini** | `AGENTS.md` momentum strongest here; track cross-tool adoption |
| **Windows-first shops** | **GitHub Copilot CLI** (Vim mode GA, sandbox improvements) + **Claude Code** (active Windows fixes) | Most visible Windows investment; but validate current regressions (#4756, #53247) |

**Bottom Line**: The ecosystem is **consolidating around 3-4 core capabilities** (interoperability, cost observability, team primitives, Windows parity) while **diverging on architecture** (event-sourcing vs. session-based, plugin vs. provider vs. extension models). Choose based on which architectural philosophy aligns with your operational model.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-09 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **skill-creator evaluation pipeline** (#1298, #1099, #1050) | Core tooling for creating/optimizing Skills; runs `run_eval.py` to measure trigger precision/recall | **Critical bug**: `run_eval.py` reports 0% recall on all queries (Issue #556, 12 comments, 7 👍). Windows subprocess/encoding failures block contributors (#1099, #1050). Optimization loop "optimizing against noise." | 🔴 Open (3 related PRs) |
| 2 | **mcp-builder evaluation harness** (#1602, #1724) | Phase-4 evaluation script for MCP server skills | Silent fabrication of tool-execution errors → scores 0/N on all real MCP servers (Issue #1390, 4 comments). Default model outdated (claude-3-7-sonnet). | 🔴 Open (2 PRs) |
| 3 | **claude-api skill** (#1607) | Manages Anthropic API model IDs, pricing, capabilities | Eagerly injects ~156k tokens, exhausting context window in one call (Issue #1487, 4 comments). Four retired model IDs still listed as active. | 🔴 Open |
| 4 | **self-audit** (#1367) | Mechanical file verification + 4-dimension reasoning quality gate (v1.3.0) | Pre-delivery audit: file existence → reasoning audit by damage severity. Universal across stacks. Ties to Quality Gate Pipeline proposal (Issue #1385, 4 comments, 1 👍). | 🔴 Open |
| 5 | **Hivemind: Zero-Cost Multi-Agent Orchestration** (#1628) | Delegates mechanical work to headless `opencode` workers on free models; Claude stays planner/reviewer/merger | Addresses "expensive model context is scarce resource" paradigm. Novel cost-optimization architecture. | 🔴 Open |
| 6 | **document-typography** (#514) | Prevents orphans, widows, numbering misalignment in AI-generated documents | "Affects every document Claude generates. Users rarely ask for good typography explicitly." | 🔴 Open |
| 7 | **testing-patterns** (#723) | Comprehensive testing stack: Trophy model, AAA pattern, React Testing Library, integration/E2E strategies | Fills gap in SDLC coverage; 30-day stale. | 🔴 Open |
| 8 | **skill-quality-analyzer / skill-security-analyzer** (#83) | Meta-skills evaluating Structure (20%), Security (20%), Correctness (20%), Usability (20%), Maintainability (20%) | Community tooling for Skill quality gates. Security analyzer directly relevant to Issue #492 (namespace trust abuse, 43 comments). | 🔴 Open |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence | Signal Strength |
|-------|----------|-----------------|
| **Skill distribution & trust security** | Issue #492 (43 comments, 2 👍): Community skills published under `anthropic/` namespace enable impersonation; users grant elevated permissions to fake "official" skills. | 🔥 **Highest** — Security boundary violation |
| **Organizational skill sharing** | Issue #228 (16 comments, 8 👍): No native org-wide sharing; manual `.skill` file exchange via Slack/Teams → Settings upload. | 🔥 **High** — Workflow friction |
| **Evaluation/CI reliability** | Issues #556 (12 comments, 7 👍), #1390 (4 comments): Core skill-creator and mcp-builder evaluation harnesses fundamentally broken (0% trigger, 0/N scores). | 🔥 **High** — Blocks contributor velocity |
| **Context window management** | Issue #1487 (4 comments): `claude-api` skill injects 156k tokens in single call, OOMing context. | ⚠️ **Medium** — Architecture limitation |
| **Quality gates / reasoning audit** | Issues #1385 (4 comments, 1 👍), #1367 (PR): Three-gate pipeline (Calibration → Adversarial Review → Delivery Verification) + self-audit skill. | ⚠️ **Medium** — Emerging best practice |
| **Cross-platform (Windows) support** | Issues #1099, #1050, #1298: `claude.cmd` vs `claude`, pipe encoding, `PATHEXT` handling. | ⚠️ **Medium** — Contributor accessibility |
| **Bedrock / enterprise deployment** | Issue #29 (4 comments): No documented path for AWS Bedrock integration. | 💡 **Niche** — Enterprise demand |
| **MCP exposure for Skills** | Issue #16 (4 comments): "Expose Skills as MCPs" — standardize skill I/O as callable APIs. | 💡 **Niche** — Architectural direction |

---

## 3. High-Potential Pending Skills (Active PRs, Not Yet Merged)

| PR | Skill | Why It May Land Soon |
|----|-------|---------------------|
| **#1298** | skill-creator: fix run_eval.py (recall=0%, Windows, parallel workers) | Blocks *all* skill development; 3 concurrent fix PRs (#1099, #1050, #1298); Issue #556 has 12 comments/7 👍 |
| **#1602** | mcp-builder: fix evaluation serialization, metrics, encoding, stability | Issue #1390 confirms 0/N scoring on all real MCP servers; fixes TextContent JSON serialization |
| **#1607** | claude-api: mark 4 retired model IDs as retired | Fixes #1603; low-risk metadata update; reduces token bloat (related to #1487) |
| **#1724** | mcp-builder: update evaluation.py default to claude-sonnet-5 | One-line model bump; outdated default causes confusion in troubleshooting docs |
| **#1367** | self-audit: mechanical verification + 4-dim reasoning gate | Aligns with Issue #1385 (Quality Gate Pipeline); universal applicability; v1.3.0 suggests maturity |
| **#1628** | Hivemind: Zero-Cost Multi-Agent Orchestration | Novel architecture addressing token cost bottleneck; leverages free `opencode` workers |
| **#514** | document-typography: typographic QC for generated docs | Universal pain point ("every document Claude generates"); no existing solution in repo |
| **#723** | testing-patterns: full testing stack skill | Fills SDLC gap; comprehensive scope (unit → E2E); 30-day stale but well-structured |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is fixing the broken skill *creation and validation toolchain* (skill-creator, mcp-builder evaluation) so contributors can reliably build, test, and distribute skills — coupled with urgent security hardening of the skill namespace to prevent trust-boundary abuse.**

---

## Key Links Reference

- **Security namespace issue**: https://github.com/anthropics/skills/issues/492
- **Org sharing request**: https://github.com/anthropics/skills/issues/228
- **run_eval.py 0% recall**: https://github.com/anthropics/skills/issues/556
- **mcp-builder 0/N scoring**: https://github.com/anthropics/skills/issues/1390
- **claude-api token bloat**: https://github.com/anthropics/skills/issues/1487
- **Quality Gate Pipeline proposal**: https://github.com/anthropics/skills/issues/1385
- **Duplicate skills (document/example)**: https://github.com/anthropics/skills/issues/189

---

# Claude Code Community Digest — 2026-09-09

## Today's Highlights
Two patch releases landed in quick succession: **v2.1.266** fixes a regression introduced in v2.1.265 where the undocumented `CLAUDE_CODE_USE_GATEWAY` env var incorrectly forced Cloud-gateway sign-in for LLM-gateway/proxy users. **v2.1.265** adds `user.email`/`user.groups` to gateway telemetry and allows `--plugin-dir` to point at a folder of plugins (each child folder with a manifest loads automatically). The community's top discussion remains **#6235** (5.1k 👍, 391 comments) requesting native `AGENTS.md` support — a cross-agent standard gaining traction in Codex, Amp, and Cursor.

---

## Releases

### v2.1.266 (2026-09-09)
- **Fix:** Reverts v2.1.265 regression where `CLAUDE_CODE_USE_GATEWAY` alone triggered Cloud-gateway authentication, breaking proxy/LLM-gateway setups that rely on `ANTHROPIC_BASE_URL` + `ANTHROPIC_AUTH_TOKEN`.
- **Impact:** Restores expected behavior for self-hosted gateway and proxy users.

### v2.1.265 (2026-09-08)
- **Telemetry:** Adds `user.email` and `user.groups` to data sent through Claude Apps gateway (matches terminal session telemetry).
- **Plugins:** `--plugin-dir` now accepts a directory; each child folder containing a manifest is loaded as a plugin. Supports dynamic add/remove of plugins without restart.

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| **[#6235](https://github.com/anthropics/claude-code/issues/6235)** | **Support AGENTS.md** (closed) | Cross-agent standard for coding-agent context; `CLAUDE.md` is Claude-specific. Adoption by Codex, Amp, Cursor makes interop critical. | **5,126 👍, 391 comments** — strongest signal in repo history. Closed but community expects follow-through. |
| **[#91870](https://github.com/anthropics/claude-code/issues/91870)** | **Function Hooks — make plugins 10x more powerful** (open) | Proposes Express/Koa-style middleware hooks with side-effect tracking via parameterized `$` object. Could unlock deep, safe extensibility. | **88 👍, 148 comments** — active design discussion; plugin authors engaged. |
| **[#53247](https://github.com/anthropics/claude-code/issues/53247)** | **Claude Desktop fails to launch on Windows — orphaned Silo/Job Object after crash** (open) | Requires logoff/reboot to recover. Blocks Windows desktop users entirely after any crash. | **29 👍, 71 comments** — persistent since April; no workaround. |
| **[#65961](https://github.com/anthropics/claude-code/issues/65961)** | **Model verbose code comments by default — ignores instructions to stop** (open) | Model adds excessive comments despite explicit user rules; defeats "clean code" workflows. | **203 👍, 31 comments** — high frustration; affects daily coding experience. |
| **[#89467](https://github.com/anthropics/claude-code/issues/89467)** | **Windows: app window always-on-top with no disable** (open) | Desktop app forces topmost Z-order; no setting/menu to turn off. Obscures other windows. | **35 👍, 22 comments** — basic UX gap on Windows. |
| **[#76694](https://github.com/anthropics/claude-code/issues/76694)** | **Cowork: "Choose a folder" lost after Chat/Cowork merge** (open) | Context menu replaced with upload-only knowledge menu; breaks folder-based project workflows. | **19 👍, 16 comments** — regression from UI unification. |
| **[#92517](https://github.com/anthropics/claude-code/issues/92517)** | **Pool usage across accounts & share session context** (open) | Team feature: shared quota pool + shared project context for multi-developer collaboration. | **3 comments** — new but addresses growing team-adoption need. |
| **[#88430](https://github.com/anthropics/claude-code/issues/88430)** | **VS Code extension 2.1.235+: panel steals focus, leaves input unfocused** (open) | Keybindings swallowed until mouse click; breaks keyboard-driven workflows in VS Code. | **3 comments** — regression in recent extension versions. |
| **[#92646](https://github.com/anthropics/claude-code/issues/92646)** | **Claude Desktop blocks SendMessage → breaks subagent continuation** (open) | CLI launched with `--disallowedTools SendMessage` + PreToolUse deny; kills subagent delegation. | **2 👍, 3 comments** — architectural constraint limiting agent patterns. |
| **[#92966](https://github.com/anthropics/claude-code/issues/92966)** | **Bundled GrowthBook clientKey returns 400 — Remote Control fails closed** (open, regression of #64151) | Feature flagging broken since 2.1.149; stale-bot closed original without fix. Affects remote config/rollout. | **1 comment** — recurring infra bug. |

---

## Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| **[#63686](https://github.com/anthropics/claude-code/pull/63686)** | Bump stale/autoclose timeouts from 14 to 90 days | **Closed** | Extends issue lifecycle: stale mark at 90d inactivity (was 14d), autoclose at 90d after stale (was 14d). Reduces premature closure of valid but quiet issues. |

> Only 1 PR updated in the last 24h. The repo appears in a stabilization phase between feature cycles.

---

## Feature Request Trends (from all 50 recent issues)

1. **Cross-agent interoperability** — `AGENTS.md` support (#6235), shared session context across accounts (#92517), standardized hook/plugin APIs (#91870).
2. **Team/collaboration primitives** — pooled usage quotas, multi-user project contexts, shared session state.
3. **Plugin/hook depth** — Function Hooks proposal (#91870), plugin folder loading (shipped in v2.1.265), hook output handling (#91614).
4. **Desktop app parity & polish** — Windows always-on-top (#89467), macOS symlink rules loading (#90523), scheduled task reliability (#92429), session branch naming from `CLAUDE.md` (#85998).
5. **Model behavior control** — Verbose comments (#65961), over-investigation on simple tasks (#92970), safeguard false positives (#92989), "answer only" adherence (#92971).
6. **Platform-specific gaps** — Native ChromeOS Cowork (#91893), Windows MSIX virtualization (#85693), MCP OAuth hardcoded port (#92968).

---

## Developer Pain Points (Recurring High-Frequency Complaints)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Windows desktop instability** | High | #53247 (crash → reboot required), #89467 (always-on-top), #88430 (VS Code focus), #92968 (hardcoded MCP port), #85693 (MSIX virtualization) |
| **Model output not following instructions** | High | #65961 (verbose comments), #92970 (over-investigation), #92971 (ignores "answer only"), #92505 (hallucinated completion) |
| **Plugin/hook system limitations** | Medium | #91870 (need deeper hooks), #91614 (silent output truncation), #92601 (hook ENOENT retry loop), #40766 (MCP diagnostic missing in VS Code) |
| **Session/workspace management bugs** | Medium | #92452 (dispatch rejects 2nd session in non-git dir), #92646 (SendMessage blocked), #90523 (symlinked rules not loaded), #85998 (branch naming ignores CLAUDE.md) |
| **Cowork/Desktop UX regressions** | Medium | #76694 (lost folder picker), #92452 (session collision), #53247 (launch failure), #92966 (Remote Control broken) |
| **Telemetry/privacy opacity** | Low but persistent | #6235 discussion touches on gateway telemetry; v2.1.265 adds `user.email`/`groups` without clear opt-out visibility. |

---

**Next Digest:** 2026-09-10  
**Source:** `github.com/anthropics/claude-code` — Issues, Releases, PRs updated 2026-09-08 → 2026-09-09

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-09

---

## 1. Today's Highlights

Two new Rust alpha releases (`0.154.0-alpha.7/8`) shipped alongside a heavy wave of merged PRs (20+ closed today) focused on credential hardening, thread lifecycle fixes, and macOS voice resource bundling. The issue tracker is dominated by Windows/WSL blockers, session-history corruption on macOS and Windows, and a spate of `invalid_prompt` regressions on the new GPT-6 Astra model.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.154.0-alpha.8` | Alpha | Incremental update; no changelog published yet. |
| `rust-v0.154.0-alpha.7` | Alpha | Precedes alpha.8; likely contains the same change batch. |

> **Note**: Both are pre-release builds; production users should remain on stable.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#16857](https://github.com/openai/codex/issues/16857) | **High GPU usage during “thinking” animation** (macOS) | Persistent GPU drain on Apple Silicon; affects battery/thermals. | 47 comments, **52 👍** — highest engagement in tracker. |
| [#41463](https://github.com/openai/codex/issues/41463) | **Windows + WSL: AbsolutePathBuf deserialization failure** | Blocks project creation entirely on Windows/WSL2. | 43 comments, **27 👍** — critical platform blocker. |
| [#41079](https://github.com/openai/codex/issues/41079) | **Windows: paginated thread history stalls on duplicate ordinal** | Local history projection desyncs from canonical rollout; users lose recent context. | 33 comments — data-integrity concern. |
| [#25271](https://github.com/openai/codex/issues/25271) | **Computer Use cannot read Chrome URL on Windows** | Breaks browser automation workflows on Windows. | 32 comments, **9 👍** — long-standing (since May). |
| [#39897](https://github.com/openai/codex/issues/39897) | **macOS: deleted ChatGPT conversation stuck in sidebar** | Ghost conversations clutter UI; no removal path. | 19 comments, **4 👍** — UX polish gap. |
| [#32139](https://github.com/openai/codex/issues/32139) | **Remove manual “Keep Waiting” approval** | Frequent interruption during long agent runs; high friction. | 14 comments, **23 👍** — strong demand for auto-accept. |
| [#40902](https://github.com/openai/codex/issues/40902) | **Windows regression: Java NIO `Selector.open` fails** | Breaks JVM-based tooling after 26.820.60940 update. | 14 comments — recent regression. |
| [#43124](https://github.com/openai/codex/issues/43124) | **macOS: history freezes at older turns (ordinal mismatch)** | Long conversations show stale history; new turns invisible. | 10 comments — mirrors Windows #41079 pattern. |
| [#28864](https://github.com/openai/codex/issues/28864) | **TUI: shortcuts to edit/remove queued follow-ups** | Queue management becomes unusable with >1 follow-up. | 9 comments, **17 👍** — CLI power-user pain point. |
| [#43237](https://github.com/openai/codex/issues/43237) | **GPT-6 Astra rejects `hi` with `invalid_prompt`** | Model-level regression blocking trivial prompts across Linux/macOS CLI. | 5 comments — new, high-severity model bug. |

---

## 4. Key PR Progress (Merged Today)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#44043](https://github.com/openai/codex/pull/44043) | **Use `StartThreadOptions` across thread fork APIs** | Unifies thread-fork configuration; reduces divergence between rollout, loaded-history, and prepared forks. | Core runtime consistency. |
| [#44040](https://github.com/openai/codex/pull/44040) | **Harden credential handling in shell snapshots & replay** | Decodes shell literals without eval; rejects snapshots with hidden credentials. | Security hardening. |
| [#44038](https://github.com/openai/codex/pull/44038) | **Handle copied credentials in broker & shell snapshots** | Tracks credential aliases across shell startup; prevents leakage. | Credential hygiene. |
| [#44032](https://github.com/openai/codex/pull/44032) | **Generate Python SDK types from app-server schemas** | Automates SDK/schema sync; preserves reviewed artifacts for releases. | Developer experience / SDK reliability. |
| [#44028](https://github.com/openai/codex/pull/44028) | **Add AWS credential export for Amazon Bedrock** | Supports `model_providers.amazon-bedrock.aws.credential_export` with SigV4 command output. | Enterprise / Bedrock integration. |
| [#44027](https://github.com/openai/codex/pull/44027) | **Support image attachments in agents overview background tasks** | Enables pasting images in overview composer; includes attachments in background prompts. | Multimodal agent workflows. |
| [#43994](https://github.com/openai/codex/pull/43994) | **Clear stale transcript history when switching threads** | Resets transcript immediately on thread switch; prevents cross-thread contamination. | Fixes history bleed (related to #41079/#43124). |
| [#43983](https://github.com/openai/codex/pull/43983) | **Bundle signed voice resources in macOS releases** | Builds, signs, notarizes `codex-voice-host` for both architectures; includes in DMGs. | macOS voice feature delivery. |
| [#43950](https://github.com/openai/codex/pull/43950) | **Keep app-server thread RPCs active until delegated work completes** | Awaits thread startup/listener completion before draining connections. | Reliability for long-running threads. |
| [#43949](https://github.com/openai/codex/pull/43949) | **Add transactional thread attachment mutations** | Replaces `ThreadArtifact` with attachment model; uses SQLite transactions. | Data integrity for thread artifacts. |

---

## 5. Feature Request Trends

1. **TUI/CLI Queue Management** — Multiple issues (#28864, #32139) ask for editable follow-up queues and auto-accept of “Keep Waiting” prompts.
2. **Subagent Observability** — #26112 requests caller-defined display names for spawned subagents to improve debuggability.
3. **Config Layering** — #24961 proposes explicit gitignored project-local config overrides (global → project → local).
4. **Cross-Platform Parity** — Windows/WSL and macOS both suffer session-history bugs; users expect consistent behavior.
5. **Computer Use / Browser Tooling** — Windows Chrome URL detection (#25271) and remote SSH browser provisioning (#34263) remain gaps.

---

## 6. Developer Pain Points

| Area | Recurring Complaints |
|------|----------------------|
| **Windows/WSL** | Project creation broken (#41463), Chrome URL detection failing (#25271), Java NIO regression (#40902), thread forking corruption (#34180), Computer Use latency (#42790). |
| **Session History** | Both macOS (#43124, #39897, #42053) and Windows (#41079) show stale/frozen conversation history; ordinal mismatches and projection stalls. |
| **Model Regressions** | GPT-6 Astra returning `invalid_prompt` for harmless inputs (#43163, #43237, #43970) across platforms. |
| **Credential/Token Handling** | Remote SSH token refresh failures (#27410), MCP OAuth refresh not surfacing reconnect signals (PR #43947). |
| **UI/UX Friction** | Unclickable pet on Windows (#44031), disappearing chat input (#43592), ghost sidebar entries (#39897), high GPU from trivial animation (#16857). |
| **Mobile/Android** | Login freezes with multiple Google accounts (#38717), Voice Mode hiding connected app tools (#40052). |

---

*Generated from `openai/codex` GitHub data (releases, issues, PRs updated 2026-09-09).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-09

---

## 1. Today's Highlights

Three releases shipped in the last 24 hours: **v0.59.0 (stable)**, **v0.60.0-preview.0**, and **v0.61.0-nightly**. The stable release graduates a month of nightly fixes; the preview hardens web-fetch routing and MCP OAuth issuer validation; the nightly mitigates an NTFS 8.3 short-name path collision and isolates sandbox settings directories. Meanwhile, the issue backlog shows persistent pain around **subagent reliability** (hangs, silent success reporting, under-utilization) and **shell-tool integration** (stuck commands, git-config nullification, Wayland browser failures).

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.59.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0)** | Stable | Graduates v0.58 preview; includes core fixes for destination validation, MCP OAuth RFC 9207 compliance, and assorted bug fixes from the nightly train. |
| **[v0.60.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0-preview.0)** | Preview | `fix(core)`: improved destination validation & connection routing in web fetch utilities ([#29120](https://github.com/google-gemini/gemini-cli/pull/29120)); `fix(core)`: enforce RFC 9207 issuer identification in MCP OAuth flow ([#29120](https://github.com/google-gemini/gemini-cli/pull/29120)). |
| **[v0.61.0-nightly.20260909.ged2ac40df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260909.ged2ac40df)** | Nightly | `fix(core)`: mitigate NTFS 8.3 short-name (SFN) path collisions ([#29116](https://github.com/google-gemini/gemini-cli/pull/29116)); `fix(cli)`: isolate settings directory in sandbox containers ([#29216](https://github.com/google-gemini/gemini-cli/pull/29216)). |

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent recovery after `MAX_TURNS` reported as GOAL success | Silent misreporting hides failures; undermines trust in autonomous workflows. | 13 comments, 2👍 — `status/need-retesting`, `priority/p1` |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs indefinitely | Blocks all deferred work; users must disable subagents to proceed. | 8 comments, 8👍 — `priority/p1`, high user impact |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell command execution stuck at “Waiting input” after completion | Frequent false-positive hangs on trivial commands; breaks non-interactive automation. | 4 comments, 3👍 — `priority/p1`, `effort/medium` |
| **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** Leverage model’s bash affinity via zero-dependency sandboxing | Strategic direction: align tooling with model’s native POSIX strengths. | 9 comments, 1👍 — `priority/p2`, `effort/large`, epic scope |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** Assess AST-aware file reads, search, and mapping | Potential step-change in token efficiency and navigation precision. | 7 comments, 1👍 — `priority/p2`, investigation epic |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Gemini under-uses custom skills & sub-agents | Reduces value of extensibility surface; requires explicit prompting. | 6 comments — `priority/p2`, behavioral gap |
| **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** Deterministic redaction & reduced Auto Memory logging | Security: secrets enter model context before redaction; logging surface too wide. | 5 comments — `priority/p2`, `area/security` |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent fails on Wayland | Platform parity blocker for Linux/Wayland users. | 4 comments, 1👍 — `priority/p1`, `agent/browser` |
| **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`) | Configuration drift; users cannot tune browser agent behavior. | 3 comments — `priority/p2`, `status/need-retesting` |
| **[#21335](https://github.com/google-gemini/gemini-cli/issues/21335)** `/compress` not persistent across session resume | Token-saving feature lost on restart; undermines long-running workflows. | 2 comments, 2👍 — `priority/p2`, `effort/small` |

---

## 4. Key PR Progress (Last 24h)

| PR | Status | Summary |
|----|--------|---------|
| **[#29067](https://github.com/google-gemini/gemini-cli/pull/29067)** | Closed | `fix(a2a-server)`: removed misleading `securitySchemes` and hardcoded credentials; endpoints now correctly reflect unauthenticated local-dev design. |
| **[#29089](https://github.com/google-gemini/gemini-cli/pull/29089)** | Closed | `fix(core)`: forward `abortSignal` to `retryWithBackoff` in `BaseLlmClient`; enables cancellation for summary, compression, classifier calls. |
| **[#29088](https://github.com/google-gemini/gemini-cli/pull/29088)** | Closed | `fix(vscode-ide-companion)`: resolve `stop()` when MCP stream open; prevents extension deactivation hang. |
| **[#29087](https://github.com/google-gemini/gemini-cli/pull/29087)** | Closed | `fix(cli)`: prevent concurrent extension install races via `proper-lockfile`; avoids interleaved copies/metadata corruption. |
| **[#29063](https://github.com/google-gemini/gemini-cli/pull/29063)** | Closed | `fix(core)`: stop Plan Mode from waiting on user feedback in non-interactive (`-y`) sessions; unblocks CI/automation. |
| **[#29163](https://github.com/google-gemini/gemini-cli/pull/29163)** | Open | `fix(cli)`: prevent startup crash in git repos under macOS Seatbelt/restricted perms; guards `useGitBranchName` hook. |
| **[#29156](https://github.com/google-gemini/gemini-cli/pull/29156)** | Open | `fix(core)`: stop nullifying user `git config` (global/system) in shell executions; restores `user.name`, `user.email` visibility. |
| **[#29155](https://github.com/google-gemini/gemini-cli/pull/29155)** | Open | `fix(core)`: decode BOM-encoded content correctly in `isEmpty`; fixes false “non-empty” on UTF-16/32 plan files. |
| **[#29151](https://github.com/google-gemini/gemini-cli/pull/29151)** | Open | `fix(core)`: handle skill precedence & active state case-insensitively; resolves workspace/extension skill override bugs. |
| **[#29214](https://github.com/google-gemini/gemini-cli/pull/29214)** | Open | `fix(sandbox)`: harden filesystem boundaries — isolate runtime state, replace host dir mounts with sanitized configs, standardize `realpath` resolution. |
| **[#29252](https://github.com/google-gemini/gemini-cli/pull/29252)** | Closed | `fix(core)`: preserve explicit versioned Flash model IDs; stops silent remapping to 3.5 Flash rollout default. |
| **[#29253](https://github.com/google-gemini/gemini-cli/pull/29253)** | Closed | Auto-generated changelog for **v0.59.0** release. |

---

## 5. Feature Request Trends

1. **AST-aware tooling** — Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)) push for surgical, token-frugal code navigation via AST-based read/search/map.
2. **Persistent, file-based task tracking** — Replace in-context `WriteToDo` with CRUD task files ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)) to survive context rot and session boundaries.
3. **Subagent observability & control** — Trajectory sharing via `/chat share` ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), bug-report inclusion ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and explicit lifecycle management.
4. **Auto Memory hardening** — Deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), low-signal session quarantine ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), invalid patch surfacing ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
5. **Sandbox & security maturation** — Zero-dependency OS sandboxing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)), browser profile lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), filesystem boundary hardening ([#29214](https://github.com/google-gemini/gemini-cli/pull/29214)).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Agent hangs / silent stalls** | Generalist agent ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), browser agent on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), Plan Mode in non-interactive ([#29063](https://github.com/google-gemini/gemini-cli/pull/29063)), shell “Waiting input” false positives ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)). |
| **Subagent trust & visibility** | Misreported GOAL success ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), under-utilization of skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)), no trajectory access ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), missing context in bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)). |
| **Shell/git integration quirks** | Git config nullified in every shell ([#29156](https://github.com/google-gemini/gemini-cli/pull/29156)), symlinked agents not recognized ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), tmp script sprawl ([#23571](https://github.com/google-gemini/gemini-cli/issues/2

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-09

---

## 1. Today's Highlights

Vim mode has officially shipped to all users in v1.0.84-2, addressing the #1 community request (Issue #13, 76 👍). Two patch releases in 24 hours also fixed MCP OAuth reliability during session startup and improved `/copy` to include task completion messages. Meanwhile, several high-impact regressions surfaced in v1.0.83/v1.1.15: Windows users cannot create new Local sessions without archiving existing ones (#4756, 19 👍), session resume cancels in-flight MCP connections (#4753), and a FileWatch loop can freeze the TUI while ballooning debug logs to 13 GB (#4612).

---

## 2. Releases

### v1.0.84-3 (2026-09-09)
**Fixed**
- `/copy` now includes task completion messages when available
- OAuth-authenticated MCP servers connect reliably during session startup

### v1.0.84-2 (2026-09-08)
**New**
- **Vim mode** generally available — enable with `/vim` or set `editorMode: vim` for modal editing in the composer with live mode indicator

**Improved**
- On supported Windows sandbox policies, interactive shell commands now record blocked accesses

---

## 3. Hot Issues (Top 10 by Community Impact)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#4756](https://github.com/github/copilot-cli/issues/4756)** Windows: must archive every idle project session before creating a new Local session | Blocks parallel workflows on Windows; regression in v1.1.15 | 19 👍, 6 comments — high urgency for Windows devs |
| **[#13](https://github.com/github/copilot-cli/issues/13)** CLI input should have vi/vim input mode | **Now CLOSED** — delivered in v1.0.84-2 | 76 👍, 11 comments — most-upvoted issue historically |
| **[#4612](https://github.com/github/copilot-cli/issues/4612)** Runaway FileWatch loop freezes TUI, grows debug log to 13 GB | Stability/crash risk for long-running sessions | 9 comments, 1 👍 — severe resource leak |
| **[#4742](https://github.com/github/copilot-cli/issues/4742)** Cannot create second Local session while one is running | Desktop app 1.1.15 regression blocking concurrent sessions | 10 comments, 5 👍 |
| **[#4664](https://github.com/github/copilot-cli/issues/4664)** JS heap OOM when resuming long-standing session | Memory management issue for heavy users | 7 comments, 2 👍 |
| **[#4753](https://github.com/github/copilot-cli/issues/4753)** v1.0.83: session resume cancels in-flight stdio MCP connections (~1s timeout vs ~16s in v1.0.82) | Breaks MCP server availability on resume | 3 comments, 1 👍 |
| **[#2943](https://github.com/github/copilot-cli/issues/2943)** OpenRouter integration | Demand for multi-provider model routing | 14 👍, 3 comments |
| **[#4757](https://github.com/github/copilot-cli/issues/4757)** `--yolo`/`--allow-all` blocked by fail-closed bypass on accounts with NO managed policy | Permissions regression affecting power users | 3 comments |
| **[#2861](https://github.com/github/copilot-cli/issues/2861)** Compaction failed: empty response from model (3× retry, Opus 4.6) | `/compact` reliability on Claude Opus 4.6 | 4 👍, 6 comments |
| **[#4775](https://github.com/github/copilot-cli/issues/4775)** Mission Control dashboard links 404: `/copilot/tasks/<uuid>` vs actual `/agents/tasks/<uuid>` | Broken UX for remote session navigation | 2 comments, filed today |

---

## 4. Key PR Progress

| PR | Status | Summary |
|----|--------|---------|
| **[#4770](https://github.com/github/copilot-cli/pull/4770)** | OPEN | Documents WebSocket responses opt-out — escape hatch when WS transport fails or causes `400 input item ID` errors |
| **[#4761](https://github.com/github/copilot-cli/pull/4761)** | CLOSED | Installer now correctly reports unsupported OS (e.g., FreeBSD) instead of misleading "Windows detected but winget not found" |
| **[#4100](https://github.com/github/copilot-cli/pull/4100)** | CLOSED | Security-related changes (details not disclosed in summary) |

*Note: Only 3 PRs updated in last 24h — light contribution day.*

---

## 5. Feature Request Trends

1. **Modal editing parity** — Vim mode delivered (#13), but users now ask for TODO sidebar visibility (#1724, 11 👍) and deeper editor integration
2. **MCP ecosystem maturity** — Profiles (#2235), authenticated registry reads (#3772), cancellation support (#4759), OAuth scope fixes (#4582), and OpenRouter integration (#2943)
3. **Session resilience** — Compaction reliability (#2861), orphaned state cleanup (#2836), stale connection IDs (#4505), and session wedge recovery (#4755)
4. **Windows parity** — Sandbox improvements shipping, but Local session concurrency (#4756, #4742) and Git config leakage (#4531) remain
5. **Multi-model flexibility** — OpenRouter (#2943), Gemini MCP schema support (#4623), and WebSocket transport opt-out (#4770)

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **Session management fragility** | OOM on resume (#4664), MCP connection cancellation (#4753), stale connection IDs (#4505), permanent wedge state (#4755), orphaned folders (#2836) |
| **Windows-specific regressions** | Local session concurrency blocked (#4756, #4742), Git config leakage breaking VS Code launch (#4531), notification badge ghost count (#4381), taskbar spinner stuck (#4771) |
| **Resource leaks in long sessions** | FileWatch loop → 13 GB logs + frozen TUI (#4612), TUI CPU hogging idle (#4750), macOS MallocStackLogging noise (#4614) |
| **Permissions system overreach** | Fail-closed bypass blocks `--yolo` on unmanaged accounts (#4757), `allow-all` resets after inactivity (#4696) |
| **MCP integration gaps** | No cancellation requests (#4759), OAuth scope missing for Entra ID (#4582), union-type array items break Gemini (#4623), no profile support (#2235) |
| **Search tooling reliability** | Built-in grep/code-search stalls for minutes (#4448) |
| **Config discovery broken outside repo root** | `.mcp.json`/hooks not read from workspace directories (#4765) |
| **Mission Control UX gaps** | Dashboard 404 links (#4775), no TODO visibility (#1724), `/ask` silent failures (#4253) |

---

*Data sourced from github.com/github/copilot-cli — releases, issues, and PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-09

## 1. Today's Highlights
No new releases in the last 24 hours. Community activity centers on a closed VSCode extension enhancement request (#1270) prioritizing open files in `@` mentions, and an open PR (#2595) hardening the `StrReplaceFile` tool against binary/non-UTF-8 file corruption. Both reflect ongoing focus on editor integration polish and tooling safety.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues
| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1270](https://github.com/MoonshotAI/kimi-cli/issues/1270) | **VSCode extension: `@` should prioritize already-open files** (CLOSED) | Improves developer ergonomics—most `@` references target the file currently being edited. Reduces friction in the core “chat-with-code” loop. | 1 comment, 0 👍; closed without merge indication (likely addressed elsewhere or deferred). |

*Only 1 issue updated in the last 24h.*

## 4. Key PR Progress
| # | Title | Status | Description |
|---|-------|--------|-------------|
| [#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595) | **fix(StrReplaceFile): refuse to edit files that are not valid UTF-8** | OPEN | Prevents silent corruption when `StrReplaceFile` reads a binary or non-UTF-8 file, replaces invalid bytes with `U+FFFD`, and writes them back. Now aborts with a clear error instead. Resolves [#2591](https://github.com/MoonshotAI/kimi-cli/issues/2591). |

*Only 1 PR updated in the last 24h.*

## 5. Feature Request Trends
From the single updated issue, the dominant request direction is **editor-centric UX improvements**—specifically, making the VSCode extension context-aware (open files, active editor) to reduce keystrokes and cognitive load during AI-assisted coding.

## 6. Developer Pain Points
- **Tool safety**: Silent data corruption when editing non-text files (addressed by #2595).  
- **Context discovery friction**: Having to search for already-open files in `@` menus (raised in #1270).  

*Low overall activity in the last 24h; these pain points are inferred from the two updated items.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-09

---

## 1. Today's Highlights

OpenCode v1.18.30 shipped with GPT-6 Astra system prompt support and critical Bedrock/Azure/OpenAI provider SDK fixes. The community is actively tackling a **13 GB unbounded SQLite event-table growth** issue (#33356) affecting long-running instances, while new Bedrock Astra image-handling bugs (#48069) and MCP OAuth failures on Windows (#44700) surfaced today. Real-time token-rate display (tok/s) in the TUI has emerged as a top-requested feature across three fresh issues.

---

## 2. Releases

### v1.18.30
- **Core**: Added Astra system prompt for GPT-6 models.
- **Bugfixes**: Preserved Bedrock DeepSeek model IDs (including ARN-based) for correct resolution; updated Azure and OpenAI provider SDKs for compatibility fixes.

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#33356](https://github.com/anomalyco/opencode/issues/33356) | **Unbounded `event` table growth (13 GB+)** — SQLite store never prunes `message.updated.1` snapshots, filling volumes to 97–99% | **Critical operational blocker** for long-lived servers; 28 comments, 9👍 | High urgency; users report production disk-pressure incidents |
| [#9532](https://github.com/anomalyco/opencode/issues/9532) | **Frequent tool-calling errors with Claude** — model attempts unavailable tools (`ProxyRead`, `ProxyGlob`) | Breaks core agent loop reliability for Claude users | 8 comments, 4👍; closed but root cause may persist |
| [#44700](https://github.com/anomalyco/opencode/issues/44700) | **MCP remote server OAuth token exchange fails on Windows** — “Existing OAuth client information required” | Blocks Windows users from authenticating remote MCP servers | 3 comments; PR #48076 targets this |
| [#48069](https://github.com/anomalyco/opencode/issues/48069) | **Bedrock GPT-6 Astra rejects images in `toolResult`** after `read` tool returns PNG | New regression in v1.18.30; breaks image-read workflows | 2 comments; PR #48070 opened same day |
| [#48067](https://github.com/anomalyco/opencode/issues/48067) | **No live tok/s indicator in TUI** — no API for plugins to expose streaming speed | High-demand UX parity with Hermes/DeepSeek agents | 2 comments; mirrors #47914 |
| [#47914](https://github.com/anomalyco/opencode/issues/47914) | **Real-time token generation speed (tok/s) in TUI status bar** | Same as above; users want Hermes-style live metrics | 2 comments; strong community pull |
| [#48075](https://github.com/anomalyco/opencode/issues/48075) | **Dictation & TTS feature request** (like Antigravity) | Accessibility & hands-free coding workflow | 2 comments; paid subscriber request |
| [#48073](https://github.com/anomalyco/opencode/issues/48073) | **Gemini rejects MCP tools with nullable array schemas** — breaks all requests when `@sylphx/pdf-reader-mcp` enabled | Schema validation blocks entire model interaction | 1 comment; MCP ecosystem friction |
| [#36289](https://github.com/anomalyco/opencode/issues/36289) | **Subagent model config ignored** — all subagents use primary model | Undermines multi-agent specialization | 2 comments, 1👍; closed but may need verification |
| [#36326](https://github.com/anomalyco/opencode/issues/36326) | **Misleading conversation persistence claims** — AI told user “continue” would resume, but sessions start fresh | Trust/UX issue; sets wrong expectations | 2 comments; closed |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#48076](https://github.com/anomalyco/opencode/pull/48076) | Fix | **MCP: reuse OAuth client registration** — addresses #44700 Windows token-exchange failure |
| [#48070](https://github.com/anomalyco/opencode/pull/48070) | Fix | **Hoist Bedrock Astra tool-result images** — moves images to user-level messages; closes #48069 |
| [#48074](https://github.com/anomalyco/opencode/pull/48074) | Fix | **Drop retained-tail reference from compaction rules** — prevents summarizer from assuming access to future messages |
| [#48058](https://github.com/anomalyco/opencode/pull/48058) | Fix | **Trim compaction summary prompt** — cuts 30k-char summaries that retained file lists, changelogs, conventions |
| [#47874](https://github.com/anomalyco/opencode/pull/47874) | Feat | **Add Alibaba inference provider** — Chat Completions, Messages, Responses APIs with regional hosts |
| [#48043](https://github.com/anomalyco/opencode/pull/48043) | Refactor | **Remove message content mutation API** — drops `PATCH /session/:id/message/:id` and `Session.updateMessage` |
| [#48060](https://github.com/anomalyco/opencode/pull/48060) | Refactor | **Use acorn typed AST in interpreter** — eliminates ~160 manual node-access helpers |
| [#48072](https://github.com/anomalyco/opencode/pull/48072) | Refactor | **Define built-in globals as HostFunction/HostNamespace** — declarative interpreter dispatch |
| [#46723](https://github.com/anomalyco/opencode/pull/46723) | Fix | **Stabilize optimistic prompt position** — measures timeline tail before paint to prevent jump |
| [#48068](https://github.com/anomalyco/opencode/pull/48068) | Feat | **Global menu commands for session/project management** — available from every page including home |

---

## 5. Feature Request Trends

1. **Live token-rate telemetry** — Three issues (#48067, #47914, plus plugin API request) demand real-time tok/s in TUI status bar and plugin-accessible usage deltas.
2. **Voice/accessibility tooling** — Dictation + TTS (#48075) and thinking-block toggle (#31907) signal push for hands-free and cognitive-load reduction.
3. **Session/project management UX** — Global commands (#48068), part deletion (#44984), and context-window exposure API (#36262) reflect desire for finer-grained session control.
4. **MCP/OAuth hardening** — Windows token exchange (#44700), client registration reuse (#48076), and schema compatibility (#48073) show MCP integration maturing but still fragile.

---

## 6. Developer Pain Points

- **Storage bloat**: Event-sourcing table grows unbounded (13 GB+), no retention/compaction — #33356 is the top operational fire.
- **Provider-specific breakage**: Bedrock Astra image handling (#48069), DeepSeek output limit override (#38232), Gemini schema strictness (#48073), Kimi reasoning_content handling (#36316).
- **Subagent model isolation broken** — configured models ignored (#36289).
- **Compaction instability** — double-firing, terminated stubs, budget under-compression (#48065).
- **Conversation persistence mismatch** — AI claims vs. reality (#36326).
- **Desktop/TUI friction**: Ctrl-C copy/SIGINT conflict (#36271), mouse-tracking toggle missing (#36266), code-block rendering regression (#36291), Git panel stuck on main worktree (#36301).

---

*Generated from anomalyco/opencode GitHub data (releases, issues, PRs updated 2026-09-09).*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-09

## 1. Today's Highlights
The Pi codebase saw a flurry of provider-side fixes and TUI polish today. Critical auth regressions for **opencode-go** (missing `x-opencode-session` header) and **Anthropic OAuth usage reporting** were resolved, while the TUI gained Orca terminal image support and fixed a CapsLock input corruption bug on Windows/WSL. Startup performance remains a top concern, with a new PR proposing lazy extension loading to shave ~4s off cold starts.

---

## 2. Releases
*No new releases in the last 24 hours.*

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#9230](https://github.com/earendil-works/pi/issues/9230) | **opencode-go requires `x-opencode-session` header** | Breaking change from OpenCode Go (effective 2026-09-06); all Pi requests to this provider now fail without the header. | 6 comments, 1 👍 — **Closed** (fixed in PR #9326) |
| [#9326](https://github.com/earendil-works/pi/issues/9326) | **`@earendil-works/pi-ai` never sends `x-opencode-session`** | Same root cause as #9230 but in the standalone AI package; blocks OpenCode Zen free tier. | 2 comments — **Open, in progress** |
| [#9302](https://github.com/earendil-works/pi/issues/9302) | **Out-of-loop summarization misses provider headers → 400 MissingSessionID** | Compaction/summarization on opencode-family providers fails deterministically; affects extension-driven and native paths. | 3 comments — **Open, in progress** |
| [#9362](https://github.com/earendil-works/pi/issues/9362) | **CapsLock inserts garbage in VSCode terminal (WSL)** | Core input handling bug; reproduces under `pi -ne`, not extension-related. Impacts Windows/WSL developers heavily. | 2 comments — **Closed** |
| [#9363](https://github.com/earendil-works/pi/issues/9363) | **TUI crash: `couldBeEmoji` dereferences undefined segment** | Regression in 0.85.1; guard added in #8367 was lost. Crashes during completion rendering. | 1 comment — **Closed** |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | **Fullscreen mode wheel scrolling 3× slower** | UX regression: users switching to fullscreen for fixed input box face severe scroll lag. | 7 comments, 3 👍 — **Open** |
| [#7739](https://github.com/earendil-works/pi/issues/7739) | **Startup-time budget targeting jcode-comparable latency** | Explicit performance goal: close the gap measured by jcode’s benchmark (Pi 0.62.0 vs jcode v0.9.1888). | 4 comments — **Open** |
| [#9360](https://github.com/earendil-works/pi/issues/9360) | **Lazy/deferred extension package loading** | Eager loading of ~9 packages costs ~4.2s CPU time at startup; proposal to load on first use. | 1 comment — **Closed** (PR likely forthcoming) |
| [#8823](https://github.com/earendil-works/pi/issues/8823) | **Esc during streaming fails to cancel in-flight request** | Abort registered but HTTP request continues until provider finishes; turn persists with `stopReason: "aborted"` only after natural completion. | 10 comments — **Closed** |
| [#7444](https://github.com/earendil-works/pi/issues/7444) | **WebSocket retry only handles two error codes** | Other `response.failed` errors hard-stop the turn; limits resilience of `openai-codex-responses` transport. | 10 comments — **Closed** |

---

## 4. Key PR Progress (10 Important)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#9351](https://github.com/earendil-works/pi/pull/9351) | **Fix edit preview flicker on remote edits** | Tool row briefly shows red "Could not edit file" before remote diff arrives; eliminates visual glitch. | Open |
| [#9350](https://github.com/earendil-works/pi/pull/9350) | **Fork-free executable lookup in `findExecutableOnPath` / `commandExists`** | Replaces `which`/`--version` spawns with pure-JS PATH resolution; avoids fork deadlocks on Android/multi-threaded hosts. | Closed |
| [#9345](https://github.com/earendil-works/pi/pull/9345) | **Expose Anthropic OAuth usage reports** | Adds `Models.getUsageReport("anthropic")` with 5-min cached, token-partitioned OAuth usage endpoint. | Closed |
| [#9344](https://github.com/earendil-works/pi/pull/9344) | **Owner-safe UI overrides (themes, footers, editors)** | Object-identity ownership prevents stale releases from hijacking UI; explicit theme selection clears temp ownership. | Closed |
| [#9337](https://github.com/earendil-works/pi/pull/9337) | **Bound Case 3 compaction estimate & context display on failed turns** | Ports three downstream compaction fixes: narrows Case 3 trigger, fixes `getContextUsage` on aborted turns. | Closed |
| [#9329](https://github.com/earendil-works/pi/pull/9329) | **Detect Orca terminals as Kitty-image capable** | Adds `TERM_PROGRAM=Orca` to capability detection; enables inline images, true color, OSC 8 links in Orca. | Open |
| [#9319](https://github.com/earendil-works/pi/pull/9319) | **Guard optional `invalidate` in `MouseRegion`** | Fixes crash when custom extension components lack `invalidate()` method during theme change/redraw. | Closed |
| [#9316](https://github.com/earendil-works/pi/pull/9316) | **Three easy fixes (#8919, #8717, #8720)** | Allows zero-row custom footers in fullscreen; fixes two other small bugs bundled for review convenience. | Closed |
| [#6881](https://github.com/earendil-works/pi/pull/6881) | **Use provider-reported cost when responses include it** | Reads `usage.cost` / `cost_details.upstream_inference_cost` from OpenAI/Vertex/Vercel AI Gateway; falls back to catalog rates. | Open, in progress |
| [#8627](https://github.com/earendil-works/pi/pull/8627) | **Use `ctx.cwd` for cwd-sensitive tools** | Makes `read`/`write`/`edit`/`grep`/etc. resolve paths against extension context's real session cwd. | Closed |

---

## 5. Feature Request Trends
From the issue stream, four clear directions emerge:

1. **Provider parity & auth hardening** — Multiple issues (#9230, #9326, #9302, #9338) show providers (OpenCode, Kimi, Anthropic) evolving auth/header requirements faster than Pi adapts. Community wants a **provider capability/version matrix** and **automated conformance tests**.
2. **TUI/UX polish for power users** — Fullscreen scroll performance (#9052), compaction block interaction (#9356), model picker pricing/context (#9355), and hardware cursor handling (#9339) indicate heavy TUI daily drivers demanding parity with GUI editors.
3. **Startup & memory budgets** — #7739 sets explicit latency/memory targets vs jcode; #9360 proposes lazy extension loading. This is now a **tracked engineering goal**, not just a wish.
4. **Extension API maturity** — #9236 (acknowledged user-turn delivery), #8718 (steer/follow_up events), #5581 (before_agent_start bypass) reveal extension authors hitting event-loop gaps. Demand for **idempotent, observable extension hooks** is rising.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Provider auth/header drift** | High (4+ issues in 24h) | #9230, #9326, #9302, #9338 — providers add required headers (OpenCode session ID, Kimi Responses API) without notice; Pi breaks silently. |
| **Streaming abort reliability** | Medium | #8823, #8125 — Esc/abort doesn’t kill in-flight HTTP/WebSocket; session falls back to SSE or hangs. |
| **TUI rendering regressions** | Medium | #9363 (crash), #9357 (resize jumble), #9339 (detached cursor), #9052 (scroll lag) — regressions slip into releases. |
| **Windows/WSL shell resolution** | Medium | #9361 (non-deterministic `shellPath` ignore with extensions), #9362 (CapsLock garbage) — Windows remains a second-class citizen. |
| **Extension load-time cost** | Growing | #9360 (4.2s module loading), #7739 (startup budget) — monorepo growth makes eager loading unsustainable. |
| **Compaction/context accounting bugs** | Persistent | #9337, #9302, #9212 — token accounting, compaction triggers, and summary auth headers repeatedly misbehave on failed/aborted turns. |

---

*Digest generated from `earendil-works/pi` GitHub activity (2026-09-08 → 2026-09-09). All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-09

## 1. Today's Highlights
- **v0.23.2-preview.0** shipped with a CI fix isolating subprocess-heavy E2E tests from fork pressure (#11388).  
- **v0.23.1** landed as a stable release, retiring the `@qwen-code/webui` package (breaking change) and bundling CLI fixes for managed memory respecting `memory.enableManagedAutoMemory`.  
- Active discussions around **SQLite-backed session persistence** (#11433) and **optional external persistence for self-hosted deployments** (#11440) signal architectural scaling priorities.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.23.2-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.2-preview.0) | Preview | `fix(ci)`: isolate subprocess-heavy E2E from fork pressure ([#11388](https://github.com/QwenLM/qwen-code/pull/11388)) |
| [v0.23.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1) | Stable | **Breaking**: retire `@qwen-code/webui` ([#9812](https://github.com/QwenLM/qwen-code/pull/9812)); managed memory now respects `memory.enableManagedAutoMemory`; bundled in SDK TypeScript [v0.1.9](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.9) & [v0.1.10](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.10) |

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) Migrate TUI from ink → OpenTUI | Structural flicker/rendering debt in current ink+React stack; tracking issue with 33 comments | High engagement; long-standing technical debt |
| [#11439](https://github.com/QwenLM/qwen-code/issues/11439) LSP returns stale content after on-disk edits | Breaks hover/go-to-definition reliability in real workflows | New, 2 comments; core editor trust issue |
| [#11433](https://github.com/QwenLM/qwen-code/issues/11433) SQLite for session/prompt indexing | Design discussion for scaling history, replay, reconnect at scale | 2 comments; architectural direction |
| [#11440](https://github.com/QwenLM/qwen-code/issues/11440) Optional external persistence for self-hosted | Enables multi-instance, operator-managed DBs while keeping zero-config default | 1 comment; deployment flexibility |
| [#11328](https://github.com/QwenLM/qwen-code/issues/11328) Provider-configured reasoning edge cases | Follow-up to #10999; unblocks advanced model-switching scenarios | Blocked, 3 comments; model-inference roadmap |
| [#10530](https://github.com/QwenLM/qwen-code/issues/10530) 400 sampler init failure in 0.22.3 (llama-server) | Regression affecting local model users; closed but root cause relevant | 7 comments; closed after fix |
| [#10435](https://github.com/QwenLM/qwen-code/issues/10435) Same sampler crash on llama-server | Duplicate of #10530; confirms regression scope | 6 comments, 1 👍; closed |
| [#11432](https://github.com/QwenLM/qwen-code/issues/11432) Localize rewind preflight errors in VS Code/web-shell | UX polish: i18n + suppress abort toasts from #11171 | 2 comments; deferred review item |
| [#11438](https://github.com/QwenLM/qwen-code/issues/11438) Deferred review findings from PR #11297 | CI resilience: retry failed E2E checkout after workspace reset | Auto-filed; 0 comments; CI hardening |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) Fleet Shepherd Dashboard | Auto-maintained fleet health dashboard; last tick 2026-09-09T04:10:09Z | 3 comments; infra visibility |

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|----|--------|---------|
| [#11435](https://github.com/QwenLM/qwen-code/pull/11435) | Open | **Security**: bump `sharp` to 0.35.4 to resolve high-severity libheif CVE |
| [#11380](https://github.com/QwenLM/qwen-code/pull/11380) | Open | **Web-shell UX**: move hover timestamp off message text (fixes clipping); opaque background, fixed clock for captures |
| [#11421](https://github.com/QwenLM/qwen-code/pull/11421) | Open | **Web-shell resilience**: workspace provider guard now self-diagnoses and reloads on root retry |
| [#11351](https://github.com/QwenLM/qwen-code/pull/11351) | Closed | **CLI stability**: cap background-notification queue (max 20), report dropped items to model |
| [#11169](https://github.com/QwenLM/qwen-code/pull/11169) | Open | **Security/UX**: close trust-gate & bystander gaps in local-files bridge (follow-up to #10962) |
| [#10410](https://github.com/QwenLM/qwen-code/pull/10410) | Open | **Core perf**: preserve prompt cache for deferred tools via two-step `tool_search`/`tool_call` bridge |
| [#10906](https://github.com/QwenLM/qwen-code/pull/10906) | Open | **Web-shell observability**: surface shell & monitor task output in task detail panel |
| [#10183](https://github.com/QwenLM/qwen-code/pull/10183) | Open | **Memory system**: structured on-demand recall (ref/title tree, query-focused subtree, dedicated tool) |
| [#11348](https://github.com/QwenLM/qwen-code/pull/11348) | Closed | **Tooling**: enable built-in `web_search` by default on ModelStudio Standard/Token Plan |
| [#11381](https://github.com/QwenLM/qwen-code/pull/11381) | Open | **Refactor**: remove obsolete block streaming, chunk-size, idle-flush, alternate paragraph sender |

## 5. Feature Request Trends
1. **Session persistence & indexing at scale** — SQLite embedded store (#11433) + optional external DB for self-hosted (#11440) indicate a push toward enterprise-grade history management.
2. **TUI modernization** — Full migration from ink to OpenTUI (#8662) to eliminate rendering debt.
3. **Structured memory/recall** — On-demand, query-focused recall replacing flat prompts (#10183).
4. **Web-shell parity & observability** — Task output visibility (#10906), session navigation (#11238), subagent gating (#11434), hover fixes (#11380).
5. **Provider-agnostic reasoning** — Edge-case handling for model-switching and reasoning configs (#11328).

## 6. Developer Pain Points
- **Local model integration fragility**: Sampler initialization failures on llama-server in 0.22.3 (#10530, #10435) — regression eroding trust in local inference path.
- **LSP stale-content bug** (#11439): Hover/go-to-definition shows outdated types after disk edits — core editor reliability gap.
- **CI flakiness**: macOS E2E shard deaths (#11134), fork pressure on subprocess tests (#11388), checkout retries (#11438) — CI stability consuming maintainer bandwidth.
- **Web-shell trust/UX gaps**: Local-files bridge trust-gate (#11169), hover timestamp clipping (#11380), subagent details race (#11434).
- **Startup crashes on unwritable config** (#10455): Unhandled write to output-language file blocks launch in restricted environments.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-09

## 1. Today's Highlights
The project is in active feature development with **9 issues updated** and **3 PRs in progress** over the last 24 hours. No new release shipped, but PR #6002 is staging the **Codewhale 0.9.13** integration—including provider catalog pagination, OpenRouter vendor selection, and pricing validation. Core themes: **provider cost transparency**, **OpenRouter vendor pinning**, **session/token observability**, and **fleet sub-agent reliability**.

---

## 2. Releases
**No new releases in the last 24h.**  
The next candidate (0.9.13) is being validated in PR #6002.

---

## 3. Hot Issues (Top 10 by Impact & Recency)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| 1 | **[#5976] Cost shows "unknown" on Concentrate — incomplete provider billing/pricing coverage** | Founder-reported: a cataloged, routable provider returns no cost data, breaking trust in the metrics strip. Indicates systemic gaps in pricing guardrails across providers. | 👍 0 • 2 comments • Author: Hmbown (owner) |
| 2 | **[#6007] feat(openrouter): native vendor selection for OpenRouter models** | OpenRouter routes models across multiple upstream vendors; users need first-class vendor pinning (quality/latency/family behavior) without manual model-string hacks. | 👍 0 • 2 comments • External contributor |
| 3 | **[#6009] /models command returns only partial model list — missing pagination support** | Single-page `GET /v1/models` drops models when providers exceed default page size (OpenAI-style cursor pagination). Blocks discovery for large catalogs. | 👍 0 • 2 comments • Author: nsfoxer |
| 4 | **[#6011] feat(tui): usage & tool diagnostics — token accounting, cache hit rate, per-tool sinks, compaction cost** | Session cost/context is a black box; no historical view to answer “where did tokens/money go last week”. Critical for cost governance and debugging. | 👍 0 • 1 comment • External contributor |
| 5 | **[#6015] feat(fleet): adaptive anti-stall + wider read-only shell grammar (defaults, not per-user config)** | Read-only sub-agents (Scout/Planner/Reviewer) stall and burn tokens on defaults; fix must be zero-config. Affects fleet reliability out-of-the-box. | 👍 0 • 1 comment • External contributor |
| 6 | **[#6014] feat(tui): Session Picker UX — hide empty auto-sessions, highlight current, page-scroll, widen pane** | Four usability gaps clutter the picker (`Ctrl-R`/`/sessions`), eroding trust and navigation speed. | 👍 0 • 1 comment • External contributor |
| 7 | **[#6013] feat(goal): goal gates — independent verification of complete/blocked, needs_input/deferred/stalled, post-verify stage** | Goal loop trusts model self-report; needs resilient, config-optional gates for production-grade persistent objectives. | 👍 0 • 1 comment • External contributor |
| 8 | **[#4168] Architecture D-4: add user-defined models config section (`[[models]]`)** | Long-standing request (Jul 2026): users want to define local/private/custom models without editing compiled catalogs. | 👍 0 • 1 comment • Author: Hmbown |
| 9 | **[#2955] CLOSED: v0.8.56 — Align OpenAI Codex provider usage telemetry with Codex CLI** | Closed after alignment work; enables fair comparison (cached input tokens, reasoning output tokens). | 👍 0 • 1 comment • Author: Hmbown |

---

## 4. Key PR Progress (All 3 Open PRs)

| # | PR | Summary | Status |
|---|----|---------|--------|
| 1 | **[#6002] Integrate Codewhale 0.9.13 contributor fixes and release verification** | Rolls up provider catalog pagination + exact routing, OpenRouter vendor selection, output limits, pricing validation. Release-blocking integration. | Open • Updated 2026-09-09 • Author: Hmbown |
| 2 | **[#6012] fix(session): skip runtime handoffs when deriving the auto title** | Auto-generated session titles were leaking internal runtime envelopes (`<codewhale:runtime_event kind="operate_contract"...>`). Fixes chat-template compatibility. | Open • Updated 2026-09-08 • Author: SparkofSpike |
| 3 | **[#5982] feat(tui): confirmed opt-out for model-bound key redaction (`[redaction] model_bound`)** | Mandatory credential redaction breaks dev workflows (e.g., pasting API keys into browser extensions). Adds opt-out with confirmation. | Open • Updated 2026-09-08 • Author: SparkofSpike |

---

## 5. Feature Request Trends (Distilled from All Issues)

| Theme | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Provider cost & pricing transparency** | #5976 (unknown cost), #6011 (historical token accounting) | High — founder + external |
| **OpenRouter vendor control** | #6007 (native vendor selection) | High — external contributor |
| **Catalog completeness & pagination** | #6009 (models pagination), #4168 (user-defined models) | High — multiple external |
| **Fleet/sub-agent reliability** | #6015 (anti-stall defaults), #6013 (goal gates) | Medium — external contributor |
| **Session & context observability** | #6011 (diagnostics), #6014 (session picker UX), #6012 (title fix) | Medium — mixed |
| **Redaction flexibility** | #5982 (opt-out for model-bound keys) | Low — single PR |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **“Cost: unknown” on cataloged providers** — Users expect pricing metadata for every routable model; missing data breaks budgeting and trust (#5976).
2. **No vendor pinning on OpenRouter** — Forced to hack model strings; first-class vendor selection is absent (#6007).
3. **Incomplete model discovery** — `/models` silently truncates at page 1; large provider catalogs are partially invisible (#6009).
4. **No historical token/cost analytics** — Session-scoped live panels only; cannot audit weekly spend or cache efficiency (#6011).
5. **Read-only fleet agents stall by default** — Scout/Planner/Reviewer burn tokens without per-user config fixes (#6015).
6. **Session picker noise** — Empty auto-sessions clutter `Ctrl-R`; no highlight for current session; no paging (#6014).
7. **Goal loop trusts model self-report** — No independent verification of completion/blocked/stalled states (#6013).
8. **Over-aggressive key redaction** — Blocks legitimate dev workflows (pasting generated API keys) with no opt-out (#5982).

---

*Data source: `github.com/Hmbown/DeepSeek-TUI` (issues/PRs mirrored under `Hmbown/Codewhale`). Digest covers activity updated 2026-09-08 → 2026-09-09.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*