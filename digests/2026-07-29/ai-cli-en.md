# AI CLI Tools Community Digest 2026-07-29

> Generated: 2026-07-29 03:37 UTC | Tools covered: 10

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

# AI CLI Tools Ecosystem — Cross-Tool Comparison Report (2026-07-29)

---

## 1. Ecosystem Overview

The AI CLI tool landscape is bifurcating into **platform-backed flagship products** (Claude Code, Codex, Gemini CLI, Copilot CLI) and **specialized/community-driven alternatives** (OpenCode, Qwen Code, Kimi, Pi, DeepSeek TUI). All major tools shipped or prepared releases in the last 24 hours except Claude Code and Kimi, indicating a high-velocity iteration cadence. The dominant theme across the ecosystem is **production hardening**: fixing Windows stability, sandbox/permission models, session durability, and enterprise deployment gaps. A secondary wave focuses on **agent orchestration primitives — multi-session UIs, subagent reliability, plugin ecosystems, and headless/CI-first tooling.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues Tracked | Key PRs Tracked | Critical Open Issues |
|------|----------------|-------------------|-----------------|---------------------|
| **Claude Code** | 0 | 10 | 3 (open) | Max plan billing regression (#38335, 827 comments, 4+ months) |
| **OpenAI Codex** | 1 (v0.146.0 stable) | 10 | 19 (12 closed) | Windows GPU crash / SwiftShader + Code Integrity (#34133, #35352) |
| **Gemini CLI** | 3 (stable, preview, nightly) | 10 | 10 (6 closed) | Subagent false-success & hangs (#22323, #21409) |
| **GitHub Copilot CLI** | 1 (v1.0.76-1) | 10 | 1 (open) | Silent exit on non-default log levels (#4285, regression in today's release) |
| **Kimi Code CLI** | 0 | 6 | 7 (3 closed) | Plugin crash with ≥2 plugins (#2553, Windows) |
| **OpenCode** | 2 (v1.18.8, v1.18.9) | 10 | 10 (all closed) | DeepSeek V4 `reasoning_content` handling across providers (#29618, #28974) |
| **Pi** | 0 | 10 | 10 (8 closed) | Silent RPC message drop during compaction (#7150); WSL path translation (#7064) |
| **Qwen Code** | 2 (v0.21.1 stable + nightly) | 10 | 10 (all closed) | Windows terminal unscrollable after v0.21.1 (#7964) |
| **DeepSeek TUI** | 0 (v0.9.2 RC) | 10 | 10 (8 closed) | Seatbelt sandbox breaks shell commands daily (#4955) |
| **Grok Build** | 0 | — | — | No activity |

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Multi-session / multi-tab UI** | Codex (#13036), Gemini CLI (implied), OpenCode (tab UX PRs), Pi (viewport mgmt), Qwen Code (Web Shell panels) | True parallel chat threads, pinned sessions, side conversations, keyboard-first tab navigation |
| **Subagent reliability & observability** | Gemini CLI (#22323, #21409), OpenCode (#27497, #29638), Codex (implied), Copilot CLI (#4161) | Honest failure reporting, `maxTurns` respect, parallel execution, permission inheritance, trajectory visibility |
| **Windows first-class stability** | **All tools except Pi/DeepSeek TUI** | GPU/sandbox crashes (Codex, Copilot CLI), terminal scrolling (Qwen Code, Copilot CLI), ConPTY handles (DeepSeek TUI), MSIX/auto-update corruption (Codex, Copilot CLI) |
| **Sandbox / permission model escape hatches** | Codex (#35871, #35864), DeepSeek TUI (#4955), Copilot CLI (Full Access prompts), Gemini CLI (macOS seatbelt #28551) | `--no-sandbox` flag, unelevated sandbox fixes, Enterprise policy clarity, Seatbelt profile fallbacks |
| **Headless / CI-first tooling** | Qwen Code (`review run`, #7983), OpenCode (automation focus), Gemini CLI (eval infra), Codex (session import/export) | Machine-readable verdicts, exit codes, unattended timeouts, disk preflight, session portability |
| **Plugin / extension ecosystem maturity** | Codex (Agent Plugins, #35839), Claude Code (marketplace governance #77709), Kimi (#2553 crash), Pi (Markdown API #7231), OpenCode (permission hook #39442) | Manifest support, third-party marketplaces, sandboxing, versioning, UI for discovery |
| **Enterprise / self-hosted deployment** | Kimi (#2568 custom API base), Pi (Anthropic Vertex, Apiário), OpenCode (model discovery #39176), Gemini CLI (eval infra) | Private gateway support, regional providers, zero-config model catalog, compliance-friendly storage paths |
| **Context / compaction fidelity** | Codex (#35528), Claude Code (#19877 conditional `/compact`), Pi (#6879 auto-compaction), Qwen Code (review low-signal disclosure) | Faithful residuals when output capped, programmatic compaction, no silent data loss, audit trails |

---

## 4. Differentiation Analysis

| Dimension | Platform Flagships | Specialized / Community Tools |
|-----------|-------------------|-------------------------------|
| **Primary Focus** | Enterprise readiness, ecosystem integration, safety/compliance | Developer experience innovation, model diversity, terminal-native UX |
| **Target User** | Professional/enterprise dev teams, platform loyalists | Power users, polyglot model users, terminal purists, regional/enterprise self-hosters |
| **Technical Approach** | Managed cloud backends, tight IDE integration, proprietary protocols | Local-first, multi-provider abstraction, open protocols (ACP, MCP), extensible TUI |
| **Release Cadence** | Weekly stables + preview/nightly (Gemini, Codex, Copilot, Qwen) | Patch-heavy, RC-driven (OpenCode, DeepSeek TUI, Pi) |
| **Key Differentiator** | **Claude Code**: Artifacts, Max plan, VS Code Remote<br>**Codex**: Agent Plugins, multi-session, Rust core<br>**Gemini CLI**: Subagent orchestration, eval infra, security-first<br>**Copilot CLI**: GitHub integration, voice mode, scheduled prompts | **OpenCode**: Provider-agnostic, parallel subagents, Hebrew RTL<br>**Qwen Code**: Headless review pipeline, Web Shell IDE, certified session handoff<br>**Pi**: Architectural documentation (ADRs), sixel images in tmux, Markdown mutation API<br>**Kimi**: K3 open-model gateway, enterprise API base<br>**DeepSeek TUI**: Thinking-level persistence, Operate mode, Chinese i18n depth |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / High Maturity** | **Gemini CLI**, **OpenAI Codex**, **Qwen Code** | Daily releases (stable + preview + nightly), 10+ PRs closed/day, structured eval infra, security patching within hours |
| **High Momentum / Maturing** | **OpenCode**, **Pi** | Multiple patch releases/day, 10+ PRs closed, architectural docs investment (Pi ADRs), rapid provider integration |
| **Platform-Backed / Slower Iteration** | **Claude Code**, **GitHub Copilot CLI** | Fewer releases, but critical bugs persist for months (Claude billing, Copilot Windows TUI); enterprise feedback loops longer |
| **Niche / Early-Stage** | **Kimi Code CLI**, **DeepSeek TUI** | Active community discussion, but Windows/plugin regressions block broader adoption; RC-focused |
| **Inactive** | **Grok Build** | No 24h activity |

**Momentum Leaders**: Gemini CLI (3 releases + security patches), OpenCode (2 patches + 10 PRs), Qwen Code (stable + nightly + 10 PRs), Pi (47 ADRs + 8 PRs merged).

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Implication |
|-------|----------|-------------|
| **Windows is the primary battleground** | 7/9 tools report critical Windows bugs (GPU crashes, terminal scrolling, ConPTY, MSIX, sandbox) | Teams on Windows should pin versions; expect 2–3 more patch cycles before parity |
| **Sandbox/permission models are unsolved** | Every tool with sandboxing reports breakage (Seatbelt, MSIX, Code Integrity, unelevated vs elevated) | "Full access" modes are de facto required for productivity; expect `--no-sandbox` flags to become standard |
| **Multi-session is table stakes** | Codex shipped it; Gemini, OpenCode, Pi, Qwen building it | Single-threaded CLIs will feel legacy by Q4 2026 |
| **Headless/CI-first > Interactive-only** | Qwen `review run`, OpenCode automation, Gemini eval infra, Codex session import | Tools that cannot run unattended in CI will lose enterprise adoption |
| **Model provider abstraction winning** | OpenCode auto-discovery (#39176), Pi provider proliferation (Vertex, Apiário, Fireworks), Kimi custom gateway | Lock-in to single provider is a competitive disadvantage |
| **Subagent orchestration = next productivity lever** | Gemini false-success bug, OpenCode sequential execution, Copilot `task_complete` regression | Tools that solve parallel, observable, permission-aware subagents win agentic workflows |
| **Security hygiene accelerating** | Gemini (variable-expansion bypass, SSRF), Pi (TypeBox nullable arrays), Codex (plugin eligibility), Claude (MCP OAuth redirect) | Vulnerability disclosure-to-patch window shrinking to hours; supply-chain attestation (DeepSeek SBOM) emerging |
| **Terminal UX converging on IDE-grade** | Pi sixel/mouse/viewport, DeepSeek TUI calm rendering, Qwen Kitty Super keys, OpenCode unread tab glow | Raw ANSI TUI is dead; expect mouse, images, pinned input, RTL as baseline |

---

## Recommendation Summary

| If You Prioritize... | Best Fit Today |
|----------------------|----------------|
| **Enterprise readiness, Anthropic ecosystem** | Claude Code (but wait for billing fix) |
| **Multi-session, plugin ecosystem, Rust performance** | OpenAI Codex v0.146.0+ |
| **Subagent orchestration, security-first, rapid iteration** | Gemini CLI v0.53.0+ |
| **GitHub integration, voice, scheduled automation** | Copilot CLI (pin to 1.0.75 until 1.0.76-1 log-level fix verified) |
| **Provider-agnostic, parallel subagents, Hebrew RTL** | OpenCode v1.18.9 |
| **Headless review pipeline, Web Shell IDE, certified sessions** | Qwen Code v0.21.1 |
| **Architectural transparency, tmux images, Markdown mutation API** | Pi (nightly) |
| **K3 enterprise gateway, Chinese-market optimization** | Kimi Code CLI |
| **Thinking-level persistence, Operate mode, deep Chinese i18n** | DeepSeek TUI v0.9.2 RC |

**Bottom Line**: The ecosystem is converging on **multi-session, headless-capable, provider-agnostic, sandbox-flexible** as the baseline for 2026 H2. Tools not shipping these primitives by Q4 risk irrelevance for professional workflows.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-07-29 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator`: fix `run_eval.py` 0% recall | Core infrastructure fix — makes the description-optimization loop functional by correcting trigger detection, Windows stream reading, and parallel worker isolation | Root cause of **Issue #556** (12 comments, 7👍) and **#1169**; blocks all skill description optimization; affects `run_loop.py` and `improve_description.py` | 🟢 Open |
| 2 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` skill | Universal output auditor: mechanical file verification → 4-dimension reasoning audit (correctness, completeness, safety, clarity) in damage-severity order | Implements **Issue #1385**'s three-gate pipeline proposal; works across any project/stack/model | 🟢 Open |
| 3 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` skill | Comprehensive testing guide: Testing Trophy, AAA pattern, React Testing Library, integration/E2E, property-based, mutation testing, CI integration | Broad coverage of modern testing stack; addresses gap in skill collection for quality assurance workflows | 🟢 Open |
| 4 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` skill | Prevents typographic defects in AI-generated docs: orphan/widow control, numbering alignment, consistent spacing | "Affects every document Claude generates"; users rarely request good typography explicitly | 🟢 Open |
| 5 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` skill | Self-contained color expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility, gamut mapping | Universal utility for any color-related task; no external dependencies | 🟢 Open |
| 6 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` skill | OpenDocument (.odt/.ods) creation, template filling, parsing to HTML via `pyxel-mcp` | Covers full ODF workflow; triggers on "ODT", "ODS", "OpenDocument", "LibreOffice" | 🟢 Open |
| 7 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills for marketplace: 5-dimension quality scoring (structure, examples, resources, triggers, maintainability) + security analysis | Addresses **Issue #492** trust-boundary concerns; enables automated skill vetting | 🟢 Open |
| 8 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` skill | Lifecycle management for planning artifacts (addresses **#1417**): creation, update, archival, cleanup of `.claude/plans/` | Solves "planning artifacts accumulate with no lifecycle" problem; community-framed gap | 🟢 Open |

> **Note**: All 50 PRs show `Comments: undefined` in the raw data; ranking inferred from issue cross-references, problem scope, and community signals (👍, linked issues).

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Demand Signal |
|-------|-------------------|---------------|
| **Skill distribution security & trust** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍) — community skills masquerading as official `anthropic/` namespace; [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍) — duplicate skills from `document-skills`/`example-skills` plugins | **Critical**: Namespace spoofing enables privilege escalation; users can't distinguish official vs community skills |
| **Organizational skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) — no org-wide library; manual Slack/Teams file sharing + Settings upload workflow | **High**: Teams need curated, versioned skill libraries with one-click install |
| **Skill creator toolchain reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍), [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments, 1👍), [#1061](https://github.com/anthropics/skills/issues/1061) (3 comments, 2👍) — `run_eval.py` 0% recall on all platforms; Windows subprocess/encoding failures | **High**: Core skill-authoring loop is broken; blocks new skill development |
| **Context window management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — `claude-api` skill injects 156k tokens in one call; [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments) — `compact-memory` proposal for symbolic state compression | **Emerging**: Skills exhausting context; demand for token-efficient patterns |
| **Agent governance & safety** | [#412](https://github.com/anthropics/skills/issues/412) (6 comments, closed) — policy enforcement, threat detection, audit trails; [#1175](https://github.com/anthropics/skills/issues/1175) (4 comments, closed) — SharePoint ACLs in skills | **Niche but growing**: Enterprise/regulated environments need built-in governance patterns |
| **Platform compatibility** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments) — AWS Bedrock support; [#16](https://github.com/anthropics/skills/issues/16) (4 comments) — expose skills as MCPs | **Strategic**: Multi-cloud and protocol interoperability requests |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fixes | **Blocker for all skill development**; 3+ related issues (#556, #1169, #1323); multiple contributors submitting fixes (#1099, #1050, #1261, #1323) |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Implements formal proposal (**#1385**); universal applicability; addresses reasoning quality — a top community pain point |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Direct response to **#492** (highest-comment issue); enables automated marketplace vetting; meta-skill infrastructure |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Fills major coverage gap; comprehensive scope (unit → E2E → property-based); no competing PR |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Addresses explicitly framed lifecycle gap (**#1417**); communitycredited design; recent (Jul 2026) with active updates |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need ("every document Claude generates"); low implementation risk; high user-visible impact |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | Self-contained, no deps, broad applicability (design, data viz, accessibility, print) |
| **[#486](https://github.com/anthropics/skills/pull/486)** | `odt` | Open standard format support; complete workflow (create/fill/parse/convert); MCP-backed |

---

## 4. Skills Ecosystem Insight — One-Sentence Summary

> **The community's most concentrated demand is for a trustworthy, reliable skill-authoring foundation — fixing the broken `skill-creator` evaluation loop, securing the distribution namespace against spoofing, and establishing meta-skills for automated quality/security vetting — so that domain-specific skills (typography, testing, color, ODT, audit) can be built, shared, and consumed with confidence.**

---

# Claude Code Community Digest — 2026-07-29

---

## 1. Today's Highlights

No new releases shipped in the last 24 hours. The community is dominated by a **critical Max plan billing issue** (#38335) with 827+ comments and 470 reactions — users report session limits exhausting abnormally fast since March. Meanwhile, three PRs address developer experience: PDF support in devcontainers, a broken docs link, and an official-marketplace-only settings example.

---

## 2. Releases

*No releases published in the last 24 hours.*

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#38335](https://github.com/anthropics/claude-code/issues/38335)** Max plan session limits exhausted abnormally fast since March 23 | **Highest-engagement issue in the repo.** Max subscribers report rapid credit drain on CLI usage, suggesting a metering regression or catalog misconfiguration. | 827 comments · 470 👍 — ongoing for 4+ months |
| **[#29449](https://github.com/anthropics/claude-code/issues/29449)** "Remote Control environments not available" for Pro Plan users | Blocks Pro users from VS Code Remote / Codespaces workflows. Labeled `area:auth`, `platform:vscode`, `platform:macos`. | 27 comments · 31 👍 |
| **[#19877](https://github.com/anthropics/claude-code/issues/19877)** Feature: Claude-invocable conditional `/compact` for automated workflows | Enables programmatic context compaction in long-running agent loops — critical for CI/automation use cases. | 18 comments · 13 👍 |
| **[#80749](https://github.com/anthropics/claude-code/issues/80749)** Fable 5 gated behind "requires usage credits" on Max plan | Model access regression: Max users incorrectly prompted for credits on Fable 5 (Opus-class). Author notes flaky behavior across 2.1.215–2.1.218. | 7 comments · 1 👍 |
| **[#71603](https://github.com/anthropics/claude-code/issues/71603)** Mobile (Pixel 8 Pro): input discarded when app backgrounded during agent turn | Data-loss bug in claude-code-web: draft text typed while agent is busy is silently dropped on background. | 5 comments · 3 👍 |
| **[#80472](https://github.com/anthropics/claude-code/issues/80472)** iOS Simulator helper (`claude-ios-sim`) crashes on macOS 27 beta — seatbelt blocks Metal shader cache | Blocks iOS dev workflows on macOS 27 (Tahoe). Sandbox profile incompatibility with new per-bundle shader-cache directory. | 5 comments |
| **[#79824](https://github.com/anthropics/claude-code/issues/79824)** Artifact sharing fails: "This version can't be shared publicly" persists across republish | Published artifacts with Mermaid diagrams cannot be made link-shareable. Affects team collaboration and public demos. | 3 comments · 14 👍 |
| **[#82096](https://github.com/anthropics/claude-code/issues/82096)** MCP OAuth `redirect_uri` hardcodes `localhost` — breaks IdPs allowlisting only `127.0.0.1` | Enterprise SSO integrations fail when IdP rejects `localhost` but allows `127.0.0.1`. Simple fix, high impact for corp users. | 2 comments · 4 👍 |
| **[#78222](https://github.com/anthropics/claude-code/issues/78222)** CI monitoring widget false negative: "CI checks unavailable, check gh installed" despite working `gh` | CI status chip in TUI shows incorrect error. `gh` is installed, authenticated, and PR checks pass. | 3 comments · 4 👍 |
| **[#80459](https://github.com/anthropics/claude-code/issues/80459)** Assistant text dropped when paired with `AskUserQuestion`/`ExitPlanMode` tool call | Text block emitted alongside a user-interaction tool is silently omitted from session JSONL — breaks audit trails and rendering. | 1 comment · 2 👍 |

---

## 4. Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| **[#82059](https://github.com/anthropics/claude-code/pull/82059)** Fix: provision `poppler-utils` for PDF support in devcontainers/scripts | Adds missing `poppler-utils` to devcontainer images so `Read` tool PDF rendering works out of the box. Addresses #23704. | Open |
| **[#80294](https://github.com/anthropics/claude-code/pull/80294)** docs: fix 1 broken link via archive.org | Restores dead npmjs.com link in README using Wayback Machine snapshot. Automated by LinkMedic (confidence 0.66). | Open |
| **[#77709](https://github.com/anthropics/claude-code/pull/77709)** Add settings example: official marketplace only | Adds `settings-official-marketplace-only.json` demonstrating `strictKnownMarketplaces` with explicit GitHub source for `claude-plugins-official`. | Open |

---

## 5. Feature Request Trends

1. **Cross-device session continuity** ([#61849](https://github.com/anthropics/claude-code/issues/61849)) — developers want seamless handoff between desktop, mobile, and web clients.
2. **Programmatic context management** ([#19877](https://github.com/anthropics/claude-code/issues/19877)) — conditional `/compact` invocable by the model itself for long-running automation.
3. **Shared artifact discovery** ([#82161](https://github.com/anthropics/claude-code/issues/82161)) — "Shared With Me" view in Artifacts gallery; currently shared artifacts are only accessible via direct link.
4. **Security research accommodations** ([#82157](https://github.com/anthropics/claude-code/issues/82157)) — explicit support for adversarial/defensive cybersecurity workflows without account restrictions.
5. **Marketplace governance** ([#77709](https://github.com/anthropics/claude-code/pull/77709)) — orgs want to restrict plugins to official Anthropic marketplace only.

---

## 6. Developer Pain Points

| Area | Recurring Frustrations |
|------|------------------------|
| **Billing & Quotas** | Max plan credits draining 5–10× faster than expected since March; Fable/Opus 5 incorrectly gated behind credit prompts. |
| **Authentication & Remote** | Pro users blocked from Remote Control (VS Code, Codespaces); MCP OAuth `redirect_uri` hardcoded to `localhost`. |
| **Windows Stability** | MSIX auto-updates corrupt package registration (0x3CFC); kernel BSOD (0x139) in VS Code sessions; Settings Repair fails (source MSIX deleted from `%TEMP%`). |
| **Mobile & Web** | Draft input discarded on background (claude-code-web); iOS Simulator helper broken on macOS 27 beta. |
| **Hooks & Automation** | `SessionStart` hook output not rendered in VS Code extension; `PermissionRequest` hooks don't fire for subagents; auto-mode classifier emits bypass instructions in denial messages. |
| **Artifacts & Sharing** | Public sharing fails with stale "can't share" error; no discovery UI for shared artifacts; tool unavailable in CLI despite meeting requirements. |
| **CI / DevOps Integration** | CI monitoring widget reports false "gh not installed" despite working CLI; PDF support missing from default devcontainers. |

---

*Digest generated from GitHub data as of 2026-07-29. For real-time updates, watch the [claude-code repo](https://github.com/anthropics/claude-code).*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-07-29

## Today's Highlights
Codex shipped **v0.146.0** with multi-session management (named sessions via `/new` and `/clear`, pinned threads, side conversations) and a new Agent Plugin ecosystem supporting manifests, workspace publishing, and third-party marketplaces (Amazon Bedrock, Claude Code). On the stability front, Windows users continue to report critical GPU-process crashes tied to the bundled `vk_swiftshader.dll` being blocked by Code Integrity, plus sandbox/permission regressions in the latest desktop builds.

---

## Releases

### `rust-v0.146.0` (Stable)
**Major user-facing features:**
- **Multi-session workflow**: Name new sessions with `/new` or `/clear`, pin important threads, and switch between side conversations without closing them ([#34605](https://github.com/openai/codex/issues/34605), [#34840](https://github.com/openai/codex/issues/34840), [#35011](https://github.com/openai/codex/issues/35011)).
- **Agent Plugins ecosystem**: Manifest support, workspace-level plugin publishing, and additional plugin marketplaces for Amazon Bedrock and Claude Code.
- **Internal**: `rusty-v8` updated to `v150.4.0`; alpha `0.146.0-alpha.14` also published.

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#34133](https://github.com/openai/codex/issues/34133) | **Windows: `Page.captureScreenshot` crashes GPU process after Code Integrity rejects `vk_swiftshader.dll`** | Blocks in-app browser screenshots; app becomes unusable/slow on Win10. Root cause: unsigned SwiftShader fallback blocked by CI Event 3033. | 26 comments, active reproduction |
| [#35352](https://github.com/openai/codex/issues/35352) | **Codex Desktop exits when embedded browser GPU process crashes (unsigned SwiftShader blocked)** | Same root cause as #34133 but manifests as full app termination. Affects Pro users on latest builds. | 15 comments, 👍1 |
| [#13036](https://github.com/openai/codex/issues/13036) | **Support display of multiple chats (multi-tab/multi-session UI)** | Long-standing request (Feb 2026); essential for multi-tasking and multi-agent workflows. Partially addressed in v0.146.0 but UI still single-threaded. | 13 comments, 👍8 |
| [#25709](https://github.com/openai/codex/issues/25709) | **Windows Desktop extremely sluggish/unusable — firewall-related?** | Broad performance regression; users report high CPU/memory, UI freezes. Suspected firewall/app-server interaction. | 11 comments, 👍2 |
| [#24534](https://github.com/openai/codex/issues/24534) | **Custom storage path for projectless chats/workspaces** | Users want control over where session JSONL files live (compliance, disk management, portability). | 11 comments, 👍23 |
| [#28102](https://github.com/openai/codex/issues/28102) | **`image_gen` skill unavailable after upgrade** | Regression breaking HatchPet and image generation workflows on Windows. | 10 comments, 👍3 |
| [#30649](https://github.com/openai/codex/issues/30649) | **Windows: `render_docx.py` passes invalid `file://` URI to LibreOffice `UserInstallation`** | Blocks document rendering skill on Windows; malformed URI breaks LibreOffice headless invocation. | 9 comments |
| [#35528](https://github.com/openai/codex/issues/35528) | **Incomplete residual fidelity across capture, model-visible, and durable state** | Architectural: when tool output is capped/elided/compacted, no faithful record of what was omitted or recoverable. Affects auditability and agent continuity. | 7 comments, 👍2 |
| [#32334](https://github.com/openai/codex/issues/32334) | **Codex Desktop crashes after in-app Browser sidebar webview creation (Windows)** | CLOSED but recent; indicates ongoing WebView2/GPU sandbox fragility on Windows. | 6 comments, 👍1 |
| [#28531](https://github.com/openai/codex/issues/28531) | **Crash/freeze opening image-heavy sessions (base64 payloads embedded in JSONL)** | Session files bloat with inline images; Electron main process OOMs. Needs offload/storage redesign. | 6 comments, 👍2 |

---

## Key PR Progress (Top 10 by Scope & Recency)

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#35882](https://github.com/openai/codex/pull/35882) | Bump `rust-toolchain` 1.95.0 → 1.97.1 in `/codex-rs` | Toolchain modernization; brings latest Rust fixes. | Open |
| [#30787](https://github.com/openai/codex/pull/30787) | Bump `rust-toolchain` 1.95.0 → 1.96.1 | Previous toolchain bump; now closed. | Closed |
| [#28761](https://github.com/openai/codex/pull/28761) | Keep default-branch discovery on local refs (avoid `git remote show`) | Removes network/SSH fallback during passive metadata lookup; improves startup latency and reliability. | Open |
| [#35878](https://github.com/openai/codex/pull/35878) | Use step environments for MCP file uploads | Fixes file-arg rewriting to use the environment available at the current step, not the turn-start snapshot. | Closed |
| [#35875](https://github.com/openai/codex/pull/35875) | Allow environment readiness updates in place | Adds `EnvironmentManager::publish_ready_info`; atomic snapshot replacement for repeated readiness publications. | Closed |
| [#35874](https://github.com/openai/codex/pull/35874) | Mark primary environment in model context | Adds `primary` attribute to each environment in multi-env context; persists selection. | Closed |
| [#35870](https://github.com/openai/codex/pull/35870) | Include session titles in external agent import history | Preserves original titles when importing external-agent sessions; new success types for history records. | Closed |
| [#35859](https://github.com/openai/codex/pull/35859) | Expose plugin installation timestamps in app-server summaries | Adds nullable `installedAt` (Unix seconds) to `PluginSummary`; preserved across remote/plugin list paths. | Closed |
| [#35857](https://github.com/openai/codex/pull/35857) | Add Bazel unit test targets for Rust binaries | Generates `<binary>-bin-unit-tests` for every Rust binary; runs via repo test infra. | Closed |
| [#35856](https://github.com/openai/codex/pull/35856) | Resolve imported connectors by MCP server name | Matches attributed MCP servers against normalized manifest names (case-insensitive), not UUIDs. | Closed |
| [#35854](https://github.com/openai/codex/pull/35854) | Box app-server event payloads | Moves `ServerNotification`/`ServerRequest` payloads behind `Box` in event enums; reduces stack size, improves routing/replay. | Closed |
| [#35852](https://github.com/openai/codex/pull/35852) | Migrate `codex-protocol` to shared HTTP types | Replaces direct `reqwest` dep with `codex-http-client::HttpError` + `http::StatusCode`; removes reqwest from protocol crate. | Open |
| [#35851](https://github.com/openai/codex/pull/35851) | Normalize Windows namespace paths in path URIs | Converts `\\?\D:\` and `\\.\D:\` to canonical `file:` URIs; fixes device-namespace UNC handling. | Closed |
| [#35850](https://github.com/openai/codex/pull/35850) | Preserve foreign paths in background terminal listings | Stops converting cross-platform terminal working dirs to host-native paths, preventing list-request failures. | Closed |
| [#35845](https://github.com/openai/codex/pull/35845) | Support plaintext collaboration tool messages | Preserves `encrypted_function_args`; delivers `spawn_agent`/`send_message`/`followup_task` as structured plaintext. | Closed |
| [#35843](https://github.com/openai/codex/pull/35843) | Tie remote exec servers to parent stdin | Adds `--exit-on-stdin-close` / `CODEX_EXEC_SERVER_EXIT_ON_STDIN_CLOSE`; graceful drain on parent close. | Closed |
| [#35840](https://github.com/openai/codex/pull/35840) | Handle legacy MCP discovery prevalidation errors | Falls back gracefully when legacy servers reject `server/discover` with null-ID JSON-RPC errors. | Closed |
| [#35839](https://github.com/openai/codex/pull/35839) | Decouple recommended plugins from tool suggestions | New `recommended_plugins` feature flag (disabled by default); loads candidates independently of `tool_suggest`. | Closed |
| [#35837](https://github.com/openai/codex/pull/35837) | Expose plugin eligibility metadata in app-server summaries | Adds `disabledReason` + `eligiblePlanTypes` to v2 `PluginSummary`; preserved across discovered/installed/cached paths. | Closed |

---

## Feature Request Trends (from Issues)

1. **Multi-session / multi-tab UI** — #13036 (8 👍), #34663 (3 👍), #35881 (remote threads missing). Users want true parallel chat threads, not just CLI-side session switching.
2. **Custom data/storage paths** — #24534 (23 👍). Enterprise/compliance need to control where session JSONL, logs, and caches live.
3. **Agent Client Protocol (ACP) support** — #30052. Request for built-in ACP (like Gemini CLI) to enable IDE/agent interop.
4. **MCP auto-reconnect** — #11489 (5 👍). SSE streams retry; MCP connections do not.
5. **Session portability & import/export** — #35870 (titles in import), #33008 (@-mention injects entire history). Users treat sessions as artifacts.
6. **Plugin/extension marketplace UX** — #35839, #35837. Decoupling recommendations from tool suggestions; exposing eligibility/plan gating.
7. **Better context/compaction fidelity** — #35528, #35355, #34971. Faithful residuals, no hallucinated task state, stop reprocessing massive cached context.
8. **Windows sandbox/permission hardening** — #35871 (MSIX pwsh blocked), #35864 (unelevated sandbox rejects split writable roots), #27236 (elevated sandbox breaks other Electron apps).
9. **Performance/memory on Windows** — #25709, #35879 (fans at max, massive RAM), #28531 (base64 images OOM).
10. **Browser/GPU stability on Windows** — #34133, #35352, #32334. SwiftShader/Code Integrity/WebView2 cluster.

---

## Developer Pain Points (Recurring Frustrations)

| Area | Representative Issues | Core Complaint |
|------|----------------------|----------------|
| **Windows Desktop Stability** | #34133, #35352, #32334, #25709, #35879, #35782 | GPU process crashes, app termination on browser use, sluggish UI, memory bloat, app-server disconnect kills whole app. |
| **Sandbox / Permission Model** | #35871, #35864, #35860, #27236, #23320 | MSIX PowerShell blocked; unelevated sandbox breaks `apply_patch`; Full Access still prompts; elevated sandbox breaks other apps; `codex.exe` locked on update. |
| **Session Management** | #13036, #34663, #33008, #35881, #28531 | Single-threaded UI; resume re-renders full history; @-mention injects entire conversation (freezes renderer); remote threads disappear; base64 images bloat JSONL. |
| **Context / Compaction Integrity** | #35528, #35355, #34971, #22219 | No faithful residual when output capped; partial output promoted to confirmed state; massive cached context reprocessed (latency, cost); stale task-state hallucinations. |
| **MCP / Tooling Reliability** | #11489, #30649, #28102, #35120 | No auto-reconnect; `render_docx` broken on Windows; `image_gen` skill missing; VS Code extension crashes (`process is not defined`). |
| **Data Portability / Config** | #24534, #30052 | No custom storage path; no built-in ACP for integration. |
| **Plugin Ecosystem** | #35839, #35837, #35859 | Recommendations coupled to tool suggestions; eligibility metadata hidden; install timestamps not exposed. |

---

*Generated from `openai/codex` GitHub data (releases, issues, PRs updated 2026-07-29).*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-07-29

---

## 1. Today's Highlights
The project shipped three releases in 24 hours: **v0.53.0 (stable)**, **v0.54.0-preview.0**, and **v0.55.0-nightly**. The stable release fixes a critical 400 Bad Request bug by coalescing cancelled tool responses and consecutive roles, while the nightly adds Firestore dual-locking for the PR-generator pipeline. Security remains a focus: a variable-expansion bypass (GHSA-wpqr-6v78-jr5g) and an SSRF vulnerability in `web-fetch.ts` were patched, and `js-yaml` was bumped to 4.3.0.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.53.0** | Stable | • `fix(core,a2a)`: group cancelled tool responses & coalesce consecutive roles to prevent 400 errors ([#28407](https://github.com/google-gemini/gemini-cli/pull/28407))<br>• `feat(caretaker-triage)`: LLM triage orchestrator & container build ([#28407](https://github.com/google-gemini/gemini-cli/pull/28407)) |
| **v0.54.0-preview.0** | Preview | • Changelogs for v0.53.0-preview.0 & v0.52.0<br>• Version bump to 0.54.0-nightly.20260722.gf743ab5 |
| **v0.55.0-nightly.20260729.g3499c84f7** | Nightly | • Version bump to 0.54.0-nightly.20260728.gbef611950 ([#28552](https://github.com/google-gemini/gemini-cli/pull/28552))<br>• `feat(pr-generator-db)`: Firestore concurrency dual-locking & test ingestion utilities ([#28432](https://github.com/google-gemini/gemini-cli/pull/28432)) |

---

## 3. Hot Issues (Top 10 by Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|---------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **Subagent recovery after MAX_TURNS reported as GOAL success** | Subagents silently mask turn-limit failures as successes, breaking trust in autonomous workflows. | 12 comments, 👍 2 — P1, needs retest |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist agent hangs indefinitely** | Core delegation path stalls on simple ops (e.g., folder creation), forcing users to disable subagents. | 8 comments, 👍 8 — P1, high user pain |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) **Robust component-level evaluations** | Epic to harden the 76 behavioral evals across 6 models; foundational for regression prevention. | 7 comments — P1, eval-infra |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **Assess AST-aware file reads, search, mapping** | Investigates whether AST tooling reduces turns/tokens for code navigation; potential step-change in agent efficiency. | 7 comments, 👍 1 — P2, epic |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) **Auto Memory retries low-signal sessions indefinitely** | Background extractor re-queues unread sessions forever, wasting compute & polluting memory. | 5 comments — P2 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) **Shell command stuck at “Waiting input” after completion** | Frequent UI desync: command finishes but CLI shows active prompt, blocking further interaction. | 4 comments, 👍 3 — P1 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **Browser subagent fails on Wayland** | Platform gap: browser automation broken on default Linux display server. | 4 comments, 👍 1 — P1, agent/browser |
| [#28575](https://github.com/google-gemini/gemini-cli/issues/28575) **CLI crashes on startup when `GEMINI_API_KEY` contains special chars** | New regression: `+`, `=` in keys cause parse error, blocking auth. | 3 comments — P2, security |
| [#28574](https://github.com/google-gemini/gemini-cli/issues/28574) **CLI crashes with `--verbose` on prompts > 500 chars** | Verbose mode unusable for real workloads; immediate crash. | 3 comments — P2 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) **Browser Agent ignores `settings.json` overrides (e.g., `maxTurns`)** | Config system bypassed; users cannot tune browser agent behavior. | 3 comments — P2 |

---

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | **Closed** | **Security**: Blocks `$VAR` / `${VAR}` variable-expansion bypass (GHSA-wpqr-6v78-jr5g); hardens dedup workflow. |
| [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) | **Open** | **Security**: Fixes SSRF in `web-fetch.ts` by switching to async DNS resolution (`isPrivateIpAsync`). |
| [#28401](https://github.com/google-gemini/gemini-cli/pull/28401) | **Closed** | **Core**: Bounds shell command output sent to model (prevents hundreds of KB context injection). |
| [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) | **Open** | **UX**: Propagates `InvalidStreamError` details to UI → actionable guidance (e.g., suggest `/compress`). |
| [#28565](https://github.com/google-gemini/gemini-cli/pull/28565) | **Closed** | **Core**: Skips merged `function-response` turns when finding active loop; fixes 400 on skill activation. |
| [#28432](https://github.com/google-gemini/gemini-cli/pull/28432) | **Closed** | **Infra**: Firestore dual-locking & test ingestion for PR-generator pipeline (nightly release). |
| [#28434](https://github.com/google-gemini/gemini-cli/pull/28434) | **Closed** | **Feature**: Antigravity agent runner & prompt templates for SSR code-gen pipeline. |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | **Open** | **Auth**: Refreshes MCP OAuth tokens with stored client ID; fixes re-auth loop on dynamic registration. |
| [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) | **Open** | **macOS**: Falls back to embedded Seatbelt profiles if missing; unblocks sandbox mode (`-s`) on gMac. |
| [#28576](https://github.com/google-gemini/gemini-cli/pull/28576) | **Open** | **Perf**: Vitest cache warmup → ~15% CI startup improvement on self-hosted runners. |

---

## 5. Feature Request Trends (from Issues)

1. **Subagent Reliability & Observability** — Users want subagents to respect `maxTurns`, report failures honestly, honor disable flags, and expose trajectories via `/chat share` ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21409](https://github.com/google-gemini/gemini-cli/issues/21409), [#22093](https://github.com/google-gemini/gemini-cli/issues/22093), [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
2. **Auto Memory Hardening** — Deterministic redaction *before* model context, quarantine of invalid patches, and backoff on low-signal sessions ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)).
3. **AST-Aware Tooling** — Evaluation of AST-based read/search/map to reduce turn count and token noise ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)).
4. **Browser Agent Parity** — Wayland support, config override respect, session takeover/lock recovery ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)).
5. **Evaluation Infrastructure** — Component-level evals, behavioral test expansion, CI stability ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#28577](https://github.com/google-gemini/gemini-cli/pull/28577)).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Subagent opacity & misbehavior** | Hangs (#21409), false success (#22323), unauthorized activation (#22093), ignored configs (#22267), missing context in bug reports (#21763). |
| **Shell/terminal desync** | “Waiting input” ghost state (#25166), stuck at interactive prompts (#22465), `\n` escape bugs (#22466), corruption after external editors (#24935). |
| **Memory system noise** | Infinite retry loops (#26522), unredacted secrets in context (#26525), silent patch drops (#26523). |
| **Security regressions in basics** | API key parsing (#28575), `--verbose` crash (#28574), variable-expansion bypass (#28403), SSRF (#28557). |
| **Config & platform gaps** | Browser agent ignores `settings.json` (#22267), Wayland unsupported (#21983), macOS seatbelt missing (#28551). |
| **Tool output flooding context** | Unbounded shell output burns tokens (#28401); >128/400 tools cause 400 errors (#24246). |

---

*Generated from `google-gemini/gemini-cli` GitHub data (releases, issues, PRs updated 2026-07-28 → 2026-07-29).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-07-29

---

## 1. Today's Highlights
Version **1.0.76-1** shipped with quality-of-life improvements: voice mode now pauses/resumes system media on macOS/Windows, the footer shows active scheduled-prompt counts, a new `/limits predict` command suggests session AI-credit limits, and configurable timed refreshes are supported. Meanwhile, the community is flagging a critical regression in 1.0.76-1 (silent exit on non-`all`/`default` log levels) and confirming that the Linux zombie-process fix (#4163) remains incomplete on AlmaLinux 8.10.

---

## 2. Releases
### v1.0.76-1 (2026-07-29)
| Change | Impact |
|--------|--------|
| Voice mode pauses/resumes media (macOS, Windows) | Prevents audio conflicts during voice input |
| Footer shows active scheduled-prompt count | Better visibility for `/every` / `/after` workflows |
| `/limits predict` command | Helps budget AI credits by analyzing similar sessions |
| Configurable timed refreshes | Allows automatic context/state refresh intervals |

> **Note:** Issue [#4285](https://github.com/github/copilot-cli/issues/4285) reports a silent `exit 1` on startup when log level is `none`, `error`, `warning`, `info`, or `debug` — only `all` and `default` work. Teams on 1.0.76-1 should verify log-level settings.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#4163](https://github.com/github/copilot-cli/issues/4163) | **Zombie processes accumulate on Linux** (~2/min/session) | Resource leak destabilizes long-running CI/daemon workloads | 6 comments, 3 👍; **closed but [#4290](https://github.com/github/copilot-cli/issues/4290) confirms still broken on AlmaLinux 8.10** |
| [#4165](https://github.com/github/copilot-cli/issues/4165) | `copilot --resume` hangs at “Resuming session…” on Windows cold start | Blocks session continuity for Windows users | 4 comments, 1 👍; workaround: resume via VS Code first |
| [#4159](https://github.com/github/copilot-cli/issues/4159) | Interactive mode goes blank after prompt in Windows Terminal | Renders TUI unusable; `-p` mode works | 3 comments, 3 👍; suspected terminal-rendering regression |
| [#4161](https://github.com/github/copilot-cli/issues/4161) | `task_complete` tool unavailable after switching back to autopilot | Regression of #1523; breaks agent-autonomy workflows | 3 comments, 4 👍; high developer friction |
| [#4078](https://github.com/github/copilot-cli/issues/4078) | Scheduled prompts kill existing prompt queue | Queued work silently dropped when `/every`/`/after` fires | 3 comments; reliability concern for automation |
| [#2734](https://github.com/github/copilot-cli/issues/2734) | **Auto-update plugins (all or per-plugin)** | Manual plugin updates create security/feature drift | 2 comments, **9 👍** — top-voted feature request |
| [#2770](https://github.com/github/copilot-cli/issues/2770) | CLI stuck on “Cancelling”; Enter/slash commands stop working | Requires full restart; correlates with rate-limiting | 1 comment, **9 👍** — long-standing UX pain point |
| [#4285](https://github.com/github/copilot-cli/issues/4285) | **1.0.76-1: silent exit 1 at startup for most log levels** | Blocks adoption of latest release; no diagnostics emitted | 0 comments (filed today); critical regression |
| [#4286](https://github.com/github/copilot-cli/issues/4286) | Streaming `input_json_delta` buffered until complete → multi-minute silence | Large tool args (e.g., big file writes) appear as hangs | 0 comments; affects perceived latency |
| [#4269](https://github.com/github/copilot-cli/issues/4269) | Empty model turn persisted as `content: null` → permanently bricks session | Session unrecoverable; strict OpenAI endpoints reject replay | 0 comments; data-corruption risk |

---

## 4. Key PR Progress
| PR | Author | Status | Summary |
|----|--------|--------|---------|
| [#4100](https://github.com/github/copilot-cli/pull/4100) | huangyoufeng76-debug | Open | “安全性” (Security) — details pending; likely dependency or auth hardening |

*Only one PR updated in the last 24h. Core fixes (zombie reaping, Windows resume, log-level regression) appear to be in internal branches.*

---

## 5. Feature Request Trends
1. **Plugin lifecycle automation** — #2734 (9 👍) leads demand for auto-update + per-plugin control.  
2. **Session resilience** — Multiple issues (#4078, #4161, #4269, #4282) ask for durable queues, tool availability, and corrupt-session recovery.  
3. **Model/config parity** — #4275 (ACP `contextTier`), #4287 (subagent model inheritance), #4272 (policy-gated models) show friction between interactive CLI and programmatic APIs.  
4. **Enterprise policy clarity** — #4005, #3934, #4272, #4283 highlight opaque “blocked by policy” errors and server-managed settings that don’t persist locally.

---

## 6. Developer Pain Points (Recurring Themes)
| Area | Frequency | Representative Issues |
|------|-----------|----------------------|
| **Windows TUI stability** | High | #4159 (blank UI), #4165 (resume hang), #3576 (MCP spawn) |
| **Process/session hygiene** | High | #4163 (zombies), #4290 (unfixed), #2182 (PTY deadlock), #2703 (hang → cancel loop) |
| **Cancellation UX** | Medium | #2770 (stuck “Cancelling”), #2703 (Escape → permanent cancel) |
| **Observability gaps** | Medium | #4285 (silent exit), #4286 (streaming silence), #4281 (stale “Pending”) |
| **Credential/keychain friction** | Low but sharp | #4273 (macOS XARA partition mismatch on dual-signed binaries) |

> **Actionable takeaway:** Windows and Linux platform issues dominate the open bug count. Teams on those platforms should pin to 1.0.71 or 1.0.75 until 1.0.76-1’s log-level regression and the zombie-process fix are verified.

---

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-07-29

## Today's Highlights
No new releases shipped in the last 24 hours. The community is actively discussing a critical plugin-system crash (#2553) affecting users with ≥2 plugins, while a new enterprise-focused feature request (#2568) for custom API Base URL support signals growing adoption of the open-source K3 model. Several long-standing PRs around MCP logging, approval hooks, and model display names were merged, improving stability and extensibility.

## Releases
*No new releases published in the last 24 hours.*

## Hot Issues

| Issue | Status | Why It Matters | Community Reaction |
|-------|--------|----------------|-------------------|
| [#2553](https://github.com/MoonshotAI/kimi-cli/issues/2553) `/plugins` crashes with TypeError when 2+ plugins installed (v0.29.0, Windows) | **OPEN** | **Critical regression** — the plugin management UI becomes unusable as soon as a second plugin is installed, blocking extensibility for power users. | 1 comment; no 👍 yet but high urgency for plugin authors. |
| [#2568](https://github.com/MoonshotAI/kimi-cli/issues/2568) Feature Request: Support custom API Base URL to access enterprise-level K3 gateway | **OPEN** (created today) | Enables **self-hosted/private-gateway deployments** for K3 (2.8T params), addressing rate-limiting, latency, HA, and audit requirements for enterprise teams. | 0 comments; early signal of enterprise adoption wave post-K3 open-source. |
| [#2566](https://github.com/MoonshotAI/kimi-cli/issues/2566) OAuth login rejects invited free users with active promotional coding credits | **OPEN** | **Auth regression** — blocks legitimate free-tier users who received trial credits, hurting onboarding and community growth. | 0 comments; likely under-reported. |
| [#1783](https://github.com/MoonshotAI/kimi-cli/issues/1783) Add `/delete` command to remove sessions | **OPEN** | UX gap: users must manually delete `~/.kimi/sessions/` folders; needed for disk hygiene, sensitive-data cleanup, and session-list manageability. | 5 comments, 1 👍 — steady demand since April. |
| [#708](https://github.com/MoonshotAI/kimi-cli/issues/708) Agent violated git safety protocol by committing without explicit permission | **CLOSED** | Safety concern: autonomous commits bypass user consent; erodes trust in agentic workflows. | 2 comments; fixed in recent versions. |
| [#732](https://github.com/MoonshotAI/kimi-cli/issues/732) Improve llamacpp local backend documentation | **CLOSED** | Docs gap for local inference; impacts developers wanting air-gapped or cost-controlled deployments. | 1 👍; addressed via doc updates. |

## Key PR Progress

| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#2567](https://github.com/MoonshotAI/kimi-cli/pull/2567) feat(usage): show absolute reset datetime in `/usage` panel | **OPEN** | Replaces fuzzy “resets in 4d” with exact local timestamp from API `reset_at` fields. | Improves quota transparency for heavy users. |
| [#2539](https://github.com/MoonshotAI/kimi-cli/pull/2539) fix(mcp): normalize tools for Moonshot API | **OPEN** | Generates stable Moonshot-compatible tool aliases, adds missing root `object` type, fixes `anyOf`/required schema shape. | Unblocks reliable MCP tool calling via Moonshot backend. |
| [#2507](https://github.com/MoonshotAI/kimi-cli/pull/2507) fix(acp): signal `QuestionNotSupported` instead of resolving empty answers | **OPEN** | Distinguishes user dismissal from unsupported question types in ACP server mode. | Fixes ambiguous model behavior during approval flows. |
| [#2284](https://github.com/MoonshotAI/kimi-cli/pull/2284) fix: fire notification hooks for approvals | **CLOSED** | Emits `Notification` hooks on approval requests with `permission_prompt` matcher and request details. Closes #2281. | Enables custom alerting/automation on human-in-the-loop steps. |
| [#2174](https://github.com/MoonshotAI/kimi-cli/pull/2174) fix: respect model `display_name` for kimi-for-coding | **CLOSED** | Removes hardcoded “kimi-for-coding” override; now shows backend-provided name (e.g., “Kimi-k2.6”). | Accurate model identification in UI/logs. |
| [#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176) fix(hooks): extract text from `ContentPart` for `UserPromptSubmit` hook | **OPEN** | Handles `list[ContentPart]` input (default message format) instead of falling back to empty string. | Restores regex matching & prompt inspection for hook consumers. |
| [#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637) fix: route MCP server log notifications to loguru instead of TUI | **CLOSED** | Redirects verbose MCP server logs (e.g., SearXNG) from Rich TUI stderr to loguru. | Eliminates TUI corruption/noise during tool-heavy sessions. |

## Feature Request Trends
1. **Enterprise/self-hosted deployment** — Custom API Base URL (#2568), local llamacpp backend (#732), and OAuth flexibility for private gateways.
2. **Session lifecycle management** — First-class `/delete` command (#1783), implicit in broader “workspace hygiene” asks.
3. **Plugin ecosystem hardening** — Crash fixes (#2553), but also implicit demand for plugin sandboxing, versioning, and marketplace features.
4. **Observability & control** — Absolute quota timestamps (#2567), approval notification hooks (#2284), accurate model naming (#2174).
5. **Local/air-gapped inference** — Ongoing interest in llamacpp/gguf support beyond just documentation.

## Developer Pain Points
- **Plugin system instability** — TypeError crash with multiple plugins (#2553) makes extensibility unreliable on Windows.
- **OAuth/auth edge cases** — Promotional-credit users blocked (#2566); enterprise SSO/gateway needs unmet (#2568).
- **Session clutter** — No native cleanup command forces manual filesystem ops (#1783).
- **Hook/event fidelity** — Empty prompts in `UserPromptSubmit` (#2176), ambiguous ACP question resolution (#2507), missing approval notifications (#2284) hinder automation.
- **MCP log pollution** — Server logs corrupting TUI (#1637) degrades UX in tool-heavy workflows.
- **Model identity opacity** — Hardcoded display names hid actual model versions (#2174).

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-07-29

## Today's Highlights
OpenCode shipped two patch releases (v1.18.8 → v1.18.9) focused on MCP compatibility, fixing legacy SDK client support, OAuth callback port handling, and desktop app stability (Solid cleanup crash, session loading). The issue tracker shows a wave of DeepSeek V4 integration bugs around `reasoning_content` handling, while the PR pipeline is heavy on TUI polish—tab UX, spinner customization, and subagent filtering—plus a new Hebrew RTL localization.

---

## Releases

### v1.18.9 (2026-07-29)
**Core**  
- Restored compatibility with legacy MCP SDK clients  

**Desktop**  
- Fixed Solid cleanup crash breaking navigation  
- Fixed home session loading (session list updates without full page suspend)  

### v1.18.8 (2026-07-29)
**Core**  
- Improved compatibility with newer MCP servers and OAuth flows  
- Reconnects MCP servers after expired SDK sessions (handles concurrent requests)  
- Honors configured MCP OAuth callback ports in `mcp debug`  
- Stops sending deprecated sampling defaults  

[View releases](https://github.com/anomalyco/opencode/releases)

---

## Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#25168](https://github.com/anomalyco/opencode/issues/25168) | **Jinja template error after compaction with LM Studio Qwen3** — “No user query found” crashes on next message | Blocks auto-compaction workflow for LM Studio users; 15 comments indicate widespread impact | 15 comments, 1 👍 |
| [#29618](https://github.com/anomalyco/opencode/issues/29618) | **`reasoning_content` missing for DeepSeek V4 Flash/Pro on OpenRouter** | Breaks thinking-mode models; affects multiple providers (OpenRouter, SiliconFlow) | 14 comments, 4 👍 |
| [#12680](https://github.com/anomalyco/opencode/issues/12680) | **TodoRead removed from tool registry** | Removes a core agent capability; regression from PR #11814 | 7 comments, 8 👍 |
| [#27497](https://github.com/anomalyco/opencode/issues/27497) | **Subagent permission inheritance broken since v1.14.17** | Docs not updated; breaks expected security model for nested agents | 7 comments, 4 👍 |
| [#28974](https://github.com/anomalyco/opencode/issues/28974) | **DeepSeek V4 Pro on SiliconFlow: `reasoning_content` must be passed back** | Duplicate of #29618 but provider-specific; confirms cross-provider pattern | 6 comments |
| [#29638](https://github.com/anomalyco/opencode/issues/29638) | **Subagents run sequentially, not in parallel** | Re-report of #14195; kills throughput for independent tasks | 5 comments, 4 👍 |
| [#29939](https://github.com/anomalyco/opencode/issues/29939) | **MCP servers spawn duplicate processes per session → crashes** | 1 project = 8+ MCP instances; 2+ projects = OOM/crash; architectural scaling bug | 4 comments |
| [#29001](https://github.com/anomalyco/opencode/issues/29001) | **Desktop app crashes on launch (Windows)** | Blocks Windows desktop users entirely; “Unexpected server error” on startup requests | 4 comments |
| [#24784](https://github.com/anomalyco/opencode/issues/24784) | **Bash tool hangs on Windows when grandchild inherits stdout pipe** | Affects Gradle/hvigor daemons; root cause is pipe handle inheritance | 4 comments |
| [#29650](https://github.com/anomalyco/opencode/issues/29650) | **Empty text parts persisted to DB when model skips prose** | Creates “broken” blank assistant messages in UI; data hygiene issue | 4 comments |

---

## Key PR Progress (Top 10 by Significance)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#39417](https://github.com/anomalyco/opencode/pull/39417) | **feat(task): add images parameter for subagent image passthrough** | Feature | Enables visual analysis tasks by passing image attachments to subagents via the task tool. |
| [#39176](https://github.com/anomalyco/opencode/pull/39176) | **feat: automatic model discovery from providers (Closes #6231)** | Feature | Providers can now pull `/v1/models` to auto-update available models; generic implementation. |
| [#39423](https://github.com/anomalyco/opencode/pull/39423) | **feat(i18n): Hebrew language support with RTL handling** | Feature | Full RTL-aware Hebrew localization across the app. |
| [#38625](https://github.com/anomalyco/opencode/pull/38625) | **feat(tui): filter subagents by activity** | Feature | Composer picker shows only active subagents; Tab toggles active/inactive; header shows toggle hint. |
| [#39442](https://github.com/anomalyco/opencode/pull/39442) | **fix(plugin): restore permission ask hook (Fixes #7006)** | Bugfix | Restores `permission.ask` plugin hook so plugins can intercept/deny requests before user prompt. |
| [#39386](https://github.com/anomalyco/opencode/pull/39386) | **fix(cli): embed native watcher binding** | Bugfix | Restores native directory watching in compiled Bun CLI; enables live plugin/config discovery without restart. |
| [#37889](https://github.com/anomalyco/opencode/pull/37889) | **fix: handle GitHub OIDC format change (Closes #37823)** | Bugfix | Adapts to new GitHub OIDC token format (`repo:octocat@123...` vs old `repo:octocat/my-repo:ref:...`). |
| [#39437](https://github.com/anomalyco/opencode/pull/39437) | **fix(session-ui): enable text selection in patch accordion** | Bugfix | Removes `user-select: none` inheritance; diffs now copyable. |
| [#39428](https://github.com/anomalyco/opencode/pull/39428) | **feat(tui): add unread tab glow** | UX | Stationary accent glow behind inactive tab numbers with unread activity; no extra animation. |
| [#39429](https://github.com/anomalyco/opencode/pull/39429) | **fix(tui): always show session tab strip** | UX | Tab strip now renders with a single open session; improves discoverability of tab navigation. |

---

## Feature Request Trends
From the issue stream, the strongest community pulls are:

1. **DeepSeek V4 / reasoning_content first-class support** — Multiple providers (OpenRouter, SiliconFlow) failing on the same contract; users need a provider-agnostic fix.
2. **Parallel subagent execution** — Re-reported after inactivity closure; critical for throughput.
3. **MCP server process consolidation** — Duplicate processes per session/project is an architectural bottleneck.
4. **Keyboard-first desktop UX** — Three related feature requests (#29903, #29904, #29905) for permission prompt shortcuts, session jump-to-pending, and workspace deletion from keyboard.
5. **Model discovery automation** — PR #39176 addresses this; users want providers to self-populate model lists.
6. **TodoRead tool restoration** — High 👍 count signals this was a relied-upon capability.

---

## Developer Pain Points (Recurring Frustrations)

| Area | Symptom | Frequency |
|------|---------|-----------|
| **Model provider integration** | `reasoning_content` handling breaks thinking-mode models across OpenRouter, SiliconFlow, LM Studio | 3+ issues, 30+ comments |
| **MCP scalability** | Duplicate server processes per session → memory pressure, crashes with multiple projects | 1 issue, high severity |
| **Windows desktop stability** | App crashes on launch; bash tool hangs with grandchild processes | 2 issues, blocking |
| **Subagent ergonomics** | Sequential execution, permission inheritance broken, task tool blocks parent on failure | 3+ issues |
| **Session/data hygiene** | Empty text parts in DB, large diffs hang loading, snapshot diffs consume memory | 2+ issues |
| **TUI/desktop keyboard gaps** | No shortcuts for permission prompts, sidebar toggle broken, no jump-to-pending-session | 3 feature requests same day |

---

*Generated from github.com/anomalyco/opencode data as of 2026-07-29. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-07-29

## Today's Highlights
The Pi codebase saw significant documentation investment with **47 Architecture Decision Records (ADRs) and 6 Technical Decision Records (TDRs)** merged, capturing the full architectural history from monorepo inception to HEAD. Concurrently, the team delivered **three major TUI upgrades**: sixel-based inline image support inside tmux, SGR mouse tracking with a pinned composer viewport, and a new Markdown mutation API for extensions. On the provider front, **Anthropic Vertex (GCP)**, **Apiário (Brazil)**, and **Fireworks Kimi K3** were added or enabled, expanding the built-in model catalog.

## Releases
No new releases published in the last 24 hours.

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#6747](https://github.com/earendil-works/pi/issues/6747) **API for enhancing agent message markdown** | Enables extensions to mutate message *presentation* (e.g., LaTeX formulas) without altering LLM context — unlocks rich rendering for math/code-heavy workflows. | 11 comments, 2 👍, **in progress** (PR #7231) |
| [#7064](https://github.com/earendil-works/pi/issues/7064) **WSL absolute Windows paths mishandled** | Blocks reliable file-tool usage on WSL2; agents fall back to full rewrites via shell, degrading performance and UX. | 9 comments, 1 👍 |
| [#7195](https://github.com/earendil-works/pi/issues/7195) **Extensions don't load if directory is a symlink** | Breaks dotfile-driven extension management — a common developer workflow. Fixed in recent PRs. | 6 comments, **closed** |
| [#7161](https://github.com/earendil-works/pi/issues/7161) **anthropic-messages missing `x-client-request-id`** | Prevents gateway-level session affinity for Anthropic traffic; multi-account proxies can't group conversations. | 5 comments |
| [#7194](https://github.com/earendil-works/pi/issues/7194) **Full re-render every 1s when tool card scrolls out of viewport** | Causes severe repaint storms in remote sandbox/PTY-forwarded sessions, making Pi unusable over high-latency links. | 5 comments |
| [#7049](https://github.com/earendil-works/pi/issues/7049) **Upgrade Undici to 8.8.0 for correct plain-HTTP proxy forwarding** | Undici 8.5.0 defaults to `CONNECT` tunneling for HTTP targets, breaking corporate proxies. Fixed in PR #7225. | 5 comments |
| [#6879](https://github.com/earendil-works/pi/issues/6879) **Auto-compaction never triggers past 100% context until provider overflow** | Sessions silently exceed context windows (373k tokens observed), only failing at API rejection — data loss risk. | 5 comments, 3 👍 |
| [#7199](https://github.com/earendil-works/pi/issues/7199) **Support Kimi K3 on Fireworks via OpenAI-compatible API** | New flagship model (added to models.dev 2026-07-27) not selectable in Pi 0.82.1. Merged via PR #7230. | 4 comments, **in progress** |
| [#7007](https://github.com/earendil-works/pi/issues/7007) **Concurrent inline `ctx.ui.custom` prompts deadlock** | Second prompt detaches first but its Promise never resolves — silent hang in extension UIs. | 4 comments, **closed (no-action)** |
| [#7150](https://github.com/earendil-works/pi/issues/7150) **RPC prompt during in-flight compaction: ACKed but silently dropped** | User messages submitted during compaction return `success: true` yet never appear in session — silent data loss at critical moment. | 2 comments |

## Key PR Progress

| PR | Summary | Impact |
|----|---------|--------|
| [#7247](https://github.com/earendil-works/pi/pull/7247) / [#7249](https://github.com/earendil-works/pi/pull/7249) **docs: add architecture decision records** | 47 ADRs + 6 TDRs recovered from full commit history — covers provider abstraction, session architecture, TUI engine, extensions, storage, infra. | **Major knowledge transfer**; onboards new contributors, codifies architectural intent. |
| [#7245](https://github.com/earendil-works/pi/pull/7245) **feat(tui): inline images under tmux via sixel** | Removes blanket `TMUX` image disable; adds sixel backend with capability detection. | Unblocks image rendering for **all tmux users** (previously zero support). |
| [#7236](https://github.com/earendil-works/pi/pull/7236) **feat(tui): pin chat input and support mouse caret** | Adds SGR mouse tracking, `Viewport` component (pinned composer + independent history scroll), preserves scroll position on new content. | **Modern TUI UX parity** with VS Code/Cursor; enables mouse-driven editing. |
| [#7231](https://github.com/earendil-works/pi/pull/7231) **Markdown API** | Implements extension-facing API to mutate agent message markdown representation without touching LLM payload. Closes #6747. | Foundation for **formula rendering, custom code blocks, rich previews**. |
| [#7243](https://github.com/earendil-works/pi/pull/7243) **fix(ai): update TypeBox nullable array validation** | Bumps TypeBox 1.1.38 → 1.3.7; fixes schema validation for `array[T] \| null`. Removes deprecated APIs (Type.Base, Value.Mutate, etc.). | **Potential breaking change** for extensions using TypeBox internals; unblocks valid JSON Schema patterns. |
| [#5262](https://github.com/earendil-works/pi/pull/5262) **feat(ai): add Anthropic Vertex provider** | Thin adapter over `AnthropicVertex` SDK; reuses shared Anthropic streaming/tool logic. | **First-class GCP Vertex AI support** for enterprise Claude workloads. |
| [#7240](https://github.com/earendil-works/pi/pull/7240) **feat(ai): add Apiário as built-in provider** | OpenAI-compatible endpoint (`api.apiario.dev/v1`) aggregating OpenAI, Anthropic, DeepSeek, Maritaca, Moonshot — BRL billing. | Expands **LATAM/Brazil developer access** without custom config. |
| [#7230](https://github.com/earendil-works/pi/pull/7230) **fix(ai): route Fireworks Kimi K3 through openai-completions** | Adds generator exception for `kimi-k3` / `kimi-k3-fast` → `openai-completions` at Fireworks inference endpoint. | **Day-zero support** for new Fireworks flagship model. |
| [#7225](https://github.com/earendil-works/pi/pull/7225) **fix: update undici from 8.5.0 to 8.8.0** | Fixes `HTTP_PROXY`/`HTTPS_PROXY` being ignored; corrects plain-HTTP proxy forwarding. Closes #7049. | Restores **corporate proxy compatibility** for MCP/API egress. |
| [#7218](https://github.com/earendil-works/pi/pull/7218) **fix(coding-agent): preserve resource metadata after extension resource reloads** | Ensures resource metadata (timestamps, hashes) survives hot-reload cycles. Closes #6968. | Stabilizes **extension resource watching** for long-running sessions. |

## Feature Request Trends
1. **Extensible message rendering** — #6747 (Markdown API) leads a cluster of requests for per-extension presentation layers (formulas, diagrams, custom code fences) without forked LLM context.
2. **Provider proliferation** — Rapid addition of niche/regional providers (Apiário, Anthropic Vertex, Fireworks routers, Z.AI, NVIDIA) signals demand for **zero-config model catalog breadth**.
3. **TUI modernization** — Mouse support (#7185, #7236), pinned input, inline images (#7245), and viewport management converge on **IDE-grade terminal UX**.
4. **Session durability** — Compaction reliability (#6879), RPC message guarantees (#7150), temp-dir cleanup (#6924), and symlink-safe extensions (#7195) reflect production hardening needs.
5. **Remote/container ergonomics** — WSL paths (#7064), Wayland clipboard (#7248), bind-mount git awareness (#7238), and PTY-forward repaint storms (#7194) target **cloud dev-environment workflows**.

## Developer Pain Points
- **WSL/Windows path translation** remains a daily friction point; file tools fall back to destructive shell rewrites.
- **Silent data loss** during compaction (prompts dropped, context overflow) erodes trust in long-running agent sessions.
- **Proxy/enterprise networking** breaks frequently (Undici version pin, missing `x-client-request-id`, CONNECT tunneling defaults).
- **Extension system fragility** — symlink blindness, double-loaded AGENTS.md in worktrees (#7221), metadata loss on reload.
- **TUI instability** — freezes on login/catalog fetch (#7113), double-Enter rename quirks (#7126), clipboard failures on Wayland (#7248), and full-transcript repaints in remote setups.
- **Model catalog coupling** — `/login` blocks indefinitely if `pi.dev` catalog unreachable (no timeout/AbortSignal).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-07-29

## Today's Highlights
Qwen Code shipped **v0.21.1** (stable) and a new nightly build, delivering telemetry alignment for GenAI content, a critical fix for MCP prompt completion blocking `Enter` on optional parameters, and a schema fix restoring `send_message` tool compatibility with Anthropic-backed models. The `/review` command received major hardening: headless CI-friendly `review run`, disk-space preflight guards, and a "low-signal" disclosure when zero findings are reported on non-trivial diffs. Meanwhile, the Windows terminal scrolling regression in v0.21.1 and input-box cursor/Cmd+C leaks are under active investigation.

---

## Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.21.1](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1)** | Stable | • `feat(core)`: Align GenAI content telemetry fields ([#7667](https://github.com/QwenLM/qwen-code/pull/7667))<br>• No breaking changes |
| **[v0.21.0-nightly.20260729.0c0ca5fed](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.0-nightly.20260729.0c0ca5fed)** | Nightly | • `feat(autofix)`: Defer suggestions after five change rounds ([#7913](https://github.com/QwenLM/qwen-code/pull/7913)) |

---

## Hot Issues (Top 10)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **[#7964](https://github.com/QwenLM/qwen-code/issues/7964)** | **Windows terminal: content unscrollable after v0.21.1 upgrade** | Regression blocking Windows users; screenshot shows viewport locked | 4 comments, P2, `welcome-pr` — high visibility for contributors |
| **[#7991](https://github.com/QwenLM/qwen-code/issues/7991)** | **MCP prompt completion treats optional params as required, blocking Enter** | Breaks prompt execution UX; already fixed in PR #7995 | 2 comments, P2, `scope/mcp` — quick turnaround |
| **[#7984](https://github.com/QwenLM/qwen-code/issues/7984)** | **`send_message` tool schema `oneOf` breaks Anthropic models** | Hard 400 on all Anthropic-backed models; core integration broken | 2 comments, P1, `category/core` — fixed in PR #7989 |
| **[#7981](https://github.com/QwenLM/qwen-code/issues/7981)** | **`/review` hardening & capability gaps from multi-model dogfooding** | 7-model test surfaced false-green approves, missing findings, build-test gaps | 2 comments, P0, `type/enhancement` — driving 4+ PRs |
| **[#7982](https://github.com/QwenLM/qwen-code/issues/7982)** | **Reduce immediate-prompt provider dispatch latency (~100 ms)** | Daemon cold-start perf; impacts interactive responsiveness | 1 comment, `perf(serve)` — optimization focus |
| **[#7980](https://github.com/QwenLM/qwen-code/issues/7980)** | **Input box cursor renders extra vertical segment** | Visual artifact in TUI; affects all platforms | New, 0 comments — UI polish |
| **[#7990](https://github.com/QwenLM/qwen-code/issues/7990)** | **Cmd+C leaks 'c' into input box** | macOS shortcut handling bug; corrupts input buffer | New, 0 comments — keyboard protocol issue |
| **[#7979](https://github.com/QwenLM/qwen-code/issues/7979)** | **Add timeout + default for `ask_user_question` in unattended contexts** | CI/automation hangs without interactive TTY | New, 0 comments — automation hardening |
| **[#7937](https://github.com/QwenLM/qwen-code/issues/7937)** | **E2E failure: `canUseTool` with asyncGenerator prompt** | CI flakiness in tool-control tests; autofix in progress | 3 comments, `autofix/in-progress` — CI stability |
| **[#7942](https://github.com/QwenLM/qwen-code/issues/7942)** | **E2E failure: interactive read-then-write sequence** | File-system interactive test flake; autofix in progress | 3 comments, `autofix/in-progress` — CI stability |

---

## Key PR Progress (Top 10)

| # | PR | Type | Summary |
|---|----|------|---------|
| **[#7995](https://github.com/QwenLM/qwen-code/pull/7995)** | Fix | **MCP prompt completion no longer blocks Enter for optional params** — fixes #7991; completion handler now executes prompt instead of appending `--input="` |
| **[#7989](https://github.com/QwenLM/qwen-code/pull/7989)** | Fix | **Drop top-level `oneOf` from `send_message` tool schema** — restores Anthropic compatibility; was hard 400 on all Anthropic-backed models |
| **[#7983](https://github.com/QwenLM/qwen-code/pull/7983)** | Feat | **`review run` — headless review with machine-readable verdict** — CI-friendly: stdout verdict, stderr progress, exit codes for gating |
| **[#7986](https://github.com/QwenLM/qwen-code/pull/7986)** | Fix | **Preflight free disk before `build-test` installs/builds** — 3 GiB floor for `npm ci`, 1 GiB for build; skips with disclosure like deadline skip |
| **[#7987](https://github.com/QwenLM/qwen-code/pull/7987)** | Feat | **Disclose zero-finding Approve on non-trivial diff as low signal** — verdict line now reads: `Approve — low signal: none of 11 agents reported a finding on non-trivial diff (155 lines)` |
| **[#7976](https://github.com/QwenLM/qwen-code/pull/7976)** | Feat | **Certified session writer handoff** — integrity-protected protocol for daemon-managed session writers; schema-v2 sealed lock on shutdown |
| **[#7996](https://github.com/QwenLM/qwen-code/pull/7996)** | Fix | **Map Kitty Super (Command) modifier to meta** — fixes macOS Command / Windows Super key handling in Kitty keyboard protocol |
| **[#7974](https://github.com/QwenLM/qwen-code/pull/7974)** | Feat | **Lead verify comment with qualitative verdict, fold Chinese** — English-by-default with Chinese folded; addresses maintainer feedback on #7836 |
| **[#7929](https://github.com/QwenLM/qwen-code/pull/7929)** | Feat | **Web Shell: contextual task panels** — persistent right-side workspace with chat header, context panel (env, subagents, Monitor jobs), tabbed extension area |
| **[#7934](https://github.com/QwenLM/qwen-code/pull/7934)** | Test | **Migrate 39 flaky E2E tests to `fake-openai-server`** — eliminates model variance/latency; covers tool filtering, permissions, abort, lifecycle |

---

## Feature Request Trends
1. **Headless / CI-first tooling** — `review run`, machine-readable verdicts, exit codes, unattended timeouts (#7983, #7979)
2. **Review quality guards** — low-signal disclosure, disk preflight, build-test integration, false-green prevention (#7981, #7986, #7987)
3. **Web Shell as IDE** — contextual panels, Monitor integration, tabbed extensions, pairing UX polish (#7929, #7997)
4. **Daemon performance** — latency reduction, certified handoff, provider dispatch optimization (#7982, #7976)
5. **MCP maturity** — prompt completion fixes, schema compliance, optional param handling (#7991, #7995, #7989)
6. **Cross-platform TUI polish** — Windows scroll, cursor rendering, keyboard protocol (Kitty Super) (#7964, #7980, #7990, #7996)

---

## Developer Pain Points
| Area | Recurring Frustration | Evidence |
|------|----------------------|----------|
| **Windows TUI** | Scrolling broken in v0.21.1; input/cursor artifacts | #7964 (4 comments), #7980, #7990 |
| **CI/CD flakiness** | E2E tests fail intermittently on asyncGenerator, interactive FS | #7937, #7942 (both `autofix/in-progress`) |
| **Anthropic integration** | Tool schemas with `oneOf` hard-fail — silent breakage | #7984 (P1), fixed in #7989 |
| **MCP UX** | Optional params block Enter; completion feels mandatory | #7991, fixed in #7995 |
| **Review trust** | Zero-finding Approves on real diffs; no disk guard on build-test | #7981 (P0), driving 4 PRs |
| **Automation gaps** | `ask_user_question` hangs in unattended; no timeout/default | #7979 (new) |
| **Keyboard protocol** | Super/Command modifier ignored; Cmd+C leaks char | #7996, #7990 |

---

*Generated from GitHub data as of 2026-07-29. All links point to live issues/PRs on github.com/QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-07-29

## 1. Today's Highlights
The v0.9.2 release candidate is being finalized with critical Windows fixes (CRLF editing, ConPTY handle leak), the new **Operate** startup mode now exposed in the native picker, and a batch of TUI stability improvements around stale shell jobs and VS Code rendering. Community discussion is heating up around a `--no-sandbox` escape hatch, a proper `/stop` command for autonomous workflows, and LaTeX math rendering in the terminal.

## 2. Releases
No new releases published in the last 24 hours. The v0.9.2 release candidate is in final validation (see [PR #4954](https://github.com/Hmbown/CodeWhale/pull/4954) and [PR #4945](https://github.com/Hmbown/CodeWhale/pull/4945)).

## 3. Hot Issues (10 Noteworthy)

| Issue | Status | Why It Matters |
|-------|--------|----------------|
| [#4955](https://github.com/Hmbown/CodeWhale/issues/4955) **Zero-sandbox / `--no-sandbox` mode** | OPEN 👍1 | Developers report the kernel-level Seatbelt sandbox breaks basic shell commands daily; a fully unsandboxed mode is requested for trusted local dev machines. |
| [#4941](https://github.com/Hmbown/CodeWhale/issues/4941) **Thinking level reverts to Auto on restart** | OPEN | Persisted `reasoning_effort` is discarded when the model is set to "Auto", forcing users to re-select their preferred thinking level every session. |
| [#4959](https://github.com/Hmbown/CodeWhale/issues/4959) **`/stop` command & runtime STOP-word intercept** | OPEN | In YOLO/autonomous mode, text commands like `stop` are ignored; a mechanical tool-call block is needed for safety. |
| [#4957](https://github.com/Hmbown/CodeWhale/issues/4957) **LaTeX math not rendered in TUI** | OPEN | Raw `$...$` source is displayed instead of formatted math, blocking technical/scientific workflows. |
| [#4956](https://github.com/Hmbown/CodeWhale/issues/4956) **Provider network error in WSL2** | OPEN | Fresh WSL2 installs fail to connect to API providers; suggests environment-specific TLS/proxy regression. |
| [#4100](https://github.com/Hmbown/CodeWhale/issues/4100) **`exec_shell` exit code 2147483647 on Windows** | CLOSED | ConPTY handle leak/resource exhaustion in long-running sessions; fixed in v0.9.2 path. |
| [#4764](https://github.com/Hmbown/CodeWhale/issues/4764) **`edit_file` fails on CRLF files (Windows)** | CLOSED | Exact-match searches broken on `\r\n` files; fixed via LF-normalized search with CRLF-preserving writes ([PR #4942](https://github.com/Hmbown/CodeWhale/pull/4942)). |
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) **Chinese translation of "Constitution"** | OPEN | Community debate: “宪法” (constitution) vs “协作准则” (collaboration rules) vs “宪章” (charter) — political sensitivity vs product clarity. Resolved in [PR #4948](https://github.com/Hmbown/CodeWhale/pull/4948) as “宪章”. |
| [#4547](https://github.com/Hmbown/CodeWhale/issues/4547) **Transcript spinners persist for stale/ghost shell jobs** | CLOSED | UI showed live spinners + Stop controls for jobs that no longer existed; fixed in [PR #4937](https://github.com/Hmbown/CodeWhale/pull/4937). |
| [#4794](https://github.com/Hmbown/CodeWhale/issues/4794) **Model catalog: modality as first-class routed capability** | CLOSED | Vision/input-output modalities parsed but never used for routing; now promoted to decision-time capability. |

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|----|--------|---------|
| [#4953](https://github.com/Hmbown/CodeWhale/pull/4953) | CLOSED | **Expose Operate startup mode** — adds `Operate` to native `/config` picker, preserves it through settings canonicalization, keeps `agent` as Act's wire compat value. |
| [#4937](https://github.com/Hmbown/CodeWhale/pull/4937) | CLOSED | **Finalize stale shell transcript cells** — replaces live spinners with static “stale/no-output” status, suppresses sidebar spinner for evicted jobs. |
| [#4942](https://github.com/Hmbown/CodeWhale/pull/4942) | CLOSED | **Preserve CRLF edits** — LF-normalized search with byte-accurate span mapping; replacement newlines match file’s original style. |
| [#4951](https://github.com/Hmbown/CodeWhale/pull/4951) | CLOSED | **Calm VS Code rendering & retry HTTP 499** — restores decorative motion guard under `TERM_PROGRAM=vscode`; treats pre-stream 499 as transient for backoff retry. |
| [#4931](https://github.com/Hmbown/CodeWhale/pull/4931) | CLOSED | **Migrate QA PTY tests to `rio-vt`** — swaps `vt100` crate for Rio’s terminal engine, improving rendering fidelity in CI. |
| [#4948](https://github.com/Hmbown/CodeWhale/pull/4948) | CLOSED | **i18n: Chinese “Constitution” → “宪章” (charter)** — resolves terminology debate; updates tests and onboarding copy. |
| [#4943](https://github.com/Hmbown/CodeWhale/pull/4943) | CLOSED | **Restore `/rc` remote control** — re-enables account-owned session enrollment for web-driven control without second runtime. |
| [#4944](https://github.com/Hmbown/CodeWhale/pull/4944) | CLOSED | **Align landing page with managed product** — new brand mark, quiet navy shell, real terminal capture labeled v0.9.1. |
| [#4958](https://github.com/Hmbown/CodeWhale/pull/4958) | OPEN | **CI: SBOM attestation & pinned provenance** — adds Software Bill of Materials to release artifacts for supply-chain transparency. |
| [#4908](https://github.com/Hmbown/CodeWhale/pull/4908) | CLOSED | **zh-Hans translation overhaul (1134 keys)** — adversarial review against `en.json` and `AGENTS.md` conventions. |

## 5. Feature Request Trends
1. **Sandbox escape hatch** — `#4955` reflects a strong desire for a `--no-sandbox` flag to bypass Seatbelt on trusted machines.
2. **Hard interrupt/stop control** — `#4959` and related chatter show users want a reliable, non-cooperative way to halt autonomous agent loops.
3. **Rich text/math rendering** — `#4957` (LaTeX) signals demand for technical notation support in-model responses.
4. **Session state fidelity** — `#4941` (thinking level), `#4952`/`#4953` (Operate mode) highlight frustration with settings not round-tripping across restarts.
5. **Windows-first parity** — CRLF, ConPTY, VS Code terminal regressions cluster around making Windows a tier-1 platform.

## 6. Developer Pain Points
- **Seatbelt sandbox overreach** — Breaks `git`, `npm`, shell built-ins daily; workarounds exhausted (`#4955`).
- **WSL2 connectivity fragility** — Fresh installs fail to reach providers (`#4956`), suggesting proxy/TLS/CA bundle issues.
- **ConPTY instability** — Long sessions hit handle exhaustion (exit code `i32::MAX`), requiring process restart (`#4100`).
- **TUI rendering in VS Code** — Animated frames corrupt output; “calm” mode regression re-introduced (`#4950`/`#4951`).
- **Settings persistence leaks** — Canonicalizers silently coerce values (Auto → Act, Operate → Act) causing confusing resets (`#4941`, `#4952`).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*