# AI Open Source Trends 2026-08-06

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-06 03:20 UTC

---

The user wants me to analyze the GitHub AI-related trending repository data from 2026-08-06 and produce a structured report. Let me follow the steps carefully.

Step 1: Filter for AI/ML relevance from the trending list (13 repos) and the topic search results (80 repos). I need to exclude unrelated general tools, frontend frameworks, games, etc.

From the trending list (13 repos):
1. cloudflare/computer - TypeScript - "Give your agent a computer" - AI agent related ✓
2. huangruiteng/loopx - Python - "Lightweight loop engineering state kernel for long-running AI agent teams" - AI agent ✓
3. TencentCloud/TencentDB-Agent-Memory - TypeScript - "team-level memory hub for AI Agents" - AI agent ✓
4. donnemartin/system-design-primer - Python - system design interview prep - NOT AI ❌
5. firecrawl/pdf-inspector - Rust - "Fast Rust library for PDF inspection, classification, and text extraction" - AI-related (document processing for AI) ✓
6. esengine/DeepSeek-Reasonix - Go - "DeepSeek-native AI coding agent for your terminal" - AI agent ✓
7. addyosmani/agent-skills - JavaScript - "Production-grade engineering skills for AI coding agents" - AI agent ✓
8. obra/superpowers - Shell - "agentic skills framework & software development methodology" - AI agent ✓
9. roboflow/supervision - Python - "reusable computer vision tools" - AI/computer vision ✓
10. vercel/next.js - JavaScript - React framework - NOT AI ❌
11. tailwindlabs/tailwindcss - TypeScript - CSS framework - NOT AI ❌
12. uber/ADR - Python - "secures enterprise AI agents through observability, security benchmarking, and threat detection" - AI agent security ✓
13. lyogavin/airllm - Jupyter Notebook - "AirLLM 70B inference with single 4GB GPU" - LLM inference ✓

So from trending: 9 AI-relevant repos (1,2,3,5,6,7,8,9,12,13) - wait that's 10. Let me recount: 1,2,3,5,6,7,8,9,12,13 = 10 repos.

From topic search results (80 repos): All appear to be AI-related based on their topics (llm, ml, ai-agent, rag, llm-model, vector-db). I need to categorize them.

Step 2: Categorize into:
- 🔧 AI Infrastructure
- 🤖 AI Agents / Workflows
- 📦 AI Applications
- 🧠 LLMs / Training
- 🔍 RAG / Knowledge

Let me go through each repo and assign primary category.

First, trending AI repos:

1. cloudflare/computer - "Give your agent a computer" - AI agent infrastructure → 🤖 AI Agents / Workflows (or 🔧 AI Infrastructure? It's giving agents computer access, so agent tooling) → I'd say 🤖 AI Agents / Workflows
2. huangruiteng/loopx - "loop engineering state kernel for long-running AI agent teams" - agent orchestration → 🤖 AI Agents / Workflows
3. TencentCloud/TencentDB-Agent-Memory - "team-level memory hub for AI Agents" - agent memory → 🤖 AI Agents / Workflows (or 🔍 RAG/Knowledge? It's memory for agents) → 🤖 AI Agents / Workflows
4. firecrawl/pdf-inspector - PDF inspection for smart routing - document processing for AI → 🔧 AI Infrastructure (or 🔍 RAG/Knowledge) → 🔧 AI Infrastructure
5. esengine/DeepSeek-Reasonix - "DeepSeek-native AI coding agent for your terminal" - coding agent → 🤖 AI Agents / Workflows
6. addyosmani/agent-skills - "Production-grade engineering skills for AI coding agents" - agent skills → 🤖 AI Agents / Workflows
7. obra/superpowers - "agentic skills framework & software development methodology" - agent framework → 🤖 AI Agents / Workflows
8. roboflow/supervision - "reusable computer vision tools" - computer vision library → 🔧 AI Infrastructure (or 📦 AI Applications? It's a tool library) → 🔧 AI Infrastructure
9. uber/ADR - "secures enterprise AI agents through observability, security benchmarking, and threat detection" - AI agent security → 🔧 AI Infrastructure (security tooling for agents)
10. lyogavin/airllm - "AirLLM 70B inference with single 4GB GPU" - LLM inference optimization → 🧠 LLMs / Training (inference engine)

Now topic search repos (80 repos). I need to categorize each. Let me go through them:

LLM topic (topic:llm):
- affaan-m/ECC - "agent harness performance optimization system. Skills, instincts, memory, security" - agent infrastructure → 🤖 AI Agents / Workflows
- NousResearch/hermes-agent - "The agent that grows with you" - agent → 🤖 AI Agents / Workflows
- Significant-Gravitas/AutoGPT - "accessible AI for everyone" - agent framework → 🤖 AI Agents / Workflows
- ollama/ollama - "Get up and running with Kimi-K2.6, GLM-5.2, MiniMax, DeepSeek, gpt-oss, Qwen, Gemma and other models" - model serving → 🔧 AI Infrastructure (or 🧠 LLMs/Training) → 🔧 AI Infrastructure
- f/prompts.chat - "Awesome ChatGPT Prompts" - prompt collection → 📦 AI Applications (or not core) → maybe skip as it's just prompts
- huggingface/transformers - "model-definition framework for state-of-the-art ML models" - 🔧 AI Infrastructure (core framework)
- firecrawl/firecrawl - "context API to search, scrape, and interact with the web at scale" - web scraping for AI → 🔧 AI Infrastructure
- langgenius/dify - "Build Agentic workflows, RAG pipelines" - agent/RAG platform → 🤖 AI Agents / Workflows (primary) or 🔍 RAG/Knowledge
- open-webui/open-webui - "User-friendly AI Interface" - UI for LLMs → 📦 AI Applications
- langchain-ai/langchain - "The agent engineering platform" - agent framework → 🤖 AI Agents / Workflows
- browser-use/browser-use - "Make websites accessible for AI agents" - browser automation for agents → 🤖 AI Agents / Workflows
- Graphify-Labs/graphify - "Turn any codebase into a queryable knowledge graph" - code knowledge graph → 🔍 RAG / Knowledge
- harry0703/MoneyPrinterTurbo - "AI大模型和自动化工作流，根据主题或关键词一键生成高清短视频" - video generation app → 📦 AI Applications
- JuliusBrussee/caveman - "Claude Code skill that cuts 65% of tokens" - agent skill → 🤖 AI Agents / Workflows
- vllm-project/vllm - "high-throughput and memory-efficient inference and serving engine for LLMs" - inference engine → 🔧 AI Infrastructure (or 🧠 LLMs/Training) → 🔧 AI Infrastructure

ML topic (topic:ml):
- tensorflow/tensorflow - ML framework → 🔧 AI Infrastructure
- pytorch/pytorch - ML framework → 🔧 AI Infrastructure
- microsoft/ML-For-Beginners - educational → 📦 AI Applications (educational) or skip
- netdata/netdata - "AI-powered full stack observability" - observability → 🔧 AI Infrastructure
- tesseract-ocr/tesseract - OCR engine → 🔧 AI Infrastructure (or 📦 AI Applications)
- scikit-learn/scikit-learn - ML library → 🔧 AI Infrastructure
- keras-team/keras - Deep Learning → 🔧 AI Infrastructure
- ultralytics/ultralytics - YOLO object detection → 🔧 AI Infrastructure (or 📦 AI Applications)
- deepfakes/faceswap - deepfakes software → 📦 AI Applications
- JuliaLang/julia - programming language → not primarily AI, skip
- roboflow/supervision - computer vision tools (already in trending) → 🔧 AI Infrastructure
- apache/airflow - workflow platform → 🔧 AI Infrastructure (MLOps)
- rohitg00/ai-engineering-from-scratch - educational → 📦 AI Applications (educational)

AI-Agent topic (topic:ai-agent):
- Panniantong/Agent-Reach - "Give your AI agent eyes to see the entire internet" - agent tooling → 🤖 AI Agents / Workflows
- santifer/career-ops - "Open-source AI job search" - agent application → 📦 AI Applications
- ZhuLinsen/daily_stock_analysis - "LLM-powered multi-market stock analysis system" - agent application → 📦 AI Applications
- CherryHQ/cherry-studio - "AI productivity studio with smart chat, autonomous agents" - agent platform → 🤖 AI Agents / Workflows
- HKUDS/nanobot - "Ultra-lightweight, open-source, self-hosted personal AI agent framework" - agent framework → 🤖 AI Agents / Workflows
- zhayujie/CowAgent - "Open-source super AI assistant & Agent Harness" - agent framework → 🤖 AI Agents / Workflows
- siyuan-note/siyuan - "personal knowledge management software" - knowledge management → 🔍 RAG / Knowledge
- hugohe3/ppt-master - "AI turns documents or topics into real, native PowerPoint decks" - agent application → 📦 AI Applications
- CopilotKit/CopilotKit - "Frontend Stack for Agents & Generative UI" - agent frontend → 🔧 AI Infrastructure (or 🤖 AI Agents / Workflows) → 🔧 AI Infrastructure
- agentscope-ai/QwenPaw - "Personal AI Assistant" - agent app → 📦 AI Applications
- bojieli/ai-agent-book - "AI Agent book" - educational → skip
- esengine/DeepSeek-Reasonix - already in trending → 🤖 AI Agents / Workflows
- iOfficeAI/AionUi - "Open-source 24/7 Cowork app for OpenClaw, Hermes Agent, Claude Code, Codex, OpenCode, Gemini CLI" - agent UI → 📦 AI Applications
- Gitlawb/openclaude - "runs anywhere. uses anything" - agent runtime → 🤖 AI Agents / Workflows

RAG topic (topic:rag):
- Shubhamsaboo/awesome-llm-apps - "100+ AI Agents, Agent Skills and RAG Apps" - awesome list → skip
- thedotmack/claude-mem - "Persistent Context Across Sessions for Every Agent" - agent memory → 🤖 AI Agents / Workflows (or 🔍 RAG/Knowledge) → 🔍 RAG / Knowledge
- infiniflow/ragflow - "RAGFlow is a leading open-source RAG engine that fuses cutting-edge RAG with Agent capabilities" - RAG engine → 🔍 RAG / Knowledge
- datawhalechina/hello-agents - "从零开始构建智能体" tutorial → skip (educational)
- headroomlabs-ai/headroom - "Compress tool outputs, logs, files, and RAG chunks before they reach the LLM" - token compression → 🔧 AI Infrastructure
- Mintplex-Labs/anything-llm - "Stop renting your intelligence. Own it with AnythingLLM" - local-first agent experience → 📦 AI Applications (or 🤖 AI Agents / Workflows) → 📦 AI Applications
- mem0ai/mem0 - "Universal memory layer for AI Agents" - agent memory → 🔍 RAG / Knowledge
- FlowiseAI/Flowise - "Build AI Agents, Visually" - visual agent builder → 🤖 AI Agents / Workflows
- run-llama/llama_index - "leading document agent and OCR platform" - RAG/agent platform → 🔍 RAG / Knowledge
- milvus-io/milvus - "high-performance, cloud-native vector database" - vector DB → 🔍 RAG / Knowledge
- langchain-ai/langgraph - "Build resilient agents" - agent framework → 🤖 AI Agents / Workflows

LLM-model topic (topic:llm-model):
- 0xPlaygrounds/rig - "Build modular and scalable LLM Applications in Rust" - LLM app framework → 🔧 AI Infrastructure
- open-compass/opencompass - "LLM evaluation platform" - evaluation → 🔧 AI Infrastructure
- Eigenwise/atomic-agents - "Building AI agents, atomically" - agent framework → 🤖 AI Agents / Workflows
- skyzh/tiny-llm - "course of learning LLM inference serving on Apple Silicon" - educational → skip
- genieincodebottle/generative-ai - "Comprehensive resources on Generative AI" - educational → skip
- llm-jp/awesome-japanese-llm - "Overview of Japanese LLMs" - awesome list → skip
- thinkwee/AwesomeOPD - "Awesome List for On-Policy Distillation" - awesome list → skip
- chrisliu298/awesome-llm-unlearning - "resource repository for machine unlearning" - awesome list → skip
- Picovoice/picollm - "On-device LLM Inference Powered by X-Bit Quantization" - inference → 🧠 LLMs / Training
- asukaminato0721/telegram-summary-bot - "Summarize group chat with AI" - application → 📦 AI Applications
- kennethleungty/Finance-LLMs - "Compilation of Real-World LLM & AI Agent Use Cases in Financial Services" - awesome list → skip
- liguge/Awesome-large-language-model-for-Prognostics-and-health-management - awesome list → skip
- HKBU-LAGAS/Awesome-Item-ID-Gen-RecSys - awesome list → skip
- AIDASLab/Awesome-Diffusion-LLM - awesome list → skip
- AarambhDevHub/aarambh-studio - "Decoder-only LLM built from scratch in pure Rust using Candle" - LLM from scratch → 🧠 LLMs / Training

Vector-db topic (topic:vector-db):
- meilisearch/meilisearch - "lightning-fast search engine API bringing AI-powered hybrid search" - search engine → 🔍 RAG / Knowledge
- VectifyAI/PageIndex - "Document Index for Vectorless, Reasoning-based RAG" - RAG indexing → 🔍 RAG / Knowledge
- qdrant/qdrant - "High-performance, massive-scale Vector Database" - vector DB → 🔍 RAG / Knowledge
- topoteretes/cognee - "open-source AI memory platform for agents" - agent memory → 🔍 RAG / Knowledge
- NirDiamant/RAG_Techniques - "advanced techniques for RAG systems" - educational → skip
- weaviate/weaviate - "open-source vector database" - vector DB → 🔍 RAG / Knowledge
- alibaba/zvec - "lightweight, lightning-fast, in-process vector database" - vector DB → 🔍 RAG / Knowledge
- neuml/txtai - "All-in-one AI framework for semantic search, LLM orchestration and language model workflows" - AI framework → 🔧 AI Infrastructure (or 🔍 RAG/Knowledge) → 🔧 AI Infrastructure
- langchain4j/langchain4j - "Java library for building LLM-powered applications" - Java LLM framework → 🔧 AI Infrastructure
- StarTrail-org/LEANN - "RAG on Everything with LEANN. Enjoy 97% storage savings" - RAG optimization → 🔍 RAG / Knowledge
- lancedb/lancedb - "Developer-friendly OSS embedded retrieval library for multimodal AI" - vector DB → 🔍 RAG / Knowledge
- oramasearch/orama - "complete search engine and RAG pipeline in your browser" - RAG in browser → 🔍 RAG / Knowledge

Now I need to select 3-8 projects per category for the tables. I should prioritize:
1. Projects from today's trending (with today's stars)
2. High-star projects from topic search
3. Diversity across sub-domains

Let me organize by category:

🔧 AI Infrastructure (frameworks, SDKs, inference engines, dev tools, CLI):
From trending:
- firecrawl/pdf-inspector (Rust, +1582 today) - PDF inspection for AI
- roboflow/supervision (Python, +146 today) - computer vision tools
- uber/ADR (Python, +354 today) - AI agent security
- lyogavin/airllm (Jupyter Notebook, +833 today) - LLM inference (but this is more LLMs/Training)

From topic search:
- ollama/ollama (Go, 177,880 stars) - model serving
- huggingface/transformers (Python, 163,378 stars) - core ML framework
- firecrawl/firecrawl (TypeScript, 161,818 stars) - web scraping for AI
- vllm-project/vllm (Python, 88,291 stars) - LLM inference engine
- tensorflow/tensorflow (C++, 196,876 stars) - ML framework
- pytorch/pytorch (Python, 102,228 stars) - ML framework
- netdata/netdata (Go, 80,039 stars) - observability
- scikit-learn/scikit-learn (Python, 66,913 stars) - ML library
- keras-team/keras (Python, 64,221 stars) - Deep Learning
- apache/airflow (Python, 46,391 stars) - workflow platform
- 0xPlaygrounds/rig (Rust, 8,182 stars) - Rust LLM framework
- open-compass/opencompass (Python, 7,278 stars) - LLM evaluation
- headroomlabs-ai/headroom (Python, 65,071 stars) - token compression
- neuml/txtai (Python, 12,800 stars) - AI framework for semantic search
- langchain4j/langchain4j (Java, 12,796 stars) - Java LLM framework

🤖 AI Agents / Workflows (agent frameworks, automation, multi-agent systems):
From trending:
- cloudflare/computer (TypeScript, +891 today) - agent computer access
- huangruiteng/loopx (Python, +326 today) - agent loop kernel
- TencentCloud/TencentDB-Agent-Memory (TypeScript, +1892 today) - agent memory hub
- esengine/DeepSeek-Reasonix (Go, +747 today) - coding agent
- addyosmani/agent-skills (JavaScript, +226 today) - agent skills
- obra/superpowers (Shell, +931 today) - agentic skills framework

From topic search:
- affaan-m/ECC (JavaScript, 238,047 stars) - agent harness
- NousResearch/hermes-agent (Python, 226,128 stars) - agent
- Significant-Gravitas/AutoGPT (Python, 185,836 stars) - agent framework
- langgenius/dify (TypeScript, 151,475 stars) - agentic workflows/RAG
- langchain-ai/langchain (Python, 143,518 stars) - agent platform
- browser-use/browser-use (Python, 107,999 stars) - browser automation for agents
- JuliusBrussee/caveman (JavaScript, 96,174 stars) - agent skill
- Panniantong/Agent-Reach (Python, 67,092 stars) - agent internet access
- CherryHQ/cherry-studio (TypeScript, 49,718 stars) - agent platform
- HKUDS/nanobot (Python, 46,690 stars) - agent framework
- zhayujie/CowAgent (Python, 46,347 stars) - agent harness
- Gitlawb/openclaude (TypeScript, 30,534 stars) - agent runtime
- Eigenwise/atomic-agents (Python, 6,119 stars) - atomic agents
- FlowiseAI/Flowise (TypeScript, 55,198 stars) - visual agent builder
- langchain-ai/langgraph (Python, 39,000 stars) - resilient agents

📦 AI Applications (specific apps, vertical solutions):
From trending: none directly (maybe lyogavin/airllm but it's infrastructure)

From topic search:
- open-webui/open-webui (Python, 147,986 stars) - AI interface
- harry0703/MoneyPrinterTurbo (Python, 101,788 stars) - video generation
- santifer/career-ops (JavaScript, 62,959 stars) - AI job search
- ZhuLinsen/daily_stock_analysis (Python, 60,196 stars) - stock analysis
- hugohe3/ppt-master (Python, 43,301 stars) - PPT generation
- agentscope-ai/QwenPaw (Python, 33,676 stars) - personal AI assistant
- iOfficeAI/AionUi (TypeScript, 31,527 stars) - cowork app for agents
- Mintplex-Labs/anything-llm (JavaScript, 64,397 stars) - local-first agent experience
- asukaminato0721/telegram-summary-bot (TypeScript, 193 stars) - telegram bot
- deepfakes/faceswap (Python, 57,249 stars) - deepfakes
- ultralytics/ultralytics (Python, 60,244 stars) - YOLO (could be infrastructure)
- tesseract-ocr/tesseract (C++, 75,769 stars) - OCR (could be infrastructure)

🧠 LLMs / Training (model weights, training frameworks, fine-tuning tools):
From trending:
- lyogavin/airllm (Jupyter Notebook, +833 today) - 70B inference on 4GB GPU

From topic search:
- Picovoice/picollm (Python, 316 stars) - on-device LLM inference
- AarambhDevHub/aarambh-studio (Rust, 63 stars) - LLM from scratch in Rust
- vllm-project/vllm (Python, 88,291 stars) - inference engine (also infrastructure)
- ollama/ollama (Go, 177,880 stars) - model serving (also infrastructure)

🔍 RAG / Knowledge (vector databases, retrieval-augmented generation, knowledge management):
From trending: none directly

From topic search:
- Graphify-Labs/graphify (Python, 103,099 stars) - code knowledge graph
- siyuan-note/siyuan (TypeScript, 45,646 stars) - personal knowledge management
- thedotmack/claude-mem (JavaScript, 89,755 stars) - persistent context for agents
- infiniflow/ragflow (Go, 86,917 stars) - RAG engine with agent capabilities
- mem0ai/mem0 (Python, 62,617 stars) - universal memory layer for agents
- run-llama/llama_index (Python, 51,410 stars) - document agent and OCR platform
- milvus-io/milvus (Go, 45,526 stars) - vector database
- meilisearch/meilisearch (Rust, 58,869 stars) - search engine with hybrid search
- VectifyAI/PageIndex (Python, 35,026 stars) - document index for vectorless RAG
- qdrant/qdrant (Rust, 33,805 stars) - vector database
- topoteretes/cognee (Python, 29,801 stars) - AI memory platform for agents
- weaviate/weaviate (Go, 16,699 stars) - vector database
- alibaba/zvec (C++, 15,383 stars) - in-process vector database
- StarTrail-org/LEANN (Python, 12,767 stars) - RAG with 97% storage savings
- lancedb/lancedb (Rust, 11,080 stars) - embedded retrieval library
- oramasearch/orama (TypeScript, 10,517 stars) - RAG pipeline in browser

Now I need to pick 3-8 per category for the tables. I'll prioritize:
1. Today's trending projects (with today's stars)
2. High total stars
3. Diversity

Let me build each table:

🔧 AI Infrastructure (I'll pick 6):
1. firecrawl/pdf-inspector (trending, +1582 today) - Rust
2. uber/ADR (trending, +354 today) - Python
3. roboflow/supervision (trending, +146 today) - Python
3. ollama/ollama (177,880 stars) - Go
4. huggingface/transformers (163,378 stars) - Python
5. vllm-project/vllm (88,291 stars) - Python
6. firecrawl/firecrawl (161,818 stars) - TypeScript

🤖 AI Agents / Workflows (I'll pick 8):
1. TencentCloud/TencentDB-Agent-Memory (trending, +1892 today) - TypeScript
2. cloudflare/computer (trending, +891 today) - TypeScript
3. obra/superpowers (trending, +931 today) - Shell
4. esengine/DeepSeek-Reasonix (trending, +747 today) - Go
5. huangruiteng/loopx (trending, +326 today) - Python
6. addyosmani/agent-skills (trending, +226 today) - JavaScript
7. AutoGPT (185,836 stars) -

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*