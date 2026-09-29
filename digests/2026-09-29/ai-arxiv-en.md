# ArXiv AI Research Digest 2026-09-29

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-09-29 05:25 UTC

---

# ArXiv AI Research Digest — 2026-09-29

## Today's Highlights

Today's submissions reveal three converging frontiers. First, **test-time compute scaling** is maturing beyond simple chain-of-thought: Telescopic Language Models, adaptive looped transformers, and harness learning show how to dynamically allocate inference budget while maintaining verifiable correctness. Second, **agent self-improvement without external RL** emerges as a practical paradigm—self-retrospection, native reflection in unified multimodal models, and test-time harness adaptation let agents refine behavior from their own execution traces. Third, **efficiency at the architecture level** advances on multiple axes: nested-capacity Transformers, multi-scale gated linear attention, stochastic attention sampling, and Muon optimizer variants collectively push the parameter–FLOP–quality Pareto frontier.

---

## Key Papers

### 🧠 Large Language Models (architecture, training, alignment, evaluation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Telescopic Language Models](http://arxiv.org/abs/2609.35769v1) | Zhilin Guo, Boqiao Zhang, Hakan Aktas et al. | Introduces a nested-capacity Transformer trained with stochastic prefix supervision, enabling a single model to serve any compute budget at inference without per-budget retraining or compression. |
| [How to Loop MoE: Flatten the Experts, Untie the Attention](http://arxiv.org/abs/2609.35751v1) | Shouren Wang, Chuang Ma, Mohsen Hariri et al. | Merges looped Transformers with sparse MoE by flattening experts across loop iterations and untying attention, achieving better parameter utilization than either paradigm alone. |
| [Improving Test-Time Scaling with Adaptive Looped Transformers](http://arxiv.org/abs/2609.35748v1) | Yichen You, Tianyu Fu, Aosong Feng et al. | Demonstrates that adaptive layer looping improves test-time scaling laws: as output length grows, looped models allocate compute more efficiently than static-depth baselines. |
| [MeqMuon: Matrix-Equilibrating Muon for LLM Pretraining](http://arxiv.org/abs/2609.35701v1) | Chang-Wei Shi, Xu Wang, Wu-Jun Li et al. | Extends the Muon optimizer with matrix-wise equilibration to balance update magnitudes across layers, yielding faster convergence and better downstream performance at scale. |
| [MS-GLA: Multi-Scale Gated Linear Attention](http://arxiv.org/abs/2609.35664v1) | Prasoon Dev, Anirudh Sankar, Vasudeva Varma et al. | Equips GLA heads with multi-temporal-resolution memory matrices, resolving the single-resolution bottleneck that forces heads to choose between local and global context. |
| [SANTA++: Sampling Attention through Representative Keys](http://arxiv.org/abs/2609.35629v1) | Kyle Lee, Christian Z. Pratt, Ruoyu Fang et al. | A training-free stochastic attention method that selects keys via representative clustering, achieving near-full-attention quality with sub-linear memory and compute. |

### 🤖 Agents & Reasoning (planning, tool use, multi-agent, chain-of-thought)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Learning Native Reflection in Unified Models with Interleaved Reinforcement Learning](http://arxiv.org/abs/2609.35767v1) | Yijia Fan, Ziqi Huang, Zhongang Cai et al. | Shows that unified multimodal models can self-correct by interleaving diagnosis, revision, and rendering within a single forward pass, trained via RL on the reflection loop. |
| [Shockingly Simple Self-retrospection Improves Agentic Models Without RL](http://arxiv.org/abs/2609.35741v1) | Jonathan Light, Christopher Zhang Cui, Jeonghye Kim et al. | Fine-tuning agents on their own natural-language explanations of past trajectories—without reward signals—improves future task success across diverse benchmarks. |
| [Harness Learning Enables Generalizable Test-Time Adaptation](http://arxiv.org/abs/2609.35738v1) | Alvin Zhang, Xuecheng Liu, Zixuan Wang et al. | Treats the agent's control harness (tool orchestration, context management) as a learnable program; adapting it at test time via task feedback generalizes across unseen tasks. |
| [TokenCast: Forecasting Token Consumption During LLM Agent Execution](http://arxiv.org/abs/2609.35760v1) | Chaoqian Ouyang, Ling Yue, Libin Zheng et al. | Predicts per-run token usage from early execution traces, enabling proactive budget enforcement and cost-aware scheduling for variable-length agent workloads. |
| [Not All Thinking is Created Equal: Latent Reasoning Discovers a Recurrent Search Algorithm for Depth Generalization](http://arxiv.org/abs/2609.35643v1) | Huzi Cheng, Zhewei Zhang | Identifies that latent-space reasoning implicitly implements a recurrent search algorithm, explaining why it generalizes to deeper reasoning depths than token-based CoT. |
| [Failure-Transparent Agents: Benchmarking Post-Failure Reporting in Tool-Using Language Models](http://arxiv.org/abs/2609.35732v1) | Junru Zhu, Shiming Xie, Aime Lu Fan Chen et al. | Introduces FTA-Bench to isolate the "reporting failure" mode—agents claiming success after tool errors—revealing systematic gaps in current tool-use evaluation. |

### 🔧 Methods & Frameworks (new techniques, benchmarks, efficiency improvements)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Unifying Distributional Training for One-Step Visual Generation](http://arxiv.org/abs/2609.35763v1) | Chi Zhang, Haoyang Shi, Yueyi Liu et al. | Provides a unified theoretical framework separating distribution modeling from matching discrepancy, connecting global and local distributional losses for one-step generation. |
| [PDMD: Projected Distribution Matching Distillation for Video Diffusion Models](http://arxiv.org/abs/2609.35768v1) | Zimo Wang, Junkun Yuan, Angtian Wang et al. | Fixes progressive oversaturation in DMD by projecting generated samples onto the data manifold during distillation, enabling stable few-step video generation. |
| [ScAn-Bench: Evaluating Scaling Analysis Methodology](http://arxiv.org/abs/2609.35707v1) | Artin Sermaxhaj, Nastaran Alipour, Donat Sinani et al. | First systematic benchmark for scaling-law estimation methods; reveals that popular fitting procedures often produce misleading optimal allocation prescriptions. |
| [Verifiable Visual Rewards Transfer from Synthetic Scenes to Natural Prompts](http://arxiv.org/abs/2609.35641v1) | Shuyue Stella Li, Xiaochuang Han, Yulia Tsvetkov et al. | Constructs verifiable rewards from synthetic scenes with ground-truth layout; shows they transfer to natural prompts, enabling reliable RLHF for precise instruction following. |
| [Rubric Rewards from Item Response Theory](http://arxiv.org/abs/2609.35646v1) | Milad Yazdani, Yaser Souri, Xiren Zhou et al. | Derives scalar rewards from multi-criterion rubrics using IRT, modeling criterion difficulty and discriminability—outperforms naive point-summing on alignment benchmarks. |

### 📊 Applications (domain-specific, multimodal, code generation)

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [GPUPhysBench: Benchmarking Coding Agents for Correct and Efficient GPU Physics Simulation](http://arxiv.org/abs/2609.35639v1) | Yuchen Sun, Jinjin He, Sinan Wang et al. | 50 tasks testing whether coding agents can write numerically accurate, performant GPU kernels for physical simulation—exposes gaps in numerical reasoning and kernel optimization. |
| [FinAutoRubric: Expert-Guided Automatic Rubric Generation for Evaluating Financial Research Agents](http://arxiv.org/abs/2609.35744v1) | Hoyoung Lee, Suyeol Yun, Jack Haverty et al. | Automates rubric creation from expert guidelines with cutoff-aware factual grounding, enabling institution-specific evaluation of finance agents without per-item manual annotation. |
| [X-Reset: Scaling Object-Centric Reinforcement Learning via Cross-Embodiment Resets](http://arxiv.org/abs/2609.35715v1) | Prithwish Dan, Chenyang Ma, Wei Zhan | Uses cross-embodiment reset distributions to solve exploration in dexterous manipulation; a single policy learns diverse object interactions without task-specific rewards. |
| [FurE: Efficient Instance-Specific 3D Fur Reconstruction without Animal-Fur Datasets](http://arxiv.org/abs/2609.35770v1) | Srinjay Sarkar, Prakhar Kaushik, Soumava Paul et al. | Reconstructs editable 3D fur from multi-view images without species-specific training data, using a procedural prior and test-time optimization for fine-scale detail. |

---

## Research Trend Signal

A clear shift is visible from **static model deployment** toward **adaptive inference-time systems**. Telescopic LMs, adaptive looped Transformers, and harness learning all treat compute allocation and control flow as first-class, learnable dimensions—moving beyond fixed architectures. Simultaneously, **self-supervised agent improvement** is gaining traction: self-retrospection, native reflection, and verifiable visual rewards reduce dependence on human annotation or external RL, instead leveraging the agent's own generations as training signal. A third current is **rigorous evaluation infrastructure**: ScAn-Bench for scaling laws, FTA-Bench for failure transparency, GPUPhysBench for coding agents, and CoSE-E for enterprise code-switching ASR signal that the community is investing in methodology to match model capability growth. Finally, **multi-scale and stochastic efficiency**—MS-GLA, SANTA++, MeqMuon—shows that architectural innovation remains far from saturated, targeting the memory–compute–quality trade-off at the operator level.

---

## Worth Deep Reading

1. **[Telescopic Language Models](http://arxiv.org/abs/2609.35769v1)** — The nested-capacity Transformer with stochastic prefix supervision is a principled solution to the "one model, many budgets" problem. If the scaling holds, it could obsolete per-budget distillation pipelines and reshape how models are served in production.

2. **[Shockingly Simple Self-retrospection Improves Agentic Models Without RL](http://arxiv.org/abs/2609.35741v1)** — A rare result showing pure self-supervised improvement on agent benchmarks. The mechanism—training on the agent's own natural-language post-hoc explanations—is simple, scalable, and avoids reward-model brittleness.

3. **[ScAn-Bench: Evaluating Scaling Analysis Methodology](http://arxiv.org/abs/2609.35707v1)** — Scaling laws drive billion-dollar compute allocation decisions. This benchmark exposes systematic flaws in current fitting practices; its findings could redirect how the field designs and interprets scaling experiments.

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*