# ArXiv AI Research Digest 2026-09-10

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-10 04:16 UTC

---

# ArXiv AI Research Digest — 2026-09-10

## Today's Highlights

Today's submissions reveal a strong convergence on **making foundation models deployable, verifiable, and efficient in real-world systems**. Key directions include: (1) rigorous evaluation protocols that measure *served systems* rather than model checkpoints alone (IBIB); (2) memory and context architectures that enable persistent, long-horizon reasoning (ConvMem, Semigroup-JEPA, Fortunate Recall); (3) private, verifiable inference frameworks (Maverick, GANDR); and (4) a theoretical breakthrough resolving the gap-entropy conjecture for best-arm identification. Cross-cutting themes are lifecycle management of knowledge (what to store, forget, or retrieve) and the shift from static benchmarks to dynamic, deployment-aware assessment.

---

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [IdeaAMBIG: Benchmarking Implementation-Critical Gaps in Research-Idea Specifications](http://arxiv.org/abs/2609.10539v1) | Y. Ma, Y. Zhao, S. Wu et al. | Introduces a benchmark measuring whether research ideas are specified precisely enough for faithful implementation, exposing a critical but overlooked dimension of reproducibility. |
| [ConvMem: Convolutional Memory for Long-Context Reasoning](http://arxiv.org/abs/2609.10441v1) | H. Zhang, Z. Gu, F. Bai et al. | Proposes a convolutional memory module that iteratively compresses and updates long-context representations, enabling fixed-size models to reason over arbitrarily long sequences. |
| [Forgetting Only What Matters: Layer-Selective Unlearning toward Robust LLMs](http://arxiv.org/abs/2609.10439v1) | R. Ranjan, O. Kotevska, A. Polyzou | Develops layer-selective unlearning that targets specific parameters, removing undesirable content while preserving general capabilities—critical for privacy and compliance. |
| [KVShareArena: KV-Cache Reuse Across Contexts and Model Checkpoints](http://arxiv.org/abs/2609.10266v1) | X. Shi, Q. Lou | Extends KV-cache reuse beyond prefix matching to arbitrary retrieved chunks and cross-checkpoint scenarios, directly addressing RAG and multi-agent serving bottlenecks. |
| [Building Multilingual Bridges: Data Mixing as the Pillar of Generalization for In-Language Reasoning](http://arxiv.org/abs/2609.10445v1) | M. Mofakhami, A. Sahu, A. R. Salamanca et al. | Shows that strategic data mixing during training enables models to reason *in* the prompt language rather than defaulting to English, a key step for equitable multilingual LLMs. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Show-Harness: Just a VLM Agent Can Play Robots](http://arxiv.org/abs/2609.10522v1) | Y. Chen, Z. Bai, Z. Cao et al. | Presents an embodied harness letting VLMs control robots through a compact semantic interface, demonstrating broad generalization without robot-specific fine-tuning. |
| [Semigroup-JEPA: Latent Dynamics Consistency for Zero-Shot Physics Generalization](http://arxiv.org/abs/2609.10464v1) | A. Z. Liu, H. Sun, L. Baker et al. | Enforces semigroup structure in JEPA latent dynamics, achieving zero-shot generalization to novel physical scenarios—advancing world models that truly learn physics. |
| [JarvisGUI: Towards Cross-Device GUI Agents with Dynamic Task Composition](http://arxiv.org/abs/2609.10451v1) | Z. Chen, Y. Lu, Z. Cheng et al. | Benchmarks and enables GUI agents that operate across heterogeneous devices, maintaining shared state and transferring intermediate results—mirroring real user workflows. |
| [TRACE: Training Reasoning Agents for Causal Exploration with Synthesized Rewards](http://arxiv.org/abs/2609.10315v1) | R. Sun, Z. Shi, B. He | Uses synthesized rewards to train agents for diagnostic causal reasoning where ground-truth verification is expensive, extending RLVR beyond math/code to complex data analysis. |
| [What Should an Agent Forget? Separating What Is Stored from What Is Used](http://arxiv.org/abs/2609.10263v1) | Y. Li, Y. Li | Introduces RD-Forget, a training-free framework distinguishing persistent storage from context-relevant retrieval, resolving the tension between historical fidelity and current accuracy. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [IBIB: A Protocol for Measuring Enterprise AI Systems by Serving Route, Not Model Identifier](http://arxiv.org/abs/2609.10494v1) | B. Stenstrom, C. Vasantharajan, B. Sathianathan | Proposes evaluating *deployed systems* (weights + serving stack + precision + contract) rather than model checkpoints alone, correcting systematic measurement error in all current benchmarks. |
| [A Positive Resolution of the Gap-Entropy Conjecture](http://arxiv.org/abs/2609.10529v1) | P. M. Aronow, N. Kallus, P. Lopatto | Proves the gap-entropy conjecture for Gaussian best-arm identification, establishing the exact instance-dependent sample complexity— a foundational result for sequential decision-making. |
| [Algorithmic Stability via Ensembling](http://arxiv.org/abs/2609.10428v1) | R. Foygel Barber, R. J. Samworth | Provides a general framework quantifying how any averaging-based ensembling strategy improves algorithmic stability, with implications for robustness and generalization bounds. |
| [Maverick: Private and Verifiable LLM Inference Made Practical via Matrix-Vector Multiplication Delegation](http://arxiv.org/abs/2609.10264v1) | B. Merbaum, M. A. Raeisi, W. Wang et al. | Achieves private, verifiable LLM inference by delegating only matrix-vector multiplications to a server, making cryptographic guarantees practical for large models. |
| [One Loop, Two Gains: Can Active Learning win the Lottery for Free?](http://arxiv.org/abs/2609.10311v1) | B. Tscheschner, E. Veas, M. Masana | Shows that a single active learning loop can simultaneously identify lottery-ticket subnetworks and select informative samples, unifying two efficiency paradigms at near-zero overhead. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [OmniMed-FL: A Robust Multimodal Federated Learning Framework for Clinical Diagnosis](http://arxiv.org/abs/2609.10364v1) | A. Debnath, R. Saha, S. Misra | Integrates medical imaging and patient records in a privacy-preserving federated framework compliant with HIPAA/GDPR, addressing a critical bottleneck in clinical AI deployment. |
| [Cyber-Financial Contagion: Modeling the Propagation of an AI Vendor Compromise Through the Banking System](http://arxiv.org/abs/2609.10350v1) | A. Leytes | Models how a single compromised AI vendor can cascade through the banking system via shared fraud, credit, and AML dependencies—quantifying systemic risk from AI supply-chain concentration. |
| [Cross-Model Agreement as a Deployment-Time Reliability Signal for Automatic Polyp Segmentation](http://arxiv.org/abs/2609.10495v1) | S. Gupta, J. Singla | Introduces Referee-Based Quality Estimation (RBQE), using agreement between independent segmentation models as a real-time reliability signal when ground truth is unavailable. |

---

## Research Trend Signal

Three emergent directions stand out. **First, deployment-aware evaluation** is replacing static benchmarking: IBIB, RBQE, and the "later test set" paper (31) all argue that capability measurement must account for serving infrastructure, distribution shift over time, and reference-free reliability signals. **Second, memory lifecycle management** is becoming a first-class research problem—ConvMem, Fortunate Recall, RD-Forget, and layer-selective unlearning collectively frame memory as a dynamic resource requiring admission, retention, and forgetting policies conditioned on fact type and query intent. **Third, verifiable and private inference** is moving from theory to practice: Maverick’s MVM delegation, GANDR’s claim-level auditing, and OmniMed-FL’s multimodal FL show that cryptographic and federated guarantees are now being engineered into end-to-end clinical and legal pipelines. Together, these trends signal a maturation from "model-centric" to "system-centric" AI research, where the unit of analysis is the deployed, governed, and auditable service.

---

## Worth Deep Reading

1. **[IBIB: A Protocol for Measuring Enterprise AI Systems by Serving Route, Not Model Identifier](http://arxiv.org/abs/2609.10494v1)** — *Reasons*: This paper identifies a systematic validity threat in *all* current LLM benchmarks (scoring checkpoints, not served systems) and provides a concrete, auditable protocol. It will likely reshape how enterprise AI procurement and academic evaluation are conducted.

2. **[Semigroup-JEPA: Latent Dynamics Consistency for Zero-Shot Physics Generalization](http://arxiv.org/abs/2609.10464v1)** — *Reasons*: World models are a major bet for physical reasoning; this work provides the first principled test of whether JEPAs learn *physics* (via semigroup structure) rather than visual correlations, with strong zero-shot generalization results.

3. **[Maverick: Private and Verifiable LLM Inference Made Practical via Matrix-Vector Multiplication Delegation](http://arxiv.org/abs/2609.10264v1)** — *Reasons*: Private LLM inference has been theoretically possible but practically prohibitive. Maverick’s delegation of only MVMs to an untrusted server—while keeping the rest local—is a clever complexity-theoretic lever that could make verifiable privacy mainstream.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*