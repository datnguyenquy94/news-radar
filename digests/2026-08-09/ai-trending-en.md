# AI Open Source Trends 2026-08-09

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-09 02:14 UTC

---

# AI Open Source Trends Report — 2026-08-09

---

## 1. Today's Highlights

The GitHub trending list is dominated by **agent infrastructure** today: five of the top twelve repositories are explicitly about "skills," "agents," or multi-agent frameworks for coding and autonomous workflows. **PrimeIntellect-ai/prime-agent** leads with **+2,483 stars** in 24 hours, signaling strong appetite for self-improving RLM agents that handle long-running coding tasks. Simultaneously, three distinct "skills" repositories (from Addy Osmani, Matt Pocock, and Google) collectively earned **>2,600 stars**, reflecting a convergence on *portable, composable skill primitives* as the new abstraction layer for AI coding agents. **TauricResearch/TradingAgents** (+153 stars) extends the pattern into a vertical—financial trading—showing multi-agent orchestration moving beyond code generation into domain-specific automation.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,087 | The de facto standard for running frontier LLMs locally (Kimi-K2.6, GLM-5.2, DeepSeek, Qwen, Gemma). Its CLI/daemon model and growing model library make it the default inference backbone for air-gapped and edge deployments. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,478 | The model-definition framework powering text, vision, audio, and multimodal SOTA models. First-party support for new architectures (e.g., gpt-oss, Qwen3) typically lands here within days of release. |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,930 | Google’s production-grade ML platform; still the go-to for large-scale training pipelines, TensorFlow Extended (TFX), and mobile/edge deployment via TFLite. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,283 | The research-to-production framework with dynamic graphs and best-in-class GPU acceleration. Dominates academic papers and underpins most LLM fine-tuning tooling (LoRA, FSDP, torch.compile). |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 163,445 | “Context API for the web”—scrapes, searches, and renders pages into clean LLM-ready markdown/JSON. Critical infrastructure for agents that need live web grounding without hallucinated summaries. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 0 (+779) | Production-grade, copy-pasteable skill definitions (lint, test, refactor, migrate) for AI coding agents. Authored by a Chrome DevTools lead; focuses on reliability patterns battle-tested at Google scale. |
| [mattpocock/skills](https://github.com/mattpocock/skills) | Shell | 0 (+1,359) | Curated `.agents` directory of real-world engineering skills (TypeScript, React, Node, CI/CD). Gained 1.3k stars today—developers are treating it as the “standard library” for agent-enabled workflows. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 238,832 | Agent harness optimizing skills, instincts, memory, and security across Claude Code, Codex, Cursor, Opencode. Highest-starred repo in the AI topic set; acts as a meta-layer unifying disparate agent CLIs. |

---

### 🤖 AI Agents / Workflows
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [PrimeIntellect-ai/prime-agent](https://github.com/PrimeIntellect-ai/prime-agent) | TypeScript | 0 (+2,483) | **Today’s #1 trending AI repo.** Self-improving RLM agent that writes, tests, and refactors code over long horizons. The star surge indicates a community ready for agents that *learn from their own execution traces*. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 227,548 | “The agent that grows with you”—persistent memory, tool-use, and self-modification. Built by the team behind Hermes LLMs; showcases tight model-agent co-design. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,439 | The original autonomous agent framework; now a modular platform for building, sharing, and selling agent skills. Still the reference point for “agent” mindshare. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,807 | Visual builder for agentic workflows and RAG pipelines. Supports 100+ models/tools; one-click deploy to cloud/VPC/self-hosted. Bridges prototype-to-production gap for non-ML engineers. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 143,747 | The agent engineering platform—composable chains, agents, memory, and evaluation. LangGraph (stateful multi-agent) and LangSmith (observability) extend it into a full lifecycle stack. |
| [FlowiseAI/Flowise](https://github.com/FlowiseAI/Flowise) | TypeScript | 55,262 | Low-code drag-and-drop UI for building LLM apps (agents, RAG, chains). Popular with internal tools teams and consultants delivering custom AI workflows fast. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 0 (+153) | Multi-agent LLM framework for financial trading: research analyst, risk manager, portfolio manager agents debate via structured prompts. Rare vertical-specific multi-agent system gaining traction. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 87,089 | RAG engine fused with agent capabilities (routing, planning, tool-use). Written in Go for latency-sensitive retrieval; positions itself as the “context layer” for enterprise LLM deployments. |

---

### 📦 AI Applications
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,265 | Feature-rich, self-hosted ChatGPT alternative (Ollama, OpenAI, custom endpoints). Adds RAG, image gen, voice, and admin panels—becoming the default “private ChatGPT” for teams. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 102,230 | One-click HD short-video generation from a topic/keyword using LLMs + TTS + stock footage + auto-editing. Viral in creator-economy circles; demonstrates end-to-end multimodal agent pipelines. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,379 | YOLO26/11/v8—real-time object detection, segmentation, pose, tracking. The go-to CV library for edge deployment (ONNX, TensorRT, CoreML, TFLite). |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,100 | “AI productivity studio”: unified chat, 300+ pre-built assistants, autonomous agents, multi-model routing. Polished Electron app targeting power users who want a single desktop hub. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 63,244 | Local-first AI job hunter: scrapes portals, scores listings (A–F), tailors CVs, tracks apps—runs inside your coding CLI (Claude Code, Codex, etc.). Novel “agent-as-CLI-plugin” UX. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 60,778 | LLM-driven multi-market stock analysis: ingests multi-source quotes, real-time news, builds dashboards, pushes notifications—zero-cost scheduled runs via GitHub Actions. |
| [TauricResearch/TradingAgents](https://github.com/TauricResearch/TradingAgents) | Python | 0 (+153) | (Also listed in Agents) Multi-agent trading system with researcher/risk/portfolio personas. Demonstrates vertical agent specialization beyond generic coding. |

---

### 🧠 LLMs / Training
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 101,478 | Step-by-step PyTorch implementation of a GPT-style LLM (tokenizer → attention → training → chat). The definitive hands-on resource for engineers wanting to *understand* rather than just use LLMs. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,471 | Trains a 64M-parameter LLM from scratch in **2 hours** on consumer GPUs. Minimal dependencies, clean codebase—ideal for experimentation with architectures, data curricula, and scaling laws. |
| [microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners) | Jupyter Notebook | 89,165 | 12-week, 26-lesson classic ML curriculum (regression, clustering, NLP, time series). Not LLM-specific but the highest-starred structured entry point for newcomers. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 178,087 | (Also in Infrastructure) One-command model pulls (`ollama run gpt-oss:20b`) and local API server. Accelerates the “download and run” loop for new open-weight releases. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,478 | (Also in Infrastructure) Model hub + training scripts (SFT, RLHF, DPO, LoRA/QLoRA). First integration point for new architectures (e.g., Nemotron, Qwen3, GLM). |

---

### 🔍 RAG / Knowledge
| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 151,807 | (Also in Agents) Visual RAG pipeline builder: document ingestion → chunking → embedding → retrieval → generation. Supports hybrid search, reranking, and agentic query rewriting out of the box. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 148,265 | (Also in Applications) Built-in RAG: drag-and-drop PDFs/URLs, per-collection embeddings, citation UI. Makes “chat with your docs” accessible without code. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 104,368 | Turns any codebase (AST, SQL, configs, PDFs) into a **queryable knowledge graph**—deterministic, explainable edges, no vector store. Targets code-intelligence agents (Claude Code, Cursor, Gemini CLI). |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 87,089 | (Also in Agents) Enterprise-grade RAG engine with agentic routing, multi-modal parsing, and Go-speed retrieval. Positions as the “context layer” between raw data and LLM reasoning. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | JavaScript | 90,114 | Persistent cross-session memory for *any* agent (Claude Code, Codex, Cursor, Gemini, Hermes…). Compresses session history with AI, injects relevant context automatically. Solves the “goldfish memory” problem. |
| [mem0ai/mem0](https://github.com/mem0ai/mem0) | Python | 62,837 | Universal memory layer: semantic + episodic + procedural memory with TTL, versioning, and multi-tenant isolation. SDK + managed service; becoming the default “mem0 import” in agent stacks. |
| [meilisearch/meilisearch](https://github.com/meilisearch/meilisearch) | Rust | 58,913 | Lightning-fast hybrid search (BM25 + vector) with typo-tolerance, faceting, and multi-tenancy. Increasingly the vector DB of choice for self-hosted RAG (simpler ops than Milvus/Weaviate). |

---

## 3. Trend Signal Analysis

**Agent “skills” are the new package manager.** Today’s trending page shows three independent “skills” repositories (Addy Osmani, Matt Pocock, Google) collectively earning >2,600 stars in 24 hours. This is not a coincidence: as coding agents (Claude Code, Codex, Cursor, Opencode) converge on a similar tool-calling interface, the community is standardizing on **portable, versioned skill definitions**—YAML/Markdown bundles of prompts, allowed tools, and eval criteria—that can be dropped into any agent runtime. The surge around **PrimeIntellect-ai/prime-agent** (+2.5k stars) reinforces this: its differentiator is a *self-improving* RLM loop that refines its own skill library from execution traces, turning the skill registry into a live, evolving asset.

**Multi-agent orchestration is verticalizing.** **TauricResearch/TradingAgents** appears on both the trending list and the topic search, modeling a researcher/risk-manager/portfolio-manager council. This mirrors the broader pattern: generic “AutoGPT-style” autonomy is giving way to **domain-specific agent societies** with explicit roles, debate protocols, and compliance guards. Expect more vertical frameworks (legal, devops, security, bio) in the next quarter.

**Local-first, privacy-preserving stacks are hardening.** **Ollama** (178k ⭐), **open-webui** (148k ⭐), **anything-llm** (64k ⭐), and **Cherry Studio** (50k ⭐) form a cohesive ecosystem: pull weights → run inference → chat/RAG/agents → all air-gapped. The recent gpt-oss / Qwen3 / GLM-5.2 releases dropped on Ollama within hours, making “day-zero local inference” a baseline expectation.

**Memory & context engineering are now first-class infrastructure.** **mem0** (62k ⭐), **claude-mem** (90k ⭐), **Graphify** (104k ⭐), and **headroom** (65k ⭐) tackle different slices—long-term semantic memory, cross-session compression, code-graph grounding, token budget optimization—but share a thesis: **context quality > context quantity**. The 20–95% token savings reported by headroom and the deterministic graph edges from Graphify signal a shift from “stuff more into the prompt” to “retrieve *exactly* what’s needed.”

**Connection to recent releases:** The gpt-oss / Nemotron / Qwen3 / GLM

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*