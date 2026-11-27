# ArXiv AI Research Digest 2026-11-27

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-11-27 07:55 UTC

---

**ArXiv AI Research Digest**
*Generated on 2026-11-27*

### Today's Highlights
Today's arXiv dump reveals a strong focus on the intersection of reasoning efficiency and application-specific optimization. A dominant theme is the mitigation of "over-editing" in repository-level code agents (Goel et al.) and the development of specialized reasoning traces for mathematical problem-solving (Aichberger et al.). Simultaneously, there is significant progress in foundation model evaluation and trustworthiness, with new benchmarks for multi-user voice interaction ($\mu$-Bench) and bio-scoring pathology models (Vilars et al.). Finally, the inclusion of "Guidance as Variance Matching" (Backour et al.) and "Barron Smoothness" (Welper) suggests a maturing theoretical understanding of diffusion models and neural network generalization, moving beyond pure scaling to fundamental architectural and optimization insights.

### Key Papers

#### 🧠 Large Language Models (architecture, training, alignment, evaluation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| **[Tokenisation is not in APX](http://arxiv.org/abs/2611.34938v1)** | Violeta Kastreva et al. | Proves that finding an optimal tokeniser is APX-hard, implying no polynomial-time algorithm can guarantee a constant-factor approximation unless P=NP. This theoretical result has profound implications for compression and efficient LLM tokenization strategies. |
| **[Can image generation help visual reasoning?](http://arxiv.org/abs/2611.34935v1)** | Xueyang Yu et al. | Empirically tests whether generated helper images improve visual question answering across 13 vision-language models. Finds that generated helpers consistently aid reasoning, validating the hypothesis that multimodal models "think in images" to solve linguistic tasks. |
| **[Repairing the Trustworthiness of Distilled Language Models](http://arxiv.org/abs/2611.34831v1)** | Kumar Shubham et al. | Investigates the regression in trustworthiness (safety, ethics) that occurs during knowledge distillation. Proposes methods to repair these failures, highlighting the trade-off between model compression and aligned behavior. |
| **[Guidance as Variance Matching](http://arxiv.org/abs/2611.34801v1)** | Ali Backour et al. | Provides a theoretical understanding of "guidance" in diffusion models, showing it acts as variance matching rather than simply repelling predictions from a reference. Explains the mechanism behind improved sample quality. |

#### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| **[Diverse Alternative Reasoning Traces for Hard Math Problems](http://arxiv.org/abs/2611.34928v1)** | Lukas Aichberger et al. | Proposes generating diverse reasoning traces for difficult math problems to overcome the rarity of successful traces under Monte Carlo sampling. Improves verification accuracy by exploring alternative solution paths. |
| **[Attack Policy Selection can Mislead Monitor Evaluators](http://arxiv.org/abs/2611.34934v1)** | Charlie Griffin et al. | Finds that using attack policies as proxies for dangerous behavior in AI monitor evaluation leads to misleadingly low false negative rates. Warns against this evaluation pitfall in AI safety testing. |
| **[LoopTitan: What Does Parameter Revisit Buy a Mixture-of-Experts?](http://arxiv.org/abs/2611.34821v1)** | Zichen Tian et al. | Analyzes looped Mixture-of-Experts architectures, finding that revisiting parameters increases effective depth. Reports gains over standard MoE at matched budgets, though notes diminishing returns in some settings. |
| **[RePace: Reasoning about Demonstration Speedup](http://arxiv.org/abs/2611.34864v1)** | Insup Lee et al. | Introduces a framework for accelerating vision-language-action policies by speeding up human demonstrations prior to fine-tuning. Aims to reduce the slow pace inherited from demonstration data. |

#### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| **[Mixture-of-Loops Transformer](http://arxiv.org/abs/2611.34923v1)** | Lianghui Zhu et al. | Introduces a mechanism to rethink what is passed between loops in Loop Transformers, aiming to improve the expressivity-efficiency trade-off. Balances the cost of parameter reuse with performance gains. |
| **[$\mu$-Bench: Benchmarking Multi-User Task Completion](http://arxiv.org/abs/2611.34920v1)** | Qihao Lin et al. | Introduces a benchmark for voice agents in shared spaces, evaluating their ability to satisfy interdependent multi-user requests while maintaining per-user privacy and authority. Fills a gap in human-AI interaction evaluation. |
| **[BOP-Refer: Benchmark for Monocular 3D and 2D Object Grounding](http://arxiv.org/abs/2611.34862v1)** | Tomas Hodan et al. | Presents the first benchmark grounding everyday and industrial objects across 9 diverse BOP datasets using VLM-generated and human-verified expressions. Advances spatial language understanding in robotics. |
| **[Split-RL: Local Conflict Resolution in Reinforcement Learning](http://arxiv.org/abs/2611.34799v1)** | Benjamin Fuhrer et al. | Proposes Split-RL, a Gradient Boosting Trees algorithm for RL policies to handle contradictory localized feedback (e.g., speed vs. precision). Enables fine-grained conflict resolution within a single policy. |

#### 📊 Applications (domain-specific, multimodal, code generation)
| Paper | Authors | Summary |
| :--- | :--- | :--- |
| **[Spectrum Adaptation of AI-Native Autoencoder Communications](http://arxiv.org/abs/2611.34942v1)** | Yalin E. Sagduyu et al. | Studies AI-native communications using end-to-end autoencoders, quantifying sensitivity to spectrum adaptation. Bridges deep learning and wireless communications physical layers. |
| **[Solve Vision with Code: Coding Agents Are Stronger Visual Reasoners](http://arxiv.org/abs/2611.34813v1)** | Dezhi Luo et al. | Empirically demonstrates that coding agents outperform video generation models as visual reasoners. Suggests that program synthesis is a more effective paradigm for visual task execution than raw video generation. |
| **[How Much Do Coding Agents Over-Edit?](http://arxiv.org/abs/2611.34875v1)** | Aakash Goel et al. | Introduces Delta Residue Attribution (DRA) to analyze unneeded edits in repository-level agent patches. Finds that agent patches are larger than developer patches due to specific attribution patterns, not just volume. |
| **[Enhancing Maritime Domain Awareness using Latent Space Representations](http://arxiv.org/abs/2611.34899v1)** | Rikard Vinge et al. | Applies Earth Observation embeddings (TerraMind) for maritime domain awareness, operating on compressed latent representations rather than raw imagery. Demonstrates efficiency gains in geospatial analysis. |

### Research Trend Signal
The research signal from today's submissions points toward a "Quality over Scale" maturation phase in AI. While large-scale deployment continues, there is a concentrated effort on *efficiency* and *faithfulness*: theoretical hardness results like Tokenisation being APX-hard challenge assumptions about compression; Split-RL and Mixture-of-Loops address the computational cost of complex architectures; and studies on coding agents and trustworthiness in distillation focus on reliability and safety in real-world deployments. Furthermore, the application of foundation models to specialized domains—wireless communications, maritime awareness, and pathology—indicates a shift toward vertical integration and domain-adaptive tuning rather than generic capabilities alone.

### Worth Deep Reading

1.  **[Tokenisation is not in APX](http://arxiv.org/abs/2611.34938v1)** (Kastreva et al.)
    *   **Why it matters:** This paper provides a foundational theoretical barrier to efficient LLM compression. If you cannot approximate the optimal tokeniser in polynomial time, it fundamentally limits how much we can compress token sequences without losing information or performance. It shifts the research focus from heuristic token design to exploring the boundaries of what is computationally feasible in language representation.

2.  **[Attack Policy Selection can Mislead Monitor Evaluators](http://arxiv.org/abs/2611.34934v1)** (Griffin et al.)
    *   **Why it matters:** As AI safety evaluators race to test "dangerous" capabilities, this paper exposes a critical methodological flaw. Using attack policies as proxies systematically underestimates failure rates, potentially giving a false sense of security about AI monitor reliability. It is essential reading for anyone involved in red-teaming or robustness evaluation of AI systems.

3.  **[Spectrum Adaptation of AI-Native Autoencoder Communications](http://arxiv.org/abs/2611.34942v1)** (Sagduyu et al.)
    *   **Why it matters:** This work exemplifies the growing trend of "AI-native" physical layer design. By replacing traditional modular communication systems (modulation/coding/detection) with learned autoencoders, it offers a path toward more spectrum-efficient and adaptive communication systems. It is a key paper for researchers interested in the convergence of AI and wireless engineering.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*