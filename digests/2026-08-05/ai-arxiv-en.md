# ArXiv AI Research Digest 2026-08-05

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-05 03:18 UTC

---

# ArXiv AI Research Digest — 2026-08-05

## Today's Highlights

Today's submissions reveal a field rapidly maturing beyond "scale is all you need." A dominant thread is **fine-grained credit assignment and self-improvement for tool-integrated agents** (TurnSight, ReflectRL, ContinualSkillBench), moving away from trajectory-level supervision toward turn-level or failure-informed learning. **Test-time scaling** receives its first systematic taxonomy (Hariri et al.) alongside adaptive, interpretable budget allocation (Interpretable Adaptive Sampling). On the foundations side, **causal and logical structure** is being injected earlier (pre-pretraining on formal derivations) and used for explanation (actual causes under structured causal inputs). Finally, **safety and evaluation are becoming domain-grounded and contract-based** (CARE-Bench, ADMITBench, LatentGuard), signaling a shift from generic benchmarks to deployed-system assurance.

---

## Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Logic Before Language: Pre-pretraining on Formal Derivations Fosters Skill Acquisition and Compressibility](http://arxiv.org/abs/2608.03930v1) | Jo-Ku Cheng, Nikolaos Aletras, Marco Valentino | Pre-pretraining on symbolic formal derivations—not narrow Dyck languages—accelerates natural language acquisition and improves compressibility, showing that logical structure bootstraps linguistic skill more effectively than procedural algorithms. |
| [The Transformer Revolution, Part 1: Dynamic Processing through Output-Weight Interconnections](http://arxiv.org/abs/2608.03921v1) | Marco Giunti, Fabrizia Giulia Garavaglia | Argues Transformers construct prompt-dependent transformations via output-weight interconnections during inference, challenging the "stochastic parrot" view and offering a mechanistic lens on in-context computation. |
| [Oilbird: Training-Free Speculative Decoding with Keys the Verifier Already Computes](http://arxiv.org/abs/2608.03839v1) | Tao Jin, Phuong Minh Nguyen, Zhenzhu Yan et al. | Introduces a training-free speculative decoder that matches exact context suffixes against a pool using keys the verifier already computes, recovering drafts missed by prior methods—especially effective on tool-calling traffic with repeated structure. |
| [Efficient Knowledge Distillation for LLMs: Offline Top-K Logits and a Fused Chunked KL Loss](http://arxiv.org/abs/2608.03796v1) | Bakbergen Ryskulov, Iker García-Ferrero, David Montero et al. | Proposes offline top-K logit distillation with a fused chunked KL loss, reducing memory and compute for KD while preserving quality—critical for deploying small models under latency and on-prem constraints. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [TurnSight: Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning](http://arxiv.org/abs/2608.04007v1) | Changle Qu, Sunhao Dai, Hengyi Cai et al. | Replaces trajectory-level RL with turn-level hindsight self-distillation, enabling fine-grained credit assignment in long-horizon tool-integrated reasoning and outperforming on-policy baselines on complex TIR benchmarks. |
| [Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility](http://arxiv.org/abs/2608.04001v1) | Mohsen Hariri, Weicong Chen, Nahal Shahini et al. | Provides the first unified taxonomy of test-time scaling algorithms (single-trajectory extension, multi-candidate aggregation, etc.), standardized evaluation protocols, and reproducibility tooling—essential for comparing inference-time compute strategies. |
| [ReflectRL: Learning from Golden Negative Trajectories via Reflective-to-Direct Reasoning](http://arxiv.org/abs/2608.03972v1) | Jinhe Bi, Chennan Zhou, Zengjie Jin et al. | Leverages expert *failures* as "golden negative trajectories," training a reflector to diagnose errors and distill corrections into direct reasoning—effective when experts cannot solve the hardest problems. |
| [ContinualSkillBench: Can LLM Agents Truly Evolve Their Capabilities?](http://arxiv.org/abs/2608.03874v1) | Tianyi Guan, Yiding Wang, Haotong Yang et al. | Introduces the first benchmark for *continual skill evolution* in LLM agents, separating skill acquisition from task performance and revealing that current frameworks struggle to convert experience into reusable, improved skills. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [GENESIS: Towards Explainable Causal Discovery](http://arxiv.org/abs/2608.03868v1) | Abhinav Thorat, Ravi Kumar Kolla, Vishak K Bhat et al. | Combines LLMs' semantic reasoning with statistical causal discovery, then extracts *natural-language explanations* for each edge—resolving ambiguities in low-sample regimes while providing human-interpretable justifications. |
| [SciRet: A Compute-Aware Empirical Study of Retrieval and Reranking for Scientific RAG](http://arxiv.org/abs/2608.03860v1) | Kaysarul Anas Apurba, Md. Hasibul Hasan, Rofiqul Alam Shehab et al. | Systematically evaluates a fixed scientific RAG pipeline across three corpus scales (1K–15K papers) with compute-aware metrics, exposing diminishing returns of complex rerankers and guiding practical deployment choices. |
| [LatentGuard: Efficient and Inspectable Latent Reasoning for LLM Safeguards](http://arxiv.org/abs/2608.03838v1) | Zhinan Liu, Jie Li, Mingyu Kang et al. | Moves guard-model reasoning into continuous latent states, cutting token generation costs while adding an inspection head that surfaces interpretable safety rationales—enabling deployable, auditable content moderation. |
| [Computing Actual Causes for Neural Network Predictions under Structured Causal Inputs](http://arxiv.org/abs/2608.03772v1) | Jannick Strobel, Muqsit Azeem, Stefan Leue | Extends actual causality (Halpern-Pearl) to structured, correlated inputs, computing minimal sufficient causes for NN predictions—yielding faithful explanations where feature-attribution methods fail due to input dependencies. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CARE-X: Towards Clinically Useful Radiology VLMs with Auxiliary Supervision, Reward-Aligned Learning, and Tool-Augmented Measurement](http://arxiv.org/abs/2608.03890v1) | Mercy Prasanna Ranjit, Anirban Porya, Sathvik Joel et al. | Unifies classification (with tunable thresholds), spatial localization, and anatomical measurement in a single radiology VLM via auxiliary supervision and tool-augmented rewards—addressing the full clinical workflow beyond report generation. |
| [Video-DeepResearch: Towards the Next-Generation Multimodal DeepResearch Agent](http://arxiv.org/abs/2608.03979v1) | Zhen Fang, Yu Zeng, Wenxuan Huang et al. | Extends deep-research agents to continuous video streams, identifying modality bias and temporal grounding as key bottlenecks; proposes a benchmark requiring dense spatiotemporal reasoning coupled with open-web exploration. |
| [MultiGlobeQA: A Multilingual and Globally Diverse Benchmark for Geospatial Reasoning](http://arxiv.org/abs/2608.03882v1) | Martin Böckling, Elizaveta Nosova, Heiko Paulheim et al. | Constructs a multilingual, globally diverse benchmark for geometric and topological geospatial reasoning (distances, containment), exposing LLMs' persistent failure to compute over stored geographic knowledge. |

---

## Research Trend Signal

Three convergent directions are crystallizing. **First, agent self-improvement is becoming measurable and failure-driven**: TurnSight, ReflectRL, ContinualSkillBench, and Failure-Informed Self-Augmentation all treat *errors* or *turn-level feedback* as the primary learning signal, moving beyond imitation of success. **Second, test-time compute is being formalized as a controllable resource**: Hariri et al.'s taxonomy, Interpretable Adaptive Sampling, and Oilbird's verifier-aware decoding frame inference scaling as an allocation problem with observability—shifting from "more compute" to "right compute per query." **Third, evaluation is migrating to *contractual, domain-grounded assurance***: CARE-Bench (triage actions), ADMITBench (industrial advisories), LatentGuard (inspectable safeguards), and MultiGlobeQA (geospatial computation) replace generic leaderboards with scenario-specific, evidence-grounded pass/fail criteria. Together, these trends point to a near-term research agenda where agents *audit their own reasoning*, *budget inference adaptively*, and *certify outputs against domain contracts*.

---

## Worth Deep Reading

1. **[TurnSight: Turn-Level Hindsight Self-Distillation for Tool-Integrated Reasoning](http://arxiv.org/abs/2608.04007v1)** — The turn-level credit assignment problem is the core bottleneck for long-horizon tool use; this paper's hindsight self-distillation mechanism is a clean, scalable alternative to trajectory RL and likely to become a standard component in agent post-training pipelines.

2. **[Test-Time Scaling in Reasoning LLMs: Inference Regimes, Evaluation, and Reproducibility](http://arxiv.org/abs/2608.04001v1)** — The first comprehensive taxonomy and reproducibility framework for the rapidly fragmenting "test-time scaling" literature; essential reading for anyone building or evaluating inference-time compute strategies.

3. **[GENESIS: Towards Explainable Causal Discovery](http://arxiv.org/abs/2608.03868v1)** — Bridges the explanatory gap in LLM-assisted causal discovery by generating natural-language justifications for each discovered edge, addressing the key adoption barrier (trust/interpretability) for scientific and high-stakes applications.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*