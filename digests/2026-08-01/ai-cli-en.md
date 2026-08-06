# AI CLI Tools Community Digest 2026-08-01

> Generated: 2026-08-01 03:36 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-08-01)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **mature, enterprise-backed platforms** (Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI) shipping frequent patches and managing complex entitlement/billing integrations, and **emerging/community-driven tools** (OpenCode, Qwen Code, Pi, CodeWhale, Kimi) iterating rapidly on agent architecture, session durability, and provider-agnostic designs. Windows/WSL stability, quota-metering accuracy, and cross-device session continuity are the three systemic friction surfaces affecting nearly every tool. Release cadences range from multiple daily alphas (Codex) to weekly stable patches (Gemini, Copilot CLI), signaling a shift from "model-centric" to "platform-centric" competition.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Release Notes |
|------|---------------------|-------------------|----------------|---------------|
| **Claude Code** | 10 hot + recurring | 6 | ❌ None | Critical bugs block Max subscribers & Windows users |
| **OpenAI Codex** | 10 hot | 10 (all closed) | ✅ 3 alphas | `rust-v0.147.0-alpha.1.1` → `.4`; rapid stabilization |
| **Gemini CLI** | 10 hot | 10 | ✅ 3 patches | v0.53.1 / v0.54.0-preview.1 / v0.55.0-nightly (same fix) |
| **GitHub Copilot CLI** | 10 hot | 2 | ✅ v1.0.78-0 | `/permissions`, ACP `closeSession`, `allowDevToolCaches` |
| **Kimi Code CLI** | 4 | 1 | ❌ None | Feature requests dominate (Remote Control, Memory) |
| **OpenCode** | 10 hot | 10 (merged/advanced) | ❌ None | Background jobs, air-gap mode, deduplication, send-key config |
| **Pi** | 26 | 50 | ❌ None | Compaction, JSON O(n²), model-refresh, Baseten, server backend |
| **Qwen Code** | 10 hot | 10 | ✅ v0.21.2 | Autofix round limits; session branching & Web Shell in PR |
| **CodeWhale** | 8 hot | 10 | ✅ v0.9.3 | Rebrand, DeepSeek V4 Flash, canonical tooling, dep cleanup |
| **Grok Build** | 0 | 0 | ❌ None | No activity |

**Note:** "Issues Updated" = items in Hot Issues table; "PRs Updated" = items in Key PR Progress table.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Requesting | Specific Needs |
|-------------|------------------|----------------|
| **Cross-device session continuity** | Claude Code (#1 voted), Kimi Code (#1282), Copilot CLI (ACP session lifecycle), Pi (server backend + remote client), Qwen Code (session branching) | Sync conversation history across CLI/Desktop/Web; resume on mobile/tablet; fork from any conversation point |
| **Windows/WSL first-class support** | Codex (5/10 hot issues), Claude Code (GPU crash), Copilot CLI (ReFS/Dev Drive, V8 limit), OpenCode (silent crash, nushell), CodeWhale (AltGr, PATH), Qwen Code (ConPTY/WSL redraw) | GPU process stability, Git detection in WSL, sandbox + MSIX PowerShell, long PATH handling, terminal escape sequences |
| **Quota/usage metering accuracy** | Codex (4 distinct reports), Claude Code (single request burns 5-hr window), Copilot CLI (token usage exposure in ACP), Pi (billing sync lag) | Weekly limits exhausted in hours, silent downgrades, no token visibility for integrators, credit updates not propagating |
| **Agent reliability & observability** | Gemini CLI (subagent success masking, generalist hangs), OpenCode (background jobs, debugging-loop hint), Qwen Code (autofix budget, review disciplines), Pi (compaction stall, parallel tool loss) | Turn-limit reporting, hang detection, async job control, budget accounting, verification harnesses |
| **Provider-agnostic / BYO-model flexibility** | OpenCode (Requesty, DeepSeek V4 Flash, OpenRouter), Qwen Code (session-scoped model switches), Pi (Baseten, Bedrock, Z.AI), CodeWhale (DeepSeek V4 Flash direct), Kimi Code (double-encoded JSON) | Day-0 model support, runtime discovery, cache TTL control, robust tool-call parsing across providers |
| **Sandbox / air-gap / enterprise controls** | OpenCode (`OPENCODE_AIRGAP=1`), Copilot CLI (`allowDevToolCaches`, ReFS), CodeWhale (Xcode DerivedData allowlist), Pi (GHE compaction), Claude Code (VS Code extension leaks) | Network isolation, cache access, build-artifact escape hatches, enterprise auth, secret leakage prevention |
| **Session durability at scale** | Copilot CLI (V8 string limit, OOM resume), Pi (SQLite linearization, crash recovery), Gemini CLI (30-day auto-delete), Qwen Code (cross-session bleed), OpenCode (symlink confusion) | Large-session resume, persistent storage, crash recovery, config drift, transcript retention policies |

---

## 4. Differentiation Analysis

| Dimension | Enterprise-Backed (Claude, Codex, Copilot, Gemini) | Emerging/Community (OpenCode, Qwen, Pi, CodeWhale, Kimi) |
|-----------|---------------------------------------------------|----------------------------------------------------------|
| **Primary Focus** | Platform integration (billing, IDE, auth, compliance) | Agent architecture innovation (branching, background jobs, server backend) |
| **Target User** | Professional/enterprise devs in existing ecosystems | Power users, early adopters, local-model enthusiasts, multi-device workflows |
| **Technical Approach** | Monolithic binaries + cloud entitlements; heavy guardrails | Modular Rust/TypeScript cores; pluggable providers; experimental flags (`OPENCODE_EXPERIMENTAL_*`) |
| **Release Strategy** | Stable channels + patch trains; gated rollouts (Max/Plus/Pro) | Nightly/preview/alpha by default; single binary often serves all tiers |
| **Extensibility** | Plugin systems (Claude `security-guidance`, Codex `plugin/search`), ACP protocol | Native plugin dirs (OpenCode), skill systems (Qwen), user-command dispatch (CodeWhale), MCP connectors |
| **Pain Point Profile** | Billing bugs, Windows regressions, safety guard bypasses, IDE leaks | Tool-call schema fragility, session fragmentation, dependency drift, platform parity (Wayland, pre-Haswell) |

**Notable outliers:**
- **Pi** is building a **durable session server** (`@earendil-works/pi-coding-agent/server`) with JSONL persistence, cross-process locking, and remote-client leasing — architecturally distinct from all others.
- **Qwen Code** pursues **session non-linearity** (fork from any assistant response, Git worktree isolation) as a first-class workflow primitive.
- **CodeWhale** focuses on **TUI rendering excellence** (LaTeX, CJK width, AltGr/IME) and **canonical tooling specs** with formal acceptance criteria.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / High Maturity** | **OpenAI Codex**, **Gemini CLI**, **GitHub Copilot CLI** | Daily/weekly releases; 10+ PRs closed/day (Codex); enterprise feature requests (ACP, org config); structured triage (P1/P2 labels) |
| **High Momentum / Maturing** | **OpenCode**, **Qwen Code**, **Pi** | 10+ PRs merged/day (Pi: 50); architectural features landing (background jobs, server backend, session branching); active design discussions |
| **Moderate Momentum / Niche Focus** | **Claude Code**, **CodeWhale** | Claude: high-impact bugs but no releases; CodeWhale: rebrand + v0.9.3 shipped, focused on TUI/rendering niche |
| **Early / Feature-Request Driven** | **Kimi Code CLI** | Only 4 issues + 1 PR updated; community discussion on Remote Control & Memory System but no implementation velocity visible |
| **Inactive** | **Grok Build** | Zero activity in 24h window |

**Velocity signals:** Pi (50 PRs), Codex (10 closed PRs), OpenCode (10 merged PRs), Qwen (10 key PRs) show highest engineering throughput. Claude Code's critical bugs with 50+ comment threads indicate large installed base but release pipeline blockage.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|----------------|-------------|
| **Session server architecture** | 🔴🔴🔴 High (Pi, Copilot ACP, Qwen branching, Kimi Remote Control) | CLI tools are evolving into **distributed session runtimes**; expect protocol standardization (ACP-like) for client/server separation. |
| **Windows as a first-class target (finally)** | 🔴🔴🔴 High (5+ tools with critical Windows issues) | Tools ignoring WSL/ConPTY/MSIX/ReFS will lose enterprise Windows developers. Invest in platform-specific CI now. |
| **Quota metering as a trust surface** | 🔴🔴 High (Codex, Claude, Copilot, Pi) | Usage accounting bugs directly correlate with subscription churn. Transparent token dashboards & ACP `tokenUsage` events becoming table stakes. |
| **Agent autonomy guardrails** | 🔴🔴 High (Gemini subagent hangs, OpenCode background jobs, Qwen autofix budget, Pi compaction) | "Autonomous" features require **explicit budget declarations, turn limits, and verification harnesses** — not just prompt engineering. |
| **Provider-agnostic tool calling** | 🔴🔴 High (OpenCode, Qwen, Pi, CodeWhale, Kimi) | Standardized tool-call schemas (OpenAI-compatible) + robust argument parsing (double-encoded JSON fix) are critical for BYO-model workflows. |
| **Air-gap / sandbox configurability** | 🔴🔴 Medium-High (OpenCode, Copilot, CodeWhale, Pi, Claude) | Enterprise adoption blocked by network isolation needs; expect `OPENCODE_AIRGAP`-style flags and scoped filesystem allowlists to proliferate. |
| **TUI rendering as differentiator** | 🔴 Medium (CodeWhale LaTeX/CJK, Pi differential renderer, Qwen Web Shell, Gemini terminal UX) | For developer-facing CLIs, **terminal UX quality** (escape handling, resize perf, IME support) is becoming a competitive moat. |
| **Skill/extension ecosystems** | 🟡 Medium (Claude plugins, Codex plugin/search, Qwen skills, OpenCode plugins) | Plugin markets emerging but fragmented; watch for **ACP `plugin/search` adoption** as a convergence point. |

---

### Bottom Line for Decision-Makers

- **For enterprise standardization:** GitHub Copilot CLI (ACP maturity, org config roadmap) and Gemini CLI (rapid patches, Google Cloud integration) present the lowest integration risk *if* Windows/WSL bugs are resolved.
- **For agent-centric workflows:** OpenCode (background jobs, air-gap), Qwen Code (session branching), and Pi (server backend) offer the most innovative architectures but require tolerance for pre-1.0 churn.
- **For Windows-heavy teams:** Track Codex and Copilot CLI fixes closely; both have dedicated Windows regression clusters being actively resolved.
- **For multi-device developers:** No tool yet delivers seamless cross-device sync — Pi's server backend + remote client is the closest architectural bet; Kimi's Remote Control request signals unmet demand.

*Report generated from 2026-08-01 community digests. All issue/PR links reference live GitHub data.*

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report (as of 2026-08-01)

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Core fix for the skill-description optimization loop; addresses Windows stream reading, trigger detection, and parallel workers | Directly resolves **Issue #556** (12 comments, 7 👍) and **#1169** — the evaluation harness was reporting `recall=0%` for every query, breaking the description-improvement loop | **OPEN** (updated 2026-06-23) |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Typographic quality control for AI-generated documents: prevents orphan/widow lines, heading stranding, numbering misalignment | Addresses a universal pain point — “users rarely ask for good typography but always notice bad typography” | **OPEN** (updated 2026-03-13) |
| 3 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills that evaluate other skills across 5 dimensions (structure, examples, resources, security, maintainability) | Community-requested tooling for skill authors; enables automated quality gates before publication | **OPEN** (updated 2026-01-07) |
| 4 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file-verification + four-dimension reasoning audit (correctness, completeness, safety, clarity) before delivery | Universal, stack-agnostic quality gate; framed as “pre-delivery verification” for any agent output | **OPEN** (updated 2026-07-02) |
| 5 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Testing Trophy, AAA pattern, React Testing Library, contract testing, property-based, mutation testing | Fills a gap in the skills catalog — no prior skill covered the full testing stack systematically | **OPEN** (updated 2026-04-21) |
| 6 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` | Color-naming systems (ISCC-NBS, Munsell, XKCD, RAL…), color-space selection guide (OKLCH, OKLAB, CAM16), accessibility contrast, palette generation | Niche but high-value for design/visualization workflows; self-contained reference skill | **OPEN** (updated 2026-07-21) |
| 7 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` | Retro/pixel-art/8-bit game development via Pyxel MCP server (write → run_and_capture → inspect → iterate) | First game-engine-specific skill; demonstrates MCP + skill integration pattern | **OPEN** (updated 2026-07-15) |
| 8 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (addresses #1417: “planning artifacts accumulate with no lifecycle”) | Solves a recurrent workflow hygiene problem; born from community issue discussion | **OPEN** (updated 2026-07-27) |

> **Note:** All PRs show `Comments: undefined` in the raw data; ranking is inferred from issue cross-references, update frequency, and problem severity.

---

## 2. Community Demand Trends — From Issues

| Theme | Representative Issues | Signal Strength |
|-------|----------------------|-----------------|
| **Trust & Security Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2 👍) — community skills masquerading as official `anthropic/` namespace skills | 🔴 **Critical** — highest engagement, security implications |
| **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8 👍) — eliminate manual .skill file distribution via Slack/Teams | 🟠 **High** — clear workflow friction, enterprise demand |
| **Skill-Creator Tooling Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7 👍), [#1169](https://github.com/anthropics/skills/issues/1169), [#1061](https://github.com/anthropics/skills/issues/1061) — `run_eval.py` 0% recall, Windows subprocess/encoding failures | 🟠 **High** — blocks skill authoring on Windows; multiple duplicate reports |
| **Duplicate/Conflicting Skill Packages** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9 👍) — `document-skills` and `example-skills` install identical content | 🟡 **Medium** — packaging/publishing hygiene |
| **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) — `claude-api` skill injects ~156k tokens in one call | 🟡 **Medium** — emerging performance concern |
| **MCP Integration** | [#16](https://github.com/anthropics/skills/issues/16) — expose skills as MCPs for uniform API surface | 🟡 **Medium** — architectural direction |
| **Bedrock/Cloud Provider Support** | [#29](https://github.com/anthropics/skills/issues/29) — AWS Bedrock compatibility | 🟢 **Niche** — specific deployment target |

**Top 3 Anticipated Skill Directions:**
1. **Security/governance meta-skills** (audit, quality-analyzer, policy enforcement)
2. **Workflow hygiene skills** (plan-file-hygiene, testing-patterns, self-audit)
3. **Domain-specialist skills** (typography, color, ODT, Pyxel, SAP-RPT-1-OSS)

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It’s Poised to Merge |
|----|-------|--------------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | `skill-creator` core fixes | Blocks the entire description-optimization pipeline; multiple dependent issues (#556, #1169, #1323) |
| [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | Windows compatibility for `skill-creator` | Two independent PRs fixing the same Windows blocker (PATHEXT, cp1252, select-on-pipes); high user pain |
| [#538](https://github.com/anthropics/skills/pull/538) | PDF skill case-sensitivity fix | Trivial, well-scoped, breaks on case-sensitive FS — low-risk merge candidate |
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX tracked-change `w:id` collision fix | Prevents document corruption; concrete OOXML bug with clear fix |
| [#539](https://github.com/anthropics/skills/pull/539) | YAML frontmatter validation for descriptions | Prevents silent parsing failures; improves author DX |
| [#1323](https://github.com/anthropics/skills/pull/1323) | Trigger-eval isolation from live registry | Fixes eval pollution of user’s `.claude/commands/`; critical for parallel eval reliability |
| [#1261](https://github.com/anthropics/skills/pull/1261) | Same as above (duplicate approach) | Alternative fix for the same registry-pollution problem |
| [#509](https://github.com/anthropics/skills/pull/509) | `CONTRIBUTING.md` | Addresses GitHub community health score (25% → target); single highest-impact doc addition |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for *reliable, trustworthy skill-authoring tooling* — specifically fixing the broken `skill-creator` evaluation loop and Windows compatibility — so that *domain-specialist skills* (typography, testing, color, document formats, game dev) can be built, validated, and shared securely across organizations without namespace spoofing or context-window exhaustion.**

---

# Claude Code Community Digest — 2026-08-01

---

## 1. Today's Highlights
- **No new releases** in the last 24 hours.  
- **Critical access bug:** Since Fable 5 launched on Max plans (2026-07-20), Max subscribers are incorrectly blocked with “usage credits required” and silently downgraded to Opus 4.8 ([#79337](https://github.com/anthropics/claude-code/issues/79337), 51 comments, 20 👍).  
- **Windows desktop instability:** Multiple independent reports of GPU-process crashes (exit code `101457950`) crashing the entire Desktop app when the built-in browser pane is used ([#81159](https://github.com/anthropics/claude-code/issues/81159), [#81275](https://github.com/anthropics/claude-code/issues/81275), [#82962](https://github.com/anthropics/claude-code/issues/82962)).  
- **Safety regressions:** Multiple reports of `rm -rf` catastrophic deletions bypassing safety guards ([#80830](https://github.com/anthropics/claude-code/issues/80830), [#81273](https://github.com/anthropics/claude-code/issues/81273), [#82165](https://github.com/anthropics/claude-code/issues/82165)).  
- **Top community ask:** Sync conversation history between CLI and Desktop app ([#28791](https://github.com/anthropics/claude-code/issues/28791), 111 👍, 30 comments).

---

## 2. Releases
> No new releases published in the last 24 hours.

---

## 3. Hot Issues (Top 10 by Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| 1 | **[#79337](https://github.com/anthropics/claude-code/issues/79337)** Fable 5 blocks Max users with “usage credits required”; silent fallback to Opus 4.8 | Blocking paying Max subscribers since Fable 5 launch day; silent fallback breaks trust. | 51 comments, 20 👍 |
| 2 | **[#28791](https://github.com/anthropics/claude-code/issues/28791)** Sync conversation history between CLI ↔ Desktop | Highest-voted feature request; fundamental workflow gap for multi-device developers. | 30 comments, **111 👍** |
| 3 | **[#11139](https://github.com/anthropics/claude-code/issues/11139)** Claude Code Web cannot run `gh` CLI (permission denied) | Blocks GitHub workflows in the web version; blocks CI/CD integration. | 28 comments, 31 👍 |
| 4 | **[#79441](https://github.com/anthropics/claude-code/issues/79441)** VS Code extension blocks Fable 5 despite remaining allowance | Duplicate of #79337 but specific to VS Code extension; affects IDE workflow. | 13 comments, 10 👍 |
| 5 | **[#81159](https://github.com/anthropics/claude-code/issues/81159)** / **[#81275](https://github.com/anthropics/claude-code/issues/81275)** / **[#82962](https://github.com/anthropics/claude-code/issues/82962)** Windows GPU crash (exit 101457950) on browser pane | Crashes entire Desktop app on Windows across Intel/NVIDIA/WARP; blocks browser feature entirely. | 9+7+1 comments |
| 6 | **[#74113](https://github.com/anthropics/claude-code/issues/74113)** Background agents go idle without final `SendMessage` | Agents silently stall; requires manual re-ping; breaks autonomous workflows. | 5 comments, 5 👍 |
| 7 | **[#79919](https://github.com/anthropics/claude-code/issues/79919)** Prompt suggestions (ghost text) never appear in GUI app | UX regression; `promptSuggestionEnabled: true` ignored in Desktop/Web. | 4 comments |
| 8 | **[#83019](https://github.com/anthropics/claude-code/issues/83019)** Session transcripts auto-delete after 30 days outside backup paths | Silent, permanent loss of project history; default path outside typical backups. | 2 comments |
| 9 | **[#77134](https://github.com/anthropics/claude-code/issues/77134)** Surface Claude’s text for approval without second model pass | Cost/latency optimization for approval workflows; avoids double model call. | 2 comments, 1 👍 |
| 10 | **[#75794](https://github.com/anthropics/claude-code/issues/75794)** Model erases entire directory without permission in Plan mode | Catastrophic data loss; safety guard completely bypassed in Plan mode. | 2 comments |

---

## 4. Key PR Progress (Updated in Last 24h)

| # | PR | Status | Summary |
|---|----|--------|---------|
| 1 | **[#81540](https://github.com/anthropics/claude-code/pull/81540)** | Closed | Fix usage leak ([#80705](https://github.com/anthropics/claude-code/issues/80705)); automated Atlas contribution. |
| 2 | **[#17776](https://github.com/anthropics/claude-code/pull/17776)** | Closed | Add comprehensive README for `security-guidance` plugin (9 patterns documented). |
| 3 | **[#82987](https://github.com/anthropics/claude-code/pull/82987)** | Open | Fix CI cron failures, exclude PRs from scheduled runs, propose TUI latency architectural fix ([#82984](https://github.com/anthropics/claude-code/issues/82984)). |
| 4 | **[#82794](https://github.com/anthropics/claude-code/pull/82794)** | Open | `code-review` plugin: implement confidence scoring (0–100) and `--threshold` flag; reconciles README↔command drift. |
| 5 | **[#39872](https://github.com/anthropics/claude-code/pull/39872)** | Open | Upgrade Node.js from 20 → 24 (LTS preparation). |
| 6 | **[#82981](https://github.com/anthropics/claude-code/pull/82981)** | Open | Appears auto-generated (“automatizar inventario insumos”); likely spam/test. |

---

## 5. Feature Request Trends
1. **Cross-platform conversation sync** — CLI ↔ Desktop ↔ Web history sync is the #1 voted request ([#28791](https://github.com/anthropics/claude-code/issues/28791)).
2. **Context & memory transparency** — Developers want visibility into what auto-memory loaded (whole/truncated/none) ([#82056](https://github.com/anthropics/claude-code/issues/82056)) and pluggable context managers ([#80751](https://github.com/anthropics/claude-code/issues/80751)).
3. **Cost/token optimization** — Avoiding second model passes for approvals ([#77134](https://github.com/anthropics/claude-code/issues/77134)), confidence scoring for code review ([#82794](https://github.com/anthropics/claude-code/pull/82794)).
4. **Shell fidelity** — Bash tool should run under `bash`, not login shell (zsh) ([#74746](https://github.com/anthropics/claude-code/issues/74746)); bash mode (`!`) should handle `sudo`/interactive input ([#83046](https://github.com/anthropics/claude-code/issues/83046)).
5. **Agent/Fleet observability** — FleetView rendering bugs ([#83045](https://github.com/anthropics/claude-code/issues/83045)), agent idle detection ([#74113](https://github.com/anthropics/claude-code/issues/74113)), dark-mode readability ([#62911](https://github.com/anthropics/claude-code/issues/62911)).

---

## 6. Developer Pain Points (Recurring Frustrations)
| Area | Pain Point | Representative Issues |
|------|------------|------------------------|
| **Billing/Entitlements** | Fable 5 incorrectly gated for Max subscribers; silent downgrade without notice | [#79337](https://github.com/anthropics/claude-code/issues/79337), [#79441](https://github.com/anthropics/claude-code/issues/79441), [#82319](https://github.com/anthropics/claude-code/issues/82319), [#82466](https://github.com/anthropics/claude-code/issues/82466) |
| **Windows Stability** | GPU process crash (exit 101457950) kills Desktop app on browser use | [#81159](https://github.com/anthropics/claude-code/issues/81159), [#81275](https://github.com/anthropics/claude-code/issues/81275), [#82962](https://github.com/anthropics/claude-code/issues/82962), [#77768](https://github.com/anthropics/claude-code/issues/77768) |
| **Safety Guards** | `rm -rf` catastrophic deletions bypass confirmation; safety classifier blocks kill attempts | [#80830](https://github.com/anthropics/claude-code/issues/80830), [#81273](https://github.com/anthropics/claude-code/issues/81273), [#82165](https://github.com/anthropics/claude-code/issues/82165) |
| **Data Persistence** | Session transcripts auto-delete after 30 days; default path outside backups | [#83019](https://github.com/anthropics/claude-code/issues/83019) |
| **Session Limits** | Single request burns entire 5-hour window; unclear accounting | [#83042](https://github.com/anthropics/claude-code/issues/83042) |
| **IDE Integration** | VS Code extension leaks closed-file selections (secrets) into context | [#71566](https://github.com/anthropics/claude-code/issues/71566) |
| **MCP/Connector Reliability** | claude.ai connector wedges permanently; `/mcp reconnect` doesn’t recover broker state | [#83044](https://github.com/anthropics/claude-code/issues/83044) |
| **Refusal Fallback** | `CLAUDE_CODE_DISABLE_REFUSAL_FALLBACK=1` arms fallback instead of disabling it | [#83043](https://github.com/anthropics/claude-code/issues/83043) |

---

*Generated from GitHub data for `anthropics/claude-code` on 2026-08-01. Links point to live GitHub items.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-01

---

## 1. Today's Highlights

Three new alpha releases (0.147.0-alpha.1.1 through alpha.4) shipped in the last 24 hours, signaling rapid iteration on the Rust codebase. The issue tracker is dominated by Windows-specific regressions: GPU process crashes from Code Integrity blocking `vk_swiftshader.dll`, WSL repositories incorrectly flagged as non-Git, and sandbox failures when the resolved shell is the MSIX build of PowerShell. Meanwhile, multiple quota-accounting bugs suggest the usage-metering pipeline is misreporting weekly limits for Plus and Pro subscribers.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.147.0-alpha.4` | Alpha | Fourth alpha in the 0.147 series; incremental fixes atop alpha.3 |
| `rust-v0.147.0-alpha.3` | Alpha | Third alpha; continues stabilization toward 0.147.0 |
| `rust-v0.147.0-alpha.1.1` | Alpha | Patched re-cut of alpha.1 |

All three are pre-release builds; no stable channel update today.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#34133](https://github.com/openai/codex/issues/34133) | **Windows: `Page.captureScreenshot` crashes GPU process after Code Integrity rejects bundled `vk_swiftshader.dll`** | Blocks in-app browser screenshots on Win10; app becomes unresponsive or fails to restart. | 30 comments, 0 👍 — active investigation |
| [#35420](https://github.com/openai/codex/issues/35420) | **Work/Codex stream repeatedly disconnects when workspace is OneDrive-backed and OneDrive is degraded** | Breaks ChatGPT Work/Codex on Windows for any repo living in a problematic OneDrive folder. | 20 comments |
| [#31786](https://github.com/openai/codex/issues/31786) | **Remote control Windows WSL → Android not working at all** | Pairing succeeds but phone stays “connecting” indefinitely; remote workflow broken. | 17 comments |
| [#32323](https://github.com/openai/codex/issues/32323) | **Codex PR integration fails in WSL with `gh: Expected VAR_SIGN, actual: COLON`** | GitHub CLI parsing error prevents PR workflow in WSL; affects code-review loop. | 12 comments, **14 👍** |
| [#35119](https://github.com/openai/codex/issues/35119) | **[WSL] 26.721.3404 marks valid WSL repos as non-Git and reports “Git is unavailable”** | Regression in 26.721.x; workspace detection broken for ext4-backed repos. | 11 comments, **11 👍** |
| [#29645](https://github.com/openai/codex/issues/29645) | **Built-in `image_gen` times out after ~240s for ordinary card-art prompts** | Image generation unreliable for non-trivial prompts; simple prompts succeed. | 10 comments, 3 👍 |
| [#28316](https://github.com/openai/codex/issues/28316) | **Codex resends large base64 image tool outputs in subsequent context** | Unbounded context growth → latency & cost explosion; affects all image workflows. | 10 comments, 3 👍 |
| [#35871](https://github.com/openai/codex/issues/35871) | **Windows sandbox: `CreateProcessAsUserW` fails with error 5 when shell is MSIX `pwsh`** | Store-installed PowerShell 7 cannot launch under sandbox token; blocks code-mode on Windows. | 9 comments, 1 👍 |
| [#17401](https://github.com/openai/codex/issues/17401) | **Feat: `@include` directive for composable `AGENTS.md` files** | Highly requested modular instruction support; enables reusable agent configs. | 9 comments, **15 👍** |
| [#35259](https://github.com/openai/codex/issues/35259) | **Desktop repeatedly re-enters model during wait/status polling, consuming substantial credits** | 19.8% of raw local token volume spent on idle polling; direct cost impact. | 9 comments |

---

## 4. Key PR Progress (Top 10 by Significance)

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#36413](https://github.com/openai/codex/pull/36413) | Add realtime delegation acknowledgement control (`delegationAckFiller` field) | **Closed** |
| [#36411](https://github.com/openai/codex/pull/36411) | Use Git repositories as pre-tool hook test markers (deterministic test fixtures) | **Closed** |
| [#31471](https://github.com/openai/codex/pull/31471) | Extract apps cache logic into `ConnectorRuntimeManager` (1/4 of faster-connectors effort) | **Open** |
| [#36410](https://github.com/openai/codex/pull/36410) | Make user-input blocking behavior explicit (`isBlocking` flag vs. `autoResolutionMs`) | **Closed** |
| [#31817](https://github.com/openai/codex/pull/31817) | Automated `models.json` update | **Open** |
| [#36409](https://github.com/openai/codex/pull/36409) | Implement remote plugin search (global/workspace/personal scopes, pagination) | **Closed** |
| [#36408](https://github.com/openai/codex/pull/36408) | Allow custom Codex instructions for realtime transitions (`realtimeStart/EndInstructions`) | **Closed** |
| [#36402](https://github.com/openai/codex/pull/36402) | Declare experimental `plugin/search` API (schema + routing) | **Closed** |
| [#36393](https://github.com/openai/codex/pull/36393) | Avoid redundant filesystem probes (single `environments.toml` read, direct socket connect) | **Closed** |
| [#36389](https://github.com/openai/codex/pull/36389) | Enforce single-writer ownership for all thread histories (legacy + paginated) | **Closed** |

*Theme:* Heavy investment in realtime/protocol hardening, plugin extensibility, and I/O performance. Several PRs closed same-day, indicating a high-velocity internal merge cadence.

---

## 5. Feature Request Trends

1. **Modular agent instructions** — `@include` directive for `AGENTS.md` ([#17401](https://github.com/openai/codex/issues/17401), 15 👍) leads demand for composable, version-controlled agent configs.
2. **Per-thread routing controls** — Auto mode that selects both model *and* reasoning effort per thread ([#34278](https://github.com/openai/codex/issues/34278)).
3. **Enterprise-grade MCP OAuth** — Full lifecycle + re-auth for SSO ([#35006](https://github.com/openai/codex/issues/35006)).
4. **Remote plugin discovery** — Search/install plugins from marketplace without local catalog ([#36409](https://github.com/openai/codex/pull/36409), [#36402](https://github.com/openai/codex/pull/36402)).
5. **Realtime customization hooks** — Custom instructions on realtime enter/exit ([#36408](https://github.com/openai/codex/pull/36408)).

---

## 6. Developer Pain Points (Recurring Themes)

| Area | Representative Issues | Frequency |
|------|----------------------|-----------|
| **Windows + WSL regressions** | GPU crash (#34133), Git detection (#35119), `gh` parsing (#32323), sandbox + MSIX pwsh (#35871), OneDrive stream drops (#35420) | 5+ issues in top 10 |
| **Quota / usage accounting errors** | Weekly limit exhausted in <24h (#36353), Plus shows 58% remaining but blocks (#36369), Spark meter stuck at 100% (#33216), Pro 5-hr allowance depleted fast (#32250) | 4 distinct reports |
| **Image/tool payload handling** | `image_gen` 240s timeout (#29645), base64 resend bloating context (#28316), ffmpeg runaway children (#36345) | 3 high-impact bugs |
| **Remote / mobile connectivity** | WSL→Android broken (#31786), iOS remote shows phantom projects (#36417), Ctrl+Z over tsh/Slurm leaves shell broken (#29730) | 3 issues |
| **Session/thread integrity** | Forked tasks inherit unfinished turns (#36405), “Continue in new task” loses rollout (#36061), nested repo commit instructions omitted (#33783) | 3 issues |
| **Computer Use / browser plugins** | Sky plugin load failure on macOS 26 (#34471), Chrome plugin update leaves locked host (#32706), plugins unavailable on `gpt-5.6-sol` (#33592), Pygame Return key not delivered (#35510) | 4 issues |

**Bottom line:** Windows/WSL stability and usage-metering correctness are the two most visible friction surfaces for developers today. The alpha release train is moving fast, but each cut surfaces new platform-specific regressions that stall real-world workflows.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-01

## 1. Today's Highlights
The project shipped three patch releases (v0.53.1, v0.54.0-preview.1, v0.55.0-nightly) all addressing the same critical fix: propagating `InvalidStreamError` details to the UI so developers receive actionable guidance (e.g., `/compress`) when the model returns empty responses. Concurrently, the team is tackling a cluster of P1 agent-reliability bugs—subagent turn-limit misreporting, generalist-agent hangs, and shell-command "awaiting input" stalls—that are blocking production workflows.

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.55.0-nightly.20260801.gf47d6c6f7** | Nightly | • `fix(core)`: Classify capacity exhaustion as terminal to prevent retry hangs ([#28599](https://github.com/google-gemini/gemini-cli/pull/28599))<br>• `fix(core,cli)`: Propagate `InvalidStreamError` details to UI for empty-response guidance ([#28566](https://github.com/google-gemini/gemini-cli/pull/28566)) |
| **v0.54.0-preview.1** | Preview | Cherry-pick of f47d6c6 to patch v0.54.0-preview.0 ([#28609](https://github.com/google-gemini/gemini-cli/pull/28609)) |
| **v0.53.1** | Stable | Cherry-pick of f47d6c6 to patch v0.53.0 (merge conflicts resolved) ([#28610](https://github.com/google-gemini/gemini-cli/pull/28610)) |

## 3. Hot Issues (Top 10 by Community Signal)
| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent recovery after MAX_TURNS reported as GOAL success | Masks real failures; breaks trust in automation pipelines | 12 comments, 2 👍 — P1, needs retest |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs indefinitely | Renders agent delegation unusable; workarounds require explicit “no sub-agent” prompts | 8 comments, 8 👍 — P1, high impact |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell command execution stuck at “Waiting input” after completion | Frequent, nondeterministic stall on trivial commands | 4 comments, 3 👍 — P1, medium effort |
| **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** Robust component-level evaluations | 76 behavioral evals exist but need stability across 6 model variants | 7 comments — P1, infra investment |
| **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** 400 error with >128 tools | Hard tool-count ceiling blocks large workspaces | 3 comments — P2, needs smarter tool scoping |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent fails on Wayland | Blocks Linux/Wayland users from web automation | 4 comments, 1 👍 — P1, agent/browser |
| **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory retries low-signal sessions indefinitely | Wastes quota & pollutes memory with noise | 5 comments — P2 |
| **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** Assess AST-aware file reads/search/mapping | Potential turn/token reduction for code navigation | 7 comments, 1 👍 — P2, EPIC |
| **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`) | Configuration drift between main & browser agents | 3 comments — P2, needs retest |
| **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)** Symlinked agent files not recognized | Breaks dotfile/agent management workflows | 4 comments — P3, small fix |

## 4. Key PR Progress (Last 24h)
| PR | Area | Summary |
|----|------|---------|
| **[#28607](https://github.com/google-gemini/gemini-cli/pull/28607)** | Core | Preserve `functionCall.thoughtSignature` when stripping thought parts — fixes v0.53.0 regression causing `API Error 400` |
| **[#28608](https://github.com/google-gemini/gemini-cli/pull/28608)** | Agent | Fall back to stable models when preview model 404s with Gemini API key auth ([#28600](https://github.com/google-gemini/gemini-cli/issues/28600)) |
| **[#28566](https://github.com/google-gemini/gemini-cli/pull/28566)** | Core/CLI | Propagate `InvalidStreamError` details to UI — enables `/compress` suggestion on empty responses (merged into 3 release lines) |
| **[#28481](https://github.com/google-gemini/gemini-cli/pull/28481)** | Security | Refresh MCP OAuth tokens with stored client ID — fixes re-auth loop on dynamic registration |
| **[#28551](https://github.com/google-gemini/gemini-cli/pull/28551)** | CLI | Fall back to embedded macOS Seatbelt profiles if missing — unblocks sandbox mode (`-s`) on macOS/gMac |
| **[#28526](https://github.com/google-gemini/gemini-cli/pull/28526)** | VSCode | Fix leaking `gemini.diff.accept` & `onDidChangeWorkspaceFolders` disposables ([#27790](https://github.com/google-gemini/gemini-cli/issues/27790)) |
| **[#28613](https://github.com/google-gemini/gemini-cli/pull/28613)** | SDK | Replace `console.error` with `debugLogger` in session — logging hygiene |
| **[#28612](https://github.com/google-gemini/gemini-cli/pull/28612)** | Release | Automated nightly version bump to 0.55.0-nightly.20260801 |
| **[#28609](https://github.com/google-gemini/gemini-cli/pull/28609)** | Release | Cherry-pick f47d6c6 → v0.54.0-preview.1 (closed) |
| **[#28610](https://github.com/google-gemini/gemini-cli/pull/28610)** | Release | Cherry-pick f47d6c6 → v0.53.1 with conflict resolution (closed) |

## 5. Feature Request Trends
1. **Agent Observability & Control** — Subagent trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), bug-report context inclusion ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and self-awareness improvements ([#21432](https://github.com/google-gemini/gemini-cli/issues/21432)).
2. **Native Bash Affinity** — AST-aware tooling ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)), zero-dependency sandboxing ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)), and reducing tmp-script sprawl ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571)).
3. **Memory System Hardening** — Deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), invalid-patch quarantine ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)), and low-signal session backoff ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
4. **Browser Agent Resilience** — Session takeover/lock recovery ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), Wayland support ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), and config override respect ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).

## 6. Developer Pain Points
- **Silent Agent Failures**: Subagents report “success” after hitting turn limits ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), generalist agent hangs without logs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), and browser agent crashes on Wayland ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)).
- **Tool/Context Ceilings**: Hard 128-tool limit triggers 400 errors ([#24246](https://github.com/google-gemini/gemini-cli/issues/24246)); context-management guidance only surfaced after empty-response errors (now fixed in v0.53.1+).
- **Shell Integration Flakiness**: Commands show “awaiting input” post-completion ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166)); interactive prompts (e.g., `vite create`) stall agents ([#22465](https://github.com/google-gemini/gemini-cli/issues/22465)).
- **Configuration Drift**: Browser agent ignores `settings.json` ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)); symlinked agents not loaded ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).
- **Terminal UX**: Resize flicker/perf ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), external-editor corruption ([#24935](https://github.com/google-gemini/gemini-cli/issues/24935)), and `\n` escape bugs ([#22466](https://github.com/google-gemini/gemini-cli/issues/22466)).

---
*Generated from GitHub data for google-gemini/gemini-cli on 2026-08-01. All links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-01

---

## 1. Today's Highlights

Version **1.0.78-0** ships a new `/permissions` command for switching approval modes and adds `closeSession` support in ACP. The sandbox gains `allowDevToolCaches` (enabled by default) to unblock toolchain caches and registries. Meanwhile, the community is actively discussing regressions in plan-mode shell access, a V8 string-length limit breaking long-session resume, and missing token-usage exposure in the ACP protocol.

---

## 2. Releases

### **v1.0.78-0** — *Released 2026-07-31*
| Category | Changes |
|----------|---------|
| **Added** | `/permissions` command to switch between approval modes; ACP `closeSession` request to terminate sessions cleanly. |
| **Improved** | New sandbox setting `allowDevToolCaches` (on by default) grants sandboxed builds access to toolchain caches, registries, and installs so builds work without manual cache configuration. |

> **Upgrade note:** The sandbox change is backward-compatible and should reduce "cache not found" failures in isolated builds.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4188](https://github.com/github/copilot-cli/issues/4188) | **Regression: plan-mode blocks shell commands** (gh CLI, etc.) | Breaks workflows that enrich plans with live repo/issue data. | 7 comments, 3 👍 — **Closed** but signals a permissions-model regression. |
| [#4305](https://github.com/github/copilot-cli/issues/4305) | **`Failed to convert JavaScript value 'Undefined' into rust type 'String'` on 1.0.76+** | Immediate crash on any command after upgrade; blocks all usage. | 4 comments, 4 👍 — **Closed** (likely fixed in 1.0.78). |
| [#4251](https://github.com/github/copilot-cli/issues/4251) | **Resume of large session OOMs / pegs CPU for ~70 min (regression in 1.0.74)** | 3–4× memory vs 1.0.73; makes long-lived sessions unusable. | 1 comment, 1 👍 — **Open**, high severity for power users. |
| [#4325](https://github.com/github/copilot-cli/issues/4325) | **Session permanently unloadable once `events.jsonl` exceeds V8 max string length** | Hard limit kills resume for any sufficiently long session; data intact but unrecoverable. | 0 comments, 0 👍 — **Open**, fundamental architecture constraint. |
| [#3183](https://github.com/github/copilot-cli/issues/3183) | **Orphan `tool_use` after hard kill + resume → persistent 400** | SDK-level corruption breaks conversation continuity; affects automation. | 4 comments — **Closed** but root cause may persist in edge cases. |
| [#4161](https://github.com/github/copilot-cli/issues/4161) | **`task_complete` tool unavailable after switching back to autopilot** | Regression of #1523; breaks agent handoff workflows. | 4 comments, 4 👍 — **Closed**. |
| [#4318](https://github.com/github/copilot-cli/issues/4318) | **Autopilot task-completion enforcement overrides explicit "research only" instructions** | Agent ignores user intent to stop; safety/usability conflict. | 1 comment — **Open**. |
| [#2109](https://github.com/github/copilot-cli/issues/2109) | **ACP: add `ask_user` / `ask_question` extension method** | Enables custom clients to surface structured clarifying questions. | 2 comments, 6 👍 — **Open**, high demand from ACP integrators. |
| [#3712](https://github.com/github/copilot-cli/issues/3712) | **ReFS / Dev Drive sandbox limitation on Windows — documentation request** | Local sandbox fails silently on ReFS; devs waste time debugging. | 2 comments, 4 👍 — **Open**, platform-specific but growing impact. |
| [#4311](https://github.com/github/copilot-cli/issues/4311) | **Transcript renders blank until width change / new message** | UI regression: content exists but invisible; `/resume` doesn't recover. | 1 comment — **Open**, affects daily interactive use. |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4316](https://github.com/github/copilot-cli/pull/4316) | **Create `devcontainer.json`** | Open | Adds a dev container for consistent contributor environments; first step toward streamlined onboarding. |
| [#3163](https://github.com/github/copilot-cli/pull/3163) | **ViewSonic monitor** | Open | Appears to be a test/misc PR referencing monitor hardware; low relevance to core CLI. |

> Only two PRs updated in the last 24h; the devcontainer addition is the only structurally meaningful one.

---

## 5. Feature Request Trends (from all Issues)

1. **ACP Protocol Completeness** — Multiple issues (#2109, #4174) ask for `ask_user`, token-usage exposure, and richer session lifecycle events. Integrators need parity with the interactive CLI.
2. **Enterprise Configuration Management** — #3909 requests org-level push of env vars and settings to *local* CLI installs (not just Codespaces).
3. **Session Durability at Scale** — #4251, #4325, #3183 all point to architectural limits (memory, V8 string length, orphaned tool calls) when sessions grow large or survive crashes.
4. **Plan-Mode Tool Access** — #4188 shows demand for controlled shell access during planning (gh CLI, read-only ops) without full autopilot permissions.
5. **Windows Sandbox Parity** — #3712 highlights ReFS/Dev Drive incompatibility; docs or fallback strategies needed.
6. **UI/UX Polish** — #4311 (blank transcript), #4313 (scroll history), #4304 (sidebar keyboard nav) indicate a push for terminal-native ergonomics.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Regressions on minor/patch releases** | #4188 (plan-mode), #4161 (task_complete), #4251 (resume OOM), #4305 (crash on 1.0.76) | High — 4+ distinct regressions in recent versions |
| **Session corruption / unrecoverable state** | #3183 (orphan tool_use), #4325 (V8 string limit), #4251 (OOM on resume) | High — multiple root causes, same symptom: "can't resume my work" |
| **ACP protocol gaps block custom clients** | #2109 (ask_user), #4174 (no token usage), #4320 (nested MCP tool grants) | Medium — growing as ACP adoption increases |
| **Sandbox opacity on Windows** | #3712 (ReFS), #2182 (PTY buffer hang) | Medium — Windows devs hit silent failures |
| **UI rendering & input bugs in interactive mode** | #4311 (blank transcript), #4313 (no scroll), #4304 (no arrow nav), #1352 (hook stdout hidden) | Medium — daily friction for terminal users |
| **Installer ignores version pin** | #4317 (always pulls latest) | Low but critical for reproducibility |

---

**Next digest:** 2026-08-02 — tracking 1.0.78 adoption, ACP enhancements, and the V8 string-length fix discussion.

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-01

## 1. Today's Highlights
No new releases in the last 24 hours. Community focus remains on two high-impact feature requests—**Remote Control** for cross-device session continuity and a **Memory System** for persistent context—both attracting significant discussion. A critical bug causing auto-scroll to bottom after conversation completion affects Linux users on v1.46.0. One PR addresses a double-encoded JSON parsing issue in tool-call arguments.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues
| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | **Remote Control – Continue local sessions from any device** | Enables seamless workflow mobility; users can resume CLI sessions on phone/tablet/browser without losing local environment state. | 23 👍, 9 comments — strong demand for cross-device continuity. |
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System – Persistent context across sessions** | Would let Kimi remember project patterns, preferences, and AI-managed notes between sessions, reducing repetitive context-setting. | 8 comments, 0 👍 — active technical discussion on implementation approaches. |
| [#2422](https://github.com/MoonshotAI/kimi-cli/issues/2422) | **Auto-scroll to bottom after conversation completes (Linux, v1.46.0)** | Breaks output review workflow; users cannot scroll back through completed responses without being snapped to bottom. | 1 👍, 2 comments — confirmed regression on Linux with kimi2.6 model. |
| [#796](https://github.com/MoonshotAI/kimi-cli/issues/796) | **LLM provider error: 400 “message at position 1 with role”** | Message format validation failure; likely provider/API contract mismatch. | Closed with 1 comment — appears resolved or stale. |

*Only 4 issues updated in the last 24h; all are shown above.*

## 4. Key PR Progress
| # | PR | Status | Description |
|---|----|--------|-------------|
| [#2572](https://github.com/MoonshotAI/kimi-cli/pull/2572) | **fix(kosong): recursively unwrap double-encoded JSON in tool-call arguments** | Open | Fixes Pydantic validation failures when providers (e.g., Moonshot API) double-encode nested array/object parameters in `function.arguments` (affects `SetTodoList`, `ExitPlanMode`, `StrReplaceFile`, etc.). |

*Only 1 PR updated in the last 24h.*

## 5. Feature Request Trends
1. **Session Mobility & Continuity** — Remote Control (#1282) tops community wishlist; users want true “pick up where you left off” across devices.
2. **Long-Term Context Retention** — Memory System (#1283) reflects growing need for project-aware, personalized assistance without manual re-contextualization each session.
3. **Provider-Agnostic Tool Calling** — PR #2572 hints at ongoing friction with varying provider payload encodings; robust argument parsing is a silent priority.

## 6. Developer Pain Points
- **Output Navigation Regression** — Auto-scroll-to-bottom (#2422) breaks post-conversation log review on Linux; high visibility for a UX regression.
- **Tool-Call Argument Parsing Failures** — Double-encoded JSON from providers causes silent validation errors, blocking structured tool use (StrReplaceFile, SetTodoList, etc.).
- **Message Format Compatibility** — Legacy issue (#796) shows recurring 400 errors from role/position mismatches in provider payloads, suggesting fragile API contracts.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-01

## 1. Today's Highlights
OpenCode shipped a wave of developer-experience PRs today: a background-job system for long-running commands, an air-gap mode (`OPENCODE_AIRGAP=1`) for secure deployments, configurable send-key bindings, and deduplication of unchanged file reads. Meanwhile, the community is actively discussing DeepSeek V4 Flash (0731) availability on Zen and persistent permission-configuration bugs.

## 2. Releases
No new releases in the last 24 hours.

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Status | Why It Matters | Community Reaction |
|---|-------|--------|----------------|-------------------|
| [#16331](https://github.com/anomalyco/opencode/issues/16331) | Permissions ignored | 🟢 Closed | Permission rules in `opencode.json` (e.g., `*.env: deny`) were not enforced, a security regression. | 41 comments, 11 👍 — high engagement, confirms widespread impact. |
| [#39823](https://github.com/anomalyco/opencode/issues/39823) | DeepSeek V4 Flash (0731) on Zen? | 🔴 Open | Users want immediate access to the newly released DeepSeek-V4-Flash with improved agent benchmarks. | 23 comments, 20 👍 — strong demand for cutting-edge model support. |
| [#18131](https://github.com/anomalyco/opencode/issues/18131) | Write tool invalid parameters (Qwen 3.5) | 🟢 Closed | Schema validation failures when models call `write`/`edit` with malformed args. | 12 comments, 4 👍 — highlights OpenAI-compat model tool-calling fragility. |
| [#28480](https://github.com/anomalyco/opencode/issues/28480) | Windows 11: app won’t start | 🟢 Closed | Silent launch failure on Windows; no logs, no crash report. | 11 comments — critical for Windows adoption. |
| [#7769](https://github.com/anomalyco/opencode/issues/7769) | Git submodules in desktop | 🟢 Closed | Desktop couldn’t manage sessions across submodules. | 9 comments, 13 👍 — long-standing workflow gap for monorepos. |
| [#26558](https://github.com/anomalyco/opencode/issues/26558) | Git GUI: commit/stage/push | 🔴 Open | Request for built-in lightweight Git panel (à la VS Code). | 6 comments, 4 👍 — recurring UX ask. |
| [#23595](https://github.com/anomalyco/opencode/issues/23595) | `<system-reminder>` moves, breaks llama.cpp cache | 🔴 Open | Prompt-cache misses when system reminder position shifts each turn. | 5 comments, 11 👍 — performance hit for local-model users. |
| [#14848](https://github.com/anomalyco/opencode/issues/14848) | Billing sync lag & TUI session loss | 🟢 Closed | Credits added but not reflected; active TUI sessions dropped. | 5 comments — trust/retention risk for paid tiers. |
| [#20573](https://github.com/anomalyco/opencode/issues/20573) | Windows: allow nushell, fix bash tool | 🟢 Closed | Nushell hard-blocked; `bash` tool invocation broken on Windows. | 5 comments, 3 👍 — shell-choice flexibility. |
| [#29142](https://github.com/anomalyco/opencode/issues/29142) | OpenAI-compat models call write/edit with bad schema | 🟢 Closed | Intermittent schema errors surfaced to UI instead of auto-retry. | 2 comments, 5 👍 — core reliability for BYO-model users. |

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#39997](https://github.com/anomalyco/opencode/pull/39997) | ✨ Feature | **File-read deduplication**: returns `file_unchanged` stub when file content already in context & unchanged on disk — reduces token spend & latency. |
| [#39994](https://github.com/anomalyco/opencode/pull/39994) | ✨ Feature | **Air-gap mode**: `OPENCODE_AIRGAP=1` disables all automatic outbound network calls (updates, model fetch, telemetry) for secure/intranet deployments. |
| [#39978](https://github.com/anomalyco/opencode/pull/39978) | ✨ Feature | **Background jobs**: long-running shell commands (builds, tests, daemons) run async; HTTP API to list/cancel; TUI badge shows active jobs. |
| [#39985](https://github.com/anomalyco/opencode/pull/39985) | ✨ Feature | **Configurable send key**: Settings → General → Input — choose Enter / Shift+Enter / Ctrl+Enter for send vs newline. |
| [#39389](https://github.com/anomalyco/opencode/pull/39389) | 🐛 Fix + ✨ | **Diff viewer UX**: prevents accidental re-entry; adds explicit close action in palette. |
| [#27378](https://github.com/anomalyco/opencode/pull/27378) | ✨ Feature | **Cache stabilization** (part 3/4): system-prompt splitting behind `OPENCODE_EXPERIMENTAL_CACHE_STABILIZATION` for Anthropic prompt-cache hits. |
| [#14743](https://github.com/anomalyco/opencode/pull/14743) | 🐛 Fix | **Anthropic prompt-cache hit rate**: fixes cross-repo/session misses via system split & tool-call stability. |
| [#27007](https://github.com/anomalyco/opencode/pull/27007) | ✨ Feature | **Cache audit logging**: `OPENCODE_EXPERIMENTAL_CACHE_AUDIT` emits token-level cache diagnostics. |
| [#39990](https://github.com/anomalyco/opencode/pull/39990) | ✨ Feature | **Debugging-loop hint**: injects hint when same shell command fails repeatedly — nudges model out of hypothesis cycling. |
| [#39988](https://github.com/anomalyco/opencode/pull/39988) | 🐛 Fix | **Plugin discovery**: scans global config dir + all ancestor `.opencode/plugins/tui` roots, including those created after TUI start. |

## 5. Feature Request Trends
1. **Git integration depth** — native commit/stage/push UI (#26558), submodule session support (#7769).
2. **Model-provider agility** — runtime model discovery (Requesty #30285), new model day-zero support (DeepSeek V4 Flash #39823), OpenRouter cache TTL (#16848).
3. **Shell & terminal flexibility** — nushell on Windows (#20573), Termux support (#30248), Ctrl+C terminal restore (#10719).
4. **Prompt-cache optimization** — system-reminder stabilization (#23595), Anthropic cache hit-rate (#14743), cache audit/debug flags (#27007, #27378).
5. **Security/air-gap controls** — `OPENCODE_AIRGAP` (#39994), no-browser flag (#39984), permission enforcement (#16331).

## 6. Developer Pain Points (Recurring Frustrations)
- **Permission system unreliability** — rules ignored, env-file leaks (#16331).
- **Tool-call schema mismatches** — OpenAI-compat models sending invalid `write`/`edit` args, surfacing raw SchemaErrors (#18131, #29142).
- **Windows/WSL friction** — silent crashes (#28480), WSL connect missing (#30230), nushell blocked (#20573), terminal state corruption (#10719, #20989).
- **Cache inefficiency** — moving system reminders breaking llama.cpp caching (#23595), cross-session Anthropic misses (#14743).
- **Session/project state sync** — symlink paths confusing desktop (#30260), directory-view stale after external edits (#30052), prefix-collision project hiding (#30223).
- **Billing/session disconnect** — credit updates not propagating, active TUI sessions killed (#14848).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-01

## 1. Today's Highlights
The project saw a surge of stabilization work today with **26 issues updated** and **50 PRs merged or advanced** in the last 24 hours. Key themes include fixing compaction reliability (#7020, #7420), resolving JSON-mode O(n²) output that caused OOMs (#7290, #7394, #7395), hardening model-availability refresh after stalled promises (#7301, #7421), and adding Baseten as a new built-in provider (#7404, #7405). A server-side session backend and remote-client coordination are also landing (#7396, #7409, #7410), signaling a push toward durable, multi-client workflows.

## 2. Releases
No new releases published in the last 24 hours.

## 3. Hot Issues (10 noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#7020](https://github.com/earendil-works/pi/issues/7020) **Compaction stall** — long-running coordinator sessions hang after `/compact` | Blocks core workflow for power users; 7 comments, 2 👍, still **in progress** | High impact, active discussion |
| [#7301](https://github.com/earendil-works/pi/issues/7301) **Stalled availability refresh is unrecoverable** — `forceRefreshAvailability()` chains onto stuck promise | Makes model list permanently stale after transient network hiccup; 3 comments | Critical reliability bug |
| [#7290](https://github.com/earendil-works/pi/issues/7290) **`--mode json` emits O(n²) stdout** — cumulative assistant message on every delta | Causes OOM on large tool outputs; 2 comments, **in progress** | Performance blocker for JSON consumers |
| [#7161](https://github.com/earendil-works/pi/issues/7161) **Anthropic path missing `x-client-request-id`** — breaks gateway session affinity | Affects proxy/load-balancer setups using Anthropic; 6 comments, **in progress** | Integration pain point |
| [#7149](https://github.com/earendil-works/pi/issues/7149) **Standalone binary SIGILL on pre-Haswell CPUs (BMI2)** | Excludes older hardware; npm package works, binary doesn’t; 2 comments, **in progress** | Portability regression |
| [#7413](https://github.com/earendil-works/pi/issues/7413) **Compaction fails on GHE.com enterprise** — “unknown stamp” auth error | Enterprise Copilot users blocked from compaction; 2 comments, closed today | Enterprise adoption blocker |
| [#7385](https://github.com/earendil-works/pi/issues/7385) **Keystroke lag scales with conversation length** — tool-result renderer bypasses Text cache | 350–520 ms/char at ~160 tool calls; 2 comments, closed today | UX degradation in long sessions |
| [#7053](https://github.com/earendil-works/pi/issues/7053) **Parallel tool batches lose completed results when one sibling stalls** | Orphaned toolCalls → “No result provided”; follow-up to #3503; 3 comments | Data-loss risk in parallel execution |
| [#7316](https://github.com/earendil-works/pi/issues/7316) **coding-agent 0.83.0 still ships `brace-expansion@5.0.7`** | Vulnerable dependency in published tarball; 4 comments, closed | Supply-chain hygiene |
| [#7248](https://github.com/earendil-works/pi/issues/7248) **Ctrl+V paste silently fails on Wayland** — `readClipboardText` is X11-only | Blocks Linux Wayland users; 4 comments, closed | Platform parity issue |

## 4. Key PR Progress (10 important)

| PR | Type | Summary |
|----|------|---------|
| [#7421](https://github.com/earendil-works/pi/pull/7421) | **Fix** | Recovers model availability after stalled refresh (closes #7301) by decoupling `forceRefreshAvailability()` from the stuck promise. |
| [#7420](https://github.com/earendil-works/pi/pull/7420) | **Fix** | Fails compaction when summary generation hits token cap (`stopReason: "length"`), preventing truncated summaries from persisting (closes #7048). |
| [#7394](https://github.com/earendil-works/pi/pull/7394) | **Fix** | Makes JSON streaming output linear: emits delta-only `message_update`, adds stdout backpressure (addresses #7290, #7395). **Open** |
| [#7422](https://github.com/earendil-works/pi/pull/7422) | **Feat** | Supports direct image URLs in `ImageContent` (closes #6151), avoiding mandatory base64 round-trip for providers that accept URLs. |
| [#7404](https://github.com/earendil-works/pi/pull/7404) | **Feat** | Adds **Baseten** as built-in OpenAI-compatible provider (`BASETEN_API_KEY`, `https://inference.baseten.co/v1`). |
| [#7396](https://github.com/earendil-works/pi/pull/7396) | **Feat** | Introduces durable `@earendil-works/pi-coding-agent/server` backend: JSONL persistence, cross-process locking, crash recovery, live transcript projection. **Open** |
| [#7409](https://github.com/earendil-works/pi/pull/7409) | **Feat** | Adds `PiClient` / `RemoteSession` coordination: idempotent connection ownership, shared/exclusive leases, pure transcript projection. |
| [#7410](https://github.com/earendil-works/pi/pull/7410) | **Perf** | Linearizes SQLite session ops: staged connection cache, no full-cache cloning, `push`+`reverse` instead of `unshift`, stronger branch-order guarantees. |
| [#7419](https://github.com/earendil-works/pi/pull/7419) | **Fix** | Normalizes optional-object tool schemas for OpenAI-compatible endpoints (adds empty `required: []` array) — closes #7010. |
| [#7390](https://github.com/earendil-works/pi/pull/7390) | **Fix** | Targets baseline x64 CPUs (removes BMI2 requirement) — fixes #7149 SIGILL on pre-Haswell. **Open** |

## 5. Feature Request Trends
1. **Server / multi-client architecture** — PRs #7396, #7409, #7410, #7411 show a concerted effort to build a durable session server with remote-client leasing, JSONL persistence, and crash recovery.
2. **Provider expansion** — Baseten added (#7404), Amazon Bedrock Mantle in review (#6216), Z.AI model refs updated (#7401); community wants day-0 support for new frontier models.
3. **Compaction reliability & extensibility** — Multiple issues (#7020, #7388, #7420) and fixes around summary truncation, hook failure modes, and enterprise auth.
4. **JSON/RPC streaming ergonomics** — Linear delta output, backpressure, and wire-protocol migration (#7394) to support tooling and headless automation.
5. **Platform parity** — Wayland clipboard (#7248), pre-Haswell binary (#7149), GHE.com compaction (#7413) — closing gaps for Linux/enterprise users.

## 6. Developer Pain Points
- **Compaction unreliability** — Hangs, truncated summaries, enterprise auth failures; top frustration for long-session users.
- **JSON-mode quadratic output** — O(n²) stdout drains memory and blocks automation pipelines; now being fixed but historically severe.
- **Model-availability fragility** — Single stalled refresh poisons the runtime until restart; no automatic recovery.
- **Binary portability** — Official `pi-linux-x64` binary uses BMI2 instructions, excluding older but still-common CPUs (npm workaround exists).
- **Wayland clipboard & input lag** — Basic editor operations broken on modern Linux desktops; differential renderer desyncs with complex scripts (Bengali) and long histories.
- **Tool-result loss in parallel batches** — Completed sibling results discarded when one tool stalls, surfacing as “No result provided.”
- **Session rename UX** — Ctrl+R requires double Enter; Esc after single Enter discards change silently (#7126).

---

*Generated from `earendil-works/pi` GitHub activity (2026-07-31 → 2026-08-01). All links point to live issues/PRs.*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-01

---

## 1. Today's Highlights
- **v0.21.2 released** with autofix improvements: lower-severity suggestions now defer after five rounds, and visible notices appear when round limits are reached.
- **Session branching** feature work landed (PR #8274), enabling forking from any conversation point — a major step toward Git worktree-isolated workflows.
- **Web Shell desktop app** packaging (PR #8132) and **autofix budget fixes** (PR #8257) signal maturation of the desktop and autonomous-agent surfaces.

---

## 2. Releases
### v0.21.2
| Change | Details |
|--------|---------|
| **Autofix round limits** | Lower-severity suggestions deferred after 5 rounds; visible notices when refusing due to limits ([#7913](https://github.com/QwenLM/qwen-code/pull/7913), [#8067](https://github.com/QwenLM/qwen-code/pull/8067)) |

---

## 3. Hot Issues (Top 10 by Noteworthiness)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8271](https://github.com/QwenLM/qwen-code/issues/8271) | **Session branching with optional Git worktree isolation** | Enables non-linear dev workflows; fork from any assistant response, not just HEAD. | New, 2 comments, P3 — design discussion starting |
| [#6721](https://github.com/QwenLM/qwen-code/issues/6721) | **Deferred tool discovery invalidates prompt cache prefixes** | Core perf bug: tool search breaks caching, increasing latency/token usage. | 7 comments, P2, needs-triage — active investigation |
| [#8237](https://github.com/QwenLM/qwen-code/issues/8237) | **E2E flake: ACP cron test timing out** | Blocks CI; test waits for real minute boundary. Fix uses `QWEN_CODE_TEST_CRON_FAST` seam. | Auto-filed, autofix/in-progress, 3 comments |
| [#8267](https://github.com/QwenLM/qwen-code/issues/8267) | **SGR mouse escape sequences leak into input box (v0.21.2)** | Regression in TUI: raw mouse events (`^[[<...M`) appear in prompt, breaking input. | 2 comments, P2 — likely ConPTY/WSL interaction |
| [#8270](https://github.com/QwenLM/qwen-code/issues/8270) | **VS Code notices generator drops duplicate package versions** | Compliance risk: different resolved versions of same package collapsed to one entry. | 2 comments, P3 — PR #8272 fixes |
| [#8269](https://github.com/QwenLM/qwen-code/issues/8269) | **mobile-mcp: legacy Hono dependency in GHSA-frvp-7c67-39w9 range** | Security: published package pulls vulnerable `@hono/node-server`. Needs Node baseline bump. | 2 comments, P3, needs-discussion |
| [#8054](https://github.com/QwenLM/qwen-code/issues/8054) | **Single switch to disable all bundled skills** | UX: replace manual denylist with `"skills": { "disableBundled": true }`. | Closed, 2 comments — implemented? |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | **Fleet Shepherd Dashboard (auto-maintained)** | Infra visibility: tracks PR sync/dispatch state across fleet. | Bot-maintained, 4 comments |
| [#8262](https://github.com/QwenLM/qwen-code/pull/8262) | **Web Shell: isolate automatic recap by session** | Prevents cross-session recap bleed — critical for multi-tab desktop app. | PR linked, 0 comments on issue |
| [#8257](https://github.com/QwenLM/qwen-code/pull/8257) | **Autofix: state primary agent budget, use step headroom** | Fixes timeout false-negatives: primary agent used 50min default vs 80min step cap. | PR linked, autofix/takeover |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#8274](https://github.com/QwenLM/qwen-code/pull/8274) | Feature | **Fork from any conversation** — session branching v1; targets eligible assistant responses, not just latest state. |
| [#8132](https://github.com/QwenLM/qwen-code/pull/8132) | Feature | **Desktop app: package Web Shell as release-ready Tauri app** — native lifecycle, workspace recovery, shared Web Shell core. |
| [#8272](https://github.com/QwenLM/qwen-code/pull/8272) | Fix | **VS Code notices: traverse distinct resolved versions** — fixes duplicate-version collapse in third-party license generator. |
| [#8257](https://github.com/QwenLM/qwen-code/pull/8257) | Fix | **Autofix budget accounting** — primary agent now declares its budget; uses wrapping step’s headroom (80min vs 50min default). |
| [#8261](https://github.com/QwenLM/qwen-code/pull/8261) | Feature | **Review: mined disciplines** — effective-diff guard, positive control, seven lenses; from 108 verification comments. |
| [#8215](https://github.com/QwenLM/qwen-code/pull/8215) | Feature | **Review: Test Plan claim check, base-tree A/B harness, per-hunk probes** — hands-on verification capabilities. |
| [#8240](https://github.com/QwenLM/qwen-code/pull/8240) | Feature | **Workflows: bubble agent approvals** — Shell/edit/MCP/info requests surface through parent TUI/ACP/stream-json. |
| [#8141](https://github.com/QwenLM/qwen-code/pull/8141) | Refactor | **CLI: remove ACP private serve deps** — moves contracts to `runtime/`; cleaner boundaries for daemon/ACP. |
| [#7897](https://github.com/QwenLM/qwen-code/pull/7897) | Fix | **WSL/ConPTY redraw optimizer skip** — fixes streaming duplication bug (#7634); enables sync output on Windows Terminal. |
| [#8251](https://github.com/QwenLM/qwen-code/pull/8251) | UX | **WebUI: collapsible long tool output** — replaces 500-char truncation with expandable view for Bash/Execute/think. |

---

## 5. Feature Request Trends
| Direction | Evidence |
|-----------|----------|
| **Session non-linearity** | #8271 (branch from any response), #8274 (fork implementation), #6579 (session-scoped model switches) |
| **Desktop/Web Shell parity** | #8132 (Tauri desktop), #8251 (collapsible output), #8262 (session-isolated recaps), #8250 (dedup permission buttons) |
| **Autofix/Review autonomy** | #8261 (mined disciplines), #8215 (verification harnesses), #8257 (budget accounting), #7913/#8067 (round limits) |
| **Skill/Extension management** | #8054 (disable bundled skills switch), #7846 (auto-skill curator with 30-day TTL), #6739 (browser-ext alpha diagnostics) |
| **Workflow/agent orchestration** | #8240 (approval bubbling), #8141 (ACP contract extraction), #8245 (daemon memory budget) |

---

## 6. Developer Pain Points
| Pain Point | Frequency / Signal |
|------------|-------------------|
| **TUI/Terminal escape leakage** | #8267 (SGR mouse sequences in input), #7897 (WSL/ConPTY redraw bugs), #7634 (streaming duplication) |
| **CI flakiness & slow feedback** | #8237 (cron test waits real minute), #8243 (adds `QWEN_CODE_TEST_CRON_FAST` seam), multiple autofix timeouts |
| **Cache invalidation surprises** | #6721 (deferred tool discovery breaks prompt cache prefixes) — 7 comments, P2 |
| **Dependency/notice accuracy** | #8270/#8272 (VS Code notices drop version variants), #8269 (mobile-mcp vulnerable transitive dep) |
| **Autofix opacity** | #8257 (budget not declared), #7913/#8067 (round limits silent), #8261/#8215 (review verification gaps) |
| **Cross-session state bleed** | #8262 (Web Shell recap isolation), #6579 (model switches leaked globally) |

---

*Generated from GitHub data as of 2026-08-01. Links point to live issues/PRs on github.com/QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-01

## 1. Today's Highlights
The project has officially rebranded from **deepseek-tui** to **CodeWhale** (v0.9.3), the public product from Shannon Labs. The legacy npm package is deprecated. The release includes DeepSeek V4 Flash direct responses, canonical tooling, and a cleaned dependency chain (removing the unmaintained `ttf-parser` PDF stack). A critical TUI bug causing repeated large-file edit failures with Chinese comments/CRLF line endings has a fix in review (#5008).

## 2. Releases
### v0.9.3 — CodeWhale Rebrand & DeepSeek V4 Flash
- **Renaming**: `deepseek-tui` → `codewhale` (binary, npm package, release assets). Legacy `deepseek-tui` on npm is frozen.
- **Model support**: DeepSeek V4 Flash direct responses integrated.
- **Tooling**: Canonical tool set stabilized; user-command dispatch precedence formally specified (shadowing, fallbacks, error semantics).
- **Dependency hygiene**: Removed transitive `ttf-parser → lopdf → pdf-extract` chain (RUSTSEC-2026-0192 maintenance warning).
- **TUI fixes**: Circled-digit/keycap width measurement corrected (PR #5001); AltGr `/` key handling on Windows fixed (PR #4977).
- **Installer**: Windows NSIS installer now preserves long user `PATH` (PR #5006).
- **Release PR**: #4993 | **Tracking issue**: #4382 (closed)

## 3. Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5003](https://github.com/Hmbown/CodeWhale/issues/5003) | **File edit tool fails repeatedly on large replacements (Chinese comments, CRLF)** | Blocks core editing workflow; model made 15+ failed attempts + 3 full rollbacks before workaround. High-impact regression for non-ASCII codebases. | 2 comments; fix in PR #5008 |
| [#5007](https://github.com/Hmbown/CodeWhale/issues/5007) | **YouTuber uses Codex instead of CodeWhale for DeepSeek** | Visibility/mindshare concern; highlights positioning gap vs. official/first-party TUIs. | 5 comments; discussion on branding & adoption |
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | **Chinese translation of "Constitution": "宪法" vs "协作准则"** | Governance doc translation debate; touches cultural/political sensitivity in CN community. | 5 comments; active bilingual discussion |
| [#5005](https://github.com/Hmbown/CodeWhale/issues/5005) | **Sandbox filesystem allowlist for external logs/artifacts (Xcode DerivedData)** | Real-world sandbox friction: build tooling writes outside workspace; need scoped escape hatch. | 1 comment; clear use case |
| [#5000](https://github.com/Hmbown/CodeWhale/issues/5000) | **Interrupted assistant output not persisted in session** | Engine-level gap: partial model output lost on interruption, breaking context continuity. | 1 comment; architecture-level |
| [#5002](https://github.com/Hmbown/CodeWhale/issues/5002) | **Tool 'task' not available + Anthropic API 400** | Runtime tool registration or API payload issue; may affect multi-step workflows. | 1 comment; needs triage |
| [#5009](https://github.com/Hmbown/CodeWhale/issues/5009) | **Spam: Ophthalmology billing services** | Noise; already flagged. | 2 comments; likely to be closed |
| [#4382](https://github.com/Hmbown/CodeWhale/issues/4382) | **Remove unmaintained ttf-parser PDF dependency chain** *(closed)* | Supply-chain hygiene; removed in v0.9.3. | 0 comments; resolved via release |

## 4. Key PR Progress
| # | Title | Type | Status | Impact |
|---|-------|------|--------|--------|
| [#5008](https://github.com/Hmbown/CodeWhale/pull/5008) | **Actionable File edit diagnostics & stale-line-number tolerance** | Bug fix | Open | Directly resolves #5003; adds diagnostic context & line-endings tolerance |
| [#4981](https://github.com/Hmbown/CodeWhale/pull/4981) | **LaTeX environments, text, and command support for math rendering** | Feature | **Closed** | Major TUI rendering upgrade: full LaTeX env/inline/command/accent support |
| [#4985](https://github.com/Hmbown/CodeWhale/pull/4985) | **Scope task listing by workspace (runtime API)** | Feature | Open | Enables GUI clients to filter tasks per workspace; regression test added |
| [#4992](https://github.com/Hmbown/CodeWhale/pull/4992) | **User command dispatch precedence, shadowing, error semantics** | Feature | Open | Formalizes AT-004–AT-007 acceptance criteria for user vs built-in commands |
| [#5001](https://github.com/Hmbown/CodeWhale/pull/5001) | **Measure circled digits/keycaps as 2 columns everywhere** | Bug fix | Open | Fixes TUI rendering glitches (missing chars/phantom spaces) in CJK terminals |
| [#5006](https://github.com/Hmbown/CodeWhale/pull/5006) | **Preserve long Windows user PATH in NSIS installer** | Bug fix | Open | Prevents installer from truncating/overwriting PATH > NSIS buffer limit |
| [#4977](https://github.com/Hmbown/CodeWhale/pull/4977) | **AltGr-typed "/" reaches composer instead of opening help** | Bug fix | **Closed** | Fixes #4723; Windows AltGr (Ctrl+Alt) key handling for non-US layouts |
| [#5017](https://github.com/Hmbown/CodeWhale/pull/5017) | **Repair three shared CI failures blocking open PRs** | CI fix | Open | Unblocks 7 dependabot + 2 community PRs (link gate, rustdoc, stale bot) |
| [#5013](https://github.com/Hmbown/CodeWhale/pull/5013) | **Bump ratatui 0.30.0 → 0.30.2** | Dependency | Open | TUI framework updates; includes fixes relevant to rendering/layout |
| [#5004](https://github.com/Hmbown/CodeWhale/pull/5004) | **Restore v0.9.3 rustdoc gate** | CI/docs | **Closed** | Re-enables documentation warnings-as-errors for release candidate |

## 5. Feature Request Trends
1. **Sandbox flexibility** — Path allowlists for build artifacts outside workspace (Xcode, Cargo target dirs, etc.) — #5005
2. **Session durability** — Persist partial/interrupted model output as first-class session items — #5000
3. **Math/LaTeX rendering** — Full environment/command support now merged (#4981), indicating demand for technical writing in TUI
4. **User command system maturity** — Shadowing, precedence, and error semantics now under formal acceptance testing (#4992)
5. **Cross-platform input handling** — AltGr/IME/keyboard-layout quirks (Windows, Brazilian ABNT2, AZERTY) — #4977

## 6. Developer Pain Points
- **Large-file editing reliability**: File tool fails silently/opaque on 100+ line replacements with mixed line endings & non-ASCII — forces external script workarounds (#5003).
- **Sandbox rigidity**: Legitimate build-tool outputs (Xcode DerivedData, Cargo target) blocked; no scoped escape mechanism (#5005).
- **Session fragmentation**: Interrupted streaming output not recoverable; context loss on user abort or network hiccup (#5000).
- **Windows installer edge cases**: Long `PATH` corruption due to NSIS string buffer limits (#5006).
- **Input-method compatibility**: AltGr/IME keys misinterpreted as control chords (help overlay, etc.) — recurring on non-US layouts (#4977).
- **Dependency drift**: Unmaintained transitive deps (ttf-parser) triggering cargo-audit warnings; requires periodic pruning (#4382).

---

*Data source: github.com/Hmbown/CodeWhale (formerly DeepSeek-TUI) — issues/PRs updated 2026-07-31 to 2026-08-01.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*