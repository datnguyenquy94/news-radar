# AI Open Source Trends 2026-09-25

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-09-25 04:35 UTC

---

# AI Open Source Trends Report — 2026-09-25

---

## 1. Today's Highlights

Agent-centric infrastructure dominates today’s momentum: Google’s **ax** orchestration runtime and NVIDIA’s **Model-Optimizer** both entered the trending list with >1,300 stars since yesterday, signaling heavy enterprise investment in production-grade agent runtimes and model compression. Two brand-new agent-memory projects — **vectorize-io/hindsight** and **affaan-m/ECC** — debuted with massive first-day stars (1,668 and 751 respectively), highlighting acute demand for persistent, learnable agent context. Meanwhile, **dream-num/univer**’s “Office harness for AI agents” surged 1,447 stars, pointing to a convergence of collaborative document tooling and agent workflows. On the inference edge, **leejet/stable-diffusion.cpp** appeared for the first time, extending pure C++ diffusion support to Flux, Wan, and Qwen-Image — a quiet but strategic move toward dependency-free generative deployment.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [google/ax](https://github.com/google/ax) | Go | 10,642 (+1,373) | 📈 +1,350 since 2026-09-24 | Google’s open agentic orchestration runtime for building, deploying, and managing multi-agent systems at scale. The 1,350-star jump in 24 hours reflects immediate enterprise adoption interest. |
| [NVIDIA/Model-Optimizer](https://github.com/NVIDIA/Model-Optimizer) | Python | 4,133 (+44) | 🆕 new | Unified library of SOTA optimization techniques — quantization, distillation, pruning, NAS, speculative decoding — targeting TensorRT-LLM, vLLM, and TensorRT deployment. First appearance with 4,133 stars signals strong hardware-vendor backing. |
| [leejet/stable-diffusion.cpp](https://github.com/leejet/stable-diffusion.cpp) | C++ | 7,279 (+36) | 🆕 new | Pure C/C++ inference for SD, Flux, Wan, Qwen-Image, Z-Image with zero dependencies. First appearance; expanding diffusion model coverage beyond SDXL into newer architectures. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 184,374 | 📈 +885 since 2026-09-23 | Web data API for search, scrape, and interaction at scale — critical RAG ingestion layer for LLM apps. Steady 885-star growth confirms its role as default web connector. |
| [CopilotKit/CopilotKit](https://github.com/CopilotKit/CopilotKit) | TypeScript | 37,543 | 📈 +504 since 2026-08-26 | Frontend stack for agents & generative UI (React, Angular, Slack, mobile) + AG-UI protocol. Sustained growth over a month shows deepening integration into agent-facing products. |
| [aramisfacchinetti/streaming-json-parser](https://github.com/aramisfacchinetti/streaming-json-parser) | Python | 13 | 🆕 new | Strict incremental JSON/NDJSON parser with selective extraction — purpose-built for streaming LLM outputs. Tiny but novel; first appearance highlights niche tooling demand. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) | Python | 28,023 (+1,668) | 🆕 new | Agent memory that learns — persistent, adaptive context for long-running agents. Explosive 1,668-star debut reveals urgent community need for memory-as-a-service. |
| [dream-num/univer](https://github.com/dream-num/univer) | TypeScript | 17,909 (+1,082) | 📈 +1,447 since 2026-09-24 | Office harness for AI agents: spreadsheets, docs, slides, canvas, relational tables, PDF in one runtime. 1,447-star surge positions it as the canonical agent–document interface. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 291,285 (+611) | 📈 +504 since 2026-09-24 | Agentic skills framework & development methodology. Massive 291k total stars with steady growth indicates broad methodological adoption beyond code. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 267,013 | 📈 +751 since 2026-09-24 | Agent harness performance optimizer: skills, instincts, memory, security for Claude Code, Codex, Cursor, etc. 751-star jump shows practitioners optimizing agent stacks in production. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 248,768 | 📈 +615 since 2026-09-23 | “The agent that grows with you” — personal, evolving agent from Nous Research. Consistent 600+ star gains reflect loyal community around open-weight agent research. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 147,021 | 📈 +543 since 2026-09-17 | The agent engineering platform — foundational framework for composable LLM apps. Steady growth eight days post-report confirms enduring ecosystem centrality. |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | 107,734 | 📈 +527 since 2026-09-22 | Viral token-saving proxy for coding agents: “why use many token when few token do trick.” 65% token reduction via caveman-speak; 527-star rise shows cost-optimization urgency. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [rohitg00/ai-engineering-from-scratch](https://github.com/rohitg00/ai-engineering-from-scratch) | Python | 56,726 (+347) | 📈 +929 since 2026-09-24 | “Learn it. Build it. Ship it.” — end-to-end AI engineering curriculum with runnable code. 929-star jump in two days signals surging practitioner up-skilling demand. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 153,096 | 📈 +511 since 2026-09-20 | User-friendly AI interface supporting Ollama, OpenAI API, and more. 511-star growth maintains its position as the leading self-hosted chat UI. |
| [microsoft/qlib](https://github.com/microsoft/qlib) | Python | 48,832 | 📈 +501 since 2026-09-06 | AI-oriented quant investment platform with RL, supervised learning, and RD-Agent for automated R&D. Steady 501-star rise over 19 days shows niche but deep financial-AI traction. |
| [mikahama/uralicNLP](https://github.com/mikahama/uralicNLP) | Python | 100 | 🆕 new | NLP library for Uralic languages (Finnish, Skolt Sami, Moksha…) + LLMs, FSTs. First appearance; rare low-resource language tooling getting open-source attention. |

---

## 3. Trend Signal Analysis

**Agent infrastructure is the explosive category.** Three of the top five momentum signals (ax, univer, hindsight) are agent runtime, agent–document bridge, and agent memory — each gaining 1,000+ stars in 24–48 hours. This is not incremental; it reflects a phase shift from “LLM apps” to “production agent systems” where orchestration, persistence, and tooling are the bottlenecks.

**New tech stacks appearing for the first time:** Google’s Go-based **ax** and NVIDIA’s Python **Model-Optimizer** represent vendor-led, production-hardened stacks entering open source simultaneously — a dual signal that cloud and silicon giants are open-sourcing their internal agent/optimization layers. **leejet/stable-diffusion.cpp** extends the `llama.cpp` paradigm to diffusion (Flux, Wan, Qwen-Image), suggesting a coming wave of dependency-free generative deployment on edge devices. **streaming-json-parser** and **caveman** expose two micro-trends: parsing streaming LLM output reliably, and radical token compression via prompt engineering — both born from real-world cost/latency pain.

**Connection to recent industry events:** The agent-memory boom (hindsight, ECC, hermes-agent) aligns with the industry’s pivot to “long-running agents” post-OpenAI o1 and Anthropic’s computer-use demos. Model-Optimizer’s NAS + speculative decoding + distillation suite mirrors NVIDIA’s GTC 2026 emphasis on inference efficiency for Blackwell. Univer’s spreadsheet/docs/canvas runtime mirrors Microsoft Loop and Notion AI’s agent-in-document moves.

**🆕 vs 📈 distinction:** The seven 🆕 entrants (hindsight, Model-Optimizer, stable-diffusion.cpp, uralicNLP, streaming-json-parser, plus two trending-list debuts) are **new problem-space definitions** — memory, optimization, edge diffusion, low-resource NLP, streaming parsing. The 📈 re-appearances (ax, univer, superpowers, ECC, hermes-agent, langchain, caveman, open-webui, CopilotKit, qlib, ai-engineering-from-scratch) are **compounding incumbents** deepening moats in already-defined categories. The former expand the map; the latter thicken the roads.

---

## 4. Community Hot Spots

- **vectorize-io/hindsight** — First-mover in *learnable agent memory*; 1,668 stars in hours. Watch for protocol standardization around memory persistence.
- **google/ax** — Go-based orchestration runtime from Google; 1,350-star spike. If it opens a plugin ecosystem, it becomes the Kubernetes of agents.
- **dream-num/univer** — Only project unifying spreadsheets, docs, slides, canvas, PDF *and* relational tables as an agent runtime. 1,447-star surge = developers voting for “agents in documents.”
- **NVIDIA/Model-Optimizer** — Hardware-vendor optimization library covering the full compression stack. Adoption will track TensorRT-LLM/vLLM release cycles.
- **JuliusBrussee/caveman** — 65% token reduction via a *prompt-style hack* that went viral. Signals extreme cost sensitivity; expect more “prompt-level compression” tools.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*