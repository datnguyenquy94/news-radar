# ArXiv AI Research Digest 2026-08-14

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-14 02:29 UTC

---

# ArXiv AI Research Digest — 2026-08-14

---

## ��� Today's Highlights

Today's submissions reveal a strong convergence toward **long-horizon agentic systems** that can plan, execute, and verify complex workflows across scientific, clinical, and engineering domains. Multiple papers introduce **formal verification and correctness guarantees** for AI-generated code and proofs (Vero, CAPRI), addressing a critical trust gap. Theoretical advances include **exponential improvements in adversarial robustness** (Bagging for VC classes) and **certified-optimal diffusion schedules** via unmasking growth complexity. A new class of **pedagogically controlled pretraining** (LittleLearner) and **open permissible-data models** (DFM Mimir) challenge the dominance of opaque web-scale corpora. Finally, **multi-agent orchestration frameworks** (MARC, OmniScientist, Intern-S2) are maturing from research prototypes into domain-specialized systems with deterministic coordination.

---

## ��� Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [DFM Mimir v1: An Open HRM Delivering Frontier Performance at 1B Parameters Using Only Permissible Post-Training Data](http://arxiv.org/abs/2608.13517v1) | Peter Schneider-Kamp, Jacob Nielsen, Gianluca Barmina et al. | Presents Mimir v1, a 1B-parameter Hierarchical Reasoning Model trained exclusively on permissible data, achieving frontier performance and demonstrating that high-quality open models need not rely on legally ambiguous corpora. |
| [LittleLearner: Language Models Under Pedagogically Controlled Knowledge Exposure](http://arxiv.org/abs/2608.13545v1) | Fanfei Li, Jana Zeller, Manuel Prada-Corral et al. | Introduces LITTLECURRICULUM, an 88B-token curated pretraining corpus with controlled knowledge exposure, enabling systematic study of skill acquisition dynamics impossible with heterogeneous web-scale data. |
| [DARTree: Speculative Diffusion Decoding with Autoregressive Draft Trees](http://arxiv.org/abs/2608.13524v1) | Tianyi Li, Yaxin Luo, Xinyi Shang et al. | Proposes a speculative decoding framework using diffusion-based drafters with autoregressive draft trees, achieving lossless acceleration by verifying conditionally structured token blocks rather than marginal predictions. |
| [Algebraic Decomposition Theory for Transformer Length Generalization](http://arxiv.org/abs/2608.13433v1) | Andy Yang, Blerta Veseli, Corentin Barloy et al. | Develops an algebraic framework characterizing exactly which regular languages transformers can length-generalize on, providing the first precise theoretical boundary for this fundamental capability. |

---

## ��� Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [OmniScientist: An Omni-Modal Omni-Discipline AI Scientist](http://arxiv.org/abs/2608.13558v1) | Bobo Li, Hao Fei, Tianjie Ju et al. | Builds an AI scientist that automates the full research lifecycle across disciplines and modalities, moving beyond workflow coverage to integrate the full evidentiary basis of scientific discovery. |
| [Intern-S2-Preview: Scientific Agentic Foundation Model](http://arxiv.org/abs/2608.13505v1) | Lei Bai, Jiaqi Cao, Chiyu Chen et al. | Introduces a series of scientific agentic foundation models capable of reasoning over heterogeneous scientific evidence, interacting with tools, and sustaining progress across long task horizons. |
| [AutoDesign: Meta-Harness Optimization for Long-Horizon Agentic Design](http://arxiv.org/abs/2608.13560v1) | Yaxin Luo, Haobin Jiang, Jialv Zou et al. | Frames multimodal content generation as a long-horizon agentic process and optimizes the model-harness system to align with human design priors while accumulating reusable empirical experience. |
| [MARC v1: An Open-Source Multi-Agent Framework for Clinical AI Reasoning and Coordination](http://arxiv.org/abs/2608.13476v1) | Saisha Shetty, Satvik Tripathi, Austin Lin et al. | Replaces monolithic LLM prompting with deterministic multi-agent orchestration for clinical reasoning, coordinating specialized agents for extraction, reasoning, generation, and evaluation with formal guarantees. |
| [Beyond Final Scores: A Systematic Evaluation of Agents for Long-Horizon AI Research and Development](http://arxiv.org/abs/2608.13417v1) | Yiwei Li, Wanli Yang, Hexiang Tan et al. | Argues that final-score evaluation is insufficient for long-horizon agents and proposes a systematic framework revealing where progress is gained or lost across extended experimentation trajectories. |

---

## ��� Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Vero: Can AI Agents Build Formally Verified Software Repositories?](http://arxiv.org/abs/2608.13522v1) | Zhe Ye, Hantao Lou, Yuechun Sun et al. | Establishes a benchmark and framework where agents must produce both implementation and machine-checked proofs, shifting AI coding from plausible generation to mathematically verified correctness. |
| [QuoteBench: How Matched Scores Can Hide Command-Path Failures](http://arxiv.org/abs/2608.13547v1) | Shangao Li, Yao Zhang, Volker Tresp et al. | Exposes a critical evaluation gap in LLM coding agents: matched execution scores cannot distinguish generation errors from post-generation failures in command serialization and reparsing pipelines. |
| [Bagging Robustly Learns VC Classes with Linear Sample Complexity](http://arxiv.org/abs/2608.13514v1) | Omar Montasser | Proves that bagging achieves adversarially robust learning of VC classes with sample complexity linear in VC dimension, an exponential improvement over prior bounds. |
| [Wasserstein Filtering: A Sample Selection Method for Robust Distribution Learning](http://arxiv.org/abs/2608.13418v1) | Yikai Xu, Zhao Chen, Jian Huang | Proposes a sample selection framework that discards suspicious samples using Wasserstein distance to recover clean population distributions from contaminated datasets. |
| [Reduced Matrix Multiplication: Input-Adaptive Matrix-Product Reduction for LLM Inference](http://arxiv.org/abs/2608.13426v1) | Zixuan Lan, Yanhong Li, Jiawei Zhou | Introduces a training-free, input-adaptive method that reduces Transformer matrix multiplications by selecting relevant subspaces per input, cutting inference cost without retraining. |

---

## ��� Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [HumanTracker: Towards Comprehensive and Human-Aligned Motion Tracking Benchmark](http://arxiv.org/abs/2608.13555v1) | Dairu Liu, Zekun Qi, Jiayu Zeng et al. | Reveals that kinematic error metrics disagree with human perception in humanoid motion tracking and introduces a benchmark capturing physical artifacts like unstable support and incorrect contact that matter most. |
| [Intervention-Aware Clinical World Model for Post-Op Outcome Forecasting in Cardiology](http://arxiv.org/abs/2608.13518v1) | Yunsung Chung, Yingshuo Liu, Abboud F. Hassan et al. | Models post-intervention recovery as an irregular trajectory incorporating clinical observations, medication changes, and repeat interventions, moving beyond one-step baseline-to-endpoint mappings. |
| [Symmetry-Breaking De Novo Crystal Generation via Markovian Jump Diffusion](http://arxiv.org/abs/2608.13457v1) | Van Khoa Nguyen, Alexandros Kalousis | Generates complete crystallographic specifications using Markovian jump diffusion, capturing global symmetry and structural dependencies that prior generative models failed to produce. |

---

## ��� Research Trend Signal

Three convergent directions dominate this batch. First, **correctness-by-construction** is replacing post-hoc validation: Vero and CAPRI demand machine-checked proofs alongside code, while QuoteBench exposes the insufficiency of execution-only metrics. Second, **long-horizon agency** is being formalized through meta-harness optimization (AutoDesign), deterministic multi-agent orchestration (MARC), and evaluation frameworks that decompose progress across time (Beyond Final Scores). Third, **data provenance and control** are gaining rigor: LittleLearner's pedagogical curriculum and Mimir's permissible-data-only training challenge the opacity of web-scale corpora, while Wasserstein Filtering provides a certified method for cleaning contaminated datasets. Together, these trends signal a field moving from "impressive demos" toward **verifiable, controllable, and auditable** AI systems — particularly in high-stakes domains (clinical, scientific, safety-critical code) where the cost of hallucination is unacceptable.

---

## ��� Worth Deep Reading

1. **[Vero: Can AI Agents Build Formally Verified Software Repositories?](http://arxiv.org/abs/2608.13522v1)** — The most direct attack on the "plausible but wrong" problem in AI coding. If the benchmark holds, it forces a paradigm shift from generation to verification.

2. **[LittleLearner: Language Models Under Pedagogically Controlled Knowledge Exposure](http://arxiv.org/abs/2608.13545v1)** — The 88B-token LITTLECURRICULUM is a rare artifact: a pretraining corpus designed for *scientific interpretability* rather than scale. It enables causal studies of knowledge acquisition impossible with current corpora.

3. **[Bagging Robustly Learns VC Classes with Linear Sample Complexity](http://arxiv.org/abs/2608.13514v1)** — A theoretical breakthrough: exponential improvement in adversarial robustness sample complexity via a simple, classical ensemble method. May reshape how we think about robustness-efficiency tradeoffs.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*