# AI Open Source Trends 2026-08-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-22 01:39 UTC

---

# AI Open Source Trends Report — 2026-08-22

---

## 1. Today's Highlights

**MoneyPrinterTurbo** leads today's trending with **+1,201 stars**, signaling explosive demand for end-to-end AI short-video generation pipelines. Agent infrastructure dominates momentum: **affaan-m/ECC (+357)**, **santifer/career-ops (+921)**, **obra/superpowers (+790)**, and **modular/modular (+913)** all show strong daily growth, reflecting a shift from model-centric to runtime-centric development. Local-first, privacy-preserving tooling (**ollama**, **open-webui**, **anything-llm**, **apache/maka**) continues accumulating massive aggregate stars. Knowledge-graph approaches (**Graphify-Labs/graphify** at 109k stars) are displacing pure vector RAG for code understanding. Cross-session agent memory (**claude-mem** 91k, **mem0** 63k) has emerged as a distinct, high-attention infrastructure layer.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 179,128 | Local-first LLM runtime supporting Kimi-K2.6, GLM-5.2, DeepSeek, and other models with simple CLI; 179k stars reflect massive developer adoption for offline inference. |
| [vllm-project/vllm](https://github.com/vllm-project/vllm) | Python | 89,661 | High-throughput LLM inference engine with PagedAttention for memory-efficient serving; standard for production LLM deployment at scale. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 153,148 | Collaborative platform for building agentic workflows and RAG pipelines with visual orchestration; 153k stars show strong enterprise traction for self-hosted AI apps. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 144,737 | Foundational agent engineering framework with extensive integrations; remains the most widely adopted library for LLM application composition. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 170,590 | Web scraping and search API purpose-built for LLM context retrieval; 170k stars signal critical infrastructure role in agent web access. |
| [modular/modular](https://github.com/modular/modular) | Mojo | (+913) | Modular Platform including MAX engine and Mojo language for AI compute; today's +913 stars reflect growing interest in next-gen AI compiler stack. |
| [apache/maka](https://github.com/apache/maka) | TypeScript | (+148) | Apache-incubating local-first AI agent workspace with append-only event logging; +148 stars today highlights momentum in agent observability tooling. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 241,805 (+357) | Agent harness optimizing skills, memory, and security across Claude Code, Codex, Cursor; 241k stars and daily growth confirm status as de facto agent runtime layer. |

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 234,007 | Personal agent that evolves with user interaction; 234k stars indicate strong community belief in persistent, adaptive agent architectures. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 186,728 | Pioneering autonomous agent framework for task decomposition and execution; 186k stars maintain its position as the reference open-source agent project. |
| [browser-use/browser-use](https://github.com/browser-use/browser-use) | Python | 110,020 | Enables AI agents to control browsers for web automation; 110k stars reflect essential capability for agentic web interaction. |
| [santifer/career-ops](https://github.com/santifer/career-ops) | JavaScript | 67,462 (+921) | Local AI job-search agent that scores listings, tailors CVs, and tracks applications via CLI; +921 stars today shows viral adoption among developers. |
| [ruvnet/ruflo](https://github.com/ruvnet/ruflo) | TypeScript | (+140) | Meta-harness for deploying multi-agent swarms with adaptive memory and RAG; +140 stars today signals interest in orchestration layers. |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | (+790) | Agentic skills framework and development methodology; +790 stars today suggests resonance with skills-based agent composition patterns. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 50,887 | Unified AI productivity studio with 300+ assistants and autonomous agents; 50k stars show demand for all-in-one agent interfaces. |
| [shareAI-lab/learn-claude-code](https://github.com/shareAI-lab/learn-claude-code) | Python | 74,904 | Minimal bash-based agent harness tutorial for learning Claude Code internals; 74k stars reveal appetite for transparent, from-scratch agent education. |

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 113,946 (+1,201) | One-click HD short video generation from topics using LLM workflows; +1,201 stars today leads trending, highlighting explosive demand for AI content automation. |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 149,517 | User-friendly self-hosted AI interface supporting Ollama, OpenAI, and custom models; 149k stars confirm it as the default chat UI for local LLMs. |
| [Mintplex-Labs/anything-llm](https://github.com/Mintplex-Labs/anything-llm) | JavaScript | 65,030 | Local-first agent platform with document chat, agents, and tools; 65k stars reflect strong preference for privacy-preserving AI workspaces. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 109,278 | Converts codebases into queryable knowledge graphs via deterministic AST parsing; 109k stars signal shift from vector RAG to structural code understanding. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 48,484 | Generates native PowerPoint decks with charts, animations, and narration from documents; 48k stars show productization of document-to-presentation pipelines. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 63,582 | LLM-driven multi-market stock analysis with real-time news and automated notifications; 63k stars demonstrate vertical agent adoption in finance. |
| [PostHog/posthog](https://github.com/PostHog/posthog) | Python | (+335) | Product analytics platform with AI observability, session replay, and error tracking for agents; +335 stars today reflects instrumentation needs for agentic apps. |

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 197,212 | Google's foundational ML framework for research and production; 197k stars sustain its role as enterprise deep learning standard. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 164,318 | Model hub and framework for state-of-the-art text, vision, and multimodal models; 164k stars make it the central registry for open-weight models. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,527 | Dynamic neural network library with strong GPU acceleration; 102k stars maintain dominance in research and prototyping. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 54,913 | Trains a 64M-parameter LLM from scratch in 2 hours; 54k stars reflect surging interest in accessible, small-model training recipes. |
| [ultralytics/ultralytics](https://github.com/ultralytics/ultralytics) | Python | 60,844 | YOLO object detection suite (YOLOv8, YOLO11, YOLO26) for vision tasks; 60k stars confirm continued relevance of efficient CV models alongside LLMs. |
| [microsoft/ML-For-Beginners](https://github.com/microsoft/ML-For-Beginners) | Jupyter Notebook | 89,658 | 12-week classic ML curriculum with lessons and quizzes; 89k stars show sustained demand for structured AI education. |

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 89,000 | RAG engine fusing retrieval with agent capabilities for superior context layers; 89k stars position it as leading open-source RAG platform. |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 109,278 | Deterministic AST-based knowledge graphs for codebases, replacing vector search with structural understanding; 109k stars signal paradigm shift in code RAG. |
| [thedotmack/claude-mem](https://github.com/t

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*