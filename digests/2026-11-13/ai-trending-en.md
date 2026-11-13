# AI Open Source Trends 2026-11-13

> Sources: GitHub Trending + GitHub Search API | Generated: 2026-11-13 06:14 UTC

---

### Step 1 (Filter): AI-Relevant Selection

From the provided data, I selected projects clearly related to AI/ML. I excluded general developer tools, Node.js runtimes, finance apps, and hardware enablement projects that lack an AI core function.

**Selected AI Projects:**

1.  **openai/codex-security**: AI Security CLI/SDK.
2.  **QwenLM/qwen-code**: Open-source AI coding agent.
3.  **ashhart/TensorFold**: LLM Inference Engine.
4.  **addyosmani/agent-skills**: Engineering skills for AI coding agents.
5.  **meta/astryx**: Design system (labeled AI-relevant due to "agent ready" moniker, though borderline; kept for completeness of "agent ready" trend).
6.  **CopilotKit/OpenBot**: AI coworkers with computers.
7.  **Alishahryar1/free-claude-code**: Free AI code harness.
8.  **ggml-org/llama.cpp**: LLM inference engine.
9.  **GoogleChrome/modern-web-guidance-src**: "Keep your coding agent up to date" – AI relevance confirmed by context.
10. **affaan-m/ECC**: Agent harness performance system.
11. **tensorflow/tensorflow**: Core ML framework.
12. **JuliusBrussee/caveman**: LLM skill/proxy for coding agents.

**Excluded (Non-AI Focus):**
*   `nvm-sh/nvm`: Node version manager.
*   `pookjw/HermesEnabler`: Watch face enablement.
*   `we-promise/sure`: Personal finance app.
*   `nodejs/node`: JavaScript runtime.

***

### Step 2 (Categorize) & Step 3 (Output Report)

#### 1. Today's Highlights
The GitHub trending data for November 13, 2026, reveals a intense focus on AI infrastructure and agent capabilities. The most significant momentum is driving **AI coding assistants**, with `QwenLM/qwen-code` and `addyosmani/agent-skills` leading the charge in terminal-based and skill-based agent development. Simultaneously, the explosion of `ggml-org/llama.cpp` and `ashhart/TensorFold` underscores the community's relentless push for local, high-performance LLM inference across diverse hardware backends like CUDA, Metal, and Vulkan. Furthermore, security and harness optimization remain critical, as seen in the continued rise of `openai/codex-security` and `affaan-m/ECC`, indicating that the ecosystem is maturing towards robust, production-ready deployments rather than just experimental prototypes.

#### 2. Top Projects by Category

**🔧 AI Infrastructure**
*Focus: Frameworks, SDKs, inference engines, dev tools, CLI*

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | :---: | :--- |
| [ggml-org/llama.cpp](https://github.com/ggml-org/llama.cpp) | C++] | 134,688 (+176) | 🆕 first appearance | The definitive standard for LLM inference in C/C++, enabling local execution of large models without GPU dependency. Its first-time appearance here, despite massive lifetime stars, highlights the community's ongoing demand for lightweight, high-throughput inference engines. |
| [ashhart/TensorFold](https://github.com/ashhart/TensorFold) | Zig | 2,007 (+54) | 🆕 first appearance | A specialized LLM inference engine targeting Metal, CUDA, and Vulkan, offering a modern alternative to established runtimes. Its appearance signals a push toward graphics-adjacent hardware acceleration for AI workloads. |
| [openai/codex-security](https://github.com/openai/codex-security) | TypeScript | 12,626 (+643) | +694 since 2026-11-12 | Provides a CLI and TypeScript SDK for finding, validating, and fixing security vulnerabilities in code. The massive daily star gain (+643) reflects the critical industry focus on AI-assisted code safety and compliance. |

**🤖 AI Agents / Workflows**
*Focus: Agent frameworks, automation, multi-agent systems*

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | :---: | :--- |
| [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | TypeScript | 29,959 (+151) | 🆕 first appearance | An open-source AI coding agent designed to live permanently in the terminal. Its first-time trending appearance, coupled with high total stars, marks a significant shift towards open-source competitors to proprietary closed-loop coding agents. |
| [addyosmani/agent-skills](https://github.com/addyosmani/agent-skills) | JavaScript | 116,824 (+816) | +673 since 2026-11-12 | A curated collection of "production-grade engineering skills" intended to elevate the capabilities of AI coding agents. The enormous daily influx (+816) demonstrates strong developer interest in standardizing and upgrading agent competencies. |
| [CopilotKit/OpenBot](https://github.com/CopilotKit/OpenBot) | TypeScript | 11,804 (+298) | +2,142 since 2026-11-02 | Features AI "coworkers" that are each assigned their own dedicated computer, browser, and file system. The massive delta since November 2nd (+2,142) indicates a growing appetite for agents that possess persistent, independent digital existences. |

**🔍 RAG / Knowledge**
*Focus: Vector databases, retrieval-augmented generation, knowledge management*

| Project | Lang | Stars (total / today) | Since last report | Summary |
| :--- | :--- | ---: | :---: | :--- |
| [thedotmack/claude-mem](https://github.com/thedotmack/claude-mem) | TypeScript | 116,636 (+609) | +609 since 2026-11-11 | Provides persistent context across sessions by compressing agent activity with AI and injecting relevant memories back into future contexts. The consistent daily growth (+609) underscores the essential need for long-term memory in autonomous agents. |
| [HKUDS/DeepTutor](https://github.com/HKUDS/DeepTutor) | Python | 58,732 (+578) | +578 since 2026-11-11 | A lifelong personalized tutoring system that leverages AI to provide continuous educational support. Its steady growth reflects the application of RAG and LLMs in the ed-tech vertical. |
| [affaan-m/ECC](https://github.com/affaan-m/ECC) | JavaScript | 302,113 (+577) | +577 since 2026-11-12 | An agent harness performance optimization system focusing on skills, instincts, memory, and security. The sheer volume of total stars (302k) combined with today's gain highlights it as a foundational infrastructure layer for serious AI agent development. |

#### 3. Trend Signal Analysis
Today's data highlights a definitive pivot towards **infrastructure and tooling** over pure model research. The dominance of inference engines like `llama.cpp` and `TensorFold`, alongside the surge in "agent skills" repositories, suggests that the community is currently in the "plumbing" phase of the AI stack—optimizing how models run and how agents interact with the world. The appearance of new players like `qwen-code` and `TensorFold` indicates a diversification of tech stacks, moving beyond Python/CUDA defaults into Zig and TypeScript-centric tooling. The connection to the broader industry is evident in the security focus of `codex-security`, aligning with recent regulatory pressures and enterprise adoption of AI code generation. Critically, the 🆕 first appearances today represent **new entrants** betting on novel architectures or distributions (e.g., local inference, terminal-based agents), whereas 📈 re-appearances like `codex-security` represent **compounding momentum** from established projects that have successfully integrated into developer workflows over time.

#### 4. Community Hot Spots
*   **Local Inference Optimization**: Focus on `ggml-org/llama.cpp` and `TensorFold`. As hardware becomes more distributed, the ability to run LLMs efficiently on CPU, Metal, and Vulkan is becoming the primary bottleneck for developers.
*   **Agent Memory & Persistence**: `thedotmack/claude-mem` and `affaan-m/ECC`. The ability to maintain context and "memory" across separate agent runs is the final piece needed to move from demo-style agents to reliable autonomous workers.
*   **Standardized Agent Skills**: `addyosmani/agent-skills`. The industry is moving towards a Skill Tree model for agents; monitoring this repo will reveal emerging benchmarks and capabilities that define "production-grade" AI behavior.
*   **Open Coding Ecosystems**: `QwenLM/qwen-code` and `CopilotKit/OpenBot`. The battle for the open-source coding agent hub is intensifying, with projects offering different philosophies (terminal-based vs. computer-equipped agents).
*   **AI Security Hardening**: `openai/codex-security`. With code generation moving to the forefront, securing the output and the process is paramount; this project is the de-facto standard for AI-mediated code integrity.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*