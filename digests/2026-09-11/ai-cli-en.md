# AI CLI Tools Community Digest 2026-09-11

> Generated: 2026-09-11 04:15 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-11)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is in a **consolidation-and-hardening phase**. Major players (Claude Code, OpenAI Codex, Gemini CLI, GitHub Copilot CLI, Qwen Code) are shipping weekly releases focused on **enterprise readiness** (gateway pricing, CIDR controls, sandbox isolation), **extensibility standardization** (Function Hooks, MCP compliance, hook contract alignment), and **cross-platform reliability** (Windows/WSL/Wayland fixes). A clear split is emerging: **model-agnostic platforms** (OpenCode, Pi) prioritize provider abstraction and local-model discovery, while **vendor-tied CLIs** deepen integration with their respective model families. Community momentum centers on **session durability**, **token-cost observability**, and **subagent/orchestration maturity**—signaling a shift from "chat assistants" to "autonomous coding agents."

---

## 2. Activity Comparison (2026-09-11)

| Tool | Issues Updated (Hot) | PRs Merged/Updated | Release Status | Notable Velocity Signal |
|------|---------------------|-------------------|----------------|------------------------|
| **Claude Code** | 10 (top issue 159 comments, 217 👍) | 3 (1 closed, 2 open) | **v2.1.268** shipped | High — weekly releases, 159-comment RFC committed for delivery |
| **OpenAI Codex** | 10 (top 26 comments) | **20+ merged today** | **SDK 0.154.0**, Rust CLI α.3 | Very high — 20+ PRs/day, rapid α iterations |
| **Gemini CLI** | 10 (top 13 comments) | 10 (3 closed, 7 open) | **v0.61.0-nightly** | High — nightly cadence, security-focused |
| **GitHub Copilot CLI** | 10 (top 76 👍 on Vim mode) | 2 (1 open, 1 closed) | **v1.0.84-4** shipped | Moderate — monthly releases, memory leaks dominate |
| **Kimi Code CLI** | 2 (1 open, 1 closed) | 0 | None | Low — quiet window, auth regression blocking |
| **OpenCode** | 10 (top 232 👍 on model discovery) | 10 (all today) | None (last release >24h) | High — 10 PRs merged today, perf fixes landing fast |
| **Pi** | 10 (top 5 👍) | 10 (5 closed, 5 open) | None (last release >24h) | High — rapid regression fixes (RPC mode fixed same-day) |
| **Qwen Code** | 5 (low discussion) | 10 (all open) | **v0.23.3**, **Desktop v0.3.0** | High — major release + desktop + hooks overhaul simultaneously |
| **DeepSeek TUI** | 10 (critical: V4 Pro sunset Sept 14) | 0 | None | Low — test-infrastructure crisis, no PR activity |
| **Grok Build** | 0 | 0 | None | Inactive |

---

## 3. Shared Feature Directions (Cross-Tool Consensus)

| Requirement | Tools Demanding | Specific Needs |
|-------------|----------------|----------------|
| **Standardized Hook/Plugin Extensibility** | Claude Code (#91870), Qwen Code (#11610, #11613, #11615, #11619), Pi (#9434), OpenCode (skills) | Plain-text stdout, `stop_hook_active` semantics, timeout in seconds, matcher normalization, session context enrichment (`agent_id`, `prompt_id`), per-event schema coverage |
| **Model Discovery & Provider Abstraction** | OpenCode (#6231, 232 👍), Pi (#8810, #9422), OpenAI Codex (model picker gaps), Qwen Code (#11342) | Auto-discover `/v1/models` from OpenAI-compatible endpoints (Ollama, LM Studio, llama.cpp); per-model config granularity; defaultProvider/defaultModel reliability |
| **Session Durability & Resume** | GitHub Copilot CLI (#4686, #4725, #4805), OpenCode (#48416, #48434), Pi (#9459), Gemini CLI (#21335, #29195) | OOM/handle leak fixes, compaction that completes, lock-file recovery, model persistence across restarts, timeline O(n²) elimination |
| **MCP Protocol Compliance & Robustness** | GitHub Copilot CLI (#4809, #4811, #4795), DeepSeek TUI (#5974, #6040), OpenCode (native providers), Pi (extension providers) | Spec-compliant `initialize`→`server/discover` flow; OAuth callback reliability; STDIO server lifecycle; workspace switching; re-auth without UI freeze |
| **Cross-Platform Terminal Reliability** | All tools (Windows/WSL/Wayland clusters) | Windows: Plan9 mounts (Claude), PowerShell CET crashes (Codex), file locking (Copilot), shellPath non-determinism (Pi), non-UTF8 output (OpenCode). Linux/Wayland: VS Code sidebar (Codex), browser agent (Gemini), modal clipping (DeepSeek). |
| **Token/Cost Observability** | Claude Code (/cost, #65961), Pi (#8061, #8752, #9457), DeepSeek TUI (#6011), OpenCode (#48330) | Accurate `/cost` telemetry; context budget respect

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-09-11 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **[skill-creator: fix run_eval.py 0% recall](https://github.com/anthropics/skills/pull/1298)** (#1298) | Core evaluation harness for skill descriptions; fixes Windows stream reading, trigger detection, parallel workers | Referenced in **Issue #556** (12 comments, 7 👍) — "claude -p never triggers skills/commands (0% trigger rate)"; blocks description-optimization loop | **Open** (updated 2026-09-11) |
| 2 | **[mcp-builder: MCP ≥2.0 compatibility](https://github.com/anthropics/skills/pull/1742)** (#1742) | Fixes `streamable_http_client` rename & custom headers for MCP 2.0+ | Fixes **Issue #1668**; critical for MCP ecosystem alignment | **Open** (updated 2026-09-10) |
| 3 | **[claude-api: mark retired models](https://github.com/anthropics/skills/pull/1607)** (#1607) | Updates model registry: marks 4 retired model IDs (opus-4-1, sonnet-4-0, opus-4-0, haiku-3) | Fixes **Issue #1603**; addresses **Issue #1487** (156k token injection exhausting context) | **Open** (updated 2026-09-01) |
| 4 | **[self-audit: mechanical verification + 4-dim reasoning gate](https://github.com/anthropics/skills/pull/1367)** (#1367) | Universal pre-delivery audit: file existence → reasoning quality (correctness, completeness, clarity, safety) | Novel "damage-severity priority" approach; complements **Issue #1385** (reasoning quality gate pipeline proposal) | **Open** (updated 2026-07-02) |
| 5 | **[Hivemind: zero-cost multi-agent orchestration](https://github.com/anthropics/skills/pull/1628)** (#1628) | Delegates mechanical work to headless opencode workers (free models); Claude stays planner/reviewer/merger | Addresses context-window scarcity; novel cost-optimization pattern | **Open** (updated 2026-08-24) |
| 6 | **[buffer-api: GraphQL scheduling for any agent](https://github.com/anthropics/skills/pull/1627)** (#1627) | Portable agent skill for Buffer social-media API (schedule, analyze, manage posts) | Cross-agent compatibility (Claude, Cursor, Codex, OpenClaw, n8n) | **Open** (updated 2026-09-05) |
| 7 | **[document-typography: typographic QC for generated docs](https://github.com/anthropics/skills/pull/514)** (#514) | Prevents orphans, widows, numbering misalignment in AI-generated documents | "Affects every document Claude generates"; long-standing (open since 2026-03-04) | **Open** (updated 2026-03-13) |
| 8 | **[ODT skill: OpenDocument create/fill/parse](https://github.com/anthropics/skills/pull/486)** (#486) | Full ODT/ODS support: template filling, HTML conversion, ISO-standard documents | Addresses open-format demand; referenced in multiple doc-generation workflows | **Open** (updated 2026-04-14) |

> **Note**: PR comment counts are unavailable (`undefined` in source). Ranking prioritizes: (a) PRs linked to high-comment Issues, (b) recent update activity, (c) ecosystem-critical fixes.

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issue # / Comments / 👍) | Description |
|-------|-----------------------------------|-------------|
| **Security & Trust Boundaries** | [#492](https://github.com/anthropics/skills/issues/492) • 43 comments • 2 👍 | Community skills distributed under `anthropic/` namespace impersonate official skills — highest-comment issue |
| **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) • 16 comments • 8 👍 | Native sharing within organizations (vs. manual file transfer via Slack/Teams) |
| **Skill Triggering & Evaluation Reliability** | [#556](https://github.com/anthropics/skills/issues/556) • 12 comments • 7 👍 | `run_eval.py` / `claude -p` never triggers skills (0% recall) — blocks skill-creator loop |
| **Duplicate Skill Management** | [#189](https://github.com/anthropics/skills/issues/189) • 6 comments • 9 👍 | `document-skills` & `example-skills` install identical content → context pollution |
| **Context Window Optimization** | [#1487](https://github.com/anthropics/skills/issues/1487) • 4 comments | `claude-api` skill injects ~156k tokens in single call, exhausting context |
| **MCP-Native Skill Exposure** | [#16](https://github.com/anthropics/skills/issues/16) • 4 comments | "Expose Skills as MCPs" — standardize skill APIs via MCP protocol |
| **Bedrock / Enterprise Deployment** | [#29](https://github.com/anthropics/skills/issues/29) • 4 comments | AWS Bedrock compatibility for enterprise environments |
| **Agent Governance & Safety** | [#412](https://github.com/anthropics/skills/issues/412) • 6 comments | Policy enforcement, threat detection, trust scoring for agent systems (closed but signals demand) |

---

## 3. High-Potential Pending Skills (Active Open PRs)

| PR | Skill | Why It May Land Soon |
|----|-------|----------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator eval fix** | Blocks core skill-development loop; tied to highest-engagement bug (#556); recent activity (Sep 11) |
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder MCP 2.0 support** | Ecosystem-critical; fixes breaking change in MCP ≥2.0; very recent (Sep 10) |
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api model registry update** | Directly addresses context-exhaustion bug (#1487); simple, low-risk fix |
| [#1602](https://github.com/anthropics/skills/pull/1602) | **evaluation serialization & stability fixes** | Cross-skill reliability (mcp-builder, skill-creator, web-artifacts-builder); 4 bug classes in 1 PR |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit (v1.3.0)** | High-value meta-skill; addresses reasoning quality — top community request per #1385 |
| [#1734](https://github.com/anthropics/skills/pull/1734) | **Detect orphaned docx comments** | Niche but clean docx fix; very recent (Sep 10) |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind multi-agent orchestration** | Novel architecture; solves context-cost tradeoff; aligns with "agent delegation" trend |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for *reliable, secure skill execution infrastructure* — fixing the evaluation loop that validates skills works, hardening the MCP integration layer, and establishing trust boundaries — rather than new domain-specific skills.**

---

# Claude Code Community Digest — 2026-09-11

---

## 1. Today's Highlights

**v2.1.268** ships gateway pricing parity—signed-in clients now receive managed rates through `gateway.yaml` so `/cost` and telemetry match the spend meter—plus a startup warning when `access_control.allow_cidrs` is empty. The community’s highest-signal discussion remains **Function Hooks (#91870, 159 comments)**, now committed for delivery “in weeks.” Meanwhile, a **Windows KB5124008 update broke Plan9 mounts for Cowork** (#92984, 84 comments), and a long-standing Desktop launch failure on Windows (#53247, 75 comments) persists.

---

## 2. Releases

### v2.1.268
- **Gateway pricing parity**: `pricing:` in `gateway.yaml` propagates managed rates to signed-in Claude Code clients; `/cost` and telemetry now reflect actual spend.
- **Gateway startup warning**: Emits a warning when `access_control.allow_cidrs` is empty, preventing accidental open access.

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Reaction |
|---|-------|----------------|---------------------|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | **Function Hooks – make plugins 10× more powerful** | Core extensibility milestone; enables custom tool execution, pre/post processing, and agent orchestration. | 159 comments, 92 👍 – “shipping in weeks” per maintainer update. |
| [#92984](https://github.com/anthropics/claude-code/issues/92984) | **Cowork (Windows): Plan9 mount fails after KB5124008** | Blocks all Windows Cowork users on current patch; uninstalling KB restores function. | 84 comments, 42 👍 – urgent regression, workaround documented. |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | **Claude Desktop fails to launch on Windows – orphaned Silo/Job Object** | App crash leaves un-cleanable kernel object; only logoff/reboot recovers. | 75 comments, 29 👍 – 5-month-old blocker, high user impact. |
| [#30112](https://github.com/anthropics/claude-code/issues/30112) | **Cowork network egress allowlist broken – custom domains blocked 403** | Allowlist setting ignored; users cannot reach private/internal endpoints. | 59 comments, 54 👍 – cross-platform networking gap. |
| [#65961](https://github.com/anthropics/claude-code/issues/65961) | **Model: verbose code comments by default, ignores “stop” instructions** | Opus 5 emits excessive comments despite system prompts; hurts token budget. | 33 comments, 217 👍 – highest 👍 count, model behavior regression. |
| [#27561](https://github.com/anthropics/claude-code/issues/27561) | **Modern text input: click-to-position, selection, standard editing** | **CLOSED** – basic TUI editing parity finally addressed. | 26 comments, 47 👍 – long-requested UX fix delivered. |
| [#92016](https://github.com/anthropics/claude-code/issues/92016) | **Desktop (macOS) auto-denies CLI-native SendMessage, breaks subagent resumption** | Cross-session messaging broken in Desktop Code tab; subagents cannot resume. | 22 comments, 11 👍 – regression in 1.46388.1. |
| [#92249](https://github.com/anthropics/claude-code/issues/92249) | **ListAgents/SendMessage missing in Desktop scheduled-task & Remote Control sessions** | Same regression as #92016 but for background/remote sessions. | 9 comments – bisected to 1.44121.4 → 1.46388.1. |
| [#90708](https://github.com/anthropics/claude-code/issues/90708) | **Desktop: bring back context-usage indicator (or make footer configurable)** | Context-window % more actionable than 5-hr limit ring for long agentic runs. | 6 comments, 7 👍 – UX telemetry gap. |
| [#87554](https://github.com/anthropics/claude-code/issues/87554) | **`claude auth` spins 100% CPU indefinitely (Bun runtime)** | OAuth token path triggers busy-loop; `--version` unaffected. | 5 comments – niche but hard hang, no timeout. |

---

## 4. Key PR Progress

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#42205](https://github.com/anthropics/claude-code/pull/42205) | `fix(hookify): normalize tool matcher parsing` | **CLOSED** | Trims and normalizes OR-separated matcher strings (e.g., `Edit \| Write`) so spaces around separators no longer break hook matching. |
| [#93452](https://github.com/anthropics/claude-code/pull/93452) | `mods/diff: match the built-in /diff panel` | **OPEN** | Aligns diff mod pane with built-in: hunk rendering via engine’s code element, close ✕, row spacing, empty-state, narrow-terminal resize, single repo probe. |
| [#93244](https://github.com/anthropics/claude-code/pull/93244) | `mods: API renames, telemetry fixes, and a diff backend seam` | **CLOSED** | Renames `isFocused`/`tool` in diff mod, tightens per-row telemetry (third-party providers send nothing), adds git-backed backend seam for future VCS plug-ins. |

---

## 5. Feature Request Trends

1. **Plugin/hook extensibility** – Function Hooks (#91870) dominate; users want pre/post tool interception, custom tool registration, and agent lifecycle hooks.
2. **Cross-session messaging parity** – `SendMessage`/`ListAgents` must work in Desktop, scheduled tasks, and Remote Control (#92016, #92249).
3. **Configurable status line / footer** – Context usage, token budget, and custom widgets (#90708, #76988).
4. **Gateway & enterprise controls** – Pricing propagation, CIDR allowlists, egress allowlists that actually work (#30112, v2.1.268).
5. **Model behavior knobs** – Suppress verbose comments, control reasoning verbosity (#65961).
6. **TUI polish** – Mouse hover navigation, SIGWINCH re-render, modern text editing (#90609, #76988, #27561).
7. **Auth/runtime stability** – OAuth token handling, Bun 100% CPU hang, auto-update permission loss (#87554, #93532).

---

## 6. Developer Pain Points

| Area | Recurring Frustration | Representative Issues |
|------|------------------------|------------------------|
| **Windows Cowork** | Plan9 mount breaks on OS updates; egress allowlist ignored; connected folders never mount in VM. | #92984, #93221, #30112, #93525 |
| **Desktop stability (Win/macOS)** | Launch failure due to orphaned Job Objects; auto-update drops folder permissions; messages hang at “Sending…”. | #53247, #93532, #93528 |
| **Subagent / cross-session messaging** | `SendMessage`/`ListAgents` missing or auto-denied in Desktop, scheduled tasks, Remote Control. | #92016, #92249 |
| **Model output control** | Unwanted verbose comments; safety false-positives on legitimate sysadmin signals. | #65961, #93524 |
| **Auth & runtime** | `claude auth` CPU spin (Bun); OAuth token env var suspected trigger; no timeout. | #87554 |
| **TUI/UX regressions** | Lost mouse hover-to-jump, Cmd+Enter now interrupts instead of queues, Esc kills background subagent. | #90609, #93402, #93530 |
| **Plugin/LSP install** | Official LSP plugins install without `lspServers` config → zero servers load. | #93474 |
| **Context caching** | `CLAUDE.md`/rules re-written to prompt cache every session start. | #93499 |

---

*Data sourced from `github.com/anthropics/claude-code` — releases, issues, and PRs updated in the last 24 hours.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-11

---

## 1. Today's Highlights

The Python SDK **0.154.0** shipped with two new reasoning-effort tiers (`max`, `ultra`) and a matching CLI binary, giving developers finer control over model compute allocation. Meanwhile, the Windows Desktop app continues to surface a cluster of high-impact regressions: GPT-6 Astra missing from the model picker for Pro users, browser control failing under API-key auth, and follow-up messages breaking after the first turn. On the engineering side, 20+ PRs merged today—from voice runtime bundling on Linux to thread-scoped instructions and Windows sandbox service inclusion—signal a heavy focus on platform parity and session reliability.

---

## 2. Releases

| Release | Version | Key Changes |
|---------|---------|-------------|
| **Python SDK** | `0.154.0` | • `pip install --upgrade openai-codex==0.154.0` (Python 3.10+)<br>• Adds `max` and `ultra` reasoning-effort values ([#39662](https://github.com/openai/codex/pull/39662))<br>• Adds `ExternalMessage` to synchronous API<br>• Bundles `openai-codex-cli-bin==0.154.0` runtime |
| **Rust CLI (alpha)** | `0.155.0-alpha.1` → `alpha.3`<br>`0.154.0-alpha.6.2` | Rapid alpha iterations; no public changelog yet |
| **Cygwin Build Inputs** | `voice-cygwin-108b38cf` | 103 pinned Cygwin packages + signed index for offline Windows voice builds (CI-only, not in user packages) |

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#34499](https://github.com/openai/codex/issues/34499) | **Cannot create local Work chat inside ChatGPT Project (Windows Desktop)** | Blocks enterprise/team workflows on Windows; 26 comments, 16 👍 | High — reported Jul 21, still open |
| [#43375](https://github.com/openai/codex/issues/43375) | **GPT-5/GPT-6 "Selected model is at capacity" across models** | Broad capacity errors break multi-model workflows; affects Plus/Pro | High — 21 comments, 11 👍 in 4 days |
| [#42853](https://github.com/openai/codex/issues/42853) | **GPT-6 Astra missing from model picker for eligible Pro accounts (Windows)** | Flagship model inaccessible on primary desktop platform | High — 20 comments, 4 👍 |
| [#43410](https://github.com/openai/codex/issues/43410) | **Browser control fails with API-key auth on Windows** | `unsupported Codex auth method: apikey` breaks automation for API-key users | High — 16 comments, 10 👍 |
| [#33968](https://github.com/openai/codex/issues/33968) | **VS Code sidebar hangs/renders blank on Linux/Wayland** | Long-standing IDE integration bug on modern Linux display stack | Medium — 14 comments, 1 👍 (open since Jul 18) |
| [#18343](https://github.com/openai/codex/issues/18343) | **Scoped memory management (global, project, hybrid, per-thread)** | Top feature request for memory isolation across projects/threads | Medium — 13 comments, 11 👍 (open since Apr) |
| [#38878](https://github.com/openai/codex/issues/38878) | **PowerShell 7.6.4 CET fail-fast crash on Windows 11 21H2** | Bundled pwsh crashes hard; CLI works, App doesn't | Medium — 12 comments |
| [#42027](https://github.com/openai/codex/issues/42027) | **Side chat fork fails: duplicate rollout ordinal breaks thread history** | Data-integrity bug in session forking; blocks recovery workflows | Medium — 12 comments, 2 👍 |
| [#17541](https://github.com/openai/codex/issues/17541) | **Model switch mid-conversation fails: "encrypted content could not be decrypted" (Azure)** | Blocks Azure customers from switching models in-session | Medium — 10 comments, 8 👍 |
| [#41338](https://github.com/openai/codex/issues/41338) | **Inline image output: 230 tokens but 4.2 MB on wire, wedges thread** | Token-based context mgmt misses huge payloads; causes silent thread death | Medium — 9 comments |

---

## 4. Key PR Progress (10 Notable Merges Today)

| PR | Title | Category | Impact |
|----|-------|----------|--------|
| [#44714](https://github.com/openai/codex/pull/44714) | Bundle Linux voice runtimes & improve audio reliability | Voice/Platform | Fixes ALSA/PipeWire capture loss; adds startup diagnostics |
| [#44711](https://github.com/openai/codex/pull/44711) | Return to command center after session cancellation/deletion | UX/Session | Prevents TUI exit; preserves daemon/remote connections |
| [#44701](https://github.com/openai/codex/pull/44701) | Add provider for thread-scoped instructions | Core/Instructions | Enables per-thread `AGENTS.md`-style context; composes after global, before repo |
| [#44694](https://github.com/openai/codex/pull/44694) | Include Windows sandbox service in release artifacts | Platform/Windows | Ships `codex-windows-sandbox-service` for x64/ARM64; DotSlash integration |
| [#44693](https://github.com/openai/codex/pull/44693) | Preserve selected profile settings over managed new-thread defaults | Config/Profiles | Explicit profile choices (model, reasoning, tier) no longer overwritten |
| [#44691](https://github.com/openai/codex/pull/44691) | Warn about ignored configuration settings | Config/DX | Surfaces typos/deprecated keys at startup instead of silent ignore |
| [#44676](https://github.com/openai/codex/pull/44676) | Resolve permission profiles with explicit execution-host path context | Security/Paths | Fixes cross-platform glob/deny resolution; respects host path semantics |
| [#44675](https://github.com/openai/codex/pull/44675) | Refresh global instructions at model-request boundaries | Core/Instructions | Live reload of `AGENTS.md` edits during active sessions |
| [#44671](https://github.com/openai/codex/pull/44671) | Keep voice sessions alive through mute and audio backlog | Voice/Reliability | Prevents session death on queue saturation; sends silence when muted |
| [#44656](https://github.com/openai/codex/pull/44656) | Attribute turn metrics to models used during the turn | Telemetry | Fixes misattribution after mid-session model switches; per-turn breakdown |

---

## 5. Feature Request Trends

1. **Scoped Memory & Context Control** — Strong demand for hierarchical memory (global → project → thread) with explicit CRUD ([#18343](https://github.com/openai/codex/issues/18343), [#27731](https://github.com/openai/codex/issues/27731)).
2. **Model Access Parity** — Pro/Plus users expect flagship models (GPT-6 Astra) in all clients; Windows Desktop lagging ([#42853](https://github.com/openai/codex/issues/42853)).
3. **Browser/Computer Use Reliability** — Cross-platform browser control (Chrome/Edge) and Computer Use (Xcode, etc.) are brittle; timeouts, auth mismatches, proxy needs ([#43410](https://github.com/openai/codex/issues/43410), [#43386](https://github.com/openai/codex/issues/43386), [#44364](https://github.com/openai/codex/issues/44364)).
4. **Session Continuity & Recovery** — Forking, history truncation, ordinal corruption, and missing history plague long-running threads ([#42027](https://github.com/openai/codex/issues/42027), [#43640](https://github.com/openai/codex/issues/43640), [#43262](https://github.com/openai/codex/issues/43262)).
5. **Image Generation Controls** — Native transparent-background PNG support requested for GPT Image 2 ([#40572](https://github.com/openai/codex/issues/40572)).
6. **Accessibility & UX Polish** — Reduced-motion respect, command-center error visibility, draft preservation ([#44666](https://github.com/openai/codex/pull/44666), [#44651](https://github.com/openai/codex/pull/44651)).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Windows Desktop App instability** | Very High | Model picker missing models ([#42853](https://github.com/openai/codex/issues/42853)), browser control broken ([#43410](https://github.com/openai/codex/issues/43410), [#44135](https://github.com/openai/codex/issues/44135), [#44364](https://github.com/openai/codex/issues/44364)), follow-up messages fail ([#44102](https://github.com/openai/codex/issues/44102)), PowerShell crashes ([#38878](https://github.com/openai/codex/issues/38878)), Work chat creation broken ([#34499](https://github.com/openai/codex/issues/34499)) |
| **Model capacity / rate limiting** | High | "At capacity" across GPT-5/6 ([#43375](https://github.com/openai/codex/issues/43375), [#44565](https://github.com/openai/codex/issues/44565)), GPT-6 Astra usage drains fast ([#43201](https://github.com/openai/codex/issues/43201)), App usage >> CLI ([#44459](https://github.com/openai/codex/issues/44459)) |
| **Session/history corruption** | High | Fork ordinal mismatch ([#42027](https://github.com/openai/codex/issues/42027)), history truncation ([#43640](https://github.com/openai/codex/issues/43640)), missing history recovery ([#43262](https://github.com/openai/codex/issues/43262)), stale prompt on compaction resume ([#27731](https://github.com/openai/codex/issues/27731)) |
| **Auth method fragmentation** | Medium | API key vs subscription mismatch for browser/computer use ([#43410](https://github.com/openai/codex/issues/43410), [#44064](https://github.com/openai/codex/issues/44064)), Slack OAuth stale tokens ([#19669](https://github.com/openai/codex/issues/19669)), Azure model-switch decryption failure ([#17541](https://github.com/openai/codex/issues/17541)) |
| **Linux/Wayland IDE integration** | Medium | VS Code sidebar hangs/blank ([#33968](https://github.com/openai/codex/issues/33968)), voice runtime deps missing (addressed in [#44714](https://github.com/openai/codex/pull/44714)) |
| **Token accounting vs actual payload size** | Medium | Inline images: 230 tokens ≠ 4.2 MB wire; context mgmt blind ([#41338](https://github.com/openai/codex/issues/41338)) |
| **GPT-6 Astra behavior regression** | Emerging | Premature turn termination, narrating vs acting, "I guess..." hedging ([#43329](https://github.com/openai/codex/issues/43329), [#43614](https://github.com/openai/codex/issues/43614)) |

---

*Generated from github.com/openai/codex data as of 2026-09-11. Links point to live GitHub issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-11

---

## 1. Today's Highlights
The project shipped nightly **v0.61.0-nightly.20260911** with a wave of security hardening: Windows git-argument validation, path-traversal fixes for NTFS short names and checkpoint tags, and sandbox filesystem isolation improvements. Meanwhile, the issue tracker shows sustained focus on **subagent reliability** (recovery after `MAX_TURNS`, generalist-agent hangs, skill/adoption gaps) and **Auto Memory quality** (redaction timing, low-signal retry loops, invalid-patch quarantine).

---

## 2. Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| [v0.61.0-nightly.20260911.ged2ac40df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260911.ged2ac40df) | Nightly | Automated version bump; see compare link for granular diffs vs previous nightly. |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Title & Link | Priority / Area | Why It Matters | Community Reaction |
|---|--------------|-----------------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent recovery after `MAX_TURNS` reported as GOAL success | P1 / Agent / Bug | Subagents silently mask turn-limit exhaustion as success, breaking trust in autonomous workflows. | 13 comments, 2 👍 — active retesting requested |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent hangs indefinitely | P1 / Agent / Bug | Core delegation path stalls on simple ops (e.g., `mkdir`), forcing users to disable subagents. | 8 comments, 8 👍 — high pain visibility |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Leverage model’s bash affinity via zero-dependency sandboxing | P2 / Agent / Enhancement (Large) | Strategic: align CLI with Gemini 3’s native POSIX toolchain preference without sacrificing security. | 9 comments, 1 👍 — architectural discussion |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | Assess impact of AST-aware file reads, search, mapping | P2 / Agent / Epic | Could reduce token noise & turn count via precise method-bound reads; evaluates `tilth`/`glyph`. | 7 comments, 1 👍 — exploratory |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini under-uses custom skills & sub-agents | P2 / Agent / Bug | Skills/agents require explicit invocation; limits autonomous capability discovery. | 6 comments |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Add deterministic redaction & reduce Auto Memory logging | P2 / Security / Bug | Secrets enter model context *before* redaction; service logs skill data — compliance risk. | 5 comments |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell command “Waiting input” hang after completion | P1 / Core / Bug | Frequent false “awaiting user input” state blocks automation; affects simple commands. | 4 comments, 3 👍 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent fails on Wayland | P1 / Agent / Bug | Platform gap for Linux/Wayland users; `browser_agent` terminates with GOAL but no output. | 4 comments, 1 👍 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Stop Auto Memory retrying low-signal sessions indefinitely | P2 / Agent / Bug | Extraction agent skips low-signal sessions but never marks them processed → perpetual re-queue. | 4 comments |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Enhance browser_agent resilience: session takeover & lock recovery | P3 / Agent / Feature | Persistent browser profiles deadlock on orphaned processes; needs graceful recovery. | 4 comments |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | Title & Link | Status | Area | Summary |
|---|--------------|--------|------|---------|
| [#29184](https://github.com/google-gemini/gemini-cli/pull/29184) | Validate git args in Windows sandbox to block silent `git diff --output` | Open | Security / Core | Prevents silent file truncation via `--output` flag on Windows where git read-only cmds skip confirmation. |
| [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) | Route `read_file` through `FileSystemService` | Closed | Core | Unifies FS access for ACP clients; `read_file` now respects injected filesystem like `write_file`/`replace`. |
| [#29192](https://github.com/google-gemini/gemini-cli/pull/29192) | Contain legacy raw-tag path inside checkpoints directory | Open | Security / Core | Fixes path traversal via `../` in `/chat delete <tag>`; validates & sandbox resolves legacy tag fallback. |
| [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) | Mitigate NTFS 8.3 short-name (SFN) path traversal | Closed | Security / Core | Normalizes & blocks `git~1`, `env~1`, etc. in `AllowedPathChecker` and path normalization. |
| [#29283](https://github.com/google-gemini/gemini-cli/pull/29283) | Improve filesystem isolation & isolate runtime state (sandbox) | Open | Security / Sandbox | Read-only config mounts, ephemeral runtime dirs, unified across Docker/Podman/runsc/LXC/Seatbelt. |
| [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) | Persist OAuth credentials after login | Open | Auth / Security | Eliminates repeated Google sign-in prompts; writes tokens immediately post-browser/user-code flow. |
| [#29250](https://github.com/google-gemini/gemini-cli/pull/29250) | Prevent indirect prompt injection via build files & untrusted flags | Open | Security / Core | Hardened workspace boundary validation for build configs & external cmd params in restricted mode. |
| [#29134](https://github.com/google-gemini/gemini-cli/pull/29134) | Protect current session from deletion | Open | Core / CLI | Guards active session ID in `--list-sessions`/`--delete-session`; avoids accidental self-deletion. |
| [#29186](https://github.com/google-gemini/gemini-cli/pull/29186) | Correct `exitCode` null check in shell sandbox denial heuristic | Open | Security / Core | Fixes `TypeError` when `ExecutionResult.exitCode` is `null`; proper nullish check before `!== 0`. |
| [#29187](https://github.com/google-gemini/gemini-cli/pull/29187) | Use `safeLiteralReplace` for LLM prompt template placeholders | Open | Security / Core | Eliminates `$`-sequence injection in user-controlled replacement strings (e.g., `$&` expansion). |

---

## 5. Feature Request Trends
1. **Subagent maturity** — Reliable turn-limit handling (#22323), visibility into trajectories (#22598), config override respect (#22267), and automatic skill/agent adoption (#21968).
2. **Persistent, file-backed task tracking** — Replace in-context `WriteToDo` with CRUD task files surviving session resume (#18836, #21000, #21335).
3. **AST-aware code navigation** — Precision reads/search/mapping to cut token bloat and misaligned edits (#22745, #22746, #19561).
4. **Sandbox & security hardening** — Zero-dependency OS sandboxing (#19873), filesystem isolation (#29283), prompt-injection guards (#29250).
5. **Auto Memory quality loop** — Deterministic redaction, low-signal quarantine, invalid-patch surfacing (#26525, #26522, #26523).
6. **Browser agent robustness** — Wayland support (#21983), session takeover (#22232), config-driven limits (#22267).
7. **Terminal UX polish** — Flicker-free resize (#21924), symlink agent recognition (#20079), self-documenting CLI flags (#21432).

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Silent subagent failures** — Turn-limit exhaustion masquerading as success (#22323), generalist agent hangs (#21409), missing subagent context in `/bug` reports (#21763).
- **Shell tool flakiness** — False “awaiting input” after command exit (#25166), tmp-script sprawl across workspace (#23571), destructive git/DB commands without guardrails (#22672).
- **Session persistence gaps** — `/compress` not saved on disk (#21335), checkpoint corruption crashes resume (#29195), symlink agents ignored (#20079).
- **Platform-specific breaks** — Wayland browser agent (#21983), Windows git sandbox bypass (#29184), NTFS short-name traversal (#29116).
- **Auto Memory opacity** — Secrets in model context pre-redaction (#26525), infinite low-signal retries (#26522), silent invalid-patch drops (#26523).
- **Tool explosion** — 400-error when >128/400 tools registered (#24246); demand for smarter tool scoping.

---

*Generated from `google-gemini/gemini-cli` GitHub data (issues & PRs updated 2026-09-11).*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-11

## Today's Highlights
- **v1.0.84-4** ships new plugin-management commands (`instruction list`, `lsp list`, `enable`/`disable`) and JSON output for marketplace browsing, improving scriptability.  
- **Memory stability dominates open issues**: multiple reports of OOM crashes, handle leaks, and compaction failures on long-running sessions (Linux/WSL/Windows).  
- **MCP integration friction** surfaces in several fresh bugs: spec-violating `server/discover` calls, OAuth callback mismatches, and STDIO servers failing to load after `/new`.

## Releases
### v1.0.84-4 ([release notes](https://github.com/github/copilot-cli/releases/tag/v1.0.84-4))
- **Added** `copilot instruction list` and `copilot lsp list` (replacing `plugins list --kind instruction|lsp`).  
- **Added** `--json` flag to `copilot plugin list`, `plugin marketplace list`, and `plugin marketplace browse`.  
- **Added** `enable` and `disable` subcommands to `copilot plugin` for runtime plugin toggling.

## Hot Issues
| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#13](https://github.com/github/copilot-cli/issues/13) **Vim/vi input mode** (CLOSED) | Long-standing request for modal editing in interactive CLI; high 👍 count shows strong power-user demand. | 12 comments, **76 👍** |
| [#4742](https://github.com/github/copilot-cli/issues/4742) **Desktop app 1.1.15 blocks second Local session** | Breaks multi-session workflows; regression in recent desktop update. | 11 comments, 5 👍 |
| [#1285](https://github.com/github/copilot-cli/issues/1285) **Org-level agents invisible in CLI/VS Code** | Enterprise adoption blocker: custom agents not discoverable despite correct repo structure. | 9 comments, 11 👍 |
| [#3260](https://github.com/github/copilot-cli/issues/3260) **Copy/paste broken over SSH+tmux→Windows 2025** | Remote Windows development workflow broken since v1.0.47; affects tmux users. | 7 comments, 1 👍 |
| [#3534](https://github.com/github/copilot-cli/issues/3534) **WSL2 ARM64 `/copy` fails (clip.exe quoting)** | ARM64 WSL users cannot use clipboard; quoting bug in cmd.exe wrapper. | 6 comments, 5 👍 |
| [#4095](https://github.com/github/copilot-cli/issues/4095) **Windows plugin update “Access denied” while VS Code runs** | VS Code’s file watchers lock plugin dirs, preventing updates; high 👍 indicates wide impact. | 3 comments, **21 👍** |
| [#4686](https://github.com/github/copilot-cli/issues/4686) **Node.js OOM after ~37 min (31k leaked libuv handles)** | SEA binary ignores `NODE_OPTIONS`; handle leak makes long sessions impossible on Linux. | 3 comments |
| [#4725](https://github.com/github/copilot-cli/issues/4725) **Frequent JS heap OOM (4 GiB cap)** | Recurring crashes every few minutes; V8 mark-compact logs suggest GC cannot keep up. | 3 comments, 1 👍 |
| [#4809](https://github.com/github/copilot-cli/issues/4809) **Native MCP sends non-standard `server/discover` before `initialize`** (CLOSED) | Violates MCP lifecycle spec, crashes spec-compliant servers; fixed in 1.0.84-4. | 1 comment |
| [#4811](https://github.com/github/copilot-cli/issues/4811) **`/new` fails to load STDIO MCP, requires `/mcp reload`** | Fresh sessions don’t pick up configured MCP servers; workaround needed each session. | 0 comments (new) |

## Key PR Progress
| PR | Status | Summary |
|----|--------|---------|
| [#4808](https://github.com/github/copilot-cli/pull/4808) | OPEN | **Pin GitHub Actions to commit SHAs** — 4 workflow files updated, 3 refs pinned for supply-chain security. |
| [#4786](https://github.com/github/copilot-cli/pull/4786) | CLOSED | **Revise third-party services notice** — Clarifies access requirements and terms for external integrations. |

## Feature Request Trends
1. **Editor-grade input** — Vim mode (#13), Ctrl+Backspace word delete (#2199), multi-line editing.  
2. **Multi-account / identity management** — Seamless switching between personal/work GitHub accounts (#367).  
3. **Plugin ergonomics** — JSON output, enable/disable, marketplace browse (delivered in 1.0.84-4).  
4. **MCP robustness** — Spec compliance, OAuth reliability, STDIO server lifecycle, tool-list refresh safety.  
5. **Session durability** — Resume without OOM, compaction that completes, lock-file recovery, model persistence across restarts.  
6. **Cross-platform clipboard** — Reliable copy/paste on WSL2, SSH+tmux, Windows Server.

## Developer Pain Points
- **Memory/handle leaks** on long sessions (Linux SEA, WSL2, Windows) — crashes at 4 GiB heap cap, leaked libuv handles, compaction OOMs.  
- **Windows file-locking** — VS Code watchers block plugin updates (#4095); stale `inuse.<pid>.lock` files prevent session resume (#4805).  
- **MCP fragility** — Spec violations (#4809), OAuth callback port mismatches (#4795), tools/list refresh race (#4731), STDIO servers not loading on `/new` (#4811).  
- **Authentication opacity** — Local sandbox silently uses cached PAT instead of active `gh` OAuth (#4804); Entra/EMU audience breaks desktop app MCP (#4796).  
- **Idle resource storms** — FileWatch event loop burns 2 CPU cores and writes 33+ GB logs (#4807).  
- **Configuration drift** — Session exit overwrites `settings.json` with stale `model` value (#4252); top-level `model` ignored on startup (#4067).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-11

## 1. Today's Highlights
- **Authentication regression in v0.42.0**: A newly reported issue (#2638) shows `/login` device authorization fails with HTTP 500 after browser approval on macOS, blocking access for free-tier users.  
- **Legacy OS support gap confirmed closed**: Issue #1388 (CentOS 7.9 MCP connection failure) was closed without resolution, reinforcing that older glibc-based distros remain unsupported.  
- **No new releases or PR activity** in the last 24 hours, indicating a quiet development window.

---

## 2. Releases
> No new releases published in the last 24 hours.

---

## 3. Hot Issues

| # | Title | Status | Why It Matters | Community Signal |
|---|-------|--------|----------------|------------------|
| [#2638](https://github.com/MoonshotAI/kimi-cli/issues/2638) | `/login` device auth fails with HTTP 500 after successful browser approval (CLI v0.42.0, macOS) | **OPEN** | Blocks authentication for all macOS users on v0.42.0; also affects VS Code extension. Free-tier (Adagio) users cannot proceed past device-code approval. | 1 comment, 0 👍 — low visibility but high severity (auth breakage). |
| [#1388](https://github.com/MoonshotAI/kimi-cli/issues/1388) | `kimicode` on CentOS 7.9 terminal fails with “mcp connect failed” | **CLOSED** | Confirms CentOS 7.9 (glibc 2.17) is not supported; MCP server connection fails due to binary incompatibility. No fix planned. | 0 comments, 0 👍 — closed silently, typical for EOL distro reports. |

---

## 4. Key PR Progress
> No pull requests updated in the last 24 hours.

---

## 5. Feature Request Trends (from recent issue history)
- **Robust device-authorization flow** — retries, better error surfacing, and fallback to PAT/token login.
- **Broader Linux compatibility** — static-linked binaries or glibc-agnostic builds for RHEL/CentOS 7, Alpine, and embedded environments.
- **MCP server resilience** — automatic reconnection, clearer diagnostics, and offline mode for air-gapped setups.
- **VS Code extension parity** — ensure CLI auth fixes propagate to the extension immediately.

---

## 6. Developer Pain Points
1. **Authentication fragility** — Device-code flow breaks silently with HTTP 500; no CLI-side retry or fallback to personal access tokens.
2. **Legacy Linux exclusion** — CentOS 7 / RHEL 7 users cannot run the CLI due to glibc ≥ 2.28 requirement; no official workaround.
3. **Opaque MCP errors** — “Failed to connect MCP servers” lacks actionable details (timeout vs. version mismatch vs. network policy).
4. **Extension–CLI drift** — VS Code extension shares the same auth bug, forcing developers to switch tools mid-workflow.

---

*Digest generated from GitHub data as of 2026-09-11 00:00 UTC. Links point to live issues for real-time tracking.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-11

## Today's Highlights
No new releases shipped today. The community is heavily focused on **auto-discovery of models from OpenAI-compatible endpoints** (the top-voted issue with 232 👍), a **critical CPU regression** affecting multi-session workflows, and a **TUI streaming freeze** caused by O(n²) delta processing. Multiple PRs landed today addressing the TUI freeze, Windows shell hangs, and timeline reconciliation performance.

---

## Releases
*No releases published in the last 24 hours.*

---

## Hot Issues (10 Noteworthy)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#6231](https://github.com/anomalyco/opencode/issues/6231)** Auto-discover models from OpenAI-compatible provider endpoints | Eliminates manual model listing for LM Studio, Ollama, llama.cpp; most upvoted open issue (232 👍) | 55 comments, 232 👍 — clear consensus |
| **[#30086](https://github.com/anomalyco/opencode/issues/30086)** High CPU usage in newer versions | Blocks running >3 concurrent sessions; regression ~7 days ago | 52 comments, 28 👍 — severe productivity blocker |
| **[#48410](https://github.com/anomalyco/opencode/issues/48410)** WebKit StringImpl assertion failure when DB grows large (SIGTRAP crash) | macOS crash on large databases (21 GB); affects daily drivers | Created today, 4 comments — critical stability |
| **[#48330](https://github.com/anomalyco/opencode/issues/48330)** Copilot Legacy Plan consumed by single prompt in v2 | 1500 req/mo exhausted in one session; v1 worked fine | 4 comments — billing/usage regression |
| **[#47350](https://github.com/anomalyco/opencode/issues/47350)** Shell tool hangs when background process holds stdio | Tool waits for EOF instead of child exit; blocks forever on daemons | 4 comments — core tooling bug |
| **[#48439](https://github.com/anomalyco/opencode/issues/48439)** Shell tool hangs on non-UTF8 pwsh output (Thai/Unicode) | Windows PowerShell 7 + Unicode breaks output collection | Created today — i18n blocker |
| **[#48416](https://github.com/anomalyco/opencode/issues/48416)** Daily "Failed to execute statement" on macOS with concurrent processes | SQLite `busy_timeout=0` + 21 GB DB causes write failures after bash tools | Created today — data-layer contention |
| **[#48434](https://github.com/anomalyco/opencode/issues/48434)** Timeline row reconciliation uses Effect deep equality on every stream delta | O(n²) equality walks 1,280-part sessions on each delta | Created today, 2 comments — perf root cause |
| **[#26772](https://github.com/anomalyco/opencode/issues/26772)** Integrated browser for desktop | High-value UX: inspect/debug web UIs without leaving OpenCode | 16 comments, 9 👍 — strong desktop demand |
| **[#48420](https://github.com/anomalyco/opencode/issues/48420)** Desktop model picker omits deepseek-flash despite API/CLI exposure | Model picker out of sync with server catalog | Created today — discovery UX gap |

---

## Key PR Progress (10 Important)

| PR | Type | Summary |
|----|------|---------|
| **[#48435](https://github.com/anomalyco/opencode/pull/48435)** `refactor(app): avoid deep equality in timeline row reconciliation` | Perf fix | Replaces `Effect.Equal.equals` with field-by-field comparator for 9 row variants; fixes #48434 O(n²) on every stream delta |
| **[#48431](https://github.com/anomalyco/opencode/pull/48431)** `fix(tui): coalesce message.part.delta store writes` | Perf fix | Coalesces delta writes to eliminate O(n²) client-side streaming stage; half of #36043 fix |
| **[#48432](https://github.com/anomalyco/opencode/pull/48432)** `fix(session-ui): grow markdown live tail in place` | Perf fix | In-place markdown tail growth avoids full re-render; other half of #36043 fix |
| **[#48427](https://github.com/anomalyco/opencode/pull/48427)** `fix(win32): exit-first plus bounded drain so shell settles on pipe leak` | Bug fix | Windows shell tool now waits for process exit first, then bounded drain; fixes #37838 and related pipe-leak hangs |
| **[#48429](https://github.com/anomalyco/opencode/pull/48429)** `fix(core): pass flat settings through to native provider packages` | Core fix | Ensures flat settings bag reaches native `@opencode/ai` packages via `providerOptions`; unifies legacy `aisdk:` path |
| **[#48433](https://github.com/anomalyco/opencode/pull/48433)** `fix(core): report provider initialization failures` | Error handling | Surfaces Azure `resourceName`/`baseURL` missing errors instead of misleading "unsupported package" |
| **[#48438](https://github.com/anomalyco/opencode/pull/48438)** `feat(opencode): native Anthropic advisor tool` | Feature | Implements `server_tool_use` → `advisor_tool_result` consultation inside executor stream; closes #23058 |
| **[#48324](https://github.com/anomalyco/opencode/pull/48324)** `feat(skill): implement two-tier progressive skill disclosure` | Feature | Adds custom gateway compat for GPT-5 Responses API (`textVerbosity`); progressive skill reveal |
| **[#46574](https://github.com/anomalyco/opencode/pull/46574)** `feat(plugin): expose opt-in 1M context variants for GPT-5.6 OAuth` | Feature | Adds `gpt-5.6-sol-1m`, `gpt-5.6-mini-1m` opt-in models for Codex OAuth; closes #46527 |
| **[#48428](https://github.com/anomalyco/opencode/pull/48428)** `fix(ci): re-sign macOS CLI binaries after cross-compilation` | Build fix | Re-signs darwin binaries post Linux cross-compile; fixes Gatekeeper/notarization (#46313) |

---

## Feature Request Trends
1. **Zero-config model discovery** — Three related issues (#6231, #27553, #23327) demand automatic `/v1/models` polling for OpenAI-compatible providers (LM Studio, Ollama, llama.cpp). This is the #1 community ask.
2. **Integrated browser workspace** — #26772 and new #48436 (Puppeteer-based browser tool) show strong demand for in-app web inspection/debugging.
3. **Context management automation** — #48418 requests adaptive context compression; users want automatic summarization instead of linear growth.
4. **Desktop parity with CLI** — Model picker gaps (#48420), draggable regions (#41646), and tab layout bugs (#48422) highlight desktop-specific UX debt.
5. **Enterprise/team features** — Skill disclosure (#48324), agent ordering (#24691), and subagent attachment forwarding (#32302) point to multi-agent workflow maturation.

---

## Developer Pain Points
| Area | Recurring Themes |
|------|------------------|
| **Performance** | CPU spikes (#30086), TUI streaming freeze (#36043), timeline O(n²) reconciliation (#48434), large DB crashes (#48410) |
| **Shell/Process Management** | Windows pipe inheritance hangs (#47350, #48414, #48427), non-UTF8 output deadlocks (#48439), background process detection |
| **Model/Provider Config** | Manual model lists for local providers (#6231), provider init errors masked (#48433), model picker sync (#48420) |
| **Stability** | Concurrent session DB contention (#48416), WebKit crashes on large DBs (#48410), event stream reconnect storms (#48015) |
| **Billing/Usage** | Copilot legacy plan drain in v2 (#48330), token depletion loops (#48437), provider rate-limit opacity |

---

*Digest generated from GitHub data as of 2026-09-11. Links point to live issues/PRs on `anomalyco/opencode`.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-11

## Today's Highlights
The community is heavily focused on provider reliability and TUI polish this cycle. Critical fixes landed for Bedrock/OpenAI-compatible streaming (reasoning effort, cache normalization, thought signatures), while multiple regressions in v0.85.1 around RPC mode, Windows shell resolution, and fullscreen rendering were rapidly identified and closed. Extension authors gain a new `systemPromptAppend` hook for session-level prompt contributions.

## Releases
No new releases in the last 24 hours.

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#8061](https://github.com/earendil-works/pi/issues/8061)** Context budget ignores `maxTokens` output reservation; 78% input triggers overflow retry that then fails | Core token accounting bug causing silent request failures even with headroom; affects all large-context models (Gemini 1M+). | 👍 2 · 8 comments · `inprogress` |
| **[#8810](https://github.com/earendil-works/pi/issues/8810)** Extension-registered providers: fresh sessions intermittently ignore `defaultProvider`/`defaultModel` | Breaks deterministic startup for extension authors; non-deterministic provider selection undermines reproducibility. | 👍 1 · 5 comments · `bug` |
| **[#9265](https://github.com/earendil-works/pi/issues/9265)** O(n²) tool-call argument re-parsing in `openai-completions` streaming freezes event loop | Quadratic parsing on every delta blocks the single-threaded daemon; critical for embedded/agent-hosting runtimes. | 4 comments · `bug` |
| **[#9331](https://github.com/earendil-works/pi/issues/9331)** Bedrock: OpenAI `reasoning_effort` never sent to model | Thinking level changes have no effect on Bedrock-hosted OpenAI models (gpt-5.6-sol/luna), breaking a key UX knob. | 4 comments · `bug` |
| **[#8752](https://github.com/earendil-works/pi/issues/8752)** `bedrock-converse`: `usage.input` not normalized across model families → false cache-miss notices, doubled cost | Anthropic (net) vs OpenAI-family (gross) token accounting mismatch inflates perceived input cost and triggers spurious cache-miss alerts. | 👍 5 · 4 comments |
| **[#9294](https://github.com/earendil-works/pi/issues/9294)** `claude-fable-5` built-in `allowedFallbackModels` lists deprecated `claude-opus-4-8` (API 400) | Every Fable 5 request fails immediately; hardcoded fallback metadata is stale. | 5 comments · `inprogress` |
| **[#9361](https://github.com/earendil-works/pi/issues/9361)** Windows: `shellPath` non-deterministically ignored when extensions loaded; falls back to WSL `bash.exe` | Extension load order breaks configured shell resolution; users get WSL bash instead of Git Bash/PowerShell silently. | 4 comments |
| **[#9257](https://github.com/earendil-works/pi/issues/9257)** `extractCursorPosition` leaves duplicate `CURSOR_MARKER` occurrences | Cursor marker leaks into rendered output when multiple markers exist on a line; corrupts terminal display. | 5 comments |
| **[#9268](https://github.com/earendil-works/pi/issues/9268)** TUI: remote Markdown image with empty alt hides URL in user messages | `![](url)` renders as invisible bullet in lists; content exists in JSONL but not in UI — confusing for users. | 5 comments |
| **[#9465](https://github.com/earendil-works/pi/issues/9465)** `--mode rpc`: every prompt fails with `startsWith` TypeError (0.85.1) | Complete RPC mode regression in latest release; blocks all programmatic integrations. | 1 comment · **Closed** (fast fix) |

## Key PR Progress

| PR | Description | Status |
|----|-------------|--------|
| **[#9461](https://github.com/earendil-works/pi/pull/9461)** `fix(ai): defer streamed tool argument parsing until read` | Eliminates O(n²) re-parsing by moving JSON.parse to lazy `.arguments` access (cached per version). Fixes #9265. | **Open** |
| **[#9297](https://github.com/earendil-works/pi/pull/9297)** `fix(ai): remove invalid Fable 5 fallback target` | Removes deprecated `claude-opus-4-8` from built-in fallbacks; keeps Opus 5 only. Covers generated metadata & Fable 5.1. | **Closed** |
| **[#9443](https://github.com/earendil-works/pi/pull/9443)** `fix(ai): capture and replay Gemini thoughtSignature on openai-completions tool calls` | Captures `thoughtSignature` from streamed `tool_calls[]` deltas for Gemini behind OpenAI-compatible gateways. | **Closed** |
| **[#9331](https://github.com/earendil-works/pi/pull/9331)** *(implied fix)* Bedrock OpenAI reasoning effort | Community diagnosis: Bedrock adapter omits `reasoning_effort`; fix likely in `bedrock-converse` request builder. | **Open issue** |
| **[#9431](https://github.com/earendil-works/pi/pull/9431)** `feat(agent): default 3 minute timeout for every tool call` | Adds global default timeout (previously only `bash`/`powershell` had opt-in); prevents hung agent sessions. | **Closed** |
| **[#9442](https://github.com/earendil-works/pi/pull/9442)** `fix(ai): allow prompt cache keys for compatible proxies` | Adds `compat.supportsPromptCacheKey` flag so proxies can receive `prompt_cache_key` without long-retention requirement. | **Open** |
| **[#9434](https://github.com/earendil-works/pi/pull/9434)** `feat(coding-agent): allow extensions to append to session system prompt` | New `session_start` → `systemPromptAppend` hook; contributions collected with ordering, trimming, source metadata. | **Open** |
| **[#9441](https://github.com/earendil-works/pi/pull/9441)** `fix(tui): prevent cursor marker leaks` | Treats APC cursor markers as positional metadata; stops `sliceWithWidth()` from replaying them into selection slices. | **Open** |
| **[#9438](https://github.com/earendil-works/pi/pull/9438)** `fix(tui): let overlays cover terminal images` | Fixes Kitty/ghostty images rendering above overlays (e.g., `/agents` menu); overlays now compose over image lines. | **Closed** |
| **[#9459](https://github.com/earendil-works/pi/pull/9459)** `fix(coding-agent): prefer recorded model changes on resume` | Resume logic now prefers last `model_change` event over last assistant message's model; fallback preserved for old sessions. | **Open** |

## Feature Request Trends
1. **Per-model/provider configuration granularity** — `#8133` (compaction profiles per model), `#9422` (baseUrl value resolution), `#9331` (reasoning effort per provider) all point to a need for finer-grained, model-aware settings instead of global defaults.
2. **Extension API completeness** — `#9462` (racy `ctx.ui.notify`), `#9434` (system prompt append), `#8810` (provider registration reliability) show extension authors hitting ceiling of current hooks.
3. **Cache/cost observability** — `#8752`, `#9457` (1h cache billed at 5m rate), `#8463` (premature cache misses) indicate demand for accurate, normalized token accounting across providers.
4. **Deterministic Windows/WSL behavior** — `#9361` (shellPath), `#9464` (doubled lines), `#9456` (legacy ESC+CR) cluster around Windows terminal quirks.

## Developer Pain Points
- **Streaming performance cliffs**: O(n²) tool-call parsing (#9265) and lack of default tool timeouts (#9431) cause silent hangs in daemonized/embedded deployments.
- **Provider abstraction leaks**: Bedrock (reasoning, cache normalization), OpenAI-compatible proxies (cache keys, thought signatures), and extension-registered providers all require bespoke fixes rather than clean interfaces.
- **v0.85.1 regression cluster**: RPC mode broken (#9465), TUI rendering doubled (#9464), Windows shell non-determinism (#9361) — suggests release validation gaps for config/terminal matrix.
- **Cursor/selection fidelity**: Multiple marker leaks (#9257, #9332, #9441) and selection persistence (#9466) indicate fragile terminal composition logic under fullscreen/overlay interactions.

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-11

## 1. Today's Highlights
- **v0.23.3 released** with expanded reasoning presets for Kimi, Qwen, and DeepSeek models, plus a nightly build and SDK TypeScript v0.1.12 bundling the same CLI version.
- **Desktop v0.3.0** shipped with scheduled packaging CI and bridge fixes; a preview build (v0.3.0-preview.0) is also available for early testers.
- **Hooks system overhaul underway**: multiple PRs align hook contracts with Claude Code (plain-text stdout, `stop_hook_active`, timeout units, matchers) and extend settings schema coverage to all hook events.

---

## 2. Releases

| Release | Key Changes |
|---------|-------------|
| **[v0.23.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3)** | Feat: expand Kimi, Qwen, DeepSeek reasoning presets ([#11349](https://github.com/QwenLM/qwen-code/pull/11349)). No breaking changes. |
| **[v0.23.3-nightly.20260910](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260910.c46cb85cf2)** | Nightly build; includes DingTalk refactor removing obsolete background response aggregation ([#11570](https://github.com/QwenLM/qwen-code/pull/11570)). |
| **[SDK TypeScript v0.1.12](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.12)** | Bundles CLI v0.23.3. |
| **[Desktop v0.3.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.3.0)** | CI: scheduled desktop packaging ([#11519](https://github.com/QwenLM/qwen-code/pull/11519)); fix: bridge keeps pending permission queue. |
| **[Desktop v0.3.0-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.3.0-preview.0)** | Preview build (not auto-updated); macOS ARM64 download available. |

---

## 3. Hot Issues (Top 10 by relevance)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#11610](https://github.com/QwenLM/qwen-code/issues/11610)** `hooks: align the hook contract with Claude Code` | Standardizes hook I/O (plain-text stdout, `stop_hook_active`, timeout in seconds, matchers) for ecosystem compatibility. | P1, needs discussion; 2 comments. |
| **[#11564](https://github.com/QwenLM/qwen-code/issues/11564)** `web_search: design page titles for cited sources` | Enables proper `[title](url)` citations; split from #11490 after two review rounds. | P2, needs discussion; 3 comments. |
| **[#11617](https://github.com/QwenLM/qwen-code/issues/11617)** `Deferred review findings from PR #11241: Browser SDK` | Tracks follow-up fixes for Playwright-based Browser SDK outside original PR scope. | Auto-filed; 0 comments. |
| **[#11123](https://github.com/QwenLM/qwen-code/issues/11123)** `fix(serve): explicit-close/kill paths discard child error detail` | Improves daemon session-kill logging (`[object Object]` → real error). | Closed; 2 comments. |
| **[#7167](https://github.com/QwenLM/qwen-code/issues/7167)** `Fleet Shepherd Dashboard` | Automated fleet health tick; shows bot PR states (e.g., #11588 idle). | Bot-maintained; 3 comments. |

*Only 5 issues updated in last 24h; all shown above.*

---

## 4. Key PR Progress (Top 10 by impact)

| PR | Summary | Status |
|----|---------|--------|
| **[#11620](https://github.com/QwenLM/qwen-code/pull/11620)** `chore(core): cover every hook event in settings schema and hook bus` | Adds `PostCompact`, `PermissionDenied`, `TodoCreated`, `TodoCompleted`, `InstructionsLoaded` to hooks schema. | Open |
| **[#11241](https://github.com/QwenLM/qwen-code/pull/11241)** `feat(browser-use): add Playwright-based Browser SDK` | Typed, model-facing SDK controlling existing Chrome via semantic locators, DOM snapshots, visual coordinates. | Open (autofix/takeover) |
| **[#11618](https://github.com/QwenLM/qwen-code/pull/11618)** `feat(core): add permission_mode, agent_id, prompt_id to every hook input` | Enriches all hook payloads with session context for better tooling. | Open |
| **[#11615](https://github.com/QwenLM/qwen-code/pull/11615)** `fix(core)!: read command hook timeout in seconds with 600s default` | **Breaking**: command hook `timeout` now seconds (was ms); default 600s (was 60s). Compat: ≥1000 still treated as ms. | Open |
| **[#11616](https://github.com/QwenLM/qwen-code/pull/11616)** `feat(core): attach page titles to web_search sources` | Implements #11564 design: search agent returns `Sources:` list; tool reads titles without editing narration. | Open (self-reported) |
| **[#11619](https://github.com/QwenLM/qwen-code/pull/11619)** `refactor(core): apply one matcher rule to every hook event` | Unifies matcher logic: exact match → `|`-list → unanchored regex; empty/`*`/`.*` = match all. | Open |
| **[#11613](https://github.com/QwenLM/qwen-code/pull/11613)** `fix(core): report real stop_hook_active on Stop hooks` | `stop_hook_active` now `false` on first stop check, `true` only when agent continues after a blocking Stop hook. | Open |
| **[#11093](https://github.com/QwenLM/qwen-code/pull/11093)** `Add a persistent focus mode for quieter terminal transcripts` | `/focus` hides reasoning rows, summarizes tool groups (incl. failures), persists across restarts; Ctrl+O reveals details. | Open |
| **[#11276](https://github.com/QwenLM/qwen-code/pull/11276)** `feat(web-shell): add web previews with saved delivery history` | Preview panel for dev URLs (desktop/mobile widths, refresh, external open); retains workspace requirement; saves history. | Open |
| **[#11169](https://github.com/QwenLM/qwen-code/pull/11169)** `fix(web-shell): close trust-gate and bystander gaps in local-files bridge` | Reserves explicit "still resolving" state; fixes four review items from #10962 squash-merge. | Open |

---

## 5. Feature Request Trends
1. **Hooks parity with Claude Code** — Multiple PRs (#11610, #11613, #11615, #11618, #11619, #11620) converge on standardizing hook contracts, schemas, and event coverage.
2. **Browser automation SDK** — Playwright-based Browser SDK (#11241) + Native Messaging relay (#11242) indicate strong push for in-browser agent capabilities.
3. **Web Shell richness** — Previews (#11276), model config (#11342), cancelled-response persistence (#11608), local-files bridge hardening (#11169).
4. **Terminal UX polish** — Focus mode (#11093), one-shot reminder suppression (#11562), rewind anchored to prompt identity (#9466).
5. **Configuration ergonomics** — `${VAR}` expansion in `.mcp.json` (#11501), endpoint-aware model pickers (#11342).

---

## 6. Developer Pain Points
- **Hook contract fragmentation** — Developers building integrations face inconsistent payloads, timeout units (ms vs s), and missing events; the current alignment sprint addresses this directly.
- **Web search citation quality** — Lack of page titles forced model to fabricate or omit citations; fix in #11616.
- **Daemon session opacity** — Kill/close paths swallowed error details (#11123), making debugging hard.
- **Flaky CI/release pipelines** — v0.23.3 first attempt failed due to timeline-margin contention in review-salvage replay (#11588).
- **Local-files bridge trust gaps** — Bystander/trust-gate holes allowed unauthorized access; patched in #11169.
- **Terminal noise** — Reasoning rows and verbose tool groups clutter transcripts; focus mode (#11093) is opt-in mitigation.

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-11

---

## 1. Today's Highlights
No new releases or PRs landed in the last 24 hours. The issue tracker is dominated by **test-infrastructure instability** (stack overflows, flaky parallel tests, a full-suite deadlock) and a **critical upstream change**: DeepSeek will discontinue V4 Pro on **2026-09-14**, routing all Pro traffic to V4.1 Flash at Flash pricing. Several UX regressions (clipped input modals, duplicate footer timers, broken markdown underscores) and MCP/OAuth gaps (re-auth freezes, logout not switching workspaces) are also active.

---

## 2. Releases
*None in the last 24 hours.*

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6025](https://github.com/Hmbown/Codewhale/issues/6025) | **DeepSeek V4 Pro discontinuation (Sept 14)** | All Pro-model requests will be silently rerouted to V4.1 Flash with Flash billing. Breaks cost assumptions and model capabilities for every user. | 3 comments, 0 👍 — urgent migration path needed |
| [#5929](https://github.com/Hmbown/Codewhale/issues/5929) | **Parallel-test flakes in `codewhale-tui` (6 tests)** | Tests fail only under full-suite load, pass in isolation. Each flake costs a 25-min CI rerun. Blocks reliable releases. | 5 comments — tracking issue for 6 distinct flakes |
| [#5988](https://github.com/Hmbown/Codewhale/issues/5988) | **Two lib tests overflow 2 MiB thread stack** | `cargo test -p codewhale-tui --lib` aborts with `SIGABRT` on MCP/plugin tests. Hidden by nextest’s per-process isolation in CI. | 4 comments — stack-size fix required |
| [#6049](https://github.com/Hmbown/Codewhale/issues/6049) | **Full libtest suite deadlock (ABBA inversion)** | Hermetic test run freezes at ~5285/12390 tests; all 14 workers park in `runtime_api::tests::*`. CPU → 0. Blocks all local test runs. | 0 comments — **critical blocker**, filed today |
| [#6045](https://github.com/Hmbown/Codewhale/issues/6045) | **User-input modal clips options & hides typed input** | 22-row hard cap, centered overlay, no scroll, no back-navigation. Reproduced on 141×38 terminal. Core UX regression. | 3 comments — affects every interactive prompt |
| [#6011](https://github.com/Hmbown/Codewhale/issues/6011) | **Token accounting & tool diagnostics (per-component, cache hits, compaction cost)** | Part of Core execution plan C11. Needed for observability, cost control, and debugging compaction behavior. | 4 comments — linked to Linear execution plan |
| [#6004](https://github.com/Hmbown/Codewhale/issues/6004) | **Hooks cannot observe session state (idle/fatal/waiting)** | Only 11 fine-grained events exist; no lifecycle hooks for automation or external tooling. | 4 comments — blocks session-aware integrations |
| [#6009](https://github.com/Hmbown/Codewhale/issues/6009) | **`/models` command missing pagination support** | Single `GET /v1/models` call drops all pages after the first. OpenRouter/large providers return incomplete catalogs. | 2 comments — affects model discovery |
| [#5974](https://github.com/Hmbown/Codewhale/issues/5974) | **MCP re-auth freezes entire TUI; Diagnose button inert** | Founder-reported: re-auth on stale MCP server hangs UI completely; Diagnose does nothing. | 0 comments — severe UX break during auth rotation |
| [#6040](https://github.com/Hmbown/Codewhale/issues/6040) | **MCP OAuth re-login silently reuses remote grant** | Logout → login still binds to old workspace (e.g., `shannonlabs` vs `shannon-labs`). No way to switch authorized org. | 0 comments — blocks multi-workspace MCP use |

---

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends
1. **Pluggable memory backends** ([#6050](https://github.com/Hmbown/Codewhale/issues/6050)) — demand for `mem0`/causal-memory integration via a generic `MemoryBackend` seam.
2. **First-class OpenRouter vendor pinning** ([#6007](https://github.com/Hmbown/Codewhale/issues/6007)) — config/UI to select upstream provider per model.
3. **Session-state hook events** ([#6004](https://github.com/Hmbown/Codewhale/issues/6004)) — lifecycle hooks (`idle`, `fatal-error`, `waiting-for-user`) for automation.
4. **Configurable approval/input timeouts** ([#6003](https://github.com/Hmbown/Codewhale/issues/6003)) — 300 s hard-coded timeout is non-discoverable and inflexible.
5. **Fleet/Agent unification** ([#6036](https://github.com/Hmbown/Codewhale/issues/6036), [#6038](https://github.com/Hmbown/Codewhale/issues/6038)) — duplicated concept with overlapping fields; decision: keep both, rename/deduplicate fields.
6. **Per-model/per-component token accounting** ([#6011](https://github.com/Hmbown/Codewhale/issues/6011)) — cache-hit rates, compaction cost, tool-call error patterns.

---

## 6. Developer Pain Points (Recurring Frustrations)
- **Test suite unreliability**: Flakes, stack overflows, and now a full deadlock make local/CI validation painful and time-consuming.
- **Upstream model churn**: DeepSeek V4 Pro sunset with <1 week notice forces immediate provider/model migration work.
- **MCP auth lifecycle gaps**: Re-auth freezes UI, logout doesn’t clear grants, mid-session credential updates impossible.
- **Modal/input UX regressions**: Clipped dialogs, no scroll, no back-navigation, hard-coded limits — basic terminal UX broken.
- **Model catalog incompleteness**: Pagination missing, default model (`deepseek-flash`) not registered for its own provider ([#6043](https://github.com/Hmbown/Codewhale/issues/6043)).
- **Session resume ambiguity**: `--continue` picks “most recent” with no session ID shown; multiple sessions per workspace cause confusion ([#6001](https://github.com/Hmbown/Codewhale/issues/6001)).
- **Markdown rendering bugs**: Underscore emphasis lacks opening-delimiter guard, corrupting math/subscript notation ([#6042](https://github.com/Hmbown/Codewhale/issues/6042)).

---

*Generated from `Hmbown/DeepSeek-TUI` (issues tracked in `Hmbown/Codewhale`) — data as of 2026-09-11 00:00 UTC.*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*