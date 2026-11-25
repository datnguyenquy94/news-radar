# AI Open Source Trends 2026-11-25

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-25 08:03 UTC

---

### AI Open Source Trends Report
**Date:** 2026-11-25

#### Step 1 (Filter)
From the provided data, the following projects are clearly related to AI/ML. General tools, frontend frameworks, games, and non-AI infrastructure were excluded.

#### Step 2 (Categorize)
Projects were grouped into the specified categories based on their primary function and topic tags.

#### Step 3 (Output Report)

##### 1. Today's Highlights
The AI open-source ecosystem today is dominated by **agentic frameworks** and **infrastructure tools** designed to make large language models more actionable and knowledgeable. There is significant momentum in projects that lower the barrier to creating and deploying AI agents, particularly those integrating web search, tool use, and data pipelines. Notably, the "train your own LLM in 2 hours" trend continues to attract massive attention, alongside a surge in tools focused on red-teaming and security for AI code generation.

##### 2. Top Projects by Category

**🔧 AI Infrastructure**
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 209,261 (+991) | +959 since 2026-11-24 | Knowledge infrastructure that makes agents smarter by providing a unified API to search, scrape, and access 550+ data providers, effectively solving the "knowledge access" problem for AI workflows. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | 12,532 (+185) | +555 since 2026-11-22 | A toolkit for optimizing and deploying AI inference, crucial for running models efficiently on diverse hardware including edge devices and CPUs. |
| [ollama/ollama](https://github.com/ollama/ollama) | Go | 188,051 (+574) | +574 since 2026-11-18 | Simplifies getting up and running with a wide variety of popular open-source models (Kimi, GLM, Qwen, etc.) locally, streamlining the development and testing of AI applications. |

**🤖 AI Agents / Workflows**
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 326,074 (+1003) | +613 since 2026-11-24 | An agentic skills framework and software development methodology that provides a structured approach to building autonomous AI agents capable of complex tasks. |
| [CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 65,142 (+1074) | +1,021 since 2026-11-24 | "CLI-Hub" aims to make all software agent-native, providing a centralized interface for AI agents to interact with various command-line tools and services. |
| [last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 74,559 (+703) | +832 since 2026-11-24 | An AI agent skill that synthesizes grounded research summaries across Reddit, X, YouTube, Hacker News, and the web, demonstrating the growing capability of agents to aggregate real-time information. |

**📦 AI Applications**
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [jingyaogong/minimind](https://github.com/jingyaogong/minimind) | Python | 70,552 (+727) | +725 since 2026-11-24 | A tutorial and framework allowing users to train a 64M parameter large language model from scratch in approximately two hours, democratizing LLM training for researchers and enthusiasts. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 21,952 (+1826) | +1,535 since 2026-11-24 | A skill bundle for Claude Code designed for bug hunting and red-team work, featuring 84 skills and 681 disclosed-report patterns across 24 vulnerability classes. |
| [autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 15,723 (+980) | +818 since 2026-11-24 | An open-source AI video clipping tool that automates the repurposing of long-form content (podcasts, courses) into short-form vertical videos for platforms like TikTok and YouTube Shorts. |

**🧠 LLMs / Training**
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [Affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 310,367 (+565) | +565 since 2026-11-24 | An agent harness performance optimization system focusing on skills, instincts, memory, and security for advanced code generation tools like Claude Code and Cursor. |
| [MoneyPrinterTurbo](https://github.com/harry0703/MoneyPrinterTurbo) | Python | 145,570 (+703) | +703 since 2026-11-21 | An automated workflow that generates high-definition short videos from a topic or keyword using AI large models, highlighting the commercial application of generative AI for content creation. |
| [QwenPaw](https://github.com/agentscope-ai/QwenPaw) | Python | 38,187 (+512) | +512 since 2026-11-13 | A personal AI assistant supporting multiple chat apps with easily extensible capabilities, built on the Qwen model, emphasizing ease of deployment and customization. |

**🔍 RAG / Knowledge**
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [volcengine/OpenViking](https://github.com/volcengine/OpenViking) | Python | 42,725 (+510) | +510 since 2026-11-14 | A self-evolving context database for AI agents, unifying agent memory, knowledge retrieval-augmented generation (RAG), and skills in a single system. |
| [qdrant/qdrant](https://github.com/qdrant/qdrant) | Rust | 35,697 (+501) | +501 since 2026-10-23 | A high-performance, massive-scale vector database and search engine essential for implementing Retrieval-Augmented Generation (RAG) at scale. |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 209,261 (+991) | +959 since 2026-11-24 | (Also categorized here) Provides the data infrastructure—search and scraping across 550+ providers—that serves as the foundation for RAG pipelines, enabling agents to retrieve up-to-date external knowledge. |

##### 3. Trend Signal Analysis
Today's data reveals a strong and sustained focus on **AI agent infrastructure** and **lowering the barrier to model deployment and training**. The most explosive attention is directed toward projects that function as "force multipliers" for agents, specifically those addressing the "last mile" problems of knowledge retrieval (Firecrawl, OpenViking, Qdrant) and tool integration (CLI-Anything, Superpowers). The appearance of [jingyaogong/minimind] as a consistent top performer underscores a persistent community desire for efficient, low-cost LLM training methods, moving beyond just consumption to production.

A notable trend is the diversification of tech stacks; while Python dominates the application layer, significant activity is happening in Go ([ollama/ollama]) and Rust ([qdrant/qdrant]) for performance-critical infrastructure. Furthermore, the surge in [elementalsouls/Claude-BugHunter] reflects a maturing concern within the ecosystem regarding AI security and red-teaming, as models become more capable of code generation and autonomous action. The "first appearance" signal is particularly telling today; new entrants like [last30days-skill] and [OpenViking] indicate a wave of startups and independent developers packaging specific, practical agent capabilities for immediate use, rather than waiting for monolithic frameworks to evolve.

##### 4. Community Hot Spots
*   **Firecrawl / Knowledge Infrastructure:** With +991 stars today, Firecrawl is the critical connector for the AI agent ecosystem. Developers should focus here because an agent is only as smart as its data; Firecrawl's unified API to 550+ providers removes the integration friction for search and scraping.
*   **Minimind / Democratized Training:** The continued viral growth of Minimind (+725 since last report) makes it a primary sandbox for experimenting with model architecture and training loops. It is a must-watch for anyone looking to understand the practical limits of training small-scale LLMs from scratch.
*   **Ollama / Local Model Onboarding:** Ollama's +574 star gain solidifies its role as the standard gateway for developers new to open-source LLMs. Its support for a wide array of models makes it the lowest-friction entry point for prototyping AI applications locally.
*   **Agentic Frameworks (Superpowers/CLI-Anything):** The compounding growth of these frameworks signals a shift from experimentation to production-grade agent development. They provide the scaffolding necessary for multi-step reasoning and tool use, which are the next frontiers for LLM capability.
*   **ECC / Performance Optimization:** The optimization focus of ECC, specifically for Claude Code and similar agents, is vital for developers experiencing latency or cost issues in production. Monitoring this project offers insights into making agent workflows more efficient and secure.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*