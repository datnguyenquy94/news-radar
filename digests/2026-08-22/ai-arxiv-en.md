# ArXiv AI Research Digest 2026-08-22

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-22 01:39 UTC

---

# ArXiv AI Research Digest — 2026-08-22

---

## 1. Today's Highlights

Today's submissions reveal a field increasingly focused on **rigorous evaluation of agent capabilities beyond static benchmarks** — memory fidelity, skill transfer, credit assignment, and policy compliance in stateful, long-horizon settings. A second major thread is **efficient adaptation and serving**: CPU-first architectures, sparse attention fine-tuning, KV-cache reuse for tool-augmented agents, and compute-efficient MoE hyperparameter transfer. Third, **unlearning and compression safety** are being audited with context-sensitive benchmarks and asymmetric-harm analysis, moving beyond aggregate metrics. Finally, **domain-specific grounding** (medical, legal, scientific code, temporal KGQA) is maturing into expert-validated, multilingual evaluation suites.

---

## 2. Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ConceptGuard: Benchmarking Context-Sensitive Unlearning in Large Language Models](http://arxiv.org/abs/2608.20338v1) | Sahil Kale, Ian Harris et al. | Introduces the first benchmark evaluating *context-sensitive* unlearning, where harmful knowledge must be removed only in specific contexts while preserved elsewhere. Exposes critical failures of current methods on disjoint forget/retain sets. |
| [The Asymmetric Harms of LLM Compression](http://arxiv.org/abs/2608.19670v1) | Yuan Wu, Mairui Li et al. | Systematically evaluates 3 LLMs across 11 compression methods, showing that standard metrics (perplexity, accuracy) mask severe behavioral shifts — knowledge loss, reasoning degradation, and safety regressions that are highly non-uniform across domains. |
| [Learning how to Forget: Fine-tuning for Long-Context Sparse Attention](http://arxiv.org/abs/2608.19920v1) | Matthias Seeger, Zeyu Zhang et al. | Provides a general fine-tuning recipe for sparse-attention models that works with *any* KV-cache eviction policy, enabling long-context inference without retraining from scratch — a practical bridge between sparse-attention research and deployed models. |
| [Daedalus-150M: A Convolution-Attention Hybrid Designed for CPU Inference](http://arxiv.org/abs/2608.20210v1) | Christos Koutsiaris et al. | Designs a 150M-parameter model *from the ground up* for single-user, 4-bit CPU inference: full attention in only 6/18 blocks, convolution elsewhere. Demonstrates that target-hardware-first architecture yields better latency/quality trade-offs than post-hoc compression. |
| [LoRA-GA²: Low Rank Adaptation with Multi-step Gradient Adaptive Alignment](http://arxiv.org/abs/2608.19800v1) | Haonan He, Xinyue Fan et al. | Closes the LoRA vs. full fine-tuning gap by aligning multi-step gradient trajectories, not just one-step approximations. Achieves near-full-FT performance with LoRA's memory efficiency across multiple benchmarks. |
| [Phantom Gains: Auditing Self-Improvement Against a Measured Null](http://arxiv.org/abs/2608.20290v1) | Cheng Xu, Nan Yan et al. | Shows that apparent self-improvement gains in iterative LoRA training are often measurement artifacts from differencing noisy estimates. Proposes a null-controlled auditing framework to distinguish real improvement from statistical mirages. |

---

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Inducing Task Models from Computer-Use Traces](http://arxiv.org/abs/2608.20319v1) | Yucheng Jiang, Zora Zhiruo Wang et al. | Derives symbolic, auditable task models from passive screenshots + action traces. Enables computer-use agents to learn *how* everyday work is done, not just mimic demonstrations — critical for real-world deployment where interpretability and reuse matter. |
| [Break It Down, Pass It On: Cross-Task Skill Transfer in LLM Agents](http://arxiv.org/abs/2608.20274v1) | Yiyang Feng, Biddut Sarker Bijoy et al. | Systematically studies when agent-induced skills transfer reliably across tasks vs. when they harm performance. Identifies structural conditions (skill modularity, task similarity) that predict transfer success — foundational for lifelong learning agents. |
| [EnvHarness: Awakening Static Worlds for Agent Learning](http://arxiv.org/abs/2608.19880v1) | Chengsong Huang, Zifeng Wang et al. | Generates *adaptive* environments that target an agent's current weaknesses, replacing hand-built static benchmarks. Uses LLM-based environment mutation guided by agent failure modes — a step toward self-improving evaluation loops. |
| [Can Agent Memory Systems Track Evolving State?](http://arxiv.org/abs/2608.19652v1) | Xinyi Fan, Miri Liu et al. | Argues that current memory benchmarks only test recall, not *state tracking* (facts, constraints, dependencies that change over time). Introduces a benchmark requiring agents to maintain consistent world models across updates — exposing severe gaps in existing systems. |
| [MileGPO: Milestone Inference with Local Evidence for Graph-Based Policy Optimization of Long-Horizon LLM Agents](http://arxiv.org/abs/2608.19803v1) | Bo Qian, Yuting Wu et al. | Addresses credit assignment in long-horizon RL by inferring milestone-level rewards from local trajectory evidence, then propagating via graph-based advantage estimation. Outperforms trajectory-level and step-grouping baselines on complex agent tasks. |
| [One Success Isn't Reliability: Thinkingbox, a Sandbox and Benchmark for Agents in Stateful Business Workflows](http://arxiv.org/abs/2608.19741v1) | Zhuochun Li, Youngmin Ko et al. | Introduces a stateful, executable business-workflow sandbox where agents must gather information, resolve dependencies, and recover from errors across multi-step processes. Measures *reliability* (consistency across runs), not just one-shot success. |

---

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Inject, Align, Recover: Staged Post-Training for Retrieval-Free Document Knowledge Internalization](http://arxiv.org/abs/2608.20281v1) | Qian Kou, Xiaofeng Shi et al. | Proposes a three-stage post-training pipeline (inject → align → recover) that converts a fixed document corpus into parametric knowledge for retrieval-free QA. Outperforms RAG and continued pretraining on closed-book knowledge tasks. |
| [ReCache: Efficient KV Cache Reuse and Compression for Tool-Augmented LLM Agents](http://arxiv.org/abs/2608.19662v1) | Yichu Fang, Sitong Wei et al. | Solves the KV-cache reuse problem for tool-augmented agents where tool/schema prefixes recur in varying orders. Independently caches resource representations and assembles them at inference, cutting prefill compute by 40–70%. |
| [FormalTCS: Benchmarking End-to-End Frontier Formal Theoretical Computer Science Research of LLMs](http://arxiv.org/abs/2608.20153v1) | Dingzirui Wang, Xuanliang Zhang et al. | First expert-validated benchmark for *end-to-end* TCS research: conjecture formation, proof sketching, formalization, and verification. Reveals that current LLMs fail at the full pipeline despite strong sub-task performance. |
| [MemTrapBench: Benchmarking Cognitive Traps in LLM Memory Use](http://arxiv.org/abs/2608.20202v1) | Mengru Wang, Haozhe Luo et al. | Shifts memory evaluation from "can it retrieve?" to "does it fall for cognitive traps?" — testing interference, false memory, recency bias, and over-reliance on retrieved context. Exposes systematic vulnerabilities in current memory-augmented LLMs. |
| [Projector Is All You Train](http://arxiv.org/abs/2608.19726v1) | Nyx Iskandar, Saathvik Selvan et al. | Shows that for adapting MLLMs to new modalities, *only training the projector* (with frozen backbone and encoder) matches or exceeds full fine-tuning — drastically reducing compute and catastrophic forgetting. |
| [Let's Scale Step by Step: Compute-Efficient Hyperparameter Transfer for Large-Scale Mixture-of-Experts](http://arxiv.org/abs/2608.20061v1) | Nayeon Kim, Hojin Lee et al. | Enables hyperparameter (especially learning rate) transfer from small to large MoE models *without* sweeping at target scale. Uses a step-wise scaling law that accounts for expert routing dynamics — critical for affordable MoE training. |

---

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [G-CARL: Grounded Checklist-Aligned Reward Learning for Patient-Oriented Medical Report Interpretation](http://arxiv.org/abs/2608.20331v1) | Shiao Xie, Siyu Chen et al. | Combines evidence-grounded factuality with patient-tailored communication via a checklist-aligned reward model. First framework to jointly optimize medical accuracy and layperson accessibility in report interpretation. |
| [SWE-bench Science: Can Coding Agents Resolve Engineering Tasks in Science?](http://arxiv.org/abs/2608.19799v1) | Zhipeng Xu, Jiahao Lu et al. | Extends SWE-bench to *scientific* codebases where bugs compromise experimental evidence, not just functionality. Requires agents to understand domain semantics (units, physical constraints, statistical validity) — a higher bar than standard software engineering. |
| [TempJail: Temporal Jailbreak Attack against Large Vision-Language Models via Subtitle Scheduling](http://arxiv.org/abs/2608.19737v1) | Ling Zhou, Yihao Huang et al. | First video jailbreak exploiting *temporal scheduling* of malicious subtitles across frames. Bypasses frame-level safety filters by distributing harmful content over time — reveals a new attack surface for LVLMs. |

---

## 3. Research Trend Signal

Three convergent directions are emerging. **First, agent evaluation is becoming *longitudinal and stateful***: benchmarks now test memory consistency over evolving worlds (MemTrapBench, Can Agent Memory Systems Track Evolving State?), skill transfer across tasks (Break It Down, Pass It On), credit assignment in long horizons (MileGPO), and reliability in stateful workflows (Thinkingbox). Static, single-turn benchmarks are being recognized as insufficient for deployed agents. **Second, *efficiency is moving up the stack*** — from model compression (Daedalus, LoRA-GA², The Asymmetric Harms of LLM Compression) to system-level KV-cache reuse for agent toolchains (ReCache), compute-efficient MoE scaling laws, and projector-only multimodal adaptation. The focus has shifted from "make it work" to "make it work *within budget* at scale." **Third, *safety and alignment are gaining domain specificity***: unlearning benchmarks now require context sensitivity (ConceptGuard), compression audits measure asymmetric harms, jailbreaks exploit temporal modalities (TempJail), and medical/legal/scientific evaluation uses expert-validated, multilingual, checklist-aligned criteria (G-CARL, HealMed, ContractScrub, SWE-bench Science). The era of generic "helpfulness/harmlessness" eval is ending; rigorous, domain-grounded assurance is taking its place.

---

## 4. Worth Deep Reading

1. **[ConceptGuard: Benchmarking Context-Sensitive Unlearning in Large Language Models](http://arxiv.org/abs/2608.20338v1)** — *Unlearning is a prerequisite for deployable, controllable LLMs. This paper finally introduces a benchmark that matches the real-world requirement: remove knowledge *selectively by context*, not globally. The failure modes it exposes in current methods will define the research agenda for the next year.*

2. **[EnvHarness: Awakening Static Worlds for Agent Learning](http://arxiv.org/abs/2608.19880v1)** — *The insight that evaluation environments should *adapt to the agent's weaknesses* — not remain static — is a paradigm shift. If this approach scales, it enables continuous, automated agent improvement loops that mirror how humans learn from targeted practice.*

3. **[Inject, Align, Recover: Staged Post-Training for Retrieval-Free Document Knowledge Internalization](http://arxiv.org/abs/2608.20281v1)** — *Retrieval-free knowledge internalization is the holy grail for low-latency, high-recall domain adaptation. The three-stage recipe (inject/align/recover) is principled, empirically strong, and immediately applicable to enterprise RAG replacement — a rare combination of theoretical clarity and practical impact.*

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*