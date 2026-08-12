# AI CLI Tools Community Digest 2026-08-12

> Generated: 2026-08-12 02:30 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-12)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **rapid iteration on reliability and platform parity** rather than headline features. All major tools shipped fixes in the last 24 hours, but stable releases are scarce—most updates are alpha/nightly/preview builds. Windows stability has emerged as the **cross-cutting crisis**, affecting OpenAI Codex (9/10 top issues), GitHub Copilot CLI (plugin install failures), and Claude Code (Git Bash detection, MSIX GPU conflicts). Meanwhile, **multi-session orchestration** and **MCP/tool execution hardening** are the dominant architectural battlegrounds, with Qwen Code shipping cross-session messaging, OpenCode adding plugin failure surfaces, and DeepSeek TUI completing ACP tool execution. Security hardening is continuous: Gemini CLI patched 3 CVEs in dependencies, Pi fixed SSRF in web-fetch, and Copilot CLI migrated away from `pull_request_target`.

---

## 2. Activity Comparison

| Tool | Issues Updated (24h) | PRs Updated (24h) | Release Status | Top Community Signal |
|------|---------------------|-------------------|----------------|----------------------|
| **Claude Code** | 48 | 9 | v2.1.228 stable | Cowork VM failure (#27801: 72 comments, 41 👍) |
| **OpenAI Codex** | ~50+ | 18 merged | 3× alpha (0.148.0) | Windows freeze (#20214: 96 comments, 81 👍) |
| **Gemini CLI** | ~20+ | 10+ high-impact | v0.56.0-nightly/preview + v0.55.1 stable | 429 quota errors, shell hangs |
| **GitHub Copilot CLI** | ~15+ | 3 | None (v1.0.79 regressions) | `/config model` wipes settings, Windows plugin installs fail |
| **Kimi Code CLI** | ~5+ | 7 closed, 1 open | None | Memory System (#1283: 34 comments) |
| **OpenCode** | ~20+ | 20+ | None (v2 TUI iterating) | Infinite compaction loop, Linux ALSA spam |
| **Pi** | 26 | 49 | None | Mac high CPU (#7730: 8 👍), Copilot 429 at scale |
| **Qwen Code** | ~10+ | 10+ high-impact | v0.21.11-preview + stable v0.21.10 | Cross-session messaging (multiple PRs merged) |
| **DeepSeek TUI** | ~10+ | 6 open | None (v0.9.5 has blocking regression) | Auto-Review blocks all destructive tools (#5323) |
| **Grok Build** | 0 | 0 | No recent activity | — |

*Note: Issue/PR counts derived from digest summaries; exact numbers vary by tool reporting granularity.*

---

## 3. Shared Feature Directions

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Windows Reliability** | OpenAI Codex, GitHub Copilot CLI, Claude Code, DeepSeek TUI | Native messaging host registration, file-locking workarounds (VS Code watchers), Git Bash/MSIX parity, ARM64 support |
| **Multi-Session / Agent Orchestration** | Qwen Code, OpenCode, Claude Code, Kimi Code | Cross-session messaging (Qwen), session coordination primitives (Claude #76727), Memory System (Kimi #1283), daemon cwd isolation (OpenCode #41905) |
| **MCP / Tool Execution Hardening** | Claude Code, OpenAI Codex, Gemini CLI, DeepSeek TUI, OpenCode | stdio dispatch fixes (Claude #79986), OAuth registration fallback (Codex #38089), local model routing (Gemini #28681), ACP tool execution (DeepSeek #5225), plugin failure surfaces (OpenCode #41923) |
| **Session Continuity & State** | Claude Code, OpenCode, Kimi Code, Pi, Qwen Code | Transcript recovery (Claude #85976), compaction loop fixes (OpenCode #27924), persistent memory (Kimi #1283), session rotation bounds (Qwen #8927), Intercom handoff (Pi #7968) |
| **Local / Self-Hosted Model Support** | Gemini CLI, Qwen Code, OpenCode, Pi | OpenAI-compatible endpoints (Gemini #28681), DashScope native (Qwen #8714), Cloudflare Workers runtime (OpenCode #41918), Cloudflare AI Gateway (Pi #7901) |
| **Cost / Token Observability** | OpenCode, Pi, Qwen Code, DeepSeek TUI | `/usage` command (OpenCode #41915), streaming usage preservation (Pi #7911), models.dev cost tiers (Pi #7981), pricing 503 fixes (DeepSeek #5241) |
| **Security Hardening** | All tools | CVE dependency upgrades (Gemini 3×), SSRF fixes (Pi, Gemini), `pull_request_target` migration (Copilot), assertion-to-exception conversions (Kimi), inbound message gating (Qwen) |

---

## 4. Differentiation Analysis

| Tool | Primary Focus | Target User | Technical Approach |
|------|---------------|-------------|-------------------|
| **Claude Code** | Enterprise collaboration (Cowork), policy/governance, Windows parity | Teams, orgs using Anthropic models | Proprietary VM service, MSIX desktop, strict delegation policies, billing integration |
| **OpenAI Codex** | Desktop app + Computer Use/Browser automation, Windows-first | OpenAI subscribers, browser automation users | Rust TUI, bundled Chrome plugin, native messaging host, Store distribution |
| **Gemini CLI** | Evaluation infrastructure, local model routing, security hardening | Google Cloud/Vertex users, eval-driven teams | TypeScript/Node, behavioral evals (76 tests), SGLang/vLLM/Ollama support, CVE-first deps |
| **GitHub Copilot CLI** | Enterprise governance, VS Code ecosystem integration, skill system | GitHub Enterprise, Copilot subscribers | Node/TypeScript, plugin marketplace, sandbox policy enforcement, `.github/copilot` conventions |
| **Kimi Code CLI** | Long-horizon memory, reasoning transparency, Windows polish | Individual developers, Moonshot ecosystem | Python/ACP, `.kimimemory` files, configurable thinking effort, PyInstaller packaging |
| **OpenCode** | v2 TUI polish, Claude Code parity, plugin/runtime extensibility | Power users, Cloudflare Workers developers | Rust TUI, daemon architecture, workerd runtime, slash-command parity push |
| **Pi** | Multi-provider aggregation, streaming fidelity, collaboration primitives | Polyglot model users, team workflows | TypeScript, provider-agnostic core, Intercom session messaging, Mermaid/HTML export |
| **Qwen Code** | Multi-session orchestration, Web Shell parity, native DashScope | Alibaba Cloud/ModelStudio users, web-first workflows | Go/TypeScript hybrid, Unix socket session registry, live-host sandbox, Computer Use (CUA) |
| **DeepSeek TUI** | Autonomous control primitives, multi-agent hygiene, terminal ergonomics | DeepSeek model users, terminal power users | Rust, ACP server, Fleet routing, PiP window, OrcaRouter gateway |

---

## 5. Community Momentum & Maturity

| Tier | Tools | Indicators |
|------|-------|------------|
| **High Momentum / Rapid Iteration** | **OpenCode, Qwen Code, Pi** | 20+ PRs/day (OpenCode), cross-session messaging shipped in days (Qwen), 49 PRs/26 issues in 24h (Pi), active v2/v0.21 feature pushes |
| **High Maturity / Enterprise Focus** | **Claude Code, GitHub Copilot CLI, Gemini CLI** | Stable releases (Claude v2.1.228, Gemini v0.55.1), enterprise governance features, dedicated security programs (HackerOne, CVE patching), billing/subscription integration |
| **Active Development / Pre-Stable** | **OpenAI Codex, Kimi Code CLI, DeepSeek TUI** | Alpha-only releases (Codex), architectural refactors (Kimi assertion→exception, DeepSeek TUI crate decomposition), blocking regressions in current stable |
| **Low / No Recent Activity** | **Grok Build** | No issues/PRs/releases in 24h |

**Key Insight**: The ecosystem splits between **tools shipping user-facing features weekly** (OpenCode, Qwen, Pi) and **tools hardening enterprise-grade stables** (Claude, Copilot, Gemini). Codex sits awkwardly—high Windows issue volume but only alpha releases.

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Evidence | Strategic Implication |
|-------|----------|----------------------|
| **Windows is the new Linux** | 9/10 top Codex issues Windows-specific; Copilot CLI plugin installs fail 100% on Win11; Claude MSIX GPU breakage; DeepSeek flag parsing broken | Any tool targeting professional developers **must treat Windows as Tier 1**, not an afterthought. Store distribution, native messaging, and file-locking are baseline requirements. |
| **MCP → ACP → Custom Protocols** | Claude MCP gaps (#36024, #79986); Codex OAuth hardening (#38089); DeepSeek ACP tool execution (#5225); Qwen custom session registry | Protocol fragmentation is accelerating. Tools investing in **first-party protocol stacks** (Qwen session registry, OpenCode plugin hooks, Pi provider abstraction) gain control; those relying on MCP/stdin face dispatch regressions. |
| **Session = Process, not Conversation** | Qwen cross-session messaging; OpenCode daemon cwd leakage; Pi Intercom handoff; Kimi Memory System; Claude Cowork VMs | The mental model shifts from "chat history" to **distributed state machines**. Tools with durable session registries, rotation bounds, and inter-session messaging will win long-horizon automation. |
| **Local Model Routing is Table Stakes** | Gemini SGLang/vLLM/Ollama (#28681); Qwen DashScope native (#8714); Pi Cloudflare AI Gateway (#7901); OpenCode workerd runtime | Enterprise adoption requires **air-gapped / VPC / self-hosted model support**. Tools hardcoding single-provider endpoints (early Codex, early Claude) are being forced to abstract. |
| **Observability > Features** | OpenCode `/usage` demand; Pi streaming usage preservation; DeepSeek pricing 503s; Gemini quota mapping fixes | Teams **block on cost/token visibility** before adopting for production. Tools surfacing real-time usage in TUI (not just logs) reduce adoption friction. |
| **Security as Continuous Process, Not Checklist** | Gemini 3 CVEs in 24h; Pi SSRF fix; Copilot `pull_request_target` migration; Kimi assertion stripping; Qwen image vuln bumps | Dependency chains are too deep for periodic audits. **Automated CVE→PR pipelines and runtime allowlists** (Pi pnpm detection, Gemini `_DOC_EXTS` filter) are becoming standard. |

---

## Bottom Line for Developers

- **For Windows-first teams**: Wait for Codex/Copilot CLI Windows fixes to hit stable; evaluate OpenCode v2 or Qwen Code Web Shell in the interim.
- **For enterprise governance**: Claude Code and Copilot CLI lead on policy/billing/skill systems; Gemini CLI leads on eval-driven quality gates.
- **For local/self-hosted models**: Gemini CLI and Pi have the broadest provider abstraction; Qwen Code adds native DashScope; OpenCode enables Cloudflare Workers deployment.
- **For long-horizon autonomous agents**: Qwen Code (cross-session messaging), OpenCode (daemon + plugin runtime), and Kimi Code (Memory System) are investing in the right primitives—Claude Code's Cowork VMs remain unreliable.
- **For terminal ergonomics**: OpenCode v2 TUI and DeepSeek TUI (post-v0.9.5) push the envelope on PiP, clipboard fidelity, and compact token displays.

The ecosystem is **converging on a common architecture**: daemon-backed TUI + plugin/runtime abstraction + multi-session registry + provider-agnostic model routing. The differentiators are now **reliability at Windows scale**, **enterprise governance depth**, and **local-model openness**—not raw model access.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-12 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py 0% recall` | Fixes the evaluation pipeline that incorrectly reports 0% recall for all skill descriptions, breaking the description-optimization loop (`run_loop.py`, `improve_description.py`). Addresses Windows stream reading, trigger detection, and parallel workers. | Core infrastructure fix; 10+ independent reproductions of the bug (#556). Blocks skill quality iteration. | **OPEN** (Jun 10 → Jun 23) |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** `document-typography` | Prevents typographic defects in AI-generated documents: orphan/widow control, numbering alignment, consistent spacing. Triggers on any document generation task. | Addresses a universal pain point—users rarely request good typography but always need it. | **OPEN** (Mar 4 → Mar 13) |
| 3 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `self-audit` | Mechanical file-verification + four-dimension reasoning quality gate (correctness, completeness, security, style). Universal across stacks/models. | Novel "damage-severity priority" audit model; positions as a pre-delivery safety net. | **OPEN** (Jun 28 → Jul 2) |
| 4 | **[#723](https://github.com/anthropics/skills/pull/723)** `testing-patterns` | Comprehensive testing skill: Testing Trophy philosophy, AAA pattern, React Testing Library, contract testing, E2E, property-based, mutation testing, CI integration. | Broad coverage of modern test stack; strong candidate for default inclusion. | **OPEN** (Mar 22 → Apr 21) |
| 5 | **[#1302](https://github.com/anthropics/skills/pull/1302)** `color-expert` | Color science expertise: naming systems (ISCC-NBS, Munsell, XKCD, RAL), color spaces (OKLCH, OKLAB, CAM16), accessibility contrast, harmonies, device calibration. | Fills a specialized design/engineering gap; self-contained reference skill. | **OPEN** (Jun 10 → Jul 21) |
| 6 | **[#486](https://github.com/anthropics/skills/pull/486)** `odt` | OpenDocument (.odt/.ods) creation, template filling, parsing to HTML. Triggers on ODT/ODF/LibreOffice mentions. | Addresses open-standard document interoperability; pairs with existing docx/pdf skills. | **OPEN** (Mar 1 → Apr 14) |
| 7 | **[#1479](https://github.com/anthropics/skills/pull/1479)** `plan-file-hygiene` | Lifecycle management for planning artifacts (creation, update, archival, cleanup). Addresses accumulation of stale plan files. | Born from community-identified gap (#1417); practical workflow hygiene. | **OPEN** (Jul 25 → Jul 27) |
| 8 | **[#83](https://github.com/anthropics/skills/pull/83)** `skill-quality-analyzer` / `skill-security-analyzer` | Meta-skills for evaluating other skills across 5 dimensions (structure, examples, resources, security, maintainability) + security-specific checks (injection, secrets, permissions). | Enables skill governance at scale; recursive quality improvement. | **OPEN** (Nov 6 → Jan 7) |

---

## 2. Community Demand Trends — From Issues

| Trend | Evidence (Issues) | Signal Strength |
|-------|-------------------|-----------------|
| **Skill distribution & trust model** | [#492](https://github.com/anthropics/skills/issues/492) (43 comments, 2👍): Community skills masquerading under `anthropic/` namespace; [#189](https://github.com/anthropics/skills/issues/189) (6 comments, 9👍): Duplicate skills from `document-skills`/`example-skills` plugins | 🔴 Critical — security & UX |
| **Organizational skill sharing** | [#228](https://github.com/anthropics/skills/issues/228) (16 comments, 8👍): No org-wide library; manual file sharing via Slack/Teams | 🟠 High — workflow blocker |
| **Evaluation pipeline reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 comments, 7👍): `claude -p` never triggers skills (0% recall); [#1169](https://github.com/anthropics/skills/issues/1169) (3 comments): Recall=0% even for literal slash-command queries | 🔴 Critical — blocks skill iteration |
| **Windows compatibility** | [#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050), [#1298](https://github.com/anthropics/skills/pull/1298): Subprocess, encoding, pipe-reading failures on Windows | 🟠 High — platform parity |
| **Context-window efficiency** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 comments): `claude-api` skill injects ~156k tokens in one call; [#1329](https://github.com/anthropics/skills/issues/1329) (9 comments): `compact-memory` proposal for symbolic state compression | 🟡 Growing — scaling pressure |
| **Governance & safety skills** | [#412](https://github.com/anthropics/skills/issues/412) (closed): `agent-governance` proposal; [#1385](https://github.com/anthropics/skills/issues/1385) (4 comments): Three-gate reasoning quality pipeline | 🟡 Emerging — enterprise demand |
| **Platform integrations** | [#29](https://github.com/anthropics/skills/issues/29) (4 comments): Bedrock support; [#16](https://github.com/anthropics/skills/issues/16) (4 comments): Expose skills as MCPs; [#1175](https://github.com/anthropics/skills/issues/1175) (closed): SharePoint Online handling | 🟡 Niche but persistent |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land

| PR | Skill | Why It Has Momentum |
|----|-------|---------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fixes | Blocks all description optimization; 10+ reproductions; multiple contributors converging on same fix |
| **[#514](https://github.com/anthropics/skills/pull/514)** | `document-typography` | Universal need, zero-config trigger, high user-visible impact |
| **[#723](https://github.com/anthropics/skills/pull/723)** | `testing-patterns` | Comprehensive, well-scoped, aligns with "default skill set" expectations |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` | Directly addresses a filed issue (#1417); clear lifecycle model; recent activity |
| **[#1302](https://github.com/anthropics/skills/pull/1302)** | `color-expert` | Self-contained, no external deps, fills a concrete design/engineering gap |
| **[#486](https://github.com/anthropics/skills/pull/486)** | `odt` | Completes the document-format triad (docx/pdf/odt); open-standard focus |
| **[#83](https://github.com/anthropics/skills/pull/83)** | `skill-quality-analyzer` / `skill-security-analyzer` | Meta-tool for ecosystem health; enables automated skill review |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | `self-audit` | Novel quality-gate architecture; universal applicability; recent and active |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is for a trustworthy, evaluatable, and shareable skill ecosystem—fixing the broken evaluation pipeline (#1298/#556), securing the distribution namespace (#492), and enabling organizational sharing (#228) are prerequisites for any downstream skill innovation to scale.**

---

# Claude Code Community Digest — 2026-08-12

---

## 1. Today's Highlights

- **v2.1.228 released** with critical TUI stability fixes: resolves a rare layout error that froze interactive sessions, fixes Git Bash detection on Windows, and addresses a `/tui` revert issue.  
- **Cowork VM service failures (#27801)** remain the top community pain point (72 comments, 41 👍), blocking workspace startup even after reboots.  
- **MCP integration gaps** dominate feature requests: multi-account Gmail support (#36024, 77 👍) and broken stdio tool dispatch in Chat mode (#79986) signal growing friction as MCP adoption scales.

---

## 2. Releases

### v2.1.228
| Change | Impact |
|--------|--------|
| Fixed interactive sessions stopping redraw after rare internal layout error | Restores TUI reliability for long-running sessions |
| Fixed `git` / Git Bash not found on Windows when launched from parent folder of git install | Unblocks Windows developers using non-standard Git installations |
| Fixed `/tui` revert (details truncated) | Addresses TUI state regression |

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#27801](https://github.com/anthropics/claude-code/issues/27801) | **Cowork: "Failed to start Claude's workspace" — VM service not running, persists after reboot** | Core Cowork feature broken; blocks team collaboration workflows entirely | 72 comments, 41 👍 |
| [#36024](https://github.com/anthropics/claude-code/issues/36024) | **Support multiple Gmail accounts in MCP integration** | High-demand MCP enhancement; users juggle personal + work Google Workspace accounts | 25 comments, 77 👍 |
| [#80988](https://github.com/anthropics/claude-code/issues/80988) | **v2.1.219 `heron_brook` prompt injects "Do not call AgentTool unless user requested" for Opus 5 only, silently overriding delegation policy** | Silent policy override breaks agent delegation for Opus 5 users; no opt-out | 21 comments, 48 👍 |
| [#33502](https://github.com/anthropics/claude-code/issues/33502) | **GUI folder setup: add to recent list so it can be deleted** | Basic UX gap — folders added via GUI aren't manageable in recent list | 21 comments, 37 👍 |
| [#81341](https://github.com/anthropics/claude-code/issues/81341) | **Claude Desktop MSIX: CIG + vendor-signed vk_swiftshader.dll kills GPU process on every browser preview** | Windows MSIX security policy conflicts with GPU acceleration; breaks previews | 15 comments, 2 👍 |
| [#79986](https://github.com/anthropics/claude-code/issues/79986) | **Claude Desktop: external stdio MCP tools announced but never dispatched in Chat mode (all platforms)** | MCP tool calls silently fail post-update; regression in Chat mode only | 15 comments, 8 👍 |
| [#59408](https://github.com/anthropics/claude-code/issues/59408) | **Ctrl+C / Ctrl+Shift+C silently clear prompt input with no confirmation or recovery** | Data-loss risk in TUI; no undo for accidental keypresses | 14 comments, 10 👍 |
| [#76727](https://github.com/anthropics/claude-code/issues/76727) | **Cross-session coordination for independently-launched Claude Code sessions** | Heavy users running many sessions against one repo lack first-party coordination primitives | 14 comments |
| [#81703](https://github.com/anthropics/claude-code/issues/81703) | **July 17 mass billing incident: usage credits charged despite plan allowance; $604.71 auto-recharges disputed** | Billing trust issue; subscription usage incorrectly routed to paid credits | 12 comments |
| [#78775](https://github.com/anthropics/claude-code/issues/78775) | **Regression: Desktop app session time-range filter only appears when Group by = State** | Filter UI hidden unless specific grouping selected; regression in session history | 8 comments, 28 👍 |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#42996](https://github.com/anthropics/claude-code/pull/42996) | **MEP (Meat Puppet Elimination Protocol)** — async state relay for multi-machine AI sessions | Open | Novel community proposal: zero-infra session continuity across machines via 3-file pattern |
| [#57888](https://github.com/anthropics/claude-code/pull/57888) | Scope `child_process_exec` to JS/TS files (fix Python false-positive) | **Closed** | Security hook false-positive on Python's `asyncio.create_subprocess_exec` resolved |
| [#85925](https://github.com/anthropics/claude-code/pull/85925) | Docs: point remaining stale doc links at `code.claude.com` | Open | Canonical domain migration follow-up across plugins, skills, agents, commands |
| [#85834](https://github.com/anthropics/claude-code/pull/85834) | Fix: HackerOne Bug Bounty Program access issue | Open | Devcontainer config update for `hookify` plugin bounty access |
| [#70173](https://github.com/anthropics/claude-code/pull/70173) | Fix `clean_gone`: detect `[gone]` branches with `git branch -vv` | **Closed** | `/clean_gone` command broken; `git branch -v` doesn't show `[gone]` without `-vv` |
| [#85822](https://github.com/anthropics/claude-code/pull/85822) | Docs: fix stale links and README drift in plugins and examples | Open | Verified redirect cleanup for `docs.anthropic.com` → `code.claude.com` |
| [#85806](https://github.com/anthropics/claude-code/pull/85806) | Fix security-guidance: skip XSS warnings in docs | Open | Reuses `_DOC_EXTS` filter to suppress false positives in documentation |
| [#85243](https://github.com/anthropics/claude-code/pull/85243) | Fix skills: use spec-conformant names in plugin-dev and hookify skills | Open | 8 bundled skills renamed from title-case with spaces to spec-compliant identifiers |
| [#85716](https://github.com/anthropics/claude-code/pull/85716) | Fix hookify: load rules from ancestor `.claude` directories to prevent silent bypass | Open | Security hook bypass when rules only loaded from CWD; now walks up directory tree |
| [#85975](https://github.com/anthropics/claude-code/pull/85975) | Bug: Auto-update reports success with non-functional stub binary after postinstall link failure | Open | npm global update leaves broken `bin/claude.exe` stub on macOS; false success reporting |

---

## 5. Feature Request Trends

1. **MCP Multi-tenancy** — Multiple Gmail/Google Workspace accounts (#36024, 77 👍), plus broader MCP server management UX
2. **Session & State Continuity** — Cross-session coordination (#76727), MEP protocol proposal (#42996), project folder persistence in GUI (#33502)
3. **Agent Delegation Control** — Transparent, configurable agent spawning policies (#80988, #67636), subagent trust inheritance (#85982)
4. **Windows/MSIX Parity** — GPU acceleration fixes (#81341), Git Bash detection (v2.1.228), Cowork sidebar sync (#85978)
5. **Billing Transparency** — Itemized usage accounting, auto-recharge dispute flow (#81703, #83062)
6. **TUI/CLI Ergonomics** — Input recovery (#59408), prompt collapse controls (#61675), reduced verbosity for simple ops (#85981)

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Pattern | Representative Issues |
|------|---------|----------------------|
| **Cowork / VM Reliability** | Workspace startup fails silently; VM service doesn't recover after reboot | #27801 (72 comments), #84841 (MSIX install breaks Cowork SDK) |
| **MCP Tool Execution** | Tools announce but never dispatch; Chat mode regression; stdio handshake completes but no `tools/call` | #79986, #85979 (ECONNRESET on v2.1.228) |
| **Silent Policy Overrides** | System prompts inject behavioral constraints without user consent/visibility | #80988 (`heron_brook` overrides delegation), #85222 (cyber-safeguard false positives) |
| **Agent Spawning Runaway** | Excessive parallel agents burning tokens; no budget/limit controls | #67636 (10-15 agents, millions of tokens), #85982 (subagent trust failures) |
| **Windows-Specific Breakage** | MSIX/CIG conflicts, Git Bash path issues, file upload rejections in scheduled tasks | #81341, #84841, #84880, #85979 |
| **Session History & Recovery** | Transcripts fail to load (#85976), blank sessions after update/reinstall (#85798), macOS sandbox ARG_MAX (#73468) |
| **Auto-update Integrity** | Reports success but leaves broken binaries (#85975), no rollback path |

---

*Data sourced from `github.com/anthropics/claude-code` — releases, issues (48 updated in 24h), and PRs (9 updated in 24h) as of 2026-08-12.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-12

---

## 1. Today's Highlights

The past 24 hours show **intense Windows stability issues** dominating the issue tracker—9 of the top 10 issues by comment count are Windows-specific, centering on Computer Use/Chrome plugin bootstrapping failures, bundled marketplace corruption after Store updates, and native messaging host registration problems. A macOS regression (#37403) blocking Remote Control/CLI thread resumption also gained traction (9 👍). On the development side, 18 PRs merged today, mostly internal `copyberry[bot]` changes improving TUI performance, MCP OAuth, sandbox isolation, and gRPC code-mode routing.

---

## 2. Releases

| Version | Type | Notes |
|---------|------|-------|
| `rust-v0.148.0-alpha.9` | Alpha | Third alpha in the 0.148.0 series (preceded by alpha.8 and alpha.7 today). No changelog provided; likely incremental CLI/runtime fixes. |

> **Note**: All three releases are alpha builds. Stable channel unchanged.

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#20214](https://github.com/openai/codex/issues/20214) | **Codex App freezes/stutters on Windows 11 Pro** despite ample resources | Core desktop usability blocker; affects Plus subscribers on modern hardware. | 96 comments, **81 👍** — highest engagement in tracker |
| [#17320](https://github.com/openai/codex/issues/17320) | **Excessive SQLite WAL writes** from TRACE logs ignoring `RUST_LOG` | Performance/I/O issue on Linux (VSCodium); log verbosity bypasses config. | 31 comments, **39 👍** |
| [#25391](https://github.com/openai/codex/issues/25391) | **Windows Computer Use plugin fails to bootstrap**: native pipe path unavailable | Blocks Computer Use entirely on Windows; Pro tier affected. | 23 comments |
| [#26562](https://github.com/openai/codex/issues/26562) | **Computer Use plugin unavailable in Codex Desktop on Windows** | Duplicate symptom of bootstrap failure; separate reporter. | 20 comments |
| [#21670](https://github.com/openai/codex/issues/21670) | **Chrome plugin & Browser Use hang**; plugin uninstall fails (OS error 5) | Browser automation unreliable; cache locking prevents cleanup. | 15 comments, 7 👍 |
| [#37403](https://github.com/openai/codex/issues/37403) | **[macOS regression] Cannot resume Remote Control/CLI thread**: `already has an active writer` | Breaks mobile→desktop handoff workflow after Aug 7 update. | 10 comments, **9 👍** |
| [#22114](https://github.com/openai/codex/issues/22114) | **Chrome native host locks plugin cache** on startup when Chrome already running | Corrupts bundled Chrome plugin (`chrome@openai-bundled 0.1.7`) after restart. | 12 comments |
| [#30270](https://github.com/openai/codex/issues/30270) | **Bundled plugins disappear after Windows app updates** due to stale marketplace path | 🩹 Papercut: auto-updates break Browser/Chrome/Computer Use plugins. | 12 comments |
| [#28950](https://github.com/openai/codex/issues/28950) | **Chrome plugin install fails to create Native Messaging Host registry key** | Extension installs but native bridge never registers on Windows. | 11 comments |
| [#25571](https://github.com/openai/codex/issues/25571) | **Computer Use native pipe fails**: helper paths unavailable on 26.527.31326 | Runtime gate passes but native pipe fails to start; not entitlement-related. | 14 comments |

**Pattern**: Windows Computer Use/Browser plugin stack is fragile across Store updates—marketplace sync, native messaging host registration, and cache locking are recurring failure modes.

---

## 4. Key PR Progress (Merged Today)

| # | PR | Category | Summary |
|---|----|----------|---------|
| [#38103](https://github.com/openai/codex/pull/38103) | **TUI Perf** | Avoid cloning MCP invocations in history — borrows instead of clones when rendering cells. |
| [#38101](https://github.com/openai/codex/pull/38101) | **Hosted Apps** | Attach connector ID, action name, model to file uploads; use server-returned file size. |
| [#38094](https://github.com/openai/codex/pull/38094) | **Testing** | Add integration test: Guardian receives user prompt + outer code-mode `exec` source on nested escalation. |
| [#38092](https://github.com/openai/codex/pull/38092) | **Core** | Simplify queued user message admission — resolve on Core acceptance, drop persistence-coupled errors. |
| [#38089](https://github.com/openai/codex/pull/38089) | **MCP Auth** | Prefer CIMD (Client ID Metadata Documents) for OAuth registration; fallback to Dynamic Client Registration. |
| [#38087](https://github.com/openai/codex/pull/38087) | **gRPC/Network** | Route gRPC code-mode sessions through shared `HttpClientFactory` — supports proxy & custom CA. |
| [#38086](https://github.com/openai/codex/pull/38086) | **Config** | Scoped `AbsolutePathBufGuard::with_home_directory` for `~` resolution against explicit home dir. |
| [#38084](https://github.com/openai/codex/pull/38084) | **UX** | Allow empty input to start a turn (admits immediately with env context, no user-message item). |
| [#38081](https://github.com/openai/codex/pull/38081) | **MCP/Policy** | Introduce `ApprovedMcpPolicyAmendment`; route approvals through shared `ReviewDecision` type. |
| [#38080](https://github.com/openai/codex/pull/38080) | **Windows Sandbox** | Allow nested Git repos — trust worktree root + `/*` wildcard for sandbox user. |
| [#38078](https://github.com/openai/codex/pull/38078) | **Perf** | Reduce cloning in world-state patch handling — deserialize from borrowed JSON, merge in-place. |
| [#38075](https://github.com/openai/codex/pull/38075) | **TUI** | Respect rendered width when adding history — init widgets with terminal width, saturate diff summaries. |
| [#38074](https://github.com/openai/codex/pull/38074) | **Skills/Analytics** | Track implicit executor skill invocations across native/URI working dirs. |
| [#38072](https://github.com/openai/codex/pull/38072) | **gRPC** | Forward gRPC code-mode callbacks (tool calls, notifications) to session delegates. |
| [#38067](https://github.com/openai/codex/pull/38067) | **Config** | Scope environment readiness config to thread attachments (not executor-wide). |
| [#38066](https://github.com/openai/codex/pull/38066) | **Skills/Analytics** | Emit analytics for resource-backed skill invocations on explicit selection/first-page read. |
| [#38064](https://github.com/openai/codex/pull/38064) | **Windows Sandbox** | Grant sandbox read/execute ACL to Codex app root (inherits across contents). |
| [#38061](https://github.com/openai/codex/pull/38061) | **Windows Sandbox** | Preserve proxy settings for debug sessions — avoid reconciling persistent proxy. |

**Theme**: Heavy investment in **TUI performance** (cloning reduction, width awareness), **MCP OAuth hardening**, **gRPC code-mode maturity**, and **Windows sandbox Git/proxy fixes**.

---

## 5. Feature Request Trends

| Trend | Representative Issues | Signal |
|-------|----------------------|--------|
| **CLI/TUI verbosity control** | [#21252](https://github.com/openai/codex/issues/21252) — “Adding CLI option to hide tool activity” (17 👍) | Strong demand for cleaner transcript scanning |
| **Resume optimization** | [#34663](https://github.com/openai/codex/issues/34663) — “Resume renders full thread history instead of bootstrapping latest turn” (5 👍) | Slow startup on long sessions |
| **Enterprise model gateway support** | [#21594](https://github.com/openai/codex/issues/21594) — “model_aliases mapping for gateway model names” (2 👍) | Canonical model metadata lookup for proxied models |
| **Cross-platform plugin parity** | Implicit in Windows plugin issues — users expect Browser/Computer Use to “just work” on Windows as on macOS | High frustration, low explicit feature requests |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Windows Computer Use / Browser plugin stack is broken end-to-end**  
   - Native pipe bootstrap fails (#25391, #25571, #26929)  
   - Native messaging host not registered (#28950, #32802)  
   - Bundled marketplace corrupt after Store updates (#26501, #26792, #30270, #33738)  
   - Chrome cache locked by native host (#21670, #22114, #24296, #32706)  
   - EFS/copyfile errors break resources (#32589)

2. **Desktop app freezes on Windows** (#20214 — 81 👍) and **macOS regression breaks Remote Control** (#37403)

3. **Excessive I/O from logging** on Linux ignores `RUST_LOG` (#17320)

4. **CLI/TUI history bloat** — no way to collapse tool calls (#21252) and resume re-renders full thread (#34663)

5. **Config persistence failures** on Windows (#22481) and **model alias gaps** for enterprise gateways (#21594)

> **Bottom line**: Windows desktop experience is the #1 reliability gap. The Computer Use/Browser plugin pipeline—marketplace sync → native host registration → cache management—fails at multiple stages, and Store auto-updates repeatedly regress it. macOS Remote Control regression is a new high-severity blocker for hybrid workflows.

---

*Generated from github.com/openai/codex data as of 2026-08-12. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-12

## Today's Highlights
The v0.56.0 preview and nightly releases ship a critical fix for false model capacity exhaustion errors and introduce a local evaluation report command (`npm run eval:report`) for behavioral eval aggregation. Security hardening continues with three CVEs addressed in dependencies (shell-quote, simple-git, nanoid) and a fix for SSRF in `web-fetch.ts`. Meanwhile, the top community pain points remain shell command hangs, 429 quota errors, and subagent reliability.

---

## Releases
| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.56.0-nightly.20260812.g5024443c7** | Nightly | • Fix false model capacity exhaustion & core quota lookup mapping ([#28730](https://github.com/google-gemini/gemini-cli/pull/28730))<br>• Add `eval:report` command & developer docs for behavioral evals ([#28369](https://github.com/google-gemini/gemini-cli/pull/28369)) |
| **v0.56.0-preview.1** | Preview | Changelog for v0.55.0-preview.1; version bump to 0.56.0-nightly baseline |
| **v0.55.1** | Stable | Fix release `npm ci` ignoring scripts ([#28116](https://github.com/google-gemini/gemini-cli/pull/28116)); prevent workspace binary shadowing ([#28132](https://github.com/google-gemini/gemini-cli/pull/28132)); tool registry improvements |
| **v0.55.0-preview.3** | Preview | Cherry-pick patch for v0.55.0-preview.2 ([#28771](https://github.com/google-gemini/gemini-cli/pull/28771)) |

> **Security notes**: PRs [#28780](https://github.com/google-gemini/gemini-cli/pull/28780) (shell-quote 1.8.4, CVE-2026-9277), [#28778](https://github.com/google-gemini/gemini-cli/pull/28778) (simple-git 3.32.3, CVE-2026-28292), and [#28773](https://github.com/google-gemini/gemini-cli/pull/28773) (nanoid 3.3.18) upgrade vulnerable dependencies.

---

## Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#26911](https://github.com/google-gemini/gemini-cli/issues/26911) | **429 Too Many Requests after 5–10 min** (CLOSED) | Users hit rate limits despite <10% quota usage; CLI stalls for up to an hour with only debug-log visibility. | 12 comments, 2 👍 — high urgency for quota-aware backoff. |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after MAX_TURNS** (OPEN) | `codebase_investigator` masks turn-limit termination as success, breaking downstream logic. | 12 comments, 2 👍 — P1, maintainer-only, needs retesting. |
| [#23297](https://github.com/google-gemini/gemini-cli/issues/23297) | **Pressing Enter does nothing** (OPEN) | Shell becomes unresponsive; no debug path. Blocks all interactive use. | 11 comments, 10 👍 — Stale, needs info, high user impact. |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **Robust component-level evaluations** (OPEN) | Epic to scale behavioral evals (76 tests, 6 models) with reliable infra. | 7 comments — P1, eval-infra, maintainer-only. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads/search/mapping** (OPEN) | Investigates whether AST tooling reduces turns/tokens for code navigation. | 7 comments, 1 👍 — P2, customer-issue, maintainer-only. |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini underuses skills & sub-agents** (OPEN) | Model ignores custom skills unless explicitly invoked; limits autonomy. | 6 comments — P2, maintainer-only, needs retesting. |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory retries low-signal sessions indefinitely** (OPEN) | Extraction agent skips low-signal sessions but they remain “unprocessed,” causing loops. | 5 comments — P2, maintainer-only. |
| [#24828](https://github.com/google-gemini/gemini-cli/issues/24828) | **Sandbox drops GOOGLE_GENAI_API_VERSION** (OPEN) | Vertex-compatible API paths break in sandbox due to hardcoded env allowlist. | 5 comments — P2, needs retesting. |
| [#24707](https://github.com/google-gemini/gemini-cli/issues/24707) | **`run_shell_command` hangs 5 min on interactive/slow cmds** (OPEN) | Hardcoded timeout; interactive prompts (git creds) or slow grep stall agent. | 4 comments, 1 👍 — P1, Stale. |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Deterministic redaction & reduce Auto Memory logging** (OPEN) | Secrets sent to model before redaction; service logs skill data. Security risk. | 4 comments — P2, security, maintainer-only. |

---

## Key PR Progress (Top 10 by Impact)

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) | **Fix SSRF in `web-fetch.ts` via async DNS** | CLOSED | `isBlockedHost` now resolves hostnames asynchronously, blocking private IPs (169.254.169.254, etc.) behind domains. |
| [#28691](https://github.com/google-gemini/gemini-cli/pull/28691) | **Block `$VAR`/`${VAR}` expansion bypass (GHSA-wpqr-6v78-jr5g)** | OPEN | Hardens shell/PowerShell substitution detection; defense-in-depth for issue-dedup workflow. |
| [#28681](https://github.com/google-gemini/gemini-cli/pull/28681) | **Add SGLang & local OpenAI-compatible endpoint support** | OPEN | Enables local/self-hosted model routing (SGLang, vLLM, Ollama) via OpenAI-compatible API. |
| [#28730](https://github.com/google-gemini/gemini-cli/pull/28730) | **Resolve false capacity exhaustion & quota model mapping** | CLOSED | Fixes CLI quota display, preserves “Keep trying” UI during transient surges; shipped in v0.56.0-nightly. |
| [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) | **Add `eval:report` command & behavioral eval docs** | CLOSED | Aggregates pass rates by model from Vitest `report.json`; maps to inventory policies; supports duplicate test names. |
| [#28780](https://github.com/google-gemini/gemini-cli/pull/28780) | **Upgrade shell-quote to 1.8.4 (CVE-2026-9277)** | OPEN | Critical CVE fix for command-injection vector in shell parsing. |
| [#28778](https://github.com/google-gemini/gemini-cli/pull/28778) | **Upgrade simple-git to 3.32.3 (CVE-2026-28292)** | OPEN | Critical CVE fix in git wrapper dependency. |
| [#28729](https://github.com/google-gemini/gemini-cli/pull/28729) | **Fix IDE connection directory mismatch (Cider/VS Code forks)** | CLOSED | Resolves swallowed workspace path errors when port files exist but paths differ (FUSE/remote workspaces). |
| [#28678](https://github.com/google-gemini/gemini-cli/pull/28678) | **Prevent OAuth callback timeout leak & resource retention** | OPEN | Centralizes callback server cleanup to avoid stale timeouts/memory leaks. |
| [#28679](https://github.com/google-gemini/gemini-cli/pull/28679) | **Improve Vertex AI 401 error for standard API key misuse** | OPEN | Clearer guidance when user provides Gemini API key instead of GCP credentials for Vertex auth. |

---

## Feature Request Trends
1. **AST-aware code intelligence** — Multiple epics ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)) investigate precise method-bound reads, symbol search, and codebase mapping to reduce turns/tokens.
2. **Subagent/skill autonomy** — Users want the model to proactively invoke skills ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968)) and subagents; trajectory visibility via `/chat share` requested ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)).
3. **Evaluation infrastructure scaling** — Component-level evals ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353)), local reporting ([#28369](https://github.com/google-gemini/gemini-cli/pull/28369)), and behavioral test reliability are active investment areas.
4. **Local/self-hosted model support** — PR [#28681](https://github.com/google-gemini/gemini-cli/pull/28681) adds SGLang/OpenAI-compatible endpoints; issue [#27861](https://github.com/google-gemini/gemini-cli/issues/27861) requests configurable auto-routing exclusions.
5. **Browser agent

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-12

## Today's Highlights
No new releases shipped in the last 24 hours. The issue tracker shows a cluster of regressions in v1.0.79: `/config model` wipes user settings (#4431), Claude models are unavailable for Enterprise users (#4422), and Windows plugin installs/updates fail with “Access is denied” (#4151, #4095). Meanwhile, the community is surfacing architectural concerns around session compaction lossiness (#4441), skill deduplication (#4430), and MCP BigInt serialization (#4211).

## Releases
*None in the last 24 hours.*

## Hot Issues
| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4095](https://github.com/github/copilot-cli/issues/4095) | Windows: plugin update fails with “Access is denied” while VS Code holds watcher handles | Blocks plugin updates for all Windows users running VS Code; 14 👍 indicates broad impact. | 👍 14 · 2 comments |
| [#4422](https://github.com/github/copilot-cli/issues/4422) | All Claude models disabled under CLI model selection (Enterprise) | Enterprise users suddenly lost access to Claude models despite being enabled in GitHub settings; regression with no version rollback fix. | 👍 3 · 2 comments |
| [#4151](https://github.com/github/copilot-cli/issues/4151) | Plugin install fails with “Access is denied” on Windows for all sources | Affects marketplace, GitHub repo, and local directory installs; 100% repro on Windows 11. | 👍 1 · 3 comments |
| [#4251](https://github.com/github/copilot-cli/issues/4251) | Large session resume OOMs / grinds CPU for ~70 min in 1.0.74 (regression vs 1.0.73) | 3–4× memory spike isolates to 1.0.74; blocks long-lived session workflows. | 👍 1 · 3 comments |
| [#4431](https://github.com/github/copilot-cli/issues/4431) | `/config model` wipes all settings in `settings.json` | User configuration destroyed on model change; closed but root cause may persist. | 3 comments |
| [#4211](https://github.com/github/copilot-cli/issues/4211) | CLI cannot handle BigInt in structured MCP response | TypeError aborts all ongoing tasks when MCP servers return large integers. | 3 comments |
| [#4380](https://github.com/github/copilot-cli/issues/4380) | Rubber Duck reviewer uses same model family as primary session | Defeats adversarial review purpose; observed across multiple model families. | 3 comments |
| [#4451](https://github.com/github/copilot-cli/issues/4451) | Explicit slash skill reloaded via model registry and fails with “Skill not found” | Skills with `disable-model-invocation: true` become unreachable after explicit invocation. | 👍 2 · 0 comments |
| [#3976](https://github.com/github/copilot-cli/issues/3976) | Native `tgrep` indexer OOM-kills host on large monorepos (no memory cap) | Daemon spawns at session start without upper memory bound; affects repos with `copilot_cli_tgrep` experiment. | 2 comments |
| [#4439](https://github.com/github/copilot-cli/issues/4439) | CLI 1.0.79 rejects GitLab MCP OAuth metadata (RFC 8414 issuer mismatch) | Blocks GitLab Self-Managed MCP servers using Dynamic Client Registration. | 1 comment |

## Key PR Progress
| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#4449](https://github.com/github/copilot-cli/pull/4449) | Migrate PR automation away from `pull_request_target` | OPEN (draft) | Security hardening: moves untrusted PR input to lower-privilege `pull_request` workflows; repository-write actions shifted to separate privileged workflow. |
| [#4428](https://github.com/github/copilot-cli/pull/4428) | Add initial devcontainer configuration | OPEN | Adds `.devcontainer` for consistent contributor environments; marked LGTM. |
| [#4452](https://github.com/github/copilot-cli/pull/4452) | Revert 5 copilot/fix with copilot | CLOSED | Automated revert of prior Copilot-generated fixes. |

## Feature Request Trends
1. **Session & Context Durability** — Preserve decisions across compactions (#4441), auto-allow permissions on startup (#3877), and explicit file-edit review mode (#4444).
2. **Cross-Tool Compatibility** — Read `.claude/rules` and `.agents/rules` to avoid instruction duplication (#4440); support GitLab MCP OAuth (#4439).
3. **Enterprise Governance** — Policy to enforce sandbox enablement and push configuration (#4446).
4. **UI/UX Refinements** — Condensed autopilot timeline (#2623), visible assistant text before tool calls (#4450), and light-theme color fixes (#3750).
5. **Model & Agent Control** — Complementary reviewer strategy enforcement (#4432), disable-model-invocation semantics (#4438), and prevent auto-mode from picking unavailable models (#4445).

## Developer Pain Points
- **Windows File Locking** — VS Code’s plugin watcher handles block installs/updates (#4095, #4151); no workaround besides closing VS Code.
- **Model Availability & Selection** — Claude models disabled for Enterprise (#4422), user-default model not honored until CLI restart (#4434), auto-mode picks unavailable reasoning tiers (#4445), and Rubber Duck ignores complementary strategy (#4380, #4432).
- **Session Scalability** — Resume memory regression (#4251), `tgrep` unbounded memory (#3976), and recursive compaction loss (#4441) hurt large/long sessions.
- **Configuration Fragility** — `/config model` nukes `settings.json` (#4431); skill deduplication broken across repo + plugin (#4430).
- **MCP/Tooling Gaps** — BigInt serialization crashes (#4211), GitLab OAuth rejected (#4439), and search tool stalls (#4448).
- **Input/UX Bugs** — Backspace deletes words not chars (#4447), hidden pre-tool assistant messages (#4450), and vulnerable `adm-zip` dependency (#4442).

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-12

---

## 1. Today's Highlights
No new releases shipped in the last 24 hours. Development activity is concentrated on **code hardening**: seven long-standing bug-fix PRs (mostly assertion-to-exception conversions and race-condition fixes) were closed today, signaling a push toward production-grade reliability. On the feature front, a configurable **thinking-effort** CLI command (`/effort`) is under review, while the community continues to debate a cross-session **Memory System** (34 comments) and a new **quote-and-reply** UX for Kimi Web.

---

## 2. Releases
*None in the last 24 h.*

---

## 3. Hot Issues

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | **Memory System — persistent context across sessions** | Highest-engagement open issue (34 comments). Would enable both AI-managed notes and user-defined instructions (`.kimimemory`), turning Kimi into a long-horizon coding agent. | 👍 0 · 34 comments · active since Feb |
| [#2601](https://github.com/MoonshotAI/kimi-cli/issues/2601) | **Quote & Reply on AI responses (Kimi Web)** | UX parity with modern chat UIs; lets developers anchor follow-ups to exact code blocks or reasoning steps. | 👍 0 · 0 comments · filed today |
| [#2600](https://github.com/MoonshotAI/kimi-cli/issues/2600) | **PowerShell 7 default D: drive breaks path resolution** | Windows-on-non-C: drive is a common dev setup; CLI fails to locate project root when shell starts elsewhere. | 👍 0 · 0 comments · filed today |

---

## 4. Key PR Progress

| # | Title | Status | Impact |
|---|-------|--------|--------|
| [#2509](https://github.com/MoonshotAI/kimi-cli/pull/2509) | `feat(kimi): configurable thinking effort and /effort command` | **Open** | Exposes `reasoning_effort` (low/medium/high) via CLI flag & slash command; resolves #2501. |
| [#2057](https://github.com/MoonshotAI/kimi-cli/pull/2057) | `fix(acp): replace assert with RuntimeError` | **Closed** | Hardens ACP session logic against `-O` optimization stripping asserts. |
| [#2056](https://github.com/MoonshotAI/kimi-cli/pull/2056) | `fix(wire): eliminate TOCTOU race in WireFile.append_record` | **Closed** | Fixes file-append race condition that could crash on concurrent access. |
| [#2055](https://github.com/MoonshotAI/kimi-cli/pull/2055) | `fix(agentspec): replace assert with AgentSpecError` | **Closed** | Removes unsafe assertion in agent-spec validation. |
| [#1328](https://github.com/MoonshotAI/kimi-cli/pull/1328) | `Fix minor bugs in file tools and UI feedback` | **Closed** | Corrects replacement-count math, improves diff rendering, fixes stdin handling. |
| [#1082](https://github.com/MoonshotAI/kimi-cli/pull/1082) | `fix(pyinstaller): filter non-existent dateparser cache files` | **Closed** | Unblocks PyInstaller builds in clean CI environments. |
| [#1077](https://github.com/MoonshotAI/kimi-cli/pull/1077) | `fix: remove redundant mode validation in WriteFile` | **Closed** | Cleans up dead validation code paths. |
| [#1393](https://github.com/MoonshotAI/kimi-cli/pull/1393) | `fix(acp): route shell commands through terminal args` | **Closed** | Aligns ACP shell execution with current SDK (`terminal_id`, command/args split). |

---

## 5. Feature Request Trends
1. **Long-term memory / project awareness** — #1283 dominates discussion; users want `.kimimemory` files, automatic pattern extraction, and per-project context retention.  
2. **Granular conversation control** — #2601’s quote-and-reply reflects demand for *structured* multi-turn debugging (pinning to code blocks, diffs, plans).  
3. **Reasoning transparency & tuning** — #2509’s `/effort` command shows appetite for explicit compute-budget knobs per task.  
4. **Windows-first polish** — #2600 and earlier path-handling issues indicate growing Windows dev adoption.

---

## 6. Developer Pain Points
- **Assertion brittleness**: 4 PRs today replaced `assert` with proper exceptions — a systemic pattern that caused silent failures under `python -O`.  
- **Race conditions in file I/O**: TOCTOU in `WireFile` and replacement-count bugs in `StrReplaceFile` bit contributors in automated workflows.  
- **Packaging friction**: Missing `dateparser` cache files broke PyInstaller builds in fresh environments.  
- **Shell/environment assumptions**: CLI hardcodes C: drive or current working dir, breaking on non-standard PowerShell profiles or container mounts.  
- **ACP protocol drift**: Multiple PRs (#1393, #2057) adapting to evolving ACP SDK shapes — integration surface is still stabilizing.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` (issues & PRs updated 2026-08-11).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-12

## Today's Highlights
The v2 TUI continues rapid iteration with 20+ PRs merged or opened today, focusing on polishing the session experience (compact token displays, dimmed placeholder titles, instruction notice formatting) and fixing critical Linux boot hangs. A cluster of 10+ feature requests appeared simultaneously, nearly all mirroring Claude Code slash commands (`/usage`, `/security-review`, `/verify`, `/simplify`, `/btw`, `/approve`, `/context`, `/loop`, `/tasks`, `/schedule`), signaling strong community demand for parity. Critical reliability bugs — infinite LLM retry loops, compaction loops, and defunct `git` child processes blocking startup — are actively being addressed.

---

## Releases
No new releases in the last 24 hours.

---

## Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#27924](https://github.com/anomalyco/opencode/issues/27924) **Infinite compaction loop when compression fails** | Session enters unrecoverable `overflow → compact → overflow` cycle if context cannot be reduced below token limit; blocks long-running sessions. | 8 comments, 0 👍 — reported May, updated today; core session reliability blocker. |
| [#41763](https://github.com/anomalyco/opencode/issues/41763) **ALSA errors flood and corrupt TUI on Linux** | Sound subsystem initializes repeatedly on headless Linux, printing diagnostics over the TUI and corrupting display. | 5 comments, 1 👍 — PR [#41770](https://github.com/anomalyco/opencode/pull/41770) opened to fix. |
| [#38193](https://github.com/anomalyco/opencode/issues/38193) **Desktop “Add server” dialog: only Server address editable** | Username, Password, Server name fields show placeholders but reject input; breaks server config for non-anon auth. | 4 comments, 1 👍 — v1.18.4 regression, unchanged since July. |
| [#41848](https://github.com/anomalyco/opencode/issues/41848) **LLM retry has no max attempts → infinite “Thinking”** | `RETRY_MAX_DELAY` = 24 days; stream errors cause endless retries with no UI error feedback. | 2 comments — critical UX/reliability issue; 5 processes died on `llm runtime selected`. |
| [#41806](https://github.com/anomalyco/opencode/issues/41806) **Instance bootstrap hangs forever (Linux): defunct `git` child never reaped** | TUI renders but Enter never starts session; `git` spawn during init becomes zombie, bootstrap `await` never resolves. | 2 comments — intermittent but fatal on Linux; blocks all v2 adoption there. |
| [#41875](https://github.com/anomalyco/opencode/issues/41875) **`apply_patch` Add File can overwrite existing file** | `add` hunks lack pre-write existence check; verified on current `dev` — data-loss risk for patch tool. | 2 comments — core tool safety regression. |
| [#41915](https://github.com/anomalyco/opencode/issues/41915) **Feature: `/usage` — session token & cost report (alias `/cost`)** | Dedicated slash command for detailed consumption/cost; currently only inline sidebar footer line exists. | 1 comment — part of today’s Claude Code parity batch. |
| [#41905](https://github.com/anomalyco/opencode/issues/41905) **New session inherits previous session cwd instead of launch cwd** | Daemon-shared cwd leaks across sessions; breaks per-project workflow when opening from different dirs. | 1 comment — v2 session isolation gap. |
| [#41913](https://github.com/anomalyco/opencode/issues/41913) **Feature: `/security-review` — scan diff for secrets/credentials** | No built-in secret leakage detection; `/review` exists but not security-focused. | 1 comment — high-value security feature. |
| [#41916](https://github.com/anomalyco/opencode/issues/41916) **Plugin config hooks mutate process-shared config via shallow-merged nested objects** | Workspace config shares `mcp` object with global cache; plugin hooks can leak state across workspaces. | 0 comments — subtle but dangerous config isolation bug. |

---

## Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| [#41924](https://github.com/anomalyco/opencode/pull/41924) | Fix | **Clipboard write failures surfaced** — TUI no longer shows “Copied” toast when `wl-copy`/`xclip`/`xsel` missing or fails (Linux). |
| [#41918](https://github.com/anomalyco/opencode/pull/41918) | Feature | **Workerd runtime profile + SDK entrypoint** — enables one OpenCode server per Cloudflare Durable Object (Slack bot threads as DOs). |
| [#41923](https://github.com/anomalyco/opencode/pull/41923) | Feature | **Surface plugin failures** — failed-plugin count on new-session screen, `/plugins` route, error details at top of plugin list. |
| [#41922](https://github.com/anomalyco/opencode/pull/41922) | UX | **Compact turn token usage** — collapses verbose per-step token table into single summary line with expandable steps. |
| [#41900](https://github.com/anomalyco/opencode/pull/41900) | UX | **Instruction updates as compact notices** — replaces multi-hundred-line catalog dumps with `◈ Instructions updated: core/codemode`. |
| [#41884](https://github.com/anomalyco/opencode/pull/41884) | Fix | **Gate tool snapshot on MCP registration** — prevents boot-resumed sessions from snapshotting before MCP tools exist. |
| [#41883](https://github.com/anomalyco/opencode/pull/41883) | UX | **Show completed write output** — syntax-highlighted file contents after V2 `write` tool finishes (port of #41352). |
| [#41880](https://github.com/anomalyco/opencode/pull/41880) | UX | **Align running shell output** — stabilizes shell card layout between streaming and settled states (port of #41101). |
| [#41789](https://github.com/anomalyco/opencode/pull/41789) | Fix | **Expose local attachment paths** — restores V2 agents’ ability to operate on attached images/directories (closes #41443, #41454). |
| [#41904](https://github.com/anomalyco/opencode/pull/41904) | Feature | **Claude Code ACP runtime** — run Claude Code inside OpenCode via `@agentclientprotocol/claude-code` (related to #5182, #20002, #24038). |

---

## Feature Request Trends
**Claude Code slash-command parity dominates today’s intake** — 10 of 22 updated issues are new feature requests from a single author (`afonsoft`), nearly all mapping 1:1 to Claude Code commands:
- **Observability**: `/usage` (cost/tokens), `/context` (breakdown), `/tasks` (background agents)
- **Quality gates**: `/security-review` (secrets), `/verify` (test/lint), `/simplify` (multi-agent refactor)
- **Workflow control**: `/approve` (permission toggle), `/btw` (ephemeral Q), `/loop` (repeat), `/schedule` (cron)
This suggests a concerted push to match Claude Code’s command surface before v2 launch. Secondary themes: **plugin/config robustness** (#41925 canonical `tools/` dir, #41916 config isolation), **IME/accessibility** (#41920 fcitx5 `m` key deletion), and **session isolation** (#41905 cwd inheritance).

---

## Developer Pain Points
1. **v2 Linux reliability** — ALSA spam (#41763), defunct `git` zombies blocking bootstrap (#41806), clipboard false-success (#41924) make daily driving fragile on headless/desktop Linux.
2. **Unbounded retry loops** — both LLM streaming (#41848) and session compaction (#27924) lack circuit breakers, leaving UI stuck indefinitely with no error escape hatch.
3. **Config/state leakage** — plugin hooks mutate shared nested config (#41916), MCP tool snapshot races (#41884), and session cwd bleed (#41905) indicate incomplete isolation boundaries in the daemon architecture.
4. **Tool safety gaps** — `apply_patch` overwrites without existence check (#41875), desktop dialog fields silently ignore input (#38193), and IME composition breaks single keys (#41920) erode trust in core interactions.
5. **Observability ceiling** — token/cost data trapped in sidebar footer; no `/usage`, `/context`, or `/verify` commands forces shell escape for basic health checks.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-12

## Today's Highlights
The Pi ecosystem saw intense bug-fixing activity with 26 issues and 49 PRs updated in the last 24 hours. Critical fixes landed for streaming usage tracking (#7911), edit-tool fuzzy matching (#7836), and TUI clipboard reliability (#7973). New provider support continues expanding with Qwen Token Plan CN and Cloudflare AI Gateway bindings, while Mac users report a high-CPU regression in long sessions (#7730).

## Releases
No new releases published in the last 24 hours.

## Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#7730](https://github.com/earendil-works/pi/issues/7730) High CPU on Mac OS with long sessions | Performance regression causing 50–110% CPU; blocks extended coding sessions on macOS | 8 👍, 10 comments — active investigation |
| [#7850](https://github.com/earendil-works/pi/issues/7850) Copilot 429 rate limit with 20+ org models | Auth fails for large orgs; blocks enterprise adoption | 7 👍, 7 comments — closed as no-action but highlights scaling gap |
| [#6187](https://github.com/earendil-works/pi/issues/6187) WSL login hang after Copilot device auth | WSL users cannot complete GitHub Copilot login flow | 25 comments — closed, fix likely in recent auth refactor |
| [#7846](https://github.com/earendil-works/pi/issues/7846) Bun runtime crashes on 0.84.0/0.84.1 | `zlib.createZstdDecompress` missing in undici; breaks Bun users | 10 comments, 1 👍 — closed, runtime compatibility fix needed |
| [#7553](https://github.com/earendil-works/pi/issues/7553) Configurable thinking level for compaction | Users want separate reasoning budget for summarization vs. normal turns | 8 comments — open, design discussion ongoing |
| [#7444](https://github.com/earendil-works/pi/issues/7444) WebSocket retry handles only 2 error codes | Transient `response.failed` errors hard-stop turns; reliability gap | 8 comments — closed, retry logic expanded |
| [#7836](https://github.com/earendil-works/pi/issues/7836) Edit fuzzy match fails on whitespace length | Models produce whitespace-diffed edits; tool rejects valid matches | 6 comments, 1 👍 — fix merged in #7978 |
| [#7911](https://github.com/earendil-works/pi/issues/7911) `message_update` drops `usage` in 0.84.0 | Streaming protocol loses token counts until `message_end`; breaks cost tracking | 2 comments, in progress — fix in #7982 |
| [#7829](https://github.com/earendil-works/pi/issues/7829) Invalid `settings.json` silently ignored on Windows | Unescaped backslashes in paths cause misleading "bash not found" error | 3 comments — open, validation needed |
| [#7977](https://github.com/earendil-works/pi/issues/7977) `ls` tool drops unreadable entries, misreports empty dirs | Dangling symlinks/permission errors hide files; UX regression | 1 comment — closed, fix pending |

## Key PR Progress

| PR | Type | Summary |
|----|------|---------|
| [#7982](https://github.com/earendil-works/pi/pull/7982) | **Fix** | Preserves cumulative `usage` on `message_update` events (JSON/RPC); adds regression test. Closes #7911. |
| [#7989](https://github.com/earendil-works/pi/pull/7989) | **Feature** | Adds Qwen Token Plan Individual CN provider (cn-beijing region) using `QWEN_TOKEN_PLAN_CN_API_KEY`. |
| [#7978](https://github.com/earendil-works/pi/pull/7978) | **Fix** | Normalizes single-object `edits` to array + collapses whitespace in fuzzy match. Fixes #7836. |
| [#7972](https://github.com/earendil-works/pi/pull/7972) | **Fix** | Routes TUI selection copy through host clipboard (not bare OSC 52); "Copied!" toast now truthful. Fixes #7973. |
| [#7984](https://github.com/earendil-works/pi/pull/7984) | **Fix** | Updates `grok-mermaid` to 0.2.3; resolves class-diagram rendering issues. Closes #7832. |
| [#7956](https://github.com/earendil-works/pi/pull/7956) | **Feature** | Renders Mermaid diagrams in HTML exports (toggleable, ANSI→HTML translation). |
| [#7981](https://github.com/earendil-works/pi/pull/7981) | **Fix** | Maps `models.dev` cost tiers for all providers (not just Copilot); standardizes `cost.tiers.inputTokensAbove`. Fixes #7912. |
| [#7968](https://github.com/earendil-works/pi/pull/7968) | **Feature** | Adds Intercom extension (live session↔session messaging) + `ask_predecessor` ghost responder for handoff Q&A. |
| [#7905](https://github.com/earendil-works/pi/pull/7905) | **Fix** | Refines pnpm detection (avoids false positives in `$PNPM_HOME` bins) and validates managed install before suggesting update. |
| [#7904](https://github.com/earendil-works/pi/pull/7904) | **Fix** | Normalizes single-object `edits` argument to array in edit tool; handles JSON-string-wrapped objects. |
| [#7866](https://github.com/earendil-works/pi/pull/7866) | **Feature** | Adds `copyOnSelect` option to `TuiAltScreen` to disable auto-copy on mouse select. |
| [#7865](https://github.com/earendil-works/pi/pull/7865) | **Fix** | Adds `pageUp`/`pageDown` keybindings to base `SelectList` and model selector. |
| [#7722](https://github.com/earendil-works/pi/pull/7722) | **Feature** | Adds `--use-theme` CLI flag (single or day/night pair) for per-run theme override. |
| [#7901](https://github.com/earendil-works/pi/pull/7901) | **Feature** | Implements Cloudflare AI Gateway transport via Workers AI binding. |
| [#7897](https://github.com/earendil-works/pi/pull/7897) | **Fix** | Subagents now inherit parent session's model/thinking config instead of stale global defaults. |

## Feature Request Trends
1. **Provider expansion** — Qwen CN, Hetzner (#7980), Cloudflare AI Gateway (#7901) show demand for diverse inference backends.
2. **Compaction granularity** — Separate thinking budgets for summarization vs. generation (#7553) and subagent config inheritance (#7897).
3. **Session collaboration** — Intercom live messaging (#7968) and `/resume` progress accuracy (#7960) point to multi-session workflows.
4. **Export fidelity** — Mermaid rendering in HTML exports (#7956) and theme overrides (#7722) for shareable artifacts.
5. **TUI polish** — Clipboard integration (#7972), selection behavior (#7866), keyboard navigation (#7865), terminal-specific docs (#7965).

## Developer Pain Points
- **Mac performance** — Sustained high CPU in long sessions (#7730) is the top usability blocker.
- **Auth fragility** — Copilot rate limits at scale (#7850), WSL device-flow hangs (#6187), and Bun runtime crashes (#7846) erode trust in login flow.
- **Edit-tool reliability** — Whitespace-sensitive fuzzy matching (#7836) and single-object argument rejection (#7904) cause model turn failures.
- **Silent config errors** — Invalid JSON in `settings.json` (Windows paths) produces misleading errors (#7829).
- **Streaming observability** — Lost `usage` in delta updates (#7911) and SSE hang without timeout (#7954) break cost tracking and reliability.
- **Terminal inconsistencies** — OSC 52 clipboard, mouse drag-select, and scroll behavior differ across iTerm2, Ghostty, VS Code, tmux (#7963, #7965, #7973).

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-12

---

## 1. Today's Highlights

Cross-session messaging infrastructure landed: sessions on the same machine can now discover each other (`list_agents`) and exchange messages (`send_message`) behind an explicit inbound gate, enabling multi-agent workflows. Web Shell UX improved with transactional same-session refresh, image preview on click, and model-specific reasoning controls. A new native DashScope auth type was added, bypassing the OpenAI-compatible endpoint for direct ModelStudio API access.

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.21.11-preview.0** | Preview | `fix(web-shell)`: enforce prompt-safe session navigation; `chore(serve)`: log session continuation admissions. |
| **v0.21.10-nightly.20260812.a64d1291d2** | Nightly | Same fixes as preview; automated nightly build. |
| **v0.21.10** | Stable | ACP reasoning-effort configuration (Default→Max); Web Shell image-click preview; live-host v0.1.1 with sandbox runtime probing. |
| **dsw-eas-smoke-20260812-281542bfdc** | Infra | Non-production DSW/EAS smoke test; no SWE score. |

> All releases: [Releases page](https://github.com/QwenLM/qwen-code/releases)

---

## 3. Hot Issues (Top 5 Updated Today)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#8724](https://github.com/QwenLM/qwen-code/issues/8724) | Cross-session messaging: let sessions on same machine message each other | Enables multi-agent orchestration, parallel task handoff, and session coordination. Core PRs (#8728, #8730, #8733) already merged. | 5 comments, active development |
| [#8827](https://github.com/QwenLM/qwen-code/issues/8827) | Harden coordinated terminal teardown invariants | Follow-up to #7837; targets flaky terminal cleanup in tests. Critical for CI stability. | 4 comments, labeled P3/blocked/testing |
| [#8963](https://github.com/QwenLM/qwen-code/issues/8963) | Auto-mode hangs on long-running commands (Python scripts, `del`, etc.) | User reports complete stall in yolo/auto modes; blocks overnight tasks. Direct competitor comparison (Kimi Code). | 3 comments, needs-info, P2/bug |
| [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | Fleet Shepherd Dashboard (auto-maintained) | Tracks fleet health: PR #8927 checks in flight. Indicates active channel/session rotation work. | Bot-maintained, 3 comments |
| [#8738](https://github.com/QwenLM/qwen-code/issues/8738) | VP-mode: word-wise drag after double-click, line-wise after triple-click | Polishes terminal text selection UX to match editor conventions. Closed but shows UX refinement focus. | 2 comments, closed |

---

## 4. Key PR Progress (Top 10 by Impact)

| # | Title | Type | Status | Summary |
|---|-------|------|--------|---------|
| [#8728](https://github.com/QwenLM/qwen-code/pull/8728) | Live-session registry & `qwen sessions ps` | Feat | **Closed** | Each session registers at `~/.qwen/sessions/<pid>.json`; enables `list_agents` discovery. Foundation for #8724. |
| [#8730](https://github.com/QwenLM/qwen-code/pull/8730) | Accept cross-session messages behind inbound gate | Feat | **Closed** | Sessions receive messages from peers; gated before model acts. Fail-closed security model. |
| [#8733](https://github.com/QwenLM/qwen-code/pull/8733) | Address sessions by name via `send_message`/`list_agents` | Feat | **Closed** | Completes #8724: `list_agents` shows peer sessions; `send_message` targets by name. |
| [#8736](https://github.com/QwenLM/qwen-code/pull/8736) | Sweep peer socket files from killed sessions | Fix | **Closed** | Cleans orphaned Unix sockets; prevents stale connections. |
| [#8939](https://github.com/QwenLM/qwen-code/pull/8939) | Make same-session refresh transactional (Web UI) | Fix | Open | Preserves attachment, transcript, event stream, prompt state during reload/rebind. |
| [#8714](https://github.com/QwenLM/qwen-code/pull/8714) | Native DashScope integration | Feat | Open | First-class `dashscope` auth type; direct ModelStudio native API (not OpenAI-compat). |
| [#8675](https://github.com/QwenLM/qwen-code/pull/8675) | Model-specific reasoning controls registry | Feat | Open | Built-in registry for Thinking/Effort controls per model; first registration: `qwen3`. |
| [#8529](https://github.com/QwenLM/qwen-code/pull/8529) | Resolve model modalities from API metadata | Feat | Open | Fetches input modalities from models.dev; cached, background refresh. |
| [#8568](https://github.com/QwenLM/qwen-code/pull/8568) | Use Qwen CUA driver by default (Computer Use) | Feat | Open | Switches from trycua to vendored Qwen CUA 0.17.0; 54-tool MCP-annotated contract. |
| [#8927](https://github.com/QwenLM/qwen-code/pull/8927) | Bound session lifetime with `sessionRotation` | Feat | Open | Per-channel `maxTurns`/`maxAge` bounds; auto-starts fresh session on expiry. |

---

## 5. Feature Request Trends

| Theme | Evidence | Trajectory |
|-------|----------|------------|
| **Multi-session / agent orchestration** | #8724 (core), #8728/30/33 (impl), #8927 (rotation) | **Active delivery** — registry, messaging, gating, rotation all landing |
| **Model provider diversification** | #8714 (DashScope native), #8529 (modalities from metadata), #8526 (ACP reasoning effort) | **Expanding** — native integrations, capability discovery, config surfaces |
| **Web Shell parity & polish** | #8939 (transactional refresh), #8872 (thinking/tool progress), #8675 (reasoning controls), image preview (v0.21.10) | **Accelerating** — UX closing gap with CLI |
| **Computer Use / agent tooling** | #8568 (Qwen CUA default), #7800 (PTY workers for Agent View) | **Maturing** — vendor-owned stack, managed session workers |
| **Telemetry & observability** | #8616 (OTel session lifecycle), #8925 (structured output on API errors) | **Standardizing** — open standards, reliable non-interactive output |

---

## 6. Developer Pain Points

| Pain Point | Frequency / Signal | Context |
|------------|-------------------|---------|
| **Auto-mode hangs on long tasks** | #8963 (P2, needs-info); user cites "all night / multi-day tasks impossible" | Blocking for unattended automation; competitor (Kimi Code) cited as working |
| **Terminal teardown flakiness** | #8827 (P3, blocked, 5+ review rounds on parent #7837) | CI/test instability; crash-path regressions in Kitty |
| **Workspace boundary too strict** | #8744 (PR open): edit/write_file blocked outside CWD | Forces workarounds; permission layer rejects valid cross-project edits |
| **OpenAI-compat abort misclassified** | #8399: `APIUserAbortError` not recognized as abort | User cancels surface as API errors; breaks error handling |
| **Image/dependency vulnerabilities** | #8952: `sharp` bump for GHSA-f88m-g3jw-g9cj | Recurring supply-chain maintenance burden |

---

*Data sourced from `github.com/QwenLM/qwen-code` — releases, issues, and PRs updated 2026-08-11 to 2026-08-12.*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-08-12

## Today's Highlights
A critical regression in **v0.9.5** has Auto-Review mode silently blocking all destructive tool calls (Bash, writes), effectively breaking autonomous workflows (#5323). Meanwhile, the maintainer opened two architectural issues: preventing child-agent shell completions from polluting the parent model stream (#5325) and simplifying the 32-field `agent` tool schema that causes model errors (#5324). A fix for the "rail decoration" copy-paste annoyance is already in review (#5319).

---

## Releases
No new releases in the last 24 hours. Current stable remains **v0.9.5**.

---

## Hot Issues

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| **[#5323](https://github.com/Hmbown/CodeWhale/issues/5323)** | **Regression: Auto-Review mode silently blocks every Bash call/write** | **Blocking regression** — v0.9.5 flipped Auto-Review from "auto-approve" to "silently block all destructive actions" with no UI feedback. Stops all autonomous coding. | 2 comments, opened today; high urgency |
| **[#5325](https://github.com/Hmbown/CodeWhale/issues/5325)** | Don't deliver child-owned background shell completions to parent model stream | Architectural leak: sub-agent shell completions pollute parent context, wasting tokens and confusing the model. | Opened by maintainer (Hmbown), 0 comments |
| **[#5324](https://github.com/Hmbown/CodeWhale/issues/5324)** | Simplify 32-field `agent` tool schema | Models error on the massive single schema serving 8 actions. Schema complexity hurts reliability. | Opened by maintainer, 0 comments |
| **[#5314](https://github.com/Hmbown/CodeWhale/issues/5314)** | Copy message includes rail decorations (`● ▏`) | UX papercut: context-menu copy grabs rendered UI chars instead of clean text. PR #5319 fixes it. | 2 comments, PR already open |
| **[#4959](https://github.com/Hmbown/CodeWhale/issues/4959)** | Proposed `stop` command for YOLO/autonomous mode | No way to interrupt a runaway autonomous agent; text `stop` is ignored. Safety/control gap. | 8 comments, 👍 0, active discussion |
| **[#5322](https://github.com/Hmbown/CodeWhale/issues/5322)** | Output area capped at max width on wide terminals | Regression from v0.8.65: transcript doesn't expand to fill wide screens, wasting real estate. | 1 comment, recent regression |
| **[#4683](https://github.com/Hmbown/CodeWhale/issues/4683)** | Wrong DeepSeek completions URL (flaky network errors) | Requests hitting `api.deepse▏ek.com` (malformed) causing intermittent failures. | 3 comments, ongoing since July |
| **[#5241](https://github.com/Hmbown/CodeWhale/issues/5241)** | Pricing endpoint 503 — all sessions show `unverified_live_pricing` | Cost tracking broken since 0.9.3 upgrade; affects all providers. | 1 comment, impacts cost visibility |
| **[#4564](https://github.com/Hmbown/CodeWhale/issues/4564)** | Windows: `--model`/`--toolsets` flags consumed as single arg | Windows npm global install breaks pre-`exec` flags; only post-`exec` works. | 2 comments, Windows-specific blocker |
| **[#5316](https://github.com/Hmbown/CodeWhale/issues/5316)** | **EPIC-005: TUI Crate Decomposition (Umbrella)** | Major refactor to split monolithic TUI crate; tracks multiple sub-epics & FEATs. | 2 comments, strategic architectural work |

---

## Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| **[#5319](https://github.com/Hmbown/CodeWhale/pull/5319)** | `fix(tui): copy messages without visual rails` | **OPEN** | Fixes #5314: copies canonical source content for User/Assistant cells; keeps complex cells on full-transcript path. Includes regression tests. |
| **[#5320](https://github.com/Hmbown/CodeWhale/pull/5320)** | `fix(session): separate snapshot reads from crash recovery` | **OPEN** | Adds `load_session_snapshot` (side-effect-free read) and `recover_session_for_resume` (with repair stats) for safer embedding-host recovery. |
| **[#5321](https://github.com/Hmbown/CodeWhale/pull/5321)** | `feat: register OrcaRouter as a named provider` | **OPEN** | Wires OrcaRouter (OpenAI-compatible, 150+ models, `sk-orca-` keys) like OpenRouter — model picker, config, docs consistent. |
| **[#5318](https://github.com/Hmbown/CodeWhale/pull/5318)** | `feat(tui): pin host terminal as always-on-top mini window` | **OPEN** | Windows-only PiP: right-click or `/pin` shrinks terminal to 640×400, sets always-on-top; repeat restores. |
| **[#5326](https://github.com/Hmbown/CodeWhale/pull/5326)** | `web: audit fixes — i18n parity, copy/spacing, test fixes` | **OPEN** | Community site polish: fixes quote check in `TOOL_SURFACE.md`, i18n parity, spacing, test flakes. |
| **[#5225](https://github.com/Hmbown/CodeWhale/pull/5225)** | `feat(acp): expose file/search/git/patch/shell tools over session/prompt` | **CLOSED** | **Major**: ACP server now executes tool calls (not just streams text), enabling Zed/third-party bridges to get full code-editing agent. |

---

## Feature Request Trends
1. **Autonomous control primitives** — `stop` command (#4959), interruptible YOLO mode, better Auto-Review UX (#5323).
2. **Multi-agent hygiene** — isolating child-agent events from parent stream (#5325), cleaner agent-tool schema (#5324), Fleet routing transparency (#5305).
3. **Terminal ergonomics** — pane zoom (#1261), full-width output on wide screens (#5322), PiP/pinning (#5318).
4. **Provider ecosystem** — first-class support for OpenRouter-compatible gateways (OrcaRouter #5321), reliable DeepSeek endpoint (#4683).
5. **Cost observability** — fix pricing 503s (#5241), verified live pricing across providers.

---

## Developer Pain Points
- **v0.9.5 regressions dominate**: Auto-Review blocking everything (#5323), output width cap (#5322), slash-command latency (#4568), pricing breakage (#5241).
- **Windows friction**: flag parsing (#4564), network flakiness in WSL2 (#4956), no native PiP until #5318.
- **Schema/tool complexity**: 32-field `agent` tool causes model errors (#5324); ACP tool execution was missing until #5225.
- **Copy/paste fidelity**: rail characters leaking into clipboard (#5314) — fix in review.
- **Observability gaps**: unverified pricing, stale reasoning hints (#5291), hidden Fleet routes (#5305).

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*