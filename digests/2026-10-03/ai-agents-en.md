# OpenClaw Ecosystem Digest 2026-10-03

> Issues: 141 | PRs: 500 | Projects covered: 12 | Generated: 2026-10-03 04:58 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw Deep Dive

# OpenClaw Project Digest — 2026-10-03

## 1. Today's Overview

OpenClaw demonstrates **extremely high development velocity** with 500 PRs and 141 issues updated in the last 24 hours. The project maintains a rapid release cadence (v2026.9.8 released with 58 commits from 21 contributors, plus an extended-stable v2026.8.35). The open/closed ratios (~40% open issues, ~58% open PRs) suggest active triage and merge throughput. Critical production bugs persist around SQLite WAL growth, agent persistence blocking the event loop, and child process leaks — all marked P0/P1 with high comment counts indicating community impact.

## 2. Releases

### v2026.9.8 (Latest)
- **Scope**: 58 commits · 43 PRs · 21 contributors
- **Release notes**: [docs.openclaw.ai/releases/2026.9](https://docs.openclaw.ai/releases/2026.9)
- **Type**: Regular release (not LTS)

### v2026.8.35 (Extended-Stable / LTS Equivalent)
- **Scope**: Gateway-only release from end of August 2026 + critical security updates, reliability/performance fixes, new model support
- **Purpose**: Current "extended-stable" line for production deployments requiring stability

> **Note**: No breaking changes or migration notes explicitly listed in the provided data. Check release notes link for full details.

---

## 3. Project Progress (Merged/Closed PRs Today)

**208 PRs merged/closed** in the last 24h. Key merged themes from the top PRs:

| PR | Area | Status | Summary |
|----|------|--------|---------|
| [#164032](https://github.com/openclaw/openclaw/pull/164032) | agents/tool-search | Ready for review | Fix: find tool parameters inside composed schemas (`anyOf`/`oneOf`/`allOf`) — addresses [#164024](https://github.com/openclaw/openclaw/issues/164024) |
| [#164038](https://github.com/openclaw/openclaw/pull/164038) | scripts/installer | Ready for review | Fix: stop installer falsely claiming PATH ready from profile text comments |
| [#164041](https://github.com/openclaw/openclaw/pull/164041) | web-ui | Ready for review | Feat: show agent warm-up instead of restart error in Control UI |
| [#163995](https://github.com/openclaw/openclaw/pull/163995) | control-ui | Ready for review | Feat: show worker lifecycle history on Systems page |
| [#163945](https://github.com/openclaw/openclaw/pull/163945) | state/memory | **Closed** | Refactor: deslop state and memory storage (removes pre-July generic memory importer) |
| [#164014](https://github.com/openclaw/openclaw/pull/164014) | gateway/workers | Open | Refactor: deslop gateway workers and turns (cleanup forwarding layers) |
| [#162061](https://github.com/openclaw/openclaw/pull/162061) | update/transcript | Needs proof | Fix: reconcile stored transcript content before marking update-run notice delivered |
| [#162086](https://github.com/openclaw/openclaw/pull/162086) | agents/idle-watchdog | Needs proof | Fix: stop content-free stream chunks from re-arming LLM idle watchdog |
| [#162266](https://github.com/openclaw/openclaw/pull/162266) | gateway/channels | Ready for review | Fix: restore channel startup after stopped Tailscale failures |

**Pattern**: Heavy investment in **refactoring/deslopping** (removing legacy layers, duplicate projections, forwarding indirection) across gateway, agents, state, and secrets — likely preparing for architectural changes (incognito actor, new routing).

---

## 4. Community Hot Topics (Most Active Issues/PRs)

| Issue | Comments | Labels/Severity | Core Problem |
|-------|----------|-----------------|--------------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | **104** | P0, crash-loop, ux-release-blocker, 🦐 gold shrimp | **SQLite WAL grows to 1.4–2.8 GB in days** on Windows despite `wal_autocheckpoint=1000`; blocks gateway startup |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | **21** | P1, crash-loop, session-state, 🦞 diamond lobster | **Synchronous agent persistence & transcript maintenance block Gateway event loop at scale** |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | **17** | P1, crash-loop, message-loss, 🦪 silver shellfish | **Unreaped hook/tool child processes leak as zombies**, causing runtime degradation |
| [#118885](https://github.com/openclaw/openclaw/issues/118885) | **13** | P1, 🦞 diamond lobster | **Redundant full SQLite `integrity_check` on large DBs** during single startup |
| [#154572](https://github.com/openclaw/openclaw/issues/154572) | **10** | P1, session-state, data-loss, 🦪 silver shellfish | **`sessions_spawn` to claude-cli-runtime fails with `SessionTranscriptWriterClaimReboundError` (~350ms)** |
| [#160548](https://github.com/openclaw/openclaw/issues/160548) | **10** | P1, message-loss, 🦪 silver shellfish | **Prepared-model-catalog worker leaks ~1 GiB/5 min**, memory reclamation kills waiting turns |
| [#131609](https://github.com/openclaw/openclaw/pull/131609) | PR | P1, 🚨 session-state, 🚨 message-delivery | **Fix outbound delivery uncertainty across completion, custody, routing** (maintainer review needed) |

**Underlying needs**: 
- **Scale/reliability**: Multiple P0/P1 issues around SQLite management, event loop blocking, and memory leaks at scale
- **Delivery guarantees**: Uncertainty in message delivery, custody, and retry semantics (PR #131609)
- **Windows support**: WAL growth issue is Windows-specific and blocks releases

---

## 5. Bugs & Stability (Reported/Updated Today)

### Critical (P0 / Release Blockers)
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | P0, crash-loop, ux-release-blocker | ❌ No fix PR linked | SQLite WAL unbounded growth on Windows (2.8 GB), blocks startup |
| [#149804](https://github.com/openclaw/openclaw/issues/149804) | P0, ux-release-blocker, auth-provider | ❌ | macOS app: node-role token never resolves after v2 token-key migration (loops `token_missing`) |
| [#155563](https://github.com/openclaw/openclaw/issues/155563) | P0, crash-loop | ❌ | Regression 2026.9.5: service-child relay/anchor & MCP groups retained after successful turn |
| [#119565](https://github.com/openclaw/openclaw/issues/119565) | P0, crash-loop | ❌ | Concurrent MCP calls cause excessive memory amplification with Codex native hooks |

### High (P1)
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | P1, crash-loop, session-state | Partial fixes landed (#140231, #138984) | Sync persistence blocks event loop at scale |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | P1, crash-loop, message-loss | ❌ | Child process zombies accumulate from hook/tool execution |
| [#154572](https://github.com/openclaw/openclaw/issues/154572) | P1, session-state, data-loss | ❌ | `sessions_spawn` to claude-cli fails with `SessionTranscriptWriterClaimReboundError` |
| [#160548](https://github.com/openclaw/openclaw/issues/160548) | P1, message-loss | ❌ | Prepared-model-catalog worker leaks 1 GiB/5 min |
| [#148274](https://github.com/openclaw/openclaw/issues/148274) | P1, security, message-loss | ❌ | Slack exec completion crosses apps/DMs, loses originating thread |
| [#125284](https://github.com/openclaw/openclaw/issues/125284) | P0, security | ❌ | Ask-mode approval prompt doesn't block exec in containerized gateway (command runs before approval) |

### Medium (P2) — Notable
| Issue | Severity | Fix PR? | Summary |
|-------|----------|---------|---------|
| [#118885](https://github.com/openclaw/openclaw/issues/118885) | P1 | ❌ | Redundant full `integrity_check` on large SQLite DBs at startup |
| [#164024](https://github.com/openclaw/openclaw/issues/164024) | P2 | ✅ [#164032](https://github.com/openclaw/openclaw/pull/164032) | Tool Search misses parameters inside composed schemas (`anyOf`/`oneOf`/`allOf`) |
| [#163950](https://github.com/openclaw/openclaw/issues/163950) | P2, ux-friction | ❌ | Updater: failed post-update verification leaves permanent warning on healthy gateway |
| [#105854](https://github.com/openclaw/openclaw/issues/105854) | P1, stale | ❌ | Sandbox skill read fails: `SKILL.md` not found under full sandboxing (mode: "all") |

---

## 6. Feature Requests & Roadmap Signals

| Issue | Type | Signals | Likelihood for Next Version |
|-------|------|---------|----------------------------|
| [#139586](https://github.com/openclaw/openclaw/issues/139586) | Feature | Extend Gateway-wide automation mgmt to native macOS & Talk admin turns | Medium — extends existing admin model |
| [#151024](https://github.com/openclaw/openclaw/issues/151024) | Feature | Allow plugins to register node-scoped Gateway methods | Medium — builds on existing plugin/node auth |
| [#129884](https://github.com/openclaw/openclaw/issues/129884) | Feature | Opt-in path excludes / bounded path-authority weights for memory search ranking | Low — requires ranking algorithm changes |
| [#114145](https://github.com/openclaw/openclaw/issues/114145) | Feature | Define safe scale-to-zero recovery contract for Gateway hosts | High — aligns with refactoring toward worker/incognito architecture |
| [#10960](https://github.com/openclaw/openclaw/issues/10960) | Feature | Mid-stream message injection (soft steer) | Low — long-standing (2026-02), complex streaming change |
| [#42648](https://github.com/openclaw/openclaw/issues/42648) | Feature | Memory MVP: write pipeline with classification, dedupe, merge, conflict handling | Medium — "Memory MVP" label suggests active track |

**Roadmap inference**: The heavy refactoring PRs (#163945, #164014, #164020, #163889) plus incognito actor PR (#164044) suggest **architectural work toward:**
1. Worker-based execution (offloading SQLite from gateway thread)
2. Incognito/ephemeral actor model (P5b → P7 routing switch)
3. Scale-to-zero / stateless gateway readiness
4. Delivery guarantee hardening (PR #131609)

---

## 7. User Feedback Summary

**Pain Points (from issue narratives):**
- **Windows users blocked**: WAL growth makes OpenClaw unusable on Windows after days (#143524)
- **Scale limits hit**: Event loop blocking, memory leaks, zombie processes at modest concurrency (#119720, #160548, #97616)
- **Claude CLI integration fragile**: Spawn failures, mid-turn text not delivered durably (#154572, #110067)
- **Upgrade anxiety**: Updater leaves false warnings (#163950), installer gives false PATH success (#164038)
- **Security gaps**: Approval bypass in containers (#125284), cross-conversation message leakage (#148274), auth token loops (#149804)

**Positive signals:**
- Active community reproduction & debugging (detailed steps, configs, logs in issues)
- Contributors filing fixes for niche bugs (e.g., composed schema tool search #164024 → #164032 same day)
- LTS release (v2026.8.35) indicates production adoption requiring stability

---

## 8. Backlog Watch (Long-Unanswered Important Items)

| Item | Age | Severity | Why It Matters |
|------|-----|----------|----------------|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | ~60 days | P1, crash-loop | Core scalability blocker; partial fixes landed but issue remains open |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | ~95 days | P1, crash-loop | Zombie process leak degrades all long-running deployments |
| [#118885](https://github.com/openclaw/openclaw/issues/118885) | ~61 days | P1 | Redundant integrity checks waste startup time on large DBs |
| [#61238](https://github.com/openclaw/openclaw/issues/61238) | ~180 days | P2, data-loss | Silent daily session reset at 4 AM — no user disclosure/opt-out |
| [#10960](https://github.com/openclaw/openclaw/issues/10960) | ~240 days | P2, 🐚 platinum hermit | Mid-stream steering — highly requested UX feature |
| [#42648](https://github.com/openclaw/openclaw/issues/42648) | ~205 days | P3, 🌊 off-meta | Memory MVP write pipeline — foundational for memory features |
| [#131609](https://github.com/openclaw/openclaw/pull/131609) | ~35 days | P1, 🚨 session-state/delivery | **Critical PR awaiting maintainer review** — fixes delivery uncertainty |

**Maintainer attention needed**: PR #131609 (delivery guarantees) has been open since Aug 28 with "review-required" tag. Issues #119720 and #97616 are long-standing P1 stability bugs affecting production users at scale.

---

## Project Health Assessment

| Dimension | Assessment | Evidence |
|-----------|------------|----------|
| **Velocity** | 🟢 Very High | 500 PRs/24h, 21 contributors/release |
| **Stability** | 🟡 Concerning | 4 P0 issues open, multiple P1 crash-loop bugs |
| **Technical Debt** | 🟢 Actively Addressed | Massive "deslop" refactoring wave across

---

## Cross-Ecosystem Comparison

# Cross-Project Comparison Report: Personal AI Assistant / Agent Open-Source Ecosystem (2026-10-03)

---

## 1. Ecosystem Overview

The personal AI assistant/agent open-source landscape shows **strong polarization** between a few highly active "platform" projects (OpenClaw, ZeroClaw, NanoClaw, CoPaw, NanoBot, Hermes Agent) and a long tail of low-activity or dormant repositories. The active cluster is converging on **production hardening**—SQLite durability, event-loop offloading, multi-provider gateway routing, and delivery guarantees—rather than raw feature expansion. Architectural patterns are diverging: some pursue **monolithic gateway + worker offload** (OpenClaw, ZeroClaw), others **lightweight CLI-first with plugin/provider extensibility** (NanoBot, CoPaw, PicoClaw), and a few **specialized niches** (IronClaw for local-dev, LobsterAI for local-first desktop). Community scale correlates with corporate/institutional backing (OpenClaw, ZeroClaw, NanoClaw, CoPaw, Hermes Agent), while solo-maintainer projects show maintenance debt accumulation.

---

## 2. Activity Comparison

| Project | Issues (24h) | PRs (24h) | Merged/Closed PRs (24h) | Release Status | Health Score* |
|---------|--------------|-----------|--------------------------|----------------|---------------|
| **OpenClaw** | 141 | 500 | 208 | **Active** (v2026.9.8 + LTS v2026.8.35) | 🟢 Velocity / 🟡 Stability |
| **ZeroClaw** | 24 | 50 | 0 | Pre-release (target v0.9.0) | 🟡 High WIP / 🟢 Roadmap execution |
| **NanoClaw** | 27 | 30 | ~5 | Pre-release (v2.1.54/2.2.0 imminent) | 🟢 Stabilizing |
| **CoPaw** | 13 | 15 | 7 | Beta (v2.2.2.beta4) | 🟢 Polishing |
| **Hermes Agent** | 8 | 50 | 24 | Maintenance | 🟢 Hardening |
| **NanoBot** | 5 | 29 | 7 | Maintenance (v0.3.5) | 🟢 Bug-fix mode |
| **PicoClaw** | 3 | 3 | 1 | Maintenance (v0.3.1) | 🟡 UX debt |
| **LobsterAI** | 6 (stale) | 3 | 2 | Maintenance | 🟡 Security hardening |
| **IronClaw** | 1 | 0 | 0 | Maintenance | 🔴 Minimal |
| **NullClaw** | 0 | 0 | 0 | — | ⚫ Dormant |
| **Moltis** | 0 | 0 | 0 | — | ⚫ Dormant |
| **ZeptoClaw** | 0 | 0 | 0 | — | ⚫ Dormant |

*Health Score: 🟢=Healthy active, 🟡=Active with concerns, 🔴=Struggling, ⚫=Inactive

---

## 3. OpenClaw's Position

**Advantages vs. Peers:**
- **Scale of operation**: 500 PRs/24h, 21 contributors/release—an order of magnitude above peers
- **Production maturity**: LTS release line (v2026.8.35) + regular cadence indicates real deployments
- **Architectural lead**: Already executing gateway/worker split, incognito actor model, and scale-to-zero contracts that others only plan
- **Community debugging depth**: Issues include detailed configs, logs, and reproduction steps (e.g., #143524 WAL growth)

**Technical Approach Differences:**
| Dimension | OpenClaw | Typical Peer (NanoClaw, ZeroClaw, CoPaw) |
|-----------|----------|------------------------------------------|
| **Core architecture** | Gateway + worker offload, SQLite-centric state | Monolithic or nascent gateway split |
| **Delivery guarantees** | Active PR (#131609) on custody/routing | Mostly best-effort |
| **Multi-tenancy** | Built-in (foreign tenant routing fix #121574) | Rare / single-user focus |
| **Windows support** | First-class (P0 blocker on WAL) | Often Linux/macOS primary |

**Community Size**: Largest by contributor count (21/release) and issue engagement (104 comments on top bug). Only project with sustained external reproducer community.

---

## 4. Shared Technical Focus Areas

| Focus Area | Projects Affected | Specific Needs |
|------------|-------------------|----------------|
| **SQLite durability & WAL management** | OpenClaw (#143524), LobsterAI (#906), ZeroClaw (implicit) | Atomic writes, autocheckpoint tuning, corruption recovery |
| **Event-loop / gateway offloading** | OpenClaw (#119720), ZeroClaw (gateway split PRs), NanoClaw (channels branch) | Move persistence, model catalog, heavy compute off main thread |
| **Provider/model parity** | NanoBot (#5898 gpt-6/Copilot), CoPaw (#8074 GPT-6), PicoClaw (#3381 Responses API), Hermes Agent (#74739 Kimi UA) | Dynamic capability detection, versioned provider specs, union-type schema coercion |
| **Delivery guarantees & message custody** | OpenClaw (#131609), ZeroClaw (ACP turn persistence #10673), NanoClaw (Discord 400 #4002) | Idempotency, retry semantics, cross-platform ID normalization |
| **Container/sandbox security** | OpenClaw (#125284 approval bypass), NanoClaw (root-owned mounts #3951), ZeroClaw (shell memory watchdog #11456) | Hardened exec, resource limits, approval enforcement in isolated envs |
| **Session/context continuity** | CoPaw (#7884 history loss), ZeroClaw (#10905 manual compaction), Hermes Agent (SSH cwd #132025) | Long-term retention, edit/retract, cross-device sync |
| **Update/rollback safety** | NanoClaw (#4003 rollback deletes data, #4004 tsx version bump), OpenClaw (#163950 false warnings) | Atomic cutover, dependency verification, rollback integrity |

---

## 5. Differentiation Analysis

| Project | Primary Focus | Target User | Architecture | Key Differentiator |
|---------|---------------|-------------|--------------|---------------------|
| **OpenClaw** | Production gateway platform | Teams, enterprises, power users | Gateway + worker offload, SQLite state, multi-tenant | Scale, delivery guarantees, Windows support, LTS |
| **ZeroClaw** | Modular gateway + TUI (ZeroCode) | Developers, advanced users | Gateway standalone crate, feature-gated tools, delegate workers | Token-budget awareness, opt-in SaaS tools, manual context compaction |
| **NanoClaw** | Multi-channel messaging hub | Self-hosters, families, homelabs | Channel adapters (Slack/Discord/WhatsApp/Gmail), Iron Proxy | Private-fork installs, multi-user single host, update channels |
| **CoPaw** | Polished desktop/web IDE agent | Developers, Qwen ecosystem | Tauri desktop, provider-configurable, MCP-native | UX polish (scroll lock, tool toggle), first-time contributor magnet |
| **NanoBot** | Lightweight gateway + cron/skills | Automation builders, multi-provider users | Plugin/provider gateway, cron persistence, exec sessions | 38+ provider compat, Opper/Eden/OrcaRouter, hard exec timeouts |
| **Hermes Agent** | Desktop CLI/TUI with plugin system | Power users, plugin authors | Plugin sandbox, i18n layers, cron/kanban, SSH sessions | Recursion guards, session restoration, composer middleware |
| **PicoClaw** | Minimal web UI + MCP search | Casual users, MCP adopters | Web-first, Parallel Search MCP, provider switching | Sub-path hosting, Cheaper Inference, Responses API migration |
| **LobsterAI** | Local-first desktop assistant | Privacy-conscious individuals | Electron + safeStorage, Feishu/Cherry Studio integration | Token encryption at rest, skill-install security scan |
| **IronClaw** | Local development profile | NEAR ecosystem devs | `local-dev` boot profile, web-app extension | macOS Apple Silicon focus, credential store integration |

---

## 6. Community Momentum & Maturity

| Tier | Projects | Characteristics |
|------|----------|-----------------|
| **Rapid Iteration (High Velocity + High WIP)** | OpenClaw, ZeroClaw | 500/50 PRs/day, stacked XL PRs, architectural milestones in flight |
| **Active Stabilization (Fixes > Features)** | NanoClaw, CoPaw, Hermes Agent, NanoBot | Beta/pre-release, regression fixes same-day, UX polish merging |
| **Maintenance / Security Hardening** | LobsterAI, PicoClaw | Stale issue triage, security PRs merged, core UX bugs aging |
| **Minimal / Dormant** | IronClaw, NullClaw, Moltis, ZeptoClaw | ≤1 issue/24h, no PR activity, no releases |

**Key Insight**: The "Rapid Iteration" tier projects (OpenClaw, ZeroClaw) are **re-architecting for scale** while the "Active Stabilization" tier is **hardening existing architectures**. This suggests a two-wave evolution: platform projects solving systemic bottlenecks first, then downstream adopters stabilizing on those patterns.

---

## 7. Trend Signals for AI Agent Developers

| Trend | Evidence | Strategic Value |
|-------|----------|-----------------|
| **Gateway/worker separation is becoming standard** | OpenClaw (incognito actor), ZeroClaw (4 stacked gateway PRs), NanoClaw (channels branch merge) | Invest in offloading SQLite/persistence from event loop *now*; expect IPC contracts to stabilize |
| **Provider abstraction layers are consolidating** | NanoBot (38 providers), CoPaw (per-media inline caps), PicoClaw (Responses API), Hermes Agent (Kimi UA fix) | Build against **capability matrices** not model names; expect union-type schema coercion as baseline |
| **Delivery guarantees > raw throughput** | OpenClaw (#131609), ZeroClaw (ACP persistence), NanoClaw (Discord ID fix) | Design for **idempotent tool calls, custody transfer, retry budgets** from day one |
| **Local-first security hardening accelerates** | LobsterAI (safeStorage tokens), OpenClaw (container approval bypass), NanoClaw (root mount cleanup), ZeroClaw (shell memory watchdog) | **Encrypt at rest, enforce approval in sandbox, limit subprocess resources**—table stakes for 2027 |
| **Session continuity is the next UX frontier** | CoPaw (edit/retract + rollback), ZeroClaw (manual compaction), Hermes Agent (SSH cwd restore), PicoClaw (sub-path hosting) | Users expect **Git-like message editing, cross-device context, deploy-anywhere routing** |
| **Update/rollback reliability is a release blocker** | NanoClaw (2 critical update bugs), OpenClaw (false warnings), ZeroClaw (config apply results PR) | **Atomic cutover, dependency verification, per-target rollback reporting** required for production trust |

---

**Bottom Line for Decision-Makers**: The ecosystem is **consolidating around a gateway/worker architecture with hardened delivery semantics**. OpenClaw and ZeroClaw are defining the platform layer; NanoClaw, CoPaw, NanoBot, and Hermes Agent are validating it in specialized niches. Projects ignoring SQLite durability, event-loop offloading, and provider capability negotiation will face **production-blocking regressions within 6–12 months**. Contributor activity is concentrating on projects with **clear architectural milestones** (OpenClaw v2026.9, ZeroClaw v0.9.0, NanoClaw v2.2.0)—align roadmaps accordingly.

---

## Peer Project Reports

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot Project Digest — 2026-10-03

## 1. Today's Overview
NanoBot shows **high maintenance velocity** with 29 PRs and 5 issues updated in the last 24 hours. The project is in active bug-fix and stabilization mode: 7 PRs were merged/closed yesterday, addressing regressions in cron persistence, agent failure-state handling, exec timeouts, tool-registry edge cases, and Linear reauthorization security. No new release was cut. Open PR count (22) exceeds closed, indicating a growing review backlog. Community engagement is modest—most items have 0–1 comments—suggesting contributors are driving fixes rather than external reporters.

## 2. Releases
**No new releases** in the last 24 hours. Current latest remains `v0.3.5` (per issue #5898).

## 3. Project Progress — Merged/Closed PRs (7)
| PR | Area | Summary |
|----|------|---------|
| [#5933](https://github.com/HKUDS/nanobot/pull/5933) | **cron / reliability** | **P0 fix**: Persist merged cron store *before* clearing `action.jsonl`, preventing pending-action loss on write failure (ENOSPC, etc.). Closes #5932. |
| [#5995](https://github.com/HKUDS/nanobot/pull/5995) | **agent / regression** | Clear stale `stop_reason`/`error` before processing late follow-up messages, fixing false “failed run” reporting that suppressed final WebSocket reply. |
| [#5957](https://github.com/HKUDS/nanobot/pull/5957) | **exec / reliability** | Enforce hard session timeouts independently of polling loop; prevents commands from silently exceeding `yield_time_ms`. |
| [#5994](https://github.com/HKUDS/nanobot/pull/5994) | **agent / tools** | Honor explicitly empty `ToolRegistry()` passed to `process_direct()`; stops default tools from re-enabling when all tools are disabled via policy. |
| [#5918](https://github.com/HKUDS/nanobot/pull/5918) | **tools / schema** | Fix JSON Schema `type` array (union) coercion: `{"type":["integer","string"]}` no longer incorrectly converts `"00123"`→`123` or rejects valid strings. |
| [#5997](https://github.com/HKUDS/nanobot/pull/5997) | **linear / security** | Reject stale member-access updates arriving after workspace reauthorization, preventing re-enabling explicitly denied members. |
| *(1 additional closed PR not in top-20 list)* | | |

**Net effect**: Core reliability (cron, exec, agent state), schema correctness, and one security hardening for Linear.

## 4. Community Hot Topics
| Item | Activity | Signal |
|------|----------|--------|
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) — **gpt-6 / GitHub Copilot support** | 4 comments, open since 2026-09-24 | **Highest engagement**. Users on v0.3.5 cannot use OpenAI “gpt-6” model series via Copilot; error: “Mode provider request failed”. Indicates provider registry / model-capability matrix lagging behind upstream model releases. |
| [#6002](https://github.com/HKUDS/nanobot/issues/6002) — **`reasoningEffort` drops `temperature` globally** | 1 comment, filed 2026-10-02 | Affects **38 of 46 `openai_compat` providers**. Setting `reasoningEffort` ≠ `null`/`"none"` silently suppresses `temperature` for *all* providers, not just o1/o3/o4. Broad impact on deterministic/creative tuning. |
| [#6008](https://github.com/HKUDS/nanobot/issues/6008) — **WebUI sidebar state wipe on fetch failure** | 0 comments, filed 2026-10-02 | Silent fallback to default state masks initial API failure; subsequent user mutations (pin/rename/archive) persist corrupted state. UX regression. |
| [#6006](https://github.com/HKUDS/nanobot/issues/6006) — **QQ quoted messages dropped** | 0 comments, filed 2026-10-02 | Quoted message content never reaches agent in C2C/group chats; breaks context-dependent follow-ups. Channel-adapter gap. |

**Underlying needs**: Provider/model parity with upstream (Copilot, new OpenAI series), correct parameter propagation across 38+ providers, and resilient UI/channel state handling.

## 5. Bugs & Stability — Today’s Reports (ranked by severity)
| Severity | Issue | Fix PR? |
|----------|-------|---------|
| **P0 (data loss)** | [#5932](https://github.com/HKUDS/nanobot/issues/5932) Cron pending actions lost on store write failure | ✅ Fixed in [#5933](https://github.com/HKUDS/nanobot/pull/5933) (merged) |
| **P1 (broad regression)** | [#6002](https://github.com/HKUDS/nanobot/issues/6002) `reasoningEffort` drops `temperature` for 38 providers | ❌ No PR yet |
| **P1 (provider breakage)** | [#5898](https://github.com/HKUDS/nanobot/issues/5898) gpt-6 series unsupported via GitHub Copilot | ❌ No PR yet |
| **P2 (UX regression)** | [#6008](https://github.com/HKUDS/nanobot/issues/6008) WebUI sidebar state wiped after failed fetch | ❌ No PR yet |
| **P2 (channel gap)** | [#6006](https://github.com/HKUDS/nanobot/issues/6006) QQ quoted messages never reach agent | ❌ No PR yet |

**Stability note**: 4 of 5 active bugs are regressions or newly surfaced gaps; only the cron issue has a merged fix.

## 6. Feature Requests & Roadmap Signals
| Signal | Source | Likelihood for Next Version |
|--------|--------|-----------------------------|
| **Opper as built-in gateway provider** | [#5845](https://github.com/HKUDS/nanobot/pull/5845) (open PR, 12 days old) | **High** — follows Eden AI / OrcaRouter pattern; only needs review/merge. |
| **`sendProgress` semantic fix** | [#6001](https://github.com/HKUDS/nanobot/pull/6001) (open PR, filed today) | **High** — clarifies existing flag behavior; small scope. |
| **Case-sensitive URL dedupe for web scraping** | [#5926](https://github.com/HKUDS/nanobot/pull/5926) (open PR) | **Medium** — corrects over-aggressive lowercasing; test-covered. |
| **Null/enum validation for tool params** | [#5965](https://github.com/HKUDS/nanobot/pull/5965) (open PR) | **Medium** — JSON Schema compliance; may be batched with other schema fixes. |
| **Compound retry-duration parsing** | [#5963](https://github.com/HKUDS/nanobot/pull/5963) (open PR) | **Medium** — improves provider 429 handling; low risk. |

**Prediction**: Next patch (`v0.3.6`?) will likely bundle the merged reliability fixes + Opper provider + `sendProgress` fix + a few schema/validation PRs. gpt-6/Copilot support may require a provider-spec update and could slip to a minor release.

## 7. User Feedback Summary
- **Pain points**:  
  - New model series (gpt-6) unusable via popular provider (Copilot) — blocks adoption of latest models.  
  - Global `temperature` suppression breaks existing tuning workflows for 38 providers.  
  - WebUI silently corrupts sidebar state; no error toast, no recovery.  
  - QQ channel drops quoted context — critical for multi-turn conversations in Chinese-user base.  
- **Use cases visible**: Cron scheduling with persistence guarantees, exec sessions with hard timeouts, multi-provider gateway routing (Eden AI, OrcaRouter, now Opper), Slack/Telegram/Email/Linear/WebUI channels.  
- **Satisfaction signals**: Contributors actively fixing regressions with tests; but external reporters see slow turnaround on provider/model parity issues (gpt-6 open 9 days).

## 8. Backlog Watch — Stale / Needing Maintainer Attention
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) gpt-6 / Copilot | 9 days | Highest-comment issue; blocks users on latest models. Needs provider-spec update or capability detection fix. |
| [#5845](https://github.com/HKUDS/nanobot/pull/5845) Add Opper provider | 12 days | Feature-complete PR; only review/merge needed. Gateway provider additions are low-risk. |
| [#5763](https://github.com/HKUDS/nanobot/pull/5763) API 400 for invalid multimodal fields | 19 days | Security/hardening PR; improves error taxonomy. Stalled despite clear scope. |
| [#5793](https://github.com/HKUDS/nanobot/pull/5793) Recursive `list_dir` ignore-dir bug | 17 days | File-tool correctness; affects any project with `build/`/`dist/` in path. |
| [#6002](https://github.com/HKUDS/nanobot/issues/6002) `reasoningEffort` global `temperature` drop | 1 day (fresh) | Broad regression; should be triaged immediately given 38-provider impact. |

**Maintainer action suggested**: Prioritize review of #5845, #5763, #5793 (ready-to-merge PRs) and triage #6002 / #5898 for quick provider-spec patches.

---

*Generated from GitHub API data for HKUDS/nanobot on 2026-10-03. All links point to live issues/P

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent Project Digest — 2026-10-03

---

## 1. Today's Overview

Hermes Agent saw **high maintenance activity** on 2026-10-03 with **50 PR updates** (24 merged/closed, 26 open) and **8 issue updates** (6 new/active bugs, 2 closed). No new release was published. The day was dominated by **stability fixes**: multiple recursion-depth bugs surfaced in tool-argument coercion, i18n YAML parsing, and Slack Block Kit normalization; an xAI OAuth 403 classification bug prevents token refresh in long-lived sessions; and `/queue` subcommands are misrouted as chat messages in TUI/Desktop. The merged PRs show a steady cadence of defect remediation across desktop, CLI, plugins, cron, gateway, and session management — indicating a project in active hardening mode rather than feature expansion.

---

## 2. Releases

**No new releases** published today. The latest version remains whatever was current before 2026-10-03.

---

## 3. Project Progress — Merged / Closed PRs (24 items)

| PR | Title | Area | Status |
|----|-------|------|--------|
| [#123861](https://github.com/NousResearch/hermes-agent/pull/123861) | fix(skills): run `/skills write-approval` review on desktop backend and render batch diffs | Desktop, Skills | **Closed** |
| [#124307](https://github.com/NousResearch/hermes-agent/pull/124307) | fix(bot-chat): deliver toolset changes to the canonical Bot Chat | Agent, Tools, Sessions | **Closed** |
| [#123839](https://github.com/NousResearch/hermes-agent/pull/123839) | fix(pm): bypass isolated setuptools build in uv sync *(withdrawn — mechanism disproven)* | Install/Update | **Closed** |
| [#122568](https://github.com/NousResearch/hermes-agent/pull/122568) | fix(tui): require explicit hidden flag on `session.set_hidden` | TUI, Sessions | **Closed** |
| [#122567](https://github.com/NousResearch/hermes-agent/pull/122567) | fix(kanban): write per-task event when dispatcher skips unknown assignee | CLI, Cron | **Closed** |
| [#123052](https://github.com/NousResearch/hermes-agent/pull/123052) | fix(update): verify and repair startup dependencies before marking update complete | CLI, Install/Update | **Closed** |
| [#121574](https://github.com/NousResearch/hermes-agent/pull/121574) | fix(cli): a foreign tenant's host gateway never serves this home | CLI, Gateway, Config | **Closed** |
| [#122192](https://github.com/NousResearch/hermes-agent/pull/122192) | fix(desktop): discard stale Bot Chat tile before opening compression tip | Desktop, Compression | **Closed** |
| [#122169](https://github.com/NousResearch/hermes-agent/pull/122169) | fix(cli): standalone named gateway restarts own service; cron hint names own scheduler | CLI, Gateway, Cron | **Closed** |
| [#74739](https://github.com/NousResearch/hermes-agent/issues/74739) | Bug: Kimi requests impersonate Claude Code via hardcoded User-Agent | Provider/Kimi | **Closed** (Issue) |
| [#132024](https://github.com/NousResearch/hermes-agent/issues/132024) | token capability probe (auto-delete) | — | **Closed** (Issue) |

*Additional 13 merged/closed PRs not listed individually (see full PR list).*

**Key advances:**  
- Desktop skill write-approval flow unblocked (#123861)  
- Bot Chat toolset synchronization fixed (#124307)  
- Session hidden-state propagation corrected (#122568)  
- Update pipeline now verifies deps post-sync (#123052)  
- Multi-tenant gateway routing fixed (#121574)  
- Kimi User-Agent spoofing issue closed (#74739)

---

## 4. Community Hot Topics

| Item | Type | Comments | Core Concern |
|------|------|----------|--------------|
| [#82052](https://github.com/NousResearch/hermes-agent/issues/82052) | Issue | 7 💬 | **xAI OAuth 403 classified non-retryable** — long-lived workers never refresh expired access tokens, causing permanent failure after token expiry. Affects VPS/desktop sessions running >24h. |
| [#132016](https://github.com/NousResearch/hermes-agent/issues/132016) | Issue | 2 💬 | **RecursionError in tool-argument coercion** — deeply nested MCP tool arguments crash `_normalize_json_strings_for_schema()` (no depth budget). |
| [#132006](https://github.com/NousResearch/hermes-agent/issues/132006) | Issue | 2 💬 | **RecursionError in i18n YAML flattening** — legal YAML alias cycles crash `flatten()`/`non_text_leaves()` (no cycle guard). |
| [#132023](https://github.com/NousResearch/hermes-agent/issues/132023) | Issue | 0 💬 | **RecursionError in Slack Block Kit normalization** — unbounded recursion over sender-authored `blocks` JSON. |
| [#132027](https://github.com/NousResearch/hermes-agent/pull/132027) | PR | 0 💬 | Fix for #132023 — adds depth budget to Block Kit walker. |
| [#132025](https://github.com/NousResearch/hermes-agent/pull/132025) | PR | 0 💬 | Fix for SSH session cwd restoration — keeps restored cwds in remote namespace. |
| [#132026](https://github.com/NousResearch/hermes-agent/issues/132026) | Issue | 1 💬 | **`/queue` subcommands enqueued as messages** in TUI/Desktop instead of executing. |

**Underlying needs:**  
- **Resilience in long-running sessions** (token refresh, session restoration)  
- **Defensive recursion bounds** across multiple parsers (tools, i18n, Slack)  
- **Correct command routing** in TUI/Desktop shell  
- **Plugin dependency persistence** (#132030: `pip_dependencies` lost from `uv.lock` after lock-driven launch)

---

## 5. Bugs & Stability — Today's Reports (Ranked by Severity)

| Severity | Issue | Component | Fix PR? | Notes |
|----------|-------|-----------|---------|-------|
| **P2** | [#132016](https://github.com/NousResearch/hermes-agent/issues/132016) RecursionError in `coerce_tool_args()` | `tools/arg_coercion` | ❌ | No depth cap in `_normalize_json_strings_for_schema()` — crash on deeply nested MCP args |
| **P2** | [#132006](https://github.com/NousResearch/hermes-agent/issues/132006) RecursionError in i18n `flatten()` | `agent/i18n_layers.py` | ❌ | Legal YAML alias cycles crash locale flattening — no `seen` set or depth limit |
| **P2** | [#132026](https://github.com/NousResearch/hermes-agent/issues/132026) `/queue` subcommands misrouted | TUI / Desktop | ❌ | Subcommands enqueued as literal prompts instead of executing |
| **P3** | [#82052](https://github.com/NousResearch/hermes-agent/issues/82052) xAI 403 classified non-retryable | Provider/xAI, Auth | ❌ | Expired OAuth token never refreshed — long-lived sessions permanently fail |
| **P3** | [#132023](https://github.com/NousResearch/hermes-agent/issues/132023) RecursionError in Slack Block Kit | Platform/Slack | ✅ [#132027](https://github.com/NousResearch/hermes-agent/pull/132027) | Unbounded recursion on sender `blocks` — fix adds depth budget |
| **P3** | [#132030](https://github.com/NousResearch/hermes-agent/issues/132030) Plugin `pip_dependencies` lost from `uv.lock` | Plugins, Install | ❌ | Sanctioned memory-provider install undone by next lock-driven launch |
| **P2** | SSH session cwd restored to local host | SSH, Terminal | ✅ [#132025](https://github.com/NousResearch/hermes-agent/pull/132025) | Restored cwd points to Hermes host, not remote peer |
| **P3** | Quoted literal args bypass approval patterns | Tools, Terminal, Auth | ✅ [#131540](https://github.com/NousResearch/hermes-agent/pull/131540) | `rm '-rf' build` hides flags from deny rules |

**Pattern:** Three independent **unbounded recursion** bugs reported *today* (tools, i18n, Slack) — suggests a systemic lack of depth/cycle guards in tree-walking code paths.

---

## 6. Feature Requests & Roadmap Signals

| Signal | Source | Likelihood for Next Version |
|--------|--------|----------------------------|
| **Cron output-token cap** | [#131139](https://github.com/NousResearch/hermes-agent/pull/131139) (PR open) | High — `hermes cron create/edit --max-tokens N` + `cron.max_tokens_default` setting |
| **Context engine load diagnostics** | [#129019](https://github.com/NousResearch/hermes-agent/pull/129019) (PR open) | High — surfaces degraded loads instead of silent "engine not found" |
| **Mem0 OpenCode session affinity** | [#130483](https://github.com/NousResearch/hermes-agent/pull/130483) (PR open) | Medium — passes `x-opencode-session` header for relay compatibility |
| **Composer middleware on busy steer paths** | [#126930](https://github.com/NousResearch/hermes-agent/pull/126930) (PR open) | Medium — ensures plugins see mid-turn corrections |
| **Kanban provenance preservation** | [#129365](https://github.com/NousResearch/hermes-agent/pull/129365) (PR open) | Low-Medium — preserves `initial_status=blocked` gating |
| **Plugin catalog screenshots** | [#130293](https://github.com/NousResearch/hermes-agent/pull/130293) (PR open) | Low — UI polish for catalog entries |
| **Source-check parked-branch reporting** | [#132029](https://github.com/NousResearch/hermes-agent/pull/132029) (PR open) | Medium — fixes false `branch-local-only` error for `update_in_place` strategy |

**Prediction:** Next patch will likely ship cron token caps, context-engine diagnostics, and the recursion guards (Slack + tool-args + i18n) as a stability bundle.

---

## 7. User Feedback Summary

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Long-session auth breakage** | #82052: 243-msg / ~182k-token session fails permanently after xAI token expiry | High — VPS/desktop users lose continuity |
| **Command shell broken in TUI/Desktop** | #132026: `/queue list|clear|rm|move|edit` enqueued as chat | High — core workflow commands non-functional |
| **Crashes on valid input** | #132006 (14-byte YAML), #132016 (nested MCP args), #132023 (Slack blocks) | Medium — DoS via valid-but-deep structures |
| **Plugin installs not persistent** | #132030: `pip_dependencies` vanish from `uv.lock` after relaunch | Medium — memory providers silently break |
| **SSH session cwd corruption** | #132025: restored session operates on local FS | Medium — remote file ops fail silently |
| **Approval bypass via quoting** | #131540: `rm '-rf'` evades deny rules | Security — command filtering evadable |

**Positive signals:**  
- Active PR reviews and same-day fixes for multiple regressions  
- Desktop skill approval flow restored (#123861)  
- Multi-tenant gateway conflicts resolved (#121574)  
- Update pipeline now self-verifies (#123052)

---

## 8. Backlog Watch — Items Needing Maintainer Attention

| Item | Age | Status | Why It Matters |
|------|-----|--------|----------------|
| [#82052](https://github.com/NousResearch/hermes-agent/issues/82052) xAI OAuth 403 non-retryable | **57 days** (opened 2026-08-08) | **Open, 7 comments** | Long-lived sessions permanently break; affects production VPS deployments. No fix PR yet. |
| [#123839](https://github.com/NousResearch/hermes-agent/pull/123839) uv isolated build bypass | 7 days | **Closed (withdrawn)** | Mechanism disproven — root cause of #123540 still unknown. Update failures may recur. |
| [#132030](https://github.com/NousResearch/hermes-agent/issues/132030) Plugin `pip_dependencies` lost | **0 days** (today) | **Open, 0 comments** | Silent plugin breakage on relaunch; undermines plugin ecosystem reliability. |
| [#129019](https://github.com/NousResearch/hermes-agent/pull/129019) Context engine load diagnostics | 3 days | **Open** | Improves observability — currently silent failures mask config/plugin issues. |
| [#126930](https://github.com/NousResearch/hermes-agent/pull/126930) Composer middleware on busy paths | 5 days | **Open** | Plugins miss mid-turn corrections; affects reply/quote rewrite plugins. |
| [#131540](https://github.com/NousResearch/hermes-agent/pull/131540) Quoted args bypass approval | 1 day | **Open** | Security-adjacent — deny rules evadable via shell quoting. |

---

## Summary Metrics (2026-10-03)

| Metric | Value |
|--------|-------|
| Issues updated | 8 (6 open, 2 closed) |
| PRs updated | 50 (26 open, 24 merged/closed) |
| New bugs reported today | 6 |
| Bugs with fix PRs today | 4 |
| Recursion-depth bugs today | 3 (tools, i18n, Slack) |
| Longest-open active bug | #82052 — 57 days |
| Release published | None |

**Health indicator:** 🟡 **Active hardening** — high fix velocity, but multiple systemic recursion bugs and a 57-day auth regression suggest technical debt in defensive programming and long-session resilience. Next patch should prioritize the recursion guards and xAI token refresh.

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw Project Digest — 2026-10-03

---

## 1. Today's Overview
PicoClaw shows moderate maintenance activity with **3 issues** and **3 pull requests** updated in the last 24 hours, but **no new releases**. The project is in a steady state: one documentation PR was merged (#3368), while two feature PRs (#3381, #3393) and three issues remain open. The most pressing concern is a long-standing Web UI performance regression (#3281, open since July) that has garnered significant community attention (17 comments, 2 👍). No critical crashes or security issues were reported today.

---

## 2. Releases
**No new releases** published today. The latest version remains **0.3.1** (referenced in issue #3281).

---

## 3. Project Progress
| PR | Status | Summary | Impact |
|----|--------|---------|--------|
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | **Closed/Merged** | Docs: add Parallel Search MCP setup example | Improves onboarding for web search/page extraction via MCP; no code changes |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Open (stale) | Feat: switch OpenAI provider to Responses API | Modernizes OpenAI integration; enables new API capabilities (tools, streaming, etc.) |
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | Open (stale) | Feat(provider): add Cheaper Inference provider | Expands LLM provider ecosystem with a cost-optimized OpenAI-compatible gateway |

**Net progress**: Documentation improved; two provider-layer enhancements await review.

---

## 4. Community Hot Topics
| Item | Type | Activity | Core Need |
|------|------|----------|-----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **Bug** | 17 comments, 2 👍 | **Web UI input latency** when chat history grows — users experience noticeable lag typing in the input box; blocks daily usage for power users |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | **PR** | 0 comments (stale) | **OpenAI Responses API migration** — maintainer attention needed to unblock modern OpenAI features |
| [#3415](https://github.com/sipeed/picoclaw/issues/3415) | **Feature** | 0 comments | **Reverse proxy / sub-path hosting** — deploy PicoClaw under `/pico/` via Nginx; requires configurable base path for API, WS, static assets, and auth routes |

**Analysis**: The lag issue (#3281) is the clear top pain point. The sub-path hosting request (#3415) signals growing deployment maturity — users want to embed PicoClaw alongside other services on the same domain.

---

## 5. Bugs & Stability
| Severity | Issue | Status | Fix PR? |
|----------|-------|--------|---------|
| **High (UX-blocking)** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI chat input laggy with long history | Open (since 2026-07-21) | No |
| **Low (Process)** | [#3392](https://github.com/sipeed/picoclaw/issues/3392) — CLAassistant fails to detect CLA signature | Open | No (infrastructure/config) |

**Notes**: #3281 is a regression affecting core usability; no fix PR exists yet. #3392 is a CI/bot configuration issue blocking contributor onboarding.

---

## 6. Feature Requests & Roadmap Signals
| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Sub-path / reverse proxy support** (`/pico/` base path for all routes: API, WS, static, auth) | [#3415](https://github.com/sipeed/picoclaw/issues/3415) | **High** — clear deployment need, well-scoped ask (startup flag) |
| **Cheaper Inference provider** (OpenAI-compatible, cost-optimized gateway) | [#3393](https://github.com/sipeed/picoclaw/pull/3393) | **Medium** — PR ready, adds provider diversity |
| **OpenAI Responses API migration** | [#3381](https://github.com/sipeed/picoclaw/pull/3381) | **Medium** — PR open, aligns with upstream API direction |
| **Parallel Search MCP integration** (doc-only) | [#3368](https://github.com/sipeed/picoclaw/pull/3368) | **Done** — merged today |

**Prediction**: Sub-path hosting (#3415) and Cheaper Inference (#3393) are the strongest candidates for the next minor release, assuming maintainer bandwidth.

---

## 7. User Feedback Summary
- **Pain points**: 
  - Typing lag in Web UI with moderate history length (#3281) — "very laggy" input, 17-comment discussion indicates widespread impact.
  - CLA bot false negatives blocking legitimate contributions (#3392).
- **Use cases**: 
  - Multi-service deployment under single domain via Nginx sub-path (#3415).
  - Cost-sensitive LLM routing via Cheaper Inference (#3393).
  - Zero-account web search via Parallel Search MCP (#3368).
- **Sentiment**: Frustration on long-open UI bug; constructive on deployment flexibility and provider expansion.

---

## 8. Backlog Watch
| Item | Age | Why It Matters | Action Needed |
|------|-----|----------------|---------------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | **74 days** | Core UX regression; high community engagement; no fix PR | **Urgent**: assign triage, investigate virtualization / memoization of chat history rendering |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | 16 days (stale) | Provider modernization; enables OpenAI tooling advances | Review / request changes / merge |
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | 8 days (stale) | New provider, low risk (OpenAI-compat) | Review / merge |
| [#3392](https://github.com/sipeed/picoclaw/issues/3392) | 8 days | Contributor friction; CLA bot misconfiguration | Fix `.github/cla-assistant` config or bot permissions |

**Maintainer attention priority**: #3281 > #3381 > #3393 > #3392.

---

*Digest generated from GitHub data as of 2026-10-03. Links point to live issues/PRs on `github.com/sipeed/picoclaw`.*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw Project Digest — 2026-10-03

## 1. Today's Overview
NanoClaw shows **high maintenance velocity** with 27 issues and 30 PRs updated in the last 24 hours. The project is in an active stabilization phase: 17 issues were closed (many long-standing), while 10 remain open—several filed just yesterday (Oct 1–2) and tagged `triage/unresolved`. No new release was cut, but a flurry of fix PRs targets setup reliability, container networking, update rollback safety, and channel-adapter parity. The `channels` branch is being merged into `main` (#4000), indicating a major multi-platform messaging refactor is nearing completion. Overall health: **active, transparent, and trending toward a stable 2.1.x release**.

## 2. Releases
**No new releases published.** The latest activity consists of merge-ready fix PRs and the `channels` branch sync. Expect a `v2.1.54` or `v2.2.0` once the current batch (especially #4000, #3995, #3986) lands.

---

## 3. Project Progress — Merged/Closed PRs (Last 24h)
| PR | Area | Summary |
|----|------|---------|
| [#3969](https://github.com/nanocoai/nanoclaw/pull/3969) | Iron Proxy / Skills | Sends proper `Proxy-Authenticate: Basic` challenge on 407 so `git fetch` works through the proxy. |
| [#2654](https://github.com/nanocoai/nanoclaw/pull/2654) | Platform ID / Channels | Trusts pre-prefixed message IDs regardless of channel key—fixes cross-adapter ID collisions. |
| [#3994](https://github.com/nanocoai/nanoclaw/pull/3994) | Agent Runner / Providers | Surfaces Claude SDK’s actual error notice (e.g., “Invalid API key”) instead of generic “run failed.” |
| [#4006](https://github.com/nanocoai/nanoclaw/pull/4006) | Setup / Providers | Initial OpenCode provider scaffolding and configs added. |
| [#67](https://github.com/nanocoai/nanoclaw/pull/67) | Skills | Telegram skill added (very old PR, finally closed). |

**Net effect:** Setup/auth UX improved, proxy/git interop fixed, error visibility enhanced, new provider groundwork laid.

---

## 4. Community Hot Topics (Most Comments / Reactions)
| Item | Type | Comments | 👍 | Core Need |
|------|------|----------|----|-----------|
| [#2437](https://github.com/nanocoai/nanoclaw/issues/2437) | Issue | 1 | 7 | **Remove/reduce OneCLI dependency** — users want lighter, self-contained installs without external auth service. |
| [#1424](https://github.com/nanocoai/nanoclaw/issues/1424) | Issue | 7 | 1 | **Private forks for sensitive deployments** (healthcare, family) — public-fork requirement blocks compliance. |
| [#1819](https://github.com/nanocoai/nanoclaw/issues/1819) | Issue | 1 | 0 | **Telemetry opt-in** — `setup.sh` sends PostHog data silently; users demand consent. |
| [#3785](https://github.com/nanocoai/nanoclaw/issues/3785) | Issue | 1 | 0 | **`channels` branch drift** — Slack adapter references missing `extractRawText`; merge needed. |

**Signal:** Privacy/compliance (private forks, telemetry opt-in) and architectural debt (OneCLI, branch drift) are top community concerns.

---

## 5. Bugs & Stability — Ranked by Severity
| Severity | Issue | Status | Fix PR |
|----------|-------|--------|--------|
| **Critical** | [#4003](https://github.com/nanocoai/nanoclaw/issues/4003) Update rollback deletes half of `data/`, leaves host down (EACCES) | `OPEN`, `triage/unresolved` | — |
| **Critical** | [#4004](https://github.com/nanocoai/nanoclaw/issues/4004) Update cutover crashes when `tsx`/`esbuild` version bumps | `OPEN`, `triage/unresolved` | — |
| **High** | [#4002](https://github.com/nanocoai/nanoclaw/issues/4002) Outbound reactions/edits use namespaced IDs; Discord rejects (400 50035) | `OPEN` | — |
| **High** | [#3984](https://github.com/nanoclaw/issues/3984) PreCompact hook fails: `compact-instructions.ts` calls `getAllDestinations()` without registered mailbox | `OPEN` | — |
| **High** | [#3951](https://github.com/nanocoai/nanoclaw/issues/3951) `ncl tasks delete` leaves root-owned mount points, corrupts session DB on Linux | `OPEN` | — |
| **Medium** | [#3860](https://github.com/nanocoai/nanoclaw/issues/3860) `restart.sh`: `FORCE_COLOR` makes timestamp unparseable | `OPEN` | — |
| **Medium** | [#3811](https://github.com/nanocoai/nanoclaw/issues/3811) Central DB lacks `busy_timeout`; lock contention throws as corruption | `OPEN` | — |
| **Medium** | [#3732](https://github.com/nanocoai/nanoclaw/issues/3732) Transcript rotation never runs for long-lived scheduled-task containers | `OPEN` | — |
| **Fixed** | [#3359](https://github.com/nanocoai/nanoclaw/issues/3359) Node 26 passes check but `better-sqlite3` 11.10.0 fails to build | `CLOSED` | — |
| **Fixed** | [#2257](https://github.com/nanocoai/nanoclaw/issues/2257) Corrupt `container.json` silently wiped on next spawn | `CLOSED` | — |

**Note:** Four critical/high bugs filed **yesterday (Oct 2)** have no fix PRs yet—these block reliable updates and multi-platform messaging.

---

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for Next Release |
|---------|-------|-----------------------------|
| **Update channels (stable/beta/nightly)** | [#3986](https://github.com/nanocoai/nanoclaw/pull/3986) (PR open) | **High** — PR ready, default `stable` via tags. |
| **Iron Proxy per-host auto-approval** | [#3881](https://github.com/nanocoai/nanoclaw/issues/3881) | Medium — reduces approval fatigue for tool skills. |
| **Multi-user single-host (family Mac, separate bots)** | [#2653](https://github.com/nanocoai/nanoclaw/issues/2653) | Medium — data model ready; `server.ts` singleton is blocker. |
| **`NANOCLAW_NATIVE_CREDENTIALS` to bypass OneCLI** | [#2781](https://github.com/nanocoai/nanoclaw/issues/2781) | Medium — strong downstream packaging demand. |
| **Isolated containers as household edge workers** | [#3538](https://github.com/nanocoai/nanoclaw/issues/3538) | Low — architectural, needs distributed scheduler. |
| **`ncl mounts init` CLI for allowlist template** | [#2388](https://github.com/nanocoai/nanoclaw/issues/2388) | High — trivial DX win, already implemented in code. |
| **llama.cpp / local model support** | [#2234](https://github.com/nanocoai/nanoclaw/issues/2234) | Low — closed, but recurring interest. |

**Prediction:** Update channels (#3986), mount CLI (#2388), and native credentials (#2781) are closest to shipping.

---

## 7. User Feedback Summary
| Pain Point | Evidence | Sentiment |
|------------|----------|-----------|
| **Node/dependency hell on Linux** | [#2590](https://github.com/nanocoai/nanoclaw/issues/2590) — “missing dependencies hell,” SQLite wrapper version lock | 😡 Frustrated |
| **Silent telemetry in `setup.sh`** | [#1819](https://github.com/nanocoai/nanoclaw/issues/1819) — no opt-in, no curl guard | 😟 Distrust |
| **OneCLI as mandatory dependency** | [#2437](https://github.com/nanocoai/nanoclaw/issues/2437) (7 👍) — “detracts from lightweight promise” | 😕 Skeptical |
| **Public fork requirement for private deployments** | [#1424](https://github.com/nanocoai/nanoclaw/issues/1424) — healthcare/family use cases | 😟 Blocked |
| **WhatsApp `engage_mode=mention` false positives** | [#2638](https://github.com/nanocoai/nanoclaw/issues/2638) — engages on every 1-on-1 message | 😠 Broken UX |
| **Gmail multi-account unsupported** | [#2195](https://github.com/nanocoai/nanoclaw/issues/2195) — OneCLI only allows one OAuth | 😕 Limited |
| **Positive: active bug fixing** | 17 issues closed in 24h, many with fix PRs same day | 👍 Encouraged |

**Overall:** Users value the project’s vision but hit sharp edges in setup, privacy, and multi-account scenarios. Responsiveness is high, which maintains trust.

---

## 8. Backlog Watch — Stale but Important
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#2437](https://github.com/nanocoai/nanoclaw/issues/2437) OneCLI removal/reduction | 5 months (7 👍) | Architectural; affects every install’s complexity & privacy. |
| [#1424](https://github.com/nanocoai/nanoclaw/issues/1424) Private fork / install without public fork | 6 months | Compliance blocker for healthcare/enterprise. |
| [#1819](https://github.com/nanocoai/nanoclaw/issues/1819) Telemetry opt-in | 5.5 months | GDPR/privacy hygiene; easy fix (flag + guard). |
| [#2653](https://github.com/nanocoai/nanoclaw/issues/2653) Multi-user single host | 4 months | Unlocks family/shared-device deployments. |
| [#2279](https://github.com/nanocoai/nanoclaw/issues/2279) Scheduled IPC delivery tracking | 5 months | Prevents duplicate SDK output; core reliability. |
| [#3785](https://github.com/nanocoai/nanoclaw/issues/3785) `channels` branch missing `extractRawText` | 3 weeks | Blocks Slack raw-text feature; merge #4000 should resolve. |

**Maintainer action suggested:** Prioritize #2437 (design doc), #1424 (install flow), #1819 (one-line flag), and ensure #4000 merge unblocks #3785.

---

*Digest generated from GitHub data as of 2026-10-02 23:59 UTC. All links point to `github.com/nanocoai/nanoclaw`.*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw Project Digest – 2026-10-03

## 1. Today's Overview
IronClaw saw minimal activity in the last 24 hours: one new issue was opened and no pull requests or releases were published. The sole issue (#8122) reports a runtime failure of `ironclaw serve` on macOS (Apple Silicon) when using the `local-dev` boot profile, specifically a `BackendUnavailable` error for the `web-app` extension. With zero merged PRs and no new versions, the project is in a quiet maintenance phase, and the open issue represents the only active signal of user friction today.

## 2. Releases
No new releases were published today.

## 3. Project Progress
No pull requests were merged or closed today. No features or fixes advanced in the last 24 hours.

## 4. Community Hot Topics
| Issue | Activity | Summary |
|-------|----------|---------|
| [#8122](https://github.com/nearai/ironclaw/issues/8122) `ironclaw serve fails with credential read failed: BackendUnavailable for extension web-app on macOS (local-dev profile)` | **Opened 2026-10-03** · 0 comments · 0 👍 | User on macOS (Darwin 27.0.0, aarch64) reports that `ironclaw serve` crashes immediately with a credential-read failure for the `web-app` extension when using the `local-dev` profile. `ironclaw doctor` passes 8/8 checks. No workaround or maintainer response yet. |

*Underlying need:* Developers on Apple Silicon expect the `local-dev` profile to work out-of-the-box for local iteration; the `BackendUnavailable` error suggests either a missing backend binary, a path-resolution bug, or a credential-store integration issue specific to the `web-app` extension on macOS.

## 5. Bugs & Stability
| Severity | Issue | Description | Fix PR |
|----------|-------|-------------|--------|
| **High** | [#8122](https://github.com/nearai/ironclaw/issues/8122) | `ironclaw serve` crashes on macOS (Apple Silicon) with `BackendUnavailable` for `web-app` extension under `local-dev` profile. Blocks local development for affected users. | None yet |

*No other crashes, regressions, or bug reports were filed today.*

## 6. Feature Requests & Roadmap Signals
No new feature requests or roadmap discussions appeared in the last 24 hours.

## 7. User Feedback Summary
- **Pain point:** Inability to run `ironclaw serve` locally on macOS (Apple Silicon) with the default `local-dev` profile.  
- **Use case:** Local development / iteration workflow.  
- **Sentiment:** Neutral-to-negative (blocker with no workaround, but no additional community reaction yet).  
- **Satisfaction:** `ironclaw doctor` passes, indicating the core installation is healthy; the failure is isolated to the `serve` command and the `web-app` extension backend.

## 8. Backlog Watch
No long-unanswered issues or PRs surfaced in today’s data. The only actionable item is the freshly opened #8122, which should be triaged promptly to unblock macOS developers.

---

*Data sourced from GitHub API for nearai/ironclaw (issues, PRs, releases) covering 2026-10-02 → 2026-10-03.*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI Project Digest — 2026-10-03

## 1. Today's Overview
LobsterAI shows **low but focused maintenance activity** over the last 24 hours. Six stale issues (all created 2026-03-26) were updated on 2026-10-02, suggesting a triage or cleanup pass rather than new community influx. Three security-oriented PRs were processed: two merged/closed (#909, #911) hardening skill-installation guards and encrypting auth tokens at rest, and one open (#908) addressing command-injection risk in MCP stdio transport. No new releases were cut. The project appears in a **stabilization/security-hardening phase** with several unresolved correctness bugs (timer leaks, scheduler drift, SQLite durability) lingering in the backlog.

## 2. Releases
**None** — No new versions published in the last 24 hours.

## 3. Project Progress (Merged/Closed PRs)
| PR | Type | Summary | Impact |
|----|------|---------|--------|
| [#909](https://github.com/netease-youdao/LobsterAI/pull/909) | **Security fix (closed)** | Skill-install security scan failures previously defaulted to “safe → auto-install”. Now failed scans **block auto-install and require explicit user confirmation**, closing a bypass vector (malformed packages crashing the scanner). | High — prevents silent malicious skill installation. |
| [#911](https://github.com/netease-youdao/LobsterAI/pull/911) | **Security fix (closed)** | Auth tokens (access + refresh) moved from **plaintext SQLite** to **Electron `safeStorage`** (Keychain/DPAPI/Secret Service). | High — mitigates token theft via disk access, backups, forensics. |

## 4. Community Hot Topics
| Item | Activity | Underlying Need |
|------|----------|-----------------|
| [#906](https://github.com/netease-youdao/LobsterAI/issues/906) SQLite data-loss risk | 1 comment, stale tag | **Data integrity guarantee** — users expect local-first apps to survive power loss, full disks, and permission errors without corrupting conversation history. |
| [#914](https://github.com/netease-youdao/LobsterAI/issues/914) Memory import/export | 1 comment, stale tag | **Portability & sharing** — users migrate devices and want to transfer “memory” (long-term context/personalization) between machines or share with peers. |
| [#900](https://github.com/netease-youdao/LobsterAI/issues/900) Scheduler interval bug | 1 comment, stale tag + log attachment | **Reliability of automation** — scheduled tasks are a core productivity feature; silent drift from 1 h → 1 min erodes trust. |

## 5. Bugs & Stability (Ranked by Severity)
| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **High** | [#906](https://github.com/netease-youdao/LobsterAI/issues/906) | `fs.writeFileSync` without error handling / retries / atomic writes → data loss or DB corruption on disk-full, permission, or lock errors. | No |
| **High** | [#900](https://github.com/netease-youdao/LobsterAI/issues/900) | User sets 1-hour interval → scheduler runs every minute. Log attached. | No |
| **Medium** | [#886](https://github.com/netease-youdao/LobsterAI/issues/886) | Bare `setTimeout` in `CopyButton` leaks timer on unmount → React “update on unmounted component” warning + potential memory leak. | No |
| **Medium** | [#898](https://github.com/netease-youdao/LobsterAI/issues/898) | Cherry Studio auto-update/restart kills LobsterAI gateway (port 18789 “banned”). | No |
| **Medium** | [#910](https://github.com/netease-youdao/LobsterAI/issues/910) | Feishu bot works for chat but scheduled-task delivery fails with “requires target `<chatId\|user:openId\|chat:chatId>`”. | No |

## 6. Feature Requests & Roadmap Signals
| Request | Issue | Likelihood for Next Version |
|---------|-------|-----------------------------|
| **Memory import/export** | [#914](https://github.com/netease-youdao/LobsterAI/issues/914) | Medium — high user value, low complexity (serialize/deserialize existing memory store), aligns with “local-first” positioning. |
| **Atomic, retried SQLite writes** | Implied by [#906](https://github.com/netease-youdao/LobsterAI/issues/906) | High — security hardening sprint suggests durability fixes may follow. |
| **Scheduler robustness (cron validation, drift guard)** | Implied by [#900](https://github.com/netease-youdao/LobsterAI/issues/900) | Medium — core automation feature, but requires deeper refactor. |

## 7. User Feedback Summary
- **Pain points**:  
  - Fear of losing conversations due to fragile SQLite writes (#906).  
  - Automation unreliability (scheduler drift #900, Feishu delivery #910).  
  - Friction migrating setups across machines (no memory export #914).  
  - External tool (Cherry Studio) updates breaking gateway connectivity (#898).  
- **Positive signals**:  
  - Security PRs merged quickly (#909, #911) show maintainer responsiveness to supply-chain risks.  
  - Users provide logs and detailed repro steps (#900), indicating invested user base.

## 8. Backlog Watch (Stale, High-Impact, No Fix PR)
| Item | Age | Why It Matters |
|------|-----|----------------|
| [#906](https://github.com/netease-youdao/LobsterAI/issues/906) SQLite durability | ~6 months | Silent data corruption is a **trust-breaker** for a personal knowledge assistant. |
| [#900](https://github.com/netease-youdao/LobsterAI/issues/900) Scheduler interval bug | ~6 months | Core “agent” feature (scheduled tasks) misbehaving; log provided but no triage. |
| [#886](https://github.com/netease-youdao/LobsterAI/issues/886) Timer leak in CopyButton | ~6 months | Trivial fix (`useRef` + cleanup), but leaks in production builds. |
| [#914](https://github.com/netease-youdao/LobsterAI/issues/914) Memory import/export | ~6 months | Frequently requested migration feature; zero implementation discussion. |

> **Maintainer action suggested**: Prioritize #906 (durability) and #900 (scheduler correctness) for next patch; assign #886 to a good-first-issue contributor; open design discussion on #914.

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) Project Digest — 2026-10-03

---

## 1. Today's Overview

CoPaw shows **high development velocity** with 15 PRs and 13 issues updated in the last 24 hours. The merged/closed PR count (7) exceeds new PRs opened, indicating active review and integration. No new release was cut today. The issue backlog is growing (13 open, 0 closed), with several critical bugs affecting core chat, provider compatibility, and mobile/LAN access. Community engagement is moderate—most items have 1–8 comments but zero reactions—suggesting contributors are driving momentum more than external users.

---

## 2. Releases

**No new releases today.**  
The latest published version remains **v2.2.2.beta4** (per issue #8073). Users on `main` branch receive fixes continuously via PR merges.

---

## 3. Project Progress — Merged / Closed PRs (7)

| PR | Title | Area | Impact |
|----|-------|------|--------|
| [#7347](https://github.com/agentscope-ai/QwenPaw/pull/7347) | `fix(console): keep rich input caret visible` | Editor UX | Prevents caret loss when composer overflows |
| [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) | `feat(desktop): remember window geometry` | Tauri Desktop | Persists window position/size across launches |
| [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) | `feat(console): add chat scroll lock` | Chat UX | Lets users read history while streaming continues |
| [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) | `feat(chat): add tool call visibility toggle` | Chat UX | Reduces noise from tool cards in normal reading |
| [#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359) | `feat(providers): expose per-media inline caps` | Provider Config | Adds image/video/audio inline limits with defaults |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | `feat(mcp): add configurable tool call timeout` | MCP | Configurable 300s default deadline for tool calls |
| [#7344](https://github.com/agentscope-ai/QwenPaw/pull/7344) | `feat(console): support game-dev file languages` | Editor | Syntax highlighting for C#, shaders (Unity/Godot) |

**Theme:** Polish & UX refinements—editor, chat, desktop, and provider configurability. All seven were authored by core maintainers (AaronZ345) and sat in review for ~5 weeks before merging today.

---

## 4. Community Hot Topics — Most Active Issues/PRs

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | Issue (Question) | 8 | **History retention after compression** — users lose access to older messages when context is compressed; demand for longer local history storage. |
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | Issue (Enhancement) | 8 | **Message edit/retract + workspace rollback** — Git-like UX: edit a prior message, truncate downstream context, optionally revert file snapshots. |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Issue | 6 | **Mobile-responsive Web Console** — long-standing (since Jul 2026), still unaddressed. |
| [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) | Issue (Bug) | 5 | **Duplicate session creation** — “New Task” then re-entering prior session spawns extra sidebar entries. |
| [#8086](https://github.com/agentscope-ai/QwenPaw/pull/8086) | PR (First-time) | — | **Mobile settings drawer** — first-time contributor implementing drawer nav for ≤768px screens; directly addresses #6281. |

**Underlying signals:**  
- **History/context management** is the top friction point (compression loss, no edit/retract).  
- **Mobile/LAN access** is a persistent gap—#6281 open 75+ days, now getting a PR.  
- **Session lifecycle bugs** (#7661) erode trust in the sidebar as source of truth.

---

## 5. Bugs & Stability — Today’s Reports (Ranked by Severity)

| Severity | Issue | Description | Fix PR? |
|----------|-------|-------------|---------|
| **Critical** | [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | **Conversation page crashes on LAN HTTP origins** (non-secure context) after v2.2.2.beta4 upgrade. Works locally, fails on LAN. | **Yes** — [#8089](https://github.com/agentscope-ai/QwenPaw/pull/8089) adds `crypto.getRandomValues()` fallback for `crypto.randomUUID()`. |
| **Critical** | [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) | **OpenAI provider: 400 on GPT-6 family** — `_uses_max_completion_tokens` only matches `gpt-5*`/`o<digit>*`; new models reject legacy `max_tokens`. | **Yes** — [#8090](https://github.com/agentscope-ai/QwenPaw/pull/8090) parses numeric suffix to recognize `gpt-6*`, `gpt-7*`, etc. |
| **High** | [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) | **Duplicate session creation** — re-entering a session after “New Task” spawns a second sidebar entry. | **Partially** — [#8091](https://github.com/agentscope-ai/QwenPaw/pull/8091) tracks `lastActiveChatId` on sidebar click. |
| **High** | [#8088](https://github.com/agentscope-ai/QwenPaw/issues/8088) | **Image → `chat_with_image` hangs in Bash+PIL cropping loop**, then silently cancels with no user reply. | No PR yet. |
| **High** | [#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077) | **Qoder third-party agent: 3 defects** — custom models invisible, context meter hidden. | No PR yet. |
| **Medium** | [#8085](https://github.com/agentscope-ai/QwenPaw/issues/8085) | **Truncation: `finish_reason="length"` dropped silently** — users can’t tell if answer was cut off. | No PR yet. |
| **Medium** | [#8084](https://github.com/agentscope-ai/QwenPaw/pull/8084) | **Oversized prompts → 200 with `completion_tokens=0`** — silent failure, no overflow error. PR refuses oversized prompts & surfaces empty replies. | **Yes** — [#8084](https://github.com/agentscope-ai/QwenPaw/pull/8084) (open). |

**Stability note:** Two critical regressions introduced in v2.2.2.beta4 (LAN access, GPT-6) have same-day fix PRs—good sign for release hygiene.

---

## 6. Feature Requests & Roadmap Signals

| Request | Source | Likelihood for Next Version |
|---------|--------|-----------------------------|
| **Message edit/retract + workspace rollback** | [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) (8 comments) | High — strong UX demand, aligns with “Git-like” agent workflows. |
| **`view_audio` built-in tool** | [#8081](https://github.com/agentscope-ai/QwenPaw/issues/8081) + [PR #8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) | **Very High** — PR already open by contributor, completes image/video/audio parity. |
| **Mobile-responsive Console (drawer nav)** | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) + [PR #8086](https://github.com/agentscope-ai/QwenPaw/pull/8086) | High — first-time contributor PR addresses 3-month-old issue. |
| **Cross-instance Agent communication (decentralized)** | [#8080](https://github.com/agentscope-ai/QwenPaw/issues/8080) | Low — architectural, requires discovery/protocol design; likely post-2.3. |
| **Lark/Feishu bot: show agent/model metadata** | [#8087](https://github.com/agentscope-ai/QwenPaw/issues/8087) | Medium — parity with OpenClaw, low implementation cost. |
| **Heartbeat runtime semantics documentation** | [#8082](https://github.com/agentscope-ai/QwenPaw/issues/8082) | High — docs-only, reduces support burden. |

---

## 7. User Feedback Summary — Pain Points & Use Cases

| Pain Point | Evidence | User Impact |
|------------|----------|-------------|
| **History loss after compression** | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) — “chat history this short? discussed problems, scroll up, gone?” | High — breaks continuity for long tasks; users expect full local retention. |
| **Cannot edit/retract a message** | [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) — “edit or retract previously sent messages, truncate subsequent history” | High — forces full restart on mistake; no Git-like undo. |
| **Mobile Console unusable** | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) — 75+ days open, 6 comments | Medium — limits on-the-go usage; PR #8086 in progress. |
| **LAN access broken in beta4** | [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) — “only occurs when other devices on LAN access local services” | Critical for self-hosters — blocks team/homelab use. |
| **GPT-6/7 models rejected** | [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) — “connection test fails with 400” | High — early adopters of new OpenAI models blocked. |
| **Silent truncation** | [#8085](https://github.com/agentscope-ai/QwenPaw/issues/8085) — “output just ends mid-sentence with no notice” | Medium — users can’t distinguish complete vs. cut-off answers. |
| **Duplicate sessions clutter sidebar** | [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) — “sidebar creates another session instead of continuing” | Medium — erodes trust in session management. |

**Positive signals:**  
- First-time contributors landing meaningful PRs (#8083 audio tool, #8086 mobile drawer, #7936 i18n).  
- Core maintainers merging long-standing UX polish (scroll lock, tool toggle, window geometry).  
- Rapid fix turnaround for v2.2.2.beta4 regressions.

---

## 8. Backlog Watch — Stale / High-Value Items Needing Attention

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) Mobile Console | 75 days | Blocks mobile/homelab use; PR #8086 open but unmerged | **PR open** — needs review |
| [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) History retention after compression | 14 days | Top user complaint (8 comments); no PR yet | **Open** — needs design decision (local DB? export?) |
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) Message edit/retract + rollback | 6 days | High engagement (8 comments); architectural scope | **Open** — needs spec & breakdown |
| [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) Duplicate session bug | 23 days | Core UX regression; PR #8091 addresses part | **PR open** — needs validation |
| [#8088](https://github.com/agentscope-ai/QwenPaw/issues/8088) Image → `chat_with_image` cropping loop | 1 day | Silent failure + hang; no PR | **New** — triage needed |
| [#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077) Qoder 3 defects | 1 day | Third-party agent broken; no PR | **New** — triage needed |
| [#8085](https://github.com/agentscope-ai/QwenPaw/issues/8085) Silent `finish_reason="length"` drop | 1 day | Observability gap; no PR | **New** — low-effort fix |

---

## Health Indicators (Snapshot)

| Metric | Value | Trend |
|--------|-------|-------|
| Open Issues (24h) | 13 | ↗️ Growing |
| Closed Issues (24h) | 0 | ⚠️ None |
| PRs Merged (24h) | 7 | ✅ Healthy |
| PRs Open (24h) | 8 | ↗️ Active |
| First-time Contributor PRs | 3 (#8083, #8086, #7936) | ✅ Growing |
| Critical Bugs with Fix PRs | 2/2 (LAN, GPT-6) | ✅ Responsive |
| Avg Comments/Issue | 3.2 | 📊 Moderate engagement |

---

**Bottom line:** CoPaw is in a **polish & stabilization phase** ahead of a likely v2.2.2 stable. The team is merging UX debt, fixing beta regressions fast, and attracting first-time contributors. The biggest product gaps—history retention, message editing, mobile UI—are acknowledged and have active discussion/PRs. Watch #7884, #7997, and #6281 for next-milestone scope decisions.

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

No activity in the last 24 hours.

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw Project Digest — 2026-10-03

## 1. Today's Overview
ZeroClaw shows **intense architectural refactoring activity** with zero releases, zero closed PRs, and zero closed issues in the last 24 hours. The project is deep in a **v0.9.0 gateway-split milestone** (evident across 10+ large PRs) while simultaneously hardening runtime stability (cron fixtures, delegate recovery, memory watchdogs). All 50 active PRs are open and XL-sized, indicating a **stacked, dependent change strategy** rather than incremental delivery. The 24 active issues are predominantly P1/P2 bugs and accepted features in-progress, suggesting the team is executing on a defined roadmap but carrying significant WIP. Project health: **high velocity, high complexity, pre-release stabilization phase**.

---

## 2. Releases
**No new releases today.** The latest work targets `release:v0.9.0` (gateway standalone, tool feature-gating, session ownership) and `release:v0.8.6` (backports). Expect a consolidated v0.9.0 once the gateway split (#11002, #11182, #11381, #11377) and tool gating (#11221) land.

---

## 3. Project Progress (Merged/Closed Today)
**None.** All 50 PRs and 24 issues remain open. Progress is visible only in *updates* to in-flight work:
- **Gateway extraction** advanced across 4 stacked PRs (#11381, #11377, #11182, #11002) — serving session messages, SOPS runs, version check, and core RPC parity from `zeroclaw-gw`.
- **Tool feature-gating** (#11221) gates 12 SaaS/coding-CLI tools (Jira, Notion, Composio, Google Workspace, Microsoft, etc.) behind opt-in features.
- **Session ownership contract** (#10412) extracts atomic claim/adoption into `SessionBackend` (SQLite impl).
- **Delegate settlement recovery** (#11450) adds supervisor task handles to recover artifacts after worker exit.
- **Shell memory watchdog** (#11456) adds opt-in `shell_max_memory_mb` with RSS sampling for native shell/skill subprocesses.
- **Config apply results** (#11466) reports per-target application results for live config consumers.
- **ZeroCode context compaction** (#10905) adds manual `/compact-context` and `/restore-context` commands.
- **Channel tool registration** (#11452, #10986) fixes live channel registration for session tools and passes running channel instances to channel-addressed tools.

---

## 4. Community Hot Topics (Most Active Items)

| Item | Type | Comments | Core Need |
|------|------|----------|-----------|
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | Issue (bug, test) | 13 | Harden test fixtures that write executables under parallel runtime gate — flake prevention for CI. |
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | Issue (feature) | 10 | **Defer built-in tool schemas** to reduce prompt token floor (first turn exceeds 32k budget by 3.3×). Blocked on runtime crate transition. |
| [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) | Issue (bug, daemon) | 7 | Ephemeral daemon enters **sustained multi-core CPU spin** (140–177% CPU for 17h). Needs repro; high risk. |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | Issue (bug, cron) | 6 | Agent lacks context of the cron job that triggered it — no reference to its own scheduled message. |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | Issue (feature) | 5 | **Process-memory limits** on shell/skill subprocesses — child can OOM container despite 1MB/60s output caps. |
| [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221) | PR (feat, XL) | — | Gate 12 SaaS/coding tools behind opt-in features; reduces binary size & attack surface. |
| [#11182](https://github.com/zeroclaw-labs/zeroclaw/pull/11182) | PR (feat, XL) | — | Core RPC parity for workspace, catalog, canvas, pairing, channels, system — gateway split dependency. |

**Underlying themes:**  
- **Token budget pressure** (#5808) is a fundamental UX blocker for default configs.  
- **Daemon stability** (#9799, #9736, #10331) shows runtime/daemon as a risk surface.  
- **Gateway split** is the dominating architectural force — everything depends on it.

---

## 5. Bugs & Stability (Ranked by Severity)

| Severity | Issue | Component | Status | Fix PR |
|----------|-------|-----------|--------|--------|
| **S1 / P1** | [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) ZeroCode RPC sessions cannot reach configured channels via channel-backed tools | zerocode/tui, channel | In-progress | [#11452](https://github.com/zeroclaw-labs/zeroclaw/pull/11452) (register live channels), [#10986](https://github.com/zeroclaw-labs/zeroclaw/pull/10986) (pass running instances) |
| **S1 / P1** | [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) Persist failed ACP turns on daemon RPC path (ZeroCode Code pane) | channel (ACP) | In-progress | — |
| **S2 / P1** | [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) Ephemeral daemon sustained CPU spin (140–177%) | runtime/daemon | Needs repro | — |
| **S2 / P1** | [#10331](https://github.com/zeroclaw-labs/zeroclaw/issues/10331) Recover terminal settlement intents abandoned by dead delegate worker | runtime/daemon, delegate | In-progress | [#11450](https://github.com/zeroclaw-labs/zeroclaw/pull/11450) (supervisor task handles) |
| **S2 / P2** | [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) Cost records share daemon-lifetime session_id — per-conversation spend inseparable | observability, config | In-progress | — |
| **S2 / P2** | [#10294](https://github.com/zeroclaw-labs/zeroclaw/issues/10294) `file_write` transcripts cannot distinguish creation vs overwrite | tools, zerocode | In-progress | — |
| **S2 / P2** | [#10741](https://github.com/zeroclaw-labs/zeroclaw/issues/10741) ZeroCode silently pauses queued work after normal-looking completion | zerocode/tui | In-progress | — |
| **P2** | [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) Agent lacks cron job context | runtime/daemon | In-progress | — |
| **P2** | [#9736](https://github.com/zeroclaw-labs/zeroclaw/issues/9736) RPC prompt path never writes persisted `SessionState` | runtime, gateway | In-progress | — |

**Note:** Several high-severity bugs have active fix PRs (#11450, #11452, #10986), but none merged yet.

---

## 6. Feature Requests & Roadmap Signals

| Feature | Issue/PR | Priority | Likelihood for v0.9.0 |
|---------|----------|----------|------------------------|
| **Defer built-in tool schemas** (reduce prompt floor) | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | P2, accepted | **High** — PR #11472 adds exception-table entry; blocked on runtime crate extraction |
| **Gateway as standalone IPC client** | [#11002](https://github.com/zeroclaw-labs/zeroclaw/issues/11002) | P2, blocked | **Certain** — 4 stacked PRs in flight (#11381, #11377, #11182, #11002) |
| **Opt-in tool feature flags** (12 SaaS tools) | [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221) | P1, XL | **Certain** — targets v0.9.0 & v0.8.6 |
| **Process-memory watchdog for shell/skill** | [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) → [#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456) | P1 | **High** — PR open, opt-in `shell_max_memory_mb` |
| **Approval forwarding for delegate handoffs** | [#7743](https://github.com/zeroclaw-labs/zeroclaw/issues/7743) | P2, accepted | Medium — depends on delegate recovery (#11450) |
| **Cooperative cancellation for tool execution** | [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) | P2, accepted | Medium — contract change, no PR yet |
| **Single-tool provider rounds (opt-in)** | [#10577](https://github.com/zeroclaw-labs/zeroclaw/issues/10577) | P2, accepted | Medium — PR #11448 adds exception entry |
| **ZeroCode subagent activity & expandable tool results** | [#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763) | P2, icebox | Low — marked icebox |
| **Per-target config apply results** | [#10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892) → [#11466](https://github.com/zeroclaw-labs/zeroclaw/pull/11466) | P2 | **High** — PR open, depends on #10911 |
| **Manual context compaction in ZeroCode** | [#10905](https://github.com/zeroclaw-labs/zeroclaw/pull/10905) | P1, XL | **High** — `/compact-context` & `/restore-context` commands |

**Predicted v0.9.0 scope:** Gateway split, tool feature-gating, session ownership contract, config apply results, delegate recovery, shell memory watchdog, manual context compaction.

---

## 7. User Feedback Summary (Pain Points & Use Cases)

| Pain Point | Evidence | Impact |
|------------|----------|--------|
| **Prompt token budget exceeded on first turn** | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808): "first LLM iteration exceeds budget by ~3.3× purely from built-in tool schemas" | Blocks default config usability; forces users to raise `max_context_tokens` or disable tools |
| **Daemon CPU spin / resource leaks** | [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799): 17h ephemeral daemon at 140–177% CPU; [#9736](https://github.com/zeroclaw-labs/zeroclaw/issues/9736) missing SessionState persistence | Reliability risk for long-running deployments; observability gaps |
| **Cron jobs lack agent context** | [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105): "agent has no reference to the message it has sent" | Breaks reminder/follow-up workflows; agent cannot correlate cron-triggered actions |
| **Shell subprocess OOMs container** | [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916): `wkhtmltopdf` consumed all memory despite output caps | Production incidents; need memory watchdog |
| **ZeroCode channel tools broken in RPC sessions** | [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225): "cannot use configured external channels through channel-backed tools" | Blocks ZeroCode Code pane for channel-integrated workflows |
| **Cost tracking not conversation-scoped** | [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700): `session_id` is daemon-lifetime, not per-chat | Prevents per-conversation cost analysis/budgeting |
| **File write audit ambiguity** | [#10294](https://github.com/zeroclaw-labs/zeroclaw/issues/10294): transcripts don't distinguish create vs overwrite | Security/audit gap for file operations |
| **ZeroCode silent queue pause** | [#10741](https://github.com/zeroclaw-labs/zeroclaw/issues/10741): "conservatively settles turn as non-clean" | UX confusion; work appears stuck |

**Positive signals:** Active contributor engagement (JordanTheJet, Audacity88, IftekharUddin, vrurg, REL-mame), structured issue labels (priority, risk, status), and stacked PR discipline suggest a mature engineering process.

---

## 8. Backlog Watch (Stale/Long-Open High-Value Items)

| Item | Age | Why It Matters | Status |
|------|-----|----------------|--------|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) Defer built-in tool schemas | 170 days | **Fundamental UX blocker** — default config unusable without token budget fix | In-progress, blocked on runtime crate transition |
| [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) Cooperative cancellation for tools | 169 days | **Contract gap** — long-running tools ignore cancellation token | Accepted, no implementation PR |
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) Cron job context for agent | 161 days | **Workflow break** — agents can't reference their own scheduled messages | In-progress, no linked PR |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) Shell memory limits | 131 days | **Production OOM risk** — child process unbounded memory | PR [#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456) open (opt-in watchdog) |
| [#7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468) Rename non-agent aliases in Zerocode | 115 days | **UX polish** — TUI alias management incomplete | Icebox |
| [#7743](https://github.com/zeroclaw-labs/zeroclaw/issues/7743) Approval forwarding for delegates | 110 days | **Security/UX** — deny-by-default delegation with target's policy | Accepted, no PR |
| [#7883](https://github.com/zeroclaw-labs/zeroclaw/issues/7883) Intra-family provider fallback notices | 108 days | **Observability** — users unaware of model fallbacks within family | Parking lot |
| [#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763) ZeroCode subagent

</details>

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*