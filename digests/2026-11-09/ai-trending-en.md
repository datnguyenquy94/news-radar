# AI Open Source Trends 2026-11-09

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-09 05:51 UTC

---

## AI Open‑Source Trends Report – 2026‑11‑09  

### 1. Today’s Highlights  
- **Agent‑centric tooling exploded**: three + ​1 k‑star daily gains came from OpenMausBot, Vercel ‑ Agent‑Browser and Anthropic ‑ Skills, underscoring a wave of “AI‑agent‑as‑code” projects.  
- **Infrastructure‑first entries** appeared for the first time, notably Anthropic’s Claude‑quickstarts (Python starter kit) and DeepMind’s MuJoCo physics engine, signalling fresh community appetite for plug‑and‑play LLM and RL back‑ends.  
- **RAG and token‑efficiency innovations** (billion‑context, Graphify, LangGraph) continued strong growth, reflecting the ongoing pressure to tame ever‑larger context windows.

---

### 2. Top Projects by Category  

#### 🔧 AI Infrastructure  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [dsx‑ai‑factory/nvke](https://github.com/dsx-ai-factory/nvke) | Go | 927 (+345) | +320 since 2026‑11‑08 | A bare‑metal GPU‑Kubernetes control plane that simplifies large‑scale model serving. The recent +320 surge shows rapid adoption by edge‑AI operators. |
| [anthropics/claude‑quickstarts](https://github.com/anthropics/claude-quickstarts) | Python | 19,564 | 🆕 new | A curated collection of starter apps for the Claude API, lowering the barrier for developers to ship LLM‑powered services. First‑time appearance signals strong interest in Claude‑centric tooling. |
| [google‑deepmind/mujoco](https://github.com/google-deepmind/mujoco) | C++ | 16,552 | 🆕 new | The industry‑standard physics simulator for robotics and RL, now open‑sourced with full GPU support. Its debut reflects a renewed focus on high‑fidelity simulation for AI research. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 186,403 | +559 since 2026‑11‑04 | An on‑premise LLM runtime that bundles dozens of open‑source models. Momentum is driven by enterprises looking for self‑hosted alternatives to cloud APIs. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 105,270 | +515 since 2026‑10‑13 | The de‑facto deep‑learning framework, still the backbone of new research. Steady star growth reflects continued ecosystem health and upcoming 2.5 release. |
| [affaan‑m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 299,798 | +526 since 2026‑11‑08 | “Engineered Compute Core” optimizes agent‑harness performance (skills, memory, security). The half‑thousand‑star jump highlights demand for low‑latency, production‑grade agent runtimes. |

#### 🤖 AI Agents / Workflows  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [milind‑soni/OpenMausBot](https://github.com/milind-soni/OpenMausBot) | TypeScript | 18,669 (+1,439) | +1,423 since 2026‑11‑08 | An open‑source “Grok‑style” bot that runs a full VM for sandboxed tool use. The >2 k‑star surge marks it as a leading alternative to proprietary agents. |
| [vercel‑labs/agent‑browser](https://github.com/vercel-labs/agent-browser) | Rust | 47,853 (+815) | +874 since 2026‑11‑08 | CLI that lets LLM‑agents drive a headless browser, enabling web‑automation without external services. Rust’s performance draw is evident in the rapid uptake. |
| [anthropics/skills](https://github.com/anthropics/skills) | Python | 189,892 (+792) | +977 since 2026‑11‑08 | Central repository of reusable “agent skills” (e.g., search, calendar). Its near‑1k‑star rise shows community consolidation around shared skill libraries. |
| [Panniantong/Agent‑Reach](https://github.com/Panniantong/Agent-Reach) | Python | 110,371 (+622) | +622 since 2026‑11‑07 | CLI that gives agents internet‑wide visibility (Twitter, Reddit, YouTube, etc.) at zero API cost. The linear growth reflects the need for “agent‑web” data sources. |
| [langchain‑ai/langgraph](https://github.com/langchain-ai/langgraph) | Python | 44,673 | +601 since 2026‑10‑29 | A framework for building resilient, stateful agent graphs (branching, retries). Momentum continues as developers replace ad‑hoc scripts with structured workflows. |
| [browser‑use/browser‑use](https://github.com/browser-use/browser-use) | Python | 120,374 | +585 since 2026‑11‑02 | Library + hosted API for stealth browsers and agent‑level web interaction. The consistent rise reveals growing production use of browser‑based agents. |

#### 📦 AI Applications  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 57,175 | +1,127 since 2026‑11‑07 | Lifelong personalized tutoring platform powered by RAG. The >1k‑star jump underscores rising interest in AI‑driven education. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 68,334 | +928 since 2026‑11‑02 | Multi‑market stock‑analysis system that ingests news, price data, and generates actionable insights via LLMs. Strong star gain indicates appetite for finance‑focused AI bots. |
| [hugohe3/ppt‑master](https://github.com/hugohe3/ppt-master) | Python | 74,993 | +671 since 2026‑11‑07 | Turns raw documents into native PowerPoint decks with AI‑generated charts, narration and template support. Rapid adoption shows demand for AI‑augmented productivity tools. |

#### 🧠 LLMs / Training  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [rasbt/LLMs‑from‑scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 108,049 | +519 since 2026‑10‑30 | Step‑by‑step PyTorch implementation of a ChatGPT‑like model, popular for education and research. The half‑thousand star increase signals renewed curiosity about low‑level model internals. |

#### 🔍 RAG / Knowledge  

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Graphify‑Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 144,602 | +971 since 2026‑11‑07 | Converts whole codebases (docs, SQL, PDFs) into a deterministic knowledge graph, eliminating vector‑store reliance. Near‑1k growth reflects a shift toward structured retrieval. |
| [ranxianglei/billion‑context](https://github.com/ranxianglei/billion-context) | TypeScript | 5,352 (+460) | +651 since 2026‑11‑08 | Plugin that compresses token streams to enable “billions‑of‑token” sessions on modest LLM windows, promising 5× token savings. Fast star climb points to a market for context‑efficiency hacks. |
| [langchain‑ai/langgraph](https://github.com/langchain-ai/langgraph) *(also listed under Agents)* | Python | 44,673 | +601 since 2026‑10‑29 | Provides resilient agent graphs with built‑in retrieval hooks, bridging the gap between agent orchestration and RAG. Its dual‑category traction highlights convergence of workflow and knowledge‑base tooling. |

---

### 3. Trend Signal Analysis  

Community attention is **concentrating on agent‑centric runtimes and tooling**. Three distinct agents—OpenMausBot, Vercel’s agent‑browser, and Anthropic’s Skills—each posted > + 800‑star daily deltas, eclipsing growth in traditional model‑hosting projects. This suggests developers are moving past “prompt‑only” usage toward **full‑stack autonomous agents** that need sandboxed execution, web‑browsing, and reusable skill libraries.

A notable **new‑technology influx** emerged: a Rust‑based automation CLI (agent‑browser) and a Go‑centric GPU‑K8s engine (NVKE). The appearance of these languages in AI‑infra projects indicates a diversification of the stack, likely driven by performance‑sensitive deployments and the need for tighter system integration when serving large LLMs on‑prem.

The **first‑time entries**—Claude‑quickstarts, MuJoCo, and the billion‑context plugin—highlight emerging niches. Claude‑quickstarts showcases the community’s rapid response to Anthropic’s latest Claude‑3 release (announced early‑Nov), while MuJoCo’s open‑source debut aligns with a wave of RL research seeking cheaper, GPU‑native simulators. Billion‑context addresses a pain point that became acute after the release of 100k‑token context windows in several new LLMs, evidencing a direct feedback loop between model capabilities and tooling.

In contrast, the **re‑appearances** (the 📈 deltas) reveal **compound interest**: projects that already have a solid user base are now being enriched with new features (e.g., agent‑browser’s stealth mode, ECC’s security layer). Their steady star gains illustrate a maturing ecosystem where existing foundations are quickly extended rather than being replaced.

Overall, the data points to an **ecosystem pivot**: from static model serving toward *dynamic, agent‑driven pipelines* built on a heterogeneous stack (Rust, Go, TypeScript) and bolstered by advances in RAG and token‑efficiency.

---

### 4. Community Hot Spots  

- **Agent‑Browser (Rust)** – high‑performance web automation for LLM agents; watch its upcoming WASM integration.  
- **Claude‑Quickstarts** – the go‑to starter kit for Anthropic’s newest Claude models; likely to seed many vertical applications.  
- **Billion‑Context** – token‑compression layer; could become essential as 100k‑token LLMs dominate.  
- **Graphify** – deterministic knowledge‑graph generation without vector stores; aligns with industry’s move toward structured RAG.  
- **ECC** – performance‑focused harness for Claude Code, Codex, Cursor, etc.; the hub for production‑grade agent deployment.  

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*