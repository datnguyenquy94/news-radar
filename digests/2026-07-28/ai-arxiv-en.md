# ArXiv AI Research Digest 2026-07-28

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-07-28 03:19 UTC

---

# ArXiv AI Research Digest — 2026-07-28

---

## 1. Today's Highlights

Today's submissions reveal three converging frontiers: **frontier-scale model releases** (Kimi K3, a 2.8T-parameter MoE with 1M-token context), **agentic planning rigor** (theoretical frameworks for multi-turn long-horizon planning and auditable social simulation), and **efficiency at deployment scale** (sparse-attention indexing, long-context KV compression, and per-example data curation). Medical multimodal understanding advances with vision-centric architectures and explainability grounded in Kolmogorov-Arnold Networks. Meanwhile, foundational work on diffusion distillation, optimal transport parallelization, and PINN convergence signals maturation of generative and scientific ML theory.

---

## 2. Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Kimi K3: Open Frontier Intelligence](http://arxiv.org/abs/2607.24653v1) | Kimi Team, T. Bai, Y. Bai et al. | Introduces a 2.8T-parameter MoE model with 104B activated parameters, native vision, and 1M-token context built on Delta Attention and Attention Residuals. Sets a new open-weight frontier for scale, multimodality, and long-context capability. |
| [PIVOT: Efficient Query-Group Indexing for Token-Level Sparse Attention](http://arxiv.org/abs/2607.24593v1) | H. Liu, Y. Cheng, L. Niu et al. | Proposes a query-group indexer that avoids scoring every preceding token for top-k selection, eliminating the bottleneck in production sparse-attention systems like DeepSeek's DSA. Critical for scalable long-context inference. |
| [LOCKS: Page-Local Compact Key Summaries for Efficient Long-Context Decoding](http://arxiv.org/abs/2607.24555v1) | J. Hwang | Exploits the locally low-rank structure of attention keys to build page-local compact bases, reducing KV-cache read bandwidth at decode time. A practical compression method compatible with existing serving stacks. |
| [D-Score: A Spectral Hidden-State Signal for Hallucination Detection](http://arxiv.org/abs/2607.24586v1) | B. Raimondi, D. Evangelista, M. Gabbrielli et al. | Introduces a spectral signal from hidden activations that detects hallucinations without external knowledge or multiple samples. Offers a lightweight, training-free probe for model reliability. |
| [DataOrchestra: Learning to Orchestrate Per-Example Curation of Pretraining Data](http://arxiv.org/abs/2607.24717v1) | Z. Huang, Y. Wang, S. Xia et al. | Replaces fixed corpus-level preprocessing with a learned policy that adapts curation per example. Demonstrates downstream gains by matching processing to individual example needs. |
| [Sparse Autoencoders Encode Both Concepts and Functions](http://arxiv.org/abs/2607.24645v1) | P. G. Hoang, A. Chatterjee, T. Chakraborty et al. | Reveals that SAE features simultaneously represent concepts and causal functions, explaining inconsistent steering effects. Provides a geometric framework for interpreting feature-behavior links. |
| [Hierarchical Group-Conditional Conformal Risk Control for Selective Prediction](http://arxiv.org/abs/2607.24562v1) | M. Salem, L. Böhm, D. Pontes et al. | Extends conformal risk control to hierarchical group structures (domain, difficulty, style), providing per-group abstention guarantees for LLMs serving heterogeneous populations. |

---

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [The Physics of Multi-Turn Long-Horizon Planning](http://arxiv.org/abs/2607.24720v1) | T. Men, Z. Jin, K. Liu et al. | Develops a theoretical framework tracing planning ability from pre-training through post-training via single- and multi-teacher on-policy agentic distillation. Establishes a "physics" for how planning emerges and transfers. |
| [SIREN: End-to-End Extreme-Weather Early Warning with Experience-Grounded LLM Agents](http://arxiv.org/abs/2607.24588v1) | H. Ni, W. Zhang, F. Liu et al. | Deploys LLM agents grounded in forecaster experience for end-to-end extreme weather warning, addressing the warning-to-action pipeline. Demonstrates agentic systems in high-stakes, real-time decision contexts. |
| [Reason-Mediated Behavioral Models for Auditing LLM Social Simulators](http://arxiv.org/abs/2607.24649v1) | A. Pandey, G. Jajoo | Argues that matching human outcomes is insufficient; simulators must also replicate the *reasoning* behind decisions. Proposes reason-mediated auditing to catch rationale mismatches in synthetic populations. |
| [Agentic Permissions Policy Algebra for Taint Confinement in LLM Agents](http://arxiv.org/abs/2607.24625v1) | A. Kravchenko, V. Liventsev, I. Konstantinov et al. | Formalizes a permissions algebra for dynamic information-flow control in agents handling mixed-confidentiality data, enabling taint confinement without permanent context pollution from prompt injections. |
| [Looping Is Not Reliability: State-Bound Evidence and Typed Revision Contracts for Agentic Code Repair](http://arxiv.org/abs/2607.24604v1) | X. Gao, J. Yang, Q. Yang | Shows that generate-test-revise loops lack reliability guarantees; introduces state-bound evidence and typed revision contracts to verify and retain correct patches across 900 trajectories on HumanEval. |

---

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Certified Parallel-in-Time Sinkhorn for Dynamic Entropic Optimal Transport](http://arxiv.org/abs/2607.24741v1) | X. Wen | Presents TemporalSinkhorn, a parallel-in-time executor that batches sequential Sinkhorn iterations across time steps, with certified convergence. Accelerates dynamic OT for flow matching and generative modeling. |
| [Global Convergence of DGM and PINN Algorithms for Solving Nonlinear PDEs](http://arxiv.org/abs/2607.24726v1) | J. Sirignano, K. Spiliopoulos, S. Cohen | Proves global convergence of Deep Galerkin Method and Physics-Informed Neural Networks for nonlinear PDEs, providing theoretical grounding for scientific ML's workhorse methods. |
| [MMOE: Modernizing Diffusion Transformers with Efficient Expert Design](http://arxiv.org/abs/2607.24665v1) | Y. Jia, J. Wang, H. Huang et al. | Brings MoE-style sparse expert design to diffusion transformers with capacity-efficiency co-optimization, mirroring LLM scaling lessons for image/video generation backbones. |
| [CADER: Confidence-Aware Dynamic Evidence Reasoning for Long-Video Understanding](http://arxiv.org/abs/2607.24582v1) | J. Yang, W. Zhang, K. Lin et al. | Adapts inference compute per example based on confidence, invoking tool-assisted reasoning only for hard long-video questions. Reduces compute while maintaining accuracy. |
| [Eviction as Estimation: A Fixed-Lag Smoothing View of Test-Time Memory](http://arxiv.org/abs/2607.24667v1) | M. Vemula, N. P. Gajula | Recasts KV-cache eviction as hidden-signal estimation, showing when measuring future relevance beats greedy accumulation. Provides a principled framework for test-time memory management. |
| [BettiSplit: Topology-Guided Privacy-Aware Split Learning](http://arxiv.org/abs/2607.24556v1) | A. K. Nair, M. A. Rahman, D. Brown et al. | Uses topological data analysis (Betti numbers) to guide split-layer placement, defending against feature inversion and gradient leakage in split learning. |
| [Rethinking Classifier-Free Guidance in On-Policy Diffusion Distillation](http://arxiv.org/abs/2607.24731v1) | B. Li, H. Wang, H. Xiong et al. | Analyzes how CFG interacts with on-policy distillation trajectories, revealing mismatches in existing methods and proposing corrected distillation objectives for guided diffusion. |

---

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ClinFusion: A Vision-Centric Multimodal LLM System for Holistic Medical Understanding](http://arxiv.org/abs/2607.24743v1) | H. Yuan, Y. Qian, Z. Tang et al. | Builds a vision-centric MLLM that ingests heterogeneous 2D/3D medical images with evaluation protocols aligned to clinical workflows, addressing the core bottleneck in medical AI deployment. |
| [KANEx: Translating Kolmogorov-Arnold Networks' Interpretability to Medical Explainability](http://arxiv.org/abs/2607.24730v1) | K. Shailya, A. L. Ravi, V. K. V. et al. | Leverages KANs' inherent interpretability to generate faithful natural-language explanations for chest X-ray classifiers, replacing post-hoc VLM rationales with structurally transparent reasoning. |
| [ERUnderstand: Evaluating Vision-Language Models on Structured ER Diagrams](http://arxiv.org/abs/2607.24707v1) | A. Ansari, Y. Mohammadi, F. Nili et al. | Introduces the first large-scale benchmark for structured understanding of Entity-Relationship diagrams as rendered images, enabling AI-assisted database engineering from visual schemas. |
| [The Visual Bottleneck: Sparse-Frame Adaptation of MLLMs for Joint Spatial-Temporal Video Grounding](http://arxiv.org/abs/2607.24570v1) | J. Zhang, S. Madikeri | Adapts MLLMs to sparse-frame inputs (8–16 frames) for scalable video policy-violation localization, addressing the compute bottleneck in large-scale video moderation. |
| [Efficient LLM-Generated Shuttling Compilers for Complex Trapped-Ion Architectures](http://arxiv.org/abs/2607.24714v1) | F. Kreppel, R. Salkhordeh, F. Schmidt-Kaler et al. | Demonstrates Claude Opus 4.7 generating and iteratively refining full shuttling compilers for trapped-ion quantum computers, a first for LLM-driven quantum control software. |

---

## 3. Research Trend Signal

**Three accelerating directions** dominate this batch. First, **agentic rigor** is replacing agentic hype: multiple papers formalize planning theory (Men et al.), audit reasoning fidelity (Pandey & Jajoo), enforce security via information-flow algebra (Kravchenko et al.), and demand verification over mere revision loops (Gao et al.). Second, **deployment-scale efficiency** has moved from model-centric to system-centric: sparse-attention indexing (PIVOT), page-local KV compression (LOCKS), per-example data curation (DataOrchestra), and confidence-adaptive inference (CADER) all optimize the *serving stack* rather than the model alone. Third, **multimodal medical AI** is converging on vision-centric architectures with *intrinsic* explainability (ClinFusion, KANEx) rather than post-hoc probes. A quieter but deep trend: **theoretical guarantees for generative and scientific ML**—global PINN/DGM convergence, certified parallel-in-time Sinkhorn, CFG-distillation alignment—signal that foundation-model adjacent fields are maturing from empirical craft to provable science.

---

## 4. Worth Deep Reading

| Paper | Why It Matters |
| :--- | :--- |
| **[The Physics of Multi-Turn Long-Horizon Planning](http://arxiv.org/abs/2607.24720v1)** | Provides the first unified theoretical framework connecting pre-training data, post-training distillation, and emergent planning ability in agents. Essential reading for anyone building or evaluating agentic systems. |
| **[ClinFusion: A Vision-Centric Multimodal LLM System for Holistic Medical Understanding](http://arxiv.org/abs/2607.24743v1)** | Addresses the *central* deployment bottleneck in medical AI—heterogeneous 2D/3D image ingestion with clinically aligned evaluation. Its vision-centric architecture and protocol design will influence the next generation of clinical foundation models. |
| **[Eviction as Estimation: A Fixed-Lag Smoothing View of Test-Time Memory](http://arxiv.org/abs/2607.24667v1)** | Reframing KV-cache eviction as hidden-signal estimation is a conceptual leap. The fixed-lag smoothing perspective yields principled, testable policies and explains when "measuring beats accumulating"—directly applicable to every long-context LLM serving stack. |

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*