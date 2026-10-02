# AI CLI Tools Community Digest 2026-10-02

> Generated: 2026-10-02 05:15 UTC | Tools covered: 10

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

# Cross-Tool Comparison Report: AI CLI Tools Ecosystem (2026-10-02)

---

## 1. Ecosystem Overview

The AI CLI landscape is bifurcating into **two strategic tiers**: (1) **platform-integrated tools** (Claude Code, Codex, Copilot CLI, Gemini CLI, Qwen Code) backed by major model providers, investing heavily in managed session runtimes, enterprise governance, and cross-surface parity; and (2) **community/独立 tools** (OpenCode, Pi, DeepSeek TUI) prioritizing local-first extensibility, TUI polish, and provider-agnostic architectures. All tools are converging on **session durability**, **agent delegation reliability**, and **Windows/macOS platform parity** as table-stakes requirements. The dominant architectural pattern is **decoupling model inference from tool execution environments** (managed agents, runtime workers, sandboxed sessions), with plugin/mod systems emerging as the primary extensibility vector.

---

## 2. Activity Comparison

| Tool | Issues (Hot) | PRs (Key) | Release Status | Notable Velocity Signal |
|------|--------------|-----------|----------------|-------------------------|
| **Claude Code** | 10 (top: #91870 Mods design, 230 💬) | 5 (Mods stabilization, diff UX) | **v2.1.287** shipped (Mods + "You Should Know" mod) | High — major plugin architecture launch, 230-comment design debate |
| **OpenAI Codex** | 10 (top: #9203 `/undo`, 466 👍) | 10 (managed worktrees, streaming, gRPC cloud client) | **0.160.0 stable** + **0.162.0-alpha.1→.3** rapid iteration | Very high — daily alpha cadence, but Windows regressions mounting |
| **Gemini CLI** | 10 (top: #22323 subagent MAX_TURNS, #21409 hangs) | 10 (Decision Gate router, security fixes, session resume) | **v0.64.0-nightly** (append-only delta patching, atomic persistence) | High — nightly cadence, security-focused, subagent correctness push |
| **GitHub Copilot CLI** | 10 (top: #953 OAuth scopes, #4998 macOS reboot breakage) | 1 (README model sync) | **3 patches in 24h** (v1.0.92-0, 91, 91-1) | Moderate — patch velocity high, but enterprise blockers persist |
| **Kimi Code CLI** | 0 | 0 | None | **Inactive** — no 24h activity |
| **OpenCode** | 10 (top: #11865 subagent hangs, 22 👍) | 10 (TUI footer, Cohere provider, stream guards) | None | High — stream reliability sprint, native provider expansion |
| **Pi** | 10 (top: #5653 shrinkwrap, #10031 ESC hang) | 10 (Bedrock pricing, Azure Foundry, artifact validation) | **v1.0.0** (fullscreen TUI default, leaner agent) | High — 1.0 milestone, but shrinkwrap debt & fullscreen regressions |
| **Qwen Code** | 8 (top: #12380 Managed Agent dual-path, 40 💬) | 10 (M5a runtime worker, G3 harness, W1b recovery, Windows clipboard) | **v0.24.7-nightly** | Very high — deep architectural investment in managed agent platform |
| **DeepSeek TUI** | 5 (top: #6309 YOLO mode, #6804 Chinese localization) | 10 (v0.10.1 wave 2, multi-account auth, plugin OAuth) | None (v0.10.1 integration wave) | Moderate — community-driven localization, plugin extensibility focus |
| **Grok Build** | 0 | 0 | None | **Inactive** — no 24h activity |

---

## 3. Shared Feature Directions (Cross-Tool Requirements)

| Requirement | Tools Affected | Specific Needs |
|-------------|----------------|----------------|
| **Session/State Durability & Recovery** | Claude Code (#54750, #93483), Codex (#47196), Gemini CLI (#29490, #29368), Copilot CLI (#5023), Qwen Code (#13138, #13124), OpenCode (#50574) | Lossless export/import, offline recovery bundles, atomic persistence, compaction-before-400, session resume without corruption |
| **Agent/Subagent Reliability & Observability** | Claude Code (#91899, #98189), Codex (#49458, #49729), Gemini CLI (#22323, #21409), Copilot CLI (#4911), Qwen Code (#13167), OpenCode (#11865, #37580) | Timeout/retry bounds, max-turn enforcement, tool parity across delegation paths, cancellation propagation, trajectory visibility |
| **Windows/macOS Platform Parity** | Claude Code (#85856), Codex (#48938, #48906, #49731), Gemini CLI (#29480, #21983), Copilot CLI (#4998, #3171), Qwen Code (#13197), Pi (#10250) | Git Bash backslash handling, WSL exec, renderer stability, switcher integration, tmux compatibility, clipboard/CRLF fixes |
| **Enterprise Governance & Compliance** | Copilot CLI (#953, #4959, #4938, #4989), Claude Code (#84862, #92215), Codex (#34859), Qwen Code (managed agent profiles) | Per-repo OAuth scopes, policy-enforced model selection, data residency routing, MCP allow-list matching, Passkey/WebAuthn |
| **MCP / Tool Ecosystem Robustness** | Claude Code (#92215, #82571, #88128), Codex (#34859, #4811), Copilot CLI (#4851, #4989), Gemini CLI (#29488), OpenCode (native providers) | OAuth flow reliability, third-party channel plugins, STDIO reload, provider cost accuracy, schema validation |
| **Token/Context Cost Governance** | Qwen Code (#12028), Pi (#9980, #10286), Gemini CLI (Flash-Lite thinkingBudget), Claude Code (artifact version pinning) | Non-conversation context accounting, provider-reported billing vs. catalog estimates, long-context tier pricing, thinking budget controls |
| **TUI/UX Polish for Production Use** | Pi (#10250, #10319, #10314), OpenCode (#51563), DeepSeek TUI (#6814), Codex (#50109), Gemini CLI (#29476) | Fullscreen stability, keybinding ergonomics, component galleries, scroll/composer bounds, image rendering, Enter-key hangs |

---

## 4. Differentiation Analysis

| Dimension | Platform-Integrated Tools | Community/Independent Tools |
|-----------|---------------------------|----------------------------|
| **Primary Leverage** | Model-provider integration (auth, billing, model access, cloud runtimes) | Provider-agnostic, local-first, extensible runtime |
| **Architectural Bet** | **Managed agent platforms**: hosted sessions, runtime workers, workspace bindings, WebSocket stability (Claude Mods, Codex Dots, Qwen Managed Agent, Copilot Sandbox, Gemini Decision Gate) | **Composable local runtime**: native providers (OpenCode Cohere, Pi Cloudflare Clef), plugin OAuth declarations (DeepSeek TUI), Effect-based concurrency (OpenCode) |
| **Target User** | Enterprise teams, cross-device workflows, compliance-required orgs | Power users, OSS contributors, local-model enthusiasts, customization-heavy workflows |
| **Extensibility Model** | **Controlled plugin/mod systems** (Claude Mods, Copilot MCP, Codex MCP, Gemini skills) — gated by allowlists, first-party review | **Open plugin architectures** (DeepSeek TUI reviewed providers, Pi namespace isolation, OpenCode native providers) — declarative, community-driven |
| **Session Model** | Cloud-synced, multi-surface (CLI, Desktop, Web, Mobile, Dots), enterprise policy enforcement | Local file-based, TUI-centric, portable via config/files, no cloud dependency |
| **Release Cadence** | Stable + alpha/nightly tracks (Codex daily alphas, Gemini nightlies, Qwen nightlies, Copilot patches) | Milestone-driven (Pi v1.0.0, DeepSeek v0.10.1 waves), integration batches |
| **Pain Point Focus** | Enterprise adoption blockers (auth, compliance, cross-surface parity), cloud runtime reliability | Local UX polish (TUI, keybindings), dependency hygiene, provider cost accuracy, community docs |

**Notable Outliers**: 
- **Qwen Code** straddles both — deep managed-agent platform investment *and* open SDK/remote runtime hosts.
- **Claude Code**'s Mods system is the most ambitious *first-party* plugin architecture, aiming to make core agent behavior extensible.
- **Pi**'s v1.0.0 fullscreen-by-default TUI is a bold UX opinion; **DeepSeek TUI**'s community localization initiative is unique governance innovation.

---

## 5. Community Momentum & Maturity

| Tier | Tools | Evidence |
|------|-------|----------|
| **High Momentum / Rapid Iteration** | **OpenAI Codex**, **Qwen Code**, **Gemini CLI**, **OpenCode** | Daily/nightly releases, 10+ PRs/day, architectural milestones shipping (Codex managed worktrees, Qwen M5a/G3/W1b, Gemini Decision Gate, OpenCode native Cohere) |
| **High Momentum / Stabilizing** | **Claude Code**, **Pi** | Major version launches (Mods, v1.0.0), but significant regression backlogs (Claude: CLAUDE.md, artifacts, Windows; Pi: shrinkwrap, fullscreen) |
| **Moderate / Enterprise-Focused** | **GitHub Copilot CLI** | Patch velocity high (3/24h), but enterprise blockers (OAuth scopes, data residency, macOS breakage) dominate signal; PR velocity low |
| **Community-Driven / Niche** | **DeepSeek TUI** | Active integration wave, unique localization governance, but lower absolute issue/PR volume |
| **Inactive / Dormant** | **Kimi Code CLI**, **Grok Build** | Zero 24h activity across issues, PRs, releases |

**Maturity Indicators**:
- **Most production-ready TUI**: Pi (v1.0.0), OpenCode (Effect-based, ripgrep semaphore), DeepSeek TUI (ratatui catalog investment)
- **Most advanced managed runtime**: Qwen Code (M5a worker, G3 harness, W1b recovery), Codex (gRPC cloud client, managed worktrees)
- **Most extensible core**: Claude Code (Mods), DeepSeek TUI (plugin OAuth declarations)
- **Largest enterprise adoption gap**: Copilot CLI (OAuth scopes, data residency, policy enforcement), Claude Code (Passkey, MCP OAuth)

---

## 6. Trend Signals for Technical Decision-Makers

| Trend | Signal Strength | Implication |
|-------|-----------------|-------------|
| **Managed agent runtimes are the new platform layer** | 🔥🔥🔥 (Qwen M5a, Codex worktrees, Copilot sandbox, Claude Mods, Gemini Decision Gate) | Build tooling *for* these runtimes (custom tools, policies, observability); expect API stabilization in 6–12 months |
| **Windows is the #1 compatibility blocker** | 🔥🔥🔥 (Codex renderer crashes, Claude backslash corruption, Copilot macOS reboot, Gemini Wayland, Qwen clipboard, Pi tmux) | Validate Windows/CI pipelines *before* team rollout; budget 20%+ effort for platform quirks |
| **Session durability > raw model capability** | 🔥🔥 (Every tool has resume/corruption/compaction issues) | Evaluate tools on *recovery semantics* (offline bundles, atomic persistence, compaction triggers), not just benchmark scores |
| **Enterprise governance is the adoption gate** | 🔥🔥 (Copilot OAuth scopes, Claude Passkey, Qwen profiles, Codex MCP login) | Procurement will block tools lacking per-repo scopes, data residency, policy-as-code, audit trails |
| **Plugin ecosystems are fragmenting by trust model** | 🔥🔥 (Claude Mods gated, DeepSeek reviewed, Pi namespace, OpenCode native) | Choose: **curated security** (Claude, Copilot) vs. **composable openness** (DeepSeek, Pi, OpenCode) — no middle ground yet |
| **Local-first + cloud-burst hybrid is emerging** | 🔥 (Qwen remote runtime hosts, OpenCode local providers, Pi Cloudflare Clef, Codex dots) | Architecture should support *both* local tool execution and cloud agent delegation with identical interfaces |
| **Cost observability is becoming a product requirement** | 🔥 (Pi OpenRouter actuals, Qwen context governance, Gemini Flash-Lite budgets) | Demand provider-reported billing APIs; catalog estimates are insufficient for production budgeting |

---

## Recommendation Summary

| If Your Priority Is... | Primary Evaluation Targets | Watch List |
|------------------------|----------------------------|------------|
| **Enterprise rollout with compliance** | GitHub Copilot CLI (policy engine), Claude Code (Mods for guardrails) | Qwen Code (managed agent profiles), Codex (enterprise Dots) |
| **Local-first power user / OSS contributor** | Pi (v1.0.0 TUI), OpenCode (Effect runtime), DeepSeek TUI (plugin OAuth) | Gemini CLI (nightly stability), Qwen Code (local SDK) |
| **Cloud-native agent platform builder** | Qwen Code (M5a/G3/W1b), OpenAI Codex (worktrees, gRPC), Claude Code (Mods) | Copilot CLI (sandbox CA), Gemini CLI (Decision Gate) |
| **Cross-device / multi-surface workflow** | OpenAI Codex (desktop/web/iOS/dots), Claude Code (CLI/Desktop parity), Copilot CLI | Qwen Code (Web Shell), Gemini CLI (ACL) |
| **Cost-controlled production usage** | Pi (OpenRouter actuals), Qwen Code (context governance), Gemini CLI (Flash-Lite budgets) | OpenCode (provider cost catalog), Codex (usage dashboards) |

**Bottom Line**: The ecosystem is **converging on managed-agent architectures** but **diverging on trust/extensibility models**. For 2026 H2, prioritize tools that ship **recoverable sessions**, **bounded stream reliability**, and **governance primitives** — these are the differentiators that survive the hype cycle.

---

## Per-Tool Reports

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills Highlights

> Source: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills Community Highlights Report  
*Data as of 2026-10-02 | Source: github.com/anthropics/skills*

---

## 1. Top Skills Ranking (Most-Discussed PRs)

| Rank | Skill / PR | Functionality | Discussion Highlights | Status |
|------|------------|---------------|----------------------|--------|
| 1 | **skill-creator** fixes ([#1298](https://github.com/anthropics/skills/pull/1298), [#1681](https://github.com/anthropics/skills/pull/1681)) | Meta-skill that creates/validates other Skills; includes trigger evaluation, benchmarking, packaging | Multiple critical bugs: Windows `select()` failures, trigger eval false negatives, silent benchmark layout mismatches, module import errors when run standalone. Tied to Issues [#1383](https://github.com/anthropics/skills/issues/1383), [#1394](https://github.com/anthropics/skills/issues/1394) | 🟢 Open |
| 2 | **mcp-builder** ([#1742](https://github.com/anthropics/skills/pull/1742)) | Generates MCP (Model Context Protocol) server/client boilerplate | Breaking changes in `mcp>=2.0`: `streamablehttp_client` → `streamable_http_client`, header API overhaul. Evaluation harness scores 0/N against real servers ([#1390](https://github.com/anthropics/skills/issues/1390)) | 🟢 Open |
| 3 | **proofcore-contract-auditor** ([#1771](https://github.com/anthropics/skills/pull/1771)) | Web3 skill: static analysis of Solidity/Rust contracts + cryptographic audit proofs anchored on TON via ProofCore | First Web3-focused auditor skill; zero-storage Merkle protocol integration. Novel use-case for on-chain verification | 🟢 Open |
| 4 | **md2video-audio** ([#1703](https://github.com/anthropics/skills/pull/1703)) | Zero-cost Markdown → MP4 video with human-like TTS voiceovers (Marp + edge-tts) | End-to-end content creation pipeline; appeals to technical educators/marketers | 🟢 Open |
| 5 | **notion-spec-to-implementation** + **quantitative-resume-auditor** ([#1245](https://github.com/anthropics/skills/pull/1245)) | Spec → Notion task breakdown with acceptance criteria; resume analyzer with metric extraction | Long-running PR (Jun–Sep); dual-skill submission; addresses PM→engineer handoff and hiring workflows | 🟢 Open |
| 6 | **docx** fixes ([#1734](https://github.com/anthropics/skills/pull/1734), [#1792](https://github.com/anthropics/skills/pull/1792), [#541](https://github.com/anthropics/skills/pull/541)) | Tracked-changes acceptance, orphaned comment detection, `w:id` collision prevention | Production-hardening: LibreOffice timeout handling, output verification, bookmark/change ID namespace conflicts | 🟢 Open |
| 7 | **testing-patterns** ([#723](https://github.com/anthropics/skills/pull/723)) | Comprehensive testing guide: Trophy model, AAA, React Testing Library, contracts, E2E, property-based, CI | Broad coverage; fills gap in opinionated testing guidance for Claude-generated code | 🟢 Open |
| 8 | **AWT (AI Watch Tester)** ([#822](https://github.com/anthropics/skills/pull/822)) | Vision + browser control for zero-code E2E test generation; visual regression, a11y, performance | Novel "point-at-UI" approach; integrates Playwright; long review cycle (Mar–Sep) | 🟢 Open |

---

## 2. Community Demand Trends (From Issues)

| Trend | Evidence (Issue + Comments/👍) | Implication |
|-------|-------------------------------|-------------|
| **Supply-chain trust & namespace security** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬, 2 👍) — community skills masquerading as official `anthropic/` namespace | Highest-engagement issue; demands namespacing/verification mechanism before ecosystem scales |
| **Organizational skill distribution** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍) — no org-wide sharing, manual file transfer via Slack/Teams | Enterprise adoption blocker; needs registry/sharing layer in Claude.ai |
| **Skill triggering & evaluation broken** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬, 7 👍) — `claude -p` never triggers skills (0% rate); [#1383](https://github.com/anthropics/skills/issues/1383) silent benchmark failures | Core developer loop broken; blocks skill author iteration |
| **Token/context window explosions** | [#1487](https://github.com/anthropics/skills/issues/1487) (4 💬) — `claude-api` injects ~156k tokens in one call | Skills must become lazy-loaded / streaming-aware |
| **Duplicate/conflicting bundled skills** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) — `document-skills` & `example-skills` install identical content | Plugin packaging hygiene needed |
| **Meta-skills for skill quality/security** | [#83](https://github.com/anthropics/skills/pull/83) (skill-quality-analyzer, skill-security-analyzer); [#1385](https://github.com/anthropics/skills/issues/1385) reasoning quality gates | Community wants automated governance of the skill supply chain itself |
| **Compact/structured agent memory** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 💬) — symbolic notation for persistent agent state | Addresses context bloat in long-running sessions |

---

## 3. High-Potential Pending Skills (Active PRs Likely to Land Soon)

| Skill | PR | Why It’s Close |
|-------|-----|----------------|
| **skill-creator trigger/Windows fixes** | [#1298](https://github.com/anthropics/skills/pull/1298) | Core infrastructure; multiple linked issues; detailed root-cause analysis provided |
| **mcp-builder v2 compatibility** | [#1742](https://github.com/anthropics/skills/pull/1742) | Narrow, well-scoped fix for breaking upstream change; references [#1668](https://github.com/anthropics/skills/issues/1668) |
| **docx: timeout handling + output verification** | [#1792](https://github.com/anthropics/skills/pull/1792) | Production hardening; clear acceptance criteria (revision marks check) |
| **claude-api: retired model markers** | [#1607](https://github.com/anthropics/skills/pull/1607) | Simple data update; fixes [#1603](https://github.com/anthropics/skills/issues/1603); low risk |
| **skill-creator: direct script execution** | [#1681](https://github.com/anthropics/skills/pull/1681) | DX improvement; unblocks local development without install |
| **blast-radius** | [#1776](https://github.com/anthropics/skills/pull/1776) | Pre-flight checklist for destructive ops; high safety value, small scope |

---

## 4. Skills Ecosystem Insight

> **The community’s most concentrated demand is for *trustworthy, discoverable, and composable skill distribution*—specifically: verified namespacing to prevent impersonation, org-level sharing to enable team workflows, and reliable triggering/evaluation so authors can iterate with confidence.**

---

# Claude Code Community Digest — 2026-10-02

---

## 1. Today's Highlights

Claude Code **v2.1.287** ships the **Mods system**—a plugin architecture that lets extensions modify core agent behavior at a deeper level than hooks. The first built-in mod, **"You Should Know"**, runs a side agent that silently audits your session and flags issues you or Claude might miss (enable via `/plugin enable cc-plugin-you-should-know@builtin`). The community is actively debating the Mods design in **#91870** (230+ comments), while long-standing bugs around `CLAUDE.md` rule enforcement, session-limit accounting, and artifact sharing persist.

---

## 2. Releases

### v2.1.287 — *Mods & "You Should Know"*
| Change | Impact |
|--------|--------|
| **Claude Mods** — plugins can now modify deeper runtime behavior (beyond hooks) | Opens extensibility for custom agent loops, policy enforcement, and cross-cutting concerns |
| **Built-in mod: "You Should Know"** — side agent audits session and surfaces blind spots | Opt-in safety/quality layer; enabled per-session or globally via plugin command |

> **Enable**: `/plugin enable cc-plugin-you-should-know@builtin`  
> **Docs**: [Release notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.287)

---

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | **Mods — make Claude 10× more extensible** | Central design discussion for the new plugin system; shapes future extensibility surface | 230 💬 · 130 👍 |
| [#2544](https://github.com/anthropics/claude-code/issues/2544) | **CLAUDE.md mandatory rules ignored across repos** | Core instruction-following reliability; blocks teams relying on repo-level guardrails | 28 💬 · 41 👍 |
| [#54750](https://github.com/anthropics/claude-code/issues/54750) | **Session limit shows 100% despite low local usage** | False-positive quota exhaustion breaks workflows; unclear accounting | 21 💬 · 13 👍 |
| [#79824](https://github.com/anthropics/claude-code/issues/79824) | **Artifact sharing fails: "version can't be shared publicly"** | Blocks public link sharing for published artifacts (esp. Mermaid diagrams) | 16 💬 · 21 👍 |
| [#84862](https://github.com/anthropics/claude-code/issues/84862) | **Passkey (WebAuthn) sign-in across all surfaces** | High-demand auth modernization; 85 👍 shows strong user appetite | 11 💬 · 85 👍 |
| [#92215](https://github.com/anthropics/claude-code/issues/92215) | **Claude Design MCP 403s; OAuth flow broken** | First-party MCP broken on macOS; blocks design-token workflows | 11 💬 · 6 👍 |
| [#79305](https://github.com/anthropics/claude-code/issues/79305) | **Desktop app: custom themes / accent colors** | Parity with CLI theming; multi-monitor window differentiation | 10 💬 · 37 👍 |
| [#85856](https://github.com/anthropics/claude-code/issues/85856) | **Windows/Git Bash: backslashes halved in Bash tool** | Silent command corruption on Windows; quoting doesn't help | 9 💬 · 6 👍 |
| [#82571](https://github.com/anthropics/claude-code/issues/82571) | **No way to allow third-party channel plugins** | Hard-coded allowlist blocks custom notification channels (Discord, Telegram, etc.) | 6 💬 · 0 👍 |
| [#98189](https://github.com/anthropics/claude-code/issues/98189) | **Auto mode blocks skill allowed-tools even with approval** | Regression in skill execution under auto mode; breaks SSH tunneling use cases | 3 💬 · 0 👍 |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | **diff: first edit opens pane only when it has a file to list** | OPEN | Fixes empty diff pane on writes to ignored/outside-repo paths |
| [#98018](https://github.com/anthropics/claude-code/pull/98018) | **mods: revert agents-md truncated reads & diff forced colors** | CLOSED | Rolls back two Mods changes to restore prior behavior |
| [#98555](https://github.com/anthropics/claude-code/pull/98555) | **diff: dialog opens every listed file; closing prints nothing** | CLOSED | UX fix for `/diff` fullscreen dialog behavior |
| [#16632](https://github.com/anthropics/claude-code/pull/16632) | **Fix: shell operators requiring approval** | CLOSED | Migrates ralph-loop init from markdown block to functional Bash call |
| [#62592](https://github.com/anthropics/claude-code/pull/62592) | **Update security-guidance plugin** | CLOSED | README-only update for security guidance plugin |

> **Note**: Most recent PR activity centers on **Mods stabilization** and **diff UX polish** post-v2.1.287.

---

## 5. Feature Request Trends (from all Issues)

| Theme | Representative Issues | Signal |
|-------|----------------------|--------|
| **Extensibility & Plugins** | #91870 (Mods), #82571 (3rd-party channels), #75146 (VSCode `/workflows`) | 230+ comments on Mods; strong demand for open plugin ecosystem |
| **Auth & Identity** | #84862 (Passkey/WebAuthn), #92215 (MCP OAuth), #90301 (secret injection) | 85 👍 on Passkey; multiple auth-surface gaps |
| **Artifact & Sharing UX** | #79824, #82551, #77895, #89070, #93483 | 5+ issues on sharing/version-pinning; Mermaid-specific blockers |
| **Desktop Parity** | #79305 (themes), #77895 (artifact sharing), #98863 (note folding) | CLI features missing in Desktop app |
| **Windows / Bash Reliability** | #85856 (backslash halving), #95413 (remote control 403), #95494 (agent scope override) | Platform-specific tool execution bugs |
| **Agent Control & Safety** | #91899 (unauthorized work), #91233 (Opus 5 planning drift), #98189 (skill blocking), #90301 (secret primitive) | Growing concern over agent autonomy vs. user intent |

---

## 6. Developer Pain Points (Recurring Frustrations)

1. **Instruction Following Reliability** — `CLAUDE.md` rules ignored (#2544, 15 months open), agents override explicit scope (#95494), fabricate verification claims (#94650, #91899). Teams cannot trust agents to honor constraints.

2. **Session/Quota Accounting Opacity** — Session limit hits 100% with no visible local usage (#54750); no transparency into what consumes quota.

3. **Artifact Sharing Is Fundamentally Broken** — Public links pin to stale versions (#93483), Mermaid diagrams block sharing (#79824, #77895), "latest version" not followable (#89070). Publishing workflow unusable for collaboration.

4. **Windows Git Bash Silent Corruption** — Backslashes halved in every Bash tool call (#85856); no workaround via quoting. Blocks Windows developers using standard tooling.

5. **MCP Ecosystem Fragility** — First-party Design MCP 403s (#92215), cache-hint validation rejects valid servers (#88128), third-party channel plugins blocked by allowlist (#82571). MCP feels "closed" despite protocol openness.

6. **Auto Mode & Skill Execution Regressions** — Skills blocked despite `allowed-tools` + approval (#98189), lead session exits on teammate shutdown approval (#96226). Auto mode introducing new failure modes.

7. **No Secret Injection Primitive** — 18+ open requests map to a single missing primitive: a sanctioned way to hand secrets to Claude (#90301). Workarounds are insecure or brittle.

---

*Generated from github.com/anthropics/claude-code data as of 2026-10-02. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex Community Digest — 2026-10-02

## Today's Highlights

The Codex team shipped rapid alpha iterations (0.162.0-alpha.1→.3) alongside stable 0.160.0, introducing keyboard-accessible task history browsing, middle-click paste in Linux fullscreen, and workspace-default session starts. Meanwhile, Windows users report severe regressions: renderer crashes, Git process leaks consuming 98% RAM, WSL exec failures, and the Codex switcher disappearing entirely. The "dots" (remote agent) subsystem shows cross-platform path confusion, broken task handoffs, and inconsistent cloud-task visibility across desktop/web/iOS/dot clients.

---

## Releases

| Version | Key Changes |
|---------|-------------|
| **0.162.0-alpha.3** | Incremental alpha (no changelog published) |
| **0.162.0-alpha.2** | Incremental alpha |
| **0.162.0-alpha.1** | Incremental alpha |
| **0.161.0-alpha.8–13** | Series of alpha builds |
| **0.160.0 (stable)** | • Browse older tasks in Agent Command Center via keyboard-accessible "Show more" ([#49106](https://github.com/openai/codex/pull/49106))<br>• Middle-click paste of selected transcript text in fullscreen on Linux X11 ([#49112](https://github.com/openai/codex/pull/49112))<br>• Start sessions outside a project using workspace defaults |

---

## Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#9203](https://github.com/openai/codex/issues/9203) | **Restore `/undo` command** | Users lose uncommitted/untracked changes when Codex deletes/modifies files; 466 👍, 86 comments — highest engagement in repo | 🔥 Critical workflow gap; "bites me several times" |
| [#48555](https://github.com/openai/codex/issues/48555) | **Android remote auth loops after desktop account switch** | Cross-account stale state breaks phone pairing; 23 👍, 30 comments | Blocks mobile→desktop workflow for multi-account users |
| [#49458](https://github.com/openai/codex/issues/49458) | **Dot-started local tasks lack Computer Use tools on Windows** | Feature parity gap: dot-launched tasks missing tools that work in ordinary sessions; 13 👍, 24 comments | Undermines "dots" value prop on Windows |
| [#49729](https://github.com/openai/codex/issues/49729) | **Dot cannot create/follow up local tasks in saved projects** | Task-creation tool can't select existing projects; dot can't read threads it created; 2 👍, 20 comments | Breaks dot→project workflow entirely |
| [#48906](https://github.com/openai/codex/issues/48906) | **Codex missing from ChatGPT/Codex switcher on Windows 11** | App invisible in new Windows switcher UI; 0 👍, 15 comments | Discoverability regression on primary platform |
| [#49362](https://github.com/openai/codex/issues/49362) | **Sol 6.1 not appearing in Codex** (CLOSED) | Model picker missing latest model despite availability in App/CLI; 20 👍, 15 comments | Model rollout inconsistency across surfaces |
| [#31128](https://github.com/openai/codex/issues/31128) | **VS Code extension: queued follow-ups disappear** | Messages accepted then vanish before transcript delivery; 9 👍, 15 comments (open since Jul) | Silent data loss in extension workflow |
| [#48938](https://github.com/openai/codex/issues/48938) | **Windows 26.924.2738.0: renderer crashes, white screens, input lag** | Pro user on 20x plan reports severe instability post-update; 2 👍, 13 comments | High-value user impact; "planned leave, expenses, paid usage" affected |
| [#34859](https://github.com/openai/codex/issues/34859) | **Remote MCP `codex mcp login` cannot resolve server** | OAuth-connected MCP plugin prompts login but CLI fails to resolve; 3 👍, 11 comments (open since Jul) | MCP ecosystem integration broken |
| [#49464](https://github.com/openai/codex/issues/49464) | **VS Code: GPT-6.1 Sol missing from model picker** (CLOSED) | Model available in App/CLI but not extension; 25 👍, 10 comments | Cross-surface model parity issue |

---

## Key PR Progress (Top 10 by Significance)

| PR | Title | Description |
|----|-------|-------------|
| [#50148](https://github.com/openai/codex/pull/50148) | **Add managed worktree tools to TUI** | Exposes `create_worktree`, `get_worktree_creation_status`, `list_worktrees` via MCP for trusted local projects with attachment storage |
| [#50177](https://github.com/openai/codex/pull/50177) | **Enable writable file streaming in exec-server** | Adds `fileWriteStreaming` capability, `fs/open` with `mode: "replace"`, `fs/writeBlock` with offset/chunk control (≤1 MiB) |
| [#50162](https://github.com/openai/codex/pull/50162) | **Bound in-flight file opens in exec-server** | Fixes semaphore race: now reserves permit *before* opening file, counting pending opens against 128-handle limit |
| [#50140](https://github.com/openai/codex/pull/50140) | **Use server permission catalog for TUI shortcuts** | Aligns permission shortcuts with connected server's catalog (including model-specific auto-review) instead of local config |
| [#50128](https://github.com/openai/codex/pull/50128) | **Expose model for running turn's next step** | Adds `CodexThread::current_turn_model` returning model slug for active turn, independent of future-turn settings |
| [#50113](https://github.com/openai/codex/pull/50113) | **Native gRPC client for cloud thread resume/attach** | New `codex-cloud-client` Rust crate for `ThreadService.Resume` + live `Attach` over HTTP/2 with shared `HttpClientFactory` |
| [#50109](https://github.com/openai/codex/pull/50109) | **Keep fullscreen prompts bounded & scrollable** | Caps composer at 2/3 viewport, ensures transcript room and editable prompt row visibility for long drafts/remote images |
| [#50099](https://github.com/openai/codex/pull/50099) | **Opt-in Decisions comparison for Guardian V2** | Disabled-by-default `guardianv2_decisions_comparison` runs Decisions alongside Guardian V2 with same policy/evidence |
| [#50082](https://github.com/openai/codex/pull/50082) | **Dynamic tool inheritance for fresh V2 subagents** | Subagents spawned without forked history now receive parent's client-defined dynamic tools (feature-flagged) |
| [#50061](https://github.com/openai/codex/pull/50061) | **Backport MXC PowerShell fix to 0.159.0-alpha.12** | Fixes local MXC unpackaged PowerShell fallback; remote/restricted-token handling for desktop 260930 train |

---

## Feature Request Trends (from Issues)

1. **Session/State Portability** — [#47196](https://github.com/openai/codex/issues/47196) (7 👍): Lossless project+session export/import for cross-device/Git workflows; users want full working context preserved, not just source code.

2. **Undo/Recovery Controls** — [#9203](https://github.com/openai/codex/issues/9203) (466 👍): `/undo` restoration is the single most-upvoted ask; users need safety net for agent file mutations outside Git.

3. **Cross-Surface Model Parity** — [#49362](https://github.com/openai/codex/issues/49362), [#49464](https://github.com/openai/codex/issues/49464): Models (Sol 6.1, GPT-6.1) missing from VS Code extension despite presence in App/CLI.

4. **Dots/Remote Agent Maturity** — [#49458](https://github.com/openai/codex/issues/49458), [#49729](https://github.com/openai/codex/issues/49729), [#49531](https://github.com/openai/codex/issues/49531), [#50136](https://github.com/openai/codex/issues/50136): Tool parity, project binding, approval routing, and cloud-task visibility across desktop/web/iOS/dot.

5. **Windows First-Class Support** — Switcher integration, WSL exec stability, Computer Use tool parity, renderer performance.

---

## Developer Pain Points (Recurring Frustrations)

| Area | Symptoms | Representative Issues |
|------|----------|----------------------|
| **Windows Stability** | Renderer crashes, white screens, 98% RAM from Git process leaks, input lag, switcher invisibility, WSL exec "No such file or directory" | [#48938](https://github.com/openai/codex/issues/48938), [#48666](https://github.com/openai/codex/issues/48666), [#48906](https://github.com/openai/codex/issues/48906), [#49731](https://github.com/openai/codex/issues/49731), [#49452](https://github.com/openai/codex/issues/49452) |
| **Dots/Remote Workflow** | Mixed Linux/Win paths, broken project binding, stalled delegations, approval notifications not reaching dot, cloud-task visibility mismatch | [#49753](https://github.com/openai/codex/issues/49753), [#49729](https://github.com/openai/codex/issues/49729), [#49883](https://github.com/openai/codex/issues/49883), [#49531](https://github.com/openai/codex/issues/49531), [#50136](https://github.com/openai/codex/issues/50136) |
| **Message/Queue Reliability** | Queued follow-ups vanish (VS Code), "undefined" JSON on queue release, messages stuck in send queue | [#31128](https://github.com/openai/codex/issues/31128), [#49975](https://github.com/openai/codex/issues/49975) |
| **Auth/Account State** | Android remote loops after desktop account switch, MCP login unresolved, stale cross-account env | [#48555](https://github.com/openai/codex/issues/48555), [#34859](https://github.com/openai/codex/issues/34859) |
| **TUI/CLI Regressions** | Copy/paste shortcuts changed (Debian), Ctrl+Insert broken (WSL), ask-tool unanswerable + premature Tab dispatch | [#48139](https://github.com/openai/codex/issues/48139), [#48965](https://github.com/openai/codex/issues/48965), [#48334](https://github.com/openai/codex/issues/48334) |

---

*Generated from github.com/openai/codex data as of 2026-10-02. Links point to live GitHub items.*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI Community Digest — 2026-10-02

## 1. Today's Highlights
The nightly **v0.64.0-nightly.20261002** lands two core reliability fixes: append-only delta patching with bounded history windowing in `ChatRecordingService`, and atomic state persistence with backup recovery on corruption. Meanwhile, the issue backlog shows sustained focus on **subagent correctness** (MAX_TURNS misreporting, hangs, config ignores), **browser-agent resilience** (Wayland failures, session locking), and **session-resume fidelity** (duplicate tool responses). A new optional **Decision Gate** PR introduces a fast pre-model router for simple messages.

## 2. Releases
**v0.64.0-nightly.20261002.gc9096a847**  
- `fix(core)`: Append-only delta patching + bounded history windowing in `ChatRecordingService` ([#29568](https://github.com/google-gemini/gemini-cli/pull/29568))  
- `fix(cli)`: Atomic state persistence with backup recovery on corruption ([#29568](https://github.com/google-gemini/gemini-cli/pull/29568))

## 3. Hot Issues (Top 10 by Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent reports GOAL success after hitting MAX_TURNS** (P1) | Masks real failures; subagent appears to succeed when it actually timed out. | 13 comments, 👍2 — high urgency for trustworthy subagent status. |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent hangs indefinitely** (P1) | Blocks all delegated work; users must disable subagents to proceed. | 8 comments, 👍8 — widespread workflow blocker. |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **Leverage model’s native bash affinity via zero-dep sandboxing** (P2) | Architectural shift: run model as native POSIX user in isolated OS sandbox. | 9 comments, 👍1 — strategic direction for agent-tool alignment. |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **Assess AST-aware file reads, search, mapping** (P2) | Could reduce token waste & turns via surgical code navigation. | 7 comments, 👍1 — investigative epic with tooling evals (tilth, glyph). |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini underuses custom skills & sub-agents** (P2) | Agents require explicit invocation; autonomous delegation weak. | 7 comments — impacts extensibility ROI. |
| [#29600](https://github.com/google-gemini/gemini-cli/issues/29600) | **formatDuration edge cases at unit boundaries** (P3) | `999.4ms → "1000ms"`, `59.95s → "60.0s"` — misleading UI. | 7 comments, fresh bug — small but visible polish gap. |
| [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | **Browser Agent ignores `settings.json` overrides (maxTurns)** (P2) | Configuration bypassed; limits unusable for browser tasks. | 4 comments — config trust issue. |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Browser subagent fails on Wayland** (P1) | Platform regression; blocks Linux/Wayland users. | 4 comments, 👍1 — platform parity blocker. |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **Browser agent: automatic session takeover & lock recovery** (P3) | Persistent sessions deadlock on orphaned processes. | 4 comments — resilience gap for long-running browser tasks. |
| [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | **Symlinked agent files in `~/.gemini/agents/` not recognized** (P2) | Breaks dotfile management & shared agent definitions. | 4 comments — developer ergonomics. |

## 4. Key PR Progress (Top 10 by Impact)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#29596](https://github.com/google-gemini/gemini-cli/pull/29596) | **feat(cli)** | Include MCP server & tool names in ACP permission requests — disambiguates same-named tools across servers. |
| [#29482](https://github.com/google-gemini/gemini-cli/pull/29482) | **feat(core)** | Optional **Decision Gate** fast router (<10ms) classifies user messages; simple queries bypass main model for speed. |
| [#29476](https://github.com/google-gemini/gemini-cli/pull/29476) | **fix(cli)** | Resolves **Enter key hang** on tool confirmations in IDE-integrated terminals ([#23297](https://github.com/google-gemini/gemini-cli/issues/23297)). |
| [#29490](https://github.com/google-gemini/gemini-cli/pull/29490) | **fix(core)** | Stops **duplicate tool-response replay** on session resume (`-r`), fixing function-call pairing errors. |
| [#29492](https://github.com/google-gemini/gemini-cli/pull/29492) | **fix(cli) security** | Eliminates shell interpolation in sandbox build (`BUILD_SANDBOX=1`) — prevents command injection via checkout paths. |
| [#29480](https://github.com/google-gemini/gemini-cli/pull/29480) | **fix(core) security** | Validates `git` args on Windows; blocks `--output=<path>` write bypass of permission prompt. |
| [#29479](https://github.com/google-gemini/gemini-cli/pull/29479) | **fix(core) security** | Contains legacy checkpoint path traversal (`x/../../secret`) inside checkpoints directory. |
| [#29481](https://github.com/google-gemini/gemini-cli/pull/29481) | **fix(cli)** | Unreadable `extension-enablement.json` no longer silently re-enables all disabled extensions. |
| [#29489](https://github.com/google-gemini/gemini-cli/pull/29489) | **fix(core)** | Flash-Lite models (`gemini-3.1-flash-lite`, etc.) get `thinkingBudget: 0` via new `chat-base-3-flash-lite` config. |
| [#29488](https://github.com/google-gemini/gemini-cli/pull/29488) | **fix(mcp) security** | Implements RFC 9207 `iss`-absence rejection on `authorization_response_iss_parameter_supported` for MCP OAuth. |

## 5. Feature Request Trends
1. **AST-aware tooling** — Multiple issues ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746), [#22747](https://github.com/google-gemini/gemini-cli/issues/22747), [#19561](https://github.com/google-gemini/gemini-cli/issues/19561)) converge on surgical code navigation (grep → AST search → AST read) to cut token bloat and turns.
2. **Subagent observability & control** — Requests for trajectory sharing ([#22598](https://github.com/google-gemini/gemini-cli/issues/22598)), backgrounding ([#22741](https://github.com/google-gemini/gemini-cli/issues/22741)), and config adherence ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)).
3. **Persistent, file-based task tracking** — Replace in-context `WriteToDo` with CRUD file store ([#18836](https://github.com/google-gemini/gemini-cli/issues/18836), [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)) to survive context rot and session boundaries.
4. **OS-level sandboxing for native bash affinity** — Run model as true POSIX user in isolated sandbox ([#19873](https://github.com/google-gemini/gemini-cli/issues/19873)) rather than tool-wrapped shell.
5. **Decision gates / fast routing** — Pre-model classifiers ([#29482](https://github.com/google-gemini/gemini-cli/pull/29482)) for latency-sensitive simple queries.

## 6. Developer Pain Points (Recurring Frustrations)
- **Subagent unreliability**: Hangs ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409)), false success on timeout ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323)), ignored config ([#22267](https://github.com/google-gemini/gemini-cli/issues/22267)), missing context in bug reports ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763)).
- **Browser agent fragility**: Wayland failures ([#21983](https://github.com/google-gemini/gemini-cli/issues/21983)), session lock deadlocks ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)), config overrides ignored.
- **Session resume corruption**: Duplicate tool responses ([#29366](https://github.com/google-gemini/gemini-cli/pull/29366), [#29490](https://github.com/google-gemini/gemini-cli/pull/29490)), load-by-ID failures ([#29368](https://github.com/google-gemini/gemini-cli/pull/29368)).
- **Security footguns**: Shell interpolation in sandbox builds ([#29492](https://github.com/google-gemini/gemini-cli/pull/29492)), Windows `git` arg bypass ([#29480](https://github.com/google-gemini/gemini-cli/pull/29480)), checkpoint path traversal ([#29479](https://github.com/google-gemini/gemini-cli/pull/29479)), extension config corruption ([#29481](https://github.com/google-gemini/gemini-cli/pull/29481)).
- **UX paper cuts**: Enter key hang in IDE terminals ([#29476](https://github.com/google-gemini/gemini-cli/pull/29476)), `formatDuration` boundary glitches ([#29600](https://github.com/google-gemini/gemini-cli/issues/29600)), terminal resize flicker ([#21924](https://github.com/google-gemini/gemini-cli/issues/21924)), symlinked agents ignored ([#20079](https://github.com/google-gemini/gemini-cli/issues/20079)).
- **Model configuration drift**: Flash-Lite inheriting `ThinkingLevel.HIGH` ([#29489](https://github.com/google-gemini/gemini-cli/pull/29489)), MCP OAuth `iss` handling ([#29488](https://github.com/google-gemini/gemini-cli/pull/29488)).

---
*Digest generated from GitHub data (last 24h). All links point to google-gemini/gemini-cli.*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI Community Digest — 2026-10-02

---

## 1. Today's Highlights

Three patch releases shipped in the last 24 hours: **v1.0.92-0** fixes MCP tool persistence across OAuth re-authentication; **v1.0.91/91-1** introduces a full `copilot sandbox ca` command suite for proxy CA trust management (including unattended Windows setup), clears busy status after interrupted turns, enables sandboxed commands on Windows, and adds bounded telemetry flushing on shutdown. The community is actively discussing permission granularity (#953), macOS reboot breakage (#4998), and Azure MCP connectivity regressions (#4851).

---

## 2. Releases

| Version | Date | Key Changes |
|---------|------|-------------|
| **v1.0.92-0** | 2026-10-01 | **Fixed**: MCP tools continue working after OAuth reauthentication when tool definitions are unchanged. |
| **v1.0.91** | 2026-10-01 | **Added**: `copilot sandbox ca` commands (`check`, `create`, `trust`, `rotate`, `remove`) with unattended Windows support; `/sandbox ca install` → `create` + `trust`. **Improved**: Session timelines clear busy status after interrupted turns; sandboxed commands now run on Windows. |
| **v1.0.91-1** | 2026-10-01 | **Improved**: CLI shutdown flushes pending telemetry before exit with a bounded delay. |

> All three releases are patch-level; no breaking changes noted.

---

## 3. Hot Issues (Top 10 by Impact & Community Signal)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#953](https://github.com/github/copilot-cli/issues/953) | **Excessive OAuth scopes requested** — CLI asks for read/write to *entire* account instead of per-repo granularity. | Blocks enterprise adoption; security teams reject broad tokens. | 8 comments, 5 👍 — open since Jan, still hot. |
| [#4998](https://github.com/github/copilot-cli/issues/4998) | **macOS update/reboot breaks CLI** — stale `.mcp-writer.binding` retains old filesystem device ID. | Immediate productivity loss after any macOS security update. | 6 comments, 4 👍 — reported Sep 29, affects 1.0.90-3. |
| [#4851](https://github.com/github/copilot-cli/issues/4851) | **Azure MCP server HTTP requests fail** — `BrokenPipe` when validating Azure API Center registry. | Breaks existing enterprise MCP integrations overnight. | 5 comments, 8 👍 — high enterprise impact. |
| [#4959](https://github.com/github/copilot-cli/issues/4959) | **Enterprise `model` setting ignored** — managed `copilot/managed-settings.json` not applied in CLI. | Policy compliance failure; admins cannot enforce model selection. | 2 comments, 3 👍. |
| [#3675](https://github.com/github/copilot-cli/issues/3675) | **Session worktrees are opaque & non-configurable** — magic paths, inconsistent naming, no cleanup. | Disk bloat & confusion in long-running projects. | 1 comment, 8 👍 — strong latent demand. |
| [#5024](https://github.com/github/copilot-cli/issues/5024) | **Opus 5.5 native tasks fail with 400** — service rejects `anthropic-beta: fallback-credit-2026-07-01`. | Blocks latest model usage; 5/5 repro in troubleshooting. | 1 comment — new, high severity. |
| [#5034](https://github.com/github/copilot-cli/issues/5034) | **No setting to suppress verbose MCP status notifications** — noisy startup/session logs. | UX friction for power users running many sessions. | 1 comment — fresh request. |
| [#5023](https://github.com/github/copilot-cli/issues/5023) | **Session resume broken when telemetry counters stored as masked strings** — type mismatch corrupts persistence. | Permanent session loss; silent data corruption. | 1 comment — critical for reliability. |
| [#4938](https://github.com/github/copilot-cli/issues/4938) | **GHEC Data Residency: `GitHubToken` still hits `api.github.com`** — same class as unresolved #4527. | Blocks compliant deployments in EU/DR tenants. | 1 comment, 1 👍 — enterprise blocker. |
| [#4989](https://github.com/github/copilot-cli/issues/4989) | **`allowedMcpServers` `serverName` matchers never match** — named servers blocked by policy. | Enterprise allow-lists ineffective; MCP governance broken. | 1 comment — silent failure mode. |

---

## 4. Key PR Progress

| # | PR | Status | Summary |
|---|----|--------|---------|
| [#5036](https://github.com/github/copilot-cli/pull/5036) | **Update default model version in README** | Open | Documentation sync — aligns README with current default model. Low risk, high visibility for onboarding. |

*Only one PR updated in the last 24h; the focus remains on runtime fixes via patch releases.*

---

## 5. Feature Request Trends (from all Issues)

1. **Permission & Policy Granularity** — Per-repo OAuth scopes (#953), enterprise model enforcement (#4959), MCP allow-list matching (#4989), GHEC Data Residency routing (#4938).
2. **Session & Worktree Hygiene** — Configurable, self-cleaning worktrees (#3675), reliable session resume (#5023, #2303), scheduled prompt reliability (#4137).
3. **MCP Observability & Control** — Suppress verbose status noise (#5034), fix STDIO reload on `/new` (#4811), Windows CMD flash (#3171), Linux DNS in sandbox (#5027).
4. **Autopilot/UX Polish** — Disable “Task complete” summaries (#5033), fix up-arrow queue editing (#2905), co-author trailer ordering (#5032), quota exposure in status line (#5029).
5. **Model & Tool Reliability** — Opus 5.5 beta header (#5024), grep `-n` parsing (#5038), parallel tool stalls (#4982), sub-agent stream failure handling (#4911).

---

## 6. Developer Pain Points (Recurring Frustrations)

| Area | Signal | Representative Issues |
|------|--------|----------------------|
| **Auth & Enterprise Compliance** | Broad tokens, ignored policies, broken DR routing | #953, #4959, #4938, #4989 |
| **macOS/Windows Platform Quirks** | Post-update breakage, flashing windows, path case bugs | #4998, #3171, #5022 |
| **MCP Ecosystem Fragility** | Azure connectivity, STDIO reload, allow-list matching, noisy logs | #4851, #4811, #4989, #5034 |
| **Session Persistence & Recovery** | Corrupted telemetry breaks resume, lost images on rewind, frozen updates | #5023, #5037, #5035 |
| **Model/Tool Integration Gaps** | Beta header rejection, silent arg drops, parallel stalls, sub-agent failures | #5024, #5038, #4982, #4911 |

> **Bottom line**: The CLI is iterating fast on sandbox/CA and telemetry hygiene, but enterprise governance (scopes, policies, DR), cross-platform reliability (macOS reboot, Windows UX), and MCP robustness remain the top friction surfaces for teams adopting at scale.

---

*Generated from github.com/github/copilot-cli data as of 2026-10-02. Links point to live issues/PRs.*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode Community Digest — 2026-10-02

## 1. Today's Highlights
- **No new releases** in the last 24 hours; activity is concentrated on bug fixes and provider hardening.  
- **Stream reliability** dominates: multiple issues/PRs address silent hangs, missing timeouts, infinite retries, and opaque 400 handling across OpenAI, Bedrock, opencode-go, and local providers.  
- **TUI polish** lands a fix for the wrapped footer overlap on short terminals (#51563 → #52672), and a desktop right-click crash (#51125) remains open.

---

## 2. Releases
*None in the last 24 hours.*

---

## 3. Hot Issues (10 Noteworthy)

| # | Issue | Why It Matters | Community Reaction |
|---|-------|----------------|-------------------|
| [#11865](https://github.com/anomalyco/opencode/issues/11865) | **Tasks/Subagents with Codex/OpenAI frequently stuck, no timeout/retry** | Core agent workflow breaks; sessions hang indefinitely. | 👍 22, 27 comments — highest engagement today. |
| [#26602](https://github.com/anomalyco/opencode/issues/26602) | **Desktop 5-min Headers Timeout with slow local providers** | Hard-coded 5-min limit ignores provider `timeout` config; kills valid long requests. | 👍 2, 16 comments. |
| [#37580](https://github.com/anomalyco/opencode/issues/37580) | **SSE stream silently dropped mid-response; chunkTimeout unused on OpenAI path** | Subagents freeze forever; parent session deadlocks. | 👍 3, 5 comments. |
| [#41848](https://github.com/anomalyco/opencode/issues/41848) | **LLM retry has no max attempts → infinite loop, UI stuck "Thinking"** | RETRY_MAX_DELAY ~24 days; no user feedback. | 5 comments. |
| [#46692](https://github.com/anomalyco/opencode/issues/46692) | **[v2] chunkTimeout/timeout silently ignored on native llm path** | Config accepted but never read; zero client-side stall bound. | 👍 1, 5 comments. |
| [#48675](https://github.com/anomalyco/opencode/issues/48675) | **`opencode run`: zero-chunk stall never surfaces — no timeout/retry/exit** | Headless workers stall silently; logs show only stream open. | 3 comments. |
| [#49030](https://github.com/anomalyco/opencode/issues/49030) | **CLI: provider stream failures retry silently forever** | Upstream 503 → infinite retry, zero console output. | 1 comment. |
| [#50574](https://github.com/anomalyco/opencode/issues/50574) | **Compaction: 1M-context sessions never auto-compact before HTTP 400** | Trigger ceiling at 968k tokens; 400 not treated as overflow. | 2 comments. |
| [#50627](https://github.com/anomalyco/opencode/issues/50627) | **Policy: deny shell \* on custom agent breaks free tier** | Legitimate free-tier requests rejected with "only usable from within OpenCode". | 5 comments. |
| [#51563](https://github.com/anomalyco/opencode/issues/51563) | **TUI home screen: wrapped footer overlaps row above in short terminals** | Visual corruption at 66×16; branch name overwrites tip row. | 4 comments — fixed by #52672. |

---

## 4. Key PR Progress (10 Important)

| # | PR | Type | Summary |
|---|----|------|---------|
| [#52672](https://github.com/anomalyco/opencode/pull/52672) | Bug fix | **Fix TUI home footer wrapping** — keeps footer on one line in short terminals (closes #51563). |
| [#52669](https://github.com/anomalyco/opencode/pull/52669) | Bug fix | **Degenerate reasoning guard** — detects/aborts repetitive reasoning streams (closes #51503). |
| [#52651](https://github.com/anomalyco/opencode/pull/52651) | Bug fix | **Classify opencode-go unparseable 400 as context overflow** — enables auto-compaction recovery (closes #50761). |
| [#52665](https://github.com/anomalyco/opencode/pull/52665) | Bug fix | **Accept `max` reasoning effort & classify oversized payload errors** (closes #52174). |
| [#52654](https://github.com/anomalyco/opencode/pull/52654) | Bug fix | **Refresh cached provider state on external auth changes** — uses auth fingerprint (closes #50647). |
| [#52671](https://github.com/anomalyco/opencode/pull/52671) | Bug fix | **Bound concurrent ripgrep subprocesses (max 4)** via Effect semaphore; fail on exit errors (closes #50596). |
| [#52633](https://github.com/anomalyco/opencode/pull/52633) | Feature | **Native Cohere chat provider** — `/v2/chat` with thinking, tools, images; replaces `@ai-sdk/cohere`. |
| [#52663](https://github.com/anomalyco/opencode/pull/52663) | Feature | **Route Cohere models through native provider** (stacked on #52633). |
| [#52670](https://github.com/anomalyco/opencode/pull/52670) | Bug fix | **Attach resumed compaction summary to marker** — fixes `lastUser.id` drift after cancelled compaction (closes #52126). |
| [#52624](https://github.com/anomalyco/opencode/pull/52624) | Bug fix | **Hot-reload external config & themes** in TUI (targets v2, closes #37423). |

---

## 5. Feature Request Trends
1. **Observable stream health** — users want visible timeout/retry state, max-attempt caps, and progress feedback instead of silent "Thinking…" (issues #41848, #45514, #49030).  
2. **Provider-agnostic overflow handling** — treat *any* 400/500 as potential context overflow; trigger compaction/retry automatically (#50574, #46564, #52651).  
3. **Config parity across protocols** — `chunkTimeout`/`timeout` must work for SSE, EventStream (Bedrock), and native v2 paths (#26487, #46692).  
4. **Free-tier policy clarity** — deny-shell policies should not false-flag legitimate in-app usage (#50627).  
5. **Desktop/CLI parity** — desktop inherits CLI timeout bugs; needs same retry/timeout surfacing (#26602, #51125).

---

## 6. Developer Pain Points
- **Silent hangs are the #1 frustration** — across TUI, Desktop, and headless `opencode run`, streams stall with no timeout, no retry limit, no error surfacing, and no way to recover short of killing the session.  
- **Configuration drift** — timeouts/chunkTimeouts accepted in schema but ignored on key code paths (OpenAI native, Bedrock, v2 llm), leading to false confidence.  
- **Opaque provider errors** — 400/503 responses without structured bodies break auto-recovery; classification logic is provider-specific and incomplete.  
- **Agent/subagent lifecycle** — stuck subagents block parent sessions forever; no cancellation propagation or watchdog.  
- **Desktop stability** — right-click crash (#51125) and hard-coded 5-min header timeout (#26602) make Desktop feel less reliable than CLI for long-running local models.

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi Community Digest — 2026-10-02

## Today's Highlights
Pi **v1.0.0** shipped with fullscreen TUI as the default and a leaner coding agent. The release triggered a wave of follow-up issues around fullscreen behavior (Home/End keys, image collapse, tmux garbage input) and exposed a critical shrinkwrap vulnerability. Meanwhile, the team is actively addressing Bedrock thinking-block replay failures, OpenRouter cost accuracy, and Azure Foundry Chat Completions support.

---

## Releases
### v1.0.0 (2026-10-02)
- **Fullscreen by default** — TUI now runs fullscreen; set `tuiMode: "regular"` to retain terminal scrollback.  
- **Leaner coding agent** — Reduced bundle size and startup latency.  
- **Breaking**: Default keybindings changed (Home/End now scroll viewport; line-editing moved to Ctrl+A/E).  
🔗 [Release notes](https://github.com/earendil-works/pi/releases/tag/v1.0.0)

---

## Hot Issues
| # | Issue | Why It Matters | Community Signal |
|---|-------|----------------|------------------|
| [#5653](https://github.com/earendil-works/pi/issues/5653) | **Move off Shrinkwrap** | Duplicate `pi-ai` copies break provider registry; blocks clean installs. | 23 comments, **in progress since Jun** |
| [#10031](https://github.com/earendil-works/pi/issues/10031) | **Pi stuck in "Working..." after ESC** | Regression since ~v0.84; forces `Ctrl+C` + `pi -c` recovery. | 19 comments, 👍 2 |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | **Full-screen redraw storm on long transcripts** | Live thinking tail > viewport triggers full render every frame → violent jumps. | 9 comments, 👍 1 |
| [#9980](https://github.com/earendil-works/pi/issues/9980) | **OpenRouter cost off by 2–3×** | Catalog uses cheapest provider pricing; misreports spend for multi-provider models. | 5 comments, 👍 1 |
| [#10288](https://github.com/earendil-works/pi/issues/10288) | **Shrinkwrap pins vulnerable `brace-expansion@5.0.9`** | Three GHSA advisories (two high) published 2026-09-30. | 4 comments, **security** |
| [#10219](https://github.com/earendil-works/pi/issues/10219) | **MCP OAuth fails with Atlassian (`scope: ""`)** | `pi mcp login atlassian` breaks after browser approval. | 4 comments, 👍 3 |
| [#10250](https://github.com/earendil-works/pi/issues/10250) | **Tmux 3.6 fills input with hex garbage on startup** | New `system` theme default emits OSC sequences tmux doesn’t handle. | 3 comments |
| [#10314](https://github.com/earendil-works/pi/issues/10314) | **Reconsider Home/End defaults in fullscreen** | Line-editing muscle memory broken; debate on revert vs. opt-in. | 2 comments, 👍 1 |
| [#10319](https://github.com/earendil-works/pi/issues/10319) | **Inline image collapses to 1-row strip on scroll** | Regression of #9169 fix; images vanish on any scroll in fullscreen. | 1 comment |
| [#10308](https://github.com/earendil-works/pi/issues/10308) | **Idle sessions hold ~140 MiB PSS+SwapPss** | Eager highlight.js grammar loading; PR branch ready for lazy load. | 2 comments |

---

## Key PR Progress
| # | PR | Status | Summary |
|---|----|--------|---------|
| [#10329](https://github.com/earendil-works/pi/pull/10329) | **fix(ai): long-context pricing for OpenAI on Bedrock** | Open | Adds `cost.tiers` for >272k tokens (2× input/cache, 1.5× output). |
| [#10328](https://github.com/earendil-works/pi/pull/10328) | **fix(ai): drop mismatched thinking blocks on Bedrock** | Open | Sends `block_binding.prefix_mismatch_behavior: "drop_block"` to avoid 400 on replay. |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | **feat(ai): Azure Foundry Chat Completions** | Open | Enables DeepSeek V4 Pro via Chat Completions (previously only Responses API). |
| [#10322](https://github.com/earendil-works/pi/pull/10322) | **feat(ai): Cloudflare Clef classifiers** | Closed | Adds `@cf/cloudflare/clef` (27B) & `clef-flash` (9B) to Workers AI catalog. |
| [#9880](https://github.com/earendil-works/pi/pull/9880) | **feat(coding-agent): publish configuration schemas** | Open | JSON Schemas for `models.json`, `settings.json`, `keybindings.json`, themes from TypeBox contracts. |
| [#10286](https://github.com/earendil-works/pi/pull/10286) | **fix(ai): use OpenRouter-reported total cost** | Open | Replaces catalog estimate with actual billed amount from OpenRouter response. |
| [#10293](https://github.com/earendil-works/pi/pull/10293) | **fix(coding-agent): keep pastel palettes pastel in system theme** | Closed | Caps OKLCH chroma per palette color; fixes #10255. |
| [#10290](https://github.com/earendil-works/pi/pull/10290) | **fix(coding-agent): coerce string read offset/limit** | Closed | Handles models sending `offset`/`limit` as strings (e.g., OpenRouter `mimo-v2.6-flash`). |
| [#10194](https://github.com/earendil-works/pi/pull/10194) | **feat(ai): copy-code login for Anthropic OAuth** | Closed | Adds device-code flow for remote/headless Pi usage. |
| [#10197](https://github.com/earendil-works/pi/pull/10197) | **feat: unify package artifact validation** | Open | Single manifest-backed, content-addressed artifact set for all workspace packages. |

---

## Feature Request Trends
1. **Package/namespace isolation** — Opt-in `pi.namespace` (#8834), shrinkwrap removal (#5653), unified artifact validation (#10197).  
2. **MCP hardening** — Unix socket support (#10247), graceful shutdown during init (#10249), OAuth fixes (#10219).  
3. **Model catalog accuracy** — OpenRouter real-cost usage (#10286), Bedrock long-context tiers (#10329), Azure Foundry Chat (#9714).  
4. **Extension observability** — `queue_update` events for injected input discard (#10317), post-resolution prompt hooks (#10318).  
5. **Theme & TUI polish** — System theme fidelity (#10255, #10293), Home/End behavior toggle (#10314), cursor hiding on blur (#10323).  
6. **Cloud provider breadth** — Cloudflare Clef (#10321, #10322), LLM Gateway (#7610), Bedrock thinking controls (#10328).

---

## Developer Pain Points
- **Dependency hell**: Shrinkwrap duplicates `pi-ai`, pins vulnerable `brace-expansion`, and hides undeclared deps (#5653, #10288, #10197).  
- **Fullscreen TUI regressions**: Input garbage in tmux (#10250), image collapse (#10319), redraw storms (#9255), keybinding surprise (#10314).  
- **Cost trust**: OpenRouter estimates 2–3× off; no automatic fallback to provider-reported billing (#9980, #10286).  
- **MCP fragility**: OAuth scope parsing (#10219), shutdown races (#10249), no Unix socket transport (#10247).  
- **Memory bloat**: 140 MiB idle from eager highlight.js; lazy-load PR ready but unmerged (#10308).  
- **Extension opacity**: Injected messages disappear silently on abort; no receipt or replay (#10317).  

---

*Generated from `earendil-works/pi` GitHub data (releases, issues, PRs updated 2026-10-01 → 2026-10-02).*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code Community Digest — 2026-10-02

## 1. Today's Highlights
The project continues its deep investment in the **Managed Agent architecture**, with multiple PRs advancing hosted session runtime workers (M5a), harness generation adoption (G3), offline recovery bundles (W1b), and session-owned tool output retirement. A user-facing Windows fix for vim-mode clipboard paste is also landing. Token governance for non-conversation context remains an active design discussion.

## 2. Releases
**v0.24.7-nightly.20261001.a7deb01bcb** — Minor nightly with two fixes: aligns Code Mode text with lazy tool discovery ([#12990](https://github.com/QwenLM/qwen-code/pull/12990)) and honors approved permissions.

## 3. Hot Issues
| Issue | Why It Matters | Community Signal |
|-------|----------------|------------------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) **Managed Agent dual-path architecture** | Defines staged delivery keeping TS agent loop while decoupling model inference from tool-environment provisioning; foundational for session ownership, workspace bindings, recoverable executions, and WebSocket stability. | **40 comments** — highest engagement; marked `need-discussion`, spans `roadmap/session-management`, `roadmap/multi-agent`, `roadmap/platform-distribution` |
| [#12028](https://github.com/QwenLM/qwen-code/issues/12028) **Non-conversation context token governance** | System prompt, tool schemas, `QWEN.md`, and skill listings consume disproportionate tokens on every request; impacts cost and latency at scale. | **18 comments** — tagged `priority/P2`, `model/long-context`, `roadmap/context-performance` |
| [#13197](https://github.com/QwenLM/qwen-code/issues/13197) **Vim-mode clipboard paste broken on Windows** | Silent failure, CRLF pollution, wrong linewise detection in `readClipboard()`; affects all Windows users in interactive CLI. | **3 comments** — `priority/P2`, `scope/windows`, `scope/interactive`; fix PR [#13198](#key-pr-progress) opened same day |
| [#13124](https://github.com/QwenLM/qwen-code/issues/13124) **Hosted file history: retention & recovery** | Follow-up to [#13105](https://github.com/QwenLM/qwen-code/issues/13105) and [#13110](https://github.com/QwenLM/qwen-code/pull/13110); ensures durability and recoverability of file operations in hosted sessions. | **4 comments** — `priority/P2`, `roadmap/session-management`, `need-discussion` |
| [#13191](https://github.com/QwenLM/qwen-code/issues/13191) **AgentDefinition review deferrals** | Tracks 19 suggestions from PR [#13142](https://github.com/QwenLM/qwen-code/pull/13142) (immutable AgentDefinition revisions); addresses documentation claims and behavioral assumptions. | **5 comments** — `priority/P3`, `daemon`, `scope/sdk` |
| [#13201](https://github.com/QwenLM/qwen-code/issues/13201) **Managed auto-memory extractor Markdown style mixing** | Extractor rewrites mix emphasis styles (`*` vs `_`) in linted files; cosmetic but recreated on every extraction pass. | **1 comment** — `severity: Low`, component `memory` |
| [#13200](https://github.com/QwenLM/qwen-code/issues/13200) **RocketMQ LiteTopic as preferred P2 EventTransport** | Design-baseline note naming Apache RocketMQ LiteTopic (5.5.0+, RIP-83) for optional P2 event transport in managed-agent docs. | **1 comment** — `status/needs-triage`, infrastructure decision |
| [#11954](https://github.com/QwenLM/qwen-code/issues/11954) **Fleet Shepherd Dashboard** | Auto-maintained bot dashboard tracking fleet syncs, dispatches, releases, cleanups; last tick 2026-10-02T05:08:44Z. | **0 comments** — bot-maintained, operational visibility |

## 4. Key PR Progress
| PR | Description | Significance |
|----|-------------|--------------|
| [#13167](https://github.com/QwenLM/qwen-code/pull/13167) **feat(managed-agent): Runtime worker for Managed session tools (M5a)** | Implements Read, Write, Edit, foreground Shell in a Runtime worker; prepared/permission-checked in host, executed in worker. First part of slice M5 (Runtime-backed tools). | Core architectural milestone — decouples tool execution from agent loop |
| [#13174](https://github.com/QwenLM/qwen-code/pull/13174) **feat(managed-agent): Adopt next Hosted Harness generation (G3)** | Hosted Session no longer pinned to originating harness generation; Java control plane adopts next generation on restart instead of failing bound sessions. | Improves HA and upgrade resilience for hosted sessions |
| [#13138](https://github.com/QwenLM/qwen-code/pull/13138) **feat(managed-agent): Offline W1b recovery bundles** | Complete offline recovery workflow: captures bound sessions, exports private journals/resource closures, verifies operator-prepared workspace/worker-history copies. | Disaster recovery capability for managed sessions |
| [#13179](https://github.com/QwenLM/qwen-code/pull/13179) **fix(managed-agent): Harden commit retry, worker containment, panel polling** | Three robustness fixes with new unit tests: rejects relative paths escaping workspace, improves commit retry logic, stabilizes panel polling. | Operational hardening for hosted path |
| [#13144](https://github.com/QwenLM/qwen-code/pull/13144) **fix(managed-agent): Validate undo receipts & disclose backup limits** | Validates persisted Hosted undo receipts before consumption; rejects malformed identities, duplicate request IDs, unknown prompts, inconsistent conflicts. | Data integrity for session history/rollback |
| [#13198](https://github.com/QwenLM/qwen-code/pull/13198) **fix(cli): Make vim-mode clipboard paste work on Windows** | Fixes 200 ms PowerShell timeout in `readClipboard()`; increases timeout, adds fallback, handles CRLF, corrects linewise detection. | Directly resolves [#13197](#hot-issues) — high-impact Windows UX fix |
| [#12582](https://github.com/QwenLM/qwen-code/pull/12582) **feat(agents): Isolated remote Qwen runtime hosts** | Opt-in remote runtime for persistent workspace agents: outbound connect, short-lived token enrollment, scoped credential, leased work, bounded progress streaming, idempotent results. | Enables distributed/remote agent execution model |
| [#13166](https://github.com/QwenLM/qwen-code/pull/13166) **feat(managed-agent): Admit `glob` in hosted-workspace v2 profiles** | Adds read-only `glob` tool to `hosted-workspace-files/2` and `hosted-workspace-shell/2` profiles; worker admits `GlobTool` like managed MCP tools in H1. | Expands hosted workspace tool surface |
| [#13084](https://github.com/QwenLM/qwen-code/pull/13084) **feat(managed-agent): Protect Session-owned tool output retirement** | Permanent session retirement, fixed-budget DB reader leases, independent physical PUT attempts, candidate observation for foreground Shell output. | Lifecycle management for tool outputs |
| [#13154](https://github.com/QwenLM/qwen-code/pull/13154) **fix(web-shell): Stop memory panel replacing unreadable global QWEN.md** | Memory panel now reads global `~/.qwen/QWEN.md` via daemon memory route (not sandboxed file API); never offers save for file whose full text it lacks. | Prevents data loss in Web Shell memory editing |

## 5. Feature Request Trends
1. **Managed Agent platformization** — Dual-path architecture ([#12380](https://github.com/QwenLM/qwen-code/issues/12380)), staged delivery, session/workspace ownership, recoverable executions, WebSocket stability.
2. **Session & workspace durability** — Offline recovery bundles ([#13138](https://github.com/QwenLM/qwen-code/pull/13138)), file history retention ([#13124](https://github.com/QwenLM/qwen-code/issues/13124)), tool output retirement ([#13084](https://github.com/QwenLM/qwen-code/pull/13084)), harness generation adoption ([#13174](https://github.com/QwenLM/qwen-code/pull/13174)).
3. **Web Shell parity & trust** — Workspace trust without terminal ([#13146](https://github.com/QwenLM/qwen-code/pull/13146)), approval card disabling for unanswerable requests ([#13165](https://github.com/QwenLM/qwen-code/pull/13165)), memory panel fixes ([#13154](https://github.com/QwenLM/qwen-code/pull/13154)).
4. **Token/context efficiency** — Governance of non-conversation context (system prompt, tool schemas, `QWEN.md`, skills) sent on every request ([#12028](https://github.com/QwenLM/qwen-code/issues/12028)).
5. **Remote/runtime isolation** — Isolated remote Qwen runtime hosts ([#12582](https://github.com/QwenLM/qwen-code/pull/12582)), runtime worker for tool execution ([#13167](https://github.com/QwenLM/qwen-code/pull/13167)).
6. **Cross-platform CLI polish** — Windows vim-mode clipboard ([#13197](https://github.com/QwenLM/qwen-code/issues/13197)/[#13198](https://github.com/QwenLM/qwen-code/pull/13198)), exact-version updates without npm ([#11486](https://github.com/QwenLM/qwen-code/pull/11486)).

## 6. Developer Pain Points
- **Windows interactive CLI** — Vim-mode clipboard paste silently fails, pollutes CRLF, misdetects linewise mode ([#13197](https://github.com/QwenLM/qwen-code/issues/13197)).
- **Session/workspace trust & recovery** — Folder trust fails closed, only terminal could record decision ([#13146](https://github.com/QwenLM/qwen-code/pull/13146)); hosted harness restart fails bound sessions ([#13174](https://github.com/QwenLM/qwen-code/pull/13174)); file history retention gaps ([#13124](https://github.com/QwenLM/qwen-code/issues/13124)).
- **Token cost opacity** — Non-conversation context (system prompt, tool schemas, `QWEN.md`, skills) dwarfs conversation tokens unnoticed ([#12028](https://github.com/QwenLM/qwen-code/issues/12028)).
- **Web Shell approval UX** — Allow/Deny buttons stay enabled on unanswerable approvals, sending repeated 403 requests ([#13165](https://github.com/QwenLM/qwen-code/pull/13165)).
- **CI

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI Community Digest — 2026-10-02

## 1. Today's Highlights
The v0.10.1 integration wave continues with PR #6815 delivering remaining fixes after #6782 landed on `main`. A community-driven Chinese localization initiative (#6804) launched to address documentation translation quality and synchronization challenges. Core infrastructure work advances on schedule management UI (#6328) and ratatui component catalog completion (#6814), while authentication UX improves for multi-account ChatGPT/xAI scenarios (#6715).

## 2. Releases
*No new releases in the last 24 hours.*

## 3. Hot Issues

| Issue | Why It Matters | Community Reaction |
|-------|----------------|-------------------|
| [#6309](https://github.com/Hmbown/Codewhale/issues/6309) **YOLO mode restoration** | Users want auto-approval mode back for seamless terminal workflow; current per-action approval friction reduces productivity for trusted operations. | 6 comments, closed — suggests maintainers may have addressed or deferred |
| [#6804](https://github.com/Hmbown/Codewhale/issues/6804) **Chinese localization group formation** | Addresses critical documentation gap: AI-translated docs are "readable but painful"; seeks sustainable community model for multi-language sync across open-source projects. | 2 comments, fresh — early traction for cross-project collaboration |
| [#6328](https://github.com/Hmbown/Codewhale/issues/6328) **Schedule list UI for watches/heartbeat** | Blocks agent automation UX: named watches, intervals, pause/resume, last/next run rendering. Depends on Core cron routes. | 0 comments, author-assigned — internal priority |
| [#6814](https://github.com/Hmbown/Codewhale/issues/6814) **Ratatui component catalogue & README gallery** | Founder-requested artistic overhaul: color themes, ombrés, full component coverage, live gallery. Blocks UI consistency and contributor onboarding. | 0 comments, author-assigned — design-driven |
| [#6582](https://github.com/Hmbown/Codewhale/issues/6582) **Structured execution receipts for shell tool_call_after** | Enables MemoryWhale plugin to capture command metadata (cmd, cwd, exit code, output) via stdin for local SQLite-backed session memory. | 0 comments, closed — likely merged or superseded |

## 4. Key PR Progress

| PR | Type | Description |
|----|------|-------------|
| [#6815](https://github.com/Hmbown/Codewhale/pull/6815) | Integration | **v0.10.1 part 2**: idle task workers stop 200ms disk polling (#6728, #6573); task-store lock names holder; queued/cancelled turn settlement; undo restores durable conversation; Linux permission fixes. |
| [#6782](https://github.com/Hmbown/Codewhale/pull/6782) | Integration | **v0.10.1 wave 1 (closed)**: audit repairs + contributor PRs #6793, #6799, #6802. Engine event authority for turn lifecycle; inference replacement undo; permission handling. |
| [#6715](https://github.com/Hmbown/Codewhale/pull/6715) | Fix (auth) | **Multi-account ChatGPT/xAI**: choose, show, switch accounts; display active account; usage-limit errors identify which account. |
| [#6805](https://github.com/Hmbown/Codewhale/pull/6805) | Feature (plugins) | **Reviewed OAuth AI providers**: plugin bundles declare `extensions.net.codewhale.providers` for OpenAI-compatible endpoints + public OAuth clients; consumed by provider route, model catalog, streaming — no proxy needed. |
| [#6739](https://github.com/Hmbown/Codewhale/pull/6739) | Fix (context) | **Repo-relative source labels**: chain-segment (`<!-- scoped instructions: ... -->`) and `<project_rule source=...>` now render relative paths, surviving checkout moves. Stacked on #6737. |
| [#6807](https://github.com/Hmbown/Codewhale/pull/6807) | Feature (pet) | **Watch whale v2 contour**: parity change — draws desktop whale contour in Watch view per owner request (no tracking issue). |
| [#6813](https://github.com/Hmbown/Codewhale/pull/6813) | Deps (nix) | **nixpkgs bump**: `6774f7b` → `7a0f122` (wrench-exile-legacy update). |
| [#6812](https://github.com/Hmbown/Codewhale/pull/6812) | Deps (nix) | **fenix bump**: `48b35ac` → `e659899`; drops x86_64-darwin from systems. |
| [#6811](https://github.com/Hmbown/Codewhale/pull/6811) | Deps (js) | **React 19.2.8 → 19.3.0** + `@types/react` in `/web`. |
| [#6810](https://github.com/Hmbown/Codewhale/pull/6810) | Deps (js) | **@types/node 26.6.1 → 26.6.3** in `/web`. |

## 5. Feature Request Trends
1. **Automation & unattended operation** — YOLO/auto-approval mode (#6309), scheduled watches/heartbeats (#6328), structured tool receipts for local memory (#6582).
2. **Multi-provider & multi-account UX** — First-class account switching for ChatGPT/xAI (#6715), plugin-declared OAuth providers (#6805).
3. **Documentation & localization at scale** — Community-driven translation group to maintain quality/sync across languages (#6804).
4. **UI/UX polish & component system** — Artistic director overhaul for ratatui: themes, gallery, full coverage (#6814), visual parity for mascot (#6807).
5. **Plugin extensibility** — Reviewed provider declarations, structured stdin hooks for ecosystem tools (MemoryWhale).

## 6. Developer Pain Points
- **Approval fatigue**: Per-action confirmation loops break flow for trusted terminal tasks; users explicitly request YOLO mode return.
- **Documentation debt**: AI-translated technical docs remain "readable but painful"; no sustainable process for multi-language sync as upstream English evolves.
- **Account ambiguity**: No visibility into which ChatGPT/xAI account is active; usage errors don't identify the account, causing wasted debugging.
- **Path fragility**: Absolute paths in pinned prompts/context break on repo move or checkout relocation — now being fixed repo-relative.
- **Infrastructure polling waste**: Idle workers hammering disk every 200ms — addressed in v0.10.1 but indicative of earlier architecture gaps.
- **Component discoverability**: Ratatui UI lacks living gallery/catalogue, slowing contributor onboarding and design consistency.

</details>

<details>
<summary><strong>Grok Build</strong> — <a href="https://github.com/xai-org/grok-build">xai-org/grok-build</a></summary>

No activity in the last 24 hours.

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*