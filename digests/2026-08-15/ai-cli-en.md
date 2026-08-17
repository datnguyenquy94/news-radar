# AI CLI Tools Community Digest 2026-08-15

> Generated: 2026-08-15 01:40 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-08-15)

---

## 1. Ecosystem Overview

The AI CLI tools landscape is characterized by **rapid, parallel iteration across 9 active projects**, with three distinct maturity tiers emerging. **Claude Code, OpenAI Codex, and GitHub Copilot CLI** represent the enterprise-backed tier with daily releases and complex multi-platform support. **Gemini CLI, Qwen Code, Pi, OpenCode, and CodeWhale** form the agile innovator tier, shipping architectural upgrades (session persistence, review systems, provider abstractions) at weekly cadence. **Kimi Code** remains in early community-building phase. Cross-cutting themes: **Windows/WSL compatibility crises**, **model safeguard false positives on defensive security code**, **session/context durability**, and **provider ecosystem fragmentation** dominate every community. The ecosystem is converging on **multi-agent observability**, **resumable workflows**, and **standardized provider interfaces** (MCP, ACP, OpenAI-compatible) as baseline expectations.

---

## 2. Activity Comparison

| Tool | Issues (Hot/Total) | PRs Updated | Release Status | Release Cadence |
|------|-------------------|-------------|----------------|-----------------|
| **Claude Code** | 10 / ~200+ | 4 | v2.1.233 (stable) | ~Weekly minor |
| **OpenAI Codex** | 10 / 40 | 10 (auto-merged) | 4 alphas in 24h (0.148.0-α.15–18) | Daily alpha train |
| **Gemini CLI** | 10 / ~50+ | 10 | v0.56.0-nightly | Nightly + weekly stable |
| **GitHub Copilot CLI** | 10 / ~50 | 3 | v1.0.81-0, v1.0.80 (config-only) | Patch config pushes |
| **Kimi Code** | 4 / ~20 | 0 | None | Low |
| **OpenCode** | 10 / ~80+ | 10 | None (V2 beta) | High PR velocity, no releases |
| **Pi** | 10 / ~100+ | 10 | v0.84.2 (stable) | ~Bi-weekly stable |
| **Qwen Code** | 7 / ~60+ | 12 | v0.21.12 stable + 3 previews | Weekly stable + nightly |
| **CodeWhale** | 10 / ~60+ | 10 | v0.9.8 (rebrand) | ~Bi-weekly |
| **Grok Build** | 0 | 0 | None | Inactive |

> **Note**: Issue counts reflect "Hot Issues" highlighted in digests; total open issues estimated from context. PR counts reflect 24h activity.

---

## 3. Shared Feature Directions

| Requirement | Tools Requesting | Specific Needs |
|-------------|------------------|----------------|
| **Multi-agent observability & orchestration** | Claude Code (#24537), OpenCode (#42670), Gemini CLI (#22598), Qwen Code (review loop), CodeWhale (#5371) | Unified dashboard (TUI + Desktop), subagent prompt/steer, trajectory sharing, token receipts per agent |
| **Session persistence, recovery & portability** | Claude Code (#86089, #86730), Gemini CLI (#21409), OpenCode (#42671, #42678), Kimi Code (#1283, #2269), Pi (#7724) | Resumable multi-turn workflows, cross-device handoff, migration tooling (V1→V2), crash-resumable execution engine |
| **Provider abstraction standardization** | GitHub Copilot CLI (MCP OAuth), Pi (10+ providers in PRs), Qwen Code (/auth presets), OpenCode (LAN discovery), CodeWhale (#5350) | RFC 8414 compliance, OpenAI-compatible / MCP / ACP parity, pre-built templates, "test connection" button, cache-token tracking |
| **Headless/CI robustness** | Qwen Code (#9026, #9130), OpenAI Codex (CLI/TUI), Gemini CLI (#25166), Pi (scriptability), Copilot CLI (Codespaces) | Stream error handling, deterministic flakiness gates, non-interactive mode stability, zero-config ENV usage |
| **Configurable memory/context limits** | Claude Code (#79217), Gemini CLI (#26522), Pi (#8120, #8133), Qwen Code (#6806) | MEMORY.md cap configurability, compaction profiles (append/prefix-reuse), token visibility accuracy, per-model compaction settings |
| **Windows/WSL first-class support** | All 9 tools | Git Bash permission prompts, PowerShell detection, Unix socket parity, Wayland/mirrored networking, native clipboard, update mechanisms |
| **Safety-check precision for defensive security** | Claude Code (#86804, #86820, #86819), OpenAI Codex (#28015), Copilot CLI (#4345), Gemini CLI (#22672) | Override/allow-list for WAF rules, credential rotation, network audits, `git gc`/`npm audit`; reasoning effort control |

---

## 4. Differentiation Analysis

| Dimension | Enterprise Tier | Innovator Tier | Early Stage |
|-----------|-----------------|----------------|-------------|
| **Tools** | Claude Code, OpenAI Codex, GitHub Copilot CLI | Gemini CLI, Qwen Code, Pi, OpenCode, CodeWhale | Kimi Code |
| **Target Users** | Enterprise teams, paid tiers, org-managed fleets | Power users, OSS contributors, polyglot model users | Individual devs, Moonshot ecosystem |
| **Technical Approach** | Proprietary models + managed gateways; heavy Desktop/Electron investment | Multi-provider orchestration (OpenAI-compat, MCP, ACP); TUI-first; Rust/Go/TypeScript polyglot | Single-model (Kimi) focus; memory architecture as differentiator |
| **Feature Focus** | **Stability, compliance, org policy, billing transparency** | **Architectural innovation: review systems, session durability, provider federation** | **Persistent memory, device handoff, memory transparency** |
| **Release Strategy** | Stable + alpha trains; config-only hotfixes | Nightly + stable; architectural PRs merged daily | Issue-driven; no recent releases |
| **Pain Point Profile** | Platform regressions (Win/macOS), billing opacity, safeguard false positives, plugin ecosystem | Free-tier quota opacity, V2 migration data loss, provider fragility, TUI perf | Undocumented internals, context loss, Windows shell, no handoff |

**Key Differentiators:**
- **Claude Code**: Only tool with `forward_user_identity` proxy setting; GitLab MR native support; Fable 5 safeguard integration.
- **OpenAI Codex**: Computer Use worker architecture (V8 OOM risk); ChatGPT desktop integration; native messaging backend.
- **GitHub Copilot CLI**: Deep GitHub Actions/Org integration; MCP registry policy; BYOK prompt caching.
- **Gemini CLI**: SSR Agent architecture; Auto Memory extraction pipeline; 76 behavioral evals across 6 models.
- **Qwen Code**: Content-anchored incremental PR review (survives rebases); WebBridge browser control; audio modality bridge.
- **Pi**: 15+ provider integrations in-flight; experimental append compaction; fullscreen transcript search; ChatGPT OAuth image gen.
- **OpenCode**: V2 session architecture (generic inbox, write-ahead claims); LAN provider discovery via mDNS/UPnP.
- **CodeWhale**: DS4 (DwarfStar) keyless local route; two-tier Auto-Review (deterministic + model guardian); agentclientprotocol registry target.
- **Kimi Code**: Explicit memory file hierarchy (`SOUL.md`, `USER.md`, `MEMORY.md`); multi-device session continuity vision.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Signals |
|------|-------|---------|
| **High Momentum / High Maturity** | **Qwen Code**, **Pi**, **CodeWhale** | Consistent releases (weekly/bi-weekly), 10-12 PRs/day, architectural features shipping (review system, compaction, provider federation), stable+preview+nightly channels, E2E validation pipelines (SWE-bench, Terminal-Bench) |
| **High Momentum / Medium Maturity** | **OpenCode**, **Gemini CLI** | High PR velocity (10+/day), V2/SSR architectural rewrites in progress, but release cadence irregular (OpenCode) or nightly-only (Gemini); critical regressions in current stable (OpenCode v1.18.1, Gemini agent hangs) |
| **High Maturity / Stabilization Focus** | **Claude Code**, **GitHub Copilot CLI** | Enterprise-grade release process, but recent regressions (Windows, safeguards, model catalogue sync) indicate scaling stress; config-only patches suggest hotfix pressure |
| **High Momentum / Stability Crisis** | **OpenAI Codex** | 4 alphas in 24h = active stabilization push, but Windows/macOS regressions are **system-breaking** (OS lag, 10GB RAM, kernel handle leaks); community trust eroding |
| **Low Momentum / Early Stage** | **Kimi Code** | No releases/PRs in 24h; 2 long-running feature requests dominate; Windows shell fix closed without merge suggests resource constraints |
| **Inactive** | **Grok Build** | No activity |

**Community Health Indicators:**
- **Most engaged discussions**: Pi (#7547 Windows strategy: 27 comments), Claude Code (#69238 macOS timeout: 96👍, 63 comments), Codex (#25453 PowerShell polling: 26 comments, 7👍)
- **Fastest PR

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report
*Data as of 2026-08-15 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking — Most-Discussed PRs

| # | Skill / PR | Functionality | Discussion Highlights | Status |
|---|------------|---------------|----------------------|--------|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** `fix(skill-creator): run_eval.py always reports 0% recall` | Fixes the skill-creator evaluation loop that reports 0% recall for all skills; addresses Windows stream reading, trigger detection, parallel workers | Core blocker for skill authoring; 10+ independent reproductions cited (#556); optimization loop currently "optimizing against noise" | **Open** (Jun 10 → Jun 23) |
| 2 | **[#1099](https://github.com/anthropics/skills/pull/1099)** `skill-creator: fix run_eval.py crash on Windows` | Windows subprocess pipe reading fix; prevents `[WinError 10038]` flood causing 0% trigger rate | Same root cause as #1298; makes skill-creator unusable on Windows without fix | **Open** (May 7 → May 24) |
| 3 | **[#1050](https://github.com/anthropics/skills/pull/1050)** `skill-creator: fix Windows subprocess + encoding bugs` | Two 1-line fixes: `claude.cmd` resolution + UTF-8 encoding for subprocess output | Complementary to #1099; found during `run_loop.py` testing on Windows 11 | **Open** (Apr 27 → May 24) |
| 4 | **[#514](https://github.com/anthropics/skills/pull/514)** `Add document-typography skill` | Typographic QC for AI-generated docs: orphan/widow prevention, numbering alignment | "Affects every document Claude generates"; users rarely request good typography explicitly | **Open** (Mar 4 → Mar 13) |
| 5 | **[#568](https://github.com/anthropics/skills/pull/568)** `Add ServiceNow platform skill` | Broad ServiceNow assistant: ITSM, ITOM, ITAM/SAM, FSM, HRSD, CSM, SPM, SecOps, IntegrationHub | Longest-active PR (Mar 8 → Aug 12); enterprise demand for platform-wide coverage vs narrow scripting | **Open** (Mar 8 → Aug 12) |
| 6 | **[#1367](https://github.com/anthropics/skills/pull/1367)** `feat: add self-audit — mechanical verification + 4-dim reasoning gate` | Pre-delivery audit: file existence verification → reasoning quality gate (correctness, completeness, safety, clarity) | Universal, stack-agnostic; v1.3.0; addresses "vibe coding" quality gap | **Open** (Jun 28 → Jul 2) |
| 7 | **[#723](https://github.com/anthropics/skills/pull/723)** `feat: add testing-patterns skill` | Full testing stack: Trophy model, AAA, React Testing Library, contract testing, E2E, property-based, mutation | Comprehensive reference; covers philosophy → practice → CI integration | **Open** (Mar 22 → Apr 21) |
| 8 | **[#83](https://github.com/anthropics/skills/pull/83)** `Add skill-quality-analyzer & skill-security-analyzer` | Meta-skills for skill evaluation: structure/docs (20%), behavior (25%), security (25%), maintainability (15%), UX (15%) | Enables automated skill review; security analyzer catches prompt injection, excessive permissions | **Open** (Nov 6 → Jan 7) |

> **Note:** All PRs show `Comments: undefined` in source data; ranking prioritizes (a) multiple PRs addressing same critical path (skill-creator eval), (b) issue cross-references (#556, #1169), (c) update recency, (d) scope/impact.

---

## 2. Community Demand Trends — From Issues

| Rank | Demand Signal | Evidence (Issue # / Comments / 👍) | Implication |
|------|---------------|-----------------------------------|-------------|
| 1 | **Trust & Security Hardening** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍) — Community skills masquerading as official `anthropic/` namespace | Namespace isolation, provenance verification, permission scoping now table-stakes |
| 2 | **Org-Level Skill Distribution** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍) — Manual .skill file sharing via Slack/Teams | Native registry/sharing layer needed; enterprise adoption blocker |
| 3 | **Skill Authoring Toolchain Reliability** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍) + [#1169](https://github.com/anthropics/skills/issues/1169) (3 💬, 1 👍) — `run_eval.py` 0% recall on *all* queries including literal slash-commands | Skill creation workflow broken; blocks community contribution velocity |
| 4 | **Bundle Deduplication & Context Hygiene** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) — `document-skills` + `example-skills` install identical content | Bundle spec needed; context window waste from duplicate skills |
| 5 | **Context Window Management** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 💬) — `claude-api` skill injects ~156k tokens in one call | Lazy-loading, token budgeting, skill composition patterns required |
| 6 | **MCP / Bedrock Interop** | [#16](https://github.com/anthropics/skills/issues/16) (4 💬) — Expose skills as MCPs; [#29](https://github.com/anthropics/skills/issues/29) (4 💬) — AWS Bedrock support | Skills as portable, protocol-native capabilities; multi-provider deployment |
| 7 | **Governance & Reasoning Quality** | [#412](https://github.com/anthropics/skills/issues/412) (6 💬, closed) — Agent governance skill; [#1385](https://github.com/anthropics/skills/issues/1385) (4 💬) — 3-gate reasoning pipeline | Shift from "skills that do X" → "skills that verify/constrain how X is done" |

---

## 3. High-Potential Pending Skills — Active PRs Likely to Land

| PR | Skill | Why It Has Momentum | Blockers / Next Steps |
|----|-------|---------------------|----------------------|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | `skill-creator` eval fix (Windows + trigger detection) | 3 related PRs (#1099, #1050, #539) + 2 high-comment issues (#556, #1169); unblocks all skill authoring | Requires Windows CI validation; parallel worker stability |
| **[#538](https://github.com/anthropics/skills/pull/538)** | `pdf` case-sensitivity fix | 8 filename mismatches; trivial, tested, breaks on Linux/CI | Ready to merge |
| **[#541](https://github.com/anthropics/skills/pull/541)** | `docx` tracked-change `w:id` collision fix | Prevents document corruption; root cause identified (shared ID space) | Needs test case with existing bookmarks |
| **[#539](https://github.com/anthropics/skills/pull/539)** | `skill-creator` YAML frontmatter validation | Catches silent description truncation pre-parse; 1-line prevention | Low risk, high value for authoring UX |
| **[#1538](https://github.com/anthropics/skills/pull/1538)** | Spec compliance: `template/` + one other skill | Repo is reference implementation; 2 skills fail `skills-ref validate` | Mechanical fixes (name↔dir match, required fields) |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | `plan-file-hygiene` skill | Addresses #1417 (planning artifact lifecycle gap); community-credited design | Awaits first-pass review from issue participants |
| **[#509](https://github.com/anthropics/skills/pull/509)** | `CONTRIBUTING.md` | Closes #452; raises community health from 25% → passing | Ready; single highest-impact repo health fix |

---

## 4. Skills Ecosystem Insight

> **The community's most concentrated demand is not for new domain skills, but for a trustworthy, operable skill *lifecycle*: secure namespace isolation, reliable authoring tooling (especially `skill-creator` eval on Windows), org-level distribution, and context-window-aware composition — turning skills from ad-hoc scripts into governed, shareable, composable primitives.**

---

# Claude Code Community Digest — 2026-08-15

---

## 1. Today's Highlights

Claude Code v2.1.233 shipped with GitLab merge request URL support for the `--worktree` flag and agents view, plus a new opt-in `forward_user_identity` gateway setting for proxy identity forwarding. The community is heavily focused on stability: a macOS API timeout bug (#69238, 96 👍) affecting Opus 4.8 advisory requests, Windows Git Bash permission prompt regressions (#86619), and Fable 5's overzealous security safeguards blocking legitimate defensive-security work (#86804, #86820) dominate discussion.

---

## 2. Releases

### v2.1.233
- **GitLab MR support**: `--worktree` flag and `claude agents` view now recognize GitLab merge request URLs (displayed as `!N`).
- **Identity forwarding**: New opt-in `forward_user_identity` apps gateway setting sends the signed-in user's identity as headers to upstreams behind proxies.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#69238](https://github.com/anthropics/claude-code/issues/69238) | **macOS: "No response from API" when Advisor triggers (Opus 4.8)** | Core advisory flow broken; users on Sonnet base hit 2m+ retries. Blocks AI-assisted code review. | 96 👍, 63 comments — high urgency, macOS-specific |
| [#86619](https://github.com/anthropics/claude-code/issues/86619) | **Windows Git Bash: false-positive read-only `cd` prompts (since 2.1.232)** | Auto-mode rollout broke static analysis; constant unsuppressable permission prompts in Git Bash. | 9 👍, 9 comments — regressed in latest release, two machines confirmed |
| [#86804](https://github.com/anthropics/claude-code/issues/86804) | **Fable 5 false-positives on WAF/detection-engine code** | Legitimate defensive-security work (rate limiting, IP banning, attack-pattern regexes) triggers dual-use safeguard, forcing Opus 4.8 fallback. | 0 👍, 1 comment — 5-day blocker for security engineers |
| [#86820](https://github.com/anthropics/claude-code/issues/86820) | **Fable 5 safeguards blocking home-network security audits** | Paid user cannot run authorized security audits; no override exists. | 0 👍, 0 comments — fresh, high-severity for pro users |
| [#86819](https://github.com/anthropics/claude-code/issues/86819) | **False positive on credential rotation (Supabase service_role key migration)** | Authorized defensive task flagged; disrupts legitimate secret rotation workflows. | 0 👍, 0 comments — fresh, Windows-specific |
| [#86730](https://github.com/anthropics/claude-code/issues/86730) | **Default `cleanupPeriodDays` silently deleted 58/69 session transcripts** | Data loss: ghost sidebar entries with "Session not found on disk". No warning before purge. | 0 👍, 1 comment — silent data loss is critical |
| [#85205](https://github.com/anthropics/claude-code/issues/85205) | **Auto-compact at 150k on `claude-opus-5[1m]` (should be 1M)** | Sessions report 150k window despite 1M model; `/context` confirms misconfiguration. | 0 👍, 1 comment — context window mismatch affects long sessions |
| [#84607](https://github.com/anthropics/claude-code/issues/84607) | **17× variance in tokens charged per quota point (Max 20×)** | Billing unpredictability: same plan, wildly different token costs day-to-day. | 2 👍, 2 comments — billing transparency concern |
| [#86473](https://github.com/anthropics/claude-code/issues/86473) | **Windows: persistent `ECONNRESET` / "Connection lost mid-response" (v2.1.229)** | All Code surfaces fail while raw HTTPS to API works; Windows 11 specific. | 2 👍, 2 comments — network stack regression |
| [#86817](https://github.com/anthropics/claude-code/issues/86817) | **`claude-api` reinvocation duplicates 350K-token payload → 778K reads → >1M compaction** | Token explosion from duplicate payloads forces premature compaction, degrading context. | 0 👍, 0 comments — fresh, high token-cost impact |

---

## 4. Key PR Progress

| # | PR | Summary | Status |
|---|----|---------|--------|
| [#86746](https://github.com/anthropics/claude-code/pull/86746) | **fix(security-guidance): preserve Python probe errors** | Fixes #86709 — `sg-python.sh` now surfaces stderr when all interpreter probes fail instead of silencing to `/dev/null`. | Open |
| [#86626](https://github.com/anthropics/claude-code/pull/86626) | **feat: add shell completions (bash, zsh, fish)** | Adds `completions/` with `claude.bash`, `_claude` (zsh), `claude.fish`, plus install instructions. Stays in sync with installed CLI. | Open |
| [#83890](https://github.com/anthropics/claude-code/pull/83890) | **Create pylint.yml** | Adds Pylint configuration for code quality enforcement. | Open |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | **add the missing source to claude code** | Long-standing PR (since Mar) to include missing source artifacts. | Open |

> Only 4 PRs updated in the last 24h — light contribution day.

---

## 5. Feature Request Trends

From the issue corpus, developers are converging on:

1. **Multi-agent observability** — #24537 (16 comments, 17 👍) requests a unified **Agent Hierarchy Dashboard** (TUI + Desktop) for real-time visualization of multi-agent workflows.
2. **Session persistence & recovery** — #86089 asks for **workflow agent session resumption** (multi-turn); #30869 (closed, 57 👍) wanted **unarchive sessions** in Desktop.
3. **Configurable memory limits** — #79217 requests making the **200-line/25KB `MEMORY.md` index cap** configurable.
4. **Browser automation support** — #11791 (16 👍) documents **Playwright/Puppeteer incompatibility** with web sandbox proxy (HTTPS CONNECT tunneling missing).
5. **Marketplace/plugin reliability** — #86809 (directory-source marketplace hooks don't run), #86818 (account-scoped Git marketplace update check fails first attempt).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Pain Point | Evidence | Frequency |
|------------|----------|-----------|
| **Model safeguard false-positives on defensive security code** | #86804, #86820, #86819 — WAF rules, credential rotation, network audits flagged | 3 issues in 24h |
| **Silent data loss / aggressive cleanup** | #86730 (58 sessions deleted), #85272 (archived Cowork projects vanish) | 2 critical data-loss reports |
| **Windows-specific regressions** | #86619 (Git Bash prompts), #86473 (ECONNRESET), #86555 (MSIX update fails), #86817 (token duplication) | 4 Windows issues |
| **Auto-compact / context window mismatches** | #85205 (150k vs 1M), #86817 (forced >1M compaction) | 2 context-management bugs |
| **Billing opacity** | #84607 (17× token cost variance), #83062 ($995 auto-recharge) | 2 billing incidents |
| **Plugin/marketplace hook failures** | #86809 (dir-source hooks dead), #86786 (macOS 26 EFAULT), #86818 (update check fails) | 3 plugin ecosystem issues |
| **Desktop app startup latency** | #76079 (~107s beachball on macOS, keychain certs block main thread) | 1 but severe UX blocker |

---

*Digest generated from github.com/anthropics/claude-code data as of 2026-08-15 00:00 UTC. Links point to live GitHub items.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-08-15

---

## 1. Today's Highlights

- **Four rapid-fire alpha releases** (0.148.0-alpha.15–18) shipped in 24 hours, signaling an active stabilization push for the next minor version.
- **Windows desktop regressions dominate**: a cluster of fresh issues reports system-wide input lag, CPU busy-loops, kernel-pool leaks, and DWM handle accumulation after the 26.810.4967 update — multiple users confirm full exit instantly restores system responsiveness.
- **macOS not spared**: persistent SQLite log churn (carried over from v0.142.0) and new reports of 100%+ CPU / 10 GB RAM spikes with frequent crashes on 26.810.41047.

---

## 2. Releases

| Version | Date | Notes |
|---------|------|-------|
| `rust-v0.148.0-alpha.18` | 2026-08-15 | Latest alpha in the 0.148 series |
| `rust-v0.148.0-alpha.17` | 2026-08-15 | |
| `rust-v0.148.0-alpha.16` | 2026-08-15 | |
| `rust-v0.148.0-alpha.15` | 2026-08-15 | |

> No changelogs attached to these alpha tags; expect a consolidated release note when 0.148.0 reaches stable.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#38547](https://github.com/openai/codex/issues/38547) | **Windows idle main-process CPU busy loop in Chrome plugin hashing** | Regression in 26.810.4967; main thread spins 100% while app is idle, no Browse tool needed. | 12 comments, 5 👍 — “entire PC stutters” |
| [#38583](https://github.com/openai/codex/issues/38583) | **System-wide mouse lag & ~10% CPU while idle (Win11 26.813.12317)** | Affects Plus/Pro users; lag persists until process tree killed. | 11 comments, 6 👍 |
| [#38554](https://github.com/openai/codex/issues/38554) | **Update makes entire PC stutter — exiting Codex fixes instantly** | Strongest user-language signal; multiple confirmations across hardware. | 8 comments, 3 👍 |
| [#25453](https://github.com/openai/codex/issues/25453) | **Windows spawns `powershell.exe` every second for process polling** | Long-standing (since May) high-CPU culprit; still open. | 26 comments, 7 👍 |
| [#29532](https://github.com/openai/codex/issues/29532) | **macOS persistent SQLite TRACE churn in `logs_2.sqlite`** | Partial fix in v0.142.0 but churn remains; disk I/O & log bloat. | 47 comments, 9 👍 |
| [#38455](https://github.com/openai/codex/issues/38455) | **ChatGPT desktop 26.810.41047 spawns Computer Use workers → V8 OOM (macOS)** | 316 threads at crash, 187 named `computer-use`; reproduces idle at 98s. | 12 comments, 4 👍 |
| [#28015](https://github.com/openai/codex/issues/28015) | **CLI false-positive cybersecurity safety check blocks repo maintenance** | Paid sessions interrupted for routine `git gc`, `npm audit fix`, etc. | 24 comments, 5 👍 |
| [#24287](https://github.com/openai/codex/issues/24287) | **Desktop UI stuck in “Thinking”; Stop fails; turn invisible after restart** | Session state corruption; blocks Pro users on M1 Max macOS. | 23 comments, 8 👍 |
| [#33192](https://github.com/openai/codex/issues/33192) | **Win10 DWM Composition handles accumulate after tool-call tasks** | Leak grows 22 handles/5 calls; never released until reboot. | 11 comments, 9 👍 |
| [#38637](https://github.com/openai/codex/issues/38637) | **New release unstable, high CPU, constant crashes on macOS** | “Almost impossible to open a long chat”; plea to revert. | 5 comments, 2 👍 |

---

## 4. Key PR Progress (Top 10 by Scope)

| # | PR | Area | Summary |
|---|----|------|---------|
| [#38684](https://github.com/openai/codex/pull/38684) | **Env attachment config** | Core/Protocol | Support pending environment attachment config; threads start non-blocking while turns wait for attachment readiness. |
| [#38682](https://github.com/openai/codex/pull/38682) | **Misalignment policy errors** | Safety/Protocol | Surface `misalignment_policy_violation` as typed, non-retryable errors with preserved upstream messages. |
| [#38681](https://github.com/openai/codex/pull/38681) | **HTTP fallback for delegated sessions** | Networking | Disable WebSocket for delegated sessions if parent already fell back to HTTP. |
| [#31471](https://github.com/openai/codex/pull/31471) | **Faster connectors: cache extraction** | Architecture | Extract apps cache into `ConnectorRuntimeManager` + immutable snapshot; scope by account/workspace. |
| [#31644](https://github.com/openai/codex/pull/31644) | **Linux sandbox DNS via managed proxy** | Security/Sandbox | Route DNS through managed proxy inside bubblewrap namespace when `enable_dns` set. |
| [#38678](https://github.com/openai/codex/pull/38678) | **Env config ownership** | Core/Protocol | Preserve attachment-owned permissions/capability roots when thread settings refresh. |
| [#38675](https://github.com/openai/codex/pull/38675) | **TUI paste-burst shortcut filtering** | CLI/TUI | Exclude Super/Hyper/Meta modified keys from paste-burst detection; flush pending text first. |
| [#38673](https://github.com/openai/codex/pull/38673) | **Per-env permission profiles** | Auth/Permissions | Resolve `permission_profile` per `EnvironmentConfig`; `Ready` envs override thread permissions. |
| [#38660](https://github.com/openai/codex/pull/38660) | **Windows sandbox deny-read enforcement** | Security/Sandbox | Preserve managed FS deny rules across all exec paths; fail closed on unsupported policies. |
| [#38649](https://github.com/openai/codex/pull/38649) | **TUI bootstrap account reuse** | CLI/Startup | Reuse login-status account response during bootstrap, avoiding duplicate RPC. |

> Most PRs above were **created and closed today** by `copyberry[bot]` — indicating automated/internal merge train for the 0.148 alpha series.

---

## 5. Feature Request Trends (from all 40 issues)

1. **Windows performance parity** — Eliminate system-wide input lag, CPU busy-loops, kernel-pool/DWM handle leaks.
2. **macOS resource discipline** — Stop SQLite churn, bound Computer Use worker spawns, cap RAM/CPU.
3. **Safety-check precision** — Reduce false positives on routine DevOps commands (`git`, `npm`, `cargo`).
4. **Session resilience** — Recover gracefully from “Thinking” hangs, crashed turns, and restart state loss.
5. **CLI reliability on Windows** — Fix blank TUI on long-thread resume, custom model metadata resolution, commit attribution.
6. **Observability** — Better diagnostics for Git safe.directory failures, sandbox policy decisions, native messaging registration.

---

## 6. Developer Pain Points (Recurring High-Frequency Frustrations)

| Pain Point | Frequency | Representative Issues |
|------------|-----------|----------------------|
| **Windows desktop makes whole OS laggy** | ★★★★★ (8+ issues in 24h) | #38547, #38583, #38554, #38546, #34158, #38669, #33382, #28855 |
| **macOS excessive CPU/RAM/crashes** | ★★★★☆ | #38455, #38468, #38637, #29532 |
| **Safety checks block legitimate work** | ★★★★☆ | #28015, (implied in CLI issues) |
| **UI/session state corruption** | ★★★★☆ | #24287, #34026, #34724, #37550 |
| **Background process pollution** | ★★★★☆ | #25453 (powershell polling), #38455 (computer-use workers), #33192 (DWM handles) |
| **CLI/TUI regressions on Windows** | ★★★☆☆ | #34724, #32349, #31619 |
| **Native messaging / Chrome backend broken** | ★★★☆☆ | #27865, #38510, #33912 |

> **Bottom line**: The 26.810 / 0.148 release train has introduced **severe Windows regressions** that break system usability, while macOS users face **resource exhaustion**. The team’s same-day PR velocity suggests a hotfix cycle is underway — watch for 0.148.0-alpha.19+ or a 26.811 desktop patch.

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-08-15

## 1. Today's Highlights
The v0.56.0 nightly release ships a test hygiene fix (vi.stubEnv migration) while the team closes a batch of SSR Agent tickets addressing subagent termination semantics, TUI hang guards, and MessageBus reliability. Open issues reveal persistent pain around agent hangs, subagent permission leaks, and Auto Memory quality — with several P1 bugs still awaiting retesting.

## 2. Releases
**v0.56.0-nightly.20260815.g2a87e7be1** — Single change: migrated `process.env` manipulation to `vi.stubEnv`/`vi.unstubAllEnvs` in a2a-server tests ([PR #28811](https://github.com/google-gemini/gemini-cli/pull/28811)). Full changelog: [compare](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260814.gc0d192452...v0.56.0).

## 3. Hot Issues (Top 10 by Signal)

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist agent hangs indefinitely** | Blocks core workflows; disabling subagents is the only workaround. | 8 👍, 8 comments — P1, needs retest |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **Subagent MAX_TURNS recovery misreported as GOAL success** | Masks real failures in eval/automation pipelines; fix merged in [#28815](https://github.com/google-gemini/gemini-cli/pull/28815). | 12 comments, 2 👍 — P1 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) **Shell execution stuck at "Waiting input" after completion** | Frequent false hang on simple commands; erodes trust in tool use. | 4 comments, 3 👍 — P1 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **Browser subagent fails on Wayland** | Linux/Wayland users cannot use browser agent; P1, needs retest. | 4 comments, 1 👍 |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) **Subagents run without permission since v0.33.0** | Security/control regression; users explicitly disabled agents. | 3 comments — P2 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) **Auto Memory retries low-signal sessions indefinitely** | Wastes quota/noise; extraction agent skips but index not updated. | 5 comments — P2 |
| [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) **400 error when >128 tools registered** | Hard limit breaks tool-heavy configs; needs smarter scoping. | 3 comments — P2 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) **Agent uses destructive git/DB commands unsafely** | Safety gap for automated workflows; requests guardrails. | 3 comments, 1 👍 — P2 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) **Robust component-level evaluations (EPIC)** | 76 behavioral evals across 6 models; foundational for regression prevention. | 7 comments — P1 |
| [#1845](https://github.com/google-gemini/gemini-cli/issues/1845) **Model switching mid-session (`/model` command)** | High user demand (6 👍); closed but signals strong feature appetite. | 1 comment, 6 👍 — P1 |

## 4. Key PR Progress (Top 10 by Impact)

| PR | Status | Summary |
|----|--------|---------|
| [#28815](https://github.com/google-gemini/gemini-cli/pull/28815) | OPEN | **Fix #22323**: Preserve original termination reason (MAX_TURNS/TIMEOUT) during subagent recovery instead of overwriting with GOAL. |
| [#28812](https://github.com/google-gemini/gemini-cli/pull/28812) | OPEN | **Fix #21477**: Add execution timeouts to `getProcessInfo()` to prevent indefinite TUI hang on bare Linux terminals. |
| [#28816](https://github.com/google-gemini/gemini-cli/pull/28816) | CLOSED | **Fix #22588**: `MessageBus.request()` now handles `publish()` rejection, eliminating 60s silent hang. |
| [#28817](https://github.com/google-gemini/gemini-cli/pull/28817) | CLOSED | **Fix #22589**: Retain executing subagent tool calls in hook state (were dropped if first-seen & no approval needed). |
| [#28813](https://github.com/google-gemini/gemini-cli/pull/28813) | OPEN | **Fix #21911**: Add `"composite": true` to `packages/cli/tsconfig.json` to unblock root build/typecheck. |
| [#20916](https://github.com/google-gemini/gemini-cli/pull/20916) | CLOSED | **Fix PTY fd leak** in `ShellExecutionService` — root cause of macOS `kern.tty.ptmx_max` exhaustion. |
| [#27154](https://github.com/google-gemini/gemini-cli/pull/27154) | CLOSED | **PTY memory leak fix**: Synchronously delete active PTY entries; avoids Promise `.then()` GC gap. |
| [#28738](https://github.com/google-gemini/gemini-cli/pull/28738) | OPEN | **Agents calling agents**: Enable subagent delegation/recursion via `tools:` frontmatter (fixes #22092). |
| [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) | CLOSED | **Settings load-order fix**: Load `.env` before expanding placeholders in settings files. |
| [#27588](https://github.com/google-gemini/gemini-cli/pull/27588) | OPEN | **WSL2 clipboard image paste**: Detect WSL → use PowerShell interop for Windows clipboard PNG save. |

## 5. Feature Request Trends
1. **Model control mid-session** — `/model` command, per-task model selection (#1845, #1852).
2. **Subagent observability** — Trajectory sharing via `/chat share` (#22598), bugreport context (#21763), self-awareness docs (#21432).
3. **AST-aware tooling** — Precise method reads, codebase mapping, reduced token noise (#22745, #22746).
4. **Auto Memory hardening** — Deterministic redaction, invalid patch quarantine, low-signal session handling (#26522, #26523, #26525).
5. **Browser agent resilience** — Profile lock recovery, Wayland support, settings.json override respect (#21983, #22232, #22267).
6. **Terminal/UX polish** — Flicker-free resize (#21924), external editor buffer corruption (#24935), `\n` escape fixes (#22466).

## 6. Developer Pain Points (Recurring)
- **Agent hangs & false success** — Generalist/subagent stalls (#21409, #22323, #25166) with misleading termination reasons.
- **Permission leaks** — Subagents activating despite disabled config (#22093) and ignoring `settings.json` (#22267).
- **Tooling friction on Windows/WSL** — `cmd.exe` escaping (#1839), ripgrep `EFTYPE` (#25378), clipboard gaps (#27588).
- **Auto Memory noise** — Indefinite retries, secret redaction after model context, silent invalid patch drops.
- **Eval scaling** — 76 behavioral tests across 6 models need component-level granularity (#24353) and deterministic steering checks (#28818).
- **Destructive action safety** — No guardrails for `git reset --force`, DB mutations (#22672).

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-08-15

## 1. Today's Highlights
Two patch releases (v1.0.80 and v1.0.81-0) shipped in the last 24 hours, both focused on **model configuration updates**. The community is actively reporting **model availability regressions**—Claude models disappearing from the catalogue despite being enabled in org settings—and **MCP OAuth failures** (Atlassian, GitLab) due to an RFC 8414 issuer mismatch introduced in v1.0.79. A critical OOM crash in autopilot mode (`Committing semi space failed`) and a BYOK prompt-caching breakage were also filed today.

---

## 2. Releases
| Version | Date | Summary |
|---------|------|---------|
| **v1.0.81-0** | 2026-08-15 | Update model configurations (canary/pre-release) |
| **v1.0.80** | 2026-08-14 | Update model configurations |

> Both releases are configuration-only; no code changes or new features. The rapid succession suggests a hotfix cycle for model-catalogue sync issues.

---

## 3. Hot Issues (Top 10 by Community Impact)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#4345](https://github.com/github/copilot-cli/issues/4345) | **Reasoning effort 'medium' not supported for claude-haiku-4.5** | Feature-flag combination (`copilot_cli_opus_medium_effort_default` + `copilot_cli_gpt_5_4_mini_for_explore`) breaks sub-agent execution. Blocks teams using mixed model fleets. | 6 comments, 4 👍, **OPEN** |
| [#4390](https://github.com/github/copilot-cli/issues/4390) | **Enabled org models missing from catalogue (Claude Sonnet 5/Opus 5, Kimi K3)** | Org-enabled Anthropic & Kimi models invisible in CLI; error: “This model is disabled by your organization.” Directly impacts enterprise adoption. | 6 comments, 4 👍, **OPEN** |
| [#4480](https://github.com/github/copilot-cli/issues/4480) | **Atlassian MCP OAuth fails with RFC 8414 issuer mismatch** | Regression from v1.0.71 → v1.0.79; blocks all Atlassian MCP server connections in CI/CD. **Closed** (fix likely in v1.0.81-0). | 4 comments, 6 👍, **CLOSED** |
| [#4422](https://github.com/github/copilot-cli/issues/4422) | **All Claude models disabled under CLI model selection** | Personal Enterprise accounts lose Claude access despite enabled settings; persists across CLI rollbacks. | 3 comments, 3 👍, **OPEN** |
| [#4439](https://github.com/github/copilot-cli/issues/4439) | **GitLab MCP OAuth metadata RFC 8414 issuer mismatch** | Same root cause as #4480 but for self-managed GitLab MCP. Blocks enterprise GitLab integrations. | 3 comments, 2 👍, **OPEN** |
| [#4306](https://github.com/github/copilot-cli/issues/4306) | **Subtasks freeze and stop responding in autopilot** | Long-running agent loops (speckit-automate) deadlock; session becomes unresponsive. Core autopilot reliability issue. | 3 comments, 2 👍, **OPEN** |
| [#2934](https://github.com/github/copilot-cli/issues/2934) | **Support protobuf OTLP export (OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf)** | OpenTelemetry exporter ignores standard env var; JSON-only export limits observability stack compatibility. **Closed** (merged). | 2 comments, 6 👍, **CLOSED** |
| [#4346](https://github.com/github/copilot-cli/issues/4346) | **MCP registry policy fetch returns 403 for Actions GITHUB_TOKEN** | Breaks non-default MCP servers in GitHub Actions when using built-in `GITHUB_TOKEN`. **Closed** (fixed). | 2 comments, 3 👍, **CLOSED** |
| [#4488](https://github.com/github/copilot-cli/issues/4488) | **Plugin updates fail with “Access is denied” when other sessions open** | File-lock contention across CLI/VS Code sessions blocks plugin updates; affects multi-window workflows. | 1 comment, 0 👍, **OPEN** (filed today) |
| [#4499](https://github.com/github/copilot-cli/issues/4499) | **v1.0.79 fatal OOM in autopilot: “Committing semi space failed”** | Host-RAM commit failure (not heap limit) at ~0.6/4.3 GB V8 heap during long autopilot runs. Critical stability blocker. | 0 comments, 0 👍, **OPEN** (filed today) |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#4497](https://github.com/github/copilot-cli/pull/4497) | Handle fork PR associations in invalid-label writer | **OPEN** | Fixes automation for fork-originated PRs where GitHub doesn’t populate PR association; uses trusted workflow-run metadata to locate the single open PR. |
| [#4496](https://github.com/github/copilot-cli/pull/4496) | Verify pull request workflow migration | **CLOSED** | Canary PR to validate migrated fork-PR automation; documentation-only, deleted after verification. |
| [#4449](https://github.com/github/copilot-cli/pull/4449) | Migrate pull request automation away from `pull_request_target` | **CLOSED** | Security hardening: replaces privileged `pull_request_target` with issue-scoped write token + no-permission `pull_request` signal for mergeable PRs. Preserves invalid-label closure behavior. |

> **Note:** All three PRs are internal automation/infrastructure changes; no user-facing features.

---

## 5. Feature Request Trends (from all Issues)

1. **Model Catalogue Sync & Visibility** — Multiple reports (#4390, #4422, #4494) of enabled models not appearing until manual cache clear; demand for automatic refresh / invalidation.
2. **MCP OAuth Standards Compliance** — RFC 8414 issuer validation breaking Atlassian/GitLab (#4480, #4439, #4490); need for configurable strictness or allow-list.
3. **Reasoning Parameter Control** — Requests for GPT-5.6 `reasoning.mode` (“pro” vs “standard”) (#4495) and Claude `reasoning.effort` support (#4345).
4. **Plugin Dependency Management** — Explicit ask for inter/intra-marketplace plugin dependency resolution (#4487).
5. **Observability Standards** — Protobuf OTLP export (#2934, now closed) signals broader push for OTel parity.

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Symptoms | Frequency |
|------|----------|-----------|
| **Model Access** | Models enabled in GitHub UI but missing in CLI; requires `copilot logout`/`login` or cache delete to refresh | High (5+ issues in 24h) |
| **MCP Authentication** | RFC 8414 issuer mismatch blocks Atlassian, GitLab, and other OAuth providers since v1.0.79 | High (3 distinct issues, 2 closed, 1 open) |
| **Autopilot Stability** | Subtask deadlocks (#4306), OOM crashes (#4499), BYOK prompt-caching breakage (#4500) | Medium (3 critical bugs filed recently) |
| **Session/State Loss** | `/restart` breaks with `-w` worktree (#4493), session+prompt lost on stop (#4477), agent not restored on resume (#4489) | Medium |
| **Permission Prompts** | `allowed_directories` ignored for shell commands (#4482), edit-permission timeouts overnight (#4486) | Medium |
| **Codespaces Bootstrapping** | Stuck on v1.0.3; `copilot update` requires `sudo` and doesn’t replace binary (#4501) | Low (new today) |
| **Desktop App** | WebView2 renderer self-aborts (STATUS_BREAKPOINT), window goes blank (#4492) | Low (new today) |

---

*Generated from github/copilot-cli data as of 2026-08-15. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI Community Digest — 2026-08-15

## 1. Today's Highlights
No new releases or merged PRs in the last 24 hours. Community focus remains on **persistent memory/cross-session context** and **multi-device session continuity**, with two long-running enhancement requests (#1283, #2269) seeing renewed discussion. A Windows shell tooling fix (#1136) was closed without merge.

## 2. Releases
*No new releases published in the last 24 hours.*

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **#1283** [Feature Request] Memory System — Persistent context across sessions | Highest-impact ask: users want automatic + manual memory (project patterns, preferences, docs) to survive session restarts. Directly addresses “painful on big projects” feedback. | 39 comments, open since Feb; active discussion 2026-08-14 |
| **#2269** [Feature Request] Remote Control / Multi-Device Session Handoff | Enables seamless workflow across laptop/web/mobile. Critical for developers who switch environments daily. | 6 comments, 1 👍; updated 2026-08-14 |
| **#1478** [Enhancement] Optimize memory layer; missing docs | User reports memory layer is opaque and undocumented (only `agent.md` visible). Shares a conjectured file-tree (`SOUL.md`, `USER.md`, `MEMORY.md`, `memory/*.md`). | 3 comments; updated 2026-08-15 |
| **#1136** [Enhancement] Shell tool: version-aware PowerShell context | Identified three critical Windows shell issues (ambiguous shell detection, missing version context, broken command generation) on Kimi K2.5 (SGLang). Closed without merge — may indicate deprioritization or duplicate. | 0 comments; closed 2026-08-14 |

## 4. Key PR Progress
*No pull requests updated in the last 24 hours.*

## 5. Feature Request Trends
1. **Persistent, structured memory** — Automatic AI-managed notes + user-defined instructions (`CLASS.md` style), with versioned daily logs and curated long-term memory (`MEMORY.md`).
2. **Session portability** — Start on one device, resume/control from another (web, mobile, second laptop) with full context intact.
3. **Transparent memory architecture** — Developers want documented file layouts, APIs to read/write memory, and visibility into what the agent stores.

## 6. Developer Pain Points
- **Context loss on large projects** — Re-explaining architecture, conventions, and decisions every session kills productivity.
- **Undocumented memory internals** — Users reverse-engineer storage paths (`~/.openclaw/workspace/…`) but lack official specs or CLI flags to manage it.
- **Windows shell fragility** — PowerShell version detection and context injection remain unreliable, degrading first-pass command success.
- **Device-switching friction** — No native handoff forces manual export/import or re-prompting when moving between machines.

---

*Data sourced from `github.com/MoonshotAI/kimi-cli` (issues updated 2026-08-14 → 2026-08-15).*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-08-15

## Today's Highlights
OpenCode's V2 development continues at high velocity with 15+ PRs merged or opened today, focusing on TUI polish, session architecture hardening, and Wayland compatibility. The community is surfacing critical usability regressions in v1.18.1 (hidden agent switching UI, broken Copilot provider) and persistent free-tier quota issues on OpenCode Zen/Go. A major V1→V2 migration data-loss issue (#42671) signals growing pains in the desktop beta transition.

---

## Releases
**No new releases in the last 24 hours.**

---

## Hot Issues (Top 10 by Impact & Community Signal)

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| **[#36997](https://github.com/anomalyco/opencode/issues/36997)** Desktop v1.18.1 hides Plan/Build agent toggle | Regression in new layout (`newLayoutDesigns: true`) removes visible mode indicator; Tab key navigation also broken. Blocks core workflow for desktop users. | 6 👍, 12 comments — high engagement since Jul 15 |
| **[#42013](https://github.com/anomalyco/opencode/issues/42013)** Free usage exceeded on OpenCode Zen (DeepSeek V4 Flash) | Users hit "subscribe to Go" error after minimal usage; suggests quota accounting bug or overly aggressive limits. | 4 👍, 10 comments — active discussion Aug 12–15 |
| **[#42083](https://github.com/anomalyco/opencode/issues/42083)** GitHub Copilot provider shows zero models | Auth succeeds but `opencode models github-copilot` returns "Provider not found"; `/models` empty in TUI. Breaks Copilot integration entirely. | 2 👍, 8 comments — technical deep-dive in thread |
| **[#25129](https://github.com/anomalyco/opencode/issues/25129)** Thinking mode infinite repetition loop (Qwen 3.6 Pro) | Model outputs `!!!!!!!!!!` or `...` indefinitely instead of reasoning; forces model switch. Long-standing (Apr 30) but resurfaced. | 4 👍, 7 comments — model-specific but severe |
| **[#42671](https://github.com/anomalyco/opencode/issues/42671)** V1→V2 migration loses/hides history | Migrator 500s on corrupt rows, undecodable third-party sessions, >9k-message imports fail silently, project picker hidden. Data-loss risk for beta adopters. | 0 👍, 1 comment — critical for V2 credibility |
| **[#42668](https://github.com/anomalyco/opencode/issues/42668)** Web sidebar shows "no sessions" on Windows | API returns sessions but UI doesn't render; TUI sessions invisible in web, web sessions vanish on F5. Platform-specific sync bug. | 0 👍, 2 comments — fresh (Aug 15) |
| **[#41518](https://github.com/anomalyco/opencode/issues/41518)** gpt-5.6-luna 403 via OpenCode Go relay | Regional availability error on paid relay; blocks access to specific model. | 0 👍, 6 comments — Chinese user base affected |
| **[#42385](https://github.com/anomalyco/opencode/issues/42385)** DeepSeek V4 Flash Free returns FreeUsageLimitError | Consistent rejection on OpenAI-compatible API despite valid auth. Related to #42013. | 0 👍, 3 comments |
| **[#37718](https://github.com/anomalyco/opencode/issues/37718)** Desktop WSL sidecar fails with `ServeError` (mirrored networking) | WSL2 mirrored networking breaks managed server startup; only generic error surfaced. | 1 👍, 2 comments — since Jul 19 |
| **[#42679](https://github.com/anomalyco/opencode/issues/42679)** Desktop V2 window never shows on Wayland | Electron 38+ doesn't fire `ready-to-show` on Wayland; blocks Linux Wayland users entirely. PR #42681 opened as fix. | 0 👍, 0 comments — fresh, blocker for Wayland |

---

## Key PR Progress (Top 10 by Technical Significance)

| PR | Type | Summary |
|----|------|---------|
| **[#42684](https://github.com/anomalyco/opencode/pull/42684)** | Bug Fix | Fixes 48-bit timestamp overflow in `MessageV2.latest()` — string comparison failed after 2023 wraparound, could cause premature agent loop exit. |
| **[#42681](https://github.com/anomalyco/opencode/pull/42681)** | Bug Fix | Wayland fallback: shows window on `did-finish-load` when `ready-to-show` never fires (Electron 38+). Closes #42679. |
| **[#42680](https://github.com/anomalyco/opencode/pull/42680)** | Refactor | Unifies durable Session steps and transient `session.generate` through single `SessionModelRequest.prepare` — consistent context hooks, tool reconciliation, image bounds. |
| **[#42682](https://github.com/anomalyco/opencode/pull/42682)** | Bug Fix | `session.interrupt?continue=true` now resumes only steering input; queued work stays parked until full wake. Prevents accidental work execution. |
| **[#42667](https://github.com/anomalyco/opencode/pull/42667)** | Refactor | Unifies patch tool path/permission resolution with `LocationMutation` service (used by write/edit). Fixes nested Location edge cases. |
| **[#42685](https://github.com/anomalyco/opencode/pull/42685)** | Bug Fix | Re-queries terminal palette on renderer focus for `theme: "system"` — fixes stale themes in multiplexers (herdr) where OSC 997 reports don't arrive. |
| **[#42662](https://github.com/anomalyco/opencode/pull/42662)** | Bug Fix | MCP server config now fails loudly if `type` field missing (common in Claude Code configs). Closes #41229. |
| **[#42663](https://github.com/anomalyco/opencode/pull/42663)** | Feature | Persists web search provider selection in file-backed config (not KV). Adds fixed provider list. |
| **[#42649](https://github.com/anomalyco/opencode/pull/42649)** | Docs | Refreshes V2 Session architecture docs: generic inbox, write-ahead claims, bounded restart recovery, retry behavior, frozen chronological instructions. |
| **[#27554](https://github.com/anomalyco/opencode/pull/27554)** | Feature | Local LAN provider discovery + auto-model discovery via mDNS/UPnP/SSDP + port scan. Closes #6231, #27553. Long-running (May 14). |

---

## Feature Request Trends
1. **Permission/approval granularity** — `/approve on|off` runtime toggle (#41909), inspired by Claude Code; users want per-session control without restart.
2. **Crash-resumable sessions** — Pluggable execution engine to survive daemon/host death mid-turn (#42678); session state persistence is a top ask.
3. **Provider ecosystem expansion** — Nara router (#42664), local LAN discovery (#27554), more free-tier models/credits (#42661).
4. **Subagent orchestration** — TUI-level prompt/steer for child sessions (#42670); moving beyond read-only inspection.
5. **Migration tooling** — V1→V2 history import needs robustness (corrupt-row handling, large-session support, visible project picker) (#42671).

---

## Developer Pain Points
- **Free-tier quotas are opaque and brittle** — Multiple reports of "Free usage exceeded" after minimal use (DeepSeek V4 Flash, OpenCode Go ~$32/mo limit). No visibility into quota accounting.
- **Desktop V1 regressions in v1.18.1** — Hidden agent switcher, broken Tab navigation, Copilot provider invisible. Users feel core UI degraded.
- **V2 Desktop beta instability** — Wayland window invisible, Git project detection desync, session list sync broken on Windows, migration data loss.
- **Model provider fragility** — Copilot shows zero models; gpt-5.6-luna 403 on relay; thinking mode loops on specific models. Provider abstraction leaks.
- **WSL/networking edge cases** — Mirrored networking breaks sidecar; no clear error messaging or fallback.
- **Session durability** — Headless `opencode run` saves empty assistant messages (tokens counted, zero parts) and exits 0 silently (#42677).

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-08-15

---

## 1. Today's Highlights

Pi released **v0.84.2** with fullscreen transcript search and configurable default startup tools. The community is heavily focused on **Windows/WSL compatibility** (27-comment discussion on Windows strategy), **TUI performance** (core-pinning during streaming), and **provider authentication reliability** (GitHub Copilot 429s, Anthropic OAuth crashes). Over 30 issues and 20 PRs moved in the last 24 hours, signaling rapid iteration across providers, terminal rendering, and session management.

---

## 2. Releases

### v0.84.2
- **Fullscreen transcript search** — Search and navigate matches in fullscreen mode ([docs](https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/keybindings.md#tui-fullscreen-viewport)).
- **Configurable default tools** — Choose which tools are enabled at startup.

---

## 3. Hot Issues (Top 10 by engagement & impact)

| # | Title | Status | Why It Matters |
|---|-------|--------|----------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows strategy: how do you use Pi on Windows?** | OPEN (27 💬, 1 👍) | Largest open discussion; defines where core invests vs. delegates (WSL, Git Bash, native, sbx). |
| [#6187](https://github.com/earendil-works/pi/issues/6187) | **Pi login hangs in WSL after GitHub Copilot device auth** | CLOSED (26 💬) | Blocked WSL users; fixed in recent releases but resurfaced in #8121. |
| [#5223](https://github.com/earendil-works/pi/issues/5223) | **Anthropic provider modifies thinking blocks → 400 with Opus 4.8** | CLOSED (17 💬, 6 👍) | Broke multi-turn conversations with adaptive thinking; high user impact. |
| [#6665](https://github.com/earendil-works/pi/issues/6665) | **TUI pins a full core while streaming (uncached Intl.Segmenter + per-chunk Markdown rebuild)** | OPEN, inprogress (12 💬, 3 👍) | Major perf regression; affects all long sessions, even `pi -ne`. |
| [#7850](https://github.com/earendil-works/pi/issues/7850) | **GitHub Copilot login fails with 429 for orgs with 20+ models** | CLOSED (9 💬, 7 👍) | Rate-limiting during model enumeration; fixed in v0.84.2 but users report persistence (#8121). |
| [#5023](https://github.com/earendil-works/pi/issues/5023) | **Terminal randomly scrolls to buffer start** | CLOSED (12 💬, 2 👍) | UX disruption during model output; likely TUI renderer race. |
| [#7787](https://github.com/earendil-works/pi/issues/7787) | **Bash PI_* guideline triggers unnecessary `env` calls** | OPEN (3 💬) | Models misinterpret guideline as startup task, wasting tokens & prompting permissions. |
| [#8047](https://github.com/earendil-works/pi/issues/8047) | **Pi Server tests fail to bind Unix sockets on Windows** | OPEN (3 💬) | Blocks CI/test parity on Windows; 31 test failures. |
| [#7724](https://github.com/earendil-works/pi/issues/7724) | **Cold restore replays overflow assistant removed by live recovery** | OPEN (2 💬) | Session history corruption after compaction retry; breaks context integrity. |
| [#8125](https://github.com/earendil-works/pi/issues/8125) | **openai-codex: transient WebSocket failure pins session to SSE** | CLOSED (2 💬) | Fallback logic lacks recovery; cache-read benefits lost permanently. |

---

## 4. Key PR Progress (Top 10 by significance)

| # | Title | Status | Summary |
|---|-------|--------|---------|
| [#8149](https://github.com/earendil-works/pi/pull/8149) | fix(ai): omit invalid OpenAI session header | CLOSED (today) | Removes `session_id` HTTP header (underscore) that Envoy/proxies reject with 400. |
| [#8148](https://github.com/earendil-works/pi/pull/8148) | fix(coding-agent): scope bash PI_* guideline to session questions | CLOSED | Fixes #7787; guideline now only injected when user asks about session/model. |
| [#8146](https://github.com/earendil-works/pi/pull/8146) | fix(ai): cap Baseten DeepSeek V4 Flash output at 384k tokens | CLOSED | Models.dev overreports 1M limit; Baseten enforces 384k. Prevents 400 errors. |
| [#8143](https://github.com/earendil-works/pi/pull/8143) | perf(tui): window fullscreen transcripts | CLOSED | Implements v0.84.2 fullscreen search; viewport-only rendering with exact block heights. |
| [#8139](https://github.com/earendil-works/pi/pull/8139) | feat(ai): add ChatGPT OAuth image generation | CLOSED | Native image gen/edit via ChatGPT entitlement; reuses Codex OAuth + Responses API. |
| [#8124](https://github.com/earendil-works/pi/pull/8124) | feat(ai): route xAI models through Responses, default Grok 4.6 | OPEN | Switches xAI to Responses API, adds UA, updates default model. |
| [#8120](https://github.com/earendil-works/pi/pull/8120) | feat(coding-agent): add experimental append compaction | OPEN | `PI_EXPERIMENTAL=1` enables prefix-reuse compaction for prompt-cache preservation. |
| [#8119](https://github.com/earendil-works/pi/pull/8119) | fix: track Kimi cached tokens | OPEN | Parses top-level `usage.cached_tokens` as cache-read input (Kimi OpenAI-compat). |
| [#8012](https://github.com/earendil-works/pi/pull/8012) | fix: dont load root mds as skills in settings | OPEN | Stops `README.md`/`AGENTS.md` from being parsed as broken skills. |
| [#8110](https://github.com/earendil-works/pi/pull/8110) | fix(tui): route selection copy through host clipboard | CLOSED | Replaces bare OSC 52 with host clipboard API; fixes “Copied!” false positive on macOS/GNOME/tmux. |

---

## 5. Feature Request Trends

1. **Windows-first parity** — Native bash detection, Unix socket tests, WSL auth reliability (#7547, #8047, #8108).
2. **Provider ecosystem expansion** — New providers in PRs: Anthropic Vertex (#5262), Bedrock Mantle (#6216), SiliconFlow (#8113), xAI Responses (#8124), Kimi cached tokens (#8119), ChatGPT image gen (#8139), Alibaba Bailian pay-as-you-go (#8122), OpenAI Daybreak (#8126).
3. **Compaction flexibility** — Per-model profiles (#8133), experimental append mode (#8120), compaction settings via CLI/env (#8114).
4. **TUI/UX polish** — Autocomplete position (#8132), skill autocomplete mid-prompt (#8144), long-read preview (#8141), fullscreen transcript search (shipped).
5. **Scriptability/CI** — Zero-config CLI/ENV usage for OpenAI-compat APIs (#8114), Docker sbx sandbox support (#8127).
6. **Observability** — Cache-token tracking (Kimi, OpenAI), retry classification for transient errors (#8138).

---

## 6. Developer Pain Points

| Area | Recurring Themes |
|------|------------------|
| **Windows/WSL** | Bash detection, Unix socket permissions, Copilot device-auth hang, test suite failures. |
| **Auth & Rate Limits** | GitHub Copilot 429s on large orgs, Anthropic OAuth refresh crash (undefined signal), openai-codex SSE pinning. |
| **TUI Performance** | 100% core usage during streaming (uncached grapheme segmentation, per-chunk Markdown rebuild). |
| **Provider Quirks** | Thinking-block mutation (Anthropic), cached-token placement (Kimi, OpenAI), max-output mismatches (Baseten), null assistant content rejection (gateways). |
| **Session/Context Integrity** | Cold-restore replays truncated assistant messages, compaction history divergence. |
| **Extension/Config Friction** | Root markdown files misloaded as skills, flag type coercion bugs, PI_* env guideline noise. |
| **Clipboard Reliability** | OSC 52 ignored by common terminals → false “Copied!” feedback. |

---

*Generated from `earendil-works/pi` GitHub data (releases, issues, PRs updated 2026-08-14 → 2026-08-15).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-08-15

---

## 1. Today's Highlights

The review system received a major architectural upgrade with **incremental, content-anchored review rounds** that survive rebases and enable resumable PR reviews (`#9092`, `#9190`, `#9191`). Web Shell gained **workspace file uploads via drag-and-drop** with progress tracking (`#8874`). A **deterministic flakiness gate** was added to sandboxed verification, re-running modified unit tests 5× by default to catch flaky tests before merge (`#9130`).

---

## 2. Releases

| Version | Type | Key Changes |
|---------|------|-------------|
| **v0.21.12** | Stable | Web Shell file uploads (drag-and-drop/@ panel) with progress; autofix diff growth brake to limit review scope expansion |
| **v0.21.12-preview.4** | Preview | Preserves standalone session target; workspace file uploads |
| **v0.21.12-preview.3** | Preview | Same as preview.4 |
| **v0.21.11-nightly.20260815** | Nightly | Autofix: deny-by-default footprint gate & positional window censuses |
| **DSW/EAS/Terminal-Bench E2E** | Validation | Full end-to-end pipeline validation against SWE-bench Verified (1/1 resolved) and Terminal-Bench 2.0 (89 tasks) |

> **Note**: v0.21.12 is the latest stable release. Nightly and preview builds include incremental review groundwork not yet in stable.

---

## 3. Hot Issues

| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| **[#6806](https://github.com/QwenLM/qwen-code/issues/6806)** Status line context % stale after `/compress` | UX regression: users can't trust footer token count after compression until next model call | 5 comments, P2, needs info |
| **[#9026](https://github.com/QwenLM/qwen-code/issues/9026)** `NO_TOOL_RESULT_PROGRESS` hard-fails headless runs | Blocks CI/automation when model ends turn quietly after tool result; `InvalidStreamError` surfaced from core | 4 comments, P2, core/non-interactive |
| **[#9037](https://github.com/QwenLM/qwen-code/issues/9037)** `/statusline` dialog clipped in short terminals | TUI accessibility: preset dialog exceeds vertical space, hides options, blocks keyboard navigation | 3 comments, P2, UI/CLI |
| **[#9197](https://github.com/QwenLM/qwen-code/issues/9197)** Add Kimi (Moonshot AI) as built-in `/auth` provider | Reduces friction for Moonshot users; API is OpenAI-compatible, just needs preset (baseUrl, model list) | 2 comments, P3, auth/roadmap |
| **[#9195](https://github.com/QwenLM/qwen-code/issues/9195)** Default-off experimental TUI visual refresh | Opt-in modernized UI inspired by Gemini CLI; preserves Qwen identity & compact semantics | 2 comments, P3, needs discussion |
| **[#8608](https://github.com/QwenLM/qwen-code/issues/8608)** Perf: avoid repeated work for inline images | Follow-up to #8305; negative cache for failed PNG decodes, stable image sizing to prevent layout jumps | 4 comments, P3, perf/rendering |
| **[#7167](https://github.com/QwenLM/qwen-code/issues/7167)** Fleet Shepherd Dashboard | Auto-maintained fleet health dashboard; shows PR scan status, syncs, dispatches | 3 comments, CI/CD, bot-maintained |

---

## 4. Key PR Progress

| PR | Area | Summary |
|----|------|---------|
| **[#9092](https://github.com/QwenLM/qwen-code/pull/9092)** | Review | **Resume interrupted PR review from on-disk state** — `fetch-pr --resume` validates prior report, worktree, diff hash |
| **[#9190](https://github.com/QwenLM/qwen-code/pull/9190)** | Review | **Content-anchored incremental rounds** for local review-fix loop — per-file content verdicts survive rebases |
| **[#9191](https://github.com/QwenLM/qwen-code/pull/9191)** | Review | **Transfer per-file verdicts across rebases** — anchors to `(oldPath, oldHash) → (newPath, newHash)` pairs |
| **[#9188](https://github.com/QwenLM/qwen-code/pull/9188)** | Review | **Deterministic incremental plans** — widens import hop by one, replaces improvised interdiff re-planning |
| **[#9153](https://github.com/QwenLM/qwen-code/pull/9153)** | Review | **Wire `--resume` through `/review`, `review run`, CI retry** — gated to PR targets only |
| **[#9118](https://github.com/QwenLM/qwen-code/pull/9118)** | Review | **Round-aware convergence posture** — raises posting bar each round so review→fix→re-review loop converges |
| **[#9130](https://github.com/QwenLM/qwen-code/pull/9130)** | CI/Testing | **Deterministic flakiness gate** — re-runs added/modified unit tests N× (default 5) in sandboxed verification |
| **[#9163](https://github.com/QwenLM/qwen-code/pull/9163)** | Security | **Confine ledger/evidence reads to contained regular files** — `O_NOFOLLOW` + `fstat` + single-read primitive |
| **[#8332](https://github.com/QwenLM/qwen-code/pull/8332)** | Core | **Audio bridge for attachments** — transcribes via batch voice model when primary model lacks audio support |
| **[#8707](https://github.com/QwenLM/qwen-code/pull/8707)** | Integration | **Qwen WebBridge** — direct browser control from `qwen serve` to Chrome extension, 17-action surface |
| **[#8529](https://github.com/QwenLM/qwen-code/pull/8529)** | Core | **Resolve model modalities from API metadata** — uses models.dev, disk cache, background refresh |
| **[#9167](https://github.com/QwenLM/qwen-code/pull/9167)** | Integration | **DingTalk outbound file delivery** — validates, uploads via media API, sends native file message |

---

## 5. Feature Request Trends

| Direction | Evidence |
|-----------|----------|
| **Third-party provider presets in `/auth`** | `#9197` (Kimi/Moonshot), follows DeepSeek, Grok, MiniMax, Z.AI, ModelScope |
| **TUI/UX modernization (opt-in)** | `#9195` experimental visual refresh; `#9037` statusline clipping fix |
| **Headless/CI robustness** | `#9026` stream error handling; `#9130` flakiness gate; `#8938` reject placeholder responses |
| **Review workflow maturity** | 8+ PRs on incremental, resumable, convergent review; content-anchored verdicts |
| **Multimodal input bridges** | `#8332` audio bridge; `#8529` modality resolution from metadata |
| **Platform integrations** | `#8707` Chrome WebBridge; `#9167` DingTalk file delivery |

---

## 6. Developer Pain Points

| Pain Point | Frequency | Representative Items |
|------------|-----------|----------------------|
| **Headless/non-interactive fragility** | High | `#9026` hard-fail on quiet model turn; `#8938` upstream placeholder responses; `#9100` anchor validation |
| **TUI rendering in constrained terminals** | Medium | `#9037` statusline clipping; `#9195` visual refresh request |
| **Token/context visibility accuracy** | Medium | `#6806` stale % after compression; status line trust issues |
| **Review loop token burn** | High | `#9190` full re-review each fix round; `#9118` widening diff per round |
| **Flaky tests blocking merges** | Medium | `#9130` flakiness gate added to verification lane |
| **Large file/image rendering performance** | Low | `#8608` repeated PNG decode work, layout jumps |

---

*Generated from `QwenLM/qwen-code` GitHub data (releases, issues, PRs updated 2026-08-14 → 2026-08-15).*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI (CodeWhale) Community Digest — 2026-08-15

---

## 1. Today's Highlights
**v0.9.8 shipped** with the flagship change: **CodeWhale** is now the official product name from Shannon Labs, and the legacy `deepseek-tui` npm package is deprecated. The release also lands first-class local **DS4 (DwarfStar) support** for DeepSeek V4 Flash/Pro, a **model-guardian tier** for Auto-Review, and a batch of critical fixes for session-index data loss, webhook panics, and CI regressions. Meanwhile, the tracker shows **v0.9.5 milestone work** underway and a **P0 web UI audit** in progress.

---

## 2. Releases
| Version | Key Changes |
|---------|-------------|
| **v0.9.8** | • Product rebrand: `codewhale` CLI, npm package, and assets are lowercase identifiers; `deepseek-tui` deprecated.<br>• First-class **DS4 local route** (`/setup provider ds4`) for keyless DeepSeek V4 Flash/Pro.<br>• **Auto-Review v2**: deterministic floor + model-guardian escalation (Codex/Kimi semantics).<br>• Fixes: session-index write serialization (#5382), webhook client panic (#5381), provider-count & thinking-ladder test pins (#5384, #5378), sub-agent token receipts (#5366), Moonshot schema degradation (#5369).<br>• Known flakes tracked in #5355 (parallel-load, config fixtures). |

[Release v0.9.8](https://github.com/Hmbown/CodeWhale/releases/tag/v0.9.8)

---

## 3. Hot Issues (10 Noteworthy)

| # | Title | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#3192](https://github.com/Hmbown/CodeWhale/issues/3192) | List on **agentclientprotocol/registry** for Zed install | Enables one-click Zed integration; strategic distribution channel. | 13 comments, open since Jun |
| [#1004](https://github.com/Hmbown/CodeWhale/issues/1004) | **`/dryrun`** — preview next chat completion request | Critical for V4 Pro users iterating on long contexts; avoids costly blind sends. | 9 comments, enhancement |
| [#5324](https://github.com/Hmbown/CodeWhale/issues/5324) | Simplify **32-field agent tool schema** | Models error on the massive schema; blocks reliable tool calling. | 8 comments, author=Hmbown |
| [#5374](https://github.com/Hmbown/CodeWhale/issues/5374) | Agent text **corrupted on macOS** (rendering garbage) | Visual regression making output unreadable; affects core UX. | 4 comments, recent |
| [#5322](https://github.com/Hmbown/CodeWhale/issues/5322) | Output area **doesn’t fill wide terminals** (regression from v0.8.65) | Wasted whitespace on ultra-wide monitors; worked in v0.8. | 3 comments |
| [#5340](https://github.com/Hmbown/CodeWhale/issues/5340) | `doctor` **stuck on `first-run`/`update checkpoint`** after v0.9.4→v0.9.6 | Upgrade path broken; setup checklist never completes. | 3 comments |
| [#5355](https://github.com/Hmbown/CodeWhale/issues/5355) | **v0.9.8 known issues**: parallel-load & config-fixture flakes | Release gate flakes carried forward; tracking for stabilization. | 2 comments, author=Hmbown |
| [#5053](https://github.com/Hmbown/CodeWhale/issues/5053) | TUI **update notice + one-chord update-and-relaunch** | CLI updater exists but TUI has no proactive check; UX gap. | 2 comments, author=Hmbown |
| [#5350](https://github.com/Hmbown/CodeWhale/issues/5350) | **Simplify third-party model config** with pre-built templates | Manual Base URL/model/key entry + `not checked` cache failures; high friction. | 2 comments, bilingual |
| [#5311](https://github.com/Hmbown/CodeWhale/issues/5311) | **Kimi-level plugin system & federated marketplaces** | Current plugin foundation strong but incomplete; marketplace vision. | 1 comment, author=Hmbown |

---

## 4. Key PR Progress (10 Important)

| # | Title | Type | Impact |
|---|-------|------|--------|
| [#5365](https://github.com/Hmbown/CodeWhale/pull/5365) | `feat(provider): add first-class local DS4 setup` | Feature | Keyless DS4 loopback preset; reuses OpenAI-compatible transport. |
| [#5353](https://github.com/Hmbown/CodeWhale/pull/5353) | `feat(tui): model guardian tier for Auto-Review (v0.9.8)` | Feature | Two-layer Auto-Review: deterministic floor + model-guardian escalation. |
| [#5382](https://github.com/Hmbown/CodeWhale/pull/5382) | `fix(state): serialize session-index writes to prevent silent data loss` | Bugfix | Serializes JSONL append + compact under `Arc<Mutex<Connection>>`; closes #5380. |
| [#5381](https://github.com/Hmbown/CodeWhale/pull/5381) | `fix(hooks): do not panic when webhook HTTP client fails to build` | Bugfix | Replaces `.expect()` with graceful error; closes #5379. |
| [#5339](https://github.com/Hmbown/CodeWhale/pull/5339) | `fix(engine): suppress child-owned shell completions` | Bugfix | Filters child background completions from parent stream; regression test added. |
| [#5369](https://github.com/Hmbown/CodeWhale/pull/5369) | `fix(tools): degrade Moonshot schemas instead of refusing conditionals` | Bugfix | Schema slice for #5324; avoids hard failure on unsupported conditionals. |
| [#5384](https://github.com/Hmbown/CodeWhale/pull/5384) | `test(cli): re-pin provider-count assertions to v0.9.8 registry` | Test | Updates 43→45 / 38→40 counts; unblocks CI (closes #5383). |
| [#5378](https://github.com/Hmbown/CodeWhale/pull/5378) | `test(tui): re-pin thinking-ladder assertions` | Test | Fixes 9 macOS/Windows failures from pre-ladder vocabulary (closes #5377). |
| [#5376](https://github.com/Hmbown/CodeWhale/pull/5376) | `fix(tui): keep internal runtime events out of session peek` | Bugfix | Prevents projection/peek noise; improves session inspection fidelity. |
| [#5368](https://github.com/Hmbown/CodeWhale/pull/5368) | `fix(tui): confine unguarded tests to isolated state root` | Test | Fixes 4 flaky tests via lock-holder trust hole, temp-dir isolation, and prefs mocking. |

---

## 5. Feature Request Trends
1. **Plugin ecosystem maturation** — Kimi-style plugin system, federated marketplaces, immutable workspace registries (#5311).
2. **Third-party provider DX** — Pre-built templates (OpenCode Zen/Go, Agnes, Sensenova), embedded docs, “test connection” button, cache fixes (#5350).
3. **Editor/IDE integration** — Agent Client Protocol registry listing for Zed, VS Code, etc. (#3192); unofficial extension trademark concerns (#2327).
4. **Input flexibility** — Multi-line mode (Enter= newline, Shift+Enter=send) or fully customizable send shortcuts (#5345).
5. **Observability & debugging** — `/dryrun` preview (#1004), sub-agent model/role/type visibility (#5371, #5366), token receipts live updates.
6. **Local-first models** — DS4/DwarfStar as a first-class keyless route (#5363, #5365).
7. **Seamless updates** — TUI update notice + one-chord update-and-relaunch (#5053).
8. **Internationalization** — Clickable controls broken on non-English routes (#5290).
9. **Wide-terminal support** — Output area must expand to fill width (#5322).
10. **Reasoning control surfaces** — DS4-specific DeepSeek reasoning controls, thinking-ladder vocabulary (#5377).

---

## 6. Developer Pain Points
| Pain Point | Evidence |
|------------|----------|
| **v0.9.x regressions** | Wide-terminal output cap (#5322), `doctor` upgrade checkpoint stuck (#5340), output-token ceiling clamped below catalog limit (#5373), sub-agent token receipts stale (#5366). |
| **Over-complex agent tool schema** | 32-property JSON schema with 8 actions + aliases causes model errors (#5324); Moonshot conditional refusal (#5369). |
| **Sub-agent debugging blind spots** | Generic “Agent N” labels, invisible model/role/type even on click (#5371), stale write-claims from closed sessions block new agents (#5372). |
| **macOS text rendering corruption** | Agent output shows garbage characters across the board (#5374). |
| **Third-party provider config friction** | Manual Base URL/model/key entry, `not checked`/`cache failed` states, no templates or test button (#5350). |
| **Silent data loss** | Concurrent `StateStore` clones race on `session_index.jsonl` compact/rename (#5380). |
| **CI instability** | Provider-count assertions (#5383), thinking-ladder vocab (#5377), parallel-load flakes (#535

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*