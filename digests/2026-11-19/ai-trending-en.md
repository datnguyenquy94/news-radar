# AI Open Source Trends 2026-11-19

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-19 06:59 UTC

---

### GitHub AI Open Source Trends Report (2026-11-19)

**Step 1 (Filter):** Repositories unrelated to AI/ML (general frontend frameworks like jQuery/SolidJS, infrastructure tools like AppWrite/OpenVINO without AI focus, and pure historical tools) have been excluded. Projects with primary AI relevance are retained.

**Step 2 (Categorize):** Projects have been grouped into the defined categories based on primary function and topic tags.

---

## 1. Today's Highlights

The AI open-source ecosystem today is dominated by **agentic infrastructure and evaluation frameworks**. `NVIDIA/SkillEvaluator` and `affaan-m/ECC` are seeing explosive daily star growth (+312 and +1,108 respectively), signaling a strong industry shift toward tooling that measures, optimizes, and secures AI agent performance rather than just deploying models. Simultaneously, `google-research/paper-orchestra` demonstrates the maturation of automated AI research workflows, capable of generating full academic papers. The appearance of `affaan-m/ECC` in both trending and topic search underscores the community's focus on making LLMs more efficient and reliable at scale.

## 2. Top Projects by Category

### 🔧 AI Infrastructure
*Projects providing the foundational tools, SDKs, and frameworks for AI development.*

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | 11,399 (+24) | 🆕 first appearance | Intel's open-source toolkit for optimizing and deploying AI inference across hardware, enabling efficient model deployment in production environments. |
| [NVIDIA/SkillEvaluator](https://github.com/NVIDIA/SkillEvaluator) | Python | 3,880 (+312) | 📈 +876 since 2026-11-17 | A multi-tier framework for evaluating AI agent skills and plugins, featuring quality gates, security scanning, and synthetic dataset generation to measure how skills affect agent behavior. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 80,122 (+507) | 📈 +507 since 2026-11-14 | Compresses tool outputs, logs, and RAG chunks before they reach the LLM, reducing token consumption by 20% for coding agents and 60-95% for JSON while maintaining answer accuracy. |

### 🤖 AI Agents / Workflows
*Frameworks, automation systems, and multi-agent orchestration.*

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [trycua/cua](https://github.com/trycua/cua) | Rust | 32,631 (+3,761) | 📈 +3,761 since 2026-10-08 | Provides open-source drivers and cross-OS sandboxes for scaling computer use, offering benchmarks for training, evaluation, and data generation of computer-using agents. |
| [google-research/paper-orchestra](https://github.com/google-research/paper-orchestra) | Python | 4,555 (+1,524) | 📈 +1,171 since 2026-11-18 | A multi-agent framework for automated AI research paper writing, representing a significant step toward fully autonomous scientific discovery pipelines. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 306,752 (+1,108) | 📈 +940 since 2026-11-18 | An agent harness performance optimization system focusing on skills, instincts, memory, and security for code-generation tools like Claude Code and Cursor. |

### 📦 AI Applications
*Specific vertical applications and end-user tools.*

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | --- | ---: | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 203,381 (+951) | 📈 +951 since 2026-11-17 | Knowledge infrastructure that makes agents smarter by providing search, scraping, and access to 550+ data providers through a single API, bridging the gap between LLMs and real-world data. |
| [hugohe3/ppt-master](https://github.com/hugohe3/ppt-master) | Python | 78,401 (+727) | 📈 +727 since 2026-11-17 | AI tool that turns documents or topics into native PowerPoint decks with native shapes, transitions, animations, data-backed charts, and audio narration from speaker notes. |
| [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) | Python | 264,568 (+554) | 📈 +554 since 2026-11-17 | An agent designed to grow with the user, focusing on persistent learning and adaptive skill acquisition over time. |

### 🧠 LLMs / Training
*Model weights, training frameworks, and fine-tuning tools.*

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | --- | ---: | ---: | :--- |
| [langgenius/dify](https://github.com/langgenius/dify) | Python | 161,469 (+507) | 📈 +507 since 2026-11-11 | Collaborative workspace for building Agentic workflows and RICH AI model and tool support, deployable on cloud, VPC, or self-hosted to move prototypes to production. |
| [Shubhamsaboo/awesome-llm-apps](https://github.com/Shubhamsaboo/awesome-llm-apps) | Python | 145,042 (+511) | 📈 +511 since 2026-11-13 | Curated collection of 100+ open-source AI agents, agent skills, and RAG applications serving as a reference for LLM engineering. |
| [JuliusBrussee/caveman](https://github.com/JuliusBrussee/caveman) | Go | 121,369 (+534) | 📈 +534 since 2026-11-17 | A skill + local proxy for coding agents that emphasizes efficiency: "why use many tokens when few token do trick," focusing on shorter answers and smaller tool outputs. |

### 🔍 RAG / Knowledge
*Vector databases, retrieval-augmented generation, and knowledge management.*

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | --- | ---: | ---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 118,291 (+503) | 📈 +503 since 2026-11-17 | Provides persistent context across sessions for agents, compressing everything an agent does and injecting relevant context back into future sessions, compatible with major coding agents. |
| [headroomlabs-ai/headroom](https://github.com/headroomlabs-ai/headroom) | Python | 80,122 (+507) | 📈 +507 since 2026-11-14 | (Also listed in Infrastructure) Compresses RAG chunks and logs to reduce token load, offering 20% fewer tokens for coding agents and 60-95% fewer for JSON. |
| [OpenSPG/KAG](https://github.com/OpenSPG/KAG) | Python | 9,178 | 🆕 first appearance | Logical form-guided reasoning and retrieval framework based on the OpenSPG engine and LLMs, designed to build factual Q&A solutions for professional knowledge bases and overcome traditional RAG vector similarity limitations. |

---

## 3. Trend Signal Analysis

Today's data reveals a definitive move from "model capability" to "agent reliability and infrastructure." The most explosive growth is occurring in the AI Agents and Infrastructure categories, with `trycua/cua` and `affaan-m/ECC` leading in raw star deltas. This suggests developers are prioritizing tooling that solves the "last mile" problems of AI deployment: reducing token costs via compression (`headroomlabs-ai/headroom`), enabling persistent memory (`thedotmack/claude-mem`), and providing rigorous evaluation frameworks (`NVIDIA/SkillEvaluator`). The appearance of `OpenSPG/KAG` as a first-time entrant signals growing interest in logical reasoning and knowledge graphs as a solution to the hallucination and factuality issues plaguing traditional RAG systems. Furthermore, the continued compounding growth of established tools like `affaan-m/ECC` and `langgenius/dify` indicates that the ecosystem is standardizing around mature platforms for workflow orchestration and performance optimization, rather than chasing novel model architectures. The dominance of Python and TypeScript across the board reflects the maturity of the tooling layer, where the focus has shifted from research code to production-grade software engineering for LLM applications.

## 4. Community Hot Spots

*   **Computer Use & Automation:** `trycua/cua` is a critical focus for developers building autonomous agents, as it provides the essential sandbox and benchmarking infrastructure needed to safely deploy agents across different operating systems.
*   **Agent Evaluation & Security:** `NVIDIA/SkillEvaluator` represents the industry's move toward standardized safety and quality gates, making it essential for teams deploying commercial or public-facing AI agents.
*   **Token Efficiency & Compression:** `headroomlabs-ai/headroom` addresses the practical constraint of LLM context windows; its adoption is likely to accelerate as context window costs become a primary operational expense.
*   **Knowledge Graph Reasoning:** `OpenSPG/KAG` is worth watching as a potential alternative to vector-based RAG for domains requiring strict logical reasoning and factual accuracy, such as legal or medical tools.
*   **Full-Stack Agent Platforms:** `langgenius/dify` and `affaan-m/ECC` together represent a full-stack trend: Dify provides the collaborative workspace and RAG pipeline builder, while ECC optimizes the underlying agent performance, indicating a complete maturity of the AI development lifecycle toolchain.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*