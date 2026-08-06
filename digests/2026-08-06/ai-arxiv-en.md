# ArXiv AI Research Digest 2026-08-06

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-06 03:20 UTC

---

# ArXiv AI Research Digest — 2026-08-06

## Today's Highlights

Today's submissions reveal a strong convergence on **long-horizon reasoning infrastructure**: new agentic runtimes (Argus), credit-assignment methods for multi-step search (ABSeeker), hierarchical graph memories, and recursive language model architectures all target the core challenge of maintaining coherence over extended reasoning chains. Simultaneously, **procedural data generation** (Reasoning Core) and **skill-aware benchmarking** (Skill Entropy) are emerging as complementary pillars for training and evaluating cross-skill reasoning. On the safety frontier, **Item Response Theory** and **certified deferral for verbalized uncertainty** introduce psychometric rigor to alignment evaluation, while **Gradient Immunity** offers a novel null-space defense against malicious fine-tuning. Finally, **multimodal pretraining physics** and **domain-aware symbolic regression** (DASyR-LLM) signal a maturing theory-practice loop for scientific AI.

---

## Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Reasoning Core: Designing Broad Procedural Data for Completion-Supervised Reasoning Training](http://arxiv.org/abs/2608.05148v1) | Damien Sileo, Valentin Lacombe, Dimitri Kachler | Introduces 50 procedural generators spanning math, logic, planning, and formal languages to produce verifiable reasoning data at scale for completion-supervised fine-tuning, addressing the scarcity of high-quality reasoning trajectories. |
| [Toward Skill-Native LLMs: Skill Entropy for Benchmarking and Training Long-Horizon Reasoning](http://arxiv.org/abs/2608.05139v1) | Yinghui He, Ling Yang, Jiarui Liu et al. | Proposes "skill entropy" to quantify cross-skill reasoning demands, providing a benchmark and training framework for tasks requiring dynamic skill switching (e.g., math → planning) within a single chain. |
| [Item Response Theory for AI Safety](http://arxiv.org/abs/2608.05086v1) | Joshua Fonseca Rivera, Neil Shah, David Demitri Africa et al. | Applies psychometric IRT to safety benchmarks, exposing duplication, correlation, and sandbagging issues; yields calibrated model-level safety estimates with confidence intervals. |
| [Provable Limits and Certified Deferral for Verbalized Uncertainty in Small Language Models](http://arxiv.org/abs/2608.05064v1) | Jianru Shen | Establishes theoretical limits on verbalized confidence for risk-controlled deferral in small LMs, evaluating 11 models and providing certified deferral thresholds for offline/private deployment. |
| [Gradient Immunity: Null-Space Resistance to Malicious Fine-Tuning](http://arxiv.org/abs/2608.05045v1) | Yuxuan Huang, Xingyu Zeng, Tianhang Zheng et al. | Defends released aligned models by constraining fine-tuning updates to the null space of safety-critical directions, preventing malicious adaptation without requiring user-side cooperation. |
| [Protoreasoning in Tiny Transformers](http://arxiv.org/abs/2608.04980v1) | Eduardo Valle, Fergal Reid | Demonstrates that ~1M-parameter transformers can leverage a minimal Chain-of-Thought ("protoreasoning"), enabling controlled study of step-by-step reasoning mechanics at low compute cost. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Argus: A General-Purpose Agentic Runtime for Long-Horizon Reasoning](http://arxiv.org/abs/2608.05144v1) | Boxiu Li, Zimo Wen, Yijia Fan et al. | Presents a persistent, self-evolving runtime with Manager/Planner/Engineer roles that persists on evidence-backed trajectories and pivots on failure detection, enabling robust long-horizon agency. |
| [ABSeeker: Training Long-Horizon Search Agents via Answer-Backtracked Credit Assignment](http://arxiv.org/abs/2608.05102v1) | Yijun Lu, Rui Ye, Jiajun Wang et al. | Introduces answer-backtracked credit assignment to weight search steps by their contribution to the final answer, improving both SFT and RL training of multi-step search agents. |
| [Hierarchical Graph Memory for LLM Agents with Path-level Localization and Rewrite](http://arxiv.org/abs/2608.05095v1) | Xiawei Yue, Boran Wang, Xiaoqing Zhang et al. | Proposes a graph memory with hierarchical organization and path-level rewrite operations, enabling efficient updates and multi-hop retrieval for long-term agent memory. |
| [Chained Recursive Language Models for Multi-Iteration Reasoning](http://arxiv.org/abs/2608.05124v1) | Purbesh Mitra, Sennur Ulukus | Decomposes long-context reasoning into chained recursive calls, each handling exploration, state tracking, verification, or answering, reducing single-trajectory burden. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [OctoLong: Mid-Training On Cross-Repository Code Contexts Enhances Long-Context Modeling](http://arxiv.org/abs/2608.05141v1) | Indraneil Paul, Falko Helm, Goran Glavaš et al. | Shows that mid-training on cross-repository code dependencies (not just single repos) significantly improves long-context modeling by exposing models to realistic, structurally rich long-range dependencies. |
| [SSTQ: Privacy-Preserving Vector Quantization via Subsampled Stochastic TurboQuant](http://arxiv.org/abs/2608.05127v1) | Adel Javanmard, David P. Woodruff, Vahab Mirrokni | Achieves local differential privacy in distributed optimization with dimension-independent variance, overcoming the communication-variance trade-off of prior vector quantization methods. |
| [DelusionEval: Measuring Delusion-Linked Behaviors in AI Chatbots](http://arxiv.org/abs/2608.05004v1) | Jared Moore, Andrea Mock, Yifan Mai et al. | Introduces the first benchmark for "delusional spirals" in LLM chatbots, quantifying reinforcement of concerning user-model interactions over multi-turn dialogues. |
| [SciCode-Verified: How Benchmark Defects Underestimated the Scientific-Coding Ability of Language Models](http://arxiv.org/abs/2608.04975v1) | Sihan Hu, Lyuhan Huang, Youjin Deng et al. | Audits the SciCode benchmark, finding and fixing defects that systematically underestimated model performance; corrected scores change leaderboard rankings significantly. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [DASyR-LLM: Domain-Aware Symbolic Regression with LLMs for Kinetic Model Discovery](http://arxiv.org/abs/2608.05120v1) | Roberto Aliaga Medina, Paulina Quintanilla, Antonio del Rio Chanona | Integrates chemical engineering domain knowledge (mass-action kinetics, thermodynamic constraints) into LLM-guided symbolic regression, discovering interpretable rate laws from data. |
| [Towards Physics of Multimodal Pretraining: Knowledge Flow, Modality Synergy, Early Unification, and Recipes](http://arxiv.org/abs/2608.05000v1) | Junlin Han, Shengbang Tong, David Fan et al. | Provides empirical laws for multimodal pretraining: knowledge flow dynamics, modality synergy thresholds, and optimal unification timing, yielding compute-efficient recipes. |
| [ORACLE: A Multi-Objective Reinforcement Learning-Based Analog Circuit Design Optimizer with Large Language Models-Guided Exploration](http://arxiv.org/abs/2608.04999v1) | Osei Brempong, Mohammed Ayman Habib, Vivan Poddar et al. | Combines multi-objective RL with LLM-guided exploration (circuit topology suggestions, constraint reasoning) for analog circuit design, Pareto-optimizing gain, bandwidth, power, and area. |
| [MarsCast: Transfer Learning of AI Weather Foundation Models to Planetary Atmospheres](http://arxiv.org/abs/2608.05054v1) | M. L. Carroll, J. Li, S. D. Guzewich et al. | Adapts GraphCast (Earth weather foundation model) to Mars forecasting via transfer learning, demonstrating cross-planetary generalization of learned atmospheric dynamics. |

---

## Research Trend Signal

Three convergent directions stand out. First, **reasoning infrastructure is being factorized**: separate papers address the runtime (Argus), memory (Hierarchical Graph Memory), credit assignment (ABSeeker), and recursive decomposition (Chained Recursive LMs) of long-horizon agency—suggesting a modular stack is crystallizing. Second, **evaluation is turning psychometric**: IRT for safety, certified deferral for uncertainty, and Skill Entropy for cross-skill reasoning all import measurement theory to replace aggregate benchmarks with calibrated, interpretable metrics. Third, **domain-aware generative modeling** is moving beyond prompting: DASyR-LLM embeds physical constraints into symbolic regression, ORACLE uses LLMs as structured exploration priors in RL, and MarsCast transfers foundation models across planetary physics. Together, these trends indicate a shift from "LLM-as-chatbot" to "LLM-as-component-in-engineered-scientific-systems," with rigorous interfaces, verifiable reasoning, and domain-grounded generation.

---

## Worth Deep Reading

1. **[Argus: A General-Purpose Agentic Runtime for Long-Horizon Reasoning](http://arxiv.org/abs/2608.05144v1)** — The most complete agentic architecture proposal this batch; its Manager/Planner/Engineer role separation and explicit persist/pivot logic address the central failure modes of current LLM agents (hallucinated progress, inability to backtrack). The runtime abstraction is reusable across domains.

2. **[Towards Physics of Multimodal Pretraining](http://arxiv.org/abs/2608.05000v1)** — Rare empirical-theory paper that derives scaling-law-like recipes for multimodal training (when to unify, how much cross-modal data, synergy thresholds). Immediately actionable for foundation model teams and grounded in extensive ablations.

3. **[DASyR-LLM: Domain-Aware Symbolic Regression with LLMs for Kinetic Model Discovery](http://arxiv.org/abs/2608.05120v1)** — Demonstrates a principled pattern: LLMs as hypothesis generators constrained by domain formalisms (here, chemical kinetics). The integration of thermodynamic feasibility and mass-action structure into the search space is a template for scientific discovery in other fields.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*