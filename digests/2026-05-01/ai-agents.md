# OpenClaw 生态日报 2026-05-01

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-05-01 00:21 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告

# OpenClaw 项目动态日报 | 2026-05-01

---

## 1. 今日速览

OpenClaw 今日呈现**极高活跃度与显著稳定性压力并存**的态势：24小时内 Issues 与 PR 各更新 500 条，但 Issue 关闭率仅 2.6%（13/500），PR 合并率仅 3.6%（18/500），社区需求井喷而代码吞吐滞后。v2026.4.29 正式版及 4 个 beta 版本密集发布，聚焦消息自动化与内存子系统增强，但 **Gateway CPU 飙高、启动挂起、全平台卡顿** 等回归问题持续发酵，成为用户升级的最大阻力。Windows 与 Docker 环境下的性能退化尤为突出，已形成从 v2026.4.22 至 v2026.4.26 的连续版本 regression 链条。

---

## 2. 版本发布

### v2026.4.29 (稳定版) & v2026.4.29-beta.1~beta.4
**发布时间**：2026-04-29 至 2026-04-30  
**链接**：[Releases 页面](https://github.com/openclaw/openclaw/releases)

| 维度 | 内容 |
|:---|:---|
| **核心更新** | 消息与自动化子系统获四项能力：① 默认启用 active-run steering（运行中主动引导）；② 强制可见回复（visible-reply enforcement）；③ 子代理路由元数据（spawned subagent routing metadata）；④ 心跳提醒的 opt-in 跟进承诺（follow-up commitments） |
| **内存增强** | Memory 子系统扩展（release notes 截断，具体范围待补全） |
| **贡献者** | @vincentkoc, @scoootscooob, @samzong, @vignesh07 |
| **破坏性变更** | 未明确标注；但子代理路由元数据变更可能影响自定义 channel 集成 |
| **迁移注意** | 从 4.22/4.23 升级的用户需关注 Gateway 性能 regression（见第5节）；建议升级前执行 `openclaw doctor --backup` |

> ⚠️ **关键观察**：5 个 release 内容高度重复，疑似 CI/CD 流水线多次触发或 release notes 模板未刷新，需确认是否为真正的渐进式发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（18 条中代表性条目）

| PR | 作者 | 核心贡献 | 状态 |
|:---|:---|:---|:---|
| [#75311](https://github.com/openclaw/openclaw/pull/75311) | clawsweeper[bot] | 修复 GitHub App active-PR-limit 豁免回归——并发 Labeler 工作流导致 404 后错误关闭 App  authored PR | **已合并** |
| [#75183](https://github.com/openclaw/openclaw/pull/75183) | steipete | 简化捆绑运行时依赖修复流程（XL 级文档+代码重构） | 待合并 |
| [#75310](https://github.com/openclaw/openclaw/pull/75310) | scottgl9 | 检测并恢复不完整的捆绑运行时依赖 staging（解决 `openclaw update` 超时导致的 `node_modules` 损坏） | 待合并 |
| [#75076](https://github.com/openclaw/openclaw/pull/75076) | Shadow-3 | 强化 Control UI 认证、状态警告与构建溯源——CSP/安全头、fragment-token 交接、认证 blob 获取（XL 级） | 待合并 |
| [#75101](https://github.com/openclaw/openclaw/pull/75101) | koshaji | 新增 `tools.exec.denyPathPatterns` 硬拒绝门（防止子代理读取 `~/.openclaw/secrets/` 等敏感路径） | 待合并 |
| [#75095](https://github.com/openclaw/openclaw/pull/75095) | koshaji | 配置审计日志脱敏：CLI argv 中的 secret 在持久化前 redact | 待合并 |
| [#75256](https://github.com/openclaw/openclaw/pull/75256) | katyaclawd | Mattermost streaming 草稿预览按 turn 边界拆分（`streaming.mode='block'`） | 待合并 |

**整体推进评估**：安全加固与基础设施修复是今日主线，但 **482 条 PR 待合并** 的积压表明 review 带宽严重瓶颈。Gateway 性能 regression 的 root cause（#74328 fs.stat storm）尚未有针对性 fix PR。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 核心诉求 | 链接 |
|:---|:---|:---:|:---:|:---|:---|
| 1 | **预构建 Android APK 发布请求** | 21 | 1 | 降低移动端部署门槛，避免用户自行编译 | [#9443](https://github.com/openclaw/openclaw/issues/9443) |
| 2 | **Gateway CPU 飙高导致 Telegram 回复停滞** | 18 | 3 | 解决生产环境 Gateway 无响应问题 | [#72338](https://github.com/openclaw/openclaw/issues/72338) |
| 3 | **分层 bootstrap 文件加载** | 16 | 0 | 节省 LLM token，大型工作区场景优化 | [#22438](https://github.com/openclaw/openclaw/issues/22438) |
| 4 | **Gateway 运行时退化（定价获取 60s 超时、Telegram 轮询停滞）** | 13 | 0 | Windows 11 + Node 24 环境下的稳定性 | [#73323](https://github.com/openclaw/openclaw/issues/73323) |
| 5 | **编码 Agent 永远无法完成任务（4.2 后 regression）** | 12 | 1 | 核心工作流断裂 | [#62505](https://github.com/openclaw/openclaw/issues/62505) |
| 6 | **4.22→4.26 显著变慢（BLOCKER 级）** | 12 | 5 | 性能 regression 阻断升级 | [#73501](https://github.com/openclaw/openclaw/issues/73501) |
| 7 | **Gateway 重启挂起 3-4 分钟** | 12 | 2 | macOS LaunchAgent 模式启动可靠性 | [#73303](https://github.com/openclaw/openclaw/issues/73303) |

**诉求分析**：
- **移动端扩展**（#9443）：AI 助手场景向 Android 渗透的明确信号，21 条评论中大量 "+1" 式反馈
- **性能与稳定性压倒一切**：前 7 条热点中 5 条为性能/回归问题，用户容忍度已接近极限
- **Token 经济性觉醒**（#22438, #67419）：高级用户开始系统性优化上下文成本

---

## 5. Bug 与稳定性

### 按严重程度排列

| 级别 | Issue | 现象 | 影响版本 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **BLOCKER** | [#73501](https://github.com/openclaw/openclaw/issues/73501) | 反应/回复显著变慢，升级阻断 | 4.22→4.26 | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/73501) |
| 🔴 **BLOCKER** | [#73323](https://github.com/openclaw/openclaw/issues/73323) | 多子系统网络/定时器退化 | 4.23/4.25/4.26 | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/73323) |
| 🟠 **Critical** | [#74328](https://github.com/openclaw/openclaw/issues/74328) | **fs.stat storm 导致主线程 100% CPU**（root cause 已定位） | 4.26/main | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/74328) |
| 🟠 **Critical** | [#72338](https://github.com/openclaw/openclaw/issues/72338) | CPU spin → Telegram 停滞 + 状态探针超时 | 未明确 | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/72338) |
| 🟠 **Critical** | [#73303](https://github.com/openclaw/openclaw/issues/73303) | Gateway 重启挂起 3-4 分钟 | 4.26 | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/73303) |
| 🟡 **High** | [#73306](https://github.com/openclaw/openclaw/issues/73306) | Active Memory 插件每次运行 15s 超时 | 4.25/4.26 | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/73306) |
| 🟡 **High** | [#62505](https://github.com/openclaw/openclaw/issues/62505) | 编码 Agent 永远无法完成 | 4.2 后 | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/62505) |
| 🟡 **High** | [#75069](https://github.com/openclaw/openclaw/issues/75069) | 捆绑插件运行时 mirror 同步阻塞主线程 80-90s | 4.22+ | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/75069) |
| 🟡 **High** | [#74209](https://github.com/openclaw/openclaw/issues/74209) | 默认捆绑插件（尤其 bonjour）阻塞 Gateway 启动 | 4.26 | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/74209) |
| 🟡 **High** | [#73874](https://github.com/openclaw/openclaw/issues/73874) | Windows + Docker Desktop 绑定挂载 HTTP/WS 调度死锁 | 4.24-4.26 | ❌ 无 | [链接](https://github.com/openclaw/openclaw/issues/73874) |

**关键发现**：#74328 已定位 root cause 为 **"fs.stat storm in microtask queue"**，是 4.22→4.26 性能退化的核心线索，但尚未有针对性 PR。今日多个 PR（#75183, #75310）围绕捆绑运行时依赖修复，属于缓解而非根治。

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 成熟度 | 纳入下一版本概率 | 链接 |
|:---|:---|:---|:---:|:---|
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | 分层 bootstrap 文件加载 | 有详细设计，社区高关注 | ⭐⭐⭐⭐⭐ | [链接](https://github.com/openclaw/openclaw/issues/22438) |
| [#63829](https://github.com/openclaw/openclaw/issues/63829) | 按 Agent 隔离 memory-wiki vault | 明确痛点，多 Agent 场景刚需 | ⭐⭐⭐⭐⭐ | [链接](https://github.com/openclaw/openclaw/issues/63829) |
| [#64046](https://github.com/openclaw/openclaw/issues/64046) | 敏感数据脱敏（配置、日志、UI） | 安全合规基础能力，PR #75095 已部分覆盖 | ⭐⭐⭐⭐⭐ | [链接](https://github.com/openclaw/openclaw/issues/64046) |
| [#71736](https://github.com/openclaw/openclaw/issues/71736) | Control UI 插件贡献插槽 | RFC 阶段，架构级变更 | ⭐⭐⭐⭐☆ | [链接](https://github.com/openclaw/openclaw/issues/71736) |
| [#60127](https://github.com/openclaw/openclaw/issues/60127) | 多租户支持（单实例+RBAC） | 企业场景刚需，实现复杂度高 | ⭐⭐⭐☆☆ | [链接](https://github.com/openclaw/openclaw/issues/60127) |
| [#9443](https://github.com/openclaw/openclaw/issues/9443) | 预构建 Android APK | 移动端扩展，CI/CD 即可支持 | ⭐⭐⭐⭐⭐ | [链接](https://github.com/openclaw/openclaw/issues/9443) |
| [#71142](https://github.com/openclaw/openclaw/issues/71142) | Control UI 可配置上传大小限制 | 细节体验，实现简单 | ⭐⭐⭐⭐⭐ | [链接](https://github.com/openclaw/openclaw/issues/71142) |

**路线图信号**：安全加固（#75101 exec 路径硬拒绝、#75095 日志脱敏）与基础设施修复是当前资源倾斜方向。分层 bootstrap 和 per-agent vault 是社区最期待的效率特性，但尚未看到对应 PR。

---

## 7. 用户反馈摘要

### 😫 核心痛点

| 场景 | 原声摘录 | 来源 |
|:---|:---|:---|
| **升级即灾难** | "After upgrading from OpenClaw 4.22 to 4.26, the bot responds **significantly slower**" | [#73501](https://github.com/openclaw/openclaw/issues/73501) |
| **Windows 二等公民** | "Gateway long-running Node process exhibits multi-subsystem network/timer degradation... reproducible across 2026.4.23" | [#73323](https://github.com/openclaw/openclaw/issues/73323) |
| **Token 焦虑** | "Bootstrap files consume LLM tokens on every session... wasting 20-30% tokens" | [#67419](https://github.com/openclaw/openclaw/issues/67419) |
| **安全裸奔** | "apikey、token、secretkey 等敏感信息都是明文存储... 日志中敏感信息未脱敏" | [#64046](https://github.com/openclaw/openclaw/issues/64046) |
| **更新丢消息** | "`openclaw update` run mid-turn causes **total message loss** on Telegram" | [#71178](https://github.com/openclaw/openclaw/issues/71178) |

### 😊 满意点

- 多 Agent 协作架构设计获认可（#72629 虽提成本问题，但肯定模型能力）
- 插件扩展机制灵活（#8287 Node 注册工具、#71736 UI 插槽请求均基于此）
- 社区响应速度较快（Issues 24h 内更新率高）

---

## 8. 待处理积压

### 长期未响应的高价值 Issue（>60 天仍 open）

| Issue | 天数 | 风险 | 建议行动 | 链接 |
|:---|:---:|:---|:---|:---|
| [#9443](https://github.com/openclaw/openclaw/issues/9443) Android APK | ~85 | 移动端用户流失，竞品抢占 | 分配 CI/CD 资源，优先级 P1 | [链接](https://github.com/openclaw/openclaw/issues/9443) |
| [#8892](https://github.com/openclaw/openclaw/issues/8892) TUI --agent 标志 | ~86 | 多 Agent 工作流阻塞 | 快速实现，size 预估 XS | [链接](https://github.com/openclaw/openclaw/issues/8892) |
| [#8441](https://github.com/openclaw/openclaw/issues/8441) Skill 级 thinking/model 配置 | ~86 | 与 cron job 能力不对等 | 跟随 #75074 responses API 统一处理 | [链接](https://github.com/openclaw/openclaw/issues/8441) |
| [#8287](https://github.com/openclaw/openclaw/issues/8287) Node 注册 Agent 工具 | ~87 | 生态扩展关键能力 | 需架构 review，建议 Q3 规划 | [链接](https://github.com/openclaw/openclaw/issues/8287) |
| [#7575](https://github.com/openclaw/openclaw/issues/7575) Sysbox Docker 运行时 | ~87 | 安全隔离升级，标记 HOLD | 维护窗口期重启评估 | [链接](https://github.com/openclaw/openclaw/issues/7575) |
| [#33329](https://github.com/openclaw/openclaw/issues/33329) 隐式发现机制文档化 | ~59 | 网络静默失败难以调试 | 文档 PR 即可，低风险 | [链接](https://github.com/openclaw/openclaw/issues/33329) |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---:|:---|
| Issue 日更新量 | 500 | ⚠️ 极高，需区分 spam/有效 |
| Issue 关闭率 | 2.6% (13/500) | 🔴 严重偏低， triage 积压 |
| PR 日更新量 | 500 | ⚠️ 极高，review 带宽瓶颈 |
| PR 合并率 | 3.6% (18/500) | 🔴 严重偏低 |
| 版本发布频率 | 5/24h | ⚠️ 异常高，需确认 release 质量 |
| 回归问题占比 | ~35% (热点 Issues) | 🔴 版本质量控制告警 |

---

*本日报基于 GitHub 公开数据生成，部分 release notes 因源数据截断未完整呈现。建议维护者优先处理 #74328 (fs.stat storm) 以阻断性能 regression 连锁反应。*

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析 | 2026-05-01

---

## 1. 生态全景

个人 AI 助手开源生态正经历**从功能竞赛向质量巩固的关键转折**。OpenClaw 以 500 Issues/500 PR 的日活规模维持生态标杆地位，但 2.6% Issue 关闭率与 3.6% PR 合并率暴露治理瓶颈；Moltis、CoPaw 等项目以 60-80% 的高关闭率展示更健康的吞吐效率；IronClaw 的"Reborn"大规模重构与 NanoClaw 的 v2 冲刺表明**架构代际更替**成为头部项目共同选择。整体呈现"核心项目负重前行、新锐项目差异化突围"的格局，**稳定性债务**与**多智能体协作架构**是贯穿全生态的两大主线。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | 版本发布 | 关闭/合并率 | 健康度评估 |
|:---|:---:|:---:|:---|:---:|:---|
| **OpenClaw** | 500 (关13) | 500 (并18) | v2026.4.29 + 4 beta | Issue 2.6% / PR 3.6% | 🔴 **过载** — 需求井喷 vs 治理瘫痪，回归链条未破 |
| **NanoBot** | 15 (关8) | 27 (并9) | 无 | Issue 53% / PR 33% | 🟡 **活跃健康** — 质量加固期，DeepSeek 兼容性风险可控 |
| **Hermes Agent** | 50 (关3) | 50 (并11) | v0.12.0 "The Curator" | Issue 6% / PR 22% | 🟡 **高活跃低闭环** — 新特性引爆参与，但 review 滞后 |
| **PicoClaw** | 37 (关1) | 38 (并6) | v0.2.8 | Issue 2.7% / PR 15.8% | 🔴 **积压严重** — stale 标签 70%+，PR 审阅 >14 天 |
| **NanoClaw** | 8 (关3) | 50 (并39) | 无 (v2 冲刺) | Issue 37.5% / PR 78% | 🟢 **冲刺高效** — OpenCode Bug 集群为唯一风险点 |
| **NullClaw** | 0 | 5 (并2) | 无 | PR 40% | 🟢 **聚焦修复** — Zig 0.16 回归清理中，小而精 |
| **IronClaw** | 24 (关1) | 39 (并21) | 无 | Issue 4% / PR 54% | 🟡 **重构高压** — Reborn 架构推进快，但金丝雀 3 连崩 |
| **LobsterAI** | 1 (关0) | 12 (并0) | 无 | PR 0% | 🔴 **停滞** — 12 条 PR 全部 pending >36 天，安全漏洞公开 |
| **Moltis** | 7 (关6) | 21 (并18) | v20260430.01 | Issue 86% / PR 86% | 🟢 **优秀** — 全栈推进，当日闭环率生态最高 |
| **CoPaw** | 50 (关33) | 16 (并14) | v1.1.5.post1 | Issue 66% / PR 87.5% | 🟢 **高效响应** — 安全事件 24h 闭环，首次贡献者友好 |
| **ZeroClaw** | 50 (关1) | 50 (并12) | 无 | Issue 2% / PR 24% | 🟡 **高活跃低闭环** — singlerider 单点依赖，P1 Bug 密集 |
| **TinyClaw** | — | — | — | — | ⚪ 无活动 |
| **ZeptoClaw** | — | — | — | — | ⚪ 无活动 |

---

## 3. OpenClaw 在生态中的定位

### 规模优势与治理危机并存

| 维度 | OpenClaw 表现 | 生态对比 |
|:---|:---|:---|
| **社区规模** | 500 Issues/500 PR 日活，绝对量级第一 | 次高为 Hermes/ZeroClaw 的 50/50，10 倍差距 |
| **版本节奏** | 24h 内 5 个 release（含 4 beta），迭代激进 | Moltis 日期版本、CoPaw 补丁版本更克制 |
| **技术深度** | 内存子系统、消息自动化、子代理路由等底层创新 | 多数项目停留在通道适配层 |
| **稳定性债务** | 4.22→4.26 连续 regression，#74328 fs.stat storm 根因已定位无 PR | Moltis/CoPaw 当日闭环生产问题；NanoClaw 78% 合并率 |
| **企业就绪度** | 安全加固（#75101 exec 拒绝门、#75095 日志脱敏）起步 | NanoClaw 已完成容器双向隔离；CoPaw 漏洞 24h 修复 |

### 核心差异

- **vs Moltis/CoPaw**：OpenClaw 功能覆盖面最广（全平台/全通道），但**闭环效率垫底**；后两者以"当日修复当日发布"证明敏捷治理可行性
- **vs IronClaw**：同为大规模重构，OpenClaw 的"渐进式 beta 发布"与 IronClaw 的"Reborn 分组 PR"策略形成对照，前者引发 regression 链条，后者通过 #2987 EPIC 维持架构透明
- **vs NanoClaw**：安全架构差距显著——NanoClaw #2001/#2053 容器双向路径隔离已合并，OpenClaw 的 `tools.exec.denyPathPatterns` (#75101) 仍待合并

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 | 紧迫度 |
|:---|:---|:---|:---:|
| **多智能体协作架构** | Hermes (#16102 Kanban)、ZeroClaw (#5890 RFC)、OpenClaw (subagent routing) | 从"单 agent 工具调用"演进为"多 agent 长存活协作进程"，需会话状态机、权限边界、上下文继承 | 🔥🔥🔥 |
| **生产级稳定性/可观测性** | OpenClaw (Gateway CPU 飙高)、Hermes (#18127 在途会话不可见)、NanoClaw (OpenCode 进程泄漏)、NullClaw (SIGTERM 优雅关闭) | 自主维护/后台进程带来**控制感丧失**，需实时 attach、健康探针、优雅关闭 | 🔥🔥🔥 |
| **MCP 协议整合** | PicoClaw (v0.2.8 CLI 工具链)、Moltis (MCP OAuth)、CoPaw (MCP 生态)、LobsterAI (MCP 批量导入) | 服务器生命周期管理、OAuth 令牌刷新、动态发现机制 | 🔥🔥 |
| **配置系统现代化** | ZeroClaw (schema v3 + CRUD API)、IronClaw (#3036 Config-as-Code)、CoPaw (#3967 核心/用户区分离) | 声明式配置替代 .env 混乱，支持多租户/多环境 | 🔥🔥 |
| **安全分级与沙箱** | NanoClaw (容器网络隔离)、NullClaw (3-tier risk)、OpenClaw (exec 拒绝门)、CoPaw (路径遍历修复) | 从"全有或全无"到精细化权限，平衡工具可用性与攻击面 | 🔥🔥 |
| **长会话性能优化** | OpenClaw (#22438 分层 bootstrap)、CoPaw (#3350 200+轮卡顿)、Moltis (#933 自动标题) | Token 经济性觉醒，前端渲染瓶颈，上下文管理 | 🔥🔥 |
| **发送者身份/多租户** | NanoBot (#3552/#3549 sender_id)、PicoClaw (#2313 Agent Shield)、OpenClaw (memory-wiki vault 隔离) | 群聊/企业场景下"谁在对谁说话"的身份感知 | 🔥 |

---

## 5. 差异化定位分析

| 项目 | 核心功能侧重 | 目标用户 | 技术架构特征 | 关键差异点 |
|:---|:---|:---|:---|:---|
| **OpenClaw** | 全功能个人 AI 助手（消息自动化、内存系统、多通道） | 技术极客/早期采用者 | Node.js 单体，插件扩展 | 生态最完整，但稳定性债务最重 |
| **NanoBot** | 轻量级多通道 Bot 框架（Matrix/飞书/Slack） | 开发者/小团队 | Python，HookCenter 插件架构 | "ultra-lightweight" 定位受质疑（Node.js 依赖） |
| **Hermes Agent** | 自主后台维护 + 多画像协作 | 高阶自动化用户 | Python，长存活 curation 进程 | v0.12.0 "The Curator" 自我维护理念独特 |
| **PicoClaw** | "AI 智能体操作系统"（MCP 为核心抽象） | 边缘设备/嵌入式 | Go，轻量化设计 | Sipeed 硬件基因，ARM 生态优先 |
| **NanoClaw** | 企业级安全部署（容器隔离、审批工作流） | 企业运维/安全敏感用户 | TypeScript，OneCLI 管理 | 安全架构领先，v2 冲刺中 |
| **NullClaw** | 极致轻量 + Zig 运行时安全 | 系统编程爱好者 | Zig，自定义异步运行时 | 语言级创新，社区最小但聚焦 |
| **IronClaw** | WASM 沙盒 + 去中心化代理网络 | Web3/NEAR 生态开发者 | Rust，WASM 组件模型 | Reborn 架构重构规模最大 |
| **LobsterAI** | 桌面端 IM 机器人（微信/钉钉/飞书） | 中国企业运营人员 | Electron，SQLite 本地存储 | 网易有道背景，B 端合规套件 |
| **Moltis** | 全栈开发者平台（SDK + TUI + Web UI） | 全栈开发者/DevOps | TypeScript/Python/Go 多语言 SDK | 当日闭环率 86%，工程纪律最佳 |
| **CoPaw** | 企业微信/飞书深度集成 + 前端工程化 | 中国企业数字化团队 | React/Ant Design，Python 后端 | 阿里系背景，通道稳定性投入最深 |
| **ZeroClaw** | 网关中心化 + 多智能体 UX | 多平台运营者 | Node.js，schema 驱动配置 | 国际化（zh-CN 文档）与微信 CLI |

---

## 6. 社区热度与成熟度分层

```
┌─────────────────────────────────────────────────────────────┐
│  🚀 快速迭代期（高活跃 + 高闭环）                              │
│     Moltis  —  86% 闭环率，全栈推进，生产就绪度跃迁              │
│     CoPaw   —  安全事件 24h 响应，首次贡献者友好                 │
│     NanoClaw — v2 冲刺，78% PR 合并率，OpenCode 风险待解         │
├─────────────────────────────────────────────────────────────┤
│  🔧 质量巩固期（中高活跃 + 聚焦修复）                            │
│     NanoBot  — DeepSeek 兼容性，Matrix/飞书通道稳定              │
│     NullClaw — Zig 0.16 回归清理，小而精                        │
│     Hermes   — v0.12.0 新特性消化，可观测性补全                  │
├─────────────────────────────────────────────────────────────┤
│  🏗️ 架构重构期（高投入 + 高风险）                              │
│     IronClaw — Reborn 重构，550 PR/1096 commits，金丝雀承压      │
│     OpenClaw — 功能扩张 vs 治理停滞，regression 链条未破         │
├─────────────────────────────────────────────────────────────┤
│  ⚠️ 停滞风险期（低闭环 + 高积压）                              │
│     PicoClaw — 70%+ stale，PR >14 天，安全漏洞公开               │
│     LobsterAI — 36 天零合并，12 条 PR 全部 pending               │
│     ZeroClaw  — 24% 合并率，singlerider 单点依赖，P1 Bug 密集     │
├─────────────────────────────────────────────────────────────┤
│  💤 休眠观察期                                                │
│     TinyClaw, ZeptoClaw — 24h 无活动                          │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. 值得关注的趋势信号

### 信号一："Token 经济性"成为高级用户核心诉求
- **数据**：OpenClaw #22438（16 评论，分层 bootstrap）、#67419（20-30% token 浪费）；CoPaw #3350（200+轮卡顿）
- **含义**：用户从"能用"转向"用得起"，上下文压缩、分层加载、会话切分将成为基础设施标配
- **开发者行动**：在 Agent 架构中内置 token 预算感知，而非依赖用户手动管理

### 信号二："自主维护"悖论——自动化带来控制感丧失
- **数据**：Hermes #18127（"Agent 在后台跑，我完全不知道它在干嘛" 👍 焦虑）；OpenClaw Gateway 不可观测；NanoClaw OpenCode 进程泄漏
- **含义**：v0.12.0 类"自主维护"特性需要配套**实时可观测性**（attach、trace、预算耗尽预警），否则用户拒绝升级
- **开发者行动**：后台进程必须暴露结构化状态流，设计"渐进式信任"UX

### 信号三：多智能体协作从"功能"变为"架构"
- **数据**：Hermes Kanban RFC（13 评论）、ZeroClaw 多智能体 RFC（7 评论待投票）、OpenClaw 子代理路由元数据
- **含义**：单 Agent 工具调用已 commoditize，**多 Agent 状态机、权限边界、上下文继承**是下一代竞争壁垒
- **开发者行动**：提前设计 agent 间认证/授权协议，避免后期安全债务

### 信号四：通道稳定性 > 模型能力，成为企业采纳门槛
- **数据**：CoPaw 企业微信 4 处修复、NanoBot 飞书 thread 强制问题、ZeroClaw WhatsApp 双 Bug、OpenClaw Telegram 轮询停滞
- **含义**：企业用户容忍模型"不够聪明"，绝不接受"消息发不出去"
- **开发者行动**：将通道测试纳入 CI（非 mock，真实账号轮询），建立渠道变更监控机制

### 信号五：安全从"合规 checkbox"变为"架构核心"
- **数据**：NanoClaw 容器双向隔离、NullClaw 3-tier risk、CoPaw 24h 漏洞响应、OpenClaw exec 拒绝门
- **含义**：AI Agent 的 tool use 天然扩大攻击面，**权限最小化**需嵌入运行时而非后期补丁
- **开发者行动**：采用 NanoClaw 模式——容器网络隔离 + 路径硬拒绝 + 配置审计脱敏三层防御

---

*分析基于 2026-05-01 各项目 GitHub 公开数据，健康度评估综合闭环率、P1 Bug 密度、架构清晰度与社区参与深度。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报 | 2026-05-01

> **项目**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot) | **日期**: 2026-05-01 | **分析周期**: 过去24小时

---

## 1. 今日速览

NanoBot 今日保持**高活跃度**，24小时内产生 **15 条 Issue 更新**（7 新开/活跃，8 关闭）和 **27 条 PR 更新**（18 待合并，9 已合并/关闭），无新版本发布。社区聚焦三大主线：**Matrix/飞书等通道稳定性修复**、**DeepSeek 推理链兼容性**、以及**多租户/多用户场景下的身份感知与消息投递架构**。值得注意的是，今日新开的 7 个 Issue/PR 中，4 个与生产环境稳定性直接相关，显示项目正从功能扩展期进入**质量加固期**。

---

## 2. 版本发布

**无新版本发布**。当前最新版本仍为 `v0.1.5.post3`（基于 [#3554](https://github.com/HKUDS/nanobot/issues/3554) 引用推断），但该版本已暴露 DeepSeek-V4 推理链回归问题。

---

## 3. 项目进展

### 已合并/关闭的关键 PR（9 条）

| PR | 作者 | 进展说明 | 链接 |
|:---|:---|:---|:---|
| **#3562** / **#3565** | bstaeheli | **Matrix 通道空消息修复**（重复提交后合并其一）：DeepSeek 等模型返回空 `reasoning_content` chunk 时，Matrix 通道不再触发空消息发送。直接解决生产环境消息 spam 问题。 | [#3562](https://github.com/HKUDS/nanobot/pull/3562) |
| **#3556** | orkapodavid | **跨平台开发规范**：引入 `.gitattributes` 强制 LF 换行，消除 Windows 开发者贡献时的 CRLF 污染。基础设施层面的长期健康投资。 | [#3556](https://github.com/HKUDS/nanobot/pull/3556) |
| **#3550** | orkapodavid | **文档可移植性**：将示例中的 `/tmp/...` 硬编码路径替换为跨平台等价写法，降低 Windows/macOS 新用户上手摩擦。 | [#3550](https://github.com/HKUDS/nanobot/pull/3550) |
| **#3557** | dannylty | 关闭（无实质内容，疑似误操作或测试 PR） | [#3557](https://github.com/HKUDS/nanobot/pull/3557) |

**整体推进评估**：今日合并以**修复和工程规范**为主，无重大功能落地。Matrix 通道的空消息修复是唯一直接影响用户体验的进展，但 DeepSeek 推理链的根本问题（[#3554](https://github.com/HKUDS/nanobot/issues/3554)）仍有待 [#3560](https://github.com/HKUDS/nanobot/pull/3560) 验证。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论 | 👍 | 核心诉求分析 |
|:---|:---|:---:|:---:|:---|
| 1 | **[#660] "ultra-lightweight" 宣传与 Node.js 依赖的矛盾** | 11 | 5 | **品牌信任危机**：项目自我定位为"超轻量"，但 Dockerfile 同时依赖 Python + Node.js。作者 besoeasy 质疑技术选型与宣传口径的一致性，社区期待官方回应架构瘦身路线图或文档修正。标签含 `good first issue` 和 `to-nightly`，暗示维护者有意推动但尚未排期。[#660](https://github.com/HKUDS/nanobot/issues/660) |
| 2 | **[#603] Ollama 本地模型配置困难** | 7 | 0 | **本地部署门槛**：用户反复尝试配置 vLLM/Ollama 桥接失败，文档示例不足。今日关闭但未明确解决路径，可能依赖社区知识或转向其他 Issue。[#603](https://github.com/HKUDS/nanobot/issues/603) |
| 3 | **[#3546] NanoBot "失忆" + 飞书强制 thread 回复** | 6 | 0 | **飞书通道体验断裂**：两个问题叠加——(1) `reply_in_thread=True` 硬编码导致群聊体验混乱；(2) 关闭 thread 后上下文丢失（"失忆"）。今日关闭，关联修复为 [#3533](https://github.com/HKUDS/nanobot/issues/3533)（飞书 `reply_in_thread` 强制问题）。[#3546](https://github.com/HKUDS/nanobot/issues/3546) |

### 高热度 PR 信号

- **[#3564] HookCenter 类型化事件钩子系统**（aiguozhi123456）：提出替换现有 `AgentHook` 方法重写模式，支持 `entry_points` 插件分发和 `observe/transform/guard` 三种 handler 模式。这是**架构级重构提案**，若合并将显著降低外部开发者扩展门槛，但涉及向后兼容适配器设计，评审周期预计较长。[#3564](https://github.com/HKUDS/nanobot/pull/3564)

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | **[#3554](https://github.com/HKUDS/nanobot/issues/3554)** | **DeepSeek-V4 `reasoning_content` 回归**：`v0.1.5.post3` + WebUI + exec 工具触发 `reasoning_content must be passed back` 错误，与已关闭的 #3469 路径不同 | 新开 | **[#3560](https://github.com/HKUDS/nanobot/pull/3560)** 待验证（调整推理模式检测条件） |
| 🔴 **高** | **[#3551](https://github.com/HKUDS/nanobot/issues/3551)** | **OpenAI 兼容流式 API 过早关闭**：`stream=true` + 工具调用时 SSE 流提前终止，非工具请求正常 | 新开 | **[#3555](https://github.com/HKUDS/nanobot/pull/3555)** 已提交（修复流生命周期） |
| 🟡 **中** | **[#3553](https://github.com/HKUDS/nanobot/issues/3553)** | **Matrix 启动时重复读取旧消息**：`/restart` 后历史消息重放，需手动 `/new` 打断 | 新开 | 无 |
| 🟡 **中** | **[#3559](https://github.com/HKUDS/nanobot/issues/3559)** | **WebSocket 无法替代 Webhook 做主动投递**：多租户环境下 cron/heartbeat/代理主动发送仍需 webhook，官方 WebSocket 方案覆盖不足 | 新开 | 无 |
| 🟢 **低** | **[#3506](https://github.com/HKUDS/nanobot/issues/3506)** | **Matrix Windows 路径冒号问题**：`nio` store 文件路径含冒号导致 `OSError [WinError 123]` | 已关闭 | 已修复（未明确关联 PR） |
| 🟢 **低** | **[#2298](https://github.com/HKUDS/nanobot/issues/2298)** | **工具调用无限循环**：小模型/本地模型易陷入重复调用同一工具的死循环 | 长期开放 | 无 |

**稳定性评估**：DeepSeek 推理链和 OpenAI 兼容流式 API 是今日最大风险点，两者均影响核心交互路径且已有针对性 PR，建议优先评审合并。

---

## 6. 功能请求与路线图信号

| 需求来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| **[#3568](https://github.com/HKUDS/nanobot/pull/3568)** Manifest LLM Router 支持 | 新增网关型 provider，支持 `mnfst_` 前缀路由 | ⭐⭐⭐⭐☆ 高 | 符合现有网关抽象，代码变更清晰（registry + schema + docs） |
| **[#3358](https://github.com/HKUDS/nanobot/pull/3358)** 模型预设快速切换 | `ModelPresetConfig` 命名参数包 + `model_preset` 引用 | ⭐⭐⭐⭐☆ 高 | 解决多模型管理痛点，Pydantic 验证完整，社区呼声持续 |
| **[#3461](https://github.com/HKUDS/nanobot/pull/3461)** 多 Agent 邮箱通道 | 文件系统原子 I/O 的 inter-agent 通信，零侵入现有代码 | ⭐⭐⭐☆☆ 中 | 架构优雅但属生态扩展，需评估维护负担 |
| **[#3173](https://github.com/HKUDS/nanobot/pull/3173)** OpenTelemetry 可观测性 | LLM 调用 + 工具执行的完整追踪，支持 Langfuse/LangSmith | ⭐⭐⭐☆☆ 中 | 企业级需求，但引入外部依赖，需权衡核心包体积 |
| **[#3373](https://github.com/HKUDS/nanobot/pull/3373)** 网关生命周期通知钩子 | `on_start`/`on_stop` 通知到首个可用非内部通道 | ⭐⭐⭐⭐☆ 高 | 运维刚需，实现简洁，已关联关闭的 #3279 |
| **[#3552](https://github.com/HKUDS/nanobot/pull/3552)** / **[#3549](https://github.com/HKUDS/nanobot/pull/3549)** 发送者身份注入 | 飞书/通用通道的 `sender_id` → LLM 上下文 | ⭐⭐⭐⭐⭐ 极高 | **多用户场景阻塞性问题**，两个 PR 方案竞争，需维护者裁决统一抽象 |

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 | 核心不满 |
|:---|:---|:---|
| **飞书群聊开发者** | [#3546](https://github.com/HKUDS/nanobot/issues/3546), [#3533](https://github.com/HKUDS/nanobot/issues/3533) | "创建了新闻酸菜、饮食男女、消息提醒等多个功能群，每次强制 thread 回复极其困惑" —— 配置自主权缺失 |
| **Windows 个人用户** | [#3506](https://github.com/HKUDS/nanobot/issues/3506), [#3554](https://github.com/HKUDS/nanobot/issues/3554) | Matrix 发不出消息、DeepSeek 报错，"能接收能处理但发不出去" —— 平台兼容性测试覆盖不足 |
| **本地模型尝鲜者** | [#603](https://github.com/HKUDS/nanobot/issues/603) | "试了无数配置示例，nanobot is thinking 一直卡住" —— 文档与调试工具缺失 |
| **多租户 SaaS 构建者** | [#3559](https://github.com/HKUDS/nanobot/issues/3559) | "WebSocket 不能替代 webhook 做主动投递" —— 架构文档承诺与实际能力 gap |
| **安全敏感运维** | [#979](https://github.com/HKUDS/nanobot/issues/979) | "防止执行 rm 指令是防不住 AI 的，哈哈" —— 沙箱/权限边界设计被绕过，语气轻松但问题严重 |

### 满意度信号

- **插件扩展意愿强**：[#3564](https://github.com/HKUDS/nanobot/pull/3564) 的 HookCenter 提案、[#3461](https://github.com/HKUDS/nanobot/pull/3461) 的 mailbox 通道均显示开发者积极构建生态
- **企业级功能跟进快**：OpenTelemetry、生命周期通知等 PR 响应了生产部署需求

---

## 8. 待处理积压

> ⚠️ 以下 Issue/PR 长期未获明确响应，存在社区流失或重复报告风险

| 条目 | 创建时间 | 最后更新 | 积压天数 | 风险说明 |
|:---|:---|:---|:---:|:---|
| **[#660](https://github.com/HKUDS/nanobot/issues/660)** "ultra-lightweight" 定位争议 | 2026-02-14 | 2026-04-30 | **76 天** | 项目品牌核心承诺受质疑，11 评论 5 👍 显示社区关注度高，但仅标记 `to-nightly` 无维护者实质回应 |
| **[#2298](https://github.com/HKUDS/nanobot/issues/2298)** 工具调用无限循环 | 2026-03-20 | 2026-04-30 | **42 天** | 本地模型用户的阻塞体验，影响核心可靠性口碑，无 assignee |
| **[#1385](https://github.com/HKUDS/nanobot/pull/1385)** 保留 reasoning_details 多轮工具调用 | 2026-03-01 | 2026-04-30 | **61 天** | OpenRouter 兼容性修复，与今日 #3554 问题同源，长期未合并导致重复 bug 报告 |
| **[#3358](https://github.com/HKUDS/nanobot/pull/3358)** 模型预设快速切换 | 2026-04-21 | 2026-04-30 | 10 天 | 功能完整度高，但评审队列拥挤，存在被新 PR 淹没风险 |

---

**日报生成完毕** | 数据截止: 2026-04-30 24:00 UTC | 下次建议关注: DeepSeek 推理链修复验证、发送者身份注入 PR 裁决、#660 架构回应

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 | 2026-05-01

---

## 1. 今日速览

Hermes Agent 项目在 **v0.12.0 "The Curator" 版本发布次日** 迎来极高活跃度：24小时内 **50 条 Issues 更新**（47 条新开/活跃，仅 3 条关闭）、**50 条 PR 更新**（39 条待合并，11 条已合并/关闭），形成 **近 10:1 的活跃/关闭比**，表明社区参与热情高涨但维护吞吐面临压力。v0.12.0 引入的自主后台维护能力（autonomous background curation）正引发大量新场景探索与边界问题暴露，特别是 gateway 可观测性、插件管理和跨平台稳定性成为焦点。今日新增 PR 中 **6 条为 5 月 1 日新鲜提交**，修复与功能迭代并行，项目处于快速演进期。

---

## 2. 版本发布

### [v0.12.0 "The Curator"](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.4.30) | 2026-04-30

| 指标 | 数据 |
|:---|:---|
| 周期 | 自 v0.11.0 以来 |
| 提交量 | **1,096 commits** |
| 合并 PR | **550 merged PRs** |
| 文件变更 | **1,270 files changed** |
| 代码增量 | **+217,776 / -213,000** 行级变更 |
| 贡献者 | **217 位社区贡献者**（含共同作者）|

**核心特性：自主后台维护（Autonomous Background Curation）**
- Hermes Agent 首次实现**自我维护能力**：后台自主执行代码审查、依赖更新、文档同步等运维任务
- 引入长期运行的 curation 进程，减少人工干预

**潜在迁移注意事项：**
- 大规模重构（1,270 文件）可能带来配置格式或 API 的隐性变更，建议升级后运行 `hermes doctor` 全面诊断
- 新后台进程可能增加资源占用，容器化部署需调整资源限制

---

## 3. 项目进展

### 今日已关闭/合并的关键项

| # | 类型 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#16102** | RFC 完成 | **Kanban 多画像协作看板** RFC 关闭，实现 PR #16100 已合并。从 cron 驱动调度器演进为**长存活协作进程**，支持多 agent 实时协作 | [Issue](https://github.com/NousResearch/hermes-agent/issues/16102) |
| **#17908** | 紧急修复 | **安装阻断修复**：`pyproject.toml` 中 `exclude-newer = "7 days"` 相对时间字符串不被 `uv` 接受，已修正为 RFC 3339 日期格式 | [Issue](https://github.com/NousResearch/hermes-agent/issues/17908) |
| **#18124** | 社区建设 | 韩语文档翻译提案关闭（重复），由 #18126 接替统一跟踪 | [Issue](https://github.com/NousResearch/hermes-agent/issues/18124) |

### 推进中的关键 PR（待合并）

| # | 方向 | 进展意义 | 链接 |
|:---|:---|:---|:---|
| **#18135** | 时间上下文 | **每轮对话注入当前时间**，避免污染系统提示词与持久化记录，支持幂等注入 | [PR](https://github.com/NousResearch/hermes-agent/pull/18135) |
| **#18115** | 委托评估 | **Best-of-N 竞争性评估**：`delegate_task` 批量模式引入独立裁判自动择优，减少父 agent 手动比较负担 | [PR](https://github.com/NousResearch/hermes-agent/pull/18115) |
| **#18133** | 任务编排 | **Conductor 任务进程管理**：Dashboard 新增持久化非交互式 supervisor 进程，支持任务启停与状态追踪 | [PR](https://github.com/NousResearch/hermes-agent/pull/18133) |
| **#18107** | 供应商生态 | **接入 Manifest 开源 LLM 路由器**：自动按请求复杂度选择 16+ 供应商中的最优模型，内置降级链 | [PR](https://github.com/NousResearch/hermes-agent/pull/18107) |
| **#18095** | 插件管理 | **Dashboard 插件页面**：启用/禁用/安装/移除/更新 + 认证状态可视化，修复 bundled 后端插件启用逻辑 | [PR](https://github.com/NousResearch/hermes-agent/pull/18095) |

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | # | 标题 | 评论 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|:---|
| 1 | **#16102** | [RFC] Kanban 多画像协作看板 | **13 条** | 从 cron 到长存活进程的架构演进，社区关注**多 agent 实时协作的可扩展性** | [Issue](https://github.com/NousResearch/hermes-agent/issues/16102) |
| 2 | **#5726** | 启动缓慢：Honcho memory provider 阻塞初始化 ~60s+/步 | **5 条** | 生产环境**冷启动性能**，长会话用户被迫等待 2 分钟+ | [Issue](https://github.com/NousResearch/hermes-agent/issues/5726) |
| 3 | **#8576** | WhatsApp bridge 3 个 npm 安全漏洞 | **5 条** | **供应链安全**，`hermes doctor` 已暴露但修复未落地 | [Issue](https://github.com/NousResearch/hermes-agent/issues/8576) |

### 深层诉求分析

- **#16102 的高热度** 反映 v0.12.0 "The Curator" 的自主维护理念与社区**多人协作场景**的碰撞——用户不满足于单 agent 自动化，而是期望**agent 团队协作基础设施**
- **#5726 持续活跃**（创建 4/7，今日仍更新）：Honcho 内存 provider 的**顺序阻塞初始化**是架构级债务，非简单补丁可解，需异步化重构
- **#8576 安全债**：WhatsApp bridge 的 npm 漏洞已存在较长时间，安全响应速度低于社区预期

---

## 5. Bug 与稳定性

### 🔴 P1（严重/阻断）

| # | 标题 | 状态 | 影响 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **#16677** | DeepSeek V4 Pro via OpenRouter 导致 gateway 崩溃循环 + Telegram bot 失效 | **OPEN** | **Gateway 完全不可用**，消息平台级联故障 | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/16677) |
| **#17959** | 键盘输入完全冻结，Ctrl+C 无效，只能杀终端 | **OPEN** | **交互会话完全中断**，数据丢失风险 | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/17959) |
| **#17908** | 安装失败：`exclude-newer` 格式不被 uv 接受 | **CLOSED** | 新用户安装阻断 | 已合并 | [Issue](https://github.com/NousResearch/hermes-agent/issues/17908) |

### 🟡 P2（中等/显著影响）

| # | 标题 | 状态 | 说明 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| **#18106** | IMAP fetch 错误：`'int' object has no attribute 'decode'` | **OPEN** | Email 平台邮件解析崩溃 | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/18106) |
| **#18127** | Gateway 在途会话无可观测性：agent.log 静默 + 无法实时 attach | **OPEN** | v0.12.0 新特性**可观测性缺口**，用户无法判断 agent 是进展中/卡住/迭代预算耗尽 | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/18127) |
| **#18101** | 后台进程更新泄漏到错误 Slack 线程 | **OPEN** | 多会话状态污染，消息路由错误 | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/18101) |
| **#18072** | `hermes status` 误报 Nous Tool Gateway 可用（认证已失效） | **OPEN** | 状态检测与真实认证状态不一致 | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/18072) |
| **#5722** | `terminal.docker_forward_env` 和 `docker_env` 被配置静默忽略 | **OPEN** | Docker 环境变量转发失效 | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/5722) |
| **#5729** | Telegram 冷启动静默失败（重试预算不足） | **OPEN** | 系统启动时网络未就绪导致服务不可用 | 无 | [Issue](https://github.com/NousResearch/hermes-agent/issues/5729) |

### 🟢 P3（轻微/优化）

| # | 标题 | 链接 |
|:---|:---|:---|
| #18110 | `hermes status` 误报 sudo 禁用（实际无密码 sudo 正常） | [Issue](https://github.com/NousResearch/hermes-agent/issues/18110) |
| #5687 | Anthropic OAuth 测试：pytest 捕获下 getpass 读 stdin 失败 | [Issue](https://github.com/NousResearch/hermes-agent/issues/5687) |
| #5695 | `/plugins install` 报错（URL 安装路径问题） | [Issue](https://github.com/NousResearch/hermes-agent/issues/5695) |

---

## 6. 功能请求与路线图信号

### 高潜力纳入下一版本的需求

| # | 特性 | 热度信号 | 与现有 PR 关联 | 路线图判断 |
|:---|:---|:---|:---|:---|
| **#5586** | **非阻塞后台 agent 委托**（`async_delegation` 工具集） | **👍 6**（最高赞） | PR #5571（可配置重试）可协同 | **高概率 v0.13.0**：与 v0.12.0 的自主维护理念高度契合，解决 `delegate_task` 同步阻塞痛点 |
| **#5570** | 可配置 max API retries + stream retries + 智能退避 | **👍 1** | PR #5571 已实现待合并 | **已在路上**：配置层扩展，增强鲁棒性 |
| **#18092** | 生产级自主进化引擎（GASP Loop） | 评论 2 | 无直接 PR | **中长期**：超越 prompt-only 优化，需基础设施成熟 |
| **#5715** | `/title` 无参数时自动生成会话名 | 评论 2 | PR #18129（标题生成超时配置）相关 | **短期可能**：用户体验优化，实现成本低 |
| **#15300** | Claude/Cursor/Codex 的 SKILL.md 支持（非 ACP 委托） | 评论 1 | 无 | **中期**：扩展 CLI 工具生态，需标准化协议 |
| **#5625** | 工作负载状态栏 + 统一 Ctrl+X 面板 | 无评论 | 无 | **中期**：TUI 体验升级，与 v0.12.0 多进程架构相关 |

### 供应商生态扩展信号

- **PR #18107**（Manifest 路由器）、**PR #5585**（MiniMax VLM）、**PR #18130**（Moonshot/Kimi 工具模式修复）显示 **多供应商适配是活跃方向**
- **PR #5557**（OpenRouter 实际模型展示）解决路由黑盒问题，提升可观测性

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 核心情绪 |
|:---|:---|:---|
| **"启动 2 分钟，每次 step 卡 60 秒"** | #5726 | 挫败：性能债务严重阻碍日常使用 |
| **"Agent 在后台跑，我完全不知道它在干嘛"** | #18127 | 焦虑：v0.12.0 自主化带来**控制感丧失** |
| **"Slack 线程消息串了，业务上下文混乱"** | #18101 | 担忧：多会话隔离不可靠，生产风险 |
| **"键盘冻住只能杀终端，工作丢失"** | #17959 | 愤怒：基础交互稳定性未保障 |
| **"配置写了 docker 环境变量，实际没生效，调试半天"** | #5722 | 困惑：配置与行为不一致，静默失败 |

### 满意/期待点

- **v0.12.0 自主维护理念获认可**：#18092 主动提出 GASP 进化引擎扩展，显示核心用户对方向认同
- **Dashboard 插件管理**（PR #18095）被期待为"终于能可视化管控插件"
- **韩语社区活跃**：#18124/#18126 显示国际化需求自发涌现

---

## 8. 待处理积压

### ⚠️ 长期未响应的高价值 Issue（建议维护者优先审阅）

| # | 创建日期 | 标题 | 积压天数 | 风险 | 链接 |
|:---|:---|:---|:---|:---|:---|
| **#5726** | 2026-04-07 | Honcho 内存 provider 阻塞启动 | **24 天** | 每日影响所有长会话用户，性能口碑恶化 | [Issue](https://github.com/NousResearch/hermes-agent/issues/5726) |
| **#5729** | 2026-04-07 | Telegram 冷启动静默失败 | **24 天** | 系统级服务可靠性，macOS/systemd 用户流失 | [Issue](https://github.com/NousResearch/hermes-agent/issues/5729) |
| **#5687** | 2026-04-07 | Anthropic OAuth 测试失败 | **24 天** | 测试覆盖率缺口，认证流程回归风险 | [Issue](https://github.com/NousResearch/hermes-agent/issues/5687) |
| **#5589** | 2026-04-06 | macOS launchd EX_CONFIG (78) 持久 spawn scheduled | **25 天** | 外部卷部署场景完全不可用 | [Issue](https://github.com/NousResearch/hermes-agent/issues/5589) |
| **#8576** | 2026-04-12 | WhatsApp bridge npm 安全漏洞 | **19 天** | **安全合规风险**，`hermes doctor` 已暴露 | [Issue](https://github.com/NousResearch/hermes-agent/issues/8576) |

### 建议行动

1. **性能专项**：#5726（Honcho 阻塞）建议纳入 v0.12.1 热修复，或提供异步初始化开关
2. **安全响应**：#8576 需明确修复时间表，考虑临时文档警告
3. **可观测性补全**：#18127 与 v0.12.0 自主特性绑定，建议快速迭代实时 attach 能力

---

*日报基于 GitHub 公开数据生成，时间窗口：2026-04-30 至 2026-05-01*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 | 2026-05-01

## 1. 今日速览

PicoClaw 今日呈现**高活跃度、高积压**特征：24小时内 Issues 更新 37 条（仅关闭 1 条，36 条仍活跃），PR 更新 38 条（32 条待合并，仅 6 条完成闭环）。项目发布 **v0.2.8** 正式版及对应 Nightly 构建，核心聚焦 MCP（Model Context Protocol）CLI 工具链完善。社区讨论热度集中在**多账户 API 轮询、Ollama 云凭证、OpenAI Responses API 迁移**等基础设施层需求，但大量 Issue/PR 带有 `stale` 标签，反映维护带宽与社区增长之间存在明显张力。整体健康度：**功能迭代活跃，治理响应承压**。

---

## 2. 版本发布

### [v0.2.8](https://github.com/sipeed/picoclaw/releases/tag/v0.2.8) — 正式版
| 属性 | 内容 |
|:---|:---|
| **核心主题** | MCP CLI 工具链完整化 + 工具调用协议修复 |
| **关键变更** | • `feat(mcp)`: 新增 `show`, `add`, `list`, `remove`, `test`, `edit` 六大 CLI 命令，实现 MCP 服务器全生命周期管理<br>• `fix(mcp)`: 工具调用时发送空对象 `{}` 替代 `null`，解决与 TypeScript/Zod 校验的兼容性问题<br>• `fix(build)`: 修复构建失败问题 (#2723) |
| **破坏性变更** | 无明确 Breaking Change；MCP 工具调用参数格式变更（`null` → `{}`）可能影响依赖旧行为的自定义服务器 |
| **迁移建议** | 使用 MCP 集成的用户需验证第三方服务器对空参数的兼容性；建议通过 `picoclaw mcp test` 命令预检 |

### [v0.2.8-nightly.20260430.4ffbe7a2](https://github.com/sipeed/picoclaw/releases/tag/v0.2.8-nightly.20260430.4ffbe7a2) — 自动化构建
> ⚠️ 不稳定版本，仅供测试。完整变更对比：[v0.2.8...main](https://github.com/sipeed/picoclaw/compare/v0.2.8...main)

---

## 3. 项目进展

今日 **6 条 PR 已合并/关闭**，32 条仍待审阅。从已闭环 PR 反推（注：数据中未显式列出今日合并项，依据 Release 反推核心进展）：

| 进展领域 | 说明 | 推进度 |
|:---|:---|:---|
| **MCP 生态基础设施** | v0.2.8 的 MCP CLI 命令集补齐了服务器管理短板，用户无需手动编辑配置文件即可增删改 MCP 服务 | ⭐⭐⭐⭐☆ 重大进展 |
| **协议兼容性** | `null` → `{}` 修复解决与主流 TypeScript MCP SDK 的互操作障碍，降低生态接入门槛 | ⭐⭐⭐⭐☆ 关键修复 |
| **构建稳定性** | #2723 构建失败修复保障 CI/CD 可靠性 | ⭐⭐⭐☆☆ 常规维护 |

**整体评估**：项目向"AI 智能体操作系统"定位迈出坚实一步，MCP 作为核心抽象层日趋成熟，但 PR 合并率（6/38 ≈ 15.8%）显示代码审查流程存在瓶颈。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

| 排名 | Issue | 评论数 | 核心诉求 | 分析 |
|:---|:---|:---:|:---|:---|
| 1 | [#2408 LLM Account Stacking (Cartridge-Belt)](https://github.com/sipeed/picoclaw/issues/2408) | **10** | 多 API Key 自动轮询应对限流/配额 | 生产环境高可用刚需，"弹匣带"比喻形象说明用户对**韧性架构**的迫切需求。0 👍 反映功能诉求明确但社区影响力有限 |
| 2 | [#2225 Ollama cloud credentials](https://github.com/sipeed/picoclaw/issues/2225) | **9** | Ollama 云服务认证支持缺失 | 本地部署向云端迁移趋势明显，认证缺口阻碍企业采用 |
| 3 | [#2171 OpenAI Responses API 迁移](https://github.com/sipeed/picoclaw/issues/2171) | **9** | 从 Chat Completions 升级至官方推荐的 Responses API | 技术债务问题，OpenAI 生态跟随策略需明确路线图 |
| 4 | [#2468 定时任务执行失败](https://github.com/sipeed/picoclaw/issues/2468) | **7** | `cron` 工具被限制为"内部通道"导致调度失败 | 安全策略过度收紧，功能可用性与沙箱隔离的平衡争议 |
| 5 | [#1763 aarch64 .deb 安装失败](https://github.com/sipeed/picoclaw/issues/1763) | **7** | ARM64  Debian 包依赖冲突 | 边缘设备（如树莓派）部署障碍，与 #2625 预编译构建诉求形成共振 |

**深层信号**：社区从"能用"转向"好用、可运维"，关注点从功能有无转向**企业级可靠性、多环境部署、安全策略弹性**。

---

## 5. Bug 与稳定性

| 优先级 | Issue | 领域 | 严重程度 | 状态 | 关联 Fix PR |
|:---|:---|:---|:---:|:---|:---|
| 🔴 **P0** | [#2468 定时任务执行失败](https://github.com/sipeed/picoclaw/issues/2468) | cron/tool | **高** — 核心功能完全不可用 | 待修复 | 无明确 PR |
| 🔴 **P0** | [#1763 aarch64 .deb 安装失败](https://github.com/sipeed/picoclaw/issues/1763) | build | **高** — 阻塞 ARM 设备部署 | 待修复（创建于3-18，已 stale） | 无 |
| 🟡 **P1** | [#2377 exec/logs 终端控制字符注入](https://github.com/sipeed/picoclaw/issues/2377) | tool/security | **中高** — 潜在终端攻击面（ANSI 注入、Unicode 双向字符） | 待修复 | 无 |
| 🟡 **P1** | [#2472 list_dir Windows 路径分隔符错误](https://github.com/sipeed/picoclaw/issues/2472) | tool | **中** — Windows 平台功能损坏 | 待修复 | 无 |
| 🟡 **P1** | [#2480 Proactive compact 模型名解析错误](https://github.com/sipeed/picoclaw/issues/2480) | provider/agent | **中** — `model` vs `model_name` 混淆导致 API 调用失败 | 待修复 | 无 |
| 🟡 **P1** | [#2540 whatsapp_native LID 格式消息静默丢弃](https://github.com/sipeed/picoclaw/issues/2540) | channel | **中** — WhatsApp 现代化账户完全不可用 | 待修复 | 无 |
| 🟡 **P1** | [#2541 whatsapp_native group_trigger 四重缺陷](https://github.com/sipeed/picoclaw/issues/2541) | channel | **中** — 提及触发功能完全失效 | 待修复（作者称已有本地补丁） | 无 |
| 🟢 **P2** | [#2478 /use skill 覆盖问题](https://github.com/sipeed/picoclaw/issues/2478) | agent/skill | **低中** — 多 skill 装备模式逻辑缺陷 | 待确认（设计 or Bug） | 无 |
| 🟢 **P2** | [#2447/#2464 飞书连续消息仅处理最后一条](https://github.com/sipeed/picoclaw/issues/2447) | channel | **低中** — 消息队列/并发处理缺陷 | 待修复 | 无 |

**稳定性评估**：WhatsApp 通道存在系统性质量危机（2 条 P1 均涉及 `whatsapp_native`）；`stale` 标签泛滥提示 Issue 生命周期管理需优化。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 成熟度信号 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| **SMTP 邮件通道** | [#2465](https://github.com/sipeed/picoclaw/issues/2465) | 需求明确（定时任务结果推送），通用协议实现成本低 | **高** — 可作为 cron 通道的自然延伸 |
| **飞书插件优化（流式输出/状态显示）** | [#2580](https://github.com/sipeed/picoclaw/issues/2580) | 2 👍，有官方参考实现（OpenClaw），但要求"极简"与"功能丰富"存在张力 | 中 — 需产品决策权衡 |
| **多飞书应用支持** | [#2493](https://github.com/sipeed/picoclaw/issues/2493) | 企业多租户场景刚需，配置架构需调整 | 中 — 涉及配置系统重构 |
| **OAuth 2.1 + PKCE for MCP** | [#2546](https://github.com/sipeed/picoclaw/issues/2546) | 对标 Claude.ai "Add connector" UX，云部署场景关键 | 中高 — 与 MCP CLI 演进方向一致 |
| **外部记忆系统集成（mem0/Supermemory）** | [#2515](https://github.com/sipeed/picoclaw/issues/2515) | 长期记忆是 Agent 核心竞争力，但需第三方 Go SDK 生态成熟 | 低中 — 依赖外部生态 |
| **Seahorse fresh_tail_size 可配置** | [#2527](https://github.com/sipeed/picoclaw/issues/2527) | 硬编码常量 → 配置项，改动面小，上下文预算调优刚需 | **高** — 技术债务清理 |
| **GitHub Copilot stdio 传输** | [PR #2240](https://github.com/sipeed/picoclaw/pull/2240) | PR 已开，实现完整，待 review | **高** — 代码就绪 |

---

## 7. 用户反馈摘要

### 😤 核心痛点
> *"光是运行一个查询资料，出现超过上百行的同样错误！"* — [#2519](https://github.com/sipeed/picoclaw/issues/2519)

- **Workspace 沙盒过度敏感**：工具频繁因"越界"读写 `/tmp` 等目录失败，用户期望更智能的默认路径策略或更清晰的错误引导
- **认证频繁失效**：Web UI 需反复手动重新认证（[#2302](https://github.com/sipeed/picoclaw/issues/2302)），会话持久性存疑
- **ARM/边缘设备二等公民**：aarch64 包问题 + WhatsApp 预编译缺失（[#2625](https://github.com/sipeed/picoclaw/issues/2625)），与"轻量化"定位矛盾

### 🎯 典型场景
- **周期性运维自动化**：SMTP + cron 组合用于"项目周报、周期性检查"（[#2465](https://github.com/sipeed/picoclaw/issues/2465)）
- **低资源设备常驻 Agent**：Android TV box + Telegram + Termux 组合（[PR #2462](https://github.com/sipeed/picoclaw/pull/2462)），验证项目"无处不在的 AI 助手"愿景

### 💡 建设性批评
> *"picoclaw的初衷就是轻量化，所以可能要求有点为难"* — [#2580](https://github.com/sipeed/picoclaw/issues/2580)

用户深刻理解产品哲学，但在**极简与实用**间寻求更好平衡。

---

## 8. 待处理积压

### ⚠️ 高优先级关注清单

| Issue/PR | 创建时间 | 最后更新 | 滞留天数 | 风险 |
|:---|:---|:---|:---:|:---|
| [#1763 aarch64 .deb 安装失败](https://github.com/sipeed/picoclaw/issues/1763) | 2026-03-18 | 2026-04-30 | **43天** | ARM 生态采纳受阻，与 Sipeed 硬件基因冲突 |
| [#2171 OpenAI Responses API 迁移](https://github.com/sipeed/picoclaw/issues/2171) | 2026-03-30 | 2026-04-30 | **31天** | 技术债务累积，OpenAI 可能逐步弃用旧 API |
| [#2225 Ollama cloud credentials](https://github.com/sipeed/picoclaw/issues/2225) | 2026-03-31 | 2026-04-30 | **30天** | 本地→云端迁移趋势下的竞争力缺口 |
| [PR #2313 Multi-User Support / Agent Shield](https://github.com/sipeed/picoclaw/pull/2313) | 2026-04-03 | 2026-04-30 | **27天** | 安全加固大型 PR，审查复杂度高但企业采用关键 |
| [PR #2240 GitHub Copilot stdio](https://github.com/sipeed/picoclaw/pull/2240) | 2026-04-01 | 2026-04-30 | **29天** | 代码就绪，延迟合并无技术理由 |

### 📊 积压健康度指标
- **stale 标签占比**：展示 Issues 中约 **70%+** 带 stale 标签
- **PR 平均审阅周期**：>14 天（基于创建-更新日期估算）
- **Issue 关闭率**：24h 内 1/37 ≈ **2.7%** — 远低于开源健康项目 15-20% 基准

---

**分析师备注**：PicoClaw 处于"功能快速扩张 → 治理体系承压"的典型成长期拐点。建议维护团队：1) 引入自动化 stale bot 清理策略；2) 优先闭环 P0/P1 Bug 以稳定核心体验；3) 对 MCP/通道层建立明确的 RFC 流程，减少"需求涌入、实现分散"的碎片化风险。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报 | 2026-05-01

## 1. 今日速览

NanoClaw 今日展现**极高活跃度**，24小时内 50 个 PR 完成评审闭环（78% 已合并/关闭），Issues 处理率 37.5%（3/8 关闭）。项目正处于 **v2 版本发布前的密集冲刺期**：安全加固收尾（容器网络隔离、命令注入修复）、OpenCode 提供商紧急迭代（4 个相关 Bug 同日暴露）、以及安装体验全面重构（9 个堆叠式 setup PR 集中落地）。核心风险在于 OpenCode 提供商的高优先级 Bug 集群是否会影响 v2 稳定性。

---

## 2. 版本发布

**无新版本发布**

> 注：v2 版本处于 setup 流程重构的最后阶段，9 个堆叠式 setup PR（#2101-#2158 系列）今日集中合并，预计发布窗口临近。

---

## 3. 项目进展

### 🔒 安全边界硬化（2 项核心修复）

| PR | 内容 | 影响 |
|:---|:---|:---|
| [#2001](https://github.com/qwibitai/nanoclaw/pull/2001) | 容器控制出站路径 → 防止主机文件任意读/删 | 阻断容器逃逸攻击面，主机/容器文件系统边界正式硬化 |
| [#2053](https://github.com/qwibitai/nanoclaw/pull/2053) | 将出站路径限制扩展至入站附件（基于 #2001） | 完成双向路径隔离闭环 |

### 🚀 通道能力扩展

| PR | 内容 | 影响 |
|:---|:---|:---|
| [#2040](https://github.com/qwibitai/nanoclaw/pull/2040) | Signal 原生适配器支持出站附件 | 补齐 Signal 通道的最后一块功能短板 |
| [#2107](https://github.com/qwibitai/nanoclaw/pull/2107) | Slack/Telegram 实现 `resolveChannelName` | 通道审批流可显示真实频道名称，用户体验质变 |
| [#2105](https://github.com/qwibitai/nanoclaw/pull/2105) | 富化通道审批流程：支持智能体选择 + 自由命名 | 从硬编码 Approve/Ignore 升级为多步交互流 |

### ⚙️ 安装体验重构（9 个堆叠 PR 集中落地）

| PR | 内容 |
|:---|:---|
| [#2146](https://github.com/qwibitai/nanoclaw/pull/2146) - [#2158](https://github.com/qwibitai/nanoclaw/pull/2158) | URL 回退标签优化、浏览器提示内嵌、逐步骤环境变量复用、根用户警告门控、启动画面（龙虾 ASCII 艺术）|

**关键架构决策**：setup 从"全有或全无"的环境变量批量复用，改为[逐步骤按需读取](https://github.com/qwibitai/nanoclaw/pull/2157)，显著降低配置认知负荷。

### 🛠️ 调度与消息可靠性

| PR | 内容 | 修复场景 |
|:---|:---|:---|
| [#2142](https://github.com/qwibitai/nanoclaw/pull/2142) | `schedule_task` 路由字段纳入 content JSON | 定时任务路由信息丢失导致投递失败 |
| [#2114](https://github.com/qwibitai/nanoclaw/pull/2114) | 预任务脚本扩展至跟进注入消息 | 任务消息流中脚本门控被静默绕过 |
| [#2033](https://github.com/qwibitai/nanoclaw/pull/2033) | 跟进轮询中的任务消息延迟至主循环 | 竞态条件下预任务脚本未执行 |

---

## 4. 社区热点

### 最高关注度：安全双响炮（已关闭）

| Issue | 反应 | 核心诉求 |
|:---|:---|:---|
| [#458](https://github.com/qwibitai/nanoclaw/issues/458) Security: 容器网络限制 | 👍 4 | **生产部署刚需**：容器 `bypassPermissions` 模式 + 无限制网络 = 数据外泄高危组合 |
| [#457](https://github.com/qwibitai/nanoclaw/issues/457) `stopContainer()` 命令注入 | 👍 0（Critical 标签） | **供应链安全**：`exec()` 字符串拼接模式存在经典注入漏洞 |

**社区信号**：安全 Issue 由同一作者 `johnwaldo` 连续提交，且均指向容器运行时核心代码（`src/container-runtime.ts`），表明社区正在进行**安全审计穿透**，而非表面合规检查。

###  setup 体验痛点爆发（已修复）

| Issue | 用户场景 |
|:---|:---|
| [#1973](https://github.com/qwibitai/nanoclaw/issues/1973) `onecli not found` | 新鲜 Linux 安装中 `~/.local/bin` 未注入子进程 PATH |

**修复响应速度**：Issue 4/24 创建 → PR [#2055](https://github.com/qwibitai/nanoclaw/pull/2055) 4/27 提交 → 4/30 合并，**6 天闭环**，体现 v2 阻塞性问题优先策略。

---

## 5. Bug 与稳定性

### 🔴 Critical / High（4 个 Open，需立即关注）

| 优先级 | Issue | 描述 | 状态 | 关联修复 |
|:---|:---|:---|:---|:---|
| **High** | [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) | **OpenCode 上下文丢失**：`wrapPromptWithContext` 发送字面量 `@./...md` 行，CLAUDE.md 与片段永不到达 LLM | 🟡 Open | **无 PR，阻塞 v2** |
| **High** | [#2148](https://github.com/qwibitai/nanoclaw/issues/2148) | **OpenCode 进程泄漏**：`SIGKILL` 不清理底层二进制，端口 4096 被持有 | 🟡 Open | **无 PR，每次超时叠加泄漏** |
| **High** | [#2147](https://github.com/qwibitai/nanoclaw/issues/2147) | **Host sweep 孤儿行**：`processing_ack` 残留导致下次重生即被 SIGKILL，claim-stuck 循环 | 🟡 Open | 引用 #209061f 声称已修，**回归确认中** |
| **High** | [#2159](https://github.com/qwibitai/nanoclaw/issues/2159) | **OneCLI 标识符校验冲突**：`ag_` 下划线 vs `[a-z0-9-]+` 正则，HTTP 400 | 🟡 Open | **无 PR，v2 安装阻断** |

### 🟡 Medium（1 个 Open）

| Issue | 描述 | 影响 |
|:---|:---|:---|
| [#2149](https://github.com/qwibitai/nanoclaw/issues/2149) | OpenCode 90s 硬编码超时摧毁本地模型场景 | 慢推理用户静默失败，需配置化改造 |

**风险评估**：OpenCode 提供商在单日爆发 **4 个 Bug**（#2147-#2150），其中 3 个 High + 1 个 Medium，且**零修复 PR**。该提供商可能是 v2 新引入组件，成熟度存疑，建议评估是否纳入 v2 发布或降级为 experimental。

---

## 6. 功能请求与路线图信号

### 从 PR 反推的 v2 路线图

| 方向 | 证据 | 完成度 |
|:---|:---|:---|
| **多通道原生附件** | Signal 已支持（#2040），Telegram 长文本分割已接线（#2112） | 80% |
| **企业审批工作流** | 通道连接审批流 + 智能体选择 + 自由命名（#2105, #2107） | 功能完成，待 UI 打磨 |
| **飞书生态集成** | dota-feishu 决策桥接 IPC 协议（#2141） | 内部工具化，通用性待观察 |
| **安装零配置** | 9 个 setup PR 堆叠重构，含本地 OneCLI 自引导（#2052 Open） | 90%，剩最后一块拼图 |

### 待决策功能

| PR | 状态 | 路线图信号 |
|:---|:---|:---|
| [#2052](https://github.com/qwibitai/nanoclaw/pull/2052) | 🟡 Open | **v2 发布阻塞**：首次安装自动引导 OneCLI 本地管理员，否则用户卡在认证环节 |
| [#2027](https://github.com/qwibitai/nanoclaw/pull/2027) | ✅ Merged | `host-actions` 容器技能 → 官方认可"智能体请求主机操作"为一级用例 |

---

## 7. 用户反馈摘要

### 痛点提炼（来自 Issue 描述）

| 场景 | 原声 | 系统性问题 |
|:---|:---|:---|
| **安全合规** | *"Network access: Unrestricted... significant risk when combined with bypassPermissions"* | 安全文档承认风险但未修复，"已知问题"≠"可接受风险" |
| **安装挫败** | *"onecli not found. Install it first"*（已安装） | PATH 传播假设在 Linux 发行版间不一致，子进程环境隔离理解成本高 |
| **本地模型用户** | *"hardcoded 90s idle timeout breaks local-model setups"* | 云优先默认值排斥边缘/隐私优先用户，配置表面缺失 |
| **运维噩梦** | *"recovery requires manual DB edit or service restart"* | 分布式状态（DB + 进程）缺乏自愈机制，kill-ceiling 设计未覆盖 ack 清理 |

### 满意度信号

- **正面**：setup 流程的龙虾 ASCII 启动画面（[#2158](https://github.com/qwibitai/nanoclaw/pull/2158)）表明团队关注**情感化设计**，降低 CLI 工具冰冷感
- **负面**：4 个 OpenCode Bug 零评论、零反应，可能反映**该提供商用户基数小**或**问题过于技术化未触达终端用户**

---

## 8. 待处理积压

### 长期未响应（跨版本遗留）

| Issue | 创建 | 最后更新 | 风险 |
|:---|:---|:---|:---|
| — | — | — | 今日数据无超 30 天未响应项，项目清理效率较高 |

### 需维护者立即介入

| 项 | 原因 | 建议动作 |
|:---|:---|:---|
| [#2052](https://github.com/qwibitai/nanoclaw/pull/2052) | v2 首次安装阻断，Open 4 天 | 评审合并或指定替代方案 |
| [#2150](https://github.com/qwibitai/nanoclaw/issues/2150) + [#2148](https://github.com/qwibitai/nanoclaw/issues/2148) + [#2147](https://github.com/qwibitai/nanoclaw/issues/2147) | OpenCode High 优先级 Bug 集群，零 PR | 评估是否回滚 OpenCode 至 experimental 或投入专项修复 |
| [#2159](https://github.com/qwibitai/nanoclaw/issues/2159) | v2 ID 生成与 OneCLI 校验冲突 | 确认是 NanoClaw 改 ID 格式还是 OneCLI 放宽校验 |

---

*日报生成时间：2026-05-01 | 数据来源：qwibitai/nanoclaw GitHub 公开数据*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报 | 2026-05-01

> **项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)  
> **报告周期**: 2026-04-30 至 2026-05-01  
> **分析师**: AI 智能体与个人 AI 助手领域开源项目分析

---

## 1. 今日速览

NullClaw 今日维持**高活跃度开发节奏**，过去24小时内产生 **5 条 PR 更新**（3 待合并、2 已关闭），无新增 Issues 及版本发布。核心开发者 vernonstinebaker 集中推进 Zig 0.16 迁移后的稳定性修复，覆盖网关 CPU 空转、Mattermost 消息静默失败、HTTP/1.1 keep-alive 阻塞等**生产级高严重性问题**，同时引入安全分级机制。项目处于**密集修复期**，代码质量管控严格（2/5 PR 当日关闭），但待审阅积压达 3 项，需关注评审带宽。

---

## 2. 版本发布

**无新版本发布**

最新 Release 暂无更新。当前开发重心集中于 Zig 0.16 迁移后的回归修复，预计待核心稳定性 PR 合并后进入版本冻结。

---

## 3. 项目进展

### 已合并/关闭 PR

| PR | 说明 | 项目推进价值 |
|:---|:---|:---|
| [#876](https://github.com/nullclaw/nullclaw/pull/876) `fix(compat): replace readSliceShort with readVec in Stream.read` | 修复 `Stream.read()` 中 `readSliceShort()` 导致 HTTP/1.1 keep-alive 客户端（curl）阻塞的问题：原实现循环填充 2048-byte 缓冲区直至 EOF，但 keep-alive 连接不发送 FIN，第二次 `readv()` 因 `SO_RCVTIMEO` 超时阻塞 30 秒 | **解除 HTTP/1.1 兼容性阻塞**，恢复与 curl 等标准客户端的正常交互，消除 30 秒级延迟 |
| [#873](https://github.com/nullclaw/nullclaw/pull/873) `fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin` | **高严重回归修复**：① 网关线程 `EAGAIN` 忙循环导致 100% CPU；② Mattermost POST 请求体为空导致消息静默丢失。两者均源于 Zig 0.16 迁移 | **恢复生产环境可用性**，解决全平台守护模式资源耗尽与消息通道失效 |

**整体进展评估**：今日关闭的 2 项 PR 均属于 **Zig 0.16 迁移后的 P0/P1 级回归修复**，直接决定生产部署可行性。项目从此前的"功能不可用"状态恢复至"待验证稳定"，迈进关键一步。

---

## 4. 社区热点

| 热度指标 | PR | 分析 |
|:---|:---|:---|
| **影响范围最广** | [#873](https://github.com/nullclaw/nullclaw/pull/873) | 标注 `[!CAUTION] High-severity regression`，明确影响"all Mattermost-connected agents in production"，是今日唯一涉及全量生产用户的变更 |
| **架构争议潜力** | [#878](https://github.com/nullclaw/nullclaw/pull/878) | 触及 Zig 异步运行时核心：`std.Io.sleep()` 的协作式 yield vs `nanosleep` 的 OS 线程挂起，涉及 `std.Io.Threaded` 调度语义与 POSIX 行为一致性，可能引发运行时设计讨论 |
| **安全策略调整** | [#875](https://github.com/nullclaw/nullclaw/pull/875) | 引入"中风险"分级解决 `curl` 在监督模式下被过度限制的问题（Closes #167），反映社区对**实用安全策略**的诉求 |

> **社区诉求洞察**：开发者群体正从"功能可用"转向"生产可靠"与"安全可用"的平衡，对 Zig 0.16 新运行时行为的理解深度成为贡献门槛。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR | 影响范围 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 生产阻塞** | 网关 accept-loop CPU 100% 忙转（`EAGAIN` 未正确处理） | **已修复** | [#873](https://github.com/nullclaw/nullclaw/pull/873) | 全平台守护模式 |
| 🔴 **P0 - 生产阻塞** | Mattermost 消息静默丢失（POST 空 body） | **已修复** | [#873](https://github.com/nullclaw/nullclaw/pull/873) | 所有 Mattermost 连接代理 |
| 🟡 **P1 - 兼容性** | HTTP/1.1 keep-alive 客户端 30 秒超时阻塞 | **已修复** | [#876](https://github.com/nullclaw/nullclaw/pull/876) | curl 等标准客户端 |
| 🟡 **P1 - 资源泄漏** | `thread.sleep()` 未真正挂起 OS 线程，导致调度器内忙等 | **待合并** | [#878](https://github.com/nullclaw/nullclaw/pull/878) | POSIX 目标平台 |
| 🟡 **P1 - 功能缺陷** | Mattermost writer buffer 未 flush 致 POST 数据缺失 | **待合并** | [#877](https://github.com/nullclaw/nullclaw/pull/877) | Zig 0.16 + Mattermost 通道 |

> **稳定性趋势**：Zig 0.16 迁移引入的回归正在系统性清理，剩余 2 项待合并 PR 均属同类问题（I/O 语义变更适配）。预计全部合并后生产稳定性恢复至迁移前水平。

---

## 6. 功能请求与路线图信号

| 来源 | 内容 | 纳入可能性 | 判断依据 |
|:---|:---|:---|:---|
| [#875](https://github.com/nullclaw/nullclaw/pull/875) 安全分级 | 3 层风险分类（高/中/低）+ `exec-prefix` 剥离，中风险允许 `curl`/`wget`/`scp` 等网络工具在监督模式运行 | **高 - 下一版本** | 直接关闭 #167，有明确 issue 关联；当前处于待合并状态 |
| [#875](https://github.com/nullclaw/nullclaw/pull/875) 隐含需求 | `block_exec` 与 `strip_exec_prefix` 配置扩展 | **中 - 后续迭代** | 基础设施已建立，具体策略规则可扩展 |

> **路线图信号**：项目正从"最小可行安全"（仅高/低两级）向"精细化权限治理"演进，与 AI 智能体需要调用外部工具（`curl` 获取 API、`scp` 传输文件）的实际场景对齐。

---

## 7. 用户反馈摘要

> **注**：今日无新增 Issues 及评论数据，以下从 PR 描述反推用户场景痛点。

| 痛点类型 | 具体表现 | 来源 PR |
|:---|:---|:---|
| **运行时行为不透明** | `std.Io.sleep()` 名义上"sleep"实际为协作 yield，开发者预期 OS 线程挂起，导致网关轮询间隔失效 | [#878](https://github.com/nullclaw/nullclaw/pull/878) |
| **升级迁移成本** | Zig 0.16 `std.Io.Writer.Allocating` 行为变更（延迟 flush）未在迁移文档中显式标注，引发生产故障 | [#877](https://github.com/nullclaw/nullclaw/pull/877) |
| **安全策略过度限制** | `curl` 被归为高风险导致监督模式下完全禁用，实际场景（API 调用、webhook）无法运行 | [#875](https://github.com/nullclaw/nullclaw/pull/875) |
| **调试困难** | Mattermost 消息静默丢失无日志/无错误，需代码审查才能定位空 body 问题 | [#873](https://github.com/nullclaw/nullclaw/pull/873) |

> **满意度推测**：生产用户因 Zig 0.16 迁移遭遇严重回归，满意度承压；修复响应速度较快（4/30 当日创建+关闭 #876），维持开发者信任。

---

## 8. 待处理积压

| PR | 创建时间 | 滞留原因 | 风险提示 |
|:---|:---|:---|:---|
| [#878](https://github.com/nullclaw/nullclaw/pull/878) `nanosleep` 替换 | 2026-04-30 | 涉及运行时核心语义变更，需评审 `std.Io.Threaded` 兼容性 | **阻塞 POSIX 平台资源优化**，网关线程仍非真正休眠 |
| [#877](https://github.com/nullclaw/nullclaw/pull/877) Mattermost buffer flush | 2026-04-30 | 与 #873 部分重叠，需确认是否独立必要 | 若 #873 未完全覆盖，Mattermost 消息仍可能异常 |
| [#875](https://github.com/nullclaw/nullclaw/pull/875) 安全分级 | 2026-04-30 | 功能扩展 PR，可能需安全策略评审周期 | 关闭 #167 的明确路径，社区等待较久 |

> **维护者提醒**：3 项待合并 PR 均创建于 4/30，当前无评论互动。建议优先评审 [#878](https://github.com/nullclaw/nullclaw/pull/878) 与 [#877](https://github.com/nullclaw/nullclaw/pull/877)（稳定性修复），[#875](https://github.com/nullclaw/nullclaw/pull/875) 可并行进入安全评审流程。

---

## 附录：今日 PR 完整索引

| # | 状态 | 标题 | 作者 | 链接 |
|:---|:---|:---|:---|:---|
| 878 | 🟡 OPEN | fix(compat): use nanosleep on POSIX in thread.sleep | vernonstinebaker | [PR #878](https://github.com/nullclaw/nullclaw/pull/878) |
| 877 | 🟡 OPEN | fix(channels/mattermost): finalize allocating writer body before curlPost | vernonstinebaker | [PR #877](https://github.com/nullclaw/nullclaw/pull/877) |
| 876 | ✅ CLOSED | fix(compat): replace readSliceShort with readVec in Stream.read | vernonstinebaker | [PR #876](https://github.com/nullclaw/nullclaw/pull/876) |
| 875 | 🟡 OPEN | security: add 3-tier risk classification and exec-prefix stripping | vernonstinebaker | [PR #875](https://github.com/nullclaw/nullclaw/pull/875) |
| 873 | ✅ CLOSED | fix: Zig 0.16 Mattermost empty-body POST and gateway accept-loop CPU spin | vernonstinebaker | [PR #873](https://github.com/nullclaw/nullclaw/pull/873) |

---

*本日报基于 GitHub 公开数据自动生成，PR 评论数为 `undefined` 表示数据未获取或 API 限制。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 | 2026-05-01

> **项目**: nearai/ironclaw | **日期**: 2026-05-01 | **分析周期**: 过去24小时

---

## 1. 今日速览

IronClaw 今日处于**高强度重构活跃期**，24小时内产生 23 个活跃 Issue 和 39 个 PR 更新，核心团队正全力推进 **"Reborn" 架构迁移**——这是项目历史上最大规模的重构工程。今日合并/关闭 21 个 PR，但仅关闭 1 个 Issue，显示大量工作仍在进行中。值得关注的是，**3 条生产金丝雀流水线同时失败**，且 TUI 显示回归、Gmail 集成 502 等用户可见问题浮现，稳定性压力与架构推进并行。社区贡献者 zmanian 的 Trace Commons 集成经历 PR 关闭后重新提交，反映代码审查标准趋严。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

### 已合并/关闭的关键 PR（21 条中的核心项）

| PR | 作者 | 说明 | 链接 |
|:---|:---|:---|:---|
| **#3095** | serrrfirat | **Reborn 宿主运行时契约门面** — 为 TurnCoordinator、AgentLoopHost 等上层提供稳定 API，是 Reborn 架构的关键基础接口 | [PR #3095](https://github.com/nearai/ironclaw/pull/3095) |
| **#3098** | zmanian | **共享运行时 HTTP 出口** — RuntimeHttpEgress 合约 + HostHttpEgressService，统一 WASM/Script/MCP 的网络策略、DNS/SSRF 防护、重定向禁用 | [PR #3098](https://github.com/nearai/ironclaw/pull/3098) |
| **#3114** | serrrfirat | **内存基质垂直覆盖测试** — 补齐 #3067 Phase 5，验证 RootFilesystem 的完整读写/列表/统计流程 | [PR #3114](https://github.com/nearai/ironclaw/pull/3114) |
| **#3117** | serrrfirat | **WASM 运行时故障边界测试** — 覆盖畸形字节、非组件模型工具、WASI 快照不匹配等 6 类错误场景 | [PR #3117](https://github.com/nearai/ironclaw/pull/3117) |
| **#3120** | serrrfirat | **宿主运行时取消与健康检查实装** — 替换存根实现，新增进程级取消、RuntimeBackendHealth 探针 | [PR #3120](https://github.com/nearai/ironclaw/pull/3120) |
| **#3119** | nickpismenkov | **禁用金丝雀 Issue 自动创建** — 直接回应今日 3 条金丝雀失败噪音，减少告警疲劳 | [PR #3119](https://github.com/nearai/ironclaw/pull/3119) |

### 架构推进评估

Reborn 架构的 **PR0-PR6 分组落地计划**（#2987）今日取得实质性进展：
- ✅ **PR4f-a 宿主运行时门面** → 已合并（#3095）
- ✅ **PR5 共享 HTTP 出口** → 已合并（#3098）  
- 🔄 **PR6 内置义务与交接** → 开放中（#3080，含 DB 迁移）
- 🔄 **WASM 运行时车道重划** → #3086 配套测试已补齐（#3117）

**整体进度**: 基础设施层（合约/出口/测试）已夯实，产品表面迁移（#3031）和垂直集成测试（#3067）即将进入主航道。

---

## 4. 社区热点

### 讨论最活跃的议题

| 排名 | Issue/PR | 评论数 | 核心诉求 | 链接 |
|:---|:---|:---|:---|:---|
| 🔥1 | **#2987 [EPIC] Reborn 架构落地策略与分组 PR 计划** | **43 评论** | 社区需要透明的重构路线图，避免"巨型堆叠 PR"审查灾难；维护者需协调 10+ 并行子任务的依赖关系 | [Issue #2987](https://github.com/nearai/ironclaw/issues/2987) |
| 🔥2 | **#3067 [TEST] Reborn 垂直切片集成测试套件** | **10 评论** | 要求"调用者级别"集成测试，证明 Reborn  substrate 通过公共入口点工作，而非仅 crate 本地单元测试 | [Issue #3067](https://github.com/nearai/ironclaw/issues/3067) |
| 🔥3 | **#3103 High ASCII TUI 显示回归** | **7 评论** | **用户可见故障**: 新 TUI 在部分 TTY 上 High ASCII 渲染异常，要求提供回退参数；直接影响 headless/服务器场景 | [Issue #3103](https://github.com/nearai/ironclaw/issues/3103) |

### 热点分析

- **#2987 的高评论量**反映大型重构项目的治理挑战：serrrfirat 作为架构负责人，需要持续向审查者和贡献者同步"分组 PR 的形状"，这本身就是显著的开销。
- **#3103 的 7 条评论**（创建当日即达）显示终端兼容性问题的紧迫性——这与 #3105（WASM 通道 headless 服务器修复）形成共振，暗示 **headless/服务器部署场景** 是当前用户群体的关键使用模式。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重度 | 问题 | 状态 | 影响范围 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|:---|
| 🔴 **P0-生产中断** | **3 条金丝雀流水线同时失败**（public-smoke / persona-rotating / provider-matrix anthropic） | 已缓解（禁用自动 Issue 创建） | 所有 anthropic 提供商用户；CI 信号噪声 | #3119（缓解告警） | [#3113](https://github.com/nearai/ironclaw/issues/3113) [#3115](https://github.com/nearai/ironclaw/issues/3115) [#3116](https://github.com/nearai/ironclaw/issues/3116) |
| 🟡 **P1-功能损坏** | **Gmail OAuth 回调 502 错误**（聊天助手路径） | 开放，有变通方案 | Gmail 集成用户；设置页面安装可绕过 | 无明确 PR | [#3128](https://github.com/nearai/ironclaw/issues/3128) |
| 🟡 **P1-功能损坏** | **Web IDE NEAR AI API 密钥 401 "Session not found"** | 开放 | 通过 Web IDE 配置 API 密钥的开发者 | 无明确 PR | [#3108](https://github.com/nearai/ironclaw/issues/3108) |
| 🟡 **P1-回归** | **High ASCII TUI 显示异常**（滚动混乱、光标错位） | 开放，有明确诉求 | 特定 TTY/终端模拟器用户 | 无明确 PR | [#3103](https://github.com/nearai/ironclaw/issues/3103) |

### 稳定性评估

- **金丝雀失败根因未明**: #3119 仅禁用告警创建，未修复底层故障；提交哈希 `2a65da7` 需进一步调查。
- **两个认证/授权问题**（Gmail 502、API 密钥 401）可能共享网关/会话管理层面的回归，建议关联排查。
- **TUI 回归**与 Reborn 产品表面迁移 (#3031) 时间重叠，需防止重构引入的界面层破坏。

---

## 6. 功能请求与路线图信号

### 今日新增功能需求

| Issue | 提出者 | 需求本质 | 纳入可能性评估 |
|:---|:---|:---|:---|
| **#3127 可扩展能力权限 UX 与策略解析器设计** | serrrfirat | Reborn 义务传递路径的上层 UX：将 `Allow { obligations }` 转化为用户可理解的审批/策略界面 | **高** — 直接继承 #3080，是 #2987 架构的必要组成 |
| **#3118 原生 Reborn 内存存储/搜索服务** | serrrfirat | **替代方案**: 放弃复用旧 Workspace DB（#3112 已关闭），新建隔离的 Reborn 内存子系统 | **高** — #3112 关闭即确认方向，#3078/#3079 已铺垫 |
| **#3107 AgentLoopDriver 与运行类配置契约** | serrrfirat | 支持多种代理循环执行模型（交互式 chat/coding vs 轻量 pi-style），避免内核成为 switch 语句 | **高** — 架构核心设计，阻塞后续循环实现 |
| **#3036 Configuration-as-Code** | ilblackdragon | 租户蓝图与用例 harness 的声明式配置，替代 .env + .system/ + JSON 的混乱现状 | **中-高** — 有 👍 社区支持，但依赖 Reborn 基础设施稳定 |
| **#3069 独立 ironclaw-reborn 二进制** | serrrfirat | 并行发布 `ironclaw` 和 `ironclaw-reborn`，建立可执行产品边界 | **中** — 里程碑明确，但属于发布工程，非技术阻塞 |

### 路线图信号

- **Reborn 优先于一切**: 今日 24 个 Issue 中 **14 个标记 `reborn`**，资源高度集中。
- **"产品表面迁移" (#3031) 即将启动**: 基础设施 PR（#3095, #3098）合并后，#3013（TurnCoordinator）、#3016（AgentLoopHost facade）等"切换阻塞器"进入关键路径。

---

## 7. 用户反馈摘要

### 真实痛点

| 用户 | 场景 | 痛点 | 来源 |
|:---|:---|:---|:---|
| **fmotta** | 生产环境 TUI 使用 | High ASCII 艺术在新版本渲染崩溃，"滚动混乱，光标错位"，**要求提供回退参数恢复旧行为** | [#3103](https://github.com/nearai/ironclaw/issues/3103) |
| **sergeiest** | 通过聊天助手添加 Gmail | OAuth 流程末尾回调 502，**重复尝试均失败**；最终通过设置页面安装绕过 | [#3128](https://github.com/nearai/ironclaw/issues/3128) |
| **ALuhning** | Web IDE 生成 API 密钥 | `sk-...` 密钥被 `private.near.ai` 网关拒绝，**实例预置的 `sk-agent-...` 密钥却正常** — 暗示密钥作用域或签发路径不一致 | [#3108](https://github.com/nearai/ironclaw/issues/3108) |
| **ek775** | Ubuntu 服务器 + Ollama Gemma4 无头部署 | Telegram 轮询在启动时失败，**`ironclaw onboard` 的通道激活逻辑未处理 headless 场景** | [#3105](https://github.com/nearai/ironclaw/pull/3105) |

### 满意度信号

- **ilblackdragon** 的 👍 支持 #3036（Config-as-Code），反映运维用户对当前配置混乱的共识。
- **zmanian** 的 Trace Commons 客户端在 #3130 关闭后 **当日重新提交 #3131**，显示外部核心贡献者的持续投入。

---

## 8. 待处理积压

### 需维护者关注的重要事项

| Issue/PR | 创建时间 | 当前状态 | 风险 | 行动建议 |
|:---|:---|:---|:---|:---|
| **#1764 Abound demo — Responses API, credential injection, skills, guardrails** | 2026-03-30（32天前） | 开放，XL 规模，高风险 | 与 Reborn 重构并行，可能产生大规模合并冲突 | 评估是否需冻结至 Reborn 完成，或拆分出独立可合并子集 |
| **#1446 Aliyun Coding Plan 支持** | 2026-03-20（42天前） | 开放，XL 规模，新贡献者 | 长期未合并可能打击社区贡献积极性 | 指定维护者进行结构化审查，明确阻塞点 |
| **#1479 near-intents 工具** | 2026-03-20（42天前） | 开放，XL 规模，新贡献者 | 同上；Defuse 1Click API 集成有明确价值 | 优先审查，或纳入 Reborn 工具表面规划 (#3090) |
| **#2987 EPIC 本身** | 2026-04-27 | 43 评论，持续膨胀 | 作为"元 Issue"可能积累过多讨论，降低可跟踪性 | 考虑拆分为 GitHub Project 看板，或按 PR 组建立子里程碑 |

---

## 附录：数据摘要

| 指标 | 数值 | 趋势判断 |
|:---|:---|:---|
| Issues 更新 | 24（新开/活跃 23，关闭 1） | ⚠️ 关闭率极低，积压风险 |
| PRs 更新 | 39（待合并 18，已合并/关闭 21） | ✅ 高吞吐，但待合并队列需关注 |
| 新版本 | 0 | — |
| `reborn` 标签 Issue | 14/24（58%） | 资源高度聚焦 |
| 金丝雀失败 | 3 条，同提交 | 🔴 需根因调查 |
| 外部贡献者活跃 | zmanian, zetyquickly, ek775 等 | ✅ 社区健康 |

---

*本日报基于 GitHub 公开数据生成，未包含私有仓库或线下讨论信息。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 | 2026-05-01

> **项目**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> **日期**: 2026-05-01  
> **数据周期**: 过去 24 小时（2026-04-30 至 2026-05-01）

---

## 1. 今日速览

LobsterAI 今日活跃度**偏低**，社区以存量 PR 维护为主，无新代码合并或版本发布。过去 24 小时内仅新增 1 条 Issue（IM 机器人微信配置阻塞问题），同时有 **12 条 PR 被批量更新**（均为 3 月下旬提交的积压 PR），但全部仍处于待合并状态，无一条完成合流。项目整体呈现**"高积压、低吞吐"**特征，维护团队需关注 PR 评审瓶颈。

---

## 2. 版本发布

**无新版本发布。** 最新 Release 暂无更新。

---

## 3. 项目进展

**今日无 PR 合并或关闭**，项目代码层面未产生实质性推进。

值得关注的是，12 条停滞 PR 于今日被统一更新（疑似自动化批量操作或维护者集中 review），涉及安全加固、性能优化、IM 功能扩展等关键领域，但均自 2026-03-25 创建以来 pending 超 **36 天**，评审周期严重过长。

| 方向 | PR 数量 | 代表 PR | 潜在价值 |
|:---|:---|:---|:---|
| 安全加固 | 3 条 | [#826](https://github.com/netease-youdao/LobsterAI/pull/826) URL 协议校验、[#828](https://github.com/netease-youdao/LobsterAI/pull/828) 路径遍历防护、[#842](https://github.com/netease-youdao/LobsterAI/pull/842) 安全环境扫描 | 阻断 RCE、信息泄露、恶意 Skill 等高危风险 |
| 性能优化 | 2 条 | [#830](https://github.com/netease-youdao/LobsterAI/pull/830) SQLite 参数调优、[#848](https://github.com/netease-youdao/LobsterAI/pull/848) 批量事务写入 | 解决桌面端数据库 I/O 瓶颈 |
| IM 生态扩展 | 2 条 | [#838](https://github.com/netease-youdao/LobsterAI/pull/838) 渠道级模型覆盖、[#835](https://github.com/netease-youdao/LobsterAI/pull/835) MCP JSON 批量导入 | 支撑企业多场景精细化运营 |
| 稳定性修复 | 3 条 | [#841](https://github.com/netease-youdao/LobsterAI/pull/841) 轮询重叠防护、[#847](https://github.com/netease-youdao/LobsterAI/pull/847) Markdown 渲染、[#852](https://github.com/netease-youdao/LobsterAI/pull/852) 窗口销毁崩溃 | 消除生产环境崩溃与数据竞争 |

**评估**: 上述 PR 若集中合并，将构成一次**高质量的中版本更新**（v0.x → v0.y），但当前评审停滞严重拖累交付节奏。

---

## 4. 社区热点

### 最活跃讨论：IM 机器人微信配置阻塞

| 项目 | 详情 |
|:---|:---|
| **Issue** | [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) IM机器人 微信接口 配置扫码后无法输入验证码 |
| 作者 | [@iwos2610](https://github.com/iwos2610) |
| 状态 | 🟢 OPEN，1 条评论，0 👍 |
| 核心矛盾 | 微信最新版安全策略升级（6 位数字验证码确认），LobsterAI 客户端 UI 未适配，导致**配置流程完全中断** |

**诉求分析**: 
- **即时性**: 微信作为国内 IM 机器人核心渠道，该阻塞直接影响企业用户 onboarding
- **产品-平台博弈**: 微信持续收紧 bot 接口安全（从扫码登录 → 扫码+确认码），LobsterAI 需建立**渠道合规快速响应机制**
- **UI 债务**: 验证码输入属于基础交互，缺失反映 IM 配置模块的边界场景覆盖不足

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 来源 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **P0 - 流程中断** | 微信 IM 机器人配置无法完成（缺少验证码输入界面） | [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | **无** | 待修复 |
| 🟠 **P1 - 崩溃** | 窗口关闭后异步 IPC 调用导致主进程崩溃 | [#852](https://github.com/netease-youdao/LobsterAI/pull/852) | [#852](https://github.com/netease-youdao/LobsterAI/pull/852) | PR 待合并（36 天） |
| 🟠 **P1 - 数据竞争** | 轮询任务重叠导致运行时状态混乱 | [#841](https://github.com/netease-youdao/LobsterAI/pull/841) | [#841](https://github.com/netease-youdao/LobsterAI/pull/841) | PR 待合并（36 天） |
| 🟡 **P2 - 安全** | `localfile://` 协议路径遍历可读取任意文件 | [#828](https://github.com/netease-youdao/LobsterAI/pull/828) | [#828](https://github.com/netease-youdao/LobsterAI/pull/828) | PR 待合并（36 天） |
| 🟡 **P2 - 安全** | `shell.openExternal` 允许 `javascript:` 等恶意协议 | [#826](https://github.com/netease-youdao/LobsterAI/pull/826) | [#826](https://github.com/netease-youdao/LobsterAI/pull/826) | PR 待合并（36 天） |
| 🟡 **P2 - 体验** | Markdown 单波浪号被误解析为删除线（如 `11~21°C`） | [#847](https://github.com/netease-youdao/LobsterAI/pull/847) | [#847](https://github.com/netease-youdao/LobsterAI/pull/847) | PR 待合并（36 天） |

**关键风险**: 3 条安全相关 PR（#826/#828/#842）全部 pending，项目存在**已知 CVE 级漏洞未修复**的公开状态，建议优先安排安全审计与合流。

---

## 6. 功能请求与路线图信号

### 已提交 PR 的功能（高纳入概率）

| 功能 | PR | 场景价值 | 版本信号 |
|:---|:---|:---|:---|
| **MCP 服务器 JSON 批量导入** | [#835](https://github.com/netease-youdao/LobsterAI/pull/835) | 降低 MCP 生态接入成本，兼容 Claude Desktop 配置迁移 | ⭐ 高概率纳入，MCP 为当前 AI 助手核心趋势 |
| **IM 渠道级模型覆盖** | [#838](https://github.com/netease-youdao/LobsterAI/pull/838) | 企业多部门/多场景差异化模型策略（成本 vs 能力权衡） | ⭐ 高概率纳入，B 端刚需 |
| **Skill 重复安装防护** | [#827](https://github.com/netease-youdao/LobsterAI/pull/827) / [#836](https://github.com/netease-youdao/LobsterAI/pull/836) | 解决 Skill 市场管理混乱，#836 更优（内容指纹 + 状态保留） | 二选一合并，#836 设计更完整 |
| **安全环境扫描 + 权限管控** | [#842](https://github.com/netease-youdao/LobsterAI/pull/842) | 9 类系统权限开关 + Skill 风险检测，对标 OS 级沙箱 | 中长期基础设施，可能拆分迭代 |

### 隐含路线图方向
- **MCP 协议深度整合**: 批量导入只是起点，后续需支持 MCP 服务器动态发现、状态监控、版本管理
- **企业合规套件**: 安全扫描 + 权限管控 + 审计日志，形成 B 端售卖的核心差异化
- **渠道适配自动化**: 微信验证码事件提示需建立**渠道 API 变更监控机制**，避免被动救火

---

## 7. 用户反馈摘要

> 提炼自 [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) 及 PR 描述中的用户场景

| 维度 | 具体内容 |
|:---|:---|
| **痛点** | 微信机器人配置流程"走到最后一步卡住"，无错误提示、无替代路径，用户完全迷失 |
| **场景** | 企业运营人员使用 LobsterAI 搭建微信客服/社群机器人，依赖扫码快速配置 |
| **不满** | "最新版微信端扫码后会提示要求在 openclaw 端输入对应的 6 位数字，但是咱们客户端未给出输入界面" —— 平台升级后产品响应滞后 |
| **期望** | 1) 即时适配微信新流程；2) 若渠道变更频繁，提供"兼容性状态"看板或自动检测 |
| **隐性需求** | 跨平台 IM（钉钉/飞书/微信/Discord/Telegram）的统一配置体验，降低渠道切换成本 |

---

## 8. 待处理积压

### ⚠️ 超 36 天未合并的关键 PR（全部 12 条）

| PR | 领域 | 风险/价值 | 建议动作 |
|:---|:---|:---|:---|
| [#826](https://github.com/netease-youdao/LobsterAI/pull/826) | 安全 | URL 协议注入可导致任意代码执行 | **7 日内强制 review** |
| [#828](https://github.com/netease-youdao/LobsterAI/pull/828) | 安全 | 路径遍历读取 SSH 密钥等敏感文件 | **7 日内强制 review** |
| [#842](https://github.com/netease-youdao/LobsterAI/pull/842) | 安全 | 全新安全模块，代码量大需仔细审计 | 安排安全专项 review |
| [#830](https://github.com/netease-youdao/LobsterAI/pull/830) | 性能 | SQLite 优化收益明确，测试覆盖充分 | 快速合流 |
| [#835](https://github.com/netease-youdao/LobsterAI/pull/835) | 功能 | MCP 生态关键能力，无破坏性变更 | 快速合流 |
| [#838](https://github.com/netease-youdao/LobsterAI/pull/838) | 功能 | IM 模型隔离，企业用户高频需求 | 快速合流 |
| [#852](https://github.com/netease-youdao/LobsterAI/pull/852) | 稳定性 | 主进程崩溃，影响所有桌面用户 | **优先合流** |

### 维护者行动建议

1. **建立 PR 老化预警**: 当前 12 条 PR 全部标记 `[stale]`，需配置 bot 自动提醒 + 维护者轮值机制
2. **安全 PR 绿色通道**: #826/#828/#842 涉及已知漏洞，建议绕过常规排期，紧急处理
3. **Issue #1878 即时响应**: 微信配置阻塞为 P0 级故障，需确认修复排期并同步用户

---

*日报生成时间: 2026-05-01*  
*数据来源: GitHub API (Issues/PRs/Commits/Releases)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报 | 2026-05-01

> **项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)  
> **分析日期**: 2026-05-01（覆盖 2026-04-30 活动）

---

## 1. 今日速览

Moltis 今日展现**极高开发活跃度**，24小时内完成 **18 项 PR 合并/关闭**，仅 **3 项待审**，Issue 清理效率突出（6 关 1 开）。项目处于**密集迭代期**：核心团队（penso、gaarf）主导了从基础设施（SIGTERM 信号处理、Docker 优雅关闭）到用户体验（消息操作栏、会话自动命名、剪贴板修复）的全栈推进。值得注意的是，多个长期 PR（如 #33 Gemini 支持、#288 SDK 基础、#201 TUI 引导流程）于今日集中合并，暗示 **v20260430.01 版本为重要功能整合节点**。社区贡献者参与度良好，但待审 PR 包含远程沙盒和 Zen 提供商两大架构级变更，需关注审查进度。

---

## 2. 版本发布

### [v20260430.01](https://github.com/moltis-org/moltis/releases/tag/20260430.01)

| 属性 | 详情 |
|:---|:---|
| **发布日期** | 2026-04-30 |
| **版本性质** | 功能整合版本（非语义化版本号，采用日期标记） |

**核心更新内容**（基于同日合并 PR 推断）：

| 类别 | 功能/修复 | 来源 PR |
|:---|:---|:---|
| **AI 提供商扩展** | 原生 Google Gemini 支持（API Key + OAuth + SSE 流式） | [#33](https://github.com/moltis-org/moltis/pull/33) |
| | DeepInfra 提供商（8 模型静态目录，含 Llama 4、DeepSeek V3/R1、Qwen3 等） | [#934](https://github.com/moltis-org/moltis/pull/934) |
| **开发者体验** | TypeScript/Python/Go/libmoltis SDK 基础 + CI + 文档 | [#288](https://github.com/moltis-org/moltis/pull/288) |
| | 完整 TUI 终端引导流程（模态提供商配置） | [#201](https://github.com/moltis-org/moltis/pull/201) |
| **Web UI 增强** | 助手消息操作栏（复制/重试/分叉） | [#932](https://github.com/moltis-org/moltis/pull/932) |
| | 会话自动标题生成（基于对话内容 LLM 摘要） | [#933](https://github.com/moltis-org/moltis/pull/933) |
| | 剪贴板复制修复（非安全上下文兼容） | [#936](https://github.com/moltis-org/moltis/pull/936) |
| **系统稳定性** | SIGTERM/SIGHUP 优雅关闭（Docker/systemd 兼容） | [#940](https://github.com/moltis-org/moltis/pull/940) |
| | 模型发现机制优化（轻量目录检查替代完整探测） | [#931](https://github.com/moltis-org/moltis/pull/931) |
| **运维工具** | 技能使用遥测（`/insights` 命令 + Web UI） | [#935](https://github.com/moltis-org/moltis/pull/935) |
| | 代码索引自动触发（项目变更时） | [#921](https://github.com/moltis-org/moltis/pull/921) |

**⚠️ 潜在迁移注意事项**：
- **Docker 部署用户**：需确认 `docker stop` 行为变化——现执行优雅关闭（清理浏览器池、mDNS、Tailscale），超时时间可能需调整
- **自托管 HTTP 部署**：`navigator.clipboard` 回退机制已添加，但建议测试非 HTTPS/非 localhost 环境的复制功能
- **本地 LLM 用户**（llama.cpp/vllm）：模型发现机制变更，100B+ 模型不再触发 30 秒超时探测，启动体验改善

---

## 3. 项目进展

### 🔧 基础设施与可靠性（3 项）

| PR | 说明 | 影响 |
|:---|:---|:---|
| [#940](https://github.com/moltis-org/moltis/pull/940) | SIGTERM/SIGHUP 信号处理 + 优雅关闭 | **生产环境关键修复**：解决 Docker/systemd 下强制 kill 导致资源泄漏，区分 SIGINT（立即退出）与 SIGTERM（优雅清理） |
| [#931](https://github.com/moltis-org/moltis/pull/931) | 轻量模型可用性检查替代完整 completion 探测 | **本地大模型用户痛点解决**：100B+ 模型加载不再触发 30 秒超时失败 |
| [#941](https://github.com/moltis-org/moltis/pull/941) | 系统通知容器圆角修复（999px → 12px） | UI 细节打磨，修复多行文本溢出视觉问题 |

### 🎨 Web UI 体验升级（4 项）

| PR | 说明 | 影响 |
|:---|:---|:---|
| [#932](https://github.com/moltis-org/moltis/pull/932) | 助手消息操作栏：复制/重试/分叉 | **核心交互升级**：降低对话回溯成本，"分叉"功能支持非线性探索 |
| [#933](https://github.com/moltis-org/moltis/pull/933) | 会话自动标题生成 | 解决"Untitled Session"混乱问题，提升长会话管理效率 |
| [#936](https://github.com/moltis-org/moltis/pull/936) | 剪贴板复制兼容非安全上下文 | **自托管场景关键修复**：LAN 内 HTTP 部署不再静默失败 |
| [#925](https://github.com/moltis-org/moltis/pull/925) | 移除聊天滚动劫持的 ResizeObserver | 修复 [#922](https://github.com/moltis-org/moltis/issues/922) 回归：用户可自由滚动浏览流式内容 |

### 🤖 AI 提供商生态扩展（2 项）

| PR | 说明 | 影响 |
|:---|:---|:---|
| [#33](https://github.com/moltis-org/moltis/pull/33) | Google Gemini 原生支持（API Key + OAuth + 工具调用） | 补齐主流闭源模型版图，OAuth PKCE 流程支持企业 SSO 场景 |
| [#934](https://github.com/moltis-org/moltis/pull/934) | DeepInfra 提供商 + 沙盒 GPU 透传 | 高性价比开源模型入口，GPU 透传支持本地推理加速 |

### 🛠️ 开发者与运维工具（4 项）

| PR | 说明 | 影响 |
|:---|:---|:---|
| [#288](https://github.com/moltis-org/moltis/pull/288) | 多语言 SDK 基础（TS/Python/Go/libmoltis） | **生态扩张里程碑**：为第三方集成、IDE 插件、自动化脚本铺路 |
| [#201](https://github.com/moltis-org/moltis/pull/201) | TUI 终端引导流程 | 降低新用户上手门槛，无 GUI 服务器场景友好 |
| [#935](https://github.com/moltis-org/moltis/pull/935) | 技能使用遥测 + `/insights` 命令 | 可观测性增强，帮助用户优化技能配置 |
| [#921](https://github.com/moltis-org/moltis/pull/921) | 代码索引自动触发 | 减少手动维护负担，RAG 质量随项目演进自动保持 |

### 💬 交互命令扩展（1 项）

| PR | 说明 | 影响 |
|:---|:---|:---|
| [#926](https://github.com/moltis-org/moltis/pull/926) | 5 个新斜杠命令：`/btw` `/fast` `/insights` `/steer` `/queue` | 工作流精细化：`/btw` 临时旁路查询不污染会话，`/steer` 动态调整模型行为 |

**整体推进评估**：今日合并内容覆盖**可靠性工程**、**用户体验**、**生态扩展**、**开发者工具**四大维度，项目从"功能可用"向"生产就绪"和"生态平台"阶段跃迁明显。

---

## 4. 社区热点

### 讨论最活跃的 Issue

| 排名 | Issue | 评论数 | 热度分析 |
|:---|:---|:---|:---|
| 🥇 | [#922](https://github.com/moltis-org/moltis/issues/922) Chat scrolling isn't working | **3 条** | 滚动劫持回归问题，直接影响核心交互，用户反馈迅速，24小时内即有关闭修复 |
| 🥈 | [#266](https://github.com/moltis-org/moltis/issues/266) Native 9router support | **2 条** | 跨项目生态集成诉求：9router 作为 AI 编码工具通用代理，用户希望 Moltis 原生兼容以降低多提供商配置复杂度 |

**诉求深层分析**：
- **#922 滚动问题**：反映流式生成场景下"自动跟随"与"用户控制"的经典 UX 矛盾。修复方案（[#925](https://github.com/moltis-org/moltis/pull/925)）采用"单次滚动替代持续观察"的轻量模式，值得类似场景参考。
- **#266 9router 支持**：用户希望 Moltis 接入**去中心化的 AI 路由生态**，而非绑定单一提供商。该 Issue 今日关闭但无关联合并 PR，可能为"已解决"（通过 OpenAI 兼容层）或"暂不纳入"——需关注是否真正满足诉求。

### 待审 PR 中的架构级讨论

| PR | 潜在争议点 |
|:---|:---|
| [#942](https://github.com/moltis-org/moltis/pull/942) Remote & multi-backend sandbox | 引入 Vercel/Daytona/Firecracker 三大外部依赖，架构复杂度高；与现有 Docker 沙盒的关系（替代/并存？）需明确 |
| [#944](https://github.com/moltis-org/moltis/pull/944) Zen (opencode.ai) provider | 多协议适配（OpenAI/Anthropic/Google 格式统一代理）与 Moltis 原生提供商抽象的设计契合度 |

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 状态 | Fix PR |
|:---|:---|:---|:---|:---|
| 🔴 **高** | [#939](https://github.com/moltis-org/moltis/issues/939) | **SIGTERM 未处理**：Docker/systemd 环境下强制终止，资源泄漏 | ✅ 已关闭 | [#940](https://github.com/moltis-org/moltis/pull/940) |
| 🔴 **高** | [#919](https://github.com/moltis-org/moltis/issues/919) | **模型发现 30 秒超时**：本地大模型（100B+）加载失败 | ✅ 已关闭 | [#931](https://github.com/moltis-org/moltis/pull/931) |
| 🟡 **中** | [#922](https://github.com/moltis-org/moltis/issues/922) | **聊天滚动失效**：流式输出时无法手动滚动浏览 | ✅ 已关闭 | [#925](https://github.com/moltis-org/moltis/pull/925) |
| 🟡 **中** | [#938](https://github.com/moltis-org/moltis/issues/938) | **系统通知文本溢出**：过度圆角容器导致视觉裁剪 | ✅ 已关闭 | [#941](https://github.com/moltis-org/moltis/pull/941) |
| 🟡 **中** | [#927](https://github.com/moltis-org/moltis/issues/927) | **MCP OAuth 令牌过期无重认证按钮**：集成服务器断连后无法恢复 | ✅ 已关闭 | *未明确关联，可能含于 #926 或独立修复* |
| 🟢 **低** | [#937](https://github.com/moltis-org/moltis/issues/937) | **settings/terminal tmux 错误**：终端配置相关 | ⏳ **开放中** | 暂无 |

**稳定性健康度**：**优秀**。6/7 Issue 当日关闭，唯 [#937](https://github.com/moltis-org/moltis/issues/937) 待处理。生产环境关键问题（信号处理、超时机制）响应迅速。

---

## 6. 功能请求与路线图信号

### 已纳入近期版本（今日合并）

| 需求方向 | 实现 | 信号强度 |
|:---|:---|:---|
| 多语言 SDK 生态 | [#288](https://github.com/moltis-org/moltis/pull/288) | ⭐⭐⭐⭐⭐ 明确平台化战略 |
| 终端无 GUI 部署 | [#201](https://github.com/moltis-org/moltis/pull/201) | ⭐⭐⭐⭐⭐ 服务器/SSH 场景刚需 |
| 会话可观测性 | [#933](https://github.com/moltis-org/moltis/pull/933) + [#935](https://github.com/moltis-org/moltis/pull/935) | ⭐⭐⭐⭐☆ 用户增长后的管理痛点 |
| 沙盒多后端 | [#934](https://github.com/moltis-org/moltis/pull/934) GPU 透传 + [#942](https://github.com/moltis-org/moltis/pull/942) 远程沙盒 | ⭐⭐⭐⭐☆ 云原生部署趋势 |

### 待审 PR 中的潜在路线图

| PR | 功能 | 纳入可能性评估 |
|:---|:---|:---|
| [#944](https://github.com/moltis-org/moltis/pull/944) Zen 多协议提供商 | **高** — 提供商抽象已成熟，OpenCode 为新兴流量入口 |
| [#942](https://github.com/moltis-org/moltis/pull/942) 远程沙盒（Vercel/Daytona/Firecracker） | **中-高** — 架构复杂，但解决 DigitalOcean/Fly.io/Render 等 PaaS 部署痛点，云原生方向明确 |
| [#943](https://github.com/moltis-org/moltis/pull/943) 语音按钮条件显示 | **高** — 小粒度 UX 打磨，与现有配置系统契合 |

### 社区提出的未满足需求

| Issue | 需求 | 当前状态 | 建议 |
|:---|:---|:---|:---|
| [#266](https://github.com/moltis-org/moltis/issues/266) | 9router 原生支持 | 关闭但无明确实现 | 验证 OpenAI 兼容层是否足够；如不足，考虑官方适配器 |

---

## 7. 用户反馈摘要

### 💬 真实痛点（来自 Issue 描述）

| 场景 | 痛点 | 涉及 Issue |
|:---|:---|:---|
| **自托管 HTTP 内网部署** | `navigator.clipboard` 完全不可用，复制按钮静默失败，无错误提示 | [#936](https://github.com/moltis-org/moltis/pull/936) 修复 |
| **本地大模型开发** | 30 秒超时强制失败，被迫绕过模型发现手动配置 | [#919](https://github.com/moltis-org/moltis/issues/919) → [#931](https://github.com/moltis-org/moltis/pull/931) |
| **Docker 生产部署** | `docker stop` 后进程被强制 kill，浏览器实例、mDNS 注册残留 | [#939](https://github.com/moltis-org/moltis/issues/939) → [#940](https://github.com/moltis-org/moltis/pull/940) |
| **长会话管理** | 大量"Untitled Session"无法区分，手动重命名打断流 | [#933](https://github.com/moltis-org/moltis/pull/933) 解决 |
| **流式内容阅读** | 自动滚动强制拉回底部，无法边生成边审阅前文 | [#922](https://github.com/moltis-org/moltis/issues/922) → [#925](https://github.com/moltis-org/moltis/pull/925) |

### 👍 用户满意信号

- **预检清单高完成度**：多个 Issue 显示用户主动搜索、确认最新版本、提供完整上下文，社区成熟度良好
- **快速修复认可**：#922 3 条评论中包含对修复速度的积极反馈

### ⚠️ 不满意/风险信号

- **"undefined" 评论数显示**：PR 列表中 `评论: undefined` 出现 17 次，可能为数据抓取问题或实际零评论——若为后者，表明大吞吐量合并伴随的**代码审查深度存疑**
- **长期 Issue 突然关闭**：#266（2 月创建）、#33（2 月创建）、#288（3 月创建）今日集中关闭，需确认是否为"批量清理"而非真正解决

---

## 8. 待处理积压

### ⏳ 需维护者关注

| 类型 | 项目 | 创建时间 | 阻塞原因 | 建议行动 |
|:---|:---|:---|:---|:---|
| **开放 Bug** | [#937](https://github.com/moltis-org/moltis/issues/937) settings/terminal tmux 错误 | 2026-04-30 | 今日唯一未关闭 Issue，无评论、无 PR 关联 | 分配初步诊断，确认是否为 #201 TUI 合并后的回归 |
| **待审架构 PR** | [#942](https://github.com/moltis-org/moltis/pull/942) 远程沙盒 | 2026-04-30 | 涉及多外部服务集成，设计评审复杂 | 明确与现有 Docker 沙盒的关系文档，设定审查里程碑 |
| **待审提供商 PR** | [#944](https://github.com/moltis-org/moltis/pull/944) Zen 提供商 | 2026-04-30 | 多协议适配可能冲击现有提供商抽象 | 评估是否提取通用"代理型提供商"基类，避免后续重复 |
| **待审 UX PR** | [#943](https://github.com/moltis-org/moltis/pull/943) 语音按钮条件渲染 | 2026-04-30 | 小变更，但涉及 feature flag 与配置系统交互 | 快速审查，低风险可优先合并 |

### 📊 长期趋势观察

- **CI 基础设施**：[#259](https://github.com/moltis-org/moltis/pull/259) Blacksmith runner 迁移已合并，观察

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 | 2026-05-01

> **项目**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（原 QwenPaw）
> **分析周期**: 2026-04-30 24h
> **数据状态**: 高活跃度，安全与稳定性为重点关切

---

## 1. 今日速览

CoPaw 今日呈现**高活跃度运营状态**：24小时内 50 条 Issues 流转（关闭率 66%）、16 条 PR 处理（合并/关闭 87.5%），并紧急发布 v1.1.5.post1 补丁版本。社区焦点集中在**安全漏洞修复**（Windows 路径遍历）、**企业微信/飞书通道稳定性**及**前端性能优化**三大领域。首次贡献者参与度显著提升（3 个 first-time-contributor PR），项目治理健康度良好，但长期对话性能与 Windows 客户端体验仍为待解之痛。

---

## 2. 版本发布

### [v1.1.5.post1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v1.1.5.post1) — 安全补丁 + 飞书交互升级

| 维度 | 详情 |
|:---|:---|
| **发布性质** | 紧急补丁版本（post-release） |
| **核心变更** | ① 版本号同步更新；② 飞书通道引入 `FeishuCardHandler`，工具审批从文本命令升级为**交互式卡片按钮** |
| **关联 PR** | [#3970](https://github.com/agentscope-ai/QwenPaw/pull/3970) `chore(version)`, [#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941) `feat(feishu)` |
| **破坏性变更** | 无明确破坏性变更；但飞书工具审批流程变更，需确认 `card.action.trigger` 事件订阅已配置 |
| **迁移注意** | 飞书用户需检查应用事件订阅是否包含 `card.action.trigger`，否则审批按钮将静默失败（[#3982](https://github.com/agentscope-ai/QwenPaw/pull/3982) 已追加文档提示） |

> **背景**: 该版本紧随 [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) Windows 任意文件遍历漏洞报告后发布，安全响应速度值得肯定。

---

## 3. 项目进展

### 今日合并/关闭的关键 PR（14 条）

| 类别 | PR | 作者 | 进展价值 |
|:---|:---|:---|:---|
| **安全** | [#3973](https://github.com/agentscope-ai/QwenPaw/pull/3973) `fix(app): prevent path traversal by rejecting absolute static file paths` | @zhijianma | **阻断高危漏洞**：修复 Windows 服务器任意文件遍历，直接响应 [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) |
| **通道稳定性** | [#3978](https://github.com/agentscope-ai/QwenPaw/pull/3978) `fix(wecom): cross loop runtime error` | @celestialhorse51D | 修复企业微信双事件循环冲突，根治 `RuntimeError: Future attached to a different loop` |
| | [#3963](https://github.com/agentscope-ai/QwenPaw/pull/3963) `fix(WeCom): avoid double reconnect race and cross-loop disconnect` | @hongxicheng | 消除重连竞态，企业微信心跳/断连逻辑重构 |
| | [#3950](https://github.com/agentscope-ai/QwenPaw/pull/3950) `fix(WeCom): keep placeholder stream alive` | @hongxicheng | 解决长任务时 "Thinking..." 卡住问题 |
| | [#3948](https://github.com/agentscope-ai/QwenPaw/pull/3948) `feat(WeCom): add share_session_in_group toggle` | @hongxicheng | 新增群聊会话隔离/共享配置，提升多用户场景可控性 |
| **前端体验** | [#3981](https://github.com/agentscope-ai/QwenPaw/pull/3981) `fix(chat): migrate deprecated antd v5 APIs` | @bowenliang123 | 清理 5/11 控制台警告，技术债务偿还 |
| | [#3960](https://github.com/agentscope-ai/QwenPaw/pull/3960) `fix(chat): fix CodeMirror line wrapping` | @bowenliang123 | 工具调用块长行溢出修复 |
| **会话持久化** | [#3958](https://github.com/agentscope-ai/QwenPaw/pull/3958) `fix(console): restore chat session when switching between agents` | @zhenai1314521 ⭐首次贡献 | 解决 Agent 切换会话丢失 |
| | [#3959](https://github.com/agentscope-ai/QwenPaw/pull/3959) `fix(console): keep Chat mounted when navigating` | @zhenai1314521 ⭐首次贡献 | 页面导航不卸载 Chat，保留运行中任务 |
| **工作流优化** | [#3954](https://github.com/agentscope-ai/QwenPaw/pull/3954) `fix: skip BOOTSTRAP.md for initialized workspaces` | @cliffffffffff ⭐首次贡献 | 避免重复初始化覆盖用户文件 |
| **飞书生态** | [#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941) `feat(feishu): introduce FeishuCardHandler` | @hongxicheng | 工具审批交互范式升级（文本→卡片） |
| | [#3982](https://github.com/agentscope-ai/QwenPaw/pull/3982) `feat(feishu): hint docs link on approval card` | @hongxicheng | 补充文档引导，降低配置失败率 |

**整体推进评估**: 今日合并代码聚焦 **安全加固**（1 处高危漏洞闭环）、**企业通道可靠性**（4 处微信/企微修复）、**前端工程化**（2 处体验优化），并首次实现**会话状态持久化**（社区长期诉求）。项目稳定性基线显著提升。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 状态 | 核心诉求 |
|:---|:---|:---:|:---|:---|
| 🔥1 | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) Windows 服务器**任意文件遍历漏洞** | 12 | ✅ CLOSED | **安全红线**：v1.1.5 存在路径穿越，攻击者可读取任意文件；社区高度关注企业部署安全 |
| 🔥2 | [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) Debian 12 保存模型设置后页面冻结 | 10 | ✅ CLOSED | **权限与稳定性**：root 用户正常、普通用户崩溃，指向文件权限/资源访问缺陷 |
| 🔥3 | [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757) 企业微信频道频繁断开需重新保存 | 7 | ✅ CLOSED | **通道可靠性**：心跳配置无效，配置状态丢失，企业用户生产环境痛点 |
| 4 | [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) 超200轮对话后页面滚动卡顿 | 6 | 🔴 OPEN | **长会话性能**：工程级代码迭代场景，前端渲染瓶颈，需方法论或组件优化 |
| 5 | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) Agent workspace 身份混淆：接收其他 Agent 消息后错误切换 | 5 | 🔴 OPEN | **架构缺陷**：多 Agent 协作时身份识别逻辑错误，严重影响 A2A 场景 |

**诉求分析**: 企业级部署稳定性（通道断开、权限问题）与**长时复杂任务支持**（性能、会话管理）构成社区两大核心焦虑。安全事件响应虽快，但前端性能债务积累明显。

---

## 5. Bug 与稳定性

### 按严重程度排列

| 严重级别 | Issue | 描述 | Fix PR | 状态 |
|:---|:---|:---|:---|:---|
| 🔴 **Critical** | [#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) | Windows 任意文件遍历漏洞（已利用截图证实） | [#3973](https://github.com/agentscope-ai/QwenPaw/pull/3973) | ✅ 已修复于 v1.1.5.post1 |
| 🔴 **Critical** | [#3957](https://github.com/agentscope-ai/QwenPaw/issues/3957) | Agent workspace 身份混淆：主控 Agent 接收消息后被切换为其他 Agent 身份 | 无 | 🔴 **待修复**，影响 A2A 核心场景 |
| 🟡 **High** | [#3976](https://github.com/agentscope-ai/QwenPaw/issues/3976) | 会话空闲清理机制**误杀运行中任务**：600秒超时强制取消 AI 响应 | 无 | 🔴 **待修复**，长任务必现 |
| 🟡 **High** | [#3971](https://github.com/agentscope-ai/QwenPaw/issues/3971) | v1.1.4 Windows exe **首次运行白屏**（7/7 机器复现） | 无 | ✅ 已关闭，需确认 v1.1.5.post1 是否根治 |
| 🟡 **High** | [#3969](https://github.com/agentscope-ai/QwenPaw/issues/3969) | `FunctionCallOutput` validation error (`call_id` is None) + `loop_config.json` 损坏 | 无 | 🔴 **待修复**，Windows 平台 |
| 🟡 **High** | [#3980](https://github.com/agentscope-ai/QwenPaw/issues/3980) | "Running Config" 设置页返回 `Not Found` (API 端点缺失) | 无 | 🔴 **待修复**，v1.1.5 回归 |
| 🟢 **Medium** | [#3977](https://github.com/agentscope-ai/QwenPaw/issues/3977) | 对话上下文记忆管理缺失，`memory_search` 报错 `'list' object has no attribute 'get'` | 无 | 🔴 **待修复** |
| 🟢 **Medium** | [#3861](https://github.com/agentscope-ai/QwenPaw/issues/3861) | Console 页面对话多次中断 | 无 | 🔴 **待修复** |
| 🟢 **Medium** | [#3965](https://github.com/agentscope-ai/QwenPaw/issues/3965) | 通道消息对话窗口未显示输入 | 无 | ✅ 已关闭 |

**稳定性健康度**: 安全漏洞响应 **A+**，但运行时长任务可靠性（#3976）、多 Agent 身份隔离（#3957）、配置持久化（#3980）构成**系统性风险三角**，需优先排期。

---

## 6. 功能请求与路线图信号

| Issue/PR | 需求内容 | 可行性信号 | 纳入下一版本概率 |
|:---|:---|:---|:---:|
| [#3972](https://github.com/agentscope-ai/QwenPaw/issues/3972) `/ralph-loop` 魔法命令：自引用任务执行循环 | 参考 oh-my-openagent，实现自动持续迭代至完成 | 概念明确，社区有先例 | ⭐⭐⭐⭐ 高 |
| [#3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) 引入 **Hermes 理念**实现智能体自动进化 | 长期自主优化、自我改进架构 | 架构级变更，需 RFC 讨论 | ⭐⭐ 低（长期） |
| [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967) **核心配置区与用户工作区分离** | 防止误删关键文件，降低使用门槛 | 用户体验痛点明确，实现成本中等 | ⭐⭐⭐⭐ 高 |
| [#3966](https://github.com/agentscope-ai/QwenPaw/issues/3966) 扩展文件预览类型（docx/pdf 等） | Agent 生成文件无法直接预览 | 前端能力扩展，有明确场景 | ⭐⭐⭐ 中 |
| [#3979](https://github.com/agentscope-ai/QwenPaw/issues/3979) Windows 客户端关闭后**后台驻留系统托盘** | 当前关闭即停止服务，不符合服务器预期 | 产品定位问题（桌面端 vs 服务端） | ⭐⭐⭐ 中 |
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) ⭐ **支持 GitHub Copilot model provider** | 首次贡献者提交，拓展模型生态 | PR 已 Open，Under Review | ⭐⭐⭐⭐ 高（若 review 通过） |

**路线图信号**: 社区对 **Agent 自主性**（循环执行、自动进化）和 **企业级易用性**（工作区隔离、后台驻留）的诉求形成明确拉力，建议维护者在 v1.2.0 路线图中回应。

---

## 7. 用户反馈摘要

### 真实痛点

| 场景 | 来源 Issue | 用户原声提炼 |
|:---|:---|:---|
| **长时工程迭代** | [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) | *"进行项目/工程级别的代码迭代，从零构建项目 V1/V2，保持上下文不开新窗口，但滚动变得特别困难"* —— 前端性能瓶颈阻塞深度使用 |
| **企业微信生产运维** | [#2757](https://github.com/agentscope-ai/QwenPaw/issues/2757), [#3937](https://github.com/agentscope-ai/QwenPaw/issues/3937) | *"经常断开，重新保存一下又可以了"* —— 通道状态脆弱，运维成本高 |
| **权限与部署** | [#3853](https://github.com/agentscope-ai/QwenPaw/issues/3853) | *"root 用户正常，普通用户页面冻结"* —— 企业安全合规与易用性冲突 |
| **新手误操作风险** | [#3967](https://github.com/agentscope-ai/QwenPaw/issues/3967) | *"清理文档时难以区分哪些不能删除，很大概率会误删除导致 qwenpaw 不能用"* —— 工作区设计未区分系统/用户边界 |
| **历史消息干扰** | [#3975](https://github.com/agentscope-ai/QwenPaw/issues/3975) | *"按↑键查看历史时显示系统内部指令，影响用户体验"* —— 调试信息泄露至用户界面 |

### 满意点
- 安全漏洞响应迅速（[#3955](https://github.com/agentscope-ai/QwenPaw/issues/3955) 24h 内闭环）
- 飞书交互升级获认可（[#3941](https://github.com/agentscope-ai/QwenPaw/pull/3941)）
- 首次贡献者友好（3 个 first-time-contributor PR 今日合并）

---

## 8. 待处理积压

### 需维护者重点关注

| Issue/PR | 创建时间 | 积压天数 | 风险说明 |
|:---|:---|:---:|:---|
| [#3350](https://github.com/agentscope-ai/QwenPaw/issues/3350) 超200轮对话页面卡顿 | 2026-04-14 | **16天** | 长会话性能问题，有明确复现场景，影响深度用户留存 |
| [#3516](https://github.com/agentscope-ai/QwenPaw/issues/3516) Hermes 理念自动进化 | 2026-04-17 | **13天** | 架构级讨论，需维护者明确技术立场 |
| [#3146](https://github.com/agentscope-ai/QwenPaw/issues/3146) 对话界面宽屏/表格展示优化 | 2026-04-09 | **21天** | 前端体验债务，已有关闭记录但未根治 |
| [#2890](https://github.com/agentscope-ai/QwenPaw/issues/2890) Chat 页面性能优化（10+ 工具调用卡顿） | 2026-04-03 | **27天** | 与 #3350 同源，卡片渲染性能瓶颈 |
| [#3846](https://github.com/agentscope-ai/QwenPaw/pull/3846) GitHub Copilot 模型支持 | 2026-04-26 | 4天 | **PR 待 Review**，拓展模型生态的战略价值高 |

**建议行动**: 
1. **立即**: 指派 #3957（身份混淆）、#3976（任务误杀）、#3980（API 404）至下一补丁版本
2. **本周**: 对 #3350/#2890 启动前端性能专项，或提供官方方法论指导（如"何时开新窗口"）
3. **本月**: 就 #3516 Hermes 理念发布维护者回应，引导社区预期

---

*本日报基于 GitHub 公开数据生成，链接指向 agentscope-ai/QwenPaw 仓库。项目品牌观察：仓库名仍显示 QwenPaw，但文档与社区已逐步使用 CoPaw，建议统一品牌标识以减少用户混淆。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 | 2026-05-01

> **项目**: zeroclaw-labs/zeroclaw | **日期**: 2026-04-30 数据 | **分析师**: AI 开源项目分析师

---

## 1. 今日速览

ZeroClaw 今日呈现**极高社区活跃度**：24小时内 Issues 与 PR 各更新 50 条，形成 49:1 的开放/关闭比，显示社区参与热情高涨但维护吞吐存在压力。PR 队列中 38 条待合并，仅 12 条完成闭环，合并率 24% 提示 review 带宽瓶颈。核心贡献者 singlerider 单日输出 7 条 PR，主导网关 UX、配置系统、安全加固三大方向。无新版本发布，项目处于密集开发期而非稳定发布节奏。

---

## 2. 版本发布

**无新版本发布**

---

## 3. 项目进展

今日 **12 条 PR 已合并/关闭**，从数据可见以下关键推进方向：

| 方向 | 代表 PR | 进展说明 |
|:---|:---|:---|
| **网关 Web UX 闭环** | [#6220](https://github.com/zeroclaw-labs/zeroclaw/pull/6220), [#6217](https://github.com/zeroclaw-labs/zeroclaw/pull/6217) | 聊天输入锁定/停止按钮、内存记录跳转会话，补齐 #5999 追踪的 UX 缺口 |
| **跨子系统状态共享** | [#6221](https://github.com/zeroclaw-labs/zeroclaw/pull/6221) | `canvas` 工具从网关到频道代理的跨域修复，解决"Web UI 可用、Telegram/Discord 静默失败"的架构级不一致 |
| **配置系统现代化** | [#6179](https://github.com/zeroclaw-labs/zeroclaw/pull/6179) | 超大 PR（XL）引入 `/api/config/*` CRUD 端点，实现 Web 仪表板、CLI、第三方工具的统一配置驱动，为 schema v3 迁移奠定基础设施 |
| **安全加固** | [#6214](https://github.com/zeroclaw-labs/zeroclaw/pull/6214) | 激活 #5168 剥离的 HMAC 工具收据，补全工具调用链的可审计性 |
| **国际化扩展** | [#6170](https://github.com/zeroclaw-labs/zeroclaw/pull/6170), [#6242](https://github.com/zeroclaw-labs/zeroclaw/pull/6242) | 法/日/西语同步刷新，新增简体中文（zh-CN）文档与微信 CLI 字符串 |

**整体评估**：项目向"生产级可运维"迈出实质性步伐——配置 API 化、跨子系统一致性、安全审计三大基础设施短板得到集中补齐。

---

## 4. 社区热点

### 讨论最活跃的 Issues（按评论数排序）

| 排名 | Issue | 评论 | 核心诉求 | 链接 |
|:---|:---|:---:|:---|:---|
| 1 | **#6123** `default_model` 全新安装崩溃 | 15 | **新用户首体验阻断**：LXC 容器 + 远程 Ollama 场景下，默认模型配置缺失导致 `zeroclaw agent` 直接报错退出。用户 rgnyldz 的完整日志复现引发社区共鸣，反映 onboarding 的鲁棒性缺口 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| 2 | **#5890** 多智能体 UX 流程 RFC | 7 | **架构级设计共识**：7 天讨论期已结束，等待核心团队 2/3 多数投票。singlerider 提出的多智能体协作流程设计，涉及会话状态机、权限边界、上下文继承等深层问题，是项目从"单智能体工具"向"多智能体平台"跃迁的关键节点 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) |
| 3 | **#5947** schema v3 批量迁移 | 6 | **技术债务集中清偿**：作为"合并阻塞器"（Merge blocker），要求所有破坏性配置字段变更一次性协调落地，避免部分合并导致的配置碎片化。体现项目对向后兼容的审慎态度 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) |
| 4 | **#5862** 智能体不知自身支持 cron | 6 | **工具发现性缺陷**：用户明确请求定时任务，智能体却声明无此能力，暴露系统提示/工具描述与运行时能力注册的脱节 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) |
| 5 | **#6153** Matrix 语音转录格式失败 | 6 | **跨客户端兼容性**：Element Web/Android 的音频格式 `.`（空扩展名）导致转录流水线崩溃，反映媒体管道对边缘格式的防御性不足 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) |

**诉求分析**：社区焦点从"功能有无"转向"体验好坏"——新用户 onboarding 流畅度、多智能体架构前瞻性、配置迁移的工程纪律成为三大核心关切。

---

## 5. Bug 与稳定性

### P1（工作流阻断）| 需立即响应

| Issue | 描述 | 状态 | Fix PR | 链接 |
|:---|:---|:---|:---|:---|
| **#6123** | 全新安装 `default_model` 缺失崩溃 | 🔴 开放，15 评论，高热度 | 无明确 PR | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6123) |
| **#6210** | SkillForge 自动集成器输出非 schema 字段 | 🔴 开放，blocked 标签 | 无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6210) |
| **#6036** | Termux/Android 无限工具调用循环 | 🔴 开放，需作者补充复现 | 无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6036) |
| **#6237** | Slack `bot_token` 强制配置文件存储（与 #5183 复发） | 🟡 开放，1 评论，疑似设计争议 | 无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6237) |
| **#6224** | WhatsApp Web 定时任务调度缺失 | 🔴 开放，用户已提供补丁思路 | 无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6224) |
| **#6223** | WhatsApp Web `web_fetch` 工具不可用 | 🔴 开放，用户已定位修复点 | 无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6223) |
| **#6207** | Web 仪表板绕过 ApprovalManager（安全漏洞） | 🔴 开放，需维护者评审 | 无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6207) |
| **#6206** | 自定义 OpenAI 兼容提供商 onboarding 失败 | 🔴 开放，配置验证错误 | 无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6206) |
| **#6120** | OpenAI Codex 选择后提示 OpenAI API key | 🔴 开放，标签错位 | 无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6120) |

### P2（行为降级）

| Issue | 描述 | Fix PR | 链接 |
|:---|:---|:---|:---|
| **#6153** | Matrix 语音转录格式失败 | 无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6153) |
| **#6225** | Telegram 智能截断破坏 Markdown 结构 | 无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6225) |
| **#6229** | Telegram `mention_only=true` 对媒体消息失效 | 无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6229) |
| **#6227** | 命名实例 `status` 硬编码 `zeroclaw.service` | 无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6227) |
| **#6233** | DeepSeek `reasoning_content` 多轮对话丢失 | 无 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6233) |

### 已关闭

| Issue | 说明 | 链接 |
|:---|:---|:---|
| **#3468** | matrix-sdk 0.16 在 Rust 1.94+ 递归深度溢出 | 编译阻塞问题已解决 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/3468) |

**稳定性评估**：P1 级 Bug 密度高（9 条开放），且多集中于 onboarding 与频道集成关键路径，对新用户转化构成实质性威胁。WhatsApp 双 Bug（#6223/#6224）反映该频道维护状态薄弱，用户甚至需要自行 patch 才能使用。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 成熟度 | 纳入可能性 | 链接 |
|:---|:---|:---|:---|:---|
| **多智能体 UX 流程** | #5890 (RFC) | 讨论期结束，待投票 | ⭐⭐⭐⭐⭐ 高，架构级方向 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5890) |
| **schema v3 配置迁移** | #5947 | 有明确阻塞清单，in-progress | ⭐⭐⭐⭐⭐ 高，基础设施 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5947) |
| **Telegram 智能截断** | #6225 | 问题清晰，方案待细化 | ⭐⭐⭐⭐☆ 中高，体验优化 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6225) |
| **浏览器 head/headless 配置** | #6241 | 配置补全，范围明确 | ⭐⭐⭐⭐☆ 中高，#6241 同日提出 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6241) |
| **Slack 线程上下文回填** | #6055 | in-progress | ⭐⭐⭐⭐☆ 中，依赖 #5992 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) |
| **Groq 按模型工具支持** | #5932 | 有 #5848 背景，方案待 RFC | ⭐⭐⭐☆☆ 中，provider 适配 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5932) |
| **官方文档网站** | #5994 | 需求宏大，需 maintainer 评审 | ⭐⭐⭐☆☆ 中，长期工程 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/5994) |
| **博客 RSS/可访问性** | #6208 | good first issue | ⭐⭐⭐⭐☆ 高，低实现成本 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6208) |
| **Node.js LTS 锁定** | #6211 | in-progress，.nvmrc 方案 | ⭐⭐⭐⭐⭐ 高，CI 基础设施 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6211) |

**路线图信号**：配置系统现代化（schema v3 + CRUD API）与网关体验打磨是当前双引擎；多智能体架构是下一个战略高地，但需核心团队投票解锁。

---

## 7. 用户反馈摘要

### 痛点（按频率）

| 主题 | 典型反馈 | 来源 |
|:---|:---|:---|
| **Onboarding 脆弱** | "fresh install...get this error" — 首次运行即崩溃 | #6123, #6206, #6120 |
| **配置与凭证管理混乱** | "bot_token must be stored in config...crashes with missing field" — 环境变量与配置文件优先级争议 | #6237 |
| **频道能力碎片化** | "whatsapp is missing in delivery channels" / "web_fetch...can't use" — 不同频道工具集不一致 | #6224, #6223 |
| **智能体自我认知缺失** | "zeroclaw says it does not have the tools to do this thing" — 工具发现与系统提示脱节 | #5862 |
| **移动端/边缘场景粗糙** | "infinite loop...repeats identical message without terminating" — Android 运行时稳定性 | #6036 |

### 满意点

- **社区响应速度**：用户 BaroDevelopment 同日提出 WhatsApp 双 Bug 并自行定位修复点，体现社区协作深度
- **架构可扩展性**：Memory 系统的 `session_id` 设计为 Web UI 跳转提供基础（#6217 实现）
- **国际化推进**：zh-CN 覆盖文档与微信 CLI，显示对中文用户群的重视

---

## 8. 待处理积压

### 需维护者优先关注

| Issue/PR | 阻塞时长 | 风险 | 行动建议 |
|:---|:---|:---|:---|
| **#5890** 多智能体 RFC 投票 | 7 天讨论期已结束 | 架构决策悬置，影响下游设计 | 核心团队启动 §8.2 投票流程 |
| **#5947** schema v3 合并阻塞器 | 10 天 | 批量 PR 无法 landing，技术债务累积 | 维护者逐项核对 checklist，释放合并窗口 |
| **#6210** SkillForge schema 违规 | 1 天，但 blocked 标签 | #6128 的 follow-up，阻塞技能生态 | 指派 #6128 作者 johnrspeer83-png 跟进 |
| **#6036** Android 无限循环 | 7 天，needs-author-action | 移动端核心场景不可用 | 维护者主动索要复现环境，避免作者流失 |
| **#6207** 安全漏洞（ApprovalManager 绕过） | 1 天，needs-maintainer-review | 监督模式形同虚设，合规风险 | 安全相关 maintainer 48h 内响应 |
| **#5994** 官方文档网站 | 8 天，needs-maintainer-review | 新用户 onboarding 成本持续高企 | 评估是否纳入 Q2 OKR 或拆分 milestone |

---

## 附录：数据健康度指标

| 指标 | 数值 | 评估 |
|:---|:---|:---|
| 日 Issues 更新量 | 50 | 🔥 极高活跃 |
| Issues 开放/关闭比 | 49:1 | ⚠️ 关闭率极低，review 瓶颈 |
| PR 合并率 | 24% (12/50) | ⚠️ 低于健康阈值（建议 >40%） |
| 核心贡献者集中度 | singlerider 7 PR/日 | ⚠️ 单点依赖风险 |
| P1 Bug 开放数 | 9 | 🔴 需立即 triage |
| 无 stale 标签保护议题 | 5 条 | ✅ 关键议题免受自动清理 |

---

> **明日关注**：#6179（配置 CRUD API）合并进展、#5890 投票结果、WhatsApp 双 Bug 是否有社区 PR 提交。

</details>

---
*本日报由 [agents-radar](https://github.com/duanyytop/agents-radar) 自动生成。*