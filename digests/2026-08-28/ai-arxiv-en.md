# ArXiv AI Research Digest 2026-08-28

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-08-28 11:03 UTC

---

# ArXiv AI Research Digest — 2026-08-28

---

## 1. Today's Highights

Today's submissions reveal a strong convergence on **inference-time scaling** and **agent self-improvement** as the dominant paradigms for advancing LLM capabilities without massive retraining. Multiple papers introduce frameworks where models learn from their own failures (CritICL), optimize policies at test time (TTPO), or evolve persistent skills from interaction traces (WikiSkill, RedEvoAgent). A parallel trend is **rigorous evaluation infrastructure**: new benchmarks target real-world code review (MCR-Bench), enterprise Q&A (CorporateBench), probabilistic world modeling (PAWBench), and accessibility (BrailleBench). Finally, **efficiency breakthroughs** continue—Puro-2B demonstrates competitive pretraining on a single consumer GPU, while Successive Capacity Growth and LeVJEPA tackle architectural bloat in vision and video models.

---

## 2. Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CritICL: Inference-Time Weak-to-Strong Generalization from Small Language Model Failure Modes](http://arxiv.org/abs/2608.27455v1) | Yufan Wu, Yinghui He, Zhengyi Hu et al. | Uses small-model failure patterns as in-context critiques to steer large models at inference time, achieving strong generalization without retraining or external verifiers. |
| [TTPO: Test-Time Policy Optimization](http://arxiv.org/abs/2608.27448v1) | Aozhe Wang, Zhengxi Lu, Jianze Wang et al. | Replaces ground-truth rewards with learned verifiers to enable on-policy RL at test time, closing the gap between training-time and deployment-time adaptation. |
| [Boosting LLM Exploration via Weak-Model Guidance in RLVR](http://arxiv.org/abs/2608.27420v1) | Xingyu Shen, Huishuai Zhang, Peng Li et al. | Shows that weak-model guidance preserves policy entropy during RL with verifiable rewards, preventing reasoning collapse and improving pass@k for large k. |
| [Consolidating RLVR Capabilities Across Domains: A Deep Dive into Fusion Paradigms](http://arxiv.org/abs/2608.27409v1) | Siye Wu, Kai Yang, Yuchen Cai et al. | Systematically compares three fusion paradigms (Merge, Mixture, Distillation) for combining domain-specialized RLVR experts, providing practical recipes for multi-capability models. |
| [Not All Eval-Awareness Is Equal: Capabilities Framing Predicts Compliance](http://arxiv.org/abs/2608.27340v1) | Allison Zhuang, Santiago Aranguri | Distinguishes subtypes of evaluation-awareness in CoT; shows that framing model capabilities (vs. evaluation context) predicts safety compliance, refining steering interventions. |
| [Puro-2B: Poor Lab's Qwen2-1.5B Trained on RTX 5090 within $5090](http://arxiv.org/abs/2608.27370v1) | Kairong Luo, Jiarui Cui, Yaorui Yin et al. | Demonstrates competitive 1.5B-parameter pretraining on a single consumer GPU with a $5K budget, publishing full recipe, data, and checkpoints for reproducibility. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](http://arxiv.org/abs/2608.27454v1) | Liyan Tang, Cyrus Rashtchian, Chun-Sung Ferng et al. | Converts agent interaction traces into structured, versioned skill libraries that persist across sessions, enabling cumulative capability growth without retraining. |
| [RedEvoAgent: Automatic Red-Teaming Agent with Experience-Driven Skill Evolution](http://arxiv.org/abs/2608.27439v1) | Junjie Zhang, Hui Liu, Kecheng Chen et al. | An autonomous red-teamer that evolves attack skills from experience, discovering novel jailbreaks against tool-use agents that fixed-prompt methods miss. |
| [INTENT-AS-A-TOOL Makes it Easy to Track Agentic Misalignment](http://arxiv.org/abs/2608.27348v1) | Yutong Zhang, Jianshuo Dong, Peng Xu et al. | Formalizes intent as a first-class tool call, enabling fine-grained monitoring of goal-conflict-driven misalignment in autonomous agents via CoT inspection. |
| [Understanding Evolution Strategies for LLM Reasoning: Broader Reasoning Coverage than GRPO](http://arxiv.org/abs/2608.27351v1) | Yunpeng Ba, Zhi Zheng, Yue Xie et al. | Analyzes why Evolution Strategies maintain broader reasoning coverage than GRPO, identifying ES as a memory-efficient alternative for diverse reasoning tasks. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [SWE-Prime: Fewer Trajectories, Better Performance](http://arxiv.org/abs/2608.27449v1) | Dewu Zheng, Ruizhe Ye, Yanlin Wang et al. | Shows that filtering agent trajectories by *quality* (not just success) yields better SFT data; achieves SOTA on SWE-bench with 10× fewer trajectories. |
| [From Static to Dynamic: Benchmarking Real-World Code Review with MCR-Bench](http://arxiv.org/abs/2608.27442v1) | Dewu Zheng, Yanlin Wang, Xiwen Wang et al. | Introduces the first benchmark for *iterative*, multi-turn code review with human-annotated developer–reviewer dialogues, exposing gaps in current LLM reviewers. |
| [CorporateBench: Large-Scale Q&A Benchmarking with Temporal Knowledge Bases](http://arxiv.org/abs/2608.27391v1) | Sil Hamilton, Albert Yu Sun, Oscar J. Romero et al. | Human-validated enterprise Q&A benchmark with temporal document versions, realistic access controls, and multi-hop reasoning—filling a critical evaluation gap. |
| [PAWBench: How Far Are We from Probabilistically Aligned World Modeling?](http://arxiv.org/abs/2608.27345v1) | Yuandong Pu, Le Zhuo, Sayak Paul et al. | Evaluates video generation models as *distributional* world models, measuring whether they capture the full distribution of valid physical futures, not just one plausible trajectory. |
| [LeVJEPA: Efficient & Scalable Video Pretraining without the Heuristics](http://arxiv.org/abs/2608.27395v1) | Lukas Kuhn, Lucas Maes, Giuseppe Serra et al. | Removes architectural asymmetries (EMA target encoders) from video JEPA training, achieving comparable representation quality with simpler, more scalable objectives. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [CLAP: Cross-Embodiment Video World Models are Zero-Shot Physical Simulators](http://arxiv.org/abs/2608.27406v1) | Kechen Liu, Ola Shorinwa | Aligns heterogeneous robot embodiment videos into a shared latent space, enabling zero-shot simulation and policy transfer across morphologically distinct robots. |
| [Mechanistic Reaction Prediction via Discrete Flow Matching on Graph-Structured Electron Occupation](http://arxiv.org/abs/2608.27429v1) | Nguyen Xuan-Vu, Octavian Susanu, Daniel Armstrong et al. | Models chemical reactions as electron-flow transformations using discrete flow matching on orbital graphs, outperforming topology-only edits and de novo generation. |
| [Learning a Continuous Sepsis Severity Score Without Hour-by-Hour Supervision](http://arxiv.org/abs/2608.27421v1) | Kevin Zhu, Ryan Zhang, Baraa Abed et al. | Learns a continuous sepsis severity score from irregular clinical time series using weak supervision, outperforming decades-old discrete indices on two hospital cohorts. |
| [BrailleBench: Investigating Multi-Criteria Braille Comprehension in Large Language Models](http://arxiv.org/abs/2608.27268v1) | Jinghan Zhang, Fengran Mo, Zhiyu Chen et al. | First comprehensive benchmark for LLM Braille understanding across translation, reading comprehension, and tactile rendering—revealing significant accessibility gaps. |

---

## 3. Research Trend Signal

Three emergent directions dominate this batch. **First, inference-time compute is being formalized as a first-class optimization axis**: CritICL, TTPO, and the RLVR exploration papers collectively treat test-time adaptation not as a heuristic but as a principled learning problem—with learned verifiers, weak-model guidance, and failure-mode mining replacing brute-force sampling. **Second, agent lifecycle management is shifting from static prompts to persistent, auditable knowledge bases**: WikiSkill, RedEvoAgent, and Persona-Execution Separation all address the same problem—how to accumulate, version, and govern agent experience—suggesting a maturing "agent ops" layer. **Third, evaluation is moving beyond static accuracy toward *distributional* and *interactive* fidelity**: PAWBench demands probabilistic world-model alignment, MCR-Bench captures multi-turn code-review dynamics, CorporateBench encodes temporal enterprise knowledge, and BrailleBench introduces multi-criteria accessibility metrics. Together, these signal a field increasingly focused on **reliable, auditable, and continually improving deployment** rather than raw benchmark chasing.

---

## 4. Worth Deep Reading

1. **[CritICL](http://arxiv.org/abs/2608.27455v1)** — The weak-to-strong generalization via *failure-mode mining* is a conceptually clean inversion of typical distillation; the method is lightweight, training-free, and directly addresses the inference-scaling bottleneck. Essential for anyone working on test-time compute.

2. **[WikiSkill](http://arxiv.org/abs/2608.27454v1)** — Provides the most complete formulation to date of *persistent skill libraries* for agents, with versioning, composition, and retrieval. The architecture pattern (experience → structured skill → evolution) will likely become a reference design for agent memory systems.

3. **[SWE-Prime](http://arxiv.org/abs/2608.27449v1)** — A rare empirical study that *quantifies* the trajectory-quality vs. quantity tradeoff in agent SFT, with a concrete filtering protocol that cuts data 10× while improving results. Immediately actionable for code-agent developers and a model for data-centric RLHF in other domains.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*