# ArXiv AI Research Digest 2026-08-29

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-29 06:48 UTC

---

# ArXiv AI Research Digest — 2026-08-29

## Today's Highlights

Inference-time compute scaling continues to dominate LLM research, with **CritICL** and **TTPO** introducing frameworks that leverage small-model failure modes and test-time policy optimization without ground-truth labels respectively. Agent architectures are shifting toward **persistent skill evolution** (WikiSkill, RedEvoAgent) and **structured harnesses** that separate persona from auditable execution. RLVR advances focus on **entropy preservation** via weak-model guidance and **multi-domain capability fusion** across specialized experts. Evaluation is maturing toward **dynamic, real-world benchmarks** (MCR-Bench, CorporateBench, PAWBench) that capture multi-turn interaction, temporal knowledge, and probabilistic world modeling. Notably, **cross-embodiment video world models** (CLAP) demonstrate zero-shot physical simulation, while **cost-efficient pretraining** (Puro-2B) pushes frontier-scale training onto single consumer GPUs.

---

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](http://arxiv.org/abs/2608.27455v1) | Yufan Wu, Yinghui He, Zhengyi Hu et al. | Introduces CritICL, an inference-time framework where a small model's failure modes guide a larger model's reasoning without repeated generation or external verifiers. Matters because it enables weak-to-strong generalization at test time with minimal compute overhead. |
| [TTPO: Test-Time Policy Optimization](http://arxiv.org/abs/2608.27448v1) | Aozhe Wang, Zhengxi Lu, Jianze Wang et al. | Proposes test-time policy optimization that replaces ground-truth rewards with learned verifiers, enabling RL-style adaptation at inference without labeled data. Matters because it unlocks test-time training for reasoning tasks where ground truth is unavailable. |
| [Boosting LLM Exploration via Weak-Model Guidance in RLVR](http://arxiv.org/abs/2608.27420v1) | Xingyu Shen, Huishuai Zhang, Peng Li et al. | Uses a weak model to guide exploration during RLVR, preventing entropy collapse and maintaining reasoning coverage for high pass@k. Matters because it solves a fundamental degradation mode in verifiable-reward RL without algorithmic regularization. |
| [Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090](http://arxiv.org/abs/2608.27370v1) | Kairong Luo, Jiarui Cui, Yaorui Yin et al. | Demonstrates full pretraining of a 1.5B model on a single RTX 5090 within a $5090 budget, open-sourcing data, code, and checkpoints. Matters because it dramatically lowers the barrier for academic and open-source LLM pretraining. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](http://arxiv.org/abs/2608.27454v1) | Liyan Tang, Cyrus Rashtchian, Chun-Sung Ferng et al. | Compiles agent interaction trajectories into persistent, reusable skill libraries that evolve across sessions. Matters because it addresses the key limitation of ephemeral in-context learning by giving agents long-term, composable memory. |
| [SWE-Prime: Fewer Trajectories, Better Performance](http://arxiv.org/abs/2608.27449v1) | Dewu Zheng, Ruizhe Ye, Yanlin Wang et al. | Shows that filtering agent trajectories for quality—not just success—yields better SFT data for software engineering agents with far fewer examples. Matters because it reframes agent data curation from quantity to supervision quality. |
| [RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution](http://arxiv.org/abs/2608.27439v1) | Junjie Zhang, Hui Liu, Kecheng Chen et al. | An autonomous red-teaming agent that evolves attack skills from experience, adapting to diverse execution environments. Matters because it moves beyond fixed attack libraries toward adaptive, persistent adversarial testing. |
| [What Makes Good Agentic Data? An ACE Lens on Data Generation for LLM Agents](http://arxiv.org/abs/2608.27260v1) | Xingshan Zeng, Zishan Xu, Boju Zhang et al. | Proposes the ACE (Agentic Consistency Evaluation) framework to assess generated agent data across environment, task, interaction, and success-signal consistency. Matters because it provides the first principled criteria for high-quality agentic training data. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [From Static to Dynamic: Benchmarking Real-World Code Review with MCR-Bench](http://arxiv.org/abs/2608.27442v1) | Dewu Zheng, Yanlin Wang, Xiwen Wang et al. | Introduces MCR-Bench, a multi-turn code review benchmark capturing iterative developer-reviewer interactions. Matters because it shifts code review evaluation from static diffs to realistic conversational workflows. |
| [CorporateBench: Large-Scale Q&A Benchmarking with Temporal Knowledge Bases](http://arxiv.org/abs/2608.27391v1) | Sil Hamilton, Albert Yu Sun, Oscar J. Romero et al. | A human-validated enterprise Q&A benchmark with temporal document versions, access control, and multi-hop reasoning. Matters because it fills the evaluation gap for RAG over private, evolving corporate knowledge. |
| [LeVJEPA: Efficient & Scalable Video Pretraining without the Heuristics](http://arxiv.org/abs/2608.27395v1) | Lukas Kuhn, Lucas Maes, Giuseppe Serra et al. | Removes architectural asymmetries (EMA target encoders) from video JEPA pretraining via a lightweight latent variance regularizer. Matters because it simplifies and scales video representation learning without heuristic tricks. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators](http://arxiv.org/abs/2608.27406v1) | Kechen Liu, Ola Shorinwa | Trains a single video world model across heterogeneous robot embodiments, enabling zero-shot physics simulation on unseen morphologies. Matters because it unlocks transferable physical reasoning from diverse video corpora. |
| [Making Clinical Language Models Auditable: Concept-Guided Fine-Tuning for Robust Prediction](http://arxiv.org/abs/2608.27397v1) | Jin Mu, Guanhua Chen | CAST uses sparse autoencoders to suppress note-specific artifacts (templates, boilerplate) during fine-tuning, improving out-of-distribution robustness. Matters because it directly addresses the deployment gap in clinical NLP via interpretable concept control. |
| [Scaling Graph Neural Networks for Friend Recommendation: Multi-Hash User Embeddings and Temporal Neighbor Sampling](http://arxiv.org/abs/2608.27413v1) | Maksim Utushkin, Andrei Ovsiannikov, Alexander D'yakonov | Deploys production-scale GNNs for friend recommendation using multi-hash embeddings and temporal sampling on graphs with hundreds of millions of users. Matters because it solves the systems-level challenges of industrial GNN deployment. |

---

## Research Trend Signal

Three convergent directions define this batch. First, **inference-time adaptation** is maturing beyond simple chain-of-thought: CritICL and TTPO show that small-model critiques and learned verifiers can drive strong-model improvement at test time without labels, suggesting a future where "thinking" is a configurable inference policy. Second, **agent statefulness** is becoming architectural: WikiSkill's persistent skill libraries, RedEvoAgent's evolutionary attack repertoires, and Persona-Execution Separation's audit-friendly persona/execution split all treat agent memory as a first-class, versioned component rather than context-window ephemera. Third, **evaluation realism** is replacing static benchmarks: MCR-Bench (multi-turn code review), CorporateBench (temporal enterprise RAG), and PAWBench (probabilistic world modeling) share a focus on dynamic, multi-distribution, success-criteria-rich tasks. Together, these trends point toward systems that *learn continuously at test time*, *maintain auditable long-term state*, and *are measured on deployment-fidelity tasks*—a shift from "better models" to "better model-operated systems."

---

## Worth Deep Reading

1. **[CritICL](http://arxiv.org/abs/2608.27455v1)** — Reframes inference-time scaling as *cross-model critique* rather than self-consistency or verification. The weak-to-strong generalization mechanism is theoretically intriguing and practically lightweight; understanding its failure modes could define the next generation of test-time compute strategies.

2. **[WikiSkill](http://arxiv.org/abs/2608.27454v1)** — Provides the most complete architecture to date for *persistent, evolving agent skills*. The compilation pipeline (trajectory → skill → library → retrieval → adaptation) is a blueprint for stateful agents that improve across deployments, not just within a session.

3. **[CLAP](http://arxiv.org/abs/2608.27406v1)** — Demonstrates that *cross-embodiment video pretraining* yields a genuine physical simulator, not just a video generator. The zero-shot transfer to unseen robot morphologies suggests video world models may become the universal physics engine for embodied AI.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*