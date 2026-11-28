# AI Open Source Trends 2026-11-28

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-28 07:25 UTC

---

Here is the structured AI Open Source Trends Report based on the 2026-11-28 data.

### Step 1 (Filter) & Step 2 (Categorize)
After filtering for AI relevance and grouping by category, the projects are distributed as follows. Projects appearing in *both* the Trending List and the Topic Search are noted.

**AI Infrastructure**
*   `firecrawl/firecrawl` (Topic Search, Infrastructure)
*   `HKUDS/CLI-Anything` (Infrastructure/CLI)
*   `google-labs-code/stitch-skills` (Framework/Integration)

**AI Agents / Workflows**
*   `obra/superpowers` (Agent Framework)
*   `elementalsouls/Claude-BugHunter` (Agent Skill Bundle)
*   `mvanhorn/last30days-skill` (Agent Skill)
*   `affaan-m/ECC` (Agent Optimization)
*   `HKUDS/Vibe-Trading` (Agent Application)
*   `TauricResearch/TradingAgents` (Agent Framework)
*   `hugohe3/ppt-master` (Agent Application)

**RAG / Knowledge**
*   `Graphify-Labs/graphify` (Knowledge Graph)
*   `langchain4j/langchain4j` (Vector DB / Framework)

**AI Applications**
*   `zhouxiaoka/autoclip` (Video Clipping Application)
*   `toeverything/AFFiNE` (Knowledge Base Application)
*   `DietrichGebert/ponytail` (Code Generation Agent)
*   `ZhuLinsen/daily_stock_analysis` (Stock Analysis Application)
*   `hugohe3/ppt-master` (Presentation Application)

---

### 1. Today's Highlights
The AI open-source momentum today is dominated by **agentic frameworks and infrastructure tooling**. The trending list is led by `obra/superpowers` and `firecrawl/firecrawl`, both surpassing 800 new stars, signaling a strong community focus on building reusable skill sets and knowledge pipelines for autonomous agents. Notably, `elementalsouls/Claude-BugHunter` leverages the latest Claude Code capabilities for red-teaming, reflecting the growing intersection of AI security and development workflows. Meanwhile, the Topic Search highlights a surge in domain-specific agents, particularly in finance and stock analysis, indicating a shift from general-purpose tools to vertical AI solutions.

### 2. Top Projects by Category

#### 🔧 AI Infrastructure
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 211,852 (+822) | +671 since 2026-11-27 | Knowledge infrastructure platform that provides a unified API to search and scrape 550+ data providers, aiming to make AI agents "smarter" by bridging the gap between web data and LLM context. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 67,133 (+666) | +545 since 2026-11-27 | A "CLI-Hub" designed to make all software agent-native, effectively creating a centralized command center for interacting with various tools and models via a command-line interface. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 13,665 (+311) | +572 since 2026-11-26 | A library of Agent Skills adhering to the Agent Skills open standard, designed for compatibility with major coding agents like Antigravity, Gemini CLI, and Claude Code, facilitating interoperability. |

#### 🤖 AI Agents / Workflows
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 328,520 (+922) | +772 since 2026-11-27 | An agentic skills framework and software development methodology that provides a structured approach to building and composing autonomous AI agents for complex tasks. |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 26,447 (+1608) | +1,373 since 2026-11-27 | A curated "skill bundle" for Claude Code containing 85 skills and 16 slash commands specifically for bug hunting and red-team work, featuring 681 disclosed report patterns across 24 vulnerability classes. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 76,483 (+675) | +503 since 2026-11-27 | An AI agent skill that researches a topic across Reddit, X, YouTube, HN, Polymarket, and the web, synthesizing a grounded summary, demonstrating the growing demand for multi-source synthesis tools. |

#### 🔍 RAG / Knowledge
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | ---: | ---: | ---: | :--- |
| [Graphify-Labs/graphify](https://github.com/Graphify-Labs/graphify) | Python | 154,345 (+833) | +833 since 2026-11-26 | Turns any codebase (with docs, SQL, configs, PDFs) into a queryable knowledge graph using deterministic AST parsing, offering a local, vector-store-free alternative for RAG and codebase comprehension. |
| [langchain4j/langchain4j](https://github.com/langchain4j/langchain4j) | Java | 13,453 (+501) | +501 since 2026-08-26 | The idiomatic Java library for building LLM-powered applications, offering a unified API for tool calling, agents, and RAG, with deep integration into enterprise frameworks like Spring Boot and Quarkus. |

#### 📦 AI Applications
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | ---: | ---: | ---: | :--- |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 17,731 (+718) | +502 since 2026-11-27 | A local-first, open-source alternative to OpusClip that automates AI video clipping, generating shorts, subtitles, and captions for platforms like TikTok and YouTube Shorts without subscriptions. |
| [toeverything/AFFiNE](https://github.com/toeverything/AFFiNE) | TypeScript | 79,573 (+474) | +915 since 2026-11-26 | A privacy-first, next-generation knowledge base that combines planning, sorting, and creating, positioning itself as an open-source alternative to Notion and Miro. |
| [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail) | JavaScript | 200,300 (+752) | +752 since 2026-11-27 | A tool that makes AI agents "think like the laziest senior dev," automating code generation and refactoring to minimize the code developers actually need to write. |

---

### 3. Trend Signal Analysis
Today's data reveals a clear pivot toward **agentic infrastructure and domain-specific workflows**. The most explosive growth is seen in projects that function as "force multipliers" for AI agents—specifically `firecrawl/firecrawl` for data ingestion and `obra/superpowers` for skill composition. The appearance of `elementalsouls/Claude-BugHunter` with a massive +1,373 star delta underscores the rapid maturation of AI coding tools for security use cases, likely spurred by the increased capabilities of Claude 3.5 Sonnet. Furthermore, the persistence of projects like `firecrawl` and `ponytail` in the top tiers demonstrates the "compounding" effect: these are not one-hit wonders but platforms that have integrated into developers' core stacks and continue to accumulate value. The emergence of `stitch-skills` also signals a push for standardized "Agent Skills" APIs, moving the ecosystem away towards modular, interchangeable components rather than monolithic frameworks.

### 4. Community Hot Spots
*   **Standardized Agent Skills:** The rise of `stitch-skills` and the open standard approach indicates developers are seeking ways to decouple agent capabilities from specific LLM providers, ensuring longevity and compatibility.
*   **AI-Powered Media Production:** `autoclip` represents a strong trend of local-first AI tools usurping subscription-based SaaS tools for video editing, appealing to users prioritizing privacy and cost-efficiency.
*   **Knowledge Graph over Vector Stores:** `graphify` is gaining traction as a deterministic alternative to vector-based RAG, appealing to users frustrated by hallucinations and embedding costs in codebase reasoning.
*   **Red-Teaming for Code:** The viral success of `Claude-BugHunter` suggests a growing community focus on using advanced models not just for creation, but for the active auditing and security hardening of codebases.
*   **Enterprise Java LLM Integration:** The continued growth of `langchain4j` highlights that the JVM remains a significant, stable platform for enterprise AI deployment, particularly as companies modernize legacy Spring Boot architectures.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*