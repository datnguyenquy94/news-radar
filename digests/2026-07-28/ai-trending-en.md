# AI Open Source Trends 2026-07-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-07-28 02:43 UTC

---

# AI Open Source Trends Report — 2026-07-28

---

## 1. Today's Highlights

Today's trending list reveals a strong shift toward **AI agent infrastructure** and **specialized foundation models**. Alibaba's `open-code-review` (+979★) leads the day, showcasing production-grade hybrid deterministic/LLM code review at enterprise scale. Three new agent-centric applications debuted with 400–600★ each: `moeru-ai/airi` (self-hosted multimodal companion with gaming skills), `bradautomates/claude-video` (video understanding for Claude), and `shiyu-coder/Kronos` (financial-markets foundation model). The topic search data confirms **RAG/vector databases** and **agent frameworks** remain the two most crowded and actively developed categories, with 15+ projects each surpassing 10k stars.

---

## 2. Top Projects by Category

### 🔧 AI Infrastructure

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 177,038 | The de-facto standard for local model serving; supports Kimi-K2.6, GLM-5.2, DeepSeek, gpt-oss, Qwen, Gemma with zero-config CLI and cross-platform binaries. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,049 | Core model-definition framework for text, vision, audio, and multimodal models; backbone of the open-weight ecosystem for both training and inference. |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 0 (+979) | **Today's #1 AI trend.** Battle-tested at Alibaba scale: hybrid deterministic pipelines + LLM agent, line-level comments, built-in security rules (NPE, XSS, SQLi), OpenAI/Anthropic compatible. |
| [pbakaus/impeccable](https://github.com/pbakaus/impeccable) | JavaScript | 0 (+847) | **Today's #2 AI trend.** Design-language system that makes AI harnesses better at design decisions; targets agent-generated UI/code quality. |
| [0xPlaygrounds/rig](https://github.com/0xPlaygrounds/rig) | Rust | 8,075 | Modular, type-safe LLM application framework in Rust; emphasizes composability and performance for production agent pipelines. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 12,705 | Idiomatic JVM library for LLM apps: unified API over models/vector stores, tool calling (MCP), agents, RAG; integrates with Quarkus/Spring Boot. |
| [open-compass/opencompass](https://github.com/open-compass/opencompass) | Python | 7,240 | Comprehensive LLM evaluation platform supporting 100+ datasets and models (Llama3, Mistral, InternLM2, GPT-4, Qwen, GLM, Claude). |

---

### 🤖 AI Agents / Workflows

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 234,217 | Agent-harness performance optimizer: skills, instincts, memory, security, research-first dev for Claude Code, Codex, Cursor, Opencode. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 221,466 | "The agent that grows with you" — long-running, self-evolving agent with persistent memory and continuous learning loops. |
| [Significant-Gravitas/AutoGPT](https://github.com/Significant-Gravitas/AutoGPT) | Python | 185,721 | Pioneering accessible autonomous agent framework; mission is tooling so users focus on goals, not plumbing. |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 150,466 | **Dual-category leader.** Visual builder for agentic workflows + RAG pipelines; rich model/tool support; cloud/VPC/self-host deployment. |
| [langchain-ai/langchain](https://github.com/langchain-ai/langchain) | Python | 142,728 | The agent engineering platform; composable chains, tools, memory, and multi-agent orchestration — foundation for thousands of apps. |
| [infiniflow/ragflow](https://github.com/infiniflow/ragflow) | Go | 86,177 | RAG engine fused with agent capabilities; deep document understanding (tables, formulas, layout) + agentic reasoning for complex QA. |
| [Panniantong/Agent-Reach](https://github.com/Panniantong/Agent-Reach) | Python | 61,287 | Gives agents "eyes" across the internet: Twitter, Reddit, YouTube, GitHub, Bilibili, XiaoHongShu — one CLI, zero API fees. |
| [alibaba/open-code-review](https://github.com/alibaba/open-code-review) | Go | 0 (+979) | **Today's #1 AI trend.** Hybrid deterministic + LLM agent code reviewer with precise line-level comments and security rulesets. |

---

### 📦 AI Applications

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [open-webui/open-webui](https://github.com/open-webui/open-webui) | Python | 146,990 | **Dual-category leader.** User-friendly self-hosted AI interface supporting Ollama, OpenAI API, and custom models; extensible with tools/RAG. |
| [CherryHQ/cherry-studio](https://github.com/CherryHQ/cherry-studio) | TypeScript | 49,055 | AI productivity studio: smart chat, autonomous agents, 300+ assistants, unified access to frontier LLMs; desktop + web. |
| [moeru-ai/airi](https://github.com/moeru-ai/airi) | TypeScript | 0 (+572) | **Today's #3 AI trend.** Self-hosted "Grok Companion" with realtime voice chat, Minecraft/Factorio gameplay; Web/macOS/Windows. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 41,444 | Turns documents/topics into native PowerPoint decks: shapes, transitions, animations, data-driven charts, audio narration, custom templates. |
| [ZhuLinsen/daily_stock_analysis](https://github.com/ZhuLinsen/daily_stock_analysis) | Python | 59,268 | LLM-powered multi-market stock analysis: multi-source data, real-time news, decision dashboard, automated notifications, zero-cost scheduling. |
| [bradautomates/claude-video](https://github.com/bradautomates/claude-video) | Python | 0 (+434) | **Today's #4 AI trend.** `/watch` command downloads video, extracts frames, transcribes, hands full context to Claude for analysis. |
| [harry0703/MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 99,580 | One-click HD short video generation from topic/keyword using AI models + automated workflow; Chinese/English content pipelines. |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | 0 (+441) | **Today's #5 AI trend.** Foundation model for the "language of financial markets"; novel domain-specific LLM architecture. |

---

### 🧠 LLMs / Training

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [tensorflow/tensorflow](https://github.com/tensorflow/tensorflow) | C++ | 196,577 | Industry-standard ML framework; end-to-end platform for research and production deployment at scale. |
| [pytorch/pytorch](https://github.com/pytorch/pytorch) | Python | 102,025 | Dynamic neural networks with strong GPU acceleration; dominant framework for research and increasingly production. |
| [huggingface/transformers](https://github.com/huggingface/transformers) | Python | 163,049 | Model hub + training/inference framework; 1M+ models, SOTA architectures, seamless integration with PyTorch/TensorFlow/JAX. |
| [rasbt/LLMs-from-scratch](https://github.com/rasbt/LLMs-from-scratch) | Jupyter Notebook | 99,988 | Step-by-step PyTorch implementation of a ChatGPT-like LLM from scratch; educational gold standard for LLM internals. |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 53,910 | Train a 64M-parameter LLM from scratch in 2 hours; minimal codebase for rapid experimentation and learning. |
| [skyzh/tiny-llm](https://github.com/skyzh/tiny-llm) | Python | 4,416 | Course + codebase for LLM inference serving on Apple Silicon; builds a tiny vLLM + Qwen for systems engineers. |
| [shiyu-coder/Kronos](https://github.com/shiyu-coder/Kronos) | Python | 0 (+441) | **Today's #5 AI trend.** Foundation model for financial markets; represents emerging trend of domain-specific foundation models. |

---

### 🔍 RAG / Knowledge

| Project | Lang | Stars (total / today) | Summary |
| :--- | :--- | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | TypeScript | 150,466 | **Dual-category leader.** Visual RAG pipeline builder + agentic workflows; 150k★ validates

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*