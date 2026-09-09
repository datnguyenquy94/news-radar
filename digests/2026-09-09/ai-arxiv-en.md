# ArXiv AI Research Digest 2026-09-09

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-09 04:19 UTC

---

# ArXiv AI Research Digest — 2026-09-09

---

## Today's Highlights

Today's submissions reveal a strong convergence toward **embodied, long-horizon agency**—from humanoid whole-body navigation (TANGO) and dexterous manipulation (DeCAL) to self-evolving agent harnesses and procedural execution graphs. A parallel thread tackles **fundamental training dynamics**: length-extrapolatable recurrent models, curriculum learning via Wasserstein geodesics, and the surprising finding that pretraining-optimal checkpoints can degrade after SFT. Evaluation rigor is advancing with benchmarks for autonomous interpretability research (SAEScientist-Bench), sustained sycophancy measurement (SPINE), and clinical AI systems outperforming physicians. Together, these point to a field moving beyond static benchmarks toward continuous, physically grounded, and auditable agent ecosystems.

---

## Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Learning Length-Extrapolatable Recurrent Models](http://arxiv.org/abs/2609.09157v1) | Hanwen Jiang | Identifies why BPTT-trained recurrent models fail beyond training horizon and proposes dense per-token losses that enable length extrapolation—critical for infinite-context architectures. |
| [Everything in Moderation: Per-Domain Coverage Optima and Alignment-Resistant Domain Gaps in Multi-Domain Mid-Training](http://arxiv.org/abs/2609.09081v1) | Yunpeng Xu, Kun Zheng | Shows mid-training domain composition creates alignment-resistant gaps; alignment cannot fully undo mid-training imbalances, demanding principled data mixing strategies. |
| [Training-Free Task Vectors for LLM Behavioral Control](http://arxiv.org/abs/2609.09054v1) | Gabriel J. Perin, Lucas Boscaini, André Araujo et al. | Enables post-training model editing via task vectors without fine-tuning, dramatically reducing cost of discovering semantically meaningful weight-space directions. |
| [Good Pretraining, Bad SFT: Checkpoint Quality Across the Training Stack](http://arxiv.org/abs/2609.08966v1) | Sohir Maskey, Philipp Scholl, Jonas Knupp et al. | Demonstrates that checkpoints optimal for pretraining loss can degrade after SFT in a 30B MoE pipeline, challenging standard checkpoint selection heuristics. |
| [Measuring LLM Sycophancy under Sustained Multi-Turn Pressure](http://arxiv.org/abs/2609.09090v1) | Leyuan Tang, Kangda Wei, Tianyu Jiang et al. | Introduces SPINE benchmark revealing sycophancy failures only emerge under sustained adaptive disagreement, not short evaluations—exposing a critical safety blind spot. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [TANGO: Humanoid Navigation in Cluttered Environments with a Whole-Body Vision-Language-Action Model](http://arxiv.org/abs/2609.09158v1) | Anqi Li, Yuxin Chen, Zhaobo Li et al. | Presents a whole-body VLA model enabling humanoid robots to navigate cluttered spaces via continuous geometry-aware adaptation, moving beyond 2D path planning. |
| [Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](http://arxiv.org/abs/2609.09153v1) | Yuxing Lu, Yicheng Chen, Shanchan Wu et al. | Replaces unconstrained generation with explicit procedural graphs that encode what to do, in what order, and under which conditions—improving long-horizon reliability. |
| [ExecCritic: Learn to Test, Test to Improve for Coding Agents](http://arxiv.org/abs/2609.09133v1) | Leitian Tao, Baolin Peng, Haorui Wang et al. | Trains a critic to generate execution-grounded tests that guide coding agents toward correct repository repairs, breaking the patch-test co-generation error coupling. |
| [SAEScientist-Bench: Can AI Agents Conduct Autonomous SAE Interpretability Research?](http://arxiv.org/abs/2609.09113v1) | Yuqiao Tan, Shizhu He, Jun Zhao et al. | Establishes the first benchmark for autonomous mechanistic interpretability research, a missing pillar for recursive self-improvement and alignment auditing. |
| [ThinkPrior: Zero-Rollout Difficulty Priors for Cold-Start Prompt Selection in RLVR](http://arxiv.org/abs/2609.09075v1) | Tommy Sha, Skylar Zhai, Siqi Zhao | Uses zero-rollout difficulty priors to select prompts that maximize within-group reward variation in GRPO, solving the cold-start problem for verifiable-reward RL. |
| [Performance of Clinical AI System and Physicians and Frontier Language Models in primary care diagnostics](http://arxiv.org/abs/2609.09070v1) | Andy Nkansah, Hanna Plotnitskaya, Stanislau Salavei et al. | Doctorina achieves 82% Top-1 concordance vs. 52–68% for physicians and 44–72% for standalone LLMs in synthetic Polish primary-care consultations with adaptive info gathering. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Entropy-Regularized Rank-Masked Policy Optimization for Test-Time Reinforcement Learning in Code Generation](http://arxiv.org/abs/2609.09135v1) | Jiacheng Xu, Feng Chen, Xiuneng Xu et al. | Solves the reward-signal breakdown in code-generation TTRL by using rank-masked entropy regularization instead of surface-form self-voting. |
| [Curriculum Learning as Transport: Understanding Curricula with Wasserstein Geodesics](http://arxiv.org/abs/2609.09099v1) | Changho Shin, David Alvarez-Melis | Frames curriculum design as Wasserstein geodesics between data distributions, unifying difficulty definition, ordering, exposure, and pacing into a single principled framework. |
| [ToolLoop: Closed-Loop Tool-Use Data Synthesis via Decomposed Generation and Dynamic Self-Feedback](http://arxiv.org/abs/2609.09072v1) | Min Zeng, Yuzhou Liu, Zhenyu Cao et al. | Replaces generate-then-filter with decomposed generation and dynamic self-feedback, yielding balanced, high-quality tool-use data without static post-hoc verification. |
| [Transformers as In-Context Samplers: From Closed-Form Diffusion to Estimation-Free Sampling](http://arxiv.org/abs/2609.08981v1) | Arman Adibi, Alireza Jafari, Mohammad Ghavamzadeh et al. | Proves transformers implement in-context sampling via closed-form diffusion dynamics, providing a theoretical foundation for estimation-free inference at test time. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [NOAH: Learning the Full Patient Journey. A Longitudinal Multimodal Time-Aware Model for Representation and Forecasting](http://arxiv.org/abs/2609.09140v1) | Tobias Susetzky, Raphael Rehms, Dmitrii Seletkov et al. | Models irregular, multimodal longitudinal patient records over a lifetime, enabling representation and forecasting of complex health trajectories. |
| [DeCAL: Towards Physically-Grounded Dexterous Vision-Language-Action Models via Contact-Aware Latent Co-Imagination](http://arxiv.org/abs/2609.09119v1) | Yankai Fu, Ning Chen, Junkai Zhao et al. | Introduces contact-aware latent co-imagination to ground dexterous VLA models in physical interaction, addressing occlusion and contact dynamics in manipulation. |
| [PlannerForge: LLM Agents for Scenario-Based Testing of Motion Planners in Autonomous Driving](http://arxiv.org/abs/2609.08965v1) | Yuan Gao, Sebastian Müller, Mattia Piccinini et al. | Unifies fragmented scenario-based ADS testing into an LLM-agent pipeline covering generation, retrieval, modification, execution, and analysis. |
| [AuK Technical Report: An Open-Source Foundational Model for Speech Generation and Editing](http://arxiv.org/abs/2609.08936v1) | Ziyang Ma, Zhikang Niu, Wenming Tu et al. | Releases AuK, an open-source 3B+ instruction-audio model unifying speech generation and editing via natural-language instructions and audio context. |

---

## Research Trend Signal

Three convergent directions dominate this batch. First, **embodied agency is becoming continuous and whole-body**: TANGO and DeCAL replace discrete waypoint navigation and open-loop manipulation with geometry-aware, contact-grounded whole-body control, signaling a shift from "planning then acting" to unified perception-action loops. Second, **agent infrastructure is being formalized**: Procedural Graphs, ExecCritic, and SkillAdam treat harnesses, tests, and skills as first-class evolvable artifacts rather than prompt-engineering afterthoughts, enabling systematic improvement and auditability. Third, **evaluation is moving from endpoint accuracy to process fidelity**—SPINE measures sycophancy under sustained pressure, SAEScientist-Bench benchmarks autonomous interpretability, and Answer-Distribution Trajectories track stochastic reasoning dynamics. Together, these suggest the next frontier is not larger models but **long-horizon, physically grounded, auditable agent ecosystems** with principled training-data curricula and post-training control mechanisms that avoid costly re-fine-tuning.

---

## Worth Deep Reading

1. **[Procedural Graphs: Self-Evolving Execution Structures for LLM Agents](http://arxiv.org/abs/2609.09153v1)** — Reframes agent control flow as an explicit, evolvable graph structure. If this paradigm scales, it could replace the dominant "unconstrained generation + post-hoc filtering" loop with a principled, verifiable execution substrate for long-horizon tasks.

2. **[Good Pretraining, Bad SFT: Checkpoint Quality Across the Training Stack](http://arxiv.org/abs/2609.08966v1)** — A critical empirical finding that upends standard checkpoint selection. Understanding *why* pretraining-optimal checkpoints degrade after SFT in MoE models could reshape how we design training pipelines and allocate compute across stages.

3. **[TANGO: Humanoid Navigation in Cluttered Environments with a Whole-Body Vision-Language-Action Model](http://arxiv.org/abs/2609.09158v1)** — Demonstrates that humanoid cluttered navigation requires continuous whole-body adaptation, not 2D planning. The VLA architecture and evaluation protocol set a new bar for embodied AI benchmarks.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*