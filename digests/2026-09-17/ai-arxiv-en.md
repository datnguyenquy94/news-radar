# ArXiv AI Research Digest 2026-09-17

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-17 04:35 UTC

---

# ArXiv AI Research Digest — 2026-09-17

## Today's Highlights

Today's submissions reveal three converging frontiers: **infinite-parameter architectures** that generate weights from live data rather than storing them statically, **formal safety frameworks for agentic systems** addressing compositional policy violations and multi-agent coordination under stochasticity, and **theoretical breakthroughs in learning dynamics** — from a statistical-mechanics explanation of double descent to exponential hardness results for off-policy evaluation under history-dependent logging. Simultaneously, multimodal grounding advances (PANORAMA, force-aware robotic manipulation) and domain-specific benchmarks (clinical AML prediction, legal damage awards, scientific figure reconstruction) signal maturation of evaluation methodology beyond generic LLM leaderboards.

---

## Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Infinite-Parameter LLMs: Generating and Adapting Weights from Live Data](http://arxiv.org/abs/2609.18842v1) | Hu J., Clarke R., Zhang Y. et al. | Proposes LLMs that synthesize weights on-the-fly from context rather than storing fixed parameters, extending MoE scaling laws to a limit where capacity grows with data stream. Challenges the static-parameter paradigm and opens continual adaptation without replay. |
| [Preventing Model Collapse: A Fisher-Rao Perspective on the Dynamics of Training with Synthetic Data](http://arxiv.org/abs/2609.18878v1) | Marchi M., Silvestre J., Gharesifard B. et al. | Analyzes recursive synthetic-data training through Fisher-Rao geometry, showing collapse arises from degenerative curvature in parameter space. Derives conditions to maintain diversity, critical as human data exhausts. |
| [Higher-order pruning of experts in mixture-of-experts language models](http://arxiv.org/abs/2609.18916v1) | Tseng A., Kaul P., Zancato L. et al. | Introduces joint expert-pruning that models inter-expert dependencies via higher-order interactions, outperforming independent pruning. Reduces MoE memory footprint while preserving routing diversity. |
| [Monitoring and Discovering Reward Hacking with Internal Representations during LLM Evaluations](http://arxiv.org/abs/2609.19101v1) | Bergen L., Bhalla U., Lee A. et al. | Identifies consistent internal representation signatures of reward hacking in frontier LLMs. Enables real-time detection without access to reward model or reference policy, a practical safety monitor. |
| [A Zeroth-Order Paradigm for LLM Preference Alignment](http://arxiv.org/abs/2609.19144v1) | Chen P., Chen X., Yin W. et al. | Develops gradient-free preference alignment using zeroth-order optimization, avoiding likelihood displacement in DPO. Efficient for black-box or API-only models where backprop is unavailable. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Cognitive Extensions for Dual-Process Language Agents: Memory and Self-Reflection in Interactive Environments](http://arxiv.org/abs/2609.19128v1) | Santos J., Oliveira A. | Extends the SwiftSage dual-process architecture with modular long-term memory and self-reflection modules. Demonstrates robust long-horizon task execution and failure recovery in interactive benchmarks. |
| [CERA-MoA: Co-Evolving Routing Mechanisms with Continually Learning LLM Agents](http://arxiv.org/abs/2609.18779v1) | Jiang J., He L., Fang Z. | Unifies query routing and agent fine-tuning in Mixture-of-Agents via co-evolution. Routing adapts to agent capability drift during post-training, closing a critical gap in dynamic MoA systems. |
| [Compositional Policy Violations: When Step-Level Compliance Fails In Agentic AI Workflows](http://arxiv.org/abs/2609.18820v1) | Kurady A., Grandhi S., Gupta R. et al. | Formalizes a class of safety failures where each step complies with local policies but the composed trajectory violates global constraints (e.g., authority limits, referral thresholds). Provides detection framework. |
| [Social Laws for Multi-agent Coordination in Stochastic Environments](http://arxiv.org/abs/2609.18929v1) | Fernandez R., Probine C., Lee T. et al. | Extends social laws — conventions that restrict agent actions to prevent interference — to stochastic, non-goal-based settings. Proves existence and synthesis complexity results for robust coordination. |
| [ASLEval: Measuring Privacy Exposure Displacement in LLM Agent Sessions](http://arxiv.org/abs/2609.18864v1) | Wu G., Huang H., Long G. et al. | Introduces session-level privacy evaluation for tool-using agents, capturing exposure displacement across multi-step trajectories. Establishes unified metrics across tool paths and reporting outlets. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Exponential Hardness of Off-Policy Evaluation under History-Dependent Logging](http://arxiv.org/abs/2609.19135v1) | Jajoo P. | Proves that even with full state coverage, history-dependent logging policies can make off-policy evaluation exponentially hard in horizon H. Fundamental limitation for RL from logged data. |
| [Double descent is the principle of least action](http://arxiv.org/abs/2609.19076v1) | Sha C. | Derives the double-descent test-error curve from statistical mechanics: SGD follows a least-action path in parameter space, with the interpolation peak corresponding to a phase transition. Unifies optimization and generalization. |
| [Beyond Outcomes: Dual-View Relational Learning for Efficient Agent Benchmarking](http://arxiv.org/abs/2609.18909v1) | Guo X., Wu J., Deng D. et al. | Compresses agent benchmarks by modeling relational structure in both task-model and model-task views, not just final scores. Reduces evaluation cost while preserving ranking fidelity. |
| [ProgramDistill: From Interactive Web Apps to Verifiable Reference-Guided SWE Tasks](http://arxiv.org/abs/2609.18805v1) | Kim J., Kim M., Kim Y. et al. | Creates a coding-agent benchmark where specifications are distilled from working web applications into verifiable tasks. Bridges the gap between instruction-following and behavior-cloning from live software. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Dreaming the Sound of Contact: Leveraging Video and Audio Generation for Zero-Shot Force-Aware Manipulation and Data Generation](http://arxiv.org/abs/2609.19137v1) | Ji G., Li T., Suh D. et al. | Uses video+audio generative models to synthesize contact-rich manipulation trajectories with force profiles. Enables zero-shot force-aware control and synthetic data for contact tasks. |
| [PANORAMA: Panoptic Grounded Captioning via Mask Proposal Selection](http://arxiv.org/abs/2609.19143v1) | Pieri S., Kazakos E., Chen S. et al. | Generates captions densely grounded to pixel-level masks via a mask-proposal selection mechanism. Achieves comprehensive, spatially precise image understanding for embodied agents. |
| [Interpretable Multi-Instance Learning Enables Early Prediction of Key Molecular Alterations from Routine Flow Cytometry in Acute Myeloid Leukemia](http://arxiv.org/abs/2609.18825v1) | Legrand J., Mimoun A., Denis de Senneville B. et al. | Predicts NPM1/FLT3-ITD mutations from flow cytometry (available in hours) using interpretable MIL, guiding early AML treatment before molecular results (weeks). Clinical impact with auditability. |

---

## Research Trend Signal

A clear shift is visible from **static model scaling** toward **dynamic, adaptive systems**: infinite-parameter LLMs, co-evolving MoA routing, and incremental memory for lifelong agents all treat model capacity as a fluid resource allocated at inference time. Safety research is moving **up the abstraction ladder** — from token-level guardrails to compositional policy verification, stochastic social laws, and session-level privacy accounting — reflecting deployment in regulated, multi-agent workflows. Theoretical ML is producing **mechanistic explanations for empirical phenomena** (double descent as least action, exponential OPE hardness) that may guide architecture search. Finally, **evaluation is becoming task-structured and domain-grounded**: benchmarks now distill specs from live software (ProgramDistill), reconstruct editable artifacts (ReFigBench), predict continuous legal/clinical quantities (ECtHR-NPD, AML), and measure communication efficiency between frontier models (log(N)-Questions). The field is converging on *reliable, auditable, continually adapting* AI systems rather than ever-larger frozen checkpoints.

---

## Worth Deep Reading

1. **[Infinite-Parameter LLMs: Generating and Adapting Weights from Live Data](http://arxiv.org/abs/2609.18842v1)** — A potential paradigm shift: if weight generation from context scales, it obsoletes the fixed-parameter pretraining/fine-tuning loop and unifies in-context learning, continual learning, and model scaling. The architectural implications (memory, compute, distillation) are vast.

2. **[Compositional Policy Violations: When Step-Level Compliance Fails In Agentic AI Workflows](http://arxiv.org/abs/2609.18820v1)** — Identifies a fundamental gap in current AI governance (step-scoped rails vs. trajectory-level policies) and provides a formal framework to detect emergent violations. Essential reading for anyone deploying agents in regulated environments.

3. **[Double descent is the principle of least action](http://arxiv.org/abs/2609.19076v1)** — Offers a unified physics-derived explanation for one of deep learning's most puzzling empirical curves. If the variational principle holds broadly, it could yield new optimization algorithms and architecture design principles grounded in action minimization.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*