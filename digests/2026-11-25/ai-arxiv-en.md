# ArXiv AI Research Digest 2026-11-25

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-25 08:03 UTC

---

### Today's Highlights

November 24, 2026, marked a productive day on ArXiv with 50 new AI papers spanning robotics, multimodality, and foundational model optimization. A dominant theme was **efficiency and robustness**: from Shifter Quantization enabling native integer computation to Draft Calibration for Speculative Decoding accelerating LLM serving. Simultaneously, there was significant progress in **embodied AI and robotics**, with works like OmniAct addressing policy transfer across embodiments and Embodied AI Fails the Mirror Test revealing critical failure modes. Finally, the convergence of **LLMs with structured reasoning and tool use** was evident in papers like CoT-Proxy and LEGOSpec, which focus on distilling long-horizon reasoning and designing efficient speculative decoding frameworks.

### Key Papers

#### 🧠 Large Language Models
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| **[Draft Calibration for Speculative Decoding](http://arxiv.org/abs/2611.33111v1)** | Yuxing Liu, Wei Zuo, Walid Krichene et al. | Proposes a method to accelerate LLM inference by matching draft model distributions to the target model, significantly improving compute utilization during speculative decoding. It matters because it offers a practical path to deploying larger models at lower latency. | 
| **[A Bias in Disguise](http://arxiv.org/abs/2611.33133v1)** | Hussamuddin Syed | Investigates how tiny gradient edits can disrupt thinking loops in small LLM models, contrasting their fragility with the resilience of frontier models to weight edits. It matters as it exposes vulnerabilities in the reasoning capabilities of compact models. |
| **[CoT-Proxy: Cross-Format Transfer for Distilling Long-Horizon Policies](http://arxiv.org/abs/2611.33148v1)** | Dawid J. Kopiczko, Tijmen Blankevoort, Yuki M. Asano | Introduces a method to distill long-horizon reasoning policies by transferring chain-of-thought trajectories from a stronger teacher model. It matters because it provides a cheaper alternative to reinforcement learning for creating capable reasoning agents. |

#### 🤖 Agents & Reasoning
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| **[MetaFORGE](http://arxiv.org/abs/2611.33119v1)** | Scott Piersall, Yang Gao, Shenyang Liu et al. | Presents a meta-learning framework that iteratively optimizes persistent natural-language skill specifications for parallel code generation. It matters as it addresses the critical need for reliable and performant AI-generated parallel computing instructions. |
| **[Delegent: A Multi-Agent Harness](http://arxiv.org/abs/2611.33098v1)** | Lingwei Gu, Jimmy Lin | Proposes a harness that delegates easy subtasks to smaller models while keeping complex tasks to frontier models, reducing costs without sacrificing performance. It matters because it offers a scalable architecture for deploying expensive LLMs in practical applications. |
| **[Can a Frontier LLM Repair a Quantized Network](http://arxiv.org/abs/2611.33031v1)** | Steffen Urban | Explores whether large LLMs can perform tool-free weight-space programming to repair quantized neural networks. It matters as it investigates the potential of LLMs as meta-optimizers for model compression. |

#### 🔧 Methods & Frameworks
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| **[Shifter Quantization](http://arxiv.org/abs/2611.33080v1)** | Yufeng Huang | Introduces a new quantization method (SQ) that reconstructs native-width integer computation, improving accuracy at low bit widths over traditional groupwise quantization. It matters because it enables more efficient GPU inference for LLMs without the usual accuracy trade-offs. |
| **[LEGOSpec: A Composable Framework for Speculative Draft](http://arxiv.org/abs/2611.33004v1)** | Hanzhen Wang, Jiaming Xu, Guohao Dai | Presents a modular framework for speculative decoding design and training, allowing systematic evaluation of component effects. It matters as it brings methodological clarity to the rapidly evolving LLM acceleration space. |
| **[SAG-Mem-1.0 Technical Report](http://arxiv.org/abs/2611.33124v1)** | Yuchao Wu, XingCheng Liang, Xuanze Wang et al. | Introduces a long-term conversational memory system capable of retrieving complementary facts scattered across sessions with limited similarity to the query. It matters because it tackles the critical bottleneck of memory retrieval in extended LLM interactions. |

#### 📊 Applications
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| **[AIChipBench: Benchmarking LLM Agents](http://arxiv.org/abs/2611.33093v1)** | Guangyuan Wang, Chengran Li, Minchen Luo et al. | Benchmarks LLM agents for automated AI accelerator design, addressing the challenge of state corruption in hardware design. It matters as it provides a much-needed standardized benchmark for AI-driven chip design. |
| **[CAPER: PartGround and PlanRefine](http://arxiv.org/abs/2611.32986v1)** | Hanzhao Xi, Zhonghao Li, Suxuan Liu et al. | Proposes a framework for reliable manual-guided robotic assembly planning, addressing part identity confusion and inconsistency in procedural generation. It matters because it improves the reliability of robot task planning from human instructions. |
| **[When Repair Accuracy Misleads](http://arxiv.org/abs/2611.32982v1)** | Ang Qi, Yue Wang | Investigates the pitfalls of fine-tuning VLMs on their own failures, showing that accuracy on mined failures is a misleading metric. It matters as it provides a critical reality check for VLM improvement pipelines. |

### Research Trend Signal

The November 24, 2026, submissions reveal a maturing AI landscape shifting from pure scaling to **optimization and reliability**. A clear trend is the push for **efficient inference**, evidenced by Shifter Quantization and the multiple papers on Speculative Decoding (Draft Calibration, LEGOSpec), all aiming to reduce the computational cost of serving large models. Concurrently, there is a growing focus on **robustness and safety**, seen in "A Bias in Disguise" examining thinking loops and "When Repair Accuracy Misleads" cautioning against naive fine-tuning strategies. Furthermore, the embodied AI sector is grappling with **sim-to-real transfer and perception failures**, as highlighted by OmniAct and the "Mirror Test" paper, indicating that making robots adaptable and perceptually grounded remains a difficult open challenge.

### Worth Deep Reading

1.  **Draft Calibration for Speculative Decoding** (arXiv:2611.33111v1): This paper is essential reading for anyone deploying LLMs in production. It moves beyond anecdotal speedups to provide a rigorous framework for matching draft and target model distributions, offering a concrete pathway to significant latency reductions in LLM serving.
2.  **CoT-Proxy: Cross-Format Transfer for Distilling Long-Horizon Policies** (arXiv:2611.33148v1): A critical study for the agentic AI community. It challenges the status quo of reinforcement learning by demonstrating that fine-tuning on chain-of-thought trajectories can effectively distill long-horizon reasoning, potentially making powerful agent training more accessible and less compute-intensive.
3.  **A Bias in Disguise: Tiny Gradient Edits Stop a Small Language Model's Thinking Loops** (arXiv:2611.33133v1): This work is a fascinating and somewhat unnerving look at the internal mechanics of reasoning models. It provides valuable insights into why small models struggle with long-context thinking and offers a new perspective on the differences between open-weight and proprietary model robustness.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*