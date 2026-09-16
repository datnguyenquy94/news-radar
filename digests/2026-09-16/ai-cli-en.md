# AI CLI Tools Community Digest 2026-09-16

> Generated: 2026-09-16 04:29 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-09-16)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **rapid alpha/nightly release cadences** across major players (Codex 4 alphas, Gemini 3 releases, Claude Code 1 stable), but **stabilization debt is accumulating**. Every tool shows critical reliability gaps: Windows desktop instability (Claude Code, Codex), memory/heap pressure (Copilot CLI, Codex), session resumption failures (DeepSeek TUI, OpenCode, Qwen Code), and destructive action safety (Claude Code, OpenCode, Codex). The ecosystem is splitting into two tiers: **well-funded vendor tools** (Claude Code, Codex, Gemini CLI, Copilot CLI) shipping daily with dedicated teams, and **community/emerging tools** (OpenCode, Pi, Qwen Code, DeepSeek TUI, Kimi) iterating on extensibility and niche workflows. No tool has solved the "reliable agentic workflow" problem end-to-end.

---

## 2. Activity Comparison

| Tool | Releases (24h) | Hot Issues (Tracked) | PRs Merged/Updated (24h) | Primary Focus |
|------|----------------|----------------------|---------------------------|---------------|
| **Claude Code** | 1 stable (v2.1.273) | 10 (7 high-severity) | 2 (diff UX polish) | Windows stabilization, safety gates, rule enforcement |
| **OpenAI Codex** | 4 alphas (0.155.0-a.7→a.10) | 10 (capacity, Windows, quota) | **20** (sandbox, daemon, TUI, perms) | Sandbox correctness, daemon resilience, Windows parity |
| **Gemini CLI** | 3 (stable, preview, nightly) | 10 (subagents, shell, security) | 10 (security, atomic writes, Windows) | Subagent reliability, security hardening, token efficiency |
| **GitHub Copilot CLI** | 1 stable (v1.0.85), 1 pre | 10 (OOM, sandbox, CRLF) | 0 | Memory stability, Vim mode GA, sandbox policy |
| **Kimi Code CLI** | 0 | 2 (quota bug, session titles) | 0 | Billing transparency, session management |
| **OpenCode** | 0 | 10 (crash, data loss, perf) | 10 (hooks, OpenRouter, worktrees, TUI) | Plugin extensibility, sub-agent orchestration, provider observability |
| **Pi** | 0 | 10 (context budget, provider, perf) | 10 (extensions, OrcaRouter, /forget, cost) | Extension API maturity, context control, provider fidelity |
| **Qwen Code** | 1 (cua-driver-rs v0.20.9) | 10 (VS Code Remote, XML leak, Web Shell) | 10 (remote daemon, ACP, per-model API, CI) | Remote/distributed dev, embedding control, multi-protocol support |
| **DeepSeek TUI** | 0 | 10 (resume, headless, fleet, perf) | 10 (ACP, session patch, perf gate, Shoreline UI) | Session resilience, headless automation, fleet/agent ergonomics |
| **Grok Build** | 0 | 0 | 0 | No observable activity |

**Key Observation**: Codex leads PR velocity (20/day) reflecting intense stabilization sprint. Gemini CLI and OpenCode show balanced feature+fix cadence. Claude Code and Copilot CLI have low community PR velocity despite high issue severity — suggesting internal-team-driven releases. Kimi and Grok Build are quiet.

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Windows Parity & Stability** | Claude Code (0x80070020, always-on-top, Shift+Enter), Codex (Computer Use, sandbox ACLs, extension load), Gemini CLI (case-sensitivity, Seatbelt), Copilot CLI (CRLF, sandbox policy), OpenCode (PowerShell `.git` wipe), Qwen Code (CI flakes) | Native AppX/MSIX stability, correct filesystem semantics, sandbox ACLs respecting `.git`, keybinding reliability, CI reliability on Windows runners |
| **Destructive Action Guardrails** | Claude Code (`rm -rf` home/photos, Prisma prod DB), Codex (sandbox DENY ACLs on `.git`, DB deletion), OpenCode (`Remove-Item -Force` wiped `.git`), Copilot CLI (sandbox policy ignored) | Opt-in destructive ops with explicit confirmation, VCS-aware sandbox policies, allowlist enforcement, audit trails |
| **Session Resumption & Persistence** | DeepSeek TUI (session belongs to another host), OpenCode (headless mid-pipeline exits), Qwen Code (Web Shell session-state bugs), Copilot CLI (OOM on resume, compaction loops), Pi (compaction overflows thinking blocks) | Cross-process session ownership, idempotent reload, compaction that preserves hidden tokens, crash recovery with work preservation |
| **Model Capacity & Routing Transparency** | Codex ("at capacity" across GPT-5/6, Pro/Pro×20), Pi (OpenRouter parameter mismatches, Bedrock billing), Qwen Code (per-model wire API), OpenCode (OpenRouter route modifiers), DeepSeek TUI (sticky binding, receipts) | Pool health visibility, graceful degradation, sticky/per-session routing, provider-reported cost usage, declared-preference honor |
| **Token/Context Budget Accounting** | Claude Code (700-line CLAUDE.md ignored 4.5h), Gemini CLI (firehose reads, no persistent `/compress`), Pi (output reservation ignored, compaction re-includes thinking), Copilot CLI (heap OOM at 4.3 GiB), DeepSeek TUI (no runtime perf gate) | Enforced context contracts, persistent compression, accurate output reservation, thinking-block handling in compaction, runtime perf budgets |
| **Extension/Plugin Architecture** | Pi (event unsubscription, ModelRuntime access, tool conflicts), OpenCode (instant TUI hooks, before/after host-call hooks), Qwen Code (Web Shell settings exclusions, host embeddings), DeepSeek TUI (GPUI credential metadata, fleet ergonomics) | Clean hook lifecycles, isolated in-process runtimes, conflict resolution, host-controlled embedding, credential management |
| **Multi-Account/Identity Management** | Claude Code (mobile multi-account 726👍, desktop repeated sign-in), Codex (quota accounting inconsistencies), Kimi Code (no dedicated Work tracker) | Seamless personal/work switching, persistent auth across devices, unified usage accounting |

---

## 4. Differentiation Analysis

| Dimension | Claude Code | OpenAI Codex | Gemini CLI | GitHub Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI | Kimi Code |
|-----------|-------------|--------------|------------|-------------------|----------|-----|-----------|--------------|-----------|
| **Primary Target** | Professional devs, enterprise | Pro/Pro×20 subscribers, power users | Google ecosystem, agent builders | GitHub/VS Code native users | Platform builders, extensibility focus | Extension authors, cost-conscious teams | Remote/containerized dev, enterprise chat | Headless automation, fleet operators | Cost-sensitive individual devs |
| **Technical Approach** | Polished desktop + TUI, strong IDE integration | Rust daemon + TUI, sandbox-first, multi-provider | TypeScript/Node, MCP-native, skill-based agents | Node/TypeScript, VS Code-first, GitHub-native | Rust, plugin hooks, ACP protocol, headless pipelines | Rust, extension API, provider-agnostic, local-first | Rust + Web Shell, ACP control plane, multi-protocol | Rust, ACP server, fleet/agent orchestration | Minimal CLI, quota-focused |
| **Differentiator** | CLAUDE.md rule system, Anthropic model access | Computer Use (desktop automation), Responses API | Subagent delegation, MCP OAuth, AST-aware tooling | GitHub context (PRs, issues, Actions), Vim mode | Programmable platform, preemption primitives | Provider-reported cost, /forget context rollback | Web Shell embedding, cua-driver prebuilt binaries | Shoreline UI redesign, sticky model routing | Quota transparency, Kimi Work integration |
| **Maturity Signal** | High user engagement (726👍 on multi-account), but critical data-loss bugs | High PR velocity (20/day), but alpha-only, capacity opaque | 3-release cadence, security-first PRs, subagent P1s | GA Vim mode, but memory regressions block long sessions | v1.18.x stability regressions, v2 refactors underway | Extension API hardening, no releases but 10 PRs/day | P1 VS Code Remote blocker, autofix bot maturity | Session resumption broken, but perf gate + Shoreline UI landing | Only 2 issues, quota bug critical for paying users |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum (Vendor-Backed, Daily Shipping)** | **Codex**, **Gemini CLI**, **Claude Code** | Codex: 20 PRs/day, 4 alphas/day. Gemini: 3 releases (stable/preview/nightly), 10 security/stability PRs. Claude Code: 726👍 on top issue, but low PR velocity suggests internal-team dominance. |
| **Active Iteration (Community + Core Team)** | **OpenCode**, **Pi**, **Qwen Code**, **DeepSeek TUI** | All show 10 PRs/day with feature+fix balance. OpenCode and Pi lead on extensibility architecture. Qwen Code has mature autofix bot. DeepSeek TUI landing major UI overhaul (Shoreline). |
| **Stalled / Niche** | **Copilot CLI**, **Kimi Code**, **Grok Build** | Copilot CLI: 0 PRs, memory regressions unresolved. Kimi Code: 2 issues only, quota bug unaddressed. Grok Build: no observable activity. |

**Maturity Ranking (by reliability signals)**: Gemini CLI (security-first, 3-channel releases) > Codex (velocity but alpha-only) > Claude Code (engagement but critical bugs) > OpenCode/Pi/Qwen Code (architectural clarity) > DeepSeek TUI (session bugs) > Copilot CLI (memory unstable) > Kimi Code (quota broken) > Grok Build (inactive).

---

## 6. Trend Signals for Technical Decision-Makers

1. **Sandbox ≠ Security** — Every tool with sandboxing (Codex, Claude Code, Copilot CLI, OpenCode) reports **data-loss or VCS corruption** from over-aggressive DENY ACLs or missing confirmation gates. *Implication*: Treat sandbox as UX boundary, not security boundary; implement explicit destructive-action approval flows.

2. **Windows is the Differentiator** — Tools investing in Windows-native reliability (Codex 20 PRs on sandbox/WSL, Gemini CLI case-sensitivity fixes, Qwen Code cua-driver codesigned binaries) will capture enterprise adoption. *Implication*: Evaluate Windows CI/CD and AppX/MSIX stability before standardization.

3. **Session State is the New Reliability Frontier** — Resumption failures (DeepSeek TUI, OpenCode, Qwen Code, Copilot CLI, Pi) correlate with **compaction/context-window pressure**. *Implication*: Require persistent compression, thinking-block-aware compaction, and cross-process session ownership in eval criteria.

4. **Model Routing Opacity = Cost Risk** — Codex "at capacity" across tiers, Pi provider-reported cost adoption, DeepSeek TUI sticky binding, OpenCode OpenRouter modifiers all signal **routing as a first-class concern**. *Implication*: Demand provider-agnostic routing with receipts, declared-preference honor, and per-session cost attribution.

5. **Extension Ecosystems Converging on Hooks + Isolation** — Pi (event unsubscribe, ModelRuntime), OpenCode (instant TUI hooks, before/after host-call), Qwen Code (Web Shell settings exclusions) all building **programmable platforms**. *Implication*: Tools without stable extension APIs will lose platform plays; evaluate hook granularity and isolation guarantees.

6. **Quota/Billing Transparency is a Competitive Lever** — Kimi Code cache-read amplification bug, Codex quota accounting meta-issue (44 comments), Pi provider-reported cost — **auditable metering** is becoming a procurement requirement. *Implication*: Include token accounting auditability in vendor evaluation.

7. **Multi-Account/Identity is Table Stakes for Professionals** — Claude Code 726👍 on multi-account switching, Kimi Code no Work tracker — **identity portability** across personal/work contexts is unresolved. *Implication*: Single-tenant auth models are a blocker for enterprise adoption.

---

**Bottom Line**: No tool is production-ready for unattended agentic workflows today. **Gemini CLI** leads on security/stability process; **Codex** leads on velocity but ships alpha-only; **Claude Code** has strongest UX engagement but critical trust gaps; **OpenCode/Pi/Qwen Code** offer best extensibility architectures for platform builders. For enterprise standardization: **pilot Gemini CLI + Codex** with Windows validation; for platform building: **evaluate OpenCode/Pi extension APIs**; for individual devs: **monitor DeepSeek TUI Shoreline + Copilot CLI Vim mode** once memory stabilizes.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-09-16 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `skill-creator` trigger eval fixes | Isolates trigger evaluation workers, fixes Windows `select()` pipe failures, prevents unrelated tools from stopping scans, handles runtime failures correctly | Core infrastructure fix; addresses false misses/invalid scores in trigger detection | **Open** (updated 2026-09-15) |
| 2 | **[#1703](https://github.com/anthropics/skills/pull/1703)** `md2video-audio` | Zero-cost skill: compiles Markdown → professional MP4 videos with human-like voiceovers via Marp + TTS | New media generation capability; zero external API cost | **Open** (updated 2026-09-15) |
| 3 | **[#1742](https://github.com/anthropics/skills/pull/1742)** `mcp-builder` MCP ≥2.0 compat | Fixes `streamable_http_client` rename, custom headers via `create_mcp_http_client` | Unblocks MCP 2.0+ adoption; fixes #1668 | **Open** (updated 2026-09-13) |
| 4 | **[#1769](https://github.com/anthropics/skills/pull/1769)** `skill-creator` recall=0% fix | Fixes trigger evaluation reporting 100% precision / 0% recall for all skills; stops false optimization loops | Critical eval reliability fix; addresses #1721 | **Open** (updated 2026-09-15) |
| 5 | **[#1628](https://github.com/anthropics/skills/pull/1628)** `hivemind` | Zero-cost multi-agent orchestration: delegates mechanical work to headless opencode workers on free models; Claude stays planner/reviewer/merger | Novel cost-optimization pattern; “expensive model context is the scarce resource” | **Open** (updated 2026-08-24) |
| 6 | **[#525](https://github.com/anthropics/skills/pull/525)** `pyxel` | Retro game development skill: deterministic headless runs, frame inspection, state checks | Niche but complete game-dev workflow; long-open (since Mar 2026) | **Open** (updated 2026-09-15) |
| 7 | **[#1602](https://github.com/anthropics/skills/pull/1602)** Evaluation & benchmark stability | Fixes MCP result serialization, benchmark metrics, encoding issues, script stability across skills | Cross-cutting reliability PR; touches mcp-builder, skill-creator, office skills | **Open** (updated 2026-08-24) |
| 8 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` + `skill-security-analyzer` | Meta-skills: 5-dimension quality analysis (structure, examples, resources, triggers, security) + security scanning for marketplace | Foundation for skill governance; oldest active PR (Nov 2025) | **Open** (updated 2026-01-07) |

> **Note:** PR comment counts are not exposed in the data feed; ranking follows the repository’s “top 20 by comments” ordering.

---

## 2. Community Demand Trends (From Issues)

| Rank | Theme | Representative Issues | Signal Strength |
|------|-------|----------------------|-----------------|
| 1 | **Trust & Namespace Security** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍) — Community skills published under `anthropic/` namespace impersonate official skills | 🔴 Critical |
| 2 | **Org-Wide Skill Sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍) — Need native sharing vs. manual file transfer | 🟠 High |
| 3 | **Trigger/Eval Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍) — `run_eval.py` yields 0% trigger rate; [#202](https://github.com/anthropics/skills/issues/202) (8 comments) — skill-creator reads like docs not ops | 🟠 High |
| 4 | **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments) — `claude-api` injects ~156k tokens; [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments, 1👍) — Reasoning Quality Gate pipeline proposal | 🟡 Growing |
| 5 | **MCP Builder Maturity** | [#1390](https://github.com/anthropics/skills/issues/1390) (4 comments) — Evaluation scores 0/N on real MCP servers (TextContent not JSON-serializable) | 🟡 Growing |
| 6 | **Packaging & Distribution** | [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍) — Duplicate skills from `document-skills` + `example-skills` plugins | 🟡 Growing |
| 7 | **Enterprise Integration** | [#1175](https://github.com/anthropics/skills/issues/1175) (4 comments) — SharePoint Online access control in skills; [#29](https://github.com/anthropics/skills/issues/29) (4 comments) — AWS Bedrock support | 🟢 Niche |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land)

| PR | Skill | Why It’s Poised to Merge |
|----|-------|--------------------------|
| **[#1742](https://github.com/anthropics/skills/pull/1742)** | `mcp-builder` MCP 2.0 compat | Fixes concrete breaking change; unblocks ecosystem upgrade |
| **[#1769](https://github.com/anthropics/skills/pull/1769)** | `skill-creator` recall fix | Resolves silent eval corruption; high maintainer interest |
| **[#1765](https://github.com/anthropics/skills/pull/1765)** | `office` UTF-8 redlining | Fixes Windows/non-UTF-8 locale corruption; small, targeted |
| **[#1724](https://github.com/anthropics/skills/pull/1724)** | `mcp-builder` default → `claude-sonnet-5` | Model refresh; trivial but necessary |
| **[#1607](https://github.com/anthropics/skills/pull/1607)** | `claude-api` retired model markers | Housekeeping; fixes #1603; low risk |
| **[#538](https://github.com/anthropics/skills/pull/538)** | `pdf` case-sensitivity fix | Windows/Linux parity; 8 mismatches, straightforward |
| **[#1703](https://github.com/anthropics/skills/pull/1703)** | `md2video-audio` | New capability, zero-cost, complete implementation |
| **[#1628](https://github.com/anthropics/skills/pull/1628)** | `hivemind` | Innovative multi-agent pattern; aligns with cost-optimization demand |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for trustworthy, reliable skill *infrastructure* — secure namespacing, dependable trigger evaluation, org-level distribution, and context-window discipline — rather than any single domain-specific skill.**  

The top issues and the highest-velocity PRs all target the *platform layer* that makes skills safe to share, reliable to trigger, and efficient to run at scale.

---

# Claude Code Community Digest — 2026-09-16

## Today's Highlights
- **v2.1.273 released** with new LLM gateway observability headers (`x-claude-code-request-class`, `x-claude-code-agent-type`, etc.) opt-in via `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1`.
- **Windows desktop stability crisis**: multiple high-impact bugs around auto-update leaving orphaned AppX containers (0x80070020), always-on-top window behavior, and Shift+Enter keybinding breakage.
- **Data-loss incidents escalating**: two reports of `rm -rf` destroying irreplaceable user files (photos, home folder contents) before verification, plus a Prisma migration wiping a production database due to permission gating failure.

---

## Releases
### v2.1.273
- Added five new request headers for LLM gateway observability: `x-claude-code-request-class`, `x-claude-code-agent-type`, `x-claude-code-prev-tool-durations`, `x-claude-code-compaction`, `x-claude-code-context-compacted`. Opt-in via `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1`.
- Added a notification (details truncated in feed).

---

## Hot Issues

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | **Multi-account switching in Mobile app** | Top-voted feature (726 👍, 182 comments). Users blocked from using personal + work accounts without shared email. | 🔥 **Highest engagement** — clear product gap for professionals juggling identities. |
| [#32479](https://github.com/anthropics/claude-code/issues/32479) | **GitHub Connector connected in Desktop but not recognized** | 144 👍, 97 comments. Core integration broken — connector shows connected but Claude can't use it. | Persistent integration failure affecting developer workflows. |
| [#24726](https://github.com/anthropics/claude-code/issues/24726) | **VS Code: disable auto-attach of open file/selection** | 242 👍, 76 comments. Sidebar auto-attaches context users don't want, polluting prompts. | Long-standing UX friction in the most-used IDE integration. |
| [#89467](https://github.com/anthropics/claude-code/issues/89467) | **Windows: app window always-on-top, no disable** | 59 👍, 30 comments. Window manager violation — app forces itself above all windows with no setting to turn off. | Basic desktop UX failure on Windows. |
| [#90542](https://github.com/anthropics/claude-code/issues/90542) | **CLAUDE.md rules completely ignored for 4.5h session** | 27 comments. 700-line rule contract violated repeatedly; model quoted rules then broke them. | **Critical trust issue** — rule system unreliable for long sessions. |
| [#89680](https://github.com/anthropics/claude-code/issues/89680) | **Windows stealth update leaves orphaned processes (0x80070020)** | 19 comments, 2 👍. Auto-update leaves old AppX container pinned; new version unlaunchable until reboot. | **Blocking regression** — requires full machine reboot after every update. |
| [#73107](https://github.com/anthropics/claude-code/issues/73107) | **Windows: "Another program using this file" after upgrade (0x80070020)** | 16 comments, 3 👍. Same root cause as #89680 — orphaned elevated child process pins old container. | Duplicate of above; confirms systemic Windows update flaw. |
| [#81472](https://github.com/anthropics/claude-code/issues/81472) | **Copy/paste broken across ALL surfaces (tracking 42 issues)** | 11 👍, 5 comments. Meta-issue tracking 42 open copy/paste bugs across TUI, VS Code, Desktop. | **Systemic UX failure** — fundamental editing interaction broken everywhere. |
| [#94393](https://github.com/anthropics/claude-code/issues/94393) | **Monitor tool: persistent flag ignored, timeout capped at 30min** | 8 👍, 4 comments. Background monitoring fails silently; schema allows 1h but runtime kills at ~30min. | Tool reliability gap for long-running automation. |
| [#93408](https://github.com/anthropics/claude-code/issues/93408) | **Desktop deleted macOS home folder including Keychain** | 1 comment, **data-loss**, **high-priority**. Catastrophic `rm -rf` on `~` during routine task. | **Severity: critical** — sandbox/permission model failed to protect user data. |

---

## Key PR Progress

| # | PR | Description | Status |
|---|----|-------------|--------|
| [#94653](https://github.com/anthropics/claude-code/pull/94653) | **diff: first edit opens pane only where layout docks it** | Fixes `mods/diff` opening inline pane on wide terminals (144+ cols) when layout can't dock it — prevented flicker on main screen. | Open |
| [#94594](https://github.com/anthropics/claude-code/pull/94594) | **diff: run git only when built-in panel would, not at session start** | Removed eager `git rev-parse` + `git status` in `session.start` hook that blocked first prompt on large repos. Now runs lazily with panel. | Closed |

> Only 2 PRs updated in last 24h — both `mods/diff` UX polish. Low PR velocity suggests focus on stabilization over features.

---

## Feature Request Trends
From the issue corpus, developers are consistently asking for:

1. **Account & identity management** — Multi-account switching (mobile/desktop), persistent auth, session continuity across devices (#36151, #84938, #94505).
2. **VS Code extension parity** — Delete sessions (not just archive) (#93835), queued messages (#30677), disable auto-attach (#24726), Remote Control toggle (#94505).
3. **Rule/contract reliability** — `CLAUDE.md` actually enforced (#90542), schema validation for tool outputs (#94393).
4. **Windows desktop parity** — Disable always-on-top (#89467), fix Shift+Enter (#92771), fix update/reboot cycle (#89680, #73107).
5. **Sandbox & permission guardrails** — Prevent destructive ops without explicit verification (#92737, #93408, #80868), allowlist enforcement (#94640, #92229).
6. **Copy/paste — fix it everywhere** — 42 open issues consolidated in #81472.

---

## Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Windows desktop app is unstable** | 3 separate 0x80070020 issues (#89680, #73107, #94049), always-on-top (#89467), Shift+Enter broken (#92771), auto-update drops Remote Control (#94049) | Windows users effectively blocked on every update; basic keybindings don't work. |
| **Destructive actions lack safety gates** | `rm -rf` on photos (#92737), home folder + Keychain wiped (#93408), Prisma production DB wiped (#80868) — all in "auto" mode | **Trust erosion** — developers cannot delegate risky ops. |
| **Auth/session persistence broken** | Mobile multi-account (#36151), Desktop repeated sign-in (#84938), Remote Control flag false (#94505) | Friction on every context switch; "effectively unusable as reliable tool" per #84938. |
| **Copy/paste fundamentally broken** | 42 open issues tracked in #81472 across TUI, VS Code, Desktop | Daily workflow friction; basic text manipulation fails. |
| **Rule system (CLAUDE.md) not enforced** | 4.5h session with 700-line contract fully ignored (#90542) | Long-context reliability gap; rules become documentation theater. |
| **Integrations silently corrupt data** | Gmail connector rewrites URLs to Google redirects (#94247), HubSpot connector type errors (#94654) | Connector outputs require manual cleanup; not production-ready. |

---

*Digest generated from GitHub data as of 2026-09-16. Links point to live issues/PRs on `anthropics/claude-code`.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-09-16

---

## 1. Today's Highlights

The Codex team shipped **four rapid-fire alpha releases** (0.155.0-alpha.7 through alpha.10) in the last 24 hours, while closing **20+ PRs** focused on sandbox reliability, TUI ergonomics, daemon resilience, and permission-model hardening. Community attention remains concentrated on **persistent "model at capacity" errors** across GPT-5/6 variants (affecting Pro and Pro×20 users) and **Windows-specific regressions** in Computer Use, sandbox ACLs, and extension loading.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.155.0-alpha.7` → `alpha.10` | Alpha | Four consecutive pre-releases; no changelogs published yet. Likely incremental fixes for sandbox, daemon, and TUI paths given today's PR activity. |

> **Note**: These are alpha builds — expect instability. Track [releases](https://github.com/openai/codex/releases) for promoted versions.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#25178](https://github.com/openai/codex/issues/25178) | **Windows Computer Use screenshot fails on Win10 22H2** (`SetIsBorderRequired` → `0x80004002`) | Blocks Computer Use on older Win10 builds; core desktop automation feature. | 61 comments, 26 👍 — active since May, still open |
| [#28507](https://github.com/openai/codex/issues/28507) | **Persistent "Selected model is at capacity" on Pro 5×** | High-value subscribers unable to use allocated quota; cross-model. | 54 comments, 51 👍 — top-voted open issue |
| [#41220](https://github.com/openai/codex/issues/41220) | **[Meta] Abnormal quota depletion & usage-accounting inconsistencies** | Users report credits burning faster than token counts justify; accounting transparency gap. | 44 comments, 15 👍 — tracking multiple duplicate reports |
| [#43375](https://github.com/openai/codex/issues/43375) | **GPT-5 / GPT-6 models return "at capacity" across the board** | Suggests routing/pooling issue beyond single-model capacity. | 27 comments, 14 👍 |
| [#45019](https://github.com/openai/codex/issues/45019) | **App-server queued follow-up no longer exists** | Breaks multi-turn workflows; high-impact UX regression. | 11 comments, 41 👍 — unusually high vote/comment ratio |
| [#18918](https://github.com/openai/codex/issues/18918) | **Windows sandbox DENY ACLs on `.git` break commits** | Sandbox security model corrupts VCS operations; data integrity risk. | 16 comments, 6 👍 — open since April |
| [#37458](https://github.com/openai/codex/issues/37458) | **VS Code extension fails to load resources on Windows** | Blocks IDE integration entirely for Windows users. | 55 comments, 13 👍 — **CLOSED** (fix likely in recent alphas) |
| [#45835](https://github.com/openai/codex/issues/45835) | **Codex App "at capacity" despite healthy connectivity (Pro Lite)** | New report today; suggests ongoing routing degradation. | 6 comments, 0 👍 — fresh |
| [#43887](https://github.com/openai/codex/issues/43887) | **Windows Computer Use: "Trusted RPC service not configured: sky" + browser URL verification failure** | Second Computer Use breakage on Windows; RPC + browser stack. | 4 comments, 0 👍 |
| [#45444](https://github.com/openai/codex/issues/45444) | **[Regression] Active turn stops mid-task when usage limit hit** | Previously long turns could finish; now hard-killed. Behavior change without notice. | 3 comments, 1 👍 |

---

## 4. Key PR Progress (20 Closed Today)

| # | PR | Area | Summary |
|---|----|------|---------|
| [#45863](https://github.com/openai/codex/pull/45863) | Sandbox/Permissions | Preserve executor path URIs in permission profiles — avoids host-path conversion losses |
| [#45854](https://github.com/openai/codex/pull/45854) | TUI/Daemon | Add `/daemon` menu for local background server updates with package-source choice |
| [#45852](https://github.com/openai/codex/pull/45852) | Permissions | Preserve executor path conventions in permission summaries (no host-namespace interpretation) |
| [#45849](https://github.com/openai/codex/pull/45849) | App-Server | Pin shutdown signal future across `tokio::select!` iterations — prevents premature cancellation |
| [#45845](https://github.com/openai/codex/pull/45845) | TUI | Revert thread when editing earlier prompt via `thread/revert` — keeps thread identity intact |
| [#45837](https://github.com/openai/codex/pull/45837) | Sandbox/WSL | Hide WSLg duplicate distro root in restricted Linux sandboxes (filesystem-identity detection) |
| [#45831](https://github.com/openai/codex/pull/45831) | TUI | Session-only model/reasoning selection (`s` shortcut) — doesn't persist to defaults |
| [#45830](https://github.com/openai/codex/pull/45830) | TUI/Windows | Use app-server config for Windows sandbox state (fixes onboarding/config drift) |
| [#45825](https://github.com/openai/codex/pull/45825) | Core | Opt-in nonfatal clock-read failures (`features.nonfatal_clock_read_failures`) |
| [#45820](https://github.com/openai/codex/pull/45820) | Daemon | Auto-resume interrupted work after managed daemon restarts from recovery snapshots |
| [#45817](https://github.com/openai/codex/pull/45817) | Rendering | Add `codex-mermaid` crate — bounded Unicode text renderer for flowchart/sequence/state/class/ER diagrams |
| [#45813](https://github.com/openai/codex/pull/45813) | TUI/Windows | Track Windows sandbox policy & per-thread executor hosts in TUI |
| [#45812](https://github.com/openai/codex/pull/45812) | Routing | Workspace routing resolver for Responses requests (backend origin + account routing) |
| [#45811](https://github.com/openai/codex/pull/45811) | TUI/WSL | Bounded WSL terminal detection — prevents startup stall & dead-key breakage in VS Code |
| [#45809](https://github.com/openai/codex/pull/45809) | Config | Retire `features.personality` flag; document deprecated settings |
| [#45807](https://github.com/openai/codex/pull/45807) | Daemon | Record interrupted turns in managed daemon recovery snapshots (preserves turn options) |
| [#45806](https://github.com/openai/codex/pull/45806) | Plugins | Restrict plugin install requests to root thread only |
| [#45823](https://github.com/openai/codex/pull/45823) | CI/CD | Fix R2 publishing status conditions for skipped upstream jobs |
| [#45822](https://github.com/openai/codex/pull/45822) | HTTP Transport | Opt-in per-request response body limits (`response_body_limit_bytes`) |
| [#45821](https://github.com/openai/codex/pull/45821) | TUI/Windows | Refresh sandbox config from app-server for current working directory |

> **Pattern**: Heavy investment in **sandbox correctness (Windows + WSL)**, **daemon resilience**, **TUI session ergonomics**, and **permission-model fidelity** — all foundational for reliable agentic workflows.

---

## 5. Feature Request Trends (from Issue Corpus)

| Trend | Evidence | Priority Signal |
|-------|----------|-----------------|
| **Model capacity transparency & fallback** | #28507, #43375, #41220, #45835, #43769, #45648 — 6+ issues, 100+ comments | 🔴 Critical — affects paying subscribers across tiers |
| **Windows parity (Computer Use, sandbox, extension)** | #25178, #18918, #37458, #38310, #42964, #43887, #44342 | 🔴 Critical — Windows is a major platform with regressions |
| **Quota/usage accounting auditability** | #41220 (meta-tracker), #45444 (regression), #28507 | 🟠 High — trust & billing transparency |
| **TUI/CLI session control** | #10763 (clear input), #45588 (lock send), #45831 (session model), #45845 (revert prompt) | 🟠 High — daily-driver friction |
| **Daemon/background reliability** | #45854 (menu), #45820 (recovery), #45807 (snapshots), #45849 (shutdown) | 🟡 Medium — infrastructure hardening |
| **Sandbox safety & VCS compatibility** | #18918 (.git DENY ACLs), #42480 (DB deletion), #43998 (recursive deletion) | 🟡 Medium — data-loss prevention |
| **Voice/text mode feature parity** | #40052 (Android tools hidden in voice), #45002 (macOS voice→text answer loss) | 🟡 Medium — multimodal consistency |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **_"Model at capacity" is the new rate limit_** — Users on Pro, Pro×20, and Pro Lite all hit opaque capacity walls across GPT-5.3 through GPT-6 models. No visibility into pool health, no graceful degradation, no ETA. Workarounds (switching models, reusing conversations) are brittle.

2. **Windows is a second-class platform** — Computer Use broken on Win10 22H2, sandbox corrupts `.git`, extension won't load, typing `/` crashes the MSIX app, updates fail due to incomplete `cua_node` staging. Each release cycle surfaces new Windows-specific blockers.

3. **Quota accounting feels broken** — Multiple independent reports of credits depleting 2–5× faster than token math predicts. No itemized usage breakdown, no reconciliation tool, no acknowledgment from staff on #41220 (meta-tracker, 44 comments).

4. **Session state is fragile** — Deleted conversations linger in sidebar (404 on click), follow-up queues vanish mid-task, voice-mode answers disappear after thinking, new conversations fail while old ones work. State sync between client, app-server, and daemon is leaky.

5. **Sandbox = footgun risk** — Two critical data-loss reports in one week (#42480: production DB dropped; #43998: recursive project deletion). DENY ACLs on `.git` (#18918) show the sandbox model doesn't respect VCS conventions. Developers want **opt-in destructive actions** with explicit confirmation.

6. **No "clear input" in CLI/TUI** — #10763 (10 comments, 7 👍) and #45588 (new) both ask for basic line-editing ergonomics. Small UX gap, high daily friction.

---

## Quick Links

- **Repo**: [github.com/openai/codex](https://github.com/openai/codex)
- **Releases**: [github.com/openai/codex/releases](https://github.com/openai/codex/releases)
- **Issues (new)**: [github.com/openai/codex/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc](https://github.com/openai/codex/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc)
- **PRs (merged today)**: [github.com/openai/codex/pulls?q=is%3Apr+is%3Aclosed+merged%3A2026-09-16](https://github.com/openai/codex/pulls?q=is%3Apr+is%3Aclosed+merged%3A2026-09-16)

---

*Digest generated from GitHub data as of 2026-09-16. Alpha releases and closed PRs reflect same-day activity; issue metrics are live.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-09-16

---

## 1. Today's Highlights

Three releases shipped in the last 24 hours: **v0.60.0 (stable)**, **v0.61.0-preview.0**, and **v0.62.0-nightly**. The stable release hardens web fetch routing and MCP OAuth issuer validation, while the nightly adds a critical fix preserving `AgentLoopContext` across object spreads. On the issue front, subagent reliability dominates — hangs, false “GOAL” success reporting, and under-utilization of custom skills are top pain points. The PR pipeline is heavily focused on security hardening (path traversal, OAuth token retention, policy directory vetting) and core stability (atomic file writes, Windows case-sensitivity, terminal resize flicker).

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **[v0.60.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.60.0)** | Stable | • Fix destination validation & connection routing in web fetch utilities ([#29120](https://github.com/google-gemini/gemini-cli/pull/29120))<br>• Enforce RFC 9207 issuer identification in MCP OAuth flow ([#291xx](https://github.com/google-gemini/gemini-cli/pull/291xx)) |
| **[v0.61.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-preview.0)** | Preview | • Changelog for v0.60.0-preview.0<br>• Version bump to 0.61.0-nightly.20260908 |
| **[v0.62.0-nightly.20260916](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260916.g6a466a7e2)** | Nightly | • Fix: preserve `AgentLoopContext` properties across object spread ([#29335](https://github.com/google-gemini/gemini-cli/pull/29335))<br>• Fix: early return on unsupported store in A2A tasks metadata endpoint |

---

## 3. Hot Issues (Top 10 by Impact & Discussion)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent reports “GOAL success” after hitting `MAX_TURNS` | Masks real failures; breaks trust in autonomous workflows | 13 comments, 2 👍, **P1**, needs retesting |
| **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs indefinitely | Blocks all deferral-based tasks; users must disable subagents | 8 comments, 8 👍, **P1**, needs retesting |
| **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell execution stuck at “Waiting input” after completion | Frequent, breaks simple commands; core UX regression | 4 comments, 3 👍, **P1**, medium effort |
| **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Gemini rarely uses custom skills/sub-agents autonomously | Undermines extensibility model; requires explicit prompting | 6 comments, **P2** |
| **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** Auto Memory sends secrets to model before redaction | Security risk: secrets enter model context & logs | 5 comments, **P2**, security |
| **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** 400 error with >128 tools (actually 400+) | Hard limit blocks large toolsets; needs smarter scoping | 3 comments, **P2** |
| **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser subagent fails on Wayland | Linux/Wayland users blocked from browser automation | 4 comments, 1 👍, **P1**, agent/browser |
| **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** Browser Agent ignores `settings.json` overrides (`maxTurns`) | Configuration ineffective; can’t tune browser agent | 3 comments, **P2**, needs retesting |
| **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)** Symlinked agent files in `~/.gemini/agents/` not recognized | Breaks dotfile management & shared agent configs | 4 comments, **P3**, needs info |
| **[#21335](https://github.com/google-gemini/gemini-cli/issues/21335)** `/compress` not persistent across session resume | Token-saving feature lost on restart; undermines long sessions | 2 comments, 2 👍, **P2**, small effort |

---

## 4. Key PR Progress (Top 10 by Impact)

| PR | Area | Summary |
|----|------|---------|
| **[#29249](https://github.com/google-gemini/gemini-cli/pull/29249)** | Security (Core) | **P1**: Close sibling-prefix bypass in `get_internal_docs` path guard — prevents reading arbitrary sibling directories. |
| **[#29339](https://github.com/google-gemini/gemini-cli/pull/29339)** | Auth (Core) | **P1**: Retain OAuth `refresh_token` on refresh; make credential deletion idempotent — fixes re-auth loop (GH-21691). |
| **[#29244](https://github.com/google-gemini/gemini-cli/pull/29244)** | Core (File Ops) | **P1**: Atomic tool file writes + serialize same-path writes — prevents silent edit loss under parallel execution. |
| **[#29163](https://github.com/google-gemini/gemini-cli/pull/29163)** | Security (CLI) | **P1**: Prevent startup crash in git repos under macOS Seatbelt / restricted perms — `useGitBranchName` hook hardening. |
| **[#29347](https://github.com/google-gemini/gemini-cli/pull/29347)** | UI (Core) | **P1**: Guard against negative layout dimensions in border rendering — fixes `RangeError: Invalid count value: -1`. |
| **[#29333](https://github.com/google-gemini/gemini-cli/pull/29333)** | Enterprise | **P2**: Vet permissions of policy directories found by convention — only trust explicitly configured dirs. |
| **[#29349](https://github.com/google-gemini/gemini-cli/pull/29349)** | Extensions (VS Code) | **P1**: Preserve terminal focus when closing diff tabs — enables seamless multi-file edits (fixes #22193). |
| **[#29247](https://github.com/google-gemini/gemini-cli/pull/29247)** | Core (Windows) | Make `isWithinRoot` case-insensitive on Windows — fixes ACP/IDE FS routing & ignore-path normalization. |
| **[#29151](https://github.com/google-gemini/gemini-cli/pull/29151)** | Agent (Skills) | **P1**: Case-insensitive skill precedence & active state — fixes workspace skill override failures. |
| **[#29286](https://github.com/google-gemini/gemini-cli/pull/29286)** | Agent (Core) | **P1**: Implement Google Search tool in `RobustAutonomousAgent` — expands autonomous research capability. |

---

## 5. Feature Request Trends

1. **AST-aware tooling** — Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)) request semantic code navigation (grep → AST read → precise edits) to cut token usage and misreads.
2. **Subagent observability & control** — Trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), bug report context ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)), and settings override compliance ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)) signal demand for first-class subagent debugging.
3. **Native bash affinity** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) proposes zero-dependency OS sandboxing to let models chain POSIX tools natively, aligning with Gemini 3’s training.
4. **Memory system hardening** — Auto Memory needs deterministic redaction ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525)), retry quenching ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522)), and invalid patch quarantine ([#26523](https://github.com/google-gemini/gemini-cli/issues/26523)).
5. **Terminal/UX polish** — Resize flicker elimination ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), symlink agent support ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)), and persistent `/compress` ([#21335](https://github.com/google-gemini/gemini-cli/issues/21335)) are quality-of-life asks.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Subagent unreliability** — hangs, false success, ignored config | High (5+ issues) | #22323, #21409, #21968, #22267, #21763 |
| **Shell/tool execution stalls** — “Waiting input” ghost, interactive prompt hangs | High (3+ issues) | #25166, #22465, #21983 |
| **Security vs. usability tension** — OAuth loops, secret leakage, path traversal | Medium (4 issues) | #26525, #21691 (via #29339), #29249, #29333 |
| **Configuration not respected** — symlinks ignored, settings.json overridden, case-sensitivity | Medium (3 issues) | #20079, #22267, #29247 |
| **Token/context bloat** — firehose file reads, no persistent compression, tool explosion | Medium (3 issues) | #19561, #21335, #24246 |
| **Platform gaps** — Wayland browser agent, Windows path casing, macOS sandbox | Medium (3 issues) | #21983, #29247, #29163 |

---

*Generated from `google-gemini/gemini-cli` GitHub data (2026-09-16). All links point to live issues/PRs.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-09-16

## 1. Today's Highlights
GitHub Copilot CLI v1.0.85 ships **Vim mode to all users** (`/vim` or `editorMode: vim`), adding modal editing with live mode indicator in the composer. The release also introduces `/settings` opt-ins for context-management tools for agents and subagents. Meanwhile, the community continues to surface **critical memory-pressure regressions** (OOM on long sessions, compaction loops, heap exhaustion) and **sandbox policy bugs** that block local-network access despite configuration.

## 2. Releases
### v1.0.85 (2026-09-16)
- **Vim mode GA**: Toggle with `/vim` or set `editorMode: vim` for modal editing in the composer; current mode shown while typing.  
- **Context-management opt-in**: New `/settings` options to enable context tools for agents and subagents.  
- **Transcript view improvements**: (partial note) `Set transcriptView t…`  

### v1.0.84-9 (pre-release)
- Added `/settings` options for context-management tools (agents/subagents).  
- **Performance**: Reduced metadata scanning time for large local session histories (increased thread/memory use).  
- **Fix**: `End` / `Ctrl+E` now move cursor to true end of wrapped line.

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#13](https://github.com/github/copilot-cli/issues/13) **CLOSED** | **Vim/vi input mode** | Long-standing top request (76 👍, 13 comments) — now delivered in v1.0.85. | High satisfaction; validates CLI’s responsiveness to power-user workflows. |
| [#4664](https://github.com/github/copilot-cli/issues/4664) | **OOM resuming large sessions** | Blocks developers with long-lived sessions; heap hits ~4 GiB cap before any interaction. | 8 comments, 2 👍 — urgent for enterprise/long-running workflows. |
| [#4725](https://github.com/github/copilot-cli/issues/4725) | **Frequent JS heap OOM (Linux)** | Crashes every few minutes with detailed V8 GC logs; renders CLI unusable on Linux. | 6 comments, 1 👍 — platform-specific regression. |
| [#4251](https://github.com/github/copilot-cli/issues/4251) | **Resume regression in 1.0.74** | 3–4× memory vs 1.0.73; 70 min CPU grind on resume. Confirmed A/B regression. | 4 comments, 1 👍 — clear version bisect, high priority. |
| [#4699](https://github.com/github/copilot-cli/issues/4699) | **OOM on long `--resume`; crash dumps in cwd** | Repeated 4 GiB crashes in 14 hrs; diagnostic reports pollute working directory. | 4 comments, 5 👍 — operational nuisance + stability. |
| [#1148](https://github.com/github/copilot-cli/issues/1148) | **CRLF forced on LF files (Windows)** | Breaks line-ending hygiene; affects any file edited by Copilot. | 7 comments, 8 👍 — cross-platform correctness issue. |
| [#4438](https://github.com/github/copilot-cli/issues/4438) | **`disable-model-invocation: true` hides skill entirely** | Skills become unreachable even via explicit invocation; breaks intended “manual-only” semantics. | 6 comments, 7 👍 — agent/skill authoring blocker. |
| [#3954](https://github.com/github/copilot-cli/issues/3954) | **`explore` tool hardcodes `gpt-5.4-mini`** | Ignores custom/DeepSeek model config; fails on non-OpenAI endpoints. | 4 comments, 3 👍 — model flexibility regression. |
| [#4854](https://github.com/github/copilot-cli/issues/4854) | **Sandbox “Allow local network” ignored** | Policy shows blocked regardless of setting; `/sandbox policy` bug acknowledged by maintainer. | 3 comments, 0 👍 — fresh regression in 1.0.83. |
| [#4807](https://github.com/github/copilot-cli/issues/4807) | **Idle CLI `FileWatch` storm → 33 GB log, 221% CPU** | Run-away file-watcher in background; massive log growth, CPU burn. | 2 comments, 0 👍 — silent resource leak. |

## 4. Key PR Progress
> **No pull requests updated in the last 24 hours.**  
> The current release cycle appears driven by internal merges; community PR velocity is low. Watch for upcoming PRs addressing the OOM/compaction cluster and sandbox policy fixes.

## 5. Feature Request Trends
1. **Modal editing & power-user UX** — Vim mode (now shipped), but also requests for **auto-update plugins** ([#2734](https://github.com/github/copilot-cli/issues/2734), 13 👍) and **chat-based clarification** over forms ([#4865](https://github.com/github/copilot-cli/issues/4865)).
2. **Enterprise/policy granularity** — Separate CLI sandbox scopes for yolo mode, folder/tool permissions ([#4783](https://github.com/github/copilot-cli/issues/4783)).
3. **Model & endpoint flexibility** — Remove hardcoded model names (e.g., `explore` tool), honor custom/DeepSeek configs ([#3954](https://github.com/github/copilot-cli/issues/3954)).
4. **Session durability** — Reliable resume, compaction, and lock recovery for long-lived sessions ([#4251](https://github.com/github/copilot-cli/issues/4251), [#4805](https://github.com/github/copilot-cli/issues/4805)).
5. **Observability & debugging** — Fix OTel span completeness ([#4862](https://github.com/github/copilot-cli/issues/4862)), SIGINT handling ([#4863](https://github.com/github/copilot-cli/issues/4863)), and crash-dump placement ([#4699](https://github.com/github/copilot-cli/issues/4699)).

## 6. Developer Pain Points (Recurring Frustrations)
- **Memory instability**: Multiple independent reports of OOM during session resume, compaction, and idle periods — often at the default ~4.3 GiB V8 heap limit. Users lose work and cannot resume sessions.
- **Sandbox policy opacity**: Settings appear enabled but are ignored (local network, dev-tool access); `/sandbox policy` reports contradictory state.
- **Cross-platform file hygiene**: Windows line-ending forced to CRLF; OAuth callback port mismatches (CIMD declares fixed port, CLI uses ephemeral) ([#4793](https://github.com/github/copilot-cli/issues/4793), [#4800](https://github.com/github/copilot-cli/issues/4800)).
- **Agent/skill discoverability**: `disable-model-invocation: true` makes skills invisible to explicit invocation; MCP server unavailability hangs CLI with misleading “waiting on IDE” message ([#4552](https://github.com/github/copilot-cli/issues/4552)).
- **Background process leaks**: Subagents stuck “running” indefinitely ([#4850](https://github.com/github/copilot-cli/issues/4850)), file-watcher storms ([#4807](https://github.com/github/copilot-cli/issues/4807)), and model work continuing after SIGINT ([#4863](https://github.com/github/copilot-cli/issues/4863)).

---

*Digest generated from github.com/github/copilot-cli data as of 2026-09-16. Links point to live issues for further context.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-09-16

## 1. Today's Highlights
No new releases or pull requests in the last 24 hours. Community focus centers on a critical **quota accounting bug** (#2626) where `cache_read` tokens are billed on every turn while `cache_creation` remains zero, causing >10× quota amplification. A separate UX request (#2646) asks for auto-prefixed session titles with creation dates in Kimi Work.

---

## 2. Releases
*No new releases published in the last 24 hours.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#2626](https://github.com/MoonshotAI/kimi-cli/issues/2626) | **Abnormal quota consumption: `cache_read` billed every turn with `cache_creation` always 0 (>10× amplification)** | Paying subscribers report losing ~40% of a 5-hour quota window within minutes of light use. If confirmed, this breaks the expected caching economics and makes the CLI prohibitively expensive for sustained work. | 2 comments, opened 2026-08-29, last updated 2026-09-15. Author is an annual-plan subscriber; urgency is high. |
| [#2646](https://github.com/MoonshotAI/kimi-cli/issues/2646) | **Feature request: auto-prefix Kimi Work session titles with creation date (YYYYMMDD)** | Improves session discoverability and sorting in Kimi Work/Desktop. Low implementation cost, high daily UX value for power users managing many conversations. | Filed 2026-09-15, no comments yet. Routed here per precedent (#2143) due to no dedicated Kimi Work tracker. |

*Only 2 issues updated in the last 24h; both are included above.*

---

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*

---

## 5. Feature Request Trends
From the two active issues, the community is signaling two distinct directions:

1. **Billing transparency & correctness** — Developers need predictable, auditable token accounting. The cache-read amplification bug suggests a mismatch between documented caching behavior and actual metering.
2. **Session management ergonomics** — As Kimi Work/Desktop usage grows, basic organizational features (date-prefixed titles, search, tagging) are becoming table stakes for professional workflows.

---

## 6. Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Unpredictable quota burn** | #2626: 40% quota lost in minutes; `cache_creation=0` while `cache_read` bills every turn | Critical (blocking for paying users) |
| **Lack of dedicated Kimi Work tracker** | #2646 author notes no public tracker for Desktop/Work, files in CLI repo by precedent | Recurring (see #2143) |
| **Session organization at scale** | Request for auto date-prefixing implies manual naming doesn't scale | Emerging |

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` — Issues and PRs updated 2026-09-15 to 2026-09-16.*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-09-16

## Today's Highlights
No new releases shipped today. The community is focused on stabilizing v1.18.x and advancing v2 refactors: a critical `SystemPrompt.environment` crash blocks all prompting for some users, while a recursive skill-discovery glob and a runaway `--unified` diff flag are causing performance derailments. On the feature side, plugin hooks for instant TUI commands and preemption primitives for sub-agent orchestration signal growing demand for deeper extensibility and production-grade agent control.

---

## Releases
*None in the last 24 hours.*

---

## Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#48372](https://github.com/anomalyco/opencode/issues/48372) | **`SystemPrompt.environment` throws `TypeError: undefined is not an object (evaluating 'a.name')` — crashes every prompt** | Blocks *all* `opencode run` and TUI interactions; regression in v1.18.x. | 👍 23 • 7 comments • Open |
| [#5305](https://github.com/anomalyco/opencode/issues/5305) | **Plugin Hook for Instant TUI Commands** | Enables plugins to register zero-latency TUI actions without agent round-trips; high leverage for extensibility. | 👍 14 • 20 comments • Closed (merged) |
| [#48447](https://github.com/anomalyco/opencode/issues/48447) | **AI repeats same response after task completion** | Duplicate user-message delivery causes redundant AI replies; degrades trust in session history. | 👍 0 • 4 comments • Open |
| [#49271](https://github.com/anomalyco/opencode/issues/49271) | **External-skill discovery `skills/**/SKILL.md` fully recursive, no depth limit** | Vendored nested skill copies (e.g., `gstack`) cause runaway filesystem scans on every launch. | 👍 0 • 2 comments • Open |
| [#48468](https://github.com/anomalyco/opencode/issues/48468) | **Windows PowerShell `Remove-Item -Force` wiped `.git/objects` during “clean junk files”** | Catastrophic data loss; model executed destructive command without confirmation. | 👍 0 • 2 comments • Open |
| [#49262](https://github.com/anomalyco/opencode/issues/49262) | **Android/Bionic: Bun 1.4.1 `splitting:true` causes `a.name` crash** | Platform-specific blocker for mobile/embedded deployments; same root as #48372. | 👍 0 • 1 comment • Open |
| [#44748](https://github.com/anomalyco/opencode/issues/44748) | **Preemption primitives for sub-agent orchestration** | Production pipeline needs `max-turns-per-dispatch`, cancellation, per-tool-call streaming. | 👍 0 • 1 comment • Open |
| [#45483](https://github.com/anomalyco/opencode/issues/45483) | **No usage/cost shown for DeepInfra (OpenAI-compatible) provider** | Observability gap vs. Anthropic/DeepSeek/OpenRouter; blocks cost-aware workflows. | 👍 0 • 1 comment • Open |
| [#49260](https://github.com/anomalyco/opencode/issues/49260) | **Web Review tab stuck loading when session dir not a git repo** | Empty-state handling missing; UI spins forever on multi-repo workspaces. | 👍 0 • 1 comment • Open |
| [#49267](https://github.com/anomalyco/opencode/issues/49267) | **Workspace diff passes `--unified=2147483647`, re-emitting file per hunk (>1 GB patch, ~11 s CPU/event)** | Diff algorithm bug causes massive output and CPU spikes on filesystem events. | 👍 0 • 0 comments • Open |

---

## Key PR Progress (10 Important)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#49235](https://github.com/anomalyco/opencode/pull/49235) | **feat(core): expose `fetch` to code mode scripts** | Scripts via `execute` tool can now call `fetch` directly; built on host-function extensions. | Enables HTTP calls from user scripts without custom tools. |
| [#48117](https://github.com/anomalyco/opencode/pull/48117) | **fix(provider): resolve OpenRouter route-modifier suffixes (`:floor`, `:nitro`, `:exacto`, `:online`)** | Parses and applies OpenRouter routing modifiers from model IDs. | Restores correct model routing for OpenRouter users. |
| [#44457](https://github.com/anomalyco/opencode/pull/44457) | **feat: run setup scripts for new worktrees** | Persists workspace setup commands; runs them automatically in each new worktree. | Streamlines monorepo onboarding and CI bootstrap. |
| [#49242](https://github.com/anomalyco/opencode/pull/49242) | **refactor(codemode): before/after hooks for tool & extension calls** | Replaces `onToolCallStart/End` with generic host-call hooks; supports deny/transform. | Foundation for middleware, logging, policy enforcement. |
| [#49259](https://github.com/anomalyco/opencode/pull/49259) | **feat(tui): open execute call details dialog on click** | Clicking an `execute` row shows source + output in a dialog; preserves child-call expand/collapse. | Major TUI debugging UX improvement. |
| [#49241](https://github.com/anomalyco/opencode/pull/49241) | **fix(core): keep configured MCP URL as OAuth resource** | Aligns interactive login and refresh `resource` params; fixes `invalid_target` on strict auth servers. | Unblocks MCP auth for enterprise IdPs. |
| [#49273](https://github.com/anomalyco/opencode/pull/49273) | **fix(app): authenticate MCP from summary** | Starts OAuth flow when enabled MCP reports `needs_auth`; adds regression test. | Reduces manual reconnect friction. |
| [#49272](https://github.com/anomalyco/opencode/pull/49272) | **feat(app): render Markdown files in file view** | Opens `.md` files with existing renderer; non-Markdown stays in source viewer. | Closes long-standing UI gap for doc-heavy workflows. |
| [#49195](https://github.com/anomalyco/opencode/pull/49195) | **fix(ai): classify gateway account limits as quota; keep 4xx non-retryable** | Adds `402` + Zen-specific codes to `QUOTA_CODES`; stops retrying budget/limit errors. | Prevents wasteful retries on hard quota exhaustion. |
| [#49229](https://github.com/anomalyco/opencode/pull/49229) | **fix(core): default provider header/chunk timeouts to 5 min** | Sets 300 s header wait and 300 s inter-chunk inactivity timeout (resets on data). | Improves resilience for slow/streaming providers. |

---

## Feature Request Trends
1. **Plugin/Extensibility Layer** — Instant TUI command hooks (#5305), before/after host-call hooks (#49242), and MCP authentication flow integration (#49273) show a push to make OpenCode a programmable platform, not just a client.
2. **Sub-Agent Orchestration Controls** — Preemption primitives (`max-turns`, cancellation, streaming) (#44748) and headless pipeline reliability (#37548) reflect production adoption needing deterministic agent management.
3. **Provider/Model Observability** — Usage/cost tracking for OpenAI-compatible providers (#45483), route-modifier support (#48117), and quota classification (#49195) indicate maturing multi-provider workflows.
4. **TUI/Desktop Parity & Polish** — Markdown rendering (#49272), execute-call drill-down (#49259), Review tab empty states (#49260), and session-indicator persistence (#49270) target daily-driver usability.
5. **Workspace & Git Hygiene** — Worktree setup scripts (#44457), non-git Review handling (#49260), and diff algorithm sanity (#49267) address multi-repo and large-repo friction.

---

## Developer Pain Points
- **Stability Regressions in v1.18.x** — `SystemPrompt.environment` crash (#48372, #49262), duplicate message delivery (#48447), and headless mid-pipeline exits (#37548) are eroding confidence in the current stable channel.
- **Destructive Tool Execution** — Windows PowerShell `Remove-Item -Force` wiping `.git` (#48468) highlights insufficient guardrails for shell commands; echoes earlier request to block command types (#36899).
- **Platform-Specific Breakage** — Android/Bun (`splitting:true` crash #49262), macOS Bun LAN `ECONNREFUSED` (#37432), WSL live-update failure (#49269), and Windows `ctrl+p` regression (#37165) fragment the cross-platform promise.
- **Performance Footguns** — Recursive skill glob with no depth limit (#49271) and unbounded `--unified` diff (#49267) cause OOM/CPU spikes on real-world repos.
- **MCP & Auth Fragility** — Config not read (#37532), OAuth resource mismatch (#49241), and summary-driven auth (#49273) show MCP integration still rough around the edges.
- **Observability Gaps** — Missing usage/cost for key providers (#45483), no auto-reinject post-compaction (#37551), and silent session termination (#37548) make cost and context management opaque.

--- 

*Generated from github.com/anomalyco/opencode data as of 2026-09-16. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-09-16

## Today's Highlights
No new releases in the last 24 hours. The issue tracker shows active work on **context budget overflow bugs** (#8061, #9602), **provider retry logic** (#9571), and **large-transcript rendering performance** (#9549). Meanwhile, PRs are delivering **extension API hardening** (event unsubscription, hook type exports), a new **OrcaRouter provider**, and a **`/forget` command** for context rollback.

---

## Releases
*No releases published in the last 24 hours.*

---

## Hot Issues (Top 10 by Impact & Discussion)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#8061](https://github.com/earendil-works/pi/issues/8061) | Context budget ignores `maxTokens` output reservation; overflow recovery fails | Core token-accounting bug causing provider rejections even at 78% input usage; recovery loop also fails | 9 comments, 👍2 — **in progress**, high severity |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | Parallel startup reports “No API key found” for ~48s with expired OAuth creds | Multi-process setups hit misleading auth errors pointing at the wrong provider | 8 comments — **in progress**, deterministic repro provided |
| [#9457](https://github.com/earendil-works/pi/issues/9457) | Bedrock Converse: 1h cache writes billed at 5m rate | Cost calculation error on long-TTL cache writes; affects billing accuracy | 6 comments, 👍4 — **closed (last-read)** |
| [#9571](https://github.com/earendil-works/pi/issues/9571) | Malformed `Retry-After` HTTP-date causes immediate retry (NaN delay) | Tight retry loops on 429 responses; can trigger rate-limit escalation | 5 comments — **open**, clear code location identified |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | Large transcripts re-render every frame; resize re-emits whole transcript (1 core saturated) | TUI performance collapse on 2-core machines with big sessions | 4 comments — **open (fullscreen)**, perf profiling attached |
| [#9165](https://github.com/earendil-works/pi/issues/9165) | Claude Opus 5 via OpenRouter rejects per-message `output_config` | Provider-specific parameter incompatibility; works via native Anthropic provider | 6 comments — **closed (bug)**, workaround documented |
| [#9566](https://github.com/earendil-works/pi/issues/9566) | Context size defaults to 128k despite real size in `models.json` | Model metadata overridden by fallback; affects cost & token limits | 3 comments, 👍1 — **closed (no-action)** |
| [#9577](https://github.com/earendil-works/pi/issues/9577) | Signal-killed bash tools resolve successfully with partial output | Caller cannot distinguish SIGKILL/SIGTERM from clean exit | 3 comments — **open**, related to #8992/#8882 |
| [#8791](https://github.com/earendil-works/pi/issues/8791) | Expose `ModelRuntime` to extensions | Enables isolated in-process agent sessions for extension authors | 3 comments, 👍5 — **open**, clear API request |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | Compaction overflows by including thinking messages omitted from earlier requests | Local Qwen3.8 hits 16k output limit while thinking; compaction re-includes hidden tokens | 3 comments — **open**, edge case in summarization |

---

## Key PR Progress (10 Notable Changes)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#9630](https://github.com/earendil-works/pi/pull/9630) | Feature | **Coding agent: event handler unsubscribe** — fixes #8967; allows extensions to clean up listeners |
| [#9620](https://github.com/earendil-works/pi/pull/9620) | Feature | **Add OrcaRouter as first-class provider** — API key + OAuth 2.0 PKCE sign-in, live capability-filtered model list |
| [#9615](https://github.com/earendil-works/pi/pull/9615) | Feature | **Coding agent: `/forget` command** — soft/hard rollback of last N user turns from model context & session file |
| [#9548](https://github.com/earendil-works/pi/pull/9548) | Feature | **Mid-conversation system messages** — system prompt/tool changes become part of transcript; enables resume/branch fidelity |
| [#6881](https://github.com/earendil-works/pi/pull/6881) | Feature | **Use provider-reported cost** — reads `usage.cost` / `cost_details.upstream_inference_cost` from responses; falls back to catalog rates |
| [#9642](https://github.com/earendil-works/pi/pull/9642) | Fix | **Export extension event hook types** — `MessageEndEventResult`, `ThinkingLevelSelectEvent`, `ModelSelectSource` now public |
| [#9619](https://github.com/earendil-works/pi/pull/9619) | Fix | **Preserve root schema combinators for Anthropic** — stops dropping `anyOf`/`oneOf`/`allOf` at tool schema root |
| [#9483](https://github.com/earendil-works/pi/pull/9483) | Fix | **Tool `cwd` resolution opt-in via `customCwd`** — restores backwards compatibility after #8627 |
| [#8635](https://github.com/earendil-works/pi/pull/8635) | Fix | **Preserve aborted stop reason during lazy setup** — passes abort signal through stream wrappers; adds regression test |
| [#9648](https://github.com/earendil-works/pi/pull/9648) | Fix | **Baseten: send session affinity headers from `sessionId`** — improves routing for stateful endpoints |

---

## Feature Request Trends
1. **Extension API maturity** — Multiple asks for atomic idle submission (#9632), loaded-extension introspection (#9650), conflict handling parity (#9649), and system prompt append (#9434).  
2. **Context & compaction control** — `/forget` (#9615), compaction thinking-block handling (#9652), summary output caps (#9512), and transcript window opt-out (#9651).  
3. **Provider fidelity & cost accuracy** — Provider-reported cost usage (#6881), Bedrock cache billing (#9457), Azure Chat Completions (#9645), OpenRouter model pin freshness (#9485).  
4. **TUI/UX polish** — Tool call border styles (#9598), global display-only tool presentation overrides (#9641/#9638), LaTeX rendering consistency (#9564), clipboard reliability (#9618).  
5. **Session metadata correctness** — Timestamp timezone honesty (#9609), project-level global resource toggle (#6517).

---

## Developer Pain Points
- **Token budget accounting** — Output reservations ignored, compaction re-includes hidden thinking blocks, recovery loops fail (#8061, #9602, #9512).  
- **Provider integration fragility** — OpenRouter parameter mismatches (#9165), Bedrock cost miscalculation (#9457), Azure missing Chat Completions (#9645), Baseten affinity headers (#9648), Cloudflare 520 not retryable (#9627).  
- **Extension ecosystem friction** — Tool name conflicts fatal-exit process (#9649), no visibility into load status (#9650), stale event handlers (#9611), missing `ModelRuntime` access (#8791).  
- **Performance at scale** — Fullscreen transcript re-renders every frame on 2-core machines (#9549); JSONL timestamp ambiguity (#9609).  
- **Error handling gaps** — Malformed `Retry-After` causes spin loops (#9571), killed bash tools report success (#9577), provider errors lack structured codes in `--mode json` (#9644).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-09-16

## 1. Today's Highlights
The **cua-driver-rs v0.20.9** release delivers prebuilt, codesigned macOS binaries plus Linux/Windows artifacts for the Qwen CUA Driver, unblocking desktop automation workflows. In the issue queue, a **P1 VS Code Remote regression** (#11976) blocks webview↔daemon connectivity in Dev Containers due to missing `asExternalUri` port forwarding — a critical remote-development blocker. Meanwhile, the **autofix bot** surfaced a main-branch CI failure (#11984) and continues to drive self-healing CI improvements (#11974, #11588).

## 2. Releases
### cua-driver-rs v0.20.9 — Qwen CUA Driver Prebuilt Binaries
- **macOS**: Codesigned + notarized universal binary + `QwenCuaDriver.app`
- **Linux**: Unsigned x86_64/arm64 (glibc ≥2.31)
- **Windows**: Unsigned UIAccess worker + native SDK payload (x86_64/arm64)
- Vendored under `packages/cua-driver` for CLI/daemon consumption  
🔗 [Release](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.9)

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#11976](https://github.com/QwenLM/qwen-code/issues/11976) | **P1** Webview fails to reach workspace daemon in VS Code Remote (Container) — dynamic port binding without `asExternalUri` | Blocks all Dev Container / remote SSH users; webview cannot connect to local daemon port. Root cause: VS Code requires `asExternalUri` for port forwarding in remote contexts. | 5 comments, opened today, `roadmap/ide-integration` |
| [#11858](https://github.com/QwenLM/qwen-code/issues/11858) | **P2** Harden `useBoxMetrics` loop guard — budget is per-instance but React's cap is per-root | Follow-up from PR #11835 review finding; prevents potential infinite loop in Ink rendering path. Not yet user-facing but architectural hardening. | 6 comments, `status/ready-for-human` |
| [#11987](https://github.com/QwenLM/qwen-code/issues/11987) | **P2** Web Shell: first-prompt attach aborted by controlled session switch leaves new session on "Connection lost" | Single-provider session-switching contract broken; new session becomes unusable after lazy-attach race. Affects embedded Web Shell consumers. | 3 comments, `scope/web-shell` |
| [#10700](https://github.com/QwenLM/qwen-code/issues/10700) | **P2** Orphaned tool-call closing tags (`</invoke>`, `</parameter>`) leak as plain text | XML recovery only matches balanced pairs; model-emitted closing tags without openers pollute output. Core content-generation hygiene. | 3 comments, `scope/content-generation` |
| [#10692](https://github.com/QwenLM/qwen-code/issues/10692) | **P2** `tool_call`-dialect XML leaks as plain text — fallback misses `<tool_call>` dialect (qwen-code's own taught format) | The very dialect the system prompt teaches is unrecovered; tool calls render as garbage text. High-impact UX bug. | 3 comments, `scope/content-generation` |
| [#11964](https://github.com/QwenLM/qwen-code/issues/11964) | **P3** Feature request: extend autofix's "reproduce-before-fix" discipline to review findings | Process improvement: apply the same verification rigor to review findings as to bug fixes. Aligns with autofix skill philosophy. | 4 comments, `need-discussion` |
| [#11985](https://github.com/QwenLM/qwen-code/issues/11985) | **P3** Feat: carry sender identity in DingTalk direct messages (nick + stable staff ID) | Parity with group messages; enables personalized agent responses in enterprise DingTalk integration. | 3 comments, `status/ready-for-human`, `need-discussion` |
| [#11914](https://github.com/QwenLM/qwen-code/issues/11914) | **Closed** Web Shell reports completed Goal turns as interrupted after reload | State mismatch: persisted Goal = completed, but recovery banner shows "interrupted — Continue". Fixed in `status/in-progress`. | 3 comments, `scope/session-management` |
| [#11984](https://github.com/QwenLM/qwen-code/issues/11984) | Main CI failed: E2E Tests on `1a980b5` — Linux sandbox:docker shard 1/1 | Automated CI failure tracking; blocks merge until green. Self-hosted runner diagnostics needed. | 2 comments, `autofix/in-progress` |
| [#11598](https://github.com/QwenLM/qwen-code/issues/11598) | Deferred review findings from PR #11588: widen review-salvage replay timeline margin past contention stall | CI flake fix follow-up; bot-deferred items awaiting human triage. Shows autofix loop maturity. | 2 comments, `autofix-deferred` |

## 4. Key PR Progress (10 Important)

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#11548](https://github.com/QwenLM/qwen-code/pull/11548) | `feat(web-shell): connect to a selected remote daemon` | Feature | Standalone Web Shell can now target an explicit remote daemon (address + bearer token), enabling multi-device/remote workflows. |
| [#11916](https://github.com/QwenLM/qwen-code/pull/11916) | `refactor(serve): separate ACP control plane and channel harness` | Refactor | Decouples session policy (admission, FIFO, promotion, worktree) from physical ACP channel supervision — cleaner testability & extensibility. |
| [#11538](https://github.com/QwenLM/qwen-code/pull/11538) | `feat: select the OpenAI wire API per model` | Feature | Per-model `wireApi: "chat-completions" | "responses"` config; supports both OpenAI APIs under single provider group. |
| [#11982](https://github.com/QwenLM/qwen-code/pull/11982) | `feat(web-shell): preview files from expanded tool details` | Feature | Adds "View file / View image" action to expanded read/edit/write/image tool outputs — opens in right panel, preserves diff/history. |
| [#11986](https://github.com/QwenLM/qwen-code/pull/11986) | `fix(web-shell): keep the recap below a turn's outputs and dedupe it` | Fix | Unifies manual `/recap` and automatic tab-return recap rendering; eliminates duplicate/ misplaced summary lines. |
| [#11961](https://github.com/QwenLM/qwen-code/pull/11961) | `fix(web-shell): honor ui.theme and general.language in standalone Web Shell` | Fix | Standalone entry (`qwen serve` / Desktop window) now respects `settings.json` theme/language when no URL override or local choice exists. |
| [#11975](https://github.com/QwenLM/qwen-code/pull/11975) | `feat(web-shell): support host settings item exclusions` | Feature | Hosts can hide specific settings items via curated stable ID list while retaining form structure — enables branded/constrained embeddings. |
| [#11821](https://github.com/QwenLM/qwen-code/pull/11821) | `fix(core): treat word-initial # as comment when splitting shell commands` | Fix | Shell splitter now recognizes `#` comments (adds comment state to parser); prevents `#`-prefixed args from being misparsed as commands. |
| [#11974](https://github.com/QwenLM/qwen-code/pull/11974) | `fix(ci): gate the Linux E2E legs on a disk floor` | CI | Adds 2 GiB free-space pre-check to pool-routed Linux E2E job (mirrors existing `ci.yml` guard) — prevents OOM/no-space flakes. |
| [#11154](https://github.com/QwenLM/qwen-code/pull/11154) | `fix(cli): keep full-turn tool cancellation out of the error path` | Fix | React full-turn scheduler now classifies aborted scheduling as `status: 'cancelled'` (not failure) — cleaner error handling & telemetry. |

## 5. Feature Request Trends
1. **Remote / Distributed Development** — #11976 (VS Code Remote), #11548 (Web Shell → remote daemon), #11916 (ACP control plane separation) all point to first-class remote/containerized workflows.
2. **Embedding & Hosting Control** — #11975 (settings exclusions), #11961 (theme/language passthrough), #11982 (file preview from tool details) show demand for customizable Web Shell embeddings.
3. **Multi-Protocol Model Support** — #11538 (per-model OpenAI wire API), #9952 (configurable Mem0 providers) indicate push for provider-agnostic, versioned integration contracts.
4. **Enterprise Chat Integrations** — #11985 (DingTalk sender identity) extends the pattern of carrying platform metadata into agent context.
5. **Process Rigor via Autofix** — #11964 requests applying autofix's "reproduce-before-fix" rule to review findings, reflecting community desire for automated quality gates.

## 6. Developer Pain Points
| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **VS Code Remote / Dev Container breakage** | #11976 (P1, 5 comments, opened today) — webview↔daemon port forwarding fails without `asExternalUri` | Critical, single but high-impact |
| **XML tool-call leakage in model output** | #10700, #10692 (both P2, 3 comments each, 2 weeks open) — orphaned closing tags & missing `<tool_call>` dialect recovery | Recurring, core content pipeline |
| **Web Shell session-state bugs** | #11987 (session switch leaves "Connection lost"), #11914 (completed Goal shown as interrupted), #11986 (recap dedup) | Cluster of 3 in 24h |
| **CI flakiness on self-hosted runners** | #11984 (E2E failure), #11974 (disk floor gate), #11588/#11598 (review-salvage timeline), #11134 (macOS E2E retry) | Systematic, bot-tracked |
| **Shell command parsing edge cases** | #11821 (`#` comment handling), plus historical splitting bugs | Foundational, affects permission rules |

---

*Digest generated from GitHub data as of 2026-09-16. Links point to live issues/PRs on github.com/QwenLM/qwen-code.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-09-16

## 1. Today's Highlights

The project shipped a wave of correctness and performance fixes today: session-resumption bugs in the ACP server and runtime bridge were resolved, the streaming markdown renderer gained a perf gate with deterministic budgets, and the auto-model router is being rearchitected toward sticky, receipt-backed bindings. Meanwhile, the "Shoreline" TUI redesign has been rebased onto `main` as a separate PR, signaling an imminent UI overhaul.

---

## 2. Releases

No new releases in the last 24 hours.

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#6225](https://github.com/Hmbown/Codewhale/issues/6225) | **Unable to resume session from new process** — "session belongs to another Runtime host" | Blocks the core `/resume` workflow; users lose work when restarting the TUI. | 6 comments, active investigation |
| [#6236](https://github.com/Hmbown/Codewhale/issues/6236) | **`request_user_input` blocks forever in headless `exec`** | Headless CI runs hang silently with no timeout or error — critical for automation. | 2 comments, labeled `bug(exec)` |
| [#6244](https://github.com/Hmbown/Codewhale/issues/6244) | **Fleet role selector ambiguity blocks agent spawn** (production failure `cw:768b024a`) | Real-world failure: model called `agent start` without role, got ambiguous-match error. | 0 comments, but marked production failure |
| [#6242](https://github.com/Hmbown/Codewhale/issues/6242) | **`workspace_declares_exactly_one_turn_loop` test passes despite two turn loops** | Architectural guard is broken — matches function name, not property. | 0 comments, foundational correctness issue |
| [#6241](https://github.com/Hmbown/Codewhale/issues/6241) | **Dead-code ratchet blind to `expect(dead_code)`** | Budget can drop without suppression count falling — undermines dead-code enforcement. | 0 comments, tooling gap |
| [#6193](https://github.com/Hmbown/Codewhale/issues/6193) | **No runtime performance gate exists** | Zero runtime benchmarks, budgets, or CI gates — perf regressions go undetected. | 1 comment, now partially addressed by #6259 |
| [#6252](https://github.com/Hmbown/Codewhale/issues/6252) | **Sticky auto route binding — plan once per session, not per turn** | Current per-turn re-resolution causes provider hopping and declared-preference thrash. | 0 comments, design-tracking issue |
| [#6263](https://github.com/Hmbown/Codewhale/issues/6263) | **In-session secret entry the model never sees** | UX gap: users must leave TUI to run `codewhale auth set` mid-session. | 0 comments, filed today |
| [#6032](https://github.com/Hmbown/Codewhale/issues/6032) | **Model capability decided by hardcoded prefixes, not catalog** | Reasoning capability falls back to brittle string matching — now fixed in #6248. | 1 comment, closed via PR |
| [#6237](https://github.com/Hmbown/Codewhale/issues/6237) | **Ctrl+C should clear composer before arming exit** | Muscle-memory mismatch vs. Claude Code / other agents; UX consistency request. | 1 comment, UX polish |

---

## 4. Key PR Progress (10 Important)

| # | PR | Summary | Impact |
|---|----|---------|--------|
| [#6262](https://github.com/Hmbown/Codewhale/pull/6262) | **Fix: keep stdio thread map across runtime bridge restarts** (#6246) | Prevents config updates from orphaning live stdio threads. | Session stability |
| [#6260](https://github.com/Hmbown/Codewhale/pull/6260) | **Fix ACP: make prefix reload of tracked session idempotent** (#6245) | Stops duplicate `insertion_order` entries that could evict live sessions. | ACP correctness |
| [#6251](https://github.com/Hmbown/Codewhale/pull/6251) | **Scope session patch grant to the file it approved** (#6247) | Fixes over-broad "approve for session" that granted blanket approval via `"no_files"` hash. | Security/approval integrity |
| [#6259](https://github.com/Hmbown/Codewhale/pull/6259) | **Test: streaming reveal perf gate — deterministic integer budgets** (#6193) | First runtime perf gate; dependency-free, drives real `StreamDisplay` path. | Perf observability |
| [#6249](https://github.com/Hmbown/Codewhale/pull/6249) | **Fix TUI: streaming render cost & committed-LaTeX staleness** (#6196) | O(n)→O(1) per-append; fixes stale LaTeX rendering during streaming. | Render performance |
| [#6257](https://github.com/Hmbown/Codewhale/pull/6257) | **Fix: bound persistence & lifecycle-outbox queues with latest-wins** (#6212) | Eliminates unbounded memory growth under slow consumers (R5, R6). | Memory stability |
| [#6248](https://github.com/Hmbown/Codewhale/pull/6248) | **Fix models: source reasoning capability from bundled Models.dev catalog** (#6032) | Replaces hardcoded prefix list with catalog lookup. | Maintainability |
| [#6238](https://github.com/Hmbown/Codewhale/pull/6238) | **Edit safety: parse-gate file edits before write lands** | Validates Rust (`syn`), TOML/JSON, and normalizes `rustfmt` — closes #6204/6/5. | Edit correctness |
| [#6239](https://github.com/Hmbown/Codewhale/pull/6239) | **Lost work: editor handoff, steer ordering, `/models` error** | Bundles three v0.9.14 "user loses something" fixes (#6165, #6190, #6173). | UX reliability |
| [#6258](https://github.com/Hmbown/Codewhale/pull/6258) | **Shoreline: TUI redesign rebased onto main** | Major UI overhaul; becomes fresh-install default. No hitchhiker commits. | Next-gen UI |

---

## 5. Feature Request Trends

| Direction | Evidence |
|-----------|----------|
| **Sticky, observable model routing** | #6252 (sticky binding), #6253 (receipts), #6254 (scenario-aware), #6256 (learned routing) — all filed today |
| **In-session credential management** | #6263 (secret entry without leaving TUI), #6179 (GPUI credential metadata) |
| **Fleet / multi-agent ergonomics** | #6015 (adaptive anti-stall, wider shell grammar), #6244 (role disambiguation), #6055 (rate-limit-adaptive launch) |
| **Runtime performance observability** | #6193 (perf gate), #6196 (streaming render cost), #6213 (MCP/template caching), #6208 (per-call rebuild elimination) |
| **ACP / headless robustness** | #6225 (resume), #6236 (headless input), #6174 (session ID mismatch), #6245/6260 (idempotent load) |

---

## 6. Developer Pain Points

| Pain Point | Frequency / Severity |
|------------|----------------------|
| **Session resumption broken across process boundaries** | #6225 (6 comments), #6174, #6245 — core workflow failure |
| **Headless `exec` hangs silently on `request_user_input`** | #6236 — blocks CI/automation with no timeout |
| **Editor handoff steals keystrokes** | #6165 (fixed in #6239) — `/hooks edit` splits input between editor & TUI |
| **Steered input appears out of order in transcript** | #6190 (fixed in #6239) — timeline confusion |
| **`/models` command errors with unactionable message** | #6173 (fixed in #6239) — Gemini provider |
| **Auto-model router thrashes providers per turn** | #6252 — no sticky binding, declared preferences ignored |
| **No runtime perf gate → regressions undetected** | #6193 — only build perf measured |
| **Dead-code budget tooling misses `expect(dead_code)`** | #6241 — false confidence in suppression count |
| **Architectural test (`single_turn_loop`) validates name, not property** | #6242 — two turn loops exist, test passes |
| **Fleet agent spawn fails on ambiguous role** | #6244 — production incident, unclear UX for model |

---

*Digest generated from GitHub data (issues/PRs updated 2026-09-15 → 2026-09-16). All links point to `Hmbown/Codewhale` (the DeepSeek TUI repository).*

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*