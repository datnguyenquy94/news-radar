# ArXiv AI Research Digest 2026-07-31

> Source: [ArXiv](https://arxiv.org/) (cs.AI, cs.CL, cs.LG) | 50 papers | Generated: 2026-07-31 03:37 UTC

---

# ArXiv AI Research Digest — 2026-07-31

## Today's Highlights

Today's submissions reveal three accelerating frontiers: **recursive self-improvement** is moving from theory to executable MLE testbeds (Frontis-MA1), **inference-time compute strategies** are being rigorously stress-tested—with repeated sampling outperforming reflection at equal token budgets—and **agent evaluation infrastructure** is maturing through live, cross-platform benchmarks for computer-use agents (OSReward, ORCA-bench, InfoOps Bench). A parallel thread tackles **transparency and alignment** at the system-prompt level (AISPA) and in distillation pipelines (Lightning OPD 2.0, β-OPSD). Domain-specific foundation models are scaling to hundreds of thousands of expert reports (colonoscopy VLM) and integrating structured reasoning into high-stakes workflows (chemistry, cybersecurity, oncall).

---

## Key Papers

### 🧠 Large Language Models

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost, from 1.5B to 7B](http://arxiv.org/abs/2607.28576v1) | Iliya Mirzaei | Controlled experiments across 1.5B–7B models show that self-reflection and self-refinement methods consume extra tokens without surpassing simple repeated sampling; the apparent gains of reflection vanish when token budgets are matched, challenging a popular inference-scaling paradigm. |
| [Lightning OPD 2.0: Mitigating Style Bias in Cross-Teacher On-Policy Distillation for Large Reasoning Models](http://arxiv.org/abs/2607.28449v1) | Yecheng Wu, Song Han, Han Cai | Identifies style mismatch between SFT reference and OPD teacher as a key failure mode in on-policy distillation; proposes a lightweight correction that stabilizes cross-teacher distillation for reasoning models without requiring teacher-generated SFT data. |
| [SVR: Self-Verifying Refinement via Joint Verdict-Confidence Reinforcement Learning for Adaptive Test-Time Compute](http://arxiv.org/abs/2607.28457v1) | Hongyu Chen, Liang Lin, Guangrun Wang | Introduces an oracle-free multi-turn RL framework where the model learns to self-verify and refine its outputs, dynamically allocating test-time compute by predicting verdict confidence—reducing waste on easy instances. |
| [AISPA: User-Centric System Prompt Auditing for Large Language Model Applications](http://arxiv.org/abs/2607.28617v1) | Xiangning Lin, Shenzhe Zhu, Shu Yang et al. | Proposes the first user-centric framework for auditing hidden system prompts in deployed LLM applications, enabling transparency and accountability by reconstructing prompt behavior from input-output observations. |
| [Would You Walk to the Car Wash? Revealing the Salience Bias of Large Language Models in Commonsense Reasoning](http://arxiv.org/abs/2607.28478v1) | Zheng Wu, Chenhao Xue, Shijie Zheng et al. | Uncovers a "salience bias" where LLMs over-weight explicit input conditions and neglect implicit commonsense constraints, leading to brittle reasoning in everyday scenarios; provides a diagnostic benchmark and mitigation strategies. |

### 🤖 Agents & Reasoning

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](http://arxiv.org/abs/2607.28568v1) | Junlin Yang, Che Jiang, Yu Fu et al. | Launches OpenMLE, a full-stack executable testbed for recursive self-improvement (RSI) in ML engineering, and trains Frontis-MA1—an AI4AI model that autonomously proposes, implements, and validates ML improvements, demonstrating measurable RSI loops. |
| [MANTA: Multi-Agent Network Topology Adaptation for Self-Evolving Multi-Agent Systems](http://arxiv.org/abs/2607.28527v1) | Mao-xun Huang, Jerry Wang, Yi-Cheng Lai et al. | Introduces dynamic topology adaptation where agents rewire communication graphs based on task demands, enabling self-evolving coordination that outperforms static and offline-optimized topologies on complex reasoning benchmarks. |
| [OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models](http://arxiv.org/abs/2607.28609v1) | Qiushi Sun, Kanzhi Cheng, Yian Wang et al. | Establishes a unified benchmark and reward-model evaluation suite for computer-using agents (CUAs) across OS platforms, addressing the critical gap in verifiable trajectory assessment for agent training and deployment. |
| [ORCA-bench: How Ready Are Language Model Agents for Oncall?](http://arxiv.org/abs/2607.28545v1) | Albert Gong, Kyuseong Choi, Abhineet Agarwal et al. | Presents a realistic oncall root-cause analysis benchmark requiring agents to reason over noisy metrics, logs, traces, and code from ambiguous user reports—revealing significant gaps in current LLM agents' operational readiness. |
| [Rethinking Inference-Time Scaling in Local Computer-Use Agents: Failure Modes and Compute Tradeoffs](http://arxiv.org/abs/2607.28573v1) | Woongkyu Lee, Jungwook Choi | Systematically analyzes failure modes of inference-time scaling (self-consistency, tree search, reflection) for locally-deployed CUAs under strict hardware budgets, providing compute-aware guidelines for practical agent deployment. |

### 🔧 Methods & Frameworks

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [ReToken: One Token to Improve Vision-Language Models for Visual Retrieval](http://arxiv.org/abs/2607.28627v1) | Yao Xiao, Reuben Tan, Zhen Zhu et al. | Proposes a single learnable "retrieval token" that compresses long visual contexts into a fixed-size representation, enabling VLMs to scale to thousands of images without quadratic attention cost—achieving SOTA on visual retrieval benchmarks. |
| [β-OPSD: Deriving with Policy Optimization, Training with Self-Distillation](http://arxiv.org/abs/2607.28582v1) | Jiawei Xu, Minghui Liu, Juzheng Zhang et al. | Generalizes on-policy self-distillation (OPSD) as a β-parameterized family, showing β=1 is a brittle special case; derives stable policy-optimization objectives that make self-distillation reliable without engineering heuristics. |
| [DualG-MRAG: Decoupling Macro-Reasoning and Micro-Matching for Multimodal Retrieval-Augmented Generation](http://arxiv.org/abs/2607.28580v1) | Jiacheng Tao, Qingyun Sun, Haonan Yuan et al. | Separates multi-hop macro-reasoning (planning retrieval steps) from micro-matching (instance-level alignment) in MM-RAG, enabling explicit cross-modal relationship modeling and significant gains on complex multi-hop QA. |
| [Change2Task: From Repository Changes to Executable Coding Agent Tasks and Environments](http://arxiv.org/abs/2607.28591v1) | Haomin Qi, Xingliang Wang, Xuanqi Gao et al. | Automates conversion of real-world PRs into verified, executable coding-agent tasks with environment snapshots, tools, and test suites—dramatically expanding the supply of high-quality training/eval data for coding agents. |
| [InfoOps Bench: A live information operations safety benchmark](http://arxiv.org/abs/2607.28503v1) | Dorian Quelle, Lisa-Maria Neudert, Jonathan Bright et al. | Deploys a continuously updated benchmark drawn from 2,100+ tracked state-backed information operations, measuring frontier models' resilience to manipulation for covert influence campaigns—with live leaderboard and evolving threat coverage. |
| [MixFrag: Fragility-Guided Mixed-Precision Post-Training Quantization for Vision Transformers](http://arxiv.org/abs/2607.28589v1) | Md. Mehrab Hossain Opi, Robiul Islam Ryad, Md. Umar Faruk | Uses layer-wise fragility analysis to assign heterogeneous bit-widths in ViT quantization, preserving accuracy-critical components while aggressively compressing robust ones—achieving better accuracy-compression tradeoffs than uniform PTQ. |

### 📊 Applications

| Paper | Authors | Summary |
| :--- | :--- | :--- |
| [AskChem: Claim-Centered Infrastructure for Chemistry Literature Synthesis](http://arxiv.org/abs/2607.28618v1) | Bing Yan, Gregory Wolfe, Stefano Martiniani et al. | Builds a claim-centric knowledge graph over chemistry literature, enabling precise retrieval and synthesis of specific experimental findings (yields, conditions, mechanisms) rather than document-level search—accelerating AI-assisted discovery. |
| [A report-grounded vision-language foundation model for colonoscopy from 280000 routine reports](http://arxiv.org/abs/2607.28466v1) | Jia Yu, Yan Zhu, Yili He et al. | Trains a colonoscopy VLM on 280k routine clinical reports, grounding visual frames in expert textual findings; achieves strong zero-shot lesion detection and enables natural-language video querying for clinical workflow integration. |
| [Cybersecurity Detection Classification with Reasoning-enabled Language Models](http://arxiv.org/abs/2607.28460v1) | Amol Khanna, Manu Nandan, Cristian Viorel Popa et al. | Trains LLMs to emit structured reasoning chains before triage labels for SOC alerts, reducing false positives and providing auditable justifications—addressing alert fatigue through interpretable, reasoning-augmented classification. |
| [Towards Autonomous Aircraft Surveillance from Nanosatellites through On-Board Inference and Generative Data Augmentation](http://arxiv.org/abs/2607.28470v1) | Antonio Delgado-Rosa, David Muñoz-Valero, Enrique Adrian Villarrubia-Martin et al. | Deploys lightweight aircraft detectors on nanosatellites with on-board inference, using generative augmentation to overcome scarce labeled satellite data—demonstrating end-to-end autonomous surveillance under severe downlink constraints. |

---

## Research Trend Signal

Three convergent directions are crystallizing. **First, agent evaluation is becoming a first-class infrastructure problem**: OSReward, ORCA-bench, and InfoOps Bench share a philosophy of live, cross-platform, verifiable assessment—moving beyond static leaderboards to continuous, threat-aware, and operationally grounded benchmarks. **Second, test-time compute allocation is shifting from uniform scaling to adaptive, self-verifying strategies**: SVR, Sample More Reflect Less, and Rethinking Inference-Time Scaling collectively argue that models should *learn* when to spend compute, with repeated sampling emerging as a surprisingly strong baseline that reflection methods must beat on equal token budgets. **Third, recursive self-improvement (RSI) is gaining an executable foothold**: Frontis-MA1's OpenMLE testbed transforms RSI from a theoretical concern into a measurable ML engineering loop, while MANTA's topology adaptation and β-OPSD's stabilized self-distillation provide complementary mechanisms for autonomous improvement. Together, these trends suggest the next 12 months will see agent ecosystems where evaluation, inference economics, and self-improvement are co-designed rather than bolted on.

---

## Worth Deep Reading

1. **[Frontis-MA1: Training an AI4AI Model towards Recursive Self-Improvement in Machine Learning Engineering](http://arxiv.org/abs/2607.28568v1)** — *Provides the first open, full-stack testbed (OpenMLE) for studying recursive self-improvement in a concrete, executable domain (MLE). The paper demonstrates measurable RSI loops and establishes evaluation protocols that the community can build on. Essential for anyone tracking AI self-improvement trajectories.*

2. **[Sample More, Reflect Less: Self-Refine and Reflexion Lose to Repeated Sampling at Equal Token Cost](http://arxiv.org/abs/2607.28576v1)** — *A rigorous controlled study that upends a widely adopted inference-scaling paradigm. The finding that reflection's gains disappear under token-matched comparison has immediate implications for production LLM deployments, benchmark design, and the economics of test-time compute. Methodologically exemplary.*

3. **[OSReward: Instituting Standardized Evaluation for Cross-Platform Computer-Use Reward Models](http://arxiv.org/abs/2607.28609v1)** — *Addresses the critical missing piece in the CUA stack: a unified, verifiable reward signal across platforms. The benchmark design, reward-model evaluation suite, and cross-platform trajectory format set a new standard for agent evaluation infrastructure. Foundational for the next wave of computer-using agents.*

---
*This digest is auto-generated by [agents-radar](https://github.com/datnguyenquy94/news-radar).*