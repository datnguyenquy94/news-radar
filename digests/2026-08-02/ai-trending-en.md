# AI Open Source Trends 2026-08-02

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-08-02 03:36 UTC

---

Let me analyze the data and create the structured report.

First, I need to filter for AI-related projects from both the trending list and topic search results.

From the Trending List (15 repos), let me identify AI-related ones:
1. microsoft/AI-For-Beginners - AI education ✓
2. paperswithbacktest/awesome-systematic-trading - Trading, not core AI ✗
3. usekaneo/kaneo - Project management ✗
4. zhaoxuya520/reverse-skill - Security/reverse engineering with AI coding agents ✓ (AI-assisted)
5. microsoft/generative-ai-for-beginners - Generative AI education ✓
6. github/copilot-sdk - GitHub Copilot SDK ✓
7. github/gh-stack - Git tooling ✗
8. huggingface/speech-to-speech - Voice agents ✓
9. abus-aikorea/voice-pro - TTS/Voice cloning ✓
10. iv-org/invidious - YouTube frontend ✗
11. ansible/ansible - IT automation ✗
12. microsoft/TRELLIS.2 - 3D Generation ✓
13. TencentCloud/TencentDB-Agent-Memory - Agent memory ✓
14. NomaDamas/k-skill - Korean skills for agents ✓
15. bytedance/deer-flow - SuperAgent framework ✓

From Topic Search (79 repos), all appear to be AI-related based on their topics (ai-agent, ml, vector-db, llm, rag, llm-model).

Now I need to categorize all AI-relevant projects into the 5 categories:
- 🔧 AI Infrastructure
- 🤖 AI Agents / Workflows
- 📦 AI Applications
- 🧠 LLMs / Training
- 🔍 RAG / Knowledge

Let me go through each project and categorize:

**From Trending List (AI-relevant):**
1. microsoft/AI-For-Beginners - Education, could be AI Applications or Infrastructure? It's a curriculum. Let's put in AI Applications (educational app)
2. zhaoxuya520/reverse-skill - Security research with AI coding agents - AI Applications (vertical)
3. microsoft/generative-ai-for-beginners - Education - AI Applications
4. github/copilot-sdk - SDK for Copilot - AI Infrastructure
5. huggingface/speech-to-speech - Voice agents - AI Applications
6. abus-aikorea/voice-pro - TTS/Voice cloning - AI Applications
7. microsoft/TRELLIS.2 - 3D Generation - AI Applications (generative model)
8. TencentCloud/TencentDB-Agent-Memory - Agent memory hub - AI Infrastructure / AI Agents
9. NomaDamas/k-skill - Skills for agents - AI Agents
10. bytedance/deer-flow - SuperAgent framework - AI Agents

**From Topic Search:**

Topic: ai-agent
1. NousResearch/hermes-agent - Agent framework - AI Agents
2. shareAI-lab/learn-claude-code - Agent harness - AI Agents
3. santifer/career-ops - Job search agent - AI Applications
4. ZhuLinsen/daily_stock_analysis - Stock analysis agent - AI Applications
5. CherryHQ/cherry-studio - AI productivity studio - AI Applications
6. HKUDS/nanobot - Personal AI agent framework - AI Agents
7. zhayujie/CowAgent - AI assistant & Agent Harness - AI Agents
8. siyuan-note/siyuan - Knowledge management with AI - AI Applications / RAG
9. hugohe3/ppt-master - PPT generation - AI Applications
10. CopilotKit/CopilotKit - Frontend stack for agents - AI Infrastructure
11. iOfficeAI/AionUi - Cowork app for agents - AI Applications
12. Gitlawb/openclaude - Runs anywhere - AI Infrastructure
13. googleworkspace/cli - Google Workspace CLI with AI skills - AI Infrastructure
14. bojieli/ai-agent-book - Book on AI agents - Educational, maybe AI Applications
15. HKUDS/Vibe-Trading - Trading agent - AI Applications

Topic: ml
16. tensorflow/tensorflow - ML framework - AI Infrastructure
17. f/prompts.chat - Prompts collection - AI Applications (prompt engineering)
18. huggingface/transformers - Model framework - AI Infrastructure
19. pytorch/pytorch - ML framework - AI Infrastructure
20. rasbt/LLMs-from-scratch - Educational - AI Applications
21. microsoft/ML-For-Beginners - Educational - AI Applications
22. netdata/netdata - Observability with AI - AI Applications
23. tesseract-ocr/tesseract - OCR - AI Applications
24. OpenBB-finance/OpenBB - Financial data platform for AI agents - AI Applications
25. scikit-learn/scikit-learn - ML library - AI Infrastructure
26. keras-team/keras - Deep learning - AI Infrastructure
27. ultralytics/ultralytics - YOLO models - AI Applications / LLMs
28. JuliaLang/julia - Programming language - Infrastructure (but not primarily AI)
29. roboflow/supervision - Computer vision tools - AI Infrastructure
30. apache/airflow - Workflow orchestration - Infrastructure (not primarily AI)

Topic: vector-db
31. Mintplex-Labs/anything-llm - Local-first agent experience - AI Agents / RAG
32. meilisearch/meilisearch - Search engine - RAG / Infrastructure
33. run-llama/llama_index - Document agent and OCR - RAG
34. milvus-io/milvus - Vector database - RAG / Infrastructure
35. VectifyAI/PageIndex - Document index for RAG - RAG
36. qdrant/qdrant - Vector database - RAG / Infrastructure
37. topoteretes/cognee - AI memory platform - RAG / AI Agents
38. NirDiamant/RAG_Techniques - RAG techniques - RAG
39. weaviate/weaviate - Vector database - RAG / Infrastructure
40. alibaba/zvec - Vector database - RAG / Infrastructure
41. neuml/txtai - AI framework for semantic search - RAG
42. langchain4j/langchain4j - Java LLM library - AI Infrastructure
43. StarTrail-org/LEANN - RAG with storage savings - RAG
44. lancedb/lancedb - Embedded retrieval library - RAG
45. oceanbase/oceanbase - Distributed database for AI - Infrastructure

Topic: llm
46. affaan-m/ECC - Agent harness optimization - AI Agents
47. Significant-Gravitas/AutoGPT - Agent framework - AI Agents
48. ollama/ollama - Model serving - AI Infrastructure / LLMs
49. firecrawl/firecrawl - Web scraping for LLMs - AI Infrastructure
50. langgenius/dify - Agentic workflows, RAG - AI Agents
51. open-webui/open-webui - AI Interface - AI Applications
52. langchain-ai/langchain - Agent engineering platform - AI Agents
53. browser-use/browser-use - Browser automation for agents - AI Agents
54. harry0703/MoneyPrinterTurbo - Video generation - AI Applications
55. Graphify-Labs/graphify - Codebase to knowledge graph - AI Applications / RAG
56. vllm-project/vllm - Inference engine - AI Infrastructure / LLMs
57. Shubhamsaboo/awesome-llm-apps - Collection of apps - AI Applications

Topic: rag
58. thedotmack/claude-mem - Persistent context for agents - RAG / AI Agents
59. infiniflow/ragflow - RAG engine - RAG
60. datawhalechina/hello-agents - Tutorial on agents - Educational - AI Applications
61. headroomlabs-ai/headroom - Token compression for RAG - RAG / Infrastructure
62. mem0ai/mem0 - Memory layer for agents - RAG / AI Agents
63. FlowiseAI/Flowise - Visual AI agents - AI Agents
64. jeecgboot/JeecgBoot - AI low-code platform - AI Applications

Topic: llm-model
65. 0xPlaygrounds/rig - Rust LLM framework - AI Infrastructure / LLMs
66. open-compass/opencompass - LLM evaluation - AI Infrastructure / LLMs
67. skyzh/tiny-llm - LLM inference course - Educational - AI Applications
68. genieincodebottle/generative-ai - Generative AI resources - Educational - AI Applications
69. thinkwee/AwesomeOPD - On-Policy Distillation - LLMs
70. chrisliu298/awesome-llm-unlearning - LLM unlearning - LLMs
71. RiccardoBiosas/awesome-MLSecOps - MLSecOps - AI Infrastructure (security)
72. Event-AHU/Medical_Image_Analysis - Medical imaging - AI Applications
73. kennethleungty/Finance-LLMs - Finance LLM use cases - AI Applications
74. AarambhDevHub/aarambh-studio - Rust LLM from scratch - LLMs
75. LancerLab/croqtile - AI-native Kernel DSL - LLMs / Infrastructure
76. R-D-BioTech-Alaska/Qelm - Quantum LLM - LLMs
77. tsinghua-fib-lab/SmartAgent - Embodied agent - AI Agents
78. ai-glimpse/toyllm - Learning LLM - Educational - AI Applications
79. AmirMotefaker/Create-your-own-ChatGPT - Educational - AI Applications

Now I need to select top projects per category (3-8 per category) and create tables. I should prioritize:
1. Projects from today's trending list (they have "today's stars" data)
2. High-star projects from topic search
3. Good representation across categories

Let me organize by category:

**🔧 AI Infrastructure** (frameworks, SDKs, inference engines, dev tools, CLI):
- github/copilot-sdk (trending, +142 today) - SDK for Copilot
- huggingface/transformers (163,232 stars) - Model framework
- pytorch/pytorch (102,116 stars) - ML framework
- tensorflow/tensorflow (196,653 stars) - ML framework
- vllm-project/vllm (87,891 stars) - Inference engine
- ollama/ollama (177,534 stars) - Model serving
- langchain-ai/langchain (143,193 stars) - Agent engineering platform
- firecrawl/firecrawl (159,138 stars) - Web scraping for LLMs
- CopilotKit/CopilotKit (36,401 stars) - Frontend stack for agents
- roboflow/supervision (48,535 stars) - CV tools
- scikit-learn/scikit-learn (66,851 stars) - ML library
- keras-team/keras (64,210 stars) - Deep learning
- langchain4j/langchain4j (12,759 stars) - Java LLM library
- 0xPlaygrounds/rig (8,131 stars) - Rust LLM framework
- open-compass/opencompass (7,256 stars) - LLM evaluation
- RiccardoBiosas/awesome-MLSecOps (443 stars) - MLSecOps
- LancerLab/croqtile (34 stars) - AI-native Kernel DSL
- googleworkspace/cli (30,141 stars) - Google Workspace CLI with AI skills
- Gitlawb/openclaude (30,475 stars) - Runs anywhere

**🤖 AI Agents / Workflows** (agent frameworks, automation, multi-agent systems):
- bytedance/deer-flow (trending, +209 today) - SuperAgent framework
- TencentCloud/TencentDB-Agent-Memory (trending, +227 today) - Agent memory hub
- NomaDamas/k-skill (trending, +53 today) - Korean skills for agents
- NousResearch/hermes-agent (223,883 stars) - Agent that grows with you
- langgenius/dify (151,020 stars) - Agentic workflows, RAG
- langchain-ai/langchain (143,193 stars) - Agent engineering platform
- AutoGPT (185,754 stars) - Agent framework
- browser-use/browser-use (107,529 stars) - Browser automation for agents
- affaan-m/ECC (236,855 stars) - Agent harness optimization
- FlowiseAI/Flowise (55,090 stars) - Visual AI agents
- HKUDS/nanobot (46,505 stars) - Personal AI agent framework
- zhayujie/CowAgent (46,265 stars) - AI assistant & Agent Harness
- shareAI-lab/learn-claude-code (72,937 stars) - Agent harness
- iOfficeAI/AionUi (31,242 stars) - Cowork app for agents
- Mintplex-Labs/anything-llm (64,216 stars) - Local-first agent experience
- topoteretes/cognee (29,676 stars) - AI memory platform
- mem0ai/mem0 (62,286 stars) - Memory layer for agents
- thedotmack/claude-mem (89,269 stars) - Persistent context for agents
- tsinghua-fib-lab/SmartAgent (27 stars) - Embodied agent

**📦 AI Applications** (specific apps, vertical solutions):
- microsoft/AI-For-Beginners (trending, +949 today) - AI education
- microsoft/generative-ai-for-beginners (trending, +108 today) - Generative AI education
- zhaoxuya520/reverse-skill (trending, +1320 today) - Security research with AI
- huggingface/speech-to-speech (trending, +442 today) - Voice agents
- abus-aikorea/voice-pro (trending, +58 today) - TTS/Voice cloning
- microsoft/TRELLIS.2 (trending, +107 today) - 3D Generation
- CherryHQ/cherry-studio (49,255 stars) - AI productivity studio
- siyuan-note/siyuan (45,565 stars) - Knowledge management
- hugohe3/ppt-master (42,411 stars) - PPT generation
- santifer/career-ops (62,480 stars) - Job search agent
- ZhuLinsen/daily_stock_analysis (59,796 stars) - Stock analysis agent
- open-webui/open-webui (147,556 stars) - AI Interface
- harry0703/MoneyPrinterTurbo (101,031 stars) - Video generation
- Graphify-Labs/graphify (100,356 stars) - Codebase to knowledge graph
- Shubhamsaboo/awesome-llm-apps (129,617 stars) - Collection of apps
- f/prompts.chat (166,606 stars) - Prompts collection
- rasbt/LLMs-from-scratch (100,320 stars) - Educational
- microsoft/ML-For-Beginners (88,864 stars) - Educational
- netdata/netdata (79,976 stars) - Observability
- tesseract-ocr/tesseract (75,676 stars) - OCR
- OpenBB-finance/OpenBB (71,271 stars) - Financial data platform
- ultralytics/ultralytics (60,113 stars) - YOLO models
- jeecgboot/JeecgBoot (47,229 stars) - AI low-code platform
- datawhalechina/hello-agents (70,008 stars) - Tutorial on agents
- bojieli/ai-agent-book (29,281 stars) - Book on AI agents
- HKUDS/Vibe-Trading (29,190 stars) - Trading agent
- skyzh/tiny-llm (4,429 stars) - LLM inference course
- genieincodebottle/generative-ai (2,580 stars) - Generative AI resources
- Event-AHU/Medical_Image_Analysis (237 stars) - Medical imaging
- kennethleungty/Finance-LLMs (133 stars) - Finance LLM use cases
- ai-glimpse/toyllm (25 stars) - Learning LLM
- AmirMotefaker/Create-your-own-ChatGPT (23 stars) - Educational

**🧠 LLMs / Training** (model weights, training frameworks, fine-tuning tools):
- ollama/ollama (177,534 stars) - Model serving
- vllm-project/vllm (87,891 stars) - Inference engine
- huggingface/transformers (163,232 stars) - Model framework
- pytorch/pytorch (102,116 stars) - ML framework
- tensorflow/tensorflow (196,653 stars) - ML framework
- ultralytics/ultralytics (60,113 stars) - YOLO models
- AarambhDevHub/aarambh-studio (56 stars) - Rust LLM from scratch
- thinkwee/AwesomeOPD (784 stars) - On-Policy Distillation
- chrisliu298/awesome-llm-unlearning (616 stars) - LLM unlearning
- R-D-BioTech-Alaska/Qelm (27 stars) - Quantum LLM
- LancerLab/croqtile (34 stars) - AI-native Kernel DSL
- 0xPlaygrounds/rig (8,131 stars) - Rust LLM framework

**🔍 RAG / Knowledge** (vector databases, retrieval-augmented generation, knowledge management):
- run-llama/llama_index (51,285 stars) - Document agent and OCR
- milvus-io/milvus (45,457 stars) - Vector database
- qdrant/qdrant (33,713 stars) - Vector database
- weaviate/weaviate (16,678 stars) - Vector database
- meilisearch/meilisearch (58,819 stars) - Search engine
- Mintplex-Labs/anything-llm (64,216 stars) - Local-first agent experience (also agents)
- VectifyAI/PageIndex (34,953 stars) - Document index for RAG
- topoteretes/cognee (29,676 stars) - AI memory platform
- NirDiamant/RAG_Techniques (28,905 stars) - RAG techniques
- infiniflow/ragflow (86,582 stars) - RAG engine
- headroomlabs-ai/headroom (63,907 stars) - Token compression for RAG
- mem0ai/mem0 (62,286 stars) - Memory layer for agents
- thedotmack/claude-mem (89,269 stars) - Persistent context for agents
- alibaba/zvec (15,355 stars) - Vector database
- neuml/txtai (12,774 stars) - AI framework for semantic search
- StarTrail-org/LEANN (12,758 stars) - RAG with storage savings
- lancedb/lancedb (11,052 stars) - Embedded retrieval library
- oceanbase/oceanbase (10,230 stars) - Distributed database for AI
- Graphify-Labs/graphify (100,356 stars) - Codebase to knowledge graph

Now I need to select 3-8 projects per category. I'll prioritize:
1. Projects from today's trending list (with today's stars data)
2. High-star projects from topic search
3. Diversity of sub-categories

Let me build the tables:

**🔧 AI Infrastructure** - Select 6-8:
1. github/copilot-sdk (trending, +142 today) - Java - 0 (+142) - Multi-platform SDK for integrating GitHub Copilot Agent into apps and services
2. ollama/ollama (177,534) - Go - 177,534 - Get up and running with various models locally
3. vllm-project/vllm (87,891) - Python - 87,891 - High-throughput inference engine for LLMs
4. huggingface/transformers (163,232) - Python - 163,232 - Model-definition framework for SOTA ML models
5. pytorch/pytorch (102,116) - Python - 102,116 - Tensors and dynamic neural networks with GPU acceleration
6. firecrawl/firecrawl (159,138) - TypeScript - 159,138 - API to search, scrape, and interact with web at scale
7. langchain-ai/langchain (143,193) - Python - 143,193 - Agent engineering platform
8. CopilotKit/CopilotKit (36,401) - TypeScript - 36,401 - Frontend stack for agents & generative UI

**🤖 AI Agents / Workflows** - Select 6-8:
1. bytedance/deer-flow (trending, +209 today) - Python - 0 (+209) - Long-horizon SuperAgent harness with sandboxes, memories, tools, skills
2. TencentCloud/TencentDB-Agent-Memory (trending, +227 today) - TypeScript - 0 (+227) - Team-level memory hub for AI Agents with four reusable memory assets
3. NousResearch/hermes-agent (223,883) - Python - 223,883 - Agent that grows with you
4. langgenius/dify (151,020) - TypeScript - 151,020 - Build agentic workflows, RAG pipelines on collaborative workspace
5. AutoGPT (185,754) - Python - 185,754 - Vision of accessible AI for everyone
6. browser-use/browser-use (107,529) - Python - 107,529 - Make websites accessible for AI agents
7. affaan-m/ECC (236,855) - JavaScript - 236,855 - Agent harness performance optimization system
8. FlowiseAI/Flowise (55,090) - TypeScript - 55,090 - Build AI agents visually

**📦 AI Applications** - Select 6-8:
1. microsoft/AI-For-Beginners (trending, +949 today) - Jupyter Notebook - 0 (+949) - 12 weeks, 24 lessons AI curriculum for all
2. zhaoxuya520/reverse-skill (trending, +1320 today) - PowerShell - 0 (+1320) - Reverse engineering/penetration testing skill router with AI-powered routing
3. huggingface/speech-to-speech (trending, +442 today) - Python - 0 (+442) - Build local voice agents with open-source models
4. microsoft/TRELLIS.2 (trending, +107 today) - Python - 0 (+107) - Native and compact structured latents for 3D generation
5. open-webui/open-webui (147,556) - Python - 147,556 - User-friendly AI interface supporting Ollama, OpenAI API
6. harry0703/MoneyPrinterTurbo (101,031) - Python - 101,031 - Generate HD short videos from topic/keyword with automated AI workflow
7. CherryHQ/cherry-studio (49,255) - TypeScript - 49,255 - AI productivity studio with smart chat, autonomous agents, 300+ assistants
8. Graphify-Labs/graphify (100,356) - Python - 100,356 - Turn codebase into queryable knowledge graph for AI coding clients

**🧠 LLMs / Training** - Select 4-6:
1. ollama/ollama (177,534) - Go - 177,534 - Run Kimi-K2.6, GLM-5.2, DeepSeek, Qwen, Gemma and other models locally
2. vllm-project/vllm (87,891) - Python - 87,891 - High-throughput memory-efficient inference and serving engine for LLMs
3. huggingface/transformers (163,232) - Python - 163,232 - Model-definition framework for SOTA models in text, vision, audio, multimodal
4. ultralytics/ultralytics (60,113) - Python - 60,113 - YOLO26, YOLO11, YOLOv8 for detection, segmentation, classification, pose, tracking
5. AarambhDevHub/aarambh-studio (56) - Rust - 56 - Decoder-only LLM built from scratch in pure Rust using Candle
6. 0xPlaygrounds/rig (8,131) - Rust - 8,131 - Build modular and scalable LLM applications in Rust

**🔍 RAG / Knowledge** - Select 6-8:
1. infiniflow/ragflow (86,582) - Go - 86,582 - Leading open-source RAG engine fusing RAG with agent capabilities
2. thedotmack/claude-mem (89,269) - JavaScript - 89,269 - Persistent context across sessions for every agent
3. run-llama/llama_index (51,285)

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*