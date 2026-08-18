# AI CLI Tools Community Digest 2026-08-18

> Generated: 2026-08-18 01:40 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-18)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is maturing rapidly with **three distinct tiers** emerging: **production-grade platforms** (Claude Code, OpenAI Codex, Qwen Code) shipping stable releases with enterprise features; **active innovators** (Gemini CLI, OpenCode, Pi, DeepSeek TUI) iterating aggressively on agent orchestration, multimodal support, and TUX polish; and **early-stage or dormant projects** (Kimi Code, Grok Build) with minimal recent activity. Across the board, communities are prioritizing **reliability over features** — regression fixes, sandbox hardening, session durability, and cross-platform parity dominate over new capabilities. The convergence on **agent orchestration**, **MCP integration**, **context management**, and **enterprise readiness** (SSO, audit, proxy support) signals an industry shift from "chat assistants" to **programmable development infrastructure**.

---

## 2. Activity Comparison (2026-08-18)

| Tool | Issues Updated (24h) | PRs Merged (24h) | Release Status | Top Community Signal |
|------|---------------------|------------------|----------------|---------------------|
| **Claude Code** | 10 hot + broader backlog | 10 (tooling/docs) | **v2.1.234** stable | #19649: 97👍 (model tool-choice regression, 7mo open) |
| **OpenAI Codex** | 10 hot + compaction cluster | **19** (infra-heavy) | **rust-v0.148.0-alpha.21** | #28969: 195👍 (disable 60s auto-resolve) |
| **Gemini CLI** | 10 hot (subagent focus) | 5 closed, 5 open | **v0.56.0-nightly** only | #21409: 8👍 (generalist agent hangs) |
| **GitHub Copilot CLI** | 10 hot (auth/session) | 1 (docs only) | **None** | #1481: 17👍 (SHIFT+ENTER UX, closed) |
| **Kimi Code CLI** | 0 | 0 | **None** | No activity |
| **OpenCode** | 10 hot (billing/DeepSeek) | 10 (bug fixes) | **None** | #32149: 6👍 (silent stall, Jun open) |
| **Pi** | 10 hot (20+ closed) | **15+** (major triage) | **None** | #534: 39👍 (XDG config, closed) |
| **Qwen Code** | 4 updated (low churn) | 10 (CI/UX hardening) | **v0.21.13** stable + nightly | #7167: fleet dashboard (bot-maintained) |
| **DeepSeek TUI** | 10 hot (CI/config) | 10 (i18n/resilience) | **v0.9.9** (yesterday) | #2369: 8 comments (config fragmentation, May open) |
| **Grok Build** | 0 | 0 | **None** | No activity |

**Key Observations:**
- **OpenAI Codex** and **Pi** show highest PR velocity (infra/investment phase)
- **Claude Code**, **Qwen Code**, **DeepSeek TUI** shipping user-facing releases
- **GitHub Copilot CLI** and **OpenCode** in stabilization mode (low PRs, high issue severity)
- **Kimi/Grok** effectively inactive

---

## 3. Shared Feature Directions (Cross-Tool Convergence)

| Requirement | Tools Affected | Specific Community Needs |
|-------------|----------------|-------------------------|
| **Agent/Subagent Orchestration Reliability** | Claude Code, Codex, Gemini CLI, OpenCode, Pi, DeepSeek TUI | Parent-agent wake-up on child completion (Codex #15723), false-success reporting (Gemini #22323), endless loops (OpenCode #43146), agent rail visibility (DeepSeek #5479), subagent trust/continuation (Pi #8250) |
| **MCP Server Lifecycle & Security** | Codex, Copilot CLI, OpenCode, Qwen Code, Pi | Stdio reaping (Codex #38754), OAuth issuer validation (Copilot #4480/#4439), token refresh serialization (OpenCode #43074), fingerprint pinning (OpenCode #40125), Bedrock Smithy headers (Pi #8243) |
| **Context Compaction & Memory Management** | Codex, Claude Code, Gemini CLI, Pi, Qwen Code | Stuck reconnecting (Codex #22107/#38861), prompt-cache friendliness (Claude #87487), Auto Memory redaction pipeline (Gemini #26525), append compaction for cache reuse (Pi #8120), daemon transcript bounds (Qwen #9303) |
| **Cross-Platform Parity (Windows/WSL/Linux/ARM64)** | All active tools | WSL shell poisoning (Codex #25317), Linux seccomp (Claude #43454), Wayland browser agent (Gemini #21983), ARM64 splash hang (Codex #38971), Windows path handling (OpenCode #43036), NSIS provisioning (DeepSeek #5403) |
| **Session Durability & Portability** | Codex, Copilot CLI, OpenCode, Pi, Qwen Code | Remote→local restore (Copilot #4514), `--continue` session hijacking (OpenCode #43133), worktree/session registry (Qwen #8969, Pi #8270), cross-device thread sync (Codex #23418) |
| **Enterprise/Proxy/Observability Ready** | Codex, Copilot CLI, Pi, Qwen Code | OTel proxy stack (Codex #39091–#39105), custom CA support (Codex #39104), org model catalogue (Copilot #4390), Copilot policy rate-limit mitigation (Pi #8254), SWE-bench validation (Qwen v0.21.13) |
| **Model Provider Feature Parity** | Pi, Codex, Claude Code, OpenCode, Qwen Code | Anthropic cache control (Pi #7995), thinking budgets (Pi #8275, Codex GPT-5.6 872k), local model identity (Qwen #7433), DeepSeek adapter routing (OpenCode #43106), reasoning details (Pi #8246) |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|-----------|-------------|--------------|------------|-------------------|----------|-----|-----------|--------------|
| **Primary Focus** | Enterprise-grade CLI + Desktop app | Agent platform + Realtime streaming | Subagent orchestration + AST tooling | GitHub ecosystem integration + MCP | Billing transparency + Provider routing | Multi-provider compatibility layer + TUI | Benchmark-validated releases + Web Shell | Community-driven TUI + i18n + Resilience |
| **Target User** | Professional devs, enterprise teams | Power users, agent builders, enterprise | Google ecosystem, code-centric agents | GitHub-native orgs, MCP consumers | Cost-conscious, multi-provider users | Polyglot model users, extension authors | Qwen model users, CI/CD fleets | DeepSeek users, Linux/Windows power users |
| **Technical Approach** | Rust/TS, sandboxed, Bedrock+Direct API | Rust, Effect-TS, local app-server, OTel | TS, gVisor, ACP protocol, SSR agents | Node/TS, GitHub APIs, MCP-first | TS, SQLite WAL, plugin MCP transforms | Rust/TS, Smithy/HTTP, model registry | Rust/TS, deterministic CI, SWE-bench gated | Rust, Ratatui, dictionary i18n spine |
| **Differentiator** | Cross-surface state (Cowork), transcript dirs | 872k context, `/agents` dashboard, realtime | Auto Memory, AST-aware ops (EPIC), SSR | GitHub org model sync, Codespaces integration | Transparent billing, per-provider adapters | Provider compatibility layer, append compaction | Live-session registry, web composer, fleet dashboard | Honest telemetry labeling, ocean-scene TUI, config migration |
| **Maturity Signal** | Stable releases, 7mo-old top regression | Alpha releases, heavy infra investment | Nightly only, subagent instability | Stable but auth regressions, low PR velocity | Active billing complaints, V2 migration | Major triage push, 20+ issues closed/day | Stable + nightly, benchmark-gated releases | v0.9.9, CI red on both platforms |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Production-Ready** | **Claude Code**, **Qwen Code**, **OpenAI Codex** | Regular stable/alpha releases; benchmark validation (Qwen); 872k context + agents dashboard (Codex); enterprise features (Claude); high-impact PR velocity (Codex 19, Claude 10) |
| **High Momentum / Rapid Iteration** | **Pi**, **DeepSeek TUI**, **Gemini CLI** | Pi: 20+ issues closed + 15 PRs merged in 24h; DeepSeek: v0.9.9 + i18n spine migration; Gemini: nightly cadence, subagent EPICs |
| **Stabilization / Fixing Regressions** | **GitHub Copilot CLI**, **OpenCode** | Copilot: auth regressions on every minor, session fragility, 1 PR/24h; OpenCode: billing complaints, DeepSeek V4 loops, V2 migration fixes |
| **Low / No Activity** | **Kimi Code CLI**, **Grok Build** | Zero GitHub activity in 24h; no releases, issues, or PRs |

**Maturity Indicators:**
- **Benchmark-gated releases**: Only Qwen Code (SWE-bench Verified + Terminal-Bench 2.0)
- **Enterprise hardening**: Codex (OTel proxy, custom CA, 872k context), Claude Code (Bedrock, seccomp, cross-session), Copilot CLI (org model sync)
- **Community trust signals**: Pi (39👍 XDG fix), Codex (195👍 auto-resolve), Claude (97👍 tool-choice), DeepSeek (8 comments config fragmentation)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication for Developers/Orgs |
|-------|----------------|--------------------------------|
| **Agent Orchestration = Core Product** | 🔴 Critical | All major tools investing in subagent reliability, wake-up protocols, observability (agent rails, dashboards). Expect **standardized agent protocols** (ACP-like) to emerge. |
| **Context Management > Raw Context Size** | 🔴 Critical | 872k tokens (Codex) matters less than **compaction reliability** (Codex stuck, Pi append mode, Qwen transcript bounds, Gemini Auto Memory). **Prompt-cache friendliness** now a stated requirement (Claude #87487). |
| **MCP as Universal Integration Layer** | 🟠 High | OAuth regressions (Copilot), reaping leaks (Codex), token refresh races (OpenCode), fingerprint pinning (OpenCode) — **MCP hardening is the new "plugin API" battle**. |
| **Cross-Platform Parity as Table Stakes** | 🟠 High | Windows/WSL/ARM64/Wayland/Linux seccomp issues block adoption. Tools investing in **native sandboxing** (bubblewrap, gVisor, CIG) vs. **portability layers**. |
| **Billing/Usage Transparency Demanded** | 🟡 Rising | OpenCode billing complaints (5+ issues/24h), Copilot quota/429 opacity, DeepSeek honest telemetry labeling — **enterprise procurement requires audit-grade metering**. |
| **Model-Agnostic Compatibility Layers Win** | 🟡 Rising | Pi's provider registry (Anthropic cache, OpenAI thinking budgets, Bedrock Smithy, Qwen/GLM thinking levels) shows **abstraction over single-model optimization**. |
| **TUI/UX Polish as Differentiator** | 🟢 Emerging | DeepSeek ocean scene, Pi differential rendering (10k+ lines), Qwen web composer, Codex `/agents`

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-08-18 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py 0% recall` | Fixes the core evaluation engine (`run_eval.py`, `run_loop.py`, `improve_description.py`) that incorrectly reports 0% recall for every skill description, breaking the description-optimization loop. | Directly addresses **Issue #556** (12 comments, 7 👍) — the highest-engagement bug report. Root cause: `claude -p` never triggers skills during eval on any platform. | **Open** (updated 2026-06-23) |
| 2 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `feat: self-audit — mechanical verification + 4-dimension reasoning gate` | Universal pre-delivery audit skill: Step 0 verifies every claimed output file exists; Steps 1–4 run adversarial reasoning checks (correctness, completeness, security, maintainability) in damage-severity order. | Proposed alongside **Issue #1385** (Reasoning Quality Gate Pipeline, 4 comments). Represents a shift toward *provable* output quality. | **Open** (updated 2026-07-02) |
| 3 | **[#723](https://github.com/anthropics/skills/pull/723)** `feat: testing-patterns skill` | Comprehensive testing skill covering Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, E2E (Playwright/Cypress), property-based testing, mutation testing, and CI integration. | Fills a documented gap — no existing skill covered the full testing stack. Active maintenance through April 2026. | **Open** (updated 2026-04-21) |
| 4 | **[#568](https://github.com/anthropics/skills/pull/568)** `feat: ServiceNow platform skill` | Broad ServiceNow assistant covering ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, Vulnerability Response, IntegrationHub — not just scripting. | Longest-running active PR (Mar–Aug 2026). Signals strong enterprise demand for platform-level skills. | **Open** (updated 2026-08-12) |
| 5 | **[#83](https://github.com/anthropics/skills/pull/83)** `feat: skill-quality-analyzer + skill-security-analyzer` | Two meta-skills for the marketplace: quality analyzer (5-dimension rubric: structure, correctness, usability, maintainability, security) and security analyzer (injection, path traversal, secret leakage, supply-chain). | Addresses the repo’s own quality gap; referenced in **Issue #202** (skill-creator best practices, 8 comments). | **Open** (updated 2026-01-07) |
| 6 | **[#514](https://github.com/anthropics/skills/pull/514)** `feat: document-typography skill` | Prevents orphan/widow lines, header stranding, numbering misalignment in AI-generated documents (PDF, DOCX, HTML). Triggers on any document generation request. | Targets a universal pain point — “users rarely ask for good typography but always notice bad.” | **Open** (updated 2026-03-13) |
| 7 | **[#525](https://github.com/anthropics/skills/pull/525)** `feat: pyxel skill for retro game development` | Integrates `pyxel-mcp` (MCP server for Pyxel retro engine): write → run_and_capture → inspect → iterate loop for 8-bit/pixel-art games in Python. | Novel MCP-backed skill pattern; author is Pyxel creator. Updated July 2026. | **Open** (updated 2026-07-15) |
| 8 | **[#486](https://github.com/anthropics/skills/pull/486)** `feat: ODT skill — OpenDocument creation & parsing` | Create, fill, read, convert `.odt`/`.ods`; template filling; ODT→HTML parsing. Triggers on “ODT”, “OpenDocument”, “LibreOffice”, “ISO standard format”. | Addresses open-format demand; complements existing DOCX/PDF skills. | **Open** (updated 2026-04-14) |

---

## 2. Community Demand Trends (from Issues)

| Rank | Theme | Evidence | Signal Strength |
|------|-------|----------|-----------------|
| 1 | **Trust & Security Infrastructure** | **#492** (43 comments, 2 👍): Community skills published under `anthropic/` namespace enable impersonation; **#189** (6 comments, 9 👍): duplicate skills from `document-skills` + `example-skills` plugins pollute context. | 🔴 Critical — namespace governance & deduplication needed |
| 2 | **Organizational Skill Management** | **#228** (16 comments, 8 👍): No org-wide sharing; manual `.skill` file transfer via Slack/Teams → Settings upload. | 🟠 High — enterprise adoption blocker |
| 3 | **Evaluation & Trigger Reliability** | **#556** (12 comments, 7 👍): `run_eval.py` reports 0% trigger rate; **#1099**/**#1050**: Windows subprocess/encoding bugs break skill-creator. | 🟠 High — core toolchain broken on Windows |
| 4 | **Context-Window & Token Efficiency** | **#1487** (4 comments): `claude-api` skill injects ~156k tokens in one call; **#1385** (4 comments): proposal for 3-gate reasoning pipeline (calibration → adversarial review → delivery verification). | 🟡 Growing — large-context skills exhaust windows |
| 5 | **MCP & Platform Interoperability** | **#16** (4 comments): “Expose Skills as MCPs”; **#29** (4 comments): Bedrock/AWS support. | 🟡 Steady — demand for protocol-level integration |
| 6 | **Quality Gates & Self-Verification** | **#1385**/**#1367**: Multi-stage reasoning pipelines; **#83**: quality/security analyzers as skills. | 🟢 Emerging — meta-skills for skill quality |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land Soon)

| PR | Skill | Why It’s Poised to Merge |
|----|-------|--------------------------|
| **[#1538](https://github.com/anthropics/skills/pull/1538)** | Spec compliance fixes for `template/` and `web-artifacts-builder/` | Repo maintainers enforce `skills-ref validate`; PR fixes two blocking spec violations (updated 2026-08-12). |
| **[#1595](https://github.com/anthropics/skills/pull/1595)** | Add UIZZE to Partner Skills | Single-line README addition; partner onboarding is low-friction (created 2026-08-17). |
| **[#1362](https://github.com/anthropics/skills/pull/1362)** | `web-artifacts-builder`: pnpm ≥10.1 compat, favicon strip, font inlining | Three concrete, reproducible fixes for a bundled skill; hard blocker on modern toolchain (updated 2026-08-16). |
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval engine fix | Highest-impact bug; unblocks description optimization for *all* skills (updated 2026-06-23). |
| **[#568](https://github.com/anthropics/skills/pull/568)** | ServiceNow platform skill | Enterprise scope, 5-month iteration, last update 2026-08-12 — nearing completion. |
| **[#723](https://github.com/anthropics/skills/pull/723)** | Testing-patterns skill | Comprehensive, well-structured, fills a clear catalog gap; only awaiting review cycles. |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for *trustworthy, evaluatable, and organizationally manageable skills* — not just new capabilities, but the infrastructure to verify, secure, share, and reliably trigger them at scale.**

---

# Claude Code Community Digest — 2026-08-18

---

## Today's Highlights

- **v2.1.234 released** with two minor improvements: a new `CLAUDE_CODE_PROJECT_DIR_NAME` env var for custom transcript directory names, and a `selection:clear` keybinding action.  
- **Cross-session messaging regressions** dominate today’s issue activity — multiple Windows/Desktop reports describe messages held for phantom approvals, then expiring silently (~5 min).  
- **Model behavior regressions** are drawing heavy community attention: Opus 5 injecting conversational filler into task responses, Fable 5 returning empty thinking blocks in VS Code, and the model persistently preferring `bash` tools over purpose-built `Read`/`Grep`/`Glob` tools (97 👍 on #19649).

---

## Releases

### v2.1.234
| Change | Details |
|--------|---------|
| `CLAUDE_CODE_PROJECT_DIR_NAME` (env) | Optional short name for per-project transcript directory; useful for hosts that isolate each session in its own config directory. |
| `selection:clear` keybinding | New action to bind a key that clears an in-app selection. |

[View release](https://github.com/anthropics/claude-code/releases/tag/v2.1.234)

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Title | Area | Signal | Why It Matters |
|---|-------|------|--------|----------------|
| [#19649](https://github.com/anthropics/claude-code/issues/19649) | Model frequently uses Bash tools (sed/grep) when builtins (Read/Grep) are better suited | `model`, `tools`, `api:bedrock` | 97 👍, 28 comments, **open since Jan** | Long-standing model behavior issue wasting tokens/latency; affects all users on Bedrock & direct API. |
| [#43454](https://github.com/anthropics/claude-code/issues/43454) | `apply-seccomp` fails on Linux — cannot write `/proc/self/setgroups` | `sandbox`, `platform:linux`, `regression` | 44 👍, 26 comments, **open since Apr** | Blocks Linux sandboxed execution; regression indicates seccomp policy drift. |
| [#85199](https://github.com/anthropics/claude-code/issues/85199) | Claude Desktop repeatedly crashes, requires “Repair” on Windows | `desktop`, `platform:windows` | 4 👍, 24 comments | High user-visible breakage; “Repair” loop suggests installer/state corruption. |
| [#81341](https://github.com/anthropics/claude-code/issues/81341) | MSIX CIG + vendor-signed `vk_swiftshader.dll` kills GPU process on browser preview | `desktop`, `platform:windows` | 3 👍, 21 comments | Windows App SDK / Code Integrity Guard conflict; breaks GPU-accelerated previews. |
| [#86298](https://github.com/anthropics/claude-code/issues/86298) | Cross-session messages silently dropped — held for approval UI never offers, then expire (~5 min) | `desktop`, `platform:windows`, `regression` | 1 👍, 14 comments | **Regression since 1.28929.0**; breaks multi-session workflows on Windows. |
| [#86237](https://github.com/anthropics/claude-code/issues/86237) | Cross-session messages render in UI but never reach runtime input queue | `desktop`, `regression` | 1 👍, 10 comments | **Regression 2.1.222 → 2.1.227**; same symptom class as #86298 but broader surface. |
| [#55842](https://github.com/anthropics/claude-code/issues/55842) | Unified user state across Cowork & Claude chat — shared memory, files, skills, connectors | `cowork`, `desktop`, `enhancement` | 11 👍, 10 comments | Strategic feature request; users expect seamless context across surfaces. |
| [#66559](https://github.com/anthropics/claude-code/issues/66559) | Refuses to write `CLAUDE.md` when it’s a symlink | `tools`, `security`, `platform:linux`, `api:bedrock` | 11 👍, 6 comments | Breaks common dotfile-management workflows; symlink handling gap in fs tools. |
| [#86865](https://github.com/anthropics/claude-code/issues/86865) | Fable 5 thinking blocks return empty (`"thinking":""`) in VS Code 2.1.233 — Opus 5 unaffected, worked on 2.1.228 | `model`, `ide`, `platform:vscode`, `regression` | 4 👍, 3 comments | **Regression in 2.1.233**; breaks reasoning visibility for Fable users in VS Code. |
| [#87491](https://github.com/anthropics/claude-code/issues/87491) | Opus 5 treats direct instructions as negotiations; injects self-referential/interpersonal content | `model`, `platform:macos`, `regression` | 1 👍, 1 comment, **filed today** | New model behavior regression; reduces reliability for automation/headless use. |

---

## Key PR Progress (Last 24h)

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#87395](https://github.com/anthropics/claude-code/pull/87395) | `ralph-wiggum`: use `disable-model-invocation` so model can’t self-invoke `/ralph-loop` | **Closed** | Fixes plugin command that lacked proper frontmatter guard; prevents unintended autonomous loops. |
| [#72451](https://github.com/anthropics/claude-code/pull/72451) | Remove `statsig.anthropic.com` from `init-firewall.sh` | **Closed** | Hostname no longer resolves; was causing devcontainer startup failures. |
| [#79131](https://github.com/anthropics/claude-code/pull/79131) | `validate-settings.sh`: don’t abort when no lowercase frontmatter keys match | **Open** | Fixes false-positive exit code when settings use mixed-case/hyphenated keys. |
| [#30692](https://github.com/anthropics/claude-code/pull/30692) | Add container isolation example with guard hook | **Closed** | New `examples/container/` with Podman/Docker setup + `guard-destructive-git` pre-tool hook. |
| [#29284](https://github.com/anthropics/claude-code/pull/29284) | Docs: clarify `excludedCommands` requires `:*` suffix | **Closed** | Updates examples to show `"docker:*"` vs bare `"docker"`; prevents silent match failures. |
| [#84004](https://github.com/anthropics/claude-code/pull/84004) | `plugin-dev`: limit frontmatter parsing to opening YAML block | **Closed** | Prevents horizontal rules in Markdown body from being misparsed as frontmatter. |
| [#84003](https://github.com/anthropics/claude-code/pull/84003) | `scripts`: propagate top-level failures (duplicate-maintenance scripts) | **Closed** | Ensures CI fails visibly on script errors instead of swallowing them. |
| [#83999](https://github.com/anthropics/claude-code/pull/83999) | `scripts`: validate `gh` flag values in restricted wrapper | **Closed** | Catches missing `--limit` values before delegating to `gh`; avoids cryptic downstream errors. |
| [#83995](https://github.com/anthropics/claude-code/pull/83995) | `scripts`: validate `--add-label`/`--remove-label` values | **Closed** | Prevents unbound-variable crashes when label name omitted. |
| [#83993](https://github.com/anthropics/claude-code/pull/83993) | `scripts`: reject self-referential duplicates in `comment-on-duplicates.sh` | **Closed** | Stops automation from marking an issue as a duplicate of itself. |

> **Theme:** This batch is almost entirely **tooling/script hygiene & documentation** — no runtime feature PRs in the last 24h. The container isolation example (#30692) is the only user-facing addition.

---

## Feature Request Trends (Distilled from All Issues)

1. **Unified cross-surface state** — Users want Cowork (desktop), web chat, and mobile to share memory, files, skills, and connectors (#55842, 11 👍).
2. **Localhost subdomain support in Preview** — Closed but high interest (23 👍 on #47195); developers need `playground.localhost` style routing.
3. **Prompt-cache friendliness** — New request (#87487) to suppress daily `currentDate` injection so stable system preambles stay cacheable.
4. **Safeguard allowlist for high-volume API users** — #87475 asks for disable/allowlist to avoid false positives on legitimate code (e.g., “windows” strings in Wine porting).
5. **Email change in-place** — #76624 (3 👍) requests account email mutation without full account recreation.

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence |
|------------|----------|
| **Cross-session messaging broken on Windows** | Three separate issues (#86298, #86237, #86974) filed in 5 days; messages expire silently, UI shows but runtime never receives. |
| **Model tool-choice regression** | #19649 (97 👍, 7 months open): model reaches for `bash`/`sed`/`grep` instead of `Read`/`Grep`/`Glob` — wastes tokens, slower, less reliable. |
| **Linux sandbox/seccomp instability** | #43454 (4 months open, 44 👍) + #81343 (OOM in background subagent) + #86941 (auto-update ships broken npm 12 install). |
| **Desktop app crashes & GPU issues on Windows** | #85199 (crash loop), #81341 (CIG + SwiftShader), #85663 (all install methods fail). |
| **Symlink / fs-edge-case handling** | #66559 (CLAUDE.md symlink), #86936 (LSP `${user_config.*}` interpolation drops defaults), #86997 (settings violations). |
| **Thinking/reasoning visibility broken** | #86865 (Fable 5 empty blocks in VS Code 2.1.233), #87087 (`/loop` swallows assistant replies). |
| **Auto-update shipping non-functional builds** | #86941 reports v2.1.233 auto-update broke on stock npm 12; silent failure. |

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-08-18 00:00 UTC.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-18

---

## 1. Today's Highlights

The Codex team shipped **rust-v0.148.0-alpha.21** alongside a major cleanup wave: 19 PRs merged in 24 hours covering OTel proxy plumbing, Linux sandbox hardening (capability dropping), GPT-5.6 context window expansion to 872k tokens, rmcp 3.1.2 upgrade, and a new `/agents` TUI dashboard with a companion `codex agents` CLI command. Community attention remains focused on **context compaction reliability** (multiple “stuck reconnecting” reports), **Windows/WSL/ARM64 stability**, and **remote-control/account-switching bugs** that cause usage attribution errors.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **rust-v0.148.0-alpha.21** | Alpha | Incremental alpha; bundles the merged PRs below (sandbox hardening, OTel proxy stack, agents dashboard, context-window bump, rmcp upgrade). No standalone changelog published. |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|---------------------|
| [#28969](https://github.com/openai/codex/issues/28969) | **Add setting to disable 60s auto-resolve for questions** | Highest-voted open issue (195 👍, 79 comments). Users want control over the aggressive auto-confirm timeout that interrupts long-running tasks. | 🔥 **195 👍** — Strong consensus this is a UX regression. |
| [#22107](https://github.com/openai/codex/issues/22107) | **Context compaction fails with “remote compact stream disconnected”** | Core reliability blocker: compaction failure leaves Desktop stuck. Closed but root cause likely persists (see #38861). | 9 👍, 19 comments — Frequent “stuck reconnecting” follow-ups. |
| [#15723](https://github.com/openai/codex/issues/15723) | **Background subagents don’t wake calling agent on completion** | Breaks multi-agent workflows; parent agent stalls indefinitely waiting for child. | 8 👍, 18 comments — Critical for agentic use cases. |
| [#23418](https://github.com/openai/codex/issues/23418) | **Mobile remote worktree thread missing from Desktop sidebar** | Project/thread association broken across platforms; data exists but isn’t surfaced. | 4 👍, 12 comments — Cross-device sync gap. |
| [#25317](https://github.com/openai/codex/issues/25317) | **Windows + WSL regression: poisoned shell after reboot** | Worse than prior WSL bugs; `CODEX_HOME/tmp/arg0` path held by live app-server blocks recovery. | 3 👍, 8 comments — Blocks Windows developers. |
| [#38754](https://github.com/openai/codex/issues/38754) | **Windows: stdio MCP servers repeatedly spawned, not reaped** | Resource leak per turn; degrades performance and exhausts handles. | 2 👍, 7 comments — New regression in 26.810.x. |
| [#32519](https://github.com/openai/codex/issues/32519) | **ChatGPT↔Codex shared context & bidirectional task handoff** | Top feature ask for mobile→desktop workflow continuity. | 0 👍, 7 comments — Strategic direction signal. |
| [#38861](https://github.com/openai/codex/issues/38861) | **“Context compacted” after remote failure → stuck reconnecting** | Duplicate symptom of #22107; confirms compaction path still fragile. | 2 👍, 5 comments — Recent (Aug 16) regression. |
| [#38350](https://github.com/openai/codex/issues/38350) | **Recurring scheduled tasks auto-disable after success** | Silent pausing breaks automation trust; no user action or audit trail. | 0 👍, 5 comments — Web/automations reliability. |
| [#38632](https://github.com/openai/codex/issues/38632) | **macOS Desktop: 429 on all sends while chatgpt.com works** | Desktop-specific rate-limit path; Pro users blocked despite quota. | 4 👍, 4 comments — Platform-specific auth/routing bug. |

---

## 4. Key PR Progress (Merged Today)

| # | PR | Description | Impact |
|---|----|-------------|--------|
| [#39117](https://github.com/openai/codex/pull/39117) | **Reject lossy legacy permission projections** | Sandbox policy conversion now fails fast if filesystem semantics can’t be preserved. | Security/stability: prevents silent permission drift. |
| [#39115](https://github.com/openai/codex/pull/39115) | **Remove experimental thread config endpoint** | Cleans up deprecated remote config path; simplifies thread bootstrap. | Reduces surface area; precedes new config model. |
| [#39114](https://github.com/openai/codex/pull/39114) | **Add `codex agents` dashboard command** | New CLI entry point opens shared agents overview without creating a session; auto-starts local app-server. | UX: first-class multi-agent observability. |
| [#39113](https://github.com/openai/codex/pull/39113) | **Surface interactive requests in realtime conversations** | Mirrors approval/input prompts into active realtime sessions with “review in app” deep links. | Unblocks human-in-the-loop during streaming. |
| [#39112](https://github.com/openai/codex/pull/39112) | **Make agents overview an interactive task dashboard** | Start/stop/rename tasks, open root sessions, view subagent status from `/agents` TUI. | Turns read-only list into control plane. |
| [#39091–#39105](https://github.com/openai/codex/pull/39105) | **OTel proxy stack (6 PRs)** | Proxy-aware async/blocking transports, custom CA support, Statsig/elevated Windows telemetry routed through shared policy. | Enterprise networking: fixes corp proxy/CA breakage. |
| [#39104](https://github.com/openai/codex/pull/39104) | **Make feedback uploads proxy-aware** | Sentry feedback now respects outbound proxy + custom CA via shared HTTP client. | Closes telemetry gap in locked-down envs. |
| [#39103](https://github.com/openai/codex/pull/39103) | **Drop capabilities from Linux sandbox processes** | Adds `--cap-drop ALL` to bubblewrap; verifies empty caps before exec. | Hardens sandbox; defense-in-depth. |
| [#39102](https://github.com/openai/codex/pull/39102) | **Raise GPT-5.6 max context window to 872k** | New models (`gpt-5.6-sol/terra/luna`) + Bedrock entries support 872k tokens. | Enables massive repo/context workloads. |
| [#39094](https://github.com/openai/codex/pull/39094) | **Add agents overview dashboard to TUI** | `/agents` command: searchable, grouped, auto-refreshing root-session list with subagent status. | Complements CLI `codex agents`; consistent UX. |

---

## 5. Feature Request Trends

1. **Agent/Task Dashboarding** — `/agents` TUI + `codex agents` CLI landed today; users now ask for richer task control (pause, rerun, log streaming) and cross-device sync (#32519).
2. **Context Compaction Reliability** — Multiple issues (#22107, #38861) demand graceful degradation, manual trigger, and better error surfacing instead of silent “stuck” states.
3. **Remote Control & Account Isolation** — Cluster of issues (#39095–#39097) around account-switch leakage, usage attribution, and thread reattachment after re-enrollment.
4. **Windows/WSL/ARM64 Parity** — Shell poisoning (#25317), MCP spawn leaks (#38754), splash freeze (#38971), `taskkill` mangling (#26952) — all point to incomplete Windows-native integration.
5. **Rate-Limit UX** — Banked reset queuing (#32218), desktop-only 429s (#38632, #38804), and usage visibility requests.
6. **MCP Server Lifecycle** — Reaping, config persistence across resume/fork (#39086), and stdio transport stability.
7. **Observability/OTel** — Opt-in response logging (#22230), proxy-aware exports (merged stack), and custom CA support.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Context compaction → stuck UI** | #22107 (closed but symptomatic), #38861 (new), multiple “reconnecting” reports | High — blocks long sessions |
| **Windows + WSL shell corruption** | #25317 (regression), #22185, #16970, #26952 (`taskkill` mangling) | High — daily driver for many |
| **Desktop app 429s while web works** | #38632 (macOS), #38804 (Windows), no web equivalent | Medium — Pro/Plus subscribers hit |
| **Subagent completion not waking parent** | #15723 (open 5 months), breaks agentic patterns | Medium — core agent workflow |
| **Mobile↔Desktop thread/project disconnect** | #23418, #39095–#39097 (account-switch fallout) | Medium — cross-device users |
| **MCP servers leaked/not reaped** | #38754 (Windows), #39086 (config ignored on resume/fork) | Medium — resource exhaustion |
| **Scheduled tasks auto-disabling** | #38350 (web), silent, no audit trail | Low but high trust impact |
| **Auth/OAuth Keychain failures on macOS** | #38691 (detached app-server, `CSSMERR_CSP_NO_USER_INTERACTION`) | Low — background daemon edge case |
| **ARM64 Windows app hang on splash** | #38971 (Snapdragon X Elite, no logs) | Low — new hardware, no visibility |
| **Sandbox permission projection lossiness** | Addressed by #39117 (now fails fast) | Mitigated — was silent data loss |

---

*Generated from openai/codex GitHub data (releases, issues, PRs updated 2026-08-17 → 2026-08-18). All links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-18

## 1. Today's Highlights
The v0.56.0 nightly ships two SSR Agent fixes: clarified privacy notice wording for extension installs and resolved TypeScript strict-null errors in integration tests. Meanwhile, the issue backlog highlights persistent instability in subagent orchestration—particularly around MAX_TURNS recovery, generalist agent hangs, and browser agent failures on Wayland—while Auto Memory's retry logic and redaction pipeline are under active rework.

## 2. Releases
**v0.56.0-nightly.20260818.g194edea47**  
- **Privacy notice UX**: Fixed misleading opt-out language and radio button options in the SSR Agent extension consent flow ([#28820](https://github.com/google-gemini/gemini-cli/pull/28820)).  
- **TypeScript hygiene**: Cleaned strict-null violations in integration test suite ([#28814](https://github.com/google-gemini/gemini-cli/pull/28814)).  

*No stable release today; nightly only.*

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent reports `GOAL` success after hitting `MAX_TURNS` | Masks real failures; breaks trust in agent delegation | 12 comments, 👍2, P1 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely on simple tasks | Blocks core workflow; workaround is disabling subagents | 8 comments, 👍8, P1 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell execution stuck at “Waiting input” after command completes | Frequent TUI freeze; affects basic CLI usage | 4 comments, 👍3, P1 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory retries low-signal sessions indefinitely | Wastes compute/context; no backoff/quarantine | 5 comments, P2 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory redaction happens post-model-context | Security risk: secrets hit model before redaction | 4 comments, P2 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 400 error when >128 tools registered | Hard limit blocks large workspaces/extensions | 3 comments, P1 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | Linux/Wayland users cannot use browser agent | 4 comments, 👍1, P1 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file ops investigation (EPIC) | Potential step-change in code navigation efficiency | 7 comments, 👍1, P2 |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent ignores `settings.json` (e.g., `maxTurns`) | Config overrides silently dropped | 3 comments, P2 |
| [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) | Invalid Auto Memory patches silently skipped/accumulate | Inbox pollution; no visibility into bad patches | 3 comments, P2 |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#28872](https://github.com/google-gemini/gemini-cli/pull/28872) | Open | Nightly version bump to 0.56.0 |
| [#28869](https://github.com/google-gemini/gemini-cli/pull/28869) | Open | Fix gVisor (`runsc`) host network resolution for VS Code extension connectivity |
| [#28870](https://github.com/google-gemini/gemini-cli/pull/28870) | Open | Emit `pending` tool call update before `session/request_permission` in ACP mode (fixes protocol violation) |
| [#28871](https://github.com/google-gemini/gemini-cli/pull/28871) | Open | Translate legacy `compact` hook matchers → `compress` enum for session compression |
| [#28868](https://github.com/google-gemini/gemini-cli/pull/28868) | **Closed** | Add trailing space to autocomplete suggestions for slash commands |
| [#28867](https://github.com/google-gemini/gemini-cli/pull/28867) | **Closed** | Prevent subagent initialization when `agents.mode=disabled` (regression since v0.33) |
| [#28866](https://github.com/google-gemini/gemini-cli/pull/28866) | Open | Ignore `.gemini` folder by default in file search/watchers (avoids self-observation loops) |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | Open | Require consent for extension env changes; sanitize runtime-altering vars in MCP servers |
| [#28812](https://github.com/google-gemini/gemini-cli/pull/28812) | **Closed** | Add execution timeouts to prevent indefinite TUI hang at “Initializing…” on bare Linux |
| [#28816](https://github.com/google-gemini/gemini-cli/pull/28816) | **Closed** | Fix silent 60s hang in `MessageBus.request()` when `publish()` rejects |

## 5. Feature Request Trends
1. **Subagent Observability & Control** — Trajectory sharing (`/chat share`), config adherence, disable/enable toggles, and failure-mode visibility dominate agent-related asks.
2. **AST-Aware Tooling** — Multiple EPICs (#22745, #22746) exploring AST-based read/search/map to reduce token waste and turn count.
3. **Auto Memory Hardening** — Deterministic redaction, retry backoff, patch validation, and inbox quarantine are converging into a reliability sprint.
4. **Sandbox/Extension Networking** — gVisor support, host resolution, and MCP server env sanitization reflect growing IDE/extension integration.
5. **Terminal Performance** — Flicker-free resize, external editor buffer corruption, and TUI initialization timeouts signal investment in raw terminal UX.

## 6. Developer Pain Points
- **Subagent Reliability**: Hangs, false-success reports, ignored configs, and opaque failures make delegation feel unsafe.
- **Shell/TUI Freezes**: “Waiting input” ghost state and initialization hangs on headless Linux are daily friction.
- **Tool Explosion**: 128-tool ceiling forces manual pruning; no dynamic scoping yet.
- **Auto Memory Opacity**: Silent retries, post-hoc redaction, and unpatchable inbox entries erode trust in background learning.
- **Platform Gaps**: Wayland browser support, symlink agent loading, and gVisor networking remain unresolved for Linux power users.

---

*Generated from `google-gemini/gemini-cli` GitHub data (issues/PRs updated 2026-08-18). Links point to live GitHub items.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-18

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows a cluster of **MCP/OAuth regressions** (GitLab, Atlassian) introduced in v1.0.79, a **memory-pressure watchdog** that force-compacts sessions at low context usage, and growing friction around **session restoration** and **plugin caching**. Community sentiment is focused on stability of core workflows—authentication, session persistence, and model access—over new features.

## Releases
*None in the last 24h.*

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4390](https://github.com/github/copilot-cli/issues/4390) | **Org-enabled models missing from catalogue** (Claude Sonnet/Opus 5, Kimi K3) | Blocks enterprise users from models their org explicitly approved; affects both CLI and SDK. | 7 👍, 8 comments — active triage |
| [#4480](https://github.com/github/copilot-cli/issues/4480) | **Atlassian MCP OAuth fails with RFC 8414 issuer mismatch** (regression from 1.0.71) | Breaks Atlassian MCP integration for all users on 1.0.79+; auth discovery regression. | 6 👍, 5 comments |
| [#4439](https://github.com/github/copilot-cli/issues/4439) | **GitLab MCP OAuth metadata rejected (RFC 8414 issuer mismatch)** | Same root cause as #4480; GitLab Self-Managed MCP unusable on 1.0.79. | 3 👍, 5 comments — **CLOSED** (fix likely in flight) |
| [#4506](https://github.com/github/copilot-cli/issues/4506) | **Memory-pressure watchdog force-compacts at 23% context, recovers 0.003%, loops to OOM** | Silent session killer; long-running sessions die despite low token usage. High-severity reliability bug. | 0 👍 (new), 0 comments — needs visibility |
| [#1481](https://github.com/github/copilot-cli/issues/1481) | **SHIFT+ENTER executes prompt instead of line break** (uses CTRL+ENTER) | Violates universal chat UX convention; daily friction for all interactive users. | 17 👍, 28 comments — **CLOSED** (fix merged?) |
| [#4509](https://github.com/github/copilot-cli/issues/4509) | **`--no-alt-screen` flag silently removed; alt-screen now unavoidable and broken** | Removes escape hatch for terminal multiplexer/tmux users; regression since March. | 1 👍, 0 comments — long-standing pain |
| [#4514](https://github.com/github/copilot-cli/issues/4514) | **Unable to restore remote session locally** | Session portability broken; `/resume` picks remote session but fails to hydrate locally. | 0 👍 (new) |
| [#4513](https://github.com/github/copilot-cli/issues/4513) | **Plugin marketplace cache ignores `ref`; cross-branch contamination** | Shared cache keyed only by URL causes wrong plugin version loaded per branch. | 0 👍 (new) |
| [#4512](https://github.com/github/copilot-cli/issues/4512) | **MCP registry policy fetch failure blocks *all* non-default MCP servers (including local stdio)** | Fail-closed policy breaks user-defined local MCP servers when registry unreachable. | 0 👍 (new) |
| [#4211](https://github.com/github/copilot-cli/issues/4211) | **BigInt in structured MCP response crashes CLI** (`TypeError: Do not know how to serialize a BigInt`) | MCP tool results with large numbers abort entire session; data-type gap in serialization. | 2 👍, 4 comments |

## Key PR Progress
Only one PR updated in the last 24h:

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#4510](https://github.com/github/copilot-cli/pull/4510) | **Remove GitHub Copilot CLI documentation from README** | Strips installation/usage docs from repo README (likely migrating to docs site). | OPEN, 0 👍 |

*Note: Low PR velocity suggests focus on issue triage and internal fixes not yet surfaced as PRs.*

## Feature Request Trends (from all open issues)
1. **Model & Context Control Parity** — ACP/non-interactive mode lacks `contextTier` switching ([#4275](https://github.com/github/copilot-cli/issues/4275)), custom agent model config ignored ([#2950](https://github.com/github/copilot-cli/issues/2950)), auto-model reasoning failures ([#4459](https://github.com/github/copilot-cli/issues/4459)).
2. **Session Durability & Portability** — Resume/restore failures ([#4514](https://github.com/github/copilot-cli/issues/4514), [#4505](https://github.com/github/copilot-cli/issues/4505)), stale connection IDs, instruction reload mid-session ([#4508](https://github.com/github/copilot-cli/issues/4508)).
3. **Plugin Ecosystem Maturity** — Dependency resolution ([#4487](https://github.com/github/copilot-cli/issues/4487)), cache keyed by `ref` ([#4513](https://github.com/github/copilot-cli/issues/4513)), repo-level `enabledPlugins` honored in non-interactive mode ([#4507](https://github.com/github/copilot-cli/issues/4507)).
4. **MCP Reliability** — OAuth issuer validation regressions (#4480, #4439), stdio container cleanup ([#4461](https://github.com/github/copilot-cli/issues/4461)), policy fetch fail-open for local servers ([#4512](https://github.com/github/copilot-cli/issues/4512)).
5. **Terminal UX Polish** — Alt-screen opt-out ([#4509](https://github.com/github/copilot-cli/issues/4509)), scrollback/history navigation ([#4313](https://github.com/github/copilot-cli/issues/4313)), theme auto-switch regression ([#4485](https://github.com/github/copilot-cli/issues/4485)), session picker contrast ([#4455](https://github.com/github/copilot-cli/issues/4455)).

## Developer Pain Points (Recurring High-Friction Themes)
- **Auth/OAuth regressions on every minor release** — RFC 8414 issuer validation broke GitLab *and* Atlassian MCP in 1.0.79; no fail-soft path.
- **Session state fragility** — Compaction loops, stale item IDs, remote→local restore broken, instructions never refresh. Long-running sessions are unreliable.
- **Enterprise model access gap** — Org-approved models invisible in CLI catalogue; forces fallback to default models.
- **Terminal integration hostility** — Alt-screen forced, SHIFT+ENTER muscle memory broken, no scrollback, theme flips on wake.
- **Plugin system half-baked** — No dependency graph, cache collisions across branches, config ignored in headless mode.
- **Observability voids** — AIC display wrong ([#4511](https://github.com/github/copilot-cli/issues/4511)), quota resetDate bogus ([#4504](https://github.com/github/copilot-cli/issues/4504)), watchdog triggers invisible until OOM.

---

*Digest compiled from github.com/github/copilot-cli issue/PR activity updated 2026-08-17 → 2026-08-18.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-18

## Today's Highlights
No new releases in the last 24 hours. The issue tracker shows a spike in **billing/payment complaints** (5+ issues) and **DeepSeek V4 regressions** (endless loops, wrong adapter selection). Meanwhile, the V2 migration effort continues with fixes for database schema compatibility, session continuation races, and MCP token refresh serialization. Several PRs land IPC typing, plugin MCP transforms, and network filesystem WAL detection.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#32149](https://github.com/anomalyco/opencode/issues/32149) **Opencode stops processing requests without response** | Core reliability: app enters "thinking" state then silently stalls. Open since June, still unresolved. | 6 👍, 12 comments — high frustration |
| [#33027](https://github.com/anomalyco/opencode/issues/33027) **MCP tools connected but not exposed to agent** | MCP integration gap: server registers 6 tools via `tools/list` but agent sees none. Blocks workflow automation. | 3 👍, 8 comments |
| [#43146](https://github.com/anomalyco/opencode/issues/43146) **deepseek flash v4 broken — endless reply loop** | New regression on current version (1.18.18). Model loops same sentence indefinitely. | 5 comments, filed today |
| [#43106](https://github.com/anomalyco/opencode/issues/43106) **Azure DeepSeek V4 never selects DeepSeek SDK adapter** | Provider routing bug: Azure-hosted DeepSeek falls back to generic adapter, losing custom `reasoningEffort` variants. | 1 comment, PR [#43135](https://github.com/anomalyco/opencode/pull/43135) in progress |
| [#43133](https://github.com/anomalyco/opencode/issues/43133) **`opencode run --continue` injects into active session** | Concurrency hazard: CLI picks most-recent session without liveness check, corrupting another running instance. | 1 comment, PR [#43140](https://github.com/anomalyco/opencode/pull/43140) fixes |
| [#43009](https://github.com/anomalyco/opencode/issues/43009) **Incorrect charging items** *(CLOSED)* | Billing discrepancy: user charged ~$0.38/173 tokens for deepseek-v4-pro. Resolved but signals meter accuracy concerns. | 6 comments, 1 👍 |
| [#43153](https://github.com/anomalyco/opencode/issues/43153) / [#43152](https://github.com/anomalyco/opencode/issues/43152) **Payment method authentication failures** | Two independent reports of "unable to authenticate payment method" / "card declined" on Go plan with no remediation path. | Filed today, 1 comment each |
| [#43149](https://github.com/anomalyco/opencode/issues/43149) / [#43148](https://github.com/anomalyco/opencode/issues/43148) **USD consumption vs usage % mismatch** | Dashboard shows 24% monthly used ($14.40 implied) but actual spend is $3.65. Math inconsistency erodes trust. | Filed today, duplicate |
| [#42834](https://github.com/anomalyco/opencode/issues/42834) **Mobile: reasoning-effort select overlaps send button** | UX regression on narrow viewports (320–390px): variant dropdown covers send button, unclickable. | 2 👍, 1 comment |
| [#38974](https://github.com/anomalyco/opencode/issues/38974) **Mobile horizontal tab bar unusable with 4+ sessions** | New UI tab bar doesn't scale on mobile; only close buttons clickable. Legacy vertical sidebar worked. | 2 👍, 1 comment |

---

## Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| [#43154](https://github.com/anomalyco/opencode/pull/43154) | Bug fix | **Fixes #43078**: `shell.created` event now publishes post-spawn info including `pid`. Adds regression test. |
| [#43140](https://github.com/anomalyco/opencode/pull/43140) | Bug fix | **Fixes #43133**: `--continue` now skips sessions with active in-flight requests (process-local liveness check). |
| [#43135](https://github.com/anomalyco/opencode/pull/43135) | Bug fix | **Fixes #43106**: Azure provider selects dedicated `deepseek()` adapter for DeepSeek-V4-Pro/Flash deployments. |
| [#43142](https://github.com/anomalyco/opencode/pull/43142) | Bug fix | **Fixes #43139, #41341**: V1→V2 migration tolerates older `opencode-next.db` schemas lacking nullable columns. |
| [#43125](https://github.com/anomalyco/opencode/pull/43125) | Feature | **MCP server transforms exposed**: plugins get `list`/`get`/`set`/`update`/`remove` for MCP definitions via Effect/Promise APIs. |
| [#43141](https://github.com/anomalyco/opencode/pull/43141) | Bug fix | Disables SQLite WAL on network filesystems (NFS, SMB/CIFS, 9P, FUSE) via `statfs` detection; `OPENCODE_DB_WAL` override. |
| [#43074](https://github.com/anomalyco/opencode/pull/43074) | Bug fix | Serializes MCP OAuth token refresh to prevent concurrent clients from invalidating each other's rotating refresh tokens. |
| [#43136](https://github.com/anomalyco/opencode/pull/43136) | Bug fix | Settles pending Anthropic tool blocks on `message_stop` without `content_block_stop`; emits `tool-input-error` for malformed input. |
| [#43150](https://github.com/anomalyco/opencode/pull/43150) | Refactor | **Desktop IPC contract typed**: all invoke/send/event channels defined in shared area-based contract; main/preload/renderer fully typed. |
| [#43155](https://github.com/anomalyco/opencode/pull/43155) | Polish | TUI: web search labels now show `Web Search via <provider>`; generic fallback when provider metadata unavailable. |

---

## Feature Request Trends
1. **MCP trust granularity** — [#40125](https://github.com/anomalyco/opencode/pull/40125) (per-server fingerprint pinning) and [#33027](https://github.com/anomalyco/opencode/issues/33027) (tools not exposed) show demand for finer-grained MCP security and visibility.
2. **CodeMode for built-in tools** — [#43137](https://github.com/anomalyco/opencode/issues/43137) requests extending experimental CodeMode beyond plugins to core tools.
3. **Mobile-first UI fixes** — Overlapping controls ([#42834](https://github.com/anomalyco/opencode/issues/42834)) and broken tab bars ([#38974](https://github.com/anomalyco/opencode/issues/38974)) indicate mobile is a growing surface needing layout overhaul.
4. **Provider-specific adapter routing** — Azure DeepSeek ([#43106](https://github.com/anomalyco/opencode/issues/43106)), Vertex labels ([#43129](https://github.com/anomalyco/opencode/pull/43129)) show need for provider-aware model selection.

---

## Developer Pain Points
- **Billing opacity**: Multiple users report incorrect charges, percentage/spend mismatches, and failed payments with no self-service remediation.
- **DeepSeek V4 instability**: Endless loops (flash), wrong adapter selection (Azure), reasoning effort variants ignored — suggests provider integration testing gaps.
- **Session concurrency hazards**: `--continue` hijacking active sessions, `shell.created` missing PID, migration failing on old schemas — core session lifecycle needs hardening.
- **Windows path handling**: Archive extraction breaks on apostrophes/wildcards ([#43036](https://github.com/anomalyco/opencode/issues/43036)); global npm install crashes on plugin dependency ([#41595](https://github.com/anomalyco/opencode/issues/41595)).
- **Config mutation without consent**: Web search consent writes to user config file ([#43134](https://github.com/anomalyco/opencode/issues/43134)) — violates expectation of explicit opt-in.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-18

## Today's Highlights
The Pi ecosystem saw a major triage push with **20+ issues closed** and **15+ PRs merged** in the last 24 hours. Core focus areas: fixing Anthropic refusal handling, aligning Qwen/GLM model catalogs, resolving TUI rendering regressions in long transcripts, and improving nested skill discovery. Several experimental features landed — append compaction (opt-in), OpenAI completions reasoning details, and Bedrock Smithy header forwarding.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues
| Issue | Status | Why It Matters |
|-------|--------|----------------|
| [#534](https://github.com/earendil-works/pi/issues/534) Config folder not XDG-compliant on Linux | **CLOSED** | 39 👍, 15 comments. Long-standing Linux UX papercut — config now respects `$XDG_CONFIG_HOME`/`~/.config`. |
| [#3200](https://github.com/earendil-works/pi/issues/3200) Video/audio content in `prompt` RPC | **OPEN** | 5 👍. Extends multimodal support beyond images for Gemma 4, GPT-4o, etc. High demand for agentic media workflows. |
| [#7995](https://github.com/earendil-works/pi/issues/7995) `openai-responses` missing Anthropic `cacheControlFormat` | **OPEN** | 2.5× cost penalty for Claude via OpenRouter. Critical for production cost optimization. |
| [#8166](https://github.com/earendil-works/pi/issues/8166) Custom message breaks `tool_calls`→`tool` adjacency | **OPEN** | Root cause: `sendMessage(triggerTurn: false)` injects messages mid-batch, causing DeepSeek 400 errors on next turn. |
| [#8017](https://github.com/earendil-works/pi/issues/8017) Anthropic refusal server-side fallback | **CLOSED** | Compaction failures when Anthropic classifier flags content. Fix adds `allowed_fallback_models` to model registry. |
| [#8069](https://github.com/earendil-works/pi/issues/8069) GLM 5.2 (Mistral) executes empty commands | **CLOSED** | Model-specific harness bug — empty tool calls triggered spurious shell executions. |
| [#8194](https://github.com/earendil-works/pi/issues/8194) Align Qwen Token Plan model catalogs | **CLOSED** | Unified 8-model catalog across `qwen-token-plan` and `qwen-token-plan-cn` (DeepSeek v4, GLM 5.2, Qwen 3.6–3.8). |
| [#8281](https://github.com/earendil-works/pi/issues/8281) TUI full-screen flash on long transcripts | **CLOSED** | 10k+ line transcripts caused full redraw on any above-viewport change. Fixed via differential rendering. |
| [#8190](https://github.com/earendil-works/pi/issues/8190) Missing thinking levels for GLM-5.3 (zai) | **CLOSED** | `thinkingLevelMap` and `supportsReasoningEffort` now wired for `zai`/`zai-coding-cn`. |
| [#6479](https://github.com/earendil-works/pi/issues/6479) Skills in subfolders not discovered | **CLOSED** | Nested `~/.agents/skills/third-party/*.md` now load correctly. Unblocks community skill packaging. |

---

## Key PR Progress
| PR | Status | Summary |
|----|--------|---------|
| [#8258](https://github.com/earendil-works/pi/pull/8258) | **CLOSED** | Anthropic refusal fallback: adds `allowed_fallback_models` to generated model registry; compaction now auto-retries on allowed fallbacks. |
| [#8255](https://github.com/earendil-works/pi/pull/8255) | **CLOSED** | Nested markdown skill discovery: recursive scan now picks up `*.md` under subdirectories, not just `SKILL.md` dirs. |
| [#8253](https://github.com/earendil-works/pi/pull/8253) | **CLOSED** | TUI flash fix: differential rendering clears only dirty viewport lines, eliminating full-screen redraw on 10k+ line transcripts. |
| [#8120](https://github.com/earendil-works/pi/pull/8120) | **CLOSED** | Experimental append compaction (`PI_EXPERIMENTAL=1`): reuses system prompt, tools, routing session → enables provider prompt cache reuse. |
| [#8246](https://github.com/earendil-works/pi/pull/8246) | **OPEN** | OpenAI completions reasoning details: preserves `delta.reasoning_details` → assistant messages retain `reasoning.text`/`summary` for replay. |
| [#8275](https://github.com/earendil-works/pi/pull/8275) | **CLOSED** | Generalizes `thinkingTokenBudgetField` compat: supports vLLM (`thinking_token_budget`), Qwen/SGLang (`thinking_budget`), llama.cpp (`thinking_budget_tokens`). |
| [#8240](https://github.com/earendil-works/pi/pull/8240) | **CLOSED** | Qwen Token Plan catalog alignment: shared 8-model allowlist for `qwen-token-plan`/`cn`; `individual` stays separate. |
| [#8243](https://github.com/earendil-works/pi/pull/8243) | **CLOSED** | Bedrock Smithy headers: raw HTTP response captured in deserialize middleware; gateway headers (`x-bifrost-provider`) now forwarded to extensions. |
| [#8262](https://github.com/earendil-works/pi/pull/8262) | **OPEN** | Turn-start hook dispatch: `sendCustomMessage(triggerTurn: true)` now fires `input` + `before_agent_start` hooks (cancellable preflight). |
| [#8257](https://github.com/earendil-works/pi/pull/8257) | **CLOSED** | Project-agent trust: skips "Run project-local agents?" confirm when repo already in `~/.pi/agent/trust.json`. |
| [#8250](https://github.com/earendil-works/pi/pull/8250) | **OPEN** | Subagent reliability: fixes premature "done" status, preserves failure details, enforces tool result limits, adds dedicated progress events. |
| [#8254](https://github.com/earendil-works/pi/pull/8254) | **OPEN** | Copilot policy login rate-limit mitigation: fetches catalog first, updates only unconfigured tool-capable models, bounded retry with backoff. |
| [#8241](https://github.com/earendil-works/pi/pull/8241) | **CLOSED** | Extension-visible compaction failure event: `session_compact_failed` now emitted with full error payload. |
| [#8249](https://github.com/earendil-works/pi/pull/8249) | **OPEN** | Theme invalidation fixes: clears Markdown cached styles, rebuilds startup header, refreshes warning text on theme change. |
| [#8256](https://github.com/earendil-works/pi/pull/8256) | **CLOSED** | PiQuest foundation: rewrites `AGENTS.md` with architecture boundaries, upstream/engine policy; adds Korean README + Linear MCP config. |

---

## Feature Request Trends
1. **Multimodal parity** — Video/audio in prompts (#3200), vision model catalog gaps (#8220), reasoning detail preservation (#8246).
2. **Provider compatibility layer** — Anthropic cache control (#7995), OpenAI completions thinking budgets (#8275), Bedrock Smithy headers (#8243), GLM/Qwen thinking levels (#8190, #8194).
3. **Session/worktree orchestration** — `--worktree` launch flag (#8272), repo-scoped sessions (#8271), global live session registry (#8270), session move/fork across cwds (#8269).
4. **Extension observability** — UI-blocked events (#8268), compaction failure events (#8241), turn-start hooks (#8262), `source` field for programmatic turns (#8266).
5. **Compaction evolution** — Append mode for cache reuse (#8120), refusal fallbacks (#8258), failure visibility (#8241).
6. **Container/OS hardening** — SELinux `:Z` volume docs (#8276), Windows `find` → `fd` default (#8282), tmux 1-column crash (#8252).

---

## Developer Pain Points
| Pain Point | Frequency | Evidence |
|------------|-----------|----------|
| **Model provider feature gaps** | High | Missing cache control, thinking budgets, refusal fallbacks, vision models, reasoning details across Anthropic, OpenAI, Bedrock, Qwen, GLM, Z.ai. |
| **TUI performance at scale** | High | Full-screen flash on 10k+ lines (#8281), theme color bleed (#8249), Shift+Enter broken in Konsole (#8278), large paste marker submission (#8273). |
| **Session/worktree isolation** | Medium | No cross-worktree session view (#8271), no global liveness registry (#8270), cwd rebinding on session switch (#8269), `--worktree` launch missing (#8272). |
| **Compaction opacity** | Medium | Failures invisible to extensions (#8241), no retry on refusal (#8017), provider cache not reused (#8120). |
| **Tool schema validation** | Medium | Bedrock rejects root schemas without `type: object` (#8279), local providers overflow between tool turns (#8229). |
| **Rate limit UX** | Medium | No auto-resume after reset (#8277), Copilot policy login storms (#8254). |
| **Linux/Windows platform quirks** | Medium | XDG config non-compliance (#534), `find` hangs on `C:\Windows` (#8282), tmux 1-col crash (#8252), SELinux docs gap (#8276). |

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-18

---

## 1. Today's Highlights

**v0.21.13 shipped with Web Shell composer upgrades** — drag-and-drop file attachments, conversation forking from any assistant response, and hardened daemon transcript retention to prevent renderer OOM crashes. The release passed full SWE-bench Verified (500 tasks) and Terminal-Bench 2.0 (89 tasks) validation pipelines after multiple smoke iterations. Core infrastructure gains a live-session registry (`qwen sessions ps`) and deterministic flakiness gating for sandboxed verification.

---

## 2. Releases

### v0.21.13 (Stable)
- **Web Shell**: Composer now accepts dragged/dropped/pasted text files as named attachments alongside images ([#9180](https://github.com/QwenLM/qwen-code/pull/9180))
- **Conversation forking**: Users can fork from any specific Assistant response
- **Benchmark validation**: Full SWE-bench Verified (500) + Terminal-Bench 2.0 (89) end-to-end pass after DSW Harbor deployment
- **Release tracking**: Multiple smoke runs (r1–r4) confirm release stability

### v0.21.11-nightly.20260818.259951c53e
- **Core**: Live-session registry added; new `qwen sessions ps` command ([#8969](https://github.com/QwenLM/qwen-code/pull/8969))
- **Daemon**: Skill-toggle attachment support

---

## 3. Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | **Fleet Shepherd Dashboard** — auto-maintained fleet status tracker | Operational visibility for CI/CD fleet; tracks PR syncs, dispatches, releases, cleanups | Bot-maintained; 3 comments, updated today |
| [#7433](https://github.com/QwenLM/qwen-code/issues/7433) | **Model-switching bug**: SDK reports `coder-model(qwen-oauth)` instead of user's local model (`qwen3.6-27b` via llama.cpp) | Breaks local-model workflows; model identity mismatch in ACP sessions | P2 priority, 3 comments, 28 days open |
| [#9373](https://github.com/QwenLM/qwen-code/issues/9373) | **Deferred review findings from PR #9130** | Autofix loop deferred 19 non-critical findings outside PR scope; requires maintainer triage | Fresh (created today), 0 comments |
| [#9372](https://github.com/QwenLM/qwen-code/issues/9372) | **Deferred review findings from PR #9369** | Similar deferred backlog from CI wipe-guard porting work | Fresh (created today), 0 comments |

*Note: Only 4 issues updated in last 24h; remaining slots reflect broader backlog trends.*

---

## 4. Key PR Progress

| # | PR | Type | Summary | Impact |
|---|----|------|---------|--------|
| [#9130](https://github.com/QwenLM/qwen-code/pull/9130) | **feat(triage)**: deterministic flakiness gate | Re-runs modified unit tests N× (default 5) after clean build; fails PR if any flake detected | Hardens CI reliability; configurable via `QWEN_VERIFY_FLAKE_ROUNDS` |
| [#9371](https://github.com/QwenLM/qwen-code/pull/9371) | **fix(ci)**: autofix convergence-brake handoff | Routes non-converging PRs to `failure.md` for maintainer decision; stops infinite patch loops | Prevents automation stalls; clear handoff protocol |
| [#8978](https://github.com/QwenLM/qwen-code/pull/8978) | **feat(serve)**: no-op on empty channel set | `qwen serve --channel all` no longer exits(1) when no channels configured; graceful no-op | Daemon stability; avoids full process crash |
| [#9351](https://github.com/QwenLM/qwen-code/pull/9351) | **feat(web-shell)**: approval/ask-user as in-flow sheets | Dialogs no longer cover message list; composer drops out, dialog becomes bottom sheet | UX improvement; fixes background-agent false failures |
| [#9349](https://github.com/QwenLM/qwen-code/pull/9349) | **revert(web-shell)**: restore pre-#8098 composer animations | Reverts DAC glow effect at 50% opacity per design request; removes mobile CSS overrides | Design compliance; animation stability |
| [#9342](https://github.com/QwenLM/qwen-code/pull/9342) | **fix(review)**: clear deferred backlog from #9175 | Resolves 19 deferred suggestions (half behavior fixes, half style/docs) | Code quality; reduces technical debt |
| [#9303](https://github.com/QwenLM/qwen-code/pull/9303) | **fix(web-shell)**: bound daemon transcript retention | Releases raw replay snapshot after injection; caps replay rebuilds; prevents renderer OOM | Critical stability fix for long-running sessions |
| [#9369](https://github.com/QwenLM/qwen-code/pull/9369) | **fix(ci)**: port heal chain's wipe guard to triage/A/B wipes | Canonicalizes paths, strips trailing slashes, allows runner workspace across 3 workflows | CI hardening; eliminates hand-copied guard drift |
| [#9199](https://github.com/QwenLM/qwen-code/pull/9199) | **fix(askUserQuestion)**: surface actual cancel reason | Replaces generic "User declined" with real cancel reason | Better debugging; clearer user feedback |
| [#7925](https://github.com/QwenLM/qwen-code/pull/7925) | **fix(core)**: sweep stale worktree snapshots on startup | Cleans `.qwen/projects/<worktree>` snapshots on startup; fixes crash/force-kill leak | Disk hygiene; prevents snapshot accumulation |

---

## 5. Feature Request Trends

1. **Session & Workspace Management** — Live-session registry (`qwen sessions ps`), scheduled tasks binding to existing sessions ([#9361](https://github.com/QwenLM/qwen-code/pull/9361)), worktree snapshot cleanup
2. **Review & Verification Automation** — Deterministic flakiness gates, incremental review anchoring across rebases ([#9191](https://github.com/QwenLM/qwen-code/pull/9191)), content-anchored local review loops ([#9190](https://github.com/QwenLM/qwen-code/pull/9190)), severity-floor enforcement at posting boundary ([#9279](https://github.com/QwenLM/qwen-code/pull/9279))
3. **Web Shell UX Polish** — In-flow dialog sheets, composer animation control, file attachment parity with images, transcript memory bounds
4. **CI/CD Resilience** — Self-healing checkout wipes, platform-sensitive test triggers (macOS/Windows lanes restored in [#9370](https://github.com/QwenLM/qwen-code/pull/9370)), autofix convergence braking
5. **Model & Provider Flexibility** — Local model identity preservation (issue [#7433](https://github.com/QwenLM/qwen-code/issues/7433)), ACP session model reporting accuracy

---

## 6. Developer Pain Points

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Local model identity loss in SDK/ACP** | Issue [#7433](https://github.com/QwenLM/qwen-code/issues/7433): SDK reports `coder-model(qwen-oauth)` instead of user's `qwen3.6-27b` (llama.cpp) | High — blocks local-model workflows |
| **Daemon OOM from unbounded transcript retention** | PR [#9303](https://github.com/QwenLM/qwen-code/pull/9303) fixes renderer crashes via replay snapshot release + block caps | Critical — affects long sessions |
| **Flaky tests blocking merges** | PR [#9130](https://github.com/QwenLM/qwen-code/pull/9130) adds mandatory N× re-run gate; default 5 rounds | High — CI reliability investment |
| **Autofix loops stalling on non-converging diffs** | PR [#9371](https://github.com/QwenLM/qwen-code/pull/9371) introduces `failure.md` handoff; PR [#9262](https://github.com/QwenLM/qwen-code/pull/9262) audits instead of stopping | Recurring — automation maturity |
| **Worktree snapshot leakage** | PR [#7925](https://github.com/QwenLM/qwen-code/pull/7925) sweeps stale `.qwen/projects/` entries on startup | Medium — disk hygiene, crash recovery |
| **Review incremental anchors lost on rebase** | PRs [#9191](https://github.com/QwenLM/qwen-code/pull/9191), [#9190](https://github.com/QwenLM/qwen-code/pull/9190), [#9184](https://github.com/QwenLM/qwen-code/pull/9184) rebuild content-anchored incremental review | High — token waste on full re-reviews |
| **CI wipe guards diverged across workflows** | PR [#9369](https://github.com/QwenLM/qwen-code/pull/9369) unifies 3 workflows with canonicalization + allowlists | Medium — maintenance burden |

---

*Digest generated from GitHub data as of 2026-08-18. Links point to live issues/PRs on github.com/QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-18

---

## 1. Today's Highlights

- **v0.9.9 released** yesterday with critical resilience fixes (disk/descriptor exhaustion handling, honest telemetry labeling) plus community contributions for model casing safety and web tool result compaction.  
- **CI is red on both macOS and Windows** across all four completed `main` runs since #5395 — blocking plugin E2E acceptance on macOS and NSIS provisioning on Windows (#5403).  
- **Active push to retire `isZh` branching** across the web codebase in favor of a unified `{ en, zh }` dictionary spine (#5337, #5488, #5490), with docs shell and shared components now migrated.

---

## 2. Releases

**v0.9.9** (tagged 2026-08-17, PR [#5476](https://github.com/Hmbown/CodeWhale/pull/5476))  
*Truth-and-resilience release*:
- Shell tool no longer wedges session on host OOM/descriptor exhaustion ([#5465](https://github.com/Hmbown/CodeWhale/issues/5465))
- Unverified context windows, output ceilings, telemetry defaults now labeled honestly
- Community fixes: model casing resolution ([#5475](https://github.com/Hmbown/CodeWhale/pull/5475)), noisy web tool result compaction ([#5474](https://github.com/Hmbown/CodeWhale/pull/5474))
- CHANGELOG addenda for dsh ocean scene, model catalog currency, website copy rewrite ([#5487](https://github.com/Hmbown/CodeWhale/pull/5487))

---

## 3. Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#2369](https://github.com/Hmbown/CodeWhale/issues/2369) **Config paths fragmented across OS/Cygwin + silent migration bug** | Cross-platform config divergence causes silent data loss; affects Windows, Cygwin, Unix home-dir resolution | 8 comments, patch attached, open since May |
| [#5056](https://github.com/Hmbown/CodeWhale/issues/5056) **Flaky verifier background tests, workspace-sensitive fixtures, 12 ignored tests** | Core test suite unreliable under parallelism; blocks confident releases | 8 comments, authored by maintainer, references AGENTS.md |
| [#5424](https://github.com/Hmbown/CodeWhale/issues/5424) **v0.9.7: TUI crashes after ~1 minute idle** | User-visible crash on `--continue` sessions; reproducible wait-and-crash pattern | 7 comments, **CLOSED** but recent (Aug 16–17) |
| [#1425](https://github.com/Hmbown/CodeWhale/issues/1425) **Large text processing (3M chars) → sub-agent timeout hang** | 10 spawned sub-agents all show `Running` but `agent_wait` times out; session stalls | 7 comments, Chinese report, core sub-agent reliability |
| [#5123](https://github.com/Hmbown/CodeWhale/issues/5123) **Agent spawn surface has too many knobs — labeled builder runs read-only & self-BLOCKED** | Dogfooding failure: delegate builder cannot execute assigned gates due to read-only tool contract | 7 comments, maintainer-authored, v0.9.4 live bug |
| [#1651](https://github.com/Hmbown/CodeWhale/issues/1651) **VS Code crashes when YOLO Agent runs test scripts** | IDE integration instability with autonomous background agents | 6 comments, involves v4-pro/flash models |
| [#1829](https://github.com/Hmbown/CodeWhale/issues/1829) **SSH exit code 255 — suspected TUI shell sandbox TCP 22 egress block** | Built-in shell cannot reach external SSH; local terminal works fine | 6 comments, Windows → Tencent Cloud Singapore |
| [#5337](https://github.com/Hmbown/CodeWhale/issues/5337) **Web: finish dictionary spine — retire every `isZh` branch** | 8 partial locales (ja/vi/ko/ru/uk/es/pt-BR/id) fall back to English; blocks full i18n | 4 comments, multiple PRs merging today ([#5488](https://github.com/Hmbown/CodeWhale/pull/5488), [#5490](https://github.com/Hmbown/CodeWhale/pull/5490)) |
| [#5403](https://github.com/Hmbown/CodeWhale/issues/5403) **`main` red on both platforms across all 4 completed runs** | Plugin E2E (macOS) + NSIS provisioning (Windows) failing consistently; release gate blocked | 3 comments, post-#5395 concurrency fix reveals pre-existing breaks |
| [#5479](https://github.com/Hmbown/CodeWhale/issues/5479) **Fleet/agents: first-class sub-agent & workflow management in TUI (agents rail)** | **Created today** — owner asks for persistent, glanceable agent list with live status/tokens/history | 0 comments (fresh), strategic UX direction |

---

## 4. Key PR Progress (10 Important)

| PR | Status | Summary |
|----|--------|---------|
| [#5492](https://github.com/Hmbown/CodeWhale/pull/5492) | OPEN | `perf(skills)`: keep configured skill prompts stable in model-facing catalog; replace physical root with `<configured-skills>` in discovery warnings |
| [#5494](https://github.com/Hmbown/CodeWhale/pull/5494) | OPEN | `feat(config)`: configurable auto-router classifier timeout via `[auto.router] timeout_secs` (was hardcoded 4s) |
| [#5493](https://github.com/Hmbown/CodeWhale/pull/5493) | OPEN | `fix(pricing)`: classify OrcaRouter as aggregator billing surface (was mislabeled as first-party PAYG) |
| [#5491](https://github.com/Hmbown/CodeWhale/pull/5491) | OPEN | `fix(tui)`: persist approval outcomes before execution; deny on persist failure; reconstruct on resume — closes [#5360](https://github.com/Hmbown/CodeWhale/issues/5360) |
| [#5488](https://github.com/Hmbown/CodeWhale/pull/5488) | CLOSED | `feat(web)`: move docs shell onto dictionary spine — 5 strings migrated from `isZh` ternaries to `pickText()` |
| [#5490](https://github.com/Hmbown/CodeWhale/pull/5490) | CLOSED | `feat(web)`: route 9 shared component locale picks through `pickText()` (follows #5338) |
| [#5485](https://github.com/Hmbown/CodeWhale/pull/5485) | CLOSED | `fix(models)`: bring first-party model rows & pricing current as of 2026-08-17 (verified via curl) |
| [#5484](https://github.com/Hmbown/CodeWhale/pull/5484) | CLOSED | `feat(dsh)`: ambient ocean scene — whale silhouettes + glyph fish behind DeepSeek Harness UI |
| [#5483](https://github.com/Hmbown/CodeWhale/pull/5483) | CLOSED | `web`: de-slop site copy — voice sheet + rewritten surfaces per `docs/design/WEB_VOICE.md` |
| [#5476](https://github.com/Hmbown/CodeWhale/pull/5476) | CLOSED | `release: 0.9.9` — resilience + truth theme with community credits |

---

## 5. Feature Request Trends

1. **Sub-agent / workflow visibility in TUI** — Persistent "agents rail" with live status, elapsed time, tokens, focus/message/stop controls ([#5479](https://github.com/Hmbown/CodeWhale/issues/5479), [#5123](https://github.com/Hmbown/CodeWhale/issues/5123), [#1425](https://github.com/Hmbown/CodeWhale/issues/1425))
2. **Full i18n dictionary spine** — Eliminate all `isZh` branches; route every locale through `{ en, zh }` modules ([#5337](https://github.com/Hmbown/CodeWhale/issues/5337), [#5290](https://github.com/Hmbown/CodeWhale/issues/5290), [#5482](https://github.com/Hmbown/CodeWhale/issues/5482))
3. **Simplified third-party model config** — Pre-built templates (base URL, model list) + "test connection" button + cache fix ([#5350](https://github.com/Hmbown/CodeWhale/issues/5350))
4. **Plugin system parity with Kimi** — Federated marketplaces, first-class install/update/discovery ([#5311](https://github.com/Hmbown/CodeWhale/issues/5311))
5. **Discoverability overhaul** — Surface advanced commands, config-only capabilities, capability-first welcome ([#5442](https://github.com/Hmbown/CodeWhale/issues/5442), [#5439](https://github.com/Hmbown/CodeWhale/issues/5439))
6. **Durable approval outcomes** — One closed outcome per request; session-logged ask/decision pairs; fail-closed ([#5360](https://github.com/Hmbown/CodeWhale/issues/5360), [#5491](https://github.com/Hmbown/CodeWhale/pull/5491))
7. **Status-bar color grammar formalization** — Treat palette as vocabulary; surface repo/worktree state ([#5437](https://github.com/Hmbown/CodeWhale/issues/5437))

---

## 6. Developer Pain Points

| Pain Point | Evidence |
|------------|----------|
| **CI unreliability blocks releases** | `main` red on both platforms for 4 consecutive runs; plugin E2E + NSIS provisioning failing ([#5403](https://github.com/Hmbown/CodeWhale/issues/5403)); 12 ignored tests, flaky verifier backgrounds ([#5056](https://github.com/Hmbown/CodeWhale/issues/5056)) |
| **Cross-platform config fragmentation** | Windows/Cygwin/Unix home-dir rules diverge; silent migration loses secrets ([#2369](https://github.com/Hmbown/CodeWhale/issues/2369)) |
| **TUI crashes under idle/load** | v0.9.7 crashes after ~1 min wait ([#5424](https://github.com/Hmbown/CodeWhale/issues/5424)); large-context sub-agent spawns hang ([#1425](https://github.com/Hmbown/CodeWhale/issues/1425)) |
| **Sandbox network egress broken** | SSH exit 255 from built-in shell; local terminal works ([#1829](https://

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*