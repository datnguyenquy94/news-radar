# AI Open Source Trends 2026-11-22

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-22 06:18 UTC

---

# AI Open Source Trends Report
## 2026-11-22

### Today's Highlights
The AI open-source ecosystem today is dominated by infrastructure and agent tooling. **Firecrawl** leads with the highest daily star surge (+1,006) as it positions itself as the knowledge infrastructure layer for AI agents, offering unified access to 550+ data providers. The trending list reveals a strong split between **agent frameworks** (like Obra's *superpowers* and *CLI-Anything*) and **specialized applications** (such as *Ghost-Downloader-3*'s video clipping and *autoclip*'s social-media repurposing). Notably, **OpenVINO** continues its steady growth (+200) as the go-to C++ toolkit for optimized inference deployment. The appearance of **Elementalsouls/Claude-BugHunter** signals a maturing red-teaming ecosystem around Claude Code, while **Google Labs/stitch-skills** underscores the industry shift toward modular, standardized agent skill libraries.

### Top Projects by Category

#### 🔧 AI Infrastructure
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [firecrawl/firecrawl](https://github.com/firecrawl/firecrawl) | TypeScript | 206,391 (+1006) | +886 since 2026-11-21 | Knowledge infrastructure to make your agents smarter. Search, scrape and access 550+ data providers through one API. Today's +1,006 stars mark its highest single-day surge, reflecting surging demand for retrievable, high-quality training data. |
| [openvinotoolkit/openvino](https://github.com/openvinotoolkit/openvino) | C++ | 11,977 (+200) | +578 since 2026-11-19 | Open source toolkit for optimizing and deploying AI inference. Steady growth continues as developers seek optimized deployment pathways for edge and data-center inference workloads. |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 118,884 (+593) | +593 since 2026-11-19 | Persistent Context Across Sessions for Every Agent. Captures and compresses agent activity with AI, injecting relevant context back into future sessions—addressing the critical memory gap in long-horizon agent workflows. |

#### 🤖 AI Agents / Workflows
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [obra/superpowers](https://github.com/obra/superpowers) | Shell | 323,866 (+883) | +876 since 2026-11-21 | An agentic skills framework & software development methodology that works. The second-highest daily surge today (+883) signals its emergence as a foundational framework for agent orchestration. |
| [HKUDS/CLI-Anything](https://github.com/HKUDS/CLI-Anything) | Python | 62,217 (+769) | +661 since 2026-11-21 | "CLI-Anything: Making ALL Software Agent-Native." Bridges non-native applications into agent workflows via a CLI-Hub, directly enabling automation across legacy and custom tooling. |
| [google-labs-code/stitch-skills](https://github.com/google-labs-code/stitch-skills) | TypeScript | 11,565 (+326) | +752 since 2026-11-20 | A library of Agent Skills designed to work with the Stitch MCP server. Compatibility with coding agents like Claude Code and Gemini CLI highlights the industry pivot toward standardized, plug-and-play skill repositories. |

#### 📦 AI Applications
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [elementalsouls/Claude-BugHunter](https://github.com/elementalsouls/Claude-BugHunter) | Python | 16,396 (+1803) | +1,711 since 2026-11-21 | Claude Code skill bundle for bug hunting and external red-team work. 82 skills, 15 slash commands, and 681 disclosed-report patterns across 24 vulnerability classes—reflecting the maturation of AI-assisted security tooling. |
| [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill) | Python | 72,160 (+560) | +585 since 2026-11-21 | AI agent skill that researches any topic across Reddit, X, YouTube, HN, Polymarket, and the web—then synthesizes a grounded summary. Exemplifies the "research-synthesize" agent pattern gaining traction for competitive and market intelligence. |
| [zhouxiaoka/autoclip](https://github.com/zhouxiaoka/autoclip) | Python | 12,987 (+683) | +632 since 2026-11-21 | Open-source AI video clipping & content repurposing tool. Automatically converts long podcasts/interviews into short-form vertical videos with subtitles and captions for TikTok, Reels, and YouTube Shorts—capturing the creator-AI crossover wave. |

#### 🔍 RAG / Knowledge
| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | ---: | :--- |
| [thedotmack/claude-mem] | TypeScript | 118,884 (+593) | +593 since 2026-11-19 | Persistent Context Across Sessions for Every Agent. (See Infrastructure table) |
| [firecrawl/firecrawl] | TypeScript | 206,391 (+1006) | +886 since 2026-11-21 | (See Infrastructure table) |
| [DietrichGebert/ponytail] | JavaScript | 196,489 (+12,578) | +12,578 since 2026-11-04 | Makes your AI agent think like the laziest senior dev in the room. The best code is the code you never wrote. Holds the largest delta among search results (+12,578), indicating massive community resonance with its "lazy developer" prompting philosophy. |

### Trend Signal Analysis
Today's hot list reveals that **AI infrastructure and agent frameworks** are capturing the bulk of community momentum. Firecrawl's record daily surge (+1,006) and Obra's superpowers (+883) both point to a surging need for scalable data pipelines and orchestration layers as agents become more capable. The dominance of TypeScript-based projects (firecrawl, stitch-skills, claude-mem) alongside Python staples (CLI-Anything, last30days-skill, autoclip) underscores a polyglot ecosystem where glue-code and orchestration are as critical as the models themselves. The high appearance count of first-time entrants—particularly Claude-BugHunter and Ghost-Downloader-3—signals that the community is actively experimenting with vertical AI tooling (security, media processing) rather than merely iterating on general-purpose frameworks. Notably, the absence of new model weight releases today suggests the current wave of interest is oriented toward **tooling, retrieval, and workflow integration** rather than foundational model advances.

### Community Hot Spots
* **Firecrawl** — The +1,006-star surge confirms that developers are prioritizing data access layers; expect this to become the de facto API for agentic web scraping and RAG data ingestion.
* **Obra/superpowers** — With +883 stars, this framework is solidifying as the go-to skills architecture for multi-agent systems; worth monitoring for standardization efforts.
* **Claude-BugHunter** — The +1,803 daily stars and 82-vulnerability-skill bundle indicate a growing ecosystem of AI-red-team tools; a key area for security-focused AI development.
* **CLI-Anything** — Making "ALL Software Agent-Native" via a CLI-Hub; its +769 stars suggest increasing appetite for bridging legacy tooling with modern agent workflows.
* **Ponytail** — Despite not appearing in today's trending list, its +12,578 cumulative delta since early November makes it a quiet dark horse; its "lazy senior dev" philosophy is widely adopted in prompting guides and warrants experimentation.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*